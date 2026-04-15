use std::collections::HashMap;

use crate::util::{canonical_api_path, decode_multiline, encode_multiline, stable_file_id};

#[derive(Clone, Debug, PartialEq, Eq)]
pub enum TaskKind {
    ReviewRequest,
    Mention,
    Comment,
    AssignedIssue,
    AssignedPullRequest,
    Discussion,
    Other,
}

impl TaskKind {
    pub fn as_str(&self) -> &'static str {
        match self {
            TaskKind::ReviewRequest => "review_request",
            TaskKind::Mention => "mention",
            TaskKind::Comment => "comment",
            TaskKind::AssignedIssue => "assigned_issue",
            TaskKind::AssignedPullRequest => "assigned_pull_request",
            TaskKind::Discussion => "discussion",
            TaskKind::Other => "other",
        }
    }

    pub fn from_str(value: &str) -> Option<Self> {
        Some(match value {
            "review_request" => TaskKind::ReviewRequest,
            "mention" => TaskKind::Mention,
            "comment" => TaskKind::Comment,
            "assigned_issue" => TaskKind::AssignedIssue,
            "assigned_pull_request" => TaskKind::AssignedPullRequest,
            "discussion" => TaskKind::Discussion,
            "other" => TaskKind::Other,
            _ => return None,
        })
    }
}

#[derive(Clone, Debug)]
pub struct TaskCandidate {
    pub source: String,
    pub repo: String,
    pub workspace_repo: String,
    pub thread_key: String,
    pub kind: TaskKind,
    pub reason: String,
    pub title: String,
    pub web_url: String,
    pub api_url: String,
    pub latest_comment_api_url: String,
    pub updated_at: String,
    pub priority: u8,
}

impl TaskCandidate {
    pub fn stable_id(&self) -> String {
        stable_file_id(&format!(
            "{}|{}|{}|{}|{}",
            self.thread_key,
            self.updated_at,
            self.repo,
            self.kind.as_str(),
            self.source
        ))
    }

    pub fn workspace_repo(&self) -> &str {
        if self.workspace_repo.trim().is_empty() {
            &self.repo
        } else {
            &self.workspace_repo
        }
    }

    pub fn display_url(&self) -> &str {
        if !self.web_url.is_empty() {
            &self.web_url
        } else if !self.api_url.is_empty() {
            &self.api_url
        } else {
            ""
        }
    }

    pub fn task_url(&self) -> String {
        if let Some(comment_url) = self.latest_comment_web_url() {
            return comment_url;
        }
        self.display_url().to_string()
    }

    pub fn pr_number(&self) -> Option<u64> {
        let candidates = [
            self.web_url.as_str(),
            self.api_url.as_str(),
            self.thread_key.as_str(),
        ];
        for candidate in candidates {
            if let Some(number) = extract_pr_number(candidate) {
                return Some(number);
            }
        }
        None
    }

    pub fn issue_number(&self) -> Option<u64> {
        let candidates = [
            self.web_url.as_str(),
            self.api_url.as_str(),
            self.thread_key.as_str(),
        ];
        for candidate in candidates {
            if let Some(number) = extract_issue_number(candidate) {
                return Some(number);
            }
        }
        None
    }

    fn latest_comment_web_url(&self) -> Option<String> {
        if self.latest_comment_api_url.is_empty() {
            return None;
        }
        if let Some(comment_id) = extract_issue_comment_id(&self.latest_comment_api_url) {
            let base = if !self.web_url.is_empty() {
                self.web_url.clone()
            } else if let Some(derived) = derive_web_url("github.com", &self.repo, &self.thread_key)
            {
                derived
            } else {
                return None;
            };
            return Some(format!("{base}#issuecomment-{comment_id}"));
        }
        None
    }

    pub fn from_task_metadata(metadata: &HashMap<String, String>, host: &str) -> Option<Self> {
        let repo = metadata.get("repo")?.trim().to_string();
        let thread_key = metadata.get("thread_key")?.trim().to_string();
        let kind = TaskKind::from_str(metadata.get("kind")?.trim())?;
        let reason = metadata.get("reason").cloned().unwrap_or_default();
        let title = metadata
            .get("title")
            .map(|value| decode_multiline(value))
            .unwrap_or_default();
        let updated_at = metadata.get("updated_at").cloned().unwrap_or_default();
        let source = metadata
            .get("source")
            .cloned()
            .unwrap_or_else(|| "recovered-running".to_string());

        let api_url = if thread_key.starts_with("/repos/") {
            format!("https://api.github.com{thread_key}")
        } else {
            metadata.get("api_url").cloned().unwrap_or_default()
        };
        let web_url = metadata
            .get("web_url")
            .cloned()
            .filter(|value| !value.trim().is_empty())
            .or_else(|| derive_web_url(host, &repo, &thread_key));
        let latest_comment_api_url = metadata
            .get("latest_comment_api_url")
            .cloned()
            .unwrap_or_default();

        Some(TaskCandidate {
            source,
            repo,
            workspace_repo: metadata
                .get("workspace_repo")
                .cloned()
                .filter(|value| !value.trim().is_empty())
                .unwrap_or_else(|| metadata.get("repo").cloned().unwrap_or_default()),
            thread_key,
            kind: kind.clone(),
            reason: reason.clone(),
            title,
            web_url: web_url.unwrap_or_default(),
            api_url,
            latest_comment_api_url,
            updated_at,
            priority: priority_for(&kind, &reason),
        })
    }
}

#[derive(Clone, Debug, Default)]
pub struct ThreadRecord {
    pub thread_key: String,
    pub repo: String,
    pub last_seen_updated_at: String,
    pub last_handled_updated_at: String,
    pub last_result: String,
    pub failure_count: u32,
    pub next_retry_epoch: u64,
    pub last_task_id: String,
}

impl ThreadRecord {
    pub fn to_lines(&self) -> Vec<String> {
        vec![
            format!("thread_key={}", encode_multiline(&self.thread_key)),
            format!("repo={}", encode_multiline(&self.repo)),
            format!(
                "last_seen_updated_at={}",
                encode_multiline(&self.last_seen_updated_at)
            ),
            format!(
                "last_handled_updated_at={}",
                encode_multiline(&self.last_handled_updated_at)
            ),
            format!("last_result={}", encode_multiline(&self.last_result)),
            format!("failure_count={}", self.failure_count),
            format!("next_retry_epoch={}", self.next_retry_epoch),
            format!("last_task_id={}", encode_multiline(&self.last_task_id)),
        ]
    }

    pub fn from_kv(entries: &[(String, String)]) -> Self {
        let mut record = Self::default();
        for (key, value) in entries {
            match key.as_str() {
                "thread_key" => record.thread_key = decode_multiline(value),
                "repo" => record.repo = decode_multiline(value),
                "last_seen_updated_at" => record.last_seen_updated_at = decode_multiline(value),
                "last_handled_updated_at" => {
                    record.last_handled_updated_at = decode_multiline(value)
                }
                "last_result" => record.last_result = decode_multiline(value),
                "failure_count" => record.failure_count = value.parse::<u32>().unwrap_or_default(),
                "next_retry_epoch" => {
                    record.next_retry_epoch = value.parse::<u64>().unwrap_or_default()
                }
                "last_task_id" => record.last_task_id = decode_multiline(value),
                _ => {}
            }
        }
        record
    }
}

pub fn build_notification_candidate(
    host: &str,
    repo: String,
    subject_type: String,
    reason: String,
    title: String,
    api_url: String,
    latest_comment_api_url: String,
    updated_at: String,
) -> Option<TaskCandidate> {
    if repo.is_empty() {
        return None;
    }
    let kind = classify_notification(&subject_type, &reason);
    if kind == TaskKind::Other || !should_process_reason(&reason) {
        return None;
    }

    let thread_key = if !api_url.is_empty() {
        canonical_api_path(&api_url)
    } else if !latest_comment_api_url.is_empty() {
        canonical_api_path(&latest_comment_api_url)
    } else {
        format!("notification::{repo}::{subject_type}::{title}")
    };
    let web_url = derive_web_url(host, &repo, &thread_key).unwrap_or_default();

    Some(TaskCandidate {
        source: "notifications".to_string(),
        workspace_repo: repo.clone(),
        repo,
        thread_key,
        priority: priority_for(&kind, &reason),
        kind,
        reason,
        title,
        web_url,
        api_url,
        latest_comment_api_url,
        updated_at,
    })
}

pub fn build_review_request_candidate(
    repo: String,
    number: u64,
    title: String,
    web_url: String,
    updated_at: String,
) -> TaskCandidate {
    TaskCandidate {
        source: "review-search".to_string(),
        repo: repo.clone(),
        workspace_repo: repo.clone(),
        thread_key: format!("/repos/{repo}/pulls/{number}"),
        kind: TaskKind::ReviewRequest,
        reason: "review_requested".to_string(),
        title,
        web_url,
        api_url: format!("https://api.github.com/repos/{repo}/pulls/{number}"),
        latest_comment_api_url: String::new(),
        updated_at,
        priority: priority_for(&TaskKind::ReviewRequest, "review_requested"),
    }
}

pub fn build_assigned_candidate(
    repo: String,
    number: u64,
    title: String,
    web_url: String,
    updated_at: String,
    is_pull_request: bool,
) -> TaskCandidate {
    let kind = if is_pull_request {
        TaskKind::AssignedPullRequest
    } else {
        TaskKind::AssignedIssue
    };
    let api_suffix = if is_pull_request { "pulls" } else { "issues" };
    TaskCandidate {
        source: "assigned-search".to_string(),
        repo: repo.clone(),
        workspace_repo: repo.clone(),
        thread_key: format!("/repos/{repo}/{api_suffix}/{number}"),
        kind: kind.clone(),
        reason: "assigned".to_string(),
        title,
        web_url,
        api_url: format!("https://api.github.com/repos/{repo}/{api_suffix}/{number}"),
        latest_comment_api_url: String::new(),
        updated_at,
        priority: priority_for(&kind, "assigned"),
    }
}

pub fn should_process_reason(reason: &str) -> bool {
    matches!(
        reason,
        "review_requested"
            | "comment"
            | "mention"
            | "team_mention"
            | "assign"
            | "author"
            | "manual"
    )
}

pub fn priority_for(kind: &TaskKind, reason: &str) -> u8 {
    match kind {
        TaskKind::ReviewRequest => 100,
        TaskKind::Mention => 95,
        TaskKind::Discussion => 90,
        TaskKind::Comment => 85,
        TaskKind::AssignedPullRequest => 80,
        TaskKind::AssignedIssue => 70,
        TaskKind::Other => {
            if reason == "review_requested" {
                100
            } else {
                50
            }
        }
    }
}

pub fn classify_notification(subject_type: &str, reason: &str) -> TaskKind {
    if reason == "review_requested" {
        return TaskKind::ReviewRequest;
    }
    if reason == "mention" || reason == "team_mention" {
        return TaskKind::Mention;
    }
    if subject_type.contains("Discussion") {
        return TaskKind::Discussion;
    }
    if reason == "comment" || reason == "author" || reason == "manual" {
        return TaskKind::Comment;
    }
    if reason == "assign" {
        if subject_type == "PullRequest" {
            return TaskKind::AssignedPullRequest;
        }
        return TaskKind::AssignedIssue;
    }
    TaskKind::Other
}

fn extract_pr_number(value: &str) -> Option<u64> {
    for marker in ["/pull/", "/pulls/"] {
        if let Some(position) = value.find(marker) {
            let suffix = &value[position + marker.len()..];
            let digits = suffix
                .chars()
                .take_while(|character| character.is_ascii_digit())
                .collect::<String>();
            if let Ok(number) = digits.parse::<u64>() {
                return Some(number);
            }
        }
    }
    None
}

fn extract_issue_number(value: &str) -> Option<u64> {
    if let Some(position) = value.find("/issues/") {
        let suffix = &value[position + "/issues/".len()..];
        let digits = suffix
            .chars()
            .take_while(|character| character.is_ascii_digit())
            .collect::<String>();
        if let Ok(number) = digits.parse::<u64>() {
            return Some(number);
        }
    }
    None
}

fn derive_web_url(host: &str, repo: &str, thread_key: &str) -> Option<String> {
    if let Some(number) = extract_pr_number(thread_key) {
        return Some(format!("https://{host}/{repo}/pull/{number}"));
    }
    if let Some(number) = extract_issue_number(thread_key) {
        return Some(format!("https://{host}/{repo}/issues/{number}"));
    }
    None
}

fn extract_issue_comment_id(value: &str) -> Option<u64> {
    if let Some(position) = value.find("/issues/comments/") {
        let suffix = &value[position + "/issues/comments/".len()..];
        let digits = suffix
            .chars()
            .take_while(|character| character.is_ascii_digit())
            .collect::<String>();
        if let Ok(number) = digits.parse::<u64>() {
            return Some(number);
        }
    }
    None
}

#[cfg(test)]
mod tests {
    use super::{
        TaskCandidate, TaskKind, ThreadRecord, build_notification_candidate,
        build_review_request_candidate, should_process_reason,
    };
    use std::collections::HashMap;

    #[test]
    fn notification_priority_prefers_review_requests() {
        let candidate = build_notification_candidate(
            "github.com",
            "owner/repo".to_string(),
            "PullRequest".to_string(),
            "review_requested".to_string(),
            "Review me".to_string(),
            "https://api.github.com/repos/owner/repo/pulls/12".to_string(),
            String::new(),
            "2026-01-01T00:00:00Z".to_string(),
        )
        .expect("candidate should exist");

        assert_eq!(candidate.kind, TaskKind::ReviewRequest);
        assert_eq!(candidate.priority, 100);
        assert_eq!(candidate.pr_number(), Some(12));
    }

    #[test]
    fn review_request_search_matches_pr_number() {
        let candidate = build_review_request_candidate(
            "owner/repo".to_string(),
            45,
            "Handle review".to_string(),
            "https://github.com/owner/repo/pull/45".to_string(),
            "2026-01-01T00:00:00Z".to_string(),
        );

        assert_eq!(candidate.pr_number(), Some(45));
    }

    #[test]
    fn mention_notifications_build_candidates_for_prs() {
        let candidate = build_notification_candidate(
            "github.com",
            "agent-team-foundation/first-tree".to_string(),
            "PullRequest".to_string(),
            "mention".to_string(),
            "fix(sync): strip AI frontmatter, inherit owners, dedup members, verify before push"
                .to_string(),
            "https://api.github.com/repos/agent-team-foundation/first-tree/pulls/98".to_string(),
            "https://api.github.com/repos/agent-team-foundation/first-tree/issues/comments/4247540715"
                .to_string(),
            "2026-04-14T22:18:56Z".to_string(),
        )
        .expect("candidate should exist");

        assert_eq!(candidate.kind, TaskKind::Mention);
        assert_eq!(candidate.repo, "agent-team-foundation/first-tree");
        assert_eq!(candidate.pr_number(), Some(98));
        assert_eq!(
            candidate.latest_comment_api_url,
            "https://api.github.com/repos/agent-team-foundation/first-tree/issues/comments/4247540715"
        );
        assert_eq!(
            candidate.task_url(),
            "https://github.com/agent-team-foundation/first-tree/pull/98#issuecomment-4247540715"
        );
    }

    #[test]
    fn thread_record_round_trips() {
        let record = ThreadRecord {
            thread_key: "/repos/owner/repo/issues/1".to_string(),
            repo: "owner/repo".to_string(),
            last_seen_updated_at: "2026-01-01T00:00:00Z".to_string(),
            last_handled_updated_at: "2026-01-01T00:00:00Z".to_string(),
            last_result: "handled".to_string(),
            failure_count: 2,
            next_retry_epoch: 1234,
            last_task_id: "task-1".to_string(),
        };
        let entries = record
            .to_lines()
            .into_iter()
            .filter_map(|line| {
                line.split_once('=')
                    .map(|(k, v)| (k.to_string(), v.to_string()))
            })
            .collect::<Vec<_>>();
        let restored = ThreadRecord::from_kv(&entries);

        assert_eq!(restored.thread_key, record.thread_key);
        assert_eq!(restored.failure_count, 2);
        assert!(should_process_reason("comment"));
        assert!(!should_process_reason("ci_activity"));
    }

    #[test]
    fn restores_candidate_from_task_metadata() {
        let metadata = HashMap::from([
            ("repo".to_string(), "owner/repo".to_string()),
            ("workspace_repo".to_string(), "bingran-you/bingran-you".to_string()),
            (
                "thread_key".to_string(),
                "/repos/owner/repo/pulls/12".to_string(),
            ),
            ("kind".to_string(), "review_request".to_string()),
            ("reason".to_string(), "review_requested".to_string()),
            ("title".to_string(), "Recover me".to_string()),
            ("updated_at".to_string(), "2026-01-01T00:00:00Z".to_string()),
            ("source".to_string(), "review-search".to_string()),
        ]);

        let candidate =
            TaskCandidate::from_task_metadata(&metadata, "github.com").expect("candidate");
        assert_eq!(candidate.kind, TaskKind::ReviewRequest);
        assert_eq!(
            candidate.api_url,
            "https://api.github.com/repos/owner/repo/pulls/12"
        );
        assert_eq!(candidate.web_url, "https://github.com/owner/repo/pull/12");
        assert_eq!(candidate.workspace_repo(), "bingran-you/bingran-you");
    }

    #[test]
    fn task_url_falls_back_to_issue_or_pr_url_when_no_comment_anchor_exists() {
        let candidate = build_notification_candidate(
            "github.com",
            "owner/repo".to_string(),
            "Issue".to_string(),
            "comment".to_string(),
            "Handle me".to_string(),
            "https://api.github.com/repos/owner/repo/issues/7".to_string(),
            String::new(),
            "2026-01-01T00:00:00Z".to_string(),
        )
        .expect("candidate should exist");

        assert_eq!(candidate.task_url(), "https://github.com/owner/repo/issues/7");
    }
}
