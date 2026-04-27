# 小红书帖子 · Paseo 种草

把 [Paseo](https://github.com/getpaseo/paseo)（一个让你在手机 / 桌面 / CLI
三端同步、远程指挥 Claude Code、Codex、Gemini、Copilot 等 coding agent 的开源
工具）整理成一篇可直接发布的小红书种草笔记。

## 内容

- `post.md` — 标题候选、正文、配图顺序、封面说明、话题标签
- `html/card-01-cover.html` — 封面 HTML 模板（米色纸感 + 暖橙 + 深蓝，
  纯内联 SVG 插画：床上拿手机 → wifi → 笔记本 4 个 agent）
- `html/_shared.css` — 复用 2026-04-25-claude-emotions 的设计 token
- `build.py` — `python3 build.py` 用 Playwright 把 HTML 渲染成
  1080×1440 @2x PNG
- `output/card-01-cover.png` — 已生成的封面（首图）
- `source-images/` — 4 张原始截图素材（待 Bingran 手动放入）：
  1. `01-mobile-sessions.png` — 手机端 sessions 列表（4 个仓库）
  2. `02-mobile-chat.png` — 手机端中文对话页 + GPT-5.4
  3. `03-desktop.png` — Mac 桌面端同一 session
  4. `04-github-repo.png` — github.com/getpaseo/paseo 仓库主页

## 重新生成封面

```sh
python3 build.py
```

需要 `playwright` (chromium)。第一次运行：
`pip3 install playwright && python3 -m playwright install chromium`

## 角度

不是"工具介绍"而是"我的新生活方式" — 强调"出门不带电脑也能让 AI
继续工作"，配合 4.7k stars 的社会证明，吸引：
- vibe coder / 独立开发者
- AI 工具党
- 多线作战的程序员
- 想入门 AI 编程的学生 / 转行人群

## 用到的 Xiaohongshu skill

- `01-内容创作/title-writing` — 数字 + 反差感 hook
- `01-内容创作/copywriting-skills` — 痛点 → 解决方案 → 场景 → CTA
- `01-内容创作/cover-design` — 封面强烈建议（"封面 = 80% 点击率"）
- `01-内容创作/hashtag-optimization` — 1 broad + 多 niche + 1 trending mix
- `01-内容创作/seeding-copywriting` — 真实场景 + "纯纯被救了" 的非广告口吻

## 待办

- [x] 设计并生成封面（见 `output/card-01-cover.png`）
- [ ] Bingran 把 4 张截图放进 `source-images/`
- [ ] 发布前检查标题字数（≤ 20）和话题数量（5-8）
