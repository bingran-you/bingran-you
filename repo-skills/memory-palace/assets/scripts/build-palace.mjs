#!/usr/bin/env node
// Build both vendored palace sub-apps and merge their static outputs into
// host/public/palace/. Run before `next build`.
//
// Drop this file into `host/scripts/build-palace.mjs` and wire it in
// host/package.json:
//   "scripts": {
//     "palace:build": "node scripts/build-palace.mjs",
//     "build": "npm run palace:build && next build"
//   }
//
// Layout produced:
//   public/palace/index.html          ← outer 3D-room app  (webpack, ../palace-outer)
//   public/palace/bundle.*.js
//   public/palace/assets/...
//   public/palace/models/...
//   public/palace/textures/...
//   public/palace/audio/...
//   public/palace/os/index.html       ← inner OS app       (CRA, ../palace-inner)
//   public/palace/os/static/...
//
// Build order matters: outer first (its CleanWebpackPlugin wipes the dir),
// then inner is copied on top into the os/ subdir.

import { execSync } from "node:child_process";
import { existsSync, rmSync, cpSync, mkdirSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const repoRoot = path.resolve(__dirname, "..");
const outer = path.join(repoRoot, "palace-outer");
const inner = path.join(repoRoot, "palace-inner");
const merged = path.join(repoRoot, "public", "palace");
const mergedOs = path.join(merged, "os");

function run(cmd, cwd) {
  console.log(`\n$ ${cmd}   (in ${path.relative(repoRoot, cwd) || "."})`);
  execSync(cmd, { cwd, stdio: "inherit" });
}

function ensureInstalled(dir) {
  if (!existsSync(path.join(dir, "node_modules"))) {
    // Force `--include=dev` so build-time devDeps (babel presets, @types,
    // etc.) install even when Vercel sets NODE_ENV=production for the
    // outer build (PLAYBOOK §B).
    run("npm install --no-audit --no-fund --include=dev", dir);
  }
}

console.log("=== building palace ===");

ensureInstalled(outer);
ensureInstalled(inner);

// 1. Outer (writes + cleans public/palace/)
run("npm run build", outer);

// 2. Inner (writes palace-inner/build/), then copy into public/palace/os/
run("npm run build", inner);

if (existsSync(mergedOs)) rmSync(mergedOs, { recursive: true, force: true });
mkdirSync(mergedOs, { recursive: true });
cpSync(path.join(inner, "build"), mergedOs, { recursive: true });

console.log("\n=== palace build done ===");
console.log(`outer → ${path.relative(repoRoot, merged)}`);
console.log(`inner → ${path.relative(repoRoot, mergedOs)}`);
