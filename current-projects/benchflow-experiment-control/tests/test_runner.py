from __future__ import annotations

import tempfile
import threading
import unittest
from pathlib import Path

from app import runner
from app.models import ExperimentConfig, RunRecord, now_iso
from app.store import StateStore


class RunnerRefreshTest(unittest.TestCase):
    def test_remote_exit_polling_runs_in_parallel(self) -> None:
        """Guards this PR against serial SSH polling across active remote pool slots."""
        with tempfile.TemporaryDirectory() as tmp:
            store = StateStore(Path(tmp) / "state")
            for index in range(2):
                store.upsert_run(remote_run(f"run-{index}"))
            barrier = threading.Barrier(2, timeout=1)
            overlapped: list[bool] = []

            def fake_read_exit_code(run: RunRecord) -> int | None:
                try:
                    barrier.wait()
                except threading.BrokenBarrierError:
                    overlapped.append(False)
                else:
                    overlapped.append(True)
                return None

            original = runner.read_remote_exit_code
            try:
                runner.read_remote_exit_code = fake_read_exit_code
                runner.refresh_processes(store)
            finally:
                runner.read_remote_exit_code = original

            self.assertEqual(overlapped, [True, True])

    def test_remote_exit_polling_ignores_transient_poll_errors(self) -> None:
        """Guards this PR against one SSH polling failure blocking other completed runs."""
        with tempfile.TemporaryDirectory() as tmp:
            store = StateStore(Path(tmp) / "state")
            store.upsert_run(remote_run("ok"))
            store.upsert_run(remote_run("poll-error"))
            synced: list[str] = []

            def fake_read_exit_code(run: RunRecord) -> int | None:
                if run.id == "poll-error":
                    raise RuntimeError("ssh unavailable")
                return 0

            def fake_sync_finished_run(run: RunRecord, store: StateStore) -> None:
                synced.append(run.id)
                store.update_run(run.id, synced_at=now_iso(), sync_error=None)

            original_read = runner.read_remote_exit_code
            original_sync = runner.sync_finished_remote_run
            try:
                runner.read_remote_exit_code = fake_read_exit_code
                runner.sync_finished_remote_run = fake_sync_finished_run
                runner.refresh_processes(store)
            finally:
                runner.read_remote_exit_code = original_read
                runner.sync_finished_remote_run = original_sync

            self.assertEqual(store.get_run("ok").status, "completed")
            self.assertEqual(store.get_run("poll-error").status, "running")
            self.assertEqual(synced, ["ok"])


def remote_run(run_id: str) -> RunRecord:
    return RunRecord(
        id=run_id,
        status="running",
        config=ExperimentConfig(name=run_id, run_target="gcp_ssh"),
        jobs_dir="/local/jobs",
        log_path="/local/run.log",
        command=[],
        remote_jobs_dir=f"/remote/jobs/{run_id}",
        remote_exit_code_path=f"/remote/jobs/{run_id}/exit-code.txt",
    )


if __name__ == "__main__":
    unittest.main()
