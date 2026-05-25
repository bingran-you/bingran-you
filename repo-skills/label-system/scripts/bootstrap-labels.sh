#!/usr/bin/env bash
#
# bootstrap-labels.sh — create the label-system label set in a GitHub repo.
#
# Usage:   scripts/bootstrap-labels.sh <owner>/<repo>
# Idempotent: existing labels are skipped (printed as SKIP).
#
# Edit the AREAS array to customize areas for a non-benchflow repo.

set -euo pipefail

if [[ $# -lt 1 ]]; then
  echo "usage: $0 <owner>/<repo>" >&2
  echo "example: $0 benchflow-ai/benchflow" >&2
  exit 1
fi

REPO="$1"

# === labels === — edit AREAS for project-specific areas; rest is universal.

AREAS=(
  "rollout"
  "eval"
  "diagnostics"
  "sandbox"
)

# Format: name|color|description
LABELS=(
  # Priority
  "P0|b60205|Blocks the next release, or security incident (secret leak / data loss / headline regression)."
  "P1|d93f0b|Important debt — must fix soon, but does not block the current release."
  "P2|fbca04|Anti-pattern / type safety / docs precision / minor schema drift / non-deterministic but contained."

  # Status (issue-only)
  "status:triage|bfdadc|New, awaiting priority + area assignment."
  "status:ready|c2e0c6|Triaged, unassigned, available to claim."
  "status:in-progress|f9d0c4|Has assignee or linked draft PR."
  "status:blocked|e99695|Waiting on external dependency. Add a comment explaining why."

  # Review (PR-only)
  "review:pending|0366d6|PR is ready-for-review, no reviewer engagement yet."
  "review:in-progress|fbca04|Reviewer left comments without approving / requesting changes."
  "review:changes-requested|d93f0b|Author needs to push more commits before this can merge."
  "review:approved|0e8a16|Reviewer approved; awaiting merge / CI / second review."

  # Reproduced
  "reproduced|fbca04|At least one person other than the reporter has independently reproduced this bug with evidence."
)

# Append area labels.
for area in "${AREAS[@]}"; do
  LABELS+=("area:${area}|1d76db|Issue / PR lives primarily in the \"${area}\" subsystem.")
done

# === plumbing ===

create_one() {
  local name="$1" color="$2" description="$3"
  if gh label list --repo "$REPO" --json name --jq '.[].name' | grep -Fxq "$name"; then
    printf "  SKIP   %s (already exists)\n" "$name"
    return 0
  fi
  if gh label create "$name" \
       --repo "$REPO" \
       --color "$color" \
       --description "$description" \
       >/dev/null 2>&1; then
    printf "  OK     %s\n" "$name"
  else
    printf "  FAIL   %s (gh label create returned non-zero)\n" "$name" >&2
    return 1
  fi
}

echo "Bootstrapping labels in ${REPO}…"
echo

failures=0
for spec in "${LABELS[@]}"; do
  IFS='|' read -r name color description <<<"$spec"
  create_one "$name" "$color" "$description" || failures=$((failures + 1))
done

echo
if (( failures > 0 )); then
  echo "Done with ${failures} failure(s). Re-run after addressing the FAIL lines above." >&2
  exit 1
fi
echo "Done. ${#LABELS[@]} label(s) processed."
