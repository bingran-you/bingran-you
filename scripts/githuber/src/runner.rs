use std::env;
use std::fs::File;
use std::path::PathBuf;
use std::process::{Command, Stdio};
use std::sync::Mutex;

use crate::config::{Config, RunnerKind};
use crate::identity::Identity;
use crate::task::{TaskCandidate, TaskKind};
use crate::util::{AppResult, app_error, read_text_if_exists, which};

#[derive(Clone, Debug)]
pub struct RunnerSpec {
    pub kind: RunnerKind,
    pub model: Option<String>,
}

#[derive(Debug)]
pub struct RunnerPool {
    runners: Vec<RunnerSpec>,
    next_index: Mutex<usize>,
}

#[derive(Clone, Debug)]
pub struct RunnerRequest {
    pub task: TaskCandidate,
    pub task_id: String,
    pub task_dir: PathBuf,
    pub workspace_dir: PathBuf,
    pub snapshot_dir: PathBuf,
    pub gh_shim_dir: PathBuf,
    pub gh_broker_dir: PathBuf,
    pub identity: Identity,
    pub disclosure_text: String,
}

#[derive(Clone, Debug)]
pub struct RunnerOutcome {
    pub status: String,
    pub summary: String,
    pub output_path: PathBuf,
}

impl RunnerPool {
    pub fn detect(config: &Config) -> AppResult<Self> {
        let mut runners = Vec::new();
        for runner in &config.runners {
            if which(runner.binary_name()).is_none() {
                continue;
            }
            let model = match runner {
                RunnerKind::Codex => config.codex_model.clone(),
                RunnerKind::Claude => config.claude_model.clone(),
            };
            runners.push(RunnerSpec {
                kind: runner.clone(),
                model,
            });
        }
        if runners.is_empty() {
            return Err(app_error(
                "no configured runner binary is available in PATH (need codex and/or claude)",
            ));
        }
        Ok(Self {
            runners,
            next_index: Mutex::new(0),
        })
    }

    pub fn available_names(&self) -> Vec<String> {
        self.runners
            .iter()
            .map(|runner| runner.kind.as_str().to_string())
            .collect()
    }

    pub fn execution_order(&self) -> Vec<RunnerSpec> {
        let mut index = self.next_index.lock().expect("runner pool poisoned");
        let start = *index % self.runners.len();
        *index = (*index + 1) % self.runners.len();
        (0..self.runners.len())
            .map(|offset| self.runners[(start + offset) % self.runners.len()].clone())
            .collect()
    }
}

impl RunnerSpec {
    pub fn execute(&self, request: &RunnerRequest) -> AppResult<RunnerOutcome> {
        let prompt = build_prompt(request);
        let prompt_path = request.task_dir.join("prompt.txt");
        let output_path = request.task_dir.join("runner-output.txt");
        let stdout_path = request.task_dir.join("runner-stdout.log");
        let stderr_path = request.task_dir.join("runner-stderr.log");

        crate::util::write_text(&prompt_path, &prompt)?;
        let stdout_file = File::create(&stdout_path)?;
        let stderr_file = File::create(&stderr_path)?;
        let path = format!(
            "{}:{}",
            request.gh_shim_dir.display(),
            env::var("PATH").unwrap_or_default()
        );

        let status = match self.kind {
            RunnerKind::Codex => {
                let mut command = Command::new("codex");
                command
                    .arg("exec")
                    .arg("--cd")
                    .arg(&request.workspace_dir)
                    .arg("--dangerously-bypass-approvals-and-sandbox")
                    .arg("--output-last-message")
                    .arg(&output_path);
                if let Some(model) = &self.model {
                    command.arg("--model").arg(model);
                }
                command
                    .env("PATH", &path)
                    .env("GITHUBER_BROKER_DIR", &request.gh_broker_dir)
                    .env("GITHUBER_SNAPSHOT_DIR", &request.snapshot_dir)
                    .env("GITHUBER_TASK_DIR", &request.task_dir);
                command.arg(&prompt_path);
                command.stdout(Stdio::from(stdout_file));
                command.stderr(Stdio::from(stderr_file));
                command.status()?
            }
            RunnerKind::Claude => {
                let mut command = Command::new("claude");
                command
                    .current_dir(&request.workspace_dir)
                    .arg("-p")
                    .arg("--permission-mode")
                    .arg("bypassPermissions");
                if let Some(model) = &self.model {
                    command.arg("--model").arg(model);
                }
                command
                    .env("PATH", &path)
                    .env("GITHUBER_BROKER_DIR", &request.gh_broker_dir)
                    .env("GITHUBER_SNAPSHOT_DIR", &request.snapshot_dir)
                    .env("GITHUBER_TASK_DIR", &request.task_dir);
                command.arg(&prompt);
                command.stdout(Stdio::from(stdout_file));
                command.stderr(Stdio::from(stderr_file));
                let status = command.status()?;
                let stdout = read_text_if_exists(&stdout_path)?.unwrap_or_default();
                crate::util::write_text(&output_path, &stdout)?;
                status
            }
        };

        if !status.success() {
            return Err(app_error(format!(
                "{} runner exited with status {:?}",
                self.kind.as_str(),
                status.code()
            )));
        }

        let response = read_text_if_exists(&output_path)?.unwrap_or_default();
        let parsed = parse_result(&response);

        Ok(RunnerOutcome {
            status: parsed.0,
            summary: parsed.1,
            output_path,
        })
    }
}

fn build_prompt(request: &RunnerRequest) -> String {
    let task = &request.task;
    let mut task_hints = String::new();
    match task.kind {
        TaskKind::ReviewRequest => {
            task_hints
                .push_str("- Review the PR and post a formal review with gh if one is needed.\n");
            task_hints.push_str("- If follow-up code changes are required and you have permission, make them in this workspace, commit, push, and explain them in your review.\n");
        }
        TaskKind::AssignedIssue | TaskKind::AssignedPullRequest => {
            task_hints.push_str("- Resolve the assigned task. If code changes are needed, create a branch, implement them here, push, and open a draft PR.\n");
            task_hints.push_str("- If no code change is needed, leave a clear public update with the current state and next action.\n");
        }
        TaskKind::Discussion | TaskKind::Comment | TaskKind::Mention => {
            task_hints.push_str("- Read the conversation carefully and reply directly with gh if a reply is useful.\n");
            task_hints.push_str("- If code changes are needed, work in this workspace and open a draft PR linked back to the thread.\n");
        }
        TaskKind::Other => {
            task_hints.push_str(
                "- Inspect the thread and take the smallest complete action that addresses it.\n",
            );
        }
    }

    format!(
        "You are githuber, a local GitHub automation agent acting on behalf of @{login} on {host}.

This workspace was prepared specifically for one GitHub task. Use the local gh CLI and the current authentication state. You may use dangerous, fully automatic permissions.

Task
- Task ID: {task_id}
- Repository: {repo}
- Type: {kind}
- Subject type: {subject_type}
- Reason: {reason}
- Title: {title}
- Primary URL: {display_url}
- API URL: {api_url}
- Latest comment API URL: {latest_comment}
- Workspace: {workspace}
- Local snapshot directory: {snapshot_dir}
- Task artifacts directory: {task_dir}

Rules
- First inspect the local snapshot files in `{snapshot_dir}`. Only call `gh` when you need fresh data or to publish the final result.
- Address the task fully: reply, review, comment, or prepare code changes as needed.
- If you post a public GitHub reply, review, or comment, include this exact disclosure sentence once: {disclosure}
- Before posting anything public, inspect `issue-comments.json` and `pr-reviews.json` when present. If the active account already posted a message or review that still covers the current thread state or current PR head, do not post another one; return `GITHUBER_RESULT: status=skipped ...`.
- If code changes are required, create a branch named `githuber/{slug}`, commit cleanly, push it, and open a draft PR that references the original thread.
- Do not merge PRs, delete branches, change repository settings, or do admin/billing/security work.
- Avoid duplicate replies if the thread is already fully addressed.
- The `gh` binary in this task is brokered by githuber and may serialize requests. Batch your GitHub writes and avoid redundant reads.

Preferred public message format
- Start with a hidden state marker:
  `<!-- githuber:state handled_for={updated_at} thread={thread_key} -->`
- Then use this structure unless the repo already has a stronger established format:
  `## GitHuber Update`
  `**Verdict: <ALIGNED|ACTION NEEDED|IN PROGRESS|BLOCKED|DONE>** — <one-sentence conclusion>`
  `<one short paragraph or a few short lines with the reasoning / next action>`
  `---`
  `{disclosure}`
- Keep it concise. If no action is required, say that plainly.
- For PR reviews, use the same structure inside the review body when practical and keep the verdict specific to the current head commit.

Helpful guidance
{task_hints}

When you are done, finish with exactly one line in this format:
GITHUBER_RESULT: status=<handled|skipped|failed> summary=<one-line summary>",
        login = request.identity.login,
        host = request.identity.host,
        task_id = request.task_id,
        repo = task.repo,
        kind = task.kind.as_str(),
        subject_type = task.subject_type,
        reason = task.reason,
        title = task.title,
        display_url = task.display_url(),
        api_url = task.api_url,
        latest_comment = task.latest_comment_api_url,
        workspace = request.workspace_dir.display(),
        snapshot_dir = request.snapshot_dir.display(),
        task_dir = request.task_dir.display(),
        disclosure = request.disclosure_text,
        slug = task.slug(),
        updated_at = task.updated_at,
        thread_key = task.thread_key,
        task_hints = task_hints,
    )
}

fn parse_result(output: &str) -> (String, String) {
    for line in output.lines().rev() {
        let line = line.trim();
        if !line.starts_with("GITHUBER_RESULT:") {
            continue;
        }
        let payload = line.trim_start_matches("GITHUBER_RESULT:").trim();
        let status = payload
            .split_whitespace()
            .find_map(|part| part.strip_prefix("status="))
            .unwrap_or("handled")
            .to_string();
        let summary = payload
            .split("summary=")
            .nth(1)
            .unwrap_or("completed")
            .trim()
            .to_string();
        return (status, summary);
    }
    let summary = output
        .lines()
        .last()
        .unwrap_or("completed")
        .trim()
        .to_string();
    ("handled".to_string(), summary)
}

#[cfg(test)]
mod tests {
    use super::{RunnerKind, RunnerPool, RunnerSpec, parse_result};
    use std::sync::Mutex;

    #[test]
    fn parse_machine_result_line() {
        let (status, summary) =
            parse_result("done\nGITHUBER_RESULT: status=handled summary=reviewed and replied");
        assert_eq!(status, "handled");
        assert_eq!(summary, "reviewed and replied");
    }

    #[test]
    fn execution_order_rotates_across_tasks() {
        let pool = RunnerPool {
            runners: vec![
                RunnerSpec {
                    kind: RunnerKind::Codex,
                    model: None,
                },
                RunnerSpec {
                    kind: RunnerKind::Claude,
                    model: None,
                },
            ],
            next_index: Mutex::new(0),
        };

        let first = pool
            .execution_order()
            .into_iter()
            .map(|runner| runner.kind.as_str().to_string())
            .collect::<Vec<_>>();
        let second = pool
            .execution_order()
            .into_iter()
            .map(|runner| runner.kind.as_str().to_string())
            .collect::<Vec<_>>();

        assert_eq!(first, vec!["codex".to_string(), "claude".to_string()]);
        assert_eq!(second, vec!["claude".to_string(), "codex".to_string()]);
    }
}
