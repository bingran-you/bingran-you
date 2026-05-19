# Conflict resolution

The pull workflow refuses to auto-merge anything that isn't a fast-forward. This doc covers what to do when it fails — and why automated merges are deliberately off the table.

## Why fast-forward only

LaTeX has no semantic merge. If Alice rewrites the intro on Overleaf while Bob refactors equations in `methods.tex` locally and pushes to GitHub, a naive `git merge` will produce a file that *compiles* and *looks fine* — but silently has Alice's old equation numbering, or Bob's draft of the intro instead of the polished one, or a half-deleted figure caption. The author won't notice until the figure is upside down in the submitted PDF.

So the workflows do the safe thing: detect divergence, stop, and dump the resolution onto a human who can read both sides.

## The four states

Whenever pull-from-overleaf runs, it compares three commits:

- `LOCAL` = current `HEAD` of GitHub's master
- `REMOTE` = HEAD of Overleaf's master (fetched into `refs/remotes/overleaf/master`)
- `BASE` = `git merge-base LOCAL REMOTE` — the most recent shared ancestor

Four possible states:

| State | Condition | What the workflow does |
|---|---|---|
| **In sync** | `LOCAL == REMOTE` | Nothing |
| **Overleaf ahead** | `LOCAL == BASE` (and `REMOTE != LOCAL`) | Fast-forward GitHub master to Overleaf, push |
| **GitHub ahead** | `REMOTE == BASE` (and `LOCAL != REMOTE`) | Skip — `sync-overleaf` will push the other direction on the next event |
| **Diverged** | None of the above | **Fail with instructions** — this doc |

You can run the same comparison locally to confirm which state you're in:

```bash
git fetch github master
git fetch origin master       # origin = Overleaf
LOCAL=$(git rev-parse github/master)
REMOTE=$(git rev-parse origin/master)
BASE=$(git merge-base "$LOCAL" "$REMOTE")
echo "LOCAL:  $LOCAL"
echo "REMOTE: $REMOTE"
echo "BASE:   $BASE"
```

## Resolution: diverged

Both sides have unique commits on top of `BASE`. The fix is to bring them together locally, with a human reading the merge, then push the merged history back to GitHub. The push-direction workflow will then carry it to Overleaf.

```bash
cd <paper-repo>

# 1. Get both sides locally
git fetch origin master         # origin = Overleaf
git fetch github master

# 2. Start from GitHub's master
git checkout master
git reset --hard github/master  # in case local is in a weird state

# 3. Merge Overleaf in
git merge origin/master
# Git will list conflicting files. Open each, resolve manually, then:
#   git add <file>
# Once all are resolved:
git commit                       # uses the auto-generated merge message
```

While resolving each conflict, think about who edited what. For LaTeX, the safest pattern is to **take both sets of changes** unless they touch the same paragraph — Alice's intro rewrite + Bob's equation refactor can usually both go in. The danger is conflicts inside a single `\section{}` or inside the same equation environment.

Then publish the merge:

```bash
# 4. Push the merged history to GitHub.
git push github master
# This fires sync-overleaf, which will push the merge to Overleaf.
```

The first user to edit either side after this resolution will get a clean view; subsequent collaborators on Overleaf will see the merged content as the starting point for their next session.

## Resolution: Overleaf "stuck" or out of sync after rebase

If someone force-pushed to GitHub (rewriting history) and you need to align Overleaf with the rewritten master:

```bash
# CAREFUL: this overwrites Overleaf's master. Only do it when you're sure.
git push origin +github/master:master
```

The `+` is a force-push. Anyone editing on Overleaf at that moment will see their in-progress edits become a divergence the next time they save. Coordinate with collaborators first.

In general, **avoid rewriting history** on a paper master branch. The setup assumes linear or merge-only history; rebases / force-pushes break the fast-forward invariants the cron workflow relies on.

## Resolution: a single bad commit on Overleaf you want to undo

Overleaf's web UI has a history viewer but no "revert this commit" button. To revert via git:

```bash
# Find the bad commit
git fetch origin master
git log origin/master --oneline

# Revert (creates a new commit that undoes the bad one)
git checkout master
git pull github master --ff-only
git revert <bad-commit-sha>
git push github master
# sync-overleaf pushes the revert to Overleaf; the bad changes are now undone there too
```

## When to give up and call Overleaf canonical

If the divergence is large and untangling the merge is more painful than redoing one side, decide which copy is canonical and force-align the other:

```bash
# Make GitHub a mirror of Overleaf (DESTRUCTIVE to GitHub master)
git fetch origin master
git checkout master
git reset --hard origin/master
git push github master --force-with-lease
```

```bash
# Make Overleaf a mirror of GitHub (DESTRUCTIVE to Overleaf master)
git fetch github master
git checkout master
git reset --hard github/master
git push origin master --force-with-lease
```

These are last-resort moves. Tell the user explicitly what they're about to destroy and get a confirmation before running them. After a destructive reset, the next collaborator who opens Overleaf with a stale tab will lose their unsaved edits.

## Preventing future divergence

The two cheap habits that prevent ~all conflicts:

- **Run `sync.ps1` / `sync.sh` before every editing session.** Cheap, fast, eliminates most stale-state divergence.
- **Tell collaborators: "edit on Overleaf OR edit locally, never both at once."** Even with the sync in place, simultaneous edits on different platforms invite divergence.
