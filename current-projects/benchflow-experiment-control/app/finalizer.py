from __future__ import annotations

import hashlib
import json
from dataclasses import asdict, dataclass
from pathlib import Path
from typing import Any

from .health import TrialAudit
from .models import PoolAttempt, RunRecord, now_iso


MANIFEST_NAME = "benchflow-experiment-manifest.json"


@dataclass
class FinalizedAttempt:
    attempt: PoolAttempt
    manifest_path: str


def finalize_trial(
    *,
    audit: TrialAudit,
    run: RunRecord,
    sheet_row: int | None = None,
    sheet_slot: int | None = None,
    claim_id: str = "",
) -> FinalizedAttempt:
    trial_dir = Path(run.jobs_dir).expanduser() / audit.trial_path
    manifest_path = trial_dir / MANIFEST_NAME
    manifest = build_manifest(
        audit=audit,
        run=run,
        sheet_row=sheet_row,
        sheet_slot=sheet_slot,
        claim_id=claim_id,
        manifest_path=manifest_path,
    )
    manifest_path.write_text(json.dumps(manifest, indent=2, sort_keys=True) + "\n")
    rel_manifest = relative_path(manifest_path, Path(run.jobs_dir).expanduser())
    return FinalizedAttempt(
        attempt=PoolAttempt(
            task_name=audit.task_name,
            run_id=run.id,
            status="usable" if audit.usable else "invalid",
            usable=audit.usable,
            reason=audit.reason,
            reward=audit.reward,
            total_tokens=audit.total_tokens,
            trajectory_events=audit.acp_trajectory_events,
            result_path=audit.result_path,
            trial_path=audit.trial_path,
            sheet_row=sheet_row,
            sheet_slot=sheet_slot,
            manifest_path=rel_manifest,
            started_at=run.started_at,
            finished_at=run.finished_at,
            audited_at=now_iso(),
        ),
        manifest_path=rel_manifest,
    )


def build_manifest(
    *,
    audit: TrialAudit,
    run: RunRecord,
    sheet_row: int | None,
    sheet_slot: int | None,
    claim_id: str,
    manifest_path: Path,
) -> dict[str, Any]:
    root = Path(run.jobs_dir).expanduser()
    artifacts = artifact_manifest(root, audit)
    return {
        "schema": "benchflow-experiment-control.v1",
        "written_at": now_iso(),
        "claim": {
            "id": claim_id,
            "sheet_row": sheet_row,
            "sheet_slot": sheet_slot,
        },
        "run": {
            "id": run.id,
            "status": run.status,
            "jobs_dir": run.jobs_dir,
            "remote_jobs_dir": run.remote_jobs_dir,
            "started_at": run.started_at,
            "finished_at": run.finished_at,
        },
        "config": {
            "agent": run.config.agent,
            "model": run.config.model,
            "sandbox": run.config.sandbox,
            "skills_profile": run.config.skills_profile,
            "skills_mode": run.config.skills_mode,
            "run_target": run.config.run_target,
        },
        "audit": audit.to_dict(),
        "artifacts": artifacts,
        "manifest_path": relative_path(manifest_path, root),
    }


def artifact_manifest(root: Path, audit: TrialAudit) -> dict[str, dict[str, Any]]:
    paths = {
        "result": audit.result_path,
        "config": audit.config_path,
        "acp_trajectory": audit.acp_trajectory_path,
        "llm_trajectory": audit.llm_trajectory_path,
    }
    return {
        name: file_record(root / rel_path)
        for name, rel_path in paths.items()
        if rel_path
    }


def file_record(path: Path) -> dict[str, Any]:
    if not path.is_file():
        return {"path": path.as_posix(), "exists": False}
    digest = hashlib.sha256(path.read_bytes()).hexdigest()
    return {
        "path": path.as_posix(),
        "exists": True,
        "bytes": path.stat().st_size,
        "sha256": digest,
    }


def relative_path(path: Path, root: Path) -> str:
    try:
        return path.relative_to(root).as_posix()
    except ValueError:
        return path.as_posix()


def missing_result_attempt(
    *,
    task_name: str,
    run: RunRecord,
    reason: str,
    sheet_row: int | None = None,
    sheet_slot: int | None = None,
) -> PoolAttempt:
    return PoolAttempt(
        task_name=task_name,
        run_id=run.id,
        status="invalid",
        usable=False,
        reason=reason,
        sheet_row=sheet_row,
        sheet_slot=sheet_slot,
        started_at=run.started_at,
        finished_at=run.finished_at,
        audited_at=now_iso(),
    )
