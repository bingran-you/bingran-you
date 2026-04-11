# PDF Document: Wang et al. - 2025 - SAM Guided Semantic and Motion Changed Region Mining for Remote Sensing Change Captioning.pdf

**File Path:** Wang et al. - 2025 - SAM Guided Semantic and Motion Changed Region Mining for Remote Sensing Change Captioning.pdf

**Processed Date:** 2026-02-10T18:14:00.920Z

**File Size:** 7545.95 KB

**Total Pages:** 14

**Extracted Pages:** 14

**PDF Library:** Zotero PDFWorker

**Attachment Item ID:** 3799

**Title:** SAM Guided Semantic and Motion Changed Region Mining for Remote Sensing Change Captioning

**Collection:** Large Files > Random Papers

---

## Extracted Text Content

SAM Guided Semantic and Motion Changed Region Mining for Remote Sensing
Change Captioning
Futian Wang1, Mengqi Wang1, Xiao Wang1,* Haowen Wang1, Jin Tang1 1School of Computer Science and Technology, Anhui University, Hefei 230601, China {wft, xiaowang, wanghaowen, tangjin}@ahu.edu.cn, e24301148@stu.ahu.edu.cn
Abstract
Remote sensing change captioning is an emerging and popular research task that aims to describe, in natural language, the content of interest that has changed between two remote sensing images captured at different times. Existing methods typically employ CNNs/Transformers to extract visual representations from the given images or incorporate auxiliary tasks to enhance the final results, with weak region awareness and limited temporal alignment. To address these issues, this paper explores the use-
 of the SAM (Segment Anything Model) foundation model to extract regionlevel representations and inject region-of-interest knowledge into the captioning framework. Specifically, we employ a CNN/Transformer model to extract global-level vision features, leverage the SAM foundation model to delineate semantic- and motion-level change regions, and utilize a specially constructed knowledge graph to provide information about objects of interest. These heterogeneous sources of information are then fused-
 via crossattention, and a Transformer decoder is used to generate the final natural language description of the observed changes. Extensive experimental results demonstrate that our method achieves state-of-the-art performance across multiple widely used benchmark datasets. The source code of this paper will be released on https://github. com/Event-AHU/SAM_ChangeCaptioning
1. Introduction
The goal of the remote sensing change captioning task [18] is to express, in natural language, the changes in objects of interest between two given remote sensing images captured at different times. This task can be widely applied in urban planning and land-use monitoring, disaster emergency response, environmental and ecological conservation, as well as military and security surveillance. Although some progress has been made in recent years, significant
*Corresponding Author: Xiao Wang, Haowen Wang
Figure 1. Comparison between (a) existing change captioning framework and (b) our newly proposed SAM guided semantic and motion changed region mining for RS-CC.
challenges remain, including difficulties in multi-temporal image alignment and registration, the complexity and diversity of change semantics, insufficient fine-grained semantic understanding, and misalignment between language generation and visual changes. Thus, high-quality remote sensing image change captioning remains an unsolved problem. Current work is based on CNN [16], LSTM [11], and Transformer [39] networks, which have significantly advanced the research, as shown in Fig. 1. Specificall-
y, Daudt et al. [10] proposed a fully convolutional network (FCN) architecture extended into a Siamese branch structure to learn pixel-level change maps from bi-temporal images. Lv et al. [23] proposed a CNN model based on a UNet backbone, integrating multi-scale attention and change-gradient modules to enhance change detection accuracy. Papadomanolaki et al. [25] proposed a hybrid model combining FCN for spatial feature extraction and LSTM for modeling temporal dependencies, enhancing urban chang-
e detection from multitemporal Sentinel-2 data. Chen et al. [7]
1
arXiv:2511.21420v1 [cs.CV] 26 Nov 2025

proposed a Transformer-based framework for bi-temporal images, using semantic tokens to model spatio-temporal context for improved change detection. Bandara and Patel [2] designed a Transformer-based Siamese architecture, with two branches processing bi-temporal inputs, leveraging multi-scale long-range attention to enhance detail perception in change detection.
Although these works have greatly advanced the field, we believe they are still limited in the following aspects: 1). Existing models primarily focus on employing general or hybrid network architectures, such as CNNs [16] or Transformers [39], to extract visual representations from given remote sensing images. However, few studies have considered incorporating semantic and temporal motion-related changes to provide richer contextual details for enhancing the final textual descriptions. 2). Common -
object categories in the scene and their relationships play a crucial role in remote sensing change description, for example, objects of interest may include buildings, roads, vegetation, bridges, etc. However, mainstream models fail to explicitly exploit and incorporate this information, often causing the models to focus on insignificant, fine-grained changes and significantly degrading the semantic accuracy of the final results. Thus, it is natural to raise the following question: “How can we ef-
fectively mine fine-grained change regions and distinguish the truly relevant changes from them?”
In this paper, we propose a novel remote sensing change captioning framework that synergistically combines pretrained foundation models, multi-level visual representation, and structured domain knowledge. Our key innovation lies in the integration of the Segment Anything Model (SAM) [17], a powerful vision foundation model, as a region-aware change analyzer. Unlike conventional methods that treat images holistically, we leverage SAM to explicitly delineate regions exhibiting semantic-level and mot-
ion-level changes between image pairs. This enables our model to answer not only “where did the change occur?” but also “what changed?” and crucially, “is this change relevant or of interest?”, a capability essential for generating accurate and meaningful descriptions. In addition, our framework goes further by incorporating a specially constructed knowledge graph that encodes prior information about objects commonly involved in meaningful scene changes. This knowledge acts as a semantic prior, gu-
iding the captioning process with contextual cues that pure visual analysis might miss. The heterogeneous signals are then effectively fused through a cross-attention mechanism, allowing the model to dynamically weigh visual evidence against semantic expectations. Finally, a Transformer-based decoder is adopted to generate fluent and precise natural language captions. Our work bridges the gap between low-level change detection and high-level semantic interpretation, offering a more robust and inte-
r
pretable solution to this complex multi-modal task. An overview of our proposed framework can be found in Fig. 2. To sum up, the main contributions of this paper can be summarized as follows: 1). We propose a novel remote sensing change captioning framework that leverages the Segment Anything Model to explicitly identify semantic- and motion-level change regions, enabling accurate localization of what changed and whether it matters. 2). We construct a semantic knowledge graph using large language -
models and integrate it into the captioning pipeline as a contextual prior, enhancing semantic coherence and relevance of the generated descriptions. 3). Extensive experiments on three widely used benchmark datasets fully demonstrate state-of-the-art performance, validating the effectiveness of our approach.
2. Related Works
2.1. Remote Sensing Change Captioning
Remote Sensing Change Captioning (RS-CC) is one of the core tasks in the field of vision-language understanding for remote sensing time-series images. Jhamtani et al. [14] propose the change captioning (CC) task and introduce a new dataset along with a Siamese CNN-RNN architecture to capture significant differences between similar images. Subsequently, two small-scale RSICC datasets, namely LEVIR CCD and Dubai CCD, are released, focusing on remote sensing change captioning. To further advance the -
research, Liu et al. [18] provide a new large-scale RSICC dataset, LEVIR-CC, and build an RSICC network based on the Transformer architecture, effectively demonstrating the adaptability of Transformer structures in RSICC tasks. Chang and Ghamisi [5] integrate a Siamese CNN with an attention-based Transformer encoder-decoder to dynamically locate change regions. Cai et al. [4] introduce ICT-Net, employing cross-gated attention and adaptive fusion to enhance change representation. Sun et al. [36] pr-
opose a Sparse-Focused Transformer (SFT) that reduces computational cost while maintaining competitive performance. Zhou et al. [47] develop a Single-stream Feature Extraction Network (SEN) with contrastive pretraining and cross-attention modules to improve efficiency. Zhu et al. [48] introduce Change3D, which treats bi-temporal images as video frames to achieve unified modeling of change detection and captioning. Sun et al. [37] introduce a diffusion-based data distribution learning framework wit-
h frequency-domain noise filtering to overcome overfitting and improve model generalization. Different from these works, we propose a method that combines the SAM and a knowledge graph to identify change regions and fuse visual and semantic information, enhancing the accuracy and consistency of change descriptions.
2

2.2. Segment Anything Model
The Segment Anything Model (SAM) [17] is a largescale pre-trained model with strong zero-shot generalization. Inspired by the prompt strategy in NLP, SAM segments diverse targets based on various prompt types, including points, bounding boxes, masks, and text. Following SAM’s release, numerous studies propose improvements and domain-specific adaptations to enhance its performance and generalization [21, 22, 42, 44, 46]. Cheng et al. [9] propose SAM-Med2D, which adapts SAM for medical image segment-
ation through large-scale fine-tuning and diverse prompting strategies. Chen et al. [8] propose RSPrompter, combining SAM with semantic category information to automatically generate prompts for semantic instance segmentation in remote sensing images. Ravi et al. [29] introduce SAM2, which employs a data engine and streaming memory transformer for real-time image and video segmentation, improving both accuracy and efficiency. Grounded SAM [30] integrates Grounding DINO [20] with SAM to improve ope-
n-vocabulary image segmentation and extend its applicability to more controllable tasks. Inspired by these works, in this paper, we adopt SAM to analyze the given remote sensing images to better locate meaningful changed regions.
2.3. Knowledge Graph
Knowledge Graphs (KGs), first introduced by Google in 2012, represent entities and relations through graph structures for knowledge organization and reasoning. With the rise of deep learning and NLP, neural models such as BiLSTM [45], CNN [16], and Transformer [39] become dominant in entity and relation extraction. Recently, large language models (LLMs) open new directions for KG construction and application by efficiently extracting, completing, and reasoning over knowledge. The integration of LL-
Ms with KGs, either by using KGs as external memory or by leveraging LLMs to expand and refine them, becomes a major research trend. Several frameworks explore different forms of KG–LLM integration. Kim et al. [15] propose KG-GPT, combining sentence segmentation, graph retrieval, and inference for fact verification and question answering. Shu et al. [34] introduce KG-LLM, converting KG structures into natural language prompts for multi-hop link prediction. Mo et al. [24] present KGGen, which impro-
ves extracted graphs through iterative clustering and relation grouping. Graph Neural Networks (GNNs), such as R-GCN [32] and CompGCN [38], effectively combine structural and semantic information for KG representation learning and reasoning. Recent research integrates KGs with Natural Language Generation (NLG) to improve factuality and interpretability in descriptive and report generation. Soman et al. [35] propose KG-RAG for biomedical text generation;
Wu et al. [41] introduce a multimodal KG-driven diagnostic text generator; and Wang et al. [40] propose R2GenKG, which builds a large-scale multimodal medical KG (M3KG) using GPT-4o and R-GCN to generate high-quality X-ray reports. Different from these works, we use a relation-aware knowledge graph to bridge visual and semantic differences in dual-time remote sensing images, enhancing temporal reasoning and caption generation.
3. Methodology
3.1. Overview
As illustrated in Fig. 2, we propose Segment-Assisted Graph-Enhanced Change Captioner (SAGE-CC), a framework for remote sensing change captioning from bitemporal image pairs acquired at two epochs. Specifically, the Bi-Temporal Scene Consistency Encoder (Sec. 3.2) extracts shared multi-scale features and distills explicit crosstime consistency priors, offering robust global context to support subsequent modules. The SAM-Guided Change Region Mining (Sec. 3.3) leverages SAM to jointly perform motion-
-level change localization of pixel-accurate changed regions and prompt-guided aggregation of semantics into category-aware region representations. Moreover, the Remote-Sensing Change Graph Reasoner (Sec. 3.4) constructs a compact knowledge graph from training captions and employs relation-aware message passing to generate domain-specific priors on key entities and typical change patterns. Finally, the Change-Aware Language Generator (Sec. 3.5) integrates global scene priors, localized region repr-
esentations, and knowledge graph priors, producing concise and faithful change descriptions that clearly articulate where, what, and how the scene changes. Training objectives and optimization details are provided in Sec. 3.5.
3.2. Bi-Temporal Scene Consistency Encoder
This module generates a global scene embedding and explicit pixel-wise consistency and change priors from a bitemporal image pair. Spatial Feature Backbone. Given a bi-temporal image pair X = (X1, X2), a Siamese ResNet-101 [12] with shared parameters extracts feature maps F1, F2 ∈ Rh×w×C . To preserve spatial structure, a 2D positional embedding P ∈ Rh×w×C is added to each stream:
F (0)
i = Fi + P, i ∈ {1, 2}, (1)
producing coordinate-aware features in a unified representation space.
Cross-Time Consistency Modeling. To enhance temporal reasoning, we employ N lightweight attention blocks that jointly refine intra-temporal semantics and highlight inter-temporal discrepancies. In each block l, every stream
3

Figure 2. An illustration of our proposed remote sensing change captioning by SAM guided semantic, motion changed region mining and knowledge graph.
first applies multi-head self-attention (SA) and then crossattends (CA) to the concatenated bi-temporal context:
H (l)
i = SA F (l−1)
i + F (l−1)
i , (2)
F (l)
i = CA H(l)
i , [H(l)
1 , H (l)
2 ] + H(l)
i , i ∈ {1, 2}. (3)
After N blocks we obtain temporally aligned features
F (N)
1 , F (N)
2 ∈ Rh×w×C and compute a pixel-wise cosine similarity:
S(u, v) = ⟨F (N)
1 (u, v, :), F (N)
2 (u, v, :)⟩
∥F (N)
1 (u, v, :)∥2 ∥F (N)
2 (u, v, :)∥2
. (4)
The similarity map S is normalized to obtain a consistency prior Cmap = (S + 1)/2 ∈ [0, 1]h×w, and its complement is defined as the change prior Mmap = 1 − Cmap. We then fuse features under the guidance of these priors:
G = concat F (N)
1 ⊙ Cmap, F (N)
2 ⊙ Cmap,
|F (N)
1 − F (N)
2 | ⊙ Mmap, Mmap ,
(5)
which is processed by a shallow Conv–BN–ReLU head followed by a 1×1 projection to yield
Eimg = φθ(G), Eimg ∈ Rh×w×Ce . (6)
The resulting global embedding Eimg and priors {Cmap, Mmap} are forwarded to subsequent modules for downstream reasoning.
3.3. SAM-Guided Change Region Mining
SAM-Guided Change Region Mining leverages SAM [17] to localize pixel-accurate, motion-level change regions and to aggregate semantic-level change features into categoryaware region representations from the bi-temporal pair.
3.3.1. Motion-Level Change Localization
Given each image Xi (i ∈ {1, 2}), SAM first generates a
set of instance masks Mi = {mi,n}Ni
n=1 and exposes an
intermediate dense feature map Si ∈ Rh×w×Cs from its frozen image encoder. To select reliable and complete region proposals, we filter candidate masks based on confidence scores, region area, non-maximum suppression, and a minimum-area threshold. Each mask is converted into a bounding box ri,n, and corresponding region features are extracted using RoIAlign:
Xi = RoIAlign(Si, {ri,n}) ∈ RNi×hr×wr×Cs . (7)
These region features undergo adaptive average pooling to a fixed spatial size (7×7) followed by a lightweight convolutional head gθ, yielding compact descriptors:
Zi = gθ(AAPool7×7(Xi)) ∈ RNi×d, (8)
with centroids denoted as Ki = {ki,n ∈ R2}. We employ SuperGlue [31] to compute cross-epoch correspondence scores between region descriptors:
[Zpq]N1×N2 = SuperGlue(K1, Z1; K2, Z2), (9)
4

where each entry Zpq represents the matching confidence between region p from epoch 1 and region q from epoch 2. Higher values indicate stronger geometric and semantic consistency. Reliable matches are determined by applying a threshold τ :
Zpq =
(1, if Zpq > τ,
0, otherwise.
(10)
Unmatched instances, potentially corresponding to changed or newly appeared/disappeared regions, are identified by:
U1 = {p |
X
q
Zpq = 0}, U2 = {q |
X
p
Zpq = 0}.
To incorporate spatial information, centroids of unmatched regions are embedded via positional encoding and concatenated with their respective region descriptors. The final motion-level change representation is obtained by concatenating these enriched features within each image, capturing structural changes at pixel-level precision without assuming object motion.
3.3.2. Semantic-Level Change Aggregation
To overcome the limitations of purely visual or manually defined prompts, we introduce Grounding DINO [20] as a semantic prior to automatically generate promptconditioned bounding boxes for both images X1 and X2. These boxes correspond to high-level semantic categories such as building, road, and vegetation. Subsequently, SAM refines these bounding boxes into detailed segmentation masks, resulting in region-specific dense feature maps Si ∈
Rh×w×Cs .
Given textual prompts T = {tk}K
k=1, we compute their
text embeddings ET = encT (T ) ∈ RK×d. For each segmented region, we extract region embeddings E ∈ RJ×d using the same RoI pipeline described above. Image–text similarity is computed via normalized dot products:
S = Norm(E) Norm(ET )⊤ ∈ RJ×K . (11)
Regions are ranked based on their highest similarity scores across all prompts, and the top-q regions are selected:
Isel = Top-q mkax S:,k . (12)
The final semantic-level change representation is constructed by concatenating the embeddings of selected regions from each prompt category. This semantic-aware representation effectively complements the motion-level change features, yielding a more coherent and interpretable representation of change across epochs.
Figure 3. Illustration of the built knowledge graph for the remote sensing change captioning task. Zoom in for better visualization.
3.4. Remote-Sensing Change Graph Reasoner
This module constructs a compact remote-sensing change knowledge graph from caption corpora and employs relation-aware message passing to derive semantic priors for subsequent reasoning and caption generation tasks.
3.4.1. Graph construction from captions
Given a set of descriptive captions C from multi-temporal remote-sensing datasets, each caption describes objects, land-cover types, and their transformations over time. We apply a relation-extraction approach specifically adapted to remote-sensing change descriptions to extract structured semantic triples T ⊆ E × R × E, where E and R denote the raw entity and relation vocabularies. For instance, the caption “a crossroad and several buildings appear on the bareland” yields triples such as ⟨ crossr-
oad, appear-on, bareland ⟩ and ⟨ building, appear-on, bareland ⟩.
To mitigate redundancy and synonym overlaps common in natural-language annotations, we perform iterative clustering guided by a LLM [3] with instruction set IE to merge semantically similar entities:
E′ = MergeIE (E), π : E → E′.
All triples are subsequently remapped via π and deduplicated to produce the normalized knowledge graph:
G = (E′, R, T ′).
For computational efficiency, we encode the graph G us
5

ing two matrices: the connectivity matrix
Aconn = src1 src2 · · · srcm
tgt1 tgt2 · · · tgtm
,
Atype = r1 r2 · · · rm ,
(13)
where m = |T ′|, srcj, tgtj ∈ {1, . . . , |E′|} denote indices of head and tail entities, and rj ∈ {1, . . . , |R|} encodes relation types corresponding to land-use transitions and spatial interactions.
3.4.2. Relation-aware graph encoding
Entities are initialized using contextualized text embeddings. Let e′
i ∈ E′ denote the i-th entity; a pretrained text encoder (e.g., BERT) generates initial node embeddings:
V = BERT([e′
1, . . . , e′
|E′|]) ∈ R|E′|×db , (14)
with h(0)
i = Vi.
We employ a multi-layer Relational Graph Convolutional Network (R-GCN) [32] to propagate and aggregate relation-specific features across graph nodes:
h(l+1)
i =σ

W (l)
0 h(l)
i+
X
r∈R
X
j∈N r
i
1
ci,r
W (l)
r h(l)
j

 , (15)
where N r
i denotes neighboring nodes of node i linked by relation type r (retrievable from Aconn, Atype), ci,r is a
normalization constant, W (l)
r and W (l)
0 are relation-specific and self-loop weights, and σ is an activation function. Unlike standard GCN architectures, the R-GCN explicitly conditions message-passing transformations on relation type and edge directionality, enabling it to encode asymmetric dependencies. This is particularly crucial for remote sensing tasks where relationships like “bareland→building” differ fundamentally from “building→bareland” in semantic meaning and temporal direction. Final node embeddings are aggregated into a g-
raph-level representation using a permutation-invariant readout operation:
Fkg = READOUT H(L) ∈ Rdkg , (16)
where H(L) = [h(L)
1 ; . . . ; h(L)
|E′|], and the READOUT function denotes mean or attention-based pooling, optionally conditioned on task-specific prompts. The resultant embedding Fkg encapsulates critical entity dependencies and prevalent change patterns, serving as a semantic prior to guide downstream caption generation and reasoning modules.
3.5. Change-Aware Language Generator
Change-Conditioned Fusion and Generation. We first in
tegrate the motion-level change representation Fdisc ∈ Rd′ , the semantic-level change representation Fsem ∈ Rd, and the graph-derived semantic prior Fkg ∈ Rdkg through linear projections and concatenation:
r = LN [WdFdisc; WsFsem; WgFkg] ∈ Rdf . (17)
Given the global embedding Eimg ∈ Rh×w×Ce , we flatten it into token embeddings X ∈ R(hw)×de to serve as cross-attention inputs for the decoder. The decoder consists of L Transformer layers, each incorporating masked self-attention over caption tokens and cross-attention to visual tokens X. To explicitly guide cross-attention towards changed regions, we inject a spatial attention bias using consistency priors from Sec. 3.2:
π = α vec(Mmap) + β vec(Cmap) ∈ Rhw,
B = 1T π⊤ ∈ RT ×(hw),
(18)
where α, β are learnable scaling parameters. Let Y (0) ∈ RT ×df represent the initial caption token embeddings. Each Transformer decoder layer l computes:
Ye (l) = SelfAttn Y (l−1) , (19)
Z(l) = CrossAttn Ye (l), K=X, V =X; B , (20)
Y (l) = FFN LN(Ye (l) + Z(l) + 1T r⊤) , (21)
where 1T r⊤ explicitly integrates the fused change-aware representation r into each decoding step. Finally, the hidden states H = Y (L) of the last decoder layer are projected onto vocabulary logits and probabilities:
logits = WoH + bo, P = Softmax(logits). (22)
Loss Function. We train the decoder via teacher forcing with the standard cross-entropy (CE) objective against target caption tokens {yt∗}tT=1:
LCE = −
T
X
t=1
log P y∗
t | y<t, X, r, B . (23)
To improve model generalization, we optionally employ label smoothing with factor ε: each ground-truth token is represented as (1−ε) for the correct word and ε/(V −1) evenly distributed across remaining vocabulary tokens, where V denotes the vocabulary size.
4. Experiments
4.1. Datasets and Evaluation Metric
• LEVIR-CC The LEVIR-CC dataset [18] comprises 10,077 pairs of bitemporal remote sensing images (5,038
6

Table 1. Comparisons with state-of-the-art RSICC methods on the LEVIR-CC dataset
Method BLEU-1 BLEU-2 BLEU-3 BLEU-4 METEOR ROUGE-L CIDEr Capt-Rep-Diff [26] 72.90 61.98 53.62 47.41 34.47 65.64 110.57 Capt-Att [26] 77.64 67.40 59.24 53.15 36.58 69.73 121.22 Capt-Dual-Att [26] 79.51 67.23 57.46 36.56 37.16 69.19 124.42 DUDA [26] 81.44 72.22 64.67 57.79 37.15 71.04 124.32 MCCFormer-S [28] 79.90 70.26 62.68 56.36 39.60 69.46 120.39 MCCFormer-D [28] 80.42 70.87 62.86 56.38 39.91 70.44 124.44 RSICCformer-C [18] 83.09 74.32 66.66 62.41 38.70 73.60 132.62 PSNet [19] 83.86 75.13 67.89 6-
2.11 38.80 73.60 132.62 Chg2Cap [5] 84.43 76.35 69.12 62.98 39.42 74.34 136.25 SEN [47] 85.10 77.05 70.01 64.09 39.59 74.57 136.02 Diffusion-RSCC [43] - - - 60.90 37.80 71.50 125.60 CTMTNet [33] 85.95 77.99 70.74 64.69 39.49 74.54 134.94 Ours 85.69 77.85 71.03 65.50 39.92 74.77 137.50
Table 2. Comparisons with state-of-the-art RSICC methods on the Dubai-CC dataset
Method BLEU-1 BLEU-2 BLEU-3 BLEU-4 METEOR ROUGE-L CIDEr-D DUDA [26] 58.82 43.59 33.63 25.39 22.05 48.34 62.78 MCCFormer-S [28] 52.97 37.02 27.62 22.57 18.64 43.29 53.81 MCCFormer-D [28] 64.65 50.45 39.36 29.48 25.09 51.27 63.09 RSICCFormer-C [18] 67.92 53.61 41.37 31.28 25.41 51.96 66.54 Diffusion-RSCC [43] - - - 33.30 27.40 56.50 88.70 Chg2Cap [5] 72.04 60.18 50.84 41.70 28.92 58.66 92.49 Ours 74.25 62.12 51.77 42.21 29.05 59.58 93.26
with changes and 5,039 without changes) derived from the LEVIR-CD dataset [6]. Each image has a 256 × 256 pixel size with 0.5 m/pixel resolution, acquired from 20 regions across Texas via Google Earth API with a 5-14 year time span between acquisitions. Each image pair is annotated with five descriptive sentences (50,385 total captions), with fixed sentences for non-change pairs and varied descriptions for change pairs. Following the default experimental settings [18], we split the dataset into 6,-
815 pairs for training, 1,333 for validation, and 1,929 for testing. • Dubai-CC The Dubai-CC dataset [13] consists of 500 pairs of bitemporal remote sensing images capturing urbanization changes in the Dubai area. The images were acquired by the Enhanced Thematic Mapper Plus (ETM+) sensor onboard Landsat 7 on May 19, 2000, and June 16, 2010. The original images were cropped into 50 × 50 pixel tiles, with each pair annotated with five different change descriptions referencing Google Maps and public-
ly available documents, resulting in 2,500 independent descriptions. Following the default experimental settings [13], we split the dataset into 300 pairs for training, 50 for validation, and 150 for testing. • WHU-CDC The WHU-CDC dataset [33] contains 7,434 high-resolution bi-temporal image pairs spanning from 2011 to 2016, which describe changes in buildings, parking
lots, roads, and other categories. In total, the dataset provides 37,170 descriptive sentences. Following the default experimental settings [33], we split the dataset into 5947 pairs for training, 743 for validation, and 744 for testing. • Evaluation Metric BLEU-N measures the n-gram precision between the generated sentences and the reference sentences, emphasizing local lexical overlap. ROUGE-L computes recall based on the longest common subsequence, reflecting the extent to which the generated t-
ext covers the content of the references. METEOR takes both precision and recall into account, incorporating stemming, synonym matching, and a fluency penalty, thereby better capturing semantic accuracy. CIDEr-D, specifically designed for image captioning tasks, employs TF-IDF weighting for n-grams to highlight rare yet informative phrases.
4.2. Implementation Details
The deep learning methods proposed in this study are implemented using the PyTorch [27] framework, with all model training and evaluation conducted on an NVIDIA RTX 4090 GPU equipped with 24 GB of memory. During training, the Adam optimizer is employed with an initial learning rate of 0.0001, which is decayed by a factor of 0.5 after 5 epochs. The maximum number of training epochs is set to 50. After each epoch, the model is validated on the develop
7

Table 3. Comparisons with state-of-the-art RSICC methods on the WHU-CDC dataset
Method BLEU-1 BLEU-2 BLEU-3 BLEU-4 METEOR ROUGE-L CIDEr-D DUDA [26] 79.04 69.53 61.57 55.64 34.29 68.98 121.85 MCCFormer-S [28] 82.14 76.29 71.08 66.51 43.50 79.76 148.88 MCCFormer-D [28] 73.29 67.88 64.03 60.96 39.69 73.67 134.92 RSICCformer-C [18] 78.25 72.82 68.57 65.14 44.35 76.50 143.44 MaskApproxNet [37] 81.34 75.68 71.16 67.73 43.89 75.41 135.31 CTMTNet [33] 83.56 77.66 72.76 69.00 45.39 79.23 149.40 CTM [1] 85.36 79.49 75.36 72.36 46.98 80.97 153.29 Ours 86.04 81.16 77.28 74.42 47.89 80.90-
 156.21
Table 4. Ablation study on the LEVIR-CC dataset, assessing the impact of key components:Motion-Level Change Localization (MCL), SuperGlue (SG), Semantic-Level Change Aggregation (SCA), and Remote-Sensing Change Graph Reasoner (CGR). Symbols “×” and “✓” indicate the exclusion and inclusion of specific modules, respectively. Higher metric values denote better performance, with best results highlighted in bold.
Method MCL SG SCA CGR BLEU-1 BLEU-2 BLEU-3 BLEU-4 METEOR ROUGE-L CIDEr-D Baseline × × × × 84.43 76.35 69.12 62.98 39.42 74.34 136.25 (a) ✓ × × × 85.05 76.59 69.50 63.66 39.71 74.63 137.01 (b) ✓ ✓ × × 84.99 76.72 69.81 64.08 39.60 74.09 136.12 (c) ✓ ✓ ✓ × 85.82 77.66 70.46 64.47 39.83 74.66 138.01 (d) ✓ ✓ ✓ ✓ 85.69 77.85 71.03 65.50 39.92 74.77 137.50
ment set, and the checkpoint achieving the highest BLEU-4 score is retained as the final model for evaluation on the test set. More details can be found in our source code.
4.3. Comparison on Public Benchmarks
As shown in Table 1, Table 2 and Table 3, we conducted comparisons with several existing state-of-the-art methods on three key remote sensing change captioning datasets (LEVIR-CC, Dubai-CC, and WHU-CDC). The performance of our method, SAGE-CC, was evaluated using multiple evaluation metrics, including BLEU-1, BLEU2, BLEU-3, BLEU-4, METEOR, ROUGE-L, and CIDEr. On the LEVIR-CC dataset, SAGE-CC ranks among the top performers across multiple metrics, with BLEU-3 at 71.03, BLEU-4 at 65.50, ROUGE-L at 3-
9.92, and METEOR at 74.77. Additionally, the CIDEr score reaches 137.50, demonstrating the effectiveness of our method in generating descriptions highly consistent with human annotations. On the Dubai-CC dataset, SAGE-CC also exhibits strong performance, achieving excellent results across all evaluation metrics. The BLEU-1 score is 74.25, and the BLEU-4 score is 42.21. Furthermore, the CIDEr score of 93.26 further highlights the advantage of our model in generating high-quality descriptions. On th-
e WHU-CDC dataset, SAGE-CC again leads with a BLEU-1 score of 86.04 and a BLEU-4 score of 74.42, with a CIDEr score as high as 156.21. These results further validate the superiority of our method in generating precise and detailed remote sensing image descriptions.
4.4. Ablation Study
As shown in Table 4, we systematically evaluated the contributions of four key components, Motion-Level Change Localization (MCL, without SG), SuperGlue (SG), SemanticLevel Change Aggregation (SCA), and Remote-Sensing Change Graph Reasoner (CGR), to the overall performance of the model on the LEVIR-CC dataset. The results in the table indicate that, compared to the baseline model (Baseline), the performance on natural language generation metrics (BLEU-1 to BLEU-4, METEOR, ROUGE-L, CIDErD) improves-
 to varying degrees as each module is progressively added. This demonstrates that each component effectively enhances the model’s ability to capture and describe changed regions. Specifically, Method (a), after incorporating MCL, shows an improvement in BLEU-4 from 62.98 to 63.66 and CIDEr-D from 136.25 to 137.01, indicating that motion-level changed regions help generate more precise change information. Method (b), after integrating SG, shows improvements across all metrics, proving the effective-
ness of the feature matching module. Method (c), with the further addition of SCA, increases BLEU-4 from 64.08 to 64.47, suggesting that the semantic-level assistance plays a positive role in the accuracy of change detection. Finally, Method (d), which introduces the CGR module, increases BLEU-4 to 65.50, maintaining high performance while balancing BLEU and CIDEr-D, demonstrating the robustness of the overall model. In summary, the experimental results fully validate the effectiveness of each pro-
posed module in improving model
8

Table 5. Ablation study on the number of masks in the MCL module on the LEVIR-CC dataset.
Number BLEU-1 BLEU-2 BLEU-3 BLEU-4 METEOR ROUGE-L CIDEr 30 85.13 76.98 69.83 63.74 39.81 74.60 137.09 40 85.31 77.07 70.15 64.48 39.52 74.32 136.63 50 85.82 77.66 70.46 64.47 39.83 74.66 138.01
Table 6. Ablation study on the threshold of SG on the LEVIR-CC dataset.
Threshold BLEU-1 BLEU-2 BLEU-3 BLEU-4 METEOR ROUGE-L CIDEr 0.1 84.82 76.70 69.57 63.57 39.71 74.35 137.13 0.2 85.82 77.66 70.46 64.47 39.83 74.66 138.01 0.3 85.03 76.94 69.73 63.87 39.48 73.88 134.39
performance. The combination of MCL and SG plays a key role in fine-grained change modeling, SCA provides valuable support in the semantic aspect, and the CGR module, through the extraction of structured information, enhances the accuracy and consistency of remote sensing change descriptions.
4.5. Parameter Analysis
• Analysis of Numbers of Masks in MCL Module. As shown in Table 5, we investigated the impact of different numbers of masks in the MCL module on the model’s performance. The results indicate that as the number of masks increases from 30 to 50, the overall performance of the model gradually improves. Specifically, when the number of masks is 50, the model achieves optimal performance in metrics such as BLEU-1, BLEU-2, BLEU-3, and CIDEr, with BLEU-4 and CIDEr reaching 64.47 and 138.01, respectively.-
 This suggests that increasing the number of masks appropriately allows for a more comprehensive coverage of motion-level changed regions, thereby providing richer fine-grained features for change detection. When the number of masks is too small, the model struggles to capture sufficient change information, leading to a decrease in generation performance.
• Analysis of Matching Threshold in SG Module. As shown in Table 6, we further explored the impact of different matching threshold settings in the SG module on the model’s performance. The experimental results demonstrate that when the threshold is set to 0.2, the model reaches a peak CIDEr score of 138.01, while BLEU-4 and ROUGEL also maintain their highest levels. A threshold that is too low (0.1) or too high (0.3) leads to a performance decline. The former may introduce excessive irrelevant inf-
ormation, while the latter may overlook valid correspondences. Therefore, setting an appropriate threshold is crucial for balancing robustness and precision.
• Comparison of Graph Encoding Methods. As shown in Table 7, we compared the performance of different graph encoding methods (GCN, GAT, SAGE, MONET, and
RGCN) on BLEU, ROUGE-L, METEOR, and CIDEr metrics. The results show that RGCN achieves the best performance across all metrics, with BLEU-4, ROUGE-L, and CIDEr reaching 65.50, 74.77, and 137.50, respectively, which are significantly superior to other methods. In contrast, methods such as GCN exhibit relatively weaker performance, indicating their limitations in handling complex relational dependencies. We speculate that RGCN can explicitly model multiple relation types, thereby better capturing th-
e dependency structures between different change regions and semantic units. This plays a crucial role in generating more coherent and accurate natural language descriptions.
• Analysis of Threshold k for Filtering Low-Frequency Relations and Entities. As shown in Table 8, we further investigated the impact of the threshold k for filtering low-frequency relations and entities on the model’s performance. The experimental results demonstrate that as k increases from 30 to 50, the model’s performance generally improves. When k = 50, the model achieves the best performance in BLEU, with BLEU-1, BLEU-2, BLEU-3, and BLEU-4 reaching 85.69, 77.85, 71.03, and 65.50, respectivel-
y, significantly outperforming other settings. When k is further increased to 60, BLEU performance shows a slight decline, but ROUGE-L, METEOR, and CIDEr improve to 75.23, 40.28, and 138.21, respectively. As k continues to increase, all performance metrics decline, suggesting that an excessively high threshold may overly filter out some valid relations and entities, thus weakening the model’s expressive ability. In summary, k = 50 is the optimal setting in this experiment, effectively balancing th-
e retention of semantic richness while filtering out low-frequency irrelevant information.
4.6. Visualization
• Captioning Results. As shown in Figure 4, we present some examples to demonstrate the effectiveness of our proposed SAGE-CC model in remote sensing change detection captioning. For specific dual-temporal remote sensing im
9

Table 7. Ablation study on different graph encoders for model performance on the LEVIR-CC dataset.
Encoder BLEU-1 BLEU-2 BLEU-3 BLEU-4 METEOR ROUGE-L CIDEr GCN 85.23 77.01 69.73 63.80 39.56 74.17 135.62 GAT 85.42 77.20 70.21 64.51 39.59 74.37 136.20 SAGE 84.06 75.91 68.87 63.10 39.26 73.79 134.80 MONET 82.71 74.15 67.16 61.64 38.22 72.58 130.20 RGCN 85.69 77.85 71.03 65.50 39.92 74.77 137.50
Table 8. Ablation study on the frequency threshold k for filtering low-frequency relationships and entities on the LEVIR-CC dataset.
k BLEU-1 BLEU-2 BLEU-3 BLEU-4 METEOR ROUGE-L CIDEr 30 84.21 76.15 69.26 63.50 39.23 73.83 134.90 40 85.10 77.25 70.29 64.58 39.82 74.55 135.49 50 85.69 77.85 71.03 65.50 39.92 74.77 137.50 60 85.22 77.41 70.45 64.63 40.28 75.23 138.21 70 85.18 77.06 69.92 64.14 39.78 74.39 135.69
Figure 4. Remote sensing change image pairs and their corresponding ground-truth annotations are provided in the LEVIR-CC dataset. The matching parts are shown in green, and the mismatched parts are shown in red.
ages, we compare the captions generated by the SAGE-CC model with those generated by the baseline model and the ground truth labels. To provide a more intuitive visualization, we use red font to indicate the inaccurate descriptions
generated by the baseline model, while green font represents the portions of the captions generated by the SAGECC model that are consistent with the ground truth. From the visualization results, it is evident that the captions gener
10

Figure 5. Semantic segmentation results obtained using the SAM model. Blue, green, and pink regions denote building, vegetation, and road, respectively.
Figure 6. Visualization of the matching results by SuperGlue.
ated by our model are of higher quality and more consistent with the ground truth compared to those generated by the baseline model.
• Visualization of Semantic Segmentation Masks. As shown in Figure 5, we present the semantic segmentation results obtained using the SAM on dual-temporal remote sensing images. Since there are many semantic categories but limited display space, we select the three most frequently appearing classes for visualization. In the segmentation maps, blue regions represent buildings, green regions indicate vegetation, and pink regions correspond to roads.
By applying SAM-based segmentation to both temporal images, fine-grained object boundaries and class-level changes can be effectively captured, providing rich spatial and structural information for subsequent change captioning tasks. • Knowledge Graph Constructed from Captions. As shown in Figure 3, due to the large number of nodes, we only display a portion of the relationships between the nodes to ensure the clarity and readability of the graph. Each node in the figure represents an entity, and -
each arrow indicates a relationship between entities, with different arrow colors representing different types of relationships. This approach allows for a more intuitive visualization of the key information and interrelationships in remote sensing captions, helping to understand the complex patterns and potential connections within the captions.
• Visualization of SuperGlue. As shown in Figure 6, we present some matching results generated by the SuperGlue algorithm. The red points represent the mask feature points extracted from the two images, while the green lines indicate the successfully matched feature point pairs, demonstrating the spatial correspondence between the two images. These matches provide crucial support for subsequent change detection tasks.
4.7. Limitation Analysis
The overall framework of SAGE-CC consists of multiple modules, aiming to achieve accurate change description. However, there are significant differences in granularity and semantic space between remote sensing change region features and text-based graphs, which may lead to a lack of
11

deep alignment mechanisms in terms of structural hierarchy and semantic representation. This can affect the model’s performance in cross-modal fusion. Additionally, while the model processes fine-grained details through multiple modules, its overall structure is complex and computationally expensive, which may limit its deployment and application in resource-constrained scenarios.
5. Conclusion
In this paper, we propose a novel approach to remote sensing change captioning that leverages SAM to extract regionlevel representations and integrates them with auxiliary knowledge sources to enhance change description. By fusing visual and semantic information through a Transformer architecture, we generate natural language descriptions with high geometric accuracy and semantic richness. Extensive experimental results demonstrate that our method outperforms existing approaches across multiple pu-
blic benchmark datasets.
References
[1] Qingshan Bai and Xiaohua Wang. Cross-temporal remote sensing image change captioning: A manifold mapping and bayesian diffusion approach for land use monitoring. IEEE Journal of Selected Topics in Applied Earth Observations and Remote Sensing, 2025. 8
[2] Wele Gedara Chaminda Bandara and Vishal M Patel. A transformer-based siamese network for change detection. In IGARSS 2022-2022 IEEE International Geoscience and Remote Sensing Symposium, pages 207–210. IEEE, 2022. 2 [3] Xiao Bi, Deli Chen, Guanting Chen, Shanhuang Chen, Damai Dai, Chengqi Deng, Honghui Ding, Kai Dong, Qiushi Du, Zhe Fu, et al. Deepseek llm: Scaling opensource language models with longtermism. arXiv preprint arXiv:2401.02954, 2024. 5
[4] Chen Cai, Yi Wang, and Kim-Hui Yap. Interactive changeaware transformer network for remote sensing image change captioning. Remote Sensing, 15(23):5611, 2023. 2 [5] Shizhen Chang and Pedram Ghamisi. Changes to captions: An attentive network for remote sensing change captioning. IEEE Transactions on Image Processing, 32:60476060, 2023. 2, 7 [6] Hao Chen and Zhenwei Shi. A spatial-temporal attentionbased method and a new dataset for remote sensing image change detection. Remote sensing, 12(10):1-
662, 2020. 7 [7] Hao Chen, Zipeng Qi, and Zhenwei Shi. Remote sensing image change detection with transformers. IEEE Transactions on Geoscience and Remote Sensing, 60:1–14, 2021. 1
[8] Keyan Chen, Chenyang Liu, Hao Chen, Haotian Zhang, Wenyuan Li, Zhengxia Zou, and Zhenwei Shi. Rsprompter: Learning to prompt for remote sensing instance segmentation based on visual foundation model. IEEE Transactions on Geoscience and Remote Sensing, 62:1–17, 2024. 3
[9] Junlong Cheng, Jin Ye, Zhongying Deng, Jianpin Chen, Tianbin Li, Haoyu Wang, Yanzhou Su, Ziyan Huang, Jilong
Chen, Lei Jiang, Hui Sun, Junjun He, Shaoting Zhang, Min Zhu, and Yu Qiao. Sam-med2d, 2023. 3 [10] Rodrigo Caye Daudt, Bertr Le Saux, and Alexandre Boulch. Fully convolutional siamese networks for change detection. In 2018 25th IEEE international conference on image processing (ICIP), pages 4063–4067. IEEE, 2018. 1 [11] Alex Graves. Long short-term memory. Supervised sequence labelling with recurrent neural networks, pages 37–45, 2012. 1
[12] Kaiming He, Xiangyu Zhang, Shaoqing Ren, and Jian Sun. Deep residual learning for image recognition. IEEE, 2016. 3 [13] Genc Hoxha, Seloua Chouaf, Farid Melgani, and Youcef Smara. Change captioning: A new paradigm for multitemporal remote sensing image analysis. IEEE Transactions on Geoscience and Remote Sensing, 60:1–14, 2022. 7
[14] Harsh Jhamtani and Taylor Berg-Kirkpatrick. Learning to describe differences between pairs of similar images. arXiv preprint arXiv:1808.10584, 2018. 2
[15] Jiho Kim, Yeonsu Kwon, Yohan Jo, and Edward Choi. Kg-gpt: A general framework for reasoning on knowledge graphs using large language models. arXiv preprint arXiv:2310.11220, 2023. 3
[16] Yoon Kim. Convolutional neural networks for sentence classification. arXiv preprint arXiv:1408.5882, 2014. 1, 2, 3
[17] Alexander Kirillov, Eric Mintun, Nikhila Ravi, Hanzi Mao, Chloe Rolland, Laura Gustafson, Tete Xiao, Spencer Whitehead, Alexander C Berg, Wan-Yen Lo, et al. Segment anything. In Proceedings of the IEEE/CVF international conference on computer vision, pages 4015–4026, 2023. 2, 3, 4
[18] Chenyang Liu, Rui Zhao, Hao Chen, Zhengxia Zou, and Zhenwei Shi. Remote sensing image change captioning with dual-branch transformers: A new method and a large scale dataset. IEEE Transactions on Geoscience and Remote Sensing, 60:1–20, 2022. 1, 2, 6, 7, 8 [19] Chenyang Liu, Jiajun Yang, Zipeng Qi, Zhengxia Zou, and Zhenwei Shi. Progressive scale-aware network for remote sensing image change captioning. In IGARSS 2023-2023 IEEE International Geoscience and Remote Sensing Symposium, pages 6668–-
6671. IEEE, 2023. 7 [20] Shilong Liu, Zhaoyang Zeng, Tianhe Ren, Feng Li, Hao Zhang, Jie Yang, Qing Jiang, Chunyuan Li, Jianwei Yang, Hang Su, et al. Grounding dino: Marrying dino with grounded pre-training for open-set object detection. In European conference on computer vision, pages 38–55. Springer, 2024. 3, 5 [21] Weihuang Liu, Xi Shen, Chi-Man Pun, and Xiaodong Cun. Explicit visual prompting for low-level structure segmentations. In Proceedings of the IEEE/CVF Conference on Computer Vision an-
d Pattern Recognition, pages 19434–19445, 2023. 3 [22] Yang Liu, Muzhi Zhu, Hengtao Li, Hao Chen, Xinlong Wang, and Chunhua Shen. Matcher: Segment anything with one shot using all-purpose feature matching. arXiv preprint arXiv:2305.13310, 2023. 3
[23] Zhiyong Lv, Pingdong Zhong, Wei Wang, Zhenzhen You, and Nicola Falco. Multiscale attention network guided with
12

change gradient image for land cover change detection using remote sensing images. IEEE Geoscience and Remote Sensing Letters, 20:1–5, 2023. 1
[24] Belinda Mo, Kyssen Yu, Joshua Kazdan, Proud Mpala, Lisa Yu, Chris Cundy, Charilaos Kanatsoulis, and Sanmi Koyejo. Kggen: Extracting knowledge graphs from plain text with language models. arXiv preprint arXiv:2502.09956, 2025. 3 [25] Maria Papadomanolaki, Sagar Verma, Maria Vakalopoulou, Siddharth Gupta, and Konstantinos Karantzalos. Detecting urban changes with recurrent neural networks from multitemporal sentinel-2 data. In IGARSS 2019-2019 IEEE international geoscience and remote sensing sy-
mposium, pages 214–217. IEEE, 2019. 1 [26] Dong Huk Park, Trevor Darrell, and Anna Rohrbach. Robust change captioning. In Proceedings of the IEEE/CVF International Conference on Computer Vision, pages 4624–4633, 2019. 7, 8 [27] Adam Paszke, Sam Gross, Francisco Massa, Adam Lerer, James Bradbury, Gregory Chanan, Trevor Killeen, Zeming Lin, Natalia Gimelshein, Luca Antiga, et al. Pytorch: An imperative style, high-performance deep learning library. Advances in neural information processing systems, -
32, 2019. 7
[28] Yue Qiu, Shintaro Yamamoto, Kodai Nakashima, Ryota Suzuki, Kenji Iwata, Hirokatsu Kataoka, and Yutaka Satoh. Describing and localizing multiple changes with transformers. In Proceedings of the IEEE/CVF International Conference on Computer Vision, pages 1971–1980, 2021. 7, 8 [29] Nikhila Ravi, Valentin Gabeur, Yuan-Ting Hu, Ronghang Hu, Chaitanya Ryali, Tengyu Ma, Haitham Khedr, Roman R ̈adle, Chloe Rolland, Laura Gustafson, et al. Sam 2: Segment anything in images and videos. arXiv preprint a-
rXiv:2408.00714, 2024. 3
[30] Tianhe Ren, Shilong Liu, Ailing Zeng, Jing Lin, Kunchang Li, He Cao, Jiayu Chen, Xinyu Huang, Yukang Chen, Feng Yan, et al. Grounded sam: Assembling open-world models for diverse visual tasks. arXiv preprint arXiv:2401.14159, 2024. 3 [31] Paul-Edouard Sarlin, Daniel DeTone, Tomasz Malisiewicz, and Andrew Rabinovich. Superglue: Learning feature matching with graph neural networks. In Proceedings of the IEEE/CVF conference on computer vision and pattern recognition, pages 4938–4947, 2020. 4 [32-
] Michael Schlichtkrull, Thomas N Kipf, Peter Bloem, Rianne Van Den Berg, Ivan Titov, and Max Welling. Modeling relational data with graph convolutional networks. In European semantic web conference, pages 593–607. Springer, 2018. 3, 6
[33] Jingye Shi, Mengge Zhang, Yuewu Hou, Ruicong Zhi, and Jiqiang Liu. A multi-task network and two large scale datasets for change detection and captioning in remote sensing images. IEEE Transactions on Geoscience and Remote Sensing, 2024. 7, 8 [34] Dong Shu, Tianle Chen, Mingyu Jin, Chong Zhang, Mengnan Du, and Yongfeng Zhang. Knowledge graph large language model (kg-llm) for link prediction. arXiv preprint arXiv:2403.07311, 2024. 3
[35] Karthik Soman, Peter W Rose, John H Morris, Rabia E Akbas, Brett Smith, Braian Peetoom, Catalina Villouta-Reyes, Gabriel Cerono, Yongmei Shi, Angela Rizk-Jackson, et al. Biomedical knowledge graph-optimized prompt generation for large language models. Bioinformatics, 40(9):btae560, 2024. 3 [36] Dongwei Sun, Yajie Bao, Junmin Liu, and Xiangyong Cao. A lightweight sparse focus transformer for remote sensing image change captioning. IEEE Journal of Selected Topics in Applied Earth Observations a-
nd Remote Sensing, 2024. 2 [37] Dongwei Sun, Jing Yao, Wu Xue, Changsheng Zhou, Pedram Ghamisi, and Xiangyong Cao. Mask approximation net: A novel diffusion model approach for remote sensing change captioning. IEEE Transactions on Geoscience and Remote Sensing, 2025. 2, 8
[38] Shikhar Vashishth, Soumya Sanyal, Vikram Nitin, and Partha Talukdar. Composition-based multi-relational graph convolutional networks. arXiv preprint arXiv:1911.03082, 2019. 3 [39] Ashish Vaswani, Noam Shazeer, Niki Parmar, Jakob Uszkoreit, Llion Jones, Aidan N Gomez, Łukasz Kaiser, and Illia Polosukhin. Attention is all you need. Advances in neural information processing systems, 30, 2017. 1, 2, 3
[40] Futian Wang, Yuhan Qiao, Xiao Wang, Fuling Wang, Yuxiang Zhang, and Dengdi Sun. R2genkg: Hierarchical multimodal knowledge graph for llm-based radiology report generation. arXiv preprint arXiv:2508.03426, 2025. 3
[41] Yuezhong Wu, Yuxuan Sun, Lingjiao Chen, Xuanang Zhang, and Qiang Liu. A text generation method based on a multimodal knowledge graph for fault diagnosis of consumer electronics. Applied Sciences, 14(21):10068, 2024. 3 [42] Bowei Xue, Han Cheng, Qingqing Yang, Yi Wang, and Xiaoning He. Adapting segment anything model to aerial land cover classification with low-rank adaptation. IEEE Geoscience and Remote Sensing Letters, 21:1–5, 2024. 3
[43] Xiaofei Yu, Yitong Li, Jie Ma, Chang Li, and Hanlin Wu. Diffusion-rscc: Diffusion probabilistic model for change captioning in remote sensing images. IEEE Transactions on Geoscience and Remote Sensing, 2025. 7
[44] Wenxi Yue, Jing Zhang, Kun Hu, Yong Xia, Jiebo Luo, and Zhiyong Wang. Surgicalsam: Efficient class promptable surgical instrument segmentation. In Proceedings of the AAAI Conference on Artificial Intelligence, pages 68906898, 2024. 3 [45] Shu Zhang, Dequan Zheng, Xinchen Hu, and Ming Yang. Bidirectional long short-term memory networks for relation classification. In Proceedings of the 29th Pacific Asia conference on language, information and computation, pages 7378, 2015. 3 [46] Zihan Zhong, -
Zhiqiang Tang, Tong He, Haoyang Fang, and Chun Yuan. Convolution meets lora: Parameter efficient finetuning for segment anything model. arXiv preprint arXiv:2401.17868, 2024. 3
[47] Qing Zhou, Junyu Gao, Yuan Yuan, and Qi Wang. Singlestream extractor network with contrastive pre-training for remote-sensing change captioning. IEEE Transactions on Geoscience and Remote Sensing, 62:1–14, 2024. 2, 7
13

[48] Duowang Zhu, Xiaohu Huang, Haiyan Huang, Hao Zhou, and Zhenfeng Shao. Change3d: Revisiting change detection and captioning from a video modeling perspective. In Proceedings of the Computer Vision and Pattern Recognition Conference, pages 24011–24022, 2025. 2
14

---

## Processing Information

- **Processing Library:** Zotero PDFWorker
- **Processing Date:** 2026-02-10T18:14:00.920Z
- **Text Length:** 52802 characters
- **Success:** Text extraction completed
- **PDF Library Used:** Zotero PDFWorker
- **Pages Processed:** 14 of 14
