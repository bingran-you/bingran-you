from __future__ import annotations

import json
import tempfile
import unittest
from pathlib import Path

from app import pool
from app.health import audit_trial_dir
from app.models import ExperimentConfig, PoolRecord, RunRecord
from app.store import StateStore


class HealthAuditTest(unittest.TestCase):
    def test_complete_acp_and_provider_usage_is_usable(self) -> None:
        with tempfile.TemporaryDirectory() as tmp:
            trial = Path(tmp) / "alpha__001"
            (trial / "trajectory").mkdir(parents=True)
            (trial / "result.json").write_text(
                json.dumps(
                    {
                        "task_name": "alpha",
                        "rewards": {"reward": 0.0},
                        "trajectory_source": "acp",
                        "partial_trajectory": False,
                        "agent_result": {
                            "usage_source": "provider_response",
                            "total_tokens": 123,
                        },
                    }
                )
            )
            (trial / "trajectory" / "acp_trajectory.jsonl").write_text(
                json.dumps({"type": "user_message"}) + "\n"
            )

            audit = audit_trial_dir(trial, tmp)

            self.assertTrue(audit.usable)
            self.assertEqual(audit.verdict, "usable")

    def test_missing_reward_keeps_full_trajectory_out_of_usable_set(self) -> None:
        with tempfile.TemporaryDirectory() as tmp:
            trial = Path(tmp) / "alpha__001"
            (trial / "trajectory").mkdir(parents=True)
            (trial / "result.json").write_text(
                json.dumps(
                    {
                        "task_name": "alpha",
                        "trajectory_source": "acp",
                        "partial_trajectory": False,
                        "agent_result": {
                            "usage_source": "provider_response",
                            "total_tokens": 123,
                        },
                    }
                )
            )
            (trial / "trajectory" / "acp_trajectory.jsonl").write_text(
                json.dumps({"type": "user_message"}) + "\n"
            )

            audit = audit_trial_dir(trial, tmp)

            self.assertFalse(audit.usable)
            self.assertIn("missing numeric reward", audit.reason)


class PoolSchedulerTest(unittest.TestCase):
    def test_start_pool_fills_capacity_with_single_task_runs(self) -> None:
        with tempfile.TemporaryDirectory() as tmp:
            store = StateStore(Path(tmp) / "state")
            started: list[RunRecord] = []

            def fake_start_run(config: ExperimentConfig, store: StateStore) -> RunRecord:
                run = RunRecord(
                    id=f"run-{config.include_tasks[0]}",
                    status="running",
                    config=config,
                    jobs_dir=str(Path(tmp) / config.include_tasks[0]),
                    log_path=str(Path(tmp) / f"{config.include_tasks[0]}.log"),
                    command=[],
                    selected_tasks=config.include_tasks,
                    started_at="now",
                )
                store.upsert_run(run)
                started.append(run)
                return run

            original_start_run = pool.start_run
            original_select_pool_tasks = pool.select_pool_tasks
            try:
                pool.start_run = fake_start_run
                pool.select_pool_tasks = lambda config: ["alpha", "beta", "gamma"]
                record = pool.start_pool(
                    ExperimentConfig(name="test", run_target="local", concurrency=2),
                    store,
                )
            finally:
                pool.start_run = original_start_run
                pool.select_pool_tasks = original_select_pool_tasks

            self.assertEqual(record.capacity, 2)
            self.assertEqual(record.queue, ["gamma"])
            self.assertEqual(record.active_runs, {"alpha": "run-alpha", "beta": "run-beta"})
            self.assertEqual([run.config.concurrency for run in started], [1, 1])

    def test_step_pool_audits_finished_run_then_refills_slot(self) -> None:
        with tempfile.TemporaryDirectory() as tmp:
            root = Path(tmp)
            store = StateStore(root / "state")
            finished_dir = root / "finished"
            trial = finished_dir / "alpha__001"
            (trial / "trajectory").mkdir(parents=True)
            (trial / "result.json").write_text(
                json.dumps(
                    {
                        "task_name": "alpha",
                        "rewards": {"reward": 1.0},
                        "trajectory_source": "acp",
                        "partial_trajectory": False,
                        "agent_result": {
                            "usage_source": "provider_response",
                            "total_tokens": 456,
                        },
                    }
                )
            )
            (trial / "trajectory" / "acp_trajectory.jsonl").write_text(
                json.dumps({"type": "agent_message"}) + "\n"
            )
            store.upsert_run(
                RunRecord(
                    id="run-alpha",
                    status="completed",
                    config=ExperimentConfig(name="alpha", run_target="local"),
                    jobs_dir=str(finished_dir),
                    log_path=str(root / "alpha.log"),
                    command=[],
                    started_at="start",
                    finished_at="finish",
                )
            )
            store.upsert_pool(
                PoolRecord(
                    id="pool-1",
                    status="running",
                    config=ExperimentConfig(name="test", run_target="local", concurrency=2),
                    capacity=2,
                    queue=["beta"],
                    active_runs={"alpha": "run-alpha"},
                )
            )

            def fake_start_run(config: ExperimentConfig, store: StateStore) -> RunRecord:
                run = RunRecord(
                    id="run-beta",
                    status="running",
                    config=config,
                    jobs_dir=str(root / "beta"),
                    log_path=str(root / "beta.log"),
                    command=[],
                    selected_tasks=["beta"],
                )
                store.upsert_run(run)
                return run

            original_start_run = pool.start_run
            try:
                pool.start_run = fake_start_run
                record = pool.step_pool("pool-1", store)
            finally:
                pool.start_run = original_start_run

            self.assertIsNotNone(record)
            self.assertEqual(record.active_runs, {"beta": "run-beta"})
            self.assertEqual(record.queue, [])
            self.assertEqual(len(record.attempts), 1)
            self.assertTrue(record.attempts[0].usable)
            self.assertEqual(record.attempts[0].total_tokens, 456)

    def test_step_pool_releases_slot_when_remote_sync_failed(self) -> None:
        with tempfile.TemporaryDirectory() as tmp:
            root = Path(tmp)
            store = StateStore(root / "state")
            store.upsert_run(
                RunRecord(
                    id="run-alpha",
                    status="completed",
                    config=ExperimentConfig(name="alpha", run_target="gcp_ssh"),
                    jobs_dir=str(root / "alpha"),
                    log_path=str(root / "alpha.log"),
                    command=[],
                    sync_error="archive failed",
                )
            )
            store.upsert_pool(
                PoolRecord(
                    id="pool-1",
                    status="running",
                    config=ExperimentConfig(name="test", run_target="local", concurrency=1),
                    capacity=1,
                    queue=["beta"],
                    active_runs={"alpha": "run-alpha"},
                )
            )

            def fake_start_run(config: ExperimentConfig, store: StateStore) -> RunRecord:
                run = RunRecord(
                    id="run-beta",
                    status="running",
                    config=config,
                    jobs_dir=str(root / "beta"),
                    log_path=str(root / "beta.log"),
                    command=[],
                    selected_tasks=["beta"],
                )
                store.upsert_run(run)
                return run

            original_start_run = pool.start_run
            try:
                pool.start_run = fake_start_run
                record = pool.step_pool("pool-1", store)
            finally:
                pool.start_run = original_start_run

            self.assertIsNotNone(record)
            self.assertEqual(record.active_runs, {"beta": "run-beta"})
            self.assertFalse(record.attempts[0].usable)
            self.assertIn("sync failed", record.attempts[0].reason)


if __name__ == "__main__":
    unittest.main()
