from __future__ import annotations

from dataclasses import asdict, dataclass, field
from datetime import datetime
from pathlib import Path
from typing import Any


PROJECT_ROOT = Path(__file__).resolve().parents[1]
DEFAULT_DATA_DIR = PROJECT_ROOT / "data"
DEFAULT_ENV_FILE = "/Users/bingran_you/Downloads/GitHub/bingran-you/.env"


def now_iso() -> str:
    return datetime.now().astimezone().isoformat(timespec="seconds")


@dataclass
class ExperimentConfig:
    name: str
    run_target: str = "gcp_ssh"
    benchflow_root: str = ""
    tasks_dir: str = ""
    env_file: str = DEFAULT_ENV_FILE
    jobs_root: str = "/Users/bingran_you/Downloads/GitHub/bingran-you/workspace/experiment"
    remote_host: str = ""
    remote_user: str = ""
    remote_run_user: str = ""
    remote_port: int = 22
    remote_ssh_key: str = ""
    remote_benchflow_root: str = ""
    remote_tasks_dir: str = ""
    remote_jobs_root: str = "benchflow-experiment-runs"
    agent: str = "gemini"
    model: str = "gemini-3-flash-preview"
    sandbox: str = "docker"
    concurrency: int = 4
    skills_profile: str = "with-skills"
    skills_mode: str = "default"
    skills_dir: str = ""
    include_tasks: list[str] = field(default_factory=list)
    exclude_tasks: list[str] = field(default_factory=list)
    extra_args: str = ""

    @classmethod
    def from_dict(cls, raw: dict[str, Any]) -> "ExperimentConfig":
        def list_field(name: str) -> list[str]:
            value = raw.get(name) or []
            if isinstance(value, str):
                return split_names(value)
            return [str(item).strip() for item in value if str(item).strip()]

        def string_field(snake: str, camel: str, default: str) -> str:
            if snake in raw:
                return str(raw.get(snake) or "")
            if camel in raw:
                return str(raw.get(camel) or "")
            return default

        return cls(
            name=str(raw.get("name") or "experiment").strip() or "experiment",
            run_target=str(raw.get("run_target") or raw.get("runTarget") or cls.run_target),
            benchflow_root=str(raw.get("benchflow_root") or raw.get("benchflowRoot") or ""),
            tasks_dir=str(raw.get("tasks_dir") or raw.get("tasksDir") or ""),
            env_file=string_field("env_file", "envFile", cls.env_file),
            jobs_root=str(raw.get("jobs_root") or raw.get("jobsRoot") or cls.jobs_root),
            remote_host=str(raw.get("remote_host") or raw.get("remoteHost") or ""),
            remote_user=str(raw.get("remote_user") or raw.get("remoteUser") or ""),
            remote_run_user=str(raw.get("remote_run_user") or raw.get("remoteRunUser") or ""),
            remote_port=int(raw.get("remote_port") or raw.get("remotePort") or cls.remote_port),
            remote_ssh_key=str(raw.get("remote_ssh_key") or raw.get("remoteSshKey") or ""),
            remote_benchflow_root=str(raw.get("remote_benchflow_root") or raw.get("remoteBenchflowRoot") or ""),
            remote_tasks_dir=str(raw.get("remote_tasks_dir") or raw.get("remoteTasksDir") or ""),
            remote_jobs_root=str(raw.get("remote_jobs_root") or raw.get("remoteJobsRoot") or cls.remote_jobs_root),
            agent=str(raw.get("agent") or cls.agent),
            model=str(raw.get("model") or ""),
            sandbox=str(raw.get("sandbox") or cls.sandbox),
            concurrency=max(1, int(raw.get("concurrency") or cls.concurrency)),
            skills_profile=str(
                raw.get("skills_profile") or raw.get("skillsProfile") or cls.skills_profile
            ),
            skills_mode=str(raw.get("skills_mode") or raw.get("skillsMode") or cls.skills_mode),
            skills_dir=str(raw.get("skills_dir") or raw.get("skillsDir") or ""),
            include_tasks=list_field("include_tasks") or list_field("includeTasks"),
            exclude_tasks=list_field("exclude_tasks") or list_field("excludeTasks"),
            extra_args=str(raw.get("extra_args") or raw.get("extraArgs") or ""),
        )

    def to_dict(self) -> dict[str, Any]:
        return asdict(self)


@dataclass
class RunRecord:
    id: str
    status: str
    config: ExperimentConfig
    jobs_dir: str
    log_path: str
    command: list[str]
    remote_jobs_dir: str = ""
    remote_log_path: str = ""
    remote_pid: int | None = None
    remote_exit_code_path: str = ""
    tasks_dir_for_run: str = ""
    selected_tasks: list[str] = field(default_factory=list)
    synced_at: str | None = None
    sync_error: str | None = None
    pid: int | None = None
    return_code: int | None = None
    created_at: str = field(default_factory=now_iso)
    started_at: str | None = None
    finished_at: str | None = None

    @classmethod
    def from_dict(cls, raw: dict[str, Any]) -> "RunRecord":
        config = ExperimentConfig.from_dict(raw.get("config") or {})
        command = [str(part) for part in raw.get("command") or []]
        selected_tasks = [
            str(item)
            for item in (raw.get("selected_tasks") or raw.get("selectedTasks") or [])
            if str(item)
        ]
        if not selected_tasks and config.include_tasks:
            selected_tasks = [
                task for task in config.include_tasks if task not in set(config.exclude_tasks)
            ]
        return cls(
            id=str(raw["id"]),
            status=str(raw.get("status") or "created"),
            config=config,
            jobs_dir=str(raw.get("jobs_dir") or raw.get("jobsDir") or ""),
            log_path=str(raw.get("log_path") or raw.get("logPath") or ""),
            command=command,
            remote_jobs_dir=str(raw.get("remote_jobs_dir") or raw.get("remoteJobsDir") or ""),
            remote_log_path=str(raw.get("remote_log_path") or raw.get("remoteLogPath") or ""),
            remote_pid=raw.get("remote_pid") or raw.get("remotePid"),
            remote_exit_code_path=str(raw.get("remote_exit_code_path") or raw.get("remoteExitCodePath") or ""),
            tasks_dir_for_run=str(
                raw.get("tasks_dir_for_run")
                or raw.get("tasksDirForRun")
                or command_value(command, "--tasks-dir")
                or ""
            ),
            selected_tasks=selected_tasks,
            synced_at=raw.get("synced_at") or raw.get("syncedAt"),
            sync_error=raw.get("sync_error") or raw.get("syncError"),
            pid=raw.get("pid"),
            return_code=raw.get("return_code"),
            created_at=str(raw.get("created_at") or now_iso()),
            started_at=raw.get("started_at"),
            finished_at=raw.get("finished_at"),
        )

    def to_dict(self) -> dict[str, Any]:
        data = asdict(self)
        data["config"] = self.config.to_dict()
        return data


@dataclass
class PoolAttempt:
    task_name: str
    run_id: str
    status: str
    usable: bool | None = None
    reason: str = ""
    reward: float | None = None
    total_tokens: int | None = None
    trajectory_events: int | None = None
    result_path: str = ""
    trial_path: str = ""
    started_at: str | None = None
    finished_at: str | None = None
    audited_at: str | None = None

    @classmethod
    def from_dict(cls, raw: dict[str, Any]) -> "PoolAttempt":
        return cls(
            task_name=str(raw.get("task_name") or raw.get("taskName") or ""),
            run_id=str(raw.get("run_id") or raw.get("runId") or ""),
            status=str(raw.get("status") or "unknown"),
            usable=raw.get("usable"),
            reason=str(raw.get("reason") or ""),
            reward=raw.get("reward"),
            total_tokens=raw.get("total_tokens") or raw.get("totalTokens"),
            trajectory_events=raw.get("trajectory_events") or raw.get("trajectoryEvents"),
            result_path=str(raw.get("result_path") or raw.get("resultPath") or ""),
            trial_path=str(raw.get("trial_path") or raw.get("trialPath") or ""),
            started_at=raw.get("started_at") or raw.get("startedAt"),
            finished_at=raw.get("finished_at") or raw.get("finishedAt"),
            audited_at=raw.get("audited_at") or raw.get("auditedAt"),
        )

    def to_dict(self) -> dict[str, Any]:
        return asdict(self)


@dataclass
class PoolRecord:
    id: str
    status: str
    config: ExperimentConfig
    capacity: int
    queue: list[str] = field(default_factory=list)
    active_runs: dict[str, str] = field(default_factory=dict)
    attempts: list[PoolAttempt] = field(default_factory=list)
    created_at: str = field(default_factory=now_iso)
    started_at: str | None = None
    updated_at: str | None = None
    finished_at: str | None = None

    @classmethod
    def from_dict(cls, raw: dict[str, Any]) -> "PoolRecord":
        return cls(
            id=str(raw["id"]),
            status=str(raw.get("status") or "created"),
            config=ExperimentConfig.from_dict(raw.get("config") or {}),
            capacity=max(1, int(raw.get("capacity") or 1)),
            queue=[str(item) for item in raw.get("queue") or [] if str(item)],
            active_runs={
                str(task): str(run_id)
                for task, run_id in (raw.get("active_runs") or raw.get("activeRuns") or {}).items()
                if str(task) and str(run_id)
            },
            attempts=[
                PoolAttempt.from_dict(item)
                for item in raw.get("attempts") or []
                if isinstance(item, dict)
            ],
            created_at=str(raw.get("created_at") or now_iso()),
            started_at=raw.get("started_at") or raw.get("startedAt"),
            updated_at=raw.get("updated_at") or raw.get("updatedAt"),
            finished_at=raw.get("finished_at") or raw.get("finishedAt"),
        )

    def to_dict(self) -> dict[str, Any]:
        data = asdict(self)
        data["config"] = self.config.to_dict()
        data["attempts"] = [attempt.to_dict() for attempt in self.attempts]
        return data


def split_names(text: str) -> list[str]:
    return [item.strip() for item in text.replace("\n", ",").split(",") if item.strip()]


def command_value(command: list[str], flag: str) -> str | None:
    try:
        index = command.index(flag)
    except ValueError:
        return None
    next_index = index + 1
    return command[next_index] if next_index < len(command) else None
