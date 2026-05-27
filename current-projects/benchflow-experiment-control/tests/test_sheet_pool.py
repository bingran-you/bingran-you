from __future__ import annotations

import json
import tempfile
import unittest
from pathlib import Path

from app import sheet_pool
from app.models import ExperimentConfig, PoolClaim, PoolRecord, RunRecord
from app.store import StateStore


class FakeQueue:
    def __init__(self, config: ExperimentConfig):
        self.config = config

    def claim_distinct_tasks(self, count: int, pool_id: str) -> list[PoolClaim]:
        return [
            PoolClaim(id=f"{pool_id}-2-1", task_name="alpha", sheet_row=2, sheet_slot=1),
            PoolClaim(id=f"{pool_id}-3-1", task_name="beta", sheet_row=3, sheet_slot=1),
        ][:count]

    def release_claims(self, claims: list[PoolClaim]) -> None:
        return None

    def write_final_result(self, claim: PoolClaim, audit) -> None:
        return None

    def write_missing_result(self, claim: PoolClaim, reason: str) -> None:
        return None


class NoClaimsQueue(FakeQueue):
    def claim_distinct_tasks(self, count: int, pool_id: str) -> list[PoolClaim]:
        return []


class SheetPoolTest(unittest.TestCase):
    def test_sheet_pool_starts_one_isolated_run_per_claimed_slot(self) -> None:
        with tempfile.TemporaryDirectory() as tmp:
            root = Path(tmp)
            tasks = root / "tasks"
            tasks.mkdir()
            store = StateStore(root / "state")
            started: list[RunRecord] = []

            def fake_start_run(config: ExperimentConfig, store: StateStore) -> RunRecord:
                task = config.include_tasks[0]
                run = RunRecord(
                    id=f"run-{task}",
                    status="running",
                    config=config,
                    jobs_dir=str(root / "jobs" / task),
                    log_path=str(root / f"{task}.log"),
                    command=[],
                    selected_tasks=config.include_tasks,
                )
                store.upsert_run(run)
                started.append(run)
                return run

            original_queue = sheet_pool.SheetQueue
            original_start_run = sheet_pool.start_run
            try:
                sheet_pool.SheetQueue = FakeQueue
                sheet_pool.start_run = fake_start_run
                record = sheet_pool.start_sheet_pool(
                    ExperimentConfig(
                        name="sheet",
                        run_target="local",
                        benchflow_root=str(root),
                        tasks_dir=str(tasks),
                        sheet_id="sheet",
                        concurrency=2,
                    ),
                    store,
                )
            finally:
                sheet_pool.SheetQueue = original_queue
                sheet_pool.start_run = original_start_run

            self.assertEqual(record.source, "sheet")
            self.assertEqual(set(record.active_runs.values()), {"run-alpha", "run-beta"})
            self.assertEqual([run.config.concurrency for run in started], [1, 1])
            self.assertEqual([run.config.include_tasks for run in started], [["alpha"], ["beta"]])

    def test_sheet_pool_finalizes_completed_claims_with_manifest(self) -> None:
        with tempfile.TemporaryDirectory() as tmp:
            root = Path(tmp)
            run_dir = root / "jobs"
            trial = run_dir / "2026-01-01__00-00-00" / "alpha__abc"
            (trial / "trajectory").mkdir(parents=True)
            (trial / "result.json").write_text(
                json.dumps(
                    {
                        "task_name": "alpha",
                        "rollout_name": "alpha__abc",
                        "rewards": {"reward": 1.0},
                        "trajectory_source": "acp",
                        "partial_trajectory": False,
                        "agent_result": {
                            "usage_source": "provider_response",
                            "n_input_tokens": 8,
                            "n_output_tokens": 4,
                            "total_tokens": 12,
                        },
                    }
                )
            )
            (trial / "config.json").write_text("{}")
            (trial / "trajectory" / "acp_trajectory.jsonl").write_text("{}\n")
            (trial / "trajectory" / "llm_trajectory.jsonl").write_text("{}\n")
            store = StateStore(root / "state")
            store.upsert_run(
                RunRecord(
                    id="run-alpha",
                    status="completed",
                    config=ExperimentConfig(name="run", run_target="local"),
                    jobs_dir=str(run_dir),
                    log_path=str(root / "run.log"),
                    command=[],
                    started_at="start",
                    finished_at="finish",
                )
            )
            store.upsert_pool(
                PoolRecord(
                    id="pool",
                    status="running",
                    source="sheet",
                    config=ExperimentConfig(name="sheet", run_target="local", sheet_id="sheet"),
                    capacity=1,
                    active_runs={"alpha": "run-alpha"},
                    active_claims=[
                        PoolClaim(id="claim", task_name="alpha", sheet_row=2, sheet_slot=1, run_id="run-alpha")
                    ],
                )
            )

            original_queue = sheet_pool.SheetQueue
            original_start_run = sheet_pool.start_run
            try:
                sheet_pool.SheetQueue = NoClaimsQueue
                sheet_pool.start_run = lambda config, store: (_ for _ in ()).throw(AssertionError("no refill"))
                record = sheet_pool.step_sheet_pool("pool", store)
            finally:
                sheet_pool.SheetQueue = original_queue
                sheet_pool.start_run = original_start_run

            self.assertIsNotNone(record)
            self.assertEqual(record.active_claims, [])
            self.assertEqual(len(record.attempts), 1)
            self.assertTrue(record.attempts[0].usable)
            self.assertTrue((trial / "benchflow-experiment-manifest.json").is_file())

    def test_sheet_pool_cleans_completed_remote_slot_before_refill(self) -> None:
        """Guards this PR against refilling a sheet pool slot before Docker cleanup."""
        with tempfile.TemporaryDirectory() as tmp:
            root = Path(tmp)
            run_dir = root / "jobs"
            trial = run_dir / "2026-01-01__00-00-00" / "alpha__abc"
            (trial / "trajectory").mkdir(parents=True)
            (trial / "result.json").write_text(
                json.dumps(
                    {
                        "task_name": "alpha",
                        "rollout_name": "alpha__abc",
                        "rewards": {"reward": 1.0},
                        "trajectory_source": "acp",
                        "partial_trajectory": False,
                        "agent_result": {
                            "usage_source": "provider_response",
                            "n_input_tokens": 8,
                            "n_output_tokens": 4,
                            "total_tokens": 12,
                        },
                    }
                )
            )
            (trial / "config.json").write_text("{}")
            (trial / "trajectory" / "acp_trajectory.jsonl").write_text("{}\n")
            (trial / "trajectory" / "llm_trajectory.jsonl").write_text("{}\n")
            store = StateStore(root / "state")
            store.upsert_run(
                RunRecord(
                    id="run-alpha",
                    status="completed",
                    config=ExperimentConfig(name="run", run_target="gcp_ssh"),
                    jobs_dir=str(run_dir),
                    log_path=str(root / "run.log"),
                    command=[],
                    remote_jobs_dir="/remote/jobs",
                    synced_at="synced",
                )
            )
            store.upsert_pool(
                PoolRecord(
                    id="pool",
                    status="running",
                    source="sheet",
                    config=ExperimentConfig(name="sheet", run_target="local", sheet_id="sheet"),
                    capacity=1,
                    active_runs={"alpha": "run-alpha"},
                    active_claims=[
                        PoolClaim(id="claim", task_name="alpha", sheet_row=2, sheet_slot=1, run_id="run-alpha")
                    ],
                )
            )
            events: list[str] = []

            class RefillQueue(NoClaimsQueue):
                def claim_distinct_tasks(self, count: int, pool_id: str) -> list[PoolClaim]:
                    events.append(f"claim:{count}")
                    return [
                        PoolClaim(id=f"{pool_id}-3-1", task_name="beta", sheet_row=3, sheet_slot=1)
                    ][:count]

                def write_final_result(self, claim: PoolClaim, audit) -> None:
                    events.append(f"sheet:{claim.task_name}")

            def fake_cleanup(run: RunRecord) -> None:
                events.append(f"cleanup:{run.id}")

            def fake_start_run(config: ExperimentConfig, store: StateStore) -> RunRecord:
                events.append(f"start:{config.include_tasks[0]}")
                run = RunRecord(
                    id=f"run-{config.include_tasks[0]}",
                    status="running",
                    config=config,
                    jobs_dir=str(root / "refill"),
                    log_path=str(root / "refill.log"),
                    command=[],
                    selected_tasks=config.include_tasks,
                )
                store.upsert_run(run)
                return run

            original_queue = sheet_pool.SheetQueue
            original_cleanup = sheet_pool.cleanup_remote_run_containers
            original_start_run = sheet_pool.start_run
            try:
                sheet_pool.SheetQueue = RefillQueue
                sheet_pool.cleanup_remote_run_containers = fake_cleanup
                sheet_pool.start_run = fake_start_run
                record = sheet_pool.step_sheet_pool("pool", store)
            finally:
                sheet_pool.SheetQueue = original_queue
                sheet_pool.cleanup_remote_run_containers = original_cleanup
                sheet_pool.start_run = original_start_run

            self.assertIsNotNone(record)
            self.assertEqual(events, ["cleanup:run-alpha", "sheet:alpha", "claim:1", "start:beta"])
            self.assertEqual([claim.task_name for claim in record.active_claims], ["beta"])

    def test_sheet_pool_keeps_slot_active_when_remote_cleanup_fails(self) -> None:
        """Guards this PR against freeing a sheet pool slot after failed Docker cleanup."""
        with tempfile.TemporaryDirectory() as tmp:
            root = Path(tmp)
            run_dir = root / "jobs"
            trial = run_dir / "2026-01-01__00-00-00" / "alpha__abc"
            (trial / "trajectory").mkdir(parents=True)
            (trial / "result.json").write_text(
                json.dumps(
                    {
                        "task_name": "alpha",
                        "rollout_name": "alpha__abc",
                        "rewards": {"reward": 1.0},
                        "trajectory_source": "acp",
                        "partial_trajectory": False,
                        "agent_result": {
                            "usage_source": "provider_response",
                            "n_input_tokens": 8,
                            "n_output_tokens": 4,
                            "total_tokens": 12,
                        },
                    }
                )
            )
            (trial / "config.json").write_text("{}")
            (trial / "trajectory" / "acp_trajectory.jsonl").write_text("{}\n")
            (trial / "trajectory" / "llm_trajectory.jsonl").write_text("{}\n")
            store = StateStore(root / "state")
            store.upsert_run(
                RunRecord(
                    id="run-alpha",
                    status="completed",
                    config=ExperimentConfig(name="run", run_target="gcp_ssh"),
                    jobs_dir=str(run_dir),
                    log_path=str(root / "run.log"),
                    command=[],
                    remote_jobs_dir="/remote/jobs",
                    synced_at="synced",
                )
            )
            store.upsert_pool(
                PoolRecord(
                    id="pool",
                    status="running",
                    source="sheet",
                    config=ExperimentConfig(name="sheet", run_target="local", sheet_id="sheet"),
                    capacity=1,
                    active_runs={"alpha": "run-alpha"},
                    active_claims=[
                        PoolClaim(id="claim", task_name="alpha", sheet_row=2, sheet_slot=1, run_id="run-alpha")
                    ],
                )
            )
            events: list[str] = []

            class ObservedQueue(NoClaimsQueue):
                def write_final_result(self, claim: PoolClaim, audit) -> None:
                    events.append(f"sheet:{claim.task_name}")

            def failed_cleanup(run: RunRecord) -> None:
                events.append(f"cleanup:{run.id}")
                raise RuntimeError("cleanup failed")

            original_queue = sheet_pool.SheetQueue
            original_cleanup = sheet_pool.cleanup_remote_run_containers
            original_start_run = sheet_pool.start_run
            try:
                sheet_pool.SheetQueue = ObservedQueue
                sheet_pool.cleanup_remote_run_containers = failed_cleanup
                sheet_pool.start_run = lambda config, store: (_ for _ in ()).throw(AssertionError("no refill"))
                with self.assertRaisesRegex(RuntimeError, "cleanup failed"):
                    sheet_pool.step_sheet_pool("pool", store)
            finally:
                sheet_pool.SheetQueue = original_queue
                sheet_pool.cleanup_remote_run_containers = original_cleanup
                sheet_pool.start_run = original_start_run

            record = store.get_pool("pool")
            self.assertIsNotNone(record)
            self.assertEqual(events, ["cleanup:run-alpha"])
            self.assertEqual([claim.task_name for claim in record.active_claims], ["alpha"])
            self.assertEqual(record.attempts, [])


if __name__ == "__main__":
    unittest.main()
