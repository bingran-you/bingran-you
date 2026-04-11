# PDF Document: Li and Mao - 2025 - Time-Varying Network Driver Estimation (TNDE) Quantifies Stage-Specific Regulatory Effects From Sing.pdf

**File Path:** Li and Mao - 2025 - Time-Varying Network Driver Estimation (TNDE) Quantifies Stage-Specific Regulatory Effects From Sing.pdf

**Processed Date:** 2026-02-10T18:17:42.702Z

**File Size:** 2053.77 KB

**Total Pages:** 12

**Extracted Pages:** 12

**PDF Library:** Zotero PDFWorker

**Attachment Item ID:** 3723

**Title:** Time-Varying Network Driver Estimation (TNDE) Quantifies Stage-Specific Regulatory Effects From Single-Cell Snapshots

**Collection:** Large Files > Random Papers

---

## Extracted Text Content

TIME-VARYING NETWORK DRIVER ESTIMATION (TNDE)
QUANTIFIES STAGE-SPECIFIC REGULATORY EFFECTS FROM
SINGLE-CELL SNAPSHOTS
Jiaxin Li1, Shanjun Mao1†
1Department of Statistics and Data Science, Hunan University †: To whom correspondence should be addressed.
ABSTRACT
Identifying key driver genes governing biological processes such as development and disease progression remains a challenge. While existing methods can reconstruct cellular trajectories or infer static gene regulatory networks (GRNs), they often fail to quantify time-resolved regulatory effects within specific temporal windows. Here, we present Time-varying Network Driver Estimation (TNDE), a computational framework quantifying dynamic gene driver effects from single-cell snapshot data under a lin-
ear Markov assumption. TNDE leverages a shared graph attention encoder to preserve the local topological structure of the data. Furthermore, by incorporating partial optimal transport, TNDE accounts for unmatched cells arising from proliferation or apoptosis, thereby enabling trajectory alignment in non-equilibrium processes. Benchmarking on simulated datasets demonstrates that TNDE outperforms existing baseline methods across diverse complex regulatory scenarios. Applied to mouse erythropoiesis d-
ata, TNDE identifies stage-specific driver genes, the functional relevance of which is corroborated by biological validation. TNDE offers an effective quantitative tool for dissecting dynamic regulatory mechanisms underlying complex biological processes.
1 Introduction
Identification of key regulatory genes is fundamental for understanding the dynamic mechanisms underlying complex biological processes, such as development, immune response, and tumor evolution[3, 7, 13]. Currently, genome-wide association studies and differential expression analyses have identified numerous genes associated with diseases or phenotypes[17, 11, 6]. However, these methods primarily rely on statistical associations within static snapshots; while they identify participants in biologic-
al processes, they struggle to distinguish the drivers of state transitions. Moreover, gene function is not static but rather exhibits time-varying network regulatory effects across different stages. Therefore, moving beyond simple correlation to pinpoint driver genes that govern biological changes within specific temporal windows is necessary for dissecting biological mechanisms. Accurately capturing these drivers not only helps deconstruct cell fate determination mechanisms but also reveals core-
 regulators that direct phenotypic changes and serve as potential therapeutic targets.
Single-cell sequencing technologies have enabled high-resolution characterization of the continuous manifold of cell states[19, 16]. Nevertheless, existing dynamic analysis methods face two major limitations in quantifying driver effects. First, methods represented by RNA Velocity[8, 4] and optimal transport[5, 15] excel at reconstructing cellular trajectories and geometric flows. However, they typically focus on describing the overall direction and velocity of cell population trajectories, often -
failing to elucidate the underlying causal gene regulation driving these directional changes. Second, methods for master regulator identification based on gene regulatory networks (GRNs)[2, 9, 10], while focusing on gene-gene interactions, rely mostly on static networks or pseudotime approximations. These approaches often aim to identify source factors initiating the entire process, making it difficult to flexibly capture time-varying, stage-specific driver effects dominated by different factors d-
uring multi-stage evolution.
To address these challenges, we present Time-varying Network Driver Estimation (TNDE), a computational framework based on optimal transport and graph neural networks. TNDE aims to reconstruct the topology of time-varying GRNs from single-cell snapshots and identify driver effects within arbitrary time windows based on network connectivity
arXiv:2511.19813v1 [q-bio.MN] 25 Nov 2025

strength. The algorithm first utilizes a graph attention autoencoder to map high-dimensional data onto a low-dimensional manifold, capturing topological features. Subsequently, it introduces partial optimal transport with virtual sink/source nodes to reconstruct cross-stage cellular evolutionary trajectories under assumptions allowing for proliferation and apoptosis. Finally, TNDE decouples time-varying regulatory matrices via weighted ridge regression to directly quantify driver effects. Further-
more, based on the Markov process assumption, the framework supports the flexible evaluation of cumulative driver effects across arbitrary spans through matrix multiplication.
We comprehensively evaluated the performance of TNDE through simulated experiments and empirical data analysis. Simulation results demonstrate that TNDE outperforms ablation variants and conventional trajectory alignment baselines in identifying time-varying driver genes. Notably, TNDE exhibits high accuracy and robustness in complex scenarios where driver effects reverse or exist only within specific windows. Furthermore, applied to single-cell transcriptomic data of mouse erythropoiesis, TNDE no-
t only pinpointed stage-specific key regulators but also revealed regulatory mechanisms during differentiation by identifying key genes with significantly downregulated expression yet strong network driving force. These results confirm that TNDE effectively addresses the limitation in capturing stage-specific regulatory effects, providing a powerful computational tool for dissecting the dynamic regulatory mechanisms of complex biological processes.
B1 B2 t3
cells
cells
cells
cells
cells
cells
cells
cells
cells
genes genes genes
genes genes genes
genes genes genes
G1
G2
G3
Layer1 Layer2
GAT GAT
Shared Encoder Embedding
Shared Linear Decoder
Dustbin(out)
Dustbin(in)
t1
t2
t3
Coupling Matrix ∏12
Coupling Matrix ∏23
Weighted Ridge
Driver Score
Gene
B13
B2
B1
Markov Composition
ab
cd
t2
t1
Input Graph Construction and Autoencoder
Cell coupling Effect Qualification
Figure 1: Overview of TNDE. a, The framework takes discrete time-series single-cell snapshots as input to uncover the gene regulatory matrices. b, A shared Graph Attention Encoder projects high-dimensional gene expression profiles into a common low-dimensional space, preserving the local topological structure of cell neighborhoods. c, Partial optimal transport then estimates cell couplings within this space, incorporating a dustbin mechanism to handle unmatched cells from proliferation, apoptosis,-
 or outliers. d, Using these couplings, weighted ridge regression infers the gene regulatory network to quantify each gene’s driver strength, extending the analysis to long-term cumulative effects via Markov composition.
2 Results
2.1 Overview of the TNDE framework
We developed the Time-varying Network Driver Estimation (TNDE) framework to recover dynamic gene regulatory networks from discrete single-cell snapshots. Given that single-cell sequencing data provide only static snapshots at discrete time points without continuous lineage tracking, the model posits that observed cells at a later stage evolve
2

from a subset of cells at the preceding stage via a gene regulatory transition matrix. However, accounting for lineage discontinuities caused by cell proliferation, apoptosis, or migration, the cell population at the subsequent stage is modeled as evolving from a combination of observed subpopulations from the current stage and unobserved latent sources (Figure 1a).
To address the high dimensionality of single-cell data, TNDE first employs a shared-parameter Graph Attention Network (GAT) to construct low-dimensional representations of the data (Figure 1b). This module aggregates local topological information based on the k-nearest neighbor graph of cells, effectively suppressing noise while preserving the manifold structure of the cell population, thereby ensuring biologically robust inter-cellular distances in the latent space. Subsequently, to resolve the l-
ineage alignment challenge in non-equilibrium processes, TNDE utilizes partial optimal transport to estimate cross-stage cellular flows within this latent space (Figure 1c). Recognizing the discontinuities introduced by proliferation and apoptosis, the algorithm avoids forced global matching; instead, it connects only cells with clear evolutionary relationships, assigning unmatched samples to virtual dustbins. This strategy effectively mitigates the interference of outliers, ensuring the generated-
 cell coupling matrix reflects genuine biological evolutionary paths. Upon obtaining cellular correspondences, TNDE reconstructs the gene regulatory matrix via weighted ridge regression (Figure 1d). Within this matrix, the column norm corresponding to each gene quantifies its driver effect on regulatory state transitions. Furthermore, based on the Markov assumption, the framework enables the calculation of cumulative regulatory effects across multiple time points by cascading the transition matric-
es of consecutive stages.
2.2 Experimental Design and Datasets
To validate the accuracy and biological applicability of TNDE in quantifying driver effects, we adopted a comprehensive evaluation strategy integrating both numerical simulations and empirical biological data. Given the lack of observable ground-truth dynamic regulatory factors and weights in real-world single-cell sequencing data, we first constructed a controlled Markov linear Gaussian simulation framework to quantitatively benchmark algorithmic performance. This framework recapitulates challeng-
es in single-cell dynamic analysis, specifically lineage imbalance and the time-varying nature of gene regulatory networks. We incorporated controllable mechanisms for driver gene turnover and effect injection across consecutive stages. This design was aimed at assessing the algorithm’s capacity to distinguish timevarying regulatory signals from background co-expression, thereby precisely pinpointing local regulatory alterations occurring within specific temporal windows.
Building on this, to validate the model’s generalizability to complex real-world biological scenarios, we applied TNDE to single-cell transcriptomic data of mouse erythropoiesis. This dataset captures the continuous differentiation trajectory from hematopoietic progenitors to committed erythrocytes. As this biological process is characterized by highly stagespecific regulation, we leveraged this dataset to test whether TNDE, in the absence of prior lineage knowledge, could accurately identify driv-
er genes that dominate specific differentiation windows—particularly those often overlooked by static differential expression analyses—by reconstructing the time-varying network topology.
2.3 TNDE outperforms baselines in identifying dynamic drivers
To comprehensively evaluate TNDE’s performance, we generated simulated data containing three consecutive time points (t1, t2, t3) based on a linear Gaussian Markov process. To mimic real biological regulatory complexity, we designed three representative dynamic patterns: the Same mode, where driver genes and their effect strengths remain constant over time; the Partial mode, where the driver gene set evolves but retains a core intersection; and the Disjoint mode, where different stages are driven -
by completely distinct gene sets. We benchmarked TNDE against six algorithms: ablation variants designed to validate core components (No-Enc, No-OT, kNN), and existing representative trajectory alignment tools (MNN, PCA, Diffusion). Crucially, all methods were tested under identical settings with p = 100 genes and 10 true driver genes to ensure fair comparison.
TNDE demonstrated consistent superiority across all evaluation metrics (Figure 2). Specifically, in terms of Top-N recall, TNDE significantly outperformed other baseline models in both single-stage transitions (t1 → t2, t2 → t3) and the cumulative process (t1 → t3), exhibiting robust driver gene identification capabilities (Figure 2a). Notably, even in the Disjoint mode where the driver landscape changes fundamentally, TNDE maintained accurate identification, whereas static baselines like MNN and -
PCA showed significant performance degradation. The average rank metric further corroborated this advantage, with TNDE consistently ranking true driver genes higher than any other method (Figure 2b). Moreover, rank correlation analysis for single stages revealed a high degree of consistency between TNDE-estimated driver scores and true regulatory strengths, indicating the algorithm’s ability to not only pinpoint key genes but also accurately quantify their relative regulatory potency (Figure 2c).
3

This performance advantage underscores the necessity of TNDE’s core architectural design. Comparison with ablation variants revealed that removing the GNN encoder (No-Enc) led to a marked performance decline, highlighting the critical importance of capturing non-linear topological structures within cell neighborhoods. Similarly, the variant relying on simple kNN matching (No-OT) performed significantly worse than TNDE, confirming the robustness of partial optimal transport in handling non-equilib-
rium processes by preventing forced misalignments, thereby ensuring the accuracy of downstream regulatory inference.
To further demonstrate our algorithm’s performance in capturing cumulative driver effects across multiple time points, we simulated a specific scenario where the sign of a driver gene’s regulation flips between stages. As shown in Figure 2d, TNDE resides in the bottom-right quadrant, indicating that it not only maintains high accuracy in standard modes but also sensitively identifies signal cancellation in the reversal mode. In contrast, baseline methods typically failed to distinguish signal canc-
ellation from noise. Collectively, these results demonstrate that TNDE effectively addresses the limitations of existing methods in quantifying driver effects by integrating graph representation learning with optimal transport-based cell alignment.
0.8
Ours
same partial disjoint Simulation mode
0.0
0.2
0.4
0.6
0.8
1.0
Recall @t1→t2
same partial disjoint Simulation mode
0.0
0.2
0.4
0.6
0.8
1.0
Recall @t2→t3
same partial disjoint Simulation mode
0.0
0.2
0.4
0.6
0.8
1.0
Recall @t1→t3
Method Ours No-Enc (OT only) No-OT (GNN + kNN) No-Enc/OT (kNN) MNN + ridge PCA-Proc + kNN Diffusion + kNN
same partial disjoint Simulation mode
10
20
30
40
50
60
70
80
Avg Rank @t1→t2
same partial disjoint Simulation mode
10
20
30
40
50
60
70
80
Avg Rank @t2→t3
same partial disjoint Simulation mode
10
20
30
40
50
60
70
80
Avg Rank @t1→t3
Method Ours No-Enc (OT only) No-OT (GNN + kNN) No-Enc/OT (kNN) MNN + ridge PCA-Proc + kNN Diffusion + kNN
same partial disjoint Simulation mode
−1.00
−0.75
−0.50
−0.25
0.00
0.25
0.50
0.75
1.00
Rank Corr @t1→t2
same partial disjoint Simulation mode
−1.00
−0.75
−0.50
−0.25
0.00
0.25
0.50
0.75
1.00
Rank Corr @t2→t3
Method Ours No-Enc (OT only) No-OT (GNN + kNN) No-Enc/OT (kNN) MNN + ridge PCA-Proc + kNN Diffusion + kNN
0.2 0.3 0.4 0.5 0.6 0.7 Mean Recall@Top20% on non-flip modes (t1→t3)
0.6
0.7
0.8
0.9
1.0
Flip / non-flip recall ratio (t1→t3)
No-Enc
No-OT
kNN
MNN
PCA
Diff
a
b
c
Ours
d
Figure 2: Benchmarking TNDE performance on three-stage simulated datasets. a, Bar plots showing the Top-10 recall rates for the first stage, second stage, and the cumulative process under three fundamental dynamic modes. b, Box plots displaying the distribution of average ranks for true driver genes across different dynamic modes; lower ranks indicate more precise identification. c, Dot plots illustrating the rank correlation coefficients between estimated driver scores and true regulatory strengt-
hs in the first and second stages under three dynamic modes. d, Scatter plot analyzing the impact of effect reversal on cumulative driver identification. The X-axis represents the average recall in non-reversal modes, while the Y-axis represents the ratio of performance in reversal mode to non-reversal mode; a lower ratio reflects the model’s ability to correctly capture the theoretical signal cancellation inherent in cumulative reversal effects.
2.4 TNDE uncovers stage-specific and latent regulatory drivers in mouse erythropoiesis
To further explore TNDE’s capacity to dissect complex biological dynamics, we applied it to a single-cell transcriptomic dataset of mouse erythropoiesis [14]. As shown in the Uniform Manifold Approximation and Projection (UMAP) visu
4

alization (Figure 3a), this dataset captures a continuous differentiation trajectory from early hematopoietic progenitors to committed erythrocytes. We divided this trajectory into four consecutive transition stages (t1 → t2 to t4 → t5) to identify dynamic driver genes. TNDE analysis revealed a highly dynamic distribution of driver genes. Venn diagrams of driver genes across the four transition stages showed limited overlap between adjacent stages (Figure 3b). This result suggests that distinct r-
egulatory programs are sequentially activated during lineage commitment and maturation, a temporal specificity that static network inference methods struggle to capture.
Furthermore, the top driver genes identified by TNDE aligned highly with existing biological knowledge. As shown in Figure 3c, the set of top-ranked driver genes clearly delineates the underlying regulatory trajectory of erythroid differentiation. First, the list includes the classic early hematopoietic stem/progenitor cell marker Cd34 [1, 20]. More importantly, the top-ranked Rgs18 is a confirmed myeloid-erythroid lineage-specific regulator [18], highly enriched in hematopoietic stem cells and ea-
rly progenitors, and is critical for fine-tuning G-protein signaling pathways to determine lineage fate [12]. As differentiation progresses, the list also includes multiple downstream effector genes closely related to erythrocyte maturation and function, including Hbb-bh0 (hemoglobin synthesis), Hebp1 (heme metabolism), and the erythrocyte membrane transporters Slc4a1 and Car1. TNDE’s ability to accurately capture this series of key genes, covering the entire process from early commitment to termi-
nal differentiation, strongly validates the biological relevance of the model’s driver scoring metric.
To investigate the relationship between driver effects and gene expression changes, we compared the cumulative driver scores of all genes against their Log2 fold changes in expression (Figure 3d). The analysis revealed that high-weight drivers identified by TNDE predominantly exhibited significant downregulation in expression (Log2FC < -1, p < 0.05). This finding reveals a unique regulatory mechanism at this developmental stage: erythroid lineage commitment is driven largely by the repression of k-
ey genes maintaining the early progenitor state, rather than solely by the activation of new genes. Furthermore, we performed Gene Ontology (GO) enrichment analysis on this set of genes with high driver scores but significant downregulation to understand their functional characteristics (Figure 3e). Results showed that these genes were significantly enriched in terms such as "regulation of hemopoiesis" and "hematopoietic progenitor cell differentiation." This confirms that TNDE accurately captured-
 the critical signals where cells determine lineage fate by downregulating specific pluripotency regulators upon exiting the progenitor state. Additionally, enrichment terms such as "regulation of blood vessel endothelial cell migration" further corroborates the complex spatiotemporal regulatory roles of this gene set during early cellular development.
3 Methods
3.1 Data Simulation
To systematically evaluate the capacity of TNDE to identify driver effects, we designed a controllable simulator based on a Markov linear Gaussian process. This simulator recapitulates two key features of real biological data: (i) time-varying regulatory effects that evolve dynamically; and (ii) partially coupled populations arising from mixed cellular lineages.
Generation of Regulatory Matrices
We first generated ground-truth cross-stage regulatory matrices B1 (t1 → t2) and B2 (t2 → t3). We modeled the gene regulatory network as a superposition of a shared basal network and a stage-specific network. Thus, each Bt was formulated as a combination of a common regulatory component C and a specific regulatory component ∆t:
Bt = (1 − w)∆t + wC, w ∈ [0, 1] (1)
Injection of Driver Effects
Subsequently, we injected predefined driver effects into the regulatory matrix Bt. In our model, B:,k represents the regulatory strength of gene k on all other genes. We set the L2 norm of the column B:,k corresponding to the selected driver gene k to a predefined driver strength. To test the robustness of the algorithm under different dynamic scenarios, we established four driver gene modes defining the relationship between the driver gene sets in B1 and B2:
• Same: The set of driver genes and their effect strengths remain identical across both stages.
• Disjoint: The sets of driver genes in the two stages are completely mutually exclusive.
• Partial: The sets of driver genes evolve over time but retain a partial intersection.
• Flip: The set of driver genes remains the same, but their regulatory effects are completely reversed (signflipped) in the second stage.
5

blood vessel endothelial cell migration
embryonic placenta development
positive regulation of endothelial cell migration
regulation of blood vessel endothelial cell migration
positive regulation of blood vessel endothelial cell migration
hematopoietic progenitor cell differentiation
positive regulation of neurogenesis
heart morphogenesis
myeloid leukocyte differentiation
wound healing
regulation of T cell activation
regulation of leukocyte differentiation
lymphocyte differentiation
regulation of hemopoiesis
regulation of neurogenesis
0.06 0.08 0.10 0.12 GeneRatio
p.adjust
0.00005
0.00010
0.00015
0.00020
Count
8
10
12
14
Stage 1−>2
Stage 2−>3 Stage 3−>4
Stage 4−>5
41 (26.8%)
28 (18.3%)
20 (13.1%)
23 (15.0%)
3 (2.0%)
9
(5.9%) 14
(9.2%)
2 (1.3%)
5 (3.3%)
2 (1.3%)
0 (0.0%)
4 (2.6%)
1 (0.7%)
1 (0.7%)
0 (0.0%)
3.15
2.69
2.58
2.57
2.36
2.12
2.09
2.04
1.98
1.97
Nkg7
Hebp1
Slc4a1
Car1
Coch
Irf8
Hbb−bh0
Fxyd5
Cd34
Rgs18
0123 Driver Score
Gene
2.00
2.25
2.50
2.75
3.00
Blood progenitors 1
Blood progenitors 2
Erythroid 1
Erythroid 2
Erythroid 3
−20 −10 0 10 20 Log2 Fold Change
0.00
0.05
0.10
0.15
0.20
0.25
Cumulative Driver Score (t1->t5)
Lyz2
Gpr182
Hand1
Nrros Plk2
Cldn5
D030007L05Rik
Lat
Ctla2a
Pcsk1n
Tfpi
Ccdc85b Pimreg
Phlda2
Sept9
Slc16a3
Rnd2
H2afy
Sptssa
Cnn2
Category
High Drive, Low Expr High Drive, High Expr Others
ab
cd
e
Figure 3: Application of TNDE to mouse erythropoiesis data. a, UMAP projection visualizing the cellular developmental trajectory, color-coded to indicate five consecutive differentiation stages from hematopoietic progenitors to erythrocytes. b, Venn diagrams quantifying the number of identified driver genes and their overlap ratios across transition stages. c, Lollipop chart listing the top 10 key driver genes ranked by cumulative driver score across the entire t1 → t5 process. d, Scatter plot of -
cumulative driver scores (Y-axis) versus Log2 fold change in expression (X-axis). Red points mark genes identified by TNDE as high-scoring (Top 25%) and significantly downregulated (Log2FC < −1, p < 0.05); blue points mark high-scoring (Top 25%) and significantly upregulated (Log2FC > 1, p < 0.05) genes. e, Bubble plot showing the top 15 significant GO enrichment results for high-scoring driver genes. Dot size represents the number of enriched genes, and color intensity indicates statistical signi-
ficance (Adjusted p-value).
6

Multi-stage Data Generation
We assumed a basal cell population X1 ∼ N (0, I) at t = 1. Observational data Xt at subsequent stages were modeled as a mixture of two distinct source populations to simulate cell groups with different lineage origins but partial associations.
Let mt be the linkage proportion from t − 1 → t. The dataset Xt comprises ntmt cells constituting the linked population (Xt,linked). The generation of this population follows a Markov process evolving from Xt−1:
Xt,linked = Xt−1[Pt] B⊤
t−1 + ε1, (2)
where Pt ⊂ {1, . . . , nt−1} is a set of parent cell indices with size ntmt, and ε1 ∼ N (0, σ2I) represents Gaussian noise.
The remaining nt(1 − mt) cells constitute the unlinked population (Xt,unlinked). These cells follow the same Markov transition defined by Bt−1, but their evolutionary origin differs. They evolve from a newly generated basal distribution Xt,root ∼ N (0, I), independent of Xt−1:
Xt,unlinked = Xt,root B⊤
t−1 + ε2. (3)
The finally observed Xt is a mixture of Xt,linked and Xt,unlinked. By recursively applying this process, we generated a dataset containing multiple time points {X1, X2, . . . , Xt}.
3.2 The TNDE Algorithm
Data Preprocessing
Let the data at stage t be Xt ∈ Rnt×p, where nt is the number of cells and p is the number of genes. As a preprocessing step, we calculated the global mean and variance across all stages {X1, . . . , XT } to perform global standardization. All subsequent analyses were conducted on these standardized data.
3.2.1 Shared Graph Attention Encoder
Graph Topology Construction
To characterize inter-cellular relationships, we first constructed a k-nearest neighbor undirected graph Gt = (Vt, Et)
based on Euclidean distances between samples, yielding an adjacency matrix At ∈ {0, 1}nt×nt . To facilitate graph
signal processing, we computed the symmetric normalized adjacency matrix A ̃t = D−1/2
t AtD−1/2
t and the graph
Laplacian Lt = I − A ̃t.
Shared Encoder Architecture
Leveraging this graph structure, we designed a parameter-shared Graph Attention Network (GAT) encoder to learn low-dimensional representations Zt ∈ Rnt×dz that preserve the topological relationships among cells. The encoder consists of L stacked Transformer blocks followed by a linear projection layer. Each Transformer block contains two sub-layers: (i) a graph-masked multi-head attention layer and (ii) a point-wise feed-forward network (FFN). Each sub-layer is accompanied by residual connections -
and layer normalization. Denoting the hidden dimension as d, the forward propagation for each stage t is defined as:
H (0)
t = φ XtWin , (4)
H (l+ 1
2)
t = LN H(l)
t + Attn H(l)
t , At , (5)
H (l+1)
t = LN H(l+ 1
2)
t + FFN H(l+ 1
2)
t , (6)
Zt = g H(L)
t , (7)
where φ is the GELU activation function, LN denotes layer normalization, FFN is a two-layer point-wise feed-forward network, and g(·) is a linear map to dimension dz.
7

In the attention sub-layer, for input H ∈ Rn×d, the h-th attention head is computed as:
Q(h) = HW (h)
Q , K(h) = HW (h)
K , V (h) = HW (h)
V , (8)
s(h)
ij = ⟨q(h)
i , k(h)
j⟩
√dh
, α(h)
ij = exp s(h)
ij · I{Aij = 1}
P
j′:Aij′ =1 exp s(h)
ij′
, (9)
The outputs of all heads U (h) are concatenated and linearly projected by WO to obtain the sub-layer output:
Attn(H, A) =
h
U (1) ∥ · · · ∥ U (H)i
WO, WO ∈ R(Hdh)×d. (10)
Loss Function
To ensure the low-dimensional embeddings can be mapped back to the gene space for interpretation, we introduced a shared linear decoder Wdec ∈ Rdz×p for each stage:
Xˆt = ZtWdec, Lrecon(Xt, Zt) = 1
nt
∥Xt − Xˆt∥2
F . (11)
Simultaneously, to suppress local noise and preserve neighborhood geometry, we applied Laplacian smoothing regularization to each stage. We incorporated warm-up and adaptive normalization to balance the magnitude differences between penalty terms:
Lsmooth(Zt) = 1
nt
tr Z⊤
t LtZt = 1
2nt
X
i,j
A ̃t,ij ∥zi − zj ∥2
2. (12)
L(eff)
smooth(k) = γsmooth · min 1, k
Kw
| {z }
warm-up
· L(k)
smooth L(0)
smooth + ε
| {z }
adaptive norm
, (13)
where k is the training epoch, Kw is the number of warm-up epochs, and ε is a constant for numerical stability.
Thus, the final optimization objective is:
mΘin
T
X
t=1
h
Lrecon(Xt, Zt)
| {z }
Reconstruction Loss
+ L(eff)
smooth(k)
| {z }
Graph Smoothing Loss
i
, (14)
where Θ denotes the shared parameters of the encoder and decoder.
3.2.2 Optimal Transport with Dustbin Extension
To establish correspondences between embeddings Zs and Zt of adjacent stages, while accounting for unmatched scenarios such as cell birth, apoptosis, or outliers, we adopted a partial optimal transport mechanism. This allows allocating a fraction of probability mass to virtual nodes, thereby avoiding forced global matching.
Joint Whitening
Before computing matching, to mitigate metric mismatch caused by covariance shift, we applied a joint whitening strategy. We first concatenated the embeddings of two stages along the sample axis to compute a joint mean μjoint and covariance Cjoint:
μjoint = 1
ns+nt 1⊤[Zs; Zt], Cjoint = 1
ns+nt−1 [Zs; Zt] − μjoint
⊤ [Zs; Zt] − μjoint . (15)
Subsequently, we centered and transformed Zs and Zt using the same whitening matrix W = (Cjoint + ρI)−1/2 (ρ > 0):
Zw
s = (Zs − μjoint) W, Zw
t = (Zt − μjoint) W. (16)
Cost Matrix
In the whitened space, we constructed the transport cost matrix using squared Euclidean distances:
Cij = z(s),w
i − z(t),w
j
2
2, 1 ≤ i ≤ ns, 1 ≤ j ≤ nt. (17)
8

To enable partial matching, we extended C with virtual dustbins, yielding an augmented cost matrix:
Caug = C δout1ns
δin1n⊤t 0 ∈ R(ns+1)×(nt+1), (18)
where δout and δin represent the penalty intensities for entering or leaving the set of real samples, respectively.
Let m ∈ (0, 1] be the fraction of total mass to be matched. The corresponding augmented marginal distributions are
defined as:
aaug = m
ns 1ns ; 1 − m , baug = m
nt 1nt ; 1 − m . (19)
Entropy-Regularized Solution
We formulated this as an entropy-regularized partial optimal transport problem:
min
P ∈R(ns+1)×(nt+1)
+
⟨P, Caug⟩ − ε H(P ) , ε > 0 s.t. P 1 = aaug, P ⊤1 = baug, (20)
where H(P ) = − P
ij Pij log Pij is the Shannon entropy.
This convex optimization problem can be solved by iteratively scaling the Gibbs kernel K = exp(−Caug/ε) to satisfy marginal constraints aaug and baug (Sinkhorn algorithm). The optimal solution P ⋆ takes the form:
P ⋆ = diag(u) K diag(v), (21)
where u, v are the scaling vectors obtained upon convergence.
Finally, we extracted the top-left sample-to-sample sub-block of P ⋆ as the coupling matrix between stages:
Π = P⋆
1:ns, 1:nt ∈ Rns×nt
+ . (22)
3.2.3 Regulatory Estimation and Multi-step Driver Identification
Estimation of Regulatory Relationships
Given observations from adjacent stages (Xs, Xt) and their coupling matrix Π, we estimated the gene regulatory matrix
B ∈ Rp×p from Xs to Xt using weighted least squares with ridge regularization:
min
B∈Rp×p
ns
X
i=1
nt
X
j=1
Πij x(t)
j − x(s)
i B⊤ 2
2 + λ ∥B∥2
F , λ > 0. (23)
Letting r = Π1 ∈ Rns and Dr = diag(r), and defining:
A = X⊤
s DrXs ∈ Rp×p, S = X⊤
s ΠXt ∈ Rp×p, (24)
the solution is given by:
A + λI B⊤ = S ⇒ B⊤ = A + λI −1S. (25)
Identification of Driver Genes
For any gene regulatory matrix, B:,k represents the aggregate regulatory effect of gene k on all other genes during this transition. Therefore, we defined the driver effect score of gene k as the L2 norm of its corresponding column:
Score(k) = ∥Bˆ:,k∥2. (26)
A higher score indicates a stronger regulatory driver effect of gene k during this stage transition.
Furthermore, assuming the cellular transition process follows a first-order linear Gaussian Markov model:
Xt+1 = XtB⊤
t + εt, E[εt] = 0, εt ⊥ Xt, (27)
it follows that
E[Xt2 | Xt1 ] = Xt1 Bt2−1 · · · Bt1
⊤. (28)
Based on this Markov assumption, the estimated matrices from adjacent stages {Bt} can be combined to form a global regulatory matrix for any continuous interval:
Bt1→tq = Btq−1 Btq−2 · · · Bt1 ∈ Rp×p. (29)
This matrix characterizes the composite linear effect from t1 to tq. This formulation enables us to identify not only
stage-wise driver genes by analyzing the column norms of Bˆt, but also cumulative driver effects over arbitrary time scales by computing the column norms of the composite matrix.
9

4 Discussion
While single-cell RNA sequencing (scRNA-seq) provides high-resolution snapshots of cell states, dissecting dynamic regulatory mechanisms from these static images remains challenging. In this study, we present the TNDE framework, a computational model integrating graph representation learning, partial optimal transport, and sparse regression. Distinct from existing trajectory inference or static network analysis methods, the innovation of TNDE lies in explicitly modeling cell state transitions as a-
 non-equilibrium transport process accompanied by proliferation and apoptosis, thereby quantifying time-varying gene driver effects on this basis.
The superior performance of TNDE is attributed to its precise modeling of the intrinsic characteristics of single-cell data. First, simulation experiments demonstrate that traditional alignment methods based on kNN or standard optimal transport are prone to forced erroneous matching when dealing with lineage branching or discontinuous sampling. In contrast, TNDE introduces a virtual node mechanism to automatically identify and exclude unexplainable cells. This alignment strategy significantly enha-
nces the robustness of subsequent gene regulatory network inference, particularly in non-stationary processes where cellular population structures undergo drastic changes. Second, by utilizing a shared graph attention encoder, we effectively suppress sequencing noise while preserving local topological structures, rendering regulatory inference on the low-dimensional manifold more reliable.
In terms of biological application, analysis of mouse erythropoiesis data revealed that the majority of high-scoring driver genes identified by TNDE were significantly downregulated in differential expression analysis. This indicates that TNDE quantifies driver effects directly through the reconstructed gene regulatory network, rather than relying solely on the magnitude or direction of expression changes. This network topology-based quantification enabled TNDE to accurately identify key progenito-
r factors that drive cell fate transitions through downregulation, validating the model’s effectiveness in capturing complex regulatory patterns.
Despite TNDE’s robust performance in capturing dynamic driver genes, this study has limitations inherent to the model assumptions. While weighted ridge regression was adopted to ensure computational stability and interpretability given the sparse and noisy nature of single-cell data, true gene regulatory networks are inherently nonlinear, often involving enzymatic saturation effects, transcriptional activation thresholds, or complex combinatorial logic. Consequently, the current linear model repre-
sents a first-order approximation of complex biological dynamics. While this effectively captures major regulatory trends, it may fail to fully resolve fine-grained nonlinear regulatory details. Furthermore, the current framework relies solely on transcriptomic data, limiting the direct inference of cis-regulatory elements at the epigenetic level.
Future work will primarily focus on overcoming these linear constraints. On one hand, we plan to introduce nonlinear dynamic models to replace the current linear regression, thereby fitting the nonlinear evolutionary behavior of complex systems with higher fidelity. On the other hand, we aim to extend TNDE to support the integration of multi-omics data, utilizing chromatin accessibility as a prior structural constraint to further enhance the accuracy and biological resolution of GRN inference. In -
summary, TNDE provides a powerful computational tool for dissecting dynamic regulatory mechanisms in development and disease progression, laying a methodological foundation for future precision medicine research.
Code and Data Availability
The complete source code and associated datasets supporting this study are publicly accessible at https://github. com/jxlee423/TNDE
10

References
[1] D. B. AbuSamra, F. A. Aleisa, A. S. Al-Amoodi, H. M. Jalal Ahmed, C. J. Chin, A. F. Abuelela, P. Bergam, R. Sougrat, and J. S. Merzaban. Not just a marker: CD34 on human hematopoietic stem/progenitor cells dominates vascular selectin binding along with CD44. Blood Adv, 1, Dec. 2017.
[2] S. Aibar, C. B. González-Blas, T. Moerman, V. A. Huynh-Thu, H. Imrichova, G. Hulselmans, F. Rambow, J.-C. Marine, P. Geurts, J. Aerts, J. van den Oord, Z. K. Atak, J. Wouters, and S. Aerts. SCENIC: single-cell regulatory network inference and clustering. Nat Methods, 14, Oct. 2017.
[3] P. Badia-I-Mompel, L. Wessels, S. Müller-Dott, R. Trimbour, R. O. Ramirez Flores, R. Argelaguet, and J. SaezRodriguez. Gene regulatory network inference in the era of single-cell multi-omics. Nat Rev Genet, 24, June 2023.
[4] V. Bergen, M. Lange, S. Peidli, F. A. Wolf, and F. J. Theis. Generalizing RNA velocity to transient cell states through dynamical modeling. Nat Biotechnol, 38, Aug. 2020.
[5] K. Cao, Q. Gong, Y. Hong, and L. Wan. A unified computational framework for single-cell data integration with optimal transport. Nat Commun, 13, Dec. 2022.
[6] C. Cheng, W. Chen, H. Jin, and X. Chen. A review of Single-Cell RNA-Seq annotation, integration, and Cell-Cell communication. Cells, 12, July 2023.
[7] J. Cheng, M. Cheng, A. J. Lusis, and X. Yang. Gene regulatory networks in coronary artery disease. Curr Atheroscler Rep, 25, Nov. 2023.
[8] G. La Manno, R. Soldatov, A. Zeisel, E. Braun, H. Hochgerner, V. Petukhov, K. Lidschreiber, M. E. Kastriti, P. Lönnerberg, A. Furlan, J. Fan, L. E. Borm, Z. Liu, D. van Bruggen, J. Guo, X. He, R. Barker, E. Sundström, G. Castelo-Branco, P. Cramer, I. Adameyko, S. Linnarsson, and P. V. Kharchenko. RNA velocity of single cells. Nature, 560, Aug. 2018.
[9] H. Matsumoto, H. Kiryu, C. Furusawa, M. S. H. Ko, S. B. H. Ko, N. Gouda, T. Hayashi, and I. Nikaido. SCODE: an efficient regulatory network inference algorithm from single-cell RNA-Seq during differentiation. Bioinformatics, 33, Aug. 2017.
[10] R. S. McClure, J. P. Wendler, J. N. Adkins, J. Swanstrom, R. Baric, B. L. D. Kaiser, K. L. Oxford, K. M. Waters, and J. E. McDermott. Unified feature association networks through integration of transcriptomic and proteomic data. PLoS Comput Biol, 15, Sept. 2019.
[11] A. McDermaid, B. Monier, J. Zhao, B. Liu, and Q. Ma. Interpretation of differential gene expression results of RNA-seq data: review and integration. Brief Bioinform, 20, Nov. 2019.
[12] I. K. Park, C. A. Klug, K. Li, L. Jerabek, L. Li, M. Nanamori, R. R. Neubig, L. Hood, I. L. Weissman, and M. F. Clarke. Molecular cloning and characterization of a novel regulator of g-protein signaling from mouse hematopoietic stem cells. J Biol Chem, 276, Jan. 2001.
[13] A. H. Pearlman, M. S. Hwang, M. F. Konig, E. H.-C. Hsiue, J. Douglass, S. R. DiNapoli, B. J. Mog, C. Bettegowda, D. M. Pardoll, S. B. Gabelli, N. Papadopoulos, K. W. Kinzler, B. Vogelstein, and S. Zhou. Targeting public neoantigens for cancer immunotherapy. Nat Cancer, 2, May 2021.
[14] B. Pijuan-Sala, J. A. Griffiths, C. Guibentif, T. W. Hiscock, W. Jawaid, F. J. Calero-Nieto, C. Mulas, X. IbarraSoria, R. C. V. Tyser, D. L. L. Ho, W. Reik, S. Srinivas, B. D. Simons, J. Nichols, J. C. Marioni, and B. Göttgens. A single-cell molecular map of mouse gastrulation and early organogenesis. Nature, 566, Feb. 2019.
[15] G. Schiebinger, J. Shu, M. Tabaka, B. Cleary, V. Subramanian, A. Solomon, J. Gould, S. Liu, S. Lin, P. Berube, L. Lee, J. Chen, J. Brumbaugh, P. Rigollet, K. Hochedlinger, R. Jaenisch, A. Regev, and E. S. Lander. OptimalTransport analysis of Single-Cell gene expression identifies developmental trajectories in reprogramming. Cell, 176, Jan. 2019.
[16] A. Tanay and A. Regev. Scaling single-cell genomics from phenomenology to mechanism. Nature, 541, Jan. 2017.
[17] H. Yin, H. Duo, S. Li, D. Qin, L. Xie, Y. Xiao, J. Sun, J. Tao, X. Zhang, Y. Li, Y. Zou, Q. Yang, X. Yang, Y. Hao, and B. Li. Unlocking biological insights from differentially expressed genes: Concepts, methods, and future perspectives. J Adv Res, 76, Dec. 2024.
[18] D. Yowe, N. Weich, M. Prabhudas, L. Poisson, P. Errada, R. Kapeller, K. Yu, L. Faron, M. Shen, J. Cleary, T. M. Wilkie, C. Gutierrez-Ramos, and M. R. Hodge. RGS18 is a myeloerythroid lineage-specific regulator of g-protein-signalling molecule highly expressed in megakaryocytes. Biochem J, 359, Oct. 2001.
11

[19] G. X. Y. Zheng, J. M. Terry, P. Belgrader, P. Ryvkin, Z. W. Bent, R. Wilson, S. B. Ziraldo, T. D. Wheeler, G. P. McDermott, J. Zhu, M. T. Gregory, J. Shuga, L. Montesclaros, J. G. Underwood, D. A. Masquelier, S. Y. Nishimura, M. Schnall-Levin, P. W. Wyatt, C. M. Hindson, R. Bharadwaj, A. Wong, K. D. Ness, L. W. Beppu, H. J. Deeg, C. McFarland, K. R. Loeb, W. J. Valente, N. G. Ericson, E. A. Stevens, J. P. Radich, T. S. Mikkelsen, B. J. Hindson, and J. H. Bielas. Massively parallel digital tr-
anscriptional profiling of single cells. Nat Commun, 8, Jan. 2017.
[20] Y. Zhou, X. Cai, X. Zhang, Y. Dong, X. Pan, M. Lai, Y. Zhang, Y. Chen, X. Li, X. Li, J. Liu, Y. Zhang, and F. Ma. Mesenchymal stem/stromal cells from human pluripotent stem cell-derived brain organoid enhance the ex vivo expansion and maintenance of hematopoietic stem/progenitor cells. Stem Cell Res Ther, 15, Mar. 2024.
12

---

## Processing Information

- **Processing Library:** Zotero PDFWorker
- **Processing Date:** 2026-02-10T18:17:42.702Z
- **Text Length:** 41266 characters
- **Success:** Text extraction completed
- **PDF Library Used:** Zotero PDFWorker
- **Pages Processed:** 12 of 12
