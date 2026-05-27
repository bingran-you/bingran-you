from __future__ import annotations

import json
from dataclasses import asdict, dataclass
from pathlib import Path
from typing import Any


@dataclass
class TrialAudit:
    task_name: str
    usable: bool
    verdict: str
    reason: str
    reward: float | None
    total_tokens: int | None
    trajectory_events: int
    result_path: str
    trial_path: str

    def to_dict(self) -> dict[str, Any]:
        return asdict(self)


def audit_run_dir(run_dir: str | Path) -> TrialAudit | None:
    root = Path(run_dir).expanduser()
    trial_dirs = [
        path.parent
        for path in sorted(root.rglob("result.json"))
        if path.is_file() and not path.parent.name.startswith(".")
    ]
    if not trial_dirs:
        return None
    return audit_trial_dir(trial_dirs[0], root)


def audit_trial_dir(trial_dir: str | Path, root: str | Path | None = None) -> TrialAudit:
    trial_path = Path(trial_dir).expanduser()
    root_path = Path(root).expanduser() if root else trial_path.parent
    result_path = trial_path / "result.json"
    result = read_json(result_path)
    agent_result = result.get("agent_result") if isinstance(result.get("agent_result"), dict) else {}
    trajectory_path = trial_path / "trajectory" / "acp_trajectory.jsonl"
    trajectory_events, trajectory_error = count_jsonl_events(trajectory_path)
    reward = read_reward(result)
    total_tokens = read_int(agent_result.get("total_tokens"))
    task_name = str(result.get("task_name") or trial_path.name.split("__")[0])
    reasons = health_failures(result, agent_result, trajectory_path, trajectory_events, trajectory_error)
    usable = not reasons
    return TrialAudit(
        task_name=task_name,
        usable=usable,
        verdict="usable" if usable else "invalid",
        reason="; ".join(reasons),
        reward=reward,
        total_tokens=total_tokens,
        trajectory_events=trajectory_events,
        result_path=relative_path(result_path, root_path),
        trial_path=relative_path(trial_path, root_path),
    )


def health_failures(
    result: dict[str, Any],
    agent_result: dict[str, Any],
    trajectory_path: Path,
    trajectory_events: int,
    trajectory_error: str,
) -> list[str]:
    failures: list[str] = []
    if read_reward(result) is None:
        failures.append("missing numeric reward")
    if result.get("verifier_error"):
        failures.append("verifier error")
    if result.get("export_error"):
        failures.append("export error")
    if result.get("trajectory_source") != "acp":
        failures.append("trajectory_source is not acp")
    if result.get("partial_trajectory") is not False:
        failures.append("partial trajectory")
    if not trajectory_path.is_file() or trajectory_path.stat().st_size <= 0:
        failures.append("missing acp trajectory")
    elif trajectory_error:
        failures.append(trajectory_error)
    elif trajectory_events <= 0:
        failures.append("empty acp trajectory")
    if agent_result.get("usage_source") != "provider_response":
        failures.append("usage source is not provider_response")
    if read_int(agent_result.get("total_tokens")) is None:
        failures.append("missing total_tokens")
    return failures


def count_jsonl_events(path: Path) -> tuple[int, str]:
    if not path.is_file():
        return 0, ""
    count = 0
    try:
        with path.open(errors="replace") as handle:
            for line in handle:
                if not line.strip():
                    continue
                json.loads(line)
                count += 1
    except json.JSONDecodeError as exc:
        return count, f"invalid trajectory jsonl: {exc.msg}"
    return count, ""


def read_json(path: Path) -> dict[str, Any]:
    if not path.is_file():
        return {}
    try:
        data = json.loads(path.read_text())
    except json.JSONDecodeError:
        return {}
    return data if isinstance(data, dict) else {}


def read_reward(result: dict[str, Any]) -> float | None:
    rewards = result.get("rewards")
    if isinstance(rewards, dict):
        return read_float(rewards.get("reward"))
    return read_float(rewards)


def read_float(value: Any) -> float | None:
    return float(value) if isinstance(value, int | float) else None


def read_int(value: Any) -> int | None:
    return int(value) if isinstance(value, int | float) else None


def relative_path(path: Path, root: Path) -> str:
    try:
        return path.relative_to(root).as_posix()
    except ValueError:
        return path.as_posix()
