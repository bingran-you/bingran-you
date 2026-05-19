# Setting up sync for a new paper

End-to-end procedure for taking a paper that lives only on Overleaf and getting it onto GitHub with bidirectional auto-sync. Total time: ~10 minutes.

The user runs these commands; the agent's job is to guide them, fill in the variables, and verify each step.

## Prerequisites

- The user has push access to Overleaf for the paper
- The user has the `gh` CLI installed and authenticated (`gh auth status` says "Logged in")
- The user can create a new GitHub repo under an account / org they own
- Git installed locally

Collect these up front:

- `OVERLEAF_PROJECT_ID` — the path component in the Overleaf URL, e.g. for `https://www.overleaf.com/project/abc123def456...` it's `abc123def456...`
- `GITHUB_OWNER` — the user / org for the new GitHub repo (e.g. `bingran-you`)
- `GITHUB_REPO_NAME` — what the new repo will be called (e.g. `multiplexed-ion-photon`)
- `LOCAL_DIR` — where the local working copy goes (e.g. `C:\GitHub\bingran-you\papers\multiplexed-ion-photon`)

## Step 1 — Generate an Overleaf git token

1. In Overleaf, click the user avatar → **Account Settings**
2. Scroll to **Git Integration** (or "Project and account synchronisation")
3. Click **Create Token** — Overleaf shows the token once. Copy it.
4. The token starts with `olp_`. Treat it like a password — don't paste it into chat, screenshots, or shared docs.

> **Gotcha — auth format changed.** Overleaf used to accept `email + token` as username/password. It no longer does and returns `403: Overleaf now only supports Git authentication tokens`. The current format is `username = "git"` (literal string), `password = <token>`. The workflow templates already do this; if a user adapts another snippet from a blog post that uses email-as-username, it will break.

## Step 2 — Clone Overleaf to a local working directory

```bash
git clone https://git.overleaf.com/<OVERLEAF_PROJECT_ID> <LOCAL_DIR>
# username: git
# password: paste the token from step 1
cd <LOCAL_DIR>
```

After this the local repo has one remote, `origin`, pointing at Overleaf.

> **Don't keep the token in `.git/config`.** Some git clients embed the token in the remote URL after a successful credential prompt. Inspect `.git/config` and clean it if needed; the workflow handles auth via secrets, not via embedded URLs.

## Step 3 — Create the GitHub repo and push

```bash
gh repo create <GITHUB_OWNER>/<GITHUB_REPO_NAME> --private --source=. --remote=github --push
```

This single command:
- creates a new private repo under `<GITHUB_OWNER>`,
- adds `github` as a new remote in the local clone,
- pushes `master` to GitHub.

Verify the two remotes:

```bash
git remote -v
# origin  https://git.overleaf.com/<OVERLEAF_PROJECT_ID> (fetch)
# origin  https://git.overleaf.com/<OVERLEAF_PROJECT_ID> (push)
# github  https://github.com/<GITHUB_OWNER>/<GITHUB_REPO_NAME>.git (fetch)
# github  https://github.com/<GITHUB_OWNER>/<GITHUB_REPO_NAME>.git (push)
```

## Step 4 — Store the Overleaf token as a GitHub secret

```bash
gh secret set OVERLEAF_TOKEN --body "<the token from step 1>" --repo <GITHUB_OWNER>/<GITHUB_REPO_NAME>
```

Verify:

```bash
gh secret list --repo <GITHUB_OWNER>/<GITHUB_REPO_NAME>
# OVERLEAF_TOKEN  <timestamp>
```

## Step 5 — Add the workflow files and helper scripts

Copy the four templates from this skill's `assets/` directory into the local clone:

```
assets/sync-overleaf.yml       →  .github/workflows/sync-overleaf.yml
assets/pull-from-overleaf.yml  →  .github/workflows/pull-from-overleaf.yml
assets/sync.ps1                →  sync.ps1
assets/sync.sh                 →  sync.sh
```

Then **search-and-replace** the literal string `__OVERLEAF_PROJECT_ID__` in all four files with the actual project ID. PowerShell one-liner from the paper repo root:

```powershell
Get-ChildItem -Recurse -File -Include sync-overleaf.yml,pull-from-overleaf.yml,sync.ps1,sync.sh |
    ForEach-Object { (Get-Content $_.FullName) -replace '__OVERLEAF_PROJECT_ID__', '<OVERLEAF_PROJECT_ID>' | Set-Content $_.FullName }
```

Bash equivalent:

```bash
find . -type f \( -name 'sync-overleaf.yml' -o -name 'pull-from-overleaf.yml' -o -name 'sync.ps1' -o -name 'sync.sh' \) \
  -exec sed -i 's/__OVERLEAF_PROJECT_ID__/<OVERLEAF_PROJECT_ID>/g' {} +
```

Make `sync.sh` executable for Mac/Linux collaborators:

```bash
chmod +x sync.sh
```

## Step 6 — Commit, push, and test

Open a PR (cleaner) or commit straight to master (faster). PR flow:

```bash
git checkout -b add-overleaf-sync
git add .github/workflows sync.ps1 sync.sh
git commit -m "Add GitHub Actions: bidirectional Overleaf sync"
git push -u github add-overleaf-sync
gh pr create --base master --head add-overleaf-sync \
  --title "Add bidirectional Overleaf sync" \
  --body "Adds sync-overleaf (push direction) and pull-from-overleaf (cron pull) workflows plus a sync.ps1/sync.sh helper. Uses OVERLEAF_TOKEN secret."
gh pr merge --squash --delete-branch
```

The PR merge will fire `sync-overleaf` for the first time. Watch it:

```bash
gh run watch --exit-status
```

If it succeeds — Overleaf now has the workflow files committed too. (Harmless: Overleaf renders the LaTeX and ignores `.github/` and `sync.*`.)

## Step 7 — Test the pull direction

Trigger `pull-from-overleaf` manually:

```bash
gh workflow run pull-from-overleaf.yml --ref master
```

Watch for "Already in sync." in the log — that means the fetch worked and the two HEADs match. Anything else, see [`troubleshooting.md`](troubleshooting.md).

## Step 8 — (Optional) Register as a submodule of a parent monorepo

If the paper is one of many tracked in a parent repo (e.g., a personal monorepo with a `papers/` directory):

```bash
cd <parent-repo>
git submodule add https://github.com/<GITHUB_OWNER>/<GITHUB_REPO_NAME>.git papers/<GITHUB_REPO_NAME>
git commit -m "Add <GITHUB_REPO_NAME> paper as submodule"
git push
```

This commits only `.gitmodules` and a pointer; the paper repo stays independent. Day-to-day the user works inside `papers/<GITHUB_REPO_NAME>/` directly. The parent repo's pointer can be bumped occasionally:

```bash
cd <parent-repo>
git add papers/<GITHUB_REPO_NAME>
git commit -m "Bump <GITHUB_REPO_NAME> submodule"
git push
```

## Step 9 — Done — tell the user the workflow

Hand off these two commands as the daily ritual:

```powershell
# Before editing
.\sync.ps1

# After editing
git add . ; git commit -m "..." ; git push github master
```

And remind them: if `sync.ps1` ever reports a divergence failure, jump to [`conflict-resolution.md`](conflict-resolution.md).
