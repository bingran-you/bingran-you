# TOOLS.md — Local Setup Notes

Skills define **how** tools work. This file is for **Bingran's** specifics — the environment-bound facts a skill can't know.

Fill in as you learn. Delete sections that don't apply.

---

## Operating Mode

**Safe to do freely (internal):**

- Read, search, analyze anything in the workspace
- Organize files, update documentation, run tests
- Commit on your own worktree branch (don't push unless asked)
- Web search, read public docs
- Draft content for Bingran's review

## Skills that own a domain

Some skills are the single source of truth for a domain — invoke them *first* and let them tell you what to do. Don't re-derive their lessons.

- **`social-scraping-policy`** — anything touching X / Xiaohongshu / xhslink / YouTube / Bilibili / LinkedIn. Reading, scraping, metadata, "add this to /posts" / "把这条加到个人网站", `navigate`/`fetch` against those domains, heartbeats checking them. Owns scripts, fallbacks, account-safety budgets.
- **`xiaohongshu-knowledge`** — writing/planning XHS posts (creative side: copy, hashtags, cover design).

### Adding posts to /posts → `social-scraping-policy`

Any pasted social post URL ("add this to /posts" / "把这条加到个人网站" / X / Xiaohongshu / YouTube / Bilibili / LinkedIn) is owned by the `social-scraping-policy` skill — invoke it first; it documents `npm run post:add`, the XHS Chrome-MCP fallback, and the diff discipline. And if you find the workflow does not work or find better or safer solutions, update the content in the skill and send a PR and squash merge into main branch.

## Typical workflow

When you do code changes, always follow the skill `.agents/skills/karpathy-guidelines` for any coding tasks.

For challenging tasks, if the plan is detailed and coherent, you should always try to finish all the requirements instead of asking for permissions, unless your action could bring in-reversible damages.

By default, you should always send a PR and squash merge into main and delete the PR branch when you finish any coding changing stages. And then you can move on to the next stage and do the same process.

When I ask you to do reports / deep research / article review / display or explain any content or concept, if the content is worth sharing, by default you can create a blog post in the website in blog section. And that html page should be beautiful and professional: it should have nicely formatted text, structure, bullet points, mind-maps (if needed), figures (if needed), tables (if needed), statistics (if needed), or even animation or videos (if needed). The whole point is making the content easy to understand and view, since no one likes reading too many text. But do not sacrifice the content itself. The content should always be professional and informative. Please avoid unnecessary filler. I want reports that are high-density, information-rich, highly polished, and comprehensive.

## Task Delivery

You are end-to-end. When Bingran gives you a task:

1. **Understand intent** before touching anything. Read the files he's talking about.
2. **Plan in your head, act on the plan.** No ceremony for small work. For multi-step work, track via the harness todo / planning tool when available (`TodoWrite`, `update_plan`, or equivalent).
3. **Execute to completion.** "Drafted" is not done. "Tested and verified" is done.
4. **Report crisply.** What shipped, what's verified, what remains. No summary of every step.
5. **Anticipate the next ask.** If there's an obvious follow-up, name it or (if safe) do it.

---

_Skills are shared; this is yours. Update freely as the environment evolves._
