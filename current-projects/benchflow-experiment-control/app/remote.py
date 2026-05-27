from __future__ import annotations

import json
import re
import shlex
import subprocess
from pathlib import Path
from typing import Any

from .models import ExperimentConfig, RunRecord
from .task_selection import TaskSelection


def ssh_base(config: ExperimentConfig) -> list[str]:
    if not config.remote_host:
        raise ValueError("remote host is required for gcp_ssh runs")
    target = f"{config.remote_user}@{config.remote_host}" if config.remote_user else config.remote_host
    cmd = [
        "ssh",
        "-o",
        "BatchMode=yes",
        "-o",
        "StrictHostKeyChecking=accept-new",
        "-p",
        str(config.remote_port),
    ]
    if config.remote_ssh_key:
        cmd.extend(["-i", str(Path(config.remote_ssh_key).expanduser())])
    cmd.append(target)
    return cmd


def remote_shell(
    config: ExperimentConfig,
    script: str,
    *,
    input_text: str | None = None,
    timeout: int = 30,
    as_run_user: bool = False,
) -> subprocess.CompletedProcess[str]:
    if as_run_user:
        script = wrap_run_user(config, script)
    return subprocess.run(
        [*ssh_base(config), script],
        input=input_text,
        text=True,
        capture_output=True,
        timeout=timeout,
        check=False,
    )


def wrap_run_user(config: ExperimentConfig, script: str) -> str:
    user = config.remote_run_user.strip()
    if not user:
        return script
    if not re.match(r"^[a-z_][a-z0-9_-]*$", user):
        raise ValueError(f"invalid remote run user: {user!r}")
    return f"sudo -n -u {shlex.quote(user)} bash -lc {shlex.quote(script)}"


def upload_env_file(config: ExperimentConfig, remote_path: str) -> None:
    if not config.env_file:
        return
    local_path = Path(config.env_file).expanduser()
    content = local_path.read_text()
    script = f"umask 077; mkdir -p {shlex.quote(str(Path(remote_path).parent))}; cat > {shlex.quote(remote_path)}"
    result = remote_shell(config, script, input_text=content, timeout=30, as_run_user=True)
    if result.returncode != 0:
        raise RuntimeError(result.stderr.strip() or "failed to upload env file")


def prepare_remote_task_selection(
    config: ExperimentConfig, remote_jobs_dir: str
) -> TaskSelection:
    payload = {
        "tasks_dir": config.remote_tasks_dir,
        "jobs_dir": remote_jobs_dir,
        "include_tasks": config.include_tasks,
        "exclude_tasks": config.exclude_tasks,
    }
    script = r'''
import json
import os
import shutil
from pathlib import Path

payload = json.loads(os.environ["TASK_SELECTION"])
source = Path(payload["tasks_dir"]).expanduser()
jobs_dir = Path(payload["jobs_dir"]).expanduser()
include = [name for name in payload.get("include_tasks", []) if name]
exclude = [name for name in payload.get("exclude_tasks", []) if name]

if not source.is_dir():
    raise SystemExit(f"tasks dir does not exist: {source}")

available = sorted(child.name for child in source.iterdir() if (child / "task.toml").is_file())
available_set = set(available)
missing_include = sorted(set(include) - available_set)
missing_exclude = sorted(set(exclude) - available_set)
if missing_include:
    raise SystemExit("include task(s) not found: " + ", ".join(missing_include))
if missing_exclude:
    raise SystemExit("exclude task(s) not found: " + ", ".join(missing_exclude))

selected = include if include else available
excluded = set(exclude)
selected = [name for name in selected if name not in excluded]
filtered = bool(include or exclude)
effective = source

jobs_dir.mkdir(parents=True, exist_ok=True)
if filtered:
    effective = jobs_dir / ".benchflow-selected-tasks"
    if effective.exists():
        shutil.rmtree(effective)
    effective.mkdir(parents=True)
    for task_name in selected:
        (effective / task_name).symlink_to(source / task_name, target_is_directory=True)
    (effective / "selection-manifest.json").write_text(json.dumps({
        "source_tasks_dir": str(source),
        "selected_tasks": selected,
        "include_tasks": include,
        "exclude_tasks": exclude,
    }, indent=2) + "\n")

print(json.dumps({
    "source_tasks_dir": str(source),
    "effective_tasks_dir": str(effective),
    "selected_tasks": selected,
    "filtered": filtered,
}))
'''
    shell = f"TASK_SELECTION={shlex.quote(json.dumps(payload))} python3 -"
    result = remote_shell(config, shell, input_text=script, timeout=30, as_run_user=True)
    if result.returncode != 0:
        raise RuntimeError(result.stderr.strip() or result.stdout.strip() or "failed to prepare task selection")
    try:
        data = json.loads(result.stdout)
    except json.JSONDecodeError as exc:
        raise RuntimeError(f"could not parse remote task selection: {result.stdout!r}") from exc
    return TaskSelection(
        source_tasks_dir=str(data["source_tasks_dir"]),
        effective_tasks_dir=str(data["effective_tasks_dir"]),
        selected_tasks=[str(item) for item in data.get("selected_tasks") or []],
        filtered=bool(data.get("filtered")),
    )


def list_remote_tasks(config: ExperimentConfig) -> list[str]:
    payload = {"tasks_dir": config.remote_tasks_dir}
    script = r'''
import json
import os
from pathlib import Path

payload = json.loads(os.environ["TASK_INDEX"])
root = Path(payload["tasks_dir"]).expanduser()
if not root.is_dir():
    raise SystemExit(f"tasks dir does not exist: {root}")
print(json.dumps(sorted(child.name for child in root.iterdir() if (child / "task.toml").is_file())))
'''
    shell = f"TASK_INDEX={shlex.quote(json.dumps(payload))} python3 -"
    result = remote_shell(config, shell, input_text=script, timeout=30, as_run_user=True)
    if result.returncode != 0:
        raise RuntimeError(result.stderr.strip() or result.stdout.strip() or "failed to list remote tasks")
    try:
        data = json.loads(result.stdout)
    except json.JSONDecodeError as exc:
        raise RuntimeError(f"could not parse remote task list: {result.stdout!r}") from exc
    return [str(item) for item in data]


def start_remote_process(
    config: ExperimentConfig,
    command: list[str],
    *,
    remote_jobs_dir: str,
    remote_log_path: str,
    remote_env_path: str,
    remote_exit_code_path: str,
) -> int:
    quoted_cmd = shlex.join(command)
    remote_runner_path = f"{remote_jobs_dir.rstrip('/')}/run-remote.sh"
    dotenv_line = f"export BENCHFLOW_DOTENV_PATH={shlex.quote(remote_env_path)};"
    env_line = (
        f"{dotenv_line} set -a; . {shlex.quote(remote_env_path)}; set +a;"
        if config.env_file
        else dotenv_line
    )
    runner_script = "\n".join(
        [
            "#!/usr/bin/env bash",
            "set +e",
            f"cd {shlex.quote(config.remote_benchflow_root)}",
            f"{env_line} {quoted_cmd}",
            "status=$?",
            f"printf '%s\\n' \"$status\" > {shlex.quote(remote_exit_code_path)}",
            "exit \"$status\"",
        ]
    )
    script = (
        f"mkdir -p {shlex.quote(remote_jobs_dir)} {shlex.quote(str(Path(remote_log_path).parent))}; "
        f"cat > {shlex.quote(remote_runner_path)} <<'BENCHFLOW_REMOTE_RUN'\n"
        f"{runner_script}\n"
        "BENCHFLOW_REMOTE_RUN\n"
        f"chmod 700 {shlex.quote(remote_runner_path)}; "
        f"nohup setsid bash {shlex.quote(remote_runner_path)} "
        f"> {shlex.quote(remote_log_path)} 2>&1 < /dev/null & echo $!"
    )
    result = remote_shell(config, script, timeout=30, as_run_user=True)
    if result.returncode != 0:
        raise RuntimeError(result.stderr.strip() or "failed to start remote run")
    try:
        return int(result.stdout.strip().splitlines()[-1])
    except (IndexError, ValueError) as exc:
        raise RuntimeError(f"could not parse remote pid: {result.stdout!r}") from exc


def read_remote_exit_code(run: RunRecord) -> int | None:
    if not run.remote_exit_code_path:
        return None
    script = f"test -f {shlex.quote(run.remote_exit_code_path)} && cat {shlex.quote(run.remote_exit_code_path)} || true"
    result = remote_shell(run.config, script, timeout=10, as_run_user=True)
    text = result.stdout.strip()
    return int(text) if text.isdigit() else None


def stop_remote_run(run: RunRecord) -> None:
    if run.remote_pid:
        remote_shell(
            run.config,
            process_group_stop_script(int(run.remote_pid)),
            timeout=10,
            as_run_user=True,
        )

    if not run.remote_jobs_dir:
        return
    cleanup_remote_run_containers(run)


def cleanup_remote_run_containers(run: RunRecord) -> None:
    if not run.remote_jobs_dir:
        return
    result = remote_shell(
        run.config,
        container_cleanup_script(run.remote_jobs_dir),
        timeout=180,
        as_run_user=False,
    )
    if result.returncode != 0:
        message = result.stderr.strip() or result.stdout.strip() or "failed to clean remote Docker containers"
        raise RuntimeError(message)


def process_group_stop_script(pid: int) -> str:
    return f"""
pid={pid}
if kill -0 "$pid" 2>/dev/null; then
    pgid=$(ps -o pgid= -p "$pid" | tr -d ' ')
    if [ -n "$pgid" ]; then
        kill -TERM -- "-$pgid" 2>/dev/null || true
        sleep 2
        kill -KILL -- "-$pgid" 2>/dev/null || true
    else
        kill -TERM "$pid" 2>/dev/null || true
        sleep 2
        kill -KILL "$pid" 2>/dev/null || true
    fi
fi
"""


def container_cleanup_script(remote_jobs_dir: str) -> str:
    return f"""
set -e
run_dir={shlex.quote(remote_jobs_dir.rstrip('/'))}
containers=$(sudo -n docker ps -aq)
if [ -n "$containers" ]; then
    matched=""
    projects=""
    for container in $containers; do
        if sudo -n docker inspect "$container" --format '{{{{json .Mounts}}}}' | grep -Fq "$run_dir/"; then
            matched="$matched $container"
            project=$(sudo -n docker inspect "$container" --format '{{{{index .Config.Labels "com.docker.compose.project"}}}}')
            if [ -n "$project" ] && [ "$project" != "<no value>" ]; then
                projects="$projects $project"
            fi
        fi
    done
    for project in $projects; do
        matched="$matched $(sudo -n docker ps -aq --filter label=com.docker.compose.project="$project")"
    done
    if [ -n "$matched" ]; then
        printf '%s\n' $matched | sort -u | xargs -r sudo -n docker rm -f >/dev/null
    fi
fi
"""


def remote_log_tail(run: RunRecord, limit: int = 16_000) -> str:
    if not run.remote_log_path:
        return ""
    script = f"test -f {shlex.quote(run.remote_log_path)} && tail -c {limit} {shlex.quote(run.remote_log_path)} || true"
    return remote_shell(run.config, script, timeout=10, as_run_user=True).stdout


def remote_snapshot(run: RunRecord) -> dict[str, Any]:
    script = r'''
import json, os
from pathlib import Path

root = Path(os.environ["JOBS_DIR"]).expanduser()

def read_json(path):
    try:
        return json.loads(path.read_text())
    except Exception:
        return {}

trials = []
if root.is_dir():
    for child in root.rglob("*"):
        if not child.is_dir() or child.name.startswith("."):
            continue
        result_path = child / "result.json"
        config_path = child / "config.json"
        if not result_path.is_file() and not config_path.is_file():
            continue
        try:
            rel = child.relative_to(root).as_posix()
        except ValueError:
            rel = child.as_posix()
        trials.append({
            "trial_path": rel,
            "trial_name": child.name,
            "result_path": (result_path.relative_to(root).as_posix() if result_path.is_file() else None),
            "config_path": (config_path.relative_to(root).as_posix() if config_path.is_file() else None),
            "result": read_json(result_path),
            "config": read_json(config_path),
            "updated_at": child.stat().st_mtime,
        })
print(json.dumps({"trials": trials}))
'''
    shell = f"JOBS_DIR={shlex.quote(run.remote_jobs_dir)} python3 -"
    result = remote_shell(run.config, shell, input_text=script, timeout=30, as_run_user=True)
    if result.returncode != 0:
        return {"trials": [], "error": result.stderr.strip()}
    try:
        return json.loads(result.stdout)
    except json.JSONDecodeError:
        return {"trials": [], "error": "remote snapshot did not return JSON"}


def read_remote_artifact(run: RunRecord, relative: str) -> dict[str, Any]:
    script = r'''
import json, os, sys
from pathlib import Path

root = Path(os.environ["JOBS_DIR"]).expanduser().resolve()
target = (root / os.environ["REL_PATH"]).resolve()
if target != root and root not in target.parents:
    print(json.dumps({"error": "not found"}))
    raise SystemExit(0)
if not target.is_file():
    print(json.dumps({"error": "not found"}))
    raise SystemExit(0)
size = target.stat().st_size
if size > 2_000_000:
    print(json.dumps({"path": os.environ["REL_PATH"], "too_large": True, "content": ""}))
else:
    print(json.dumps({"path": os.environ["REL_PATH"], "too_large": False, "content": target.read_text(errors="replace")}))
'''
    shell = (
        f"JOBS_DIR={shlex.quote(run.remote_jobs_dir)} "
        f"REL_PATH={shlex.quote(relative)} python3 -"
    )
    result = remote_shell(run.config, shell, input_text=script, timeout=20, as_run_user=True)
    try:
        return json.loads(result.stdout)
    except json.JSONDecodeError:
        return {"error": result.stderr.strip() or "could not read remote artifact"}


def sync_remote_results(run: RunRecord) -> None:
    if not run.remote_jobs_dir:
        return
    local_dir = Path(run.jobs_dir).expanduser()
    local_dir.mkdir(parents=True, exist_ok=True)
    script = (
        f"test -d {shlex.quote(run.remote_jobs_dir)} && "
        f"cd {shlex.quote(run.remote_jobs_dir)} && "
        "tar --exclude=.env --exclude=./.env -cf - ."
    )
    result = subprocess.run(
        [*ssh_base(run.config), wrap_run_user(run.config, script)],
        capture_output=True,
        check=False,
    )
    if result.returncode != 0:
        message = result.stderr.decode(errors="replace").strip()
        raise RuntimeError(message or "failed to archive remote results")
    extract = subprocess.run(
        ["tar", "-xf", "-", "-C", str(local_dir)],
        input=result.stdout,
        capture_output=True,
        check=False,
    )
    if extract.returncode != 0:
        message = extract.stderr.decode(errors="replace").strip()
        raise RuntimeError(message or "failed to extract remote results")
