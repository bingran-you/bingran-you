use std::env;
use std::fs;
use std::os::unix::fs::PermissionsExt;
use std::path::{Path, PathBuf};
use std::process::Command;
use std::time::{SystemTime, UNIX_EPOCH};

fn unique_dir(name: &str) -> PathBuf {
    let suffix = SystemTime::now()
        .duration_since(UNIX_EPOCH)
        .unwrap_or_default()
        .as_nanos();
    env::temp_dir().join(format!("githuber-{name}-{suffix}"))
}

fn write_script(path: &Path, body: &str) {
    fs::write(path, body).expect("script should be written");
    let mut permissions = fs::metadata(path).expect("metadata").permissions();
    permissions.set_mode(0o755);
    fs::set_permissions(path, permissions).expect("permissions should be set");
}

#[test]
fn run_once_schedules_fake_notification_end_to_end() {
    let root = unique_dir("run-once");
    let bin_dir = root.join("bin");
    let home_dir = root.join("home");
    let calls_path = root.join("calls.log");
    let actions_path = root.join("actions.log");
    fs::create_dir_all(&bin_dir).expect("bin dir");
    fs::create_dir_all(&home_dir).expect("home dir");

    write_script(
        &bin_dir.join("gh"),
        r#"#!/bin/sh
set -eu
printf 'gh %s\n' "$*" >> "$GITHUBER_CALLS"
case "$*" in
  *"auth status"*)
    printf 'github.com\tbingran-you\thttps\trepo,workflow\n'
    ;;
  *"api /notifications"*)
    printf 'owner/repo\tIssue\tcomment\tPlease respond\thttps://api.github.com/repos/owner/repo/issues/1\thttps://api.github.com/repos/owner/repo/issues/comments/10\t2099-01-01T00:00:00Z\n'
    ;;
  *"api /repos/owner/repo/issues/comments/10"*)
    printf 'alice\tUser\n'
    ;;
  *"search prs"*)
    printf ''
    ;;
  *"search issues"*)
    printf ''
    ;;
  *"issue comment"*)
    printf 'gh-action %s\n' "$*" >> "$GITHUBER_ACTIONS"
    ;;
  *)
    printf ''
    ;;
esac
"#,
    );

    write_script(
        &bin_dir.join("git"),
        r#"#!/bin/sh
set -eu
printf 'git %s\n' "$*" >> "$GITHUBER_CALLS"
if [ "${1:-}" = "-c" ]; then
  shift 2
fi
if [ "${1:-}" = "clone" ] && { [ "${2:-}" = "--mirror" ] || [ "${2:-}" = "--bare" ]; }; then
  mkdir -p "$4"
  exit 0
fi
if [ "${1:-}" = "--git-dir" ]; then
  if [ "${3:-}" = "remote" ] && [ "${4:-}" = "update" ]; then
    exit 0
  fi
  if [ "${3:-}" = "worktree" ] && [ "${4:-}" = "prune" ]; then
    exit 0
  fi
  if [ "${3:-}" = "rev-parse" ] && [ "${4:-}" = "HEAD" ]; then
    printf 'deadbeef\n'
    exit 0
  fi
  if [ "${3:-}" = "worktree" ] && { [ "${4:-}" = "add" ] || [ "${5:-}" = "add" ]; }; then
    mkdir -p "${7:-$6}"
    exit 0
  fi
  if [ "${3:-}" = "worktree" ] && { [ "${4:-}" = "remove" ] || [ "${5:-}" = "remove" ]; }; then
    rm -rf "${7:-$6}"
    exit 0
  fi
  if [ "${3:-}" = "fetch" ]; then
    exit 0
  fi
fi
if [ "${1:-}" = "-C" ] && [ "${3:-}" = "config" ]; then
  exit 0
fi
exit 0
"#,
    );

    write_script(
        &bin_dir.join("codex"),
        r#"#!/bin/sh
set -eu
printf 'codex %s\n' "$*" >> "$GITHUBER_CALLS"
resolved_gh="$(command -v gh)"
expected_gh="$GITHUBER_BROKER_DIR/bin/gh"
if [ "$resolved_gh" != "$expected_gh" ]; then
  echo "expected brokered gh at $expected_gh, got $resolved_gh" >&2
  exit 1
fi
out=""
prev=""
for arg in "$@"; do
  if [ "$prev" = "--output-last-message" ]; then
    out="$arg"
  fi
  prev="$arg"
done
gh issue comment owner/repo#1 --body "Agent note: this reply was prepared and posted by githuber running locally for the active account."
printf 'GITHUBER_RESULT: status=handled summary=fake codex handled thread\n' > "$out"
"#,
    );

    let path = format!(
        "{}:{}",
        bin_dir.display(),
        env::var("PATH").unwrap_or_default()
    );
    let output = Command::new(env!("CARGO_BIN_EXE_githuber"))
        .env("PATH", path)
        .env("GITHUBER_HOME", &home_dir)
        .env("GITHUBER_CALLS", &calls_path)
        .env("GITHUBER_ACTIONS", &actions_path)
        .args(["run-once", "--runner", "codex", "--host", "github.com"])
        .output()
        .expect("githuber should run");

    assert!(
        output.status.success(),
        "stdout:\n{}\nstderr:\n{}",
        String::from_utf8_lossy(&output.stdout),
        String::from_utf8_lossy(&output.stderr)
    );

    let calls = fs::read_to_string(&calls_path).expect("calls log");
    assert!(calls.contains("gh auth status"));
    assert!(
        calls
            .contains("gh api /notifications?all=true&participating=false&per_page=100 --paginate")
    );
    assert!(calls.contains("git -c credential.helper=!gh auth git-credential clone --bare"));
    assert!(calls.contains("codex exec"));

    let actions = fs::read_to_string(&actions_path).expect("actions log");
    assert!(actions.contains("gh-action issue comment"));

    let runtime_status = fs::read_to_string(home_dir.join("runtime/status.env")).expect("runtime");
    assert!(runtime_status.contains("last_identity=bingran-you@github.com"));

    let task_dirs = fs::read_dir(home_dir.join("tasks"))
        .expect("tasks dir")
        .filter_map(Result::ok)
        .collect::<Vec<_>>();
    assert_eq!(task_dirs.len(), 1);

    let task_env = fs::read_to_string(task_dirs[0].path().join("task.env")).expect("task env");
    assert!(task_env.contains("status=handled"));
    assert!(task_env.contains("runner=codex"));

    fs::remove_dir_all(root).expect("cleanup temp test dir");
}

#[test]
fn second_run_uses_notifications_hot_path_without_repeating_search() {
    let root = unique_dir("run-once-twice");
    let bin_dir = root.join("bin");
    let home_dir = root.join("home");
    let calls_path = root.join("calls.log");
    let actions_path = root.join("actions.log");
    fs::create_dir_all(&bin_dir).expect("bin dir");
    fs::create_dir_all(&home_dir).expect("home dir");

    write_script(
        &bin_dir.join("gh"),
        r#"#!/bin/sh
set -eu
printf 'gh %s\n' "$*" >> "$GITHUBER_CALLS"
case "$*" in
  *"auth status"*)
    printf 'github.com\tbingran-you\thttps\trepo,workflow\n'
    ;;
  *"api /notifications"*)
    printf 'owner/repo\tIssue\tcomment\tPlease respond\thttps://api.github.com/repos/owner/repo/issues/1\thttps://api.github.com/repos/owner/repo/issues/comments/10\t2099-01-01T00:00:00Z\n'
    ;;
  *"api /repos/owner/repo/issues/comments/10"*)
    printf 'alice\tUser\n'
    ;;
  *"search prs"*)
    printf ''
    ;;
  *"search issues"*)
    printf ''
    ;;
  *"issue comment"*)
    printf 'gh-action %s\n' "$*" >> "$GITHUBER_ACTIONS"
    ;;
  *)
    printf ''
    ;;
esac
"#,
    );

    write_script(
        &bin_dir.join("git"),
        r#"#!/bin/sh
set -eu
if [ "${1:-}" = "-c" ]; then
  shift 2
fi
if [ "${1:-}" = "clone" ] && { [ "${2:-}" = "--mirror" ] || [ "${2:-}" = "--bare" ]; }; then
  mkdir -p "$4"
  exit 0
fi
if [ "${1:-}" = "--git-dir" ]; then
  if [ "${3:-}" = "remote" ] && [ "${4:-}" = "update" ]; then
    exit 0
  fi
  if [ "${3:-}" = "worktree" ] && [ "${4:-}" = "prune" ]; then
    exit 0
  fi
  if [ "${3:-}" = "rev-parse" ] && [ "${4:-}" = "HEAD" ]; then
    printf 'deadbeef\n'
    exit 0
  fi
  if [ "${3:-}" = "worktree" ] && { [ "${4:-}" = "add" ] || [ "${5:-}" = "add" ]; }; then
    mkdir -p "${7:-$6}"
    exit 0
  fi
  if [ "${3:-}" = "worktree" ] && { [ "${4:-}" = "remove" ] || [ "${5:-}" = "remove" ]; }; then
    rm -rf "${7:-$6}"
    exit 0
  fi
  if [ "${3:-}" = "fetch" ]; then
    exit 0
  fi
fi
if [ "${1:-}" = "-C" ] && [ "${3:-}" = "config" ]; then
  exit 0
fi
exit 0
"#,
    );

    write_script(
        &bin_dir.join("codex"),
        r#"#!/bin/sh
set -eu
resolved_gh="$(command -v gh)"
expected_gh="$GITHUBER_BROKER_DIR/bin/gh"
if [ "$resolved_gh" != "$expected_gh" ]; then
  echo "expected brokered gh at $expected_gh, got $resolved_gh" >&2
  exit 1
fi
out=""
prev=""
for arg in "$@"; do
  if [ "$prev" = "--output-last-message" ]; then
    out="$arg"
  fi
  prev="$arg"
done
gh issue comment owner/repo#1 --body "Agent note: this reply was prepared and posted by githuber running locally for the active account."
printf 'GITHUBER_RESULT: status=handled summary=fake codex handled thread\n' > "$out"
"#,
    );

    let path = format!(
        "{}:{}",
        bin_dir.display(),
        env::var("PATH").unwrap_or_default()
    );

    let run = || {
        Command::new(env!("CARGO_BIN_EXE_githuber"))
            .env("PATH", &path)
            .env("GITHUBER_HOME", &home_dir)
            .env("GITHUBER_CALLS", &calls_path)
            .env("GITHUBER_ACTIONS", &actions_path)
            .args(["run-once", "--runner", "codex", "--host", "github.com"])
            .output()
            .expect("githuber should run")
    };

    let first = run();
    assert!(
        first.status.success(),
        "stdout:\n{}\nstderr:\n{}",
        String::from_utf8_lossy(&first.stdout),
        String::from_utf8_lossy(&first.stderr)
    );
    let first_calls = fs::read_to_string(&calls_path).expect("first calls");
    assert!(first_calls.contains("gh search prs"));
    assert!(first_calls.contains("gh search issues"));

    fs::write(&calls_path, "").expect("clear calls");
    fs::write(&actions_path, "").expect("clear actions");

    let second = run();
    assert!(
        second.status.success(),
        "stdout:\n{}\nstderr:\n{}",
        String::from_utf8_lossy(&second.stdout),
        String::from_utf8_lossy(&second.stderr)
    );

    let second_calls = fs::read_to_string(&calls_path).expect("second calls");
    assert!(
        second_calls
            .contains("gh api /notifications?all=true&participating=false&per_page=100 --paginate")
    );
    assert!(!second_calls.contains("gh search prs"));
    assert!(!second_calls.contains("gh search issues"));
    assert!(!second_calls.contains("codex exec"));

    let second_actions = fs::read_to_string(&actions_path).expect("second actions");
    assert!(second_actions.trim().is_empty());

    fs::remove_dir_all(root).expect("cleanup temp test dir");
}

#[test]
fn orphaned_running_task_is_recovered_even_without_new_github_candidates() {
    let root = unique_dir("orphan-recovery");
    let bin_dir = root.join("bin");
    let home_dir = root.join("home");
    let calls_path = root.join("calls.log");
    let actions_path = root.join("actions.log");
    fs::create_dir_all(&bin_dir).expect("bin dir");
    fs::create_dir_all(&home_dir).expect("home dir");
    fs::create_dir_all(home_dir.join("tasks/stale-task")).expect("stale task dir");

    fs::write(
        home_dir.join("tasks/stale-task/task.env"),
        "\
task_id=stale-task
status=running
repo=owner/repo
thread_key=/repos/owner/repo/issues/1
title=Recover stale task
kind=assigned_issue
reason=assigned
updated_at=2099-01-01T00:00:00Z
source=assigned-search
started_at=1
",
    )
    .expect("write stale task env");

    write_script(
        &bin_dir.join("gh"),
        r#"#!/bin/sh
set -eu
printf 'gh %s\n' "$*" >> "$GITHUBER_CALLS"
case "$*" in
  *"auth status"*)
    printf 'github.com\tbingran-you\thttps\trepo,workflow\n'
    ;;
  *"api /notifications"*)
    printf ''
    ;;
  *"search prs"*)
    printf ''
    ;;
  *"search issues"*)
    printf ''
    ;;
  *"issue comment"*)
    printf 'gh-action %s\n' "$*" >> "$GITHUBER_ACTIONS"
    ;;
  *)
    printf ''
    ;;
esac
"#,
    );

    write_script(
        &bin_dir.join("git"),
        r#"#!/bin/sh
set -eu
if [ "${1:-}" = "-c" ]; then
  shift 2
fi
if [ "${1:-}" = "clone" ] && { [ "${2:-}" = "--mirror" ] || [ "${2:-}" = "--bare" ]; }; then
  mkdir -p "$4"
  exit 0
fi
if [ "${1:-}" = "--git-dir" ]; then
  if [ "${3:-}" = "config" ]; then
    exit 0
  fi
  if [ "${3:-}" = "remote" ] && [ "${4:-}" = "update" ]; then
    exit 0
  fi
  if [ "${3:-}" = "worktree" ] && [ "${4:-}" = "prune" ]; then
    exit 0
  fi
  if [ "${3:-}" = "rev-parse" ] && [ "${4:-}" = "HEAD" ]; then
    printf 'deadbeef\n'
    exit 0
  fi
  if [ "${3:-}" = "worktree" ] && { [ "${4:-}" = "add" ] || [ "${5:-}" = "add" ]; }; then
    mkdir -p "${7:-$6}"
    exit 0
  fi
  if [ "${3:-}" = "worktree" ] && { [ "${4:-}" = "remove" ] || [ "${5:-}" = "remove" ]; }; then
    rm -rf "${7:-$6}"
    exit 0
  fi
  if [ "${3:-}" = "fetch" ]; then
    exit 0
  fi
fi
if [ "${1:-}" = "-C" ] && [ "${3:-}" = "config" ]; then
  exit 0
fi
exit 0
"#,
    );

    write_script(
        &bin_dir.join("codex"),
        r#"#!/bin/sh
set -eu
resolved_gh="$(command -v gh)"
expected_gh="$GITHUBER_BROKER_DIR/bin/gh"
if [ "$resolved_gh" != "$expected_gh" ]; then
  echo "expected brokered gh at $expected_gh, got $resolved_gh" >&2
  exit 1
fi
out=""
prev=""
for arg in "$@"; do
  if [ "$prev" = "--output-last-message" ]; then
    out="$arg"
  fi
  prev="$arg"
done
gh issue comment owner/repo#1 --body "Recovered stale task"
printf 'GITHUBER_RESULT: status=handled summary=recovered stale task\n' > "$out"
"#,
    );

    let path = format!(
        "{}:{}",
        bin_dir.display(),
        env::var("PATH").unwrap_or_default()
    );
    let output = Command::new(env!("CARGO_BIN_EXE_githuber"))
        .env("PATH", path)
        .env("GITHUBER_HOME", &home_dir)
        .env("GITHUBER_CALLS", &calls_path)
        .env("GITHUBER_ACTIONS", &actions_path)
        .args(["run-once", "--runner", "codex", "--host", "github.com"])
        .output()
        .expect("githuber should run");

    assert!(
        output.status.success(),
        "stdout:\n{}\nstderr:\n{}",
        String::from_utf8_lossy(&output.stdout),
        String::from_utf8_lossy(&output.stderr)
    );

    let stale_env =
        fs::read_to_string(home_dir.join("tasks/stale-task/task.env")).expect("stale env");
    assert!(stale_env.contains("status=orphaned"));

    let task_dirs = fs::read_dir(home_dir.join("tasks"))
        .expect("tasks dir")
        .filter_map(Result::ok)
        .map(|entry| entry.file_name().to_string_lossy().into_owned())
        .collect::<Vec<_>>();
    assert!(task_dirs.iter().any(|task_id| task_id != "stale-task"));

    let actions = fs::read_to_string(&actions_path).expect("actions log");
    assert!(actions.contains("Recovered stale task"));

    fs::remove_dir_all(root).expect("cleanup temp test dir");
}

#[test]
fn run_once_ignores_notifications_older_than_lookback_window() {
    let root = unique_dir("old-notification");
    let bin_dir = root.join("bin");
    let home_dir = root.join("home");
    let calls_path = root.join("calls.log");
    let actions_path = root.join("actions.log");
    fs::create_dir_all(&bin_dir).expect("bin dir");
    fs::create_dir_all(&home_dir).expect("home dir");

    write_script(
        &bin_dir.join("gh"),
        r#"#!/bin/sh
set -eu
printf 'gh %s\n' "$*" >> "$GITHUBER_CALLS"
case "$*" in
  *"auth status"*)
    printf 'github.com\tbingran-you\thttps\trepo,workflow\n'
    ;;
  *"api /notifications"*)
    printf 'owner/repo\tIssue\tcomment\tOld thread\thttps://api.github.com/repos/owner/repo/issues/1\thttps://api.github.com/repos/owner/repo/issues/comments/10\t2000-01-01T00:00:00Z\n'
    ;;
  *"search prs"*)
    printf ''
    ;;
  *"search issues"*)
    printf ''
    ;;
  *"issue comment"*)
    printf 'gh-action %s\n' "$*" >> "$GITHUBER_ACTIONS"
    ;;
  *)
    printf ''
    ;;
esac
"#,
    );

    write_script(
        &bin_dir.join("git"),
        r#"#!/bin/sh
set -eu
exit 0
"#,
    );

    write_script(
        &bin_dir.join("codex"),
        r#"#!/bin/sh
set -eu
printf 'codex %s\n' "$*" >> "$GITHUBER_CALLS"
exit 1
"#,
    );

    let path = format!(
        "{}:{}",
        bin_dir.display(),
        env::var("PATH").unwrap_or_default()
    );
    let output = Command::new(env!("CARGO_BIN_EXE_githuber"))
        .env("PATH", path)
        .env("GITHUBER_HOME", &home_dir)
        .env("GITHUBER_CALLS", &calls_path)
        .env("GITHUBER_ACTIONS", &actions_path)
        .args(["run-once", "--runner", "codex", "--host", "github.com"])
        .output()
        .expect("githuber should run");

    assert!(
        output.status.success(),
        "stdout:\n{}\nstderr:\n{}",
        String::from_utf8_lossy(&output.stdout),
        String::from_utf8_lossy(&output.stderr)
    );

    let calls = fs::read_to_string(&calls_path).expect("calls log");
    assert!(
        calls
            .contains("gh api /notifications?all=true&participating=false&per_page=100 --paginate")
    );
    assert!(!calls.contains("codex "));

    let actions = fs::read_to_string(&actions_path).unwrap_or_default();
    assert!(actions.trim().is_empty());

    let task_dirs = fs::read_dir(home_dir.join("tasks"))
        .expect("tasks dir")
        .filter_map(Result::ok)
        .collect::<Vec<_>>();
    assert!(task_dirs.is_empty());

    fs::remove_dir_all(root).expect("cleanup temp test dir");
}
