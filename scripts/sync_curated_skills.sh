#!/bin/zsh

SCRIPT_DIR="$(cd -- "$(dirname -- "$0")" && pwd -P)"
exec "$SCRIPT_DIR/sync_external_skills.sh" "$@"
