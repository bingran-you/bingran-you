# PDF Document: Zeleneev and Zhang - 2025 - Tractable Estimation of Nonlinear Panels with Interactive Fixed Effects.pdf

**File Path:** Zeleneev and Zhang - 2025 - Tractable Estimation of Nonlinear Panels with Interactive Fixed Effects.pdf

**Processed Date:** 2026-02-10T18:14:38.394Z

**File Size:** 957.58 KB

**Total Pages:** 74

**Extracted Pages:** 74

**PDF Library:** Zotero PDFWorker

**Attachment Item ID:** 3154

**Title:** Tractable Estimation of Nonlinear Panels with Interactive Fixed Effects

**Collection:** Large Files > Random Papers

---

## Extracted Text Content

Tractable Estimation of Nonlinear Panels
with Interactive Fixed Effects∗
Andrei Zeleneev† Weisheng Zhang‡
November 20, 2025
Abstract
Interactive fixed effects are routinely controlled for in linear panel models. While an analo
gous fixed effects (FE) estimator for nonlinear models has been available in the literature (Chen,
Ferna ́ndez-Val and Weidner, 2021), it sees much more limited use in applied research because its im
plementation involves solving a high-dimensional non-convex problem. In this paper, we complement
the theoretical analysis of Chen, Ferna ́ndez-Val and Weidner (2021) by providing a new computa
tionally efficient estimator that is asymptotically equivalent to their estimator. Unlike the previously
proposed FE estimator, our estimator avoids solving a high-dimensional optimization problem and
can be feasibly computed in large nonlinear panels. Our proposed method involves two steps. In
the first step, we convexify the optimization problem using nuclear norm regularization (NNR) and
obtain preliminary NNR estimators of the parameters, including the fixed effects. Then, we find
the global solution of the original optimization problem using a standard gradient descent method
initialized at these preliminary estimates. Thus, in practice, one can simply combine our computa
tionally efficient estimator with the inferential theory provided in Chen, Ferna ́ndez-Val and Weidner
(2021) to construct confidence intervals and perform hypothesis testing.
∗We thank Aureo de Paula and the participants of the 2nd UCL–CeMMAP–IFS Ph.D. Econometrics Research Day (2024) and UCL Econometrics Brownbag Seminar for their valuable comments. We also thank Martin Weidner for sharing the codes and data from Chen, Fern ́andez-Val and Weidner (2021). †University College London: a.zeleneev@ucl.ac.uk.
‡University College London: weisheng.zhang.21@ucl.ac.uk.
arXiv:2511.15427v1 [econ.EM] 19 Nov 2025

1 Introduction
The importance of accounting for interactive unobserved heterogeneity in panel and network models is
well recognized. For example, in linear panel models, interactive fixed effects are routinely controlled for
using, for example, the seminal approaches of Bai (2009) or Pesaran (2006). While analogous methods
for nonlinear models have been developed in the literature (e.g., Chen, Fern ́andez-Val and Weidner,
2021), they see much more limited use in empirical research due to their rapidly growing computational
complexity or the lack of inferential theory.1
The main goal of this paper is to bridge the gap between the recent theoretical developments by Chen,
Fern ́andez-Val and Weidner (2021) and empirical work by providing a new computationally efficient
estimator that can be feasibly implemented in a wide range of nonlinear (semiparametric) settings with
unobserved effects following a linear factor structure. We demonstrate that our estimator has two
important properties. First, unlike the approach of Chen, Ferna ́ndez-Val and Weidner (2021), our
method does not require solving a high-dimensional non-convex optimization problem, so our estimator
can be efficiently computed for large number of units N and time periods T . Second, we argue that our
estimator is asymptotically equivalent to the fixed effects (FE) estimator of Chen, Fern ́andez-Val and
Weidner (2021). This means that, in practice, one can combine our computationally efficient estimator
with the inferential theory provided in Chen, Ferna ́ndez-Val and Weidner (2021) to construct confidence
intervals for various objects of interest including structural parameters and average partial effects.
Our proposed estimation procedure involves the following two steps. In the first step, we obtain
preliminary estimators of the parameters of interest, including the loadings and the factors, by solving a
convex relaxation of the original (non-convex) optimization problem in Chen, Fern ́andez-Val and Weidner
(2021). Following the literature, we convexify the original problem by replacing the low-rank constraint
imposed on the unobserved effects by the factor model with a nuclear norm penalty. Then, we obtain our
final estimator by solving the original optimization problem using a standard gradient descent method
initialized at the preliminary nuclear norm regularized (NNR) estimator obtained in the first step.
To demonstrate that our final estimator is asymptotically equivalent to the FE estimator of Chen,
Fern ́andez-Val and Weidner (2021) defined as the global solution of the original high-dimensional and
non-convex optimization problem, we show that the original problem is locally convex in a shrinking
neighborhood around the true value of the parameters. Importantly, in the general nonlinear setting
studied in this paper (with a growing number of factors and loadings as N, T Ñ 8), the size of this
neighborhood shrinks at a certain rate. To establish the desired result, we characterize the rate of
convergence of our preliminary NNR estimator, and demonstrate that this rate is sufficiently fast to
ensure that our NNR estimator, as well as the FE estimator, falls into that shrinking neighborhood with
probability approaching one.
The idea of using a preliminary NNR estimator to initialize local optimization in (globally) non
convex problems has been previously explored in the econometrics literature. For example, Moon and
Weidner (2018) originally proposed an analogous two-step approach for estimating linear panel models
with interactive fixed effects. In particular, Moon and Weidner (2018) also demonstrate that their two
step estimator is asymptotically equivalent to the LS estimator of Bai (2009). However, extending these
ideas and formally establishing an analogous equivalence result in the general nonlinear setting of Chen,
Fern ́andez-Val and Weidner (2021) is a non-trivial task involving additional technical challenges.
As highlighted above, the main conceptual and technical difference is that, in the general nonlinear
case, the objective function is locally convex only in a shrinking neighborhood of the true parameters
1For example, Zeleneev (2019) proposes a method for estimating network models with (nonparametric) interactive unobserved heterogeneity that does not require solving a high-dimensional nonconvex problem. However, unlike Chen, Fern ́andez-Val and Weidner (2021), Zeleneev (2019) focuses on identification and consistent estimation and does not provide inference tools.
1

value. In particular, unlike in the linear case, one cannot simply profile out the fixed effects using
the singular value decomposition, and demonstrate that the profiled objective function (only depending
on the common parameters β) is locally convex. Since, in the nonlinear case, we cannot work with
the profiled objective function directly, we establish local convexity of the original objective function
by inspecting its hessian taken with respect to all of the parameters including the loadings and the
factors. The analysis is further complicated by the fact that the dimension of the parameter space and
hence the dimension of the hessian grows with N, T Ñ 8. As a result, local convexity of the objective
function can only be established in a shrinking neighborhood of the true parameters. Establishing local
convexity in that neighborhood and characterizing at which rate it shrinks is a technical innovation of
the paper having important practical implications. Specifically, it imposes an additional requirement
on the preliminary estimator’s rate of convergence: unless the preliminary estimator falls into that
shrinking convexity region with probability approaching one, we cannot guarantee that the second step
local optimization finds the global solution. In particular, it turns out that the rate obtained by Moon
and Weidner (2018, Theorem 5) for the NNR estimator in single-index models is not sufficiently fast to
satisfy this requirement.
To take advantage of the local convexity result described above, we provide a new improved error
bound for the NNR estimator in nonlinear models with interactive fixed effects. Following the literature,
we derive this result under a version of the restricted strong convexity (RSC) condition. While various
variations of the RSC condition are routinely employed for deriving analogous results in low-rank models
(e.g., Moon and Weidner, 2018; Chernozhukov et al., 2019; Ma, Su and Zhang, 2022), these conditions
are often difficult to verify. Unlike most previous studies, we provide a set of primitive conditions which
can be used to verify the RSC condition in a wide range of panel models allowing, in particular, for
predetermined covariates.
To make the proposed approach readily applicable, we supplement it with concrete practical im
plementation details. In particular, we provide specific optimization algorithms, which can be used to
efficiently compute the preliminary NNR and the final estimators, and establish their convergence. We
also propose data-driven ways of choosing the regularization parameter involved in the first step and
determining the unknown number of factors. To illustrate the practical advantages of our method, we
study its finite sample properties in a number of numerical experiments and document its excellent per
formance and computational efficiency even in fairly large panels with pN, T q “ p1000, 200q. Finally, we
revisit the empirical application of Chen, Fern ́andez-Val and Weidner (2021).
This paper contributes to the literature on estimation of panel (and network) models with interactive
fixed effects in two important ways.
First, we complement the theoretical analysis of nonlinear panel models provided by Chen, Fern ́andez
Val and Weidner (2021) by proposing a new estimator that is asymptotically equivalent to their FE esti
mator. Importantly, unlike their FE estimator, our estimator does not involve solving a high-dimensional
non-convex optimization problem, making it an attractive, if not the only available, computationally ef
ficient alternative, which can be feasibly implemented even when both N and T are large. Our two-step
approach to solving a non-convex optimization problem essentially extends the proposal of Moon and
Weidner (2018) to nonlinear settings. However, as explained above, establishing the asymptotic equiva
lence between the two-step and FE estimators in nonlinear settings is more nuanced: it involves careful
establishing of local convexity of the criterion function in a shrinking neighborhood of the true parame
ters value, resulting in additional requirements imposed on the preliminary NNR estimator’s convergence
rate absent in the linear case studied by Moon and Weidner (2018).
Second, we also contribute to the literature on nuclear norm regularized estimation of low-rank models
by extending the previously available results established by Moon and Weidner (2018) and Chernozhukov
2

et al. (2019) for linear panel models to nonlinear settings. By verifying the RSC condition in a wide class
of nonlinear panel models, we improve on the result of Moon and Weidner (2018, Theorem 5), which
extends their original analysis to single-index models. Importantly, our analysis allows for predetermined
covariates such as the outcome’s lags, which are routinely used in panels, whereas the existing studies
providing error bounds for the NNR estimator either only consider strictly exogenous covariates or do
not verify the RSC condition at all.2
The idea of using nuclear norm regularization to turn estimation of low-rank models, such as factor
models, into a convex problem has been extensively applied in various settings in statistics and econo
metrics. In econometrics, its numerous recent applications include estimation of pure factor models (Bai
and Ng, 2017, 2019), estimation of linear (Moon and Weidner, 2018; Chernozhukov et al., 2019; Beyhum
and Gautier, 2019; Mugnier, 2025) and quantile panel regressions (Belloni et al., 2023; Wang, Su and
Zhang, 2022; Feng, 2023), and treatment effect estimation (Athey et al., 2021; Fern ́andez-Val, Freeman
and Weidner, 2021). Nuclear norm relaxations have also been proved useful in constructing estimation
and inference methods robust to weak factors (Armstrong, Weidner and Zeleneev, 2022) and missing
data (Su, Wang and Wang, 2025). Other recent applications of nuclear norm regularization also include,
among others, network recovery and community detection (Alidaee, Auerbach and Leung, 2020 and Ma,
Su and Zhang, 2022), and estimation of panel threshold models and high-dimensional VARs (Miao, Li
and Su, 2020 and Miao, Phillips and Su, 2023).
Notation For any vector u P Rn, its Euclidean norm is denoted as }u} “ pu1uq
1
2 . For any matrix
A P Rmˆn, we use A1 to denote the transpose of A, and use }A}F “ ptracepA1Aqq
1
2 to denote the
Frobenius norm. Furthermore, the singular values of A are arranged in non-increasing order: ψ1 pAq ě
ψ2 pAq ě . . . ě ψmintm,nu pAq ě 0. The l2 operator norm, }A}op “ ψ1 pAq, is the maximum singular
value of the matrix, and the nuclear norm is the sum of all singular values: }A}nuc “ řmintm,nu
i“1 ψi pAq.
We also use }A}max “ maxi,j |Aij| to denote the element-wise norm. When A is a square matrix, we use
σipAq to denote A’s i-th largest eigenvalue. We also use ψmax, ψmin, σmax, σmin to denote the max/min
singular values and max/min eigenvalues respectively. Finally, for any two square matrices A and B of
the same dimension, we use A ě B to denote that A  ́ B is positive semi-definite, and A ą B to denote
that A  ́ B is positive definite. We use the abbreviation wpa1 instead of with probability approaching
to 1.
2 The Model and Two Step Estimation
2.1 The Model
We observe data tpYit, Xitqu1ďiďN,1ďtďT , where Yit is a scalar outcome variable and Xit P RdX a vector of
covariates. For concreteness, we adopt the standard panel notation with i indexing units and t indexing
time periods, but it should be understood that the considered framework applies to general two-way
settings. For example, in a directed network i and t could index senders and receivers (e.g., exporters
and importers in an international trade network). The covariates Xit could be strictly exogenous or
predetermined, e.g., our framework also accommodates lagged outcomes as covariates in panels.
We assume that the (conditional) distribution of Yit belongs to a known family of distributions and
is determined by the latent index Yit ̊, i.e., we assume that the (conditional) log-likelihood takes the form
log f pYit|Xit, λ0,i, γ0,tq “ lpYit|Y  ̊
it q, Y  ̊
it “ X1
itβ0 ` λ1
0,iγ0,t, (2.1)
2For example, Ma, Su and Zhang (2022) consider NNR estimation in a logistic network formation model and establish statistical guaranties similar to ours by utilizing a version of the RSC condition. However, they simply state their RSC condition as a high-level assumption and do not attempt to provide a set of primitive conditions for it to hold.
3

where lp ̈|Yit ̊q is a known log-likelihood function, and β0 P RdX is a parameter of interest. Here, λ0,i P RR
and γ0,t P RR are unobserved interactive unit and time effects, commonly referred to as loadings and
factors. This formulation is substantially more flexible than the routinely employed two-way fixed effects
(TWFE) model, λ0,i ` γ0,t, because it allows incorporating multidimensional heterogeneous individual
responses λ0,i to time-varying aggregate shocks γ0,t.3 In particular, the TWFE model corresponds to
the special case of the interactive fixed effects model with R “ 2, λ0,i “ pλ0,i, 1q1 and γ0,i “ p1, γ0,tq1.
Following Chen, Fern ́andez-Val and Weidner (2021), we consider the so-called large N, T asymptotics
with N, T Ñ 8 whereas we treat both dX and R as fixed. For now, we will also assume that the number
of factors R is known; we will discuss estimation of R in Section 4. Finally, we do not put additional
restrictions on the relationship between the covariates and the unobserved effects, i.e., we adopt the fixed
effects approach.
While the single index formulation (2.1) is restrictive, it covers a number of important nonlinear
models including binary response models such as Probit and Logit, and Poisson regression.
Example 1 (Binary response model) Let Yit be a binary outcome, and consider the binary response
model Yit “ 1pYit ̊  ́ εit ě 0q, where 1p ̈q is the indicator function. Let F p ̈q be the cumulative distribution
function (CDF) of εit, for example, the logistic distribution for the Logit model or the standard normal
distribution for the Probit model. The conditional distribution of Yit is given by:
PpYit “ y | Y  ̊
it q “ F pY  ̊
it qyp1  ́ F pY  ̊
it qqp1 ́yq, y P t0, 1u
Example 2 (Poisson model) Let Yit be count data. Conditional on Yit ̊, Yit conforms Possion distri
bution with parameter exppYit ̊q. The conditional probability of Yit is given by:
PpYit “ y | Y  ̊
it q “ expp ́ exppYit ̊qqpexppYit ̊qqy
y! , y “ 0, 1, 2, . . .
2.2 Fixed Effects MLE Estimator and Computational Challenges
Chen, Fern ́andez-Val and Weidner (2021) propose estimating the model by the fixed effects (FE) MLE
estimator maximizing the conditional log-likelihood jointly over the common parameters β, loadings
tλiu1ďiďN and factors tγtu1ďtďT . Specifically, the FE estimator pβˆFE, Λˆ FE, ˆΓFEq solves
pβˆFE, ˆΛFE, ΓˆFEq P argmin
β,Λ,Γ
 ́1
NT
N
ÿ
i“1
T
ÿ
t“1
lpYit | X1
itβ ` λ1
iγtq
looooooooooooooooooooomooooooooooooooooooooon
LNT pβ,Λ,Γq
, (2.2)
where, for notational simplicity, we collect the unobserved effects tλiu1ďiďN and tγtu1ďtďT into matrices
Λ “ pλ1, λ2, . . . , λN q1 P RNˆR and Γ “ pγ1, γ2, . . . , γT q1 P RT ˆR. Note that problem (2.2) does not have
a unique solution for ˆΛFE and ΓˆFE and thus requires a normalization. We will abstract from this issue
for now and discuss it in more detail in Section 3.
Chen, Fern ́andez-Val and Weidner (2021) showed that the FE estimator of β0 is ?N T -consistent and
asymptotically normal, with an asymptotic incidental parameter bias that can be corrected through vari
ous bias reduction methods. However, despite these well-established theoretical properties, implementing
the FE estimator remains a significant computational challenge.
The key computational difficulty is the non-convexity of the objective function LNT pβ, Λ, Γq. To
better understand this issue, we reformulate the original optimization problem into an alternative but
3Chen, Ferna ́ndez-Val and Weidner (2021) also argue that the interactive fixed effects model is sufficiently flexible to allow for homophily based on unobservables (as well as for degree heterogeneity) in network settings.
4

equivalent form. Let θit “ λ1iγt and collect θit into a matrix Θ P RNˆT . Note that since matrices Λ and
Γ have at most rank R, the rank of Θ “ ΛΓ1 is also at most R. Equivalently, any matrix Θ P RNˆT such
that rankpΘq ď R can be represented as ΛΓ1 for some Λ P RNˆR and Γ P RT ˆR.4 Thus, problem (2.2)
can be equivalently reformulated as
pβˆFE, Θˆ FEq P argmin
βPRdX ,ΘPRNˆT
 ́1
NT
N
ÿ
i“1
T
ÿ
t“1
lpYit | X1
itβ ` θitq
looooooooooooooooooomooooooooooooooooooon
LNT pβ,Θq
, s.t. rankpΘq ď R. (2.3)
The non-convexity arises from the rank constraint rankpΘq ď R: the set of matrices satisfying it is not
convex since the sum of two rank-R matrices could have a rank up to 2R.
The high-dimensional parameter space further exacerbates the computational challenges. When
dealing with non-convex optimization problems, it is common practice to start the optimization process
with multiple initial values and select the solution that minimizes the objective function. This approach
is generally considered effective for finding the global minimum with sufficient trials. However, for
problems (2.2) and (2.3) involving dX ` RpN ` T q parameters, this approach becomes intractable even
for moderate values of N and T .
Remark 1 Chen, Ferna ́ndez-Val and Weidner (2021) propose solving optimization problem (2.2) using
the EM-algorithm of Chen (2016) initialized at multiple initial values. Unfortunately, this method does
not overcome the computational challenge discussed above because the EM-algorithm of Chen (2016) as
well as EM-algorithms in general do not have global convergence guarantees in non-convex problems.
2.3 Two-Step Estimation
To overcome the computational challenges faced by the FE estimator, we propose an alternative two-step
estimation procedure. Our procedure does not involve solving a non-convex problem and can be efficiently
computed even for large values of N and T . Importantly, in Section 3, we demonstrate that, under
standard regularity conditions, our two-step estimator is asymptotically equivalent to the FE estimator,
whose asymptotic properties have been established in Chen, Fern ́andez-Val and Weidner (2021). This
means that, instead of trying to solve the non-convex and high-dimensional optimization problem (2.2)
directly, one could compute our two-step estimator and then combine it with the asymptotic theory
developed by Chen, Fern ́andez-Val and Weidner (2021) to construct confidence intervals for parameters
of interest and for other counterfactuals such as average partial effects (APEs).
Our estimation procedure involves the following two steps.
Step 1: Nuclear Norm Regularized (NNR) Estimation
The goal of the first step is to construct an easily computable preliminary estimator of pβ0, Λ0, Γ0q that
is sufficiently close to the global minimizer in (2.2). To this end, we consider a convex relaxation of
problem (2.3) of the form
 ́βˆnuc, Θˆ nuc
 ̄
“ argmin
βPRdX ,ΘPRNˆT
"
LNT pβ, Θq ` φNT
?N T }Θ}nuc
*
, (2.4)
where }Θ}nuc denotes the nuclear norm of matrix Θ, and φNT ą 0 is a regularization parameter. We
will refer to the solution of this problem pβˆnuc, Θˆ nucq as the nuclear norm regularized (NNR) estimator.
4The representation of Θ with rankpΘq ď R as Θ “ ΛΓ1 is not unique. If Θ “ ΛΓ1 for some Λ and Γ, we also have Θ “ Λ ̃  ̃Γ1 for Λ ̃ “ ΛG1 and  ̃Γ “ ΓG ́1 for any invertible matrix G P RRˆR. This non-uniqueness manifests itself in the necessity of normalizing Λ and Γ in problem (2.2) in order to ensure uniqueness of Λˆ FE and ˆΓFE.
5

Since }Θ}nuc is a convex function of Θ, problem (2.4) is convex when LNT pβ, Θq is a convex function
of β and Θ. This condition is satisfied in important nonlinear models such as Logit, Probit, and Poisson
models. Thanks to the convexity of problem (2.4), the NNR estimator can be efficiently computed
using, for example, a proximal gradient descent method (e.g., Hastie, Tibshirani and Wainwright, 2015)
even when the parameter space is high-dimensional. We provide a specific optimization algorithm and a
data-dependent recommendation for choosing the regularization parameter φNT in Section 4.
Notice that problem (2.4) can be equivalently rewritten as
 ́βˆnuc, Θˆ nuc
 ̄
“ argmin
βPRdX ,ΘPRNˆT
LNT pβ, Θq , s.t. }Θ}nuc ď CφNT
for an appropriately chosen CφNT ą 0 determined by φNT . Thus, problem (2.4) can be seen as a
convexification of problem (2.3), where the non-convex rank constraint is replaced by the slightly looser
yet convex constraint }Θ}nuc ď CφNT . Analogously to LASSO using the l1-regularization to induce
sparsity of the solution in a high-dimensional regression, the nuclear norm regularization (i.e., the l1
regularization of the singular values of Θ) induces Θˆ nuc to have low rank (i.e., sparsity of its singular
values).
Finally, the nuclear norm regularized estimators pˆΛnuc, Γˆnucq are obtained through the singular
value decomposition of ˆΘnuc. Specifically, let Θˆ nuc{
?N T “ Uˆ Dˆ Vˆ 1, where Uˆ P RNˆmintN,T u and
Vˆ P RT ˆmintN,T u are matrices with left and right orthonormal singular vectors of Θˆ nuc, and Dˆ is a
diagonal matrix with singular values of Θˆ nuc{
?N T (arranged in non-increasing order) on its diagonal.
Let Uˆr:,1:Rs and Vˆr:,1:Rs denote the matrices containing the first R columns of Uˆ and Vˆ , respectively, and
Dˆr1:R,1:Rs denote the upper-left R ˆ R diagonal block of Dˆ . We compute pΛˆ nuc, Γˆnucq as follows:
ˆΛnuc “
?N Uˆr:,1:RsDˆ 1{2
r1:R,1:Rs, Γˆnuc “
?T Vˆr:,1:RsDˆ 1{2
r1:R,1:Rs. (2.5)
Step 2: Local Estimation
While, with appropriately chosen φNT , the NNR estimator is consistent for the true values pβ0, Λ0, Γ0q,
it suffers from the regularization bias. To improve on the NNR estimator, in the second step, we solve
the original optimization problem (2.2) using a standard gradient decent method with pβˆnuc, ˆΛnuc, Γˆnucq
as the initial values. While the original problem (2.2) is non-convex, availability of the NNR estimator
allows us to guarantee that standard local optimization methods initialized at pβˆnuc, ˆΛnuc, ˆΓnucq converge
to the global solution pβˆFE, ΛˆFE, ΓˆFEq. In particular, in Section 4, we provide a specific gradient decent
algorithm and establish its convergence guarantees.5
Specifically, to demonstrate that our two-step estimator is (asymptotically) equivalent to the FE
estimator, in Section 3, we show that, with probability approaching one, (i) the objective function
LNT pβ, Λ, Γq is strictly convex in a shrinking neighborhood around the true values pβ0, Λ0, Γ0q, and
(ii) the NNR estimator falls into this neighborhood. The technical difficulty here is that, since the
dimension of the parameter space grows with N, T Ñ 8, the size of the local neighborhood, in which
Lpβ, Λ, Γq remains convex, shrinks at a certain right. To established the desired result, we characterize (an
upper bound for) this rate, and show that the NNR estimator has a sufficiently fast rate of convergence
to fall into that neighborhood with probability approaching one.
Bias Correction and Inference
Since our two-step estimator is asymptotically equivalent to the FE estimator, it also follows the same
asymptotic distribution previously derived by Chen, Fern ́andez-Val and Weidner (2021). In particular,
5In principle, instead of using a gradient decent method, it is possible also employ an EM-algorithm (see, e.g., Chen, 2016; Chen, Ferna ́ndez-Val and Weidner, 2021) initialized at pβˆnuc, Λˆ nuc, ˆΓnucq.
6

the two-step estimator of β0 suffers from the incidental parameter bias caused by estimation of a large
number of nuisance parameters. For various bias correction methods as well as for the general asymptotic
properties of the FE estimator, we refer the reader to Chen, Fern ́andez-Val and Weidner (2021).
3 Asymptotic Analysis
In this section, we present the consistency of the NNR estimator and establish the local convexity for the
original optimization problem (2.2). Combining these results, we demonstrate the asymptotic equivalence
between our two-step estimator and the FE estimator.
3.1 Consistency of NNR Estimator
We present the consistency of pβˆnuc, Θˆ nucq as well as the nuisance estimators p ˆΛnuc, Γˆnucq. To establish
these results, we provide regularity conditions and high-level conditions that guarantee consistency.
Although our analysis in the main text focuses on the simpler case where Xit is strictly exogenous,
in Appendix A, we extend this analysis to the more complex case where Xit includes predetermined
variables.
We impose additional constraints on the nuclear-norm penalization problem, }β}max ď ρβ and
}Θ}max ď ρθ. These constraints, which are standard in extremum estimation, ensure that optimiza
tion is conducted within a compact parameter space. The formal definition of the NNR estimator is
given by:
 ́βˆnuc, Θˆ nuc
 ̄
“ argmin
βPRdX ,ΘPRNˆT
"
LNT pβ, Θq ` φNT
?N T }Θ}nuc
*
s.t. }β}max ď ρβ, }Θ}max ď ρθ
(3.1)
For notational simplicity, we collect Xit,d into covariate matrices Xd P RNˆT for each d “ 1, 2, . . . , dX ,
and let X be the collection of all covariate matrices X “ tX1, . . . , XdX u. Whenever it does not cause
confusion, we abbreviate litp ̈q “ lpYit |  ̈q. We further denote derivatives by l9it, l:it, . . .. In addition, we
use PX,Λ0,Γ0 “ Pp ̈ | X, Λ0, Γ0q to denote the conditional probability and EX,Λ0,Γ0 “ Ep ̈ | X, Λ0, Γ0q to
denote the conditional expectation. We now introduce the regularity conditions.
Assumption 1 (Regularity Conditions) Suppose that
(i) (Sampling) For each i “ 1, 2, . . . , N, t “ 1, 2, . . . , T , conditional on pX, Λ0, Γ0q, tYitu1ďiďN,1ďtďT
is distributed as in (2.1) and is independent across i and t.
(ii) (Compactness) The parameter spaces for β, λi, and γt are bounded uniformly for all i, t, N, T .
In addition, there exists a constant ρX ą 0 such that maxd“1,...,dX }Xd}max ď ρX for all i, t, N, T .
(iii) (Smoothness and Convexity)  ́litp ̈q is four times continuously differentiable and strictly convex
almost surely. Furthermore, we assume that 0 ă bmin ď  ́l:itpXi1tβ ` λ1iγtq ď bmax ă 8 almost
surely for all β, λi, γt in the parameter space uniformly over i, t, N, T .
(iv) (Strong Factors) Assume that 1
N
řN
i“1 λ0,iλ10,i
ÝpÑ Σλ and 1
T
řT
t“1 γ0,tγ10,t
ÝpÑ Σγ, where Σλ ą 0
and Σγ ą 0. In addition, the eigenvalues of ΣλΣγ are distinct.
Assumption 1(i) concerns the independence of Yit over i and t. This aligns with the sampling
assumption in Chen, Fern ́andez-Val and Weidner (2021) and is primarily applicable in contexts where
Xit is strictly exogenous. Furthermore, this assumption is well-suited to settings involving network data,
where the ordering of agents is irrelevant. We will discuss a more general assumption that accommodates
predetermined covariates in Section A.
7

Assumption 1(ii) imposes compactness on the parameter spaces for β, Λ, and Γ, as well as the
boundedness of covariates. This assumption is widely adopted in the literature to derive concentration
bounds (see, for example, Chernozhukov et al., 2019, Chernozhukov et al., 2023, and Ma, Su and Zhang,
2022). It is worth noting that Fern ́andez-Val and Weidner (2016) and Chen, Fern ́andez-Val and Weidner
(2021) do not impose the boundedness of λi, γt, or Xit because their analyses focus on the local properties
of the loss function. In contrast, our study requires stronger conditions to ensure global control over
parameter behavior. Although the compactness of λi, and γt could be replaced with a sub-Gaussian
assumption, this would require assuming that tλiu1ďiďN are independent across i and tγtu1ďtďT are
independent across t. However, such an assumption is inconsistent with the panel data setting, where
time fixed effects are typically correlated across periods.
Assumption 1(iii) is commonly adopted in the nonlinear panel regression literature (see Fern ́andez
Val and Weidner, 2016 and Chen, Fern ́andez-Val and Weidner, 2021) and is satisfied by Logit, Probit,
and Poisson models.
Assumption 1(iv) refers to the strong factor condition and is standard in the factor model literature.6
Additionally, the compactness of the nuisance parameter space ensures that the maximum eigenvalues
of Σλ and Σγ are bounded. We also impose the assumption that ΣλΣγ has distinct eigenvalues, but it
is not necessary. It is introduced purely to simplify the discussion of technical aspects in the main text.
In the Appendix, we demonstrate that relaxing this assumption does not affect our main results.
We now turn to a key condition for establishing the consistency of our NNR estimator, the restricted
strong convexity (RSC) condition. This condition, originally introduced by Negahban et al. (2012), plays
an important role by simplifying the derivation of error bounds for regularized M-estimators. The RSC
condition has been widely applied in matrix estimation problems with low-rank constraints, including
matrix completion (Negahban and Wainwright, 2012), reduced-rank regression estimation (Rohde and
Tsybakov, 2011), and econometric analysis of low-rank models (Moon and Weidner, 2018, Chernozhukov
et al., 2019).
Establishing the error bound for the NNR estimator requires analyzing the Hessian of the loss function.
As in nonlinear models with a fixed number of parameters, we want the loss function to have a positive
definite Hessian, or equivalently, exhibit strong convexity. However, in the context of problem (3.1),
it is not possible for the Hessian matrix to be positive definite, as the number of parameters increases
with N, T Ñ 8 and exceeds the number of observations. Nonetheless, researchers can impose an RSC
condition that guarantees strong convexity within a restricted subspace where the parameter space is
approximately low-rank. This motivates the adoption of RSC as a key assumption for addressing the
high-dimensional nature of our estimator.
To elaborate, the second-order remainder of the Taylor expansion of the loss function around the true
parameter is:
1 NT
N
ÿ
i“1
T
ÿ
t“1
p ́l:it pX 1
itβ ̃ ` θ ̃itqqpX1
it∆β ` ∆θit q2 ě bmin
1 NT
N
ÿ
i“1
T
ÿ
t“1
pX 1
it∆β ` ∆θit q2
looooooooooooooooomooooooooooooooooon
ENT p∆β ,∆Θq
where pβ ̃, Θ ̃ q lies between pβ, Θq and pβ0, Θ0q. Since the second-order derivative l:it is bounded below by
bmin (Assumption 1(iii)), it suffices to study the property of ENT p∆β, ∆Θq within a restricted parameter
6Developing estimation and inference methods robust to weak factors is an important but highly nontrivial problem, even in linear panels; see Armstrong, Weidner and Zeleneev (2022). In this paper, we simply follow the set-up of Chen, Fern ́andez-Val and Weidner (2021) and leave the important problem of allowing for weak factors in nonlinear models for future research.
8

space. We introduce additional notation:
MΛ0 “ IN  ́ Λ0
`Λ1
0Λ0
 ̆ ́1 Λ1
0, MΓ0 “ IT  ́ Γ0
`Γ1
0Γ0
 ̆ ́1 Γ1
0 (3.2)
We are now ready to formalize the RSC condition in our settings.
Assumption 2 (Restricted strong convexity (RSC)) For any c0 ą 0, define
C1 “
!
p∆β , ∆Θq P pRdX ˆ RNˆT q | }MΛ0 ∆ΘMΓ0 }nuc ď c0p
?N T }∆β} ` }∆Θ  ́ MΛ0 ∆ΘMΓ0 }nucq
)
C2 “
#
p∆β, ∆Θq P pRdX ˆ RNˆT q | }∆β}2 ` 1
N T }∆Θ}2
Fě
c
logpN T q NT
+
We assume there exist constants κ, η ą 0, independent of N, T , such that for any p∆β, ∆Θq P C1 X C2,
we have:
1 NT
N
ÿ
i“1
T
ÿ
t“1
pX 1
it∆β ` ∆θit q2 ě κ
ˆ
}∆β}2 ` 1
N T }∆Θ}2
F
 ̇
 ́ηN `T
N T plogpN T qq2, wpa1 (3.3)
The first part of the assumption defines the restricted space of interest C1 X C2. C1 can be viewed
as an approximately low rank space. The term ∆Θ  ́ MΛ0 ∆ΘMΓ0 on the right-hand side represents the
component that can be explained by Λ0 and Γ0, serving as a low-rank approximation. In contrast, the
left-hand side, MΛ0 ∆ΘMΓ0 , corresponds to the residual of ∆Θ that cannot be explained by Λ0 and Γ0,
interpreted as the low-rank approximation residual. Therefore, C1 consists of matrices whose low-rank
approximation residuals (in terms of nuclear norm) are small compared to their low-rank approximation
(along with the estimation error of β). The set C2 is introduced to restrict our attention to scenarios
of primary interest. Given that we can directly obtain bounds, }∆β}22 ď
b
logpN T q
NT and 1
NT }∆Θ}2
Fď
b
logpN T q
NT for matrices that do not belong to this space, focusing on C2 simplifies the analysis without
loss of generality.
The second part imposes the strong convexity condition in the restricted space C1 X C2, with an
additional tolerance term η N`T
NT plogpN T qq2 to account for the randomness in Xit. This ensures that the
optimization (3.1) is strongly convex (up to the tolerance term) within the restricted space C1 X C2, even
in the high-dimensional setting.
Remark. Our RSC conditions are similar to those employed in the low-rank estimation literature. For
instance, Moon and Weidner (2018) employs an RSC condition in the context of linear panel models with
interactive fixed effects and homogeneous slopes. Similarly, Chernozhukov et al. (2019) applies the RSC
condition to linear panel regression models with interactive fixed effects and heterogeneous slopes. Addi
tionally, Ma, Su and Zhang (2022) utilizes a comparable condition to detect latent community structures
in network models.
While it is straightforward to see that RSC rules out certain types of regressors, such as time-invariant
or individual-specific regressors, verifying RSC directly as a high-level condition can be challenging. Moon
and Weidner (2018) derives sufficient conditions for the RSC in their settings, but these conditions are
not easily verifiable in practice. Chernozhukov et al. (2019) provides sufficient conditions for verifying
RSC in the panel data setting, though their results are restricted to strictly exogenous covariates. We
extend Chernozhukov et al. (2019)’s result to predetermined Xit and provide a set of easily verifiable
low-level sufficient conditions. We believe that, given the fundamental role of the RSC condition in low
rank estimation, providing accessible verification is essential for broadening the applicability of low-rank
estimators and enabling applied researchers to adopt them with greater confidence. The following lemma
9

formalizes the verification of the RSC condition.
Lemma A.4 Under Assumption A.1 and Assumption A.3 in the Appendix, the RSC condition (As
sumption 2) is satisfied.
Since the primary focus of this paper is on developing a tractable estimation method, we defer the
discussion of the sufficient conditions for RSC to Lemma A.4 in Appendix. This allows us to provide a
more detailed examination of these conditions without interrupting the flow of the main argument.
For the true nuisance parameters pΛ0, Γ0q, we impose the normalization constraints that Λ10Λ0{N and
Γ10Γ0{T are diagonal, with Λ10Λ0{N “ Γ10Γ0{T . This normalization is consistent with the construction of
pΛˆnuc, Γˆnucq in (2.5). The feasibility of this normalization will be discussed in the Appendix A.
Theorem 1 For any α ą 0 such that φNT ě p1`αq maxt}∇βLNT pβ0, Θ0q }2, ?N T }∇ΘLNT pβ0, Θ0q }opu,
under Assumption 1, Assumption 2, as N, T Ñ 8, there exist constants c1, c2 ą 0 that do not depend
on N, T such that wpa1:
}βˆnuc  ́ β0} ď c1
 ́
φNT ` logpN T q{
amintN, T u
 ̄
? 1N T }Θˆ nuc  ́ Θ0}F ď c1
 ́
φNT ` logpN T q{
amintN, T u
 ̄
In addition, wpa1:
?1N }Λˆ nuc  ́ Λ0}F ď c2
 ́
φNT ` logpN T q{
amintN, T u
 ̄
?1T }Γˆnuc  ́ Γ0}F ď c2
 ́
φNT ` logpN T q{
amintN, T u
 ̄
Theorem 1 shows that for a sufficiently large tuning parameter φNT , the estimator βˆnuc converges
to β0 at a rate of at most logpN T q{
amintN, T u. Similarly, Θˆ nuc achieves the same convergence rate in
terms of normalized Frobenius norm, as well as the NNR nuisance estimators pΛˆnuc, Γˆnucq. Furthermore,
note that the convergence rate in Theorem 1 relies on the order of φNT , thus we should avoid selecting
an excessively large φNT , and in the ideal case, φNT should be of order logpN T q{
amintN, T u. The
following corollary formalizes this idea.
Corollary 2 Under the conditions of Theorem 1, let φNT “ O
 ́
logpN T q{
amintN, T u
 ̄
, there exist
constants c3, c4 ą 0 that do not depend on N, T such that wpa1:
}βˆnuc  ́ β0} ď c3 logpN T q{
amintN, T u
? 1N T }Θˆ nuc  ́ Θ0}F ď c3 logpN T q{
amintN, T u
In addition, wpa1:
?1N }Λˆ nuc  ́ Λ0}F ď c4
 ́
φNT ` logpN T q{
amintN, T u
 ̄
?1T }Γˆnuc  ́ Γ0}F ď c4
 ́
φNT ` logpN T q{
amintN, T u
 ̄
The convergence rate logpN T q{
amintN, T u is comparable to the rates established by Moon and Weidner
(2018) and Chernozhukov et al. (2019), with an extra logpN T q giving an upper bound on the estimation
error. Although this convergence rate is slower than 1{
?N T , it suffices to demonstrate that our two-step
estimator is asymptotically equivalent to the FE estimator.
10

3.2 Local Convexity
In this subsection, we establish the asymptotic equivalence between our two-step estimator and the FE
estimator. This result builds on the consistency of the NNR estimator and the local convexity of the
objective function LNT pβ, Λ, Γq.
We first formalize the definition of the FE estimator pβˆFE, ˆΛFE, ΓˆFEq:
pβˆFE, Λˆ FE, ΓˆFEq P argmin
β,Λ,Γ
LNT pβ, Λ, Γq
s.t. }β}max ď ρβ, }Λ}max ď ρλ, }Γ}max ď ργ
(3.4)
The additional constraints, }Λ}max ď ρλ and }Γ}max ď ργ, are standard in extremum estimation, which
enables optimization within a compact parameter space.
Since the NNR estimator pβˆnuc, ˆΛnuc, Γˆnucq is used to initialize the optimization (3.4), its consistency
ensures that the initial estimates lie within a shrinking neighborhood of the true parameters as N, T Ñ 8.
Thus, it suffices to focus on the local properties of LNT pβ, Λ, Γq within these shrinking neighborhoods.
To formalize the argument, let tδNT u1ďiďN,1ďtďT be a sequence of radius shrinking to zero, and define
the shrinking neighborhood around the true parameters pβ0, Λ0, Γ0q as follows:
BδNT “
"
pβ, Λ, Γq |}β  ́ β0}, ?1N }Λ  ́ Λ0}F, ?1T }Γ  ́ Γ0}F ď δNT , }Λ}max ď ρλ, }Γ}max ď ργ
*
(3.5)
The neighborhood BδNT consists of parameters whose distances to the true values pβ0, Λ0, Γ0q are less
than δNT . The second-step estimator (or the local estimator), pβˆlocal, Λˆ local, ˆΓlocalq, solves:
pβˆlocal, Λˆ local, ˆΓlocalq P argmin
pβ ,Λ,ΓqPBδN T
LNT pβ, Λ, Γq (3.6)
where the parameter space is restricted to a shrinking neighborhood BδNT .
We can establish asymptotic equivalence result if, with a properly chosen δNT , the following conditions
hold: (1) the NNR estimator falls within the shrinking neighborhood, i.e., pβˆnuc, Λˆ nuc, Γˆnucq P BδNT
wpa1,7 (2) the FE estimator, as the global minimizer of problem (2.2), also lies within the shrinking
neighborhood up to rotation wpa1, and (3) the objective function LNT pβ, Λ, Γq is strictly convex within
the neighborhood BδNT . Under these conditions, we can theoretically guarantee that wpa1: (1) using
NNR estimator as the initial value leads to the global minimum, and (2) our estimator is asymptotically
equivalent to the FE estimator.
Let δNT “ logpN T q mintN  ́3{8, T  ́3{8u. The NNR estimator falls within the shrinking neighborhood
wpa1 by Corollary 2. The FE estimator also lies within the shrinking neighborhood wpa1, as shown in
Lemma 1 in Chen, Fern ́andez-Val and Weidner (2021). Therefore, the key step in establishing asymptotic
equivalence is to establish local convexity of the original objective function LNT pβ, Λ, Γq within BδNT . It
should be noted that for linear panel models, such as those studied in Moon and Weidner (2018) and Su,
Wang and Wang (2025), the original objective function is locally convex in BδNT whenever δNT “ oP p1q.
In contrast, local convexity is more delicate in our nonlinear setting, which requires the neighborhood to
shrink at a faster rate than in the linear cases.
Analogous to the linear case, we need R2 constraints to identify pΛ, Γq. However, for any R
dimensional non-singular matrix G, the conditional distribution of Yit remains invariant under the trans
formations λi ÞÑ λiG1 and γt ÞÑ γtG ́1. This invariance allows us to freely choose different normalization
7One potential concern is that the entries of pΛˆ nuc, ˆΓnucq are not necessarily uniformly bounded. This is not a substantive issue, as we can truncate and normalize pΛˆ nuc, ˆΓnucq to obtain nuisance estimators that satisfy the uniform boundedness condition. The details of this procedure, along with a proof demonstrating that it does not affect the theoretical results, are provided in the Appendix.
11

methods for different purposes without affecting the inference of β0. Although applied researchers can
freely choose different normalization methods, certain choices can greatly facilitate theoretical analysis.
In the following text, we follow Chen, Ferna ́ndez-Val and Weidner (2021) and focus on the restricted
parameter set:
ΦNT “
!
pΛ, Γq | Λˆ 1
nucΛ{N “ Γ1 ˆΓnuc{T
)
which is consistent with the construction in (2.5) and the normalization of pΛ0, Γ0q. Unlike the commonly
used approach in the literature, where Γ1Γ{T “ I and Λ1Λ{N is diagonal, our restricted set consists
of linear functions of pΛ, Γq, which will bring huge convenience in the following theoretical analysis.
Particularly, instead of imposing ΦNT directly, we convert it into a quadratic penalization term:
}Λˆ 1
nucΛ{N  ́ Γ1 ˆΓnuc{T }2
F
whose Hessian matrix V only depends on pΛˆnuc, Γˆnucq due to its linear nature. Define the penalized
sample log-likelihood:
pβˆlocal, ˆΛlocal, Γˆlocalq “ argmin
pβ ,Λ,ΓqPBδN T
"
LNT pβ, Λ, Γq ` 1
2 }Λˆ 1
nucΛ{N  ́ Γ1 ˆΓnuc{T }2
F
*
(3.7)
which is equivalent to solving (3.6) with normalization constraint pΛ, Γq P ΦNT . The differentiability
of the penalty simplifies the analysis of Hessian, providing a more tractable alternative to the hard
constraint. It is worth noting that the penalization term is introduced for theoretical considerations but
is unnecessary in practical.
The sample Hessian of the objective function in (3.7) with respect to pβ, Λ, Γq is given by
HNT pβ, Λ, Γq “ ∇2LNT pβ, Λ, Γq ` 1
2 ∇2}Λˆ 1
nucΛ{N  ́ Γ1Γˆnuc{T }2
F
It is a pdX `RpN `T qq-dimensional square matrix.8 Establishing local convexity is equivalent to showing
that the Hessian HNT pβ, Λ, Γq is positive definite for any pβ, Λ, Γq P BδNT . Consider the decomposition
of Hessian as follows:
HNT pβ, Λ, Γq “ EX,Λ0,Γ0 HNT pβ0, Λ0, Γ0q
looooooooooooooomooooooooooooooon
population Hessian at true parameters
` HNT pβ, Λ, Γq  ́ EX,Λ0,Γ0 HNT pβ0, Λ0, Γ0q
looooooooooooooooooooooooooomooooooooooooooooooooooooooon
deviation
The first term represents the population Hessian evaluated at the true parameters pβ, Λ0, Γ0q, whose
smallest eigenvalue is strictly positive under general conditions. The second term reflects deviations
arising from sampling error and the perturbations of pβ, Λ, Γq from the true parameters. By Weyl’s
theorem, we can establish the local convexity of LNT pβ, Λ, Γq if the deviation is negligible (in terms of
operator norm) compared with EX,Λ0,Γ0 HNT pβ0, Λ0, Γ0q.
The positive definiteness of EX,Λ0,Γ0 HNT pβ0, Λ0, Γ0q can be formalized through the following diagonal
block structure assumption:
Assumption 3 (Diagonal structure) The population Hessian at the true parameters, EX,Λ0,Γ0 HNT pβ0, Λ0, Γ0q,
8The sample Hessian is a matrix-valued function of a dX -dimensional vector β, an N ˆ R parameter matrix Λ, and a T ˆ R parameter matrix Γ. These parameters are arranged as follows:
pβ1, vecpΛ1q1, vecpΓ1q1q1
where vecp ̈q denotes the vectorization operator, stacking the columns of a matrix into a vector.
12

admits a diagonal block structure if there exist a constant C (does not depend on N, T ) such that
EX,Λ0,Γ0 HNT pβ0, Λ0, Γ0q ě Cdiag
"
IdX , 1
N INR, 1
T IT R
*
This assumption, which is closely related to the asymptotic diagonal structure condition in Chen,
Fern ́andez-Val and Weidner (2021), Wang (2022), and Su, Wang and Wang (2025), is mild as it im
poses conditions only on the population Hessian evaluated at the true parameters. Easily verifiable
sufficient conditions for Assumption 3 are provided in Lemma A.5 in the Appendix. We now state the
main theorem, which establishes local convexity and asymptotic equivalence:
Theorem 3 Under Assumption 3 and the conditions in Corollary 2, suppose N, T have the same order.
Let δNT “ logpN T q mintN  ́3{8, T  ́3{8u, and BδNT be the neighborhood defined in (3.5). The following
results hold:
(i) the local optimization problem (3.7) is strictly convex wpa1;
(ii) our two-step estimator is asymptotically equivalent to the FE estimator;
(iii) the local optimization problem (3.7) is strongly convex wpa1 uniformly over BδNT , i.e., there exists
a constant c5 ą 0 independent of N, T such that for any pβ, Λ, Γq P BδNT ,
HNT pβ, Λ, Γq ą c5diag
"
IdX , 1
N INR, 1
T IT R
*
, wpa1
The theorem demonstrates that initializing the optimization problem with the NNR estimator ensures
convergence to the global minimum, i.e., the FE estimator. Theorem 3(iii) further establishes strong
local convexity of LNT pβ, Λ, Γq, implying that simple gradient descent can be effectively applied in the
second step to find the global minimum, even in high-dimensional settings. The asymptotic equivalence
between our two-step estimator and the FE estimator implies that we can leverage the computational
advantages of our method while directly applying the theoretical tools from Chen, Fern ́andez-Val and
Weidner (2021) for inference and the construction of confidence intervals.
4 Implementation
In this section, we provide the practical steps for implementing our two-step method, including the
algorithm and its theoretical guarantees, as well as a data-dependent approach for selecting the tuning
parameter and determining the number of factors.
4.1 Algorithm: NNR Estimator
We obtain NNR estimator using proximal gradient descent method following Hastie, Tibshirani and
Wainwright (2015). Given the k-step estimates βpkq, Θpkq, the k ` 1-step estimates are updated by
solving
βpk`1q, Θpk`1q P arg βm,iΘn
!
LNT pβpkq, Θpkqq ` x∇β LNT pβpkq, Θpkqq, β  ́ βpkqy ` x∇ΘLNT pβpkq, Θpkqq, Θ  ́ Θpkqy
`1
2sβ
}β  ́ βptq}2 ` 1
2sθ
}Θ  ́ Θptq}2
F ` φNT
?N T }Θ}nuc
)
where ∇βLNT p ̈,  ̈q is the dX -dimensional vector of gradients with respect to β, ∇ΘLNT p ̈,  ̈q P RNˆT is a
matrix of gradients with respect to θit, x ̈,  ̈y denotes inner product between two vectors or two matrices,
and sβ, sθ ą 0 are step sizes.
13

It is convenient to define the soft-thresholding operator S ̊
sθ
φN T
?N T
: RNˆT ÞÑ RNˆT applied to the
singular values of an N ˆ T matrix with threshold value sθ φNT
?NT . Specifically, for any matrix A P RNˆT
with singular value decomposition A “ U ΣV 1, the operator gives
S ̊
sθ
φN T
?N T
pAq “ U diag
#
max
"
Σrr  ́ sθ
φN T
?N T , 0
*
r“1,...,mintN,T u
+
V1
We summarize the algorithm as follows:
Algorithm 1 (Proximal gradient descent) Compute the nuclear norm regularized estimator as fol
lows:
Step 1: Fix the step sizes psβ, sθq. Initialize βp0q and Θp0q. Set k “ 0.
Step 2: Let
βpk`1q “ βpkq  ́ sβ ∇β LNT
 ́
βpkq, Θpkq
 ̄
Θpk`1q “ S ̊
sθ
φN T
?N T
 ́
Θpkq  ́ sθ∇ΘLNT
 ́
βpkq, Θpkq
 ̄ ̄ (4.1)
and set k “ k ` 1.
Step 3: Repeat Step 2 until convergence.
We establish the convergence of Algorithm 1 using a proof strategy similar to that of Nesterov, 2013:
Theorem 4 Under conditions of Theorem 1, Algorithm 1 is guaranteed to converge to the global optimum
if 0 ă sβ ă 1
Lβ and 0 ă sθ
NT ă 1
Lθ , where Lβ “ 4dX bmaxρ2
X , Lθ “ 4bmax, and ρX “ max1ďdďdX }Xd}max.
The theorem establishes the algorithm’s convergence to the global minimum under sufficiently small
psβ, sθ{pN T qq. The step sizes have different orders—specifically, sβ „ sθ{pN T q—reflecting their respec
tive influence on the objective function. This difference arises because a change in β affects lit for all
i, t, whereas a change in θit impacts only the corresponding lit.
Since the optimization problem is convex, the choices of initial values, βp0q and Θp0q, do not affect
the convergence. Researchers can therefore simply initialize with βp0q “ 0 and Θp0q “ 0. Regarding the
choice of step sizes, Theorem 4 offers theoretical guarantees but lacks practical guidance, as bmax or ρX
are typically unknown. In practice, we recommend starting with step sizes sβ “ 1 and sθ “ N T . If the
objective function increases, we halve the step sizes iteratively until a decrease in the objective function
is achieved.
Solving the nuclear norm-regularized regression is usually more computationally demanding than the
second step. The computational bottleneck is computing singular value decomposition on an N ˆ T
matrix at each iteration. The algorithm is computationally efficient for matrices with size N, T “ 1000.
For larger N or T , one may apply accelerated proximal gradient descent techniques (see Nesterov, 2013).
Detailed discussion of such acceleration methods is beyond the scope of this paper.
4.2 Algorithm: local estimator
In the second step, optimization problem (3.7), we employ the gradient descent method with the NNR
estimator as the initial value to search for the global minimum.
Algorithm 2 (Gradient descent) Compute the local estimator or (FE estimator) as follows:
Step 1: Fix the step sizes psβ, sλ, sγ q. Initialize βp0q “ βˆnuc, Λp0q “ Λˆ nuc, and Γp0q “ ˆΓnuc. Set
k “ 0.
14

Step 2: Let
βpk`1q “ βpkq  ́ sβ ∇β LNT pβpkq, Λpkq, Γpkqq
Λpk`1q “ Λpkq  ́ sλ∇λLNT pβpkq, Λpkq, Γpkqq
Γpk`1q “ Γpkq  ́ sγ ∇γ LNT pβpkq, Λpkq, Γpkqq
(4.2)
and set k “ k ` 1.
Step 3: (Optional) Normalize Λpk`1q and Γpk`1q, for example, let 1
N Λpk`1q1Λpk`1q “ 1
T Γpk`1q1Γpk`1q
and diagonal.
Step 4: Repeat Step 2 and Step 3 until convergence.
The convergence of the gradient descent method can be guaranteed by the following Theorem:
Theorem 5 Under conditions of Theorem 3, Algorithm 2 is guaranteed to converge to the global optimum
when 0 ă sβ ă 1
Lβ , 0 ă sλ
Tă 1
Lλ , and 0 ă sγ
Nă 1
Lγ , where Lβ, Lλ, Lγ are sufficiently large constants
independent of N, T .
Similar to the result in Theorem 4, the step sizes have different orders—specifically, sβ „ sλ{T „ sγ{N 
reflecting their respective influence on the objective function. In practice, we recommend starting with
sβ “ 1, sλ “ T , and sγ “ N . If the objective function increases, we iteratively halve the step sizes until
the objective function decreases.
Remark 2 Chen, Fern ́andez-Val and Weidner (2021) and Su, Wang and Wang (2025) propose using
an EM algorithm, a Newton–Raphson-type method that theoretically achieves faster convergence through
second-order accuracy. However, we recommend using a gradient descent method instead. This is because
in nonlinear panel models, computing and inverting a high-dimensional Hessian matrix can be not only
computationally expensive but also numerically unstable. Therefore, we adopt a more robust, albeit slower,
gradient-based algorithm.
4.3 Determining the number of factors R and tuning parameter φNT
We propose the following data-dependent approach for selecting tuning parameter φNT and determining
the number of factors R. Recall that Theorem 1 requires that φNT ą
?N T }∇ΘLNT pβ0, Θ0q}op in order
to achieve the desired consistency result.9 On the other hand, we should avoid selecting an excessively
large φNT , as it can lead to a large bias in the NNR estimator. Hence, a preferable choice for φNT is one
that slightly exceeds ?N T }∇ΘLN T pβ0, Θ0q}op. Since β0 and Θ0 are unknown, we propose a two-step
procedure —an initial guess followed by an update—following the idea of Chernozhukov et al. (2019) to
determine the tuning parameter and the number of factors.
Step 1: Solve the nonlinear panel regression with additive fixed effects to obtain pβ ̃1, Λ ̃1,  ̃Γ1q:
pβ ̃1, Λ ̃ 1,  ̃Γ1q P argmin
βPRdX ,ΛPRN ,ΓPRT
 ́1
NT
N
ÿ
i“1
T
ÿ
t“1
lpYit | X1
itβ ` λi ` γtq
We then compute the initial guess for the tuning parameter as φ ̃NT :“ p1`αq}∇ΘLpβ ̃1, Λ ̃1,  ̃Γ1q}op, where
α is a small positive constant, for example, α “ 0.05.
9}∇β Lpβ0, Θ0q}2 is negligible compared to ?N T }∇ΘLNT pβ0, Θ0q}op as N, T Ñ 8.
15

Step 2: Solve the nuclear-norm regularized optimization problem (3.1) with tuning parameter φ ̃NT to
get pβ ̃2, Θ ̃ 2q and then compute p ̃Λ2, Γ ̃2q through (2.5). A byproduct is the singular value vector of Θ ̃ 2,
ψ1pΘ ̃ 2q ě ψ2p  ̃Θ2q ě . . . ψmintN,T upΘ ̃ 2q. We determine Rˆ by eigenvalue-ratio test (Ahn and Horenstein,
2013) with a preset Rmax ą 0:
Rˆ “ argmax
r“1,2,...,Rmax
ψrpΘ ̃ 2q{ψr`1pΘ ̃ 2q
Finally, the updated tuning parameter is
φˆNT :“ p1 ` αq }∇ΘLpβ ̃2, Λ ̃ 2,  ̃Γ2q}op
The first step, optimizing the nonlinear panel regression with additive fixed effects, is a convex problem
with available efficient algorithm. Our approach avoids the need for cross-validation to select the tuning
parameter, thereby reducing computational cost.
4.4 Bias correction
The FE estimator suffers from the incidental parameter problem, requiring bias correction to achieve a
?N T -consistency estimator centered at the true parameter.
Analytical bias correction We follow Chen, Fern ́andez-Val and Weidner (2021) to perform analytical
bias correction. For any d “ 1, 2, . . . , dX , let
pΛ ̊
d , Γ ̊
d q P argmax
ΛdPRNˆR,ΓdPRT ˆR
N
ÿ
i“1
T
ÿ
t“1
Ep ́l:0
itq
 ̃
Epl:0
itXit,dq
Epl:0
itq
 ́ λ1
d,iγ0,t  ́ λ1
0,iγd,t
 ̧2
and
Ξd,it “ λ ̊1
d,iγ0,t ` λ1
0,i γ  ̊
d,t, X ̃d,it “ Xd,it  ́ Ξd,it
Let ˆΞit denote the sample analog of Ξit, define
Bp “  ́ 1
N
N
ÿ
i“1
γp1
t
 ̃T ÿ
τ “1
γpτ γp1
τ
lp:iτ
 ̧ ́1
γpt
 ̃
l9pi,tl:pitpXit  ́ Ξpitq ` 1
2
T
ÿ
t“1
lp;itpXit  ́ pΞitq
 ̧
Dp “  ́ 1
T
T
ÿ
t“1
N
ÿ
i“1
λp1
i
 ̃N ÿ
j“1
λpj λp1
j
lp:jt
 ̧ ́1
λpi
ˆ
l9pitlp:itpXit  ́ pΞitq ` 1
2
lp;itpXit  ́ Ξpitq
 ̇
Wx “  ́ 1
NT
N
ÿ
i“1
T
ÿ
t“1
l:pitpXit  ́ ΞpitqpXit  ́ pΞitq1
The analytical bias correction estimator, given by βˆlocal  ́ 1
T
Wx ́1Bp  ́ 1
N
Wx ́1Dp, follows
?N T
ˆ
βˆlocal  ́ 1
T
Wx ́1Bp  ́ 1
N
Wx ́1Dp  ́ β0
 ̇
„ N p0, Wx ́1q
Sample-splitting Jackknife The sample-splitting Jackknife estimator in Chen, Ferna ́ndez-Val and
Weidner (2021) is given by
3βˆlocal  ́ βN,T {2  ́ βN{2,T
16

where βN,T {2 is the average of the estimators in the half-panels tpi, tq | i “ 1, . . . , N, t “ 1, . . . , rT {2su
and tpi, tq | i “ 1, . . . , N, t “ rT {2s ` 1, . . . , T u, βN{2,T is the average of the estimators in the haft-panels
tpi, tq | i “ 1, . . . , rN {2s, t “ 1, . . . , T u and tpi, tq | i “ rN {2s ` 1 . . . , N, t “ 1, . . . , T u.
5 Monte Carlo and Empirical Application
In this section, we conduct Monte Carlo simulations to evaluate the performance of our estimator in
both small and large samples. We also provide an empirical application to the gravity equation.
5.1 Monte Carlo
We evaluate the performance of our estimator in a binary response model, where the data are generated
from the following single-index model with R “ 2:
Yit “ 1 `β1Xit ` λ1
iγt ` εY,it ą 0 ̆
Xit “ λ1
iγt ` λ1
iι ` γ1
tι ` λX,iγX,t ` εX,it
(5.1)
where λi “ pλi1, λi2q1, γt “ pγt1, γt2q1, tλirut1ďiďN,r“1,2u, tγtrut1ďtďT,r“1,2u, tλX,iut1ďiďNu, and tγX,tut1ďtďT u
are sets of independent random variables drawn from the standard normal distribution N p0, 1q. The error
terms tεY,itu1ďiďN,1ďtďT are i.i.d. random variables over both i and t following logistic distribution, and
tεX,itu1ďiďN,1ďtďT are i.i.d. random variables over both i and t following normal distribution N p0, 4q.
We set Rmax “ 5. In addition, β1 “ 0.2. It is straightforward to verify that conditional on Λ0 and Γ0,
Xit is exogenous covariate.
We conduct 1000 Monte Carlo replications to evaluate the performance of our estimator in both small
samples (e.g., N “ 50, T “ 40) and large samples (e.g., N “ 1000, T “ 200). The simulation results
are presented in Table 1. We report the bias and standard deviation (measured in units of ˆ10 ́2)
for different estimators across different sample sizes. The first column (POOL) presents the pooled
regression results, which exhibit a large bias that does not diminish as the sample size increases. The
second column (NNR) reports the performance of the NNR estimator, whose bias decreases slowly to
zero as N, T Ñ 8, which is consistent with Theorem 1. The bias of FE estimators is smaller than
that of NNR estimators and converges quickly to zero. Notably, the bias and standard deviation of FE
estimators have the same order even for large N, T due to the incidental parameter problem. The fourth
column (FE A) presents the results after applying analytical bias correction to the FE estimator. The
analytical bias correction effectively reduces the bias across all sample sizes, with notable improvements
for large N, T , where the bias becomes negligible compared to the standard deviation. The fifth column
(FE J) reports the performance of the Jackknife sample-splitting estimator, which exhibits a similar
pattern to the analytical bias correction estimator. With the estimated number of factors Rˆ, we evaluate
the performance of the FE estimator (FER), the analytical bias-corrected estimator (FER A), and the
Jackknife sample-splitting estimator (FER J). Since the estimation of R is highly accurate, even in small
samples (the averages of Rˆ are reported in the last column), the performance of these estimators based
on Rˆ is only slightly worse than their performance when the true number of factors, R “ 2, is used.
Overall, our two-step estimator demonstrates excellent performance in large samples and remains reliable
even in small samples.
5.2 Empirical application
We revisit the empirical analysis of the gravity equation in trade, which employs a count data model
to examine the determinants of bilateral trade flows. This is also the empirical application in Chen,
17

Table 1: Logit Model with Strictly Exogenous Covariate
POOL NNR FE FE A FE J FER FER A FER J R pˆ10 ́2q pˆ10 ́2q p10 ́2q pˆ10 ́2q pˆ10 ́2q pˆ10 ́2q pˆ10 ́2q pˆ10 ́2q
N = 50, T = 40 BIAS 7.51 6.89 5.40 3.64 -3.32 5.45 3.70 -3.21 1.802 STD (2.48) (2.40) (3.64) (3.48) (6.56) (3.68) (3.52) (6.75) N = 100, T = 40 BIAS 7.57 6.64 3.09 1.70 -2.25 3.10 1.71 -2.23 1.959 STD (1.99) (1.88) (2.39) (2.33) (4.01) (2.40) (2.34) (4.02) N = 200, T = 40 BIAS 7.46 6.26 1.89 0.69 -1.24 1.89 0.69 -1.24 1.999 STD (1.67) (1.50) (1.56) (1.50) (2.33) (1.56) (1.50) (2.33) N = 100, T = 100 BIAS 7.35 5.82 1.23 0.32 -0.90 1.23 0.32 -0.90 2.000 STD (1.40) (1.22) (1.17) (1.12) (1.51) (1.17) -
(1.12) (1.51) N = 200, T = 100 BIAS 7.36 5.39 0.76 0.11 -0.29 0.76 0.11 -0.29 2.000 STD (1.23) (1.01) (0.88) (0.85) (1.07) (0.88) (0.85) (1.07) N = 200, T = 200 BIAS 7.34 4.87 0.51 0.08 -0.09 0.51 0.08 -0.09 2.000 STD (0.95) (0.74) (0.59) (0.57) (0.68) (0.59) (0.57) (0.68) N = 1000, T = 200 BIAS 7.36 4.07 0.27 0.02 -0.01 0.27 0.02 -0.01 2.000 STD (0.70) (0.45) (0.27) (0.26) (0.34) (0.27) (0.26) (0.34)
Note: Monte Carlo results based on 1000 repetitions for the Logit model with strictly exogenous covariate (5.1). We set α “ 0.05 for all regressions. We report bias and standard deviation for pooled estimator (POOL), nuclear norm regularized estimator (NNR). Using R “ 2, we report bias and standard deviation for local fixed effect estimator (FE), local fixed effect estimators after analytical bias correction (FE A) and after Jackknife correction (FE J). Using R “ Rˆ factors, we report bias and sta-
ndard deviation for local fixed effect estimators (FER), local fixed effect estimators after analytical bias correction (FER A) and after Jackknife correction (FER J). Furthermore, We report the mean of estimated number of factor R.
Fern ́andez-Val and Weidner (2021). The data, originally from Helpman, Melitz and Rubinstein (2008),
includes bilateral trade flows and other relevant variables for 157 countries. In our application, we focus
on the year 1986. Given its network structure, we index the countries as i “ 1, 2, . . . , 157 (exporters)
and j “ 1, 2, . . . , 157 (importers). The sample size is 157 ˆ 156 “ 24492.
We consider the estimation of the following Poisson model:
EpYij | Xij , λ1,i, γ1,j , λ2,i, γ2,j q “ Possionpexptβ1Xij ` λ1,i ` γ1,j ` λ1
2,iγ2,j uq
The outcome variable Yij represents the volume of trade (in thousands of constant 2000 US dollars)
from country i to country j. The covariates Xij include key determinants of bilateral trade flows,
such as the logarithm of the distance between the capitals of the two countries (Log distance) and
binary indicators for shared borders (Border), legal systems (Legal), common languages (Language),
colonial ties (Colony), currency unions (Currency), regional free-trade agreements (FTAs), and religions
(Religion). Descriptive statistics are presented in Table 2. Consistent with Chen, Fern ́andez-Val and
Weidner (2021), we explicitly include additive fixed effects λ1,i ` γ1,j. The interactive fixed effect is
λ12,iγ2,j, and the dimension of λ12,i, γ2,j can be estimated using the similar method proposed in Section 4.
18

Table 2: Summary Statistics
Mean Standard deviation
Trade Volume 84,542 1,082,219
Log distance 4.18 0.78
Border 0.02 0.13
Legal 0.37 0.48
Language 0.29 0.45
Colony 0.01 0.10
Currency 0.60 1.37
FTA 0.01 0.08
Religion 0.17 0.25
Note: The table is from Helpman, Melitz and Rubinstein (2008).
In Table 3, we report the results of our two-step estimator (column (3)), the estimator with only
two-way fixed effects (column (1)), and the estimator from Chen, Fern ́andez-Val and Weidner (2021),
computed using the EM-type algorithm (column (2)). The estimated number of factors in our model is
R “ 2, while Chen, Fern ́andez-Val and Weidner (2021) identifies R “ 3. For comparison, we report their
estimator using R “ 2 only. Standard deviations are presented in parentheses.
Column (1) is included as a reference, showing that the signs of most coefficients remains valid after
introducing latent factors into the gravity equation, except for Language and Religion. We do not provide
a detailed discussion of the impact of latent factors, as this has already been extensively analyzed in
Chen, Fern ́andez-Val and Weidner (2021). Instead, we focus on the differences between columns (2) and
(3).
The results in columns (2) and (3) are very similar. The only notable difference is the coefficient
estimate for Currency. Our two-step estimator reports 1.25 with a standard deviation of 0.34, while
Chen, Fern ́andez-Val and Weidner (2021) reports 1.37 with a standard deviation of 0.41. However, this
difference is minor, and both methods produce statistically significant estimates at the 5% level. Finally,
the log-likelihood for our estimator is 0.6711, slightly lower than 0.6714 reported by Chen, Fern ́andez-Val
and Weidner (2021). This small discrepancy is likely due to finite-sample problem.
19

Table 3: Empirical Application: Gravity Equation
(1) (2) (3)
R=0 R=2 R=2
Log distance -0.64 -0.71 -0.71
(0.07) (0.06) (0.05)
Border 0.71 0.32 0.32
(0.16) (0.05) (0.06)
Legal 0.30 0.26 0.26
(0.06) (0.04) (0.04)
Language -0.17 -0.02 -0.02
(0.10) (0.06) (0.06)
Colony 0.36 0.39 0.39
(0.12) (0.09) (0.10)
Currency 0.60 1.37 1.25
(0.09) (0.41) (0.34)
FTA 0.25 0.17 0.17
(0.13) (0.07) (0.06)
Religion -0.25 0.24 0.24
(0.12) (0.13) (0.08)
Log-Likelihood -0.44 0.67 0.67
Note: We report estimators and their standard deviations (in parentheses) for three regression: Column (1) represents the estimation for only including additive fixed effects. Column (2) is the result for R “ 2 reported in Chen, Fern ́andez-Val and Weidner (2021) using EM algorithm. Column (3) reports our two-step estimator for R “ 2. All standard deviations are robust to reciprocity. The log-likelihood in Column (2) is 0.6714, while our log-likelihood is slightly smaller, 0.6711.
6 Conclusion
We develop a computationally efficient two-step estimator for nonlinear panel models with interactive
unobserved effects, thereby helping bridge the gap between recent theory and empirical practice. Our
procedure first solves a convex relaxation of the log-likelihood function via nuclear-norm regularization to
obtain a consistent initial value, and then refines it with gradient descent on the log-likelihood function.
We show that the log-likelihood function is locally convex in a shrinking neighborhood of the global
optimum and establish a convergence rate for the first-step NNR estimator that is fast enough to enter
this neighborhood, ensuring that the second step converges to the global minimum. Consequently, our
final estimator is asymptotically equivalent to the fixed-effects estimator of Chen, Fern ́andez-Val and
Weidner (2021) while avoiding the high-dimensional nonconvex optimization burden. This equivalence
allows researchers to conduct inference using their theoretical results, making the estimator practically
feasible.
References
Ahn, Seung C, and Alex R Horenstein. 2013. “Eigenvalue ratio test for the number of factors.”
Econometrica, 81(3): 1203–1227.
20

Alidaee, Hossein, Eric Auerbach, and Michael P Leung. 2020. “Recovering network structure
from aggregated relational data using penalized regression.” arXiv preprint arXiv:2001.06052.
Armstrong, Timothy B, Martin Weidner, and Andrei Zeleneev. 2022. “Robust estimation and
inference in panels with interactive fixed effects.” arXiv preprint arXiv:2210.06639.
Athey, Susan, Mohsen Bayati, Nikolay Doudchenko, Guido Imbens, and Khashayar Khos
ravi. 2021. “Matrix Completion Methods for Causal Panel Data Models.” Journal of the American
Statistical Association, 0(0): 1–15.
Bai, Jushan. 2009. “Panel data models with interactive fixed effects.” Econometrica, 77(4): 1229–1279.
Bai, Jushan, and Serena Ng. 2017. “Principal Components and Regularized Estimation of Factor
Models.” arXiv preprint arXiv:1708.08137.
Bai, Jushan, and Serena Ng. 2019. “Rank regularized estimation of approximate factor models.”
Journal of Econometrics, 212(1): 78–96.
Bandeira, Afonso S, and Ramon Van Handel. 2016. “Sharp nonasymptotic bounds on the norm
of random matrices with independent entries.”
Belloni, Alexandre, Mingli Chen, Oscar Hernan Madrid Padilla, and Zixuan Wang. 2023.
“High-dimensional latent panel quantile regression with an application to asset pricing.” The Annals
of Statistics, 51(1): 96–121.
Beyhum, Jad, and Eric Gautier. 2019. “Square-root nuclear norm penalized estimator for panel data
models with approximately low-rank unobserved heterogeneity.” arXiv preprint arXiv:1904.09192.
Chen, Mingli. 2016. “Estimation of nonlinear panel models with multiple unobserved effects.”
Chen, Mingli, Iv ́an Fern ́andez-Val, and Martin Weidner. 2021. “Nonlinear factor models for
network and panel data.” Journal of Econometrics, 220(2): 296–324.
Chernozhukov, Victor, Christian Bailey Hansen, Yuan Liao, and Yinchu Zhu. 2019. “Inference
for heterogeneous effects using low-rank estimations.” CEMMAP working paper.
Chernozhukov, Victor, Christian Hansen, Yuan Liao, and Yinchu Zhu. 2023. “Inference for
low-rank models.” The Annals of statistics, 51(3): 1309–1330.
De Jong, Robert M, and Tiemen Woutersen. 2011. “Dynamic time series binary choice.” Econo
metric Theory, 27(4): 673–702.
Fan, Jianqing, and Qiwei Yao. 2008. Nonlinear time series: nonparametric and parametric methods.
Springer Science & Business Media.
Feng, Junlong. 2023. “Nuclear Norm Regularized Quantile Regression with Interactive Fixed Effects.”
Econometric Theory, 1–31.
Fern ́andez-Val, Iv ́an, and Martin Weidner. 2016. “Individual and time effects in nonlinear panel
models with large N, T.” Journal of Econometrics, 192(1): 291–312.
Fern ́andez-Val, Iv ́an, Hugo Freeman, and Martin Weidner. 2021. “Low-rank approximations of
nonseparable panel models.” The Econometrics Journal, 24(2): C40–C77.
Hastie, Trevor, Robert Tibshirani, and Martin Wainwright. 2015. “Statistical learning with
sparsity.” Monographs on statistics and applied probability, 143(143): 8.
21

Helpman, Elhanan, Marc Melitz, and Yona Rubinstein. 2008. “Estimating trade flows: Trading
partners and trading volumes.” The quarterly journal of economics, 123(2): 441–487.
Kanaya, Shin. 2017. “Convergence rates of sums of α-mixing triangular arrays: With an applica
tion to nonparametric drift function estimation of continuous-time processes.” Econometric Theory,
33(5): 1121–1153.
Ledoux, Michel, and Michel Talagrand. 2013. Probability in Banach Spaces: isoperimetry and
processes. Springer Science Business Media.
Ma, Shujie, Liangjun Su, and Yichong Zhang. 2022. “Detecting latent communities in network
formation models.” The Journal of Machine Learning Research, 23(1): 13971–14031.
Miao, Ke, Kunpeng Li, and Liangjun Su. 2020. “Panel threshold models with interactive fixed
effects.” Journal of Econometrics, 219(1): 137–170.
Miao, Ke, Peter CB Phillips, and Liangjun Su. 2023. “High-dimensional VARs with common
factors.” Journal of Econometrics, 233(1): 155–183.
Moon, Hyungsik Roger, and Martin Weidner. 2018. “Nuclear norm regularized estimation of
panel regression models.” arXiv preprint arXiv:1810.10987.
Mugnier, Martin. 2025. “A simple and computationally trivial estimator for grouped fixed effects
models.” Journal of Econometrics, 250: 106011.
Negahban, Sahand, and Martin J Wainwright. 2012. “Restricted strong convexity and weighted
matrix completion: Optimal bounds with noise.” The Journal of Machine Learning Research,
13(1): 1665–1697.
Negahban, Sahand N, Pradeep Ravikumar, Martin J Wainwright, and Bin Yu. 2012. “A
unified framework for high-dimensional analysis of M-estimators with decomposable regularizers.”
Nesterov, Yu. 2013. “Gradient methods for minimizing composite functions.” Mathematical program
ming, 140(1): 125–161.
Pesaran, M Hashem. 2006. “Estimation and inference in large heterogeneous panels with a multifactor
error structure.” Econometrica, 74(4): 967–1012.
Rohde, Angelika, and Alexandre B Tsybakov. 2011. “Estimation of high-dimensional low-rank
matrices.” The Annals of Statistics, 39(2): 887–930.
Samson, Paul-Marie. 2000. “Concentration of measure inequalities for Markov chains and Φ-mixing
processes.” The Annals of Probability, 28(1): 416–461.
Su, Liangjun, Fa Wang, and Yiren Wang. 2025. “Estimation and Inference for Unbalanced Panel
Data Models with Interactive Fixed Effects.” Available at SSRN 5176534.
Tropp, Joel A. 2012. “User-friendly tail bounds for sums of random matrices.” Foundations of compu
tational mathematics, 12: 389–434.
Truquet, Lionel. 2023. “Strong mixing properties of discrete-valued time series with exogenous covari
ates.” Stochastic Processes and their Applications, 160: 294–317.
Wainwright, Martin J. 2019. High-dimensional statistics: A non-asymptotic viewpoint. Vol. 48, Cam
bridge university press.
22

Wang, Fa. 2022. “Maximum likelihood estimation and inference for high dimensional generalized factor
models with application to factor-augmented regressions.” Journal of Econometrics, 229(1): 180–200.
Wang, Yiren, Liangjun Su, and Yichong Zhang. 2022. “Low-rank panel quantile regression: Esti
mation and inference.” arXiv preprint arXiv:2210.11062.
Yu, Bin. 1994. “Rates of convergence for empirical processes of stationary mixing sequences.” The
Annals of Probability, 94–116.
Yu, Yi, Tengyao Wang, and Richard J Samworth. 2015. “A useful variant of the Davis–Kahan
theorem for statisticians.” Biometrika, 102(2): 315–323.
Zeleneev, Andrei. 2019. “Identification and estimation of network models with nonparametric unob
served heterogeneity.” Department of Economics, Princeton University.
23

A Extensions and Technical Discussions
This section presents extensions and technical discussions of the assumptions in the main text: (1) We
discuss the identification of fixed effects. (2) We show how to extend our analysis to the case where Xit
contains predetermined variables. (3) We give easily verifiable sufficient conditions for restricted strong
convexity (Assumption 2) and diagonal structure (Assumption 3) when predetermined covariates are
present, along with new Monte Carlo simulation results for nonlinear panel models with predetermined
covariates. (4) We demonstrate that our method remains applicable even when ΣλΣγ contains repeated
eigenvalues (relaxing Assumption 1(iv)).
A.1 Identification of Fixed Effects
Similar to the linear case, we need additional R2 restrictions to identify fixed effects pΛ0, Γ0q 10. In
Section 3, we directly impose normalization constraints on fixed effects pΛ0, Γ0q such that Λ10Λ{N and
Γ10Γ0{T are diagonal with Λ10Λ{N “ Γ10Γ0{T . The feasibility of such normalization can be illustrated as
follows: for any pΛ0, Γ0q satisfy Assumption 1(iv), let D be the diagonal matrix containing the square root
of the eigenvalues of the matrix pN T q ́1pΛ10Λ0q1{2Γ10Γ0pΛ10Λ0q1{2, and Υ be the matrix of corresponding
eigenvectors, then there exists a unique transformation matrix G “ D1{2Υ1pΛ0Λ0{N q ́1{2, such that the
normalized nuisance parameters:
ΛG
0 :“ Λ0G1, ΓG
0 :“ Γ0G ́1
lie in the normalized parameter space ΦNT 11. Unlike in the main text, in the following analysis and
proofs, we distinguish between pΛ0, Γ0q and pΛ0G, Γ0Gq to achieve the rigor of identification.
A.2 Predetermined Covariate
Our estimation method is applicable in scenarios where Xit includes both strictly exogenous covariates
and predetermined variables (e.g., lags of Yit in dynamic panels). While the main text focuses on the
simpler case where Xit is strictly exogenous, this section extends the analysis to the more complex
case involving predetermined variables. Considering that Xit includes predetermined variables is crucial
in panel data because the time order is very important—–unlike in network data, where node order
is irrelevant. Including these variables allows us to account for dynamic effects common in empirical
research.
We partition Xit into Xit :“ pWi1t, Zi1tq1, where Wit represents dW -dimensional predetermined co
variates and Zit represents dZ -dimensional exogenous covariates. We collect Zit,d into covariate matrix
Zd P RNˆT for each d “ 1, 2, . . . , dZ , and let Z be the collection of all strictly exogenous covari
ate matrices, Z “ tZ1, . . . , ZdZ u. For each i “ 1, 2, . . . , N , denote Yi :“ pYi1, Yi2, . . . , YiT q1, Wi “
pWi1, Wi2, . . . , WiT q1. In addition, we use PZ,Λ0,Γ0 “ Pp ̈ | Z, Λ0, Γ0q to denote the conditional probabil
ity and use EZ,Λ0,Γ0 “ Ep ̈ | Z, Λ0, Γ0q to denote the conditional expectation.
Let us now consider the regularity conditions appropriate for predetermined covariates.
Assumption A.1 (Regularity Conditions - Predetermined Covariates) Suppose that
(i) (Sampling) Conditional on pZ, Λ0, Γ0q, tpYi, Wiqui“1,...,N is independent across i, and for each
i, ppYi1, Wi1q, pYi2, Wi2q, . . . , pYiT , WiT qq is φ-mixing with mixing coefficient φipτ q Ñ 0 as τ Ñ 8,
10For any R-dimensional non-singular matrix G, the conditional distribution of Yit remains invariant under the transformations λi ÞÑ λiG1 and γt ÞÑ γtG ́1. This invariance allows us to freely choose different normalization methods for different purposes without affecting the inference of β0. 11When the eigenvalues of ΣλΣγ are distinct, G is unique and does not depend on samples tpYit, Xitqu1ďiďN,1ďtďT . However, with possible repeated eigenvalues, G is not unique and can be identified up to orthog-
onal transformation.
24

where
φipτ q “ sup
t
sup
APAi
t ,B PBi
t`τ
|PZ,Λ0,Γ0 pA | Bq  ́ PZ,Λ0,Γ0 pBq|
Here, Ait is the sigma-field generated by t. . . , pYi,t ́1, Wi,t ́1q, pYi,t, Wi,tqu, and Bti`τ is the sigma
field generated by tpYi,t`τ , Wi,t`τ q, pYi,t`τ`1, Wi,t`τ`1q, . . .u. For mixing coefficients φipτ q, i “
1, 2, . . . , N , we further assume that they exhibit a uniformly exponential decay rate: there exists
ζ0 ą 0 such that sup1ďiďN φipτ q ď e ́ζ0τ .
(ii) (Compactness) The parameter space of β, λi, and γt are bounded uniformly for all i, t, N, T . In
addition, there exists constant ρX ą 0 such that maxd“1,...,dX }Xd}8 ă ρX for all i, t and N, T .
(iii) (Smoothness and Convexity)  ́litp ̈q is four times continuously differentiable and strictly convex
almost sure. Furthermore, we assume that 0 ă bmin ď  ́l:itpXi1tβ ` λ1iγtq ď bmax ă 8 almost surely
for all β, λi, γt in the parameter space uniformly over i, t, N, T .
(iv) (Strong Factor) Assume that 1
N
řN
i“1 λiλ1i
ÝpÑ Σλ and 1
T
řT
t“1 γtγt1
ÝpÑ Σγ with Σλ ą 0 and
Σγ ą 0. In addition, ΣλΣγ has distinct eigenvalues.
The new regularity assumption differs from the previous one (Assumption 1) only in the sampling
assumption. In Assumption A.1(i), we impose weak dependence on the sequence pYit, Witq: conditional
on pZ, Λ0, Γ0q, the sequence is φ-mixing with an exponential decay rate. Although this is stricter than
necessary, we adopt it to align with the sufficient conditions for restricted strong convexity (RSC). φ
mixing can be replaced with α-mixing, and the exponential decay rate can be relaxed to a sufficiently
fast polynomial decay, as in Fern ́andez-Val and Weidner (2016). In addition, we do not need identical
distribution or stationarity assumptions on the sequence.
We now give the new consistency results of NNR estimators extending Theorem 1 to incorporate
predetermined covariates:
Theorem A.1 For any α ą 0 such that φNT ě p1`αq maxt}∇βLNT pβ0, Θ0q }2, ?N T ||∇ΘLNT pβ0, Θ0q ||opu,
with Assumption A.1 and Assumption 2, and N, T Ñ 8, there are constants c1, c2 ą 0 that do not depend
on N, T such that wpa1:
}βˆnuc  ́ β0}2 ď c1
 ́
φNT ` logpN T q{
amintN, T u
 ̄
? 1N T || ˆΘnuc  ́ Θ0||F ď c1
 ́
φNT ` logpN T q{
amintN, T u
 ̄
In addition, wpa1:
?1N } ˆΛnuc  ́ ΛG
0 }F ď c2
 ́
φNT ` logpN T q{
amintN, T u
 ̄
?1T ||Γˆnuc  ́ ΓG
0 ||F ď c2
 ́
φNT ` logpN T q{
amintN, T u
 ̄
The following corollary extend Corollary 2 to include predetermined covariates is:
Corollary A.2 Under the conditions in Theorem A.1, let φNT “ O
 ́
logpN T q{
amintN, T u
 ̄
, there are
constants c3, c4 ą 0 that do not depend on N, T such that wpa1:
}βˆnuc  ́ β0}2 ď c3 logpN T q{
amintN, T u
? 1N T ||Θˆ nuc  ́ Θ0||F ď c3 logpN T q{
amintN, T u
25

In addition, wpa1:
?1N }Λˆ nuc  ́ ΛG
0 }F ď c4 logpN T q{
amintN, T u
?1T }Γˆnuc  ́ ΓG
0 }F ď c4 logpN T q{
amintN, T u
We state the new diagonal structure assumption which generalizes Assumption 3:
Assumption A.2 (Diagonal structure) The population Hessian at the normalized true parameters,
EZ,Λ0,Γ0 HNT pβ0, Λ0G, Γ0Gq, admits diagonal block structure if there exist a constant C (does not depend
on N, T ) such that
EZ,Λ0,Γ0 HNT pβ0, ΛG
0 , ΓG
0 q ě Cdiag
"
IdX , 1
N INR, 1
T IT R
*
The local convexity and the asymptotic equivalence can be extended to incorporate predetermined co
variates.
Theorem A.3 Under Assumption A.2 and the conditions of Corollary A.2, suppose N, T have the
same order. Let δNT “ logpN T q mintN  ́3{8, T  ́3{8u, and BδNT be the neighborhood defined in (3.5). The
following results hold:
(i) the local optimization problem (3.7) is strictly convex wpa1;
(ii) our two-step estimator is asymptotically equivalent to the FE estimator;
(iii) the local optimization problem (3.7) is strongly convex wpa1 uniformly on BδNT , i.e., there exists a
constant c5 ą 0 independent of N, T such that for any pβ, Λ, Γq P BδNY ,
HNT pβ, Λ, Γq ą c5diag
"
IdX , 1
N INR, 1
T IT R
*
, wpa1
A.3 Further Discussion on RSC
We aim to provide a set of easily verifiable sufficient conditions for the restricted strong convexity (RSC)
condition in the panel data setting. Given the critical role of RSC condition in low-rank estimation,
establishing verifiable low-level conditions in panel data setting is important and may be of independent
interest. While Chernozhukov et al. (2019) offers sufficient conditions for verifying the RSC condition in
the panel data context, their approach is limited to strictly exogenous covariates. We extend their proof
strategy to accommodate predetermined covariates, thereby broadening the applicability of the RSC in
panel data. It is worth noting that although we are focusing on low-rank estimation with homogeneous
slope, our proof strategy is quite flexible and is applicable to more general settings. For example, it
can be readily adapted to establish the RSC condition under heterogeneous slopes, as in the models
considered by Chernozhukov et al. (2019) and Ma, Su and Zhang (2022).
Assumption A.3 There exists a sequence of random vectors tvitu1ďiďN,1ďtďT , such that
(i) (Conditional weak dependence) conditional on V :“ tvit | 1 ď i ď N, 1 ď t ď T u, tXiu1ďiďN
is independent across i, and for each i, pXi1, Xi2, . . . , XiT q is φ-mixing with mixing coefficient
φipτ q Ñ 0 as τ Ñ 8, We assume that they exhibit uniformly exponential decay rate, i.e., there
exists ζ1 ą 0 such that sup1ďiďN φipτ q ď e ́ζ1τ .
26

(ii) (Conditional variability) conditional on V, there exists κ0 ą 0 such that the following inequality
holds for any N, T :
inf
1ďiďN,1ďtďT σmin
 ̃ ̃
EpXitXi1t | Vq EpXit | Vq
EpXi1t | Vq 1
 ̧ ̧
ě κ0
where σminp ̈q denotes the minimum eigenvalue of a matrix.
The first part of Assumption A.4 states that while it is unrealistic to assume weak dependence of
tXitu1ďtďT across t due to the presence of common factors, we assume that the serial correlation can be
significantly reduced by conditioning on a set of latent factors, V, i.e., The second part of Assumption A.4
makes sure that Xit cannot be fully explained by V.
More specifically, Assumption A.3(i) impose weakly dependence on the sequence tXitu1ďtďT : condi
tional on common factors V, the sequence is φ-mixing with an exponential decay rate. The conditional
weak dependence assumption is much milder than it appears, and here are some examples:
Example A.1 (Factor Structure) Suppose Xit “ λ1xγt ` εit where λ1xγt is the common factor and
εit is error. Let vit “ λ1xγt, the conditional weak dependence condition holds if tεitu1ďiďN,1ďtďT is
independent across both i and t conditional on V.
Example A.2 (Serial Correlation) Allowing for serial correlation becomes necessary when the model
includes predetermined covariates. Suppose Xit “ AXi,t ́1 ` Bvit ` εit where A and B are the coefficient
matrices and εit is innovation term. We further assume that ψmaxpAq ă 1, where ψmaxpAq the largest
singular of A. Then conditional on V, the sequence tXitu1ďtďT is φ-mixing with exponential decay rate
if conditional on V, the innovation term tεitu1ďiďN,1ďtďT are independent across both i and t, and are
strictly exogenous.
Example A.3 (Non-separable Model) A more interesting case is the non-separable model with serial
correlation, i.e. Xit “ hpXi,t ́1, vitq. For example, consider the dynamic Logit panel, where Xit “ Yi,t ́1:
Xit “ 1pXi,t ́1 ` λ1
0,iγ0,t ` εit ą 0q
Here, εit follows standard logistic distribution. Let vit “ λ10,iγ0,t, assume that the innovation term
tεitu1ďiďN,1ďtďT are independent across both i and t, and are strictly exogenous. By Assumption A.1(iii)
we can conclude that conditional on V, tXitu1ďtďT is a time-inhomogeneous Markov process with transi
tion matrices whose entries are uniformly bounded away from zero. Furthermore, by verifying Doeblin’s
condition, it follows that tXitu1ďtďT is φ-mixing with exponential decay rate. We recommend readers
interested in nonlinear time series models to refer to De Jong and Woutersen (2011) and Truquet (2023)
for more details.
The Assumption A.3(ii) imposes that even after controlling for the set of latent factors, V, Xit
preserves sufficient variation. Notably, by applying Schur’s decomposition, we directly obtain:
 ̃
EpXitXi1t | Vq EpXit | Vq
EpXi1t | Vq 1
 ̧
ą 0 ðñ VarpXit | Vq ą 0
If Xit given V is identical distributed, the conditional variability condition simplifies to VarpXit | Vq ą 0.
If we further assume that Xit admits an additive structure, this condition is satisfied if infi,t,N,T Varpεit |
Vq ą 0. Assumption A.3(ii) can be viewed as a generalized of these simpler cases.
Lemma A.4 (Sufficient condition for RSC) Under Assumption A.1 and Assumption A.3, the RSC
condition (Assumption 2) is satisfied.
27

A.4 Further discussion on Diagonal Structure
We will provide sufficient conditions for verifying Assumption 3 and Assumption A.2, which is critical
in establishing local convexity in Theorem 3 and Theorem A.3. Assumption 3 and Assumption A.2
require that the population Hessian, evaluated at the normalized true parameters pβ0, Λ0G, Γ0Gq, is positive
definite, with a minimum eigenvalue on the order of pmaxtN, T uq ́1. We will show that these two
assumption are very weak, and under the strong factor condition, it suffices for Xit to exhibit weak
dependence after accounting for the influence of common factors and to retain components that cannot
be fully explained by these factors.
Assumption A.4 There exists a sequence of random vectors tuitu1ďiďN,1ďtďT , such that
(i) (Conditional weak dependence) conditional on U :“ tuit | 1 ď i ď N, 1 ď t ď T u, tXiu1ďiďN
is independent across i, and for each i, pXi1, Xi2, . . . , XiT q is φ-mixing with mixing coefficient
φipτ q Ñ 0 as τ Ñ 8, We assume that they exhibit uniformly exponential decay rate, i.e., there
exists ζ2 ą 0 such that sup1ďiďN φipτ q ď e ́ζ2τ .
(ii) (Conditional variability) conditional on U , there exists 0 ă ν ă 1 such that the following
inequality holds uniformly for all i, t, N, T :
Epl:0
itXit | U qEpl:0
itX 1
it | U q ď νEpl:0
it | U qEpl:0
it Xit X 1
it | U q
where l:0
it “ l:itpXi1tβ0 ` λ10,iγ0,tq.
The first part of this assumption is identical to the conditional weak dependence stated in Assump
tion A.4(i). It is worth noting that the condition requiring tXitu1ďtďT to be φ-mixing with an exponential
decay rate uniformly across i is stronger than necessary and is imposed here for consistency with As
sumption A.3(i). In fact, this condition could be relaxed to tXitu1ďtďT being α-mixing with a polynomial
decay rate, still uniformly across i. Assumption A.4(ii) imposes very weak additional restriction on the
model. To elaborate, let us use EU p ̈q to denote the conditional expectation Ep ̈ | Uq, and first consider
the most simple case where l0
it is a constant (corresponding to a linear panel model) with dX “ 1. In
this case, it is straightforward to verify that Assumption A.4(ii) is equivalent to pEV Xitq2 ď νEV pX2
itq
uniformly for all i, t, N, T . When extending the analysis to the nonlinear model with dX “ 1, it follows
(using H ̈older’s inequality) that:
EU pl:0
itXitq ď EU p|l:0
itXit|q “ EU p|l:0
it|1{2|l:0
itXit|1{2q ď EU p ́l:0
itq1{2EU p ́l:0
itX 2
itq1{2
Equality holds if and only if Xit is a constant given U , i.e., Xit can be fully explained by U . Thus, in
this case, Assumption A.4(ii) can be viewed as a uniform version of H ̈older’s inequality. Extending the
analysis from dX “ 1 to dX ą 1 is straightforward and yields the same conclusions.
Lemma A.5 (Sufficient conditions for diagonal structure) Under Assumption A.1 and Assump
tion A.4, Assumption 3 and Assumption A.2 hold.
A.5 Additional Monte Carlo Simulations
We evaluate the performance of our estimator in a binary response model with predetermined covariates,
where the data are generated from the following single-index model with R “ 2:
Yit “ 1 `β1Yi,t ́1 ` β2Zit ` λ1
iγt ` εY,it ą 0 ̆
Zit “ λ1
iγt ` λ1
iι ` γ1
tι ` λz,iγz,t ` εZ,it
(A.1)
28

where λi “ pλi1, λi2q1, γt “ pγt1, γt2q1, tλirut1ďiďN,r“1,2u, tγtrut1ďtďT,r“1,2u, tλX,iut1ďiďNu, and tγX,tut1ďtďT u
are sets of independent random variables drawn from the standard normal distribution N p0, 1q. The error
terms tεY,itu1ďiďN,1ďtďT are i.i.d. random variables over both i and t following the logistic distribution,
and tεX,itu1ďiďN,1ďtďT are i.i.d. random variables over both i and t following normal distribution N p0, 4q.
We set Rmax “ 5 and pβ1, β2q “ p0.5, 0.2q. Conditional on Λ0 and Γ0, Zit is exogenous covariate while
the lag of Yit is predetermined variable.
29

Table 4: Logit Model with Predetermined Covariate
POOL NNR FE FE A FER FER A R
pˆ10 ́2q pˆ10 ́2q pˆ10 ́2q pˆ10 ́2q pˆ10 ́2q pˆ10 ́2q
N = 50, T = 40
BIAS β1 -11.99 -10.65 2.25 -0.90 2.68 -0.37 1.94
STD (12.75) (8.32) (10.75) (10.37) (10.93) (10.26)
BIAS β2 7.53 6.97 5.57 4.04 5.61 3.75
STD (2.38) (2.34) (3.69) (3.48) (3.81) (3.52)
N = 100, T = 40
BIAS β1 -12.32 -10.36 2.03 -0.53 2.44 0.00 1.997
STD (11.27) (6.10) (6.76) (6.52) (6.74) (6.42)
BIAS β2 7.53 6.66 2.89 1.71 2.93 1.49
STD (1.98) (1.86) (2.30) (2.23) (2.27) (2.18)
N = 200, T = 40
BIAS β1 -12.12 -10.28 1.55 -0.47 1.89 -0.09 1.988
STD (10.37) (5.08) (4.79) (4.71) (4.82) (4.56)
BIAS β2 7.48 6.37 1.84 0.85 1.94 0.73
STD (1.66) (1.53) (1.70) (1.69) (1.68) (1.66)
N = 100, T = 100
BIAS β1 -12.12 -9.81 1.53 0.09 1.53 0.09 2.000
STD (7.03) (3.89) (3.87) (3.77) (3.87) (3.77)
BIAS β2 7.47 5.95 1.17 0.27 1.17 0.27
STD (1.45) (1.29) (1.31) (1.26) (1.31) (1.26)
N = 200, T = 100
BIAS β1 -12.25 -9.25 1.42 0.18 1.42 0.18 2.000
STD (6.64) (3.02) (2.72) (2.63) (2.72) (2.63)
BIAS β2 7.37 5.46 0.80 0.14 0.80 0.14
STD (1.19) (1.01) (0.86) (0.83) (0.86) (0.83)
N = 200, T = 200
BIAS β1 -11.95 -8.38 1.02 0.15 1.02 0.15 2.000
STD (4.48) (1.97) (1.83) (1.79) (1.83) (1.79)
BIAS β2 7.43 4.94 0.48 0.04 0.48 0.04
STD (0.93) (0.74) (0.60) (0.59) (0.60) (0.59)
N = 1000, T = 200
BIAS β1 -12.11 -7.11 0.52 -0.04 0.52 -0.04 2.000
STD (4.09) (1.16) (0.80) (0.79) (0.80) (0.79)
BIAS β2 7.40 4.13 0.28 0.03 0.28 0.03
STD (0.71) (0.47) (0.26) (0.26) (0.26) (0.26)
Note: Monte Carlo results based on 1000 repetitions for the Logit model with predetermined covariate (A.1). We report bias and standard deviation for pooled estimator (POOL), nuclear norm regularized estimator (NNR). Using R “ 2, we report bias and standard deviation for local fixed effect estimator (FE) and local fixed effect estimators after analytical bias correction (FE A). Using R “ Rˆ factors, we report bias and standard deviation for local fixed effect estimators (FER) and local fixed effec-
t estimators after analytical bias correction (FER A). Furthermore, We report the mean of estimated number of factor R.
We do not report the sample-splitting Jackknife bias correction, as it requires an additional homo
30

geneity condition (Fern ́andez-Val and Weidner, 2016, Assumption 4.3), which we consider too restrictive
in dynamic settings. For the analytical correction, we directly apply the analytical bias correction method
proposed in Chen, Fern ́andez-Val and Weidner (2021) to the dynamic setting, despite their method not
being specifically designed for dynamic models. Developing a valid analytical bias correction formula for
dynamic nonlinear panel models with interactive fixed effects is challenging and beyond the scope of this
paper.
We conduct 1000 Monte Carlo replication to evaluate the performance of our estimator in both small
samples (e.g., N “ 50, T “ 40) and large samples (e.g., N “ 1000, T “ 200), and present the bias and
standard deviation in Table 1. The first column (POOL) presents the pooled regression results, which
exhibit a large bias that does not diminish as the sample size increases. The second column (NNR) reports
the performance of NNR estimator, whose bias decreases slowly to zero as N, T Ñ 8, which is consistent
with Theorem A.1. The bias of FE estimators is smaller than that of NNR estimators and converges
quickly to zero. Notably, the bias and standard deviation of FE estimators remain of the same order
even for large N, T due to the incidental parameter problem. The fourth column (FE A) presents the
results after applying analytical bias correction to the FE estimator. The analytical correction effectively
reduces the bias across all sample sizes, with particularly notable improvements for large N, T , where the
bias becomes negligible compared to the standard deviation. It is interesting to see that the estimation
of bias corrected dynamic effect β1, is much more accurate than β2.
With the estimated number of factors Rˆ, we evaluate the performance of the FE estimator (FER),
and the analytical bias-corrected estimator (FER A). Since the estimation of R is highly accurate even
in small samples (the averages of Rˆ are reported in the last column), the performance of these estimators
based on Rˆ is very similar to their performance when the true number of factors, R “ 2, is used. In some
cases, the bias-corrected estimator using Rˆ even performs better than the bias-corrected estimator that
uses the true R. For example, in the case of N “ 200, T “ 40, the bias of βˆ1 for FEA is  ́0.47, while
the bias for FER A is 0.09. We attribute this observation to small sample effects. However, such cases
do not affect the evaluation of our two-step estimator, as the bias remains small relative to the standard
deviation in both scenarios. In summary, similar to the Monte Carlo simulation results in Table 1, our
two-step estimator demonstrates excellent performance in large samples and remains highly reliable even
in small samples.
A.6 Relaxing Distinct Eigenvalues Assumption
We now demonstrate that our method remains applicable even when ΣλΣγ contains repeated eigenvalues
(relaxing Assumption 1(iv) and Assumption A.1(iv)). When ΣλΣγ has distinct eigenvalues, there exists
a unique R-dimensional invertible matrix, G “ D1{2Υ1pΛ0Λ0{N q ́1{2, which does not depend on the
sample tpYit, Xitqu1ďiďN,1ďtďT , such that Λ0G1Λ0G{N, Γ0G1Γ0G{T are diagonal and Λ0G1Λ0G{N “ Γ0G1Γ0G{T .
However, when ΣλΣγ has repeated eigenvalues, the transformation G may depend on the sample. In
this case, we denote it by Gˆ: Gˆ “ D1{2OˆΥ1pΛ10Λ0{N q ́1{2 (see the proof of Theorem A.1), where Oˆ is an
orthogonal matrix that depends on the sample.
The dependence of Gˆ on the sample adds extra complexity to the proof. Therefore, we aim to search
for an objective function independent of G, along with its corresponding Hessian, allowing us to directly
apply the proof of Theorem A.3 to establish asymptotic equivalence.
Let us define
GNT “ diag
$
&
%
IdX , Gˆ, . . . , Gˆ
looomooon
N
, Gˆ ́1, . . . , Gˆ ́1
looooooomooooooon
T
,
.

31

We can verify that Gˆ is invertible wpa1, the minimum eigenvalue of Gˆ is strictly positive wpa1, and
the maximum eigenvalue of Gˆ is uniformly bounded wpa1 (see the proof of Theorem A.1). Therefore, it
follows that GNT is invertible wpa1, the minimum eigenvalue of GNT is strictly positive wpa1, and the
maximum eigenvalue of GNT is uniformly bounded wpa1. In addition, one can easily verify both
∇2LNT pβ0, Λ0, Γ0q “ G ́1
NT ∇2LNT pβ0, ΛG
0 , ΓG
0 qG1 ́1
NT
and G ́1
NT ∇2}Λˆ 1nucΛ  ́ Γ1Γˆnuc}2
FG1 ́1
NT do not depend on GNT , then
HNT pβ0, ΛG
0 , ΓG
0 q “ GNT ∇2LNT pβ0, Λ0, Γ0qG ́1
NT ` GNT G ́1
NT } ˆΛ1
nucΛ  ́ Γ1 ˆΓnuc}2
FG1 ́1
NT G1
NT
“ GNT
 ́
∇2LNT pβ0, Λ0, Γ0q ` G ́1
NT ∇2}Λˆ 1
nucΛ  ́ Γ1Γˆnuc}2
FG1 ́1
NT
 ̄
looooooooooooooooooooooooooooooooooooomooooooooooooooooooooooooooooooooooooon
does not depend on Gˆ
G1
NT
Therefore, EZ,Λ0,Γ0 HNT pβ0, Λ0G, Γ0Gq satisfies Assumption A.2 (or Assumption 3) if and only if
EZ,Λ0 ,Γ0
 ́
∇2LNT pβ0, Λ0, Γ0q ` G ́1
NT ∇2} ˆΛ1
nucΛ  ́ Γ1 ˆΓnuc}2
FG1 ́1
NT
 ̄
also satisfies Assumption A.2 (or Assumption 3). One can easily employ the same technique used in
the proof of Lemma A.5 to show that Assumption A.1 and Assumption A.4 are sufficient to verify
that EZ,Λ0,Γ0
 ́
∇2LNT pβ0, Λ0, Γ0q ` G ́1
NT ∇2} ˆΛ1nucΛ  ́ Γ1Γˆnuc}2
FG1 ́1
NT
 ̄
has block structure. Finally, by
replacing pΛ0G, Γ0Gq with pΛ0, Γ0q in the proof of Theorem A.3, Theorem A.3 still holds even in the
presence of repeated eigenvalues.
B Proofs of Consistency of the NNR estimator
We introduce new notations for simplicity. For any two positive real sequences tanuně1 and tbnuně1, we
use an À bn (an Á bn) to denote that there exists a positive constant c such that an ď cbn (an ě cbn)
for all n. We write an — bn if both an À bn and an Á bn. Recall that there are constants pρβ, ρλ, ργ, ρθq
such that
}β}max ď ρβ, }Λ0}max ď ρλ, }Γ0}max ď ργ , }Θ}max ď ρθ,
We define the estimation errors as:
∆ˆ β “ βˆnuc  ́ β0, ˆ∆Λ “ Λˆ nuc  ́ Λ0, ∆ˆ Γ “ Γˆnuc  ́ Γ0, ˆ∆Θ “ Θˆ nuc  ́ Θ0
and it follows from (3.1) that
} ˆ∆β}max ď 2ρβ, }∆ˆ Θ}max ď 2ρθ
The following lemma contains basic properties of low-rank projections, which will be used frequently
in the subsequent proof.
Lemma B.1 Let ∆ be an N ˆ T matrix, and define MΛ0 and MΓ0 as in (3.2). Then, the following
properties hold:
(i) }∆}nuc “ }MΛ0 ∆MΓ0 }nuc ` }∆  ́ MΛ0 ∆MΓ0 }nuc.
(ii) }∆}2
F “ }MΛ0 ∆MΓ0 }2
F ` }∆  ́ MΛ0 ∆MΓ0 }2
F.
32

(iii) rankp∆  ́ MΛ0 ∆MΓ0 q ď 2R.
The proof is omitted, but readers may refer to Lemma D.2 from Chernozhukov et al. (2019) and Chapter
10 in Wainwright (2019) for details.
B.1 Proofs of Theorem 1 and Theorem A.1
We only provide the proof of Theorem A.1 since Theorem A.1 extends Theorem 1 to incorporate prede
termined covariates.
Proof of Theorem A.1. The proof is based on the following lemma:
Lemma B.2 Under conditions of Theorem A.1,
}MΛ0 ∆ˆ ΘMΓ0 }nuc ď 2 ` α
α
 ́?N T } ˆ∆β} ` } ˆ∆Θ  ́ MΛ0 ˆ∆ΘMΓ0 }nuc
 ̄
where MΛ0 and MΓ0 are defined in (3.2).
The proof of Lemma B.2 is standard and will be presented at the end of this subsection. Lemma B.2
states that, when the penalization parameter φNT is sufficiently large, the component of the estimation
error of Θ that cannot be explained by neither Λ0 nor Γ0 is relatively small compared to the part of
the estimation error of Θ that can be explained by Λ0 and Γ0, along with a term that accounts for the
estimation error of β.
When } ˆ∆β}2 ` 1
NT }∆ˆ Θ}2
Fď
b
logpN T q
NT , we can directly obtain
}∆β} ď logpN T q{
amintN, T u, ? 1N T }∆Θ}F ď logpN T q{
amintN, T u (B.1)
When } ˆ∆β}2 ` 1
NT }∆ˆ Θ}2
Fą
b
logpN T q
NT , the proof is more intricate and requires additional effort.
Step 1 Since pβˆnuc, Θˆ nucq solves problem (3.1), we have
LNT pβ0 ` ˆ∆β, Θ0 ` ∆ˆ Θq  ́ LNT pβ0, Θ0q ď φNT
?N T p}Θ0}nuc  ́ }Θ0 ` ∆ˆ Θ}nucq (B.2)
Consider the Taylor expansion of LNT pβˆnuc, Θˆ nucq around pβ0, Θ0q:
LNT pβ0 ` ∆ˆ β, Θ0 ` ∆ˆ Θq  ́ LNT pβ0, Θ0q  ́ ∇βLNT pβ0, Θ0q1 ˆ∆β  ́ x∇ΘLNT pβ0, Θ0q , ˆ∆Θy
(i)
ď φNT
?N T p}Θ0}nuc  ́ }Θ0 ` ˆ∆Θ}nucq
loooooooooooooooomoooooooooooooooon
ď}∆ˆ Θ}nuc
 ́ ∇βLNT pβ0, Θ0q1 ∆ˆ β
loooooooooooomoooooooooooon
ď}∇β LNT pβ0,Θ0q}}∆ˆ β }
 ́ x∇ΘLNT pβ0, Θ0q , ˆ∆Θy
loooooooooooooomoooooooooooooon
ď}∇ΘLNT pβ0,Θ0q}op}∆ˆ Θ}nuc
(ii)
ď φNT
?N T } ˆ∆Θ}nuc ` }∇βLNT pβ0, Θ0q }} ˆ∆β} ` }∇ΘLNT pβ0, Θ0q }op}∆ˆ Θ}nuc
(iii)
ď φNT
?N T } ˆ∆Θ}nuc ` φNT
1 ` α }∆ˆ β} ` φNT
p1 ` αq
?N T } ˆ∆Θ}nuc
ď 2φNT
?N T
 ́
} ˆ∆Θ}nuc `
?N T } ˆ∆β}2
 ̄
(B.3)
where inequality (i) follows from inequality (B.2), inequality (ii) employs triangular inequality, Cauchy
Schwarz inequality, and H ̈older inequality (since the spectral norm is the dual norm of the nuclear norm),
and inequality (iii) holds because of φNT ě p1 ` αq maxt}∇βLNT pβ0, Θ0q }, }∇ΘLNT pβ0, Θ0q }opu as
33

stated in Theorem A.1. In addition, we have the following inequalities regarding the nuclear norm:
} ˆ∆Θ}nuc
(“i) }MΛ0 ˆ∆ΘMΓ0 }nuc ` }∆ˆ Θ  ́ MΛ0 ˆ∆ΘMΓ0 }nuc
(ii)
ď 2`α
α
 ́?N T } ˆ∆β} ` } ˆ∆Θ  ́ MΛ0 ∆ˆ ΘMΓ0 }nuc
 ̄
` } ˆ∆Θ  ́ MΛ0 ˆ∆ΘMΓ0 }nuc
(iii)
ď 2`α
α
?N T } ˆ∆β} ` 2p1 ` αq
?2R
α } ˆ∆Θ  ́ MΛ0 ˆ∆ΘMΓ0 }F
(iv)
ď 2`α
α
?N T }∆ˆ β} ` 2p1 ` αq
?2R
α }∆ˆ Θ}F
ď 2p1 ` αq
?2R
αp
?N T } ˆ∆β} ` } ˆ∆Θ}Fq
where equality (i) holds due to Lemma B.1(i), inequality (ii) follows from Lemma B.2, inequality (iii)
follows Lemma B.1(iii), and inequality (iv) is based on Lemma B.1(ii).
Therefore, combining the nuclear norm inequality and inequality (B.3) yields:
LNT pβ0 ` ∆ˆ β, Θ0 ` ˆ∆Θq  ́ LNT pβ0, Θ0q  ́ ∇βLNT pβ0, Θ0q1 ˆ∆β  ́ x∇ΘLNT pβ0, Θ0q , ˆ∆Θy
ď 8p1 ` αq
?2R α
φN T
?N T p
?N T } ˆ∆β} ` } ˆ∆Θ}Fq
ď 16p1 ` αq
?2R
α φNT
c
}∆ˆ β}2 ` 1
N T }∆ˆ Θ}2
F
(B.4)
Step 2 By the convexity of LNT p ̈,  ̈q, we have:
LNT pβ0 ` ˆ∆β, Θ0 ` ∆ˆ θq  ́ LNT pβ0, Θ0q  ́ ∇βLNT pβ0, Θ0q1∆ˆ β  ́ x∇ΘLNT pβ0, Θ0q, ˆ∆Θy
(i)
ě1
NT
N
ÿ
i“1
T
ÿ
t“1
p ́l:pXit, β ̃, λ ̃i, γ ̃tqqpX1
it ˆ∆β ` ˆ∆θit q2
(ii) ě bmin
1 NT
N
ÿ
i“1
T
ÿ
t“1
pX 1
it∆ˆ β ` ˆ∆θit q2
(iii) ě bmin
ˆ
κ
ˆ
}∆ˆ β}2 ` 1
N T } ˆ∆Θ}2
F
 ̇
 ́ηN `T
N T plogpN T qq2
 ̇
(B.5)
where inequality (i) follows from the convexity of LNT p ̈,  ̈q, inequality (ii) holds because  ́l:itp ̈q ě
bmin uniformly as stated in Assumption A.1(iii), and inequality (iii) employs Lemma B.2 and RSC
(Assumption 2).
By combining (B.4) and (B.5), we obtain:
bmin
ˆ
κ
ˆ
}∆β}2 ` 1
N T }∆Θ}2
F
 ̇
 ́ηN `T
N T plogpN T qq2
 ̇
ď 16p1 ` αq
?2R
α φNT
c
}∆ˆ β}2 ` 1
N T }∆ˆ Θ}2
F
ñ
c
} ˆ∆β}2 ` 1
N T } ˆ∆Θ}2
Fď
a1φNT `
b
a21φ2
NT ` 4a22
N `T
NT plogpN T qq2
2
ď a1φNT ` a2
cN ` T
N T plogpN T qq2
ď a1φNT ` a2
logpN T q
amintN, T u
34

where a1 “ 16p1`αq?2R
αbminκ ą 0, a2 “ η
bminκ ą 0. Let c1 “ maxta1, a2u and we can prove that wpa1
}βˆnuc  ́ β0} ď c1
 ́
φNT ` logpN T q{
amintN, T u
 ̄
? 1N T }Θˆ nuc  ́ Θ0}F ď c1
 ́
φNT ` logpN T q{
amintN, T u
 ̄
Step 3 We aim to establish the estimation error bound for Λˆnuc. The error bound for Γˆnuc will
be directly obtained by the same method. It is worth noting that our proof below is based on the
situation where Σ1{2
λ Σγ Σ1{2
λ may have repeated eigenvalues. For notational simplicity, let Υ be the R
dimensional matrix containing eigenvectors of 1
NT pΛ10Λ0q1{2Γ10Γ0pΛ10Λ0q1{2, let D be the R-dimensional
diagonal matrix of square root of eigenvalues of 1
NT pΛ10Λ0q1{2Γ10Γ0pΛ10Λ0q1{2, Ω be the R-dimensional
vector matrix containing square root of eigenvalues of Σ1{2
λ Σγ Σ1{2
λ in non-increasing order, and U0 be the
left singular vector of Θ0. We can easily verify that U0 “ Λ0pΛ10Λ0q ́1{2Υ. In addition, let Uˆ be the matrix
containing left singular vector of Θˆ nuc such that Uˆ 1Uˆ “ IR, we directly have ˆΛnuc “
?N Uˆ Dˆ 1{2
r1:R,1:Rs.
We first establish the bound for the distance between two spaces spanned by Uˆ and U0, respectively.
Using Davis-Kahan Theorem (Theorem 4 in Yu, Wang and Samworth, 2015), there exists an orthogonal
matrix O ̊ such that wpa1:
}Uˆ  ́ U0O ̊1}F
(i)
ď23
2 p2}Θ0}op ` }Θˆ nuc  ́ Θ0}opq}Θˆ nuc  ́ Θ0}F ψ2
R pΘ0q
(ii)
ď 8}Θ0}op} ˆΘnuc  ́ Θ0}F
ψ2
R pΘ0q
(B.6)
where inequality (i) follows from fact that ψR`1pΘ0q “ 0, inequality (ii) is based on the estimation error
bound of Θˆ nuc, implying that }Θˆ nuc  ́ Θ0}op{}Θ0}op
ÝpÑ 0. The matrix O ̊ arises due to the possible
multiplicity of eigenvalues and depends only on pΛ0, Γ0q. In addition, the strong factor assumption
(Assumption A.1(iv)) implies that:
? 1N T }Θ0}op
ÝpÑ Ω1, ? 1N T ψR pΘ0q ÝpÑ ΩR (B.7)
Combining inequalities (B.6) and (B.7) gives that wpa1:
}Uˆ  ́ U0O ̊1}F ď 16Ω1
?N T Ω2
R
}Θˆ nuc  ́ Θ0}F ď 16c1Ω1
Ω2
R
 ̃
φNT ` logpN T q
amintN, T u
 ̧
Now we turn to the error bound of Λˆnuc. Note that:
› › › › › › ›
Λˆ nuc  ́
?N Λ0pΛ1
0Λ0q ́1{2Υ
loooooooomoooooooon
U0
O ̊1D1{2
› › › › › › ›F
“
?N
› › ›
Uˆ Dˆ 1{2
r1:R,1:Rs  ́ U0O ̊1D1{2
› › ›F
ď
?N
› › ›
Uˆ  ́ U0O ̊1D1{2Dˆ  ́1{2
r1:R,1:Rs
› › ›F
› › ›
Dˆ 1{2
r1:R,1:Rs
› › ›F
ď
?N
 ̈
 ̊  ̊  ̋
› › ›
Uˆ  ́ U0O ̊1
› ›
›F
looooooomooooooon
A1
› › ›
Dˆ 1{2
r1:R,1:Rs
› ›
›F `
› ›
›U0O ̊1
 ́Dˆ 1{2
r1:R,1:Rs  ́ D1{2 ̄›
›
›F
loooooooooooooooooomoooooooooooooooooon
A2
 ̨
‹ ‹ ‚
35

We have already established the bound of A1, let us now focus on the upper bound of A2. Since
› › ›
Dˆ 1{2
r1:R,1:Rs  ́ D1{2
› ›
›F ď
?R
› › ›
Dˆ r1:R,1:Rs  ́ D
› ›
›op
2 mintψ1{2
R
 ́Dˆ r1:R,1:Rs
 ̄
, ψ1{2
R pDqu
ď
?R
› › ›
Dˆ r1:R,1:Rs  ́ D
› › ›F
2 mintψ1{2
R
 ́Dˆ r1:R,1:Rs
 ̄
, ψ1{2
R pDqu
ď
?R}Θˆ nuc  ́ Θ0}F
?N T Ω1{2
R
the following inequality holds wpa1:
A2 ď }U0}F
loomoon
“?R
› › ›
Dˆ 1{2
r1:R,1:Rs  ́ D1{2
› ›
›F ď R}Θˆ nuc  ́ Θ0}F
?N T Ω1{2
R
ď c1R
Ω1{2
R
 ̃
φNT ` logpN T q
amintN, T u
 ̧
Therefore, let G “ D1{2O ̊Υ1pΛ10Λ{N q ́1{2, we have
› › ›
ˆΛnuc  ́ Λ0G1
› ›
›F ď
?N
 ̃
16c1Ω3{2
1
Ω2
R
` c1R
Ω1{2
R
 ̧
loooooooooooomoooooooooooon
B1
 ̃
φNT ` logpN T q
amintN, T u
 ̧
, wpa1
By the same method, we show that
}Γˆnuc  ́ Γ0G ́1}F ď
?T B1
 ̃
φNT ` logpN T q
amintN, T u
 ̧
, wpa1
In addition, since
GG1 “ D1{2
loomoon
ÝpÑdiagpΩq
O ̊Υ1 pΛ1
0Λ{N q ́1
looooomooooon
ÝpÑΣ ́1
λ
ΥO ̊1 D1{2
loomoon
ÝpÑdiagpΩq
one can directly verify that, with probability approaching to 1, the maximum singular value of G is
uniform bounded, and the minimum singular value of G is strictly greater than zero. Therefore, we
finish the proof of the theorem.
In the next step, we will discuss how to obtain a nuisance estimator with better properties (e.g.,
uniformly bounded) to ensure that pˆΛnuc, ˆΓnucq P ΦNT . While this is not directly related to the current
theorem, it will be frequently used in subsequent theoretical discussions.
Step 4 As we have discussed in the main text, one potential concern of constructing pΛˆnuc, Γˆnucq as in
(2.5) is that the entries of pΛˆnuc, Γˆnucq are not necessarily uniformly bounded. In this step, we will show
that after truncating and normalizing the estimators in (2.5), we can obtain new nuisance estimators
pΛ ̃ nuc, Γ ̃nucq that satisfy the uniform boundedness condition, and consequently, pΛ ̃ nuc,  ̃Γnucq P ΦNT .
It should be noted that constructing a uniformly bounded nuisance estimator is solely for the con
venience of subsequent theoretical analysis. In practice, applied researchers do not need to perform this
step.
Our construction is based on the following observation: Since (1) pΛ0, Γ0q is uniformly bounded,
(2) the maximum singular value of G is uniform bounded, and (3) the minimum singular value of G
is strictly greater than zero, each entry of Λ0G and Γ0G is uniform bound. Thus, we can always find a
36

constant M ą 0 that is sufficiently large but independent of N, T such that }Λ0G}max, }Γ0G}max ď M
wpa1. We first elaborate on how to obtain the new estimator:
Step 1: For a large enough constant M ą 0 (independent of N, T ), compute truncated estimators
pΛ ̄ nuc, Γ ̄nucq, defined as
Λ ̄ nuc,ir “
# Λˆ nuc,ir, if | ˆΛnuc,ir| ď M
M signpΛˆ nuc,irq, else
Γ ̄nuc,ir “
# Γˆnuc,tr, if |Γˆnuc,tr| ď M
M signpΓˆnuc,trq, else
Step 2: Perform singular value decomposition on Θ ̄ nuc “ Λˆ nuc ˆΓ1nuc, such that  ̄Θnuc{
?N T “ U ̄ D ̄ V ̄ ,
where U ̄ P RNˆR and V ̄ P RT ˆR are matrices with left and right orthonormal singular
vectors of Θ ̄ nuc, and D ̄ is a diagonal matrix with singular values of Θ ̄ nuc{
?N T (arranged
in non-increasing order) on its diagonal. We compute pΛ ̃nuc, Γ ̃nucq as follows:
Λ ̃ nuc “
?N U ̄ D ̄ 1{2,  ̃Γnuc “
?T V ̄ D ̄ 1{2. (B.8)
By the boundedness of pΛ ̄ nuc, Λ ̄ nuc, Λ0G, Λ0Gq, we have the following inequalities holds wpa1:
}  ̄Λnuc  ́ ΛG
0 }F ď }  ̃Λnuc  ́ ΛG
0 }F ď
?N B1
 ̃
φNT ` logpN T q
amintN, T u
 ̧
(B.9)
}Γ ̄nuc  ́ ΓG
0 }F ď } ̃Γnuc  ́ ΓG
0 }F ď
?T B1
 ̃
φNT ` logpN T q
amintN, T u
 ̧
(B.10)
Thus,
}Θ ̄ nuc  ́ Θ0}F ď }Λ ̄ nuc}F
looomooon
ďM ?N R
}Γ ̄nuc  ́ ΓG
0 }F ` }ΓG
0 }F
loomoon
ďM ?T R
}  ̄Λnuc  ́ ΛG
0 }F
ď 2M ?RB1
loooomoooon
B2
?N T
 ̃
φNT ` logpN T q
amintN, T u
 ̧
, wpa1
Then the difference between the estimation errors of Θ ̄ nuc and ˆΘnuc is merely by a constant factor.
Applying the method in Step 3 yields that wpa1
?1N }Λ ̃ nuc  ́ Λ0}F, ?1T }Γ ̃nuc  ́ Γ0}F ď
 ̃
16B2Ω3{2
1
Ω2
R
` c1R
Ω1{2
R
 ̧
loooooooooooomoooooooooooon
c2
 ̃
φNT ` logpN T q
amintN, T u
 ̧
(B.11)
In addition, since  ̄Θnuc is the product of two rank-R uniformly bounded matrices and satisfies  ̄Θnuc “
Λ ̃ nuc  ̃Γ1nuc, each entry in pΛ ̃ nuc, Γ ̃nucq must be uniformly bounded wpa1. When ρλ, ργ are sufficiently large
(independent of N, T ), we have p  ̃Λnuc, Λ ̃ nucq P ΦNT . Therefore, we construct new uniformly bounded
nuisance estimators pΛ ̃nuc, Γ ̃nucq and prove that they achieve the same convergence rate, differing only
by a constant.
Since constructing a uniformly bounded nuisance estimator is solely for the convenience of subsequent
theoretical analysis, we do not distinguish between pΛˆ nuc, ˆΓnucq and p  ̃Λnuc, Γ ̃nucq in the rest of the paper,
with a bit of abuse of notation.
37

Proof of Lemma B.2. The proof is standard in the literature. Since pβˆnuc, Θˆ nucq solves the nuclear
norm regularized optimization problem (3.1), we have
LNT pβ0 ` ˆ∆β, Θ0 ` ∆ˆ Θq  ́ LNT pβ0, Θ0q ď φNT
?N T p}Θ0}nuc  ́ }Θ0 ` ∆ˆ Θ}nucq (B.12)
Consider the first-order Taylor expansion of LNT pβˆnuc, Θˆ nucq. Since LNT is a convex function, we have
the following inequality:
LNT pβ0 ` ˆ∆β, Θ0 ` ˆ∆Θq  ́ LNT pβ0, Θ0q ě ∇βLNT pβ0, Θ0q1 ∆ˆ β ` x∇ΘLNT pβ0, Θ0q , ∆ˆ Θy (B.13)
Combining (B.12) and (B.13) yields:
φN T
?N T p}Θ0}nuc  ́ }Θ0 ` ˆ∆Θ}nucq  ́ ∇βLNT pβ0, Θ0q1 ∆ˆ β  ́ x∇ΘLNT pβ0, Θ0q , ∆ˆ Θy ě 0
which implies:
φN T
?N T p}Θ0}nuc  ́ }Θ0 ` ˆ∆Θ}nucq ` |∇βLNT pβ0, Θ0q1 ˆ∆β| ` |x∇ΘLNT pβ0, Θ0q , ∆ˆ Θy| ě 0 (B.14)
The term |∇βLNT pβ0, Θ0q1 ˆ∆β| is controlled by:
|∇βLNT pβ0, Θ0q1 ∆ˆ β|
(i)
ď }∇βLNT pβ0, Θ0q }}∆ˆ β}
(ii)
ď1
1 ` α φNT } ˆ∆β}
where inequality (i) follows from the Cauchy-Schwarz inequality, and inequality (ii) holds because of
the condition φNT ě p1 ` αq}∇βLNT pβ0, Θ0q } as stated in Theorem A.1. Similarly, we can control
|x∇ΘLNT pβ0, Θ0q , ˆ∆Θy| as follows:
|x∇ΘLNT pβ0, Θ0q , ˆ∆Θy|
(i)
ď }∇ΘLNT pβ0, Θ0q }op} ˆ∆Θ}nuc
(ii)
ď1
1`α
φN T
?N T } ˆ∆Θ}nuc
where inequality (i) follows from the H ̈older inequality, as the nuclear norm is the dual norm of the
spectral norm, and inequality (ii) holds because of the condition φNT ě p1`αq
?N T }∇ΘLNT pβ0, Θ0q }op
as stated in Theorem A.1. Thus, inequality (B.14) can be written as:
p}Θ0}nuc  ́ }Θ0 ` ∆ˆ Θ}nucq ` 1
1`α
 ́?N T } ˆ∆β} ` } ˆ∆Θ}nuc
 ̄
ě 0 (B.15)
In addition, we have the following inequalities regarding the nuclear norm:
}Θ0 ` ∆ˆ Θ}nuc
(i“) }MΛ0 Θ0MΓ0 ` MΛ0 ˆ∆ΘMΓ0 }nuc ` }Θ0  ́ MΛ0 Θ0MΓ0 ` ˆ∆Θ  ́ MΛ0 ˆ∆ΘMΓ0 }nuc
(i“i) }MΛ0 ∆ˆ ΘMΓ0 }nuc ` }Θ0 ` ˆ∆Θ  ́ MΛ0 ∆ˆ ΘMΓ0 }nuc
(iii)
ě }MΛ0 ˆ∆ΘMΓ0 }nuc ` }Θ0}nuc  ́ } ˆ∆Θ  ́ MΛ0 ∆ˆ ΘMΓ0 }nuc
where equality (i) holds due to Lemma B.1(i), equality (ii) follows from the fact MΛ0 Θ0MΓ0 “ 0, and
inequality (iii) is triangular inequality.
38

Finally, we combine the nuclear norm inequality and (B.15) to obtain that:
} ˆ∆Θ  ́ MΛ0 ˆ∆ΘMΓ0 }nuc  ́ }MΛ0 ∆ˆ ΘMΓ0 }nuc ` 1
1`α
 ́?N T } ˆ∆β} ` } ˆ∆Θ}nuc
 ̄
ě0
ñ 2`α
1 ` α } ˆ∆Θ  ́ MΛ0 ˆ∆ΘMΓ0 }nuc  ́ α
1 ` α }MΛ0 ˆ∆ΘMΓ0 }nuc ` 1
1`α
?N T }∆ˆ β} ě 0
2`α α
 ́
} ˆ∆Θ  ́ MΛ0 ∆ˆ ΘMΓ0 }nuc `
?N T } ˆ∆β}
 ̄
ě }MΛ0 ∆ˆ ΘMΓ0 }nuc
This completes the proof.
B.2 Proofs of Corollary 2 and Corollary A.2
Since Corollary A.2 extends Corollary 2 to include predetermined covariates, we provide only the proof
of Corollary A.2, as the proof of the latter can be regarded as a special case.
As stated in Assumption A.1(i), tpYit, Witqu1ďtďT is φ-mixing with a uniformly exponential decay
rate across i. However, this assumption is much stronger than required for the proof of Corollary A.2.
In fact, it can be relaxed to tpYit, Witqu1ďtďT is α-mixing with a uniformly sufficiently fast polynomial
decay rate across i.
Proof of Corollary A.2. It suffices to prove that
maxt}∇βLNT pβ0, Θ0q}, ?N T }∇ΘLNT pβ0, Θ0q}opu “ op
 ́
logpN T q{
amintN, T u
 ̄
By Assumption A.1(i) and the first order condition, ∇βLNT pβ0, Θ0q is the sum of weakly depen
dent bounded random vectors with zero means conditional on pZ, Λ0, Γ0q. Consequently, we can apply
Theorem 1 in Kanaya (2017) to establish that:
}∇βLNT pβ0, Θ0q} ă logpN T q{
?N T , wpa1 (B.16)
Note that the pi, tq entry of the matrix ∇ΘLNT pβ0, Θ0q is l9itpXi1tβ0 ` θ0q, and it is straightforward
to check that (1) tl9itpXi1tβ0 ` θ0qu1ďiďN,1ďtďT is independent across i and φ-mixing with uniformly
exponential decay rate, (2) EZ,Λ0,Γ0 pl9itpXi1tβ0 ` θ0qq “ 0 by first-order condition, and (3) l9itpXi1tβ0 ` θ0q
is uniformly bounded across i, t, N, T by Assumption A.1(ii) and Assumption A.1(iii). Therefore, we can
employ Lemma E.2 to obtain
N T }∇ΘLNT pβ0, Θ0q}op “ Op
 ́
logpN ` T q
amaxtN, T u{
amintN, T u
 ̄
and thus,
?N T }∇ΘLNT pβ0, Θ0q} “ op
 ́
logpN T q{
amintN, T u
 ̄
(B.17)
We then combine (B.16) and (B.17) to complete proof.
B.3 Proof of Lemma A.4
Our proof builds on Chernozhukov et al. (2019) (see Lemma D.3 and Lemma D.4 in its Appendix) and
extends it to accommodate serial correlation. The extension introduces additional technical complexity,
particularly in deriving the high-probability upper bound for the empirical process under weak depen
dence. To address this problem, we apply the concentration inequality in Samson (2000) to establish the
39

concentration bound around the expectation of the empirical process. Furthermore, we use the block
method introduced by Yu (1994), constructing a new sequence with independent blocks to approximate
the original sequence. When the block size is sufficiently large, the correlation between separated blocks
becomes negligible, thus facilitating the theoretical analysis.
It is worth noting that our proof strategy is not only applicable to models with homogeneous slopes,
but with minor modifications, it can also be extended to accommodate heterogeneous slopes (e.g., Cher
nozhukov et al. (2019), Ma, Su and Zhang (2022)). We believe the flexibility of our strategy enhances
the applicability of our approach to a broader class of models.
Proof of Lemma A.4. Recall the definition of the constraints space:
C1 “
!
p∆β , ∆Θq P pRdX ˆ RNˆT q | }MΛ0 ∆ΘMΓ0 }nuc ď c0
 ́?N T }∆β} ` }∆Θ  ́ MΛ0 ∆ΘMΓ0 }nuc
 ̄)
C2 “
#
p∆β, ∆Θq P pRdX ˆ RNˆT q | }∆β}2 ` 1
N T }∆Θ}2
Fě
c
logpN T q NT
+
For notational simplicity, let C “ C1 X C2. Also, use EV “ Ep ̈ | Vq to denote the conditional expectation,
and PV “ Pp ̈ | Vq to denote the conditional probability.
Step 1 In this step, we aim to establish a lower bound for řN
i“1
řT
t“1 EV pXi1t∆β ` ∆θit q2. By Assump
tion A.3(ii), there exist a constant κ0 ą 0 such that:
inf
1ďiďN,1ďtďT σmin
 ̃ ̃
EV pXitXi1tq EV pXitq
EV pXi1tq 1
 ̧ ̧
ě κ0 ą 0
It follows that:
N
ÿ
i“1
T
ÿ
t“1
EV pX1
it∆β ` ∆θit q2 ě
N
ÿ
i“1
T
ÿ
t“1
 ́
∆1β ∆θit
 ̄
 ̃
EV pXitXi1tq EV pXitq
EV pXi1tq 1
 ̧ ̃
∆β
∆θit
 ̧
ě κ0
 ́
N T }∆β}2 ` ||∆Θ||2
F
 ̄
(B.18)
Step 2 (Concentration around expectation) For any ω ą 0, define the constraint set N pωq:
N pωq “
"
p∆β, ∆Θq P C | }∆β}2 ` 1
N T ||∆Θ||2
F ď ω, }∆β}max ď 2ρβ, }∆Θ}max ď 2ρθ
*
and define the empirical process:
Zpωq “ sup
p∆β ,∆ΘqPN pωq
ˇ ˇ ˇ ˇ ˇ
N
ÿ
i“1
T
ÿ
t“1
pX 1
it∆β ` ∆θit q2  ́ EV
N
ÿ
i“1
T
ÿ
t“1
pX 1
it∆β ` ∆θit q2
ˇ ˇ ˇ ˇ ˇ
It is straightforward to check that:
sup
p∆β ,∆ΘqPN pωq
|pX 1
it∆β ` ∆θit q2  ́ EV pX1
it∆β ` ∆θit q2| ď 2 sup
p∆β ,∆ΘqPBpωq
pX 1
it∆β ` ∆θit q2
ď 4 sup
}∆β }maxď2ρβ ,||∆θ ||maxď2ρθ
␣pX 1
it∆β q2 ` ∆2
θit
(
ď 16pdX ρ2
X ρ2
β ` ρ2
θq
loooooooooomoooooooooon
σ
40

almost surely. Additionally, by the Efron-Stein inequality, we have:
EV
N
ÿ
i“1
T
ÿ
t“1
sup
p∆β ,∆ΘqPN pωq
`pX 1
it∆β ` ∆θit q2  ́ EV pX1
it∆β ` ∆θit q2 ̆2 ď N T σ2
4
By Assumption A.3(i), conditional on V, the sequence tXitu1ďtďT is φ-mixing with an exponential decay
rate uniformly across i, This allows us to directly apply Theorem 3 from Samson (2000) to obtain the
following concentration inequality of Zpωq around its expectation:
PV pZpωq ě EV Zpωq ` δq ď exp
ˆ
L ́1 min
"δ
σ , δ2
NT σ2
* ̇
, @δ ą 0
where 1 ď L ă 8 that does not depend on N, T , and is only determined by the mixing property of Xit
conditional on V.
Step 3 (Upper bound for EV Zpωq) We follow Yu (1994)’s block method to provide an upper bound
for EV Zpωq. Define Xi “ pXi1, Xi2, . . . , XiT q, where tXiu is independent across i, and for each i, Xi is
φ-mixing with mixing coefficients φpτ q. Let τNT ď T be a positive integer, and μNT “ t T
2τNT u be the
largest integer less than or equal to T
2τNT . For each Xi, we divide the sequence into 2μNT blocks, each
of length τNT , with the remaining term part having a length of at most 2τNT . The subscript notation
indicates that the values of τNT and μNT may depend on N and T .
We further partition the blocks into two groups: odd-numbered blocks and even-numbered blocks.
For notational simplicity, let T p0q
k denote the indices of elements in the k-th odd block, and T p0q be
the set of indices of all elements contained in odd-numbered blocks. Similarly, let T p1q
k be indices of
elements in the k-th even block, and T p1q be set of the indices of all elements in even-numbered blocks.
Specifically:
T p0q “
μN T ď
k“1
T p0q
k , T p0q
k “ tt | 2pk  ́ 1qτNT ` 1 ď t ď 2pk  ́ 1qτNT ` τNT u
T p1q “
μN T ď
k“1
T p1q
k , T p1q
k “ tt | p2k  ́ 1qτNT ` 1 ď t ď p2k  ́ 1qτNT ` τNT u
The corresponding partition of Xi can be written as:
X p0q
i“
 ́
X p0,1q
i , X p0,2q
i , . . . , Xp0,μNT q
i
 ̄
X p1q
i“
 ́
X p1,1q
i , X p1,2q
i , . . . , Xp1,μNT q
i
 ̄
where for each 1 ď k ď μNT ,
X p0,kq
i“
 ́
Xit | t P T p0q
k
 ̄
, Xp1,kq
i“
 ́
Xit | t P T p1q
k
 ̄
and the remaining term can be collected into Ri:
Ri “ pXit | t P Rq , R “ tt | 2τNT μNT ` 1 ď t ď T u
In the next step, for each i, we construct a new sequence with an independent block structure
conditional on V:
Xr p0q
i“
 ́
Xr p0,1q
i , Xr p0,2q
i , . . . , Xr p0,μNT q
i
 ̄
41

such that each block Xrp0,kq
i (of size τNT ) is independent with each other conditional on V, but within
each block, Xr p0,kq
i conforms the same conditional distribution as in Xp0,kq
i . We then construct tXrp1q
i u in
the similar way:
Xr p1q
i“
 ́
Xr p1,1q
i , Xr p1,2q
i , . . . , Xr p1,μNT q
i
 ̄
where each block is independent with each other conditional on V, but within each block, Xrp1,kq
i follows
the same conditional distribution as in Xp1,kq
i.
Denote Xr “ pXr p0,1q
i , Xr p1,1q
i , . . . , Xr p0,μNT q
i , Xr p1,μNT q
i q, and for s P t0, 1u, define the empirical process
as:
Zpsqpωq “ sup
p∆β ,∆ΘqPN pωq
ˇ ˇ ˇ ˇ ˇ
N
ÿ
i“1
ÿ
tPT psq
pX 1
it∆β ` ∆θit q2  ́ EV
N
ÿ
i“1
ÿ
tPT psq
pX 1
it∆β ` ∆θit q2
ˇ ˇ ˇ ˇ ˇ
Zrpsqpωq “ sup
p∆β ,∆ΘqPN pωq
ˇ ˇ ˇ ˇ ˇ
N
ÿ
i“1
ÿ
tPT psq
p
Xr 1
it∆β ` ∆θit q2  ́ EV
N
ÿ
i“1
ÿ
tPT psq
p
Xr 1
it∆β ` ∆θit q2
ˇ ˇ ˇ ˇ ˇ
It is straightforward to see that the expectation of supreme EV Zpωq can be bounded as follows:
EV Zpωq ďEV Zp0qpωq ` EV Zp1qpωq
ďEV Zrp0qpωq ` EV Zrp1qpωq ` |EV Zrp0qpωq  ́ EV Zp0qpωq| ` |EV Zrp1qpωq  ́ EV Zp1qpωq|
` 2σN τNT
(B.19)
where the last term on the right-hand side of the inequality, 2σN τNT arises due to the remaining terms
when T cannot be exactly divided by τNT . The following lemma is crucial in bounding |EV Zrp0qpωq  ́
EV Zp0qpωq| and |EV Zrp1qpωq  ́ EV Zp1qpωq|:
Lemma B.3 (Lemma 4.1 in Yu (1994)) For any measurable function h on RNˆτNT μNT with bound
M ą 0, we have
|EV hpXpsq
1 , Xpsq
2 , . . . , Xpsq
N q  ́ EV hpXr psq
1 , Xr psq
2 , . . . , Xr psq
N q| ď M pN μNT  ́ 1q φpτNT q, s “ 0, 1
To apply Lemma B.3, let
hpsq pX psq
1 , Xpsq
2 , . . . , Xpsq
N q “ sup
p∆β ,∆ΘqPN pωq
ˇ ˇ ˇ ˇ ˇ
N
ÿ
i“1
ÿ
tPT psq
pX 1
it∆β ` ∆θit q2  ́ EV
N
ÿ
i“1
ÿ
tPT psq
pX 1
it∆β ` ∆θit q2
ˇ ˇ ˇ ˇ ˇ
and it is easy to show that the following inequality holds almost surely for s “ 0, 1:
|hpsq pX psq
1 , Xpsq
2 , . . . , Xpsq
N q| ď2 sup
p∆β ,∆ΘqPN pωq
ˇ ˇ ˇ ˇ ˇ
N
ÿ
i“1
ÿ
tPT psq
pX 1
it∆β ` ∆θit q2
ˇ ˇ ˇ ˇ ˇ
ď4 sup
p∆β ,∆ΘqPN pωq
ˇ ˇ ˇ ˇ ˇ
N
ÿ
i“1
ÿ
tPT psq
pX 1
it∆β q2 `
N
ÿ
i“1
ÿ
tPT psq
∆2
θit
ˇ ˇ ˇ ˇ ˇ
ď4 sup
p∆β ,∆ΘqPN pωq
N
ÿ
i“1
ÿ
tPT psq
pX 1
it∆βq2 ` 4 sup
p∆β ,∆ΘqPN pωq
N
ÿ
i“1
ÿ
tPT psq
∆2
θit
ď4N μNT τNT dX ρ2
X ω ` 4N T ω
ď2N T pdX ρ2
X ` 2qω
42

Thus, applying Lemma B.3 on |EV Zrpsqpωq  ́ EV Zpsqpωq| (with M ď 2N T pdX ρ2
X ` 2qω) yields
|EV Zrpsqpωq  ́ EV Zpsqpωq| ď2N T `dX ρ2
X ` 2 ̆ ω pN μNT  ́ 1q φpτNT q
ď
`dX ρ2
X ` 2 ̆
loooooomoooooon
C0 2
pN T q2 φpτNT q
τN T
ω (B.20)
Intuitively, when φpτNT q decays fast enough as τNT Ñ 8, we can expect that φpτNT q{τNT Ñ 0 fast
enough so that the |EV Zrpsqpωq  ́ EV Zpsqpωq| can be well bounded.
We now turn to establish a bound for EV Zrpsqpωq. Since each block in Xri is independent with each other
conditional on V, we can study the Rademacher process corresponding to each block. More specifically,
for each s, we can construct a set of i.i.d. Rademacher random variables tεpsq
ik | i “ 1, 2, . . . , N, k “
1, 2, . . . , μNT u, which is independent of pXrpsq
1 , Xr psq
2 , . . . , Xr psq
N q conditional on V. Using symmetrization
method, we have
EV Zrpsqpωq “ EV sup
p∆β ,∆ΘqPN pωq
ˇ ˇ ˇ ˇ ˇ
N
ÿ
i“1
ÿ
tPT psq
p
Xr 1
it∆β ` ∆θit q2  ́ EV
N
ÿ
i“1
ÿ
tPT psq
p
Xr 1
it∆β ` ∆θit q2
ˇ ˇ ˇ ˇ ˇ
ď 2EV,ε sup
p∆β ,∆ΘqPN pωq
ˇ ˇ ˇ ˇ ˇ ˇ
N
ÿ
i“1
μN T ÿ
k“1
 ̈
 ̋
ÿ
tPT psq
k
p
Xr 1
it∆β ` ∆θit q2
 ̨
‚εpsq
ik
ˇ ˇ ˇ ˇ ˇ ˇ
(B.21)
For s “ 0, we have
2EV,ε sup
p∆β ,∆ΘqPN pωq
ˇ ˇ ˇ ˇ ˇ ˇ
N
ÿ
i“1
μN T ÿ
k“1
 ̈
 ̋
ÿ
tPT p0q
k
p
Xr 1
it∆β ` ∆θit q2
 ̨
‚εp0q
ik
ˇ ˇ ˇ ˇ ˇ ˇ
(i)
ď2EV,ε sup
p∆β ,∆ΘqPN pωq
ˇ ˇ ˇ ˇ ˇ
τN T ÿ
τ “1
N
ÿ
i“1
μN T ÿ
k“1
p
Xr 1
i,2pk ́1qτNT `τ ∆β ` ∆θi,2pk ́1qτNT `τ q2εp0q
ik
ˇ ˇ ˇ ˇ ˇ
ď2
τN T ÿ
τ “1
EV,ε sup
p∆β ,∆ΘqPN pωq
ˇ ˇ ˇ ˇ ˇ
N
ÿ
i“1
μN T ÿ
k“1
p
Xr 1
i,2pk ́1qτNT `τ ∆β ` ∆θi,2pk ́1qτNT `τ q2εp0q
ik
ˇ ˇ ˇ ˇ ˇ
(ii)
ď 16pdX ρX ρβ ` ρθq
loooooooooomoooooooooon
C1 2
τN T ÿ
τ “1
EV,ε sup
p∆β ,∆ΘqPN pωq
ˇ ˇ ˇ ˇ ˇ
N
ÿ
i“1
μN T ÿ
k“1
p
Xr 1
i,2pk ́1qτNT `τ ∆β ` ∆θi,2pk ́1qτNT `τ qεp0q
ik
ˇ ˇ ˇ ˇ ˇ
ď C1
2
τN T ÿ
τ “1
EV,ε sup
p∆β ,∆ΘqPN pωq
ˇ ˇ ˇ ˇ ˇ
N
ÿ
i“1
μN T ÿ
k“1
Xr 1
i,2pk ́1qτNT `τ ∆β εp0q
ik
ˇ ˇ ˇ ˇ ˇ loooooooooooooooooooooooooooooooomoooooooooooooooooooooooooooooooon
S1,τ
` C1
2
τN T ÿ
τ “1
Eε sup
p∆β ,∆ΘqPN pωq
ˇ ˇ ˇ ˇ ˇ
N
ÿ
i“1
μN T ÿ
k“1
∆θi,2pk ́1qτNT `τ εp0q
ik
ˇ ˇ ˇ ˇ ˇ loooooooooooooooooooooooooooomoooooooooooooooooooooooooooon
S2,τ
(B.22)
where we change the order of summation to obtain inequality (i). Inequality (ii) follows from the
contraction property of the Rademacher process (see Section 4.2 in Ledoux and Talagrand (2013)). To
43

give an upper bound of S2,τ , for each τ ,
S1,τ “ EV,ε sup
p∆β ,∆ΘqPN pωq
ˇ ˇ ˇ ˇ ˇ
N
ÿ
i“1
μN T ÿ
k“1
Xr 1
i,2pk ́1qτNT `τ ∆β εp0q
ik
ˇ ˇ ˇ ˇ ˇ
(i)
ď EV,ε sup
p∆β ,∆ΘqPN pωq
 ̃› › › › ›
N
ÿ
i“1
μN T ÿ
k“1
Xr 1
i,2pk ́1qτNT `τ εp0q
ik
› › › › ›
}∆β }
 ̧
“ EV,ε
› › › › ›
N
ÿ
i“1
μN T ÿ
k“1
Xr 1
i,2pk ́1qτNT `τ εp0q
ik
› › › › ›
sup
p∆β ,∆ΘqPN pωq
}∆β }
(ii)
ď
b
8πd3
X ρ2
X
looooomooooon
?2C2
sup
p∆β ,∆ΘqPN pωq
}∆β }
ď
?2C2
aN μNT
?ω
ď C2
cNTω
τN T
(B.23)
where inequality (i) follows from the Cauchy-Schwarz inequality, and inequality (ii) is from Lemma E.1
using the fact that each element in Xr1
i,2pk ́1qτNT `τ εp0q
ik is bounded by ρX .
Let ∆p0,τq
Θ be an N ˆ μNT matrix such that r∆p0,τq
Θ sik “ θi,2pk ́1qτNT `τ for each τ “ 1, 2, . . . , τNT .
Let Ep0q denote the N ˆ μNT matrix collecting εpsq
ik , we can show that
S2,τ “Eε sup
p∆β ,∆ΘqPN pωq
ˇ ˇ
ˇx∆p0,τ q
Θ , Ep0qy
ˇ ˇ ˇ
ďEε sup
p∆β ,∆ΘqPN pωq
ˇ ˇ
ˇx∆p0,τ q
Θ , Ep0qy
ˇ ˇ ˇ
(i)
ďEε}Ep0q}op sup
p∆β ,∆ΘqPN pωq
}∆p0,τ q
Θ }nuc
(B.24)
where inequality (i) comes from the fact that nuclear norm is the duel norm of operator norm. We can
find a constant C3 that does not depend on N, T, τNT , such that Eε}Ep0q}op ď C3
?N ` μNT , based on
Bandeira and Van Handel (2016). Furthermore, we have
sup
p∆β ,∆ΘqPN pωq
}∆p0,τ q
Θ }nuc
(i)
ď sup
p∆β ,∆ΘqPN pωq
||∆Θ||nuc
(ii)
ď sup
p∆β ,∆ΘqPN pωq
p||∆Θ  ́ MΛ0 ∆ΘMΓ0 ||nuc ` ||MΛ0 ∆ΘMΓ0 ||nucq
(iii)
ď sup
p∆β ,∆ΘqPN pωq
 ́
p1 ` c0q}∆Θ  ́ MΛ0 ∆ΘMΓ0 }nuc ` c0
?N T }∆β}
 ̄
(iv)
ď sup
p∆β ,∆ΘqPN pωq
 ́
p1 ` c0q
?2R||∆Θ  ́ MΛ0 ∆ΘMΓ0 ||F ` c0
?N T }∆β}
 ̄
(v)
ď sup
p∆β ,∆ΘqPN pωq
 ́
p1 ` c0q
?2R||∆Θ||F ` c0
?N T }∆β}
 ̄
(vi)
ď p1 ` c0q
?2R
loooooomoooooon
C4
?N T ω
ďC4
?N T ω
(B.25)
Inequality (i) follows from Lemma E.5 since ∆p0,τq
Θ can be regarded as a submatrix of ∆Θ. Inequality
(ii) is an application of triangle inequality, and inequality (iii) comes from p∆β, ∆Θq P C. Inequality
44

(iv) holds because ∆Θ  ́ MΛ0 ∆ΘMΓ0 is a matrix of rank at most 2R. Inequality (v) follows from the
fact }∆Θ}2
F “ }∆Θ  ́ MΛ0 ∆ΘMΓ0 }2
F ` }MΛ0 ∆ΘMΓ0 }2
F. Finally, the last inequality directly comes from
p∆β, ∆Θq P N pωq.
The same argument can be applied on s “ 1. Combining equations (B.19)—(B.25), we derive the
following bound:
EV Zrpsqpωq ď C1τNT
2
ˆ
C2
cNTω
τN T
` C3C4
aN T pN ` μNT qω
 ̇
ď C1C2
2
aN T τNT ω ` C1C3C4
2
b
N T pN ` μNT qτ 2
NT ω, s P t0, 1u
Therefore,
EV Zpωq ďC1C2
aN T τNT ω ` C1C3C4
b
N T pN ` μNT qτ 2
NT ω ` C0pN T q2 φpτNT q
τN T
ω ` 2σN τNT
ďpC1C2 ` C1C3C4q
b
N T pN ` μNT qτ 2
NT ω ` C0pN T q2 φpτNT q
τN T
ω ` 2σN τNT
ď κ0
8 NTω `
ˆ8
κ0
pC1C2 ` C1C3C4q2 ` 2σ
 ̇
pN ` μNT qτ 2
NT ` C0pN T q2 φpτNT q
τN T
ω
When φpτNT q “ e ́ζ0τNT , let τNT “ 2
ζ0 logpN T q, we have
EV Zpωq ď κ0
8 NTω ` 4
ζ02
ˆ8
κ0
pC1C2 ` C1C3C4q2 ` 2σ ` C0
 ̇
loooooooooooooooooooooooooomoooooooooooooooooooooooooon
η
pN ` T qplogpN T qq2
ď κ0
8 N T ω ` ηpN ` T qplogpN T qq2
Substituting EV Zpωq in the concentration bound with the right-hand side of the inequality derived
above, we obtain:
PV
 ́
Zpωq ě κ0
8 N T ω ` ηpN ` T qplogpN T qq2 ` δ
 ̄
ď exp
ˆ
 ́L ́1 min
"δ
σ , δ2
NT σ2
* ̇
, @δ ą 0
Let δ “ κ0
8 N T ω, we have
PV
 ́
Zpωq ě κ0
4 N T ω ` ηpN ` T qplogpN T qq2 ̄
ď exp
ˆ
 ́ min
" κ0N T ω
8Lσ , κ20N T ω2
64Lσ2
* ̇
(B.26)
Step 4 (Peeling) For l “ 1, 2, . . . , 8, define:
Dl “
#
p∆β, ∆Θq P C | 2l ́1
c
logpN T q
N T ď }∆β}2 ` 1
N T ||∆Θ||2
F ď 2l
c
logpN T q NT
+
It can be readily verified that C Ă Ť8
l“1 Dl. Let ωl “ 2l
b
logpN T q
NT , define:
El “ ␣Zpωlq ě κ0
4 N T ωl ` ηpN ` T qplogpN T qq2(
45

and
E ̃l “
"
ˇ ˇ ˇ ˇ ˇ
N
ÿ
i“1
T
ÿ
t“1
pX 1
it∆β ` ∆θit q2  ́
N
ÿ
i“1
T
ÿ
t“1
EpX 1
it∆β ` ∆θit q2
ˇ ˇ ˇ ˇ ˇ
ě1
2
N
ÿ
i“1
T
ÿ
t“1
EV pX1
it∆β ` ∆θit q2 ` ηpN ` T qplogpN T qq2,
Dp∆β, ∆Θq P Dl
*
One can easily observe that when E ̃l happens, since
N
ÿ
i“1
T
ÿ
t“1
EV pX1
it∆β ` ∆θit q2 ě N T κ0
ˆ
}∆β}2 ` 1
N T ||∆Θ||2
F
 ̇
ě 2l ́1κ0N T
c
logpN T q NT
we must have
|
N
ÿ
i“1
T
ÿ
t“1
pX 1
it∆β ` ∆θit q2  ́
N
ÿ
i“1
T
ÿ
t“1
EV pX1
it∆β ` ∆θit q2| ě 1
2
N
ÿ
i“1
T
ÿ
t“1
EV pX1
it∆β ` ∆θit q2 ` ηpN ` T qplogpN T qq2
ñ|
N
ÿ
i“1
T
ÿ
t“1
pX 1
it∆β ` ∆θit q2  ́
N
ÿ
i“1
T
ÿ
t“1
EV pX1
it∆β ` ∆θit q2| ě 2l ́2κ0N T
c log N T
N T ` ηpN ` T qplogpN T qq2
ñ|
N
ÿ
i“1
T
ÿ
t“1
pX 1
it∆β ` ∆θit q2  ́
N
ÿ
i“1
T
ÿ
t“1
EV pX1
it∆β ` ∆θit q2| ě κ0
4 N T ωl ` ηpN ` T qplogpN T qq2
ñ Zpωlq ě κ0
4 N T ωl ` ηpN ` T qplogpN T qq2
Therefore, E ̃l Ă El. In addition,
PV
ˆ
|
N
ÿ
i“1
T
ÿ
t“1
pX 1
it∆β ` ∆θit q2  ́
N
ÿ
i“1
T
ÿ
t“1
EV pX1
it∆β ` ∆θit q2|
ě1
2
N
ÿ
i“1
T
ÿ
t“1
EpX 1
it∆β ` ∆θit q2 ` ηpN ` T qplogpN T qq2, Dp∆β, ∆Θq P C
 ̇
ďPV
 ̃8 ď
l“1
E ̃l
 ̧
ď
8
ÿ
l“1
PV
 ́E ̃l
 ̄
ď
8
ÿ
l“1
PV pElq
(i)
ď
8
ÿ
l
exp
ˆ
 ́ κ0N T ωl
8Φσ
 ̇
`
8
ÿ
l
exp
ˆ
 ́ κ20N T ω2
l
64Φσ2
 ̇
ď
8
ÿ
l
exp
 ̃
 ́ κ02laN T logpN T q
8Φσ
 ̧
`
8
ÿ
l
exp
ˆ
 ́ κ204l logpN T q
64Φσ2
 ̇
Ñ0
(B.27)
where inequality (1) follows probability bound (B.26).
Step 5 Combining the lower bound (B.18) and (B.27), the following inequality holds for all p∆β, ∆Θq P
C wpa1:
|
N
ÿ
i“1
T
ÿ
t“1
pX 1
it∆β ` ∆θit q2  ́
N
ÿ
i“1
T
ÿ
t“1
EpX 1
it∆β ` ∆θit q2| ď 1
2
N
ÿ
i“1
T
ÿ
t“1
EpX 1
it∆β ` ∆θit q2 ` ηpN ` T qplogpN T qq2
46

which implies wpa1:
ñ
N
ÿ
i“1
T
ÿ
t“1
pX 1
it∆β ` ∆θit q2 ě 1
2
N
ÿ
i“1
T
ÿ
t“1
EpX 1
it∆β ` ∆θit q2  ́ ηpN ` T qplogpN T qq2
and consequently:
ñ
N
ÿ
i“1
T
ÿ
t“1
pX 1
it∆β ` ∆θit q2 ě 1
2 κ0
 ́
N T }∆β}2 ` ||∆Θ||2
F
 ̄
 ́ ηpN ` T qplogpN T qq2
Since the inequality above holds for any V, we can omit the subscript V and obtain the same bound
under P. Let κ “ 1
2 κ0, and the proof is completed.
C Proofs of Local Convexity and Asymptotic Equivalence
We start with clarifying some related issues before proceeding with the proof.
First, we introduce the following abbreviations without causing ambiguity: for any pβ, λi, γtq, define
l9it “ l9pXi1tβ ` λ1iγtq and l:it “ l:pXi1tβ ` λ1iγtq. When the log-likelihood is evaluated at the (normalized)
true parameters, define l90
it “ l9pXi1tβ0 ` λ10,iγ0,tq and l:0
it “ l:pXi1tβ0 ` λ10,iγ0,tq. We define the following
quantities, ∆β “ β  ́ β0, ∆γt “ γt  ́ γ0G,t, and ∆λi “ λi  ́ λG
0,i, to denote the deviations of the parameters
from their true values. When considering the difference between l:it and l:0
it, we use
 ̃∆Y  ̊
it “ l:it  ́ l:0
it “ lr;itp∆1
β Xit `  ̃Λ1
i∆γt ` ∆1
λi γ ̃tq
to represent the Taylor expansion. Here, lr;it denotes the third-order derivative of lit evaluated at pβ ̃,  ̃Λ, Γ ̃q,
lying on the segment between pβ, Λ, Γq and the normalized true parameters pβ, Λ0G, Γ0Gq. Since the
parameter space of pβ0, Λ0, Γ0q is compact and all singular values of Gˆ are uniformly bounded and
strictly positive wpa1, the normalized true parameters pβ, Λ0G, Γ0Gq lie within a compact space wpa1.
Thus, pβ ̃, Λ ̃,  ̃Γq also lie within a compact space.
Second, addition effort is required to address the issue where, for some i, t, the nuisance parameter
estimator may significantly differ from the true nuisance parameter. This challenge arises because the
definition of neighborhood BδNT (3.5) only ensures that, for any pΛ, Γq in the neighborhood, the distance
between pΛ, Γq and pΛ0G, Γ0Gq would be shrinking in terms of the Frobenius norm, but it does not guarantee
that the possible nuisance parameter is accurate for each individual i, t. Therefore, for each pβ, Λ, Γq P
BδNT , we divide Λ into two parts, with subscripts for each part respectively given as:
INT “
"
1 ď i ď N : }λi  ́ λG
0,i} ď 1
?T δNT
*
, Ic
NT “ t1, . . . , N uzINT (C.1)
Similarly, we divide Γ into two parts, with subscripts for each part respectively given as:
TNT “
"
1 ď t ď T : }γt  ́ γG
0,t} ď 1
?N δNT
*
, Tc
NT “ t1, . . . , T uzTNT (C.2)
It is straightforward to observe that, when N „ T , for any i P INT , the distance between Λi and λG
0,i
converges to zero at the rate T  ́1{4 logpN T q. Similarly, for any t P TNT , the distance between γt and
γ0,t also converges to zero as N, T Ñ 8 at the rate N  ́1{4 logpN T q. Note that the notations of INT and
TNT are not rigorous, because for different pβ, Λ, Γq P BδNT , we have different INT and TNT . However,
following directly from the Frobenius norm convergence rate we can easily show that the sizes of Ic
NT
47

and T c
NT are uniformly bounded for every possible pβ, Λ, Γq P BδNT :
|I c
NT | À NT δ4
NT , |T c
NT | À NT δ4
NT , wpa1 (C.3)
Therefore, we will continue to use this imprecise notation in the following text for simpler notations.
In addition, our construction (C.3) implies that the sizes of Ic
NT and T c
NT are at most of the order
?N plogpN T qq4 when N „ T . Thus, the number of “divergent” nuisance parameters grows at a much
slower rate relative to N and T .
Third, for notational simplicity, we rescale the Hessian matrix HNT as H “ N T HNT and suppress
the dependence on pβ, Λ, Γq when it does not cause ambiguity. Since the only difference between HNT
and H is the factor N T , we will study the property of H in the following context. Furthermore, we
define:
H“
 ̈
 ̊  ̋
Hββ1 Hβλ1 Hβγ1
Hλβ1 Hλλ1 Hλγ1
Hγβ1 Hγλ1 Hγγ1
 ̨
‹
‚, F “
 ̈
 ̊  ̋
00 0
0 0 Fλγ1
0 Fγλ1 0
 ̨
‹
‚ V“
 ̈
 ̊  ̋
00 0
0 Vλλ1 Vλγ1
0 Vγλ1 Vγγ1
 ̨
‹ ‚
Here, H ` F is the Hessian related to the negative log-likelihood function LNT , and V is Hessian related
to the penalty term. Hββ1 is a dX ˆ dX matrix, Hβλ1 is a dX ˆ N R matrix consisting of N blocks, each
of size dX ˆ R, and Hβγ1 is a dX ˆ T R matrix with T blocks, each of size dX ˆ R. Hλλ1 , Vλλ1 are block
diagonal N R ˆ N R matrices consisting of N 2 blocks, each of size R ˆ R, Hγγ1 , Vγγ1 are block-diagonal
T R ˆT R matrices with T 2 blocks, each of size R ˆR. In addition, Hλγ1 , Vλγ1 , Fλγ1 are N R ˆT R matrices
consisting of N T blocks, each with size R ˆ R. More specifically:
Hββ1 “  ́
N
ÿ
i“1
T
ÿ
t“1
l:it Xit X 1
it
Hλβ1 “  ́
«T ÿ
t“1
l:itXitγ1
t
ff
i“1,2,...,N
Hγβ1 “  ́
«N ÿ
i“1
l:itXitλ1
i
ff
t“1,2,...,T
Hλλ1 “  ́diag
$
&
%
«T ÿ
t“1
l:itγtγ1
t
ff
i“1,2,...,N
,
.

Hγγ1 “  ́diag
$
&
%
«N ÿ
i“1
l:itλiλ1
i
ff
t“1,2,...,T
,
.

Hλγ1 “
”
 ́l:itλiγt
ı
i“1,2,...,N,t“1,2,...,T
Vλλ1 “ T
N
“λiλ1
i1
‰
i,i1“1,2,...,N ...
Vλγ1 “ “ ́λiγ1
t
‰
i“1,2,...,N,t“1,2,...,T
Vγγ1 “ N
T
“γtγ1
t1
‰
t,t1 “1,2,...,T
Fλγ1 “
”
 ́l9itIR
ı
i“1,2,...,N,t“1,2,...,T
(C.4)
48

We use Vˆ to denote the matrix V with all its elements replaced by λˆnuc,i and γˆnuc,t. Specifically:
Vˆλλ1 “ T
N
”λˆnuc,iλˆ1
nuc,i1
ı
i,i1“1,2,...,N ...
Vˆλγ1 “
”
 ́λˆnuc,iγˆ1
nuc,t
ı
i“1,2,...,N,t“1,2,...,T
Vˆγγ1 “ N
T
“γˆnuc,tγˆ1
nuc,t1
‰
t,t1 “1,2,...,T
In addition, we use H0, F0, V0 when the matrices H, F, V are evaluated at the normalized true value
pβ0, Λ0G, Γ0Gq, for example, H0 “ Hpβ0, Λ0G, Γ0Gq. We also use E0p ̈q to denote the conditional expectation
EX,Λ0,Γ0 p ̈q when X is strictly exogenous, or the conditional expectation EZ,Λ0,Γ0 p ̈q when we consider
predetermined covariates. It is easy to verify that:
E0F0 “ 0 (C.5)
By standard calculus, H P RpdX`RpN`T qqˆpdX`RpN`T qq admits the following decomposition:
H “ H ` F ` Vˆ (C.6)
We further decompose H by H “ Hr ` Hr c based on partitions INT and TNT such that
Hrββ1 “
ÿ
iPINT ,tPTNT
p ́l:it qXit X 1
it
Hrλβ1 “  ́
«
1pi P INT q
ÿ
tPTN T
l:itXitγ1
t
ff
i“1,2,...,N
Hrγβ1 “  ́
«
1pt P TNT q
ÿ
iPIN T
l:itXitλ1
i
ff
t“1,2,...,T
Hrλλ1 “  ́diag
$
&
%
«
1pi P INT q
ÿ
tPTN T
l:itγtγ1
t
ff
i“1,2,...,N
,
.

Hrγγ1 “  ́diag
$
&
%
«
1pt P TNT q
ÿ
iPNN T
l:itλiλ1
i
ff
t“1,2,...,T
,
.

Hrλγ1 “  ́
”
1pi P INT , t P TNT ql:itλiγt
ı
i“1,2,...,N,t“1,2,...,T
(C.7)
The matrix V can be decomposed in the same way, V “ Vr ` Vr c, where
Vrλλ1 “
„N
T 1pi, i1 P INT q pλiλi1 q
ȷ
i,i1 “1,2,...,N
Vrγγ1 “
„T
N 1pt, t1 P TNT q pγtγt1 q
ȷ
t,t1 “1,2,...,T
Vrλγ1 “ “ ́1pi P INT , t P TNT qλiγ1
t
‰
i“1,2,...,N,t“1,2,...,T
C.1 Proof of Theorem 3 and A.3
As Theorem A.3 generalizes Theorem 3 to include predetermined covariates, we provide only the proof
of the former, noting that the latter follows as a special case.
Proof of Theorem A.3. It is sufficient to show H is positive definite on the BδNT . Consider the
49

following decomposition of H:
H“
 ̈
 ̊  ̋
E0H0,ββ1 E0H ̃0,βλ1 E0H ̃0,βγ1
E0H ̃0,λβ1 E0H ̃0,λλ1 E0H ̃0,λγ1
E0H ̃0,γβ1 E0H ̃0,γλ1 E0H ̃0,γγ1
 ̨
‹
‚`
 ̈
 ̊  ̋
00 0
0 H ̃ c
λλ1 0
0 H ̃ c
γγ1
 ̨
‹
‚` E0Vˆ
looooooooooooooooooooooooooooooooooooooooooomooooooooooooooooooooooooooooooooooooooooooon
S1
`
 ̈
 ̊  ̋
Hββ1  ́ E0H0,ββ1 Hβλ1  ́ E0H ̃0,βλ1 Hββ1  ́ E0H ̃0,βγ1
Hλβ1  ́ E0H ̃0,λβ1 0 0
Hγβ1  ́ E0H ̃0,γβ1 0 0
 ̨
‹ ‚
looooooooooooooooooooooooooooooooooooooomooooooooooooooooooooooooooooooooooooooon
S2
`
 ̈
 ̊  ̋
00 0
0 H ̃λλ1  ́ E0H ̃0,λλ1 Hλγ1  ́ E0H ̃0,λγ1
0 Hγλ1  ́ E0H ̃0,γλ1 H ̃γγ1  ́ E0H ̃0,γγ1
 ̨
‹ ‚
looooooooooooooooooooooooooomooooooooooooooooooooooooooon
S3
`pVˆ  ́ E0Vˆ q ` F
(C.8)
Let us first look at the first term. It is easy to verify that S1 admits the follow decomposition:
S1 “ E0Hr0 ` E0Vrˆ `
 ̈
 ̊  ̋
E0Hr c
ββ1 0 0
0 00
0 00
 ̨
‹ ‚
looooooooooomooooooooooon
ě0
`
 ̈
 ̊  ̋
00 0
0
Hr c
λλ1 0
0 0 Hr c
γγ1
 ̨
‹
‚` E0Vrˆ c
loomoon
ě0
ě E0Hr0 ` E0Vrˆ `
 ̈
 ̊  ̋
00 0
0
Hr c
λλ1 0
0 0 Hr c
γγ1
 ̨
‹ ‚
(C.9)
Since matrix E0Hr0 ` E0Vrˆ can be regarded as the population Hessian matrix indexed by i P INT and
t P TNT , we obtain:
E0Hr0 ` E0Vrˆ
(i)
ěC
 ̈
 ̊  ̋
pN T  ́ |T c
NT |N  ́ |Ic
NT |T q IdX 0 0
0 pT  ́ |T c
NT |q diagtD1, . . . , DN u 0
0 0 pN  ́ |Ic
NT |q diagtDN`1, . . . , DN`T u
 ̨
‹ ‚
(ii)
ě1
2C
 ̈
 ̊  ̋
N T IdX 0 0
0 T diagtD1, . . . , DN u 0
0 0 N diagtDN`1, . . . , DN`T u
 ̨
‹ ‚
(C.10)
where Di “ 1tiPINT uIR for any i “ 1, 2, . . . , N , and DN`t “ 1ttPTNT uIR for any t “ 1, 2, . . . , T . Inequality
(i) uses Assumption A.2, and inequality (ii) is from the asymptotic assumption of N, T . In addition, by
Lemma C.1, we conclude that, there exists a constant B1 ą 0 such that, with probability approaching
to 1:
 ̈
 ̊  ̋
00 0
0
Hr c
λλ1 0
0 0 Hr c
γγ1
 ̨
‹ ‚
(i)
ě B1 mintN, T udiag t0dX , IR  ́ D1, . . . , IR  ́ DN , IR  ́ DN`1, . . . , IR  ́ DN`T u
(C.11)
Combining equations (C.9), (C.10), and (C.11), we conclude that for any pβ, Λ, Γq P BδNT , S1 is locally
convex wpa1. In addition, let B2 “ mint 1
2 C, B1u irrelevant with N, T , for any pβ, Λ, Γq P BδNT , S1
50

admits asymptotic block structure:
S1 ě B2
 ̈
 ̊  ̋
N T IdX 0 0
0 T INR 0
0 0 N IT R
 ̨
‹
‚, wpa1 (C.12)
Therefore, the optimization problem is locally convex if the impact (or the maximum singular values) of
the derivations, S2, S3, Vˆ  ́ E0Vˆ , and F are asymptotically negligible compared to S1. Using Lemma C.3
we can prove that 1
2 S1 ` S2 is positive definite. In addition, using Lemma C.4, and Lemma C.5, we have:
sup
pβ ,Λ,ΓqPBδN T
}S3}op, }F }op “ oppmintN, T uq (C.13)
Using Lemma C.6, since pΛˆ nuc, Γˆnucq P BδNT , we have wpa1
}Vˆ  ́ E0Vˆ }op À sup
pβ ,Λ,ΓqPBδN T
}V  ́ V0}op “ oppmintN, T uq (C.14)
We defer the and lemmas and their proofs to the end of this subsection. Combining (C.12)—(C.14), and
Weyl’s theorem, we conclude that for any pβ, Λ, Γq P BδNT ,
Hě 1
3 B2
 ̈
 ̊  ̋
N T IdX 0 0
0 T INR 0
0 0 N IT R
 ̨
‹
‚, wpa1 (C.15)
Thus, H is positive definite and strictly convex wpa1 on neighborhood BδNT . Letting c5 “ 1
3 B2 completes
the proof.
Lemma C.1 Under the assumptions stated in Theorem A.3, there exist a constant B1 ą 0 independent
of N, T such that
inf
pβ ,Λ,ΓqPBδN T
 ̈
 ̊  ̋
00 0
0 Hλλ1 0
0 0 Hγγ1
 ̨
‹
‚ě B1
 ̈
 ̊  ̋
0dX 0 0
0 T INR 0
0 0 N IT R
 ̨
‹
‚, wpa1
Proof of Lemma C.1. Recall
Hλλ1 “  ́diag
$
&
%
«T ÿ
t“1
l:itγtγ1
t
ff
i“1,2,...,N
,
.

Hγγ1 “  ́diag
$
&
%
«N ÿ
i“1
l:itλiλ1
i
ff
t“1,2,...,T
,
.

51

For any i-th diagonal block of Hλλ1 , with probability approaching to 1, we have
inf
pβ ,Λ,ΓqPBδN T
σmin
 ̃T ÿ
t“1
l:itγtγ1
t
 ̧
(i)
Á inf
pβ ,Λ,ΓqPBδN T
σmin
 ̃T ÿ
t“1
γtγ1
t
 ̧
Á inf
pβ ,Λ,ΓqPBδN T
σmin
`ΓG1
0 ΓG
0
 ̆  ́ sup
pβ ,Λ,ΓqPBδN T
›
›Γ1Γ  ́ ΓG1
0 ΓG
0
›
›op
(ii)
Á T  ́ sup
pβ ,Λ,ΓqPBδN T
›
›Γ1Γ  ́ ΓG1
0 ΓG
0
› ›F
(iii)
Á T  ́ sup
pβ ,Λ,ΓqPBδN T
}Γ}F
›
›Γ  ́ ΓG
0
›
›F  ́ sup
pβ ,Λ,ΓqPBδN T
}ΓG
0 }F
›
›Γ  ́ ΓG
0
› ›F
(iv)
Á T ́
?T sup
pβ ,Λ,ΓqPBδN T
›
›Γ  ́ ΓG
0
› ›F
(iv)
Á T  ́ T δNT
ÁT
where inequality (i) uses Assumption A.1(iii), inequality (ii) follows from Assumption A.1(iv), inequality
(iii) is Cauchy-Schwarz inequality, inequality (iv) is based on the uniform boundedness of Γ, Γ0G, and
inequality (v) follows from Theorem A.1. We also obtain:
inf
pβ ,Λ,ΓqPBδN T
σmin
 ̃N ÿ
i“1
l:itλiλ1
i
 ̧
Á N, wpa1
based on the same argument. Therefore, we are able to find such constant B1 ą 0 independent of N, T
and complete the proof.
Lemma C.2 Under the assumptions stated in Theorem A.3, we have
sup
pβ ,Λ,ΓqPBδN T
}Hββ1  ́ E0H0,ββ1 }op “ OppN T δNT q
Proof of Lemma C.2. Observe that
Hββ1  ́ E0H0,ββ1 “  ́
N
ÿ
i“1
T
ÿ
t“1
pl:it Xit X 1
itq `
N
ÿ
i“1
T
ÿ
t“1
E0pl:0
it Xit X 1
itq
“ ́
N
ÿ
i“1
T
ÿ
t“1
pl:it Xit X 1
it  ́ l:0
it Xit X 1
itq  ́
N
ÿ
i“1
T
ÿ
t“1
pl:0
it Xit X 1
it  ́ E0pl:0
it Xit X 1
itqq
(C.16)
52

We have
sup
pβ ,Λ,ΓqPBδN T
› › › › ›
N
ÿ
i“1
T
ÿ
t“1
pl:it Xit X 1
it  ́ l:0
it Xit X 1
itq
› › › ›
›op
(“i) sup
pβ ,Λ,ΓqPBδN T
› › › › › › › › › ›
N
ÿ
i“1
T
ÿ
t“1
lr;it
 ́
∆1
β Xit ` γ ̃1
t∆λi ` λ ̃1
i∆γt
 ̄
loooooooooooooooooomoooooooooooooooooon
 ̃∆Y  ̊
it
Xit X 1
it
› › › › › › › › ›
›
op
(ii)
ď sup
pβ ,Λ,ΓqPBδN T
› › › › ›
N
ÿ
i“1
T
ÿ
t“1
lr;itp∆1
β XitqXitX1
it
› › › ›
›op
` sup
pβ ,Λ,ΓqPBδN T
› › › › ›
N
ÿ
i“1
T
ÿ
t“1
lr;it
 ́
γ ̃1
t∆λi ` λ ̃1
i∆γt
 ̄
Xit X 1
it
› › › ›
›op
(iii)
À N T δNT ` sup
pβ ,Λ,ΓqPBδN T
› › › › ›
N
ÿ
i“1
T
ÿ
t“1
lr;it
 ́
γ ̃1
t∆λi ` λ ̃1
i∆γt
 ̄
Xit X 1
it
› › › ›
›op
(iv)
À sup
pβ ,Λ,ΓqPBδN T
T
ÿ
t“1
› › › › ›
N
ÿ
i“1
lr;itγ ̃1
t∆λi XitX 1
it
› › › ›
›op
` sup
pβ ,Λ,ΓqPBδN T
N
ÿ
i“1
› › › › ›
T
ÿ
t“1
lr;itλ ̃1
i∆γt XitX 1
it
› › › ›
›op
` N T δNT
(v)
À
T
ÿ
t“1
?N sup
pβ ,Λ,ΓqPBδN T
}Λ  ́ ΛG
0 }F `
N
ÿ
i“1
?T sup
pβ ,Λ,ΓqPBδN T
}Γ  ́ ΓG
0 }F ` N T δNT
(vi)
À N T δNT
(C.17)
Equation (i) represents the Taylor expansion, where lr;it denotes the third-order derivative of lit evaluated
at pβ ̃,  ̃Λ, Γ ̃q, a point on the segment between pβ, Λ, Γq and the true parameters. As we have discussed
before, pβ ̃, Λ ̃,  ̃Γq also lies in a compact space, as both pβ ̃,  ̃Λ, Γ ̃q and true parameters lie within in compact
spaces. Equation (ii) follows from the application of the triangular inequality. Equation (iii) is derived
based on the uniform boundedness of lr;it, X, and pβ ̃,  ̃Λ, Γ ̃q (Assumption A.1(ii) and (iii)), and the
bound suppβ,Λ,ΓqPBδNT }β  ́ β0} ď δNT . Inequality (iv) is the triangular inequality. Inequality (v) is
based on the uniform boundedness of lr;it, X, and pβ ̃,  ̃Λ, Γ ̃q, along with the application of the Cauchy
Schwarz inequality. Inequality (vi) employs the bounds suppβ,Λ,ΓqPBδNT }Λ  ́ Λ0G}op ď
?N δNT and
suppβ,Λ,ΓqPBδNT }Γ  ́ Γ0G}op ď
?T δNT . A byproduct that will be frequently used in the subsequent
analysis is
sup
pβ ,Λ,ΓqPBδN T
N
ÿ
i“1
T
ÿ
t“1
∆ ̃ 2
Y ̊
it
ď NT δ2
NT
which can be proved using the similar method.
Under Assumption A.1(i) and (ii), we employ Theorem 1 from Kanaya (2017) to establish that for
any pβ, Λ, Γq
› › › › ›
N
ÿ
i“1
T
ÿ
t“1
pl:0
it Xit X 1
it  ́ E0pl:0
it Xit X 1
itqq
› › › ›
›op
“ Opp
?N T q (C.18)
By combining equations (C.16), (C.17), (C.18), and δNT À logpN T q{
amintN, T u, we obtain
sup
pβ ,Λ,ΓqPBδN T
}Hββ1  ́ E0H0,ββ1 }op “ OppN T δNT q
53

Lemma C.3 Under the conditions in Theorem 3, for any pβ, Λ, Γq P BδNT , 1
2 S1 ` S2 is positive definite
wpa1.
Proof of Lemma C.3. As we have demonstrated in the Proof of Theorem A.3, there is a constant
B2 such that
S1 ě B2
 ̈
 ̊  ̋
N T IdX 0 0
0 T INR 0
0 0 N IT R
 ̨
‹
‚, wpa1
it follows that
1
2 S1 ` S2 ě B2
2
 ̈
 ̊  ̋
N T IdX 0 0
0 T INR 0
0 0 N IT R
 ̨
‹
‚`
 ̈
 ̊  ̋
Hββ1  ́ E0H0,ββ1 Hβλ1  ́ E0H ̃0,βλ1 Hββ1  ́ E0H ̃0,βγ1
Hλβ1  ́ E0H ̃0,λβ1 0 0
Hγβ1  ́ E0H ̃0,γβ1 0 0
 ̨
‹ ‚
(i)
ě
 ̈
 ̊  ̋
B2
3 N T IdX Hβλ1  ́ E0H ̃0,βλ1 Hββ1  ́ E0H ̃0,βγ1
Hλβ1  ́ E0H ̃0,λβ1 B2
2 T IR 0
Hγβ1  ́ E0H ̃0,γβ1 0 B2
2 N IR
 ̨
‹
‚, wpa1
where the inequality (i) follows from Lemma C.2 ensuring that }Hββ1  ́ E0H0,ββ1 }op “ oppN T q. The
matrix 1
2 S1 ` S2 is positive definite if its Schur complement:
 ̃ B2
2 T IR 0
0 B2
2 N IR
 ̧
 ́3
N T B2
 ̃
Hλβ1  ́ E0H ̃0,λβ1
Hγβ1  ́ E0H ̃0,γβ1
 ̧  ́
Hβλ1  ́ E0H ̃0,βλ1 Hβγ1  ́ E0H ̃0,βγ1
 ̄
is positive definite. Thus, by using Weyl’s Theorem, it suffices to show that
sup
pβ ,Λ,ΓqPBδN T
› › ›
 ́
Hλβ1  ́ E0Hr0,λβ1 Hγβ1  ́ E0Hr0,γβ1
 ̄› › ›
2
op {pN T q “ oppmintN, T uq
We focus the Frobenius norm instead of the spectral norm because:
› › › › ›
 ̃
Hλβ1  ́ E0Hr0,λβ1
Hγβ1  ́ E0Hr0,γβ1
 ̧› › › ›
›op
ď
› › › › ›
 ̃
Hλβ1
Hγβ1
 ̧
 ́
 ̃
E0Hr0,λβ1
E0Hr0,γβ1
 ̧› › › › ›F
ď }Hλβ1  ́ E0Hr0,λβ1 }F ` }Hγβ1  ́ E0Hr0,γβ1 }F
(C.19)
Observe that:
l:itXitγ1
t “ ppl:itXit  ́ l:0
itXitq ` pl:0
itXit  ́ E0pl:0
itXitq ` E0pl:0
itXitqqp∆γt ` γG1
0,tq
we have
l:itXitγ1
t  ́ E0pl:0
itXitqγG1
0,t “lr;it∆ ̃ Y  ̊
it XitγG1
0,t ` pl:0
itXit  ́ E0pl:0
itXitqqγG1
0,t ` lr;it∆ ̃ Y  ̊
it Xit∆1
γt
` pl:0
itXit  ́ E0pl:0
itXitqq∆1
γt ` E0pl:0
itXitq∆1
γt
where lr;it denotes the third-order derivative of lit evaluated at pβ ̃, Λ ̃,  ̃Γq, lying on the segment between
pβ, Λ, Γq and the normalized true parameters. Since both pβ ̃,  ̃Λ, Γ ̃q and true parameters lie within in
compact spaces, it follows that pβ ̃, Λ ̃,  ̃Γq is also in a compact space. Here, we use  ̃∆Y  ̊
it “ ∆1β Xit ` λ ̃1i∆γt `
∆1λi γ ̃t to simplify the expression. Since the X and pβ ̃,  ̃Λ, Γ ̃q are uniformly bounded, and lit is four times
differentiable, lr;it is uniformly bounded by extreme value theorem. Let us focus on }Hλβ1  ́ E0Hrλβ1 }F
54

and the bound of }Hγβ1  ́ E0Hr0,γβ1 }F is obtained using the same method.
}Hλβ1  ́ E0Hr0,λβ1 }2
F“
ÿ
iPIN T
› › › ›
ÿ
tPTN T
lr;it∆Y  ̊
it XitγG1
0,t `
ÿ
tPTN T
pl:0
itXit  ́ E0pl:0
itXitqqγG1
0,t
`
ÿ
tPTN T
lr;it∆ ̃ Y  ̊
it Xit∆1
γt `
ÿ
tPTN T
pl:0
itXit  ́ E0pl:0
itXitqq∆1
γt
`
ÿ
tPTN T
E0pl:0
itXitq∆1
γt `
ÿ
tPT c
NT
l:itXitγ1
t
› › › ›
2
F
`
ÿ
iPIc
NT
› › › › ›
T
ÿ
t“1
l:itXitγ1
t
› › › › ›
2
F
ď6
# ÿ
iPIN T
› › › › ›
ÿ
tPTN T
lr;it∆ ̃ Y  ̊
it XitγG1
0,t
› › › › ›
2
F
loooooooooooooooooomoooooooooooooooooon
A1
`
ÿ
iPIN T
› › › › ›
ÿ
tPTN T
pl:0
itXit  ́ E0pl:0
itXitqqγG1
0,t
› › › › ›
2
F
looooooooooooooooooooooooomooooooooooooooooooooooooon
A2
`
ÿ
iPIN T
› › › › ›
ÿ
tPTN T
lr;it∆ ̃ Y  ̊
it Xit∆1
γt
› › › › ›
2
F
loooooooooooooooooomoooooooooooooooooon
A3
`
ÿ
iPIN T
› › › › ›
ÿ
tPTN T
pl:0
itXit  ́ E0pl:0
itXitqq∆1
γt
› › › › ›
2
F
looooooooooooooooooooooooomooooooooooooooooooooooooon
A4
`
ÿ
iPIN T
› › › › ›
ÿ
tPTN T
E0pl:0
itXitq∆1
γt
› › › › ›
2
F
loooooooooooooooooomoooooooooooooooooon
A5
`
ÿ
iPIN T
› › › › › ›
ÿ
tPT c
NT
l:itXitγ1
t
› › › › › ›
2
F
looooooooooooomooooooooooooon
A6
+
`
ÿ
iPIc
NT
› › › › ›
T
ÿ
t“1
l:itXitγ1
t
› › › › ›
2
F
loooooooooooomoooooooooooon
A7
(C.20)
The maximum singular value of the first term A1 has the following bound:
sup
pβ ,Λ,ΓqPBδN T
A1
(i)
ď sup
pβ ,Λ,ΓqPBδN T
T
N
ÿ
i“1
T
ÿ
t“1
› › › ›
lr;itXitγ1
0,t
› › › ›
2
F
 ̃∆2
Y ̊
it
(ii)
À T sup
pβ ,Λ,ΓqPBδN T
N
ÿ
i“1
T
ÿ
t“1
pX 1
it∆βq2 ` T sup
pβ ,Λ,ΓqPBδN T
N
ÿ
i“1
T
ÿ
t“1
}
`∆λi }2 ` ∆γt }2 ̆
À N T 2 sup
pβ ,Λ,ΓqPBδN T
}β  ́ β0}2 ` T 2 sup
pβ ,Λ,ΓqPBδN T
}Λ  ́ Λ0}2
F ` T N sup
pβ ,Λ,ΓqPBδN T
}Γ  ́ Γ0}2
F
(iii)
À NT 2δ2
NT
(C.21)
where inequality (i) follows from the Cauchy-Schwarz inequality, inequality (ii) uses the boundedness of
X,pβ, Λ0, Γ0q, pβ ̃, Λ ̃,  ̃Γq, and lr;it, and inequality (iii) follows directly from the definition of BδNT .
For the maximum singular value of the second term A2, we proceed as follows.
sup
pβ ,Λ,ΓqPBδN T
A2 ď
N
ÿ
i“1
› › › › ›
ÿ
tPTN T
pl:0
itXit  ́ E0pl:0
itXitqqγG1
0,t
› › › › ›
2
F
(C.22)
ď
N
ÿ
i“1
› › › › › ›
T
ÿ
t“1
pl:0
itXit  ́ E0pl:0
itXitqqγG1
0,t  ́
ÿ
tPT c
NT
pl:0
itXit  ́ E0pl:0
itXitqqγG1
0,t
› › › › › ›
2
F
(C.23)
ď2
N
ÿ
i“1
› › › › ›
T
ÿ
t“1
pl:0
itXit  ́ E0pl:0
itXitqqγG1
0,t
› › › › ›
2
F
`2
N
ÿ
i“1
› › › › › ›
ÿ
tPT c
NT
pl:0
itXit  ́ E0pl:0
itXitqqγG1
0,t
› › › › › ›
2
F
(C.24)
55

Given that (1) E0pl:0
itXit  ́ XitE0pl:0
itXitqq “ 0, (2) l:0
itXit  ́ XitE0pl:0
itXitqγ0G,t1 is uniformly bounded, and
(3) tl:0
itXitu1ďtďT (conditional on pZ, Λ0, Γ0q or pX, Λ0, Γ0q) satisfies the mixing condition in Assump
tion A.1(i), we apply Theorem 1 from Kanaya (2017) to conclude that
N
ÿ
i“1
› › › › ›
T
ÿ
t“1
pl:0
itXit  ́ E0pl:0
itXitqqγG1
0,t
› › › › ›
2
F
À NT
Additionally, by the boundedness of pl:0
itXit  ́ E0pl:0
itXitqqγ0G,t1 , we obtain:
N
ÿ
i“1
› › › › › ›
ÿ
tPT c
NT
pl:0
itXit  ́ E0pl:0
itXitqqγG1
0,t
› › › › › ›
2
F
À N |T c
NT |2 À N 3T 2δ8
NT
Therefore,
sup
pβ ,Λ,ΓqPBδN T
A2 À N 3T 2δ8
NT
The maximum singular value of A3 is bounded by:
sup
pβ ,Λ,ΓqPBδN T
A3
(i)
ď sup
pβ ,Λ,ΓqPBδN T
T
N
ÿ
i“1
T
ÿ
t“1
}
lr;it∆ ̃ Y  ̊
it Xit}2}∆γt }2
ď sup
pβ ,Λ,ΓqPBδN T
T
T
ÿ
t“T
#
sup
pβ ,Λ,ΓqPBδN T
N
ÿ
i“1
}
lr;it∆ ̃ Y  ̊
it Xit}2
+
}∆γt }2
(ii)
À NT 2δ2
NT sup
pβ ,Λ,ΓqPBN T
T
ÿ
t“1
}∆γt }2
(iii)
À NT 3δ4
NT
(C.25)
where inequality (i) uses the Cauchy-Schwarz inequality, inequality (ii) relies on the uniform boundedness
of X, pβ ̃,  ̃Λ, Γ ̃q, and lr;it, as well as the fact that suppβ,Λ,ΓqPBδNT
řT
t“1  ̃∆2
Y ̊
it
ď suppβ,Λ,ΓqPBδNT
řN i“1
řT
t“1 ∆ ̃ 2
Y ̊
it
À
NT δ2
NT (this be derived using the same method as in the Proof of Lemma C.2). Inequality (iii) follows
directly from the definition of BδNT . Using similar arguments, we obtain that
sup
pβ ,Λ,ΓqPBδN T
A4, A5 À N T 2δ2
NT (C.26)
We establish the upper bounds of A6 and A7 by the boundedness condition:
sup
pβ ,Λ,ΓqPBδN T
A6 À N |T c
NT |2 À N 3T 2δ8
NT
sup
pβ ,Λ,ΓqPBδN T
A7 À T 2|Ic
NT | À NT 3δ4
NT
(C.27)
Thus, combining (C.20), (C.21), (C.22), (C.25), (C.26), and (C.27), we conclude that wpa1
sup
pβ ,Λ,ΓqPBδN T
}Hλβ1  ́ E0H0,λβ1 }2
F À maxtN T 2δ2
NT , NT 3δ4
NT , N2T δ4
NT , N3T 2δ8
NT u
À maxtN 4, T 4uδ4
NT
56

Based on similar arguments we also show that wpa1
sup
pβ ,Λ,ΓqPBδN T
}Hγβ1  ́ E0H0,γβ1 }2
F À maxtN 4, T 4uδ4
NT
Therefore, we conclude that
sup
pβ ,Λ,ΓqPBδN T
› › ›
 ́
Hλβ1  ́ E0Hr0,λβ1 Hγβ1  ́ E0Hr0,γβ1
 ̄› › ›
2
op {pN T q “ op
 ́
mint
?N , ?T u plogpN T qq4 ̄
(C.28)
“ oppmintN, T uq (C.29)
We complete the proof.
Lemma C.4 Under the conditions in Theorem A.3, the maximum singular value of S3 in (C.8) satisfies:
sup
pβ ,Λ,ΓqPBδN T
}S3}op “ oppmintN, T uq
Proof of Lemma C.4. Recall
S3 “
 ̃
Hrλλ1 Hλγ1
Hγλ1 Hrγγ1
 ̧
 ́
 ̃
E0Hr0,λλ1 E0Hr0,λγ1
E0Hr0,γλ1 E0Hr0,γγ1
 ̧
The operator norm of S3 is bounded by
}S3}op ď
› › › › ›
 ̃
Hrλλ1  ́ E0Hr0,λλ1 0
0
Hrγγ1  ́ E0Hrγγ1
 ̧› › › ›
›op
looooooooooooooooooooooooooomooooooooooooooooooooooooooon
A1
`
› › › › ›
 ̃
0 Hλγ1  ́ E0Hr0,λγ1
Hγλ1  ́ E0Hr0,γλ1 0
 ̧› › › ›
›op
loooooooooooooooooooooooooooomoooooooooooooooooooooooooooon
A2
Step 1 In this step, we aim to find the upper bound of A1. We focus on the maximum singular value
of Hrλλ1  ́ E0Hr0,λλ1 , and the singular values of Hrγγ1  ́ E0Hr0,γγ1 can be analyzed in the same way. Since
A1 has block diagonal structure, and for any i P Ic
NT , the i-diagonal R ˆ R block in Hrλλ1  ́ E0Hr0,λλ1 is a
zero matrix, it suffices to consider the i-diagonal R ˆ R block where i P INT . For any i P INT , we have
r
Hrλλ1  ́ E0Hr0,λλ1 si “
ÿ
tPTN T
 ́
p ́l:itqγtγ1
t  ́ E0p ́l:0
itqγG
0,t γ G1
0,t
 ̄
“ ́
ÿ
tPTN T
l:itγG
0,t∆1
γt  ́
ÿ
tPTN T
l:it∆γt γ1
t ́
ÿ
tPTN T
pl:it  ́ l:0
itqγG
0,t γ G1
0,t  ́
ÿ
tPTN T
pl:0
it  ́ Epl:0
itqqγG
0,t γ G1
0,t
57

thus,
sup
pβ ,Λ,ΓqPBδN T
}rHrλλ1  ́ E0Hr0,λλ1 si}op ď sup
pβ ,Λ,ΓqPBδN T
› › › › ›
ÿ
tPTN T
l:itγG
0,t∆1
γt
› › › ›
›
op
loooooooooooooooooooomoooooooooooooooooooon
Q1
` sup
pβ ,Λ,ΓqPBδN T
› › › › ›
ÿ
tPTN T
l:it∆γt γ1
t
› › › ›
›
op
looooooooooooooooooomooooooooooooooooooon
Q2
sup
pβ ,Λ,ΓqPBδN T
› › › › ›
ÿ
tPTN T
pl:it  ́ l:0
itqγG
0,t γ G1
0,t
› › › ›
›
op
loooooooooooooooooooooooomoooooooooooooooooooooooon
Q3
` sup
pβ ,Λ,ΓqPBδN T
› › › › ›
ÿ
tPTN T
pl:0
it  ́ Epl:0
itqqγG
0,t γ G1
0,t
› › › ›
›
op
looooooooooooooooooooooooooomooooooooooooooooooooooooooon
Q4
The upper bound of Q1 is obtained as follows:
Q1 ď sup
pβ ,Λ,ΓqPBδN T
› › › › ›
ÿ
tPTN T
l:itγG
0,t∆1
γt
› › › ›
›
F
(i)
ď
a
|TNT | sup
pβ ,Λ,ΓqPBδN T
 ̃ ÿ
tPTN T
› › ›
l:itγG
0,t∆1
γt
› › ›
2
F
 ̧1{2
ď
?T sup
pβ ,Λ,ΓqPBδN T
 ̃T ÿ
t“1
› › ›
l:itγG
0,t∆1
γt
› › ›
2
F
 ̧1{2
(ii)
À
?T sup
pβ ,Λ,ΓqPBδN T
}Γ  ́ ΓG
0 }F
(iii)
À T δNT
(C.30)
where inequality (i) applies the Cauchy-Schwarz inequality, inequality (ii) uses the assumption that
lit, γ0,t are uniformly bounded, and inequality (iii) follows directly from the definition of BδNT . The
upper bound of Q2 is obtained via the similar method:
Q2 ď sup
pβ ,Λ,ΓqPBδN T
› › › › ›
ÿ
tPTN T
l:it∆γt γ1
t
› › › ›
›
F
ď
a
|TNT | sup
pβ ,Λ,ΓqPBδN T
 ̃ ÿ
tPTN T
› › ›
l:it∆γt γ1
t
› › ›
2
F
 ̧1{2
ď
?T sup
pβ ,Λ,ΓqPBδN T
 ̃T ÿ
i“1
› › ›
l:it∆γt γ1
t
› › ›
2
F
 ̧1{2
(i)
À
?T sup
pβ ,Λ,ΓqPBδN T
}Γ  ́ ΓG
0 }F
À T δNT
(C.31)
where inequality (i) uses the assumption that lit, γt are uniformly bounded. We drive the bound of Q3
58

by:
Q3 ď sup
pβ ,Λ,ΓqPBδN T
› › › › ›
ÿ
tPTN T
pl:it  ́ l:0
itqγG
0,t γ G1
0,t
› › › ›
›
F
(i)
À sup
pβ ,Λ,ΓqPBδN T
ˇ ˇ ˇ ˇ ˇ
ÿ
tPTN T
 ̃∆Y  ̊
it
ˇ ˇ ˇ ˇ ˇ
À sup
pβ ,Λ,ΓqPBδN T
ÿ
tPTN T
|X 1
it∆β| ` sup
pβ ,Λ,ΓqPBδN T
ÿ
tPTN T
}λi}}γt  ́ γG
0,t} ` sup
pβ ,Λ,ΓqPBδN T
ÿ
tPTN T
}γ0,t}}λi  ́ λG
0,i}
À sup
pβ ,Λ,ΓqPBδN T
T
ÿ
t“1
|X 1
it∆β| ` sup
pβ ,Λ,ΓqPBδN T
T
ÿ
t“1
}λi}}γt  ́ γG
0,t} ` sup
pβ ,Λ,ΓqPBδN T
T
ÿ
t“1
}γ0,t}}λi  ́ λG
0,i}
ÀT sup
pβ ,Λ,ΓqPBδN T
}∆β}2 `
?T sup
pβ ,Λ,ΓqPBδN T
}Γ  ́ ΓG
0 }2
F ` T }λi  ́ λG
0,i}
ÀT δNT ` T 3{2δ2
NT `
?T
δN T
“oppmintN, T uq
(C.32)
Therefore, combining (C.30), (C.31), and (C.32), we have
sup
pβ ,Λ,ΓqPBδN T
}rHrλλ1  ́ E0Hr0,λλ1 si}op “ oppmintN, T uq (C.33)
By the same method we also prove that
sup
pβ ,Λ,ΓqPBδN T
}rHrγγ1  ́ E0Hr0,γγ1 si} “ oppmintN, T uq (C.34)
Therefore,
sup
pβ ,Λ,ΓqPBδN T
}A1}op “ oppmintN, T uq (C.35)
Step 2 In this step, we aim to bound the influence of A2. Let us focus on Hλγ1  ́ E0Hr0,λγ1 and consider
the expansion of its pi, tq-th block, l:itλiγt1  ́ E0pl:0
itqλG
0,iγ0G,t1 , when i P INT and t P TNT :
l:itλiγ1
t  ́ E0pl:0
itqλG
0,i γ G1
0,t “ l:itpλiγ1
t  ́ λG
0,i γ G1
0,tq
loooooooooomoooooooooon
H1,it
` pl:it  ́ l:0
itqλG
0,i γ G1
0,t
looooooooomooooooooon
H2,it
` pl:0
it  ́ Eφ0 pl:0
itqqλG
0,i γ G1
0,t
looooooooooooomooooooooooooon
H3,it
and for notational simplicity we collect the terms above into matrices H1, H2, H3 P RRNˆRT . Thus,
sup
pβ ,Λ,ΓqPBδN T
}Hλγ1  ́ E0Hr0,λγ1 }2
op
ď sup
pβ ,Λ,ΓqPBδN T
p}H1}2
F ` }H2}2
F ` }H3}2
opq ` sup
pβ ,Λ,ΓqPBδN T
 ̃N ÿ
i“1
ÿ
tPTN T
pl:itλiγ1
tq2 `
ÿ
iPIN T
T
ÿ
t“1
pl:itλiγ1
tq2
 ̧
(C.36)
59

We have wpa1
sup
pβ ,Λ,ΓqPBδN T
}H1}2
F
(i)
À sup
pβ ,Λ,ΓqPBδN T
ÿ
iPIN T
}λi}2 ÿ
tPTN T
}γt  ́ γG
0,t}2
` sup
pβ ,Λ,ΓqPBδN T
ÿ
tPTN T
}γG
0,i}2 ÿ iPIN T
}λi  ́ λG
0,i}2
ď sup
pβ ,Λ,ΓqPBδN T
N
ÿ
i“1
}λi}2
T
ÿ
t“1
}γt  ́ γG
0,t}2
` sup
pβ ,Λ,ΓqPBδN T
T
ÿ
t“1
}γG
0,t}2
N
ÿ
i“1
}λi  ́ λG
0,i}2
(ii)
À N sup
pβ ,Λ,ΓqPBδN T
}Γ  ́ ΓG
0 }2
F ` T sup
pβ ,Λ,ΓqPBδN T
}Λ  ́ ΛG
0 }2
F
ÀN T δ2
NT
(C.37)
and wpa1
sup
pβ ,Λ,ΓqPBδN T
}H2}2
F
(i)
À sup
pβ ,Λ,ΓqPBδN T
ÿ
iPIN T
ÿ
tPTN T
∆2
Y ̊
it
ď sup
pβ ,Λ,ΓqPBδN T
N
ÿ
i“1
T
ÿ
t“1
∆2
Y ̊
it
(ii)
À NT δ2
NT
(C.38)
In addition, based on the Lemma E.2, we show that with probability approaching to 1:
sup
pβ ,Λ,ΓqPBδN T
}H3}2
op À maxtN, T u logppN T qq2 À N T δ2
NT (C.39)
Finally,
sup
pβ ,Λ,ΓqPBδN T
 ̃N ÿ
i“1
ÿ
tPTN T
pl:itλiγ1
tq2 `
ÿ
iPIN T
T
ÿ
t“1
pl:itλiγ1
tq2
 ̧
(i)
ÀN |TNT | ` T |INT |
(ii)
À maxtN 3, T 3uδ4
NT “ oppmintN 2, T 2uq
(C.40)
Therefore, combining equations (C.37)— (C.40) we conclude that suppβ,Λ,ΓqPBδNT }A2}op “ oppmintN, T uq.
Therefore,
sup
pβ ,Λ,ΓqPBδN T
}S3}op “ oppmintN, T uq
Lemma C.5 Under the conditions in Theorem A.3, the maximum singular value of F in (C.8) satisfies:
sup
pβ ,Λ,ΓqPBδN T
}F }op “ oppmintN, T uq
Proof of Lemma C.5. Consider the expansion of pi, tq of l9it(since E0l90
it “ 0):
l9it “ pl9it  ́ l90
itq ` pl90
it  ́ El90
itq
60

and the corresponding matrix decomposition
F“
 ̃
0 F1,λγ1
F1,γλ1 0
 ̧
loooooooooomoooooooooon
F1
`
 ̃
0 F2,λγ1
F2,γλ1 0
 ̧
loooooooooomoooooooooon
F2
where
F1,λγ1 “
”
pl9it  ́ l90
itqIR
ı
i“1,2,...,N,t“1,2,...,T
F2,λγ1 “
”
pl90
it  ́ E0l90
itqIR
ı
i“1,2,...,N,t“1,2,...,T
The operator norm of F is bounded by
sup
pβ ,Λ,ΓqPBδN T
}F }op ď sup
pβ ,Λ,ΓqPBδN T
}F1}op ` sup
pβ ,Λ,ΓqPBδN T
}F2}op
We conclude that suppβ,Λ,ΓqPBδNT }F1}op “ oppmintN, T uq using the same argument in Lemma C.3 and
suppβ,Λ,ΓqPBδNT }F2}op “ opptN, T uq based on the Lemma E.2. Therefore,
sup
pβ ,Λ,ΓqPBδN T
}F }op “ oppmintN, T uq
Lemma C.6 Under the conditions in Theorem A.3, we have:
sup
pβ ,Λ,ΓqPBδN T
}V  ́ V0}op “ oppmaxtN, T uq
Proof of Lemma C.6. Recall that
Vλλ1 “ T
N
“λiλ1
i1
‰
i,i1“1,2,...,N ...
Vλγ1 “ “ ́λiγ1
t
‰
i“1,2,...,N,t“1,2,...,T
Vγγ1 “ N
T
“γtγ1
t1
‰
t,t1 “1,2,...,T
and
sup
pβ ,Λ,ΓqPBδN T
}V  ́ V0}op ď sup
pβ ,Λ,ΓqPBδN T
}V  ́ V0}F
ď sup
pβ ,Λ,ΓqPBδN T
}Vλλ1  ́ V0,λλ1 }F ` sup
pβ ,Λ,ΓqPBδN T
}Vγγ1  ́ V0,γγ1 }F
` 2 sup
pβ ,Λ,ΓqPBδN T
}Vλγ1  ́ V0,λγ1 }F
61

Then wpa1 we have:
sup
pβ ,Λ,ΓqPBδN T
}Vλλ1  ́ V0,λλ1 }2
F ďT2
N 2 sup
pβ ,Λ,ΓqPBδN T
N
ÿ
i“1
N
ÿ
i1 “1
›
›λiλ1
i1  ́ λG
i,0λG1
i1 ,0
› ›
2 F
(i)
À T2
N 2 sup
pβ ,Λ,ΓqPBδN T
N
ÿ
i“1
N
ÿ
i1 “1
`}λi1 }2}λi  ́ λG
0,i}2 ` }λG
0,i}2}λi1  ́ λG
0,i1 }2 ̆
(ii)
À T2
N sup
pβ ,Λ,ΓqPBδN T
}Λ  ́ ΛG
0 }2
F
ÀT 2δ2
NT
where inequality (i) employs Cauchy-Schwarz inequality, and inequality (ii) uses the uniform boundedness
of Λ and Λ0G. We prove that wpa1
sup
pβ ,Λ,ΓqPBδN T
}Vγγ1  ́ V0,γγ1 }2
F À N2δ2
NT
In addition, we have wpa1
sup
pβ ,Λ,ΓqPBδN T
}Vλγ1  ́ V0,λγ1 }2
F
(i)
À
N
ÿ
i“1
T
ÿ
t“1
`}λi}2}γt  ́ γG
0,t}2 ` }γG
0,t}2}λi  ́ λG
0,i}2 ̆
(ii)
À N sup
pβ ,Λ,ΓqPBδN T
}Γ  ́ ΓG
0 }2
F ` T sup
pβ ,Λ,ΓqPBδN T
}Λ  ́ ΛG
0 }2
F
ÀN T δ2
NT
where inequality (i) employs Cauchy-Schwarz inequality, and inequality (ii) uses the uniform boundedness
of Λ and Γ0G. Finally, we have wpa1
sup
pβ ,Λ,ΓqPBδN T
}V  ́ V0}op À maxtN, T uδNT “ oppmaxtN, T uq
and complete the proof.
C.2 Proof of Lemma A.5
Proof of Lemma A.5. Let PU p ̈q :“ P p ̈ | U q denote the probability conditional on U defined in
Assumption A.4, and let EU p ̈q :“ E p ̈ | Uq denote the expectation conditional on U. By (C.5), (C.6),
we have:
N T E0Hpβ0, ΛG
0 , ΓG
0 q “ EU E0H0 ` pE0H0  ́ EU E0H0q ` V0 ` pE0Vˆ  ́ V0q
In addition, by Lemma C.6, we have }E0Vˆ  ́ V0}op À supβ,Λ,ΓPδNT }V  ́ V0}op “ oppmaxtN, T uq. Thus, it
suffices to show that the minimum eigenvalue of EU EH0`V0 is strictly positive with order mintN, T u, and
the maximum singular of the perturbation pE0H0  ́ EU E0H0q is small enough compared to EU EH0 ` V0.
Step 1 In this step, we want to show that minimum eigenvalue of EU E0H0 ` V0 is strictly positive
with order mintN, T u. For any i, t, ∇2l0
it is the pdX ` RpN ` T qq-dimensional squared matrix where the
second derivatives are taken with respect to pβ, Λ, Γq. ∇2p ́l0
itq can be regarded as the sample Hessian
evaluated at the true parameters if we only have one observation pYit, Xitq. For notational simplicity, let
62

L0
it :“ EU E0pl0
itq. It is obvious that both ∇2p ́l0
itq and ∇2p ́L0
itq are positive semi-definite. Now let us
consider the shrinking version of the ∇2p ́L0
itq:
∇2p ́L0
itq “
 ̈
 ̊  ̋
?ν∇2
ββ1 p ́L0
itq ∇2
βλ1 p ́L0
itq ∇2
βγ1 p ́L0
itq ∇2
λβ1 p ́L0
itq ?ν∇2
λλ1 p ́L0
itq ?ν∇2
λγ1 p ́L0
itq ∇2
γβ1 p ́L0
itq ?ν∇2
γλ1 p ́L0
itq ?ν∇2
γγ1 p ́L0
itq
 ̨
‹ ‚
where ν is defined in Assumption A.4(ii). Since ?νEU pE0pl:0
itXitXi1tqq is positive semi-definite, then
?ν∇2
ββ1 p ́L0
itq is positive semi-definite as well. Thus, by Schur’s lemma, ∇2p ́L0
itq is positive semi
definte if its Schur complement ∇2p ́L0
it qz?ν ∇2
ββ1 p ́L0
itq is positive semi-definite. The latter statement
is true because:
 ̃
EU pE0p ́l:0
itqqγt,0γt1,0 EU pE0p ́l:0
itqqγt,0λ1i,0
EU pE0p ́l:0
itqqλi,0γt1,0 EU pE0p ́l:0
itqqλi,0λ1i,0
 ̧
 ́ EU pE0p ́l:0
itX 1
itqq
 ́?νEU pE0p ́l:0
it Xit X 1
itqq
 ̄ ́1
EU pE0p ́l:0
itXitqq
 ̃
γ0,tγ10,t γ0,tλ10,i
λ0,iγ10,t λ0,iλ10,i
 ̧
“
ˆ?νEU pE0p ́l:0
itqq  ́ EU pE0p ́l:0
itX 1
itqq
 ́?νEU pE0p ́l:0
it Xit X 1
itqq
 ̄ ́1
EU pE0p ́l:0
itXitqq
 ̇
 ̃
γ0,tγ10,t γ0,tλ10,i
λ0,iγ10,t λ0,iλ10,i
 ̧
ě0
where the last inequality comes from Assumption A.4(ii). Thus,
EU E0H0 “
N
ÿ
i“1
T
ÿ
t“1
∇2p ́L0
itq ě
N
ÿ
i“1
T
ÿ
t“1
∇2p ́L0
itq  ́
N
ÿ
i“1
T
ÿ
t“1
∇2p ́L0
itq
loooomoooon
ě0
“ p1  ́ ?νqEU E0
 ̈
 ̊  ̋
H0,ββ1 0 0
0 H0,λλ1 H0,λγ1
0 H0,γλ1 H0,γγ1
 ̨
‹ ‚
“ p1  ́ ?νqEU E0
 ̈
 ̊  ̋
H0,ββ1 0 0
0 00
0 00
 ̨
‹
‚` p1  ́ ?νqEU E0
 ̈
 ̊  ̋
00 0
0 H0,λλ1 H0,λγ1
0 H0,γλ1 H0,γγ1
 ̨
‹ ‚
Thus, using the similar argument in Lemma 2 from Chen, Fern ́andez-Val and Weidner (2021), there
exists constant c ą 0 independent of N, T such that:
p1  ́ ?νqEU E0
 ̈
 ̊  ̋
00 0
0 H0,λλ1 H0,λγ1
0 H0,γλ1 H0,γγ1
 ̨
‹
‚` V0 ě c
 ̈
 ̊  ̋
00 0
0 T IRN 0
0 0 N IRT
 ̨
‹ ‚
and
p1  ́ ?νqEU E0
 ̈
 ̊  ̋
H0,ββ1 0 0
0 00
0 00
 ̨
‹
‚ě c
 ̈
 ̊  ̋
N T IdX 0 0
0 00
0 00
 ̨
‹ ‚
63

Therefore, we must have
EU E0H0 ` V0 ě c
 ̈
 ̊  ̋
N T IdX 0 0
0 T IRN 0
0 0 N IRT
 ̨
‹ ‚
whose minimum eigenvalue is positive with order mintN, T u.
Step 2 In this step want to proof that the perturbation pEH0  ́ EU EH0q is small enough relative to
EU EH0 ` bV0. Note that
E0H0 ` bV0 “EU E0H0 ` bV0 ` pE0H0  ́ EU E0H0q
ěc
 ̈
 ̊  ̋
00 0
0 T IRN 0
0 0 N IRT
 ̨
‹
‚` c
2
 ̈
 ̊  ̋
N T IdX 0 0
0 00
0 00
 ̨
‹
‚` c
2
 ̈
 ̊  ̋
N T IdX 0 0
0 00
0 00
 ̨
‹ ‚
` pE0  ́ EU E0q
 ̈
 ̊  ̋
H0,ββ1 H0,βλ1 H0,βγ1
H0,λβ1 0 0
H0,γβ1 0 0
 ̨
‹
‚` pE  ́ EU E0q
 ̈
 ̊  ̋
00 0
0 H0,λλ1 H0,λγ1
0 H0,γλ1 H0,γγ1
 ̨
‹ ‚
“
 ̈
 ̊  ̋
c
2 N T IdX ` pE0  ́ EU E0qH0,ββ1 pE0  ́ EU E0qH0,βλ1 pE0  ́ EU E0qH0,βγ1
pE0  ́ EU E0qH0,λβ1 0 0
pE0  ́ EU E0qH0,γβ1 0 0
 ̨
‹ ‚
looooooooooooooooooooooooooooooooooooooooooooooooooooomooooooooooooooooooooooooooooooooooooooooooooooooooooon
A1
` pE0  ́ EU E0q
 ̈
 ̊  ̋
00 0
0 H0,λλ1 0
0 0 H0,γγ1
 ̨
‹ ‚
loooooooooooooooooooooomoooooooooooooooooooooon
A2
` pE0  ́ EU E0q
 ̈
 ̊  ̋
00 0
0 0 H0,λγ1
0 H0,γλ1 0
 ̨
‹ ‚
loooooooooooooooooooooomoooooooooooooooooooooon
A3
`c
 ̈
 ̊  ̋
NT
2 IdX 0 0
0 T IRN 0
0 0 N IRT
 ̨
‹ ‚
(C.41)
Here, we first study the eigenvalue values of A1. For the upper-left block of A, we establish a lower
bound for its minimum eigenvalue as follows:
σmin
ˆ1
2 N T IdX ` pE0  ́ EU E0qH0,ββ1
 ̇ (i)
Á N T ` Opp
?N T q Á N T
where inequality (i) follows from the fact that pE0  ́ EU E0qH0,ββ1 “ Opp
?N T q by Assumption A.4(i)
and Theorem 1 in Kanaya (2017). By the same argument, each element in pE0  ́ EU E0qHβλ1 is of order
Opp
?T q, and each element in pE0  ́ EU E0qHβγ1 is of order Opp
?N q. By applying the block version of
Gershgorin’s Circle Theorem, we conclude that every eigenvalue of A1 falls into one of two categories:
either it is positive and of order OppN T q, or it is of order Opp
?T q, Opp
?N q (with an unspecified sign).
Therefore, by the asymptotic assumption about N, T , the minimum eigenvalue of A1 must be of order
mint
?N , ?T u.
In addition, by Assumption A.4(i) and Theorem 1 from Kanaya (2017), each R-dimensional block
of pE0  ́ EU E0qH0,λλ1 must be of order Opp
?T q. Using the same argument we can also show that
each R-dimensional block of pE0  ́ EU E0qH0,γγ1 must be of order Opp
?N q. Since A2 has diagonal
block structure, the minimum eigenvalue of A2 must be of order oppmintN, T uq as well. To bound the
64

eigenvalues of A3, by Assumption A.4 and Lemma E.2, the maximum singular value of A3 must be of order
Opp
amaxtN, T u logpN T qq, and thus, the minimum eigenvalue of A3 must be of order oppmintN, T uq.
Combining the previous result Weyl’s theorem, and the asymptotic assumption about N, T , we conclude
that the minimum eigenvalue of E0H0 is
σminpE0H0q Á mintN, T u
Since HNT “ 1
NT H, it immediately follows that σminpE0H0q Á pmaxtN, T uq ́1.
D Proof in Section 4
Proof of Theorem 4. Recall
pβˆnuc, Θˆ nucq P argmin
βPRdX ,ΘPRNˆT
"
LNT pβ, Θq ` φNT
?N T }Θ}nuc
*
Let hNT pΘq “ φNT
?NT }Θ}nuc, and the proximal gradient operator can be defined as
proxsθhNT pΘ ̃ q “ argmin
Θ ̊
"
hNT pΘ ̃ q ` 1
2 }Θ ̃  ́ Θ}2
F
*
By Lemma D.1, we can show that for any feasible β1, Θ1, β2, Θ2 in optimization (3.1), there exist constant
Lβ, Lθ such that
LNT pβ2, Θ2q ďLNT pβ1, Θ1q ` ∇βLNT pβ1, Θ1q1pβ2  ́ β1q ` x∇θLNT pβ1, Θ1q, pΘ2  ́ Θ1qy
` Lβ
2 }β2  ́ β1}2 ` Lθ
2N T }Θ2  ́ Θ1}2
F
With the quadratic upper bound, we can employ the standard proof. Let Gsθ pβ, Θq “ 1
sθ pΘ ́proxsθhNT pΘ ́
sθ∇ΘLNT pβ, Θqqq and update the parameters via
 ̃
β2
Θ2
 ̧
“
 ̃
β1  ́ sβ∇βLNT pβ1, Θ1q
Θ1  ́ sθGsθ pβ1, Θ1q
 ̧
We can obtain
LNT pβ2, Θ2q ďLNT pβ1, Θ1q  ́ sβ}∇βLNT pβ1, Θ1q}2  ́ sθx∇θLNT pβ1, Θ1q, Gsθ pβ1, Θ1qy
`
Lβ s2
β
2 }∇βLNT pβ1, Θ1q}2 ` Lθs2
θ
2N T }Gsθ pβ1, Θ1q}2
F
When sβ ď 1
Lβ and sθ ď NT
Lθ , we have
LNT pβ2, Θ2q ďLNT pβ1, Θ1q  ́ sθx∇θLNT pβ1, Θ1q, Gsθ pβ1, Θ1qy
 ́ sβ
2 }∇βLNT pβ1, Θ1q}2 ` sθ
2 }Gsθ pβ1, Θ1q}2
F
Also, since LNT p ̈,  ̈q and hNT p ̈q are convex functions, we have
hNT pΘ2q ď hNT pΘ0q  ́ pGsθ pβ1, Θ1q  ́ ∇θLNT pβ1, Θ1qq1pΘ0  ́ Θ1 ` sθGsθ pβ1, Θ1qq
LNT pβ1, Θ1q ď LNT pβ0, Θ0q  ́ ∇βLNT pβ1, Θ1q1pβ0  ́ β1q  ́ x∇θLNT pβ1, Θ1q, pΘ0  ́ Θ1qy
65

Adding these three inequality yields:
LNT pβ2, Θ2q ` hNT pΘ2q ďLNT pβ0, Θ0q ` hNT pΘ0q
` ∇βLNT pβ1, Θ1q1pβ1  ́ β0q ` x∇θLNT pβ1, Θ1q, Θ1  ́ Θ0y
 ́ sβ
2 }∇βLNT pβ1, Θ1q}2  ́ sθ
2 }Gsθ pβ1, Θ1q}2
F
Therefore, denote ψpkq “ LNT pβpkq, Θpkqq ` hNT pΘpkqq, and ψ0 “ LNT pβ0, Θ0q ` hNT pΘ0q, we have
ψpk`1q  ́ ψ0 ď 1
2sβ
 ́
}βpkq  ́ β0}2  ́ }βpk`1q  ́ β0}2 ̄
`1
2sθ
 ́
}Θpkq  ́ Θ0}2
F  ́ }Θpk`1q  ́ Θ0}2
F
 ̄
and
ψpkq  ́ ψ0 ď 1
k
k
ÿ
i“0
pψpiq  ́ ψ0q ď 1
2ksβ
}βp0q  ́ β0}2 ` 1
2ksθ
}Θp0q  ́ Θ0}2
F
Thus, we can prove that when sβ ď 1
Lβ and sθ ď NT
Lθ , the optimization would converge to its global
minimum.
Lemma D.1 (Quadratic upperbound) For any feasible β1, Θ1, β2, Θ2 in optimization (3.1), we have
LNT pβ2, Θ2q ďLNT pβ1, Θ1q ` ∇βLNT pβ1, Θ1q1pβ2  ́ β1q ` x∇θLNT pβ1, Θ1q, pΘ2  ́ Θ1qy
` Lβ
2 }β2  ́ β1}2 ` Lθ
2N T }Θ2  ́ Θ1}2
F
with Lβ “ 4dX bmaxρ2
X and Lθ “ 4bmax
Proof of Lemma D.1. Note that
LNT pβ2, Θ2q “LNT pβ1, Θ1q ` ∇βLNT pβ1, Θ1q1pβ2  ́ β1q ` x∇θLNT pβ1, Θ1q, pΘ2  ́ Θ1qy
` pβ1
2  ́ β1
1, Θ1
2  ́ Θ1
1q∇2LNT pβ ̃,  ̃Θqpβ1
2  ́ β1
1, Θ1
2  ́ Θ1
1q1
where
∇2LNT pβ, Θq “
 ̃
Hββ1 Hβθ1
Hθβ1 Hθθ1
 ̧
ě0
and
Hββ1 “  ́ 1
NT
N
ÿ
i“1
T
ÿ
t“1
Xit l:it X 1
it
Hβθ1 “  ́ 1
NT
”
Xitl:it
ı
i“1,...,N,t“1,...,T
Hθθ1 “  ́ 1
N T diag
!
l:it
)
i“1,...,N,t“1,...,T
It is easy to check that
 ̃
2Hββ1 0
0 2Hθθ1
 ̧
 ́
 ̃
Hββ1 Hβθ1
Hθβ1 Hθθ1
 ̧
“
 ̃
Hββ1  ́Hβθ1
 ́Hθβ1 Hθθ1
 ̧
ě0
The last inequality holds because (1) ∇2LNT pβ, Θq ě 0 and (2) flipping the sign of off-diagonal part of
66

the matrix does not change the eigenvalues of the matrix. Therefore,
 ̃
β2  ́ β1
Θ2  ́ Θ1
 ̧1
∇2LNT pβ ̃, Θ ̃ q
 ̃
β2  ́ β1
Θ2  ́ Θ1
 ̧
ď 2σmaxpHββ1 q}β2  ́ β1}2 ` 2σmaxpHθθ1 q}Θ2  ́ Θ1}2
F
Since σmaxpHββ1 q ď dX bmaxρ2
X and σmaxpHθθ1 q ď bmax
NT , we can complete the proof.
Proof of Theorem 5. The proof consists of two steps. In the first step, we show that if we start
with pβp0q, Λp0q, Γp0qq “ pβˆnuc, Λˆ nuc, , ˆΓnucq P BδNT , then, under properly chosen step sizes psβ, sλ, sΓq,
the updated estimators pβp1q, Λp1q, Γp1qq will also remain in neighborhood BδNT . In the second step, we
establish a local quadratic upper bound for the optimization problem (3.4) to show that the sequence of
updated estimators will always remain within the neighborhood BδNT . Moreover, after each update, the
updated estimate will be closer to the FE estimator than the one in the previous step.
Step 1 First, note that when evaluated at pΛp0q, Γp0qq, we have:
∇λ} ˆΛ1
nucΛ  ́ Γ1Γˆnuc}2
F “ 0, ∇γ }Λˆ 1
nucΛ  ́ Γ1Γˆnuc}2
F“0
then
βp1q “βp0q  ́ sβ ∇β LNT pβp0q, Λp0q, Γp0qq
Λp1q “Λp0q  ́ sλ∇λLNT pβp0q, Λp0q, Γp0qq
Γp1q “Γp0q  ́ sγ ∇γ LNT pβp0q, Λp0q, Γp0qq
We have the following inequality when sβ À 1:
}βp1q  ́ βp0q} “ sβ
NT
› › › › ›
N
ÿ
i“1
T
ÿ
t“1
l9itpβp0qXit ` λp0q1
i γp0q
t qXit
› › › › ›
(i)
ď sβ
NT
› › › › ›
N
ÿ
i“1
T
ÿ
t“1
l:0
itXit
› › › › ›
` sβ
NT
› › › › ›
N
ÿ
i“1
T
ÿ
t“1
l: ̃itpβp0q  ́ β0q1XitXit
› › › › ›
` sβ
NT
› › › › ›
N
ÿ
i“1
T
ÿ
t“1
l ̃:itλp0q1
i pγG
0,t  ́ γp0q
t qXit
› › › › ›
` sβ
NT
› › › › ›
N
ÿ
i“1
T
ÿ
t“1
l ̃:itγp0q1
t pλG
0,i  ́ λp0q
i qXit
› › › › ›
where inequality (i) follows from the Taylor expansion and triangular inequality. Here, l ̃:it is an abbre
viation for l:itpβ ̃1Xit ` λ ̃iγ ̃tq, where pβ ̃,  ̃Λ, Γ ̃q lies between pβp0q, Λp0q, Γp0qq and pβ0, Λ0, Γ0q. In addition,
it is easy to verify that We can establish the upper bound the preceding four terms using the similar
argument in the proof of Theorem A.3. Combining moment condition EZ,Λ0,Γ0 pl90
itXitq “ 0, sampling
assumption (Assumption A.1(i)), and Theorem 1 in Kanaya (2017) yields
sβ NT
› › › › ›
N
ÿ
i“1
T
ÿ
t“1
l:0
itXit
› › › › ›
“ Op
ˆ logpN T q
?N T
 ̇
67

Since tXitu1ďiďN,1ďtďT , pβ ̃,  ̃Λ, Γ ̃q, pβp0q, Λp0q, Γp0qq, and pβ0, Λ0, Γ0q are uniformly bounded, we obtain
wpa1:
sβ NT
› › › › ›
N
ÿ
i“1
T
ÿ
t“1
l ̃:itpβp0q  ́ β0q1XitXit
› › › › ›
À }βp0q  ́ β0} (“i) oppδNT q
sβ NT
› › › › ›
N
ÿ
i“1
T
ÿ
t“1
l ̃:itλp0q1
i pγG
0,t  ́ γp0q
t qXit
› › › › ›
À ?1T }Γp0q  ́ ΓG
0 }F
(i“i) oppδNT q
sβ NT
› › › › ›
N
ÿ
i“1
T
ÿ
t“1
l: ̃itγp0q1
t pλG
0,i  ́ λp0q
i qXit
› › › › ›
À ?1N }Λp0q  ́ ΛG
0 }F
(ii“i) oppδNT q
By the Similar method we can prove that with βλ where equality (i) (ii) and (iii) comes from Theorem A.1.
Therefore, we have wpa1:
}βp1q  ́ βp0q} “ oppδNT q (D.1)
In addition, with sλ „ N :
}Λp1q  ́ Λp0q}2
FÀ 1
T2
N
ÿ
i“1
› › › › ›
T
ÿ
t“1
l9itpβ0Xit ` λGp0q1
i γGp0q
t qγp0q
t
› › › › ›
2
(i)
ď1
T2
N
ÿ
i“1
› › › › ›
T
ÿ
t“1
l:0
itγ0,t
› › › › ›
2
`1
T2
N
ÿ
i“1
› › › › ›
T
ÿ
t“1
l:0
itpγ0,t  ́ γp0q
tq
› › › › ›
2
`1
T2
N
ÿ
i“1
› › › › ›
T
ÿ
t“1
l ̃:itpβp0q  ́ β0q1Xitγp0q
t
› › › › ›
2
`1
T2
N
ÿ
i“1
› › › › ›
T
ÿ
t“1
l ̃:itλp0q1
i pγG
0,t  ́ γp0q
t qγp0q
t
› › › › ›
2
`1
T2
N
ÿ
i“1
› › › › ›
T
ÿ
t“1
l: ̃itγp0q1
t pλG
0,i  ́ λp0q
i qγp0q
t
› › › › ›
2
where inequality (i) follows from the Taylor expansion and triangular inequality. By the same argument,
we establish the following inequality:
1 T2
N
ÿ
i“1
› › › › ›
T
ÿ
t“1
l:0
itγ0,t
› › › › ›
2
(i“) Op
ˆ N logpT q2 T
 ̇
“ oppN δ2
NT q
1 T2
N
ÿ
i“1
› › › › ›
T
ÿ
t“1
l:0
itpγ0,t  ́ γp0q
tq
› › › › ›
2
ÀN
T }Γp0q  ́ ΓG
0 }2
F
(i“i) oppN δ2
NT q
1 T2
N
ÿ
i“1
› › › › ›
T
ÿ
t“1
l: ̃itpβp0q  ́ β0q1Xitγp0q
t
› › › › ›
2
À N }βp0q  ́ β0}2
F
(ii“i) oppN δ2
NT q
1 T2
N
ÿ
i“1
› › › › ›
T
ÿ
t“1
l ̃:itλp0q1
i pγG
0,t  ́ γp0q
t qγp0q
t
› › › › ›
2
ÀN
T }Γp0q  ́ ΓG
0 }2
F
(i“v) oppN δ2
NT q
1 T2
N
ÿ
i“1
› › › › ›
T
ÿ
t“1
l: ̃itγp0q1
t pλG
0,i  ́ λp0q
i qγp0q
t
› › › › ›
2
À }Λp0q  ́ ΛG
0 }2
F
(v“) oppN δ2
NT q
where inequality (i) comes from the sampling assumption (Assumption A.1(i)), and Theorem 1 in Kanaya
(2017), inequalities (ii)—(v) are from Theorem A.1. Therefore, we obtain:
?1N }Λp1q  ́ Λp0q} “ oppδNT q (D.2)
68

Using the same method, we can also obtain:
?1T }Γp1q  ́ Γp0q} “ oppδNT q (D.3)
Combining equations (D.1), (D.2), and (D.3), we can show that if we start with pβp0q, Λp0q, Γp0qq “
pβˆnuc, ˆΛnuc, , Γˆnucq P BδNT , then, under properly chosen step sizes psβ, sλ, sΓq as in Theorem 5, the
updated estimators pβp1q, Λp1q, Γp1qq will also remain in neighborhood BδNT .
Step 2 By Theorem A.3, the optimization is strongly convex, after each update, the updated estimate
will be closer to the FE estimator (up to orthogonal transformation) than the one in the previous step.
Since we have established in the first step that pβp1q, Λp1q, Γp1qq P B∆NT ( since for each i, t, the gradients
of } ˆΛ1nucΛ  ́ Γ1 ˆΓnuc}2
F with respect to λi, γt are asymptotically negligible compared to the gradients
of the log-likelihood function, we can ignore the influence of the gradients of } ˆΛ1nucΛ  ́ Γ1Γˆnuc}2
F and
directly employ Algorithm 2), the whole sequence of estimators will never jump out of the neighborhood.
Therefore, we complete the proof.
E Technical Lemmas
Lemma E.1 Suppose Xit is dX -dimensional independent random variable bounded by ρX ą 0, and εit
is an i.i.d. Rademacher process. Then
E}
N
ÿ
i“1
T
ÿ
t“1
X1
itεit}2 ď D1
?N T
where D1 “
a8πd3
X ρ2
X
Proof. Consider d-th dimension of the random vector, Xit,dεit. Since Xit,d is uniformly bounded by
ρX , Xit,dεit is i.i.d. sub-Gaussian random variable with mean zero and parameter ρX . We obtain the
Hoeffding bound:
P
 ̃
|
N
ÿ
i“1
T
ÿ
t“1
Xit,dεit| ě δ
 ̧
ď 2e ́ δ2
2N T ρ2
X
For the concentration inequality for the sum of random vectors, let X ̄d denote X ̄d “ řN
i“1
řT
t“1 Xit,dεit,
69

we have
#
}
N
ÿ
i“1
T
ÿ
t“1
Xitεit}2 ě δ
+
Ă
dX
ď
d“1
t|Xd  ́ EXd| ě ?δdX
u
#
}
N
ÿ
i“1
T
ÿ
t“1
Xitεit}2 ě δ
+
Ă
dX
ď
d“1
t|Xd  ́ EXd| ě ?δdX
u
ñP
 ̃
}
N
ÿ
i“1
T
ÿ
t“1
Xitεit}2 ě δ
 ̧
ďP
 ̃ dX
ď
d“1
t|Xd  ́ EXd| ě ?δdX
u
 ̧
ď
dX
ď
d“1
P
ˆ
|Xd  ́ EXd| ě ?δdX
 ̇
ď 2dX exp
"
 ́ δ2
2N T dX ρ2
X
*
Therefore,
E}
N
ÿ
i“1
T
ÿ
t“1
Xitεit}2 “
ż8
0
Pp}
N
ÿ
i“1
T
ÿ
t“1
Xitεit}2 ě δqdδ ď
ż8
0
2dX e ́ δ2
2N T dX ρ2
X dδ “ D1
?N T
where D1 “
a8πd3
X ρ2
X.
Lemma E.2 Consider a random matrix Z with dimensions N ˆ T and uniformly bounded entries.
Assume that each row of Z is independent. In addition, for each row i, tZitu1ďtďT is α-mixing with
mixing coefficient αipτ q Ñ 0 as τ Ñ 8, where
αipτ q “ sup
t
sup
APAi
t ,B PBi
t`τ
|PpA X Bq  ́ PpAqPpBq|
where Ait is the sigma-field generated by t. . . , Zi,t ́1, Zi,t, u, and Bti`τ is the sigma-field generated by
tZi,t`τ , Zi,t`τ`1, . . .u. For mixing coefficients αipτ q, i “ 1, 2, . . . , N , we further assume that they exhibit
uniformly polynomial decay rate: there exists β ą 2 and C ą 0 such that sup1ďiďN αipτ q ď Cτ  ́β. Then
we have
}Z}op À
amaxtN, T u logpN ` T q, wpa1
Proof of Lemma E.2. We will employ Bernstein’s bound of the sum of rectangular matrices (proved
in Tropp (2012)), as stated below:
Theorem E.3 (Rectangular matrix Bernstein bound) Consider a finite sequence tZku of inde
pendent, random matrices with dimensions N ˆ T , Assume that each random matrix satisfies:
EZk “ 0, }Zk}op ď D
Define σ2 “ max
!
}
ř
k EpZkZ1kq}op , }ř
k EpZ1kZkq}op
)
. Then for all δ ą 0, we have
P
 ̃
}
ÿ
k
Zk}op ě δ
 ̧
ď pN ` T q exp
"
 ́  ́δ2
2σ2 ` 2
3 Dδ
*
To apply Theorem E.3, let the matrix Zi denote the N ˆ T matrix where the i-th row of Zi is the
same as the i-th row of Z, and all other rows are zero. Since the entry of Z is uniformly bounded, there
70

exists a constant a1 ą 0 irrelevant with N, T such that
}Zi}op ď a1
?T ď a1
amaxtN, T u, @i “ 1, 2, . . . , N (E.1)
In addition, it is straightforward to see that řN
i“1 EpZiZi1q has diagonal structure, thus, there exists a
constant a2 ą 0 irrelevant with d1, d2 such that
}
ÿ
k
EpZk Z 1
kq}op ď a2T (E.2)
To bound the term
› › ›
řN
i“1 EpZi1Ziq
› ›
›op
, observe that
EpZ 1
iZiq “
 ̈
 ̊  ̊  ̊  ̊  ̋
γip1, 0q γip1, 1q . . . γip1, T q
γip2, 1q γip2, 0q . . . γip1, T  ́ 1q
... ... . . . ...
γipT, T  ́ 1q γipT, T  ́ 2q . . . γipT, 0q
 ̨
‹ ‹ ‹ ‹ ‚
where γipt, τ q “ CovpZi,t, Zi,t`τ q for any 1 ď t ď T  ́ 1. By Gershgorin circle theorem (or block
Gershgorin circle theorem), we can show that }EpZi1Ziq}op is uniformly bounded by a constant a3 because
}EpZ 1
i Zi q}op
(i)
ď max
1ďtďT
$
&
%
γipt, 0q ` 2
mintt,T  ́tu
ÿ
τ “1
|γipt, τ q| `
maxtt,T  ́tu
ÿ
τ “mintt,T  ́tu`1
|γipt, τ q|
,
.

ď max
1ďtďT
#
γipt, 0q ` 2
T
ÿ
τ “1
|γipt, τ q|
+
In addition, since the sequence is α-mixing with uniformly polynomial decay rate sup1ďiďN αipτ q ď
Cτ  ́β, we have (see Fan and Yao (2008))
|γipt, τ q| ď 4ρ2
Z αipτ q
1
2 “ 4ρ2
ZC 1
2 τ ́β
2
where ρZ ą 0 is a constant irrelevant with N, T such that |Zit| ď ρZ for all i, t, N, T . Therefore, we can
further obtain that
}EpZ 1
iZiq}op ď max
1ďtďT γipt, 0q `
T
ÿ
τ “1
8ρ2
ZC 1
2 τ ́β
2 ď max
1ďtďT γipt, 0q ` 8ρ2
ZC 1
2
8
ÿ
τ “1
τ ́β
2 (E.3)
It is easy to check that max1ďtďT γipt, 0q ď 4ρ2
Z , and ř8
τ “1 τ  ́ β
2 ă 8 as β ą 2. Therefore, there exists a
constant c3 such that }EpZi1Ziq}op ď c3, and in addition, max1ďiďN }EpZi1Ziq}op ď c3. Thus, there exists
a constant ad such that:
}
N
ÿ
i“1
EpZ 1
iZiq}op ď
N
ÿ
i
}
N
ÿ
i“1
EpZ 1
iZiq}op ď a3N
Moreover, let a4 “ 2 maxta2, a3u and combine (E.2) and (E.3), we have
σ2 “ maxt}
ÿ
i
EpZi Z 1
iq}op, }
ÿ
k
EpZ 1
iZiq}opu ď a4 maxtd1, d2u (E.4)
Finally, since each row of tZiuqďiďN is independent and Z “ řd1
k“1 Z ̄k, we employ the rectangular
71

matrix Bernstein bound (Theorem E.3), inequality (E.3), and inequality (E.4) to conclude that
P
 ́
}Z}op ě δ
 ̄
ď 2 maxtN, T u exp
#
 ́ δ2
2a4 maxtN, T u ` 2
3 a1
amaxtN, T uδ
+
Let δ “ maxt4?a4, 4
b
2
3 a1u
amaxtN, T u logpN ` T q, since
P
 ́
}Z}op ě δ
 ̄
ď 2 maxtN, T u exp t ́2 logpN ` T qu ď 2 exp t ́ logpN ` T qu Ñ 0
we can show that }Z}op À
amaxtN, T u logpN ` T q with probability approaching to 1.
Lemma E.4 For any block matrix M P Rpn`mqˆpn`mq
M“
 ̃
AB
B1 0
 ̧
where A P Rnˆn is a positive definite matrix, B P Rnˆm, we want to prove that
σminpM q ě 1
2
ˆ
σminpAq  ́
b
σ2
minpAq ` s2maxpBq
 ̇
(E.5)
where σp ̈q denotes the eigenvalue and sp ̈q denotes the singular value.
Proof of Lemma E.4. When B “ 0, the inequality (E.5) is directly verified since σminpM q “ 0.
For B ‰ 0, M must admit negative eigenvalues, and we denote it as ς ă 0. Suppose the corresponding
eigenvector of ς is px1, y1q1, by the definition of eigenvalue, we have
M px1, y1q1 “ ςpx1, y1q1 ñ
#
Ax ` By “ ςx
B1x “ ςy
Replacing y “ ς ́1B1x into Ax ` By “ ςx yields (since ς ‰ 0):
ς2x1x  ́ ςx1Ax  ́ x1BB1x “ 0 ñ ς “ 1
2
 ̈
 ̋
x1Ax
x1x  ́
d
ˆ x1Ax x1x
 ̇2
` 4 x1BB1x
x1x
 ̨
‚
we drop the positive solution of ς by only considering the case ς ă 0. It is straightforward to check that
ς is an increasing function of x1Ax
x1x and a decreasing function of x1BB1x
x1x . Since
x1Ax
x1x ě mxin
x1Ax
x1x “ σminpAq, x1BB1x
x1x ď mxax
x1BB1x
x1x “ s2
maxpBq
we conclude that
σminpM q ě 1
2
ˆ
σminpAq  ́
b
σ2
minpAq ` s2maxpBq
 ̇
Lemma E.5 For any block matrix A “ rA1, A2s, where A1 P Rnˆm1 , A2 P Rnˆm2 , we have srpAq ě
srpA1q, for r “ 1, . . . , mintn, m1 ` m2u. Thus, }A}nuc ě }A1}nuc.
72

Proof of Lemma E.5. For the largest singular value, let u “ pu11, u12q1, where u1 P Rm1 , u2 P Rm2
s1pA1q “ max
}u1}2“1 }A1u1}2 “ max
}u1}2“1,}u2}2“0 }Au}2 ď max
}u}2“1 }Au}2 “ s1pAq
For the second singular value, let u ̃ “ pu ̃11, u ̃2q1 be the right singular vector of A, and consider the
variational representation of singular values:
s2pA1q “ min
dimpV q“1
max
u1PV K }A1u1}2
(i)
ď max
}u1}“1,xu1,u ̃1y“0 }A1u1}2 ď max
}u}“1,xu,u ̃y“0 }Au}2 “ s2pAq
where inequality (i) follows when V “ spantu ̃1u. We can extend the proof to show that for any r “
1, . . . , mintn, m1 ` m2u, srpAq ě srpA1q, and thus, }A}nuc ě }A1}nuc.
73

---

## Processing Information

- **Processing Library:** Zotero PDFWorker
- **Processing Date:** 2026-02-10T18:14:38.394Z
- **Text Length:** 176742 characters
- **Success:** Text extraction completed
- **PDF Library Used:** Zotero PDFWorker
- **Pages Processed:** 74 of 74
