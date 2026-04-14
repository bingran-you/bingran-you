use std::fs;
use std::path::{Path, PathBuf};
use std::sync::{
    Arc,
    atomic::{AtomicBool, Ordering},
};
use std::thread::{self, JoinHandle};
use std::time::Duration;

use crate::gh_executor::{GhCommandSpec, GhExecutor, command_is_mutating};
use crate::util::{
    AppResult, current_epoch_millis, ensure_dir, read_lines, read_text_if_exists,
    remove_dir_if_exists, write_lines, write_text,
};

#[derive(Debug)]
pub struct GhBroker {
    broker_dir: PathBuf,
    requests_dir: PathBuf,
    bin_dir: PathBuf,
    executor: GhExecutor,
    stop: Arc<AtomicBool>,
    handle: Option<JoinHandle<()>>,
}

impl GhBroker {
    pub fn new(broker_dir: PathBuf, executor: GhExecutor) -> AppResult<Self> {
        let requests_dir = broker_dir.join("requests");
        let bin_dir = broker_dir.join("bin");
        ensure_dir(&requests_dir)?;
        ensure_dir(&bin_dir)?;
        write_text(&bin_dir.join("gh"), SHIM_SCRIPT)?;
        #[cfg(unix)]
        {
            use std::os::unix::fs::PermissionsExt;

            let path = bin_dir.join("gh");
            let mut permissions = fs::metadata(&path)?.permissions();
            permissions.set_mode(0o755);
            fs::set_permissions(path, permissions)?;
        }

        Ok(Self {
            broker_dir,
            requests_dir,
            bin_dir,
            executor,
            stop: Arc::new(AtomicBool::new(false)),
            handle: None,
        })
    }

    pub fn start(&mut self) -> AppResult<()> {
        if self.handle.is_some() {
            return Ok(());
        }
        for entry in fs::read_dir(&self.requests_dir)? {
            let entry = entry?;
            if entry.file_type()?.is_dir() {
                remove_dir_if_exists(&entry.path())?;
            }
        }
        self.stop.store(false, Ordering::SeqCst);
        let requests_dir = self.requests_dir.clone();
        let stop = Arc::clone(&self.stop);
        let executor = self.executor.clone();
        self.handle = Some(thread::spawn(move || {
            serve_loop(requests_dir, executor, stop);
        }));
        Ok(())
    }

    pub fn shim_dir(&self) -> &Path {
        &self.bin_dir
    }

    pub fn broker_dir(&self) -> &Path {
        &self.broker_dir
    }
}

impl Drop for GhBroker {
    fn drop(&mut self) {
        self.stop.store(true, Ordering::SeqCst);
        if let Some(handle) = self.handle.take() {
            let _ = handle.join();
        }
    }
}

fn serve_loop(requests_dir: PathBuf, executor: GhExecutor, stop: Arc<AtomicBool>) {
    while !stop.load(Ordering::SeqCst) {
        let pending = match list_pending_requests(&requests_dir) {
            Ok(pending) => pending,
            Err(error) => {
                eprintln!("githuber broker: failed to scan request queue: {error}");
                thread::sleep(Duration::from_millis(250));
                continue;
            }
        };

        if pending.is_empty() {
            thread::sleep(Duration::from_millis(100));
            continue;
        }

        for request_dir in pending {
            if stop.load(Ordering::SeqCst) {
                return;
            }
            if let Err(error) = handle_request(&request_dir, &executor) {
                let _ = write_failure_response(&request_dir, &error.to_string());
            }
        }
    }
}

fn list_pending_requests(requests_dir: &Path) -> AppResult<Vec<PathBuf>> {
    let mut entries = Vec::new();
    for entry in fs::read_dir(requests_dir)? {
        let entry = entry?;
        if !entry.file_type()?.is_dir() {
            continue;
        }
        let path = entry.path();
        if path.join("response.env").exists() {
            continue;
        }
        entries.push(path);
    }
    entries.sort();
    Ok(entries)
}

fn handle_request(request_dir: &Path, executor: &GhExecutor) -> AppResult<()> {
    let args = read_lines(&request_dir.join("argv.txt"))?;
    let cwd = read_text_if_exists(&request_dir.join("cwd.txt"))?
        .unwrap_or_default()
        .trim()
        .to_string();
    let gh_host = read_text_if_exists(&request_dir.join("gh_host.txt"))?
        .unwrap_or_default()
        .trim()
        .to_string();
    let gh_repo = read_text_if_exists(&request_dir.join("gh_repo.txt"))?
        .unwrap_or_default()
        .trim()
        .to_string();

    let mut envs = Vec::new();
    if !gh_host.is_empty() {
        envs.push(("GH_HOST".to_string(), gh_host));
    }
    if !gh_repo.is_empty() {
        envs.push(("GH_REPO".to_string(), gh_repo));
    }

    let spec = GhCommandSpec {
        context: format!("brokered gh {}", args.join(" ")),
        cwd: if cwd.is_empty() {
            None
        } else {
            Some(PathBuf::from(cwd))
        },
        envs,
        bucket: GhExecutor::bucket_for_args(&args),
        mutating: command_is_mutating(&args),
        args,
    };

    let output = executor.run(&spec)?;
    write_success_response(
        request_dir,
        &output.stdout,
        &output.stderr,
        output.status_code,
    )
}

fn write_success_response(
    request_dir: &Path,
    stdout: &str,
    stderr: &str,
    status_code: i32,
) -> AppResult<()> {
    let stdout_path = request_dir.join("stdout.txt");
    let stderr_path = request_dir.join("stderr.txt");
    write_text(&stdout_path, stdout)?;
    write_text(&stderr_path, stderr)?;
    write_lines(
        &request_dir.join("response.env"),
        &[
            format!("status_code={status_code}"),
            format!("stdout_path={}", stdout_path.display()),
            format!("stderr_path={}", stderr_path.display()),
            format!("completed_at_ms={}", current_epoch_millis()),
        ],
    )
}

fn write_failure_response(request_dir: &Path, error: &str) -> AppResult<()> {
    let stdout_path = request_dir.join("stdout.txt");
    let stderr_path = request_dir.join("stderr.txt");
    write_text(&stdout_path, "")?;
    write_text(&stderr_path, error)?;
    write_lines(
        &request_dir.join("response.env"),
        &[
            "status_code=1".to_string(),
            format!("stdout_path={}", stdout_path.display()),
            format!("stderr_path={}", stderr_path.display()),
            format!("completed_at_ms={}", current_epoch_millis()),
        ],
    )
}

const SHIM_SCRIPT: &str = r#"#!/bin/sh
set -eu

broker_dir="${GITHUBER_BROKER_DIR:?missing GITHUBER_BROKER_DIR}"
requests_dir="$broker_dir/requests"
mkdir -p "$requests_dir"

suffix="$(od -An -N2 -tu2 /dev/urandom 2>/dev/null | tr -d ' ' || echo 0)"
request_dir="$requests_dir/req-$(date +%s)-$$-$suffix"
mkdir -p "$request_dir"

pwd > "$request_dir/cwd.txt"
: > "$request_dir/argv.txt"
for arg in "$@"; do
  case "$arg" in
    *'
'*)
      echo "githuber gh shim does not support newline arguments" >&2
      exit 2
      ;;
  esac
  printf '%s\n' "$arg" >> "$request_dir/argv.txt"
done

if [ -n "${GH_HOST:-}" ]; then
  printf '%s' "$GH_HOST" > "$request_dir/gh_host.txt"
fi

if [ -n "${GH_REPO:-}" ]; then
  printf '%s' "$GH_REPO" > "$request_dir/gh_repo.txt"
fi

timeout_secs="${GITHUBER_BROKER_TIMEOUT_SECS:-1800}"
deadline=$(( $(date +%s) + timeout_secs ))
while [ ! -f "$request_dir/response.env" ]; do
  if [ "$(date +%s)" -ge "$deadline" ]; then
    echo "githuber gh shim timed out waiting for broker" >&2
    exit 124
  fi
  sleep 0.1
done

status_code="$(sed -n 's/^status_code=//p' "$request_dir/response.env" | tail -n 1)"
stdout_path="$(sed -n 's/^stdout_path=//p' "$request_dir/response.env" | tail -n 1)"
stderr_path="$(sed -n 's/^stderr_path=//p' "$request_dir/response.env" | tail -n 1)"

if [ -n "${stdout_path:-}" ] && [ -f "$stdout_path" ]; then
  cat "$stdout_path"
fi

if [ -n "${stderr_path:-}" ] && [ -f "$stderr_path" ]; then
  cat "$stderr_path" >&2
fi

rm -rf "$request_dir"
exit "${status_code:-1}"
"#;

#[cfg(test)]
mod tests {
    use super::SHIM_SCRIPT;

    #[test]
    fn shim_script_references_broker_dir() {
        assert!(SHIM_SCRIPT.contains("GITHUBER_BROKER_DIR"));
        assert!(SHIM_SCRIPT.contains("argv.txt"));
    }
}
