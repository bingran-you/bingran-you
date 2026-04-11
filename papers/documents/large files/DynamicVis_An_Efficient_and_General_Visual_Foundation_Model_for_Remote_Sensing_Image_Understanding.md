# PDF Document: Chen et al. - 2025 - DynamicVis An Efficient and General Visual Foundation Model for Remote Sensing Image Understanding.pdf

**File Path:** Chen et al. - 2025 - DynamicVis An Efficient and General Visual Foundation Model for Remote Sensing Image Understanding.pdf

**Processed Date:** 2026-02-10T18:17:21.959Z

**File Size:** 28302.46 KB

**Total Pages:** 27

**Extracted Pages:** 27

**PDF Library:** Zotero PDFWorker

**Attachment Item ID:** 2782

**Title:** DynamicVis: An Efficient and General Visual Foundation Model for Remote Sensing Image Understanding

**Collection:** Large Files

---

## Extracted Text Content

1
DynamicVis: An Efficient and General Visual Foundation
Model for Remote Sensing Image Understanding
Keyan Chen1, Chenyang Liu1, Bowen Chen1, Wenyuan Li2, Zhengxia Zou1, Zhenwei Shi⋆,1 Beihang University1 the University of Hong Kong2
Abstract—The advancement of remote sensing technology has significantly improved the spatial resolution of satellite imagery, facilitating more detailed visual representations for diverse interpretation tasks. However, existing methods exhibit limited generalization capabilities across varied remote sensing applications. While some contemporary foundation models demonstrate potential, they are hindered by insufficient crosstask adaptability and primarily process low-resolution imagery of restricte-
d sizes, thus failing to fully exploit high-resolution data or leverage comprehensive large-scene semantics. Crucially, remote sensing imagery differs fundamentally from natural images, as key foreground targets (e.g., maritime objects, artificial structures) often occupy minimal spatial proportions (∼1%) and exhibit sparse distributions. Efficiently modeling cross-task generalizable knowledge from lengthy 2D token sequences (∼100,000) poses a significant challenge yet remains critical for remote -
sensing image understanding. Motivated by the selective attention mechanisms inherent to the human visual system, we propose DynamicVis, a dynamic visual perception foundation model for remote sensing imagery. The framework integrates a novel dynamic region perception backbone based on the selective state space model, which strategically balances localized detail extraction with global contextual integration, enabling computationally efficient encoding of large-scale data while maintaining archite-
ctural scalability. To enhance cross-task knowledge learning, we introduce a multi-instance learning paradigm utilizing meta-embedding representations, trained on a million-scale dataset with region-level annotations. Extensive evaluations across nine downstream tasks, including scene classification, image retrieval, region classification, object detection, SAR instance segmentation, optical instance segmentation, building extraction, road segmentation, and change detection, demonstrate the model’-
s versatility. Experimental results indicate that DynamicVis achieves multi-level feature modeling with exceptional efficiency, processing 2048 × 2048 pixel images with 97 ms latency (6% of ViT’s) and 833 MB GPU memory consumption (3% of ViT’s). Moreover, the model surpasses Transformer-based baselines across benchmarks, achieving state-of-the-art performance in tasks requiring multi-granular visual analysis. Source code is available at https://github.com/KyanChen/DynamicVis.
Index Terms—Remote sensing image, foundation model, dynamic network, general model.
✦
1 Introduction
T
he rapid advancement of remote sensing technology has substantially enhanced the spatial and temporal resolution of satellite imagery, driving increased emphasis on high-resolution Earth observation capabilities [1–3]. These technological innovations deliver critical insights for diverse applications such as land use classification, urban infrastructure planning, and socioeconomic development analysis [4–7]. Consequently, the demand for precise and granular interpretation of remote sensing data ha-
s grown significantly across domains. Foundation models incorporating extensive remote sensing geographic knowledge could fulfill the heterogeneous requirements of downstream tasks by providing transferable prior knowledge while maintaining accuracy with minimal adaptation costs [8]. Nevertheless, current research reveals a critical gap in developing foundation models capable of delivering broadly applicable interpretative knowledge across diverse remote sensing applications [9]. Existing cross-ta-
sk foundation models remain scarce and predominantly process low-resolution imagery with limited image sizes, failing to exploit the rich informational potential of highresolution data and leverage the large-scene semantics [10]. These limitations induce knowledge degradation and reduced discriminative performance, particularly in tasks requiring fine-grained feature extraction (e.g., small object detection or localized detail analysis). For instance, while RSPrompter [11] achieves state-ofthe-art-
 instance-level discrimination through prompt learning and foundation priors, its applicability remains confined to specific tasks. Grounding DINO [12] scales its architecture using a 20
million-image dataset but achieves only a detection task. Similarly, RingMo [13] develops a remote sensing-optimized backbone via self-supervised training on 2 million 448 × 448 pixel images. SpectralGPT [14] employs progressive masked image modeling on 96 × 96 and 128 × 128 pixel multispectral data, yet both lack resolution scalability for detailed analysis. Despite the enhanced interpretative capabilities offered by high-resolution imagery, its adoption imposes significant computational burdens -
during training and deployment. Most contemporary foundation models rely on Transformer architectures, where the quadratic computational complexity of self-attention mechanisms (relative to input resolution) intensifies resource constraints [15, 16]. This scalability challenge is particularly acute for researchers using consumer-grade hardware, as training or fine-tuning high-resolution (∼ millions of pixels) models demands prohibitive memory and processing resources. Efforts to address these chal-
lenges have primarily focused on reducing the computational complexity of attention mechanisms through sparse token representations, categorized into two approaches: 1) visual token aggregation (spatial compression via convolution or clustering) [17–19], and 2) token resampling (sequence approximation via cross-attention) [20]. However, these methods face limitations, including excessive information compression, restricted parallelization, and elevated memory access costs [16, 21, 22]. A further l-
imitation arises from the predominant reliance on ViTs [15]. ViTs compress spatial data into channel dimensions through downsampling, typically mapping 16 × 16 image patches into channel space. While effective for natural imagery, its efficacy diminishes in remote sensing applications characterized by numer
arXiv:2503.16426v1 [cs.CV] 20 Mar 2025

2
tennis court storage tanks
solar farm crop field
Region Classification
Image Retrieval
Scene Classification
Optical Inst. Segmentation
SAR Inst. Segmentation
Tiny Ship Detection
Change Detection
Building Extraction
Road Segmentation
0
5
10
15
20
24
0 512 1024 1536 2048 2560 3072 3584 4096
GPU Memory Usage (GB)
Resolution
ViTs SSMs DynamicVis
c) GPU Memory Usage at Different Resolutions
Uniformly Selectively
a) ViTs b) DynamicVis
d) Downstream Tasks: Region → Instance → Pixel
Fig. 1: a): ViTs process all visual tokens uniformly. b): DynamicVis selectively extracts key tokens at each block to perform adaptive modeling. c): Memory consumption of different model architectures at varying input resolutions. d): The proposed DynamicVis demonstrates versatility in interpreting diverse temporal and spatial localization patterns. Comprehensive evaluations across nine downstream tasks, spanning region-, instance-, and pixel-level understanding, demonstrate its efficacy, generali-
zability, and scalability.
ous small, spatially dispersed targets. The aggressive compression risks losing localized details and spatial relationships critical for small-object analysis (e.g., targets smaller than 16 × 16 pixels may be lost), thereby degrading performance [23, 24]. While increasing input resolution could mitigate this issue, such adjustments incur prohibitive computational costs due to quadratic growth in GPU memory consumption, creating an intractable trade-off. Furthermore, remote sensing tasks inherently-
 demand hierarchical feature extraction: scene-level semantics for classification, target-level discriminative features for detection, and pixel-level precision for segmentation [25–28]. Although ViT-based architectures excel at capturing large-scale regional patterns, their capacity to represent fine-grained, small-target attributes limits their adaptability to such nuanced requirements in remote sensing. To address these challenges, we propose DynamicVis, a dynamic visual perception foundation m-
odel for remote sensing that draws inspiration from the selective attention mechanisms of biological vision systems. Unlike ViTs that process all visual tokens uniformly (Fig. 1 a)), DynamicVis employs adaptive token routing across network layers to selectively prioritize task-relevant regions (Fig. 1 b)). Diverging from conventional Mixture-ofExperts (MoE) architectures that distribute tokens across specialized subnetworks [29], our framework identifies sparse, highsignificance tokens via router--
assigned importance scores. These tokens undergo incremental feature refinement and then are projected into the original full token sequence to preserve spatialsemantic integrity. This approach is particularly effective for remote sensing scenarios where critical targets occupy spatially limited regions within expansive backgrounds. To retain fine-grained details during feature extraction, the downsampling kernel size is reduced to 4 instead of 16 in ViTs. While this modification exacerbates long--
sequence modeling complexity, the challenge is addressed through selective state space models (SSMs) [30, 31] that operate exclusively on the aforementioned dynamically selected tokens. By cascading multiple SSM blocks, the DynamicVis backbone achieves comprehensive scene understanding while preserving local details, enabling computationally efficient encoding of high-resolution imagery (Fig. 1 c)).
A meta-embedding-based multi-instance learning (MIL) framework is further introduced to facilitate cross-task geographic knowledge transfer. Trained on the million-scale fMoW dataset with weak region-level annotations [32, 33], this paradigm disentangles heterogeneous feature distributions while distilling shared semantic representations in latent space. Extensive evaluations across nine downstream remote sensing tasks demonstrate the model’s effectiveness, generalizability, and scalability (Fig. -
1 d). The principal contributions are summarized as follows: i) We proposed DynamicVis, a dynamic visual perception foundation model inspired by biological attention mechanisms that captures generalizable visual semantics in high-resolution remote sensing data while mitigating computational constraints inherent to large-scale imagery analysis. ii) We introduce a dynamic regional perception architecture based on the state space modeling balancing global scene understanding with local feature extrac-
tion, enabling efficient hierarchical representation encoding. iii) We explore and propose a meta-embedding MIL paradigm leveraging weak region-level annotations for large-scale pretraining. Compared to contrastive learning or MAE, this method exhibits accelerated convergence, higher information density, and enhanced scalability relative to fully supervised methods. iv) Comprehensive validation through nine downstream tasks, demonstrating state-of-the-art performance in hierarchical visual represe-
ntation learning from raw remote sensing imagery with significantly reduced computational overhead.
2 Related Works
2.1 Remote Sensing Foundation Model
The emergence of foundation models represents a transformative milestone in pursuing artificial general intelligence (AGI), particularly through their domain-specific adaptations [34]. For instance, models such as ChatGPT have redefined performance benchmarks in natural language interaction, while concurrent efforts have expanded their applicability by integrating diverse data sources and multimodal inputs that transcend conventional language-centric

3
frameworks [35]. However, adapting foundation models to remote sensing applications presents unique challenges due to inherent domain-specific characteristics [11, 36, 37]. Remote sensing data, typically represented as multidimensional (2D/3D) image matrices, often lack well-aligned textual annotations and exhibit significant spatial redundancies. These characteristics complicate the direct application of training methodologies originally designed for general computer vision or natural language pr-
ocessing tasks, as conventional approaches typically presume the availability of semantically rich, temporally structured, or textually annotated data. Despite these obstacles, some progress has been achieved in adapting foundation models to remote sensing through three principal paradigms: 1) large-scale supervised or semi-supervised pretraining, 2) unsupervised representation learning using selfsupervised objectives, and 3) domain-specific supervised finetuning of pre-trained models [38]. Superv-
ised and semi-supervised training paradigms explicitly guide parameter optimization during model training. Tong et al.[39] demonstrated notable improvements in cross-domain generalization by pre-training deep CNNs on the GID land cover dataset. However, the scarcity of accurately annotated remote sensing data has driven the development of alternative approaches that leverage coarser supervision signals. For instance, GeoKR [40] enhanced representation learning by geographically correlating remote -
sensing imagery with the GlobeLand30 land cover product, thereby reducing reliance on detailed annotations. Long et al.[41] further advanced the field by curating MillionAID, a large-scale scene classification dataset. Their work empirically validated the effectiveness of training classical CNN architectures from scratch, underscoring the importance of data scale in remote sensing pre-training. Additionally, multi-task supervised pretraining on the SAMRS dataset has proven effective for achieving -
robust generalization across diverse downstream applications [42]. While annotation availability inherently limits the scalability of these paradigms, their consistent learning efficacy highlights their relevance in scenarios with constrained calculation resources. Unsupervised approaches for remote sensing are primarily categorized into contrastive learning and masked image modeling (MIM), with the latter prominently represented by Masked Autoencoders (MAE) [43]. Contrastive methods exploit disti-
nctive characteristics of remote sensing data, including temporal variation, seasonal periodicity, and geographic displacement. Representative implementations include SeCo and CACo, which model temporal dynamics from multi-temporal sequences [44], and SkySense, which employs multi-granularity contrastive learning across different temporal and spatial resolutions [10]. MIM adaptations address domain-specific spatiotemporal and multi-scale attributes: SatMAE [45] adapts the MAE framework for multisp-
ectral and multi-temporal inputs, while Scale-MAE [46] incorporates a multi-scale perception encoder. Notably, RingMo [13] demonstrates the semantic discriminability of unsupervised mask training across 2 million images, and SpectralGPT [14] achieves state-of-the-art performance on four downstream tasks through progressive MAE pre-training at 96×96 and 128×128 resolutions. Hyperspectral applications are advanced by HyperSIGMA [47], which employs MAE-based pre-training on the HyperGlobal450K datase-
t (64 × 64 pixels) for both high-level semantic tasks and low-level reconstruction. Despite enabling substantial data and model capacity scaling, these methods face efficiency limitations due to inherent redundancies in spatial-spectral patterns within remote sensing imagery.
In contrast, domain-specific supervised fine-tuning adapts general-purpose foundation models to specialized remote sensing tasks, optimizing computational resources while enhancing taskspecific accuracy. This adaptation encompasses techniques such as prompt learning, instruction fine-tuning, in-context learning, and adapter-based methods [48]. For example, BAN [49] improves change detection by integrating dual-temporal CLIP features with task-specific adapters, while RSPrompter [11] evaluates SAMb-
ased prompt learning for cross-domain instance segmentation. Text2Seg [50] further reduces dependency on extensive annotations by synthesizing prompts from multiple visual foundation models, enabling dataset-agnostic generalization. The development of domain- and task-specific foundation models remains an active research frontier, demonstrating the potential to address specialized requirements under constrained computational resources and data availability. While remote sensing foundation models h-
ave demonstrated robust generalization capabilities across diverse applications, contemporary research prioritizes isolated task optimization over developing a unified framework for comprehensive interpretation. Although certain models are capable of providing shared priors across tasks, their visual encoders are typically restricted to lowresolution inputs (e.g., 64 × 64 or 224 × 224 pixels), limiting their capacity to exploit the rich informational potential of highresolution imagery and leverag-
e large-scale scene semantics. This constraint hinders the effective extraction of small targets and finegrained spatial features, diminishing their potential for precise, detailed analysis. To overcome these limitations, the proposed DynamicVis framework employs supervised multi-instance learning trained on a corpus of millions of region-level annotations. By simultaneously discovering shared representations and disentangling heterogeneous features in deep semantic space, the framework enhances m-
ulti-scale representational capacity, enabling robust adaptation to diverse remote sensing scenarios.
2.2 Model Architecture
The evolution of deep learning architectures has been significantly influenced by advancements in computational capabilities. Following Rosenblatt’s development of the perceptron model (1958) for pattern recognition [51], continuous efforts have been made to design increasingly sophisticated architectures for hierarchical feature representation [52]. In computer vision, CNNs have dominated over the past decade due to their ability to capture and process spatial patterns through localized convoluti-
onal operations effectively [53]. Nevertheless, CNNs exhibit inherent limitations in modeling large-scale features and global structural relationships due to their restricted receptive fields. This constraint has motivated architectural innovations to transcend spatial locality. Attention mechanisms have emerged as a promising solution, enabling feature extraction across extended spatial contexts. For instance, SENet [54] pioneered channel-wise feature recalibration, while CABM [55] unified spatia-
l and channel attention for refined feature modulation. The Non-local network [56] further extended CNN capabilities with non-local operations to model long-range dependencies. A paradigm shift occurred with Transformer, which employs self-attention to establish global dependencies between input elements, demonstrating superior capability in modeling contextual relationships and enabling parallelized computation. Building on this, the ViT has catalyzed breakthroughs in computer vision, achieving s-
tate-of-the-art performance in tasks such

4
as image classification, object detection, and segmentation [57]. Despite these advances, ViT’s quadratic computational complexity and memory demands relative to input token length render it less efficient than CNNs for high-resolution image analysis. This tradeoff between global context modeling and computational efficiency remains a critical challenge in contemporary architecture design. Linear attention mechanisms have emerged as a promising solution to computational efficiency challenges in se-
quence modeling. A significant advancement in this domain was introduced by Albert et al.[58] through Structured State Space Sequence Models (S4), a novel architecture that serves as a computationally efficient alternative to traditional Transformers. Rooted in classical state-space theory, S4 strategically integrates the complementary advantages of RNNs and CNNs, achieving linear or near-linear computational complexity relative to sequence length via recursive and convolutional processing. Despit-
e these advancements, empirical analyses have demonstrated that such models exhibit suboptimal performance when handling discrete, informationdense data types such as textual inputs. The Mamba [30] (Selective State Space Models, S6) overcomes this limitation by enabling input-dependent parameter adaptation in SSMs, thereby facilitating context-aware information filtering. The adaptive paradigm has subsequently been extended to visual processing tasks, achieving performance on par with conventional-
 CNN and Transformer baselines. For example, VMamba and Vim employ dual and quadruple processing branches, respectively, to enable non-causal analysis of 2D visual data [59]. Furthermore, Mamba-based frameworks such as CDmamba and ChangeMamba have demonstrated efficacy in dense prediction tasks for geospatial imagery, underscoring their versatility in complex visual domains [60, 61]. Building on these developments, our work proposes a dynamic vision perception method for high-resolution remote sen-
sing data using S6 blocks, with dual objectives: enhancing long-sequence modeling efficiency while addressing the intrinsic non-causality of image data. The proposed DynamicVis distinguishes itself through two key innovations. First, computationally efficient bidirectional processing is achieved only through forward and backward pathways. Second, a dynamic token selection mechanism enables theoretically arbitrary token orders, facilitating comprehensive non-causal modeling. Comparative experiments-
 validate that this streamlined approach reduces parameter overhead while maintaining competitive performance.
2.3 Visual Compression and Token Reduction
High-resolution visual features are crucial for achieving detailed task comprehension through fine-grained discriminative capabilities, particularly for precise applications such as element counting and small object localization. However, current visual foundation models predominantly employ CLIP-derived encoders constrained to low-resolution inputs (typically 224 × 224 or 336 × 336 pixels) [9]. which limits their ability to extract spatially dense features critical for precision-oriented analysis-
. While straightforward increasing input resolution could theoretically enhance detail capture, the associated quadratic growth in computational complexity renders naive upscaling impractical. To resolve this trade-off, sparse token representation methods have been developed via two principal strategies: token aggregation and token resampling. Token aggregation techniques employ spatial compression through strided convolutions or token grouping mechanisms [62–64]. For instance, hierarchical Transf-
ormers
utilize patch merging to progressively reduce spatial resolution while expanding channel dimensions [17]. Parallel solutions such as C-Abstractor [65] leverage convolutional layers for localized feature modeling and downsampling. Alternative approaches like NFormer apply k-NN clustering to select semantically similar tokens [66], while LLaVA-PruMerge adopts graph-based clustering for token grouping [67]. Conversely, token resampling methods employ cross-attention mechanisms to distill information -
into learnable query vectors, exemplified by Q-Former [68] and Flamingo’s Resampler [20]. Hybrid architectures like TokenPacker [69] combine multi-resolution cues to preserve spatial details through distinct key-value pathways. Despite these advances, three critical limitations persist: 1) Over-compression during spatial reduction, particularly detrimental in remote sensing applications where sparse target distributions demand precise spatial retention; 2) Architectural inefficiencies that impede -
parallel processing, especially in cluster-based algorithms; and 3) Increased memory overheads from multi-stage compression. These issues collectively degrade performance through loss of local details, disrupted spatial relationships, and insufficient multi-scale feature representation. We propose a dynamic visual information-aware token reduction framework to mitigate these challenges. This approach incrementally models features through the selective retention of discriminative tokens while integ-
rating non-key tokens via parameterfree aggregation, thereby preserving information integrity while optimizing computational efficiency. Furthermore, a hierarchical architecture incorporating stacked S6 modules facilitates multiscale feature extraction, ensuring adaptability to diverse interpretation tasks across varying granularity levels.
3 Methodology
3.1 Overview
Motivated by the selective attention mechanism in biological vision systems and the sparse spatial distribution of objects characteristic in remote sensing imagery, we propose DynamicVis, a dynamic visual perception foundation model for remote sensing image interpretation. The model adheres to the standard foundation model paradigm of pre-training followed by task-specific fine-tuning, engineered to efficiently extract transferable visual semantics from high-resolution geospatial data with large s-
izes. The architecture employs a dynamic region-aware backbone based on SSMs, enabling simultaneous capture of large-scale scene semantics while preserving sensitivity to local details through adaptive feature aggregation. For pre-training, we proposed a meta-embedding-based multiinstance learning framework that scales to process millions of regional annotations, which promotes the learning of cross-task feature representations while retaining discriminative power for heterogeneous patterns in dee-
p semantic space. To adapt the foundation model to downstream applications, modular taskspecific decoders have been developed and validated through systematic testing across diverse remote sensing data types, scales, and interpretation objectives. The unified processing workflow is formalized as:
R = ΦΓ
decoder ◦ Φbackbone(I), (1)
where I denotes the input image or image pair (for change detection), Φbackbone represents the shared foundation model backbone, ΦΓ
decoder indicates the parameterized decoder for task type Γ, and

5
Patch Merger
+
PE
...
1
2
3
L
Sparse Mixer
Stage 1 Stage 2 Stage 3 Stage 4
Feature Pyramid
Network
Patch Merger
Sparse Mixer
Patch Merger
Sparse Mixer
Patch Merger
Sparse Mixer
......... ...
✓
✓
Input Image
Fig. 2: The overview of Dynamic Region-aware SSM Backbone, comprising four interconnected stages that generate hierarchical semantic feature maps at varying scales. Red boxes highlight regions of interest, while yellows denote regions exhibiting structural simplicity or repetitive patterns.
R encompasses the interpretation outputs (e.g., category labels, object boxes, or pixel-wise masks).
3.2 A Revisit of Selective SSM
The state space model (SSM) derives from continuous-time systems in control theory and shares fundamental principles with CNNs and RNNs [30, 59]. It models continuous-time signal processing through state transitions, governed by the first-order differential equations:
h′(t) = Ah(t) + B x(t),
y(t) = Ch(t), (2)
where the output y(t) ∈ R is computed from the input x(t) ∈ R and the hidden state h(t) ∈ RN. The system dynamics are parameterized by the state transition matrix A ∈ RN×N, input projection matrix B ∈ RN×1, and output projection matrix C ∈ R1×N. To adapt Eq. 2 into a discrete-time formulation compatible with deep learning frameworks, matrices A and B are discretized using a zero-order hold (ZOH) method with a time scale parameter ∆. This results in the discretized SSM parameters (∆, A ̄, B ̄, C),
where: A ̄ = exp(∆A),
B ̄ = (∆A)−1(exp(∆A) − I) · ∆B. (3)
The discrete-time state-space representation derived from Eq. 2 is then expressed as:
hk = A ̄ hk−1 + B ̄ xk,
yk = C ̄ hk, (4)
where C ̄ retains equivalence to C. The model supports dual computation modes: linear recurrence for sequential processing or global convolution for parallelized training. The convolutional formulation is parameterized as:
K ̄ = C ̄ B ̄ , C ̄ A ̄ B ̄ , . . . , C ̄ A ̄ L−1B ̄ ,
y = x ∗ K ̄ , (5)
where L denotes the input sequence length and K ̄ ∈ RL represents the structured convolutional kernel. During training, convolution is prioritized for its parallel computation efficiency, enabling simultaneous processing of full input sequences. For inference, the model transitions to recurrent mode to enable memory-efficient autoregressive generation, analogous to the Transformer decoder. The Mamba enhances classical SSMs by introducing an inputdependent selection mechanism. This addresses inhere-
nt limitations in discrete-time SSMs by dynamically parameterizing ∆, B, and C as functions of the input, thereby enabling context-aware modulation of information flow.
3.3 Dynamic Region-aware SSM Backbone
3.3.1 Overall Structure
The Dynamic Region-aware SSM Backbone constitutes the core component of the DynamicVis framework. This backbone integrates a multi-scale region-aware SSM feature extractor with a standard Feature Pyramid Network (FPN) [70] to enable efficient cross-resolution semantic representation while demonstrating the potential for cross-task interpretability (see Fig. 2). The operational process can be formally expressed as:
{Fi} = Φbackbone(I) = Φfpn ◦ Φms-extract(I), (6)
where an input image I ∈ RH×W×3 is processed sequentially through two stages: 1) hierarchical feature extraction via the multi-scale SSM feature extractor Φms-extract, and 2) multi-scale feature fusion via the FPN Φfpn. The framework produces feature maps {Fi} at five distinct resolution levels, with each output
Fi ∈ R H
2i+1 × W
2i+1 ×di , i ∈ {1, 2, 3, 4, 5}.
3.3.2 Multi-scale Region-aware SSM Extractor
The SSM feature extractor comprises four sequential stages that progressively generate multi-scale feature maps with globally activated semantic representations. Each stage incorporates three core modules: a patch merger, a sparse visual region token mixer block, and a normalization layer. The modeling process of the i-th stage is formally expressed as:
Fi = Φnorm ◦ Φsparse-mixer ◦ Φpatch-merger(Fi−1), (7)
where Fi−1 and Fi denote the input and output feature maps of the i-th stage (i ∈ {1, 2, 3, 4}), with F0 derived from the input image I. The modules operate as follows: 1) The patch merger Φpatch-merger reduces spatial dimensionality through feature compression, 2) The sparse mixer Φsparse-mixer leverages SSM to model global semantic dependencies across strategically selected visual token sequences (detailed in Sec. 3.3.4), and 3) The normalization layer Φnorm applies layer normalization to stabil-
ize training dynamics.
3.3.3 Patch Merger
The patch merger in the i-th stage utilizes a 2D convolutional block (Conv2D + LN Norm) with a kernel of ki × ki and a stride of si × si, i.e., mapping each local region of size ki × ki into a single visual token. The merging operation is formally expressed as:
Fi = ΦConv2D(Fi−1, ki, si),
Fi = Fi + PE if i = 1, (8)

6
Sparse Mixer
Flatten
Token Selection
Dual Scanning
Increment Conn.
STIM ×N!
Un-flatten
Fig. 3: The structure of the Sparse Mixer, including three key elements: a flattening operation, Ni selective token incremental modeling (STIM) units, and an un-flattening operation.
where ΦConv2D represents the 2D convolution. To preserve spatial relationships between visual tokens, a learnable positional encoding PE ∈ R H
4 ×W
4 ×d1 is exclusively incorporated at the initial stage (i = 1). Notably, different from ViTs, employing abrupt 16-stride downsampling for single-scale feature extraction, our architecture preserves fine-grained details and small object features through progressive small-stride (si = 2) downsampling. This strategy enables the hierarchical construction of multi-scale feature representations while mitigating information loss associated with aggressive resolution reduction.
3.3.4 Sparse Mixer
The small-stride downsampling operation poses efficiency challenges for modeling ultra-long sequences. To mitigate this, the Sparse Mixer block employs an SSM architecture to perform selective incremental modeling of salient regions/tokens, thereby addressing computational bottlenecks. Within the Sparse Mixer block at the i-th stage, the procedure proceeds through three sequential operations (see Fig. 3): 1) The feature maps Fi are flattened into a 1D sequence si ∈ RLi×di , where Li = Hi×Wi. 2) Th-
e sequence si is iteratively processed by Ni Selective Token Incremental Modeling (STIM) units to achieve comprehensive global semantic integration. 3) The refined sequence is restored to its original dimensions via an unflattening operation. Mathematically, this pipeline is formalized as:
si = Φflatten(Fi),
si = Φk
STIM(si, ri),
Fi = Φun-flatten(si),
(9)
where Φk
STIM denotes the k-th STIM unit within the i-th Sparse Mixer. Although the quantity of STIM units Ni varies across Sparse Mixers, their architecture remains consistent. The token reduction ratio ri is a critical hyperparameter governing the sparsity of the selected tokens, by dynamically adapting to the feature redundancy levels present at each processing stage. This ratio is calibrated to balance computational efficiency with representational capacity, ensuring stage-specific optimization of toke-
n selection.
3.3.5 Selective Token Incremental Modeling
The Selective Token Incremental Modeling (STIM) unit (Φk
STIM)
performs selective global modeling on visual token sequences (si). For simplicity, the superscript k and subscript i are omitted. The STIM unit comprises three key components: 1) a key tokens selection mechanism, 2) a dual-path scanning operation based on
...
1
2
3
4
L
1
3
L
Prob.
Noise
Top-K
1-D Pooling
+
MLP
...
...
...
Region Tokens
Global Tokens
Dual-path SSM Scanning
...
1
2
3
4
L
...
1
2
3
4
L
Skip
Fig. 4: The detailed architecture of the Selective Token Incremental Modeling (STIM) unit.
SSMs, and 3) an incremental connection (see Fig. 4), formally expressed as:
s = ΦSTIM(s, r) = Φincrement-conn ◦ Φdual-scan ◦ Φtoken-select(s, r), (10)
where s denotes the input token sequence and r represents the predefined token reduction ratio. 1) Token Selection: Two distinct token representations are constructed from the input sequence s: 1) dense global semantics xg and 2) sparse regional semantics (xr).
global semantics: The xg is derived through adaptive 1D pooling applied to the original sequence s, compressing the sequence length from L to
√
L. These global semantic tokens are fully retained to provide comprehensive contextual information throughout the modeling process. regional semantics: The selected regional tokens (xr) are identified via importance scores generated by a linear projection layer Φmlp. To stabilize training and avoid local minima, Gumbeldistributed noise is incorporated into the logits before softmax normalization. The top-k token selection process is formalized as:
p = Φmlp(s) (dimensionality reduction: d → 1)
w′ = σ (p + ε) ε ∼ Gumbel(0, v(1 − e/emax))
Ω = Φtop-k(w′, r)
xr = Ω(s)
(11)
where p ∈ RL×1 corresponds to token-wise importance logits. The noise temperature is governed by v = 0.1, while e/emax denotes normalized training progress, ensuring that the noise magnitude is progressively decayed during training. The softmax function σ generates normalized importance weights, and Ω represents the selection operator that retains tokens with the highest scores according to reduction ratio r. The combined xg and xr representations enable incremental modeling that preserves global -
contextual awareness while dynamically focusing on critical regional features. This synergistic approach achieves an optimal balance between computational efficiency and representational fidelity through context-guided selective processing. 2) Dual-path Scanning: To enhance computational efficiency in global dependency modeling, we perform a dual-path SSM scanning operation (Φdual-scan) exclusively on global tokens (xg) and key regional tokens (xr) (see Fig. 5), rather than adopting the exhaustive-
 processing of all visual tokens as in ViTs. By leveraging a top-k selection mechanism to accommodate theoretically arbitrary token sequence orderings, our method, only taking two

7
Shared Weights SSM Mixer
Norm
Conv1D σ SSM
Block
Rearrange
Forward Path
......
Global Tokens Regional Tokens
Reverse Path
...
Global Tokens
...
Regional Tokens
Dual-path SSM Scanning
σ × +∑
Fig. 5: The structure of dual-path SSM scanning.
scanning paths, can achieve performance comparable to existing approaches that rely on four- or eight-directional scans [59], thereby further reducing computational complexity. Formally, the process is defined as:
x′
g, x′
r = Φdual-scan([xg, xr]), (12)
where xg and xr are concatenated along the token dimension and processed through a standard Mamba-based block with dual-path processing (see [25, 71] for details). 3) Incremental Connection: To preserve information integrity during selective token modeling, sparse token features acquired through SSM scanning are treated as incremental information and systematically integrated into the original token sequence. Specifically, unselected tokens undergo parameter-free modeling processing. This process -
can be formalized as:
w = σ(p) (normalized importance weights)
s′ = w · s (importance-weighted tokens)
Ω(s′) = Ω(w) · x′
r (regional token replacement)
s = s + s′ (residual integration)
(13)
where w denotes noise-free token importance probabilities. As formalized in the third equation, s′ combines adaptively weighted original features with globally contextualized key tokens. Incremental modeling is achieved through residual skip connections, which prioritize computational resources for salient tokens while preserving the complete original information across the network.
3.4 Meta-embedding Representation Pretraining
Large-scale data pre-training represents a foundational component of modern vision foundation models. To enable comprehensive cross-task visual perception capabilities in remote sensing imagery, DynamicVis employs supervised pre-training on the Functional Map of the World (fMoW) dataset [33], which provides region-level annotations across millions of instances. While supervised pre-training faces inherent scalability limitations compared to self-supervised paradigms such as MIM or contrastive lear-
ning [72], it offers distinct advantages in learning efficiency. We introduce a meta-embedding-based multi-instance contrastive learning framework, operating in feature space rather than relying on conventional logit-space classification (e.g., cross-entropy optimization). We hypothesize that feature-space multi-instance learning promotes more robust cross-task knowledge transfer by distilling generalized semantic patterns, rather than task-specific classification representations. This paradigm sh-
ift is designed to preserve latent structural relationships within visual data that extend beyond narrow task-specific boundaries, thereby improving model adaptability for diverse downstream applications. Given the dataset Dtrain = {(I1, y1), . . . , (IN, yN)}, where Ii ∈ RH×W×3 denotes an input image and yi = {bi, ci} represents its
...
...
Visual Backbone
LMIL−NCE Category
Region Des.
Prompting
Regional Embed.
Categorical Embed.
Initial.
Text Encoder
Fig. 6: The overview of the meta-embedding-based multipleinstance learning to integrate contextual and semantic feature representations in the latent space.
annotation comprising ni instances, each instance is characterized by a bounding box bi ∈ Rni×4 and a semantic category ci ∈ Rni×C. Here, C corresponds to the predefined categories. The objective is to learn region-specific visual-semantic representations through multi-instance contrastive learning, where meta-embeddings derived from categorical information guide the alignment process (see Fig. 6). The proposed Multi-Instance Learning Noise Contrastive Estimation (MIL-NCE) loss LMIL-NCE is formula-
ted to maximize the aggregated similarity of positive pairs while suppressing negative pairs, as expressed by:
L = − log
P
(v,t)∈P
exp ⟨vT ,t⟩
τ
P
(v,t)∈P
exp ⟨vT ,t⟩
τ +P
(v′ ,t′ )∼N
exp ⟨v′T ,t′⟩
τ
(14)
where P denotes a set of positive matches formed between image region features and their corresponding categorical metaembeddings, while N comprises negative pairs sampled from nonassociated categories. For every annotated region, positive pairs are constructed with their ground-truth category, and negative pairs are generated using all unrelated categories within the batch. The loss is computed in a batch-wise manner to ensure efficient optimization.
Regional Visual Representation: Given an image I ∈ RH×W×3,
multi-level features Fi ∈ R H
2i+1 × W
2i+1 ×di are extracted through the SSM backbone, where i ∈ {1, 2, 3, 4, 5}. For region annotations (b), a Generic RoI Extractor (GRoIE) [73] is employed to derive region-specific visual representations of uniform dimensionality. These representations are subsequently pooled into visual embeddings. The adoption of GRoIE over conventional RoI extractors is driven by the necessity to ensure task- and dataset-agnostic generality during pre-training. To this end, features from all hierarchical scales a-
re aggregated for RoI pooling, diverging from traditional approaches that heuristically select a single feature layer deemed optimal for RoI alignment. The process is formalized as:
v = Φpool ◦ Φg-roi (Φbackbone(I), b) , (15)
where v ∈ R1×d represents the visual embedding for region b in image I. The final pooling operation Φpool applies average pooling over spatial dimensions to reduce embeddings to 1 × 1 resolution. Categorical Meta-embedding: Rather than relying on direct visual region feature classification for pre-training, multi-instance contrastive learning is employed in the feature space to strengthen the model’s generalized representation learning. Each semantic category is modeled as a learnable point in the-
 embedding space, termed as meta-embedding. To accelerate convergence, these

8
meta-embeddings are initialized by encoding category representations using CLIP’s text encoder, with prompt templates derived from OpenCLIP’s zero-shot protocol1. The proposed architecture is designed to support arbitrary text encoding, thereby extending the pre-training framework’s scope beyond region-category annotations to incorporate region-text and image-text descriptors, enhancing the framework’s scalability.
3.5 Downstream Task Transferring
The proposed model’s performance is evaluated across a comprehensive suite of remote sensing visual perception tasks, organized hierarchically into three analytical levels: region-level (image classification, region classification, image retrieval), instancelevel (object detection, instance segmentation), and pixel-level (semantic segmentation, change detection). These tasks necessitate multiscale knowledge integration and heterogeneous information representation formats, including vectors, numeri-
cal values, bounding boxes, and segmentation masks. To address these diverse requirements, task-specific decoder heads are implemented while preserving standard architectural configurations from established domain practices, thereby ensuring compatibility with DynamicVis’s framework. Region-level Interpretation encompasses image classification, region classification, and image retrieval. For image classification, category logits are generated by applying average pooling to the highest-resolution s-
emantic feature map, followed by a linear projection layer. Region classification extends the pretraining framework by integrating a classification head. Image retrieval is performed in a zero-shot configuration, where high-level semantic features extracted by the backbone network undergo spatial pooling to derive compact image embedding vectors.
Instance-level Interpretation employs a two-stage architecture for object detection and instance segmentation, consistent with conventional methodologies. An RPN is coupled with an R-CNN head for detection [74], augmented by a Mask R-CNN head for instance masking [75]. Pixel-level Interpretation targets dense prediction tasks. Semantic segmentation is implemented using a UperNet [76] for hierarchical feature fusion and pixel-wise classification. For change detection, feature differences between bi-
-temporal inputs are computed in high-dimensional semantic space, followed by an MLPbased head to produce the final change prediction.
4 Experimental Results and Analyses
4.1 Pretraining Dataset and Settings
The DynamicVis foundational model backbone was pre-trained on the fMoW dataset [33] and subsequently evaluated across multiple annotated downstream tasks. This section first describes the fMoW dataset employed for multi-instance learning pre-training, with downstream task datasets detailed in subsequent experimental comparisons. The fMoW dataset [33], illustrated in Fig. 7, serves as a region classification benchmark with annotation granularity intermediate between image classification and object -
detection. Each image includes at least one bounding box annotation; however, these annotations are loosely defined, often encompassing targets without adhering strictly to object boundaries. The dataset encompasses 62 semantic categories alongside a supplementary “false detection”
1. https://github.com/mlfoundations/open clip
prison
false detection
false detection
toll booth
storage tank
crop field
Fig. 7: Illustrative samples from the fMoW dataset, demonstrate diversity in geographical and temporal distributions.
TABLE 1: The hyperparameter configuration of the DynamicVis backbone architecture comprises four distinct stages.
Version Layers (Ni) Dimensions (di) Reduction Ratio (ri) Patch Size (ki) Stride (si)
base [2, 4, 16, 4] [96, 192, 384, 768] [7/8, 3/4, 1/2, 0] [7, 3, 3, 3] [4, 2, 2, 2] large [2, 4, 32, 4] [128, 256, 512, 1024] [7/8, 3/4, 1/2, 0] [7, 3, 3, 3] [4, 2, 2, 2]
class for uncategorized instances. Acquired from the DigitalGlobe satellite constellation, the data comprises paired 4-band or 8-band multispectral imagery (visible to near-infrared) and pan-sharpened RGB images. Spanning over 200 countries, the collection contains more than 1 million images enriched with metadata: UTM zone coordinates, timestamps, ground sample distance (GSD), angular measurements (off-nadir angle, target azimuth, sun azimuth, sun elevation), and image/bounding box dimensions. Tw-
o publicly available versions exist: 1) fMoW-full (∼3.5TB): Includes pan-sharpened RGB and 4/8-band multispectral imagery stored in TIFF format. 2) fMoW-rgb (∼200GB): A JPEGcompressed subset retaining only RGB channels. For experimental validation, the fMoW-rgb version was employed, with the training, validation, test, and sequence sets consolidated into 1,027,691 training images and 20,000 test images (originally from the test partition). This test set served dual purposes: facilitating superviso-
ry metrics during pre-training and validation for the region classification task.
4.2 Implementation Details
4.2.1 Architecture Details
The proposed foundational model is based on Mamba’s selective state space architecture. To address varied application demands, two variants (base and large configurations) are introduced, with their structural specifications systematically outlined in Table 1. Positional encoding is implemented using randomly initialized learnable embedding vectors. Feature representations are derived via a bidirectional Mamba scanning module that averages outputs from forward and reverse scanning directions, whil-
e maintaining the original hyper-parameter configuration of Mamba mixers. The FPN follows conventional design principles, producing five multiscale feature maps with uniform 256-channel dimensionality.

9
The training framework incorporates a dual-objective loss function that integrates MIL-NCE with standard classification cross-entropy. A novel loss-free balancing strategy introduces Gumbel-distributed noise into affinity scores during training. This noise intensity is progressively annealed in later stages to ensure deterministic outcomes, thereby obviating the need for auxiliary balancing losses. Decoding heads retain established configurations from widely adopted methodologies without structura-
l or parametric modifications.
4.2.2 Training Details
The pretraining protocol was conducted using data obtained from official repositories via the AWS client. The dataset was structured into 128 tar archives following the WebDataset2 standard, enabling sequential data streaming to reduce memory overhead while maintaining efficient I/O operations. During pretraining, the framework processed exclusively RGB channels, with input images uniformly resampled to a resolution of 512 × 512 pixels. Data augmentation strategies incorporated random horizontal f-
lipping, random resizing, and cropping. For optimization, the AdamW optimizer was employed, initialized with a learning rate of 4 × 10−4, and coupled with a cosine annealing schedule to gradually reduce the learning rate. The training regimen extended over 200 epochs (∼ 3000 A100 GPU hours), with batch sizes set to 512 and 256 for the base and large model variants, respectively. Implementation was carried out using PyTorch on the OpenMMLab3 open-source platform. To maximize computational efficienc-
y, automatic mixed precision (AMP) in BF16 format was consistently employed. Prior to loss computation, distributed feature aggregation was performed across nodes to improve the stability and convergence efficiency of the MIL objective.
4.3 Comparison with the State-of-the-Art
Extensive comparative experiments were conducted across multiple remote sensing visual perception tasks, organized hierarchically into three granularity levels: region-level (image classification, region categorization, and image retrieval), instancelevel (object detection and instance segmentation), and pixel-level (semantic segmentation and change detection). The evaluation results demonstrated that DynamicVis exhibited robust crossgranularity knowledge integration capabilities. In comparative a-
nalyses against alternative methodological frameworks, including conventional convolutional architectures, Transformer-based models, Mamba-structured approaches, and large foundation modeldriven methods, DynamicVis consistently achieved superior performance across all evaluated granularity levels.
4.3.1 Scene Classification
The primary objective of remote sensing image scene classification is to automatically categorize aerial or satellite images into predefined semantic classes (e.g., forests, deserts, and urban areas) based on their visual content. As a fundamental task in geospatial analysis, this process holds significant practical importance for remote sensing applications [4]. Datasets: The evaluation framework employs two datasets with distinct spatial resolutions and categorical diversity: the UCMerced [77] a-
nd AID [78] datasets.
2. https://github.com/webdataset/webdataset 3. https://openmmlab.com/codebase
TABLE 2: Comparative analysis with state-of-the-art methods across various scene classification benchmarks.
Method Params. UC Merced AID
(M) P R F1 P R F1
ResNet-18 11.7 87.98 87.46 87.40 88.70 88.17 88.30 ResNet-50 25.6 91.99 91.74 91.65 89.44 88.66 88.87 ResNet-101 44.6 92.40 92.22 92.12 91.03 90.63 90.81
DeiT-T 5.5 86.92 86.66 86.53 85.23 84.52 84.52 DeiT-S 21.7 88.95 88.41 88.41 85.88 85.19 85.34 DeiT-B 85.8 89.14 88.73 88.70 87.32 86.07 86.07 ViT-B 87.2 91.09 90.79 90.77 89.39 88.65 88.86 ViT-L 305.0 91.98 91.32 91.26 90.19 88.86 89.17 Swin-T 27.5 90.87 90.63 90.40 86.49 85.66 85.77 Swin-S 48.9 91.08 90.95 90.82 87.50 86.80 86.89 Swin-B 86.8 91.85 91.74 91.62 89.84 89.01 89.07
Vim-Ti† 7.0 89.06 88.73 88.68 87.76 86.98 87.13 VMamba-T 30.0 93.14 92.85 92.81 91.59 90.94 91.10 RSMamba-B 6.4 94.14 93.97 93.88 92.02 91.53 91.66 RSMamba-L 16.2 95.03 94.76 94.74 92.31 91.75 91.90 RSMamba-H 33.1 95.47 95.23 95.25 92.97 92.51 92.63
DynamicVis-B† 36.8 96.80 96.66 96.66 94.41 94.22 94.17 DynamicVis-B‡ 36.8 95.97 95.89 95.88 94.11 93.82 93.81 DynamicVis-B 36.8 99.09 99.05 99.05 96.16 96.00 96.04 DynamicVis-L† 91.3 96.59 96.50 96.47 94.20 93.96 93.96 DynamicVis-L‡ 91.3 96.34 96.20 96.16 94.08 93.82 93.79 DynamicVis-L 91.3 99.12 99.10 99.09 96.40 96.29 96.28
1) UC-Merced [77]: This benchmark consists of 21 semantically distinct scene categories, containing 2,100 aerial images (100 samples per category) obtained from the United States Geological Survey (USGS) National Map. Each image, sized 256×256 pixels, maintains a uniform spatial resolution of 0.3 meters per pixel. The dataset employs a standardized partition protocol, allocating 70 samples per category for training and 30 for testing. 2) AID [78]: This large-scale dataset comprises 30 scene catego-
ries with approximately 10,000 high-resolution images sourced from Google Earth. The number of samples per class varies between 220 and 420. Each image is formatted to 600 × 600 pixels but exhibits varying spatial resolutions ranging from 0.5 to 8 meters. A balanced split of 50% training and 50% validation data was uniformly applied across all categories. Implementation Details: The pre-trained foundation model was fine-tuned by incorporating a linear classifier as the classification head. The arc-
hitecture employed global average pooling to compress spatial dimensions of feature maps, followed by classification via an MLP. To enhance generalization, a comprehensive suite of data augmentation techniques was applied, including random flipping, resizing, and cropping. Optimization was conducted using an AdamW optimizer initialized with a learning rate of 2 × 10−4, coupled with a cosine annealing scheduler incorporating a warm-up phase. Training spanned 500 epochs on 8 NVIDIA A100 GPUs, with a-
 global batch size of 256. Throughout finetuning, parameters in the backbone’s first stage remained frozen to preserve low-level feature extraction capabilities. For systematic comparison across architectural variants, experiments were executed under three configurations: 1) without key regional token selection and MIL pre-training (DynamicVis†), 2) with local token selection without MIL (DynamicVis‡), and 3) full integration of both components (DynamicVis). Performance was rigorously evaluated us-
ing precision, recall, and F1-score metrics. Results and Analysis: A systematic comparison was performed between the proposed DynamicVis and representative architectures spanning convolutional networks (ResNet [79]), transformer-based models (ViT [15], DeiT [16]), and Mambabased architectures (Vim [80], VMamba [81], RSMamba [25]).

10
harbor
parkinglot
buildings
mediumresidential
sparseresidential
forest
agricultural
overpass
golfcourse
freeway
baseballdiamond
beach
intersection
runway
mobilehomepark
chaparral
airplane
river
storagetanks
tenniscourt
denseresidential
harbor
parkinglot
buildings
mediumresidential
sparseresidential
forest
agricultural
overpass
golfcourse
freeway
baseballdiamond
beach
intersection
runway
mobilehomepark
chaparral
airplane
river
storagetanks
tenniscourt
denseresidential
100 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0
0 100 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0
0 0 96 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 3
0 0 0 100 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0
0 0 0 0 96 3 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0
0 0 0 0 0 100 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0
0 0 0 0 0 0 100 0 0 0 0 0 0 0 0 0 0 0 0 0 0
0 0 0 0 0 0 0 100 0 0 0 0 0 0 0 0 0 0 0 0 0
0 0 0 0 0 0 0 0 100 0 0 0 0 0 0 0 0 0 0 0 0
0 0 0 0 0 0 0 0 0 100 0 0 0 0 0 0 0 0 0 0 0
0 0 0 0 0 0 0 0 0 0 100 0 0 0 0 0 0 0 0 0 0
0 0 0 0 0 0 0 0 0 0 0 100 0 0 0 0 0 0 0 0 0
0 0 0 0 0 0 0 0 0 0 0 0 100 0 0 0 0 0 0 0 0
0 0 0 0 0 0 0 0 0 0 0 0 0 100 0 0 0 0 0 0 0
0 0 0 0 0 0 0 0 0 0 0 0 0 0 100 0 0 0 0 0 0
0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 100 0 0 0 0 0
0 0 0 0 0 0 0 0 0 0 0 0 0 6 0 0 93 0 0 0 0
0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 100 0 0 0
0 0 0 0 0 3 0 0 0 0 0 0 0 0 0 0 0 0 96 0 0
0 0 0 0 3 0 0 0 0 0 0 0 0 0 0 0 0 0 0 96 0
0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 100
Fig. 8: A percentage-normalized confusion matrix of DynamicVisL on the UC-Merced test dataset, where the horizontal axis represents predictions, and the vertical axis indicates labels.
Evaluation metrics were obtained from both published benchmarks and re-implementations of official codebases to ensure fair comparison. Experimental outcomes across two benchmark datasets are analyzed below: 1) UC-Merced: As shown in Table 2, DynamicVis achieves state-of-the-art performance across all evaluation metrics, with the large-scale variant (DynamicVis-L) nearing perfect classification accuracy. This performance advantage stems from its hierarchical architecture and increased network dept-
h, which demonstrate superior effectiveness over alternative Mamba-based architectural designs. Notably, network deepening provided greater performance gains than network widening strategies in experiments. While the local token selection mechanism introduced a marginal accuracy reduction, it substantially improved training efficiency and inference speed, as further quantified in our ablation studies. Additionally, integrating general knowledge through metaembedding representation learning signifi-
cantly enhanced overall accuracy, confirming the efficacy of the proposed MIL pre-training strategy. The progressive performance improvements from base to large configurations underscore DynamicVis’s capability to scale for diverse application constraints. 2) AID: The analysis was extended to the more complex AID dataset, which presents heightened classification challenges owing to its expanded 30-class taxonomy and reduced spatial resolution. As presented in Table 2, performance trends closely mi-
rror those observed in UC-Merced, with DynamicVis maintaining a consistent advantage over baseline architectures. Interestingly, the dynamic selection mechanism exhibited a less pronounced impact on classification accuracy. This discrepancy likely arises from AID’s reliance on localized regional features rather than global scene semantics for category discrimination, thereby reducing the token selection mechanism’s potential interference. Visualization: The classification performance of DynamicVis-
L is demonstrated through confusion matrices in Fig. 8 (UCMerced) and Fig. 9 (AID). Near-perfect diagonal values in both matrices reflect the model’s high classification accuracy. For the UC-Merced dataset (Fig. 8), minor misclassifications are
Port
Square
River
Pond
Playground
Mountain Park
Airport
SparseResidential
Stadium
Industrial
Church
DenseResidential
Parking
Farmland
Desert
Viaduct
Forest
StorageTanks
Center
Meadow
MediumResidential
School
BareLand
Commercial
BaseballField
RailwayStation
Resort
Bridge
Beach
Port Square River Pond Playground Mountain Park Airport SparseResidential Stadium Industrial Church DenseResidential Parking Farmland Desert Viaduct Forest StorageTanks Center Meadow MediumResidential School BareLand Commercial BaseballField RailwayStation Resort Bridge Beach
97 0 0 0 0 0 1 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 85 0 0 0 0 3 0 0 0 0 1 0 0 0 0 1 0 0 2 0 0 1 0 3 0 0 0 0 0 0 0 95 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 96 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 97 0 0 0 0 1 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 100 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 95 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0 0 0 0 1 0 0 0 0 0 0 0 0 0 98 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0-
 0 99 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0 0 2 0 0 0 0 96 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 94 0 0 0 0 0 0 0 0 0 0 0 0 1 1 0 2 0 0 0 0 0 0 0 0 0 0 0 0 0 0 95 0 0 0 0 0 0 0 0 0 0 1 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 94 0 0 0 0 0 0 0 0 0 0 0 2 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 98 0 0 0 0 0 1 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 100 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 100 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0-
 0 0 0 100 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 99 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 100 0 0 0 0 0 0 0 0 0 0 0 0 1 0 0 0 0 0 0 0 0 3 2 0 0 0 0 0 0 0 84 0 0 0 0 0 0 3 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 100 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0 0 0 1 0 0 0 0 0 0 0 0 95 0 0 0 0 0 0 0 0 0 0 0 0 0 0 3 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 89 0 4 0 0 1 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 3 0 0 0 0 0 0 0 95 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 -
0 0 0 0 1 0 97 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 98 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 96 0 0 0 0 0 1 0 0 0 7 0 0 0 0 0 1 0 0 0 0 0 0 0 0 0 0 0 0 0 0 85 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 98 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 99
Fig. 9: A percentage-normalized confusion matrix of DynamicVisL on the AID test dataset, where the horizontal axis represents predictions and the vertical axis indicates annotations.
0
20
40
60
80
100
0.7
1.2
1.7
2.2
2.7
3.2
0 50 100 150 200 250 300 350 400 450 500 550 600 650 700 750 800 850
F1-score
Loss
Step
DynamicVis-B‡ DynamicVis-B† DynamicVis-B DynamicVis-B‡ DynamicVis-B† DynamicVis-B
Fig. 10: Training loss (left y-axis) and evaluation accuracy (right y-axis) vs. iterations for the UC-Merced dataset.
concentrated in five categories: “buildings,” “sparse residential,” “airplane,” “storage tanks,” and “tennis court.” Notably, occasional confusion between the “airplane” and “runway” classes likely stems from their spatial co-occurrence in aerial imagery. In contrast, the AID dataset (Fig. 9) exhibits elevated misclassification rates for “Square,” “Center,” “School,” and “Resort.” The most pronounced confusion occurs between “Resort” and “Park,” which share overlapping visual features such as gree-
n spaces and recreational structures. Despite these isolated challenges, DynamicVisL achieves robust scene classification performance across both datasets. To evaluate the impact of model components, training dynamics were analyzed using classification loss (primary axis) and accuracy (secondary axis) on the UC-Merced dataset (Fig. 10). Two key findings emerged: a) Models employing the dynamic token selection mechanism exhibited moderately slower convergence, attributable to the dual optimization -
of classification plane and dynamic token identification. However, final performance metrics showed no statistically significant difference compared to models without this component. b) The integration of meta-embedding representation learning substantially accelerated the convergence rate, achieving comparable performance within 50 training iterations compared to the 500 iterations required by conventional

11
approaches. This improvement underscores the efficacy of metaembeddings in feature space optimization.
4.3.2 Tiny Ship Detection
Ship detection in remote sensing imagery plays a vital role in maritime surveillance and security enforcement. However, the extensive nature of oceanic surfaces presents significant challenges, as ship targets typically appear as small objects and are frequently obscured by environmental factors such as clouds, reefs, and waves, thereby complicating accurate detection. Dataset: The LEVIR-Ship dataset [82], comprising 3,896 optical remote sensing images acquired by the GF-1 and GF6 satellites at a -
spatial resolution of 16 meters, was utilized to assess DynamicVis’s performance in small object detection. Designed to evaluate ship localization accuracy under complex background interference across expansive marine environments, the dataset features image dimensions of 512 × 512 pixels. It incorporates diverse maritime conditions, including variations in cloud density, terrestrial intrusion, illumination intensity, and sea surface characteristics. All annotations are provided at the shipinstanc-
e level, with target dimensions averaging 10×10 pixels, and approximately 90% of instances occupying less than 20×20 pixels. The dataset is partitioned into training, validation, and testing subsets containing 2,320, 788, and 788 images, respectively. Implementation Details: The FCOS [83] was employed as the baseline framework for tiny ship detection, with its original backbone and neck components substituted by a pre-trained DynamicVis. All input images were resized to 1024 × 1024 pixels. To enha-
nce generalization, standard data augmentation strategies, including random horizontal flipping, multi-scale resizing, and cropping, were systematically applied. The model was trained for 200 epochs using the AdamW optimizer with an initial learning rate of 2 × 10−4 and a batch size of 64. Evaluation adhered to COCO evaluation metrics, with a focus on average precision at an IoU threshold of 0.5 (AP50). Given the dataset’s characteristics, performance was further quantified using two specialized m-
etrics: small object precision (AP50s, targeting objects below 32 × 32 pixels) and medium object precision (AP50m, for objects between 32 × 32 and 64 × 64 pixels). Metrics for large objects (> 64 × 64 pixels) were omitted due to the absence of such instances in the dataset. Results and Analysis: The proposed method was comprehensively evaluated against state-of-the-art object detection frameworks, including two-stage general detectors (e.g., Faster R-CNN [84], Sparse R-CNN [85]), single-stage meth-
ods (e.g., SSD [86], YOLO [87]), transformer-based architectures (e.g., Deformable DETR [88], ViTDet [89], DINO [90]), and specialized small object detection models (e.g., DRENet [82], IM-YOLO [91]). Experimental results, summarized in Table 3, highlight the highest-performing entries in gray. Key findings include: a) DynamicVis-L demonstrated superior performance, particularly in detecting small objects (below 32 × 32 pixels), attributed to its enhanced feature extraction capability for sparse sm-
all targets. b) The dynamic token selection mechanism (denoted by ‡) yielded significant performance gains over its counterpart without this (denoted by †). This underscores the mechanism’s efficacy in prioritizing salient regions while suppressing background interference, enabling robust interpretation of sparsely distributed objects in remote sensing imagery. c) Anchor-free detectors outperformed anchor-based approaches in this task. For sparsely distributed objects, the conventional reliance on-
 thousands of anchors can be
TABLE 3: Performance comparison of proposed method vs. stateof-the-art on Levir-Ship dataset.
Method AP50 AP50s AP50m
Faster R-CNN 75.2 74.5 86.5 SSD 56.9 55.8 63.4 YOLOv3 70.7 71.4 56.8 YOLOv5s 75.6 - TridentNet 75.1 - FCOS 80.4 79.8 82.2 RetinaNet 75.3 72.3 75.0 YOLOX 81.9 81.2 89.1 YOLOF 68.1 66.6 85.9 SparseRCNN 71.9 71.3 73.4 RTMDet 75.0 73.6 89.1 EfficientDet 75.0 73.3 90.2 CenterNet 76.2 74.4 80.2 ViTDet 75.3 73.6 90.9 DeformableDETR 78.6 78.5 75.6 DINO 79.6 78.8 91.2 CoDETR 82.1 80.5 95.0 DRENet 82.4 - HSFNet 73.6 - ImYOLOv3 72.6 - IM-YOLOv5s 76.9 - DS-YOLOv5s 75.4 - DSFPAPNet 82.6 - ORFENet 83.3 - HRNet -
83.7 - ADLA 83.8 - 
DynamicVis-B† 78.2 78.4 87.7 DynamicVis-B‡ 80.3 79.0 95.3 DynamicVis-B 82.8 81.7 97.3 DynamicVis-L† 80.1 79.9 82.9 DynamicVis-L‡ 81.9 79.8 96.0 DynamicVis-L 84.1 82.8 96.8
reduced to a limited set of reference points for object localization, thereby mitigating computational and optimization bottlenecks. d) Contrary to traditional assumptions, DETR-based detectors exhibited strong performance in small object detection tasks. Despite the diminutive size and sparse distribution of ship targets, the inherent global modeling capacity of transformer architectures, leveraging contextual relationships for discriminative analysis, proved advantageous in this scenario. Visual-
ization: Fig. 11 illustrates detection performance comparisons between DynamicVis-L and baseline methods on the LEVIR-Ship test set. False positives and false negatives are demarcated by yellow and green annotations, respectively, with all results filtered using a 0.3 confidence threshold. Complementary detection samples from DynamicVis-L are provided in Fig. 12. Three critical insights emerge from the visual analysis: a) The principal challenge in detecting sparse small ship targets stems from ac-
hieving effective recall of extremely small objects and those degraded by environmental interference (e.g., cloud occlusion or low illumination). This underscores the need for future research to prioritize recall enhancement strategies for such edge cases. b) DynamicVis outperforms existing methods in both localization accuracy and target recall efficiency, exhibiting fewer false negatives and spurious detections. This substantiates that selective feature discarding in dynamic token modeling retai-
ns detection fidelity while optimizing computational resource allocation. c) Despite demonstrating competitive overall performance, DynamicVis shows reduced efficacy in low-contrast scenarios,

12
Ground Truth Faster R-CNN FCOS RTMDet CenterNet ViTDet
DINO CoDINO DRENet IM-YOLO HRNet DynamicVis (Ours)
Ground Truth Faster R-CNN FCOS RTMDet CenterNet ViTDet
DINO CoDINO DRENet IM-YOLO HRNet DynamicVis (Ours)
Ground Truth Faster R-CNN FCOS RTMDet CenterNet ViTDet
DINO CoDINO DRENet IM-YOLO HRNet DynamicVis (Ours)
Fig. 11: Detection performance comparison between DynamicVis-L and other methods on LEVIR-Ship test set, with red boxes showing true positives, yellow showing false positives, and green showing false negatives.
as evidenced by residual missed detections. These limitations highlight the persistent challenges posed by heterogeneous maritime environments in large-scale remote sensing applications. Subsequent iterations could benefit from contrast-adaptive feature enhancement mechanisms.
4.3.3 Instance Segmentation
Instance segmentation in remote sensing imagery entails the precise identification and delineation of individual objects or regions. This task integrates object detection and semantic segmentation
methodologies, necessitating accurate pixel-level localization and discrimination of distinct instances [92]. Datasets: The performance of the proposed instance segmentation method was assessed via comparative experiments on two benchmark datasets: NWPU VHR-10 [93] and SSDD [94]. These datasets were selected for their complementary characteristics, including variations in category diversity and imaging modalities. 1) NWPU [93]: Widely adopted in remote sensing object detection, the NWPU VHR-10 dat-
aset encompasses ten object categories: airplanes, ships, storage tanks, baseball fields, tennis courts, basketball courts, athletic fields, harbors, bridges, and

13
Fig. 12: DynamicVis-L detection examples on LEVIR-Ship test set showing ships under severe environmental interference. Left: ground-truth annotations; Right: the corresponding predictions.
vehicles. The dataset contains 715 optical remote sensing images sourced from Google Earth (spatial resolution: 0.5–2 m) and 85 pansharpened color infrared images from the Vaihingen dataset (spatial resolution: 0.08 m). For evaluation, the data were partitioned into training and testing subsets at an 8:2 ratio. Instancelevel annotations, as specified in [95], were employed for model training and validation. 2) SSDD [94]: The SAR Ship Detection Dataset (SSDD) includes 1,160 synthetic aperture radar-
 (SAR) images with 2,456 ship instances, exhibiting spatial resolutions between 1–15 m. Following an 8:2 split ratio, the dataset was randomly divided into training and testing sets. Instance masks were generated in accordance with the annotation protocol detailed in [96], ensuring pixel-level consistency for model evaluation. Implementation Details: The instance segmentation framework was constructed based on a Mask R-CNN [75]. The original backbone, FPN neck, and RoI extractor were replaced with-
 a pre-trained DynamicVis. All input images were standardized to a resolution of 1024 × 1024 pixels, and standard data augmentation strategies were applied during preprocessing. For optimization, the AdamW optimizer was utilized with an initial learning rate of 2 × 10−4, and training was conducted over 500 epochs using a batch size of 64. Model performance was evaluated using the standard COCO mAP metrics, which encompass bounding box detection (APbox) and instance mask prediction (APmask), measur-
ed at multiple IoU thresholds: 0.5 (AP50) and 0.75 (AP75) for both tasks. Results and Analysis: The proposed method was evaluated against state-of-the-art instance segmentation approaches, including multi-stage frameworks (e.g., Mask R-CNN [75], Mask Scoring R-CNN [97], HTC [98]) and single-stage methods (e.g., SOLOv2 [99], Mask2Former [100]). Notably, CATNet [101] and HQ-ISNet [96] are specialized for remote sensing
TABLE 4: Comparison between the proposed methods and existing state-of-the-art approaches using the NWPU dataset.
Method APbox AP50
box AP75
box APmask AP50
mask AP75
mask
Mask R-CNN 62.3 88.3 75.2 59.7 89.2 65.6 MS R-CNN 62.3 88.6 73.1 60.7 88.7 67.7 HTC 63.9 88.9 75.4 60.9 88.6 64.4 SOLO v2 - - - 50.9 77.5 54.1 SCNet 60.0 87.5 69.1 58.1 87.4 62.0 CondInst 62.3 87.8 73.3 59.0 88.5 62.8 BoxInst 64.8 89.3 73.0 47.6 77.2 51.3 Mask2Former 57.4 75.5 63.7 58.8 83.1 63.5 CATNet 63.2 89.0 73.8 60.4 89.6 65.5 HQ-ISNet 63.5 89.9 75.0 60.4 89.6 64.1
RSPrompter-anchor 70.3 93.6 81.0 66.1 92.7 70.6 RSPrompter-query 68.4 90.3 74.0 67.5 91.7 74.8
DynamicVis-B† 63.7 88.2 71.2 62.4 87.8 68.3 DynamicVis-B‡ 65.0 89.9 71.9 63.2 88.8 67.8 DynamicVis-B 68.5 90.8 79.6 67.3 91.5 73.8 DynamicVis-L† 64.4 89.6 75.9 64.8 90.2 68.8 DynamicVis-L‡ 64.9 89.8 75.5 65.1 90.8 69.2 DynamicVis-L 69.1 93.1 80.8 67.8 91.9 75.1
TABLE 5: Comparison between the proposed methods and existing state-of-the-art approaches using the SSDD dataset.
Method APbox AP50
box AP75
box APmask AP50
mask AP75
mask
Mask R-CNN 67.7 95.6 84.9 64.3 92.6 80.9 MS R-CNN 67.8 95.3 85.9 64.9 93.3 80.4 HTC 69.3 97.1 85.7 64.1 94.4 80.6 SOLO v2 - - - 58.5 86.2 74.0 SCNet 66.9 92.5 82.5 64.9 92.6 80.1 CondInst 68.1 92.4 85.5 62.5 93.4 81.2 BoxInst 62.8 96.2 74.7 45.2 92.3 35.3 Mask2Former 62.7 90.7 75.6 64.4 93.0 82.4 CATNet 67.5 96.8 80.4 63.9 93.7 80.1 HQ-ISNet 66.6 95.9 80.2 63.4 95.1 78.1
RSPrompter-anchor 70.4 97.7 86.2 66.8 94.7 84.0 RSPrompter-query 66.0 95.6 78.7 67.3 95.6 84.3
DynamicVis-B† 66.6 97.8 78.0 68.3 97.8 85.3 DynamicVis-B‡ 67.0 97.6 81.3 68.3 97.5 86.2 DynamicVis-B 70.8 97.7 87.1 70.8 97.7 89.4 DynamicVis-L† 67.7 97.7 82.0 69.6 97.7 88.3 DynamicVis-L‡ 68.9 97.7 84.2 70.1 97.7 88.1 DynamicVis-L 71.5 97.8 85.2 71.0 97.8 89.2
data. Additionally, the SAM-based foundation model RSPrompter [11], with its anchor-based (RSPrompter-anchor) and query-based (RSPrompter-query) variants, was also included for comparison. 1) NWPU: Experimental results on the NWPU dataset (Table 4) reveal the following insights, with the top three methods distinguished by darker shading: a) DynamicVis achieves competitive performance in both object detection and mask segmentation, matching SAM-based foundation models while outperforming convention-
al approaches. b) The dynamic token selection mechanism moderately enhances model efficacy, suggesting that prioritizing salient targets can improve instance-level interpretation. c) Compared to RSPrompter, DynamicVis exhibits superior segmentation accuracy, particularly in preserving local details and edge delineation, albeit with marginally lower detection performance. d) Scaling the network from base to large yields measurable performance gains. 2) SSDD: Experiments on the single-class SAR data-
set SSDD (Table 5) demonstrate consistent trends. Despite inherent challenges in class discrimination within SAR data, DynamicVis surpasses RSPrompter across most metrics, regardless of metaembedded pre-training status. This underscores its adaptability to diverse remote sensing modalities. The notably high precision

14
(a)
(b)
(c)
(d)
Fig. 13: Segmentation results of DynamicVis-L on the NWPU test set. Left: ground truth annotations; Right: model predictions.
in AP75 further validates its ability to generate accurate mask boundaries. Visualization: Qualitative results for DynamicVis-L are illustrated in Figs. 13 and 14, which showcase instance segmentation results on the NWPU and SSDD test datasets. Robust performance is observed across challenging scenarios, such as small-scale objects and densely clustered configurations. Notably, the model excels at capturing fine-grained local details, particularly in edge preservation, which facilitates precise ob-
ject boundary delineation. These visualizations underscore DynamicVis-L’s ability to maintain structural integrity even under complex spatial arrangements, validating its effectiveness in handling diverse remote sensing contexts.
4.3.4 Semantic Segmentation
Semantic segmentation constitutes a pixel-level classification task that assigns categorical labels to each pixel in an image. The task requires not only robust object recognition but also precise boundary delineation, thereby presenting greater complexity than conventional image classification, which assigns a singular label to the entire image. Due to its critical role in applications such as environmental monitoring, urban planning, and land-use management [102], this study evaluates the perfor-
mance of semantic segmentation by focusing on two representative remote sensing tasks: building segmentation and road extraction. Datasets: The evaluation employs two single-category segmentation datasets: the Massachusetts roads dataset [103] and the Wuhan University (WHU) building dataset [104]. These datasets were selected for their contrasting morphological properties: roads
(a)
(b)
(c)
(d)
Fig. 14: Segmentation results from DynamicVis-L on the SSDD test set. Left: ground truth annotations; Right: model predictions.
exhibit elongated linear topologies, while buildings manifest as discrete connected regions with distinct instance-level boundaries, alongside notable differences in spatial distribution patterns. 1) Massachusetts [103]: This dataset comprises 1,171 RGB aerial images (1,500 × 1,500 pixels each, ∼2.25 km2 coverage) partitioned into 1,108 training, 14 validation, and 49 test samples. Spanning urban, suburban, and rural environments across a cumulative area exceeding 2,600 km2, the test subset specif-
ically covers 110 km2 with a spatial resolution of 1 m/pixel. Ground truth annotations were generated by rasterizing OpenStreetMap road centerlines into binary masks using 7-pixel-wide unsmoothed lines, where road pixels are encoded as white and non-road pixels as black. 2) WHU [104]: The aerial photography subset, obtained from New Zealand’s Land Information Service, was utilized for evaluation. Original imagery at 0.075-meter resolution (450 km2 coverage) was downsampled to 0.3-meter resolution -
and tiled into 512 × 512 pixels. The final dataset contains approximately 222,000 building instances distributed across 8,189 tiles: 4,736 for training, 1,036 for validation, and 2,416 for testing. Implementation Details: The proposed semantic segmentation framework was developed based on the UperNet [76] architecture. Both the backbone and FPN neck were initialized with the pre-trained DynamicVis. Input images were standardized

15
TABLE 6: Comparison of the proposed method with other approaches on the Massachusetts road dataset.
Method P R F1 IoU
SegNet 78.89 67.73 72.25 57.02 U-Net 77.53 77.82 77.67 63.50 ResUNet 80.76 71.49 75.69 61.21 D-LinkNet 78.34 77.91 78.12 64.10 HRNetv2 79.01 78.20 78.60 64.75 DeeplabV3 80.81 75.17 77.89 63.79 DANet 81.69 75.39 78.41 64.49 DeeplabV3+ 83.07 75.62 79.17 65.53 Mask2Former 80.17 73.87 76.63 62.11 HRNet 83.57 75.78 79.49 65.96 PoolFormer 83.16 74.99 78.87 65.11 PSPNet 82.77 73.15 77.66 63.48 PSANet 80.63 76.19 78.35 64.41 UperNet 83.03 75.90 79.30 65.70 Segformer 83.55 74.78 78.92 65.18 SIINet 85.36 74-
.13 79.35 65.77 BDTNet 82.99 76.37 79.54 66.03 RoadFormer 80.54 78.90 79.71 66.27 GA-Net 84.10 76.89 80.33 67.13
DynamicVis-B† 83.67 73.55 78.34 64.32 DynamicVis-B‡ 83.79 71.94 78.09 63.16 DynamicVis-B 82.31 76.44 79.26 65.66 DynamicVis-B2× 83.05 76.80 79.80 66.40 DynamicVis-L† 84.12 73.72 78.57 64.70 DynamicVis-L‡ 82.82 73.87 78.23 64.06 DynamicVis-L 83.18 76.52 79.72 66.26 DynamicVis-L2× 84.91 76.12 80.07 67.06
to a resolution of 512 × 512 pixels and subjected to a comprehensive augmentation pipeline, including random resizing, cropping, flipping, and photometric distortion. For the Massachusetts road dataset, however, random resizing was omitted to preserve scale consistency, a critical requirement for maintaining fixed roadwidth annotations in segmentation maps. The efficient architectural design of DynamicVis further enabled the processing of larger-scale inputs, denoted as 2× (i.e., 1024 × 1024 pixel-
s), achieved by bilinear upsampling of original images. The AdamW optimizer was employed with an initial learning rate of 1 × 10−3, coupled with cosine annealing decay over 500 training epochs, utilizing a batch size of 256. Model performance was quantified using precision (P), recall (R), F1-score (F1), and Intersection-over-Union (IoU), with all metrics calculated exclusively for the target class to ensure task-specific evaluation. Results and Analysis: A systematic comparative analysis was cond-
ucted between the proposed DynamicVis and multiple task-specific models through numerical evaluations derived from published literature and official code re-implementations. 1) Massachusetts: The results in Table 6 reveal four principal observations: a) DynamicVis achieves superior performance relative to most existing methodologies. Quantitative evaluations using F1 and IoU metrics show that DynamicVis-L2× approaches the performance of the state-of-the-art GA-Net [105], albeit marginally lower. T-
his discrepancy can be attributed to GANet’s architectural complexity, characterized by multi-level feature fusion, auxiliary supervision branches, and explicit geometric constraints. b) Token selection (denoted as † →‡) led to minor performance degradation, primarily due to the inherent difficulty of modeling fine-grained road structures in large-area images
TABLE 7: Comparison of the proposed method with other approaches on the WHU building extraction dataset.
Method P R F1 IoU
FCN 92.29 92.84 92.56 86.16 SegNet 93.42 91.71 92.56 86.15 U-Net 94.50 90.88 92.65 86.31 PSPNet 93.19 94.21 93.70 88.14 HRNet 91.69 92.85 92.27 85.64 MA-FCN 94.75 94.92 94.83 90.18 DeepLabv3 95.03 93.12 94.06 88.80 Deeplabv3+ 94.31 94.53 94.42 89.43 DANet 95.13 94.12 94.62 89.80 Mask2Former 92.26 92.22 92.24 85.60 HRNet 94.78 93.64 94.20 89.05 PoolFormer 95.10 94.24 94.67 89.88 PSPNet 94.46 94.38 94.42 89.43 UperNet 95.60 94.21 94.90 90.30 PSANet 94.15 93.96 94.06 88.78 ResUNet 94.49 94.71 94.60 8-
9.75 MAP-Net 93.99 94.82 94.40 89.40 Segformer 94.72 94.42 94.57 89.70 TransUNet 94.05 93.07 93.56 87.89 CMTFNet 90.12 95.21 92.59 86.21 RSM-SS 95.25 95.12 95.18 90.81 STT - - 94.97 90.48
DynamicVis-B† 95.59 94.06 94.83 90.16 DynamicVis-B‡ 94.91 93.83 94.37 89.33 DynamicVis-B 95.43 95.11 95.27 90.98 DynamicVis-B2× 95.82 95.01 95.41 91.23 DynamicVis-L† 95.36 94.72 95.04 90.55 DynamicVis-L‡ 94.45 94.17 94.31 89.24 DynamicVis-L 96.39 94.27 95.32 91.06 DynamicVis-L2× 95.87 95.28 95.58 91.54
using sparse token-based representations. c) Meta-representation learning within the token selection framework demonstrated substantial performance improvements over the baseline without token selection. This suggests that geographic prior-integrated pretraining facilitates more discriminative token activation, thereby enhancing the representational efficiency of selected tokens. d) Input resolution doubling yielded significant gains, emphasizing the critical role of high-resolution inputs in pixe-
l-level segmentation. The increased resolution preserves finer spatial details, effectively mitigating feature loss during network downsampling.
2) WHU: As shown in Table 7, the WHU experiments exhibit trends consistent with the Massachusetts benchmark. DynamicVis achieves state-of-the-art performance on WHU, with its variants securing top-three rankings across most metrics. This performance superiority is attributed to the dataset’s distinct characteristics: buildings manifest as discrete, instance-level objects, where the proposed importance-aware token selection mechanism is particularly effective in modeling inter-region dependencies. -
In contrast, the Massachusetts dataset’s continuous road networks occupy extensive image regions, posing challenges for localized feature modeling. These limitations are addressable through reduced patch sizes, increased patch numbers, or resolution enhancement. Such adaptations resolve the inherent constraints of conventional selective attention mechanisms when processing elongated, interconnected structures.
Visualization: Qualitative results in Fig. 15 and Fig. 16 demonstrate the efficacy of DynamicVis-L in segmenting roads

16
Fig. 15: Comparative analysis of road detection performance between the proposed method and existing approaches on the Massachusetts road dataset. True positive (TP), false negative (FN), and false positive (FP) detections are annotated with green, blue, and red markers, respectively.
and buildings from the Massachusetts and WHU test datasets, respectively. Robust feature extraction capabilities are exhibited for artificial structures, with structural continuity preserved across varying geometric configurations and spatial distributions. Notably, superior robustness is observed under challenging scenarios characterized by low image clarity or significant occlusions (e.g., dense vegetation). In such cases, competing methods frequently generate spurious detections or fail to loca-
lize critical features, whereas DynamicVis-L maintains high precision. This resilience is attributed to the framework’s adaptive attention mechanisms, which dynamically prioritize discriminative regions while suppressing noise.
4.3.5 Change Detection
The detection of meaningful changes in remote sensing imagery constitutes a complex analytical challenge that demands advanced semantic comprehension. This process requires effective differentiation between significant spatiotemporal variations and
inconsequential alterations within spatiotemporally aligned image sequences. The present study focuses on bi-temporal remote sensing image change detection, a framework in which pairs of temporally separated but geographically co-registered images are processed to produce binary masks delineating regions of interest where targeted changes have occurred [106–108].
Datasets: Experiments were conducted on three benchmarks: LEVIR-CD [109], WHU-CD [104], and OSCD [110], selected for their diversity in data sources, spatial scales, and resolution characteristics. These datasets serve as standard benchmarks for evaluating remote sensing foundation models.
1) LEVIR-CD [109]: This dataset contains 637 pairs of 1024 × 1024 Google Earth images with a spatial resolution of 0.5 meters per pixel. Collected from 20 distinct geographic regions in Texas, USA, between 2002 and 2018, the corpus encompasses 31,333 annotated change instances. Following the official partitioning scheme, the data are divided into 445 training pairs, 64 validation pairs, and 128 test pairs. For computational efficiency,

17
Fig. 16: Comparative analysis of road detection performance between the proposed method and existing approaches on the WHU building dataset. True positive (TP), false negative (FN), and false positive (FP) detections are annotated with green, blue, and red markers, respectively.
all images were resized to 512 × 512 pixels during training and testing.
2) WHU-CD [104]: Comprising two large-scale aerial images (32507 × 15354 pixels) captured in 2012 and 2016 at 0.3m resolution, this dataset focuses on building changes in disaster-affected regions, with 12,796 and 16,077 building instances annotated in the respective temporal samples. To align with established evaluation protocols, the images were partitioned into non-overlapping 256 × 256 patches, yielding 5,947 training pairs, 744 validation pairs, and 744 test pairs.
3) OSCD [110]: This multispectral dataset consists of 24 Sentinel-2 image pairs (average dimensions 600 × 600 pixels) acquired between 2015 and 2018 across global regions, including Brazil, the United States, and Asia. The data exhibit heterogeneous spatial resolutions (10m, 20m, 60m) across spectral bands. Following official guidelines, 14 pairs were designated for training and 10 for validation. Images were processed into 256×256 blocks with 128-pixel overlapping regions to mitigate boundary eff-
ects.
Although DynamicVis supports multi-channel input, experiments were conducted using the standard three-channel (RGB) configuration for consistency.
Implementation Details: The bi-temporal image pairs are processed using a pre-trained DynamicVis consisting of a backbone and a neck. This framework generates hierarchical feature maps at multiple scales. These features are concatenated and fed into an MLP decoder to produce a probabilistic change detection map. We employed a composite loss function integrating crossentropy and Dice loss. Inputs denoted as 2× are upsampled to twice their original spatial dimensions. To ensure robustness against ov-
erfitting, data augmentation strategies are applied during training. The training protocol utilizes the AdamW optimizer with an initial learning rate of 5 × 10−4, combined with a cosine annealing learning rate scheduler and a warmup phase to stabilize convergence. The model is trained for 300 epochs with a batch size of 128, leveraging a distributed computing infrastructure powered by 8 NVIDIA A100 GPUs. Performance evaluation focuses on the

18
TABLE 8: Performance comparison of various change detection methods evaluated on the LEVIR-CD test dataset.
Method P R F1 IoU
FC-EF 86.91 80.17 83.40 71.53 FC-Siam-Diff 89.53 83.31 86.31 75.91 STANet 83.81 91.00 87.26 77.39 SNUNet 89.18 87.17 88.16 78.83 BIT 89.24 89.37 89.30 80.68 GCD-DDPM 90.68 91.24 90.96 83.56 ChangeStar - - 91.25 83.92 Changen - - 91.50 HCGMNet 92.96 90.61 91.77 84.79 ChangerEx 92.97 90.61 91.77 WNet 91.16 90.18 90.67 82.93 C2FNet 93.69 90.04 91.83 84.89 P2V-CD 93.32 90.60 91.94 ChangeCLIP-ViTB 93.68 89.04 91.30 83.99 BAN-BIT 92.83 90.89 91.85 84.93 GFM - - 91.73 SatLas - - 90.62 CACo - - 81.04 SatM-
AE - - 87.65 RVSA - - 90.86 ChangeFormer 92.05 88.80 90.40 82.47 ICIFNet - - 89.96 81.75 DMINet - - 90.71 82.99 GASNet - - 90.52 83.48 DDPM-CD - - 90.91 83.35 AMTNet 91.82 89.71 90.76 83.08 BiFA 91.52 89.86 90.69 82.96 RSM-CD 92.52 89.73 91.10 83.66 CDMamba 91.43 90.08 90.75 83.07 ChangeMamba 91.59 88.78 90.16 82.09 SeCo-BiT-R50 - - 90.14 RSP-BIT-VITAEv2-S - - 90.93 ChangeViT-T - - 91.81 84.86 RingMo-BIT-SwinB 92.47 91.17 91.85 Scale-MAE - - 92.07 TTP 93.00 91.70 92.10 85.60 MTP-IMP - - 92.54 SkyS-
ense - - 92.58 
DynamicVis-B† 93.22 89.54 91.34 84.06 DynamicVis-B‡ 92.89 89.02 90.92 83.32 DynamicVis-B 93.65 90.09 91.82 84.75 DynamicVis-B2× 93.79 90.36 92.05 85.19 DynamicVis-L† 92.73 90.69 91.69 84.66 DynamicVis-L‡ 93.00 89.51 91.22 83.86 DynamicVis-L 93.52 90.15 91.90 84.81 DynamicVis-L2× 93.97 90.48 92.32 85.31
“change” class foreground, with metrics including Precision (P), Recall (R), IoU, and F1 score (F1). Results and Analysis: A comprehensive comparative evaluation was conducted to benchmark the performance of the proposed DynamicVis. The evaluation framework encompassed five methodological categories: 1) traditional convolutional architectures (e.g., STANet [109], SNUNet [111], and HCGMNet [112]); 2) Transformer-based approaches (e.g., BIT [113] and ChangeFormer [114]); 3) Mamba-based architectures-
 (e.g., RSMCD [115], CDMamba [60], and ChangeMamba [61]); 4) diffusion probabilistic models (GCD-DDPM [116] and DDPM-CD [117]); and 5) pre-trained foundation models, which were further divided into two subgroups: those trained on natural images (ChangeCLIPViTB [6], BAN-BIT [49], and TTP [118]) and those tailored for remote sensing (SeCo-BiT-R50 [119], RingMo-BIT-SwinB [13], MTP-IMP [42], and SkySense [10]). Performance metrics were derived either from published results or through re-implementation
TABLE 9: Performance comparison of various change detection methods evaluated on the WHU-CD test dataset.
Method P R F1 IoU
FC-EF 78.86 78.64 78.75 64.95 FC-Siam-Diff 84.73 87.31 86.00 75.44 STANet 79.37 85.50 82.32 69.95 SNUNet 85.60 81.49 83.49 71.67 CDNet 91.75 86.89 89.25 80.59 BIT 86.64 81.48 83.98 72.39 ChangeFormer 90.09 84.85 87.39 77.61 GCD-DDPM 92.79 92.29 92.54 86.52 CEECNet 95.57 92.04 93.77 88.23 CGNet 94.47 90.79 92.59 86.21 WNet 92.37 90.15 91.25 83.91 P2V-CD 95.48 89.47 92.38 DDPM-CD - - 92.65 86.31 FresUNet 86.55 77.68 81.88 69.32 ICIFNet 92.98 85.56 88.32 79.24 DMINet 93.84 86.25 88.69 79.68 GASNet - -
- 91.75 84.76 EATDer 91.32 88.74 90.01 81.97 MTCNet 75.10 91.90 82.65 70.43 MSCANet 91.10 89.86 90.47 82.60 RSM-CD 93.37 90.42 91.87 84.96 ChangeMamba 94.21 90.94 92.55 86.13 CDMamba 95.58 92.01 93.76 88.26 PA-Former 94.28 90.38 92.29 85.69 DARNet 91.99 91.17 91.58 84.46 FMCD 96.02 92.99 94.48 ChangeCLIP-ViT-B 96.02 93.58 94.78 90.08 ChangeViT-T - - 94.53 89.63 MTP-IMP - - 95.59 
DynamicVis-B† 96.43 89.83 93.01 86.94 DynamicVis-B‡ 95.63 89.23 92.61 86.04 DynamicVis-B 96.56 91.48 93.73 88.06 DynamicVis-B2× 96.82 91.86 94.27 89.52 DynamicVis-L† 96.41 90.04 93.12 87.11 DynamicVis-L‡ 96.01 89.64 92.71 86.91 DynamicVis-L 96.41 90.83 93.60 87.91 DynamicVis-L2× 96.78 92.50 94.79 89.85
using official source code, with the top three methods distinguished by a gray background for clarity. 1) LEVIR-CD: A comparative analysis between DynamicVis and SOTA algorithms was conducted, with experimental results summarized in Table 8. Three key observations show: a) Despite employing only millions of parameters, DynamicVis achieves performance comparable to SOTA models with billions of parameters (e.g., RingMo, TTP, and MTP) across multiple evaluation metrics. This underscores the efficacy -
of the proposed dynamic visual perception mechanism in addressing sparse distribution priors inherent to building change detection tasks. Following extensive pre-training, the model consistently ranks among the top three performers for most metrics, matching the capabilities of foundational models. b) While the dynamic perception mechanism introduces a marginal performance decline compared to dense modeling approaches, it significantly enhances both training efficiency and deployment practicality.-
 Notably, when pre-trained with general remote sensing knowledge, the model surpasses counterparts lacking the selective modeling mechanism by a substantial margin. c) Elevated input resolution further improves detection accuracy beyond most existing methods, with minimal computational overhead due to the integrated state space model and selective mechanism.

19
TABLE 10: Performance comparison of various change detection methods evaluated on the OSCD test dataset.
Method P R F1 IoU
FC-EF - - 48.89 DTCDSCN - - 36.13 22.05 SNUNet - - 27.02 15.62 ChangeFormer - - 38.22 23.62 BIT - - 29.58 17.36 ICIFNet - - 23.03 13.02 DMINet - - 42.23 26.76 SwiMDiff 63.60 40.90 49.60 GASNet - - 10.71 5.66 AMTNet - - 10.25 5.40 EATDer - - 54.23 36.98 ChangeViT-T - - 55.13 38.06 ChangeViT-S - - 55.51 38.42 GASSL - - 46.26 SeCo 57.71 49.23 49.82 CACo 62.87 44.49 52.11 MoCo-v2 64.49 30.94 40.71 Swin-22k 46.88 59.28 52.35 ViT-22k 52.09 52.37 52.23 SatMAE 55.18 50.54 52.76 DINO-MC - - 52.70 MTP-IMP --
 - 55.61 SpectralGPT 51.65 56.15 53.51 SpectralGPT+ 52.39 57.20 54.29 MATTER 61.80 57.13 59.37 GFM 58.07 61.67 59.82 SkySense - - 60.06 
DynamicVis-B† 75.08 44.37 55.78 38.67 DynamicVis-B‡ 71.21 41.03 52.06 35.19 DynamicVis-B 74.28 45.24 56.23 39.11 DynamicVis-B2× 77.52 48.81 59.90 42.75 DynamicVis-L† 64.83 49.20 55.95 38.84 DynamicVis-L‡ 74.42 42.23 53.88 36.88 DynamicVis-L 72.77 46.99 57.11 39.96 DynamicVis-L2× 79.41 48.36 60.25 43.16
2) WHU-CD: As shown in Table 9, the WHU-CD dataset exhibits greater complexity than LEVIR-CD, characterized by a larger sample size, higher positive pixel ratios, and superior spatial resolution. These attributes amplify challenges for dynamic visual selection mechanisms, leading to a more pronounced performance gap relative to SOTA benchmarks. However, experiments reveal that DynamicVis’s operational efficacy can be markedly improved through two strategies: input resolution optimization and compr-
ehensive pre-training protocols. Higher-resolution inputs, combined with robust pre-training, enhance feature discrimination in scenarios involving complex spatial-spectral variations, validating the framework’s adaptability across diverse remote sensing contexts. 3) OSCD: The OSCD dataset, distinguished by its smaller scale and lower resolution, captures macroscopic ground object changes and has been widely adopted for validating foundational remote sensing models. Table 10 highlights two critica-
l findings from comparisons with SOTA methods: a) DynamicVis outperforms existing algorithms on data adhering to sparse distribution priors, achieving the highest composite metrics (particularly F1 and IoU scores). b) The model exhibits significantly higher precision than recall, indicating conservative yet accurate identification of changed pixels. This observation indirectly corroborates the inherent sparsity of positive samples in the dataset.
TABLE 11: Performance comparison on the fMoW test set.
Method P R F1
ResNet-50 95.86 95.61 95.56 ViT-B 96.62 96.87 96.68
DynamicVis-B (CE) 96.45 96.54 96.37 DynamicVis-B (MIL) 97.49 97.03 97.19 DynamicVis-L (CE) 97.05 96.72 96.84 DynamicVis-L (MIL) 97.91 97.97 97.87
Visualization: The performance of DynamicVis is validated through visual analysis on the widely adopted LEVIR-CD dataset (Fig. 17). The model demonstrates robust adaptability to diverse spatiotemporal conditions, including variations in illumination and seasonal transitions, while maintaining high-precision change detection. Despite inherent annotation errors in the dataset, such as omissions and misclassifications, DynamicVis achieves accurate change delineation with minimal interference from the-
se inconsistencies. This capability is particularly pronounced in challenging scenarios involving subtle or extreme changes, which are frequently undetected in manual annotations, underscoring the model’s advanced perceptual robustness. Furthermore, the framework exhibits exceptional edge preservation and fine-grained segmentation accuracy, outperforming existing methods in capturing intricate structural details.
4.3.6 Region Classification
Region classification represents a mid-level semantic understanding task that differs fundamentally from image classification. While the latter assigns semantic labels to entire images, region classification categorizes predefined spatial segments within an image according to their semantic content. This task is further distinguished from object detection as it focuses exclusively on classifying the contents within roughly annotated object or region boxes, rather than performing box regression. Th-
e model’s region classification capabilities were evaluated using the fMoW dataset. Datasets: The fMoW dataset [33] provides region-level annotations, which were utilized for both pre-training and evaluation purposes in this study. Performance evaluation of region classification was conducted using the dataset’s test split. The training protocol and data partitioning scheme were maintained consistent with the pre-training process in this paper, whereby 20,000 images were randomly sampled to consti-
tute the test set, with the remaining data allocated for training purposes. Implementation Details: The training protocol followed the implementation specifications outlined in the methodology section. To evaluate the influence of loss function selection on model efficacy, a comparative analysis was conducted by employing Cross-Entropy (CE) and Multiple Instance Learning (MIL) loss functions. Model performance was assessed using standard evaluation metrics, including multi-class averaged Precision-
 (P), Recall (R), and F1-score (F1). Results and Analysis: Both base and large model configurations were systematically tested using CE and MIL loss functions. The proposed DynamicVis was benchmarked against established baselines, including ResNet-50 and ViT-B, with quantitative comparisons detailed in Table 11. When trained with CE loss, DynamicVis achieved performance parity with the ViT-B architecture while surpassing the ResNet-50 baseline by a significant margin. Notably, the MIL-trained vari-
ant exhibited enhanced latent space

20
Image 1 Image 2 Label Prediction Image 1 Image 2 Label Prediction
Fig. 17: Detection samples from DynamicVis on the LEVIR-CD test set. The red boxes highlight the capability of DynamicVis to accurately depict “changes” in complex scenes, some of which have even been overlooked by human annotators.
TABLE 12: Comparison results are presented as mAP at top-20 (mAP@20) for the BigEarth and ForestNet datasets. The 64-bit hash implementation utilizes the described trivial hashing, wherein embedding values are averaged for each bit position.
Model Band Method BE-43 BE-19 FN-12 FN-4
Prithvi all
Embedding 97.62 97.98 44.51 60.76 Binary emb. 97.44 97.83 43.28 59.85 64-bit hash 92.58 93.44 41.49 55.93
SatMAE all
Embedding 94.78 95.59 37.61 52.94 Binary emb. 89.39 90.40 36.49 53.04 64-bit hash 79.35 80.99 30.79 47.19
Prithvi RGB
Embedding 92.15 93.17 38.65 53.85 Binary emb. 91.38 92.43 38.11 53.31 64-bit hash 82.60 84.45 32.58 48.20
ViT-B RGB
Embedding 89.31 90.21 38.92 56.49 Binary emb. 88.71 89.70 39.19 57.01 64-bit hash 79.01 81.54 33.60 49.63
DynamicVis-B RGB
Embedding 94.65 95.59 44.15 62.92 Binary emb. 94.07 95.04 43.94 62.64 64-bit hash 88.66 89.95 36.50 56.31
DynamicVis-L RGB
Embedding 94.98 95.82 44.86 63.59 Binary emb. 94.28 95.46 44.71 63.28 64-bit hash 89.15 90.58 36.98 56.86
separability between semantic categories, which correlated with improved overall metrics. Empirical analysis further revealed that systematically increasing the model’s depth and width parameters led to measurable improvements in classification accuracy.
4.3.7 Image Retrieval
The primary objective of image retrieval is to identify images that exhibit visual or semantic similarity to a given input image or text-based query. In the context of remote sensing, the exponential growth of data acquisition has led to significant challenges in managing information overload. To address this, remote sensing image retrieval has emerged as a critical tool for the efficient organization of large-scale data archives and the rapid extraction of relevant imagery. A typical image retrie-
val workflow involves four sequential stages: 1) feature extraction, 2) feature representation,
3) feature matching, and 4) result ranking [120]. In this study, a pre-trained foundational DynamicVis is proposed, which leverages a zero-shot learning framework to autonomously derive semantic visual features from both query inputs and database entries, thereby enabling efficient image retrieval. Datasets: This study employs two publicly available multispectral datasets with multiclass annotations: BigEarthNet [121] and ForestNet [122]. 1) BigEarthNet [121]: The BigEarthNet dataset integrates Se-
ntinel-1 and Sentinel-2 satellite imagery, with each sample spatially resolved to 120 × 120 pixels across 13 spectral bands. It features two distinct multilabel annotation schemes comprising 19 and 43 classes, respectively, encompassing diverse land-use categories such as mixed forests, water bodies, and urban infrastructure. In alignment with established experimental protocols from prior work, only the Sentinel-2 RGB bands are utilized in this experiment. The official validation set is adopted as-
 the query set, while the test set functions as the retrieval database. 2) ForestNet [122]: The ForestNet dataset contains Landsat 8 imagery designed to monitor forest loss events, with each image spanning 332 × 332 pixels. Annotations include 12 finegrained categories hierarchically organized under 4 superclasses, distinguishing deforestation drivers such as timber plantations and small-scale agriculture. Consistent with the preprocessing applied to BigEarthNet, RGB bands are exclusively retained-
 for analysis. The validation partition is designated as the query set, and the test partition serves as the retrieval database. Implementation Details: Semantic feature vectors are extracted from images in a zero-shot manner using a pre-trained foundation model and stored offline for subsequent processing. The similarity between query and database vectors is computed via Hamming distance. To optimize retrieval efficiency and minimize memory consumption, hash encoding is introduced to compress the-
 embedding vectors further. Two primary approaches are adopted: 1) direct binarization of the embedding vectors and 2) average pooling of the embeddings to a fixed length (e.g., 64 dimensions) followed by binarization. The evaluated models include the proposed DynamicVis,

21
BigEarthNet-43
ForestNet-12
Fig. 18: Examples from the ForestNet-12 and BigEarthNet-43 datasets: query images (left) with their corresponding labels and retrieved images (right) using DynamicVis with 64-bit hash codes. The retrieval quality is indicated by color-coded frames: green frames denote correct matches, red indicates incorrect, and orange represents partial matches (with numbers showing the count of matching labels).
Embedding Binary Emb. 64-bit hash 32-bit hash
Fig. 19: t-SNE visualization of the ForestNet-4 test set, with classes differentiated by color coding, comparing embeddings generated by ViT against those produced by DynamicVis.
Prithvi-100M [123], SatMAE-ViT-B [45], and ViT [15]. For feature extraction, only the backbone networks of these models are utilized, with extracted features aggregated into 1D vectors through mean pooling. Prithvi-100M, a ViT with 100 million parameters, is designed for 224 × 224 pixels. It processes six spectral bands and is pre-trained on 10-meter resolution imagery from Landsat 8 and Sentinel-2 satellites. When handling RGB-only
data, the additional infrared channel is populated by averaging the RGB values to align with Prithvi-100M’s input specifications. SatMAE, a ViT-B/16 architecture, is pre-trained on ten Sentinel-2 bands at 10-meter resolution and accepts 96 × 96 pixel inputs. The standard ViT-B/16 model, pre-trained on ImageNet-21K, is also included for comparison.
Retrieval experiments are performed using three representations: 768-dimensional embeddings, binary embeddings, and 64bit hash codes. Unless specified, inputs are restricted to RGB channels. To accommodate varying input size requirements across models, images are resampled via bilinear interpolation, potentially altering spatial resolutions relative to the original pretraining configurations. Notably, SatMAE was not trained on Landsat data, while Prithvi-100M was pre-trained exclusively on Landsat-
 8 and Sentinel-2 imagery from the United States. In contrast, the evaluation datasets BigEarthNet and ForestNet encompass European and Indonesian regions, respectively.
Following established evaluation protocols, mAP is calculated over the top 20 retrieved images. For multilabel datasets, overlapping labels between query and retrieved images are treated as positive matches. The validation set of each dataset serves as the query set, while the test set functions as the retrieval database.
Results and Analysis: The comparative performance of the proposed methodology against existing approaches is summarized

22
in Table 12, which evaluates mAP at the top 20 retrieval results. Key findings from this analysis are outlined as follows: a) When restricted to RGB spectral inputs, the DynamicVis framework achieves superior performance, surpassing both the natural image pre-trained ViT and the multispectral remote sensing foundation model Prithvi. These results demonstrate the robust feature representation capabilities of DynamicVis under zero-shot evaluation scenarios. b) While the Prithvi model exhibits enhanc-
ed performance on most datasets by leveraging auxiliary spectral bands, the RGB-based DynamicVis framework remains highly competitive. Notably, on the ForestNet dataset, DynamicVis achieves parity with or exceeds Prithvi’s performance despite being limited to RGB inputs, underscoring its efficacy in scenarios with constrained spectral information. c) Experiments on embedding compression reveal that binary quantization of the original feature vectors incurs negligible performance degradation while -
significantly improving storage efficiency and computational speed. This suggests that binarization preserves the critical semantic relationships within the feature space. In contrast, 64-bit quantization introduces more pronounced performance declines, indicating its application should be contextually justified by specific operational trade-offs. d) A consistent performance gap is observed between the multilabel BigEarth dataset and the single-label ForestNet benchmark. This discrepancy is attrib-
uted to the inherent flexibility of multilabel classification paradigms, which tolerate partial prediction errors, and the heightened discriminative demands of ForestNet’s fine-grained subclass retrieval task. The latter necessitates more precise feature extraction to distinguish semantically proximate categories. Visualization: A comparative t-SNE visualization of feature embeddings and hash-encoded representations generated by ViT and DynamicVis-B architectures is presented in Fig. 19. The analy-
sis reveals that DynamicVis-B produces a more structured latent space distribution compared to ViT, a conclusion consistent with the quantitative superiority demonstrated in Table 12. Notably, floating-point embeddings, binary embeddings, and 64bit trivial hashes exhibit enhanced cluster separation and intraclass compactness relative to 32-bit trivial hashes, suggesting that shorter hash lengths, while computationally efficient, compromise semantic discriminability. Further insights are provided i-
n Fig. 18, which illustrates retrieval results using trivial hashing on DynamicVis-B generated embeddings. The model demonstrates stronger performance on the BigEarthNet-43 dataset than on ForestNet-12. For BigEarthNet43, retrieved instances exhibit partial label correspondence, whereas ForestNet-12 results include erroneous matches. These inaccuracies predominantly occur in cases where non-target images share similar spatial patterns and spectral characteristics with query samples, underscoring t-
he inherent challenges of finegrained retrieval in remote sensing scenarios characterized by high inter-class similarity.
4.4 Ablation Study
This section conducts a comprehensive ablation analysis and parametric evaluation to systematically assess the efficacy of individual components within the proposed model. Each architectural module and parametric configuration is methodically isolated during experimentation to quantify their individual contributions to the model’s overall performance. To ensure experimental efficiency, all ablation studies and parametric optimizations were performed
TABLE 13: Inference efficiency across various models is compared at an input resolution of 512 × 512.
Model Max Params. FLOPs Throughput
BS (M) (G) (Sampels/s)
ResNet18 1200 11.69 9.50 1200 ResNet50 642 25.56 21.47 340 ResNet101 608 44.55 40.92 200 ViT-B 268 87.20 87.76 86 ViT-L 208 305.00 362.00 26
DynamicVis-B† 186 36.76 54.28 90 DynamicVis-B 998 36.77 30.07 196 DynamicVis-L† 132 91.27 151.00 45 DynamicVis-L 786 91.29 82.31 92
exclusively on the AID dataset, which was selected for its larger scale and relevance to remote sensing image classification tasks. This targeted strategy facilitates the efficient identification of optimal network architectures and hyperparameter settings while preserving experimental rigor and ensuring alignment with the study’s research objectives.
4.4.1 Effects of Different Model Versions
The model scale, defined by both depth (number of layers) and width (feature dimensions), is critical in determining efficiency and accuracy. To systematically investigate this relationship, two variants (base and large) were developed within our framework; their respective depth and width configurations are detailed in Table 1. Empirical evaluations conducted on the UC Merced and AID datasets (see Table 2) confirm that model performance improves with increasing size. Table 13 presents a comprehen-
sive efficiency analysis across various architectures by comparing maximum inference batch size, parameter count, floating-point operations (FLOPs), and inference throughput under standardized input dimensions of 512 × 512 pixels on an NVIDIA L20 48GB GPU. The findings reveal several key observations: a) Convolutional architectures exhibit significant speed advantages. For instance, although ResNet101 and DynamicVis-B have comparable parameter counts and computational demands, ResNet101 attains ma-
rginally higher throughput despite supporting only half the batch size of DynamicVis-B. This increased efficiency is attributed to the inherently parallelizable structure of convolutional operations and their optimized implementations in modern deep learning frameworks. b) ViTs consistently underperform across all metrics, thereby underscoring the need for architectural innovations to enhance efficiency in general-purpose artificial intelligence systems. c) DynamicVis variants equipped with dynami-
c token selection demonstrate a 2× increase in throughput and a 6× improvement in maximum batch size compared to their baseline counterparts. When combined with the accuracy improvements reported in Table 2, these results validate that DynamicVis effectively balances computational efficiency with performance accuracy, positioning it as a promising foundation model for scalable vision understanding.
4.4.2 Effects of Different Input Resolutions
This study systematically examines the impact of input image resolution variations on computational efficiency. Experiments were conducted with a batch size of 1, with model efficiency quantified through two key metrics: inference latency (ms) and GPU memory consumption (MB). The results (Table 14) reveal two principal

23
0
200
400
600
800
1000
1200
1400
1600
0 512 1024 1536 2048 2560 3072 3584 4096
Latency (ms)
Resolution
ResNet101 ViT-B DynamicVis-B† DynamicVis-B
OOM
Fig. 20: Latency (ms) of different models across various input resolutions.
0
5
10
15
20
24
0 512 1024 1536 2048 2560 3072 3584 4096
Memory Usage (GB)
Resolution
ResNet101 ViT-B DynamicVis-B† DynamicVis-B
OOM
Fig. 21: GPU memory usage (GB) across different models with varying input resolutions.
findings. a) The DynamicVis-B demonstrates superior efficiency in both latency and memory utilization compared to Transformerbased ViT architectures, particularly as input resolution increases. b) The dynamic token selection mechanism in DynamicVis-B yields significant efficiency improvements over its non-dynamic counterpart (DynamicVis-B†), achieving performance parity with ResNet101. Fig. 20 illustrates the latency patterns across different models as input resolution increases, while Fig. 21 dep-
icts the corresponding GPU memory utilization patterns. These visualizations clearly demonstrate that ViTs exhibit quadratic computational growth with increasing resolution, whereas the alternative methods maintain linear growth characteristics. Moreover, DynamicVis-B demonstrates progressively greater memory efficiency advantages over ResNet101 as input resolution increases. These findings suggest that DynamicVis-B holds considerable potential for processing ultra-high resolution imagery (approxi-
mately 104 × 104 pixels), making it particularly suitable for applications in largescale remote sensing image processing where efficient handling of extensive visual data is required.
4.4.3 Effects of Different Scanning Paths
The sequential modeling strengths of SSMs were initially demonstrated in causal language modeling tasks. However, their application to image data faced inherent challenges due to the non-causal nature of visual information. To address these limitations, recent advancements have focused on optimizing the scanning strategies of SSMs to better accommodate non-causal data dependencies. In this work, we introduce a dual-path SSM scanning block within our Selective Token Incremental Modeling framework, -
explicitly designed to tackle the non-causal modeling requirements of image
TABLE 14: Latency (ms) and GPU memory usage (MB) with varying input resolutions. The top row for each model shows processing latency, while the bottom row indicates GPU memory consumption. “OOM” denotes “out of memory”.
Model Params. FLOPs 128 256 512 1024 2048 4096
(M) (G)
ResNet101 44.55 40.92 5.13 5.17 5.30 13.26 67.20 307.28
300.96 309.59 328.65 470.84 1050.65 3690.65
ViT-B 87.20 87.76 3.11 3.16 9.15 109.61 1581.18 OOM
340.68 349.71 454.98 1958.55 25253.80 OOM
DynamicVis-B† 36.76 54.28 9.44 9.50 16.01 45.76 220.69 1247.37
160.51 202.57 371.98 1056.73 3793.85 14743.85
DynamicVis-B 36.77 30.07 14.50 14.76 15.70 27.97 97.18 480.61
155.10 160.07 188.71 319.25 833.21 2369.06
TABLE 15: Performance with various scanning paths.
Forward Reverse Shuffle Mean/Gate P R F1
✓ - 92.17 91.74 91.82 ✓ ✓ Mean 94.11 93.82 93.81 ✓ ✓ Gate 93.83 93.69 93.65 ✓ ✓ ✓ Mean 94.12 93.91 93.96 ✓ ✓ ✓ Gate 94.14 93.84 93.90
data. As summarized in Table 15, multiple scanning strategies were systematically evaluated: Forward, Reverse, and Shuffle denote sequential, inverted, and random scanning paths, respectively, while Mean and Gate represent aggregation via average pooling and adaptive weighted averaging (with coefficients derived from token prediction values, as implemented in RSMamba [25]). Key experimental observations include: a) The exclusive use of the Forward path yielded suboptimal performance, underscoring -
the incompatibility of strictly causal SSM characteristics with noncausal image data. b) The Gate mechanism failed to produce substantial performance gains, prompting the adoption of Mean aggregation for architectural simplicity. c) The inclusion of the Shuffle path provided marginal improvements, contrasting with results reported in RSMamba. This divergence stems from our Selective Token Incremental Modeling paradigm, which inherently incorporates token shuffling by prioritizing top-k tokens base-
d on computed importance scores rather than fixed positional order. Based on these findings and to preserve architectural efficiency, the final implementation employs only Forward and Reverse scanning paths combined with Mean aggregation for state space modeling of selectively processed tokens.
4.4.4 Effects of Various Token Reduction Ratios
Selective Token Incremental Modeling forms the core mechanism of DynamicVis, where the quantity of selected tokens critically influences both computational efficiency and task performance. In the architectural design, a principled approach is adopted: shallow layers processing high-resolution features are assigned elevated dropout rates, while deeper layers handling lowresolution features employ progressively reduced dropout rates. This strategy is systematically implemented across the model’s fou-
r distinct processing stages, as detailed in Table 16. Memory consumption analysis was conducted using 512 × 512 pixel input images with batch size 1, yielding three key observations: a) For image classification tasks, selective token modeling maintains comparable accuracy while significantly improving inference efficiency. b) Extreme token reduction (as demonstrated in the final row) induces measurable performance degradation that remains within acceptable limits for classification, likely due to-
 the task’s

24
TABLE 16: Performance and GPU memory utilization (MB) on the AID dataset for varying token reduction ratios.
Reduction Ratio Usage (MB) P R F1
[0, 0, 0, 0] 379.99 94.41 94.22 94.17 [3/4, 1/2, 0, 0] 216.58 94.32 93.95 94.05 [7/8, 3/4, 1/2, 0] 188.71 94.11 93.82 93.81 [15/16, 7/8, 3/4, 1/2] 176.32 93.74 93.53 93.57 [31/32, 15/16, 7/8, 3/4] 174.64 92.46 92.12 92.17
TABLE 17: Performance analysis of mixer block with spatial and channel modeling.
Spatial Channel Serial/Parallel P R F1
✓ - 94.11 93.82 93.81 ✓ - 83.31 81.69 81.91 ✓ ✓ Serial 94.52 94.25 94.29 ✓ ✓ Parallel 94.22 94.01 94.04
inherent low-information discrimination requirements. However, dense prediction tasks exhibit greater sensitivity to excessive token reduction. c) Memory consumption demonstrates a decreasing relationship with token reduction under batch size 1 conditions, though this trend diminishes significantly in extreme reduction scenarios where model parameter storage dominates memory allocation rather than computational data. The token reduction ratios [7/8, 3/4, 1/2, 0] were ultimately selected to maintai-
n cross-task compatibility. Future research could explore task-specific ratio configurations to better optimize the efficiency-accuracy tradeoff for particular applications.
4.4.5 Effects of Spatial and Channel Scanning
In the design of network architecture, we explore a channelwise selective modeling strategy to enhance feature representation capabilities. Each feature map channel is processed as an independent token, with dimensionality reduction implemented through a lightweight MLP to facilitate efficient channel-wise feature modeling. As demonstrated in Table 17, the “spatial” and “channel” configurations refer to the application of dynamic token selectivity restricted to either spatial or channel dimensions-
, respectively, while “serial” and “parallel” configurations describe the sequential or concurrent arrangement of spatial and channel modeling within a processing block. The experimental results reveal two critical insights: a) Exclusive channel-based selective modeling significantly degrades model performance. b) Combined spatial-channel scanning yields only negligible accuracy improvements while incurring a twice computational overhead. These findings motivate the design of DynamicVis, which str-
ategically employs dynamic token modeling solely in the spatial dimension to capture global dependencies.
4.4.6 Effects of the Global Semantics
During the selective modeling phase, DynamicVis enhances the model’s ability to focus on key foreground regions while preserving contextual awareness by concurrently conducting incremental information modeling on both selected regional semantics and global semantics. To achieve this, row-wise pooling is employed to generate condensed feature embeddings that encapsulate global image semantics, which are then integrated into the selected key regional tokens. As shown in Table 18, a comparative analy-
sis
TABLE 18: Effects of the global semantics tokens.
Position P R F1
- 93.11 92.75 92.85 head 94.11 93.82 93.81 head tail 94.03 93.69 93.76 mid 94.13 93.85 93.90
TABLE 19: Performance on token loading balance. “fixed” indicates the use of Gumbel noise sampling at a constant scale, while “decay” signifies a gradual reduction in noise scale as training progresses.
Strategy Scale P R F1
loss - 92.92 92.53 92.60 fixed 0.4 92.57 92.35 92.37 fixed 0.2 93.42 92.72 92.89 fixed 0.1 93.87 93.49 93.58 fixed 0.05 93.15 92.61 92.66 fixed 0 92.72 92.36 92.45 decay 0.1 94.11 93.82 93.81
evaluates the impact of global semantics inclusion and their positional insertion on model performance. Experimental results reveal two critical observations: a) The integration of global semantics significantly enhances model performance, underscoring the complementary nature of global contextual information and salient regional foreground features. b) The model demonstrates minimal sensitivity to the positional placement of global semantics. Given that key local tokens are prioritized through to-
p-k selection, the global token is positioned at the beginning of the region token sequence in our framework, reflecting its equivalent importance to the highest-ranked local tokens.
4.4.7 Token Loading Balance
The proposed token selection method bears conceptual resemblance to the Mixture-of-Experts (MoE) architecture, where effective token load balancing significantly influences model performance. Improper handling of this balance can result in model collapse. In conventional MoE frameworks, balanced loading loss is typically implemented to regulate expert activation patterns and their distribution across calculation nodes. However, DeepSeek diverges from this paradigm by employing a rule-based, loss-f-
ree strategy for expert allocation. Similarly, our approach operates without explicit loss mechanisms, eliminating cross-node communication while focusing exclusively on balancing selective token activation. During training, controlled noise is introduced to the importance probabilities of tokens to equalize their load distribution likelihoods. As demonstrated in Table 19, experimental results indicate that this methodology achieves performance comparable to conventional approaches without augment-
ing computational complexity. Three critical insights emerge from this analysis: a) The conventional balanced loading loss exhibits limited efficacy in this context, potentially reflecting perceptual tasks’ inherent requirement for deterministic activation patterns rather than tolerance for activation biases observed in generative applications. b) Precise calibration of noise amplitude proves essential, as excessive perturbation induces random token selection while insufficient variation impedes e-
ffective load balancing. c) Progressive decay of noise amplitude during training yields performance improvements,

25
suggesting distinct operational phases: early training stages benefit from uniform token selection to facilitate the discovery of critical tokens, while subsequent phases require deterministic selection to reinforce task-specific representation learning.
4.5 Discussions
DynamicVis exhibits superior performance across nine key remote sensing visual interpretation tasks, demonstrating notable efficiency and operational versatility. The framework achieves performance parity with large-scale models in sparse target recognition domains, particularly small object detection and change detection, highlighting the effectiveness of its dynamic visual perception mechanism for conventional remote sensing applications. By strategically integrating the linear global modeling c-
apabilities of SSMs for input processing, this architecture presents a promising solution for interpreting large-width remote sensing imagery. The current implementation utilizes supervised learning through meta-category representations to enable efficient information perception and extraction, though this methodology introduces constraints on data scalability. Future iterations could address this limitation by incorporating mask modeling and crossspatiotemporal contrastive learning, potentially e-
nabling the development of large-scale unsupervised frameworks capable of integrating fundamental geospatial knowledge. While the system benefits from dynamic visual perception strategies, its performance in fully dense prediction tasks remains suboptimal, suggesting the necessity of reducing token reduction ratios. Although foundational models exhibit robust generalization capabilities, the challenge of balancing computational efficiency with high precision persists when addressing diverse custom-
ized remote sensing applications using a unified architecture. Current methodologies still require task-specific data and architectural fine-tuning, indicating opportunities for developing dynamically adaptive networks with task-oriented parameter optimization. Ultimately, the field requires foundational models that combine three critical attributes: a) strong representational capacity for multi-source, multi-modal understanding, b) broad generalizability across heterogeneous tasks, and c) low-res-
ource inference requirements. Such advancements are essential to address the growing challenges posed by massive-scale remote sensing datasets and their complex analytical demands.
5 Conclusion
This paper presents DynamicVis, a dynamic visual perception foundation model for high-resolution remote sensing imagery. Drawing inspiration from the human visual system’s selective attention mechanism, the proposed framework is designed to capture general visual-semantic representations by adaptively focusing on salient regions. At its core, the architecture integrates a dynamic region-aware backbone based on SSMs, which strikes an optimal balance between local detail extraction and global contex-
tual modeling, enabling computationally efficient and scalable encoding of high-resolution geospatial data. The model is trained via a meta-embedding MIL paradigm on a large-scale dataset comprising millions of regional-level annotations. Extensive evaluations across nine key remote sensing tasks demonstrate DynamicVis’s superior generalization capabilities. Notably, the model achieves performance parity with ViT-based large models in sparse target interpretation tasks such as small object detecti-
on and change analysis, while exhibiting significantly reduced computational
demands. When processing 2048×2048 pixel images, DynamicVis requires only 97 ms latency (6% of ViT’s) and 833 MB memory (3% of ViT’s). Rigorous benchmarking confirms that the proposed framework consistently outperforms transformer-based methods across diverse granularity requirements, establishing new stateof-the-art results in tasks necessitating hierarchical visual cue integration.
References
[1] J. Li, D. Hong, L. Gao, J. Yao, K. Zheng, B. Zhang, and J. Chanussot, “Deep learning in multimodal remote sensing data fusion: A comprehensive review,” International Journal of Applied Earth Observation and Geoinformation, vol. 112, p. 102926, 2022. [2] L. Liu, Z. Zou, and Z. Shi, “Hyperspectral remote sensing image synthesis based on implicit neural spectral mixing models,” IEEE Transactions on Geoscience and Remote Sensing, vol. 61, pp. 1–14, 2022. [3] Z. Yu, C. Liu, L. Liu, Z. Shi, and Z. Z-
ou, “Metaearth: A generative foundation model for global-scale remote sensing image generation,” IEEE Transactions on Pattern Analysis and Machine Intelligence, 2024.
[4] K. Chen, W. Li, J. Chen, Z. Zou, and Z. Shi, “Resolution-agnostic remote sensing scene classification with implicit neural representations,” IEEE Geoscience and Remote Sensing Letters, 2022.
[5] B. Chen, K. Chen, M. Yang, Z. Zou, and Z. Shi, “Heterogeneous mixture of experts for remote sensing image super-resolution,” arXiv preprint arXiv:2502.09654, 2025. [6] S. Dong, L. Wang, B. Du, and X. Meng, “Changeclip: Remote sensing change detection with multimodal vision-language representation learning,” ISPRS Journal of Photogrammetry and Remote Sensing, vol. 208, pp. 53–69, 2024.
[7] B. Chen, K. Chen, L. Liu, Z. Shi, and Z. Zou, “Leveraging language-aligned visual knowledge for remote sensing image spectral super-resolution,” in 2024 14th Workshop on Hyperspectral Imaging and Signal Processing: Evolution in Remote Sensing (WHISPERS). IEEE, 2024, pp. 1–5.
[8] R. Bommasani, D. A. Hudson, E. Adeli, R. Altman, S. Arora, S. von Arx, M. S. Bernstein, J. Bohg, A. Bosselut, E. Brunskill et al., “On the opportunities and risks of foundation models,” arXiv preprint arXiv:2108.07258, 2021.
[9] A. Radford, J. W. Kim, C. Hallacy, A. Ramesh, G. Goh, S. Agarwal, G. Sastry, A. Askell, P. Mishkin, J. Clark et al., “Learning transferable visual models from natural language supervision,” in International conference on machine learning. PMLR, 2021, pp. 8748–8763. [10] X. Guo, J. Lao, B. Dang, Y. Zhang, L. Yu, L. Ru, L. Zhong, Z. Huang, K. Wu, D. Hu et al., “Skysense: A multi-modal remote sensing foundation model towards universal interpretation for earth observation imagery,” in Proceedings -
of the IEEE/CVF Conference on Computer Vision and Pattern Recognition, 2024, pp. 27 672–27 683. [11] K. Chen, C. Liu, H. Chen, H. Zhang, W. Li, Z. Zou, and Z. Shi, “Rsprompter: Learning to prompt for remote sensing instance segmentation based on visual foundation model,” IEEE Transactions on Geoscience and Remote Sensing, vol. 62, pp. 1–17, 2024. [12] S. Liu, Z. Zeng, T. Ren, F. Li, H. Zhang, J. Yang, Q. Jiang, C. Li, J. Yang, H. Su et al., “Grounding dino: Marrying dino with grounded pre-training-
 for open-set object detection,” in European Conference on Computer Vision. Springer, 2024, pp. 38–55. [13] X. Sun, P. Wang, W. Lu, Z. Zhu, X. Lu, Q. He, J. Li, X. Rong, Z. Yang, H. Chang et al., “Ringmo: A remote sensing foundation model with masked image modeling,” IEEE Transactions on Geoscience and Remote Sensing, vol. 61, pp. 1–22, 2022. [14] D. Hong, B. Zhang, X. Li, Y. Li, C. Li, J. Yao, N. Yokoya, H. Li, P. Ghamisi, X. Jia et al., “Spectralgpt: Spectral remote sensing foundation model,” IE-
EE Transactions on Pattern Analysis and Machine Intelligence, 2024.
[15] A. Dosovitskiy, L. Beyer, A. Kolesnikov, D. Weissenborn, X. Zhai, T. Unterthiner, M. Dehghani, M. Minderer, G. Heigold, S. Gelly et al., “An image is worth 16x16 words: Transformers for image recognition at scale,” arXiv preprint arXiv:2010.11929, 2020.
[16] H. Touvron, M. Cord, M. Douze, F. Massa, A. Sablayrolles, and H. Je ́gou, “Training data-efficient image transformers & distillation through attention,” in International conference on machine learning. PMLR, 2021, pp. 10 347–10 357. [17] Z. Liu, Y. Lin, Y. Cao, H. Hu, Y. Wei, Z. Zhang, S. Lin, and B. Guo, “Swin transformer: Hierarchical vision transformer using shifted windows,” in Proceedings of the IEEE/CVF international conference on computer vision, 2021, pp. 10 01210 022. [18] Z. Feng an-
d S. Zhang, “Efficient vision transformer via token merger,” IEEE Transactions on Image Processing, vol. 32, pp. 4156–4169, 2023.
[19] M. S. Ryoo, A. Piergiovanni, A. Arnab, M. Dehghani, and A. Angelova, “Tokenlearner: What can 8 learned tokens do for images and videos?” arXiv preprint arXiv:2106.11297, 2021.
[20] J.-B. Alayrac, J. Donahue, P. Luc, A. Miech, I. Barr, Y. Hasson, K. Lenc, A. Mensch, K. Millican, M. Reynolds et al., “Flamingo: a visual language model for few-shot learning,” Advances in Neural Information Processing Systems, vol. 35, pp. 23 716–23 736, 2022. [21] R. Child, S. Gray, A. Radford, and I. Sutskever, “Generating long sequences with sparse transformers,” arXiv preprint arXiv:1904.10509, 2019.
[22] Y. Rao, W. Zhao, B. Liu, J. Lu, J. Zhou, and C.-J. Hsieh, “Dynamicvit: Efficient vision transformers with dynamic token sparsification,” Advances in neural information processing systems, vol. 34, pp. 13 937–13 949, 2021.

26
[23] L. Zhang and L. Zhang, “Artificial intelligence for remote sensing data analysis: A review of challenges and opportunities,” IEEE Geoscience and Remote Sensing Magazine, vol. 10, no. 2, pp. 270–294, 2022. [24] A. A. Aleissaee, A. Kumar, R. M. Anwer, S. Khan, H. Cholakkal, G.-S. Xia, and F. S. Khan, “Transformers in remote sensing: A survey,” Remote Sensing, vol. 15, no. 7, p. 1860, 2023. [25] K. Chen, B. Chen, C. Liu, W. Li, Z. Zou, and Z. Shi, “Rsmamba: Remote sensing image classification wi-
th state space model,” IEEE Geoscience and Remote Sensing Letters, 2024.
[26] X. Fan, Z. Hu, Y. Zhao, J. Chen, T. Wei, and Z. Huang, “A small ship object detection method for satellite remote sensing data,” IEEE Journal of Selected Topics in Applied Earth Observations and Remote Sensing, 2024.
[27] Q. Zhu, Y. Cai, Y. Fang, Y. Yang, C. Chen, L. Fan, and A. Nguyen, “Samba: Semantic segmentation of remotely sensed images with state space model,” Heliyon, vol. 10, no. 19, 2024. [28] Z. Zou, K. Chen, Z. Shi, Y. Guo, and J. Ye, “Object detection in 20 years: A survey,” Proceedings of the IEEE, 2023.
[29] W. Fedus, B. Zoph, and N. Shazeer, “Switch transformers: Scaling to trillion parameter models with simple and efficient sparsity,” Journal of Machine Learning Research, vol. 23, no. 120, pp. 1–39, 2022. [30] A. Gu and T. Dao, “Mamba: Linear-time sequence modeling with selective state spaces,” arXiv preprint arXiv:2312.00752, 2023.
[31] C. Liu, K. Chen, B. Chen, H. Zhang, Z. Zou, and Z. Shi, “Rscama: Remote sensing image change captioning with state space model,” IEEE Geoscience and Remote Sensing Letters, 2024.
[32] W. Chen, Y. Liu, W. Wang, E. M. Bakker, T. Georgiou, P. Fieguth, L. Liu, and M. S. Lew, “Deep learning for instance retrieval: A survey,” IEEE Transactions on Pattern Analysis and Machine Intelligence, vol. 45, no. 6, pp. 7270–7292, 2022. [33] G. Christie, N. Fendley, J. Wilson, and R. Mukherjee, “Functional map of the world,” in Proceedings of the IEEE Conference on Computer Vision and Pattern Recognition, 2018, pp. 6172–6180. [34] S. McLean, G. J. Read, J. Thompson, C. Baber, N. A. Stanton,-
 and P. M. Salmon, “The risks associated with artificial general intelligence: A systematic review,” Journal of Experimental & Theoretical Artificial Intelligence, vol. 35, no. 5, pp. 649–663, 2023. [35] S. K. Singh, S. Kumar, and P. S. Mehra, “Chat gpt & google bard ai: A review,” in 2023 International Conference on IoT, Communication and Automation Technology (ICICAT). IEEE, 2023, pp. 1–6.
[36] K. Chen, W. Li, S. Lei, J. Chen, X. Jiang, Z. Zou, and Z. Shi, “Continuous remote sensing image super-resolution based on context interaction in implicit function space,” IEEE Transactions on Geoscience and Remote Sensing, 2023.
[37] C. Liu, K. Chen, H. Zhang, Z. Qi, Z. Zou, and Z. Shi, “Change-agent: Towards interactive comprehensive remote sensing change interpretation and analysis,” IEEE Transactions on Geoscience and Remote Sensing, 2024.
[38] S. Lu, J. Guo, J. R. Zimmer-Dauphinee, J. M. Nieusma, X. Wang, S. A. Wernke, Y. Huo et al., “Vision foundation models in remote sensing: A survey,” IEEE Geoscience and Remote Sensing Magazine, 2025.
[39] X.-Y. Tong, G.-S. Xia, Q. Lu, H. Shen, S. Li, S. You, and L. Zhang, “Land-cover classification with high-resolution remote sensing images using transferable deep models,” Remote Sensing of Environment, vol. 237, p. 111322, 2020. [40] W. Li, K. Chen, H. Chen, and Z. Shi, “Geographical knowledge-driven representation learning for remote sensing images,” IEEE Transactions on Geoscience and Remote Sensing, vol. 60, pp. 1–16, 2021. [41] Y. Long, G.-S. Xia, S. Li, W. Yang, M. Y. Yang, X. X. Zhu, L.-
 Zhang, and D. Li, “On creating benchmark dataset for aerial image interpretation: Reviews, guidances, and million-aid,” IEEE Journal of selected topics in applied earth observations and remote sensing, vol. 14, pp. 4205–4230, 2021.
[42] D. Wang, J. Zhang, M. Xu, L. Liu, D. Wang, E. Gao, C. Han, H. Guo, B. Du, D. Tao et al., “Mtp: Advancing remote sensing foundation model via multi-task pretraining,” IEEE Journal of Selected Topics in Applied Earth Observations and Remote Sensing, 2024.
[43] K. He, X. Chen, S. Xie, Y. Li, P. Doll ́ar, and R. Girshick, “Masked autoencoders are scalable vision learners,” in Proceedings of the IEEE/CVF Conference on Computer Vision and Pattern Recognition, 2022, pp. 16 000–16 009.
[44] U. Mall, B. Hariharan, and K. Bala, “Change-aware sampling and contrastive learning for satellite images,” in Proceedings of the IEEE/CVF Conference on Computer Vision and Pattern Recognition, 2023, pp. 5261–5270.
[45] Y. Cong, S. Khanna, C. Meng, P. Liu, E. Rozi, Y. He, M. Burke, D. Lobell, and S. Ermon, “Satmae: Pre-training transformers for temporal and multi-spectral satellite imagery,” Advances in Neural Information Processing Systems, vol. 35, pp. 197–211, 2022. [46] C. J. Reed, R. Gupta, S. Li, S. Brockman, C. Funk, B. Clipp, K. Keutzer, S. Candido, M. Uyttendaele, and T. Darrell, “Scale-mae: A scale-aware masked autoencoder for multiscale geospatial representation learning,” in Proceedings of the IE-
EE/CVF International Conference on Computer Vision, 2023, pp. 40884099. [47] D. Wang, M. Hu, Y. Jin, Y. Miao, J. Yang, Y. Xu, X. Qin, J. Ma, L. Sun, C. Li et al., “Hypersigma: Hyperspectral intelligence comprehension foundation model,” arXiv preprint arXiv:2406.11519, 2024.
[48] C. Liu, K. Chen, R. Zhao, Z. Zou, and Z. Shi, “Text2earth: Unlocking text-driven remote sensing image generation with a global-scale dataset and a foundation model,” arXiv preprint arXiv:2501.00895, 2025.
[49] K. Li, X. Cao, and D. Meng, “A new learning paradigm for foundation modelbased remote-sensing change detection,” IEEE Transactions on Geoscience and Remote Sensing, vol. 62, pp. 1–12, 2024. [50] J. Zhang, Z. Zhou, G. Mai, L. Mu, M. Hu, and S. Li, “Text2seg: Remote sensing image semantic segmentation via text-guided visual foundation models. arxiv
2023,” arXiv preprint arXiv:2304.10597.
[51] F. Rosenblatt, “The perceptron: a probabilistic model for information storage and organization in the brain.” Psychological review, vol. 65, no. 6, p. 386, 1958. [52] A. Krizhevsky, I. Sutskever, and G. E. Hinton, “Imagenet classification with deep convolutional neural networks,” Advances in neural information processing systems, vol. 25, 2012. [53] K. Simonyan and A. Zisserman, “Very deep convolutional networks for large-scale image recognition,” arXiv preprint arXiv:1409.1556, 2014.
[54] J. Hu, L. Shen, and G. Sun, “Squeeze-and-excitation networks,” in Proceedings of the IEEE conference on computer vision and pattern recognition, 2018, pp. 7132–7141. [55] S. Woo, J. Park, J.-Y. Lee, and I. S. Kweon, “Cbam: Convolutional block attention module,” in Proceedings of the European conference on computer vision (ECCV), 2018, pp. 3–19. [56] X. Wang, R. Girshick, A. Gupta, and K. He, “Non-local neural networks,” in Proceedings of the IEEE conference on computer vision and pattern reco-
gnition, 2018, pp. 7794–7803. [57] K. Han, Y. Wang, H. Chen, X. Chen, J. Guo, Z. Liu, Y. Tang, A. Xiao, C. Xu, Y. Xu et al., “A survey on vision transformer,” IEEE transactions on pattern analysis and machine intelligence, vol. 45, no. 1, pp. 87–110, 2022. [58] A. Gu, K. Goel, and C. R ́e, “Efficiently modeling long sequences with structured state spaces,” arXiv preprint arXiv:2111.00396, 2021.
[59] H. Zhang, Y. Zhu, D. Wang, L. Zhang, T. Chen, Z. Wang, and Z. Ye, “A survey on visual mamba,” Applied Sciences, vol. 14, no. 13, p. 5683, 2024. [60] H. Zhang, K. Chen, C. Liu, H. Chen, Z. Zou, and Z. Shi, “Cdmamba: Incorporating local clues into mamba for remote sensing image binary change detection,” IEEE Transactions on Geoscience and Remote Sensing, 2025.
[61] H. Chen, J. Song, C. Han, J. Xia, and N. Yokoya, “Changemamba: Remote sensing change detection with spatio-temporal state space model,” IEEE Transactions on Geoscience and Remote Sensing, 2024.
[62] S. Ren, S. Chen, S. Li, X. Sun, and L. Hou, “Testa: Temporal-spatial token aggregation for long-form video-language understanding,” arXiv preprint arXiv:2310.19060, 2023.
[63] G. Yun, J. Yoo, K. Kim, J. Lee, and D. H. Kim, “Spanet: Frequency-balancing token mixer using spectral pooling aggregation modulation,” in Proceedings of the IEEE/CVF International Conference on Computer Vision, 2023, pp. 6113–6124. [64] W. Zeng, S. Jin, W. Liu, C. Qian, P. Luo, W. Ouyang, and X. Wang, “Not all tokens are equal: Human-centric visual analysis via token clustering transformer,” in Proceedings of the IEEE/CVF conference on computer vision and pattern recognition, 2022, pp. 11 10-
1–11 111. [65] J. Cha, W. Kang, J. Mun, and B. Roh, “Honeybee: Locality-enhanced projector for multimodal llm,” in Proceedings of the IEEE/CVF Conference on Computer Vision and Pattern Recognition, 2024, pp. 13 817–13 827.
[66] H. Wang, J. Shen, Y. Liu, Y. Gao, and E. Gavves, “Nformer: Robust person re-identification with neighbor transformer,” in Proceedings of the IEEE/CVF conference on computer vision and pattern recognition, 2022, pp. 7297–7307.
[67] Y. Shang, M. Cai, B. Xu, Y. J. Lee, and Y. Yan, “Llava-prumerge: Adaptive token reduction for efficient large multimodal models,” arXiv preprint arXiv:2403.15388, 2024. [68] Q. Zhang, J. Zhang, Y. Xu, and D. Tao, “Vision transformer with quadrangle attention,” IEEE Transactions on Pattern Analysis and Machine Intelligence, vol. 46, no. 5, pp. 3608–3624, 2024. [69] W. Li, Y. Yuan, J. Liu, D. Tang, S. Wang, J. Qin, J. Zhu, and L. Zhang, “Tokenpacker: Efficient visual projector for multimodal ll-
m,” arXiv preprint arXiv:2407.02392, 2024.
[70] T.-Y. Lin, P. Doll ́ar, R. Girshick, K. He, B. Hariharan, and S. Belongie, “Feature pyramid networks for object detection,” in Proceedings of the IEEE conference on computer vision and pattern recognition, 2017, pp. 2117–2125.
[71] P. Akiva, M. Purri, and M. Leotta, “Self-supervised material and texture representation learning for remote sensing tasks,” in Proceedings of the IEEE/CVF Conference on Computer Vision and Pattern Recognition, 2022, pp. 8203–8215. [72] A. Jaiswal, A. R. Babu, M. Z. Zadeh, D. Banerjee, and F. Makedon, “A survey on contrastive self-supervised learning,” Technologies, vol. 9, no. 1, p. 2, 2020. [73] L. Rossi, A. Karimi, and A. Prati, “A novel region of interest extraction layer for instance segm-
entation,” in 2020 25th international conference on pattern recognition (ICPR). IEEE, 2021, pp. 2203–2209. [74] S. Ren, K. He, R. Girshick, and J. Sun, “Faster r-cnn: Towards real-time object detection with region proposal networks,” IEEE transactions on pattern analysis and machine intelligence, vol. 39, no. 6, pp. 1137–1149, 2016. [75] K. He, G. Gkioxari, P. Dolla ́r, and R. Girshick, “Mask r-cnn,” in Proceedings of the IEEE international conference on computer vision, 2017, pp. 2961–2969.
[76] T. Xiao, Y. Liu, B. Zhou, Y. Jiang, and J. Sun, “Unified perceptual parsing for scene understanding,” in Proceedings of the European conference on computer vision (ECCV), 2018, pp. 418–434. [77] Y. Yang and S. Newsam, “Bag-of-visual-words and spatial extensions for land-use classification,” in Proceedings of the 18th SIGSPATIAL international conference on advances in geographic information systems, 2010, pp. 270–279.
[78] G.-S. Xia, J. Hu, F. Hu, B. Shi, X. Bai, Y. Zhong, L. Zhang, and X. Lu, “Aid: A benchmark data set for performance evaluation of aerial scene classification,” IEEE Transactions on Geoscience and Remote Sensing, vol. 55, no. 7, pp. 3965–3981, 2017. [79] K. He, X. Zhang, S. Ren, and J. Sun, “Deep residual learning for image recognition,” in Proceedings of the IEEE conference on computer vision and pattern recognition, 2016, pp. 770–778. [80] L. Zhu, B. Liao, Q. Zhang, X. Wang, W. Liu, and X. Wa-
ng, “Vision mamba: Efficient visual representation learning with bidirectional state space model,” arXiv preprint arXiv:2401.09417, 2024.

27
[81] Y. Liu, Y. Tian, Y. Zhao, H. Yu, L. Xie, Y. Wang, Q. Ye, and Y. Liu, “Vmamba: Visual state space model,” arXiv preprint arXiv:2401.10166, 2024.
[82] J. Chen, K. Chen, H. Chen, Z. Zou, and Z. Shi, “A degraded reconstruction enhancement-based method for tiny ship detection in remote sensing images with a new large-scale dataset,” IEEE Transactions on Geoscience and Remote Sensing, vol. 60, pp. 1–14, 2022. [83] Z. Tian, C. Shen, H. Chen, and T. He, “Fcos: Fully convolutional one-stage object detection,” in Proceedings of the IEEE/CVF international conference on computer vision, 2019, pp. 9627–9636. [84] S. Ren, K. He, R. Girshick, and J. Sun-
, “Faster r-cnn: Towards real-time object detection with region proposal networks,” Advances in neural information processing systems, vol. 28, 2015. [85] P. Sun, R. Zhang, Y. Jiang, T. Kong, C. Xu, W. Zhan, M. Tomizuka, L. Li, Z. Yuan, C. Wang et al., “Sparse r-cnn: End-to-end object detection with learnable proposals,” in Proceedings of the IEEE/CVF conference on computer vision and pattern recognition, 2021, pp. 14 454–14 463. [86] W. Liu, D. Anguelov, D. Erhan, C. Szegedy, S. Reed, C.-Y. Fu, a-
nd A. C. Berg, “Ssd: Single shot multibox detector,” in Computer Vision–ECCV 2016: 14th European Conference, Amsterdam, The Netherlands, October 11–14, 2016, Proceedings, Part I 14. Springer, 2016, pp. 21–37. [87] J. Redmon, S. Divvala, R. Girshick, and A. Farhadi, “You only look once: Unified, real-time object detection,” in Proceedings of the IEEE conference on computer vision and pattern recognition, 2016, pp. 779–788.
[88] X. Zhu, W. Su, L. Lu, B. Li, X. Wang, and J. Dai, “Deformable detr: Deformable transformers for end-to-end object detection,” arXiv preprint arXiv:2010.04159, 2020. [89] Y. Li, H. Mao, R. Girshick, and K. He, “Exploring plain vision transformer backbones for object detection,” in European conference on computer vision. Springer, 2022, pp. 280–296. [90] H. Zhang, F. Li, S. Liu, L. Zhang, H. Su, J. Zhu, L. M. Ni, and H.-Y. Shum, “Dino: Detr with improved denoising anchor boxes for end-to-end ob-
ject detection,” arXiv preprint arXiv:2203.03605, 2022.
[91] K. Chen, S. Guo, H. Li, P. Wu, and N. Zeng, “Improved yolo-v3 model with enhanced feature learning for remote sensing image analysis,” in 2022 6th Asian Conference on Artificial Intelligence Technology (ACAIT). IEEE, 2022, pp. 1–9. [92] K. Chen, J. Zhang, C. Liu, Z. Zou, and Z. Shi, “Rsrefseg: Referring remote sensing image segmentation with foundation models,” arXiv preprint arXiv:2501.06809, 2025. [93] G. Cheng, J. Han, P. Zhou, and L. Guo, “Multi-class geospatial object detection and geogr-
aphic image classification based on collection of part detectors,” ISPRS Journal of Photogrammetry and Remote Sensing, vol. 98, pp. 119–132, 2014.
[94] T. Zhang, X. Zhang, J. Li, X. Xu, B. Wang, X. Zhan, Y. Xu, X. Ke, T. Zeng, H. Su et al., “Sar ship detection dataset (ssdd): Official release and comprehensive data analysis,” Remote Sensing, vol. 13, no. 18, p. 3690, 2021. [95] H. Su, S. Wei, M. Yan, C. Wang, J. Shi, and X. Zhang, “Object detection and instance segmentation in remote sensing imagery based on precise mask rcnn,” in IGARSS 2019-2019 IEEE International Geoscience and Remote Sensing Symposium. IEEE, 2019, pp. 1454–1457. [96] H. -
Su, S. Wei, S. Liu, J. Liang, C. Wang, J. Shi, and X. Zhang, “Hq-isnet: High-quality instance segmentation for remote sensing imagery,” Remote Sensing, vol. 12, no. 6, p. 989, 2020. [97] Z. Huang, L. Huang, Y. Gong, C. Huang, and X. Wang, “Mask scoring r-cnn,” in Proceedings of the IEEE/CVF conference on computer vision and pattern recognition, 2019, pp. 6409–6418. [98] K. Chen, J. Pang, J. Wang, Y. Xiong, X. Li, S. Sun, W. Feng, Z. Liu, J. Shi, W. Ouyang et al., “Hybrid task cascade for instance -
segmentation,” in Proceedings of the IEEE/CVF conference on computer vision and pattern recognition, 2019, pp. 4974–4983. [99] X. Wang, R. Zhang, T. Kong, L. Li, and C. Shen, “Solov2: Dynamic and fast instance segmentation,” Advances in Neural information processing systems, vol. 33, pp. 17 721–17 732, 2020. [100] B. Cheng, I. Misra, A. G. Schwing, A. Kirillov, and R. Girdhar, “Maskedattention mask transformer for universal image segmentation,” in Proceedings of the IEEE/CVF Conference on Computer-
 Vision and Pattern Recognition, 2022, pp. 1290–1299. [101] Y. Liu, H. Li, C. Hu, S. Luo, H. Shen, and C. W. Chen, “Catnet: context aggregation network for instance segmentation in remote sensing images,” arXiv preprint arXiv:2111.11057, 2021.
[102] K. Chen, Z. Zou, and Z. Shi, “Building extraction from remote sensing images with sparse token transformers,” Remote Sensing, vol. 13, no. 21, p. 4441, 2021. [103] V. Mnih, Machine learning for aerial image labeling. University of Toronto (Canada), 2013. [104] S. Ji, S. Wei, and M. Lu, “Fully convolutional networks for multisource building extraction from an open aerial and satellite imagery data set,” IEEE Transactions on geoscience and remote sensing, vol. 57, no. 1, pp. 574–586, 2018.
[105] X. Chen, Q. Sun, W. Guo, C. Qiu, and A. Yu, “Ga-net: A geometry prior assisted neural network for road extraction,” International Journal of Applied Earth Observation and Geoinformation, vol. 114, p. 103004, 2022.
[106] H. Zhang, H. Chen, C. Zhou, K. Chen, C. Liu, Z. Zou, and Z. Shi, “Bifa: Remote sensing image change detection with bitemporal feature alignment,” IEEE Transactions on Geoscience and Remote Sensing, 2024.
[107] K. Chen, C. Liu, W. Li, Z. Liu, H. Chen, H. Zhang, Z. Zou, and Z. Shi, “Time travelling pixels: Bitemporal features integration with foundation model for remote sensing image change detection,” in IGARSS 2024-2024 IEEE International Geoscience and Remote Sensing Symposium. IEEE, 2024, pp. 8581–8584.
[108] Y. Zhu, L. Li, K. Chen, C. Liu, F. Zhou, and Z. Shi, “Semantic-cc: Boosting remote sensing image change captioning via foundational knowledge and semantic
guidance,” IEEE Transactions on Geoscience and Remote Sensing, 2024.
[109] H. Chen and Z. Shi, “A spatial-temporal attention-based method and a new dataset for remote sensing image change detection,” Remote Sensing, vol. 12, no. 10, p. 1662, 2020. [110] R. C. Daudt, B. Le Saux, A. Boulch, and Y. Gousseau, “Urban change detection for multispectral earth observation using convolutional neural networks,” in IGARSS 2018-2018 IEEE International Geoscience and Remote Sensing Symposium. Ieee, 2018, pp. 2115–2118. [111] S. Fang, K. Li, J. Shao, and Z. Li, “Snunet-cd: A den-
sely connected siamese network for change detection of vhr images,” IEEE Geoscience and Remote Sensing Letters, vol. 19, pp. 1–5, 2021. [112] C. Han, C. Wu, and B. Du, “Hcgmnet: A hierarchical change guiding map network for change detection,” in IGARSS 2023-2023 IEEE International Geoscience and Remote Sensing Symposium. IEEE, 2023, pp. 5511–5514. [113] H. Chen, Z. Qi, and Z. Shi, “Remote sensing image change detection with transformers,” IEEE Transactions on Geoscience and Remote Sensing, vol. 60-
, pp. 1–14, 2021. [114] W. G. C. Bandara and V. M. Patel, “A transformer-based siamese network for change detection,” in IGARSS 2022-2022 IEEE International Geoscience and Remote Sensing Symposium. IEEE, 2022, pp. 207–210.
[115] S. Zhao, H. Chen, X. Zhang, P. Xiao, L. Bai, and W. Ouyang, “Rs-mamba for large remote sensing image dense prediction,” arXiv preprint arXiv:2404.02668, 2024. [116] Y. Wen, J. Sui, X. Ma, W. Liang, X. Zhang, and M.-O. Pun, “Change diffusion: Change detection map generation based on difference-feature guided ddpm,” arXiv preprint arXiv:2306.03424, 2023.
[117] W. Gedara Chaminda Bandara, N. Gopalakrishnan Nair, and V. M. Patel, “Ddpmcd: Denoising diffusion probabilistic models as feature extractors for change detection,” arXiv e-prints, pp. arXiv–2206, 2022. [118] K. Chen, C. Liu, W. Li, Z. Liu, H. Chen, H. Zhang, Z. Zou, and Z. Shi, “Time travelling pixels: Bitemporal features integration with foundation model for remote sensing image change detection,” arXiv preprint arXiv:2312.16202, 2023. [119] O. Manas, A. Lacoste, X. Gir ́o-i Nieto, D. Vazqu-
ez, and P. Rodriguez, “Seasonal contrast: Unsupervised pre-training from uncurated remote sensing data,” in Proceedings of the IEEE/CVF International Conference on Computer Vision, 2021, pp. 9414–9423. [120] S. R. Dubey, “A decade survey of content based image retrieval using deep learning,” IEEE Transactions on Circuits and Systems for Video Technology, vol. 32, no. 5, pp. 2687–2704, 2021. [121] G. Sumbul, M. Charfuelan, B. Demir, and V. Markl, “Bigearthnet: A large-scale benchmark archive for re-
mote sensing image understanding,” in IGARSS 20192019 IEEE international geoscience and remote sensing symposium. IEEE, 2019, pp. 5901–5904. [122] J. Irvin, H. Sheng, N. Ramachandran, S. Johnson-Yu, S. Zhou, K. Story, R. Rustowicz, C. Elsworth, K. Austin, and A. Y. Ng, “Forestnet: Classifying drivers of deforestation in indonesia using deep learning on satellite imagery,” arXiv preprint arXiv:2011.05479, 2020.
[123] J. Jakubik, S. Roy, C. Phillips, P. Fraccaro, D. Godwin, B. Zadrozny, D. Szwarcman, C. Gomes, G. Nyirjesy, B. Edwards et al., “Foundation models for generalist geospatial artificial intelligence,” arXiv preprint arXiv:2310.18660, 2023.

---

## Processing Information

- **Processing Library:** Zotero PDFWorker
- **Processing Date:** 2026-02-10T18:17:21.959Z
- **Text Length:** 156449 characters
- **Success:** Text extraction completed
- **PDF Library Used:** Zotero PDFWorker
- **Pages Processed:** 27 of 27
