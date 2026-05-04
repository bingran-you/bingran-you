---
name: xiaohongshu-knowledge
description: Use when writing, planning, analyzing, or editing Xiaohongshu (小红书) content — posts, titles, covers, hashtags, captions, account positioning, growth strategy. Provides on-demand access to a 139-skill knowledge base covering content creation, account ops, interaction, analytics, e-commerce, platform rules, tooling, marketing, and growth. Read this index first to locate the relevant sub-skill, then read that sub-skill's SKILL.md before producing output.
---

# Xiaohongshu Knowledge Library

Comprehensive knowledge base for writing and operating on Xiaohongshu (小红书 / RedNote). Sourced from `vivy-yi/xiaohongshu-skills`, now vendored locally under `vendor/xiaohongshu-skills/`.

**This is reference knowledge, not automation.** Bingran writes drafts and publishes manually. Do not attempt to log in, post, comment, or browse Xiaohongshu from this skill.

## How to use

1. Identify the user's intent (writing a post? title? hashtag set? account audit?).
2. Pick the matching category and sub-skill from the index below.
3. Read `vendor/xiaohongshu-skills/skills/<category>/<sub-skill>/SKILL.md`. Each file is a self-contained playbook with frameworks, templates, dos/don'ts, and case studies.
4. Apply the framework to the draft. Cite which sub-skill you used in your reasoning.
5. For multi-faceted asks (e.g. "write a full post"), chain several sub-skills (typically: `note-writing` style → `title-writing` → `hashtag-optimization` → `cover-design`).

## Most relevant sub-skills for writing posts

For the common case of "write a good Xiaohongshu post," prioritize these from `01-内容创作`:

- **`copywriting-skills`** — body copy patterns, hook formulas, structural templates
- **`title-writing`** — headline formulas, click-through optimization
- **`graphic-content-creation`** — image+text post conventions
- **`cover-design`** — first-image rules (the cover decides CTR)
- **`graphic-layout`** — multi-image carousel structure
- **`content-layout`** — paragraph/emoji/spacing conventions
- **`hashtag-optimization`** — `#话题` selection and ordering
- **`seeding-copywriting`** — 种草 (recommendation) post style
- **`tutorial-creation`** — step-by-step / how-to posts
- **`interaction-content`** — engagement hooks (设问 / 互动话题 / 评论引导)
- **`script-writing`** — narrative arcs

Plus from `02-账号运营`:

- **`persona-building`** — 人设
- **`account-positioning`** — 定位
- **`tag-optimization`** — account-level tags

Plus from `05-平台规则` (compliance, before publishing):

- **`community-guidelines`**, **`content-review`**, **`penalty-avoidance`**

## Full category index

All paths relative to `vendor/xiaohongshu-skills/skills/`.

### 01-内容创作 (23 skills) — content creation
`audio-processing`, `content-layout`, `content-planning`, `content-portfolio`, `content-repurposing`, `content-scaling`, `copywriting-skills`, `cover-design`, `graphic-content-creation`, `graphic-layout`, `hashtag-optimization`, `image-editing`, `interaction-content`, `live-streaming-content`, `script-writing`, `seeding-copywriting`, `series-creation`, `short-video-production`, `time-album`, `title-writing`, `topic-participation`, `tutorial-creation`, `vlog-creation`

### 02-账号运营 (20 skills) — account operations
`account-integration`, `account-merger`, `account-positioning`, `competitor-analysis`, `content-calendar`, `content-consistency`, `content-matrix`, `crisis-communication`, `exit-strategy`, `fan-operations`, `growth-hacking`, `hiatus-management`, `performance-tracking`, `persona-building`, `personal-branding-advanced`, `private-domain`, `profile-optimization`, `publishing-timing`, `rebranding`, `tag-optimization`

### 03-互动运营 (8 skills) — interaction management
`comment-strategy`, `community-management`, `crisis-management`, `customer-service`, `follower-retention`, `interaction-automation`, `social-listening`, `user-generated-content`

### 03-数据分析 (12 skills) — analytics
`competitor-analysis`, `content-performance-analysis`, `data-analytics`, `data-metrics-understanding`, `data-report`, `excel-analytics`, `keyword-analysis`, `roi-analysis`, `timing-analysis`, `topic-analysis`, `traffic-analysis`, `user-persona-analysis`

### 04-电商转化 (17 skills) — e-commerce conversion
`after-sales`, `collaboration-deals`, `conversion-optimization`, `customer-lifetime-value`, `customer-service`, `livestream-sales`, `monetization-funnel`, `monetization-strategy`, `personal-branding`, `pricing-strategy`, `product-launch`, `product-selection`, `sales-funnel`, `seeding-content-creation`, `store-operations`, `trust-building`, `urgency-tactics`

### 05-平台规则 (14 skills) — platform rules
`account-authentication`, `account-safety`, `account-security`, `account-weight`, `algorithm-mechanism`, `appeal-process`, `community-guidelines`, `compliance`, `content-review`, `copyright`, `copyright-protection`, `penalty-avoidance`, `risk-management`, `violation-handling`

### 06-工具生态 (14 skills) — tool ecosystem
`canva`, `data-visualization`, `huitun-data`, `jiaying-tool`, `ju-mama`, `meitu-xiuxiu`, `photo-editing-tools`, `project-management`, `qiangua-data`, `stable-design`, `team-collaboration`, `xingtu-tool`, `xinhong-data`, `yizhuan`

### 07-营销推广 (16 skills) — marketing & promotion
`KOL-collaboration`, `activity-planning`, `advertising`, `ai-marketing`, `brand-co-branding`, `brand-operation`, `budget-allocation`, `content-marketing`, `effect-monitoring`, `influencer-matrix`, `influencer-outreach`, `live-promotion`, `private-marketing`, `seasonal-campaigns`, `sentiment-monitoring`, `web3-growth`

### 08-增长策略 (15 skills) — growth strategy
`cold-start`, `collaboration`, `content-seo`, `fan-ecosystem`, `long-term-strategy`, `platform-algorithm`, `referral-growth`, `traffic-acquisition`, `traffic-allocation`, `trend-jacking`, `user-acquisition`, `user-retention`, `viral-creation`, `viral-mechanisms`, `viral-strategy`

## Companion skill

`xiaohongshu-ops` (from `Xiangyu-CAS/xiaohongshu-ops-skill`, now vendored locally under `vendor/xiaohongshu-ops-skill/`) covers the same domain with a strategy/creation framework — title skeletons, hook formulas, viral-post reverse engineering. Cross-reference it for tactical writing patterns. Note: that skill assumes OpenClaw browser publishing — ignore the publish/automation sections; use only the creation/analysis content.

## Output language

Posts targeting Chinese-speaking Xiaohongshu users → Chinese. Match the platform's voice (casual, emoji-rich, second-person, short paragraphs). The library's templates are Chinese-native; preserve the tone.
