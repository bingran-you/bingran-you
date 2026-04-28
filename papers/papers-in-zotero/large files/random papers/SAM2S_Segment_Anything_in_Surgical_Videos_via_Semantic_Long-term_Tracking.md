# PDF Document: Liu et al. - 2025 - SAM2S Segment Anything in Surgical Videos via Semantic Long-term Tracking.pdf

**File Path:** Liu et al. - 2025 - SAM2S Segment Anything in Surgical Videos via Semantic Long-term Tracking.pdf

**Processed Date:** 2026-02-10T18:14:24.400Z

**File Size:** 6608.75 KB

**Total Pages:** 11

**Extracted Pages:** 11

**PDF Library:** Zotero PDFWorker

**Attachment Item ID:** 3637

**Title:** SAM2S: Segment Anything in Surgical Videos via Semantic Long-term Tracking

**Collection:** Large Files > Random Papers

---

## Extracted Text Content

SAM2S: Segment Anything in Surgical Videos via Semantic Long-term Tracking
Haofeng Liu1 Ziyue Wang1 Sudhanshu Mishra1 Mingqi Gao2 Guanyi Qin1 Chang Han Low1 Alex Y. W. Kong1 Yueming Jin1*
1National University of Singapore 2University of Sheffield
haofeng.liu@u.nus.edu, ymjin@nus.edu.sg
Abstract
Surgical video segmentation is crucial for computerassisted surgery, enabling precise localization and tracking of instruments and tissues. Interactive Video Object Segmentation (iVOS) models such as Segment Anything Model 2 (SAM2) provide prompt-based flexibility beyond methods with predefined categories, but face challenges in surgical scenarios due to the domain gap and limited longterm tracking. To address these limitations, we construct SA-SV, the largest surgical iVOS benchmark with instance-
level spatio-temporal annotations (masklets) spanning eight procedure types (61k frames, 1.6k masklets), enabling comprehensive development and evaluation for long-term tracking and zero-shot generalization. Building on SA-SV, we propose SAM2S, a foundation model enhancing SAM2 for Surgical iVOS through: (1) DiveMem, a trainable diverse memory mechanism for robust long-term tracking; (2) temporal semantic learning for instrument understanding; and (3) ambiguity-resilient learning to mitigate annot-
ation inconsistencies across multi-source datasets. Extensive experiments demonstrate that fine-tuning on SA-SV enables substantial performance gains, with SAM2 improving by 12.99 average J &F over vanilla SAM2. SAM2S further advances performance to 80.42 average J &F , surpassing vanilla and fine-tuned SAM2 by 17.10 and 4.11 points respectively, while maintaining 68 FPS real-time inference and strong zero-shot generalization. Code and dataset will be released at https://jinlab-imvr.github.io/SAM2-
S.
1. Introduction
Surgical video segmentation is crucial for computerassisted surgery, enabling precise localization and tracking of instruments, tissues, and anatomical structures within video sequences [27, 53]. This capability supports critical
*Corresponding author.
8 types 572 videos 61K frames 123K masks 1.6K masklets
(a) (b)
SAM2
SAM2S
DiveMem
Natural video
Surgical video
Duration: ~30s
Duration: ~2h
Long-term tracking
Tissue Instrument
TSL
ARL
Limited categories
Ambigious boundary
Short-term tracking
(c)
(d)
Unlimited categories
Clear boundary
Object feature
Figure 1. Overview of SA-SV benchmark and SAM2S framework. (a) Dataset scale comparison. (b) SA-SV benchmark distribution. (c) SAM2 for natural videos. (d) SAM2S for surgical videos with enhanced long-term tracking and domain-specific modules.
applications including intraoperative guidance and postoperative skill assessment, ultimately enhancing surgical precision and improving patient outcomes [15, 45]. However, existing segmentation models [37, 40] with predefined categories cannot adapt to the dynamic and diverse nature of surgical procedures, where surgeons need to interactively specify and track objects of interest. Recently, SAM2 [44] has significantly advanced iVOS, offering prompt-based interaction and temporal modeling for surg-
ical applications. It enables users to specify target regions through visual prompts (e.g., points, boxes, or masks) and generates masklets across the video through memory-based propagation. However, directly applying SAM2 to surgical scenarios faces substantial challenges in both dataset and methodology, as illustrated in Fig. 1.
arXiv:2511.16618v1 [cs.CV] 20 Nov 2025

From the dataset aspect, surgical scenes present a significant domain gap from natural environments due to their unique spatial and temporal characteristics: lighting variations and reflections, occlusions from blood and smoke, and substantially longer durations with dynamic scene variations [38]. Furthermore, existing surgical datasets suffer from inherent limitations that hinder iVOS model development: they lack comprehensive masklet annotations spanning diverse procedures, which are essential -
for temporal modeling and zero-shot generalization evaluation. Addressing these challenges requires a large-scale benchmark with masklet annotations spanning diverse surgical procedures, to facilitate comprehensive development and evaluation for long-term tracking and zero-shot generalization.
From the methodology aspect, SAM2 faces significant challenges in surgical scenarios, particularly in long-term tracking. Unlike natural videos that typically span seconds or minutes [13, 22], surgical procedures can last for hours [2]. Frequent camera motion and zooming in surgical videos further challenge SAM2’s memory mechanism, leading to tracking failures when objects disappear or reappear over extended durations. Beyond these temporal challenges, instrument segmentation introduces another le-
vel of difficulty. While surgical instruments have limited categories with consistent semantic properties across procedures, SAM2’s class-agnostic paradigm cannot leverage this semantic information to maintain consistent longterm tracking. For tissue segmentation, boundaries between anatomical structures are inherently ambiguous due to similar textures and overlapping regions. This challenge is compounded by annotation inconsistencies across multisource datasets, where boundaries of identical tiss-
ues may be labeled differently due to varying medical standards across countries and institutions.
To address these limitations, we first construct SA-SV (Segment Anything in Surgical Video), the largest-scale benchmark for surgical iVOS to the best of our knowledge, as illustrated in Fig. 1(a,b). Building on SA-SV, we propose SAM2S, a foundation model that preserves SAM2’s core architecture while incorporating surgical-specific adaptations. SAM2S integrates specialized memory mechanisms, temporal semantic learning, and ambiguity-resilient learning to achieve robust long-term tracking across mu-
lti-source datasets while maintaining real-time inference. The main contributions of this paper include:
• SA-SV Benchmark: We construct the largest surgical iVOS benchmark with masklet annotations across eight procedure types, comprising 61k frames and 1.6k masklets from 17 open-source datasets, enabling comprehensive development and evaluation for long-term tracking and zero-shot generalization.
• DiveMem for Long-term Tracking: We propose a Diverse Memory (DiveMem) mechanism that employs hy
brid temporal sampling during training and diversitybased frame selection during inference, addressing viewpoint overfitting in long-term surgical tracking.
• TSL for Semantic Understanding: We introduce Temporal Semantic Learning (TSL) that leverages semantic categories of surgical instruments through visionlanguage contrastive learning, enabling semantic-aware tracking while preserving class-agnostic generalization. • ARL for Multi-source Training: We introduce Ambiguity-Resilient Learning (ARL) that handles annotation inconsistencies across multi-source datasets through uniform label softening, improving model calibration and robustness at ambiguou-
s tissue boundaries.
2. Related Work
Interactive Video Object Segmentation. Video Object Segmentation (VOS) aims to segment and track objects across video sequences [11, 17, 31, 52]. Beyond traditional semi-supervised VOS requiring complete first-frame masks [12, 35, 39, 42], interactive VOS (iVOS) enables users to specify targets with lightweight prompts such as points or scribbles [21, 50]. SAM2 [44] represents a stateof-the-art iVOS framework integrating promptable segmentation with memory-augmented temporal modeling for masklet p-
ropagation. However, adapting iVOS from natural to surgical videos poses significant challenges due to domain gaps, inherent datasets limitations, and the sustained demands on temporal modeling and memory mechanisms. Surgical Video Segmentation Datasets. Surgical videos present unique challenges, including complex lighting conditions, frequent occlusions, instrument deformation, and extended procedure duration [1]. Current surgical video datasets (e.g., EndoVis17 [5], CholecSeg8k [24], AutoLaparo -
[49]) primarily provide frame-level masks for semantic segmentation, lacking masklet annotations with temporal consistency required for iVOS. Additionally, these datasets typically focus on single procedure types, limiting crossprocedure generalization. Aggregating multi-source surgical datasets also introduces annotation inconsistencies due to varying labeling standards, particularly in ambiguous regions such as tissue boundaries [25]. These gaps motivate the construction of a comprehensive surgi-
cal iVOS benchmark with consistent masklet annotations and specialized learning strategies for handling annotation ambiguity.
Memory Management for SAM2. SAM2 maintains a memory bank of historical frames to ensure temporal consistency, but its finite capacity makes long-term modeling susceptible to target loss and error accumulation in extended videos. Training-free methods such as SAMURAI [51], DAM4SAM [48], and SAM2Long [14] improve memory utilization through dynamic frame selection, preserving generality without trainable long-term modeling. Surgical adaptations, including SurgicalSAM2 [33] and

Table 1. Dataset composition in the SA-SV benchmark. Columns “Instrument” and “Tissue” show the number of masks. “–” indicates unavailable annotations. ”Avg. Dur. (s)” denotes the average video length in seconds.
Dataset Video Frame Instrument Tissue Masklet Avg. Dur. (s)
Training set
ART-Net - 816 816 - - BKAI-IGH - 1000 - 1176 - DSAD-I - 4177 - 4864 - Endoscapes - 468 936 1288 - Kvasir-SEG - 1000 - 1064 - RoboTool - 514 1008 - - AutoLaparo 300 1800 2905 1057 738 6 CholecSeg8k 45 4338 21136 6242 300 4 CIS-Train 10 19029 31416 - 77 1903 ClinicDB 29 612 - 647 32 21 DSAD-V 76 4390 - 4248 91 58 GraSP 13 3449 9025 - 130 265 Total 473 41593 67242 20586 1368 
Test set
CIS-Test 4 7229 10971 - 31 1807 EndoVis17 3 900 2265 - 10 300 EndoVis18 4 596 1676 807 28 149 Hyst-YT 6 1973 4113 - 19 329 PolypGen 21 2037 - 1761 24 19 RARP50 10 3252 10656 - 81 325 SurgAI3.8k 51 3817 - 3817 51 75 Total 99 19804 29681 6385 244 
ReSurgSAM2 [34], optimize memory mechanisms for surgical scenarios. While training-free methods preserve generality, they cannot capture the domain-specific temporal dependencies and semantic characteristics of surgical videos, motivating our trainable adaptation approach that learns surgical-specific patterns.
3. SA-SV Benchmark
To address the domain gap and inherent dataset limitations for surgical iVOS development as discussed in Section 1, we propose the SA-SV benchmark, the largest surgical iVOS benchmark with comprehensive masklet annotations spanning diverse surgical procedures. SA-SV comprises over 61k frames and 1.6k masklets across eight procedure types with instrument and tissue annotations, enabling comprehensive model development and zero-shot evaluation. Notably, SA-SV includes long-duration test subsets (e.g-
., CIS-Test: 1807s1, RARP50: 325s) that are substantially longer than general VOS benchmarks, facilitating long-term tracking assessment. Key statistics are summarized in Table 1, with full statistics provided in the supplementary material.
Dataset Reconstruction and Refinement. Since existing surgical semantic segmentation datasets lack masklet an
1All durations in parentheses refer to average video duration.
notations, we refined them by converting their original object masks into masklets through three key steps: (1) assigning each object a unique, temporally consistent instance ID for tracking across frames, (2) standardizing instrument class labels across datasets following clinical guidelines [46] (while keeping tissue class labels unchanged), and (3) manually correcting missing or erroneous masks under the supervision of a qualified surgeon. For CholecSeg8k alone, over 20,000 object masks with er-
roneous boundaries were corrected. Importantly, no new object masks were introduced beyond correcting annotation errors. Dataset Composition. As shown in Table 1, our SASV benchmark was built from open-source surgical video datasets covering seven distinct procedures and one multiprocedural collection, including: 1. Cholecystectomy: Endoscapes [3, 36], CholecSeg8k [24], CholecInstanceSeg (CIS) [2]; 2. Colonoscopy: PolypGen [4], Kvasir-SEG [26], BKAIIGH [29], CVC-ClinicDB [9]; 3. Gynecology: SurgAI-
3.8k [54]; 4. Hysterectomy: AutoLaparo [49], ART-Net [20], Hyst-YT [16]; 5. Myotomy: DSAD [10]; 6. Nephrectomy: Endovis17 (EV17) [5], Endovis18 (EV18) [6]; 7. Prostatectomy: GraSP [7, 8, 47], RARP50 [41]; 8. Multi-procedural: RoboTool [18].
Dataset Utilization. For training, we employ a mixed image-video training strategy to maximize data utilization across diverse surgical scenarios following SAM2. DSAD is partitioned into image and video subsets (DSAD-I and DSAD-V), while CIS-Train (1903s) and GraSP (265s) provide enough long-duration videos for long-term model development. For evaluation, our dataset split enables a comprehensive assessment of zero-shot generalization capabilities across instruments and tissues, with all test subs-
ets remain unseen during training. EV17 and EV18 represent nephrectomy, a surgical procedure type completely unseen in training, enabling assessment of zero-shot generalization across surgical procedure types. We further split EV18 into EV18-I and EV18-T to separately evaluate instrument and tissue segmentation performance. For long-term tracking evaluation, we adopt four datasets with extended average duration (≥300s): EV17 (300s), Hyst-YT (329s), RARP50 (325s), and CIS-Test (1807s≈30min). These -
surgical datasets are substantially longer than general VOS benchmarks such as SA-V [44] (14s), MOSEv2 [13] (19s), LVOS [22] (95s), and LVOSv2 [23] (68s), enabling the evaluation of surgical long-term tracking.
4. Methodology
4.1. SAM2 Background and Method Overview
SAM2 extends SAM [28] to videos through temporal memory attention and a queue-based short-term memory mechanism that conditions current frame features on the initial

ligature
⋯
...
Predicted mask
CLIP text encoder
Memory attention
Memory bank
DiveMem filter for inference
∆
Long–term memory bank
...
...
Candidate buffer = { | > }
Update
Image
encoder Mask decoder
Prompt encoder
points
grasper scissors suction
⋯
box mask
DiveMem filter
Long-term memory
Short-term memory
Instrument bank
DiveMem sampling for training
Sequential sampling
Random sampling
Training video sequence
+
Long/short/conditional temporal embedding
... ... ......
DiveMem sampling ARL
Gaussian kernel ( , ′)
Prediction
GT mask y
Condition Long-term learning Short-term learning
SAM2S
Image stream
Ambiguity-resilient learning
Cosine similarity
Figure 2. Overview of SAM2S for surgical video segmentation. DiveMem handles long-term tracking, TSL enhances semantic understanding, and ARL addresses annotation ambiguity.
frame and recent predictions. For each frame, the mask decoder generates IoU scores iout for mask quality estimation. While SAM2 demonstrates strong performance in general domains, it faces limitations in surgical scenarios: (1) insufficient long-term tracking, (2) inability to leverage instrument semantic information, and (3) unable to handle annotation ambiguities across multi-source datasets. To address these challenges, we propose SAM2S (as illustrated in Fig. 2), which enhances SAM2 through t-
hree key innovations developed with our SA-SV. Given a surgical video sequence {ft}tT=1 where ft ∈ R3×H×W and initial prompts p1 provided in the first frame, our goal is to generate temporally consistent binary segmentation masks {mt}tT=1 where mt ∈ RH×W . Our framework integrates: DiveMem for enhanced long-term tracking, TSL for instrument semantic understanding, and ARL for handling annotation ambiguities. These innovations are unified through:
Ltotal = λarlLarl + Liou + Ldice + Locc + λtslLtsl (1)
where Liou, Ldice, Locc are standard SAM2 losses, while Larl and Ltsl address annotation ambiguity and provide semantic supervision with λarl and λtsl as balancing weights.
4.2. Diverse Memory for Long-term Tracking
Surgical videos typically feature long durations with frequent camera motion and zooming. However, SAM2’s greedy strategy of selecting only recent frames as memory hampers long-term tracking, causing redundancy and potential viewpoint overfitting [14]. Consequently, SAM2
struggles to maintain robust performance when tracked objects disappear for extended periods. While training-free memory enhancements [14, 48] offer plug-and-play deployment, they cannot learn temporal dependencies crucial for extended surgical procedures. To address these limitations, we propose DiveMem, enhancing SAM2’s memory capabilities through both training and inference strategies. DiveMem Sampling. During training, we randomly sample three frames across the entire video, with one designate-
d as the conditional frame and two as long-term memory frames equipped with specialized learnable temporal embeddings. The remaining five frames are consecutive non-conditional frames. This hybrid sampling strategy simulates large temporal gaps during inference, enabling robust long-term dependency learning across diverse temporal contexts. DiveMem Filter. During inference, we select long-term memory frames when the target is stably present for ∆ = 5 consecutive frames with iout > γiou to form a c-
andidate buffer B, where γiou is the IoU confidence threshold. From this buffer, we select the most diverse candidate based on cosine similarity to the latest long-term memory frame:
b∗ = arg min
bi ∈B
E(bi) · E(lk)
|E(bi)||E(lk)| (2)
where E(·) is the image encoder, bi is the i-th candidate frame, lk is the latest frame in long-term memory bank L, and b∗ is the selected most diverse frame. This strategy aggregates diverse spatio-temporal information to mitigate viewpoint overfitting while minimizing error accumulation

through high-confidence frames. Selected frames are augmented with learnable temporal embeddings, and the buffer is cleared after selection to extend temporal coverage. To enhance efficiency, we maintain a queue with capacity Nl for long-term memory while permanently retaining the initial memory l0. By combining SAM2’s vanilla shortterm memory that spans the most recent six frames with our diverse long-term memory, SAM2S maintains a reliable and diverse memory bank for robust tracking.
4.3. Temporal Semantic Learning
Most existing VOS methods adopt class-agnostic designs that rely primarily on pixel-level correlations while neglecting semantic information. However, surgical scenarios present a unique opportunity to leverage semantic cues: surgical instruments have limited and well-defined categories with consistent semantic properties across procedures [46], making them ideal for semantic learning. In contrast, anatomical tissues exhibit numerous overlapping categories that are harder to distinguish semantical-
ly. Building on this insight, our SA-SV benchmark provides comprehensive coverage of instrument categories, enabling the development of semantic-aware VOS methods specifically tailored for surgical instrument tracking. The TSL module employs a learnable CLS token xc that first attends to memory features to capture the historical semantic context of the tracked object, then performs crossattention with current frame features to generate temporal semantic representation x′c. To strengthen semantic d-
iscrimination, we integrate CLIP’s text encoder [43] for visionlanguage contrastive learning, enabling the model to distinguish the tracked object from all semantic categories in the dataset. The TSL loss is defined as:
Ltsl = − log exp(sim(x′c, tpos)/τ )
PK
k=1 exp(sim(x′c, tk)/τ )
!
(3)
where K is the total number of instrument categories, tpos denotes the positive text features corresponding to the object’s semantic category, and τ is the temperature parameter. For samples without semantic labels, Ltsl is omitted. During inference, the text encoder can be omitted for efficiency.
4.4. Ambiguity-Resilient Learning
Multi-source surgical datasets exhibit annotation inconsistencies due to varying standards across institutions, particularly at ambiguous tissue boundaries. These inconsistencies create conflicting supervision signals, resulting in overconfident predictions and poor model calibration in safetycritical surgical applications [19]. To address this challenge, we propose ARL to tackle annotation uncertainty through uniform label softening. The principle is to transform discrete annotation spaces into c-
ontinuous probability distributions. For hard labels yt, we apply Gaussian kernel Gσ
convolution to obtain softened labels yˆt:
yˆt(u, v) =
X
i,j
Gσ(u − i, v − j) · yt(i, j) (4)
where Gσ(u′, v′) = 1
2πσ2 exp − (u′)2+(v′)2
2σ2 is the Gaus
sian kernel, (u, v) is the target pixel position, (i, j) is neighboring coordinates, and σ controls the softening degree with a 5 × 5 kernel. The ARL loss uses focal loss [32] between predicted probability and softened labels:
Larl = FocalLoss( ˆmt, yˆt) (5)
where ˆmt is the predicted mask probability.
5. Experiments
5.1. Experimental Settings
Prompting and Evaluation Protocol. To better align with real-world usage, we adopt a challenging protocol: prompt once, track throughout, where prompts are provided only in the first frame, and the model autonomously tracks the object throughout the sequence. We use 3-click initialization by default unless otherwise specified. The click placement follows SAM2’s interactive scheme [44]: the first click is placed at the mask center, with subsequent clicks positioned at error region centers for itera-
tive refinement. For evaluation, we use the standard iVOS metric J &F , the mean of region accuracy (J ) and boundary accuracy (F). FPS is also reported to assess inference efficiency, measured during end-to-end processing on a single A6000 GPU.
Model and Training Configuration. SAM2S is implemented based on the SAM2 architecture with a Hiera-B+ backbone, initialized from SAM2 pre-trained weights. The model was trained for 30 epochs with a learning rate of 1 × 10−5 using mixed image–video training (1:4 ratio), where image datasets were used for interactive image segmentation and video datasets with masklets for iVOS training. Video sampling used a 1:1 ratio of DiveMem and SAM2 vanilla strategies. All experiments were conducted on four NVI-
DIA A6000 GPUs.
Hyperparameter Details. We set: ∆ = 5 (candidate buffer size), γiou = 0.95 (IoU threshold), Nl = 4 (long-term memory capacity), λarl = 20 and λtsl = 0.1 (loss balancing), σ = 1.0 (Gaussian kernel Gσ), and τ = 100 (contrastive temperature, following OVSeg [30]).
5.2. Comparative Experiment
We quantitatively compared SAM2S against: (1) SAM2; (2) SAM2+Cutie combining SAM2 for initialization with the advanced VOS method Cutie [12]; (3) SAM2-based methods enhanced with training-free memory management (SAM2Long [14], DAM4SAM [48], SAMURAI [51]); (4)

Table 2. Performance comparison of iVOS methods under zero-shot evaluation with 3-click initialization. Top: Vanilla models; Bottom: Models fine-tuned on SA-SV. All models benefit from SA-SV fine-tuning, with SAM2S achieving the best performance.
Model Resolution Instrument Tissue Average FPS EV17 EV18-I RARP50 Hyst-YT CIS-Test EV18-T SurgAI3.8k Polypgen
SAM2 1024 75.37 82.36 48.46 73.92 42.51 59.02 64.66 60.23 63.32 26 SAM2+Cutie 1024 68.68 79.35 66.22 82.17 80.44 67.12 63.43 54.12 70.19 53 SAM2Long 1024 72.31 74.42 42.66 70.05 36.39 55.66 66.09 64.16 60.22 11 DAM4SAM 1024 72.42 70.71 39.69 68.28 36.91 70.98 65.01 61.52 60.69 24 SAMURAI 1024 68.54 67.73 40.00 64.09 31.40 63.88 64.62 60.75 57.63 12 SurgicalSAM2 1024 72.94 77.26 47.95 71.58 42.83 59.17 63.82 60.67 62.03 27 MedSAM2 512 61.43 60.08 29.24 62.58 31.71 7.76 28.37 60.03 42.65 80
SAM2 512 81.96 79.89 76.51 83.89 80.09 66.71 75.29 66.15 76.31 69 SAM2+Cutie 512 73.78 75.29 74.61 78.65 86.98 58.98 78.59 63.03 73.74 53 SAM2Long 512 77.74 78.91 65.50 78.60 63.79 57.44 76.07 66.26 70.54 22 DAM4SAM 512 76.26 78.09 61.09 73.94 62.95 72.03 74.68 65.19 70.53 63 SAMURAI 512 70.46 74.75 60.41 74.46 59.53 66.47 75.44 63.73 68.16 22 SurgicalSAM2 512 81.88 80.80 76.25 81.54 79.90 67.04 74.86 66.29 76.07 71 SAM2S (ours) 512 86.72 82.37 79.47 87.46 89.65 72.29 79.09 66.30 80.42 68
Table 3. Performance comparison of iVOS methods under zero-shot settings with 1-click initialization.
Model Resolution Instrument Tissue Average EV17 EV18-I RARP50 Hyst-YT CIS-Test EV18-T SurgAI3.8k Polypgen
SAM2 1024 61.32 67.96 43.74 64.95 40.34 62.84 51.51 37.44 53.76 SAM2+Cutie 1024 60.37 68.50 66.62 68.70 79.26 58.52 53.60 37.99 61.70 SAM2Long 1024 59.84 61.66 38.55 63.39 35.24 62.86 52.13 41.81 51.94 DAM4SAM 1024 62.74 66.90 38.25 60.11 35.93 62.59 52.28 43.00 52.73 SAMURAI 1024 59.73 56.90 34.99 57.48 29.05 62.54 52.93 38.79 49.05 SurgicalSAM2 1024 61.47 70.44 43.05 64.66 39.07 62.97 51.84 36.97 53.81 MedSAM2 512 60.74 58.90 29.11 60.16 29.79 5.14 22.05 55.71 40.20
SAM2 512 78.09 75.71 72.25 79.27 80.50 65.14 69.21 61.36 72.69 SAM2+Cutie 512 71.78 71.08 71.72 81.94 86.61 43.37 72.12 61.43 70.01 SAM2Long 512 68.23 71.27 57.34 78.63 62.66 65.62 69.18 60.41 66.67 DAM4SAM 512 72.07 76.24 58.15 71.42 61.22 63.77 68.64 60.23 66.47 SAMURAI 512 65.33 69.56 53.60 73.34 59.69 65.72 68.87 59.46 64.45 SurgicalSAM2 512 76.20 73.48 71.99 79.35 80.62 65.25 68.94 62.78 72.33 SAM2S (ours) 512 83.76 79.64 79.11 86.54 88.48 65.79 75.91 65.36 78.07
MedSAM2 [55] adapted for medical imaging; (5) SurgicalSAM2 [33] optimized for surgical scenarios.
We conducted comprehensive comparisons with the state-of-the-art iVOS methods across multiple surgical datasets in the SA-SV benchmark under two configurations: (1) SAM2-based models using their vanilla pretrained weights at resolution 1024 for optimal performance, and (2) models fine-tuned on SA-SV at 512 resolution for efficiency. All SAM2-based models used the Hiera-B+ backbone. MedSAM2 operates at 512, while Cutie utilizes 480p (short side) according to the default configurations. For clinical-
 practicality, we primarily evaluated 3-click and 1-click initialization in Tables 2 and 3, with 5-click, box, and mask
variants detailed in the supplementary materials.
Zero-shot Generalization. All subsets in our SA-SV test set are completely unseen during training, enabling rigorous evaluation of models’ zero-shot generalization across diverse surgical procedures. Tables 2 and 3 present results under 3-click and 1-click initialization across eight test subsets, with “Average” denoting average J &F across all test subsets. The vanilla SAM2-based models achieve limited performance, with SAM2 reaching only 63.32 average J &F. MedSAM2, despite being fine-tuned on e-
xtensive general medical data, achieves only 42.65 points, revealing a substantial domain gap between general medical data and surgical data. In contrast, fine-tuning on SA-SV yields

Ground truth Ours SAM2 (FT) SAM2 (vanilla)
150s 220s 280s 350s 410s 560s
SAM2Long (FT)
FN
FP
FN
FP FP FN
FP
FP
FN
FP
FP FP FP FN
FN
480s
FP
FP FN FP
(a) (b) (c) (d) (e) (f) (g)
Figure 3. Qualitative comparison between SAM2 (vanilla), SAM2 (FT), SAM2Long (FT), and SAM2S on RARP50. Frame indices indicate timestamps in seconds, spanning from 150s to 560s (410s duration).
FP
FN
FP
Ground truth Ours SAM2 (FT) SAM2 (vanilla)
SAM2Long (FT)
1s 30s 70s 110s 140s (a) (b) (c) (d) (e)
Figure 4. Qualitative comparison on EndoVis18 (140s duration).
significant gains across all methods, highlighting the importance of surgical-specific training data. Notably, SAM2S consistently outperforms all other methods, achieving 80.42 and 78.07 in average J &F under 3-click and 1-click settings at 68 FPS. This represents improvements of 24.31 and 17.10 points over vanilla SAM2, and 5.38 and 4.11 points over fine-tuned SAM2. Moreover, SAM2S maintains superior performance even on the unseen nephrectomy procedure type (EV17 and EV18), further validating its-
 crossprocedure generalization capability.
Long-term Tracking Analysis. In both vanilla and finetuning settings, training-free long-term memory methods
(SAM2Long, DAM4SAM, SAMURAI) perform comparably on tissue datasets but show degradation compared to SAM2 on instrument datasets, as shown in Tables 2, 3 (e.g., EV17, RARP50, Hyst-YT, and CIS-Test). This failure stems from inherent characteristics of surgical videos: frequent camera motion and zooming cause instruments to disappear for extended periods, requiring the model to maintain temporal context for accurate re-identification. However, training-free methods discard frames without visible targ-
ets, losing critical temporal cues and leading to false positive detections of visually similar objects. Moreover, uncertainty-based (SAM2Long) or distractor-driven (DAM4SAM) selection strategies might introduce additional noise in visually ambiguous surgical scenes. In contrast, DiveMem employs trainable diversity-based sampling, maintaining both diverse long-term memory and complete short-term memory to preserve a comprehensive temporal context that the training-free approaches fail to maintain.-
 On long-duration datasets (EV17: 300s, RARP50: 325s, Hyst-YT: 329s, CIS-Test: 1809s≈30min), SAM2S achieves consistent improvements of 4.76, 2.96, 3.57, and 9.56 J &F over fine-tuned SAM2. While SAM2+Cutie shows competitive performance on CIS-Test, SAM2S still surpasses it by 2.67 J &F under the 3-click setting. The consistent improvements demonstrate the effectiveness of SAM2S for robust long-term surgical tracking. Qualitative Analysis. Figs. 3 and 4 compare SAM2S with vanilla SAM2, fine-tuned S-
AM2, and fine-tuned SAM2Long across challenging surgical scenarios from RARP50 and EndoVis18 under 3-click initialization. Vanilla SAM2 exhibits frequent false positives (FP) and false negatives (FN) in challenging scenarios with lighting

Table 4. Performance comparison across various prompts.
Model 1-click 3-click 5-click BBox GT mask
SAM2 (vanilla) 53.76 63.32 66.21 65.46 66.99
SAM2 72.69 76.31 76.75 76.06 77.07 SAM2Long 66.67 70.54 71.94 71.73 72.76 SurgicalSAM2 72.33 76.07 76.79 75.86 77.31 SAM2S (ours) 78.07 80.42 80.94 81.13 81.52
Table 5. Comparison between training on the in-domain dataset and the proposed SA-SV.
Model Resolution EV17 EV18-I RARP
SAM2 (vanilla) 512 63.11 72.17 52.73 SAM2 (specialist) 512 71.66 77.23 81.23 SAM2 (SA-SV) 512 81.96 79.89 76.51 SAM2S (SA-SV) 512 86.72 82.37 79.47
variations and dynamic scene changes. Fine-tuned SAM2 shows improved robustness over vanilla SAM2, yet still struggles with consistent long-term tracking, particularly during prolonged instrument occlusions. Notably, as shown in Figs. 3(d,f) and 4(e), fine-tuned SAM2Long exhibits a higher frequency of false positives compared to fine-tuned SAM2, as discarding target-absent frames loses temporal context essential for distinguishing visually similar objects in surgical scenes. In contrast, SAM2S mai-
ntains accurate segmentation and target identity throughout extended videos, validating that SA-SV and the proposed modules are essential for robust long-term surgical tracking. More quality comparisons are provided in the appendix. Multi-prompt Analysis. Table 4 compares the performance across various prompt types, where the values represent the average J &F across all subsets in the SA-SV test set. The results demonstrate SAM2S’s consistent superiority across all prompt types, from minimal 1-cli-
ck to detailed mask initialization. This consistent improvement over both vanilla SAM2 and fine-tuned SAM2-based methods demonstrates that SAM2S comprehensively outperforms existing approaches in surgical environments because of our SA-SV and proposed modules.
Comparison with In-domain Fine-tuning. Table 5 compares vanilla SAM2, specialist SAM2 (fine-tuned and evaluated on each in-domain dataset), and both SAM2 and SAM2S fine-tuned on SA-SV. SAM2 fine-tuned on SASV matches the performance of in-domain specialist models, indicating that SA-SV effectively provides comprehensive coverage across surgical scenarios. SAM2S further surpasses fine-tuned SAM2 and achieves superior performance to most specialist models, with notable improvements of 15.06 and 5.14-
 J &F on EV17 and EV18-I. These results demonstrate that a single SAM2S model trained on SA-SV
Table 6. Comparison between different resolutions.
Model Resolution EV17 EV18-I RARP EV18-T Avg FPS
SAM2 (vanilla)
1024 75.37 82.36 48.46 59.02 66.30 26 512 63.11 72.17 52.73 46.44 58.61 69
SAM2Long (vanilla)
1024 72.31 74.42 42.66 55.66 61.26 11 512 65.07 74.18 40.46 52.26 58.09 22
Table 7. Ablation study under 3-click setting. “Avg” denotes the mean performance across all subsets in this table.
SA-SV DiveMem TSL ARL EV17 EV18-I CIS-Test EV18-T Avg
63.11 72.17 56.03 46.44 59.44 ✓ 81.96 79.89 80.09 66.71 77.16 ✓ ✓ 85.07 81.54 85.07 68.73 80.10 ✓ ✓ 83.51 79.81 88.41 69.46 80.30 ✓ ✓ ✓ 86.17 81.42 88.04 70.44 81.52 ✓ ✓ ✓ ✓ 86.72 82.37 89.65 72.29 82.76
generalizes well across diverse surgical scenarios without requiring dataset-specific fine-tuning.
5.3. Detail Analysis and Ablation Study
Resolution Analysis. Table 6 presents a performance comparison of SAM2 and SAM2Long at different resolutions using vanilla pretrained weights. Both methods demonstrate stronger zero-shot capability at 1024 resolution compared to 512, explaining why the vanilla SAM2-based methods use higher resolution. However, SAM2 runs at only 26 FPS at 1024 resolution, limiting real-time applicability. In contrast, our SAM2S at 512 resolution achieves 68 FPS while maintaining superior performance (Table 2), maki-
ng it more suitable for real-time surgical scenarios. Ablation Study. We performed ablation studies to evaluate each component on representative test subsets, as shown in Table 7. Training on our refined SA-SV provides 17.72 average J &F improvement over vanilla SAM2, demonstrating the importance of domain-specific training data. The DiveMem contributes significantly with a 2.94 average J &F improvement, showing the importance of trainable long-term modeling and diverse temporal information during-
 inference. Without DiveMem, the TSL improves instrument tracking, especially 8.32 J &F in CIS-Test, confirming that semantic understanding enhances stability. The ARL provides consistent gains across subsets, confirming robustness to local annotation noise and partially mitigating cross-dataset inconsistencies. Together, our innovations collectively address core challenges in surgical iVOS.
6. Conclusion
We address surgical iVOS challenges through SA-SV benchmark and SAM2S model. SA-SV provides the first

large-scale surgical iVOS benchmark with masklet annotations across multiple procedures. SAM2S introduces three key innovations targeting surgical-specific limitations: DiveMem for long-term tracking, TSL for semantic understanding, and ARL for multi-source training robustness. Extensive experiments demonstrate its superior performance across diverse surgical scenarios, establishing a robust foundation for surgical video segmentation applications.
References
[1] Fatimaelzahraa Ali Ahmed, Mahmoud Yousef, Mariam Ali Ahmed, Hasan Omar Ali, Anns Mahboob, Hazrat Ali, Zubair Shah, Omar Aboumarzouk, Abdulla Al Ansari, and Shidin Balakrishnan. Deep learning for surgical instrument recognition and segmentation in robotic-assisted surgeries: a systematic review. Artificial Intelligence Review, 58(1):1, 2024. 2
[2] Oluwatosin Alabi, Ko Ko Zayar Toe, Zijian Zhou, Charlie Budd, Nicholas Raison, Miaojing Shi, and Tom Vercauteren. Cholecinstanceseg: A tool instance segmentation dataset for laparoscopic surgery. Scientific Data, 12(1):825, 2025. 2, 3 [3] Deepak Alapatt, Pietro Mascagni, Armine Vardazaryan, Alain Garcia, Nariaki Okamoto, Didier Mutter, Jacques Marescaux, Guido Costamagna, Bernard Dallemagne, and Nicolas Padoy. Temporally constrained neural networks (tcnn): A framework for semi-supervised video-
 semantic segmentation. arXiv preprint arXiv:2112.13815, 2021. 3
[4] Sharib Ali, Debesh Jha, Noha Ghatwary, Stefano Realdon, Renato Cannizzaro, Osama E Salem, Dominique Lamarque, Christian Daul, Michael A Riegler, Kim V Anonsen, et al. A multi-centre polyp detection and segmentation dataset for generalisability assessment. Scientific Data, 10(1):75, 2023. 3
[5] Max Allan, Alex Shvets, Thomas Kurmann, Zichen Zhang, Rahul Duggal, Yun-Hsuan Su, Nicola Rieke, Iro Laina, Niveditha Kalavakonda, Sebastian Bodenstedt, et al. 2017 robotic instrument segmentation challenge. arXiv preprint arXiv:1902.06426, 2019. 2, 3
[6] Max Allan, Satoshi Kondo, Sebastian Bodenstedt, Stefan Leger, Rahim Kadkhodamohammadi, Imanol Luengo, Felix Fuentes, Evangello Flouty, Ahmed Mohammed, Marius Pedersen, et al. 2018 robotic scene segmentation challenge. arXiv preprint arXiv:2001.11190, 2020. 3
[7] Nicola ́s Ayobi, Alejandra P ́erez-Rondo ́n, Santiago Rodr ́ıguez, and Pablo Arbela ́es. Matis: Masked-attention transformers for surgical instrument segmentation. In 2023 IEEE 20th International Symposium on Biomedical Imaging (ISBI), pages 1–5, 2023. 3 [8] Nicola ́s Ayobi, Santiago Rodr ́ıguez, Alejandra P ́erez, Isabela Hern ́andez, Nicola ́s Aparicio, Eug ́enie Dessevres, Sebasti ́an Pen ̃a, Jessica Santander, Juan Ignacio Caicedo, Nicola ́s Ferna ́ndez, and Pablo Arbel ́aez. Pixel-wise re-
cognition for holistic surgical scene understanding. arXiv, 2024. 3 [9] Jorge Bernal, F Javier Sa ́nchez, Gloria Fern ́andez-Esparrach, Debora Gil, Cristina Rodr ́ıguez, and Fernando Vilarin ̃o. Wm-dova maps for accurate polyp highlighting in
colonoscopy: Validation vs. saliency maps from physicians. Computerized medical imaging and graphics, 43: 99–111, 2015. 3 [10] Matthias Carstens, Franziska M Rinner, Sebastian Bodenstedt, Alexander C Jenke, J ̈urgen Weitz, Marius Distler, Stefanie Speidel, and Fiona R Kolbinger. The dresden surgical anatomy dataset for abdominal organ segmentation in surgical data science. Scientific Data, 10(1):1–8, 2023. 3 [11] Ho Kei Cheng and Alexander G Schwing. Xmem: Longterm video object segmentation with a-
n atkinson-shiffrin memory model. In European conference on computer vision, pages 640–658. Springer, 2022. 2 [12] Ho Kei Cheng, Seoung Wug Oh, Brian Price, Joon-Young Lee, and Alexander Schwing. Putting the object back into video object segmentation. In Proceedings of the IEEE/CVF Conference on Computer Vision and Pattern Recognition, pages 3151–3161, 2024. 2, 5 [13] Henghui Ding, Kaining Ying, Chang Liu, Shuting He, Xudong Jiang, Yu-Gang Jiang, Philip HS Torr, and Song Bai. Mosev2: A more challe-
nging dataset for video object segmentation in complex scenes. arXiv preprint arXiv:2508.05630, 2025. 2, 3
[14] Shuangrui Ding, Rui Qian, Xiaoyi Dong, Pan Zhang, Yuhang Zang, Yuhang Cao, Yuwei Guo, Dahua Lin, and Jiaqi Wang. Sam2long: Enhancing sam 2 for long video segmentation with a training-free memory tree. In Proceedings of the IEEE/CVF international conference on computer vision, 2025. 2, 4, 5 [15] Xiaofei Du, Maximilian Allan, Sebastian Bodenstedt, Lena Maier-Hein, Stefanie Speidel, Alessio Dore, and Danail Stoyanov. Patch-based adaptive weighting with segmentation and scale (pawss) for visual t-
racking in surgical video. Medical image analysis, 57:120–135, 2019. 1
[16] Zheng Fang, Xiaoming Qi, Chun-Mei Feng, Jialun Pei, Weixin Si, and Yueming Jin. Spatio-temporal representation decoupling and enhancement for federated instrument segmentation in surgical videos. arXiv preprint arXiv:2506.23759, 2025. 3
[17] Mingqi Gao, Feng Zheng, James JQ Yu, Caifeng Shan, Guiguang Ding, and Jungong Han. Deep learning for video object segmentation: a review. Artificial Intelligence Review, 56(1):457–531, 2023. 2 [18] Luis C Garcia-Peraza-Herrera, Lucas Fidon, Claudia D’Ettorre, Danail Stoyanov, Tom Vercauteren, and Sebastien Ourselin. Image compositing for segmentation of surgical tools without manual annotations. IEEE transactions on medical imaging, 40(5):1450–1460, 2021. 3 [19] Charley Gros, Andreanne Lemay,-
 and Julien Cohen-Adad. Softseg: Advantages of soft versus binary training for image segmentation. Medical image analysis, 71:102038, 2021. 5 [20] Md Kamrul Hasan, Lilian Calvet, Navid Rabbani, and Adrien Bartoli. Detection, segmentation, and 3d pose estimation of surgical tools using convolutional neural networks and algebraic geometry. Medical Image Analysis, 70: 101994, 2021. 3 [21] Yuk Heo, Yeong Jun Koh, and Chang-Su Kim. Interactive video object segmentation using global and local trans

fer modules. In European Conference on Computer Vision, pages 297–313. Springer, 2020. 2 [22] Lingyi Hong, Wenchao Chen, Zhongying Liu, Wei Zhang, Pinxue Guo, Zhaoyu Chen, and Wenqiang Zhang. Lvos: A benchmark for long-term video object segmentation. In Proceedings of the IEEE/CVF International Conference on Computer Vision, pages 13480–13492, 2023. 2, 3 [23] Lingyi Hong, Zhongying Liu, Wenchao Chen, Chenzhi Tan, Yuang Feng, Xinyu Zhou, Pinxue Guo, Jinglun Li, Zhaoyu Chen, Shuyong Gao, et al. Lvo-
s: A benchmark for largescale long-term video object segmentation. IEEE Transactions on Pattern Analysis and Machine Intelligence, 2025. 3 [24] W-Y Hong, C-L Kao, Y-H Kuo, J-R Wang, W-L Chang, and C-S Shih. Cholecseg8k: a semantic segmentation dataset for laparoscopic cholecystectomy based on cholec80. arXiv preprint arXiv:2012.12453, 2020. 2, 3
[25] Shishuai Hu, Zehui Liao, Jianpeng Zhang, and Yong Xia. Domain and content adaptive convolution based multisource domain generalization for medical image segmentation. IEEE Transactions on Medical Imaging, 42(1):233244, 2022. 2 [26] Debesh Jha, Pia H Smedsrud, Michael A Riegler, Pa ̊l Halvorsen, Thomas De Lange, Dag Johansen, and H ̊avard D Johansen. Kvasir-seg: A segmented polyp dataset. In International conference on multimedia modeling, pages 451462. Springer, 2019. 3 [27] Yueming Jin, Yang-
 Yu, Cheng Chen, Zixu Zhao, Pheng-Ann Heng, and Danail Stoyanov. Exploring intra-and inter-video relation for surgical semantic scene segmentation. IEEE Transactions on Medical Imaging, 41(11):2991–3002, 2022. 1
[28] Alexander Kirillov, Eric Mintun, Nikhila Ravi, Hanzi Mao, Chloe Rolland, Laura Gustafson, Tete Xiao, Spencer Whitehead, Alexander C Berg, Wan-Yen Lo, et al. Segment anything. In International Conference on Computer Vision, pages 4015–4026, 2023. 3 [29] Ngoc Lan. P. et al. neounet: Towards accurate colon polyp segmentation and neoplasm detection, 15–28, 2021. 3 [30] Feng Liang, Bichen Wu, Xiaoliang Dai, Kunpeng Li, Yinan Zhao, Hang Zhang, Peizhao Zhang, Peter Vajda, and Diana Marculescu. Open--
vocabulary semantic segmentation with mask-adapted clip. In Proceedings of the IEEE/CVF conference on computer vision and pattern recognition, pages 7061–7070, 2023. 5 [31] Yongqing Liang, Xin Li, Navid Jafari, and Jim Chen. Video object segmentation with adaptive feature bank and uncertain-region refinement. Advances in Neural Information Processing Systems, 33:3430–3441, 2020. 2
[32] Tsung-Yi Lin, Priya Goyal, Ross Girshick, Kaiming He, and Piotr Doll ́ar. Focal loss for dense object detection. In Proceedings of the IEEE international conference on computer vision, pages 2980–2988, 2017. 5 [33] Haofeng Liu, Erli Zhang, Junde Wu, Mingxuan Hong, and Yueming Jin. Surgical sam 2: Real-time segment anything in surgical video by efficient frame pruning. In Advancements In Medical Foundation Models: Explainability, Robustness, Security, and Beyond, 2024. 2, 6
[34] Haofeng Liu, Mingqi Gao, Xuxiao Luo, Ziyue Wang, Guanyi Qin, Junde Wu, and Yueming Jin. Resurgsam2: Referring segment anything in surgical video via credible long-term tracking. arXiv preprint arXiv:2505.08581, 2025. 3
[35] Yong Liu, Ran Yu, Fei Yin, Xinyuan Zhao, Wei Zhao, Weihao Xia, Jiahao Wang, Yitong Wang, Yansong Tang, and Yujiu Yang. Learning high-quality dynamic memory for video object segmentation. IEEE Transactions on Pattern Analysis and Machine Intelligence, 2025. 2
[36] Aditya Murali, Deepak Alapatt, Pietro Mascagni, Armine Vardazaryan, Alain Garcia, Nariaki Okamoto, Guido Costamagna, Didier Mutter, Jacques Marescaux, Bernard Dallemagne, et al. The endoscapes dataset for surgical scene segmentation, object detection, and critical view of safety assessment: Official splits and benchmark. arXiv preprint arXiv:2312.12429, 2023. 3
[37] Zhen-Liang Ni, Gui-Bin Bian, Guan-An Wang, Xiao-Hu Zhou, Zeng-Guang Hou, Hua-Bin Chen, and Xiao-Liang Xie. Pyramid attention aggregation network for semantic segmentation of surgical instruments. In Proceedings of the AAAI Conference on Artificial Intelligence, pages 1178211790, 2020. 1 [38] Zhen-Liang Ni, Xiao-Hu Zhou, Guan-An Wang, WenQian Yue, Zhen Li, Gui-Bin Bian, and Zeng-Guang Hou. Surginet: Pyramid attention aggregation and class-wise selfdistillation for surgical instrument segmentat-
ion. Medical Image Analysis, 76:102310, 2022. 2 [39] Seoung Wug Oh, Joon-Young Lee, Ning Xu, and Seon Joo Kim. Video object segmentation using space-time memory networks. In Proceedings of the IEEE/CVF international conference on computer vision, pages 9226–9235, 2019. 2 [40] Mingyang Ou, Heng Li, Haofeng Liu, Xiaoxuan Wang, Chenlang Yi, Luoying Hao, Yan Hu, and Jiang Liu. Mvd-net: Semantic segmentation of cataract surgery using multi-view learning. In IEEE EMBC, pages 5035–5038, 2022. 1 [41] Dimi-
trios Psychogyios, Emanuele Colleoni, Beatrice Van Amsterdam, Chih-Yang Li, Shu-Yu Huang, Yuchong Li, Fucang Jia, Baosheng Zou, Guotai Wang, Yang Liu, et al. Sar-rarp50: Segmentation of surgical instrumentation and action recognition on robot-assisted radical prostatectomy challenge. arXiv preprint arXiv:2401.00496, 2023. 3
[42] Guanyi Qin, Ziyue Wang, Daiyun Shen, Haofeng Liu, Hantao Zhou, Junde Wu, Runze Hu, and Yueming Jin. Structure matters: Revisiting boundary refinement in video object segmentation. In Proceedings of the IEEE/CVF International Conference on Computer Vision, 2025. 2
[43] Alec Radford, Jong Wook Kim, Chris Hallacy, Aditya Ramesh, Gabriel Goh, Sandhini Agarwal, Girish Sastry, Amanda Askell, Pamela Mishkin, Jack Clark, et al. Learning transferable visual models from natural language supervision. In International conference on machine learning, pages 8748–8763, 2021. 5 [44] Nikhila Ravi, Valentin Gabeur, Yuan-Ting Hu, Ronghang Hu, Chaitanya Ryali, Tengyu Ma, Haitham Khedr, Roman R ̈adle, Chloe Rolland, Laura Gustafson, et al. Sam 2: Segment anything in images and-
 videos. arXiv preprint arXiv:2408.00714, 2024. 1, 2, 3, 5

[45] Maria Robu, Abdolrahim Kadkhodamohammadi, Imanol Luengo, and Danail Stoyanov. Towards real-time multiple surgical tool tracking. Computer Methods in Biomechanics and Biomedical Engineering: Imaging & Visualization, 9(3): 279–285, 2021. 1
[46] Colleen J Rutherford. Differentiating surgical instruments. FA Davis, 2011. 3, 5 [47] Natalia Valderrama, Paola Ruiz, Isabela Hern ́andez, Nicola ́s Ayobi, Mathilde Verlyck, Jessica Santander, Juan Caicedo, Nicola ́s Ferna ́ndez, and Pablo Arbel ́aez. Towards holistic surgical scene understanding. In Medical Image Computing and Computer Assisted Intervention – MICCAI 2022, pages 442–452, Cham, 2022. Springer Nature Switzerland. 3 [48] Jovana Videnovic, Alan Lukezic, and Matej Kristan. A distr-
actor-aware memory for visual object tracking with sam2. In Proceedings of the Computer Vision and Pattern Recognition Conference, pages 24255–24264, 2025. 2, 4, 5 [49] Ziyi Wang, Bo Lu, Yonghao Long, Fangxun Zhong, TakHong Cheung, Qi Dou, and Yunhui Liu. Autolaparo: A new dataset of integrated multi-tasks for image-guided surgical automation in laparoscopic hysterectomy. In International Conference on Medical Image Computing and ComputerAssisted Intervention, pages 486–496. Springer, 2022. 2, 3 [-
50] Hallee E Wong, Marianne Rakic, John Guttag, and Adrian V Dalca. Scribbleprompt: fast and flexible interactive segmentation for any biomedical image. In European Conference on Computer Vision, pages 207–229. Springer, 2024. 2 [51] Cheng-Yen Yang, Hsiang-Wei Huang, Wenhao Chai, Zhongyu Jiang, and Jenq-Neng Hwang. Samurai: Adapting segment anything model for zero-shot visual tracking with motion-aware memory. arXiv preprint arXiv:2411.11922, 2024. 2, 5 [52] Zongxin Yang and Yi Yang. Decoupling fe-
atures in hierarchical propagation for video object segmentation. Advances in Neural Information Processing Systems, 35:36324–36336, 2022. 2 [53] Wenxi Yue, Jing Zhang, Kun Hu, Yong Xia, Jiebo Luo, and Zhiyong Wang. Surgicalsam: Efficient class promptable surgical instrument segmentation. In Proceedings of the AAAI Conference on Artificial Intelligence, pages 68906898, 2024. 1 [54] Sabrina Madad Zadeh, Tom Franc ̧ois, Aur ́elie Comptour, Michel Canis, Nicolas Bourdel, and Adrien Bartoli. Surgai3. -
8k: a labeled dataset of gynecologic organs in laparoscopy with application to automatic augmented reality surgical guidance. Journal of Minimally Invasive Gynecology, 30(5):397–405, 2023. 3 [55] Jiayuan Zhu, Yunli Qi, and Junde Wu. Medical sam 2: Segment medical images as video via segment anything model 2. arXiv preprint arXiv:2408.00874, 2024. 6

---

## Processing Information

- **Processing Library:** Zotero PDFWorker
- **Processing Date:** 2026-02-10T18:14:24.400Z
- **Text Length:** 49034 characters
- **Success:** Text extraction completed
- **PDF Library Used:** Zotero PDFWorker
- **Pages Processed:** 11 of 11
