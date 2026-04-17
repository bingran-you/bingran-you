# Resolvers: The Routing Table for Intelligence

作者：Garry Tan  
原始来源：X 长文 / 公开原文整理  
类型：原文保留版

---

在《Thin Harness, Fat Skills》里，我提出了五个关于如何构建真正有效的 agent 系统的定义。大家关注的几乎全是 skills。人们收藏了“skill 像 method call”这个模式，收藏了 diarization，收藏了 thin harness 架构。很好，这些确实重要。
但几乎没人注意到那个其实最重要的东西：resolver。它之所以被忽略，恰恰也是它最重要的原因：当它工作正常时，它几乎不可见；而一旦它失效，后果就是灾难性的。
resolver 是一个 context 的路由表。当任务类型 X 出现时，先加载文档 Y。就这么简单。只是一句话。但就是这句话，决定了一个 agent 是会持续复利，还是会慢慢忘掉自己知道的东西。
这是我如何惨痛学会这一点的故事。

## 那份 20,000 行的忏悔

我的 `CLAUDE.md` 曾经有 20,000 行。
我并不以此为荣。每一个怪癖、每一种模式、每一个我和 Claude Code 打交道时学到的教训、我代码库的每一条约定、每一个曾经踩过的边界情况，我全都往里加。文件越来越长。我当时觉得这很高效，觉得自己是在让模型变得更聪明。
其实不是。我是在淹死它。
模型的注意力开始退化。回复更慢，也没那么准。Claude Code 甚至直接对我说，让我把它删减掉。AI 都开始让你闭嘴的时候，你就知道自己做过头了。
这种冲动很自然。你希望模型什么都知道，所以你把所有东西都塞进系统 prompt、说明文件、context window 里。你试图通过“靠近”来让模型变得全知。但这根本行不通。你不能靠更大声地喊来让一个人更聪明。你只能在正确的时候，把正确的那本书递给他。
最后的修复大概只用了 200 行。一个编号决策树。加上一些指向文档的指针。当模型需要归档某样东西时，它就按这个树走：

- 这是一个人吗？→ 去 `/people/`
- 是一家公司吗？→ 去 `/companies/`
- 是政策分析吗？→ 去 `/civic/`

二万行知识依然都在，而且按需可达，但不再污染整个上下文窗口。
那 200 行文件，就是 resolver。它替换掉了原来的 20,000 行说明。系统立刻变好了——回复更快、归档更准、幻觉更少。不是因为模型突然更聪明了，而是因为我终于不再用噪声把它弄瞎。

## 一次误归档，揭开了全部问题

我曾让 agent ingest 一篇 Will Manidis 的文章《No New Deal for OpenAI》——一篇对 OpenAI 工业政策简报的猛烈政策分析。它会拆解一家公司的监管策略，梳理其中的政治含义，点出关键机构与人物。这是一篇非常典型的 civic analysis。
agent 却把它归进了 `sources/`。
错了。`sources/` 是放原始数据和批量导入材料的：CSV、API 导出、爬虫数据。像这样一篇政治分析，应该进 `civic/`，因为那里才是政策文章、政治人物和制度动态所在的位置。
为什么会出错？因为 idea-ingest skill 里把 `brain/sources/` 写成了默认目录。它根本没有 consult resolver。它自己在 skill 内部硬编码了一套半吊子的归档逻辑。当用户没有显式给路径时，它就像一个懒散实习生一样，把东西都扔进 “misc” 文件夹。
只是一篇文章归错档。我本来可以改一下就算了。但我顺着这根线往下拽了。

## 审计

当我发现 Manidis 那篇文章被误归档后，我审计了所有会向 brain 写入内容的 skill。我一共有 13 个这样的 skill：用来 ingest 文章、PDF、会议转录、视频、投资人更新、语音笔记、推文。每一个 skill 都会往 brain repo 写页面。
结果只有 13 个里的 3 个会去引用 resolver。
另外 10 个都有各自写死的路径。idea-ingest 默认丢进 `sources/`。pdf-ingest 默认丢进 `originals/`。meeting-ingest 默认写进 `meetings/`。每个 skill 都把自己的归档假设内化了。每一个 skill 都像一颗等待引爆的误归档炸弹。
这正是会慢慢杀死 agent 系统的模式。不是那种戏剧性的失败。不是那种一下子吐出一大堆胡话的 hallucination。真正可怕的是一种缓慢而无声的漂移：信息被放去了错误的位置，连接无法形成，知识库一点点变成一个装了 14,700 个文件的大杂物抽屉，而不是一个结构化的 intelligence layer。
修复方法不是一个个 skill 去打补丁。那是打地鼠。你改好一个，另一个又会漂。真正的修复是做一个共享的归档规则文档——`_brain-filing-rules.md`——并强制所有会写 brain 的 skill 在创建任何页面前，先读取 `RESOLVER.md`。一条规则，修好了十个 skill。
那个 filing rules 文档还记录了常见的误归档模式：sources vs. originals，people vs. companies（尤其是当某个人本身就像一家公司时），civic vs. sources（Manidis 那个案例）。每一种错误都被文档化，这样同样的错误就不会再以另一种形式重演。
从那之后，零误归档。所有新加入、会向 brain 写入内容的 skill，文件开头都写着同样的两行要求：*在创建任何新的 brain 页面前，先读取 `brain/RESOLVER.md` 和 `skills/_brain-filing-rules.md`。按主要主题归档，而不是按来源格式或 skill 名称归档。*

## 看不见的 skill 问题

上面那个例子讨论的是文件应该放到 memory repo 的哪里，但同样的问题也会发生在 skill 文件本身（fat skills）和实际调用的代码（fat code）上。
resolver 负责把任务路由到 skill。那如果某个 skill 明明存在，但 resolver 根本不知道它呢？
在我的 OpenClaw 里，我们在 executive assistant skill 中做过一个签字追踪系统。它本身工作得非常好。可以追踪 DocuSign 截止时间，找出还没签的文件，起草提醒消息。工程做得很漂亮。结果却完全不可见。
当有人说“check my signatures”或“what do I need to sign”的时候，系统一脸茫然。resolver 里没有任何关于 signatures 的 trigger。skill 在。能力也在。系统就是触达不到它。就像你医院里明明有个外科医生，却没把他写在值班表里。
这比完全没有这个 skill 还糟。
没有 skill 的话，系统会诚实地说“我不会”。你知道自己需要去做它。
但 skill 已经存在、却不可达时，就会制造出一种能力幻觉。你以为系统能处理签字。其实它不能。真正要用的时候你才会发现。
一个月之后，我们已经做出了 40 多个 skill。有些是为特定事件现场做的，有些是由 sub-agent 在 cron 里半夜生成的。没有人在维护 resolver 表。skill 在不断出生，但没有注册。系统拥有自己都不知道自己有的能力。
于是我做了 resolver trigger evals。一套 50 个 sample inputs 对 expected outputs 的测试集：

- 输入：`check my signatures`  
  期望：executive-assistant（signature 部分）
- 输入：`who is Pedro Franceschi`  
  期望：brain-ops → gbrain search
- 输入：`save this article to brain`  
  期望：idea-ingest + RESOLVER.md

这类错误有两种。
第一种是假阴性：该触发的 skill 没触发，因为 trigger 描述写错了，或者压根没写。
第二种是假阳性：错的 skill 被触发了，因为多个 trigger 有重叠。
这两种都能靠改 markdown 修掉，不需要改代码。resolver 是文档，而文档是最便宜、最好修的东西。
我当时对我的 Claw 说："Make sure the resolver is tested and also there are proper eval LLM tests for all the prompts and skills that use the resolver." 这不是可选项。如果你不能证明“正确的输入会触发正确的 skill”，那你就没有一个系统。你只是有一堆 skill 外加一份祈祷。

## Meta-skill

trigger evals 能抓路由失败，但更深的问题是：有些 skill 根本从 resolver 里没有任何路径可达。不是走错路，而是根本没路。
有一次我在 debug 一个应该触发却没触发的 skill。老套路：查 trigger 描述，查 resolver 表，顺着链路往下看。然后我意识到，根本没有一套系统化的方法来验证“一个 skill 是否可达”。你能一个个查，但没法一次查全系统。
于是我发明了 `check-resolvable`。一个 meta-skill，沿着整条链路走——AGENTS.md → skill file → code——把死链接全找出来。
我对 agent 说："Check if there is a direct line between the agents.md resolver all the way to this running. And then remember this as a 'check-resolvable' skill. The skill should actually check if this skill or codepath is either directly called out in the resolver or callable via something in the resolver. And if it isn't, figure out what resolvable skill should call it."
第一次跑，就找出了 6 个不可达 skill。六个系统已经实现、却没人能真正调起来的能力。一个用户无法通过“问航班”的自然语言调用到的航班追踪器。一个只能跑 cron、却不能手动触发的内容灵感生成器。还有一个 citation fixer，它明明在 skill 目录里，但 resolver 里根本没提过。
六个。40 多个 skill 里，有 15% 的能力是黑着的。
一小时就修好了。只是往 AGENTS.md 里补 trigger 而已。现在 check-resolvable 每周跑一次。它就像 resolver 世界里的 linter——在用户踩坑前先告诉你哪坏了。

## Context rot

关于 resolver，有件事几乎没人告诉你：它会腐烂。
Day 1，路由表完美无缺。所有 skill 都登记了。所有 trigger 都准确。所有路径都能 resolve。你感觉自己像个天才。
Day 30，已经有三个新 skill 出现了，但没人把它们加到 resolver 里。它们是为真实需求临时做出来的，还是 sub-agent 在凌晨 3 点产出来的，而表没人更新。
Day 60，有两个 trigger 描述已经和真实用户的说法不匹配了。skill 会处理 “track this flight”，但用户说的是 “is my flight delayed?”。描述是一种语言，用户说的是另一种语言。于是 skill 根本不会触发。
Day 90，resolver 变成了一份历史文档。它描述的是系统“过去能做什么”，而不是“现在真的能做什么”。
我开始意识到系统在漂。skill 经常是通过直接点名来调用的——比如“读 skills/flight-tracker/SKILL.md”——而不是通过 resolver 自然触发。因为 resolver 里的 trigger 已经不对了。系统之所以还能工作，只是因为我这个人知道哪个 skill 在哪。那不叫系统。那只是一个有人会开抽屉的文件柜。
前天我在一个 YC 公司 office hours 里，有个 CTO 问我："Could an RLM be used to solve context rot particularly around resolvers?"
这个想法是：做一个 reinforcement learning loop，长期观察每一次 task dispatch。哪个 skill 被触发了。哪个没被触发。哪些任务根本没命中。哪些任务命中了错误 skill。然后定期——也许是每晚，也许是每周——根据真实证据去重写 resolver。不是人维护这张表，而是这张表自己维护自己。
比如一个月里 800 次 task dispatch 后，系统发现“is my flight on time”从来不会触发 flight-tracker，但“check my flight”会。它就重写 trigger 描述。或者系统发现 investor update 邮件总是被 pdf-ingest 吃掉，而更具体的 investor-update-ingest 应该优先命中。它就调整优先级。
这还是偏前瞻性的方向，我们还没彻底做完。但 Claude Code 的 AutoDream——在 idle time 做 memory consolidation——已经是某种原始版本了。它会回看积累起来的上下文并压缩它。把这个原则专门用在 resolver 上，你得到的就是一张会随着使用不断改进的路由表。
一个能从自己 traffic 里学习的 resolver。这才是 agent governance 的终局。

## Resolver 是分形的

还有一个原则，是那个真正让一切都串起来的点。
resolver 是可组合的。它存在于系统的每一层，不只是顶层。
skill resolver 活在 AGENTS.md 里。它把任务类型映射到 skill 文件：

- “Who is this person?” → brain-ops
- “Ingest this PDF” → pdf-ingest
- “Check my calendar” → google-calendar

这是大家最容易想到的 resolver。
file resolver 活在 RESOLVER.md 里。它把内容类型映射到目录：

- Person → `people/`
- Company → `companies/`
- Policy analysis → `civic/`

这个 resolver 抓住了 Manidis 的误归档问题。
context resolver 则活在每个 skill 内部。当 executive assistant skill 被触发时，它内部还要继续分流：邮件 triage 走一条，scheduling 走一条，signature tracking 走第三条。
Claude Code 本身其实已经有这个模式。每个 skill 都有 description 字段。模型会自动根据用户意图去匹配 skill 描述。你从来不需要记住 `/ship` 这个名字。description 本身就是 resolver。一路往下看，全都是 resolver。
同样的架构模式，在每一层都成立。这也是为什么它能从 5 个 skill 扩展到 50 个，从 1,000 个文件扩展到 25,000 个，从一个玩具 demo 扩展到一个每天处理 200 个输入的生产系统。

## 这个东西真正的形状

把前面这些拉回到一起。
resolver 是一份 200 行的 markdown，替代了 20,000 行塞满上下文的说明。当它缺失时，skill 就会各自发明一套归档逻辑，系统慢慢退化。当 resolver 存在但没被测试时，能力会变黑——医院里有外科医生，但没人知道去找谁。当它被测试了但保持静态，它 90 天内还是会腐烂。当它既被测试、又能自我修复，系统才会真正开始复利。
模式是这样的：

- 在正确时刻加载正确上下文。别硬塞。
- 强制每个 skill consult resolver。别相信每个 skill 私有的分类习惯。
- 测试路由，而不只是测试输出。Trigger evals。
- 审计 reachability。Check-resolvable。每周跑。
- 让 resolver 从自己的 traffic 里学习。这是终局。

resolver 是 agent 系统的治理层。它同时是交通警察、文件管理员、组织结构图和制度记忆，而且它只是一份模型 200 毫秒就能读完的文档。
几乎没人会显式构建它。大家都还在把 20,000 行东西塞进 system prompt，然后困惑为什么模型显得比它本该有的更蠢。模型并不蠢。它只是在溺水。给它一张路由表，你就会看到变化。

## 我其实没意识到自己在造什么

到这里为止，我一直把 resolver 描述成一种技术模式。它让 agent 更好地工作。路由任务。加载正确上下文。避免把模型淹死。
这些都没错。但还太小了。
我真正构建出来的东西，其实更像管理学。
想想一个有 40+ 个 skill、25,000 个文件的真实系统里，发生的到底是什么。你不只是有代码。你有一个组织。
skill 像员工。每个 skill 都有一种能力。有些是专家型，有些是通才型。有些只在 cron 中跑。有些是直接面向用户的。
resolver 就像组织架构图。它定义谁处理什么任务、任务如何分流、某条路走不通时该如何升级。它也是 escalation logic。
file rules 像内部制度。信息该存哪，决定如何记录，什么算“人”、什么算“公司”、什么算“政策分析”。没有这层制度，你就没有知识库，你只有一个大杂物抽屉。
check-resolvable 像审计和合规。它不关心代码漂不漂亮。它只问一个更简单的问题：系统到底能不能做到它声称自己能做的事？有没有能力虽然存在、却完全不可达？
trigger evals 像绩效评估。给一个真实输入时，到底是不是正确的那部分组织在响应？如果不是，你不该去“重训模型”，而应该修 trigger 描述，更新 routing，让组织变得可读。
一旦你从这个角度看 agent，很多困惑都会消失。
问题不一定是模型不够聪明。问题可能是：我们一直在建一个没有管理层的组织。只是堆了一群有能力的员工，再加上一种模糊的希望，盼着他们自己协调好。
resolver，就是那个缺失的管理层。
一旦你这样理解它，目标也变了。你不再只是把工具接起来。你是在设计一个会成长、会适应、并且长期保持一致性的组织。
这就是另一个层级的问题了。也大得多。

## 我想让你自己搭一套脑子

这篇文章里讲到的所有东西——resolver 模式、trigger evals、check-resolvable、filing rules、自我修复 loop——都已经在我的个人 agent 上每天跑在生产环境中。它每天处理 200 个输入。它有 25,000 个文件。它在复利。
我把整个系统开源了。
我的开源项目 GBrain，天生就把 resolver 模式带了进去。`gbrain init` 会创建 RESOLVER.md、决策树和消歧规则。你的 agent 从第一天开始就会正确归档。check-resolvable 这个 skill 也是内置的。你不需要靠自己踩坑去学这些模式——系统本身已经把这些经验编码进去了。
GStack 是 coding layer。Fat skills，用 markdown 写。GitHub 上 72,000+ stars。GStack 里的 skills 调用的是 GBrain 里的知识。它们一起构成了完整架构：intelligence on tap。
OpenClaw 或 Hermes Agent 则是指挥层——那个 thin harness，负责 agent loop、session 管理和 cron 执行。GBrain 和 GStack 都是可以插在它上面的 skill。你的 agent 在回答前会读 GBrain 编译后的 truth。你的 cron 会在你睡觉时跑完整个 rollup pipeline。
这不是一个 SaaS 产品。这是一种架构。源码开着。skills 是 markdown。brain 是你自己拥有的 git repo。就算哪天其中某一层消失了，你的知识依然以纯文本形式存活下来。
这是 personal software 的新黎明。这不是 packaged software。这是你为自己搭建的软件，它有 fat skills、有 fat code、有 thin harness——它就是你自己的 personal mini-AGI。未来已经在这里了，而我想让你把它装进口袋里。
这个架构能写在一张索引卡上。知识可以装进一个 git repo。唯一缺少的，只是你开始动手。

---

相关项目：
- GBrain：github.com/garrytan/gbrain
- GStack：github.com/garrytan/gstack
