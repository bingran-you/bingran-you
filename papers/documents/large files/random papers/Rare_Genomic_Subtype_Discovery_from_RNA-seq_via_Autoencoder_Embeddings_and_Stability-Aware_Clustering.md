# PDF Document: Mezghiche - 2025 - Rare Genomic Subtype Discovery from RNA-seq via Autoencoder Embeddings and Stability-Aware Clusterin.pdf

**File Path:** Mezghiche - 2025 - Rare Genomic Subtype Discovery from RNA-seq via Autoencoder Embeddings and Stability-Aware Clusterin.pdf

**Processed Date:** 2026-02-10T18:15:45.466Z

**File Size:** 497.04 KB

**Total Pages:** 16

**Extracted Pages:** 16

**PDF Library:** Zotero PDFWorker

**Attachment Item ID:** 3671

**Title:** Rare Genomic Subtype Discovery from RNA-seq via Autoencoder Embeddings and Stability-Aware Clustering

**Collection:** Large Files > Random Papers

---

## Extracted Text Content

Rare Genomic Subtype Discovery from RNA-seq via
Autoencoder Embeddings and Stability-Aware
Clustering
Alaa Mezghiche1,*
1Department of Computer Science, University of Science and Technology
Houari Boumediene (USTHB), Algiers, Algeria
*Correspondence: alaa.mezghiche@etu.usthb.dz
Abstract
Unsupervised learning on high-dimensional RNA-seq data can reveal molecular
subtypes beyond standard labels. We combine an autoencoder-based representation
with clustering and stability analysis to search for rare but reproducible genomic
subtypes. On the UCI “Gene Expression Cancer RNA-Seq” dataset (801 samples,
20,531 genes; BRCA, COAD, KIRC, LUAD, PRAD), a pan-cancer analysis shows
clusters aligning almost perfectly with tissue-of-origin (Crame ́r’s V = 0.887), serving
as a negative control. We therefore reframe the problem within KIRC (n = 146):
we select the top 2,000 highly variable genes, standardize them, train a feed-forward
autoencoder (128-dimensional latent space), and run k-means for k = 2 . . . 10. While
global indices favor small k, scanning k with a pre-specified discovery rule (rare
< 10% and stable with Jaccard ≥ 0.60 across 20 seeds after Hungarian alignment)
yields a simple solution at k = 5 (silhouette = 0.129, DBI = 2.045) with a rare
cluster C0 (6.85% of patients) that is highly stable (Jaccard = 0.787). Cluster-vs
rest differential expression (Welch’s t-test, Benjamini–Hochberg FDR) identifies
coherent markers, including strong down-regulation of gene 11713, gene 13678,
gene 16402, gene 3777 and up-regulation of gene 751, gene 17397, gene 2760.
Overall, pan-cancer clustering is dominated by tissue-of-origin, whereas a stability
aware within-cancer approach reveals a rare, reproducible KIRC subtype.
Keywords: RNA-seq; unsupervised learning; autoencoder; clustering stability; rare
subtypes; KIRC; differential expression; UMAP; pan-cancer; within-cancer.
1
arXiv:2511.13705v1 [cs.LG] 17 Nov 2025

1 Introduction
High-throughput RNA sequencing (RNA-seq) has transformed our ability to profile gene
expression at scale, enabling large consortia such as The Cancer Genome Atlas (TCGA)
to generate transcriptomic data across many tumor types and patients. Unsupervised
analysis of such data has the potential to uncover molecular subtypes, or groups of
patients sharing coherent expression programs that may not correspond directly to current
histopathological classifications.
The UCI “Gene Expression Cancer RNA-Seq” dataset is a curated subset (801 patients,
20,531 genes) of the TCGA Pan-Cancer RNA-seq collection, covering five tumor types:
breast invasive carcinoma (BRCA), colon adenocarcinoma (COAD), kidney renal clear
cell carcinoma (KIRC), lung adenocarcinoma (LUAD) and prostate adenocarcinoma
(PRAD) [1]. This dataset has been widely used as a benchmark for supervised cancer
classification and feature selection, including autoencoder-based biomarker identification [2]
and comparative studies of machine learning models on RNA-seq data.
Most existing work on this dataset focuses on predicting the known tumor type from
gene expression. In contrast, our goal is to explore whether unsupervised methods can
discover rare transcriptomic subtypes within a given cancer type. Such rare subtypes, if
stable and biologically coherent, could correspond to clinically meaningful subgroups (e.g.,
distinct prognostic profiles or therapy responses).
Autoencoders provide a natural way to compress high-dimensional gene expression into
a lower-dimensional latent space while preserving non-linear structure. Clustering in this
latent space, combined with interpretability tools, can help reveal underlying patterns [2].
However, pan-cancer clustering is strongly driven by tissue-of-origin, which can mask
finer-grained within-cancer structure.
In this work, we:
1. Perform a pan-cancer unsupervised analysis as a sanity / negative control, confirming
that clusters align with tissue labels and therefore mostly re-discover known structure.
2. Reframe the task within a single cancer type (KIRC), using an autoencoder to learn
a compact representation of highly variable genes.
3. Use k-means clustering with model selection and cluster stability analysis to identify
rare but reproducible clusters.
4. Apply simple differential expression analysis (cluster-vs-rest) to derive a cluster
specific gene signature.
2

2 Materials and Methods
2.1 Dataset
We use the “Gene Expression Cancer RNA-Seq” dataset from the UCI Machine Learning
Repository [1]. This dataset consists of:
• 801 tumor samples (patients).
• 20,531 gene expression features measured by Illumina HiSeq RNA-seq.
• Five tumor types (“Class” label): BRCA (n = 300), KIRC (n = 146), LUAD
(n = 141), PRAD (n = 136), COAD (n = 78).
Expression values are provided in a matrix where rows are samples and columns are
genes (named gene 0 to gene 20530). Class labels are provided separately and aligned to
samples by an ID field (sample X). We merged features and labels using an inner join on
the sample ID, and subsequently set the sample ID as the row index.
2.2 Pan-cancer negative control
As an initial experiment, we considered all 801 samples together (pan-cancer analysis).
The objective was to confirm that the unsupervised pipeline is sensible and that the latent
space captures known structure.
Preprocessing. We extracted the gene expression matrix X ∈ R801×20531 and verified
that all values were finite and non-negative. We applied a log(1 + x) transform to reduce
skewness. To reduce noise and dimensionality, we selected the top 2,000 most variable
genes across all samples based on the empirical variance, then standardized each gene to
zero mean and unit variance (z-scoring).
Pan-cancer autoencoder and clustering. We trained a feed-forward autoencoder
on the standardized matrix Xscaled ∈ R801×2000 and obtained latent codes Z ∈ R801×128
(architecture described in Section 2.4). We then applied k-means clustering on Z for
k = 2, . . . , 10 and computed the silhouette score for each k, which increases from 0.174 at
k = 2 to a maximum of 0.286 at k = 6 before slightly decreasing (Fig. 1). We chose k = 6
for detailed inspection as a reasonable pan-cancer solution.
Evaluation. We constructed a contingency table between tumor types and clusters,
row-normalized it, and measured association using Pearson’s chi-square test and Crame ́r’s
V.
3

2.3 Within-cancer reframing: focus on KIRC
To avoid the dominant tissue-of-origin signal, we restricted the analysis to one cancer
type: KIRC (kidney renal clear cell carcinoma). We filtered the merged dataset to keep
only samples with Class=KIRC, yielding n = 146 patients. All subsequent analyses were
performed on this subset.
2.3.1 Highly variable genes and scaling
Within KIRC, we computed the variance of each gene across the 146 samples and selected
the top 2,000 most variable genes (or fewer if fewer genes had non-zero variance). Let
XKIRC ∈ R146×G denote the KIRC expression matrix for these genes, with G ≤ 2000.
We standardized each gene to zero mean and unit variance:
Xz = StandardScaler(XKIRC),
resulting in Xz ∈ R146×G, which serves as input to the autoencoder.
2.4 Autoencoder architecture and training
We used the same architectural template for both pan-cancer and KIRC analyses, instan
tiated with the appropriate input dimension (Din = 2000 for pan-cancer; Din = G within
KIRC).
The autoencoder is a fully connected neural network implemented in PyTorch:
• Input dimension: Din (number of selected genes).
• Hidden layer 1: size H1 = min(1024, max(256, Din/2)), with ReLU activation and
dropout (p = 0.1).
• Hidden layer 2: size H2 = min(512, max(128, Din/4)), with ReLU activation.
• Latent layer: size Dlat = 128 (linear).
• Decoder: symmetric to the encoder with ReLU activations.
The encoder fθ : RDin → R128 maps input samples to latent codes z, and the decoder
reconstructs back to input space. We trained the model using mean squared error (MSE)
reconstruction loss:
L= 1
N
N
X
i=1
∥xi − xˆi∥2
2,
with the Adam optimizer (learning rate 10−3, weight decay 10−5). We used mini-batches
of size 256, a 85%/15% train/validation split, and early stopping (patience = 15).
4

A typical learning curve for the KIRC autoencoder is shown in Fig. 2: training and
validation MSE decrease rapidly in the first 5 epochs, then flatten; the validation curve
stabilizes around 0.46 while the training curve continues to decrease more slowly.
After training, we embedded all KIRC samples by passing Xz through the encoder in
evaluation mode (without dropout), obtaining a latent matrix Z ∈ R146×128.
2.5 Clustering, model selection and stability
2.5.1 Within-KIRC clustering
Within KIRC, we applied k-means clustering on the latent codes Z for k in {2, . . . , 10},
using ninit = 10 and a fixed random seed (42). For each k, we computed:
• The silhouette score (higher is better).
• The Davies–Bouldin index (DBI; lower is better).
The silhouette curve peaks at k = 2 with a score of 0.140, then slowly declines as k
increases (Fig. 3). DBI also decreases gradually with k and reaches 2.045 at k = 5 before
continuing to drop (Fig. 4). The purely “best” solution in terms of these global indices is
therefore a small k (particularly k = 2), but this produces only two large clusters (sizes
69 and 77) with no rare subtypes.
To explicitly search for rare but meaningful clusters, we supplemented these global
metrics with a stability analysis described below.
2.5.2 Cluster stability via Jaccard index
For each value of k, we ran k-means R = 20 times with different random seeds, obtaining
labelings l(1), . . . , l(R). Because cluster labels are arbitrary up to permutation, we aligned
all runs to a reference labeling (e.g., l(1)) using the Hungarian algorithm.
For each cluster c in the reference solution, we computed its Jaccard similarity across
runs:
Jc = 1
R−1
R
X
r=2
|Sc ∩ S(r)
c|
|Sc ∪ S(r)
c|
,
where Sc is the set of samples assigned to cluster c in the reference run, and S(r)
c is the
aligned set in run r.
We then summarized, for all k and clusters, the triplet:
• Prevalence pc = |Sc|/N ,
• Jaccard stability Jc,
• Indicators for being rare (pc < 0.10) and stable (Jc ≥ 0.60).
5

Across all k, rare and stable clusters appear at:
(k, cluster) ∈ {(5, 0), (8, 5), (10, 7), (10, 9)}.
Among these, the configuration with k = 5 is the simplest and has the largest global
silhouette (0.129) and reasonably low DBI (2.045). We therefore focus on the KIRC
clustering solution with k = 5.
2.5.3 Final clustering solution at k = 5
For k = 5, we refitted k-means with ninit = 30 to obtain stable labels c1, . . . , c146 ∈
{0, 1, 2, 3, 4}. The resulting cluster sizes and prevalences are:
[10, 19, 31, 53, 33] ↔ [6.85%, 13.0%, 21.2%, 36.3%, 22.6%].
Cluster C0 is the rare cluster with size 10 (6.85%). The global clustering metrics at
k = 5 are:
silhouette = 0.129, DBI = 2.045.
The barplot in Fig. 5 highlights C0 in red and shows the distribution of cluster sizes.
Stability analysis for k = 5 (Fig. 6) confirms that C0 is highly stable across runs with a
Jaccard index of 0.787, while other clusters have Jaccard indices between 0.44 and 0.76.
2.6 Cluster interpretability via differential expression
To characterize the rare KIRC cluster C0, we performed a cluster-vs-rest differential
expression (DE) analysis on the standardized KIRC expression matrix Xz. For C0 (the 10
in-cluster samples) and the remaining 136 out-of-cluster samples, we computed for each
gene g:
• The effect size: ∆zg = μg,in − μg,out.
• A Welch’s t-test p-value comparing in-cluster vs out-of-cluster samples.
• Benjamini–Hochberg FDR correction over all genes.
The top hits (sorted by FDR and |∆zg|) are reported in Table 2. A volcano plot
(Fig. 8) shows the global distribution of genes; those with large |∆zg| and low FDR are
annotated. A heatmap of the top 20 up- and top 20 down-regulated genes (Fig. 9) confirms
that C0 patients share a coherent molecular pattern distinct from other KIRC samples.
6

2.7 Visualization of latent structure
To visualize the structure of the latent space, we applied UMAP to the KIRC latent codes
Z:
U = UMAP(n neighbors = 15, min dist = 0.3, random state = 42).
The resulting 2D embedding (Fig. 7) shows that C0 samples are concentrated in a compact
region of the latent space, separated from the bulk of other KIRC samples, further
supporting the idea that C0 represents a coherent subtype rather than scattered noise.
3 Results
3.1 Pan-cancer clusters re-discover tissue-of-origin
For the pan-cancer analysis, the k = 6 solution yields the cluster size and stability profile
shown in Table 1. All clusters are extremely stable (Jaccard indices ≥ 0.994), including
two rare clusters (prevalence < 10%).
Table 1: Pan-cancer k-means clusters at k = 6.
Cluster Size Prevalence Jaccard Rare (< 10%) Stable (≥ 0.60)
0 240 0.300 0.998 No Yes 1 136 0.170 1.000 No Yes 2 65 0.081 0.994 Yes Yes 3 136 0.170 1.000 No Yes 4 145 0.181 1.000 No Yes 5 79 0.099 1.000 Yes Yes
The contingency table between tumor type (rows) and cluster (columns) is:
Class 0 1 2 3 4 5
BRCA 240 0 60 0 0 0
COAD 0 0 0 0 0 78
KIRC 0 0 1 0 145 0
LUAD 0 0 4 136 0 1
PRAD 0 136 0 0 0 0
Row-normalizing this table gives:
7

Class 0 1 2 3 4 5
BRCA 0.80 0.00 0.20 0.00 0.00 0.00
COAD 0.00 0.00 0.00 0.00 0.00 1.00
KIRC 0.00 0.00 0.01 0.00 0.99 0.00
LUAD 0.00 0.00 0.03 0.96 0.00 0.01
PRAD 0.00 1.00 0.00 0.00 0.00 0.00
The chi-square test of independence between tumor type and cluster assignment is
highly significant (p ≈ 0), with Cram ́er’s V = 0.887. Thus, the pan-cancer clusters
essentially recover the five tissues-of-origin:
• Cluster 0: mostly BRCA (240/300).
• Cluster 1: pure PRAD (136/136).
• Cluster 3: almost pure LUAD (136/141, plus a few LUAD samples in other clusters).
• Cluster 4: almost pure KIRC (145/146).
• Cluster 5: almost pure COAD (78/78, plus 1 LUAD).
• Cluster 2: a small residual cluster (65 samples) with the remaining BRCA and a
few LUAD/KIRC samples.
Although there are two rare clusters (2 and 5), they correspond to leftover fractions
of known tumour types rather than novel cross-cancer subtypes. We therefore treat
this experiment as a negative control that validates the pipeline but does not produce
surprising biology.
3.2 Within KIRC: rare and stable subtype C0 at k = 5
In contrast, the within-KIRC analysis allows us to search for more subtle heterogeneity.
As noted above, pure clustering metrics favour k = 2 (silhouette 0.140, DBI 2.455), but
this solution contains only two large clusters:
Cluster Size Prevalence Rare
0 69 0.473 No
1 77 0.527 No
By scanning k and examining cluster stability, we identify several rare and stable
clusters (Table in the Methods section). Among them, cluster C0 at k = 5 has:
• Size = 10 patients (6.85% of KIRC).
8

• Jaccard stability = 0.787 across 20 seeds.
• Clear separation in the UMAP latent space (Fig. 7).
Therefore, we focus on this k = 5 solution and interpret C0 as a candidate rare genomic
subtype of KIRC.
3.3 Differential expression and marker genes of C0
The DE analysis for C0 identifies a set of strongly altered genes. The top 15 markers are
summarized in Table 2 (values taken directly from the analysis):
Table 2: Top 15 marker genes for the rare KIRC cluster C0 (cluster-vs-rest DE on standardized expression). Negative effects indicate down-regulation in C0; positive effects indicate up-regulation.
Gene Effect ∆z p-value FDR
gene 3777 −1.459 6.34 × 10−31 1.27 × 10−27 gene 274 −1.050 3.38 × 10−23 2.73 × 10−20 gene 8185 −1.386 4.10 × 10−23 2.73 × 10−20 gene 2715 −1.013 1.80 × 10−21 9.01 × 10−19 gene 5659 −1.178 5.86 × 10−16 2.35 × 10−13 gene 17397 +1.351 1.75 × 10−14 5.84 × 10−12 gene 13678 −2.012 2.84 × 10−14 8.10 × 10−12 gene 2760 +1.131 1.82 × 10−13 4.54 × 10−11 gene 17009 −1.406 4.11 × 10−13 9.12 × 10−11 gene 9561 −0.755 6.57 × 10−13 1.31 × 10−10 gene 11713 −3.332 2.85 × 10−12 5.19 × 10−10 gene 16402 −2.612 5.92 × 1-
0−12 9.87 × 10−10 gene 751 +1.915 9.12 × 10−12 1.40 × 10−9 gene 17921 −0.674 3.17 × 10−11 4.53 × 10−9 gene 5945 −1.457 3.80 × 10−11 5.07 × 10−9
The volcano plot (Fig. 8) highlights these genes as red points with labels; they occupy
the extremes of the ∆z axis and the top of the − log10(FDR) axis, confirming both strong
effect size and statistical significance. The heatmap (Fig. 9) of the top 20 up- and 20
down-regulated genes (with C0 samples placed on the left) shows a clear block structure:
C0 samples share strong down-regulation of several genes (deep blue) and up-regulation
of a smaller set (red), while the rest of the KIRC cohort shows more heterogeneous
expression.
4 Discussion
This work presents a small but illustrative pipeline for discovering rare transcriptomic
subtypes in cancer using autoencoders, clustering and simple statistical interpretability.
9

Using the UCI Gene Expression Cancer RNA-Seq dataset as a testbed, we show that:
1. Pan-cancer unsupervised clustering primarily re-discovers tissue-of-origin, with
clusters essentially corresponding to BRCA, COAD, KIRC, LUAD and PRAD. The
high Cram ́er’s V value and nearly block-diagonal contingency table confirm that
the model captures known structure but does not reveal unexpected cross-cancer
subtypes in this dataset.
2. Restricting to a single cancer type (KIRC) and focusing on highly variable genes
allows us to search for finer-grained within-cancer heterogeneity without the con
founding effect of tissue differences.
3. An autoencoder-based latent representation, combined with k-means clustering and
Jaccard-based stability analysis, can highlight rare but robust clusters. In our case,
cluster C0 represents only ∼ 7% of KIRC patients but remains stable across multiple
random seeds.
4. Differential expression analysis yields a compact list of marker genes for the rare
cluster, suggesting that it corresponds to a distinct transcriptional state rather than
noise.
Because the UCI dataset uses anonymized gene identifiers (gene X) and aggregates
samples from a larger TCGA resource, we cannot directly map our markers to known gene
symbols or pathways in this setting. As a result, our current analysis is methodological:
it demonstrates that the combination of autoencoders, clustering, and stability analysis
can identify candidate rare subtypes, but does not yet provide biological interpretation.
A natural next step is to re-run the same pipeline on the full TCGA KIRC RNA-seq
data where genes have standard identifiers. This would enable downstream analyses such
as Gene Ontology and pathway enrichment, comparison with known KIRC subtypes, and
correlation with clinical variables such as survival, stage, and treatment.
5 Conclusion
We presented an unsupervised pipeline for discovering rare genomic subtypes within
cancer using autoencoders, clustering, cluster stability analysis, and differential expression.
Applied to the KIRC subset of the UCI Gene Expression Cancer RNA-Seq dataset, this
approach identified a rare (∼ 7%) but stable cluster with a distinct expression signature.
While limited by anonymized gene identifiers and lack of clinical annotations in the
benchmark dataset, this work provides a proof-of-concept that can be extended to richer
datasets such as TCGA with full clinical and genomic annotations. Ultimately, com
bining unsupervised representation learning, stability-aware clustering and interpretable
signatures may help uncover clinically actionable subgroups in cancer.
10

Data and code availability
All expression data used in this study are available from the UCI Machine Learning Reposi
tory under the title “Gene Expression Cancer RNA-Seq” (dataset ID 401) [1]. The analysis
code (autoencoder training, clustering, stability analysis and differential expression) is
implemented in Python (PyTorch, scikit-learn, statsmodels) and is available at: https:
//github.com/alaa-32/Discovering-Rare-Genomic-Subtypes-from_RNA-seq.git.
References
[1] S. Fiorini. Gene Expression Cancer RNA-Seq [Dataset]. UCI Machine Learning
Repository, 2016. https://doi.org/10.24432/C5R88H.
[2] F. Al Abir, S. M. Shovan, M. A. M. Hasan, A. Sayeed, and J. Shin. Biomarker
identification by reversing the learning mechanism of an autoencoder and recursive
feature elimination. Molecular Omics, 18:652–661, 2022.
[3] J. N. Weinstein, E. A. Collisson, G. B. Mills, et al. The Cancer Genome Atlas
Pan-Cancer analysis project. Nature Genetics, 45(10):1113–1120, 2013.
[4] Rousseeuw PJ. Silhouettes: A graphical aid to the interpretation and validation of
cluster analysis. J Comput Appl Math. 1987;20:53–65.
[5] Davies DL, Bouldin DW. A cluster separation measure. IEEE TPAMI. 1979;(2):224
227.
[6] Munkres J. Algorithms for the assignment and transportation problems. SIAM.
1957;5(1):32–38.
[7] Benjamini Y, Hochberg Y. Controlling the false discovery rate. JRSS B. 1995;57(1):289
300.
[8] McInnes L, Healy J, Melville J. UMAP: Uniform Manifold Approximation and Projec
tion. arXiv:1802.03426. 2018.
11

Figure 1: Pan-cancer k-means silhouette score as a function of k, computed on the autoencoder latent space (Z) for all 801 samples. The maximum occurs at k = 6.
Figure 2: Example autoencoder training curve (KIRC): reconstruction MSE vs epoch for training and validation splits.
12

Figure 3: Within-KIRC k-means silhouette score as a function of k. The best score is at k = 2, but rare subtypes emerge only at larger k.
Figure 4: Within-KIRC Davies–Bouldin index (DBI) as a function of k. Lower values indicate more compact and separated clusters.
13

Figure 5: Cluster sizes for KIRC at k = 5. Cluster C0 (size 10, prevalence 6.8%) is highlighted in red as the rare subtype.
Figure 6: Cluster stability for KIRC at k = 5, measured by Jaccard index across 20 random seeds after Hungarian alignment. C0 (red) has Jaccard 0.787 (above the 0.60 stability threshold, dashed line).
14

Figure 7: UMAP of the KIRC latent space, with rare cluster C0 highlighted in red and other clusters in grey. C0 occupies a compact region of the latent space.
Figure 8: Volcano plot for C0 (cluster-vs-rest DE on standardized expression). Each point is a gene; red labelled points denote the top markers listed in Table 2.
15

Figure 9: Heatmap of standardized expression (z-scores) for the top 20 up-regulated and top 20 down-regulated genes in C0. Samples are ordered with C0 on the left.
16

---

## Processing Information

- **Processing Library:** Zotero PDFWorker
- **Processing Date:** 2026-02-10T18:15:45.466Z
- **Text Length:** 22294 characters
- **Success:** Text extraction completed
- **PDF Library Used:** Zotero PDFWorker
- **Pages Processed:** 16 of 16
