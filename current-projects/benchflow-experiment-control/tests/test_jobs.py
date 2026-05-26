from __future__ import annotations

import json
import tempfile
import unittest
from pathlib import Path

from app.jobs import discover_tasks, scan_run
from app.models import ExperimentConfig, RunRecord


class JobsScanTest(unittest.TestCase):
    def test_discover_tasks_reads_task_toml_dirs(self) -> None:
        with tempfile.TemporaryDirectory() as tmp:
            root = Path(tmp)
            (root / "alpha").mkdir()
            (root / "alpha" / "task.toml").write_text("name = 'alpha'\n")
            (root / "notes").mkdir()

            self.assertEqual(discover_tasks(str(root)), ["alpha"])

    def test_scan_run_summarizes_local_results(self) -> None:
        with tempfile.TemporaryDirectory() as tmp:
            root = Path(tmp)
            trial = root / "alpha__001"
            trial.mkdir()
            (trial / "config.json").write_text(json.dumps({"agent": "gemini", "model": "m"}))
            (trial / "result.json").write_text(
                json.dumps(
                    {
                        "task_name": "alpha",
                        "rewards": {"reward": 1.0},
                        "timing": {"total": 12.5},
                    }
                )
            )
            run = RunRecord(
                id="test-run",
                status="completed",
                config=ExperimentConfig(name="test", run_target="local"),
                jobs_dir=str(root),
                log_path=str(root / "run.log"),
                command=[],
            )

            payload = scan_run(run)

            self.assertEqual(payload["summary"]["total"], 1)
            self.assertEqual(payload["summary"]["passed"], 1)
            self.assertEqual(payload["summary"]["mean_reward"], 1.0)
            self.assertEqual(payload["tasks"][0]["status"], "pass")
            self.assertEqual(payload["tasks"][0]["duration_sec"], 12.5)


if __name__ == "__main__":
    unittest.main()
