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
}

#[derive(Clone, Debug)]
pub struct TaskCandidate {
    pub source: String,
    pub repo: String,
    pub thread_key: String,
    pub kind: TaskKind,
    pub subject_type: String,
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

    pub fn display_url(&self) -> &str {
        if !self.web_url.is_empty() {
            &self.web_url
        } else if !self.api_url.is_empty() {
            &self.api_url
        } else {
            ""
        }
    }

    pub fn slug(&self) -> String {
        let shortened = self
            .title
            .chars()
            .map(|character| {
                if character.is_ascii_alphanumeric() {
                    character.to_ascii_lowercase()
                } else {
                    '-'
                }
            })
            .collect::<String>();
        let collapsed = shortened
            .split('-')
            .filter(|segment| !segment.is_empty())
            .take(8)
            .collect::<Vec<_>>()
            .join("-");
        if collapsed.is_empty() {
            format!("task-{}", &self.stable_id()[..8])
        } else {
            format!("{}-{}", collapsed, &self.stable_id()[..8])
        }
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

    Some(TaskCandidate {
        source: "notifications".to_string(),
        repo,
        thread_key,
        priority: priority_for(&kind, &reason),
        kind,
        subject_type,
        reason,
        title,
        web_url: String::new(),
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
        thread_key: format!("/repos/{repo}/pulls/{number}"),
        kind: TaskKind::ReviewRequest,
        subject_type: "PullRequest".to_string(),
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
        thread_key: format!("/repos/{repo}/{api_suffix}/{number}"),
        kind: kind.clone(),
        subject_type: if is_pull_request {
            "PullRequest".to_string()
        } else {
            "Issue".to_string()
        },
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

#[cfg(test)]
mod tests {
    use super::{
        TaskKind, ThreadRecord, build_notification_candidate, build_review_request_candidate,
        should_process_reason,
    };

    #[test]
    fn notification_priority_prefers_review_requests() {
        let candidate = build_notification_candidate(
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
}
