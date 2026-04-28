<!-- Slide number: 1 -->

![](图片11.jpg)

![](图片10.jpg)

华映资本
2026年2月

### Notes:

<!-- Slide number: 2 -->

![](图片11.jpg)
OpenClaw 核心创新技术架构

基于 openclaw 源码与官方文档的系统级拆解

核心要点
• 研究结论
• 1) OpenClaw 的本质是“可治理 AI 网关”，不是单通道 Bot。
• 2) 核心壁垒在于：统一控制平面 + 确定性路由 + 分层安全模型。

<!-- Slide number: 3 -->

![](图片11.jpg)
OpenClaw 架构全景（概览一）

从多通道接入、Agent 执行到响应回传的端到端主链路

核心要点

![image.png](Picture10.jpg)
• 入口层统一接收多平台消息，先做标准化与上下文整理。
• 中间层通过会话与路由机制决定由哪个 Agent 处理请求。
• 执行层在工具调用与模型推理之间形成可控的协同闭环。
• 输出层支持流式回传与结果沉淀，保障交互体验与可追溯性。

<!-- Slide number: 4 -->

![](图片11.jpg)
OpenClaw 架构全景（概览二）

记忆系统与工具执行在整体架构中的位置关系及数据流向

![image.png](Picture10.jpg)

核心要点
• 记忆模块承接历史上下文，为后续推理提供连续语义基础。
• 工具执行能力与消息通道解耦，便于跨平台复用与统一治理。
• 模型与执行器通过网关协调，避免通道侧重复实现复杂逻辑。
第 4页

<!-- Slide number: 5 -->

![](图片11.jpg)
OpenClaw 架构全景（概览三）

OpenClaw 的心跳机制（Heartbeat）

核心要点
• 定时层按 every=30m（可配 activeHours）触发；队列忙时跳过并稍后重试。
• Heartbeat 层做三件事：生成 prompt、选择 session scope、决定投递目标。
•上下文来自 HEARTBEAT.md（建议小而稳定）+ workspace/skills/memory。
• LLM 心跳回合本质是一次正常 agent turn：无事回 HEARTBEAT_OK，有事回告警/行动文本。
• 投递层先做 ack 抑制（剥离 HEARTBEAT_OK，短内容可丢弃），再 directPolicy/showOk/showAlerts/useIndicator 决定通知方式。

![更宽版流程图](Picture2.jpg)
第 5页

<!-- Slide number: 6 -->

![](图片11.jpg)
系统分层全景（System of Systems）

OpenClaw 已覆盖的核心渠道生态：WhatsApp、Telegram、Discord、Slack、Signal、iMessage 与 WeChat

核心要点
• 外部消息层
• 渠道接入层
• channels + channel plugins + outbound adapters
• 路由会话层
• bindings tiers + session-key algebra + dmScope
第 6页

<!-- Slide number: 7 -->

![](图片11.jpg)
创新 1：统一 WebSocket 控制平面

系统将管理类通信统一纳入 WebSocket 协议，以替代模块级分散实现

核心要点
• 控制平面：管“连接、身份、权限、策略、状态同步、事件回传”
• 数据平面：管“具体业务内容”（消息文本、工具结果等）
• OpenClaw 把控制平面统一到 WS 上后，连接先做 challenge/response（nonce + 设备签名）验身份
• 验证通过后下发 features/snapshot/policy，让客户端和服务端状态对齐

![image.png](Picture10.jpg)
第 7页

<!-- Slide number: 8 -->

![](图片11.jpg)
创新 1：统一 WebSocket 控制平面

强调控制平面并非接口集合，是具备角色、作用域与挑战握手机制的协议内核

核心要点
• 关键机制
• 强类型帧：req/res/event（TypeBox schema）。
• 握手先发 connect.challenge，再校验 device signature + nonce。
• operator 与 node 共用同一协议栈，统一 role/scopes/caps 治理。
• side-effect 方法要求 idempotency key，避免重放副作用。
第 8页

<!-- Slide number: 9 -->

![](图片11.jpg)
创新 2：确定性路由 + 会话策略

确定性路由（Deterministic Routing）

核心要点
• 同一条消息在同样条件下，永远按固定优先级命中同一条规则（从最具体到最通用，比如 peer -> guild/roles -> team -> account -> channel ->…
• 会话策略（Session Strategy）
• 命中路由后，再决定这条消息的上下文“记忆”放到哪个会话（sessionKey 怎么算）
• 比如 main、per-peer、per-channel-peer 等，控制是“共享记忆”还是“严格隔离”

![image.png](Picture10.jpg)
第 9页

<!-- Slide number: 10 -->

![](图片11.jpg)
创新 2：确定性路由 + 会话策略

会话主键命名规范：agent:<agentId>:...

核心要点
• 会话键策略
• dmScope：main / per-peer / per-channel-peer / per-account-channel-peer。
• 群组键独立：...:<channel>:group|channel:<id>。
• identityLinks 可跨渠道归并同一用户身份。
• binding.peer（最精确）
第 10页

<!-- Slide number: 11 -->

![](图片11.jpg)
创新 3：双 Pairing 安全模型

安全准入采用双重门禁机制，而非一次性放行

核心要点
• DM Pairing（人/消息源配对）
• 陌生用户先通过配对码或审批，确认“这个人能不能和系统对话”
• Device Pairing（设备/节点配对）
• 接入的设备要通过设备身份校验（如签名/nonce/审批）并拿到设备令牌，确认“这台机器能不能执行能力”

![image.png](Picture10.jpg)
第 11页

<!-- Slide number: 12 -->

![](图片11.jpg)
创新 3：双 Pairing 安全模型

DM Pairing（渠道侧）机制

核心要点
• 未知发信人先给 pairing code，不直接触发模型执行。
• 审批后写入 allowFrom，本地文件持久化。
• pairing 请求有 TTL、数量上限与并发锁。
• 默认策略鼓励 pairing/allowlist，而非开放 DM。
• Device Pairing（节点侧）
第 12页

<!-- Slide number: 13 -->

![](图片11.jpg)
创新 4：通道插件化契约（Channel Plugin Contract）

Channel Plugin Contract，即为 Telegram、Discord、WhatsApp 等渠道适配器提供统一接口规范

核心要点
• 不是“能收发消息就算接入”，而是必须按同一套规则实现生命周期和能力
• 分成“三层”
• 插件化（Plugin）
• 每个渠道是独立插件，新增渠道不改核心引擎

![image.png](Picture10.jpg)
第 13页

<!-- Slide number: 14 -->

![](图片11.jpg)
创新 4：通道插件化契约（Channel Plugin Contract）

Channel Plugin 的典型适配能力面

核心要点
• config / setup / pairing / security / groups / outbound / status
• gateway / auth / commands / threading / streaming / messaging
• directory / resolver / actions / heartbeat / agentTools
• 同一通道生命周期在同一个契约中完成，不再散落在多模块“拼装”。
• 配合 plugins allow/deny 与 schema 校验，实现扩展能力和治理能力同步增长。
第 14页

<!-- Slide number: 15 -->

![](图片11.jpg)
创新 5：双层流式回复机制

回复机制将“实时反馈”与“最终正确性”分层处理

核心要点
• Preview Streaming（预览层）
• 先把模型正在生成的内容实时展示出来（像“正在打字”）
• 这层可以频繁改写、覆盖，不一定入库
• Block Streaming（正式层）

![image.png](Picture10.jpg)
第 15页

<!-- Slide number: 16 -->

![](图片11.jpg)
创新 5：双层流式回复机制

Block Streaming（真实消息块）机制

核心要点
• 按 text_end 或 message_end 刷出块消息。
• min/max 字符阈值 + break preference（段落/换行/句子）。
• 代码块分割保护：必要时自动闭合与重开 fence。
• 可配置 coalesce，避免碎片化“连发刷屏”。
• Preview Streaming（临时预览）
第 16页

<!-- Slide number: 17 -->

![](图片11.jpg)
创新 6：运行时安全三层栈

运行时安全三层栈：Sandbox（执行环境）× Tool Policy（权限策略）× Elevated（特权通道）

核心要点
• Elevated（仅 exec 特权通道）
• Tool Policy（allow/deny/group）
• Sandbox（host vs docker）
• 工程价值
• 把“执行位置”和“权限策略”解耦，避免单开关幻觉。
第 17页

<!-- Slide number: 18 -->

![](图片11.jpg)
创新 7：system.run 策略引擎（非布尔开关）

system.run 会对每次命令执行进行多条件联合决策

核心要点
• 先解析命令
• 看真实要执行什么，是否是 bash -c / cmd /c 这类包装绕过
• 匹配策略
• 对照 allowlist、规则、风险级别、当前上下文（谁发起、在哪个会话/节点）

![image.png](Picture10.jpg)
第 18页

<!-- Slide number: 19 -->

![](图片11.jpg)
创新 7：system.run 策略引擎（非布尔开关）

命令执行结果由 security / ask / allowlist / approval 联合求值

核心要点
• 命令解析
• argv/shell
• allowlist 分析
• 匹配与风险判定
• 审批策略
第 19页

<!-- Slide number: 20 -->

![](图片11.jpg)
创新 8：模型容灾 = profile 轮转 + fallback 链

OpenClaw 的模型容灾采用两级故障切换，而非单点失败即切换模型

核心要点
• profile 轮转（同 provider 内切换“凭证配置”）
• 先在当前 provider/模型下，换另一套 auth profile（另一把 key / 另一个 OAuth 账号）
• 典型顺序：先用当前 profile，失败后切下一 profile
• 失败会打标记

![image.png](Picture10.jpg)
第 20页

<!-- Slide number: 21 -->

![](图片11.jpg)
创新 8：模型容灾 = profile 轮转 + fallback 链

auth profiles（OAuth/API key）按既定规则轮转

核心要点
• Provider 内部
• 对 rate-limit/auth/billing 建立 cooldown/disable 状态。
• 会话维度 profile stickiness，优先稳定缓存与上下文连续性。
• 失败后优先 provider 内切换，再决定是否跨模型 fallback。
• agents.defaults.model.primary + fallbacks 按序尝试。
第 21页

<!-- Slide number: 22 -->

![](图片11.jpg)
创新 9：OpenAI / OpenResponses 兼容网关

OpenClaw 在网关层提供“标准 API 外壳”，使外部客户端可按 OpenAI/OpenResponses 习惯接入

核心要点
• OpenClaw 在网关层提供“标准 API 外壳”，让外部客户端按 OpenAI/OpenResponses 习惯调用，但内部仍走同一套 Agent 执行内核
• 可以这样理解为“两个门面，一个引擎”
• 门面 1：POST /v1/chat/completions（OpenAI 兼容）
• openai-http.ts:202

![image.png](Picture10.jpg)
第 22页

<!-- Slide number: 23 -->

![](图片11.jpg)
创新 9：OpenAI / OpenResponses 兼容网关

POST /v1/chat/completions（OpenAI 兼容）接口

核心要点
• 入口
• POST /v1/responses（OpenResponses 兼容，支持 item/tool/image/file 流程）
• 与 Gateway auth、agent routing、sessionKey 规则保持一致
• 请求在内部仍走统一 agentCommand 链路，减少实现分叉
• stream 模式统一映射为 SSE 事件输出
第 23页

<!-- Slide number: 24 -->

![](图片11.jpg)
创新 10：Skills 平台（分层加载 + 动态刷新）

Skills 已从“静态提示词工程”升级为可配置、可门控、可热更新的系统组件

核心要点
• 把 Skills 从“静态提示词文件”升级成“有优先级、有准入规则、可热更新的能力平台”
• 分层加载具体是
• 技能来源不是一处，而是多层合并：extra/plugin、bundled、~/.openclaw/skills、~/.agents/skills、
• 同名技能按优先级覆盖，后层覆盖前层，所以你可以用 workspace 版本覆盖内置版本

![image.png](Picture10.jpg)
第 24页

<!-- Slide number: 25 -->

![](图片11.jpg)
创新 10：Skills 平台（分层加载 + 动态刷新）

Skills 已从“静态提示词工程”升级为可配置、可门控、可热更新的系统组件

核心要点
截图ClawHub
• 把 Skills 从“静态提示词文件”升级成“有优先级、有准入规则、可热更新的能力平台”
• 分层加载具体是
• 技能来源不是一处，而是多层合并：extra/plugin、bundled、~/.openclaw/skills、~/.agents/skills、
• 同名技能按优先级覆盖，后层覆盖前层，所以你可以用 workspace 版本覆盖内置版本
• 加载后还会做门控筛选，不是全放行

![image.png](Picture10.jpg)
第 25页

<!-- Slide number: 26 -->

![](图片11.jpg)
创新 10：Skills 平台（分层加载 + 动态刷新）

Skills 已从“静态提示词工程”升级为可配置、可门控、可热更新的系统组件

核心要点
• workspace/skills（最高优先级）
• ~/.openclaw/skills（managed）
• bundled skills（内置）
• extraDirs + plugin skills
• 机制亮点
第 26页

<!-- Slide number: 27 -->

![](图片11.jpg)
创新 11：媒体管线的安全与生命周期治理

OpenClaw 将媒体输入视为“潜在攻击面”进行安全治理，而非普通附件

核心要点
• 把图片/文件当成“不可信输入 + 临时资产”来管理，而不是普通附件
• 可以拆成两部分
• 安全治理（先安检）
• URL 输入先过防护：域名策略、DNS/IP 检查、重定向限制，防 SSRF（防探测内网）

![image.png](Picture10.jpg)
第 27页

<!-- Slide number: 28 -->

![](图片11.jpg)
创新 11：媒体管线的安全与生命周期治理

媒体识别采用 magic / header / ext 三重校验

核心要点
• URL 输入
• SSRF Guard
• DNS/IP/重定向
• 响应限流
• maxBytes
第 28页

<!-- Slide number: 29 -->

![](图片11.jpg)
可靠性与运维：把长期运行作为一等公民

可靠性治理依赖 pruneAfter / maxEntries / rotateBytes / maxDiskBytes 等关键参数

核心要点
• Session 维护
• cleanup 支持 warn 与 enforce 模式。
• 避免会话索引与转录文件无限膨胀。
• Context 治理
• compaction：持久化摘要进入 JSONL。
第 29页

<!-- Slide number: 30 -->

![](图片11.jpg)
工程规模证据（openclaw 本地统计）

工程规模关键指标

核心要点
• 1366：src 测试文件（*test.ts）
• 652：docs 文档文件
• 28MB：src 体量
• 工程启示
• 复杂度足够高，架构设计重点应放在治理能力与演进稳定性，而非单次功能实现。
第 30页

<!-- Slide number: 31 -->

![](图片11.jpg)
结论：OpenClaw 的竞争力来自“系统治理能力”

统一控制面、确定性路由与分层安全策略共同构成其技术护城河

核心要点
• OpenClaw 已从“聊天机器人”进化为“个人 AI 网关操作系统”。
• 其创新重心在架构语义（协议/路由/会话/策略），不是单一模型能力。
• 产品构建启示：优先迁移治理框架，再做功能扩展。
• 这能在复杂度上升时保持可维护、可审计、可持续迭代。
第 31页

<!-- Slide number: 32 -->

![](图片11.jpg)
挑战：OpenClaw 目前的主要问题

核心要点
• 安全性：OpenClaw的强大能力来自于对个人电脑控制权限的极致释放，但也不可避免地带来了诸多安全风险：比如API keys泄露、删除用户重要信息等。目前代码库中能找到的明显安全漏洞有500+个。
• 易用性：OpenClaw配置困难且复杂。虽然现在很多云厂商提供“一键部署”服务，但是云端沙盒仍然需要用户手动配置各种个人信息的连接。整体时间消耗通常为数个小时。
• token消耗：OpenClaw的主张是“个人随时待命的24h助理”，意味着OpenClaw会反复触发agentic workflow以迎合用户。产生的后果是token消耗量惊人，催生了kimi2.5等低价模型的火爆（被OpenClaw的火爆带动，月之暗面2026年初的API营收已经超过2025年全年的总和）。
第 32页

<!-- Slide number: 33 -->

![](图片11.jpg)
为值得专注的未来

 All the future that’s fit to focus
声明：本文本提供的信息仅供参考，不对任何人用此作为投资依据造成的损失负责，投资人必须意识到投资本基金的回报和风险同时存在。本文本的信息已尽力确保准确无误，但无法保证精确。未经本基金的同意，不得将本文本全部或部分以任何方式传递给他人。

### Notes:
