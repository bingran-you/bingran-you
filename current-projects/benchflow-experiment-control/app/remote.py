from __future__ import annotations

import json
import shlex
import subprocess
from pathlib import Path
from typing import Any

from .models import ExperimentConfig, RunRecord


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
) -> subprocess.CompletedProcess[str]:
    return subprocess.run(
        [*ssh_base(config), script],
        input=input_text,
        text=True,
        capture_output=True,
        timeout=timeout,
        check=False,
    )


def upload_env_file(config: ExperimentConfig, remote_path: str) -> None:
    if not config.env_file:
        return
    local_path = Path(config.env_file).expanduser()
    content = local_path.read_text()
    script = f"umask 077; mkdir -p {shlex.quote(str(Path(remote_path).parent))}; cat > {shlex.quote(remote_path)}"
    result = remote_shell(config, script, input_text=content, timeout=30)
    if result.returncode != 0:
        raise RuntimeError(result.stderr.strip() or "failed to upload env file")


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
    env_line = f"set -a; . {shlex.quote(remote_env_path)}; set +a;" if config.env_file else ""
    script = (
        f"mkdir -p {shlex.quote(remote_jobs_dir)} {shlex.quote(str(Path(remote_log_path).parent))}; "
        f"cd {shlex.quote(config.remote_benchflow_root)} && "
        f"( {env_line} {quoted_cmd}; echo $? > {shlex.quote(remote_exit_code_path)} ) "
        f"> {shlex.quote(remote_log_path)} 2>&1 < /dev/null & echo $!"
    )
    result = remote_shell(config, script, timeout=30)
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
    result = remote_shell(run.config, script, timeout=10)
    text = result.stdout.strip()
    return int(text) if text.isdigit() else None


def stop_remote_run(run: RunRecord) -> None:
    if not run.remote_pid:
        return
    script = f"kill -TERM {int(run.remote_pid)} 2>/dev/null || true"
    remote_shell(run.config, script, timeout=10)


def remote_log_tail(run: RunRecord, limit: int = 16_000) -> str:
    if not run.remote_log_path:
        return ""
    script = f"test -f {shlex.quote(run.remote_log_path)} && tail -c {limit} {shlex.quote(run.remote_log_path)} || true"
    return remote_shell(run.config, script, timeout=10).stdout


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
    result = remote_shell(run.config, shell, input_text=script, timeout=30)
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
    result = remote_shell(run.config, shell, input_text=script, timeout=20)
    try:
        return json.loads(result.stdout)
    except json.JSONDecodeError:
        return {"error": result.stderr.strip() or "could not read remote artifact"}
