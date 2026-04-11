# PDF Document: Anaissi et al. - 2025 - A Hybrid Computational Intelligence Framework for scRNA-seq Imputation Integrating scRecover and Ra.pdf

**File Path:** Anaissi et al. - 2025 - A Hybrid Computational Intelligence Framework for scRNA-seq Imputation Integrating scRecover and Ra.pdf

**Processed Date:** 2026-02-10T18:13:37.063Z

**File Size:** 300.59 KB

**Total Pages:** 12

**Extracted Pages:** 12

**PDF Library:** Zotero PDFWorker

**Attachment Item ID:** 3625

**Title:** A Hybrid Computational Intelligence Framework for scRNA-seq Imputation: Integrating scRecover and Random Forests

**Collection:** Large Files > Random Papers

---

## Extracted Text Content

A Hybrid Computational Intelligence
Framework for scRNA-seq Imputation:
Integrating scRecover and Random Forests
Ali Anaissi1,2∗, Deshao Liu3,4,5, Yuanzhe Jia2 , Weidong Huang1, Widad Alyassine2 and Junaid Akram2
1 University of Technology Sydney, Australia 2 University of Sydney, Australia 3 Asia Pacific International College (APIC), Parramatta, NSW, Australia 4 Lincoln Institute of Higher Education (LIHE), Sydney, Australia 5 The Institute of International Studies (TIIS), Sydney, Australia
ali.anaissi@uts.edu.au, Deshao.Liu@ieee.org, yjia5612@uni.sydney.edu.au, weidong.huang@uts.edu.au, widad.yassien@gmail.com, junaid.akram@sydney.edu.au
Abstract. Single-cell RNA sequencing (scRNA-seq) enables transcriptomic profiling at cellular resolution but suffers from pervasive dropout events that obscure biological signals. We present SCR-MF, a modular two-stage workflow that combines principled dropout detection using scRecover with robust non-parametric imputation via missForest. Across public and simulated datasets, SCR-MF achieves robust and interpretable performance comparable to or exceeding existing imputation methods in most cases, -
while preserving biological fidelity and transparency. Runtime analysis demonstrates that SCR-MF provides a competitive balance between accuracy and computational efficiency, making it suitable for mid-scale single-cell datasets.
Keywords: Single-cell RNA Sequencing, Imputation, SCR-MF, Deep Learning, Dimension Reduction
1 Introduction
Bulk RNA sequencing aggregates transcript counts over cells, obscuring cell specific programs and temporal dynamics [16]. Single-cell RNA sequencing (scRNAseq) overcomes this limitation by quantifying messenger RNA from individual cells, thereby exposing cellular heterogeneity and dynamic transcriptional changes. However, scRNA-seq count matrices are extremely sparse, with many zeros even for genes that are truly expressed. These dropouts confound downstream analyses; thus, a central challenge is -
to distinguish technical zeros from genuine biological absence so that imputation can recover missing signal without fabricating expression. A broad spectrum of imputation strategies has emerged, often leveraging highly variable genes, neighborhood graphs, or low-dimensional embeddings to
arXiv:2511.16923v1 [cs.LG] 21 Nov 2025

borrow strength across similar cells [8]. Yet many approaches are only weakly integrated with downstream tasks and can inflate false positives in differential expression or marker discovery. These limitations motivate methods that (i) recover expression accurately while (ii) preserving true biological zeros and (iii) scaling to large cell numbers. In this study, we revisit the imputation pipeline through a two-stage design: first identifying likely dropouts and then imputing their values. Concret-
ely, we benchmark representative approaches, including established methods, scImpute [11], scRecover [14], VIPER [3], and MAGIC [4], as well as composite variants. Against this backdrop, we introduce and evaluate our proposed procedure, SCR-MF, which couples scRecover’s dropout detection with a random-forest-based imputation step. Our contributions are threefold. (i) We present a practical, modular imputation framework that explicitly separates dropout detection from value recovery. (ii) We conduc-
t a more comprehensive evaluation than prior appraisals by comparing a larger panel of imputation variants and examining their impact on downstream analyses. (iii) We assess performance with standard clustering metrics and information-theoretic similarity, enabling consistent comparisons across datasets. The paper is organized as follows. Section 2 reviews related work and situates our contribution. Section 3 details the methodology and model design. Section 4 describes datasets, training procedur-
es, evaluation metrics, and exploratory analyses used to validate robustness and applicability. Section 5 concludes and outlines future directions.
2 Related Work
Imputation for scRNA-seq addresses the problem of sparsity arising from dropouts, transcripts that are present but not detected due to technical limitations. Existing methods can broadly be grouped into three families: (i) model-based and probabilistic approaches, (ii) smoothing and low-rank reconstructions, and (iii) deep neural models. Below, we synthesize representative techniques in each category, highlighting their strengths, limitations, and the trade-offs that motivate our design choices. S-
ince this section includes a large number of technical terms, the relevant notations are summarized in Table 1. Model-based and probabilistic imputers explicitly model count noise and dropout events. SAVER [9] borrows information across genes to form priors and recover expression levels; bayNorm [18] treats capture as a binomial process within an empirical-Bayes framework; scImpute [11] employs a mixture model to estimate dropout probabilities and imputes via regression; and scRecover [14] separat-
es constant zeros from technical zeros using a ZINB model [17], coupled with species-accumulation style estimation to decide, per cell, how many zeros to fill. VIPER [3] learns sparse non-negative regressions over local neighborhoods to restore expression without collapsing variability. These methods are transparent and tend to preserve true biological zeros, though they can under- or over-label zeros and often scale poorly on datasets exceeding 100,000 cells.

Table 1. Notations used in this paper.
Abbreviation Description ALRA Adaptively-thresholded Low Rank Approximation ARI Adjusted Rand Index bayNorm Bayesian Gene Expression Recovery DCA Deep Count Autoencoder DeepImpute Deep Neural Network-based Imputation DrImpute Imputation approach for estimating dropout events in scRNA-seq data GEO Gene Expression Omnibu KNN-smoothing K Nearest Neighbor Smoothing MAGIC Markov Affinity-based Graph Imputation of Cells mcImpute Matrix Completion Based Imputation mRNA Messenger RNA NCBI National Center -
for Biotechnology Information NMI Normalized Mutual information OOB Out-of-bag PCA Principal Component Analysis RF Random Forest RNA Ribonucleic Acid SAVER Single-cell Analysis Via Expression Recovery SAUCIE Sparse Autoencoder for Unsupervised Clustering, Imputation, and Embedding scImpute Statistical method to accurately and robustly impute the dropout values in scRNA-seq data scRecover Imputation dropout values in scRNA-seq counts matrices while keeping the real zeros unchanged scRNA-seq Single--
cell RNA sequencing scVI Single-cell Variational Inference SCINA Semi-supervised Category Identification and Assignment SCRABBLE Single-cell RNA sequencing imputation constrained by bulk RNA sequencing data t-SNE t-Distributed Stochastic Neighbor Embedding VAE variational autoencoder VIPER Variability Imputation for Preserving Expression Recovery ZINB Zero-inflated Negative Binomial

Smoothing and low-rank reconstruction techniques, on the other hand, diffuse information across similar cells or enforce global structural constraints. MAGIC [19] performs diffusion on an affinity graph, treating zeros as missing values, effective but prone to over-smoothing. DrImpute [6] averages within clusters, and KNN-smoothing aggregates among nearest neighbors to reduce noise. Lowrank models such as ALRA [12] and mcImpute [15] exploit global structure to denoise data. While these methods sc-
ale efficiently, aggressive smoothing can blur cell-type-specific signals and inflate false positives in downstream analyses. Deep neural models leverage nonlinear embeddings to better capture the complex structure of count data. scVI [13] uses variational autoencoders for generative modeling and imputation, while DeepImpute [2] employs an autoencoder to learn both global and local patterns. SAUCIE [1] integrates a sparse autoencoder with clustering and visualization within a unified framework. Ex-
tensions such as SCINA [22] enable semi-supervised subtyping that incorporates single-cell and bulk data, and SCRABBLE [16] constrains imputation with bulk RNA-seq to stabilize estimates. These models effectively capture complex dependencies and integrate external information, though their training procedures can affect stability and interpretability. Imputation is often coupled with dimension reduction and denoising techniques that enhance clustering and visualization. PCA [10] identifies linear -
structures; t-SNE [7] emphasizes local neighborhood preservation on nonlinear manifolds; and DCA [5] denoises counts using ZINB losses, improving cluster separation. Because aggressive smoothing followed by nonlinear embedding can artificially tighten clusters, analysts typically balance denoising with preservation of biological heterogeneity. Across these methodological families, two recurring challenges motivate our design: (i) accurately identifying technical zeros while preserving genuine abse-
nces, and (ii) leveraging flexible, nonlinear imputers that avoid heuristic KNNstyle smoothing. To this end, we pair scRecover for principled dropout detection with missForest for robust, nonparametric imputation, a combination designed to retain biological signal while accommodating complex, mixed-type data structures.
3 Methodology
3.1 Overview of SCR-MF Pipeline
Our imputation strategy, SCR-MF (scRecover + missForest), couples a principled detector of technical zeros with a non-parametric, model-agnostic regressor. In brief, we (i) estimate, for every gene–cell pair, the probability that an observed zero is a dropout rather than a genuine (biological/structural) zero using a zero-inflated count model; (ii) predict, per cell, how many of its zeros are likely due to dropout; and (iii) impute only those entries with a random-forest-based routine while leavin-
g putative biological zeros untouched. This design reduces oversmoothing and preserves heterogeneity across cell states.

3.2 Notation and Pre-processing
Let X ∈ RG×C
≥0 denote the observed expression matrix (genes × cells). Entries equal to zero may be true absence of transcripts or technical dropouts. Unless otherwise noted, we apply standard library-size normalization and a mild log transform (e.g., log2(x + 1)) only for modeling steps that benefit from stabilized variance; imputed values are reported on the original scale.
3.3 Parameter Selection
Hyperparameters (ntree, mtry, and maxiter) were tuned using a 5-fold crossvalidation scheme on 20% of the training data. Validation minimized the outof-bag (OOB) error to prevent overfitting and ensured that no test data in
fluenced parameter selection. The optimal configuration (ntree=10, mtry=√p, and maxiter=2) achieved a balance between accuracy and computational efficiency. The OOB error curves revealed that smaller forests stabilized rapidly without compromising predictive performance, motivating the use of compact configurations for large-scale datasets.
3.4 Detecting Technical Zeros with scRecover
For each gene i (optionally stratified by a coarse subpopulation k derived from an initial embedding or prior labels), we fit a ZINB model that mixes a point mass at zero with an NB component. Denote
– θ(k)
i : probability a zero is structural,
– r(k)
i , p(k)
i : NB size and success parameters for the count-generating process.
Let PNB(0 | r, p) = (1 − p)r. The posterior probability that an observed zero for gene i in subpopulation k is a dropout is
d(k)
i=
1 − θ(k)
i PNB 0 r(k)
i , p(k)
i
θ(k)
i + 1 − θ(k)
i PNB 0 r(k)
i , p(k)
i
.
Where θ denotes the probability that an observed zero is biological, while r and p are the size and success parameters of the Negative Binomial distribution. The parameters were estimated using the Expectation–Maximization (EM) algorithm, an iterative procedure that alternates between estimating latent variables and maximizing the likelihood to obtain stable parameter estimates. Intuitively, θ controls sparsity, r captures gene-level dispersion, and p reflects transcript capture efficiency. Table -
2 provides a small example illustrating parameter estimates for two genes. To avoid flagging too many zeros in sparse cells, we estimate how many zeros in each cell c are attributable to dropouts via a species-accumulation–style extrapolation, yielding a target count Lc of dropout zeros for cell c. For each cell

Table 2. Example of ZINB parameter estimation for dropout probability calculation.
Gene θ r p Dropout Prob. (di) GENE 1 0.25 5.0 0.8 0.33 GENE 2 0.60 3.5 0.7 0.10
c, rank all its zero entries by the corresponding d(k)
i in descending order and mark
the top Lc positions as dropouts. This produces a binary mask M ∈ {0, 1}G×C with Mic = 1 if (i, c) is selected for imputation and Mic = 0 otherwise. The mask preserves putative biological zeros (Mic = 0).
3.5 Imputing Flagged Entries with missForest
We impute only the masked entries using missForest, a non-parametric iterative routine built on random forests:
1. Initialization. Create Y (0) by copying X and filling M =1 positions with simple column statistics (e.g., gene-wise means computed over non-zero observations; any initialization consistent with missForest is acceptable). 2. Iterative random-forest updates. For iteration t = 1, 2, . . .:
(a) For each gene g that contains masked entries, fit a regression forest f (t)
g
with predictor matrix Y (t−1)
\g (all other genes) and response Y (t−1)
g , restricted to unmasked rows. (b) Predict the masked values of gene g and update those entries in Y (t). 3. Stopping rule. Compute a normalized difference between successive iterates on masked entries, e.g.,
∆(t) = ∥ Y (t) − Y (t−1) ⊙ M ∥F
∥Y (t−1) ⊙ M ∥F
.
Stop when ∆(t) fails to decrease (or when out-of-bag error no longer improves), or after a fixed maximum number of iterations. 4. Post-processing. Truncate negatives to zero and, if counts are desired, round conservatively. Values outside biologically plausible ranges can optionally be winsorized.
Random forests naturally capture non-linear relationships and higher-order interactions among genes without requiring distributional assumptions, and the built-in OOB error offers a principled, data-driven convergence monitor. Limiting imputation strictly to M =1 entries prevents inflation of true zeros and curbs diffusion across distinct cell states.
3.6 Practical Considerations
Stratified modeling. When subpopulations k are available (e.g., coarse clusters), fitting ZINB parameters within k sharpens dropout discrimination; forest fitting can be done globally to borrow strength or per stratum for maximum specificity.

Scope of imputation. Only M =1 entries are altered; observed non-zeros and inferred biological zeros remain intact, preserving genuine silence and rare-cell signatures.
Completeness. We also considered pipelines that replace either the detector (e.g., a mixture-model-based scImpute) or the imputer (e.g., non-negative least squares). In our experience, pairing scRecover’s fine-grained dropout identification with missForest’s flexible regression offered the best balance between recovery accuracy and biological fidelity, especially on heterogeneous datasets.
4 Experiment
4.1 Dataset
We evaluated our method on two public scRNA-seq collections from NCBI GEO and on a controlled simulation. All inputs are cell × gene count matrices.
GSE86982. A time-resolved dataset from scRNASeqDB profiling 1,846 human embryonic stem cell–derived single cells across a 54-day neural differentiation protocol [20].
GSE75748. A study of early human developmental lineages comprising 1,018 snapshot progenitor cells plus 758 cells from a time-course that spans mesendoderm to definitive endoderm.
Simulated data. Using splatter [21], we generated a 1,000 × 800 matrix partitioned into three groups with mixing probabilities 0.20, 0.35, and 0.45. To mimic severe sparsity, we tuned the dropout-mid parameter to yield ∼80% dropout and used this synthetic set to all methods.
4.2 Training Procedure
We focused on those missForest hyperparameters: the number of trees (ntree), the number of candidate features per split (mtry), and the number of imputation passes (maxiter).
Forest size and feature subsampling. Contrary to the intuition that larger forests always help, we observed lower OOB error with comparatively small forests once a suitable mtry was chosen (e.g., ntree ≈ 10). Beyond modest sizes, error flattened whereas compute rose, so we adopted compact forests for efficiency in subsequent runs.
Number of imputation passes. OOB error typically decreased over early iterations and then plateaued. On a GSE75748 subset, OOB moved from 0.388 → 0.375 across the first two iterations, improved to 0.346 by iteration five, then ticked up slightly (0.349). Balancing runtime against diminishing returns, we fixed maxiter = 2 for the main experiments.

4.3 Evaluation Metrics
To quantify how well the inferred clusters recover known cell identities, we report two complementary metrics: Adjusted Rand Index (ARI) and Normalized Mutual Information (NMI). Let U = {ui} denote the ground-truth partition and V = {vj} the predicted partition; define nij = |ui∩vj|, ni = P
j nij , nj = P
i nij ,
and n = P
ij nij. ARI is sensitive to pairwise disagreements and is appropriate when the biological objective emphasizes discrete subtype delineation. NMI reflects overall information overlap and tends to be more stable under differing cluster counts or imbalanced classes. We therefore report both scores for each experiment to provide a balanced assessment of clustering quality.
Adjusted Rand Index (ARI). ARI measures pairwise consistency between U and V , penalizing both false merges and false splits. It equals the Rand Index after chance correction: 0 is the expected value under random assignments, values approaching 1 indicate near-perfect agreement, and negative values indicate worse-than-chance structure. ARI used in our study is
ARI =
P
ij n2
ij −
h
P
i n2
i
P
j n2
j
i
/n2
1 2
h
P
i n2
i +P
j n2
j
i
−
h
P
i n2
i
P
j n2
j
i
/n2
.
Normalized Mutual Information (NMI). NMI captures the reduction in uncertainty about one partition when the other is known. It is symmetric, bounded in [0, 1], and often more stable when U and V contain different numbers of clusters. We use the standard entropy-normalized variant:
NMI = 2I(U, V )
H(V ) + H(U ) ,
where I(U, V ) is the mutual information and H(·) denotes Shannon entropy. Concretely, with pij = nij/n, pi = ni/n, and pj = nj/n, one has I(U, V ) =
P
ij pij log pij /(pipj ) .
4.4 Exploratory Analysis
We used the elbow heuristic on within-cluster sum of squares to guide the choice of K. Candidate elbows appeared for K ∈ {5, . . . , 10}; based on these diagnostics and prior domain knowledge, we set K = 7 for downstream analyses. Two-dimensional embeddings with K-means overlays showed tighter, more compact groupings after imputation. The seven clusters aligned with expected labels: H1 Exp, H9 Batch, HFF Batch, NPC Batch, TB Batch, DEC Batch, and EC Batch. Filling dropout entries increased the glo-
bal mean expression from 237.18 to 255.74. The 95% confidence interval widened from (231.23, 243.13) pre-imputation to (249.24, 262.24) post-imputation. A two-sample t-test showed a small decrease in the statistic (78.26 → 77.20), consistent with better-separated clusters and reduced within-group noise. Label-wise standard deviations stabilized near ∼1,000 after imputation, whereas they fluctuated more widely beforehand.

4.5 Comparative Performance
We compared SCR-MF against a range of representative baseline imputers to assess performance across datasets. The combined pipeline addressed roughly 6% missingness—1,175,367 entries—in a matrix of 1,019 genes by 19,097 cells (≈19.46 million entries total), reflecting realistic scRNA-seq dropout burden. By separating technical from biological zeros using scRecover and imputing the former with missForest, the data became more structured for clustering: clusters were visually tighter, and summary st-
atistics improved. Table 3 summarizes the baseline methods included in our evaluation.
Table 3. Baseline imputation methods used for comparison.
Method Type
MAGIC Graph diffusion VIPER Regression-based scImpute Mixture model DeepImpute Neural network SCRABBLE Hybrid
Across datasets, SCR-MF consistently demonstrated superior performance in both clustering accuracy and biological interpretability. Table 4 summarizes ARI and NMI scores for all methods, along with runtime and qualitative observations. On the GSE86982 dataset, SCR-MF achieved an average Adjusted Rand Index (ARI) of 0.82 and Normalized Mutual Information (NMI) of 0.88, outperforming MAGIC (ARI=0.68, NMI=0.74), VIPER (ARI=0.71, NMI=0.76), scImpute (ARI=0.79, NMI=0.85), and DeepImpute (ARI=0.76, NMI=-
0.83). Similarly, on GSE75748, SCR-MF maintained strong performance (ARI=0.77, NMI=0.81), with SCRABBLE achieving comparable scores (ARI=0.75, NMI=0.80) when bulk constraints were available. In simulated datasets with ∼80% dropout, SCRMF yielded a 9–12% relative gain in ARI over the next-best method. Qualitative assessment revealed that MAGIC and VIPER often over-smoothed the data, merging nearby subtypes and obscuring subtle lineage differences. scImpute preserved discrete clusters but occasional-
ly overfilled true zeros, while DeepImpute effectively captured nonlinear dependencies at the cost of increased training time. SCR-MF, in contrast, produced sharper cluster boundaries and improved recovery of known marker genes such as SOX2 and PAX6, effectively balancing denoising with biological fidelity. Overall, SCR-MF generally improved ARI/NMI on our datasets; however, scImpute was occasionally competitive or superior, highlighting that no single method dominates all scenarios. The main draw-
back of SCR-MF is compute cost, which we mitigated by using smaller forests and maxiter = 2 while retaining most accuracy gains. As a pragmatic alternative, missRanger offered faster execution with broadly comparable (though sometimes slightly lower) accuracy. Choosing between missForest and missRanger thus depends on the study’s time-accuracy budget. Further tuning

Table 4. Summary of SCR-MF and baseline imputation methods across datasets. ARI: Adjusted Rand Index, NMI: Normalized Mutual Information.
Method GSE86982 (ARI/NMI) GSE75748 (ARI/NMI) MAGIC 0.68 / 0.74 0.70 / 0.73 VIPER 0.71 / 0.76 0.72 / 0.74 scImpute 0.79 / 0.85 0.74 / 0.78 DeepImpute 0.76 / 0.83 0.73 / 0.77 SCRABBLE bulk data not available 0.75 / 0.80 SCR-MF 0.82 / 0.88 0.77 / 0.81
of ntree and mtry can trade small accuracy gains for substantial time savings, providing additional flexibility.
4.6 Biological Insights and Implications
We observed that SCR-MF enhances biological interpretability by producing clearer cluster boundaries and improving the recovery of known marker genes. For example, in the GSE86982 dataset, SCR-MF increased expression coherence for neural lineage markers such as SOX2 and PAX6, outperforming MAGIC and scImpute. This improvement led to better-defined cell-type annotations and more coherent gene modules. The preservation of biologically meaningful correlations indicates that SCR-MF effectively balance-
s denoising with biological fidelity, facilitating downstream analyses including differential expression and trajectory inference.
5 Conclusion
In conclusion, SCR-MF integrates principled dropout detection with non-parametric imputation, yielding robust and interpretable recovery of single-cell expression data. Across public and simulated benchmarks, SCR-MF demonstrates improved clustering quality and dropout discrimination relative to most baseline methods while remaining computationally practical. The method’s modular structure makes it adaptable for various downstream analyses. In several settings, scImpute matched or exceeded our appr-
oach. We attribute this to the incremental nature of our contribution and the absence of a unifying theory predicting when particular detector–imputer couplings will excel. Consequently, improvements were modest where method behaviors overlapped, and some hybrids (e.g., scImpute+missForest) failed to yield consistent benefits. Computational cost is the main practical limitation: random-forest imputation over large, sparse matrices is resource-intensive, which constrains exhaustive benchmarking and-
 hyperparameter exploration. Looking forward, we see three concrete paths: (i) scalability—adopt faster RF variants (e.g., missRanger), early-stopping, sketching/subsampling, and parallelization to curb runtime; (ii) rigor—use more systematic model selection and uncertainty quantification to decide when and how much to impute; and (iii) modeling—tightly couple dropout

detection and imputation within a single probabilistic framework that explicitly preserves biological zeros. In generalral, our results show that carefully sequencithe identification of dropoutsof droporobusth a robust distribution-agnostic imsignificantlygnificantly improve scRNA - sequencing analyzes sequencing analyzes, while also highlighting where future work—especially scalable algorithms with sguarantieseoretical guaranties—is most needed. Future research will focus on (i) extending SCR-MF-
 with scalable random forest variants (e.g., missRanger) and GPU acceleration, (ii) integrating with deep learning models such as scVI or DCA to capture nonlinear manifolds, (iii) conducting systematic parameter sensitivity studies, and (iv) performing biological validation on trajectory reconstruction and gene network inference tasks.
References
1. Amodio, M., Van Dijk, D., Srinivasan, K., Chen, W.S., Mohsen, H., Moon, K.R., Campbell, A., Zhao, Y., Wang, X., Venkataswamy, M., et al.: Exploring single-cell data with deep multitasking neural networks. Nature methods 16(11), 1139–1145 (2019) 2. Arisdakessian, C., Poirion, O., Yunits, B., Zhu, X., Garmire, L.X.: Deepimpute: an accurate, fast, and scalable deep neural network method to impute single-cell rna-seq data. Genome biology 20(1), 1–14 (2019) 3. Chen, M., Zhou, X.: Viper: variability--
preserving imputation for accurate gene expression recovery in single-cell rna sequencing studies. Genome biology 19(1), 1–15 (2018) 4. Dijk, D.v., Nainys, J., Sharma, R., Kaithail, P., Carr, A.J., Moon, K.R., Mazutis, L., Wolf, G., Krishnaswamy, S., Pe’er, D.: Magic: A diffusion-based imputation method reveals gene-gene interactions in single-cell rna-sequencing data. BioRxiv p. 111591 (2017) 5. Eraslan, G., Simon, L.M., Mircea, M., Mueller, N.S., Theis, F.J.: Single-cell rnaseq denoising using a-
 deep count autoencoder. Nature communications 10(1), 390 (2019) 6. Gong, W., Kwak, I.Y., Pota, P., Koyano-Nakagawa, N., Garry, D.J.: Drimpute: imputing dropout events in single cell rna sequencing data. BMC bioinformatics 19, 1–10 (2018) 7. Hinton, G.E., Roweis, S.: Stochastic neighbor embedding. Advances in neural information processing systems 15 (2002) 8. Hou, W., Ji, Z., Ji, H., Hicks, S.C.: A systematic evaluation of single-cell rnasequencing imputation methods. Genome biology 21, 1–30 (2020-
) 9. Huang, M., Wang, J., Torre, E., Dueck, H., Shaffer, S., Bonasio, R., Murray, J.I., Raj, A., Li, M., Zhang, N.R.: Saver: gene expression recovery for single-cell rna sequencing. Nature methods 15(7), 539–542 (2018) 10. Jolliffe, I.T., Cadima, J.: Principal component analysis: a review and recent developments. Philosophical transactions of the royal society A: Mathematical, Physical and Engineering Sciences 374(2065), 20150202 (2016) 11. Li, W.V., Li, J.J.: An accurate and robust imputation met-
hod scimpute for singlecell rna-seq data. Nature communications 9(1), 997 (2018)

12. Linderman, G.C., Zhao, J., Kluger, Y.: Zero-preserving imputation of scrna-seq data using low-rank approximation. BioRxiv p. 397588 (2018) 13. Lopez, R., Regier, J., Cole, M.B., Jordan, M.I., Yosef, N.: Deep generative modeling for single-cell transcriptomics. Nature methods 15(12), 1053–1058 (2018) 14. Miao, Z., Li, J., Zhang, X.: screcover: Discriminating true and false zeros in singlecell rna-seq data for imputation. BioRxiv p. 665323 (2019) 15. Mongia, A., Sengupta, D., Majumdar, A.: Mcim-
pute: matrix completion based imputation for single cell rna-seq data. Frontiers in genetics 10, 9 (2019) 16. Peng, T., Zhu, Q., Yin, P., Tan, K.: Scrabble: single-cell rna-seq imputation constrained by bulk rna-seq data. Genome biology 20(1), 1–12 (2019) 17. Salehi, M., Roudbari, M.: Zero inflated poisson and negative binomial regression models: application in education. Medical journal of the Islamic Republic of Iran 29, 297 (2015) 18. Tang, W., Bertaux, F., Thomas, P., Stefanelli, C., Saint, M.-
, Marguerat, S., Shahrezaei, V.: baynorm: Bayesian gene expression recovery, imputation and normalization for single-cell rna-sequencing data. Bioinformatics 36(4), 1174–1181 (2020) 19. Van Dijk, D., Sharma, R., Nainys, J., Yim, K., Kathail, P., Carr, A.J., Burdziak, C., Moon, K.R., Chaffer, C.L., Pattabiraman, D., et al.: Recovering gene interactions from single-cell data using data diffusion. Cell 174(3), 716–729 (2018) 20. Yao, Z., Mich, J.K., Ku, S., Menon, V., Krostag, A.R., Martinez, R.A., F-
urchtgott, L., Mulholland, H., Bort, S., Fuqua, M.A., et al.: A single-cell roadmap of lineage bifurcation in human esc models of embryonic brain development. Cell stem cell 20(1), 120–134 (2017) 21. Zappia, L., Phipson, B., Oshlack, A.: Splatter: simulation of single-cell rna sequencing data. Genome biology 18(1), 174 (2017) 22. Zhang, Z., Luo, D., Zhong, X., Choi, J.H., Ma, Y., Wang, S., Mahrt, E., Guo, W., Stawiski, E.W., Modrusan, Z., et al.: Scina: a semi-supervised subtyping algorithm of sin-
gle cells and bulk samples. Genes 10(7), 531 (2019)

---

## Processing Information

- **Processing Library:** Zotero PDFWorker
- **Processing Date:** 2026-02-10T18:13:37.063Z
- **Text Length:** 29659 characters
- **Success:** Text extraction completed
- **PDF Library Used:** Zotero PDFWorker
- **Pages Processed:** 12 of 12
