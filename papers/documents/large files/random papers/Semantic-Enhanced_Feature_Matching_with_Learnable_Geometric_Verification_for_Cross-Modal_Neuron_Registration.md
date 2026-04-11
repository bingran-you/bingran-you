# PDF Document: Li et al. - 2025 - Semantic-Enhanced Feature Matching with Learnable Geometric Verification for Cross-Modal Neuron Regi.pdf

**File Path:** Li et al. - 2025 - Semantic-Enhanced Feature Matching with Learnable Geometric Verification for Cross-Modal Neuron Regi.pdf

**Processed Date:** 2026-02-10T18:16:59.674Z

**File Size:** 8395.09 KB

**Total Pages:** 5

**Extracted Pages:** 5

**PDF Library:** Zotero PDFWorker

**Attachment Item ID:** 3283

**Title:** Semantic-Enhanced Feature Matching with Learnable Geometric Verification for Cross-Modal Neuron Registration

**Collection:** Large Files > Random Papers

---

## Extracted Text Content

ARXIV PREPRINT 1
Semantic-Enhanced Feature Matching with
Learnable Geometric Verification for Cross-Modal
Neuron Registration
Wenwei Li, Lingyi Cai, Hui Gong, Qingming Luo, and Anan Li
Abstract—Accurately registering in-vivo two-photon and exvivo fluorescence micro-optical sectioning tomography images of individual neurons is critical for structure-function analysis in neuroscience. This task is profoundly challenging due to a significant cross-modality appearance gap, the scarcity of annotated data and severe tissue deformations. We propose a novel deep learning framework to address these issues. Our method introduces a semantic-enhanced hybrid feature descriptor, which fuses t-
he geometric precision of local features with the contextual robustness of a vision foundation model DINOV3 to bridge the modality gap. To handle complex deformations, we replace traditional RANSAC with a learnable Geometric Consistency Confidence Module, a novel classifier trained to identify and reject physically implausible correspondences. A data-efficient twostage training strategy, involving pre-training on synthetically deformed data and fine-tuning on limited real data, overcomes the data -
scarcity problem. Our framework provides a robust and accurate solution for high-precision registration in challenging biomedical imaging scenarios, enabling large-scale correlative studies.
Index Terms—Image Registration, Feature Matching, CrossModal Imaging, Neuroscience, Deep Learning
I. INTRODUCTION
I
N modern neuroscience, one of the central challenges is to accurately track the functional activity of a neuron in-vivo and subsequently re-identify its precise anatomical structure in ex-vivo tissue samples, thereby elucidating the fundamental structure-function relationship of the brain [1], [2], [3]. Two-photon calcium imaging enables high-resolution recording of functional dynamics from neurons deep within living tissue [4], [5], [6], while fluorescence micro-optical sectioning tomography (fMO-
ST) provides dense anatomical details at nanometer-scale precision, facilitating the reconstruction of neuronal projections across the entire brain [7], [8]. An effective fusion of these two modalities would build a bridge between in-vivo function and ex-vivo structure, allowing
Under Review. This work was supported in part STI 2030-Major Projects (2021ZD0201002). (Corresponding author: Anan Li.)
Wenwei Li, Lingyi Cai, Hui Gong and Anan Li are with the Wuhan National Laboratory for Optoelectronics, MoE Key Laboratory for Biomedical Photonics, Huazhong University of Science and Technology, Wuhan 430074, China. (e-mail: liwenwei@hust.edu.cn; lycai@hust.edu.cn; huigong@hust.edu.cn; aali@brainsmatics.org). Hui Gong and Anan Li are with the HUST-Suzhou Institute for Brainsmatics, JITRI, Suzhou 215123, China. Qingming Luo and Anan Li are with the Key Laboratory of Biomedical Engineering of Haina-
n Province, School of Biomedical Engineering, Hainan University, Haikou 570228, China (qluo@hainanu.edu.cn).
researchers to directly correlate a neuron’s functional properties with its fine-grained morphological and even molecular characteristics. However, achieving precise registration between two-photon and fMOST images presents three formidable challenges. First, acquiring paired datasets is inherently difficult, as it requires imaging the same specifically-labeled neurons in both in-vivo and ex-vivo states. This laborious, low-yield process results in a critical scarcity of annotated samples. Second,-
 a significant cross-modal appearance difference exists; the images vary immensely in resolution, signal-to-noise ratio, fluorescence intensity, and cellular morphology, rendering traditional registration algorithms based on pixel intensity or lowlevel textures largely ineffective. Finally, the tissue processing pipeline from the in-vivo to the ex-vivo state introduces severe and complex geometric deformations that challenge conventional transformation models. Existing techniques exhibit significa-
nt limitations in addressing these challenges. Traditional registration workflows heavily rely on manual expert intervention, such as aligning images by marking specific neurons [3] or matching cell clusters through visual inspection [9]. Such methods are not only highly subjective and time-consuming but also lack the scalability required for large-scale, automated brain mapping initiatives. Some automated approaches, like the graph-based CellGPR [10], model neurons as nodes for matching, but thei-
r computational complexity grows exponentially with the number of neurons, making them unsuitable for the dense neuronal scenes captured by fMOST. Furthermore, their sparse node representations fail to accurately describe complex image transformations. On the other hand, mainstream deep learning frameworks like VoxelMorph [11], DiffuseMorph [12] and VTN [13], while capable of learning complex deformation fields, are highly dependent on large-scale training datasets. Thus inapplicable in scenarios -
characterized by scarce data and complex deformations. In the field of computer vision, Local feature-based matching methods such as LoFTR [14], [15] and LightGlue [16], [17] have achieved remarkable success in natural image matching tasks within the field of computer vision. However, these models are primarily trained on natural scene data, and the matching strategies they learn do not directly generalize to noisy neuro-optical imaging data. The local feature descriptors upon which they rely face-
 a severe robustness challenge when confronted with the enormous domain gap between twophoton and fMOST imaging.
arXiv:2511.21452v1 [eess.IV] 26 Nov 2025

ARXIV PREPRINT 2
DINOV3 SuperPoint
DINOV3 SuperPoint
in-vivo
ex-vivo
Two-Photon Microscopy
fMOST Imaging
Local Geometric Features & Descriptors
Dense Semantic Feature Map
Semantic-Enhanced Feature Fusion
Initial Matching
Geometric Verification
Attention-Based Matching / LightGlue
Putative Matches
Verified Matches
Outputs
Trainable Parameters
Frozen Parameters
Feature Descriptors
Feature Points
Feature Descriptors
Feature Points
in-vivo image ex-vivo image
Two-Photon Image Slice
fMOST Image Slice
50 μm
100 μm
Fig. 1. The workflow of our proposed method. Local features from SuperPoint and semantic features from DINOV3 are extracted from in-vivo (two-photon) and ex-vivo (fMOST) images, respectively, and then fused. Subsequently, LightGlue generates a set of initial matches, which are filtered by a geometric consistency module to produce the final verified correspondences.
To address the aforementioned issues, this paper proposes a novel cross-modal image registration framework based on semantic-enhanced local features and a learnable geometric verification module. Our main contributions are threefold:
1) Semantic-Enhanced Hybrid Feature Descriptor: We create a novel hybrid descriptor by fusing fine-grained geometric features from SuperPoint [18] with highlevel semantic context from the DINOV3 foundation model [19], achieving high robustness to cross-modal appearance variations.
2) Learnable Geometric Consistency Module: We replace traditional RANSAC with a learnable classifier that directly evaluates the physical plausibility of biological tissue deformation. This approach avoids fitting explicit geometric models, making it suitable for nonparametric transformations.
3) Data-Efficient Two-Stage Training Strategy: To overcome data scarcity, we first pre-train our model on single-modality images with synthetic deformations to learn a general transformation prior, then fine-tune it on a small set of authentic cross-modal data.
II. PROPOSED METHOD
A. Overview
The overall workflow of our proposed method is illustrated in Fig. 1. The process begins with extracting local geometric features via SuperPoint and dense semantic features via DINOv3 from both the in-vivo source image IA and the ex-vivo target image IB. These multi-level features are then fused to create a robust hybrid descriptor. Subsequently, an attention-based matcher, LightGlue, generates a set of putative correspondences. Finally, a geometric verification module filters these initial matche-
s to yield the final, high-confidence keypoint pairs.
B. Semantic-Enhanced Hybrid Feature Generation
To overcome the significant appearance gap between two photon and fMOST images, we generate a hybrid feature descriptor for each keypoint that combines geometric localization precision with semantic invariance. Inspired by recent work leveraging vision foundation models to enhance matching generalization [20], we first employ the SuperPoint network to extract keypoint position sets PA = {pA
i }NA
i=1
and PB = {pB
j }NB
j=1 from images IA and IB, respectively, along with their corresponding local geometric descriptors
DA
local = {dA
local,i }NA
i=1 and DB
local = {dB
local,j }NB
j=1. Concurrently, we utilize a pre-trained DINOV3 model to extract highdimensional semantic feature maps, Fsem,A and Fsem,B, from the same images [19]. For an arbitrary keypoint pA
i ∈ PA, we sample its semantic
feature vector dA
sem,i from the feature map Fsem,A at the corresponding location using bilinear interpolation, denoted as dA
sem,i = I(Fsem,A, pA
i ). Subsequently, the local and semantic features are concatenated and fused via a small Multi-Layer Perceptron (MLP) to produce the final hybrid feature descriptor dA
fused,i:
dA
fused,i = MLP([dA
local,i; dA
sem,i]) (1)
where [; ] denotes the vector concatenation operation. The same procedure is applied to all keypoints in image IB, yielding the hybrid descriptor sets DA
fused and DB
fused. This fusion mechanism ensures that the final descriptors contain both fine-grained geometric information for precise localization and high-level semantic information to overcome modality differences.
C. Initial Matching and Geometric Verification
Fig 2 illustrates the two-stage matching framework. After obtaining robust hybrid feature descriptors, we employ the

ARXIV PREPRINT 3
Self Attention
Feature Points
Feature Descriptors Cross Attention
Self Attention
Feature Points
Feature Descriptors
Confidence
Stop Iteration ?
MLP
0.98
0.98
0.21
0.18
Matching Score
Outputs
Points Sampling
No
Yes
Pruning
Initial Matching
Geometric Verification
K times sampling
Including outliers and inconsistent matches
Score Accumulation
Confidence Filtering
Fig. 2. Architecture of the proposed two-stage matching framework. (Left) Initial Matching: A Transformer-based network with self- and cross-attention generates initial correspondences. (Right) Geometric Verification: A learnable module replaces RANSAC by sampling subsets of matches and using an MLP to score their geometric consistency. Outliers are then pruned based on these scores, yielding a final, geometrically coherent set of matches.
lightweight feature matcher LightGlue to establish an initial set of correspondences. By processing the descriptor sets DA
fused
and DB
fused through its internal graph neural network with selfand cross-attention mechanisms, LightGlue outputs a set of initial matches Minitial = {(i, j)} with associated confidence scores. However, this initial set is often contaminated with geometrically implausible false matches due to the complex tissue deformations. To address the fundamental limitation of traditional RANSAC in handling non-parametric transformations, we draw inspiration from the differentiable RANSAC framework [21] to design a -
novel Geometric Consistency Confidence Module (GCCM). The GCCM reframes geometric verification as a classification problem. We randomly sample small subsets of K = 4 matches, Sk, from Minitial. This sample size provides sufficient robustness for the locally approximate similarity transformation, exceeding the theoretical minimum of two matches. The GCCM module, a function fGCCM, takes only the coordinate information of these match pairs as input and outputs a geometric confidence score ck:
ck = fGCCM({pA
i , pB
j }(i,j)∈Sk ) (2)
This score quantifies whether the spatial transformation implied by the subset Sk is biophysically plausible. We then compute an expected confidence score C(i, j) for each initial match (i, j) by averaging the scores of all sampled subsets it participated in. Matches with scores below a predefined threshold τ are classified as outliers and pruned, yielding the final, geometrically consistent match set Mfinal = {(i, j) ∈ Minitial | C(i, j) > τ }.
D. Datasets and Training Strategy
Our research utilizes a dataset of murine brain neurons comprising simultaneously acquired in-vivo two-photon calcium imaging and ex-vivo fMOST imaging. The dataset originates from 9 sets of fMOST imaging; as a single fMOST set can encompass multiple imaging sites, this yielded a total of 22 two-photon imaging datasets, all of which have been accurately paired with their corresponding fMOST data. The
Two-Photon Imaging Data consists of in-vivo calcium imaging time-series (x-y-t) from these 22 sites, each containing 1800 frames corresponding to 120 seconds of continuous observation. The fMOST Imaging Data consists of 9 sets of exvivo tissue blocks covering regions with labeled neurons, at a resolution of 0.65μm × 0.65μm × 2μm, and an approximate volume of 800μm×600μm×800μm each. These 22 accurately matched volumes constitute our ground truth dataset. 1) Pre-training: The objective of this stage-
 is to enable the model, particularly the GCCM, to learn a general prior for ”plausible deformations.” We generate a large-scale synthetic dataset from unpaired single-modality data. Specifically, for an image I, we apply a random yet physically plausible non-rigid transformation Tsynth (e.g., thin-plate spline) to create a warped version I′ = Tsynth(I). This provides image pairs (I, I′) with dense ground-truth correspondences. We generated over 20,000 such pseudo-matching tasks for initial model -
training. 2) Fine-tuning and Testing: After pre-training, the model is fine-tuned on the real cross-modal data. We partition the 22 ground-truth volumes into 12 for fine-tuning and 10 for testing. To augment the limited fine-tuning set, we generate multiple training instances from each pair by varying projection durations for two-photon data and projection thicknesses for fMOST data. Combined with geometric transformations like rotation, each original pair is expanded into 50 distinct matching tas-
ks, creating a fine-tuning dataset of 600 tasks. During this stage, the parameters of the feature extraction networks (SuperPoint and DINOV3) are frozen, and only the feature fusion MLP, LightGlue, and GCCM are optimized to adapt the model to the specific cross-modal domain gap and real biological tissue deformations.
III. EXPERIMENTAL RESULTS
A. Ablation Study
To validate the effectiveness of the two core components of our framework—the semantic feature fusion and the Geometric Confidence Certification Module —we conducted a series of ablation studies. As shown in Table I, the baseline model (SuperPoint+LightGlue with pre-training and fine

ARXIV PREPRINT 4
LightGlue+Finetune Ours CellGPR 50 μm 100 μm
(a) (b) (c) two photon (in-vivo) fMOST (ex-vivo)
Fig. 3. Qualitative comparison of matching results. (a) LightGlue+Finetune produces a moderate number of matches but includes several false positives. (b) Our method generates a dense and highly accurate set of geometrically consistent matches. (c) CellGPR is limited to finding only a few sparse correspondences.
tuning) achieved a precision of 46.8% and a mean Target Registration Error (TRE) of 2.43 μm. Upon integrating semantic features, the model’s precision increased to 52.8%, the number of inliers grew by 23%, and the TRE decreased to 2.26 μm. This indicates that fusing semantic information effectively bridges the significant modality gap between neuro and optical images, enabling the discovery of more potential correct matches. When adding only the GCCM to the baseline model, precision was substantia-
lly boosted to 68.4% and the TRE was reduced to 2.07 μm. This demonstrates the powerful geometric filtering capability of the GCCM, which efficiently rejects geometrically inconsistent outliers caused by complex deformations. Finally, our full model, which synergizes the strengths of both modules, achieves the best performance across all metrics: a precision of 74.6%, a total of 1325 inliers, and a final TRE of 1.68 μm. These results clearly establish that both proposed modules are crucial for enh-
ancing the accuracy and robustness of cross-modal matching.
TABLE I QUANTITATIVE RESULTS OF THE ABLATION STUDY.
Method Precision # of Inliers TRE (μm)
Baseline 46.8% 684 2.43 + Semantic Features 52.8% 842 2.26 + Geometric Verification 68.4% 1016 2.07 Ours (Full) 74.6% 1325 1.68
B. Comparison with State-of-the-Art Methods
We compared our method against several state-of-the-art feature matching techniques, with results summarized in Table II. Both LoFTR and the zero-shot LightGlue model performed poorly on this challenging cross-modal task, with precision scores of only 17.8% and 35.4% respectively, confirming that general-purpose matchers struggle to generalize to the biomedical domain. Even after fine-tuning, LightGlue’s performance, while improved, remained significantly inferior to our method. The comparison wit-
h CellGPR is particularly revealing. As a graph-based method, CellGPR achieves the highest precision (82.6%) due to its strong global consistency constraints. However, this high precision comes at a steep cost to matching density and computational efficiency. It identified only 58 inliers—a fraction of the 1325 found by our method—which resulted in a slightly higher TRE of 1.79 μm. Critically, its
average computation time was 86.8 seconds, over 200 times slower than our method. This is because CellGPR’s computational complexity grows exponentially with the number of nodes, making it impractical for densely featured images. In contrast, our method achieves the best overall balance. It delivers high precision (74.6%) while identifying a vastly superior number of inliers (1325), which in turn yields the lowest TRE (1.68 μm). Furthermore, it accomplishes this with exceptional speed (0.38 second-
s). This demonstrates the comprehensive advantages of our approach in terms of accuracy, density, and efficiency.
TABLE II COMPARISON WITH STATE-OF-THE-ART METHODS.
Method Precision # of Inliers TRE (μm) Time (s)
LoFTR (Finetuned)[14] 17.8% 154 2.79 4.3 LightGlue (Zero-shot)[16] 35.4% 358 2.52 0.32 LightGlue (Finetuned)[16] 41.5% 486 2.28 0.32 CellGPR[10] 82.6% 58 1.79 86.8 Ours (Full) 74.6% 1325 1.68 0.38
C. Qualitative Results
Fig. 3 provides a qualitative comparison of the matching results applied to two-photon imaging and fMOST imaging. LightGlue (Fig. 3a), while producing a moderate number of matches, includes noticeable false positives, resulting in a cluttered appearance. CellGPR (Fig. 3c) generates only a handful of sparse matches, which is insufficient for accurate transformation estimation. In stark contrast, our method (Fig. 3b) successfully establishes a dense and geometrically coherent set of correspondences -
between the two images, demonstrating superior robustness and accuracy.
IV. CONCLUSION
In this paper, we proposed a novel deep learning framework to address the significant appearance differences and complex deformations in cross-modal neuronal image registration. By fusing local geometric features with global semantic information and employing a learnable geometric verification module, our method generates substantially denser and more precise correspondences, leading to a lower registration error. Our approach strikes a superior balance between accuracy, match density, and computa-
tional efficiency, offering a robust and effective solution for large-scale, high-precision correlative analysis between neural function and structure in neuroscience.

ARXIV PREPRINT 5
REFERENCES
[1] R. D. Markello, J. Y. Hansen, Z.-Q. Liu, V. Bazinet, G. Shafiei, L. E. Su ́arez, N. Blostein, J. Seidlitz, S. Baillet, T. D. Satterthwaite et al., “Neuromaps: structural and functional interpretation of brain maps,” Nature Methods, vol. 19, no. 11, pp. 1472–1479, 2022. [2] E. Collins, O. Chishti, S. Obaid, H. McGrath, A. King, X. Shen, J. Arora, X. Papademetris, R. T. Constable, D. D. Spencer et al., “Mapping the structure-function relationship along macroscale gradients in the human brain,” N-
ature Communications, vol. 15, no. 1, p. 7063, 2024. [3] M. Wang, K. Liu, J. Pan, J. Li, P. Sun, Y. Zhang, L. Li, W. Guo, Q. Xin, Z. Zhao et al., “Brain-wide projection reconstruction of single functionally defined neurons,” Nature Communications, vol. 13, no. 1, p. 1531, 2022. [4] D. G. Rosenegger, C. H. T. Tran, J. LeDue, N. Zhou, and G. R. Gordon, “A high performance, cost-effective, open-source microscope for scanning two-photon microscopy that is modular and readily adaptable,” PloS one, vol.-
 9, no. 10, p. e110475, 2014. [5] K. Svoboda and R. Yasuda, “Principles of two-photon excitation microscopy and its applications to neuroscience,” Neuron, vol. 50, no. 6, pp. 823–839, 2006. [6] C. Grienberger, A. Giovannucci, W. Zeiger, and C. Portera-Cailliau, “Two-photon calcium imaging of neuronal activity,” Nature Reviews Methods Primers, vol. 2, no. 1, p. 67, 2022. [7] Q. Zhong, A. Li, R. Jin, D. Zhang, X. Li, X. Jia, Z. Ding, P. Luo, C. Zhou, C. Jiang et al., “High-definition imaging using l-
ine-illumination modulation microscopy,” Nature methods, vol. 18, no. 3, pp. 309–315, 2021. [8] X. Qi, T. Yang, L. Li, J. Wang, S. Zeng, and X. Lv, “Fluorescence micro-optical sectioning tomography using acousto-optical deflectorbased confocal scheme,” Neurophotonics, vol. 2, no. 4, pp. 041 406041 406, 2015. [9] W. Zhou, S. Ke, W. Li, J. Yuan, X. Li, R. Jin, X. Jia, T. Jiang, Z. Dai, G. He, Z. Fang, L. Shi, Q. Zhang, H. Gong, Q. Luo, W. Sun, A. Li, and P. Li, “Mapping the function of whole-brain p-
rojection at the single neuron level,” Advanced Science, vol. 9, no. 33, p. 2202553, 2022. [10] W. Li, W. Chen, Z. Dai, X. Chai, S. An, Z. Guan, W. Zhou, J. Chen, H. Gong, Q. Luo, Z. Feng, and A. Li, “Graph-based cell pattern recognition for merging the multi-modal optical microscopic image of neurons,” Computer Methods and Programs in Biomedicine, vol. 256, p. 108392, 2024. [11] G. Balakrishnan, A. Zhao, M. R. Sabuncu, J. Guttag, and A. V. Dalca, “Voxelmorph: a learning framework for deformable m-
edical image registration,” IEEE transactions on medical imaging, vol. 38, no. 8, pp. 1788–1800, 2019. [12] B. Kim, I. Han, and J. C. Ye, “Diffusemorph: Unsupervised deformable image registration using diffusion model,” in European conference on computer vision. Springer, 2022, pp. 347–364. [13] S. Zhao, T. Lau, J. Luo, E. I.-C. Chang, and Y. Xu, “Unsupervised 3d end-to-end medical image registration with volume tweening network,” IEEE journal of biomedical and health informatics, vol. 24, no. 5, -
pp. 1394–1404, 2019. [14] J. Sun, Z. Shen, Y. Wang, H. Bao, and X. Zhou, “Loftr: Detectorfree local feature matching with transformers,” in Proceedings of the IEEE/CVF conference on computer vision and pattern recognition, 2021, pp. 8922–8931. [15] G. Bo ̈kman and F. Kahl, “A case for using rotation invariant features in state of the art feature matchers,” in Proceedings of the IEEE/CVF conference on computer vision and pattern recognition, 2022, pp. 51105119. [16] P. Lindenberger, P.-E. Sarlin, a-
nd M. Pollefeys, “Lightglue: Local feature matching at light speed,” in Proceedings of the IEEE/CVF international conference on computer vision, 2023, pp. 17 627–17 638.
[17] P.-E. Sarlin, D. DeTone, T. Malisiewicz, and A. Rabinovich, “Superglue: Learning feature matching with graph neural networks,” in Proceedings of the IEEE/CVF conference on computer vision and pattern recognition, 2020, pp. 4938–4947. [18] D. DeTone, T. Malisiewicz, and A. Rabinovich, “Superpoint: Selfsupervised interest point detection and description,” in Proceedings of the IEEE conference on computer vision and pattern recognition workshops, 2018, pp. 224–236. [19] O. Sime ́oni, H. V. Vo, M-
. Seitzer, F. Baldassarre, M. Oquab, C. Jose, V. Khalidov, M. Szafraniec, S. Yi, M. Ramamonjisoa et al., “Dinov3,” arXiv preprint arXiv:2508.10104, 2025.
[20] H. Jiang, A. Karpur, B. Cao, Q. Huang, and A. Araujo, “Omniglue: Generalizable feature matching with foundation model guidance,” in
Proceedings of the IEEE/CVF Conference on Computer Vision and Pattern Recognition, 2024, pp. 19 865–19 875. [21] E. Brachmann, A. Krull, S. Nowozin, J. Shotton, F. Michel, S. Gumhold, and C. Rother, “Dsac-differentiable ransac for camera localization,” in Proceedings of the IEEE conference on computer vision and pattern recognition, 2017, pp. 6684–6692.

---

## Processing Information

- **Processing Library:** Zotero PDFWorker
- **Processing Date:** 2026-02-10T18:16:59.674Z
- **Text Length:** 24730 characters
- **Success:** Text extraction completed
- **PDF Library Used:** Zotero PDFWorker
- **Pages Processed:** 5 of 5
