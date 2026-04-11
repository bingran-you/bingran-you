# PDF Document: Zhang et al. - 2025 - Dual-Path Knowledge-Augmented Contrastive Alignment Network for Spatially Resolved Transcriptomics.pdf

**File Path:** Zhang et al. - 2025 - Dual-Path Knowledge-Augmented Contrastive Alignment Network for Spatially Resolved Transcriptomics.pdf

**Processed Date:** 2026-02-10T18:13:58.436Z

**File Size:** 14897.29 KB

**Total Pages:** 16

**Extracted Pages:** 16

**PDF Library:** Zotero PDFWorker

**Attachment Item ID:** 3627

**Title:** Dual-Path Knowledge-Augmented Contrastive Alignment Network for Spatially Resolved Transcriptomics

**Collection:** Large Files > Random Papers

---

## Extracted Text Content

Dual-Path Knowledge-Augmented Contrastive Alignment Network for Spatially Resolved Transcriptomics
Wei Zhang*, Jiajun Chu*, Xinci Liu, Chen Tong, Xinyue Li†
Department of Data Science, College of Computing, City University of Hong Kong, Hong Kong SAR, China xinyueli@cityu.edu.hk
Abstract
Spatial Transcriptomics (ST) is a technology that measures gene expression profiles within tissue sections while retaining spatial context. It reveals localized gene expression patterns and tissue heterogeneity, both of which are essential for understanding disease etiology. However, its high cost has driven efforts to predict spatial gene expression from whole slide images. Despite recent advancements, current methods still face significant limitations, such as under-exploitation of high-level bi-
ological context, over-reliance on exemplar retrievals, and inadequate alignment of heterogeneous modalities. To address these challenges, we propose DKAN, a novel Dual-path Knowledge-Augmented contrastive alignment Network that predicts spatially resolved gene expression by integrating histopathological images and gene expression profiles through a biologically informed approach. Specifically, we introduce an effective gene semantic representation module that leverages the external gene database -
to provide additional biological insights, thereby enhancing gene expression prediction. Further, we adopt a unified, onestage contrastive learning paradigm, seamlessly combining contrastive learning and supervised learning to eliminate reliance on exemplars, complemented with an adaptive weighting mechanism. Additionally, we propose a dual-path contrastive alignment module that employs gene semantic features as dynamic cross-modal coordinators to enable effective heterogeneous feature integration-
. Through extensive experiments across three public ST datasets, DKAN demonstrates superior performance over state-of-the-art models, establishing a new benchmark for spatial gene expression prediction and offering a powerful tool for advancing biological and clinical research.
Code — https://github.com/coffeeNtv/DKAN
Introduction
Spatial Transcriptomics (ST) is an advanced technology that measures gene expression profiles within tissue sections while preserving their spatial context, often by integrating data with Whole Slide Images (WSIs) (Sta ̊hl et al. 2016). This spatially resolved perspective is pivotal in revealing the
*These authors contributed equally. †Corresponding author. Copyright © 2026, Association for the Advancement of Artificial Intelligence (www.aaai.org). All rights reserved.
Reference Dataset
Target Patch
Model
Retrieved Patch
Previous Methods
Our Method
Figure 1: Pipeline comparison. Existing contrastive learning and exemplar-guided methods require constructing a reference dataset and retrieving similar patches as intermediate steps, whereas our one-stage contrastive learning method operates through a straightforward pipeline.
heterogeneity of gene expression across tissue microenvironments, offering critical insights into developmental processes, disease progression, and cell-cell interactions. Despite the transformative potential of ST techniques, they still face limitations, including relatively low resolution, typically at the multicellular level, and high technical costs, which hinder their broader adoption (Moses and Pachter 2022). In contrast, Hematoxylin and Eosin (H&E) stained WSIs, as the gold standard in path-
ology, offer a cost-effective and widely accessible alternative. Their widespread availability and low costs make them suitable for supporting numerous downstream tasks such as survival prediction (Zhang et al. 2024a, 2025b), stain transfer (Li et al. 2023; Zhang et al. 2024b) and especially spatial transcriptomics (Lin et al. 2024; Zhang et al. 2025a). The potential of WSIs to predict spatially resolved gene expression has been successfully demonstrated (He et al. 2020; Schmauch et al. 2020), uti-
lizing morphological and spatial details. More recently, several models have expanded on this foundation, further improving prediction accuracy through innovative approaches to leverage the rich tissue information in WSIs (Chung et al. 2024; Wang et al. 2024). Current approaches for spatial gene expression prediction predominantly exploit the rich spatial information embedded in WSIs, extracting image features at various levels, including local (Xie et al. 2023; Mejia et al. 2023), global (Pang, S-
u, and Li 2021; Zeng et al. 2022), and multiscale representations (Wang et al. 2024; Lin et al. 2024). Furthermore, several models incorporate multimodal contrastive learning to align imaging data with gene expression profiles within a shared low-dimensional embedding space
arXiv:2511.17685v1 [q-bio.QM] 21 Nov 2025

(Xie et al. 2023; Min et al. 2024). This alignment enables the models to effectively capture the intricate relationships between image-derived features and gene expression patterns. Despite recent advancements, several challenges persist. First, many models rely heavily on image features derived from pixel intensity (e.g., color distribution) and cellular structure (e.g., shape and texture) (He et al. 2020; Pang, Su, and Li 2021). While these low-level visual cues are informative, they often fail-
 to capture high-level semantic information, such as gene functions, biological pathways, or disease associations, limiting the depth of biological interpretation. Second, one notable challenge lies in the inclusion of additional and potentially redundant steps in models based on contrastive learning and exemplar-guided strategies. As shown in Figure 1, these pipelines typically involve constructing a reference dataset from all patches in the training set, retrieving similar patches, and feeding b-
oth the retrieved patches and the target patch into the model. While effective, this multi-step process introduces complexity that may not always be necessary (Xie et al. 2023; Min et al. 2024; Lin et al. 2024). Streamlining such workflows into a more cohesive approach, particularly in constrained settings or with limited datasets, remains challenging. Lastly, while existing methods leverage multi-scale image features (Zeng et al. 2022; Chung et al. 2024) or incorporate auxiliary modalities (Yang -
et al. 2024a) to address modality-specific semantics, their fusion strategies often fail to adequately preserve biologically relevant interactions. This limitation constrains performance, a gap further exacerbated by the absence of frameworks that explicitly incorporate gene functional semantics into multimodal alignment. To address these challenges, we propose DKAN, a novel Dual-path Knowledge-Augmented contrastive alignment Network for spatial gene expression prediction. Unlike previous methods,-
 DKAN integrates gene functional semantics into contrastive learning, enabling the biologically grounded fusion of histopathological images and expression profiles through a unified one-stage paradigm. Our major contributions are summarized as follows:
• We propose a novel paradigm for spatial gene expression prediction by incorporating gene functional semantics into contrastive learning, enabling the model to capture high-level biological context beyond low-level image features and align predictions with established genomic knowledge.
• We develop a unified one-stage contrastive learning framework that integrates supervised and contrastive objectives via adaptive weighting, simplifying the pipeline by removing exemplar dependence and eliminating separate storage or retrieval steps.
• We introduce a dual-path contrastive alignment module that processes image and gene expression features separately, avoiding forced direct alignment of heterogeneous modalities. Leveraging gene semantics enables precise multimodal integration into a shared embedding space, overcoming limitations of prior fusion strategies.
• We conduct extensive experiments on three public ST datasets, demonstrating DKAN consistently outperforms
State-Of-The-Art (SOTA) models across benchmarks.
Related Work
Spatial Gene Expression Prediction
Spatial gene expression prediction seeks to model gene activity from WSIs by capturing both visual and spatial features. Existing methods fall into three main categories: Local Methods. Local approaches focus on the target patch and its immediate surroundings (Yang et al. 2023, 2024b,a; Xie et al. 2023; Min et al. 2024). ST-Net (He et al. 2020) uses a pretrained DenseNet-121 (Huang et al. 2017) to extract patch-level features for prediction. EGN (Yang et al. 2023) enhances patch representations th-
rough image reconstruction and exemplar retrieval. EGGN (Yang et al. 2024b) extends EGN by applying graph convolutional networks to model relationships between the patch and its exemplars. SEPAL (Mejia et al. 2023) constructs a neighborhood graph and applies a graph neural network to capture local dependencies. These methods prioritize localized information and may not account for the broader spatial context. Global Methods. Global methods incorporate positional and contextual information across t-
he entire WSI (Jia et al. 2023; Yang et al. 2024a). HisToGene (Pang, Su, and Li 2021) uses vision transformers (Dosovitskiy et al. 2021) with positional encoding to model inter-patch relationships. HE2RNA (Schmauch et al. 2020) clusters patches into supertiles and aggregates them to form global contextual features. THItoGene (Jia et al. 2023) extracts deep molecular features using dynamic convolution and capsule modules, integrates them with positional data via ViT, and refines predictions using a-
 graph attention network. Unlike local methods, global models leverage the full image context for more informed predictions. Multi-Scale Methods. Multi-scale methods capture biological patterns at various resolutions (Zeng et al. 2022; Chung et al. 2024; Wang et al. 2024; Lin et al. 2024). TRIPLEX (Chung et al. 2024) combines features from multiple views. M2OST (Wang et al. 2024) decouples intra- and inter-scale feature extraction for many-to-one spatial prediction. ST-Align (Lin et al. 2024) clus-
ters patches into nichelevel groups to integrate both local and regional contexts. These methods aim to balance the fine granularity of local models with the broader context provided by global ones.
Contrastive Representation Learning
Contrastive learning is a self-supervised method that learns discriminative representations by pulling similar pairs together and pushing dissimilar pairs apart (Oord, Li, and Vinyals 2018). In spatial gene expression tasks, contrastive learning aligns visual and transcriptomic modalities in a shared embedding space (Xie et al. 2023; Min et al. 2024; Lin et al. 2024). BLEEP (Xie et al. 2023), inspired by CLIP (Radford et al. 2021), embeds images and gene profiles jointly to enable retrieval-based -
inference. mclSTExp (Min et al. 2024) refines this by encoding gene expression with learnable position embeddings for better spatial integration. ST-Align (Lin et al. 2024) advances contrastive

Image Feature
Contrastive Loss
Expression Prediction
Cross Attention
Q
KV Cross Attention
KV
Q
Inference Training
b. Gene Expression Embedding
Expression Encoder
Gene Expression Gene Expression Feature
c. Multi-level Image Embedding
WSI Encoder
Multi-level Fusion
Patch Encoder
Region Encoder
Patch
WSI
Region
Image
Feature
: dim. for WSI-level : dim. for region-level : dim. for patch-level : dim. for text : dim. for alignment
Expression Feature
d. Dual-Path Contrastive Alignment Semantic Feature
a. Gene Semantic Representation
RPS3 Given the gene
summary {summary},
please describe gene's
functionality and
associated phenotype. Summary Prompt
Gene
Knowledge
Text Embedding Transformer
Semantic
Embedding
Gene Type
Semantic Feature
Database LLM
Gene
Semantic
e. Visualization
: # genes : # patches : # patches in region
k
Figure 2: Overview of DKAN framework. (a) Gene semantic feature representation module. (b) Gene expression feature embedding module. (c) Multi-level image embedding module. (d) Dual-path contrastive alignment module. (e) Example spatial gene expression map for FN1 in the STNET dataset.
learning by curating 1.3 million image-gene pairs and introducing a multi-scale feature extractor with a three-target alignment strategy. This enhances the model’s ability to capture complex structural patterns in spatial transcriptomics.
Methodology
Problem Formulation
Spatial gene expression prediction is framed as a regression task. Given Np image patches extracted from a WSI, represented as X ∈ RNp×H×W ×3, where H and W are the height and width of each patch, the goal is to predict gene expression levels. A learnable mapping function f is applied to produce predictions Yˆ = f (X) ∈ RNp×Ng , where Ng denotes the number of target genes.
Overview
As illustrated in Figure 2, our framework integrates highlevel gene semantics by retrieving information from an external gene database (Sayers et al. 2024) and leveraging prompts to tap into the summarization capabilities and domain knowledge of large language models (LLMs). To extract informative visual features from WSIs, we adopt a multi-scale strategy that captures representations at the patch, region, and whole-slide levels. These features are then fused to form a comprehensive visual embeddi-
ng. To effectively align gene expression, image, and textual modalities, we introduce a dual-path knowledge-augmented contrastive alignment module, which employs two distinct contrastive pathways for robust multimodal integration.
Gene Semantic Representation
As shown in Figure 2(a), for Ng genes of interest, we de
signed a workflow to extract semantic features f text. We retrieved gene-related knowledge from a well-established gene database NCBI (Sayers et al. 2024). However, the retrieved gene knowledge lacks structural uniformity, with some information being redundant or incomplete. To address this issue, we leveraged the summarization capabilities and embedded knowledge of LLM (GPT-4o) to generate accurate and efficient gene semantic texts. Specifically, we embedded the gene knowledge into a prompt, whic-
h includes role definitions, task requirements, and output specifications, before feeding it into the LLM to produce the gene semantic text. The prompt is provided in the supplementary materials. Subsequently, we employed BioBERT (Lee et al. 2019) as our text embedding model to extract textual features, generating semantic embeddings of dimensionality dt = 1024. This model, pre-trained on the extensive biomedical semantic corpus, excels at capturing domain-specific contextual representations effec-
tively. The semantic features are processed by a standard transformer module, preceded by a linear projection to ensure dimensional alignment for multimodal fusion. The transformer module efficiently captures global dependencies and commonalities among semantic embeddings, ultimately yielding the final semantic features f text.
Gene Expression Embedding
As illustrated in Figure 2(b), the gene expression with shape Np × Ng is processed by the gene expression encoder to generate gene expression features f exp ∈ RNp×d, ensuring feature dimension consistency between gene semantic

and image features. Specifically, the expression encoder first projects the input to a d-dimensional space via a linear layer, applies GELU activation, and then processes features through a second linear layer with dropout. To stabilize gradient flow, we employ residual connections: the initial linear projection’s output is directly added to the final dropout output, followed by layer normalization for feature standardization. This design mitigates gradient vanishing while maintaining feature dis-
criminability.
Multi-level Image Embedding
Given the large size of WSIs, relying solely on either WSIlevel images (Iwsi) or patch-level images (Ipatch) is insufficient to fully capture their morphological complexity. While WSIs offer rich global context, a significant gap remains between the global view and the localized detail at the patch level. To bridge this gap, as illustrated in Figure 2(c), we introduce a region-level representation (Iregion) by selecting the k nearest neighboring patches around each target patch. Our model extracts-
 image patches from the WSI at these three hierarchical levels and processes them using dedicated encoders. Specifically, for the WSI-level features f wsi and the region-level features f region, we utilize UNI (Chen et al. 2024), a general-purpose foundation model pre-trained on extensive WSI datasets for computational pathology. Due to the scale constraints and computational demands of WSIs and region-level images, UNI serves as a fixed feature extractor without updating its weights during traini-
ng. To enhance feature adaptability, we append a multi-head transformer after each UNI encoder. For the patch-level feature f patch, we employ ResNet18 (Ciga, Xu, and Martel 2022) as the encoder. To adapt it to feature extraction, we remove the final pooling and fully connected layers, retaining only the activations of the last hidden layer as the output. Notably, the parameters of ResNet18 remain trainable. To effectively integrate multi-scale features, we employ two cross-attention mechanisms: o-
ne fuses the WSI and the region-level images, while the other combines the WSI and the patch-level images, with WSI-level features serving as the query in both cases. The resulting fused features from these two groups are then summed to produce the final multi-scale feature of the image f img.
Dual-Path Contrastive Alignment
After extracting the image, semantic, and expression features, we propose a novel dual-path knowledge-augmented contrastive alignment paradigm for multimodal alignment as shown in Figure 2(d). Our approach leverages gene semantic features as dynamic cross-modal coordinators, operating through two parallel pathways. In the image pathway, gene semantic knowledge serves as a “functional query instruction” to filter morphology-related regions from image features. Similarly, in the expression pathway, -
gene semantic knowledge acts as a “distribution correction factor” to constrain the predicted gene expression features, ensuring alignment with the established biological pathway logic. In the implementation, we employ a cross-attention module, using the semantic feature as the query. Each semantic feature independently queries the image and expression features, ul
timately generating gene knowledge-augmented representations, denoted as eti and ete respectively. Inspired by CLIP (Radford et al. 2021), we apply contrastive learning to align eti and ete in the latent embedding space. One distinctive aspect of this method is that, instead of forcing the alignment of the heterogeneous image and gene expression modalities directly, each modality interacts independently with the gene semantic knowledge, achieving implicit alignment through knowledge-guided queries-
. The decoupling of the image and gene expression modules enhances flexibility and reduces inter-modal dependencies. To eliminate the dependency on exemplars and streamline the workflow, we adopt a unified one-stage framework for contrastive learning and seamlessly integrate it with supervised training. In the training phase, all modalities are utilized, whereas during inference, only the image and semantic modalities are used. Consequently, the loss function combines a contrastive loss and a supe-
rvised loss. The contrastive loss is indicated in Equation 1, where positive samples are representations of the same gene paired together, and negative samples are drawn from representations of different genes. Here sim(·, ·) denotes the cosine similarity function that measures the alignment between feature vectors, and τ is a temperature parameter that controls the sharpness of the similarity distribution.
Lcont = −
X
i
log exp(sim(ei
ti, eite)/τ )
P
j exp(sim(ei
ti, ej
te)/τ ) . (1)
For the supervised loss, we calculate the mean squared error (MSE) between the predicted gene expression Yˆ and the ground truth gene expression Y . This can be further enhanced by knowledge distillation (Chung et al. 2024), which improves prediction consistency and generalization by aligning intermediate representations with the final output. These intermediate predictions, Yˆimg, Yˆpatch, Yˆwsi, and Yˆregion, are obtained through linear transformations of the model features f img, f patch, f wsi-
, and f region. To enforce both accuracy and coherence, we compute the MSE between these intermediate predictions and two targets: the ground truth Y and the final predicted output Yˆ , with their contributions balanced by a hyperparameter λ. The distillation-aware supervised loss for each intermediate prediction d ∈ D is defined in Equation 2:
Ld = λ∥Yˆd − Yˆ ∥2 + (1 − λ)∥Yˆd − Y ∥2, (2)
where D = {img, patch, wsi, region}. The total supervised loss is then aggregated across all intermediate predictions, combined with the MSE between the ground truth Y and the final predicted output Yˆ :
Lsup =
X
d∈D
Ld + ∥Yˆ − Y ∥2. (3)
To ensure balanced optimization between the supervised loss (Lsup) and the contrastive loss (Lcont) which exhibit different numerical scales and convergence characteristics, we propose an adaptive weighting scheme. The weights are

Comparison Settings Error PCC
Type Model MAE↓ MSE↓ ALL↑ HPG↑ HEG↑ HVG↑
HER2+ Dataset
Local
ST-Net 0.432 ± 0.05 0.311 ± 0.07 0.150 ± 0.13 0.287 ± 0.19 0.115 ± 0.11 0.090 ± 0.08 BLEEP 0.401 ± 0.03 0.277 ± 0.05 0.151 ± 0.11 0.277 ± 0.16 0.246 ± 0.09 0.261 ± 0.07 EGN 0.366 ± 0.04 0.229 ± 0.05 0.204 ± 0.12 0.364 ± 0.16 0.152 ± 0.09 0.120 ± 0.05 mclSTExp 0.398 ± 0.04 0.272 ± 0.05 0.163 ± 0.11 0.289 ± 0.16 0.114 ± 0.08 0.091 ± 0.06
Global
HisToGene 0.388 ± 0.06 0.253 ± 0.07 0.150 ± 0.09 0.295 ± 0.15 0.099 ± 0.07 0.079 ± 0.05 THItoGene 0.424 ± 0.05 0.291 ± 0.06 0.051 ± 0.05 0.118 ± 0.08 0.045 ± 0.05 0.030 ± 0.03 SGN 0.734 ± 0.20 0.749 ± 0.38 0.035 ± 0.03 0.065 ± 0.05 0.022 ± 0.03 0.017 ± 0.03
Multi-view
Hist2ST 0.417 ± 0.07 0.293 ± 0.08 0.193 ± 0.10 0.360 ± 0.17 0.126 ± 0.07 0.109 ± 0.03 TRIPLEX 0.364 ± 0.05 0.234 ± 0.06 0.304 ± 0.14 0.491 ± 0.18 0.271 ± 0.10 0.260 ± 0.06 M2OST 0.446 ± 0.10 0.340 ± 0.15 0.147 ± 0.12 0.313 ± 0.19 0.098 ± 0.09 0.090 ± 0.06 DKAN(Ours) 0.361 ± 0.04 0.224 ± 0.06 0.330 ± 0.13 0.531 ± 0.15 0.317 ± 0.09 0.304 ± 0.07
STNET Dataset
Local
ST-Net 0.357 ± 0.04 0.222 ± 0.05 0.081 ± 0.05 0.192 ± 0.09 0.026 ± 0.05 0.096 ± 0.04 BLEEP 0.369 ± 0.02 0.235 ± 0.02 0.095 ± 0.05 0.193 ± 0.10 0.063 ± 0.03 0.111 ± 0.05 EGN 0.354 ± 0.02 0.214 ± 0.03 0.107 ± 0.05 0.207 ± 0.09 0.089 ± 0.04 0.108 ± 0.04 mclSTExp 0.350 ± 0.02 0.210 ± 0.02 0.095 ± 0.05 0.202 ± 0.09 0.052 ± 0.04 0.088 ± 0.03
Global
HisToGene 0.326 ± 0.02 0.180 ± 0.02 0.103 ± 0.04 0.217 ± 0.11 0.060 ± 0.02 0.074 ± 0.03 THItoGene 0.347 ± 0.03 0.200 ± 0.04 0.040 ± 0.02 0.092 ± 0.02 0.025 ± 0.02 0.028 ± 0.02 SGN 1.180 ± 1.78 4.952 ± 12.00 0.027 ± 0.01 0.048 ± 0.02 0.014 ± 0.01 0.027 ± 0.01
Multi-view
Hist2ST 0.352 ± 0.02 0.208 ± 0.03 0.142 ± 0.04 0.268 ± 0.09 0.094 ± 0.03 0.122 ± 0.03 TRIPLEX 0.342 ± 0.02 0.200 ± 0.02 0.194 ± 0.07 0.344 ± 0.10 0.160 ± 0.06 0.224 ± 0.07 M2OST 0.369 ± 0.04 0.226 ± 0.04 0.022 ± 0.02 0.081 ± 0.04 0.008 ± 0.03 −0.001 ± 0.03 DKAN(Ours) 0.322 ± 0.02 0.179 ± 0.02 0.219 ± 0.07 0.387 ± 0.09 0.200 ± 0.06 0.244 ± 0.07
cSCC Dataset
Local
ST-Net 0.410 ± 0.05 0.262 ± 0.07 0.170 ± 0.08 0.289 ± 0.09 0.079 ± 0.05 0.065 ± 0.02 BLEEP 0.430 ± 0.04 0.297 ± 0.05 0.269 ± 0.07 0.396 ± 0.08 0.266 ± 0.09 0.250 ± 0.10 EGN 0.438 ± 0.05 0.303 ± 0.06 0.278 ± 0.06 0.388 ± 0.06 0.194 ± 0.06 0.180 ± 0.06 mclSTExp 0.445 ± 0.05 0.311 ± 0.06 0.168 ± 0.04 0.291 ± 0.08 0.098 ± 0.03 0.096 ± 0.05
Global
HisToGene 0.441 ± 0.06 0.297 ± 0.07 0.178 ± 0.10 0.319 ± 0.14 0.099 ± 0.05 0.094 ± 0.04 THItoGene 0.495 ± 0.11 0.380 ± 0.16 0.040 ± 0.05 0.101 ± 0.06 0.014 ± 0.03 0.020 ± 0.03 SGN 0.832 ± 0.13 0.897 ± 0.27 0.059 ± 0.02 0.086 ± 0.03 0.048 ± 0.02 0.044 ± 0.01
Multi-view
Hist2ST 0.468 ± 0.11 0.338 ± 0.16 0.185 ± 0.14 0.261 ± 0.15 0.133 ± 0.09 0.110 ± 0.07 TRIPLEX 0.415 ± 0.06 0.278 ± 0.08 0.363 ± 0.07 0.476 ± 0.07 0.276 ± 0.07 0.272 ± 0.06 M2OST 0.443 ± 0.07 0.313 ± 0.09 −0.018 ± 0.04 0.126 ± 0.09 0.012 ± 0.07 −0.041 ± 0.04 DKAN(Ours) 0.383 ± 0.05 0.239 ± 0.06 0.407 ± 0.08 0.508 ± 0.08 0.346 ± 0.09 0.321 ± 0.08
Table 1: Comparison with SOTA methods. The best results are highlighted in bold.
dynamically adjusted based on the real-time loss values to maintain appropriate gradient contributions from each objective. Specifically, the weighting coefficients are computed as the normalized reciprocals of the respective losses, to ensure that the loss with a smaller value could receive a higher weight, allowing the model to dynamically prioritize the more reliable objective during training. The final composite loss function is thus formulated as:
L = wsupLsup + wcontLcont. (4)
Experiments Datasets
We evaluated our approach on three public ST datasets: two human breast cancer (BC) datasets and one cutaneous squamous cell carcinoma (cSCC) dataset. The HER2+ BC dataset (Andersson et al. 2021) includes 36 samples from 8 patients, with 13,620 spots and 14,873 genes profiled per
spot. The STNET BC dataset (He et al. 2020) contains 68 WSIs from 23 patients, comprising 30,612 spots and 26,949 genes per spot. The cSCC dataset (Ji et al. 2020) consists of 12 samples from 4 patients, with 8,671 spots and 17,047 genes measured per spot.
Evaluation and Metrics
To ensure robust evaluation, we applied cross-validation strategies tailored to each dataset, ensuring no patient overlap between training and test sets. For STNET, we used 8-fold cross-validation. For the smaller HER2+ and cSCC datasets, we adopted leave-one-patient-out cross-validation, with 8 folds for HER2+ and 4 folds for cSCC, where each fold used one patient’s samples for testing and the rest for training. This setup aligns with prior work (Chung et al. 2024) to ensure fair comparison. We e-
valuated our model using six metrics to ensure comprehensive assessment and comparability with prior stud

Error PCC
Text Emb. MAE↓ MSE↓ ALL↑ HPG↑ HEG↑ HVG↑
Conch 0.324 0.181 0.211 0.374 0.194 0.230 PLIP 0.323 0.179 0.217 0.381 0.194 0.244 BioGPT 0.327 0.183 0.217 0.385 0.193 0.239 BioBERT 0.322 0.179 0.219 0.387 0.200 0.244
Image Emb. MAE↓ MSE↓ ALL↑ HPG↑ HEG↑ HVG↑
ResNet18 0.341 0.197 0.202 0.347 0.176 0.224 ResNet50 0.354 0.212 0.196 0.349 0.167 0.215 PLIP 0.333 0.188 0.190 0.333 0.157 0.211 Conch 0.324 0.177 0.209 0.369 0.179 0.231 UNI 0.322 0.179 0.219 0.387 0.200 0.244
Table 2: Ablation studies on text and image encoders.
ies (Yang et al. 2023; Xie et al. 2023; Chung et al. 2024). These include Mean Absolute Error (MAE), Mean Squared Error (MSE), and Pearson Correlation Coefficient (PCC) across: (1) all genes of interest, (2) the top 50 Highly Predictive Genes (HPG), (3) the top 50 Highly Expressed Genes (HEG), and (4) the top 50 Highly Variable Genes (HVG). PCC was computed per gene across all spots within each sample and averaged over all cross-validation folds.
Implementations
To align with previous studies (He et al. 2020; Chung et al. 2024), all patches were segmented with dimensions of H=W =224 pixels, and regions were constructed using k=25 (a 5×5 patch grid). We select Ng=250 spatially variable genes for training to align with previous studies. We use the Adam optimizer with a learning rate of 0.0001 and a StepLR scheduler (step size=50, gamma=0.9). The temperature τ in the contrastive loss was set to 0.1 for HER2+ and STNET and 0.08 for cSCC. Image encoders includ-
ed UNI for WSI and region levels (dh=dr=1024) and ResNet18 for patch level (dp=512), while the text embedding model, BioBERT, produced embeddings with dt=1024. All models were trained on a NVIDIA RTX A800 GPU with a batch size of 128.
Experimental Results and Analysis
We compared our proposed model, DKAN, against extensive SOTA baselines across three categories: (1) Local methods: ST-Net (He et al. 2020), BLEEP (Xie et al. 2023), EGN (Yang et al. 2023), and mclSTExp (Min et al. 2024); (2) Global methods: HisToGene (Pang, Su, and Li 2021), THItogene (Jia et al. 2023), and SGN (Yang et al. 2024a); and (3) Multi-scale methods: Hist2ST (Zeng et al. 2022), TRIPLEX (Chung et al. 2024), and M2OST (Wang et al. 2024). As shown in Table 1, DKAN consistently outperforms a-
ll baselines across datasets and evaluation metrics. Take the HER2+ dataset as an example, DKAN achieves the lowest MAE (0.361) and MSE (0.224), along with the highest PCC values for all genes (0.330), HPG (0.531), HEG (0.317), and HVG (0.304). In comparison, the current SOTA method TRIPLEX reports 0.364 (MAE), 0.234 (MSE), and PCCs of 0.304 (all genes), 0.491 (HPG), 0.271 (HEG), and
(0.533) (0.379) (0.487) (0.357) (0.311)
STNET Dataset (FN1)
(0.293)
(0.057) (0.440) (0.294) (0.426)
cSCC Dataset (HSPB1)
(0.159) (0.249) (0.458) (0.497) (-0.460) (0.539)
ST-Net BLEEP EGN
Ground Truth mclSTExp HisToGene
HER2+ Dataset (FN1)
SGN Hist2ST TRIPLEX
THItoGene M2OST DKAN
(0.460) (0.521) (0.619) (0.433) (0.464)
(0.437) (0.329) (0.599)
(-0.335) (0.543) (0.712)
(0.407) (0.080) (0.748)
(0.204) (-0.175) (0.852)
ST-Net BLEEP EGN
Ground Truth mclSTExp HisToGene
SGN Hist2ST TRIPLEX
THItoGene M2OST DKAN
BLEEP
ST-Net EGN
Ground Truth mclSTExp HisToGene
SGN Hist2ST TRIPLEX
THItoGene M2OST DKAN
Figure 3: Visualization of expression patterns of cancer biomarker genes alongside PCC values for all datasets.
0.260 (HVG). These results demonstrate DKAN’s superior performance over TRIPLEX and other baselines. Notably, DKAN also consistently outperforms all methods on the cSCC and STNET datasets, highlighting its effectiveness and robust generalization across diverse ST datasets.
Visualization of Cancer Biomarker Genes
To evaluate the model’s ability to capture spatial gene expression patterns both quantitatively and qualitatively, we visualize the log-normalized expression levels of two wellestablished cancer biomarkers in Figure 3. Specifically, FN1, frequently overexpressed in breast cancer (Zhang, Luo, and Wu 2022), and HSPB1, implicated in cancer progression (Liang et al. 2023), are highlighted. We also report their PCCs with the ground truth to assess spatial consistency and predictive accuracy. Additional-
 visualizations are available in the supplementary materials.
Ablation Studies
To validate the effectiveness of our model design, we conducted ablation studies on several key components: the choice of text and image encoders, textual representations with different prompt strategies and LLMs, the contributions of individual modules, and the selection of fusion strategies and loss functions. For clarity, we present mean results on the STNET dataset in the main text. Consistent trends were also observed on the HER2+ and cSCC datasets, with detailed results provided in the suppl-
ementary materials.
(1) Text and Image Encoders. For the text encoder, we evaluated four embedding models: Conch (Lu et al. 2024)

Error PCC
Prompt Strategy MAE↓ MSE↓ ALL↑ HPG↑ HEG↑ HVG↑
w/o text constraint 0.340 0.198 0.206 0.351 0.177 0.227 w/o text summary 0.342 0.199 0.199 0.341 0.177 0.220 Ours 0.322 0.179 0.219 0.387 0.200 0.244
LLM Candidate MAE↓ MSE↓ ALL↑ HPG↑ HEG↑ HVG↑
Deepseek-R1 0.343 0.199 0.198 0.345 0.174 0.226 Deepseek-v3 0.337 0.193 0.202 0.342 0.187 0.221 LLaMA 2 0.339 0.194 0.193 0.337 0.165 0.218 GPT-4o 0.322 0.179 0.219 0.387 0.200 0.244
Table 3: Ablation studies on prompt strategies and LLMs.
and PLIP (Huang et al. 2023), which are medical visionlanguage models, as well as BioBERT (Lee et al. 2019) and BioGPT (Luo et al. 2022), which are pretrained on large-scale biomedical corpora such as PubMed. For image encoders at both the region and WSI levels, we compared PLIP (Huang et al. 2023), Conch (Lu et al. 2024), UNI (Chen et al. 2024), ResNet50(He et al. 2016), and ResNet18(Ciga, Xu, and Martel 2022). As shown in Table 2, the performance of different text encoders was generally comparab-
le, with BioBERT consistently achieving the best results. Among image encoders, UNI, a vision foundation model pretrained on histopathological images, achieved the highest overall performance, showing a notable improvement over other models.
(2) Gene Semantic Representation. To evaluate textual representations of genes, we compared model performance using three prompt strategies: (a) gene summaries without constraints on function or phenotype, (b) gene symbols without summaries, and (c) gene summaries enriched with specific constraints on function and phenotype. We also evaluated four widely used LLMs: DeepSeek-R1 (DeepSeek-AI 2025), DeepSeek-v3 (Liu et al. 2024), LLaMA2 (7B-chathf) (Touvron et al. 2023), and GPT-4o (OpenAI 2024). As -
shown in Table 3, our proposed prompt strategy (c) achieved the best performance, as it effectively captures more informative and concise gene semantics. Among the LLMs, GPT4o consistently outperformed the others. (3) Individual Modules. We evaluated the contributions of key components in our model, including multi-scale spatial context, gene semantic features, contrastive learning, and the use of text features as Key and Value (referred to as text as KV) in dual-path contrastive learning. As show-
n in Table 4, removing multi-scale spatial context, gene semantics, or contrastive learning led to a decline in performance in terms of PCC. Interestingly, removing contrastive learning resulted in a slight improvement in MAE, but our configuration achieved the best overall performance across all metrics. Additionally, using text features as Query rather than as Key/Value proved more effective for multimodal integration. These findings highlight the effectiveness of our architectural design and th-
e importance of each module.
(4) Fusion Strategy and Loss Design. We investigated the impact of different fusion strategies and loss function designs, as shown in Table 5. Specifically, we evaluated the
Error PCC
Module MAE↓ MSE↓ ALL↑ HPG↑ HEG↑ HVG↑
w/o multi-scale 0.350 0.210 0.117 0.210 0.101 0.112 w/o text 0.343 0.201 0.210 0.372 0.177 0.233 w/o contrast. 0.320 0.179 0.209 0.380 0.187 0.231 Text as KV 0.333 0.186 0.216 0.379 0.182 0.242 Ours 0.322 0.179 0.219 0.387 0.200 0.244
Table 4: Ablation studies on individual modules.
Error PCC
Fusion Strategy MAE↓ MSE↓ ALL↑ HPG↑ HEG↑ HVG↑
Concat. 0.336 0.189 0.154 0.292 0.048 0.178 Concat.+Trans. 0.331 0.191 0.214 0.380 0.189 0.236 Sum. 0.326 0.179 0.151 0.282 0.053 0.171 Sum.+Trans. 0.329 0.188 0.221 0.383 0.198 0.247 Cross Atten. 0.322 0.179 0.219 0.387 0.200 0.244
Loss Design MAE↓ MSE↓ ALL↑ HPG↑ HEG↑ HVG↑
Fixed weights 0.338 0.191 0.148 0.276 0.053 0.168 w/o distillation 0.336 0.195 0.217 0.382 0.202 0.251 Ours 0.322 0.179 0.219 0.387 0.200 0.244
Table 5: Ablation studies on fusion methods and weights.
cross-attention mechanism used in our contrastive alignment module against four alternatives: addition (Sum.), concatenation (Concat.), concatenation followed by a transformer layer (Concat. + Trans.), and addition followed by a transformer layer (Sum. + Trans.). For the loss functions, we ablated two key components, our dynamic weight balancing strategy and the knowledge distillation loss, to assess their contributions. The results show a consistent performance drop across metrics, particularly i-
n MAE and MSE, when alternative fusion strategies or simplified loss designs are used. In contrast, our full model design achieves the best overall performance in PCC, while also maintaining the lowest MAE and MSE, demonstrating the effectiveness of both our fusion strategy and our loss function design.
Conclusion
In this study, we propose DKAN, a dual-path knowledgeaugmented contrastive alignment framework that integrates high-level biological gene knowledge into multimodal feature alignment for spatial gene expression prediction. Comprehensive experiments demonstrate the superior performance of DKAN compared to existing state-of-the-art methods, highlighting the effectiveness of structured biological priors in enhancing cross-modal representation learning. This approach offers a practical pathway for link-
ing histological morphology with spatial gene expression, supporting future discoveries in tissue microenvironments and biomarker identification.

Supplementary Materials
In the supplementary materials, we first present the structured prompt design used by the Large Language Model (LLM) in the gene semantic representation module. This is followed by comprehensive ablation studies on the HER2+ and cSCC datasets to assess the contributions of different components within DKAN. We also include additional ablation results on the STNET dataset, a computational comparison with baseline models, extended visualizations of cancer marker gene expression, and details on the pr-
eprocessing and evaluation protocols for gene data.
LLM Prompt
In the gene semantic representation module, we leverage the summarization capabilities and embedded biomedical knowledge of the LLM (GPT-4o) to preserve both structural consistency and informational integrity in gene-level representations. As illustrated in Figure S1, we designed a structured prompt tailored for breast cancer datasets, which explicitly defines the context and task requirements through three key components: role definitions, task descriptions, and output specifications. The prompt -
further clarifies that the provided genes are associated with human breast cancer. Gene summaries retrieved from an external database are subsequently incorporated as input to the model.
Additional Ablation Studies
In this section, we present additional ablation study results on the HER2+ and cSCC datasets, shown in Table S1 and Table S2, respectively. Specifically, we evaluate the effectiveness of various components, including the text encoder, image encoder, LLM prompt strategies, different LLMs, individual models, fusion strategies, and loss function designs. The evaluation is conducted using six metrics: Mean Absolute Error (MAE), Mean Squared Error (MSE), Pearson Correlation Coefficient (PCC) across all-
 genes, as well as PCC for highly predictive genes, highly expressed genes, and highly variable genes, to comprehensively assess and validate our model design. Details of these metrics are provided in Section . Additionally, we report the complete ablation results, including standard deviations, on the STNET dataset in Table S3, to supplement the findings presented in the main text. Collectively, these results provide strong empirical evidence supporting the design rationale of DKAN’s architecture-
.
Computational Comparison
To assess the computational complexity of our proposed method relative to existing State-Of-The-Art (SOTA) models, we report the number of FLOPs, model parameters, training time, and inference time in Table S4 on cSCC dataset. All experiments were conducted on an NVIDIA A800 GPU to ensure fair and consistent comparisons. Inference time was measured as the average per spot across all cross-validation folds. The results demonstrate that the integration of gene semantic representation and dual-path
1.Role Definition
You are an expert in genomics and gene studies, specializing in human breast cancer-related genes.
2.Task Requirements
Your task is to describe the functionality and phenotype of the provided gene based on the input gene information and available references. The gene is associated with breast cancer in humans. If the reference lacks sufficient details, complement the missing information using your knowledge.
3.Output Specifications
- Format: JSON with 3 keys: "gene symbol", "functionality", and "phenotype". - Value type: String, concise, using keywords only. - Total word count of all values: Less than 120 words. - Restrictions: No adjectives in output values.
4.Input
- Gene symbol: {gene_name} - Gene summary: {gene_ summary}
Figure S1: Prompt template for breast cancer datasets.
contrastive learning introduces minimal computational overhead. Moreover, DKAN exhibits strong computational efficiency, particularly in terms of training and inference time, when compared to baseline methods.
Additional Visualization Results
In this section, we present additional visualizations of cancer marker gene expression across the three datasets, along with the corresponding PCC values in comparison to SOTA baselines. We select genes that exhibit strong correlations with specific cancer types in their respective datasets. Specifically, ERBB2, GNAS, and HSP90AB1 are selected for the HER2+ and STNET datasets (Figures S2 and S3), while SPARC, TRIM29, and FTL are chosen for the cSCC dataset (Figure S4). These visualizations further-
 illustrate the effectiveness of our model in capturing both the absolute expression levels and expression trends of key marker genes, underscoring DKAN’s superior performance in gene expression prediction.
Preprocessing and Evaluation Protocols
Gene Expression Data Preprocessing
To address the inherent sparsity in spatial transcriptomics data, we first filtered out genes with low variability, following the criteria established in a previous study (He et al. 2020). Each spot’s gene expression values were then normalized by dividing by the total expression sum, followed by a logarithmic transformation to stabilize variance. To further mitigate experimental noise, we applied a smoothing technique (He et al. 2020), which averages each spot’s gene expression profile with those-
 of its neighboring spots.

Error PCC
Text Emb. MAE↓ MSE↓ ALL↑ HPG↑ HEG↑ HVG↑
Conch 0.363 ± 0.04 0.227 ± 0.06 0.333 ± 0.13 0.528 ± 0.15 0.312 ± 0.09 0.305 ± 0.06 PLIP 0.372 ± 0.05 0.236 ± 0.07 0.324 ± 0.14 0.525 ± 0.16 0.310 ± 0.10 0.299 ± 0.08 BioGPT 0.377 ± 0.07 0.243 ± 0.09 0.329 ± 0.14 0.522 ± 0.15 0.313 ± 0.10 0.302 ± 0.07 BioBERT 0.361 ± 0.04 0.224 ± 0.06 0.330 ± 0.13 0.531 ± 0.15 0.317 ± 0.09 0.304 ± 0.07
Image Emb. MAE↓ MSE↓ ALL↑ HPG↑ HEG↑ HVG↑
ResNet18 0.368 ± 0.04 0.233 ± 0.05 0.312 ± 0.14 0.500 ± 0.17 0.280 ± 0.10 0.272 ± 0.07 ResNet50 0.377 ± 0.05 0.244 ± 0.07 0.303 ± 0.13 0.489 ± 0.14 0.283 ± 0.09 0.269 ± 0.05 PLIP 0.398 ± 0.06 0.266 ± 0.07 0.298 ± 0.14 0.483 ± 0.17 0.267 ± 0.10 0.249 ± 0.07 Conch 0.360 ± 0.05 0.222 ± 0.06 0.326 ± 0.13 0.519 ± 0.15 0.301 ± 0.10 0.294 ± 0.06 UNI 0.361 ± 0.04 0.224 ± 0.06 0.330 ± 0.13 0.531 ± 0.15 0.317 ± 0.09 0.304 ± 0.07
Prompt Strategy MAE↓ MSE↓ ALL↑ HPG↑ HEG↑ HVG↑
w/o text constraint 0.367 ± 0.05 0.231 ± 0.05 0.310 ± 0.14 0.492 ± 0.17 0.277 ± 0.09 0.256 ± 0.06 w/o text summary 0.368 ± 0.04 0.232 ± 0.05 0.308 ± 0.14 0.488 ± 0.17 0.273 ± 0.10 0.259 ± 0.06 Ours 0.361 ± 0.04 0.224 ± 0.06 0.330 ± 0.13 0.531 ± 0.15 0.317 ± 0.09 0.304 ± 0.07
LLM Candidate MAE↓ MSE↓ ALL↑ HPG↑ HEG↑ HVG↑
Deepseek-R1 0.371 ± 0.04 0.237 ± 0.05 0.302 ± 0.14 0.490 ± 0.17 0.270 ± 0.09 0.255 ± 0.06 Deepseek-v3 0.370 ± 0.04 0.236 ± 0.06 0.308 ± 0.14 0.497 ± 0.16 0.283 ± 0.10 0.266 ± 0.06 LLaMA 2 0.358 ± 0.05 0.221 ± 0.05 0.307 ± 0.14 0.487 ± 0.17 0.280 ± 0.09 0.267 ± 0.06 GPT-4o 0.361 ± 0.04 0.224 ± 0.06 0.330 ± 0.13 0.531 ± 0.15 0.317 ± 0.09 0.304 ± 0.07
Module MAE↓ MSE↓ ALL↑ HPG↑ HEG↑ HVG↑
w/o multi-scale 0.390 ± 0.02 0.253 ± 0.03 0.210 ± 0.13 0.336 ± 0.17 0.166 ± 0.09 0.144 ± 0.06 w/o text 0.371 ± 0.04 0.241 ± 0.06 0.311 ± 0.13 0.512 ± 0.16 0.288 ± 0.09 0.287 ± 0.06 w/o contrast 0.369 ± 0.05 0.234 ± 0.06 0.303 ± 0.15 0.492 ± 0.17 0.277 ± 0.11 0.275 ± 0.07 Text as KV 0.372 ± 0.04 0.242 ± 0.05 0.330 ± 0.14 0.527 ± 0.15 0.307 ± 0.10 0.303 ± 0.07 Ours 0.361 ± 0.04 0.224 ± 0.06 0.330 ± 0.13 0.531 ± 0.15 0.317 ± 0.09 0.304 ± 0.07
Fusion Strategy MAE↓ MSE↓ ALL↑ HPG↑ HEG↑ HVG↑
Concat. 0.380 ± 0.07 0.246 ± 0.09 0.254 ± 0.18 0.471 ± 0.22 0.142 ± 0.16 0.105 ± 0.05 Concat. + Trans. 0.370 ± 0.06 0.241 ± 0.07 0.331 ± 0.14 0.530 ± 0.14 0.317 ± 0.10 0.304 ± 0.07 Sum. 0.370 ± 0.06 0.231 ± 0.08 0.259 ± 0.18 0.494 ± 0.19 0.147 ± 0.16 0.108 ± 0.14 Sum. + Trans. 0.363 ± 0.06 0.235 ± 0.07 0.329 ± 0.13 0.524 ± 0.16 0.307 ± 0.09 0.312 ± 0.06 Cross Atten. 0.361 ± 0.04 0.224 ± 0.06 0.330 ± 0.13 0.531 ± 0.15 0.317 ± 0.09 0.304 ± 0.07
Loss Design MAE↓ MSE↓ ALL↑ HPG↑ HEG↑ HVG↑
Fixed weights 0.385 ± 0.07 0.250 ± 0.10 0.258 ± 0.17 0.470 ± 0.20 0.147 ± 0.16 0.108 ± 0.13 w/o distillation 0.392 ± 0.04 0.256 ± 0.06 0.316 ± 0.13 0.517 ± 0.16 0.298 ± 0.09 0.300 ± 0.07 Ours 0.361 ± 0.04 0.224 ± 0.06 0.330 ± 0.13 0.531 ± 0.15 0.317 ± 0.09 0.304 ± 0.07
Table S1: Additional ablation studies on HER2+ dataset.

Error PCC
Text Emb. MAE↓ MSE↓ ALL↑ HPG↑ HEG↑ HVG↑
Conch 0.402 ± 0.05 0.263 ± 0.07 0.410 ± 0.07 0.504 ± 0.08 0.352 ± 0.08 0.335 ± 0.08 PLIP 0.395 ± 0.05 0.254 ± 0.07 0.413 ± 0.08 0.516 ± 0.07 0.352 ± 0.08 0.327 ± 0.08 BioGPT 0.400 ± 0.06 0.259 ± 0.08 0.412 ± 0.08 0.517 ± 0.07 0.341 ± 0.09 0.311 ± 0.08 BioBERT 0.383 ± 0.05 0.239 ± 0.06 0.407 ± 0.08 0.508 ± 0.08 0.346 ± 0.09 0.321 ± 0.08
Image Emb. MAE↓ MSE↓ ALL↑ HPG↑ HEG↑ HVG↑
ResNet18 0.404 ± 0.05 0.263 ± 0.06 0.390 ± 0.07 0.496 ± 0.06 0.308 ± 0.08 0.289 ± 0.08 ResNet50 0.408 ± 0.04 0.267 ± 0.04 0.381 ± 0.06 0.484 ± 0.06 0.294 ± 0.06 0.289 ± 0.06 PLIP 0.392 ± 0.03 0.245 ± 0.04 0.395 ± 0.07 0.502 ± 0.06 0.320 ± 0.08 0.292 ± 0.08 Conch 0.386 ± 0.05 0.241 ± 0.05 0.403 ± 0.07 0.510 ± 0.07 0.339 ± 0.08 0.309 ± 0.08 UNI 0.383 ± 0.05 0.239 ± 0.06 0.407 ± 0.08 0.508 ± 0.08 0.346 ± 0.09 0.321 ± 0.08
Prompt Strategy MAE↓ MSE↓ ALL↑ HPG↑ HEG↑ HVG↑
w/o text constraint 0.403 ± 0.05 0.261 ± 0.06 0.394 ± 0.07 0.497 ± 0.06 0.320 ± 0.08 0.300 ± 0.08 w/o text summary 0.412 ± 0.06 0.271 ± 0.07 0.387 ± 0.07 0.491 ± 0.07 0.315 ± 0.09 0.290 ± 0.08 Ours 0.383 ± 0.05 0.239 ± 0.06 0.407 ± 0.08 0.508 ± 0.08 0.346 ± 0.09 0.321 ± 0.08
LLM Candidate MAE↓ MSE↓ ALL↑ HPG↑ HEG↑ HVG↑
Deepseek-R1 0.407 ± 0.06 0.267 ± 0.07 0.391 ± 0.07 0.502 ± 0.06 0.312 ± 0.07 0.288 ± 0.06 Deepseek-V3 0.405 ± 0.06 0.265 ± 0.08 0.391 ± 0.07 0.496 ± 0.06 0.317 ± 0.08 0.298 ± 0.07 Llama2 0.407 ± 0.05 0.263 ± 0.06 0.386 ± 0.07 0.491 ± 0.06 0.314 ± 0.07 0.295 ± 0.07 GPT-4o 0.383 ± 0.05 0.239 ± 0.06 0.407 ± 0.08 0.508 ± 0.08 0.346 ± 0.09 0.321 ± 0.08
Module MAE↓ MSE↓ ALL↑ HPG↑ HEG↑ HVG↑
w/o multi-scale 0.425 ± 0.04 0.281 ± 0.04 0.300 ± 0.07 0.402 ± 0.06 0.229 ± 0.07 0.205 ± 0.07 w/o text 0.410 ± 0.07 0.278 ± 0.09 0.326 ± 0.05 0.447 ± 0.06 0.258 ± 0.07 0.265 ± 0.07 w/o contrast 0.400 ± 0.04 0.253 ± 0.05 0.388 ± 0.09 0.492 ± 0.07 0.318 ± 0.11 0.289 ± 0.10 Text as KV 0.395 ± 0.05 0.254 ± 0.06 0.368 ± 0.06 0.486 ± 0.06 0.275 ± 0.09 0.277 ± 0.09 Ours 0.383 ± 0.05 0.239 ± 0.06 0.407 ± 0.08 0.508 ± 0.08 0.346 ± 0.09 0.321 ± 0.08
Fusion Strategy MAE↓ MSE↓ ALL↑ HPG↑ HEG↑ HVG↑
Concat. 0.410 ± 0.08 0.271 ± 0.10 0.356 ± 0.08 0.498 ± 0.06 0.230 ± 0.12 0.175 ± 0.11 Concat. + Trans. 0.390 ± 0.07 0.251 ± 0.08 0.388 ± 0.08 0.498 ± 0.07 0.302 ± 0.08 0.293 ± 0.09 Sum. 0.402 ± 0.06 0.257 ± 0.08 0.352 ± 0.08 0.491 ± 0.07 0.229 ± 0.12 0.179 ± 0.11 Sum. + Trans. 0.399 ± 0.06 0.260 ± 0.07 0.400 ± 0.08 0.498 ± 0.08 0.331 ± 0.09 0.324 ± 0.09 Cross Atten. 0.383 ± 0.05 0.239 ± 0.06 0.407 ± 0.08 0.508 ± 0.08 0.346 ± 0.09 0.321 ± 0.08
Loss Design MAE↓ MSE↓ ALL↑ HPG↑ HEG↑ HVG↑
Fixed weights 0.408 ± 0.08 0.266 ± 0.09 0.338 ± 0.09 0.479 ± 0.07 0.220 ± 0.12 0.169 ± 0.11 w/o distillation 0.391 ± 0.03 0.248 ± 0.03 0.402 ± 0.07 0.503 ± 0.07 0.337 ± 0.09 0.323 ± 0.10 Ours 0.383 ± 0.05 0.239 ± 0.06 0.407 ± 0.08 0.508 ± 0.08 0.346 ± 0.09 0.321 ± 0.08
Table S2: Additional ablation studies on cSCC dataset.

Error PCC
Text Emb. MAE↓ MSE↓ ALL↑ HPG↑ HEG↑ HVG↑
Conch 0.324 ± 0.02 0.181 ± 0.02 0.211 ± 0.06 0.374 ± 0.09 0.194 ± 0.06 0.230 ± 0.07 PLIP 0.323 ± 0.02 0.179 ± 0.02 0.217 ± 0.07 0.381 ± 0.09 0.194 ± 0.06 0.244 ± 0.06 BioGPT 0.327 ± 0.02 0.183 ± 0.02 0.217 ± 0.07 0.385 ± 0.09 0.193 ± 0.06 0.239 ± 0.06 BioBERT 0.322 ± 0.02 0.179 ± 0.02 0.219 ± 0.07 0.387 ± 0.09 0.200 ± 0.06 0.244 ± 0.07
Image Emb. MAE↓ MSE↓ ALL↑ HPG↑ HEG↑ HVG↑
ResNet18 0.341 ± 0.01 0.197 ± 0.02 0.202 ± 0.06 0.347 ± 0.09 0.176 ± 0.06 0.224 ± 0.06 ResNet50 0.354 ± 0.01 0.212 ± 0.02 0.196 ± 0.06 0.349 ± 0.10 0.167 ± 0.06 0.215 ± 0.07 PLIP 0.333 ± 0.02 0.188 ± 0.02 0.190 ± 0.07 0.333 ± 0.11 0.157 ± 0.06 0.211 ± 0.07 Conch 0.324 ± 0.02 0.177 ± 0.02 0.209 ± 0.07 0.369 ± 0.10 0.179 ± 0.06 0.231 ± 0.07 UNI 0.322 ± 0.02 0.179 ± 0.02 0.219 ± 0.07 0.387 ± 0.09 0.200 ± 0.06 0.244 ± 0.07
Prompt Strategy MAE↓ MSE↓ ALL↑ HPG↑ HEG↑ HVG↑
w/o text constraint 0.340 ± 0.02 0.198 ± 0.02 0.206 ± 0.06 0.351 ± 0.09 0.177 ± 0.06 0.227 ± 0.06 w/o text summary 0.342 ± 0.02 0.199 ± 0.03 0.199 ± 0.06 0.341 ± 0.10 0.177 ± 0.06 0.220 ± 0.07 Ours 0.322 ± 0.02 0.179 ± 0.02 0.219 ± 0.07 0.387 ± 0.09 0.200 ± 0.06 0.244 ± 0.07
LLM Candidate MAE↓ MSE↓ ALL↑ HPG↑ HEG↑ HVG↑
Deepseek-R1 0.343 ± 0.02 0.199 ± 0.02 0.198 ± 0.06 0.345 ± 0.09 0.174 ± 0.05 0.226 ± 0.07 Deepseek-v3 0.337 ± 0.02 0.193 ± 0.02 0.202 ± 0.07 0.342 ± 0.09 0.187 ± 0.06 0.221 ± 0.07 LLaMA 2 0.339 ± 0.01 0.194 ± 0.02 0.193 ± 0.07 0.337 ± 0.10 0.165 ± 0.07 0.218 ± 0.06 GPT-4o 0.322 ± 0.02 0.179 ± 0.02 0.219 ± 0.07 0.387 ± 0.09 0.200 ± 0.06 0.244 ± 0.07
Module MAE↓ MSE↓ ALL↑ HPG↑ HEG↑ HVG↑
w/o multi-scale 0.350 ± 0.02 0.210 ± 0.02 0.117 ± 0.05 0.210 ± 0.09 0.101 ± 0.05 0.112 ± 0.04 w/o text 0.343 ± 0.02 0.201 ± 0.03 0.210 ± 0.07 0.372 ± 0.09 0.177 ± 0.06 0.233 ± 0.06 w/o contrast 0.320 ± 0.02 0.179 ± 0.02 0.209 ± 0.07 0.380 ± 0.09 0.187 ± 0.06 0.231 ± 0.06 Text as KV 0.333 ± 0.02 0.186 ± 0.02 0.216 ± 0.06 0.379 ± 0.09 0.182 ± 0.06 0.242 ± 0.06 Ours 0.322 ± 0.02 0.179 ± 0.02 0.219 ± 0.07 0.387 ± 0.09 0.200 ± 0.06 0.244 ± 0.07
Fusion Strategy MAE↓ MSE↓ ALL↑ HPG↑ HEG↑ HVG↑
Concat. 0.336 ± 0.02 0.189 ± 0.03 0.154 ± 0.07 0.292 ± 0.13 0.048 ± 0.06 0.178 ± 0.08 Concat. + Trans. 0.331 ± 0.02 0.191 ± 0.03 0.214 ± 0.06 0.380 ± 0.08 0.189 ± 0.06 0.236 ± 0.06 Sum. 0.326 ± 0.02 0.179 ± 0.03 0.151 ± 0.07 0.282 ± 0.14 0.053 ± 0.05 0.171 ± 0.08 Sum. + Trans. 0.329 ± 0.03 0.188 ± 0.03 0.221 ± 0.07 0.383 ± 0.09 0.198 ± 0.06 0.247 ± 0.07 Cross Atten. 0.322 ± 0.02 0.179 ± 0.02 0.219 ± 0.07 0.387 ± 0.09 0.200 ± 0.06 0.244 ± 0.07
Loss Design MAE↓ MSE↓ ALL↑ HPG↑ HEG↑ HVG↑
Fixed weights 0.338 ± 0.03 0.191 ± 0.03 0.148 ± 0.07 0.276 ± 0.14 0.053 ± 0.05 0.168 ± 0.07 w/o distillation 0.336 ± 0.02 0.195 ± 0.02 0.217 ± 0.07 0.382 ± 0.10 0.202 ± 0.06 0.251 ± 0.06 Ours 0.322 ± 0.02 0.179 ± 0.02 0.219 ± 0.07 0.387 ± 0.09 0.200 ± 0.06 0.244 ± 0.07
Table S3: Ablation studies on STNET dataset with standard deviations to supplement results in the main text.

Method FLOPs (G) # Parameter (M) Training Time (h) Inference Time (s)
ST-Net 2.865 7.210 4.119 0.491 Hist2ST 375.296 778.240 7.199 0.575 THItoGene 79.811 63.096 6.024 0.416 HisToGene 52.605 227.328 40.725 0.158 M2OST 0.165 208.896 59.263 0.165 EGN 5.479 133.120 44.834 0.107 BLEEP 2940.416 24.229 4.732 0.461 mclSTExp 2.866 41.459 20.413 0.587 TRIPLEX 4.167 27.460 4.758 0.136
DKAN w/o text 12.260 77.288 3.500 0.107 DKAN w/o dual path 15.511 73.649 15.183 0.102 DKAN 15.838 87.172 3.711 0.158
Table S4: Computational comparisons on cSCC dataset.
Ground truth ST-Net(0.160) BLEEP(0.643) EGN(0.629) mclSTExp(0.546) HisToGene(0.017)
ERBB2
SGN(0.516) Hist2ST(0.143) TRIPLEX(0.704)
THItoGene(0.368) M2OST(-0.018) DKAN(0.898)
Ground truth ST-Net(0.109) BLEEP(0.460) EGN(0.146) mclSTExp(-0.116) HisToGene(0.247)
GNAS
SGN(0.059) Hist2ST(0.508) TRIPLEX(0.445)
THItoGene(-0.129) M2OST(0.174) DKAN(0.673)
Ground truth ST-Net(0.393) BLEEP(0.522) EGN(0.520) mclSTExp(0.411) HisToGene(0.393)
HSP90AB1
SGN(0.246) Hist2ST(0.294) TRIPLEX(0.606)
THItoGene(0.094) M2OST(0.348) DKAN(0.661)
Figure S2: Visualization of Cancer Marker Gene Expression on HER2+ dataset.
Ground truth ST-Net(-0.131) BLEEP(0.092) EGN(0.167) mclSTExp(0.260) HisToGene(-0.001)
ERBB2
SGN(0.454) Hist2ST(0.085) TRIPLEX(0.383)
THItoGene(-0.283) M2OST(-0.110) DKAN(0.584)
Ground truth ST-Net(0.414) BLEEP(0.217) EGN(0.382) mclSTExp(0.528) HisToGene(0.073)
GNAS
SGN(-0.014) Hist2ST(0.276) TRIPLEX(0.590)
THItoGene(-0.042) M2OST(-0.277) DKAN(0.753)
Ground truth ST-Net(0.356) BLEEP(0.253) EGN(0.441) mclSTExp(0.431) HisToGene(0.390)
HSP90AB1
SGN(-0.235) Hist2ST(0.633) TRIPLEX(0.681)
THItoGene(0.357) M2OST(-0.116) DKAN(0.750)
Figure S3: Visualization of Cancer Marker Gene Expression on STNET dataset.
Ground truth ST-Net(-0.108) BLEEP(0.254) EGN(0.074) mclSTExp(-0.314) HisToGene(-0.403)
SPARC
SGN(0.187) Hist2ST(0.361) TRIPLEX(0.390)
THItoGene(0.220) M2OST(0.435) DKAN(0.577)
Ground truth ST-Net(0.360) BLEEP(0.324) EGN(0.347) mclSTExp(0.330) HisToGene(0.186)
TRIM29
SGN(-0.174) Hist2ST(-0.089) TRIPLEX(0.430)
THItoGene(0.116) M2OST(-0.098) DKAN(0.477)
Ground truth ST-Net(0.398) BLEEP(0.498) EGN(0.439) mclSTExp(0.288) HisToGene(0.173)
FTL
SGN(-0.446) Hist2ST(0.200) TRIPLEX(0.544)
THItoGene(0.141) M2OST(-0.112) DKAN(0.592)
Figure S4: Visualization of Cancer Marker Gene Expression on cSCC dataset.
Highly Predictive Genes for HER2+ Dataset
'CD24', 'HSP90AB1', 'HNRNPA2B1', 'GNAS', 'FASN', 'GRB7', 'MLLT6', 'SPINT2', 'ERBB2', 'HSP90AA1', 'ACTG1', 'NACA', 'CCT3', 'CALM2', 'ATP1A1', 'ATP5B', 'COX6C', 'CLDN4', 'SCD', 'DDX5', 'PTPRF', 'HSP90B1', 'PTMA', 'IGHA1', 'DBI', 'PSMD3', 'PERP', 'PEBP1', 'COX7C', 'C3', 'FNBP1L', 'TUBA1B', 'VMP1', 'FN1', 'VCP', 'IGKC', 'JTB', 'EIF4G2', 'PGAP3', 'SEPW1', 'LAPTM4A', 'KRT7', 'PABPC1', 'PCGF2', 'TUBB', 'JUP', 'PRDX1', 'S100A11', 'SLC9A3R1', 'ATP5E’
Highly Predictive Genes for cSCC Dataset
'CD63', 'EEF2', 'TMSB10', 'RPS3', 'PTMA', 'UBA52', 'MYL6', 'RPS17', 'RPS5', 'HLA-B', 'RPS11', 'FTL', 'RPL8', 'NACA', 'RPL3', 'PFN1', 'PKP1', 'RPL28', 'IGFBP4', 'RPL18', 'RPS3A', 'RPS19', 'RPL29', 'RPL9', 'GJB6', 'RPL5', 'RPL36', 'RPS9', 'RPL10', 'HLA-A', 'HSPB1', 'RPL32', 'TRIM29', 'RPS4X', 'LGALS1', 'RPL12', 'PPIA', 'TPI1', 'FXYD3', 'SPARC', 'RPS16', 'ALDOA', 'RPS20', 'FLNA', 'TAGLN2', 'HLA-C', 'RPL18A', 'RPL4', 'RPS25', 'ENO1’
Highly Predictive Genes for STNET Dataset
'FASN', 'HSP90AB1', 'GNAS', 'ACTG1', 'ATP1A1', 'PTMA', 'PTPRF', 'H3-3B', 'GAS5', 'COL1A1', 'ERBB2', 'TUBA1B', 'COL1A2', 'CD74', 'SPINT2', 'IGLL5', 'HLA-DRA', 'APOE', 'AEBP1', 'SPARC', 'EIF4A1', 'PABPC1', 'PLXNB2', 'TPT1', 'BGN', 'C1QA', 'JUP', 'COX6C', 'XBP1', 'PSMD3', 'LAPTM5', 'FN1', 'RPL5', 'C3', 'RPL9', 'RPS24', 'ACTN4', 'RPLP1', 'RPL13', 'EEF1A1', 'RPL15', 'PRSS8', 'RPL28', 'CHCHD2', 'UBE2M', 'CLDN3', 'B2M', 'EVL', 'SDC1', 'KRT8’
Figure S5: Highly predictive genes for all datasets.

Highly Expressed Genes for HER2+ Dataset
'TMSB10', 'IGKC', 'GAPDH', 'ERBB2', 'ACTB', 'RACK1', 'KRT19', 'PFN1', 'SERF2', 'IGHA1', 'SSR4', 'IGHG3', 'IGLC2', 'UBA52', 'CALR', 'PSAP', 'CTSD', 'FTL', 'P4HB', 'APOE', 'FAU', 'FTH1', 'IGLC3', 'PSMB3', 'HLA-B', 'EEF2', 'CFL1', 'ACTG1', 'CD74', 'CISD3', 'HLA-E', 'GPX4', 'CD63', 'HLA-A', 'EDF1', 'MIEN1', 'MYL6', 'BEST1', 'TPT1', 'HLA-C', 'CST3', 'COL1A1', 'IGHM', 'SYNGR2', 'SLC9A3R1', 'OAZ1', 'LMNA', 'SLC25A6', 'PPP1CA', 'KRT7'
Highly Expressed Genes for cSCC Dataset
'KRT6A', 'KRT5', 'S100A8', 'KRT14', 'S100A9', 'KRT6B', 'KRT16', 'KRT17', 'MT-CO3', 'KRT6C', 'SFN', 'S100A7', 'PERP', 'ACTB', 'S100A2', 'MT-CO2', 'SPRR1B', 'MT-CO1', 'ACTG1', 'EEF1A1', 'HLA-B', 'LGALS7', 'LGALS7B', 'KRT10', 'TPT1', 'MT-ND4', 'RPLP1', 'RPLP2', 'B2M', 'RPS12', 'CXCL14', 'GJB2', 'COL1A1', 'RPL13', 'MT-ND3', 'KRT1', 'RPS24', 'PFN1', 'FABP5', 'MT-CYB', 'RPL11', 'RPS6', 'RPL34', 'RPL31', 'MTATP6', 'ENO1', 'RPLP0', 'DSP', 'RPL8', 'RPL27A'
Highly Expressed Genes for STNET Dataset
'RPLP1', 'RPLP2', 'GAPDH', 'RPS18', 'TMSB10', 'RPS14', 'RPL28', 'RPL37A', 'RPS19', 'RPL8', 'RPL36', 'RPL13', 'ACTB', 'IGLL5', 'RPS3', 'PFN1', 'RPL18', 'KRT19', 'RPL35', 'FTL', 'RPL19', 'RPL13A', 'RACK1', 'CALR', 'RPS16', 'RPS12', 'PSAP', 'RPS21', 'RPS2', 'SERF2', 'UBA52', 'CTSD', 'RPS11', 'RPS15', 'RPS17', 'RPL10', 'HLA-B', 'P4HB', 'RPL18A', 'RPS29', 'RPLP0', 'RPL27A', 'CST3', 'RPS28', 'RPL11', 'RPS27', 'RPS6', 'SSR4', 'RPL3', 'FAU'
Figure S6: Highly expressed genes for all datasets.
Highly Variable Genes for HER2+ Dataset
'IGHA1', 'IGHG4', 'IGKC', 'IGHG3', 'AP000769.1', 'S100A9', 'IGLC3', 'IGLC2', 'CALML5', 'IGHG1', 'IGHM', 'S100A8', 'MUCL1', 'TFF3', 'MGP', 'HLA-E', 'C3', 'ISG15', 'BST2', 'C1QA', 'TAGLN', 'RACK1', 'IFI27', 'IGFBP2', 'S100A14', 'FN1', 'TMSB10', 'PHB', 'KRT81', 'HLA-A', 'AZGP1', 'CD74', 'SSR4', 'GRB7', 'FNBP1L', 'BEST1', 'PERP', 'SCD', 'SLC9A3R1', 'PPP1R1B', 'LASP1', 'GAPDH', 'COL1A2', 'CYBA', 'MUC1', 'HLA-B', 'COL3A1', 'PSMD3', 'CISD3', 'CST3'
Highly Variable Genes for cSCC Dataset
'KRT5', 'KRT6A', 'KRT17', 'KRT6C', 'S100A8', 'KRT14', 'HSP90AA1', 'PERP', 'KRT6B', 'SFN', 'ANXA1', 'KRT16', 'S100A9', 'SPRR2A', 'S100A2', 'MT-CO3', 'S100A7', 'ACTN4', 'CXCL14', 'KRT1', 'KRT10', 'ITGA6', 'COL1A1', 'ACTB', 'CD24', 'RPL13', 'SPRR1B', 'ACTG1', 'SPRR2E', 'NDRG1', 'SLPI', 'DMKN', 'MT-CO1', 'SPRR2D', 'SPINK5', 'DST', 'KRTDAP', 'YWHAZ', 'CD74', 'FLG', 'ATP1B3', 'HLA-C', 'MT-CO2', 'MTND3', 'HLA-B', 'MMP1', 'LMNA', 'SBSN', 'SPARC', 'S100A10'
Highly Variable Genes for STNET Dataset
'TFF3', 'S100A9', 'IGLL5', 'MGP', 'MUC1', 'ERBB2', 'KRT19', 'AZGP1', 'COX6C', 'S100A8', 'C4B', 'IFI27', 'TAGLN', 'CLU', 'IGFBP2', 'CCND1', 'H2AJ', 'GSTP1', 'FN1', 'A2M', 'AEBP1', 'NHERF1', 'ISG15', 'IGFBP5', 'C3', 'PSMD3', 'IFI6', 'FASN', 'B2M', 'SNHG25', 'LY6E', 'XBP1', 'MALAT1', 'COL1A1', 'MYL9', 'BGN', 'C1QA', 'S100A11', 'BEST1', 'EVL', 'GNAS', 'FXYD3', 'SPDEF', 'CST3', 'IFITM3', 'IGFBP4', 'BST2', 'PABPC1', 'COL1A2', 'KRT18'
Figure S7: Highly variable genes for all datasets.
Evaluation Across Gene Subsets
To comprehensively assess the effectiveness of our proposed model, we evaluate its performance using the PCC from four complementary perspectives: (1) PCC for Highly Predictive Genes (HPGs) (Figure S5), (2) PCC for Highly Expressed Genes (HEGs) (Figure S6), (3) PCC for Highly Variable Genes (HVGs) (Figure S7), and (4) PCC across all genes (Figure S8). While the overall PCC provides a global view of model performance, the three gene-specific subsets offer more targeted insights: (i) HPGs represent -
genes for which the model achieves the highest predictive accuracy, indicating the model’s best-case performance. (ii) HEGs are genes with high average expression, which tend to be more robust to technical noise and biologically significant. (iii) HVGs are genes with high spatial variability, often associated with meaningful biological heterogeneity. To ensure consistency with prior studies (Xie et al. 2023; Yang et al. 2023; Chung et al. 2024; Yang et al. 2024b; Min et al. 2024), we select the to-
p 50 genes in each category (HPG, HEG, and HVG) based on the corresponding criteria. This stratified evaluation enables a more comprehensive understanding of the model’s performance across genes with distinct biological and statistical properties.
Acknowledgements
This work was supported by the Institute of Digital Medicine, City University of Hong Kong, the Hong Kong Innovation and Technology Commission (InnoHK Project CIMDA) and City University of Hong Kong internal grant 7005967.

Genes of interest for HER2+ Dataset
'IGKC', 'TMSB10', 'ERBB2', 'IGHG3', 'IGLC2', 'IGHA1', 'GAPDH', 'ACTB', 'IGLC3', 'IGHM', 'SERF2', 'PSMB3', 'PFN1', 'ACTG1', 'KRT19', 'RACK1', 'MUCL1', 'CISD3', 'APOE', 'MIEN1', 'SSR4', 'CALR', 'PSAP', 'CTSD', 'FTL', 'FTH1', 'TPT1', 'PTPRF', 'UBA52', 'P4HB', 'BEST1', 'HLAB', 'FAU', 'SLC9A3R1', 'FN1', 'COL1A1', 'EEF2', 'IGHG4', 'CALML5', 'CD74', 'B2M', 'FASN', 'S100A9', 'MGP', 'CFL1', 'PSMD3', 'IGHG1', 'HLAA', 'S100A6', 'MYL6', 'COL1A2', 'PHB', 'TAGLN2', 'HLA-E', 'HLA-C', 'KRT7', 'CD63', 'SYNGR2', 'S-
TARD3', 'PABPC1', 'GPX4', 'GRB7', 'SLC25A6', 'AEBP1', 'GNAS', 'NDUFB9', 'EDF1', 'CRIP2', 'DDX5', 'OAZ1', 'EIF4G1', 'LMNA', 'GNB2', 'CST3', 'PCGF2', 'SDC1', 'S100A11', 'PRDX1', 'GRINA', 'ATP6V0B', 'TFF3', 'HLA-DRA', 'EEF1D', 'AZGP1', 'PPP1CA', 'FLNA', 'COL3A1', 'ATP5E', 'SPDEF', 'AP000769.1', 'ALDOA', 'PLXNB2', 'TAGLN', 'TUBA1B', 'APOC1', 'PRRC2A', 'LAPTM5', 'PTMS', 'KRT18', 'IFI27', 'PLD3', 'ADAM15', 'C1QA', 'AES', 'TSPO', 'MLLT6', 'TAPBP', 'SCAND1', 'ATP1A1', 'CD81', 'SEC61A1', 'CLDN3', 'PPDPF', -
'S100A14', 'BGN', 'C3', 'MZT2B', 'S100A8', 'MDK', 'PFDN5', 'H2AFJ', 'SH3BGRL3', 'ENO1', 'XBP1', 'CYBA', 'COX6B1', 'TRAF4', 'CD24', 'PRSS8', 'MMP14', 'MUC1', 'VIM', 'MIDN', 'SPINT2', 'BST2', 'TIMP1', 'GUK1', 'ACTN4', 'CTSB', 'COX4I1', 'CCT3', 'HNRNPA2B1', 'SEPW1', 'LY6E', 'SCD', 'HSPB1', 'EIF4G2', 'BSG', 'ZYX', 'TUBB', 'LASP1', 'CD99', 'COL6A2', 'H1FX', 'RALY', 'UBE2M', 'SPARC', 'ATG10', 'HSP90AB1', 'ORMDL3', 'LMAN2', 'CHCHD2', 'COX7C', 'ARHGDIA', 'VMP1', 'UBC', 'IGFBP2', 'COPE', 'NUPR1', 'PERP', '-
KRT81', 'PPP1R1B', 'LGALS3BP', 'SSR2', 'KIAA0100', 'MYL9', 'CIB1', 'IDH2', 'STARD10', 'LGALS1', 'COX6C', 'GRN', 'MAPKAPK2', 'GNAI2', 'KDELR1', 'COL18A1', 'UQCRQ', 'COX5B', 'ELOVL1', 'CHPF', 'CLDN4', 'C12orf57', 'LGALS3', 'HSP90AA1', 'JUP', 'A2M', 'NDUFB7', 'PGAP3', 'HSPA8', 'TCEB2', 'PEBP1', 'COPS9', 'ATP5G2', 'ATP6AP1', 'MYH9', 'LSM4', 'COX8A', 'UQCR11', 'ATP5B', 'DHCR24', 'PTBP1', 'EIF3B', 'NDUFA3', 'FKBP2', 'MMACHC', 'RABAC1', 'ISG15', 'PTMA', 'RRBP1', 'POSTN', 'C1QB', 'BCAP31', 'PSMB4', 'LAPTM-
4A', 'INTS1', 'FNBP1L', 'JTB', 'NBL1', 'HM13', 'SLC2A4RG', 'ROMO1', 'SERINC2', 'NDUFA11', 'RHOC', 'TXNIP', 'TYMP', 'NACA', 'HSP90B1', 'SNRPB', 'PFKL', 'VCP', 'ERGIC1', 'NUCKS1', 'PSMD8', 'CALM2', 'AP2S1', 'DBI', 'C4orf48', 'SDF4', 'TPI1’
Genes of interest for STNET Dataset
'RPS3', 'IGLL5', 'RPLP1', 'TFF3', 'RPS18', 'GAPDH', 'TMSB10', 'RPLP2', 'RPS14', 'RPL37A', 'RPS19', 'RPL28', 'KRT19', 'RPL8', 'RPL13', 'RPL19', 'ACTB', 'RPL36', 'RPL18A', 'RPL35', 'RPL18', 'RPS2', 'RPS12', 'RPS21', 'RACK1', 'RPL13A', 'CTSD', 'FTL', 'PFN1', 'MGP', 'RPS15', 'RPS11', 'RPS16', 'HLA-B', 'UBA52', 'NHERF1', 'RPS17', 'PSAP', 'RPLP0', 'SERF2', 'RPS27', 'RPS8', 'RPL27A', 'MUC1', 'RPS28', 'H2AJ', 'RPL10', 'CALR', 'RPS29', 'RPL38', 'RPL11', 'P4HB', 'RPS6', 'CST3', 'FTH1', 'RPS4X', 'SSR4', 'RPL-
30', 'ERBB2', 'APOE', 'AZGP1', 'RPL3', 'COX6C', 'HLA-C', 'FAU', 'RPS9', 'EEF2', 'B2M', 'RPS5', 'RPL12', 'ACTG1', 'RPS27A', 'RPL37', 'RPL23', 'HLA-A', 'RPL31', 'RPL29', 'RPL7A', 'IFI27', 'PABPC1', 'CD74', 'BEST1', 'RPL32', 'FASN', 'S100A9', 'GPX4', 'RPL15', 'RPL27', 'MZT2B', 'RPL23A', 'HSPB1', 'MALAT1', 'RPS24', 'COL1A1', 'C4B', 'KRT18', 'CFL1', 'CD81', 'ALDOA', 'RPL35A', 'SYNGR2', 'PPP1CA', 'HLA-E', 'TAGLN', 'RPL9', 'CD63', 'RPS3A', 'LGALS3BP', 'IGFBP2', 'BST2', 'TPT1', 'EDF1', 'RPS25', 'ATP6V0B',-
 'TAPBP', 'GRINA', 'XBP1', 'S100A11', 'NBEAL1', 'AEBP1', 'CCND1', 'OAZ1', 'RPL14', 'TAGLN2', 'FN1', 'PPDPF', 'BCAP31', 'IFITM3', 'PRDX1', 'BGN', 'GNAS', 'PTMA', 'UBC', 'MZT2A', 'SLC25A6', 'RPS20', 'HSP90AB1', 'RPS10', 'MYL6', 'CLDN3', 'ATP6AP1', 'PRDX2', 'RPL24', 'GNB2', 'RPL34', 'RPL4', 'LMNA', 'NDUFA13', 'HLA-DRA', 'SNHG25', 'TIMP1', 'H1-10', 'RPS23', 'COX8A', 'KRT8', 'LY6E', 'ENO1', 'GRN', 'PTPRF', 'RPL7', 'UBB', 'BSG', 'ELOB', 'COX6B1', 'TMSB4X', 'C1QA', 'PRSS8', 'RPL5', 'UQCR11', 'RPS7', 'A2M-
', 'RPS15A', 'VIM', 'S100A6', 'NDUFA11', 'PSMD3', 'EVL', 'APOC1', 'H3-3B', 'ATP5F1E', 'PLXNB2', 'MYL9', 'TUBA1B', 'CTSB', 'ISG15', 'FLNA', 'RPS13', 'NDUFB9', 'EIF4A1', 'POLR2L', 'CYBA', 'CRIP2', 'EEF1D', 'ATP1A1', 'ELF3', 'TUFM', 'SH3BGRL3', 'STARD10', 'C3', 'GUK1', 'ZNF90', 'C12orf57', 'TLE5', 'SEC61A1', 'SDC1', 'PLD3', 'SPDEF', 'ARHGDIA', 'IFI6', 'LAPTM5', 'RPL41', 'CLU', 'GNAI2', 'PFDN5', 'RPL39', 'SSR2', 'COX4I1', 'RHOC', 'JUP', 'EIF4G1', 'FXYD3', 'TSPO', 'UQCRQ', 'COL1A2', 'RPL10A', 'S100A8',-
 'SELENOW', 'TPI1', 'ATP5MC2', 'PTMS', 'IGFBP5', 'LGALS1', 'SPINT2', 'RPSA', 'GSTP1', 'CHCHD2', 'EIF5A', 'COX5B', 'ATG10', 'RPL6', 'EEF1A1', 'CAPNS1', 'LMAN2', 'UBE2M', 'SPARC', 'EIF3C', 'GAS5', 'TUBB', 'ACTN4', 'IGFBP4'
Genes of interest for cSCC Dataset
'S100A8', 'KRT6A', 'KRT14', 'S100A9', 'KRT5', 'KRT6B', 'KRT16', 'KRT6C', 'KRT17', 'MT-CO3', 'S100A7', 'MT-CO2', 'SFN', 'S100A2', 'MT-CO1', 'ACTB', 'PERP', 'SPRR1B', 'KRT10', 'KRT1', 'EEF1A1', 'RPLP1', 'LGALS7B', 'LGALS7', 'COL1A1', 'FABP5', 'RPS12', 'HLA-B', 'MT-ND4', 'RPLP2', 'ACTG1', 'GJB2', 'B2M', 'TPT1', 'RPL13', 'MT-ATP6', 'RPS24', 'PFN1', 'KRTDAP', 'RPS6', 'DMKN', 'RPLP0', 'MT-ND3', 'RPL37A', 'DSP', 'CXCL14', 'RPS18', 'RPS17', 'RPS8', 'RPL13A', 'MT-CYB', 'RPL11', 'RPL27A', 'RPL28', 'MT-ND1',-
 'RPS27', 'RPL32', 'CSTA', 'RPL34', 'RPL31', 'COL1A2', 'RPL8', 'SBSN', 'TMSB10', 'ENO1', 'RPS14', 'RPL36', 'SPRR2A', 'RPL39', 'GSTP1', 'RPS27A', 'JUP', 'RPS19', 'RPL37', 'RPL27', 'RPL3', 'RPS29', 'COL3A1', 'RPS11', 'CSTB', 'RPL9', 'RACK1', 'ANXA2', 'RPL7A', 'RPL23', 'RPL19', 'S100A11', 'RPS2', 'RPS28', 'EEF2', 'ANXA1', 'CD74', 'PABPC1', 'LDHA', 'RPS3', 'RPL35A', 'DSC2', 'AQP3', 'RPS25', 'IFI27', 'CALML5', 'YWHAZ', 'RPL6', 'TMSB4X', 'RPS23', 'RPL12', 'S100A14', 'RPS4X', 'UBA52', 'SLPI', 'PKP1', 'RP-
L38', 'HLA-A', 'RPS13', 'LY6D', 'RPL24', 'ATP1B3', 'MYL6', 'GJB6', 'S100A6', 'HSPB1', 'RPL18', 'MT-ND2', 'SDC1', 'IVL', 'FTL', 'RPS3A', 'RPL10', 'RPS15A', 'PI3', 'RPL18A', 'S100A10', 'RPS7', 'S100A7A', 'RPL29', 'RPL26', 'RPL41', 'RPL4', 'RPL7', 'SPARC', 'VIM', 'PTMA', 'RPS20', 'MMP1', 'SH3BGRL3', 'RPL15', 'MYH9', 'GJA1', 'ITM2B', 'PPIA', 'RPL14', 'UBC', 'RPL5', 'CD44', 'AHNAK', 'RPL21', 'DSC3', 'CNFN', 'CD24', 'CFL1', 'COL17A1', 'HSP90AA1', 'RPS16', 'PKM', 'NACA', 'RPS5', 'ALDOA', 'H3F3B', 'S100A1-
6', 'TAGLN2', 'HLA-C', 'TRIM29', 'LYPD3', 'FAU', 'LMNA', 'SPINK5', 'SPRR2E', 'RPL22', 'KRT2', 'CST3', 'DSG3', 'CLCA2', 'RPSA', 'DSG1', 'RPS9', 'NDRG1', 'AC090498.1', 'GRN', 'TXN', 'HSPA8', 'TGFBI', 'CTSB', 'SPRR2D', 'HLA-DRA', 'ACTN4', 'RPS21', 'EIF1', 'CTSD', 'ARPC2', 'CALML3', 'KLK7', 'CALM1', 'GNAS', 'DYNLL1', 'FLG', 'FLNA', 'DST', 'SLC2A1', 'PSAP', 'EIF4G2', 'EEF1B2', 'FGFBP1', 'LGALS1', 'ITGA6', 'MYL12B', 'TPI1', 'RPL10A', 'TMEM45A', 'BTF3', 'DSTN', 'RTN4', 'HNRNPA2B1', 'LAD1', 'ATP1A1', 'SER-
PINB3', 'PRDX1', 'COL6A1', 'ATP5E', 'PPDPF', 'TYMP', 'CD63', 'EIF5A', 'YWHAQ', 'PGK1', 'HLA-E', 'IFITM3', 'RPS26', 'IGFBP4', 'OAZ1', 'NPM1', 'LCE3D', 'FXYD3', 'MT2A', 'COL6A2', 'POLR2L', 'CD59', 'HNRNPK', 'RPL35', 'TMBIM6', 'HSP90AB1’
Figure S8: Genes of interest for all datasets.

References
Andersson, A.; Larsson, L.; Stenbeck, L.; Salme ́n, F.; Ehinger, A.; Wu, S. Z.; Al-Eryani, G.; Roden, D.; Swarbrick, A.; Borg,  ̊A.; et al. 2021. Spatial deconvolution of HER2positive breast cancer delineates tumor-associated cell type interactions. Nature communications, 12(1): 6012.
Chen, R. J.; Ding, T.; Lu, M. Y.; Williamson, D. F. K.; Jaume, G.; Song, A. H.; Chen, B.; Zhang, A.; Shao, D.; Shaban, M.; Williams, M.; Oldenburg, L.; Weishaupt, L. L.; Wang, J. J.; Vaidya, A.; Le, L. P.; Gerber, G.; Sahai, S.; Williams, W.; and Mahmood, F. 2024. Towards a generalpurpose foundation model for computational pathology. Nature Medicine, 30(3): 850–862.
Chung, Y.; Ha, J. H.; Im, K. C.; and Lee, J. S. 2024. Accurate Spatial Gene Expression Prediction by Integrating Multi-Resolution Features . In 2024 IEEE/CVF Conference on Computer Vision and Pattern Recognition (CVPR), 11591–11600. Los Alamitos, CA, USA: IEEE Computer Society.
Ciga, O.; Xu, T.; and Martel, A. L. 2022. Self supervised contrastive learning for digital histopathology. Machine Learning with Applications, 7: 100198.
DeepSeek-AI. 2025. DeepSeek-R1: Incentivizing Reasoning Capability in LLMs via Reinforcement Learning. arXiv:2501.12948.
Dosovitskiy, A.; Beyer, L.; Kolesnikov, A.; Weissenborn, D.; Zhai, X.; Unterthiner, T.; Dehghani, M.; Minderer, M.; Heigold, G.; Gelly, S.; Uszkoreit, J.; and Houlsby, N. 2021. An Image is Worth 16x16 Words: Transformers for Image Recognition at Scale. In International Conference on Learning Representations.
He, B.; Bergenstra ̊hle, L.; Stenbeck, L.; Abid, A.; Andersson, A.; Borg,  ̊A.; Maaskola, J.; Lundeberg, J.; and Zou, J. 2020. Integrating spatial gene expression and breast tumour morphology via deep learning. Nature biomedical engineering, 4(8): 827–834.
He, K.; Zhang, X.; Ren, S.; and Sun, J. 2016. Deep Residual Learning for Image Recognition. In Proceedings of the IEEE Conference on Computer Vision and Pattern Recognition (CVPR).
Huang, G.; Liu, Z.; Van Der Maaten, L.; and Weinberger, K. Q. 2017. Densely Connected Convolutional Networks . In 2017 IEEE Conference on Computer Vision and Pattern Recognition (CVPR), 2261–2269. Los Alamitos, CA, USA: IEEE Computer Society.
Huang, Z.; Bianchi, F.; Yuksekgonul, M.; Montine, T. J.; and Zou, J. 2023. A visual–language foundation model for pathology image analysis using medical Twitter. Nature Medicine, 1–10.
Ji, A. L.; Rubin, A. J.; Thrane, K.; Jiang, S.; Reynolds, D. L.; Meyers, R. M.; Guo, M. G.; George, B. M.; Mollbrink, A.; Bergenstra ̊hle, J.; et al. 2020. Multimodal analysis of composition and spatial architecture in human squamous cell carcinoma. cell, 182(2): 497–514.
Jia, Y.; Liu, J.; Chen, L.; Zhao, T.; and Wang, Y. 2023. THItoGene: a deep learning method for predicting spatial tran
scriptomics from histological images. Briefings in Bioinformatics, 25(1): bbad464.
Lee, J.; Yoon, W.; Kim, S.; Kim, D.; Kim, S.; So, C. H.; and Kang, J. 2019. BioBERT: a pre-trained biomedical language representation model for biomedical text mining. Bioinformatics, 36(4): 1234–1240.
Li, F.; Hu, Z.; Chen, W.; and Kak, A. 2023. Adaptive Supervised PatchNCE Loss for Learning H&E-to-IHC Stain Translation with Inconsistent Groundtruth Image Pairs. In Medical Image Computing and Computer Assisted Intervention(MICCAI), 632–641.
Liang, Y.; Wang, Y.; Zhang, Y.; Ye, F.; Luo, D.; Li, Y.; Jin, Y.; Han, D.; Wang, Z.; Chen, B.; et al. 2023. HSPB1 facilitates chemoresistance through inhibiting ferroptotic cancer cell death and regulating NF-κB signaling pathway in breast cancer. Cell Death & Disease, 14(7): 434.
Lin, Y.; Luo, L.; Chen, Y.; Zhang, X.; Wang, Z.; Yang, W.; Tong, M.; and Yu, R. 2024. ST-Align: A Multimodal Foundation Model for Image-Gene Alignment in Spatial Transcriptomics. arXiv:2411.16793.
Liu, A.; Feng, B.; Xue, B.; Wang, B.; Wu, B.; Lu, C.; Zhao, C.; Deng, C.; Zhang, C.; Ruan, C.; et al. 2024. Deepseek-v3 technical report.
Lu, M. Y.; Chen, B.; Williamson, D. F.; Chen, R. J.; Liang, I.; Ding, T.; Jaume, G.; Odintsov, I.; Le, L. P.; Gerber, G.; et al. 2024. A visual-language foundation model for computational pathology. Nature Medicine, 30: 863–874.
Luo, R.; Sun, L.; Xia, Y.; Qin, T.; Zhang, S.; Poon, H.; and Liu, T.-Y. 2022. BioGPT: generative pre-trained transformer for biomedical text generation and mining. Briefings in Bioinformatics, 23(6): bbac409.
Mejia, G.; Ca ́rdenas, P.; Ruiz, D.; Castillo, A.; and Arbela ́ez, P. 2023. SEPAL: Spatial Gene Expression Prediction from Local Graphs. In 2023 IEEE/CVF International Conference on Computer Vision Workshops (ICCVW), 2286–2295. Paris, France: IEEE. ISBN 979-8-3503-0744-3.
Min, W.; Shi, Z.; Zhang, J.; Wan, J.; and Wang, C. 2024. Multimodal contrastive learning for spatial gene expression prediction using histology images. Briefings in Bioinformatics, 25(6): bbae551.
Moses, L.; and Pachter, L. 2022. Museum of spatial transcriptomics. Nature Methods, 19(5): 534–546.
Oord, A. v. d.; Li, Y.; and Vinyals, O. 2018. Representation learning with contrastive predictive coding. arXiv preprint arXiv:1807.03748.
OpenAI. 2024. GPT-4o. https://openai.com. Accessed: 2025-01-17.
Pang, M.; Su, K.; and Li, M. 2021. Leveraging information in spatial transcriptomics to predict super-resolution gene expression from histology images in tumors. bioRxiv.
Radford, A.; Kim, J. W.; Hallacy, C.; Ramesh, A.; Goh, G.; Agarwal, S.; Sastry, G.; Askell, A.; Mishkin, P.; Clark, J.; Krueger, G.; and Sutskever, I. 2021. Learning Transferable Visual Models From Natural Language Supervision. In Meila, M.; and Zhang, T., eds., Proceedings of the 38th International Conference on Machine Learning, volume 139

of Proceedings of Machine Learning Research, 8748–8763. PMLR.
Sayers, E. W.; Beck, J.; Bolton, E. E.; Brister, J. R.; Chan, J.; Connor, R.; Feldgarden, M.; Fine, A. M.; Funk, K.; Hoffman, J.; et al. 2024. Database resources of the National Center for Biotechnology Information in 2025. Nucleic acids research, 53(D1): D20.
Schmauch, B.; Romagnoni, A.; Pronier, E.; Saillard, C.; Maill ́e, P.; Calderaro, J.; Kamoun, A.; Sefta, M.; Toldo, S.; Zaslavskiy, M.; Clozel, T.; Moarii, M.; Courtiol, P.; and Wainrib, G. 2020. A deep learning model to predict RNASeq expression of tumours from whole slide images. Nature Communications, 11(1): 3877.
Sta ̊hl, P. L.; Salme ́n, F.; Vickovic, S.; Lundmark, A.; Navarro, J. F.; Magnusson, J.; Giacomello, S.; Asp, M.; Westholm, J. O.; Huss, M.; Mollbrink, A.; Linnarsson, S.; Codeluppi, S.;  ̊Ake Borg; Ponte ́n, F.; Costea, P. I.; Sahle ́n, P.; Mulder, J.; Bergmann, O.; Lundeberg, J.; and Frise ́n, J. 2016. Visualization and analysis of gene expression in tissue sections by spatial transcriptomics. Science, 353(6294): 78–82.
Touvron, H.; Martin, L.; Stone, K.; Albert, P.; Almahairi, A.; Babaei, Y.; Bashlykov, N.; Batra, S.; Bhargava, P.; Bhosale, S.; et al. 2023. Llama 2: Open foundation and fine-tuned chat models.
Wang, H.; Du, X.; Liu, J.; Ouyang, S.; Chen, Y.-W.; and Lin, L. 2024. M2OST: Many-to-one Regression for Predicting Spatial Transcriptomics from Digital Pathology Images. arXiv:2409.15092.
Xie, R.; Pang, K.; Chung, S.; Perciani, C.; MacParland, S.; Wang, B.; and Bader, G. 2023. Spatially resolved gene expression prediction from histology images via bi-modal contrastive learning. Advances in Neural Information Processing Systems, 36: 70626–70637.
Yang, Y.; Hossain, M. Z.; Li, X.; Rahman, S.; and Stone, E. 2024a. Spatial Transcriptomics Analysis of Zero-Shot Gene Expression Prediction. In Linguraru, M. G.; Dou, Q.; Feragen, A.; Giannarou, S.; Glocker, B.; Lekadir, K.; and Schnabel, J. A., eds., Medical Image Computing and Computer Assisted Intervention – MICCAI 2024, 492–502. Cham: Springer Nature Switzerland. ISBN 978-3-031-72083-3.
Yang, Y.; Hossain, M. Z.; Stone, E.; and Rahman, S. 2024b. Spatial transcriptomics analysis of gene expression prediction using exemplar guided graph neural network. Pattern Recogn., 145(C).
Yang, Y.; Hossain, M. Z.; Stone, E. A.; and Rahman, S. 2023. Exemplar Guided Deep Neural Network for Spatial Transcriptomics Analysis of Gene Expression Prediction . In 2023 IEEE/CVF Winter Conference on Applications of Computer Vision (WACV), 5028–5037. Los Alamitos, CA, USA: IEEE Computer Society.
Zeng, Y.; Wei, Z.; Yu, W.; Yin, R.; Yuan, Y.; Li, B.; Tang, Z.; Lu, Y.; and Yang, Y. 2022. Spatial transcriptomics prediction from histology jointly through Transformer and graph neural networks. Briefings in Bioinformatics, 23(5): bbac297.
Zhang, W.; Chen, T.; Xu, W.; and Li, X. 2024a. SAMamba: Integrating State Space Model for Enhanced Multi-modal
Survival Analysis. In 2024 IEEE International Conference on Bioinformatics and Biomedicine (BIBM), 1334–1341. IEEE.
Zhang, W.; Hui, T. H.; Tse, P. Y.; Hill, F.; Lau, C.; and Li, X. 2024b. High-Resolution Medical Image Translation via Patch Alignment-Based Bidirectional Contrastive Learning. In International Conference on Medical Image Computing and Computer-Assisted Intervention, 178–188. Springer.
Zhang, W.; Liu, X.; Chen, T.; Xu, W.; Sakal, C.; Nie, X.; Wang, L.; and Li, X. 2025a. Bridging Imaging and Genomics: Domain Knowledge Guided Spatial Transcriptomics Analysis. Information Fusion, 103746.
Zhang, W.; Xu, W.; Chen, T.; Sakal, C.; and Li, X. 2025b. Integrating images and genomics for multi-modal cancer survival analysis via mixture of experts. Information Fusion, 103521.
Zhang, X.-X.; Luo, J.-H.; and Wu, L.-Q. 2022. FN1 overexpression is correlated with unfavorable prognosis and immune infiltrates in breast cancer. Frontiers in Genetics, 13: 913659.

---

## Processing Information

- **Processing Library:** Zotero PDFWorker
- **Processing Date:** 2026-02-10T18:13:58.436Z
- **Text Length:** 75118 characters
- **Success:** Text extraction completed
- **PDF Library Used:** Zotero PDFWorker
- **Pages Processed:** 16 of 16
