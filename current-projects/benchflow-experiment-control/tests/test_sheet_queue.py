from __future__ import annotations

import json
import re
import unittest
from datetime import datetime, timedelta

from app.health import TrialAudit
from app.models import ExperimentConfig, PoolClaim
from app.sheet_queue import DEFAULT_SHEET_ID, SheetQueue, SheetTable, a1_column, final_slot_values


HEADERS = [
    "hf_pr",
    "task_id",
    "configuration",
    "model_display",
    "model_slug",
    "model_group",
    "provider",
    "agent",
    "mode",
    "environment",
    "vm",
    "run_family",
    "run_state",
    "concurrency",
    "usable_trials",
    "missing_usable_trials",
    "infra_excluded_count",
    "mean_reward_usable",
]
RUN_FIELDS = [
    "trial_id",
    "pass_slot",
    "attempt_kind",
    "reward",
    "status_raw",
    "status_for_analysis",
    "pass_fail_timeout",
    "error_category",
    "is_infra_error",
    "is_usable_for_analysis",
    "has_trajectory",
    "trajectory_events",
    "n_tool_calls",
    "tool_call_completed",
    "tool_call_failed",
    "tool_kinds",
    "skill_launch_count",
    "skill_names_seen",
    "started_at",
    "finished_at",
    "environment_setup_s",
    "agent_setup_s",
    "agent_execution_s",
    "verifier_s",
    "total_s",
    "usage",
    "token_usage",
    "input_tokens",
    "output_tokens",
    "cache_read_input_tokens",
    "cache_creation_input_tokens",
    "total_tokens",
    "usage_source",
    "price_source",
    "priced_at",
    "total_cost_usd",
    "result_path",
    "trajectory_path",
    "trajectory_vm_path",
    "config_path",
]
for slot in range(1, 6):
    HEADERS.extend(f"run_{slot}_{field}" for field in RUN_FIELDS)
for slot in range(1, 6):
    HEADERS.extend([f"run_{slot}_hf_trial_url", f"run_{slot}_vm_trial_path"])


class FakeSheetClient:
    def __init__(self, values: list[list[str]]):
        self.values = values
        self.updates: list[tuple[str, list[list[str]]]] = []

    def read_values(self, spreadsheet_id: str, range_name: str) -> list[list[str]]:
        return self.values

    def batch_update_values(self, spreadsheet_id: str, updates):
        self.updates.extend(updates)
        for range_name, values in updates:
            match = re.search(r"!([A-Z]+)([0-9]+):", range_name)
            if not match:
                continue
            col = column_number(match.group(1)) - 1
            row = int(match.group(2)) - 1
            while len(self.values) <= row:
                self.values.append([])
            while len(self.values[row]) <= col:
                self.values[row].append("")
            self.values[row][col] = values[0][0]


def column_number(name: str) -> int:
    value = 0
    for char in name:
        value = value * 26 + ord(char) - 64
    return value


class SheetQueueTest(unittest.TestCase):
    def test_a1_column_handles_sheet_end(self) -> None:
        self.assertEqual(a1_column(1), "A")
        self.assertEqual(a1_column(26), "Z")
        self.assertEqual(a1_column(27), "AA")
        self.assertEqual(a1_column(228), "HT")

    def test_imported_status_tab_is_not_a_writable_queue_target(self) -> None:
        """Guards this PR against overwriting IMPORTRANGE formulas in the shared sheet."""
        with self.assertRaisesRegex(ValueError, "IMPORTRANGE view"):
            SheetQueue(
                ExperimentConfig(
                    name="test",
                    sheet_id=DEFAULT_SHEET_ID,
                    sheet_tab="PR2_PR3_HF_VM_Clean5",
                ),
                FakeSheetClient([HEADERS]),
            )

    def test_available_slots_skip_existing_usable_trials(self) -> None:
        row = ["", "alpha", "openhands__m__without-skills"] + [""] * (len(HEADERS) - 3)
        row[HEADERS.index("run_1_is_usable_for_analysis")] = "TRUE"
        row[HEADERS.index("run_2_status_raw")] = "bfec_invalid"
        table = SheetTable.from_values("Sheet1", [HEADERS, row])

        slots = table.slots_for_configuration("openhands__m__without-skills")
        available = [
            slot.slot
            for slot in slots
            if slot.is_available(datetime.now().astimezone(), timedelta(minutes=10))
        ]

        self.assertEqual(available, [2, 3, 4, 5])

    def test_available_slots_rank_empty_before_replacing_invalid_slots(self) -> None:
        row = ["", "alpha", "openhands__m__without-skills"] + [""] * (len(HEADERS) - 3)
        row[HEADERS.index("run_1_status_raw")] = "bfec_invalid"
        values = [HEADERS, row]
        queue = SheetQueue(
            ExperimentConfig(
                name="test",
                agent="openhands",
                model="m",
                skills_profile="without-skills",
                sheet_id="sheet",
            ),
            FakeSheetClient(values),
        )

        slots = queue.available_slots()

        self.assertEqual([slot.slot for slot in slots], [2, 3, 4, 5, 1])

    def test_available_slots_skip_fresh_running_claims(self) -> None:
        row = ["", "alpha", "openhands__m__without-skills"] + [""] * (len(HEADERS) - 3)
        row[HEADERS.index("run_1_trial_id")] = "alpha__other-pool"
        row[HEADERS.index("run_1_status_raw")] = "running"
        row[HEADERS.index("run_1_started_at")] = datetime.now().astimezone().isoformat()
        table = SheetTable.from_values("Sheet1", [HEADERS, row])

        slots = table.slots_for_configuration("openhands__m__without-skills")
        available = [
            slot.slot
            for slot in slots
            if slot.is_available(datetime.now().astimezone(), timedelta(minutes=240))
        ]

        self.assertEqual(available, [2, 3, 4, 5])

    def test_claim_distinct_tasks_writes_existing_slot_columns(self) -> None:
        values = [
            HEADERS,
            ["", "alpha", "openhands__m__without-skills"] + [""] * (len(HEADERS) - 3),
            ["", "alpha", "openhands__m__without-skills"] + [""] * (len(HEADERS) - 3),
            ["", "beta", "openhands__m__without-skills"] + [""] * (len(HEADERS) - 3),
        ]
        client = FakeSheetClient(values)
        queue = SheetQueue(
            ExperimentConfig(
                name="test",
                agent="openhands",
                model="m",
                skills_profile="without-skills",
                sheet_id="sheet",
            ),
            client,
        )

        claims = queue.claim_distinct_tasks(2, "pool")

        self.assertEqual([claim.task_name for claim in claims], ["alpha", "beta"])
        ranges = [item[0] for item in client.updates]
        self.assertIn("PR2_PR3_HF_VM_Clean5!S2:S2", ranges)
        self.assertIn("PR2_PR3_HF_VM_Clean5!W2:W2", ranges)
        self.assertIn("PR2_PR3_HF_VM_Clean5!S4:S4", ranges)

    def test_final_slot_values_include_usage_and_health_verdict(self) -> None:
        audit = TrialAudit(
            task_name="alpha",
            trial_name="alpha__abc",
            usable=True,
            verdict="usable",
            reason="",
            reward=1.0,
            outcome="pass",
            status_raw="pass",
            error="",
            error_category="",
            verifier_error="",
            total_tokens=30,
            input_tokens=20,
            output_tokens=10,
            cache_read_input_tokens=0,
            cache_creation_input_tokens=0,
            usage_source="provider_response",
            price_source="litellm",
            total_cost_usd=0.01,
            acp_trajectory_events=4,
            llm_trajectory_events=2,
            n_tool_calls=3,
            n_skill_invocations=0,
            started_at="start",
            finished_at="finish",
            timing={"total": 12.0},
            result_path="run/alpha/result.json",
            config_path="run/alpha/config.json",
            acp_trajectory_path="run/alpha/trajectory/acp_trajectory.jsonl",
            llm_trajectory_path="run/alpha/trajectory/llm_trajectory.jsonl",
            trial_path="run/alpha",
        )

        values = final_slot_values(PoolClaim("claim", "alpha", 2, 1), audit)

        self.assertEqual(values["run_1_is_usable_for_analysis"], "TRUE")
        self.assertEqual(values["run_1_total_tokens"], 30)
        self.assertEqual(json.loads(values["run_1_token_usage"])["output_tokens"], 10)


if __name__ == "__main__":
    unittest.main()
