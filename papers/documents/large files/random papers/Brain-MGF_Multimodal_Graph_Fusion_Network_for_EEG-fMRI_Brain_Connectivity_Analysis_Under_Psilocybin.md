# PDF Document: Yap et al. - 2025 - Brain-MGF Multimodal Graph Fusion Network for EEG-fMRI Brain Connectivity Analysis Under Psilocybin.pdf

**File Path:** Yap et al. - 2025 - Brain-MGF Multimodal Graph Fusion Network for EEG-fMRI Brain Connectivity Analysis Under Psilocybin.pdf

**Processed Date:** 2026-02-10T18:18:28.680Z

**File Size:** 707.04 KB

**Total Pages:** 5

**Extracted Pages:** 5

**PDF Library:** Zotero PDFWorker

**Attachment Item ID:** 3647

**Title:** Brain-MGF: Multimodal Graph Fusion Network for EEG-fMRI Brain Connectivity Analysis Under Psilocybin

**Collection:** Large Files > Random Papers

---

## Extracted Text Content

BRAIN–MGF: MULTIMODAL GRAPH FUSION NETWORK FOR EEG–FMRI BRAIN CONNECTIVITY ANALYSIS UNDER PSILOCYBIN
Sin-Yee Yap1, Fuad Noman1, Junn Yong Loo1, Devon Stoliker3, Moein Khajehnejad3, Rapha ̈el C.-W. Phan1, David L. Dowe2, Adeel Razi3,⋆, and Chee-Ming Ting1,⋆
1 School of Information Technology, Monash University Malaysia, Malaysia 2 Department of Data Science and AI, Faculty of Information Technology, Monash University, Australia 3 Turner Institute for Brain and Mental Health, School of Psychological Sciences, Monash University, Australia
ABSTRACT
Psychedelics, such as psilocybin, reorganise large-scale brain connectivity, yet how these changes are reflected across electrophysiological (electroencephalogram, EEG) and haemodynamic (functional magnetic resonance imaging, fMRI) networks remains unclear. We present Brain–MGF, a multimodal graph fusion network for joint EEG–fMRI connectivity analysis. For each modality, we construct graphs with partial-correlation edges and Pearson-profile node features, and learn subject-level embeddings via gr-
aph convolution. An adaptive softmax gate then fuses modalities with samplespecific weights to capture context-dependent contributions. Using the world’s largest single-site psilocybin dataset, PsiConnect, BrainMGF distinguishes psilocybin condition from no-psilocybin condition in meditation and rest. Fusion improves over unimodal and nonadaptive variants, achieving 74.0% accuracy and 76.5% F1 score on meditation, and 76.0% accuracy with 85.8% ROC–AUC on rest. UMAP visualisations reveal clearer cl-
ass separation for fused embeddings. These results indicate that adaptive graph fusion effectively integrates complementary EEG-fMRI information, providing an interpretable framework for characterising psilocybin-induced alterations in large-scale neural organisation.
Index Terms— Multimodal Graph Fusion, EEG–fMRI, Brain Connectivity, Psychedelics, Psilocybin
1. INTRODUCTION
Psilocybin, the psychoactive compound in Psychedelic mushrooms, serves as a tool to perturb perception for investigating altered states of consciousness. It induces transient changes in perception and cognition accompanied by large-scale reorganisation of brain networks. Studies report reduced default-mode network connectivity and increased cross-network communication [1, 2], reflecting greater global integration. However, how these network-level alterations manifest across physiological (temporal-
) scales remains unclear, despite their relevance to therapeutic mechanisms linking reduced modularity with improved mental health [3, 4]. In this paper, we investigate whether psilocybin-induced brain states can be distinguished from no-psilocybin states in the same participants across distinct experimental stimuli using graph-based multimodal connectivity representations, providing a computational approach to quantify how psychedelics reorganise large-scale neural integration. Analysing these ne-
twork-level effects requires models that capture the brain’s graph-like organisation and distributed connectivity.
*Corresponding authors: Adeel Razi (adeel.razi@monash.edu) and Chee-Ming Ting (ting.cheeming@monash.edu)
Recent advances in network neuroscience emphasise the importance of modelling the brain as a complex graph of interacting regions rather than a collection of isolated areas [5]. Graph neural networks (GNNs) have emerged as powerful tools for analysing such structured data, offering the ability to learn representations that capture both local and global connectivity patterns [6]. In brain imaging, GNNs have demonstrated strong performance in tasks such as disease diagnosis [7, 8, 9], cognitive stat-
e decoding [10, 11], and behavioural prediction [12, 13], as they can encode topological dependencies that traditional machine learning models overlook. Building upon this, multimodal neuroimaging enables the investigation of brain connectivity across complementary physiological domains. Functional magnetic resonance imaging (fMRI) captures large-scale haemodynamic coupling, at a temporal scale of seconds, that reflects distributed integration among cortical and subcortical regions owing to its hi-
gher spatial resolution, whereas electroencephalography (EEG) measures, at the millisecond-scale, electrophysiological coherence that indexes fast-scale neuronal synchrony, however without the spatial resolution to resolve signals from subcortical regions [14]. Integrating these complementary connectivity profiles might therefore yield a more comprehensive characterisation of psilocybin’s network-level effects by linking haemodynamic and electrophysiological coupling patterns. While such multimoda-
l data promise richer insights, computational strategies for combining them are still evolving and require further methodological refinement. Conventional approaches typically concatenate features or assign fixed weights to modalities [15], neglecting the inter-individual variability and differences in task stimuli or pharmacological state. Such fixed fusion strategies are limited in their ability to capture the dynamic, subject-specific contributions of each modality. Existing multimodal GNNs oft-
en perform late fusion without adaptive weighting [16], failing to account for the varying relevance of each modality across cognitive states or participants [17]. These considerations suggest that adaptively learning modality contributions may offer a more suitable and context-responsive approach than fixed fusion schemes. To address this gap, we introduce the Brain–MGF (Multimodal Graph Fusion Network), an adaptive GNN framework for the joint analysis of EEG and fMRI connectivity. Brain–MGF empl-
oys modality-specific graph encoders to extract latent representations and a gating mechanism that dynamically modulates the contribution of each modality during fusion. This architecture enables flexible integration of complementary neural information across physiological scales, facilitating a more precise characterisation of brain dynamics. Our main contributions are as follows:
• Adaptive multimodal fusion: a gating-based graph model
arXiv:2511.18325v1 [q-bio.NC] 23 Nov 2025

fMRI Branch Adaptive Gating Fusion
ZfMRI
fMRI time-series
......
LeakyReLU
(Dropout)
GCN
Embedding
ZEEG
Linear GELU Linear
Gate
SoftMax
Weighted Fusion
Weights
Classifier
Concat
fMRI Graph Construction
...
...
No-psilocybin
Psilocybin
Mpearson
Mpartial
+ ψ(I)
EEG Branch
EEG time-series
......
GCN
EEG Graph Construction
Mpearson
Mpartial
+ ψ(I)
LeakyReLU
(Dropout)
Global Mean Pooling
Global Mean Pooling
LayerNorm
Fig. 1: Brain–MGF architecture. Each modality (fMRI and EEG) constructs a connectivity graph from Pearson and partial correlations, combined with a pseudo-identity projection to form node features X and edges A. Three GraphConv blocks with LeakyReLU and dropout encode node representations, followed by global mean pooling to obtain subject-level embeddings zfMRI and zEEG. An adaptive gating MLP computes softmax weights αfMRI, αEEG ∈ (0, 1) to fuse modalities: zfus = αfMRIzfMRI + αEEGzEEG. The fused-
 embedding is normalised with LayerNorm and passed through an MLP classifier with sigmoid output, optimised using binary cross-entropy loss.
that learns subject-specific modality weights, enabling contextdependent integration of EEG and fMRI signals.
• Graph construction with complementary features: edges derived from partial correlations and node features from Pearson profiles with a pseudo-identity projection, jointly representing both direct dependencies and global co-activation patterns.
• Empirical validation on the PsiConnect dataset: evaluation in participants imaged during guided meditation and rest demonstrates that Brain–MGF outperforms unimodal and non-adaptive variants, producing more separable latent representations that reflect enhanced discriminability between psilocybin and nopsilocybin brain states.
2. METHODS
2.1. Dataset and Preprocessing
We used the PsiConnect dataset [18, 1], which contains EEG and fMRI recorded under psilocybin and no-psilocybin across naturalistic conditions (rest, meditation, music, and movie). In this paper, we focused on rest and guided meditation because these contexts exhibited lower inter-subject variability and stronger cross-modal alignment between EEG and fMRI connectivity patterns, compared to the more stimulus-driven music and movie conditions. The study involved 65 healthy adults (aged 18–55). After-
 quality control, fMRI data were available for 64 participants in the no-psilocybin session and 61 in the psilocybin session, while EEG data were available for 64 and 59 participants, respectively. All data followed the PsiConnect preprocessing pipeline using fMRIPrep [19] and the RELAX EEG pipeline [20]. For fMRI, preprocessing included slice-timing and motion correction, spatial normalisation to MNI (Montreal Neurological Institute) space, and temporal filtering (0.01–0.1 Hz). Regional BOLD (Blo-
od Oxygenation Level–Dependent) signals were
extracted using the Schaefer 200-parcel atlas (7-network version). For EEG, artefacts were removed using multi-channel Wiener filtering and wavelet-enhanced ICA, followed by robust re-referencing. Each cleaned recording was arranged as a time × channel array (64 channels, 500 Hz).
2.2. Graph Construction
Each subject and modality was represented as a weighted undirected graph G = (V, E, A), with |V | = 200 for fMRI, |V | = 64 for EEG. For fMRI, regional BOLD time series X ∈ RT ×200 were extracted using the Schaefer 200-parcel atlas [21]. Functional connectivity was estimated using both Pearson and partial correlations between regions. The Pearson correlation between regions i and j is defined as
Mpearson,ij = cov(xi, xj )/(σ(xi)σ(xj )), (1)
where xi and xj denote the BOLD time series of regions of interest (ROIs) i and j, and Σ denotes the covariance matrix across all ROIs. Partial correlations were computed from the inverse covariance matrix Θ = Σ−1 as
Mpartial,ij = −Θij /(pΘiiΘjj ), (2)
which capture direct functional dependencies after removing indirect effects mediated by other regions. Each resulting 200 × 200 matrix was symmetrised with a unit diagonal and sparsified by retaining the top 40% of the strongest connections to preserve salient edges. For EEG, functional connectivity was derived from the time × channel matrix S ∈ RT ×64 by computing Pearson and partial correlations across channels, using the same definitions as in Eqs. (1)–(2). Each resulting 64 × 64 matrix was sy-
mmetrised and sparsified in the same way, retaining top 40% of the strongest connections.

In the Brain–MGF model, partial-correlation matrices Mpartial define the graph structure, while Pearson matrices Mpearson provide node-wise connectivity profiles as features. For each modality, the node feature matrix is given by
X = Mpearson + ψ(I) (3)
where ψ(·) is a learnable linear projection applied to the identity matrix I to introduce a pseudo-identity prior. In implementation, this corresponds to node feat = Mpearson + fc p(pseudo), where fc p denotes the learnable projection layer. Thus, the GNN operates on node features X and sparsified partial-correlation adjacency  ̃A = T40%(Mpartial), where T40%(·) denotes a thresholding operator that retains the top 40% of edges (by absolute partialcorrelation strength) while setting the rest to zer-
o. This combines global co-activation (Pearson) and direct dependencies (partial correlation) within a unified graph representation.
2.3. Proposed Brain–MGF Framework
The proposed Brain–MGF integrates modality-specific graph encoders with an adaptive fusion gate for joint EEG–fMRI analysis. The model architecture is shown in Fig. 1.
(1) Graph encoders. Each modality m ∈ {EEG, fMRI} is represented by a graph (  ̃Am, Xm), where  ̃Am is the top-k sparsified partial-correlation matrix and Xm = AP
m + ψ(I) is the node feature matrix combining Pearson-based connectivity profiles with a learnable pseudo-identity prior. Each graph is processed by a three-layer GraphConv encoder:
H(l+1)
m = φ  ̃AmH(l)
m W(l)
m (4)
where φ is the ReLU activation, H(l)
m the node features, and W(l)
m
the trainable weights at layer l respectively. Global mean pooling produces a subject-level embedding zm ∈ Rd for each modality.
(2) Adaptive fusion gating. A two-layer MLP takes the concatenated embeddings [ zEEG, zfMRI ] and outputs softmax weights αEEG and αfMRI satisfying αEEG + αfMRI = 1. The fused representation is computed as
zfus = αfMRI zfMRI + αEEG zEEG (5)
where gating weights are applied uniformly across feature dimensions after mean pooling. (3) Classification head. The fused embedding zfus is passed through a multilayer perceptron with sigmoid output:
yˆ = σ(Wc zfus + bc) (6)
to predict the psilocybin versus no-psilocybin condition. The model was implemented in PyTorch and optimised using the binary crossentropy (BCE) loss:
LBCE = − 1
N
N
X
i=1
[yi log yˆi + (1 − yi) log(1 − yˆi)] (7)
3. EXPERIMENTAL RESULTS
We benchmarked GCN [22], BrainGNN [7] and BrainNetCNN [23] against three multimodal fusion variants: • Late-Fusion (MLP): Each modality is processed by a dedicated graph encoder to produce embeddings zfMRI and zEEG. These are concatenated and passed to an MLP classifier:
zfus = [ zfMRI, zEEG ], yˆ = MLP(zfus) (8)
This late-fusion variant relies on dense layers to integrate EEG and fMRI information without explicit modality weighting. • Brain–MGF (w/o Gate): A simplified version of the proposed model without (w/o) gating mechanism. The modality embeddings are directly averaged to form a unified representation:
zfus = 1
2 (zfMRI + zEEG) , yˆ = MLP(zfus). (9)
This provides a fixed and interpretable fusion for isolating the effect of adaptive gating. • Brain–MGF (Proposed): The full adaptive fusion framework, where a softmax gating network learns sample-specific weights α ∈ (0, 1) to modulate modality contributions, as shown in Eq. 5. The gating enables context-sensitive integration of EEG and fMRI representations. All models share identical preprocessing, top-40% sparsification, per-modality ROI projections, and classifier depth for fair comparison. Tr-
aining used the Adam optimiser (learning rate 3 × 10−4 to 5 × 10−4, weight decay 1 × 10−4) with early stopping (patience 8 epochs). Evaluation employed 5-fold cross-validation with stratified splits, reporting accuracy, precision, sensitivity, specificity, F1score, ROC–AUC and BCE loss. Table 1 compares Brain-MGF against established fMRI-based graph models on the meditation task. Among unimodal baseline models, GCN achieved the highest accuracy (69.71%) and ROC-AUC (76.45%), outperforming BrainGNN-
 and BrainNetCNN, which exhibited higher loss variance and lower specificity. When extended to multimodal EEG–fMRI fusion, the proposed Brain-MGF framework consistently improved predictive performance. The full model achieved 74.02% accuracy and 76.48% F1-score, surpassing its Late-Fusion MLP and w/o Gate variants by 4.3% to 4.4%. This demonstrates the effectiveness of the adaptive gating mechanism in balancing complementary information across modalities while maintaining stable training loss (0.5-
8 ± 0.11).
Table 1: Benchmark comparison of unimodal (fMRI) and multimodal (EEG+fMRI) models on the meditation task. Brain-MGF denotes the proposed Adaptive Graph Fusion Network and its ablated variants. Results are reported as mean ± SD over 5 folds (BCE loss).
Model Modality Accuracy Precision Sensitivity Specificity F1 Score ROC-AUC BCE Loss
GCN [22] fMRI 69.71±5.73 68.92±4.19 79.23±11.44 58.79±12.65 73.20±5.88 76.45±9.67 0.6358±0.2090 BrainGNN [7] fMRI 61.27±7.15 66.22±9.50 56.92±5.65 65.91±13.64 60.96±6.34 67.12±7.93 0.6514±0.0845 BrainNetCNN [23] fMRI 62.93±8.14 64.46±12.77 82.69±17.29 41.21±29.23 69.89±5.73 69.58±6.64 0.8479±0.4399
Late-Fusion (MLP) EEG+fMRI 69.75±3.09 68.63±4.11 80.64±8.89 56.97±13.74 73.69±3.02 74.46±2.65 0.6567±0.1318 Brain-MGF (w/o Gate) EEG+fMRI 69.67±6.54 70.50±7.30 74.36±12.59 64.55±11.64 71.71±8.10 77.13±9.21 0.6459±0.1675 Brain-MGF (Proposed) EEG+fMRI 74.02±6.99 74.05±9.00 80.90±12.93 66.21±17.22 76.48±6.95 75.72±11.29 0.5800±0.1075

Table 2: EEG, fMRI, and Fusion performance on PsiConnect (Meditation and Rest; 5-fold CV, BCE loss). Fusion is implemented using the proposed Brain–MGF network. Results are mean ± SD (%).
Task Modality Accuracy Precision Sensitivity Specificity F1 Score ROC-AUC BCE Loss
Meditation
EEG 59.64 ± 9.45 65.18 ± 13.03 55.38 ± 16.74 64.39 ± 19.63 58.26 ± 12.02 67.80 ± 10.35 0.623 ± 0.038 fMRI 68.84 ± 10.30 69.95 ± 8.52 73.08 ± 12.99 63.94 ± 13.29 71.14 ± 9.79 77.16 ± 9.24 0.548 ± 0.078 Fusion (EEG+fMRI) 74.02 ± 6.99 74.05 ± 9.00 80.90 ± 12.93 66.21 ± 17.22 76.48 ± 6.95 75.72 ± 11.29 0.580 ± 0.108
Rest
EEG 68.53 ± 7.91 71.76 ± 7.29 62.95 ± 15.29 73.94 ± 6.29 66.57 ± 11.52 75.35 ± 6.23 0.566 ± 0.065 fMRI 72.67 ± 4.52 74.32 ± 6.55 74.49 ± 9.32 70.61 ± 11.96 73.77 ± 4.54 81.33 ± 6.78 0.513 ± 0.063 Fusion (EEG+fMRI) 76.00 ± 8.15 76.30 ± 10.30 79.10 ± 11.11 72.58 ± 12.41 77.20 ± 8.20 85.83 ± 8.57 0.467 ± 0.115
(a) EEG (b) fMRI (c) Fusion (EEG+fMRI)
Fig. 2: UMAP visualisation of learned embeddings during meditation. Each point represents a subject; colour denotes condition (nopsilocybin vs. psilocybin). EEG embeddings show overlapping clusters, fMRI displays clearer separation, and fusion achieves the most distinct manifolds, reflecting its quantitative advantage in Table 1 and Table 2. .
Table 2 presents results for EEG, fMRI, and fusion models on both meditation and rest tasks. For meditation, fMRI yielded stronger discriminative performance (68.84% accuracy) than EEG alone (59.64%), consistent with the richer spatial information captured in fMRI connectivity. However, the multimodal fusion via Brain-MGF further enhanced accuracy to 74.02% and ROC-AUC to 75.72%, confirming that integrating temporal EEG dynamics with spatial fMRI structure benefits behavioural state decoding. For -
the rest condition, overall accuracies were higher across modalities, suggesting reduced inter-subject variability during unconstrained no-psilocybin scans. Fusion again achieved the best results (76.00% accuracy, 85.83% ROC-AUC), highlighting the model’s robustness across cognitive states. In both tasks, the adaptive gating enabled effective cross-modality weighting, leading to consistent improvements over single-modality baseline models. Across benchmarks and tasks, Brain-MGF achieved performanc-
e gains over unimodal and non-adaptive variants, providing preliminary evidence that adaptive EEG–fMRI fusion is useful.
4. DISCUSSION
To qualitatively assess the latent representations, Fig. 2 visualises the final-layer embeddings of EEG, fMRI, and fused features for the meditation task using Uniform Manifold Approximation and Projection (UMAP) [24]. UMAP is a non-linear dimensionality reduction technique that preserves both local and global data structure by constructing a fuzzy topological representation of the high-dimensional manifold. It was applied to the combined train–test embeddings (nneighbors = 15, mindist = 0.1, Eucl-
idean metric) from the bestperforming fold for visualisation. While unimodal embeddings exhibit partial overlap between no-psilocybin and psilocybin, the fused embeddings form more distinct clusters, suggesting that adaptive fu
sion produces a more separable latent space. Beyond aggregate performance, the adaptive gate provides an interpretable view of modality contributions. The gating coefficients αfMRI and αEEG were obtained from the softmax fusion defined in Eq. (5). Across folds, a modest fMRI bias was observed at rest (mean αfMRI = 0.58 ± 0.07), with several folds significantly above chance (Wilcoxon vs. 0.5) [25], suggesting that slow haemodynamic coupling offers a more stable representation of baseline integratio-
n. During meditation, the average weighting still favoured fMRI (mean αfMRI = 0.56 ± 0.10) but showed greater betweenfold variability, including one EEG-dominant case, consistent with increased electrophysiological synchrony during focused attention. This state-dependent reweighting aligns with evidence that psilocybin reorganises large-scale network dynamics and enhances cross-system integration [1]. Overall, the gating analysis indicates that fMRI connectivity forms a stable backbone for decodin-
g psilocybin versus no-psilocybin, while EEG contributes complementary, context-dependent information.
5. CONCLUSION
This work presented Brain–MGF, a multimodal graph fusion framework for joint EEG–fMRI connectivity analysis under psilocybin. By learning adaptive weights between modalities, the model integrates complementary patterns of haemodynamic and electrophysiological connectivity in a data-driven manner. Experiments on the PsiConnect dataset showed consistent improvements over unimodal and non-adaptive variants, indicating that adaptive gating enhances cross-modal representation of psilocybin-induced brai-
n states. While preliminary, these findings suggest that Brain–MGF provides a practical approach for studying neural integration across physiological domains.

6. COMPLIANCE WITH ETHICAL STANDARDS
The PsiConnect study was approved by the Monash University Human Research Ethics Committee and registered under ACTRN12621001375842. All participants provided informed consent.
7. REFERENCES
[1] Devon Stoliker, Leonardo Novelli, Moein Khajehnejad, Mana Biabani, Tamrin Barta, Matthew D Greaves, Martin Williams, Sidhant Chopra, Olivier Bazin, Otto Simonsson, et al., “Psychedelics align brain activity with context,” bioRxiv, pp. 2025–03, 2025.
[2] James J Gattuso, Daniel Perkins, Simon Ruffell, Andrew J Lawrence, Daniel Hoyer, Laura H Jacobson, Christopher Timmermann, David Castle, Susan L Rossell, Luke A Downey, et al., “Default mode network modulation by psychedelics: a systematic review,” International Journal of Neuropsychopharmacology, vol. 26, no. 3, pp. 155–188, 2023.
[3] Sarah Kuburi, Anne-Marie Di Passa, Vanessa K Tassone, Raesham Mahmood, Aleksandra Lalovic, Karim S Ladha, Katharine Dunlop, Sakina Rizvi, Ilya Demchenko, and Venkat Bhat, “Neuroimaging correlates of treatment response with psychedelics in major depressive disorder: A systematic review,” Chronic Stress, vol. 6, pp. 24705470221115342, 2022.
[4] Richard E Daws, Christopher Timmermann, Bruna Giribaldi, James D Sexton, Matthew B Wall, David Erritzoe, Leor Roseman, David Nutt, and Robin Carhart-Harris, “Increased global integration in the brain after psilocybin therapy for depression,” Nature medicine, vol. 28, no. 4, pp. 844–851, 2022.
[5] Danielle S Bassett and Olaf Sporns, “Network neuroscience,” Nature neuroscience, vol. 20, no. 3, pp. 353–364, 2017.
[6] Alaa Bessadok, Mohamed Ali Mahjoub, and Islem Rekik, “Graph neural networks in network neuroscience,” IEEE Transactions on Pattern Analysis and Machine Intelligence, vol. 45, no. 5, pp. 5833–5848, 2022.
[7] Xiaoxiao Li, Yuan Zhou, Nicha Dvornek, Muhan Zhang, Siyuan Gao, Juntang Zhuang, Dustin Scheinost, Lawrence H Staib, Pamela Ventola, and James S Duncan, “Braingnn: Interpretable brain graph neural network for fmri analysis,” Medical Image Analysis, vol. 74, pp. 102233, 2021.
[8] Fuad Noman, Sin-Yee Yap, Rapha ̈el C-W Phan, Hernando Ombao, and Chee-Ming Ting, “Graph autoencoder-based embedded learning in dynamic brain networks for autism spectrum disorder identification,” in 2022 IEEE International Conf. on Image Processing (ICIP). IEEE, 2022, pp. 2891–2895.
[9] Fuad Noman, Rapha ̈el C.-W. Phan, Hernando Ombao, and Chee-Ming Ting, “Adaptive graph learning with multi-graph convolutions for brain disorder classification,” in Proceedings of the International Conference on Medical Image Computing and Computer-Assisted Intervention (MICCAI 2025). 2025, pp. 56–65, Springer Nature Switzerland.
[10] Yu Zhang, Loı ̈c Tetrel, Bertrand Thirion, and Pierre Bellec, “Functional annotation of human cognitive states using deep graph convolution,” NeuroImage, vol. 231, pp. 117847, 2021.
[11] Ziyuan Ye, Youzhi Qu, Zhichao Liang, Mo Wang, and Quanying Liu, “Explainable fMRI-based brain decoding via spatial temporal-pyramid graph convolutional network,” Human Brain Mapping, vol. 44, no. 7, pp. 2921–2935, 2023.
[12] Dongya Wu, Xin Li, and Jun Feng, “Connectome-based individual prediction of cognitive behaviors via graph propagation network reveals directed brain network topology,” Journal of Neural Engineering, vol. 18, no. 4, pp. 0460a3, 2021.
[13] Xuyun Wen, Qumei Cao, Bin Jing, and Daoqiang Zhang, “Multi-scale fc-based multi-order gcn: A novel model for predicting individual behavior from fmri,” IEEE Transactions on Neural Systems and Rehabilitation Engineering, vol. 32, pp. 548–558, 2024.
[14] Hiroshi Shibasaki, “Human brain mapping: hemodynamic response and electrophysiology,” Clinical Neurophysiology, vol. 119, no. 4, pp. 731–743, 2008.
[15] Tadas Baltruˇsaitis, Chaitanya Ahuja, and Louis-Philippe Morency, “Multimodal machine learning: A survey and taxonomy,” IEEE transactions on pattern analysis and machine intelligence, vol. 41, no. 2, pp. 423–443, 2018.
[16] Hamed Mohammadi and Waldemar Karwowski, “Graph neural networks in brain connectivity studies: Methods, challenges, and future directions,” Brain Sciences, vol. 15, no. 1, pp. 17, 2024.
[17] Jing Sui, Dongmei Zhi, and Vince D Calhoun, “Data-driven multimodal fusion: approaches and applications in psychiatric research,” Psychoradiology, vol. 3, pp. kkad026, 2023.
[18] Leonardo Novelli, Devon Stoliker, Tamrin Barta, Matthew D Greaves, Sidhant Chopra, James Jackson, Jessica Kwee, Martin L Williams, and Adeel Razi, “Psiconnect: A multimodal neuroimaging study of psilocybin-induced changes in brain and behaviour,” bioRxiv, pp. 2025–04, 2025.
[19] Oscar Esteban, Christopher J Markiewicz, Ross W Blair, Craig A Moodie, A Ilkay Isik, Asier Erramuzpe, James D Kent, Mathias Goncalves, Elizabeth DuPre, Madeleine Snyder, et al., “fMRIPrep: a robust preprocessing pipeline for functional MRI,” Nature methods, vol. 16, no. 1, pp. 111–116, 2019.
[20] NW Bailey, Mana Biabani, AT Hill, Aleksandra Miljevic, Nigel C Rogasch, B McQueen, Oscar W Murphy, and PB Fitzgerald, “Introducing relax: An automated preprocessing pipeline for cleaning eeg data-part 1: Algorithm and application to oscillations,” Clinical Neurophysiology, vol. 149, pp. 178–201, 2023.
[21] Alexander Schaefer, Ru Kong, Evan M Gordon, Timothy O Laumann, Xi-Nian Zuo, Avram J Holmes, Simon B Eickhoff, and BT Thomas Yeo, “Local-global parcellation of the human cerebral cortex from intrinsic functional connectivity MRI,” Cerebral cortex, vol. 28, no. 9, pp. 3095–3114, 2018.
[22] TN Kipf, “Semi-supervised classification with graph convolutional networks,” arXiv preprint arXiv:1609.02907, 2016.
[23] Jeremy Kawahara, Colin J Brown, Steven P Miller, Brian G Booth, Vann Chau, Ruth E Grunau, Jill G Zwicker, and Ghassan Hamarneh, “Brainnetcnn: Convolutional neural networks for brain networks; towards predicting neurodevelopment,” NeuroImage, vol. 146, pp. 1038–1049, 2017.
[24] Leland McInnes, John Healy, and James Melville, “Umap: Uniform manifold approximation and projection for dimension reduction,” arXiv preprint arXiv:1802.03426, 2018.
[25] Jack Cuzick, “A Wilcoxon-type test for trend,” Statistics in medicine, vol. 4, no. 1, pp. 87–90, 1985.

---

## Processing Information

- **Processing Library:** Zotero PDFWorker
- **Processing Date:** 2026-02-10T18:18:28.680Z
- **Text Length:** 27260 characters
- **Success:** Text extraction completed
- **PDF Library Used:** Zotero PDFWorker
- **Pages Processed:** 5 of 5
