#!/usr/bin/env node
import {
  readFileSync,
  readdirSync,
  statSync,
  writeFileSync,
} from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import matter from "gray-matter";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const SKILLS_DIR = path.join(__dirname, "..", "..", ".agents", "skills");
const OUT_PATH = path.join(__dirname, "..", "lib", "skills.generated.json");

function normalizeDescription(raw) {
  if (typeof raw !== "string") return "";
  return raw.replace(/\s+/g, " ").trim();
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

const skills = [];

for (const slug of entries) {
  if (slug.startsWith(".")) continue;
  const skillDir = path.join(SKILLS_DIR, slug);
  let dirStat;
  try {
    dirStat = statSync(skillDir);
  } catch {
    continue;
  }
  if (!dirStat.isDirectory()) continue;

  const skillFile = path.join(skillDir, "SKILL.md");
  let raw;
  let mtime;
  try {
    raw = readFileSync(skillFile, "utf8");
    mtime = statSync(skillFile).mtime;
  } catch {
    continue;
  }

  let parsed;
  try {
    parsed = matter(raw);
  } catch {
    continue;
  }

  const data = parsed.data ?? {};
  const name =
    typeof data.name === "string" && data.name.trim().length > 0
      ? data.name.trim()
      : slug;
  const description = normalizeDescription(data.description);
  if (!description) continue;
  const triggers = normalizeTriggers(data.triggers);

  skills.push({
    slug,
    name,
    description,
    triggers,
    updatedAt: mtime.toISOString(),
  });
}

skills.sort((a, b) => a.name.localeCompare(b.name));

writeFileSync(OUT_PATH, JSON.stringify(skills, null, 2) + "\n");
console.log(
  `[generate-skills-data] Wrote ${skills.length} skills to ${path.relative(process.cwd(), OUT_PATH)}`,
);
