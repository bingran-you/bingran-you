---
name: social-scraping-policy
description: Use before any browser-driven (computer-use, Playwright, claude-in-chrome, MCP, scripted fetch) read or scrape against social platforms — especially X / Twitter and Xiaohongshu / RedNote. Defines what counts as SAFE scraping (account choice, tool choice, pacing, fingerprint hygiene, session length, signals to watch, how to back off) and the legal / ToS boundaries Bingran's accounts must stay inside. Read this BEFORE clicking, navigating, or pulling data from these sites — even when the user only says "go look at X" or "grab those posts."
---

# Social Scraping Policy & Operating Manual

How to read / scrape X (Twitter) and Xiaohongshu (RedNote) without damaging Bingran's accounts. Two parts:

1. **Why these platforms are different** — the threat model, so the rules below make sense.
2. **The operating manual** — concrete, numeric defaults: account, tool, pacing, fingerprint, signals, backoff.

This skill is the gate AND the playbook. If you read it and still don't know what to do, stop and ask Bingran.

## When this skill applies

Trigger if the task involves any of:

- Opening / navigating / clicking on **x.com, twitter.com, mobile.twitter.com, xiaohongshu.com, xhslink.com, rednote.com**, or their app variants, while a Bingran-owned account is logged in.
- Asking for "summary / recent posts / inbox / mentions / DMs / search results / a user's feed / comments under a note" from those platforms.
- A heartbeat / cron / `/loop` that touches one of those platforms periodically.
- Plans that would use `claude-in-chrome`, `computer-use`, Playwright, Puppeteer, or scripted HTTP against those domains.

Not needed for: reading a public news article that quotes a tweet, looking at a screenshot of a post Bingran shared, reading the official X API docs.

---

## Part 1 — Threat model (why platforms react)

### What platforms see

Every page load and click ships them a signal vector roughly like this:

- **Account graph**: account ID, age, follower/following ratio, prior interaction history.
- **IP / network**: IP, ASN, geo, residential vs datacenter, IPv4/IPv6.
- **Device fingerprint**: User-Agent + header order, Canvas hash, WebGL renderer, font list, screen size, timezone, language, hardware concurrency, audio context.
- **Behavior**: time between actions, scroll velocity, dwell distribution, click coordinates, mouse path geometry, time-of-day pattern.
- **Session shape**: ratio of read / search / profile-view / reply / like / DM, request burstiness, total session length.

Anti-bot ML rolls all of that into an account-level risk score. Crossing a threshold gets you throttled, captcha-walled, "limited" mode, shadow-banned, or banned outright.

### What "safe" means

Safe = **looks like Bingran himself opening the app to check something**. Not "bot wearing a human costume." The two are different:

- ❌ Bot costume: rotating proxies, anti-detect browser, randomized fingerprint, headless Chromium with `webdriver=false`, scripted scroll-and-grab loops.
- ✅ Bingran-himself: his real Chrome profile, his real cookies, MCP-driven DOM reads at human cadence, < 10 minutes per session, < 50 items per session, ends naturally.

The "bot costume" approach scales but invites detection. We don't scale. We do small, infrequent, human-paced reads.

### Per-platform reality

**X / Twitter**
- ToS: X's published automation rules ban non-API automation of the website. Repeated triggers can permanently suspend.
- Read ceilings (post-2023 cap): ~1000 posts/day unverified, ~10000/day Premium.
- Detection: very behavior-aware. Rapid scrolling through 100 tweets in a row, opening 20 profiles in 60 s, repeat-searching the same query — all flagged.
- Punishment ladder: rate-limit (HTTP 429 / "you're going too fast" toast) → temporary read-only / "limited" mode (12 h – 1 wk) → shadow-ban → permanent suspension.
- Bingran's account: `@bingran_bry`. Treat as expensive — don't risk it for casual reads.

**Xiaohongshu / RedNote**
- Highest anti-bot stack in the workspace. Multi-dim fingerprint (Canvas + WebGL + fonts + UA-header order), `x-s` signature rotates ~5 min, cookies ~10 min, signing algo reshuffled quarterly.
- Account-side: "read-only with zero interaction" looks like a zombie account; sudden interaction bursts also flag. ~60 % of bans come from same-IP multi-account linking.
- Legal red line (China): criminal case law exists for scraping XHS data **commercially** — convictions under 《非法获取计算机信息系统数据罪》. Personal lookup is grey; bulk collection / resale / external product use is the red line.
- Bingran's account: never use the personal one for any scraping. Use a dedicated observer account that's warmed up.

---

## Part 2 — The operating manual

### 2.1 Pre-flight checklist (before any scrape)

Run through this every time. Skip = ask Bingran.

1. **What is the actual deliverable?** "Look at one thing" vs "build a dataset" vs "monitor over time" — these have different rules.
2. **Which account am I using?** Confirm allowed (see § 2.2).
3. **Which tool am I using?** Confirm preferred for this platform (see § 2.3).
4. **What's my budget?** Items, time, navigations — set a cap *before* starting (see § 2.4).
5. **What are my stop signals?** Decide what abort looks like (see § 2.6).
6. **Am I scheduled / recurring?** If yes, must be Bingran-approved with a stop condition.
7. **Where will the data go?** No commits / no external LLM calls / no cross-agent forwarding without a § 2.7 review.

### 2.2 Account policy

| Platform | Allowed for read | Forbidden | Notes |
|---|---|---|---|
| X / Twitter | `@bingran_bry` (Bingran's main) at low volume | Any newly-created throwaway X account driven from this workspace | X bans throwaway accounts faster than reads damage the main; the main is paradoxically safer at low rate |
| Xiaohongshu | Dedicated **observer account** (separate from Bingran's personal XHS) | Bingran's personal XHS account, period | Observer must be warmed up: real phone register, ≥ 7 days normal browsing, occasional like/follow before any scrape work |

If no observer account exists yet for XHS, **stop and tell Bingran**. Do not register one autonomously — account creation is on the explicit-permission list.

### 2.3 Tool policy (in preference order)

**X / Twitter:**

1. **Paid X API** (if Bingran authorizes). Cleanest, no ToS issue. First choice for anything recurring or > 50 items.
2. **`claude-in-chrome` MCP** with Bingran's real Chrome profile. DOM-aware, ships the real fingerprint, looks like normal browsing. **Default for one-off lookups.**
3. **`computer-use` pixel control.** Slow, more obvious as a bot, only when 1 and 2 are blocked.
4. ❌ **Avoid**: headless Playwright/Puppeteer with default fingerprint, anti-detect browsers, proxy-pool tooling.

**Xiaohongshu:**

1. **Manual browsing while Bingran watches** for one-off lookups. This is fine and lowest risk.
2. **`MediaCrawler`-style flow** (saved-login Playwright context, JS-extracted x-s signature) for sustained read tasks on the observer account.
3. **`claude-in-chrome` MCP** with the observer-account cookie for low-volume.
4. ❌ **Avoid**: pure HTTP / requests without signature handling (will fail and burn the account fast), pixel-driven `computer-use` (high fingerprint risk, slow), main account anything.

### 2.4 Pacing budget

Hard caps per session. **Stop on cap, do not "round up."**

| Knob | X / Twitter | Xiaohongshu (observer) |
|---|---|---|
| Items read per session | ≤ 50 | ≤ 30 |
| Session length | ≤ 10 min | ≤ 8 min |
| Page navigations / min | ≤ 6 | ≤ 4 |
| Dwell per item | 5–15 s, jittered | 8–20 s, jittered |
| Scroll bursts | 2–4 wheel ticks then pause 2–5 s | 2–3 ticks then pause 3–6 s |
| Sessions per day | ≤ 3 | ≤ 2 |
| Min gap between sessions | ≥ 60 min | ≥ 90 min |
| Daily ceiling (% of platform cap) | ≤ 10 % of 1000/10000 | n/a (XHS doesn't publish, treat conservatively) |

Quick mental model: **a curious human checking the platform**, not a worker pulling a list.

### 2.5 Fingerprint and behavior hygiene

Do:

- Use Bingran's real, unmodified Chrome profile (or the observer's real Chrome profile).
- Let `claude-in-chrome` use the real cookies, headers, and timezone.
- Move through the UI like a person: open one thing, dwell, scroll a bit, sometimes go back without clicking through.
- Vary inter-action delays — never an exact 2.0 s loop. Use 2–8 s randomized.
- Keep the same IP for the whole session. If on Wi-Fi, don't switch mid-session.
- Match time-of-day to Bingran's normal use. 3 am scraping looks like a bot.

Don't:

- Don't strip or spoof User-Agent / headers. The real one is the safe one.
- Don't flip `navigator.webdriver` or any "stealth" plugin tricks. Detection vendors fingerprint the *evasion*.
- Don't rotate proxies. Don't VPN-hop mid-session.
- Don't scroll faster than ~1 viewport per 2 s.
- Don't open profile after profile after profile rapidly. Mix in scrolls and back-navigations.
- Don't repeat the same search query 5 times in 10 minutes — that pattern is uniquely bot-shaped.
- Don't trigger any action button "just to verify" — no like, no follow, no reply, no DM, no save, no share. Read-only is read-only.

### 2.6 Signals to watch — and how to back off

Watch for these in the page / network / UI:

| Signal | Severity | Action |
|---|---|---|
| Slow loading, spinners that linger > 5 s on previously-fast pages | 🟡 yellow | slow pacing 2x, finish current item, end session early |
| "You're going too fast" toast / banner | 🟡 yellow | end session immediately, 30+ min cooldown |
| HTTP 429 in network panel | 🟠 orange | end session, 2 hr cooldown, halve next session's budget |
| Captcha appears | 🔴 red | stop. Do not solve. Tell Bingran. No more scraping today. |
| "Limited" / read-only mode banner | 🔴 red | stop. Tell Bingran. No scraping for 24 h minimum. |
| Login wall when already logged in | 🔴 red | stop. Tell Bingran. Don't re-login from this session — re-login under suspicion is a strong bot signal. |
| Email / SMS verification request | 🔴 red | stop. Don't satisfy. Tell Bingran. |
| Suddenly-empty search results / timeline | 🟠 orange | possible shadow-ban. End session, tell Bingran. |
| 403 / "your account has been flagged" | 🔴 red | stop. Don't retry. Tell Bingran with full context. |

After **any** red signal: do not touch that platform from this workspace for 24 h. After **any** yellow signal: at least 30 min cooldown, halve the next session's budget.

Never solve a captcha on Bingran's behalf. That's a separate platform rule and a strong bot-confirmation signal.

### 2.7 Data handling (after the read)

What you pulled is *Bingran's* data viewed through his account. Treat it accordingly:

- **Default storage**: in-memory or `memory/YYYY-MM-DD.md` only.
- **Default sharing scope**: just back to Bingran in this conversation.
- **Forbidden without explicit per-task approval**:
  - Committing scraped content to git (any repo).
  - Pasting into PRs / issues / public docs.
  - Forwarding to other agents (Codex, sub-agents, external LLM APIs).
  - Posting to Discord / Slack / email.
  - Storing in Notion / Google Drive / external SaaS.
- **PII check**: if the content contains DMs, private replies, draft posts, or third-party personal info, treat as confidential — do not log even to `memory/`.
- **XHS-specific**: do not commit XHS-scraped content to any public-visible location. Anything that looks like a dataset (> 30 items, structured) needs explicit Bingran approval before being saved anywhere durable.

### 2.8 Reporting back

After every scrape, report to Bingran in this shape:

- **Account used**: which one.
- **Tool used**: claude-in-chrome / computer-use / API / manual.
- **Volume + time**: e.g. "27 items, 6 min, 4 page navs."
- **Risk signals seen**: none / yellow toast at item 18 / etc.
- **Where the data lives**: in this turn only / `memory/2026-05-07.md` / etc.
- **Sharing recommendation**: default no, justify any yes.

---

## Decision tree (quick reference)

```
incoming task touches X / XHS?
├── no  → skill not needed
└── yes
    ├── one-off lookup, < 5 items, < 5 min?
    │   ├── X        → claude-in-chrome MCP, Bingran's profile, human pace ✅
    │   └── XHS      → manual + Bingran watching, OR observer account ✅
    ├── lookup, 5–50 items, < 10 min?
    │   ├── X        → claude-in-chrome with §2.4 budget ✅
    │   └── XHS      → observer account only, MediaCrawler-style or claude-in-chrome ✅
    ├── recurring / scheduled / heartbeat-driven?
    │   └── STOP. Confirm cadence + stop condition with Bingran 🟡
    ├── building a dataset / > 50 items / sustained > 10 min?
    │   └── STOP. Confirm scope, account, storage, and use case with Bingran 🟡
    ├── commercial / external use of the data?
    │   └── STOP. Hard escalation — XHS legal + X ToS exposure 🔴
    └── any §2.6 red signal hit mid-run?
        └── STOP immediately. 24 h cooldown. Report to Bingran 🔴
```

---

## What NEVER works (don't try)

- Rotating proxy pools to "look like different users." Detection ML treats fast IP-switching as itself a bot signature.
- Anti-detect browsers (Multilogin, Nstbrowser, GoLogin) on Bingran's real account. The fingerprint mismatch from the user's history is the giveaway.
- Solving captcha to "keep going." Captcha-solved-then-resumed is a strong bot pattern.
- Bypassing X read limits via "scroll harder." The cap is enforced server-side; client-side tricks just spend rate budget faster.
- Multiple XHS accounts on the same IP. ~60 % of XHS bans come from this exact pattern.
- Headless Chromium with `--disable-blink-features=AutomationControlled` and other "stealth" flags. Detection vendors fingerprint the stealth flags.
- Treating "I'm just reading" as a free pass. Read-only sessions still ship every signal in § Part 1.

## When in doubt

Stop and ask Bingran. The cost of a 60-second pause to confirm is much lower than the cost of a banned account.

---

## References

- X automation rules (ToS): <https://help.x.com/en/rules-and-policies/x-automation>
- X read-limit announcement (2023): <https://www.socialmediatoday.com/news/twitter-implements-usage-limits-combat-data-scrapers/684831/>
- X 2024 ToS update banning data scraping: <https://nftnow.com/news/x-updates-terms-of-service-to-ban-unauthorized-data-crawling-scraping/>
- X shadowban detection mechanics (Pixelscan, 2025): <https://pixelscan.net/blog/twitter-shadowban-2025-guide/>
- Xiaohongshu anti-scraping mechanics (CSDN): <https://blog.csdn.net/klj3388/article/details/146016922>
- Xiaohongshu signing problem (DEV.to, 2026): <https://dev.to/sami_8858131362756585e4f4/how-to-scrape-rednote-xiaohongshu-with-python-in-2026-the-authsigning-problem-and-how-to-3f9e>
- XHS commercial-scraping criminal case (安全内参): <https://www.secrss.com/articles/72097>
- MediaCrawler reference implementation: <https://github.com/NanmiCoder/MediaCrawler>
- RedNote account-safety guide (Lepak Creator): <https://lepakcreator.com/comprehensive-guide-to-rednote-xiaohongshu-account-safety-risks-and-best-practices/>
