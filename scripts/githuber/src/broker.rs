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
    AppResult, current_epoch_millis, ensure_dir, parse_kv_lines, read_lines, read_text_if_exists,
    remove_dir_if_exists, stable_file_id, write_lines, write_text,
};

#[derive(Debug)]
pub struct GhBroker {
    broker_dir: PathBuf,
    requests_dir: PathBuf,
    history_dir: PathBuf,
    bin_dir: PathBuf,
    executor: GhExecutor,
    stop: Arc<AtomicBool>,
    handle: Option<JoinHandle<()>>,
}

impl GhBroker {
    pub fn new(broker_dir: PathBuf, executor: GhExecutor) -> AppResult<Self> {
        let requests_dir = broker_dir.join("requests");
        let history_dir = broker_dir.join("history");
        let bin_dir = broker_dir.join("bin");
        ensure_dir(&requests_dir)?;
        ensure_dir(&history_dir)?;
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
            history_dir,
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
        let history_dir = self.history_dir.clone();
        let stop = Arc::clone(&self.stop);
        let executor = self.executor.clone();
        self.handle = Some(thread::spawn(move || {
            serve_loop(requests_dir, history_dir, executor, stop);
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

fn serve_loop(
    requests_dir: PathBuf,
    history_dir: PathBuf,
    executor: GhExecutor,
    stop: Arc<AtomicBool>,
) {
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
            if let Err(error) = handle_request(&request_dir, &history_dir, &executor) {
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

fn handle_request(request_dir: &Path, history_dir: &Path, executor: &GhExecutor) -> AppResult<()> {
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

    let fingerprint = mutation_fingerprint(&spec)?;
    if let Some(key) = fingerprint.as_deref()
        && let Some(cached) = read_cached_mutation_response(history_dir, key)?
    {
        return write_success_response(
            request_dir,
            &cached.stdout,
            &cached.stderr,
            cached.status_code,
        );
    }

    let output = executor.run(&spec)?;
    if output.status_code == 0
        && let Some(key) = fingerprint.as_deref()
    {
        write_cached_mutation_response(
            history_dir,
            key,
            &output.stdout,
            &output.stderr,
            output.status_code,
        )?;
    }
    write_success_response(
        request_dir,
        &output.stdout,
        &output.stderr,
        output.status_code,
    )
}

#[derive(Debug, Clone, PartialEq, Eq)]
struct CachedMutationResponse {
    stdout: String,
    stderr: String,
    status_code: i32,
}

const MUTATION_CACHE_TTL_MS: u64 = 15 * 60 * 1000;

fn mutation_fingerprint(spec: &GhCommandSpec) -> AppResult<Option<String>> {
    if !spec.mutating {
        return Ok(None);
    }

    let mut normalized = Vec::new();
    let mut index = 0usize;
    while index < spec.args.len() {
        let current = &spec.args[index];
        match current.as_str() {
            "--body" | "-b" => {
                normalized.push(current.clone());
                if let Some(body) = spec.args.get(index + 1) {
                    normalized.push(format!("body-hash:{}", stable_file_id(body)));
                    index += 2;
                    continue;
                }
            }
            "--body-file" | "-F" => {
                normalized.push(current.clone());
                if let Some(path) = spec.args.get(index + 1) {
                    normalized.push(format!(
                        "body-file-hash:{}",
                        stable_file_id(&read_body_file_hash(path, spec)?)
                    ));
                    index += 2;
                    continue;
                }
            }
            _ => {}
        }
        normalized.push(current.clone());
        index += 1;
    }

    let mut envs = spec
        .envs
        .iter()
        .filter(|(key, _)| key == "GH_HOST" || key == "GH_REPO")
        .cloned()
        .collect::<Vec<_>>();
    envs.sort_by(|left, right| left.0.cmp(&right.0).then_with(|| left.1.cmp(&right.1)));
    for (key, value) in envs {
        normalized.push(format!("env:{key}={value}"));
    }
    if let Some(cwd) = &spec.cwd {
        normalized.push(format!("cwd:{}", cwd.display()));
    }

    Ok(Some(normalized.join("\n")))
}

fn read_body_file_hash(path: &str, spec: &GhCommandSpec) -> AppResult<String> {
    let candidate = PathBuf::from(path);
    let resolved = if candidate.is_absolute() {
        candidate
    } else if let Some(cwd) = &spec.cwd {
        cwd.join(candidate)
    } else {
        candidate
    };
    read_text_if_exists(&resolved)?.ok_or_else(|| {
        format!(
            "missing body file for brokered gh command: {}",
            resolved.display()
        )
        .into()
    })
}

fn cache_dir_for(history_dir: &Path, fingerprint: &str) -> PathBuf {
    history_dir.join(stable_file_id(fingerprint))
}

fn read_cached_mutation_response(
    history_dir: &Path,
    fingerprint: &str,
) -> AppResult<Option<CachedMutationResponse>> {
    let cache_dir = cache_dir_for(history_dir, fingerprint);
    let response_path = cache_dir.join("response.env");
    let Some(contents) = read_text_if_exists(&response_path)? else {
        return Ok(None);
    };
    let values = parse_kv_lines(&contents)
        .into_iter()
        .collect::<std::collections::HashMap<_, _>>();
    let completed_at_ms = values
        .get("completed_at_ms")
        .and_then(|value| value.parse::<u64>().ok())
        .unwrap_or_default();
    if current_epoch_millis().saturating_sub(completed_at_ms) > MUTATION_CACHE_TTL_MS {
        remove_dir_if_exists(&cache_dir)?;
        return Ok(None);
    }
    let status_code = values
        .get("status_code")
        .and_then(|value| value.parse::<i32>().ok())
        .unwrap_or(1);
    if status_code != 0 {
        remove_dir_if_exists(&cache_dir)?;
        return Ok(None);
    }
    let stdout = read_text_if_exists(&cache_dir.join("stdout.txt"))?.unwrap_or_default();
    let stderr = read_text_if_exists(&cache_dir.join("stderr.txt"))?.unwrap_or_default();
    Ok(Some(CachedMutationResponse {
        stdout,
        stderr,
        status_code,
    }))
}

fn write_cached_mutation_response(
    history_dir: &Path,
    fingerprint: &str,
    stdout: &str,
    stderr: &str,
    status_code: i32,
) -> AppResult<()> {
    let cache_dir = cache_dir_for(history_dir, fingerprint);
    ensure_dir(&cache_dir)?;
    write_text(&cache_dir.join("stdout.txt"), stdout)?;
    write_text(&cache_dir.join("stderr.txt"), stderr)?;
    write_lines(
        &cache_dir.join("response.env"),
        &[
            format!("status_code={status_code}"),
            format!("completed_at_ms={}", current_epoch_millis()),
        ],
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
    use super::{
        MUTATION_CACHE_TTL_MS, SHIM_SCRIPT, mutation_fingerprint, read_cached_mutation_response,
        write_cached_mutation_response,
    };
    use crate::gh_executor::{GhBucket, GhCommandSpec};
    use crate::util::{ensure_dir, write_text};
    use std::env;
    use std::path::PathBuf;
    use std::time::{SystemTime, UNIX_EPOCH};

    #[test]
    fn shim_script_references_broker_dir() {
        assert!(SHIM_SCRIPT.contains("GITHUBER_BROKER_DIR"));
        assert!(SHIM_SCRIPT.contains("argv.txt"));
    }

    #[test]
    fn mutation_fingerprint_ignores_body_file_temp_paths() {
        let root = unique_dir("fingerprint");
        let cwd = root.join("cwd");
        ensure_dir(&cwd).expect("cwd should exist");
        let first = cwd.join("first.txt");
        let second = cwd.join("second.txt");
        write_text(&first, "same body").expect("first body");
        write_text(&second, "same body").expect("second body");

        let first_spec = GhCommandSpec {
            context: "test".to_string(),
            cwd: Some(cwd.clone()),
            envs: vec![("GH_REPO".to_string(), "owner/repo".to_string())],
            bucket: GhBucket::Write,
            mutating: true,
            args: vec![
                "pr".to_string(),
                "review".to_string(),
                "267".to_string(),
                "--repo".to_string(),
                "owner/repo".to_string(),
                "--request-changes".to_string(),
                "--body-file".to_string(),
                first.display().to_string(),
            ],
        };
        let second_spec = GhCommandSpec {
            args: vec![
                "pr".to_string(),
                "review".to_string(),
                "267".to_string(),
                "--repo".to_string(),
                "owner/repo".to_string(),
                "--request-changes".to_string(),
                "--body-file".to_string(),
                second.display().to_string(),
            ],
            ..first_spec.clone()
        };

        let first_fp = mutation_fingerprint(&first_spec)
            .expect("fingerprint")
            .expect("mutating");
        let second_fp = mutation_fingerprint(&second_spec)
            .expect("fingerprint")
            .expect("mutating");

        assert_eq!(first_fp, second_fp);
    }

    #[test]
    fn cached_mutation_response_round_trips() {
        let root = unique_dir("cache");
        ensure_dir(&root).expect("root should exist");
        let fingerprint = "review\n267\nbody-hash:abc";
        write_cached_mutation_response(&root, fingerprint, "ok", "", 0).expect("cache write");
        let cached = read_cached_mutation_response(&root, fingerprint)
            .expect("cache read")
            .expect("cached response");

        assert_eq!(cached.stdout, "ok");
        assert_eq!(cached.status_code, 0);
        assert!(MUTATION_CACHE_TTL_MS > 0);
    }

    fn unique_dir(name: &str) -> PathBuf {
        let suffix = SystemTime::now()
            .duration_since(UNIX_EPOCH)
            .unwrap_or_default()
            .as_nanos();
        env::temp_dir().join(format!("githuber-broker-{name}-{suffix}"))
    }
}
