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
    printf 'owner/repo\tIssue\tcomment\tPlease respond\thttps://api.github.com/repos/owner/repo/issues/1\thttps://api.github.com/repos/owner/repo/issues/comments/10\t2026-04-13T00:00:00Z\n'
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
if [ "${1:-}" = "clone" ] && [ "${2:-}" = "--mirror" ]; then
  mkdir -p "$4"
  exit 0
fi
if [ "${1:-}" = "--git-dir" ]; then
  if [ "${3:-}" = "remote" ] && [ "${4:-}" = "update" ]; then
    exit 0
  fi
  if [ "${3:-}" = "rev-parse" ] && [ "${4:-}" = "HEAD" ]; then
    printf 'deadbeef\n'
    exit 0
  fi
  if [ "${3:-}" = "worktree" ] && [ "${4:-}" = "add" ]; then
    mkdir -p "$6"
    exit 0
  fi
  if [ "${3:-}" = "worktree" ] && [ "${4:-}" = "remove" ]; then
    rm -rf "$6"
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
    assert!(calls.contains("gh api /notifications"));
    assert!(calls.contains("git -c credential.helper=!gh auth git-credential clone --mirror"));
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
