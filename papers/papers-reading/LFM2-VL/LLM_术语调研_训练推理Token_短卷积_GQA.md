# LLM 专业术语调研

> 训练 Token 与推理 Token · 短卷积（Short Conv）· 分组查询注意力（GQA）
> 编制日期：2026-04-16

---

## 一、训练 Token vs. 推理 Token

### 1.1 Token 的通用定义

在大语言模型（LLM）语境下，**Token** 是文本被分词器（tokenizer，如 BPE / SentencePiece / Tiktoken）切分后得到的最小离散单位，既可能是一个完整单词、一个子词片段（subword），也可能是单个字符或字节。每个 Token 对应词表（vocabulary）中的一个整数 ID，并在模型内部通过嵌入层（embedding）映射为一个稠密向量，随后参与所有矩阵运算。

训练 Token 与推理 Token 本质上是**同一种离散单元**，差异不在 Token 本身，而在于它被消费的阶段、计算路径、梯度语义与计费方式。

### 1.2 训练 Token（Training Token）的严格定义

**定义**：在模型参数优化过程中，参与前向传播并对损失函数产生梯度贡献的每一个 Token 位置，计为一个"训练 Token"。其数量通常以公式计量：

```
N_train = Σ(batch_size × sequence_length)
```

对所有优化步求和；若数据重复 E 个 epoch，则再乘以 E。

- **阶段归属**：包括预训练（pre-training）、继续预训练（CPT）、有监督微调（SFT）、偏好对齐（DPO/RLHF/RLVR）等所有需要反向传播的阶段。
- **并行性质**：得益于 causal mask，一次前向即可对序列内*所有*位置同时计算 next-token loss（teacher forcing），因此训练 Token 的"消费"是**并行**的。
- **经济含义**：训练 Token 数衡量"模型见过多少数据"，是 scaling law（Chinchilla、Hoffmann 等）中的核心自变量。GPT-3 使用约 300B 训练 Token，Llama 3 超过 15T。
- **严格口径细节**：padding Token、被 loss_mask 屏蔽的 Token（如 SFT 中的 prompt 段）通常**不**计入"有效训练 Token"；论文与报告里报出的 "tokens seen" 一般指**参与 loss 计算**的 Token 数。

### 1.3 推理 Token（Inference Token）的严格定义

**定义**：模型参数冻结、仅做前向推断（无反向传播）时被处理或生成的 Token。推理 Token 在工业界被进一步严格区分为两类，这一区分直接决定了**延迟、吞吐、显存以及 API 计费**：

| 类别 | 别称 | 来源 | 计算特征 | 典型计费 |
|---|---|---|---|---|
| **输入 Token** | Prompt / Prefill Token | 用户提示词、system prompt、历史对话、工具返回 | 一次性并行前向；构建 KV cache；受 FLOPs 主导 | 单价较低（如 Claude/GPT 的 input price） |
| **输出 Token** | Completion / Decode / Generation Token | 模型自回归生成 | 逐 Token 串行；每步只算 1 个新位置，读写 KV cache；受显存带宽主导 | 单价较高（通常是 input 的 3–5×） |

- **Prefill 阶段**：所有输入 Token 一次性送入，计算 Q/K/V，生成初始 KV cache。此阶段是**计算密集**（compute-bound），性质上类似训练的一次前向。
- **Decode 阶段**：每一步只生成 1 个新 Token，读取之前全部 KV cache，写回新的 1 行 KV。由于每步访存量远大于算力需求，是**显存带宽密集**（memory-bound）。
- **上下文长度约束**：input + output 之和必须 ≤ 模型的 context window（如 200K）；其中 output 还会受 `max_output_tokens` 的独立上限（如 8K/32K）约束。

### 1.4 二者对比速查表

| 维度 | 训练 Token | 推理 Token (input) | 推理 Token (output) |
|---|---|---|---|
| 梯度 | 有（反向传播） | 无 | 无 |
| 并行性 | 整段并行 | 整段并行（prefill） | 逐 Token 串行（decode） |
| 瓶颈 | 算力 + 通信 + 显存 | 算力 | 显存带宽 + KV cache 容量 |
| KV cache | 不保留，步步重算 | 构建 | 追加写入 + 反复读取 |
| 数量口径 | Σ batch×seqlen×steps×epochs | prompt 长度 | 生成长度 |
| 成本归属 | 资本性投入（CapEx） | 服务成本（per-call） | 服务成本（per-call，更贵） |
| Scaling 角色 | Chinchilla 定律自变量 | 延迟 / TTFT 主导 | TPOT、吞吐主导 |

---

## 二、短卷积（Short Convolution）

### 2.1 严格定义

**短卷积**（short conv，又称 short causal conv、short depthwise conv）是在序列模型中沿时间维度施加的一个**小核长（通常 K=3 或 K=4）、因果（causal）、按通道独立（depthwise）**的一维卷积。其严格形式如下：

```
输入张量 x ∈ R^{B×T×D}，权重 W ∈ R^{D×1×K}（每通道独立权重）
输出 y[b, t, d] = Σ_{k=0..K-1} W[d, 0, k] · x[b, t-k, d]
其中 t-k < 0 的位置 zero-pad（保证因果性：t 位置只能看到 ≤ t 的输入）
```

- **Depthwise（按通道独立）**：不同通道之间**不**相加，这使得参数量仅为 `D·K`（极小），FLOPs 与显存都接近 `O(T·D·K)`。
- **Causal（因果）**：通过左 padding（K-1 个零）保证生成时不泄露未来信息。
- **Small kernel**：K 通常是 3 或 4（Mamba 默认 K=4）。对比之下，Hyena 用的是"长卷积"（long conv），核长等于序列长度 T，作用完全不同。

### 2.2 作用与在现代架构中的位置

短卷积几乎成为**所有高性能线性/亚二次序列模型**的标配组件，在 SSM、线性注意力、RWKV-ish 家族里承担"**局部 Token 混合器**"的角色：

- **H3（2022）**：首次以 "shift-SSM"（实际就是 K 很小的因果卷积）形式引入，作为后续 Mamba 架构的前身。
- **Mamba / Mamba-2**：在选择性 SSM 之前，对 `x` 施加 K=4 的 causal depthwise conv，**补偿 SSM 自身仅能捕获指数衰减记忆、对局部 n-gram 建模较弱**的短板；工程实现上由 `causal_conv1d` 融合算子提供（比裸 PyTorch 卷积快数倍）。
- **Mamba-3（2025）**：通过新的离散化方式 + BCNorm 后的偏置项，**移除了短卷积**，说明短卷积在前代是"补丁式"设计。
- **Gated Linear Attention / Qwen3.5 Gated DeltaNet 等**：把 Q/K/V 拼接后过同一个 K=4 causal depthwise conv，给线性注意力"**预混**"局部上下文。
- **视觉 Mamba（EfficientViM 等）**：在 SSM 前加一个 3×3 depthwise conv 充当局部特征提取，与 1D 短卷积思路一致。

### 2.3 为什么需要它

- **SSM / 线性注意力的盲区**：它们把历史压缩进固定大小状态，对细粒度局部依赖（bigram、trigram、近邻语法结构）表达力偏弱。短卷积以**极低代价**显式补上近 K 个 Token 的显式混合。
- **效率几乎免费**：参数量 `D·K`、计算量 `O(T·D·K)`，相对注意力的 `O(T²·D)` 可忽略。
- **推理友好**：decode 时可维护一个长度 K-1 的环形缓冲（ring buffer）作为 conv state，每步 `O(D·K)`，与 KV cache 相比几乎零开销。

---

## 三、分组查询注意力（GQA, Grouped-Query Attention）

### 3.1 严格定义

**GQA** 由 Ainslie 等人在论文 *"GQA: Training Generalized Multi-Query Transformer Models from Multi-Head Checkpoints"*（Google, EMNLP 2023, arXiv:2305.13245）中提出，是介于 MHA 与 MQA 之间的一种**注意力头分组方案**。

设 Transformer 单层有 **H** 个 Query 头；GQA 引入超参 **G**（1 ≤ G ≤ H），令 Key/Value 只保留 **G** 组，每组由 H/G 个 Query 头**共享**同一对 K、V：

```
Q ∈ R^{T×H×d_h}
K, V ∈ R^{T×G×d_h}
head_i 使用 K_{⌊i·G/H⌋}, V_{⌊i·G/H⌋}
```

- **G = H**：退化为标准多头注意力 **MHA**。
- **G = 1**：退化为多查询注意力 **MQA**（Shazeer, 2019），所有 Q 头共享一对 K、V。
- **1 < G < H**：真正意义上的 GQA（论文典型设置 G=8），在质量与速度之间做平滑权衡。

### 3.2 训练机制：Uptraining（再训练 / 续训）

论文的另一核心贡献是提出一种低成本把**已训好的 MHA checkpoint 转换为 GQA** 的流程：

1. **Mean-pool**：把原 MHA 中每组内 H/G 个 K 头（及 V 头）沿头维做**平均**，得到 G 组初始化的 K、V 投影权重。
2. **Uptrain**：用原预训练数据的极小一部分（论文约 **5%** 预训练算力）继续训练，让模型重新拟合共享 K/V 的结构。
3. **收益**：最终质量**接近 MHA**，推理速度和显存**接近 MQA**。

### 3.3 为什么 GQA 对推理至关重要

在长上下文 decode 阶段，**KV cache 的读写带宽是主要瓶颈**。KV cache 大小正比于 K/V 头数。GQA 将 KV 头数从 H 压缩到 G，从而：

- **KV cache 显存直接减少 H/G 倍**（G=8、H=64 时减 8×）；
- **decode 带宽压力等比下降**，tokens-per-second 显著提升；
- **对训练影响很小**（prefill 阶段依然充分利用 H 个 Q 头表达力）。

### 3.4 三种方案对比

| 特性 | MHA | GQA (G groups) | MQA |
|---|---|---|---|
| KV 头数 | H | G（1 < G < H） | 1 |
| KV cache 大小 | 100% | G/H | 1/H |
| decode 速度 | 基线 | 接近 MQA | 最快 |
| 质量 | 最佳 | 接近 MHA | 略有退化 |
| 训练成本 | 标准 | MHA + ~5% uptrain | 从零训练或大量 uptrain |
| 典型采用者 | GPT-2/3、早期 Llama 1 | Llama 2-70B、Llama 3 全系、Mistral、Qwen2+ | PaLM、Falcon-1B、Gemini Nano |

### 3.5 与后续工作的关系

- **MLA（Multi-head Latent Attention，DeepSeek V2/V3）**：进一步把 K/V 投影到一个低秩潜空间，在信息保真度上比 GQA 更接近 MHA，KV cache 更小。可视为 GQA 的"压缩升级版"。
- **Sparse Query Attention (SQA, 2025)**：与 GQA 对偶——不减 KV 头而减 Q 头。

---

## 四、一句话总结

- **训练 Token**：参与反向传播、贡献梯度的序列位置，衡量"模型见过多少数据"。
- **推理 Token**：只走前向；进一步细分为 prefill（并行、算力受限）与 decode（串行、带宽受限）两类，分别定价。
- **短卷积**：K≈3–4 的因果 depthwise 1D conv，线性序列模型中负责局部 Token 混合，几乎免费。
- **GQA**：让 H 个 Q 头共享 G 组 K/V（1 < G < H），用 MHA 的质量换 MQA 的推理效率，现代大模型标配。

---

## 参考资料

- Ainslie et al., *GQA: Training Generalized Multi-Query Transformer Models from Multi-Head Checkpoints*, EMNLP 2023. [arXiv:2305.13245](https://arxiv.org/abs/2305.13245)
- Shazeer, *Fast Transformer Decoding: One Write-Head is All You Need*, 2019（MQA 原始提案）
- Gu & Dao, *Mamba: Linear-Time Sequence Modeling with Selective State Spaces*, [arXiv:2312.00752](https://arxiv.org/abs/2312.00752)（短卷积在 Mamba 中的用法）
- Fu et al., *Hungry Hungry Hippos (H3): Towards Language Modeling with State Space Models*, 2022（shift-SSM = 短卷积前身）
- Together AI, [*Mamba-3 Technical Report*](https://www.together.ai/blog/mamba-3), 2025（讨论移除短卷积）
- Hoffmann et al., *Training Compute-Optimal Large Language Models (Chinchilla)*, 2022（训练 Token 缩放律）
- NVIDIA Blog, [*AI Tokens Explained*](https://blogs.nvidia.com/blog/ai-tokens-explained/)（训练 / 推理 Token 的工业口径）
- Sebastian Raschka, [*LLM Architecture Gallery — GQA*](https://sebastianraschka.com/llm-architecture-gallery/gqa/)
