from __future__ import annotations

from dataclasses import replace
from datetime import datetime
from typing import Any

from .finalizer import finalize_trial, missing_result_attempt
from .health import audit_trials
from .models import ExperimentConfig, PoolClaim, PoolRecord, RunRecord, now_iso
from .remote import cleanup_remote_run_containers
from .runner import refresh_processes, slug, start_run, sync_finished_remote_run, validate_config
from .sheet_queue import SheetQueue
from .store import StateStore


def start_sheet_pool(config: ExperimentConfig, store: StateStore) -> PoolRecord:
    validate_config(config)
    owner = slug(config.sheet_owner or "local")
    timestamp = datetime.now().strftime("%Y%m%d-%H%M%S")
    pool_id = f"{slug(config.name)}-{owner}-sheet-pool-{timestamp}"
    pool = PoolRecord(
        id=pool_id,
        status="running",
        source="sheet",
        config=config,
        capacity=config.concurrency,
        started_at=now_iso(),
        updated_at=now_iso(),
    )
    store.upsert_pool(pool)
    return step_sheet_pool(pool.id, store) or pool


def step_sheet_pool(pool_id: str, store: StateStore) -> PoolRecord | None:
    refresh_processes(store)
    pool = store.get_pool(pool_id)
    if pool is None:
        return None
    queue = SheetQueue(pool.config)
    pool = finalize_active_claims(pool, store, queue)
    pool = fill_open_sheet_slots(pool, store, queue)
    pool.status = sheet_pool_status(pool)
    pool.updated_at = now_iso()
    if pool.status == "completed" and not pool.finished_at:
        pool.finished_at = now_iso()
    store.upsert_pool(pool)
    return pool


def finalize_active_claims(
    pool: PoolRecord, store: StateStore, queue: SheetQueue
) -> PoolRecord:
    active: list[PoolClaim] = []
    for claim in pool.active_claims:
        run = store.get_run(claim.run_id)
        if run is None:
            active.append(claim)
            continue
        if run.config.run_target == "gcp_ssh" and run.status != "running" and not run.synced_at:
            if not run.sync_error:
                sync_finished_remote_run(run, store)
            run = store.get_run(claim.run_id) or run
        audit = audit_for_claim(run, claim)
        if audit is None:
            if run.status == "running" or (run.config.run_target == "gcp_ssh" and not run.synced_at):
                active.append(claim)
                continue
            attempt = missing_result_attempt(
                task_name=claim.task_name,
                run=run,
                reason=run.sync_error or "missing result.json",
                sheet_row=claim.sheet_row,
                sheet_slot=claim.sheet_slot,
            )
            if run.config.run_target == "gcp_ssh":
                cleanup_remote_run_containers(run)
            queue.write_missing_result(claim, attempt.reason)
            pool.attempts.append(attempt)
            continue
        if run.config.run_target == "gcp_ssh":
            cleanup_remote_run_containers(run)
        finalized = finalize_trial(
            audit=audit,
            run=run,
            sheet_row=claim.sheet_row,
            sheet_slot=claim.sheet_slot,
            claim_id=claim.id,
        )
        queue.write_final_result(claim, audit)
        pool.attempts.append(finalized.attempt)
    pool.active_claims = active
    pool.active_runs = {claim.id: claim.run_id for claim in active}
    return pool


def fill_open_sheet_slots(
    pool: PoolRecord, store: StateStore, queue: SheetQueue
) -> PoolRecord:
    if pool.status not in {"running", "created"}:
        return pool
    open_slots = max(0, pool.capacity - len(pool.active_claims))
    if open_slots <= 0:
        return pool
    claims = queue.claim_distinct_tasks(open_slots, pool.id)
    if not claims:
        return pool
    active = [*pool.active_claims]
    for claim in claims:
        try:
            run = start_run(slot_config(pool.config, claim), store)
        except Exception:
            queue.release_claims([claim])
            raise
        claim.run_id = run.id
        claim.status = "running"
        active.append(claim)
    pool.active_claims = active
    pool.active_runs = {claim.id: claim.run_id for claim in active}
    return pool


def slot_config(config: ExperimentConfig, claim: PoolClaim) -> ExperimentConfig:
    return replace(
        config,
        name=f"{config.name}-{claim.task_name}-run-{claim.sheet_slot}",
        concurrency=1,
        include_tasks=[claim.task_name],
        exclude_tasks=[],
    )


def audit_for_claim(run: RunRecord, claim: PoolClaim):
    for audit in audit_trials(run.jobs_dir):
        if audit.task_name == claim.task_name:
            return audit
    return None


def sheet_pool_status(pool: PoolRecord) -> str:
    if pool.status == "stopped":
        return "stopped"
    if pool.active_claims:
        return "running"
    return "completed"


def sheet_pool_snapshot(pool: PoolRecord, store: StateStore) -> dict[str, Any]:
    active = [
        {
            "task_name": claim.task_name,
            "run_id": claim.run_id,
            "sheet_row": claim.sheet_row,
            "sheet_slot": claim.sheet_slot,
            "claim": claim.to_dict(),
            "run": store.get_run(claim.run_id).to_dict() if store.get_run(claim.run_id) else None,
        }
        for claim in pool.active_claims
    ]
    attempts = [attempt.to_dict() for attempt in pool.attempts]
    usable = sum(1 for attempt in pool.attempts if attempt.usable)
    invalid = sum(1 for attempt in pool.attempts if attempt.usable is False)
    return {
        "pool": pool.to_dict(),
        "summary": {
            "capacity": pool.capacity,
            "queued": 0,
            "active": len(pool.active_claims),
            "attempts": len(pool.attempts),
            "usable": usable,
            "invalid": invalid,
            "total": len(pool.active_claims) + len(pool.attempts),
        },
        "active": active,
        "attempts": attempts,
    }
