# 小红书运营技能 - 完整使用指南

**版本**: v3.0 Complete Edition
**更新**: 2025-01-22
**技能总数**: 139个
**分类**: 9大分类

---

## 📖 目录

1. [项目简介](#项目简介)
2. [快速开始](#快速开始)
3. [完整学习路径](#完整学习路径)
4. [技能使用详解](#技能使用详解)
5. [实战案例](#实战案例)
6. [常见问题](#常见问题)
7. [进阶技巧](#进阶技巧)

---

## 项目简介

### 这是什么？

**这是一个 Claude Code 技能插件系统**，包含 139 个小红书运营技能，覆盖从账号定位到变现变现的完整运营链路。

### 核心特点

- ✅ **139个技能** - 覆盖小红书运营全链路
- ✅ **9大分类** - 内容创作、账号运营、互动运营、数据分析、电商转化、平台规则、工具生态、营销推广、增长策略
- ✅ **自动触发** - Claude Code 对话中自动识别并加载相关技能
- ✅ **实战导向** - 每个技能包含真实案例和操作步骤
- ✅ **系统化** - 技能之间有依赖关系，形成完整知识体系

### 适合谁使用？

- 🎯 **小红书新手** - 想从零开始做账号
- 💼 **运营从业者** - 提升专业技能
- 🛒 **电商卖家** - 通过小红书带货变现
- 🏢 **品牌方** - 建立小红书品牌影响力
- 📱 **内容创作者** - 提升内容质量和运营效率

---

## 快速开始

### 第一步：安装插件

```bash
# 克隆项目到本地
git clone https://github.com/yourusername/xiaohongshu-skills.git
cd xiaohongshu-skills
```

**就这么简单！** Claude Code 会自动识别 `.claude-plugin/marketplace.json` 并自动发现 skills/ 目录中的所有 139 个技能。

### 第二步：开始使用

打开 Claude Code，直接对话：

```
你: "我想开始一个小红书账号，不知道定位做什么"
```

Claude 会自动：
1. 识别关键词："账号"、"定位"
2. 加载 `account-positioning` 技能
3. 按照技能步骤为你提供建议

### 第三步：验证安装

测试技能是否正常工作：

**测试1：自动触发**
```
你: "帮我优化一下小红书封面"
→ Claude 应该自动加载 cover-design 技能
```

**测试2：手动指定**
```
你: "请使用 account-positioning 技能帮我定位账号"
→ Claude 应该加载指定技能
```

---

## 完整学习路径

### 🎯 路径选择指南

根据你的目标和水平选择合适的路径：

| 你的情况 | 推荐路径 | 时间 | 目标 |
|---------|---------|------|------|
| 零基础新手 | [路径1：新手入门](#路径1新手入门) | 1-2月 | 0-1000粉 |
| 想变现赚钱 | [路径2：电商带货](#路径2电商带货) | 2-3月 | 月入3000-5000 |
| 想长期发展 | [路径3：品牌化运营](#路径3品牌化运营) | 3-6月 | 建立个人IP |
| 想系统学习 | [路径4：完整学习](#路径4完整系统学习) | 6-12月 | 成为专家 |

---

### 路径1：新手入门 (1-2个月)

**适合**：零基础、小白用户
**目标**：掌握基础，从0到1000粉
**时间**：每天1-2小时

#### Week 1-2: 定位与基础

**学习目标**：
- ✅ 确定账号定位
- ✅ 了解平台规则
- ✅ 下载必备工具

**必学技能**：
```
1. account-positioning (账号定位) ⭐⭐⭐⭐⭐
   - 3个关键问题定位法
   - 垂直领域选择
   - 目标受众定义

2. content-planning (内容规划)
   - 内容矩阵设计
   - 发布节奏规划
   - 内容系列化

3. platform-rules (平台规则)
   - 内容规范
   - 违规风险
   - 流量机制
```

**本周任务**：
- [ ] 回答3个定位问题
- [ ] 确定垂直领域
- [ ] 下载剪映、醒图
- [ ] 准备5篇内容
- [ ] 了解平台基础规则

**与 Claude 对话示例**：
```
你: "我想做平价穿搭账号，请帮我定位"
Claude: 加载 account-positioning 技能，提供定位建议
```

#### Week 3-4: 内容创作

**学习目标**：
- ✅ 掌握图文创作
- ✅ 学会基础短视频
- ✅ 优化封面和标题

**必学技能**：
```
1. visual-storytelling (视觉叙事) ⭐⭐⭐⭐
   - 图片构图
   - 视觉风格统一
   - 封面设计

2. copywriting-skills (文案写作)
   - 标题写作技巧
   - 正文结构
   - 互动引导

3. short-video-production (短视频制作)
   - 剪映基础操作
   - 视频结构
   - 字幕和音乐
```

**本周任务**：
- [ ] 创作5篇图文笔记
- [ ] 制作3个短视频
- [ ] 优化封面设计
- [ ] 测试不同标题风格
- [ ] 每周发布3-4篇

**与 Claude 对话示例**：
```
你: "帮我想一个平价护肤品的种草文案"
Claude: 加载 copywriting + seeding 技能，提供文案框架
```

#### Week 5-6: 发布与优化

**学习目标**：
- ✅ 掌握发布技巧
- ✅ 学会数据分析
- ✅ 持续优化内容

**必学技能**：
```
1. publishing-timing (发布时机)
   - 最佳发布时间
   - 粉丝活跃时段
   - 发布频率

2. basic-data-analysis (基础数据分析)
   - 核心指标解读
   - 数据趋势分析
   - 优化方向

3. interaction-automation (互动优化)
   - 评论管理
   - 粉丝互动
   - 社群运营
```

**本周任务**：
- [ ] 建立固定发布节奏
- [ ] 每周数据复盘
- [ ] 测试发布时间
- [ ] 优化低效内容类型
- [ ] 活跃回复评论

**与 Claude 对话示例**：
```
你: "我上周发了5篇，平均浏览200，帮我分析"
Claude: 加载 data-analysis 技能，提供诊断和建议
```

#### Week 7-8: 增长与突破

**学习目标**：
- ✅ 粉丝增长到500-1000
- ✅ 打造1篇爆款内容
- ✅ 建立稳定运营模式

**必学技能**：
```
1. cold-start (冷启动)
   - 新号起号技巧
   - 初始流量获取
   - 账号权重提升

2. viral-creation (爆款创作)
   - 爆款内容特征
   - 选题技巧
   - 传播机制

3. growth-hacking (增长黑客)
   - 流量获取技巧
   - 话题蹭热点
   - 互动引导
```

**本周任务**：
- [ ] 测试爆款内容方向
- [ ] 参与热门话题
- [ ] 优化账号主页
- [ ] 建立粉丝群
- [ ] 目标：粉丝500-1000

**与 Claude 对话示例**：
```
你: "我的新号起号困难，请用 cold-start 技能帮我想办法"
Claude: 加载 cold-start 技能，提供起号策略
```

**第一个月目标检查**：
- [ ] 粉丝达到 500-1000
- [ ] 至少1篇爆款（100+点赞）
- [ ] 建立稳定发布节奏
- [ ] 掌握基础数据分析

---

### 路径2：电商带货 (2-3个月)

**适合**：已有1000+粉丝，想变现
**目标**：月入3000-5000元
**前置要求**：完成路径1或已有基础

#### Month 1: 选品与供应链

**必学技能**：
```
1. product-selection (选品策略) ⭐⭐⭐⭐⭐
   - 选品标准
   - 市场分析
   - 竞品调研

2. product-research (产品调研)
   - 产品深度分析
   - 用户需求洞察
   - 差异化定位

3. pricing-strategy (定价策略)
   - 成本核算
   - 价格定位
   - 促销策略
```

**本月任务**：
- [ ] 测试3-5个产品
- [ ] 建立供应链联系
- [ ] 制作产品展示内容
- [ ] 初步转化测试

#### Month 2: 种草内容创作

**必学技能**：
```
1. seeding-content-creation (种草内容)
   - 种草文案结构
   - 真实体验分享
   - 信任建立技巧

2. trust-building (信任建立)
   - 专业度打造
   - 真实性展示
   - 用户证言

3. conversion-optimization (转化优化)
   - 购买引导技巧
   - 评论区运营
   - 私域转化
```

**本月任务**：
- [ ] 发布20篇种草笔记
- [ ] 测试不同产品表现
- [ ] 优化转化路径
- [ ] 目标：初步转化5-10单

#### Month 3: 流量与放大

**必学技能**：
```
1. KOL-collaboration (达人合作)
   - 达人筛选
   - 合作谈判
   - 效果追踪

2. advertising (广告投放)
   - 聚光平台基础
   - 素材优化
   - ROI优化

3. livestream-sales (直播带货)
   - 直播流程设计
   - 互动技巧
   - 转化话术
```

**本月任务**：
- [ ] 尝试付费投放
- [ ] 对接2-3个达人
- [ ] 开展直播带货
- [ ] 目标：月入1000-2000元

---

### 路径3：品牌化运营 (3-6个月)

**适合**：已有2000+粉丝，想长期发展
**目标**：建立个人IP，长期价值
**前置要求**：完成路径1

#### Month 1-2: 品牌定位

**必学技能**：
```
1. personal-branding-advanced (个人品牌建设)
   - 品牌核心价值
   - 视觉识别系统
   - 品牌故事

2. content-consistency (内容一致性)
   - 内容风格统一
   - 人设打造
   - 品牌调性

3. content-portfolio (作品集管理)
   - 优质内容整理
   - 合集策划
   - 个人作品集
```

#### Month 3-4: 内容规模化

**必学技能**：
```
1. content-scaling (内容规模化)
   - 批量生产方法
   - 内容复用策略
   - 团队协作

2. series-creation (系列内容)
   - 系列策划
   - IP打造
   - 连续性内容

3. project-management (项目管理)
   - 内容日历
   - 批量生产流程
   - 质量控制
```

#### Month 5-6: 战略变现

**必学技能**：
```
1. monetization-strategy (变现策略)
   - 多元化收入
   - 品牌合作升级
   - 产品开发

2. long-term-strategy (长期战略)
   - 职业规划
   - IP价值延伸
   - 可持续增长

3. ip-operations (IP化运营)
   - IP打造策略
   - 跨平台运营
   - 商业化路径
```

---

### 路径4：完整系统学习 (6-12个月)

**适合**：想成为小红书运营专家
**目标**：掌握所有技能，系统化知识

#### 阶段1: 核心基础 (Month 1-2)

**01-内容创作 (23个技能)**
- 图文创作：graphic-layout, image-editing, cover-design
- 视频创作：short-video-production, script-writing, video-editing
- 直播创作：live-streaming-content
- 内容规划：content-planning, content-scaling, series-creation

**02-账号运营 (20个技能)**
- 定位规划：account-positioning, persona-building
- 增长策略：growth-hacking, follower-growth, viral-creation
- 品牌建设：personal-branding-advanced, brand-consistency
- 生命周期：rebranding, hiatus-management, exit-strategy

#### 阶段2: 数据与互动 (Month 3-4)

**03-数据分析 (12个技能)**
- 基础分析：data-analytics, basic-data-analysis, content-performance-analysis
- 进阶分析：competitor-analysis, trend-analysis, user-persona-analysis
- 专项分析：traffic-analysis, timing-analysis, keyword-analysis

**03-互动运营 (8个技能)**
- 互动技巧：comment-strategy, follower-retention
- 社群运营：community-management, user-generated-content
- 客户服务：customer-service, crisis-management

#### 阶段3: 变现与推广 (Month 5-6)

**04-电商转化 (17个技能)**
- 选品策略：product-selection, product-research, pricing-strategy
- 种草转化：seeding-content-creation, trust-building, conversion-optimization
- 带货实战：livestream-sales, sales-funnel, after-sales

**07-营销推广 (16个技能)**
- 合作推广：KOL-collaboration, influencer-outreach, brand-co-branding
- 付费推广：advertising, budget-allocation, effect-monitoring
- 活动策划：activity-planning, seasonal-campaigns, private-marketing

#### 阶段4: 规则与工具 (Month 7-8)

**05-平台规则 (14个技能)**
- 规则规范：platform-rules, compliance, community-guidelines
- 风险管理：risk-management, penalty-avoidance, violation-handling
- 账号安全：account-security, account-safety, account-authentication

**06-工具生态 (14个技能)**
- 创作工具：photo-editing-tools, jiaying-tool, xingtu-tool
- 数据工具：qiangua-data, huitun-data, data-visualization
- 管理工具：project-management, team-collaboration

#### 阶段5: 增长与战略 (Month 9-12)

**08-增长策略 (15个技能)**
- 算法增长：platform-algorithm, cold-start, traffic-acquisition
- 变现策略：monetization-strategy, fan-ecosystem
- 长期战略：long-term-strategy, ip-operations, sustainable-growth

---

## 技能使用详解

### 技能自动触发机制

Claude Code 通过以下方式自动触发技能：

**1. 关键词匹配**
```
你: "我的小红书账号粉丝增长慢"
↓
Claude 识别关键词: "账号"、"增长"
↓
自动加载: growth-hacking + follower-growth
```

**2. 上下文理解**
```
你: "这周的笔记数据都不好"
↓
Claude 理解上下文: 需要分析数据
↓
自动加载: basic-data-analysis
```

**3. 意图识别**
```
你: "帮我想个爆款标题"
↓
Claude 识别意图: 内容创作
↓
自动加载: title-writing + viral-creation
```

### 手动指定技能

当自动触发不准确时，可以手动指定：

```
你: "请使用 [skill-name] 技能 + [你的需求]"
```

**示例**：
```
你: "请使用 account-positioning 技能，帮我重新定位账号"
你: "使用 cold-start 技能，我想快速起号"
你: "用 sales-funnel 技能优化我的转化路径"
```

### 组合使用多个技能

可以同时使用多个技能获得综合建议：

```
你: "我想优化封面和标题，请使用 cover-design 和 title-writing 技能"
```

Claude 会：
1. 加载两个技能
2. 综合两个技能的方法论
3. 提供整合的建议

---

## 实战案例

### 案例1：新手从零到1000粉

**背景**：大学生小张，零基础，想做穿搭账号

**第1周：定位**
```
你: "我是大学生，想做平价穿搭账号，请帮我定位"

Claude (使用 account-positioning):
定位建议：
- 垂直领域: 穿搭 > 平价 > 学生党
- 目标受众: 18-24岁女大学生，预算300-500元/月
- 独特价值: 真实测评、平价推荐、学生视角
- 账号名: "学生党平价穿搭馆"
```

**第2-3周：内容创作**
```
你: "帮我想一个平价连衣裙的种草文案"

Claude (使用 copywriting + seeding):
文案框架：
标题：学生党必看！100元穿出高级感
开头：姐妹们，挖到宝了！
产品：XX品牌连衣裙（原价299，现价99）
体验：实物拍摄 + 上身效果
对比：专柜 vs 网购
号召：点击购物车，限时优惠
标签：#学生党穿搭 #平价好物 #OOTD
```

**第4周：数据分析**
```
你: "我上周发了5篇，数据是：平均浏览150，点赞20，评论3"

Claude (使用 basic-data-analysis):
数据诊断：
✅ 点赞率 13.3%（高于平均）
⚠️ 评论率 2%（略低）
⚠️ 浏览量偏低

优化建议：
1. 增加互动引导："你们觉得呢？"
2. 优化发布时间：测试晚7-9点
3. 参与热门话题：#学生党 #开学季
```

**第2个月：突破**
```
你: "我想打造一篇爆款内容"

Claude (使用 viral-creation):
爆款要素：
1. 选题：学生党痛点（没钱、想好看）
2. 标题：数字+对比（3个技巧，0元穿搭）
3. 封面：前后对比/产品合集
4. 内容：真实+实用+情感共鸣
5. 话题：蹭热点+精准标签
```

**结果**：2个月，粉丝从0增长到1200，1篇爆款500+点赞

---

### 案例2：电商变现

**背景**：美妆博主小李，3000粉，想带货

**第1步：选品**
```
你: "我有3000粉，想带货，帮我选品"

Claude (使用 product-selection + product-research):
选品建议：
1. 价格带：50-200元（粉丝消费能力）
2. 类别：平价彩妆、护肤小样
3. 渠道：1688、拼多多
4. 测试：先选3款测试反应

推荐产品：
- XX口红（59元，热门色号）
- XX面膜（89元/盒，复购率高）
- XX卸妆水（49元，刚需产品）
```

**第2步：种草**
```
你: "帮我写XX口红的种草笔记"

Claude (使用 seeding-content-creation):
种草结构：
1. 标题：学生党必备！59元用出大牌感
2. 开头：挖到宝藏色号！
3. 产品：试色展示（多角度）
4. 对比：XX大牌vs平价替代
5. 真实：持妆测试（8小时）
6. 购买：限时优惠+链接
7. 互动：求色号推荐
```

**第3步：转化**
```
你: "评论有20个人问购买链接，怎么转化"

Claude (使用 conversion-optimization):
转化策略：
1. 评论引导："私信我get同款"
2. 私域引流：加微信/进群
3. 专属优惠：粉丝9折
4. 限时：48小时内下单
5. 信任：晒单返现
```

**结果**：第1月，售出50单，月收入2000元

---

### 案例3：品牌化运营

**背景**：职场博主，5000粉，想打造个人品牌

**第1步：品牌定位**
```
你: "我是职场博主，想打造个人品牌"

Claude (使用 personal-branding-advanced):
品牌定位：
1. 核心价值：帮助年轻人职场成长
2. 品牌名称："职场进化论"
3. 视觉风格：简约专业（蓝白色调）
4. 品牌口号：每天进步1%
5. 人设：有温度的职场导师
```

**第2步：内容系列化**
```
你: "帮我规划内容系列"

Claude (使用 series-creation):
内容系列：
1. 周一：职场干货（面试技巧、沟通方法）
2. 周三：工具推荐（效率工具、学习资源）
3. 周五：真实故事（个人经历、读者故事）
4. 月度：深度专题（职业规划、副业探索）

统一元素：
- 封面：固定模板+主题图
- 开头：固定的问候语
- 结尾：互动问题+下期预告
```

**第3步：多元化变现**
```
你: "我想多元化收入"

Claude (使用 monetization-strategy):
变现路径：
1. 短期（1-3月）：
   - 品牌合作：职场APP、在线课程
   - 预计收入：2000-5000元/月

2. 中期（3-6月）：
   - 知识付费：职场课程、1v1咨询
   - 预计收入：5000-10000元/月

3. 长期（6-12月）：
   - 产品开发：职场工具箱、会员社群
   - 预计收入：10000-30000元/月
```

---

## 常见问题

### Q1: 技能没有被自动加载？

**可能原因**：
1. `.claude-plugin/marketplace.json` 文件缺失
2. 技能的 YAML frontmatter 格式错误
3. Claude Code 未扫描到插件

**解决方法**：
```bash
# 1. 检查 marketplace.json
cat .claude-plugin/marketplace.json

# 2. 检查技能 frontmatter
head -5 skills/01-内容创作/account-positioning/SKILL.md

# 应该看到：
# ---
# name: account-positioning
# description: Use when...
# ---

# 3. 重启 Claude Code
```

### Q2: 技能建议不符合我的情况？

**解决方法**：
1. 提供更多上下文信息
2. 手动指定特定技能
3. 说明具体约束条件

**示例**：
```
❌ 模糊：帮我优化内容
✅ 具体：我是做平价美妆的，学生党受众，请帮我优化种草内容
```

### Q3: 如何知道应该用哪个技能？

**方法1**：让 Claude 自动判断
```
你: "我想优化封面，应该用什么技能？"
Claude: 推荐 cover-design、visual-storytelling
```

**方法2**：查看技能描述
```bash
# 查看某个技能的描述
head -10 skills/01-内容创作/cover-design/SKILL.md
```

**方法3**：参考技能依赖图（见下文）

### Q4: 多个技能有冲突建议？

**原因**：不同技能提供不同角度

**解决方法**：
- 提供更多上下文让 Claude 权衡
- 说明优先级（"更注重质量而非数量"）
- 询问 Claude 为什么给出不同建议

---

## 技能依赖关系图

### 核心技能（必学）

```
Tier 1: 核心基础 (38个) ⭐⭐⭐⭐⭐

account-positioning (账号定位)
  ├─ content-planning (内容规划)
  ├─ persona-building (人设打造)
  └─ 所有内容创作技能

basic-data-analysis (基础数据分析)
  ├─ content-performance-analysis (内容效果分析)
  ├─ traffic-analysis (流量分析)
  └─ 所有优化类技能

content-creation (内容创作)
  ├─ visual-storytelling (视觉叙事)
  ├─ copywriting (文案写作)
  └─ cover-design (封面设计)
```

### 重要技能（进阶）

```
Tier 2: 重要提升 (48个) ⭐⭐⭐⭐

growth-hacking (增长黑客)
  ├─ follower-growth (粉丝增长)
  └─ viral-content (爆款内容)

product-selection (选品策略)
  ├─ seeding-strategy (种草策略)
  └─ livestream-sales (直播带货)

data-analytics (数据分析)
  ├─ competitor-analysis (竞品分析)
  └─ trend-analysis (趋势分析)
```

### 专项技能（高级）

```
Tier 3: 专项深度 (32个) ⭐⭐⭐

monetization-strategy (变现策略)
  ├─ sales-funnel (销售漏斗)
  └─ brand-collaboration (品牌合作)

personal-branding-advanced (个人品牌建设)
  ├─ content-scaling (内容规模化)
  └─ ip-operations (IP化运营)
```

### 战略技能（专家）

```
Tier 4: 战略级 (14个) ⭐⭐

long-term-strategy (长期战略)
  ├─ exit-strategy (退出策略)
  └─ sustainable-growth (可持续增长)
```

---

## 进阶技巧

### 技巧1：技能组合使用

**场景**：解决复杂问题

```
你: "我的账号定位模糊，内容质量差，数据不好，请全面分析"

Claude 会组合使用：
1. account-positioning (定位)
2. content-creation (内容质量)
3. basic-data-analysis (数据分析)
```

### 技巧2：分步解决问题

**场景**：复杂运营任务

```
你: "我想从零开始做电商带货，请帮我规划步骤"

Claude 会按顺序使用：
Step 1: account-positioning (定位)
Step 2: product-selection (选品)
Step 3: seeding-content-creation (种草)
Step 4: conversion-optimization (转化)
```

### 技巧3：迭代优化

**场景**：持续改进

```
第1轮：
你: "帮我优化内容"
→ Claude 使用 content-creation

第2轮：
你: "按照建议修改后，数据还是不好，再优化"
→ Claude 使用 data-analysis + content-creation

第3轮：
你: "还是不满意，换个方向"
→ Claude 使用 viral-creation + growth-hacking
```

### 技巧4：跨领域应用

**场景**：将一个领域的技能应用到另一个领域

```
你: "把 cold-start 技能应用到新系列内容上"

Claude 会：
1. 理解 cold-start 的原理
2. 应用到内容系列启动
3. 提供针对性的策略
```

---

## 139个技能完整清单

### 01-内容创作 (23个)

**核心创作**：
- content-planning (内容规划)
- content-creation (内容创作)
- visual-storytelling (视觉叙事)
- copywriting-skills (文案写作)

**图文创作**：
- graphic-layout (图文排版)
- graphic-content-creation (图文创作)
- image-editing (图片编辑)
- cover-design (封面设计)

**视频创作**：
- short-video-production (短视频制作)
- script-writing (脚本写作)
- audio-processing (音频处理)

**直播创作**：
- live-streaming-content (直播内容)

**高级创作**：
- series-creation (系列内容)
- content-scaling (内容规模化)
- content-repurposing (内容复用)
- content-portfolio (作品集)
- time-album (时光专辑)
- interaction-content (互动内容)
- tutorial-creation (教程创作)
- vlog-creation (vlog创作)
- topic-participation (话题参与)
- title-writing (标题写作)
- seeding-copywriting (种草文案)
- hashtag-optimization (标签优化)
- content-layout (内容排版)

### 02-账号运营 (20个)

**定位规划**：
- account-positioning (账号定位) ⭐⭐⭐⭐⭐
- persona-building (人设打造)
- content-planning (内容规划)
- content-calendar (内容日历)
- content-consistency (内容一致性)
- profile-optimization (主页优化)

**增长策略**：
- growth-hacking (增长黑客) ⭐⭐⭐⭐
- follower-growth (粉丝增长)
- viral-creation (爆款创作)
- cold-start (冷启动)
- publishing-timing (发布时机)
- tag-optimization (标签优化)

**品牌建设**：
- personal-branding-advanced (个人品牌建设) ⭐⭐⭐⭐
- brand-consistency (品牌一致性)
- rebranding (品牌重塑)

**社群运营**：
- fan-operations (粉丝运营)
- community-management (社群管理)
- private-domain (私域运营)

**数据分析**：
- performance-tracking (绩效追踪)
- competitor-analysis (竞品分析)

**生命周期**：
- account-integration (账号整合)
- account-merger (账号合并)
- hiatus-management (停播管理)
- exit-strategy (退出策略)

**危机管理**：
- crisis-communication (危机沟通)

### 03-互动运营 (8个)

**互动技巧**：
- comment-strategy (评论策略)
- follower-retention (粉丝留存)
- interaction-automation (互动自动化)
- social-listening (社交聆听)

**社群运营**：
- community-management (社群管理)
- user-generated-content (UGC激励)

**客户服务**：
- customer-service (客户服务)

**危机管理**：
- crisis-management (危机管理)

### 03-数据分析 (12个)

**基础分析**：
- basic-data-analysis (基础数据分析) ⭐⭐⭐⭐⭐
- data-analytics (数据分析)
- content-performance-analysis (内容效果分析)
- data-metrics-understanding (数据指标理解)

**流量分析**：
- traffic-analysis (流量分析)
- timing-analysis (时机分析)

**专项分析**：
- keyword-analysis (关键词分析)
- topic-analysis (话题分析)
- roi-analysis (ROI分析)
- excel-analytics (Excel分析)

**高级分析**：
- competitor-analysis (竞品分析)
- trend-analysis (趋势分析)
- user-persona-analysis (用户画像分析)
- data-report (数据报告)

### 04-电商转化 (17个)

**选品策略**：
- product-selection (选品策略) ⭐⭐⭐⭐⭐
- pricing-strategy (定价策略)
- product-launch (产品发布)

**种草转化**：
- seeding-content-creation (种草内容创作)
- trust-building (信任建立)
- conversion-optimization (转化优化)

**带货实战**：
- livestream-sales (直播带货)
- sales-funnel (销售漏斗)
- store-operations (店铺运营)

**客户管理**：
- customer-service (客户服务)
- customer-lifetime-value (客户终身价值)
- after-sales (售后服务)

**变现策略**：
- monetization-strategy (变现策略) ⭐⭐⭐⭐⭐
- monetization-funnel (变现漏斗)
- personal-branding (个人品牌)
- collaboration-deals (合作交易)

**转化技巧**：
- urgency-tactics (紧迫感技巧)

### 05-平台规则 (14个)

**规则规范**：
- platform-rules (平台规则) ⭐⭐⭐⭐⭐
- compliance (合规要求)
- community-guidelines (社区规范)
- content-review (内容审核)

**账号安全**：
- account-security (账号安全) ⭐⭐⭐⭐
- account-safety (账号安全)
- account-authentication (账号认证)
- account-weight (账号权重)

**风险管理**：
- risk-management (风险管理) ⭐⭐⭐⭐
- penalty-avoidance (处罚规避)
- violation-handling (违规处理)
- appeal-process (申诉流程)

**知识产权**：
- copyright (版权)
- copyright-protection (版权保护)

**算法机制**：
- algorithm-mechanism (算法机制)

### 06-工具生态 (14个)

**创作工具**：
- photo-editing-tools (图片编辑工具)
- jiaying-tool (剪映工具)
- xingtu-tool (醒图工具)
- canva (可画工具)
- meitu-xiuxiu (美图秀秀)
- stable-design (稿定设计)

**数据工具**：
- qiangua-data (千瓜数据)
- huitun-data (灰豚数据)
- xinhong-data (新红数据)
- data-visualization (数据可视化)

**运营工具**：
- project-management (项目管理)
- team-collaboration (团队协作)

**其他工具**：
- ju-mama (姑姑玛)
- yizhuan (一转)

### 07-营销推广 (16个)

**合作推广**：
- KOL-collaboration (KOL合作) ⭐⭐⭐⭐
- influencer-outreach (达人对接)
- influencer-matrix (达人矩阵)
- brand-co-branding (品牌联名)

**付费推广**：
- advertising (广告投放) ⭐⭐⭐⭐
- budget-allocation (预算分配)
- effect-monitoring (效果监控)

**活动策划**：
- activity-planning (活动策划) ⭐⭐⭐⭐
- seasonal-campaigns (季节活动)
- live-promotion (直播推广)

**内容营销**：
- content-marketing (内容营销)
- private-marketing (私域营销)
- web3-growth (Web3增长)
- ai-marketing (AI营销)

**品牌运营**：
- brand-operation (品牌运营)

**舆情监控**：
- sentiment-monitoring (舆情监控)

### 08-增长策略 (15个)

**算法增长**：
- platform-algorithm (平台算法) ⭐⭐⭐⭐⭐
- cold-start (冷启动) ⭐⭐⭐⭐⭐
- traffic-acquisition (流量获取) ⭐⭐⭐⭐
- content-seo (内容SEO)
- traffic-allocation (流量分配)

**爆款策略**：
- viral-creation (爆款创作) ⭐⭐⭐⭐
- viral-mechanisms (爆款机制)
- viral-strategy (爆款策略)
- trend-jacking (蹭热点)

**用户增长**：
- user-acquisition (用户获取)
- user-retention (用户留存)
- referral-growth (推荐增长)
- fan-ecosystem (粉丝生态)

**长期战略**：
- long-term-strategy (长期战略) ⭐⭐⭐⭐
- ip-operations (IP化运营)
- collaboration (协作)

---

## 使用建议

### 新手建议

1. **不要贪多**
   - 先学 Tier 1 核心技能
   - 打牢基础再进阶

2. **理论+实践结合**
   - 学一个技能，实践一个
   - 用数据验证效果

3. **定期复盘**
   - 每周看数据
   - 每月做总结
   - 持续优化

### 进阶建议

1. **系统化学习**
   - 按照学习路径循序渐进
   - 建立完整知识体系

2. **技能组合**
   - 多个技能协同使用
   - 解决复杂运营问题

3. **持续优化**
   - 基于数据反馈调整
   - A/B测试不同策略

### 专家建议

1. **形成自己的方法论**
   - 总结实践经验
   - 建立个人运营体系

2. **关注行业动态**
   - 平台规则变化
   - 新工具和新技术

3. **分享与交流**
   - 与同行交流经验
   - 持续学习和成长

---

## 总结

这是一个**完整的小红书运营技能系统**，包含：

- ✅ **139个技能** - 覆盖运营全链路
- ✅ **4条学习路径** - 从新手到专家
- ✅ **自动触发机制** - 对话即使用
- ✅ **实战案例** - 真实场景演示
- ✅ **技能依赖图** - 系统化学习

**开始你的小红书运营之旅吧！** 🚀

---

## 附录

### 技能文件位置

```
xiaohongshu-skills/
├── .claude-plugin/marketplace.json  # 插件配置
├── skills/                       # 139个技能（自动发现）
│   ├── 01-内容创作/
│   ├── 02-账号运营/
│   ├── 03-互动运营/
│   ├── 03-数据分析/
│   ├── 04-电商转化/
│   ├── 05-平台规则/
│   ├── 06-工具生态/
│   ├── 07-营销推广/
│   └── 08-增长策略/
└── docs/                            # 详细文档
    ├── installation-guide.md
    ├── learning-paths.md
    └── quick-start.md
```

### 获取帮助

- 查看 `docs/installation-guide.md` 了解插件机制
- 查看 `docs/learning-paths.md` 了解详细学习路径
- 查看具体技能的 `SKILL.md` 文件了解详细信息

---

**版本**: v3.0 Complete Edition
**更新**: 2025-01-22
**作者**: Xiaohongshu Skills Team
**许可**: MIT License
