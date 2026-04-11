#!/bin/zsh

set -euo pipefail

SCRIPT_DIR="$(cd -- "$(dirname -- "$0")" && pwd)"
SYNC_SCRIPT="$SCRIPT_DIR/sync_deeptutor_papers.sh"
OUT_LOG="$HOME/Library/Logs/com.bingran.deeptutor-papers-sync.log"
ERR_LOG="$HOME/Library/Logs/com.bingran.deeptutor-papers-sync.err"
INTERVAL="${1:-60}"

/bin/mkdir -p "$HOME/Library/Logs"

while true; do
  if /bin/zsh "$SYNC_SCRIPT" >> "$OUT_LOG" 2>> "$ERR_LOG"; then
    printf '[%s] sync ok\n' "$(/bin/date '+%Y-%m-%d %H:%M:%S')" >> "$OUT_LOG"
  else
    printf '[%s] sync failed\n' "$(/bin/date '+%Y-%m-%d %H:%M:%S')" >> "$ERR_LOG"
  fi

  /bin/sleep "$INTERVAL"
done
