#!/usr/bin/env bash
# sync.sh - Run this BEFORE starting a local editing session.
# Triggers the GitHub Action that pulls latest Overleaf changes into GitHub,
# waits for it to finish, then fast-forwards your local clone.
#
# Requires: gh CLI installed and authenticated.

set -euo pipefail
cd "$(dirname "$0")"

WORKFLOW="pull-from-overleaf.yml"

echo "==> Triggering Overleaf -> GitHub pull workflow..."
gh workflow run "$WORKFLOW" --ref master >/dev/null

echo "==> Locating the new run..."
run_id=""
for _ in $(seq 1 20); do
  sleep 2
  candidate=$(gh run list --workflow="$WORKFLOW" --event=workflow_dispatch --limit 1 --json databaseId,status \
    | python3 -c 'import json,sys; runs=json.load(sys.stdin); print(runs[0]["databaseId"] if runs and runs[0]["status"]!="completed" else "")')
  if [ -n "$candidate" ]; then
    run_id="$candidate"
    break
  fi
done

if [ -z "$run_id" ]; then
  echo "Couldn't find an in-progress run; checking the latest one."
  run_id=$(gh run list --workflow="$WORKFLOW" --limit 1 --json databaseId \
    | python3 -c 'import json,sys; print(json.load(sys.stdin)[0]["databaseId"])')
fi

echo "==> Watching run $run_id..."
if ! gh run watch "$run_id" --exit-status; then
  echo
  echo "Workflow failed - likely cause: GitHub and Overleaf have diverged."
  echo "Inspect:  gh run view $run_id --log-failed"
  echo "Resolve locally per the steps printed in the failed log."
  echo "Skipping local pull."
  exit 1
fi

echo "==> Fast-forwarding local clone..."
git fetch github master
git pull github master --ff-only

echo
echo "Synced. You're good to start editing."
