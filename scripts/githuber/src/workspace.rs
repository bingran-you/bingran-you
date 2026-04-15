use std::path::{Path, PathBuf};
use std::process::Command;

use crate::identity::Identity;
use crate::task::TaskCandidate;
use crate::util::{
    AppResult, app_error, ensure_dir, remove_dir_if_exists, run_command_checked, sanitize_filename,
};

#[derive(Clone, Debug)]
pub struct WorkspaceLease {
    pub mirror_dir: PathBuf,
    pub workspace_dir: PathBuf,
    pub repo_url: String,
}

#[derive(Clone, Debug)]
pub struct WorkspaceManager {
    repos_dir: PathBuf,
    workspaces_dir: PathBuf,
    host: String,
    login: String,
}

impl WorkspaceManager {
    pub fn new(repos_dir: PathBuf, workspaces_dir: PathBuf, identity: &Identity) -> Self {
        Self {
            repos_dir,
            workspaces_dir,
            host: identity.host.clone(),
            login: identity.login.clone(),
        }
    }

    pub fn prepare(&self, task: &TaskCandidate) -> AppResult<WorkspaceLease> {
        let workspace_repo = task.workspace_repo();
        if workspace_repo.is_empty() {
            return Err(app_error("task does not include a repository"));
        }
        ensure_dir(&self.repos_dir)?;
        ensure_dir(&self.workspaces_dir)?;

        let repo_slug = sanitize_filename(&workspace_repo.replace('/', "__"));
        let mirror_dir = self.repos_dir.join(format!("{repo_slug}.git"));
        let repo_url = format!("https://{}/{repo}.git", self.host, repo = workspace_repo);
        self.ensure_mirror(&mirror_dir, &repo_url)?;
        let checkout_ref = self.prepare_ref(&mirror_dir, task)?;

        let workspace_dir = self.workspaces_dir.join(repo_slug).join(format!(
            "{}-{}",
            task.kind.as_str(),
            task.stable_id()
        ));
        self.prune_stale_worktree_entry(&mirror_dir, &workspace_dir)?;
        if workspace_dir.exists() {
            remove_dir_if_exists(&workspace_dir)?;
        }
        if let Some(parent) = workspace_dir.parent() {
            ensure_dir(parent)?;
        }

        let mut command = Command::new("git");
        command
            .arg("--git-dir")
            .arg(&mirror_dir)
            .arg("worktree")
            .arg("add")
            .arg("--force")
            .arg("--detach")
            .arg(&workspace_dir)
            .arg(&checkout_ref);
        run_command_checked(&mut command, "create task workspace")?;

        self.seed_git_identity(&workspace_dir)?;

        Ok(WorkspaceLease {
            mirror_dir,
            workspace_dir,
            repo_url,
        })
    }

    fn ensure_mirror(&self, mirror_dir: &Path, repo_url: &str) -> AppResult<()> {
        if !mirror_dir.exists() {
            let mut clone = self.authenticated_git_command();
            clone
                .arg("clone")
                .arg("--bare")
                .arg(repo_url)
                .arg(mirror_dir);
            run_command_checked(&mut clone, "clone bare mirror")?;
        }

        self.normalize_repository_cache(mirror_dir)?;

        let mut update = self.authenticated_git_command();
        update
            .arg("--git-dir")
            .arg(mirror_dir)
            .arg("remote")
            .arg("update")
            .arg("--prune");
        run_command_checked(&mut update, "update bare mirror")?;
        Ok(())
    }

    fn prepare_ref(&self, mirror_dir: &Path, task: &TaskCandidate) -> AppResult<String> {
        if let Some(number) = task.pr_number() {
            let ref_name = format!("refs/remotes/origin/githuber-pr-{number}");
            let mut fetch = self.authenticated_git_command();
            fetch
                .arg("--git-dir")
                .arg(mirror_dir)
                .arg("fetch")
                .arg("origin")
                .arg(format!("+refs/pull/{number}/head:{ref_name}"));
            run_command_checked(&mut fetch, "fetch pull request head")?;
            return Ok(ref_name);
        }

        let mut head = Command::new("git");
        head.arg("--git-dir")
            .arg(mirror_dir)
            .arg("rev-parse")
            .arg("HEAD");
        let stdout = run_command_checked(&mut head, "resolve mirror HEAD")?;
        let revision = stdout.lines().next().unwrap_or("").trim().to_string();
        if revision.is_empty() {
            return Err(app_error("mirror HEAD could not be resolved"));
        }
        Ok(revision)
    }

    fn seed_git_identity(&self, workspace_dir: &Path) -> AppResult<()> {
        let mut name = Command::new("git");
        name.arg("-C")
            .arg(workspace_dir)
            .arg("config")
            .arg("user.name")
            .arg(format!("{} via githuber", self.login));
        let _ = crate::util::run_command(&mut name);

        let mut email = Command::new("git");
        email
            .arg("-C")
            .arg(workspace_dir)
            .arg("config")
            .arg("user.email")
            .arg(format!("{}@users.noreply.github.com", self.login));
        let _ = crate::util::run_command(&mut email);
        Ok(())
    }

    fn authenticated_git_command(&self) -> Command {
        let mut command = Command::new("git");
        command
            .env("GIT_TERMINAL_PROMPT", "0")
            .arg("-c")
            .arg("credential.helper=!gh auth git-credential");
        command
    }

    fn normalize_repository_cache(&self, mirror_dir: &Path) -> AppResult<()> {
        let mut unset_mirror = Command::new("git");
        unset_mirror
            .arg("--git-dir")
            .arg(mirror_dir)
            .arg("config")
            .arg("--unset-all")
            .arg("remote.origin.mirror");
        let _ = crate::util::run_command(&mut unset_mirror);

        let mut unset_fetch = Command::new("git");
        unset_fetch
            .arg("--git-dir")
            .arg(mirror_dir)
            .arg("config")
            .arg("--unset-all")
            .arg("remote.origin.fetch");
        let _ = crate::util::run_command(&mut unset_fetch);

        for fetch in [
            "+refs/heads/*:refs/remotes/origin/*",
            "+refs/tags/*:refs/tags/*",
        ] {
            let mut set_fetch = Command::new("git");
            set_fetch
                .arg("--git-dir")
                .arg(mirror_dir)
                .arg("config")
                .arg("--add")
                .arg("remote.origin.fetch")
                .arg(fetch);
            run_command_checked(&mut set_fetch, "configure repository cache fetch refspec")?;
        }

        Ok(())
    }

    fn prune_stale_worktree_entry(&self, mirror_dir: &Path, workspace_dir: &Path) -> AppResult<()> {
        let mut prune = Command::new("git");
        prune
            .arg("--git-dir")
            .arg(mirror_dir)
            .arg("worktree")
            .arg("prune");
        let _ = crate::util::run_command(&mut prune);

        let mut remove = Command::new("git");
        remove
            .arg("--git-dir")
            .arg(mirror_dir)
            .arg("worktree")
            .arg("remove")
            .arg("--force")
            .arg(workspace_dir);
        let _ = crate::util::run_command(&mut remove);
        Ok(())
    }
}
