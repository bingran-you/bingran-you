# Resolvers: The Routing Table for Intelligence

作者：Garry Tan  
来源：X 长文 / 公开帖子整理

---

## 核心结论

这篇文章最重要的观点只有一句：**resolver 是 context 的路由表**。

也就是：当某类任务出现时，先加载对应的文档、规则、技能或上下文，而不是把所有知识一股脑塞进系统 prompt 里。

作者认为，resolver 是 agent 系统里最容易被忽略、但其实最关键的一层。它平时几乎隐形，但一旦缺失，系统就会出现缓慢而系统性的退化：信息放错位置、技能无法触发、知识库逐渐失序、上下文越来越脏。

---

## 从 20,000 行说明文件退回到 200 行 resolver

作者一开始把大量经验、约定、边界情况和操作规范都堆进一个超长的 `CLAUDE.md` 文件里，最后长到 20,000 行。

这种做法表面上像是在“让模型知道更多”，实际上却让模型被噪声淹没：

- 响应变慢
- 注意力变差
- 精准度下降
- 整个系统越来越钝

后来他把这套“全量灌输”思路改成了一个大约 200 行的 resolver / 决策树：

- 如果内容是人物 → 去 `people/`
- 如果内容是公司 → 去 `companies/`
- 如果内容是政策分析 → 去 `civic/`

结果系统立刻变好。

不是因为模型变聪明了，而是因为**系统终于开始在正确的时刻加载正确的上下文**。

作者的核心判断很明确：

> 你不能靠把所有知识都塞进 prompt，让模型“永远记住一切”；你只能靠 resolver，让模型在需要的时候读到需要的那一小部分。

---

## 一次误归档，暴露出整个系统的治理漏洞

文章里一个非常典型的例子，是作者让 agent ingest 一篇关于 OpenAI 工业政策与监管策略的文章。

这篇文章本质上属于政策 / civic analysis，正确位置应该是 `civic/`。但 agent 却把它丢进了 `sources/`。

这件事表面上只是“归档错了”，但作者顺着往下查，发现问题并不在单次判断失误，而在系统结构本身：

- 对应的 ingest skill 内部写死了默认目录
- 它没有先 consult resolver
- 它自己私藏了一套简化的、含糊的分类逻辑
- 当没有明确路径时，就把东西往 `sources/` 里扔

作者随后审计了所有会向 brain repo 写入内容的 skill，一共 13 个，结果发现：

- 只有 3 个 skill 会显式读取 resolver
- 剩下 10 个 skill 都在内部写死路径或写死默认逻辑

这意味着：系统虽然表面上有统一知识库，但实际上每个 skill 都像一个各自为政的小部门，在偷偷决定“什么该放哪里”。

这正是 agent 系统最危险的一种退化方式：

- 它不会立刻炸
- 不会明显报错
- 不会产生戏剧性的 hallucination
- 它只是慢慢把信息放错地方
- 让连接逐渐断开
- 最后把知识库变成一个 junk drawer

所以作者得出的修复方式不是逐个改 skill，而是上升到制度层面：

1. 所有会写入 brain 的 skill，写入前都必须先读取 `RESOLVER.md`
2. 同时读取统一的 filing rules 文档
3. 归档时按“主要主题”判断，而不是按来源格式、文件类型或 skill 名称判断

这个变化很重要，因为它把“经验”变成了“治理规则”。

---

## Skill 明明存在，却无法被系统找到

文章的第二个关键问题是：**能力存在，但不可达。**

作者举了一个例子：他在 executive assistant skill 里做了一个签字追踪系统，可以处理 DocuSign 截止时间、显示未签文件、起草提醒消息。这套能力本身完全能工作。

但当用户说：

- `check my signatures`
- `what do I need to sign`

系统却完全不会触发它。

原因不是能力没做，而是 resolver 里根本没有“signatures”相关触发词。

这类问题比“压根没有这个 skill”更糟，因为：

- 没有这个 skill，系统会诚实地说不会
- 有 skill 但 resolver 不知道，系统会制造出一种虚假的能力感

也就是说，组织里其实已经有“外科医生”，但前台根本不知道该把病人转给谁。

随着系统越来越大，这种问题会越来越严重。作者提到，他的系统发展到 40+ 个 skill 之后，很多能力都是在真实事件中临时长出来的、由子代理或 cron 触发生成的，但没有人持续维护 resolver 表。因此，系统能力虽然在增长，resolver 却没同步更新，导致越来越多能力落入“黑暗区”。

---

## 触发词评测：不只是测答案，还要测路由

为了解决“skill 该不该被触发”的问题，作者建立了一套 resolver trigger evals。

它的思路很简单：

针对一组真实自然语言输入，测试系统最终会把请求路由到哪个 skill。

例如：

- `check my signatures` → 应该路由到 executive-assistant 的签字模块
- `who is Pedro Franceschi` → 应该路由到 brain 搜索能力
- `save this article to brain` → 应该命中 ingest skill，并触发 resolver + filing 规则

这套测试主要抓两类错误：

- **False negative**：本来该触发的 skill 没触发
- **False positive**：不该触发的 skill 却误触发了

作者强调，这一步很关键，因为大家通常只会 eval 最终输出质量，却不太会去测试“任务究竟有没有被派给正确的人”。

而在 agent 系统里，**错误的路由本身就是核心 bug**。如果分诊错了，后面做得再好也没意义。

---

## check-resolvable：审计整个能力链路是否可达

trigger eval 能看出“某个输入是否会命中某个 skill”，但它解决不了更深一层的问题：

**有没有一些 skill 根本没有任何 resolver 路径能够触发它？**

于是作者做了一个 meta-skill，叫 `check-resolvable`。

它检查的不是某个单点输入，而是整条链路：

`AGENTS.md → resolver / trigger → skill 文件 → 代码路径 → 实际能力`

它问的是：

- 这个 skill 是否真正能从系统入口被触发？
- 如果不能，它应该挂在哪个 resolver 分支下面？
- 系统里是否存在“能力孤岛”或“不可达技能”？

第一次运行时，作者发现 40+ 个 skill 里有 6 个完全不可达。

也就是说，差不多 15% 的系统能力实际上处于黑暗状态：实现已经存在，但用户无论怎么自然表达，都根本碰不到。

这些技能包括：

- 一个没人能通过自然语言调用的航班追踪器
- 一个只在 cron 中存在、无法手动触发的内容创意生成器
- 一个压根没在 resolver 里注册的 citation fixer

作者把 `check-resolvable` 形容成 resolver 世界里的 linter / audit tool，这个比喻非常准确。

因为它审计的不是代码是否优雅，而是：**系统声称自己能做的事，究竟能不能真的被用户触达。**

---

## Resolver 会自然腐烂

文章里最有启发的一部分，是作者把 resolver 的维护问题提升成了“context rot”。

也就是说，resolver 不是一个写完就能永远有效的静态配置，而是一个会随着系统增长自然失真的东西。

作者给出的节奏几乎像组织演化史：

- Day 1：resolver 很完美，所有技能都登记了，触发词也很准
- Day 30：已经有几个新 skill 被加进去，但没人更新 resolver
- Day 60：用户说法变了，trigger 还停留在旧措辞
- Day 90：resolver 成了历史文档，只能代表系统“曾经能做什么”，而不是“现在能做什么”

这就是为什么很多系统最后虽然“功能更多了”，体验却更差：

- 技能数量增加
- 但路由表没有同步进化
- 于是用户自然表达与系统内部能力越来越脱节

作者甚至指出，当 resolver 失真以后，人就会开始直接用“内部知识”绕过去，比如手动说“读某个 skill 文件”，而不是通过 resolver 让系统自然路由。到了这一步，系统其实已经不算系统了，只是一个只有作者自己会开的文件柜。

---

## 终局设想：让 resolver 从流量里自我更新

在识别出 resolver 会腐烂以后，作者进一步提出一个很强的方向：

**让 resolver 根据真实任务分发流量自动改写自己。**

也就是：

- 记录一段时间内所有 task dispatch
- 看哪些用户表达没有命中对应 skill
- 看哪些表达总是误命中错误 skill
- 看哪些 skill 长期存在但从未被自然调用
- 再基于这些观察，定期重写 resolver 的 trigger 描述和优先级

作者举的例子很直观：

如果系统发现：

- 用户常说 `is my flight on time`
- 但 resolver 只写了 `check my flight`
- 因此 flight-tracker 总是错失触发

那就应该把这种真实表达吸收回 resolver。

再比如：

- 某些 investor update 邮件总是先被 pdf-ingest 捕获
- 但其实更适合 investor-update-ingest

那就应该重排优先级或调整触发描述。

作者把这看作 agent governance 的终局：**一个会从自己 traffic 中学习的 resolver。**

这还不是完全实现的现成机制，但方向非常清楚：resolver 不应只是人工维护的表，而应该逐渐成为一个有观测、有反馈、有修正能力的治理对象。

---

## Resolver 是分形的，存在于每一层

作者还提出一个非常有意思的判断：resolver 不是只有顶层才有，它是分形结构，层层存在。

### 1. Skill resolver

位于系统顶层，把用户意图映射到 skill：

- 识别人 → brain-ops
- ingest PDF → pdf-ingest
- 查日程 → calendar

### 2. Filing resolver

位于知识库层，把内容类型映射到存储位置：

- 人 → `people/`
- 公司 → `companies/`
- 政策分析 → `civic/`

### 3. Context resolver

位于 skill 内部，把 skill 进一步拆路：

例如 executive assistant skill 内部还要再决定：

- 这是邮件 triage
- 这是 scheduling
- 这是 signature tracking

从这个角度看，resolver 其实不是一个单独技巧，而是一种组织复杂系统的基本方式：

- 顶层决定谁接单
- 中层决定东西放哪
- 技能内部决定下一步走哪条子流程

这就是为什么作者说“resolvers all the way down”。

---

## 这不只是 prompt engineering，而是组织设计

文章最后把整个问题从技术上升到了“管理层设计”，这是我觉得最有洞察力的一部分。

作者认为，一个足够复杂的 agent 系统，本质上已经不只是代码集合，而是一个组织：

- skills 像员工
- resolver 像组织架构图 + 分诊台
- filing rules 像内部流程制度
- trigger evals 像绩效评估 / 岗位匹配测试
- check-resolvable 像审计与合规

这样一看，很多 agent 系统的问题就不再神秘：

问题不一定是模型不够强，而可能是组织没有管理层。

也就是：

- 有很多人才
- 有很多能力
- 但没人负责分工、路由、登记、升级、审计
- 最后所有能力都散落在组织里，无法稳定协作

作者说，resolver 就是这个“缺失的管理层”。

这也是为什么这篇文章的价值，不只是提出了一个新术语，而是把 agent 系统里很多长期存在但一直说不清楚的问题统一起来了。

---

## 最值得保留的几个启发

如果浓缩成最重要的几点，我会保留这些：

1. **上下文不是越多越好，关键是按需加载。**
2. **所有会写入知识库的 skill，都必须先 consult resolver。**
3. **不仅要测输出，还要测“这个请求被路由给了谁”。**
4. **能力存在不等于能力可达，必须做 reachability audit。**
5. **resolver 会自然腐烂，必须持续维护。**
6. **最终的 resolver 应该能从真实 traffic 中学习。**
7. **agent 系统的难点越来越像组织设计，而不只是 prompt engineering。**

---

## 我的判断

这篇文章非常值得存下来，不是因为它给了某个立即可复制的“最佳实践模板”，而是因为它把一个经常被低估的问题讲得非常透：

**agent 系统的瓶颈，往往不是模型智力，而是上下文治理。**

如果说“thin harness, fat skills”解决的是能力组织方式，那么 resolver 讨论的就是：

- 能力如何被发现
- 上下文如何被加载
- 文件如何被归档
- 技能如何被触达
- 系统如何在增长中不失序

换句话说，resolver 不是附属组件，而是 agent system 的治理层。

没有这层，系统会看起来越来越大，但实际上越来越乱。  
有了这层，而且它可测试、可审计、可更新，系统才有可能真正“复利式成长”。

---

## 原文信息

- 标题：Resolvers: The Routing Table for Intelligence
- 作者：Garry Tan
- 主题：agent architecture、context routing、knowledge filing、skill reachability、resolver governance
- 相关项目：GBrain、GStack、OpenClaw / Hermes Agent

---

## 一句话收尾

**不要试图让模型随时知道一切；要让系统在正确的时候知道正确的东西。**
