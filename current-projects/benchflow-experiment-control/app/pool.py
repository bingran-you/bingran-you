from __future__ import annotations

from dataclasses import replace
from datetime import datetime
from typing import Any

from .health import audit_run_dir
from .models import ExperimentConfig, PoolAttempt, PoolRecord, now_iso
from .remote import cleanup_remote_run_containers, list_remote_tasks
from .runner import refresh_processes, slug, start_run, stop_run, sync_finished_remote_run, validate_config
from .store import StateStore
from .task_selection import available_task_names, select_task_names


def start_pool(config: ExperimentConfig, store: StateStore) -> PoolRecord:
    if config.sheet_id:
        from .sheet_pool import start_sheet_pool

        return start_sheet_pool(config, store)
    validate_config(config)
    capacity = config.concurrency
    selected_tasks = select_pool_tasks(config)
    pool_id = f"{slug(config.name)}-pool-{datetime.now().strftime('%Y%m%d-%H%M%S')}"
    pool = PoolRecord(
        id=pool_id,
        status="running",
        config=config,
        capacity=capacity,
        queue=selected_tasks,
        started_at=now_iso(),
        updated_at=now_iso(),
    )
    store.upsert_pool(pool)
    return step_pool(pool.id, store) or pool


def step_pool(pool_id: str, store: StateStore) -> PoolRecord | None:
    refresh_processes(store)
    pool = store.get_pool(pool_id)
    if pool is None:
        return None
    if pool.source == "sheet":
        from .sheet_pool import step_sheet_pool

        return step_sheet_pool(pool.id, store)
    pool = collect_finished_runs(pool, store)
    pool = fill_open_slots(pool, store)
    pool.status = pool_status(pool)
    pool.updated_at = now_iso()
    if pool.status == "completed" and not pool.finished_at:
        pool.finished_at = now_iso()
    store.upsert_pool(pool)
    return pool


def stop_pool(pool_id: str, store: StateStore) -> PoolRecord | None:
    pool = store.get_pool(pool_id)
    if pool is None:
        return None
    for run_id in set(pool.active_runs.values()):
        stop_run(run_id, store)
    if pool.source == "sheet" and pool.active_claims:
        from .sheet_queue import SheetQueue

        SheetQueue(pool.config).release_claims(pool.active_claims)
        pool.active_claims = []
        pool.active_runs = {}
    pool.status = "stopped"
    pool.updated_at = now_iso()
    pool.finished_at = now_iso()
    store.upsert_pool(pool)
    return pool


def pool_snapshot(pool: PoolRecord, store: StateStore) -> dict[str, Any]:
    if pool.source == "sheet":
        from .sheet_pool import sheet_pool_snapshot

        return sheet_pool_snapshot(pool, store)
    active = []
    for task, run_id in sorted(pool.active_runs.items()):
        run = store.get_run(run_id)
        active.append({"task_name": task, "run_id": run_id, "run": run.to_dict() if run else None})
    attempts = [attempt.to_dict() for attempt in pool.attempts]
    usable = sum(1 for attempt in pool.attempts if attempt.usable)
    invalid = sum(1 for attempt in pool.attempts if attempt.usable is False)
    return {
        "pool": pool.to_dict(),
        "summary": {
            "capacity": pool.capacity,
            "queued": len(pool.queue),
            "active": len(pool.active_runs),
            "attempts": len(pool.attempts),
            "usable": usable,
            "invalid": invalid,
            "total": len(pool.queue) + len(pool.active_runs) + len(pool.attempts),
        },
        "active": active,
        "attempts": attempts,
    }


def select_pool_tasks(config: ExperimentConfig) -> list[str]:
    if config.run_target == "gcp_ssh":
        available = list_remote_tasks(config)
    else:
        available = available_task_names(config.tasks_dir)
    return select_task_names(available, config.include_tasks, config.exclude_tasks)


def collect_finished_runs(pool: PoolRecord, store: StateStore) -> PoolRecord:
    active = dict(pool.active_runs)
    for task_name, run_id in list(active.items()):
        run = store.get_run(run_id)
        if run is None or run.status == "running":
            continue
        if run.config.run_target == "gcp_ssh" and not run.synced_at and not run.sync_error:
            sync_finished_remote_run(run, store)
            run = store.get_run(run_id)
        if run is None:
            continue
        if run.config.run_target == "gcp_ssh" and run.sync_error:
            cleanup_remote_run_containers(run)
            pool.attempts.append(invalid_attempt(task_name, run, f"sync failed: {run.sync_error}"))
            active.pop(task_name)
            continue
        if run.config.run_target == "gcp_ssh" and not run.synced_at:
            continue
        if run.config.run_target == "gcp_ssh":
            cleanup_remote_run_containers(run)
        pool.attempts.append(attempt_from_run(task_name, run))
        active.pop(task_name)
    pool.active_runs = active
    return pool


def fill_open_slots(pool: PoolRecord, store: StateStore) -> PoolRecord:
    if pool.status not in {"running", "created"}:
        return pool
    while pool.queue and len(pool.active_runs) < pool.capacity:
        task_name = pool.queue.pop(0)
        try:
            run = start_run(pool_run_config(pool, task_name), store)
        except Exception:
            pool.queue.insert(0, task_name)
            raise
        pool.active_runs[task_name] = run.id
    return pool


def pool_run_config(pool: PoolRecord, task_name: str) -> ExperimentConfig:
    return replace(
        pool.config,
        name=f"{pool.config.name}-{task_name}",
        concurrency=1,
        include_tasks=[task_name],
        exclude_tasks=[],
    )


def attempt_from_run(task_name: str, run) -> PoolAttempt:
    audit = audit_run_dir(run.jobs_dir)
    if audit is None:
        return invalid_attempt(task_name, run, "missing result.json")
    return PoolAttempt(
        task_name=audit.task_name or task_name,
        run_id=run.id,
        status="usable" if audit.usable else "invalid",
        usable=audit.usable,
        reason=audit.reason,
        reward=audit.reward,
        total_tokens=audit.total_tokens,
        trajectory_events=audit.acp_trajectory_events,
        result_path=audit.result_path,
        trial_path=audit.trial_path,
        started_at=run.started_at,
        finished_at=run.finished_at,
        audited_at=now_iso(),
    )


def invalid_attempt(task_name: str, run, reason: str) -> PoolAttempt:
    return PoolAttempt(
        task_name=task_name,
        run_id=run.id,
        status="invalid",
        usable=False,
        reason=reason,
        started_at=run.started_at,
        finished_at=run.finished_at,
        audited_at=now_iso(),
    )


def pool_status(pool: PoolRecord) -> str:
    if pool.status == "stopped":
        return "stopped"
    if pool.queue or pool.active_runs:
        return "running"
    return "completed"
