use std::process::Command;

use crate::config::RepoFilter;
use crate::task::{
    TaskCandidate, TaskKind, build_assigned_candidate, build_notification_candidate,
    build_review_request_candidate,
};
use crate::util::{AppResult, parse_tsv_line, run_command_checked};

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
}

impl GhClient {
    pub fn new(host: String, repo_filter: RepoFilter) -> Self {
        Self { host, repo_filter }
    }

    pub fn unread_notifications(&self) -> AppResult<Vec<TaskCandidate>> {
        let jq = ".[] | select(.unread == true) | [(.repository.full_name // \"\"), (.subject.type // \"\"), (.reason // \"\"), (.subject.title // \"\"), (.subject.url // \"\"), (.latest_comment_url // \"\"), (.updated_at // \"\")] | @tsv";
        let mut command = Command::new("gh");
        command
            .env("GH_HOST", &self.host)
            .arg("api")
            .arg("/notifications")
            .arg("-H")
            .arg("X-GitHub-Api-Version: 2022-11-28")
            .arg("--jq")
            .arg(jq);
        let stdout = run_command_checked(&mut command, "read notifications")?;
        let mut tasks = Vec::new();
        for line in stdout.lines().filter(|line| !line.trim().is_empty()) {
            let fields = parse_tsv_line(line);
            if fields.len() < 7 {
                continue;
            }
            if let Some(task) = build_notification_candidate(
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
                tasks.push(task);
            }
        }
        Ok(tasks)
    }

    pub fn review_requests(&self, limit: usize) -> AppResult<Vec<TaskCandidate>> {
        let jq = ".[] | [(.repository.nameWithOwner // \"\"), ((.number | tostring) // \"0\"), (.title // \"\"), (.url // \"\"), (.updatedAt // \"\")] | @tsv";
        let mut tasks = Vec::new();
        for scope in self.search_scopes() {
            let mut command = Command::new("gh");
            command
                .env("GH_HOST", &self.host)
                .arg("search")
                .arg("prs")
                .arg("--review-requested=@me")
                .arg("--state")
                .arg("open")
                .arg("--limit")
                .arg(limit.to_string())
                .arg("--json")
                .arg("number,title,url,updatedAt,repository")
                .arg("--jq")
                .arg(jq);
            self.apply_search_scope(&mut command, &scope);
            let stdout = run_command_checked(&mut command, "search review requests")?;
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
            let mut command = Command::new("gh");
            command
                .env("GH_HOST", &self.host)
                .arg("search")
                .arg("issues")
                .arg("--assignee=@me")
                .arg("--state")
                .arg("open")
                .arg("--include-prs")
                .arg("--limit")
                .arg(limit.to_string())
                .arg("--json")
                .arg("number,title,url,updatedAt,repository,isPullRequest")
                .arg("--jq")
                .arg(jq);
            self.apply_search_scope(&mut command, &scope);
            let stdout = run_command_checked(&mut command, "search assigned items")?;
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

    pub fn latest_comment_author(&self, api_url: &str) -> AppResult<Option<String>> {
        if api_url.trim().is_empty() {
            return Ok(None);
        }
        let jq = "[.user.login // \"\", .user.type // \"\"] | @tsv";
        let path = crate::util::canonical_api_path(api_url);
        let mut command = Command::new("gh");
        command
            .env("GH_HOST", &self.host)
            .arg("api")
            .arg(path)
            .arg("--jq")
            .arg(jq);
        let stdout = run_command_checked(&mut command, "inspect latest comment author")?;
        let line = stdout.lines().find(|line| !line.trim().is_empty());
        let Some(line) = line else {
            return Ok(None);
        };
        let fields = parse_tsv_line(line);
        if fields.is_empty() {
            return Ok(None);
        }
        Ok(Some(fields[0].clone()))
    }

    pub fn collect_candidates(&self, limit: usize) -> AppResult<Vec<TaskCandidate>> {
        let mut tasks = Vec::new();
        match self.unread_notifications() {
            Ok(results) => tasks.extend(results),
            Err(error) => eprintln!("githuber: {error}"),
        }
        match self.review_requests(limit) {
            Ok(results) => tasks.extend(results),
            Err(error) => eprintln!("githuber: {error}"),
        }
        match self.assigned_items(limit) {
            Ok(results) => tasks.extend(results),
            Err(error) => eprintln!("githuber: {error}"),
        }
        tasks.retain(|task| self.repo_filter.matches_repo(&task.repo));
        tasks.sort_by(|left, right| {
            right
                .priority
                .cmp(&left.priority)
                .then_with(|| right.updated_at.cmp(&left.updated_at))
                .then_with(|| left.thread_key.cmp(&right.thread_key))
        });
        Ok(deduplicate(tasks))
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

    fn apply_search_scope(&self, command: &mut Command, scope: &SearchScope) {
        match scope {
            SearchScope::All => {}
            SearchScope::Owner(owner) => {
                command.arg("--owner").arg(owner);
            }
            SearchScope::Repo(repo) => {
                command.arg("--repo").arg(repo);
            }
        }
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

pub fn should_ignore_self_authored(
    login: &str,
    latest_comment_author: Option<&str>,
    kind: &TaskKind,
) -> bool {
    match kind {
        TaskKind::ReviewRequest | TaskKind::AssignedIssue | TaskKind::AssignedPullRequest => false,
        _ => latest_comment_author
            .map(|author| author == login || author.ends_with("[bot]"))
            .unwrap_or(false),
    }
}

#[cfg(test)]
mod tests {
    use super::{GhClient, SearchScope, should_ignore_self_authored};
    use crate::config::RepoFilter;
    use crate::task::TaskKind;

    #[test]
    fn ignores_self_authored_comment_events() {
        assert!(should_ignore_self_authored(
            "bingran-you",
            Some("bingran-you"),
            &TaskKind::Comment
        ));
        assert!(!should_ignore_self_authored(
            "bingran-you",
            Some("bingran-you"),
            &TaskKind::ReviewRequest
        ));
    }

    #[test]
    fn expands_owner_and_repo_filters_into_union_scopes() {
        let filter = RepoFilter::parse_csv("KnoWhiz/DoWhiz,agent-team-foundation/*,bingran-you/*")
            .expect("repo filter should parse");
        let client = GhClient::new("github.com".to_string(), filter);

        assert_eq!(
            client.search_scopes(),
            vec![
                SearchScope::Owner("agent-team-foundation".to_string()),
                SearchScope::Owner("bingran-you".to_string()),
                SearchScope::Repo("KnoWhiz/DoWhiz".to_string()),
            ]
        );
    }
}
