---
platform: 小红书
posted_at: 2026-04-27
images: 4 张截图（手机 sessions / 手机对话 / 桌面 / GitHub repo）
project: paseo (https://github.com/getpaseo/paseo)
url: https://paseo.sh
---

# 标题候选（≤ 20 字，按推荐顺序）

1. **在地铁上让 4 个 AI 同时给我打工[doge]** ← 主推
2. iPhone 上跑 Claude Code 真的爽
3. 找到神器！手机也能开 Claude Code
4. 不带电脑出门 AI 也不停工的方法
5. 4.7k 星的开源神器 vibe coder 狂喜

挑选逻辑：
- #1 = 数字 + 反差 + 打工梗，钩子最强（推荐）
- #2 #3 = 好奇 gap 型，适合搜 "Claude Code" 的精准用户
- #4 = 痛点反向 hook，适合不熟悉 AI 编程的泛人群
- #5 = 数据背书 + 圈层口令 ("vibe coder")，定向极客圈

---

# 正文（直接可发）

> 救命 我又被一个开源项目惊到了😭
>
> 之前最痛苦的就是不带电脑出门
> Claude / Codex 在 Mac 上半路停了
> 人在外面看着干瞪眼 啥也干不了
>
> 直到我发现了这个：Paseo🐎
> （GitHub 4.7k 星，最近还在猛涨）
>
> 一句话：把 Claude Code / Codex / Gemini / Copilot 全部打包成云端 session
> 📱手机 💻桌面 ⌨️CLI 三端同步
> 你在哪儿都能继续昨天的对话
>
> 我现在的真实日常 ↓
>
> 🚇 早上地铁：手机点开 sessions，让 Claude 跑测试
> ☕ 到办公室：MacBook 接力同一个 session，无缝衔接
> 🗂️ 跨仓库：4 个 repo 并行干活，全在一个面板
> 🔔 CI 挂了：通知推到手机，回一句话让 agent 自己修 bug
> 🌙 半夜灵感：不想开电脑，手机扔一句话过去就完事
>
> 重点是 完全开源、自部署、免费
> 不绑模型不绑供应商，Claude / GPT / Gemini 想用谁用谁
>
> 链接：paseo.sh
> （不是恰饭，纯纯被它救了打钱无门[笑哭R]）
>
> 评论区蹲一个：你最想在手机上让 AI 帮你干嘛？
>
> #AI编程 #ClaudeCode #vibecoding #程序员日常 #开源神器 #开发者工具 #productivity #独立开发

---

# 配图顺序（5 张）

1. **`output/card-01-cover.png`** ← 定制封面（首图，决定点击率）
   - 大字 hook：「躺在床上 / 指挥 4 个 AI / 替我打工」
   - 副标题：「不带电脑出门，AI 也不停工」
   - 插画：左下床上拿手机的人 → wifi 波 → 右下笔记本里 4 个 agent 在跑
   - 角标：Paseo · 4.7k⭐ 开源 / 手机指挥 AI / paseo.sh
2. **手机 Sessions 列表** (`source-images/01-mobile-sessions.png`) — 4 个仓库一览
3. **手机对话页** (`source-images/02-mobile-chat.png`) — 中文对话 + GPT-5.4
4. **Mac 桌面端同会话** (`source-images/03-desktop.png`) — 端云同步
5. **GitHub 仓库页** (`source-images/04-github-repo.png`) — 4.7k⭐ 信任背书

---

# 封面（已生成）

文件：`output/card-01-cover.png`（1080×1440 @2x，2160×2880）
模板：`html/card-01-cover.html`（用 `python3 build.py` 重新渲染）

设计要点（按 Bingran 要求两个元素）：
- ✅ 躺在床上：左下床上人物拿手机，"Zzz" 营造"躺平"感
- ✅ 指挥电脑上的 AI agents：右下笔记本 4 个 session（Claude/GPT/Gemini/Codex × 不同仓库），各自带进度条在跑
- 中间用橙色 wifi 虚线箭头连接：手机 → 笔记本，强调"远程指挥"

如果想调整：
- 想换标题色/换一个 hook → 改 `html/card-01-cover.html` 顶部 `<h1>`
- 想换品牌色 → 改 `html/_shared.css` 的 `--warm` / `--indigo`
- 想换插画风格（更卡通/更线稿）→ 改 SVG 内的 fill/stroke

---

# 标签策略

按 hashtag-optimization skill 的"1 broad + 3 niche + 1 trending + 1 branded"：
- broad: `#AI编程` `#程序员日常`
- niche: `#ClaudeCode` `#vibecoding` `#开发者工具` `#独立开发`
- trending: `#开源神器` `#productivity`

可换备选：`#GitHub` `#AItools` `#自动化` `#人工智能` `#数字游民`
