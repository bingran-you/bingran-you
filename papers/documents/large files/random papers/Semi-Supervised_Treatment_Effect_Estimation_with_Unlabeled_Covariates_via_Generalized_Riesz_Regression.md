# PDF Document: Kato - 2025 - Semi-Supervised Treatment Effect Estimation with Unlabeled Covariates via Generalized Riesz Regressi.pdf

**File Path:** Kato - 2025 - Semi-Supervised Treatment Effect Estimation with Unlabeled Covariates via Generalized Riesz Regressi.pdf

**Processed Date:** 2026-02-10T18:16:59.620Z

**File Size:** 644.04 KB

**Total Pages:** 33

**Extracted Pages:** 33

**PDF Library:** Zotero PDFWorker

**Attachment Item ID:** 3134

**Title:** Semi-Supervised Treatment Effect Estimation with Unlabeled Covariates via Generalized Riesz Regression

**Collection:** Large Files > Random Papers

---

## Extracted Text Content

Semi-Supervised Treatment Effect Estimation with Unlabeled
Covariates via Generalized Riesz Regression
Masahiro Kato mkato-csecon@g.ecc.u-tokyo.ac.jp
The University of Tokyo Osaka Metropolitan University
Abstract
This study investigates treatment effect estimation in the semi-supervised setting, where we can use not only the standard triple of covariates, treatment indicator, and outcome, but also unlabeled auxiliary covariates. For this problem, we develop efficiency bounds and efficient estimators whose asymptotic variance aligns with the efficiency bound. In the analysis, we introduce two different data-generating processes: the one-sample setting and the two-sample setting. The one-sample setting consi-
ders the case where we can observe treatment indicators and outcomes for a part of the dataset, which is also called the censoring setting. In contrast, the two-sample setting considers two independent datasets with labeled and unlabeled data, which is also called the case-control setting or the stratified setting. In both settings, we find that by incorporating auxiliary covariates, we can lower the efficiency bound and obtain an estimator with an asymptotic variance smaller than that without suc-
h auxiliary covariates.
1 Introduction
A core interest in causal inference is estimating treatment effects, including the average treatment effect (ATE, Imbens & Rubin, 2015). In the standard setup, we estimate such treatment effects from triples of covariates, a treatment indicator, and outcomes. As in other statistical analyses, it is highly important to gather a sufficient amount of data. While randomized controlled trials are the gold standard, they are often infeasible. Therefore, in many practical scenarios, we use observational -
data to perform causal inference. However, observational data are also not necessarily easy to collect. In particular, treatment variables and the corresponding outcomes are often costly, whereas covariates are usually easy to gather.
Under this practical scenario, we consider estimating ATEs more accurately using auxiliary unlabeled covariates, even when treatment variables and outcomes are missing. This setting corresponds to semisupervised learning in machine learning, where we utilize both labeled and unlabeled data (Chapelle et al., 2006). In many applications, such unlabeled covariates are easy to gather. For example, in the United States, we may aim to estimate the ATE for the effect of a new scholarship. Although we may-
 know the covariates for an enormous number of students, we can assign treatment, scholarship, to only a limited number of them. In such cases, we aim to estimate the ATE more accurately by using the unlabeled covariates.
We find that, under appropriate conditions, using unlabeled data allows us to construct an ATE estimator whose asymptotic variance, or equivalently, asymptotic mean squared error (MSE), is smaller than that of an estimator that ignores unlabeled data, as shown by Hahn (1998). To support this finding, we develop an asymptotic efficiency bound, a lower bound on the asymptotic variance, when using unlabeled covariates, propose ATE estimators, and show that the resulting asymptotic variances match the-
 efficiency bound. In the methodological and theoretical arguments, we consider two practical scenarios, called the one-sample and two-sample scenarios. In the one-sample scenario, we interpret the unlabeled covariates as part of a dataset with missing variables, outcomes and the treatment indicator. In the two-sample scenario, we assume that labeled and unlabeled data are two independent datasets.
1
arXiv:2511.08303v1 [stat.ML] 11 Nov 2025

Our efficient ATE estimators are developed based on the efficient influence function implied by the efficiency bound. This object is also called a Neyman orthogonal score in the debiased machine learning literature (Chernozhukov et al., 2018). The Neyman orthogonal scores include nuisance parameters, regression functions and a Riesz representer, which must be estimated before obtaining the ATE estimators. For the Riesz representer estimation, we employ generalized Riesz regression in Kato (2025b;-
a), which generalizes the Riesz regression in Chernozhukov et al. (2021). We further extend generalized Riesz regression to the semi-supervised setting.
We list our contributions as follows:
• We develop efficiency bounds for regular ATE estimators in this setting, which also yield Neyman orthogonal scores.
• We construct an asymptotically efficient estimator using the Neyman orthogonal scores.
• We extend generalized Riesz regression for estimating nuisance parameters, including the Riesz representer and regression functions.
Related work. The related topics of this study include debiased machine learning, efficiency under the two-sample case (stratified sampling scheme), treatment effect estimation with missing values, density-ratio estimation, and semi-supervised learning.
In treatment effect estimation, we typically aim to attain the √n-rate with the smallest asymptotic variance, or equivalently, asymptotic MSE. We provide an efficiency bound, which is a lower bound on the asymptotic variance among regular estimators. As discussed in Uehara et al. (2020), when there are two independent datasets, we cannot apply the usual efficiency bounds developed for a single dataset. To derive efficiency bounds in such settings, existing studies employ the efficiency theory unde-
r the stratified sampling scheme (Wooldridge, 2001). Using this scheme, efficiency bounds have been proposed for various settings, including multiple log data, active learning, and learning from positive and unlabeled data. This study also employs this technique to develop efficiency bounds.
The efficiency bounds are derived from the efficient influence functions. Certain efficient influence functions take forms that allow the removal of bias caused by the estimation errors of the nuisance parameters. Debiased machine learning is a framework for estimating treatment effects by utilizing such properties (Chernozhukov et al., 2018). We refer to efficient influence functions with these properties as Neyman orthogonal scores. Chernozhukov et al. (2022b) reframes this framework by characte-
rizing Neyman orthogonal scores using the Riesz representer. Chernozhukov et al. (2021) proposes Riesz regression, an end-to-end method for estimating the Riesz representer. Kato (2025a;b) propose generalized Riesz regression by regarding the Riesz representer estimation problem as Bregman divergence minimization (Sugiyama et al., 2011).
This study generalizes treatment effect estimation under covariate shift (Uehara et al., 2020; Kato et al., 2024) and in the positive-unlabeled (PU) learning setup (Kato et al., 2025). PU learning is a classical problem, originally studied in Imbens & Lancaster (1996), and recently reframed by du Plessis et al. (2015) as a modern statistical machine learning framework. Our sampling scheme arguments are significantly inspired by the works in this literature.
This study is also related to semi-supervised regression, as studied in Azriel et al. (2022) and Kawakita & Kanamori (2013), (Horvitz & Thompson, 1952), and treatment effect estimation with missing values, as studied in Heckman (1974), Robins et al. (1994), and Kennedy (2020). Note, however, that our setting is different from these and more closely related to the literature mentioned in the previous paragraphs.
2 Problem Setting
In this section, we formulate our problem setting. We define potential outcomes and observations separately by following the Neyman–Rubin causal model (Neyman, 1923; Rubin, 1974). Then, we discuss estimating the ATE from the observations.
2

2.1 Potential Outcomes
There is a binary treatment d ∈ {1, 0}. Let us define the corresponding potential outcome by Y (d). Let X ∈ X ⊂ Rk be a k-dimensional covariate, where X is the space. For each d ∈ {1, 0}, assume that the conditional distribution of Y (d) given X has its density, and let rY (d),0(y(d) | X) be the probability density function.
2.2 Average Treatment Effect
This study focuses on the estimation of the average treatment effect, which is the expected value of Y (1)−Y (0). We take the expectation over a distribution whose covariate probability density is given by
κ0(x).
We call it the evaluation covariate density. This density function can differ from p0(x). We make the assumptions for κ0(x) in the following sections.
Under a given covariate density κ0(x), the ATE is defined as follows:
τ0 := Eκ0
[Y (1) − Y (0)] :=
∫
yrY (1),0(y | x)κ0(x)dydx −
∫
yrY (0),0(y | x)κ0(x)dydx,
where Eκ0 [·] denotes the expectation taken over the distribution whose covariate density is κ0(x).
2.3 Observation
This section defines the sample, that is, observations of X, D, and Y . To define observations rigorously, we need to consider the censoring setting carefully. To discuss data augmentation within the theory of semiparametric efficiency, we introduce two DGPs. The first DGP is the one-sample scenario, where there is only one dataset, and in this dataset, we randomly choose units who are assigned to treatment or control, that is, units whose outcomes we can observe. We also refer to this setting as -
the censoring setting. The second DGP is the two-sample scenario, where there are two independent datasets; one of the datasets contains data with covariates, treatment indicator, and outcomes, while the other only contains covariates. We also refer to this setting as the case-control setting or the stratified sampling scheme. We define these two DGPs below.
One-sample scenario. In the one-sample scenario, we observe a single dataset D, defined as follows:
D :=
{
(Xi, Oi, D ̃i, Y ̃i
)
}n
i=1
with (Xi, Oi, D ̃i, Y ̃i
) i.i∼.d p0(x, o, d ̃, y ̃).
where Oi ∈ {1, 0} is an observation indicator, D ̃i ∈ {1, 0, NA}, and Y ̃i is the observable treatment indicator and outcome, defined as
D ̃i := 1[Oi = 1]Di + 1[Oi = 0]NA,
Y ̃i := 1[Oi = 1]Yi + 1[Oi = 0]NA,
Di ∈ {1, 0} is a treatment indicator, and Yi is the outcome defined as
Yi := 1[Di = 1]Yi(1) + 1[Di = 0]Yi(0).
Here, NA denotes a missing value. Equivalently, we can write Y ̃i as
Y ̃i = 1[Oi = 1, D ̃i = 1]Yi(1) + 1[Oi = 1, D ̃i = 0]Yi(0) + 1[Oi = 0]NA.
In this setting, we assume p0(x) = κ0(x).
Note that D ̃ and Y ̃ are observable, while Yi and Di are not observable when Oi = 0.
3

Figure 1: Illustration of the one-sample and two-sample scenarios.
Two-sample scenario In the two-sample scenario, we observe two stratified datasets, DL and DU:
DL := {(Xj, Dj, Yj
)}m
j=1 with (Xj , Dj , Yj
) i.i∼.d p0(x, d, y) and
DU := {Zk}l
k=1 with (Zk
) i.i∼.d q0(x),
where m and l are the sample sizes of each dataset, and Yj is the observed outcome defined as
Yj = 1[Dj = 1]Yj(1) + 1[Dj = 0]Yj(0),
and Dj ∈ {1, 0} is a treatment indicator.
Difference between the two settings We show an illustration that demonstrates the difference between the one-sample and two-sample scenarios in Figure 1. In both settings, we can identify and estimate the ATE in the standard way if we ignore the unlabeled auxiliary covariates. That is, in the one-sample scenario, we can estimate the ATE only by using D, while in the two-sample scenario, we can estimate the ATE only by using DL. However, we demonstrate that by using the unlabeled auxiliary covariat-
es, we can reduce the asymptotic variance effectively.
A summary of the differences is provided below:
One-sample scenario: A single dataset is observed, where some observations do not include the treatment and outcome variables (i.e., contain only unlabeled covariates).
Two-sample scenario: Two separate datasets are observed: one consists of fully labeled data, and the other contains only unlabeled covariates.
Remark (PU learning). Our terminology of the censoring and case-control settings comes from that in PU learning (Niu et al., 2016). In both settings, the goal is to learn a conditional class probability or a classifier using only positive and unlabeled data. In censoring PU learning, we consider one dataset from which labeled data are observed (Elkan & Noto, 2008). In case-control PU learning, we assume that there exist two independent datasets, one labeled and the other unlabeled (du Plessis et a-
l., 2015). The case-control PU learning setting is also studied in Imbens & Lancaster (1996).
Notations and Assumptions
Throughout this study, let P (R) denote the distribution of a random variable R. For simplicity, we assume that the distribution P (R) of a continuous random variable R has a probability density, whose notation depends on the random variable. For a probability density or mass function p, we denote the expectation over p by Ep[·]. If the dependence is clear from the context, we omit p and simply denote it as E[·]. Similarly, let Var( · ) be the variance operator. Let us denote the true mean and var-
iance of Y (d) conditioned on X = x ∈ X by μ0(d, x) = E[Y (d) | X = x] and σ02(d, x) = Var(Y (d) | X = x), respectively.
We make the following regularity assumption.
4

Assumption 2.1. There exist constants C and C such that 0 < C < C < ∞ and for any x ∈ X ,
∣
∣μ0(d, x)∣
∣ < C and C < σ02(d, x) < C hold.
3 One-Sample Scenario
First, we consider the one-sample setting for the DGP, which is also referred to as the censoring setting. We redefine the DGP with its notations and assumptions in Section 3.1. Then, for this DGP, we develop an efficiency bound in Section 3.2. We propose our estimator in Section 3.3 and show consistency in Section 3.5 and asymptotic normality in Section 3.6.
3.1 Notation and Assumption
This section introduces and summarizes the notations and assumptions, while recapping the DGP of the one-sample scenario. As defined in Section 2, the DGP of this scenario is
D :=
{(
Xi, Oi, D ̃i, Y ̃i
)}n
i=1
with
(
Xi, Oi, D ̃i, Y ̃i
)
∈ X × {1, 0} × {1, 0, NA} × {Y ∪ NA} i.i∼.d p0(x, o, d ̃, y ̃).
Let π0(o | X) = p(O = o | X) be the probability of observation O = o, e0(d | X) = P (D = d | X, O = 1) be the propensity score defined in the observed samples, and let g0(a | X) = P (O = 1, D = a | X) = e0(a | X)π0(1 | X) be the joint probability of O = 1 and D = d. Under this notation, the probability density p0(x, o, d ̃, y ̃) is written as
p0(x, o, d ̃, y ̃) =
p0(x)
(
π0(0 | X)
)1[o=0](
g0(1 | x)rY (1),0(y ̃ | x)
)1[
o=1,d ̃=1
] (
g0(0 | x)rY (0),0(y ̃ | x)
)1[
o=1,d ̃=0
]
,
For simplicity, we assume that the evaluation density κ0(x) is the marginal density of the covariates.
Assumption 3.1 (Evaluation density in the one-sample scenario). The evaluation density κ0(x) is given as κ0(x) = p0(x).
We also make the following assumptions.
Assumption 3.2 (Unconfoundedness and missing at random (MAR)). It holds that (Y (1), Y (0))
|=
D|X (unconfoundedness) and (Y (1), Y (0))
|=
O | X (MAR).
Assumption 3.3 (Common support). There exists a universal constant 0 < ε < 1/2 such that for all d ∈ {1, 0}, ε < g0(d | X) ≤ 1 − ε holds almost surely.
Note that this assumption also implies the existence of a universal constant 0 < ε′ < 1/2 such that ε′ < π0(1 | X).
3.2 Efficiency Bound
First, we derive the efficiency bound for regular estimators, which provides a lower bound on asymptotic variances. The efficiency bound is characterized via the efficient influence function (van der Vaart, 1998), derived as follows (proof is provided in Appendix B):
Lemma 3.1. Suppose that Assumptions 3.1–3.3 hold. Then, the efficient influence function is given as
ψOS(Xi, Oi, D ̃i, Y ̃i; μ0, g0, τ0
),
where
ψOS(Xi, Oi, D ̃i, Y ̃i; μ0, g0, τ0
) := SOS(Xi, Oi, D ̃i, Y ̃i; μ0, g0
) − τ0
SOS(Xi, Oi, D ̃i, Y ̃i; μ0, g0
) := 1[Oi = 1, D ̃i = 1](
Y ̃i − μ0(1, Xi))
g0(1 | X) − 1[Oi = 1, D ̃i = 0](
Y ̃i − μ0(0, Xi))
g0(0 | X)
+ μ0(1, Xi) − μ0(0, Xi).
5

Recall that g0(d | X) = π0(1 | X)e0(d | X). The following proposition is Theorem 25.20 in van der Vaart (1998), which connects the efficient influence function to the efficiency bound.
Proposition 3.2 (Theorem 25.20 in van der Vaart (1998).). Let R be some random variable, and M be a model of its DGP. The (semiparametric) efficient influence function ψ(R) is the gradient of θ with respect to the model M, which has the smallest L2-norm. It satisfies that for any regular estimator ̂θ of a parameter of interest θ0 regarding a given parametric submodel, AMSE(
̂θ) ≥ Var(ψ(R)), where AMSE(
̂θ) is the second
moment of the limiting distribution of √n
(
̂θ − θ0
)
.
Using this proposition, we can derive the following efficiency bound from Lemma 3.1.
Theorem 3.3 (Efficiency bound in the one-sample scenario). If Assumptions 3.1–3.3 hold, then the asymptotic variance of any regular estimator is lower bounded by
V OS := E
[
ψOS (
X, O, D ̃, Y ̃ ; μ0, g0, τ0
)2]
=E
[ σ02(1, X)
g0(1 | X) + σ02(0, X)
g0(0 | X) +
(
τ0(X) − τ0
)2]
,
where τ0(X) := E[Y (1) − Y (0) | X] is the conditional ATE.
Here, note that the efficient influence function depends on the unknown μ0, g0, which are referred to as nuisance parameters. Since the efficient influence function satisfies the equation E [ψOS(X, O, Y ; μ0, g0, τ0)] = 0, if the nuisance parameters are known and the exact expectation is computed, we can obtain τ0 by solving for τ0 that satisfies this equation. Thus, the efficient influence function provides significant insights for constructing an efficient estimator. Furthermore, the accuracy of-
 the estimation of the nuisance parameters affects the estimation of τ0, the parameter of interest.
3.3 ATE Estimator
Based on the efficient influence function, we propose an ATE estimator defined as
τ ̂ OS-eff
n := 1
n
n
∑
i=1
SOS (
Xi, Oi, D ̃i, Y ̃i;μ̂ n,ig, ̂ n,i
)
,
whereμ̂ n,i andĝ n,i are estimators of μ0 and g0. Note that the estimators can depend on i. This estimator is an extension of the augmented inverse probability weighting estimator, also called a doubly robust estimator (Bang & Robins, 2005). We say that an estimator is efficient if its asymptotic variance aligns with V OS.
For estimating the regression function μ0, we can employ methods for conditional ATE estimation (Wager & Athey, 2018; Curth & van der Schaar, 2021; Kennedy et al., 2024), as well as standard regression methods using parametric or nonparametric models (Tsybakov, 2008; Schmidt-Hieber, 2020). We can also use targeted maximum likelihood estimation to refine this estimation (van der Laan & Rose, 2011).
For estimating g0, we can use logistic regression or other advanced methods, such as the covariate balancing propensity score (Imai & Strauss, 2011; Hainmueller, 2012) and Riesz regression (Chernozhukov et al., 2021). As Zhao (2019), Bruns-Smith et al. (2025), and Kato (2025a) show, Riesz regression and covariate balancing methods are in a dual relationship, and Riesz regression can be interpreted as a special case of density ratio estimation (Kato, 2025d). For details, see Section 3.4 and Appendi-
x A.
3.4 Generalized Riesz Regression
We explain how to construct estimators forg0. In this study, we employ generalized Riesz regression, also referred to as Bregman-Riesz regression (Kato, 2025a;b). In the efficient estimation of causal parameters, Neyman orthogonal scores play an important role and typically correspond to the efficient score. Specifically, asymptotically efficient estimators must be asymptotically linear with respect to the Neyman orthogonal scores. When the parameter of interest is linear in the regression functio-
ns, the Neyman orthogonal score can be decomposed into the Riesz representer and regression functions. In our framework, the Neyman orthogonal score is given by
ψOS(Xi, Oi, D ̃i, Y ̃i; μ0, α0, τ0
) := α0
(
Oi, D ̃i, Xi
)(
Y ̃i − μ0
(
D ̃i, Xi
))
+ μ0(1, Xi) − μ0(0, Xi) − τ0,
6

where we replace g0 with α0 in the original definition of ψOS, and α0
(
Oi, D ̃i, Xi
)
:= 1[Oi=1,D ̃i=1]
g0(1|Xi) −
1[Oi =1,D ̃i =0]
g0(0|Xi) is the Riesz representer. Riesz regression, as proposed by Chernozhukov et al. (2021), is a method for estimating the Riesz representer in an end-to-end manner. Kato (2025a) shows that Riesz regression is a specific instance of density ratio estimation and can be generalized via Bregman divergence minimization (Sugiyama et al., 2011). Kato (2025b) further reformulates and extends this approach as direct debiased machine learning (DDML) via generalized Riesz regression.
Generalized Riesz regression. Generalized Riesz regression estimates α0 by minimizing the Bregman divergence between the true Riesz representer α0 and its model α. That is, the estimation error of α0 is measured using the Bregman divergence. For a twice differentiable convex function f with bounded derivative, the population objective for Riesz representer estimation is written as
BDf (α) := (1)
E
[
1[O = 1]∂f
(
α
(
O, D ̃, X
))
α
(
O, D ̃, X
)
−f
(
α
(
O, D ̃, X
))
−
(
∂f (α (1, 1, X)) − ∂f (α (1, 0, X))
)]
.
(2)
The empirical counterpart ̂BDf (α) replaces expectations with sample averages. Here, we used τ0 =
E
[
E
[
Y ̃ | O = 1, D ̃ = 1, X
]
−E
[
Y ̃ | O = 1, D ̃ = 0, X
]]
. Minimizing this objective over a hypothesis class A
yields an estimator of α0, that is,
α̂ GRR := arg min
α∈A
̂BDf (α),
where GRR denotes generalized Riesz regression.
The use of generalized Riesz regression allows us to naturally incorporate unlabeled covariates into the estimation of the Riesz representer. This is because, in equation 1,
we can approximate E
[(
∂f (α (1, 1, X)) − ∂f (α (1, 0, X))
)]
using unlabeled covariates, whereas
E
[
∂f
(
α
(
O, D ̃, X
))
α
(
O, D ̃, X
)
−f
(
α
(
O, D ̃, X
))]
requires labeled data. That is,
̂BDf (α) := 1
n
n
∑
i=1
1[Oi = 1]∂f
(
α
(
Oi, D ̃i, Xi
))
α
(
Oi, D ̃i, Xi
)
−f
(
α
(
Oi, D ̃i, Xi
))
−1
n
n
∑
i=1
(
∂f (α (1, 1, Xi)) − ∂f (α (1, 0, Xi))
)
,
where the second term can be evaluated using both labeled and unlabeled data. Note that unlabeled covariates can be utilized even when g0 is estimated via maximum likelihood. However, the generalized Riesz regression approach is arguably more appropriate in an end-to-end formulation. Also see Kawakita & Kanamori (2013).
Let A denote the model class for α0. If we set f (α) = (α − 1)2, then
BDLSIF
(α) := E
[
−2(α (1, 1, X) − α (1, 0, X) ) + 1[O = 1]α
(
O, D ̃, X
)2]
.
This population objective corresponds to Riesz regression as in Chernozhukov et al. (2021). We refert to this objective as least squares Riesz (LS-Riesz) regression.
Now, redefine A as the set of α such that α(1, 1, ·) > 1 and α(1, 0, ·) < −1, a condition that should hold under the common support assumption. For f (α) = (|α| − 1) log(|α| − 1) + |α| (α ∈ A), the corresponding Bregman divergence is
BDUKL
(α) := E
[
1[O = 1]
(
log
(∣
∣
∣α
(
O, D ̃, X
)∣ ∣
∣−1
)
+
∣
∣
∣α
(
O, D ̃, X
)∣ ∣ ∣
)
− log (α(1, 1, X) − 1) − log ( − α(1, 0, X) − 1)
]
.
7

We refer to this objective as Kullback-Leibler Riesz (KL-Riesz) regression, since the choice of f makes yields the KL divergence.
By replacing the expectations with the sample mean and minimizing the empirical objective for α, we can estimate α0.
Interpretation. As Kato (2025b) discusses, LS-Riesz regression corresponds to the stable balancing weights proposed in Zubizarreta (2015), and KL-Riesz corresponds to the entropy balancing weights in Hainmueller (2012). These correspondences were originally shown in the covariate balancing literature, such as in Zhao (2019) and Bruns-Smith et al. (2025). They can be derived from duality relationships.
Note that the duality depends on the model class used for α0, namely A. For the duality between LS-Riesz and stable balancing weights, linear models must be used for A, whereas for the duality between KL-Riesz and entropy balancing weights, logistic models for α0 are required.
3.5 Consistency and double robustness
First, we prove the consistency result, that is,τ ̂ OS-eff
n
−p→ τ0 holds as n → ∞. We can obtain this result relatively easily compared to asymptotic normality. We make the following assumption, which holds for most estimators of the nuisance parameters.
Assumption 3.4. There exist universal constants ε ∈ (0, 1/2), C ∈ (0, ∞) such thatĝ n,i(a | X) ∈ (ε, 1 − ε) andμ̂ n,i(d | X) ∈ [−C, C] hold almost surely. As n → ∞, either of the following holds for all i ∈ {1, 2, . . . , n}:
∥
∥μ̂ n,i − μ0
∥
∥2 = op(1) or ∥
g∥̂ n,i − g0
∥
∥2 = op(1).
Then, the following consistency result holds. This result is given as a special case of Theorem 3.5; therefore, we omit the proof.
Theorem 3.4 (Consistency in the one-sample setting). If Assumptions 3.1–3.3, and 3.4 hold, thenτ ̂ OS-eff
n
−p→ τ0 holds as n → ∞.
This consistency structure is referred to as double robustness.
3.6 Asymptotic Normality
Next, we establish the asymptotic normality of our estimator. Unlike consistency, this requires stronger assumptions on the nuisance estimators, especially for the propensity score.
To prove asymptotic normality or √n-consistency, we must control the complexity of the nuisance parameter estimators. One simple approach is to assume the Donsker condition; however, it is well known that this condition often fails in high-dimensional regression settings. In such cases, asymptotic normality can still be attained using sample splitting, a common technique in this field (Klaassen, 1987), which has recently been refined by Chernozhukov et al. (2018) as cross-fitting.
Cross-fitting. We estimate μ0 and g0 using cross-fitting. Cross-fitting is a variant of sample splitting (Chernozhukov et al., 2018). We randomly partition D into L > 0 folds (subsamples), and for each fold b ∈ L := {1, 2, . . . , L}, the nuisance parameters are estimated using all other folds. Let the estimators for fold
b ∈ L be denoted byμ̂ (b)
n andĝ (b)
n . Let I(b) be the index set of samples belonging to fold b.
Various estimation methods may be used, including neural networks and Lasso, as long as they satisfy the convergence rate conditions in Assumption 3.5. The pseudocode is shown in Algorithm 3.6.
Asymptotic normality. We present results for the case with cross-fitting, but similar results hold under the Donsker condition.
We make the following assumptions:
Assumption 3.5. For each b ∈ L, as n → ∞, the following hold:
8

Algorithm 1 Cross-fitting in the one-sample scenario
Input: Observations D :=
{(
Xi, Oi, D ̃i, Y ̃i
)}n
i=1
, number of folds L, and estimation methods for μ0 and
g0. Let I = {1, 2, . . . , n} be the index set. Randomly split I into L roughly equal-sized folds, (I(b))b∈L. Note that ⋃
b∈L I(b) = I. for b ∈ L do
Set the training data as I(−b) = {1, 2, . . . , n} \ I(b).
Construct estimators of the nuisance parameters on I(−b), denoted byμ̂ (b)
n andĝ (b)
n. end for
Output: Obtain an ATE estimateτ ̂ OS-eff
n usingμ̂ (b)
n andĝ (b)
n.
•
∥
∥μ0(a, X) −μ̂ (b)
n,i(a, X)∥
∥2 = op(1) and ∥
∥g0(a | X) −ĝ (b)
n,i(a | X)∥
∥2 = op(1).
•
∥
∥μ0(a, X) −μ̂ (b)
n (a, X)∥
∥2 · ∥
∥g0(a | X) −ĝ (b)
n,i(a | X)∥
∥2 = op(n−1/2) for a ∈ {1, 0}.
We define the estimator as
τ ̂ OS-eff
n := 1
n
∑
b∈L
∑
i∈I (b)
SOS (
Xi, Oi, D ̃i, Y ̃i;μ̂ (b)
n g, ̂ (b)
n
)
and show that the asymptotic normality holds as follows:
Theorem 3.5 (Asymptotic normality in the one-sample scenario). Consider the one-sample scenario. Suppose
Assumptions 3.1–3.3 and 3.5 hold; that is,μ̂ n,i =μ̂ (b)
n andĝ n,i =ĝ (b)
n are constructed via cross-fitting with suitable convergence rates. Then,
√n (
τ ̂ OS-eff
n − τ0
) −d→ N (0, V OS) as n → ∞.
The proof is provided in Appendix C. The asymptotic variance ofτ ̂ OS-eff
n matches the efficiency bound.
Therefore, Theorem 3.5 also implies thatτ ̂ OS-eff
n is asymptotically efficient.
We now discuss alternative ATE estimators.
Remark (Inefficiency of the Inverse Probability Weighting (IPW) estimator). The IPW estimator is defined as
τ ̂ OS-IPW
n := 1
n
n
∑
i=1
(
1[Oi = 1, D ̃i = 1]Y ̃i
ĝ n,i(1 | Xi) − 1[Oi = 1, D ̃i = 0]Y ̃i
ĝ n,i(0 | Xi)
)
.
Unlike our proposed efficient estimator, this estimator does not use the conditional outcome estimators (Horvitz & Thompson, 1952). When g0 and π0 are known, it is unbiased. However, it suffers from a large asymptotic variance:
V IPW := E
[ E[Y (1)2 | X]
g0(1 | X) + E[Y (0)2 | X]
g0(0 | X)
]
.
Here, V IPW ≥ V OS, with equality when μ0(d, x) is zero for all x. Thus, the IPW estimator is inefficient relative toτ ̂ OS-eff
n . Moreover, if π0 is unknown, stronger assumptions are needed to establish asymptotic normality compared to our efficient estimator.
Remark (Regression Adjustment (RA) estimator). Another alternative is the RA estimator, defined as
τ ̂ OS-RA
n := 1
n
n
∑
i=1
μ̂ n,i(1, Xi) −μ̂ n,i(0, Xi),
also known as the naive plug-in or direct method estimator. Its asymptotic normality heavily depends on the estimatorsμ̂ n,i.
9

4 Two-Sample Scenario
Next, we consider the two-sample scenario for the DGP, which is also referred to as the case-control setting and stratified sampling scheme. We reintroduce the notation and assumptions required for our analysis in Section 4.1. Section 4.2 presents the efficiency bound, and Section 4.3 provides an ATE estimator under this setting. We establish consistency in Section 4.4 and asymptotic normality in Section 4.5. Finally, we compare the one-sample and two-sample scenarios in Section 4.6.
4.1 Notation and Assumptions
As introduced in Section 2, the DGP for the two-sample scenario is defined as
DL := {(Xj, Dj, Yj
)}m
j=1 with (Xj , Dj , Yj
) ∈ X × {1, 0} × Y i.i∼.d p0(x, d, y),
DU := {Zk}l
k=1 with Zk ∈ X i.i∼.d q0(x),
Let e0(d | X) = p(D = d | X) denote the propensity score. Then, the joint density p0(x, d, y) can be written as
p0(x, d, y) = p0(x)
(
e0(1 | x)rY (1),0(y | x)
)1[d=1](
e0(0 | x)rY (0),0(y | x)
)1[d=0]
.
For the evaluation density, we make the following assumption.
Assumption 4.1 (Evaluation density in the two-sample scenario). There exists β ∈ [0, 1] such that
κ0(x) = κ0,β(x) = βp0(x) + (1 − β)q0(x).
Define the set of such β values as
B := {β ∈ [0, 1) | κ0(x) = βp0(x) + (1 − β)q0(x) almost surely} .
In addition, for all x ∈ X such that p0(x) > 0, κ0(x) > 0 holds.
We assume β < 1 so that efficiency can be gained by using the unlabeled covariates. If β = 1, it merely indicates that only the labeled covariates are informative for ATE estimation.
We also impose the following assumptions.
Assumption 4.2 (Unconfoundedness). The potential outcomes satisfy (Y (1), Y (0))
|=
D | X.
Assumption 4.3 (Common support). There exists a universal constant 0 < ε < 1/2 such that ε < e0(1 | x) < 1 − ε.
4.2 Efficiency Bound
Let p0(d, x) denote the joint density of (D, X). Define the following quantity:
v0,β(d, x) := e0(d | X) p0(x)
κ0,β(x) = p0(d, x)
κ0,β(x) ,
where note that e0(d | x) = p0(d,x)
p0(x) .
Following Uehara et al. (2020), we derive the efficiency bound using the efficiency arguments under the two-sample scenario (stratified sampling scheme). In this scheme, there appear two efficient influence functions for DL and DU, respectively. The proof is provided in Appendix D.
Lemma 4.1. If Assumptions 4.1–4.3 hold, then the efficient influence functions are given by ψ(X,D,Y ) and ψX (Xi; μ0, τ0), where
ψ(X,D,Y )(Xi, Di, Yi; μ0, v0,β ) := STS
(X,D,Y ) (Xi, Di, Yi; μ0, v0,β ) ,
10

ψX (Xi; μ0, τ0) := STS
(X)(Xi; μ0) − τ0,
S TS
(X,D,Y )(Xi, Di, Yi; μ0, v0,β) := 1[Di = 1](Yi − μ0(1, Xi))
v0,β(1, Xi) − 1[Di = 0](Yi − μ0(0, Xi))
v0,β(0, Xi) ,
S TS
(X)(Xi; μ0) := μ0(1, Xi) − μ0(0, Xi).
As in the one-sample scenario, the efficient influence function directly yields the following efficiency bound.
Theorem 4.2 (Efficiency bound in the two-sample scenario). Let N = m+l, where m = αN and l = (1−α)N for some
α ∈ (0, 1)
. If Assumptions 4.1–4.3 hold, then the asymptotic variance of any regular estimator is lower bounded by
V TS(β) := 1
α E [ψ(X,D,Y )(X, D, Y ; μ0, v0,β)2] + 1
1 − α E [ψX (X; μ0)2]
=1
α Ep0
[
( σ02(1, X)
e0(1 | X) + σ02(0, X)
e0(0 | X)
) ( κ0,β(X) p0 (X )
)2]
+ β2
α Ep0
[ (
τ0(X) − τ0
)2]
+ (1 − β)2
1 − α Eq0
[ (
τ0(X) − τ0
)2]
,
where β∗ ∈ arg minβ∈B V TS(β) and α = m/N .
For simplicity, throughout this study, we assume that β∗ is known. This assumption is justified because the evaluation density κ0,β is selected by the researcher, and for specific choices, β∗ becomes evident. For example, if p0 = q0, then β∗ = α holds.
In some situations, it may be necessary to estimate β∗ empirically using V TS(β). In such cases, the convergence rate of the estimator for β∗ can affect the asymptotic normality results presented below. If β∗ is estimated solely from the available samples, the asymptotic normality may fail to hold due to the slow convergence rate. However, if additional information allows us to accelerate the convergence, the asymptotic results can be preserved. Since the feasibility of such acceleration depends o-
n the specific application, we omit further details.
4.3 ATE Estimator
Based on the efficient influence function, we define the estimator as
τ ̂ TS-eff
n := 1
m
m
∑
j=1
S TS
(X,D,Y )
(Xj, Dj, Yj;μ̂v, ̂ ) + β∗ 1
m
m
∑
j=1
S TS
(X )
(Xj;μ̂ ) + (1 − β∗) 1
l
l
∑
k=1
S TS
(X )
(Zk;μ̂ ).
Here,μ̂ andv̂ β denote estimators of μ0 and v0,β, where m and l indicate their dependence on each dataset. As in the one-sample setting, these estimators depend on m, l, j, and k. However, compared to the one-sample setting, there are more indices involved, which makes the expressions more complicated. Therefore, we suppress the indices whenever their dependence is clear from the context. Unlike in the one-sample scenario, we do not use the observation indicator O, since it is deterministically kn-
own whether a unit belongs to the treatment or control group. This distinction leads to theoretical differences from the one-sample scenario.
4.4 Consistency
We impose the following assumption.
Assumption 4.4. As m, l → ∞, it holds that ∥
∥μ̂ − μ 0
∥
∥2 = op(1) or ∥
v∥̂ β − v0,β
∥
∥2 = op(1).
Then, the following consistency result holds.
Theorem 4.3 (Consistency in the two-sample scenario). If Assumptions 4.1–4.4 hold, thenτ ̂ TS-eff
n
−p→ τ0 as n → ∞.
11

4.5 Asymptotic Normality
Next, we establish the asymptotic normality of the estimator.
Assumption 4.5. For each b ∈ L, as m, l → ∞, the following hold: for each d ∈ {1, 0},
∥
∥μ0(d, X) −μ̂ (b)(d, X)∥
∥2 = op(1), and ∥
∥v0,β(d | X) −v̂ (b)
β (d | X)∥
∥2 = op(1),
∥
∥μ0(d, X) −μ̂ (b)(d, X)∥
∥2
∥
∥v0,β(d | X) −v̂ (b)
β (d | X)∥
∥2 = op(1/√min{m, l})
We now establish asymptotic normality in the following theorem, with the proof provided in Appendix E. In this result, we consider the asymptotic regime where the sample sizes m and l approach infinity while maintaining a fixed ratio m : l = α : (1 − α).
Theorem 4.4 (Asymptotic normality in the two-sample scenario). Let N = m + l. Fix α ∈ (0, 1). For n > 0, consider the two-sample scenario with sample sizes m, l such that m = αN and l = (1 − α)N . Suppose that Assumptions 4.1–4.4 and 4.5 hold; that is,μ̂ =μ̂ (b) andv̂ =v̂ (b) are consistent estimators constructed via cross-fitting. Also assume that β∗ is known. Then,
√ N
(
τ ̂ TS-eff
n − τ0
) −d→ N (0, V TS(β∗)) as n → ∞.
Thus, the proposed estimator is efficient with respect to the efficiency bound derived in Theorem 4.2.
Corollary 4.5. If p0(X) = q0(X) almost surely, then β∗ = α, and
V TS(β∗) = N
m
[
( σ02(1, X)
e0(1 | X) + σ02(0, X)
e0(0 | X)
) ( κ0,β(X) p0 (X )
)2]
+ Ep0
[ (
τ0(X) − τ0
)2]
.
4.6 Comparison with the One-Sample Scenario
The difference between the one-sample and two-sample scenarios appears in the formulation of ATE estimators, the setup of Riesz regression, and the corresponding efficiency arguments. In addition, as introduced in Section 5, they lead to different approaches when the amount of unlabeled covariate data far exceeds the amount of labeled data.
5 Infinitely Many Unlabeled Data
In many applications, we often have access to infinitely many unlabeled data points, as they are less costly to collect than fully labeled ones. This section extends the previously discussed methods to the case where the sample size of the unlabeled data grows much faster than that of the labeled data.
Remark. The idea behind the proposed method in this section is to modify the normalization and asymptotic framework in order to establish asymptotic normality. The methods discussed here are also related to those proposed in Hadad et al. (2021) and Zhan et al. (2024). In those works, the authors consider estimating treatment effects (policy values) using data collected via multi-armed bandits and construct an estimator based on a weighted average of score functions, where the weights are chosen to-
 ensure asymptotic normality even when the sample size for suboptimal arms (treatments) converges to zero at a certain rate. Although their setting, methodology, and theoretical framework differ from ours, we share certain conceptual ideas with their approaches.
5.1 One-Sample Scenario
In the one-sample scenario, estimation with infinitely many unlabeled data points corresponds to the case where nU := ∑n
i=1 1[Oi = 0] diverges much faster than nL := ∑n
i=1 1[Oi = 1]. We consider an asymptotic framework where we first let nU → ∞ with nL fixed, and then let nL → ∞, while normalizing the ATE
estimator by √nL.
We do not directly consider asymptotics with respect to n. Instead, we examine the limits of ∑n
i=1 1[Oi =
0] → ∞ and ∑n
i=1 1[Oi = 1] → ∞ separately, as stated in the following theorem.
12

Corollary 5.1. Assume the same conditions as in Theorem 3.5. Let nU = ∑n
i=1 1[Oi = 0] → ∞ with fixed
nL = ∑n
i=1 1[Oi = 1]. Then, as √nL → ∞, we have
√nL
(
τ ̂ OS-eff − τ0
) −d→ N (0, V ̃ OS),
where V ̃ OS := E
[ σ2
0 (1,X)
g0(1|X) + σ2
0 (0,X) g0 (0|X )
]
.
5.2 Two-Sample Scenario
In the two-sample scenario, for the independent datasets DL = {(Xj, Dj, Yj
)}m
j=1 and DU = {Zk}l
k=1, we first let l → ∞, and then let m → ∞. Under this asymptotic regime, we obtain the following result.
Corollary 5.2. Assume the same conditions as in Theorem 4.4. Let l → ∞, followed by m → ∞. Then, as n → ∞, we have
√m (
τ ̂ TS-eff
n − τ0
) −d→ N
(
0, V ̃ TS)
,
where V ̃ TS := Ep0
[
( σ2
0 (1,X)
e0(1|X) + σ2
0 (0,X) e0 (0|X )
) ( κ0,β (X) p0 (X )
)2]
.
6 Efficiency Gain
By using auxiliary unlabeled covariates, we can reduce the asymptotic variance of ATE estimators. As Hahn
(1998) shows, for a labeled dataset {(Xi, Di, Yi
)}n†
i=1, the efficiency bound of ATE estimatorsτ ̂ is given as
V † := E
[ σ2
0 (1,X)
P (D=1|X) + σ2
0 (0,X) P (D=0|X)
]
+E
[
(τ0(X) − τ0
)2]
, and an efficient ATE estimator satisfies
√
n†τ(̂ − τ 0) −d→ N (0, V †) .
In both one-sample and two-sample scenarios, we can gain efficiency by using unlabeled covariates. Specifically,
while we cannot reduce the term corresponding to E
[ σ2
0 (1,X)
P (D=1|X) + σ2
0 (0,X) P (D=0|X)
]
, we can reduce the term
corresponding to E
[
(τ0(X) − τ0
)2]
. This efficiency gain becomes more apparent when we consider the case
with many unlabeled covariates, as in Section 5.
7 Covariate Shift Adaptation
Uehara et al. (2020) investigates ATE estimation—equivalently, off-policy evaluation—under covariate shift. Our formulation includes their ATE estimation approach as a special case. When β∗ = 0 in the two-sample scenario, we recover the result of Uehara et al. (2020).
8 Conclusion
This study investigates semiparametric efficient estimation of ATE when auxiliary unlabeled covariates are accessible. We consider both one-sample and two-sample scenarios, and derive semiparametric efficiency bounds for each. Based on the corresponding efficient influence functions, we construct asymptotically efficient estimators via Neyman orthogonal scores. Our approach leverages generalized Riesz regression for estimating nuisance parameters, allowing flexible incorporation of unlabeled covar-
iates. We further analyze the asymptotic properties under settings where the number of unlabeled samples diverges, and demonstrate the superiority of our estimator in terms of efficiency compared to standard inverse probability weighting and regression adjustment methods. The proposed framework unifies and extends existing methods for treatment effect estimation under covariate shift, missing labels, and semi-supervised settings.
13

References
David Azriel, Lawrence D. Brown, Michael Sklar, Richard Berk, Andreas Buja, and Linda Zhao. Semisupervised linear regression. Journal of the American Statistical Association, 117(540):2238–2251, 2022.
Heejung Bang and James M. Robins. Doubly robust estimation in missing data and causal inference models. Biometrics, 61(4):962–973, 2005.
David Bruns-Smith, Oliver Dukes, Avi Feller, and Elizabeth L Ogburn. Augmented balancing weights as linear regression. Journal of the Royal Statistical Society Series B: Statistical Methodology, 04 2025.
Olivier Chapelle, Bernhard Schölkopf, and Alexander Zien. Semi-Supervised Learning. MIT Press, 2006.
Victor Chernozhukov, Denis Chetverikov, Mert Demirer, Esther Duflo, Christian Hansen, Whitney Newey, and James Robins. Double/debiased machine learning for treatment and structural parameters. The Econometrics Journal, 2018.
Victor Chernozhukov, Whitney K. Newey, Victor Quintas-Martinez, and Vasilis Syrgkanis. Automatic debiased machine learning via riesz regression, 2021. arXiv:2104.14737.
Victor Chernozhukov, Whitney Newey, Víctor M Quintas-Martínez, and Vasilis Syrgkanis. RieszNet and ForestRiesz: Automatic debiased machine learning with neural nets and random forests. In International Conference on Machine Learning (ICML), 2022a.
Victor Chernozhukov, Whitney K. Newey, and Rahul Singh. Automatic debiased machine learning of causal and structural effects. Econometrica, 90(3):967–1027, 2022b.
Alicia Curth and Mihaela van der Schaar. Nonparametric estimation of heterogeneous treatment effects: From theory to learning algorithms. In Proceedings of the 24th International Conference on Artificial Intelligence and Statistics (AISTATS), 2021.
Marthinus Christoffel du Plessis, Gang. Niu, and Masashi Sugiyama. Convex formulation for learning from positive and unlabeled data. In International Conference on Machine Learning (ICML), 2015.
Charles Elkan and Keith Noto. Learning classifiers from only positive and unlabeled data. In International Conference on Knowledge Discovery and Data Mining (KDD), 2008.
Vitor Hadad, David A. Hirshberg, Ruohan Zhan, Stefan Wager, and Susan Athey. Confidence intervals for policy evaluation in adaptive experiments. Proceedings of the National Academy of Sciences (PNAS), 118 (15), 2021.
Jinyong Hahn. On the role of the propensity score in efficient semiparametric estimation of average treatment effects. Econometrica, 66(2):315–331, 1998.
Jens Hainmueller. Entropy balancing for causal effects: A multivariate reweighting method to produce balanced samples in observational studies. Political Analysis, 20(1):25–46, 2012.
James Heckman. Shadow prices, market wages, and labor supply. Econometrica, 42(4):679–694, 1974.
Daniel G. Horvitz and Donovan J. Thompson. A generalization of sampling without replacement from a finite universe. Journal of the American Statistical Association, 47(260):663–685, 1952.
Jiayuan Huang, Arthur Gretton, Karsten Borgwardt, Bernhard Schölkopf, and Alex J. Smola. Correcting sample selection bias by unlabeled data. In NeurIPS, pp. 601–608. MIT Press, 2007.
Kosuke Imai and Aaron Strauss. Estimation of heterogeneous treatment effects from randomized experiments, with application to the optimal planning of the get-out-the-vote campaign. Political Analysis, 19(1):1–19, 2011.
Guido W. Imbens and Tony Lancaster. Efficient estimation and stratified sampling. Journal of Econometrics, 74(2):289–318, 1996.
14

Guido W. Imbens and Donald B. Rubin. Causal Inference for Statistics, Social, and Biomedical Sciences: An Introduction. Cambridge University Press, 2015.
Takafumi Kanamori, Shohei Hido, and Masashi Sugiyama. A least-squares approach to direct importance estimation. Journal of Machine Learning Research, 10(Jul.):1391–1445, 2009.
Masahiro Kato. Direct bias-correction term estimation for propensity scores and average treatment effect estimation, 2025a. arXiv: 2509.22122.
Masahiro Kato. Direct debiased machine learning via bregman divergence minimization, 2025b. aXiv: 2510.23534.
Masahiro Kato. Nearest neighbor matching as least squares density ratio estimation and riesz regression, 2025c. arXiv: 2510.24433.
Masahiro Kato. A unified theory for causal inference: Direct debiased machine learning via bregman-riesz regression, 2025d.
Masahiro Kato and Takeshi Teshima. Non-negative bregman divergence minimization for deep direct density ratio estimation. In International Conference on Machine Learning (ICML), 2021.
Masahiro Kato, Akihiro Oga, Wataru Komatsubara, and Ryo Inokuchi. Active adaptive experimental design for treatment effect estimation with covariate choice. In International Conference on Machine Learning (ICML), 2024.
Masahiro Kato, Fumiaki Kozai, and Ryo Inokuchi. Puate: Semiparametric efficient average treatment effect estimation from treated (positive) and unlabeled units, 2025. arXiv:2501.19345.
Masanori Kawakita and Takafumi Kanamori. Semi-supervised learning with density-ratio estimation. Machine Learning, 91(2):189–209, 2013.
Edward H. Kennedy. Efficient nonparametric causal inference with missing exposure information. The International Journal of Biostatistics, 16(1), 2020.
Edward H. Kennedy, Sivaraman Balakrishnan, James M. Robins, and Larry Wasserman. Minimax rates for heterogeneous causal effect estimation. The Annals of Statistics, 52(2):793 – 816, 2024.
Ryuichi Kiryo, Gang Niu, Marthinus Christoffel du Plessis, and Masashi Sugiyama. Positive-unlabeled learning with non-negative risk estimator. In Advances in Neural Information Processing Systems (NeurIPS), 2017.
Chris A. J. Klaassen. Consistent estimation of the influence function of locally asymptotically linear estimators. Annals of Statistics, 15, 1987.
Kaitlyn J. Lee and Alejandro Schuler. Rieszboost: Gradient boosting for riesz regression, 2025. arXiv: 2501.04871.
Zhexiao Lin, Peng Ding, and Fang Han. Estimation based on nearest neighbor matching: from density ratio to average treatment effect. Econometrica, 91(6):2187–2217, 2023.
Jerzy Neyman. Sur les applications de la theorie des probabilites aux experiences agricoles: Essai des principes. Statistical Science, 5:463–472, 1923.
Gang Niu, Marthinus Christoffel du Plessis, Tomoya Sakai, Yao Ma, and Masashi Sugiyama. Theoretical comparisons of positive-unlabeled learning against positive-negative learning. In Advances in Neural Information Processing Systems (NeurIPS), 2016.
Benjamin Rhodes, Kai Xu, and Michael U. Gutmann. Telescoping density-ratio estimation. In Advances in Neural Information Processing Systems (NeurIPS), 2020.
J. M. Robins, A. Rotnitzky, and L. P. Zhao. Estimation of regression coefficients when some regressors are not always observed. Journal of the American Statistical Association, 89:846–866, 1994.
15

Donald B. Rubin. Estimating causal effects of treatments in randomized and nonrandomized studies. Journal of Educational Psychology, 66:688–701, 1974.
Johannes Schmidt-Hieber. Nonparametric regression using deep neural networks with ReLU activation function. Annals of Statistics, 48(4):1875–1897, 2020.
Masashi Sugiyama, Taiji Suzuki, and Takafumi Kanamori. Density ratio matching under the bregman divergence: A unified framework of density ratio estimation. Annals of the Institute of Statistical Mathematics, 64, 10 2011.
Masashi Sugiyama, Taiji Suzuki, and Takafumi Kanamori. Density Ratio Estimation in Machine Learning. Cambridge University Press, 2012.
Alexandre B. Tsybakov. Introduction to Nonparametric Estimation. Springer Publishing Company, Incorporated, 1st edition, 2008.
Masatoshi Uehara, Masahiro Kato, and Shota Yasui. Off-policy evaluation and learning for external validity under a covariate shift. In Conference on Neural Information Processing Systems (NeurIPS), 2020.
M.J. van der Laan and S. Rose. Targeted Learning: Causal Inference for Observational and Experimental Data. Springer Series in Statistics. Springer New York, 2011.
Aad W. van der Vaart. Asymptotic Statistics. Cambridge Series in Statistical and Probabilistic Mathematics. Cambridge University Press, 1998.
Stefan Wager and Susan Athey. Estimation and inference of heterogeneous treatment effects using random forests. Journal of the American Statistical Association, 113(523):1228–1242, 2018.
Jeffrey M. Wooldridge. Asymptotic properties of weighted m-estimation for standard stratified samples. Econometric Theory, 2001.
Makoto Yamada, Taiji Suzuki, Takafumi Kanamori, Hirotaka Hachiya, and Masashi Sugiyama. Relative density-ratio estimation for robust distribution comparison. In Advances in Neural Information Processing Systems (NeurIPS), volume 24. Curran Associates, Inc., 2011.
Ruohan Zhan, Zhimei Ren, Susan Athey, and Zhengyuan Zhou. Policy learning with adaptively collected data. Management Science, 70(8):5270–5297, 2024.
Qingyuan Zhao. Covariate balancing propensity score by tailored loss functions. The Annals of Statistics, 47 (2):965 – 993, 2019.
José R. Zubizarreta. Stable weights that balance covariates for estimation with incomplete outcome data. Journal of the American Statistical Association, 110(511):910–922, 2015.
16

A DDML
This section explains the DDML framework proposed in Kato (2025b), which refines the arguments about Riesz regression and direct density ratio estimation discussed in Kato (2025a). The core of debiased machine learning is to construct an estimator using the Neyman orthogonal scores (Chernozhukov et al., 2018). For this problem, Kato (2025a;b) establishes the DDML framework, which consists of targeted Neyman estimation and generalized Riesz regression.
A.1 Targeted Neyman estimation
Targeted Neyman estimation formulates the nuisance parameters estimation problem as minimizing the discrepancy between the true Neyman orthogonal scores and their model-based counterparts. Since the Neyman orthogonal score is zero in expectation, we only need to estimate the nuisance parameters so that the sample mean of the Neyman orthogonal score with plug-in parameters is zero. In our setting, we estimate the nuisance parameters μ0 and g0, aiming for 1
n
∑n
i=1 ψOS(Xi, Oi, D ̃i, Y ̃i;μ̂,α̂τ, ̂ ) to be zero, whereμ̂ ,α̂ , andτ ̂ are the estimators of μ0, α0, and τ0. Note that we need to ensure thatτ ̂ is asymptotically linear for
1 n
∑n
i=1 ψOS(Xi, Oi, D ̃i, Y ̃i; μ0, α0, τ0
). As discussed in Kato (2025b), the term is decomposed as
1 n
n
∑
i=1
ψOS(Xi, Oi, D ̃i, Y ̃i;μ̂,α̂τ, ̂ ) = 1
n
n
∑
i=1
(
α̂
(
Oi, D ̃i, Xi
)(
Y ̃i −μ̂
(
D ̃i, Xi
))
+
μ̂(1, X i) −μ̂(0, X i) −τ ̂
)
=1
n
n
∑
i=1
((
α̂
(
Oi, D ̃i, Xi
)
− α0
(
Oi, D ̃i, Xi
)) (
Y ̃i − μ0
(
D ̃i, Xi
))
+ α0
(
Oi, D ̃i, Xi
)(
Y ̃i −μ̂
(
D ̃i, Xi
))
} {{ }
=(⋆)
+
μ̂(1, X i) −μ̂(0, X i) −τ ̂
} {{ }
= (⋆⋆)
)
.
A.2 Iterative Procedure for Regression Function and Riesz Representer Estimation
This section explains an approach for estimating the regression function and the Riesz representer using the iterative procedure proposed in Kato (2025b). We do not adopt this approach in the main text, as it complicates the arguments, but we recommend its use.
Targeted maximum likelihood (TMLE) We can make the term (⋆) zero in expectation, and we can make the term (⋆⋆) zero using the TMLE-based ATE estimator. Assume that α0 is known. If we setτ ̂ as
τ ̂ TMLE := 1
n
n
∑
i=1
(
μ̂ TMLE(1, Xi) −μ̂ TMLE(0, Xi)
)
,
where
μ̂ TMLE(d, x) :=μ̂ (0)(d, x) +
∑n
i=1 α0(D ̃i, Xi)(
Y ̃i −μ̂ (0)(D ̃i, Xi))
∑n
i=1α̂( D ̃i, Xi)2 α̂(d, x),
andμ̂ (0)(d, x) is an initial estimate of μ0(d, x). If we setμ̂ =μ̂ TMLE andτ ̂ =τ ̂ TMLE, the terms (⋆) and (⋆⋆) are automatically zero.
Iterative Algorithm As explained above, we have
1 n
n
∑
i=1
ψOS(Xi, Oi, D ̃i, Y ̃i;μ̂ TMLE,α̂τ, ̂ TMLE)
=1
n
n
∑
i=1
((
α̂
(
Oi, D ̃i, Xi
)
− α0
(
Oi, D ̃i, Xi
)) (
Y ̃i − μ0
(
D ̃i, Xi
)) )
.
17

Therefore, our target is to minimize
1 n
n
∑
i=1
((
α̂
(
Oi, D ̃i, Xi
)
− α0
(
Oi, D ̃i, Xi
)) (
Y ̃i − μ0
(
D ̃i, Xi
)) )
.
Here, there are two problems. In minimizing
1 n
n
∑
i=1
((
α̂
(
Oi, D ̃i, Xi
)
− α0
(
Oi, D ̃i, Xi
)) (
Y ̃i − μ0
(
D ̃i, Xi
)) )
,
we do not know μ0. In addition, in the TMLE part, we do not know α0.
If we know μ0, we can estimate α0 using the weighted version of generalized Riesz regression proposed in Kato (2025b). In the context of this study, we weight the loss for α0 by (Y ̃i − μ0(D ̃i, Xi)). We omit the details here and refer to Kato (2025b) and Kato (2025d).
Finally, we suggest the following iterative procedure for T steps, following Kato (2025b):
• Obtain an initial estimate of μ0 and denote it byμ̂ (0).
• For each t = 1, 2, . . . , T ,
– Estimateα̂ (t) using weighted generalized Riesz regression with weight (Y ̃i −μ̂ (t−1)(D ̃i, Xi)). – Estimateμ̂ (t) by the TMLE procedure withμ̂ (t−1) and α(t) as
μ̂ (t)(d, x) :=μ̂ (t−1)(d, x) +
∑n
i=1α̂ (t)(D ̃i, Xi)(
Y ̃i −μ̂ (t−1)(D ̃i, Xi))
∑n
i=1α̂ (t)(D ̃i, Xi)2 α̂ (t)(d, x),
A.3 Riesz Regression as Density Ratio Estimation
Riesz regression can be interpreted as a special case of direct density ratio estimation algorithms (Sugiyama et al., 2012; Huang et al., 2007; Kanamori et al., 2009). Therefore, we can employ various estimation techniques as in Yamada et al. (2011), Kiryo et al. (2017), Rhodes et al. (2020), and Kato & Teshima (2021), as well as the methods proposed for Riesz regression (Chernozhukov et al., 2022a) and Lee & Schuler (2025). From this perspective, we can also interpret the nearest neighbor matchin-
g ATE estimator as a special case of Riesz regression. These arguments are based on Lin et al. (2023), which finds that the nearest neighbor matching ATE estimator can be interpreted as a density ratio estimation method. For details, see Kato (2025c).
B Proof for Lemma 3.1: Efficient Influence Function in the One-Sample Scenario
We provide the proof of Lemma 3.1. Our proof strategy is inspired by the approaches in Hahn (1998) and Kato et al. (2025).
Proof procedure Their proof considers a nonparametric model for the distribution of potential outcomes and defines regular parametric submodels. The procedure involves the following steps: (i) characterizing the tangent set for all regular parametric submodels, (ii) verifying that the parameter of interest is pathwise differentiable, (iii) confirming that the proposed semiparametric efficient influence function lies within the tangent set, and (iv) calculating the expectation of the squared influe-
nce function.
Proof. In Section 2, we defined the probability density function for (X, O, D ̃, Y ̃ ) as
p0
(
x, o, d ̃, y ̃
)
=
p0(x)π0(0 | X)1[o=0](
g0(1 | x)rY (1),0 (y ̃ | x)
)1[
o=1,d ̃=1
] (
g0(0 | x)rY (0),0
(
y ̃ | d ̃= 0
) )1[
o=1,d ̃=0
]
,
18

where rY (1),0(y | x) and rY (0),0(y | x) are the conditional densities of Y (1) and Y (0). Recall that for each a ∈ {1, 0}, we have
g0(a | x) = P (D = a, O = 1 | X) = π0(1 | X)e0(a | X)
For this density function, we consider the parametric submodels:
Psub := {Pθ ∈ P : θ ∈ R},
where Pθ has the following probability density function:
p
(
x, o, d ̃, y ̃; θ
)
= p(x; θ)
(
π(1 | x; θ)
)1[o=0]
·
(
g(1 | x; θ)rY (1)(y | x; θ)
)1[
o=1,d ̃=1
] (
g(0 | x; θ)rY (0)(y | x; θ)
)1[
o=1,d ̃=0
]
.
so that there exists θ0 ∈ R such that
p(x, o, d ̃, y ̃; θ0) = p0(x, o, d ̃, y ̃).
We can define such a parametric submodel, as shown in van der Vaart (1998).
Then, we define score functions (the derivative of the log likelihood function) as follows:
S
(
x, o, d ̃, y ̃; θ
)
:= ∂
∂θ log p(x, o, d ̃, y ̃; θ)
= SX (x; θ) + 1[o = 0] π ̇ (1 | x; θ)
π(1 | x; θ)
+1
[
o = 1, d ̃= 1
]
(
SY (1)(y | x; θ) + g ̇(1 | x; θ)
g(1 | x; θ)
)
+1
[
o = 1, d ̃= 0
]
(
SY (0)(y | x; θ) + g ̇(0 | x; θ)
g(0 | x; θ)
)
,
where
SX (x; θ) := ∂
∂θ log p(x; θ),
SY (d)(y | x; θ) := ∂
∂θ log rY (d)(y | x; θ) (d ∈ {1, 0}),
π ̇ (o | x; θ) := ∂
∂θ π(o | x; θ) (d ∈ {1, 0}),
g ̇(a | x; θ) := ∂
∂θ g(a | x; θ) (a ∈ {1, 0}).
Using the parametric submodels and their score functions, we denote the tangent space as T := {S(x, o, y; θ)}.
Under the parametric submodels, We redefine the ATE as a function of θ as
τ (θ) :=
∫∫
y(1)rY (1)(y(1) | x; θ)p(x; θ)dy(1)dx −
∫∫
y(0)rY (0)(y(0) | x; θ)p(x; θ)dy(0)dx.
Them, the derivative of the ATE function is given as
∂τ (θ)
∂θ = Eθ
[
Y (1)SY (1)(Y (1) | X; θ)
]
− Eθ
[Y (0)SY (0)(Y (0) | X; θ)]
+ Eθ
[
τ (X; θ)SX (X; θ)
]
,
where τ (X; θ) := μ(1, X; θ) − μ(0, X; θ),
and μ(d, X; θ) := ∫ y(d)rY (d)(y(d) | x; θ)p(x; θ)dy(d).
19

From the Riesz representation theorem, there exists a function ψ such that
∂τ (θ) ∂θ
∣ ∣
∣θ=θ0
= E[ψ(X, O, D ̃, Y ̃ )S(X, O, D ̃, Y ̃ ; θ0)]. (3)
There exists a unique function ψOS such that ψOS ∈ T , called the efficient influence function. We specify the efficient influence function as
ψOS(X, O, D ̃ , Y ̃ ; μ0, g0, τ0)
= SOS(X, O, Y ; μ0, g0) − τ0,
=
1
[
O = 1, D ̃ = 1
](
Y ̃ − μ0(1, X)
)
g0(1 | X) −
1
[
O = 1, D ̃ = 0
](
Y ̃ − μ0(0, X)
)
g0(0 | X)
+ μ0(1, X) − μ0(0, X) − τ0.
We prove that ψOS(X, O, D ̃, Y ̃ ; μ0, g0, τ0) is actually the unique efficient influence function by verifying that ψOS satisfies equation 3 and ψOS ∈ T .
Proof of equation 3: First, we confirm that ψOS satisfies equation 3. We have
E
[
ψOS(X, O, Y ; μ0, g0)S(X, O, D ̃, Y ̃ ; τ0)
]
=E
[
ψOS(X, O, Y ; μ0, g0)
·
(
SX (X; θ) + 1[O = 0] π ̇ (1 | X; θ)
π(1 | X; θ)
+1
[
O = 1, D ̃ = 1
]
(
SY (1)(Y | X; θ0) + g ̇(1 | X; θ)
g(1 | X; θ0)
)
+1
[
O = 1, D ̃ = 0
]
(
SY (0)(Y | X; θ) + g ̇(0 | X; θ0)
g(0 | X; θ0)
) )
]
=E
[( 1
[
O = 1, D ̃ = 1
](
Y − μ0(1, X)
)
g0(1 | X) −
1
[
O = 1, D ̃ = 0
](
Y − μ0(0, X)
)
g0(0 | X) + μ0(1, X) − μ0(0, X) − τ0
)
·
(
SX (X; θ) + 1[O = 0] π ̇ (1 | X; θ)
π(1 | X; θ)
+1
[
O = 1, D ̃ = 1
]
(
SY (1)(Y ̃ | X; θ0) + g ̇(1 | X; θ)
g(1 | X; θ0)
)
+1
[
O = 1, D ̃ = 0
]
(
SY (0)(Y ̃ | X; θ) + g ̇(0 | X; θ0)
g(0 | X; θ0)
)
)]
=E
[ (
μ0(1, X) − μ0(0, X) − τ0
)
(
SX (X; θ0) + 1[O = 0] π ̇ (1 | X; θ)
π(1 | X; θ)
)
+
(1
[
O = 1, D ̃ = 1
](
Y ̃ − μ0(1, X)
)
g0(1 | X) + μ0(1, X) − μ0(0, X) − τ0
)
·1
[
O = 1, D ̃ = 1
]
(
SY (1)(Y | X; θ0) + g ̇(1 | X; θ0)
g(1 | X; θ0)
)
−
(1
[
O = 1, D ̃ = 0
](
Y ̃ − μ0(0, X)
)
g0(0 | X) + μ0(1, X) − μ0(0, X) − τ0
)
·1
[
O = 1, D ̃ = 0
]
(
SY (0)(Y | X; θ) + g ̇(0 | X; θ0)
g(0 | X; θ0)
)
]
,
20

where we used 1
[
O = 1, D ̃ = 1
]
1
[
O = 1, D ̃ = 0
]
= 0, 1[O = 1, D ̃ = d]1[O = 0] = 0, and
E
[1
[
O = 1, D ̃ = 1
](
Y ̃ − μ0(1, X)
)
g0(1 | X)
]
=E
[1
[
O = 1, D ̃ = 1
](
Y (1) − μ0(1, X)
)
g0(1 | X)
]
=E
[ g0(1 | X)
(
μ0(1, X) − μ0(1, X)
)
g0(1 | X)
]
= 0,
E
[1
[
O = 1, D ̃ = 0
](
Y − μ0(0, X)
)
g0(0 | X)
]
=E
[1
[
O = 1, D ̃ = 0
](
Y ̃ − μ0(0, X)
)
g0(0 | X)
]
=E
[ g0(0 | X)
(
μ0(0, X) − μ0(0, X)
)
g0(0 | X)
]
= 0.
We have
E
[ (
μ0(1, X) − μ0(0, X) − τ0
)
(
SX (X; θ0) + 1[O = 0] π ̇ (1 | X; θ)
π(1 | X; θ)
)
+
(1
[
O = 1, D ̃ = 1
](
Y ̃ − μ0(1, X)
)
g0(1 | X) + μ0(1, X) − μ0(0, X) − τ0
)
·1
[
O = 1, D ̃ = 1
]
(
SY (1)(Y | X; θ0) + g ̇(1 | X; θ0)
g(1 | X; θ0)
)
−
(1
[
O = 1, D ̃ = 0
](
Y ̃ − μ0(0, X)
)
g0(0 | X) + μ0(1, X) − μ0(0, X) − τ0
)
·1
[
O = 1, D ̃ = 0
]
(
SY (0)(Y | X; θ) + g ̇(0 | X; θ0)
g(0 | X; θ0)
)
]
=E
[(
μ0(1, X) − μ0(0, X)
)
SX (X; θ0)
+
1
[
O = 1, D ̃ = 1
](
Y − μ0(1, X)
)
g0(1 | X) SY (1)(Y | X; θ0)
−
1
[
O = 1, D ̃ = 0
](
Y − μ0(0, X)
)
g0(0 | X) SY (0)(Y | X; θ)
]
=E
[(
μ0(1, X) − μ0(0, X)
)
SX (X; θ0)
+
1
[
O = 1, D ̃ = 1
]
Y (1) g0(1 | X) SY (1)(Y (1) | X; θ) −
1
[
O = 1, D ̃ = 0
]
Y ̃
g0(0 | X) SY (0)(Y (0) | X; θ0)
]
,
where we used
E
[
τ0SX (X; θ)
]
=0
E
[ (
μ0(1, X) − μ0(0, X) − τ0
)
1[O = 1]
(
SY (1)(Y | X; θ0) + g ̇(1 | X; θ0)
g0(1 | X; θ0)
)
]
= 0.
21

Finally, we have
E
[(
μ0(1, X) − μ0(0, X)
)
SX (X; θ0)
+
1[O = 1]
(
Y − μ0(1, X)
)
g0(1 | X) SY (1)(Y | X; θ0)
−
1[O = 0]
(
Y − μ0(0, X)
)
g0(0 | X)π0(0 | X) SY (0)(Y | X; θ)
]
=E
[(
μ0(1, X) − μ0(0, X)
)
SX (X; θ0)
+
1
[
O = 1, D ̃ = 1
]
Y (1) g0(1 | X) SY (1)(Y (1) | X; θ) −
1
[
O = 1, D ̃ = 0
]
Y ̃
g0(0 | X) SY (0)(Y (0) | X; θ0)
]
=E
[
Y (1)SY (1)(Y (1) | X; θ0)
]
−E
[
Y (0)SY (0)(Y ̃ | X; θ0)
]
+ Eθ0
[
τ (X; θ)SX (X; θ0)
]
= ∂τ (θ)
∂θ
∣ ∣
∣θ=θ0
Proof of ψOS ∈ T : Set
SY (d)(y | x) = y − μ0(d | x)
g0(d | x) ,
SX (X; θ) = μ0(1, X) − μ0(0, X) − τ0.
Then, ψOS ∈ T holds.
C Proof of Theorem 3.5: Efficient ATE Estimator under the One-Sample Scenario
For simplicity, we consider two-fold cross-fitting; that is, L = 2. Without loss of generality, we assume that the sample size n is even, and let n = n/2. For each b ∈ {1, 2}, we denote the subset of the dataset in cross-fitting as
D(b) :=
{(
X (b)
i , O(b)
i , D ̃ (b)
i , Y ̃ (b)
i
)}n
i=1
.
We defined the estimator as
τ ̂ OS-eff
n := 1
n
n
∑
i=1
SOS (
Xi, Oi, D ̃i, Y ̃i;μ̂ n,ig, ̂ n,i
)
,
where recall that
SOS (
X, O, D ̃ , Y ̃ ;μ̂ n,ig, ̂ n,i
)
=
1
[
O = 1, D ̃ = 1
](
Y ̃ −μ̂ n,i(1, X)
)
ĝ n,i(1 | X) −
1
[
O = 1, D ̃ = 0
](
Y ̃ −μ̂ n,i(0, X)
)
ĝ n,i(0 | X)
+
μ̂ n,i(1, X) −μ̂ n,i(0, X).
We have
τ ̂ OS-eff
n =1
n
n
∑
i=1
SOS (Xi, Oi, Yi;μ̂ n,ig, ̂ n,i)
22

=1
n
n
∑
i=1
SOS(Xi, Oi, Yi; μ0, g0) − 1
n
n
∑
i=1
SOS(Xi, Oi, Yi; μ0, g0) + 1
n
n
∑
i=1
SOS(Xi, Oi, Yi;μ̂ n,ig, ̂ n,i).
Here, if it holds that
1 n
n
∑
i=1
SOS(Xi, Oi, Yi; μ0, g0) − 1
n
n
∑
i=1
SOS(Xi, Oi, Yi;μ̂ n,ig, ̂ n,i) = op(1/√n) (4)
then we have
√n
(
τ ̂ OS-eff
n − τ0
)
= √1n
n
∑
i=1
SOS(Xi, Oi, Yi; μ0, g0) + op(1)
−d→ N (0, V OS),
from the central limit theorem for i.i.d. random variables.
Therefore, we prove Theorem 3.5 by showing equation 4. We decompose the LHS of equation 4 as
1 n
n
∑
i=1
SOS(Xi, Oi, Yi; μ0, g0) − 1
n
n
∑
i=1
SOS(Xi, Oi, Yi;μ̂ n,ig, ̂ n,i)
=n
n
∑
b∈{1,2}
(
1 n
n
∑
i=1
SOS (
X (b)
i , O(b)
i , D ̃ (b)
i , Y ̃ (b)
i ; μ0, g0
)
−1
n
n
∑
i=1
SOS (
X (b)
i , O(b)
i , D ̃ (b)
i , Y ̃ (b)
i ;μ̂ (b)
n g, ̂ (b)
n
)
)
.
Let D(b) denote the b-th fold of D. Here, we have
1 n
n
∑
i=1
SOS (
X (b)
i , O(b)
i , D ̃ (b)
i , Y ̃ (b)
i ; μ0, g0
)
−1
n
n
∑
i=1
SOS (
X (b)
i , O(b)
i , D ̃ (b)
i , Y ̃ (b)
i ;μ̂ (b)
n g, ̂ (b)
n
)
=1
n
n
∑
i=1
SOS (
X (b)
i , O(b)
i , D ̃ (b)
i , Y ̃ (b)
i ; μ0, g0
)
−1
n
n
∑
i=1
SOS (
X (b)
i , O(b)
i , D ̃ (b)
i , Y ̃ (b)
i ;μ̂ (b)
n g, ̂ (b)
n
)
−
(
E
[
SOS (
X (b)
i , O(b)
i , D ̃ (b)
i , Y ̃ (b)
i ; μ0, g0
)
| D(b)]
−E
[
SOS (
X (b)
i , O(b)
i , D ̃ (b)
i , Y ̃ (b)
i ;μ̂ (b)
n g, ̂ (b)
n
)
| D(b)]
)
+
(
E
[
SOS (
X (b)
i , O(b)
i , D ̃ (b)
i , Y ̃ (b)
i ; μ0, g0
)
| D(b)]
−E
[
SOS (
X (b)
i , O(b)
i , D ̃ (b)
i , Y ̃ (b)
i ;μ̂ (b)
n g, ̂ (b)
n
)
| D(b)]
)
.
To show equation 4, we show the following two inequalities separately:
1 n
n
∑
i=1
SOS (
X (b)
i , O(b)
i , D ̃ (b)
i , Y ̃ (b)
i ; μ0, g0
)
−1
n
n
∑
i=1
SOS (
X (b)
i , O(b)
i , D ̃ (b)
i , Y ̃ (b)
i ;μ̂ (b)
n g, ̂ (b)
n
)
−
(
E
[
SOS (
X (b)
i , O(b)
i , D ̃ (b)
i , Y ̃ (b)
i ; μ0, g0
)
| D(b)]
−E
[
SOS (
X (b)
i , O(b)
i , D ̃ (b)
i , Y ̃ (b)
i ;μ̂ (b)
n g, ̂ (b)
n
)
| D(b)]
)
= op(1/√n), (5)
23

E
[
SOS (
X (b)
i , O(b)
i , D ̃ (b)
i , Y ̃ (b)
i ; μ0, g0
)
| D(b)]
−E
[
SOS (
X (b)
i , O(b)
i , D ̃ (b)
i , Y ̃ (b)
i ;μ̂ (b)
n g, ̂ (b)
n
)
| D(b)]
= op(1/√n). (6)
Here, the LHS of the first inequality is referred to as the empirical process term, while the LHS of the second inequality is referred to as the second-order remainder term.
C.1 Proof of equation 5
Proof. We aim to show that for any ε > 0,
nli→m∞ Pr
(√n
∣ ∣ ∣ ∣ ∣
1 n
n
∑
i=1
SOS (
X (b)
i , O(b)
i , D ̃ (b)
i , Y ̃ (b)
i ; μ0, g0
)
−1
n
n
∑
i=1
SOS (
X (b)
i , O(b)
i , D ̃ (b)
i , Y ̃ (b)
i ;μ̂ (b)
n g, ̂ (b)
n
)
−
(
E
[
SOS (
X (b)
i , O(b)
i , D ̃ (b)
i , Y ̃ (b)
i ; μ0, g0
)
| D(b)]
−E
[
SOS (
X (b)
i , O(b)
i , D ̃ (b)
i , Y ̃ (b)
i ;μ̂ (b)
n g, ̂ (b)
n
)
| D(b)]
)∣ ∣ ∣ ∣ ∣
>ε
)
= 0. (7)
We show equation 7 by showing that for any ε > 0,
nli→m∞ Pr
(√n
∣ ∣ ∣ ∣ ∣
1 n
n
∑
i=1
SOS (
X (b)
i , O(b)
i , D ̃ (b)
i , Y ̃ (b)
i ; μ0, g0
)
−1
n
n
∑
i=1
SOS (
X (b)
i , O(b)
i , D ̃ (b)
i , Y ̃ (b)
i ;μ̂ (b)
n g, ̂ (b)
n
)
−
(
E
[
SOS (
X (b)
i , O(b)
i , D ̃ (b)
i , Y ̃ (b)
i ; μ0, g0
)
| D(b)]
−E
[
SOS (
X (b)
i , O(b)
i , D ̃ (b)
i , Y ̃ (b)
i ;μ̂ (b)
n g, ̂ (b)
n
)
| D(b)]
)∣ ∣ ∣ ∣ ∣
≥ ε | D(b)
)
= 0. (8)
If equation 8 holds, then equation 7 also holds from dominated convergence theorem.
We prove equation 8 using Chebychev’s inequality. From Chebychev’s inequality we have
Pr
(√n
∣ ∣ ∣ ∣ ∣
1 n
n
∑
i=1
SOS (
X (b)
i , O(b)
i , D ̃ (b)
i , Y ̃ (b)
i ; μ0, g0
)
−1
n
n
∑
i=1
SOS (
X (b)
i , O(b)
i , D ̃ (b)
i , Y ̃ (b)
i ;μ̂ (b)
n g, ̂ (b)
n
)
−
(
E
[
SOS (
X (b)
i , O(b)
i , D ̃ (b)
i , Y ̃ (b)
i ; μ0, g0
)
| D(b)]
−E
[
SOS (
X (b)
i , O(b)
i , D ̃ (b)
i , Y ̃ (b)
i ;μ̂ (b)
n g, ̂ (b)
n
)
| D(b)]
)∣ ∣ ∣ ∣ ∣
≥ ε | D(b)
)
≤n
ε Var
(
1 n
n
∑
i=1
SOS (
X (b)
i , O(b)
i , D ̃ (b)
i , Y ̃ (b)
i ; μ0, g0
)
−1
n
n
∑
i=1
SOS (
X (b)
i , O(b)
i , D ̃ (b)
i , Y ̃ (b)
i ;μ̂ (b)
n g, ̂ (b)
n
)
−
(
E
[
SOS (
X (b)
i , O(b)
i , D ̃ (b)
i , Y ̃ (b)
i ; μ0, g0
)
| D(b)]
−E
[
SOS (
X (b)
i , O(b)
i , D ̃ (b)
i , Y ̃ (b)
i ;μ̂ (b)
n g, ̂ (b)
n
)
| D(b)]
)
| D(b)
)
.
Since observations are i.i.d. and the conditional mean of the target part is zero, we have
mVar
(
1 n
n
∑
i=1
SOS (
X (b)
i , O(b)
i , D ̃ (b)
i , Y ̃ (b)
i ; μ0, g0
)
−1
n
n
∑
i=1
SOS (
X (b)
i , O(b)
i , D ̃ (b)
i , Y ̃ (b)
i ;μ̂ (b)
n g, ̂ (b)
n
)
−
(
E
[
SOS (
X (b)
i , O(b)
i , D ̃ (b)
i , Y ̃ (b)
i ; μ0, g0
)
| D(b)]
−E
[
SOS (
X (b)
i , O(b)
i , D ̃ (b)
i , Y ̃ (b)
i ;μ̂ (b)
n g, ̂ (b)
n
)
| D(b)]
)
| D(b)
)
= Var
(
SOS (
X (b)
i , O(b)
i , D ̃ (b)
i , Y ̃ (b)
i ; μ0, g0
)
− SOS (
X (b)
i , O(b)
i , D ̃ (b)
i , Y ̃ (b)
i ;μ̂ (b)
n g, ̂ (b)
n
)
24

−
(
E
[
SOS (
X (b)
i , O(b)
i , D ̃ (b)
i , Y ̃ (b)
i ; μ0, g0
)
| D(b)]
−E
[
SOS (
X (b)
i , O(b)
i , D ̃ (b)
i , Y ̃ (b)
i ;μ̂ (b)
n g, ̂ (b)
n
)
| D(b)]
)
| D(b)
)
=E
[(
SOS (
X (b)
i , O(b)
i , D ̃ (b)
i , Y ̃ (b)
i ; μ0, g0
)
− SOS (
X (b)
i , O(b)
i , D ̃ (b)
i , Y ̃ (b)
i ;μ̂ (b)
n g, ̂ (b)
n
)
(9)
−
(
E
[
SOS (
X (b)
i , O(b)
i , D ̃ (b)
i , Y ̃ (b)
i ; μ0, g0
)
| D(b)]
−E
[
SOS (
X (b)
i , O(b)
i , D ̃ (b)
i , Y ̃ (b)
i ;μ̂ (b)
n g, ̂ (b)
n
)
| D(b)]
))2
| D(b)
]
.
The term equation 9 converges to zero in probability as n → ∞ if
∥
∥μ0 −μ̂ (b)
n
∥
∥2 = op(1), ∥
∥g0 −ĝ (b)
n
∥
∥2 = op(1)
as n → ∞. Here, we used the boundedness conditions of each function and the following computation. Them, we complete the proof.
We explain the last step of the above proof below. Let A and B denote the first and second terms in the expectation of equation 9, respectively. Then, we have
equation 9 = E
[ (
A−B−E
[
A − B | D(b)])2
| D(b)
]
.
Here, we have
equation 9 = E
[
(A − B)2 | D(b)]
−
(
E
[
A − B | D(b)])2
≤E
[
(A − B)2 | D(b)]
.
By showing that E [(A − B)2 | D(b)] = op(1), we prove the statement. To show E [(A − B)2 | D(b)] = op(1), we use the following concrete form of SOS:
SOS (
X, O, D ̃, Y ̃ ; μ, g
)
=
1
[
O = 1, D ̃ = 1
]
(
Y ̃ − μ0(1, X))
g(1 | X) −
1
[
O = 1, D ̃ = 0
]
(
Y ̃ − μ(0, X))
g(0 | X) + μ(1, X) − μ(0, X).
Then, we have
A−B
=
1
[
O = 1, D ̃ = 1
](
Y ̃ − μ0(1, X)
)
g0(1 | X) −
1
[
O = 1, D ̃ = 0
](
Y ̃ − μ0(0, X)
)
g0(0 | X) + μ0(1, X) − μ0(0, X)
−
(1
[
O = 1, D ̃ = 1
](
Y ̃ −μ̂ (b)
n (1, X)
)
g ̂ (b)
n (1 | X)
−
1
[
O = 1, D ̃ = 0
](
Y ̃ −μ̂ (b)
n (0, X)
)
g ̂ (b)
n (0 | X)
+
μ̂ (b)
n (1, X) −μ̂ (b)
n (0, X)
)
Here, we can show that the following term converges to zero in probability, which follows directly from the convergence in probability of each nuisance-parameter estimator:
(μ0(1, X) − μ0(0, X)) −
(
μ̂ (b)
0 (1, X) −μ̂ (b)
0 (0, X)
)
.
Then, we show that the remaining parts converge to zero in probability. Let us denote the parts as
(⋆) =
1
[
O = 1, D ̃ = 1
]
(
Y ̃ − μ0(1, X))
g0(1 | X) −
1
[
O = 1, D ̃ = 0
]
(
Y ̃ − μ0(0, X))
g0(0 | X)
25

−


1
[
O = 1, D ̃ = 1
]
(
Y ̃ −μ̂ (b)
n (1, X))
g ̂ (b)
n (1 | X)
−
1
[
O = 1, D ̃ = 0
]
(
Y ̃ −μ̂ (b)
n (0, X))
g ̂ (b)
n (0 | X)

.
Next, we have
(⋆) =
1
[
O = 1, D ̃ = 1
]
(
Y ̃ − μ0(1, X))
g0(1 | X) −
1
[
O = 1, D ̃ = 0
]
(
Y ̃ − μ0(0, X))
g0(0 | X)
−


1
[
O = 1, D ̃ = 1
]
(
Y ̃ − μ0(1, X))
g ̂ (b)
n (1 | X)
−
1
[
O = 1, D ̃ = 0
]
(
Y ̃ − μ0(0, X))
g ̂ (b)
n (0 | X)


+


1
[
O = 1, D ̃ = 1
]
(
Y ̃ − μ0(1, X))
g ̂ (b)
n (1 | X)
−
1
[
O = 1, D ̃ = 0
]
(
Y ̃ − μ0(0, X))
g ̂ (b)
n (0 | X)


−


1
[
O = 1, D ̃ = 1
]
(
Y ̃ −μ̂ (b)
n (1, X))
g ̂ (b)
n (1 | X)
−
1
[
O = 1, D ̃ = 0
]
(
Y ̃ −μ̂ (b)
n (0, X))
g ̂ (b)
n (0 | X)

.
Then, from the parallelogram law, we have
(⋆)2 ≤ 2


1
[
O = 1, D ̃ = 1
]
(
Y ̃ − μ0(1, X))
g0(1 | X) −
1
[
O = 1, D ̃ = 1
]
(
Y ̃ − μ0(1, X))
g ̂ (b)
n (1 | X)


2
+2


1
[
O = 1, D ̃ = 0
]
(
Y ̃ − μ0(0, X))
ĝ n,i(0 | X) −
1
[
O = 1, D ̃ = 0
]
(
Y ̃ − μ0(0, X))
g ̂ (b)
n (0 | X)


2
+···
+2


g0(1 | X)1
[
O = 1, D ̃ = 1
]
(
Y ̃ − μ0(1, X))
g0(0 | Xg)̂ (b)
n (1 | X)
−
g0(1 | X)1
[
O = 1, D ̃ = 1
]
(
Y ̃ −μ̂ (b)
n (1, X))
g0(0 | Xg)̂ (b)
n (1 | X)


2
.
Here, we can bound
2E

 


g0(1 | X)1
[
O = 1, D ̃ = 1
]
(
Y ̃ − μ0(1, X))
g ̂ (b)
n (1 | X)
−
g0(1 | X)1
[
O = 1, D ̃ = 1
]
(
Y ̃ −μ̂ (b)
n (1, X))
g ̂ (b)
n (0 | X)


2
| D(b)

 
by
CE(μT,0(X) −μ̂ (b)
n (1, X))2],
where C > 0 is constant independent of n, and we used the boundedness ofĝ andπ̂ . Similarly, we can bound each of the remaining terms. Thus, we complete the proof.
C.2 Proof of equation 6
Proof. We have
E
[
SOS (
X (b)
i , O(b)
i , D ̃ (b)
i , Y ̃ (b)
i ; μ0, g0
)
| D(b)]
−E
[
SOS (
X (b)
i , O(b)
i , D ̃ (b)
i , Y ̃ (b)
i ;μ̂ (b)
n g, ̂ (b)
n
)
| D(b)]
=E
[1
[
O = 1, D ̃ = 1
](
Y − μ0(1, X)
)
g0(1 | X) −
1
[
O = 1, D ̃ = 0
](
Y − μ0(0, X)
)
g0(0 | X) + μ0(1, X) − μ0(0, X)
]
26

−E
[1
[
O = 1, D ̃ = 1
](
Y −μ̂ (b)
n (1, X)
)
g ̂ (b)
n (1 | X)
−
1
[
O = 1, D ̃ = 0
](
Y −μ̂ (b)
n (0, X)
)
g ̂ (b)
n (0 | X)
+
μ̂ (b)
n (1, X) −μ̂ (b)
n (0, X)
]
=E
[
μ0(1, X) − μ0(0, X)
]
−E
[ g0(1 | X)
(
μ0(1, X) −μ̂ (b)
n (1, X)
)
g ̂ (b)
n (1 | X)
−
g0(0 | X)
(
μ0(0, X) −μ̂ (b)
n (0, X)
)
g ̂ (b)
n (0 | X)
+
μ̂ (b)
n (1, X) −μ̂ (b)
n (0, X)
]
=E
[(
1 − g0(1 | X)
g ̂ (b)
n (1 | X)
) (
μ0(1, X) −μ̂ (b)
n (1, X)
)
]
+E
[(
1 − g0(0 | X)
g ̂ (b)
n (0 | X)
) (
μ0(0, X) −μ̂ (b)
n (0, X)
)
]
≤C
∑
d∈{1,0}
√ √ √
√E
[
(
g ̂ (b)
n (d | X) − g0(d | X)
)2
]
E
[ (
μ0(d, X) −μ̂ (b)
n (d, X)
)2
]
= op(1/√n),
where we used Hölder’s inequality.
D Proof of Lemma 4.1: Efficient Influence Function in the Two-Sample Scenario
This section provides the proof of Lemma 4.1, which gives the efficient influence function in the two-sample scenario. Our proof is inspired by those in Uehara et al. (2020) and Kato et al. (2024).
As defined in Section 2, the sampling scheme of the two-sample scenario assumes the availability of the following two datasets:
DL := {(Xj, Dj, Yj)}m
j=1,
DU := {Zk}l
k=1,
where
(Xj , Dj , Yj ) i.i∼.d p0(x)(rY (1),0(y | x)e0(1 | x))1[d=1](rY (0),0(y | x)e0(d | x))1[d=0],
Zk
i.i∼.d q0(x).
D.1 Parametric Submodels
We consider regular parametric submodels with a parameter θ ∈ R. We denote parametric submodels whose probability density functions are given as
p(x, d, y; θ) = p(x; θ)(rY (1)(y | x; θ)e(1 | x; θ))d=1(rY (0)(y | x; θ)e(d | x; θ))d=0 (10)
and q(Z; θ). Under the parametric submodels, rY (d)(y | x; θ) is the conditional probability density function of Y (d) given X = x, e(d | x; θ) = Pr(D = d | X = x; θ) is the propensity score, p(x; θ) is the probability density of X in observation data, and q(z; θ) is the probability density of Z in evaluation data. Then, the score function are given as
log (p(x, d, y; θ))
= 1[d = 1]
(
log (rY (1)(y | x)) + log (e(1 | x; θ))
)
+ 1[d = 0]
(
log (rY (0)(y | x)) + log (e(0 | x; θ))
)
+ log (p(x; θ)),
and log (q(z; θ)).
27

D.2 ATE Function
Next, we consider the ATE under the parametric submodel. Under our defined parametric submodel, let τ (θ) be our parameter of interest as a function of τ , which is given as
τ (θ) :=
∫
Y (1)rY (1),0(y(1) | x; θ)κ(x; θ)dy(1) −
∫
Y (0)rY (0),0(y(0) | x; θ)κ(x; θ)dy(0).
We have the following lemma for the derivative of τ (θ).
Lemma D.1. Under the parametric submodel defined in equation 10, we have
∂τ (θ)
∂θ =
EW
[Y (1)SY (1)(Y (1) | X; θ) − Y (0)SY (0)(Y (0) | X; θ) + βτ (X; θ)SX (X; θ) + (1 − β)τ (Z; θ)SZ (Z; θ)] ,
where
τ (x; θ) := E[Y (1) − Y (0) | X] :=
∫
Y (1)rY (1),0(y(1) | x)dy(1) −
∫
Y (0)rY (0),0(y(0) | x)dy(0).
In the two-sample scenario, there are two independent datasets, which makes the arguments about the semiparametric efficiency difficult. To address this issue, we regard the whole n = m + l samples as one observation and consider the case where we observe N observations; that is, for each a = 1, 2, . . . , N , we define a sample as
Wh = (Xh,1, · · · , Xh,m, D1, · · · , Dh,m, Yh,1, · · · , Yh,m, Zh,1, · · · , Zh,l) ,
and we assume that we can observe a dataset {Wh}aN=1. Here, Wh is generated from a distribution whose probability density function is given as
Wh
i.i∼.d ζ0
({Xi}m
j=1, {Zk}l
k=1
)=
m
∏
j=1
p0(Xi, Di, Yi)
l
∏
k=1
q0 (Zk ).
The corresponding parametric submodels are given as
ζ0
({Xi}m
j=1, {Zk}l
k=1; θ) =
m
∏
j=1
p0(Xi, Di, Yi; θ)
l
∏
k=1
q0(Zk; θ).
Then, the corresponding score functions are given as
S†(W ; θ) := ∂
∂θ


m
∑
j=1
log (p(Xj, Dj, Yj; θ)) +
l
∑
k=1
log (q(Zk; θ))


=
m
∑
j=1
(
1[Dj = 1]
(
SY (1)(Yj | Xj; θ) + v ̇ (1 | Xj; θ)
vβ(1 | Xj; θ)
)
+ 1[Dj = 0]
(
SY (0)(Yj | Xj; θ) + v ̇ (0 | Xj; θ)
vβ(0 | Xj; θ)
)
+ SX (Xj; θ)
)
+
l
∑
k=1
SZ (Zk; θ),
where SY (d), v ̇, SX , and SZ are defined as
SY (d)(y | x; θ) := ∂
∂θ log rY (d)(y | x; θ),
v ̇β(d | x; θ) := ∂
∂θ vβ(d | x; θ),
28

SX (x; θ) := ∂
∂θ log p(x; θ),
SZ (z; θ) := ∂
∂θ log q(z; θ).
The tangent set for this parametric submodel at θ = θ0 is given as
T :=



m
∑
j=1


∑
d∈{1,0}
1[At = d]
(
SY (d)(yj | Xj ; θ0) + v ̇ (d | Xj ; θ0)
e(d | Xj; θ0)
)
+ SX (Xj; θ0)

+
l
∑
k=1
ζ ̃(Zk; θ0) ∈ L2(W )



,
where we have
∫
SY (d)(y | x; θ0)rY (d)(y | x; θ0)dy = 0 ∀x ∈ X ,
v ̇(1 | x; θ0) + v ̇β(0 | x; θ0) = 0 ∀x ∈ X ,
∫
SX (x; θ0)p(x; θ0)dx = 0,
∫
SZ (z; θ0)q(z; θ0)dz = 0.
Here, τ (θ) is pathwise differentiable at θ0 if there exists a function ψ(W ) ∈ T such that E[ψ⊤(W )ψ(W )] < ∞ and for all regular parametric submodels
∂τ (θ0)
∂θ := EW
[
ψ(W )S(W ; θ0)
]
. (11)
We refer to ψ(W ) as the semiparametric efficient influence function. As the following proposition, the semiparametric efficient influence function gives a lower bound for the asymptotic variance of regular estimators.
This states that Var(ψ(W )) is a lower bound in estimating θ0. We call T Var(ψ(W )) the semiparametric
efficiency bound because what we want to consider is a lower bound of √T
(
̂θ − θ0
)
.
Lastly, we derive the semiparametric efficient influence function in the following lemma.
Lemma D.2. Under the parametric submodel defined in equation 10, we have
ψ(W ) = 1
m
m
∑
j=1
( 1[Dj = 1](Yj − μ0(1, Xj))
v0,β(1 | Xj) − 1[Dj = 0](Yj − μ0(0, Xj))
v0,β(0 | Xj )
)
+β 1
m
m
∑
j=1
(τ0(Xj) − τ0) + (1 − β) 1
l
l
∑
k=1
(τ0(Zk) − τ0) .
For N = m + n, the (scaled) efficiency bound nVar(ψ(W )) is
N
mE
[( σ02(1, X)
e0(1 | X) + σ02(0, X)
e0(0 | X)
) κ0,β(X)2
p(X)2 + β2(τ0(X) − τ 2
0
)
]
+N
l (1 − β)2E
[
(τ0(Z) − τ0
)2]
.
D.3 Proof for Lemma D.2
We prove Lemma D.2 using the techniques of Hahn (1998) and Uehara et al. (2020). The basic procedure follows that in Appendix D.
We begin by considering a nonparametric model for the distribution of potential outcomes and define regular parametric submodels. We then compute the gradient (as a candidate for the semiparametric efficient influence
29

function) of the target parameter θ0, characterize the tangent set for all regular parametric submodels, verify that the parameter of interest is pathwise differentiable, confirm that the efficient influence function lies in the tangent space, and calculate the expected squared value of the influence function.
As discussed in Appendices D.1, we define parametric submodels as
p(W ; θ) =
m
∏
j=1
∏
d∈{1,0}
(rY (d)(Yj | Xj ; θ)e(d | Xj ; θ))Dj=d p(Xj ; θ)
l
∏
k=1
q(Zk; θ),
W=
{
{Xj , Dj , Yj }T
t=1, {Zk}S
s=1
}
.
Then, recall that in Appendix D.1, we define the score function as
S(W ; θ) := d
dθ


m
∑
j=1
log (p(Xj, Dj, Yj; θ)) +
l
∑
k=1
log (q(Zk; θ))


=
m
∑
j=1
(
1[Dj = 1]
(
SY (1)(Yj | Xj; θ) + v ̇ (1 | Xj; θ)
vβ(1 | Xj; θ)
)
+ 1[Dj = 0]
(
SY (0)(Yj | Xj; θ) + v ̇ (0 | Xj; θ)
vβ(0 | Xj; θ)
)
+ SX (Xj; θ)
)
+
l
∑
k=1
SZ (Zk; θ),
where recall that SY (d), v ̇, SX , and SZ are defined as
SY (d)(y | x; θ) := d
dθ log rY (d)(y | x; θ),
v ̇β(d | x; θ) := d
dθ vβ(d | x; θ),
SX (x; θ) := d
dθ log p(x; θ),
SZ (z; θ) := d
dθ log q(z; θ).
From Lemma D.1, we have
∂τ (θ)
∂θ =
EW
[
Y (1)SY (1)(Y (1) | X; θ) − Y (0)SY (0)(Y (0) | X; θ) + τ (X; θ)SX (X; θ) + τ (Z; θ)SZ (Z; θ)
]
,
where recall that
τ (X; θ) := E[Y (1) − Y (0) | X] :=
∫
Y (1)rY (1),0(y(1) | x)dy(1) −
∫
Y (0)rY (0),0(y(0) | x)dy(0).
Then, based on the above preparation, we prove Theorem D.2 by guess and verify.
Proof of Theorem D.2. Let us denote the expectation taken over the joint distribution of Wh by EW . We first verify that EW [ψ(Wh)2] < ∞. Here, we have
EW
[ 1[D = 1](Y − μ0(1, X))
v0,β(1 | X) − 1[D = 0](Y − μ0(0, X))
v0,β(0 | X) | X
]
= 0.
Therefore, we have
EW
[( 1[D = 1](Y − μ0(1, X))
v0,β(1 | X) − 1[D = 0](Y − μ0(0, X))
v0,β(0 | X)
) (
τ0(X) − τ0
)
]
30

= EW
[ (
τ0(X) − τ0
)
EW
[ 1[D = 1](Y − μ0(1, X))
v0,β(1 | X) − 1[D = 0](Y − μ0(0, X))
v0,β(0 | X) | X
]]
= 0.
We also have
EW
[( 1[D = 1](Y − μ0(1, X))
v0,β(1 | X) − 1[D = 0](Y − μ0(0, X))
v0,β(0 | X)
) (
τ0(Z) − τ0
)
]
= 0.
Hence, we have
EW
[ψ(Wh)2]
= EW
[(
1 m
m
∑
j=1
( 1[Dj = 1](Yj − μ0(1, Xj))
v0,β(1 | Xj) − 1[Dj = 0](Yj − μ0(0, Xj))
v0,β(0 | Xj )
)
+β 1
m
m
∑
j=1
(
τ0(Xj ) − τ0
)
+ (1 − β) 1
l
l
∑
k=1
(
τ0(Zk) − τ0
)
)2]
= EW
[1
m
( σ02(1, X)
e0(1 | X) + σ02(0, X)
e0(0 | X)
) κ0,β(X)2
p(X)2 + β2 1
m
(
τ0(X) − τ0
)2
+ (1 − β)2 1
l
(
τ0(Z) − τ0
)2]
< ∞.
We next verify that equation 11 holds ( ∂τ(θ0)
∂θ := EW
[
ψ(W )S(W ; θ0)
]
) by showing
EW
[
ψ(W )S(Wh; θ0)
]
=
EW
[
Y (1)SY (1)(Y (1) | X; θ0) − Y (0)SY (0)(Y (0) | X; θ0) + βτ (Z; θ0)SZ (Z; θ0) + (1 − β)τ (Z; θ0)SZ (Z; θ0)
]
,
(12)
from Lemma D.1.
Under our choice of ψ(W ), the LHS of equation 12 becomes
EW
[
ψ(Wh)S(Wh; θ)
]
= EW
[(
1 m
m
∑
j=1
( 1[Dj = 1](Yj − μ0(1, Xj))
v0,β(1 | Xj) − 1[Dj = 0](Yj − μ0(0, Xj))
v0,β(0 | Xj )
)
+β 1
m
m
∑
j=1
(
τ0(Xj ) − τ0
)
+ (1 − β) 1
l
l
∑
k=1
(
τ0(Zk) − τ0
)
)
×
(m ∑
j=1
(
1[Dj = 1]
(
SY (1)(Yj(1) | Xj; θ) + v ̇ (1 | X; θ)
vβ(1 | Xj; θ)
)
+ 1[Dj = 0]
(
SY (0)(Yj(0) | Xj; θ) + v ̇ (0 | Xj; θ)
vβ(0 | Xj; θ)
)
+ SX (Xj; θ)
)
+
l
∑
k=1
SZ (Zk; θ)
)]
.
Since data are generated independently, and 1[Di = 1]1[Dj = 0] holds, we have
EW
[
ψ(Wh)S(Wh; θ)
]
= EW
[
1 m
m
∑
j=1
1[Dj = 1](Yj − μ0(1, Xj))
v0,β(1 | Xj )
(
SY (1)(Yj(1) | Xj; θ) + v ̇ (1 | Xj; θ)
vβ(1 | Xj; θ)
)
31

−1
m
m
∑
j=1
1[Dj = 0](Yj − μ0(0, Xj))
v0,β(0 | Xj )
(
SY (0)(Yj(0) | Xj; θ) + v ̇ (0 | Xj; θ)
vβ(0 | Xj; θ)
)
−1
m
m
∑
j=1
( 1[Dj = 1](Yj − μ0(1, Xj))
v1,β(1 | Xj) − 1[Dj = 0](Yj − μ0(0, Xj))
v0,β(0 | Xj )
)
SX (Xj; θ)
+β 1
m
m
∑
j=1
(
τ0(Xj ) − τ0
)
(
1[Dj = 1]
(
SY (1)(Yj(1) | Xj; θ) + v ̇ (1 | X; θ)
vβ(1 | Xj; θ)
)
+ 1[Dj = 0]
(
SY (0)(Yj(0) | Xj; θ) + v ̇ (0 | Xj; θ)
vβ(0 | Xj; θ)
)
+ SX (Xj; θ)
)
+ (1 − β)
l
∑
k=1
SZ (Zk; θ)
(
τ0(Zk) − τ0
)
]
.
For θ = θ0, it holds that
EW
[
1[D = d]
(
SY (d)(y(d) | X; θ0) + v ̇ (d | X; θ0)
vβ(d | X; θ0)
)
|X
]
= Ep0
[
e0(d | X; θ0)SY (d)(y(d) | X; θ0)
]
+ Eκ0
[
v ̇(d | Z; θ0)
]
= 0,
and
EW
[
1 m
m
∑
j=1
( 1[Dj = 1](Yj − μ0(1, Xj))
v0,β(1 | Xj) − 1[Dj = 0](Yj − μ0(0, Xj))
v0,β(0 | Xj )
)
+β 1
m
m
∑
j=1
(τ0(Xj) − τ0) + (1 − β) 1
l
l
∑
k=1
(τ0(Zk) − τ0)
]
= 0.
Therefore, we have
EW
[
ψ(W )S(W ; θ0)
]
=
EW
[
Y (1)SY (1)(Y (1) | X; θ) − Y (0)SY (0)(Y (1) | X; θ) + βτ0(Z)SX (X; θ) + (1 − β)τ0(Z)SZ (Z; θ)
]
.
Here, from Lemma D.1, we have
EW
[
Y (1)SY (1)(Y (1) | X; θ) − Y (0)SY (0)(Y (1) | X; θ) + βτ0(X)SX (X; θ) + (1 − β)τ0(Z)SZ (Z; θ)
]
= EW
[
Y (1)SY (1)(Y (1) | X; θ) − Y (0)SY (0)(Y (0) | X; θ) + βτ0(X)SX (X; θ) + (1 − β)τ0(Z)SZ (Z; θ)
]
.
Lastly, we verify that ψ ∈ T . We define the functions as
SY (d)(y | x; θ0) = y − μ0(d, x)
v0,β(d | x) ,
v ̇β(d | X; θ0) = 0,
SX (x; θ0) = β(τ0(x) − τ0
),
SZ (z; θ0) = (1 − β)(τ0(z) − τ0
).
Then, ψ ∈ T . The proof is complete.
32

E Proof of Theorem 4.4: Efficient ATE estimator under the Two-Sample Scenario
Recall that we have defined the ATE estimators as
τ ̂ TS-eff
n =1
m
m
∑
j=1
S TS
(X,D,Y )(Xj , Dj , Yj ;μ̂ (b)v, ̂ (b)
β )+ 1
l
l
∑
k=1
SZ (Zk;μ̂ (b)).
We aim to show
√n (
τ ̂ TS-eff
n − τ0
) −d→ N (0, V cc) as n → ∞.
Recall that
S TS
(X,D,Y )(X, D, Y ;μ̂ (b)v, ̂ (b)
β ) = 1[Di = 1](Yi −μ̂ (b)(1, Xi))
v0,β(1, Xi) − 1[Di = 0](Yi − μ0(0, Xi))
v0,β(0, Xi) ,
S TS
(X)(X;μ̂ (b)) =μ̂ (b)(1, X) −μ̂ (b)(0, X).
We have
τ ̂ TS-eff
n =1
m
m
∑
j=1
S TS
(X,D,Y )(Xj , Dj , Yj ;μ̂ (b)v, ̂ (b)
β )+ 1
l
l
∑
k=1
S TS
(X)(Zk;μ̂ (b))
=1
m
m
∑
j=1
S TS
(X,D,Y )(Xj , Dj , Yj ; μ0, v0,β ) + 1
l
l
∑
k=1
S TS
(X)(Zk; μ0)
−1
m
m
∑
j=1
S TS
(X,D,Y )(Xj , Dj , Yj ; μ0, v0,β ) − 1
l
l
∑
k=1
S TS
(X)(Zk; μ0)
+1
m
m
∑
j=1
S TS
(X,D,Y )(Xj , Dj , Yj ;μ̂ (b)v, ̂ (b)
β )+ 1
l
l
∑
k=1
S TS
(X)(Zk;μ̂ (b)).
Here, if it holds that
1 m
m
∑
j=1
S TS
(X,D,Y )(Xj , Dj , Yj ;μ̂ (b)v, ̂ (b)
β )− 1
m
m
∑
j=1
S TS
(X,D,Y )(Xj , Dj , Yj ; μ0, v0,β) = op(1/√m), (13)
1 l
l
∑
k=1
S TS
(X)(Zk, Yk;μ̂ (b)
U,n) − 1
l
l
∑
k=1
S TS
(X)(Zk, Yk; μ0) = op(1/
√
l). (14)
then we have √ N
(
τ ̂ TS-eff
n − τ0
)
=
√
N1
m
m
∑
j=1
S TS
(X,D,Y )(Xj , Dj , Yj ; μ0, v0,β ) +
√
N1
l
l
∑
k=1
S TS
(X)(Zk;μ̂ (b)) + op(1)
= √α1m
m
∑
j=1
S TS
(X,D,Y )(Xj , Dj , Yj ; μ0, v0,β ) + 1
√(1 − α)l
l
∑
k=1
S TS
(X)(Zk;μ̂ (b)) + op(1)
−d→ N (0, V TS(β)),
from the central limit theorem for i.i.d. random variables. We show equation 13 and equation 14 using the same argument as in the proof of Theorem 3.5 and the analysis of double machine learning under the stratified scheme provided in Uehara et al. (2020). As the procedure is nearly identical to the proof in the one-sample scenario, we omit further details. By taking β∗ minimizing the variance, we obtain Theorem 4.4.
33

---

## Processing Information

- **Processing Library:** Zotero PDFWorker
- **Processing Date:** 2026-02-10T18:16:59.620Z
- **Text Length:** 81200 characters
- **Success:** Text extraction completed
- **PDF Library Used:** Zotero PDFWorker
- **Pages Processed:** 33 of 33
