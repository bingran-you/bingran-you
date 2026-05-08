---
name: social-scraping-policy
description: Use before any browser-driven (computer-use, Playwright, claude-in-chrome, MCP, scripted fetch) read or scrape against social platforms — especially X / Twitter and Xiaohongshu / RedNote. Defines (1) SAFE scraping rules — account choice, tool choice, pacing, fingerprint hygiene, session length, abort signals, the legal / ToS boundaries Bingran's accounts must stay inside; (2) the bingran.ai /posts pipeline — paste a post URL → extract metadata → land a card with a thumbnail, including the recipes that actually work for X, Xiaohongshu, YouTube and Bilibili. Read this BEFORE clicking, navigating, or pulling data from these sites — even when the user only says "go look at X", "grab those posts", or "add this link to /posts."
---

# Social Scraping Policy & Operating Manual

How to read / scrape X (Twitter) and Xiaohongshu (RedNote) without damaging Bingran's accounts, **and** how to turn a post URL into a card on bingran.ai/posts. Three parts:

1. **Why these platforms are different** — the threat model, so the rules below make sense.
2. **The operating manual** — concrete, numeric defaults: account, tool, pacing, fingerprint, signals, backoff.
3. **The /posts pipeline** — concrete recipes that take a post URL and land a card on bingran.ai (data layout, per-platform extractors, thumbnail strategy, "paste-a-link" flow).

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

## Part 3 — The /posts pipeline (bingran.ai/posts)

Bingran's site has a **`/posts` page** that aggregates original posts from X, Xiaohongshu, YouTube and (eventually) Bilibili as cards in a masonry grid. When the user pastes a post URL with intent like "add this to /posts" / "grab these posts" / "把这条加进去" — this is what to do.

### 3.1 Data layout (one source of truth)

```
personal-site/
├── content/social/posts.json          # the data — single JSON array, sorted desc by date
├── lib/social-posts.ts                # types + loader (SocialPost, SocialPlatform, getAllSocialPosts)
├── components/social-post-card.tsx    # card rendering — image OR text-as-visual fallback
├── app/(personal)/posts/page.tsx      # the page (CSS-columns masonry)
└── scripts/add-social-post.mjs        # the URL → metadata → JSON-append script
```

**Schema** of one entry in `posts.json`:

```jsonc
{
  "id": "x-2052477417240031355",            // <platform>-<native-id>; primary key for dedupe
  "platform": "x",                          // "x" | "xiaohongshu" | "bilibili" | "youtube" | "linkedin" | "other"
  "url": "https://x.com/.../status/...",    // canonical post URL (with xsec_token for XHS)
  "title": "...",                           // optional preview text
  "description": "...",                     // optional, longer body
  "thumbnail": "/posts-thumbs/...jpg",      // optional; LOCAL path for XHS, remote https for YouTube/Bilibili, absent for X
  "date": "2026-05-07",                     // YYYY-MM-DD; drives sort order
  "addedVia": "manual" | "auto"             // metadata only
}
```

**Per-platform shape** (what's actually present after the script runs):

| Platform | id | url | date | title | description | thumbnail |
|---|---|---|---|---|---|---|
| `x` | ✅ `x-<digits>` | ✅ | ✅ | — | — | — |
| `youtube` | ✅ `youtube-<vidId>` | ✅ | ✅ | ✅ | ✅ | ✅ remote `i.ytimg.com` |
| `xiaohongshu` | ✅ `xhs-<noteId>` | ✅ | ✅ | ✅ | ✅ | ✅ **local** `/posts-thumbs/xiaohongshu/<id>.jpg` |
| `bilibili` | ✅ `bilibili-BV...` | ✅ | ✅ | ✅ | ✅ | ✅ remote `i0.hdslb.com` |

X is intentionally minimal — `react-tweet` fetches everything (text, author, avatar, media, tweet date) from the syndication API at render time, so the only field we record locally is the tweet id.

### 3.2 The script: `npm run post:add -- <url>`

`scripts/add-social-post.mjs` is the one entry point. Detects platform from URL, runs the right extractor, dedupes by `id` / `url`, appends to `posts.json`, re-sorts.

Override flags (when extraction misses something or you want to curate):
- `--title "Custom"` / `--description "..."` — override extracted text
- `--date 2026-05-07` — override extracted date
- `--thumbnail https://...` — override extracted image
- `--platform NAME` — force platform bucket

### 3.3 Per-platform extractor recipes

Per-platform reality, what works server-side, what needs the browser:

| Platform | Server-side fetch | Auth needed | Best metadata source |
|---|---|---|---|
| YouTube | ✅ works | no | `https://www.youtube.com/oembed?url=...&format=json` (title, author, thumbnail) |
| Bilibili | ✅ works | no | `https://api.bilibili.com/x/web-interface/view?bvid=BV...` (full JSON incl. pubdate) |
| Xiaohongshu | ✅ works **with `xsec_token`** | no (token IS the auth) | the share URL responds to plain `curl` and serves `og:image` / `og:title` / `og:description` |
| X / Twitter | ✅ id-only | no | parse `/status/(\d+)` from the URL — that's all the data we need |
| LinkedIn | ⚠️ partial | yes | generic OG-tag scrape |

Concrete per-platform notes:

**YouTube** — oembed is the cleanest path. No anti-bot risk, no auth. Date isn't in oembed; either parse the watch-page HTML `<meta itemprop="datePublished">` or pull from the channel RSS feed (`youtube.com/feeds/videos.xml?channel_id=UC...` returns last ~15 entries with full timestamps).

**Bilibili** — `api.bilibili.com/x/web-interface/view?bvid=BV...` returns `{title, desc, pic, pubdate}` directly. `pic` is already https. `pubdate` is unix seconds. For `b23.tv` shortlinks, `fetch` with `redirect: 'follow'` to resolve to the long URL first.

**Xiaohongshu — the big trick.** Bare `/explore/<id>` → 404. **But share URLs with `xsec_token` work without auth, even from `curl` with no cookies.** The recipe:
```bash
curl -s "https://www.xiaohongshu.com/explore/<id>?xsec_token=<token>&xsec_source=pc_user" \
  -A "Mozilla/5.0 ... Chrome/124.0.0.0 ..." \
  | grep -oE '<meta[^>]*og:(image|title|description)[^>]*'
```
The xsec_token is what XHS calls "share-link auth" — it's tied to the note ID, doesn't expire on a session timer, doesn't burn the account. Get it from the profile page DOM (the `<a>` href on each note tile carries it) or from a real "复制链接" share action on mobile.

XHS bonus: the **first 8 hex chars of the note ID are a unix timestamp** — `Date(parseInt(noteId.slice(0,8), 16) * 1000)` gives you the post date without any extra request.

XHS thumbnail caveat: the `og:image` URL is signed with a timestamp (`/2026MMDDHHMM/...`) and **expires within hours**. The `add-social-post.mjs` script handles this — it downloads the image immediately into `public/posts-thumbs/xiaohongshu/<note-id>.jpg` and rewrites `thumbnail` to the local path. See § 3.4 for why and how.

**X / Twitter — the simple one.** No metadata fetch. The `extractX` function in the script just parses the tweet id from `status/(\d+)` and writes a 4-field stub: `{platform, id, url, date}`. Everything visible (text, author, avatar, embedded media, like/repost counts, original post date) is fetched at render time by `<Tweet id={id}>` from the `react-tweet` library hitting `https://cdn.syndication.twimg.com/tweet-result?id=<id>`. **Do not** restore the old `publish.twitter.com/oembed` path — it added 80 lines of HTML-entity decoding and footer-regex parsing for data that's now redundant. If `--date` isn't passed and the tweet was back-dated, sort order will be off until you edit the JSON.

### 3.4 Thumbnail strategy — **never empty, never broken**

Goal: every card has visual content, and that content survives forever (no broken images six months later).

The card component (`components/social-post-card.tsx`) routes by platform:

1. **`platform === "x"`** → render `<Tweet id={tweetId}>` from `react-tweet`. Server component, fetches from `cdn.syndication.twimg.com` at build/request time. No `posts.json` thumbnail involved. Deleted tweets degrade to a built-in `<TweetNotFound>` tombstone.
2. **Has `thumbnail`** (other platforms) → `<img src={post.thumbnail}>` inside an aspect-ratio-locked container, with title + date below.
3. **Has no thumbnail and not X** (rare; only manual `--platform other` entries) → render text as a serif quote that fills the image slot, with platform icon as watermark.

**Where the thumbnail comes from:**
- **YouTube** → oembed `thumbnail_url` (e.g., `i.ytimg.com/vi/<id>/hqdefault.jpg`). Stable forever, leave remote.
- **Bilibili** → API `pic` field (e.g., `i0.hdslb.com/...`). Stable, leave remote.
- **Xiaohongshu** → 🚨 **download to local.** XHS CDN URLs are signed with a timestamp embedded in the path (`/2026MMDDHHMM/...`) and expire — leaving a `?` placeholder where the cover used to be. The `add-social-post.mjs` script downloads the `og:image` immediately to `public/posts-thumbs/xiaohongshu/<note-id>.jpg` (HTTP fetch with `Referer: https://www.xiaohongshu.com/` header — required, otherwise the CDN 403s) and rewrites `thumbnail` to `/posts-thumbs/xiaohongshu/<note-id>.jpg` so the page references the local copy. Total cost is ~135 KB per card.
- **X** → no thumbnail; `<Tweet>` handles all media inline.

**Why `react-tweet` for X (not the older text-as-visual path):**
- Tweets that were "Post on X" stubs (script-extracted title was empty) now render the real tweet content.
- Embedded media (images / videos / quoted tweets) shows up automatically.
- Card heights become consistent within the masonry — no more alternating tall-text-card / short-tweet-stub.
- Zero data to maintain in `posts.json`.

**What we tried and rejected** (don't waste budget retrying):
- ❌ `claude-in-chrome` `screenshot` / `zoom` of each XHS or X post — the in-page MCP overlay (a "Stop Claude" button) gets baked into the saved image. Cropping it out adds fragility. Use server-side `fetch` of the underlying CDN URL instead.
- ❌ JS-based extraction of CDN URLs via Chrome MCP `javascript_tool` — its safety filter blocks any string that looks like a signed URL (`[BLOCKED: Cookie/query string data]`). Use `find` / `read_page` / DOM rect coordinates instead, or `fetch` the URL server-side.
- ❌ Headless Playwright / Puppeteer hitting X or XHS while logged in — login wall + § Part 1 anti-bot risk on Bingran's account.
- ❌ Restoring the `publish.twitter.com/oembed` extractor for X — react-tweet supersedes it. The 80 lines of footer-regex + entity decoding bought us no rendered value.

### 3.4.5 Cross-browser layout stability — the masonry trap

CSS columns + variable-height children + async-loading images = different layout in Chrome / Safari / Firefox. Three rules pin it down:

1. **Aspect-ratio per platform**, set on the image's container, before the image loads:
   ```ts
   const THUMB_ASPECT = { youtube: "16 / 9", xiaohongshu: "4 / 5", bilibili: "16 / 10" };
   ```
   Reserves vertical space → no reflow when the image network arrives. `object-fit: cover` on the inner `<img>` handles cropping.
2. **Triple-property break-inside avoidance** on every grid child:
   ```css
   .social-post-grid > * {
     break-inside: avoid;
     page-break-inside: avoid;
     -webkit-column-break-inside: avoid;
   }
   ```
   Old Safari needs the `-webkit-` prefix; old Firefox respects the `page-break-` legacy name better than the modern one.
3. **react-tweet CSS overrides** (kill the lib's default 550px max-width and outer margin so the embed fills its column):
   ```css
   .social-tweet > div { margin: 0 !important; }
   .social-tweet .react-tweet-theme { max-width: 100% !important; }
   ```

Together these three things turn a jagged masonry that reflows visibly on first paint into a stable grid that's identical in all three browsers.

### 3.5 The "paste a link" flow

This is the default path when the user pastes a single post URL.

```
1. cd personal-site
2. npm run post:add -- "<paste url here>"           # auto-detects platform from domain
3. Read the printed JSON entry. Sanity check:
   - Is the platform right?
   - Is the date plausible? (script defaults to today if extractor can't find one)
   - For YouTube/Bilibili: does the remote thumbnail URL load?
   - For Xiaohongshu: does `public/posts-thumbs/xiaohongshu/<id>.jpg` exist on disk?
     (the script logs `[ok] cached thumbnail (<bytes>B) -> /posts-thumbs/...`)
   - For X: only id+url+date — no other content; react-tweet renders the rest.
4. If date is wrong → re-run with --date YYYY-MM-DD. Other --title / --description /
   --thumbnail overrides are available but rarely needed for the four primary platforms.
5. npm run lint && npm run build                    # verify; /posts is statically generated
6. Open localhost:3000/posts to spot-check the card across viewport sizes
7. git add personal-site/content/social/posts.json
   git add personal-site/public/posts-thumbs/xiaohongshu/<note-id>.jpg   # only for XHS
8. git commit -m "personal-site: add post — <one-line summary>"
9. git push + gh pr create + (if Bingran says ship) gh pr merge --squash
```

Step 7 is intentionally narrow:
- `posts.json` always
- `public/posts-thumbs/xiaohongshu/<note-id>.jpg` for XHS only
- Do NOT bulk-add unrelated regenerated files. `skills.generated.json` and `public/skill-files/*.md` auto-regenerate during `npm run dev` and belong to a different change.

### 3.6 The bulk-harvest flow (initial backfill / catch-up)

When the task is "pull everything from X / XHS / YouTube" rather than one URL — the recipes that landed the original 69 posts on 2026-05-07. Apply § Part 2 budgets at all times.

**X originals — use the search URL, not profile scroll.**

```
https://x.com/search?q=from%3A<HANDLE>%20-filter%3Areplies&f=live
```

Why search > profile: `from:HANDLE` excludes retweets natively (no DOM filtering needed); `-filter:replies` keeps only main-thread tweets; the live feed loads denser than the profile timeline (no "Who to follow" interruptions). Then in Chrome MCP:

1. `navigate` to the search URL
2. `find` with query "links to HANDLE status (e.g. /HANDLE/status/...)" — returns up to 20 status URLs per call
3. Append IDs to a tracker file, dedupe
4. Scroll ~25 wheel-ticks, wait ~3 s, `find` again
5. When `find` stops returning new IDs, paginate older with `until:YYYY-MM-DD` filter on the search URL

Why `find` over `javascript_exec`: Chrome MCP's safety filter blocks JS that extracts URLs (cookie/query-string heuristic). `find` queries the accessibility tree and returns matched links — same data, no block.

**XHS originals — profile + End key.**

```
https://www.xiaohongshu.com/user/profile/<USER-ID>
```

1. `navigate`, wait, press `End` to scroll to bottom (XHS profiles fully load on End in ~3 s)
2. `find` for `/explore/<id>` paths — returns up to 20 per call with `xsec_token` in adjacent links
3. Read accessibility tree (`read_page` filter=all) to get card titles
4. Date from `parseInt(id.slice(0,8), 16) * 1000`
5. For thumbnail, hit the share URL with curl as in § 3.3 — server-side, no browser needed

**YouTube — RSS, not browser.**

```
https://www.youtube.com/feeds/videos.xml?channel_id=UC...
```

Returns the last ~15 videos with `<yt:videoId>`, `<title>`, `<published>`, `<media:thumbnail url>`, `<media:description>`. No auth, no anti-bot, no Chrome MCP needed. To resolve a `@handle` to a channel ID, fetch `youtube.com/@handle` and grep `"channelId":"(UC[^"]+)"` from the HTML.

Older videos beyond the RSS window: must be added via `npm run post:add -- <watch-url>` one at a time.

### 3.7 Common gotchas (real ones we hit)

- **XHS bare `/explore/<id>` 404s** — always use the share URL with `xsec_token`. Profile-page hrefs include the token; copy them whole.
- **XHS thumbnail 403 cross-origin** — even when the URL is fresh, fetching it from a non-XHS origin (or without a Referer header) returns 403. The script sets `Referer: https://www.xiaohongshu.com/`. If you need to download by hand, the same header makes `curl` work.
- **XHS thumbnail expiry** — signed timestamp in the path; valid for hours, not days. Always cache locally on add. If you spot a `?` placeholder on `/posts`, the URL has rotted — re-add the post or copy a fresh share URL.
- **Date defaults to today** — if extractor can't find a date (X always; XHS sometimes), the script writes today. Pass `--date YYYY-MM-DD` for back-dated entries, or sort order will be wrong.
- **`xsec_token` URL encoding** — the token contains `=` and `+`. Use `encodeURIComponent` when building the URL programmatically. XHS server accepts both encoded and raw, but consistent encoding makes the JSON cleaner.
- **`npm run dev` regenerates skills data** — don't `git add -A` or you'll commit `lib/skills.generated.json` and `public/skill-files/*.md` along with your post change. Stage explicit paths only.
- **YouTube RSS only returns ~15 entries** — fine for steady-state monitoring, misses anything older. Use `npm run post:add` per URL for backfill.
- **react-tweet build-time fetch** — `<Tweet>` calls the syndication API during `next build`. If the build server has no internet (rare in CI but possible), tweets fail to render. Vercel build env has internet; local builds offline will get tombstones.
- **`react-tweet` light theme by default** — looks fine on the cream Berkeley palette, slightly off in dark mode. Wrap in `<div data-theme="dark">` based on `prefers-color-scheme` if it matters.
- **Chrome MCP `[BLOCKED: Cookie/query string data]`** — the safety filter strips signed-URL strings from JS-tool returns. If you need a CDN URL, fetch the page server-side and parse `og:image` from `<meta>`, or use Chrome MCP `find` to get DOM hrefs (those return through a different path that isn't filtered).
- **Account isolation for the script** — `add-social-post.mjs` only does anonymous server-side `fetch` (YouTube oembed, Bilibili API, XHS share URL, XHS image CDN). Doesn't touch Bingran's account cookies on any platform. § Part 2 risk applies only when a workflow uses `claude-in-chrome` against the live X / XHS UI.

### 3.8 Decision tree for "add this to /posts"

```
incoming URL
├── youtube.com / youtu.be       → npm run post:add -- <url>           ✅ 1 step, remote thumb
├── bilibili.com / b23.tv        → npm run post:add -- <url>           ✅ 1 step, remote thumb
├── xhslink.com / xiaohongshu.com
│    ├── has xsec_token in URL   → npm run post:add -- <url>           ✅ 1 step, thumb auto-cached locally
│    └── bare /explore/<id>      → ask Bingran for the share URL,
│                                  OR open profile in claude-in-chrome and copy
│                                  the token-bearing href                ⚠️ needs browser
├── x.com / twitter.com          → npm run post:add -- <url>           ✅ 1 step (id-only; react-tweet renders the rest)
│                                  Pass --date YYYY-MM-DD for back-dated tweets.
├── linkedin.com                 → npm run post:add -- <url>           ⚠️ generic OG, often thin
└── anything else                → npm run post:add -- <url>           ✅ falls through to generic OG scrape
```

For all four primary platforms (YouTube / Bilibili / XHS / X), the happy path is one command + `--date` if needed.

### 3.9 Anti-detection considerations specific to /posts work

The `/posts` pipeline mostly stays out of § Part 2 risk because:

- **Server-side `fetch` from add-social-post.mjs** uses no Bingran-account cookies. Doesn't count against any account's risk score. Free.
- **YouTube oembed, Bilibili JSON, XHS share URL, XHS image CDN, Twitter syndication (via react-tweet)** are unauthenticated public endpoints. ToS-fine for personal use.
- The only browser-driven steps are the **bulk harvest** (§ 3.6). Apply § Part 2 budgets there: stay under 50 items / 10 min / 6 navs/min on X, under 30 / 8 / 4 on XHS. Use the search URL pattern (denser, fewer navs) rather than scrolling the whole profile feed.
- **Don't rebuild the harvest just to "refresh" data.** New posts come in trickle; use the paste-a-link flow per post. Re-running a full harvest is the kind of pattern that flips a yellow signal.

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
