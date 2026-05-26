from __future__ import annotations

import json
from dataclasses import dataclass
from datetime import datetime
from pathlib import Path
from typing import Any

from .models import RunRecord
from .remote import read_remote_artifact, remote_log_tail, remote_snapshot


@dataclass
class TaskRow:
    task_name: str
    trial_name: str
    status: str
    reward: float | None
    duration_sec: float | None
    agent: str
    model: str
    error: str | None
    result_path: str | None
    config_path: str | None
    trial_path: str
    updated_at: str | None

    def to_dict(self) -> dict[str, Any]:
        return self.__dict__.copy()


def discover_tasks(tasks_dir: str) -> list[str]:
    root = Path(tasks_dir).expanduser()
    if not root.is_dir():
        return []
    return sorted(child.name for child in root.iterdir() if (child / "task.toml").is_file())


def scan_run(run: RunRecord) -> dict[str, Any]:
    if run.config.run_target == "gcp_ssh":
        local_root = Path(run.jobs_dir).expanduser()
        if run.status != "running" and local_root.is_dir():
            rows = [_task_row(path, local_root, run.status) for path in find_trial_dirs(local_root)]
            log_tail = tail_file(str(local_root / "run.log"))
            snapshot_error = None
        else:
            snapshot = remote_snapshot(run)
            rows = [_task_row_from_remote(item, run.status) for item in snapshot.get("trials", [])]
            log_tail = remote_log_tail(run)
            snapshot_error = snapshot.get("error")
        rows = add_expected_task_rows(rows, run.selected_tasks, run.status)
        rows.sort(key=lambda item: (status_order(item.status), item.task_name, item.trial_name))
        return {
            "run": run.to_dict(),
            "summary": summarize(rows),
            "tasks": [row.to_dict() for row in rows],
            "log_tail": log_tail,
            "snapshot_error": snapshot_error,
            "sync_error": run.sync_error,
        }

    root = Path(run.jobs_dir).expanduser()
    rows = [_task_row(path, root, run.status) for path in find_trial_dirs(root)]
    rows = add_expected_task_rows(rows, run.selected_tasks, run.status)
    rows.sort(key=lambda item: (status_order(item.status), item.task_name, item.trial_name))
    summary = summarize(rows)
    return {
        "run": run.to_dict(),
        "summary": summary,
        "tasks": [row.to_dict() for row in rows],
        "log_tail": tail_file(run.log_path),
    }


def find_trial_dirs(root: Path) -> list[Path]:
    if not root.is_dir():
        return []
    dirs: list[Path] = []
    for child in root.rglob("*"):
        if not child.is_dir():
            continue
        if (child / "result.json").is_file() or (child / "config.json").is_file():
            if child.name.startswith("."):
                continue
            dirs.append(child)
    return sorted(set(dirs))


def summarize(rows: list[TaskRow]) -> dict[str, Any]:
    counts = {status: 0 for status in ("running", "pass", "fail", "error", "pending")}
    reward_sum = 0.0
    reward_count = 0
    for row in rows:
        counts[row.status] = counts.get(row.status, 0) + 1
        if row.reward is not None:
            reward_sum += row.reward
            reward_count += 1
    total = len(rows)
    done = counts.get("pass", 0) + counts.get("fail", 0) + counts.get("error", 0)
    return {
        "total": total,
        "done": done,
        "running": counts.get("running", 0),
        "passed": counts.get("pass", 0),
        "failed": counts.get("fail", 0),
        "errored": counts.get("error", 0),
        "pending": counts.get("pending", 0),
        "mean_reward": reward_sum / reward_count if reward_count else None,
    }


def add_expected_task_rows(
    rows: list[TaskRow], expected_tasks: list[str], run_status: str
) -> list[TaskRow]:
    if not expected_tasks:
        return rows
    seen = {row.task_name for row in rows}
    missing_status = "running" if run_status == "running" else "pending"
    additions = [
        TaskRow(
            task_name=task_name,
            trial_name="",
            status=missing_status,
            reward=None,
            duration_sec=None,
            agent="",
            model="",
            error=None,
            result_path=None,
            config_path=None,
            trial_path="",
            updated_at=None,
        )
        for task_name in expected_tasks
        if task_name not in seen
    ]
    return [*rows, *additions]


def _task_row(trial_dir: Path, root: Path, run_status: str) -> TaskRow:
    result_path = trial_dir / "result.json"
    config_path = trial_dir / "config.json"
    result = read_json(result_path)
    config = read_json(config_path)
    task_name = (
        result.get("task_name")
        or Path(str(config.get("task_path") or "")).name
        or trial_dir.name.split("__")[0]
    )
    reward = read_reward(result)
    error = result.get("error") or result.get("verifier_error")
    status = task_status(result, reward, error, run_status)
    timing = result.get("timing") if isinstance(result.get("timing"), dict) else {}
    duration = timing.get("total") if isinstance(timing.get("total"), int | float) else None
    updated = modified_at(result_path if result_path.exists() else trial_dir)
    return TaskRow(
        task_name=str(task_name),
        trial_name=trial_dir.name,
        status=status,
        reward=reward,
        duration_sec=float(duration) if duration is not None else None,
        agent=str(result.get("agent") or config.get("agent") or ""),
        model=str(result.get("model") or config.get("model") or ""),
        error=str(error) if error else None,
        result_path=relative_path(result_path, root) if result_path.exists() else None,
        config_path=relative_path(config_path, root) if config_path.exists() else None,
        trial_path=relative_path(trial_dir, root),
        updated_at=updated,
    )


def _task_row_from_remote(item: dict[str, Any], run_status: str) -> TaskRow:
    result = item.get("result") if isinstance(item.get("result"), dict) else {}
    config = item.get("config") if isinstance(item.get("config"), dict) else {}
    task_name = (
        result.get("task_name")
        or Path(str(config.get("task_path") or "")).name
        or str(item.get("trial_name") or "").split("__")[0]
    )
    reward = read_reward(result)
    error = result.get("error") or result.get("verifier_error")
    timing = result.get("timing") if isinstance(result.get("timing"), dict) else {}
    duration = timing.get("total") if isinstance(timing.get("total"), int | float) else None
    return TaskRow(
        task_name=str(task_name),
        trial_name=str(item.get("trial_name") or ""),
        status=task_status(result, reward, error, run_status),
        reward=reward,
        duration_sec=float(duration) if duration is not None else None,
        agent=str(result.get("agent") or config.get("agent") or ""),
        model=str(result.get("model") or config.get("model") or ""),
        error=str(error) if error else None,
        result_path=item.get("result_path"),
        config_path=item.get("config_path"),
        trial_path=str(item.get("trial_path") or ""),
        updated_at=remote_modified_at(item.get("updated_at")),
    )


def task_status(
    result: dict[str, Any], reward: float | None, error: Any, run_status: str
) -> str:
    if not result:
        return "running" if run_status == "running" else "pending"
    if error and reward is None:
        return "error"
    if reward is None:
        return "fail"
    return "pass" if reward >= 1.0 else "fail"


def read_reward(result: dict[str, Any]) -> float | None:
    rewards = result.get("rewards")
    if isinstance(rewards, dict) and isinstance(rewards.get("reward"), int | float):
        return float(rewards["reward"])
    if isinstance(rewards, int | float):
        return float(rewards)
    return None


def read_json(path: Path) -> dict[str, Any]:
    if not path.is_file():
        return {}
    try:
        data = json.loads(path.read_text())
    except json.JSONDecodeError:
        return {}
    return data if isinstance(data, dict) else {}


def read_artifact(run: RunRecord, relative: str) -> dict[str, Any]:
    local_root = Path(run.jobs_dir).expanduser().resolve()
    local_target = (local_root / relative).resolve()
    if local_target.is_file() and is_within(local_target, local_root):
        return read_local_artifact(local_target, relative)

    if run.config.run_target == "gcp_ssh":
        return read_remote_artifact(run, relative)

    if not local_target.is_file() or not is_within(local_target, local_root):
        raise FileNotFoundError(relative)
    return read_local_artifact(local_target, relative)


def read_local_artifact(target: Path, relative: str) -> dict[str, Any]:
    if target.stat().st_size > 2_000_000:
        return {"path": relative, "too_large": True, "content": ""}
    return {"path": relative, "too_large": False, "content": target.read_text(errors="replace")}


def tail_file(path: str, limit: int = 16_000) -> str:
    file_path = Path(path)
    if not file_path.is_file():
        return ""
    data = file_path.read_bytes()
    return data[-limit:].decode(errors="replace")


def relative_path(path: Path, root: Path) -> str:
    try:
        return path.relative_to(root).as_posix()
    except ValueError:
        return path.as_posix()


def modified_at(path: Path) -> str | None:
    try:
        return datetime.fromtimestamp(path.stat().st_mtime).astimezone().isoformat(timespec="seconds")
    except OSError:
        return None


def remote_modified_at(value: Any) -> str | None:
    if not isinstance(value, int | float):
        return None
    return datetime.fromtimestamp(value).astimezone().isoformat(timespec="seconds")


def is_within(path: Path, root: Path) -> bool:
    return path == root or root in path.parents


def status_order(status: str) -> int:
    return {"running": 0, "error": 1, "fail": 2, "pending": 3, "pass": 4}.get(status, 5)
