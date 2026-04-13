#!/bin/zsh

set -euo pipefail

SCRIPT_DIR="$(cd -- "$(dirname -- "$0")" && pwd -P)"
REPO_ROOT="$(cd -- "$SCRIPT_DIR/.." && pwd -P)"
SUBMODULE_PATH="trusted-external-repos/skills"

usage() {
  cat <<EOF
Manage the shared curated skills submodule used by Codex and Claude Code.

Usage:
  $0 status
  $0 init
  $0 update

Commands:
  status  Show the current submodule commit and both skill symlink targets.
  init    Initialize the submodule after cloning this repo.
  update  Move the submodule to the latest upstream main commit.

After running 'update', commit the submodule pointer change in this repo so the
new skills version syncs to GitHub and other machines.
EOF
}

show_symlink_status() {
  local path="$1"

  if [[ -L "$path" ]]; then
    echo "$path -> $(/usr/bin/readlink "$path")"
  elif [[ -e "$path" ]]; then
    echo "$path (exists but is not a symlink)"
  else
    echo "$path (missing)"
  fi
}

show_status() {
  git -C "$REPO_ROOT" submodule status -- "$SUBMODULE_PATH"
  show_symlink_status "$REPO_ROOT/.agents/skills"
  show_symlink_status "$REPO_ROOT/.claude/skills"
}

case "${1:-status}" in
  status)
    show_status
    ;;
  init)
    git -C "$REPO_ROOT" submodule update --init --recursive "$SUBMODULE_PATH"
    show_status
    ;;
  update)
    git -C "$REPO_ROOT" submodule update --init --remote "$SUBMODULE_PATH"
    show_status
    echo
    echo "Commit the updated $SUBMODULE_PATH pointer in this repo to share the new skills version."
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
