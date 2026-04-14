use std::path::PathBuf;
use std::process::Command;
use std::sync::{Arc, Mutex};
use std::thread;
use std::time::Duration;

use crate::util::{AppResult, ExecOutput, app_error, current_epoch_millis, run_command};

#[derive(Clone, Copy, Debug, PartialEq, Eq)]
pub enum GhBucket {
    Core,
    Search,
    Write,
}

#[derive(Clone, Debug)]
pub struct GhCommandSpec {
    pub context: String,
    pub cwd: Option<PathBuf>,
    pub envs: Vec<(String, String)>,
    pub args: Vec<String>,
    pub bucket: GhBucket,
    pub mutating: bool,
}

#[derive(Clone, Debug)]
pub struct GhExecutor {
    real_gh: PathBuf,
    write_cooldown_ms: u64,
    state: Arc<Mutex<GhRateState>>,
}

#[derive(Clone, Debug)]
struct GhRateState {
    next_core_epoch_ms: u64,
    next_search_epoch_ms: u64,
    next_write_epoch_ms: u64,
    last_write_epoch_ms: u64,
    rate_limit_streak: u32,
}

impl GhExecutor {
    pub fn new(real_gh: PathBuf, write_cooldown_ms: u64) -> Self {
        Self {
            real_gh,
            write_cooldown_ms,
            state: Arc::new(Mutex::new(GhRateState {
                next_core_epoch_ms: 0,
                next_search_epoch_ms: 0,
                next_write_epoch_ms: 0,
                last_write_epoch_ms: 0,
                rate_limit_streak: 0,
            })),
        }
    }

    pub fn run_checked(&self, spec: &GhCommandSpec) -> AppResult<String> {
        let rendered = self.render_args(&spec.args);
        let output = self.run(spec)?;
        if output.status_code != 0 {
            return Err(app_error(format!(
                "{} failed with exit code {}: {}\nstdout:\n{}\nstderr:\n{}",
                spec.context, output.status_code, rendered, output.stdout, output.stderr
            )));
        }
        Ok(output.stdout)
    }

    pub fn run(&self, spec: &GhCommandSpec) -> AppResult<ExecOutput> {
        let mut attempts = 0u8;
        loop {
            attempts = attempts.saturating_add(1);
            self.wait_for_slot(spec);
            let output = self.run_once(spec)?;
            if is_rate_limited(&output) {
                self.register_rate_limit(spec);
                if attempts < 3 {
                    continue;
                }
                return Ok(output);
            }
            self.register_completion(spec);
            return Ok(output);
        }
    }

    pub fn bucket_for_args(args: &[String]) -> GhBucket {
        if args.first().map(String::as_str) == Some("search")
            || matches!(
                (args.first().map(String::as_str), args.get(1).map(String::as_str)),
                (Some("api"), Some(path))
                    if path.contains("search/")
                        || path.starts_with("search/")
                        || path.contains("/search/")
            )
        {
            return GhBucket::Search;
        }
        if command_is_mutating(args) {
            return GhBucket::Write;
        }
        GhBucket::Core
    }

    fn run_once(&self, spec: &GhCommandSpec) -> AppResult<ExecOutput> {
        let mut command = Command::new(&self.real_gh);
        if let Some(cwd) = &spec.cwd {
            command.current_dir(cwd);
        }
        for (key, value) in &spec.envs {
            command.env(key, value);
        }
        for arg in &spec.args {
            command.arg(arg);
        }
        run_command(&mut command)
    }

    fn wait_for_slot(&self, spec: &GhCommandSpec) {
        loop {
            let wait_ms = {
                let state = self.state.lock().expect("gh rate state poisoned");
                let now = current_epoch_millis();
                let mut next_allowed = state.next_core_epoch_ms;
                if matches!(spec.bucket, GhBucket::Search) {
                    next_allowed = next_allowed.max(state.next_search_epoch_ms);
                }
                if spec.mutating {
                    next_allowed = next_allowed.max(state.next_write_epoch_ms);
                    next_allowed = next_allowed.max(
                        state
                            .last_write_epoch_ms
                            .saturating_add(self.write_cooldown_ms),
                    );
                }
                next_allowed.saturating_sub(now)
            };

            if wait_ms == 0 {
                return;
            }
            thread::sleep(Duration::from_millis(wait_ms.min(2_000)));
        }
    }

    fn register_completion(&self, spec: &GhCommandSpec) {
        let mut state = self.state.lock().expect("gh rate state poisoned");
        state.rate_limit_streak = 0;
        if spec.mutating {
            state.last_write_epoch_ms = current_epoch_millis();
        }
    }

    fn register_rate_limit(&self, spec: &GhCommandSpec) {
        let mut state = self.state.lock().expect("gh rate state poisoned");
        state.rate_limit_streak = state.rate_limit_streak.saturating_add(1);
        let exponent = state.rate_limit_streak.min(4);
        let backoff_ms = 60_000u64.saturating_mul(1u64 << exponent);
        let next_allowed = current_epoch_millis().saturating_add(backoff_ms);
        state.next_core_epoch_ms = state.next_core_epoch_ms.max(next_allowed);
        if matches!(spec.bucket, GhBucket::Search) {
            state.next_search_epoch_ms = state.next_search_epoch_ms.max(next_allowed);
        }
        if spec.mutating {
            state.next_write_epoch_ms = state.next_write_epoch_ms.max(next_allowed);
        }
    }

    fn render_args(&self, args: &[String]) -> String {
        let rendered = args
            .iter()
            .map(|arg| crate::util::shell_quote(arg))
            .collect::<Vec<_>>()
            .join(" ");
        format!("{} {}", self.real_gh.display(), rendered)
            .trim()
            .to_string()
    }
}

pub fn command_is_mutating(args: &[String]) -> bool {
    let Some(first) = args.first().map(String::as_str) else {
        return false;
    };

    match first {
        "api" => api_command_is_mutating(args),
        "issue" => matches!(
            args.get(1).map(String::as_str),
            Some("comment")
                | Some("close")
                | Some("create")
                | Some("delete")
                | Some("edit")
                | Some("lock")
                | Some("pin")
                | Some("reopen")
                | Some("transfer")
                | Some("unlock")
                | Some("unpin")
        ),
        "pr" => matches!(
            args.get(1).map(String::as_str),
            Some("close")
                | Some("comment")
                | Some("create")
                | Some("edit")
                | Some("merge")
                | Some("ready")
                | Some("reopen")
                | Some("review")
                | Some("update-branch")
        ),
        "label" => matches!(
            args.get(1).map(String::as_str),
            Some("clone") | Some("create") | Some("delete") | Some("edit")
        ),
        _ => false,
    }
}

fn api_command_is_mutating(args: &[String]) -> bool {
    let mut explicit_method = None::<String>;
    let mut has_fields = false;
    let mut index = 1usize;
    while index < args.len() {
        match args[index].as_str() {
            "-X" | "--method" => {
                if let Some(value) = args.get(index + 1) {
                    explicit_method = Some(value.to_ascii_uppercase());
                }
                index = index.saturating_add(1);
            }
            "-f" | "-F" | "--field" | "--raw-field" | "--input" => has_fields = true,
            _ => {}
        }
        index = index.saturating_add(1);
    }

    match explicit_method.as_deref() {
        Some("GET") | Some("HEAD") => false,
        Some(_) => true,
        None => has_fields,
    }
}

pub fn is_rate_limited(output: &ExecOutput) -> bool {
    let combined = format!("{}\n{}", output.stdout, output.stderr).to_ascii_lowercase();
    combined.contains("secondary rate limit")
        || combined.contains("rate limit exceeded")
        || combined.contains("api rate limit")
        || combined.contains("abuse detection")
        || combined.contains("retry after")
}

#[cfg(test)]
mod tests {
    use super::{GhBucket, GhExecutor, command_is_mutating, is_rate_limited};
    use crate::util::ExecOutput;

    #[test]
    fn classifies_search_commands() {
        let args = vec![
            "search".to_string(),
            "prs".to_string(),
            "--review-requested=@me".to_string(),
        ];
        assert_eq!(GhExecutor::bucket_for_args(&args), GhBucket::Search);
    }

    #[test]
    fn detects_mutating_issue_comment() {
        let args = vec![
            "issue".to_string(),
            "comment".to_string(),
            "owner/repo#1".to_string(),
            "--body".to_string(),
            "hello".to_string(),
        ];
        assert!(command_is_mutating(&args));
    }

    #[test]
    fn treats_api_fields_as_mutating() {
        let args = vec![
            "api".to_string(),
            "/repos/owner/repo/issues/1/comments".to_string(),
            "-f".to_string(),
            "body=hello".to_string(),
        ];
        assert!(command_is_mutating(&args));
    }

    #[test]
    fn detects_rate_limit_messages() {
        let output = ExecOutput {
            stdout: String::new(),
            stderr: "gh: API rate limit exceeded for this resource (HTTP 403)".to_string(),
            status_code: 1,
        };
        assert!(is_rate_limited(&output));
    }
}
