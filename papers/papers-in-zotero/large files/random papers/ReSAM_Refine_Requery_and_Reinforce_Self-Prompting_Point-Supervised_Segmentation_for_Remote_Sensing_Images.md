# PDF Document: Subhani - 2025 - ReSAM Refine, Requery, and Reinforce Self-Prompting Point-Supervised Segmentation for Remote Sensi.pdf

**File Path:** Subhani - 2025 - ReSAM Refine, Requery, and Reinforce Self-Prompting Point-Supervised Segmentation for Remote Sensi.pdf

**Processed Date:** 2026-02-10T18:16:45.984Z

**File Size:** 2880.83 KB

**Total Pages:** 10

**Extracted Pages:** 10

**PDF Library:** Zotero PDFWorker

**Attachment Item ID:** 3769

**Title:** ReSAM: Refine, Requery, and Reinforce: Self-Prompting Point-Supervised Segmentation for Remote Sensing Images

**Collection:** Large Files > Random Papers

---

## Extracted Text Content

ReSAM: Refine, Requery, and Reinforce: Self-Prompting Point-Supervised
Segmentation for Remote Sensing Images
M.Naseer Subhani
im.naseerr@gmail.com
Abstract
Interactive segmentation models such as the Segment Anything Model (SAM) have demonstrated remarkable generalization on natural images, but perform suboptimally on remote sensing imagery (RSI) due to severe domain shift and the scarcity of dense annotations. To address this, we propose a self-prompting, point-supervised framework that adapts SAM to RSIs using only sparse point annotations. Our method employs a Refine–Requery–Reinforce loop, where coarse pseudo-masks are generated from initial poin-
ts (Refine), improved with self-constructed box prompts (Requery), and embeddings are aligned across iterations to reduce confirmation bias (Reinforce). Without relying on full-mask supervision, our approach progressively enhances SAM’s segmentation quality and domain robustness through self-guided prompt adaptation. We evaluate our proposed method on three RSI benchmark datasets, including WHU, HRSID, and NWPU VHR-10, showing that our method consistently surpasses pretrained SAM and recent point--
supervised segmentation methods. Our results demonstrate that self-prompting and semantic alignment provide an efficient path towards scalable, point-level adaptation of foundation segmentation models for remote sensing applications.
1. Introduction
Annotating high-resolution satellite imagery remains prohibitively expensive; a single 10k×10k image can contain thousands of fine-grained objects. Nevertheless, accurate segmentation is crucial for application such as agriculture management, urban planning and environmental monitoring. Semantic segmentation of high resolution remote sensing images (RSIs) underpins these tasks. . However, training accurate segmentation models typically requires dense pixel-wise annotations, which are extremely cos-
tly and time-consuming to collect at a large scale [4, 6, 11, 20, 30, 31]. In contrast, point labels are far cheaper to obtain but inherently incomplete, lacking detailed object boundaries and spatial coverage [2]. The annotation bot
Figure 1. While Vanilla SAM depends on manual prompts (point and box), ReSAM introduces a self-prompting Refine–Requery–Reinforce (R3) loop that progressively refines coarse masks into prompted boxes and generates corresponding pseudo labels, enabling robust point-level adaptation without dense supervision.
Table 1. Pixel Leakage Analysis of SAM Model across Different Datasets. This table reports the percentage of leaked pixels (Overlap regions) on predicted output for each dataset and pointbased prompting setup.
Dataset 1-Point 2-Point 3-Point
NWPU VHR-10 [4] 4.2% 7.8% 11.3%
WHU Building[11] 1.2% 4.7% 10.5%
HRSID-Inshore [31] 15.2% 18.6% 18.4%
tleneck is exacerbated by the diverse nature of many satellite sensors, which further complicates the situation. Thus, there is a critical need for methods that can take advantage of point annotation to achieve precise segmentation on various RSI data. Foundation models have recently reshaped visual understanding by enabling prompt-driven, task-agnostic adaptation across diverse domains. Among them, the recently released Segment Anything Model (SAM) [13, 22] is a foun
arXiv:2511.21606v1 [cs.CV] 26 Nov 2025

dation model for image segmentation trained on billions of masks across millions of images. SAM’s promptable design (accepting points and boxes) and its impressive zeroshot capabilities on many natural image tasks[23, 26] make it a promising starting point for segmenting remote sensing images[18, 21, 35]. Early exploration [3, 7, 25, 36] have shown that SAM can generalize to aerial and orbital images: for instance, ROS-SAM [25] fine-tunes SAM with LoRA, enhances the mask decoder with multi-scale -
and boundary detail features, and redesigns the training and inference pipeline tailored to remote sensing. RS-Prompter [3] learns to generate prompt embeddings tailored for remote sensing categories, allowing SAM to produce semantically meaningful instance masks. However, SAM predicts each mask independently given its prompt, without awareness of other objects. Consequently, it may produce overlapping or fragmented masks in cluttered remote sensing scenes as shown in Fig. 2. Each prediction is lo-
cally accurate but globally inconsistent, which poses a fundamental limitation when segmenting densely packed RSI objects. Tab. 1 shows the overlap regions across each instances, highlighting pixels leakage, assuming that each pixels belong to a single object. This information can guide mask refinement.
Hence, despite their methodological advances in adapting SAM to remote sensing domains, these methods remain fully supervised, requiring dense per-pixel segmentation labels. To address this, several methods [14, 37] have applied a self-training approach utilizing both box and point prompts, but point prompts remain the most efficient option for annotation, especially for densely packed objects in RSIs. Importantly, SAM’s mask decoder is vulnerable to semantic ambiguity when using only point clicks-
; a single point in a crowded scene can cause multiple nearby objects to merge into one mask.
To address the aforementioned challenges, recent studies [15, 32, 33] have explored a self-training approach using point prompts as minimal supervision. Among them, PointSAM [15] advances this idea by introducing negative prompts and instance prototype alignment, demonstrating that point-supervised SAM can substantially outperform the original SAM on remote sensing datasets. However, such methods often rely on maintaining large prototype banks for feature alignment, which is memory-intensive and s-
cales poorly to large datasets. In contrast, we propose ReSAM, a self-prompting, point-supervised framework that converts sparse point input into informative box prompts and iteratively refines predictions through a RefineRequery-Reinforce loop. This design enhances both instance consistency and domain robustness without requiring dense labels or a large memory load. Box prompts typically yield better results than point prompts, as they provide stronger spatial priors that guide the model towards -
precise object boundaries, while single points offer only coarse lo
Figure 2. Visualization of overlap regions where pixel leakage occurs across each instance; inference on SAM model.
calization cues. To mitigate such inconsistency and reduce confirmation bias, we introduce a Soft Semantic Alignment (SSA). Instead of relying on static prototype banks, SSA maintains a rolling queue of mask embeddings and enforces a soft cosine-similarity constraint to align instance features across augmented views. This lightweight design encourages semantic consistency while avoiding the memory cost associated with prototype clustering. In summary, our contributions are as follows.
• ReSAM: A point-only self-prompting framework that iteratively converts sparse points into high-quality box prompts via a closed-loop Refine–Requery–Reinforce (R3) strategy, eliminating dense supervision. • We introduce a Soft Semantic Alignment (SSA) strategy that aligns mask embeddings via a rolling queue and cosine similarity [34], ensuring semantic consistency across iterations while avoiding the heavy memory cost of prototype-based methods. • ReSAM achieves consistent improvements across WHU-
, HRSID, and NWPU VHR-10 datasets, outperforming vanilla SAM and prior point-supervised methods, demonstrating robust adaptation to diverse remote sensing domains.
2. Related Works
SAM as Backbone Adaptation: Vision foundation models like SAM have shown remarkable generalization due to large-scale pretraining. The original Segment Anything Model [13] trained on a large dataset and supports flexible prompts such as points and boxes. While SAM performs well on natural images, direct application to remote sensing images (RSIs) is limited by domain-specific characteristics like high resolution, variable scale, and objects’ spatial diversity. To address this, several studies

[7, 17, 19, 21, 29, 38, 40] have adapted SAM for remote sensing. For example, Zero-to-One-Shot [21] explored combining SAM with multimodel prompts, including language guidance, to segment aerial imagery with minimal manual input. SAM-DC [7] uses FastSAM’s [41] encoder to extract powerful features and a convolution on an adapter to focus on change-related ground objects. RSSAM [38] incorporates multiscale feature fusion and an encoder adapter tailored for satellite imagery, which improved segmenta-
tion accuracy on high-resolution scenes. These works underline that, while SAM is a powerful backbone, careful adaptation is needed for domain shift in remote sensing imagery.
Sparse Point Supervision: Point-level supervision is an efficient strategy to reduce annotation cost in remote sensing, as annotators only click a few points per object [1, 2, 12]. However, sparse points do not provide a full object contour, making direct model training challenging. Several methods [9, 15, 28, 32] have leveraged SAM to generate a pseudo-mask from points. For example, PENet [2], which uses a SAM branch to expand point labels into pseudo-mask via feature-similarity propagation. SAPN-
et [32] uses Multiple Instance Learning (MIL) to select semantically relevant mask proposals from SAM. PointSAM [15] developed a self-training SAM that relies solely on point prompts, introducing negative prompt calibration and prototype alignment to correct noisy pseudo-labels. These studies highlight that sparse cues can be effectively leveraged, but careful strategies are needed to compensate for missing contour information.
Self-Training with Embedding Alignment: Selftraining leverages pseudo-labels from unlabeled data to improve segmentation performance. In remote sensing, SAM’s zero-shot predictions from point approaches can serve as initial pseudo-labels, but naive self-training may propagate errors. Prior approaches [5, 15, 39] mitigate this with feature alignment and consistency regularization. ProDA [39] addresses the problem of noisy pseudo labels and dispersed target features. They utilize consistency across -
augmentation help from a tighter cluster in feature space, improving adaptation. WDASS [5] designed asymmetric alignment to preserve target domain structure rather than forcing all feature into the source domain’s distribution. PointSAM [15] also utilized feature alignment across the target domain distribution. These methods achieve promising results but lack due to heavy cost of memory intake for feature alignment, limited their access to large target datasets. Our method simplifies this by Soft -
Semantic Alignment (SSA) strategy that maintains a queue of recent object embedding and enforcing similarity across views. Combined with high-confidence pseudo-masks selection, this ensures that the model learns from reliable signal while limiting error accumulation.
3. Methodology
3.1. Preliminaries
Segment Anything Model: [13] is a promptable image segmentation model. Given an input image x ∈ RH×W ×3 and a user prompt p (e.g., point or box), SAM predicts a segmentation mask Mˆ ∈ [0, 1]H×W .
Mˆ = φm φi(x; θi), φp(p; θp); θm (1)
where φi is SAM’s encoder, a large Vision Transformer (ViT) pretrained on natural images; φp is the prompt encoder; and φm is the mask decoder. However, SAM’s generalization to remote sensing images (RSIs) is limited due to domain shift.
Weak–Strong Dual-View Setting: Each training image x is augmented twice:
xw = tw(x), xs = ts(x), (2)
where tw and ts denote weak and strong transformations. The weak view xw produces pseudo masks, which are then converted into self-prompts used to supervise strong view xs:
φm(φi(xw), φp(p)) ≈ φm(φi(xs), φp(p∗)), (3)
where p∗ denotes the automatically generated selfprompt. This weak–strong consistency forms the basis of our self-prompting mechanism.
Low-Rank Adaptation (LoRA). To efficiently adapt SAM to RSI domains, we employ Low-Rank Adaptation (LoRA) [10]. For a pretrained weight matrix θ ∈ Rdout×din , LoRA introduces low-rank updates and decomposes it into two low-rank matrices A and B.
θˆ = θ + AB, A ∈ Rdout×r, B ∈ Rr×din , (4)
where r ≪ min(dout, din). Only A and B are trainable, while θ remains frozen. We inject LoRA into the query, key, and value projections of SAM’s transformer blocks. This allows the model to capture domain-specific attention patterns while preserving the pretrained structure.
3.2. Overview of ReSAM
We propose ReSAM (Refine, Requery, and Reinforce), a self-prompting, point-supervised segmentation framework that adapts SAM to diverse data like RSI’s using only sparse point labels. Unlike existing methods that rely on dense mask supervision, ReSAM introduces a Requery refinement loop and semantic feature alignment to improve segmentation quality and prevent confirmation bias. The ReSAM pipeline in Fig.3 comprises three main stages.

Figure 3. Overview of ReSAM. Weak and strong views generate pseudo masks and self-prompts to iteratively refine SAM outputs. The pipeline includes Refine (clean instance masks), Requery (self-prompting), and Reinforce (Soft Semantic Alignment) with LoRA adaptation for domain-specific learning.
• Refine: Initial masks are generated from point prompts, filtered based on overlap between initial mask instances, and used to derive compact instance regions. • Requery: The model automatically generates box prompts from refined regions and re-queries SAM to obtain higher-quality masks. • Reinforce: Instance-level features are aligned across training iterations using a Soft Semantic Alignment (SSA) to stabilize pseudo-labels and mitigate drift.
3.3. Refine: Point-to-Region Initialization
Given a weakly augmented image Iw, ensuring invariance to simple transformations, and sparse point prompts P + = {pi}, typically provided by weak supervision, the
pretrained SAM generates masks Mˆ :
Mˆ = Φm(Φi(Iw), Φp(P +)). (5)
For each instance, given the probabilistic output of an instance segmentation model, each pixel (i, j) is associated with a K-dimensional probability vector:
Mˆ ij = [Mˆ (1)
ij , Mˆ (2)
ij , . . . , Mˆ (K)
ij ], (6)
where Mˆ (k)
ij ∈ [0, 1] denotes the predicted probability of pixel (i, j) belonging to instance k. The pixel-wise entropy is computed as:
Hij = −
K
X
k=1
Mˆ (k)
ij log Mˆ (k)
ij . (7)
where Hij is the entropy at spatial coordinates (i, j). This quantity captures the model’s uncertainty at each spatial location: low entropy indicates confident predictions, while high entropy indicates ambiguous pixels.
We then threshold the entropy to retain confident pixels:
M ̃ (k)
ij =
(1, if Hij < ε,
0, otherwise,
k = 1, . . . , K (8)
where ε is a tunable threshold controlling the trade-off between precision and recall, and M ̃ij defines confident pixels. Next, we remove overlapping pixels to keep only pixels belonging to a single instance:
Oij =
K
X
k=1
M ̃ (k)
ij . (9)
M ref,(k)
ij =
(1, if M ̃ (k)
ij = 1 and Oij = 1,
0, otherwise,
(10)
for k = 1,. . . ,K. This guarantees that each pixel contributes to only one instance, preventing cross-object leakage. The resulting masks are clean and instance-specific, suitable as region cues for requerying.
3.4. Requery: Self-Prompting with Box Generation
We employ a self-prompting mechanism that automatically re-queries SAM using the pseudo masks generated in the refinement stage. For each instance M ̃ (k)
ij , we compute its minimal enclosing bounding box:
B = Box(M ̃ (k)
ij ), (11)

and use it as a new prompt PB = {B} to re-query SAM under weak augmentation Iw:
Mr = Φmask(Φimg(Iw), Φprompt(PB)). (12)
This self-prompting step effectively converts uncertain point supervision and removes noise in pseudo-label generation into structured region queries, producing refined and context-aware masks that act as pseudo ground truth for training.
3.5. Reinforce: Soft Semantic Alignment
Although re-querying improves spatial precision, it can amplify errors when pseudo labels are unstable. To mitigate this confirmation bias, we adopt a Soft Semantic Alignment (SSA) strategy, which regularizes instance feature embeddings across iterations. Given the embeddings of objects from the current iteration, we first stack them into a memory queue q containing embeddings from recent iterations. Let fi denote the i-th embedding in the queue. We then compute pairwise cosine similarities among -
all embeddings in the queue:
Sij = f ⊤
i fj
|fi||fj| , Sii = 0, (13)
where setting Sii = 0 avoids self-similarity. To control the sharpness of the similarity distribution, we apply a temperature scaling factor τ :
pij = exp(Sij/τ )
P
k̸=i exp(Sik/τ ) . (14)
The Soft Semantic Alignment (SSA) loss then minimizes the discrepancy between embeddings weighted by their semantic affinity:
LSSAL = 1
N
X
i
X
j ̸= i(1 − Sij), pij. (15)
By comparing each embedding against all others in the queue, SSA encourages semantically similar objects to maintain consistent representations, preventing feature drift across self-prompt iterations. The memory queue not only stabilizes training but also enables the model to consolidate semantic prototypes over time, ensuring robust learning even from imperfect pseudolabels.
3.6. Total Objective
We optimize a composite loss integrating segmentation and semantic stability, overall, we minimize:
Ltotal = αLfocal + Ldice + Liou + βLSSAL, (16)
where Lfocal, Ldice, and Liou supervise pixel-wise mask quality, and LSSAL enforces cross-iteration feature consistency.
4. Experiments and Results
4.1. Datasets
We evaluate our proposed method on multiple instance level remote sensing benchmark datasets using minimal point supervision. Our experiments demonstrate that selfprompting significantly improves the segmentation accuracy for SAM. We conduct experiments on three different datasets: • NWPU VHR-10: dataset [4] consists of 800 very-high resolution optical images (10 Object classes). Following prior work, we treat the problem as class-agnostic instance segmentation and use 520 images for training and -
130 for testing which are a positive subset of this dataset. • HRSID: dataset [31] is a SAR ship instance dataset focusing on inshore scenes with high clutter. We used 459 images for training purposes and 250 for testing images in the inshore split. • WHU: dataset [11] is a large-scale building segmentation dataset with high spatial resolution (0.075m). We used the standard training/validation split provided with the dataset, which splits the data into 4736 for training and 1036 for testing.
4.2. Experimental Settings
Annotation Protocol: For all experiments, we use sparse point supervision only. We randomly sample positive and negative points from GT mask for each instance (same as our baseline [15]). We experiment with 1,2, and 3 points sampled per instance. No annotated full mask or box was provided to the model during training.
Baselines and Competitors: We compare our method to several baselines for weakly supervised and recent pointbased segmentation for SAM. We compare our method with Direct test a pretrained SAM without adaptation, prompted with ground-truth points. Self-Training [16] uses studentteacher structure without any regularizers. WeSAM [37], DePT [8] and Tribe [27] representative source-free domain adaptation utilized prompt-based direction feeding during training without source data. PointSAM [15] employs -
Prototype-based self-training method that uses FINCH[24] clustering and negative prompt calibration. Additionally, we also report the Supervised upper bound, Full-mask finetuning (LoRA) to indicate the upper limit.
Metrics We report mIoU and F1 as our metrics. mIoU is calculated from the GT segmentation mask and the predicted mask of each instance.
Backbone: We build on the SAM[13] ViT-B image encoder and Hiera-B+ from SAM2 [22].

Table 2. Comparison of baseline methods on the NWPU VHR-10 test set. Best results are shown in blue bold, and second-best in lighter blue.
Method
SAM-based SAM2-based
1-Point 2-Point 3-Point 1-Point 2-Point 3-Point
IoU F1 IoU F1 IoU F1 IoU F1 IoU F1 IoU F1
Direct test [13] 58.06 68.80 63.93 74.92 60.98 71.95 58.28 69.43 62.68 73.87 61.76 73.39
Self-Training [16] 63.94 74.11 65.34 76.05 60.47 71.94 59.62 70.38 63.63 74.36 61.86 73.27
DePT [8] 64.97 74.47 67.13 74.35 64.92 75.82 58.85 69.22 63.98 75.28 63.62 74.58
Tribe [27] 64.27 73.79 64.56 75.60 60.84 71.39 61.59 71.86 65.54 76.05 67.02 77.76
WeSAM [37] 64.85 75.28 64.86 76.00 66.03 76.73 58.89 70.32 69.77 79.83 67.24 78.35
PointSAM [15] 66.66 76.03 67.03 77.42 67.98 78.57 62.26 73.66 70.00 80.22 69.05 80.27
ReSAM (Ours) 68.65 77.87 70.47 80.14 71.66 81.26 64.28 75.42 71.25 82.15 70.47 82.56
Supervised [15] 78.73 86.74 80.88 88.58 81.12 88.79 81.76 88.48 83.14 90.11 83.41 90.32
Table 3. Comparison of baseline methods on the WHU test set. Best results are shown in blue bold, and second-best in lighter blue.
Method
SAM-based SAM2-based
1-Point 2-Point 3-Point 1-Point 2-Point 3-Point
IoU F1 IoU F1 IoU F1 IoU F1 IoU F1 IoU F1
Direct test [13] 61.03 70.69 65.10 74.76 59.71 69.46 59.97 70.79 65.79 76.31 62.45 73.01
Self-Training [16] 64.91 73.99 68.49 77.57 59.57 69.35 65.01 75.38 68.60 78.60 68.74 77.43
DePT [8] 71.31 79.41 73.69 81.21 73.53 81.47 69.52 77.86 74.33 82.27 73.91 81.88
Tribe [27] 65.55 74.61 71.17 79.56 69.14 77.81 66.67 76.16 72.00 80.81 72.58 81.53
WeSAM [37] 66.29 75.12 74.09 82.07 69.91 78.45 66.16 75.86 72.02 81.08 74.23 82.79
PointSAM [15] 72.63 80.39 76.47 84.10 77.54 85.23 73.69 81.21 76.95 84.55 75.16 83.91
ReSAM (Ours) 73.43 81.25 77.18 85.84 76.14 83.87 74.54 83.75 77.56 86.35 74.15 81.89
Supervised [15] 77.15 84.55 79.73 86.78 80.54 87.49 78.75 85.97 80.40 87.50 88.18 88.70
Implementation Details: We fine-tune the LoRA module of SAM image encoder with rank=4. Only LoRA parameters are updated with Adam optimizer across all experiments. To validate our method with limited resources, training is performed with learning rate of 5 × 10−4, weight decay 1 × 10−4 on RTX 3060 with batch size of 1. We set α and β in Eq.16 to 20 and 0.1 for focal loss and SSA loss, respectively. An instance embedding queue q (FIFO) of length 32 is maintained. Embedding features are L2normalized-
 before being pushed the o queue. From augmented strategy in [37] we apply both strong and weak augmentation for better domain adaptation. To maintain the soft alignment of top instance object embedding, we set τ to 0.05. For entropy threshold ε, we set it to 0.3.
4.3. Quantitative Results
Tables 2–4 compare ReSAM with state-of-the-art promptbased segmentation methods on NWPU VHR-10, WHU, and HRSID-Inshore. ReSAM consistently outperforms SAM- and SAM2-based baselines, demonstrating strong generalization and effective pseudo-label adaptation. On NWPU VHR-10, it surpasses all competitors, with gains up to +2.0 IoU and +1.8 F1 over PointSAM, and performance improves steadily from 1- to 3-point inputs, narrowing the gap with fully supervised models to under 12 IoU points. On WHU, ReSAM -
achieves top results in most settings, particularly under 2-point prompts, though 3-point SAM2 slightly reduces precision due to redundant spatial priors. On HRSID-Inshore, single-point performance is highest,

Table 4. Comparison of baseline methods on the HRSID-Inshore test set. Best results are shown in blue bold, and second-best in lighter blue.
Method
SAM-based SAM2-based
1-Point 2-Point 3-Point 1-Point 2-Point 3-Point
IoU F1 IoU F1 IoU F1 IoU F1 IoU F1 IoU F1
Direct test [13] 46.56 56.06 37.80 48.34 28.32 37.57 35.40 46.14 37.26 49.07 34.89 46.75
Self-Training [16] 47.44 58.92 38.90 49.99 29.19 39.19 37.39 47.56 44.14 56.42 42.46 54.99
DePT [8] 50.19 58.74 43.52 55.58 34.73 46.08 55.18 67.86 54.76 68.04 54.13 67.17
Tribe [27] 51.22 61.43 42.32 53.39 32.61 42.77 42.12 55.12 46.51 59.90 39.19 51.11
WeSAM [37] 50.50 62.53 41.95 53.58 35.51 46.54 47.61 60.02 47.70 60.77 45.30 59.06
PointSAM [15] 56.06 68.38 57.79 70.50 59.37 72.43 52.45 65.11 55.79 68.82 58.83 71.98
ReSAM (Ours): 58.75 71.09 54.59 66.15 42.59 54.66 56.15 69.23 57.65 70.41 55.71 68.41
Supervised [15] 63.29 75.32 65.89 77.65 66.70 78.50 67.45 78.56 70.83 81.61 71.72 82.42
Figure 4. Qualitative results on the NWPU, WHU and HRSID remote sensing dataset. The column from left to right show the input image with points, full labeled ground truth, Direct test on SAM and with our baseline methods. Our proposed method ReSAM demonstrates boundary accuracy and continuity compared to baselines, especially in complex and detailed regions.

but multi-point prompts show instability likely caused by cluttered backgrounds and small objects. Overall, ReSAM delivers consistent gains across datasets, validating its refined pseudo-label generation and re-prompting strategy.
5. Ablation Studies
We perform an ablation to isolate the influence of each component of ReSAM.
Effect of Overlap Suppression The ablation results in Table 5 show that each component of our framework contributes to suppressing overlapping or ambiguous masks. Self-training provides an initial improvement over Direct SAM, but adding Requery yields a larger gain by repeatedly resolving uncertain regions and reducing boundary conflicts. SSA offers a complementary boost by enforcing softer semantic consistency in feature space, which helps prevent redundant or overlapping predictions. Fine-tuning-
 with LoRA further stabilizes these corrections, outperforming Adapter and LayerNorm-based alternatives. The full ReSAM model, which combines Requery, SSA, and LoRA, achieves the highest mIoU (73.4%, +13.4) on WHU dataset, especially for 1 point prompts, demonstrating that spatial requerying, semantic alignment, and efficient parameter tuning jointly produce stronger overlap suppression and more accurate final masks.
Table 5. The effect of core components (WHU dataset, 1-point prompt). The ∆ column shows improvement in mIoU compared to the baseline.
Variant mIoU ∆
Baseline (Direct SAM) 61.0 + Self-Training only 64.9 +3.9 + Self-Training + Requery (no SSA) 69.4 +8.4 + Self-Training + SSA (no Requery) 69.1 +8.1 Full w/o LoRA (Adapter) 71.2 +10.2 Full w/o Memory Queue 72.8 +11.8 Full ReSAM (Requery + SSA + LoRA) 73.4 +13.4
Importance of Semantic Consistency
To evaluate the effectiveness of the proposed Semantic Spatial Alignment (SSA) module, we conduct an ablation study on the HRSID and WHU datasets across the first five training epochs. As shown in Fig. 5, integrating SSA consistently improves segmentation performance on both benchmarks. On HRSID, the model with SSA achieves higher mIoU at every epoch, increasing from 46.8% to 58.4%, whereas the baseline without SSA plateaus around 55% and even declines after epoch 3. This demonstrates that
Figure 5. Ablation results of the proposed Soft Semantic Alignment (SSA) module on HRSID and WHU. SSA consistently improves mIoU across epochs, showing better feature alignment and more stable performance compared to the w/o SSA.
SSA effectively mitigates feature misalignment in highresolution scenes, leading to more stable optimization. A similar trend is observed on WHU: adding SSA boosts performance from 61.0% to 73.4%, outperforming the w/o SSA setting which saturates near 69.4%. The sharper improvement on WHU indicates that SSA particularly benefits datasets with large-scale structural variations by enforcing better spatial–semantic consistency. Overall, these results confirm that SSA provides a robust enhancement to -
feature alignment and yields consistent gains in segmentation accuracy across datasets.
6. Conclusion
We presented ReSAM, a self-prompting, point-supervised framework that converts sparse point annotations into high-quality box prompts through an iterative Refine–Requery–Reinforce (R3) loop. Coupled with Soft Semantic Alignment (SSA), ReSAM ensures semantic consistency while avoiding dense supervision and heavy memory costs. Experiments on WHU, HRSID, and NWPU VHR-10 demonstrate robust adaptation and improved segmentation over vanilla SAM and prior pointsupervised methods. ReSAM relies on careful -
tuning of the iterative loop and may be less effective in extremely cluttered scenes or for objects with highly irregular shapes.
References
[1] Amy Bearman, Olga Russakovsky, Vittorio Ferrari, and Li Fei-Fei. What’s the point: Semantic segmentation with point supervision. In European conference on computer vision, pages 549–565. Springer, 2016. 3

[2] Sixian Chan, Wangjie Zhou, Yanjing Lei, Chao Li, Jie Hu, and Feng Hong. Sparse point annotations for remote sensing image segmentation. Scientific Reports, 15(1):27347, 2025. 1, 3 [3] Keyan Chen, Chenyang Liu, Hao Chen, Haotian Zhang, Wenyuan Li, Zhengxia Zou, and Zhenwei Shi. Rsprompter: Learning to prompt for remote sensing instance segmentation based on visual foundation model. IEEE Transactions on Geoscience and Remote Sensing, 62:1–17, 2024. 2
[4] Gong Cheng, Peicheng Zhou, and Junwei Han. Learning rotation-invariant convolutional neural networks for object detection in vhr optical remote sensing images. IEEE transactions on geoscience and remote sensing, 54(12):74057415, 2016. 1, 5 [5] Anurag Das, Yongqin Xian, Dengxin Dai, and Bernt Schiele. Weakly-supervised domain adaptive semantic segmentation with prototypical contrastive learning. In Proceedings of the IEEE/CVF Conference on Computer Vision and Pattern Recognition, pages 15434–15-
443, 2023. 3 [6] Ilke Demir, Krzysztof Koperski, David Lindenbaum, Guan Pang, Jing Huang, Saikat Basu, Forest Hughes, Devis Tuia, and Ramesh Raskar. Deepglobe 2018: A challenge to parse the earth through satellite images. In The IEEE Conference on Computer Vision and Pattern Recognition (CVPR) Workshops, 2018. 1 [7] Lei Ding, Kun Zhu, Daifeng Peng, Hao Tang, Kuiwu Yang, and Lorenzo Bruzzone. Adapting segment anything model for change detection in vhr remote sensing images. IEEE Transactions on Geo-
science and Remote Sensing, 62:1–11, 2024. 2, 3 [8] Yunhe Gao, Xingjian Shi, Yi Zhu, Hao Wang, Zhiqiang Tang, Xiong Zhou, Mu Li, and Dimitris N Metaxas. Visual prompt tuning for test-time domain adaptation. arXiv preprint arXiv:2210.04831, 2022. 5, 6, 7
[9] Zonghao Guo, Fang Wan, Mingxiang Liao, Yidan Zhang, and Qixiang Ye. Discriminatively matched part tokens for pointly supervised instance segmentation. International Journal of Computer Vision, pages 1–18, 2025. 3
[10] Edward J Hu, Yelong Shen, Phillip Wallis, Zeyuan AllenZhu, Yuanzhi Li, Shean Wang, Lu Wang, Weizhu Chen, et al. Lora: Low-rank adaptation of large language models. ICLR, 1(2):3, 2022. 3 [11] Shunping Ji, Shiqing Wei, and Meng Lu. Fully convolutional networks for multisource building extraction from an open aerial and satellite imagery data set. IEEE Transactions on geoscience and remote sensing, 57(1):574–586, 2018. 1, 5 [12] Beomyoung Kim, Joonhyun Jeong, Dongyoon Han, and Sung Ju Hwang. The-
 devil is in the points: Weakly semisupervised instance segmentation via point-guided mask representation. In Proceedings of the IEEE/CVF Conference on Computer Vision and Pattern Recognition, pages 1136011370, 2023. 3 [13] Alexander Kirillov, Eric Mintun, Nikhila Ravi, Hanzi Mao, Chloe Rolland, Laura Gustafson, Tete Xiao, Spencer Whitehead, Alexander C Berg, Wan-Yen Lo, et al. Segment anything. In Proceedings of the IEEE/CVF International Conference on Computer Vision, pages 4015–4026, 2023. 1, 2-
, 3, 5, 6, 7
[14] Aishik Konwer, Zhijian Yang, Erhan Bas, Cao Xiao, Prateek Prasanna, Parminder Bhatia, and Taha Kass-Hout. Enhancing sam with efficient prompting and preference optimization for semi-supervised medical image segmentation. In Proceedings of the Computer Vision and Pattern Recognition Conference, pages 20990–21000, 2025. 2 [15] Nanqing Liu, Xun Xu, Yongyi Su, Haojie Zhang, and HengChao Li. Pointsam: Pointly-supervised segment anything model for remote sensing images. IEEE Transactions on Geoscie-
nce and Remote Sensing, 2025. 2, 3, 5, 6, 7
[16] YC Liu, CY Ma, Z He, CW Kuo, K Chen, P Zhang, B Wu, Z Kira, and P Vajda. Unbiased teacher for semi-supervised object detection. arxiv 2021. arXiv preprint arXiv:2102.09480. 5, 6, 7 [17] Zhuoran Liu, Zizhen Li, Ying Liang, Claudio Persello, Bo Sun, Guangjun He, and Lei Ma. Rsps-sam: A remote sensing image panoptic segmentation method based on sam. Remote Sensing, 16(21):4002, 2024. 3 [18] Muying Luo, Tao Zhang, Shiqing Wei, and Shunping Ji. Sam-rsis: Progressively adapting sam with box prompti-
ng to remote sensing image instance segmentation. IEEE Transactions on Geoscience and Remote Sensing, 2024. 2
[19] Xianping Ma, Qianqian Wu, Xingyu Zhao, Xiaokang Zhang, Man-On Pun, and Bo Huang. Sam-assisted remote sensing imagery semantic segmentation with object and boundary constraints. IEEE Transactions on Geoscience and Remote Sensing, 2024. 3
[20] Emmanuel Maggiori, Yuliya Tarabalka, Guillaume Charpiat, and Pierre Alliez. Can semantic labeling methods generalize to any city? the inria aerial image labeling benchmark. In 2017 IEEE International geoscience and remote sensing symposium (IGARSS), pages 3226–3229. IEEE, 2017. 1 [21] Lucas Prado Osco, Qiusheng Wu, Eduardo Lopes De Lemos, Wesley Nunes Gon ̧calves, Ana Paula Marques Ramos, Jonathan Li, and Jos ́e Marcato Junior. The segment anything model (sam) for remote sensing applications:-
 From zero to one shot. International Journal of Applied Earth Observation and Geoinformation, 124:103540, 2023. 2, 3
[22] Nikhila Ravi, Valentin Gabeur, Yuan-Ting Hu, Ronghang Hu, Chaitanya Ryali, Tengyu Ma, Haitham Khedr, Roman R ̈adle, Chloe Rolland, Laura Gustafson, et al. Sam 2: Segment anything in images and videos. arXiv preprint arXiv:2408.00714, 2024. 1, 5
[23] Saikat Roy, Tassilo Wald, Gregor Koehler, Maximilian R Rokuss, Nico Disch, Julius Holzschuh, David Zimmerer, and Klaus H Maier-Hein. Sam. md: Zero-shot medical image segmentation capabilities of the segment anything model. arXiv preprint arXiv:2304.05396, 2023. 2
[24] Saquib Sarfraz, Vivek Sharma, and Rainer Stiefelhagen. Efficient parameter-free clustering using first neighbor relations. In Proceedings of the IEEE/CVF conference on computer vision and pattern recognition, pages 8934–8943, 2019. 5
[25] Zhe Shan, Yang Liu, Lei Zhou, Cheng Yan, Heng Wang, and Xia Xie. Ros-sam: High-quality interactive segmentation for remote sensing moving object. In Proceedings of the Computer Vision and Pattern Recognition Conference, pages 3625–3635, 2025. 2

[26] Peilun Shi, Jianing Qiu, Sai Mu Dalike Abaxi, Hao Wei, Frank P-W Lo, and Wu Yuan. Generalist vision foundation models for medical imaging: A case study of segment anything model on zero-shot medical segmentation. Diagnostics, 13(11):1947, 2023. 2 [27] Yongyi Su, Xun Xu, and Kui Jia. Towards real-world testtime adaptation: Tri-net self-training with balanced normalization. In Proceedings of the AAAI Conference on Artificial Intelligence, pages 15126–15135, 2024. 5, 6, 7 [28] Chufeng Tang, Lin-
gxi Xie, Gang Zhang, Xiaopeng Zhang, Qi Tian, and Xiaolin Hu. Active pointly-supervised instance segmentation. In European Conference on Computer Vision, pages 606–623. Springer, 2022. 3 [29] Di Wang, Jing Zhang, Bo Du, Minqiang Xu, Lin Liu, Dacheng Tao, and Liangpei Zhang. Samrs: Scaling-up remote sensing segmentation dataset with segment anything model. Advances in Neural Information Processing Systems, 36:8815–8827, 2023. 3 [30] Syed Waqas Zamir, Aditya Arora, Akshita Gupta, Salman Khan, Guolei-
 Sun, Fahad Shahbaz Khan, Fan Zhu, Ling Shao, Gui-Song Xia, and Xiang Bai. isaid: A large-scale dataset for instance segmentation in aerial images. In Proceedings of the IEEE/CVF conference on computer vision and pattern recognition workshops, pages 28–37, 2019. 1 [31] Shunjun Wei, Xiangfeng Zeng, Qizhe Qu, Mou Wang, Hao Su, and Jun Shi. Hrsid: A high-resolution sar images dataset for ship detection and instance segmentation. Ieee Access, 8: 120234–120254, 2020. 1, 5 [32] Zhaoyang Wei, Pengfei Che-
n, Xuehui Yu, Guorong Li, Jianbin Jiao, and Zhenjun Han. Semantic-aware sam for point-prompted instance segmentation. In Proceedings of the IEEE/CVF conference on computer vision and pattern recognition, pages 3585–3594, 2024. 2, 3 [33] Xin-Jian Wu, Ruisong Zhang, Jie Qin, Shijie Ma, and Cheng-Lin Liu. Wps-sam: Towards weakly-supervised part segmentation with foundation models. In European Conference on Computer Vision, pages 314–333. Springer, 2024. 2
[34] Peipei Xia, Li Zhang, and Fanzhang Li. Learning similarity with cosine similarity ensemble. Information sciences, 307: 39–52, 2015. 2 [35] Zhiyuan Yan, Junxi Li, Xuexue Li, Ruixue Zhou, Wenkai Zhang, Yingchao Feng, Wenhui Diao, Kun Fu, and Xian Sun. Ringmo-sam: A foundation model for segment anything in multimodal remote-sensing images. IEEE Transactions on Geoscience and Remote Sensing, 61:1–16, 2023. 2 [36] Hui Yang, Zhipeng Jiang, Yaobo Zhang, Yanlan Wu, Heng Luo, Peng Zhang, and Biao Wang-
. A high-resolution remote sensing land use/land cover classification method based on multi-level features adaptation of segment anything model. International Journal of Applied Earth Observation and Geoinformation, 141:104659, 2025. 2 [37] Haojie Zhang, Yongyi Su, Xun Xu, and Kui Jia. Improving the generalization of segmentation foundation model under distribution shift via weakly supervised adaptation. In Proceedings of the IEEE/CVF Conference on Computer Vision and Pattern Recognition, pages 23-
385–23395, 2024. 2, 5, 6, 7
[38] Jie Zhang, Yunxin Li, Xubing Yang, Rui Jiang, and Li Zhang. Rsam-seg: A sam-based model with prior knowledge integration for remote sensing image semantic segmentation. Remote Sensing, 17(4):590, 2025. 3 [39] Pan Zhang, Bo Zhang, Ting Zhang, Dong Chen, Yong Wang, and Fang Wen. Prototypical pseudo label denoising and target structure learning for domain adaptive semantic segmentation. In Proceedings of the IEEE/CVF conference on computer vision and pattern recognition, pages 12414–12424, 2021.-
 3 [40] Yu Zhang, Xin Wang, Jingye Cai, and Qun Yang. Mw-sam: Mangrove wetland remote sensing image segmentation network based on segment anything model. IET Image Processing, 18(14):4503–4513, 2024. 3 [41] Xu Zhao, Wenchao Ding, Yongqi An, Yinglong Du, Tao Yu, Min Li, Ming Tang, and Jinqiao Wang. Fast segment anything. arXiv preprint arXiv:2306.12156, 2023. 3

---

## Processing Information

- **Processing Library:** Zotero PDFWorker
- **Processing Date:** 2026-02-10T18:16:45.984Z
- **Text Length:** 38261 characters
- **Success:** Text extraction completed
- **PDF Library Used:** Zotero PDFWorker
- **Pages Processed:** 10 of 10
