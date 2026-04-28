# PDF Document: Kumar et al. - 2025 - CASPER Cross-modal Alignment of Spatial and single-cell Profiles for Expression Recovery.pdf

**File Path:** Kumar et al. - 2025 - CASPER Cross-modal Alignment of Spatial and single-cell Profiles for Expression Recovery.pdf

**Processed Date:** 2026-02-10T18:17:53.140Z

**File Size:** 329.71 KB

**Total Pages:** 4

**Extracted Pages:** 4

**PDF Library:** Zotero PDFWorker

**Attachment Item ID:** 3629

**Title:** CASPER: Cross-modal Alignment of Spatial and single-cell Profiles for Expression Recovery

**Collection:** Large Files > Random Papers

---

## Extracted Text Content

CASPER: CROSS-MODAL ALIGNMENT OF SPATIAL AND SINGLE-CELL PROFILES FOR EXPRESSION RECOVERY
Amit Kumar † Maninder Kaur† Raghvendra Mall ⋆ Sukrit Gupta‡
† Department of Computer Science & Engineering, Indian Institute of Technology Ropar, India ⋆ Qatar Computing Research Institute, Hamad Bin Khalifa University, Doha, Qatar. ‡ Department of Biomedical Engineering, Indian Institute of Technology Ropar, India
ABSTRACT
Spatial Transcriptomics (ST) enables mapping of gene expression within its native tissue context, but current platforms measure only a limited set of genes due to experimental constraints and excessive costs. To overcome this, computational models integrate Single-Cell RNA Sequencing (scRNA-seq) data with ST to predict unmeasured genes. We propose Cross-modal Alignment of Spatial and single-cell Profiles for Expression Recovery (CASPER), a cross-attention based framework that predicts unmeasured g-
ene expression in ST by leveraging centroid-level representations from scRNA-seq. We performed rigorous testing over four state-of-the-art (SOTA) ST/scRNA-seq dataset pairs across four existing baseline models. CASPER shows significant improvement in nine out of the twelve metrics for our experiments. This work paves the way for further work in ST to scRNA-seq modality translation. The code for CASPER is available at https://github.com/AI4Med-Lab/CASPER.
Index Terms— Deep Learning, Spatial Transcriptomics, SingleCell RNA-Seq, Computational Pathology, Histopathology Imaging
1. INTRODUCTION
ST has opened new possibilities for understanding how gene expression is organized within intact tissues, providing a bridge between molecular biology and histopathology. However, current ST technologies, such as 10x Genomics’ Visium and Xenium can measure only a few hundred selected genes due to assay and cost limitations, while most genes in the genome remain unmeasured. In contrast, scRNA-seq captures genome-wide gene expression across individual cells but loses spatial context because tissues -
must be dissociated. Integrating these two complementary modalities has therefore become a key computational challenge in spatial omics research. Recent studies have proposed several ways to bridge the gap between ST and scRNA-seq data. Probabilistic models such as gimVI [1] use variational inference to jointly model missing gene expression, while optimal transport methods such as SpaOTsc [2] compute a global transport plan to match cells to spatial locations. Other approaches, including SpaGE [3]-
, Tangram [4], and stPlus [5], rely on global alignment, where a single mapping or shared latent space is applied uniformly across the entire tissue to align the two modalities. Although effective in homogeneous settings, these global alignment strategies often over smooth the underlying biological variation and fail to capture region-specific transcriptional programs, especially in heterogeneous tissues. Methods such as STDiff [6] incorporate nonlinearity but still depend on global embeddings. In-
 this work, we introduce a new model, CASPER, which imputes genome-wide gene expression for ST using scRNA-seq data.
Briefly, the steps involved include, clustering scRNA-seq cells into a small set of representative centroids using Leiden clustering [7], capturing distinct celltype transcriptional patterns while improving computational scalability. Then, a pair of modality-specific encoders projects spatial and scRNA-seq data into a shared latent space, and a cross-attention decoder learns contextual correspondences by allowing each spatial spot to attend to the most relevant celltype centroids. We train an end--
to-end model using masked spatial reconstruction as shown in Figure 1. This design allows the model to transfer rich transcriptional information from scRNA-seq to spatial locations while maintaining local consistency across tissue spots. Thus, CASPER integrates ST and scRNA-seq data locally and contextually overcoming limitations of SOTA. Our primary contributions are summarized as follows: • A method to encode each spatial gene expression vector to a distinct query vector that reflects its local -
transcriptional signature rather than applying a single global mapping across tissue. • Attention weights facilitate a straightforward biological interpretation of how each spatial location maps to a particular cell niche/cluster enabling efficient gene expression imputation. • Our method consistently outperforms SOTA techniques in comprehensive comparisons across four different spatial transcriptomics datasets, providing significantly higher correlations (up to 0.230) and significantly smaller er-
rors, in some cases lowering MAPE by more than 60%. • Provide a foundation for spatial gene expression inference leveraging scRNA-seq across tissues and disease state.
2. METHODS
Our goal is to predict genome-wide gene expression at spatial locations in the tissue, given that ST data only has a subset of measured genes. For this, we design a cross-domain learning framework that leverages scRNA-seq data as a high-dimensional reference. The scRNA-seq dataset covers a broader transcriptional landscape than the ST measurements.
2.1. Problem Setup
Let the spatial data be denoted by Xsp ∈ Rnsp×dsp , where nsp is the number of spatial spots and dsp is the number of genes profiled in the ST platform. Similarly, the scRNA-seq data is represented as Xsc ∈ Rnsc×dsc , with nsc cells and dsc measured genes. Only a subset of genes, denoted by Gshared, is common between the two modalities, and the target is the set of unmeasured genes Gtarget. Both matrices are log1p-normalized and gene-wise standardized.
arXiv:2511.15139v1 [q-bio.GN] 19 Nov 2025

Cross Attention Fusion
K
Q
Dual Encoder for Latent Representation
scRNA Centroid Construction
Attention Matrix computation
Leiden Clustering V
Fig. 1. Overview of the proposed CASPER framework for spatial gene expression imputation.
2.2. scRNA Centroid Construction
To reduce redundancy and computational cost while preserving biological diversity, we cluster scRNA cells using Leiden clustering [7] on a Principal Component Analysis (PCA)-reduced graph constructed from Highly Variable Gene (HVG). Each cluster ci yields a centroid computed as the mean expression of its member cells:
ci = 1
|Ci|
X
xj ∈Ci
xj ,
resulting in the centroid matrix C = [ c⊤
1 , c⊤
2 , . . . , c⊤
k ]⊤ ∈
Rk×dH where k is the number of clusters and dH is the HVG dimension. Each centroid captures a celltype–level expression profile, acting as a compact biological token in the single-cell modality.
2.3. Dual Encoders and Latent Representations
Both modalities are embedded into a shared latent space of dimension d using separate feed-forward encoders:
Hsp = fθ(Xsp), Hsc = hφ(C),
where Hsp ∈ Rnsp×d and Hsc ∈ Rk×d. Each encoder consists of two fully connected layers with GELU activation and dropout:
fθ(x) = Linear2 Dropout(GELU(Linear1(x))) ,
and analogously for hφ. These encoders learn modality-specific nonlinear transformations that preserve within-domain structure while projecting both domains into a comparable latent space.
2.4. Cross-Attention Fusion
We integrate ST and scRNA-seq representations using a crossattention mechanism, which enables each spatial spot to selectively attend to relevant scRNA-seq centroids.
2.4.1. Query–Key–Value projections
To form attention components, we learn linear projections:
Q = HspWQ, K = HscWK , V = HscWV ,
where WQ, WK , WV ∈ Rd×d are learnable matrices, and thus Q ∈ Rnsp×d, K, V ∈ Rk×d.
2.4.2. Attention computation
Scaled dot-product attention between spatial queries and centroid keys is computed as:
A = softmax QK⊤
√d , A ∈ Rnsp×k.
Each row of A represents how a spatial spot distributes its attention over all k centroids. The attention-weighted fusion of centroid values yields the integrated spatial embeddings:
Hatt
sp = AV ∈ Rnsp×d.
A residual connection and layer normalization are applied within the attention block to stabilize training. Finally, a linear projection maps the attention output to the target gene space:
Hpred
sp = Hatt
sp Wout + bout, Hpred
sp ∈ Rnsp×dT ,
where Wout ∈ Rd×dT and bout ∈ RdT are learnable parameters, and dT = |Gtarget| denotes total target genes to be imputed.
2.5. Loss Functions/ Masked ST reconstruction loss
Only observed genes in the ST contribute to reconstruction:
Lsp = 1
P
i,j Mij
Msp ⊙ (Hpred
sp − Hobs
sp ) 2
F,
Here, Hpred
sp ∈ Rnsp×dT denotes the model-predicted expression matrix for all target genes, while Hobs
sp represents the subset of gene expressions that are experimentally observed in the ST data. Since only a limited number of genes are measured in current ST platforms, we apply a binary mask Msp ∈ {0, 1}nsp×dT to restrict the reconstruction loss to the observed entries. This masked meansquared reconstruction term ensures that the model learns from valid spatial measurements while still being able to infer unmeasured genes during inference.
2.6. Interpreting the results
To show that CASPER encapsulates, the one-to-many mapping of a spatial spot against the scRNA-seq based centroids, we look at the attention vector associated with each spot. If CASPER mapped each spatial spot with multiple celltypes (forming clusters) from the input scRNA data, the attention scores would be diffused across the test samples. To measure this, we computed entropy and Top-2 gap of attention scores learnt by CASPER. Entropy: From the attention matrix A, the attention vector for each sp-
atial gene expression is given by a = (a1, a2, . . . , aK ). The entropy of this probability distribution is given by:
E(a) = −
K
X
i=1
ai log(ai)
A large E(a) value indicates that the attention was spread across clusters. The maximum value that E(a) can take is upper-bounded by log(K), where K is number of clusters. Top-2 Gap: Let a(1) ≥ a(2) ≥ · · · ≥ a(K) be the probabilities sorted in descending order. The Top-2 probability gap is given by:
F (a) = a(1) − a(2)
A large gap indicates a distribution where one class clearly dominates, whereas a small gap indicates that the probability mass spread across at least two clusters.

3. RESULTS
3.1. Datasets
We evaluate the proposed framework using four publicly available ST datasets (MERFISH/Moffitt [8], seqFISH/AllenVISp [9, 10], osmFISH/Zeisel [11, 12], and STARmap/AllenVISp [13, 10]), each paired with a corresponding scRNA-seq reference dataset from the same or closely related mouse brain tissues. Each spatial dataset provides measured expression profiles for a subset of genes, typically ranging from tens to a few thousand, across spatially resolved tissue locations. These datasets encompass multi-
ple spatial profiling technologies (osmFISH and MERFISH employ targeted hybridization, while seqFISH and STARmap achieve high multiplexing through sequential imaging), enabling us to assess the model’s generalization across distinct platforms and spatial resolutions. The paired scRNA-seq references contain transcriptomes of thousands of single cells with a broader gene coverage, serving as transcriptional priors for gene imputation. To ensure consistent preprocessing, all expression matrices were -
log1p-normalized, and shared gene identifiers were harmonized between the ST and scRNA-seq modalities before downstream integration. The diversity in gene coverage and tissue structures across these datasets provides a rigorous benchmark for evaluating model robustness and cross-modal generalization. A detailed summary is provided in Table 1.
Table 1. Summary of ST and scRNA-seq datasets used. The datasets span multiple mouse brain regions, including the Pre-Optic Region (POR), Visual Cortex (VISc), and Somatosensory Cortex (SMSc). Spatial/scRNA Data Tissue # Spots #ST Genes # Cells # SC Genes
merFISH/Moffitt POR 64,373 155 31,299 18,646 seqFISH/AllenVISp VISc 913 10,000 14,249 34,617 osmFISH/Zeisel SMSc 3,405 33 1,691 15,075 STARmap/AllenVISp VISc 1,549 1,020 14,249 34,617
3.2. Dataset Split
Each dataset was first divided into an 80% training and a 20% test split, where the test regions were kept spatially separate to prevent data leakage. Within the 80% training portion, we further applied a 5-fold cross-validation scheme. For each fold, the shared gene set was partitioned such that a subset of genes were treated as targets and the remaining genes were used as model inputs during training. The model was trained on these training folds using matched scRNA-seq centroids derived through-
 HVG selection, PCA, and Leiden clustering, while the validation fold was used for early stopping and hyperparameter selection. During testing, we evaluated performance on the held-out 20% spatial regions by predicting the same target genes that were removed during training, and we report results using Pearson Correlation Coefficient (PCC), Spearman Rank Correlation Coefficient (SRCC), and Mean Absolute Percentage Error (MAPE) computed on these withheld genes.
3.3. Model Training
The model was trained end-to-end using the Adam optimizer with an initial learning rate of 10−4, dropout rate of 0.1, latent dimension d = 256, batch size of 128, and weight decay of 10−5 for a maximum of 200 epochs. Lsp is used as a loss function. For efficiency, the scRNA embeddings Hsc are precomputed at the beginning of each epoch. During training, each spatial batch
C0 C1 C2 C3 C4 C5 C6 C7 C8 C9 C10 C11 C12 C13 C14 C15 scRNA Centroids
Spot_0
Spot_1
Spot_2
Spot_3
Spot_4
Spot_5
Spot_6
Spot_7
Spot_8
Spot_9
MERFISH Spots
0.1
0.2
0.3
0.4
Fig. 2. Attention-based mapping between merFISH ST spots (Spotx) and scRNA-seq centroids (Cx), where x is variable.
attends to all k scRNA centroids via the attention matrix A, ensuring that every spatial region can access biologically relevant celltype information. At inference, the learned decoder maps the fused embeddings to Hpred
sp , yielding log1p-normalized predictions of unmeasured gene expression across spatial coordinates. All experiments were implemented in the PyTorch framework using Python 3.11 and executed on an NVIDIA RTX A5000 GPU (24 GB VRAM).
3.4. Imputation performance comparison
Table 2 presents a comprehensive comparison of the proposed method with four existing benchmarks including SpaGE, Tangram, stPlus, and stDiff across the selected datasets. From Table 2, we observed that CASPER outperforms existing SOTA across a majority of the metrics on myriad datasets. Besides the pearson and spearman correlation, we employed MAPE to estimate the error in prediction by different models when compared to the groundtruth. CASPER consistently (and significantly) gave lower MAPE valu-
es (below 100 in all considered scenarios) as shown in Table 2.
3.5. Interpretability results from CASPER
The attention weights for a random set of merFISH ST spots from the test set and the contributions from their corresponding scRNA-seq centroids (obtained via Leiden clustering) are shown in Figure 2. Figure 2 illustrates the degree to which a celltype contributes to the model’s reconstruction of gene expression vector for a particular spatial location. Furthermore, Table 3 highlights the entropy and the Top-2 gap for each test set, where we consistently observe low entropy (minimum entropy is 0, m-
aximum entropy is log k) and high Top-2 gap indicating each spatial spot imputes gene expression predominantly from one scRNA-seq cluster centroid.
4. CONCLUSION
In this work, we propose CASPER, a tranformer-based method that applies cross-attention between embeddings from ST and scRNA-seq data to impute missing gene expressions for ST. Across all evaluated datasets, CASPER consistently outperforms existing baselines. Our analysis of the learned attention patterns confirms that CASPER does not rely on one-to-one cell matching; instead, it effectively weights information from multiple centroids (predominantly driven by a single cluster centroid) to reconstr-
uct the missing gene expression for each spatial spot.

Table 2. Comparison of different imputation methods on the various datasets present in Table 1, reported meanstandard deviation across test sets. The ∗ denotes statistically significant improvement (p < 0.05, one-sided paired t-test) of the best-performing method (denoted by bold text) compared to the second best (underlined).
Dataset
# Common
Genes Metric SpaGE Tangram stPlus stDiff CASPER
MERFISH/
Moffitt 154
Pearson ↑ 0.3340.030 0.3070.039 0.3020.031 0.1010.017 0.5030.024∗ Spearman ↑ 0.2850.034 0.2860.028 0.2680.033 0.0970.019 0.4480.022∗ MAPE (%) ↓ 147.14023.530 133.16022.950 142.90030.240 530.970207.300 72.790∗
9.940
seqFISH/
AllenVISp 9,782
Pearson ↑ 0.0960.010 0.2160.002∗ 0.1060.005 0.0010.001 0.1960.003 Spearman ↑ 0.1300.010 0.3030.001∗ 0.1280.007 0.0010.001 0.3010.002 MAPE (%) ↓ 73.9100.240 375.080301.320 274.680284.060 256.4504.410 65.950∗
0.470
osmFISH/
Zeisel 33
Pearson ↑ 0.1500.028 0.1970.033 0.1990.032 0.0020.011 0.4290.042∗ Spearman ↑ 0.1610.033 0.1650.031 0.2030.042 −0.0010.016 0.4060.038∗ MAPE (%) ↓ 79.3004.300 84.1606.610 82.1906.910 130.8801.150 26.030∗
2.710
STARmap/
AllenVISp 994
Pearson ↑ 0.1440.013 0.1760.007 0.0920.011 0.0250.005 0.1930.007∗ Spearman ↑ 0.1350.012 0.1770.007 0.1000.013 0.0240.004 0.1970.006∗ MAPE (%) ↓ 67.250∗
1.240 198.270131.190 158.040121.290 154.0804.880 74.4201.454
Dataset # Centroids (K) log K Entropy Top-2 Gap merFISH 16 2.772 1.0950.555 0.5880.230 osmFISH 15 2.708 1.8160.273 0.0900.108 starMAP 29 3.367 0.4850.148 0.7740.073
Table 3. Entropy and Top-2 Gap reported as meanstandard deviation across test sets from different datasets. We skip the results for the seqFISH dataset since the number of test samples are < 200 with high sparsity for gene expressions.
Overall, the results suggest that cross-attention provides a principled and inexpensive framework to couple ST and scRNA-seq data for imputing ST gene expression vector, paving the way for better downstream analysis and biomarker discovery with ST data.
5. REFERENCES
[1] Romain Lopez, Achille Nazaret, Maxime Langevin, Jules Samaran, Jeffrey Regier, and Michael I Jordan, “A joint model of unpaired data from scrna-seq and spatial transcriptomics for imputing missing gene expression measurements,” arxiv.org, May 2019.
[2] Zixuan Cang and Qing Nie, “Inferring spatial and signaling relationships between cells from single cell transcriptomic data,” Nature communications, vol. 11, no. 1, pp. 2084, 2020.
[3] Tamim Abdelaal, Soufiane Mourragui, and Ahmed Mahfouz, “Spage: spatial gene enhancement using scrna-seq,” Nucleic acids research, vol. 48, no. 18, pp. e107–e107, 2020.
[4] Tommaso Biancalani, Gabriele Scalia, Lorenzo Buffoni, and Raghav Avasthi, “Deep learning and alignment of spatially resolved single-cell transcriptomes with tangram,” Nature methods, vol. 18, no. 11, pp. 1352–1362, 2021.
[5] Chen Shengquan, Zhang Boheng, Chen Xiaoyang, and Zhang Xuegong, “stplus: a reference-based method for the accurate enhancement of spatial transcriptomics,” Bioinformatics, vol. 37, no. Supplement 1, pp. i299–i307, 2021.
[6] Kongming Li, Jiahao Li, and Yuhao Tao, “stdiff: a diffusion model for imputing spatial transcriptomics through single-cell
transcriptomics,” Briefings in Bioinformatics, vol. 25, no. 3, 2024.
[7] Vincent A Traag, Ludo Waltman and Nees Jan Van Eck, “From louvain to leiden: guaranteeing well-connected communities,” Scientific reports, vol. 9, no. 1, pp. 1–12, 2019.
[8] Jeffrey R. Moffitt, Dhananjay Bambah-Mukku, Stephen W. Eichhorn, and Vaughn, “Data from: Molecular, spatial and functional single-cell profiling of the hypothalamic preoptic region,” 01 2018.
[9] Chee-Huat Linus Eng, Michael Lawson, Qian Zhu, Ruben Dries, and Noushin Koulena, “Transcriptome-scale superresolved imaging in tissues by rna seqfish+,” Nature, vol. 568, no. 7751, pp. 235–239, 2019.
[10] Bosiljka Tasic, Zizhen Yao, Lucas T Graybuck, Kimberly A Smith, Thuc Nghi Nguyen, and Bertagnolli, “Shared and distinct transcriptomic cell types across neocortical areas,” Nature, vol. 563, no. 7729, pp. 72–78, 2018.
[11] Simone Codeluppi, Lars E Borm, Amit Zeisel, Gioele La Manno, Josina A van Lunteren, and Camilla I Svensson, “Spatial organization of the somatosensory cortex revealed by osmfish,” Nature methods, vol. 15, no. 11, pp. 932–935, 2018.
[12] Amit Zeisel, Ana B Mun ̃oz-Manchado, Simone Codeluppi, and Peter Lo ̈nnerberg, “Cell types in the mouse cortex and hippocampus revealed by single-cell rna-seq,” Science, vol. 347, no. 6226, pp. 1138–1142, 2015.
[13] Xiao Wang, William E Allen, Matthew A Wright, and Emily L Sylwestrak, “Three-dimensional intact-tissue sequencing of single-cell transcriptional states,” Science, vol. 361, no. 6400, pp. eaat5691, 2018.

---

## Processing Information

- **Processing Library:** Zotero PDFWorker
- **Processing Date:** 2026-02-10T18:17:53.140Z
- **Text Length:** 20628 characters
- **Success:** Text extraction completed
- **PDF Library Used:** Zotero PDFWorker
- **Pages Processed:** 4 of 4
