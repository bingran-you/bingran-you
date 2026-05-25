# Label spec — colors, transitions, automation

Companion to [`../SKILL.md`](../SKILL.md). Read this when you need: exact hex colors, the rationale for a specific transition rule, the GitHub Actions automation, or the bootstrap script's data model.

## Color palette (single source of truth)

The script and the SKILL.md table both pull from this list.

```
P0                              #b60205   deep red       blocks release / security
P1                              #d93f0b   burnt orange   urgent debt
P2                              #fbca04   amber          hygiene / anti-pattern

area:*                          #1d76db   blue           — same color for every area —

status:triage                   #bfdadc   pale teal      new, awaiting triage
status:ready                    #c2e0c6   pale green     ready to claim
status:in-progress              #f9d0c4   peach          someone is working
status:blocked                  #e99695   pale red       external dependency

review:pending                  #0366d6   bright blue    awaiting reviewer
review:in-progress              #fbca04   amber          reviewer engaged
review:changes-requested        #d93f0b   burnt orange   author's turn
review:approved                 #0e8a16   green          ready to merge

reproduced                      #fbca04   amber          independently verified
```

### Color rationale

- **Priority** uses saturated red → orange → yellow because they're the "urgent" signal — should pop in the issues list.
- **Area** is a single muted blue for every area — they're a *category* axis, not an urgency axis, so they shouldn't compete with priority for attention.
- **Status** uses pastel/desaturated colors — same hue family as priority (so the connection is visible) but visually demoted so they don't dominate when stacked with a P label.
- **Review** mirrors GitHub's native review-state colors where possible (blue for pending, green for approved, orange for changes requested).
- **`reproduced`** shares the P2 amber on purpose — it's a hygiene flag, same visual weight as a P2.

## Transition rules

### Status (`status:*`)

```
status:triage  →  status:ready          (after P + area added)
status:ready   →  status:in-progress    (after assignee added)
status:in-progress  →  status:blocked   (manual, with comment)
status:blocked  →  status:in-progress   (when unblocked)
status:in-progress  →  (issue closed)   (when linked PR merges)
```

`status:ready` ↔ `status:in-progress` flips when an assignee is added/removed.

### Review (`review:*`)

```
(PR opened, ready-for-review)  →  review:pending
review:pending  →  review:in-progress         (first COMMENTED review)
review:pending  →  review:changes-requested   (first CHANGES_REQUESTED)
review:pending  →  review:approved            (first APPROVED)
review:in-progress  →  any                    (subsequent review submitted)
review:changes-requested  →  review:in-progress   (author pushes new commit)
review:approved  →  (PR merged / closed)
```

If multiple reviewers, take the *minimum* state across them (changes-requested wins over approved).

## Automation

Drop the following into `.github/workflows/label-sync.yml` in any repo using this label system. The Action assumes the full label set has been bootstrapped already (run `scripts/bootstrap-labels.sh` first).

```yaml
name: Label sync

on:
  issues:
    types: [opened, assigned, unassigned, labeled, unlabeled]
  pull_request:
    types: [opened, ready_for_review, synchronize]
  pull_request_review:
    types: [submitted]

permissions:
  issues: write
  pull-requests: write

jobs:
  status:
    if: github.event_name == 'issues'
    runs-on: ubuntu-latest
    steps:
      - name: Manage status labels
        uses: actions/github-script@v7
        with:
          script: |
            const issue = context.payload.issue;
            const labels = new Set(issue.labels.map(l => l.name));
            const isStatus = (s) => labels.has(`status:${s}`);
            const setStatus = async (s) => {
              for (const k of ['triage', 'ready', 'in-progress', 'blocked']) {
                if (k !== s && isStatus(k)) {
                  await github.rest.issues.removeLabel({
                    ...context.repo, issue_number: issue.number,
                    name: `status:${k}`
                  }).catch(() => {});
                }
              }
              await github.rest.issues.addLabels({
                ...context.repo, issue_number: issue.number,
                labels: [`status:${s}`]
              }).catch(() => {});
            };

            const hasPriority = ['P0','P1','P2'].some(p => labels.has(p));
            const hasArea = [...labels].some(l => l.startsWith('area:'));
            const triaged = hasPriority && hasArea;
            const assigned = issue.assignees && issue.assignees.length > 0;
            const blocked = isStatus('blocked');

            if (blocked) return;                       // keep manual
            if (!triaged) return setStatus('triage');
            if (assigned)  return setStatus('in-progress');
            return setStatus('ready');

  review:
    if: github.event_name == 'pull_request_review' || github.event_name == 'pull_request'
    runs-on: ubuntu-latest
    steps:
      - name: Manage review labels
        uses: actions/github-script@v7
        with:
          script: |
            const pr = context.payload.pull_request;
            if (!pr || pr.draft) return;

            const reviews = await github.rest.pulls.listReviews({
              ...context.repo, pull_number: pr.number
            });
            const states = reviews.data.map(r => r.state);

            let target = 'pending';
            if (states.includes('CHANGES_REQUESTED')) target = 'changes-requested';
            else if (states.includes('APPROVED'))     target = 'approved';
            else if (states.includes('COMMENTED'))    target = 'in-progress';

            for (const k of ['pending','in-progress','changes-requested','approved']) {
              if (k !== target) {
                await github.rest.issues.removeLabel({
                  ...context.repo, issue_number: pr.number,
                  name: `review:${k}`
                }).catch(() => {});
              }
            }
            await github.rest.issues.addLabels({
              ...context.repo, issue_number: pr.number,
              labels: [`review:${target}`]
            }).catch(() => {});
```

## Bootstrap script data model

`scripts/bootstrap-labels.sh` defines labels as `(name, color, description)` triples. To add or remove labels, edit the arrays at the top of that file; everything below the `# === labels ===` line is pure plumbing.

`AREAS` is the one array meant to be project-specific. Default is the benchflow set; for a new project, replace with whatever 4–6 areas have ≥3 issues each.

## Open questions / known limits

- **`status:blocked` isn't auto-managed.** Reason: "blocked" requires *why*, and the workflow can't guess. Always pair with a comment.
- **Multi-reviewer PRs.** The current rule "minimum state wins" may not match every team's flow. Some teams want "approved iff *every* reviewer approved" — patch the Action's `target` logic if so.
- **No `lgtm` + `approved` two-stage.** Kubernetes splits these; this system collapses to one. If you need two-stage approval, add `review:lgtm` between `in-progress` and `approved`.
- **`reproduced` is presence-only.** No timestamp, no who-reproduced — that info lives in the comment that added the label. Good enough; if you want richer reproduction tracking, use a separate "verification" issue type.

## Reading order if you're new to this

1. [`../SKILL.md`](../SKILL.md) — the high-level mental model.
2. This file's "Transition rules" section — for the issue/PR lifecycle.
3. This file's "Automation" section — only if you want to wire up the GitHub Action.
4. [`../scripts/bootstrap-labels.sh`](../scripts/bootstrap-labels.sh) — read once to confirm the labels you'll create.

You should not need to read everything in this file unless you're customizing the system.
