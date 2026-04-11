#!/bin/zsh

set -euo pipefail

SCRIPT_DIR="$(cd -- "$(dirname -- "$0")" && pwd)"
SESSION_NAME="deeptutor-papers-sync"
TMUX_BIN="$(command -v tmux)"
LOOP_SCRIPT="$SCRIPT_DIR/run_deeptutor_papers_sync_loop.sh"
SYNC_SCRIPT="$SCRIPT_DIR/sync_deeptutor_papers.sh"
OUT_LOG="$HOME/Library/Logs/com.bingran.deeptutor-papers-sync.log"
ERR_LOG="$HOME/Library/Logs/com.bingran.deeptutor-papers-sync.err"
DEFAULT_INTERVAL=60

has_session() {
  "$TMUX_BIN" has-session -t "$SESSION_NAME" 2>/dev/null
}

start_session() {
  local interval="${1:-$DEFAULT_INTERVAL}"

  if has_session; then
    echo "running"
    exit 0
  fi

  /bin/mkdir -p "$HOME/Library/Logs"
  "$TMUX_BIN" new-session -d -s "$SESSION_NAME" "/bin/zsh $LOOP_SCRIPT $interval"
  echo "started"
}

stop_session() {
  if ! has_session; then
    echo "not running"
    exit 0
  fi

  "$TMUX_BIN" kill-session -t "$SESSION_NAME"
  echo "stopped"
}

case "${1:-status}" in
  sync)
    /bin/zsh "$SYNC_SCRIPT"
    ;;
  start)
    start_session "${2:-$DEFAULT_INTERVAL}"
    ;;
  stop)
    stop_session
    ;;
  status)
    if has_session; then
      echo "running"
      "$TMUX_BIN" list-sessions | /usr/bin/grep "$SESSION_NAME"
    else
      echo "not running"
    fi
    ;;
  logs)
    echo "$OUT_LOG"
    echo "$ERR_LOG"
    ;;
  *)
    echo "usage: $0 {sync|start|stop|status|logs}" >&2
    exit 1
    ;;
esac
