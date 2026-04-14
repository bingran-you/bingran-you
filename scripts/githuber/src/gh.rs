use std::process::Command;

use crate::task::{
    TaskCandidate, TaskKind, build_assigned_candidate, build_notification_candidate,
    build_review_request_candidate,
};
use crate::util::{AppResult, parse_tsv_line, run_command_checked};

#[derive(Clone, Debug)]
pub struct GhClient {
    host: String,
}

impl GhClient {
    pub fn new(host: String) -> Self {
        Self { host }
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
                tasks.push(task);
            }
        }
        Ok(tasks)
    }

    pub fn review_requests(&self, limit: usize) -> AppResult<Vec<TaskCandidate>> {
        let jq = ".[] | [(.repository.nameWithOwner // \"\"), ((.number | tostring) // \"0\"), (.title // \"\"), (.url // \"\"), (.updatedAt // \"\")] | @tsv";
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
        let stdout = run_command_checked(&mut command, "search review requests")?;
        let mut tasks = Vec::new();
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
        Ok(tasks)
    }

    pub fn assigned_items(&self, limit: usize) -> AppResult<Vec<TaskCandidate>> {
        let jq = ".[] | [(.repository.nameWithOwner // \"\"), ((.number | tostring) // \"0\"), (.title // \"\"), (.url // \"\"), (.updatedAt // \"\"), (if .isPullRequest then \"1\" else \"0\" end)] | @tsv";
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
        let stdout = run_command_checked(&mut command, "search assigned items")?;
        let mut tasks = Vec::new();
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
        Ok(tasks)
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
        tasks.extend(self.unread_notifications()?);
        tasks.extend(self.review_requests(limit)?);
        tasks.extend(self.assigned_items(limit)?);
        tasks.sort_by(|left, right| {
            right
                .priority
                .cmp(&left.priority)
                .then_with(|| right.updated_at.cmp(&left.updated_at))
                .then_with(|| left.thread_key.cmp(&right.thread_key))
        });
        Ok(deduplicate(tasks))
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
    use super::should_ignore_self_authored;
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
}
