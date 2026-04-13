#!/bin/zsh

set -euo pipefail

SCRIPT_DIR="$(cd -- "$(dirname -- "$0")" && pwd -P)"
REPO_ROOT="$(cd -- "$SCRIPT_DIR/.." && pwd -P)"

CURATED_SUBMODULE_PATH="trusted-external-repos/skills"
CURATED_SOURCE_PATH="$REPO_ROOT/$CURATED_SUBMODULE_PATH/skills/.curated"
CURATED_LINK_PREFIX="../../$CURATED_SUBMODULE_PATH/skills/.curated"

OMX_SUBMODULE_PATH="trusted-external-repos/oh-my-codex"
OMX_SOURCE_PATH="$REPO_ROOT/$OMX_SUBMODULE_PATH/skills"
OMX_LINK_PREFIX="../../$OMX_SUBMODULE_PATH/skills"

ENTRYPOINT_DIRS=(
  "$REPO_ROOT/.agents/skills"
  "$REPO_ROOT/.claude/skills"
)

typeset -a LINK_NAMES=()
typeset -A LINK_TARGETS=()
typeset -A LINK_SOURCES=()

usage() {
  cat <<EOF
Manage the external skills mirrored into Codex and Claude Code entrypoints.

Usage:
  $0 status
  $0 init
  $0 refresh
  $0 update

Commands:
  status   Show both submodule commits and the linked skill counts in each entrypoint.
  init     Initialize the external skill submodules and rebuild the entrypoint directories.
  refresh  Rebuild the entrypoint directories from the current submodule contents.
  update   Move both external skill submodules to the latest upstream main commit, then rebuild.

After running 'update', commit the updated submodule pointer(s) and regenerated
skill entrypoint links in this repo so the new skills sync to GitHub and other machines.
EOF
}

require_source_dir() {
  local source_path="$1"

  if [[ ! -d "$source_path" ]]; then
    echo "Missing skill source directory: $source_path" >&2
    echo "Run '$0 init' first." >&2
    exit 1
  fi
}

collect_skills() {
  local source_label="$1"
  local source_path="$2"
  local link_prefix="$3"
  local skill_dir=""
  local skill_name=""

  require_source_dir "$source_path"

  for skill_dir in "$source_path"/*(/N); do
    [[ -f "$skill_dir/SKILL.md" ]] || continue
    skill_name="${skill_dir:t}"

    if [[ -n "${LINK_SOURCES[$skill_name]-}" ]]; then
      echo "Skill name conflict: '$skill_name' appears in both '${LINK_SOURCES[$skill_name]}' and '$source_label'." >&2
      exit 1
    fi

    LINK_NAMES+=("$skill_name")
    LINK_TARGETS[$skill_name]="$link_prefix/$skill_name"
    LINK_SOURCES[$skill_name]="$source_label"
  done
}

rebuild_entrypoints() {
  local entrypoint_dir=""
  local skill_name=""

  LINK_NAMES=()
  LINK_TARGETS=()
  LINK_SOURCES=()

  collect_skills "curated" "$CURATED_SOURCE_PATH" "$CURATED_LINK_PREFIX"
  collect_skills "oh-my-codex" "$OMX_SOURCE_PATH" "$OMX_LINK_PREFIX"

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
    count="$(find "$entrypoint_path" -maxdepth 1 -mindepth 1 -type l | wc -l | tr -d ' ')"
    echo "$entrypoint_path ($count linked skills)"
  elif [[ -L "$entrypoint_path" ]]; then
    echo "$entrypoint_path -> $(/usr/bin/readlink "$entrypoint_path")"
  elif [[ -e "$entrypoint_path" ]]; then
    echo "$entrypoint_path (exists but is not a managed directory)"
  else
    echo "$entrypoint_path (missing)"
  fi
}

show_status() {
  git -C "$REPO_ROOT" submodule status -- "$CURATED_SUBMODULE_PATH" "$OMX_SUBMODULE_PATH"
  show_entrypoint_status "$REPO_ROOT/.agents/skills"
  show_entrypoint_status "$REPO_ROOT/.claude/skills"
}

case "${1:-status}" in
  status)
    show_status
    ;;
  init)
    git -C "$REPO_ROOT" submodule update --init --recursive "$CURATED_SUBMODULE_PATH" "$OMX_SUBMODULE_PATH"
    rebuild_entrypoints
    show_status
    ;;
  refresh)
    rebuild_entrypoints
    show_status
    ;;
  update)
    git -C "$REPO_ROOT" submodule update --init --remote "$CURATED_SUBMODULE_PATH" "$OMX_SUBMODULE_PATH"
    rebuild_entrypoints
    show_status
    echo
    echo "Commit the updated external skill submodule pointer(s) and link changes in this repo to share the new skill set."
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
