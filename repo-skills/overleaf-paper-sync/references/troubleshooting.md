# Troubleshooting

Common errors and what to do about them, organized by where the symptom shows up.

## Errors in the `sync-overleaf` workflow run

### `remote: Overleaf now only supports Git authentication tokens` (403)

**Cause.** The workflow's git URL uses the wrong auth format. Overleaf removed the legacy "email + token" form. The current form is `username = "git"` (literal string), `password = <token>`.

**Fix.** The workflow URL must be:

```
https://git:${OVERLEAF_TOKEN}@git.overleaf.com/<OVERLEAF_PROJECT_ID>
```

If you find an older template using `${OVERLEAF_EMAIL}:${OVERLEAF_TOKEN}@...`, replace the email part with the literal `git`.

### `fatal: could not read Username for 'https://github.com'`

**Cause.** The workflow is trying to push to GitHub but doesn't have `contents: write` permission, or the `actions/checkout` step didn't authenticate.

**Fix.** Add this top-level block to the workflow:

```yaml
permissions:
  contents: write
```

And ensure `actions/checkout@v4` is used — it auto-configures `GITHUB_TOKEN` as the credential for the cloned remote.

### Non-fast-forward rejection when pushing to Overleaf

**Cause.** Someone edited on Overleaf web after the last sync, so Overleaf is ahead and GitHub is trying to push old + new commits. The `sync-overleaf` workflow does NOT pull first — that's intentional, to avoid silent auto-merges.

**Fix.** Trigger `pull-from-overleaf` (or run `sync.ps1`) to bring Overleaf's commits into GitHub. If that succeeds, the next push of new local work will be a clean fast-forward. If `pull-from-overleaf` itself fails — go to [`conflict-resolution.md`](conflict-resolution.md).

## Errors in the `pull-from-overleaf` workflow run

### `::error::Branches have diverged. Manual resolution required.`

**Cause.** Both sides have new commits since the last common ancestor.

**Fix.** [`conflict-resolution.md`](conflict-resolution.md).

### Permission error pushing to GitHub master

Same as above — add `permissions: contents: write` to the workflow.

If branch protection on GitHub requires PR review or status checks for master, the default `GITHUB_TOKEN` can't satisfy them. Options:
- Loosen the protection rule for `github-actions[bot]` (Settings → Branches → exclude bots)
- Use a personal access token (PAT) stored in another secret instead of `GITHUB_TOKEN` — extra complexity, only worth it if you really need branch protection here

### Cron runs are skipped or very late

**Cause.** GitHub Actions scheduled workflows run on a best-effort basis. On busy runners, an hourly cron might fire 10–20 minutes late, occasionally an hour late or skipped entirely. This is documented behavior, not a bug in the setup.

**Mitigation.** Don't rely on the cron for time-sensitive sync. Run `sync.ps1` / `sync.sh` before editing sessions.

## Errors in `sync.ps1` (PowerShell, Windows)

### `function not defined: completed/0`

**Cause.** Older versions of `sync.ps1` used `--jq` filter strings on the `gh` CLI. PowerShell strips inner double quotes when passing them to native commands, so `select(.status != "completed")` arrives at `jq` as `select(.status != completed)` and `completed` gets parsed as a function name.

**Fix.** Use `ConvertFrom-Json` and filter in PowerShell instead of letting `jq` parse the filter:

```powershell
$runs = gh run list --workflow=$workflow --event=workflow_dispatch --limit 1 --json databaseId,status | ConvertFrom-Json
if ($runs -and $runs[0].status -ne 'completed') { $runId = $runs[0].databaseId }
```

The asset template `assets/sync.ps1` already does this.

### `fatal: Unable to create '.git/index.lock': File exists.`

**Cause.** A previous git operation crashed or was interrupted and left a stale lock file. This is especially common when the repo is touched by both Windows tooling and WSL / a Linux sandbox — the lock cleanup fails across filesystem boundaries.

**Fix.**

```powershell
Remove-Item .git\index.lock -ErrorAction SilentlyContinue
```

```bash
rm -f .git/index.lock
```

Also check for `.git/refs/heads/<branch>.lock` if branch operations fail.

### `gh` not found / authentication missing

**Cause.** `sync.ps1` requires the GitHub CLI (`gh`) installed and logged in.

**Fix.** Install: https://cli.github.com/ — then `gh auth login`. The user needs `repo`, `workflow` scopes at minimum.

## Errors during local fetches from Overleaf

### `fatal: could not read Username for 'https://git.overleaf.com'` (when running git locally)

**Cause.** No credentials cached for the Overleaf remote in the local clone.

**Fix.** Run the command interactively once so git prompts. Username: `git`. Password: the OVERLEAF_TOKEN value. Windows Credential Manager (default credential helper) caches it for next time. On Mac/Linux, configure a credential helper if you haven't:

```bash
git config --global credential.helper osxkeychain    # Mac
git config --global credential.helper store          # Linux (stores plaintext — careful)
```

### Local clone of Overleaf prompts for credentials on every push/pull

**Cause.** No credential helper, or the helper doesn't recognize the URL.

**Fix.** Same as above — set a credential helper. Or, store the token as part of the URL (not recommended for shared machines):

```bash
git remote set-url origin "https://git:<TOKEN>@git.overleaf.com/<PROJECT_ID>"
```

If you go this route, the token sits in `.git/config`. Don't commit `.git/config` (you can't, normally) and don't share the local clone.

## Secret / token issues

### `gh secret list` shows no secrets for the repo

**Cause.** Either the secrets were never set, or you're checking the wrong repo / scope (org vs. repo level).

**Fix.**

```bash
gh secret set OVERLEAF_TOKEN --body "<token>" --repo <owner>/<repo>
gh secret list --repo <owner>/<repo>
```

### How to confirm `OVERLEAF_TOKEN` is actually being used

You can't read a GitHub secret back — by design. To verify it's set correctly, manually trigger the pull workflow and watch the log:

```bash
gh workflow run pull-from-overleaf.yml --repo <owner>/<repo>
sleep 5
gh run watch --repo <owner>/<repo> --exit-status
```

If you get "Already in sync." the token works. If you get 403, the token is wrong or revoked — rotate it.

## Submodule integration issues (parent monorepo case)

### Cloning the parent repo leaves `papers/<paper>/` empty

**Cause.** Submodules aren't initialized.

**Fix.**

```bash
git submodule update --init --recursive papers/<paper>
```

### Parent repo shows the submodule as "dirty" after editing the paper

**Cause.** The submodule's HEAD has moved (you committed paper changes) but the parent's pointer hasn't been bumped.

**Fix.** This is by design — the parent's pointer only updates when you choose to bump it. To bump:

```bash
cd <parent-repo>
git add papers/<paper>
git commit -m "Bump <paper> submodule"
git push
```

Or leave it dirty and bump only at milestones — there's no requirement to bump on every paper commit.
