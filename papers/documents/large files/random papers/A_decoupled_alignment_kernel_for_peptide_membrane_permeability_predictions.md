# PDF Document: Amirahmadi et al. - 2025 - A decoupled alignment kernel for peptide membrane permeability predictions.pdf

**File Path:** Amirahmadi et al. - 2025 - A decoupled alignment kernel for peptide membrane permeability predictions.pdf

**Processed Date:** 2026-02-10T18:17:29.293Z

**File Size:** 929.72 KB

**Total Pages:** 30

**Extracted Pages:** 30

**PDF Library:** Zotero PDFWorker

**Attachment Item ID:** 3735

**Title:** A decoupled alignment kernel for peptide membrane permeability predictions

**Collection:** Large Files > Random Papers

---

## Extracted Text Content

A decoupled alignment kernel for peptide
membrane permeability predictions
Ali Amirahmadi1,3*, Go ̈k ̧ce Geylan2,3, Leonardo De Maria4, Farzaneh Etminani1,5, Mattias Ohlsson1,6, Alessandro Tibo3
1*Center for Applied Intelligent Systems Research in Health, Halmstad University, Kristian IV:s v ̈ag 3, Halmstad, 30118, Sweden. 2Division of Systems and Synthetic Biology, Department of Life Sciences, Chalmers University of Technology, Kemig ̊arden 1, Gothenburg, 41296, Sweden. 3Molecular AI, Discovery Sciences, R&D, AstraZeneca, Pepparedsleden 1, M ̈olndal, 43183, Sweden. 4Medicinal Chemistry, Research and Early Development, Respiratory & Immunology, BioPharmaceuticals R&D, AstraZeneca, Peppare-
dsleden 1, M ̈olndal, 43183, Sweden. 5Department of Research and Development (FoU), Region Halland, S ̈odra v ̈agen 9, Halmstad, 30118, Sweden. 6Centre for Environmental and Climate Science, Computational Science for Health and Environment, Lund University, Kontaktv ̈agen 10, Lund, 22362, Sweden.
*Corresponding author(s). E-mail(s): ali.amirahmadi@hh.se; Contributing authors: gokce.geylan@astrazeneca.com; leonardo.demaria@astrazeneca.com; farzaneh.etminani@hh.se; mattias.ohlsson@hh.se; alessandro.tibo@astrazeneca.com;
Abstract
Cyclic peptides are promising modalities for targeting intracellular sites; however, cell-membrane permeability remains a key bottleneck, exacerbated by limited public data and the need for well-calibrated uncertainty. Instead of relying on data-eager complex deep learning architecture, we propose a monomer-aware decoupled global alignment kernel (MD-GAK), which couples chemically meaningful residue–residue similarity with sequence alignment while decoupling local
1
arXiv:2511.21566v1 [cs.LG] 26 Nov 2025

matches from gap penalties. MD-GAK is a relatively simple kernel. To further demonstrate the robustness of our framework, we also introduce a variant, PMD-GAK, which incorporates a triangular positional prior. As we will show in the experimental section, PMD-GAK can sometimes offer additional advantages over MD-GAK, particularly in reducing calibration errors. Since our focus is on uncertainty estimation, we use Gaussian Processes as the predictive model, as both MD-GAK and PMD-GAK can be directl-
y applied within this framework. We demonstrate the effectiveness of our methods through an extensive set of experiments, comparing our fully reproducible approach against state-of-the-art transformer-based models, and show that it outperforms them across all metrics.
Keywords: cyclic peptides, permeability, Gaussian processes, global alignment kernel, Tanimoto, calibration.
1 Introduction
Cyclic peptides have re-emerged as a compelling modality for intracellular targets thanks to their high affinity and selectivity, yet their cell membrane permeability remains a central bottleneck for discovery [1, 2]. Recent resources such as Cyclic Peptide Membrane Permeability Database (CycPeptMPDB) [1] aggregate permeability measurements from the literature and patents across multiple assays (notably Parallel artificial membrane permeability assay (PAMPA)), providing a large and well-annotated -
dataset for systematic modeling [1]. However, these datasets are still relatively small by modern machine learning (ML) standards, heterogeneous in experimental provenance, and structurally biased, which complicates out-of-domain generalization and model calibration [2, 3]. These challenges underscore the need for methods that can (i) encode peptide-specific structure, (ii) work well in the small–to–medium data regime, and (iii) provide reliable uncertainty quantification. Gaussian processes (GPs)-
 are natural candidates for such settings: they deliver calibrated probabilistic predictions with an inductive bias entirely controlled by a kernel [4, 5]. The kernel choice is therefore pivotal. For small molecules, the Tanimoto (Jaccard) kernel on circular fingerprints (e.g., RDKit Morgan) has been highly successful. These fingerprints encode rich local topological environments via circular neighborhoods. However, when a cyclic peptide is represented as a single molecular graph, circular fingerp-
rints are inherently order-agnostic with respect to the peptide’s monomer sequence [6, 7]: they encode local topological environments but do not preserve the explicit residue order or enable residue-to-residue alignment. Since permeability depends not only on which building blocks are present but also on where they occur and which neighbors they have [8, 9], this motivates kernels that pair chemistryaware monomer similarities with sequence alignment, capturing both composition and arrangement. Rec-
ent benchmarking on cyclic peptide permeability underscores that representation and split strategy (e.g., scaffold versus random splits) can dominate performance and robustness trends, and that calibrated uncertainty is as important as raw discrimination [3]. The work of parallel methodology also emphasizes careful data curation,
2

duplicate control, and applicability domain-aware evaluation to avoid optimistic estimates under nearly duplicate leakage [2]. To retain peptide-specific structure, one can move beyond features from traditional fingerprint encodings that summarize each peptide as an order-invariant collection of local substructures and instead employ sequence- and graph-aware representations. Circular fingerprints such as Morgan/ECFP encode rich local chemistry and remain strong baselines for small-molecule QSAR;-
 however, when a single global fingerprint is used as the only feature for a peptide, structural information (e.g. order and long-range topology) [10], and subtle stereochemical rearrangements [11] are largely missed. As a result, traditional classifiers such as SVMs or random forests often show limited discriminative power for cyclic peptide permeability when compared with modern graph-based models [3]. On the sequence side, a large body of work now treats molecules explicitly as strings or token-
 sequences. Recurrent and transformerbased chemical language models (e.g., LSTMs and ChemBERTa) operate on SMILES and have demonstrated that sequence-aware encoders can capture both local and more global structural patterns that are not easily accessible to a single fingerprint vector [12]. Within kernel methods, Global Alignment (GA) kernels provide a principled way to exploit sequence order: they replace the hard minimum of Dynamic Time Warping (DTW) [13] with a soft sum over all monotone alignm-
ents, yielding positive-definite similarities suitable for kernel machines and Gaussian processes [14]. ”Triangular” GA variants introduce a kernel that both encodes positional priors and reduces computation, maintaining positive definiteness [4]. Graph-aware methods push this idea further by working directly on the molecular graph. Message-Passing Neural Networks (MPNNs) unify a broad family of graph convolutional architectures into a common message-passing framework, achieving state-of-the-art p-
erformance on several quantum-chemical benchmarks by learning task-specific node and edge embeddings from molecular graphs [15] . AttentiveFP builds on this paradigm by introducing a graph attention mechanism that adaptively reweights neighbors: it not only propagates information along local bonds but also learns nonlocal intramolecular interactions and “hidden” edges that are most relevant for a given property, while still respecting the underlying molecular topology [16]. Directed MPNNs (DMPNNs)-
 refine message passing even further by operating on directed edges and improve information flow [17]. Recent systematic benchmarking on cyclic peptide membrane permeability demonstrates that graph-based models such as AttentiveFP, MPNN, and DMPNN are among the top-performing approaches, clearly outperforming classical SVM and random-forest models built solely on fingerprint descriptors.[3]. In this work, we take a complementary approach that combines the strengths of rich local chemistry of molec-
ular fingerprints with sequence-aware topology. We introduce a monomer decoupled global alignment kernel (MD-GAK) for cyclic peptides. Each peptide is represented as an ordered sequence of monomer units. Our key design choice is to treat each monomer as a small molecule and encode it with a Morgan fingerprint, while explicitly retaining both the sequence order and the chirality of the monomers. Chirality is critical for Peptide permeability as minimal changes—as simple
3

as a single stereochemical inversion—can rewire intramolecular networks and conformational ensembles and thus shift membrane permeability [1, 8, 9]. By feeding the resulting sequence of monomer-level fingerprints into a GA kernel, MD-GAK captures sequential topology while leveraging chemically rich local descriptors, yielding a structured similarity measure that is directly usable within kernel machines and Gaussian process models for cyclic peptide permeability prediction. While we consider simp-
le kernels on monomers in this work, our approach will, in principle, allow us to use any complex kernel (e.g., based on neural networks, transformers, ...) for small molecules for which we have access to billions of data points, in contrast to peptides, where the number of structures is limited to a few thousand. This decoupling lets us compare peptides via monomer–monomer chemistry—where small-molecule tooling, fingerprints, and kernels are mature. We score local matches using a Tanimoto kernel -
on monomer fingerprints and then aggregate over all residue alignments with a GA-style dynamic program to form the peptide–peptide kernel. We further propose a position-aware variant (PMD-GAK) that adds a triangular positional prior, reducing computational cost and discouraging implausible warpings (insertions and deletions in alignment). Embedded in a GP classifier, these kernels combine chemically grounded local similarity with flexible sequence alignment and yield calibrated predictive uncertai-
nties—leveraging the strengths of small-molecule representations while capturing the sequence organization unique to peptides. Empirical scope. Using CycPeptMPDB, we assess our approach in two complementary regimes: (i) an applicability-domain–aware nested cross-validation with labeland canonical-group–stratified folds to curb leakage and probe robustness [2]; and (ii) a length-focused subset (6-, 7-, and 10-mers) evaluated under random and scaffold splits, following recent benchmarks [3]. Across -
both settings we compare against strong baselines. We observe consistent gains in discrimination (ACC/F1/ROC–AUC) and improved probabilistic calibration (Brier/ECE), with the position-aware variant particularly enhancing calibration.
Contributions. (1) A peptide-specific monomer decoupled global alignment Kernel that aligns sequences of monomer-level molecular fingerprints, bridging local chemical similarity and sequence order. (2) A position-aware triangular variant (PMD-GAK) that encodes positional priors and improves calibration while retaining positive-definite structure. (3) A thorough evaluation on CycPeptMPDB under leakage-aware protocols and length-focused splits, showing that alignment-aware GPs exceed strong baseline-
s and yield improved probabilistic calibration. (4) A theoretical construction (Appendix .1) proving the positive semidefiniteness of our kernel via a rational/convolution kernel argument, and a discussion of its relation to classical GA/Triangular-GA kernels and modern graph GP kernels [5]. Overall, our results indicate that monomer-aware alignment is a practical and principled route to modeling cyclic peptide permeability: it captures sequence-sensitive chemistry, behaves well in the low-data re-
gime typical of permeability measurements, and integrates seamlessly with GP-based uncertainty quantification—a combination that directly addresses the reliability concerns raised in recent methodological studies [2, 3].
4

2 Methods
We cast peptide–peptide comparison as a positive-definite global-alignment kernel at the monomer level and use it as the covariance of a Gaussian process (GP). This connects chemically meaningful local similarity with sequence order, while retaining closed-form GP inference and calibrated uncertainties.
2.1 Gaussian Process
A Gaussian process (GP) is a distribution over functions f : Rn → R such that any finite collection has a joint Gaussian distribution:
f (·) ∼ GP m(·), k(·, ·) ,
with mean function m and positive-definite covariance (kernel) k. For a dataset D = {(xi ∈ Rn, yi ∈ R)}N
i=1, we represent all the inputs in a matrix X of size N × n and the outputs in a vector y of size N . The induced prior over function values is
f := f (X) ∼ N m(X), KXX , (KXX )ij = k(xi, xj).
In regression tasks, we assume that the labels are noisy, i.e. yi = f (xi) + εi with εi ∼ N (0, η2), where η > 0 denotes the observation noise standard deviation.
Joint prior over train/test (regression).
Let X∗ denote test inputs and f∗ := f (X∗). The joint prior over observed targets y and test function values is
y
f∗
∼ N m(X)
m(X∗) , KXX + η2I KXX∗
KX∗X KX∗X∗
,
with KXX∗ = k(X, X∗), KX∗X = K⊤
XX∗ , and KX∗X∗ = k(X∗, X∗).
Posterior (regression).
Conditioning the GP on (X, y), we obtain a Gaussian posterior for f∗:
 ̄m∗ = m(X∗) + KX∗X KXX + η2I −1 y − m(X) ,
Σ ̄ ∗ = KX∗X∗ − KX∗X KXX + η2I −1KXX∗ .
The posterior mean provides point predictions and Σ ̄ ∗ quantifies predictive uncertainty.
Binary GP classification (Laplace).
For binary labels yi ∈ {0, 1} we place a zero-mean GP prior on latent logits, f ∼ N (0, K), and use a logistic likelihood p(yi = 1 | fi) = Ψ(fi) with Ψ(z) = 1/(1 + e−z). The approximate posterior over f is N (fˆ, Σ) with Σ = (K−1 + W )−1, where fˆ is
5

(a) Prior draws (b) Posterior predictive
Fig. 1: GP prior and posterior for PAMPA prediction using the proposed kernel. The data conditioning contracts the posterior uncertainty and shifts the mean toward test samples observations.
obtained using a Laplace approximation [18, 19] and W = diag Ψ(fˆ) ⊙ (1 − Ψ(fˆ)) . For a test input x∗ with k∗ := k(X, x∗) and k∗∗ := k(x∗, x∗),
μf∗ = k⊤
∗ K−1 fˆ, σ2
f∗ = k∗∗ − k⊤
∗ K + W −1 −1k∗,
p(y∗ = 1 | X, y, x∗) =
Z
σ(f∗) N (f∗; μf∗ , σ2
f∗ ) df∗ .
2.1.1 Kernel methods
In Gaussian processes (GPs), specifying a covariance (kernel) k determines a prior over functions and thereby encodes the inductive bias of the model. The predictive behavior of a GP depends critically on this choice: different kernels express different notions of similarity (e.g. smoothness, invariance, compositional structure) and thus suit different input types (e.g. strings, graphs, molecules). Kernel methods specify a positive-definite kernel k(x, x′) that represents an inner product in a (po-
ssibly infinite-dimensional) feature space H, i.e.
k(x, x′) = ⟨φ(x), φ(x′)⟩H
for some (typically implicit) feature map φ. A positive definite kernel k : X ×X → R on an input space X implicitly defines an RKHS Hk in which linear algorithms operate via Gram matrices Kij = k(xi, xj) (the “kernel trick”) [20, 21]. In GPs, the kernel plays the role of a covariance function that encodes prior smoothness and inductive bias; posterior predictions follow in closed form given K and a likelihood [19]. Consequently, the modelling power of a GP hinges on choosing a kernel tailored to t-
he structure of the inputs (e.g. strings, graphs, molecules), rather than generic Euclidean distances.
6

2.2 Monomer Global Alignment Kernel
2.2.1 Global alignment
Given two sequences A = (a1, . . . , an) and B = (b1, . . . , bm) of lengths n and m, respectively over an alphabet A, a (global) alignment is a pair of nondecreasing index paths (π1, π2) with unit steps (1, 0), (0, 1), or (1, 1) that map A to B through substitutions and gaps. Dynamic programming (DP) aggregates local substitution scores and gap operations from boundary conditions to the terminal cell, in O(nm) time [4]. While the Dynamic Time Warping (DTW) distance is a de-facto baseline for sequ-
ence comparison, it is not a metric and is known to be not negative definite [4]; consequently, kernels derived directly from DTW (e.g., exp(−γ DTW)) are not guaranteed positive definite and can break RKHS-based learning. Global Alignment (GA) kernels address this by replacing the hard minimum in DTW with a sum over all monotone alignments (a soft-min), yielding a similarity that can be made positive definite under mild conditions on the local kernel and gap weighting [4, 14]. GA kernels retain DT-
W’s O(nm) complexity but, unlike DTW’s single best path, they summarize the entire ensemble of alignments costs, which is often more informative for learning [4, §2.2].
2.2.2 Global alignment kernels
Let κ : X × X → R≥0 be a local similarity (typically a valid kernel on tokens; e.g., Tanimoto on fingerprints or any PSD similarity defined on monomers). The Global Alignment (GA) kernel sums contributions over all alignments and can be computed by the DP recursion
M0,0 = 1, Mi,0 = 0, M0,j = 0, i ≥ 1, j ≥ 1,
Mi,j = κ(ai, bj ) Mi−1,j−1 + Mi−1,j + Mi,j−1 , (1)
and set KGA(A, B) := Mn,m. Intuitively, each monotone path contributes the product of local similarities along its matched positions, while horizontal/vertical steps allow gaps. Positive definiteness is guaranteed if the transformed local kernel κ/(1 + κ) is positive definite on X [4, 14]. Furthermore the diagonal-dominance concern reported in Cuturi et al. [14] can be mitigated by appropriate scaling of the local kernel (e.g., the temperature λ) and by avoiding extreme length disparities [4]. To -
incorporate positional information and reduce cost, [4] introduced Triangular Global Alignment (TGA) kernels where the local similarity is modulated by a Toeplitz position kernel ω(i, j) = ψ(|i−j|) with compact support of width T ∈ N, i.e. ω(i, j) = 0 whenever |i − j| ≥ T (triangular/band-limited weighting). Here T is a natural number user-chosen bandwidth (maximum positional lag) controlling how far from the diagonal matches are allowed. Using such ω within GA yields a p.d. kernel whose computati-
on drops to O(T min{n, m}).
What we use in this work.
We employ the standard GA recursion in defined in Equation (1) with a chemically meaningful local kernel at the monomer level (Section 2.2), and use cosine (unitdiagonal) normalization of the resulting Gram matrix for GP inference.
7

Kˆ (A, B) = KGA(A, B)
pKGA(A, A) KGA(B, B) .
2.3 Monomer Decoupled Global Alignment Kernel
Representation.
Each cyclic peptide M is represented as an ordered sequence of monomer SMILES (s1, . . . , sn) extracted from CycPeptMPDB [1]. For every monomer we compute a count-based Morgan fingerprint (radius 3, chirality) using RDKit’s GetMorganFingerprint, represented as a sparse, hashed feature vector. This encodes local chemical neighborhoods at the monomer level while preserving sequence order, a crucial factor for cyclic-peptide permeability [3].
Local chemical kernel.
We use the Tanimoto (Jaccard) similarity between monomer fingerprints as the local kernel,
κ0 φ(s), φ(t) = ⟨φ(s), φ(t)⟩
∥φ(s)∥1 + ∥φ(t)∥1 − ⟨φ(s), φ(t)⟩ , (2)
The Tanimoto kernel on bit/vector fingerprints is positive definite and widely used in cheminformatics [22, 23]. In particular, for nonnegative fingerprint representations the Tanimoto similarity defines a PSD kernel(22, 23 for proofs and discussion) In our default model we set κ = κ0.
Monomer Decoupled Global Alignment Kernel (MD-GAK)
Let A = (s1, . . . , sn) and B = (t1, . . . , tm), two sequences of monomers representing two peptides, respectively. We specialize global alignment to monomer similarities but decouple the effect of chemical matches from the effect of gaps. Concretely, let κ(φ(si), φ(tj)) ∈ [0, 1] be the local monomer kernel (Section 2.3), and let λ = 1 be a gap decay. We define the dynamic program
M0,0 = 1, Mi,0 = M0,j = 0,
Mi,j = κ φ(si), φ(tj ) Mi−1,j−1 + λ Mi−1,j + λ Mi,j−1, (3)
and set the kernel value to KMD-GAK(A, B) := Mn,m. Finally, by using cosine normalization we scale KMD-GAK in [0, 1].
KˆMD-GAK(A, B) = KMD-GAK(A, B)
pKMD-GAK(A, A) KMD-GAK(B, B) .
Why the decoupling helps.
In the canonical GA update
Mi,j = κ φ(si), φ(tj ) Mi−1,j−1 + Mi−1,j + Mi,j−1 ,
8

the local similarity κ(φ(si), φ(tj)) multiplicatively controls all three transitions into (i, j). A poor local match (κ ≈ 0) drives Mi,j close to zero regardless of how good the predecessor states are, so any alignment path that must pass through (i, j) is heavily downweighted. This can make the kernel overly sensitive to isolated mismatches and encourage reliance on a few high-κ matches. In contrast, the decoupled MD-GAK recursion in (3) separates the roles of matches and gaps. If κ φ(si), φ(tj)-
 = 0, then
Mi,j = Mi−1,j + Mi,j−1,
so the dynamic program can simply bypass the mismatch at (i, j) through gap steps, with their cost determined solely by Mi−1,j and Mi,j−1. More generally, κ φ(si), φ(tj) affects only the diagonal (match) transition, while insertions and deletions are controlled independently (by λ = 1 in our setting). This encodes the inductive bias that chemical similarity belongs to matches, and penalties belong to gaps. A practical consequence is improved robustness: MD-GAK is less sensitive to single mismatche-
s, and long gap runs do not accumulate large products of local similarities. The runtime remains O(nm) per pair. In the next section, we show that the decoupled global alignment still defines a valid positive semidefinite kernel.
Theorem 1 (Positive semidefiniteness of the Decoupled GA kernel) Let X be the set of monomers and let k : X × X → R≥0 be a positive semidefinite (PSD) local kernel (e.g., Tanimoto on Morgan fingerprints). Fix λ = 1. For sequences A = (s1, . . . , sn) and B = (t1, . . . , tm), define the dynamic program
M0,0 = 1, Mi,0 = M0,j = 0, Mi,j = k(si, tj ) Mi−1,j−1 + Mi−1,j + Mi,j−1,
and set K(A, B) := Mn,m. Then K is a PSD kernel on the space of finite monomer sequences.
The proof is provided in Appendix .1.
Position-aware MD-GAK (PMD-GAK).
To encode positional priors and obtain banded computation, we modulate the local similarity by (i) a soft-match transform and (ii) a compactly supported Toeplitz position kernel (the triangular window) as in Triangular GA [4]. We take the Tanimoto kernel κ0 on Morgan fingerprints introduced above as a base monomer kernel, which satisfies κ0 ∈ [0, 1], and define the distance-like score φ = 1 − κ0. For β > 0 we use the soft local kernel
κβ φ(si), φ(tj) = exp − β 1 − κ0 φ(si), φ(tj) .
Let the triangular Toeplitz position kernel of bandwidth T ∈ N be
ωT (i, j) = max
n
0, 1 − |i − j|
T
o
, ωT (i, j) = 0 if |i − j| > T.
9

Our position-aware local kernel is κT (i, j) = ωT (i, j) κβ(φ(si), φ(tj)), and the DP becomes
M0,0 = 1, Mi,0 = M0,j = 0, Mi,j = κT (i, j) Mi−1,j−1 + Mi−1,j + Mi,j−1, (4)
with KPMD-GAK(A, B) = Mn,m and optional cosine normalization KˆPMD-GAK(A, B) = Mn,m. Because the triangular window ωT is Toeplitz and compactly supported, the computation is restricted to the diagonal band |i − j| ≤ T , visiting O T (n+m) cells in practice (Fig. 2). Under the same sufficient conditions used for global-alignment kernels—namely, a suitably transformed positive-definite local kernel and a positive-definite positional kernel—the position-weighted similarity remains positive definite.
Fig. 2: Illustration of the PMD-GAK dynamic program with a compactly supported Toeplitz position kernel ωT (i, j) = ψ(|i − j|) of bandwidth T = 3. Gray cells indicate entries where ωT (i, j) = 0 (hence κT (i, j) = 0), so Mi,j does not need to be updated. For white cells inside the band, Mi,j is computed from its three predecessors according to Mi,j = κT (i, j)Mi−1,j−1 + Mi−1,j + Mi,j−1 (arrows). Because ωT (i, j) depends only on the index difference |i − j| (Toeplitz structure), the nonzero entrie-
s form a diagonal band around the main diagonal.
Theorem 2 (Positive semidefiniteness of the Position-aware Decoupled GA kernel) Let X be the set of monomers and let κ0 : X × X → [0, 1] be a positive semidefinite (PSD) local kernel (e.g., Tanimoto on Morgan fingerprints). Define the distance-like score φ(x, y) = 1 − κ0(x, y)
10

and, for β > 0, the soft local kernel
κβ φ(si), φ(tj ) = exp − β 1 − κ0 φ(si), φ(tj ) .
Let the triangular Toeplitz position kernel of bandwidth T ∈ N be
ωT (i, j) = max
n
0, 1 − |i − j|
T
o
, ωT (i, j) = 0 if |i − j| > T.
Define the position-aware local kernel
κT (i, j) = ωT (i, j) κβ φ(si), φ(tj ) .
For sequences A = (s1, . . . , sn) and B = (t1, . . . , tm), define the dynamic program
M0,0 = 1, Mi,0 = M0,j = 0, Mi,j = κT (i, j) Mi−1,j−1 + Mi−1,j + Mi,j−1,
and set KPMD-GAK(A, B) = Mn,m. Then KT is a PSD kernel on the space of finite monomer sequences.
The proof is provided in Appendix .2.
Relation to graph/OT kernels.
MD-GAK/PMD-GAK align sequences of chemically meaningful monomers, whereas recent OT-based graph kernels used with GPs operate directly on molecular (atombond) graphs. In particular, the Wasserstein Weisfeiler–Lehman (WWL) kernel and its Sliced-Wasserstein variant (SWWL) embed node attributes via a (continuous) WL scheme and then compare the resulting distributions with (sliced) Wasserstein distances, yielding positive-definite graph kernels well-suited to GP regression on large graphs [5, 24]. For-
 cyclic peptides—where local residue chemistry and backbone ordering both matter—monomer-aware alignment provides a complementary inductive bias: local chemistry shapes match scores through κ0, while ordering and allowable warps are handled by the alignment DP (optionally modulated by the positional window ωT ). By contrast, WWL/SWWL aggregate over distributions of WL node embeddings and do not explicitly align monomer sequences or enforce a global cyclic order (unless such order is encoded as gra-
ph attributes or special edge directions) [5, 24].
2.4 Gaussian processes with molecular fingerprint kernels for peptides
In small-molecule chemoinformatics, Gaussian processes (GPs) commonly use the Tanimoto (Jaccard) kernel on binary molecular fingerprints (e.g., ECFP/Morgan), and have been deployed for regression, classification, and Bayesian optimisation [23, 2527]. In protein sequence design, recent BO work has also explored GP surrogates with either string or fingerprint-style kernels defined on sequence encodings [28]. However, to our knowledge, applying a molecular fingerprint kernel GP directly to model cycl-
ic-peptide permeability, and comparing it head-to-head against peptide-specific alignment kernels (GAK/MD-GAK/PMD-GAK) within the same evaluation protocol, has not been reported prior to this work.
11

Fingerprint representation and kernel.
We used the same similarity directly as described in Equation 2 at the whole-peptide level. Tanimoto kernels on bit vectors are positive (semi)definite and standard in GP modelling for molecules [23, 26]. This yields our GP with TAN sim model.
Convex kernel combination.
To probe complementarity between our decoupled global alignment and fingerprint similarity, we also use a convex combination
Kmix = α KMD−GAK + (1 − α) KTAN, α ∈ [0, 1], (5)
with α selected by inner validation. This preserves positive definiteness and lets the GP interpolate between alignment-aware and substructure-aware inductive biases. Fingerprint-kernel GPs are well established for small molecules and Bayesian Optimization (BO) (e.g., GAUCHE’s Tanimoto kernels [25]; FlowMO’s GPU Tanimoto GP [26]; ordinal-chemistry GP using Tanimoto distances [27]; random-feature approximations for Tanimoto [23]).
2.5 Dataset and data preparation
We use the CycPeptMPDB [1], which compiles permeability measurements for ∼7,334 cyclic peptides (sequence lengths 2–15) drawn from dozens of primary sources and multiple assays, including PAMPA, Caco-2, MDCK and RRCK. Permeability values are reported on a logarithmic scale and clipped to [−10, −4] in CycPeptMPDB; peptides with P ≥ −6 are generally regarded as cell-permeable [1, 3]. We evaluate our models in two complementary settings detailed below.
Setting A: applicability-domain–aware splits
Following the data-handling principles and splitting strategies highlighted by Geylan et al. [2], we first extract the SMILES, monomer sequences and PAMPA values for all peptides with available PAMPA in CycPeptMPDB (7,298 entries after initial parsing). To mitigate data leakage from near-identical structures, we group duplicates by canonical SMILES (chirality retained) using Morgan fingerprint (radius 3); for each group we average reported PAMPA values to obtain a single label, yielding 7,221 uniq-
ue peptides and 276 unique monomers overall. Averaging duplicates is a common choice Liu et al. [3]. Nested cross-validation. 5 outer folds (80% train / 20% test per outer fold) and, within each outer training split, a 5-fold inner CV for model selection. Using the P ≥ −6 threshold, the resulting class counts are 4,801 non-permeable and 2,420 permeable peptides. In line with Geylan et al. [2, Experiment 7], we consider two stratification schemes when constructing folds/splits: (i) Label-stratified-
 (baseline): stratify by the binary permeability label (P ≥ −6 positive) to preserve class balance across folds. (ii) Canonical-group–stratified : stratify by canonical groups , ensuring all members of a group reside in the same fold to curb leakage from highly similar peptides. For this setting, only PAMPA measurements are
12

used (to reduce inter-assay variability), to avoid source-driven leakage and to define a clear applicability domain. We report ACC, F1, ROC–AUC, and Expected Calibration Error (ECE) with M =30 equal-width bins to measure miscalibration gap between predictive confidence and accuracy [29–32]:
E Pr(Y = Yˆ | Pˆ = p) − p ,
Setting B: length-focused PAMPA subset and scaffold splits
To mirror the benchmark protocol of Liu et al. [3], we narrow the chemical space to the sequence lengths with sufficient coverage (6, 7 and 10) and exclude non-PAMPA assays. This yields 5,758 peptides plus 68 peptides with duplicate PAMPA measurements; these duplicates are retained as independent samples but always allocated to the training set during splitting to prevent leakage, giving a working subset of 5,826 samples [32]. We evaluate two splitting strategies: (i) Random split: 8:1:1 into trai-
n/validation/test (repeated 10 times with different seeds), resulting in 4,674/576/576 samples per split. (ii) Scaffold split: generate Murcko scaffolds with RDKit (ignoring chirality), sort scaffolds by frequency, assign the most frequent to training and the most diverse to test within each sequence-length bucket, then merge to an overall 8:1:1 split (4,721/554/551) [3, Methods]. Binary labels use the same threshold P ≥ −6 (1 = permeable, 0 = non-permeable). As in Liu et al. [3], this split desig-
n probes generalization both under i.i.d. (random) and distribution-shifted (scaffold ) regimes. We report ROC-AUC Score, aligned with the benchmarks.
2.6 Model implementation
Baseline models
We used 2048-bit Morgan fingerprints with radius 3 and total counts for representing peptides smiles to the models which is a robust choice for peptide representations. We trained, GP with GAK [4], Random Forest [33], XGBoost [34] and fine-tuned ChemBerta [12] as baseline models for the applicability domain aware setting. We tuned models in inner loops validation split and used the best hyper parameters on validation set and reported the model performance on the test results. in setting B, We comp-
ared the results on pre-specified benchmarks in [3] including RF [33], SVM [35], AttentiveFP [16], DMPNN [17], GAT [36], GCN [37], MPNN [15], PAGTN [38], RNN [39], LSTM [40], GRU [41], ChemCeption [42], ImageMol [43], Multi-CycGT [44] and MUCoCP [45].
3 Results
3.1 Setting A: applicability-domain–aware splits
We evaluate two leakage-controlled protocols: (i) label-stratified splits and (ii) canonical-group–stratified splits that remove near-duplicates. Tables 1 and 2 report results for alignment-aware GPs (GAK/MD-GAK/PMD-GAK) versus strong vector baselines (XGBoost, RF) and a transformer language model (ChemBERTa).
13

Table 1: Label-stratified split (values ×100). Alignment-aware GPs improve threshold metrics and calibration over vector baselines while maintaining strong discrimination.
Model ACC F1 ROC-AUC Brier score ECE GP with GAK kernel 81.1 ± 1.4 69.9 ± 2.9 86.1 ± 1.3 15.93 ± 0.52 15.16 ± 1.69 GP with MD-GAK kernel 83.0 ± 0.5 73.7 ± 0.9 87.8 ± 0.7 14.30 ± 0.46 12.31 ± 1.61 GP with PMD-GAK kernel 82.6 ± 0.7 73.2 ± 0.9 87.6 ± 0.5 13.83 ± 0.56 9.94 ± 1.85 XGBoost 78.4 ± 1.2 70.8 ± 1.1 86.3 ± 0.6 14.90 ± 0.51 8.88 ± 0.66 RF 78.3 ± 1.2 70.1 ± 1.2 85.7 ± 0.8 15.07 ± 0.57 9.07 ± 1.60 ChemBERTa 78.6 ± 0.8 69.0 ± 0.5 84.4 ± 0.9 16.03 ± 0.72 11.38 ± 0.92
Table 2: Canonical-group–stratified split (values ×100). PMD-GAK provides the best overall balance of discrimination and calibration under the harder split.
Model ACC F1 ROC-AUC Brier score ECE GP with GAK kernel 79.0 ± 1.4 65.3 ± 4.0 83.0 ± 1.1 20.53 ± 0.45 22.29 ± 1.33 GP with MD-GAK kernel 80.1 ± 1.4 67.8 ± 4.4 84.7 ± 1.0 15.89 ± 0.61 13.35 ± 1.52 GP with PMD-GAK kernel 80.3 ± 1.7 68.2 ± 3.8 84.8 ± 1.4 15.42 ± 0.64 11.94 ± 1.93 XGBoost 76.4 ± 2.9 64.6 ± 8.5 83.9 ± 1.7 15.73 ± 1.02 9.42 ± 1.48 RF 75.2 ± 2.9 62.4 ± 6.4 81.8 ± 2.4 16.59 ± 1.32 10.52 ± 2.82 ChemBERTa 75.3 ± 1.9 62.1 ± 4.1 80.0 ± 0.9 18.43 ± 0.97 13.78 ± 0.82
Tables 4 and 5 extend the comparison to fingerprint kernels: a GP with Tanimoto similarity (TAN sim) and its convex combination with DGAK. All metrics are reported as mean ± s.e.m. over outer folds; all values are scaled by 100 for readability.
Label-stratified split (alignment vs. vector baselines).
Under label stratification (Table 1), the GP with MD-GAK achieves the best threshold metrics—ACC (83.0 ± 0.5) and F1 (73.7 ± 0.9)—while PMD-GAK attains the lowest Brier (13.83 ± 0.56) and the best ECE among GPs (9.94 ± 1.85), indicating stronger calibration. Tree ensembles display competitive calibration (ECE 8.88/9.07) but lower discrimination (ROC–AUC 86.3/85.7) relative to alignment GPs.
Canonical-group–stratified split (alignment vs. vector baselines).
When stratifying by canonical groups (Table 2), the task is harder across the board, consistent with reduced leakage from near-duplicates. PMD-GAK attains the best ACC/F1 (80.3/68.2), the lowest Brier (15.42), and the strongest ROC–AUC among GPs (84.8), while maintaining competitive ECE. Tree ensembles retain the best ECE (XGBoost 9.42; RF 10.52) but trail the best GP in ROC–AUC.
Score distributions.
Figure 3 compares model score histograms on the outer test sets under canonical-group stratification. Kernel GPs track the empirical PAMPA distribution more closely (after rescaling), while RF, XGBoost, and ChemBERTa yield skewed or multi-modal profiles.
14

The alignment-aware inductive bias thus provides both improved discrimination and better-behaved probabilistic outputs under the harder split.
(a) DGAK (b) GAK (c) Position DGAK (d) Tanimoto kernel
(e) RF (f) Xgboost (g) ChemBERTa (h) original PAMPA values
Fig. 3: Predicted probability distributions (outer test, canonical-group split). The xaxis shows the predicted probabilities, and the y-axis shows their estimated density of these probabilities on the test set. Kernel-based GP models produce score histograms that closely track the empirical distribution of PAMPA values in the dataset, whereas RF, XGBoost, and ChemBERTa yield noticeably different score profiles. This alignment is consistent with their stronger calibration (lower Brier/ECE; Tables 1-
–2) and suggests that the monomer-aware kernels capture permeability-relevant sequence/chemical structure more effectively under canonical splitting.
3.2 Setting B: length-focused PAMPA subset (random vs. scaffold)
We further benchmark on a length-focused PAMPA subset containing 6/7/10-mers under two evaluation regimes: a random split and a more stringent scaffold split. Table 3 reports ROC–AUC (mean ± s.e.m.; values ×100). The GP with MD-GAK attains the strongest discrimination on both splits, reaching 88.8 ± 0.2 (random) and 79.8 ± 0.0 (scaffold). Compared to the best reported graph models under the same protocols, MD-GAK outperforms AttentiveFP on the random split (86.2 ± 1.8) and MPNN on the scaffold spl-
it (73.4 ± 8.7). Classical vector baselines (RF/SVM) are substantially weaker on both splits.
Generalization across scaffolds.
Moving from random to scaffold evaluation reduces performance for all methods, as expected when near-duplicates are removed. The MD-GAK GP exhibits a 9.0 -point drop (88.8 → 79.8), which is markedly smaller than the 20.1 -point drop observed for
15

AttentiveFP (86.2 → 66.1), suggesting that the alignment-aware inductive bias confers improved robustness to scaffold shifts. MPNN’s scaffold performance is relatively stable but remains below the GP with MD-GAK.
Table 3: Length-focused PAMPA (6/7/10-mers): ROC–AUC under random vs. scaffold splits (values ×100).
Method Random split:
Classification – binary labels
Scaffold split: Classification – binary labels
Alignment-aware GP and classical ML
GP with MD-GAK 88.8 ± 0.2 79.8 ± 0.0 RF 65.1 ± 4.1 55.3 ± 3.4 SVM 59.6 ± 1.8 53.9 ± 0.1
Graph-based baselines
AttentiveFP (best random) 86.2 ± 1.8 66.1 ± 5.4 DMPNN 84.8 ± 3.2 71.6 ± 7.9 GAT 83.9 ± 4.4 65.9 ± 9.6 GCN 77.2 ± 5.5 66.9 ± 10.4 MPNN (best scaffold) 77.2 ± 5.5 73.4 ± 8.7 PAGTN 78.0 ± 6.2 68.2 ± 3.2
String-based baselines
RNN 55.2 ± 8.0 52.5 ± 3.4 LSTM 56.8 ± 15.0 53.1 ± 10.0 GRU 73.1 ± 14.6 61.7 ± 13.8
Image-based baselines
ChemCeption 46.6 ± 5.1 40.3 ± 4.3 ImageMol 80.4 ± 1.9 66.1 ± 3.7
3.3 Adding fingerprint kernels: discrimination vs. calibration.
We now introduce peptide-level molecular fingerprints with a Tanimoto kernel GP (TAN sim) and a convex mixture with DGAK,(Tables 4 and 5). Under label stratification, TAN sim delivers the highest ROC–AUC (89.0 ± 0.8), while MD-GAK remains best on ACC/F1 and PMD-GAK remains best calibrated (Brier/ECE). Under canonical-group stratification, TAN sim again yields the top ROC–AUC (86.7 ± 0.5). The convex mixture achieves the best ACC/F1 (81.1/69.9), suggesting complementary inductive biases between ali-
gnment and substructure similarity. Overall, fingerprint similarity increases rank discrimination, whereas alignment-aware kernels improve probability calibration;
Finally, we assess peptide-level molecular fingerprints on the length-focused subset via a GP with Tanimoto similarity (TAN sim) and a convex combination with MDGAK. As shown in Table 6, TAN sim achieves the highest ROC–AUC on both splits (random: 0.897 ± 0.002; scaffold: 0.804 ± 0.000), narrowly ahead of the MD-GAK GP. The convex mixture (MD-GAK + Tanimoto) matches the top ROC–AUC.
16

Table 4: Label-stratified split with fingerprint kernels (values ×100). Tanimoto improves rank discrimination; MD/PMD-GAK retain threshold and calibration advantages.
Model ACC F1 ROC-AUC Brier score ECE GP with MD-GAK kernel 83.0 ± 0.5 73.7 ± 0.9 87.8 ± 0.7 14.30 ± 0.46 12.31 ± 1.61 GP with PMD-GAK kernel 82.6 ± 0.7 73.2 ± 0.9 87.6 ± 0.5 13.83 ± 0.56 9.94 ± 1.85 GP with TAN sim kernel 82.8 ± 1.0 73.7 ± 1.4 89.0 ± 0.8 14.40 ± 0.32 14.42 ± 0.40 GP with convex (DGAK + Tanimoto) 82.8 ± 0.7 73.6 ± 1.1 88.7 ± 0.9 14.44 ± 0.33 14.28 ± 0.27
Table 5: Canonical-group–stratified split with fingerprint kernels (values ×100). Tanimoto again maximizes ROC–AUC; the convex mixture recovers the best ACC/F1 under the harder split.
Model ACC F1 ROC-AUC Brier score ECE GP with MD-GAK kernel 80.1 ± 1.4 67.8 ± 4.4 84.7 ± 1.0 15.89 ± 0.61 13.35 ± 1.52 GP with PMD-GAK kernel 80.3 ± 1.7 68.2 ± 3.8 84.8 ± 1.4 15.42 ± 0.64 11.94 ± 1.93 GP with TAN sim kernel 80.9 ± 1.5 69.3 ± 3.1 86.7 ± 0.5 15.57 ± 0.79 13.96 ± 4.42 GP with convex (DGAK + Tanimoto) 81.1 ± 1.4 69.9 ± 2.9 86.1 ± 1.3 15.93 ± 0.52 15.16 ± 1.69
Table 6: Length-focused PAMPA (6/7/10-mers): ROC–AUC under random vs. scaffold splits using fingerprint kernels (raw values, not scaled).
Method Random split:
Classification – binary labels
Scaffold split: Classification – binary labels
AttentiveFP (best random) 86.2 ± 1.8 66.1 ± 5.4 MPNN (best scaffold) 77.2 ± 5.5 73.4 ± 8.7 GP with MD-GAK 88.8 ± 0.2 79.8 ± 0.0 GP with TAN sim 89.7 ± 0.2 80.4 ± 0.0 GP with convex (MD-GAK + Tanimoto) 89.7 ± 0.2 80.4 ± 0.0
4 Discussion
This work aims to reconcile two desiderata for cyclic peptides: a better representation that preserves ordered monomer chemistry and a model that remains data-efficient with calibrated uncertainties. To this end, we introduced a monomer–aware global alignment family for GPs (MD-GAK and the position-aware PMD-GAK) and evaluated them under applicability-domain–aware protocols that curb leakage from near-duplicates. On CycPeptMPDB, alignment-aware GPs consistently improve discrimination over strong v-
ector and language-model baselines, while PMD-GAK yields the best calibration among GPs (lower Brier/ECE). Under the stricter canonicalgroup split, the advantage of alignment is amplified (Table 2), and on a length-focused PAMPA subset our GP exceeds, leading graph baselines (Table 5). These findings are
17

robust across splits and metrics, with uncertainty estimates that are well-behaved in the harder setting (Fig. 2). Although ROC–AUC remains a useful ranking metric, permeability datasets are label-imbalanced and downstream decisions hinge on operating at a single threshold. In such settings, precision–recall criteria—and in particular the F1 score (the harmonic mean of precision and recall)—are more informative than ROC–AUC because ROC can present an overly optimistic picture under class skew [46-
, 47]. For this reason, we focus our head-to-head comparison on F1 in Tables 1,2, under label stratification, MDGAK achieves the best F1 (73.7 ± 0.9), and under canonical stratification, PMD-GAK leads (68.2 ± 3.8), while retaining competitive AUCs and improved calibration (lowest Brier/ECE among GPs). This strengthens the practical relevance of alignment kernels for actionable screening, where precision/recall trade-offs matter at deployment time.
Harder tasks magnify the benefit of alignment.
When we move from label stratification to canonical-group stratification—explicitly removing near-duplicate peptides—performance drops for all methods, but the relative improvement of MD-GAK/PMD-GAK over baselines is stronger. This is consistent with the hypothesis that alignment captures permeability-relevant order and context beyond bag-of-substructures; once leakage is reduced, these inductive biases become more valuable (Table 1).
Calibration matters.
Well-calibrated probabilities enable principled triage in low-data discovery loops. We observe systematically lower Brier/ECE for PMD-GAK relative to other GPs, and tree ensembles remain well calibrated but less discriminative. This mirrors broader evidence that modern ML methods can be poorly calibrated without post-hoc correction [30]. In screening settings with limited assays, these calibrated GP posteriors are advantageous for ranking and for uncertainty-aware decision making.
Tanimoto at the monomer level connects peptides to the small-molecules.
A key design choice was to score monomer matches with a Tanimoto kernel on Morgan fingerprints inside the alignment DP. This shows that Tanimoto is effective at the monomer level for peptides, achieving strong performance. Importantly, this choice bridges peptide modeling with the mature small-molecule toolkit: decades of kernels, scalable approximations, and software are immediately compatible. For instance, scalable Tanimoto approximations via random features [23] and comprehensive GP tooling fo-
r chemistry (GAUCHE) [25] can be dropped in without architectural changes. More broadly, our decoupled setup invites learned monomer encoders from chemical language models (e.g., SMILES Transformers, ChemBERTa, MolT5) to provide richer local descriptors within the same GA framework [12, 48, 49]. In other words, by proving that ”Tanimoto@monomer” is a strong building block, we open a path to upgrade the local kernel κ with powerful, pre-trained small-molecule representations as they continue to imp-
rove.
18

Complementarity of alignment and substructure similarity.
Across settings, the Tanimoto fingerprint GP (TAN sim) consistently maximizes rank discrimination (ROC–AUC), whereas alignment variants (MD-/PMD-GAK) dominate threshold metrics (ACC/F1) and calibration (Brier/ECE). A simple convex kernel (DGAK + Tanimoto) recovers much of both: it matches the strongest AUCs while achieving the best ACC/F1 under the canonical split (Tables 4–5). These results support a clear division of labor: local substructures captured by fingerprints and ordered monomer context-
 captured by alignment can encode distinct, complementary signals. In practice, when both high precision/recall and reliable probabilities are required, the convex combination provides a strong, low-complexity default.
Limitations and future work.
First, we deliberately avoided heavy hyperparameter search; the convex weight λ and the positional bandwidth in PMD-GAK were set conservatively. A more systematic selection could further improve threshold metrics per split. Relatedly, moving from single- to multi-task settings (e.g., PAMPA and Caco-2) may benefit from shared alignment but assay-specific calibration layers. Second, our local chemistry kernel κ used a single family (Tanimoto on Morgan). While effective, bit-vector fingerprints may u-
nderrepresent stereochemistry and conformational effects [11, 50]. Future work can (i) upgrade κ with richer small-molecule encoders from chemical LLMs (SMILES Transformer, ChemBERTa, MolT5), retaining the same global-alignment scaffold, or (ii) adopt scalable approximations of Tanimoto via random features when data grow [12, 23, 48, 49]. Third, scalability: exact GP inference is O(N 3) in the number of training peptides. Although our datasets are moderate, larger campaigns will require sparse/ind-
ucingpoint GPs or Nystr ̈om-style approximations [51]. These are orthogonal to our kernel design and can be combined with MD-/PMD-GAK and fingerprint kernels without changing the modelling interface. Fourth, structure granularity. Our approach is sequence-first: atom-level arrangements within each monomer and macrocycle are only accessed through the local kernel κ. Graph GP kernels that capture distributional node/edge structure—for instance, (Wasserstein) Weisfeiler–Lehman variants or topological-
 kernels based on sliced Wasserstein distances—could complement our alignment bias and enable hybrid sequence–graph GPs for macrocycles [5, 24]. Exploring such hybrids, especially for noncanonical residues and bridged rings, is a promising direction. Finally, while our results already outperform strong graph baselines on the lengthfocused subset, more systematic ablations on stereochemistry handling and macrocycle ring closures will clarify where alignment contributes most.
5 Conclusion
We introduced monomer-aware global alignment kernels for Gaussian processes (MDGAK and position-aware PMD-GAK) and showed that they deliver strong discrimination, better calibration, and higher F1—especially under the harder canonical-group split where alignment matters more. Complementing alignment with peptide-level
19

molecular fingerprints, a Tanimoto GP (TAN sim) maximized AUC, while a simple convex mixture with MD-GAK recovered both top AUC and improved ACC/F1, confirming the complementarity of local substructures and ordered monomer context. On a length-focused PAMPA subset, our GPs surpassed strong graph baselines and generalized better across scaffolds. Practically, demonstrating that Tanimoto works at the monomer level creates a clean interface to the small-molecule ecosystem (classical kernels, scalabl-
e random-feature approximations, chemical LLMs) without changing the alignment scaffold, opening an immediate path to richer local chemistry encoders as data scale grows.
Declarations.
• Funding: This work was supported by a grant from the Swedish Research Council (VR, grant number 2019-00198) as part of the AIR Lund (Artificially Intelligent use of Registers at Lund University) research environment. Additional support was provided by CAISR Health, funded by the Knowledge Foundation (KK-stiftelsen) in Sweden (grant number 20200208 01 H). • Data availability: The data used to train the cell-permeability predictive models for cyclic peptides are publicly available in CycPeptMPDB: -
http://cycpeptmpdb.com/ download/. • Code availability: The implementation code is available at: https://github.com/ ali-amirahmadii/PEPTAK. • Use of LLMs: LLMs were exclusively used for text cleanup purposes. • Author contributions: AA designed, conceptualized and developed the software and wrote the manuscript. AT designed, conceptualized, and developed the software. All authors were involved in discussions on the project and revised the manuscript. All authors read and approved the final manusc-
ript. • Conflict of interest: The authors declare no competing interests. • Ethics, consent sections: Not applicable
20

Appendix A Proof
.1 Proof of positive semidefiniteness of the Decoupled GA kernel
Let s = (s1, . . . , sn) and t = (t1, . . . , tm) be two sequences of lengths n and m, respectively, where si, tj ∈ X . Let k : X × X → R be a valid kernel that compares elements in the sequences. We define as M ∈ R(n+1)×(m+1) the follow matrix
M (i, j) = k(si, tj)M (i − 1, j − 1) + M (i − 1, j) + M (i, j − 1)
with initial conditions M (0, 0) = 1, M (i, 0) = 0, and M (0, j) = 0. We want to prove that M (m, n) is valid kernel that compares s and t, i.e. K(s, t) = M (m, n).
A step is one of three moves on the integer lattice: R = (1, 0), U = (0, 1), and D = (1, 1), and a monotone path π from (0, 0) to (i, j) is a finite sequence of steps that transforms (0, 0) to (i, j). For each π we collect the set of indices corresponding to diagonal D steps.
D(π) = { (i1, j1), . . . , (ir, jr), i1 < · · · < ir, j1 < · · · < jr }.
Example. If we consider π as follows
π : (0, 0) −R→ (1, 0) −D→ (2, 1) −U→ (2, 2) −D→ (3, 3),
D(π) = {(2, 1), (3, 3)}.
We define the weight w of a path
w(π) =
Y
(i,j)∈D(π)
k(si, tj).
Note if π has no diagonals, the product is empty and equals to 1. Finally we define the set of all the possible monotonic path from (0, 0) to (i, j) as P(i, j).
Lemma 1
For each i, j ≥ 0, we want to prove the following
M (i, j) =
X
(i,j )∈P (i,j )
w(π)
Base case.
For i = j = 0, P(i, j) = ∅., so w(∅) = 1 by definition and follows that M (0, 0) = 1, which confirms the inital condition on M (0, 0).
21

Indution step.
We assume the equality holds for i′, j′ such that i′ + j′ < i + j. Let us know partition P(i, j) as follows
• Paths whose last step is R (right) are bijection with P(i − 1, j). It is sufficient to add a R step to P(i − 1, j) to get P(i, j). Note that the bijections holds because w(π) depends only on coordinates on D(π). The right move R cannot be in D(π). • Paths whose last step is U (up) are bijection with P(i, j − 1). • Paths whose last step is D (diagonal) are π = π′ ◦ D.
Putting all together we have
X
π∈P (i,j )
w(π) = (1)
X
π′ ∈P (i−1,j )
w(π′) +
X
π′ ∈P (i,j −1)
w(π′) + w({(i, j)})
X
π′ ∈P (i−1,j −1)
w(π′) = (2)
X
π′ ∈P (i−1,j )
w(π′) +
X
π′ ∈P (i,j −1)
w(π′) + k(si, tj)
X
π′ ∈P (i−1,j −1)
w(π′). (3)
By induction hypothesis since i − 1 + j < i + j, i + j − 1 < i + j, and i − 1 + j − 1 < i + j, we have that
X
π∈P (i,j )
w(π) = M (i − 1, j) + M (i, j − 1) + k(si, tj)M (i − 1, j − 1).
Note that the paths that start with a right or up move lead to prefixes visiting (i, 0) or (0, j) with positive index; those prefixes have been given M (i, 0) = 0 and M (0, j) = 0 The induction sums include these cases but the recurrence’s base values ensure they contribute 0, which is consistent with the combinatorial splitting above.
Observation 1
Since k is valid kernel on sequence elements, it must exist a feature map φ that maps X into a feature vector in Rd, i.e.
k(si, tj) = ⟨φ(si), φ(tj)⟩
Let us take now a diagonal path π ∈ D(π), where π = {(i1, j1), . . . , (ir, jr)}., we define the feature map on Φπ for s and t as
Φπ(s) = φ(si1 ) ⊗ φ(si2 ) ⊗ · · · ⊗ φ(sir ) (4)
Φπ(t) = φ(ti1 ) ⊗ φ(si2 ) ⊗ · · · ⊗ φ(sjr ). (5)
22

The scalar product between Φπ(s) and Φπ(t) is (by using the properties on Kronecker product ⊗)
⟨Φπ(s), Φπ(t)⟩ =
r
Y
k=1
k(sik , tjk ) = w(π)
Final proof
Let us now construct the feature vector Ψ considering all the paths in P(m, n) as
Ψ(s) :=
M
π∈P (m,n)
Φπ (s).
Similarly, we can construct Ψ(t) and their scalar product is
⟨Ψ(s), Ψ(t)⟩ = ⟨
M
π∈P (m,n)
Φπ (s),
M
π∈P (m,n)
Φπ(t)⟩ =
X
π∈P (m,n)
⟨Φπ(s), Φπ(t)⟩ =
X
π∈P (m,n)
w(π) = M (m, n),
which concludes the proof. Since we express M (m, n) as the scalar product of two feature vectors, this is always a valid kernel.
.2 Proof of positive semidefiniteness of the Position-aware Decoupled GA kernel
We reuse the notation of Theorem 1. Recall that K(A, B) in Theorem 1 is PSD for any PSD local kernel k : X × X → R≥0. To prove Theorem 2, it therefore is enough to show that the position-aware local kernel
κT (i, j) = ωT (i, j) κβ φ(si), φ(tj)
is PSD on the extended alphabet of position–monomer pairs. We proceed in three steps.
Step 1: the soft local kernel κβ is PSD
Let κ0 : X × X → [0, 1] be a PSD kernel (e.g. Tanimoto), and define φ(x, y) = 1 − κ0(x, y). For β > 0 define
κβ(x, y) = exp − β φ(x, y) = exp − β [1 − κ0(x, y)] .
Fix a finite set of monomers {x1, . . . , xN } ⊂ X and let
K0 = κ0(xp, xq) N
p,q=1.
23

By assumption K0 ⪰ 0 and all entries of K0 lie in [0, 1]. The Gram matrix of κβ on this set is
[Kβ]pq = κβ(xp, xq) = exp − β[1 − κ0(xp, xq)] = e−β exp β κ0(xp, xq) .
Using the power-series expansion of the exponential,
exp(βz) =
∞
X
m=0
βm
m! zm, z ∈ [0, 1],
we obtain the elementwise expansion
Kβ = e−β
∞
X
m=0
βm
m! K m
0,
where K0m denotes the m-th Hadamard (entrywise) power: (K0m)pq = (K0)pmq. Because K0 ⪰ 0 and has nonnegative entries, the Schur product theorem implies that each Hadamard power K0m is PSD. All coefficients e−ββm/m! are nonnegative, hence Kβ is a nonnegative linear combination of PSD matrices and is therefore PSD. As this holds for every finite subset, κβ is a positive semidefinite kernel on X .
Step 2: the triangular position kernel ωT is PSD
Fix T ∈ N. We follow Cuturi [4] and use the triangular Toeplitz position kernel on indices i, j ∈ Z,
ωT (i, j) = max
n
0, 1 − |i − j|
T
o
, ωT (i, j) = 0 if |i − j| > T.
This is the restriction to Z of the classical triangular kernel on R, which is known to be positive definite (see Gneiting [52]). Cuturi [4, Sec. 4.3] uses the same kernel in the construction of Triangular Global Alignment (TGA) kernels. It follows that ωT is a positive semidefinite kernel on positions i, j ∈ N.
Step 3: the position-aware local kernel κT is PSD
Consider the product space of positions and monomers
Xe = Z × X ,
and define
kloc (i, s), (j, t) := ωT (i, j) κβ(s, t).
Let {(ip, sp)}pN=1 ⊂ Xe be arbitrary, and denote Apq = ωT (ip, iq) and Bpq = κβ(sp, sq). By Steps 1–2, A and B are PSD Gram matrices. The Gram matrix of kloc on these points is
Gpq = kloc (ip, sp), (iq, sq) = ApqBpq = (A ◦ B)pq,
24

the Hadamard product of A and B. By the Schur product theorem, the Hadamard product of two PSD matrices is PSD, hence G ⪰ 0. Therefore kloc is a PSD kernel on Xe.
Step 4: applying the MD-GAK result
Given a monomer sequence A = (s1, . . . , sn), we associate to it the sequence of position–monomer pairs
Ae = (1, s1), . . . , (n, sn) ∈ Xe∗,
and similarly for B = (t1, . . . , tm). The dynamic program in (4) coincides with the MD-GAK recursion of Theorem 1 applied to the sequences Ae, Be over the alphabet Xe, with local kernel kloc. Since kloc is PSD, Theorem 1 implies that the resulting sequence kernel
KT (A, B) = Mn,m
is positive semidefinite on the space of finite monomer sequences. This completes the proof of Theorem 2.
25

References
[1] Li, J., Yanagisawa, K., Sugita, M., Fujie, T., Ohue, M., Akiyama, Y.: Cycpeptmpdb: a comprehensive database of membrane permeability of cyclic peptides. Journal of Chemical Information and Modeling 63(7), 2240–2250 (2023)
[2] Geylan, G., De Maria, L., Engkvist, O., David, F., Norinder, U.: A methodology to correctly assess the applicability domain of cell membrane permeability predictors for cyclic peptides. Digital Discovery 3(9), 1761–1775 (2024)
[3] Liu, W., Li, J., Verma, C.S., Lee, H.K.: Systematic benchmarking of 13 ai methods for predicting cyclic peptide membrane permeability. Journal of Cheminformatics 17(1), 1–12 (2025)
[4] Cuturi, M.: Fast global alignment kernels. In: Proceedings of the 28th International Conference on Machine Learning (ICML-11), pp. 929–936 (2011)
[5] Perez, R.C., Da Veiga, S., Garnier, J., Staber, B.: Gaussian process regression with sliced wasserstein weisfeiler-lehman graph kernels. In: International Conference on Artificial Intelligence and Statistics, pp. 1297–1305 (2024). PMLR
[6] Landrum, G.: Rdkit: open-source cheminformatics http://www. rdkit. org. Google Scholar There is no corresponding record for this reference 3(8) (2016)
[7] Rogers, D., Hahn, M.: Extended-connectivity fingerprints. Journal of chemical information and modeling 50(5), 742–754 (2010)
[8] Wang, S., Konig, G., Roth, H.-J., Fouche ́, M., Rodde, S., Riniker, S.: Effect of flexibility, lipophilicity, and the location of polar residues on the passive membrane permeability of a series of cyclic decapeptides. Journal of Medicinal Chemistry 64(17), 12761–12773 (2021)
[9] Hosono, Y., Uchida, S., Shinkai, M., Townsend, C.E., Kelly, C.N., Naylor, M.R., Lee, H.-W., Kanamitsu, K., Ishii, M., Ueki, R., et al.: Amide-to-ester substitution as a stable alternative to n-methylation for increasing membrane permeability in cyclic peptides. Nature Communications 14(1), 1416 (2023)
[10] Meyer, P., Duigou, T., Gricourt, G., Faulon, J.-L.: Reverse engineering molecules from fingerprints through deterministic enumeration and generative models. Journal of Cheminformatics 17(1), 157 (2025)
[11] Tahıl, G., Delorme, F., Le Berre, D., Monflier,  ́E., Sayede, A., Tilloy, S.: Stereoisomers are not machine learning’s best friends. Journal of Chemical Information and Modeling 64(14), 5451–5469 (2024)
[12] Chithrananda, S., Grand, G., Ramsundar, B.: Chemberta: large-scale selfsupervised pretraining for molecular property prediction. arXiv preprint
26

arXiv:2010.09885 (2020)
[13] Senin, P.: Dynamic time warping algorithm review. Information and Computer Science Department University of Hawaii at Manoa Honolulu, USA 855(1-23), 40 (2008)
[14] Cuturi, M., Vert, J.-P., Birkenes, O., Matsui, T.: A kernel for time series based on global alignments. In: 2007 IEEE International Conference on Acoustics, Speech and Signal Processing-ICASSP’07, vol. 2, p. 413 (2007). IEEE
[15] Gilmer, J., Schoenholz, S.S., Riley, P.F., Vinyals, O., Dahl, G.E.: Neural message passing for quantum chemistry. In: International Conference on Machine Learning, pp. 1263–1272 (2017). Pmlr
[16] Xiong, Z., Wang, D., Liu, X., Zhong, F., Wan, X., Li, X., Li, Z., Luo, X., Chen, K., Jiang, H., et al.: Pushing the boundaries of molecular representation for drug discovery with the graph attention mechanism. Journal of medicinal chemistry 63(16), 8749–8760 (2019)
[17] Yang, K., Swanson, K., Jin, W., Coley, C., Eiden, P., Gao, H., Guzman-Perez, A., Hopper, T., Kelley, B., Mathea, M., et al.: Analyzing learned molecular representations for property prediction. Journal of chemical information and modeling 59(8), 3370–3388 (2019)
[18] Rasmussen, C.E.: Gaussian processes in machine learning. In: Summer School on Machine Learning, pp. 63–71. Springer, Berlin, Heidelberg (2003)
[19] Williams, C.K., Rasmussen, C.E.: Gaussian Processes for Machine Learning vol. 2. MIT press Cambridge, MA, USA (2006)
[20] Sch ̈olkopf, B., Smola, A.J.: Learning with Kernels: Support Vector Machines, Regularization, Optimization, and Beyond. MIT press, USA (2002)
[21] Shawe-Taylor, J., Cristianini, N.: Kernel Methods for Pattern Analysis. Cambridge university press, Cambridge, UK (2004)
[22] Ralaivola, L., Swamidass, S.J., Saigo, H., Baldi, P.: Graph kernels for chemical informatics. Neural networks 18(8), 1093–1110 (2005)
[23] Tripp, A., Bacallado, S., Singh, S., Hern ́andez-Lobato, J.M.: Tanimoto random features for scalable molecular machine learning. Advances in Neural Information Processing Systems 36, 33656–33686 (2023)
[24] Togninalli, M., Ghisu, E., Llinares-Lo ́pez, F., Rieck, B., Borgwardt, K.: Wasserstein weisfeiler-lehman graph kernels. Advances in neural information processing systems 32 (2019)
[25] Griffiths, R.-R., Klarner, L., Moss, H., Ravuri, A., Truong, S., Du, Y., Stanton,
27

S., Tom, G., Rankovic, B., Jamasb, A., et al.: Gauche: a library for gaussian processes in chemistry. Advances in Neural Information Processing Systems 36, 76923–76946 (2023)
[26] Moss, H.B., Griffiths, R.-R.: Gaussian process molecule property prediction with flowmo. arXiv preprint arXiv:2010.01118 (2020)
[27] Gosnell, A., Evangelou, E.: A gaussian process model for ordinal data with applications to chemoinformatics. arXiv preprint arXiv:2405.09989 (2024)
[28] Benjamins, C., Surana, S., Bent, O., Lindauer, M., Duckworth, P.: Bayesian optimisation for protein sequence design: Gaussian processes with zero-shot protein language model prior mean. In: Machine Learning in Structural Biology Workshop at NeurIPS, vol. 2024, p. 4 (2024)
[29] Naeini, M.P., Cooper, G., Hauskrecht, M.: Obtaining well calibrated probabilities using bayesian binning. In: Proceedings of the AAAI Conference on Artificial Intelligence, vol. 29 (2015)
[30] Guo, C., Pleiss, G., Sun, Y., Weinberger, K.Q.: On calibration of modern neural networks. In: International Conference on Machine Learning, pp. 1321–1330 (2017). PMLR
[31] Chen, W., Li, Y.: Calibrating transformers via sparse gaussian processes. arXiv preprint arXiv:2303.02444 (2023)
[32] Liu, J., Lin, Z., Padhy, S., Tran, D., Bedrax Weiss, T., Lakshminarayanan, B.: Simple and principled uncertainty estimation with deterministic deep learning via distance awareness. Advances in neural information processing systems 33, 7498–7512 (2020)
[33] Breiman, L.: Random forests. Machine learning 45(1), 5–32 (2001)
[34] Chen, T., Guestrin, C.: Xgboost: A scalable tree boosting system. In: Proceedings of the 22nd Acm Sigkdd International Conference on Knowledge Discovery and Data Mining, pp. 785–794 (2016)
[35] Cortes, C., Vapnik, V.: Support-vector networks. Machine learning 20(3), 273–297 (1995)
[36] Veliˇckovi ́c, P., Cucurull, G., Casanova, A., Romero, A., Lio, P., Bengio, Y.: Graph attention networks. arXiv preprint arXiv:1710.10903 (2017)
[37] Kipf, T.: Semi-supervised classification with graph convolutional networks. arXiv preprint arXiv:1609.02907 (2016)
[38] Chen, B., Barzilay, R., Jaakkola, T.: Path-augmented graph transformer network. arXiv preprint arXiv:1905.12712 (2019)
28

[39] Elman, J.L.: Finding structure in time. Cognitive science 14(2), 179–211 (1990)
[40] Hochreiter, S., Schmidhuber, J.: Long short-term memory. Neural computation 9(8), 1735–1780 (1997)
[41] Ravanelli, M., Brakel, P., Omologo, M., Bengio, Y.: Light gated recurrent units for speech recognition. IEEE Transactions on Emerging Topics in Computational Intelligence 2(2), 92–102 (2018)
[42] Goh, G.B., Siegel, C., Vishnu, A., Hodas, N.O., Baker, N.: Chemception: a deep neural network with minimal chemistry knowledge matches the performance of expert-developed qsar/qspr models. arXiv preprint arXiv:1706.06689 (2017)
[43] Zeng, X., Xiang, H., Yu, L., Wang, J., Li, K., Nussinov, R., Cheng, F.: Accurate prediction of molecular properties and drug targets using a self-supervised image representation learning framework. Nature Machine Intelligence 4(11), 1004–1016 (2022)
[44] Cao, L., Xu, Z., Shang, T., Zhang, C., Wu, X., Wu, Y., Zhai, S., Zhan, Z., Duan, H.: Multi cycgt: a deep learning-based multimodal model for predicting the membrane permeability of cyclic peptides. Journal of medicinal chemistry 67(3), 1888–1899 (2024)
[45] Yu, Y., Gu, M., Guo, H., Deng, Y., Chen, D., Wang, J., Wang, C., Liu, X., Yan, W., Huang, J.: Mucocp: a priori chemical knowledge-based multimodal contrastive learning pre-trained neural network for the prediction of cyclic peptide membrane penetration ability. Bioinformatics 40(8), 473 (2024)
[46] Saito, T., Rehmsmeier, M.: The precision-recall plot is more informative than the roc plot when evaluating binary classifiers on imbalanced datasets. PloS one 10(3), 0118432 (2015)
[47] Davis, J., Goadrich, M.: The relationship between precision-recall and roc curves. In: Proceedings of the 23rd International Conference on Machine Learning, pp. 233–240 (2006)
[48] Honda, S., Shi, S., Ueda, H.R.: Smiles transformer: Pre-trained molecular fingerprint for low data drug discovery. arXiv preprint arXiv:1911.04738 (2019)
[49] Edwards, C., Lai, T., Ros, K., Honke, G., Cho, K., Ji, H.: Translation between molecules and natural language. arXiv preprint arXiv:2204.11817 (2022)
[50] Ucak, U.V., Ashyrmamatov, I., Lee, J.: Correction: Reconstruction of lossless molecular representations from fingerprints. Journal of Cheminformatics 15(1), 68 (2023)
[51] Hensman, J., Fusi, N., Lawrence, N.D.: Gaussian processes for big data. arXiv
29

preprint arXiv:1309.6835 (2013)
[52] Gneiting, T.: Compactly supported correlation functions. Journal of Multivariate Analysis 83(2), 493–508 (2002)
30

---

## Processing Information

- **Processing Library:** Zotero PDFWorker
- **Processing Date:** 2026-02-10T18:17:29.293Z
- **Text Length:** 65449 characters
- **Success:** Text extraction completed
- **PDF Library Used:** Zotero PDFWorker
- **Pages Processed:** 30 of 30
