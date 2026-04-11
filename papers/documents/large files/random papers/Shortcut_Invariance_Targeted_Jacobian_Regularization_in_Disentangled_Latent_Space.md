# PDF Document: Pal et al. - 2025 - Shortcut Invariance Targeted Jacobian Regularization in Disentangled Latent Space.pdf

**File Path:** Pal et al. - 2025 - Shortcut Invariance Targeted Jacobian Regularization in Disentangled Latent Space.pdf

**Processed Date:** 2026-02-10T18:17:34.967Z

**File Size:** 2672.25 KB

**Total Pages:** 11

**Extracted Pages:** 11

**PDF Library:** Zotero PDFWorker

**Attachment Item ID:** 3379

**Title:** Shortcut Invariance: Targeted Jacobian Regularization in Disentangled Latent Space

**Collection:** Large Files > Random Papers

---

## Extracted Text Content

Shortcut Invariance: Targeted Jacobian Regularization
in Disentangled Latent Space
Shivam Pal IIT Kanpur
pshivam@cse.iitk.ac.in
Sakshi Varshney ARF, IIT Kanpur
sakshi.varshney@airawat.org
Piyush Rai IIT Kanpur
piyush@cse.iitk.ac.in
Abstract
Deep neural networks are prone to learning shortcuts, spurious and easily learned correlations in training data that cause severe failures in out- of-distribution (OOD) generalization. A dominant line of work seeks robustness by learning a robust representation, often explicitly partitioning the latent space into core and spurious components; this approach can be complex, brittle, and difficult to scale. We take a different approach: instead of a robust representation, we learn a robust function. -
We present a simple and effective training method that renders the classifier functionally invariant to shortcut signals. Our method operates within a disentangled latent space, which is essential as it isolates spurious and core features into distinct dimensions. This separation enables the identification of candidate shortcut features by their strong correlation with the label, used as a proxy for semantic simplicity. The classifier is then desensitized to these features by injecting targeted, a-
nisotropic latent noise during training. We analyze this as targeted Jacobian regularization, which forces the classifier to ignore spurious features and rely on more complex, core semantic signals. The result is state-of-the-art OOD performance on established shortcut learning benchmarks.
1. Introduction
Deep neural networks trained with Empirical Risk Minimization (ERM) [18] have demonstrated superhuman performance on i.i.d. test sets, but their reliability in realworld applications is often undermined by their sensitivity to distribution shifts. A key reason for this fragility is shortcut learning [4]: networks tend to discover and exploit the simplest possible solutions, which are often spurious correlations in the training data, rather than learning the intended, more complex semantic rules. C-
anonical examples include classifying digits based on background color instead of shape (e.g., CMNIST [1]) or identifying objects by their texture rather than their form [5]. When this spuri
ous correlation is broken, model performance collapses. A dominant line of inquiry attacks this problem at the level of the representation. These methods attempt to partition the latent space into a core part and a spurious part, often with complex VAE-based architectures (e.g., ChromaVAE [21]). The subsequent classifier is then trained only on the core component. This partitioning, however, is non-trivial. It may require explicit labels for the spurious attribute, rely on assumptions of (linear) -
separability that do not hold, or fail to scale to complex, high-dimensional shortcut signals. In this paper, we pivot from learning a robust representation to learning a robust function. We propose SITAR (Shortcut Invariance via Targeted Anisotropic Regularization), a method to train a classifier that is functionally invariant to shortcut signals, effectively ignoring them even when they are present in its input. Our approach is built on a key insight, which we state as our core hypothesis:
Core Hypothesis: In a sufficiently disentangled representation, simple and low-complexity shortcuts will exhibit a quantifiably stronger correlation with the labels than the more complex, high-semantic-content core features.
We posit that this correlation gap is an effective, unsupervised proxy for identifying shortcut axes. We exploit this gap directly. Our method uses this correlation to define a stochastic perturbation process. During training, we inject targeted, anisotropic noise, applying the strongest noise to the latent dimensions most correlated with the label. The classifier fθ is then trained using a consistency-based objective. It must remain predictive on this perturbed latent code while also being forced-
 to remain consistent with its output on the original, clean code (i.e., fθ(z) ≈ fθ(z ̄)). By forcing this invariance to the targeted noise, we make the classifier functionally invariant to the shortcut dimensions. This compels it to find predictive signals in the more stable, low-correlation (core) dimensions. Our theoretical analysis (Section 4) provides a formal
1
arXiv:2511.19525v1 [cs.LG] 24 Nov 2025

Figure 1. Overview of SITAR. A β-VAE encoder Eφ maps input images X to Gaussian latents z ∼ N (μ, σ), which are then passed to a decoder Dψ for reconstruction and to a classifier fθ for prediction. Using labels Y and latent means μ, SITAR computes per-dimension shortcut scores vj = |corr(μj, Y)| (with gradients stopped), forming a weight vector v. Independent Gaussian noise ε ∼ N (0, αI) is scaled elementwise by v and added to z to obtain perturbed latents z ̄. The encoder Eφ, decoder Dψ, and cla-
ssifier fθ are trained jointly using the sum of four losses: reconstruction, β-weighted KL divergence, cross-entropy on (z ̄, Y), and an l2 consistency loss ∥fθ(z) − fθ(z ̄)∥2
2, encouraging shortcut-invariant decision functions in the disentangled latent space.
justification for this consistency-based objective. A smallnoise expansion reveals that this very consistency loss is analytically equivalent to adding a targeted Jacobian regularizer to the standard ERM loss. This penalty explicitly penalizes the classifier’s sensitivity (i.e., its gradient norm) along the high-correlation (shortcut) axes. This action effectively flattens the function along these dimensions, forcing it to ignore them. Our method is simple, requires no test-time modification, and -
avoids the complexities of explicit latent space partitioning. Our contributions are: 1. A novel framework for shortcut learning that targets functional invariance rather than representational purity. 2. A novel, simple training objective that injects targeted, anisotropic noise to desensitize a classifier to shortcut features. 3. A theoretical analysis connecting our objective to a targeted Jacobian regularizer that provably flattens the classifier along shortcut axes.
2. Related Work
Deep neural networks often rely on shortcuts—spurious yet predictive cues that enable easy optimization but poor outof-distribution (OOD) generalization [4]. Optimization
and data-level debiasing methods such as Group DRO [16], IRM [1], REx [8], JTT [11], and Learning from Failure [15] modify training dynamics to reduce shortcut reliance. More recent adversarial and augmentation based strategies including BiasAdv [10], learnable data perturbations [13], and counterfactual data generation [3]—further aim to neutralize spurious cues. However, these approaches typically depend on group or pseudo-group labels, involve multistage or adversarial pipelines, and are sensit-
ive to hyperparameters, often resulting in substantial computational overhead.
Disentanglement-based generative models such as βVAE [6] and FactorVAE [7] separate independent latent factors, providing interpretability but not necessarily invariance. Recent works [14, 21] connect disentanglement with shortcut detection or mitigation. ShortcutVAE [14] reveals shortcut-sensitive latent dimensions but relies on human inspection to remove them. Chroma-VAE [21] mitigates shortcuts through coupled generative–discriminative training by heuristically partitioning the latent space int-
o core and shortcut dimensions, discarding the latter and training a k-nearest-neighbor (kNN) classifier on the core latents. While it is claimed that any classifier can be used on this representation, we found that Chroma-VAE’s robust
2

ness largely disappears when kNN is replaced by parametric models such as logistic regression or small neural networks. This gap arises because the shortcut factors are not fully removed from the core latents but only downscaled. Distance-based methods like kNN are highly sensitive to feature scaling, whereas linear and neural classifiers can effectively undo such rescaling through their learned weights. As a result, Chroma-VAE’s invariance is tightly coupled to a particular non-parametric classi-
fier, and the underlying representation still carries shortcut information. Generative modeling provides an additional route for mitigating shortcuts. Diffusion-based models synthesize counterfactual or attribute-modified samples to break spurious correlations [17, 20], while generative classifiers [9] mitigate shortcuts by modeling p(x | y) to capture full class variability. However, these methods require computationally intensive generative modeling and prior knowledge of which attributes to mod-
ify. In contrast, our method remains purely discriminative: we use disentangled generative models only as latent feature learners and introduce an explicit shortcut-suppression loss, avoiding counterfactual synthesis or likelihood-based training while still mitigating shortcut reliance.
3. Methodology
We now formally introduce SITAR (Shortcut Invariance via Targeted Anisotropic Regularization). As outlined in the introduction, our goal is to learn a classifier fθ that is functionally invariant to spurious shortcut features present in a latent representation z. Our framework achieves this in two main stages, which we detail below. First, we identify a proxy for shortcut features by measuring the correlation of each latent dimension with the label (Section 3.2). Second, we train the classifier fθ-
 using a novel, consistency-based objective that injects targeted, anisotropic noise to desensitize it to these shortcut axes (Section 3.3).
3.1. Prerequisite: A Disentangled Latent Space
Our approach operates on a latent representation z ∈ Rm. This latent code can be obtained from any model, such as a β-VAE [6], Factor-VAE, or any disentangled representation learning encoder. For a self-contained method, we use a standard β-VAE trained with the ELBO objective:
LVAE(x) = Eqφ(z|x)[− log pψ(x | z)]
+ β KL qφ(z | x) ∥ p(z) , (1)
qφ(z | x) is the posterior distribution of z and it is assumed to be a Gaussian N (μ(x), σ(x)) , where μ(x) and σ(x) are computed via a encoder network Eφ. pψ(x | z) is computed via a deterministic decoder network Dψ. p(z) is the prior distribution of z and it is assumed to be N (0, I).
KL(q || p) is the Kullback-Leibler divergence between q and p. The level of disentanglement is controlled by β > 0. Higher value of β forces the latent to be more disentangled. For a input x, it’s latent z(x) is sampled from the posterior N (μ(x), σ(x)). To simplify the notation we will denote z(x) by z and μ(x) by μ.
3.2. Identifying Shortcut Proxies
In line with our core hypothesis, we use label correlation as a proxy for identifying shortcut axes. Given a training set {(xn, yn)}nN=1, we first compute the mean μn of the
latent zn for each input xn. Given {(μn, yn)}nN=1, where
μn ∈ Rm and yn ∈ R, we define a vector v ∈ Rm as follows. For each j = 1, . . . , m, let
μ(j) := (μ1j , . . . , μNj )⊤ ∈ RN ,
y := (y1, . . . , yN )⊤ ∈ RN .
Then the j-th component of v is
vj := Corr(μ(j), y) , j = 1, . . . , m, (2)
where
Corr(a, b) = Cov(a, b)
pVar(a) pVar(b)
v represents the shortcut-ness of each dimension and forms the basis of our targeted regularization.
3.3. Functional Invariance via Anisotropic Regularization
Having identified the shortcut axes (high vi), our goal is to learn a classifier fθ that is invariant to them. We achieve this by desensitizing fθ with a consistency-based objective.
First, we define a perturbed latent z ̄ by injecting anisotropic Gaussian noise, where the noise for each dimension is scaled by its corresponding correlation vi.
z ̄ = z + α · (v ⊙ e), e ∼ N (0, I) (3)
where ⊙ denotes the Hadamard product and α > 0 controls the overall perturbation strength. Axes i with high vi (shortcuts) receive high-variance noise, while axes with low vi (core) are left relatively unperturbed. Second, we define our robust training objective. The classifier fθ must satisfy two constraints: it must be predictive on the noisy input, and it must be consistent with its output on the clean input. This leads to our final loss function, which is trained jointly with the VAE:
L(x, y) = LVAE(x) + Ee lCE fθ(z ̄), y
| {z }
Robust Prediction
+ λcons Ee D fθ(z) ∥ fθ(z ̄)
| {z }
Functional Consistency
(4)
3

The Robust Prediction term (standard cross-entropy on z ̄) forces fθ to find predictive signals. Since the shortcut axes are rendered uninformative by the noise, the model must learn to rely on the stable, unperturbed core axes. The Functional Consistency term explicitly forces the classifier’s output to be invariant to the targeted perturbation. We instantiate this as the logit-MSE, D(fθ(z) ∥ fθ(z ̄)) = ∥fθ(z) − fθ(z ̄)∥22. This regularizer ensures the classifier’s decision boundary becomes flat-
 along the shortcut axes. It is this term that, as we will show in Section 4, is directly equivalent to a targeted Jacobian regularizer. At test time, we simply use the mean μ of latent z for the prediction.
yˆ(x) = arg max
y∈Y [fθ(μ(x))]y. (5)
Stochastic Approximation. The expectations Ee[·] in Eq. (4) are intractable for large values of α. In practice, we approximate them using a single-sample Monte Carlo estimate during each forward pass. We simply sample one noise vector e ∼ N (0, I) to compute z ̄, which provides an unbiased stochastic gradient for both classifier objectives.
Implementation Note: Gradient Flow. VAE and classifier are trained end-to-end. For the correlation proxy, we detach the latent vector using a stop-gradient, sg(·), and compute v. This computation is done batchwise and includes a weighting to correct for class imbalance. Further details are presented in the appendix. v is treated as fixed and is used to parameterize the anisotropic noise. The VAE encoder Eφ is updated by its own reconstruction and KL loss (LVAE). Crucially, φ is also updated by the-
 classifier’s objective Lclf, as gradients are allowed to propagate back through both fθ(z) and fθ(z ̄).
4. Theoretical Analysis: SITAR as a Unified Jacobian Regularizer
We formalize the effect of the SITAR classifier objective and show that, under a small-noise approximation, it equals standard ERM plus a targeted Jacobian penalty weighted by feature shortcutness. Throughout, let fθ : Rm → RC denote the logit mapping, with Jf (z) ∈ RC×m its Jacobian at z and Jf,i(z) its i-th column. Let lCE(·, y) be the cross-entropy in the logit space, which is convex and twice differentiable. We define the perturbation
∆z = α (v ⊙ e), e ∼ N (0, I),
so that E[e] = 0 and E[eiej] = δij. Denote f = fθ(z),
f ̄ = fθ(z + ∆z). The SITAR objective is
Lclf = Ee lCE(f ̄, y)
| {z } LRobustCE
+λcons Ee ∥f ̄ − f ∥2
2
| {z } Lcons
.
Algorithm 1 SITAR: Shortcut Invariance via Targeted Anisotropic Regularization
1: Input: training set Dtr = {(xn, yn)}; encoder Eφ, decoder Dψ; classifier fθ; hyperparams α, β, λ 2: Output: Eφ, Dψ, fθ
3: for epoch = 1, . . . , E do 4: for mini-batch B = {(xn, yn)} do 5: (μn, σn) ← Eφ(xn)
6: zn ← μn + σn ⊙ εn, εn ∼ N (0, I) ▷ reparam. 7: xˆn ← Dψ(zn)
8: LVAE ← 1
|B|
P
n∈B ∥xn − xˆn∥2
2+ β KL N (μn, diag(σ2
n)) ∥ N (0, I)
9: μˆn ← sg(μn) ▷ stop-grad 10: v ← corr {μˆn}n∈B, {yn}n∈B ▷ per-dimension 11: z ̄n ← zn + α v ⊙ en, en ∼ N (0, I)
12: Lclf ← 1
|B|
P
n∈B
h
lCE fθ(z ̄n), yn + λ ∥fθ(z ̄n) −
fθ (zn )∥2
2
i
13: Ltotal ← LVAE + Lclf
14: optimize φ, ψ, θ to minimize Ltotal 15: end for 16: end for
17: Test-time: given x, compute (μ, σ) ← Eφ(x) and return yˆ = arg max fθ(μ)
Theorem 1 (Unified Jacobian Regularizer). Assume fθ is twice continuously differentiable in a neighborhood of z. Let Hl = ∇2lCE(f, y), which is positive semidefinite. Then for sufficiently small α,
Lclf = lCE(f, y) + α2
m
X
i=1
v2
i
h1
2 Jf,i(z)⊤Hl Jf,i(z)
+ λcons∥Jf,i(z)∥2
2
i
+ O(α4). (6)
Proof. Write the first-order expansion of fθ at z:
f ̄ = fθ(z+∆z) = f +Jf (z) ∆z+r, ∥r∥2 = O(∥∆z∥2
2).
Consistency term. Using the expansion above and E[∆z∆z⊤] = α2 Diag(v ⊙ v),
Lcons = E ∥f ̄ − f ∥2
2 = E ∥Jf ∆z∥2
2 + O(α4)
= α2
m
X
i=1
v2
i ∥Jf,i(z)∥2
2 + O(α4). (7)
Robust CE term. Second-order expand lCE at f :
lCE(f ̄, y) = lCE(f, y) + ∇lCE(f, y)⊤(f ̄ − f )
+1
2 (f ̄ − f )⊤Hl(f ̄ − f ) + O(∥f ̄ − f ∥3
2). (8)
Taking expectation and using E[∆z] = 0 gives E[f ̄ − f ] = 0, so the linear term vanishes. Substituting f ̄ − f =
4

Latent traversals Correlation with y
z0 0.06
z1 0.29
z2 0.45
z3 0.03
z4 0.01
z5 0.72
z6 0.03
z7 0.02
z8 0.46
z9 0.02
Figure 2. Shortcut proxy v on ColorMNIST (target: digit, shortcut: color). Top-left shows the original image. Each row displays a latent traversal obtained by varying a single latent dimension while keeping all others fixed. The last column shows the bar plot of the absolute correlation between each latent coordinate zi and the shortcut label. Latent dimension z5 has the highest correlation, and traversing along this dimension changes the digit color while largely preserving its shape, confirming -
that z5 is the shortcut dimension.
Jf ∆z + r and using the covariance above,
E lCE(f ̄, y) = lCE(f, y)
+1
2 E (Jf ∆z)⊤Hl(Jf ∆z) + O(α4)
= lCE(f, y)
+ α2
2
m
X
i=1
v2
i Jf,i(z)⊤Hl Jf,i(z) + O(α4).
(9)
Summing (7) and (9) yields (6).
Interpretation. The second-order approximation decomposes the regularization into per-coordinate Jacobian penalties, each weighted by v2
i . Large vi (shortcut-prone coordi
nates) induce strong pressure to reduce both J⊤
f,iHlJf,i and
∥Jf,i∥22, flattening the classifier along those axes; small vi leave informative directions essentially unpenalized. Since Hl ⪰ 0, the combined penalty is non-negative and positive semidefinite.
Remarks. (i) The result extends to any zero-mean perturbation with E[∆zi∆zj] = α2v2
i δij; Gaussianity is not
essential. (ii) The O(α4) remainder follows from bounded second derivatives of fθ and lCE. (iii) Writing the penalty
Figure 3. Shortcut proxy v on CelebA (Target: blond hair, shortcut: gender). From left to right, the first column shows the original images, the next columns show latent traversals obtained by varying a single latent dimension while keeping all others fixed, and the last column shows the absolute correlation values |corr(μ(j), y)| for each latent dimension. Latent dimension z8 has a significantly higher correlation than the others, and traversing along this dimension primarily changes the shortcut-
 attribute (apparent gender) while keeping the target attribute almost fixed: images on the left appear more male-like, while images on the right appear more female-like.
as m
X
i=1
v2
i ( √12 H 1/2
l
pλconsI) Jf,i
2 2
makes the PSD structure explicit.
5. Experiments
We design a set of experiments to validate the core claims of our paper. We begin with a synthetic dataset, ColorMNIST, to provide a clear, interpretable test of our framework. Our validation is structured as a three-part argument: • First, we validate our Core Hypothesis by showing that label correlation is a reliable, unsupervised (without group labels) proxy for the visual shortcut (Section 5.2). • Second, we demonstrate that disentanglement is a necessary precondition for our method to work (S-
ection 5.3). • Third, we ablate SITAR’s key components to prove that targeted, anisotropic noise is the critical mechanism for invariance (Section 5.4).
5.1. Experimental Setup on ColorMNIST
Following [1], we construct ColorMNIST from MNIST. We first map digits to a provisional label yˆ (digits 0–4 7→ 0, and 5–9 7→ 1), then independently flip yˆ with probability
5

0 20 40 60 80 100 Epoch
0.0
0.2
0.4
0.6
0.8
1.0
Accuracy
=1
= 0.1 =1
= 1.5 =2
OOD Test Oracle
Figure 4. Ablation on the disentanglement factor β (fixed α = 1.0). OOD accuracy versus β. Low β leaves latents entangled and reduces OOD to ERM-like ∼ 10%. With β ≥ 1, the shortcut axis is isolated and OOD rises toward the oracle.
0 20 40 60 80 100 Epoch
0.0
0.2
0.4
0.6
0.8
1.0
Accuracy
=2
= 0.1
= 0.5 == 11.5
OOD Test Oracle
Figure 5. Noise magnitude controls invariance (fixed β = 2). OOD accuracy versus α. Any α > 0 improves OOD from ERM’s ∼ 10% toward ∼ 65–70%, consistent with the targeted Jacobian penalty.
pd = 0.25 to form the final label y. We introduce color by sampling a color label c from y with flip probability pc: in the in-distribution split Din we use pc = 0.1 (high correlation), and in the adversarial OOD split Dout we use pc = 0.9 (correlation is reversed). Images are colored green when c = 0 and red when c = 1. A standard ERM classifier trained on Din will exploit the 90% color shortcut and fail on Dout.
5.2. Validation: Label Correlation is a Reliable Shortcut Proxy
We first test our core hypothesis: are shortcut axes highly label-correlated in a disentangled latent space? We train a β-VAE (with β = 2) on ColorMNIST without labels and compute vi for each latent coordinate i over the training set. Figure 2 shows the result. One coordinate (z5) attains the largest correlation (v5 ≈ 0.72) and its latent traversal clearly changes the image color while preserving shape. Conversely, latents with small vi (e.g., z0, z2, z9) modulate digit shape without affecting col-
or. This perfect concordance supports our hypothesis that vi is a reliable and unsupervised proxy for shortcut identification.
5.3. Ablation: Disentanglement is a Necessary Precondition
Our method relies on the encoder providing a disentangled z. To test this, we analyze the effect of the VAE’s disentanglement factor, β. We train SITAR with varying β (fixing α = 1.0). Figure 4 shows that for small β, the latent space is entangled. As a result, the correlation v is dispersed across many coordinates rather than peaking. In this regime, SITAR is ineffective, and OOD accuracy collapses to ERM levels (∼ 10%). Once β ≥ 1, the latent axes
align, v peaks sharply on the color coordinate, the penalty from Thm. 1concentrates as intended, and OOD accuracy approaches the oracle (∼ 75%). This confirms that disentanglement is a necessary precondition for reliable shortcut detection and effective targeted intervention.
5.4. Ablation: Targeted Noise is the Critical Mechanism
Finally, we validate the two key components of SITAR objective: the noise magnitude (α) and the targeting vector (v).
0 20 40 60 80 100 Epoch
0.0
0.2
0.4
0.6
0.8
1.0
Accuracy
= 1.0, = 2.0
vi = | corr(zi, y) | vi = 1
OOD Test Oracle
Figure 6. Targeting is essential (fixed β = 2, α = 1). Isotropic noise (vi ≡ 1) gives OOD near ERM; our anisotropic, correlationweighted noise concentrates the penalty on the shortcut axis and reaches ∼ 70%.
6

Noise Magnitude (α). With a disentangled encoder (β = 2), we sweep the noise strength α. As shown in Figure 5, Very small value of α is equivalent to ERM and fails (∼ 10% OOD). Increasing the α provides OOD improvement, with performance saturating around ∼ 65–70%. This perfectly matches our theoretical analysis (Thm. 1): the classifier minimizes the full objective, and any non-zero α activates this targeted Jacobian penalty, shifting sensitivity off the high-v (shortcut) axes.
Noise Targeting (v). We compare our targeted, anisotropic noise (v = |corr(μ, y)|) against a standard isotropic noise baseline (i.e., setting vi ≡ 1 for all i). An isotropic penalty flattens useful and spurious directions alike. As shown in Figure 6, this untargeted baseline fails to improve OOD performance. Our anisotropic variant, however, concentrates the regularization only where v is large, successfully flattens the classifier along the shortcut axis, and reaches near-oracle OOD accuracy. Thi-
s confirms that targeting is the critical mechanism for success.
5.5. Validation on Real-World Benchmarks
To demonstrate that SITAR scales beyond simple, synthetic data, we evaluate it on two standard, real-world shortcut learning benchmarks: CelebA [12] and Waterbirds [19].
Majority-only training regime. Let Y ∈ {0, 1} denote the core target (e.g., Blond) and S ∈ {0, 1} the spurious attribute (e.g., Gender). Standard benchmarks contain all four (Y, S) groups, including anti-correlated minorities (Y = 1, S = 0) and (Y = 0, S = 1). Following the stricter setup of [16], we construct the training set to include only the two majority, correlated groups. For example, in Waterbirds, Dtrain contains only landbirds on land (Y = 0, S = 0) and waterbirds on water (Y = 1, S = 1)-
; the minority groups landbird on water (Y = 0, S = 1) and waterbird on land (Y = 1, S = 0) are entirely held out from training. Consequently,
P(Y = S | Dtrain) = 1 and corr(Y, S | Dtrain) = 1,
i.e., within the training distribution the shortcut S is a perfect predictor of Y . A classifier can therefore attain 100% training accuracy by implementing the rule f (x) = S(x) while ignoring core features. This regime yields a rigorous stress test of shortcut invariance: success requires maintaining performance on the held-out minority groups where the shortcut is broken. (Domain/group labels are used only to form the split and are never provided to the model during training or selection.)
5.6. Baselines and Metrics
We compare SITAR against a suite of strong baselines and prior work:
• ERM: A standard classifier trained with Empirical Risk Minimization. • JTT [11]: Just Train Twice, a strong baseline that reweights the data based on a first-pass ERM model’s failures. • LfF [15]: Learning from Failure, a similar re-weighting method that focuses on misclassified examples. • Chroma-VAE [21]: A direct and powerful competitor that, like our method, uses a VAE. However, it follows the robust representation paradigm, explicitly partitioning the latent space and training a classifier -
only on the core components. We report two standard metrics: Micro Avg (%) (standard overall accuracy) and Worst-Group (%) (the accuracy on the most difficult, minority data group). Worst-Group accuracy is the primary metric for OOD robustness, as it directly measures how well the model performs when the shortcut is broken.
5.7. Datasets
We use three standard tasks where the shortcut is a highdimensional, natural signal: • CelebA (Blond/Gender): The task is to predict if a person is Blond (target). The dataset is spuriously correlated with Gender (shortcut), as most blond individuals are female.
• CelebA (Attractive/Smiling): The task is to predict if a person is Attractive (target), which is spuriously correlated with Smiling (shortcut). • Waterbirds: The task is to classify the bird type (Waterbird vs. Landbird). The shortcut is the background, as most training images show waterbirds on water and landbirds on land. Complete implementation details in provided in the appendix.
5.8. Results and Analysis
Table 1 reports mean ± std over seeds. On the primary metric, Worst-Group accuracy, SITAR attains the best performance across all three benchmarks. On CelebA (Blond/Gender), SITAR reaches 58.88%, exceeding the next-best method (Chroma-VAE) by about +4 points. On CelebA (Attractive/Smiling), SITAR achieves 60.95%, again outperforming Chroma-VAE by roughly +7 points. The gap is largest on Waterbirds: SITAR obtains 31% WorstGroup accuracy, whereas ERM, JTT, and LfF remain in the 18–23% range. These r-
esults are consistent with the mechanism: enforcing functional invariance along correlationidentified axes reduces reliance on shortcuts and preserves performance when the shortcut is broken. Further groupwise results are given in the appendix. Chroma-VAE follows a robust representation paradigm, explicitly partitioning the latent space prior to classification,
7

Table 1. Results on CelebA (Blond/Gender, Attractive/Smiling) and Waterbirds dataset averaged over 3 seeds.
Method CelebA (Blond/Gender) CelebA (Attractive/Smiling) Waterbirds
Micro Avg (%) Worst-Group (%) Micro Avg (%) Worst-Group (%) Micro Avg (%) Worst-Group (%)
ERM 64.20 ± 2.44 27.51 ± 4.29 54.42 ± 0.22 15.29 ± 1.26 56.81 ± 0.93 23.85 ± 2.14 JTT 64.69 ± 1.48 26.25 ± 0.90 54.36 ± 0.56 20.91 ± 3.06 62.27 ± 9.25 18.75 ± 6.61 LfF 62.10 ± 0.86 25.31 ± 1.74 53.01 ± 1.99 15.49 ± 1.89 57.76 ± 3.49 22.15 ± 3.60 Chroma-VAE 82.00 ± 0.00 54.40 ± 0.00 66.90 ± 0.00 53.10 ± 0.00 70.46 ± 0.81 11.21 ± 2.66
SITAR 81.13 ± 1.30 58.88 ± 2.45 63.62 ± 0.38 60.95 ± 1.67 57.13 ± 0.33 31.04 ± 1.75
whereas SITAR enforces functional invariance on the classifier. Chroma-VAE is competitive on both CelebA tasks (second-best Worst-Group accuracy) but degrades on Waterbirds, where the shortcut (background) is complex and entangled: its Worst-Group accuracy drops to 11.21%, below ERM. This pattern supports our hypothesis that explicit latent partitioning is brittle in the presence of highdimensional shortcuts, while correlation-weighted functional invariance avoids the need to perfectly separate fa-
ctors. While some baselines attain slightly higher Micro Avg. accuracy, this largely reflects overfitting to majority groups. In contrast, SITAR trades this marginal gain in average accuracy for substantial gains in Worst-Group performance, particularly on Waterbirds. This trade-off is expected and well known for methods emphasizing broader distributional invariance [11, 16] and it indicates a successful shift from shortcut cues to core, task-relevant features.
5.9. Results on a Medical Imaging Benchmark
To test the robustness and applicability of the SITAR framework beyond natural images, we conduct a final validation on the Camelyon17-WILDS [2] benchmark. This dataset provides a fundamentally different challenge: 1. New Domain: The task is medical, requiring the identification of tumor tissue from histopathology slides, a domain with vastly different low-level statistics. 2. New Shortcut Type: The shortcut is not a semantic object (e.g. background) but a process-based domain artifact. Images com-
e from different hospitals, and the hospital of origin (the shortcut S) is spuriously correlated with the label Y . This manifests as subtle, non-semantic variations in staining and scanner calibration. Setup and Results. The Camelyon17-WILDS benchmark provides a training set (from 3 hospitals) and two test sets: an in-distribution (ID Val) set from the same 3 hospitals, and an out-of-distribution (OOD) set from 2 novel, unseen hospitals. We report the accuracy on the OOD set as the primary metric-
 for robustness. As shown in Table 2, SITAR again demonstrates a clear and significant advantage. SITAR again, significantly outperforming other baselines. This result is a powerful validation of our framework’s applicability. It proves that SITAR is not over-fit
Method Camelyon
In-Dist (%) OOD (%)
ERM 95.59 ± 0.08 81.63 ± 0.63 JTT 94.71 ± 0.71 81.78 ± 2.53 LfF 95.40 ± 0.25 80.77 ± 1.43 Chroma-VAE 82.64 ± 1.41 74.45 ± 0.65
SITAR 95.41 ± 0.61 83.26 ± 2.13
Table 2. Results on Camelyon17-WILDS, a medical imaging benchmark where the shortcut is the hospital of origin.
to natural image statistics. The correlation proxy vi was successfully and automatically identifies the subtle, artifactbased shortcut introduced by the hospitals, and the targeted Jacobian penalty (Thm. 1) successfully flattened the classifier’s response to it. This ability to handle different domains (natural vs. medical) and different shortcut types (semantic vs. process-based) underscores the robustness of the functional invariance framework.
6. Conclusion
We propose SITAR, a simple and effective framework for shortcut robustness that learns a robust function rather than a brittle representation. Our core insight is that a simple, unsupervised proxy, vi = |corr(μ( i ), y)|, is sufficient to identify diverse shortcut axes, from semantic attributes (CelebA) to domain artifacts (Camelyon17). We show this proxy enables a targeted, anisotropic noise objective, which we prove (Thm. 1) is analytically equivalent to a principled Jacobian regularizer. This f-
unctional invariance approach achieves state-of-the-art worst-group accuracy on challenging, majority-only benchmarks. Our analysis shows that unlike complex representation-based methods, which can fail catastrophically (e.g., on Waterbirds), our simple functional approach is stable and more broadly applicable. SITAR’s primary reliance on a disentangled β-VAE is a current limitation. A natural extension of this work is to adapt the functional invariance framework to operate directly on standard, p-
re-trained encoders, which would significantly broaden its applicability.
8

References
[1] Martin Arjovsky, L ́eon Bottou, Ishaan Gulrajani, and David Lopez-Paz. Invariant risk minimization, 2020. 1, 2, 5 [2] Peter Bandi, Oscar Geessink, Quirine Manson, Marcory Van Dijk, Maschenka Balkenhol, Meyke Hermsen, Babak Ehteshami Bejnordi, Byungjae Lee, Kyunghyun Paeng, Aoxiao Zhong, et al. From detection of individual metastases to classification of lymph node status at the patient level: the camelyon17 challenge. IEEE Transactions on Medical Imaging, 2018. 8
[3] Ting-Yun Chang, Chun-Hsiao Lin, Wei Yang, Zhuoqing Li, Hongliang Li, Winston Hsu, Ying Nian Wen, and TyngLuh Chen. Towards robust classification model by counterfactual and invariant data generation. In Proceedings of the IEEE/CVF Conference on Computer Vision and Pattern Recognition (CVPR), pages 1301–1310, 2021. 2 [4] Robert Geirhos, Jo ̈rn-Henrik Jacobsen, Claudio Michaelis, Richard Zemel, Wieland Brendel, Matthias Bethge, and Felix A. Wichmann. Shortcut learning in deep neural networks. Na-
ture Machine Intelligence, 2(11):665–673, 2020. 1, 2
[5] Robert Geirhos, Patricia Rubisch, Claudio Michaelis, Matthias Bethge, Felix A. Wichmann, and Wieland Brendel. Imagenet-trained cnns are biased towards texture; increasing shape bias improves accuracy and robustness, 2022. 1 [6] Irina Higgins, Loic Matthey, Arka Pal, Christopher Burgess, Xavier Glorot, Matthew Botvinick, Shakir Mohamed, and Alexander Lerchner. beta-VAE: Learning basic visual concepts with a constrained variational framework. In International Conference on Learning Representatio-
ns, 2017. 2, 3 [7] Hyunjik Kim and Andriy Mnih. Disentangling by factorising. In ICML, 2018. 2 [8] David Krueger, Ethan Caballero, Joern-Henrik Jacobsen, Amy Zhang, Jonathan Binas, Dinghuai Zhang, Remi Le Priol, and Aaron Courville. Out-of-distribution generalization via risk extrapolation (rex), 2021. 2 [9] Yilun Li, Xinyu Liu, Jiayi Gu, Aditya Sinha, L ́eon Bottou, and David Lopez-Paz. Generative classifiers avoid shortcut solutions. In ICLR, 2025. 3 [10] Jongin Lim, Youngdong Kim, Byungjai Kim,-
 Chanho Ahn, Jinwoo Shin, Eunho Yang, and Seungju Han. Biasadv: Biasadversarial augmentation for model debiasing. In Proceedings of the IEEE/CVF Conference on Computer Vision and Pattern Recognition (CVPR), pages 3832–3841, 2023. 2
[11] Evan Zheran Liu, Behzad Haghgoo, Annie S. Chen, Aditi Raghunathan, Pang Wei Koh, Shiori Sagawa, Percy Liang, and Chelsea Finn. Just train twice: Improving group robustness without training group information, 2021. 2, 7, 8 [12] Ziwei Liu, Ping Luo, Xiaogang Wang, and Xiaoou Tang. Deep learning face attributes in the wild. In Proceedings of International Conference on Computer Vision (ICCV), 2015. 7
[13] Pietro Morerio, Ruggero Ragonesi, and Vittorio Murino. Model debiasing by learnable data augmentation. arXiv preprint arXiv:2408.04955, 2024. 2
[14] Nicolas M. M ̈uller, Simon Roschmann, Shahbaz Khan, Philip Sperl, and Konstantin Bo ̈ttinger. Shortcut de
tection with variational autoencoders. arXiv preprint arXiv:2302.04246, 2023. 2
[15] Junhyun Nam, Hyuntak Cha, Sungsoo Ahn, Jaeho Lee, and Jinwoo Shin. Learning from failure: Training debiased classifier from biased classifier, 2020. 2, 7 [16] Shiori Sagawa, Pang Wei Koh, Tatsunori B. Hashimoto, and Percy Liang. Distributionally robust neural networks for group shifts: On the importance of regularization for worstcase generalization, 2020. 2, 7, 8 [17] Luca Scimeca, Jianyu Fan, Mengting Du, Ching-Yao Chen, Insu Lee, and Marco Tulio Ribeiro. Mitigating shortcut learning with d-
iffusion counterfactuals and diverse ensembles. arXiv preprint arXiv:2311.16176, 2023. 3 [18] Vladimir N. Vapnik. The nature of statistical learning theory. Springer-Verlag, Berlin, Heidelberg, 1995. 1 [19] C. Wah, S. Branson, P. Welinder, P. Perona, and S. Belongie. Caltech-ucsd birds-200-2011. Technical Report CNS-TR2011-001, California Institute of Technology, 2011. 7 [20] Zejiang Weng, Chengyue Zhang, Armin Eftekhar, Hong Zhang, and Ying Li. Fast diffusion-based counterfactuals for shortcut re-
moval and generation. In ECCV, 2024. 3 [21] Wanqian Yang, Polina Kirichenko, Micah Goldblum, and Andrew G Wilson. Chroma-vae: Mitigating shortcut learning with generative classifiers. Advances in Neural Information Processing Systems, 35:20351–20365, 2022. 1, 2, 7
9

Appendix
7. Datasets and Preprocessing
For all the datasets (CelebA, Waterbirds, and Camelyon17), we resize images to 64 × 64 resolution and do not apply any data augmentation. All baseline methods are also trained under exactly the same preprocessing and resolution.
CelebA (Attractive / Smiling). We consider target label Attractive (Not Attractive vs. Attractive) and shortcut label Smiling (Not Smiling vs. Smiling). The train and validation splits contain only the two majority groups Not Attractive, Smiling and Attractive, Not Smiling, while the OOD test split contains all four combinations. Table 3 shows the exact statistics.
Split Target Group counts Class count
Not smiling Smiling
Train Not attractive 0 31,956 31,956
Attractive 37,479 0 37,479
Val Not attractive 0 3,780 3,780
Attractive 4,510 0 4,510
Test (OOD) Not attractive 5,668 4,396 10,064
Attractive 4,307 5,591 9,898
Table 3. CelebA Attractive / Smiling statistics per split.
CelebA (Blond Hair / Male). Here the target label is Blond Hair (Not Blond Hair vs. Blond Hair), and shortcut label is Gender (Female vs. Male). The train and validation splits contain only the two majority groups Not Blond Hair, Male and Blond Hair, Female, while the OOD test split contains all four combinations. Table 4 shows the exact statistics.
Split Target Group counts Class count
Female Male
Train Not blond 0 66,874 66,874
Blond 22,880 0 22,880
Val Not blond 0 8,276 8,276
Blond 2,874 0 2,874
Test (OOD) Not blond 9,767 7,535 17,302
Blond 2,480 180 2,660
Table 4. CelebA Blond Hair / Gender statistics per split.
Waterbirds. For Waterbirds, the target label is bird type (Landbird vs. Waterbird) and the shortcut label is background (Land vs. Water). Train and validation split contain only the majority groups (Landbird, Land and Waterbird, Water) The OOD test split contains all four groups, as summarized in Table 5.
Split Target Group counts Class count
Land Water
Train Landbird 3,498 0 3,498
Waterbird 0 1,057 1,057
Val Landbird 467 0 467
Waterbird 0 133 133
Test (OOD) Landbird 2,255 2,255 4,510
Waterbird 642 642 1,284
Table 5. Waterbirds statistics per split.
8. Implementation details
β-VAE architecture. We use the same convolutional βVAE backbone across all datasets, with latent dimension d. The encoder takes a 3 × 64 × 64 RGB image and applies four convolutional layers with kernel size 4, stride 2, and padding 1, each followed by ReLU, 3 → 32 → 32 → 64 → 128, which reduces the spatial resolution from 64 × 64 to 4×4. The resulting 4 ×4×128 feature map is flattened into 2048 dimension and mapped to the mean μ ∈ Rd and logvariance log σ2 ∈ Rd of the latent Gaussian via two separ-
ate MLP heads. The decoder mirrors the encoder with four transposed convolutional layers. We train this backbone as a β-VAE with per-pixel mean squared error reconstruction loss and a KL divergence term. For the CMNIST dataset, we use a much simpler VAE with just 2 layer CNN encoder and decoder.
Classifier. On top of the latent representation we attach a small MLP classifier. The classifier consists of a fully connected layer with 128 hidden units and ReLU activation, followed by a final linear layer to C logits.
Hyper-parameters and Model selection. SITAR has 3 main hyper-parameters to be tuned α noise-strength coefficient, β (KL-div weighting coefficient) and λcons (consistency loss weighting coefficient). Changing the value of α, β and λ directly affect the in-distribution accuracy, thus a validation set (subset of training set without any group labels) can be used to tune these hyperparameter. Table
10

6 shows the values of hyperparameter used in the experiments. We used the class-balanced accuracy in validation set as a metric for model selection.
1
2 def corr(X, y, eps = 1e-8): 3 # Center features and label 4 Xc = X - X.mean(dim=0, keepdim=True) 5 yc = y - y.mean()
6
7 # Covariance and variances 8 cov_xy = (Xc * yc[:, None]).mean(dim=0) 9 var_x = (Xc ** 2).mean(dim=0) 10 var_y = (yc ** 2).mean()
11
12 # Pearson correlation per dimension 13 r = cov_xy / (var_x.clamp_min(eps).sqrt() * 14 (var_y + eps).sqrt())
15
16 return r.abs()
Datasets latent dim (d) α β λcons
CelebA 10 0.1 2.0 10.0 Waterbirds 32 0.01 2.0 10.0 Camelyon17 10 0.1 2.0 50.0 CMNIST 10 1.0 2.0 10.0
Table 6. Hyperparameter used in the experiments.
9. Additional Results
Table 7 reports in-distribution and OOD accuracy on CMNIST. ERM achieves high accuracy on the training distribution but fails catastrophically under the OOD shift, while JTT improve robustness at the cost of in-distribution performance. Chroma-VAE and SITAR both approach the Oracle in terms of OOD accuracy, while maintaining competitive in-distribution accuracy.
Ablation on λcons. The overall SITAR objective in Eq. 4 uses λcons to weight the consistency term. We ablate this hyperparameter on CMNIST while fixing α = 1 and
Method CMNIST
In-Dist (%) OOD (%)
Oracle 75.0 75.0
ERM 89.7 10.3 JTT 63.2 63.8 Chroma-VAE 72.5 72.4
SITAR 71.8 72.5
Table 7. Results on CMNIST.
0 20 40 60 80 100 Epoch
0.0
0.2
0.4
0.6
0.8
1.0
Accuracy
= 1, = 2
== 00.01
= 0.1
=== 1510
OOD Test Oracle
Figure 7. λcons ablation on CMNIST dataset.
Input ERM SITAR
Figure 8. Grad-CAM visualizations on a CelebA Blond/Gender
β = 2. Figure 7 reports OOD and test accuracies for λcons ∈ {0, 0.01, 0.1, 1, 5, 10}. For λcons = 0 the method behave like ERM even though α and β are non-zero. Very small values (0.01, 0.1) yield only modest gains and converge slowly, whereas larger values (1, 5, 10) lead to both faster convergence and substantially higher OOD accuracy, approaching the oracle performance. This trend is consistent with our theoretical analysis in Theorem 1, increasing λcons strengthens the induced Jacobian-norm re-
gularization, which pushes the classifier towards shortcut-invariant solutions and makes the consistency term essential for SITAR.
GradCam Visualization. Figure 8 compares GradCAM visualizations for ERM and SITAR on a CelebA Blond/Gender OOD example. ERM concentrates most of its attention on the central face region, which is informative for the shortcut gender but only weakly related to the Blond target. In contrast, SITAR shifts its attention towards the hair region, which is directly relevant for predicting Blond vs. Not blond. This qualitative behavior matches our quantitative results. SITAR suppresses shortcut cues and in-
stead relies on features aligned with the target label.
11

---

## Processing Information

- **Processing Library:** Zotero PDFWorker
- **Processing Date:** 2026-02-10T18:17:34.967Z
- **Text Length:** 42939 characters
- **Success:** Text extraction completed
- **PDF Library Used:** Zotero PDFWorker
- **Pages Processed:** 11 of 11
