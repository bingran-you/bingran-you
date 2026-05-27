from __future__ import annotations

import json
from pathlib import Path
from typing import Any

from .models import DEFAULT_DATA_DIR, PoolRecord, RunRecord


class StateStore:
    def __init__(self, data_dir: str | Path = DEFAULT_DATA_DIR):
        self.data_dir = Path(data_dir)
        self.path = self.data_dir / "state.json"
        self.data_dir.mkdir(parents=True, exist_ok=True)

    def load(self) -> dict[str, Any]:
        if not self.path.exists():
            return {"runs": [], "pools": []}
        try:
            data = json.loads(self.path.read_text())
        except json.JSONDecodeError:
            return {"runs": [], "pools": []}
        runs = data.get("runs")
        pools = data.get("pools")
        return {
            "runs": runs if isinstance(runs, list) else [],
            "pools": pools if isinstance(pools, list) else [],
        }

    def save(self, state: dict[str, Any]) -> None:
        tmp = self.path.with_suffix(".tmp")
        tmp.write_text(json.dumps(state, indent=2))
        tmp.replace(self.path)

    def list_runs(self) -> list[RunRecord]:
        return [RunRecord.from_dict(item) for item in self.load()["runs"]]

    def get_run(self, run_id: str) -> RunRecord | None:
        for run in self.list_runs():
            if run.id == run_id:
                return run
        return None

    def upsert_run(self, run: RunRecord) -> None:
        state = self.load()
        runs = state["runs"]
        payload = run.to_dict()
        for index, item in enumerate(runs):
            if item.get("id") == run.id:
                runs[index] = payload
                self.save(state)
                return
        runs.append(payload)
        self.save(state)

    def update_run(self, run_id: str, **changes: Any) -> RunRecord | None:
        run = self.get_run(run_id)
        if run is None:
            return None
        for key, value in changes.items():
            if hasattr(run, key):
                setattr(run, key, value)
        self.upsert_run(run)
        return run

    def list_pools(self) -> list[PoolRecord]:
        return [PoolRecord.from_dict(item) for item in self.load()["pools"]]

    def get_pool(self, pool_id: str) -> PoolRecord | None:
        for pool in self.list_pools():
            if pool.id == pool_id:
                return pool
        return None

    def upsert_pool(self, pool: PoolRecord) -> None:
        state = self.load()
        pools = state["pools"]
        payload = pool.to_dict()
        for index, item in enumerate(pools):
            if item.get("id") == pool.id:
                pools[index] = payload
                self.save(state)
                return
        pools.append(payload)
        self.save(state)
