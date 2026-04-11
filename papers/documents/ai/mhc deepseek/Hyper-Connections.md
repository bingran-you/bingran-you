# PDF Document: [Translated - ZH] Seed Hyper-Connections.pdf

**File Path:** [Translated - ZH] Seed Hyper-Connections.pdf

**Processed Date:** 2026-02-10T18:16:47.878Z

**File Size:** 12140.05 KB

**Total Pages:** unknown

**Extracted Pages:** unknown

**PDF Library:** Zotero PDFWorker

**Attachment Item ID:** 10091

**Title:** Hyper-Connections

**Collection:** Agents > mHC DeepSeek

---

## Extracted Text Content

超连接
朱德法、⻩洪志、⻩子浩、曾宇陶、毛云姚、吴邦古, 启阳敏,荀周
种子-基金会-模型团队,字节跳动
{朱德法,⻩洪志.51,⻩子豪.notabot,玉桃曾,
毛云瑶.myy,乌邦古,闵启阳,周 bytedance.com
摘要
我们提出了超连接,这是一种简单但有效的方法,可以作为残留连接的替代方案。该方法专 ⻔针对残差连接变体中常⻅的缺点,如梯度消失与表示坍缩之间的跷跷板效应。理论上,超 连接允许网络调整不同深度特征间连接强度,并动态重排层。我们开展的实验聚焦于大型语 言模型的预训练,包括密集和稀疏模型,其中超连接相较残余连接表现出显著的性能提升。 对视觉任务进行的其他实验也显示出类似的改善。我们预计该方法将在广泛的人工智能问题 中广泛适用并带来益处。
1 简介
图1:基线模型OLMoE-1B-7B及带超连接模型OLMoE-1B-7B-DHC 的性能 4。(1)和
(2)分别显示训练损失(0.99 EMA平滑)和C4-en验证损失。我们的方法收敛速度比基线 快1.8倍,并且在500亿代币处保持显著优势。(3)和(4)展示了HellaSwag和ARCChallenge的准确率曲线,展示了OLMoE-1B-7B-DHC 4型号的优越性能。
×
×
深度学习在多个领域取得了巨大成功,残差连接(He 等,2016)在当代神经网络架构中发 挥了关键作用,包括变换器和卷积神经网络。残差连接有助于缓解梯度消失的问题,从而有 效训练非常深的网络。然而,必须承认残余联系并非万无一失,且仍存在未解决的局限性。
残差连接的两种主要变体⸺前范数和后范数⸺各自在梯度消失和表示坍缩之间做出不同的 权衡。Pre-Norm对每个残差块前的输入应用归一化作,有效解决梯度消失问题(Bengio 等,1994;Glorot 和 Bengio,2010)。然而,这也可能导致深度表示中的坍缩问题(Liu 等,2020),即更深层的隐藏特征变得高度相似,随着层数增加,额外层的贡献减弱。相比 之下,后范数在每个残差块输出后应用归一化,减少隐藏状态对后续层的影响。这种方法可 以缓解代表性崩溃的问题,但

图2: 膨胀率为 的超连接(HC)。 (a) 残余连接。(b) 超连接: 和 是可学习的标量,或根据具体HC版本由网络预测的标 量。这些连接实现了横向信息交换和跨深度特征的垂直整合。带HC的变压器如图17所示。 (c) 深度连接在层输出与隐藏向量之间进行加权和 。(d) 宽度-连接允许隐藏向量 和 之间交换信息。
n=2 β ,β ,α ,α ,α ,α ,α ,
1 2 0,0 0,1 1,0 1,1 2,1 α2,2
h1 h1
h2
同时重新引入了梯度消失的问题。梯度消失和表示坍缩就像跷跷板的两端,这两种变体在这 两个问题之间做出了各自的权衡。关键问题在于,残差连接,包括预范数和后范数变体,预 先定义了层内输出与输入之间连接的强度。
受残差连接限制的驱动,一个重要问题浮现: 神经网络能否自主学习连接的最佳强度以提升性 能? 为此,我们提出了超连接(HC),其性能显著提升,但计算量和参数几乎没有增加。我 们将证明后范数和前范数变体都可以表示为特定的不可训练超连接形式,详⻅第3.1节。
超连接(HC)的核心思想是提出可学习的 深度连接和 宽度连接,如图2(b)所示。这些连 接能够灵活地垂直整合特征,相较于图2(a)所示的残余连接。深度连接可以被视为一种广 义的残差连接,赋予每层输入和输出连接的权重。为了使网络能够同时建模不同的深度连 接,我们将网络输入扩展为 个副本,每个副本都有自己的深度连接,如图2(b)所示。该 设计允许多个隐藏向量保留连接前一层的多个模式,如§ 4.5所示。此外,我们建立了 隐藏 向量之间的宽度连接,允许同一层内隐藏向量之间的信息交换,如图2(b)所示。我们认为 隐态是必要的。如附录F所分析,跷跷板效应在 时依然存在,实验显示其并未改 善性能,如图5所示。相比之下,当 时,超连接不仅可以学习调整残差的强度,还能顺 序或并行重排层,详⻅第3.2节。为进一步提升灵活性,我们引入了动态超连接(DHC),使 网络能够根据输入调整连接权重。值得注意的是,尽管HC似乎使网络宽度增加了 倍,但额 外参数和计算成本几乎可以忽略不计,详⻅附录B。带HC的变压器如图17所示。
n
n
n(> 1) n = 1 n>1
n
图3:OLMo-1B模型电流输入与前一层的余弦相似度(Groeneveld等,2024)。曲线代表 相似度的中位数,阴影区域表示第5百分位到第95百分位之间的范围。红色曲线表示带有预 范数的模型,蓝色曲线表示具有超连接的模型。
我们的研究主要集中在大型语言模型(LLMs)的预训练,同时也扩展到视觉生成和分类任 务。以预范数为基线,我们展示了超连接的显著优势,包括1B和7B密集模型以及7B的MoE模 型,具体为

详⻅第4条。如图1所示,OLMoE(Muennighoff等,2024)的益处尤为显著。采用DHC的 模型收敛速度快 1.8 倍,ARC-Challenge比用500 B标记训练的基线提升 了6 分。根据我们 的可视化分析,如图3所示,基线模型倾向于表示崩溃,其特征是相邻层特征之间高度相似。 相比之下,具有HC的模型在相邻层间特征间的相似度显著较低,相似性范围更广。这表明 HC增强了每一层的影响力。进一步讨论⻅第4.5节和附录F。这些有力证据证明了超连接原则 的普遍性,我们预计它们将在众多其他人工智能挑战中应用。
2 方法
2.1 静态超连接
将隐藏向量 (或 )视为 层的输入,初始输入 到网络。最初, 被复制 次,形成初始的超隐矩阵 。这里, 是膨胀率。对于 第 层,输入由前一层的超隐矩阵组成 。最后,我们将
最后一个超隐矩阵逐行求和,获得所需的隐藏向量,然后通过最终投影仪生成网络的最终输 出(即变换器中的归一化层和一个解嵌入层)。为了简化后续分析中的符号,我们省略图层 索引,仅将超隐藏矩阵记为 。
h∈
k−1 Rd h ∈
k−1 Rd×1 k h0 h0 ∈
Rd n H0 = (h h ... h ) ∈
0 0 0 ⊤ Rn×d n
k H=
k−1 (h h ... h ) ∈
1
k−1
2
k−1 kn−1 ⊤ Rn×d
H = (h h ... h )
1 2 n⊤
超连接(HC)可以用矩阵 HC表示,其中每个元素定义连接权重。矩阵结构如下:
HC = =
(01×1
Am
B Ar
)∈
0
α1,0
α2,0
⋮
αn,0
β1
α1,1
α2,1
⋮
αn,1
β2
α1,2
α2,2
⋮
αn,2
... ... ...
⋱ ...
βn
α1,n
α2,n
⋮
αn,n
R . (1)
(n+1)×(n+1)
考虑一个网络层 ,它集成了变压器内的自关注层和前馈网络。HC的输出,记作 ,可以简 单地表述如下:
T H^
=
H^ HC(T , H) = B T (H A ) +
⊤ ⊤ m ⊤ A H. (2)
r⊤
我们使用 作为权重,对输入 进行加权求和,得到当前层 的输入 , 其给出公式为:
Am H = (h h ... h )
1 2 n ⊤ T h0
h0⊤ = A H, (3)
⊤m
而 Ar 用于连接 H 并将其映射到超隐矩阵 H′,如下所示:
H′ = A H. (4)
r
⊤
随后,输出为:
=
H^ B (T h ) +
⊤ 0 ⊤ H . (5)
′
深度 连接 可解耦为如下矩阵,如图2(a)所示:
DC = =
(B
diag(Ar )
)∈
( β1
α1,1
β2
α2,2
... ...
βn
αn,n
) R , (6)
2×n
其中第一行 表示当前层输出的权重, ,最后一行 表示输入的权重。我们用 表示 对⻆线元素的平坦向量。
B T diag(Ar) diag(Ar) Ar

宽度-连接矩阵可定义如下,如图2(b)所示:
W C = (A A ) ∈
m r R . (7)
n×(n+1)
采用超连接的算法⻅算法1。
2.2 动态超连接
HC 的元素可以动态依赖于输入H,动态超连接(DHC)的矩阵表示定义如下:
HC(H) = (8)
( 01×1
A (H)
m
B(H) A (H)
r
)
同样,给定层 T 和输入 H,我们得到DHC的输出如下:
=
H^ HC(H)(T , H). (9)
实际上,我们将动态矩阵和静态矩阵结合起来实现DHC。动态参数通过线性变换获得。为了 稳定训练过程,我们在线性变换前引入归一化,并在变换后应用tanh激活函数,并使其通过 一个小的初始可学习因子进行缩放。以下方程详细说明了这些动态参数的计算方法:
Hˉ = norm(H) (10)
B(H) = sβ ∘ tanh(Hˉ Wβ)⊺ + B ∈ R (11)
1×n
A (H) =
m sα ∘ tanh(Hˉ Wm) + Am ∈ R (12)
n×1
A (H) =
r sα ∘ tanh(Hˉ Wr) + Ar ∈ R (13)
n×n
我们在第4节的实验表明,动态超连接在语言建模任务中优于静态超连接。PyTorch 对静态和 动态超连接变体的实现详⻅算法 2 和 3。
2.3 初始化
为了使超连接的初始化等价于预范数残余连接,我们采用以下初始化策略。在方程中,动态 参数 Wβ、 Wm和 Wr 。11、12和13初始化为0,而静态矩阵初始化如下:
=
(01×1
Akm
Bk
Ark) , (14)
( 01×1
ek mod n
11×n
en×n)
其中 k 是该层的索引。 mod 表示模运算。
3 为什么要有超连接
在本节中,我们将阐明超连接背后的原理。我们探讨了残差连接的变体,即前范数和后范 数,如何被视为不可训练的超连接,并引入顺序并行对偶性概念,展示超连接如何动态优化 层排列以提升网络性能。通过展开视图对超连接进行可视化分析⻅第4.5节。
3.1 残差连接作为不可训练超连接
前范数和后范数残余连接可以用以下超连接矩阵表示,展开率为 n = 1:

HC =
P reNorm , (15) HC =
(0
1
1
1) P ostNorm , (16)
0
1
σ +σ +2σ
i2 o2 io
1
σ +σ +2σ
i2 o2 io
1
其中 σi 和 σo 分别表示神经网络层输入和输出的标准差, σio 表示它们之间的协方差。
对于预范数,其超连接矩阵是一个 矩阵,其中右下三⻆部分填充为1,其余部分为占位 符0。对于后范数,权重依赖于输入和输出的方差和协方差,形成一个 矩阵。因此,它 们的超连接矩阵不可训练。在本研究中,我们提出了可以是 矩阵的超联 结,权重可训练甚至基于输入预测。完整的推导⻅附录G。
2×2 2×2 (n + 1) × (n + 1)
3.2 顺序并行对偶
给定一系列神经网络模块,我们可以选择顺序或并行排列它们。然而,超连接提供了一种方 法,能够学习将这些层重新排列成混合顺序和并行排列的配置。
图4:超连接的顺序并行排列, n = 2。
不失一般性,我们将膨胀率设为 。如果将超连接学习为以下矩阵,神经网络将按顺序排 列:
n=2
HC = . (17)
0 1 0
1 1 0
1 0 1
在这种情况下,深度连接退化为残差连接,如图4(a)所示。
当奇偶层(层编号从1开始)的超连接由以下矩阵定义时,神经网络将每隔两层并行排列,类 似于变压器中并行变压器模块的排列(Wang,2021),如图4(b)所示。一般且完整的推 导⻅附录H。
HC =
odd , (18) HC =
0 1 1
1 1 1
0 1 1
even . (19)
0 0 1
0 1 0
1 0 1
因此,学习各种形式的超连接矩阵可以创造出超越传统顺序和并行配置的层次排列,从而实现 软混合甚至动态

安排。对于静态超连接,网络中的层排列在训练后保持固定。相比之下,动态超连接允许排 列对每个标记动态适应。
4 结果
图5:不同扩展率下的训练损失曲线比较。左侧子图包含在不同扩展率下具有动态超连接 (DHC)的模型,右侧子图展示了省略tanh函数的效果。这两个子图说明了增加扩展率如何 提升训练损失性能,超过5亿个token。结果通过系数为0.99的指数移动平均进行平滑处理。
表1:在500 B代币训练下 n 扩展率的消融研究。
我们主要进行大型语言模型的预训练实验,包括密集模型和专家混合模型(MoE) (Shazeer 等,2017),并扩展到视觉生成和分类任务。由于篇幅限制,我们将视觉实验收 录在附录E中。
实验设置。 我们采用OLMo(Groeneveld等,2024)对稠密模型提出的实验设置,以及
OLMoE(Muennighoff等,2024)对MoE模型提出的实验设置。 对于密集模型,我们使用 doLmap-v1.5-sample (Soldaini 等,2024)作为训练数据集。我们在1B模型上进行消融 研究,并评估我们方法在7B模型尺度上的有效性。 对于 MoE 模型,我们在 OLMoE-MIX 数 据集上训练 OLMoE-1B-7B 模型,包含带和无超连接。这些模型激活了70亿参数中的13亿。 所有实验都用500B代币训练。
实施。 我们保持基线模型的训练配置,用超连接替代残余连接。方程中的静态成分。1、11、 12、13不利用权重衰减,而动态分量则使用。由于最终变换器块的超隐向量最终会被求和, 我们确保输出的标准差( )(在最终层范数和未嵌入层之前)与原始差值保持一致。初始 化时,我们将输出模块权重在所有层的权重 ,包括前馈网络的第二线性层和注意力模块 的输出投影子,按 倍的比例进行扩展,
std std n

其中 n 表示膨胀率。超连接带来的参数和计算开销可以忽略不计,详⻅表格。7和8。
指标。 根据OLMo的方法论(Groeneveld等,2024),我们报告了V2和V3验证集的平均困 惑度(PPL)和损失,以及下游基准测试零样本评估的平均指标(⻅表13)。我们观察到数 据集零样本性能指标的显著波动性(表13中灰色标示),邻近检查点的波动超过20%。为了 获得更可靠和一致的结果,我们将这些波动性数据集排除在分析之外。对于MoE模型,与 OLMoE一致,我们还展示了V3验证集的损失,以及下游基准测试的准确性(⻅表14)。
4.1 消融研究
我们使用扩展率为 的动态超连接,默认方法包括tanh函数,后缀为-DHC,而-SHC表 示静态超连接。
n=4
评估结果⻅表1,训练损失曲线⻅图5。我们观察到,当膨胀速率为 时,DHC的性能低 于基线。然而,对于 ,DHC显著优于基线,在 时取得优异效果,而提升到 带来的额外益处有限。值得注意的是,OLMo-1B-DHC在无T9的测试 中均表现优异,V2 评估损失减少 了0.034,V3 评估损失减少了 0.029 。此外,DHC( )训练损失的下 降率比基线更陡峭,且DHC表现出更高的稳定性,任何DHC实验中均未观察到峰值。
n=1
n>1 n=4 n=8 ×8
n≥2
静态和动态的超连接。 表2展示了一项比较SHC和DHC的消融研究。所有超连接(HC)变体 均显著优于基线。在2的膨胀率下,DHC和SHC的改进程度相似。然而,在膨胀率4下, DHC的表现明显优于SHC。
表2:针对500 B标记训练的静态和动态超连接消融研究。
B和WC的重要性。 如表3所示,不训练WC会导致显著性能下降,V2损失增加 0.021,V3 损失 0.017,如表3第4和第6行比较时所⻅。相比之下,B未受训时影响较小。因此,确保 WC和B的可训练性至关重要。
4.2 与相关作品的比较
我们在OLMo中实现了Altup(Baykal等,2024)和ResiDual(Xie等,2023)方法。Altup 的动机是在保持低计算成本的同时,通过只将部分隐藏状态传递给变压器块来拓宽隐藏维 度。相比之下,ResiDual 被提议以双流⻛格结合前范数和后范数。这两种方法都能将隐藏大 小扩展 倍,计算开销可忽略不计,ResiDual正好将隐藏规模扩展为2倍。为了公平对比, 我们在实验中设定了 。不幸的是,尽管这些方法在训练初期显示出成效,但基线会逐 渐超越,正如表4的结果和图15的训练损失曲线所示。
n
n=2

表3:OLMo-1B-DHC消融研究 4.在 B 或 WC 列中,符号“ ”表示初始化时无法训练的参 数。
××
表4:相关方法在OLMo-1B模型上的表现。
4.3 7B⻋型
图6:(1)和(2)4个模型的训练损失(0.99 EMA平滑化)及C4-en验证损失,适用于 4 个模型。(3)和(4)关于hellaswag和sciQ的精度曲线,展示了OLMo-7B-DHC 4型号的 优越性能。
× ×
我们评估了在7B模型上超连接的有效性,训练了一个扩展率为4的DHC模型,记作OLMo7B-DHC 4。根据表5,OLMo-7B-DHC 4在所有平均指标上显著优于基线OLMo-7B模 型。在V2评估中,OLMo-7B-DHC 4的损失改善为 0.022,PPL 改善为 0.293 。此外, 下游基准测试 0.710 的平均得分超过基线0.701,具体任务的结果⻅图10。
×× ×
基于图6,OLMo-7B-DHC 4模型在指标上始终表现优于基线,包括训练和验证损失及下游 基准测试的准确性。值得注意的是,在400 B代币发行后,该模型的提升保持且收益未减。这 表明OLMo-7B-DHC 4模型即使在代币数量较多时,仍持续提供持续的减少损失效益。此 外,根据图6,基线模型表现出频繁的峰值,而我们的DHC模型在整个训练过程中没有波动。 这表明我们的方法不仅能实现更好的减重,还能确保训练更稳定。
×
×
4.4 MOE模型
我们评估了专家混合(Mixture-of-Experts,简称MoE)模型中超连接的有效性。我们将原 始的OLMoE-1B-7B模型重新训练为基线,并训练一个应用动态的模型

表5:7B模型的性能。FLOPs指的是前向传递中每个令牌的计算。
超连接(DHC)以 替换剩余连接。完整结果⻅图9,图示超连接在几乎所有指标上优于 残差连接。在许多指标中,我们的方法只需 一半 的训练标记即可达到与基线相同的性能。图 1和表6突出展示了部分结果,如训练损失减少约 0.027,C4-en验证集损失减少 0.028, ARC挑战提升 6分, MMLU变异提升 1.2 分。
n=4
表6:在OLMoE评估设置下,使用500B代币训练的MoE模型下游评估。ARC-C代表ARCChallenge,ARC-E代表ARC-Easy。MMLU Var 是 MMLU 的改进版本,包含不同的少发样 本,在早期训练中提供稳定反馈,如 OLMoE 设置所述(Muennighoff 等,2024)。
4.5 可视化分析
图7:超联络及各种相关基线方法的连接矩阵可视化。注意力层带有奇数ID,并用绿色勾号标 记。
本节将探讨学习到的超连接权重,并展示前者输出如何影响后者。为此,我们将超连接转换 为跨层的密集连接。考虑k层中h0k 的输入隐藏向量,可以展开为对前一层输出的加权求和:
h0 =
k c T (h ), (20)
j=0
∑
k−1
kj
(0) j
0
j
其中 描述了层- ( )对层的输入贡献 的输入 。那么, 表示一个稠密连接权重 矩阵。特别地,设层-0为字嵌入, 为恒等映射,层- 为非嵌入层之前的隐藏状态, 即对最后隐藏向量的求和,即 。
ckj
(0) j T j k h0k C(0)
T0 L+1
h=
0
L+1 ∑j hjL
采用OLMo-1B-DHC×4模型进行可视化。我们将检查点取为500B令牌,转发随机验证文 本,以获得动态超连接权重。此外,我们还展示了一些相关基线方法的连接模式。最后,可 视化⻅图13。我们呈现以下发现,附录F中有更详细的讨论。

基线方法的连接模式。对于预范数基线,连接矩阵只是一个较低的三⻆形矩阵,去除了对⻆ 线元素,因为每个变压器层均等连接残差。在预范并行变压器模块(PTB)基线中,连接矩 阵呈锯⻮状,因为FFN层的输入不依赖于前一注意力层的输出。对于后范数基线,这种联系仅 在相邻层成立,因为每当残差经过后范数层时,底层的权重都会衰减。对于两跳残差基线 (⻢等,2024),注意力层的输出不加入残差,仅贡献于下一层FFN层,导致连接矩阵中出 现垂直条带图案。
A形连接模式。在超连接的连接矩阵中,可以观察到⻓期衰减模式,通常偏好层层,而依赖几 个相邻层输出。此外,底层(例如第0,2层)在大多数后续层中被频繁使用。因此,这两个图 案共同形成了A形连接图案。注意,⻓期衰减模式是后范数模式,而频繁访问的模式是前规范 模式,表明超连接引入了前范数和后范数架构的自由混合。
模型输出中去除了输入词嵌入。根据连接矩阵中层输入的第一列,输入字嵌入贡献了除最后 一层外大多数层的部分。最后这一层,负责产生模型输出,用于下一个令牌预测。在大多数 情况下,将输入嵌入的某个部分保留在模型输出中,对下一个符号预测有害,尤其是在使用 如 所OLMo-1B采用的绑定词嵌入时。类似结果也⻅于之前的研究(⻢等,2023)。
观察到并联变压器模块。 如§ 3.2所述,并行变压器模块(并行执行注意力和FFN)是超连接 的特例。实际上,类PTB的模式(可通过局部锯⻮状模式识别)令人惊讶地被超连接学习。 例如,第11层对第12层输入的贡献极小(参⻅超连接连接矩阵中的第12行)。这表明第11层 和第12层可以并行运行,从而形成一个PTB模块。
注意力层通常有较少的⻓期联系。 观察到,最底层的注意力层几乎没有⻓期贡献,这一趋势 一直持续到第17层。通过检查超隐藏层的连接矩阵(⻅附录中的图13),可以明显发现FFN 层的输出幅度明显大于注意力层。这种模式类似于两跳残留连接设计,注意输出会贡献给下 一层FFN的输入,但不加入主残余路径。
5 相关工作
Transformers(Vaswani 等,2017)彻底改变了多个领域,尤其是自然语言处理和计算机 视觉。它们高度依赖残余连接来促进深度模型的训练。我们的超连接方法可以替代残余连 接,提供稳定的训练和自然语言处理和计算机视觉的持续改进。
梯度消失和表示坍缩的问题(Bengio 等,1994;Glorot 和 Bengio,2010年;Liu 等,
2020)的研究得到了广泛研究。规范化技术的组合(Ioffe 和 Szegedy,2015;Ba 等, 2016)和残余联系(He 等,2016),如前常态和后常态,实际上反映了解决这两个问题的 不同重点。然而,尽管取得了这些进步,梯度消失与深度网络中代表性崩溃之间的根本权衡 仍是一个关键挑战。基于这些发现,我们的工作引入了一种新方法,使神经网络能够自主学 习连接的最优强度,有望提升梯度稳定性和表示质量。
6 结论
总之,我们引入了超连接作为变压器中残差连接的有效替代方案。我们的分析显示,超连接 不仅克服了残差的局限,还能实现网络架构中的动态调整。实验结果证实了它们在多种任务 中的有希望的益处,包括大型语言模型的预训练、图像生成和图像分类。

这项研究由字节跳动公司进行。我们感谢郑耀伟、张宇宇、李云辉、李向、易百仁、陆振怡和 韩新天的建议和协助。
REFERENCES
Jimmy Lei Ba, Jamie Ryan Kiros, and Geoffrey E Hinton. Layer normalization. In arXiv preprint arXiv:1607.06450, 2016.
Cenk Baykal, Dylan Cutler, Nishanth Dikkala, Nikhil Ghosh, Rina Panigrahy, and Xin Wang. Alternating updates for efficient transformers. Advances in Neural Information Processing Systems, 36, 2024.
Yoshua Bengio, Patrice Simard, and Paolo Frasconi. Learning long-term dependencies with gradient descent is difficult. IEEE transactions on neural networks, 5(2), 1994. Yonatan Bisk, Rowan Zellers, Jianfeng Gao, Yejin Choi, et al. Pixa: Reasoning about physical commonsense in natural language. In Proceedings of the AAAI conference on artificial intelligence, volume 34, 2020.
Christopher Clark, Kenton Lee, Ming-Wei Chang, Tom Kwiatkowski, Michael Collins, and Kristina Toutanova. Boolq: Exploring the surprising difficulty of natural yes/no questions. arXiv preprint arXiv:1905.10044, 2019.
Peter Clark, Isaac Cowhey, Oren Etzioni, Tushar Khot, Ashish Sabharwal, Carissa Schoenick, and Oyvind Tafjord. Think you have solved question answering? try arc, the ai2 reasoning challenge. arXiv:1803.05457v1, 2018.
Ido Dagan, Oren Glickman, and Bernardo Magnini. The pascal recognising textual entailment challenge. In Machine learning challenges workshop. Springer, 2005. Marie-Catherine De Marneffe, Mandy Simons, and Judith Tonhauser. The commitmentbank: Investigating projection in naturally occurring discourse. In proceedings of Sinn und Bedeutung, volume 23, 2019.
Jia Deng, Wei Dong, Richard Socher, Li-Jia Li, Kai Li, and Li Fei-Fei. Imagenet: A large-scale hierarchical image database. In 2009 IEEE conference on computer vision and pattern recognition. Ieee, 2009.
Bill Dolan and Chris Brockett. Automatically constructing a corpus of sentential paraphrases. In Third international workshop on paraphrasing (IWP2005), 2005.
Alexey Dosovitskiy, Lucas Beyer, Alexander Kolesnikov, Dirk Weissenborn, Xiaohua Zhai, Thomas Unterthiner, Mostafa Dehghani, Matthias Minderer, Georg Heigold, Sylvain Gelly, et al. An image is worth 16x16 words: Transformers for image recognition at scale. arXiv preprint arXiv:2010.11929, 2020.
Xavier Glorot and Yoshua Bengio. Understanding the difficulty of training deep feedforward neural networks. In Proceedings of the thirteenth international conference on artificial intelligence and statistics. JMLR Workshop and Conference Proceedings, 2010.
Dirk Groeneveld, Iz Beltagy, Pete Walsh, Akshita Bhagia, Rodney Kinney, Oyvind Tafjord, Ananya Harsh Jha, Hamish Ivison, Ian Magnusson, Yizhong Wang, et al. Olmo: Accelerating the science of language models. arXiv preprint arXiv:2402.00838, 2024. Kaiming He, Xiangyu Zhang, Shaoqing Ren, and Jian Sun. Deep residual learning for image recognition. In Proceedings of the IEEE conference on computer vision and pattern recognition, 2016.

Dan Hendrycks, Collin Burns, Steven Basart, Andy Zou, Mantas Mazeika, Dawn Song, and Jacob Steinhardt. Measuring massive multitask language understanding.
Proceedings of the International Conference on Learning Representations (ICLR), 2021. Sergey Ioffe and Christian Szegedy. Batch normalization: Accelerating deep network training by reducing internal covariate shift. In International conference on machine learning. PMLR, 2015. Matt Gardner, Johannes Welbl, Nelson F. Liu. Crowdsourcing multiple choice science questions, 2017. Vijay Korthikanti, Jared Casper, Sangkug Lym, Lawrence McAfee, Michael Andersch, Mohammad Shoeybi, and Bryan Catanzaro. Reduc-
ing activation recomputation in large transformer models. arXiv preprint arXiv:2205.05198, 2022.
Liuyan Liu, Xiaodong Liu, Jianfeng Gao, Weizhu Chen, and Jiawei Han. Understanding the difficulty of training transformers. arXiv preprint arXiv:2004.08249, 2020. Haoyan Ma, Xiang Li, Xia Yuan, and Chunxia Zhao. Denseformer: A dense transformer framework for person re-identification. IET Computer Vision, 17(5), 2023.
Xuezhe Ma, Xiaomeng Yang, Wenhan Xiong, Beidi Chen, Lili Yu, Hao Zhang, Jonathan May, Luke Zettlemoyer, Omer Levy, and Chunting Zhou. Megalodon: Efficient llm pretraining and inference with unlimited context length. arXiv preprint arXiv:2404.08801, 2024.
Todor Mihaylov, Peter Clark, Tushar Khot, and Ashish Sabharwal. Can a suit of armor conduct electricity? a new dataset for open book question answering. In EMNLP, 2018. Niklas Muennighoff, Luca Soldaini, Dirk Groeneveld, Kyle Lo, Jacob Morrison, Sewon Min, Weijia Shi, Pete Walsh, Oyvind Tafjord, Nathan Lambert, Yuling Gu, Shane Arora, Akshita Bhagia, Dustin Schwenk, David Wadden, Alexander Wettig, Binyuan Hui, Tim Dettmers, Douwe Kiela, Ali Farhadi, Noah A. Smith, Pang Wei Koh, Amanpreet Singh, an-
d Hannaneh Hajishirzi. Olmoe: Open mixture-of-experts language models, 2024. URL https://arxiv.org/abs/2409.02060. William Peebles and Saining Xie. Scalable diffusion models with transformers. arXiv preprint arXiv:2212.09748, 2022.
Melissa Roemmele, Cosmin Adrian Bejan, and Andrew S Gordon. Choice of plausible alternatives: An evaluation of commonsense causal reasoning. In 2011 AAAI spring symposium series, 2011.
Keisuke Sakaguchi, Ronan Le Bras, Chandra Bhagavatula, and Yejin Choi. Winogrande: An adversarial winograd schema challenge at scale. Communications of the ACM, 64(9), 2021.
Maaarten Sap, Hannah Rashkin, Derek Chen, Ronan LeBras, and Yejin Choi. Socialiq: Commonsense reasoning about social interactions. arXiv preprint arXiv:1904.09728, 2019. N Shazeer, A Mirhoseini, K Maziarz, A Davis, Q Le, G Hinton, and J Dean. The sparsely-gated mixture-of-experts layer. Outrageously large neural networks, 2017. Richard Socher, Alex Perelygin, Jean Wu, Jason Chuang, Christopher D Manning, Andrew Y Ng, and Christopher Potts. Recursive deep models for semantic compositionality over a-
 sentiment treebank. In Proceedings of the 2013 conference on empirical methods in natural language processing, 2013.
Luca Soldaini, Rodney Kinney, Akshita Bhagia, Dustin Schwenk, David Atkinson, Russell Authur, Ben Bogin, Khyathi Chandu, Jennifer Dumas, Yanai Elazar, et al. Dolma: An open corpus of three trillion tokens for language model pretraining research. arXiv preprint arXiv:2402.00159, 2024.
Alon Talmor, Jonathan Herzig, Nicholas Lourie, and Jonathan Berant. Commonsenseqa: A question answering challenge targeting commonsense knowledge. arXiv preprint arXiv:1811.00937, 2018.
Ashish Vaswani, Noam Shazeer, Niki Parmar, Jakob Uszkoreit, Llion Jones, Aidan N Gomez, Łukasz Kaiser, and Illia Polosukhin. Attention is all you need. In Advances in neural information processing systems, 2017.

Ben Wang. Mesh-Transformer-JAX: Model-Parallel Implementation of Transformer Language Model with JAX. https://github.com/kingoflolz/mesh-transformer-jax, May 2021.
Mitchell Wortsman, Peter J Liu, Lechao Xiao, Katie Everett, Alex Alemi, Ben Adlam, John D Co-Reyes, Izzeddin Gur, Abhishek Kumar, Roman Novak, et al. Small-scale proxies for large-scale transformer training instabilities. arXiv preprint arXiv:2309.14322, 2023.
Shufang Xie, Huishuai Zhang, Junliang Guo, Xu Tan, Jiang Bian, Hany Hassan Awadalla, Arul Menezes, Tao Qin, and Rui Yan. Residual: Transformer with dual residual connections. arXiv preprint arXiv:2304.14802, 2023.
Rowan Zellers, Ari Holtzman, Yonatan Bisk, Ali Farhadi, and Yejin Choi. Hellaswag: Can a machine really finish your sentence? arXiv preprint arXiv:1905.07830, 2019.
Biao Zhang and Rico Sennrich. Root mean square layer normalization. Advances in Neural Information Processing Systems, 32, 2019.

具有超连接的变压器
图8:超连接变压器和残差连接变压器的比较。

B 参数、计算与内存占用分析
静态超连接。 所有可学习参数都包含在方程1中的超连接矩阵 中。一个 中的参数数由 以下方式给出:
HC HC
∣θ ∣ =
SHC ∣θ ∣ +
B ∣θ ∣ =
A n + n ⋅ (n + 1) = n ⋅ (n + 2), (21)
其中 是膨胀率, 是 中 的参数数, 是 中的参数数。每层包含两个超连接模块 (一个用于自关注,一个用于前馈网络)。因此,额外参数的数量为:
n ∣θB∣ SHC B ∣θA∣ A
P=
extra ∣θ ∣ ×
SHC 2 × L, (22)
其中 L 表示层数。例如,在 OLMo-1B-SHC × 4中, P = 。
extra 4 × (4 + 2) × 2 × 16 = 768
动态超连接。DHC的参数定义在方程中。10、11、12和13,参数数为:
∣θ ∣ =
DHC ∣θ ∣ +
norm ∣sβ∣ + ∣θ ∣ +
Wβ ∣θ ∣ +
B ∣s ∣ +
α ∣θ ∣ +
Wm ∣θ ∣ +
Am ∣θ ∣ +
Ws ∣θ ∣ (23)
As
= ∣θ ∣ +
norm 1 + d +
model n + 1 + d +
model n + n × n (24)
= ∣θ ∣ +
norm d ×
model (n + 2) + n × (n + 2) + 2, (25)
其中 是变换器中隐藏态的维数, 取决于归一化模的类型。在 模型中,没 有归一化参数,因此 。在 中, 。与静态超连接类似,额外 参数数量为:
dmodel ∣θ ∣
norm OLMo ∣θ ∣ =
norm 0 OLMoE ∣θ ∣ =
norm dmodel
P=
extra ∣θ ∣ ×
DHC 2 × L, (26)
例如,对于 , 。
OLMo-1B-DHC × 4 P =
extra (0 + 2048 × (4 + 2) + 4 × (4 + 2) + 2) × 2 × 16 = 394, 048
实验中使用的 和 参数数量详⻅表7,对应的FLOP比较⻅表8。无论使用 还是 ,新增的参数和计算开销都很小,可以忽略不计。
DHC SHC SHC DHC
表7:参数数量比较。
计算分析。 和 的主要计算成本出现在算法1的第5行,其中复杂度为 。FFN的计算成本为 ,注意力投射部分的计算成本为 。由于 , 的计算成本相较于FFN和注意力投射部分的成本,可以忽略不计。这里, 是FFN 的内维。详细的计算成本统计数据⻅表8。
SHC DHC O(d ×
model
n × (n + 1)) O(2 × d ×
model dffn) O(4 ×
d×
model d )
model O(d ×
model n × (n + 1)) ≪ O(4 × d ×
model d ) <
model O(2 × d ×
model
dffn) HC dffn

表8:前传中每个代币的翻牌数。
记忆足迹。 引入HC会在训练中略微增加激活记忆的使用。对于具有 层的变换器模型,模 型维度为 ,批次大小 ,序列⻓度 ,注意力中心数 ,激活记忆计算为 ,详⻅Korthikanti等人(2022)。将扩展率为 的HC会增加额 外的内存开销 。对于 ,这对标准变换器的总内存使用贡献不到15%。值得 注意的是,内存消耗主要由权重参数驱动,而在 HC 模式下权重参数仅略有增加。此外,鉴 于HC计算成本低,HC生成的隐藏状态可以在前向传递后丢弃,并在反向传播时重新计算, 以进一步优化内存使用。通过这种方法,额外的内存需求被降低到 。在推理过程 中,激活的内存使用主要由键值缓存决定,而键值缓存不受HC带来的额外激活影响。此外, 前一层的隐藏状态可以在下一层计算开始时立即释放,显著降低了内存需求。实际内存占用 在8块GPU上进行了实证测量,如表9所示。
L
dmodel b s a
sbd L(34 +
model 5as/d )
model n
2nsbd L
model n = 2
nsbdmodel
表9:8块GPU的内存占用测量结果。

C MOE 1B/7B 模型实验
图9:V3验证集中的损失曲线及OLMoE-1B7B和OLMoE-1B7B-DHCx4模型下游任务的准确 率曲线。

D 7B模型实验
图10:V3验证集中的损失曲线及OLMo-7B和OLMo-7B-DHCx4模型下游任务的准确率曲 线。

电子视觉实验
数据集。我们使用 ILSVRC-2012 ImageNet 数据集(邓等,2009),包含 1000 个类别和 130 万张图像(⻅下文 ImageNet)进行图像生成和分类。
E.1 图像生成
为了探究图像生成中超连接的泛化性,我们的实验使用DiT框架(Peebles & Xie, 2022)进 行,训练模型覆盖1400个时代。为了节省实验成本,我们采用FP16精度,引入闪注意加速训 练,并引入QK-范数(Wortsman等,2023)以稳定训练。
表10:在ImageNet 256×256上进行类条件图像生成基准测试,cfg=1.50。NP、P和R分别 代表数值精度(Numerical Precision)、精度(Precision)和回忆(Recall)。
我们的实验结果表明,包含超连接的DiT模型在性能指标上与参数增加50%的DiT模型相当。 这一发现强调了超连接在提升模型性能且不增加模型规模方面的效率和有效性。
E.2 图像分类
在图像分类实验中,我们以 分辨率训练ViT/16-Base和ViT/16-Large模型,持续
300个时代,遵循(Dosovitskiy等,2020)所采用的实验设置。为了加快训练过程,我们使 用 bfloat16 数值精度。训练配置详⻅表12。在此配置中,我们用静态和动态超连接替代剩余 连接,分别称为SHC和DHC,扩展率为 。前一准确率结果⻅表11,ViT/16-Large和 ViT/16-Large与DHC×2的训练损失曲线⻅图11。
224 × 224
n=2
对于基础型号(85M),我们重新实现的ViT/16在 图像上实现了76.38%的准确 率。SHC和DHC分别提升表现至77.60%和77.26%,分别为 1.22% 和 0.88%的相对增⻓。 对于大型模型(307M参数),ViT/16的准确率为77.25%。SHC和DHC配置分别将精度提升 至78.38%和79.94%。这对应于相对提升分别为 1.13 %和 2.69%,DHC表现最佳。这些结 果表明,超连接(SHC和DHC)显著提高了准确性,尤其是在大型模型尺度下。
224 × 224
表11:ImageNet上的准确率。 ViT*/16 指的是(Dosovitskiy等,2020)报告的结果,而 ViT/16 则表示我们重新实现的基线。SHC和DHC分别表示残留连接被静态和动态超连接所替 代。

图11:ViT/16-Large和ViT/16-Large-DHC 2的训练损失曲线,使用衰减率0.999的指数移 动平均(EMA)进行平滑处理。随着训练的推进,超连接带来的收益会减少,这很可能是因 为同一数据集跨越多个时代,导致超连接所提供的额外容量收益递减。
×
E.3 DHC的可视化
我们从ImageNet数据集中随机选取三个类别,并从验证集中抽样对应的样本。这些样本被输 入ViT-Base/16-DHC 2模型,以计算最终层DHC的动态连接权重。如图12所示,我们可视 化了这些权重的分布。我们观察到,类内β的分布高度集中,表明同一类别内的样本往往具有 相似的β值。相比之下,α的分布较为稀疏,但不同类别分布之间的差异更为明显,如 所 示。
×
α2,0
表12:ViT的超参数训练。

图12:ViT-碱基/16-DHC×2模型中最后DHC权重分布。
更多可视化与分析
展开的超连接。 我们首先介绍如何确定超连接的连接矩阵 。为了简化写作,层输出 简称为 。该
C (0)
T (h )
k 0k T k

图13: 展开连接矩阵的可视化。 矩阵从左到右分别是 ( 的连接)、 ( 的连接)表示 。注意力层带有奇数ID,并用绿色勾号标记。
C(0) {h0 }
(j)
j=0
L+1 C(i)
{hi }
(j)
j=0
L+1 i ∈ {1, 2, 3, 4}
方程2中超联结的递归形式展开如下:
h0
k = H A = (T B + H A )A
k⊤
m
k k−1 k−1 k−1⊤
r
k−1
m
k
= T B (A A ... A )A
j=0
∑
k−1 jj
r
j+1
r
j+2
r
k−1
m
k
= TB A A.
j=0
∑
k−1 j j(
t=j+1
∏
k−1
r
t) m
k
(27)
因此,我们得到连接矩阵 。类似地,隐藏于第 层的第 超连接矩
阵 可以通过将方程27中的最后一个 替换为 来计算,即,
c=
kj
(0) B A A
j (∏t=j+1
k−1
tr) km k i
C(i) Akm Ark
H=
rk A H =
r
k k A BT
j=0
∑
k−1
(
t=j+1
∏
k
r
t ) j j (28)
c=
kj
(i) A B .
((
t=j+1
∏
k
r
t) j)
ij
T
(29)
对超隐藏的可视化。我们在图13中可视化了超隐藏连接矩阵,以揭示超连接如何维持中间层 输出。首先,这四个超级隐藏者不同,且表现出完全不同的连接模式。接着,我们可以看到 FFN层的输出在超隐藏层中被⻓期保留,而注意力层保留得更少。还观察到⻓期连接通常存 储在两个超隐藏连接中,其中连接在一个超隐藏中为正,而在另一个连接中为负,例如 中 的第0列和第2列, 。通过这种策略,这些连接可以在解嵌入层之前的求和池作中轻松消 除。
C(1)
C(3)
SHC与DHC共享类似的连接模式。 我们在图13b中展示了 模型的连接矩 阵。与DHC相比,如图13a所示,SHC共享完全相同的连接模式。此外,我们在SHC中观察 到更多类似PTB的块,例如13至18层。注意,SHC的连接关系与令牌无关,此类类PTB块可 以物理重组以便并行计算。
OLMo-1B-SHC × 4

图14:OLMo-1B-DHC 、OLMo-1B-DHC 2 和 OLMo-1B-DHC 4 模型的展开连接矩阵 比较。
×× ×
HC 1 的失败之处。在我们的实验中,观察到OLMo-1B 1模型的表现低于基线。其连接矩 阵在图14中可视化,展示了其失效方式。最重要的是,我们观察到第17层被浪费了,他与后 续层完全没有关联。其次,与HC 2和HC 4型号相比,A形图案不存在。注意,HC 1 的数 学表述并不支持 A 的模式,即必须同时削弱或强化与前一层的连接。因此,从早期层到最终 层的连接缺失可能出现梯度消失现象,类似后规范⻛格变压器,导致性能退化。
××
×× ×

G:残差连接不可训练超连接矩阵的推导
G.1 预范数残差连接
在预范数残差连接中,输入层先经过归一化,然后再通过该层。然后,该层的输出会被加入到 原始输入中。这可以表示为:
h^ = T (Norm(h)) + h. (30)
通过将归一化算符 T := T ∘ Norm,我们可以将整个过程表示为:
h^ = T (h) + h. (31)
为了用超联络表达这一点,预范数矩阵可以结构如下:
HC =
PreNorm (32)
(0
1
1
1)
给定超隐矩阵 H = h⊤,我们证明的输出 HCPreNorm = 。
H^ h^⊤
证据。
(33)
H^ = HC(T , H)
= B T (H A ) + A H
⊤ ⊤ m⊤
r
⊤
= T (h) + h
⊤⊤
=.
h^ ⊤
□
G.2 后范数残差连接
在后范数残差连接中,输入层先通过该层,然后输出在加入原始输入后进行归一化。在矩阵形 式中,这可以表示为:
h′ = T (h) (34)
输入与归一化输出的总和为:
h^ = Norm(h + h ) (35)
′
我们认为范数即层范数(Zhang 和 Sennrich,2019)。RMSNorm 的分析过程几乎相同。 事实上,仿射变换可以被纳入下一层,而均值减法运算可以积分到当前层。
T = C ∘ T ∘ A, (36)
其中 A 是仿射变换, C 是重新置中算符。因此, T 的输出均值为 0。
为了用膨胀率 n = 1的超联络表达这一点,我们需要一个超联络矩阵 HC 来封装该作:
HC =
PostNorm =
0
1
1
σ +σ +2σ
h
2
h2′
h2h′
σ +σ +2σ
h
2
h2′
h2h′ . (37)
(0
Am
B Ar
)

与之前的证明类似,我们证明 HCPostNorm 的输出等价于后范数残差连接输出的转置:
=
H^ . (38)
h^ τ
证据。 注意
σ=
h+h′ . (39)
σ + σ + 2σ
h
2
2h′ hh′
基于此,我们可以推导出后范数:
(40)
h^ = Norm(h + h)
′
= σh+h′
h +h−μ
′ h′+h
= (h + h)
σh′+h
1′
= (h + h)
σ + σ + 2σ
2h 2h′ hh′
1′
对于超连接方面,我们有:
(41)
H^ = B h + H
τ ′τ ′
=B h +A H
τ ′τ r
=B h +A h
τ ′τ r τ
= h + h= .
σ + σ + 2σ
2h 2h′ hh′
1 ′τ
σ + σ + 2σ
2h 2h′ hh′
1 τ h^τ
□

H 顺序并行对偶性
H.1 顺序排列的超连接矩阵
在本节中,我们演示了以下超连接矩阵将生成 顺序排列的相同网络,且它们之间有残差连 接:
n
HC = , (42)
(01×1
e1
11×n
en×n
)
其中en×n表示n × n恒等矩阵,ei ∈ Rn×1表示en×n的第i列,11×n表示一个1 × n的1矩阵。
我们将用数学归纳法证明 和 , , ,其中 是层数。
hik = hik h =
i
k+1 T (h ) +
k ik hik ∀i, j ∈ {0, 1, ... , n} ∀k ∈ {0, 1, ... , L} L
证据。基础情况
对于 ,我们有初始条件 , ,定义 。
k = 0 hi0 = hj0 ∀i, j ∈ {0, 1, ... , n} H0 = (h h ... h ) ∈
0 0 0⊤
Rn×d
归纳假说
假设对于某个 ,我们有 和 , 。
k ∈ {1, ... , L − 1} hik = hjk hik = T (h ) +
ki
k−1 hi
k−1 ∀i, j ∈
{0, 1, ... , n}
归纳步
我们有
H=
k+1 HC(T , H ) (43)
kk
= B (h ) +
⊤ 0
k ⊤ H (44)
k
=B A H +
⊤ m
⊤ k A H (45)
r
⊤k
= 1 T (e H ) +
n×1 k
1
⊤ k e H (46)
n×n k
= (T (h ) T (h ) ... T (h )) +
k 1
kk
1
kk
1
k ⊤ (h h ... h ) (47)
1
k 2
k n
k⊤
= (T (h ) +
k 1
k h T (h ) +
1
kk
1
k h ... T (h ) +
2
kk
1
k h ) (48)
n
k⊤
= (h h ... h ) (49)
1
k+1
2
k+1
n
k+1 ⊤
由于 hik = hjk, ∀i, j ∈ {0, 1, ... , n},则得出 T (h ) + 。因此,我们有
k 1k hik = T (h ) +
k 1k hjk
h=
i
k+1 h (50)
j
k+1
由于 hik = hjk, ∀i, j ∈ {0, 1, ... , n},可得 h1k = hik, ∀i ∈ {0, 1, ... , n}。因此,我们有
h=
i
k+1 T (h ) +
k 1
k h (51)
i
k
= T (h ) +
k 1
k h (52)
i
k
□

H.2 并联超连接矩阵
在本节中,我们演示了以下超连接矩阵将生成一个网络,其中每个相邻 层并行排列,每层 包含残差连接。我们定义了一个平行排列网络,使得 相邻的层构成一个群,群中的层是平 行的,群是顺序排列的。第 组的输出为:
n
n k
h=
k+1 (T (h ) +
i=1
∑
n
k×n+i k h ). (53)
k
可以证明这种排列可以用以下超连接矩阵来描述。
首先,对于kk − 1 ≡ 0 (mod n):
HC =
{k∣k−1≡0 (mod n)} (54)
(01×1
1n×1
e1⊤
1n×n
)
其中 矩阵可以分解为两个作:1)将前一组的所有输出加法,并将其作为当前层的输入和 后续层的剩余;2)将输出和输入的保存数据汇总到第一个隐藏向量槽。
HC
接下来, k 的 k − 1 ≡ i (mod n) 和 i = 0:
HC =
{k∣k−1≡i (mod n),i=0} . (55)
(01×1
ei
ei⊤
en×n
)
其中 矩阵选择第 个隐藏向量作为当前层的输入,并将输出和输入相加,保存到第 个隐 藏向量槽。
HC i i
这意味着:
h=
k+1 HC (T , (56)
(k+1)×n (k+1)×n
HC (T , (57)
(k+1)×n−1 (k+1)×n−1
... (58)
HC (T , h ))) (59)
k×n+1 k×n+1 k
这也可以用数学归纳法证明;然而,通过绘画结论非常明显,证明过程非常繁琐。因此,我们 这里不重复类似的证明。

I 超连接伪代码
算法1 带超连接的网络
需求: 初始隐藏向量 h0 ∈ Rd
需求: 膨胀率 n
确保: 最终输出 y
1: 初始化:
2: H0 ← (h h ... h ) ∈
0 0 0 ⊤ Rn×d
3:k = 1要做的L
▷ 每一层
4: H ← Hk−1
5: (h H ) ←
0 ′ WCk⊤H
▷ 宽度连接
6: h′0 ← T (h )
k0
▷ 层计算
7: ←
H^ B h +
k⊤ ′0 H′
▷ 深度连接
8: Hk ← H^
9: 结束
10: 最终输出:
11: hL ← sum rows of HL
12: hL ← Normalization Layer(hL)
13: y ← Output Layer(hL)
14:回归y

J PYTORCH 超连接实现
算法2 以类似PyTorch⻛格的超连接伪代码。
# h:超隐矩阵 (BxLxNxD)
类 HyperConnection(nn.模块): def __init__(self, dim, rate, layer_id, dynamic, device=None): super(HyperConnection, self).__init__() self.rate = rate self.layer_id = layer_id self.dynamic = dynamic
self.static_beta = nn。Parameter(torch.ones((rate, ), device=device)init_a
= torch.zeros((rate, 1), device=device) init_alpha0[layer_id% rate, 0] = 1。 self.static_alpha = nn。Parameter(torch.cat([init_alpha0, torch.eye((rate)
self.dynamic: self.dynamic_alpha_fn = nn。Parameter(torch.zeros((dim, rate+1), devic = nn.Parameter(torch.ones(1, device=device) * 0.01) self.dynamic_beta_fn = nn.Parameter(torch.zeros((dim, ), device=device = nn.Parameter(torch.ones(1, device=device) * 0.01) self.layer_norm = LayerNorm(dim)
def width_connection(self, h): # 如果 self 获取 alpha 和 beta 。dynamic: norm_h = self.layer_norm(h)
if self.dynamic: wc_weight = norm_h @ self.dynamic_alpha_fn wc_weight = F.tanh(wc_weight) dynamic_alpha = wc_weight * self.dynamic_alpha_scale alpha = dynamic_alpha + self.static_alpha[无,无,...] else: alpha = self.static_alpha[无,无,...]
如果 self.dynamic: dc_weight = norm_h @ self.dynamic_beta_fn dc_weight = F.tanh(dc_weight) dynamic_beta = dc_weight * self.dynamic_beta_scale beta = dynamic_beta + self.static_beta[无,无,...] else: beta = self.static_beta[无,无,...]
# 宽度连接
mix_h = alpha.transpose(-1, -2) @ h
返回 mix_h, beta
def depth_connection(self, mix_h, h_o, beta): h = torch.einsum(“blh, bln->Blnh”, h_o, beta) + mix_h[..., 1:, :] 返回 h

算法3 具有PyTorch⻛格超连接的变换器伪代码。
# h:超隐矩阵(BxLxNxD) # atten_hyper_connection,ffhn_hyper_connection:超连接模块 # attn_norm,ffhn_norm:归一化模块
# 注意块
块mix_h,beta = atten_hyper_connection.width_connection(h) h = attn_norm(mix_h[..., 0, :]) h = self_attention(h) h = atten_hyper_connection.depth_connection(mix_h, dropout(h), beta)
# FFN 块 mix_h, beta = ffhn_hyper_connection.width_connection(h) h = ffhn_norm(mix_h[..., 0, :])h = ffhn(h) h = ffhn_hyper_connection.depth_connection(mix_h, dropout(h), beta)

K 验证集和下游任务
表13:OLMo的默认配置通过多种指标进行评估。V2和V3验证集采用了复杂度(PPL)和损 耗,而下游基准测试则采用零样本测试。然而,由于灰色基准指标的表现不稳定,我们将其排 除在分析之外。

表14:OLMoE的下游基准测试。
L 1B 模型实验
图15:相关工作训练损失曲线,使用指数移动平均(EMA)平滑,衰减率为0.99。

图16:使用指数移动平均(EMA)平滑化的DHC损失曲线,其 超过5000亿个代币,衰 减率为0.99。
tanh
图17: 使用指数移动平均(EMA)平滑化,使用指数移动平均(EMA)平滑,衰减率 为0.99,训练DHC的损失曲线。
tanh

图18:训练损耗曲线与并行变压器块(PTB)的比较,使用指数移动平均(EMA)平滑,衰 减率为0.99。
表15:1B模型下游基准测试结果。

表16:IB模型V2验证集的损失。

表17:1B模型V2验证集的困惑点。

表18:IB模型中V3验证集的损失。

表19:1B模型V3验证集的困惑点。

---

## Processing Information

- **Processing Library:** Zotero PDFWorker
- **Processing Date:** 2026-02-10T18:16:47.878Z
- **Text Length:** 27438 characters
- **Success:** Text extraction completed
- **PDF Library Used:** Zotero PDFWorker
- **Pages Processed:** unknown of unknown
