---
name: overleaf-paper-sync
description: Manage a LaTeX paper hosted on Overleaf via a GitHub mirror with bidirectional auto-sync through GitHub Actions. Use this skill whenever the user mentions Overleaf, paper version control, syncing a LaTeX project, a GitHub mirror of an Overleaf project, divergence or merge conflicts between Overleaf and Git, the Overleaf git authentication token, or is working in a repo that contains `.github/workflows/sync-overleaf.yml`, `pull-from-overleaf.yml`, or a `sync.ps1` / `sync.sh` helper. Also use it when onboarding a collaborator (or a collaborator's agent) to an existing Overleaf-backed paper repo. The skill covers initial setup of a brand-new paper, the daily editing ritual, the divergence-resolution playbook, and the gotchas the author hit while building this pattern — enough that an agent with no prior context can pick it up cold. Specific papers wired up with this pattern (e.g., `multiplexed-ion-photon`) are catalogued in `references/instances.md` with their per-paper config and pending action items — trigger this skill when the user mentions one of those papers by name, even without saying "Overleaf".
author: Bingran You (@bingran-you)
license: MIT
---

# Overleaf Paper Sync

Manage a LaTeX paper that lives on Overleaf by mirroring it on GitHub, with both directions kept in sync automatically by two GitHub Actions workflows. The point is to get Overleaf's editor + preview while keeping GitHub's version control, PR review, and tooling — without paying for Overleaf's built-in GitHub integration.

## The mental model

Overleaf is a great editor (live preview, real-time collab, browser-based). It's a weak version control system. GitHub is the inverse. This setup keeps **Overleaf as the editor of record** and **GitHub as the source of version truth**, connected by two automated paths:

1. **GitHub → Overleaf (push trigger).** Every push to GitHub's `master` runs `.github/workflows/sync-overleaf.yml`, which `git push`es to Overleaf's git endpoint within seconds.

2. **Overleaf → GitHub (cron + on-demand).** `.github/workflows/pull-from-overleaf.yml` runs hourly on a cron and on manual trigger. It fetches Overleaf, compares HEADs, and:
   - if Overleaf has new commits (a web edit), fast-forwards GitHub master onto them and pushes,
   - if GitHub is already ahead, does nothing — the other workflow handles that direction,
   - if both sides have unique commits, fails loudly with resolution instructions, because automated merges of LaTeX produce silently-broken papers.

Local clones also get a `sync.ps1` / `sync.sh` helper that the user runs **before each editing session**: it triggers the pull workflow, waits for it to finish, and fast-forwards the local working copy. This catches collaborator web-edits without waiting up to an hour for the next cron tick.

That's the whole system. Everything else in this skill is one of: setup, conflict resolution, or troubleshooting.

## Recognizing an already-wired-up paper

When stepping into an unfamiliar paper repo, these signals mean this skill applies:

- `.github/workflows/sync-overleaf.yml` and/or `.github/workflows/pull-from-overleaf.yml` exist
- Two git remotes — one with a `git.overleaf.com` URL (often named `origin`), one with a `github.com` URL (often named `github`)
- A `sync.ps1` / `sync.sh` in the repo root
- An `OVERLEAF_TOKEN` secret configured on the GitHub repo

If 2+ of these are present, treat the repo as already set up — skip the setup section and go to **Daily editing workflow** below.

## Daily editing workflow

This is the most-used section. Walk the user through it whenever they're about to work on the paper.

### Step 1 — Before editing: pull Overleaf changes

From the paper repo root:

```powershell
# Windows
.\sync.ps1
```

```bash
# Mac / Linux
./sync.sh
```

Takes ~10–30 seconds. It triggers the pull workflow on GitHub, waits for it, then fast-forwards the local clone. After this, the local working copy reflects whatever the latest collaborator web-edit on Overleaf left behind.

If the script reports "diverged" or the workflow run failed, see **Conflict resolution** below — don't keep editing on top of a divergent state.

### Step 2 — Edit normally

VS Code, Cursor, vim, whatever. The paper repo is a regular git repo from here.

### Step 3 — After editing: commit and push to GitHub only

```bash
git add .
git commit -m "<message>"
git push github master
```

The `sync-overleaf` workflow fires within seconds and pushes to Overleaf automatically. The user does **not** need to `git push origin` (Overleaf) — pushing manually is redundant and racy.

Sanity-check the workflow ran:

```bash
gh run list --workflow=sync-overleaf.yml --limit 1
```

### What about commits made directly on Overleaf web?

Those reach GitHub via:
- The hourly cron of `pull-from-overleaf` (worst case ~60 min latency — GitHub Actions cron is delayed by 5–15 min in practice on top of the schedule)
- The user running `sync.ps1` / `sync.sh` (fastest — usually under a minute)
- A manual `gh workflow run pull-from-overleaf.yml`

The commit on GitHub will be authored by `github-actions[bot]` since the workflow does the push — that's expected.

## Conflict resolution

The pull-from-overleaf workflow is **fast-forward only**. If GitHub and Overleaf have each grown commits the other doesn't have, the workflow fails on purpose. Auto-merging LaTeX between two unrelated edits would produce subtly broken output that nobody notices until the figure is upside down in the final PDF.

Full playbook, including the exact commands to detect each case and recover, is in [references/conflict-resolution.md](references/conflict-resolution.md). The short version:

```powershell
cd <paper-repo>
git fetch origin master        # origin = Overleaf
git fetch github master
git checkout master
git pull github master --ff-only    # bring local up to GitHub
git merge origin/master              # merge Overleaf in; resolve conflicts
git push github master               # triggers sync-overleaf to push back to Overleaf
```

If the local clone doesn't have credentials cached for the Overleaf remote, fetching from `origin` will prompt. The username is the literal string `git`; the password is the OVERLEAF_TOKEN.

## Setting up sync for a new paper

When the user wants to add this pattern to a paper that's currently only on Overleaf (or set up a new mirrored paper from scratch), follow the procedure in [references/setup-new-paper.md](references/setup-new-paper.md). It covers:

1. Generating an Overleaf git token (and the gotcha that the **token's username must be the literal string `git`**, not the user's email — Overleaf changed this and the old "email + token" auth gives a 403)
2. Cloning the Overleaf project to a local working dir
3. Creating an empty GitHub repo and pushing the contents up
4. Setting the `OVERLEAF_TOKEN` secret on the repo
5. Dropping the two workflow files and the `sync.ps1` / `sync.sh` helper into place (templates are in `assets/`)
6. Optional: registering the paper repo as a submodule of a parent monorepo

The templates in `assets/` use the literal string `__OVERLEAF_PROJECT_ID__` everywhere the Overleaf project ID has to go — search-replace it once during setup.

## Common errors and fixes

Quick reference. Full details and recovery commands in [references/troubleshooting.md](references/troubleshooting.md).

| Symptom | Likely cause | Fix |
|---|---|---|
| `403: Overleaf now only supports Git authentication tokens` in workflow | Workflow URL uses email as username | Use `https://git:${TOKEN}@git.overleaf.com/<id>` — literal `git`, not email |
| `fatal: Not possible to fast-forward` in pull workflow | Histories diverged | See conflict-resolution.md |
| Workflow can't push to GitHub master | Missing `contents: write` permission or branch protection | Add `permissions: contents: write` to the workflow; check branch protection rules |
| Local push to GitHub succeeds but Overleaf never updates | `OVERLEAF_TOKEN` missing or stale | Check `gh secret list`; reset via `gh secret set OVERLEAF_TOKEN --body "<new>"` |
| Cron runs are skipped / very late | Normal GitHub Actions backlog | Use the `sync.ps1` / manual trigger when timing matters |
| `fatal: Unable to create '.git/index.lock'` | Stale lock from an interrupted git operation (common after WSL/sandbox edits on Windows) | `Remove-Item .git/index.lock` (PS) or `rm .git/index.lock` (bash) |
| `gh pr merge` says "not mergeable" right after a force-push | GitHub's mergeability cache hasn't refreshed | Wait a few seconds and retry |

## Architecture notes

Non-obvious details that matter when debugging:

- **Default branch is `master`** (Overleaf's convention). The workflows hardcode `master`. Don't rename it.

- **Why this doesn't loop infinitely:** `pull-from-overleaf` pushes to GitHub using the default `GITHUB_TOKEN`. GitHub Actions deliberately does not re-trigger workflow runs on commits made by `GITHUB_TOKEN` — that's the platform's built-in loop protection. So `pull-from-overleaf` writing to master does NOT fire `sync-overleaf` back. User pushes from a personal machine DO fire it, because they authenticate with a personal token, not `GITHUB_TOKEN`.

- **Concurrency group:** both workflows share `concurrency: group: sync-overleaf`. This serializes them so one doesn't push while the other is mid-fetch. Without this, you can get into states where each workflow sees a stale view of the other side.

- **Two remotes by convention:** when cloning from Overleaf and adding GitHub, the natural setup is `origin = Overleaf` (from the original clone), `github = GitHub` (added later). Some setups flip these. The workflows don't care — they always construct the Overleaf URL from scratch using the secret.

- **`OVERLEAF_EMAIL` secret is vestigial.** Earlier auth tried email-as-username; Overleaf migrated to requiring the literal `git`. If the secret is set, it's harmless. New setups don't need it.

## Token rotation

Overleaf tokens leak. Rotate them periodically and immediately if exposed:

1. In Overleaf: Account Settings → Git Integration → revoke the old token, generate a new one
2. Update the GitHub secret:
   ```bash
   gh secret set OVERLEAF_TOKEN --body "<new-token>" --repo <owner>/<repo>
   ```
3. Manually trigger `pull-from-overleaf.yml` once to confirm the new token works:
   ```bash
   gh workflow run pull-from-overleaf.yml --repo <owner>/<repo>
   ```
4. No workflow file changes needed. The next push will also exercise the token via `sync-overleaf`.

## Papers already set up with this pattern

This skill doubles as a memory for the author's own paper instances. Before treating a paper as "new", check [`references/instances.md`](references/instances.md) — it lists each paper repo wired up with this pattern, the per-paper config that differs from the defaults, and any pending action items (e.g., tokens scheduled for rotation).

If the user mentions a paper by name and it's already listed there, you already know its Overleaf project ID, GitHub repo, parent-submodule path, and collaboration mode — skip the discovery questions and go straight to the daily-workflow guidance. When a new paper joins the pattern, append a section to `instances.md` so the next session inherits the context.

## What this skill explicitly does NOT do

- It does **not** build the PDF in CI. If the user wants Actions to compile `paper.pdf` on every push, add a separate workflow using `xu-cheng/latex-action@v3`. Not in scope here.
- It does **not** support branches other than `master`. Overleaf's git endpoint only exposes `master`. If the user wants feature branches, do them on GitHub only and merge to master, which then syncs to Overleaf.
- It does **not** replace Overleaf's paid GitHub integration. The paid integration handles divergence in a UI. This setup is more transparent and free but requires `sync.ps1` before sessions and occasional manual conflict resolution.
- It does **not** rebase commits across the boundary. The pull workflow uses fast-forward only, by design. Anything else is a human decision.

## Skill contents

- [`SKILL.md`](SKILL.md) — this file
- [`references/setup-new-paper.md`](references/setup-new-paper.md) — full procedure for setting up sync on a paper not yet in this pattern
- [`references/conflict-resolution.md`](references/conflict-resolution.md) — divergence playbook
- [`references/troubleshooting.md`](references/troubleshooting.md) — common errors and fixes
- [`references/instances.md`](references/instances.md) — author's living log of papers using this pattern + pending action items
- [`assets/sync-overleaf.yml`](assets/sync-overleaf.yml) — push-direction workflow template
- [`assets/pull-from-overleaf.yml`](assets/pull-from-overleaf.yml) — pull-direction workflow template
- [`assets/sync.ps1`](assets/sync.ps1) — PowerShell pre-session helper (Windows)
- [`assets/sync.sh`](assets/sync.sh) — bash pre-session helper (Mac / Linux)
