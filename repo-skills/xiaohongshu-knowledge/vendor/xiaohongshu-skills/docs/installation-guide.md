# 小红书运营技能 - Claude Code 插件安装指南

**版本**: v3.0 Complete Edition
**更新**: 2025-01-22
**状态**: ✅ 139个技能已完成

---

## 🎯 项目本质

这不是一个普通的文档库，而是 **Claude Code 的插件系统**。

**核心价值**：
- 通过 `.claude-plugin/marketplace.json` 定义插件
- Claude Code 自动从 `skills/` 目录发现所有技能
- 139个技能覆盖小红书运营全链路
- 在对话中自动触发相关技能

---

## 📦 插件结构

本项目使用 Claude Code 的标准插件格式：

```
xiaohongshu-skills/
├── .claude-plugin/
│   └── marketplace.json           # 插件配置文件
├── skills/                   # 139个技能目录（自动发现）
│   ├── 01-内容创作/
│   ├── 02-账号运营/
│   └── ...
└── README.md
```

**关键文件**：
- `.claude-plugin/marketplace.json` - 定义插件基本信息（名称、版本、描述）
- `skills/` 目录 - Claude Code **自动发现**所有技能
- 每个技能目录包含 `SKILL.md` 文件
- 每个 `SKILL.md` 包含 YAML frontmatter（`name` 和 `description`）

---

## 🚀 安装方式

### 方法1: 通过插件市场安装（推荐）

当本项目发布到 Claude Code 插件市场后：

```bash
# 在 Claude Code 中执行
/claude-plugin install xiaohongshu-skills
```

Claude Code 会：
1. 读取 `.claude-plugin/marketplace.json`
2. 自动从 `skills/` 目录发现所有技能
3. 安装到 `~/.claude/skills/`
4. 技能立即可用

### 方法2: 本地安装

从 GitHub 克隆后直接使用：

```bash
# 克隆项目
git clone https://github.com/yourusername/xiaohongshu-skills.git
cd xiaohongshu-skills
```

**Claude Code 会自动识别**：
- 当你在该目录中打开 Claude Code 时
- 或当该项目被添加到插件路径时
- Claude Code 读取 `marketplace.json` 并自动发现 `skills/` 目录中的所有技能

### 方法3: 开发模式

如果你是开发者，想修改技能：

```bash
# 克隆项目
git clone https://github.com/yourusername/xiaohongshu-skills.git
cd xiaohongshu-skills

# 在 Claude Code 中打开此目录
# Claude Code 会自动识别并加载技能
```

修改技能后，Claude Code 会自动重新加载。

---

## 🔍 验证安装

### 检查插件配置

```bash
# 查看 marketplace.json
cat .claude-plugin/marketplace.json

# 应该看到：
# - name: "xiaohongshu-skills"
# - version, description, author 等
```

### 检查技能文件

```bash
# 检查某个技能是否存在
ls skills/01-内容创作/account-positioning/SKILL.md

# 查看技能的 YAML frontmatter
head -10 skills/01-内容创作/account-positioning/SKILL.md

# 应该看到：
# ---
# name: account-positioning
# description: Use when...
# ---
```

### 在 Claude Code 中测试

**测试1: 自动触发**
```
你: "我想开始一个小红书账号，不知道定位做什么"

Claude 应该:
1. 识别关键词："账号"、"定位"
2. 自动加载 account-positioning 技能
3. 按照技能中的步骤执行
4. 提供定位建议
```

**测试2: 手动指定**
```
你: "请使用 account-positioning 技能，帮我选择内容定位"

Claude 应该:
1. 加载 account-positioning 技能
2. 按照 When to Use 判断是否适用
3. 执行技能的步骤
4. 提供具体建议
```

---

## 🎭 插件工作原理

### marketplace.json 结构（官方格式）

```json
{
  "name": "xiaohongshu-skills",
  "version": "3.0.0",
  "description": "144个完整的小红书运营技能 - Claude Code 技能插件系统",
  "author": "Xiaohongshu Skills Team",
  "email": "xiaohongshu-skills@example.com",
  "homepage": "https://github.com/vivy-yi/xiaohongshu-skills",
  "repository": "https://github.com/vivy-yi/xiaohongshu-skills.git"
}
```

**关键特性**：
- 简洁格式：只需要插件基本信息
- **技能自动发现**：无需手动列出所有技能路径
- Claude Code 自动扫描 `skills/` 目录
- 识别每个 `SKILL.md` 的 YAML frontmatter

### 技能识别流程（自动发现）

```
1. Claude Code 启动
   ↓
2. 扫描 .claude-plugin/ 目录
   ↓
3. 读取 marketplace.json（获取插件基本信息）
   ↓
4. 自动扫描 skills/ 目录
   ↓
5. 读取每个 SKILL.md 的 frontmatter
   ↓
6. 注册技能到技能系统
   ↓
7. 技能在对话中可用
```

### YAML Frontmatter

每个技能的 `SKILL.md` 开头必须有：

```yaml
---
name: skill-name
description: Use when user asks about XXX
---
```

**作用**：
- `name`: 技能的唯一标识符
- `description`: 用于自动匹配和触发
- 当用户对话匹配到 `description` 中的关键词时，技能自动加载

---

## 🎯 在 Claude Code 中使用技能

### 方式1: 自动触发（推荐）

**场景1: 账号定位**
```
你: "我的小红书账号没有明确方向，粉丝增长很慢"

Claude (自动触发):
检测到关键词: "账号"、"方向"、"增长"
→ 自动加载: account-positioning
→ 执行: 按照技能步骤分析
→ 输出: 提供定位建议
```

**场景2: 内容创作**
```
你: "帮我想一个平价护肤品的种草文案"

Claude (自动触发):
检测到关键词: "种草"、"文案"
→ 自动加载: copywriting + seeding-strategy
→ 执行: 按照技能步骤创作
→ 输出: 提供文案建议
```

**场景3: 数据分析**
```
你: "我上周发了5篇笔记，数据都不好，帮我分析一下"

Claude (自动触发):
检测到关键词: "数据"、"分析"
→ 自动加载: basic-data-analysis
→ 执行: 按照技能步骤分析
→ 输出: 提供优化建议
```

### 方式2: 手动指定

```
你: "请使用 account-positioning 技能帮我定位账号"
```

```
你: "使用 personal-branding-advanced 技能，我想打造个人品牌"
```

```
你: "用 cold-start 技能，我的新号起号困难"
```

### 方式3: 组合使用

```
你: "我想优化我的小红书封面，请使用 cover-design 和 visual-storytelling 技能"

Claude 会:
1. 加载两个技能
2. 综合两个技能的方法论
3. 提供综合建议
```

---

## 📊 技能依赖关系

### 核心依赖图

```
account-positioning (账号定位) ⭐⭐⭐⭐⭐
  ├─ content-planning (内容策划)
  ├─ persona-building (人设打造)
  └─ 所有内容创作技能

data-analytics (数据分析) ⭐⭐⭐⭐⭐
  ├─ content-performance-analysis (内容效果分析)
  ├─ traffic-analysis (流量分析)
  └─ 所有优化类技能

content-creation (内容创作) ⭐⭐⭐⭐
  ├─ visual-storytelling (视觉叙事)
  ├─ copywriting (文案写作)
  └─ cover-design (封面设计)

short-video-production (短视频制作) ⭐⭐⭐⭐
  └─ video-editing (视频剪辑)
```

---

## 💡 实际使用示例

### 示例1: 新手账号定位

```
你: "我是新手，想做一个平价美妆账号，请帮我定位"

Claude (使用 account-positioning 技能):
让我们用3个关键问题来定位你的账号：

1. 你最擅长/最感兴趣的是什么？
   → 你提到了"平价美妆"，这是好的起点

2. 你能提供什么独特价值？
   → 可能是: 学生党视角、真实测评、国货推荐

3. 你的粉丝是谁？
   → 建议定位: "大学生平价国货美妆测评"

定位建议:
- 垂直领域: 美妆 > 国货 > 平价
- 目标受众: 18-24岁女大学生，预算有限
- 独特价值: 真实测评、性价比分析、学生党友好
- 账号名称: "平价美妆学生党"、"国货测评小透明"
```

### 示例2: 数据分析

```
你: "这是我上周的数据: 发5篇，平均浏览200，点赞30，评论5"

Claude (使用 basic-data-analysis 技能):
基于你提供的数据：

**当前表现**:
- 平均浏览: 200 (新账号正常范围)
- 点赞率: 15% (高于平均8-12%) ✅
- 评论率: 2.5% (略低于平均3-5%)

**诊断**:
1. ✅ 内容质量好 (高点赞率)
2. ⚠️ 互动引导不足 (评论率偏低)
3. ⚠️ 浏览量有提升空间

**优化建议**:
1. 增加互动引导: 结尾提问"你们觉得呢？"
2. 优化发布时间: 测试 7-9pm 发布
3. 分析爆款内容: 哪篇浏览最高？
```

---

## ⚠️ 常见问题

### Q1: 技能没有被自动加载？

**可能原因**:
1. `marketplace.json` 路径不正确
2. Claude Code 未扫描到插件
3. 技能的 YAML frontmatter 有问题

**解决方法**:
```bash
# 1. 检查 marketplace.json
cat .claude-plugin/marketplace.json

# 2. 检查技能 frontmatter
head -5 skills/01-内容创作/account-positioning/SKILL.md

# 3. 重启 Claude Code
```

### Q2: 安装后技能不生效？

**检查清单**:
- [ ] `.claude-plugin/marketplace.json` 存在
- [ ] `skills/` 目录结构正确
- [ ] 每个技能有 `SKILL.md` 文件
- [ ] `SKILL.md` 有正确的 YAML frontmatter

### Q3: 如何更新技能？

```bash
# 拉取最新版本
git pull

# Claude Code 会自动重新加载
# 或者重启 Claude Code
```

---

## 🔄 插件开发

### 修改技能

如果你想修改或添加技能：

1. 编辑 `skills/` 目录下的技能文件
2. 确保 `SKILL.md` 有正确的 YAML frontmatter（`name` 和 `description`）
3. 保存后，Claude Code 会自动重新加载（技能会自动被发现）

### 添加新技能

```bash
# 1. 创建技能目录
mkdir skills/01-内容创作/new-skill

# 2. 创建 SKILL.md（必须包含 YAML frontmatter）
cat > skills/01-内容创作/new-skill/SKILL.md << 'EOF'
---
name: new-skill
description: Use when user asks about XXX
---

# 技能标题

## 概述
...
EOF

# 3. 完成！Claude Code 会自动发现新技能
# 无需手动更新 marketplace.json（技能自动发现）
```

---

## ✅ 安装检查清单

### 安装前

- [ ] 已克隆或下载项目
- [ ] 项目目录包含 `.claude-plugin/` 目录
- [ ] `.claude-plugin/marketplace.json` 文件存在

### 安装后

- [ ] Claude Code 已识别插件
- [ ] 可以在对话中自动触发技能
- [ ] 可以手动指定技能使用

### 验证测试

- [ ] 测试自动触发: "帮我定位账号"
- [ ] 测试手动指定: "使用 account-positioning 技能"
- [ ] 确认技能按预期工作

---

## 🚀 立即开始

**最快3分钟上手**:

1. **克隆项目**
   ```bash
   git clone https://github.com/yourusername/xiaohongshu-skills.git
   cd xiaohongshu-skills
   ```

2. **打开 Claude Code**
   - 在该目录中启动 Claude Code
   - Claude Code 自动识别并加载技能

3. **开始使用**
   - 与 Claude 对话
   - 自然描述问题
   - Claude 会自动使用相关技能

---

## 📚 相关资源

- **README.md** - 项目总览
- **docs/quick-start.md** - 30天快速入门
- **docs/learning-paths.md** - 学习路径

---

**插件安装指南完成！** 🎉

现在你可以在 Claude Code 中使用这 139 个小红书运营技能了！

**核心价值**：在与 Claude 对话时，它会自动识别你的需求，加载相关技能，并按照经过验证的方法论为你提供建议。

**开始使用吧！** 🚀
