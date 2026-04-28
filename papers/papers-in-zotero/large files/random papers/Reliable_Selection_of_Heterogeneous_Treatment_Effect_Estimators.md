# PDF Document: Guo and Gao - 2025 - Reliable Selection of Heterogeneous Treatment Effect Estimators.pdf

**File Path:** Guo and Gao - 2025 - Reliable Selection of Heterogeneous Treatment Effect Estimators.pdf

**Processed Date:** 2026-02-10T18:15:52.895Z

**File Size:** 1305.59 KB

**Total Pages:** 22

**Extracted Pages:** 22

**PDF Library:** Zotero PDFWorker

**Attachment Item ID:** 3374

**Title:** Reliable Selection of Heterogeneous Treatment Effect Estimators

**Collection:** Large Files > Random Papers

---

## Extracted Text Content

Reliable Selection of Heterogeneous Treatment Effect Estimators
Jiayi Guo1, Zijun Gao2 1Peking University 2Marshall School of Business, University of Southern California
November 2025
Abstract
We study the problem of selecting the best heterogeneous treatment effect (HTE) estimator from a collection of candidates in settings where the treatment effect is fundamentally unobserved. We cast estimator selection as a multiple testing problem and introduce a ground-truth-free procedure based on a cross-fitted, exponentially weighted test statistic. A key component of our method is a two-way sample splitting scheme that decouples nuisance estimation from weight learning and ensures the stabili-
ty required for valid inference. Leveraging a stability-based central limit theorem, we establish asymptotic familywise error rate control under mild regularity conditions. Empirically, our procedure provides reliable error control while substantially reducing false selections compared with commonly used methods across ACIC 2016, IHDP, and Twins benchmarks, demonstrating that our method is feasible and powerful even without ground-truth treatment effects.
1 Introduction
The estimation of heterogeneous treatment effects (HTEs) has become a central topic across statistics, econometrics, and machine learning, with applications ranging from personalized medicine to policy evaluation [1, 2, 3]. A growing body of work has proposed flexible estimators to capture individual-level treatment heterogeneity, including tree-based methods [2], representation-learning approaches [4, 5], and meta-learners [6, 7]. Despite this abundance of methods, determining which estimator per-
forms best for a given application remains an open and underexplored problem [8, 9]. A reliable selection mechanism is crucial for practitioners [10], as choosing suboptimal estimators can directly affect downstream decision-making [11]. Evaluating or comparing HTE estimators is inherently difficult because the ground truth is unobservable: for each individual, only one potential outcome is realized [12], while HTEs are defined as the difference between two. Due to the fundamental unobservability -
of the treatment effect, comparing two HTE estimators is already challenging, and the difficulty is further exacerbated when a collection of estimators are being compared simultaneously. To our knowledge, most papers that compare multiple HTE estimators rely on ground-truth or simulated values and use them to compute metrics such as the Precision in Estimation of Heterogeneous Effect (PEHE) and the ATE [13, 14]. However, these evaluation metrics are subject to fundamental limitations: ground-truth-
 are unavailable in real-world observational studies, and simulated values depend critically on the chosen data-generating process and offer no formal statistical guarantees. In this paper, we develop a method for accurately selecting the best heterogeneous treatment effect estimator that operates without ground-truth information and provides provable error control. Explicitly, we formalize the task of selecting the best estimator among multiple candidates as an inferential problem on the argmin o-
f unknown risks. We then embed the pairwise comparison method of Gao [15] in the multiple testing framework, yielding a ground-truth-free comparison procedure. To increase the accuracy of the selected winner, we construct an adaptive exponentially weighted statistic that aggregates relative errors across candidates motivated by [16, 17], which produces a test statistic that assigns larger weights to more decisive relative errors. In addition, we design a two-way sample-splitting scheme that separa-
tes the nuisance estimation in relative error construction, weight learning in argmin inference, and the final prediction accuracy evaluation. By applying a stability-based argument to the proposed two-way splitting, we show that our method is asymptotically valid. The main contributions of this work are summarized as follows:
• We formally formulate and theoretically justify the testing problem of comparing multiple HTE estimators.
• We develop a ground-truth-free testing procedure that, through a tailored two-way sample-splitting design, powerfully identifies the best-performing estimator while asymptotically controlling the probability of failing to select the true winner.
• We conduct extensive experiments on benchmark datasets to demonstrate the effectiveness of the proposed method against commonly-used baselines.
1
arXiv:2511.18464v1 [stat.ML] 23 Nov 2025

2 Preliminaries
2.1 Causal Backgrounds
We begin by introducing the notations and framework for our study. For each individual i, let Ti ∈ {0, 1} denote the binary treatment indicator, where Ti = 1 represents receiving the treatment and Ti = 0 denotes control. Let Xi ∈ Rd be the vector of pre-treatment covariates. Under the potential outcomes framework [18, 19], we denote by Yi(1) and Yi(0) the potential outcomes corresponding to Ti = 1 and Ti = 0, respectively. We observe the outcome
Yi = TiYi(1) + (1 − Ti)Yi(0).
The individual treatment effect (ITE) is defined as Yi(1)−Yi(0), representing the treatment effect for individual i. Because only one potential outcome is observed for each unit, ITEs are not identifiable without additional assumptions [3]. A common surrogate is the conditional average treatment effect (CATE), defined as
τ (x) = E[Yi(1) − Yi(0) | Xi = x],
which characterizes how the treatment effect varies across individuals with different covariate profiles.
Assumption 1 ([20]). (i) (Yi(0), Yi(1)) ⊥⊥ Ti | Xi; (ii) 0 < e(x) ≜ P(Ti = 1 | Xi = x) < 1 for all x ∈ X , where e(x) denotes the propensity score.
Under Assumption 1, the CATE is identified as τ (x) = μ1(x) − μ0(x), where μt(x) = E[Yi | Ti = t, Xi = x] for t ∈ {0, 1}. As mentioned in the introduction, a rich literature has proposed various estimators of τ (x), such as causal forests [2] and representation learning approaches [4].
2.2 Evaluation Metrics: Relative Error
We next focus on evaluating a collection of heterogeneous treatment effect estimators. For any two estimators τˆ1 and τˆ2, their difference in performance can be quantified by
δ(τˆ1, τˆ2) ≜ E[(τˆ1(X) − τ (X))2] − E[(τˆ2(X) − τ (X))2]
= E τˆ2
1 (X) − τˆ2
2 (X) − 2(τˆ1(X) − τˆ2(X)) τ (X) .
Following [15], we refer to δ(τˆ1, τˆ2) as the relative error. While estimating an estimator’s absolute error φ(τˆ) = E[(τˆ(X)−τ (X))2] is common, [15] show that relative error enjoys stronger theoretical justification and improved empirical stability. Intuitively, relative error depends only on the first-order term of the unobserved τ (X), thereby reducing the influence of its estimation error. Given observed data {Zi = (Xi, Yi, Wi)}n
i=1, we estimate the relative error through a one-step correction estimator:
δˆ(τˆ1, τˆ2) ≜ 1
n
n
X
i=1
tˆ(Zi; τˆ1, τˆ2) = 1
n
n
X
i=1
τˆ2
1 (Xi) − τˆ2
2 (Xi) − 2 τˆ1(Xi) − τˆ2(Xi) · (1)
Wi(Yi − μ ̃1(Xi))
e ̃(Xi) + μ ̃1(Xi) − (1 − Wi)(Yi − μ ̃0(Xi))
1 − e ̃(Xi) − μ ̃0(Xi) ,
where μ ̃1(X), μ ̃0(X) denote estimated outcome regressions and e ̃(X) denotes the estimated propensity score. To ensure robustness and avoid overfitting, we employ a K-fold cross-fitting scheme: the sample is partitioned into folds {D1, . . . , DK }; nuisance estimators are trained on D−k when computing relative error on Dk. The final δˆ(τˆ1, τˆ2) is obtained by averaging across folds:
δˆ(τˆ1, τˆ2) = 1
K
K
X
k=1
1 |Dk |
X
Zi ∈Dk
tˆ(Zi; τˆ1, τˆ2; ηˆD−k ).
Throughout this work, we choose K = 2 for convenience, which is parallel to K > 2. [15] establishes the asymptotic normality of the estimated relative error δˆ(τˆ1, τˆ2).
δˆ(τˆ1, τˆ2) − δ(τˆ1, τˆ2)
q
Vˆ δ(τˆ1, τˆ2))/n
−d→ N (0, 1) (2)
where Vˆ (δ(τˆ1, τˆ2)) is the empirical variance of δˆ(τ1, τˆ2), as long as the following assumptions are satisfied.
2

Assumption 2 (Bounded outcomes and overlap). Y is bounded, and there exists η > 0 such that
η < e(X) < 1 − η.
Assumption 3 (Consistency of nuisance estimators). The nuisance function estimators obtained from the test data satisfy
∥μ ̃1(X) − μ1(X)∥2, ∥μ ̃0(X) − μ0(X)∥2, ∥e ̃(X) − e(X)∥2 = op(1),
and
E (μ ̃1(X) − μ1(X))(e ̃(X) − e(X)) , E (μ ̃0(X) − μ0(X))(e ̃(X) − e(X)) = op(n−1/2).
Assumption 4 (Non-degenerate relative error). The true relative error is nonzero:
E (τˆ1(X) − τˆ2(X))2 ̸= 0.
For our theoretical analysis, we additionally impose a mild stability condition on the nuisance estimators under sample splitting.
Assumption 5 (Stability of nuisance estimators). The prediction performance of the nuisance estimators (especially the conditional outcomes) is stable.
∥μˆa(X; Str) − μˆa(X; S(r)
tr )∥ = O(n−1), as n → ∞
∥μˆa(X; Str) − μˆa(X; S(r)
tr ) − μˆa(X; S(t)
tr ) + μˆa(X; S(t,r)
tr )∥ = o(n−1), as n → ∞
where S(r)
tr represents resampling a single point r in the training set.
The central idea of our work is built on this relative error formulation, using it as a statistically grounded metric to identify the best-performing estimator among a collection of candidates.
2.3 Problem Formalization
Building on the previous discussion of evaluation metrics, we now formalize the problem of comparing multiple CATE estimators. Suppose we have a collection of K candidate estimators, each trained on an independent training sample:
{τˆ1(x), τˆ2(x), . . . , τˆK (x)}.
Given a test dataset {(Xi, Ti, Yi)}n
i=1 drawn i.i.d. from an underlying super-population P, our goal is to identify the estimator that achieves the highest accuracy on the test sample. Formally, let S = {τˆ(1)} denote the set containing the true best-performing estimator τˆ(1). We aim to construct
a data-driven selection set Sˆ such that
nli→m∞ P τˆ(1) ∈ Sˆ = α, (3)
where α is the prescribed significance level. Under Assumption 4, the best-performing estimator is unique, allowing us to reduce the selection problem to a series of marginal hypothesis tests. Specifically, for each estimator r = 1, . . . , K, we test whether it dominates all others in terms of relative error:
Hr
0 : δ(τˆr, τˆs) < 0, ∀s ̸= r, (4)
Hr
1 : ∃ s ̸= r such that δ(τˆr, τˆs) > 0. (5)
Controlling the familywise error rate (FWER) across these K hypotheses ensures that condition (3) holds asymptotically. For completeness, a summary of the notations used in this section is provided in Appendix A.
3

2.4 Related Work
Evaluation of HTE Estimators. A wide range of evaluation frameworks have been proposed for heterogeneous and conditional treatment effect estimators, reflecting the fact that individual-level causal effects are never directly observable. Early work formalized proxy criteria such as PEHE [21], now standard in semi-synthetic benchmarks, though subsequent analyses [13] noted that PEHE captures only pointwise prediction accuracy and may incentivize unrealistic overfitting. To address settings where in-
dividual treatment effects cannot be recovered, Shalit et al. [4] introduced policy risk, which evaluates how well a model’s treatment recommendations perform relative to an oracle and has been used extensively in applications such as the Jobs dataset. Gao [15] introduced a relative-error measure for pairwise comparison of two estimators, yielding robust conclusions. Guo et al. [9] further extend this robustness to a broader setting. Finally, complementing empirical metrics, theoretical analyses [-
7, 22] characterize the fundamental limits of HTE estimation and identify conditions under which learners can achieve quasi-oracle performance.
Argmin Inference. Research on argmin inference dates back to early work on identifying minimal elements in multivariate systems [23], with later refinements relying on restrictive assumptions such as known marginal distributions or independence [24]. Modern approaches have since relaxed these conditions, including general confidence-set constructions based on pairwise comparisons [25], bootstrap-based procedures such as [26], and recent sample-splitting strategies tailored to argmin selection [16,-
 27]. Conceptually, argmin inference is tightly connected to ranking inference, since identifying the minimizer can be framed as determining whether an index achieves rank one. The ranking-inference literature provides complementary tools for constructing confidence sets for discrete ranks [28, 29, 30], though sometimes they do not transfer directly to the argmin setting.
3 Testing Procedures
Before introducing our proposed method, we first describe a simple and intuitive naive approach. We begin by introducing some notation. For a fixed m ∈ {1, . . . , K}, define the index set Im := {1, . . . , K} \ {m} and the vector of pairwise relative errors
δˆm ≜ δˆ(τˆm, τˆs) : s ∈ Im
⊤ ∈ RK−1; δm ≜ δ(τˆm, τˆs) : s ∈ Im
⊤.
Let Σm ∈ R(K−1)×(K−1) denote the covariance matrix of δˆm and Σˆ m its empirical estimator.
3.1 A Naive Approach
Testing rule. Leveraging the asymptotic normality in Eq. (2), we can naturally construct a simple max–statistic test to determine whether a given estimator τˆm is the true winner among all candidates. Intuitively, if τˆm is truly the winner, then all components of δm are nonpositive, and the test statistics
Sm,s ≜
δˆ(τˆm, τˆs)
σˆm,s
, s ∈ Im, and Smax
m ≜ max
s∈Im
Sm,s,
where σˆ2m,s ≜ (Σˆ m)ss, should rarely exceed its null quantile. Hence, we test whether Smax
m is large enough to suggest that some δ(τˆm, τˆs) > 0. By Eq. (2), we have
(Sm,1, . . . , Sm,K−1)⊤ ∼ ̇ N (δm, Σm).
Because Σm is generally non-diagonal, the null distribution of Smax
m has no closed form. We therefore obtain
the critical value c(m)
1−α via a parametric bootstrap based on the estimated covariance Σˆ m. We reject H(m)
0 if
S max
m > c(m)
1−α. The complete procedure is summarized in Algorithm 2 in the appendix.
FWER control. The familywise error rate (FWER) is automatically controlled at level α, since each null H(m)
0
is tested only once and the true null corresponds to the unique true winner τˆ(1). Formally:
Theorem 3.1 (FWER control of the naive max–statistic test). Under Assumptions 2–4, the selection rule defined above satisfies
nli→m∞ P τˆ(1) ∈ Sˆnaive ≥ 1 − α.
4

Figure 1: Difference in false selections between the Naive Method and our proposed method (mean ± 95% bootstrap confidence interval) under a linear toy model with three competitive and four clearly inferior estimators. See Appendix G.1 for details.
The proof of Theorem 3.1 is provided in Appendix C. Remark. This test serves as a simple yet valid baseline for identifying the true winner. It naturally controls the familywise error rate since each estimator is tested marginally as a potential winner. However, the method can be conservative and exhibits limited power in finite samples, as it compresses data information into the mean and covariance of δˆm. This conservativeness becomes particularly evident when the comparison system includes irre-
levant estimators that are far from the true winner, causing the critical value to inflate with the number of candidates K. We next develop a more powerful approach that mitigates this limitation.
3.2 Proposed Method
Before formally introducing our proposed procedure, we first illustrate the limitations of the naive method in a toy experiment. In this case, three estimators perform similarly, with one being the winner, while the remaining four are clearly suboptimal. As demonstrated in Figure 1, when the number of estimators increases, the gap between the naive method and our proposed method becomes substantially deeper. This phenomenon arises because the naive method treats all estimators symmetrically, so ad-
ding irrelevant ones inflates the critical threshold c(m)
1−α, no matter how little chance the newly joined one has of being the winner. The failure of the naive method suggests that any effective comparison procedure must adapt to the relative competitiveness of the estimators rather than penalizing them uniformly. Our proposal builds exactly on this principle: we construct a statistic that reweights estimators according to their empirical plausibility and yields a stable decision rule even as the candidate set expands. We outline the method below.
3.2.1 Testing Rule
We are inspired by [16]. Their method constructs a data-driven weighted test statistic, with weights obtained through cross-validation. It tests whether all pairwise differences for the current dimension are non-positive. We adapt their core idea to the setting of multi-estimator causal comparison. Our goal is to construct a test statistic that aggregates pairwise relative errors in a way that assigns larger weights to larger error gaps, thereby increasing the power to detect when the current esti-
mator is suboptimal. We follow [16] to choose the Exponential Mechanism [31] to weight the relative errors. Formally, given an estimator τˆr to be tested, we calculate the weighted average of relative errors between τˆr and others on data point Zi :
Qi,r =
X
j̸=r
ωˆr,j tˆ(Zi; τˆr, τˆj)
The next question becomes how we compute the weights. We cannot simply apply a standard cross fold as that in [16], since tˆ(Zi) are not thoroughly independent of each other, leading to the failure of asymptotic normality and increasing the FWER (showed later in this section). To solve this, we introduce our subtle design– a two-layer cross-fitting structure. The dataset is first partitioned into two major folds, A and B. On fold A, we estimate the nuisance components ηˆA and evaluate the relative-
-error quantities δˆ on fold B; the roles of the folds are then swapped to obtain δˆ on A
5

using ηˆB. Within each major fold, we further perform an inner K-fold split to compute the exponential weights used in the aggregation step.
ωˆ (−i)
r,j ∝ exp λ · δˆ(τˆr, τˆj )(M−{Zi}) ;
X
j̸=r
ωˆ (−i)
r,j = 1
where λ is a hyper-parameter and Zi ∈ major fold M . Figure 2 illustrates the full data-partitioning scheme. For a given estimator τˆr, let
Sr ≜
n
X
i=1
X
j̸=r
ωˆ (−i)
r,j tˆ(Zi; τˆr, τˆj ; ηˆopp) =
n
X
i=1
Qi,r
Intuitively, Sr summarizes how large the estimation error of τˆr is compared with other τˆj on the test dataset, with larger value indicating stronger evidence that τˆr is not the best performer. Therefore, we reject the null hypothesis that τˆr is the winner within the group if we observe
√n1σˆr
Sr > cα
where σˆr2 ≜ Var(Q1,r) [16]. We will show later that the critical value cα is in fact the standard normal distribution 1 − α-quantile z1−α. The full procedure, including the construction of cross-fitted summaries, exponential weighting, and the standardized test statistic, is detailed in Algorithm 1.
Whole dataset
Fold A
Fold B
A1 A2 . . . AK
B1 B2 . . . BK
Figure 2: The dataset is first split horizontally into Fold A (top) and Fold B (bottom). Each half is then partitioned vertically into K subfolds.
Careful splitting matters. The two-layer sample-splitting scheme plays a crucial role in our procedure. If one applies the exponential weighting directly to the full dataset—without respecting the separation between the nuisance-training and nuisance-evaluation folds—the FWER is no longer properly controlled. This issue is evident in practice. Returning to the toy example at the beginning of this section, when we compare five similar estimators, the naive (single-layer) splitting strategy produces-
 a clear inflation of the FWER (Figure 3). This highlights the necessity of the two-layer cross-validation structure.
3.2.2 FWER Control
We now state our main theoretical guarantee. Under mild conditions on the nuisance estimators, the proposed selection procedure controls the familywise error rate.
Theorem 3.2 (FWER control of the cross-fitted exponentially weighted test). Under Assumptions 2–5, the selection rule induced by Algorithm 1 satisfies
nli→m∞ P τˆ(1) ∈ Sˆours ≥ 1 − α.
In the remainder of this section, we outline the steps leading to the proof of Theorem 3.2. In brief, the test statistics we construct are asymptotically normal, which allows their Type I error to be properly controlled using the corresponding Gaussian critical values. We begin by introducing a central limit theorem for dependent statistics and then verify, step by step, that our construction satisfies the required conditions.
6

Algorithm 1 Proposed Method: Cross-Fitted Pairwise Exponentially Weighted Confidence Set Input: Data X, outer split into two major folds A, B, inner fold number K, significance level α, weighting parameter λ Output: Confidence set Cb
Initialize Cb ← ∅ Train nuisances ηˆA on A, ηˆB on B for estimator index r ∈ [p] do Sr ← 0
for major fold M ∈ {A, B} do
ηopp ← ηˆA if M = B, else ηˆB for Zi ∈ M do for j ̸= r do
Compute tˆ(Zi; τˆr, τˆj; ηopp) end
tˆ(Zi; τˆr) = tˆ(Zi; τˆr, τˆ1; ηopp), . . . , tˆ(Zi; τˆr, τˆp; ηopp) ⊤
| {z }
p−1 components
end
Split M into K inner folds {I(M)
v }vK=1
for inner fold v ∈ [K] do
Compute out-of-fold mean summaries δˆ(−v,M) = 2K
(K−1)|Z|
P
Zi ∈M /I (M )
v
tˆ(Zi; τˆr)
Define weights ωˆ(−v,M)
r,j ∝ exp(λδˆ(−v,M)
j ), with P
j̸=r ωˆ (−v,M)
r,j = 1
for sample Zi ∈ I(M)
v do
Calculate weighted competitor Q(M)
i,r = P
j̸=r ωˆ (−v,M)
r,j δˆ(Zi; τˆr, τˆj ; ηopp)
Update accumulator Sr ← Sr + Q(M)
i,r
end end end
Estimate the standard deviation σˆr > 0 if √n1σˆr Sr < z1−α then
add r to Cb end end
Proof Because of the two-layer cross-fitting scheme, the quantities Qi,r are not fully independent across i. To handle this structure, we introduce a dependent CLT. Following the stability-based framework of [16, 32], who discuss distributional approximations for data-dependent functionals, we invoke a version of their result adapted to our setting. Before we start, it’s essential to introduce a definition first.
Definition 1. For distinct j, l ∈ [n], dataset Z = {Zi}n
i=1 and a map K, we define the (stability) operator of K as follows:
∇jK := K(Z) − K(Zj),
∇l∇jK := K(Z) − K(Zj) − K(Zl) − K(Zj,l) ,
where the perturbed data sets are defined as Zj replacing the sample Zj in Z by an IID copy.
Now, the dependent data CLT can be summarized as:
Theorem 3.3 (Stability-based CLT for globally dependent data). Let Z = {Zi}n
i=1 be IID observations and
consider a collection of statistics Ki ∈ [−M, M ] satisfying E[Ki | Z(−i)] = 0 and v2n := Var(K1) with lim infn vn > 0.
Suppose the first- and second-order stability measures satisfy
∆2
1 = max
i̸=j E[(∇j Ki)2] = o(n−1) (6)
∆2
2 = max
i̸=j̸=l E[(∇l∇j Ki)2] = o(n−2) (7)
7

Figure 3: Comparison of FWER under different data-splitting schemes (mean and variability over 100 repetitions) in the same linear model. Careful cross-fitting ensures proper error control, while casual splits lead to inflated FWER. Details are provided in Appendix G.1.
Then the standardized sum satisfies
v−1
n n−1/2
n
X
i=1
Ki
−d→ N (0, 1).
The theorem is actually a re-statment of Theorem 3.10 in [16] and Theorem 1 in [32], so we omit the proof here. To apply the stability-based CLT, we require that the nuisance estimators satisfy a mild local stability condition (Assumption 5): replacing a single observation in the training sample should induce only an O(n−1) perturbation in the estimated regression functions, with mixed second-order perturbations being of smaller order. This property holds for a broad class of smooth ERM-based lear-
ners, including regularized linear or generalized linear models and kernel ridge regression, and is formally justified in Appendix D. Moreover, in the experiment section we demonstrate that the test statistics remain the desired properties even when the nuisance components are fitted using black-box methods such as neural networks, as long as appropriate stability-enhancing techniques are carefully applied. Turning back to our problem, it suffices to show that our choice of Ki does satisfy the fir-
st and second order stability. Under Assumption 2- 5, the following theorems hold.
Theorem 3.4 (First Order Stability). Let τˆr be the estimator of interest and j ∈ Z and i ∈/ inner fold Ivj be two sample indices. Define
Kj,r(Z) = Qj,r − E
h
Qj,r | Z(−j)i
.
M > 0 is the upper bound of tˆ(Z1; τˆr) − E[tˆ(Z1; τˆr)], then for some universal constant C > 0,
mi,ajx ∥∇iKj,r∥2 ≤ CλM 2n−1 (8)
for sufficiently large n. In particular, when λ = o(√n),
mi,ajx ∥∇iKj,r∥2 = o(n−1/2).
Theorem 3.5 (Second Order Stability). Let τˆr be the estimator of interest and let j ∈ Z and i ∈/ inner fold Ivj be two sample indices. Under the same conditions of Theorem 3.4, the following holds,
max
i,j,k ∥∇i∇kKj,r∥2 ≤ Cλ2M 3n−2 (9)
for large enough n, a universal constant C. In particular, when λ = o(√n), we have maxi,j,k,r ∥∇i∇kKj,r∥2 = o(n−1).
The proofs are provided in Appendix E and Appendix F, respectively. Combining the results above completes the proof of Theorem 3.2.
8

Table 1: Familywise error rate (FWER) and average number of wrong selections (ANWS) on three benchmark datasets (mean ± standard error over 100 repetitions). The best results are bolded.
ACIC IHDP Twins
Method FWER ANWS FWER ANWS FWER ANWS
Naive 0.03 1.10 ± 0.04 0.02 1.01 ± 0.03 0.01 0.88 ± 0.04 Bonferroni 0.01 1.45 ± 0.05 0.01 1.12 ± 0.03 0 1.05 ± 0.02 Ranking Inference 0 1.63 ± 0.06 0.01 1.23 ± 0.04 0 1.18 ± 0.04
Ours 0.02 0.83 ± 0.06 0.04 0.80 ± 0.06 0.02 0.50 ± 0.05
4 Experiments
4.1 Experimental Setup
Datasets and Processing. Following previous studies [33, 34, 35], we evaluate our method on three benchmark datasets widely used in causal inference: ACIC 2016, IHDP, and Twins. The ACIC 2016 competition dataset [36] is a semi-synthetic dataset derived from the real-world Collaborative Perinatal [37]. It contains 4802 samples, each having 55 covariates of various types with natural associations. The IHDP dataset is used to estimate the effect of specialist home visits on infants’ future cognitive -
test scores, containing 747 samples (139 treated and 608 control), each with 25 pre-treatment covariates, while the Twins dataset is constructed from all twin births in the United States between 1989 and 1991 [38], owning 5271 samples with 28 different covariates. More dataset details are provided in the Appendix G.2. Estimators Compared. To create multiple candidate HTE estimators, we construct a collection of seven Causal Forests [2] with different values of the number of trees (n estimators) an-
d the maximum tree depth (max depth). These estimators are intentionally made similar so that the comparison task becomes nontrivial. Nuisance Estimators. We adopt the DragonNet architecture [39] and incorporate several stability-oriented refinements, including exponential moving average (EMA) of parameters [40], a warm-up training phase [41], additive Gaussian noise regularization [42], and layer normalization [43]. Although it remains a black-box model with no theoretical guarantee of prediction-
 stability, our simulation studies indicate that using this set of nuisance estimators still satisfies the conditions required by our procedure. Baselines. We compare our method against three alternatives:
• the naive method proposed in Section 3.1,
• Bonferroni correction method [44],
• the ranking inference method provided by Fan et al. [28].
All methods target the same hypothesis of identifying the best-performing estimator among the K candidates. Evaluation Metrics. We report the familywise error rate (FWER) and the average number of incorrect selections per experiment as our evaluation metrics. The significance level is set to 0.10, and each dataset is evaluated over 100 independent repetitions.
4.2 Main Results
FWER and Wrong Selections. Table 1 reports the familywise error rate (FWER) and the average number of wrong selections (ANWS) over 100 replications. While all methods manage to control the FWER, it can be seen clearly that our method substantially reduces ANWS compared with existing baselines across all three datasets. Notably, the improvement is most pronounced on ACIC2016 and Twins, which may be attributed to the relatively larger sample sizes in these datasets. Effect of the Number of Estimator-
s K. As shown in the toy model provided in Section 3.2, the number of the estimators to be tested may significantly influence the performance of the evaluation methods. To demonstrate this, we vary K within our estimator list while maintaining the true winner. Figure 4 shows how ANWS changes as the number of candidate estimators increases from 3 to 7. Across all datasets, our method is remarkably insensitive to the number of estimators being compared: as K increases, the number of incorrect select-
ions remains almost unchanged. In contrast, all competing methods deteriorate noticeably as K grows—they not only start off worse than ours, but the performance gap continues to widen. This phenomenon directly reflects the motivation behind the design of our procedure. Effect of Sample Size. In practical applications, a natural idea is to enlarge the test set in order to improve the accuracy of evaluation. It is therefore crucial to examine whether each method exhibits a clear improvement as the
9

(a) ACIC dataset (b) IHDP dataset (c) Twins dataset
Figure 4: Average number of false selections across different numbers of estimators K on three benchmark datasets. Our method consistently yields fewer false selections than Naive, ranking inference, and Bonferroni baselines.
(a) ACIC2016 dataset (b) Twins dataset
Figure 5: Effect of sample size on the average number of false selections. Across both ACIC2016 and Twins, our method benefits more from additional samples and consistently achieves the lowest number of false selections across all regimes.
size of the test dataset increases. To test this, we vary the sample size from 60% to 100% of the original datasets (by randomly taking off several sample points). Figures 5 (a) and (b) show results on ACIC2016 and Twins, respectively. As expected, all methods improve as more data become available; however, our method shows the steepest improvement curve and maintains the largest advantage in low-sample regimes. This suggests that the proposed cross-fitted exponential weighting is particularly eff-
ective when given more sample points. Nuisance Estimator Reliability. We empirically demonstrate that the nuisance estimators we adopt indeed lead to test statistics that are approximately Gaussian. We present results on the ACIC 2016 datasets. In Figure 6, panel (a) shows a bootstrap approximation of the sampling distribution for one representative pair of estimators; the resulting histogram aligns closely with the shape of a standard normal distribution. Panel (b) further summarizes the behavior-
 across all pairs: for each of the 100 datasets, we perform a KS test for normality and report the Bonferroni-corrected p-values. As shown in the bar plot, approximately 5% of the datasets have corrected pvalues below the 0.05 threshold, which is exactly what one would expect under the null. Together, these results confirm that the test statistics produced by our nuisance estimators satisfy the asymptotic normality predicted by the CLT. Summary. Across all datasets and settings, our method achieve-
s reliable FWER control while substantially reducing the number of false selections compared with existing approaches. It remains stable as K increases, adapts well to different sample sizes, and demonstrates particular strength when the candidate estimators are highly similar—precisely the regime where multi-estimator comparison is most challenging.
5 Conclusion
In this paper, we formulate the problem of selecting the best estimator among multiple HTE estimators as an inferential question of the argmin of unknown risks, and propose a ground-truth-free procedure for selecting the best one. Our cross-fitted exponentially weighted test statistic leverages stability-based CLTs to guarantee
10

(a) Bootstrap mean distribution of one pair vs N (0, 1). (b) Bonferroni-adjusted p-values across 100 datasets.
Figure 6: Illustration of the CLT validity diagnostics. (a) shows the bootstrap mean distribution for one representative pair compared to the standard normal. (b) summarizes Bonferroni-adjusted p-values of KS test for all pairs across 100 datasets, indicating no evidence against the CLT approximation.
asymptotic FWER control under mild nuisance-estimator conditions. Empirically, the method reliably controls error rates while reducing false selections across benchmark datasets.
References
[1] Guido W Imbens and Donald B Rubin. Causal inference in statistics, social, and biomedical sciences. Cambridge university press, 2015.
[2] Stefan Wager and Susan Athey. Estimation and inference of heterogeneous treatment effects using random forests. Journal of the American Statistical Association, 113(523):1228–1242, 2018.
[3] M.A. Herna ́n and J. M. Robins. Causal Inference: What If. Boca Raton: Chapman and Hall/CRC, 2020.
[4] Uri Shalit, Fredrik D Johansson, and David Sontag. Estimating individual treatment effect: generalization bounds and algorithms. In International conference on machine learning, pages 3076–3085. PMLR, 2017.
[5] Negar Hassanpour and Russell Greiner. Counterfactual regression with importance sampling weights. In IJCAI, pages 5880–5887. Macao, 2019.
[6] Soren R Kunzel, Jasjeet S Sekhon, Peter J Bickel, and Bin Y. Metalearners for estimating heterogeneous treatment effects using machine learning. PNAS, 116:4156–4165, 2019.
[7] Xinkun Nie and Stefan Wager. Quasi-oracle estimation of heterogeneous treatment effects. Biometrika, 108(2):299–319, 2021.
[8] Zijun Gao, Trevor Hastie, and Robert Tibshirani. Assessment of heterogeneous treatment effect estimation accuracy via matching. Statistics in Medicine, 40(17):3990–4013, 2021.
[9] Jiayi Guo, Haoxuan Li, Ye Tian, and Peng Wu. A relative error-based evaluation framework of heterogeneous treatment effect estimators, 2025.
[10] Alicia Curth and Mihaela van der Schaar. In search of insights, not magic bullets: Towards demystification of the model selection dilemma in heterogeneous treatment effect estimation, 2023.
[11] Dennis Frauen, Valentyn Melnychuk, Jonas Schweisthal, Mihaela van der Schaar, and Stefan Feuerriegel. Treatment effect estimation for optimal decision-making. arXiv preprint arXiv:2505.13092, 2025.
[12] Paul W Holland. Statistics and causal inference. Journal of the American statistical Association, 81(396):945–960, 1986.
11

[13] Jonathan Crabbe ́, Alicia Curth, Ioana Bica, and Mihaela Van Der Schaar. Benchmarking heterogeneous treatment effect models through the lens of interpretability. Advances in Neural Information Processing Systems, 35:12295–12309, 2022.
[14] Brady Neal, Chin-Wei Huang, and Sunand Raghupathi. Realcause: Realistic causal inference benchmarking, 2021.
[15] Zijun Gao. Trustworthy assessment of heterogeneous treatment effect estimator via analysis of relative error. In The 28th International Conference on Artificial Intelligence and Statistics, 2025.
[16] Tianyu Zhang, Hao Lee, and Jing Lei. Winners with confidence: Discrete argmin inference with an application to model selection. arXiv preprint arXiv:2408.02060, 2024.
[17] Ilmun Kim and Aaditya Ramdas. Locally minimax optimal confidence sets for the best model, 2025.
[18] D. B. Rubin. Estimating causal effects of treatments in randomized and nonrandomized studies. Journal of educational psychology, 66:688–701, 1974.
[19] Jerzy Splawa Neyman. On the application of probability theory to agricultural experiments. essay on principles. section 9. Statistical Science, 5:465–472, 1990.
[20] Paul R Rosenbaum and Donald B Rubin. The central role of the propensity score in observational studies for causal effects. Biometrika, 70(1):41–55, 1983.
[21] Jennifer L. Hill and. Bayesian nonparametric modeling for causal inference. Journal of Computational and Graphical Statistics, 20(1):217–240, 2011.
[22] Ahmed Alaa and Mihaela Schaar. Limits of estimating heterogeneous treatment effects: Guidelines for practical algorithm design. In International Conference on Machine Learning, pages 129–138. PMLR, 2018.
[23] Gary W Gibbons and Stephen W Hawking. Action integrals and partition functions in quantum gravity. Physical Review D, 15(10):2752, 1977.
[24] A. Futschik and G. C. Pflug. Confidence sets for discrete stochastic optimization. Annals of Operations Research, 56(1):95–108, 1995.
[25] Magne Mogstad, Joseph P Romano, Azeem M Shaikh, and Daniel Wilhelm. Inference for ranks with applications to mobility across neighbourhoods and academic achievement across countries. Review of Economic Studies, 91(1):476–518, 2024.
[26] Peter R Hansen, Asger Lunde, and James M Nason. The model confidence set. Econometrica, 79(2):453497, 2011.
[27] Ilmun Kim and Aaditya Ramdas. Locally minimax optimal and dimension-agnostic discrete argmin inference. arXiv preprint arXiv:2503.21639, 2025.
[28] Jianqing Fan, Zhipeng Lou, Weichen Wang, and Mengxin Yu. Ranking inferences based on the top choice of multiway comparisons. Journal of the American Statistical Association, 120(549):237–250, 2025.
[29] Harvey Goldstein and David J Spiegelhalter. League tables and their limitations: statistical issues in comparisons of institutional performance. Journal of the royal statistical society series a: statistics in society, 159(3):385–409, 1996.
[30] Minge Xie, Kesar Singh, and Cun-Hui Zhang. Confidence intervals for population ranks in the presence of ties and near ties. Journal of the American Statistical Association, 104(486):775–788, 2009.
[31] Frank McSherry and Kunal Talwar. Mechanism design via differential privacy. In 48th Annual IEEE Symposium on Foundations of Computer Science (FOCS’07), pages 94–103, 2007.
[32] Morgane Austern and Wenda Zhou. Asymptotics of cross-validation. arXiv preprint arXiv:2001.11111, 2020.
12

[33] Uri Shalit, Fredrik D. Johansson, and David Sontag. Estimating individual treatment effect: generalization bounds and algorithms. In Doina Precup and Yee Whye Teh, editors, Proceedings of the 34th International Conference on Machine Learning, volume 70 of Proceedings of Machine Learning Research, pages 30763085. PMLR, 06–11 Aug 2017.
[34] Christos Louizos, Uri Shalit, Joris M Mooij, David Sontag, Richard Zemel, and Max Welling. Causal effect inference with deep latent-variable models. Advances in neural information processing systems, 30, 2017.
[35] Vinod Kumar Chauhan, Jiandong Zhou, Ghadeer Ghosheh, Soheila Molaei, and David A Clifton. Dynamic inter-treatment information sharing for individualized treatment effects estimation. In International Conference on Artificial Intelligence and Statistics, pages 3529–3537. PMLR, 2024.
[36] Vincent Dorie, Jennifer Hill, Uri Shalit, Marc Scott, and Dan Cervone. Automated versus do-it-yourself methods for causal inference: Lessons learned from a data analysis competition. 2019.
[37] Kenneth R Niswander, Myron J Gordon, and Myron Gordon. The women and their pregnancies: the Collaborative Perinatal Study of the National Institute of Neurological Diseases and Stroke, volume 73. National Institute of Health, 1972.
[38] Douglas Almond, Kenneth Y. Chay, and David S. Lee. The costs of low birth weight*. The Quarterly Journal of Economics, 120(3):1031–1083, 08 2005.
[39] Claudia Shi, David Blei, and Victor Veitch. Adapting neural networks for the estimation of treatment effects. Advances in neural information processing systems, 32, 2019.
[40] Antti Tarvainen and Harri Valpola. Mean teachers are better role models: Weight-averaged consistency targets improve semi-supervised deep learning results, 2018.
[41] Priya Goyal, Piotr Dolla ́r, Ross Girshick, Pieter Noordhuis, Lukasz Wesolowski, Aapo Kyrola, Andrew Tulloch, Yangqing Jia, and Kaiming He. Accurate, large minibatch sgd: Training imagenet in 1 hour, 2018.
[42] Pascal Vincent, Hugo Larochelle, Yoshua Bengio, and Pierre-Antoine Manzagol. Extracting and composing robust features with denoising autoencoders. In Proceedings of the 25th international conference on Machine learning, pages 1096–1103, 2008.
[43] Jimmy Lei Ba, Jamie Ryan Kiros, and Geoffrey E Hinton. Layer normalization. arXiv preprint arXiv:1607.06450, 2016.
[44] Eric W Weisstein. Bonferroni correction. https://mathworld. wolfram. com/, 2004.
[45] Vincent Dorie. vdorie/npci, 2016. GitHub repository.
[46] Anpeng Wu, Junkun Yuan, Kun Kuang, Bo Li, Runze Wu, Qiang Zhu, Yueting Zhuang, and Fei Wu. Learning decomposed representations for treatment effect estimation. IEEE Transactions on Knowledge and Data Engineering, 35(5):4989–5001, 2022.
13

A Notation Summary
Table 2: Notation and their meanings.
Symbol Meaning
T Binary treatment variable X Pre-treatment covariates Y Outcome Z A combination of (X, Y, T ) τ (x) Individual treatment effect e(x) Propensity score μa(x) Outcome regression function, i.e., μa(x) = E[Y | X = x, A = a] for a = 0, 1 δ(τˆ1, τˆ2) (real) Relative error between estimator τˆ1 and τˆ2 tˆ(Zi, τˆr, τˆt; ηˆ) Estimated relative error between τˆr and τˆt on Zi (given nuisance estimator ηˆ) ηA/ηB nuisance estimators trained on Fold A/B
B The Naive Method
Algorithm 2 Naive Max–Statistic Selector
Input: Estimators {τˆ1, . . . , τˆK}, two-fold splits (A, B), significance level α, number of resamples B ̃
Output: Estimated winner set Sˆ
Initialize Sˆ ← ∅ for fold M ∈ {A, B} do Train nuisance estimator ηˆM end
for estimator index m ∈ [K] do for s ∈ Im do
Compute δˆ(τˆm, τˆs) = 1
2
h1 |A|
P
Zi∈Atˆ(Zi; τˆm, τˆs; ηˆB) + 1
|B|
P
Zi∈Btˆ(Zi; τˆm, τˆs; ηˆA)
i
end
Stack δˆm = {δˆ(τˆm, τˆs)}s∈Im and estimate Σˆ m from vector scores
for resample index b ∈ [B ̃] do
Draw G(b) ∼ N (0, Σˆ m) Compute M (b) = maxs∈Im
G(b)
s
√
(Σˆ m)ss
end
Set c(m)
1−α ← empirical (1 − α)-quantile of {M (b)}B
b=1
Compute Sm,s = δˆ(τˆm,τˆs)
√
(Σˆ m)ss
, s ∈ Im
Compute Smax
m = maxs∈Im Sm,s if Smax
m ≤ c(m)
1−α then
Add m to Sˆ end end
return Sˆ
14

C Proof of Theorem 3.1
Proof. WLOG, we assume τ1 ≻ τ2 ≻ · · · ≻ τK , where τ1 is the true winner.
P τ1 ∈/ Sˆ = P max
i̸=1 S1,i > c(1)
1−α; S1,i = δˆ(τˆ1, τˆi)/
q
(Σˆ 1)ii (j ≜ arg max S1,i)
= P S1,j − δ(τˆ1, τˆj )/(Σˆ 1)jj + δ(τˆ1, τˆj )/(Σˆ 1)jj > c(1)
1−α
≈ P S1,j − δ(τˆ1, τˆj )/(Σ1)jj + δ(τˆ1, τˆj )/(Σ1)jj > c(1)
1−α
≤ P S1,j − δ(τˆ1, τˆj )/(Σˆ 1)jj > c(1)
1−α (δ(τˆ1, τˆj) < 0)
= P (δˆ(τˆ1, τˆj) − δ(τˆ1, τˆj))/(Σˆ 1)jj > c(1)
1−α
= P Gj /(Σ1)jj > c(1)
1−α (G d= δˆ(τˆ1, ·) − δ(τˆ1, ·))
≤ α.
The equality holds only when all estimators perform identically, that is, δ(τˆ1, τˆj) = 0 for all j ̸= 1. Under the unique winner assumption, this equality cannot occur, so the inequality is strict. Nevertheless, when the performance gaps between estimators are sufficiently small, the bound may be nearly attained in finite samples.
D Justification for Assumption 5
In this section, we demonstrate that a wide range of estimators satisfy Assumption 5 with rigorous theoretical guarantees, given local smoothness. The result is summarized as the theorem below.
Theorem D.1 (First- and second-order stability under local smoothness). Let S = {zi}n
i=1 be a training set and
let fˆS ∈ arg minf∈F LˆS(f ), where
LˆS(f ) := 1
n
n
X
i=1
l(f ; zi).
For r ∈ {1, . . . , n}, let S(r) be obtained by replacing zr with z′r, and similarly S(r,t) when replacing both r and t. Assume:
1. Per-sample gradient boundedness. For all f and z, ∥∇l(f ; z)∥ ≤ G.
2. Per-sample β-smoothness. For all f, f ′ and z, ∥∇l(f ; z) − ∇l(f ′; z)∥ ≤ β∥f − f ′∥ (equivalently ∥∇2l(f ; z)∥ ≤ β).
3. Per-sample Hessian Lipschitzness. For all f, f ′ and z, ∥∇2l(f ; z) − ∇2l(f ′; z)∥ ≤ ρ∥f − f ′∥.
4. Local strong convexity of the empirical risk. There exists a neighborhood N of fˆS and a constant λ > 0
such that ∇2LˆS(f ) ⪰ λI for all f ∈ N .
5. Basin retention. The ERM solutions fˆS(r) and fˆS(r,t) lie in N (i.e., they stay in the same local basin where the Hessian is invertible).
Then the ERM is stable in the following sense:
∥fˆS(r) − fˆS∥ = O(n−1), (10)
∥fˆS − fˆS(r) − fˆS(t) + fˆS(r,t) ∥ = O(n−2). (11)
The constants implicit in O(·) depend only on (G, β, ρ, λ) and the basin diameter.
Proof sketch. Write GS(f ) := ∇LˆS(f ) and HS(f ) := ∇2LˆS(f ). First-order optimality gives GS(fˆS) = 0 and
GS(r) (fˆS(r) ) = 0.
Step 1: Single replacement (first-order stability). Apply a first-order Taylor expansion of GS(r) at fˆS:
0 = GS(r) (fˆS(r) ) = GS(r) (fˆS ) + HS(r) (ξ) (fˆS(r) − fˆS ),
15

for some ξ on the segment between fˆS and fˆS(r) . Add and subtract GS(fˆS) = 0 and rewrite the Hessian at the
anchor HS(fˆS):
0 = GS(r) (fˆS ) − GS (fˆS )
| {z }
:= δ(r)
S
+HS (fˆS )(fˆS(r) − fˆS ) + HS(r) (ξ) − HS (fˆS )
| {z }
:= ∆H
(fˆS(r) − fˆS ).
By (A1), replacing one sample perturbs the empirical gradient by at most
∥δ(r)
S ∥= 1
n ∇l(fˆS; z′
r) − ∇l(fˆS; zr) ≤ 2G
n = O(n−1).
By (A2)–(A3) and linearity of the Hessian in the empirical measure,
∥HS(r) (f ) − HS(f )∥ ≤ 2β
n , ∥HS(ξ) − HS(fˆS)∥ ≤ ρ∥fˆS(r) − fˆS∥.
Thus
∥∆H∥ ≤ 2β
n + ρ∥fˆS(r) − fˆS ∥.
Let ∆r := fˆS(r) − fˆS. Using (A4), HS(fˆS) is invertible and ∥HS(fˆS)−1∥ ≤ λ−1. Solve for ∆r:
∆r = −HS (fˆS )−1δ(r)
S − HS(fˆS)−1∆H ∆r.
Taking norms and rearranging,
∥∆r∥ ≤ 1
λ ∥δ(r)
S ∥+ 1
λ ∥∆H∥ ∥∆r∥ ≤ C1
n +1
λ
2β
n + ρ∥∆r∥ ∥∆r∥.
For n large enough (so that ∥∆r∥ is small within the basin), the quadratic term can be absorbed, yielding ∥∆r∥ ≤ C/n, proving (10).
Step 2: Double replacement (second-order stability). Repeat Step 1 for S(t) and S(r,t) to obtain
fˆS(r) − fˆS = −H−1
S δ(r)
S + R(r)
S , fˆS(t) − fˆS = −H−1
S δ(t)
S + R(t)
S , fˆS(r,t) − fˆS = −H −1
S δ(r,t)
S + R(r,t)
S,
where HS := HS(fˆS) and each remainder R(·)
S is O(n−1∥fˆ(·) −fˆS∥) = O(n−2) by the bound on ∆H and Step 1. Form the finite-difference combination:
fˆS − fˆS(r) − fˆS(t) + fˆS(r,t) = −H −1
S δ(r,t)
S − δ(r)
S − δ(t)
S + R(r,t)
S − R(r)
S − R(t)
S.
Since all δ’s are evaluated at the same anchor fˆS and the empirical gradient is linear in the sample measure,
δ(r,t)
S − δ(r)
S − δ(t)
S = 0.
Thus the entire term is controlled by the O(n−2) remainders, yielding (11).
Remark 1 (What the assumptions buy). (A1)–(A2) ensure that replacing one point changes the empirical gradient and Hessian by O(n−1) uniformly. (A3)–(A4) provide an invertible local curvature and keep all ERM solutions in the same basin, so the implicit-function linearization is valid. The proof makes no global convexity assumption: it only uses local strong convexity and smoothness at the attained minimizer.
E Proof of Theorem 3.4
Proof. By definition,
∇iKj,r = Kj,r(Z) − Kj,r(Z(i))
= Q(M)
j,r − E[Q(M)
j,r | Z(−j)] − Q(M),(i)
j,r − E[Q(M),(i)
j,r | Z(−j),(i)] . (12)
For simplicity, denote tˆs(Zj) := tˆ(Zj; τˆr, τˆs; ηopp).
16

Case 1: i and j in the same outer fold but different inner folds. In this case tˆs(Zj) = tˆ(i)
s (Zj), so the difference arises only from the weights:
E (Q(M)
j,r − E[Q(M)
j,r | Z(−j)]) − (Q(M),(i)
j,r − E[Q(M),(i)
j,r | Z(−j),(i)])
2
=E
X
s̸=r
(ωˆr,s − ωˆ(i)
r,s) tˆs(Zj ) − E[tˆs(Zj ) | Z(B)]
!2
=E
X
s̸=r
ωˆr,s 1 − ωˆ(i)
r,s
ωˆr,s
tˆs(Zj) − E[tˆs(Zj) | Z(B)]
!2
. (13)
To control the ratio ωˆ(i)
r,s/ωˆr,s, define  ̃n = n(1 − 1/K)/2 being the sample size of the remained inner folds (which are used to compute ωˆ). For any s ̸= r,
ωˆ (i)
r,s
ωˆr,s
= exp(λδˆ(i)
s)
P
t̸=r exp(λδˆ(i)
t)
·
P
t̸=r exp(λδˆt)
exp(λδˆs)
= exp(λ ̃n−1(tˆs(Z′
i) − tˆs(Zi))) ·
P
t̸=r exp(λδˆt) exp(λ ̃n−1(tˆt(Zi) − tˆt(Z′
i )))
P
t̸=r exp(λδˆt)
≤ exp 2λ ̃n−1 max
t∈[p]
|tˆt (Z ′
i) − tˆt(Zi)| ≤ exp(4λ ̃n−1M ). (14)
By the mean value theorem, for some ξ ∈ (0, 4λ ̃n−1M ),
ωˆ (i)
r,s
ωˆr,s
− 1 ≤ 4λ ̃n−1M exp(ξ). (15)
If 4λ ̃n−1M ≤ 1, this gives
ωˆ (i)
r,s
ωˆr,s
− 1 ≤ 4eλ ̃n−1M, (16)
and similarly ωˆ(i)
r,s
ωˆr,s − 1 ≥ −4λ ̃n−1M . Thus
ωˆ (i)
r,s
ωˆr,s
− 1 ≤ 4eλ ̃n−1M. (17)
Therefore,
Q(M ),(i)
j,r − E[Q(M),(i)
j,r | Z(−j),(i)] − Q(M)
j,r + E[Q(M)
j,r | Z(−j)]
≤ 4eλ ̃n−1M
X
s̸=r
ωˆr,s tˆs(Zj) − E[tˆs(Zj) | Z(B)] . (18)
Applying Jensen’s inequality,
E Q(M),(i)
j,r − E[Q(M),(i)
j,r | Z(−j),(i)] − Q(M)
j,r + E[Q(M)
j,r | Z(−j)]
2
≤ 16e2λ2  ̃n−2M 2 E
X
s̸=r
ωˆr,s tˆs(Zj ) − E[tˆs(Zj ) | Z(B)]
!2
≤ 16e2λ2  ̃n−2M 2 X
s̸=r
E[ωˆr,s] Var(tˆs(Zj))
≤ 16e2λ2  ̃n−2M 2 ζ2. (19)
This bound is uniform in i, j, r, establishing the first part of (8).
17

Case 2: i and j in different outer folds. Here both the weights and nuisance predictions may change. We decompose
∇iKj,r =
X
s̸=r
ωˆr,s − ωˆ(i)
r,s tˆs(Zj ) − E[tˆs(Zj ) | Z(B)] (A)
+
X
s̸=r
ωˆ (i)
r,s
h
(tˆs(Zj) − E[tˆs(Zj) | Z(B)]) − (tˆ(i)
s (Zj ) − E[tˆ(i)
s (Zj ) | Z(B),(i)])
i
. (B)
For Term (A), we conduct the same procedure in Case 1 to find the ratio bound (14) becoming
ωˆ (i)
r,s
ωˆr,s
= exp(λδˆ(i)
s)
P
t̸=r exp(λδˆ(i)
t)
·
P
t̸=r exp(λδˆt)
exp(λδˆs)
= exp(λ(δˆ(i)
s − δˆs)) ·
P
t̸=r exp(λδˆ(i)
t ) exp(λ(δˆt − δˆ(i)
t ))
P
t̸=r exp(λδˆ(i)
t)
≤ exp(λ(δˆ(i)
s − δˆs)) · mtax exp(λ(δˆt − δˆ(i)
t ))
≤ exp 2λ max
t∈[p]
∥δˆt − δˆ(i)
t ∥ ≤ exp(2λ ̃n−1M ̃ ), (20)
and the rest is the same as the former case, giving ∥(A)∥2 ≤ CλM 2/n. For Term (B), Assumption 5 implies
∥tˆs(Zj ) − E[tˆs(Zj ) | Z(B)] − (tˆ(i)
s (Zj ) − E[tˆ(i)
s (Zj ) | Z(B),(i)])∥2 = o(n−1/2),
uniformly over s. Since P
s̸=r ωˆ (i)
r,s = 1, this shows ∥(B)∥2 = o(n−1/2). Combining (A) and (B) completes the proof.
F Proof of Theorem 3.5
Proof. To simplify notation, we omit the superscript (−v) for every exponential weighting ωˆ and sample mean δˆ. We also take r = 1 and define  ̃n = n(1 − 1/V ). The bounds that we will establish are uniform over i, j, k, r.
Case 1: i and k are in the same outer fold as j, but different inner folds.By the definition of ∇i∇kKj,1 with i, k ∈/ Ivj , one has
E(∇i ∇k Kj,1 )2
= E Kj,1(Z) − Kj,1(Z(k)) − Kj,1(Z(i)) + Kj,1(Z(i,k))
2
= E Qj,1 − E[Qj,1 | Z(−v)] − Qk
j,1 + E[Qk
j,1 | Z(−v),(k)]
+ Qi
j,1 − E[Qi
j,1 | Z(−v),(i)] + Qik
j,1 − E[Qik
j,1 | Z(−v),(ik)]
!2
=E
p
X
s=2
(ωˆ1,s − ωˆk
1,s − ωˆi
1,s + ωˆik
1,s)(tˆs(Zj ) − E[tˆs(Zj ) | Z(B)])
!2
.
(21)
Consider p
X
s=2
(ωˆ k
1,s − ωˆ1,s + ωˆi
1,s − ωˆik
1,s)(tˆs(Zj ) − E[tˆs(Zj ) | Z(B)])
≤
p
X
s=2
ωˆ1,s − ωˆk
1,s − ωˆi
1,s + ωˆik
1,s · tˆs(Zj ) − E[tˆs(Zj ) | Z(B)]
=
p
X
s=2
ωˆ1,s − ωˆi
1,s 1 − ωˆ1k,s
ωˆ1,s
!
+ ωˆi
1,s
ωˆ i1,ks
ωˆ i1,s
− ωˆ1k,s
ωˆ1,s
!
· tˆs(Zj) − E[tˆs(Zj) | Z(B)] .
(22)
18

The first summation in (22) has L2 norm bounded by λ2vM 2  ̃n−2. For the second summation in (22), consider
ωˆ ik
1,s /ωˆ i
1,s − ωˆk
1,s/ωˆ1,s .
Since
exp(λδˆisk )
exp(λδˆis) = exp(λδˆsk)
exp(λδˆs) = exp λ ̃n−1(tˆs(Z′
k) − tˆs(Zk)) , (23)
we obtain
ωˆ i1,ks
ωˆ i1,s
− ωˆ1k,s
ωˆ1,s
= exp λ ̃n−1 tˆs(Z′
k) − tˆs(Zk) Ξ
Ξk
ΞiΞk
ΞikΞ − 1 . (24)
Let
E i,k
t,t = exp(λ(δˆi
t + δˆk
t )), Ei,k
t,t′ = exp(λ(δˆi
t + δˆk
t′ )), Ei,k
t′,t = exp(λ(δˆi
t′ + δˆk
t )),
and similarly define Eik,∅
t,t , Eik,∅
t,t′ and Eik,∅
t′,t . As Ei,k
t,t = Eik,∅
t,t ,
ΞiΞk
ΞikΞ − 1 =
Pp
t=2 Ei,k
t,t + P
2≤t<t′ (Ei,k
t,t′ + Ei,k
t′,t) Pp
t=2 Eik,∅
t,t + P
2≤t<t′ (Eik,∅
t,t′ + Eik,∅
t′,t )
−1
≤ sup
2≤t≤t′ ≤p
E i,k
t,t′ + Ei,k
t′,t − Eik,∅
t,t′ − Eik,∅
t′ ,t E ik,∅
t,t′ + Eik,∅
t′ ,t
.
(25)
For arbitrary t, t′ ∈ [p], the mean value theorem yields
E i,k
t,t′ − Eik,∅
t,t′ = − exp(ξ1)λ(δˆik
t + δˆt′ − δˆi
t − δˆk
t′ ),
and similarly
E i,k
t′,t − Eik,∅
t′,t = − exp(ξ2)λ(δˆik
t′ + δˆt − δˆi
t′ − δˆk
t ).
Thus,
E i,k
t,t′ + Ei,k
t′,t − Eik,∅
t,t′ − Eik,∅
t′ ,t
= −{exp(ξ2) − exp(ξ1)}λ(δˆik
t′ + δˆt − δˆi
t′ − δˆk
t ).
(26)
The quantity inside parentheses is bounded by 4λ ̃n−1M . By another application of the mean value theorem, exp(ξ2) − exp(ξ1) = exp(ξ3)(ξ2 − ξ1) with |ξ2 − ξ1| ≤ 8λ ̃n−1M . If 4λ ̃n−1M < 1, then
exp(ξ3)
E ik,∅
t,t′ + Eik,∅
t′ ,t
≤ e.
Consequently,
sup
2≤t≤t′ ≤p
E i,k
t,t′ + Ei,k
t′,t − Eik,∅
t,t′ − Eik,∅
t′ ,t E ik,∅
t,t′ + Eik,∅
t′ ,t
≤ 32eλ2  ̃n−2M 2,
and similarly the infimum is bounded below by
−C ̃λ2  ̃n−2M 2.
Thus,
ΞiΞk
ΞikΞ − 1 ≤ Cλ2  ̃n−2M 2.
Returning to (24),
ωir,ks
ωir,s
− ωrk,s
ωr,s
≤ exp(4λ ̃n−1M ) · Cλ2  ̃n−2M 2 ≤ Cλ2  ̃n−2M 2.
Hence, by Jensen’s inequality, the second summation in (22) has L2 norm of order O(λ2vM 2  ̃n−2). Combining the bounds for both summations completes the proof.
19

Case 2: i and k are in the opposite outer fold of j. Imitating the proof of Theorem 3.4, we decompose
∇i∇kKj,1 =
p
X
s=2
(ωˆ1,s − ωˆk
1,s − ωˆi
1,s + ωˆik
1,s)(tˆs(Zj) − E[tˆs(Zj) | Z(B)]) (C)
+
p
X
s=2
(ωˆ k
1,s − ωˆik
1,s)((tˆs(Zj) − E[tˆs(Zj) | Z(B)]) − (tˆk
s (Zj) − E[tˆk
s (Zj ) | Z(B),k])) (D)
+
p
X
s=2
(ωˆ i
1,s − ωˆik
1,s)((tˆs(Zj) − E[tˆs(Zj) | Z(B)]) − (tˆi
s(Zj) − E[tˆi
s(Zj ) | Z(B),i])) (E)
+
p
X
s=2
ωˆ ik
1,s((tˆs(Zj ) − E[tˆs(Zj ) | Z(B)]) − (tˆk
s (Zj) − E[tˆk
s (Zj ) | Z(B),k])
− (tˆi
s(Zj) − E[tˆi
s(Zj ) | Z(B),i]) + (tˆik
s (Zj ) − E[tˆik
s (Zj ) | Z(B),ik])) (F)
Now, term (D) (E) (F) can be controlled by o(n−1) under Assumption 5 and the statements in the proof of Theorem 3.4. We only need to deal with term (C). As δˆtk + δˆti − δˆtik − δˆt = O(n−2), Eq (25) holds as well. We first need to make some slight adjustments to Eq (23). It now becomes
exp(λδˆisk )
exp(λδˆis) = exp

λ · n ̃−1
n ̃
X
j=1
(tˆik
s (Zj ) − tˆi
s(Zj ))


exp(λδˆsk )
exp(λδˆs) = exp

λ · n ̃−1
n ̃
X
j=1
(tˆk
s (Zj) − tˆs(Zj))


So that
exp(λδˆisk )
exp(λδˆis) = exp(λδˆsk)
exp(λδˆs) · exp λ · (δˆs − δˆi
s − δˆk
s + δˆik
s)
By Taylor expansion, we have
exp λ · (δˆs − δˆi
s − δˆk
s + δˆik
s ) =λ · (δˆs − δˆi
s − δˆk
s + δˆik
s ) + 1 + oP (λ(δˆs − δˆi
s − δˆk
s + δˆik
s ))
Now Eq (24) becomes
ωir,ks
ωir,s
− ωrk,s
ωr,s
= exp(λδˆsk)
exp(λδˆs)
Ξi
Ξik − Ξ
Ξk + [λ(δˆs − δˆi
s − δˆk
s + δˆik
s)
+ oP (λ(δˆs − δˆi
s − δˆk
s + δˆik
s ))] ·
P
t̸=r exp(λδˆtik)
P
t̸=r exp(λδˆti) (27)
Recall the proof of Case 2 in Theorem 3.4,
P
t̸=r exp(λδˆtik)
P
t̸=r exp(λδˆti) ≤ mtax exp(λ(δˆik
t − δˆi
t)) ≤ λM ̃  ̃n−1
So the last term of Eq (27) can be controlled by λ2  ̃n−2, which is definitely oP (n−1). The next adjustment to be made lies in Eq (26), which now turns to
E i,k
t,t′ + Ei,k
t′,t − Eik,∅
t,t′ − Eik,∅
t′ ,t
= − exp (ξ1) λ δˆik
t + δˆt′ − δˆi
t − δˆk
t′ − exp (ξ2) λ δˆik
t′ + δˆt − δˆi
t′ − δˆk
t
= − exp (ξ1) λ δˆik
t + δˆt′ − δˆi
t − δˆk
t′ − exp (ξ1) λ δˆik
t′ + δˆt − δˆi
t′ − δˆk
t
+ exp (ξ1) λ δˆik
t′ + δˆt − δˆi
t′ − δˆk
t − exp (ξ2) λ δˆik
t′ + δˆt − δˆi
t′ − δˆk
t
= −{exp(ξ2) − exp(ξ1)}λ δˆik
t′ + δˆt − δˆi
t′ − δˆk
t − exp(ξ1)λ[(δˆik
t′ + δˆt′ − δˆk
t′ − δˆi
t′ ) + (δˆt + δˆik
t − δˆi
t − δˆk
t )]
(G)
20

Now, let’s focus on the last term of (G), we have
exp(ξ1)λ[(δˆik
t′ + δˆt′ − δˆk
t′ − δˆi
t′ ) + (δˆt + δˆik
t − δˆi
t − δˆk
t )] ≤ exp(max{λ(δˆi
t + δˆk
t′ ), λ(δˆik
t + δˆt)})
· λ[(δˆik
t′ + δˆt′ − δˆk
t′ − δˆi
t′ ) + (δˆt + δˆik
t − δˆi
t − δˆk
t )]
As
exp(max{λ(δˆti + δˆk
t′ ), λ(δˆtik + δˆt)})
E ik,∅
t,t′ + Eik,∅
t′ ,t
≤e
which is proved in Case 1. The last term of (G) (with the denominator) now can be controlled by eλ ̃n−2, smaller than the first term of (G). The rest of the proof is just analogous to Case 1.
Case 3: k is in the opposite outer fold of j, while i is in the same outer fold but different inner fold with j. We can decompose the target into
∇i∇kKj,1 =
p
X
s=2
(ωˆ1,s − ωˆk
1,s − ωˆi
1,s + ωˆik
1,s)(tˆs(Zj) − E[tˆs(Zj) | Z(B)]) (H)
+
p
X
s=2
(ωˆ k
1,s − ωˆik
1,s)((tˆs(Zj) − E[tˆs(Zj) | Z(B)]) − (tˆk
s (Zj) − E[tˆk
s (Zj ) | Z(B),k])) (I)
Following the proof in Case 1 and Case 2, term (H) can be controlled by C ̃λ2  ̃n−2, where C ̃ is some constant > 0. Imitating the proof of Theorem 3.4’s Case 2, term (I) has the upper bound C ̃′λ ̃n−2. Combining the above gives the proof in Case 3.
G Experimental Details
G.1 The Toy Model
Simulated Dataset. For simplicity, we use simulated data with linear outcomes here. We sample latent covariates L ∼ N (0, Im) and split them into I, C, A, D. The treatment assignment depends on IC = (I, C) through π(Z) = σ(IC · wIC + ε), ε ∼ N (0, 1), with clipping to [0.1, 0.9], and T ∼ Bernoulli(π(Z)). Potential
outcomes follow f0 = (C,A)◦1w0
mC +mA + η0, f1 = (C,A)◦1w1
mC+mA + η1, where η0, η1 ∼ N (0, 0.5). We generate μ0 = f0
and μ1 = f1. Nuisance Estimators. We use linear regression to predict conditional outcomes and logistic regression to predict the propensity score. Candidate Estimators. Denote the real treatment effect as τ (X). The candidate estimators are generated by perturbing the true treatment effect τ with independent Gaussian noise, i.e. τˆi(X) = τ (X) + εi. We use different settings in Figure 1 and Figure 3.
• For the former one, ε1 ∼ N (0, 0.1), ε2 ∼ N (0.03, 0.1), ε3 ∼ N (0.03, 0.1), ε4 ∼ N (0.3, 0.1), ε5 ∼ N (0.3, 0.1), ε6 ∼ N (0.3, 0.1), ε7 ∼ N (0.3, 0.1) .
• For the latter one, ε1 ∼ N (0, 0.1), ε2 ∼ N (0.03, 0.1), ε3 ∼ N (0.03, 0.1), ε4 ∼ N (0.03, 0.1), ε5 ∼ N (0.03, 0.1) .
G.2 Dataset Details
ACIC 2016. The ACIC 2016 competition dataset [36], built upon the real-world Collaborative Perinatal Project [37], serves as a widely used benchmark for evaluating heterogeneous treatment effect estimators. It contains 55 observed covariates of diverse types with realistic dependence structures, while treatment assignments and potential outcomes are synthetically generated under multiple data-generating mechanisms. We use the R package aciccomp2016 with setting 1 to generate semi-synthetic dataset-
s. IHDP. The IHDP dataset originates from a randomized experiment conducted within the Infant Health and Development Program, which evaluated whether specialist home visits improve long-term cognitive outcomes for children. To emulate a realistic observational setting, we adopt the commonly used semi-synthetic version introduced by Hill [21], where a subset of treated individuals is removed to induce selection bias. The resulting dataset consists of 747 observations (139 treated and 608 control), -
each described by 25 pre-treatment features.
21

Following the setup of Shalit et al. [33], we generate outcomes using the “A” specification provided in the NPCI package [45]. Twins. The Twins dataset is derived from U.S. twin birth records. Within each pair, we label the heavier infant as treated (ti = 1) and the lighter one as control (ti = 0). We retain 28 parental, prenatal, and birth-related covariates from the original records and augment them with 10 additional features following the construction in [46]. The outcome is the one-year mort-
ality indicator. Restricting attention to same-sex twins with birth weights below 2000g and no missing covariates yields a cohort of 5,271 samples. Treatment assignment in the semi-synthetic setting follows
ti | xi ∼ Bern σ(w⊤xi + n) ,
where σ is the logistic function, w ∼ U ((−0.1, 0.1)38×1), and n ∼ N (0, 0.1).
22

---

## Processing Information

- **Processing Library:** Zotero PDFWorker
- **Processing Date:** 2026-02-10T18:15:52.895Z
- **Text Length:** 58041 characters
- **Success:** Text extraction completed
- **PDF Library Used:** Zotero PDFWorker
- **Pages Processed:** 22 of 22
