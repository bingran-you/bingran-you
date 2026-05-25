---
name: label-system
description: A minimal, opinionated GitHub label taxonomy for OSS / internal projects covering priority, area, issue status, PR review state, and independent reproduction. Use when setting up labels for a new repo, when triaging a backlog, when asked "how should we label issues", when reviewing whether existing labels are coherent, or when applying labels to a batch of open issues. Five orthogonal axes, ~16 labels total, every label answers a specific filter query — designed against the open-source convention of `S-waiting-on-*` (Rust) and two-stage approval (Kubernetes), but kept small enough for a solo / small-team repo to actually maintain. Includes a bootstrap script (`scripts/bootstrap-labels.sh`) that creates the full label set in a target GitHub repo with one `gh` call per label.
author: Bingran You (@bingran-you)
license: MIT
---

# Label System — five-axis GitHub label taxonomy

A small, opinionated label vocabulary for GitHub issues and PRs. Every label has to **answer a query**; otherwise it's noise and gets cut. Tested against benchflow's v0.5 backlog (31 open issues, ~3.5 labels/issue average).

## When to use this skill

- Setting up labels for a new GitHub repo.
- Triaging an issue backlog where labels have drifted into "kitchen sink" territory.
- Helping a user audit whether their existing label set has clear, mutually-exclusive meanings.
- Applying labels in bulk to many issues at once.
- Designing a labeling convention that other contributors can reason about without a long Notion doc.

If the user just asks "make me a label", you do not need this skill — `gh label create` is one line.

## Five orthogonal axes (~16 labels)

Each axis answers exactly one question. **Don't add a sixth axis unless you can name the query it serves.**

| Axis | Question it answers | Cardinality |
|---|---|---|
| **Priority** | "Should I work on this now?" | 1 of 3 (`P0` / `P1` / `P2`) |
| **Area** | "Which part of the codebase?" | 1–2 of 4–8 (`area:*`) |
| **Issue status** | "Where is this in its lifecycle?" | 1 of 4 (`status:*`) — issue only |
| **PR review** | "Where is this in code review?" | 1 of 4 (`review:*`) — PR only |
| **Reproduced** | "Has anyone else confirmed this is real?" | 0 or 1 (`reproduced`) — bug only |

GitHub native fields handle the rest:
- `assignee` → who's on it (no `status:claimed` label needed)
- linked PR → in-progress / in-review (no duplicate label)
- `closed` → done (no `status:done` label)

## The full label spec

See [`references/label-spec.md`](references/label-spec.md) for hex colors, naming rationale, transition rules, and edge cases. The short version is reproduced inline below.

### 🔥 Priority (`P0` / `P1` / `P2`) — required, exactly one

| Label | Color | Meaning |
|---|---|---|
| `P0` | 🔴 `#b60205` | Blocks the next release, OR security incident (secret leak / data loss / headline regression). |
| `P1` | 🟠 `#d93f0b` | Important debt — must fix soon, but doesn't block the current release. Schema contracts, user-core paths, recurring footguns. |
| `P2` | 🟡 `#fbca04` | Anti-pattern / type safety / docs precision / minor schema drift / non-deterministic but contained. |

> No `P3`. Anything below `P2` should be closed `wontfix` or left unlabeled in the backlog. Three tiers is the cognitive ceiling for actionable triage.

### 🗺️ Area (`area:*`) — required, 1–2

Project-specific. The 4 buckets below are the benchflow flavor; adapt per project. **Rule of thumb:** an area earns a label when ≥3 issues are likely to land in it. Below 3, leave it unlabeled and rely on the title.

| Label | Color | Coverage (benchflow example) |
|---|---|---|
| `area:rollout` | 🔵 `#1d76db` | rollout orchestration + artifacts (`result.json`, `trajectory/*`, `agent/*`, `verifier/*`). |
| `area:eval` | 🔵 `#1d76db` | top-level eval orchestration + `summary.json` + resume/dedup. |
| `area:diagnostics` | 🔵 `#1d76db` | structured error diagnostics + classifier + redaction. |
| `area:sandbox` | 🔵 `#1d76db` | sandbox providers (daytona / docker / modal) + process / setup. |

Same blue for all areas — they form a visual cluster in the labels list.

### 🚦 Issue status (`status:*`) — required, exactly one, issue only

Lifecycle progression. Each transition has a clear trigger so this axis can be auto-managed by a GitHub Action (see [`references/label-spec.md`](references/label-spec.md) for the action).

| Label | Color | Meaning | Auto-transition trigger |
|---|---|---|---|
| `status:triage` | ⚪ `#bfdadc` | New, awaiting P + area assignment. | issue opened |
| `status:ready` | 🟢 `#c2e0c6` | Triaged, unassigned, available to claim. | P + area labels added, no assignee |
| `status:in-progress` | 🟠 `#f9d0c4` | Has assignee or linked draft PR. | assignee added OR linked PR opened |
| `status:blocked` | 🔴 `#e99695` | Waiting on external dependency. | manual (must comment why) |

> `closed` is *done* — no `status:done` label. Avoid `status:in-review`; the linked PR already says that.

### 👀 PR review (`review:*`) — required, exactly one, PR only

Maps to GitHub's native PR review states but exposes them as filterable labels so you can query across many PRs without clicking each one.

| Label | Color | Meaning | Native equivalent |
|---|---|---|---|
| `review:pending` | 🔵 `#0366d6` | PR is ready-for-review, no reviewer engagement yet. | PR open, no submitted reviews |
| `review:in-progress` | 🟡 `#fbca04` | Reviewer left comments without approving / requesting changes. | `state: COMMENTED` |
| `review:changes-requested` | 🟠 `#d93f0b` | Author needs to push more commits. | `state: CHANGES_REQUESTED` |
| `review:approved` | 🟢 `#0e8a16` | Reviewer approved; awaiting merge / CI / second review. | `state: APPROVED` |

Why duplicate native state? Three reasons: (1) batch filtering via `gh pr list --label review:pending`; (2) trigger automation like auto-merge on `review:approved` + green CI; (3) colored signals scannable in the issues view. If your repo doesn't actually want any of these three, skip the `review:*` axis and use native state alone.

### 🔁 Reproduced (`reproduced`) — optional, only on bugs

| Label | Color | Meaning |
|---|---|---|
| `reproduced` | 🟡 `#fbca04` | At least one person other than the reporter has independently reproduced the bug with evidence linked in the issue. |

**Absence = unverified.** This is the most common form (single label, presence-only). Don't pair with a `needs-repro` label — "no `reproduced`" already encodes that.

Lifecycle:
- Reporter files a bug → no `reproduced` label.
- A maintainer or other contributor reproduces it on the claimed branch/version → comments with evidence (logs, screenshots, commit SHA, env details) → adds `reproduced`.
- If a fix later fails to actually resolve it for someone else, **don't remove `reproduced`** — the label is a historical confirmation, not a current-state flag.

## How to apply this skill

### Bootstrapping a new repo

Run the bundled script:

```bash
scripts/bootstrap-labels.sh <owner>/<repo>
```

It calls `gh label create` once per label with the documented color and description. Idempotent — safe to re-run; existing labels are skipped with a warning.

If you want to customize the `area:*` set for a non-benchflow repo, edit the `AREAS` array at the top of the script before running.

### Triaging an existing issue

For each open issue, ask in order:

1. **Priority** (required) — read the issue body. Does it block the next release? → `P0`. Important but deferable? → `P1`. Else → `P2`.
2. **Area** (required) — what file paths does the bug touch? Tag the primary; add a secondary only if ≥30% of the fix lives there too.
3. **Status** (required) — new issue starts at `status:triage`. After you assign P + area, transition to `status:ready` (no assignee) or `status:in-progress` (assignee). If blocked on external, `status:blocked` + comment explaining.
4. **Reproduced?** — only relevant for bugs. If you (or someone else) has independently verified with evidence, add `reproduced`.

Apply via:

```bash
gh issue edit <N> --repo <owner>/<repo> \
  --add-label "P1,area:rollout,status:ready,reproduced"
```

You can pass `--add-label` multiple times or comma-separated.

### Bulk-tagging a backlog

When you have many issues, batch the call. A single `gh issue list ... --json number` plus a loop is the fastest pattern. Example template:

```bash
for n in $(gh issue list --repo $REPO --state open --limit 100 --json number -q '.[].number'); do
  # decide labels per N from the issue body
  gh issue edit "$n" --repo "$REPO" --add-label "P2,area:eval,status:ready,reproduced"
done
```

If you're applying labels via Claude / Codex automation, **read the issue body first** — never tag from the title alone. Severity in particular requires reading the impact section.

### Wiring up automation (recommended, optional)

GitHub Actions snippet for auto-managing `status:*` and `review:*` lives in [`references/label-spec.md#automation`](references/label-spec.md). Drop into `.github/workflows/label-sync.yml`. Without automation, `status:in-progress` ↔ `status:ready` will drift fast — most teams skip the action and accept the drift, but if you're shipping >1 release per quarter the automation pays for itself in ~2 weeks.

## Design principles (why this shape and not another)

- **Every label answers a query.** If you can't name the `is:open label:X` query that justifies a label, the label dies.
- **Orthogonality.** Priority × Area × Status × Review × Reproduced — five independent axes. An issue should never need two labels from the same axis. (Multi-area is the one exception, capped at 2.)
- **GitHub-native first.** If GitHub already tracks something (`assignee`, `closed`, native review state, linked PR), don't shadow it with a label. The exception is when the label adds *batch filterability* or *automation triggers* the native state can't.
- **Three priority tiers, not five.** P0/P1/P2 — adding P3/P4 dilutes urgency. Anything beyond P2 belongs in `wontfix` or backlog without a P label.
- **No `kind:*` axis.** Bug vs feature vs docs is what GitHub's built-in `bug` / `enhancement` / `documentation` labels are for. Don't reinvent.
- **No `effort:*` axis.** Estimates rot; no one queries by them. If a contributor wants a small task, they look at `good-first-issue` or the title.
- **Reproduced is presence-only.** Pairing with `needs-repro` doubles the label count for the same bit of information.

## Adapting to a different project

The Priority and Status axes are universal — copy as-is. PR review is universal *if* you want batch filtering; skip if your project is small enough that the native PR view is sufficient.

The Area axis is the only project-specific axis. Rules:

1. Cap at 4–6 areas. More than that and you're either over-decomposing or your project should have multiple repos.
2. Each area must cover ≥3 likely issues. Below that threshold, drop the label and rely on the title.
3. Areas are non-overlapping by file path. If two areas keep getting double-tagged, you've drawn the boundary wrong — redraw.

For non-code projects (research, papers, ops runbooks), the Area axis often becomes `area:<topic>` instead of `area:<module>`. Same rules apply.

## What this skill explicitly does NOT do

- Doesn't create milestones — those are for release scope, not priority. Use `gh api repos/$REPO/milestones` separately.
- Doesn't enforce labels — that's the maintainer's job + (optionally) a GitHub Action.
- Doesn't define labels for *projects* (the GitHub Projects v2 board) — those have their own custom-field system.
- Doesn't replace `bug` / `enhancement` / `documentation` — those stay, as content-type metadata.
