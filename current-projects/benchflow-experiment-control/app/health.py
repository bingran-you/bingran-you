from __future__ import annotations

import json
from dataclasses import asdict, dataclass
from pathlib import Path
from typing import Any


@dataclass
class TrialAudit:
    task_name: str
    trial_name: str
    usable: bool
    verdict: str
    reason: str
    reward: float | None
    outcome: str
    status_raw: str
    error: str
    error_category: str
    verifier_error: str
    total_tokens: int | None
    input_tokens: int | None
    output_tokens: int | None
    cache_read_input_tokens: int | None
    cache_creation_input_tokens: int | None
    usage_source: str
    price_source: str
    total_cost_usd: float | None
    acp_trajectory_events: int
    llm_trajectory_events: int
    n_tool_calls: int | None
    n_skill_invocations: int | None
    started_at: str
    finished_at: str
    timing: dict[str, float]
    result_path: str
    config_path: str
    acp_trajectory_path: str
    llm_trajectory_path: str
    trial_path: str

    def to_dict(self) -> dict[str, Any]:
        return asdict(self)


def audit_run_dir(run_dir: str | Path) -> TrialAudit | None:
    audits = audit_trials(run_dir)
    return audits[0] if audits else None


def audit_trials(run_dir: str | Path) -> list[TrialAudit]:
    root = Path(run_dir).expanduser()
    trial_dirs = [
        path.parent
        for path in sorted(root.rglob("result.json"))
        if path.is_file() and not path.parent.name.startswith(".")
    ]
    return [audit_trial_dir(path, root) for path in trial_dirs]


def audit_trial_dir(trial_dir: str | Path, root: str | Path | None = None) -> TrialAudit:
    trial_path = Path(trial_dir).expanduser()
    root_path = Path(root).expanduser() if root else trial_path.parent
    result_path = trial_path / "result.json"
    config_path = trial_path / "config.json"
    result = read_json(result_path)
    agent_result = result.get("agent_result") if isinstance(result.get("agent_result"), dict) else {}
    acp_trajectory_path = trial_path / "trajectory" / "acp_trajectory.jsonl"
    llm_trajectory_path = trial_path / "trajectory" / "llm_trajectory.jsonl"
    acp_events, acp_error = count_jsonl_events(acp_trajectory_path)
    llm_events, llm_error = count_jsonl_events(llm_trajectory_path)
    reward = read_reward(result)
    total_tokens = read_int(agent_result.get("total_tokens"))
    input_tokens = read_int(agent_result.get("n_input_tokens"))
    output_tokens = read_int(agent_result.get("n_output_tokens"))
    task_name = str(result.get("task_name") or trial_path.name.split("__")[0])
    outcome = classify_outcome(result, reward)
    reasons = health_failures(
        result,
        agent_result,
        acp_trajectory_path,
        acp_events,
        acp_error,
        llm_trajectory_path,
        llm_events,
        llm_error,
    )
    usable = not reasons
    timing = result.get("timing") if isinstance(result.get("timing"), dict) else {}
    return TrialAudit(
        task_name=task_name,
        trial_name=str(result.get("rollout_name") or trial_path.name),
        usable=usable,
        verdict="usable" if usable else "invalid",
        reason="; ".join(reasons),
        reward=reward,
        outcome=outcome,
        status_raw=status_raw_for_outcome(outcome, usable),
        error=str(result.get("error") or ""),
        error_category=str(result.get("error_category") or ""),
        verifier_error=str(result.get("verifier_error") or ""),
        total_tokens=total_tokens,
        input_tokens=input_tokens,
        output_tokens=output_tokens,
        cache_read_input_tokens=read_int(agent_result.get("n_cache_read_tokens")),
        cache_creation_input_tokens=read_int(agent_result.get("n_cache_creation_tokens")),
        usage_source=str(agent_result.get("usage_source") or ""),
        price_source=str(agent_result.get("price_source") or ""),
        total_cost_usd=read_float(agent_result.get("cost_usd")),
        acp_trajectory_events=acp_events,
        llm_trajectory_events=llm_events,
        n_tool_calls=read_int(result.get("n_tool_calls") or agent_result.get("n_tool_calls")),
        n_skill_invocations=read_int(
            result.get("n_skill_invocations") or agent_result.get("n_skill_invocations")
        ),
        started_at=str(result.get("started_at") or ""),
        finished_at=str(result.get("finished_at") or ""),
        timing={key: float(value) for key, value in timing.items() if isinstance(value, int | float)},
        result_path=relative_path(result_path, root_path),
        config_path=relative_path(config_path, root_path) if config_path.is_file() else "",
        acp_trajectory_path=relative_path(acp_trajectory_path, root_path),
        llm_trajectory_path=relative_path(llm_trajectory_path, root_path),
        trial_path=relative_path(trial_path, root_path),
    )


def health_failures(
    result: dict[str, Any],
    agent_result: dict[str, Any],
    acp_trajectory_path: Path,
    acp_trajectory_events: int,
    acp_trajectory_error: str,
    llm_trajectory_path: Path,
    llm_trajectory_events: int,
    llm_trajectory_error: str,
) -> list[str]:
    failures: list[str] = []
    if read_reward(result) is None:
        failures.append("missing numeric reward")
    if result.get("verifier_error"):
        failures.append("verifier error")
    if result.get("export_error"):
        failures.append("export error")
    if result.get("cleanup_error"):
        failures.append("cleanup error")
    if result.get("trajectory_source") != "acp":
        failures.append("trajectory_source is not acp")
    if result.get("partial_trajectory") is not False:
        failures.append("partial trajectory")
    if not acp_trajectory_path.is_file() or acp_trajectory_path.stat().st_size <= 0:
        failures.append("missing acp trajectory")
    elif acp_trajectory_error:
        failures.append(acp_trajectory_error)
    elif acp_trajectory_events <= 0:
        failures.append("empty acp trajectory")
    if not llm_trajectory_path.is_file() or llm_trajectory_path.stat().st_size <= 0:
        failures.append("missing llm trajectory")
    elif llm_trajectory_error:
        failures.append(llm_trajectory_error)
    elif llm_trajectory_events <= 0:
        failures.append("empty llm trajectory")
    if agent_result.get("usage_source") != "provider_response":
        failures.append("usage source is not provider_response")
    total_tokens = read_int(agent_result.get("total_tokens"))
    if total_tokens is None:
        failures.append("missing total_tokens")
    elif total_tokens <= 0:
        failures.append("non-positive total_tokens")
    if read_int(agent_result.get("n_input_tokens")) is None:
        failures.append("missing input tokens")
    if read_int(agent_result.get("n_output_tokens")) is None:
        failures.append("missing output tokens")
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


def classify_outcome(result: dict[str, Any], reward: float | None) -> str:
    if reward is not None and reward >= 1.0:
        return "pass"
    error_text = " ".join(
        str(result.get(key) or "")
        for key in ("error", "error_category", "verifier_error", "verifier_error_category")
    ).lower()
    if "timeout" in error_text or "timed out" in error_text:
        return "timeout"
    return "fail" if reward is not None else "error"


def status_raw_for_outcome(outcome: str, usable: bool) -> str:
    if not usable:
        return "bfec_invalid"
    if outcome == "timeout":
        return "usable_error"
    return outcome


def relative_path(path: Path, root: Path) -> str:
    try:
        return path.relative_to(root).as_posix()
    except ValueError:
        return path.as_posix()
