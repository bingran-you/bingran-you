# PDF Document: Kou and Meka - 2025 - Smoothed Agnostic Learning of Halfspaces over the Hypercube.pdf

**File Path:** Kou and Meka - 2025 - Smoothed Agnostic Learning of Halfspaces over the Hypercube.pdf

**Processed Date:** 2026-02-10T18:18:26.377Z

**File Size:** 638.09 KB

**Total Pages:** 34

**Extracted Pages:** 34

**PDF Library:** Zotero PDFWorker

**Attachment Item ID:** 3395

**Title:** Smoothed Agnostic Learning of Halfspaces over the Hypercube

**Collection:** Large Files > Random Papers

---

## Extracted Text Content

Smoothed Agnostic Learning of Halfspaces over the Hypercube
Yiwen Kou
Department of Computer Science, UCLA Los Angeles, CA, US evankou@cs.ucla.edu
Raghu Meka
Department of Computer Science, UCLA Los Angeles, CA, US raghum@cs.ucla.edu
Abstract
Agnostic learning of Boolean halfspaces is a fundamental problem in computational learning theory, but it is known to be computationally hard even for weak learning. Recent work (Chandrasekaran et al., 2024) proposed smoothed analysis as a way to bypass such hardness, but existing frameworks rely on additive Gaussian perturbations, making them unsuitable for discrete domains. We introduce a new smoothed agnostic learning framework for Boolean inputs, where perturbations are modeled via random bit -
flips. This defines a natural discrete analogue of smoothed optimality generalizing the Gaussian case. Under strictly subexponential assumptions on the input distribution, we give an efficient algorithm for learning halfspaces in this model, with runtime and sample complexity Oe(npoly( 1
σε )). Previously, such algorithms were known only with strong structural assumptions for the discrete hypercube—for example, independent coordinates or symmetric distributions. Our result provides the first computationally efficient guarantee for smoothed agnostic learning of halfspaces over the Boolean hypercube, bridging the gap between worst-case intractability and practical learnability in discrete settings.
1 Introduction
Halfspaces, or linear threshold functions (LTFs), are one of the most fundamental concept classes in machine learning. In the realizable setting (Valiant, 1984), they are efficiently learnable by classical algorithms such as the Perceptron (Rosenblatt, 1958; Novikoff, 1963), Winnow (Littlestone, 1987), large-margin methods like Support Vector Machines (Cortes and Vapnik, 1995), or by linear programming. These methods exploit linear separability and can perform well even in the presence of irreleva-
nt features.
In contrast, the agnostic learning framework (Haussler, 1992; Kearns et al., 1992), which allows for arbitrary label noise, poses significant algorithmic challenges. In this setting, the goal is to find a hypothesis that competes with the best in a concept class, without assuming that the data is linearly separable. However, agnostic learning of halfspaces is computationally hard in the worst case: even weak learning—achieving error marginally better than random guessing—is NP-hard under standard -
complexity assumptions, both in continuous domains (Feldman et al., 2009) and on the Boolean hypercube (Guruswami and Raghavendra, 2009).
To overcome these barriers, several restricted models have been studied. For example, under random classification noise (RCN), halfspaces remain learnable using modified Perceptron algorithms or linear programming (Blum et al., 1996; Cohen, 1997). Under Massart noise, where adversarial flips are bounded in probability, recent work has led to efficient learning algorithms (Awasthi et al., 2015; Diakonikolas et al., 2019, 2020, 2021). Other lines of work exploit structure in the input distribution: -
Kalai et al. (2008) gave improper agnostic learning algorithms under uniform, spherical,
39th Conference on Neural Information Processing Systems (NeurIPS 2025).
arXiv:2511.17782v1 [cs.LG] 21 Nov 2025

or log-concave distributions by approximating halfspaces with low-degree polynomials, extending earlier Fourier-based methods (Linial et al., 1993).
A more recent and promising direction is based on smoothed analysis, which was introduced to explain the practical performance of algorithms that are worst-case hard (Spielman and Teng, 2001). In learning theory, Chandrasekaran et al. (2024) proposed a smoothed agnostic framework in which the learner competes with the best classifier under slight random perturbations of the inputs. This relaxation enables efficient algorithms for learning low-dimensional concepts, even when worst-case learning is -
intractable. However, their approach is tailored to continuous domains and relies on additive Gaussian noise, and hence is not suitable for discrete domains such as the Boolean hypercube.
Our contribution. We develop a discrete analogue of smoothed agnostic learning for Boolean concept classes over {±1}n, where additive Gaussian noise is ill-defined. Instead of perturbing examples in Euclidean space, we introduce bit-flipping noise: each input coordinate is independently flipped with probability σ. This gives rise to a new benchmark for learning that captures robustness to small discrete perturbations, interpolating between classical agnostic learning (σ = 0) and random guessing (σ-
 = 1/2).
To formalize this, we begin by recalling the standard agnostic learning objective.
Definition 1.1 (Agnostic Optimality) Let X be a domain and F be a class of functions f : X → {±1}. Let D be a distribution over labeled examples (x, y) ∈ X × {±1}. The agnostic error of F under D is defined as
opt = inf
f∈F P(x,y)∼D[f (x) ̸= y].
We now define a smoothed variant of this benchmark, in which each input is perturbed before evaluation. This definition is general and does not assume any particular structure of the domain or distribution.
Definition 1.2 (Smoothed Optimality) Let X be a domain and F be a class of functions f : X → {±1}. Let D be a distribution over labeled examples (x, y) ∈ X ×{±1} and Pσ(x) be a perturbation distribution of x over X . Define the smoothed agnostic error as:
optσ = inf
f∈F P(x,y)∼D;ex∼Pσ(x)[f (xe) ̸= y].
In standard agnostic learning, the goal is to compete with opt under D. Following Chandrasekaran et al. (2024), we instead compete with optσ in Definition 1.2.
Definition 1.3 (Smoothed Agnostic Learning) Fix ε, σ > 0 and δ ∈ (0, 1). An algorithm A learns the class F in the σ-smoothed agnostic setting if, given i.i.d. samples from D, it outputs a hypothesis h : X → {±1} such that with probability at least 1 − δ:
P(x,y)∼D[h(x) ̸= y] ≤ optσ + ε.
As an example, Chandrasekaran et al. (2024) study the case where X = Rn and the perturbation distribution is additive Gaussian noise: Pσ(x) = N (x, σ2In). This formulation relies on the
Euclidean structure of Rn and does not extend to discrete domains. In our setting, we consider X = {±1}n and define perturbations via random bit flips: Pσ(x) = x ⊙ z where z ∼ Nσ is a product distribution with zi = −1 with probability σ and 1 otherwise. This defines a natural
smoothed learning model for the Boolean hypercube that avoids embedding the domain into Rn.
Under this framework, we show that halfspaces over the Boolean cube are efficiently learnable in the smoothed agnostic model under mild distributional assumptions. Our approach extends the classical L1-polynomial regression framework to this smoothed setting. The key idea is that every Boolean halfspace, when composed with small random bit-flip perturbations, admits a low-degree polynomial approximation under the input distribution. To establish this, we analyze a smoothed version of the halfspace-
 defined via a noise operator (Definition 3.2), and construct approximators using Berry–Esseen-type arguments combined with critical index analysis to handle irregular weight vectors. We obtain the following result:
Theorem 1.4 (Subgaussian-Informal, see also Theorem 4.8) Let D be a distribution on {±1}n × {±1} with sub-gaussian x-marginal of variance proxy σ02. There exists an algorithm that learns
2

the class of linear threshold functions in the σ-smoothed setting with N = npoly(σ0/σε) log(1/δ) samples and poly(n, N ) runtime.
This is the first result that establishes efficient smoothed agnostic learning of halfspaces over the Boolean hypercube. While our algorithm is improper, it achieves strong generalization guarantees under natural distributions. Previously, such results for the hypercube were only known under very restricted distributions as discussed below.
2 Related Work
Distributional Assumptions in Halfspace Learning: It is well-understood that agnostically learning halfspaces is intractable in the worst case (Feldman et al., 2009; Guruswami and Raghavendra, 2009), even under relatively benign noise models (Diakonikolas et al., 2022). This has motivated a long line of distribution-specific algorithms that guarantee learnability by leveraging assumptions on the data distribution. Early work focused on uniform or product distributions, where powerful Fourier-analy-
tic techniques yield low-degree approximations (Linial et al., 1993; Klivans et al., 2004a; Blais et al., 2010). Under the uniform hypercube distribution, halfspace concepts exhibit strong Fourier concentration and low noise sensitivity (O’Donnell, 2021), enabling efficient learning via low-degree polynomial approximation (Klivans et al., 2004a). This was extended to symmetric distributions in Wimmer (2010) and to arbitrary product distributions in Blais et al. (2010). However, beyond these there -
are very few general classes of distributions over they hypercube where halfspaces are agnostically learnable.
For continuous distributions, halfspaces were shown to be agnostically learnable under log-concave distributions by Kalai et al. (2008) and this was later extended to intersections and other functions of halfspaces in Kane et al. (2013). Much like the discrete setting, until the recent work of Chandrasekaran et al. (2024), most positive results required strong structural assumptions on the marginal distribution of the examples. This work introduced a new smoothed agnostic model which led to severa-
l new results for learning halfspaces and functions of halfspaces for a much broader class of distributions (e.g., sub-gaussian or sub-exponential densities). Our work continues this progression to very general distributions, but focuses on the Boolean domain and shows that only mild tail bounds (strictly sub-exponential) suffice for efficient learning in the smoothed setting.
Noise Models and Smoothed Analysis: In parallel to distributional assumptions on X, a complementary line of work has tackled label noise models and smoothed analysis. The classical noise models include random classification noise (RCN), where each label is independently flipped with some probability. Blum et al. (1996) gave the first polynomial-time algorithm for learning a halfspace under random classification noise, exploiting the fact that a halfspace’s margin makes it relatively robust to inde-
pendent label flips. A stronger noise model is the Massart noise model, which bounds the adversary by a flipping probability η < 1/2 on each example. Awasthi et al. (2015, 2016); Yan and Zhang (2017); Zhang et al. (2017); Mangoubi and Vishnoi (2019); Diakonikolas et al. (2020) gave efficient algorithms for learning halfspaces with Massart noise over uniform distribution on the sphere and log-concave distributions. On the other hand, with adversarial (malicious) noise, learning halfspaces requires -
additional assumptions. Klivans et al. (2009) designed efficient algorithms for origin-centered halfspaces under malicious noise by assuming isotropic log-concave distribution and small noise rate. In smoothed analysis of learning, one assumes that either the data (Blum and Dunagan, 2002; Kane et al., 2013) or the target concept (Chandrasekaran et al., 2024) is randomly perturbed, so that pathological arrangements are avoided. Chandrasekaran et al. (2024) introduced a smoothed agnostic PAC model i-
n Rd where the learner competes against the best classifier that is robust to slight Gaussian perturbations of examples. Our work can be seen as a Boolean analogue of this idea: rather than perturbing continuous inputs, we require the optimal halfspace to be stable under small random label flips.
3 Preliminaries
We review relevant definitions from Boolean function analysis that will allow us to define a discrete smoothing operator and justify using it in place of the original linear threshold function. We use definitions from the analysis of Boolean functions over product spaces, following the framework of Mossel et al. (2005). Let (Ω1, μ1), . . . , (Ωn, μn) be finite probability spaces and let (Ω, μ) denote
3

their product. In our setting, we take Ωi = {±1} and define μ to be the product distribution Nσ, where each coordinate is 1 with probability 1 − σ and −1 with probability σ, independently.
Definition 3.1 (ρ-noisy copy) Given x ∈ Ω and ρ ∈ [0, 1], a ρ-noisy copy of x is a random vector y ∼ Nρ(x), where each coordinate yi is independently set to xi with probability ρ and to an independent draw from μi with probability 1 − ρ.
Definition 3.2 (Noise operator Tρ) For any function f : Ω → R and ρ ∈ [0, 1], the noise operator Tρ is defined as
(Tρf )(x) = Ey∼Nρ(x)[f (y)].
This definition generalizes the Bonami–Beckner operator (Kahn et al., 1988) when μ is the uniform distribution on the hypercube. Intuitively, Tρf is a smoothed version of f , computed by averaging f over a neighborhood of x with geometric decay controlled by ρ. In particular, T1f = f , and as ρ decreases from 1, Tρf suppresses high-frequency components of f . This operator will be used as our main tool for constructing smoothed approximations to Boolean threshold functions.
Definition 3.3 (Noise stability and noise sensitivity) For any f : Ω → R, the noise stability at parameter ρ is defined as
Sρ(f ) = ⟨f, Tρf ⟩μ.
If f : Ω → {±1}, the noise sensitivity at parameter δ ∈ [0, 1] is given by
N Sδ(f ) = 1
2−1
2 S1−δ(f ) = Px∼μ,y∼N1−δ(x)[f (x) ̸= f (y)].
Equivalently, N Sδ(f ) = Prx,y[f (x) ̸= f (y)] where x and y have Hamming correlation 1 − 2δ. This quantity captures the robustness of f to small input perturbations.
It is well-known that natural Boolean functions with low total influence or low-degree Fourier concentration exhibit low noise sensitivity. In particular, linear threshold functions are noise-stable under both uniform (Peres, 2004) and general product distributions (Blais et al., 2010). The following lemma bounds the noise sensitivity of halfspaces over arbitrary product spaces.
Lemma 3.4 (Theorem 3.2 in Blais et al. (2010)) Let f : Ω → {±1} is a linear threshold function, where the domain Ω = Ω1 × · · · × Ωn has the product distribution μ = μ1 × · · · × μn. Then N Sδ(f ) ≤ 5
4
√δ.
This bound implies that for ρ = 1 − δ close to 1, the smoothed function Tρf closely approximates the original threshold function f . This justifies our strategy of working with Tρf instead of f in the smoothed learning setting: any learner that performs well on Tρf will, up to a small error, also succeed on f .
Notation. We use small boldface characters for vectors and capital bold characters for matrices. We use [d] to denote the set {1, 2, · · · , d}. For a vector x ∈ Rd and i ∈ [d], xi denotes the i-th coordinate
of x, and ∥x∥2 :=
q
Pd
i=1 x2
i the l2 norm of x. For x, y ∈ Rd, we use ⟨x, y⟩ = Pd
i=1 xiyi as the
inner product between them and x ⊙ y = (x1y1, · · · , xdyd) as the Hadamard product between them. We use 1{E} to be the indicator function of some event E. For (x, y) distributed according to D, we denote Dx to be the marginal distribution of x.
4 Technical Overview
In this section, we outline the main steps of our analysis. Our approach follows a reduction-based strategy: we reduce smoothed agnostic learning of Boolean halfspaces to the problem of approximating a smoothed halfspace by a low-degree polynomial, which can then be learned via L1 regression (Section 4.1). We begin by replacing the original target fx(z) = f (x ⊙ z) with a smoothed surrogate T1−ρfx(z) (Definition 3.2), facilitating approximation by low-degree polynomials (Section 4.2).
4

To handle the biased distribution arising from noise perturbation, we introduce a rerandomization and conditioning trick that rewrites each bit as a mixture involving uniform random variables. This allows us to express the smoothed function as a conditional expectation over uniformly random inputs, making it amenable to quantitative central-limit theorems (Berry–Esseen estimates; Section 4.3). We then use a case analysis facilitated by a decomposition of the weight vector (Section 4.4):
1. If a small number of large coordinates (the “head”) dominate, the halfspace’s output is primarily determined by those coordinates, and we can approximate the function directly.
2. Otherwise, the remaining “tail” is regular, and we apply the Berry–Esseen theorem to approximate the Boolean sum by a Gaussian. This reduces the problem to the continuous setting, where we leverage Gaussian-based techniques (the density ratio method from Chandrasekaran et al. (2024)) to construct low-degree polynomial approximations.
Together, these ingredients yield an efficient smoothed learner for Boolean halfspaces under strictly sub-exponential input distributions.
4.1 High-Level Approach via L1egression
Our starting point is the L1-polynomial regression method for agnostic learning. In particular, Kalai et al. (2008) established a powerful reduction from agnostic learnability to low-degree polynomial approximation.
Algorithm 1 L1 Polynomial Regression Algorithm
Input: Sample S = {(x1, y1), . . . , (xN , yN )}, degree bound d 1: Find polynomial p of degree ≤ d to minimize
1 N
N
X
j=1
|p(xj) − yj|.
(This can be done by expanding examples to include all monomials of degree ≤ d and then performing L1 linear regression.) 2: Output hypothesis h(x) = sign(p(x) − t), where t ∈ [−1, 1] is chosen to minimize the classification error on S.
Theorem 4.1 (Theorem 5 in Kalai et al. (2008)) Suppose mindeg(p)≤d EDx [|p(x) − c(x)|] ≤ ε for some degree d and any c in the concept class C. Then, for h output by the degree-d L1 polynomial
regression algorithm with N = poly(nd/ε) examples, ES∼DN [P(x,y)∼D[h(x) ̸= y]] ≤ opt + ε, where opt = minf∈C P(x,y)∼D[f (x) ̸= y]. If we repeat the algorithm r = O(log(1/δ)/ε) times with fresh examples each, and let h be the hypothesis with lowest error on an independent test set of size O(log(1/δ)/ε2), then with probability at least 1 − δ, P(x,y)∼D[h(x) ̸= y] ≤ opt + ε.
Theorem 4.1 says that if the target function f can be approximated in L1 by a low-degree polynomial p with error at most ε, then one can efficiently learn f to misclassification error opt + ε, where opt is the Bayes-optimal error rate under distribution D. Once such a polynomial is shown to exist, Theorem 4.1 implies a computationally efficient learning algorithm with sample complexity N = poly(nd/ε) log(1/δ).
4.2 Smoothed Learning as Non-Worst-Case Approximation
The challenge is that an arbitrary halfspace f (x) = sign(⟨w, x⟩ − θ) might not be well-approximated by any low-degree polynomial over worst-case input distributions. Following Chandrasekaran et al. (2024), we view smoothed learning as a form of non-worst-case approximation. In this smoothed agnostic setting, the learner’s “effective” target concept is the mapping (x, z) 7→ f (x ⊙ z), where z ∈ {±1}n is a random noise vector independent of x with σ close to 0 meaning only a tiny fraction of bits a-
re flipped on average. We extend the L1-regression reduction to handle this scenario. In particular, we prove an analogue of Kalai et al. (2008)’s result tailored to the smoothed model:
5

Theorem 4.2 Suppose mindeg(pz)≤d Ez∼Dσ,x∼Dx [|pz(x) − f (x ⊙ z)|] ≤ ε for some degree d and
any halfspace f , where Dx is any distribution on {±1}n. Then, for h output by the degree-d L1 polynomial regression algorithm with N = poly(nd/ε) examples, ES∼DN [P(x,y)∼D[h(x) ̸= y]] ≤ optσ + ε. If we repeat the algorithm r = O(log(1/δ)/ε) times with fresh examples each, and let
h be the hypothesis with lowest error on an independent test set of size O(log(1/δ)/ε2), then with probability at least 1 − δ, P(x,y)∼D[h(x) ̸= y] ≤ optσ + ε.
After this reduction, our task reduces to a purely approximation-theoretic problem: we need to construct, for each noise vector z, a polynomial pz(x) in the variable x such that the expected L1 error over the smoothing process remains small:
Ez∼Nσ,x∼Dx |pz(x) − f (x ⊙ z)| ≤ ε.
To achieve this, we treat the smoothing noise z and consider x as a fixed parameter. This reduces the problem to approximating the function fx(z) = f (x ⊙ z). We replace fx(z) with its smooth approximation by applying the generalized Bonami-Beckner operator (Definition 3.2) on z:
T1−ρfx(z) = Ey∼N1−ρ(z)[fx(y)].
Applying Lemma 3.4 with ρ = O(ε2), we obtain:
Ez∼Nσ [|T1−ρfx(z) − fx(z)|] ≤ ε.
Therefore, if we can find a low-degree polynomial that approximates T1−ρfx(z) well in L1, that polynomial will also succeed in approximating fx(z). The remainder of our technical approach will be devoted to constructing such a polynomial approximator for the smoothed halfspace T1−ρfx(z).
4.3 From Biased to Uniform Distribution on the Hypercube
To construct low-degree polynomial approximations, we analyze the noise-smoothed function T1−ρfx. Recall that for a fixed input x, we define fx(z) = f (x ⊙ z), and suppose f (·) = sign(⟨w, ·⟩ − θ). Then we have:
T1−ρfx(z) = Ey∼N1−ρ(z)[sign(⟨w ⊙ x, y⟩ − θ)] = Ey∼N1−ρ(z)[sign(⟨u, y⟩ − θ)],
where we define u = w ⊙ x.
Here, z ∼ Nσ denotes a product distribution over {±1}n where each bit zi is 1 with probability 1 − σ and −1 with probability σ. The vector y is a (1 − ρ)-noisy copy of z (Definition 3.1) with probability 1 − ρ, yi = zi; otherwise, yi is redrawn independently from Nσ with probability ρ. Therefore, y ∼ Nσ, correlated with z, follows a biased distribution on the hypercube. To facilitate polynomial approximation, we aim to reduce this to a form where the randomness comes from a uniform distribution. T-
o achieve this, we introduce a rerandomization trick that rewrites each coordinate yi as:
yi = (1 − li)zi + liτi = (1 − li)zi + li(1 − mi) + limiεi,
where li = 1 w.p. ρ
0 w.p. 1 − ρ , τi = 1 w.p. 1 − σ
−1 w.p. σ , mi = 1 w.p. 2σ
0 w.p. 1 − 2σ ,
with εi being a Radmacher random variable (uniform over {±1}).
This decomposition captures the full noise process: li is an indicator that determines whether the coordinate is kept as zi (with probability 1 − ρ) or resampled as τi ∼ (Nσ)i (with probability ρ). The variable mi is then used to rerandomize τi, since τi can be viewed as taking the value 1 with probability 1 − 2σ (when mi = 0) or a uniform random bit εi with probability 2σ (when mi = 1).
A key benefit is that, conditional on l and m, the random component ε follows the uniform distribution on {±1}n. We now condition on (l, m) and express the smoothed function as:
T1−ρfx(z) = El,m
h
Ey[sign(⟨u, y⟩ − θ)|l, m]
i
= El,m
h
Eε[sign(⟨u, l ⊙ m ⊙ ε⟩ + b − θ)|l, m]
i
,
where b is a deterministic shift depending on the coordinates fixed by l, m.
6

Given that ε is uniform distribution on hypercube, the inner sum behaves like a sum of independent {±1} random variables. Under mild regularity condition (Definition 4.3) on the weight vector u, we can apply the Berry–Esseen Theorem to approximate this inner distribution by a Gaussian. Specifically, we approximate:
⟨u, l ⊙ m ⊙ ε⟩ ≈ N (0, ∥u ⊙ l ⊙ m∥2
2). (4.1)
Substituting into the earlier expression yields the Gaussian-smoothed approximation:
^
T1−ρfx(z) = El,m
h
Es∼N (0,∥u⊙l⊙m∥2
2)[sign(s + b − θ)|l, m]
i
This reduces our setting to the Gaussian noise model analyzed in Chandrasekaran et al. (2024) for which efficient low-degree polynomial approximations are known. In particular, the density ratio
method developed in that work can be applied to approximate ^
T1−ρfx(z) with a small L1 error.
4.4 Handling Irregularity via Critical Index Analysis
Recall that the approximation in (4.1) relies on the Berry–Esseen Theorem, which introduces a uniform approximation error of O ( ∥u⊙l⊙m∥3
∥u⊙l⊙m∥2 )3 for the cumulative density function. This can be
further bounded by O ∥u⊙l⊙m∥∞
∥u⊙l⊙m∥2 . Note that each coordinate limi is equal to 1 with probability 2ρσ
and 0 otherwise. By concentration, we have ∥u ⊙ l ⊙ m∥2 ≈ (2ρσ)1/2∥u∥2, so the approximation error becomes O (ρσ)−1/2 ∥u∥∞
∥u∥2 . This motivates the following regularity condition:
Definition 4.3 (regularity) For vector w ∈ Rn, w is α-regular if ∥w∥∞ ≤ α · ∥w∥2.
Given this definition, we see that if u is α-regular, then the approximation in (4.1) holds with L∞ error O((ρσ)−1/2α). Since u = w ⊙ x and x ∈ {±1}n, the regularity of u is equivalent to that of w. For such “good” (i.e., α-regular with small α) weight vectors w, we can construct low-degree polynomial approximators by reducing to the Gaussian setting analyzed in Section 4.3 and Chandrasekaran et al. (2024).
However, we must also handle the “bad” or irregular cases, where ⟨u, l ⊙ m ⊙ ε⟩ deviates significantly from Gaussian behavior. To deal with such irregular w, we employ critical index analysis, a standard tool in the analysis of Boolean halfspaces (Servedio, 2006; Matulef et al., 2010; Diakonikolas et al., 2010; Meka and Zuckerman, 2010; O’Donnell and Servedio, 2011; Diakonikolas and Servedio, 2013).
Definition 4.4 (α-critical index) For u ∈ Rn, assume that |u1| ≥ · · · ≥ |un|. We define the αcritical index l(α) of a halfspace h(x) = sign(⟨u, x⟩ − θ) as the smallest index i ∈ [n] for which
|ui| ≤ α · σi, where σi :=
q
Pn
j=i u2
j.
Intuitively, the α-critical index is the first index i such that the tail weight vector (ui, · · · , un) is α-regular. Our earlier argument covers the case i = 1, where the entire vector is regular. Using this framework, we obtain the following structural result:
Lemma 4.5 (Critical Index Decomposition) Without loss of generality, let u = w ⊙ x with entries sorted in non-increasing magnitude, i.e., |u1| ≥ · · · ≥ |un|. Suppose x follows a (α, λ)-strictly
sub-exponential distribution on {±1}n. For any fixed z, there exists a threshold K = K(α, ε) = O log(1 + λ)/α2 + log(1/ε) log(1/α)/ρσα2 such that one of the following two conditions holds:
1. For some H < K, the tail vector uT = (uH+1, · · · , un) is α-regular, where α is to be choosen later.
2. For H = K and at least 1 − ε fraction of x, it holds that
Py∼N1−ρ(z)[sign(⟨uH , yH ⟩ + ⟨uT , yT ⟩ − θ) ̸= sign(⟨uH , yH ⟩ − θ)] ≤ ε, (4.2)
where uH := (u1, · · · , uH ).
7

This lemma is proved by analyzing two cases, depending on whether the critical index l(α) satisfies 1 < l(α) < K, or l(α) ≥ K. In the former case, we set H = l(α) − 1, and uT is α-regular. In the latter case, the head vector forms a sufficiently long geometrically decaying sequence |u1| ≥ · · · ≥ |uH | to ensure that the influence of the remaining tail vector uT on the halfspace output is negligible. That is, with high probability, sign(⟨u, y⟩ − θ) ≈ sign(⟨uH , yH ⟩ − θ).
We now show how to construct low-degree polynomial approximators in both cases.
Case 1: When uT is α-regular, we condition on yH . For each fixed yH , the function becomes a regular halfspace in yT :
ffx(yT ) = sign(⟨uT , yT ⟩ − θe), where θe = θ − ⟨uH , yH ⟩.
We apply the techniques of Chandrasekaran et al. (2024) to approximate this with a low-degree polynomial. One subtlety is that directly applying their construction leads to a degree polynomial in |
θe|/∥uT ∥2. To address this, we use an indicator trick to define:
pyH (x) = sign(⟨uH , yH ⟩ − θ) · 1 |⟨uH , yH ⟩ − θ| > C · ∥uT ∥2
+
peyH (x) · 1 |⟨uH , yH ⟩ − θ| ≤ C · ∥uT ∥2 ,
where peyH (x) can be constructed using the idea from Chandrasekaran et al. (2024) since |θe|/∥uT ∥2 is controlled. The indicator functions are low-degree polynomials of degree at most H, since they only depend on H variables and any function f : {±1}k → R can be represented by a degree at most k multilinear polynomial.
Case 2: If the second condition of the lemma holds, we approximate T1−ρfx(z) directly using sign(⟨uH , yH ⟩ − θ). Since this depends only on the first H coordinates, it can be exactly represented as a polynomial of degree at most H.
In either case, we obtain a low-degree polynomial approximator for the smoothed function T1−ρfx(z).
4.5 Results
Using this framework, we establish the following approximation bound:
Definition 4.6 (Strictly Sub-exponential Distributions) A distribution D on Rd is (α, λ)-strictly sub-exponential if for all ∥v∥2 = 1, Px∼D[|⟨x, v⟩| > t] ≤ 2 · e−(t/λ)1+α .
Lemma 4.7 Fix ε > 0 and a sufficiently large universal constant C > 0. Let D be a (α, λ)strictly sub-exponential distribution on {±1}n. Let f : {±1}n → {±1} be a linear threshold function. There exists a family of polynomials pz parameterized by z of degree at most
O Cσ− 1
2 λ log(1/ε)/ε 6(1+ 1
α )3
such that Ez∼Nσ Ex∼D[|pz(x) − fx(z)|] is at most ε.
Given the polynomial approximation and the degree upper bound, one can directly run L1 polynomial regression (Algorithm 1) as stated in Theorem 4.2. We now can get our main theorem for strictly sub-exponential distributions.
Theorem 4.8 Let D be a distribution on {±1}n × {±1} such that the marginal distribution is (α, λ)
strictly sub-exponential. There exists an algorithm that draws N = npoly((λ/σε)(1+1/α)3 ) log(1/δ) samples, runs in time poly(n, N ), and computes a hypothesis h(x) such that, with probability at least 1 − δ, it holds that P(x,y)∼D[y ̸= h(x)] ≤ optσ + ε.
Our main theorem shows that any Boolean halfspace on {±1}n can be learned agnostically in the smoothed model under strictly sub-exponential input distributions. This result holds in a general and challenging setting where prior techniques fail, and it achieves efficient runtime and sample complexity. Table 1 compares our guarantees with the most relevant prior works. Conceptually, our contributions extend the scope of agnostic halfspace learning in two fundamental directions:
Relaxing distributional assumptions via smoothed optimality: A key technical contribution is our use of a smoothed benchmark optσ (Definition 1.3) instead of the worst-case error opt (Definition 1.1), enabling learning under substantially weaker distributional assumptions. In particular, we show that
8

Table 1: Comparison of opt/optσ + ε agnostic-learning guarantees for halfspaces (without structural noise assumptions). We ignore the polynomial logarithmic factors in 1/δ.
Work Domain Distribution Bench. Smooth Complexity
Kalai et al. (2008) {±1}n Uniform opt None nO( 1
ε4 )
Kalai et al. (2008) Sn−1 Uniform opt None nO( 1
ε4 )
Kalai et al. (2008) Rn Log-concave opt None nO(d(ε))
Klivans et al. (2008) Rn Gaussian opt None nO( 1
ε4 )
Wimmer (2010) [B]n Perm-Inv opt None nO( 1
ε4 )
Kane et al. (2013) Rn Sub-exp optσ Input noise nexp( (log log( 1
σε ))Oe (1)
σ4ε4 )
Chandrasekaran et al. (2024) Rn Strictly Sub-exp optσ Concept noise npoly(( λ
σε )(1+ 1
α )3
)
Ours {±1}n Strictly Sub-exp optσ Concept noise npoly(( λ
σε )(1+ 1
α )3
)
halfspaces remain efficiently learnable under general strictly sub-exponential marginals, which is a significant relaxation compared to the strong structural assumptions required in earlier work. For example, the Fourier-based techniques of Klivans et al. (2004b); Kalai et al. (2008); Blais et al. (2010) exploit spectral concentration under uniform or product distributions to obtain low-degree polynomial approximations. To go beyond the product setting, Wimmer (2010) generalized previous technique-
s to symmetric group to handle permutation-invariant distributions. However, these methods break down when the input has more dependencies or heavier tails. In contrast, our approach succeeds under strictly sub-exponential marginals by combining bit-flip smoothing with a critical index decomposition and Berry–Esseen approximation, enabling polynomial approximation without requiring coordinate independence or permutation invariant structure.
Extending the smoothed learning framework to the Boolean hypercube: A second core contribution is our extension of smoothed agnostic learning to the Boolean domain {±1}n, where additive Gaussian perturbations used in prior smoothed models are not well-defined. In continuous domains, several tools, including Gaussian surface area bounds (Klivans et al., 2008), log-concave concentration inequalities (Kane et al., 2013), and Gaussian smoothing combined with density ratio techniques (Chandrasekaran et-
 al., 2024), enable efficient agnostic learning of halfspaces. However, none of these directly apply to the hypercube. Our analysis circumvents this barrier by performing a case analysis based on the critical index of the weight vector: either a small number of head coordinates dominate and effectively determine the output, or the remaining tail is regular, allowing us to invoke the Berry–Esseen theorem to approximate the Boolean tail sum by a Gaussian, thereby enabling the use of continuous tools-
 developed in prior work (Chandrasekaran et al., 2024).
5 Conclusion and Open Problems
In this work, we extended the smoothed agnostic learning framework to the Boolean hypercube, and demonstrated that halfspaces are efficiently learnable with respect to a broad class of input distributions (strictly sub-exponential marginals). Our approach combines tools from smoothing analysis, conditional polynomial approximation, and critical index decomposition to construct lowdegree polynomial approximators in a discrete setting where standard analytic techniques are not applicable. By competi-
ng with a smoothed benchmark optσ, our guarantee circumvents known hardness results for agnostic learning over the hypercube, while matching the sample and runtime complexity of prior work in continuous domains.
Our current techniques apply only to single halfspaces, and the polynomial degree and runtime degrade as the smoothing parameter σ becomes small. In addition, our analysis requires strictly subexponential tail assumptions, and it remains unclear whether comparable guarantees are achievable under weaker conditions. Our results also suggest a potential link to agnostic learning under smoothed input distributions, analogous to the Gaussian framework in continuous domains (Kalai and Teng, 2008; Kalai -
et al., 2009; Kane et al., 2013; Chandrasekaran et al., 2024). Formalizing this connection in the Boolean setting appears subtle, due to the lack of Euclidean geometry and the discrete nature of bit-flip noise, and we leave it as an intriguing direction for future work.
9

An important open question is whether these techniques can be extended to intersections of multiple halfspaces. While our framework theoretically supports such generalizations under smoothed optimality, a major technical challenge arises in adapting critical index analysis to this setting. For a single halfspace, sorting the coordinates of the weight vector by magnitude plays a central role in identifying regular and irregular components. However, in the case of multiple halfspaces, each weight v-
ector may induce a different ordering over coordinates, making it difficult to define a unified notion of “head” and “tail” variables. As a result, applying a shared conditioning or decomposition strategy becomes nontrivial. Developing new structural insights or approximation techniques that can handle this multi-directional irregularity remains an open problem.
More broadly, this raises the question of how far the smoothed learning framework can be pushed. Can it yield efficient algorithms for learning other complex Boolean concept classes (e.g., DNF formulas, decision lists, or polynomial threshold functions of higher degree) under heavy-tailed distributions? Can it be made adaptive to unknown noise levels or to distributions that do not satisfy strict tail bounds? We leave these questions for future work.
Acknowledgments and Disclosure of Funding
We sincerely thank the anonymous reviewers for their helpful comments. The authors acknowledge support in part from the National Science Foundation under Award CCF-2217033 (EnCORE: Institute for Emerging CORE Methods in Data Science).
References
AWASTHI, P., BALCAN, M.-F., HAGHTALAB, N. and URNER, R. (2015). Efficient learning of linear separators under bounded noise. In Conference on Learning Theory. PMLR.
AWASTHI, P., BALCAN, M.-F., HAGHTALAB, N. and ZHANG, H. (2016). Learning and 1-bit compressed sensing under asymmetric noise. In 29th Annual Conference on Learning Theory (V. Feldman, A. Rakhlin and O. Shamir, eds.), vol. 49 of Proceedings of Machine Learning Research. PMLR, Columbia University, New York, New York, USA.
BLAIS, E., O’DONNELL, R. and WIMMER, K. (2010). Polynomial regression under arbitrary product distributions. Machine learning 80 273–294.
BLUM, A. and DUNAGAN, J. (2002). Smoothed analysis of the perceptron algorithm for linear programming. In Proceedings of the Thirteenth Annual ACM-SIAM Symposium on Discrete Algorithms. SODA ’02, Society for Industrial and Applied Mathematics, USA.
BLUM, A., FRIEZE, A. M., KANNAN, R. and VEMPALA, S. S. (1996). A polynomial-time algorithm for learning noisy linear threshold functions. Algorithmica 22 35–52.
CHANDRASEKARAN, G., KLIVANS, A., KONTONIS, V., MEKA, R. and STAVROPOULOS, K. (2024). Smoothed analysis for learning concepts with low intrinsic dimension. In The Thirty Seventh Annual Conference on Learning Theory. PMLR.
COHEN, E. (1997). Learning noisy perceptrons by a perceptron in polynomial time. In Proceedings 38th Annual Symposium on Foundations of Computer Science.
CORTES, C. and VAPNIK, V. (1995). Support-vector networks. Machine learning 20 273–297.
DIAKONIKOLAS, I., GOPALAN, P., JAISWAL, R., SERVEDIO, R. A. and VIOLA, E. (2010). Bounded independence fools halfspaces. SIAM Journal on Computing 39 3441–3462.
DIAKONIKOLAS, I., GOULEAKIS, T. and TZAMOS, C. (2019). Distribution-independent pac learning of halfspaces with massart noise. Advances in Neural Information Processing Systems 32.
DIAKONIKOLAS, I., IMPAGLIAZZO, R., KANE, D. M., LEI, R., SORRELL, J. and TZAMOS, C. (2021). Boosting in the presence of massart noise. In Conference on Learning Theory. PMLR.
DIAKONIKOLAS, I., KANE, D., MANURANGSI, P. and REN, L. (2022). Cryptographic hardness of learning halfspaces with massart noise. Advances in Neural Information Processing Systems 35 3624–3636.
10

DIAKONIKOLAS, I., KONTONIS, V., TZAMOS, C. and ZARIFIS, N. (2020). Learning halfspaces with massart noise under structured distributions. In Conference on Learning Theory. PMLR.
DIAKONIKOLAS, I. and SERVEDIO, R. A. (2013). Improved approximation of linear threshold functions. computational complexity 22 623–677.
FELDMAN, V., GOPALAN, P., KHOT, S. and PONNUSWAMI, A. K. (2009). On agnostic learning of parities, monomials, and halfspaces. SIAM Journal on Computing 39 606–645.
GURUSWAMI, V. and RAGHAVENDRA, P. (2009). Hardness of learning halfspaces with noise. SIAM Journal on Computing 39 742–765.
HAUSSLER, D. (1992). Decision theoretic generalizations of the pac model for neural net and other learning applications. Information and Computation 100 78–150.
KAHN, J., KALAI, G. and LINIAL, N. (1988). The influence of variables on boolean functions. In [Proceedings 1988] 29th Annual Symposium on Foundations of Computer Science.
KALAI, A. T., KLIVANS, A. R., MANSOUR, Y. and SERVEDIO, R. A. (2008). Agnostically learning halfspaces. SIAM Journal on Computing 37 1777–1805.
KALAI, A. T., SAMORODNITSKY, A. and TENG, S.-H. (2009). Learning and smoothed analysis. In Proceedings of the 2009 50th Annual IEEE Symposium on Foundations of Computer Science. FOCS ’09, IEEE Computer Society, USA.
KALAI, A. T. and TENG, S.-H. (2008). Decision trees are pac-learnable from most product distributions: a smoothed analysis. arXiv preprint arXiv:0812.0933 .
KANE, D., KLIVANS, A. and MEKA, R. (2013). Learning halfspaces under log-concave densities: Polynomial approximations and moment matching. In Conference on Learning Theory. PMLR.
KEARNS, M. J., SCHAPIRE, R. E. and SELLIE, L. M. (1992). Toward efficient agnostic learning. In Proceedings of the Fifth Annual Workshop on Computational Learning Theory. COLT ’92, Association for Computing Machinery, New York, NY, USA.
KLIVANS, A. R., LONG, P. M. and SERVEDIO, R. A. (2009). Learning halfspaces with malicious noise. Journal of Machine Learning Research 10 2715–2740.
KLIVANS, A. R., O’DONNELL, R. and SERVEDIO, R. A. (2004a). Learning intersections and thresholds of halfspaces. Journal of Computer and System Sciences 68 808–840.
KLIVANS, A. R., O’DONNELL, R. and SERVEDIO, R. A. (2004b). Learning intersections and thresholds of halfspaces. Journal of Computer and System Sciences 68 808–840. Special Issue on FOCS 2002.
KLIVANS, A. R., O’DONNELL, R. and SERVEDIO, R. A. (2008). Learning geometric concepts via gaussian surface area. 2008 49th Annual IEEE Symposium on Foundations of Computer Science 541–550.
LINIAL, N., MANSOUR, Y. and NISAN, N. (1993). Constant depth circuits, fourier transform, and learnability. Journal of the ACM (JACM) 40 607–620.
LITTLESTONE, N. (1987). Learning quickly when irrelevant attributes abound: A new linearthreshold algorithm. In 28th Annual Symposium on Foundations of Computer Science (sfcs 1987).
MANGOUBI, O. and VISHNOI, N. K. (2019). Nonconvex sampling with the metropolis-adjusted langevin algorithm. In Conference on learning theory. PMLR.
MATULEF, K., O’DONNELL, R., RUBINFELD, R. and SERVEDIO, R. A. (2010). Testing halfspaces. SIAM Journal on Computing 39 2004–2047.
MEKA, R. and ZUCKERMAN, D. (2010). Pseudorandom generators for polynomial threshold functions. In Proceedings of the Forty-second ACM Symposium on Theory of Computing.
11

MOSSEL, E., O’DONNELL, R. and OLESZKIEWICZ, K. (2005). Noise stability of functions with low influences: invariance and optimality. In 46th Annual IEEE Symposium on Foundations of Computer Science (FOCS’05). IEEE.
NOVIKOFF, A. B. (1963). On convergence proofs on perceptrons. In Proceedings of the Symposium on the Mathematical Theory of Automata. Polytechnic Institute of Brooklyn.
O’DONNELL, R. (2021). Analysis of boolean functions. arXiv preprint arXiv:2105.10386 .
O’DONNELL, R. and SERVEDIO, R. A. (2011). The chow parameters problem. SIAM Journal on Computing 40 165–199.
PERES, Y. (2004). Noise stability of weighted majority. arXiv preprint math/0412377 .
ROSENBLATT, F. (1958). The perceptron: a probabilistic model for information storage and organization in the brain. Psychological review 65 386.
SERVEDIO, R. (2006). Every linear threshold function has a low-weight approximator. In 21st Annual IEEE Conference on Computational Complexity (CCC’06).
SPIELMAN, D. and TENG, S.-H. (2001). Smoothed analysis of algorithms: Why the simplex algorithm usually takes polynomial time. In Proceedings of the thirty-third annual ACM symposium on Theory of computing.
VALIANT, L. G. (1984). A theory of the learnable. Commun. ACM 27 1134–1142.
WIMMER, K. (2010). Agnostically learning under permutation invariant distributions. In 2010 IEEE 51st Annual Symposium on Foundations of Computer Science.
YAN, S. and ZHANG, C. (2017). Revisiting perceptron: Efficient and label-optimal learning of halfspaces. Advances in Neural Information Processing Systems 30.
ZHANG, Y., LIANG, P. and CHARIKAR, M. (2017). A hitting time analysis of stochastic gradient langevin dynamics. In Conference on Learning Theory. PMLR.
12

A Bonami-Beckner Operator Approximation
We show that for any linear threshold function f : {±1}n → {±1} the approximation error L1 of
the operator T1−ρf to f can be upper bounded by O(√ρ).
Lemma A.1 For any linear threshold function f : {±1}n → {±1} and σ, ρ ∈ [0, 1], it holds that
Ez∼Nσ [|T1−ρf (z) − f (z)|] ≤ 5
2
√ρ.
Proof By triangle inequality and special case of Lemma 3.4 when Ω = {±1}n and μ = Nσ, we have
Ez∼Nσ [|T1−ρf (z) − f (z)|] = Ez∼Nσ Ey∼N1−ρ(z)[f (y)] − f (z)
≤ Ez∼Nσ Ey∼N1−ρ(z)[|f (y) − f (z)|
= 2Ez∼Nσ,y∼N1−ρ(z) 1[f (y) ̸= f (z)]
≤ 2N Sρ(f )
≤5
2
√ρ.
Therefore, choosing ρ = O(ε2) makes this error at most ε/2.
B Polynomial Approximation for T1−ρfx(z)
We now approximate T1−ρfx(z) using a polynomial for the more general class of strictly subexponential distributions.
Definition B.1 (Strictly Sub-exponential Distributions) A distribution D on Rd is (α, λ)-strictly sub-exponential if for all ∥v∥2 = 1, Px∼D[|⟨x, v⟩| > t] ≤ 2 · e−(t/λ)1+α .
Our main goal in this section is to prove the following polynomial approximation result in Lemma 4.7.
Suppose f (x) = sign(⟨w, x⟩ − θ). Denote w ⊙ x as u. Without loss of generality, suppose that |u1| ≥ |u2| ≥ · · · ≥ |un|. Then, we have
T1−ρfx(z) = Ey∼N1−ρ(z)[sign(⟨w ⊙ x, y⟩ − θ)] = Ey∼N1−ρ(z)[sign(⟨u, y⟩ − θ)].
To obtain a polynomial approximation of Tρfx(z), we first prove Lemma 4.5.
Proof Let
L(α, ε) = ⌈log(1/ε)/ρσ⌉ · ⌈(4/α2) log(1/α)⌉ + 2 log(C/α)/α2
= O log(1/ε) log(1/α)/ρσα2 + O log(max{λ, 1} logmax{ 1
2, 1
1+α }(1/ε)/α)/α2
= O log(1/ε) log(1/α)/ρσα2 + O log(max{λ, 1} log(1/ε)/α)/α2
= O log(1 + λ)/α2 + log(1/ε) log(1/α)/ρσα2 ,
where C = (1 − 2ρσ) · λ log 1
1+α (2/ε) + p2 log(2/ε).
If α-critical index l(α) < L(α, ε), then the first condition holds by taking H = l(α) − 1. If the α-critical index l(ε) ≥ L(α, ε), we will show that the second condition holds.
By Lemma 5.5 in Diakonikolas et al. (2010), there exist a set of nicely separated coordinates G = {i1, i2, · · · , it} ⊆ H where i1 < i2 < · · · < it and ik+1 − ik = ⌈4 log(1/α)/α2⌉ such that |uik+1 | ≤ |uik |/3 for any k ∈ [t − 1]. Then by Claim 5.7 in Diakonikolas et al. (2010), for any two points x1 ̸= x2 ∈ {±1}t, we have |⟨uG, x1⟩ − ⟨uG, x2⟩| ≥ |uit |. Take t = ⌈log(1/ε)/ρσ⌉. For any
13

fixed assignment to the variables in H \ G, we have
Py
X
i∈H
uiyi − θ ≤ |uit |
4
= Py
X
i∈G
uiyi ∈
h
θ−
X
i∈H \G
uiyi − |uit |
4 ,θ−
X
i∈H \G
uiyi + |uit |
4
i
≤ max
x1∈{±1}t PyG [yG = x1]
≤ (1 − ρσ)t ≤ e−ρσt ≤ ε,
where the second inequality is because there’s at most one point in an interval of length |uit | given that ⟨uG, x1⟩ are well-separated. The third inequality is because
max{P[yi = 1], P[yi = −1]} ≤ max{1 − ρσ, ρσ} = 1 − ρσ, if zi = 1,
max{P[yi = 1], P[yi = −1]} ≤ max{ρ(1 − σ), 1 − ρ(1 − σ)} ≤ 1 − ρσ, if zi = −1.
By our choice of L(α, ε), t, it, we have
L(α, ε) − it ≥ L(α, ε) − ⌈log(1/ε)/ρσ⌉ · ⌈(4/α2) log(1/α)⌉ ≥ 2 log(C/α)/α2.
By applying Lemma 5.5 in Diakonikolas et al. (2010), we have
∥uT ∥2 = σT ≤ (
p
1 − α2)L(α,ε)−it · |uit |/α ≤ C−1 · |uit |.
Therefore, by Lemma C.1, for at least 1 − ε fraction of x, it holds with probability at least 1 − ε of y that
|⟨uH , yH ⟩ − θ| =
X
i∈H
uiyi − θ ≥ |uit |
4 ≥ C · ∥uT ∥2
4 ≥ |⟨uT , yT ⟩|
4.
Then, it follows that with probability at least 1 − ε of y we have
sign ⟨uH , yH ⟩ + ⟨uT , yT ⟩ − θ = sign ⟨uH , yH ⟩ − θ .
Now we are ready to construct our polynomial. We consider the two cases in Lemma 4.5 separately.
Case 1: If the weight vector w of the LTF falls into the second case of Lemma 4.5, notice that sign(⟨uH , yH ⟩ − θ) = sign(⟨wH ⊙ xH , yH ⟩ − θ) can be represented as a polynomial py(x) of degree at most H = K since only H coordinates of x are relevant. In this case, we take our final polynomial as
pz(x) = Ey∼N1−ρ(z)[py(x)] = Ey∼N1−ρ(z)[sign(⟨wH ⊙ xH , yH ⟩ − θ)].
Let ∆(x) be defined as the error term Ez∼Nσ [|pz(x) − T1−ρfx(z)|]. We have that for at least 1 − ε fraction of x it holds that
∆(x) = Ez∼Nσ
h
Ey∼N1−ρ(z)[sign(⟨wH ⊙ xH , yH ⟩ − θ)] − Ey∼N1−ρ(z)[sign(⟨w ⊙ x, y⟩ − θ)]
i
≤ Ez∼Nσ
h
Ey∼N1−ρ(z) sign(⟨wH ⊙ xH , yH ⟩ − θ) − sign(⟨w ⊙ x, y⟩ − θ)
i
= 2Ez∼Nσ
h
Py∼N1−ρ(z) sign(⟨wH ⊙ xH , yH ⟩ − θ) ̸= sign(⟨w ⊙ x, y⟩ − θ)
i
≤ 2ε.
It follows that the final L1 approximation error
Ex∼Dx Ez∼Nσ [|pz(x) − T1−ρfx(z)|]
= Ex∼Dx [∆(x)]
= Ex∼Dx [∆(x)|“good” x] · Px∼Dx [“good” x] + Ex∼Dx [∆(x)|“bad” x] · Px∼Dx [“bad” x] ≤ 2ε · 1 + 2 · ε = 4ε.
Here “good” x refers to the at least 1 − ε fraction of x such that the approximation in (4.2) holds.
14

Case 2: If the weight vector w of the LTF falls into the first case of Lemma 4.5, we consider the following approximation
pyH (x) = sign(⟨uH , yH ⟩ − θ) · 1 |⟨uH , yH ⟩ − θ| > C · ∥uT ∥2
+
peyH (x) · 1 |⟨uH , yH ⟩ − θ| ≤ C · ∥uT ∥2 ,
where C = (1 − 2ρσ) · λ log 1
1+α (2/ε) + p2 log(2/ε) and peyH (x) will be choosen later as (B.5). In this case, we take our final polynomial as
pz(x) = EyH ∼N1−ρ(z)|H [pyH (x)].
Let ∆(x) be defined as the L1 error term Ez∼Nσ [|pz(x) − T1−ρfx(z)|]. For notation simplicity, we denote {yH : |⟨uH , yH ⟩ − θ| > C · ∥uT ∥2} as event E. Then, we have
∆(x)
= Ez∼Nσ Ey∼N1−ρ(z)[py(x)] − Ey∼N1−ρ(z)[fx(y)]
= Ez∼Nσ
h
Ey∼N1−ρ(z) (py(x) − fx(y)) · 1[E ] + Ey∼N1−ρ(z) (py(x) − fx(y)) · 1[E c]
i
≤ Ez∼Nσ
h
Ey∼N1−ρ(z) (py(x) − fx(y)) · 1[E ] + Ey∼N1−ρ(z) (py(x) − fx(y)) · 1[E c]
i
= Ez∼Nσ
h
Ey∼N1−ρ(z) sign(⟨u, y⟩ − θ) − sign(⟨uH , yH ⟩ − θ) · 1[E]
i
| {z }
∆1 (x)
+ Ez∼Nσ
h
Ey∼N1−ρ(z) sign(⟨u, y⟩ − θ) − pey(x) · 1[E c]
i
| {z }
∆2 (x)
Notice that by Lemma C.1, for at least 1 − ε fraction of x, |⟨uT , yT ⟩| ≤ C · ∥uT ∥2 holds for at least 1 − ε fraction of y. For such x and y, under event E, we have
|⟨uT , yT ⟩| ≤ C · ∥uT ∥2 < |⟨uH , yH ⟩ − θ|,
then it follows that
sign(⟨u, y⟩ − θ) · 1[E] = sign(⟨uH , yH ⟩ + ⟨uT , yT ⟩ − θ) · 1[E] = sign(⟨uH , yH ⟩ − θ) · 1[E].
Then, for at least 1 − ε fraction of x we have
Ey∼N1−ρ(z) sign(⟨u, y⟩ − θ) − sign(⟨uH , yH ⟩ − θ) · 1[E]
≤ Ey∼N1−ρ(z) sign(⟨u, y⟩ − θ) − sign(⟨uH , yH ⟩ − θ) · 1[E] “good” y
· Py∼N1−ρ(z)[“good” y]
+ Ey∼N1−ρ(z) sign(⟨u, y⟩ − θ) − sign(⟨uH , yH ⟩ − θ) · 1[E] “bad” y
· Py∼N1−ρ(z)[“bad” y]
≤ 0 + 2 · ε = 2ε.
Here “good” y refers to the at least 1 − ε fraction of y such that |⟨uT , yT ⟩| ≤ C · ∥uT ∥2 holds. Therefore, we have
Ex∼Dx [∆1(x)] = Ex∼Dx [∆1(x)|“good” x] · Px∼Dx [“good” x]
+ Ex∼Dx [∆1(x)|“bad” x] · Px∼Dx [“bad” x] ≤ Ex∼Dx [∆1(x)|“good” x] + 2 · ε
≤ 2ε + 2ε = 4ε.
Here “good” x refers to the at least 1 − ε fraction of x such that Py[|⟨uT , yT ⟩| ≤ C · ∥uT ∥2] ≥ 1 − ε holds.
Next we consider bounding ∆2(x) by constructing proper low-degree polynomial pey(x) as follows. Recall that y ∼ N1−ρ(z) where yi = zi with probability 1 − ρ and yi randomly drawn from Nσ with
15

probability ρ, we use the following rerandomization trick for random vector yT : for each coordinate of yT , let
yi = (1 − li)zi + liτi
τi = (1 − mi) + miεi =⇒ yi = (1 − li)zi + li(1 − mi) + limiεi, (B.1)
where li = 1 w.p. ρ
0 w.p. 1 − ρ , τi = 1 w.p. 1 − σ
−1 w.p. σ , mi = 1 w.p. 2σ
0 w.p. 1 − 2σ ,
and εi is a Radmacher random variable. Let random variable A = ⟨u, y⟩ − θ. Then by (B.1) we have
A = ⟨u, y⟩ − θ
= ⟨uH , yH ⟩ + ⟨uT , yT ⟩ − θ
= ⟨uH , yH ⟩ + ⟨uT , (1T − lT ) ⊙ zT ⟩ + ⟨uT , lT ⊙ (1T − mT )⟩ − θ + ⟨uT , lT ⊙ mT ⊙ εT ⟩
= ⟨uH , yH ⟩ + ⟨uT , vT ⟩ − θ
| {z }
:=b
+ ⟨uT , lT ⊙ mT ⊙ εT ⟩
| {z }
:=B
.
where vT := (1T − lT ) ⊙ zT + lT ⊙ (1T − mT ). Then we have
^
T1−ρfx(z) := Ey∼N1−ρ(z) sign(⟨u, y⟩ − θ) · 1[yH ∈ E c]
= EyH,A[sign(A) · 1[yH ∈ Ec]]
= EyH,lT ,mT EA[sign(A)|yH , lT , mT ] · 1[yH ∈ E c]
= EyH,lT ,mT 1 − 2PA[A ≤ 0|yH , lT , mT ] · 1[yH ∈ E c]
= EyH,lT ,mT 1 − 2PB[B ≤ −b|yH , lT , mT ] · 1[yH ∈ E c] ,
and
∆2(x)
= Ez∼Nσ
h
Ey∼N1−ρ(z) sign(⟨u, y⟩ − θ) · 1[yH ∈ E c] − Ey∼N1−ρ(z) pey(x) · 1[yH ∈ E c]
i
= Ez∼Nσ
h^
T1−ρfx(z) − Ey∼N1−ρ(z) pey(x) · 1[yH ∈ E c]
i
.
By Theorem C.3, we have
sup
x∈R
PB
∥uT ⊙ lT ⊙ mT ∥2
≤ x lT , mT − Φ(x) ≤ C′ · ∥uT ⊙ lT ⊙ mT ∥3
∥uT ⊙ lT ⊙ mT ∥2
3
.
where C′ is a constant. Therefore, we have
^
T1−ρfx(z) − EyH ,lT ,mT 1 − 2Φ −b
∥uT ⊙ lT ⊙ mT ∥2
· 1[yH ∈ Ec]
≤ 2EyH,lT ,mT P[B ≤ −b|yH , lT , mT ] − Φ −b
∥uT ⊙ lT ⊙ mT ∥2
· 1[yH ∈ Ec]
≤ 2C′ · EyH ,lT ,mT
∥uT ⊙ lT ⊙ mT ∥3 ∥uT ⊙ lT ⊙ mT ∥2
3
· 1[yH ∈ Ec]
≤ 2C′ · EyH ,lT ,mT
"
∥uT ⊙ lT ⊙ mT ∥∞ ∥uT ⊙ lT ⊙ mT ∥2
· 1[yH ∈ Ec]
#
.
Notice that in this case uT is α-regular and limi takes 1 with probability 2ρσ and 0 with probability 1 − 2ρσ, then by Lemma C.2, for at least 1 − ε fraction of (lT , mT ) it holds that
∥uT ∥∞ ≤ α · ∥uT ∥2 ≤ (ρσ)− 1
2 · α · ∥uT ⊙ lT ⊙ mT ∥2, (B.2)
as long as the condition α ≤ ρσ/plog(1/ε)/2 holds.
16

Notice that
1 − 2Φ −b
∥uT ⊙ lT ⊙ mT ∥2
= EX∼N (b,∥uT ⊙lT ⊙mT ∥2
2)[sign(X)|yH , lT , mT ]
= EX∼N (b,∥wT ⊙lT ⊙mT ∥2
2)[sign(X)|yH , lT , mT ],
let
Tρfx(z) := EyH ,lT ,mT
h
EX∼N (b,∥wT ⊙lT ⊙mT ∥2
2)[sign(X)|yH , lT , mT ]
· 1[(lT , mT ) ∈ E1] · 1[yH ∈ Ec]
i
,
where E1 is the event regarding the randomness of (lT , mT ) such that (B.2) holds, then
Tρf ^ x(z) − Tρfx(z)
≤ 2EyH,lT ,mT P[B ≤ −b|yH , lT , mT ] − Φ − b
∥uT ⊙ lT ⊙ mT ∥2
· 1[(lT , mT ) ∈ E1] · 1[yH ∈ Ec]
+ EyH ,lT ,mT
h
1 − 2P[B ≤ −b|yH , lT , mT ] · 1[(lT , mT ) ∈ Ec
1 ] · 1[yH ∈ Ec]
i
≤ 2C′ · EyH ,lT ,mT
∥uT ⊙ lT ⊙ mT ∥∞ ∥uT ⊙ lT ⊙ mT ∥2
· 1[(lT , mT ) ∈ E1] · 1[yH ∈ Ec]
+ EyH ,lT ,mT
h
1[(lT , mT ) ∈ Ec
1 ] · 1[yH ∈ Ec]
i
≤ 2C′ · (ρσ)− 1
2α+ε
≤ 2C′ · (2ρσ/ log(1/ε)) 1
2 +ε
≤ 2ε,
as long as ρ = O(ε2 log(1/ε)/σ). Then, we have
Ex∼Dx Ez∼Nσ Tρf ^ x(z) − Tρfx(z) ≤ 2ε.
Now we only need to consider polynomial approximation for Tρfx(z). We can recenter the expectation around zero as follows:
EX∼N (b,∥wT ⊙lT ⊙mT ∥2
2)[sign(X)|yH , lT , mT ]
= Es∼N (b/∥wT ⊙lT ⊙mT ∥2,1)[sign(∥wT ⊙ lT ⊙ uT ∥2 · s)|yH , lT , mT ]
= Es∼Q sign(∥wT ⊙ lT ⊙ mT ∥2 · s) · N (s; b/∥wT ⊙ lT ⊙ mT ∥2, 1)
Q(s) yH , lT , mT
= e− b2
2∥wT ⊙lT ⊙mT ∥22
√2π · Es∼Q sign(∥wT ⊙ lT ⊙ mT ∥2 · s) · e− s2
2 −log Q(s)
·e
b·s
∥wT ⊙lT ⊙mT ∥2 yH , lT , mT ,
where Q(s) = e−|s|/2.
For the simplicity of the following analysis, we define random variable
x := ⟨uT , vT ⟩
∥uT ⊙ vT ∥2
= ⟨wT ⊙ xT , vT ⟩
∥uT ⊙ vT ∥2
= ⟨wT ⊙ vT , xT ⟩
∥wT ⊙ vT ∥2
.
Since x is (α, λ)-strictly sub-exponential, then x satisfies the following concentration inequality:
Px∼Dx |x| > t ≤ 2 · e−(t/λ)1+α .
17

Then, we can rewrite:
b
∥wT ⊙ lT ⊙ mT ∥2
= (⟨uH , yH ⟩ − θ) + ⟨uT , vT ⟩
∥wT ⊙ lT ⊙ mT ∥2
= (⟨uH , yH ⟩ − θ) + ∥wT ⊙ vT ∥2 · x
∥wT ⊙ lT ⊙ mT ∥2
.
For simplicity, denote
a = ∥wT ⊙ vT ∥2
∥wT ⊙ lT ⊙ mT ∥2
, c = ⟨uH , yH ⟩ − θ
∥wT ⊙ lT ⊙ mT ∥2
.
Notice that under condition (lT , mT ) ∈ E1 and condition yH ∈ Ec, we have
|c| = |⟨uH , yH ⟩ − θ|
∥wT ⊙ lT ⊙ mT ∥2
≤ C · ∥uT ∥2
∥wT ⊙ lT ⊙ mT ∥2
≤ C · (ρσ)−1/2 := c′, (B.3)
|a| ≤ ∥wT ⊙ (1T − lT ) ⊙ zT ∥2 + ∥wT ⊙ lT ⊙ (1T − mT )∥2
∥wT ⊙ lT ⊙ mT ∥2
≤ ∥wT ⊙ (1T − lT )∥2 + ∥wT ⊙ lT ∥2
∥wT ⊙ lT ⊙ mT ∥2
= ∥wT ∥2
∥wT ⊙ lT ⊙ mT ∥2
≤ (ρσ)−1/2 := a′, (B.4)
where C = (1 − 2ρσ) · λ log 1
1+α (4/ε) + p2 log(2/ε). We also have
b
∥wT ⊙ lT ⊙ mT ∥2
= ax + c,
and hence
EX∼N (b,∥wT ⊙lT ⊙mT ∥2
2)[sign(X)|yH , lT , mT ]
= e− (ax+c)2
2
√2π · Es∼Q
h
sign(∥wT ⊙ lT ⊙ mT ∥2 · s) · e− s2
2 −log Q(s) · e(ax+c)s yH , lT , mT
i
= e− a2x2
2
√2π · Es∼Q
h
sign(∥wT ⊙ lT ⊙ mT ∥2 · s) · e− s2
2 −log Q(s) · ea(s−c)x+c(s− 1
2 c) yH , lT , mT
i
.
Then, we have
Tρfx(z)
= EyH ,lT ,mT
h
EX∼N (b,∥wT ⊙lT ⊙mT ∥2
2)[sign(X)|yH , lT , mT ] · 1[(lT , mT ) ∈ E1] · 1[yH ∈ Ec]
i
= EyH ,lT ,mT e− a2x2
2 · 1[(lT , mT ) ∈ E1] · 1[yH ∈ Ec]
· Es∼Q
h
sign(∥wT ⊙ lT ⊙ mT ∥2 · s) · e− s2
2 −log Q(s) · ea(s−c)x+c(s− 1
2 c) yH , lT , mT
i
.
We now define a polynomial pez(x) approximating Tρfx(z). To do this, we approximate e− 1
2 a2x2 and
ea(s−c)x using polynomials in x. First, we use a polynomial p1(x) to approximate e− 1
2 a2x2 . This polynomial is given by the following lemma. We choose the parameters later.
Lemma B.2 Let t ∈ Z+. Let x be a random variable satisfying the (α, λ)-strictly sub-exponential tail bound. Then there exists a polynomial q of degree
O (a2λ2/2)1+1/α Cb log(abλplog(1/ε)) 2/α log(1/ε) max{1,1/2+1/α}C1/α2
where C is a sufficiently large constant such that the approximation error Ex[(q(x) − e− 1
2 a2x2 )b] is
upper bounded by 2ε.
18

Second, to approximate ea(s−c)x, we use the function p2(x, s) = pk(a(s − c)x) 1[|s| ≤ T ] where pk(x) = 1 + Pk−1
i=1
xi
i! is the degree k − 1 Taylor approximation of ex. We choose degree k and
threshold T later. Thus our final approximation of Tρfx(z) is
pex(yH , lT , mT ) = p1(x) · Es∼Q sign(∥wT ⊙ lT ⊙ mT ∥2 · s) · e− s2
2 −log Q(s)
· ec(s− 1
2 c) · p2(x, s) yH , lT , mT ,
peyH (x) = ElT ,mT pex(yH , lT , mT ) · 1[(lT , mT ) ∈ E1] , (B.5)
pez(x) = EyH peyH (x) · 1[yH ∈ Ec] .
We now want to bound the L1 error term Ex∼Dx Ez∼Nσ [|pez(x) − Tρfx(z)|]. To help us analyse the error, we define the “hybrid” function p ̄z(x) such that
p ̄x(yH , lT , mT ) = e− a2x2
2
√2π · Es∼N (0,1) sign(∥wT ⊙ lT ⊙ mT ∥2 · s) · e− s2
2 −log Q(s)
· ec(s− 1
2 c) · p2(x, s) yH , lT , mT ,
p ̄z(x) = EyH,lT ,mT p ̄x(yH , lT , mT ) · 1[(lT , mT ) ∈ E1] · 1[yH ∈ E c] .
We have that
Ex∼Dx Ez∼Nσ [|pez(x) − T1−ρfx(z)|]
≤ 2 · Ex∼Dx
h
Ez∼Nσ [|p ̄z(x) − T1−ρfx(z)|]
| {z }
∆3 (x)
+ Ez∼Nσ [|pez(x) − p ̄z(x)|]
| {z }
∆4 (x)
i
.
We now bound ∆3(x) and ∆4(x) separately. We have that
∆3(x) ≤ Ez EyH ,lT ,mT
h
e− 1
2 a2x2 · Es∼N (0,1) e− s2
2 −log Q(s) · ec(s− 1
2 c) · |ea(s−c)x − p2(x, s)|
· 1[(lT , mT ) ∈ E1] · 1[yH ∈ Ec]
i
.
Observe that ∆3(x) can be bounded as the expected sum of the following two terms:
∆31(x, yH , lT , mT )
= e− a2x2
2
√2π · Es∼Q e− s2
2 −log Q(s) · ec(s− 1
2 c) · e|a(s−c)x|
k! · |a(s − c)x|k · 1[|s| ≤ T ] ,
∆32(x, yH , lT , mT )
= e− a2x2
2
√2π · Es∼Q e− s2
2 −log Q(s) · ec(s− 1
2 c) · ea(s−c)x · 1[|s| > T ] ,
where the first term’s bound comes from the fact that |pk(x) − ex| ≤ e|x|
k! · |x|k.
19

We first bound ∆31. We have that
∆31(x, yH , lT , mT )
≤ e− a2x2
2
√2π · Es∼Q e− s2
2 −log Q(s) · ec(s− 1
2 c) · e|a(s−c)x| · 1[|s| ≤ T ] · (|acx| + |aT x|)k
k!
≤ (|acx| + |aT x|)k
k! · Es∼Q
e− 1
2 (s−(ax+c))2
√2π · Q(s) · 1[|s| ≤ T ]
+ (|acx| + |aT x|)k
k! · Es∼Q
e− 1
2 (s−(c−ax))2
√2π · Q(s) · 1[|s| ≤ T ]
≤ (|acx| + |aT x|)k
(k!)2 · Es∼Q
N (s; ax + c, 1) Q(s)
+ (|acx| + |aT x|)2k
(k!)2 · Es∼Q
N (s; c − ax, 1) Q(s)
= 2(|acx| + |aT x|)k
k!
where the second inequality is by e|a(s−c)x| ≤ ea(s−c)x + e−a(s−c)x.
Then, we have
Ex∼Dx Ez∼Nσ
h
EyH,lT ,mT ∆31(x, yH , lT , mT ) · 1[(lT , mT ) ∈ E1] · 1[yH ∈ E c]
i
≤ 2Ex∼Dx
"
Ez∼Nσ EyH ,lT ,mT
h (|acx| + |aT x|)k
k! · 1[(lT , mT ) ∈ E1] · 1[yH ∈ Ec]
i
#
= 2Ez∼Nσ
"
EyH ,mT Ex∼Dx
h (|acx| + |aT x|)k
k! · 1[(lT , mT ) ∈ E1] · 1[yH ∈ Ec]
i
#
.
Under condition (lT , mT ) ∈ E1 and condition yH ∈ Ec, we have (B.3) and (B.4) and hence
Ex∼Dx
h (|acx| + |aT x|)k
k! · 1[(lT , mT ) ∈ E1] · 1[yH ∈ Ec]
i
≤ |a′|k(|c′| + |T |)k
k! · Ex∼D[|x|k]
≤ |a′|k(|c′| + |T |)k
k! · Cλk · k
1+α
k
1+α + 1
2 e− k
1+α + 1+α
12k
≤ ε,
when
k ≥ C′|a′|(|c′| + |T |)λ log(1/ε) 1+ 1
α + (1 + α) (B.6)
and C′ is a large enough constant. The second inequality used Lemma C.5.
We now bound ∆32. We have that
∆32(x, yH , lT , mT ) = Es∼Q
e− 1
2 (s−(ax+c))2
Q(s) · 1[|s| > T ]
≤
s
Es∼Q
N (s; ax + c, 1) Q(s)
2
· Ps∼Q |s| > T
≤
p
Ce|ax+c| · e−T
≤ C′e1
2 (|ax|+|c|) · e−T /2.
The third inequality is based on the following claim.
20

Lemma B.3 Define the distribution Q on R with density function Q(s) = e−|s|/2. Then there exist a universal constant C such that for every b ∈ R, it holds that
Es∼Q
N (s; b, 1) Q(s)
2
≤ Ce|b|.
Thus, we have that
Ex∼Dx Ez∼Nσ
h
EyH,lT ,mT ∆32(x, yH , lT , mT ) · 1[(lT , mT ) ∈ E1] · 1[yH ∈ E c]
i
≤ Ex∼Dx Ez∼Nσ
h
EyH ,lT ,mT C ′e 1
2 (|ax|+|c|) · e−T /2 · 1[(lT , mT ) ∈ E1] · 1[yH ∈ E c]
i
= Ez∼Nσ EyH ,lT ,mT
h
Ex∼Dx C′e 1
2 (|ax|+|c|) · e−T /2 · 1[(lT , mT ) ∈ E1] · 1[yH ∈ E c]
i
≤ Ez∼Nσ EyH ,lT ,mT
h
Ex∼Dx C′e 1
2 |a′x| · 1[(lT , mT ) ∈ E1] · 1[yH ∈ E c] · e |c′|−T
2
i
≤ Ez∼Nσ EyH ,lT ,mT
h
Ex∼Dx C ′′e(a′λ)1+ 1
α /2 · e |c′|−T
2
i
= C ′′e(a′λ)1+ 1
α /2 · e |c′|−T
2
≤ ε,
when
T ≥ (a′λ)1+ 1
α + |c′| + 2 log(C′′/ε).
By (B.3) and (B.4), we can take
T = O (ρσ)− 1
2 (1+ 1
α )λ1+ 1
α log(1/ε) . (B.7)
The third last inequality is by Lemma C.6. Plugging this into the bound for k in (B.6), we can take
k ≤ C′a′λ 2c′ + (a′λ)1+ 1
α + 2 log(C′′/ε) log(1/ε)
1+ 1
α + (1 + α)
for constant C′, C′′. By (B.3) and (B.4), we know that
k ≤ C′′′λ2+ 1
α (ρσ)−(1+ 1
2α ) log3(1/ε)
1+ 1
α + (1 + α), (B.8)
where C′′′ is a large constant.
We now bound ∆4(x). We have that
∆4(x)
≤ Ez
h
EyH,lT ,mT pex(yH , lH , mT ) − p ̄x(yH , lH , mT ) · 1[(lT , mT ) ∈ E1] · 1[yH ∈ E c]
i
= √12π Ez
h
EyH ,lT ,mT e− 1
2 a2x2 − p1(x) · Es∼Q[e− s2
2 −log Q(s)+c(s− c
2 ) · p2(x, s)]
· 1[(lT , mT ) ∈ E1] · 1[yH ∈ Ec]
i
Notice that
Es∼Q[e− s2
2 −log Q(s)+c(s− c
2 ) · p2(x, s)] 2
≤ Es∼Q[e−s2−2 log Q(s)+c(2s−c)] · Es∼Q[p2(x, s)2]
≤ Es∼Q
N (s; c, 1) Q(s)
2
· Es∼Q
k−1
X
i=0
(a(s − c)x)i i!
2
· 1[|s| ≤ T ]
≤ Ce|c| ·
k−1
X
i=0
|a|i(|T | + |c|)i|x|i i!
2
,
21

where the last inequality is by Lemma B.3. Thus, we have
Ex∼Dx [∆4(x)]
≤ Ez
h
EyH ,lT ,mT Ex∼Dx e− 1
2 a2x2 − p1(x) · Es∼Q[e− s2
2 −log Q(s)+c(s− c
2 ) · p2(x, s)]
· 1[(lT , mT ) ∈ E1] · 1[yH ∈ Ec]
i
≤ Ez
"
EyH ,lT ,mT Ex∼Dx e− 1
2 a2x2 − p1(x) · C 1
2 e |c|
2·
k−1
X
i=0
|a|i(|T | + |c|)i|x|i i!
· 1[(lT , mT ) ∈ E1] · 1[yH ∈ Ec]
#
Denote
∆5(yH , lT , mT ) := Ex∼Dx e− 1
2 a2x2 − p1(x) · C 1
2 e |c|
2·
k−1
X
i=0
|a|i(|T | + |c|)i|x|i i!
· 1[(lT , mT ) ∈ E1] · 1[yH ∈ Ec] .
We have
∆5(yH , lT , mT )
≤ C′e|c′|/2
q
Ex∼Dx e− 1
2 a2x2 − p1(x) 2 · 1[(lT , mT ) ∈ E1] · 1[yH ∈ E c]
·
v u u
tEx∼Dx
k−1
X
i=0
|a|i(|T | + |c|)i|x|i i!
2
· 1[(lT , mT ) ∈ E1] · 1[yH ∈ Ec]
≤ C′e|c′|/2 · δ ·
v u u
tEx∼Dx
k−1
X
i=0
|a|i(|T | + |c|)i|x|i i!
2
· 1[(lT , mT ) ∈ E1] · 1[yH ∈ Ec]
≤ C′e|c′|/2 · δ ·
v u u t
k−1
X
i=0
|a′|i(|T | + |c′|)i i!
2
· max
1≤i≤k−1 Cλ2i · 2i
1+α
2i
1+α + 1
2 e− 2i
1+α + 1+α
24i
≤ C′′δe|c′|/2+|a′|(|T |+|c′|)λk 2k
1+α
k
1+α + 1
4 e 1+α
48
≤ ε,
when δ is chosen accordingly. The third inequality is by Lemma C.5.
By Lemma B.2 and taking the exponent b as 2, the degree of p1(x) required to get the error is
O (a2λ2/2)1+1/α C log(aλplog(1/δ)) 2/α log(1/δ) max{1, 1
2+ 1
α }C 1/α2
= O (a′2λ2/2)1+1/α C log(a′λ) 2/α
· log(1/ε) + |a′|(|T | + |c′|) + (k + 1/4) log(2kλ) 2/α+1C1/α2
= O (a′2λ2/2)1+1/α C log(a′λ) 2/α log(1/ε) + |a′|(|T | + |c′|) + k3/2λ1/2 2/α+1C1/α2 .
By using (B.3) and (B.4) and plugging in the order of k, T in (B.7) and (B.8), we know the degree of p1(x) is
O ((ρσ)−1λ2/2)1+ 1
α C log((ρσ)− 1
2 λ)
2 α
· Cλ3
2 (2+ 1
α )(1+ 1
α )+ 1
2 (ρσ)− 3
2 (1+ 1
2α )(1+ 1
α ) log 9
2 (1+ 1
α )(1/ε) 1+ 2
αC 1
α2
= O C(ρσ)− 1
2 λ log(1/ε) 6(1+ 1
α )3
.
22

Putting everything together, we get that the degree of pz(x) is at most 2H + deg(p1) + deg(p2) which is
O log(1 + λ)/α2 + log(1/ε) log(1/α)/ρσα2 + O C(ρσ)− 1
2 λ log(1/ε) 6(1+ 1
α )3
.
Plugging in the order of ρ = Ω(ε2) and α = Ω(ρσ/plog(1/ε)), the degree can be bounded by
O Cσ− 1
2 λ log(1/ε)/ε 6(1+ 1
α )3
.
C Proofs of Auxiliary Lemmas
C.1 Proof of Theorem 4.2
Proof Let f ∗ be the optimal halfspace that achieves optσ. Let pz be the polynomial of degree at most d such that
Ez∼Dσ,x∼Dx [|pz(x) − f ∗(x ⊙ z)|] ≤ ε. (C.1)
Consider the sample dataset S = {(xi, yi)}N
i=1 in a single run of Algorithm 1. Let pS be the polynomial chosen by the algorithm and let hS be the corresponding hypothesis that the algorithm outputs. By the proof of Theorem 4.1 in Kalai et al. (2008), we have that
1 N
N
X
i=1
1[hS(xi) ̸= yi] ≤ 1
2N
N
X
i=1
|yi − pS(xi)|.
Notice that pS is the minimizer of the error, and thus beats any polynomial pz we choose, we have
1 2N
N
X
i=1
|yi − pS (xi)| ≤ Ez∼Nσ
1 2N
N
X
i=1
|yi − pz(xi)|
≤ Ez∼Nσ
1 2N
N
X
i=1
|f ∗(xi ⊙ z) − pz(xi)|
| {z }
∆1 (S )
+ Ez∼Nσ
1 2N
N
X
i=1
|yi − f ∗(xi ⊙ z)|
| {z }
∆2 (S )
.
By (C.1), we can bound ∆1(S) as follows:
ES∼D⊗n [∆1(S)] = 1
2 Ex∼Dx,z∼Dσ [|f ∗(x ⊙ z) − pz(x)|] ≤ 1
2 ε.
By the optimality of f ∗, we have
ES∼D⊗n [∆1(S)] = 1
2 E(x,y)∼D,z∼Dσ [|y − f ∗(x ⊙ z)|]
= E(x,y)∼D,z∼Dσ [1[y ̸= f ∗(x ⊙ z)]] = optσ.
Thus, we obtain
ES∼D⊗n
1 N
N
X
i=1
1[hS(xi) ̸= yi] ≤ optσ + 1
2 ε.
Since our hypothesis hS is a polynomial threshold function of degree d on n variables, VC theory
tells us that for N = poly(nd/ε), we have that
ES∼D⊗n P(x,y)∼D[hS (x) ̸= y] ≤ optσ + 3
4 ε.
By Markov’s inequality, on any single repetition of the algorithm, we have that
PS∼D⊗n
h
P(x,y)∼D[hS(x) ̸= y] ≥ optσ + 7
8ε
i
≤ optσ + 3
4ε optσ + 7
8
≤1− ε
16 .
Hence, after r = O(log(1/δ)/ε) repetitions of the algorithm, with probability at least 1 − δ/2, one of them will have P(x,y)∼D[hS(x) ̸= y] ≤ optσ + 7
8 ε. In this case, using an independent set of size
O(log(1/δ)/ε2), we probability at most δ/2, we will choose one with error > optσ + ε.
23

C.2 Proof of Lemma B.3
Proof The proof below is straightforward calculation by completing the squares.
Es∼Q
N (s; b, 1) Q(s)
2
=1
2
Z
R
1
2π e−(s−b)2
1
4 e−2|s| · e−|s|ds
=1
π
Z
R
e−(s−b)2+|s|ds
≤1
π
Z
R
e−(s−b)2+sds + 1
π
Z
R
e−(s−b)2−sds
=1
π
Z
R
e−(s−b+ 1
2 )2+b+ 1
4 ds + 1
π
Z
R
e−(s−b− 1
2 )2−b+ 1
4 ds
= √1π eb+ 1
4 + √1π e−b+ 1
4
≤ 2e 1
4
√π e|b|
C.3 Proof of Lemma B.2
Proof Let p(x) = Pdeg(p)
i=0 cixi be the polynomial obtained from Lemma C.4 with error ε/2
and T = ω(log(1/ε)) to be choosen later. Our final polynomial is q(x) = p( 1
2 a2x2). Clearly, deg(q) = 2 · deg(p) = O(pT log(1/ε)). We now bound the error.
Ex[(q(x) − e− 1
2 a2x2 )b]
= Ex (q(x) − e− 1
2 a2x2 )b · 1[a2x2/2 < T ] + Ex (q(x) − e− 1
2 a2x2 )b · 1[a2x2/2 ≥ T ]
=ε+
q
Ex (q(x) − e− 1
2 a2x2 )2b · Ex 1[a2x2/2 ≥ T ]
≤ε+
r
Ex (q(x) − e− 1
2 a2x2 )2b · 2e−( 2T
a2λ2 )
1+α
2,
where the last inequality is by the tail bound of (α, λ)-strictly sub-exponential random variable.
We now bound Ex (q(x) − e− 1
2 a2x2 )2b . We have that
Ex (q(x) − e− 1
2 a2x2 )2b ≤ Ex (|q(x)| + 1)2b
≤ Ex 1 +
deg(p)
X
i=0
|ci|
2i a2ix2i
2b
≤ (deg(p) + 2)2b · deg(p)
max
i=0 |ci|2b · deg(p)
max
i=0
a4biEx[x4bi]
22bi
≤ eCb
√
T log(1/ε) · deg(p)
max
i=0
a4biEx[x4bi]
22bi
≤ eCb
√
T log(1/ε) · deg(p)
max
i=1
a4bi
22bi · C′biλ4bi
1 + α · 4bi
1+α
4bi
1+α − 1
2 e− 4bi
1+α + 1+α
48bi
≤ eCb
√
T log(1/ε)+C′b
√
T log(1/ε)·log(abλ
√
T log(1/ε))+ 1+α
48b
≤ eC′′b(1+α)
√
T log(1/ε)·log(abλ
√
T log(1/ε)),
where the third last inequality is by Lemma C.5. Here C, C′, C′′ are large enough constant. Putting it all together, we get that
Ex (q(x) − e− 1
2 a2x2 )2b · 2e−( 2T
a2λ2 )
1+α
2 ≤ 2eC′′b
√
T log(1/ε)·log(abλ
√
T log(1/ε))−( 2T
a2λ2 )
1+α
2.
24

Choosing
T = Ω (a2λ2/2)2(1+1/α) C′′′b2 log2(abλplog(1/ε)) 2/α log(1/ε) max{1,2/α}(C′′′)1/α2
where C′′′ is a large constant makes the total error less than 2ε. Since T is ω(log(1/ε)), the degree of the final polynomial is O(pT log(1/ε)) which is
T = O (a2λ2/2)1+1/α C′′′b2 log2(abλplog(1/ε)) 1/α log(1/ε) max{1,1/2+1/α}(C′′′)1/2α2 .
C.4 Other Auxiliary Lemmas
Lemma C.1 Suppose x is a distribution on {±1}n that is (α, λ)-strictly subexponential and y distributed as N1−ρ(z). For any fixed T ⊆ [n] and fixed z, with probability at least 1 − ε of x, it holds that
Py
h
|⟨uT , yT ⟩| ≤ C · ∥uT ∥2
i
≥ 1 − ε,
where u = w ⊙ x and C = (1 − 2ρσ) · λ log 1
1+α (4/ε) + p2 log(2/ε).
Proof By Hoeffding’s inequality, we have
Py
h
⟨uT , yT ⟩ − Ey[⟨uT , yT ⟩] ≥ t
i
≤ 2 exp − t2
2∥uT ∥22
.
Therefore, with probability at least 1 − ε it holds that
⟨uT , yT ⟩ ∈ Ey[⟨uT , yT ⟩] − p2 log(2/ε) · ∥uT ∥2, Ey[⟨uT , yT ⟩] + p2 log(2/ε) · ∥uT ∥2 .
Notice that
Eyi [uiyi] = uiE[yi] = ui (1 − ρ)zi + ρ(1 − 2σ) ,
Ey[⟨uT , yT ⟩] = (1 − ρ)
X
i∈T
uizi + ρ(1 − 2σ)
X
i∈T
ui
= (1 − ρ) · ⟨wT ⊙ zT , xT ⟩ + ρ(1 − 2σ) · ⟨wT , xT ⟩,
since x is (α, λ)-strictly subexponential, we have
Px
h
|⟨wT , xT ⟩| > t · ∥wT ∥2
i
≤ 2 exp − (t/λ)1+α ,
and
Px
h
|⟨wT ⊙ zT , xT ⟩| > t · ∥wT ∥2
i
≤ 2 exp − (t/λ)1+α .
Thus, with probability at least 1 − ε of x it holds that
|⟨wT , xT ⟩| ≤ λ log 1
1+α (4/ε) · ∥wT ∥2,
and
|⟨wT ⊙ zT , xT ⟩| ≤ λ log 1
1+α (4/ε) · ∥wT ∥2.
Notice that x is distributed on {±1}n and hence ∥uT ∥2 = ∥wT ⊙ xT ∥2 = ∥wT ∥2, then with probability at least 1 − ε of y it holds that
|⟨uT , yT ⟩| ≤ Ey[⟨uT , yT ⟩] + p2 log(2/ε) · ∥uT ∥2
≤ (1 − ρ) · |⟨wT ⊙ zT , xT ⟩| + ρ(1 − 2σ) · |⟨wT , xT ⟩| + p2 log(2/ε) · ∥uT ∥2
≤ (1 − ρ) + ρ(1 − 2σ) · λ log 1
1+α (4/ε) · ∥wT ∥2 + p2 log(2/ε) · ∥uT ∥2
≤ (1 − 2ρσ) · λ log 1
1+α (4/ε) · ∥wT ∥2 + p2 log(2/ε) · ∥uT ∥2
= C · ∥uT ∥2,
(C.2)
where C = (1 − 2ρσ) · λ log 1
1+α (4/ε) + p2 log(2/ε).
25

Lemma C.2 Suppose that the vector w ∈ Rn is α-regular, i.e., ∥w∥∞ ≤ α · ∥w∥2. Suppose u is a n-dimensional random vector where each coordinate is 1 with probability ρ and 0 with probability 1 − ρ independently. If α ≤ ρ/plog(1/δ)/2, then with probability at least 1 − δ over the randomness of u it holds that
∥w∥∞ ≤ α · ∥w∥2 ≤ c · α · ∥w ⊙ u∥2,
where c = (ρ − plog(1/δ)/2 · α)− 1
2 . If condition α ≤ ρ/p2 log(1/δ) holds, then with probability at least 1 − δ over the randomness of u it holds that
∥w∥∞ ≤ α · ∥w∥2 ≤ (ρ/2)− 1
2 · α · ∥w ⊙ u∥2.
Proof By Hoeffding’s inequality and notice that E[(wiui)2] = w2
i · E[ui] = ρw2
i and 0 ≤ (wiui)2 ≤
w2
i , we obtain
P ∥w ⊙ u∥2
2 − ρ · ∥w∥2
2 ≤ −t ≤ exp − 2t2
∥w∥44
≤ exp − 2t2
∥w∥2∞∥w∥22
≤ exp − 2t2
α2 · ∥w∥42
,
where the second inequality is by the definition of the infinity norm, and the third inequality is by the α-regularity condition. Therefore, with probability at least 1 − δ, we can get
∥w ⊙ u∥2
2 ≥ ρ · ∥w∥2
2−
r
log(1/δ)
2 · α · ∥w∥2
2.
Then, with probability at least 1 − δ, it holds that
∥w∥∞ ≤ α · ∥w∥2 ≤ α · ρ −
r
log(1/δ)
2 ·α
−1
2
· ∥w ⊙ u∥2.
Theorem C.3 (Berry-Esseen CLT) Let X1, X2, ..., be independent random variables with E[Xi] =
0, E[X2
i ] = σ2
i > 0, and E[|Xi|3] = ρi < ∞. Also, let
Sn = X1 + X2 + · · · + Xn
pσ12 + σ22 + · · · + σ2n
be the normalized n-th partial sum. Denote Fn the cdf of Sn, and Φ the cdf of the standard normal distribution. Then for all n there exists an absolute constant C such that
sup
x∈R
|Fn(x) − Φ(x)| ≤ C ·
n
X
i=1
σ2
i
−3
2·
n
X
i=1
ρi.
Lemma C.4 (Lemma D.11 in Chandrasekaran et al. (2024)) For T > 0 and error ε > 0, there exists a polynomial p such that
1. supx∈[0,T ] |p(x) − e−x| ≤ ε.
2. deg(p) ≤ O(pT log(1/ε)), if T = ω(log(1/ε)).
3. p(x) = Pdeg(p)
i=1 cixi where |ci| ≤ eC
√
T log(1/ε) for all i ≤ deg(p). Here C is a large enough constant.
Lemma C.5 If x is (α, λ)-strictly sub-exponential random variable satisfying Px[|x| > t] ≤ 2 · e−(t/λ)1+α , then the k-th moment is upper bounded by:
Ex[|x|k] ≤ Cλk · k
1+α
k
1+α + 1
2 e− k
1+α + 1+α
12k ,
where C is a universal constant.
26

Proof By the layer cake representation and the tail bound, we have
Ex[|x|k] = k
Z∞
0
tk−1 · Px[|x| > t]dt ≤ 2k
Z∞
0
tk−1 · e−(t/λ)1+α dt.
Making the substitution s = (t/λ)1+α, i.e. t = λs 1
1+α and dt = λ
1+α s− α
1+α ds, we get
Ex[|x|k] ≤ 2k
Z∞
0
λk−1s k−1
1+α · e−s · λ
1 + α s− α
1+α ds
= 2kλk
1+α
Z∞
0
s
k
1+α −1 · e−sds
= 2kλk
1+α ·Γ k
1+α .
Notice that Γ(x) ≤ Cxx−1/2e−xe1/(12x) for a positive constant C, then we have
Ex[|x|k] ≤ 2kλk
1+α ·C k
1+α
k
1+α − 1
2 e− k
1+α + 1+α
12k .
Lemma C.6 If x is (α, λ)-strictly sub-exponential random variable satisfying Px[|x| > t] ≤ 2 · e−(t/λ)1+α , then for any a > 0
Ex[ea|x|] ≤ 3e21/α(aλ)1+1/α .
Proof We split the integral into two parts at some threshold T , which we choose later:
Ex[ea|x|] = Ex ea|x| · 1[|x| < T ] + Ex ea|x| · 1[|x| ≥ T ]
≤ eaT + Ex ea|x| · 1[|x| ≥ T ] .
By the layer cake representation and the tail bound, we have
Ex ea|x| · 1[|x| ≥ T ] =
Z∞
T
aeat · Px[|x| > t]dt ≤ 2a
Z∞
T
eat · e−(t/λ)1+α dt.
Choose T to be (2a)1/αλ1+1/α. Then, we have (t/λ)1+α ≥ 2at for t ≥ T and hence
Ex ea|x| · 1[|x| ≥ T ] ≤ 2a
Z∞
T
e−atdt = 2e−aT .
Thus,
Ex[ea|x|] ≤ eaT + 2e−aT ≤ 3eaT = 3e21/α(aλ)1+1/α .
27

NeurIPS Paper Checklist
The checklist is designed to encourage best practices for responsible machine learning research, addressing issues of reproducibility, transparency, research ethics, and societal impact. Do not remove the checklist: The papers not including the checklist will be desk rejected. The checklist should follow the references and follow the (optional) supplemental material. The checklist does NOT count towards the page limit.
Please read the checklist guidelines carefully for information on how to answer these questions. For each question in the checklist:
• You should answer [Yes] , [No] , or [NA] .
• [NA] means either that the question is Not Applicable for that particular paper or the relevant information is Not Available.
• Please provide a short (1–2 sentence) justification right after your answer (even for NA).
The checklist answers are an integral part of your paper submission. They are visible to the reviewers, area chairs, senior area chairs, and ethics reviewers. You will be asked to also include it (after eventual revisions) with the final version of your paper, and its final version will be published with the paper.
The reviewers of your paper will be asked to use the checklist as one of the factors in their evaluation. While "[Yes] " is generally preferable to "[No] ", it is perfectly acceptable to answer "[No] " provided a proper justification is given (e.g., "error bars are not reported because it would be too computationally expensive" or "we were unable to find the license for the dataset we used"). In general, answering "[No] " or "[NA] " is not grounds for rejection. While the questions are phrased in -
a binary way, we acknowledge that the true answer is often more nuanced, so please just use your best judgment and write a justification to elaborate. All supporting evidence can appear either in the main paper or the supplemental material, provided in appendix. If you answer [Yes] to a question, in the justification please point to the section(s) where related material for the question can be found.
IMPORTANT, please:
• Delete this instruction block, but keep the section heading “NeurIPS Paper Checklist",
• Keep the checklist subsection headings, questions/answers and guidelines below.
• Do not modify the questions and only use the provided macros for your answers.
1. Claims
Question: Do the main claims made in the abstract and introduction accurately reflect the paper’s contributions and scope?
Answer: [Yes]
Justification: The abstract and introduction clearly state the paper’s main contribution: a discrete analogue of smoothed agnostic learning for Boolean halfspaces under strictly sub-exponential distributions, along with a computationally efficient learning algorithm. These claims are supported by the theoretical results in the main body (Section 4.5).
Guidelines:
• The answer NA means that the abstract and introduction do not include the claims made in the paper. • The abstract and/or introduction should clearly state the claims made, including the contributions made in the paper and important assumptions and limitations. A No or NA answer to this question will not be perceived well by the reviewers. • The claims made should match theoretical and experimental results, and reflect how much the results can be expected to generalize to other settings. • It is-
 fine to include aspirational goals as motivation as long as it is clear that these goals are not attained by the paper.
2. Limitations
Question: Does the paper discuss the limitations of the work performed by the authors?
28

Answer: [Yes]
Justification: The limitations of our work are discussed in the conclusion section of this paper (Section 5).
Guidelines:
• The answer NA means that the paper has no limitation while the answer No means that the paper has limitations, but those are not discussed in the paper. • The authors are encouraged to create a separate "Limitations" section in their paper. • The paper should point out any strong assumptions and how robust the results are to violations of these assumptions (e.g., independence assumptions, noiseless settings, model well-specification, asymptotic approximations only holding locally). The authors s-
hould reflect on how these assumptions might be violated in practice and what the implications would be. • The authors should reflect on the scope of the claims made, e.g., if the approach was only tested on a few datasets or with a few runs. In general, empirical results often depend on implicit assumptions, which should be articulated. • The authors should reflect on the factors that influence the performance of the approach. For example, a facial recognition algorithm may perform poorly when im-
age resolution is low or images are taken in low lighting. Or a speech-to-text system might not be used reliably to provide closed captions for online lectures because it fails to handle technical jargon. • The authors should discuss the computational efficiency of the proposed algorithms and how they scale with dataset size. • If applicable, the authors should discuss possible limitations of their approach to address problems of privacy and fairness. • While the authors might fear that complete h-
onesty about limitations might be used by reviewers as grounds for rejection, a worse outcome might be that reviewers discover limitations that aren’t acknowledged in the paper. The authors should use their best judgment and recognize that individual actions in favor of transparency play an important role in developing norms that preserve the integrity of the community. Reviewers will be specifically instructed to not penalize honesty concerning limitations.
3. Theory assumptions and proofs
Question: For each theoretical result, does the paper provide the full set of assumptions and a complete (and correct) proof?
Answer: [Yes]
Justification: All theoretical results are clearly stated with assumptions, and full proofs are provided in the main paper or the supplementary material. Lemmas and tools from prior work are cited and contextualized.
Guidelines:
• The answer NA means that the paper does not include theoretical results. • All the theorems, formulas, and proofs in the paper should be numbered and crossreferenced. • All assumptions should be clearly stated or referenced in the statement of any theorems. • The proofs can either appear in the main paper or the supplemental material, but if they appear in the supplemental material, the authors are encouraged to provide a short proof sketch to provide intuition. • Inversely, any informal proof p-
rovided in the core of the paper should be complemented by formal proofs provided in appendix or supplemental material. • Theorems and Lemmas that the proof relies upon should be properly referenced.
4. Experimental result reproducibility
Question: Does the paper fully disclose all the information needed to reproduce the main experimental results of the paper to the extent that it affects the main claims and/or conclusions of the paper (regardless of whether the code and data are provided or not)?
Answer: [NA]
29

Justification: The paper is entirely theoretical and does not include empirical experiments.
Guidelines:
• The answer NA means that the paper does not include experiments.
• If the paper includes experiments, a No answer to this question will not be perceived well by the reviewers: Making the paper reproducible is important, regardless of whether the code and data are provided or not.
• If the contribution is a dataset and/or model, the authors should describe the steps taken to make their results reproducible or verifiable.
• Depending on the contribution, reproducibility can be accomplished in various ways. For example, if the contribution is a novel architecture, describing the architecture fully might suffice, or if the contribution is a specific model and empirical evaluation, it may be necessary to either make it possible for others to replicate the model with the same dataset, or provide access to the model. In general. releasing code and data is often one good way to accomplish this, but reproducibility can al-
so be provided via detailed instructions for how to replicate the results, access to a hosted model (e.g., in the case of a large language model), releasing of a model checkpoint, or other means that are appropriate to the research performed.
• While NeurIPS does not require releasing code, the conference does require all submissions to provide some reasonable avenue for reproducibility, which may depend on the nature of the contribution. For example
(a) If the contribution is primarily a new algorithm, the paper should make it clear how to reproduce that algorithm. (b) If the contribution is primarily a new model architecture, the paper should describe the architecture clearly and fully. (c) If the contribution is a new model (e.g., a large language model), then there should either be a way to access this model for reproducing the results or a way to reproduce the model (e.g., with an open-source dataset or instructions for how to construct t-
he dataset). (d) We recognize that reproducibility may be tricky in some cases, in which case authors are welcome to describe the particular way they provide for reproducibility. In the case of closed-source models, it may be that access to the model is limited in some way (e.g., to registered users), but it should be possible for other researchers to have some path to reproducing or verifying the results.
5. Open access to data and code
Question: Does the paper provide open access to the data and code, with sufficient instructions to faithfully reproduce the main experimental results, as described in supplemental material?
Answer: [NA]
Justification: No datasets or code are used or required, as the paper does not include experiments.
Guidelines:
• The answer NA means that paper does not include experiments requiring code.
• Please see the NeurIPS code and data submission guidelines (https://nips.cc/ public/guides/CodeSubmissionPolicy) for more details.
• While we encourage the release of code and data, we understand that this might not be possible, so “No” is an acceptable answer. Papers cannot be rejected simply for not including code, unless this is central to the contribution (e.g., for a new open-source benchmark).
• The instructions should contain the exact command and environment needed to run to reproduce the results. See the NeurIPS code and data submission guidelines (https: //nips.cc/public/guides/CodeSubmissionPolicy) for more details.
• The authors should provide instructions on data access and preparation, including how to access the raw data, preprocessed data, intermediate data, and generated data, etc.
30

• The authors should provide scripts to reproduce all experimental results for the new proposed method and baselines. If only a subset of experiments are reproducible, they should state which ones are omitted from the script and why. • At submission time, to preserve anonymity, the authors should release anonymized versions (if applicable). • Providing as much information as possible in supplemental material (appended to the paper) is recommended, but including URLs to data and code is permitted.
6. Experimental setting/details
Question: Does the paper specify all the training and test details (e.g., data splits, hyperparameters, how they were chosen, type of optimizer, etc.) necessary to understand the results?
Answer: [NA]
Justification: No experimental setting is involved; the paper is theoretical.
Guidelines:
• The answer NA means that the paper does not include experiments. • The experimental setting should be presented in the core of the paper to a level of detail that is necessary to appreciate the results and make sense of them. • The full details can be provided either with the code, in appendix, or as supplemental material.
7. Experiment statistical significance
Question: Does the paper report error bars suitably and correctly defined or other appropriate information about the statistical significance of the experiments?
Answer: [NA]
Justification: The paper does not include empirical results or plots requiring error bars or statistical tests.
Guidelines:
• The answer NA means that the paper does not include experiments. • The authors should answer "Yes" if the results are accompanied by error bars, confidence intervals, or statistical significance tests, at least for the experiments that support the main claims of the paper. • The factors of variability that the error bars are capturing should be clearly stated (for example, train/test split, initialization, random drawing of some parameter, or overall run with given experimental conditions). • Th-
e method for calculating the error bars should be explained (closed form formula, call to a library function, bootstrap, etc.) • The assumptions made should be given (e.g., Normally distributed errors). • It should be clear whether the error bar is the standard deviation or the standard error of the mean. • It is OK to report 1-sigma error bars, but one should state it. The authors should preferably report a 2-sigma error bar than state that they have a 96% CI, if the hypothesis of Normality of er-
rors is not verified. • For asymmetric distributions, the authors should be careful not to show in tables or figures symmetric error bars that would yield results that are out of range (e.g. negative error rates). • If error bars are reported in tables or plots, The authors should explain in the text how they were calculated and reference the corresponding figures or tables in the text.
8. Experiments compute resources
Question: For each experiment, does the paper provide sufficient information on the computer resources (type of compute workers, memory, time of execution) needed to reproduce the experiments?
Answer: [NA]
Justification: No experiments were conducted; no compute resources were used.
31

Guidelines:
• The answer NA means that the paper does not include experiments. • The paper should indicate the type of compute workers CPU or GPU, internal cluster, or cloud provider, including relevant memory and storage. • The paper should provide the amount of compute required for each of the individual experimental runs as well as estimate the total compute. • The paper should disclose whether the full research project required more compute than the experiments reported in the paper (e.g., preliminary or -
failed experiments that didn’t make it into the paper).
9. Code of ethics
Question: Does the research conducted in the paper conform, in every respect, with the NeurIPS Code of Ethics https://neurips.cc/public/EthicsGuidelines?
Answer: [Yes]
Justification: The research is theoretical, complies with NeurIPS ethical guidelines, and does not raise ethical concerns regarding data use, privacy, or fairness.
Guidelines:
• The answer NA means that the authors have not reviewed the NeurIPS Code of Ethics. • If the authors answer No, they should explain the special circumstances that require a deviation from the Code of Ethics. • The authors should make sure to preserve anonymity (e.g., if there is a special consideration due to laws or regulations in their jurisdiction).
10. Broader impacts
Question: Does the paper discuss both potential positive societal impacts and negative societal impacts of the work performed?
Answer: [NA]
Justification: The paper is purely theoretical.
Guidelines:
• The answer NA means that there is no societal impact of the work performed. • If the authors answer NA or No, they should explain why their work has no societal impact or why the paper does not address societal impact. • Examples of negative societal impacts include potential malicious or unintended uses (e.g., disinformation, generating fake profiles, surveillance), fairness considerations (e.g., deployment of technologies that could make decisions that unfairly impact specific groups), privacy-
 considerations, and security considerations. • The conference expects that many papers will be foundational research and not tied to particular applications, let alone deployments. However, if there is a direct path to any negative applications, the authors should point it out. For example, it is legitimate to point out that an improvement in the quality of generative models could be used to generate deepfakes for disinformation. On the other hand, it is not needed to point out that a generic alg-
orithm for optimizing neural networks could enable people to train models that generate Deepfakes faster. • The authors should consider possible harms that could arise when the technology is being used as intended and functioning correctly, harms that could arise when the technology is being used as intended but gives incorrect results, and harms following from (intentional or unintentional) misuse of the technology. • If there are negative societal impacts, the authors could also discuss possible-
 mitigation strategies (e.g., gated release of models, providing defenses in addition to attacks, mechanisms for monitoring misuse, mechanisms to monitor how a system learns from feedback over time, improving the efficiency and accessibility of ML).
11. Safeguards
Question: Does the paper describe safeguards that have been put in place for responsible release of data or models that have a high risk for misuse (e.g., pretrained language models, image generators, or scraped datasets)?
32

Answer: [NA]
Justification: The paper does not release data, models, or tools with potential misuse risk.
Guidelines:
• The answer NA means that the paper poses no such risks.
• Released models that have a high risk for misuse or dual-use should be released with necessary safeguards to allow for controlled use of the model, for example by requiring that users adhere to usage guidelines or restrictions to access the model or implementing safety filters.
• Datasets that have been scraped from the Internet could pose safety risks. The authors should describe how they avoided releasing unsafe images.
• We recognize that providing effective safeguards is challenging, and many papers do not require this, but we encourage authors to take this into account and make a best faith effort.
12. Licenses for existing assets
Question: Are the creators or original owners of assets (e.g., code, data, models), used in the paper, properly credited and are the license and terms of use explicitly mentioned and properly respected?
Answer: [NA]
Justification: No external datasets, models, or software assets are used.
Guidelines:
• The answer NA means that the paper does not use existing assets. • The authors should cite the original paper that produced the code package or dataset.
• The authors should state which version of the asset is used and, if possible, include a URL. • The name of the license (e.g., CC-BY 4.0) should be included for each asset.
• For scraped data from a particular source (e.g., website), the copyright and terms of service of that source should be provided.
• If assets are released, the license, copyright information, and terms of use in the package should be provided. For popular datasets, paperswithcode.com/datasets has curated licenses for some datasets. Their licensing guide can help determine the license of a dataset.
• For existing datasets that are re-packaged, both the original license and the license of the derived asset (if it has changed) should be provided.
• If this information is not available online, the authors are encouraged to reach out to the asset’s creators.
13. New assets
Question: Are new assets introduced in the paper well documented and is the documentation provided alongside the assets?
Answer: [NA]
Justification: No new datasets or software assets are introduced.
Guidelines:
• The answer NA means that the paper does not release new assets.
• Researchers should communicate the details of the dataset/code/model as part of their submissions via structured templates. This includes details about training, license, limitations, etc.
• The paper should discuss whether and how consent was obtained from people whose asset is used.
• At submission time, remember to anonymize your assets (if applicable). You can either create an anonymized URL or include an anonymized zip file.
14. Crowdsourcing and research with human subjects
33

Question: For crowdsourcing experiments and research with human subjects, does the paper include the full text of instructions given to participants and screenshots, if applicable, as well as details about compensation (if any)?
Answer: [NA]
Justification: No human subjects or crowdsourcing are involved.
Guidelines:
• The answer NA means that the paper does not involve crowdsourcing nor research with human subjects. • Including this information in the supplemental material is fine, but if the main contribution of the paper involves human subjects, then as much detail as possible should be included in the main paper. • According to the NeurIPS Code of Ethics, workers involved in data collection, curation, or other labor should be paid at least the minimum wage in the country of the data collector.
15. Institutional review board (IRB) approvals or equivalent for research with human subjects
Question: Does the paper describe potential risks incurred by study participants, whether such risks were disclosed to the subjects, and whether Institutional Review Board (IRB) approvals (or an equivalent approval/review based on the requirements of your country or institution) were obtained?
Answer: [NA]
Justification: No IRB approval is necessary, as no human subjects are involved.
Guidelines:
• The answer NA means that the paper does not involve crowdsourcing nor research with human subjects. • Depending on the country in which research is conducted, IRB approval (or equivalent) may be required for any human subjects research. If you obtained IRB approval, you should clearly state this in the paper. • We recognize that the procedures for this may vary significantly between institutions and locations, and we expect authors to adhere to the NeurIPS Code of Ethics and the guidelines for t-
heir institution. • For initial submissions, do not include any information that would break anonymity (if applicable), such as the institution conducting the review.
16. Declaration of LLM usage
Question: Does the paper describe the usage of LLMs if it is an important, original, or non-standard component of the core methods in this research? Note that if the LLM is used only for writing, editing, or formatting purposes and does not impact the core methodology, scientific rigorousness, or originality of the research, declaration is not required.
Answer: [NA]
Justification: No LLMs were used in developing or supporting the core scientific contributions of this research.
Guidelines:
• The answer NA means that the core method development in this research does not involve LLMs as any important, original, or non-standard components.
• Please refer to our LLM policy (https://neurips.cc/Conferences/2025/LLM) for what should or should not be described.
34

---

## Processing Information

- **Processing Library:** Zotero PDFWorker
- **Processing Date:** 2026-02-10T18:18:26.377Z
- **Text Length:** 93241 characters
- **Success:** Text extraction completed
- **PDF Library Used:** Zotero PDFWorker
- **Pages Processed:** 34 of 34
