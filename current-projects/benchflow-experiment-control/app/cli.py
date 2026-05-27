from __future__ import annotations

import argparse
import json
import sys
from pathlib import Path
from typing import Any

from .manager import ExperimentManager
from .models import DEFAULT_DATA_DIR


def load_config(path: str) -> dict[str, Any]:
    if path == "-":
        return json.loads(sys.stdin.read())
    return json.loads(Path(path).expanduser().read_text())


def print_json(payload: Any, *, pretty: bool) -> None:
    indent = 2 if pretty else None
    print(json.dumps(payload, ensure_ascii=False, indent=indent))


def apply_overrides(config: dict[str, Any], overrides: list[str]) -> dict[str, Any]:
    updated = dict(config)
    for item in overrides:
        if "=" not in item:
            raise ValueError(f"--set expects key=value, got {item!r}")
        key, value = item.split("=", 1)
        updated[key.strip()] = value.strip()
    return updated


def build_parser() -> argparse.ArgumentParser:
    parser = argparse.ArgumentParser(
        prog="benchflow-experiment-control",
        description="CLI manager for launching and monitoring BenchFlow experiment batches.",
    )
    parser.add_argument(
        "--data-dir",
        default=str(DEFAULT_DATA_DIR),
        help="Directory for state.json and local logs.",
    )
    parser.add_argument("--pretty", action="store_true", help="Pretty-print JSON output.")
    sub = parser.add_subparsers(dest="command", required=True)

    sub.add_parser("defaults", help="Print default dashboard/runner config.")
    sub.add_parser("state", help="Refresh process status and print all runs.")

    tasks = sub.add_parser("tasks", help="List tasks from a local tasks directory.")
    tasks.add_argument("--tasks-dir", required=True)

    start = sub.add_parser("start", help="Start a local or GCP SSH BenchFlow run.")
    start.add_argument("--config", required=True, help="JSON config path, or '-' for stdin.")
    start.add_argument(
        "--set",
        action="append",
        default=[],
        metavar="KEY=VALUE",
        help="Override a top-level config field.",
    )

    stop = sub.add_parser("stop", help="Stop a run by id.")
    stop.add_argument("run_id")

    run = sub.add_parser("run", help="Print one run snapshot by id.")
    run.add_argument("run_id")

    artifact = sub.add_parser("artifact", help="Read one artifact from a run.")
    artifact.add_argument("run_id")
    artifact.add_argument("--path", required=True)

    pool_start = sub.add_parser("pool-start", help="Start a continuous task pool.")
    pool_start.add_argument("--config", required=True, help="JSON config path, or '-' for stdin.")
    pool_start.add_argument(
        "--set",
        action="append",
        default=[],
        metavar="KEY=VALUE",
        help="Override a top-level config field.",
    )

    pool = sub.add_parser("pool", help="Refresh and print one pool snapshot by id.")
    pool.add_argument("pool_id")

    pool_step = sub.add_parser("pool-step", help="Advance one pool scheduler tick.")
    pool_step.add_argument("pool_id")

    pool_stop = sub.add_parser("pool-stop", help="Stop scheduling new tasks for a pool.")
    pool_stop.add_argument("pool_id")
    return parser


def main(argv: list[str] | None = None) -> int:
    parser = build_parser()
    raw_args = list(sys.argv[1:] if argv is None else argv)
    pretty_requested = "--pretty" in raw_args
    if pretty_requested:
        raw_args = [arg for arg in raw_args if arg != "--pretty"]
    args = parser.parse_args(raw_args)
    args.pretty = args.pretty or pretty_requested
    manager = ExperimentManager(args.data_dir)

    try:
        if args.command == "defaults":
            payload = manager.defaults()
        elif args.command == "state":
            payload = manager.state()
        elif args.command == "tasks":
            payload = manager.tasks(args.tasks_dir)
        elif args.command == "start":
            payload = manager.start(apply_overrides(load_config(args.config), args.set))
        elif args.command == "stop":
            payload = manager.stop(args.run_id) or {"error": "run not found"}
        elif args.command == "run":
            payload = manager.run(args.run_id) or {"error": "run not found"}
        elif args.command == "artifact":
            payload = manager.artifact(args.run_id, args.path) or {"error": "run not found"}
        elif args.command == "pool-start":
            payload = manager.start_pool(apply_overrides(load_config(args.config), args.set))
        elif args.command == "pool":
            payload = manager.pool(args.pool_id) or {"error": "pool not found"}
        elif args.command == "pool-step":
            payload = manager.step_pool(args.pool_id) or {"error": "pool not found"}
        elif args.command == "pool-stop":
            payload = manager.stop_pool(args.pool_id) or {"error": "pool not found"}
        else:
            parser.error("unknown command")
            return 2
    except Exception as exc:
        print_json({"error": str(exc)}, pretty=args.pretty)
        return 1

    print_json(payload, pretty=args.pretty)
    return 1 if isinstance(payload, dict) and payload.get("error") else 0


if __name__ == "__main__":
    raise SystemExit(main())
