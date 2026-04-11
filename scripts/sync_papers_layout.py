#!/usr/bin/env python3

from __future__ import annotations

import json
import shutil
import sys
from pathlib import Path


def copy_if_changed(src: Path, dest: Path) -> bool:
    dest.parent.mkdir(parents=True, exist_ok=True)

    if dest.exists():
        src_stat = src.stat()
        dest_stat = dest.stat()
        if (
            src_stat.st_size == dest_stat.st_size
            and src_stat.st_mtime_ns == dest_stat.st_mtime_ns
        ):
            return False

    shutil.copy2(src, dest)
    return True


def parse_hierarchy(hierarchy_path: Path) -> dict[str, list[str]]:
    stack: list[str | None] = []
    mapping: dict[str, list[str]] = {}

    for raw_line in hierarchy_path.read_text(encoding="utf-8").splitlines():
        line = raw_line.rstrip()
        if not line.strip():
            continue

        index = 0
        depth = 0
        while True:
            if line.startswith("│   ", index) or line.startswith("    ", index):
                depth += 1
                index += 4
                continue
            break

        if line.startswith("├── ", index) or line.startswith("└── ", index):
            depth += 1
            index += 4

        name = line[index:].strip()
        if not name:
            continue

        while len(stack) <= depth:
            stack.append(None)

        stack[depth] = name.rstrip("/")
        del stack[depth + 1 :]

        if not name.endswith("/"):
            mapping.setdefault(name, [part for part in stack[:depth] if part])

    if not mapping:
        raise SystemExit(f"Failed to parse any file entries from {hierarchy_path}")

    roots = {parts[0] for parts in mapping.values() if parts}
    if len(roots) == 1:
        root = next(iter(roots))
        mapping = {
            name: parts[1:] if parts and parts[0] == root else parts
            for name, parts in mapping.items()
        }

    return mapping


def load_fallback_paths(structure_path: Path) -> dict[str, list[str]]:
    data = json.loads(structure_path.read_text(encoding="utf-8"))
    fallback_paths: dict[str, list[str]] = {}

    for detail in data.get("attachmentDetails", {}).values():
        name = detail.get("markdownFulltextFileName")
        if not name or name in fallback_paths:
            continue

        collections = detail.get("collections") or []
        if collections:
            fallback_paths[name] = list(collections[0].get("path") or [])
        else:
            fallback_paths[name] = []

    return fallback_paths


def normalize_parts(parts: list[str]) -> list[str]:
    normalized: list[str] = []

    for part in parts:
        cleaned = part.strip()
        if cleaned:
            normalized.append(cleaned.lower())

    return normalized


def resolve_source_documents_dir(src_root: Path) -> Path:
    for dirname in ("documents", "Documents"):
        candidate = src_root / dirname
        if candidate.is_dir():
            return candidate

    raise SystemExit(f"Missing source documents directory under {src_root}")


def remove_stale_paths(dest_docs: Path, expected_paths: set[Path]) -> int:
    if not dest_docs.exists():
        return 0

    removed = 0

    for path in sorted(dest_docs.rglob("*"), reverse=True):
        if path.is_file():
            if path.relative_to(dest_docs) not in expected_paths:
                path.unlink()
                removed += 1
            continue

        try:
            path.rmdir()
        except OSError:
            pass

    return removed


def main() -> int:
    if len(sys.argv) != 3:
        raise SystemExit("usage: sync_papers_layout.py <src_root> <dest_root>")

    src_root = Path(sys.argv[1]).expanduser().resolve()
    dest_root = Path(sys.argv[2]).expanduser().resolve()

    hierarchy_path = src_root / "library_hierarchy.txt"
    structure_path = src_root / "structure.json"
    src_docs = resolve_source_documents_dir(src_root)
    dest_docs = dest_root / "documents"

    if not hierarchy_path.is_file():
        raise SystemExit(f"Missing hierarchy file: {hierarchy_path}")

    if not structure_path.is_file():
        raise SystemExit(f"Missing structure file: {structure_path}")

    dest_root.mkdir(parents=True, exist_ok=True)

    hierarchy_paths = parse_hierarchy(hierarchy_path)
    fallback_paths = load_fallback_paths(structure_path)

    expected_paths: dict[Path, Path] = {}
    uncategorized = 0

    for src_file in sorted(src_docs.iterdir()):
        if not src_file.is_file():
            continue

        parts = hierarchy_paths.get(src_file.name)
        if parts is None:
            parts = fallback_paths.get(src_file.name)

        if parts is None:
            parts = ["uncategorized"]
            uncategorized += 1

        dest_rel = Path(*normalize_parts(parts), src_file.name)
        expected_paths[dest_rel] = src_file

    copied = 0
    for dest_rel, src_file in expected_paths.items():
        if copy_if_changed(src_file, dest_docs / dest_rel):
            copied += 1

    removed = remove_stale_paths(dest_docs, set(expected_paths))

    metadata_copied = 0
    if copy_if_changed(hierarchy_path, dest_root / "library_hierarchy.txt"):
        metadata_copied += 1
    if copy_if_changed(structure_path, dest_root / "structure.json"):
        metadata_copied += 1

    print(
        "synced"
        f" files={len(expected_paths)}"
        f" dirs={len({dest_rel.parent for dest_rel in expected_paths})}"
        f" copied={copied}"
        f" removed={removed}"
        f" metadata={metadata_copied}"
        f" uncategorized={uncategorized}"
    )
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
