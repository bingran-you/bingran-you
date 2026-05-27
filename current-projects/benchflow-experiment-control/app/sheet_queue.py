from __future__ import annotations

import json
import subprocess
from dataclasses import dataclass
from datetime import datetime, timedelta
from typing import Any, Protocol

from .health import TrialAudit
from .models import ExperimentConfig, PoolClaim, now_iso


DEFAULT_SHEET_ID = "12Df5viQyNpFqntKzH7h1FFg1s2hGoLeXcNUZtO7kPFA"
IMPORTED_VIEW_TABS = {"PR2_PR3_HF_VM_Clean5"}
RUN_SLOTS = range(1, 6)
CLAIM_ATTEMPT_KIND = "bfec-sheet-pool"
CLAIM_STATUS = "running"
CLAIMABLE_SLOT_RANKS = {
    "empty": 0,
    "stale-running": 1,
    "invalid": 2,
}


class SheetClient(Protocol):
    def read_values(self, spreadsheet_id: str, range_name: str) -> list[list[str]]:
        ...

    def batch_update_values(
        self, spreadsheet_id: str, updates: list[tuple[str, list[list[Any]]]]
    ) -> None:
        ...


class GwsSheetClient:
    def read_values(self, spreadsheet_id: str, range_name: str) -> list[list[str]]:
        result = run_gws(
            [
                "gws",
                "sheets",
                "spreadsheets",
                "values",
                "get",
                "--params",
                json.dumps({"spreadsheetId": spreadsheet_id, "range": range_name}),
                "--format",
                "json",
            ]
        )
        return result.get("values") or []

    def batch_update_values(
        self, spreadsheet_id: str, updates: list[tuple[str, list[list[Any]]]]
    ) -> None:
        if not updates:
            return
        body = {
            "valueInputOption": "USER_ENTERED",
            "data": [
                {"range": range_name, "majorDimension": "ROWS", "values": values}
                for range_name, values in updates
            ],
        }
        run_gws(
            [
                "gws",
                "sheets",
                "spreadsheets",
                "values",
                "batchUpdate",
                "--params",
                json.dumps({"spreadsheetId": spreadsheet_id}),
                "--json",
                json.dumps(body),
                "--format",
                "json",
            ]
        )


def run_gws(command: list[str]) -> dict[str, Any]:
    result = subprocess.run(command, text=True, capture_output=True, check=False)
    if result.returncode != 0:
        message = result.stderr.strip() or result.stdout.strip() or "gws command failed"
        raise RuntimeError(message)
    return json.loads(result.stdout or "{}")


def ensure_writable_queue_target(spreadsheet_id: str, tab: str) -> None:
    if spreadsheet_id == DEFAULT_SHEET_ID and tab in IMPORTED_VIEW_TABS:
        raise ValueError(
            f"{tab} in the shared status spreadsheet is an IMPORTRANGE view; "
            "use the writable source spreadsheet/tab for sheet-backed pooling"
        )


@dataclass(frozen=True)
class SheetSlot:
    row_number: int
    task_name: str
    slot: int
    values: dict[str, str]

    @property
    def item_id(self) -> str:
        return f"{self.row_number}:{self.slot}:{self.task_name}"

    @property
    def trial_id(self) -> str:
        return self.values.get(field_name(self.slot, "trial_id"), "")

    @property
    def status_raw(self) -> str:
        return self.values.get(field_name(self.slot, "status_raw"), "")

    @property
    def started_at(self) -> str:
        return self.values.get(field_name(self.slot, "started_at"), "")

    @property
    def is_usable(self) -> bool:
        return self.values.get(field_name(self.slot, "is_usable_for_analysis"), "") == "TRUE"

    def is_available(self, now: datetime, ttl: timedelta) -> bool:
        return self.claimable_kind(now, ttl) is not None

    def claimable_rank(self, now: datetime, ttl: timedelta) -> int | None:
        kind = self.claimable_kind(now, ttl)
        return CLAIMABLE_SLOT_RANKS.get(kind) if kind else None

    def claimable_kind(self, now: datetime, ttl: timedelta) -> str | None:
        if self.is_usable:
            return None
        if not self.trial_id and not self.status_raw:
            return "empty"
        if self.status_raw != CLAIM_STATUS:
            return "invalid"
        claimed_at = parse_datetime(self.started_at)
        if claimed_at is not None and claimed_at + ttl < now:
            return "stale-running"
        return None


class SheetQueue:
    def __init__(self, config: ExperimentConfig, client: SheetClient | None = None):
        self.config = config
        self.client = client or GwsSheetClient()
        self.spreadsheet_id = config.sheet_id or DEFAULT_SHEET_ID
        self.tab = config.sheet_tab
        self.configuration = config.sheet_configuration or configuration_key(config)
        ensure_writable_queue_target(self.spreadsheet_id, self.tab)

    def read_table(self) -> "SheetTable":
        values = self.client.read_values(self.spreadsheet_id, f"{self.tab}!A:HT")
        return SheetTable.from_values(self.tab, values)

    def available_slots(self) -> list[SheetSlot]:
        ttl = timedelta(minutes=self.config.sheet_lease_ttl_minutes)
        now = datetime.now().astimezone()
        slots = [
            slot
            for slot in self.read_table().slots_for_configuration(self.configuration)
            if slot.is_available(now, ttl)
        ]
        return sorted(
            slots,
            key=lambda slot: (
                claimable_rank_or_last(slot, now, ttl),
                slot.row_number,
                slot.slot,
            ),
        )

    def claim_distinct_tasks(self, count: int, pool_id: str) -> list[PoolClaim]:
        selected: list[SheetSlot] = []
        seen_tasks: set[str] = set()
        for slot in self.available_slots():
            if slot.task_name in seen_tasks:
                continue
            selected.append(slot)
            seen_tasks.add(slot.task_name)
            if len(selected) >= count:
                break
        claims = [
            PoolClaim(
                id=f"{pool_id}-{slot.row_number}-{slot.slot}",
                task_name=slot.task_name,
                sheet_row=slot.row_number,
                sheet_slot=slot.slot,
            )
            for slot in selected
        ]
        self.write_claims(claims)
        return claims

    def write_claims(self, claims: list[PoolClaim]) -> None:
        table = self.read_table()
        updates: list[tuple[str, list[list[Any]]]] = []
        for claim in claims:
            prefix = f"run_{claim.sheet_slot}_"
            values = {
                f"{prefix}trial_id": claim_trial_id(claim),
                f"{prefix}pass_slot": claim.sheet_slot,
                f"{prefix}attempt_kind": CLAIM_ATTEMPT_KIND,
                f"{prefix}status_raw": CLAIM_STATUS,
                f"{prefix}status_for_analysis": CLAIM_STATUS,
                f"{prefix}pass_fail_timeout": CLAIM_STATUS,
                f"{prefix}is_infra_error": "FALSE",
                f"{prefix}is_usable_for_analysis": "FALSE",
                f"{prefix}started_at": claim.claimed_at,
            }
            updates.extend(row_updates(self.tab, claim.sheet_row, values, table.headers))
        self.client.batch_update_values(self.spreadsheet_id, updates)
        self.verify_claims(claims)

    def verify_claims(self, claims: list[PoolClaim]) -> None:
        table = self.read_table()
        lost: list[str] = []
        for claim in claims:
            row = table.row(claim.sheet_row)
            if row.get(field_name(claim.sheet_slot, "trial_id")) != claim_trial_id(claim):
                lost.append(f"{claim.task_name}@row{claim.sheet_row}/run_{claim.sheet_slot}")
        if lost:
            raise RuntimeError(f"sheet claim verification failed: {', '.join(lost)}")

    def release_claims(self, claims: list[PoolClaim]) -> None:
        table = self.read_table()
        updates: list[tuple[str, list[list[Any]]]] = []
        for claim in claims:
            prefix = f"run_{claim.sheet_slot}_"
            values = {
                f"{prefix}trial_id": "",
                f"{prefix}pass_slot": "",
                f"{prefix}attempt_kind": "",
                f"{prefix}status_raw": "",
                f"{prefix}status_for_analysis": "",
                f"{prefix}pass_fail_timeout": "",
                f"{prefix}is_infra_error": "",
                f"{prefix}is_usable_for_analysis": "",
                f"{prefix}started_at": "",
            }
            updates.extend(row_updates(self.tab, claim.sheet_row, values, table.headers))
        self.client.batch_update_values(self.spreadsheet_id, updates)

    def write_final_result(self, claim: PoolClaim, audit: TrialAudit) -> None:
        table = self.read_table()
        row = table.row(claim.sheet_row)
        values = final_slot_values(claim, audit)
        row_values = dict(row)
        row_values.update({key: stringify(value) for key, value in values.items()})
        values.update(summary_values(row_values))
        self.client.batch_update_values(
            self.spreadsheet_id,
            row_updates(self.tab, claim.sheet_row, values, table.headers),
        )

    def write_missing_result(self, claim: PoolClaim, reason: str) -> None:
        table = self.read_table()
        prefix = f"run_{claim.sheet_slot}_"
        values = {
            f"{prefix}status_raw": "bfec_invalid",
            f"{prefix}status_for_analysis": "",
            f"{prefix}pass_fail_timeout": "",
            f"{prefix}error_category": reason,
            f"{prefix}is_infra_error": "TRUE",
            f"{prefix}is_usable_for_analysis": "FALSE",
            f"{prefix}finished_at": now_iso(),
        }
        self.client.batch_update_values(
            self.spreadsheet_id,
            row_updates(self.tab, claim.sheet_row, values, table.headers),
        )


@dataclass
class SheetTable:
    tab: str
    headers: list[str]
    rows: dict[int, dict[str, str]]

    @classmethod
    def from_values(cls, tab: str, values: list[list[str]]) -> "SheetTable":
        headers = values[0] if values else []
        rows: dict[int, dict[str, str]] = {}
        for offset, raw_row in enumerate(values[1:], start=2):
            padded = [*raw_row, *([""] * max(0, len(headers) - len(raw_row)))]
            rows[offset] = dict(zip(headers, padded, strict=False))
        return cls(tab=tab, headers=headers, rows=rows)

    def row(self, row_number: int) -> dict[str, str]:
        return self.rows.get(row_number, {})

    def slots_for_configuration(self, configuration: str) -> list[SheetSlot]:
        slots: list[SheetSlot] = []
        for row_number, row in sorted(self.rows.items()):
            if row.get("configuration") != configuration:
                continue
            task_name = row.get("task_id") or ""
            for slot in RUN_SLOTS:
                slots.append(
                    SheetSlot(
                        row_number=row_number,
                        task_name=task_name,
                        slot=slot,
                        values=row,
                    )
                )
        return slots


def final_slot_values(claim: PoolClaim, audit: TrialAudit) -> dict[str, Any]:
    prefix = f"run_{claim.sheet_slot}_"
    is_usable = "TRUE" if audit.usable else "FALSE"
    status_for_analysis = audit.outcome if audit.usable else ""
    return {
        f"{prefix}trial_id": audit.trial_name,
        f"{prefix}pass_slot": claim.sheet_slot,
        f"{prefix}attempt_kind": CLAIM_ATTEMPT_KIND,
        f"{prefix}reward": audit.reward if audit.reward is not None else "",
        f"{prefix}status_raw": audit.status_raw,
        f"{prefix}status_for_analysis": status_for_analysis,
        f"{prefix}pass_fail_timeout": status_for_analysis,
        f"{prefix}error_category": audit.error_category,
        f"{prefix}is_infra_error": "FALSE" if audit.usable else "TRUE",
        f"{prefix}is_usable_for_analysis": is_usable,
        f"{prefix}has_trajectory": "TRUE" if audit.acp_trajectory_events > 0 else "FALSE",
        f"{prefix}trajectory_events": audit.acp_trajectory_events,
        f"{prefix}n_tool_calls": audit.n_tool_calls if audit.n_tool_calls is not None else "",
        f"{prefix}skill_launch_count": (
            audit.n_skill_invocations if audit.n_skill_invocations is not None else ""
        ),
        f"{prefix}started_at": audit.started_at,
        f"{prefix}finished_at": audit.finished_at,
        f"{prefix}environment_setup_s": audit.timing.get("environment_setup", ""),
        f"{prefix}agent_setup_s": audit.timing.get("agent_setup", ""),
        f"{prefix}agent_execution_s": audit.timing.get("agent_execution", ""),
        f"{prefix}verifier_s": audit.timing.get("verifier", ""),
        f"{prefix}total_s": audit.timing.get("total", ""),
        f"{prefix}usage": json.dumps(usage_payload(audit), sort_keys=True),
        f"{prefix}token_usage": json.dumps(token_usage_payload(audit), sort_keys=True),
        f"{prefix}input_tokens": audit.input_tokens if audit.input_tokens is not None else "",
        f"{prefix}output_tokens": audit.output_tokens if audit.output_tokens is not None else "",
        f"{prefix}cache_read_input_tokens": (
            audit.cache_read_input_tokens if audit.cache_read_input_tokens is not None else ""
        ),
        f"{prefix}cache_creation_input_tokens": (
            audit.cache_creation_input_tokens
            if audit.cache_creation_input_tokens is not None
            else ""
        ),
        f"{prefix}total_tokens": audit.total_tokens if audit.total_tokens is not None else "",
        f"{prefix}usage_source": audit.usage_source,
        f"{prefix}price_source": audit.price_source,
        f"{prefix}priced_at": now_iso() if audit.total_cost_usd is not None else "",
        f"{prefix}total_cost_usd": (
            audit.total_cost_usd if audit.total_cost_usd is not None else ""
        ),
        f"{prefix}result_path": f"LOCAL:{audit.result_path}",
        f"{prefix}trajectory_path": f"LOCAL:{audit.acp_trajectory_path}",
        f"{prefix}trajectory_vm_path": "",
        f"{prefix}config_path": f"LOCAL:{audit.config_path}" if audit.config_path else "",
        f"run_{claim.sheet_slot}_vm_trial_path": f"LOCAL:{audit.trial_path}",
    }


def claimable_rank_or_last(slot: SheetSlot, now: datetime, ttl: timedelta) -> int:
    rank = slot.claimable_rank(now, ttl)
    return rank if rank is not None else len(CLAIMABLE_SLOT_RANKS)


def claim_trial_id(claim: PoolClaim) -> str:
    return f"{claim.task_name}__{claim.id}"


def summary_values(row: dict[str, str]) -> dict[str, Any]:
    rewards: list[float] = []
    usable = 0
    for slot in RUN_SLOTS:
        if row.get(field_name(slot, "is_usable_for_analysis")) != "TRUE":
            continue
        usable += 1
        reward = parse_float(row.get(field_name(slot, "reward"), ""))
        if reward is not None:
            rewards.append(reward)
    return {
        "run_state": "uploaded" if usable else "no-usable",
        "usable_trials": usable,
        "missing_usable_trials": max(0, 5 - usable),
        "mean_reward_usable": sum(rewards) / len(rewards) if rewards else "",
    }


def usage_payload(audit: TrialAudit) -> dict[str, Any]:
    return {
        "source": audit.usage_source,
        "total_tokens": audit.total_tokens,
        "cost_usd": audit.total_cost_usd,
    }


def token_usage_payload(audit: TrialAudit) -> dict[str, Any]:
    return {
        "input_tokens": audit.input_tokens,
        "output_tokens": audit.output_tokens,
        "cache_read_input_tokens": audit.cache_read_input_tokens,
        "cache_creation_input_tokens": audit.cache_creation_input_tokens,
        "total_tokens": audit.total_tokens,
    }


def row_updates(
    tab: str, row_number: int, values: dict[str, Any], headers: list[str]
) -> list[tuple[str, list[list[Any]]]]:
    columns = {header: a1_column(index) for index, header in enumerate(headers, start=1)}
    return [
        (f"{tab}!{column}{row_number}:{column}{row_number}", [[stringify(value)]])
        for key, value in values.items()
        if (column := columns.get(key))
    ]


def field_name(slot: int, name: str) -> str:
    return f"run_{slot}_{name}"


def a1_column(index: int) -> str:
    name = ""
    while index:
        index, remainder = divmod(index - 1, 26)
        name = chr(65 + remainder) + name
    return name


def configuration_key(config: ExperimentConfig) -> str:
    return f"{config.agent}__{config.model}__{config.skills_profile}"


def stringify(value: Any) -> Any:
    if value is None:
        return ""
    if isinstance(value, bool):
        return "TRUE" if value else "FALSE"
    return value


def parse_datetime(value: str) -> datetime | None:
    if not value:
        return None
    try:
        return datetime.fromisoformat(value)
    except ValueError:
        return None


def parse_float(value: str) -> float | None:
    try:
        return float(value)
    except (TypeError, ValueError):
        return None
