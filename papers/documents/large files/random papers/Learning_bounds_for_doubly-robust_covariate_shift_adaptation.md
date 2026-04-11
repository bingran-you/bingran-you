# PDF Document: Lee and Ma - 2025 - Learning bounds for doubly-robust covariate shift adaptation.pdf

**File Path:** Lee and Ma - 2025 - Learning bounds for doubly-robust covariate shift adaptation.pdf

**Processed Date:** 2026-02-10T18:18:44.516Z

**File Size:** 770.18 KB

**Total Pages:** 50

**Extracted Pages:** 50

**PDF Library:** Zotero PDFWorker

**Attachment Item ID:** 3172

**Title:** Learning bounds for doubly-robust covariate shift adaptation

**Collection:** Large Files > Random Papers

---

## Extracted Text Content

Learning bounds for doubly-robust covariate shift adaptation
Jeonghwan Lee∗ and Cong Ma†
Department of Statistics at the University of Chicago
November 17, 2025
Abstract
Distribution shift between the training domain and the test domain poses a key challenge for modern
machine learning. An extensively studied instance is the covariate shift, where the marginal distribution
of covariates differs across domains, while the conditional distribution of outcome remains the same. The
doubly-robust (DR) estimator, recently introduced by [36], combines the density ratio estimation with a
pilot regression model and demonstrates asymptotic normality and √n-consistency, even when the pilot
estimates converge slowly. However, the prior arts has focused exclusively on deriving asymptotic results
and has left open the question of non-asymptotic guarantees for the DR estimator.
This paper establishes the first non-asymptotic learning bounds for the DR covariate shift adaptation.
Our main contributions are two-fold: (i) We establish structure-agnostic high-probability upper bounds
on the excess target risk of the DR estimator that depend only on the L2-errors of the pilot estimates and
the Rademacher complexity of the model class, without assuming specific procedures to obtain the pilot
estimate, and (ii) under well-specified parameterized models, we analyze the DR covariate shift adaptation
based on modern techniques for non-asymptotic analysis of MLE, whose key terms governed by the Fisher
information mismatch term between the source and target distributions. Together, these findings bridge
asymptotic efficiency properties and a finite-sample out-of-distribution generalization bounds, providing
a comprehensive theoretical underpinnings for the DR covariate shift adaptation.
1 Introduction
Classical supervised learning assumes that the training and test data are drawn from the same distribution
[80, 25]. In practice, such an assumption is rarely met. For instance, credit models are typically trained on
approved customers but deployed on rejected applicants; medical imaging data vary across hospitals due to
differences in equipment and protocols [41, 24]; and in natural language processing, labeled corpora such as
the Wall Street Journal, differ sharply from the domains such as arXiv [30]. For all these cases, distribution
shift between training and test domains undermines predictive performance.
A significant particular case of such a distribution shift is known as the covariate shift [64, 56, 54], where
the marginal distribution of covariates X varies across the domains while the conditional distribution of Y |X
remains the same. Covariate shift is well-documented in healthcare [84, 26], image classification [61], remote
sensing [75], sentiment analysis [5], and speech and language processing [85, 27, 17].
∗E-mail: jhlee97@uchicago.edu. †E-mail: congm@uchicago.edu.
1
arXiv:2511.11003v1 [math.ST] 14 Nov 2025

The problem of covariate shift adaptation assumes access to labeled samples from a source domain and
unlabeled covariates from a target domain, with the goal of learning a predictor with a desirable performance
under the target distribution. This problem has been central to the literature of transfer learning and domain
adaptation [66, 68, 65, 54, 36], especially when the target labels are scarce or costly to obtain.
A core difficulty lies in estimating the covariate density ratio between the source and target domains. The
standard approach – plugging-in an estimated covariate density ratio into an importance-weighted empirical
risk minimization [66, 68, 71, 57] – turns out to be highly sensitive to the estimation errors of the density
ratio and performs poorly unless the estimator converges at a nearly parametric rate. To address this, [36]
suggests a doubly-robust (DR) estimator, which augments the importance-weighting with a pilot regression
model and leverages double machine learning techniques [9, 10, 11, 12, 18]. Their results establish the
asymptotic normality and √n-consistency of their DR estimator under parametric models, even when the
pilot estimates converge slowly.
Yet, the literature of covariate shift adaptation has centered exclusively on achieving asymptotic results.
It remains unclear how the DR covariate shift adaptation performs in finite-sample regimes. This paper aims
to close this gap. Our contributions can be summarized as follows:
(i) Structure-agnostic guarantees: We first derive the first non-asymptotic upper bounds on the excess
target risk for the DR estimator, depending only on the product of the statistical rates of convergence
of the pilot estimates, without assumptions on how they are obtained.
(ii) Fast rates for parameterized models: By studying the DR estimator through the lens of modern
non-asymptotic theory of maximum likelihood estimation (MLE), we prove that the estimator achieves
a rate of convergence of the order O (1/n) under covariate shift.
Together, these results bridge asymptotic efficiency results and a finite-sample out-of-distribution (OOD)
generalization bound, providing a comprehensive theoretical underpinning of the DR covariate shift adapta
tion.
1.1 Related works
We take a moment to discuss subsets of related prior works in covariate shift, doubly-robust estimation, and
structure-agnostic estimation framework.
Covariate shift The study of covariate shift can be dated back to the seminal paper by [64]. This paper
investigates the impact of covariate shift under parametric models with the vanilla MLE and proposes the
importance-weighting (IW) method, which has a remarkable improvement if the underlying regression model
is mis-specified. It also establishes the asymptotic normality for a weighted version of MLE under covariate
shift, but no finite-sample learning bounds are provided. Later, [67] further extends this work by studying an
unbiased estimator under the L2-generalization error. Motivated by these fundamental works, there has been
a flurry of follow-up works for parametric covariate shift. [51] introduces a statistical minimax framework and
gives lower bounds for out-of-distribution generalization under the regression models of linear and one-hidden
layer neural networks. [49] takes a closer inspection on the minimax optimal estimator for fixed-design linear
regression under covariate shift. [86] studies linear models under covariate shift where the learner has access
to a small amount of target labels. In stark contrast, this work focuses on the covariate shift problem where
the learner has no access to target labels.
2

Beyond the cases of parametric covariate shift, [14] investigate the IW estimator under the framework of
statistical learning and provide a non-asymptotic upper bound on the excess target risk for the IW estimator.
Also, there has been a strand of recent works on well-specified non-parametric models under covariate shift.
[43] investigates the non-parametric classification problem over the class of H ̈older continuous functions and
provides a new fine-grained similarity measure. Within a focus on the class of H ̈older continuous functions,
[55] introduces a novel measure of distribution mismatch between the source and target domains. Under the
setting of reproducing kernel Hilbert space (RKHS), [50, 21] establish the optimal learning rates of kernel
ridge regression (KRR) estimators. In particular, [50] proves that KRR estimation using a carefully selected
regularization parameter is miniax optimal provided that the covariate density ratio is uniformly bounded,
and a re-weighting version of the KRR estimator using truncated covariate density ratios is minimax-optimal
if the covariate density ratio has a finite second-order moment. On the other hand, [83] suggests the strategy
of learning a predictive model using pseudo-labels. As our final remark, over-parameterized models, such as
high-dimensional models and classes of neural networks, under covariate shift has drawn increasing attention
from the researchers [7, 29, 28, 73]).
Doubly-robust (DR) estimation Doubly-robust (DR) estimation combines an outcome regression with
a model for treatment or selection (e.g., the propensity score), guaranteeing its consistency if at least one is
correctly specified. Its foundations lie in the seminal paper by [60] on semi-parametric theory and influence
functions, and were formalized for applications by [3]. Some implementations include the augmented inverse
propensity weighting (AIPW) [60, 59, 3] and target maximum likelihood estimation (TMLE) [78, 77], both
of which leverage influence functions to correct bias. A corpus of recent studies integrate modern ML
techniques for flexible nuisance estimation together with the Neyman orthogonalization and sample splitting
[9, 10, 76, 38] for retaining valid inference. The DR estimation framework has expanded to settings such as
difference-in-differences [62, 52], instrumental variables [53, 46], and censored data [1]. While the DR methods
achieve robustness and potential efficiency, they require careful handling of finite-sample bias [35, 19], near
positivity violations [13], and model diagnostics [3, 60], since the correctness of at least one nuisance estimate
remains crucial.
Structure-agnostic estimation The structure-agnostic estimation framework stands for a class of statis
tical methods for estimating functionals or treatment effects without assuming any parametric or structural
models for the underlying data generating process. [2] establishes the fundamental limits for such functional
estimation, characterizing the optimal rates achievable when only minimal assumptions – such as smoothness
or boundedness – are imposed. [32] demonstrates that the DR estimators both for the average treatment
effect (ATE) and the average treatment effect on the treated (ATT) attain the minimax optimal rates under
the structure-agnostic estimation framework. Their findings underscore the effectiveness of the DR learning
in causal inference, particularly when relying on flexible ML algorithms for nuisance estimation. [31] further
studies the sensitivity of structure-agnostic estimation procedures to noise, highlighting several cases where
standard estimators fail to achieve normality or efficiency. Finally, [6] extends the framework by formalizing
the DR inference under smoothness conditions. Collectively, these recent works aim to construct a rigorous
framework for statistical estimation and inference that minimizes reliance on structural assumptions while
achieving near-optimal statistical guarantees.
3

2 Problem formulation
Let X denote the covariate space (a.k.a., the feature space). Consider the source distribution P ∈ ∆ (X × R)
and the target distribution Q ∈ ∆ (X × R). Also, let PX ∈ ∆(X) and QX ∈ ∆(X) denote by the marginal
distributions of X under P and Q, respectively. We further define PY |X : X → ∆(R) and QY |X : X → ∆(R)
to be the conditional laws of Y given X under P and Q:
PY |X (· | x) := P (Y ∈ · |X = x ) and QY |X (· | x) := Q (Y ∈ · |X = x ) .
Assumption 1 (Covariate shift model). For every x ∈ X,
EP [Y | X = x] = EQ [Y | X = x] . (2.1)
Thus, the two distributions share the same Bayes regression function f ∗ : X → R,
f ∗(x) := EP [Y | X = x] = EQ [Y | X = x] , x ∈ X.
Here, we emphasize that Assumption 1 does not require PY |X = QY |X ; only their Bayes regression functions
must coincide. In fact, this assumption is weaker compared to the classical covariate shift model [64], which
posits a full equality of the conditional distributions.
Observational data. We observe nP labeled samples from the source distribution P,
OP
1:nP := OP
i := XP
i ,YP
i : i ∈ [nP] ∼ P⊗nP ,
and nQ unlabeled target covariates,
XQ
1:nQ = X Q
j : j ∈ [nQ] ∼ Q⊗nQ
X.
Hence, the labels are available only in the source domain.
Risk and excess risk. Given a function class F ⊆ (X → R), we define the μ-risk Rμ : F → R+ by
Rμ(f ) := E(X,Y )∼μ
h
{Y − f (X)}2i
, μ ∈ ∆ (X × R) .
Given any μ ∈ ∆ (X × R), let fμ∗ ∈ argmin {Rμ(f ) : f ∈ F } denote a μ-risk minimizer over the function class
F. The excess μ-risk is then defined by
Eμ(f ) := Rμ(f ) − Rμ f ∗
μ , f ∈ F . (2.2)
Goal: covariate shift adaptation. Our objective is to construct an estimator fˆ ∈ F that achieves small
excess Q-risk EQ(fˆ) with high probability.
Covariate density ratio. A central quantity in the study of covariate shift is the covariate density ratio
between the source and target distributions. We assume that the marginal distributions PX and QX are all
absolutely continuous with respect to a σ-finite reference measure μX on X. Let
pX := dPX
dμX
: X → R+ and qX := dQX
dμX
: X → R+
denote their respective densities with respect to μX. The covariate density ratio is then defined as
ρ∗(x) := qX (x)
pX (x) , x ∈ X,
which is assumed to be finite everywhere throughout this paper.
4

3 Doubly-robust (DR) covariate shift adaptation
Re-weighting with respect to the source distribution P yields an alternative expression of the Q-risk as the
ρ∗-weighted P-risk:
RQ(f ) = E(X,Y )∼P
h
ρ∗(X) {Y − f (X)}2i
, f ∈ F. (3.1)
The importance-weighting (IW) estimator [64] can be obtained by minimizing the empirical analogue of the
ρ∗-weighted P-risk (3.1) over F. Its key limitation is the reliance on the knowledge of the unknown covariate
density ratio ρ∗ : X → R+: a modified estimator obtained by plugging-in an estimate ρˆ : X → R+ for the
covariate density ratio ρ∗ might have high variance and degrade its performance unless the estimation of the
covariate density ratio is sufficiently accurate.
The doubly-robust (DR) covariate shift adaptation [36] augments the IW method with a pilot regression
model, and then subtracts a squared-error correction term to cancel the leading error term incurred by the
density ratio estimation. For any given pilot estimates ρˆ : X → R+ and fˆ0 : X → R for the covariate density
ratio ρ∗ : X → R+ and the shared Bayes regression function f ∗ : X → R, respectively, let us define the DR
empirical risk RbDR : F → R by
RbDR(f ) := 1
nP
nP
X
i=1
ρˆ XP
i YP
i − f XP
i
2−
nfˆ0 XP
i − f XP
i
o2
+1
nQ
nQ
X
j=1
nfˆ0 XQ
j − f XQ
j
o2
(3.2)
and the DR estimator as
fˆDR ∈ argmin
n
RbDR(f ) : f ∈ F
o
. (3.3)
Intuitively, the pilot regression model terms fˆ0 makes the risk orthogonal to the first-order errors in ρˆ (and
vice-versa), yielding stability even when the pilot estimates converge slowly.
Structure-agnostic estimation. Throughout this section, the pilot estimates ρˆ : X → R+ and fˆ0 : X → R
are regarded as black-boxes: the analysis only requires the pilot estimates to achieve certain statistical error
rates, not how these estimates are obtained. This structure-agnostic estimation framework [2, 32, 39, 6, 31]
reflects practice, where the pilot estimates ρˆ and fˆ0 can be obtained by leveraging a growing body of modern
ML methods (e.g., LASSO [4, 82], tree-based algorithms [72, 81], and deep neural networks [8, 63]). Later,
our finite-sample guarantees will be directly stated in terms of their estimation errors.
4 Structure-agnostic learning bounds for DR covariate shift adap
tation
This section aims to develop finite-sample structure-agnostic learning guarantees for the doubly-robust (DR)
estimator. We first state the standing assumptions, introduce the complexity measure utilized in our analysis,
and finally present a high-probability bound on the excess Q-risk of the DR estimator (3.3) together with a
concrete illustration based on classes of Frobenius-norm-bounded neural networks.
In this section, we consider the structure-agnostic perspective that treat the given pilot estimates ρˆ, fˆ0
as black-boxes; our bounds depend only on their estimation errors measured by the mean-squared error with
respect to PX .
5

4.1 Assumptions
We begin by introducing the minimal assumptions under which our non-asymptotic analysis holds.
Assumption 2 (Well-specified model). f ∗ ∈ F.
Assumption 3 (Uniform boundedness). We have sup {∥f ∥∞ : f ∈ F} ≤ 1 and |Y | ≤ 1 almost surely under
the source distribution P and the target distribution Q.
Assumption 4. The pilot estimates ρˆ : X → R+ and fˆ0 : X → R of the covariate density ratio ρ∗ : X → R+
and the shared Bayes regression function f ∗ ∈ F, respectively, satisfy
∥ρˆ∥∞ ≤ Cdr < +∞ and fˆ0 ∞
≤ Crf < +∞ (4.1)
for some universal constants Cdr, Crf ∈ (0, +∞).
Remark 4.1. We note that the uniform boundedness assumption ∥ρˆ∥∞ ≤ Cdr < +∞ on the black-box ML
estimate ρˆ : X → R+ is standard for the case of the bounded ground-truth covariate density ratio ρ∗ : X → R+.
In particular, the estimation procedures built upon the density ratio matching under the Bregman divergence
[70, 69] including the least-squares importance fitting (LSIF) [33], kernel mean matching (KMM) [23], kernel
unconstrained LSIF (KuLSIF) [34], Kullback-Leibler importance estimation procedure (KLIEP) [71], logistic
regression-based density ratio estimation [70, 69], and deep density ratio estimation [37, 87], typically focus
on the minimization of a specific empirical risk over a uniformly bounded hypothesis class.
4.2 Uniform convergence and Rademacher complexity guarantees
Now, we turn our attention to analysis of the DR estimator (3.3) in finite-sample regimes based on uniform
convergence arguments. The key complexity measure is the Rademacher complexity of the f ∗-shifted version
of the function class F ⊆ (X → R):
F ∗ := {f − f ∗ : f ∈ F } ⊆ (X → R) .
We first recall the definition of the Rademacher complexity for completeness.
Definition 4.1 (Rademacher complexity). Given any function class G ⊆ (X → R), the empirical Rademacher
complexity of G with respect to n sample points x1:n = (x1, x2, · · · , xn) ∈ Xn is
Rbn(G) (x1:n) := Eσ1:n∼Unif({±1}n)
"
sup
(
1 n
n
X
i=1
σig (xi) : g ∈ G
)#
. (4.2)
The Rademacher complexity of G with respect to a probability measure μ ∈ ∆(X) is defined by
Rμ
n(G) := EX1:n∼μ⊗n
h
Rbn(G) (X1:n)
i
= E(X1:n,σ1:n)∼μ⊗n⊗Unif({±1}n)
"
sup
(
1 n
n
X
i=1
σig (Xi) : g ∈ G
)#
.
(4.3)
With these preliminary notions in hand, one can state a structure-agnostic high-probability upper bound
on the excess Q-risk of the DR estimator (3.3) that depends only on the L2-errors of the pilot estimates and
the Rademacher complexity of F ∗ under PX and QX .
6

Theorem 4.1 (Structure-agnostic upper bound I of the DR estimator). With Assumptions 1–4, the doubly
robust (DR) estimator (3.3) achieves the Q-estimation error
EQ fˆDR = EX∼QX
nfˆDR(X) − f ∗(X)
o2
≤ 4 ∥ρˆ − ρ∗∥L2(X,PX ) · fˆ0 − f ∗
L2(X,PX )
+ 12 (2 + Crf ) log 3
δ
Cdr
nP
+1
nQ
+ 4 (1 + Cdr) (2 + Crf )
s
2 log 3
δ
√1nP
+ √1nQ
+ 8 (1 + Cdr) (2 + Crf )
s
log 3
δ
RPnPX (F ∗)
√nP
+ RnQQX (F ∗)
√nQ
!
+ 8Cdr (1 + Crf ) RPnPX (F ∗) + 8 (3 + Crf ) RnQQX (F ∗)
(4.4)
with probability at least 1 − δ under the probability measure P⊗nP ⊗ Q⊗nQ
X.
The proof of Theorem 4.1 is deferred to Appendix B.2. Let us make use of the notation
Errρ := ∥ρˆ − ρ∗∥L2(X,PX ) and Errf := fˆ0 − f ∗
L2(X,PX )
.
The leading bias term in (4.4) can be rewritten as the product Errρ · Errf . This key observation leads to the
following two concrete implications:
(I1) Having just one good pilot estimate suffices. By assuming either Errρ = o(1) or Errf = o(1) as
min {nP, nQ} → ∞ and the remaining term is bounded, one can obtain Errρ · Errf = o(1). Hence, the
DR estimator is still consistent even when one of the pilot estimates is inaccurate; this is the finite
sample manifestation of the double robustness phenomenon [59, 58]: the error of the one-step corrected
estimators is upper bounded by a product of estimation errors of the underlying nuisance components.
To put it another way, the DR covariate shift adaptation allows us to reduce the bias incurred by the
estimation error of the covariate density ratio through the aforementioned double robustness property.
(I2) Rate multiplication. Suppose Errρ = O ̃ (n−α) and Errf = O ̃ n−β , where n := min {nP, nQ}. Then,
the order of their product term scales as O ̃ n−(α+β) . In contrast, the upper bound on the excess Q
risk of the IW estimator depends additively on Errρ, and typically requires α ≥ 1/2 to be competitive.
Thus, the DR estimator (3.3) outperforms the IW method whenever α + β > 1/2.
Since we have trivial bounds RPnPX (F ∗) ≤ 2 and RnQQX (F ∗) ≤ 2, one can simplify the excess Q-risk bound
(4.4) in Theorem 4.1 of the DR estimator as follows: With Assumptions 1–4 in hand, it follows that the DR
estimator (3.3) achieves
EQ fˆDR ≲ ∥ρˆ − ρ∗∥L2(X,PX ) · fˆ0 − f ∗
L2(X,PX )
+
s
log 1
δ nP
+
s
log 1
δ nQ
+ RPnPX (F ∗) + RnQQX (F ∗)
(4.5)
with probability at least 1 − δ.
7

4.3 An illustration with Frobenius-norm-bounded neural networks
Let X ⊆ Rn0 be a bounded domain such that sup {∥x∥2 : x ∈ X} ≤ R for some radius R ∈ (0, +∞). We also
consider a collection of 1-Lipschitz activation functions {σj ∈ (R → R) : j ∈ N} that are positive-homogeneous
(i.e., σj (αt) = ασj(t) for any (α, t) ∈ R+ × R), and that are applied element-wise. We are mainly interested
in a class of real-valued neural networks of depth d ∈ N over the domain X ⊆ Rn0 defined as
Hd (X; MF) := {NNd (·; θ) ∈ (X → R) : θ ∈ Θ (MF)} , (4.6)
where θ = (W1, · · · , Wd) ∈ Qd
j=1 Rnj×nj−1 denotes the model parameter consists of d parameter matrices
with nd = 1, and the real-valued neural network NNd (·; θ) : X → R of depth d is defined to be
NNd (x; θ) := Wdσd−1 (Wd−1σd−2 (· · · σ1 (W1x) · · · )) . (4.7)
Here, MF : [d] → R+ specifies upper bounds on the Frobenius norm of parameter matrices, and the parameter
space Θ (MF) ⊆ Qd
j=1 Rnj×nj−1 is given by
Θ (MF) :=



θ = (W1, W2, · · · , Wd) ∈
d
Y
j=1
Rnj×nj−1 : ∥Wj ∥F ≤ MF(j), ∀j ∈ [d]



.
A prominent example of the above construction are ReLU networks, where every σj : R → R corresponds to
applying the ReLU activation function σ(·) := max {0, ·} : R → R+. Armed with the class Hd (X; MF), let us
now introduce the function class of our interest. Let η : R → [−1, 1] be an L-Lipschitz bounded activation
function such that η(0) = 0, and define
F := {f (·; θ) := η ◦ NNd (·; θ) ∈ (X → [−1, 1]) : θ ∈ Θ (MF)} . (4.8)
For example, the inverse tangent activation function 2
π arctan(·) : R → [−1, 1] satisfies the desired properties
with L = 2
π . One can show that the Rademacher complexity of the f ∗-shift version of (4.8) with respect to
any probability measure μ ∈ ∆(X) is of order O √1n .
Proposition 4.1. The Rademacher complexity of the f ∗-shifted version of the neural network class defined
as (4.8), F∗ := F − {f ∗}, with respect to any given probability measure μ ∈ ∆(X) is upper bounded by
Rμ
n (F ∗) ≤ √2n



LR 1 + p(2 log 2) d
d
Y
j=1
MF(j) + plog 2



= O √1n . (4.9)
The proof of Proposition 4.1 can be found in Appendix B.1. With Proposition 4.1 in hand, one may conclude
that the DR estimator (3.3) achieves the following excess Q-risk bound when we select the hypothesis class
F ⊆ (X → [−1, 1]) of our interest as (4.8): with probability at least 1 − δ, one has
EQ fˆDR ≲ ∥ρˆ − ρ∗∥L2(X,PX ) · fˆ0 − f ∗
L2(X,PX )
+
s
log 1
δ nP
+
s
log 1
δ nQ
. (4.10)
Remark 4.2. We now turn our attention to the following approach that utilizes the double/debiased machine
learning (DML) technique [9, 10, 11, 12, 18]: We first split the observed data D := O1P:nP , XQ
1:nQ into two
subgroups D1 and D2 with the equal size, and then estimate the ground-truth covariate density ratio ρ∗ : X →
R+ and the common Bayes regression function f ∗ ∈ F utilizing the first subgroup D1 to compute a nuisance
8

estimate ρˆ : X → R+ and a pilot estimate fˆ0 : X → R. A number of results from the literature of density ratio
estimation propose algorithms achieving ∥ρˆ − ρ∗∥L2(X,PX) = Op min {nP, nQ}− 1
2+γ as min {nP, nQ} → ∞
for any constant γ ∈ (0, 2) [34, 37]. Therefore, if the pilot estimate fˆ0 : X → R of f ∗ ∈ F is consistent under
the source distribution P with a rate
fˆ0 − f ∗
L2(X,PX )
= Op min {nP, nQ}− γ
2(2+γ) as min {nP, nQ} → ∞, (4.11)
then the high-probability bound (4.10) on the Q-risk for the DR estimator (3.3) together with the class (4.8)
of Frobenius-norm-bounded neural networks (constructed using the second subgroup D2) gives
EQ fˆDR ≲
s
log 1
δ nP
+
s
log 1
δ nQ
. (4.12)
To summarize, as long as the pilot estimate fˆ0 : X → R for the Bayes regression function f ∗ ∈ F is consistent
under the source distribution P with the rate of convergence (4.11), we are able to enhance the pilot estimate
fˆ0 : X → R of f ∗ ∈ F to an estimator that achieves the rate of convergence (4.12) even if it is not consistent
under the target distribution Q.
5 Learning bounds for DR covariate shift adaptation: parametric
models
This section closely examines the doubly-robust (DR) covariate shift adaptation when the underlying function
class is finite-dimensional and well-specified. Our central takeaway messages are two-fold: (i) with parametric
models, fast 1/n-type rates of convergence are attainable without assuming exact knowledge of the covariate
density ratio ρ∗; and (ii) the DR estimator achieves these rates regardless of the statistical accuracies of the
pilot estimates ρˆ, fˆ0 .
Parametric model. Throughout this section, we impose Assumptions 2 and 3 and consider a d-dimensional
parameterization
F = f (·; θ) ∈ (X → [−1, 1]) : θ ∈ Θ ⊆ Rd , (5.1)
with the ground-truth parameter θ∗ ∈ Θ such that f ∗(·) = f (·; θ∗) ∈ F . For any pilot estimates ρˆ, fˆ0 , the
DR empirical risk specialized to the parameterized model (5.1) is
RbDR(θ) := 1
nP
nP
X
i=1
ρˆ XP
i
n
l YP
i , f XP
i ; θ − l fˆ0 XP
i , f XP
i ;θ
o
+1
nQ
nQ
X
j=1
l fˆ0 XQ
j , f XQ
j ;θ ,
(5.2)
where l(a, b) := (b − a)2. We define the DR estimator specialized to the parametric model (5.1) as
θˆDR ∈ argmin
n
RbDR(θ) : θ ∈ Θ
o
, fˆDR(·) := f ·; θˆDR ∈ F . (5.3)
Regularity and landscape conditions. We first make the following smoothness assumptions customary
in classical analysis of MLE [48, 44, 15, 79, 47].
9

Assumption 5 (Smoothness assumptions). Suppose the parameter space Θ ⊆ Rd is star-shaped at center
θ∗ ∈ Θ, i.e., [θ∗, θ] := {θ∗ + λ (θ − θ∗) : λ ∈ [0, 1]} ⊆ Θ for all θ ∈ Θ, and
(i) For each x ∈ X, the function θ ∈ Θ 7→ f (x; θ) ∈ [−1, 1] is three-times differentiable;
(ii) There exist absolute constants (b1, b2, b3) ∈ (0, +∞)3 such that
∥∇θf (x; θ)∥2 ≤ b1, ∇2
θf (x; θ) op ≤ b2, and ∇3
θf (x; θ) op ≤ b3 (5.4)
for every (x, θ) ∈ X × Θ.
Assumption 6 (Benign landscape of the DR empirical risk). For any realization O1P:nP , XQ
1:nQ ∈ OnP ×XnQ ,
the DR empirical risk RbDR : Θ → R attains a unique local minimum, which is also the global minimum.
Here, we note that Assumption 6 is satisfied, for example, if the population version of the DR empirical risk
(5.2) is strongly convex in an open neighborhood of θ∗ ∈ Θ, and the Hessian of the DR empirical risk (5.2)
uniformly concentrates on that neighborhood.
Now, we are ready to establish an improved structure-agnostic learning bound for the DR estimator (5.3)
for parametrized hypothesis classes (5.1), which leads to faster rates of convergence. For convenience, let us
first recall the classical notion of Fisher information, which plays a critical role as a key quantity to measure
the difficulty of parameter estimation. The μ-Fisher information matrix evaluated at θ ∈ Θ is defined as
Iμ(θ) := E(X,Y )∼μ ∇2
θl (Y, f (X; θ)) , θ ∈ Θ, (5.5)
where μ ∈ {P, Q} and l : R × R → R+ is the squared error loss. Then, one can easily observe that
Iμ (θ∗) := 2EX∼μX
h
∇θf (X; θ∗) {∇θf (X; θ∗)}⊤i
, (5.6)
where μX (·) := μ (· × R) ∈ ∆(X) refers to the covariate marginal distribution of μ ∈ {P, Q}. We now present
our main result of this section, whose proof is deferred to Section B.3:
Theorem 5.1 (Informal, see Theorem B.1). With the parametrized function class (5.1), under Assumptions
1–6, there is an absolute constant K ∈ (0, +∞) such that with probability at least 1 − 8δ under the probability
measure P⊗nP ⊗ Q⊗nQ
X,
EQ θˆDR = EX∼QX
n
f X; θˆDR − f ∗(X)
o2
≤ 18K2 (1 + Cdr)2 (1 + Crf )2 log d
δ
" Trace IP (θ∗) I−1
Q (θ∗)
nP
+d
nQ
#
,
(5.7)
provided that min {nP, nQ} ≥ κ · N ∗ log d
δ for some absolute constant κ ∈ (0, +∞), where
N ∗ = poly d, I−1
Q (θ∗) op , I−1
Q (θ∗) IP (θ∗) I−1
Q (θ∗) op .
Interpretations & key implications Theorem 5.1 shows that, for well-specified parametric models, the
DR estimator (5.3) achieves a fast and instance-dependent upper bound on the excess Q-risk that decouples
the contributions of the source and target samples to the bound:
Trace IP (θ∗) I−1
Q (θ∗)
nP
: contributed by the source data, d
nQ
: contributed by the target data,
10

up to logarithmic factors. Here, the trace factor Trace IP θ∗ I−1
Q θ∗ quantifies the Fisher information
mismatch between P and Q, and is the only way in which covariate shift affects the leading constant. Notably,
the excess Q-risk bound in Theorem 5.1 holds without access to the ground-truth covariate density ratio ρ∗,
and is independent of the statistical accuracies of the pilot estimates ρˆ, fˆ0 .
We also discuss some appealing attributes of DR covariate shift adaptation and its fast 1/n-type conver
gence guarantee (5.7) for well-specified parametric models provided in Theorem 5.1:
• Fast rates of convergence under covariate shift without knowing ρ∗: The excess Q-risk bound (5.7) of
the DR estimator (5.3) matches the fast 1/n-rate behavior, where n := min {nP, nQ}, which is known to
be achievable in parametric models, yet it does so without requiring an exact knowledge (or a consistent
estimate) of the covariate density ratio ρ∗ : X → R+.
• Pilot-agnostic tightness of the rates of convergence: The rate of convergence for the DR estimator (5.3)
obtained from the excess Q-risk bound (5.7) does not degrade with the quality of given pilot estimates
ρˆ, fˆ0 ; any black-box pilot estimates suffice.
• No boundedness assumption on the covariate density ratio ρ∗: Unlike the prior works on covariate shift
(e.g., [14, 50]), we make no boundedness assumptions on the true covariate density ratio ρ∗ : X → R,
broadening applicability of our results.
It would be worth pointing out the trace factor Trace IP θ∗ I−1
Q θ∗ , which is different from the trace
factors that appears in the excess Q-risk bounds for the vanilla MLE and the weighted MLE of [20]. However,
on the closer look, [20] assumes the boundedness of the covariate density ratio ρ∗, under which their excess
Q-risk bound for the weighted MLE (see Theorem 5.2 therein) can be translated to the same trace factor as
in the bound (5.7) of Theorem 5.1.
6 Discussion
This paper establishes the first finite-sample guarantees for doubly-robust (DR) covariate shift adaptation,
complementing the prior asymptotic analysis [36] and clarifying the role of pilot estimates, sample allocation,
and parametric modeling for the Bayes regression function. The structure-agnostic upper bound (4.4) of the
DR estimator (3.3) shows that the leading bias term scales as the product of statistical error rates for the
pilot estimates, providing a non-asymptotic demonstration of the celebrated double robustness phenomenon
[59, 58]: one consistent pilot estimate suffices to obtain the consistency of the one-step corrected estimators,
and the joint improvement leads us to multiplicative gains. The decomposition of the DR empirical risk (3.2)
underscores how the labeled source samples primarily benefit the pilot regression model, while the unlabeled
target covariates strengthen the effect of the pilot estimate for the covariate density ratio, offering practical
guidance on data collection under budget constraints in the target domain. Within well-specified parametric
models, our analysis of the DR estimator (5.3) via modern techniques for finite-sample analysis of MLE yields
a non-asymptotic fast 1/n-type convergence guarantee, which is independent of the statistical accuracies of
pilot black-box estimates. In this result, the difficulty of learning a predictive model under covariate shift is
quantified by the Fisher information mismatch term between the source and target distributions. Together,
the findings in this paper demonstrate that the DR covariate shift adaptation combines asymptotic efficiency
results with strong finite-sample out-of-distribution generalization bounds.
11

Acknowledgements
Jeonghwan Lee is partially supported by the Doctoral Overseas Scholarship from the Kwanjeong Educational
Foundation. Cong Ma is partially supported by the National Science Foundation via grant DMS-2311127
and the CAREER Award DMS-2443867.
12

References
[1] Xiaofei Bai, Anastasios A Tsiatis, and Sean M O’Brien. Doubly-robust estimators of treatment-specific
survival distributions in observational studies with stratified sampling. Biometrics, 69(4):830–839, 2013.
[2] Sivaraman Balakrishnan, Edward H Kennedy, and Larry Wasserman. The fundamental limits of
structure-agnostic functional estimation. arXiv preprint arXiv:2305.04116, 2023.
[3] Heejung Bang and James M Robins. Doubly robust estimation in missing data and causal inference
models. Biometrics, 61(4):962–973, 2005.
[4] Peter J. Bickel, Ya’acov Ritov, and Alexandre B. Tsybakov. Simultaneous analysis of lasso and dantzig
selector. The Annals of Statistics, 37(4):1705–1732, 2009.
[5] John Blitzer, Mark Dredze, and Fernando Pereira. Biographies, bollywood, boom-boxes and blenders:
Domain adaptation for sentiment classification. In Proceedings of the 45th annual meeting of the asso
ciation of computational linguistics, pages 440–447, 2007.
[6] Matteo Bonvini, Edward H Kennedy, Oliver Dukes, and Sivaraman Balakrishnan. Doubly-robust infer
ence and optimality in structure-agnostic models with smoothness. arXiv preprint arXiv:2405.08525,
2024.
[7] Jonathon Byrd and Zachary Lipton. What is the effect of importance weighting in deep learning? In
International conference on machine learning, pages 872–881. PMLR, 2019.
[8] Xiaohong Chen and Halbert White. Improved rates and asymptotic normality for nonparametric neural
network estimators. IEEE Transactions on Information Theory, 45(2):682–691, 1999.
[9] Victor Chernozhukov, Denis Chetverikov, Mert Demirer, Esther Duflo, Christian Hansen, and Whitney
Newey. Double/debiased/neyman machine learning of treatment effects. American Economic Review,
107(5):261–265, 2017.
[10] Victor Chernozhukov, Denis Chetverikov, Mert Demirer, Esther Duflo, Christian Hansen, Whitney
Newey, and James Robins. Double/debiased machine learning for treatment and structural parameters.
The Econometrics Journal, 21(1):C1–C68, 01 2018.
[11] Victor Chernozhukov, Juan Carlos Escanciano, Hidehiko Ichimura, Whitney K Newey, and James M
Robins. Locally robust semiparametric estimation. Econometrica, 90(4):1501–1535, 2022.
[12] Victor Chernozhukov, Whitney K Newey, and Rahul Singh. A simple and general debiased machine
learning theorem with finite-sample guarantees. Biometrika, 110(1):257–264, 2023.
[13] Stephen R. Cole and Miguel A. Hern ́an. Constructing inverse probability weights for marginal structural
models. American Journal of Epidemiology, 168(6):656–664, 2008.
[14] Corinna Cortes, Yishay Mansour, and Mehryar Mohri. Learning bounds for importance weighting.
Advances in neural information processing systems, 23, 2010.
[15] Harald Cram ́er. Mathematical methods of statistics, volume 9. Princeton university press, 1999.
13

[16] John Duchi. Probability bounds. URL: http://www. cs. berkeley. edu/jduchi/projects/probability bounds.
pdf, 2009.
[17] Geli Fei and Bing Liu. Social media text classification under negative covariate shift. In Proceedings of
the 2015 conference on empirical methods in natural language processing, pages 2347–2356, 2015.
[18] Dylan J Foster and Vasilis Syrgkanis. Orthogonal statistical learning. The Annals of Statistics,
51(3):879–908, 2023.
[19] Mary J. Funk, Daniel Westreich, Charlotte Wiesen, Til St ̈urmer, Susan M. Brookhart, and Marie
Davidian. Doubly robust estimation of causal effects. American Journal of Epidemiology, 173(7):761
767, 2011.
[20] Jiawei Ge, Shange Tang, Jianqing Fan, Cong Ma, and Chi Jin. Maximum likelihood estimation is
all you need for well-specified covariate shift. In The Twelfth International Conference on Learning
Representations, 2024.
[21] Davit Gogolashvili, Matteo Zecchin, Motonobu Kanagawa, Marios Kountouris, and Maurizio Filip
pone. When is importance weighting correction needed for covariate shift adaptation? arXiv preprint
arXiv:2303.04020, 2023.
[22] Noah Golowich, Alexander Rakhlin, and Ohad Shamir. Size-independent sample complexity of neural
networks. In Conference On Learning Theory, pages 297–299. PMLR, 2018.
[23] Arthur Gretton, Alex Smola, Jiayuan Huang, Marcel Schmittfull, Karsten Borgwardt, Bernhard
Sch ̈olkopf, et al. Covariate shift by kernel mean matching. Dataset shift in machine learning, 3(4):5,
2009.
[24] Hao Guan and Mingxia Liu. Domain adaptation for medical image analysis: a survey. IEEE Transactions
on Biomedical Engineering, 69(3):1173–1185, 2021.
[25] L ́aszl ́o Gy ̈orfi, Michael Kohler, Adam Krzyz ̇ak, and Harro Walk. A distribution-free theory of nonpara
metric regression. Springer, 2002.
[26] Ehsan Hajiramezanali, Siamak Zamani Dadaneh, Alireza Karbalayghareh, Mingyuan Zhou, and Xiaon
ing Qian. Bayesian multi-domain learning for cancer subtype discovery from next-generation sequencing
count data. Advances in Neural Information Processing Systems, 31, 2018.
[27] Ali Hassan, Robert Damper, and Mahesan Niranjan. On acoustic emotion recognition: compensating
for covariate shift. IEEE Transactions on Audio, Speech, and Language Processing, 21(7):1458–1468,
2013.
[28] Dan Hendrycks, Steven Basart, Norman Mu, Saurav Kadavath, Frank Wang, Evan Dorundo, Rahul
Desai, Tyler Zhu, Samyak Parajuli, Mike Guo, et al. The many faces of robustness: A critical analysis
of out-of-distribution generalization. In Proceedings of the IEEE/CVF international conference on
computer vision, pages 8340–8349, 2021.
[29] Dan Hendrycks and Thomas Dietterich. Benchmarking neural network robustness to common corrup
tions and perturbations. arXiv preprint arXiv:1903.12261, 2019.
14

[30] Jing Jiang and ChengXiang Zhai. Instance weighting for domain adaptation in NLP. In Annie Zaenen
and Antal van den Bosch, editors, Proceedings of the 45th Annual Meeting of the Association of Compu
tational Linguistics, pages 264–271, Prague, Czech Republic, June 2007. Association for Computational
Linguistics.
[31] Jikai Jin, Lester Mackey, and Vasilis Syrgkanis. It’s hard to be normal: The impact of noise on structure
agnostic estimation. arXiv preprint arXiv:2507.02275, 2025.
[32] Jikai Jin and Vasilis Syrgkanis. Structure-agnostic optimality of doubly robust learning for treatment
effect estimation. arXiv preprint arXiv:2402.14264, 2024.
[33] Takafumi Kanamori, Shohei Hido, and Masashi Sugiyama. A least-squares approach to direct impor
tance estimation. The Journal of Machine Learning Research, 10:1391–1445, 2009.
[34] Takafumi Kanamori, Taiji Suzuki, and Masashi Sugiyama. Statistical analysis of kernel-based least
squares density-ratio estimation. Machine Learning, 86:335–367, 2012.
[35] Jin-Dong Y. Kang and Joseph L. Schafer. Demystifying double robustness: A comparison of alternative
strategies for estimating a population mean from incomplete data. Statistical Science, 22(4):523–539,
2007.
[36] Masahiro Kato, Kota Matsui, and Ryo Inokuchi. Double debiased covariate shift adaptation robust to
density-ratio estimation. arXiv preprint arXiv:2310.16638, 2023.
[37] Masahiro Kato and Takeshi Teshima. Non-negative bregman divergence minimization for deep direct
density ratio estimation. In International Conference on Machine Learning, pages 5320–5333. PMLR,
2021.
[38] Edward H Kennedy. Semiparametric doubly robust targeted double machine learning: a review. Hand
book of statistical methods for precision medicine, pages 207–236, 2024.
[39] Edward H Kennedy, Sivaraman Balakrishnan, James M Robins, and Larry Wasserman. Minimax rates
for heterogeneous causal effect estimation. The Annals of Statistics, 52(2):793–816, 2024.
[40] T. Klein and E. Rio. Concentration around the mean for maxima of empirical processes. The Annals
of Probability, 33(3):1060 – 1077, 2005.
[41] Pang Wei Koh, Shiori Sagawa, Henrik Marklund, Sang Michael Xie, Marvin Zhang, Akshay Balsubra
mani, Weihua Hu, Michihiro Yasunaga, Richard Lanas Phillips, Irena Gao, et al. Wilds: A benchmark
of in-the-wild distribution shifts. In International conference on machine learning, pages 5637–5664.
PMLR, 2021.
[42] Vladimir Koltchinskii, Karim Lounici, and Alexandre B. Tsybakov. Nuclear-norm penalization and
optimal rates for noisy low-rank matrix completion. The Annals of Statistics, 39(5):2302 – 2329, 2011.
[43] Samory Kpotufe and Guillaume Martinet. Marginal singularity and the benefits of labels in covariate
shift. The Annals of Statistics, 49(6):3299–3323, 2021.
[44] Lucien Le Cam. On the asymptotic theory of estimation and testing hypotheses. In Proceedings of the
Third Berkeley Symposium on Mathematical Statistics and Probability, Volume 1: Contributions to the
Theory of Statistics, volume 3, pages 129–157. University of California Press, 1956.
15

[45] Michel Ledoux and Michel Talagrand. Probability in Banach Spaces: isoperimetry and processes.
Springer Science & Business Media, 2013.
[46] Youjin Lee, Edward H Kennedy, and Nandita Mitra. Doubly robust nonparametric instrumental variable
estimators for survival outcomes. Biostatistics, 24(2):518–537, 2023.
[47] Erich L Lehmann and George Casella. Theory of point estimation. Springer Science & Business Media,
2006.
[48] Erich Leo Lehmann. Elements of large-sample theory. Springer, 1999.
[49] Qi Lei, Wei Hu, and Jason Lee. Near-optimal linear regression under distribution shift. In International
Conference on Machine Learning, pages 6164–6174. PMLR, 2021.
[50] Cong Ma, Reese Pathak, and Martin J Wainwright. Optimally tackling covariate shift in rkhs-based
nonparametric regression. The Annals of Statistics, 51(2):738–761, 2023.
[51] Mohammadreza Mousavi Kalan, Zalan Fabian, Salman Avestimehr, and Mahdi Soltanolkotabi. Minimax
lower bounds for transfer learning with linear and one-hidden layer neural networks. Advances in Neural
Information Processing Systems, 33:1959–1969, 2020.
[52] Yang Ning, Sida Peng, and Jing Tao. Doubly robust semiparametric difference-in-differences estimators
with high-dimensional data. arXiv preprint arXiv:2009.03151, 2020.
[53] Ryo Okui, Dylan S Small, Zhiqiang Tan, and James M Robins. Doubly robust instrumental variable
regression. Statistica Sinica, pages 173–205, 2012.
[54] Sinno Jialin Pan and Qiang Yang. A survey on transfer learning. IEEE Transactions on knowledge and
data engineering, 22(10):1345–1359, 2009.
[55] Reese Pathak, Cong Ma, and Martin Wainwright. A new similarity measure for covariate shift with
applications to nonparametric regression. In International Conference on Machine Learning, pages
17517–17530. PMLR, 2022.
[56] Joaquin Quin ̃onero-Candela, Masashi Sugiyama, Anton Schwaighofer, and Neil D. Lawrence. Dataset
Shift in Machine Learning. The MIT Press, 12 2008.
[57] Sashank J. Reddi, Barnabas Poczos, and Alex Smola. Doubly robust covariate shift correction. In
Proceedings of the Twenty-Ninth AAAI Conference on Artificial Intelligence, AAAI’15, page 2949–2955.
AAAI Press, 2015.
[58] James Robins, Lingling Li, Eric Tchetgen, Aad van der Vaart, et al. Higher order influence functions
and minimax estimation of nonlinear functionals. In Probability and statistics: essays in honor of David
A. Freedman, volume 2, pages 335–422. Institute of Mathematical Statistics, 2008.
[59] James M Robins and Andrea Rotnitzky. Semiparametric efficiency in multivariate regression models
with missing data. Journal of the American Statistical Association, 90(429):122–129, 1995.
[60] James M Robins, Andrea Rotnitzky, and Lue Ping Zhao. Estimation of regression coefficients when some
regressors are not always observed. Journal of the American statistical Association, 89(427):846–866,
1994.
16

[61] Kate Saenko, Brian Kulis, Mario Fritz, and Trevor Darrell. Adapting visual category models to new
domains. In European conference on computer vision, pages 213–226. Springer, 2010.
[62] Pedro HC Sant’Anna and Jun Zhao. Doubly robust difference-in-differences estimators. Journal of
econometrics, 219(1):101–122, 2020.
[63] Johannes Schmidt-Hieber. Nonparametric regression using deep neural networks with ReLU activation
function. The Annals of Statistics, 48(4):1875 – 1897, 2020.
[64] Hidetoshi Shimodaira. Improving predictive inference under covariate shift by weighting the log
likelihood function. Journal of statistical planning and inference, 90(2):227–244, 2000.
[65] Masashi Sugiyama and Motoaki Kawanabe. Machine learning in non-stationary environments: Intro
duction to covariate shift adaptation. MIT press, 2012.
[66] Masashi Sugiyama, Matthias Krauledat, and Klaus-Robert Mu ̈ller. Covariate shift adaptation by im
portance weighted cross validation. Journal of Machine Learning Research, 8(5), 2007.
[67] Masashi Sugiyama and Klaus-Robert Mu ̈ller. Model selection under covariate shift. In International
Conference on Artificial Neural Networks, pages 235–240. Springer, 2005.
[68] Masashi Sugiyama, Shinichi Nakajima, Hisashi Kashima, Paul Buenau, and Motoaki Kawanabe. Direct
importance estimation with model selection and its application to covariate shift adaptation. Advances
in neural information processing systems, 20, 2007.
[69] Masashi Sugiyama, Taiji Suzuki, and Takafumi Kanamori. Density ratio estimation in machine learning.
Cambridge University Press, 2012.
[70] Masashi Sugiyama, Taiji Suzuki, and Takafumi Kanamori. Density-ratio matching under the breg
man divergence: a unified framework of density-ratio estimation. Annals of the Institute of Statistical
Mathematics, 64:1009–1044, 2012.
[71] Masashi Sugiyama, Taiji Suzuki, Shinichi Nakajima, Hisashi Kashima, Paul Von Bu ̈nau, and Motoaki
Kawanabe. Direct importance estimation for covariate shift adaptation. Annals of the Institute of
Statistical Mathematics, 60:699–746, 2008.
[72] Vasilis Syrgkanis and Manolis Zampetakis. Estimation and inference with trees and forests in high
dimensions. In Conference on learning theory, pages 3453–3454. PMLR, 2020.
[73] Nilesh Tripuraneni, Ben Adlam, and Jeffrey Pennington. Overparameterization improves robustness to
covariate shift in high dimensions. Advances in Neural Information Processing Systems, 34:13883–13897,
2021.
[74] Joel A Tropp. User-friendly tail bounds for sums of random matrices. Foundations of computational
mathematics, 12(4):389–434, 2012.
[75] Devis Tuia, E Pasolli, and William J Emery. Using active learning to adapt remote sensing image
classifiers. Remote Sensing of Environment, 115(9):2232–2242, 2011.
[76] Mark J Van der Laan and Sherri Rose. Targeted learning in data science. Springer, 2018.
17

[77] Mark J Van der Laan, Sherri Rose, et al. Targeted learning: causal inference for observational and
experimental data, volume 4. Springer, 2011.
[78] Mark J Van Der Laan and Daniel Rubin. Targeted maximum likelihood learning. The international
journal of biostatistics, 2(1), 2006.
[79] Aad W Van der Vaart. Asymptotic statistics, volume 3. Cambridge university press, 2000.
[80] Vladimir Vapnik. The nature of statistical learning theory. Springer science & business media, 2013.
[81] Stefan Wager and Susan Athey. Estimation and inference of heterogeneous treatment effects using
random forests. Journal of the American Statistical Association, 113(523):1228–1242, 2018.
[82] Martin J Wainwright. Sharp thresholds for high-dimensional and noisy sparsity recovery using l1
constrained quadratic programming (lasso). IEEE transactions on information theory, 55(5):2183–2202,
2009.
[83] Kaizheng Wang. Pseudo-labeling for kernel ridge regression under covariate shift. arXiv preprint
arXiv:2302.10160, 2023.
[84] Dennis Wei, Karthikeyan Natesan Ramamurthy, and Kush R Varshney. Health insurance market risk
assessment: Covariate shift and k-anonymity. In Proceedings of the 2015 SIAM International Conference
on Data Mining, pages 226–234. SIAM, 2015.
[85] Makoto Yamada, Masashi Sugiyama, and Tomoko Matsui. Covariate shift adaptation for semi
supervised speaker identification. In 2009 IEEE International Conference on Acoustics, Speech and
Signal Processing, pages 1661–1664. IEEE, 2009.
[86] Xuhui Zhang, Jose Blanchet, Soumyadip Ghosh, and Mark S Squillante. A class of geometric struc
tures in transfer learning: Minimax bounds and optimality. In International Conference on Artificial
Intelligence and Statistics, pages 3794–3820. PMLR, 2022.
[87] Siming Zheng, GUOHAO SHEN, Yuling Jiao, Yuanyuan Lin, and Jian Huang. An error analysis of
deep density-ratio estimation with bregman divergence, 2022.
18

A Preliminary facts
In this section, let us collect a couple of useful preliminary facts that facilitates our analysis. The following
contraction lemma is a modification of Theorem 4.12 of [45] that has been established in [16]. See Theorem
7 therein for the proof of Lemma A.1.
Lemma A.1 (The Ledoux-Talagrand contraction principle). Let f : R+ → R+ be any non-decreasing convex
function, and φi : R → R, i ∈ [n], are L-Lipschitz continuous functions such that φi(0) = 0. Then, it holds
for any T ⊆ Rn that
Eσ1:n ∼Unif ({±1}n )
"
f
(
1
2 sup
t1:n ∈T
n
X
i=1
σiφi (ti)
)#
≤ Eσ1:n∼Unif({±1}n)
"
f L · sup
t1:n ∈T
n
X
i=1
σiti
!#
.
In particular, if we let f (t) = t for t ∈ R+, then we obtain
Eσ1:n ∼Unif ({±1}n )
"
sup
t1:n ∈T
1 n
n
X
i=1
σiφi (ti)
#
≤ 2LEσ1:n∼Unif({±1}n)
"
sup
t1:n ∈T
1 n
n
X
i=1
σiti
#
. (A.1)
The following is a well-known standard deviation inequality for controlling the maxima of empirical processes;
see Theorem 1.1 in [40].
Lemma A.2 (Classical Talagrand’s concentration inequality). Let F ⊆ (X → [−B, B]) be any function class
and X1:n = (X1, X2, · · · , Xn) ∼ P⊗n for some P ∈ ∆(X). We define
Z := sup
(
bP − P (f ) := 1
n
n
X
i=1
f (Xi) − EX∼P [f (X)] : f ∈ F
)
,
and v2 := sup {VarX∼P [f (X)] : f ∈ F }, where Pb := 1
n
Pn
i=1 δXi ∈ ∆(X) stands for the empirical measure for
the n samples X1:n ∼ P⊗n. Then, it holds for every x ∈ R+ that
P {Z > E[Z] + x} ≤ exp − nx2
4BE[Z] + 2v2 + 3Bx . (A.2)
In particular, for any given δ ∈ (0, 1), it holds with probability at least 1 − δ that
Z − E[Z] ≤ 3B log 1
δ
n +2
s
BE[Z] log 1
δ
n+
s
2v2 log 1
δ
n
(A.3)
under the probability measure P⊗n.
Another key technical result is the following generic version of the Bernstein inequality for random vectors,
which plays a crucial role in establishing concentration properties for the gradient of the DR empirical risk
(5.2) with respect to the parameter vector θ. Check Lemma D.1 in Section D.1 for further details.
Lemma A.3. Suppose P ∈ ∆ Rd satisfies EX∼P [X] = 0d and V := EX∼P
h
∥X∥2
2
i
< +∞. Define
B(α) := inf t ∈ (0, +∞) : EX∼P exp ∥X∥2
t
α
≤ 2 , α ∈ [1, +∞) , (A.4)
and assume that B(α) < +∞ for some constant α ∈ [1, +∞). Then, there exists an absolute constant C > 0
such that for any given δ ∈ (0, 1), we have
1 n
n
X
i=1
Xi
2
≤C


s
V log d
δ
n + B(α) log 1
α B(α)
√V
V log d
δ
n

 (A.5)
under (X1, X2, · · · , Xn) ∼ P⊗n, with probability at least 1 − δ.
19

We refer to Proposition 2 in [42] for the proof of Lemma A.3.
Lastly, the following lemma gives a standard upper bound on the Rademacher complexity of finite hy
pothesis classes.
Lemma A.4. Let F ⊆ (X → [−B, B]) be a finite function class, i.e., |F| < +∞. Then, it holds that
Rμ
n(F ) ≤ 2B
r
log (2|F|)
n , (A.6)
for any probability measure μ ∈ ∆(X).
B Proofs for Section 3
B.1 Proof of Proposition 4.1
We first observe for any model parameter θ = (W1, · · · , Wd) ∈ Θ (MF) that
−NNd (x; θ) = −NNd (x; (W1, · · · , Wd)) = NNd (x; (W1, · · · , −Wd)) , ∀x ∈ X,
together with (W1, · · · , −Wd) ∈ Θ (MF). This observation implies that
Hd (X; MF) = −Hd (X; MF) = {−NNd (·; θ) ∈ (X → R) : θ ∈ Θ (MF)} . (B.1)
With the observation (B.1) in hand, one can realize from Theorem 1 in [22] that
Rμ
n (Hd (X; MF))
= E(X1:n,σ1:n)∼μ⊗n⊗Unif({±1}n)
"
sup
(
1 n
n
X
i=1
σiNNd (Xi; θ) : θ ∈ Θ (MF)
)#
≤
R 1 + p(2 log 2) d Qd
j=1 MF(j)
√n .
(B.2)
On the other hand, by virtue of the Ledoux-Talagrand contraction principle (Lemma A.1), we obtain that
Rμ
n(F )
= EX1:n∼μ⊗n
h
Rbn(F ) (X1:n)
i
= EX1:n∼μ⊗n
"
Eσ 1:n ∼Unif({±1}n )
"
sup
(
1 n
n
X
i=1
η {NNd (Xi; θ)} : θ ∈ Θ (MF)
)##
≤ 2L · EX1:n∼μ⊗n
"
Eσ 1:n ∼Unif({±1}n )
"
sup
(
1 n
n
X
i=1
NNd (Xi; θ) : θ ∈ Θ (MF)
)##
= 2L · EX1:n∼μ⊗n
h
Rbn (Hd (X; MF)) (X1:n)
i
= 2L · Rμ
n (Hd (X; MF))
(a)
≤
2LR 1 + p(2 log 2) d Qd
j=1 MF(j)
√n ,
(B.3)
20

where the step (a) follows from the upper bound (B.2) on the Rademacher complexity of Hd (X; MF). Hence,
one can reveal that
Rμ
n (F ∗)
(b)
≤ Rμ
n(F ) + Rμ
n ({f ∗})
(c)
≤
2LR 1 + p(2 log 2) d Qd
j=1 MF(j)
√n + 2√log 2
√n ,
which thus completes the proof of Proposition 4.1, where the step (b) follows by the triangle inequality and
the step (c) invokes the bound (B.3) and the standard upper bound on the Rademacher complexity of finite
hypothesis classes (see Lemma A.4 for details).
B.2 Proof of Theorem 4.1
We first provide a formal definition of the doubly-robust (DR) empirical risk RbDR : OnP × XnQ → (F → R),
where
RbDR o1:nP , x1:nQ (f ) := 1
nP
nP
X
i=1
ρˆ xP
i yP
i − f xP
i
2−
nfˆ0 xP
i − f xP
i
o2
+1
nQ
nQ
X
j=1
nfˆ0 XQ
j − f XQ
j
o2
,
(B.4)
and define the DR population risk R : F → R by
R(f ) := E OP1:nP ,XQ
1:nQ ∼P⊗nP ⊗Q⊗nQ
X
h
RbDR OP
1:nP , XQ
1:nQ (f )
i
, f ∈ F. (B.5)
Let us note here that RbDR = RbDR O1P:nP , XQ
1:nQ : F → R under O1P:nP , XQ
1:nQ ∼ P⊗nP ⊗ Q⊗nQ
X . Then, one
can decompose the DR population risk R : F → R as follows:
R(f )
= E(X,Y )∼P
h
ρˆ(X) {Y − f (X)}2i
− EX∼PX ρˆ(X)
nfˆ0(X) − f (X)
o2
+ EX∼QX
nfˆ0(X) − f (X)
o2
= E(X,Y )∼P
h
ρ∗(X) {Y − f (X)}2i
+ E(X,Y )∼P {ρˆ(X) − ρ∗(X)} {Y − f (X)}2 −
nfˆ0(X) − f (X)
o2
(=a) RQ(f ) + E(X,Y )∼P {ρˆ(X) − ρ∗(X)} {Y − f (X)}2 −
nfˆ0(X) − f (X)
o2
,
(B.6)
where the step (a) follows due to the observation (3.1). The definition of the DR estimator (3.3) yields the
following basic inequality: 0 ≤ RbDR(f ) − RbDR fˆDR for every f ∈ F . Thus, we have
0
(b)
≤
RbDR (f ∗) − RbDR fˆDR
=
n
RbDR (f ∗) − R (f ∗)
o
+ R (f ∗) − RQ (f ∗) −
n
RQ fˆDR − RQ (f ∗)
o
| {z }
= EQ(fˆDR)
−
n
R fˆDR − RQ fˆDR
o
−
n
RbDR fˆDR − R fˆDR
o
,
(B.7)
21

where the step (b) holds by the well-specification assumption of the model f ∗ ∈ F. It follows that
EQ fˆDR = RQ fˆDR − RQ (f ∗)
≤ R (f ∗) − RQ (f ∗) −
n
R fˆDR − RQ fˆDR
o
| {z }
=: (T1)
+
n
RbDR (f ∗) − RbDR fˆDR
o
−
n
R (f ∗) − R fˆDR
o
| {z }
=: (T2)
.
(B.8)
Bounding the term (T1): With the decomposition (B.8) in hand, let us first take a closer inspection on
the first term (T1).
(T1) (c=) E(X,Y )∼P {ρˆ(X) − ρ∗(X)} {Y − f ∗(X)}2 −
nfˆ0(X) − f ∗(X)
o2
−
n
Y − fˆDR(X)
o2
+
nfˆ0(X) − fˆDR(X)
o2
= 2E(X,Y )∼P
h
{ρˆ(X) − ρ∗(X)}
n
Y − fˆ0(X)
o nfˆDR(X) − f ∗(X)
oi
= 2EX∼PX
h
{ρˆ(X) − ρ∗(X)}
n
f ∗(X) − fˆ0(X)
o nfˆDR(X) − f ∗(X)
oi
,
where the step (c) uses the decomposition (B.6) of the DR population risk R : F → R. Therefore, we have
(T1) ≤ 2 EX∼PX
h
{ρˆ(X) − ρ∗(X)}
n
f ∗(X) − fˆ0(X)
o nfˆDR(X) − f ∗(X)
oi
≤ 2EX∼PX
h
|ρˆ(X) − ρ∗(X)| · f ∗(X) − fˆ0(X) · fˆDR(X) − f ∗(X)
i
(d)
≤4
n
EX ∼PX
h
{ρˆ(X) − ρ∗(X)}2io 1
2 EX∼PX
nfˆ0(X) − f ∗(X)
o2 1
2
= 4 ∥ρˆ − ρ∗∥L2(X,PX ) · fˆ0 − f ∗
L2(X,PX )
,
(B.9)
where the step (d) holds due to the Cauchy-Schwarz inequality together with the fact that fˆDR(x) − f ∗(x) ≤
fˆDR ∞
+ ∥f ∗∥∞ ≤ 2, follows from Assumption 3.
Bounding the term (T2): With regards to the term (T2), we utilize tools from the empirical processes
theory in order to establish its upper bound. First, we observe for any f ∈ F that
RbDR (f ∗) − RbDR(f )
=2
nP
nP
X
i=1
ρˆ XP
i f XP
i − f∗ XP
i
n
YP
i − fˆ0 XP
i
o
+2
nQ
nQ
X
j=1
n
f XQ
j − f∗ XQ
i
o nfˆ0 XQ
j − f∗ XQ
i
o
−1
nQ
nQ
X
j=1
n
f XQ
j − f∗ XQ
i
o2
.
(B.10)
22

With this observation in hand, it is seen that
(T2) ≤ sup
nn
RbDR (f ∗) − RbDR(f )
o
− R (f ∗) − R(f ) : f ∈ F
o
(e)
≤ 2 sup GP
nP (φ) OP
1:nP : φ ∈ F ∗ + 2 sup
n
GQ,(1)
nQ (φ) XQ
1:nQ : φ ∈ F ∗o
+ sup
n
GQ,(2)
nQ (φ) XQ
1:nQ : φ ∈ F ∗o
= 2 sup GP
nP (φ) OP
1:nP : φ ∈ F ∗ ∪ (−F ∗) + 2 sup
n
GQ,(1)
nQ (φ) XQ
1:nQ : φ ∈ F ∗ ∪ (−F ∗)
o
+ sup
n
GQ,(2)
nQ (φ) XQ
1:nQ : φ ∈ F ∗ ∪ (−F ∗)
o
,
(B.11)
where the step (e) follows by virtue of the triangle inequality. Here, −F∗ := {−φ : φ ∈ F∗}, and the functions
GPnP : (X → R) → (OnP → R) and
n
GQ,(l)
nQ : (X → R) → (XnQ → R) : l ∈ [2]
o
are defined as
GP
nP (φ) oP
1:nP := 1
nP
nP
X
i=1
ρˆ (xnP
i ) φ (xnP
i)
n
yP
i − fˆ0 (xnP
i)
o
− E(X,Y )∼P
h
ρˆ(X )φ(X )
n
Y − fˆ0(X)
oi
,
GQ,(1)
nQ (φ) xQ
1:nQ := 1
nQ
nQ
X
j=1
φ xQ
j
nfˆ0 xQ
j − f ∗ xQ
j
o
− EX∼QX
h
φ(X )
nfˆ0(X) − f ∗(X)
oi
,
GQ,(2)
nQ (φ) xQ
1:nQ := 1
nQ
nQ
X
j=1
n
φ xQ
j
o2
− EX∼QX
h
{φ(X )}2 i
.
(B.12)
If O1P:nP ∼ P⊗nP and XQ
1:nQ ∼ Q⊗nQ
X , then
•
n
GPnP (φ) O1P:nP = Pb − P
h
ρˆ(X )φ(X )
n
Y − fˆ0(X)
oi
: φ ∈ F ∗ ∪ (−F ∗)
o
,
•
n
GQ,(1)
nQ (f ) XQ
1:nQ =
n
Qb X − QX
oh
φ(X )
nfˆ0(X) − f ∗(X)
oi
: φ ∈ F ∗ ∪ (−F ∗)
o
,
•
n
GQ,(2)
nQ (f ) XQ
1:nQ =
n
Qb X − QX
oh
{φ(X )}2 i
: φ ∈ F ∗ ∪ (−F ∗)
o
are empirical processes indexed by φ ∈ F ∗ ∪ (−F ∗), where Pb ∈ ∆ (X × R) and Qb X ∈ ∆(X) are the empirical
distributions for the nP labeled source samples O1P:nP and nQ unlabeled target samples XQ
1:nQ , respectively,
i.e., Pb := 1
nP
PnP
i=1 δ(XP
i ,Y P
i ) and Qb X := 1
nQ
PnQ
j=1 δXQ
j
.
Control of the supremum of GPnP (φ) O1P:nP : φ ∈ F ∗ ∪ (−F ∗) : Firstly, we are in need of a delicate
control of the expectation of the supremum of the empirical process
GP
nP (φ) OP
1:nP : φ ∈ F ∗ ∪ (−F ∗) .
This goal can be achieved through the following lemma, whose proof is provided in Appendix C.1.
Lemma B.1. The expectation of the supremum of the empirical process GPnP (φ) O1P:nP : φ ∈ F ∗ ∪ (−F ∗)
is upper bounded by
EOP1:nP ∼P⊗nP sup GP
nP (φ) OP
1:nP : φ ∈ F ∗ ∪ (−F ∗) ≤ 4Cdr (1 + Crf ) RPnPX (F ∗) . (B.13)
We then move on to a tight control of the size of
GP
nP (φ) OP
1:nP : φ ∈ F ∗ ∪ (−F ∗) − EOP1:nP ∼P⊗nP GP
nP (φ) OP
1:nP : φ ∈ F ∗ ∪ (−F ∗)
under O1P:nP ∼ P⊗nP . This task can be settled via the following lemma, whose proof is deferred to Appendix
C.2.
23

Lemma B.2. If O1P:nP ∼ P⊗nP , then with probability at least 1 − δ, we have
sup GP
nP (φ) OP
1:nP : φ ∈ F ∗ ∪ (−F ∗)
− EOP1:nP ∼P⊗nP sup GP
nP (φ) OP
1:nP : φ ∈ F ∗ ∪ (−F ∗)
≤ 6Cdr (1 + Crf )
nP
log 1
δ + 2Cdr (1 + Crf )
s
2 log 1
δ nP
+ 4Cdr (1 + Crf )
s
2RPnPX (F ∗) log 1
δ nP
.
(B.14)
To finish up, we first denote the right-hand side of the inequality (B.14) from Lemma B.2 by
BP(δ) := 6Cdr (1 + Crf )
nP
log 1
δ + 2Cdr (1 + Crf )
s
2 log 1
δ nP
+ 4Cdr (1 + Crf )
s
2RPnPX (F ∗) log 1
δ nP
.
(B.15)
for ease of exposition. Then, with probability at least 1 − δ, one has
sup GP
nP (φ) OP
1:nP : φ ∈ F ∗ ∪ (−F ∗)
= sup GP
nP (φ) OP
1:nP : φ ∈ F ∗ ∪ (−F ∗)
− EOP1:nP ∼P⊗nP sup GP
nP (φ) OP
1:nP : φ ∈ F ∗ ∪ (−F ∗)
+ EOP1:nP ∼P⊗nP sup GP
nP (φ) OP
1:nP : φ ∈ F ∗ ∪ (−F ∗)
(f )
≤ BP(δ) + 4Cdr (1 + Crf) RPnPX (F ∗) ,
(B.16)
where the step (f) invokes Lemmas B.1 and B.2. For simplicity, we define the following event: for δ ∈ (0, 1),
EP(δ) :=
n
oP
1:nP , xQ
1:nQ ∈ OnP × XnQ :
sup GP
nP (φ) oP
1:nP : φ ∈ F ∗ ∪ (−F ∗) ≤ BP(δ) + 4Cdr (1 + Crf ) RPnPX (F ∗) .
(B.17)
Then, the upper bound (B.16) implies
P⊗nP ⊗ Q⊗nQ
X {EP(δ)} ≥ 1 − δ for every δ ∈ (0, 1). (B.18)
Control of the supremum of
n
GQ,(1)
nQ (φ) XQ
1:nQ : φ ∈ F ∗ ∪ (−F ∗)
o
: Similar to the preceding argument
for controlling the supremum of the empirical process GPnP (φ) O1P:nP : φ ∈ F ∗ ∪ (−F ∗) , we first establish
an upper bound on the expectation of the supremum of the empirical process
n
GQ,(1)
nQ (φ) XQ
1:nQ : φ ∈ F ∗ ∪ (−F ∗)
o
.
We provide a desired result in the following lemma, whose proof is postponed to Appendix C.3.
Lemma B.3. The expectation of the supremum of the empirical process
n
GQ,(1)
nQ (φ) XQ
1:nQ : φ ∈ F ∗ ∪ (−F ∗)
o
can be upper bounded by
EXQ
1:nQ ∼Q⊗nQ
X
h
sup
n
GQ,(1)
nQ (φ) XQ
1:nQ : φ ∈ F ∗ ∪ (−F ∗)
oi
≤ 4 (1 + Crf ) RnQQX (F ∗) . (B.19)
Analogously, we now aim at a tight control of the size of
sup
n
GQ,(1)
nQ (φ) XQ
1:nQ : φ ∈ F ∗ ∪ (−F ∗)
o
− EXQ
1:nQ ∼Q⊗nQ
X
h
sup
n
GQ,(1)
nQ (φ) XQ
1:nQ : φ ∈ F ∗ ∪ (−F ∗)
oi
under the data generating process XQ
1:nQ ∼ Q⊗nQ
X . This goal can be achieved through the following lemma,
whose detailed proof is provided in Appendix C.4.
24

Lemma B.4. If XQ
1:nQ ∼ Q⊗nQ
X , then with probability at least 1 − δ, it holds that
sup
n
GQ,(1)
nQ (φ) XQ
1:nQ : φ ∈ F ∗ ∪ (−F ∗)
o
− EXQ
1:nQ ∼Q⊗nQ
X
h
sup
n
GQ,(1)
nQ (φ) XQ
1:nQ : φ ∈ F ∗ ∪ (−F ∗)
oi
≤ 6 (1 + Crf )
nQ
log 1
δ + 2 (1 + Crf )
s
2 log 1
δ nQ
+ 4 (1 + Crf )
s
2RnQQX (F ∗) log 1
δ nQ
.
(B.20)
For simplicity, we denote the right-hand side of the inequality (B.20) from Lemma B.4 for any given δ ∈ (0, 1)
as
B(1)
Q (δ) := 6 (1 + Crf )
nQ
log 1
δ + 2 (1 + Crf )
s
2 log 1
δ nQ
+ 4 (1 + Crf )
s
2RnQQX (F ∗) log 1
δ nQ
. (B.21)
Then, it holds with probability greater than 1 − δ that
sup
n
GQ,(1)
nQ (φ) XQ
1:nQ : φ ∈ F ∗ ∪ (−F ∗)
o
= sup
n
GQ,(1)
nQ (φ) XQ
1:nQ : φ ∈ F ∗ ∪ (−F ∗)
o
− EXQ
1:nQ ∼Q⊗nQ
X
h
sup
n
GQ,(1)
nQ (φ) XQ
1:nQ : φ ∈ F ∗ ∪ (−F ∗)
oi
+ EXQ
1:nQ ∼Q⊗nQ
X
h
sup
n
GQ,(1)
nQ (φ) XQ
1:nQ : φ ∈ F ∗ ∪ (−F ∗)
oi
(g)
≤ B(1)
Q (δ) + 4 (1 + Crf) RnQQX (F ∗) ,
(B.22)
where the step (g) holds due to Lemma B.3 and B.4. For brevity, let us define the following event: for any
given δ ∈ (0, 1),
E (1)
Q (δ) :=
n
oP
1:nP , xQ
1:nQ ∈ OnP × XnQ :
sup
n
GQ,(1)
nQ (φ) xQ
1:nQ : φ ∈ F ∗ ∪ (−F ∗)
o
≤ B(1)
Q (δ) + 4 (1 + Crf) RnQQX (F ∗)
o
.
(B.23)
Then, the upper bound (B.22) directly yields
P⊗nP ⊗ Q⊗nQ
X
n
E (1)
Q (δ)
o
≥ 1 − δ for every δ ∈ (0, 1). (B.24)
Control of the supremum of
n
GQ,(2)
nQ (φ) XQ
1:nQ : φ ∈ F ∗ ∪ (−F ∗)
o
: Akin to the above delicate control
of the supremum of empirical processes, we bound the expectation of the supremum of the empirical process
n
GQ,(2)
nQ (φ) XQ
1:nQ : φ ∈ F ∗ ∪ (−F ∗)
o
.
It can be developed via the following lemma, with the detailed proof postponed to Appendix C.5.
Lemma B.5. The expectation of the supremum of the empirical process
n
GQ,(2)
nQ (φ) XQ
1:nQ : φ ∈ F ∗ ∪ (−F ∗)
o
has an upper bound
EXQ
1:nQ ∼Q⊗nQ
X
h
sup
n
GQ,(2)
nQ (φ) XQ
1:nQ : φ ∈ F ∗ ∪ (−F ∗)
oi
≤ 16 · RnQQX (F ∗) . (B.25)
As the next step, we now turn to a tight control of the size of
sup
n
GQ,(2)
nQ (φ) XQ
1:nQ : φ ∈ F ∗ ∪ (−F ∗)
o
− EXQ
1:nQ ∼Q⊗nQ
X
h
sup
n
GQ,(2)
nQ (φ) XQ
1:nQ : φ ∈ F ∗ ∪ (−F ∗)
oi
with XQ
1:nQ ∼ Q⊗nQ
X . The following lemma takes a step forward towards this goal, whose proof is deferred to
Appendix C.6.
25

Lemma B.6. If XQ
1:nQ ∼ Q⊗nQ
X , then with probability at least 1 − δ, it holds that
sup
n
GQ,(2)
nQ (φ) XQ
1:nQ : φ ∈ F ∗ ∪ (−F ∗)
o
− EXQ
1:nQ ∼Q⊗nQ
X
h
sup
n
GQ,(2)
nQ (φ) XQ
1:nQ : φ ∈ F ∗ ∪ (−F ∗)
oi
≤ 12
nQ
log 1
δ +4
s
2 log 1
δ nQ
+ 16
s
RnQQX (F ∗) log 1
δ nQ
.
(B.26)
For ease of expression, we denote the right-hand side of the bound (B.26) in Lemma B.6 by
B(2)
Q (δ) := 12
nQ
log 1
δ +4
s
2 log 1
δ nQ
+ 16
s
RnQQX (F ∗) log 1
δ nQ
. (B.27)
Then, one has with probability at least 1 − δ that
sup
n
GQ,(2)
nQ (φ) XQ
1:nQ : φ ∈ F ∗ ∪ (−F ∗)
o
= sup
n
GQ,(2)
nQ (φ) XQ
1:nQ : φ(·) ∈ F ∗ ∪ (−F ∗)
o
− EXQ
1:nQ ∼Q⊗nQ
X
h
sup
n
GQ,(2)
nQ (φ) XQ
1:nQ : φ ∈ F ∗ ∪ (−F ∗)
oi
+ EXQ
1:nQ ∼Q⊗nQ
X
h
sup
n
GQ,(2)
nQ (φ) XQ
1:nQ : φ ∈ F ∗ ∪ (−F ∗)
oi
(h)
≤ B(2)
Q (δ) + 16 · RnQQX (F ∗) ,
(B.28)
where the step (h) invokes Lemmas B.5 and B.6. For the sake of simplicity, let us define the following event:
for any δ ∈ (0, 1),
E (2)
Q (δ) :=
n
oP
1:nP , xQ
1:nQ ∈ OnP × XnQ :
sup
n
GQ,(2)
nQ (φ) xQ
1:nQ : φ ∈ F ∗ ∪ (−F ∗)
o
≤ B(2)
Q (δ) + 16 · RnQQX (F ∗)
o
.
(B.29)
Then, the upper bound (B.29) gives
P⊗nP ⊗ Q⊗nQ
X
n
E (2)
Q (δ)
o
≥ 1 − δ for every δ ∈ (0, 1). (B.30)
Finally, it is time to put all pieces together in order to bound the term (T2) from our main bound (B.8).
To this end, we introduce the event E(δ) := EP δ
3 ∩ E (1)
Q
δ
3 ∩ E (2)
Q
δ
3 for every δ ∈ (0, 1). By virtue of the
union bound, the inequalities (B.18), (B.24), and (B.30) implies
P⊗nP ⊗ Q⊗nQ
X {E (δ)} = 1 − P⊗nP ⊗ Q⊗nQ
X {(OnP × XnQ ) \ E(δ)} ≥ 1 − δ.
On the other hand, by utilizing the definitions (B.17), (B.23), and (B.29) of the events EP(δ), E(1)
Q (δ), and
E (2)
Q (δ), respectively, it follows on the event E(δ) that
(T2)
(i)
≤ 2 sup GP
nP (φ) OP
1:nP : φ ∈ F ∗ ∪ (−F ∗)
+ 2 sup
n
GQ,(1)
nQ (φ) XQ
1:nQ : φ ∈ F ∗ ∪ (−F ∗)
o
+ sup
n
GQ,(2)
nQ (φ) XQ
1:nQ : φ ∈ F ∗ ∪ (−F ∗)
o
≤ 2BP
δ
3 + 2B(1)
Q
δ
3 + B(2)
Q
δ 3
+ 8Cdr (1 + Crf) RPnPX (F ∗) + 8 (3 + Crf) RnQQX (F ∗) ,
(B.31)
26

where the step (i) holds by virtue of the inequality (B.11). Taking two bounds (B.9) and (B.31) collectively
leads to the following upper bound on the excess Q-risk of the DR estimator (3.3): on the event E(δ), which
holds with probability at least 1 − δ under the probability measure P⊗nP ⊗ Q⊗nQ
X , we obtain
EQ fˆDR ≤ (T1) + (T2)
≤ 4 ∥ρˆ − ρ∗∥L2(X,PX ) · fˆ0 − f ∗
L2(X,PX )
+ 2BP
δ
3 + 2B(1)
Q
δ
3 + B(2)
Q
δ 3
+ 8Cdr (1 + Crf) RPnPX (F ∗) + 8 (3 + Crf) RnQQX (F ∗)
≤ 4 ∥ρˆ − ρ∗∥L2(X,PX ) · fˆ0 − f ∗
L2(X,PX )
+ 12 (2 + Crf) log 3
δ
Cdr
nP
+1
nQ
+ 4 (1 + Cdr) (2 + Crf)
s
2 log 3
δ
√1nP
+ √1nQ
+ 8 (1 + Cdr) (2 + Crf)
s
log 3
δ
RPnPX (F ∗)
√nP
+ RnQQX (F ∗)
√nQ
!
+ 8Cdr (1 + Crf) RPnPX (F ∗) + 8 (3 + Crf) RnQQX (F ∗) ,
and this completes the proof of Theorem 4.1.
B.3 Proof of Theorem 5.1
To begin with, we introduce some key universal constants to formally present our improved structure-agnostic
guarantee of the DR estimator (5.3) for parameterized hypothesis classes F ⊆ (X → [−1, 1]):
B1 := 4 (1 + Cdr) (1 + Crf) b1,
B2 := 8√2 · max
n
Cdr (1 + Crf) b2, b2
1 + (1 + Crf)2 b2
o
,
B3 := max {2 (1 + Cdr) (1 + Crf) , 4} · b3 + 6b1b2.
(B.32)
With the above conventions, the detailed version of Theorem 5.1 can be stated as follows:
Theorem B.1 (Structure-agnostic upper bound II for the DR estimator). With the parameterized function
class (5.1) and Assumptions 1–6, the DR estimator (5.3) satisfies the following property: there is an absolute
constant K ∈ (0, +∞) such that, with probability at least 1 − 8δ under the probability measure P⊗nP ⊗ Q⊗nQ
X,
EQ θˆDR = EX∼QX
n
f X; θˆDR − f ∗(X)
o2
≤ 18K2 (1 + Cdr)2 (1 + Crf )2 log d
δ
" Trace IP (θ∗) I−1
Q (θ∗)
nP
+d
nQ
#
,
(B.33)
provided that min {nP, nQ} ≥ κ · N ∗ log d
δ , where N ∗ := max {N1, N2} and
κ := max
n
κ, {2B3K (1 + Cdr) (1 + Crf )}2 , 18 {K (1 + Cdr) (1 + Crf )}2o
,
κ := max



(260B2)2 , 860B3
3 K (1 + Cdr) (1 + Crf )
2
,
(
160B12B2
(1 + Cdr)2 (1 + Crf )2
)2
3
,
(
640B13B3
3 (1 + Cdr)2 (1 + Crf )2
)1
2
, 80B12
(1 + Cdr)2 (1 + Crf )2



,
27

N1 := I−1
Q (θ∗) 2
op · max 1, Trace IP (θ∗) I−2
Q (θ∗) + I−1
Q (θ∗) ,
min Trace IP (θ∗) I−2
Q (θ∗) , Trace I−1
Q (θ∗) − 2
3 , (B.34)
min Trace IP (θ∗) I−2
Q (θ∗) , Trace I−1
Q (θ∗) − 1
2
o
,
N2 := max



" Trace IP (θ∗) I−2
Q (θ∗) + I−1
Q (θ∗)
min Trace IP (θ∗) I−1
Q (θ∗) , d
#2
, Trace IP (θ∗) I−2
Q (θ∗) + I−1
Q (θ∗) 3
min Trace IP (θ∗) I−1
Q (θ∗) , d 2 ,


I −1
Q (θ∗) 2
op
min Trace IP (θ∗) I−1
Q (θ∗) , d


2 3
,


I −1
Q (θ∗) 3
op
min Trace IP (θ∗) I−1
Q (θ∗) , d


1 2
,
I −1
Q (θ∗) op
min Trace IP (θ∗) I−1
Q (θ∗) , d
)
.
Towards proving Theorem B.1, we first present a key technical lemma that plays a critical role in the proof.
Roughly speaking, the following lemma aims to capture the distance between the DR estimate θˆDR ∈ Θ and
the ground-truth parameter θ∗ ∈ Θ under different metrics.
Lemma B.7. With Assumptions 1–6, given any δ ∈ 0, 1
8 and (nP, nQ) ∈ N × N such that min {nP, nQ} ≥
κ·max {N1, N2} log d
δ , where κ, N1, and N2 are specified as (B.34), the following facts hold with probability
at least 1 − 8δ under P⊗nP ⊗ Q⊗nQ
X : for some universal constant K ∈ (0, +∞),
(i) we have θˆDR ∈ Br(δ) (θ∗), where the radius r(δ) ∈ (0, +∞) is given by
r(δ) := 3K (1 + Cdr) (1 + Crf )
s
log d
δ


s
Trace IP (θ∗) I−2
Q (θ∗)
nP
+
s
Trace I−1
Q (θ∗)
nQ

.
(B.35)
(ii) it holds that
I
1 2
Q (θ∗) θˆDR − θ∗ 2
2
≤ 9K2 (1 + Cdr)2 (1 + Crf )2 log d
δ


s
Trace IP (θ∗) I−1
Q (θ∗)
nP
+
s
d
nQ


2
.
(B.36)
For simplicity, let Λ(δ) ⊆ OnP ×XnQ denote the event for which Lemma B.7 holds, which immediately implies
P⊗nP ⊗ Q⊗nQ
X {Λ(δ)} ≥ 1 − 8δ for any given δ ∈ 0, 1
8.
28

We embark on the proof of Theorem B.1 by doing a Taylor expansion with respect to as follows:
EQ θˆDR = E(X,Y )∼Q
h
l Y, f X; θˆDR − l (Y, f (X; θ∗))
i
= E(X,Y )∼Q [∇θl (Y, f (X; θ∗))] ⊤ θˆDR − θ∗
+1
2!
θˆDR − θ∗ ⊤
E(X,Y )∼Q ∇2
θl (Y, f (X; θ∗)) θˆDR − θ∗
+1
3! E(X,Y )∼Q
h
∇3
θl Y, f X; θ ̃
i
, θˆDR − θ∗ ⊗3
F
(=a) 1
2!
θˆDR − θ∗ ⊤
IQ (θ∗) θˆDR − θ∗
+1
3! E(X,Y )∼Q
h
∇3
θl Y, f X; θ ̃
i
, θˆDR − θ∗ ⊗3
F
(B.37)
for some θ ̃ ∈
n
(1 − λ)θ∗ + λθˆDR : λ ∈ [0, 1]
o
, where the step (a) holds due to the following facts:
∇θl (y, f (x; θ)) = 2 {f (x; θ) − y} ∇θf (x; θ) ,
∇2
θl (y, f (x; θ)) = 2∇θf (x; θ) {∇θf (x; θ)}⊤ + 2 {f (x; θ) − y} ∇2
θf (x; θ) ,
∇3
θl (y, f (x; θ)) = 2∇2
θf (x; θ) ⊗ ∇θf (x; θ) + 4∇θf (x; θ) ⊗ ∇2
θf (x; θ)
+ 2 {f (x; θ) − y} ∇3
θf (x; θ)
(B.38)
Thus, it follows from the equation (B.37) that
EQ θˆDR ≤ 1
2
θˆDR − θ∗ ⊤
IQ (θ∗) θˆDR − θ∗
+1
6 E(X,Y )∼Q
h
∇3
θl Y, f X; θ ̃
i
op
θˆDR − θ∗ 3
2
(b)
≤1
2
θˆDR − θ∗ ⊤
IQ (θ∗) θˆDR − θ∗ + B3
6
θˆDR − θ∗ 3
2
,
(B.39)
where the step (b) holds by the observation that the operator norm ∥·∥op : Rd ⊗3 → R+ is a convex function
together with Jensen’s inequality and the following bound: for any θ ∈ Θ,
∇3
θl (Y, f (X; θ)) op ≤ 2 (1 + |Y |) ∇3
θf (X; θ) op + 6 ∥∇θf (X; θ)∥2 ∇2
θf (X; θ) op
(c)
≤ 4b3 + 6b1b2 ≤ B3
Q-almost surely, where the step (c) follows from Assumption 3 and the part (ii) of Assumption 5. Therefore,
while being conditioned on the event Λ(δ), we reach
EQ θˆDR
≤9
2 K2 (1 + Cdr)2 (1 + Crf)2 log d
δ


s
Trace IP (θ∗) I−1
Q (θ∗)
nP
+
s
d
nQ


2
+3
2 B3K3 (1 + Cdr)3 (1 + Crf)3 log 3
2d
δ
·


s
Trace IP (θ∗) I−2
Q (θ∗)
nP
+
s
Trace I−1
Q (θ∗)
nQ


3
.
(B.40)
29

At this point, one can observe that if min {nP, nQ} ≥ κ · max {N1, N2} log d
δ , then
3
2 B3K3 (1 + Cdr)3 (1 + Crf)3 log 3
2d
δ
·


s
Trace IP (θ∗) I−2
Q (θ∗)
nP
+
s
Trace I−1
Q (θ∗)
nQ


3
≤9
2 K2 (1 + Cdr)2 (1 + Crf)2 log d
δ


s
Trace IP (θ∗) I−1
Q (θ∗)
nP
+
s
d
nQ


2
.
(B.41)
Hence, by taking two pieces (B.40) and (B.41) collectively, it holds that if min {nP, nQ} ≥ κ·max {N1, N2} log d
δ, then we have on the event Λ(δ) that
EQ θˆDR
≤ 9K2 (1 + Cdr)2 (1 + Crf)2 log d
δ


s
Trace IP (θ∗) I−1
Q (θ∗)
nP
+
s
d
nQ


2
(d)
≤ 18K2 (1 + Cdr)2 (1 + Crf)2 log d
δ
" Trace IP (θ∗) I−1
Q (θ∗)
nP
+d
nQ
#
,
(B.42)
where the step (d) invokes the Cauchy-Schwarz inequality. Since P⊗nP ⊗ Q⊗nQ
X {Λ(δ)} ≥ 1 − 8δ, the upper
bound (B.42) on the excess Q-risk of the DR estimator (5.3) holds with probability higher than 1 − 8δ under
the probability measure P⊗nP ⊗ Q⊗nQ
X , which completes the proof of Theorem B.1.
C Proof of auxiliary lemmas for the proof of Theorem 4.1
C.1 Proof of Lemma B.1
By following the standard symmetrization argument from empirical processes theory, we find that
EOP1:nP ∼P⊗nP sup GP
nP (φ) OP
1:nP : φ ∈ F ∗ ∪ (−F ∗)
= EOP1:nP ∼P⊗nP sup GP
nP (φ) OP
1:nP : φ ∈ F ∗ (C.1)
≤ 2E OP1:nP ,σ1:nP ∼P⊗nP ⊗Unif({±1}nP )
"
sup
(
1
nP
nP
X
i=1
σiρˆ XP
i φ XP
i
n
YP
i − fˆ0 XP
i
o
: φ ∈ F∗
)#
.
To control the last term in the bound (C.1), we leverage the Ledoux-Talagrand contraction principle, which
is formally stated in Lemma A.1. To this end, define the functions φiP : OnP → (R → R), i ∈ [nP], by
φP
i oP
1:nP (t) := ρˆ xP
i
n
yP
i − fˆ0 xP
i
o
(t), ∀t ∈ R, (C.2)
and let φiP := φiP O1P:nP : R → R for O1P:nP ∼ P⊗nP for simplicity. Let AP := TnP
i=1 YiP ≤ 1 , which holds
P⊗nP -almost surely. Then, one can observe that the function φiP : OnP → (R → R) is a Cdr (1 + Crf)-Lipschitz
continuous function such that φiP(0) = 0 for every i ∈ [nP] on the event AP. Then, while being conditioned
on O1P:nP , we obtain by virtue of Lemma A.1 that
Eσ1:nP ∼Unif({±1}nP )
"
sup
(
1
nP
nP
X
i=1
σiρˆ XP
i φ XP
i
n
YP
i − fˆ0 XP
i
o
: φ ∈ F∗
)
· 1AP
#
30

= Eσ1:nP ∼Unif({±1}nP )
"
sup
(
1
nP
nP
X
i=1
σiρˆ XP
i φ XP
i
n
YP
i − fˆ0 XP
i
o
: φ ∈ F∗
)#
· 1AP
= Eσ1:nP ∼Unif({±1}nP )
"
sup
(
1
nP
nP
X
i=1
σiφP
i (ti) : t1:nP ∈ TP OP
1:nP
)#
· 1AP (C.3)
≤ 2Cdr (1 + Crf) Eσ1:nP ∼Unif({±1}nP )
"
sup
(
1
nP
nP
X
i=1
σiti : t1:nP ∈ TP OP
1:nP
)#
· 1AP ,
where TP : OnP → P (RnP ) is defined as
TP oP
1:nP := f xP
i − f ∗ xP
i : i ∈ [nP] : f ∈ F ⊆ RnP .
Here, P (RnP ) denotes the power set of the nP-dimensional Euclidean space RnP . By taking the bound (C.3)
collectively into the inequality (C.1), we arrive at
EOP1:nP ∼P⊗nP sup GP
nP (φ) OP
1:nP : φ ∈ F ∗ ∪ (−F ∗)
≤ 2E OP1:nP ,σ1:nP ∼P⊗nP ⊗Unif({±1}nP )
"
sup
(
1
nP
nP
X
i=1
σiρˆ XP
i φ XP
i
n
YP
i − fˆ0 XP
i
o
: φ ∈ F∗
)
· 1AP
#
≤ 4Cdr (1 + Crf) EOP1:nP ∼P⊗nP
"
Eσ1:nP ∼Unif({±1}nP )
"
sup
(
1
nP
nP
X
i=1
σiti : t1:nP ∈ TP OP
1:nP
)#
· 1AP
#
= 4Cdr (1 + Crf) EOP1:nP ∼P⊗nP
h
RbnP (F ∗) XP
1:nP · 1AP
i
= 4Cdr (1 + Crf) RPnPX (F ∗) ,
as desired.
C.2 Proof of Lemma B.2
To begin with, we introduce the function class {θP(φ) : φ ∈ F ∗ ∪ (−F ∗)}, where θP(φ) : X × [−1, 1] → R is
defined to be
θP(φ)(x, y) := ρˆ(x)φ(x)
n
y − fˆ0(x)
o
, ∀(x, y) ∈ X × [−1, 1] .
Recall that the event AP = TnP
i=1 YiP ≤ 1 holds P⊗nP -almost surely, i.e., (P⊗nP ) (AP) = 1. We thus obtain
that
sup GP
nP (φ) OP
1:nP : φ ∈ F ∗ ∪ (−F ∗)
= sup GP
nP (φ) OP
1:nP : φ ∈ F ∗ ∪ (−F ∗) · 1AP
= sup
(
1
nP
nP
X
i=1
θP(φ) OP
i − EO∼P [θP(φ)(O)] : φ ∈ F ∗ ∪ (−F ∗)
)
· 1AP
= sup
(
1
nP
nP
X
i=1
θP(φ) OP
i − EO∼P [θP(φ)(O)] : φ ∈ F ∗ ∪ (−F ∗)
)
(C.4)
P⊗n-almost surely. In light of the equation (C.4), it can be easily seen based on the assumption (4.1) that
(i) |θP(φ)(x, y)| ≤ 2Cdr (1 + Crf) for every (x, y, φ) ∈ X × [−1, 1] × {F ∗ ∪ (−F ∗)}.
(ii) Var(X,Y )∼P [θP(φ)(X, Y )] ≤ E(X,Y )∼P
h
{θP(φ)(X, Y )}2i
≤ 4C2
dr (1 + Crf)2 for every φ ∈ F ∗ ∪ (−F ∗).
31

By the classical Talagrand’s concentration inequality (Lemma A.2) with B, v2 = 2Cdr (1 + Crf) , 4C2
dr (1 + Crf)2 ,
it holds with probability at least 1 − δ that
sup GP
nP (φ) OP
1:nP : φ ∈ F ∗ ∪ (−F ∗)
− EOP1:nP ∼P⊗nP sup GP
nP (φ) OP
1:nP : φ ∈ F ∗ ∪ (−F ∗)
≤ 6Cdr (1 + Crf)
nP
log 1
δ + 2Cdr (1 + Crf)
s
2 log 1
δ nP
(C.5)
+ √2nP
s
2Cdr (1 + Crf) EOP1:nP ∼P⊗nP sup GPnP (φ) O1P:nP : φ ∈ F ∗ ∪ (−F ∗) log 1
δ
(a)
≤ 6Cdr (1 + Crf)
nP
log 1
δ + 2Cdr (1 + Crf)
s
2 log 1
δ nP
+ 4Cdr (1 + Crf)
s
2RPnPX (F ∗) log 1
δ nP
,
where the step (a) invokes Lemma B.1. We thus complete the proof of Lemma B.2.
C.3 Proof of Lemma B.3
In light of the standard symmetrization argument from empirical processes theory, we reveal that
EXQ
1:nQ ∼Q⊗nQ
X
h
sup
n
GQ,(1)
nQ (φ) XQ
1:nQ : φ ∈ F ∗ ∪ (−F ∗)
oi
= EXQ
1:nQ ∼Q⊗nQ
X
h
sup
n
GQ,(1)
nQ (φ) XQ
1:nQ : φ ∈ F ∗oi
(C.6)
≤ 2E XQ
1:nQ ,σ1:nQ ∼Q⊗nQ
X ⊗Unif({±1}nQ )

sup



1
nQ
nQ
X
j=1
σj φ XQ
j
nfˆ0 XQ
j − f∗ XQ
j
o
: φ ∈ F∗




.
We now focus on a tight control of the final term of the bound (C.6) via the Ledoux-Talagrand contraction
principle (Lemma A.1). Towards this end, let us consider the functions αQ
j : XnQ → ([−2, 2] → R) for j ∈ [nQ]
defined as
αQ
j xQ
1:nQ (t) :=
nfˆ0 xQ
j − f ∗ xQ
j
o
t, ∀t ∈ [−2, 2] , (C.7)
and simplify αQ
j := αQ
j XQ
1:nQ : [−2, 2] → R, where XQ
1:nQ ∼ QnQ
X . Then, one can find that αQ
j : [−2, 2] → R
is an (1 + Crf)-Lipschitz continuous function with αQ
j (0) = 0 for j ∈ [nQ]. By applying the Ledoux-Talagrand
contraction principle (Lemma A.1), while being conditioned on XQ
1:nQ , we now have
Eσ1:nQ ∼Unif({±1}nQ )

sup



1
nQ
nQ
X
j=1
σj φ XQ
j
nfˆ0 XQ
j − f∗ XQ
j
o
: φ ∈ F∗





= Eσ1:nQ ∼Unif({±1}nQ )

sup



1
nQ
nQ
X
j=1
σj αQ
j (tj ) : t1:nQ ∈ TQ XQ
1:nQ





≤ 2 (1 + Crf) Eσ1:nQ ∼Unif({±1}nQ )

sup



1
nQ
nQ
X
j=1
σj tj : t1:nQ ∈ TQ XQ
1:nQ




,
(C.8)
where TQ : XnQ → P (RnQ ) is defined as
TQ xQ
1:nQ :=
n
f xQ
j − f ∗ xQ
j : j ∈ [nQ] : f ∈ F
o
⊆ RnQ . (C.9)
32

Here, P (RnQ ) refers to the power set of the nQ-dimensional Euclidean space RnQ . By taking two pieces (C.6)
and (C.8) collectively, we reach
EXQ
1:nQ ∼Q⊗nQ
X
h
sup
n
GQ,(1)
nQ (φ) XQ
1:nQ : φ ∈ F ∗ ∪ (−F ∗)
oi
≤ 4 (1 + Crf) E XQ
1:nQ ,σ1:nQ ∼Q⊗nQ
X ⊗Unif({±1}nQ )

sup



1
nQ
nQ
X
j=1
σj tj : t1:nQ ∈ TQ XQ
1:nQ





= 4 (1 + Crf) EXQ
1:nQ ∼Q⊗nQ
X
h
RbnQ (F ∗) XQ
1:nQ
i
= 4 (1 + Crf) RQ
nQ (F ∗) ,
which thus completes the proof of Lemma B.3.
C.4 Proof of Lemma B.4
Similar to the proof of Lemma B.2, we first introduce the function class
n
θ(1)
Q (φ) : φ ∈ F ∗ ∪ (−F ∗)
o
, where
θ(1)
Q (φ) : X → R is a function defined as
θ(1)
Q (φ)(x) := φ(x)
nfˆ0(x) − f ∗(x)
o
, ∀x ∈ X.
Then, it follows that
sup
n
GQ
nQ,(1) (φ) XQ
1:nQ : φ ∈ F ∗ ∪ (−F ∗)
o
= sup



1
nQ
nQ
X
j=1
θ(1)
Q (φ) XQ
j − EX∼QX
h
θ(1)
Q (φ)(X)
i
: φ ∈ F ∗ ∪ (−F ∗)



.
(C.10)
At this point, one can easily reveal based on Assumption 3 that
(i) θ(1)
Q (φ)(x) ≤ 2 (1 + Crf) for every (x, φ) ∈ X × {F ∗ ∪ (−F ∗)}.
(ii) VarX∼QX
h
θ(1)
Q (φ)(X)
i
≤ EX∼QX
n
θ(1)
Q (φ)(X)
o2
≤ 4 (1 + Crf)2 for all f ∈ F ∪ (−F ).
The classical Talagrand’s concentration inequality (Lemma A.2) with parameters B, v2 = 2 (1 + Crf) , 4 (1 + Crf)2
together with the equation (C.10) tells us that with probability at least 1 − δ,
sup
n
GQ,(1)
nQ (φ) XQ
1:nQ : φ ∈ F ∗ ∪ (−F ∗)
o
− EXQ
1:nQ ∼Q⊗nQ
X
h
sup
n
GQ,(1)
nQ (φ) XQ
1:nQ : φ ∈ F ∗ ∪ (−F ∗)
oi
≤ 6 (1 + Crf)
nQ
log 1
δ + 2 (1 + Crf)
s
2 log 1
δ nQ
(C.11)
+ √2nQ
s
2 (1 + Crf) EXQ
1:nQ ∼Q⊗nQ
X
h
sup
n
GQ,(1)
nQ (φ) XQ
1:nQ : φ ∈ F ∗ ∪ (−F ∗)
oi
log 1
δ
(a)
≤ 6 (1 + Crf)
nQ
log 1
δ + 2 (1 + Crf)
s
2 log 1
δ nQ
+ 4 (1 + Crf)
s
2RnQQX (F ∗) log 1
δ nQ
,
where the step (a) follows by Lemma B.3, and this finishes the proof of Lemma B.4.
33

C.5 Proof of Lemma B.5
Similar to the proofs for Lemmas B.1 and B.3, we embark on the proof using the standard symmetrization
argument from empirical processes theory, which yields
EXQ
1:nQ ∼Q⊗nQ
X
h
sup
n
GQ,(2)
nQ (φ) XQ
1:nQ : φ ∈ F ∗ ∪ (−F ∗)
oi
= EXQ
1:nQ ∼Q⊗nQ
X
h
sup
n
GQ,(2)
nQ (φ) XQ
1:nQ : φ ∈ F ∗oi
≤ 2E XQ
1:nQ ,σ1:nQ ∼Q⊗nQ
X ⊗Unif({±1}nQ )

sup



1
nQ
nQ
X
j=1
σj
n
φ XQ
j
o2
: φ ∈ F∗




.
(C.12)
We now consider the function βQ : [−2, 2] → R defined to be
βQ(t) := t2, ∀t ∈ [−2, 2] .
It turns out that βQ : [−2, 2] → R is a 4-Lipschitz continuous function with βQ(0) = 0. Then, the Ledoux
Talagrand contraction principle (Lemma A.1) tells us that while being conditioned on XQ
1:nQ ,
Eσ1:nQ ∼Unif({±1}nQ )

sup



1
nQ
nQ
X
j=1
σj
n
φ XQ
j
o2
: φ ∈ F∗





= Eσ1:nQ ∼Unif({±1}nQ )

sup



1
nQ
nQ
X
j=1
σj βQ (tj ) : t1:nQ ∈ TQ XQ
1:nQ





≤ 8Eσ1:nQ ∼Unif({±1}nQ )

sup



1
nQ
nQ
X
j=1
σj tj : t1:nQ ∈ TQ XQ
1:nQ




,
(C.13)
where the function TQ : XnQ → P (RnQ ) is previously defined as (C.9). Putting two pieces (C.12) and (C.13)
together, we arrive at
EXQ
1:nQ ∼Q⊗nQ
X
h
sup
n
GQ,(2)
nQ (φ) XQ
1:nQ : φ ∈ F ∗ ∪ (−F ∗)
oi
≤ 16 · E XQ
1:nQ ,σ1:nQ ∼Q⊗nQ
X ⊗Unif({±1}nQ )

sup



1
nQ
nQ
X
j=1
σj tj : t1:nQ ∈ TQ XQ
1:nQ





= 16 · EXQ
1:nQ ∼Q⊗nQ
X
h
RbnQ (F ∗) XQ
1:nQ
i
= 16 · RQ
nQ (F ∗) ,
as desired.
C.6 Proof of Lemma B.6
We begin the proof by introducing the function class
n
θ(2)
Q (φ) : φ ∈ F ∗ ∪ (−F ∗)
o
, where θ(2)
Q (φ) : X → R is
a function defined as
θ(2)
Q (φ)(x) := {φ(x)}2 , ∀x ∈ X.
34

Then, it is obvious that
sup
n
GQ
nQ,(2) (φ) XQ
1:nQ : φ ∈ F ∗ ∪ (−F ∗)
o
= sup



1
nQ
nQ
X
j=1
θ(2)
Q (φ) XQ
j − EX∼QX
h
θ(2)
Q (φ)(X)
i
: φ ∈ F ∗ ∪ (−F ∗)



.
(C.14)
Also, one can easily find based on Assumption 3 that
(i) θ(2)
Q (φ)(x) ≤ 4 for every (x, φ) ∈ X × {F ∗ ∪ (−F ∗)}.
(ii) VarX∼QX
h
θ(2)
Q (φ)(X)
i
≤ EX∼QX
n
θ(2)
Q (φ)(X)
o2
≤ 16 for every f ∈ F ∪ (−F).
By virtue of the classical Talagrand’s concentration inequality (Lemma A.2) with B, v2 = (4, 16) together
with the equation (C.14), we establish with probability at least 1 − δ that
sup
n
GQ,(2)
nQ (φ) XQ
1:nQ : φ ∈ F ∗ ∪ (−F ∗)
o
− EXQ
1:nQ ∼Q⊗nQ
X
h
sup
n
GQ,(2)
nQ (φ) XQ
1:nQ : φ ∈ F ∗ ∪ (−F ∗)
oi
≤ 12
nQ
log 1
δ +4
s
2 log 1
δ nQ
+ √4nQ
s
EXQ
1:nQ ∼Q⊗nQ
X
h
sup
n
GQ,(2)
nQ (φ) XQ
1:nQ : φ ∈ F ∗ ∪ (−F ∗)
oi
log 1
δ
(a)
≤ 12
nQ
log 1
δ +4
s
2 log 1
δ nQ
+ 16
s
RnQQX (F ∗) log 1
δ nQ
,
where the step (a) follows due to Lemma B.5. This ends the proof of Lemma B.6.
D Proof of auxiliary lemmas for the proof of Theorem B.1
D.1 Proof of Lemma B.7
Before delving into the proof of our main Lemma (Lemma B.7) that plays a key role in the proof for Theorem
B.1, we first establish key concentration properties of the gradient and the Hessian matrix of the DR empirical
risk (5.2) that holds under Assumptions 1–5, whose proofs are postponed to the final part of this subsection.
Lemma D.1 (Concentration property of the gradient). For any A ∈ Rd×d, there exists a universal constant
C(A) ∈ (0, +∞) that obeys the following concentration property of the gradient of the DR empirical risk (5.2)
with respect to the parameter vector θ: for any δ ∈ (0, 1], it holds that
A ∇θRbDR OP
1:nP , XQ
1:nQ (θ∗) − E OP1:nP ,XQ
1:nQ ∼P⊗nP ⊗QnQ
X
h
∇θRbDR OP
1:nP , XQ
1:nQ (θ∗)
i
2
≤ C(A)



s
VP(A) log 2d
δ nP
+
s
VQ(A) log 2d
δ nQ
+ 4 (1 + Cdr) (1 + Crf ) b1
| {z }
= B1 (defined in (B.32))
∥A∥op · log 2d
δ
1
nP
+1
nQ

 
 
(D.1)
35

with probability higher than 1 − δ under the data generating process O1P:nP , XQ
1:nQ ∼ P⊗nP ⊗ QnQ
X , where the
functions ΦP : X × R → Rd and ΦQ : X → Rd are defined as
ΦP(x, y) := 2ρˆ(x)
nfˆ0(x) − y
o
∇θf (x; θ∗) and
ΦQ(x) := 2
n
f (x; θ∗) − fˆ0(x)
o
∇θf (x; θ∗) ,
(D.2)
respectively, and the quantities VP(A) ∈ (0, +∞) and VQ(A) ∈ (0, +∞) are defined by
VP(A) := E(X,Y )∼P
h
A ΦP(X, Y ) − E(X,Y )∼P [ΦP(X, Y )] 2
2
i
and
VQ(A) := EX∼QX
h
∥A {ΦQ(X) − EX∼QX [ΦQ(X)]}∥2
2
i
,
(D.3)
respectively.
Lemma D.2 (Concentration property of the Hessian). The Hessian matrix of the DR empirical risk (5.2)
with respect to the parameter vector θ has the following concentration property: for any δ ∈ (0, 1], it holds
that
∇2
θ
RbDR OP
1:nP , XQ
1:nQ (θ∗) − E OP1:nP ,XQ
1:nQ ∼P⊗nP ⊗QnQ
X
h
∇2
θ
RbDR OP
1:nP , XQ
1:nQ (θ∗)
i
op
≤ 8√2 · max Cdr (1 + Crf ) b2, b2
1 + (1 + Crf ) b2
| {z }
= B2 (defined in (B.32))



s
log 4d
δ nP
+
s
log 4d
δ nQ



(D.4)
with probability at least 1 − δ under the data generating process O1P:nP , XQ
1:nQ ∼ P⊗nP ⊗ QnQ
X.
Lastly, it is straightforward to see that
∇θRbDR oP
1:nP , xQ
1:nQ (θ) = 2
nP
nP
X
i=1
ρˆ xP
i
nfˆ0 xP
i − yP
i
o
∇θf xP
i;θ
+2
nQ
nQ
X
j=1
n
f xQ
j ; θ − fˆ0 xQ
j
o
∇θf xQ
j ;θ ,
∇2
θ
RbDR oP
1:nP , xQ
1:nQ (θ) = 2
nP
nP
X
i=1
ρˆ xP
i
nfˆ0 xP
i − yP
i
o
∇2
θf xP
i ; θ (D.5)
+2
nQ
nQ
X
j=1
∇θf xQ
j ;θ
n
∇θf xQ
j ;θ
o⊤
+
n
f xQ
j ; θ − fˆ0 xQ
j
o
∇2
θf xQ
j ;θ ,
∇3
θ
RbDR oP
1:nP , xQ
1:nQ (θ) = 2
nP
nP
X
i=1
ρˆ xP
i
nfˆ0 xP
i − yP
i
o
∇3
θf xP
i;θ
+2
nQ
nQ
X
j=1
h
∇2
θf xQ
j ; θ ⊗ ∇θf xQ
j ; θ + ∇2
θf xQ
j ; θ ⊗ ∇θf xQ
j ;θ
+
n
f xQ
j ; θ − fˆ0 xQ
j
o
∇3
θf xQ
j ;θ
i
.
By making use of the observation (D.5), it follows that
E
h
∇θRbDR OP
1:nP , XQ
1:nQ (θ∗)
i
= 2EX∼PX
h
{ρˆ(X) − ρ∗(X)}
nfˆ0(X) − f (X; θ∗)
o
∇θf (X; θ∗)
i
,
E
h
∇2
θ
RbDR OP
1:nP , XQ
1:nQ (θ∗)
i
= 2EX∼PX
h
{ρˆ(X) − ρ∗(X)}
nfˆ0(X) − f (X; θ∗)
o
∇2
θf (X; θ∗)
i
+ IQ (θ∗) ,
(D.6)
36

and while being conditioned on the event AP := TnP
i=1 YiP ≤ 1 that
∇3
θ
RbDR OP
1:nP , XQ
1:nQ (θ)
op
≤2
nP
nP
X
i=1
∥ρˆ∥∞ 1 + fˆ0 ∞
∇2
θf XP
i ; θ op
+2
nQ
nQ
X
i=1
3 ∇θf XQ
j ;θ
2
∇2
θf XQ
j ;θ
op
+ 1 + fˆ0 ∞
∇3
θf XQ
j ;θ
op
(a)
≤ 2 (1 + Cdr) (1 + Crf) b3 + 6b1b2 ≤ B3
(D.7)
for every θ ∈ Θ, where the step (a) comes from Assumption 4 and the part (ii) of Assumption 5.
With these preliminary results in our hand, we are now ready to prove Lemma B.7. Hereafter, we focus
on the case where Θ = Rd for simplicity of presentation. Given any δ ∈ (0, 1) and any fixed matrix A ∈ Rd×d,
we define the events
E1 (δ; A) :=
n
oP
1:nP , xQ
1:nQ ∈ OnP × XnQ :
A
n
∇θRbDR oP
1:nP , xQ
1:nQ (θ∗) − E
h
∇θRbDR OP
1:nP , XQ
1:nQ (θ∗)
io
2
(D.8)
≤ C(A)



s
VP(A) log d
δ nP
+
s
VQ(A) log d
δ nQ
+ B1 ∥A∥op · log d
δ
1
nP
+1
nQ






,
and
E2(δ) :=
n
oP
1:nP , xQ
1:nQ ∈ OnP × XnQ :
∇2
θ
RbDR OP
1:nP , XQ
1:nQ (θ∗) − E
h
∇2
θ
RbDR OP
1:nP , XQ
1:nQ (θ∗)
i
op
≤ B2



s
log d
δ nP
+
s
log d
δ nQ






,
(D.9)
so that we have P⊗nP ⊗ Q⊗nQ
X {E1 (δ; A)} ≥ 1 − 2δ and P⊗nP ⊗ Q⊗nQ
X {E2(δ)} ≥ 1 − 4δ for any (A, δ) ∈
Rd×d× 0, 1
4 due to Lemma D.1 and D.2. For simplicity, we employ the notation RbDR := RbDR O1P:nP , XQ
1:nQ :
Rd → R for O1P:nP , XQ
1:nQ ∼ P⊗nP ⊗ Q⊗nQ
X as well as g := ∇θRbDR (θ∗) − E
h
∇θRbDR (θ∗)
i
throughout this
subsection. Owing to Assumption 5, it turns out for every θ ∈ Rd that while being on the event AP ∩ E2(δ),
where AP = TnP
i=1 YiP ≤ 1 ,
RbDR(θ) − RbDR (θ∗)
(a)
≤ (θ − θ∗)⊤ ∇θRbDR (θ∗) + 1
2! (θ − θ∗)⊤ ∇2
θ
RbDR (θ∗) (θ − θ∗) + B3
3! ∥θ − θ∗∥3
2
(b)
≤ (θ − θ∗)⊤ E
h
∇θRbDR (θ∗)
i
+ (θ − θ∗)⊤ g + 1
2 (θ − θ∗)⊤ E
h
∇2
θ
RbDR (θ∗)
i
(θ − θ∗)
+ B2
2
s
log d
δ
√1nP
+ √1nQ
∥θ − θ∗∥2
2 + B3
6 ∥θ − θ∗∥3
2 (D.10)
(c=) 2EX∼PX
h
{ρˆ(X) − ρ∗(X)}
nfˆ0(X) − f (X; θ∗)
o
(θ − θ∗)⊤ ∇θf (X; θ∗)
i
+ (θ − θ∗)⊤ g
+ (θ − θ∗)⊤ EX∼PX
h
{ρˆ(X) − ρ∗(X)}
nfˆ0(X) − f (X; θ∗)
o
∇2
θf (X; θ∗)
i
(θ − θ∗)
37

+1
2 (θ − θ∗)⊤ IQ (θ∗) (θ − θ∗) + B2
2
s
log d
δ
√1nP
+ √1nQ
∥θ − θ∗∥2
2 + B3
6 ∥θ − θ∗∥3
2,
where the step (a) follows due to Taylor’s theorem together with the fact (D.7), the step (b) invokes Lemma
D.2, and the step (c) holds by the observation (D.6). Thus, by letting ∆(θ) := θ − θ∗ ∈ Rd, we obtain from
the inequality (D.10) that on the event AP ∩ E2(δ),
RbDR(θ) − RbDR (θ∗)
≤ 2EX∼PX
h
{ρˆ(X) − ρ∗(X)}
nfˆ0(X) − f (X; θ∗)
o
{∆(θ)}⊤ ∇θf (X; θ∗)
i
+ {∆(θ)}⊤ g
+ EX∼PX
h
{ρˆ(X) − ρ∗(X)}
nfˆ0(X) − f (X; θ∗)
o
{∆(θ)}⊤ ∇2
θf (X; θ∗) ∆(θ)
i
(D.11)
+1
2 {∆(θ)}⊤ IQ (θ∗) ∆(θ) + B2
2
s
log d
δ
√1nP
+ √1nQ
∥∆(θ)∥2
2 + B3
6 ∥∆(θ)∥3
2
= EX∼PX
h
{ρˆ(X) − ρ∗(X)}
nfˆ0(X) − f (X; θ∗)
oh
2 {∆(θ)}⊤ ∇θf (X; θ∗) + {∆(θ)}⊤ ∇2
θf (X; θ∗) ∆(θ)
ii
+1
2 {∆(θ) − z}⊤ IQ (θ∗) {∆(θ) − z} − 1
2 z⊤IQ (θ∗) z
+ B2
2
s
log d
δ
√1nP
+ √1nQ
∥∆(θ)∥2
2 + B3
6 ∥∆(θ)∥3
2,
where z := −I−1
Q (θ∗) g ∈ Rd. By employing a similar argument, we reveal for any θ ∈ Rd that while being
conditioned on the event AP ∩ E2(δ), we have
RbDR(θ) − RbDR (θ∗)
(d)
≥ (θ − θ∗)⊤ ∇θRbDR (θ∗) + 1
2! (θ − θ∗)⊤ ∇2
θ
RbDR (θ∗) (θ − θ∗) − B3
3! ∥θ − θ∗∥3
2
(e)
≥ 2EX∼PX
h
{ρˆ(X) − ρ∗(X)}
nfˆ0(X) − f (X; θ∗)
o
(θ − θ∗)⊤ ∇θf (X; θ∗)
i
+ (θ − θ∗)⊤ g
+ (θ − θ∗)⊤ EX∼PX
h
{ρˆ(X) − ρ∗(X)}
nfˆ0(X) − f (X; θ∗)
o
∇2
θf (X; θ∗)
i
(θ − θ∗) (D.12)
+1
2 (θ − θ∗)⊤ IQ (θ∗) (θ − θ∗) − B2
2
s
log d
δ
√1nP
+ √1nQ
∥θ − θ∗∥2
2 − B3
6 ∥θ − θ∗∥3
2
= EX∼PX
h
{ρˆ(X) − ρ∗(X)}
nfˆ0(X) − f (X; θ∗)
oh
2 {∆(θ)}⊤ ∇θf (X; θ∗) + {∆(θ)}⊤ ∇2
θf (X; θ∗) ∆(θ)
ii
+1
2 {∆(θ) − z}⊤ IQ (θ∗) {∆(θ) − z} − 1
2 z⊤IQ (θ∗) z
− B2
2
s
log d
δ
√1nP
+ √1nQ
∥∆(θ)∥2
2 − B3
6 ∥∆(θ)∥3
2,
where the step (d) invokes Taylor’s theorem as well as the observation (D.7), and the step (e) follows due to
Lemma D.2 and the fact (D.6).
Now, we leverage Lemma D.1 with A = I−1
Q (θ∗). While being conditioned on the event E1 δ; I−1
Q (θ∗) ,
38

we have
∥z∥2 = I−1
Q (θ∗) g 2
≤ C I−1
Q (θ∗)


s
VP I−1
Q (θ∗) log d
δ
nP
+
s
VQ I−1
Q (θ∗) log d
δ
nQ
+B1 I−1
Q (θ∗) op log d
δ
1
nP
+1
nQ
(f )
≤ C I−1
Q (θ∗)
"√2 (1 + Cdr) (1 + Crf)
s
log d
δ
·



s
Trace IP (θ∗) I−2
Q (θ∗)
nP
+
s
Trace I−1
Q (θ∗)
nQ



+ B1 I−1
Q (θ∗) op log d
δ
1
nP
+1
nQ
,
(D.13)
where the step (f) can be obtained by letting A = I−1
Q (θ∗) in the following facts: for any given fixed matrix
A ∈ Rd×d, it holds that
VP(A) := E(X,Y )∼P
h
A ΦP(X, Y ) − E(X,Y )∼P [ΦP(X, Y )] 2
2
i
= Trace ACov(X,Y )∼P [ΦP(X, Y )] A⊤
≤ Trace
n
AE(X,Y )∼P
h
ΦP(X, Y ) {ΦP(X, Y )}⊤i
A⊤o
= 4 · Trace AE(X,Y )∼P ρˆ2(X)
nfˆ0(X) − Y
o2
∇θf (X; θ∗) {∇θf (X; θ∗)}⊤ A⊤
(g)
≤ 2C2
dr (1 + Crf)2 Trace

  
  
A EX∼PX
h
2∇θf (X; θ∗) {∇θf (X; θ∗)}⊤i
| {z }
= IP(θ∗)
A⊤

  
  
= 2C2
dr (1 + Crf)2 Trace AIP (θ∗) A⊤ ,
(D.14)
and
VQ(A) := EX∼QX
h
∥A {ΦQ(X) − EX∼QX [ΦQ(X)]}∥2
2
i
= Trace ACovX∼QX [ΦQ(X)] A⊤
≤ Trace
n
AEX ∼QX
h
ΦQ(X) {ΦQ(X)}⊤i
A⊤o
= 4 · Trace AEX∼QX
n
f (X; θ∗) − fˆ0(X)
o2
∇θf (X; θ∗) {∇θf (X; θ∗)}⊤ A⊤
(h)
≤ 2 (1 + Crf)2 Trace

  
  
A EX∼QX
h
2∇θf (X; θ∗) {∇θf (X; θ∗)}⊤i
| {z }
= IQ(θ∗)
A⊤

  
  
= 2 (1 + Crf)2 Trace AIQ (θ∗) A⊤ ,
(D.15)
where the steps (g) and (h) follow by Assumption 4 on the pilot black-box ML estimates ρˆ : X → R+ and
fˆ0 : X → R. Now, we let K := max
n
C I−1
Q (θ∗) , C
n
I−1
2
Q (θ∗)
oo
∈ (0, +∞). By noting that ∆ (θ∗ + z) =
z = −I−1
Q (θ∗) g, it follows from the inequality (D.11) that on the event AP ∩ E1 δ; I−1
Q (θ∗) ∩ E2(δ),
RbDR (θ∗ + z) − RbDR (θ∗)
39

≤ EX∼PX
h
{ρˆ(X) − ρ∗(X)}
nfˆ0(X) − f (X; θ∗)
oh
2 {∆(θ)}⊤ ∇θf (X; θ∗) + {∆(θ)}⊤ ∇2
θf (X; θ∗) ∆(θ)
ii
−1
2 z⊤IQ (θ∗) z + B2
2
s
log d
δ
√1nP
+ √1nQ
∥z∥2
2 + B3
6 ∥z∥3
2
(i)
≤ EX∼PX
h
{ρˆ(X) − ρ∗(X)}
nfˆ0(X) − f (X; θ∗)
oh
2 {∆(θ)}⊤ ∇θf (X; θ∗) + {∆(θ)}⊤ ∇2
θf (X; θ∗) ∆(θ)
ii
−1
2 z⊤IQ (θ∗) z + 2B2 · K2 (1 + Cdr)2 (1 + Crf)2 log 3
2d
δ
√1nP
+ √1nQ
·



s
Trace IP (θ∗) I−2
Q (θ∗)
nP
+
s
Trace I−1
Q (θ∗)
nQ



2
(D.16)
+ B2
1B2 · K2 I−1
Q (θ∗) 2
op log 5
2d
δ
√1nP
+ √1nQ
1
nP
+1
nQ
2
+8
3 B3 · K3 (1 + Cdr)3 (1 + Crf)3 log 3
2d
δ



s
Trace IP (θ∗) I−2
Q (θ∗)
nP
+
s
Trace I−1
Q (θ∗)
nQ



3
+2
3 B3
1B3 · K3 I−1
Q (θ∗) 3
op log3 d
δ
1
nP
+1
nQ
3
,
where the step (i) utilizes the bound (D.13) together with the following simple inequality:
(x + y)n ≤ 2n−1 (xn + yn) , ∀ (x, y, n) ∈ R+ × R+ × N.
On the other hand, for every θ ∈ Br(δ) (θ∗), one can find by taking advantage of the lower bound (D.12)
that while being on the event AP ∩ E2(δ),
RbDR(θ) − RbDR (θ∗)
≥ EX∼PX
h
{ρˆ(X) − ρ∗(X)}
nfˆ0(X) − f (X; θ∗)
oh
2 {∆(θ)}⊤ ∇θf (X; θ∗) + {∆(θ)}⊤ ∇2
θf (X; θ∗) ∆(θ)
ii
+1
2 {∆(θ) − z}⊤ IQ (θ∗) {∆(θ) − z} − 1
2 z⊤IQ (θ∗) z
−9
2 B2 · K2 (1 + Cdr)2 (1 + Crf)2 log 3
2d
δ
√1nP
+ √1nQ
(D.17)
·


s
Trace IP (θ∗) I−2
Q (θ∗)
nP
+
s
Trace I−1
Q (θ∗)
nQ


2
−9
2 B3 · K3 (1 + Cdr)3 (1 + Crf)3 log 3
2d
δ


s
Trace IP (θ∗) I−2
Q (θ∗)
nP
+
s
Trace I−1
Q (θ∗)
nQ


3
.
40

Subtracting the bound (D.16) from (D.18) yields that on the event AP ∩ E1 δ; I−1
Q (θ∗) ∩ E2(δ),
RbDR(θ) − RbDR (θ∗ + z)
≥1
2 {∆(θ) − z}⊤ IQ (θ∗) {∆(θ) − z}
− 13
2 B2 · K2 (1 + Cdr)2 (1 + Crf)2 log 3
2d
δ
√1nP
+ √1nQ
·


s
Trace IP (θ∗) I−2
Q (θ∗)
nP
+
s
Trace I−1
Q (θ∗)
nQ


2
+ B2
1B2 · K2 I−1
Q (θ∗) 2
op log 5
2d
δ
√1nP
+ √1nQ
1
nP
+1
nQ
2
+ 43
6 B3 · K3 (1 + Cdr)3 (1 + Crf)3 log 3
2d
δ
·


s
Trace IP (θ∗) I−2
Q (θ∗)
nP
+
s
Trace I−1
Q (θ∗)
nQ


3
+2
3 B3
1B3 · K3 I−1
Q (θ∗) 3
op log3 d
δ
1
nP
+1
nQ
3
#
(D.18)
for every θ ∈ Br(δ) (θ∗). At this point, we consider the d-dimensional ellipsoid
Γ(δ) := θ ∈ Rd : 1
2 {∆(θ) − z}⊤ IQ (θ∗) {∆(θ) − z}
≤ 13
2 B2 · K2 (1 + Cdr)2 (1 + Crf)2 log 3
2d
δ
√1nP
+ √1nQ
·


s
Trace IP (θ∗) I−2
Q (θ∗)
nP
+
s
Trace I−1
Q (θ∗)
nQ


2
+ B2
1B2 · K2 I−1
Q (θ∗) 2
op log 5
2d
δ
√1nP
+ √1nQ
1
nP
+1
nQ
2
+ 43
6 B3 · K3 (1 + Cdr)3 (1 + Crf)3 log 3
2d
δ
·


s
Trace IP (θ∗) I−2
Q (θ∗)
nP
+
s
Trace I−1
Q (θ∗)
nQ


3
+2
3 B3
1B3 · K3 I−1
Q (θ∗) 3
op log3 d
δ
1
nP
+1
nQ
3
)
.
(D.19)
Then, using the inequality (D.18), it follows for every θ ∈ Br(δ) (θ∗) \ Γ(δ) that RbDR(θ) − RbDR (θ∗ + z) > 0
on the event AP ∩ E1 δ; I−1
Q (θ∗) ∩ E2(δ). Together with I−1
Q (θ∗) op = λmax I−1
Q (θ∗) = 1
λmin {I −1
Q (θ∗)} ,
41

we obtain for any θ ∈ Γ(δ) that
∥∆(θ) − z∥2
2
≤ 13B2 · K2 (1 + Cdr)2 (1 + Crf)2 I−1
Q (θ∗) op log 3
2d
δ
√1nP
+ √1nQ
·


s
Trace IP (θ∗) I−2
Q (θ∗)
nP
+
s
Trace I−1
Q (θ∗)
nQ


2
+ 2B2
1B2 · K2 I−1
Q (θ∗) 3
op log 5
2d
δ
√1nP
+ √1nQ
1
nP
+1
nQ
2
+ 43
3 B3 · K3 (1 + Cdr)3 (1 + Crf)3 I−1
Q (θ∗) op log 3
2d
δ
·


s
Trace IP (θ∗) I−2
Q (θ∗)
nP
+
s
Trace I−1
Q (θ∗)
nQ


3
+4
3 B3
1B3 · K3 I−1
Q (θ∗) 4
op log3 d
δ
1
nP
+1
nQ
3
.
(D.20)
Thus, the triangle inequality implies on the event E1 δ; I−1
Q (θ∗) that for any θ ∈ Γ(δ), one has
∥∆(θ)∥2
2 ≤ 2 ∥∆(θ) − z∥2
2 + 2 ∥z∥2
2
(j)
≤ 26B2 · K2 (1 + Cdr)2 (1 + Crf)2 I−1
Q (θ∗) op log 3
2d
δ
√1nP
+ √1nQ
·


s
Trace IP (θ∗) I−2
Q (θ∗)
nP
+
s
Trace I−1
Q (θ∗)
nQ


2
+ 4B2
1B2 · K2 I−1
Q (θ∗) 3
op log 5
2d
δ
√1nP
+ √1nQ
1
nP
+1
nQ
2
+ 86
3 B3 · K3 (1 + Cdr)3 (1 + Crf)3 I−1
Q (θ∗) op log 3
2d
δ
·


s
Trace IP (θ∗) I−2
Q (θ∗)
nP
+
s
Trace I−1
Q (θ∗)
nQ


3
+8
3 B3
1B3 · K3 I−1
Q (θ∗) 4
op log3 d
δ
1
nP
+1
nQ
3
+ 8K2 (1 + Cdr)2 (1 + Crf)2 log d
δ
·


s
Trace IP (θ∗) I−2
Q (θ∗)
nP
+
s
Trace I−1
Q (θ∗)
nQ


2
+ 4B2
1 · K2 I−1
Q (θ∗) 2
op log2 d
δ
1
nP
+1
nQ
2
,
(D.21)
where the step (j) utilize the consequence (D.13) from Lemma D.1 with A = I−1
Q (θ∗). To guarantee that
log d
δ


s
Trace IP (θ∗) I−2
Q (θ∗)
nP
+
s
Trace I−1
Q (θ∗)
nQ


2
42

is the leading term, we only need it to dominate the remaining terms. In particular, whenver min {nP, nQ} ≥
κ · N1 log d
δ , then one can conclude from the bound (D.21) that on the event E1 δ; I−1
Q (θ∗) ,
∥∆(θ)∥2
2 ≤ 9K2 (1 + Cdr)2 (1 + Crf)2 log d
δ


s
Trace IP (θ∗) I−2
Q (θ∗)
nP
+
s
Trace I−1
Q (θ∗)
nQ


2
= r2(δ)
(D.22)
for every θ ∈ Γ(δ). To sum up, we have established the following conclusions so far:
(FACT A) On the event AP ∩E1 δ; I−1
Q (θ∗) ∩E2(δ), we have RbDR(θ)−RbDR (θ∗ + z) > 0 for every θ ∈ Br(δ) (θ∗)\
Γ(δ).
(FACT B) On the event E1 δ; I−1
Q (θ∗) , we have Γ(δ) ⊆ Br(δ) (θ∗) if min {nP, nQ} ≥ κ · N1 log d
δ.
Lastly, it is time to put everything (FACT A and B) together to establish the part (i) of Lemma B.7.
Towards this end, let’s claim that being on the event AP ∩ E1 δ; I−1
Q (θ∗) ∩ E2(δ), RbDR : Rd → R attains a
local minimum in the ellipsoid Γ(δ) when min {nP, nQ} ≥ κ · N1 log d
δ . Due to its continuity together with
the compactness of the d-dimensional closed ball Br(δ) (θ∗) ⊆ Rd, RbDR : Br(δ) (θ∗) → R achieves a global
minimum, and so it becomes a local minimum of RbDR : Rd → R. Let θ ∈ argmin
n
RbDR(θ) : θ ∈ Br(δ) (θ∗)
o
.
Then if θ ∈ Br(δ) (θ∗) \ Γ(δ), (FACT A) implies
RbDR θ > RbDR (θ∗ + z)
(k)
≥
RbDR θ ,
which yields a contradiction, where the step (k) follows since θ∗+z ∈ Γ(δ) ⊆ Br(δ) (θ∗), which holds by (FACT
B). Hence, one can conclude that θ ∈ Γ(δ) as desired. Assumption 6 implies that the global minimum of the
empirical DR risk RbDR : Rd → R belongs to the ellipsoid Γ(δ) ⊆ Rd on the event AP ∩E1 δ; I−1
Q (θ∗) ∩ E2(δ),
i.e., on the event AP ∩ E1 δ; I−1
Q (θ∗) ∩ E2(δ),
θˆDR ∈ Γ(δ) ⊆ Br(δ) (θ∗) , (D.23)
provided that min {nP, nQ} ≥ κ · N1 log d
δ.
In the sequel, we shall work with the high-probability event AP ∩E1 δ; I−1
Q (θ∗) ∩E2(δ) in order to further
establish the part (ii) of Lemma B.7. Because θˆDR ∈ Γ(δ) while being on the event AP∩E1 δ; I−1
Q (θ∗) ∩E2(δ)
43

provided that min {nP, nQ} ≥ κ · N1 log d
δ , it follows that
I
1 2
Q (θ∗)
n
∆ θˆDR − z
o2
2
=
n
∆ θˆDR − z
o⊤
IQ (θ∗)
n
∆ θˆDR − z
o
≤ 13B2 · K2 (1 + Cdr)2 (1 + Crf)2 log 3
2d
δ
√1nP
+ √1nQ
·


s
Trace IP (θ∗) I−2
Q (θ∗)
nP
+
s
Trace I−1
Q (θ∗)
nQ


2
+ 2B2
1B2 · K2 I−1
Q (θ∗) 2
op log 5
2d
δ
√1nP
+ √1nQ
1
nP
+1
nQ
2
+ 43
3 B3 · K3 (1 + Cdr)3 (1 + Crf)3 log 3
2d
δ
·


s
Trace IP (θ∗) I−2
Q (θ∗)
nP
+
s
Trace I−1
Q (θ∗)
nQ


3
+4
3 B3
1B3 · K3 I−1
Q (θ∗) 3
op log3 d
δ
1
nP
+1
nQ
3
(D.24)
On the other hand, one can readily apply Lemma D.1 by letting A = I− 1
2
Q (θ∗) to obtain
I
1 2
Q (θ∗) z
2
2
= I−1
2
Q (θ∗) g
2
2
≤C
n
I−1
2
Q (θ∗)
o2

  
v u u t
VP
n
I−1
2
Q (θ∗)
o
log d
δ
nP
+
v u u t
VQ
n
I−1
2
Q (θ∗)
o
log d
δ
nQ
+B1 I− 1
2
Q (θ∗)
op
log d
δ
1
nP
+1
nQ
2
(l)
≤ K2


√2 (1 + Cdr) (1 + Crf)
s
log d
δ



s
Trace IP (θ∗) I−1
Q (θ∗)
nP
+
s
d
nQ



(D.25)
+ B1 I− 1
2
Q (θ∗)
op
log d
δ
1
nP
+1
nQ
2
≤ 4K2 (1 + Cdr)2 (1 + Crf)2 log d
δ



s
Trace IP (θ∗) I−1
Q (θ∗)
nP
+
s
d
nQ



2
+ 2B2
1 · K2 I−1
Q (θ∗) op log2 d
δ
1
nP
+1
nQ
2
on the event E1 δ; I− 1
2
Q (θ∗) , where the step (l) makes use of (D.14) and (D.15) with A = I− 1
2
Q (θ∗). Thus,
we obtain by taking two pieces (D.24) and (D.25) collectively that while being on the event
Λ(δ) := AP ∩ E1 δ; I−1
Q (θ∗) ∩ E2(δ) ∩ E1 δ; I− 1
2
Q (θ∗) ,
44

one has
I
1 2
Q (θ∗) θˆDR − θ∗ 2
2
=I
1 2
Q (θ∗) ∆ θˆDR
2
2
(m)
≤2 I
1 2
Q (θ∗)
n
∆ θˆDR − z
o2
2
+2 I
1 2
Q (θ∗) z
2
2
≤ 26B2 · K2 (1 + Cdr)2 (1 + Crf)2 log 3
2d
δ
√1nP
+ √1nQ


s
Trace IP (θ∗) I−2
Q (θ∗)
nP
+
s
Trace I−1
Q (θ∗)
nQ


2
+ 4B2
1B2 · K2 I−1
Q (θ∗) 2
op log 5
2d
δ
√1nP
+ √1nQ
1
nP
+1
nQ
2
+ 86
3 B3 · K3 (1 + Cdr)3 (1 + Crf)3 log 3
2d
δ


s
Trace IP (θ∗) I−2
Q (θ∗)
nP
+
s
Trace I−1
Q (θ∗)
nQ


3
+8
3 B3
1B3 · K3 I−1
Q (θ∗) 3
op log3 d
δ
1
nP
+1
nQ
3
+ 8K2 (1 + Cdr)2 (1 + Crf)2 log d
δ



s
Trace IP (θ∗) I−1
Q (θ∗)
nP
+
s
d
nQ



2
+ 4B2
1 · K2 I−1
Q (θ∗) op log2 d
δ
1
nP
+1
nQ
2
(D.26)
if min {nP, nQ} ≥ κ · N1 log d
δ , where the step (m) follows due to the triangle inequality. To guarantee that
log d
δ



s
Trace IP (θ∗) I−1
Q (θ∗)
nP
+
s
d
nQ



2
becomes the leading term, it suffices to make it dominate the remaining terms. In particular, provided that
min {nP, nQ} ≥ κ · max {N1, N2} log d
δ , then it follows directly from the inequality (D.26) that while being
on the event Λ(δ), we have
I
1 2
Q (θ∗) θˆDR − θ∗ 2
2
≤ 9K2 (1 + Cdr)2 (1 + Crf)2 log d
δ



s
Trace IP (θ∗) I−1
Q (θ∗)
nP
+
s
d
nQ



2
.
(D.27)
Hence, on the event Λ(δ), the desired results (i) and (ii) both hold if min {nP, nQ} ≥ κ · max {N1, N2} log d
δ.
45

This completes the proof of Lemma B.7 since
P⊗nP ⊗ Q⊗nQ
X {Λ(δ)}
= P⊗nP ⊗ Q⊗nQ
X
n
E1 δ; I−1
Q (θ∗) ∩ E2(δ) ∩ E1 δ; I− 1
2
Q (θ∗)
o
(n)
≥ 1 − P⊗nP ⊗ Q⊗nQ
X OnP × XnQ \ E1 δ; I−1
Q (θ∗)
− P⊗nP ⊗ Q⊗nQ
X OnP × XnQ \ E2(δ)
− P⊗nP ⊗ Q⊗nQ
X
n
OnP × XnQ \ E1 δ; I− 1
2
Q (θ∗)
o
(o)
≥ 1 − 8δ,
where the step (n) arises from the union bound, and the step (o) holds true due to Lemma D.1 and D.2.
D.1.1 Proof of Lemma D.1
For simplicity, let g := ∇θRbDR O1P:nP , XQ
1:nQ (θ∗)−E
h
∇θRbDR O1P:nP , XQ
1:nQ (θ∗)
i
under O1P:nP , XQ
1:nQ ∼
P⊗nP ⊗ QnQ
X . Then, we obtain from the equation (B.42) that
g = Pb − P [ΦP(X, Y )] + Qb X − QX [ΦQ(X)] P⊗nP ⊗ QnQ
X -almost surely, (D.28)
where Pb ∈ ∆ (X × R) and Qb X ∈ ∆(X) denote the empirical distributions for the nP labeled source sam
ples O1P:nP and nQ unlabeled target samples XQ
1:nQ , i.e., bP := 1
nP
PnP
i=1 δ(XP
i ,Y P
i ) and Qb X := 1
nQ
PnQ
j=1 δXQ
j
,
respectively, and the functions ΦP : X × R → Rd and ΦQ : X → Rd are defined as (D.2).
Now, we fix any matrix A ∈ Rd×d. One can readily find that
∥AΦP(X, Y )∥2 = 2ρˆ(X) Y − fˆ0(X) ∥A∇θf (X; θ∗)∥2 ≤ 2Cdr (1 + Crf) b1 ∥A∥op P-almost surely,
which immediately yields
BP(α) := inf
(
t ∈ (0, +∞) : E(X,Y )∼P
"
exp
( A ΦP(X, Y ) − E(X,Y )∼P [ΦP(X, Y )] 2
t
!α)#
≤2
)
≤ inf
(
t ∈ (0, +∞) : E(X,Y )∼P
"
exp
( 4Cdr (1 + Crf) b1 ∥A∥op
t
α
)#
≤2
)
(D.29)
≤ B1 ∥A∥op (log 2)− 1
α
for any α ∈ [1, +∞). By virtue of Lemma A.3, there exists an absolute constant CP(A) ∈ (0, +∞) such that
for any δ ∈ (0, 1], it holds by utilizing the observation (D.29) that
Pb − P [AΦP(X, Y )]
2
≤ CP(A)


s
VP(A) log 2d
δ nP
+ B1 ∥A∥op (log 2)− 1
α
· log 1
α



B1 ∥A∥op (log 2)− 1
α
pVP(A)



· log 2d
δ nP


(D.30)
46

with probability greater than 1 − δ
2 under O1:nP ∼ P⊗nP , for every α ∈ [1, +∞). By taking α → +∞ in the
inequality (D.30), one can conclude that
P⊗nP
n
Pb − P [AΦP(X, Y )]
2
≤ CP(A)



s
VP(A) log 2d
δ nP
+ B1 ∥A∥op · log 2d
δ nP







≥1− δ
2,
(D.31)
where VP(A) := E(X,Y )∼P
h
A ΦP(X, Y ) − E(X,Y )∼P [ΦP(X, Y )] 2
2
i
.
On the other hand, it can be observed that
∥AΦQ(X)∥2 = 2 f (X; θ∗) − fˆ0(X) ∥A∇θf (X; θ∗)∥2 ≤ 2 (1 + Crf) b1 ∥A∥op ,
which directly implies
BQ(α) := inf t ∈ (0, +∞) : EX∼QX exp ∥A {ΦQ(X) − EX∼QX [ΦQ(X)]}∥2
t
α
≤2
≤ inf
(
t ∈ (0, +∞) : E(X,Y )∼P
"
exp
( 4 (1 + Crf) b1 ∥A∥op
t
α
)#
≤2
)
(D.32)
= 4 (1 + Crf) b1 ∥A∥op · (log 2)− 1
α
≤ B1 ∥A∥op (log 2)− 1
α
for all α ∈ [1, +∞). Applying Lemma A.3, one can see that there exists a universal constant CQ(A) ∈ (0, +∞)
such that for any δ ∈ (0, 1], we have from the fact (D.32) that
Qb X − QX [AΦQ(X)]
2
≤ CQ(A)


s
VQ(A) log 2d
δ nQ
+ B1 ∥A∥op (log 2)− 1
α
· log 1
α



B1 ∥A∥op (log 2)− 1
α
pVP(A)



· log 2d
δ nQ


(D.33)
with probability at least 1 − δ
2 under X1:nQ ∼ Q⊗nQ
X , for every α ∈ [1, +∞). Taking α → +∞ in the bound
(D.33), it follows that
Q⊗nQ
X
n
Qb X − QX [AΦQ(X)]
2
≤ CQ(A)



s
VQ(A) log 2d
δ nQ
+ B1 ∥A∥op · log 2d
δ nQ







≥1− δ
2,
(D.34)
where VQ(A) := EX∼QX
h
∥A {ΦQ(X) − EX∼QX [ΦQ(X)]}∥2
2
i
.
Lastly, it is time to put all pieces together. Making use of the union bound together with two conclusions
47

(D.31) and (D.34) and setting C(A) := max {CP(A), CQ(A)} ∈ (0, +∞), one has
A ∇θRbDR OP
1:nP , XQ
1:nQ (θ∗) − E OP1:nP ,XQ
1:nQ ∼P⊗nP ⊗QnQ
X
h
∇θRbDR OP
1:nP , XQ
1:nQ (θ∗)
i
2
a.=s. Pb − P [AΦP(X, Y )] + Qb X − QX [AΦQ(X)]
2
(a)
≤
Pb − P [AΦP(X, Y )]
2
+
Qb X − QX [AΦQ(X)]
2
≤ C(A)



s
VP(A) log 2d
δ nP
+
s
VQ(A) log 2d
δ nQ
+ B1 ∥A∥op · log 2d
δ
1
nP
+1
nQ



with probability at least 1 − δ under O1P:nP , XQ
1:nQ ∼ P⊗nP ⊗ QnQ
X , where the step (a) follows by the triangle
inequality, as desired.
D.1.2 Proof of Lemma D.2
For brevity, we let H := ∇2
θ
RbDR O1P:nP , XQ
1:nQ (θ∗) − E
h
∇2
θ
RbDR O1P:nP , XQ
1:nQ (θ∗)
i
for O1P:nP , XQ
1:nQ ∼
P⊗nP ⊗ QnQ
X . Then, one may express H by using the fact (B.42) that
H= 1
nP
nP
X
i=1
UP
i+ 1
nQ
nQ
X
j=1
VQ
j , (D.35)
where
UP
i := 2ρˆ XP
i
nfˆ0 XP
i −YP
i
o
∇2
θf XP
i ; θ∗ − 2E(X,Y )∼P
h
ρˆ(X )
nfˆ0(X) − Y
o
∇2
θf (X; θ∗)
i
,
VQ
j := 2 ∇θf XQ
j ; θ∗ n
∇θf XQ
j ; θ∗ o⊤
+
n
f XQ
j ; θ∗ − fˆ0 XQ
j
o
∇2
θf XQ
j ; θ∗ (D.36)
− 2EX∼QX
h
∇θf (X; θ∗) {∇θf (X; θ∗)}⊤ +
n
f (X; θ∗) − fˆ0(X)
o
∇2
θf (X; θ∗)
i
,
for each (i, j) ∈ [nP] × [nQ]. At this moment, one can readily realize the following facts of the d × d random
matrices UiP : i ∈ [nP] :
• The operator norm of UiP can be bounded as
UP
i op ≤ 2 ρˆ XP
i
nfˆ0 XP
i −YP
i
o
∇2
θf XP
i ; θ∗
op
+ 2E(X,Y )∼P ρˆ(X)
nfˆ0(X) − Y
o
∇2
θf (X; θ∗)
op
(a)
≤ 4Cdr (1 + Crf) ∇2
θf XP
i ; θ∗
op
(b)
≤ 4Cdr (1 + Crf) b2
(D.37)
for every i ∈ [nP], where the step (a) follows P-almost surely by Assumptions 3 and 4, and the step (b)
comes from Assumption 5.
• Using the upper bound (D.37), one can obtain UiP
2 ⪯ σ2
PId for all i ∈ [nP] P-almost surely, where
σ2
P := 16C2
dr (1 + Crf)2 b2
2.
48

We can combine the above properties on the d × d random matrices UiP : i ∈ [nP] together with the matrix
Hoeffding inequality (Theorem 1.3 in [74]) to reach
P⊗nP





1
nP
nP
X
i=1
UP
i
op
>t




 ≤ 2d exp − nPt2
8σ2
P
= 2d exp
(
− nPt2
128C 2
dr (1 + Crf)2 b22
)
(D.38)
for any t ∈ R+. Thus, it follows for any δ ∈ (0, 1] that
1
nP
nP
X
i=1
UP
i
op
≤ 8√2 · Cdr (1 + Crf) b2
s
log 2d
δ nP
(D.39)
with probability at least 1 − δ under the probability measure P⊗nP .
Likewise, one can make the following observations on the d × d random matrices
n
VQ
j : j ∈ [nQ]
o
:
• The operator norm of VQ
j can be bounded as
VQ
j op
≤ 2 ∇θf XQ
j ; θ∗ n
∇θf XQ
j ; θ∗ o⊤
op
+2
n
f XQ
j ; θ∗ − fˆ0 XQ
j
o
∇2
θf XQ
j ; θ∗
op
+ 2EX∼QX ∇θf (X; θ∗) {∇θf (X; θ∗)}⊤
op
+ 2EX∼QX
n
f (X; θ∗) − fˆ0(X)
o
∇2
θf (X; θ∗)
op
= 2 ∇θf XQ
j ; θ∗ 2
2
+ 2 f XQ
j ; θ∗ − fˆ0 XQ
j ∇2
θf XQ
j ; θ∗
op
+ 2EX∼QX
h
∥∇θf (X; θ∗)∥2
2
i
+ 2EX∼QX
h
f (X; θ∗) − fˆ0(X) ∇2
θf (X; θ∗) op
i
(c)
≤ 4 b2
1 + (1 + Crf) b2
(D.40)
for every j ∈ [nQ], where the step (c) holds due to Assumptions 3 and 4.
• Using the upper bound (D.40), one can obtain VQ
j
2
⪯ σ2
QId for every j ∈ [nQ], where
σ2
Q := 16 b2
1 + (1 + Crf) b2
2.
Making use of the above findings regarding the d×d random matrices
n
VQ
j : j ∈ [nQ]
o
, the matrix Hoeffding
inequality then reveals that
Q⊗nQ
X





1
nQ
nQ
X
j=1
VQ
j
op
>t




 ≤ 2d exp − nQt2
8σ2
Q
!
= 2d exp
(
− nQt2
128 {b21 + (1 + Crf) b2}2
)
(D.41)
for every t ∈ R+. The inequality (D.41) tells us for any δ ∈ (0, 1] that
1
nQ
nQ
X
j=1
VQ
j
op
≤ 8√2 b2
1 + (1 + Crf) b2
s
log 2d
δ nQ
(D.42)
49

with probability at least 1 − δ under the probability measure Q⊗nQ
X . By combining two inequalities (D.39)
and (D.42) together with the union bound and replacing δ by δ
2 completes the proof of Lemma D.2.
50

---

## Processing Information

- **Processing Library:** Zotero PDFWorker
- **Processing Date:** 2026-02-10T18:18:44.516Z
- **Text Length:** 103115 characters
- **Success:** Text extraction completed
- **PDF Library Used:** Zotero PDFWorker
- **Pages Processed:** 50 of 50
