from __future__ import annotations

import json
import shutil
from dataclasses import dataclass
from pathlib import Path

from .models import ExperimentConfig


SELECTION_DIR_NAME = ".benchflow-selected-tasks"


@dataclass(frozen=True)
class TaskSelection:
    source_tasks_dir: str
    effective_tasks_dir: str
    selected_tasks: list[str]
    filtered: bool


def available_task_names(tasks_dir: str | Path) -> list[str]:
    root = Path(tasks_dir).expanduser()
    if not root.is_dir():
        raise FileNotFoundError(f"tasks dir does not exist: {root}")
    return sorted(child.name for child in root.iterdir() if (child / "task.toml").is_file())


def select_task_names(
    available: list[str], include_tasks: list[str], exclude_tasks: list[str]
) -> list[str]:
    available_set = set(available)
    include = [name for name in include_tasks if name]
    exclude = [name for name in exclude_tasks if name]

    missing_include = sorted(set(include) - available_set)
    missing_exclude = sorted(set(exclude) - available_set)
    if missing_include:
        raise ValueError(f"include task(s) not found: {', '.join(missing_include)}")
    if missing_exclude:
        raise ValueError(f"exclude task(s) not found: {', '.join(missing_exclude)}")

    selected = include if include else available
    excluded = set(exclude)
    return [name for name in selected if name not in excluded]


def prepare_local_task_selection(
    config: ExperimentConfig, jobs_dir: str | Path
) -> TaskSelection:
    source = Path(config.tasks_dir).expanduser().resolve()
    available = available_task_names(source)
    selected = select_task_names(available, config.include_tasks, config.exclude_tasks)
    filtered = bool(config.include_tasks or config.exclude_tasks)
    if not filtered:
        return TaskSelection(str(source), str(source), selected, filtered=False)

    selection_dir = Path(jobs_dir).expanduser() / SELECTION_DIR_NAME
    if selection_dir.exists():
        shutil.rmtree(selection_dir)
    selection_dir.mkdir(parents=True)
    for task_name in selected:
        (selection_dir / task_name).symlink_to(source / task_name, target_is_directory=True)
    (selection_dir / "selection-manifest.json").write_text(
        json.dumps(
            {
                "source_tasks_dir": str(source),
                "selected_tasks": selected,
                "include_tasks": config.include_tasks,
                "exclude_tasks": config.exclude_tasks,
            },
            indent=2,
        )
        + "\n"
    )
    return TaskSelection(str(source), str(selection_dir), selected, filtered=True)
