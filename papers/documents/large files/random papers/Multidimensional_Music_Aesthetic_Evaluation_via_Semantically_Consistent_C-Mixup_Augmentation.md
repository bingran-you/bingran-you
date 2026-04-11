# PDF Document: Liu et al. - 2025 - Multidimensional Music Aesthetic Evaluation via Semantically Consistent C-Mixup Augmentation.pdf

**File Path:** Liu et al. - 2025 - Multidimensional Music Aesthetic Evaluation via Semantically Consistent C-Mixup Augmentation.pdf

**Processed Date:** 2026-02-10T18:17:18.853Z

**File Size:** 340.21 KB

**Total Pages:** 3

**Extracted Pages:** 3

**PDF Library:** Zotero PDFWorker

**Attachment Item ID:** 3256

**Title:** Multidimensional Music Aesthetic Evaluation via Semantically Consistent C-Mixup Augmentation

**Collection:** Large Files > Random Papers

---

## Extracted Text Content

MULTIDIMENSIONAL MUSIC AESTHETIC EVALUATION VIA SEMANTICALLY CONSISTENT C-MIXUP AUGMENTATION
Shuyang Liu∗ Yuan Jin∗ Rui Lin Shizhe Chen Junyu Dai† Tao Jiang
εar-LAB ZiYouLiangJi(Shanghai) Information Technology Co., Ltd
ABSTRACT
Evaluating the aesthetic quality of generated songs is challenging due to the multi-dimensional nature of musical perception. We propose a robust music aesthetic evaluation framework that combines (1) multi-source multi-scale feature extraction to obtain complementary segment- and track-level representations, (2) a hierarchical audio augmentation strategy to enrich training data, and (3) a hybrid training objective that integrates regression and ranking losses for accurate scoring and reliable top-
-song identification. Experiments on the ICASSP 2026 SongEval benchmark demonstrate that our approach consistently outperforms baseline methods across correlation and top-tier metrics.
Index Terms— DPO, Songeval
1. INTRODUCTION
Automated music evaluation is becoming increasingly important with the emergence of generative music models, yet this task remains challenging. In prior work, Audiobox Aesthetics [1] predicts multi-dimensional music aesthetic scores using a simple Transformer architecture, which achieved suboptimal performance due to its inability to capture critical musical information. SongEval [2] introduced a high-quality annotated dataset and adpots four classic models with regression heads, offering a reliab-
le baselines for the field. Building upon this work, we propsed a music aesthetic evaluation model. The key components and our contributions can be summarized as follows:
• a novel music aesthetic evaluation method for robust multi-dimensional scoring under limited labeled data.
• a multi-source multi-scale feature extraction module and a hierarchical audio augmentation strategy to capture comprehensive musical characteristics and enhance model robustness.
• a hybrid regression-and-ranking training objective, validated on the ICASSP 2026 SongEval benchmark with significant improvements over baselines.
∗ Equal contribution. † Project Lead.
Fig. 1. Overview of the proposed music aesthetic evaluation framework.
2. METHOD
2.1. Overview
As shown in Figure 1, our proposed music aesthetic evaluation framework consists of three key components: (1) the multi-source multi-scale feature extraction module, which leverages two pre-trained models—MuQ [3] and MusicFM [4]—to extract complementary local segment-level and global track-level features, followed by an attention-based pooling mechanism that produces fixed-length, dimension-aware representations. (2) the hierarchical audio augmentation module, applying audio transformations and C--
Mixup to generate robust representations that mitigate overfitting in low-resource scenarios. (3) the hybrid training objective combining with regression and ranking losses, which enables the model to predict absolute scores for each aesthetic dimension while preserving the relative rankings among songs.
2.2. Multi-Source Multi-Scale Feature Extraction
Inspired by Songformer [5], we employ both MuQ and MusicFM to extract multi-scale music representations. Additionally, we introduce a Multi-Query Multi-Head Attention Statistical Pooling (MQMHASTP) mechanism [6]. This mechanism enables the model to capture how temporal, spectral, harmonic, and content cues contribute to different aesthetic dimensions, while converting variable-length features into fixed-length representations.
arXiv:2511.18869v1 [cs.SD] 24 Nov 2025

2.3. Hierarchical Audio Augmentation
We introduce a Hierarchical Audio Augmentation Module to achieve data and feature level enhancements. We design an augmentation pipeline1 to augment the original training audio through slight gain perturbations, high-SNR noise addition, micro pitch and time variations, temporal shifts, and mild equalization, thereby generating additional samples to expand the training set. At the feature level, we employ a C-Mixup [7] strategy to match data with similar aesthetic scores and high-level representati-
ons to form feature-label pairs. The high-level representations are derived from MQMHASTP. The mixing strategy is implemented in the feature space based on Kernel Density Estimation (KDE):
P (xj, yj) | (xi, yi) ∝ exp − d(i, j)2
2σ2 (1)
where d(i, j) is a distance between examples and P (xj, yj) | (xi, yi) denotes the probability of selecting sample xj as a mixing partner. The new feature xˆ and label yˆ are then obtained via convex combination:
xˆ = λxi + (1 − λ)xj, yˆ = λyi + (1 − λ)yj, (2)
here, λ is a mixing coefficient sampled from a Beta distribution that controls the interpolation between two samples.
2.4. Training Object
To accurately predict the five-dimensional aesthetic scores for each song and effectively identify top-performing tracks, we employ a hybrid loss function Ltotal that combines SmoothL1Loss [8] and ListMLE [9]. The total loss is defined as:
Ltotal = LSmoothL1 + αLListMLE , (3)
where α is a hyperparameter. The synergy between these two losses enables the model to produce accurate multidimensional aesthetic scores while effectively identifying top-performing songs.
3. EXPERIMENTS AND ANALYSIS
3.1. Experiment Setup
3.1.1. Data
We conduct training and evaluation on the official SongEval dataset, which contains 2,399 songs annotated across five aesthetic dimensions. Following the official protocol, we use 200 samples for validation, and for the remaining samples, we apply the following augmentations: (1) 24 kHz resampling;(2) random gain (−2 to +2 dB, p = 0.9); (3) high-SNR Gaussian noise (30–50 dB, p = 0.25); (4) micro pitch shift
1https://github.com/iver56/audiomentations
(±10 cents, p = 0.5); (5) slight time-stretch (0.99–1.01×, p = 0.4); (6) short time shift (±0.5 s, p = 0.4); (7) high-pass filtering (80–120 Hz, p = 0.3); (8) low-pass filtering (15–18 kHz, p = 0.3); (9) seven-band parametric EQ (−3 to +3 dB, p = 0.3); and (10) rare polarity inversion (p = 0.02).
3.1.2. Evaluation Metrics
We evaluate the model using four official metrics: the Linear Correlation Coefficient (LCC) measures the linear alignment between predicted and ground-truth scores, while Spearman’s Rank Correlation Coefficient (SRCC) and Kendall’s Rank Correlation Coefficient (KRCC) assess the consistency of relative ranking. Top-Tier Accuracy (TTC) is computed as the F1 score, where the best predictions are binarized based on official thresholds.
3.1.3. Implementation Details
We train our model using the Adam optimizer with a learning rate of 1 × 10−5 and a weight decay of 1 × 10−3. Training is performed with a batch size of 8 for 60 epochs. The hyperparameter α, which balances the regression and ranking objectives, is set to 0.15 for Track 1 and 0.05 for Track 2.
3.2. Overall Performance
As shown in Table 1, incrementally incorporating MMFE (Multi-Source Multi-Scale Feature Extraction), HAA (Hierarchical Audio Augmentation), and the hybrid loss Ltotal into the baseline yields consistent performance gains, with the most pronounced improvement observed in TTC. This enhancement demonstrates that the proposed framework simultaneously refines the accuracy of music aesthetic scoring and strengthens the capability to identify top-ranking songs.
Table 1. Effects of different modules in our method.
Baseline MMFE HAA Ltotal LCC ↑ SRCC ↑ KRCC ↑ TTC ↑
√ 90.83 89.67 73.56 82.57
√ √ 90.99 89.67 72.91 83.65
√ √ √ 90.99 89.66 73.3 84.64
√ √ √ √ 91.25 90.14 73.98 85.65
4. CONCLUSION
We presented a robust framework for multidimensional music aesthetic evaluation, which combines multi-source multiscale feature extraction, a hierarchical augmentation strategy, and a hybrid regression-and-ranking loss. Experiments on the ICASSP 2026 SongEval benchmark confirm that our approach consistently surpasses baseline methods, achieving superior performance in both aesthetic scoring and top-song identification.

5. REFERENCES
[1] Andros Tjandra, Yi-Chiao Wu, Baishan Guo, John Hoffman, Brian Ellis, Apoorv Vyas, Bowen Shi, Sanyuan Chen, Matt Le, Nick Zacharov, et al., “Meta audiobox aesthetics: Unified automatic quality assessment for speech, music, and sound,” arXiv preprint arXiv:2502.05139, 2025.
[2] Jixun Yao, Guobin Ma, Huixin Xue, Huakang Chen, Chunbo Hao, Yuepeng Jiang, Haohe Liu, Ruibin Yuan, Jin Xu, Wei Xue, et al., “Songeval: A benchmark dataset for song aesthetics evaluation,” arXiv preprint arXiv:2505.10793, 2025.
[3] Haina Zhu, Yizhi Zhou, Hangting Chen, Jianwei Yu, Ziyang Ma, Rongzhi Gu, Yi Luo, Wei Tan, and Xie Chen, “Muq: Self-supervised music representation learning with mel residual vector quantization,” arXiv preprint arXiv:2501.01108, 2025.
[4] Minz Won, Yun-Ning Hung, and Duc Le, “A foundation model for music informatics,” in ICASSP 2024-2024 IEEE International Conference on Acoustics, Speech and Signal Processing (ICASSP). IEEE, 2024, pp. 12261230.
[5] Chunbo Hao, Ruibin Yuan, Jixun Yao, Qixin Deng, Xinyi Bai, Wei Xue, and Lei Xie, “Songformer: Scaling music structure analysis with heterogeneous supervision,” arXiv preprint arXiv:2510.02797, 2025.
[6] Miao Zhao, Yufeng Ma, Yiwei Ding, Yu Zheng, Min Liu, and Minqiang Xu, “Multi-query multi-head attention pooling and inter-topk penalty for speaker verification,” in ICASSP 2022-2022 IEEE International Conference on Acoustics, Speech and Signal Processing (ICASSP). IEEE, 2022, pp. 6737–6741.
[7] Huaxiu Yao, Yiping Wang, Linjun Zhang, James Y Zou, and Chelsea Finn, “C-mixup: Improving generalization in regression,” Advances in neural information processing systems, vol. 35, pp. 3361–3376, 2022.
[8] Ross Girshick, “Fast r-cnn,” in Proceedings of the IEEE international conference on computer vision, 2015, pp. 1440–1448.
[9] Fen Xia, Tie-Yan Liu, Jue Wang, Wensheng Zhang, and Hang Li, “Listwise approach to learning to rank: theory and algorithm,” in Proceedings of the 25th international conference on Machine learning, 2008, pp. 1192–1199.

---

## Processing Information

- **Processing Library:** Zotero PDFWorker
- **Processing Date:** 2026-02-10T18:17:18.853Z
- **Text Length:** 9945 characters
- **Success:** Text extraction completed
- **PDF Library Used:** Zotero PDFWorker
- **Pages Processed:** 3 of 3
