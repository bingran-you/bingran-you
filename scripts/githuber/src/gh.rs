use std::path::{Path, PathBuf};

use crate::config::RepoFilter;
use crate::gh_executor::{GhBucket, GhCommandSpec, GhExecutor, is_rate_limited};
#[cfg(test)]
use crate::task::TaskKind;
use crate::task::{
    TaskCandidate, build_assigned_candidate, build_notification_candidate,
    build_review_request_candidate,
};
use crate::util::{
    AppResult, ensure_dir, is_recent_github_timestamp, parse_tsv_line, shell_quote, write_lines,
    write_text,
};

#[derive(Clone, Debug, PartialEq, Eq)]
enum SearchScope {
    All,
    Owner(String),
    Repo(String),
}

#[derive(Clone, Debug)]
pub struct GhClient {
    host: String,
    repo_filter: RepoFilter,
    executor: GhExecutor,
}

#[derive(Clone, Debug, Default)]
pub struct CandidatePoll {
    pub tasks: Vec<TaskCandidate>,
    pub warnings: Vec<String>,
    pub search_attempted: bool,
    pub search_rate_limited: bool,
}

#[derive(Clone, Debug, PartialEq, Eq)]
pub struct ThreadActivity {
    pub login: String,
    pub user_type: String,
    pub updated_at: String,
}

impl GhClient {
    pub fn new(host: String, repo_filter: RepoFilter, executor: GhExecutor) -> Self {
        Self {
            host,
            repo_filter,
            executor,
        }
    }

    pub fn recent_notifications(
        &self,
        now_epoch: u64,
        lookback_secs: u64,
    ) -> AppResult<Vec<TaskCandidate>> {
        let jq = ".[] | [(.repository.full_name // \"\"), (.subject.type // \"\"), (.reason // \"\"), (.subject.title // \"\"), (.subject.url // \"\"), (.latest_comment_url // \"\"), (.updated_at // \"\")] | @tsv";
        let stdout = self.run_checked(
            "read recent notifications",
            vec![
                "api".to_string(),
                "/notifications?all=true&participating=false&per_page=100".to_string(),
                "--paginate".to_string(),
                "-H".to_string(),
                "X-GitHub-Api-Version: 2022-11-28".to_string(),
                "--jq".to_string(),
                jq.to_string(),
            ],
            GhBucket::Core,
        )?;
        let mut tasks = Vec::new();
        for line in stdout.lines().filter(|line| !line.trim().is_empty()) {
            let fields = parse_tsv_line(line);
            if fields.len() < 7 {
                continue;
            }
            if let Some(task) = build_notification_candidate(
                &self.host,
                fields[0].clone(),
                fields[1].clone(),
                fields[2].clone(),
                fields[3].clone(),
                fields[4].clone(),
                fields[5].clone(),
                fields[6].clone(),
            ) {
                if !self.repo_filter.matches_repo(&task.repo) {
                    continue;
                }
                if !is_recent_candidate(&task, now_epoch, lookback_secs) {
                    continue;
                }
                tasks.push(task);
            }
        }
        Ok(tasks)
    }

    pub fn review_requests(&self, limit: usize) -> AppResult<Vec<TaskCandidate>> {
        let jq = ".[] | [(.repository.nameWithOwner // \"\"), ((.number | tostring) // \"0\"), (.title // \"\"), (.url // \"\"), (.updatedAt // \"\")] | @tsv";
        let mut tasks = Vec::new();
        for scope in self.search_scopes() {
            let stdout = self.run_checked(
                "search review requests",
                self.with_search_scope(
                    vec![
                        "search".to_string(),
                        "prs".to_string(),
                        "--review-requested=@me".to_string(),
                        "--state".to_string(),
                        "open".to_string(),
                        "--limit".to_string(),
                        limit.to_string(),
                        "--json".to_string(),
                        "number,title,url,updatedAt,repository".to_string(),
                        "--jq".to_string(),
                        jq.to_string(),
                    ],
                    &scope,
                ),
                GhBucket::Search,
            )?;
            for line in stdout.lines().filter(|line| !line.trim().is_empty()) {
                let fields = parse_tsv_line(line);
                if fields.len() < 5 {
                    continue;
                }
                let number = fields[1].parse::<u64>().unwrap_or_default();
                tasks.push(build_review_request_candidate(
                    fields[0].clone(),
                    number,
                    fields[2].clone(),
                    fields[3].clone(),
                    fields[4].clone(),
                ));
            }
        }
        Ok(deduplicate(tasks))
    }

    pub fn assigned_items(&self, limit: usize) -> AppResult<Vec<TaskCandidate>> {
        let jq = ".[] | [(.repository.nameWithOwner // \"\"), ((.number | tostring) // \"0\"), (.title // \"\"), (.url // \"\"), (.updatedAt // \"\"), (if .isPullRequest then \"1\" else \"0\" end)] | @tsv";
        let mut tasks = Vec::new();
        for scope in self.search_scopes() {
            let stdout = self.run_checked(
                "search assigned items",
                self.with_search_scope(
                    vec![
                        "search".to_string(),
                        "issues".to_string(),
                        "--assignee=@me".to_string(),
                        "--state".to_string(),
                        "open".to_string(),
                        "--include-prs".to_string(),
                        "--limit".to_string(),
                        limit.to_string(),
                        "--json".to_string(),
                        "number,title,url,updatedAt,repository,isPullRequest".to_string(),
                        "--jq".to_string(),
                        jq.to_string(),
                    ],
                    &scope,
                ),
                GhBucket::Search,
            )?;
            for line in stdout.lines().filter(|line| !line.trim().is_empty()) {
                let fields = parse_tsv_line(line);
                if fields.len() < 6 {
                    continue;
                }
                let number = fields[1].parse::<u64>().unwrap_or_default();
                let is_pr = fields[5] == "1";
                tasks.push(build_assigned_candidate(
                    fields[0].clone(),
                    number,
                    fields[2].clone(),
                    fields[3].clone(),
                    fields[4].clone(),
                    is_pr,
                ));
            }
        }
        Ok(deduplicate(tasks))
    }

    pub fn latest_comment_activity(&self, api_url: &str) -> AppResult<Option<ThreadActivity>> {
        if api_url.trim().is_empty() {
            return Ok(None);
        }
        let jq = "[.user.login // \"\", .user.type // \"\", (.updated_at // .created_at // \"\")] | @tsv";
        let stdout = self.run_checked(
            "inspect latest comment activity",
            vec![
                "api".to_string(),
                canonical_api_path(api_url),
                "--jq".to_string(),
                jq.to_string(),
            ],
            GhBucket::Core,
        )?;
        Ok(parse_thread_activity(
            stdout.lines().find(|line| !line.trim().is_empty()),
        ))
    }

    pub fn latest_review_activity(
        &self,
        repo: &str,
        pr_number: u64,
    ) -> AppResult<Option<ThreadActivity>> {
        let jq = "if length == 0 then empty else .[-1] | [(.user.login // \"\"), (.user.type // \"\"), (.submitted_at // \"\")] | @tsv end";
        let stdout = self.run_checked(
            "inspect latest review activity",
            vec![
                "api".to_string(),
                format!("/repos/{repo}/pulls/{pr_number}/reviews?per_page=100"),
                "-H".to_string(),
                "X-GitHub-Api-Version: 2022-11-28".to_string(),
                "--jq".to_string(),
                jq.to_string(),
            ],
            GhBucket::Core,
        )?;
        Ok(parse_thread_activity(
            stdout.lines().find(|line| !line.trim().is_empty()),
        ))
    }

    pub fn latest_visible_activity(
        &self,
        task: &TaskCandidate,
    ) -> AppResult<Option<ThreadActivity>> {
        let comment = self.latest_comment_activity(&task.latest_comment_api_url)?;
        let review = match task.pr_number() {
            Some(pr_number) => self.latest_review_activity(&task.repo, pr_number)?,
            None => None,
        };
        Ok(pick_newer_activity(comment, review))
    }

    pub fn collect_candidates(
        &self,
        limit: usize,
        include_search: bool,
        now_epoch: u64,
        lookback_secs: u64,
    ) -> CandidatePoll {
        let mut poll = CandidatePoll::default();

        match self.recent_notifications(now_epoch, lookback_secs) {
            Ok(tasks) => poll.tasks.extend(tasks),
            Err(error) => poll
                .warnings
                .push(format!("notifications: {}", error.to_string().trim())),
        }

        if include_search {
            poll.search_attempted = true;

            match self.review_requests(limit) {
                Ok(tasks) => poll.tasks.extend(tasks),
                Err(error) => {
                    let message = error.to_string();
                    poll.search_rate_limited |= is_rate_limit_error(&message);
                    poll.warnings
                        .push(format!("review search: {}", message.trim()));
                }
            }

            match self.assigned_items(limit) {
                Ok(tasks) => poll.tasks.extend(tasks),
                Err(error) => {
                    let message = error.to_string();
                    poll.search_rate_limited |= is_rate_limit_error(&message);
                    poll.warnings
                        .push(format!("assignment search: {}", message.trim()));
                }
            }
        }

        poll.tasks.retain(|task| {
            self.repo_filter.matches_repo(&task.repo)
                && is_recent_candidate(task, now_epoch, lookback_secs)
        });
        poll.tasks.sort_by(|left, right| {
            right
                .priority
                .cmp(&left.priority)
                .then_with(|| right.updated_at.cmp(&left.updated_at))
                .then_with(|| left.thread_key.cmp(&right.thread_key))
        });
        poll.tasks = deduplicate(poll.tasks);
        poll
    }

    pub fn write_task_snapshot(&self, task: &TaskCandidate, task_dir: &Path) -> AppResult<PathBuf> {
        let snapshot_dir = task_dir.join("snapshot");
        ensure_dir(&snapshot_dir)?;

        let mut notes = Vec::new();
        notes.push(format!("repo={}", task.repo));
        notes.push(format!("thread_key={}", task.thread_key));
        notes.push(format!("kind={}", task.kind.as_str()));
        notes.push(format!("title={}", task.title));
        notes.push(format!("url={}", task.task_url()));
        notes.push(format!("api_url={}", task.api_url));
        notes.push(format!(
            "latest_comment_api_url={}",
            task.latest_comment_api_url
        ));
        notes.push(format!("updated_at={}", task.updated_at));
        write_lines(&snapshot_dir.join("task-summary.env"), &notes)?;

        write_text(
            &snapshot_dir.join("README.txt"),
            &snapshot_readme(task, &snapshot_dir),
        )?;

        if !task.api_url.is_empty() {
            self.capture_snapshot(
                &snapshot_dir,
                "subject.json",
                GhCommandSpec {
                    context: "hydrate task subject".to_string(),
                    cwd: None,
                    envs: self.host_env(),
                    args: vec![
                        "api".to_string(),
                        canonical_api_path(&task.api_url),
                        "-H".to_string(),
                        "X-GitHub-Api-Version: 2022-11-28".to_string(),
                    ],
                    bucket: GhBucket::Core,
                    mutating: false,
                },
            )?;
        }

        if !task.latest_comment_api_url.is_empty() {
            self.capture_snapshot(
                &snapshot_dir,
                "latest-comment.json",
                GhCommandSpec {
                    context: "hydrate latest comment".to_string(),
                    cwd: None,
                    envs: self.host_env(),
                    args: vec![
                        "api".to_string(),
                        canonical_api_path(&task.latest_comment_api_url),
                        "-H".to_string(),
                        "X-GitHub-Api-Version: 2022-11-28".to_string(),
                    ],
                    bucket: GhBucket::Core,
                    mutating: false,
                },
            )?;
        }

        if let Some(number) = task.pr_number() {
            self.capture_snapshot(
                &snapshot_dir,
                "pr-view.json",
                GhCommandSpec {
                    context: "hydrate pr view".to_string(),
                    cwd: None,
                    envs: self.host_env(),
                    args: vec![
                        "pr".to_string(),
                        "view".to_string(),
                        number.to_string(),
                        "--repo".to_string(),
                        task.repo.clone(),
                        "--json".to_string(),
                        "number,title,body,author,headRefName,headRefOid,baseRefName,url,isDraft,state".to_string(),
                    ],
                    bucket: GhBucket::Core,
                    mutating: false,
                },
            )?;
            self.capture_snapshot(
                &snapshot_dir,
                "pr.diff",
                GhCommandSpec {
                    context: "hydrate pr diff".to_string(),
                    cwd: None,
                    envs: self.host_env(),
                    args: vec![
                        "pr".to_string(),
                        "diff".to_string(),
                        number.to_string(),
                        "--repo".to_string(),
                        task.repo.clone(),
                    ],
                    bucket: GhBucket::Core,
                    mutating: false,
                },
            )?;
            self.capture_snapshot(
                &snapshot_dir,
                "issue-comments.json",
                GhCommandSpec {
                    context: "hydrate issue comments".to_string(),
                    cwd: None,
                    envs: self.host_env(),
                    args: vec![
                        "api".to_string(),
                        format!("/repos/{}/issues/{number}/comments?per_page=100", task.repo),
                        "-H".to_string(),
                        "X-GitHub-Api-Version: 2022-11-28".to_string(),
                    ],
                    bucket: GhBucket::Core,
                    mutating: false,
                },
            )?;
            self.capture_snapshot(
                &snapshot_dir,
                "pr-reviews.json",
                GhCommandSpec {
                    context: "hydrate pr reviews".to_string(),
                    cwd: None,
                    envs: self.host_env(),
                    args: vec![
                        "api".to_string(),
                        format!("/repos/{}/pulls/{number}/reviews?per_page=100", task.repo),
                        "-H".to_string(),
                        "X-GitHub-Api-Version: 2022-11-28".to_string(),
                    ],
                    bucket: GhBucket::Core,
                    mutating: false,
                },
            )?;
        } else if let Some(number) = task.issue_number() {
            self.capture_snapshot(
                &snapshot_dir,
                "issue-view.json",
                GhCommandSpec {
                    context: "hydrate issue view".to_string(),
                    cwd: None,
                    envs: self.host_env(),
                    args: vec![
                        "issue".to_string(),
                        "view".to_string(),
                        number.to_string(),
                        "--repo".to_string(),
                        task.repo.clone(),
                        "--json".to_string(),
                        "number,title,body,author,labels,assignees,state,url".to_string(),
                    ],
                    bucket: GhBucket::Core,
                    mutating: false,
                },
            )?;
            self.capture_snapshot(
                &snapshot_dir,
                "issue-comments.json",
                GhCommandSpec {
                    context: "hydrate issue comments".to_string(),
                    cwd: None,
                    envs: self.host_env(),
                    args: vec![
                        "api".to_string(),
                        format!("/repos/{}/issues/{number}/comments?per_page=100", task.repo),
                        "-H".to_string(),
                        "X-GitHub-Api-Version: 2022-11-28".to_string(),
                    ],
                    bucket: GhBucket::Core,
                    mutating: false,
                },
            )?;
        }

        Ok(snapshot_dir)
    }

    fn capture_snapshot(
        &self,
        snapshot_dir: &Path,
        filename: &str,
        spec: GhCommandSpec,
    ) -> AppResult<()> {
        let output = self.executor.run(&spec)?;
        let output_path = snapshot_dir.join(filename);
        write_text(&output_path, &output.stdout)?;

        let log_path = snapshot_dir.join(format!("{filename}.meta"));
        let mut lines = vec![
            format!("context={}", spec.context),
            format!(
                "command={}",
                spec.args
                    .iter()
                    .map(|arg| shell_quote(arg))
                    .collect::<Vec<_>>()
                    .join(" ")
            ),
            format!("status_code={}", output.status_code),
            format!("bucket={}", bucket_name(spec.bucket)),
            format!("mutating={}", spec.mutating),
        ];

        if !output.stderr.trim().is_empty() {
            write_text(
                &snapshot_dir.join(format!("{filename}.stderr")),
                &output.stderr,
            )?;
            lines.push(format!(
                "stderr_file={}",
                snapshot_dir.join(format!("{filename}.stderr")).display()
            ));
        }

        lines.push(if output.status_code == 0 {
            "snapshot_status=ok".to_string()
        } else {
            "snapshot_status=partial".to_string()
        });

        write_lines(&log_path, &lines)?;
        Ok(())
    }

    fn run_checked(&self, context: &str, args: Vec<String>, bucket: GhBucket) -> AppResult<String> {
        self.executor.run_checked(&GhCommandSpec {
            context: context.to_string(),
            cwd: None,
            envs: self.host_env(),
            args,
            bucket,
            mutating: false,
        })
    }

    fn host_env(&self) -> Vec<(String, String)> {
        vec![("GH_HOST".to_string(), self.host.clone())]
    }

    fn search_scopes(&self) -> Vec<SearchScope> {
        if self.repo_filter.is_empty() {
            return vec![SearchScope::All];
        }

        let mut scopes = Vec::new();
        for owner in self.repo_filter.owners() {
            scopes.push(SearchScope::Owner(owner.clone()));
        }
        for repo in self.repo_filter.repos() {
            scopes.push(SearchScope::Repo(repo.clone()));
        }
        if scopes.is_empty() {
            scopes.push(SearchScope::All);
        }
        scopes
    }

    fn with_search_scope(&self, mut args: Vec<String>, scope: &SearchScope) -> Vec<String> {
        match scope {
            SearchScope::All => {}
            SearchScope::Owner(owner) => {
                args.push("--owner".to_string());
                args.push(owner.clone());
            }
            SearchScope::Repo(repo) => {
                args.push("--repo".to_string());
                args.push(repo.clone());
            }
        }
        args
    }
}

fn is_recent_candidate(task: &TaskCandidate, now_epoch: u64, lookback_secs: u64) -> bool {
    is_recent_github_timestamp(&task.updated_at, now_epoch, lookback_secs)
}

fn parse_thread_activity(line: Option<&str>) -> Option<ThreadActivity> {
    let line = line?;
    let fields = parse_tsv_line(line);
    if fields.len() < 3 {
        return None;
    }
    Some(ThreadActivity {
        login: fields[0].clone(),
        user_type: fields[1].clone(),
        updated_at: fields[2].clone(),
    })
}

fn pick_newer_activity(
    left: Option<ThreadActivity>,
    right: Option<ThreadActivity>,
) -> Option<ThreadActivity> {
    match (left, right) {
        (Some(left), Some(right)) => {
            if right.updated_at > left.updated_at {
                Some(right)
            } else {
                Some(left)
            }
        }
        (Some(left), None) => Some(left),
        (None, Some(right)) => Some(right),
        (None, None) => None,
    }
}

fn deduplicate(tasks: Vec<TaskCandidate>) -> Vec<TaskCandidate> {
    let mut seen = std::collections::HashSet::new();
    let mut unique = Vec::new();
    for task in tasks {
        let key = task.thread_key.clone();
        if seen.insert(key) {
            unique.push(task);
        }
    }
    unique
}

#[cfg(test)]
pub fn should_ignore_self_authored(
    login: &str,
    latest_comment_author: Option<&str>,
    kind: &TaskKind,
) -> bool {
    match kind {
        TaskKind::ReviewRequest | TaskKind::AssignedIssue | TaskKind::AssignedPullRequest => false,
        TaskKind::Mention => latest_comment_author
            .map(|author| author.ends_with("[bot]"))
            .unwrap_or(false),
        _ => latest_comment_author
            .map(|author| author == login || author.ends_with("[bot]"))
            .unwrap_or(false),
    }
}

pub fn should_ignore_latest_self_activity(
    login: &str,
    activity: Option<&ThreadActivity>,
    task_updated_at: &str,
) -> bool {
    let Some(activity) = activity else {
        return false;
    };
    if activity.updated_at.as_str() < task_updated_at {
        return false;
    }
    is_self_or_bot_actor(login, &activity.login, &activity.user_type)
}

fn is_self_or_bot_actor(login: &str, actor_login: &str, actor_type: &str) -> bool {
    !actor_login.trim().is_empty()
        && (actor_login == login || actor_login.ends_with("[bot]") || actor_type == "Bot")
}

pub fn is_rate_limit_error(message: &str) -> bool {
    is_rate_limited(&crate::util::ExecOutput {
        stdout: String::new(),
        stderr: message.to_string(),
        status_code: 1,
    })
}

fn bucket_name(bucket: GhBucket) -> &'static str {
    match bucket {
        GhBucket::Core => "core",
        GhBucket::Search => "search",
        GhBucket::Write => "write",
    }
}

fn canonical_api_path(url: &str) -> String {
    crate::util::canonical_api_path(url)
}

fn snapshot_readme(task: &TaskCandidate, snapshot_dir: &Path) -> String {
    format!(
        "githuber prepared this local snapshot before the agent started.\n\
\n\
Use these files first to avoid redundant GitHub API calls.\n\
\n\
- Task summary: {task_summary}\n\
- Primary subject payload: {subject}\n\
- Latest comment payload: {latest_comment}\n\
- PR or issue material is stored next to those files when available.\n\
\n\
If you still need `gh`, githuber will broker and pace the command automatically.\n\
\n\
Task: {kind} in {repo}\n\
Title: {title}\n\
URL: {url}\n",
        task_summary = snapshot_dir.join("task-summary.env").display(),
        subject = snapshot_dir.join("subject.json").display(),
        latest_comment = snapshot_dir.join("latest-comment.json").display(),
        kind = task.kind.as_str(),
        repo = task.repo,
        title = task.title,
        url = task.task_url(),
    )
}

#[cfg(test)]
mod tests {
    use super::{
        GhClient, SearchScope, ThreadActivity, is_rate_limit_error, pick_newer_activity,
        should_ignore_latest_self_activity, should_ignore_self_authored,
    };
    use crate::config::RepoFilter;
    use crate::gh_executor::GhExecutor;
    use crate::task::TaskKind;
    use std::path::PathBuf;

    #[test]
    fn ignores_self_authored_comment_events_but_keeps_mentions() {
        assert!(should_ignore_self_authored(
            "bingran-you",
            Some("bingran-you"),
            &TaskKind::Comment
        ));
        assert!(!should_ignore_self_authored(
            "bingran-you",
            Some("bingran-you"),
            &TaskKind::Mention
        ));
        assert!(!should_ignore_self_authored(
            "bingran-you",
            Some("bingran-you"),
            &TaskKind::ReviewRequest
        ));
    }

    #[test]
    fn still_ignores_bot_authored_mentions() {
        assert!(should_ignore_self_authored(
            "bingran-you",
            Some("github-actions[bot]"),
            &TaskKind::Mention
        ));
    }

    #[test]
    fn prefers_newer_thread_activity() {
        let older = ThreadActivity {
            login: "alice".to_string(),
            user_type: "User".to_string(),
            updated_at: "2026-04-15T05:16:22Z".to_string(),
        };
        let newer = ThreadActivity {
            login: "bingran-you".to_string(),
            user_type: "User".to_string(),
            updated_at: "2026-04-15T05:16:25Z".to_string(),
        };

        assert_eq!(
            pick_newer_activity(Some(older), Some(newer.clone())),
            Some(newer)
        );
    }

    #[test]
    fn ignores_latest_self_activity_only_when_it_is_current() {
        let current = ThreadActivity {
            login: "bingran-you".to_string(),
            user_type: "User".to_string(),
            updated_at: "2026-04-15T05:16:25Z".to_string(),
        };
        let stale = ThreadActivity {
            login: "bingran-you".to_string(),
            user_type: "User".to_string(),
            updated_at: "2026-04-15T05:16:20Z".to_string(),
        };

        assert!(should_ignore_latest_self_activity(
            "bingran-you",
            Some(&current),
            "2026-04-15T05:16:25Z"
        ));
        assert!(!should_ignore_latest_self_activity(
            "bingran-you",
            Some(&stale),
            "2026-04-15T05:16:25Z"
        ));
    }

    #[test]
    fn flags_rate_limit_messages() {
        assert!(is_rate_limit_error("secondary rate limit"));
    }

    #[test]
    fn can_construct_client() {
        let executor = GhExecutor::new(PathBuf::from("/usr/bin/gh"), 1_000);
        let client = GhClient::new("github.com".to_string(), RepoFilter::default(), executor);
        assert_eq!(client.host, "github.com");
    }

    #[test]
    fn repo_filter_creates_scoped_search_queries() {
        let executor = GhExecutor::new(PathBuf::from("/usr/bin/gh"), 1_000);
        let filter = RepoFilter::parse_csv("agent-team-foundation/*,bingran-you/repo")
            .expect("filter should parse");
        let client = GhClient::new("github.com".to_string(), filter, executor);
        let scopes = client.search_scopes();

        assert!(scopes.contains(&SearchScope::Owner("agent-team-foundation".to_string())));
        assert!(scopes.contains(&SearchScope::Repo("bingran-you/repo".to_string())));
    }
}
