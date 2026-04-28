# PDF Document: Thai et al. - 2025 - Shape-Adapting Gated Experts Dynamic Expert Routing for Colonoscopic Lesion Segmentation.pdf

**File Path:** Thai et al. - 2025 - Shape-Adapting Gated Experts Dynamic Expert Routing for Colonoscopic Lesion Segmentation.pdf

**Processed Date:** 2026-02-10T18:18:10.057Z

**File Size:** 4662.39 KB

**Total Pages:** 14

**Extracted Pages:** 14

**PDF Library:** Zotero PDFWorker

**Attachment Item ID:** 3275

**Title:** Shape-Adapting Gated Experts: Dynamic Expert Routing for Colonoscopic Lesion Segmentation

**Collection:** Large Files > Random Papers

---

## Extracted Text Content

Shape-Adapting Gated Experts: Dynamic Expert Routing for Colonoscopic
Lesion Segmentation
Gia Huy Thai∗ University of Science, VNU-HCM
2312008@student.hcmus.edu.vn
Hoang-Nguyen Vu∗ Trivita AI
nguyen.vu@trivita.ai
Anh-Minh Phan University of Technology, VNU-HCM
phananhm5@gmail.com
Quang-Thinh Ly Michigan State University, USA
lythinh@msu.edu
Tram Dinh Phu Nhuan High School
50.dnmtram.81@gmail.com
Thi-Ngoc-Truc Nguyen Trivita AI
truc.nguyen@trivita.ai
Nhat Ho The University of Texas at Austin
minhnnhat@utexas.edu
Abstract
The substantial diversity in cell scale and form remains a primary challenge in computer-aided cancer detection on gigapixel Whole Slide Images (WSIs), attributable to cellular heterogeneity. Existing CNN-Transformer hybrids rely on static computation graphs with fixed routing, which consequently causes redundant computation and limits their adaptability to input variability. We propose ShapeAdapting Gated Experts (SAGE), an input-adaptive framework that enables dynamic expert routing in heterogen-
eous visual networks. SAGE reconfigures static backbones into dynamically routed expert architectures. SAGE’s dual-path design features a backbone stream that preserves representation and selectively activates an expert path through hierarchical gating. This gating mechanism operates at multiple hierarchical levels, performing a two-level, hierarchical selection between shared and specialized experts to modulate model logits for Top-K activation. Our Shape-Adapting Hub (SA-Hub) harmonizes structur-
al and semantic representations across the CNN and the Transformer module, effectively bridging diverse modules. Embodied as SAGEUNet, our model achieves superior segmentation on three medical benchmarks: EBHI, DigestPath, and GlaS, yielding state-of-the-art Dice Scores of 95.57%, 95.16%, and 94.17%, respectively, and robustly generalizes across domains by adaptively balancing local refinement and global context. SAGE provides a scalable foundation for dynamic expert routing, enabling flexible vis-
ual reasoning.
∗Equal Contribution.
Original Image Ground Truth Prediction
CNN Main Path Transformer Block 1 Transformer Block 11
Transformer Main Path CNN Block 2 Transformer Block 2
Figure 1. Explainability visualization of dynamic expert routing in SAGE on the EBHI dataset. Grad-CAMs highlight contributions from the CNN and Transformer main paths and their expert blocks. SAGE adaptively redistributes attention across heterogeneous modules, revealing interpretable expert collaboration during inference.
1. Introduction
The foundation of digital pathology lies in computer-aided detection of malignant tissue within gigapixel WSIs, enabling rapid and quantitative diagnosis. In colorectal cancer, accurately characterizing the tumor’s morphology is crucial for prompt diagnosis, classification, and treatment planning. However, translating such visually complex and heterogeneous tissue structures into computational under
1
arXiv:2511.18493v2 [eess.IV] 25 Nov 2025

standing remains highly challenging. While Convolutional Neural Networks (CNNs) [1] excel at capturing fine-grained local features, such as cell boundaries and textures, Vision Transformers (ViTs) [15] have emerged as a powerful paradigm for modeling long-range spatial dependencies and global context. Nevertheless, substantial variability in tissue appearance, ranging from homogeneous normal tissues to complex and subtly textured malignant patterns, combined with the large resolution of WSIs, pus-
hes current models beyond their representational and computational limits. Existing models, including U-Net variants and hybrid CNN-Transformer architectures, utilize a static computational graph. This forces uniform processing for all input segments, an inefficient and suboptimal approach that over-processes simple regions while under-modeling complex ones. Furthermore, the fixed interaction between CNN and Transformer blocks prevents the adaptive leveraging of each paradigm’s strengths based on -
input characteristics.
To address these limitations, we propose ShapeAdapting Gated Experts (SAGE), a dynamic, input-adaptive framework that converts any static backbone into a flexible dual-path system. SAGE introduces a dual-path layer architecture, comprising a main path that preserves the original backbone for stability and the reuse of pre-trained knowledge, and an expert path that selectively activates specialized computations conditioned on the input. The model learns to combine these two paths, dynamically deter-
mining the degree of expert-driven refinement required at each stage. In contrast to traditional flat Mixture-of-Experts (MoE) routing, SAGE utilizes a hierarchical gating mechanism that initially differentiates between shared and finegrained experts, subsequently executing top-K routing to allocate computational resources efficiently. At the top level, a gate selects between general-purpose shared experts and special-purpose fine-grained experts, which are the underlying blocks of the backbone. T-
he final top-K selection is then directed toward the optimal computational paradigm. To facilitate communication within this heterogeneous expert pool, we introduce the Shape-Adapting Hub (SA-Hub). This module dynamically adapts feature tensors to bridge the architectural gap between different types of experts, such as CNNs and Transformers.
To summarize, this work makes contributions as follows:
• We propose a dual-path architecture that enables static backbones to become dynamic, allowing for inputdependent computation and the adaptive integration of local and global context by routing features among diverse experts, including the original backbone blocks. • We design a hierarchical expert routing system that distinguishes between shared and fine-grained experts, ensuring more adaptive and context-aware selection. • We introduce a lightweight module that enables CNNs, Transformers, and o-
ther models to align their feature rep
resentations dynamically.
2. Related Work
Medical Image Segmentation. Image segmentation in the medical domain has been at the forefront of computational pathology, allowing detailed analysis of cellular and tissue-level morphology. Traditional approaches conducted based on pixel intensities, region growing, and/or evolution of boundaries are inherently very sensitive to noise and morphology variation. The emergence of deep learning has significantly influenced image segmentation, and its application was first proposed with U-Net[27], wit-
h subsequent improvements over enhanced backbones such as ResNet[12], EfficientNet[32], ConvNeXt[19], and others with hierarchical designs such as U-Net++[40]. Recent research further emphasizes data efficiency and crossdomain generalization. Foundation models such as MedSAM [21] and SAM-Med2D/3D [31] leverage large-scale pretraining with task-guided segmentation to yield transferable representations across modalities. However, domain heterogeneity and scarce annotations hinder robust adaptation t-
o histopathology. Semi-supervised approaches, including C2GMatch [25], mitigate this issue via weak-tostrong consistency learning, reflecting a shift toward dataefficient, domain-adaptive segmentation.
Hybrid U-Net Architectures. Recent advances in medical image segmentation, however, have seen growth in efforts to enlarge the receptive fields and allow global context comprehension, keeping computational overhead in check. The models based on the transformer structure, such as TransUNet [5], Swin-UNet [2], and SegFormer [37], can understand long State-space models, such as U-Mamba[22] and Swin U-Mamba[18], address this by modeling globally in linear time with recurrent operators, making it feasi-
ble to segment large-scale datasets, although high Meanwhile, Mixture-of-Experts models such as MoE-NuSeg [36] improve adaptability by dynamically routing representations towards specialized experts, better accommodating heterogeneous tissue Mixture of Experts. The Mixture of Experts (MoE) architecture offers a scalable approach, with sparsely gated MoE networks [29] allowing only a few experts to be activated by each input, making it possible to build huge models without an exponentially increase-
d computational requirement. Later models, such as DeepSeekMoE [8], optimize routing efficiency, making it feasible to build models of trillion parameters, and sigmoid gating functions [24, 38] allow better efficiency and robustness Regarding vision tasks, MoE architectures support modality- and task-adaptation, as shown in multimodal routing learning [23] and adaptive multi-tasking MoE [6]. Layer-adaptive routing is improved by decoder-centric approaches [39]. The majority of existing MoE approac-
hes
2

consider routing at either token or spatial resolutions, without considering model depth. This is addressed by MoLEx [34], by applying routing at each individual layer, considering each one as an expert. Building on this principle, SAGE introduces layer-adaptive expert gating for dynamic, shapeaware integration across depth.
3. Method
Contemporary deep neural networks, especially hybrid CNN-Transformer architectures, commonly rely on static computation graphs, wherein every input is propagated through a fixed sequence of operations irrespective of its structural complexity. These graphs process all inputs equally, which restricts adaptability to data with varying structural complexity. To address this, we present ShapeAdapting Gated Experts (SAGE). This framework transforms a fixed backbone into a dynamic expert system. Each la-
yer features a conditional gating mechanism that selects the appropriate experts based on the input characteristics. This allows computation to be tailored adaptively.
SAGE employs a dual-path layer: a primary path retains pre-trained data, while an expert path enhances features through selected experts. The model chooses how much expert refinement each input needs. Central to SAGE is a hierarchical routing mechanism, a two-level gating process that first chooses between general shared or specialized experts, then activates the top-K experts accordingly. To unify heterogeneous modules, the Shape-Adapting Hub (SA-Hub) aligns feature representations across CNN and-
 Transformer spaces. The entire system is trained end-to-end with a primary task loss and an auxiliary load-balancing term to ensure effective expert utilization.
3.1. Preliminaries: Sparse Mixture-of-Experts
Our SAGE framework builds upon the Sparse Mixture-ofExperts (SMoE) paradigm [29], which conditionally activates a small subset of sub-networks (experts) to scale model capacity without a proportional increase in computation. A typical SMoE layer consists of a router and a set of experts {Ej}M
j=1. Given an input feature vector x ∈ RD, the router projects it into expert logits: L = W⊤
gatex + bgate,
with L ∈ RM where Wgate and bgate are learnable routing parameters. These logits measure the affinity between x and each expert. To ensure efficiency, the router activates only the top-K experts with the highest logits. Let I denote their indices; the normalized gating weights are computed as:
πj =



exp(Lj )
P
k∈I exp(Lk) , j ∈ I,
0, otherwise.
(1)
The layer output is then a weighted aggregation of the selected experts:
y=
X
j∈I
πj Ej(x). (2)
During training, a common issue known as router collapse arises when only a few experts dominate the routing. To promote balanced utilization, an auxiliary load-balancing loss encourages uniform token distribution across experts:
Lbalance = M ·
M
X
j=1
fj Pj, (3)
where fj is the fraction of tokens assigned to expert j, and Pj is its mean routing probability. Building on this foundation, SAGE generalizes the SMoE formulation by introducing a hierarchical routing mechanism and heterogeneous expert coordination, enabling the model to adaptively select both which experts and which type of computation best fit each input.
3.2. SAGE Block Architecture
At each layer i of the network (Figure 2), the proposed SAGE block receives an input feature map zi−1 and produces an output zi through a dual-path mechanism. This design enables the model to enrich representations via expert computation while preserving the stability and architectural continuity of the original backbone. Main Path. In the first branch, termed the main path, the input zi−1 is processed by the standard backbone transformation fi(·) to produce a baseline representation:
z(main)
i = fi(zi−1). (4)
This path ensures that pretrained knowledge and the forward consistency of the architecture are retained, providing a stable foundation for subsequent adaptive refinement.
Expert Path and Feature Enrichment. In parallel, the same input zi−1 is routed through the expert path, which leverages our hierarchical routing mechanism (Sec. 3.4) to select and activate the most relevant experts. These experts collaborate to generate an enriched representation z(expert)
i. The outputs from the two paths are then adaptively fused through a learnable scalar gate αi:
zi = αi · z(main)
i + (1 − αi) · z(expert)
i , (5)
where αi = σ(θi) is computed from a learnable parameter θi. This formulation allows the model to dynamically balance stability and adaptability—favoring expert-driven enrichment when beneficial, while preserving the backbone’s inductive biases when necessary. Expert Pool. All expert paths draw from a shared global pool E that contains two complementary expert types.
3

Stage 0 Stage 1 Stage 2 Stage 3
Block 0 Block 1 Block 2 Block 3
Layer 1
Patch
Embedding
Layer 2 Layer n
Router
Shape-Adapting Hub
Shape-Adapting Hub
Projection
Decoder
Main Path
Expert Path
ConvNeXt Encoder ViT Encoder
Skip
Connection
Stem
H×W×3
H×W×C
⋯
Shape-Adapting Hub
Shape-Adapting Hub
Figure 2. The proposed architecture integrates a ConvNeXt [19] and a ViT [9] encoder through hierarchical expert routing and shapeadaptive interaction. The principal road (black arrows) represents the backbone forward flow, and the expert road (brown arrows) is dynamically responsible for routing information between distant modules. The router determines the best connections to experts, and then the Shape-Adapting Hub ensures that there is structural compatibility between the convolutional feature-
s and transformer features. In this illustration, the router activates two experts, and the Shape-Adapting Hub preserves compatibility between convolutional and transformer features. The skip connections enable the transfer of multi-scale features to the decoder, facilitating higher-resolution reconstruction. The two-path architecture enables SAGE-UNet to perform adaptive and complexity-conscious segmentation tasks.
The fine-grained experts Efine are specialized submodules adapted from the original backbone, capturing domain- or context-specific representations at different depths. The shared expert layer Eshared is a parameter-efficient component of the model that captures general-purpose representations and enables knowledge sharing across layers. During training, SAGE learns from the hierarchical router to dynamically choose between focusing more on shared specialists or domain-specific specialists to suit-
 the computational graph based on the semantic complexity of the inputs. Together, this dual-path and expert-based hierarchical design converts a static graph into a dynamic graph, which keeps the benefits of pre-trained models while routing features into experts most suitable for contexts in which they appear.
3.3. Hierarchical Top-K Expert Routing
The central innovation of SAGE is its two-level routing mechanism, which intelligently selects the top-K most suitable experts for a given input. This process first establishes a high-level preference between the shared and fine-grained expert sets before refining the selection, as illustrated in Figure 3. The routing decision unfolds in four steps for each input feature map zi−1:
3.3.1. Shared Expert Gating
A lightweight gating network, Gs, first determines the model’s propensity to use a general-purpose shared expert.
It takes a globally pooled representation of the input, z ̄i−1, and computes a scalar gate value gs ∈ (0, 1).
gs = σ z ̄i−1W(i)
gate + b(i)
gate . (6)
A high gs signals a preference for shared experts, whereas a low gs favors the specialized, fine-grained ones.
3.3.2. Fine-grained Routing
A primary router Ri generates the base logits Li ∈ RM for all experts E = {E1, . . . , EM }. We propose a Semantic Affinity Routing (SAR) mechanism that models expert selection as a semantic matching process between the input representation (query) and the latent key embeddings of experts. The routing logits are computed as:
Li = (z ̄i−1W(i)
Q )(K(i))⊤
√dk
+ σ(i)
noise ⊙ ε(i), ε(i) ∼ N (0, I),
(7) where W(i)
Q ∈ Rd×dk is a learnable query projection, and
K(i) ∈ RM×dk represents the learnable expert key matrix. The input-adaptive noise scale is defined as:
σ(i)
noise = softplus z ̄i−1W(i)
noise , (8)
where W(i)
noise learns to modulate the intensity of the Gaussian perturbation based on the input state. The first term
4

performs a scaled dot-product between the query and expert keys to measure semantic affinity. In contrast, the second introduces stochastic perturbation to encourage routing diversity and mitigate expert over-specialization.
1 NS 1 2 NR
⋯
⋯⋯
2
1 NS 1 2 NR
⋯
⋯⋯
2
⋯
Semantic Affinity Routing
Router
Top-K
(a) High gating value favors Shared Experts
(b) Low gating value favors Fine-grained Experts
Semantic Affinity Routing
Top-K
Router
⋯
Shared Expert Fine-grained Expert
Figure 3. The router dynamically divides computing between shared experts (green), which capture domain-invariant and transferable features, and specialized experts (blue), who focus on input-specific reasoning. High gating values prefer shared experts for generalization, whereas low values prefer specialized experts for context-dependent adaptation. This hierarchical routing allows SAGE to balance generalization and specialization across several visual domains.
3.4. Adaptive Hierarchical Gating
To enable hierarchical routing between shared and specialized experts, the scalar gate value gs modulates the base logits Li, steering the selection toward the preferred expert group. We define a binary mask mshared, where (mshared)j =
1 if expert j ∈ Eshared. The modulated logits L′
i are obtained as:
L′
i = Li + mshared log(gs) + (1 − mshared) log(1 − gs), (9)
which introduces a bias (in log-space) that adaptively favors shared or routed experts depending on the high-level gate gs. From these modulated logits, the router identifies the subset of K most relevant experts. Let I denote the indices of the top-K experts; the normalized gating weights are then computed using a softmax applied only over their corresponding logits:
wj =



exp((L′
i)j )
P
k∈I exp((L′
i)k) , j ∈ I,
0, otherwise.
(10)
This unified formulation integrates high-level group preference and fine-grained expert selection into a single hierarchical gating process. By activating only the top-K experts, the router achieves sparse yet adaptive computation, balancing efficiency with expert specialization across heterogeneous feature distributions.
3.5. Cross-Architecture Adaptation and Fusion
Executing a diverse set of experts requires resolving potential incompatibilities in data format (for example: CNN feature map versus Transformer token sequence). We address this with a SA-Hub.
Shape-Adapting Hub (SA-Hub). To enable seamless communication among heterogeneous experts, SAGE introduces the Shape-Adapting Hub, a pair of learnable modules that act as universal translators between architectural domains. Specifically, the SA-Hub consists of an input adapter Sin and an output adapter Sout, which together ensure compatibility in both feature representation and spatial structure. Given an input feature map zi−1 and a selected expert ek, the input adapter transforms the feature int-
o the representation format expected by that expert:
z ̃(k)
i−1 = Sin(zi−1, ek), (11)
where Sin performs architectural normalization operations such as patchification, flattening, or linear projection, effectively converting convolutional feature maps into token sequences or other expert-specific formats. After the expert ek processes the adapted input, producing ek z ̃(k)
i−1 , the output adapter reconstructs this representation into the spatial and channel dimensions compatible with the main path feature
z(main)
i:
zˆ(k)
i = Sout ek z ̃(k)
i−1 , z(main)
i . (12)
This operation enables element-wise integration between the expert and main paths, regardless of their architectural differences.
5

Finally, the outputs from the top-K selected experts are aggregated through a gating-weighted summation:
z(expert)
i=
X
k∈I
wk · zˆ(k)
i . (13)
Through this adaptive translation and integration process, the SA-Hub allows, for instance, a CNN layer to query a Transformer expert for global semantic context, or a Transformer layer to incorporate localized structural cues from a CNN expert. The complete execution flow of SAGE, including hierarchical gating, shape adaptation, and loss computation, is summarized in Algorithm 1.
Algorithm 1 SAGE Training Algorithm (per mini-batch)
Require: Input batch X with labels Y; model F with T SAGE layers Ensure: Total loss Ltotal for backpropagation
1: z0 ← Stem(X) ▷ Initial feature extraction
2: Lbalance ← 0
3: for i = 1 to T do
4: z(main)
i ← fi(zi−1) ▷ Main transformation path 5: // Hierarchical Semantic Routing 6: z ̄i−1 ← GlobalPool(zi−1) 7: Li ← SAR(z ̄i−1) 8: L′
i ← Li + HierGate(z ̄i−1) ▷ Eq. 9 9: // Top-K Expert Gating and Execution 10: I ← TopKIndices(L′
i, K)
11: w ← Softmax(L′
i [I ])
12: z(expert)
i ←P
k∈I wk ek(Sin(zi−1))
13: zi ← αi z(main)
i + (1 − αi) z(expert)
i ▷ Dual-path fusion
14: // Load-Balancing Regularization
15: Lbalance+ = M PM
j=1 f (i)
j P (i)
j
16: end for
17: P ← Decoder(zT ) 18: Ltask ← λceLCE(P, Y) + λdiceLDice(P, Y)
19: Ltotal ← Ltask + λlbLbalance 20: return Ltotal
4. Experiments
4.1. Datasets and Evaluation Metrics
We rigorously evaluated the SAGE framework using three established public benchmarks for colorectal histopathology segmentation: EBHI, DigestPath and GlaS. EBHI Dataset. The Extended Biopsy Histopathological Image (EBHI) dataset [14] contains 5, 170 H&E-stained biopsy samples, each classified into one of six histological subtypes. We focused on the clinically significant Adenocarcinoma subset, and selected 795 images for our experi
ments. This dataset evaluates SAGE on heterogeneous yet domain-consistent tissue patterns. DigestPath Dataset. The DigestPath dataset [7] was released as part of the DigestPath 2019 Challenge. It comprises 660 gigapixel whole-slide images (WSIs) from colonoscopy specimens. To facilitate efficient training, we devised a customized preprocessing pipeline that extracts informative tissue patches. Each WSI was partitioned into overlapping patches of size 1536 × 1536 with a stride of 512. A patch P wit-
h mask M was retained if it satisfied:
P was selected if

 
 
σ(P ) ≥ 10
μ(P ) ≤ 230
P
h,w Mh,w ≥ 100
where σ(P ) and μ(P ) denote the pixel intensity standard deviation and mean of P , respectively. This filtering process yielded approximately 32, 000 patches across all 660 WSIs, ensuring balanced representation of both tumor and non-tumor regions. GlaS Dataset. The Gland Segmentation (GlaS) dataset [30] was introduced in the MICCAI 2015 Gland Segmentation Challenge. It consists of 165 H&E-stained histology images at a resolution of 522 × 775, each annotated for glandular structures. The official-
 split includes 85 images for Train, 60 for Test A, and 20 for Test B. This dataset is widely used to assess a model’s ability to capture gland morphology and boundary precision. Evaluation Metrics. We assessed segmentation performance using three widely adopted metrics: Intersection over Union (IoU), Dice Similarity Coefficient (DSC), and pixel-wise Accuracy (ACC). For GlaS and EBHI, metrics were computed per image and averaged across the test set. For DigestPath, patch-level predictions were agg-
regated to obtain the final WSI-level score. These metrics collectively measure region overlap, boundary precision, and pixel-level consistency.
4.2. Implementation Details
SAGE-UNet Configuration. The SAGE module was integrated into the TransUNet [5] backbone, which used a hybrid encoder combining ConvNeXt [19] and an ImageNetpretrained ViT [9]. The MoE module included 4 shared experts and 16 non-shared experts, with the top 4 experts dynamically selected during routing. We trained SAGEUNet on two NVIDIA H100 GPUs (80GB VRAM each) with a global batch size of 64 (32 per GPU). Training proceeded in two stages using the AdamW optimizer [20] and the hybrid loss Ltotal i-
n Algorithm 1, weighted as λce = 1, λdice = 1.5, λlb = 1. In the first stage, all parameters were optimized with a uniform learning rate of 1 × 10−5. In the second stage, discriminative fine-tuning [13] was applied with 1 × 10−5 for non-shared experts, routers, and the de
6

Table 1. Performance comparison of SAGE-UNet against a comprehensive suite of baseline models on EBHI, DigestPath, and GlaS datasets. The results demonstrate that SAGE-UNet sets a new performance benchmark, surpassing the best existing backbones across all metrics. All scores are percentages (%). Best and Second indicate the best and the second-best performance, respectively.
Model EBHI DigestPath GlaS GlaS GlaS (Adenocarcinoma) (Colonoscopy) (Test A+B) (Test A) (Test B)
Acc ↑ IoU ↑ DSC ↑ Acc ↑ IoU ↑ DSC ↑ Acc ↑ IoU ↑ DSC ↑ Acc ↑ IoU ↑ DSC ↑ Acc ↑ IoU ↑ DSC ↑
ResNet101-UNet [11, 28] 92.04 88.89 94.12 98.40 92.15 88.03 91.86 85.29 92.06 92.81 86.39 92.70 89.02 82.49 90.41 ResNet152-UNet [11, 28] 89.25 85.36 92.10 98.42 92.15 88.34 90.51 83.17 90.81 92.25 85.32 92.08 85.28 78.14 87.73 EfficientNet-B7-UNet [28, 33] 92.00 88.85 94.09 98.81 94.95 90.96 92.50 86.13 92.55 93.17 86.83 92.95 90.51 84.34 91.50 ConvNeXt-UNet [19, 28] 92.40 89.42 94.42 98.99 95.71 91.94 92.76 86.70 92.88 93.74 87.91 93.56 89.81 83.72 91.14 UNet++ [40] 88.75 84.90 91.83 98.94 94.06-
 91.26 92.75 86.85 92.96 93.44 87.56 93.37 90.69 85.06 91.93 SegFormer [37] 92.50 89.52 94.47 98.91 94.47 91.10 93.02 87.31 93.23 94.02 88.55 93.93 90.03 84.26 91.45 Swin-Unet [2] 88.52 84.68 91.70 98.65 93.43 89.50 91.26 84.42 91.55 91.97 85.09 91.95 89.13 82.69 90.52 U-Mamba [22] 90.07 86.41 92.71 98.05 91.61 86.34 87.50 78.60 88.02 88.60 79.58 88.63 84.18 76.11 86.43 Swin-UMamba [18] 90.68 87.25 93.19 98.37 91.70 87.59 88.15 78.90 88.21 89.26 80.04 88.91 84.80 76.02 86.38 MoE-NuSeg [36] 83.53 7-
8.64 88.41 98.15 91.40 87.13 87.70 79.06 88.31 87.94 78.75 88.11 86.96 79.89 88.82
SAGE-UNet + Softmax Gating (Ours) 95.33 90.41 94.31 98.38 96.07 94.58 94.22 88.46 93.15 94.72 88.96 93.65 92.72 86.96 91.65 SAGE-UNet + Sigmoid Gating (Ours) 96.03 91.11 95.01 99.08 96.77 95.28 94.92 89.16 93.85 95.42 89.66 94.35 93.42 87.66 92.35
(a) Input (b) TransUNet (c) EViT-UNet (d) Ours
GlaS Test B GlaS Test A
Figure 4. Qualitative comparison on GlaS test samples. Each column shows (a) the input image with ground-truth annotation, (b) TransUNet, (c) EViT-UNet, and (d) our proposed SAGE-UNet. The top row presents a typical gland structure (GlaS Test A), while the bottom row depicts a challenging case with irregular morphology (GlaS Test B). Green areas denote correct predictions, and red areas denote errors.
coder, and 5 × 10−5 for shared experts. Unless noted otherwise, other hyperparameters followed default settings.
Comparison Protocol. To benchmark SAGE-UNet, we compared its performance in two settings: Baseline Comparison and State-of-the-Art (SOTA) Comparison. Baseline experiments used input images resized to 512 × 512 pixels. In contrast, SOTA comparisons used 224 × 224 pixels for most datasets, except for DigestPath, which remained at 512 × 512 pixels to preserve tissue-level detail. We adhered to the official training setups for all methods (e.g., optimizer, learning rate), except for a standardized bat-
ch size
of 64, which ensured efficient multi-GPU utilization.
Evaluation and Model Selection. We split the official training data of all datasets into 80% for training and 20% for validation. For EBHI and DigestPath, the model checkpoint with the highest validation Dice score was selected, and its validation performance was reported. For GlaS, the same model selection procedure was applied, after which the chosen model was evaluated on the official Test A, Test B, and a merged Test A with Test B sets. These three test scores were reported to assess performan-
ce under domain shift comprehensively.
4.3. Results and Analysis
4.3.1. Quantitative Comparison
In this section, we provide a quantitative comparison of SAGE-UNet against baseline and SOTA models in Table 1 and Table 2, respectively. Baseline Comparison. Table 1 validates our architectural contributions against all baseline models. While modern architectures such as Segformer and ConvNeXtUNet establish strong baselines, our method consistently achieves superior results across all datasets. This advantage is most pronounced on DigestPath, where SAGE-UNet reaches 95.28% DSC, a 3.34% gain over -
ConvNeXt-UNet. This result suggests that relying on a single, fixed backbone is suboptimal for this dataset. Similarly, on GlaS Test B, SAGE-UNet surpasses UNet++ by 0.42% DSC, further emphasizing its robustness under domain shift. These outcomes underscore the effectiveness of SAGE-UNet’s hierarchical expert routing compared to static baseline architectures. SOTA Comparison. Table 2 further substantiates our approach against competitive SOTA methods. SAGE-UNet consistently achieves superior perfo-
rmance, establishing a new SOTA across all three datasets. On EBHI, for instance, SAGE-UNet attains a 95.57% DSC, outperforming
7

Table 2. Performance comparison of SAGE-UNet against leading SOTA models on EBHI, DigestPath, and GlaS datasets. Our approach achieves a new SOTA by securing top performance across all metrics, showcasing its strong generalization to varied tissue morphologies. All metrics are reported in percentages (%). Best and Second indicate the best and the second-best performance, respectively.
Model EBHI DigestPath GlaS GlaS GlaS (Adenocarcinoma) (Colonoscopy) (Test A+B) (Test A) (Test B)
Acc ↑ IoU ↑ DSC ↑ Acc ↑ IoU ↑ DSC ↑ Acc ↑ IoU ↑ DSC ↑ Acc ↑ IoU ↑ DSC ↑ Acc ↑ IoU ↑ DSC ↑
SelfReg-UNet [42] 91.76 88.39 93.84 98.41 91.25 87.62 89.10 80.67 89.30 89.76 81.05 89.53 87.12 79.69 88.70 Attention U-Net [26] 91.59 88.42 93.86 98.61 92.44 89.17 90.51 82.90 90.65 90.83 82.87 90.63 89.54 82.96 90.69 ConvUNeXt [10] 91.48 88.14 93.69 98.87 94.01 90.76 90.08 82.10 90.17 90.50 82.10 90.17 88.82 82.09 90.17 UCTransNet [35] 92.01 89.09 94.23 98.21 90.42 86.39 89.92 82.07 90.15 90.36 82.12 90.18 88.62 81.95 90.08 TransAttUNet [3] 92.15 89.01 94.19 98.59 92.77 89.04 90.25 82.29 90.28 9-
0.69 82.41 90.36 88.94 81.97 90.09 EViT-UNet [16] 92.18 89.05 94.21 98.98 94.91 91.60 92.24 85.99 92.47 93.00 86.76 92.91 89.97 84.07 91.35 DS-TransUNet [17] 91.91 88.68 94.00 98.14 95.07 91.51 89.12 80.83 89.40 89.53 80.85 89.42 87.89 80.77 89.36 CAC-UNet [41] 91.90 88.71 94.02 98.51 96.47 94.97 89.00 80.76 89.36 89.84 81.59 89.86 86.47 78.60 88.02 TransUNet [4] 91.92 83.21 90.66 98.26 85.45 88.26 90.00 81.81 89.87 90.90 83.10 90.64 86.53 76.44 86.26
SAGE-UNet + Softmax Gating (Ours) 95.39 90.88 94.77 98.27 95.87 94.41 93.54 88.31 93.39 94.06 88.79 93.78 92.06 86.79 91.88 SAGE-UNet + Sigmoid Gating (Ours) 96.22 91.58 95.57 99.03 96.67 95.16 94.31 89.02 94.17 94.81 89.52 94.67 92.81 87.52 92.67
UCTransNet by 1.34%. This improvement is even more notable on the GlaS Test A+B set, where our 94.17% DSC surpasses EViT-UNet by a margin of 1.70%. Unlike many existing SOTA architectures that employ a static fusion of CNN and Transformer components, SAGE-UNet introduces a dynamic hybridization mechanism. By adaptively routing information through specialized expert pathways, our model tailors its feature extraction to each input, robustly outperforming fixed-feature fusion architectures.
4.3.2. Qualitative Results
We present qualitative comparisons in Figure 4 to complement the quantitative metrics summarized in Table 1 and 2. These visualizations illustrate the practical benefits of dynamic expert routing from the SAGE module, particularly in the context of domain shifts. On the standard GlaS Test A sample (top row), SAGEUNet produces a segmentation mask with high fidelity to the ground truth. While TransUNet introduces significant false positives (red areas), and EViT-UNet exhibits minor segmentation arti-
facts, our model generates a notably cleaner mask. SAGE-UNet effectively eliminates most false positives and generates boundaries that are visually most faithful to the ground truth. The robustness of our dynamic approach is clearly demonstrated on the domain-shifted GlaS Test B sample (bottom row). In this challenging scenario, the competing static-architecture models exhibit clear failure modes. Both TransUNet and EViT-UNet suffer from significant over-segmentation, incorrectly classifying large-
 portions of the background stroma as gland tissue (visible as large red regions). Furthermore, EViT-UNet fails to preserve topological integrity, incorrectly merging distinct glands into a single entity. In sharp contrast, SAGE-UNet effectively mitigates this domain shift through coordinated contributions from heterogeneous experts, as shown in Figure 1. It maintains precise boundaries, correctly identifies the complex gland structures, and avoids the large-scale pre
dictive bleeding into the background stroma. These visual results corroborate the quantitative results shown in Table 2, demonstrating that our dynamic routing mechanism is not only more accurate on average but is practically more robust in handling complex, out-of-distribution samples.
5. Conclusion
SAGE (Shape-Adapting Gated Experts) presents a novel paradigm that overcomes a key limitation of hybrid CNNTransformer architectures, their static, input-agnostic computation. Rather than merely stacking or concatenating architectural components as in prior static fusion schemes, SAGE employs a dual-path design with hierarchical expert routing that dynamically restructures the computation graph, enabling adaptive and complexity-aware inference across diverse visual inputs. In contrast, it employs -
a dualpath architecture with hierarchical expert routing to perform a structural redesign, enabling dynamic and complexityaware computing while being compatible with any CNN or Transformer backbone. Experiments conducted on three medical benchmarks EBHI, DigestPath and GlaS demonstrate that SAGE significantly improves segmentation performance across diverse tissue morphologies. The gating system enhances model clarity by identifying which expert types are active for specific tissue patterns, and t-
he ShapeAdapting Hub facilitates seamless communication across experts with architecturally distinct approaches. Overall, SAGE represents a significant step toward more flexible, interpretable, and effective vision models for complex biological imaging.
Acknowledgements
We gratefully acknowledge the University of Texas at Austin for supporting this research and Trivita AI for providing the GPU computing resources essential to this work.
8

References
[1] Saad Albawi, Tareq Abed Mohammed, and Saad Al-Zawi. Understanding of a convolutional neural network. In 2017 International Conference on Engineering and Technology (ICET), pages 1–6, 2017. 2 [2] Hu Cao, Yueyue Wang, Joy Chen, Dongsheng Jiang, Xiaopeng Zhang, Qi Tian, and Manning Wang. Swin-unet: Unet-like pure transformer for medical image segmentation. In European conference on computer vision, pages 205–218. Springer, 2022. 2, 7 [3] Bingzhi Chen, Yishu Liu, Zheng Zhang, Guangming Lu, and Ada-
ms Wai Kin Kong. Transattunet: Multi-level attentionguided u-net with transformer for medical image segmentation. IEEE Transactions on Emerging Topics in Computational Intelligence, 8(1):55–68, 2023. 8
[4] Jieneng Chen, Yongyi Lu, Qihang Yu, Xiangde Luo, Ehsan Adeli, Yan Wang, Le Lu, Alan L Yuille, and Yuyin Zhou. Transunet: Transformers make strong encoders for medical image segmentation. arXiv preprint arXiv:2102.04306, 2021. 8 [5] Jieneng Chen, Jieru Mei, Xianhang Li, Yongyi Lu, Qihang Yu, Qingyue Wei, Xiangde Luo, Yutong Xie, Ehsan Adeli, Yan Wang, et al. Transunet: Rethinking the u-net architecture design for medical image segmentation through the lens of transformers. Medical Image Analysi-
s, 97:103280, 2024. 2, 6 [6] Tianlong Chen, Xuxi Chen, Xianzhi Du, Abdullah Rashwan, Fan Yang, Huizhong Chen, Zhangyang Wang, and Yeqing Li. Adamv-moe: Adaptive multi-task vision mixture-ofexperts. In 2023 IEEE/CVF International Conference on Computer Vision (ICCV), pages 17300–17311, 2023. 2 [7] Qian Da, Xiaodi Huang, Zhongyu Li, Yanfei Zuo, Chenbin Zhang, Jingxin Liu, Wen Chen, Jiahui Li, Dou Xu, Zhiqiang Hu, Hongmei Yi, Yan Guo, Zhe Wang, Ling Chen, Li Zhang, Xianying He, Xiaofan Zhang, Ke Mei,-
 Chuang Zhu, Weizeng Lu, Linlin Shen, Jun Shi, Jun Li, Sreehari S, Ganapathy Krishnamurthi, Jiangcheng Yang, Tiancheng Lin, Qingyu Song, Xuechen Liu, Simon Graham, Raja Muhammad Saad Bashir, Canqian Yang, Shaofei Qin, Xinmei Tian, Baocai Yin, Jie Zhao, Dimitris N. Metaxas, Hongsheng Li, Chaofu Wang, and Shaoting Zhang. Digestpath: A benchmark dataset with challenge review for the pathological detection and segmentation of digestive-system. Medical Image Analysis, 80:102485, 2022. 6 [8] Damai Dai, -
Chengqi Deng, Chenggang Zhao, R. X. Xu, Huazuo Gao, Deli Chen, Jiashi Li, Wangding Zeng, Xingkai Yu, Y. Wu, Zhenda Xie, Y. K. Li, Panpan Huang, Fuli Luo, Chong Ruan, Zhifang Sui, and Wenfeng Liang. Deepseekmoe: Towards ultimate expert specialization in mixture-ofexperts language models, 2024. 2 [9] Alexey Dosovitskiy, Lucas Beyer, Alexander Kolesnikov, Dirk Weissenborn, Xiaohua Zhai, Thomas Unterthiner, Mostafa Dehghani, Matthias Minderer, Georg Heigold, Sylvain Gelly, Jakob Uszkoreit, and Neil Ho-
ulsby. An image is worth 16x16 words: Transformers for image recognition at scale, 2021. 4, 6 [10] Zhimeng Han, Muwei Jian, and Gai-Ge Wang. Convunext:
An efficient convolution neural network for medical image segmentation. Knowledge-based systems, 253:109512, 2022. 8 [11] Kaiming He, Xiangyu Zhang, Shaoqing Ren, and Jian Sun. Deep residual learning for image recognition, 2015. 7 [12] Kaiming He, Xiangyu Zhang, Shaoqing Ren, and Jian Sun. Deep residual learning for image recognition. In 2016 IEEE Conference on Computer Vision and Pattern Recognition (CVPR), pages 770–778, 2016. 2 [13] Jeremy Howard and Sebastian Ruder. Universal language model fi-
ne-tuning for text classification, 2018. 6 [14] Weiming Hu, Chen Li, Md Mamunur Rahaman, Haoyuan Chen, Wanli Liu, Yudong Yao, Hongzan Sun, Marcin Grzegorzek, and Xiaoyan Li. Ebhi: A new enteroscope biopsy histopathological h&e image dataset for image classification evaluation. Physica Medica, 107:102534, 2023. 6 [15] Salman Khan, Muzammal Naseer, Munawar Hayat, Syed Waqas Zamir, Fahad Shahbaz Khan, and Mubarak Shah. Transformers in vision: A survey. ACM computing surveys (CSUR), 54(10s):1–41, 2022-
. 2 [16] Xin Li, Wenhui Zhu, Xuanzhao Dong, Oana M Dumitrascu, and Yalin Wang. Evit-unet: U-net like efficient vision transformer for medical image segmentation on mobile and edge devices. In 2025 IEEE 22nd International Symposium on Biomedical Imaging (ISBI), pages 1–5. IEEE, 2025. 8
[17] Ailiang Lin, Bingzhi Chen, Jiayu Xu, Zheng Zhang, Guangming Lu, and David Zhang. Ds-transunet: Dual swin transformer u-net for medical image segmentation. IEEE Transactions on Instrumentation and Measurement, 71:115, 2022. 8 [18] Jiarun Liu, Hao Yang, Hong-Yu Zhou, Yan Xi, Lequan Yu, Cheng Li, Yong Liang, Guangming Shi, Yizhou Yu, Shaoting Zhang, et al. Swin-umamba: Mamba-based unet with imagenet-based pretraining. In International conference on medical image computing and computer-assisted i-
ntervention, pages 615–625. Springer, 2024. 2, 7 [19] Zhuang Liu, Hanzi Mao, Chao-Yuan Wu, Christoph Feichtenhofer, Trevor Darrell, and Saining Xie. A convnet for the 2020s. In 2022 IEEE/CVF Conference on Computer Vision and Pattern Recognition (CVPR), pages 11966–11976, 2022. 2, 4, 6, 7 [20] Ilya Loshchilov and Frank Hutter. Decoupled weight decay regularization, 2019. 6 [21] Jun Ma, Yuting He, Feifei Li, Lin Han, Chenyu You, and Bo Wang. Segment anything in medical images. Nature Communications,-
 15(1), 2024. 2
[22] Jun Ma, Feifei Li, and Bo Wang. U-mamba: Enhancing long-range dependency for biomedical image segmentation. arXiv preprint arXiv:2401.04722, 2024. 2, 7
[23] Oier Mees, Andreas Eitel, and Wolfram Burgard. Choosing smartly: Adaptive multimodal fusion for object detection in changing environments. In 2016 IEEE/RSJ International Conference on Intelligent Robots and Systems (IROS), pages 151–156, 2016. 2 [24] Huy Nguyen, Nhat Ho, and Alessandro Rinaldo. Sigmoid gating is more sample efficient than softmax gating in mixture of experts, 2024. 2, 3
9

[25] Thi-Ngoc-Truc Nguyen, Xuan-Hong Ong, Hoang-ThienNguyen, Van-Hung Bui, Hoang-Nguyen Vu, Thanh Minh Nguyen, Quan Nguyen, and Huu-Hung Nguyen. C2gmatch: Leveraging dual-view cross-guidance and co-guidance framework for semi-supervised cell segmentation. In 2025 IEEE 6th International Conference on Image Processing, Applications and Systems (IPAS), pages 1–6, 2025. 2
[26] Ozan Oktay, Jo Schlemper, Loic Le Folgoc, Matthew Lee, Mattias Heinrich, Kazunari Misawa, Kensaku Mori, Steven McDonagh, Nils Y Hammerla, Bernhard Kainz, et al. Attention u-net: Learning where to look for the pancreas. arXiv preprint arXiv:1804.03999, 2018. 8
[27] Olaf Ronneberger, Philipp Fischer, and Thomas Brox. U-net: Convolutional networks for biomedical image segmentation. In Medical Image Computing and Computer-Assisted Intervention – MICCAI 2015, pages 234–241. Springer, Cham, 2015. 2 [28] Olaf Ronneberger, Philipp Fischer, and Thomas Brox. U-net: Convolutional networks for biomedical image segmentation, 2015. 7 [29] Noam Shazeer, Azalia Mirhoseini, Krzysztof Maziarz, Andy Davis, Quoc Le, Geoffrey Hinton, and Jeff Dean. Outrageously large neura-
l networks: The sparsely-gated mixtureof-experts layer, 2017. 2, 3 [30] Korsuk Sirinukunwattana, Josien P. W. Pluim, Hao Chen, Xiaojuan Qi, Pheng-Ann Heng, Yun Bo Guo, Li Yang Wang, Bogdan J. Matuszewski, Elia Bruni, Urko Sanchez, Anton B ̈ohm, Olaf Ronneberger, Bassem Ben Cheikh, Daniel Racoceanu, Philipp Kainz, Michael Pfeiffer, Martin Urschler, David R. J. Snead, and Nasir M. Rajpoot. Gland segmentation in colon histology images: The glas challenge contest, 2016. 6 [31] Jiahao Sun, Kai Chen, Zh-
iwei He, et al. Medical image analysis using improved sam-med2d: segmentation and classification perspectives. BMC Medical Imaging, 24:241, 2024. 2
[32] Mingxing Tan and Quoc V. Le. Efficientnet: Rethinking model scaling for convolutional neural networks. ArXiv, abs/1905.11946, 2019. 2 [33] Mingxing Tan and Quoc V. Le. Efficientnet: Rethinking model scaling for convolutional neural networks, 2020. 7 [34] Rachel S. Y. Teo and Tan M. Nguyen. Molex: Mixture of layer experts for finetuning with sparse upcycling, 2025. 3 [35] Haonan Wang, Peng Cao, Jiaqi Wang, and Osmar R Zaiane. Uctransnet: rethinking the skip connections in u-net from a channel--
wise perspective with transformer. In Proceedings of the AAAI conference on artificial intelligence, pages 2441–2449, 2022. 8 [36] Xuening Wu, Yiqing Shen, Qing Zhao, Yanlan Kang, and Wenqiang Zhang. Moe-nuseg: Enhancing nuclei segmentation in histology images with a two-stage mixture of experts network. Alexandria Engineering Journal, 110:557566, 2025. 2, 7 [37] Enze Xie, Wenhai Wang, Zhiding Yu, Anima Anandkumar, Jose M Alvarez, and Ping Luo. Segformer: Simple and efficient design for semantic s-
egmentation with transformers. Advances in neural information processing systems, 34: 12077–12090, 2021. 2, 7
[38] Fanqi Yan, Huy Nguyen, Pedram Akbarian, Nhat Ho, and Alessandro Rinaldo. Sigmoid self-attention is better than softmax self-attention: A mixture-of-experts perspective. arXiv preprintarXiv: 2502.00281, 2025. 2, 3
[39] Yuqi Yang, Peng-Tao Jiang, Qibin Hou, Hao Zhang, Jinwei Chen, and Bo Li. Multi-task dense prediction via mixture of low-rank experts, 2024. 2 [40] Zongwei Zhou, Md Mahfuzur Rahman Siddiquee, Nima Tajbakhsh, and Jianming Liang. Unet++: A nested u-net architecture for medical image segmentation. In Deep Learning in Medical Image Analysis and Multimodal Learning for Clinical Decision Support, pages 3–11, Cham, 2018. Springer. Epub 2018 Sep 20. 2, 7 [41] Chuang Zhu, Ke Mei, Ting Peng, Yihao Luo, -
Jun Liu, Ying Wang, and Mulan Jin. Multi-level colonoscopy malignant tissue detection with adversarial cac-unet. Neurocomputing, 438:165–183, 2021. 8 [42] Wenhui Zhu, Xiwen Chen, Peijie Qiu, Mohammad Farazi, Aristeidis Sotiras, Abolfazl Razi, and Yalin Wang. Selfregunet: Self-regularized unet for medical image segmentation. In International Conference on Medical Image Computing and Computer-Assisted Intervention, pages 601–611. Springer, 2024. 8
10

Shape-Adapting Gated Experts: Dynamic Expert Routing for Colonoscopic
Lesion Segmentation
Supplementary Material
6. Semantic Affinity Routing (SAR) Analysis
A quantitative analysis of the Mixture-of-Experts (MoE) model’s expert utilization metrics across a heterogeneous instance space confirms an equitable distribution of routing decisions. The supporting evidence, derived from the activation visualization (heatmap) and the expert attention map, conclusively demonstrates that implementing Semantic Affinity Routing (SAR) yields a highly controlled, systematic allocation of input tokens. This mechanism is crucial for maintaining a consistent load balanc-
e across the expert network, thereby preventing the deleterious effects of expert collapse or routing instability.
As illustrated in Figure 5, the diverse color landscape confirms SAR’s promotion of non-uniform, specialized routing: no expert displays consistently high (or low) affinity across all layers, indicating that the router has learned genuine diversity rather than lazy convergence to a few dominant paths. Each expert exhibits regions of strong affinity (green/blue shades) in several layers, ensuring systematic utilization without any being systematically underutilized. For example, some experts show p-
eaks in mid-todeep Transformer layers but lower scores elsewhere, suggesting specialization in the composition of abstract features.
Figure 5. Normalized affinity score heatmap: This visualization illustrates the normalized affinity scores (gating probabilities per expert per layer), with a color scale ranging from red (low affinity) to dark green (high affinity). Each row corresponds to a layer in the model (CNN 1 − 4 followed by Transformer 1 − 16), and each column represents one of the 20 experts (E0 to E19).
The heatmap further emphasizes balanced load distribution, with no entirely red columns or rows. This equilibrium stems from SAR’s design, which encourages equitable engagement across the expert pool. Delving into group dynamics, ConvNeXt experts (E0 − E3) exhibit warmer tones in shallow layers, consistent with their bias toward local information, such as spatial proximity. Transformer experts (E5 − E19), conversely, transition to higher-affinity tones in deeper layers, where they leverage attenti-
on-like mechanisms for global fusion. With K = 4, this facilitates complementary selections: a layer might prioritize a local expert (for syntax or patterns) alongside global ones (for context), allowing the model to exploit all available information sources. Such diversity not only prevents information bottlenecks but also enhances generalization, as the router adapts to varying input complexities by drawing from the full spectrum of local and global knowledge. As shown in Figure 6, the absence o-
f any empty columns underscores a core strength of SAR: no expert is entirely unused across the architecture. Each expert is activated across multiple layers, reflecting high overall utilization. This contrasts with common MoE pitfalls in which routing converges on a subset of experts, leaving others dormant-SAR’s semantic matching and noise injection promote exploration, ensuring that every expert contributes meaningfully.
Figure 6. Top-K activation map: This binary heatmap shows routing choice information for K = 4 and over the layers of the model (rows correspond to CNN layers 1 − 4 and Transformer layers 1 − 16) and the 20 experts (columns correspond to E0 through E19). The activation of an expert within the top K at least for one token in the layer, upon processing the entire batch, is marked by blue cells; empty cells indicate no activation.
1

⋮
⋮
Expert Pool
⋮
CNN Expert
Transformer Expert
⋮
Layer 1
Layer 2
Layer C
Layer 1
Layer 2
Layer T
⋮
Expert Key Matrix Expert Key Matrix
CNN Query Vector Transformer Query Vector
Logit Vector Logit Vector
⋮
⋮
⋮
⋮
⋮
Expert Extractor
Dot Product
Convolutional Self-Affinity
Cross-Architectural Affinity
Transformer Self-Affinity
Convolutional Representation
Transformer Representation
Figure 7. Overview of Semantic Affinity Routing (SAR) Mechanism in SAGE: The query vectors of CNN and Transformer calculate routing logits separately by conducting dot-product similarity calculation with expert-specific key matrices, which are selected from a shared expert pool. The affinity structure has three parts: convolutional self-affinity, transformer-based self-affinity, and cross-architectural affinity, which allow the router to capture relevance within and among modalities. From these sc-
ores, SAR selects the semantically most similar experts and treats their representations as inputs to subsequent layer-adaptive processing.
The distribution avoids over-reliance on any single expert, promoting diversity. Notably, early CNN layers show sparser activations, focusing on foundational feature extraction, while deeper Transformer layers exhibit broader patterns. This progression suggests that SAR adapts to increasing abstraction: shallow layers route efficiently to a few specialists for basic processing, whereas deep layers draw from a broader pool to integrate complex, multi-faceted representations. Furthermore, the map re-
veals complementary patterns between expert groups. ConvNeXt-based experts (E0 − E3) are frequently activated in the early-tomid layers, where they handle fine-grained details such as edges and textures. In contrast, Transformer-based experts (E5 − E19) are more prominent in later layers, excelling at global dependencies such as long-range contextual relationships. This hybrid activation enables layers to combine local and global expertise, for instance, dynamically, a midlayer might select a loca-
l texture expert alongside a global semantics one, enriching the model’s ability to fuse lowlevel patterns with high-level understanding without redundancy.
Overall, these visualizations substantiate SAR’s key advantages: zero unused experts, minimal dominance, and a routing strategy that inherently fosters diversity. By avoiding reliance on a few experts and instead leveraging spe
cialists across layers, SAR maximizes the MoE’s potential, leading to more robust and efficient representations. This is particularly evident in real-world scenarios, where the router’s ability to blend local and global insights contributes to superior performance metrics, as detailed in the main paper.
7. Shared Gating Scalar Analysis
To gain mechanistic insight into the behavior of the hierarchical routing mechanism, we visualize the evolution of the shared gating scalar gs on the GlaS dataset during the second training stage (Figure 9). Recall the hierarchical routing mechanism from the main paper. First, a scalar gate gs ∈ (0, 1) is computed from the global context:
gs = σ z ̄i−1W(i)
gate + b(i)
gate . (14)
This value is then used to modulate the base expert logits Li to favor either shared or specialized experts:
L′
i = Li +mshared log(gs)+(1−mshared) log(1−gs). (15)
where mshared is a binary mask that identifies shared experts. A higher gs favors general-purpose shared experts, while a lower gs steers the router toward specialized non-shared experts.
2

Reshape Path
Input Shape Info
Output Shape Info
⋮
SA-Hub Processing Path
Sout
Expert 1
Sin
Expert Block
Main Block
SA-Hub
Sout
Sout
Expert K
Sin
Expert Block
Main Block
SA-Hub
Expert Block
Main Block
Expert 2
Sout
Sin
SA-Hub
Figure 8. The structure of the Shape-Adapting Hub (SA-Hub) over activated experts: The first step of the shape-adaptation process in the SA-Hub, for each expert activated, is to transform the shape of the input feature by Sin, based on what shape is required by each expert, and then reconstruct it by Sout so that its shape fits that of the main path feature. The shape of each feature, therefore, serves as metadata that directs this shape-adaptation process, irrespective of the diverse expert archi-
tectures activated. The outputs from all the activated experts are then combined to obtain another expert path representation.
Dynamic Load Balancing. As shown in Figure 9 (b), the mean gs value fluctuates around the 0.5 neutral line throughout the training process. This behavior indicates that the router dynamically switches between shared and non-shared experts rather than collapsing to a single mode. However, further visualization of the gs distribution from Figure 9 (a) reveals a slight overall preference toward shared experts. This suggests that the model finds general-purpose experts beneficial for most input sample-
s, while reserving specialized experts for complex cases.
Architectural Role Specialization. A distinct divergence in behavior is observed when examining gs by architecture type, as presented in Figure 9 (c).
• CNN Layers: The CNN encoder layers consistently maintain a high gs. This indicates a preference for shared experts. We hypothesize that early-stage convolutional features (e.g., edges, textures) are domain-invariant and thus benefit from the general representations provided by shared experts. • Transformer Layers: Conversely, the ViT layers tend to be neutral, remaining consistent with the overall mean gs. Although they exhibit lower values than the CNN layers, their proximity to the neutral lin-
e suggests a balanced routing strategy. Rather than committing exclusively to fine-grained experts, the Transformer layers flex
ibly leverage both shared and specialized pathways depending on the semantic complexity of the inputs.
This separation validates our hybrid design: SAGE automatically learns to leverage shared experts for low-level structural features (CNN) while reserving specialized experts for high-level semantic reasoning (Transformer).
8. Ablation Studies
We investigate the impact of gating strategies and expert capacity on the EBHI dataset, with quantitative results illustrated in Figure 10. Gating Mechanism. Our initial evaluation focused on comparing the performance of sigmoid versus softmax gating functions for the expert routing layer. The results clearly show that sigmoid consistently outperforms softmax across all seven tested configurations. In our final model (K = 4, S = 4), sigmoid achieves a 95.57% DSC, surpassing softmax (95.05%) by 0.5-
2%. We attribute this to the independence property of sigmoid gating. Unlike softmax, which forces expert probabilities to compete, sigmoid allows the router to activate multiple experts based solely on their individual contributions. This result aligns with recent findings [24, 38] on the superior training stability of sigmoid-based gating.
3

Figure 9. Shared Gating Scalar Analysis over Training: This figure illustrates the evolution of shared gating scalar gs, which evenly routes between shared experts with high gs and specialized experts with low gs values. (a) This histogram represents the scores of gs at the beginning and end of training, with violin plots showing values spreading with scores favoring above 0.5, which is the neutral region. (b) This line chart shows the average gs value with its standard deviation shaded over 60 e-
pochs, dynamically routing with small variation around the neutral value of 0.5, as denoted by the red line. (c) This chart shows the average gs value of CNN layers in comparison to Transformer layers, with gs in CNN layers far above 0.5, which indicates high support towards shared routing, and contrastingly, Transformer’s gs tracks closer to 0.5, which represents neutrality in routing.
Figure 10. Ablation of gating strategies and expert capacity. We compare sigmoid and softmax gating while varying Top-K (K) and the number of shared experts (S). Sigmoid gating consistently yields superior performance across all metrics (Accuracy, IoU, DSC). A positive performance correlation is also observed with increased capacity (higher K and S), with the largest gains arising from larger K values.
Expert Capacity (K and S). Second, we analyzed to determine how model performance scales with increasing expert capacity. We observe a clear positive correlation between K (the number of selected experts) and S (the number of shared experts) as both increase. The scaling effect can be deconstructed into two parts:
• Scaling K: The most significant performance leap comes from increasing K. With S = 1 and sigmoid gating, increasing K from 1 to 4 substantially raises the DSC from 89.70% to 95.10%. This substantial 5.4% gain underscores the critical importance of selecting from a larger pool of diverse, specialized experts. • Scaling S: Once a high degree of specialization is achieved (K = 4), increasing the number of shared experts S provides further increment. Holding K = 4 while enlarging S from 1 to 4 yield-
s an additional 0.47% DSC gain from 95.10% to 95.57%. This indicates that while K handles input diversity, S maintains a robust common knowledge base, preventing the feature from becoming too fragmented as specialization increases.
Consequently, the architecture defined by K = 4 and S = 4 , governed by sigmoid gating, was adopted as the reference model. This architecture achieves optimal performance by effectively balancing specialized reasoning paths with a shared representational core.
4

---

## Processing Information

- **Processing Library:** Zotero PDFWorker
- **Processing Date:** 2026-02-10T18:18:10.057Z
- **Text Length:** 58340 characters
- **Success:** Text extraction completed
- **PDF Library Used:** Zotero PDFWorker
- **Pages Processed:** 14 of 14
