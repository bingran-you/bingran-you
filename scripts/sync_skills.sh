#!/bin/zsh

set -euo pipefail

SCRIPT_DIR="$(cd -- "$(dirname -- "$0")" && pwd -P)"
REPO_ROOT="$(cd -- "$SCRIPT_DIR/.." && pwd -P)"
MANIFEST_PATH="$REPO_ROOT/repo-skills/manifest.txt"

SUBMODULE_PATHS=(
  "trusted-external-repos/skills"
  "trusted-external-repos/gstack"
  "trusted-external-repos/skillsbench"
)

ENTRYPOINT_DIRS=(
  "$REPO_ROOT/.agents/skills"
  "$REPO_ROOT/.claude/skills"
)

typeset -a LINK_NAMES=()
typeset -A LINK_TARGETS=()
typeset -A LINK_SOURCES=()

usage() {
  cat <<EOF
Mirror the managed skill list into both Claude Code and Codex entrypoints.

Usage:
  $0 status
  $0 list
  $0 init
  $0 refresh
  $0 update

Commands:
  status   Show tracked submodule commits and entrypoint counts.
  list     Show the resolved skill names and their source paths.
  init     Initialize required submodules, then rebuild the entrypoints.
  refresh  Rebuild the entrypoints from repo-skills/manifest.txt.
  update   Fast-forward managed submodules to upstream main, then rebuild.
EOF
}

trim_line() {
  local value="$1"
  value="${value%%#*}"
  value="${value#"${value%%[![:space:]]*}"}"
  value="${value%"${value##*[![:space:]]}"}"
  print -r -- "$value"
}

require_directory() {
  local repo_path="$1"
  local absolute_path="$REPO_ROOT/$repo_path"

  if [[ ! -d "$absolute_path" ]]; then
    echo "Missing directory: $repo_path" >&2
    exit 1
  fi
}

require_skill_directory() {
  local repo_path="$1"
  local absolute_path="$REPO_ROOT/$repo_path"

  require_directory "$repo_path"

  if [[ ! -f "$absolute_path/SKILL.md" ]]; then
    echo "Missing SKILL.md in: $repo_path" >&2
    exit 1
  fi
}

register_skill() {
  local skill_name="$1"
  local repo_path="$2"
  local source_label="$3"

  if [[ -n "${LINK_SOURCES[$skill_name]-}" ]]; then
    echo "Skill name conflict: '$skill_name' appears in both '${LINK_SOURCES[$skill_name]}' and '$source_label'." >&2
    exit 1
  fi

  LINK_NAMES+=("$skill_name")
  LINK_TARGETS[$skill_name]="../../$repo_path"
  LINK_SOURCES[$skill_name]="$source_label"
}

load_manifest() {
  local raw_line=""
  local line=""
  local command=""
  local arg1=""
  local arg2=""
  local extra=""

  [[ -f "$MANIFEST_PATH" ]] || {
    echo "Missing manifest: $MANIFEST_PATH" >&2
    exit 1
  }

  LINK_NAMES=()
  LINK_TARGETS=()
  LINK_SOURCES=()

  while IFS= read -r raw_line || [[ -n "$raw_line" ]]; do
    line="$(trim_line "$raw_line")"
    [[ -z "$line" ]] && continue

    command=""
    arg1=""
    arg2=""
    extra=""
    read -r command arg1 arg2 extra <<<"$line"

    if [[ -n "$extra" ]]; then
      echo "Too many fields in manifest line: $line" >&2
      exit 1
    fi

    [[ "$command" == "link" && -n "$arg1" && -n "$arg2" ]] || {
      echo "Invalid manifest line: $line" >&2
      exit 1
    }

    require_skill_directory "$arg2"
    register_skill "$arg1" "$arg2" "$line"
  done < "$MANIFEST_PATH"
}

rebuild_entrypoints() {
  local entrypoint_dir=""
  local skill_name=""

  load_manifest

  for entrypoint_dir in "${ENTRYPOINT_DIRS[@]}"; do
    rm -rf "$entrypoint_dir"
    mkdir -p "$entrypoint_dir"

    for skill_name in ${(on)LINK_NAMES}; do
      ln -s "${LINK_TARGETS[$skill_name]}" "$entrypoint_dir/$skill_name"
    done
  done
}

show_entrypoint_status() {
  local entrypoint_path="$1"

  if [[ -d "$entrypoint_path" ]]; then
    local count
    count="$(find "$entrypoint_path" -maxdepth 1 -mindepth 1 | wc -l | tr -d ' ')"
    echo "$entrypoint_path ($count mirrored skills)"
  else
    echo "$entrypoint_path (missing)"
  fi
}

show_status() {
  git -C "$REPO_ROOT" submodule status -- "${SUBMODULE_PATHS[@]}"
  show_entrypoint_status "$REPO_ROOT/.agents/skills"
  show_entrypoint_status "$REPO_ROOT/.claude/skills"
}

show_resolved_list() {
  local skill_name=""

  load_manifest

  for skill_name in ${(on)LINK_NAMES}; do
    echo "$skill_name -> ${LINK_TARGETS[$skill_name]}"
  done
}

case "${1:-status}" in
  status)
    show_status
    ;;
  list)
    show_resolved_list
    ;;
  init)
    git -C "$REPO_ROOT" submodule update --init --recursive "${SUBMODULE_PATHS[@]}"
    rebuild_entrypoints
    show_status
    ;;
  refresh)
    rebuild_entrypoints
    show_status
    ;;
  update)
    git -C "$REPO_ROOT" submodule update --init --remote "${SUBMODULE_PATHS[@]}"
    rebuild_entrypoints
    show_status
    ;;
  --help|-h|help)
    usage
    ;;
  *)
    echo "Unknown command: $1" >&2
    usage >&2
    exit 1
    ;;
esac
