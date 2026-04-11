#!/bin/zsh

set -euo pipefail

SCRIPT_DIR="$(cd -- "$(dirname -- "$0")" && pwd)"
REPO_ROOT="$(cd -- "$SCRIPT_DIR/.." && pwd)"
SRC_ROOT="${DEEPTUTOR_DB_ROOT:-/Users/bingran_you/DeepTutor/DeepTutorDataBase}"
DEST_ROOT="${DEEPTUTOR_REPO_PAPERS_ROOT:-$REPO_ROOT/papers}"
LAYOUT_SYNC_SCRIPT="$SCRIPT_DIR/sync_papers_layout.py"

if [[ ! -d "$SRC_ROOT" ]]; then
  echo "Missing source root: $SRC_ROOT" >&2
  exit 1
fi

/bin/mkdir -p "$DEST_ROOT"
/usr/bin/python3 "$LAYOUT_SYNC_SCRIPT" "$SRC_ROOT" "$DEST_ROOT"
