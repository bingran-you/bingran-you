use std::env;
use std::error::Error;
use std::fmt::{Display, Formatter};
use std::fs;
use std::io;
use std::path::{Path, PathBuf};
use std::process::Command;
use std::time::{SystemTime, UNIX_EPOCH};

pub type AppResult<T> = Result<T, Box<dyn Error + Send + Sync>>;

#[derive(Debug)]
pub struct AppError(pub String);

impl Display for AppError {
    fn fmt(&self, formatter: &mut Formatter<'_>) -> std::fmt::Result {
        formatter.write_str(&self.0)
    }
}

impl Error for AppError {}

pub fn app_error(message: impl Into<String>) -> Box<dyn Error + Send + Sync> {
    Box::new(AppError(message.into()))
}

#[derive(Debug, Clone)]
pub struct ExecOutput {
    pub stdout: String,
    pub stderr: String,
    pub status_code: i32,
}

pub fn current_epoch_secs() -> u64 {
    SystemTime::now()
        .duration_since(UNIX_EPOCH)
        .unwrap_or_default()
        .as_secs()
}

pub fn home_dir() -> AppResult<PathBuf> {
    env::var_os("HOME")
        .map(PathBuf::from)
        .ok_or_else(|| app_error("HOME is not set"))
}

pub fn ensure_dir(path: &Path) -> AppResult<()> {
    fs::create_dir_all(path)?;
    Ok(())
}

pub fn read_text_if_exists(path: &Path) -> AppResult<Option<String>> {
    match fs::read_to_string(path) {
        Ok(contents) => Ok(Some(contents)),
        Err(error) if error.kind() == io::ErrorKind::NotFound => Ok(None),
        Err(error) => Err(Box::new(error)),
    }
}

pub fn write_text(path: &Path, contents: &str) -> AppResult<()> {
    if let Some(parent) = path.parent() {
        ensure_dir(parent)?;
    }
    fs::write(path, contents)?;
    Ok(())
}

pub fn render_command(command: &Command) -> String {
    let program = command.get_program().to_string_lossy().into_owned();
    let args = command
        .get_args()
        .map(|arg| shell_quote(&arg.to_string_lossy()))
        .collect::<Vec<_>>()
        .join(" ");
    if args.is_empty() {
        program
    } else {
        format!("{program} {args}")
    }
}

pub fn run_command(command: &mut Command) -> AppResult<ExecOutput> {
    let output = command.output().map_err(|error| {
        app_error(format!(
            "failed to start command `{}`: {error}",
            render_command(command)
        ))
    })?;

    Ok(ExecOutput {
        stdout: String::from_utf8_lossy(&output.stdout).into_owned(),
        stderr: String::from_utf8_lossy(&output.stderr).into_owned(),
        status_code: output.status.code().unwrap_or(-1),
    })
}

pub fn run_command_checked(command: &mut Command, context: &str) -> AppResult<String> {
    let rendered = render_command(command);
    let output = run_command(command)?;
    if output.status_code != 0 {
        return Err(app_error(format!(
            "{context} failed with exit code {}: {}\nstdout:\n{}\nstderr:\n{}",
            output.status_code, rendered, output.stdout, output.stderr
        )));
    }
    Ok(output.stdout)
}

pub fn which(binary: &str) -> Option<PathBuf> {
    let path = env::var_os("PATH")?;
    env::split_paths(&path)
        .map(|entry| entry.join(binary))
        .find(|candidate| candidate.is_file())
}

pub fn sanitize_filename(value: &str) -> String {
    let mut out = String::with_capacity(value.len());
    for character in value.chars() {
        if character.is_ascii_alphanumeric()
            || character == '-'
            || character == '_'
            || character == '.'
        {
            out.push(character);
        } else {
            out.push('_');
        }
    }
    if out.is_empty() {
        "empty".to_string()
    } else {
        out
    }
}

pub fn fnv1a64(value: &str) -> u64 {
    let mut hash = 0xcbf29ce484222325u64;
    for byte in value.as_bytes() {
        hash ^= u64::from(*byte);
        hash = hash.wrapping_mul(0x100000001b3);
    }
    hash
}

pub fn shell_quote(value: &str) -> String {
    if value.is_empty() {
        return "''".to_string();
    }
    if value
        .bytes()
        .all(|byte| byte.is_ascii_alphanumeric() || b"-_./:=,@".contains(&byte))
    {
        return value.to_string();
    }
    format!("'{}'", value.replace('\'', "'\"'\"'"))
}

pub fn parse_tsv_line(line: &str) -> Vec<String> {
    line.split('\t').map(unescape_jq_field).collect()
}

pub fn unescape_jq_field(value: &str) -> String {
    let mut output = String::with_capacity(value.len());
    let mut chars = value.chars().peekable();
    while let Some(character) = chars.next() {
        if character != '\\' {
            output.push(character);
            continue;
        }

        match chars.next() {
            Some('n') => output.push('\n'),
            Some('r') => output.push('\r'),
            Some('t') => output.push('\t'),
            Some('\\') => output.push('\\'),
            Some('b') => output.push('\u{0008}'),
            Some('f') => output.push('\u{000c}'),
            Some('u') => {
                let code = chars.by_ref().take(4).collect::<String>();
                if let Ok(number) = u32::from_str_radix(&code, 16)
                    && let Some(decoded) = char::from_u32(number)
                {
                    output.push(decoded);
                }
            }
            Some(other) => output.push(other),
            None => break,
        }
    }
    output
}

pub fn canonical_api_path(url: &str) -> String {
    url.trim()
        .strip_prefix("https://api.github.com")
        .or_else(|| url.trim().strip_prefix("https://github.com"))
        .unwrap_or(url.trim())
        .trim()
        .trim_end_matches('/')
        .to_string()
}

pub fn stable_file_id(value: &str) -> String {
    format!("{:016x}", fnv1a64(value))
}

pub fn parse_kv_lines(contents: &str) -> Vec<(String, String)> {
    contents
        .lines()
        .filter_map(|line| {
            let (key, value) = line.split_once('=')?;
            Some((key.trim().to_string(), value.trim().to_string()))
        })
        .collect()
}

pub fn encode_multiline(value: &str) -> String {
    value.replace('\n', "\\n")
}

pub fn decode_multiline(value: &str) -> String {
    value.replace("\\n", "\n")
}

pub fn remove_dir_if_exists(path: &Path) -> AppResult<()> {
    match fs::remove_dir_all(path) {
        Ok(_) => Ok(()),
        Err(error) if error.kind() == io::ErrorKind::NotFound => Ok(()),
        Err(error) => Err(Box::new(error)),
    }
}

pub fn file_mtime_epoch(path: &Path) -> AppResult<Option<u64>> {
    let metadata = match fs::metadata(path) {
        Ok(metadata) => metadata,
        Err(error) if error.kind() == io::ErrorKind::NotFound => return Ok(None),
        Err(error) => return Err(Box::new(error)),
    };
    let modified = metadata
        .modified()?
        .duration_since(UNIX_EPOCH)
        .unwrap_or_default();
    Ok(Some(modified.as_secs()))
}

pub fn write_lines(path: &Path, lines: &[String]) -> AppResult<()> {
    write_text(path, &lines.join("\n"))
}
