<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

## Adding posts to /posts goes through `social-scraping-policy`

If the user pastes a post URL (X / Xiaohongshu / YouTube / Bilibili / LinkedIn) with intent like "add this to /posts" / "把这条加进来" / "更新到个人网站", **invoke the `social-scraping-policy` skill before doing anything**. It owns:

- the `npm run post:add -- "<url>"` recipe (the only script you should call)
- the XHS login-wall fallback (claude-in-chrome MCP against Bingran's signed-in Chrome — **not** Playwright, not headless Chromium, not `WebFetch`)
- the diff-discipline rules (hand-edit `content/social/posts.json` instead of re-running the script's resort, so the diff stays at +8/-0)

Source of truth: `repo-skills/social-scraping-policy/SKILL.md` (mirrored into `.claude/skills/` and `.agents/skills/` automatically).
