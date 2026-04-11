#!/usr/bin/env python3

from __future__ import annotations

import json
import shutil
import sys
from pathlib import Path

SENSITIVE_COLLECTION_SEGMENTS = {"niw"}
SENSITIVE_KEYWORDS = (
    "vaccination history",
    "research plan statement",
    "recommendation letter",
    "index of exhibits",
)


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


def write_text_if_changed(text: str, dest: Path) -> bool:
    dest.parent.mkdir(parents=True, exist_ok=True)

    if dest.exists() and dest.read_text(encoding="utf-8") == text:
        return False

    dest.write_text(text, encoding="utf-8")
    return True


def parse_hierarchy_entries(hierarchy_path: Path) -> list[list[str]]:
    stack: list[str | None] = []
    entries: list[list[str]] = []

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
            entries.append([part for part in stack[: depth + 1] if part])

    if not entries:
        raise SystemExit(f"Failed to parse any file entries from {hierarchy_path}")

    return entries


def build_hierarchy_mapping(entries: list[list[str]]) -> dict[str, list[str]]:
    mapping: dict[str, list[str]] = {}

    for entry in entries:
        mapping.setdefault(entry[-1], entry[:-1])

    roots = {parts[0] for parts in mapping.values() if parts}
    if len(roots) == 1:
        root = next(iter(roots))
        mapping = {
            name: parts[1:] if parts and parts[0] == root else parts
            for name, parts in mapping.items()
        }

    return mapping


def is_sensitive_detail(detail: dict[str, object]) -> bool:
    for collection in detail.get("collections") or []:
        if not isinstance(collection, dict):
            continue
        for segment in collection.get("path") or []:
            if str(segment).strip().lower() in SENSITIVE_COLLECTION_SEGMENTS:
                return True

    haystacks = [
        detail.get("title"),
        detail.get("filename"),
        detail.get("markdownFulltextFileName"),
        detail.get("searchableText"),
    ]
    joined = " ".join(str(value).lower() for value in haystacks if value)
    return any(keyword in joined for keyword in SENSITIVE_KEYWORDS)


def load_filtered_structure(
    structure_path: Path,
) -> tuple[dict[str, list[str]], set[str], dict[str, object]]:
    data = json.loads(structure_path.read_text(encoding="utf-8"))
    fallback_paths: dict[str, list[str]] = {}
    excluded_names: set[str] = set()
    filtered_details: dict[str, object] = {}

    for key, detail in data.get("attachmentDetails", {}).items():
        if not isinstance(detail, dict):
            continue

        name = detail.get("markdownFulltextFileName")
        if is_sensitive_detail(detail):
            if name:
                excluded_names.add(str(name))
            continue

        filtered_details[key] = detail

        if not name or name in fallback_paths:
            continue

        collections = detail.get("collections") or []
        if collections:
            fallback_paths[str(name)] = list(collections[0].get("path") or [])
        else:
            fallback_paths[str(name)] = []

    data["attachmentDetails"] = filtered_details
    data["attachments"] = [
        key for key in data.get("attachments", []) if key in filtered_details
    ]
    data["attachmentCount"] = len(data["attachments"])

    if isinstance(data.get("stats"), dict):
        stats = data["stats"]
        stats["totalAttachments"] = len(filtered_details)
        stats["pdfAttachments"] = sum(
            1
            for detail in filtered_details.values()
            if str(detail.get("filename", "")).lower().endswith(".pdf")
        )
        stats["indexedCount"] = sum(
            1 for detail in filtered_details.values() if detail.get("indexed")
        )

    return fallback_paths, excluded_names, data


def render_hierarchy(entries: list[list[str]]) -> str:
    tree: dict[str, dict[str, object] | None] = {}

    for entry in entries:
        node = tree
        for part in entry[:-1]:
            child = node.setdefault(part, {})
            if child is None:
                child = {}
                node[part] = child
            node = child
        node.setdefault(entry[-1], None)

    lines: list[str] = []

    def walk(node: dict[str, dict[str, object] | None], prefix: str) -> None:
        items = list(node.items())
        for index, (name, child) in enumerate(items):
            is_last = index == len(items) - 1
            connector = "└── " if is_last else "├── "
            if child is None:
                lines.append(f"{prefix}{connector}{name}")
                continue

            lines.append(f"{prefix}{connector}{name}/")
            walk(child, prefix + ("    " if is_last else "│   "))

    if len(tree) == 1:
        root_name, root_child = next(iter(tree.items()))
        lines.append(f"{root_name}/")
        if isinstance(root_child, dict):
            walk(root_child, "")
    else:
        walk(tree, "")

    return "\n".join(lines) + "\n"


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

    hierarchy_entries = parse_hierarchy_entries(hierarchy_path)
    fallback_paths, excluded_names, filtered_structure = load_filtered_structure(
        structure_path
    )
    filtered_entries = [
        entry for entry in hierarchy_entries if entry[-1] not in excluded_names
    ]
    hierarchy_paths = build_hierarchy_mapping(filtered_entries)

    expected_paths: dict[Path, Path] = {}
    uncategorized = 0

    for src_file in sorted(src_docs.iterdir()):
        if not src_file.is_file():
            continue

        if src_file.name in excluded_names:
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
    hierarchy_text = render_hierarchy(filtered_entries)
    if write_text_if_changed(hierarchy_text, dest_root / "library_hierarchy.txt"):
        metadata_copied += 1
    structure_text = json.dumps(filtered_structure, ensure_ascii=False, indent=2) + "\n"
    if write_text_if_changed(structure_text, dest_root / "structure.json"):
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
