# PDF Document: Braun et al. - 2025 - Fast Escape, Slow Convergence Learning Dynamics of Phase Retrieval under Power-Law Data.pdf

**File Path:** Braun et al. - 2025 - Fast Escape, Slow Convergence Learning Dynamics of Phase Retrieval under Power-Law Data.pdf

**Processed Date:** 2026-02-10T18:15:23.560Z

**File Size:** 1566.14 KB

**Total Pages:** 46

**Extracted Pages:** 46

**PDF Library:** Zotero PDFWorker

**Attachment Item ID:** 3391

**Title:** Fast Escape, Slow Convergence: Learning Dynamics of Phase Retrieval under Power-Law Data

**Collection:** Large Files > Random Papers

---

## Extracted Text Content

Fast Escape, Slow Convergence: Learning Dynamics of Phase Retrieval
under Power-Law Data
Guillaume Braun RIKEN AIP
Bruno Loureiro
E ́cole Normale Sup ́erieure, PSL & CNRS
Ha Quang Minh RIKEN AIP
Masaaki Imaizumi University of Tokyo, RIKEN AIP
Abstract
Scaling laws describe how learning performance improves with data, compute, or training time, and have become a central theme in modern deep learning. We study this phenomenon in a canonical nonlinear model: phase retrieval with anisotropic Gaussian inputs whose covariance spectrum follows a power law. Unlike the isotropic case, where dynamics collapse to a two-dimensional system, anisotropy yields a qualitatively new regime in which an infinite hierarchy of coupled equations governs the evolution-
 of the summary statistics. We develop a tractable reduction that reveals a three-phase trajectory: (i) fast escape from low alignment, (ii) slow convergence of the summary statistics, and (iii) spectral-tail learning in low-variance directions. From this decomposition, we derive explicit scaling laws for the mean-squared error, showing how spectral decay dictates convergence times and error curves. Experiments confirm the predicted phases and exponents. These results provide the first rigorous ch-
aracterization of scaling laws in nonlinear regression with anisotropic data, highlighting how anisotropy reshapes learning dynamics.
1 Introduction
Scaling laws quantify how the performance of a learning algorithm varies with resources such as training time, dataset size, or model capacity. Empirically, losses often follow simple power laws across wide ranges of data and computation, enabling forecasting from a handful of measurements [Hestness et al., 2017, Kaplan et al., 2020, Hoffmann et al., 2022]. These regularities naturally raise the fundamental question: when and how do such laws emerge from first principles?
Despite their central role in modern deep learning practice, neural scaling laws remain theoretically poorly understood. A notable exception is provided by linear models, where the scaling of the generalization error has been thoroughly analysed within the classical kernel literature, encompassing both ridge regression [Caponnetto and De Vito, 2007, Rudi and Rosasco, 2017] and stochastic gradient descent [Yao et al., 2007, Ying and Pontil, 2008, Carratino et al., 2018, Pillaud-Vivien et al., 2018,-
 Kunstner and Bach, 2025]. Recent developments in this direction, driven by the empirical observations of cross-overs and bottlenecks in the context of neural networks, demonstrate that analogous phenomena are already present in linear settings [Cui et al., 2021, Defilippis et al., 2024, Bahri et al., 2024, Maloney et al., 2022, Atanasov et al., 2024, Paquette et al., 2024, Bordelon et al., 2024, Lin et al., 2024]. By contrast, nonlinear settings, ubiquitous in practice (e.g., functional data, lea-
rned feature maps, or embeddings with heavy spectral tails), remains far less understood. We address this gap in the canonical nonlinear regression problem of phase retrieval:
y = ⟨x, w⋆⟩2 + ξ, x ∼ N (0, Q),
where w⋆ ∈ Rd is the target vector, and Q has eigenvalues (λi)d
i=1 obeying a power law λi ∝ i−a with a > 1 and noise ξ. This model captures two core difficulties: (i) a nonconvex landscape, and (ii) strong anisotropy that induces highly unbalanced learning across directions.
1
arXiv:2511.18661v1 [stat.ML] 24 Nov 2025

Figure 1: Evolution of the MSE during training with online SGD for different spectral exponents a (loglog scale). For a > 1, convergence is markedly slower than the exponential decay seen in the isotropic case, reflecting the difficulty of learning directions associated with small eigenvalues.
Figure 1 illustrates this phenomenon: under the same initialization, noise level, stepsize, and optimization algorithm (SGD), the mean-square error (MSE) behaves differently depending on a. Intuitively, when a is larger, directions associated with small eigenvalues λi are harder to learn, so the MSE decays more slowly. By contrast, in isotropic designs, all directions progress at comparable rates, causing the error to drop sharply. These observations motivate our central question:
How does the input spectrum govern finite-time convergence in nonlinear regression, and can we predict the learning curve from the spectral decay?
Concretely, we seek to (i) analyze the mechanisms behind the plateau–drop structure in anisotropic phase retrieval, and (ii) derive scaling laws that quantify MSE decay as functions of the spectral parameter a and time t.
1.1 Contributions.
• New phenomena in the anisotropic case. We show that anisotropy challenges several aspects of the intuition developed in isotropic settings. In the isotropic setting, the dynamics collapse to a low-dimensional ODE, and the main challenge is escaping mediocrity , i.e. the regime where the correlation with the signal w∗ is vanishing, before convergence accelerates. Under anisotropy, by contrast, the dynamics form an infinite hierarchy of coupled equations. This structural change flips the qualitati-
ve behavior, yielding a escape-convergence trade-off : escaping from mediocrity can be faster, but convergence to a low MSE is slowed by the difficulty of learning directions associated with small eigenvalues, as illustrated by Figure 1 (a large a is associated with a slow decay of the MSE) and Figure 3 (a large a leads quickly to constant order correlation with the signal). Numerical experiments confirm this phase-level contrast between isotropic and anisotropic regimes.
• Analytical framework. We first obtain a closed-form representation of the dynamics via Duhamel’s formula. We then introduce a phase decomposition of the trajectory, isolating regimes where different approximations become valid. This allows us to analyze the qualitative behavior of the ODE hierarchy phase by phase: (i) fast escape from mediocrity, (ii) macroscopic convergence of summary statistics, and
2

(iii) spectral-tail learning of small-eigenvalue directions. The combination of Duhamel representation and phase-specific approximations provides a systematic way to make infinite-dimensional dynamics tractable.
• Scaling laws. As a byproduct of this analysis, we derive explicit scaling laws for anisotropic phase retrieval. These formulas quantify how the eigenvalue decay governs the MSE. Numerical results corroborate the predicted exponents across different spectral profiles.
1.2 Other related work
Theory of scaling laws. The study of risk scaling in problems with power-law structure is a classical theme in the kernel literature, where it falls under the framework of source and capacity conditions. It has been extensively investigated for kernel ridge regression [Caponnetto and De Vito, 2007, Cui et al., 2021], random features regression [Rudi and Rosasco, 2017, Defilippis et al., 2024], and also for (S)GD [Yao et al., 2007, Ying and Pontil, 2008, Carratino et al., 2018, Pillaud-Vivien et al-
., 2018]. This line of work has recently gained renewed relevance in the context of neural scaling laws, with linear models emerging as theoretical testbeds to explain the plateaux and cross-overs observed in practice [Bahri et al., 2024, Maloney et al., 2022, Atanasov et al., 2024, Bordelon et al., 2024, Worschech and Rosenow, 2024, Paquette et al., 2024, Lin et al., 2024]. More recently, Wortsman and Loureiro [2025] have investigated kernel ridge regression under anisotropic power-law inputs, sh-
owing that in some regimes the scaling of the covariates transfer to the features. Sums of orthogonal single-index models have been analysed in the feature-learning regime, albeit still under isotropic input distributions [Ren et al., 2025, Ben Arous et al., 2025, Defilippis et al., 2025]. In short, while the linear setting with anisotropic spectra (e.g. powerlaw decays) is by now well understood, the nonlinear regime has remained largely isotropic. Our work addresses this gap by deriving compute–-
error scaling laws in a nonlinear model with anisotropic Gaussian inputs.
Phase retrieval and quadratic neural networks. Phase retrieval (PR) is a classical inverse problem motivated by imaging: reconstruct a signal from intensity-only measurements; see Dong et al. [2023] for a recent tutorial. A rich algorithmic literature includes spectral initializations and nonconvex Wirtinger-flow refinements [Ma et al., 2021, Cande`s et al., 2015, Tan and Vershynin, 2019, 2023, Davis et al., 2020]. PR can be viewed as learning a single neuron with a quadratic activation, connectin-
g it to the broader theory of quadratic networks and their training dynamics [Sarao Mannelli et al., 2020, Arnaboldi et al., 2023a, Martin et al., 2024, Erba et al., 2025]. In this context, Ben Arous et al. [2025] have studied scaling laws for one-pass SGD and Defilippis et al. [2025] for full-batch ERM, in a quadratic net model where the target coefficients follow a power-law. Most theoretical analyses of PR assume isotropic sub-Gaussian measurements; the impact of anisotropic covariances on the -
learning curve has received less attention. Our analysis isolates precisely this aspect and quantifies how the input spectrum shapes the three-phase trajectory and the resulting scaling laws.
Non-convex optimization and feature learning. A complementary line of work studies gradient-based training in multi-index and shallow networks, characterizing feature learning, convergence phases, and computational–statistical trade-offs, predominantly under isotropic designs [Saad and Solla, 1995b,a, Goldt et al., 2019, Veiga et al., 2022, Arnaboldi et al., 2023b, 2024, Collins-Woodfin et al., 2024, Ben Arous et al., 2022, Abbe et al., 2022, 2023, Bietti et al., 2025, Dandi et al., 2024, Bruna an-
d Hsu, 2025]. Results with anisotropic inputs are more limited: some works consider spiked covariances and rely on preconditioned methods [Ba et al., 2023], while others treat a broader but weaker anisotropic regime that does not include power-law spectra [Goldt et al., 2020, Braun et al., 2025]. By contrast, we analyze the unpreconditioned gradient flow in a strongly anisotropic regime and show that anisotropy destroys
3

the finite-dimensional closure of the dynamics, leading to an infinite hierarchy whose Duhamel–Volterra reduction yields explicit scaling laws.
1.3 Notations
We use ∥·∥ and ⟨·, ·⟩ to denote the Euclidean norm and scalar product, respectively. When applied to a matrix, ∥·∥ refers to the operator norm. Any positive definite matrix Q induces a scalar product defined by ⟨x, y⟩Q = x⊤Qy. The Frobenius norm of a matrix A is denoted by ∥A∥F . The d × d identity matrix is
represented by Id. The (d − 1)-dimensional unit sphere is denoted by Sd−1. We use the notation an ≲ bn (or an ≳ bn) for sequences (an)n≥1 and (bn)n≥1 if there exists a constant C > 0 such that an ≤ Cbn (or an ≥ Cbn) for all n. If the inequalities hold only for sufficiently large n, we write an = O(bn) (or an = Ω(bn)). We denote by C∞
b (R≥0; l2) the Banach space of bounded and infinitely differentiable
functions from R≥0 to l2 := {(xn)n≥0 : P x2n < ∞}, the Hilbert space of square summable sequences.
We write ∗ for convolution, and for a function f we denote by fˆ its Laplace transform.
2 Problem Setup
Data distribution. By orthogonal invariance of the Gaussian distribution, we may assume without loss of generality that the covariance matrix is diagonal: Q = diag(λ1, . . . , λd) ∈ Rd×d. We assume a power-law spectrum,
λi = i−a
Pd
j=1 j−a , a > 1,
so that tr(Q) = 1. This assumption reflects the slow, heavy-tailed eigenvalue decay observed in many empirical covariance spectra (e.g., images, text embeddings, kernel features). From a theoretical perspective, the exponent a provides a simple parametrization of anisotropy: it controls the balance between a few dominant directions and a long tail of weak ones. It is widely used as a canonical model for scaling laws in learning dynamics. We consider the phase retrieval setting
y = ⟨x, w⋆⟩2 + ξ, x ∼ N (0, Q),
where the target weights are generated by w⋆ = u
∥Q1/2u∥ , u ∼ N (0, Id). This construction ensures that
∥Q1/2w⋆∥ = 1. For numerical experiments, we sometimes adopt the alternative normalization ∥w⋆∥2 = d, so that all curves start from the same baseline when comparing different decay exponents a; both normalizations are of constant order in expectation. The noise term ξ ∼ N (0, σ2) is independent of x. Since our analysis focuses on the population dynamics, label noise only shifts the loss by a constant and can be set to zero without loss of generality.
Model. We consider estimators of the form ⟨x, w⟩2 for w ∈ Rd and the population loss used to train our model L(w) = Ex
h
(x⊤w)2 − (x⊤w⋆)2 2i
.
However, under anisotropy, this loss can be misleading: a vector w that aligns with w⋆ only along the directions corresponding to the largest eigenvalues may still achieve a small loss. To evaluate how well w actually recovers the signal direction, a more natural metric is the MSE defined as
MSE(w, w⋆) = 1
d min ∥w − w⋆∥2, ∥w + w⋆∥2 .
4

Optimization. The learner maintains a weight vector w(t) ∈ Rd, initialized uniformly at random on the unit sphere Sd−1. Its evolution follows the gradient flow dynamics
w ̇ (t) = − ∇wL(w(t))
which can be viewed as the continuous-time counterpart of gradient descent.
3 Loss Geometry and Evolution of Summary Statistics
In this section, we describe the main characteristics of the loss landscape and establish ODEs to describe the evolution of the key summary statistics. The proofs are in the appendix, Section A. For convenience, we introduce the following notations: s := ∥w∥2
Q = w⊤Qw, s⋆ := ∥w⋆∥2
Q, and u := ⟨w, w⋆⟩Q = w⊤Qw⋆.
3.1 Loss Simplification
Although the loss is defined on a d-dimensional parameter space, it depends only on two summary statistics: ∥w∥2
Q and ⟨w, w⋆⟩2
Q. This dimensional reduction makes the geometry of the loss landscape transparent, as captured in the following proposition.
Proposition 1. Let x ∼ N (0, Q) ∈ Rd, where Q ∈ Rd×d is a symmetric positive definite diagonal matrix. Let w, w⋆ ∈ Rd. The population loss can be rewritten as
L(w) = 3∥w∥4
Q + 3∥w⋆∥4
Q − 4⟨w, w⋆⟩2
Q − 2∥w∥2
Q · ∥w⋆∥2
Q = 3s2 + 3s2
⋆ − 4u2 − 2s⋆s
Next, we compute the population gradient and characterize the critical points.
3.2 Gradient, Hessian, and critical points
Proposition 2. The population gradient and Hessian of the loss L are given by
∇L(w) = 12sQw − 4s⋆Qw − 8uQw⋆, (3.1)
∇2L(w) = 24(Qw)(Qw)⊤ + (12s − 4s⋆)Q − 8(Qw⋆)(Qw⋆)⊤. (3.2)
The set of critical points is {0, w⋆, −w⋆} ∪ {w : (u, s) = (0, s⋆/3)}. Among them, 0 is a strict local maximum, ±w⋆ are strict global minima, and every w with (u, s) = (0, s⋆/3) is a saddle point.
Remark 1. The loss landscape contains no spurious local minima: the only minima are the global optima ±w⋆. At the same time, the origin is a strict local maximum, and the remaining critical points are saddles. Nevertheless, the dynamics exhibit a long plateau phase. At initialization, one typically has u(0) ≈ d−1/2 ≈ 0. In this low-correlation regime, the gradient is small, so the iterates take a long time to escape. Even after leaving this regime, convergence remains slower than in the isotropic -
case.
Remark 2. The anisotropic gradient flow can be viewed as a Q-preconditioned version of the isotropic flow. Under the reparametrization z = Q1/2w, define the isotropic loss LI (z) = L(Q−1/2z). By the chain rule, z ̇(t) = − Q∇LI (z(t)). Thus, while the critical points coincide with those in the isotropic case, the dynamics differ substantially due to the preconditioning by Q.
3.3 Infinite-Dimensional Structure of Gradient Flow
As shown in Proposition 1, the loss depends only on the summary statistics u(t) and s(t). Controlling these two quantities already yields a faithful description of the loss trajectory. A crucial distinction, however, arises between the isotropic and anisotropic settings. In the isotropic case (Q = I), the dynamics of the loss can be expressed entirely in terms of two scalars: the signal overlap u(t) and the energy s(t). This leads to a closed, two-dimensional ODE system.
5

In contrast, as soon as Q ̸= I, the situation changes qualitatively. Proposition 3 shows that the evolution of u(t) and s(t) necessarily involves higher-order weighted overlaps,
s(k)(t) := ∥w(t)∥2
Qk , s(k)
⋆ := ∥w⋆∥2
Qk , u(k)(t) := ⟨w(t), w⋆⟩Qk ,
with the conventions s = s(1)(t), u = u(1)(t), and s⋆ = s(1)
⋆ = 1. The resulting system is an infinite hierarchy of coupled ODEs. Unlike the isotropic case, no finitedimensional closure exists: the time derivative of order-k statistics depends on order-(k+1) statistics, and so on. Understanding the anisotropic dynamics thus requires working with this infinite-dimensional structure.
Proposition 3. The gradient flow dynamics satisfy
w ̇ i(t) = 4λi s⋆ − 3s(t) wi(t) + 8λiu(t)w⋆
i , i = 1, . . . , d, (3.3)
s ̇(k)(t) = 8 (s⋆ − 3s(t)) s(k+1)(t) + 16 u(t) u(k+1)(t), (3.4)
u ̇ (k)(t) = 4 (s⋆ − 3s(t)) u(k+1)(t) + 8 u(t) s(k+1)
⋆ . (3.5)
In particular, setting k = 1 recovers the dynamics of s(t) and u(t).
3.4 Three-Phase Structure of the Dynamics
The system of ODEs from Proposition 3 involves higher-order moments, preventing a closed-form analysis as in the isotropic case. To guide our theory, we first examine the empirical evolution of the key observables u(t) and s(t); see Figure 2. The trajectories display a three-phase structure:
(i) Phase I: Escape from mediocrity, s(t) ≈ 0 (t ≤ T1). The dynamics begin near w(0) ≈ 0, with no correlation to the signal. During this “warm-up” stage, the correlation u(t) escapes exponentially from zero and reaches a small but fixed constant u(T1) = δ > 0. The overall MSE, however, remains essentially unchanged, since only a few easy directions—those aligned with large eigenvalues—have been learned so far.
(ii) Phase II: Convergence u(t), s(t) → 1 (T1 ≤ t < T2). Here, the signal alignment strengthens and the summary statistics u(t), s(t) approach their limiting values. Two distinct episodes appear:
• (IIa) Transition (T1 ≤ t ≤ T1′). The energy s(t) crosses the critical threshold 1/3 and stays above it.
• (IIb) Asymptotic convergence (T1′ < t < T2). Both u(t) and s(t) approach 1, but convergence is slower than in the isotropic case (see Section E), reflecting the difficulty of learning directions corresponding to small eigenvalues of Q (also see Section E.3).
(iii) Phase III: Spectral-tail learning u(t), s(t) ≈ 1 (t > T2). After u(t) and s(t) have essentially stabilized, the MSE continues to decrease as the flow progressively learns directions associated with the small eigenvalues of Q.
This empirical decomposition provides a roadmap for the analysis: by isolating each phase, the infinite-dimensional system becomes amenable to tractable approximations.
4 Main Results: Three-Phase Gradient Flow Dynamics
The experiments in Section 3.4 revealed a characteristic trajectory with three successive phases: (i) escape from mediocrity, (ii) convergence of the summary statistics, and (iii) spectral-tail learning. We now show that this qualitative picture admits a rigorous derivation from the gradient flow equations. The following theorems make precise the stopping times, plateau behavior, and tail-driven decay observed empirically.
6

Figure 2: Evolution of the MSE, u(t) and s(t) under population gradient descent (log-log scale). Parameters: a = 2, d = 1000, η = 10−2, T = 107, ε = 0.05.
Figure 3: Evolution of the correlation u(t) for different exponent a (d = 1000, η = 10−3).
4.1 Phase I–II: Escape and approximate convergence of the summary statistics
The next theorem formalizes escape and approximate convergence, under initialization conditions whose full statement is deferred to Appendix B (see Assumption A1).
Theorem 1 (Phases I and II). For d sufficiently large, let ε ≳ d−(a−1)/2. Under mild conditions on
7

initialization (e.g. s(0) ≍ d−1/2), there exist stopping times T1 = O(log d), T1′ = T1 + O(1), and T2 =
T1′ + O(ε−2a/(a−1) log(1/ε)) such that:
(i) There exists a constant δ > 0 such that |u(T1)|, s(T1), |u(2)(T1)| ≥ δ, and the sign of u(2)(T1) agrees with that of u(T1). (ii) There exists a constant s0 > 0 such that s(t) > 1/3 + s0 for all t ≥ T1′. (iii) At time T2, both statistics are close to their limits: |u(T2)|, s(T2) ∈ [ 1 − ε, 1 ].
Remark 3. Several features of the theorem are worth noting. • Sign symmetry. The sign of u(t) is fixed at initialization; w.l.o.g. one may assume it positive by replacing w⋆ with −w⋆. • Anisotropic vs. isotropic. In isotropic models s(0) directly controls early growth and convergence is relatively fast; in the anisotropic setting, the Volterra reduction shows that escape depends instead on a linear functional of the initialization (via residual/resolvent calculus), and convergence after escape is -
tail–controlled and slower. • Accuracy vs. time. For ε ≳ d−(a−1)/2 stabilization occurs within O(ε−2a/(a−1) log(1/ε)), while demanding ε ≪ d−(a−1)/2 leads to even higher time costs (see Phase III analysis).
Remark 4. The analysis of Phase I reveals that the u(t) grows exponentially at a rate depending on a: the convergence is faster when a is large (see Proposition 9 in the appendix, and Figure 3 for a numerical illustration).
4.2 Spectral-tail learning and Phase III
While Phases I–II describe the evolution of summary statistics (u, s), these quantities do not capture how the estimator w(t) approaches the ground truth entrywise. The mean squared error
MSE(t) = 1
d
d
X
i=1
(wi(t) − w⋆
i )2
is the natural measure of recovery: it is the quantity plotted in Fig. 1, and its log–log decay rates yield the scaling laws highlighted in the introduction. Moreover, the MSE aggregates contributions from all eigen-directions, making it the right observable to expose the effect of the spectral tail. Up to time T2, while the summary statistics are still converging, the MSE shows almost no decrease and stays essentially at its initial level. The following proposition captures this plateau behavior.
Proposition 4. Let σ⋆2 = 1
d
Pd
i=1(w⋆
i )2. Under the assumptions of Theorem 1 we have
MSE(T2) − σ2
⋆ ≲ ε−a
d
1/3
+ log d
d
1/3
.
After T2, progress is governed by coordinates aligned with the smallest eigenvalues. Let ei(t) = wi(t) − w⋆
i be the coordinate error and define πi = ei(T2)2/ P
j ej(T2)2. The weighted average Sbd(τ ) =
P
i πie−16λiτ describes the spectral decay of the error, while the uniform benchmark Sd(τ ) = d−1 P
i e−16λiτ
admits explicit asymptotics. We also set s(2)
⋆ =1
d
P
i λ2
i (w⋆
i )2, Hd,a = Pd
j=1 j−a, βd = 16/Hd,a, and
xd = (βdτ )1/a.
Theorem 2 (Phase III: spectral-tail learning). Under the assumptions of Theorem 1, the MSE satisfies for every τ ≥ 0,
MSE(T2 + τ ) = 1 + O(ε) MSE(T2) Sbd(τ ) + O ε2τ 2 1
d s(2)
⋆ . (4.1)
8

Moreover, Sbd(τ ) ≤ C Sd(τ ) for some C > 0, and Sd(τ ) admits the asymptotics
Sd(τ ) =

   
   
1 − 16
d τ + O(τ2
d ), βdτ ≪ 1,
1 − Γ(1 − 1
a ) xd
d + o( xd
d ), 1 ≪ xd ≪ d,
≤ exp(−βdτ d−a), xd ≳ d.
Thus, the plateau persists until T2, after which the MSE decays at a rate controlled by the spectral tail. The exponent a determines the slope of this decay on log–log scales, accounting for the scaling laws observed in Fig. 1.
5 Proof Outline
We briefly sketch the main ingredients of our analysis, deferring complete proofs to the appendix: Section B (Phase I), Section C (Phase II), and Section D (Phase III).
5.1 Phase I: Escape from mediocrity
In the anisotropic setting, the summary statistics (u, s) do not form a closed system; instead, they are coupled to an infinite hierarchy of correlations. Our strategy is to lift the dynamics to an infinitedimensional space, solve the system there, and then project back to obtain a closed Volterra representation for u(t), which we can analyze directly.
Step 1: Infinite-dimensional formulation. The core difficulty is the infinite hierarchy of coupled correlations. To tame it, we collect them into the vector U (t) = (u(1)(t), u(2)(t), . . . )⊤ ∈ H := C∞
b (R≥0; l2).
Let B be the right-shift operator on sequences, defined by (Bx)k := xk+1 and let S := (Bs⋆∞) e1⊤ be a
rank one operator with s⋆∞ = (s(1)
⋆ , s(2)
⋆ , . . . )⊤ ∈ l2 and e1 = (1, 0, 0, . . . )⊤. Then the correlation dynamics (3.5) collapse into the compact operator form
U ̇ (t) = 4 1 − 3s(t) B + 8S U (t). (5.1)
This is the key structural observation: the entire infinite system is generated by the shift operator B plus a rank-one perturbation S. Applying Duhamel’s formula yields the following representation.
Lemma 1. The unique solution U ∈ C∞
b (R≥0; l2) of (5.1) satisfies, for all t ≥ 0,
U (t) = e 4B Θ(t) U0 + 8
Zt
0
e 4B (Θ(t)−Θ(τ )) (Bs∞
⋆ ) u(1)(τ ) dτ, (5.2)
where u(1)(τ ) := ⟨e1, U (τ )⟩ = u(t), and Θ(t) := R t
0 (1 − 3s(τ )) dτ.
Step 2: Reduction to a Volterra equation. Let δ > 0 be arbitrarily small, and let T1 denote the stopping time such that s(t) ≤ δ for all t ≤ T1. On this time interval we may approximate Θ(t) ≈ t. Projecting the representation (5.2) onto e1 then yields the Volterra equation
u(t) = a0(t) + 8
Zt
0
K(t − τ ) u(τ ) dτ, (5.3)
where
a0(t) =
X
i
wi(0)w⋆
i λi e4λit, K(t) =
X
i
(w⋆
i )2λ2
i e4λit.
9

Applying the Laplace transform gives uˆ(p) = aˆ0(p)
1−8Kˆ (p) . The growth of u(t) is therefore governed by the
rightmost pole of uˆ(p) (see Section B and Chapter VII of Gripenberg et al. [1990]). Computing Kˆ (p) and solving the equation 1 = 8Kˆ (p) yields the following.
Lemma 2 (Exponential growth rate). The correlation u(t) grows at rate eρtruet, where ρtrue > 4λ1 is the unique positive solution of
1 − 8Kb (ρ) = 0.
Step 3: Control of the higher-order correlations. A similar analysis shows that the influence of all higher-order terms is dominated by the leading mode u(t). Without loss of generality, we assume that u(t) grows positively (the case of negative growth is analogous). The key point is that at time T1, the second correlation u(2)(T1) has the same sign as u(T1), a fact that will be critical in the analysis of Phase IIa.
Proposition 5 (Control of higher-order correlations). For all k ≥ 1 and all t ∈ [0, T1], we have
− λk
1
q
log d
d e4λ1t + 8 s(k)
⋆
Zt
0
u(τ ) dτ ≤ u(k)(t) ≤ λk
1
q
log d
d e4λ1t + λ k−1
1 u(t) − u(0) . (5.4)
In particular, for d sufficiently large there exists a constant c1 > 0 such that u(2)(T1) ≥ c1.
5.2 Phase II: Convergence of summary statistics
Since the proof techniques differ, we separate the analysis of Phase IIa and Phase IIb.
5.2.1 Analysis of Phase IIa
The first step is to show that s(t), which at time T1 is still small (s(T1) = δ′2), must increase up to the critical threshold 1/3. Indeed, from
s ̇(t) = 8 1 − 3s(t) s(2)(t) + 16 u(t)u(2)(t),
both terms on the right-hand side are positive whenever s(t) ≤ 1/3, so s(t) is driven upward and crosses 1/3 in finite time. The second step establishes stability beyond the threshold : once s(t) has passed 1/3, it cannot fall back below. Close to the boundary, the positive contribution 16u(t)u(2)(t) dominates the negative drift from the first term. A careful comparison shows that s(t) remains uniformly above 1/3 + δ for some constant δ > 0. The detailed proof of these two points is given in Secti-
on C.1.
5.2.2 Analysis of Phase IIb
We now study the error ∆(t) := 1 − u(t) ≥ 0 for t ≥ T1′ through the Volterra equation
∆(t) = bΘ(t) +
Zt
T′
1
KΘ(t, τ ) ∆(τ ) dτ,
where the source term bΘ is detailed in Appendix C.2. Since after T1′ we have Θ(t) − Θ(τ ) ≤ −s0(t − τ ), the kernel KΘ is decreasing, so the integral contribution diminishes over time. To control the positive part of bΘ, we split the spectrum at a cutoff λc: directions with λi < λc form the tail, which is small but slow to learn, while λi ≥ λc form the head, easier but requiring more training time when λc is small. Balancing these two effects yields the following result.
10

Proposition 6. Let ε ≳ d− a−1
2 , and set
T2(ε) = T ′
1+ C
4s0
ε− 2a
a−1 log 1
ε,
with C > 0 sufficiently large. Then ∆(T2) ≤ ε.
Remark 5. The condition ε ≳ d− a−1
2 prevents ε from being too small. Otherwise the required time becomes much larger; for instance, ε = d−1 already forces T ≳ da. Note that the exponent 2a
a−1 decreases as a increases, so T2(ε) is shorter for faster spectral decay. Intuitively, for larger a, the lighter tail means fewer small eigenvalues to learn, so the error contracts more rapidly. In contrast, for a close to 1 the heavy tail creates many slow directions, delaying convergence. This trend is confirmed numerically in Section E.
5.3 Phase III: Spectral-tail learning and the scaling law
After T2, both u(t) and s(t) are close to one, so the coordinate dynamics reduce to
w ̇ i(t) ≈ 8λi w⋆
i − wi(t) ,
whose solution shows exponential relaxation of each wi toward w⋆
i . The resulting MSE is a weighted spec
tral average Sbd(τ ); under the heuristic πi ≈ d−1, this reduces to the benchmark Sd(τ ), whose asymptotics follow from classical sum–integral comparisons and reveal distinct decay regimes. The approximation error is controlled by a Duhamel (variation-of-constants) representation, together with Phase IIb bounds on 1 − u(t) and 1 − s(t). A Gr ̈onwall argument shows that these corrections remain small, so the full trajectory closely tracks the idealized one. Altogether, this yields the scaling law o-
f Theorem 2, see Section E.1 for an illustration of the approximation.
6 Discussion
Summary. We analyzed the gradient flow dynamics of anisotropic phase retrieval. Unlike the isotropic case, which reduces to a two-dimensional ODE, the anisotropic setting induces an infinite hierarchy of coupled equations. Our main contribution is to render this structure tractable via a Duhamel–Volterra reduction, revealing a three-phase trajectory: (i) escape from mediocrity, (ii) convergence of summary statistics, and (iii) spectral-tail learning driven by small eigenvalues. This decomposition -
leads to explicit scaling laws, validated empirically.
Limitations. Our analysis assumes Gaussian inputs with a power-law spectrum, simplifying the theory, but this may not be essential for the three-phase phenomenon. In addition, our quantitative results apply only in the gradient flow limit; extending them to discrete-time SGD remains an open problem.
Future directions. Several extensions are natural. On the theoretical side, deriving scaling laws for discrete-time SGD, analyzing finite-sample effects, and relaxing distributional assumptions would strengthen the link to practice. On the modeling side, extending beyond quadratic nonlinearities to more general single- and multi-index models could reveal new scaling regimes. More broadly, our findings raise the question of whether analogous phase decompositions and scaling laws govern the training-
 dynamics of wider neural networks, potentially offering a bridge between nonlinear regression models and deep learning theory.
11

Acknowledgements
We would like to thank Elisabetta Cornacchia, Florent Krzakala, Gabriele Sicuro, Simone Maria Giancola and Urte Adomaityte for insightful discussions. BL acknowledges funding from the French government, managed by the National Research Agency (ANR), under the France 2030 program with the reference ”ANR-23-IACL-0008” and the Choose France - CNRS AI Rising Talents program. MI was supported by JSPS KAKENHI (24K02904), JST CREST (JPMJCR21D2), JST FOREST (JPMJFR216I), and JST BOOST (JPMJBY24A9).
12

References
E. Abbe, E. B. Adsera, and T. Misiakiewicz. The merged-staircase property: a necessary and nearly sufficient condition for sgd learning of sparse functions on two-layer neural networks. In Conference on Learning Theory, pages 4782–4887. PMLR, 2022.
E. Abbe, E. B. Adsera, and T. Misiakiewicz. Sgd learning on neural networks: leap complexity and saddleto-saddle dynamics. In The Thirty Sixth Annual Conference on Learning Theory, pages 2552–2623. PMLR, 2023.
L. Arnaboldi, F. Krzakala, B. Loureiro, and L. Stephan. Escaping mediocrity: how two-layer networks learn hard generalized linear models with sgd. arXiv preprint arXiv:2305.18502, 2023a.
L. Arnaboldi, L. Stephan, F. Krzakala, and B. Loureiro. From high-dimensional & mean-field dynamics to dimensionless odes: A unifying approach to sgd in two-layers networks. In The Thirty Sixth Annual Conference on Learning Theory, pages 1199–1227. PMLR, 2023b.
L. Arnaboldi, Y. Dandi, F. Krzakala, L. Pesce, and L. Stephan. Repetita iuvant: Data repetition allows sgd to learn high-dimensional multi-index functions. arXiv preprint arXiv:2405.15459, 2024.
A. Atanasov, J. A. Zavatone-Veth, and C. Pehlevan. Scaling and renormalization in high-dimensional regression. arXiv preprint arXiv:2405.00592, 2024.
J. Ba, M. A. Erdogdu, T. Suzuki, Z. Wang, and D. Wu. Learning in the presence of low-dimensional structure: A spiked random matrix perspective. In Thirty-seventh Conference on Neural Information Processing Systems, 2023.
Y. Bahri, E. Dyer, J. Kaplan, J. Lee, and U. Sharma. Explaining neural scaling laws. Proceedings of the National Academy of Sciences, 121(27):e2311878121, 2024.
G. Ben Arous, R. Gheissari, and A. Jagannath. High-dimensional limit theorems for sgd: Effective dynamics and critical scaling. Advances in neural information processing systems, 35:25349–25362, 2022.
G. Ben Arous, M. A. Erdogdu, N. M. Vural, and D. Wu. Learning quadratic neural networks in high dimensions: Sgd dynamics and scaling laws. arXiv preprint arXiv:2508.03688, 2025.
A. Bietti, J. Bruna, and L. Pillaud-Vivien. On learning gaussian multi-index models with gradient flow part i: General properties and two-timescale learning. Communications on Pure and Applied Mathematics, 2025.
B. Bordelon, A. Atanasov, and C. Pehlevan. A dynamical model of neural scaling laws. In Proceedings of the 41st International Conference on Machine Learning, ICML’24. JMLR, 2024.
G. Braun, M. H. Quang, and M. Imaizumi. Learning a single index model from anisotropic data with vanilla stochastic gradient descent. In The 28th International Conference on Artificial Intelligence and Statistics, 2025.
J. Bruna and D. Hsu. Survey on algorithms for multi-index models, 2025. URL https://arxiv.org/ab s/2504.05426.
E. J. Cande`s, X. Li, and M. Soltanolkotabi. Phase retrieval via wirtinger flow: Theory and algorithms. IEEE Transactions on Information Theory, 61(4):1985–2007, 2015.
A. Caponnetto and E. De Vito. Optimal rates for the regularized least-squares algorithm. Foundations of Computational Mathematics, 7(3):331–368, 2007.
13

L. Carratino, A. Rudi, and L. Rosasco. Learning with sgd and random features. Advances in neural information processing systems, 31, 2018.
E. Collins-Woodfin, C. Paquette, E. Paquette, and I. Seroussi. Hitting the high-dimensional notes: An ode for sgd learning dynamics on glms and multi-index models. Information and Inference: A Journal of the IMA, 13(4):iaae028, 2024.
H. Cui, B. Loureiro, F. Krzakala, and L. Zdeborov ́a. Generalization error rates in kernel regression: The crossover from the noiseless to noisy regime. Advances in Neural Information Processing Systems, 34: 10131–10143, 2021.
Y. Dandi, E. Troiani, L. Arnaboldi, L. Pesce, L. Zdeborova, and F. Krzakala. The benefits of reusing batches for gradient descent in two-layer networks: Breaking the curse of information and leap exponents. In R. Salakhutdinov, Z. Kolter, K. Heller, A. Weller, N. Oliver, J. Scarlett, and F. Berkenkamp, editors, Proceedings of the 41st International Conference on Machine Learning, volume 235 of Proceedings of Machine Learning Research, pages 9991–10016. PMLR, 21–27 Jul 2024.
D. Davis, D. Drusvyatskiy, and C. Paquette. The nonsmooth landscape of phase retrieval. IMA Journal of Numerical Analysis, 40(4):2652–2695, 2020.
L. Defilippis, B. Loureiro, and T. Misiakiewicz. Dimension-free deterministic equivalents and scaling laws for random feature regression. Advances in Neural Information Processing Systems, 37:104630–104693, 2024.
L. Defilippis, Y. Xu, J. Girardin, E. Troiani, V. Erba, L. Zdeborov ́a, B. Loureiro, and F. Krzakala. Scaling laws and spectra of shallow neural networks in the feature learning regime. arXiv preprint arXiv:2509.24882, 2025.
J. Dong, L. Valzania, A. Maillard, T.-a. Pham, S. Gigan, and M. Unser. Phase retrieval: From computational imaging to machine learning: A tutorial. IEEE Signal Processing Magazine, 40(1):45–57, 2023.
V. Erba, E. Troiani, L. Zdeborov ́a, and F. Krzakala. The nuclear route: Sharp asymptotics of erm in overparameterized quadratic networks. arXiv preprint arXiv:2505.17958, 2025.
S. Goldt, M. Advani, A. M. Saxe, F. Krzakala, and L. Zdeborov ́a. Dynamics of stochastic gradient descent for two-layer neural networks in the teacher-student setup. Advances in neural information processing systems, 32, 2019.
S. Goldt, M. M ́ezard, F. Krzakala, and L. Zdeborov ́a. Modeling the influence of data structure on learning in neural networks: The hidden manifold model. Physical Review X, 10(4):041044, 2020.
G. Gripenberg, S. O. Londen, and O. Staffans. Volterra Integral and Functional Equations. Encyclopedia of Mathematics and its Applications. Cambridge University Press, 1990.
J. Hestness, S. Narang, N. Ardalani, G. Diamos, H. Jun, H. Kianinejad, M. M. A. Patwary, Y. Yang, and Y. Zhou. Deep learning scaling is predictable, empirically, 2017. URL https://arxiv.org/abs/1712 .00409.
J. Hoffmann, S. Borgeaud, A. Mensch, E. Buchatskaya, T. Cai, E. Rutherford, D. de Las Casas, L. A. Hendricks, J. Welbl, A. Clark, T. Hennigan, E. Noland, K. Millican, G. van den Driessche, B. Damoc, A. Guy, S. Osindero, K. Simonyan, E. Elsen, O. Vinyals, J. W. Rae, and L. Sifre. Training computeoptimal large language models. In Proceedings of the 36th International Conference on Neural Information Processing Systems, NeurIPS ’22, 2022.
14

J. Kaplan, S. McCandlish, T. Henighan, T. B. Brown, B. Chess, R. Child, S. Gray, A. Radford, J. Wu, and D. Amodei. Scaling laws for neural language models, 2020. URL https://arxiv.org/abs/2001 .08361.
F. Kunstner and F. Bach. Scaling laws for gradient descent and sign descent for linear bigram models under Zipf’s law. arXiv preprint arXiv:2505.19227, 2025.
L. Lin, J. Wu, S. M. Kakade, P. Bartlett, and J. D. Lee. Scaling laws in linear regression: Compute, parameters, and data. In The Thirty-eighth Annual Conference on Neural Information Processing Systems, 2024.
J. Ma, R. Dudeja, J. Xu, A. Maleki, and X. Wang. Spectral method for phase retrieval: An expectation propagation perspective. IEEE Transactions on Information Theory, 67(2):1332–1355, 2021.
A. Maloney, D. A. Roberts, and J. Sully. A solvable model of neural scaling laws. arXiv preprint arXiv:2210.16859, 2022.
S. Martin, F. Bach, and G. Biroli. On the impact of overparameterization on the training of a shallow neural network in high dimensions. In International Conference on Artificial Intelligence and Statistics, pages 3655–3663. PMLR, 2024.
E. Paquette, C. Paquette, L. Xiao, and J. Pennington. 4+3 phases of compute-optimal neural scaling laws. In The Thirty-eighth Annual Conference on Neural Information Processing Systems, 2024.
A. Pazy. Semigroups of linear operators and applications to partial differential equations, volume 44. Springer Science & Business Media, 2012.
L. Pillaud-Vivien, A. Rudi, and F. Bach. Statistical optimality of stochastic gradient descent on hard learning problems through multiple passes. Advances in Neural Information Processing Systems, 31, 2018.
Y. Ren, E. Nichani, D. Wu, and J. D. Lee. Emergence and scaling laws in sgd learning of shallow neural networks. arXiv preprint arXiv:2504.19983, 2025.
A. Rudi and L. Rosasco. Generalization properties of learning with random features. Advances in neural information processing systems, 30, 2017.
D. Saad and S. Solla. Dynamics of on-line gradient descent learning for multilayer neural networks. Advances in neural information processing systems, 8, 1995a.
D. Saad and S. A. Solla. On-line learning in soft committee machines. Physical Review E, 52(4):4225, 1995b.
S. Sarao Mannelli, E. Vanden-Eijnden, and L. Zdeborov ́a. Optimization and generalization of shallow neural networks with quadratic activation functions. Advances in Neural Information Processing Systems, 33:13445–13455, 2020.
Y. S. Tan and R. Vershynin. Phase retrieval via randomized kaczmarz: theoretical guarantees. Information and Inference: A Journal of the IMA, 8(1):97–123, 2019.
Y. S. Tan and R. Vershynin. Online stochastic gradient descent with arbitrary initialization solves nonsmooth, non-convex phase retrieval. Journal of Machine Learning Research, 24(58):1–47, 2023.
G. Teschl. Ordinary differential equations and dynamical systems, volume 140. American Mathematical Soc., 2012.
15

R. Veiga, L. Stephan, B. Loureiro, F. Krzakala, and L. Zdeborov ́a. Phase diagram of stochastic gradient descent in high-dimensional two-layer neural networks. Advances in Neural Information Processing Systems, 35:23244–23255, 2022.
R. Worschech and B. Rosenow. Analyzing neural scaling laws in two-layer networks with power-law data spectra, 2024.
A. Wortsman and B. Loureiro. Kernel ridge regression under power-law data: spectrum and generalization. arXiv preprint arXiv:2510.04780, 2025.
Y. Yao, L. Rosasco, and A. Caponnetto. On early stopping in gradient descent learning. Constructive approximation, 26(2):289–315, 2007.
Y. Ying and M. Pontil. Online gradient descent learning algorithms. Foundations of Computational Mathematics, 8(5):561–596, 2008.
16

The appendix is organized as follows. Section A contains the proofs of the results stated in Section 3. Section B provides the detailed analysis of Phase I, followed by the analysis of Phase II in Section C and Phase III in Section D. Finally, Section E presents additional numerical experiments.
A Proof of Section 3
This section provides the proofs of the results stated in Section 3.
Proposition 1. Let x ∼ N (0, Q) ∈ Rd, where Q ∈ Rd×d is a symmetric positive definite diagonal matrix. Let w, w⋆ ∈ Rd. The population loss can be rewritten as
L(w) = 3∥w∥4
Q + 3∥w⋆∥4
Q − 4⟨w, w⋆⟩2
Q − 2∥w∥2
Q · ∥w⋆∥2
Q = 3s2 + 3s2
⋆ − 4u2 − 2s⋆s
Proof. Expanding the loss gives
L(w) = E
h
(x⊤w)4i
+E
h
(x⊤w⋆)4i
− 2E
h
(x⊤w)2(x⊤w⋆)2i
.
Step 1. Fourth moment of a Gaussian linear form. Since x ∼ N (0, Q), the scalar x⊤w is Gaussian with variance w⊤Qw = ∥w∥2
Q. Its fourth moment is
E
h
(x⊤w)4i
= 3 (w⊤Qw)2 = 3∥w∥4
Q.
By the same reasoning,
E
h
(x⊤w⋆)4i
= 3∥w⋆∥4
Q.
Step 2. Mixed fourth moment. Expanding the product gives
(x⊤w)2(x⊤w⋆)2 =
X
i,j,k,l
xixj xkxl wiwj w⋆
kw⋆
l.
For Gaussian x, Wick’s formula expresses the fourth moment as a sum over pairings:
E[xixjxkxl] = E[xixj]E[xkxl] + E[xixk]E[xjxl] + E[xixl]E[xjxk].
Since Q = diag(λ1, . . . , λd), E[xixj] = λiδij. Evaluating the three pairings: - Pairing (i, j)(k, l) contributes
X
i,k
λiλk w2
i (w⋆
k)2 = ∥w∥2
Q · ∥w⋆∥2
Q.
- Pairing (i, k)(j, l) contributes
X
i,j
λiλj wiwj w⋆
i w⋆
j=
X
i
λiwiw⋆
i
2
= ⟨w, w⋆⟩2
Q.
- Pairing (i, l)(j, k) contributes the same quantity
⟨w, w⋆⟩2
Q.
Summing up,
E
h
(x⊤w)2(x⊤w⋆)2i
= ∥w∥2
Q · ∥w⋆∥2
Q + 2⟨w, w⋆⟩2
Q.
17

Step 3. Final expression. Putting everything together,
L(w) = 3∥w∥4
Q + 3∥w⋆∥4
Q − 2 ∥w∥2
Q · ∥w⋆∥2
Q + 2⟨w, w⋆⟩2
Q
= 3∥w∥4
Q + 3∥w⋆∥4
Q − 2∥w∥2
Q · ∥w⋆∥2
Q − 4⟨w, w⋆⟩2
Q.
Proposition 2. The population gradient and Hessian of the loss L are given by
∇L(w) = 12sQw − 4s⋆Qw − 8uQw⋆, (3.1)
∇2L(w) = 24(Qw)(Qw)⊤ + (12s − 4s⋆)Q − 8(Qw⋆)(Qw⋆)⊤. (3.2)
The set of critical points is {0, w⋆, −w⋆} ∪ {w : (u, s) = (0, s⋆/3)}. Among them, 0 is a strict local maximum, ±w⋆ are strict global minima, and every w with (u, s) = (0, s⋆/3) is a saddle point.
Proof. The proof proceeds in three steps: computing the gradient, identifying the critical points, and classifying them via the Hessian.
Gradient. To compute the gradient, we use the closed-form expression L(w) = 3s2 +3(s⋆)2 −2ss⋆ −4u2, apply the chain rule and use ∇s = 2Qw and ∇u = Qw⋆ to get
∇L(w) = 6s∇s − 2s⋆∇s − 8u∇u = (12s − 4s⋆)Qw − 8uQw⋆,
which is (3.1).
Critical points. Setting ∇L(w) = 0 and using Q ≻ 0 leads to
(12s − 4s⋆)w − 8uw⋆ = 0.
– Case 1: If 12s − 4s⋆ ̸= 0, then w must lie in span w⋆. Write w = αw⋆; then s = α2s⋆ and u = αs⋆. Substituting gives
(12α2 − 4)αw⋆ = 8αw⋆ ⇐⇒ 12α3 − 12α = 0 ⇐⇒ α ∈ {0, ±1}.
Hence, we obtain the critical points 0 and ±w⋆. – Case 2: If 12s − 4s⋆ = 0, then necessarily s = s⋆/3. The gradient condition reduces to −8uw⋆ = 0, i.e. u = 0. Thus every w with (u, s) = (0, s⋆/3) is a critical point.
Hessian. Differentiating (3.1), and recalling that ∇s = 2Qw and ∇u = Qw⋆, we obtain
∇2L(w) = 24 (Qw)(Qw)⊤ + (12s − 4s⋆)Q − 8 (Qw⋆)(Qw⋆)⊤,
which is (3.2).
Characterization of the critical points. At w = 0 (so s = 0, u = 0),
∇2L(0) = −4s⋆Q − 8 (Qw⋆)(Qw⋆)⊤,
which is strictly negative definite since Q ≻ 0 and the rank-one term is negative semidefinite. Thus w = 0 is a strict local maximum since L(0) > L(±w⋆) = 0. At w = ±w⋆ (so s = s⋆, u = ±s⋆),
∇2L(±w⋆) = 24 (Qw⋆)(Qw⋆)⊤ + (12s⋆ − 4s⋆)Q − 8 (Qw⋆)(Qw⋆)⊤ = 16 (Qw⋆)(Qw⋆)⊤ + 8s⋆Q ≻ 0,
18

hence both ±w⋆ are strict local (and, by the loss formula, global) minima. Finally, for any w with (u, s) = (0, s⋆/3), the Hessian reduces to
∇2L(w) = 24(Qw)(Qw)⊤ − 8(Qw⋆)(Qw⋆)⊤.
Since Q ≻ 0, w⋆ ̸= 0, and w⊤Qw⋆ = 0, s = w⊤Qw = 1
3 s⋆ = 1
3 (w⋆)⊤Qw⋆, we have
w⊤∇2L(w) w = w⊤[24Qww⊤Q − 8Qw⋆(w⋆)⊤Q]w = 24(w⊤Qw)2 = 8[(w⋆)⊤Qw⋆]2 > 0,
(w⋆)⊤∇2L(w) w⋆ = (w⋆)⊤[24Qww⊤Q − 8Qw⋆(w⋆)⊤Q](w⋆) = −8[(w⋆)⊤Qw⋆]2 < 0.
It follows that ∇2L(w) must necessarily have both positive and negative directions. Thus, this critical point is a saddle.
Proposition 3. The gradient flow dynamics satisfy
w ̇ i(t) = 4λi s⋆ − 3s(t) wi(t) + 8λiu(t)w⋆
i , i = 1, . . . , d, (3.3)
s ̇(k)(t) = 8 (s⋆ − 3s(t)) s(k+1)(t) + 16 u(t) u(k+1)(t), (3.4)
u ̇ (k)(t) = 4 (s⋆ − 3s(t)) u(k+1)(t) + 8 u(t) s(k+1)
⋆ . (3.5)
In particular, setting k = 1 recovers the dynamics of s(t) and u(t).
Proof. We first derive the component-wise ODE, then deduce the dynamics for the summary statistics s(t) and u(t). Recall from the previous computation that the population gradient flow w ̇ (t) = −∇L(w(t)) satisfies w ̇ (t) = 4(s⋆ − 3s)Qw + 8u Qw⋆. (A.1)
Component-wise dynamics. With Q = diag(λ1, . . . , λd), taking the i-th coordinate in (A.1) yields
w ̇ i(t) = 4(s⋆ − 3s)λi wi(t) + 8u λi w⋆
i.
Dynamics for s(t). Differentiate s(t) = w(t)⊤Qw(t) along the flow:
s ̇(t) = 2 w ̇ (t)⊤Qw(t).
Using (A.1) and defining
s(2)(t) := w(t)⊤Q2w(t), u(2)(t) := w(t)⊤Q2w⋆,
we obtain s ̇(t) = 8(s⋆ − 3s) s(2)(t) + 16u u(2)(t).
Dynamics for u(t). Differentiate u(t) = w(t)⊤Qw⋆:
u ̇ (t) = w ̇ (t)⊤Qw⋆.
Using (A.1) and letting s(2)
⋆ := w⋆⊤Q2w⋆, we get
u ̇ (t) = 4(s⋆ − 3s) u(2)(t) + 8u s(2)
⋆.
These identities establish the stated ODEs for s(t) and u(t).
19

Higher-order moments. The same computation applies to s(k)(t) = w(t)⊤Qkw(t) and u(k)(t) = w(t)⊤Qkw⋆, leading to
s ̇(k)(t) = 8(s⋆ − 3s(t)) s(k+1)(t) + 16u(t) u(k+1)(t),
u ̇ (k)(t) = 4(s⋆ − 3s(t)) u(k+1)(t) + 8u(t) s(k+1)
⋆.
B Analysis of Phase I: Escaping Mediocrity
In this section, we provide the detailed proofs for the analysis of Phase I outlined in Section 5.1. We begin by formalizing the infinite-dimensional ODE in a suitable Banach space (Section B.1). We then derive a closed-form solution (Section B.2), show that u(t) satisfies a Volterra integral equation by projection (Section B.3), and analyze its asymptotic behavior. Finally, we study higher-order correlation terms (Section B.4), showing that their dynamics are primarily driven by u(t).
B.1 Step 0: Preliminaries on Banach-valued ODEs
Before entering the main steps of the proof, we formalize the Banach space on which the ODE (B.9) is defined. Throughout the following, L(w) refers to the loss function in Proposition 1. Recall that we define U (t) = (u(1)(t), u(2)(t), . . . )⊤, where u(k)(t) = w(t)⊤Qkw⋆. We show that
U ∈ H := C∞
b (R≥0; l2),
where l2 = {(ak)k≥1 : P∞
k=1 a2
k < ∞} is the Hilbert space of square-summable sequences. Thus U is a
bounded, smooth l2-valued function on R≥0.
Lemma 3 (Coercivity of the loss). The loss function L in Proposition 1 is coercive, that is lim∥w∥→∞ L(w) = ∞.
Proof. By the Cauchy-Schwarz inequality
L(w) = 3∥w∥4
Q + 3∥w⋆∥4
Q − 4⟨w, w⋆⟩2
Q − 2∥w∥2
Q||w⋆||2
Q
≥ 3∥w∥4
Q + 3∥w⋆∥4
Q − 6∥w∥2
Q||w⋆||2
Q = 3(||w||2
Q − ||w⋆||2
Q)2,
from which it clearly follows that lim∥w∥→∞ L(w) = ∞.
Lemma 4 (Local Lipschitz continuity of the gradient). Consider the function Z : Rd 7→ Rd defined by
Z(w) = 3||w||2
QQw − ||w∗||2
QQw − 2(w⊤Qw∗)Qw∗. (B.1)
For all w1, w2 ∈ Rd,
||Z(w1) − Z(w2)|| ≤ 3||Q||2||w1 − w2||
h
(||w1|| + ||w2||)||w1|| + ||w2||2 + ||w∗||2i
. (B.2)
In particular, for ||w1|| ≤ M , ||w2|| ≤ M , with M > 0,
||Z(w1) − Z(w2)|| ≤ 3(3M 2 + ||w∗||2)||Q||2||w1 − w2||. (B.3)
20

Proof.
||Z(w1) − Z(w2)||
≤ 3|| ||w1||2
QQw1 − ||w2||2
QQw2|| + ||w∗||2
Q||Qw1 − Qw2|| + 2||(w1 − w2)⊤Qw∗Qw∗||
≤ 3| ||w1||2
Q − ||w2||2
Q| ||Qw1|| + 3||w2||2
Q||Qw1 − Qw2||
+ ||w∗||2
Q||Q|| ||w1 − w2|| + 2||w1 − w2|| ||Qw∗||2
≤ 3||w1 − w2||Q[||w1||Q + ||w2||Q] ||Qw1|| + 3||w2||2
Q||Q|| ||w1 − w2||
+ ||w∗||2
Q||Q|| ||w1 − w2|| + 2||w1 − w2|| ||Qw∗||2
= ||w1 − w2||[3(||w1|| + ||w2||)||Q||2||w1|| + 3||w2||2||Q||2 + ||w∗||2
Q||Q|| + 2||Qw∗||2]
≤ 3||Q||2||w1 − w2||[(||w1|| + ||w2||)||w1|| + ||w2||2 + ||w∗||2].
We recall the classical Picard-Lindel ̈of Theorem for the existence and uniqueness of the solution of the initial value problem
x ̇ = f (t, x), x(t0) = x0, (B.4)
where f ∈ C(U ; Rd), U ⊂ Rd+1 is an open subset, and (t0, x0) ∈ U , see e.g. Teschl [2012] (Theorem 2.2, Lemma 2.3).
Theorem 3 (Picard-Lindel ̈of ). Let f ∈ Ck(U ; Rd), k ≥ 0, where U ⊂ Rd+1 is an open subset and (t0, x0) ∈ U . Assume that f is locally Lipschitz continuous in the second argument, uniformly with respect to the first argument, i.e. ∀V ⊂ U , V compact, ∃L = L(V ) > 0 such that
||f (t, x1) − f (t, x2)|| ≤ L||x1 − x2||, ∀(t, x1), (t, x2) ∈ V. (B.5)
Then there exists ε > 0 such that the initial value problem (B.4) possesses a unique solution x∗(t) ∈ Ck+1(I; Rd), where I = [t0 − ε, t0 + ε].
Lemma 5 (Well-posedness of the gradient flow). The gradient flow on R × Rd
w ̇ (t) = −∇L(w(t)),
w(0) = w0 ∈ Rd (B.6)
has a unique solution w ∈ C∞
b (R≥0; Rd) ∀w0 ∈ Rd.
Proof. By Lemma 4, the gradient ∇wL(w) is locally Lipschitz on Rd, thus by Picard-Lindel ̈of Theorem there exists a unique local solution w ∈ C∞(I; Rd) on I = [−ε, ε] for some ε > 0, since L ∈ C∞(Rd+1; Rd). The interval I can in fact be extended to all of R. By differentiating L(w(t)) we have, by the chain rule,
dL(w(t))
dt = (w ̇ (t))⊤∇L(w(t)) = − ∥∇L(w(t))∥2 ≤ 0.
Thus L(w(t)) is decreasing along the flow w(t) and therefore w(t) always lies in the level set Lw0(L) = {w ∈ Rd : L(w) ≤ L(w0)}. Since L(w) is coercive by Lemma 3, Lw0(L) must necessarily be bounded. Thus Picard-Lindel ̈of Theorem can be repeatedly applied to extend I to all of R≥0. Since L(w) is bounded below by zero, the limit limt→∞ L(w(t)) necessarily exists. Let BRd(0, M ) be the smallest
ball in Rd, centered at the origin, such that Lw0(L) ⊂ BRd(0, M ), then ||w(t)|| ≤ M ∀t ≥ 0. Thus
w(t) ∈ C∞
b (R≥0; Rd).
Lemma 6. Let w be the unique global solution of the gradient flow (B.6). Define U : R≥0 → R∞ by U (t) = (u(1)(t), u(2)(t), . . . )⊤, where u(k)(t) = w(t)⊤Qkw⋆. Then U ∈ C∞
b (R≥0; l2).
21

Proof. By the assumption that tr(Q) = 1 and λ1 ≥ · · · ≥ λd > 0, we have ||Q|| = λ1 < 1. For each fixed t, we have
∞
X
k=1
|u(k)(t)|2 =
∞
X
k=1
(w(t)⊤Qkw⋆)2 ≤ ||w(t)||2||w⋆||2
∞
X
k=1
||Qk ||2
≤ ||w(t)||2||w⋆||2
∞
X
k=1
||Q||2k = ||w(t)||2||w⋆||2 ||Q||2
1 − ||Q||2 < ∞.
Since w is bounded, for each fixed t, we thus have U (t) ∈ l2, and
||U ||∞ = sup
t≥0
||U (t)|| ≤ ||w||∞||w⋆|| ||Q||
p1 − ||Q||2 .
As w is bounded and smooth, so is U , hence U ∈ C∞
b (R≥0; l2).
B.2 Step 1: Infinite-dimensional ODE for the Moment System
Contrary to the isotropic setting where the dynamics only depend on two ODEs involving u(t) and s(t), in the anisotropic setting, higher order correlations u(k) and s(k) appear. We first derive ODEs for higher-order correlation terms and then solve the infinite-dimensional ODE system. Differentiating u(k)(t) = w(t)⊤Qkw⋆ along (3.1) gives, for k ≥ 1,
u ̇ (k)(t) = 4 s⋆ − 3s(t) u(k+1)(t) + 8 u(t)s(k+1)
⋆ . (B.7)
Using the normalization s⋆ = 1, we obtain
u ̇ (k)(t) = 4 1 − 3s(t) u(k+1)(t) + 8 u(t)s(k+1)
⋆ . (B.8)
Infinite-dimensional ODE. Let U (t) = (u(1)(t), u(2)(t), . . . )⊤ ∈ R∞. By Lemma 6, we have U ∈ H = C∞
b (R≥0; l2). Consider B : l2 → l2, the right-shift operator on sequences in l2, defined
by (Bx)k := xk+1 for x = (xk)k∈N ∈ l2. Let S := (Bs⋆∞) e1⊤ : l2 → l2 be a rank one operator with
s⋆∞ = (s(1)
⋆ , s(2)
⋆ , . . . )⊤ ∈ l2, Bs⋆∞ = (s(2)
⋆ , s(3)
⋆ , . . . )⊤ ∈ l2 and e1 = (1, 0, 0, . . . )⊤ is the first basis vector in the canonical orthonormal basis for l2. Then (B.8) admits the equivalent formulation
U ̇ (t) = 4 1 − 3s(t) B + 8S U (t). (B.9)
This is an infinite-dimensional ODE, with U belonging to the Banach space C∞
b (R≥0; l2) of smooth,
bounded functions with values in the Hilbert space l2. In the following, we seek to solve (B.9). We recall that on a Banach space B, with L(B) denoting the Banach space of bounded linear operators on B, the exponential operator eA is well-defined ∀A ∈ L(B), with
eA =
∞
X
k=0
Ak
k! : L(B) → L(B), (B.10)
||eA|| ≤
∞
X
k=0
||A||k
k! = e||A|| < ∞. (B.11)
Lemma 7 (Shift exponential). For any θ ∈ R and x ∈ l2,
eθBx k =
∞
X
m=0
θm
m! xk+m. (B.12)
22

Proof. Because B is bounded on l2 with ∥B∥ ≤ 1, the exponential series for eθB converges in operator norm for every θ ∈ R, and (B.12) follows from Bmx having coordinates (Bmx)k = xk+m.
Proposition 7. Define the function Θ : R≥0 → R by
Θ(t) :=
Zt
0
(1 − 3s(τ )) dτ. (B.13)
The initial value problem on l2
U ̇ (t) = 4 1 − 3s(t) B + 8S U (t), U (0) = U0 ∈ l2, (B.14)
has a unique solution U ∈ C∞
b (R≥0; l2), satisfying, ∀t ≥ 0,
U (t) = e 4B Θ(t) U0 + 8
Zt
0
e 4B (Θ(t)−Θ(τ)) S U (τ ) dτ. (5.2)
Equivalently, since S = (Bs⋆∞) e1⊤, (5.2) can be written as
U (t) = e 4B Θ(t) U0 + 8
Zt
0
e 4B (Θ(t)−Θ(τ )) (Bs∞
⋆ ) u(1)(τ ) dτ,
where u(1)(τ ) := ⟨e1, U (τ )⟩.
To prove Proposition 7, we apply the following result on ODEs in Banach space.
Theorem 4 (Pazy [2012], Theorem 5.1). Let B be a Banach space. Assume that A(t) : B → B is a bounded linear operator ∀t ∈ [0, T ], 0 ≤ T < ∞, and that the map t → A(t) is continuous in the uniform operator topology, with maxt∈[0,T ] ||A(t)|| < ∞. Then ∀u0 ∈ B, the initial value problem
du
dt = A(t)u(t), 0 ≤ t0 ≤ t ≤ T < ∞,
u(t0) = u0 ∈ B. (B.15)
has a unique solution u ∈ C1([t0, T ]; B).
Proof of Proposition 7. Let a : R≥0 → R be defined by a(t) = 1 − 3s(t) = 1 − 3w(t)⊤Qw(t). Since w ∈ C∞
b (R≥0; Rd) by Lemma 5, we have s ∈ C∞
b (R≥0; R), a ∈ C∞
b (R≥0; R), with
|a(t)| ≤ 1 + 3||Q|| ||w(t)||2, ||a||∞ ≤ 1 + 3||Q|| ||w||2
∞,
|a(t1) − a(t2)| = 3|(w(t1)⊤Qw(t1) − w(t2)⊤Qw(t2)|
≤ 3||Q|| ||w(t1) − w(t2)|| [||w(t1)|| + ||w(t2)||].
Let A : R≥0 → L(l2) be defined by A(t) = 4a(t)B + 8S, then A(t) : l2 → l2 is a bounded linear operator ∀t ≥ 0, with
||A(t)|| ≤ 4||B|| (1 + 3||Q|| ||w(t)||2) + 8||S||
||A||∞ ≤ 4||B|| (1 + 3||Q|| ||w||2
∞) + 8||S||,
||A(t1) − A(t2)|| ≤ 12||B|| ||Q|| ||w(t1) − w(t2)|| [||w(t1)|| + ||w(t2)||]
≤ 24||B|| ||Q|| ||w||∞||w(t1) − w(t2)||.
Thus A(t) is continuous in the uniform operator topology and supt≥0 ||A(t)|| < ∞. By Theorem 4, the
initial value problem (B.14) has a unique solution U ∈ C1([0, T ]; l2), ∀0 < T < ∞. Since s(t) is smooth, it
23

follows immediately that U ∈ C∞([0, T ]; l2), ∀0 < T < ∞. Consider the following function U : R≥0 → l2 satisfying
U (t) = e 4B Θ(t) U0 + 8
Zt
0
e 4B (Θ(t)−Θ(τ )) S U (τ ) dτ
= e 4B Θ(t) U0 + 8e 4B Θ(t)
Zt
0
e− 4B Θ(τ) S U (τ ) dτ,
where we recall that Θ(t) = R ⊤
0 a(τ ) dτ = R ⊤
0 (1 − 3s(τ )) dτ , with Θ ̇ (t) = a(t). Differentiating U (t) on both sides gives, via the product rule,
U ̇ (t) = 4 a(t)B e 4B Θ(t) U0 + 32 a(t) B e 4B Θ(t)
Zt
0
e− 4B Θ(τ) S U (τ ) dτ + 8 S U (t)
= 4 a(t)B U (t) + 8 S U (t),
which is precisely the differential equation in (B.14). Since a ∈ C∞
b (R≥0; R), it follows that U ∈
C∞(R≥0; l2). Therefore, the unicity of solution implies that U must be the unique solution of (B.14) and we must have U ∈ C∞
b (R≥0; l2).
B.3 Step 2: Volterra Reduction
Taking the first coordinate of (5.2) yields a Volterra equation for u(t) = u(1)(t).
Proposition 8 (Volterra equation). Define
aΘ(t) := e 4B Θ(t)U (0) 1 =
X
m≥0
(4Θ(t))m
m! u(1+m)(0), (B.16)
KΘ(t) := e 4B Θ(t)Bs∞
⋆ 1=
X
m≥0
(4Θ(t))m
m! s(2+m)
⋆ . (B.17)
Then u satisfies
u(t) = aΘ(t) + 8
Zt
0
KΘ(t − τ ) u(τ ) dτ. (B.18)
Moreover,
aΘ(t) =
X
i
wi(0)w⋆
i λi e4λiΘ(t), KΘ(t) =
X
i
(w⋆
i )2λ2
i e4λiΘ(t). (B.19)
Proof. Equation (B.18) is the first coordinate of (5.2). The spectral forms follow by expanding u(1+m)(0) =
P
i λ1+m
i wi(0)w⋆
i and s(2+m)
⋆ =P
i(w⋆
i )2λ2+m
i and summing the exponential series.
To analyze the growth of u(t), we employ the Laplace transform together with residue calculus; see [Gripenberg et al., 1990, Chapters 2, 3, and 7] for a detailed exposition. We first illustrate the method in the ideal case Θ(t) = t, and then explain how the analysis extends to the approximated case.
B.3.1 Ideal case: Θ(t) = t
Fix b > 0 (e.g. b = 4 if Θ(t) = t) and consider the scalar Volterra equation of the second kind
αb(t) = aΘ(t) + 8
Zt
0
Kb(t − s) αb(s) ds, Kb(t) =
X
i≥1
(w⋆
i )2λ2
i ebλit, t ≥ 0, (B.20)
24

where λ1 = maxi λi, and the series defining Kb (hence Kbb) converges for Rs > bλ1. Define
Db(s) := 1 − 8 Kbb(s) = 1 − 8
X
i≥1
(w⋆
i )2λ2
i
s − bλi
, Rs > bλ1.
Lemma 8. There is a unique real ρ(b) > bλ1 such that
Db(ρ(b)) = 0 ⇐⇒ 1 = 8
X
i≥1
(w⋆
i )2λ2
i
ρ(b) − bλi
. (B.21)
Moreover, the function b 7→ ρ(b) is strictly increasing and continuous.
Proof. We first note that for a fixed b, Fb(ρ) := 8 Kbb(s) is strictly decreasing in ρ ∈ (bλ1, ∞). If b2 > b1, then ρ − b2λi < ρ − b1λi, hence Fb2(ρ) > Fb1(ρ) ∀ρ ∈ (b2λ1, ∞). Evaluating at ρ = ρ(b1) gives 1 = Fb2(ρ(b2)) = Fb1(ρ(b1)) < Fb2(ρ(b1)), so, since Fb2 is strictly decreasing in ρ, we have ρ(b2) > ρ(b1). Continuity follows from dominated convergence applied to Fb(ρ) (for ρ bounded away from bλ1) and the continuity of the inverse graph of strictly decreasing functions.
Proposition 9. Fix b > 0 and let ρ(b) > bλ1 be the unique real zero of Db(s) = 1 − 8 Pd
i=1(w⋆
i )2λ2
i /(s − bλi). Set δb := ρ(b) − bλ1 > 0. Then, for all t ≥ 0,
αb(t) = c(b)
√d eρ(b)t 1 + o(1) , (B.22)
where the (dimension-free) constant
c(b) =
√d baΘ(ρ(b)) D′
b(ρ(b)) satisfies 0 < c(b) ≤ 8 (s(2)
⋆ )3/2
δb
.
In particular, if baΘ(ρ(b)) > 0, then c(b) > 0.
Proof. The proof consists in solving the Volterra equation in the Laplace domain, and then applying Laplace inversion together with residue calculus to characterize the solution in the original domain.
Step 1: Laplace inversion. For Re s > bλ1 we have
αcb(s) = baΘ(s)
Db(s) , baΘ(s) =
d
X
i=1
λi wi(0) w⋆
i
s − bλi
.
By Bromwich inversion, for any σR > ρ(b),
αb(t) = 1
2πi
Z σR+i∞
σR−i∞
est baΘ(s)
Db(s) ds.
Step 2: Contour shift and residue extraction. Fix σ∗ ∈ (bλ1, ρ(b)) and T > 0. Consider the rectangle with vertices σR ± iT and σ∗ ± iT . The only singularity of est
baΘ(s)/Db(s) in the strip {σ∗ < Re s < σR} is the simple pole at s = ρ(b) (zeros of Db are real and interlace the poles bλi). Introduce the notation
δb := ρ(b) − bλ1 > 0
25

for the gap between the top pole and the dominant zero. On the horizontal edges s = x ± iT with x ∈ [σ∗, σR], using u(0) = cd−1/2 we obtain
|
baΘ(s)| ≤
X
i
|λiwi(0)w⋆
i|
|x − bλi ± iT | ≤ 1
T
X
i
|λiwi(0)w⋆
i|≤ c
T √d .
Since Db is continuous and nonvanishing on the compact strip, infx∈[σ∗,σR], |y|=T |Db(x + iy)| ≥ c∗ > 0.
Therefore the horizontal contributions are O(T −1) and vanish as T → ∞. By the residue theorem, we obtain the exact identity (valid for all t ≥ 0):
αb(t) = baΘ(ρ(b))
D′
b(ρ(b)) eρ(b)t + Rσ∗ (t), Rσ∗ (t) := 1
2πi
Z σ∗+i∞
σ∗−i∞
est baΘ(s)
Db(s) ds. (B.23)
Step 3: Coefficient bound. Let vi := λi/(ρ(b) − bλi). By Cauchy–Schwarz and ∥w(0)∥2 = d−1/2,
|
baΘ(ρ(b))| =
X
i
wi(0)w⋆
i vi ≤ ∥w(0)∥2
X
i
(w⋆
i )2v2
i
1/2
≤ √1d · 1
δb
X
i
(w⋆
i )2λ2
i
1/2
=
q
s(2)
⋆
δb
√d .
Next,
D′
b(ρ(b)) = 8
X
i
(w⋆
i )2λ2
i
(ρ(b) − bλi)2 ≥ 1
8
P
i(w⋆
i )2λ2
i
=1
8s(2)
⋆
,
where we used 1 = 8 P
i(w⋆
i )2λ2
i /(ρ(b) − bλi) and Cauchy–Schwarz. Hence
baΘ(ρ(b)) D′
b(ρ(b)) ≤ 8(s(2)
⋆ )3/2
δb
√d . (B.24)
Step 4: Remainder bound on Re s = σ∗. For s = σ∗ + iy,
Re Db(s) = 1 − 8 Re Kbb(s) ≥ 1 − 8 Kbb(σ∗) = Fb(σ∗) − 1, Fb(ρ) := 8
X
i
(w⋆
i )2λ2
i
ρ − bλi
.
Since Fb is decreasing and convex on (bλ1, ∞) and Fb(ρ(b)) = 1,
Fb(σ∗) − 1 ≥ (ρ(b) − σ∗) F ′
b(ρ(b)) = ρ(b)−σ∗
8 D′
b(ρ(b)) ≥ ρ(b) − σ∗
64 s(2)
⋆
.
Therefore
inf
y∈R |Db(σ∗ + iy)| ≥ ρ(b) − σ∗
64 s(2)
⋆
.
Moreover, by Cauchy–Schwarz in i,
|
baΘ(σ∗ + iy)| =
X
i
wi(0)w⋆
i
λi
σ∗ − bλi + iy ≤ √1d
X
i
(w⋆
i )2 λ2
i
(σ∗ − bλi)2 + y2
!1/2
.
Using σ∗ − bλi ≥ σ∗ − bλ1 = δb/2, and the standard integral R
R[(a2 + y2)−1/2(A2 + y2)−1/2] dy ≤ π/√aA, one obtains
|Rσ∗ (t)| ≤ C(s(2)
⋆ , b)
√d (ρ(b) − σ∗) eσ∗t, C(s(2)
⋆ , b) = O (s(2)
⋆ )3/2
δb
.
With the midpoint choice σ∗ = ρ(b) − δb/2,
|Rσ∗ (t)|
baΘ(ρ(b))/D′
b(ρ(b)) eρ(b)t ≲ e−(δb/2) t. (B.25)
26

Step 5: Uniformity for t = O(log d). From the relation,
1=8
d
X
i=1
(w⋆
i )2λ2
i
ρ(b) − bλi
≥ 8(w1⋆)2λ21
ρ(b) − bλ1
= 8(w1⋆)2λ21
δb
,
so δb ≥ 8(w1⋆)2λ21. If (w1⋆)2λ21 ≥ κΘ > 0, then δb ≥ δΘ := 8κΘ, a constant independent of d. Taking t = c log d in (B.25) yields
|Rσ∗ (t)|
|C1| eρ(b)t ≲ d−cδΘ/2 → 0.
Combining with (B.24) gives the claim with c(b) = √d baΘ(ρ(b))/D′
b(ρ(b)) and 0 < c(b) ≤ 8(s(2)
⋆ )3/2/δb.
B.3.2 General case
The ideal case Θ(t) = t served as a benchmark where the growth rate and coefficient could be computed explicitly. In the general case, Θ(t) is only an approximation of t, and the kernel KΘ becomes a perturbation of the ideal one. The key point is to show that the dominant pole of the Laplace transform is stable under this perturbation, so that the same exponential growth persists up to a small shift in the rate and coefficient.
Proposition 10. Denote by ρ(4) > 4λ1 the unique real zero of F4 on (4λ1, ∞). Write F (p) := 1−8 KdΘ(p) and let ρtrue be the rightmost real zero of F . Then:
i) |ρtrue − ρ(4)| ≤ C δ.
ii) Let c(δ) = √d baΘ(ρtrue)/F ′(ρtrue). We have |c(δ)| ≲ (s(2)
⋆ )3/2/(ρtrue − 4λ1). and
u(t) = c(δ)
√d eρtruet 1 + o(1) .
Proof. Let ∆K := KΘ − K be the difference between the ideal kernel and the true one.
Step 1: Pointwise kernel perturbation. Since (1 − 3δ)t ≤ Θ(t) ≤ t and ex − 1 ≤ x for x ≤ 0,
e4λiΘ(t) − e4λit ≤ 4λi (t − Θ(t)) e4λit ≤ 12δ λi t e4λit.
Multiplying by (w⋆
i )2λ2
i and summing,
|∆K(t)| ≤ 12λ1 δ t K(t) (t ≥ 0). (B.26)
Step 2: Laplace control of the perturbation. For Rp > 4λ1,
∆dK(p) =
Z∞
0
e−pt ∆K(t) dt, ∆dK(p) ≤
Z∞
0
e−(Rp)t |∆K(t)| dt.
Using (B.26) and differentiating under the integral sign (dominated by tK(t)e−(Rp)t),
∆dK(p) ≤ 12λ1 δ
Z∞
0
t e−ptK(t) dt = − 12λ1 δ Kb ′(p).
Hence, for F (p) = 1 − 8KdΘ(p) = 1 − 8(Kb (p) + ∆dK(p)),
|F (p) − F4(p)| = 8 ∆dK(p) ≤ 96 λ1 δ −Kb ′(p) , Rp > 4λ1. (B.27)
27

Step 3: Unicity of the dominant zero. Let p0 = ρ(4); then F4′(p0) = −8Kb ′(p0) =: c0 > 0 and F4 is strictly increasing on (4λ1, ∞). By continuity, pick r > 0 such that on I := [p0 − r, p0 + r]
F′
4(p) ≥ c0/2, M1 := sup
p∈I
(−Kb ′(p)) < ∞. (B.28)
From (B.27),
sup
p∈I
|F (p) − F4(p)| ≤ 96 λ1 M1 δ =: εδ.
Choose δΘ small such that εδ ≤ (c0/4)r for all δ ∈ (0, δΘ]. Then
F (p0 + r) ≥ F4(p0 + r) − εδ ≥ (c0/4)r > 0, F (p0 − r) ≤ F4(p0 − r) + εδ ≤ −(c0/4)r < 0.
Because F ′(p) = −8 KdΘ
′(p) = 8 R ∞
0 te−ptKΘ(t) dt > 0 on (4λ1, ∞), there is a unique zero ρtrue ∈ (p0 − r, p0 + r) and it is the rightmost one. Moreover,
|ρtrue − ρ(4)| ≤ εδ
c0/2 ≲ δ,
proving i).
Step 4: Contour decomposition and leading coefficient. Bromwich inversion and a contour shift to Rp = σ∗ ∈ (4λ1, ρtrue) give the exact identity
u(t) = baΘ(ρtrue)
F ′(ρtrue) eρtruet + 1
2πi
Z σ∗+i∞
σ∗−i∞
ept baΘ(p)
F (p) dp, (B.29)
since the only singularity crossed is the simple pole at p = ρtrue. For the coefficient, by Cauchy–Schwarz with vi = λi/(ρtrue − 4λi) and ∥w(0)∥2 = d−1/2,
|
baΘ(ρtrue)| =
X
i
wi(0)w⋆
i vi ≤ √1d
X
i
(w⋆
i )2v2
i
!1/2
≤ √1d ·
q
s(2)
⋆
ρtrue − 4λ1
.
Further, F ′(ρtrue) = 8 R ∞
0 te−ρtruetKΘ(t) dt > 0, and continuity from the ideal case implies F ′(ρtrue) ≥
1
16 s(2)
⋆
for all small δ. Therefore, under Assumption A1
baΘ(ρtrue)
F ′(ρtrue) ≲ (s(2)
⋆ )3/2
√d (ρtrue − 4λ1) . (B.30)
Step 5: Vertical-line remainder. On Rp = σ∗, monotonicity/convexity and F ′(ρtrue) > 0 yield a uniform gap infy |F (σ∗ + iy)| ≳ ρtrue − σ∗. Also,
|
baΘ(σ∗ + iy)| ≤ √1d
X
i
(w⋆
i )2 λ2
i
(σ∗ − 4λi)2 + y2
!1/2
.
Estimating the integral in (B.29) by Cauchy–Schwarz in y and using R
R
dy
(a2+y2) = π/a and
Z
R
dy
pa2 + y2pA2 + y2 ≤ π/
√
aA,
we obtain
1
2πi
Z σ∗+i∞
σ∗−i∞
ept baΘ(p)
F (p) dp
| {z }
R
≲ √1d · eσ∗t
ρtrue − σ∗
.
Choose the midpoint σ∗ = ρtrue − ∆/2 with ∆ := ρtrue − 4λ1. Then
R ≲ √1d e(ρtrue−∆/2)t.
28

Step 6: Conclusion. From the ideal dispersion relation,
1=8
X
i
(w⋆
i )2λ2
i
ρ(4) − 4λi
≥ 8(w1⋆)2λ21
ρ(4) − 4λ1
⇒ ρ(4) − 4λ1 ≥ 8κΘ.
By i), for small δ the true gap obeys ∆ = ρtrue − 4λ1 ≥ 4κΘ =: ∆Θ > 0. Hence for t = c log d,
R
baΘ(ρtrue)/F ′(ρtrue) eρtruet ≲ e−(∆Θ/2) t = d−c∆Θ/2 → 0.
Putting this with (B.30) yields the stated asymptotic with c(δ) = √d baΘ(ρtrue)/F ′(ρtrue), continuous in δ and bounded away from 0 as δ → 0 when baΘ(ρ(4)) > 0.
This proposition motivates our assumption on initialization.
Assumption A1 (Initialization). We assume that u(0) ≍ d−1/2 and aˆΘ(ρtrue) ≍ d−1/2. Moreover, we assume that w1⋆ is of constant order.
Remark 6 (On the initialization assumption). The assumption in A1 is natural under random initialization. Indeed, if w(0) ∼ N (0, Id/d) (or uniform on the sphere) independently of w⋆, then conditionally on w⋆ we have
baΘ(ρtrue) =
X
i
wi(0)w⋆
i vi ∼ N 0, 1
d
X
i
(w⋆
i )2v2
i , vi = λi
ρtrue − 4λi
.
This variance is of order 1/d. Hence baΘ(ρtrue) is of order d−1/2 with large probability, so that the prefactor in Proposition 10(ii) is indeed nontrivial. The quantity s(0) also fluctuates on the order d−1/2 for Gaussian initialization, but establishing a deterministic relation between s(0) and baΘ(ρtrue) is delicate, as the two depend differently on the spectrum and on w⋆. This explains why A1 is stated as a mild probabilistic assumption rather than a deterministic condition.
B.4 Step 3: Bounding Higher-Order Statistics and Positivity of u(2)
Our goal in this subsection is to show that the second moment u(2)(T1) is strictly positive. For k ≥ 1, define
(KΘ)k(t) := e 4B Θ(t)s⋆ k =
X
m≥0
(4Θ(t))m
m! s(k+m)
⋆ , s(l)
⋆=
X
i
(w⋆
i )2λl
i , l ≥ 1.
Lemma 9 (Kernel domination). For all k ≥ 1 and t ∈ [0, T1],
(KΘ)k(t) ≤ λ k−1
1 KΘ(t), KΘ(t) :=
X
m≥0
(4Θ(t))m
m! s(1+m)
⋆.
Proof. Since Θ(t) ≥ 0 for t ≤ T1, all coefficients (4Θ(t))m
m! are nonnegative. For each m ≥ 0,
s(k+m)
⋆=
X
i
(w⋆
i )2λk+m
i ≤ λk−1
1
X
i
(w⋆
i )2λ1+m
i = λk−1
1 s(1+m)
⋆.
Multiplying termwise by the nonnegative coefficients and summing over m yields the claim.
Lemma 10 (Kernel positivity). For all k ≥ 1 and t ∈ [0, T1],
(KΘ)k(t) ≥ s(k)
⋆ ≥ (w⋆
1 )2 λk
1.
29

Proof. When Θ(t) ≥ 0, all coefficients (4Θ(t))m
m! in the definition of (KΘ)k(t) are nonnegative. In particular,
the m = 0 term contributes s(k)
⋆ , so (KΘ)k(t) ≥ s(k)
⋆ . Finally, s(k)
⋆ =P
i(w⋆
i )2λk
i ≥ (w1⋆)2λ1k.
Proposition 11 (Control of higher-order correlations). For all k ≥ 1 and all t ∈ [0, T1], we have
− λk
1
q
log d
d e4λ1t + 8 s(k)
⋆
Zt
0
u(τ ) dτ ≤ u(k)(t) ≤ λk
1
q
log d
d e4λ1t + λ k−1
1 u(t) − u(0) . (B.31)
In particular, for d sufficiently large there exists a constant c1 > 0 such that u(2)(T1) ≥ c1.
Proof. Work on [0, T1] where Θ ≥ 0 (so Lemma 10 applies), and recall Lemma 9. We have w.h.p.
|u(k+m)(0)| ≤ λk+m
1
r log d
d , for all k ≥ 1, m ≥ 0. (B.32)
By Duhamel’s formula, for each k ≥ 1 and t ∈ [0, T1],
u(k)(t) =
X
m≥0
(4Θ(t))m
m! u(k+m)(0) + 8
Zt
0
(KΘ)k(t − τ ) u(τ ) dτ.
From (B.32) and Θ(t) ≤ t, we obtain
X
m≥0
(4Θ(t))m
m! u(k+m)(0) ≤
r log d
d
X
m≥0
(4Θ(t)λ1)m
m! λk
1
= λk
1
r log d
d e4λ1Θ(t)
≤ λk
1
r log d
d e4λ1t.
Furthermore, by Lemma 9, we have (KΘ)k ≤ λk−1
1 (KΘ), so
Zt
0
(KΘ)k(t − τ ) u(τ ) dτ ≤ λk−1
1 u(t) − aΘ(t) .
Combining with the homogeneous upper bound yields the right-hand inequality in (B.31).
Lemma 10 gives (KΘ)k(t − τ ) ≥ s(k)
⋆ for τ ∈ [0, t], hence
Zt
0
(KΘ)k(t − τ ) u(τ ) dτ ≥ s(k)
⋆
Zt
0
u(τ ) dτ.
Combining with the homogeneous lower bound gives the left-hand inequality in (B.31). Finally, under the positive growth of α assumed in Step 3 (e.g. α(t) ≥ √Cd eρt for large t), together with
a rate gap ρ > 4λ1, the integral term 8s(2)
⋆
R T1
0 α dominates the homogeneous remainder λ21
q
log d
d e4λ1T1 =
O(√log d) for d large enough. Hence, there exists c1 > 0 such that u(2)(T1) ≥ c1.
C Analysis of Phase II
In Section C.1, we show that s(t) crosses the threshold 1/3 within O(1) time and remains above it thereafter. Once s(t) > 1/3, the key quantity Θ(t) appearing in the Volterra equation begins to decrease and eventually becomes negative. This marks a qualitative shift in the dynamics of the system. We leverage this change in Section C.2 to derive a convergence rate for the summary statistics.
30

C.1 Phase IIa: Crossing the s(t) = 1/3 threshold and irreversible growth
Recall that at the end of Phase I, there exists an absolute constant δ > 0 such that
u(T1) > δ, s(T1) ≥ δ, u(2)(T1) > δ.
At a high level, the behavior of s(t) in this regime is governed by a simple mechanism. While s(t) ≤ 1/3, both terms in (C.1) are nonnegative, so s(t) is pushed upward and necessarily crosses the threshold 1/3 in finite time. Once s(t) has crossed, the positive mixed term 16 u(t)u(2)(t) outweighs the negative contribution of the first term near the boundary, which prevents s(t) from falling back. Thus s(t) remains bounded away from 1/3 uniformly after crossing. The next proposition makes this prec-
ise.
Proposition 12 (Crossing and stability beyond the 1/3-threshold). Let T1 be the stopping time from Theorem 1. There exist constants δ > 0 and C > 0 such that:
1. There exists T1′ ∈ [T1, T1 + C] with
s(T ′
1) ≥ 1
3 + δ.
2. For all t ≥ T1′,
s(t) ≥ 1
3 + δ.
Proof. From T1 onward we first prove that u(2)(t) and then u(t) stay strictly positive. While s(t) ≤ 1/3, this makes both terms in s ̇ nonnegative, so s reaches 1/3 in finite time (Part A). Next, we work in a thin band [1/3, 1/3 + η], show that for η small enough the drift of s is still uniformly positive, so s reaches 1/3 + η in finite time, and that the vector field points inward at s = 1/3 + η, preventing any return (Part B).
Recall s ̇(t) = 8 1 − 3s(t) s(2)(t) + 16 u(t) u(2)(t), (C.1)
u ̇ (t) = 4 1 − 3s(t) u(2)(t) + 8 s(2)
⋆ u(t), u ̇ (2)(t) = 4 1 − 3s(t) u(3)(t) + 8 s(3)
⋆ u(t). (C.2)
Part A: Pre-band positivity and finite-time reach of s = 1/3. Fix τ := t − T1 ≥ 0 and define ΘT1(τ ) := Θ(T1 + τ ) − Θ(T1). Writing αi(t) := wi(t)w⋆
i , we have
α ̇ i(t) = 4(1 − 3s(t))λiαi(t) + 8λi(w⋆
i )2u(t).
Multiplying by e−4λiΘ(t) and integrating from T1 to T1 + τ yields
αi(T1 + τ ) = e4λiΘT1 (τ)αi(T1) + 8
Zτ
0
e4λi(ΘT1 (τ )−ΘT1 (s)) λi(w⋆
i )2 u(T1 + s) ds.
Multiplying by λ2
i and summing gives
u(2)(T1 + τ ) =
X
i
λ2
i e4λiΘT1 (τ )αi(T1)
| {z }
=: a ̃(2)
0 (τ )
+8
Zτ
0
K×(τ − s) u(T1 + s) ds, (C.3)
with K×(ζ) :=
X
i
(w⋆
i )2λ3
i e4λiΘT1 (ζ) ≥ 0.
On the pre-band interval where s ≤ 1/3, we have ΘT1(τ ) ≥ 0, so e4λiΘT1(τ) ≥ 1. Thus
 ̃a(2)
0 (τ ) ≥
X
i
λ2
i αi(T1) = u(2)(T1) > 0.
31

By (C.3) and K× ≥ 0,
u(2)(t) ≥ u(2)(T1) > 0 for all T1 ≤ t ≤ T1/3 := inf{t ≥ T1 : s(t) = 1/3}. (C.4)
While s ≤ 1/3, from (C.2) and (C.4),
u ̇ (t) ≥ 8s(2)
⋆ u(t), T1 ≤ t ≤ T1/3,
so u(t) ≥ u(T1)e8s(2)
⋆ (t−T1) > 0 there. Finally, (C.1) gives on {s ≤ 1/3}
s ̇(t) ≥ 16 u(t) u(2)(t) ≥ 16 u(T1) u(2)(T1) :=: κΘ > 0.
Hence
T1/3 − T1 ≤ ( 1
3 ) − s(T1)
κΘ
≤ 1/3
16 u(T1)u(2)(T1) . (C.5)
Thus s reaches 1/3 in finite time.
Part B: Crossing the band [1/3, 1/3 + η] and no return. We record uniform bounds that will be used in-band. Since Q ⪯ λ1I and ∥w(t)∥ ≤ M ,
0 ≤ s(2)(t) ≤ λ2
1∥w(t)∥2 ≤ Smax
2 , Smax
2 := λ2
1M 2, (C.6)
and 0 ≤ s(t) ≤ Smax with Smax := λ1M 2. By Cauchy–Schwarz,
|u(2)(t)| ≤ ps(t)
q
s(3)
⋆≤
q
Smax s(3)
⋆ =: C2, |u(3)(t)| ≤
q
s(2)(t)
q
s(4)
⋆≤
q
S max
2 s(4)
⋆ =: C3. (C.7)
Fix η ∈ (0, 1/6]. On {1/3 ≤ s ≤ 1/3 + η} we have 1 − 3s ∈ [−3η, 0]. From (C.2) and (C.7),
u ̇ ≥ −12η C2 + 8s(2)
⋆ u, u ̇ (2) ≥ −12η C3 + 8s(3)
⋆ u.
As in a linear comparison argument, if
η≤ 2
3
s(2)
⋆
C2 u(T1), η ≤ 2
3
s(3)
⋆
C3 u(T1), (C.8)
then throughout the band one has u(t) ≥ u(T1) and u(2)(t) ≥ u(2)(T1). Now, from (C.1), (C.6), and these lower bounds,
s ̇(t) ≥ −24η Smax
2 + 16 u(T1) u(2)(T1).
Choosing
η ≤ min
n u(T1)u(2)(T1) 3Smax
2
,2
3
s(2)
⋆
C2 u(T1), 2
3
s(3)
⋆
C3 u(T1), 1
6
o
, (C.9)
we get s ̇(t) ≥ 8 u(T1)u(2)(T1) > 0 across the band. Thus s overshoots to 1/3 + η in time at most η/(8u(T1)u(2)(T1)), and at any last contact with s = 1/3 + η the same inequality shows s ̇ > 0, so the vector field points inward. Therefore, s cannot return below 1/3 + η. Together with (C.5), this completes the proof: s reaches 1/3 in finite time, then crosses to 1/3 + η in finite time, and never falls back below.
32

C.2 Phase IIb: Approximate convergence of the summary statistics
After the entrance time T1′, the error ∆(t) := 1 − u(t) satisfies
∆(t) = bΘ(t) +
Zt
T′
1
KΘ(t, τ ) ∆(τ ) dτ, t ≥ T ′
1, (C.10)
with
KΘ(t, τ ) =
d
X
i=1
8 λ2
i (w⋆
i )2 e 4λi Θ(t)−Θ(τ ) , hΘ(t) :=
d
X
i=1
λiw⋆
i wi(T ′
1) e 4λi Θ(t)−Θ(T ′
1) ,
bΘ(t) := 1 − hΘ(t) −
Zt
T′
1
KΘ(t, τ ) dτ.
We will repeatedly use the following facts:
(i) 1 ≥ ∆(τ ) ≥ 0 and KΘ(t, τ ) ≥ 0 for t ≥ τ ≥ T1′.
(ii) Θ′(t) = 1 − 3s(t) ≤ −s0 < 0, hence e 4λ(Θ(t)−Θ(τ)) ≤ e−4s0λ (t−τ) for t ≥ τ ≥ T1′.
The first fact results from Lemma 11. For a cutoff λc > 0 let
I< := {i : λi < λc}, I≥ := {i : λi ≥ λc}.
Define
T (λc) :=
X
λi<λc
λi (w⋆
i )2, s(2)
⋆ :=
d
X
i=1
λ2
i (w⋆
i )2, s(T ′
1) =
d
X
i=1
λi wi(T ′
1)2 ≤ 1,
and the head alignment term
S≥(λc) :=
X
λi≥λc
λi w⋆
i wi(T ′
1) ≤
X
λi≥λc
λi (w⋆
i )2 1/2 X
λi≥λc
λi wi(T ′
1)2 1/2
≤
q
s(2)
⋆ s(T1).
Proposition 13. For all t ≥ T1′ and any cutoff λc > 0,
∆(t) ≤ T (λc) +
q
T (λc) s(T1′ ) + S≥(λc) e− 4s0 λc (t−T ′
1). (C.11)
Proof. From the Volterra equation (C.10) and the definition of bΘ,
∆(t) = (1 − hΘ(t)) +
Zt
T′
1
KΘ(t, τ ) ∆(τ ) − 1 dτ.
Since 0 ≤ ∆(τ ) and KΘ ≥ 0, the integral is nonpositive. Hence
∆(t) ≤ (1 − hΘ(t))+.
Now split the spectrum into I< = {i : λi < λc} and I≥ = {i : λi ≥ λc}. Using Θ(t) ≤ Θ(T1′) and
Θ′(t) ≤ −s0, we obtain
(1 − hΘ(t))+ ≤
X
i∈I<
λi(w⋆
i )2 +
X
i∈I<
λi|w⋆
i wi(T ′
1)| +
X
i∈I≥
λi|w⋆
i wi(T ′
1)| e−4s0λc (t−T ′
1).
The first sum equals T (λc). By Cauchy–Schwarz,
X
i∈I<
λi|w⋆
i wi(T ′
1)| ≤
q
T (λc) s(T1′).
The last sum is bounded by S≥(λc)e−4s0λc (t−T ′
1). Combining these estimates yields (C.11).
33

Corollary 1 (Time to reach accuracy ε). Fix ε ∈ (0, 1) and choose λε > 0 such that
T (λε) ≤ ε
4,
q
T (λε) s(T1′) ≤ ε
4 ⇐⇒ T (λε) ≤ min ε
4 , ε2
16 s(T1′) . (C.12)
Then
T2(ε) := T ′
1+ 1
4s0 λε
log 4 S≥(λε)
ε (C.13)
satisfies ∆(t) ≤ ε for all t ≥ T2(ε).
Proof. From (C.11) with λc = λε and (C.12),
∆(t) ≤ ε
4+ε
4 + S≥(λε) e−4s0λε (t−T ′
1) = ε
2 + S≥(λε) e−4s0λε (t−T ′
1).
Choosing t so that the last term is ≤ ε/2 gives (C.13).
Corollary 2 (Power-law spectral tail). Suppose T (λ) ≍ Ctailλβ as λ ↓ 0 with β = 1 − 1
a ∈ (0, 1). Then
λε ≍ min{ε, ε2/s(T1′)}
Ctail
1/β
, T2(ε) ≲ T ′
1+ 1
4s0
Ctail
min{ε, ε2/s(T1′)}
1/β
log 1
ε.
In particular, when ε is small and s(T1′) ≤ 1, the quadratic condition dominates:
T2(ε) ≲ T ′
1+ 1
4s0
ε− 2/β log 1
ε = T′
1+ 1
4s0
ε− 2a
a−1 log 1
ε.
C.2.1 Technical lemma
It will be convenient to approximate the discrete measure μd by a continuous reference measure with density proportional to λ 1−1/a near λ = 0. This approximation is crucial in Phase II, since the long-time behavior of the kernel KΘ depends only on the small-λ (tail) mass of μd, which in turn reflects the power-law spectrum assumption. The following proposition shows that, with high probability, μd has a similar tail behaviour to its continuous counterpart.
Proposition 14 (Spectral/teacher tail near λ = 0 holds w.h.p.). Let a > 1 and define the spectrum by
λi := i−a/Hd,a, where Hd,a = Pd
j=1 j−a. Let w⋆
i
i.i.d.
∼ N (0, 1), independent of (λi), and set
μd := 8
d
X
i=1
λi(w⋆
i )2 δλi .
Fix constants C⋆ > 1 and ρ ∈ (0, 1), and define the tail scale Λd := C⋆ λd = C⋆ d−a/Hd,a and the geometric bins
Bk := ρk+1Λd, ρkΛd , k = 0, 1, . . . , K,
where K := ⌈log1/ρ(C⋆)⌉ − 1. Then there exist constants C−, C+, c > 0 depending only on (a, ρ, C⋆) such
that, for all sufficiently large d, with probability at least 1 − e−cd,
C−
Z
Bk
λ−1
a dλ ≤ μd(Bk) ≤ C+
Z
Bk
λ−1
a dλ for all k = 0, 1, . . . , K. (C.14)
Consequently, with the same probability bound, for every λ ∈ (0, Λd],
μd (0, λ] ≍ λ 1− 1
a , (C.15)
and, more generally, for any nonnegative step test function φ(λ) = PK
k=0 ak 1Bk (λ),
C−
Z Λd
0
λ−1
a φ(λ) dλ ≤
Z
(0,Λd]
φ(λ) μd(dλ) ≤ C+
Z Λd
0
λ−1
a φ(λ) dλ. (C.16)
Proof. We split the proof into several steps.
34

Step 1: Bin sizes are linear in d. Let Ik := { 1 ≤ i ≤ d : λi ∈ Bk }. Since λi = i−a/Hd,a, the condition λi ≤ t is equivalent to i ≥ (tHd,a)−1/a. Thus the counting function
N (t) := #{i : λi ≤ t} = d −
l
(tHd,a)−1/am
+ 1.
Therefore,
|Ik| = N (ρkΛd) − N (ρk+1Λd) =
l
(ρk+1ΛdHd,a)−1/am
−
l
(ρk Λd Hd,a )−1/a m
.
Using ΛdHd,a = C⋆d−a gives
|Ik| =
l
ρ−(k+1)/a C −1/a
⋆d
m
−
l
ρ−k/a C −1/a
⋆d
m
.
Hence, for all d large enough,
c1 d ρ−k/a ≤ |Ik| ≤ c2 d ρ−k/a (k = 0, 1, . . . , K), (C.17)
for constants c1, c2 > 0 depending only on (a, ρ, C⋆). Thus |Ik| = Θ(d ρ−k/a), and K is a fixed constant (independent of d). Note: for the last bin BK, the lower endpoint may fall below λd, but by definition IK only counts actual indices i ≤ d.
Step 2: Deterministic comparison of P
i∈Ik λi. For i ∈ Ik we have ρk+1Λd < λi ≤ ρkΛd, so
(ρk+1Λd) |Ik| ≤
X
i∈Ik
λi ≤ (ρkΛd) |Ik|.
On the other hand,
Z
Bk
λ−1
a dλ = (ρkΛd) 1− 1
a − (ρk+1Λd) 1− 1
a
1− 1
a
= 1 − ρ 1− 1
a
1− 1
a
Λ 1− 1
a
d ρ k(1− 1
a ). (C.18)
Since a > 1, the exponent 1 − 1/a > 0. Using (C.17) and (C.18), there exist constants D−, D+ > 0
(depending only on a, ρ, C⋆ and the bounded factor H−1/a
d,a ∈ [ ζ(a)−1/a, 1 ]) such that
D−
Z
Bk
λ−1
a dλ ≤
X
i∈Ik
λi ≤ D+
Z
Bk
λ−1
a dλ (k = 0, 1, . . . , K). (C.19)
Step 3: Concentration for the teacher weights. Let Sk := P
i∈Ik (w⋆
i )2. Since Sk ∼ χ2
|Ik| and
|Ik| ≥ c1d by (C.17), the standard χ2 tail bound yields, for any ε ∈ (0, 1),
P Sk − |Ik| > ε|Ik| ≤ 2 exp − ε2
4 |Ik| ≤ 2 e−c2d.
Since K + 1 is fixed, a union bound gives
P ∀k = 0, . . . , K : (1 − ε)|Ik| ≤ Sk ≤ (1 + ε)|Ik| ≥ 1 − e−cd (C.20)
for some c > 0 independent of d.
Step 4: Comparing μd(Bk) to the bin integral. On the event in (C.20),
8(1 − ε)
X
i∈Ik
λi ≤ μd(Bk) = 8
X
i∈Ik
λi(w⋆
i )2 ≤ 8(1 + ε)
X
i∈Ik
λi.
Combining with (C.19) proves (C.14) with
C− := 8(1 − ε)D−, C+ := 8(1 + ε)D+.
35

Step 5: Tail. Summing (C.14) over {j ≥ m} where m is the unique index such that λ ∈ (ρm+1Λd, ρmΛd], and using the geometric form (C.18), yields
μd (0, λ] ≍ Λ 1− 1
a
d ρ m(1− 1
a ) ≍ λ 1− 1
a (since ρm ≍ λ/Λd),
which is (C.15). The step-function bound (C.16) follows from linearity, as R
(0,Λd] φ dμd = P
k ak μd(Bk) and the same for the right-hand integrals.
The following lemma formally shows that after T1′, u(t) and s(t) cannot go above 1. In particular, it justifies the positivity of ∆(t).
Lemma 11 (Post-alignment barrier and correlation bound). Let Q = diag(λi) ≻ 0 and let w⋆ satisfy ⟨w⋆, Qw⋆⟩ = 1. Consider the population gradient flow for anisotropic phase retrieval with Gaussian inputs, and define
s(t) := ⟨w(t), Qw(t)⟩, u(t) := ⟨w(t), Qw⋆⟩.
Fix a time t0 (e.g. t0 = T1′) such that
0 < u(t0) < 1, s(t0) ≤ 1.
Then:
1. s(t) ≤ 1 for all t ≥ t0 (forward invariance of {s ≤ 1}).
2. 0 < u(t) ≤ 1 for all t ≥ t0, and in fact u(t) < 1 for every finite t ≥ t0 unless w(t0) = w⋆.
Proof. Work with the Q-inner product ⟨x, y⟩Q := ⟨x, Qy⟩. Decompose w into its Q-orthogonal parts:
w = u w⋆ + z, ⟨z, Qw⋆⟩ = 0.
Then
s = ⟨w, Qw⟩ = u2 + ∥z∥2
Q, ∥z∥2
Q = s − u2 ≥ 0. (C.21)
Claim 0 (pre-boundary: u < 1). Since s(t0) ≤ 1, Cauchy–Schwarz in ⟨·, ·⟩Q gives
u(t0) = ⟨w(t0), Qw⋆⟩ ≤ ∥w(t0)∥Q ∥w⋆∥Q = ps(t0) ≤ 1,
and by assumption u(t0) > 0; hence 0 < u(t0) < 1. Moreover, as long as s(t) < 1, the same inequality implies u(t) ≤ ps(t) < 1. Thus before any potential first time when s could reach the boundary 1, we indeed have u(t) < 1.
Claim 1 (uniform drift for s ≥ 1). Recall that
s ̇ = 8(1 − 3s) s(2) + 16u u(2).
Using λmin⟨z, Qz⟩ ≤ s(2) and (C.21), when s ≥ 1 we have 1 − 3s ≤ −2, hence
s ̇ ≤ 8(1 − 3s) s(2) ≤ −16 s(2) ≤ −16λmin ⟨z, Qz⟩ = −16λmin ∥z∥2
Q = −16λmin (s − u2). (C.22)
Claim 2 (no upward crossing at s = 1). Let t1 > t0 be a first time with s(t1) = 1 and s(t) < 1 for
t < t1 (if no such t1 exists, we are done). By the discussion in Claim 0, we then have u(t−
1)≤
q
s(t−
1 ) < 1,
hence u(t1) ≤ 1 by continuity. By definition of first hitting, there exists ε > 0 with s(t) ≥ 1 for all t ∈ [t1, t1 + ε), so (C.22) applies on (t1, t1 + ε). Taking the right Dini derivative and using continuity of s − u2,
D+s(t1) := lim sup
h↓0
s(t1 + h) − s(t1)
h ≤ −16λmin lti↓tm1
s(t) − u(t)2 = −16λmin (1 − u(t1)2) ≤ 0.
36

Thus the vector field is inward-pointing (nonpositive) at the boundary, which contradicts an upward crossing from s < 1 to s > 1 at t1. Hence s(t) ≤ 1 for all t ≥ t0.
Claim 3 (u ≤ 1 and strictness). For all t, Cauchy–Schwarz gives
|u(t)| ≤ ∥w(t)∥Q ∥w⋆∥Q = ps(t) ≤ 1,
so 0 < u(t) ≤ 1 for t ≥ t0 (positivity after T1′ follows from the Volterra positivity in Phase I). Finally,
unless w(t0) = w⋆, the real-analytic gradient flow reaches the minimizer only as t → ∞, so u(t) < 1 for all finite t ≥ t0.
Next, we show u(t) and s(t) → 1.
Lemma 12 (Convergence of s(t) and u(t)). As t → ∞,
s(t) → 1, u(t) → 1.
Proof. By Lemma 5, the trajectory w(t) is bounded, hence precompact in Rd. Moreover,
L ̇(t) = −∥∇L(w(t))∥2 ≤ 0,
so L(w(t)) is nonincreasing and convergent. Phase IIa yields forward invariance of the region {s > 1
3 }:
there exists T1′ ≥ 0 such that s(t) > 1
3 for all t ≥ T1′. By LaSalle’s invariance principle, the ω-limit set
Ω := ω : ∃ tn → ∞ with w(tn) → ω
is nonempty, compact, invariant, and contained in the largest invariant subset of {∇L = 0} ∩ {s ≥ 1
3 }.
By the critical-point characterization in Section 3 (Proposition 2), every critical point with s > 1
3 is of
the form w = ±w⋆, under the normalization P
i λi(w⋆
i )2 = 1. In particular, all such critical points satisfy s = 1 and u = ±1. Hence for any ω ∈ Ω we must have (s(ω), u(ω)) ∈ {(1, 1), (1, −1)}. Since s(·), u(·) are continuous, it follows that
s(tn) → 1, u(tn) → ±1
for every sequence tn → ∞ with w(tn) → ω. Phase I guarantees u(T1′) > 0, and positivity is forward
invariant (via the Volterra representation after T1′), so u(t) > 0 for all t ≥ T1′. Therefore, every limit point must satisfy u(ω) = +1. Thus (s(t), u(t)) → (1, 1) as t → ∞. Finally, if s(t) or u(t) did not converge, there would exist ε > 0 and a sequence tn → ∞ such that either |s(tn) − 1| ≥ ε or |u(tn) − 1| ≥ ε. By precompactness, we may extract a subsequence w(tnk ) → ω ∈ Ω, but then (s(tnk ), u(tnk )) → (1, 1), a contradiction. Hence s(t) → 1 and u(t) → 1.
D Phase III: Scaling Laws
We first show in Section D.1 that the MSE does not change significantly from initialization. In Section D.2, we then characterize its decay for t ≥ T2.
D.1 Stability of the MSE for t ≤ T2
Proposition 4. Let σ⋆2 = 1
d
Pd
i=1(w⋆
i )2. Under the assumptions of Theorem 1 we have
MSE(T2) − σ2
⋆ ≲ ε−a
d
1/3
+ log d
d
1/3
.
37

Proof. Step 1: Variation of constants. For each coordinate i,
w ̇ i(t) = 4λi 1 − 3s(t) wi(t) + 8λi u(t) w⋆
i , Θ(t) :=
Zt
0
(1 − 3s(τ )) dτ.
By Duhamel’s formula, for all t ≥ 0,
wi(t) = e4λiΘ(t)wi(0) + 8λiw⋆
i
Zt
0
e4λi(Θ(t)−Θ(τ)) u(τ ) dτ. (D.1)
Step 2: Phase clocks and the key split. Let T1′ be the first time s(t) = 1
3 . Then Θ increases on
[0, T1′] and decreases on [T1′, ∞). Define
Θmax := Θ(T ′
1), Λ(t) := Θmax − Θ(t), t ≥ T ′
1.
Fix t ≥ T1′. Splitting the integral in (D.1) at T1′ and changing variables to Θ on each side, and using 0 ≤ u ≤ 1, we obtain the bound
Zt
0
e4λi(Θ(t)−Θ(τ )) dτ ≤ C 1 − e−4λiΘmax
λi
+ 1 − e−4λiΛ(t)
λi
!
, (D.2)
where C = C(δ, s0). This refines earlier estimates by accounting for the change of sign in Θ(t) − Θ(τ ) across phases.
Step 3: Frontier at T2 and inactive bound. At time T2, fix ζ ∈ (0, 1] and define the index sets
Iζ (T2) := { i : 4λi Λ(T2) ≥ ζ }, Ic
ζ (T2) := [d] \ Iζ (T2).
For i ∈ Ic
ζ (T2), 4λiΛ(T2) ≤ ζ, so 1 − e−4λiΛ(T2) ≤ 4λiΛ(T2). Combining (D.1) and (D.2), and after absorbing constants,
|wi(T2)| ≤ e4λiΘ(T2)|wi(0)| + 8λi|w⋆
i | · C 1−e−4λiΘmax
λi + 4Λ(T2) ≤ eζ |wi(0)| + C′ζ |w⋆
i |. (D.3)
Step 4: Active correlation and energy. On Iζ(T2), λi ≥ ζ/(4Λ(T2)). Applying the weighted Cauchy–Schwarz inequality P
i |xiyi| ≤ (P x2
i /λi)1/2(P λiy2
i )1/2, we get
X
i∈Iζ (T2)
|w⋆
i | |wi(T2)| ≤
X
i∈Iζ (T2)
(w⋆
i )2 λi
1/2 X
i∈Iζ (T2)
λi wi(T2)2 1/2
≤
q 4Λ(T2) ζ
pd σ⋆2
ps(T2).
Hence the active correlation contribution satisfies
2
d
X
i∈Iζ (T2)
w⋆
i wi(T2) ≲
s
Λ(T2)
ζ d . (D.4)
Similarly, for the active energy,
1
d
X
i∈Iζ (T2)
wi(T2)2 ≤ 1
d λmin(Iζ (T2))
X
i∈Iζ (T2)
λi wi(T2)2 ≤ 4Λ(T2)
ζ d s(T2) ≲ Λ(T2)
ζ d , (D.5)
since s(T2) ≤ 1.
Step 5: Inactive correlation and energy. From (D.3) and Cauchy–Schwarz, and using ∥w⋆∥22 =
d σ⋆2,
X
i∈I c
ζ (T2)
|w⋆
i | |wi(T2)| ≤ ∥w⋆∥2
X
i∈I c
ζ (T2)
wi(T2)2 1/2
≤
pd σ⋆2 2e2ζ ∥w(0)∥2
2 + 8ζ2 d σ2
⋆
1/2
.
38

Therefore,
2
d
X
i∈I c
ζ (T2)
|w⋆
i | |wi(T2)| ≲ ζ + d−1/2. (D.6)
Moreover,
1
d
X
i∈I c
ζ (T2)
wi(T2)2 ≤ 2e2ζ
d ∥w(0)∥2
2 + 8ζ2 σ2
⋆ ≲ ζ2 + d−1. (D.7)
Step 6: Combination and optimization. Since
MSE(T2) − σ2
⋆ = −2
d
X
i
w⋆
i wi(T2) + 1
d
X
i
wi(T2)2,
combining (D.4)–(D.7) yields
MSE(T2) − σ2
⋆≲
q Λ(T2)
ζ d + Λ(T2)
ζd
| {z }
active
+ ζ + ζ2
| {z }
inactive
+ d−1/2. (D.8)
The right-hand side is minimized (up to constants) by taking
ζ⋆ ≍ Λ(T2)
d
1/3
∧ 1,
which balances the active and inactive contributions. For this choice,
s
Λ(T2)
ζ⋆d ≍ Λ(T2)
ζ⋆d ≍ ζ⋆ ≍ Λ(T2)
d
1/3
.
Therefore,
MSE(T2) − σ2
⋆ ≲ Λ(T2)
d
1/3
+ d−1/2.
Finally, the Phase IIb analysis (via the Volterra–renewal argument) gives 1 − u(t) ≍ Λ(t)−1/a. At t = T2, 1 − u(T2) = ε, hence Λ(T2) ≍ ε−a. Substituting into the above bound gives
MSE(T2) − σ2
⋆ ≲ ε−a
d
1/3
+ d−1/2.
Adding the Phase I “plateau” contribution (log d/d)1/3 yields the stated result.
D.2 Evolution of the MSE for t ≥ T2
We first analyze the idealized dynamics where u ≡ s ≡ 1 (Section D.2.1), and then control the approximation error in Section D.2.2.
D.2.1 Ideal case where u ≡ s ≡ 1
We begin by studying the evolution of the MSE under the idealization u ≡ s ≡ 1.
Lemma 13. In the post-T2 idealization (s ≡ u ≡ 1), the coordinate errors ei(t) := wi(t) − w⋆
i evolve as
ei(T2 + τ ) = ei(T2) e−8λiτ (τ ≥ 0).
Consequently,
MSE(T2 + τ ) = 1
d
d
X
i=1
ei(T2)2 e−16λiτ = MSE(T2) Sbd(τ ),
39

where the normalized spectral mixing curve is
Sbd(τ ) :=
d
X
i=1
πi e−16λiτ , πi := ei(T2)2
Pd
j=1 ej (T2)2 ,
d
X
i=1
πi = 1.
Proof. Setting s ≡ u ≡ 1 in the gradient flow gives
w ̇ (t) = −8Q w(t) − w⋆ .
Defining e(t) = w(t) − w⋆ yields e ̇(t) = −8Qe(t). Since Q is diagonal with entries (λi), each coordinate satisfies e ̇i(t) = −8λiei(t), hence
ei(T2 + τ ) = ei(T2)e−8λiτ .
Squaring and averaging proves the formula for the MSE. Factoring MSE(T2) defines the weights πi, and the claim follows.
Since Sbd depends on the (random) weights πi, we introduce the proxy
Sd(τ ) := 1
d
d
X
i=1
e−βdτ i−a , βd = 16Ld,
which corresponds to uniform weights. The next result shows that this is a valid approximation.
Proposition 15. There exists a constant C < ∞, independent of d, such that
∥π∥∞ ≤ C
d , and Sbd(τ ) ≤ C Sd(τ ).
Proof. From Proposition 4, maxi |ei(T2)| = O(1) while MSE(T2) ≥ c > 0 with high probability, hence
d
X
j=1
ej(T2)2 ≍ d.
Therefore πi = ei(T2)2/ P
j ej(T2)2 = O(1/d) uniformly, giving ∥π∥∞ ≤ C/d. The second inequality follows directly.
We now analyze the asymptotics of Sd(τ ).
Proposition 16 (Asymptotics of the spectral average). Let a > 1 and set xd := (βdτ )1/a. Then Sd(τ ) satisfies:
1. Early time (βdτ ≪ 1):
Sd(τ ) = 1 − βdτ
d
d
X
i=1
i−a + (βdτ )2
2d
d
X
i=1
i−2a + O (βdτ )3
d.
Under trace normalization Ld = 1/Hd,a this simplifies to
Sd(τ ) = 1 − 16
d τ + O τ2
d.
2. Mesoscopic window (1 ≪ xd ≪ d):
Sd(τ ) = 1 − Γ 1 − 1
a
xd
d + o xd
d.
40

3. Late time (xd ≳ d):
Sd(τ ) ≤ exp −βdτ d−a .
Proof. (i) For z ∈ [0, 1], e−z = 1 − z + z2/2 + R3(z) with |R3(z)| ≤ z3/6. If βdτ ≪ 1, all zi = βdτ i−a are small, and averaging the expansion over i = 1, . . . , d yields the stated series. (ii) Writing
1 − Sd(τ ) = 1
d
d
X
i=1
1 − e−(xd/i)a ,
and defining gx(t) = 1 − e−(x/t)a, we have
Z∞
0
gx(t) dt =
Z∞
0
1 − e−(x/t)a dt = x Γ 1 − 1
a,
by the substitution y = (x/t)a. Since gx is monotone decreasing in t,
Zd
1
gx(t) dt ≤
d
X
i=1
gx(i) ≤ gx(1) +
Zd
1
gx(t) dt.
Thus
d
X
i=1
gx(i) = x Γ(1 − 1/a) + O(1) + O(xad1−a).
Dividing by d proves the expansion for 1 ≪ xd ≪ d.
(iii) For i ≤ d, i−a ≥ d−a, hence e−βdτi−a ≤ e−βdτd−a. Averaging over i gives the bound.
Corollary 3. For all τ ≥ 0,
MSE(T2 + τ ) = MSE(T2) Sbd(τ ) ≤ C MSE(T2) Sd(τ ).
D.2.2 Handling the approximation term
Let δs(t) = 1 − s(t) and δu(t) = 1 − u(t). We will first show that the convergence approximation remains of order ε after T2.
Lemma 14. Assume Phase IIb yields, at time T2,
|δs(T2)| + |δu(T2)| ≤ ε. (D.9)
Then there exists a constant C > 0 and ε0 > 0 such that, if ε ≤ ε0, then for all τ ≥ 0,
|δs(T2 + τ )| + |δu(T2 + τ )| ≤ C ε. (D.10)
Proof. Write τ = t − T2. After T2, the full flow satisfies
w ̇ (t) = −8Qw(t) + (8δu(t) − 12δs(t))Qw⋆ − 12 δs(t) Qw(t).
This is a linear time-varying system. Its mild form (variation of constants) is
w(T2 + τ ) = e−8Qτ w(T2) +
Zτ
0
e−8Q(τ −s)h
(8δu − 12δs)(T2 + s) Qw⋆ − 12 δs(T2 + s) Qw(T2 + s)
i
ds. (D.11)
Set
A(τ ) := e−8Qτ w(T2), B(τ ) :=
Zτ
0
e−8Q(τ −s)h
(8δu − 12δs)(T2 + s) Qw⋆ − 12 δs(T2 + s) Qw(T2 + s)
i
ds,
41

so that w(T2 + τ ) = A(τ ) + B(τ ). We can interpret A(τ ) as the term giving the dynamics in the ideal case, and B(τ ) as a perturbation term.
Step 1. (Uniform semigroup bounds). Since Q ≻ 0,
Z∞
0
e−8QrQ dr = 1
8I,
Z∞
0
Q1/2e−8QrQ dr = 1
8 Q1/2.
Hence for any bounded h and any vector v,
Zτ
0
e−8Q(τ−s)h(s)Qv ds
2
≤1
8 ∥h∥∞∥v∥2, (D.12)
Q1/2
Zτ
0
e−8Q(τ−s)h(s)Qv ds
2
≤1
8 ∥h∥∞∥Q1/2v∥2. (D.13)
Step 2. (Bounding B(τ )). Let g(s) := 8δu(T2 + s) − 12δs(T2 + s). On [T2, T2 + τ ], |g(s)| ≤ 20 G(τ ) where
G(τ ) := sup
0≤t≤τ
(|δs(T2 + t)| + |δu(T2 + t)|).
By (D.12)–(D.13),
∥B(τ )∥2 ≤ c1 G(τ ), ∥Q1/2B(τ )∥2 ≤ c2 G(τ ), (D.14)
for some absolute constants c1, c2.
Step 3. (Comparing with the ideal trajectory). The “ideal” evolution keeps only the base drift:
wideal(T2 + τ ) := w⋆ + e−8Qτ (w(T2) − w⋆) = w⋆ + e−8Qτ e(T2),
so that
sideal(T2 + τ ) = ∥Q1/2wideal(T2 + τ )∥2
2, uideal(T2 + τ ) = ⟨wideal(T2 + τ ), Qw⋆⟩.
Because e−8Qτ is a contraction,
|1 − sideal(T2 + τ )| ≤ |δs(T2)| ≤ ε, |1 − uideal(T2 + τ )| ≤ |δu(T2)| ≤ ε.
Step 4. (Deviations of s and u). From w(T2 + τ ) = A(τ ) + B(τ ),
s(T2 + τ ) = ∥Q1/2(A(τ ) + B(τ ))∥2
2 = sideal(T2 + τ ) + 2⟨Q1/2wideal(T2 + τ ), Q1/2B(τ )⟩ + ∥Q1/2B(τ )∥2
2,
u(T2 + τ ) = ⟨A(τ ) + B(τ ), Qw⋆⟩ = uideal(T2 + τ ) + ⟨B(τ ), Qw⋆⟩.
Hence,
|δs(T2 + τ )| ≤ ε + 2 ∥Q1/2B(τ )∥2 + ∥Q1/2B(τ )∥2
2, (D.15)
|δu(T2 + τ )| ≤ ε + ∥B(τ )∥2 ∥Qw⋆∥2 ≤ ε + c3 G(τ ), (D.16)
using (D.14). Step 5. Combining (D.15)–(D.16) and the definition of G(τ ) gives
G(τ ) ≤ 2ε + a G(τ ) + b G(τ )2, a := 2c2 + c3, b := c2
2.
Fix M ≥ 3 and set ε0 := min (M − 2)/(2aM ), (M − 2)/(2bM 2) . If ε ≤ ε0, define τ ⋆ := sup{τ : G(τ ) ≤ M ε}. Then on [0, τ ⋆],
G(τ ) ≤ 2ε + aM ε + bM 2ε2 ≤ M ε.
By continuity, τ ⋆ = ∞, so G(τ ) ≤ M ε for all τ . Setting C := M gives
|δs(T2 + τ )| + |δu(T2 + τ )| ≤ C ε, ∀τ ≥ 0.
42

Let τ = t − T2(ε) and set
MSEfull(T2 + τ ) := 1
d ∥e(T2 + τ )∥2
2, MSEideal(T2 + τ ) := 1
d
d
X
i=1
ei(T2)2 e−16λiτ .
Define ∆e(τ ) := efull(T2 + τ ) − eideal(T2 + τ ). Subtracting the full and ideal flows yields, for τ ≥ 0,
∆e(τ ) =
Zτ
0
e−8Q(τ−s) − 12 δs(T2 + s) Q eideal(T2 + s) + ∆e(s) + 8δu − 12δs (T2 + s) Qw⋆ ds. (D.17)
Theorem 5. Assume (D.10) holds. There exist absolute constants A, B, C < ∞ such that, for all τ ≥ 0,
MSEfull(T2 + τ ) − MSEideal(T2 + τ ) ≤ A ε MSEideal(T2) − MSEideal(T2 + τ )
+ B ε2 1
d
d
X
i=1
1 − e−8λiτ 2 (w⋆
i )2 + C ε F (τ ), (D.18)
where F (τ ) := sup0≤s≤τ ∥∆e(s)∥2/√d. In particular, if ε ≤ ε0 is small enough so that Cε ≤ 1
2 , then the feedback term can be absorbed to give
MSEfull(T2 + τ ) − MSEideal(T2 + τ ) ≤ A
1 − Cε ε MSEideal(T2) − MSEideal(T2 + τ ) (D.19)
+B
1 − Cε ε2 1
d
d
X
i=1
1 − e−8λiτ 2 (w⋆
i )2, (D.20)
and, e.g., for ε ≤ 1/3, (1 − Cε)−1 ≤ 2 (after adjusting C if needed).
Proof. (i) Term with Qeideal. Using eideal(T2 + s) = e−8Qs e(T2) and semigroup commutation,
Zτ
0
e−8Q(τ−s)Qeideal(T2 + s) ds = τ e−8Qτ Qe(T2).
Taking inner product with eideal(T2 + τ ) = e−8Qτ e(T2), dividing by d, and using xe−x ≤ 1 − e−x with x = 16λiτ ,
2
d
D
eideal(T2 + τ ),
Zτ
0
e−8Q(τ−s)Qeideal(T2 + s) ds
E
≤1
8 MSEideal(T2) − MSEideal(T2 + τ ) .
Multiplying by |δs| ≤ ε yields the first term in (D.18) with A = 1
8. (ii) Teacher–forcing term. Let
T (τ ) :=
Zτ
0
e−8Q(τ−s) 8δu − 12δs (T2 + s) Qw⋆ ds, g(s) := 8δu(T2 + s) − 12δs(T2 + s).
Then |g(s)| ≤ 20ε and
Ti(τ ) = λiw⋆
i
Zτ
0
g(s) e−8λi(τ −s) ds,
Zτ
0
g(s) e−8λi(τ−s) ds ≤ 20ε 1 − e−8λiτ
8λi
.
Hence
1
d ∥T (τ )∥2
2 ≤ 25
4 ε2 1
d
d
X
i=1
1 − e−8λiτ 2 (w⋆
i )2,
43

which yields the second term in (D.18) with B = 25
4 . The bound is saturating: for small τ , one may use
1 − e−8λiτ ≤ 8λiτ to recover the quadratic behavior
1
d ∥T (τ )∥2
2 ≤ 400 ε2 τ 2 1
d
d
X
i=1
λ2
i (w⋆
i )2,
whereas for large τ it saturates at O(ε2) · 1
d
P
i(w⋆
i )2. (iii) Self–interaction term. Write
S(τ ) :=
Zτ
0
e−8Q(τ−s) − 12 δs(T2 + s) Q ∆e(s) ds.
For each coordinate i,
Si(τ ) = −12
Zτ
0
λie−8λi(τ−s) δs(T2 + s) ∆ei(s) ds.
Using |δs| ≤ ε and the uniform L1 bound R ∞
0 λie−8λiu du = 1
8 , Young’s inequality gives
∥S(τ )∥2
√d ≤ 3
2 ε sup
0≤s≤τ
∥∆e(s)∥2
√d .
Thus the self–interaction contributes a linear feedback term Cε F (τ ) in (D.18) with C = 3
2 . Absorbing this term to the left yields (D.19) whenever Cε < 1.
Corollary 4. Under (D.10) and for ε ≤ ε0 small enough,
MSEfull(T2 + τ ) − MSEideal(T2 + τ ) ≤ C1 ε MSEideal(T2) − MSEideal(T2 + τ ) + C2
ε2
d s(2)
⋆.
In particular, for each fixed τ the difference is O(ε) relative to the drop of the ideal MSE from T2 to T2 + τ , plus a negligible O(ε2/d) additive term.
E Additional numerical experiments
E.1 Approximation w ̇ i(t) ≈ 8λi(w⋆
i − wi(t)).
We empirically confirm the approximation used for the Phase III analysis. In Figure 4 we compare the MSE of the population dynamic with the one predicted by the approximation w ̇ i(t) ≈ 8λi(w⋆
i − wi(t)) (i.e. we froze u(t) and s(t) at their convergence value) where T2 is chosen such that u(T2) = 0.9.
E.2 Online SGD
In the main text, we focused on the gradient flow to highlight the phase decomposition. Here, we complement the analysis with simulations of online SGD, see Figure 5. We track the trajectories of the key order parameters when training with a small learning rate and without mini-batching. We used the same parameters as in the previous section, but used empirical gradient and added noise εt ∼ N (0, 0.05). Compared to gradient flow, online SGD exhibits the same qualitative phases, but with additional-
 noise. This suggests that our theoretical scaling laws are robust to stochastic perturbations introduced by SGD. Moreover, the magnitude of fluctuations increases with the spectral decay parameter a. Intuitively, when a is large, only a few top directions dominate the signal, so SGD updates concentrate heavily along these directions, amplifying variance and making the trajectory noisier.
44

Figure 4: Comparison between MSE obtained from the population dynamic, and the approximated one used to derive scaling law (th.) (log-log scale). Parameters: d = 300, η = 10−3.
(a) a = 0.5 (b) a = 1 (c) a = 1.5
Figure 5: Dynamics of online SGD for different a.
E.3 Rate of convergence of u(t)
In Figure 6 we plot log(1 − u(t)) as a function of log t for a = 1, 1.5 and 4 for inputs in dimension d = 500, 2000 and 5000. We observe that the ambient dimension d only starts to affect the dynamics once 1 − u(t) has already become small: larger d makes it harder to learn directions associated with the smallest eigenvalues. Moreover, increasing a extends the initial phase where d plays essentially no role, since learning is then dominated by the leading entries of the spectrum.
45

(a) a = 1.5 (b) a = 2 (c) a = 4
Figure 6: Convergence rate of 1 − u(t) for different a and d (log-log scale).
46

---

## Processing Information

- **Processing Library:** Zotero PDFWorker
- **Processing Date:** 2026-02-10T18:15:23.560Z
- **Text Length:** 96317 characters
- **Success:** Text extraction completed
- **PDF Library Used:** Zotero PDFWorker
- **Pages Processed:** 46 of 46
