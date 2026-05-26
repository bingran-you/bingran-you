from __future__ import annotations

from dataclasses import asdict, dataclass, field
from datetime import datetime
from pathlib import Path
from typing import Any


PROJECT_ROOT = Path(__file__).resolve().parents[1]
DEFAULT_DATA_DIR = PROJECT_ROOT / "data"


def now_iso() -> str:
    return datetime.now().astimezone().isoformat(timespec="seconds")


@dataclass
class ExperimentConfig:
    name: str
    run_target: str = "gcp_ssh"
    benchflow_root: str = ""
    tasks_dir: str = ""
    env_file: str = ""
    jobs_root: str = str(DEFAULT_DATA_DIR / "benchflow-jobs")
    remote_host: str = ""
    remote_user: str = ""
    remote_port: int = 22
    remote_ssh_key: str = ""
    remote_benchflow_root: str = ""
    remote_tasks_dir: str = ""
    remote_jobs_root: str = "benchflow-experiment-runs"
    agent: str = "gemini"
    model: str = "gemini-3-flash-preview"
    sandbox: str = "docker"
    concurrency: int = 4
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

        return cls(
            name=str(raw.get("name") or "experiment").strip() or "experiment",
            run_target=str(raw.get("run_target") or raw.get("runTarget") or cls.run_target),
            benchflow_root=str(raw.get("benchflow_root") or raw.get("benchflowRoot") or ""),
            tasks_dir=str(raw.get("tasks_dir") or raw.get("tasksDir") or ""),
            env_file=str(raw.get("env_file") or raw.get("envFile") or ""),
            jobs_root=str(raw.get("jobs_root") or raw.get("jobsRoot") or DEFAULT_DATA_DIR / "benchflow-jobs"),
            remote_host=str(raw.get("remote_host") or raw.get("remoteHost") or ""),
            remote_user=str(raw.get("remote_user") or raw.get("remoteUser") or ""),
            remote_port=int(raw.get("remote_port") or raw.get("remotePort") or cls.remote_port),
            remote_ssh_key=str(raw.get("remote_ssh_key") or raw.get("remoteSshKey") or ""),
            remote_benchflow_root=str(raw.get("remote_benchflow_root") or raw.get("remoteBenchflowRoot") or ""),
            remote_tasks_dir=str(raw.get("remote_tasks_dir") or raw.get("remoteTasksDir") or ""),
            remote_jobs_root=str(raw.get("remote_jobs_root") or raw.get("remoteJobsRoot") or cls.remote_jobs_root),
            agent=str(raw.get("agent") or cls.agent),
            model=str(raw.get("model") or ""),
            sandbox=str(raw.get("sandbox") or cls.sandbox),
            concurrency=max(1, int(raw.get("concurrency") or cls.concurrency)),
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
    pid: int | None = None
    return_code: int | None = None
    created_at: str = field(default_factory=now_iso)
    started_at: str | None = None
    finished_at: str | None = None

    @classmethod
    def from_dict(cls, raw: dict[str, Any]) -> "RunRecord":
        return cls(
            id=str(raw["id"]),
            status=str(raw.get("status") or "created"),
            config=ExperimentConfig.from_dict(raw.get("config") or {}),
            jobs_dir=str(raw.get("jobs_dir") or raw.get("jobsDir") or ""),
            log_path=str(raw.get("log_path") or raw.get("logPath") or ""),
            command=[str(part) for part in raw.get("command") or []],
            remote_jobs_dir=str(raw.get("remote_jobs_dir") or raw.get("remoteJobsDir") or ""),
            remote_log_path=str(raw.get("remote_log_path") or raw.get("remoteLogPath") or ""),
            remote_pid=raw.get("remote_pid") or raw.get("remotePid"),
            remote_exit_code_path=str(raw.get("remote_exit_code_path") or raw.get("remoteExitCodePath") or ""),
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


def split_names(text: str) -> list[str]:
    return [item.strip() for item in text.replace("\n", ",").split(",") if item.strip()]
