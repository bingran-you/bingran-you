# PDF Document: [Translated - ZH] mHC Manifold-Constrained Hyper-Connections.pdf

**File Path:** [Translated - ZH] mHC Manifold-Constrained Hyper-Connections.pdf

**Processed Date:** 2026-02-10T18:15:24.708Z

**File Size:** 8306.25 KB

**Total Pages:** unknown

**Extracted Pages:** unknown

**PDF Library:** Zotero PDFWorker

**Attachment Item ID:** 10084

**Title:** mHC: Manifold-Constrained Hyper-Connections

**Collection:** Agents

---

## Extracted Text Content

mHC:流形约束超连接
Zhenda Xie*, Yixuan Wei*, Huanqi Cao*, Chenggang Zhao, Chengqi Deng, Jiashi Li, Damai Dai, Huazuo Gao, Jiang Chang, Kui Yu, Liang Zhao, Shangyan Zhou, Zhean Xu, Zhengyan Zhang, Wangding Zeng, Shengding Hu, Yuqing Wang, Jingyang Yuan, Lean Wang, Wenfeng Liang
DeepSeek-AI
摘要
最近,以超连接(HC)为代表的研究通过扩展残差流宽度和多样化连接模式,扩展了过去十年建立的普遍 残差连接范式。虽然带来了显著的性能提升,但这种多样化从根本上破坏了残余连接固有的身份映射特性, 导致严重的训练不稳定性和扩展性受限,同时还会带来显著的内存访问开销。为应对这些挑战,我们提出了 流形约束超连接(mHC)这一通用框架,将HC剩余连接空间投影到特定流形上,以恢复身份映射特性,同 时结合严格的基础设施优化以确保效率。实证实验表明,mHC在大规模训练中非常有效,能够带来切实的 性能提升和更优的可扩展性。我们预计,作为HC的灵活且实用的扩展,mHC将有助于更深入理解拓扑架构 设计,并为基础模型的发展提出有前景的方向。
图1 |残差连接范式示意图。本图比较了(a)标准残差连接,(b)超连接(HC)和(c)我们提出的流形 约束超连接(mHC)的结构设计。与无约束HC不同,mHC侧重于通过将矩阵投影到受限流形上来优化残 余连接空间,以确保稳定性。
*核心贡献者。†通讯作者: xie.zhenda@deepseek.com

1 介绍 3
2 相关作品 4
2.1 微观设计 4
2.2 宏观设计 5
3 预赛 5
3.1 数值不稳定性 6
3.2 系统开销 7
4 方法 8
4.1 流形约束超连接 8
4.2 参数化与流形投影 9
4.3 高效基础设施设计 9
4.3.1 内核融合 9
4.3.2 重新计算 10
4.3.3 DualPipe中的重叠通信 11
5 实验 12
5.1 实验装置 12
5.2 主要结果 12
5.3 缩放实验 13
5.4 稳定性分析 14
6 结论与展望 15
一个 附录 19
答:1 详细模型规格和超参数。 19

自ResNet的引入以来,深度神经网络架构经历了快速演进(He 等,2016a)。如图1(a)所示,单层结构 可表述如下:
x=
l+1 xl + F (x , W ), (1)
ll
其中 和 分别表示 层的 维输入和输出, 表示剩余函数。尽管残差函数 在过去十年中演变为卷积、 注意力机制和前馈网络等多种作,残差连接的范式依然保持其原始形式。随着Transformer架构的发展 (Vaswani 等,2017),这一范式目前已成为大型语言模型(LLMs)中基本设计元素(Brown 等, 2020;Liu 等,2024b;Touvron 等,2023)。
xl xl+1 l C F F
这种成功主要归功于残留连接的简洁形式。更重要的是,早期研究(He 等,2016b)发现残差连接的身份 映射性质在大规模训练中保持稳定和效率。通过递归地将残差连接延伸到多层,方程(1)得到:
xL = xl + F (x , W ), (2)
i=l
∑
L−1
ii
其中 和 分别对应较深层和较浅层。单位映射一词指的是分量 本身,强调浅层信号直接映射到更深层 且不加任何修改。
L l xl
最近,以超连接(HC)(Zhu 等,2024)为代表的研究为残差连接引入了新维度,并实证展示了其性能 潜力。HC的单层架构如图1(b)所示。通过扩展残差流的宽度和提升连接复杂度,HC显著提高了拓扑复 杂度,同时不改变单个单元关于FLOP的计算开销。形式上,HC中的单层传播定义为:
x=
l+1 H x +
l
res l H F (H x , W ), (3)
l
postT
l
pre
ll
其中 和 分别表示 层的输入和输出。与方程(1)中的表述不同, 和 的特征维数从 扩展 到 ,其中 是膨胀率。 项表示一种可学习的映射,将残差流中的特征混合在一起。作为 一种可学习的映射, 将 -dim 流的特征聚合到 -dim 层输入中,反过来 将层 输出映射回流。
xl xl+1 l xl xl+1 C
n×C n H ∈
l
res Rn×n
H∈
l
pre R1×n nC C H ∈
l
post R1×n
然而,随着训练规模的增加,HC也带来了潜在的不稳定性⻛险。主要担忧在于,当架构跨越多层时,HC的 无约束特性会损害身份映射特性。在包含多个并行流的架构中,理想恒等映射作为守恒机制。它确保在前向 和反向传播过程中,溪流间的平均信号强度保持不变。通过方程(3)递归地将HC扩展到多层,得到:
xL = H x +
(
i=l
∏
L−1
L−i
res ) l H H F (H x , W ), (4)
i=l
∑
L−1
(
j=1
∏
L−1−i
L−j
res ) i
postT
i
pre i i

其中 和 分别代表较深层和较浅层。与方程(2)不同,HC中的复合映射 未能保持特征的全
局均值。这种差异导致信号无边界的放大或衰减,导致大规模训练时的不稳定性。另一个考虑是,虽然HC 保留了FLOP的计算效率,但原始设计中未解决扩展残余流内存访问成本的硬件效率。这些因素共同限制了 HC的实际可扩展性,阻碍其在大规模培训中的应用。
L l ∏i=1 H
L−l i−1
res
为应对这些挑战,我们提出了流 形约束超连接(mHC),如图1(c)所示,这是一个通用框架,将HC的 剩余连接空间投影到特定流形上,以恢复恒等映射性质,同时结合严格的基础设施优化以确保效率。具体来 说,mHC利用Sinkhorn-Knopp算法(Sinkhorn和Knopp,1967)将 熵投射到Birkhoff多胞体上。 该作实际上限制了由双重随机矩阵构成的流形内剩余连接矩阵。由于这些矩阵的行列和均为1,作 作 为输入特征的凸组合。这一特性促进了信号传播的良好条件,使特征均值守恒,信号范数严格正则化,有效 降低信号消失或爆炸的⻛险。此外,由于双重随机矩阵的矩阵乘法闭包,复合映射 保留了这一 守恒性质。因此,mHC有效维护任意深度间恒等映射的稳定性。为确保效率,我们采用核融合技术,并利 用TileLang开发混合精密核(Wang等,2025)。此外,我们通过选择性重新计算和在DualPipe调度内谨 慎重叠通信来减轻内存占用(Liu等,2024b)。
Hi−1
res
Hire−s1
∏i=1 H
L−l i−1
res
对语言模型预训练的广泛实验表明,mHC在保持HC性能优势的同时,展现出卓越的稳定性和可扩展性。内 部大规模培训表明,mHC支持大规模培训,且在扩张率 n = 4时仅增加6.7%的时间开销。
2. Related Works
深度学习的架构进步主要可分为微观设计和宏观设计。微设计关注计算块的内部架构,规范特征如何在空 间、时间和通道维度上处理。相比之下,宏设计建立了块间拓扑结构,从而决定特征表示如何在不同层间传 播、路由和合并。
2.1. 微观设计
卷积最初在结构化信号处理中占据主导地位,受参数共享和平移不变性的影响。虽然后续变体如深度可分 (Chollet,2017)和分组卷积(Xie 等,2017)优化了效率,但变换器(Vaswani 等,2017)的出现确 立了注意力与前馈网络(FFN)作为现代架构的基本构建模块。注意力机制促进全球信息传播,而FFN增强 单个特征的表征能力。为了平衡性能与大型语言模型的计算需求,注意力机制已发展为高效变体,如多查询 注意力(MQA)(Shazeer,2019)、分组查询注意力(GQA)(Ainslie 等,2023)和多头潜在注意力

(立法议员)(Liu 等,2024a)。与此同时,FFNs通过专家混合(Mixture-of-Experts,MoE)被推广 为稀疏计算范式(Fedus 等,2022;Lepikhin 等,2020;Shazeer 等,2017),允许在不增加比例计算成 本的情况下实现大规模参数缩放。
2.2. 宏观设计
宏观设计决定网络的全局拓扑(Srivastava 等,2015)。继ResNet(He等,2016a)之后,DenseNet (Huang等,2017)和FractalNet(Larsson等,2016)等架构分别通过密集连通性和多径结构提升拓扑 复杂度来提升性能。深层聚合(DLA)(Yu 等,2018)进一步扩展了这一范式,递归地聚合不同深度和分 辨率的特征。
近年来,宏观设计的重点转向扩展残差流的宽度(Chai 等,2020;Fang 等,2023;Heddes等,2025;Mak 和Flanigan,2025年;Menghani 等,2025;Pagliardini 等,2024;Xiao 等,2025;谢等,2023;Zhu 等, 2024)。超连接(HC)(Zhu 等,2024)引入了可学习矩阵,用于调制不同深度特征间的连接强度,而 残差矩阵变换器(RMT)(Mak 和 Flanigan,2025)则用外积内存矩阵取代了标准残差流,以促进特征 存储。同样,MUDDFormer(Xiao 等,2025)采用多向动态密集连接以优化跨层信息流。尽管这些方法 具有潜力,但它们会破坏残差连接固有的身份映射特性,从而引入不稳定性并阻碍可扩展性。此外,由于功 能宽度的增加,内存访问负担也相当大。基于HC,拟议的 mHC 将剩余连接空间限制在特定流形上,以恢 复身份映射特性,同时结合严格的基础设施优化以确保效率。这种方法在保持扩展连接的拓扑优势的同时, 提升了稳定性和可扩展性。
3. Preliminary
我们首先确定本作中使用的符号。在HC表述中, 层 的输入被展开 倍,构造一个隐藏矩阵 ,可视为 流残差。这种作实际上拓宽了残留流的宽度。为了控制该流的读 出、写入和更新过程,HC引入了三种可学习的线性映射⸺ 和 。这些映射修 改了方程(1)中显示的标准残差联络,形成方程(3)中给出的表述。
l xl ∈ R1×C n
xl = (x , ... , x ) ∈
l
T
l−1
T T Rn×C n
H ,H ∈
l
pre
l
post R1×n H ∈
l
res Rn×n
在HC表述中,可学习的映射由两个系数部分组成:输入依赖系数和全局系数,分别称为动态映射和静态映 射。形式上,HC计算系数如下:
(5)
⎩
⎨
⎧x~l = RMSNorm(xl) H = α ⋅ tanh(θ ) + b
l
pre
l
pre
l
prex~l
T l
pre
H = α ⋅ tanh(θ ) + b
l
post
l
post
l
postx~l
T l
post
H = α ⋅ tanh(θ ) + b
lres lres lresx~lT lres
其中 (Zhang 和 Sennrich,2019)应用于最后一个维度,标量 和 是可 学习的⻔控因子,初始化为小值。动态
RMSNorm(⋅) α , α
l
pre
l
post α ∈
l
res R

映射通过参数为 和 的线性投影推导,而静态映射则由可学习的偏置表示, 和。
θ ,θ ∈
l
pre
l
post R1×C θ ∈
l
res Rn×C
b ,b ∈
l
pre
l
post R1×n b ∈
lres Rn×n
值得注意的是,引入这些映射⸺ 、 和 ⸺产生的计算开销可忽略不计,因为典型的展开率 ,例如4,远小于输入维数 。通过这种设计,HC有效地将残差流的信息容量与层的输入维度解耦,输入
维度与模型的计算复杂度(FLOPs)高度相关。因此,HC通过调整残差流宽度,提供了一种新的缩放途 径,补充了模型FLOP和训练数据大小的传统缩放维度,这些维度在预训练缩放定律中讨论(Hoffmann 等,2022)。
Hl
pre Hl
post Hl
res n
C
尽管HC需要三次映射来管理残差流与层输入之间的维度不匹配,但表1中初步实验表明,残差映射 带 来最显著的性能提升。这一发现凸显了残留信息流中有效信息交换的重要性。
Hlres
表1 |头盔成分的消融研究。当特定映射( 、 或 )被禁用时,我们采用固定映射以保持维度一 致性: 的 的均匀权重, 的 的统一权重为 1, 的单位矩阵。
Hl
pre Hl
post Hl
res
Hl
pre 1/n Hl
post Hlres
3.1. 数值不稳定性
虽然残差映射 对性能至关重要,但其顺序应用对数值稳定性存在重大⻛险。如方程(4)所述,当HC 跨越多层时,从第 层到第 层的有效信号传播由复合映射 控制。由于可学习的映射 无约 束,这种复合映射不可避免地偏离恒等映射。因此,信号强度在前向和反向传播过程中都容易爆炸或消失。 这一现象破坏了依赖无阻碍信号流的残差学习的基本前提,从而破坏了更深或更大规模模型中的训练过程。
Hl
res
l L ∏i=l H
L−1 L−i
res Hlres
实证证据支持这一分析。我们在大规模实验中观察到不稳定的损失行为,如图2所示。以mHC为基线,HC 在12k步⻓附近出现意外的损失激增,这与梯度范数的不稳定性高度相关。此外, 分析验证了这种不稳 定性的机制。为了量化复合映射 如何放大残余流上的信号,我们使用了两个指标。第一种基于
复合映射行和的最大绝对值,捕捉了前向传递中最坏情况的展开。第二个基于最大绝对列和,对应于回传。 我们将这些指标称为复合映射的 Amx增益幅度。如图3(b)所示,Amx增益幅度极高,峰值达3000,与1 形成明显差异,确认存在爆炸残余流。
Hl
res
∏i=l H
L−1 L−i
res

图2 | 超连接训练不稳定性(HC)。此图展示了(a) HC相对于 的绝对损耗差距,以及(b)梯度范 数的比较。所有结果均基于27B模型。
mH C
图3 | 超连接(HC)的传播不稳定性。图示了(a)单层映射 和(b)27B模型内复合映射 的传播动力学。图层索引 (x轴)将每个标准变换器块展开为两个独立层(注意层和FFN)。最大增益幅 度(y轴)计算为最大绝对行和(前向信号)和列和(反向梯度)对选定序列中所有标记的平均值。
Hlres ∏i=1 H
L−l
lre−si
l
3.2. 系统开销
由于额外映射的线性性,HC的计算复杂度仍可管理,但系统层面的开销阻止了不可忽视的挑战。具体来 说,内存访问(I/O)成本常常构成现代模型架构中的主要瓶颈之一,这被广泛称为“内存墙”(Dao 等, 2022)。这一瓶颈在架构设计中常被忽视,但它却决定性地影响运行效率。
我们聚焦广泛采用的前规范变换器架构(Vaswani 等,2017),分析了HC固有的输入输出模式。表2总结 了 流残差设计引入的单一残留层的每个令牌内存访问开销。分析显示,HC使内存访问成本增加的因子大 约与 成正比。这种过高的I/O需求在不缓解融合内核的情况下,显著降低了训练吞吐量。此外,由于 、 和 涉及可学习参数,它们的中间激活是反向传播的必要条件。这导致GPU内存占用大幅增加, 通常需要梯度检查点以维持可行的内存使用。此外,HC在流水线并行性中要求通信成本增加 倍(Qi等, 2024),导致气泡更大,训练吞吐量降低。
n
n Hl
pre
Hl
post Hl
res
n

表2 | 每个令牌内存访问成本的比较。 该分析考虑了前向传递中剩余流维护带来的开销,排除层函数的内部 I/O F。
4. Method
4.1. 流形约束超连接
mHC的核心前提是借鉴恒等映射原理(He 等,2016b),将剩余映射 限制在特定流形上。虽然原始的 身份映射通过强制执行 来保证稳定性,但它从根本上排除了残余流内的信息交换,这对于最大化多 流架构的潜力至关重要。因此,我们提出将残差映射投影到一个流形上,该流形既保持信号跨层传播的稳定 性,又促进残差流之间的相互作用,以保持模型的表现力。为此,我们将 限制为双重随机矩阵,其元素 非负,且行列和之和均为1。形式上,设 表示双重随机矩阵流形(也称为 Birkhoff 多面体)。我们将 限制为 ,定义为:
Hl
res
H=
lres I
Hlres
Mres
Hl
res P (H )
Mres l
res
P (H ) :=
Mres l
res {H ∈
l
res R ∣
n×n H 1 =
l
res n 1 , 1 H =
nn
⊤ l
res 1 , H ≥
n
⊤ l
res 0}, (6)
其中 1n 表示所有1的 n维向量。
值得注意的是,当 时,双重随机条件退化到标量1,从而恢复了原始的恒等映射。选择双重随机性赋 予了若干严谨的理论性质,对大规模模型训练有益:
n=1
1. Norm Preservation: The spectral norm of a doubly stochastic matrix is bounded by 1 (i.e., ). This implies that the learnable mapping is non-expansive, effectively mitigating the gradient explosion problem. 2. Compositional Closure: The set of doubly stochastic matrices is closed under matrix multiplication. This ensures that the composite residual mapping across multiple layers, , remains doubly stochastic, thereby preserving stability throughout the entire
depth of the model.
3. Geometric Interpretation via the Birkhoff Polytope: The set forms the Birkhoff polytope, which is the convex hull of the set of permutation matrices. This provides a clear geometric interpretation: the residual mapping acts as a convex combination of permutations. Mathematically, the repeated application of such matrices tends to increase
∥H ∥ ≤
l
res 2 1
∏i=1 H
L−1 L−i
res
Mres

信息流间单调混合,有效地作为一种稳健的特征融合机制。
此外,我们对输入映射施加非负约束, 和输出映射 。该约束防止正负系数组合产生的信号抵消, 这也可视为一种特殊的流形投影。
Hl
pre Hl
post
4.2. 参数化与流形投影
本节详细介绍了 mHC 中 、 和 的计算过程。给定输入隐藏矩阵在 层 ,我们首先将 其压平成矢量 ,以保持完整的上下文信息。然后,我们按照原始HC表述得到动态映 射和静态映射,具体如下:
Hl
pre Hl
post Hl
res l xl ∈ Rn×C
x~l = vec(xl) ∈ R1×nC
(7) ⎩
⎨
⎧x~l = RMSNorm( )
′ x~l
H~ = α ⋅ ( φ ) + b
l
pre
l
pre x~′l l
pre
l
pre
H~ = α ⋅ ( φ ) + b
l
post
l
post x~′l
l
post
l
post
= α ⋅ mat( φ ) + b ,
H~
l
res
l
res x~l
′ l
res
l
res
其中 和 是动态映射的线性投影, 是从 到 的重塑函数。
φ ,φ ∈
l
pre
l
post RnC×n φ ∈
lres RnC×n2 mat(⋅) R1×n2 Rn×n
然后,通过以下方式得到最终的约束映射:
(8)
⎩⎨
⎧H = σ( )
l
pre H~
l
pre
H = 2σ( )
l
post H~
l
post
H = Sinkhorn-Knopp( ),
l
res H~
l
res
其中 表示S形函数。Sinkhorn-Knopp( )算子首先通过指数算子使所有元素为正,然后进行迭代归一 化过程,交替将行和列重新缩放为1。具体来说,给定正矩阵 作为起点,归一化迭代过程 为:
σ(⋅) ⋅
M=
(0) exp( )
H~
l
res
M=
(t) T T (M ) , (9)
r ( c (t−1) )
其中 和 分别表示行和列的规范化。该过程收敛为双重随机矩阵 。我们在实验 中选择 作为实际价值。
Tr Tc H =
lres M(tmax) t →
max ∞
t=
max 20
4.3. 高效基础设施设计
在本节中,我们将详细介绍为 mHC量身定制的基础设施设计。通过严格优化,我们在大型模型中实现了 mHC (含 n = 4),边际训练开销仅为6.7%。
4.3.1. 内核融合
观察到 mHC 中的RMSNorm在高维隐 态作时会带来显著延迟,我们对除以范数的运算重新排序 为遵循
x~l ∈ R1×nC

矩阵乘法。这种优化在提高效率的同时,保持了数学上的等价性。此外,我们采用混合精度策略,最大化数 值准确性而不牺牲速度,并将多重作与共享内存访问融合到统一的计算内核中,以减少内存带宽瓶颈。基于 方程(10)至(13)中详细的输入和参数,我们实现了三个专用的 mHC 核来计算 、 和 。在 这些核中,偏差和线性投影被整合为 和 ,RMSNorm权重也被吸收在 中。
Hl
pre Hl
post Hlres
bl φl φl
• 式(14)至(15):我们开发了一个统一内核,利用矩阵乘法单元,最大化内存带宽利用率,融合 了 上的两个扫描。反向传递⸺包含两次矩阵乘法⸺同样合并为单一核,消除了 的冗余重载。 两个内核都具有精细调优的流水线(加载、投射、计算、存储),以高效处理混合精度处理。 • 方程(16)至(18):这些基于小系数的轻量级运算机会性融合为单核,显著降低了核启动开销。 • 方程(19):我们在单核内实现了Sinkhorn-Knopp迭代。对于后向传递,我们推导出一个自定义 的后向核,在芯片上重新计算中间结果并遍历整个迭代。
x~l x~l
φl : tf32 [nC, n2 + 2n] (10)
x~l : bf16 [1, nC] (11)
α ,α ,α :
l
pre
l
post
l
res float32 Scalars (12)
bl : float32 [1, n2 + 2n] (13)
,, :
[H~
l
pre H~
l
post H~
l
res] float32 = x~lφl (14)
r : float32 = ∥x~l∥2/ nC (15)
H ,H ,H :
[l
pre
l
post
l
res] float32 = 1/r α , α , α +
[l
preH~
l
pre
l
postH~
l
post
l
resH~
l
res] b (16)
l
H:
l
pre float32 = σ (Hl (17)
pre)
H:
l
post float32 = 2σ H (18)
(l
post)
H:
l
res float32 = Sinkhorn-Knopp (Hl (19)
res)
利用上述核推导的系数,我们引入两个额外的核来应用这些映射:一个为 ,另一个为 。通过将 和 的应用与残差合并融合,我们将读取元素数量从 减少到 ,将该核中写入元素的 减少到 。我们高效地实现了大多数核(不包括 式(14)到(15))的TileLang(Wang 等,2025)。该框架简化了复杂计算过程的内核实现,使我们能 够以最小的工程投入充分利用内存带宽。
F :=
pre H x
l
pre l
F :=
post,res H x +
lres l H F (⋅, ⋅)
l
post Hl
post Hlres
(3n + 1)C (n + 1)C 3nC nC
4.3.2. 再计算
n流残差设计在训练过程中带来了相当大的内存开销。为缓解这一问题,我们在前向传递后丢弃 mHC 核的 中间激活,并在后向传递中实时重新计算,通过重新执行 mHC 核

没有重层函数 。因此,对于 连续层块,我们只需将输入 存储到第一层。在考虑 的预范数的情况 下排除轻量系数,表3总结了后向传递中保留的中间激活。
F Lr xl0 F
表3 | 存储和重新计算的中间激活 我们列出了每枚令牌激活在后向传递和瞬态激活中被保留的连续层 。 层代表 层的第一层, 层属于 。
Lr l0 Lr l [l , l +
0 0 Lr − 1]
由于HC核的重新计算是针对 连续层块进行的,给定总 层,我们必须持续存储所有 块的第一层输 入 以实现反向传递。除了常驻内存外,重计算过程还会为活动块引入 元素的暂时内存开 销,决定反向传播时的内存峰值使用量。因此,我们通过最小化对应的总内存占用来确定 的最佳块大小 :
m Lr L ⌈ Lr ⌉
L
xl0 (n + 2)C × Lr
Lr∗
Lr
Lr =
∗ arg nC × + (n + 2)C × L ≈
Lr
min [ ⌈ Lr
L ⌉ r] . (20)
n+2
nL
此外,大规模训练中的流水线并行性存在一个限制:重计算块不得跨越流水线阶段边界。鉴于理论最优 通常与每个流水线阶段的层数相符,我们选择将重计算边界与流水线阶段同步。
Lr∗
4.3.3. DualPipe中的重叠通信
在大规模训练中,流水线并行是缓解参数和梯度内存占用的标准做法。具体来说,我们采用了DualPipe调 度(Liu等,2024b),该调度有效重叠了扩展互联通信流量,如专家并行和管道并行。然而,与单流设计 相比,HC中提出的 流残差在流水线阶段间产生了相当大的通信延迟 。此外,在阶段边界处,所有 层的 HC核的重新计算会带来不可忽视的计算开销。为解决这些瓶颈,我们扩展了DualPipe的调度(⻅图 4),以促进流水线阶段边界的通信与计算重叠。
n m Lr m
值得注意的是,为防止通信流阻塞,我们将MLP层(即FFN)层的 内核执行在专用的高优先级计算 流上。我们还避免在注意力层中使用持久内核进行⻓期运行作,从而防止⻓时间停滞。这种设计允许优先处 理重叠的注意力计算,实现灵活调度,同时保持计算设备处理单元的高利用率。此外,重新计算过程与流水 线通信依赖解耦,因为每个阶段 的初始激活已在本地缓存。
Fpost,res
xl0

图4 |通信 -计算重叠 。我们会扩展DualPipe的计划以应对 带来的开销。每个区块的⻓度仅供说 明,并不代表实际时⻓。(F)、(B)、(W)分别指前向、后向、权重梯度计算。 和 分别代表 对应注意力和 MLP 的核。
mHC mHC
FA FM
5. Experiments
5.1. 实验装置
我们通过语言模型预训练验证所提方法,对基线、 和我们提出的 进行了比较分析。我们利用受
DeepSeek-V3启发的MoE架构(Liu等,2024b),训练了四种不同的模型变体,以覆盖不同的评估模 式。具体来说, 和 的膨胀率 都设为4。我们的主要关注点是一个27B模型,其数据集大小与其参 数成正比,作为我们系统级主要结果的主题。在此基础上,我们通过整合较小的3B和9B模型,通过比例数 据训练,分析计算缩放行为,从而观察不同计算量的性能趋势。此外,为了具体研究代币缩放行为,我们用 固定语料库(1万亿个代币)训练了一个独立的3B模型。详细的模型配置和训练超参数⻅附录A.1。
HC mHC
HC mHC n
5.2. 主要结果
图5 |流 形约束超连接的训练稳定性( )。此图展示了(a) 和 相对于基线的绝对训练损 失差距,以及(b)三种方法的梯度范数。所有实验均采用27B模型。结果显示 在损失和梯度范数方 面表现出更高的稳定性。
mHC mHC HC
mH C
我们首先考察27B模型的训练稳定性和收敛性。如图5(a)所示, 有效缓解了 观察到的训练不 稳定性,最终损失比基线减少了0.021。这一稳定性提升得到了图5(b)梯度范数分析的进一步证实, 表现出明显优于 的行为,保持与基线相当的稳定轮廓。
mHC HC
mHC HC

表4 | 27B模型的系统级基准测试结果。 本表比较了基线、HC和 mHC 在8个不同下游基准测试中的零射和 少射性能。 mHC 在大多数基准测试中持续优于基线,超越HC,证明其在大规模预培训中的有效性。
第4⻚展示了多样基准测试的下游性能(Bisk等,2020;Cobbe 等,2021;Hendrycks 等, 2020,2021;Joshi 等,2017;Zellers 等,2019)。 mHC 带来了全面的改进,在大多数任务中持续优于基 线,并超过HC。值得注意的是,与HC相比, mHC 进一步增强了模型的推理能力,在BBH上实现了2.1% 的性能提升(Suzgun等,2022年),在DROP上提升了2.3%(Dua等,2019年)。
5.3. 规模化实验
图6 |mHC与基线的尺度特性比较。(a) 计算缩放曲线。实线表示不同计算预算间的性能差距。每个点代 表模型规模和数据集大小的特定计算最优配置,参数范围从3B、9B到27B。(b) 代币缩放曲线。3B模型 在训练中的轨迹。每个点代表模型在不同训练标记下的表现。详细的架构和训练配置⻅附录A.1。
为评估方法的可扩展性,我们报告了 mHC 在不同尺度上基线的相对损失改善情况。在图6(a)中,我们绘 制了涵盖3B、9B和27B参数的计算尺度曲线。该轨迹表明,即使在更高的计算预算下,性能优势依然稳健 地保持,仅显示出边际衰减。此外,我们考察了图6(b)中的运行内动态,该图展示了3B模型的代币缩放 曲线。综合来看,这些发现验证了 mHC 在大规模场景中的有效性。这一结论也得到了我们内部大规模训练 实验的进一步印证。

图7 |流 形约束超连接(mHC)的传播稳定性。图示了(a)单层映射 和(b)27B模型内复合 映射 的传播动力学。结果表明,与 HC 相比,mHC 显著增强了传播稳定性。
P (H )
M res lres
P (H )
∏l=1
L−1 M res l+1
res
图8 |可 学习映射的可视化。本图展示了HC(第一行)和mHC(第二行)的代表性单层和复合映射。每个 矩阵通过对所选序列中所有标记进行平均计算。沿y轴和x轴标注的标签分别表示正向信号增益(行和)和后 向梯度增益(列和)。
5.4. 稳定性分析
与图3类似,图7展示了mHC的传播稳定性。理想情况下,单层映射满足双重随机约束,意味着正向信号增 益和后向梯度增益都应等于1。然而,使用Sinkhorn-Knopp算法的实践实现必须限制迭代次数以实现计算 效率。在我们的设置中,我们会进行20次迭代以获得近似解。因此,如图7(a)所示,后向梯度增益略微 偏离1。在图7(b)所示的复合情况中,偏差增加但保持有界,达到约1.6的最大值。值得注意的是,与高中 近3000的最大增益幅度相比,mHC显著降低了三个数量级。这些结果表明,与HC相比,mHC显著增强了 传播稳定性,确保了稳定的前向信号和后向梯度流动。此外,图8展示了代表性的映射。我们观察到,对于 HC,当最大增益较大时,其他值也趋于显著,表明所有传播路径的整体不稳定性。相比之下,mHC持续稳 定地产生结果。

6. Conclusion and Outlook
本文指出,虽然扩展残差流宽度和多样化连接可带来性能提升,如超连接(HC)所提出,但这些连接的不 受约束性导致信号发散。这种破坏破坏了信号能量在各层的守恒,导致训练不稳定,阻碍深度网络的可扩展 性。为应对这些挑战,我们引入了流 形约束超连接(mHC),这是一种将剩余连接空间投影到特定流形上 的通用框架。通过采用Sinkhorn-Knopp算法对残差映射施加双重随机约束,mHC将信号传播转换为凸特征 组合。实证结果证实,mHC有效恢复了身份映射特性,使得大规模训练能够稳定且具有优于传统HC的可扩 展性。关键是,通过高效的基础设施层面优化,mHC实现这些改进时计算开销极低。
作为HC范式的广义扩展,mHC为未来研究开辟了多条有前景的道路。尽管该工作采用双重随机矩阵以确保 稳定性,但该框架也适应了针对特定学习目标的多样化流形约束的探索。我们预计,进一步研究不同几何约 束将带来新方法,更好地优化塑性与稳定性之间的权衡。此外,我们希望mHC能激发社区对宏观架构设计 的兴趣。通过加深对拓扑结构如何影响优化和表示学习的理解,mHC将有助于解决当前局限,并有望为下 一代基础架构的发展揭示新路径。
References
J. Ainslie, J. Lee-Thorp, M. De Jong, Y. Zemlyanskiy, F. Lebrón, and S. Sanghavi. Gqa: Training generalized multi-query transformer models from multi-head checkpoints. arXiv preprint arXiv:2305.13245, 2023.
Y. Bisk, R. Zellers, R. L. Bras, J. Gao, and Y. Choi. PIQA: reasoning about physical commonsense in natural language. In The Thirty-Fourth AAAI Conference on Artificial Intelligence, AAAI 2020, The Thirty-Second Innovative Applications of Artificial Intelligence Conference, IAAI 2020, The Tenth AAAI Symposium on Educational Advances in Artificial Intelligence, EAAI 2020, New York, NY, USA, February 7-12, 2020, pages 7432–7439. AAAI Press, 2020. doi: 10.1609/aaai.v34i05.6239. URL https://doi.org/10-
.1609/aaai.v34i05.6239. T. Brown, B. Mann, N. Ryder, M. Subbiah, J. D. Kaplan, P. Dhariwal, A. Neelakantan, P. Shyam, G. Sastry, A. Askell, et al. Language models are few-shot learners. Advances in neural information processing systems, 33:1877–1901, 2020. Y. Chai, S. Jin, and X. Hou. Highway transformer: Self-gating enhanced self-attentive networks. In D. Jurafsky, J. Chai, N. Schluter, and J. Tetreault, editors, Proceedings of the 58th Annual Meeting of the Association for Computational Linguist-
ics, pages 6887–6900, Online, July 2020. Association for Computational Linguistics. doi: 10.18653/v1/2020.acl-main.616. URL https://aclanthology.org/2020.acl-main.616/. F. Chollet. Xception: Deep learning with depthwise separable convolutions. In Proceedings of the IEEE conference on computer vision and pattern recognition, pages 1251–1258, 2017.

K. Cobbe, V. Kosaraju, M. Bavarian, M. Chen, H. Jun, L. Kaiser, M. Plappert, J. Tworek, J. Hilton, R. Nakano, et al. Training verifiers to solve math word problems. arXiv preprint arXiv:2110.14168, 2021. T. Dao, D. Y. Fu, S. Ermon, A. Rudra, and C. Ré. FlashAttention: Fast and memory-efficient exact attention with IO-awareness. In Advances in Neural Information Processing Systems (NeurIPS), 2022. D. Dua, Y. Wang, P. Dasigi, G. Stanovsky, S. Singh, and M. Gardner. DROP: A reading comprehension ben-
chmark requiring discrete reasoning over paragraphs. In J. Burstein, C. Doran, and T. Solorio, editors, Proceedings of the 2019 Conference of the North American Chapter of the Association for Computational Linguistics: Human Language Technologies, NAACL-HLT 2019, Minneapolis, MN, USA, June 2-7, 2019, Volume 1 (Long and Short Papers), pages 2368–2378. Association for Computational Linguistics, 2019. doi: 10.18653/V1/N19-1246. URL https://doi.org/10.18653/v1/n19-1246. Y. Fang, Y. Cai, J. Chen, J. Zh-
ao, G. Tian, and G. Li. Cross-layer retrospective retrieving via layer attention. In The Eleventh International Conference on Learning Representations, 2023. URL https://openreview.net/forum?id=pvgELIyS3Ql. W. Fedus, B. Zoph, and N. Shazeer. Switch transformers: Scaling to trillion parameter models with simple and efficient sparsity. Journal of Machine Learning Research, 23(120):1–39, 2022. K. He, X. Zhang, S. Ren, and J. Sun. Deep residual learning for image recognition. In Proceedings of the IEE-
E conference on computer vision and pattern recognition, pages 770–778, 2016a.
K. He, X. Zhang, S. Ren, and J. Sun. Identity mappings in deep residual networks. In European conference on computer vision, pages 630–645. Springer, 2016b. M. Heddes, A. Javanmard, K. Axiotis, G. Fu, M. Bateni, and V. Mirrokni. Deepcrossattention: Supercharging transformer residual connections. In Forty-second International Conference on Machine Learning, 2025. URL https://openreview.net/forum?id=j3JBfFnGYh. D. Hendrycks, C. Burns, S. Basart, A. Zou, M. Mazeika, D. Song, and J. Steinhardt. Measur-
ing massive multitask language understanding. arXiv preprint arXiv:2009.03300, 2020. D. Hendrycks, C. Burns, S. Kadavath, A. Arora, S. Basart, E. Tang, D. Song, and J. Steinhardt. Measuring mathematical problem solving with the math dataset. arXiv preprint arXiv:2103.03874, 2021. J. Hoffmann, S. Borgeaud, A. Mensch, E. Buchatskaya, T. Cai, E. Rutherford, D. de Las Casas, L. A. Hendricks, J. Welbl, A. Clark, T. Hennigan, E. Noland, K. Millican, G. van den Driessche, B. Damoc, A. Guy, S. Osindero, K-
. Simonyan, E. Elsen, O. Vinyals, J. Rae, and L. Sifre. An empirical analysis of compute-optimal large language model training. In S. Koyejo, S. Mohamed, A. Agarwal, D. Belgrave, K. Cho, and A. Oh, editors, Advances in Neural Information Processing Systems, volume 35, pages 30016–30030. Curran Associates, Inc., 2022. URL https://proceedings.neurips.cc/paper_files/paper/2022/file/c1e2faf6f588870935f114ebe04a3e5Paper-Conference.pdf. G. Huang, Z. Liu, L. Van Der Maaten, and K. Q. Weinberger. Densely -
connected convolutional networks. In Proceedings of the IEEE conference on computer vision and pattern recognition, pages 4700–4708, 2017.

M. Joshi, E. Choi, D. Weld, and L. Zettlemoyer. TriviaQA: A large scale distantly supervised challenge dataset for reading comprehension. In R. Barzilay and M.-Y. Kan, editors, Proceedings of the 55th Annual Meeting of the Association for Computational Linguistics (Volume 1: Long Papers), pages 1601–1611, Vancouver, Canada, July 2017. Association for Computational Linguistics. doi:10.18653/v1/P17-1147. URL https://aclanthology.org/P17-1147. G. Larsson, M. Maire, and G. Shakhnarovich. Fractalnet: -
Ultra-deep neural networks without residuals. arXiv preprint arXiv:1605.07648, 2016. D. Lepikhin, H. Lee, Y. Xu, D. Chen, O. Firat, Y. Huang, M. Krikun, N. Shazeer, and Z. Chen. Gshard: Scaling giant models with conditional computation and automatic sharding. arXiv preprint arXiv:2006.16668, 2020. A. Liu, B. Feng, B. Wang, B. Wang, B. Liu, C. Zhao, C. Dengr, C. Ruan, D. Dai, D. Guo, et al. Deepseek-v2: A strong, economical, and efficient mixture-of-experts language model. arXiv preprint arXiv:2405-
.04434, 2024a. A. Liu, B. Feng, B. Xue, B. Wang, B. Wu, C. Lu, C. Zhao, C. Deng, C. Zhang, C. Ruan, et al. Deepseek-v3 technical report. arXiv preprint arXiv:2412.19437, 2024b. I. Loshchilov and F. Hutter. Decoupled weight decay regularization. arXiv preprint arXiv:1711.05101, 2017.
B. Mak and J. Flanigan. Residual matrix transformers: Scaling the size of the residual stream. arXiv preprint arXiv:2506.22696, 2025. G. Menghani, R. Kumar, and S. Kumar. LAurel: Learned augmented residual layer. In Forty-second International Conference on Machine Learning, 2025. URL https://openreview.net/forum? id=rUDRW9WvZ. M. Pagliardini, A. Mohtashami, F. Fleuret, and M. Jaggi. Denseformer: Enhancing information flow in transformers via depth weighted averaging. In The Thirty-eighth Annual Co-
nference on Neural Information Processing Systems, 2024. URL https://openreview.net/forum?id=kMnoh7CXrq. P. Qi, X. Wan, G. Huang, and M. Lin. Zero bubble (almost) pipeline parallelism. In The Twelfth International Conference on Learning Representations, 2024. URL https://openreview.net/forum? id=tuzTN0eI05. N. Shazeer. Fast transformer decoding: One write-head is all you need. arXiv preprint arXiv:1911.02150, 2019. N. Shazeer, A. Mirhoseini, K. Maziarz, A. Davis, Q. Le, G. Hinton, and J. Dean. Out-
rageously large neural networks: The sparsely-gated mixture-of-experts layer. arXiv preprint arXiv:1701.06538, 2017.
R. Sinkhorn and P. Knopp. Concerning nonnegative matrices and doubly stochastic matrices. Pacific Journal of Mathematics, 21(2):343–348, 1967. R. K. Srivastava, K. Greff, and J. Schmidhuber. Training very deep networks. In C. Cortes, N. Lawrence, D. Lee, M. Sugiyama, and R. Garnett, editors, Advances in Neural Information Processing Systems, volume 28. Curran Associates, Inc., 2015. URL https://proceedings.neurips.cc/paper_files/paper/2015/file/215a71a12769b056c3c32e7299f1c5edPaper.pdf.

J. Su, M. Ahmed, Y. Lu, S. Pan, W. Bo, and Y. Liu. Roformer: Enhanced transformer with rotary position embedding. Neurocomputing, 568:127063, 2024. M. Suzgun, N. Scales, N. Schärli, S. Gehrmann, Y. Tay, H. W. Chung, A. Chowdhery, Q. V. Le, E. H. Chi, D. Zhou, et al. Challenging big-bench tasks and whether chain-of-thought can solve them. arXiv preprint arXiv:2210.09261, 2022. H. Touvron, T. Lavril, G. Izacard, X. Martinet, M.-A. Lachaux, T. Lacroix, B. Rozière, N. Goyal, E. Hambro, F. Azhar, et a-
l. Llama: Open and efficient foundation language models. arXiv preprint arXiv:2302.13971, 2023. A. Vaswani, N. Shazeer, N. Parmar, J. Uszkoreit, L. Jones, A. N. Gomez, Ł. Kaiser, and I. Polosukhin. Attention is all you need. Advances in neural information processing systems, 30, 2017. L. Wang, H. Gao, C. Zhao, X. Sun, and D. Dai. Auxiliary-loss-free load balancing strategy for mixture-of-experts. arXiv preprint arXiv:2408.15664, 2024. L. Wang, Y. Cheng, Y. Shi, Z. Tang, Z. Mo, W. Xie, L. Ma, Y. Xi-
a, J. Xue, F. Yang, et al. Tilelang: A composable tiled programming model for ai systems. arXiv preprint arXiv:2504.17577, 2025.
D. Xiao, Q. Meng, S. Li, and X. Yuan. Muddformer: Breaking residual bottlenecks in transformers via multiway dynamic dense connections. arXiv preprint arXiv:2502.12170, 2025. S. Xie, R. Girshick, P. Dollár, Z. Tu, and K. He. Aggregated residual transformations for deep neural networks. In Proceedings of the IEEE conference on computer vision and pattern recognition, pages 1492–1500, 2017. S. Xie, H. Zhang, J. Guo, X. Tan, J. Bian, H. H. Awadalla, A. Menezes, T. Qin, and R. Yan. Residual: Transform-
er with dual residual connections, 2023. URL https://arxiv.org/abs/2304.14802. F. Yu, D. Wang, E. Shelhamer, and T. Darrell. Deep layer aggregation. In Proceedings of the IEEE conference on computer vision and pattern recognition, pages 2403–2412, 2018. R. Zellers, A. Holtzman, Y. Bisk, A. Farhadi, and Y. Choi. HellaSwag: Can a machine really finish your sentence? In A. Korhonen, D. R. Traum, and L. Marquez, editors, Proceedings of the 57th Conference of the Association for Computational Linguisti-
cs, ACL 2019, Florence, Italy, July 28August 2, 2019, Volume 1: Long Papers, pages 4791–4800. Association for Computational Linguistics, 2019. doi: 10.18653/v1/p19-1472. URL https://doi.org/10.18653/v1/p19-1472. B. Zhang and R. Sennrich. Root mean square layer normalization. Advances in neural information processing systems, 32, 2019.
D. Zhu, H. Huang, Z. Huang, Y. Zeng, Y. Mao, B. Wu, Q. Min, and X. Zhou. Hyper-connections. arXiv preprint arXiv:2409.19606, 2024.

答:1. 详细模型规格和超参数。
表5 | 详细模型规格和超参数。 本表展示了基于DeepSeek-V3架构的3B、9B和27B模型的架构配置(Liu 等,2024b)。它概述了 mHC 和 HC的具体超参数,包括残差流扩展和Sinkhorn-Knopp设置,以及实验 中使用的优化和训练协议。

---

## Processing Information

- **Processing Library:** Zotero PDFWorker
- **Processing Date:** 2026-02-10T18:15:24.708Z
- **Text Length:** 24336 characters
- **Success:** Text extraction completed
- **PDF Library Used:** Zotero PDFWorker
- **Pages Processed:** unknown of unknown
