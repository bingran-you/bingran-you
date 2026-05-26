from __future__ import annotations

from pathlib import Path
from typing import Any

from .jobs import discover_tasks, read_artifact, scan_run
from .models import DEFAULT_DATA_DIR, ExperimentConfig
from .runner import default_paths, refresh_processes, start_run, stop_run
from .store import StateStore


class ExperimentManager:
    def __init__(self, data_dir: str | Path = DEFAULT_DATA_DIR):
        self.store = StateStore(data_dir)

    def defaults(self) -> dict[str, str]:
        return default_paths()

    def start(self, raw_config: dict[str, Any]) -> dict[str, Any]:
        run = start_run(ExperimentConfig.from_dict(raw_config), self.store)
        return {"run": scan_run(run)}

    def state(self) -> dict[str, Any]:
        refresh_processes(self.store)
        return {"runs": [scan_run(run) for run in reversed(self.store.list_runs())]}

    def run(self, run_id: str) -> dict[str, Any] | None:
        refresh_processes(self.store)
        run = self.store.get_run(run_id)
        return scan_run(run) if run else None

    def stop(self, run_id: str) -> dict[str, Any] | None:
        run = stop_run(run_id, self.store)
        return {"run": scan_run(run)} if run else None

    def tasks(self, tasks_dir: str) -> dict[str, Any]:
        return {"tasks": discover_tasks(tasks_dir)}

    def artifact(self, run_id: str, relative_path: str) -> dict[str, Any] | None:
        run = self.store.get_run(run_id)
        if run is None:
            return None
        return read_artifact(run, relative_path)
