# Thin Harness, Fat Skills

作者：Garry Tan  
来源：长文 / 演讲观点整理

---

## 核心判断

这篇文章的核心不是“模型越来越强”，而是：**真正拉开效率差距的，不是模型智力，而是系统架构。**

作者借 Steve Yegge 的判断说，使用 AI coding agents 的人，生产力可能比传统聊天式 AI 使用方式高出 10 倍到 100 倍，甚至比 2005 年的顶级工程团队高出几个数量级。但这不是因为有些人拿到了“更聪明的模型”，而是因为他们把模型放进了更好的运行结构里。

这个结构就是：**thin harness, fat skills**。

也就是：

- harness 要薄，负责运行、上下文、文件、工具和安全
- skills 要厚，承载流程、判断、经验和领域方法

作者的意思很明确：不要把复杂性堆进大而全的 harness 里，而要把真正的“能力”沉淀成 skill。

---

## 1. Harness 才是产品外壳，但它应该尽量薄

作者提到 Claude Code 源码意外泄露后，他读了整套实现，更确认了一件事：**真正重要的不是模型本身，而是包裹模型的那一层。**

这层 wrapper 包括：

- live repo context
- prompt caching
- purpose-built tools
- context bloat minimization
- structured session memory
- parallel sub-agents

这些东西不会让模型“变聪明”，但会让模型：

- 在正确的时刻拿到正确的信息
- 不被噪声淹没
- 在任务链里持续工作

作者把这层 wrapper 叫做 harness。

但重点在于：**harness 不应该变成一个吞噬上下文和复杂度的超级平台。**

一个坏的模式是 fat harness + thin skills：

- 工具定义一大堆
- 每个 API endpoint 都包成一个 tool
- MCP 往返很慢
- token 消耗高
- 延迟高
- 故障面更大

他主张相反方向：

- harness 保持简洁
- 工具尽量窄、快、专用
- 能 deterministic 的部分就 deterministic
- 把复杂性尽量推到 skill 和底层工具，而不是堆在中间层

一句话：**harness 是运行层，不是知识层。**

---

## 2. Skill file 不是提示词，而更像“方法调用”

文章里我觉得最重要的一个观点，是作者对 skill file 的定义。

他认为 skill file 不是普通 prompt，而是一个**可复用的 markdown 过程模块**。它告诉模型“怎么做”，而不是“这次具体要做什么”。

用户提供任务参数，skill 提供过程。

作者甚至说，skill file 的工作方式非常像 method call：

- 它有固定流程
- 它接受参数
- 它在不同输入下产出完全不同能力

他举的例子是 `/investigate`：

这个 skill 可能总共有七步，例如：

- scope dataset
- build timeline
- diarize documents
- synthesize
- argue both sides
- cite sources

它接收的参数是：

- TARGET
- QUESTION
- DATASET

如果你把它用在安全科学家和 210 万封 discovery emails 上，它就像一个医学调查分析师。  
如果你把它用在 shell company 和 FEC filings 上，它又像一个政治捐赠调查员。

skill 没变，流程没变，但参数和上下文一变，能力外观就完全变了。

作者因此得出一个很强的结论：

> 这不是 prompt engineering，而是 software design，只不过这里的编程语言是 markdown。

这句话其实很关键。它意味着 skill 不再是一次性的“提示技巧”，而是一个可以复用、改进、积累的能力单元。

---

## 3. Resolver：决定何时加载什么上下文

这篇《Thin Harness, Fat Skills》里，其实也已经埋下了 resolver 的概念。

作者把 resolver 定义为：**context 的路由表**。

当某种任务出现时，系统应该先加载对应的文档、规则或知识。

也就是说：

- skill 负责告诉模型怎么做
- resolver 负责告诉模型该先读什么

例如某个开发者要改 prompt，如果没有 resolver，可能就直接改了然后提交。  
如果有 resolver，模型会先去读 `docs/EVALS.md`，里面写着：

- 先跑 eval suite
- 比较得分
- 如果 accuracy 下降超过 2%，回滚并调查

开发者自己未必知道这套规则存在，但 resolver 会在正确的时候把它加载出来。

作者甚至举了一个非常有代表性的例子：

他曾经把所有经验都堆进一个 20,000 行的 `CLAUDE.md`，结果模型被噪声拖垮。后来他把它压缩成一个大约 200 行的 resolver，只保留指向不同文档的路径，系统立刻变好。

这就是 resolver 的价值：

**不是让模型永远背着所有知识，而是让系统在需要的时候调出那份知识。**

---

## 4. Latent vs deterministic：把判断和计算分清楚

作者接着提出另一个非常实用的划分：系统中的每一步，都应该明确自己到底属于 latent 还是 deterministic。

### Latent

是模型真正发挥智能的地方：

- 阅读
- 理解
- 判断
- 综合
- 模式识别

### Deterministic

是应该交给稳定逻辑和程序的地方：

- SQL 查询
- 算术
- 编译代码
- 约束满足
- 组合优化

作者举了一个很生动的例子：

LLM 可以给 8 个人排晚餐座位，因为这里要考虑个性、关系、气氛，这里面有很多隐性判断。  
但如果让它给 800 个人排位，它就会生成一张“看起来像那么回事”的座位图，但实际上完全靠不住。

因为 800 人排位本质上是一个 deterministic / combinatorial optimization 问题，不应该丢给 latent space 去胡思乱想。

所以优秀系统的关键，不是让模型无所不能，而是：

- 把需要判断的东西放进 latent space
- 把需要可信结果的东西压到 deterministic layer

作者的意思可以理解为：**智能用在高价值判断上，可靠性交给程序。**

---

## 5. Diarization：让模型真正变成知识工作者

作者认为，diarization 是 AI 真正开始适合复杂知识工作的关键步骤。

所谓 diarization，在这里不是音频说话人分离的意思，而是指：

**模型读完一个主题相关的大量材料后，写出一个结构化、浓缩判断的 profile。**

也就是：

- 不是简单提取字段
- 不是 embedding search
- 不是 RAG 拼接
- 而是模型真正读完大量材料之后，整理出一页“分析员简报”式的结论

这种事情：

- SQL 不会做
- RAG pipeline 也不会做
- 必须靠模型在阅读中保持矛盾、时间变化、上下文张力，再进行综合判断

作者的潜台词很清楚：**真正高价值的 agent，不只是会查资料，而是会读完以后形成结构化判断。**

---

## 6. 整体架构：三层模型

把前面几个概念合起来，作者给出的是一个很简单但很强的三层架构：

### 顶层：Fat skills

承载：

- 过程
- 经验
- 领域判断
- 工作方法

这是价值最集中的地方。

### 中层：Thin harness

承载：

- 运行循环
- JSON / text 交换
- 文件读写
- 安全控制
- 上下文管理

它应该尽量简洁，不背太多知识和业务逻辑。

### 底层：Deterministic application / tooling

承载：

- QueryDB
- ReadDoc
- Search
- Timeline
- 其他稳定可靠的程序化能力

作者强调一个非常重要的方向性原则：

- 把 intelligence 往上推到 skills
- 把 execution 往下压到 deterministic tooling
- 中间的 harness 尽量保持薄

这样做的好处是：

- 模型一升级，所有 skill 自动受益
- 底层 deterministic 能力仍然稳定可靠
- 中间层不会变成复杂性的垃圾场

---

## 7. 一个具体案例：YC Startup School 的 founder matching 系统

作者没有只讲抽象概念，而是给了一个具体系统案例。

场景是 YC Startup School：

- 6,000 个 founder
- 每个人都有申请材料、问卷、1:1 顾问聊天记录
- 还有公开信号：X posts、GitHub commits、Claude Code transcripts 等

传统做法是：

- program team 人工读申请
- 靠直觉分组
- 更新 spreadsheet

这个办法在 200 人规模时还能勉强运转，到 6,000 人就彻底崩了。

因为没有人能把这么多 profile 同时放在脑子里，再发现跨地区、跨赛道、跨表述方式的深层相似性。

作者认为模型能做到，但前提是架构正确。

### Enrichment

一个 `/enrich-founder` skill 会：

- 拉取所有数据源
- 执行 enrichments
- diarize founder profile
- 标出 founder “怎么说自己” 和 “实际在做什么” 之间的差异

例如：

```text
FOUNDER: Maria Santos
COMPANY: Contrail
SAYS: "Datadog for AI agents"
ACTUALLY BUILDING: 80% 的 commits 都在 billing module
``` 

于是系统判断：她表面上说自己做 observability，其实更像是一个 FinOps tool。

这类判断 keyword search 做不到，embedding 也很难直接做出来。它要求模型真正读完整个 profile，再作出综合判断。

### Matching

然后是 matching skill。

同一个 skill 可以被不同参数调用，执行不同的策略：

- `/match-breakout`：按赛道 affinity 分组
- `/match-lunch`：制造跨赛道 serendipity matching
- `/match-live`：处理现场实时配对

重点是：skill 的框架一样，但目标函数不一样，参数不一样，输出策略也不一样。

模型还能做出一些 cluster algorithm 很难做出的判断，比如：

- 两个人都属于 AI infra，但其实不是竞争关系，而是互补关系
- 某个 founder 表面写“developer tools”，但从 1:1 transcript 看，本质更像 compliance automation / RegTech

这种重新分类，本质上就是 latent judgment。

### Learning loop

活动结束后，再由 `/improve` skill：

- 读取 NPS survey
- diarize 那些“不差但一般”的反馈
- 提炼出导致“OK”体验的模式
- 把新规则写回 matching skill

例如：

- 如果创业者说自己做 AI infra，但 80% 代码都在 billing → 改分到 FinTech
- 如果一组里两个人本来就认识 → 增加惩罚，优先新连接

这样 skill 会随着经验更新，下一次自动用上这些规则。

作者用这个案例想说明：**skill 不是静态模板，而是会吸收经验、持续进化的能力资产。**

---

## 8. 不要做 one-off work，要把重复工作固化成 skill

文章后面有一句很有代表性的 instruction，大意是：

> 你不允许做 one-off work。任何以后还可能重复发生的事，第一次先手工做 3 到 10 个样本给我看；如果我认可，就把它固化成 skill；如果它应该自动执行，就再挂到 cron 上。衡量标准很简单：如果同样的事我要问你第二次，那就是你失败了。

作者说很多人把这当成 prompt trick，但其实这背后是完整的架构观。

因为在这套架构里：

- 每写一个 skill，系统就获得一个永久升级
- 这个升级不会遗忘
- 不会因为上下文切换丢掉
- 可以在凌晨自动运行
- 当更强模型出现时，skill 会整体升级

这也就是他理解中的真正复利：

- 不是每次都临时用模型帮你“做一次”
- 而是让模型帮助你沉淀“以后都能做”的能力

---

## 最值得保留的几个观点

如果把全文压缩成最关键的结论，我会保留这些：

1. **效率差距的根源不在模型，而在架构。**
2. **Harness 要薄，负责运行和治理；skill 要厚，承载方法和判断。**
3. **Skill file 更像 method call，而不是一次性 prompt。**
4. **Resolver 决定系统在什么时候加载什么上下文。**
5. **Latent 负责判断，deterministic 负责可靠执行。**
6. **Diarization 是模型从“查资料工具”变成“知识工作者”的关键步骤。**
7. **真正强的系统，不做 one-off work，而是把可重复工作沉淀成可复用 skill。**

---

## 我的判断

这篇文章非常值得和 resolver 那篇放在一起看。

如果说《Resolvers》讨论的是 agent system 的治理层，那么《Thin Harness, Fat Skills》讨论的就是 agent system 的能力组织方式。

它最有价值的地方，不是提供某个现成框架，而是把很多人在实践中模糊意识到的东西明确说了出来：

- 为什么有些 agent 看起来工具很多，却并不好用？
- 为什么模型升级了，系统效果还是上不去？
- 为什么一次次人工提示，不如一个好 skill？
- 为什么真正能复利的不是 prompt，而是沉淀下来的流程和方法？

作者的答案很清楚：

- intelligence 不该堆在 harness
- harness 不该承担太多业务复杂性
- skills 才是系统真正的“永久升级包”

我基本认同这个判断。尤其是在系统逐渐复杂之后，**架构纪律比单次模型表现更重要。**

---

## 一句话收尾

**不是更聪明的模型带来 100x，而是更好的系统结构让模型的聪明真正落地。**
