from __future__ import annotations

import json
import tempfile
import unittest
from pathlib import Path

from app import remote
from app.archive import local_run_dir
from app.jobs import discover_tasks, scan_run
from app.models import ExperimentConfig, RunRecord
from app.runner import build_command
from app.task_selection import prepare_local_task_selection, select_task_names


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

    def test_selected_tasks_show_as_running_before_results_exist(self) -> None:
        with tempfile.TemporaryDirectory() as tmp:
            root = Path(tmp)
            run = RunRecord(
                id="test-run",
                status="running",
                config=ExperimentConfig(name="test", run_target="local"),
                jobs_dir=str(root),
                log_path=str(root / "run.log"),
                command=[],
                selected_tasks=["alpha", "beta"],
            )

            payload = scan_run(run)

            self.assertEqual(payload["summary"]["total"], 2)
            self.assertEqual(payload["summary"]["running"], 2)
            self.assertEqual([task["task_name"] for task in payload["tasks"]], ["alpha", "beta"])

    def test_error_with_reward_is_scored_from_reward(self) -> None:
        with tempfile.TemporaryDirectory() as tmp:
            root = Path(tmp)
            trial = root / "alpha__001"
            trial.mkdir()
            (trial / "result.json").write_text(
                json.dumps({"task_name": "alpha", "error": "agent timed out", "rewards": {"reward": 0.0}})
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

            self.assertEqual(payload["summary"]["errored"], 0)
            self.assertEqual(payload["summary"]["failed"], 1)

    def test_task_selection_filters_by_symlinked_tasks_dir(self) -> None:
        with tempfile.TemporaryDirectory() as tmp:
            root = Path(tmp)
            tasks = root / "tasks"
            jobs = root / "jobs"
            for name in ("alpha", "beta", "gamma"):
                (tasks / name).mkdir(parents=True)
                (tasks / name / "task.toml").write_text(f"name = {name!r}\n")

            config = ExperimentConfig(
                name="test",
                run_target="local",
                tasks_dir=str(tasks),
                include_tasks=["alpha", "gamma"],
                exclude_tasks=["gamma"],
            )
            selection = prepare_local_task_selection(config, jobs)

            self.assertEqual(selection.selected_tasks, ["alpha"])
            self.assertTrue(Path(selection.effective_tasks_dir, "alpha").is_symlink())

    def test_build_command_uses_effective_tasks_dir_not_fake_include_flags(self) -> None:
        config = ExperimentConfig(
            name="test",
            run_target="local",
            tasks_dir="/source/tasks",
            agent="oracle",
            include_tasks=["alpha"],
        )

        command = build_command(config, "/jobs/run", tasks_dir="/jobs/run/.benchflow-selected-tasks")

        self.assertIn("/jobs/run/.benchflow-selected-tasks", command)
        self.assertNotIn("--include", command)

    def test_select_task_names_rejects_missing_filter_names(self) -> None:
        with self.assertRaises(ValueError):
            select_task_names(["alpha"], ["missing"], [])

    def test_archive_path_groups_by_skills_agent_and_model(self) -> None:
        config = ExperimentConfig(
            name="test",
            jobs_root="/tmp/experiments",
            skills_profile="without-skills",
            agent="open-hands",
            model="vllm/minimax-m2.5",
        )

        path = local_run_dir(config, "batch", "20260526-000000")

        self.assertEqual(
            path.as_posix(),
            "/tmp/experiments/without-skills/open-hands/vllm-minimax-m2-5/batch/20260526-000000",
        )

    def test_env_file_can_be_intentionally_empty(self) -> None:
        config = ExperimentConfig.from_dict({"name": "test", "env_file": ""})

        self.assertEqual(config.env_file, "")

    def test_remote_start_uses_nohup_runner_for_pid_capture(self) -> None:
        """Guards this PR's SSH launch fix against hanging before PID capture."""
        captured: dict[str, object] = {}

        def fake_remote_shell(
            config: ExperimentConfig,
            script: str,
            *,
            input_text: str | None = None,
            timeout: int = 30,
            as_run_user: bool = False,
        ):
            captured["script"] = script
            captured["timeout"] = timeout
            captured["as_run_user"] = as_run_user

            class Result:
                returncode = 0
                stdout = "12345\n"
                stderr = ""

            return Result()

        original = remote.remote_shell
        try:
            remote.remote_shell = fake_remote_shell
            pid = remote.start_remote_process(
                ExperimentConfig(
                    name="test",
                    run_target="gcp_ssh",
                    remote_benchflow_root="/opt/benchflow/benchflow",
                    env_file="/tmp/.env",
                ),
                ["uv", "run", "bench", "eval", "create"],
                remote_jobs_dir="/jobs/run",
                remote_log_path="/jobs/run/run.log",
                remote_env_path="/jobs/run/.env",
                remote_exit_code_path="/jobs/run/exit-code.txt",
            )
        finally:
            remote.remote_shell = original

        script = str(captured["script"])
        self.assertEqual(pid, 12345)
        self.assertTrue(captured["as_run_user"])
        self.assertIn("run-remote.sh", script)
        self.assertIn("nohup setsid bash /jobs/run/run-remote.sh", script)
        self.assertIn("printf '%s\\n' \"$status\" > /jobs/run/exit-code.txt", script)

    def test_remote_stop_kills_process_group_and_run_containers(self) -> None:
        """Guards the fix from PR #286 against leaving remote Docker tasks running after stop."""
        calls: list[dict[str, object]] = []

        def fake_remote_shell(
            config: ExperimentConfig,
            script: str,
            *,
            input_text: str | None = None,
            timeout: int = 30,
            as_run_user: bool = False,
        ):
            calls.append(
                {
                    "script": script,
                    "timeout": timeout,
                    "as_run_user": as_run_user,
                }
            )

            class Result:
                returncode = 0
                stdout = ""
                stderr = ""

            return Result()

        original = remote.remote_shell
        try:
            remote.remote_shell = fake_remote_shell
            remote.stop_remote_run(
                RunRecord(
                    id="test-run",
                    status="running",
                    config=ExperimentConfig(name="test", run_target="gcp_ssh"),
                    jobs_dir="/local/jobs",
                    log_path="/local/run.log",
                    command=[],
                    remote_pid=12345,
                    remote_jobs_dir="/mnt/jobs/run",
                )
            )
        finally:
            remote.remote_shell = original

        self.assertEqual(len(calls), 2)
        process_script = str(calls[0]["script"])
        cleanup_script = str(calls[1]["script"])
        self.assertTrue(calls[0]["as_run_user"])
        self.assertFalse(calls[1]["as_run_user"])
        self.assertIn("kill -TERM -- \"-$pgid\"", process_script)
        self.assertIn("kill -KILL -- \"-$pgid\"", process_script)
        self.assertIn("docker ps -aq)", cleanup_script)
        self.assertIn("run_dir=/mnt/jobs/run", cleanup_script)
        self.assertIn("grep -Fq \"$run_dir/\"", cleanup_script)
        self.assertIn("com.docker.compose.project", cleanup_script)
        self.assertIn("xargs -r sudo -n docker rm -f", cleanup_script)


if __name__ == "__main__":
    unittest.main()
