#!/usr/bin/env bash
# Bootstrap script for the memory-palace skill.
#
# Run from the root of your existing Next.js site. Clones the two upstream
# Henry Heffernan repos as vendor copies, strips git history, drops upstream
# pieces you don't need, and leaves the rest of the integration as
# copy-paste-from-assets/ steps (see ../INDEX.md).
#
# Safe to re-run: skips clone if the directory already exists.

set -euo pipefail

OUTER_REPO="https://github.com/henryjeff/portfolio-website.git"
INNER_REPO="https://github.com/henryjeff/portfolio-inner-site.git"
OUTER_DIR="palace-outer"
INNER_DIR="palace-inner"

cyan()  { printf '\033[36m%s\033[0m\n' "$1"; }
green() { printf '\033[32m%s\033[0m\n' "$1"; }
yellow(){ printf '\033[33m%s\033[0m\n' "$1"; }
red()   { printf '\033[31m%s\033[0m\n' "$1" >&2; }

if [[ ! -f package.json ]]; then
  red "No package.json in $(pwd). Run this from the root of your Next.js host site."
  exit 1
fi

# ─── 1. Clone outer (MIT) ──────────────────────────────────────────────────────
if [[ -d "$OUTER_DIR" ]]; then
  yellow "Skipping $OUTER_DIR (already exists)"
else
  cyan "Cloning outer 3D room (MIT) → $OUTER_DIR"
  git clone --depth=1 "$OUTER_REPO" "$OUTER_DIR"
  rm -rf "$OUTER_DIR/.git"
fi

# ─── 2. Clone inner (no upstream license — needs Henry's permission) ──────────
if [[ -d "$INNER_DIR" ]]; then
  yellow "Skipping $INNER_DIR (already exists)"
else
  red "================================================================"
  red "REMINDER: portfolio-inner-site has NO upstream license."
  red "Vendoring it requires explicit permission from Henry Heffernan."
  red "If you don't have that permission, abort now and build your own"
  red "inner site from scratch using only the architectural pattern."
  red "================================================================"
  read -rp "Type 'I have permission' to continue (or anything else to abort): " ack
  if [[ "$ack" != "I have permission" ]]; then
    yellow "Aborting before cloning inner site. Outer is still cloned at $OUTER_DIR."
    exit 0
  fi
  cyan "Cloning inner OS (with permission) → $INNER_DIR"
  git clone --depth=1 "$INNER_REPO" "$INNER_DIR"
  rm -rf "$INNER_DIR/.git"
fi

# ─── 3. Drop upstream pieces you don't need ───────────────────────────────────
cyan "Stripping upstream dead weight"
rm -rf "$OUTER_DIR/server"             # AWS deploy harness — irrelevant in vendor copy
rm -f  "$OUTER_DIR/buildspec.yaml"     # AWS CodeBuild config — irrelevant
# 37 MB unused video texture (PLAYBOOK §G)
rm -f  "$OUTER_DIR/static/textures/monitor/video/real.mp4"

# ─── 4. Drop a starter .gitignore entry block ─────────────────────────────────
if ! grep -q "^/palace-outer/node_modules" .gitignore 2>/dev/null; then
  cyan "Appending palace ignores to .gitignore"
  cat >> .gitignore <<'EOF'

# memory-palace vendor build artifacts
/palace-outer/node_modules
/palace-inner/node_modules
/palace-inner/build
/public/palace
EOF
fi

# ─── 5. Force-add the outer lockfile (PLAYBOOK §C) ────────────────────────────
if [[ -f "$OUTER_DIR/package-lock.json" ]]; then
  cyan "Force-adding $OUTER_DIR/package-lock.json (upstream .gitignore excludes it)"
  git add -f "$OUTER_DIR/package-lock.json" || true
fi

# ─── 6. Tell the user what's left ─────────────────────────────────────────────
green ""
green "✓ Bootstrap done. Next steps (see ../INDEX.md for full map):"
green ""
green "  1. cp ../scripts/build-palace.mjs scripts/"
green "  2. cp ../patches/palace-inner.tsconfig.json $INNER_DIR/tsconfig.json"
green "  3. Apply each snippet under ../patches/ to the target marked in INDEX.md"
green "  4. cp ../content/*.tsx $INNER_DIR/src/components/showcase/"
green "  5. cp ../content/ShutdownSequence.tsx $INNER_DIR/src/components/os/"
green "  6. cp ../notice/NOTICE.outer.template.md $OUTER_DIR/NOTICE.md  (edit author)"
green "  7. cp ../notice/NOTICE.inner.template.md $INNER_DIR/NOTICE.md  (edit permission line)"
green "  8. Wire package.json scripts:"
green "     \"palace:build\": \"node scripts/build-palace.mjs\","
green "     \"build\": \"npm run palace:build && next build\""
green ""
green "  Then: npm run build && open http://localhost:3000/palace"
green ""
green "  After deploy: paste ../verification/devtools.js into DevTools at /palace."
