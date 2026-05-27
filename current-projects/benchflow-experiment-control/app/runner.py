from __future__ import annotations

import os
import posixpath
import shlex
import signal
import subprocess
from datetime import datetime
from pathlib import Path

from .archive import DEFAULT_EXPERIMENT_ROOT, local_run_dir, remote_run_dir
from .models import DEFAULT_ENV_FILE, ExperimentConfig, RunRecord, now_iso
from .remote import (
    prepare_remote_task_selection,
    read_remote_exit_code,
    start_remote_process,
    stop_remote_run,
    sync_remote_results,
    upload_env_file,
)
from .store import StateStore
from .task_selection import prepare_local_task_selection


_PROCESSES: dict[str, subprocess.Popen] = {}


def parse_env_file(path: str) -> dict[str, str]:
    if not path:
        return {}
    env_path = Path(path).expanduser()
    if not env_path.exists():
        raise FileNotFoundError(f"env file does not exist: {env_path}")

    values: dict[str, str] = {}
    for raw in env_path.read_text().splitlines():
        line = raw.strip()
        if not line or line.startswith("#"):
            continue
        if line.startswith("export "):
            line = line.removeprefix("export ").strip()
        if "=" not in line:
            continue
        key, value = line.split("=", 1)
        key = key.strip()
        value = value.strip().strip('"').strip("'")
        if key:
            values[key] = value
    return values


def build_command(
    config: ExperimentConfig, jobs_dir: str, *, tasks_dir: str | None = None
) -> list[str]:
    effective_tasks_dir = tasks_dir or (
        config.remote_tasks_dir if config.run_target == "gcp_ssh" else config.tasks_dir
    )
    cmd = [
        "uv",
        "run",
        "bench",
        "eval",
        "create",
        "--tasks-dir",
        effective_tasks_dir,
        "--agent",
        config.agent,
        "--sandbox",
        config.sandbox,
        "--concurrency",
        str(config.concurrency),
        "--jobs-dir",
        jobs_dir,
    ]
    if config.model and config.agent != "oracle":
        cmd.extend(["--model", config.model])
    if config.skills_dir:
        cmd.extend(["--skills-dir", config.skills_dir])
    if config.skills_mode and config.skills_mode != "default":
        cmd.extend(["--skill-mode", config.skills_mode])
    if config.extra_args:
        cmd.extend(shlex.split(config.extra_args))
    return cmd


def start_run(config: ExperimentConfig, store: StateStore) -> RunRecord:
    validate_config(config)
    run_id = datetime.now().strftime("%Y%m%d-%H%M%S")
    safe_name = slug(config.name)
    log_path = str(Path(store.data_dir) / "logs" / f"{safe_name}-{run_id}.log")
    Path(log_path).parent.mkdir(parents=True, exist_ok=True)
    if config.run_target == "gcp_ssh":
        return start_remote_run(config, store, run_id, safe_name, log_path)

    jobs_dir = str(local_run_dir(config, safe_name, run_id))
    Path(jobs_dir).mkdir(parents=True, exist_ok=True)
    selection = prepare_local_task_selection(config, jobs_dir)

    command = build_command(config, jobs_dir, tasks_dir=selection.effective_tasks_dir)
    run = RunRecord(
        id=f"{safe_name}-{run_id}",
        status="running",
        config=config,
        jobs_dir=jobs_dir,
        log_path=log_path,
        command=command,
        tasks_dir_for_run=selection.effective_tasks_dir,
        selected_tasks=selection.selected_tasks,
        started_at=now_iso(),
    )
    store.upsert_run(run)

    env = os.environ.copy()
    if config.env_file:
        env["BENCHFLOW_DOTENV_PATH"] = str(Path(config.env_file).expanduser())
        env.update(parse_env_file(config.env_file))
    else:
        local_dotenv = Path(jobs_dir) / ".env"
        local_dotenv.touch(mode=0o600, exist_ok=True)
        env["BENCHFLOW_DOTENV_PATH"] = str(local_dotenv)
    log_file = Path(log_path).open("ab", buffering=0)
    process = subprocess.Popen(
        command,
        cwd=config.benchflow_root,
        env=env,
        stdout=log_file,
        stderr=subprocess.STDOUT,
        start_new_session=True,
    )
    run.pid = process.pid
    _PROCESSES[run.id] = process
    store.upsert_run(run)
    return run


def start_remote_run(
    config: ExperimentConfig,
    store: StateStore,
    run_id: str,
    safe_name: str,
    log_path: str,
) -> RunRecord:
    remote_jobs_dir = remote_run_dir(config, safe_name, run_id)
    remote_log_path = posixpath.join(remote_jobs_dir, "run.log")
    remote_env_path = posixpath.join(remote_jobs_dir, ".env")
    remote_exit_code_path = posixpath.join(remote_jobs_dir, "exit-code.txt")
    selection = prepare_remote_task_selection(config, remote_jobs_dir)
    command = build_command(config, remote_jobs_dir, tasks_dir=selection.effective_tasks_dir)
    run = RunRecord(
        id=f"{safe_name}-{run_id}",
        status="running",
        config=config,
        jobs_dir=str(local_run_dir(config, safe_name, run_id)),
        log_path=log_path,
        command=command,
        remote_jobs_dir=remote_jobs_dir,
        remote_log_path=remote_log_path,
        remote_exit_code_path=remote_exit_code_path,
        tasks_dir_for_run=selection.effective_tasks_dir,
        selected_tasks=selection.selected_tasks,
        started_at=now_iso(),
    )
    store.upsert_run(run)
    upload_env_file(config, remote_env_path)
    run.remote_pid = start_remote_process(
        config,
        command,
        remote_jobs_dir=remote_jobs_dir,
        remote_log_path=remote_log_path,
        remote_env_path=remote_env_path,
        remote_exit_code_path=remote_exit_code_path,
    )
    store.upsert_run(run)
    return run


def refresh_processes(store: StateStore) -> None:
    for run in store.list_runs():
        if run.status == "running" and run.config.run_target == "gcp_ssh":
            return_code = read_remote_exit_code(run)
            if return_code is None:
                continue
            run = store.update_run(
                run.id,
                status="completed" if return_code == 0 else "failed",
                return_code=return_code,
                finished_at=now_iso(),
            )
            if run is not None:
                sync_finished_remote_run(run, store)
        elif (
            run.config.run_target == "gcp_ssh"
            and run.status in {"completed", "failed", "stopped"}
            and not run.synced_at
            and not run.sync_error
        ):
            sync_finished_remote_run(run, store)

    for run_id, process in list(_PROCESSES.items()):
        return_code = process.poll()
        if return_code is None:
            continue
        _PROCESSES.pop(run_id, None)
        store.update_run(
            run_id,
            status="completed" if return_code == 0 else "failed",
            return_code=return_code,
            finished_at=now_iso(),
        )


def sync_finished_remote_run(run: RunRecord, store: StateStore) -> None:
    try:
        sync_remote_results(run)
    except Exception as exc:
        store.update_run(run.id, sync_error=str(exc))
    else:
        store.update_run(run.id, synced_at=now_iso(), sync_error=None)


def stop_run(run_id: str, store: StateStore) -> RunRecord | None:
    run = store.get_run(run_id)
    if run is None:
        return None
    if run.config.run_target == "gcp_ssh":
        stop_remote_run(run)
        return store.update_run(run_id, status="stopped", finished_at=now_iso())

    process = _PROCESSES.pop(run_id, None)
    if process is not None and process.poll() is None:
        os.killpg(process.pid, signal.SIGTERM)
    elif run.pid:
        try:
            os.kill(run.pid, signal.SIGTERM)
        except ProcessLookupError:
            pass
    return store.update_run(run_id, status="stopped", finished_at=now_iso())


def validate_config(config: ExperimentConfig) -> None:
    if config.run_target not in {"gcp_ssh", "local"}:
        raise ValueError("run_target must be gcp_ssh or local")
    if config.run_target == "local":
        benchflow_root = Path(config.benchflow_root).expanduser()
        tasks_dir = Path(config.tasks_dir).expanduser()
        if not benchflow_root.exists():
            raise FileNotFoundError(f"BenchFlow root does not exist: {benchflow_root}")
        if not tasks_dir.exists():
            raise FileNotFoundError(f"tasks dir does not exist: {tasks_dir}")
    else:
        if not config.remote_host:
            raise ValueError("remote host is required")
        if config.remote_ssh_key and not Path(config.remote_ssh_key).expanduser().exists():
            raise FileNotFoundError(f"remote SSH key does not exist: {config.remote_ssh_key}")
        if not config.remote_benchflow_root:
            raise ValueError("remote BenchFlow root is required")
        if not config.remote_tasks_dir:
            raise ValueError("remote tasks dir is required")
    if config.env_file and not Path(config.env_file).expanduser().exists():
        raise FileNotFoundError(f"env file does not exist: {config.env_file}")
    Path(config.jobs_root).expanduser().mkdir(parents=True, exist_ok=True)
    if config.concurrency < 1:
        raise ValueError("concurrency must be >= 1")


def slug(text: str) -> str:
    cleaned = "".join(ch.lower() if ch.isalnum() else "-" for ch in text.strip())
    return "-".join(part for part in cleaned.split("-") if part) or "experiment"


def default_paths() -> dict[str, str]:
    workspace = Path("/Users/bingran_you/Downloads/GitHub/BenchFlow.ai")
    return {
        "run_target": "gcp_ssh",
        "env_file": DEFAULT_ENV_FILE,
        "benchflow_root": str(workspace / "benchflow"),
        "tasks_dir": str(workspace / "skillsbench" / "tasks"),
        "jobs_root": str(DEFAULT_EXPERIMENT_ROOT),
        "remote_host": "34.58.166.203",
        "remote_user": "bingran_you",
        "remote_run_user": "benchflow",
        "remote_port": "22",
        "remote_ssh_key": "~/.ssh/google_compute_engine",
        "remote_benchflow_root": "/opt/benchflow/benchflow",
        "remote_tasks_dir": "/opt/benchflow/skillsbench/tasks",
        "remote_jobs_root": "/mnt/benchflow/jobs/experiment-control",
        "agent": "pi-acp",
        "model": "vllm/minimax-m2.5",
        "concurrency": "4",
        "sandbox": "docker",
        "skills_profile": "with-skills",
        "sheet_id": "",
        "sheet_tab": "PR2_PR3_HF_VM_Clean5",
        "sheet_configuration": "",
        "sheet_owner": "",
        "sheet_lease_ttl_minutes": "240",
    }
