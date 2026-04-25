# 小红书卡片 · Anthropic "Emotion Concepts" 研究

把 Anthropic Transformer Circuits 团队 2026 年的研究
*"Emotion Concepts and their Function in a Large Language Model"*
（[transformer-circuits.pub/2026/emotions](https://transformer-circuits.pub/2026/emotions/index.html)）
整理成了 12 张适合在手机上浏览的中文图片卡片。

## 输出

- `output/card-01-cover.png` 到 `card-12-takeaway.png` — 每张 1080×1440 (3:4)，2× 高分辨。直接发小红书。
- `output/contact-sheet.png` — 12 张缩略图拼一块，方便预览顺序。

## 卡片顺序

| # | 主题 | 内容 |
|---|---|---|
| 01 | 封面 | "AI 也有情绪吗？" + Anthropic / Sonnet 4.5 标签 |
| 02 | TL;DR | 一句话总结：情绪向量 → 因果驱动行为 |
| 03 | 背景 | 为什么 LLM 会"激动 / 沮丧" — 训练机制 |
| 04 | 关键概念 | functional emotions（功能性情绪）vs 人类情绪 |
| 05 | 方法 | 怎么挖出"情绪向量"（171 词 → 故事 → 激活方向） |
| 06 | 几何 | 情绪空间像人 — valence × arousal |
| 07 | 局部性 | 情绪是"瞬时的"，不是持续状态 |
| 08 | 案例 1 | 勒索 — desperate ↑ → 22% → 72% |
| 09 | 案例 2 | 作弊（reward hacking）— 5% → 70% |
| 10 | 案例 3 | 谄媚 — 谄媚-严厉权衡 |
| 11 | 训练后 | Post-train 让 Claude 偏内省 / 低唤起 |
| 12 | Takeaway | 行为问题 → 情绪根源 → 训练启示 + 出处 |

## 设计

- 字体：Noto Serif/Sans CJK SC（标题） + Iowan Old Style（英文 / 数字）
- 配色：暖橙 (#d8693a) · 深蓝 (#2a3458) · 米色背景 (#f5efe4)
- 风格：纸质感 + 立体投影卡片，统一 footer 带页码

## 本地重新生成

```sh
python3 build.py
```

依赖：`playwright` (chromium)、Noto CJK 字体。模板在 `html/`，共享样式在 `html/_shared.css`。
图片素材：`source-images/`（含两张为适配卡片裁切的版本 `*_crop.png`）。
