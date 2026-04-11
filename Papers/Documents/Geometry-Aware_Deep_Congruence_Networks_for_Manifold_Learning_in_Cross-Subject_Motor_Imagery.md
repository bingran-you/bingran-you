# PDF Document: Manivannan and Lakshminarayan - 2025 - Geometry-Aware Deep Congruence Networks for Manifold Learning in Cross-Subject Motor Imagery.pdf

**File Path:** Manivannan and Lakshminarayan - 2025 - Geometry-Aware Deep Congruence Networks for Manifold Learning in Cross-Subject Motor Imagery.pdf

**Processed Date:** 2026-02-10T18:15:58.838Z

**File Size:** 1014.42 KB

**Total Pages:** 10

**Extracted Pages:** 10

**PDF Library:** Zotero PDFWorker

**Attachment Item ID:** 3428

**Title:** Geometry-Aware Deep Congruence Networks for Manifold Learning in Cross-Subject Motor Imagery

**Collection:** Large Files > Random Papers

---

## Extracted Text Content

Geometry-Aware Deep Congruence Networks
for Manifold Learning in Cross-Subject Motor Imagery
Sanjeev Manivannan 1 Chandrashekar Lakshminarayan 1
Abstract
Cross-subject motor-imagery decoding remains a major challenge in EEG-based brain–computer interfaces due to strong subject variability and the curved geometry of covariance matrices on the SPD manifold. We address the zero-shot cross subject setting where no target-subject labels or adaptation are allowed by introducing novel geometry-aware preprocessing modules and deep congruence networks that operate directly on the SPD covariance matrices. Our novel preprocessing modules, DCR and RiFU, extend-
 Riemannian Alignment by improving action separation while reducing subject-specific distortions. We further propose two novel manifold classifiers, SPD-DCNet and RiFUNet, which use hierarchical congruence transforms to learn discriminative, subject-invariant covariance representations. On the BCI-IV 2a benchmark, our framework improves cross subject accuracy by 3–4 % over the strongest classical baselines, demonstrating the value of geometry-aware transformations.
1. Introduction
Motor-imagery (MI) Electro-Encephalogram (EEG) decoding is central to brain–computer interfaces (BCIs), enabling communication and control for users with limited motor function. MI-BCIs support neurorehabilitation (Ang et al., 2015), assistive robotics (Millan et al., 2010), and handsfree interaction (Blankertz et al., 2006). However, EEG signals often exhibit low signal-to-noise ratio (SNR), strong nonstationarity, and sensitivity to cognitive and physiological factors (Lotte et al., 2018), makin-
g the extraction of stable, discriminative representations (Jayaram et al., 2016) challenging. Recent work shows that covariance-based representations characterize EEG structure and provide a robust basis for motor-imagery decoding(Barachant et al., 2013).
1Indian Institute of Technology Madras, Chennai, India. Correspondence to: Sanjeev Manivannan <sanjeev.manivannan@gmail.com>.
Preprint. November 25, 2025.
Cross-subject decoding in EEG tasks such as motor imagery and brain-seizure prediction (Truong et al., 2018) requires models trained on some users to generalize to unseen ones. This is difficult because subjects exhibit distinct covariance structure and spatial orientations, creating large dispersion on the SPD manifold and causing models to fail on new users. In the zero-shot Leave-One-Subject-Out (LOSO) setting, where the target subject is held out entirely, deep models often collapse due to rel-
iance on subjectspecific fine-tuning (Jayaram et al., 2016). Riemannian Alignment (RA) (Barachant et al., 2012c) reduces mean shifts by whitening covariances to a reference, but orientation and dispersion mismatches remain—highlighting the need for learnable, geometry-aware alignment.
Classical Riemannian methods such as Common Spatial Patterns with Linear Discriminant Analysis (CSPLDA) (Blankertz et al., 2008), Minimum-Distance-to-Mean (MDM) (Barachant et al., 2012a), Tangent Space Logistic Regression (TSLR), and Tangent Space Analysis with LDA (TSA-LDA) (Barachant et al., 2012b) rely on fixed transformations and cannot enforce subject invariance. Deep models such as EEGNet (Lawhern et al., 2018) and convolutional architectures (Schirrmeister et al., 2017) operate in Euclidean-
 space and require target-subject training, violating zero-shot constraints. Manifold approaches like SPDNet (Huang & Van Gool, 2017a) and RA+TSLR (Yger et al., 2017a) preserve SPD geometry but still depend on static alignment and fail to correct cross-subject orientation and dispersion mismatches.
We address this gap with a unified framework that couples enhanced Riemannian preprocessing with deep manifold learning. We introduce two geometry-aware pre-aligners, DCR and RiFU, which extend RA by improving action structure and suppressing subject-specific distortions. We also propose two congruence-based classifiers, SPD-DCNet and RiFUNet, that learn hierarchical SPD transformations and yield subject-invariant representations. By operating directly on SPD covariances and correcting distortions-
 beyond static alignment, our approach moves toward subjectindependent, and calibration-free EEG decoding.
1
arXiv:2511.18940v1 [cs.LG] 24 Nov 2025

Geometry-Aware Deep Congruence Networks for Manifold Learning
2. Dataset and Notation
We use the BCI-IV 2a motor-imagery dataset (Blankertz et al., 2007), which contains EEG from nine subjects recorded with 22 EEG and 3 EOG (Electro-Oculogram) channels. Each subject performs two sessions of 288 trials across four actions: left hand, right hand, both feet, and tongue. Trials last 7–8 s (2 s cue and 4 s motor-imagery period) and are sampled at 250 Hz, yielding approximately 2000–2400 s of data per session.
Let Xi,a,e ∈ RC×Te denote the EEG epoch for subject i, action a, and trial e, where C = 22 channels and Te is the epoch duration (typically 3–4 s after cue onset). Each trial has an associated action label yi,e ∈ {0, 1, 2, 3} corresponding to the four motor-imagery classes. Covariance matrices are computed as
Ci,a,e = 1
Te − 1 Xi,a,eX⊤
i,a,e,
yielding an SPD matrix Ci,a,e ∈ S+C+ that form the core for all preprocessing and classification methods in this work.
3. Preliminaries
3.1. SPD Manifold and Geometry
Covariance matrices Ci,a,e ∈ S+C+ lie on the Riemannian manifold of symmetric positive-definite (SPD) matrices. The affine-invariant Riemannian metric (AIRM) defines the geodesic distance
dAIRM(C1, C2) = log(C−1/2
1 C2C−1/2
1 ) F.
The logarithm and exponential maps at C are
logC (C2) = C1/2 log(C−1/2C2C−1/2)C1/2,
expC (V ) = C1/2 exp(C−1/2V C−1/2)C1/2,
which enable processing of SPD matrices in tangent space.
3.2. Congruence Transforms on SPD Matrices
A fundamental operation in our models is the congruence transform
C′
i,a,e = W Ci,a,eW ⊤,
for a full-rank matrix W ∈ Rd×C . This transformation has two key properties.
Lemma 3.1 (SPD Preservation). For any C ∈ S+C+ and
full-rank W , the matrix C′ = W CW ⊤ remains SPD.
x⊤C′x = x⊤W CW ⊤x = (W ⊤x)⊤C(W ⊤x) > 0 ∀ x ̸= 0.
Lemma 3.2 (Affine Invariance). Congruence transforms preserve the affine-invariant Riemannian metric:
dAIRM(C1, C2) = dAIRM(W C1W ⊤, W C2W ⊤).
These properties show that congruence transforms are isometries on the SPD manifold: they preserve positivedefiniteness and AIRM geometry while applying controlled rotations, scalings, or projections. Their geometric stability makes them ideal building blocks for our pre-aligners and deep congruence networks.
3.3. Classical Preprocessing Methods
3.3.1. RIEMANNIAN ALIGNMENT (RA)
Given a reference covariance Cref , whitening seeks a matrix P satisfying P Cref P ⊤ = I. Under a congruence transform P CP ⊤, the unique SPD solution is P = C−1/2
ref , mapping Cref to identity. This yields Riemannian Alignment (RA) (Yger et al., 2017a), which aligns all covariances as
C′
i,a,e = C−1/2
ref Ci,a,eC−1/2
ref .
RA removes subject-specific mean shifts and establishes a shared geometric reference, but it does not correct orientation differences or inter-subject dispersion, motivating learned alignment methods.
3.3.2. COMMON SPATIAL PATTERNS (CSP)
Common Spatial Patterns (CSP) extracts spatial filters that emphasize variance differences between two motor–imagery classes. Let Ck and C−k (P
j̸=k Cj) denote the class-wise
mean covariances; CSP seeks a filter w ∈ RC that maximizes the variance ratio
w⋆ = arg mwax
w⊤ Ck w
w⊤C−kw ≈ arg mwax
w⊤ Ck w
w⊤Ctw .
often approximated using the total covariance Ct = Ck + C−k. This Rayleigh quotient corresponds to the eigenproblem Ckw = λ C−kw, producing filters with high variance for class k and suppressed variance for the opposite class. Although discriminative, CSP is highly sensitive to subject-specific covariance structure and degrades under cross-subject shifts in zero-shot MI-BCI.
3.3.3. LDA PROJECTION
LDA can also serve as a preprocessing step by projecting vectorized covariances (e.g., upper-triangular embeddings) onto directions that maximize class separability. Let v denote a projection vector. LDA optimizes the Fisher criterion
J (v) = v⊤SBv
v⊤SW v ,
where SB = P
k nk(μk − μ)(μk − μ)⊤ is the between
class scatter and SW = P
k
P
i∈k(xi−μk)(xi−μk)⊤ is the within-class scatter. The optimal projection is obtained from the leading generalized eigenvector of SBv = λ SW v. LDA improves discriminability but remains linear and cannot capture nonlinear or geometric subject variability.
2

Geometry-Aware Deep Congruence Networks for Manifold Learning
3.3.4. RIEMANNIAN PROCRUSTES ANALYSIS (RPA)
Riemannian Procrustes Analysis (RPA) (Yger et al., 2017a) aligns each subject’s covariance distribution to a common template through a sequence of geometric operations: recentering, dispersion scaling, and rotation. Given subject mean μs and dispersion Σs, the steps are:
• Recenter: C(1)
i,a,e = μ−1/2
s Ci,a,e μ−1/2
s,
• Scaling: C(2)
i,a,e = Σ−1/2
s C(1)
i,a,e Σ−1/2
s,
• Rotate: C′
i,a,e = Rs⊤ C(2)
i,a,e Rs; Rs = Us.
where Us contains eigenvectors of Σs. RPA reduces global subject-level variation but remains a static, non-learned transform and cannot fully correct class-dependent or finegrained orientation mismatches.
3.4. Classical Classifiers
3.4.1. TANGENT SPACE LOGISTIC REGRESSION (TSLR)
After Riemannian Alignment, each covariance matrix is first transported to the tangent space at the identity by applying
the matrix logarithm Ti,a,e = log C− 1
2
ref Ci,a,eC− 1
2
ref . The symmetric matrix Ti,a,e is then vectorized using its uppertriangular entries and directly provided to a multinomial logistic regression classifier:
zi,a,e = vecupper(Ti,a,e),
p(y = k | zi,a,e) = exp(w⊤
k zi,a,e + bk) PK
j=1 exp(w⊤
j zi,a,e + bj ) .
TSLR therefore combines Riemannian geometry (via log and vectorization) with simple linear decision boundaries in Euclidean space, forming a strong yet shallow baseline classifier.
3.4.2. MINIMUM DISTANCE TO MEAN (MDM)
Minimum Distance to Mean (MDM) classifies each trial covariance Ci,a,e by comparing it to the class prototype that best represents all training covariances of that class. For each class k , the class-specific mean μk is defined as: μk = arg minC
P
(i,a,e) : a=k dAIRM(C, Ci,a,e). The
predicted label is then obtained by choosing the prototype closest to the input covariance:
yˆi,a,e = arg mkin dAIRM(Ci,a,e, μk) .
MDM therefore operates directly on SPD geometry and remains fully nonparametric, but lacks any learnable transformation to correct subject-specific distortions.
3.4.3. LDA CLASSIFIER
When used as a classifier, Linear Discriminant Analysis (LDA) models each class as a Gaussian distribution with a shared covariance matrix. The Bayes-optimal discriminant function for class k is
δk(x) = x⊤Σ−1μk − 1
2 μ⊤
k Σ−1μk + log πk,
where x is the feature vector, μk is the class mean, Σ is the shared within-class covariance, and πk is the class prior. CSP LDA applies this discriminant to CSP-filtered features, while TSA LDA applies it to tangent-space vectors. Despite their popularity, both remain linear and are sensitive to subject-specific shifts, limiting zero-shot performance.
4. Methods
4.1. Preprocessing Methods
4.1.1. DISCRIMINATIVE CLASS REPRESENTATION PRE-ALIGNER (DCR)
Even after subject-wise Riemannian Alignment (RA), RAwhitened EEG covariances Ci,a,e ∈ SC++ retain strong rotational inconsistencies across subjects. In the log domain, action-specific directions appear tilted differently, entangling between-class geometry and inflating within-class scatter, which degrades zero-shot cross-subject decoding. As shown in Figure 1, DCR learns a single global rotation R ∈ SO(C) in the log-Euclidean (Arsigny et al., 2007) domain to realign class structure. Perform dispe-
rsion scaling using scaling parameter λ: L′
i,a,e = λ Li,a,e. For action k with index set Ik = {(i, a, e) : yi,a,e = k}, compute action-specific mean Mk = 1
|Ik |
P
(i,a,e)∈Ik L′
i,a,e and the
global mean M = 1
N
P
k |Ik| Mk.
Fisher Loss: Using the rotated-dispersed log covariances Lei,a,e = R⊤L′
i,a,eR, calculate the between B(R), Within W (R) class variance and center penalty C(R)
B(R) =
X
k
|Ik| ∥(R⊤(Mk − M )R)∥2
2,
W (R) =
X
i,a,e
∥(R⊤(L′
i,a,e − Myi,a,e )R)∥2
F,
C(R) = offdiag 1
N
X
i,a,e
Lei,a,e) 2
F.
DCR Loss function: DCR learns a dispersion scale λ = softplus(λraw) + 10−6 and minimizes:
LDCR = LF isher + Reg
where LF isher = γ W (R)
B(R)+ε + γc C(R), βt =
β 1+cos(πt/T )
2 (cosine decay). This combines Fisher discrimination, scale stability, and gentle identity-regularization on
R: Reg = α(λ − 1)2 + βt
∥R−I ∥2
F
C.
3

Geometry-Aware Deep Congruence Networks for Manifold Learning
Figure 1. (i) DCR Pre-Aligner: Learns dispersion scaling and rotation in the tangent space after RA to produce an aligned SPD. (ii) RiFU Pre-Aligner: Uses an RA-initialized Riemannian U-Net to reconstruct an aligned SPD with multi-scale geometric structure.
Algorithm 1 DCR Pre-Aligner
Input: RA-whitened covariances Ci,a,e; labels yi,a,e Compute logs Li,a,e = log(Ci,a,e) Compute action means Mk and global mean M Initialize skew-symmetric generator A = 0, rotation R = exp(A − A⊤), and scale λ Optimization loop:
Forward Pass: update rotation R = exp(A − A⊤) Dispersion scale: L′
i,a,e = λ Li,a,e
Rotate logs: Lei,a,e = R⊤L′
i,a,eR
Compute B(R), W (R), and center(R) Compute loss function: LDCR Backpropagate: update A and λ end loop
Final rotation R⋆ = exp(A − A⊤) Apply transform: Lei,a,e = R⋆⊤L′
i,a,eR⋆
Compute Cei,a,e = exp(Lei,a,e)
Output: Pre-aligned covariances Cei,a,e
Beyond rotational alignment, The covariance structure also contains nonlinear distortions in scale, dispersion, and manifold curvature that RA and DCR alone cannot fully correct.
To address these deeper geometric factors, we next introduce a Riemannian Fisher U-Net (RiFU), a nonlinear SPD encoder–decoder that enhances action separation while suppressing subject-specific geometry.
4.1.2. RIEMANNIAN FISHER U-NET (RIFU)
PRE-ALIGNER
Cross-subject EEG motor-imagery covariances Ci,a,e ∈ SC++ exhibit strong subject-dependent variability in orientation and dispersion. Subject-wise RA removes global mean-shift but leaves deeper geometric discrepancies that distort action-specific directions in tangent space and degrade LOSO zero-shot decoding.
As shown in Figure 1, RiFU is a geometry-aware U-Net operating directly on SPD covariances inspired from the famous U-Net (Ronneberger et al., 2015) Architecture. Each layer is an SPD linear map of the form
Φ(C) = W ⊤CW, W ∈ Rdin×dout ,
and decoder skip connections use the log-Euclidean merge
merge(C1, C2) = exp 1
2 log C1 + log C2 ,
which preserves SC++.
Encoder–Decoder formulation: Each SPD layer is a congruence transform Φ(C) = W ⊤CW . The encoder is the composition
Bottleneck (B) = E(C) = Φ(L) ◦ · · · ◦ Φ(2) ◦ Φ(1)(C),
and the decoder applies SPD layers with log-mean merges:
D(B) = merge Φ(d1) merge(Φ(d2)(B), C1) , C′ ,
4

Geometry-Aware Deep Congruence Networks for Manifold Learning
Algorithm 2 RiFU: Riemannian Fisher U-Net Pre-Aligner
Input: RA-whitened covariances C′
i,a,e; action labels
yact
i,a,e; subject labels ysub
i,a,e
Initialize SPD U-Net parameters of encoder E(·), decoder D(·) (all Φ-layers) Optimization loop: for each training minibatch Forward pass: Cout
i,a,e = D(E(C′
i,a,e))
Compute Sout
i,a,e = log Cout
i,a,e, and Sin
i,a,e = log C′
i,a,e
Compute zi,a,e = vec(Sout
i,a,e), and zin
i,a,e = vec(Sin
i,a,e)
Compute Fisher stats: W (A), B(A), W (S) and Rec Compute loss function: LRiFU Backpropagate: update W in all layers of E, D via gradient descent end
Save E⋆, D⋆ and compute Cei,a,e = E⋆(D⋆(C′
i,a,e))
Output: Pre-aligned covariances Cei,a,e
The full U-Net map is given by Cout
i,a,e = D(E(C′
i,a,e)).
Fisher statistics for actions and subjects: Given tangent features zi,a,e with action labels yact
i,a,e and subject labels
ysub
i,a,e, Fisher statistics require the class-wise, subject-wise, and global means defined as follows:
μk = 1
nk
X
a=k
zi,a,e, μs = 1
ns
X
i=s
zi,a,e, μ = 1
N
X
i,a,e
zi,a,e.
Using these means, we compute within- and between-class variances for actions and subjects to compute Fisher Loss.
W (A) = 1
N
X
i
|zi − μk∥2
2, B(A) = 1
N
X
k
nk ∥μk − μ∥2
2
W (S) = 1
N
X
i
∥zi − μs∥2
2,
Reconstruction loss: To maintain geometric fidelity
Rec = 1
N
X
i,a,e
zi,a,e − zin
i,a,e
2
2.
≡1
N
X
i,a,e
∥C out
i,a,e − C′
i,a,e∥2
F.
RiFU Loss function: RiFU maximizes Fisher separation for actions while suppressing subject-specific structure:
LRiFU = λw W (A) − λbet B(A) − λsub W (S) + λrec Rec,
with positive hyperparameters λw, λb, λs, λrec > 0.
RiFU thus learns a nonlinear SPD encoder–decoder that tightens action clusters, suppresses subject variability, and preserves Riemannian structure. As a preprocessing module, it yields highly discriminative covariances that substantially boost LOSO zero-shot performance of downstream Riemannian and tangent-space classifiers.
4.2. Classifiers
4.2.1. RIFUNET CLASSIFIER
Cross-subject motor-imagery covariances Ci,a,e ∈ SC++ exhibit strong subject-induced orientation differences even after RA. Extending the unsupervised RiFU Pre-Aligner, the RiFUNet (Riemannian Fisher U-Net) Classifier introduces a supervised cross-entropy head while retaining Fisher statistics as geometric regularizers. Thus, LCE drives discriminative action learning, whereas the Fisher constraints prevent the network from encoding subject identity.
Weight Initialization: Let the Euclidean global mean be M= 1
N
P C′
i,a,e with eigendecomposition M = U ΛU ⊤, where U ∈ RC×C provides a stable basis for all layers. Each congruence map Wl ∈ Rdin×dout is initialized as:
Wl = U [1:din, 1:dout],
ensuring shape-specific and geometry-aware alignment.
RiFU U-Net (congruence transform layers): Each layer applies the SPD-preserving congruence transform inspired from SPDNet baseline (Huang & Van Gool, 2017b)
C(l+1) = W ⊤
l C(l)Wl,
with decoder skip-merges performed in the log-domain merge(C1, C2) = exp( 1
2 (log C1 + log C2)) ; Cout
i,a,e ∈ SC++
replicating the residual connections in ResNet (Huang & Van Gool, 2017a) architecture.
Tangent space features: A custom TSLR layer log–aligns
C out
i,a,e to the batch log–Euclidean mean, extracts the upper–triangular tangent vector zi,a,e, and produces action logits yˆact
i,a,e. Formally:
(zi,a,e, yˆact
pred) = TSLR(Cout
i,a,e),
LCE = 1
N
X
i
CE(yˆact
pred, yact
i,a,e).
All steps are differentiable, enabling CE gradients to flow through TSLR and into all congruence layers.
Fisher action/subject statistics: For computing Fisher loss using actions discrimination and subject alignment:
W (A) = 1
N
X
i
∥zi−μa(i)∥2
2, B(A) = 1
N
X
a
na∥μa−μ∥2
2.
W (S) = 1
N
X
i
∥zi−νs(i)∥2
2, B(S) = 1
N
X
s
ns ∥νs −ν ∥2
2.
Reconstruction loss: To preserve geometric structure:
LRec = ∥Cout
i − C′
i ∥2
F.
5

Geometry-Aware Deep Congruence Networks for Manifold Learning
Figure 2. i) RiFUNet classifier with a Riemannian U-Net feature extractor followed by a TSLR action head. (ii) SPD-DCNet classifier composed of deep congruence layers with a linear (no-activation) action head. Together, these architectures illustrate Deep Congruence Networks for cross-subject action decoding.
Algorithm 3 RiFUNet Classifier
Input: RA-whitened Covariances Ci,a,e; action labels
yact
i,a,e; subject labels ysub
i,a,e
Set hyperparameters λCE, λact, λw, λb, λsub and λrec Initialize the SPD Linear layers Wl in the RiFU U-Net Optimization loop: Forward pass: Cout
i,a,e = RiFU(Ci,a,e)
Compute (zi,a,e, yˆact
i,a,e) = TSLR(Cout
i,a,e)
Compute Fisher stats: W (A), B(A), W (S), B(S) Compute Total loss LRC Backpropagate: update U-Net and TSLR weights end
Save E⋆, D⋆ in RiFU⋆ and TSLR⋆ classifier parameters Compute C ̃out
i,a,e = RiFU⋆(Ci,a,e)
Compute (z ̃i,a,e, yˆact
pred) = TSLR⋆(C ̃out
i,a,e)
Output: predicted labels yˆact
pred and features z ̃i,a,e
Total loss:
LRC = λCELCE + λact(λwW (A) − λbB(A))
+λsub(λbB(S) − λwW (S)) + λrecLRec
where λCE, λact, λw, λb, λsub and λrec ≥ 0. RiFUNet Classifier therefore extends congruence-based SPD learning into a supervised setting where CE provides discriminative gradients and Fisher penalties enforce subject-invariance for strong LOSO cross-subject generalization.
4.2.2. SPD-DCNET CLASSIFIER
While the RiFUNet Classifier integrates an encoder–decoder topology with geometric skip-merging, the proposed SPDDCNet (SPD Deep Congruence Network) Classifier explores a simpler yet surprisingly strong alternative: a deep congruence network without decoder symmetry or reconstruction constraints. Despite its architectural minimalism, SPD-DCNet achieves high LOSO cross-subject performance, demonstrating that carefully designed SPD-linear chains can serve as competitive SPD feature extractors.
Weight Initialization: Similar to RiFUNet, the weights can be initialized by extracting the eigenvectors of the global mean by eigendecomposition
SPD-DCNet replaces the U-Net structure of RiFUNet with a purely feed-forward congruence stack, C(l+1) = W⊤
l C(l)Wl, followed by a small SPD-stabilization step
C(l+1) ← C(l+1) + εI. This constraint-free design allows the network to explore flexible, non-symmetric SPD embeddings; a compact d → 2d → 2d → d width pattern works well, and several variants (e.g., d−2d−3d−2d−d) also perform competitively. Thus, deep congruence stacks alone provide sufficient capacity for learning discriminative SPD representations without any encoder–decoder symmetry.
Tangent-space vectorization Final covariances are mapped to the tangent space via the matrix logarithm and we perform upper-triangular vectorization to obtain zi,a,e.
6

Geometry-Aware Deep Congruence Networks for Manifold Learning
Algorithm 4 SPD-DCNet Classifier
Input: RA-whitened covariances Ci,a,e; action labels
yact
i,a,e; subject labels ysub
i,a,e
Set hyperparameters λCE, λact, λsub, λw, λb Initialize {W1, . . . , WL} stacks and ActionHead for each training iteration do Forward pass: C(1) = Ci,a,e for l = 1 . . . L do
C(l+1) = W ⊤
l C(l)Wl
C(l+1) ← C(l+1) + εI
end for
C out
i,a,e = C(L+1)
Compute Si = log Cout
i,a,e and zi = vec△(Si) Predict label yˆact
pred = ActionHead(zi,a,e)
Compute Fisher stats: W (A), B(A), W (S), B(S) Compute total loss LDC
Backpropagate: update {Wl} and ActionHead end for
Save {Wl}⋆ and ActionHead⋆ Forward pass: C(1) = Ci,a,e for l = 1 . . . L do
C(l+1) = W ⋆
l
⊤C(l)W ⋆
l
end for
Compute C ̃out
i,a,e = C(L+1)
Compute S ̃i,a,e = log C ̃out
i,a,e and z ̃i,a,e = vec△(S ̃i,a,e)
Predict yˆact
pred = ActionHead⋆(zi,a,e) Output: predicted labels yˆact
pred and features zi,a,e
Action Head: The tangent features are processed by a multi-layer linear Action Head, an MLP without nonlinear activations—to preserve the geometry imposed by the congruence stack. A deep linear map
logits = WLWL−1 · · · W1 zi,a,e + b, WL ∈ R|k| × dL
yˆact
pred = arg max(logits)
provides adequate discriminative capacity in tangent space.
Loss function: SPD-DCNet uses the same discriminative objectives as the RiFUNet Classifier
LDC = λCELCE + λact(λwW (A) − λbB(A))
+λsub(λbB(S) − λwW (S)).
Unlike RiFUNet, SPD-DCNet omits the reconstruction term LRec, allowing it to focus entirely on discriminative geometry rather than jointly preserving input structure. SPDDCNet is therefore a pure deep-congruence classifier: an SPD feature extractor with linear decision geometry and no decoder constraints. Its performance shows that a welldesigned congruence chain, combined with Fisher statistics,
is sufficient for strong cross-subject motor-imagery decoding even without RiFUNet’s multi-scale structure.
5. Experimental Setup
We evaluate all models on the BCI-IV 2a motor-imagery dataset containing EEG from 9 subjects across 4 classes. The official 8–30 Hz band-pass–filtered signals are used. For each trial, we compute a trace-normalized covariance matrix Ci,a,e = 1
T −1 Xi,a,eX ⊤
i,a,e from the channel-time epochs to ensure scale invariance.
Experiments follow the Leave-One-Subject-Out (LOSO) protocol: one subject serves as the test set while the remaining eight are used for training, with no alignment or parameter estimation using test-subject data. Results are reported as per-subject accuracy and mean±std.
Models are trained for 1,000 steps using Adam (learning rate 10−3, weight decay 10−5, batch size 256). Congruence layers in RiFuNet and SPD-DCNet are initialized from the global RA mean. The Action Head is a multi-layer linear mapping, and losses include cross-entropy plus Fisher action/subject regularizers; a light reconstruction loss is used only for RiFuNet. All implementations are in PyTorch and run on a single NVIDIA RTX 4050 GPU with fixed random seed for reproducibility.
6. Results
We investigate the contribution of the proposed preprocessing modules (DCR Pre-Aligner and RiFU Pre-Aligner) and the proposed deep congruence manifold classifiers (SPDDCNet and RiFUNet Classifier) compared to the conventional baselines. All experiments use Leave-One-SubjectOut (LOSO) evaluation on the BCI-IV 2a dataset (T).
6.1. Preprocessing Modules Ablation Study
As shown in Table 1, the RiFu PreAligner provides the most consistent gains across classifiers, offering the largest improvement for TSLR (+1.9%) and also enhancing TSALDA. Its log-domain filtering and skip-connected smoothing reduce subject-specific covariance distortions more effectively than RA.
Table 1. Benchmarking of preprocessing modules under LOSO cross-subject evaluation on BCI-IV 2a. Mean classification accuracy (%) is reported for each configuration.
Classifier RA DCR RiFu
TSLR 52.89 ± 14.48 53.01 ± 16.71 54.78±15.43 TSA-LDA 53.51 ± 15.29 53.97 ± 16.02 54.24±15.81 MDM 52.43 ± 15.66 50.46 ± 14.82 52.89±15.41
DCR provides only modest improvements for TSA–LDA
7

Geometry-Aware Deep Congruence Networks for Manifold Learning
Subject MDM TSLR TSA-LDA CSP-LDA CSP-LDA-Z RiFuNet SPD-DCNet
A01T 61.81 61.46 67.71 53.47 58.68 67.36 68.40 A02T 26.39 29.51 28.82 24.31 25.35 27.08 29.86 A03T 72.92 64.93 73.96 59.03 65.97 80.21 82.64 A04T 44.79 44.44 47.92 35.76 39.58 44.79 43.06 A05T 42.71 38.54 43.40 31.25 27.78 45.49 44.79 A06T 32.29 42.36 37.50 25.00 24.31 41.67 40.28 A07T 59.38 45.49 47.22 28.82 52.78 50.00 54.51 A08T 71.18 68.06 72.57 70.83 64.58 76.74 76.39 A09T 60.42 60.42 62.50 50.69 51.39 62.85 65.62
Mean ± Std 52.43 ± 15.66 50.58 ± 12.68 53.51 ± 15.29 42.13 ± 15.84 45.60 ± 15.81 55.13 ± 16.66 56.17±16.99
Table 2. Benchmarking subject-wise LOSO accuracy (%) across classical baselines and deep manifold classifiers. Per-subject best scores are underlined, and the overall best-performing model is indicated in bold.
and TSLR but degrades MDM, reflecting its sensitivity to rotation-only transformations and the stricter geometric preservation required by metric-based classifiers. Overall, RiFu consistently outperforms both RA and DCR, making it the most reliable and stable preprocessing strategy for cross-subject EEG decoding.
6.2. Classifier Modules Ablation Study
As shown in Table 2, classical baselines such as MDM (Congedo et al., 2017), TSLR (Yger et al., 2017b), and TSA–LDA (Navarro-Sune et al., 2019) provide reasonable LOSO performance, with TSA–LDA being the strongest among them. CSP (Koles, 1990) based models perform considerably worse due to their sensitivity to channel noise and session non-stationarity, although z-score normalization using subject-specific deviations and reference-mean signals offers a small but consistent improvement for CSP–LDA.
Both proposed deep geometric models outperform all classical baselines. SPD-DCNet achieves the highest mean accuracy (56.17%), highlighting the benefit of hierarchical congruence transforms for learning discriminative structure on the SPD manifold. The RiFuNet Classifier performs almost as strongly (55.13%), with notable subject-wise peaks on A03T, A08T, and A09T. Collectively, the deep congruence networks achieve a +3–4% improvement over the best classical methods, demonstrating superior cross-su-
bject generalization and confirming the effectiveness of learnable SPD representations.
7. Discussion
Our results highlight that subject variability remains the dominant challenge in cross-subject motor-imagery decoding. The proposed RiFu PreAligner consistently stabilizes covariance structure, confirming that log-domain filtering and skip-connected smoothing are more effective than RA or rotation-only DCR for mitigating subject-induced distortions.
On the classification side, SPD-DCNet achieves the strongest LOSO performance. Its purely congruence-based architecture shows that deep SPD transformations alone can extract highly discriminative geometric structure, even without the multi-scale filtering or reconstruction constraints of RiFuNet. RiFuNet Classifier performs similarly well, indicating that both flat and hierarchical congruence stacks can effectively model covariance geometry when guided by Fisher action and subject statistics.
Overall, the improvements over classical Riemannian and CSP-based methods demonstrate the value of learnable SPD representations under strong inter-subject variability.
8. Conclusion
We introduced two geometric preprocessing modules and two deep congruence-based classifiers for cross-subject EEG decoding. RiFu provides the most reliable alignment, while SPD-DCNet yields the highest overall accuracy among all models tested. Together, these components form a fully differentiable pipeline operating directly on the SPD manifold.
Future work will extend these ideas to temporal covariance models, multi-session datasets, and stronger subjectinvariant objectives.
Impact Statement
This work advances methods for learning from EEG covariance representations, with potential impact on brain–computer interfaces and neurotechnology. Improved cross-subject decoding may broaden the accessibility of BCI systems, but care must be taken regarding data privacy and the appropriate clinical or assistive deployment of such models. Beyond these considerations, we foresee no additional societal risks associated with this research.
8

Geometry-Aware Deep Congruence Networks for Manifold Learning
References
Ang, K. K., Guan, C., Chua, K. S. G., Ang, B. T., Kuah, C. W. K., Wang, C., Phua, K. S., Chin, Z. Y., Zhang, H., and Teo, W. P. A randomized controlled trial of eegbased motor imagery brain–computer interface robotic rehabilitation for stroke. IEEE Transactions on Neural Systems and Rehabilitation Engineering, 23(5):888–897, 2015.
Arsigny, V., Fillard, P., Pennec, X., and Ayache, N. Geometric means in a novel vector space structure on symmetric positive-definite matrices. SIAM Journal on Matrix Analysis and Applications, 29(1):328–347, 2007.
Barachant, A., Bonnet, S., Congedo, M., and Jutten, C. Multiclass BCI classification by riemannian geometry. In IEEE Transactions on Biomedical Engineering, volume 59, pp. 920–928, 2012a.
Barachant, A., Bonnet, S., Congedo, M., and Jutten, C. Multiclass brain–computer interface classification by Riemannian geometry. In IEEE International Conference on Engineering in Medicine and Biology Society (EMBC), pp. 5039–5042, 2012b.
Barachant, A., Bonnet, S., Congedo, M., and Jutten, C. Riemannian geometry applied to BCI classification. In Latent Variable Analysis and Signal Separation (LVA/ICA), pp. 629–636, 2012c.
Barachant, A., Bonnet, S., Congedo, M., and Jutten, C. Classification of covariance matrices using a riemannianbased kernel for bci applications. In IEEE International Conference on Acoustics, Speech and Signal Processing (ICASSP), pp. 3749–3753, 2013.
Blankertz, B., Dornhege, G., Krauledat, M., M ̈uller, K.-R., and Curio, G. The berlin brain–computer interface: Machine learning based detection of user specific brain states. IEEE Transactions on Neural Systems and Rehabilitation Engineering, 14(2):147–152, 2006.
Blankertz, B., Muller, K. R., and Curio, G. The BCI competition iii: Validating alternative approaches to actual BCI problems. In IEEE Transactions on Neural Systems and Rehabilitation Engineering, volume 14, pp. 153–159, 2007.
Blankertz, B., Tomioka, R., Lemm, S., Kawanabe, M., and M ̈uller, K. Optimizing spatial filters for robust EEG single-trial analysis. IEEE Signal Processing Magazine, 25(1):41–56, 2008.
Congedo, M., Barachant, A., and Bhatia, R. Riemannian geometry for BCI classification. IEEE Transactions on Neural Systems and Rehabilitation Engineering, 25(10): 1753–1762, 2017.
Huang, Z. and Van Gool, L. A riemannian network for SPD matrix learning. In Proceedings of the IEEE Conference on Computer Vision and Pattern Recognition (CVPR), pp. 2547–2557, 2017a.
Huang, Z. and Van Gool, L. SPDnet: Learning manifoldpreserving deep neural networks on symmetric positive definite manifolds. In Advances in Neural Information Processing Systems (NeurIPS), pp. 843–852, 2017b.
Jayaram, V., Alamgir, M., Altun, Y., Scholkopf, B., and Grosse-Wentrup, M. Transfer learning in brain–computer interfaces. IEEE Computational Intelligence Magazine, 11(1):20–31, 2016.
Koles, Z. J. The quantitative extraction and topographic mapping of the abnormal components in the clinical eeg. Electroencephalography and Clinical Neurophysiology, 79(6):440–447, 1990.
Lawhern, V. J., Solon, A. J., Waytowich, N. R., Gordon, S. M., Hung, C. P., and Lance, B. J. EEGNet: A compact convolutional neural network for EEG-based braincomputer interfaces. Journal of Neural Engineering, 15 (5):056013, 2018.
Lotte, F., Bougrain, L., Cichocki, A., Clerc, M., Congedo, M., Rakotomamonjy, A., and Yger, F. A review of classification algorithms for eeg-based brain–computer interfaces. Journal of Neural Engineering, 15(3):031005, 2018.
Millan, J. d. R., Rupp, R., M ̈uller-Putz, G., Murray-Smith, R., Giugliemma, C., Tangermann, M., Vidaurre, C., Cincotti, F., Kubler, A., Leeb, R., and Neuper, C. Combining brain–computer interfaces and assistive technologies: State-of-the-art and challenges. Frontiers in Neuroscience, 4(161):1–15, 2010.
Navarro-Sune, G., Kuzilek, J., and Congedo, M. A riemannian geometry framework for classification of EEG signals. IEEE Transactions on Neural Networks and Learning Systems, 30(3):814–826, 2019.
Ronneberger, O., Fischer, P., and Brox, T. U-net: Convolutional networks for biomedical image segmentation. In International Conference on Medical Image Computing and Computer-Assisted Intervention (MICCAI), pp. 234–241, 2015.
Schirrmeister, R. T., Springenberg, J. T., Fiederer, L. D. J., Glasstetter, M., Eggensperger, K., Tangermann, M., Hutter, F., Burgard, W., and Ball, T. Deep learning with convolutional neural networks for EEG decoding and visualization. Human Brain Mapping, 38(11):5391–5420, 2017.
9

Geometry-Aware Deep Congruence Networks for Manifold Learning
Truong, N. D., Kuhlmann, L., Rogasch, N. C., Adamaszek, M., Lao, K., M ̈uller, K.-R., and Tan, M. A wearable eeg-based system for real-time seizure detection. IEEE Transactions on Biomedical Engineering, 66(2):467–476, 2018.
Yger, F., Cheron, G., and Lotte, F. Riemannian approaches in brain–computer interfaces: A review. IEEE Transactions on Neural Systems and Rehabilitation Engineering, 25(10):1753–1762, 2017a.
Yger, F., Lotte, F., and Sugiyama, M. Riemannian approaches to classification of EEG signals. In Proc. European Symposium on Artificial Neural Networks (ESANN), 2017b.
10

---

## Processing Information

- **Processing Library:** Zotero PDFWorker
- **Processing Date:** 2026-02-10T18:15:58.838Z
- **Text Length:** 35213 characters
- **Success:** Text extraction completed
- **PDF Library Used:** Zotero PDFWorker
- **Pages Processed:** 10 of 10
