# 小红书运营技能指南

**版本**: v3.0 Complete Edition
**更新**: 2025-01-22
**状态**: ✅ 完整 (139个技能)

---

## 🎯 这是什么？

这是小红书运营的**完整技能知识库**，包含 **139 个详细技能文档**，覆盖小红书运营的全链路知识。

每个技能都是独立的 SKILL.md 文件，包含：
- 详细的理论框架
- 实用的操作指南
- 常见错误和解决方案
- 真实案例分析
- 相关技能推荐

---

## 📂 目录结构

```
xiaohongshu-skills/
├── .claude-plugin/           # Claude Code 插件配置
│   └── marketplace.json           # 插件配置文件
├── README.md (本文件)
├── USER_GUIDE.md             # ⭐ 完整使用指南（推荐首先阅读）
├── skills/ (139个技能详细文档)
│   ├── 01-内容创作/ (23个技能)
│   ├── 02-账号运营/ (20个技能)
│   ├── 03-互动运营/ (8个技能)
│   ├── 03-数据分析/ (12个技能)
│   ├── 04-电商转化/ (17个技能)
│   ├── 05-平台规则/ (14个技能)
│   ├── 06-工具生态/ (14个技能)
│   ├── 07-营销推广/ (16个技能)
│   └── 08-增长策略/ (15个技能)
└── docs/                     # 详细文档
    ├── installation-guide.md # 安装指南
    ├── learning-paths.md     # 学习路径
    └── quick-start.md        # 快速入门
```

---

## 📊 技能分布总览

### 9大分类

| 分类 | 技能数 | 说明 |
|------|--------|------|
| **01-内容创作** | 23个 | 图文、视频、直播、系列内容 |
| **02-账号运营** | 20个 | 定位、规划、增长、品牌、退出 |
| **03-互动运营** | 8个 | 评论、私信、社群、粉丝管理 |
| **03-数据分析** | 12个 | 流量、用户、效果、竞品分析 |
| **04-电商转化** | 17个 | 选品、种草、带货、销售漏斗 |
| **05-平台规则** | 14个 | 规范、算法、风险、合规 |
| **06-工具生态** | 14个 | 剪映、醒图、千瓜、项目管理 |
| **07-营销推广** | 16个 | KOL、广告、活动、预算 |
| **08-增长策略** | 15个 | 算法、变现、品牌、长期战略 |
| **总计** | **139个** | 覆盖全链路 |

### 技能层次

| 层次 | 说明 | 占比 |
|------|------|------|
| **Tier 1 核心** | 必备基础技能 | ~30% |
| **Tier 2 进阶** | 重要提升技能 | ~40% |
| **Tier 3 高级** | 专项深度技能 | ~20% |
| **Tier 4 专家** | 战略级技能 | ~10% |

---

## 📖 如何使用本项目

### 🌟 快速上手（推荐）

**第一步：阅读 [USER_GUIDE.md](USER_GUIDE.md)** ⭐
- 完整的使用指南和学习路径
- 从零到精通的详细说明
- 4条学习路径供选择
- 实战案例演示

**第二步：安装插件**

**方法1：从 GitHub 安装（推荐）**
```bash
# 1. 克隆仓库
git clone https://github.com/vivy-yi/xiaohongshu-skills.git
cd xiaohongshu-skills

# 2. 在 Claude Code 中添加市场
/plugin marketplace add vivy-yi/xiaohongshu-skills

# 3. 安装插件
/plugin install xiaohongshu-complete-skills@xiaohongshu-skills
```

**方法2：手动克隆（开发模式）**
```bash
git clone https://github.com/vivy-yi/xiaohongshu-skills.git
cd xiaohongshu-skills
# Claude Code 会自动识别 marketplace.json 并加载技能
```

**第三步：开始对话**
- 打开 Claude Code
- 直接对话，技能自动触发

### 📚 详细文档

- **[USER_GUIDE.md](USER_GUIDE.md)** - ⭐ 完整使用指南（推荐首先阅读）
  - 项目简介
  - 4条完整学习路径
  - 技能使用详解
  - 实战案例
  - 139个技能清单

- **[docs/installation-guide.md](docs/installation-guide.md)** - 安装指南
  - 插件工作原理
  - 安装方式
  - 验证方法

- **[docs/learning-paths.md](docs/learning-paths.md)** - 学习路径
  - 新手入门路径
  - 电商带货路径
  - 品牌化运营路径

- **[docs/quick-start.md](docs/quick-start.md)** - 30天快速入门
  - 30天行动计划
  - 每周具体任务
  - 新手常见错误

---

## 🚀 快速开始

### 新手路径（1-2个月）

**第一步**: 阅读 `quick-start.md`
- 了解基础知识
- 掌握前10个核心技能
- 30天行动计划

**第二步**: 学习核心技能
```
01-内容创作/
  ├── content-niche-selection (内容定位)
  ├── visual-storytelling (视觉叙事)
  └── copywriting (文案创作)

02-账号运营/
  ├── account-positioning (账号定位)
  └── content-planning (内容规划)

03-数据分析/
  └── basic-data-analysis (基础数据分析)
```

**第三步**: 实践
- Week 1-4: 每周发布3-5篇内容
- Month 2: 分析数据，优化内容
- Month 3: 开始尝试变现

### 电商带货路径（2-3个月）

**重点技能**:
```
04-电商转化/
  ├── product-selection (选品策略)
  ├── seeding-strategy (种草策略)
  ├── livestream-sales (直播带货)
  └── sales-funnel (销售漏斗)

07-营销推广/
  ├── influencer-collaboration (达人合作)
  └── promotional-activities (促销活动)
```

### 品牌化运营路径（3-6个月）

**重点技能**:
```
02-账号运营/
  ├── personal-branding-advanced (个人品牌建设)
  ├── rebranding (品牌重塑)
  └── long-term-strategy (长期战略)

08-增长策略/
  ├── monetization-strategy (变现策略)
  └── platform-algorithm (平台算法)
```

---

## 📖 完整技能清单

### 01-内容创作 (23个)

**核心基础**:
- content-niche-selection (内容定位)
- visual-storytelling (视觉叙事)
- copywriting (文案创作)
- content-creation (内容创作)

**图文创作**:
- graphic-design (图文设计)
- photo-editing (图片编辑)
- content-layout (内容排版)

**视频创作**:
- short-video-production (短视频制作)
- video-script-writing (视频脚本)
- video-editing (视频剪辑)

**直播创作**:
- live-streaming-content (直播内容)
- live-interaction (直播互动)

**高级内容**:
- series-creation (系列内容)
- content-portfolio (作品集)
- content-scaling (内容规模化)

### 02-账号运营 (20个)

**定位规划**:
- account-positioning (账号定位)
- content-planning (内容规划)
- account-setup (账号搭建)

**增长策略**:
- growth-hacking (增长黑客)
- follower-growth (粉丝增长)
- viral-content (爆款内容)

**品牌建设**:
- personal-branding-advanced (个人品牌)
- rebranding (品牌重塑)
- brand-consistency (品牌一致性)

**生命周期**:
- account-merger (账号合并)
- hiatus-management (停播管理)
- exit-strategy (退出策略)

### 03-互动运营 (8个)

**互动技巧**:
- comment-management (评论管理)
- interaction-optimization (互动优化)
- private-message-management (私信管理)

**社群运营**:
- community-building (社群建设)
- fan-operations (粉丝运营)
- user-generated-content (UGC激励)

### 03-数据分析 (12个)

**基础分析**:
- basic-data-analysis (基础数据分析)
- content-performance (内容效果分析)
- account-analytics (账号数据分析)

**进阶分析**:
- competitor-analysis (竞品分析)
- trend-analysis (趋势分析)
- user-research (用户研究)

### 04-电商转化 (17个)

**选品策略**:
- product-selection (选品策略)
- product-research (产品调研)
- pricing-strategy (定价策略)

**种草转化**:
- seeding-strategy (种草策略)
- purchase-decision (购买决策)
- trust-building (信任建立)

**带货实战**:
- livestream-sales (直播带货)
- sales-funnel (销售漏斗)
- conversion-optimization (转化优化)

### 05-平台规则 (14个)

**规则规范**:
- platform-rules (平台规则)
- content-compliance (内容合规)
- advertising-rules (广告规范)

**风险管理**:
- risk-management (风险管理)
- crisis-communication (危机公关)
- account-security (账号安全)

### 06-工具生态 (14个)

**创作工具**:
- photo-editing-tools (图片工具)
- video-editing-tools (视频工具)
- design-tools (设计工具)

**运营工具**:
- data-visualization (数据可视化)
- project-management (项目管理)
- team-collaboration (团队协作)

### 07-营销推广 (16个)

**合作推广**:
- influencer-collaboration (达人合作)
- brand-collaboration (品牌合作)
- cross-promotion (跨界推广)

**付费推广**:
- paid-advertising (付费广告)
- budget-allocation (预算分配)
- roi-analysis (ROI分析)

### 08-增长策略 (15个)

**算法增长**:
- platform-algorithm (平台算法)
- traffic-acquisition (流量获取)
- content-distribution (内容分发)

**变现策略**:
- monetization-strategy (变现策略)
- revenue-models (收入模式)
- product-creation (产品创造)

**长期战略**:
- long-term-strategy (长期战略)
- ip-operations (IP化运营)
- sustainable-growth (可持续增长)

---

## 💡 核心洞察

### 1. 内容是基础
小红书 = **优质内容** + **真实分享**
- 内容是流量入口
- 真实是核心价值

### 2. 数据是方向
**数据分析** 驱动所有决策
- 不靠感觉靠数据
- 持续优化迭代

### 3. 变现是目标
内容 → 粉丝 → 信任 → 变现
- 建立信任是关键
- 多元化收入降低风险

---

## 📞 如何使用

### Claude Code 插件安装

本项目已配置为 Claude Code Marketplace 插件格式。

**安装方式1：通过 Marketplace 安装（推荐）**
```bash
# 1. 克隆仓库
git clone https://github.com/vivy-yi/xiaohongshu-skills.git
cd xiaohongshu-skills

# 2. 添加市场
/plugin marketplace add vivy-yi/xiaohongshu-skills

# 3. 安装插件
/plugin install xiaohongshu-complete-skills@xiaohongshu-skills
```

**安装方式2：手动克隆（开发模式）**
```bash
git clone https://github.com/vivy-yi/xiaohongshu-skills.git
cd xiaohongshu-skills
```

Claude Code 会自动读取 `.claude-plugin/marketplace.json` 并从 `skills/` 目录自动发现所有技能。

**使用方式**：
在 Claude Code 对话中，相关技能会自动触发。也可以手动指定：
```
请使用 account-positioning 技能帮我定位账号
```

### 查看技能文档

每个技能都是独立的 SKILL.md 文件，可以直接阅读：

```bash
# 查看某个技能
open skills/01-内容创作/content-niche-selection/SKILL.md

# 列出某个分类的所有技能
ls skills/01-内容创作/
```

### 按路径学习

**新手入门** (1-2个月):
1. 阅读 `quick-start.md`
2. 学习 Tier 1 核心技能
3. 跟随 30 天行动计划

**电商带货** (2-3个月):
1. 学习 04-电商转化 分类技能
2. 学习 07-营销推广 分类技能
3. 实践选品、种草、带货

**品牌化运营** (3-6个月):
1. 学习 02-账号运营 高级技能
2. 学习 08-增长策略 战略技能
3. 建立个人品牌，长期运营

---

## ✅ 质量保证

- ✅ **139个技能** 完整文档
- ✅ **9大分类** 系统化组织
- ✅ **实战导向** 每个技能包含案例
- ✅ **中英双语准备** 支持国际化
- ✅ **持续更新** 跟随平台发展

**这是目前最完整、最系统的小红书运营技能知识库！**

---

## 🎓 学习建议

1. **不要试图一次学完**
   - 技能很多，按需学习
   - 先学核心，再学进阶

2. **理论与实践结合**
   - 学一个技能，实践一个
   - 用数据验证效果

3. **定期复盘优化**
   - 每周看数据
   - 每月做复盘
   - 持续优化改进

---

## 🚀 立即开始

**最快3分钟上手**:
1. 阅读 `quick-start.md`
2. 选择1-2个核心技能
3. 开始创作第一篇内容

**系统化学习**:
1. 阅读 `skills-guide.md`
2. 选择适合的学习路径
3. 3-6个月系统化提升

---

**开始你的小红书之旅吧！** 🚀

有问题？查看各个技能文档，都有详细的说明和案例。
