from __future__ import annotations

import posixpath
from pathlib import Path

from .models import ExperimentConfig


DEFAULT_EXPERIMENT_ROOT = Path(
    "/Users/bingran_you/Downloads/GitHub/bingran-you/workspace/experiment"
)


def archive_segments(config: ExperimentConfig) -> list[str]:
    return [
        slug_part(config.skills_profile or "with-skills"),
        slug_part(config.agent or "agent"),
        slug_part(config.model or "no-model"),
    ]


def local_run_dir(config: ExperimentConfig, safe_name: str, run_id: str) -> Path:
    return (
        Path(config.jobs_root).expanduser()
        .joinpath(*archive_segments(config))
        .joinpath(safe_name, run_id)
    )


def remote_run_dir(config: ExperimentConfig, safe_name: str, run_id: str) -> str:
    return posixpath.join(
        config.remote_jobs_root.rstrip("/"),
        *archive_segments(config),
        safe_name,
        run_id,
    )


def slug_part(text: str) -> str:
    cleaned = "".join(ch.lower() if ch.isalnum() else "-" for ch in text.strip())
    return "-".join(part for part in cleaned.split("-") if part) or "unknown"
