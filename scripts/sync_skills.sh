#!/bin/zsh

set -euo pipefail

SCRIPT_DIR="$(cd -- "$(dirname -- "$0")" && pwd -P)"
REPO_ROOT="$(cd -- "$SCRIPT_DIR/.." && pwd -P)"

SOURCE_ROOTS=(
  "repo-skills"
  "trusted-external-repos/open-design/skills"
  "trusted-external-repos/marketingskills/skills"
  "trusted-external-repos/gstack"
  "trusted-external-repos/gstack/browser-skills"
  "trusted-external-repos/gstack/openclaw/skills"
)

MANAGED_SUBMODULES=(
  "trusted-external-repos/open-design"
  "trusted-external-repos/marketingskills"
  "trusted-external-repos/gstack"
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
Mirror auto-discovered workspace skills into both Claude Code and Codex entrypoints.

Usage:
  $0 status
  $0 list
  $0 init
  $0 refresh
  $0 update

Commands:
  status   Show tracked submodule commits and entrypoint counts.
  list     Show the resolved skill names and their source paths.
  init     Initialize managed submodules, then rebuild the entrypoints.
  refresh  Rebuild the entrypoints from the auto-discovered source roots.
  update   Fast-forward managed submodules, then rebuild the entrypoints.
EOF
}

require_source_root() {
  local repo_path="$1"
  local absolute_path="$REPO_ROOT/$repo_path"

  if [[ ! -d "$absolute_path" ]]; then
    echo "Missing source root: $repo_path" >&2
    echo "Run '$0 init' to initialize managed submodules and rebuild the entrypoints." >&2
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

is_valid_skill_name() {
  local skill_name="$1"
  [[ "$skill_name" =~ '^[A-Za-z0-9._:-]+$' ]]
}

discover_skills() {
  local source_root=""
  local source_root_path=""
  local skill_dir=""
  local skill_name=""
  local repo_path=""

  LINK_NAMES=()
  LINK_TARGETS=()
  LINK_SOURCES=()

  for source_root in "${SOURCE_ROOTS[@]}"; do
    require_source_root "$source_root"
    source_root_path="$REPO_ROOT/$source_root"

    if [[ -f "$source_root_path/SKILL.md" ]]; then
      skill_name="${source_root_path:t}"
      if ! is_valid_skill_name "$skill_name"; then
        echo "Skipping skill with unsupported name '$skill_name' from '$source_root'." >&2
        echo "Rename the directory to use only letters, numbers, dot, underscore, colon, or hyphen." >&2
      else
        register_skill "$skill_name" "$source_root" "$source_root"
      fi
    fi

    for skill_dir in "$source_root_path"/*(N); do
      [[ -d "$skill_dir" ]] || continue
      [[ -f "$skill_dir/SKILL.md" ]] || continue

      skill_name="${skill_dir:t}"
      if ! is_valid_skill_name "$skill_name"; then
        echo "Skipping skill with unsupported name '$skill_name' from '$source_root'." >&2
        echo "Rename the directory to use only letters, numbers, dot, underscore, colon, or hyphen." >&2
        continue
      fi

      repo_path="${skill_dir#$REPO_ROOT/}"
      register_skill "$skill_name" "$repo_path" "$source_root"
    done
  done
}

rebuild_entrypoints() {
  local entrypoint_dir=""
  local skill_name=""

  discover_skills

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

show_source_status() {
  local source_root=""
  local source_root_path=""
  local skill_dir=""
  local count=0
  local invalid_count=0
  local skill_name=""

  for source_root in "${SOURCE_ROOTS[@]}"; do
    source_root_path="$REPO_ROOT/$source_root"

    if [[ ! -d "$source_root_path" ]]; then
      echo "$source_root (missing)"
      continue
    fi

    count=0
    invalid_count=0
    if [[ -f "$source_root_path/SKILL.md" ]]; then
      skill_name="${source_root_path:t}"
      if ! is_valid_skill_name "$skill_name"; then
        invalid_count=$((invalid_count + 1))
      else
        count=$((count + 1))
      fi
    fi

    for skill_dir in "$source_root_path"/*(N); do
      [[ -d "$skill_dir" ]] || continue
      [[ -f "$skill_dir/SKILL.md" ]] || continue

      skill_name="${skill_dir:t}"
      if ! is_valid_skill_name "$skill_name"; then
        invalid_count=$((invalid_count + 1))
        continue
      fi

      count=$((count + 1))
    done

    if (( invalid_count > 0 )); then
      echo "$source_root ($count source skills, $invalid_count skipped invalid names)"
    else
      echo "$source_root ($count source skills)"
    fi
  done
}

show_status() {
  git -C "$REPO_ROOT" submodule status -- "${MANAGED_SUBMODULES[@]}"
  show_source_status
  show_entrypoint_status "$REPO_ROOT/.agents/skills"
  show_entrypoint_status "$REPO_ROOT/.claude/skills"
}

show_resolved_list() {
  local skill_name=""

  discover_skills

  for skill_name in ${(on)LINK_NAMES}; do
    echo "$skill_name -> ${LINK_TARGETS[$skill_name]} (${LINK_SOURCES[$skill_name]})"
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
    git -C "$REPO_ROOT" submodule update --init --recursive "${MANAGED_SUBMODULES[@]}"
    rebuild_entrypoints
    show_status
    ;;
  refresh)
    rebuild_entrypoints
    show_status
    ;;
  update)
    git -C "$REPO_ROOT" submodule update --init --remote "${MANAGED_SUBMODULES[@]}"
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
