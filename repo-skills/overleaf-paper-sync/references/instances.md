# Papers using this sync pattern

Living log of actual paper repos set up with this skill. The skill's general playbook tells you HOW to set things up; this file records WHAT the author has already set up, so future sessions don't have to re-derive the state and can pick up pending action items.

> **Privacy note.** This file lives in the **public** [`bingran-you/bingran-you`](https://github.com/bingran-you/bingran-you) repo and is shipped to the personal site catalog. Never write tokens or anything that would grant access here. Overleaf project IDs alone are not credentials — they identify which Overleaf project, but accessing the project still requires a valid token, which lives only in GitHub Secrets (not here). Pair a leaked token with a project ID and you have a working credential set, so rotate tokens promptly when leaked.

## multiplexed-ion-photon

- **Overleaf project:** `6a0ccb389dd0fc243b1004fb` — https://www.overleaf.com/project/6a0ccb389dd0fc243b1004fb
- **GitHub repo:** [`bingran-you/multiplexed-ion-photon`](https://github.com/bingran-you/multiplexed-ion-photon) (private)
- **Local clone:** `C:\GitHub\bingran-you\papers\multiplexed-ion-photon`
- **Parent submodule:** `papers/multiplexed-ion-photon` in [`bingran-you/bingran-you`](https://github.com/bingran-you/bingran-you)
- **Set up:** 2026-05-19
- **Pull cadence:** hourly (`0 * * * *`) — see [`.github/workflows/pull-from-overleaf.yml`](https://github.com/bingran-you/multiplexed-ion-photon/blob/master/.github/workflows/pull-from-overleaf.yml)
- **Collaboration mode:** bidirectional sync is intentional — collaborators may edit on Overleaf web. Don't downgrade to GitHub-only.
- **Secrets configured on the GitHub repo:**
  - `OVERLEAF_TOKEN` — used by both workflows
  - `OVERLEAF_EMAIL` — set during early setup, now unused (the workflow URL uses literal `git` as username); harmless to leave or remove

### Action items

- [ ] **Rotate `OVERLEAF_TOKEN`.** The current token (`olp_4z4k…`, partial fingerprint) was shared once during initial setup before this skill existed. Access is still gated (private GitHub repo + active token + project ID), but rotate as a precaution:
    1. In Overleaf: Account Settings → Git Integration → revoke `olp_4z4k…`, generate a fresh token
    2. `gh secret set OVERLEAF_TOKEN --body "<new>" --repo bingran-you/multiplexed-ion-photon`
    3. `gh workflow run pull-from-overleaf.yml --repo bingran-you/multiplexed-ion-photon` — log should say "Already in sync."
    4. Update this file: strike the action item, note the rotation date

### Notable PRs

- [`bingran-you#242`](https://github.com/bingran-you/bingran-you/pull/242) — added as submodule
- [`multiplexed-ion-photon#1`](https://github.com/bingran-you/multiplexed-ion-photon/pull/1) — initial `sync-overleaf.yml`
- [`multiplexed-ion-photon#2`](https://github.com/bingran-you/multiplexed-ion-photon/pull/2) — fixed Overleaf token-auth URL (literal `git` as username)
- [`multiplexed-ion-photon#3`](https://github.com/bingran-you/multiplexed-ion-photon/pull/3) — added scheduled `pull-from-overleaf.yml`
- [`multiplexed-ion-photon#4`](https://github.com/bingran-you/multiplexed-ion-photon/pull/4) — cron → hourly + added `sync.ps1`
- [`multiplexed-ion-photon#5`](https://github.com/bingran-you/multiplexed-ion-photon/pull/5) — fixed PowerShell jq-quoting in `sync.ps1`
- [`bingran-you#243`](https://github.com/bingran-you/bingran-you/pull/243) — this skill (overleaf-paper-sync)
- [`bingran-you#244`](https://github.com/bingran-you/bingran-you/pull/244) — bumped submodule pointer to include the workflows

## Adding a new paper

When the next paper joins this pattern:

1. Follow [`setup-new-paper.md`](setup-new-paper.md)
2. Add a section here mirroring the structure above
3. If the paper's defaults differ from the templates (e.g., 30-min cron, single-editor mode), note it explicitly so future agents don't assume

## Pattern usage so far

One paper.
