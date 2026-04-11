# PDF Document: [Translated - ZH] PDF.pdf

**File Path:** [Translated - ZH] PDF.pdf

**Processed Date:** 2026-02-10T18:14:08.000Z

**File Size:** 11547.06 KB

**Total Pages:** unknown

**Extracted Pages:** unknown

**PDF Library:** Zotero PDFWorker

**Attachment Item ID:** 10077

**Title:** Harmony: Harmonizing Audio and Video Generation through Cross-Task Synergy

**Collection:** Large Files > Random Papers

---

## Extracted Text Content

和谐:通过跨任务协同实现音频与 视频生成的协调
腾胡1* 甄陶宇2* 张国振2 * 苏子涵1 郑光周2
张有良2 袁周2 ⻘林鲁2 冉逸1†
1上海交通大学 2腾讯 魂源
项目⻚面:
https://sjtugplayer.github.io/projects/Harmony
图1。 Harmony 采用跨任务协同训练策略,实现强大的视听同步。这一多功能框架支持多代范式,包括联合音视频 合成以及音频驱动和视频驱动生成,同时也展现出对多种音频类型(如音乐)和视觉⻛格的强强通用性。
摘要
同步视听内容的合成是生成式人工智能的关键挑战,开 源模型在稳健的视听对⻬方面面临挑战。我们的分析显 示,这一问题根源于联合扩散过程的三个根本挑战: (1) 对应漂移,即同时演化的噪声潜能阻碍对比对的 稳定学习;(2)未能捕捉细致时间线索的低效全局注意 力机制;以及(3)传统无分类器指导(CFG)的模态内 偏差,该偏向增强了条件性,但不增强跨模态同步。为 了克服
* 平等贡献。
† 通讯作者。
这些挑战,我们引入 了Harmony,一种机制性地强制 视听同步的新框架。我们首先提出了一种 跨任务协同 训 练范式,利用音频驱动的视频和视频驱动的音频生成任 务中的强监督信号来减轻漂移。随后,我们设计了一个 全 局-局部解耦交互模块 ,实现高效且精确的时间式对 ⻬。最后,我们提出了一种新型同步 增强CFG (SyncCFG),在推断过程中明确隔离并放大比对信 号。大量实验表明,Harmony 建立了一种全新的技术水 平,在生成精度和关键的细粒度视听同步方面都远超现 有方法。

1. Introduction
音频与视频的统一融合代表了当代生成式人工智能的关 键前沿,对内容创作、数字虚拟形象和沉浸式虚拟世界 具有深远影响。行业领先的专有型号,如Veo 3 [8] 和 Sora 2 [37],树立了高标杆,以卓越的精度交付输出, 并展现出显著的实用价值。然而,这些闭源系统与现有 开源方法的能力之间仍存在显著差距 [5, 38, 43]。尤其 在开源社区中,一个根本性挑战仍未解决:实现精确和 谐的视听对⻬。
尽管近期的开源模型在生成质量上取得了进步,但它们 常常在强大的视听同步方面遇到困难。最近对端 到端联 合音视频生成的探索 [14, 26, 34, 35, 42, 50] 强调了这 一局限性。具体来说,这些方法通常存在专业化的局限 性:许多方法仅限于产生环境音,无法合成自然的人类 语音 [14, 26, 34, 42];而其他如 JAM-Flow [30]则专注 于语音生成,但缺乏生成环境音的能力。即使在更通用 的模型中,Ovi [35] 在 稳健对⻬方面存在缺陷,而
UniVerse-1 [50] 则存在 音视频同步较差的问题。表1展 示了能力比较。这些不足暴露了当前研究中的一个关键 空白:很少有方法从方法论⻆度探讨音视频错位的根本 原因。因此,目前缺乏高度通用且高度对⻬的音视频合 成方法。 这在开源领域留下了显著空白,缺乏一个能够生 成从环境声到人声的全面音频谱,同时保持精确视听和谐 的统一框架。
本研究提出,实现稳健同步的难度源于联合扩散过程固 有的三个根本挑战。(1)在联合产生过程中,两种模式 都会逐渐从纯噪声中去噪。在早期高度随机阶段,试图 对⻬两个同时进化且噪声较大的潜伏者会导致一种现 象,我们称之为 对应漂移,即最优映射不断变化,阻碍 稳定学习。(2)视听同步在两种竞争目标之间形成了根 本的架构张力:精确的帧级时间对⻬(如唇形动作)与 整体、整体⻛格一致性(如情感基调)。现有设计通常 依赖于单一的单一机制,如全局交叉注意力,混淆了这 些不同目标,迫使模型陷入一个不理想的权衡,两个目 标都未能完全实现。(3)常规无分类器导引(CFG) [16] 通过放大条件信号来工作
表1。现有联合音视频生成模型能力比较。我们评估它们 生成不同声音类型的能力及其与视频的时间对⻬质量。 (✓:良好;○:一般/有限;✗:差/无支持)
每种模态单独使用NAL。因此,它本身并不能促进或增 强生成音频与视频之间关键的跨模态对应关系。
为克服这些挑战,我们提出了 Harmony,一种新型联 合音视频生成框架,旨在生成高度同步且具备跨任务协 同功能的音视频内容。Harmony的设计围绕三大核心创 新展开,每项都针对上述挑战之一。为减轻对应漂移, 我们采用 跨任务协同 训练范式,将联合生成任务与辅助 音频驱动视频和视频驱动音频生成任务共同训练,利用 后者的强监督信号植入强劲的对⻬先验。为解决局部与 全局同步目标的混淆,我们进一步提出了一个 全局-局 部解耦交互模块 ,通过解耦全局⻛格关注和局部、 RoPE对⻬的帧级关注,确保整体⻛格一致性和精确的时 间同步。最后,为了解决传统CFG缺乏增强视听对⻬机 制的事实,我们提出了 同步增强CFG(SyncCFG)。 这一新技术重新定义了跨任务训练阶段学到的负条件, 明确分离并放大对应视听对⻬的引导矢量。
我们新提出的 Harmony-Bench 的广泛实验验证了我 们在共同生成人类语音和环境声音这一艰巨任务上的框 架。Harmony实现了最佳的音视频对⻬,在复杂的声学 场景中保持细粒度的时间同步,这也验证了我们方法的 有效性。我们工作的主要贡献总结如下:
• 我们提出了 Harmony,一种基于 跨任务协同 原理的新型联合音视频生成框架,旨在解决联合 扩散模型中的基本 对应漂移问题。
• 我们设计了一个 全局-局部解耦交互模块 ,实 现整体⻛格和细粒度时间细节的全面对⻬。 • 我们提出了一种新型 同步增强CFG

(SyncCFG)通过使用静音音频和静态视频条件作为负 向指导,引导模型在推断过程中实现更好的视听对应。
• 我们建立了视听生成领域的新技术,通过大量 实验验证了Harmony在跨模态同步方面的优越性 能。
2. Related Work
2.1. 视频生成
视频生成领域 [13, 21, 29, 49, 55]迅速发展,从早期生 成对抗网络(GAN) [11] 向现今主导的扩散模型 [17]。 基于其在图像合成 [23, 39, 41]上的成功,AnimateDiff [13] 和SVD等模型 [1] 将扩散扩展到时间域。架构也从 UNets演变为更强大的扩散变换器(DiT) [33, 56], 最近的开源模型如欢远视频 [29] 和万 [49] 实现了最先 进的视觉质量,启发了许多下游视频生成方法,如视频 定制 [19, 20]、视频编辑 [4, 32]和摄像机控制 [18, 22, 53]。然而,这套作品中存在一个关键局限:对视觉模 式的单一关注。通过生成无声视频,这些模型产生的内 容感觉不完整,缺乏现实体验的沉浸感,凸显了音视综 合的必要性。
2.2. 联合音视频生成
近年来,越来越多的研究开始探索在单一统一框架内同 时生成音频和视频 [34, 35, 42, 50, 51, 54]。然而,该 领域的大多数早期开源方法仅限于合成粗糙的环境声 音,无法产生有意义的人类语音 [26, 34, 42]。
UniVerse-1 [50] 和Ovi [35]等型号带来了重大进步, 这些型号集成了更强大的音频合成组件,实现了环境音 和人声的联合生成。尽管取得了这些进展,但整体音景 的细致对⻬仍是一个关键挑战。这些模型常常难以以声 学和语义上与视觉语境一致的方式,将人类语音与周围 环境音频无缝融合,凸显了创造真正沉浸式视听体验的 空白。
3. Method
本节介绍 了Harmony,一种用于联合音视频合成的新 型框架,旨在克服扩散模型中跨模态比对的根本挑战, 能够实现联合音视频生成。
语音、音效和环境音效。我们引入三项核心创新设计: (1)跨 任务协同 训练策略,将标准的联合音视频生成 任务与辅助音频驱动视频及视频驱动音频生成任务结合 起来,利用两者强烈的单向监督信号加速并稳定音视频 对⻬的学习;(2)全 局-局部解耦交互模块 ,高效确保 细粒度的时间对应和整体⻛格一致性;以及(3)一种跨 任务对⻬增强的CFG 机制,通过设计更有意义的负锚点 来重新利用指导,明确放大推断过程中的音视频同步。
3.1. 初步:联合音视频扩散
联合音视频合成通常采用双流潜在扩散模型。在将视频 和音频 编码为潜在 后,去噪网络 会被训 练反转标准的高斯噪声过程。该网络由并行的视频和音 频⻣干组成,分别处理各自的噪声潜伏 和 。同步 通过连接两股流的交互模块(例如交叉注意力模块)学 习。该模型通过最小化两种模态的噪声预测误差来优 化:
V A (z , z )
v a εθ
zv,t za,t
L = ∥εv − ε^v(zv,t, za,t, t)∥2 + ∥εa − ε^a(za,t, zv,t, t)∥2. (1)
然而,这种标准方法难以从两个同时存在的噪声信号中 学习稳健的对⻬⸺这是我们工作所解决的核心挑战。
3.2. 跨任务协同以增强对⻬
3.2.1. 通信漂移的挑战
问题表述。 尽管联合音视频生成的最新进展聚焦于新颖 架构,但一个根本挑战依然存在:实现稳健的跨模态对 ⻬。我们认为根本原因不是架构上的限制,而是训练范 式中固有的不稳定性,我们称之为 对应漂移。在联合训 练的初期阶段,音频和视频信号都会被大量噪声扩散。 试图学习两个同时演化的高度随机潜变量之间的对应关 系,会导致学习目标不稳定且效率低下,导致比对过程 漂移并收敛缓慢。
经验动机。 为验证这一假设,我们在图3中呈现了一个 比较分析。我们比较了音频驱动视频生成任务与联合音 频-视频生成任务的口型同步对⻬分数,采用相同的网络 架构(详⻅第3.3节)。结果显示,音频驱动模型在干净 的音频信号条件下,会迅速收敛到较高的对⻬分数;相比 之下,联合生成

图2。(a) 通过跨任务协同来缓解通信漂移。 我们的培训范式利用监督的音频和视频驱动任务,提供强有力的对⻬ 信号。这为模型注入了稳健的同步特性,稳定了原本随机的关节生成过程。 (b) 和谐模型概述。 该架构具有多模 态输入的并行分支。视频流以参考图片和描述提示为条件。音频流基于参考音频、环境声音描述和语音文字记录。模 型随后生成一个单一的同步视听结果。
图3。 不同训练策略间音视频对⻬得分的比较。
模型的收敛速度明显较慢。这一差异强烈表明,在音频 驱动模型中实现的确定性、无噪声信号锚定一种模态, 提供了稳定的学习梯度,使跨模态交互模块能够高效捕 捉对⻬线索。
3.2.2. 跨任务协同
跨任务协同概述。 基于这一⻅解,我们提出了一种新的 训练框架⸺ 跨任务协同,它协同地将标准的联合音视 频生成任务(主要任务)与音频驱动的视频和视频驱动 的音频生成任务结合起来。通过利用单向监督任务中高 质量、无噪声的学习信号,我们的模型高效地学习复杂 的视听对应关系。这些预先学习的对⻬知识成为强有力 的催化剂,加速收敛并提升主要联合生成任务的最终对 ⻬质量。
双分支模型架构。 我们的模型采用了视频和音频生成的 双分支架构。视频分支采用预训练的Wan2.2-5B模型 [49]。为确保结构性对称,我们设计了一个对称音频生 成分支, 以语音转录 (语音内容)、描述性说明 (描述声学场景,如人声情感或环境音)和参考音频 (音色)为条件,合成音频片段。我们通过多编码器 设备处理这些输入:音频VAE [5] 编码 并 为潜在 信号 和 。关键是,区别于以往 [34, 35],我们使用
独立的文本编码器以保持语音准确性:专用语音编码器 [3] 用于转录 ( )和T5编码器 [6] 用于描述 性提示 ( )。在去噪过程中,参考潜 会 被加在噪声目标潜在 之前,形成一个复合输入潜 。该复合潜伏,连同语音和提示嵌入,随后由多模扩散 变换器(MM-DiT)处理以预测噪声:
A Ts
Ta
Ar A Ar
za zr
Ts → espeech
Ta → eprompt zr
za,t z′a,t
e^a = MM-DiT(concat(z , e , e ), t ). (2)
a,t
′ speech prompt a
为促进两条分支间的有效跨模态交互,我们在每层实例 化一个双向全局-局部解耦交互模块,详细细节⻅第3.3 节。
跨任务协同训练。 我们设计了一种融合培训策略,实现 了跨任务协同原则。通过同时训练联合生成任务和两个 确定性单模态驱动任务(音频驱动视频生成和视频驱动 音频生成),

我们为模型提供稳定的比对信号,以抵消对应漂移。
音频驱动的任务通过将音频时间步⻓ 设为0,将视频 生成条件为干净音频的潜在部分。对称地,视频驱动的 任务通过将视频时间步 ⻓设为0,从而将音频生成条 件为干净视频的潜在状态。总训练目标是三个相应损失 的加权和:
ta
tv
L=L +
joint λ L +
v audio
video λ L , (3)
a video
audio
其中 和 是超参数的平衡, 代表辅助条件的集合 (例如文本提示和语音嵌入)。损耗分量定义为:
λv λa c
(4)
Ljoint
Laudio
video
Lvideo
audio
= ∥ε − (z , z , c, t)∥
v ε^v v,t a,t 2
+ ∥ε − (z , z , c, t)∥ ,
a ε^a a,t v,t 2
= ∥ε − (z , z , c, t)∥ ,
v ε^v v,t a,0 2
= ∥ε − (z , z , c, t)∥ .
a ε^a a,t v,0 2
这种双向、协同训练方法使我们的模型能够实现更快的 收敛和更优越的最终音视频对⻬。
3.3. 全局-局部解耦交互模块
稳健的音视频同步在两个目标之间存在根本张力:(1) 精确、细粒度的时间对⻬和(2)整体、全局⻛格一致性 (如情感基调、环境特征)。以往的研究 [34, 35] 常试 图用单一、单一的机制(如全局交叉注意力)来解决这 两者,这使这些目标混为一谈,导致了次优的权衡。为 解决这个问题,我们提出了一个新的 全局-局部解耦交 互模块 ,包含两个专⻔组件:(1) RoPE-对⻬的逐帧 注意力 模块,用于精确的局部同步;(2)全 局⻛格对⻬ 模块,实现整体一致性。这种解耦设计使每个组件能够 在其特定任务中表现出色,解决细粒度时间对⻬与全局 样式传播之间的冲突。
3.3.1. 按帧对⻬的RoPE Attention
为了实现精确的时间同步,我们采用局部帧级注意力策 略,这种策略在计算上更高效,更适合细粒度对⻬,而 非全局交叉注意力。然而,视频和音频潜在采样率不匹 配( )是一个关键挑战。这种差异意味着,在一 种模态中,某一特定事件可能发生在另一个模态中两个 离散帧 之间的时间点。一个标准的注意力机制必须在一 组离散的按键上作,必须关注最近但时间不完美的帧。 这种强制近似引入了时间抖动,并从根本上降低了细粒 度同步。
Tv = Ta
通过RoPE尺度进行时间对⻬。 为解决这种不匹配,我 们在注意作前引入一个对⻬步骤 [5]。我们的关键⻅解是 通过动态扩展旋转位置嵌入(RoPE)来统一两种模态的 时间坐标空间 [45]。在注意作前,我们会重新调整源模 态的位置索引以匹配目标的时间线。例如,在音频转视 频(A2V)注意中,索引为 的音频帧被映射到虚拟位 置 进行RoPE计算。这确保了它们的位 置编码可直接比较,建立了强烈的归纳偏差以实现正确 的时间对应。
j
j′ = j ⋅ (T /T )
va
帧间交叉注意力机制。 随着潜伏在RoPE空间中时间对 ⻬,我们应用了对称的双向交叉注意力机制。每个画面 的注意力都局限于另一种模态中一个小而相关的时间窗 口。以A2V为例,给定一个视频潜在 和一个音频潜在 ,我们首先重塑 以暴露其时间维度( )。对于每 个视频帧 ,我们从相邻的音频帧构建一个本地上下文窗 口 。交叉注意力随后对每个视频帧独立应用,关注 其对应的音频上下文窗口:
zv
za zv zv
l
i
Ca,i
Δz [i, i, ... , i]
v
l
Qv,i
= Cross-Attn(Q , K , V ), ∀i ∈ [0, T − 1],
v,i a,i a,i v
= z [i, i, ... , i]W , K = C W , V = C W
v
l
v,i
Q a,i a,i a,i
K a,i a,i a,i
V
视频到音频(V2A)逐帧对⻬的作方式类似。这些更新 随后通过残留连接进行整合:
z=
v
updated zv + Δz , z =
v
l a
updated za + Δz . (6)
a
这种与RoPE对⻬的帧级机制高效地实现了相互时间同 步,利用局部关注的优势,同时正确处理不同时间尺 度。
3.3.2. 全局⻛格对⻬
虽然帧层关注擅⻓建立细致的时间对应,但其局部性本 质上限制了整体⻛格属性的传播,如整体情感基调或环 境特征,而这些属性需要持续保持全局语境。以往的方 法通常依赖于单一的全局注意力机制,这使时间对⻬和 全局⻛格一致性这两个独立任务混为一谈,导致模块负 担过重。为此,我们提出了一种原则性的解耦:我们的 RoPE 对⻬帧对⻬ Attention 专注于精确的时间对应,而 专⻔的 全局⻛格对⻬ 模块负责整体一致性。这种分离使 每个组件能够专业化,避免了两目标之间的干扰。

图4。 SyncCFG 利用静音音频和静态视频作为负锚点 来捕捉同步功能,从而有效增强音视频对⻬。
我们对整体对⻬的核心洞察是利用参考音频潜在器
(提供说话者的身份和音色)作为⻛格信息的紧凑载 体。我们不是直接修改目标音频 并破坏其细粒度去 噪,而是根据整个视频潜在 的全局上下文调制 。这 是通过将 视为查询, 视为残余交叉注意力块中的键 和值来实现:
zr
za
zv zr
zr zv
(7)
zrupdated
Qr
= z + Cross-Attn(Q , K , V ),
r r vv
= z W ,K = z W ,V = z W .
rr
Q v vv
K v vv
V
由此产生的视觉知情参考音频潜在 会被置于噪 声音频潜在 之前(如第3.2.2节所述),使音频生成
能够基于视觉基础的全局⻛格进行条件。这种解耦设计 带来了一个关键优势:将全局⻛格注入限制在参考潜在 变量,防止整体⻛格一致性与精确帧间时间对⻬之间的 干扰,保持最终音频生成的稳定性和保真度。
zrupdated
za,t
3.4. 同步增强型CFG
虽然无分类器指导(CFG)是一种强大的条件生成技 术,但其在音视频合成中的标准应用未能明确放大模态 间的关键对应关系。为此,我们引入了同步 增强型
(Synchronization-Enhance,简称SyncCFG), 这是一种新颖方案,将制导机制重新利用,专⻔针对并 强制执行音视频同步。我们的方法利用了在跨任务培训 中获得的双重能力⸺联合生成和音频视频驱动的合成 ⸺来增强对⻬信号。
3.4.1. 标准指导限制分析
之前工作中使用的标准CFG表述 [35] 用于加强文本提示 的条件 c:
c~ = c^θ(zv,t, za,t, ∅c) + s(c^θ(zv,t, za,t, c) − c^θ(zv,t, za,t, ∅c)). (8)
在这里,指导将去噪过程从无条件(无文本 )预测推 向与文本提示 对⻬的预测。
∅c c
标准CFG的主要局限在于其指导仅针对文本遵循。指导 向量通过对比文本条件输出与无条件文本输出计算得 出,专⻔强化输出与提示词的匹配程度。然而,这一过 程与音频和视频之间的内部一致性是中立的。它没有提 供隔离或放大两股流之间关键 同步 信号的机制。
3.4.2. 视频导引的同步CFG表述
为了明确计算增强对⻬的方向,我们旨在隔离由音频引 起的视觉动态。我们的核心⻅解是设计 一个更有意义的 负锚点 ,代表一个静态基线⸺在没有声音的情况下视 频应呈现的样子。例如,对于一个说话的人,静音音轨 的正确视频应该是一个静止的脸,嘴巴闭合。
我们通过创建一个“静音音频”负锚来实现这一点。我们 利用模型中以音频驱动的路径预测视频潜在噪声,条件 为“静音”音频输入, 。最终的预测 ,代表模型对该视觉静态场景的期望。 视频噪声 的导向预测随后被表述为:
zv,tzan,u0ll c^θ (z , z )
driven v,t a,0
null
c~v
(9)
c~v = c^θ (z , z )+
driven v,t a,0
null
s ( (z , z ) − (z , z )).
v c^θ
joint v,t a,t c^θ
driven v,t a,0
null
减法项分离出与音频直接相关的具体视觉变化⸺如嘴 巴动作或物体撞击。通过放大这种差异,SyncCFG 特别 增强了声音与运动之间的同步。
3.4.3. 音频指导的同步CFG表述
同样,在音频指导方面,我们设计了基于零视频的负锚 来隔离运动驱动的声音。利用“静态视频”潜在 ,我 们预测一个基线音频信号 ,代表静止场 景的环境声,因为视频内容是静态的。音频噪声 的导 向预测随后被表述为:
zvn,u0ll
c^θ (z , z )
driven
v,0
null a,t
c~a
(10)
c~a = c^θ (z , z )+
driven
v,0
null a,t
s ( (z , z ) − (z , z )).
a c^θ
joint v,t a,t c^θdriven vn,u0ll a,t

图5。Harmony与最先进方法(包括宇宙1 [50] 和Ovi [35]之间的定性比较。
这种方法将CFG从通用的条件放大器转变为有针对性的 机制,有效地实现了细粒度的音视频对应关系。
4. Experiments
4.1. 实验环境
数据集与训练。 我们的模型基于超过400万个视听片段 的多样化语料库训练,涵盖人类语音和环境声音。数据 汇总自公开来源,如OpenHumanoid [31]、 AudioCaps [28]和WavCaps [36],并辅以我们精心策 划的高质量收藏。所有数据均使用双子座 [12]进行统一 注释。我们的培训遵循三阶段课程:(1)对所有音频数 据进行基础音频预训练,(2)利用多语语音数据进行 音色解缠微调,以及(3)最终的跨任务联合视听训 练。视频分支初始化自 Wan2.2 [49]。最终的联合阶段 训练可进行10,000次迭代,批次大小为128次,学习率 为1e-5。补充材料中提供了全面的数据集列表、数据处 理细节和完整的训练超参数。
和谐⸺效益与指标。 为了促进严格评估,我们推出了 Harmony-Bench,这是一个包含150个测试用例的新 基准,旨在评估核心视听生成能力。它被结构化为三个 50条子集,复杂度逐渐增加:
环境音视频: 利用AL生成的场景,并以音频和 视频字幕为条件,评估非语音声音的时间对⻬情 况。 演讲视频: 根据真实世界和合成的多语言数据混 合,主要基于文字记录,评估对口型和语音质 量。
复杂场景(环境音+语音): 测试模型在复杂场 景中生成和同步同时出现的语音与环境声音的能 力,使用完整的多模态提示。
我们通过一套全面的自动化指标来评估绩效。视频方 面,我们测量美学质量(aesthetic-predictor-v25)、影像质量(MUSIQ)、动态度(RAFT)、运动平 滑性和身份一致性(DINOv3)。音频方面,我们报告 AudioBox-Aesthetics(PQ、PC、CE、CU)、WER (Whisper-Large-v3)和IB-A评分。对于AV-Sync, 我们使用口型同步指标(Sync-C、Sync-D)和整体一 致性(IB评分)。关于基准构建和度量实现的更多细节 ⻅附录。
4.2. 音视频生成的比较
为评估模型性能,我们将其与三种数据集(环境声视 频、语音视频和复杂场景)的先进音视频生成方法进行 比较,包括MM-扩散 [42]、JavisDIT [34]、 Universe-1 [50]和Ovi [35]。定量结果⻅第2⻚。我们 的模型Harmony展现出高度竞争力的性能,在视频质量 (如自动对视、双向、内标)和音频保真度(如PC、 PQ)方面均达到最先进或相当的成绩。最显著的是,其 主要优势在于视听同步。Harmony在关键同步指标上显 著优于所有基线,获得了最高的Sync-C得分5.61和最低 (最佳)Sync-D得分7.53。这一时间对⻬的显著提升直 接验证了我们提出的跨任务协同机制在增强跨模态一致 性方面的有效性。
我们在图5中提供了与宇宙1和Ovi的定性比较。在对话 头像(左)中,两者都是

表2。与环境声视频、语音视频和复杂场景视频生成均值的先进方法进行 定量比较 。我们评估性能分为三个类别:视 频质量、音频保真度和视听同步。最佳成绩以 加粗显示,次优表现被 划线。如需更全面和详细的评估,请参阅补充 资料。由于MM-Diffusion是一个无条件生成模型,某些指标无法生成。
图6。可视化音频到视频的逐帧交叉注意力映射,使音 频能够准确捕捉视频中的声音源。
其他竞争方法无法实现同步的唇部动作。对于音乐驱动 的案例(右图),它们的局限性依然存在:UniVerse-1 产生无关紧要的噪声,而 Ovi 产生的音频虽然音乐上正 确,但动态性较低⸺这一点也反映在其更简单的波形 上。从视觉上看,这两种方法都能生成最小动态的视 频。相比之下,我们的和声生成的是流畅的视频,展示 一个人弹奏曼陀林的动作与丰富的相应音乐动态同步, 这从更复杂的音频波形中可⻅一斑。
4.3. 跨模态注意力的可视化
为了验证我们逐帧交叉注意力机制的有效性,我们可视 化了音频转视频模块中的注意力映射。如图6所示,当 合成人类语音时,模型会精确地将注意力定位在说话者 的口腔区域。值得注意的是,在多个个体的场景中,我 们的模型能够区分他们,专注于主动说话者。这种能力 还延伸到自然声音,模型能够准确识别主要声音源(例 如动物),同时关注环境环境声音,如猫的雨声和鳄⻥ 案例中的⻦鸣。这些可视化整体强调了我们模型实现细 粒度表现的卓越能力
表3。对和谐核心组件的消融研究。我们从基线开始,逐 步添加每个模块:全局-局部解耦交互模块(GLDI)、 RoPE 对⻬(RoPE)、跨任务协同(CTS)和同步增强 CFG(SyncCFG)。注意,该实验是在人声数据集上评 估的;因此,与表2的同步结果不同。
以及情境感知的视听对⻬。
4.4. 消融研究
我们进行全面的消融研究以验证核心成分,结果⻅标签 3。本研究中,我们对所有磨减模型在人类语音数据集上 进行训练,并评估它们的视听对⻬情况。我们的基线模 型用标准的全局交叉注意力机制取代了拟议的全局-局部 解耦交互(GLDI)模块,类似于Ovi [35],并且训练时 不进行跨任务协同(CTS)。如表所示,逐步整合我们 的贡献会带来持续的改进。首先,引入GLDI模块展示了 局部与全局相互作用解耦的好处。这一点还通过RoPE对 ⻬进一步增强,有效解决时间尺度不匹配并提升细粒度 同步(Sync-C从4.29提升到4.80)。随后,跨任务协 同(CTS)训练策略进一步完善了模型的对⻬能力。最 后,在推断过程中应用同步增强型CFG(SyncCFG)能 带来最显著的性能提升,将Sync-C从5.09提升至 6.51。这一系统性的改进验证了Harmony的每个组件对 于实现最先进的视听同步性能至关重要。

5. Conclusion
1. [1] Andreas Blattmann, Tim Dockhorn, Sumith Kulal, Daniel Mendelevitch, Maciej Kilian, Dominik Lorenz, Yam Levi, Zion English, Vikram Voleti, Adam Letts, et al. Stable video diffusion: Scaling latent video diffusion models to large datasets. arXiv preprint arXiv:2311.15127, 2023. 3
2. [2] Honglie Chen, Weidi Xie, Andrea Vedaldi, and Andrew Zisserman. Vggsound: A large-scale audio-visual dataset. In ICASSP 2020-2020 IEEE International Conference on Acoustics, Speech and Signal Processing (ICASSP), pages 721–725. IEEE, 2020. 12 3. [3] Yushen Chen, Zhikang Niu, Ziyang Ma, Keqi Deng, Chunhui Wang, Jian Zhao, Kai Yu, and Xie Chen. F5-its: A fairy-taler that fakes fluent and faithful speech with
flow matching. arXiv preprint arXiv:2410.06885, 2024. 4 4. [4] Yinan Chen, Jiangning Zhang, Teng Hu, Yuxiang Zeng, Zhucun Xue, Qingdong He, Chengjie Wang, Yong Liu, Xiaobin Hu, and Shuicheng Yan. Ivebench: Modern benchmark suite for instruction-guided video editing assessment. arXiv preprint arXiv:2510.11647, 2025. 3 5. [5] Ho Kei Cheng, Masato Ishii, Akio Hayakawa, Takashi Shibuya, Alexander Schwing, and Yuki Mitsufuji. Mmaudio: Taming multimodal joint training for highquality video-to-audio synt-
hesis. In Proceedings of the Computer Vision and Pattern Recognition Conference, pages 28901–28911, 2025. 2, 4, 5, 16 6. [6] Hyung Won Chung, Noah Constant, Xavier Garcia, Adam Roberts, Yi Tay, Sharan Narang, and Orhan Firat. Unimax: Fairer and more effective language sampling for large-scale multilingual pretraining. arXiv preprint arXiv:2304.09151, 2023. 4
在这项工作中,我们提出了Harmony,一种新颖的框架,旨在解决生成模型中的视听同步差距。我们发现这一差距 源于关键方法论缺陷:对应漂移、全局⻛格与局部时间之间的架构冲突,以及标准CFG在跨模态对⻬方面的局限性。 为了解决这些问题,Harmony引入了三个核心组成部分。跨任务协同训练能够建立坚实的对⻬先决,以抵消漂移。 全局-局部解耦模块通过分别处理样式和时序来解决架构冲突。最后,我们创新的同步增强CFG(SyncCFG)提供了 在推断过程中放大比对信号的显式机制。我们的实验验证了Harmony在音视频同步方面建立了新的尖端技术,比单 纯放大模型更有效。我们相信这项工作为新一代易于接近且高度契合的视听模型奠定了坚实基础。
7. [7] Joon Son Chung and Andrew Zisserman. Out of time: automated lip sync in the wild. In Asian conference on computer vision, pages 251–263. Springer, 2016. 14 8. [8] Google DeepMind. Veo3. https://deepmind.google/models/veo/, 2025. 2 9. [9] Konstantinos Drossos, Samuel Lipping, and Tuomas Virtanen. Clotho: An audio captioning dataset. In ICASSP 2020-2020 IEEE International Conference on Acoustics, Speech and Signal Processing (ICASSP), pages 736740. IEEE, 2020. 12 10. [10] Rohit Girdhar, Alaae-
ldin El-Nouby, Zhuang Liu, Mannot Singh, Kalyan Vasudev Alwala, Armand Joulin, and Ishan Misra. Imagebind: One embedding space to bind them all. In Proceedings of the IEEE/CVF conference on computer vision and pattern recognition, pages 15180–15190, 2023. 14 11. [11] Ian J. Goodfellow, Jean Pouget-Abadie, Mehdi Mirza, Bing Xu, David Warde-Farley, Sherjil Ozair, Aaron Courville, and Yoshua Bengio. Generative adversarial nets. In NeurIPS, 2014. 3 12. [12] Google. Gemini. https://gemini.google.com/, -
2025. 7, 12
致谢
本工作由腾讯魂源支持。感谢组⻓袁周和陆清林的指导。我们也感谢余振涛、张国正、周正光、张有良、陈怡、周子 祥和梁森在数据和技术支持方面的帮助。

13. [13] Yuwei Guo, Ceyuan Yang, Anyi Rao, Zhengyang Liang, Yaohui Wang, Yu Qiao, Maneesh Agrawala, Dahua Lin, and Bo Dai. Animatediff: Animate your personalized text-to-image diffusion models without specific tuning. In ICLR, 2024. 3 14. [14] Moayed Haji-Ali, Willi Menapace, Aliaksandr Siarohin, Ivan Skorokhodov, Alper Canberk, Kwot Sin Lee, Vicente Ordonez, and Sergey Tulyakov. Av-link: Temporally-aligned diffusion features for cross-modal audio-video generation. arXiv preprint arXiv:2412.15191-
, 2024. 2 15. [15] Haorui He, Zengqiang Shang, Chaoen Wang, Xuyuan Li, Yicheng Gu, Hua Hua, Liwei Liu, Chen Yang, Jiaqi Li, Peiyang Shi, et al. Emilia: An extensive, multilingual, and diverse speech dataset for large-scale speech generation. In 2024 IEEE Spoken Language Technology Workshop (SLT), pages 885–890. IEEE, 2024. 12 16. [16] Jonathan Ho and Tim Salimans. Classifier-free diffusion guidance. arXiv preprint arXiv:2207.12598, 2022. 2
References
17. [17] Jonathan Ho, Ajay Jain, and Pieter Abbeel. Denoising diffusion probabilistic models. NeurIPS, 2020. 3
18. [18] Teng Hu, Jiangning Zhang, Ran Yi, Yating Wang, Hongrui Huang, Jieyu Weng, Yabiao Wang, and Lizhuang Ma. Motionmaster: Training-free camera motion transfer for video generation. arXiv preprint arXiv:2404.15789, 2024. 3 19. [19] Teng Hu, Zhentao Yu, Zhengguang Zhou, Sen Liang, Yuan Zhou, Qin Lin, and Qinglin Lu. Hunyancustom: A multimodal-driven architecture for customized video generation. arXiv preprint arXiv:2505.04512, 2025. 3
20. [20] Teng Hu, Zhentao Yu, Zhengguang Zhou, Jiangning Zhang, Yuan Zhou, Qinglin Lu, and Ran Yi. Polyvivid: Vivid multi-subject video generation with cross-modal interaction and enhancement. arXiv preprint arXiv:2506.07848, 2025. 3

[21] Teng Hu, Jiangning Zhang, Zihan Su, and Ran Yi. Ultragen: High-resolution video generation with hierarchical attention. arXiv preprint arXiv:2510.18775, 2025. 3
[22] Teng Hu, Jiangning Zhang, Ran Yi, Hongrui Huang, Yabiao Wang, and Lizhuang Ma. High-efficient diffusion model fine-tuning with progressive sparse low-rank adaptation. In 13th International Conference on Learning Representations, ICLR 2025, pages 92066–92078. International Conference on Learning Representations, ICLR, 2025. 3 [23] Teng Hu, Jiangning Zhang, Ran Yi, Jieyu Weng, Yabiao Wang, Xianfang Zeng, Zhuocun Xue, and Lizhuang Ma. Improving autoregressive visual generation with cluster-orien-
ted token prediction. In
Proceedings of the Computer Vision and Pattern Recognition Conference, pages 9351–9360, 2025. 3
[24] Ziqi Huang, Yinan He, Jiashuo Yu, Fan Zhang, Chenyang Si, Yuming Jiang, Yuanhan Zhang, Tianxing Wu, Qingyang Jin, Nattapol Chanpaisit, et al. Vbench: Comprehensive benchmark suite for video generative models. In Proceedings of the IEEE/CVF Conference on Computer Vision and Pattern Recognition, pages 21807–21818, 2024. 13 [25] Vladimir Iashin, Weidi Xie, Esa Rahtu, and Andrew Zisserman. Synchformer: Efficient synchronization from sparse cues. In ICASSP 2024-2024 IEEE International Conference o-
n Acoustics, Speech and Signal Processing (ICASSP), pages 5325–5329. IEEE, 2024. 14 [26] Masato Ishii, Akio Hayakawa, Takashi Shibuya, and Yuki Mitsufuji. A simple but strong baseline for sounding video generation: Effective adaptation of audio and video diffusion models for joint generation. arXiv preprint arXiv:2409.17550, 2024. 2, 3
[27] Junjie Ke, Qifei Wang, Yilin Wang, Peyman Milanfar, and Feng Yang. Musiq: Multi-scale image quality transformer. In Proceedings of the IEEE/CVF international conference on computer vision, pages 51485157, 2021. 13 [28] Chris Dongjoo Kim, Byeongchang Kim, Hyunmin Lee, and Gunhee Kim. Audiocaps: Generating captions for audios in the wild. In Proceedings of the 2019 Conference of the North American Chapter of the Association for Computational Linguistics: Human Language Technologies, Volume 1 (L-
ong and Short Papers), pages 119–132, 2019. 7, 12 [29] Weijie Kong, Qi Tian, Zijian Zhang, Rox Min, Zuozhuo Dai, Jin Zhou, Jiangfeng Xiong, Xin Li, Bo Wu, Jianwei Zhang, et al. Hunyuanvideo: A systematic framework for large video generative models. arXiv preprint arXiv:2412.03603, 2024. 3
[30] Mingi Kwon, Joonghyuk Shin, Jaeseok Jung, Jaesik Park, and Youngjung Uh. Jam-flow: Joint audiomotion synthesis with flow matching. arXiv preprint arXiv:2506.23552, 2025. 2 [31] Hui Li, Mingwang Xu, Yun Zhan, Shan Mu, Jiaye Li, Kaihui Cheng, Yuxuan Chen, Tan Chen, Mao Ye, Jingdong Wang, et al. Openhumanvid: A large-scale high-quality dataset for enhancing human-centric
video generation. In Proceedings of the Computer Vision and Pattern Recognition Conference, pages 77527762, 2025. 7, 12 [32] Sen Liang, Zhen Tao Yu, Zhengguang Zhou, Teng Hu, Hongmei Wang, Yi Chen, Qin Lin, Yuan Zhou, Xin Li, Qinglin Lu, et al. Omniv2v: Versatile video generation and editing via dynamic content manipulation. arXiv preprint arXiv:2506.01801, 2025. 3
[33] Bin Lin, Yungang Ge, Xinhua Cheng, Zongjian Li, Bin Zhu, Shaodong Wang, Xianyi He, Yang Ye, Shanghai Yuan, Lihuan Chen, et al. Open-sora plan: Open-source large video generation model. arXiv preprint arXiv:2412.00131, 2024. 3
[34] Kai Liu, Wei Li, Lai Chen, Shengqiong Wu, Yanhao Zheng, Jiayi Ji, Fan Zhou, Rongxin Jiang, Jiebo Luo, Hao Fei, et al. Javisdit: Joint audio-video diffusion transformer with hierarchical spatio-temporal prior synchronization. arXiv preprint arXiv:2503.23377, 2025. 2, 3, 4, 5, 7, 8, 12, 13, 14, 15 [35] Chetwin Low, Weimin Wang, and Calder Katyal. Ovi: Twin backbone cross-modal fusion for audio-video generation. arXiv preprint arXiv:2510.01284, 2025. 2, 3, 4, 5, 6, 7, 8, 13, 14, 15 [36] Xinhao M-
ei, Chutong Meng, Haohe Liu, Qiuqiang Kong, Tom Ko, Chengqi Zhao, Mark D Plumbley, Yuexian Zou, and Wenwu Wang. Wavcaps: A chatgpt-assisted weakly-labelled audio captioning dataset for audio-language multimodal research. IEEE/ACM Transactions on Audio, Speech, and Language Processing, 32:3339–3354, 2024. 7, 12 [37] Openai. Sora2. https://openai.com/zh-Hans-CN/index/sora-2/, 2025. 2 [38] Ziqiao Peng, Jiwen Liu, Haoxian Zhang, Xiaoqiang Liu, Songlin Tang, Pengfei Wan, Di Zhang, Hongyan Liu, and Jun -
He. Omnisync: Towards universal lip synchronization via diffusion transformers. arXiv preprint arXiv:2505.21448, 2025. 2

[39] Dustin Podell, Zion English, Kyle Lacey, Andreas Blattmann, Tim Dockhorn, Jonas Müller, Joe Penna, and Robin Rombach. SDXL: Improving latent diffusion models for high-resolution image synthesis. In ICLR, 2024. 3 [40] Alec Radford, Jong Wook Kim, Tao Xu, Greg Brockman, Christine McLeavey, and Ilya Sutskever. Robust speech recognition via large-scale weak supervision. In International conference on machine learning, pages 28492–28518. PMLR, 2023. 14 [41] Robin Rombach, Andreas Blattmann, Domin-
ik Lorenz, Patrick Esser, and Björn Ommer. High-resolution image synthesis with latent diffusion models. In CVPR, 2022. 3 [42] Ludan Ruan, Yiyang Ma, Huan Yang, Huiguo He, Bei Liu, Jianlong Fu, Nicholas Jing Yuan, Qin Jin, and Baining Guo. Mm-diffusion: Learning multi-modal diffusion models for joint audio and video generation. In
Proceedings of the IEEE/CVF Conference on Computer Vision and Pattern Recognition, pages 10219–10228, 2023. 2, 3, 7, 8, 13, 14, 15 [43] Sizhe Shan, Qiulin Li, Yutao Cui, Miles Yang, Yuehai Wang, Qun Yang, Jin Zhou, and Zhao Zhong. Hunyuanvideofoley: Multimodal diffusion with representation alignment for high-fidelity foley audio generation. arXiv preprint arXiv:2508.16930, 2025. 2
[44] Orliane Siméoni, Huy V. Vo, Maximilian Seitzer, Federico Baldassarre, Maxime Oquab, Cijo Jose, Vasil Khalidov, Marc Szafraniec, Seungeun Yi, Michaël Ramamonjisoa,

Francisco Massa, Daniel Haziza, Luca Wehrstedt, Jianyuan Wang, Timothée Darce, Théo Moutakanni, Leonel Sentana, Claire Roberts, Andrea Vedrali, Jamie Tolan, John Brandt, Camille Couprie, Julien Mairal, Hervé Jégou, Patrick Labatut, and Piotr Bojanowski. DINOv3, 2025. 13 [45] Jianlin Su, Murtabha Ahmed, Yu Lu, Shengfeng Pan, Wen Bo, and Yunfeng Liu. Rofomer: Enhanced transformer with rotary position embedding. Neurocomputing, 568:127063, 2024. 5 [46] Zachary Teed and Jia Deng. Raft: Recurrent all--
pairs field transforms for optical flow. In European conference on computer vision, pages 402–419. Springer, 2020. 13 [47] Andros Tjandra, Yi-Chiao Wu, Baishan Guo, John Hoffman, Brian Ellis, Apoorv Vyas, Bowen Shi, Sanyuan Chen, Matt Le, Nick Zacharov, et al. Meta audiobox aesthetics: Unified automatic quality assessment for speech, music, and sound. arXiv preprint arXiv:2502.05139, 2025. 13 [48] Aesthetic Predictor V2.5. Aesthetic predictor v2.5. https://github.com/discus0434/aesthetic-predictor-
v2-5, 2024. 13 [49] Ang Wang, Baole Ai, and et al Bin Wen. Wan: Open and advanced large-scale video generative models. arXiv preprint arXiv:2503.20314, 2025. 3, 4, 7, 12
[50] Duomin Wang, Wei Zuo, Aojie Li, Ling-Hao Chen, Xinyao Liao, Deyu Zhou, Zixin Yin, Xili Dai, Daxin Jiang, and Gang Yu. Universe-1: Unified audio-video generation via stitching of experts. arXiv preprint arXiv:2509.06155, 2025. 2, 3, 7, 8, 12, 13, 14, 15 [51] Kai Wang, Shijian Deng, Jing Shi, Dimitrios Hatzinakos, and Yapeng Tian. Av-dit: Taming image diffusion transformers for efficient joint audio and video generation. In Proceedings of the 33rd ACM International Conference on Multimedia, pag-
es 10486–10495, 2025. 3
[52] Xihua Wang, Ruihua Song, Chongxuan Li, Xin Cheng, Boyuan Li, Yihan Wu, Yuyue Wang, Hongteng Xu, and Yunfeng Wang. Animate and sound an image. In Proceedings of the Computer Vision and Pattern Recognition Conference, pages 23369–23378, 2025. 2 [53] Zhouxia Wang, Ziyang Yuan, Xintao Wang, Yaowei Li, Tianshui Chen, Menghan Xia, Ping Luo, and Ying Shan. Motionctrl: A unified and flexible motion controller for video generation. In ACM SIGGRAPH 2024 Conference Papers, pages 1–11, 2024. 3
[54] Zafhou Xing, Yingqing He, Zeyue Tian, Xintao Wang, and Qifeng Chen. Seeing and hearing: Opendomain visual-audio generation with diffusion latent aligners. In Proceedings of the IEEE/CVF Conference on Computer Vision and Pattern Recognition, pages 7151–7161, 2024. 3
[55] Zhucun Xue, Jiangning Zhang, Teng Hu, Haoyang He, Yinan Chen, Yuxuan Cai, Yabiao Wang, Chengjie Wang, Yong Liu, Xiangtai Li, et al. Ultravideo: High-quality uhd video dataset with comprehensive captions. arXiv preprint arXiv:2506.13691, 2025. 3
[56] Zhuoyi Yang, Jiayan Teng, Wendi Zheng, Ming Ding, Shiyu Huang, Jiazhe Xu, Yuanming Yang, Wenyi Hong, Xiaohan Zhang, Guanyu Feng, et al. Cogvideo: Text-to-video diffusion models with an expert transformer. arXiv preprint arXiv:2408.06072, 2024. 3
[57] Youliang Zhang, Zhaoyang Li, Duomin Wang, Jiahe Zhang, Deyu Zhou, Zixin Yin, Xili Dai, Gang Yu, and Xiu Li. Speakervid-5m: A large-scale high-quality dataset for audio-visual dyadic interactive human generation. arXiv preprint arXiv:2507.09862, 2025. 12

In this supplementary material, we provide more implementation details, experiment results, including:
• Implementation details (Sec. B); • Benchmark settings (Sec. C); • More quantitative comparisons (Sec. D); • More qualitative comparisons (Sec. E); • Details about voice clone (Sec. F); • Audio-driven performance; (Sec. G); • More qualitative results (Sec. H);
We also provide a demo video and project page in https://sjtuplayer.github.io/projects/Harmony, where the demo video shows the powerful and comprehensive ability of our model in audio-video generation and the project page provides a comparison between the existing methods.
B. 实施细节
数据集。我们的培训语料库从多样的公共和新收集的来 源中精心整理,涵盖人类语音和环境声音。
1) 人类语音数据:我们汇总了多个开源数据集中的人 声数据,包括TTS专用的Emilia数据集 [15],以及视听 语料库如OpenHumanVid [31] 和SpeakerVid [57]。为 确保高质量对⻬,我们采用了视听一致性评分模型过滤 该集合,结果生成了高质量的200万个视频片段子集, 每个视频片段时⻓为3-10秒。随后我们利用Gemini [12] 进行自动注释,生成ASR转录、描述性视频字幕以 及片段中背景音的字幕。
2) 环境声音数据:环境声音方面,我们利用多个成熟 的公开数据集,包括AudioCaps [28] (~128小时,手 动字幕)、Clotho [9] (~31小时,手动字幕)和 WavCaps [36] (~7600小时,自动字幕)。鉴于
VGGSound数据集 [2]视觉质量常常不佳,我们补充了 额外200万段富含环境声音的视听片段。这些新片段随 后通过Gemini [12] 进行注释,生成相应的音频和视频 字幕。
训练策略。 我们的训练协议分为三个不同阶段,以确保 稳定的收敛和高保真度的生成。对于视频分支,我们用 预训练权重的 Wan2.2-5B [49]初始化模型。音频模型 在最终联合训练前会经过专⻔的两阶段预训练。
第一阶段:基础音频预培训。 音频模型首先在我们人类 语音和环境声音数据集的1:1平衡混合上预训练。我们 训练10万次迭代,全球批次规模为1536,我们
最⻓时⻓为10秒的音频片段。在此阶段,参考音频是从 真实片段中随机选取的1-3秒片段。这一阶段使模型能够 学习复制所提供参考音频中的音色和内容。
第二阶段:音色解开纠缠微调。 为了使模型能够将一般 声学特征与特定内容分开,我们通过不匹配的参考和目 标内容进行微调。对于人类语音,我们使用同一说话者 的交叉发话数据。对于环境音效,我们采样的是与地面 真实目标同一⻓录音中不重叠的参考片段。这种设置迫 使模型从参考中提取不变的声学特征⸺无论是说话者 的声音还是环境⸺并将其应用于提示或文字稿中规定 的新内容。我们会在这种配置下进行额外2万次迭代的微 调。
第三阶段:跨任务视听训练。 最后,我们进入跨任务联 合训练阶段。完整的视听模型训练了1万次迭代,批次规 模为128次,同样采用了人类语音和环境声音数据的1:1 混合。在所有训练阶段,我们对所有模型参数采用1e-5 的恒定学习率。
超参数。 在最终的跨任务训练阶段,我们的协同损失 (等式3)的平衡权重设置为 和 。该 模型使用流匹配目标进行训练,目标位移为5。在推断方 面,我们使用40个积分步骤,视频采用无分类器指导 (CFG)尺度的 ,音频则采用 。采样器 的移位参数也保持在5。
λv = 0.1 λa = 0.3
sv = 3 sa = 2
C. 基准设置
C.1. Harmony-Bench数据集
现有的视听生成基准不足以进行全面评估。JavisBench [34] 缺乏对人类语音的评估,而 Verse-Bench [50] 则 受限于低质量标签和对视听同步的有限关注。为了实现 更严谨和全面的评估,我们构建并引入 了HarmonyBench。这个新基准测试包含150个精心设计的测试用 例,分为三个逐步具有挑战性的子集(每个50个项 目)。它专⻔设计用于理清并系统评估模型在多样复杂 声学场景下的语义一致性和时间同步性。
• 环境声视频生成。 该子集旨在评估模型生成与 相应视觉动态精确同步的非语音声学事件的能 力。50个测试用例采用合成构建的场景,使得创 建复杂的视听交互成为可能

表4。人 声集 与最先进的联合视听生成模型的比较。我们评估性能分为三个类别:视频质量、音频保真度和视听同 步。最佳成绩以 加粗显示,次优表现被 划线。
表5。环境集与最先进的联合视听生成模型 的比较 。我们评估性能分为三个类别:视频质量、音频保真度和视听同 步。最佳成绩以 加粗显示,次优表现被 划线。
非常适合在真实世界录制中捕捉或分离。该模型基于详 细 audio_caption 和独立 video_caption的 。评 估重点在于音频保真度、时间同步性以及生成的音频与 视觉事件之间的语义一致性。
语音视频生成。 这个包含50条的子集评估语音合 成和口型同步的保真度。为了检验其稳健性和多 语言泛化性,它包含了25个真实世界样本和25个 AI合成样本,样本由英语
(spoken_word.en)和中文 spoken_word.zh()两种转录本驱动。 video_caption 刻意保持简约(例如“一个男 人在说话”),迫使模特直接从转录内容中推导出 唇形和面部表情。评估关键标准包括语音清晰 度、自然性和口型音频同步的精准度。
复杂场景:环境+语音。 作为最具挑战性的场
景,该子集评估了模型在统一复杂场景中同时生 成和同步语音和环境声的能力。50个测试用例中 的每个都构建了共发生的视听事件,需要模型处 理多种输入的组合:一个转录
(spoken_word.en)、一个环境声音描述 (audio_caption)、以及一个视觉场景描述 (video_caption)。评估重点考察了模型在 声源分离和混合方面的能力(例如,在背景关⻔ 声中保持语音清晰度)。此外,它还评估多模态 的时间对⻬:语音必须与唇部动作同步,而环境 声音则必须同步
与对应的视觉动作对⻬。
为了对该基准进行全面评估,我们采用了一套自动化指 标,旨在评估三个关键方面:1)视觉质量与一致性, 2)音频保真度,3)视听同步与一致性。
C.2. 评估指标
为了全面评估Harmony-Bench上的模型性能,我们采 用一套自动化指标,针对视听质量的三个核心方面。
视觉质量与连贯性。 我们通过以下指标评估生成视频的 视觉质量和时间一致性:
美学和影像质量。我们分别使用预训练的美学预 测器v2-5[48]和MUSIQ[27]模型评估美学质量 (AQ)和成像质量(IQ)。
运动动力学。 时间相干性通过 动态度(DD) 和 运动平滑度(MS)[24]来评估。我们采用RAFT 技术[46] 量化运动幅度,并利用预训练的视频帧 插值模型评估运动平滑性。 身份一致性(ID)。 对于特定主题生成,我们通 过计算参考图像与所有生成帧之间的特征相似度 的平均DINOV3[44] 来衡量智能设计。
音频的保真度和质量。 生成音频的质量通过以下 方式衡量:
AudioBox-美学。[47]我们利用该模型在 四个维度评估感知质量:生产质量 (PQ)、生产复杂性(PC),

表6。复杂 集与 最先进的联合视听生成模型的比较。我们评估性能分为三个类别:视频质量、音频保真度和视听同 步。最佳成绩以 加粗显示,次优表现被 划线。
表7。中文语音与最先进模型 的比较 ,重点关注音频保 真度(WER)和视听同步。最佳成绩以 加粗显示,次优 表现被 划线。
内容享受(CE)和内容实用性(CU)。
• 词误率(WER)。 对于语音合成,准确率通过 WER来衡量。我们使用Whisper-large-v3[40] 转录生成的音频,并将其与真实实质的文字稿进 行比较。 • IB-A评分。 生成音频与文本提示词之间的语义 对⻬通过IB-A评分[10]进行量化。
视听同步。联合发电的关键能力通过同步评估,满足
图7。关于人类语音视频生成的更多比较。
里奇:
• 同步-C和同步-D。 对口型的准确性是通过这两 个既定指标明确衡量的[7]。
• DeSync评分。 该分数由Synchformer预测 [25],量化了音频和视频流之间的时间错位(以 秒为单位)。
• ImageBind(IB)评分。[10],我们利用IB分 数通过计算它们各自特征嵌入的余弦相似度来评 估整体视听一致性。
D. 更多定量比较
本节将详细定量比较联合音视频生成的先进方法,包括 Ovi [35]、UniVerse-1 [50]、JavisDIT [34]和MM
Diffusion [42]。我们的评估涵盖多个具有挑战性的测试 集,环境声音和复杂音频场景的结果⻅表4–6。在这些 多样化的数据集中,我们的模型始终展现出卓越的性 能。一个关键观察是我们的模型在视频动态表现上优于 竞争对手。因为

图8。更多环境-声音视频生成的对比。
虽然UniVerse-1和Ovi有时能获得有利的身份距离 (ID)得分,但这通常是由于生成静态或近静态视频的 结果,帧对帧的身份性显得很高,但未能捕捉场景预期 的运动。关键是,我们的方法始终实现最低的词误率 (WER)和视听同步指标的最佳得分。这种高保真度、 强烈动态性和精确对⻬的结合,凸显了我们模型在为复 杂场景生成连贯且真实内容方面的稳健性。
此外,我们专⻔评估模型在专用中文口语测试集上的跨 语言能力,关键结果汇总于表7。结果凸显了显著的性能 差距。我们的模型实现了显著较低的WER,但同步评分 显著更好。值得注意的是,标准的WER指标并非完美优 化用于中文的分词化;因此,模型间的相对表现是最有意 义的指标。WER 和同步指标的显著提升强有力验证了我 们方法在跨语言视听语音生成方面的有效性和优越性。
E.更多定性比较
本节将进一步将我们的方法与最先进的方法进行定性比 较:Ovi [35]、UniVerse-1 [50]和 JavisDIT [34]。我 们聚焦于两个具有挑战性的场景:同步的人类语音和动 态环境音效。我们排除MM扩散 [42] ,因为它设计用于 无条件生成,因此无法直接比较。
《人类语言的比较》。如图7所示,我们的模型在视听语 音生成方面表现出优越性能。竞争方法如Ovi和 UniVerse-1往往产生静态或动态极少的视频帧,导致“头 部”效果,几乎没有自然移动。相比之下,我们的模型生 成的是高保真视频,动作流畅自然。配套音频清晰,最 重要的是与嘴唇动作精确同步,使输出更加连贯和可 信。
环境声音的比较。我们在图8中进一步评估了生成动态环 境声音的性能,其他方法的不足更为明显。JavisDIT在 这方面表现挣扎,视频质量低且音频不稳定;例如,在“枪 声”示例中,其生成的音频波形非常不规则,无法令人信 服地表现声学事件。UniVerse-1 和 Ovi 经常生成静态或 部分静态场景。一个明显的例子是“海浪”,主波保持冻 结,只有水面出现最小波动。这种缺乏动感又因视听同 步不佳而加剧,海浪拍打的声音与视觉内容不协调。与 此形成鲜明对比的是,我们的方法在各方面都表现出 色:能够生成高质量、动态且动态逼真的视频,合成音 频既高保真又与视觉事件精确同步,带来连贯且沉浸式 的视听体验。

F. 关于《声音克隆》的详细信息
在本节中,我们将进一步介绍模型的语音克隆能力,该 功能通过参考音频输入实现, 。该机制首先使用预训
练的音频VAE编码器处理包含所需语音音色的短参考音 频片段(通常为1-3秒), [5]。这产生了一个紧凑的潜 在表示, ,有效捕捉了说话者声音的唯一、时不变特
征,同时舍弃了原始的语音内容。如我们主要方法论所 述,在去噪过程的每一步,这个参考潜伏 会被加到噪 声目标音频潜 上。通过将MM-DiT条件反射为固定 参考潜,模型被引导基于转录本 的语音内容,合成目 标语音的新语音。
Ar
zr
zr
za,t
T3
为了定性验证该方法的有效性,我们在图9中提供了示 例。图示展示了我们的模型能够成功地将多种不同的语 音音色克隆到新生成的语音内容上。重要的是,这种高 保真声音克隆是
图9。我们模型中声音克隆结果的可视化。
在不降低生成视频视觉质量的情况下实现。嘴唇动作与 克隆音频保持精确同步,整体面部表情和视频连贯性保 持在高水平。这凸显了该模型能够将音频音色与其他世 代部分分离,从而实现在连贯的视听输出中实现强健的 语音克隆。
G. 音频驱动性能
正如我们主论文中详细说明的,我们的跨任务协同训练 策略是模型性能的基础。该策略的一个关键组成部分是 包含一个确定性、音频驱动的视频生成任务,由损耗项 表示。在训练过程中,该任务明确要求视频分支 生成以干净、无噪声音频潜 为条件的视频(即时间 步 的音频潜伏)。通过直接优化这一目标,我们 的模型具备在推断时执行高保真音频驱动视频合成的能 力,使其成为原生能力,而非自发能力。
Laudio
driven
za,0
ta = 0
为了展示这一本土能力的有效性,

我们在图10中展示了音频驱动视频生成的定性结果。图 中展示了仅从目标语音音频片段生成视频的示例。结果 展现出高质量的视觉效果,表现为自然的面部表情和连 贯的头部动作。更重要的是,唇部动作与输入语音的细 微差别精确同步,验证了我们训练方法所培养的强烈视 听对⻬。这证实了我们的跨任务协同策略不仅提升了联 合生成,还直接支持高保真、单模态驱动的应用。
H.更定性的结果
为了进一步展示模型的能力和稳健性,我们呈现了分为 三个关键领域的定性结果:生成高质量的人类语音视 频、呈现多样的艺术⻛格以及合成复杂的环境音。
更多关于人类语言的结果。 首先,我们展示了图中关于 生成人类语音视频的额外结果
图10。可视化我们模型中基于音频的结果。
URE(大学)11。这些例子突出了模型能够制作出高度 逼真的对话头像,拥有自然的面部表情和连贯的动作。 合成语音以清晰和自然的韵律为特征,捕捉了多种声 调。关键是,我们保持所有例子的精准口型同步,这对 于创造可信的人类语音至关重要。这些结果强化了我们 模型在生成高质量、高度同步的视听语音内容方面的核 心能力,涵盖多种身份。
多样的视觉⻛格。 除了写实主义,我们模型的一个关键 优势是能够生成涵盖多种艺术⻛格的视频内容。如图12 所示,我们的模型可以产生不同美学的输出,如迪士尼 ⻛格动画和传统水墨绘画。这些⻛格化的世代保持高质 量的视觉效果,特点是细节锐利、色彩鲜艳,以及与目 标美学保持一致的时间连贯运动。这展示了模型在捕捉 和表现复杂艺术属性方面的灵活性。

多样的环境音效。 我们的模型展现出卓越的能力,能够 产生广泛的环境声谱,超越了简单的环境噪声。如图13 所示,它可以产生多样且复杂的声学体验⸺从尖锐、打 击感十足的烟花爆发到音乐的结构化和声。关键是,每 个声音都以高保真度呈现,并与对应的视觉来源精确同 步。构建丰富且主题一致的听觉环境的能力,验证了我 们模型在增强整体视觉叙事方面的优势。
这些例子共同验证了我们模型的综合生成能力。从生成 高度同步的人类语音,到呈现多样的艺术⻛格,再到创 造丰富且具情境感知的环境音景,我们的模型展现了卓 越的多样性。掌握这些独特而互补的领域,凸显了其创 造高度表现力和沉浸感的视听内容潜力,突破了传统生 成方法的边界。

图11。更多关于人类语音视频生成的结果。

图12。多样化⻛格的语音-视频生成可视化。

图13。关于环境音视频生成的更多结果。

---

## Processing Information

- **Processing Library:** Zotero PDFWorker
- **Processing Date:** 2026-02-10T18:14:08.000Z
- **Text Length:** 32124 characters
- **Success:** Text extraction completed
- **PDF Library Used:** Zotero PDFWorker
- **Pages Processed:** unknown of unknown
