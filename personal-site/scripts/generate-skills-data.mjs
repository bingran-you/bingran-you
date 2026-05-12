#!/usr/bin/env node
import {
  existsSync,
  mkdirSync,
  readFileSync,
  readdirSync,
  realpathSync,
  rmSync,
  statSync,
  writeFileSync,
} from "node:fs";
import { execFileSync } from "node:child_process";
import path from "node:path";
import { fileURLToPath } from "node:url";
import matter from "gray-matter";
import { marked } from "marked";

// Returns the ISO timestamp of the last git commit that touched `absoluteFile`,
// or null if the path has no committed history. Runs `git log` with cwd set
// to the file's directory so it autodetects the enclosing repo — including
// submodules, which have their own history independent of the super-repo.
//
// Using commit time instead of filesystem mtime keeps the generator's output
// deterministic across machines and CI checkouts (where every file's mtime
// is the time of `git clone`).
function gitCommitTime(absoluteFile) {
  try {
    const out = execFileSync(
      "git",
      ["log", "-1", "--format=%cI", "--", path.basename(absoluteFile)],
      {
        cwd: path.dirname(absoluteFile),
        encoding: "utf8",
        stdio: ["ignore", "pipe", "ignore"],
      },
    ).trim();
    return out ? new Date(out) : null;
  } catch {
    return null;
  }
}

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const PERSONAL_SITE = path.join(__dirname, "..");
const REPO_ROOT = path.resolve(PERSONAL_SITE, "..");
const SKILLS_DIR = path.join(REPO_ROOT, ".agents", "skills");
const OUT_JSON = path.join(PERSONAL_SITE, "lib", "skills.generated.json");
const PUBLIC_SKILL_FILES = path.join(PERSONAL_SITE, "public", "skill-files");

const SOURCE_RULES = [
  {
    re: /^repo-skills\/(.+)$/,
    collection: "repo-skills",
    displayName: "Bingran You",
    owner: "bingran-you",
    repo: "bingran-you",
    branch: "main",
    repoSubpath: (m) => `repo-skills/${m[1]}`,
  },
  {
    re: /^trusted-external-repos\/gstack\/browser-skills\/(.+)$/,
    collection: "gstack/browser-skills",
    displayName: "gstack · browser-skills",
    owner: "bingran-you",
    repo: "gstack",
    branch: "main",
    repoSubpath: (m) => `browser-skills/${m[1]}`,
  },
  {
    re: /^trusted-external-repos\/gstack\/openclaw\/skills\/(.+)$/,
    collection: "gstack/openclaw",
    displayName: "gstack · openclaw",
    owner: "bingran-you",
    repo: "gstack",
    branch: "main",
    repoSubpath: (m) => `openclaw/skills/${m[1]}`,
  },
  {
    re: /^trusted-external-repos\/gstack\/(.+)$/,
    collection: "gstack",
    displayName: "gstack",
    owner: "bingran-you",
    repo: "gstack",
    branch: "main",
    repoSubpath: (m) => m[1],
  },
  {
    re: /^trusted-external-repos\/gstack$/,
    collection: "gstack",
    displayName: "gstack",
    owner: "bingran-you",
    repo: "gstack",
    branch: "main",
    repoSubpath: () => "",
  },
  {
    re: /^trusted-external-repos\/marketingskills\/skills\/(.+)$/,
    collection: "marketingskills",
    displayName: "marketingskills",
    owner: "bingran-you",
    repo: "marketingskills",
    branch: "main",
    repoSubpath: (m) => `skills/${m[1]}`,
  },
  {
    re: /^trusted-external-repos\/open-design\/skills\/(.+)$/,
    collection: "open-design",
    displayName: "open-design",
    owner: "bingran-you",
    repo: "open-design",
    branch: "main",
    repoSubpath: (m) => `skills/${m[1]}`,
  },
];

function deriveSource(absoluteSourceDir) {
  const rel = path.relative(REPO_ROOT, absoluteSourceDir);
  for (const rule of SOURCE_RULES) {
    const m = rule.re.exec(rel);
    if (m) {
      const sub = rule.repoSubpath(m);
      const githubUrl = `https://github.com/${rule.owner}/${rule.repo}/tree/${rule.branch}${sub ? "/" + sub : ""}`;
      return {
        collection: rule.collection,
        author: rule.displayName,
        repoPath: rel,
        githubUrl,
      };
    }
  }
  return {
    collection: "unknown",
    author: "unknown",
    repoPath: rel,
    githubUrl: undefined,
  };
}

function readLicense(skillDir) {
  const candidates = [
    "LICENSE.txt",
    "LICENSE.md",
    "LICENSE",
    "License.txt",
    "license.txt",
    "license.md",
  ];
  for (const name of candidates) {
    const p = path.join(skillDir, name);
    try {
      if (statSync(p).isFile()) {
        const text = readFileSync(p, "utf8").trim();
        if (text) return { name, text };
      }
    } catch {
      /* not present */
    }
  }
  return undefined;
}

function normalizeDescription(raw) {
  if (typeof raw !== "string") return "";
  return raw.replace(/\s+/g, " ").trim();
}

// Best-effort fallback when gray-matter / js-yaml chokes on a SKILL.md
// frontmatter — usually a stray `key: value` colon inside an unquoted
// scalar. Pulls just `name` and `description` so the skill still surfaces
// on the catalog instead of being silently dropped.
function recoverFrontmatter(raw) {
  if (!raw.startsWith("---")) return null;
  const end = raw.indexOf("\n---", 3);
  if (end < 0) return null;
  const fm = raw.slice(4, end);
  const body = raw.slice(end + 4).replace(/^\r?\n/, "");

  const data = {};
  const nameMatch = /^name:\s*(.+)$/m.exec(fm);
  if (nameMatch) {
    data.name = nameMatch[1].trim().replace(/^["']|["']$/g, "");
  }

  // Folded / literal block scalar: `description: >` or `description: |`
  // (with optional `-` / `+` chomping) followed by indented lines.
  const blockMatch = /^description:\s*[>|][-+]?\s*\n((?:[ \t]+.*(?:\r?\n|$))+)/m.exec(fm);
  if (blockMatch) {
    data.description = blockMatch[1]
      .split(/\r?\n/)
      .map((l) => l.trim())
      .filter(Boolean)
      .join(" ");
  } else {
    const inlineMatch = /^description:\s*(.+)$/m.exec(fm);
    if (inlineMatch) {
      data.description = inlineMatch[1].trim().replace(/^["']|["']$/g, "");
    }
  }

  return { data, content: body };
}

function normalizeTriggers(raw) {
  if (!Array.isArray(raw)) return undefined;
  const list = raw
    .map((item) => (typeof item === "string" ? item.trim() : ""))
    .filter((item) => item.length > 0);
  return list.length > 0 ? list : undefined;
}

let entries;
try {
  entries = readdirSync(SKILLS_DIR);
} catch (err) {
  console.error(
    `[generate-skills-data] Cannot read ${SKILLS_DIR}: ${err.message}`,
  );
  console.error(
    "  This script must run inside the bingran-you repo so it can see ../.agents/skills/.",
  );
  process.exit(1);
}

if (existsSync(PUBLIC_SKILL_FILES)) {
  rmSync(PUBLIC_SKILL_FILES, { recursive: true, force: true });
}
mkdirSync(PUBLIC_SKILL_FILES, { recursive: true });

const skills = [];
let withLicense = 0;
let withBody = 0;

marked.setOptions({
  gfm: true,
  breaks: false,
});

for (const slug of entries) {
  if (slug.startsWith(".")) continue;
  const skillSymlink = path.join(SKILLS_DIR, slug);
  let resolvedDir;
  try {
    resolvedDir = statSync(skillSymlink).isDirectory()
      ? path.resolve(SKILLS_DIR, skillSymlink)
      : null;
  } catch {
    continue;
  }
  if (!resolvedDir) continue;

  const skillFile = path.join(skillSymlink, "SKILL.md");
  let raw;
  let mtime;
  try {
    raw = readFileSync(skillFile, "utf8");
    const realFile = realpathSync(skillFile);
    mtime = gitCommitTime(realFile) ?? statSync(skillFile).mtime;
  } catch {
    continue;
  }

  let parsed;
  try {
    parsed = matter(raw);
  } catch (err) {
    const recovered = recoverFrontmatter(raw);
    if (!recovered) {
      console.warn(
        `[generate-skills-data] Skipping ${slug}: frontmatter unparseable (${err.message})`,
      );
      continue;
    }
    console.warn(
      `[generate-skills-data] Recovered ${slug} via regex fallback (${err.message})`,
    );
    parsed = recovered;
  }

  const data = parsed.data ?? {};
  const name =
    typeof data.name === "string" && data.name.trim().length > 0
      ? data.name.trim()
      : slug;
  const description = normalizeDescription(data.description);
  if (!description) continue;
  const triggers = normalizeTriggers(data.triggers);

  const body = (parsed.content ?? "").trim();
  const bodyHtml = body ? marked.parse(body, { async: false }) : "";
  if (body) withBody += 1;

  let absoluteSource;
  try {
    absoluteSource = realpathSync(skillSymlink);
  } catch {
    absoluteSource = skillSymlink;
  }
  const source = deriveSource(absoluteSource);
  if (typeof data.author === "string" && data.author.trim().length > 0) {
    source.author = data.author.trim();
  }
  const license = readLicense(skillSymlink);
  if (license) withLicense += 1;

  // Write the SKILL.md as a downloadable static file
  const downloadFilename = `${slug}.md`;
  writeFileSync(path.join(PUBLIC_SKILL_FILES, downloadFilename), raw);

  skills.push({
    slug,
    name,
    description,
    triggers,
    updatedAt: mtime.toISOString(),
    bodyHtml,
    bodyChars: body.length,
    license: license
      ? { name: license.name, text: license.text }
      : undefined,
    source,
    downloadUrl: `/skill-files/${downloadFilename}`,
  });
}

skills.sort((a, b) => a.name.localeCompare(b.name));

writeFileSync(OUT_JSON, JSON.stringify(skills, null, 2) + "\n");

console.log(
  `[generate-skills-data] Wrote ${skills.length} skills to ${path.relative(process.cwd(), OUT_JSON)}`,
);
console.log(
  `  ${withBody} with bodies, ${withLicense} with LICENSE files`,
);
console.log(
  `  Static SKILL.md downloads written to ${path.relative(process.cwd(), PUBLIC_SKILL_FILES)}`,
);
