# PDF Document: Khismatullina and Sluis - 2025 - Multiscale Comparison of Nonparametric Trending Coefficients.pdf

**File Path:** Khismatullina and Sluis - 2025 - Multiscale Comparison of Nonparametric Trending Coefficients.pdf

**Processed Date:** 2026-02-10T18:15:14.614Z

**File Size:** 686.97 KB

**Total Pages:** 43

**Extracted Pages:** 43

**PDF Library:** Zotero PDFWorker

**Attachment Item ID:** 3158

**Title:** Multiscale Comparison of Nonparametric Trending Coefficients

**Collection:** Large Files > Random Papers

---

## Extracted Text Content

Multiscale Comparison
of Nonparametric Trending Coefficients
Marina Khismatullina∗ Bernhard van der Sluis†
November 18, 2025
Abstract
This paper proposes a novel framework to test for slope heterogeneity between
time-varying coefficients in panel data models. Our test not only allows us to de
tect whether the coefficient functions are the same across all units or not, but also
determines which of them are different and where these differences are located.
We establish the asymptotic validity of our multiscale test. As an extension of
the proposed procedure, we show how to use the results to uncover latent group
structures in the model. We apply our methods to test for heterogeneity in the
effect of U.S. monetary shocks on 49 foreign economies and itself. We find evi
dence that such heterogeneity indeed exists and we discuss the clustering results
for two groups.
Keywords: panel data, nonparametric regression, multiscale statistics, strong ap
proximation.
JEL Classification: C12, C14, C23, C38
∗E-mail: khismatullina@ese.eur.nl. Erasmus School of Economics, Erasmus University Rotterdam †E-mail: vandersluis@ese.eur.nl. Erasmus School of Economics, Erasmus University Rotterdam
1
arXiv:2511.12600v1 [econ.EM] 16 Nov 2025

1 Introduction
The use of panel data is a fundamental tool in empirical research across various dis
ciplines, including economics, finance, and climatology. The double-index structure of
panel data allows researchers to capture both cross-sectional heterogeneity and time dy
namics, making it indispensable for analyzing complex systems. However, the majority
of panel data models assume time-invariant and/or common coefficients, assumptions
that are often unrealistic in practical applications. Structural changes, policy inter
ventions, and macroeconomic shocks frequently induce time variation in coefficients,
and failure to capture such variation can lead to misleading conclusions. Similarly,
cross-sectional units may respond differently to covariates. For instance, in finance, the
sensitivity of asset returns to market return is often assumed to fluctuate over time
(Chen, 1982; Jagannathan and Wang, 1996; Lewellen and Nagel, 2006). Moreover, in
vestors are interested in the different risk exposures across assets for the same predictors
(Fama and MacBeth, 1973; Adrian and Franzoni, 2009). In environmental research, the
impact of climatic factors varies across regions and time (Lobell et al., 2014; Keane and
Neal, 2020). These examples highlight the importance of developing statistical tools to
analyze heterogeneous time-varying coefficients in panel data.
In this paper, we propose a new multiscale test that allows us to assess heterogeneity
in time-varying regression coefficients in panel data models. Unlike traditional global
hypothesis tests, which provide no insight into localized differences, our method offers
a more detailed analysis by detecting both the presence of coefficient heterogeneity
and its specific locations and time intervals. This level of detail makes the test par
ticularly useful in practical applications, where understanding the specific structure of
heterogeneity is crucial for policy making, risk management, and forecasting.
While several methods have been developed to allow for time-varying coefficients in
panel data, they typically focus on global tests that do not identify where or when dif
ferences arise. Currently there exists limited theoretical guidance on (i) testing whether
time-varying coefficients are all the same across units, and (ii) identifying specific time
periods and units where coefficients differ. Existing methods, such as those proposed
by Atak et al. (2025), allow researchers to test for global slope homogeneity, but do not
provide localized information where these differences occur. However, simply detecting
heterogeneity is often insufficient: practitioners need to understand which time periods
and which groups of units drive these differences. Our proposed approach addresses
this gap directly.
The main theoretical contribution of this paper is establishing that under mild regular
ity conditions, the proposed multiscale test accounts for the multiple testing problem
inherent in this setting by controlling the family-wise error rate. Building on the strong
approximation results for random vectors developed in Karmakar and Wu (2020), this
result ensures the validity of simultaneous confidence statements about localized differ
2

ences in trending coefficients. This extends previous work on the comparison of non
parametric time trends by Khismatullina and Vogt (2022, 2023) to the time-varying
coefficient models.
This paper contributes to several strands of literature. First, the assumption of homo
geneity of slope coefficients, whether they are assumed to be time-varying or not, is
crucial for valid inference. If the coefficients are truly homogeneous and the individual
heterogeneity is captured by fixed effects, cross-sectional data can be pooled to esti
mate coefficients more efficiently. However, if heterogeneity exists in the coefficients,
cross-sectional averaging results in misleading inference (Hsiao and Tahmiscioglu, 1997;
Baltagi et al., 2008; Wang et al., 2019). Several methods have been developed to address
this issue, both for testing for homogeneity in panel data models with constant slope
(Pesaran and Yamagata, 2008; Gao et al., 2020; Su and Chen, 2013; Ando and Bai,
2015) and with time-varying coefficients (Atak et al., 2025). However, as mentioned
before, these approaches were developed for testing a global null hypothesis that states
that the coefficients are the same for all units at all times, whereas our method pro
vides additional information in case of slope heterogeneity. Specifically, by considering
a multitude of localized null hypotheses instead of one global null, we are able to say
when and where this heterogeneity exactly occurs.
Second, we extend prior work on multiscale testing to a panel data setting with time
trending coefficients. Multiscale tests were developed for various models and null hy
potheses. For example, Khismatullina and Vogt (2020) propose a new multiscale ap
proach to test for monotonicity of deterministic trend functions in a single nonparamet
ric regression. This framework was later extended to multiple time series by Khismat
ullina and Vogt (2022) and Khismatullina and Vogt (2023), where the authors devise
procedures to test for homogeneity of trend functions under different assumptions. In
this paper, we build upon the theoretical work in the above studies to consider time
varying coefficient functions. Similarly as before, the objects of interest are functions
of time that are estimated nonparametrically and compared on a wide range of scales,
i.e., using various bandwidths. This is the essence of a multiscale approach, and this
approach allows us to provide information on top of simply rejecting the null hypothesis
of a global slope homogeneity.
Furthermore, in our paper, we propose a clustering algorithm that identifies groups
of units exhibiting similar time trends. Specifically, in case of detected heterogene
ity among the coefficient functions, it is still possible to allow for grouped patterns
of heterogeneity that can be a result of similar underlying characteristics across units.
Several approaches exist to identify the unobserved group structure. In the seminal
paper of Bonhomme and Manresa (2015), a k-means algorithm is used to cluster the
individual observations in a linear panel data model with group-specific fixed effects.
This framework has been extended to time-varying slope coefficients, but the exten
sions are mostly limited to structural breaks (Okui and Wang, 2021; Lumsdaine et al.,
3

2023). Alternatively, Su et al. (2016) propose a classifier-Lasso simultaneous estima
tor of heterogeneous coefficients and group membership in linear and non-linear panel
data models and Su et al. (2019) use the classifier-Lasso in a panel data model with
group-specific time-varying coefficients. Their approach requires a sieve approximation
of the time-varying coefficients together with a penalized least-squares objective func
tion. Recently, this work has been extended by Haimerl et al. (2025) who instead of the
classifier-Lasso use a pairwise adaptive group fused-Lasso to uncover a hidden group
structure. In contrast, our estimator of the time-varying coefficients has a closed-form
solution, the multiscale test statistics are easy to compute, and the clustering procedure
is a straightforward application of an easy-to-track hierarchical agglomerative cluster
ing algorithm. The most similar approach to ours was taken in Chen (2019) where
the latent group structure in heterogeneous time-varying-coefficient panels is recovered
via kernel estimation, hierarchical agglomerative clustering, and a generalized informa
tion criterion for the number of groups. In contrast to imposing group structure ex
ante and estimating it directly as in Chen (2019), our framework treats grouping as a
downstream step: test-implied dissimilarities feed into HAC clustering, yielding both a
global decision on homogeneity and time-resolved evidence of heterogeneity.
The remainder of the paper is organized as follows. Section 2 introduces the model.
Section 3 presents our multiscale testing procedure, and Section 4 establishes its theo
retical properties. In Section 5, we discuss how our method can be extended to perform
clustering and uncover unknown group structure in the data. In Section 6, we apply
our methods to an empirical dataset revisiting the relationship between U.S. monetary
shock and 49 foreign economies and U.S. GDP from Iacoviello and Navarro (2019).
Section 7 concludes. Additional proofs and supplementary results are provided in Ap
pendix.
Finally, some words on notation. For a vector v = (v1, . . . , vD) ∈ RD, we write
||v|| = PD
i=1 v2
i
1/2
and ||v||∞ = max{|v1|, |v2|, . . . , |vD|} to denote its Euclidean and
maximum (l∞) norm, respectively. Similarly, for a random vector V, we denote its Lq
norm for q > 0 as ||V||Lq = (E||V||q)1/q (i.e., we always use the Euclidean base-norm).
For a D × D square matrix A = (ad1,d2)1≤d1,d2≤D we denote induced norms ||A|| and
||A||1 as ||A|| = sup
n ||Ax||
||x|| : x ∈ RD, x ̸= 0
o
and ||A||1 = maxd2=1,...,D
PD
d1=1 |ad1,d2 |,
respectively. If A is positive semi-definite with eigenvalues λ1 ≥ . . . ≥ λD, we write
ρ⋆(A) = λD. For a set S, we denote its cardinality as |S|. For a scalar x, we denote
the greatest integer that is less or equal to x by ⌊x⌋. Throughout the paper, C denotes
a universal constant that may take different values on different lines.
Furthermore, we introduce a general class of potentially nonlinear time series that can be
defined as follows. Let ηt for t ∈ Z be i.i.d. random variables. Define Ft = (. . . , ηt−1, ηt)
and let g : R∞ → RD be a measurable function such that the random vector g(Ft) is
well-defined. Following Wu (2005) and later Karmakar and Wu (2020), we define the
4

physical dependence measure of the process g as
δq(g, t) = ||g(Ft) − g(F ′
t)||Lq , (1)
where F ′
t = (. . . , η−1, η′
0, η1, . . . , ηt−1, ηt) with η′
0 being an i.i.d. copy of η0. The quantity
δq(g, t) measures the t-th lag dependence of the process g in terms of q-th moment. For
a detailed explanation of the physical dependence measure and its properties, we refer
the reader to Wu (2005).
2 The model framework
In this section, we specify the model we consider in our paper and describe the prelim
inary step that are needed before constructing the test statistics.
2.1 The model
Suppose that we observe a panel of N time series Ti = {(Yit, X′
t) : t = 1, . . . , T }, of
length T where the responses Yit are real-valued random variables and the predictors
Xt = (Xt,1, . . . , Xt,D)′ ∈ X ⊂ RD are random vectors of covariates common for all time
series (which holds, for instance, in factor models). For the moment, we suppose that
the set X is compact and T → ∞, while N and D remain fixed.
We assume that each of the time series Ti follows a heterogeneous time-varying coeffi
cients model:
Yit = X′
tβi(t/T ) + εit, t = 1, . . . , T, (2)
where εit are idiosyncratic error terms which can potentially be serially correlated across
t but are independent across i and βi = (βi,1, . . . , βi,D)′ : [0, 1] → RD are unknown
vector-valued coefficient functions that may be different among the units. Technical
assumptions on the dependency structure in model (2) are discussed later in Section 4.
The main goal of this paper is to develop a rigorous statistical method that allows
us to compare the unknown functions βi across units, while providing information on
where and when these differences occur. In what follows, we suppose that the functions
βi take the rescaled time t/T as an argument which is common in the literature for
nonparametric estimation of time-varying parameters (e.g., Cai, 2007; Li et al., 2011).
Such rescaling means that, as the time dimension increases, we collect more and more
data locally which ensures consistency of the nonparametric estimator that is used for
our testing procedure.
5

2.2 Preliminary steps
We assume that βi are sufficiently smooth coefficient functions satisfying Lipschitz
continuity conditions. Formally, it can be formulated as follows:
(A1) For each i = 1, . . . , N , the trend coefficient functions βi are Lipschitz continuous
on [0, 1] coordinate-wise, i.e., for all d = 1, . . . , D, |βi,d(v) − βi,d(w)| ≤ C|v − w|
for all v, w ∈ [0, 1].
We estimate βi using a local constant regression approach. Specifically, for each fixed
time point u ∈ [0, 1], we minimize the locally weighted least squares criterion:
T
X
t=1
(Yit − X′
tβi(u))2 K t/T − u
h . (3)
Here, K denotes a kernel function and h is a bandwidth that controls the smoothness
of the estimator. We assume that h ∈ [hmin
T , hmax
T ] with formal requirements on hmin
T
and hmax
T stated further. Minimizing (3) with respect to βi results in the well-known
Nadaraya-Watson estimator that has the following form:
βbi(u, h) =
"
√1T h
T
X
t=1
Xt X ′
tK t/T − u
h
#−1
√1T h
T
X
t=1
XtYitK t/T − u
h . (4)
Alternatively, we can estimate the unknown slope coefficients by a local linear approx
imation (e.g., Li et al., 2011; Chen and Hong, 2012) or a sieve approximation (e.g.,
Zhang and Zhou, 2021; Atak et al., 2025). However, the local constant approach allows
us to use strong approximation theory for the errors εit which guarantees valid critical
values for our testing procedure.
In the rest of the paper, we employ the following shorthanded notation:
Kt,u,h := K ((t/T − u)/h) for the value of the kernel function K at (t/T − u)/h and
MXKX (u, h) := √1T h
PT
t=1 XtX ′
tKt,u,h for the (localized) design matrix. Using this
notation, we can rewrite the estimator in (4) as
βbi(u, h) = M −1
XKX (u, h) √1T h
T
X
t=1
XtYitKt,u,h
!
.
Remark 2.1. Introducing time-varying coefficient functions in (2) generalizes the model
in Khismatullina and Vogt (2022), which has constant coefficients βi and a determin
istic trend function. The authors provide a multiscale test for (local) differences in
the trend functions. We allow all coefficients to be time-varying, where Xt,1 does not
necessarily need to be constant.
6

3 Testing procedure
This section presents the multiscale testing procedure for detecting heterogeneity in
regression coefficients. The primary objective is to assess whether the time-varying
coefficient functions βi in model (2) are the same across all time series. Unlike conven
tional tests that focus on global comparison, our approach captures localized variations
by testing over multiple time scales simultaneously.
3.1 Hypothesis formulation
We formally define the null hypothesis as:
H0 : β1(u) = β2(u) = . . . = βN (u) ∀u ∈ [0, 1], (5)
which states that the coefficient functions βi are everywhere identical across all units
i = 1, . . . , N . Under H0, model (2) simplifies to a homogeneous linear panel data model.
In this setting, pooling data across units yields an efficient estimator of the common
slope function. However, when H0 is violated, pooling can lead to biased estimates
and incorrect inference due to underlying coefficient heterogeneity (see, e.g., Hsiao and
Tahmiscioglu, 1997). Testing H0 is therefore critical for ensuring valid estimation and
inference in time-varying panel models.
Several approaches exist for testing H0. Traditional parametric methods, such as the
Wald test and the likelihood ratio test, compare restricted and unrestricted estimators.
More recently, Atak et al. (2025) proposed a nonparametric test based on residuals
obtained from the estimation procedure under H0. However, while these tests are helpful
in detecting slope heterogeneity in general, they mostly focus on global departures from
homogeneity and do not identify where and when coefficient differences occur.
In this section, we describe a multiscale testing framework that provides richer insights
than standard methods. Following the perspective of Khismatullina and Vogt (2020,
2022, 2023), our approach is designed to answer three key questions:
1. Is the null hypothesis H0 violated? That is, does at least one coefficient function
differ somewhere across units?
2. If the null hypothesis H0 is not true, then which coefficient functions differ?
3. At which time intervals do these differences arise?
To achieve this, we introduce a series of local null hypotheses, where ”local” refers to
a certain pair of units and a specific time intervals rather than the entire time domain.
We then construct test statistics that allow for separate evaluation of each local null
hypothesis while accounting for multiple testing problem at the same time. The core
idea is to aggregate the conclusions from these local tests into a unified confidence
7

statement, providing a statistically rigorous framework for detecting heterogeneity in
time-varying coefficients.
We proceed as follows. For any interval [u − h, u + h] ⊆ [0, 1] (where u denotes the
location and h the bandwidth) and for any pair of units 1 ≤ i < j ≤ N , consider the
local null hypothesis
H [i,j]
0 (u, h) : βi(w) = βj(w) for all w ∈ [u − h, u + h],
that states that the coefficient functions of units i and j are identical on the interval
[u−h, u+h]. Reformulating the global null hypothesis in terms of these local hypotheses
gives:
H0 : The hypotheses H[i,j]
0 (u, h) hold true for all intervals [u − h, u + h] ⊆ [0, 1]
and for all 1 ≤ i < j ≤ N.
Thus, instead of testing a single global null hypothesis H0, our method assesses a
collection of local ones, enabling us to identify specific deviations in coefficient functions
both across units and over time. Moreover, the multiscale perspective ensures that our
test is sensitive to both long-term trends and short-term structural changes.
3.2 Construction of the test statistic
The main idea of our multiscale method is to test simultaneously hypotheses H[i,j]
0 (u, h)
for all intervals [u − h, u + h] ⊆ [0, 1] and all pairs (i, j) with 1 ≤ i < j ≤ N . In
practice, we are unable to consider all possible intervals [u − h, u + h] ⊆ [0, 1], and we
need to work with a countable subset of these intervals. We consider the following set.
We define a collection of location-bandwidth points GT = {(u, h) : [u − h, u + h] ⊆
[0, 1] with u = t/T, h = s/T for some t, s = 1, . . . , T and h ∈ [hmin
T , hmax
T ]}. Here, as
before, hmin
T and hmax
T denote the minimal and maximal bandwidths, respectively, with
specific requirements on their selection provided below in Assumption (A12). The set
GT is chosen to be sufficiently rich so that the resulting intervals collectively cover the
entire unit interval. We allow GT to be quite large compared to the length of the time
series T . Formal assumptions on GT , hmin
T and hmax
T are given in Section 4.1.
Now we are ready to construct the localized pairwise test statistics Sˆij(u, h). For a
given pair (u, h) ∈ GT and all i = 1, . . . , N , we estimate βi(u) using the nonparametric
kernel estimator βbi(u, h) as defined in (4). Based on these estimates, for each pair (i, j),
1 ≤ i < j ≤ N we consider the following quantity:
Sˆij(u, h) = Σb −1/2
ij MXKX (u, h) βˆi(u, h) − βˆj(u, h)
∞
,
where Σb ij = (Σb i + Σb j)/2 with Σb i and Σb j represent appropriate estimators of the
8

long-run covariance matrices Σi and Σj of the processes {Xtεit}T
t=1 and {Xtεjt}T
t=1,
respectively. Our procedure requires an estimator Σb i to have the rate of convergence
ρT = o(log T ) which is easily achieved using most standard estimators, for example,
HAC estimator as proposed in Andrews (1991). Discussion of the estimation procedure
for Σi that we follows in the simulation study and in the empirical analysis is provided
in Section 3.5.
Heuristically, the statistic Sˆij(u, h) approximates the distance between βi and βj over
the interval [u−h, u+h]. To ensure scale invariance, we normalize the test statistic using
the (localized) variance of Xt through MXKX(u, h) and the estimated variances of the
processes {Xtεit}T
t=1 and {Xtεjt}T
t=1. By construction, Sˆij(u, h) is always nonnegative,
with smaller values indicating that the difference between βi and βj over the given
interval is quite small. In contrast, large positive values of Sˆij(u, h) suggest substantial
differences, making the rejection of the local null hypothesis H[i,j]
0 (u, h) more likely.
To test the global null hypothesis H0, we aggregate the local statistics Sˆij(u, h) over
all location-bandwidth points (u, h) ∈ GT and all pairs (i, j), 1 ≤ i < j ≤ N , using
the aggregation scheme proposed by Du ̈mbgen and Spokoiny (2001). The resulting
multiscale test statistic is given by
bΨT = max
1≤i<j≤N max
(u,h)∈GT
Sˆij(u, h) − λ(h) , (6)
where λ(h) are (appropriately chosen) additive correction terms. In brief, λ(h) rep
resents a term designed to account for the multiple testing problem inherent in our
framework. The functional form of λ(h) does not affect the asymptotic convergence
results for our test statistic but may affect the finite sample performance. In our work,
λ(h) is determined by the extreme value theory and depends on the bandwidth h:
drawing on the results from Du ̈mbgen and Spokoiny (2001), the correction term for our
setting is given by λ(h) = p2 log(1/2h).
3.3 Computation of the critical values
Suppose for a moment that the exact (1 − α)-quantile q∗
T (α) of the multiscale test
statistic bΨT under H0 were known. The multiscale test would then follow the rejection
rule:
(T∗) Reject H0 if Ψb T > q∗
T (α).
By construction, this decision rule ensures a rigorous level-α-test, meaning that under
H0 we have P(Ψb T > q∗
T (α)) = α.
In practice, however, q∗
T (α) is unknown and can not be computed analytically due to
the complicated dependence structure of the individual test statistics across various
location-bandwidth points. Hence, it cannot be used to set up the test. In what
9

follows, we show how to construct an asymptotic approximation qT (α) that is both
computationally feasible and statistically valid. In particular, we require that under
H0, qT (α) satisfies the asymptotic property
P(Ψb T > qT (α)) = α + o(1). (7)
We use strong approximation theory to compute the critical values qT (α), and in Sec
tion 4, we show that this approach ensures an asymptotically valid testing procedure.
For calculation of the critical values, we do the following. Under the null H0, the
individual test statistics
Sˆij(u, h) = Σb −1/2
ij MXKX (u, h) βˆi(u, h) − βˆj(u, h)
∞
=
Σb −1/2
ij
√1T h
T
X
t=1
Xt Yit − Yjt Kt,u,h
!
∞
=
Σb −1/2
ij
√1T h
T
X
t=1
Xt X′
tβi(t/T ) + εit − X′
tβj(t/T ) − εjt Kt,u,h
!
∞
,
is exactly equal to
Sˆ0
ij(u, h) = Σb −1/2
ij
√1T h
T
X
t=1
Xt (εit − εjt) Kt,u,h
!
∞
. (8)
Under some regularity conditions and a ceratin rate of consistency of the estimators Σb i
and bΣj of Σi and Σj, respectively, we can show that Sˆ0
ij(u, h) can be approximated by
Sij(u, h) = Σ−1/2
ij
√1T h
T
X
t=1
Σ1/2
i Zit − Σ1/2
j Zjt Kt,u,h
!
∞
,
where Zit are i.i.d. across i and t multivariate standard normal random vectors that are
independent of Xs and εjs. Essentially, when constructing Sij(u, h), we have replaced
the terms Xtεit by the scaled multivariate Gaussian random vectors Σ1/2
i Zit. Under
an additional simplifying assumption of Σi = Σj, the Gaussian version Sij(u, h) of the
test statistic can be further reduced to
Sij(u, h) = √1T h
T
X
t=1
Zit − Zjt Kt,u,h ∞
. (9)
Note that in this case, Sij(u, h) does not depend on any unknown quantities and its
quantiles can be (approximately) calculated via Monte Carlo simulations.
In order to construct a global test statistic, we aggregate Sij(u, h) in a similar way as
10

Sˆij(u, h):
ΦT = max
1≤i<j≤N max
(u,h)∈GT
{Sij(u, h) − λ(h)}. (10)
As we will rigorously prove in Section 4, the 1 − α quantile q∗(α) of the aggregated
data-dependent test statistic bΨT can be approximated by the 1 − α quantile q∗(α)
of the similarly aggregated Gaussian test statistic ΦT . Equation (9) shows that the
distribution of Sij(u, h) for each pair (i, j), 1 ≤ i < j ≤ N , and each (u, h) ∈ GT ,
and thus of ΦT depends only on the Gaussian random vectors Zit. Therefore, accurate
critical values of ΦT can be computed by simulating draws of Zit for a large number of
times B. In our simulation study and application analysis, we choose B = 5000, but
we have repeated the analysis with B = 1000 and the results are roughly the same.
Here we formally describe our testing approach. For a given significance level α ∈ (0, 1),
we can compute the critical values of ΦT according to the following steps:
Step 1. Simulate B independent draws of a matrix
Zb = (Zb
it)i=1,...,N;t=1,...,T , b = 1, 2, . . . , B,
where each entry Zb
it is an independent multivariate standard normal random
variable of dimension D.
Step 2. Compute the simulated individual test statistic
Sb
ij(u, h) = √1T h
T
X
t=1
Zb
it − Zb
jt Kt,u,h ∞
.
Step 3. Aggregate the simulated statistics over all pairs (i, j), 1 ≤ i < j ≤ N , and all
location-bandwidth points (u, h) ∈ GT as
Φb
T = max
1≤i<j≤N max
(u,h)∈GT
Sb
ij(u, h) − λ(h) .
Step 4. Calculate the critical value qT (α) as the empirical (1 − α)-quantile of the sim
ulated values Φb
T
B
b=1.
This resampling approach ensures that the estimated critical values correctly approx
imate the unknown quantile q∗
T (α), allowing for valid inference. The computational
complexity of this procedure is manageable even for large samples, as the Monte Carlo
step can be computed in parallel and does not require re-estimation of the coefficient
functions.
11

3.4 The testing procedure
For a given significance level α ∈ (0, 1), we conduct the multiscale test to assess the
global null hypothesis H0 using the following decision rule:
(T) Reject H0 if Ψb T > qT (α).
By adopting this criterion, the proposed method serves as a test for the overall hypoth
esis H0. Alternatively, it can be interpreted as a simultaneous test for the family of
local null hypotheses H[i,j]
0 (u, h) across all location-bandwidth points (u, h) ∈ GT and
all unit pairs (i, j), 1 ≤ i < j ≤ N . This interpretation allows us to formulate a local
decision rule:
(Tmult) For each interval [u − h, u + h] with (u, h) ∈ GT and for each pair (i, j) with
1 ≤ i < j ≤ N , reject H[i,j]
0 (u, h) if Sˆij(u, h) − λ(h) > qT (α).
This local rule ensures that hypothesis testing is performed across multiple time inter
vals while our approach for constructing of the critical values simultaneously controls
for resulting multiple comparisons.
A crucial property of the multiscale test is that it enables rigorous confidence statements
about where and when significant deviations occur. Specifically, in Section 4, we prove
the following result under suitable regularity conditions:
With asymptotic probability at least 1 − α, the hypothesis H[i,j]
0 (u, h) is violated for
all pairs (i, j) and for all intervals [u − h, u + h] satisfying Sˆij(u, h) − λ(h) > qT (α).
This result allows us to make the following simultaneous confidence statement:
With at least (1 − α) (asymptotic) confidence, we can claim that the hypothe
sis H[i,j]
0 (u, h) is violated for all pairs of time series (i, j) and for all intervals
[u − h, u + h] for which our test rejects.
This provides a statistically robust way to detect heterogeneous time-varying coeffi
cient functions across unit pairs. By accumulating local test results, we construct a
comprehensive confidence region for coefficient differences over time and for all pair
wise comparisons, adding interpretability to the statistical inference.
3.5 Long-run covariance estimation
Define vit = Xtεit. As was mentioned before, our multiscale test relies on a consis
tent estimator of the long-run variance Σi = P∞
l=−∞ Cov(vi0, vil). In this section, we
describe one of the possible estimators.
12

We can rewrite the long-run variance Σi as follows:
Σi = Tli→m∞
T −1
X
l=−T +1
Γi,T (l), where
Γi,T (l) =



1 T
PT
t=l+1 E(vitv′
i(t−l)), l ≥ 0,
1 T
PT
t=−l+1 E(vi(t+l)v′
it), l < 0.
A popular choice in the time series literature is the kernel heteroskedasticy and autocor
relation consistent (HAC) covariance estimator. The idea of the kernel HAC estimator
is to estimate autocovariances Γi,T (l) by sample autocovariances bΓi,T (l) and to at
tach lower weights to autocovariances with large |l| using a kernel function. The kernel
weights smooth the sample autocovariances, ensuring a positive semi-definite covariance
estimator.
Specifically, we proceed as follows. Let κ denote a real-valued covariance kernel function
with some fixed bandwidth χ. The class of fixed-bandwidth kernel HAC estimators is
given by
Σb i(χ) = T
T −D
T −1
X
l=−T +1
κl
χ
bΓi,T (l) (11)
bΓi,T (l) =



1 T
PT
t=l+1 vˆitvˆ′
i(t−l), l ≥ 0,
1 T
PT
t=−l+1 vˆi(t+l)vˆ′
it, l < 0,
(12)
where vˆit = Xtεˆit with εˆit being the residuals after plugging in some estimator βˆi(t/T )
of βi(t/T ). Importantly, the covariance kernel function κ should give a smaller weight
to bΓi,T (l) as |l| increases. The following assumptions guarantee that the kernel HAC
covariance estimator Σb i converges to a true long-run variance matrix Σi. The assump
tions are a simplified version of Assumptions A-C in Andrews (1991) and Assumptions
5.1-5.3 in Belotti et al. (2023) where we used the fact that we consider a special case
of a linear model compared to a general one discussed in these papers.
Let m(abcd)
i (t, t + r, t + s, t + o) denote the time-t fourth-order cumulant of
v(a)
it , v(b)
i(t+r), v(c)
i(t+s), v(d)
i(t+o) where v(a)
it is the ath element of a vector vit. That is,
m(abcd)
i (t, t + r, t + s, t + o) = E v(a)
it v(b)
i(t+r)v(c)
i(t+s)v(d)
i(t+o) − E v ̃(a)
it v ̃(b)
i(t+r)v ̃(c)
i(t+s)v ̃(d)
i(t+o) ,
where {v ̃it}T
t=1 is a Gaussian sequence with the same mean and covariance structure as
{vit}T
t=1. Now, we can formulate the requirements on the dependence structure of the
process {vit}T
t=1 as follows.
(A2) For all i = 1, . . . , N , T θ(βˆi − βi) = Op(1) for some θ ∈ (0, 1/2),
supt≥1 E(||vit||2) < ∞, and supt≥1 E(||XtX′
t||2) < ∞. Moreover, R |κ(y)|dy < ∞.
13

(A3) For all i = 1, . . . , N , the process {vit}T
t=1 is a mean-zero, fourth-order stationary
sequence with P∞
l=−∞ ||Γi,T (l)|| < ∞ and
∞
X
k=−∞
∞
X
s=−∞
∞
X
o=−∞
|m(abcd)
i (0, k, s, o)| < ∞
for all a, b, c, d = 1, . . . , D.
(A4) For all i = 1, . . . , N , Assumption (A3) holds with vit replaced by
(v′
it, (XtX′
t − E (XtX′
t))′)′.
Belotti et al. (2023) establish that under Assumptions (A2) - (A4), using nonparametric
estimator βˆi of βi with data-driven bandwidths leads to the rate of convergence of a
kernel HAC estimator to be polynomial in T . In the appendix, we provide a similar
result for the rate of convergence for a fixed bandwidth parameter. This holds true for
various kernel functions, and since the necessary condition for our multiscale procedure
is to have a rate of convergence ρT = o(log T ), our main results remain valid for a
number of HAC specifications.
In the estimation procedure described above, we need to choose the bandwidth value
which determines the truncation of the sample autocovariances. A common practice
which we follow in the simulation study and in the empirical analysis is to set χ ≈
T 1/3. Alternatively, one can opt for the selection procedure proposed by Newey and
West (1994), or the parametric selection methods by Andrews (1991) and Andrews and
Monahan (1992).
4 Theory
In this section, we present the theoretical results that are necessary for validity of our
multiscale testing procedure.
4.1 Assumptions
To establish the theoretical properties of our test, we impose a set of assumptions
about the behavior of the regressors, errors, and underlying dependence structure in
the model.
(A5) Processes εi = {εit}T
t=1 are independent across i.
(A6) For each i = 1, . . . , N , the process εi satisfies E[εit|X1, . . . , XT ] = 0,
E[ε2
it|X1, . . . , XT ] = σ2
ε and E[εitεis|X1, . . . , XT ] = σε,ε for all t, s = 1, . . . , T .
(A7) For each i = 1, . . . , N , the variables vit = Xtεit ∈ RD allow for the representation
vit = gi(Fit) where Fit = (. . . , ηi(t−1), ηit) and ηis are i.i.d. across s.
14

(A8) For each i = 1, . . . , N , it holds that E(||vit||q) ≤ C < ∞ for some q > 4
(A9) For each i, P
s≥t δq(gi, s) = O(t−ξ(log t)−A), where
A > (2q + q2)ξ + q2 + 3q + 2 + γ1/2
q(1 + q + 2γ) ,
γ = q2(q2 + 4q − 12)ξ2 + 2q(q3 + q2 − 4q − 4)ξ + (q2 − q − 2)2,
ξ > ξ0
q2 − 4 + (q − 2)pq2 + 20q + 4
8q ,
and q is defined in (A8).
(A10) There exists λ∗ > 0 and l∗ ∈ N such that for all i, t ≥ 1 and l ≥ l∗, the smallest
eigenvalue of Var(Pt+l
s=t+1 vis) is sufficiently bounded away from zero, i.e.,
ρ⋆ Var
t+l
X
s=t+1
vis
!!
≥ λ∗l.
(A11) For all (u, h), it holds that MXKX(u, h) = √1T h
PT
t=1 XtX ′
tKt,u,h is positive defi
nite with probability going to 1.
(A12) |GT | = O(T θ) for some arbitrary large but fixed constant θ > 0. Furthermore, we
assume that hmin
T ≫ T 2/(3q)−1/3 where q is defined in (A7) and hmax
T ≤ 1/4.
(A13) The kernel K is non-negative, symmetric about zero, integrates to one and there
exists δK > 0 and cK > 0 such that K(z) ≥ cK for all |z| ≤ δK. Moreover, it
has compact support [−1, 1], 1
2 <R1
−1 K2(y)dy < ∞ and the function is Lipschitz
continuous, that is, |K(v)−K(w)| ≤ C|v −w| for any v, w ∈ R and some constant
C > 0.
Assumption (A5) rules out cross-sectional dependence in the idiosyncratic errors as
suming that the dependence structure across units is fully explained by the common
covariates. This condition allows us to construct the multiscale test statistics by combin
ing unit-wise Gaussian approximations without having to control for additional cross
sectional correlation. Assumption (A6) imposes a homogeneous second-order structure
for the idiosyncratic errors conditional on the common regressors (X1, . . . , XT ). To
gether with Assumption (A5) and the representation in Assumption (A7), this leads to
a weakly dependent, second-order stationary structure for the processes {vit}T
t=1.
Assumption (A7) places the product process vit = Xtεit in the physical-dependence
framework of Wu (2005). This representation allows us to quantify temporal dependence
via the physical dependence measures δq(gi, t) and to invoke the strong approximation
results of Karmakar and Wu (2020). Assumption (A8) provides sufficient control of the
tails of vit.
15

Assumptions (A9) and (A10) correspond to the assumptions in Karmakar and Wu
(2020, Theorem 2.1-2.2) that justify the strong approximation result. Assumption (A9)
specifies how fast the physical dependence coefficients δq(gi, t) must decay. It implies
that the process {vit}T
t=1 is short-memory and yields a strong approximation error of
order T 1/q. Note that one could allow for stronger serial dependence by choosing a
smaller ξ at the price of a slower approximation rate. In that case, our main theoretical
results would still remain valid. Assumption (A10) is a common assumption in time
series literature that ensures that the the eigenvalues of the covariance matrices of
the increment processes are substantially large and away from zero, implying well
conditioned and positive definite covariance matrices.
Assumption (A11) concerns the localized design matrix MXKX(u, h) and requires this
matrix to be positive definite with probability tending to one. This excludes local
multicollinearity of the regressors on each interval [u − h, u + h] in the grid GT and
ensures that the kernel estimator βˆi(u, h) is well defined for all (u, h) ∈ GT and that
the normalization by MXKX(u, h) in the test statistic is stable.
Assumption (A12) governs the practical choice of the grid GT and is a weak restriction
commonly used in multiscale testing (Khismatullina and Vogt, 2020, 2022). The condi
tion |GT | = O(T θ) for some fixed θ > 0 allows the number of location–bandwidth points
to grow polynomially in T , which is large enough in practice to cover a rich collection of
intervals. The lower bound hmin
T ≫ T 2/(3q)−1/3 prevents us from using bandwidths that
are too small, that is, from forming intervals with too few observations for the limit
theory to apply. The upper bound hmax
T ≤ 1/4 rules out overly large bandwidths that
would average over almost the entire sample and blur local features.
Assumption (A13) is a standard assumption in the nonparametric time series literature
that is satisfied by many standard kernels such as the Epanechnikov kernel that we use
in our simulation and application studies. The only non-standard restriction that we
impose on the kernel function is the requirement 1
2 < R1
−1 K2(y)dy which is necessary
for the anti-concentration bounds used in the Gaussian approximation of the multiscale
statistic. This restriction is also satisfied by the most common kernel functions such as
Epanechnikov (which we use in our empirical analysis), biweight or triweight kernels.
4.2 Theoretical results
In this section, we establish the theoretical properties of the multiscale test introduced
in Section 3. We first show that the distribution of the test statistic bΨT can be approx
imated by the distribution of a suitable Gaussian max-type statistic ΦT . This strong
approximation justifies the use of the simulated critical values qT (α) defined in Sec
tion 3.3. We then derive the asymptotic size of our test for the global null hypothesis
H0, study local power properties under a class of shrinking alternatives, and finally show
that the procedure controls the family-wise error rate when simultaneously testing the
16

full number of the local null hypotheses H[i,j]
0 (u, h).
Theorem 4.1. Let Assumptions (A1) - (A13) be fulfilled. Moreover, assume that the
estimators Σb i of the long-run covariance matrices Σi satisfy Σb i − Σi 1 = op(ρT ) for
some ρT = o(log T ), and that the long-run covariance matrices are homogeneous across
individuals, Σi = Σ for all i. Then, under the global null H0,
sup
y∈R
P(Ψb T ≤ y) − P(ΦT ≤ y) = o(1).
Theorem 4.1 shows that, under H0, the Kolmogorov distance between the distribution
of the multiscale statistic Ψb T and that of the Gaussian test statistic ΦT converges to zero
as the sample size increases. The additional assumption on Σb i requires the long-run
covariance matrices Σi to be estimated with sufficient accuracy. As discussed in Sec
tion 3.5, this rate can be achieved by standard HAC-type estimators. The homogeneity
condition Σi = Σ for all i simplifies the covariance structure across units and allows
us to work with a common Gaussian approximation. Intuitively, Theorem 4.1 ensures
that the high-dimensional dependence across location–bandwidth points (u, h) ∈ GT
and pairs of units (i, j) is adequately captured by the Gaussian coupling embodied in
ΦT . Proof of Theorem 4.1 is given in Appendix.
The result in Theorem 4.1 is necessary for deriving the theoretical properties of the
proposed multiscale test. Recall that qT (α) denotes the (1 − α)-quantile of ΦT . First,
we show that the test based on the critical value qT (α) has asymptotically the correct
size: the rejection probability under H0 converges to the nominal level α.
Proposition 4.2 (Asymptotic size). Suppose that the assumptions of Theorem 4.1 are
fulfilled. Then, under H0,
P(Ψb T ≤ qT (α)) = (1 − α) + o(1).
Note that the size control is obtained despite the fact that the dimension of bΨT , that
is, the number of location–bandwidth points (u, h) ∈ GT and ordered pairs (i, j), may
grow with T .
Second, we study the behavior of the test under a certain class of local alternatives and
we show that under this certain class, our test has sufficient power. Let βi = βi,T be
a sequence of coefficient functions that depend on the time length T . The following
class of alternatives ensures that, for some pair of units, sequences βi,T and βj,T are
sufficiently separated on at least one interval in the multiscale grid.
Proposition 4.3 (Local power). Let the assumptions of Theorem 4.1 be fulfilled. More
over, assume that the following holds: for some pair (i, j), there exists (u, h) ∈ GT with
[u − h, u + h] ⊆ [0, 1] and some coordinate d ∈ {1, . . . , D} such that
17

[βi,T (w) − βj,T (w)]d ≥ cT
plog T /(T h) for all w ∈ [u − h, u + h], where {cT } is
any sequence of positive numbers with cT → ∞ as T → ∞. Then it holds that
P(Ψb T ≤ qT (α)) = o(1),
and hence, the test rejects H0 with probability tending to 1.
So far we have focused on the global null hypothesis H0 of complete homogeneity across
units. The construction of Ψb T also enables multiple testing of the collection of local null
hypotheses H[i,j]
0 (u, h) defined in Section 3.1. We now formalize the multiple testing
problem and show that the procedure controls the family-wise error rate (FWER).
Let M = {(u, h, i, j) : (u, h) ∈ GT and 1 ≤ i < j ≤ N } denote the collection of all
location-scale points (u, h) ∈ GT and all pairs of units (i, j). Let M0 ⊆ M denote the
collection of tuples (u, h, i, j) for which the local null hypothesis H[i,j]
0 (u, h) is true. Our
property of interest, FWER, is defined as the probability of rejecting H[i,j]
0 (u, h) for at
least one tuple (u, h, i, j) ∈ M0. That is,
FWER(α) = P ∃(u, h, i, j) ∈ M0 : Sˆij(u, h) − λ(h) > qT (α)
for some given significance level α ∈ (0, 1). We would like to bound the FWER, control
ling the rate of false discoveries. The following proposition shows that our multiscale
test asymptotically controls the FWER at level α.
Proposition 4.4. Suppose that the assumptions of Theorem 4.1 are fulfilled. Then, for
any given α ∈ (0, 1),
FWER(α) ≤ α + o(1).
Equivalently, Proposition 4.4 implies that
P ∀ (u, h, i, j) ∈ M0 : Sˆij(u, h) − λ(h) ≤ qT (α) ≥ 1 − α + o(1),
that is, with probability at least 1 − α (asymptotically), none of the true local null
hypotheses is rejected by our procedure. This result provides the theoretical justification
for the simultaneous confidence statement (R) in Section 3.4: the set of accepted local
hypotheses delivers a joint confidence statement about all coefficient functions across
all units and all intervals, with an asymptotic coverage probability at least 1 − α.
5 Clustering
The global null hypothesis H0 says that the coefficient functions are fully homogeneous
across individuals. A rejection of H0 implies the presence of heterogeneity in the coeffi
18

cient functions. Rather than full heterogeneity across units, it is plausible that groups
of individuals share the same coefficient functions - a structure commonly referred to
as grouped heterogeneity (Bonhomme and Manresa, 2015; Su et al., 2016; Chen, 2019).
In this section, we discuss how our multiscale test can be used to uncover such group
structure in the data.
We assume that the group pattern follows the form
βi =
K0
X
k=1
γk1{i ∈ Gk},
where K0 is the number of groups, Gk denotes the k-th group, with the partition
SK0
k=1 Gk = {1, 2, . . . , N } and Gk ∩ Gk′ = ∅ for k ̸= k′. Each group shares a common
coefficient function γk, and these functions differ across groups, i.e., γk ̸= γk′ for k ̸= k′.
Since the group memberships are typically unknown, they need to be estimated from
the data.
To estimate the group structure, we use partially aggregated individual multiscale test
statistics
max
(u,h)∈GT
{Sˆij(u, h) − λ(h)}
as a dissimilarity measure between series i and j. Following Chen (2019) and Khismat
ullina and Vogt (2022), we use these distances as inputs for a hierarchical agglomerative
clustering (HAC) algorithm. Given a specified number of groups K0, the algorithm re
turns the estimated group memberships {Gˆ1, . . . , GˆK0}. We refer the reader to Chen
(2019), Khismatullina and Vogt (2022), and Hastie et al. (2009) for more details about
the HAC in this context.
If the number of groups is unknown, we estimate it by selecting the smallest number
of groups Kb such that the maximum within-group distance does not exceed the critical
value qT (α). We show that Kb is a consistent estimator of K0 in the current setting.1
Below we state our assumptions on the group-specific coefficient functions.
(A13) For each group k = 1, . . . , K0, the trend coefficient functions γk = (γk,1, . . . , γk,D)′
are Lipschitz continuous on [0, 1] coordinate-wise with normalization
R1
0 γk,d(u)du = 0 for each d = 1, . . . , D. Moreover, for any k ̸= k′, the coeffi
cient functions are different in the following way: There exists (u, h) ∈ GT and a
coordinate d ∈ {1, . . . , D} such that [γk(w) − γk′(w)]d ∞ ≥ cT
plog T /(T h) for
all w ∈ [u − h, u + h], where 0 < cT → ∞.
The first part of Assumption (A13) repeats Assumption (A1), whereas the second part
is a necessary condition for the consistency of Kb and is common in the literature.
1Alternative selection procedures exist, such that the information criterion by Chen (2019), and may be validated in the current setting.
19

The following proposition states that the hierarchical clustering algorithm produces
consistent group-membership estimates and that the estimator Kb of the true number
of groups K0 is consistent.
Proposition 5.1. Let the assumptions of Theorem 4.1 and (A13) be fulfilled. Then we
have that
P({Gb1, . . . , GbKb } = {G1, . . . , GK0}) ≥ (1 − α) + o(1),
and
P(Kb = K0) ≥ (1 − α) + o(1).
Importantly, our multiscale approach allows us to identify the locations where two
group-specific coefficients γk and γk′ are different from each other. For each pair of
groups (k, k′), let A[k,k′]
T denote the set of (u, h) ∈ GT for which there is at least one
local difference between individuals across groups, that is,
A[k,k′]
T (α) = {(u, h) ∈ GT : Sˆij(u, h) > qT (α) for some i ∈ Gbk, j ∈ Gbk′}.
We define the set S[k,k′]
T (α) as the set of intervals [u − h, u + h] ⊆ [0, 1] for which
(u, h) ∈ A[k,k′]
T (α), i.e.,
S [k,k′]
T (α) = {[u − h, u + h] : (u, h) ∈ A[k,k′]
T (α)}.
Moreover, let
E [k,k′ ]
T (α) = {∀[u − h, u + h] ∈ S[k,k′]
T (α) : γk(v) ̸= γk′(v) for some v ∈ [u − h, u + h]}
be the event that the group-specific coefficients differ on all intervals in S[k,k′]
T (α). The
following proposition says the multiscale test correctly identifies the time intervals where
the group-specific coefficients γk and γk′ are different from each other with asymptotic
confidence 1 − α.
Proposition 5.2. Let the assumptions of Proposition 5.1 be fulfilled. Then we have
that the event
ET (α) = {∩1≤k<k′≤Kˆ E[k,k′]
T (α)} ∩ {Kb = K0 and Gbk = Gk for all k}
asymptotically occurs with probability at least 1 − α, that is,
P (ET (α)) ≥ (1 − α) + o(1).
20

Remark 5.3. In this work we assume that the group structure is the same across all D
coordinates. Recent works by Cheng et al. (2019) and Leng et al. (2023) discuss models
with multi-dimensional group structure, where different parameters may correspond to
different group structures. We leave this extension for further research.
6 Empirical application
In our empirical study, we revisit the relationship between U.S. interest rates and foreign
output. Iacoviello and Navarro (2019) find that U.S. monetary tightening results in
larger drops in GDP for emerging economies than for advanced economies, and they
document substantial heterogeneity in the effect of U.S. monetary shocks on foreign
economies. We employ our multiscale test to test for heterogeneity across economies
and across time. While doing so, we allow for a time-varying relationship between U.S.
monetary shocks and foreign GDP, as opposed to the static relationship in Iacoviello
and Navarro (2019).
The quarterly interest rate and foreign GDP data spans the period between 1965-Q1
and 2016-Q2, and covers 49 foreign countries. We include the U.S. GDP in our GDP
data, bringing the number of time series to N = 50. The dataset is taken from Iacoviello
and Navarro (2019) and is publicly available at the authors’ website.2 For the detailed
description of the dataset we refer the reader to the original paper.
For our analysis, we construct the U.S. monetary shock variable (denoted further by
Xt) as a residual of a regression on several control variables as described by Iacoviello
and Navarro (2019). The GDP data (denoted by yit for a country i) is de-seasonalized
by extracting the residual from an country-specific regression on the fourth-order lag
and a quadratic trend (corresponding to the controls in Iacoviello and Navarro (2019)).
Afterwards, we demean each of the obtained time series separately in order to account
for the individual fixed-effects. As a result, we estimate the time-varying GDP response
to an U.S. monetary shock from the following model:
yi(t+h) = βi(t/T )Xt + εit,
for some lag h. In what follows, we fix h = 1 in the current draft.
The test is applied exactly as described in Section 3.3. The nonparametric estimators
are computed as described in Section 2.2, where we employ the Epanechnikov kernel.
We estimate the long-run variances Σi, i = 1, . . . , N , by the Bartlett-kernel HAC
estimator with data-driven bandwidth (see Section 3.5). We construct the grid GT
2https://www.matteoiacoviello.com/research.htm
21

Figure 1: Estimated cluster memberships using hierarchical clustering. The number of clusters is set to K = 2.
following Khismatullina and Vogt (2022) as GT = UT × HT with
UT = {u ∈ [0, 1] : u = 5t
T for some t ∈ N},
HT = h ∈ 1
T 1/3 , 1
4 : h = 5t − 3
T for some t ∈ N .
Furthermore, we compute the critical value qT (α) of our test by Monte Carlo simu
lation based on B = 1000 Gaussian samples. The results are as follows. First, we
reject the null hypothesis of global homogeneity at 5% level. This indicates that there
is a heterogeneous effect of U.S. monetary shocks on foreign GDP. To investigate the
heterogeneity further, we partition the countries into clusters. Given the natural par
tition into advanced vs. emerging countries and to be able to directly compare with
Iacoviello and Navarro (2019), we use K = 2 clusters.3 We visualize the clusters for
K = 2 in Figure 1. The figure illustrates that the second cluster is mostly made up
from European countries, while the first clusters covers South America and Asia. The
clusters correspond mostly with the partition into advanced and emerging economies
made by Iacoviello and Navarro (2019), although some differences arise. We find that
the time-varying effect of the U.S. monetary shock are similar for the U.S. and Canadian
economies, however, we find significant differences between these economies and most
European countries which together with Australia mostly constitute a separate cluster.
Our results indicate that allowing for time-varying exposure to U.S. monetary shocks,
the heterogeneity in exposure may be more sophisticated than the classical advanced
vs. emerging economies partition that is currently used. To sum up, our test serves
as a statistically rigorous starting point for further analysis of the various economic
relationships.
3Our selection procedure indicates K = 18 clusters but for interpretability reasons we chose to report the results for K = 2 clusters.
22

7 Conclusion
In this paper, we introduce a multiscale test for heterogeneous time-varying coefficients
in panels and prove that it asymptotically controls the family-wise error rate. We also
show that under local alternatives our test has asymptotic power of one. The proposed
multiscale procedure allows us to make simultaneous confidence statements about which
of the coefficient functions are different and where these differences occur. Furthermore,
the results of our test can be used as a dissimilarity measure for a subsequent HAC
clustering algorithm. For the real-life application, we study the relationship between
U.S interest rates and foreign output of 49 economies and the economy of U.S. itself. The
results show that foreign GDP responses to U.S. monetary shocks exhibit heterogeneity
and can be partitioned into two clusters with crisis-specific dynamics. Future research
will relax the common-regressor assumption and extend strong approximation theory
to other forms of dependencies.
8 Acknowledgement
The authors thank Chen Zhou and Wendun Wang for their insightful suggestions during
the preparation of the paper.
23

References
Adrian, T. and Franzoni, F. (2009). Learning about beta: Time-varying factor
loadings, expected returns, and the conditional CAPM. Journal of Empirical Finance,
16 537–556.
Ando, T. and Bai, J. (2015). A simple new test for slope homogeneity in panel data
models with interactive effects. Economics Letters, 136 112–117.
Andrews, D. W. (1991). Heteroskedasticity and autocorrelation consistent covariance
matrix estimation. Econometrica, 59 817–858.
Andrews, D. W. K. and Monahan, J. C. (1992). An improved heteroskedasticity
and autocorrelation consistent covariance matrix estimator. Econometrica, 60 953
966.
Atak, A., Yang, T. T., Zhang, Y. and Zhou, Q. (2025). Specification tests for
time-varying coefficient panel data models. Econometric Theory, 41 123–170.
Baltagi, B. H., Bresson, G. and Pirotte, A. (2008). To pool or not to pool? In
The Econometrics of Panel Data: Fundamentals and Recent Developments in Theory
and Practice. Springer, 517–546.
Belotti, F., Casini, A., Catania, L., Grassi, S. and Perron, P. (2023). Simul
taneous bandwidths determination for DK-HAC estimators and long-run variance
estimation in nonparametric settings. Econometric Reviews, 42 281–306.
Bonhomme, S. and Manresa, E. (2015). Grouped patterns of heterogeneity in panel
data. Econometrica, 83 1147–1184.
Cai, Z. (2007). Trending time-varying coefficient time series models with serially
correlated errors. Journal of Econometrics, 136 163–188.
Chen, B. and Hong, Y. (2012). Testing for smooth structural changes in time series
models via nonparametric regression. Econometrica, 80 1157–1183.
24

Chen, J. (2019). Estimating latent group structure in time-varying coefficient panel
data models. The Econometrics Journal, 22 223–240.
Chen, S.-N. (1982). An examination of risk-return relationship in bull and bear
markets using time-varying betas. Journal of Financial and Quantitative Analysis,
17 265–286.
Cheng, X., Schorfheide, F. and Shao, P. (2019). Clustering for multi-dimensional
heterogeneity. Tech. rep., Working paper.
Du ̈mbgen, L. and Spokoiny, V. G. (2001). Multiscale testing of qualitative hy
potheses. Annals of Statistics, 29 124–152.
Fama, E. F. and MacBeth, J. D. (1973). Risk, return, and equilibrium: Empirical
tests. Journal of Political Economy, 81 607–636.
Gao, J., Xia, K. and Zhu, H. (2020). Heterogeneous panel data models with cross
sectional dependence. Journal of Econometrics, 219 329–353.
Haimerl, P., Smeekes, S. and Wilms, I. (2025). Estimation of latent group struc
tures in time-varying panel data models. arXiv preprint arXiv:2503.23165.
Hastie, T., Tibshirani, R. and Friedman, J. (2009). The Elements of Statisti
cal Learning: Data Mining, Inference, and Prediction. Springer series in statistics,
Springer.
Hsiao, C. and Tahmiscioglu, A. K. (1997). A panel analysis of liquidity constraints
and firm investment. Journal of the American Statistical Association, 92 455–465.
Iacoviello, M. and Navarro, G. (2019). Foreign effects of higher us interest rates.
Journal of International Money and Finance, 95 232–250.
Jagannathan, R. and Wang, Z. (1996). The conditional CAPM and the cross
section of expected returns. The Journal of Finance, 51 3–53.
Karmakar, S. and Wu, W. B. (2020). Optimal Gaussian approximation for multiple
time series. Statistica Sinica, 30 1399–1417.
25

Keane, M. and Neal, T. (2020). Climate change and US agriculture: Accounting
for multidimensional slope heterogeneity in panel data. Quantitative Economics, 11
1391–1429.
Khismatullina, M. and Vogt, M. (2020). Multiscale inference and long-run variance
estimation in non-parametric regression with time series errors. Journal of the Royal
Statistical Society Series B: Statistical Methodology, 82 5–37.
Khismatullina, M. and Vogt, M. (2022). Multiscale comparison of nonparametric
trend curves. arXiv preprint arXiv:2209.10841.
Khismatullina, M. and Vogt, M. (2023). Nonparametric comparison of epidemic
time trends: The case of COVID-19. Journal of Econometrics, 232 87–108.
Leng, X., Chen, H. and Wang, W. (2023). Multi-dimensional latent group struc
tures with heterogeneous distributions. Journal of Econometrics, 233 1–21.
Lewellen, J. and Nagel, S. (2006). The conditional CAPM does not explain asset
pricing anomalies. Journal of Financial Economics, 82 289–314.
Li, D., Chen, J. and Gao, J. (2011). Non-parametric time-varying coefficient panel
data models with fixed effects. The Econometrics Journal, 14 387–408.
Lobell, D. B., Roberts, M. J., Schlenker, W., Braun, N., Little, B. B.,
Rejesus, R. M. and Hammer, G. L. (2014). Greater sensitivity to drought ac
companies maize yield increase in the US Midwest. Science, 344 516–519.
Lumsdaine, R. L., Okui, R. and Wang, W. (2023). Estimation of panel group struc
ture models with structural breaks in group memberships and coefficients. Journal
of Econometrics, 233 45–65.
Newey, W. K. and West, K. D. (1994). Automatic lag selection in covariance
matrix estimation. The Review of Economic Studies, 61 631–653.
Okui, R. and Wang, W. (2021). Heterogeneous structural breaks in panel data
models. Journal of Econometrics, 220 447–473.
26

Pesaran, M. H. and Yamagata, T. (2008). Testing slope homogeneity in large
panels. Journal of Econometrics, 142 50–93.
Su, L. and Chen, Q. (2013). Testing homogeneity in panel data models with interac
tive fixed effects. Econometric Theory, 29 1079–1135.
Su, L., Shi, Z. and Phillips, P. C. B. (2016). Identifying latent structures in panel
data. Econometrica, 84 2215–2264.
Su, L., Wang, X. and Jin, S. (2019). Sieve estimation of time-varying panel data
models with latent structures. Journal of Business & Economic Statistics, 37 334
349.
Wang, W., Zhang, X. and Paap, R. (2019). To pool or not to pool: What is a good
strategy for parameter estimation and forecasting in panel regressions? Journal of
Applied Econometrics, 34 724–745.
Wu, W. B. (2005). Nonlinear system theory: Another look at dependence. Proceedings
of the National Academy of Sciences, 102 14150–14154.
Zhang, Y. and Zhou, Q. (2021). Partially linear functional-coefficient dynamic panel
data models: Sieve estimation and specification testing. Econometric Reviews, 40
983–1006.
27

A Proofs
Proof of Theorem 4.1. With the help of this theorem, we justify that inference using the
critical values from Section 3 is valid. We first summarize the main proof strategy, which
splits up into three steps, and then fill in the details. We will also make use of an auxiliary
test statistics
Ψb 0
T = max
1≤i<j≤N max
(u,h)∈GT
Sˆ0
ij(u, h) − λ(h) ,
where
Sˆ0
ij(u, h) = bΣ−1/2
ij
√1T h
T
X
t=1
Xt ((εit − ε ̄i) − (εjt − ε ̄j)) Kt,u,h
!
∞
,
as specified in (8). Sˆ0
ij(u, h) is different from Sˆij(u, h) only in the fact that it does not depend
on the coefficient functions βi and βj. Under the null H0, when we assume that βi ≡ βj for
all 1 ≤ i < j ≤ N , bΨT is exactly equal to bΨ0
T.
Step 1
We first have a closer look at the statistic bΨ0
T . In particular, we show that there exists an
identically distributed version eΨT of bΨ0
T which is close to the Gaussian statistic ΦT from (10).
More formally, we prove the following result.
Proposition A.1. There exist statistics { eΨT : T = 1, 2, . . .} with the following two properties:
(i) eΨT has the same distribution as bΨ0
T for any T , and (ii)
eΨT − ΦT = op(δT ),
where δT = T 1/q/
q
T (hmin
T )3 + ρT
√log T and ΦT is a Gaussian statistic as defined in (10).
The proof makes heavy use of strong approximation theory for dependent processes. As it is
quite technical, we defer the full proof to the next subsection.
Step 2
In this step, we establish some properties of the Gaussian statistic ΦT . Specifically, we prove
the following result.
28

Proposition A.2. It holds that
sup
y∈R
P |ΦT − y| ≤ δT = o(1),
where δT = T 1/q
√T (hmin
T )3 + ρT
√log T .
Roughly speaking, this proposition says that the random variable ΦT does not concentrate
too strongly in small regions of the form [y − δT , y + δT ] with δT converging to 0. The main
technical tool for deriving it are anti-concentration bounds for Gaussian random vectors. The
proof of this proposition with δT = T 1/q/
q
T (hmin
T )3 + ρT
√log T can be found later in this
section and closely follows the proof in Khismatullina and Vogt (2022) (Proposition A.8).
Step 3
We now use Steps 1 and 2 to prove that
sup
y∈R
P( bΨ0
T ≤ y) − P(ΦT ≤ y) = oP (1).
The proof of this proposition can be found in Khismatullina and Vogt (2022), statement
(A.5).
Proof of Proposition 5.1. The proof of this results follows from the steps in the proof of
Proposition 5.1 in Khismatullina and Vogt (2022) and therefore omitted for brevity.
Proof of Proposition 5.2. We define the auxiliary statistic
ˆΨ0
T = max
1≤i<j≤N max
(u,h)∈GT
{Sˆ0
ij(u, h) − λ(h)}, (A.1)
where Sˆ0
ij(u, h) is defined in (8). Let us consider the event
BT = {Ψˆ 0
T ≤ qT (α) and min
1≤k<k′≤K0
min
i∈Gk
j∈Gk′
ˆΨij,T ≥ qT (α)},
where the statistic ˆΨij,T is defined as
ˆΨij,T = max
(u,h)∈GT
{Sˆij(u, h) − λ(h)},
for each i and j. In other words, min1≤k<k′≤K0 min i∈Gk
j∈Gk′
ˆΨij,T corresponds to the smallest
29

between-group multiscale distance. In case event BT holds, it holds that
ˆΨ0
T < min
1≤k<k′≤K0
min
i∈Gk
j∈Gk′
ˆΨij,T .
Since ˆΨ0
T is identical to Ψˆ T under the null H0, we can use Proposition 4.2 to conclude that
P ˆΨ0
T ≤ qT (α) ≥ (1 − α) + o(1).
Furthermore, applying the same arguments used for Proposition 4.3 yields that
P

 min
1≤k<k′≤K0
min
i∈Gk
j∈Gk′
ˆΨij,T ≤ qT (α)

.
Therefore, we obtain that
P (BT ) ≥ (1 − α) + o(1). (A.2)
Analogous to the proof of Proposition 5.1 in Khismatullina and Vogt (2022), we can show
that
BT ⊆ {Kˆ = K0 and Gˆk = Gk for all k}, (A.3)
as a result of the HAC algorithm to obtain clusters. Moreover, since for all i, j and (u, h) ∈ GT
for which it holds that
Sˆ0
ij(u, h) − λ(h) ≥ qT (α) and Sˆij(u, h) − λ(h) ≥ qT (α),
it must hold that
T
X
t=1
Xt X′
tβi(t/T ) − X′
tβj(t/T ) Kt,u,h ̸= 0,
which implies that βi(v) − βj(v) ̸= 0 for some v ∈ [u − h, u + h]. Therefore, we obtain that
BT ⊆
\
1≤k<k′≤Kˆ
E k,k′
T (α). (A.4)
30

Combining the results in (A.3) and (A.4), we obtain that
BT ⊆
n\
1≤k<k′≤Kˆ
E k,k′
T (α)
o
∩ {Kˆ = K0 and Gˆk = Gk for all k} = ET (α).
Hence, result (A.2) implies that P (ET (α)) ≥ (1 − α) + o(1).
B Additional Proofs
Proof of Proposition A.1. Consider the stationary D-dimensional process Ni = {vit = Xtεit :
1 ≤ t ≤ T } for some fixed i ∈ {1, . . . , N }. By Theorem 2.2 in Karmakar and Wu (2020), the
following strong approximation result holds true: On a richer probability space, there exist
a sequence of random vectors Nei = {veit : t ∈ N} such that [vei1, . . . , veiT ] D= [vi1, . . . , viT ] for
each T and
max
1≤t≤T
t
X
s=1
veis − Σ1/2
i IB(t) = op(T 1/q), (B.1)
where IB(·) is a centered Brownian motion in RD and Σi = P
k∈Z Cov(vi0, vik) is the long
run covariance matrix of {vit : 1 ≤ t ≤ T }. Let Seij(u, h) be defined similarly to Sb0
ij(u, h) but
with veit instead of vit:
Seij(u, h) = eΣ−1/2
ij
√1T h
T
X
t=1
veit −  ̄
vei − vejt −  ̄
vej Kt,u,h
!
∞
,
where the estimator eΣij is constructed from the samples Nei and Nej in the same way as bΣij
is constructed from Ni and Nj. Note that since [vei1, . . . , veiT ] D= [vi1, . . . , viT ] and bΣ−1/2
ij − Σ−1/2
ij 1 = op(ρT ), we have that eΣ−1/2
ij − Σ−1/2
ij 1 = op(ρT ) (which we will use later in the
proof ).
Similarly to bΨ0
T , eΨT is defined as
eΨT = max
1≤i<j≤N max
(u,h)∈GT
n
Seij(u, h) − λ(h)
o
.
Moreover, we introduce an auxiliary statistic
Φ⋄
T = max
1≤i<j≤N max
(u,h)∈GT
S⋄
ij(u, h) − λ(h) ,
31

where
S⋄
ij(u, h) = eΣ−1/2
ij
√1T h
T
X
t=1
Σ1/2
i Zit − Z ̄i − Σ1/2
j Zjt − Z ̄j Kt,u,h
!
∞
,
which is different from Sij(u, h) only in using eΣ−1/2
ij instead of Σ−1/2
ij as a normalization
matrix. As a reminder, we also state here the formula for ΦT :
ΦT = max
1≤i<j≤N max
(u,h)∈GT
{Sij(u, h) − λ(h)} ,
with
Sij(u, h) = Σ−1/2
ij
√1T h
T
X
t=1
Σ1/2
i Zit − Z ̄i − Σ1/2
j Zjt − Z ̄j Kt,u,h
!
∞
.
Using this notation, we trivially have
eΨT − ΦT ≤ eΨT − Φ⋄
T + Φ⋄
T − ΦT .
In what follows, we prove that
eΨT − Φ⋄
T = op


T 1/q
q
T (hmin
T )3

 , (B.2)
Φ⋄
T − ΦT = op ρT
plog T . (B.3)
For the sake of simplicity, we introduce the following notation:
aij,T (u, h) = √1T h
T
X
t=1
(
veit −  ̄
vei) − (vejt −  ̄
vej ) Kt,u,h
bij,T (u, h) = √1T h
T
X
t=1
{Σ1/2
i (Zit − Z ̄i) − Σ1/2
j (Zjt − Z ̄j )}Kt,u,h.
We then have that
Seij,T (u, h) = eΣ−1/2
ij aij,T (u, h) ∞,
S⋄
ij,T (u, h) = eΣ−1/2
ij bij,T (u, h) ∞,
Sij,T (u, h) = Σ−1/2
ij bij,T (u, h) ∞.
32

First, we consider eΨT − Φ⋄
T . Due to the triangle inequality,
Seij,T (u, h) − S⋄
ij,T (u, h) = eΣ−1/2
ij aij,T (u, h)
∞
−
eΣ−1/2
ij bij,T (u, h)
∞
≤
eΣ−1/2
ij aij,T (u, h) − bij,T (u, h)
∞
.
Now using the definition of matrix-vector multiplication, we get the following
eΣ−1/2
ij aij,T (u, h) − bij,T (u, h)
∞
= max
d=1,...,D
h
eΣ−1/2
ij aij,T (u, h) − bij,T (u, h)
i
d
= max
d=1,...,D
D
X
e=1
h
eΣ−1/2
ij
i
e,d
h
aij,T (u, h) − bij,T (u, h)
i
e
≤ max
d=1,...,D
D
X
e=1
h
eΣ−1/2
ij
i
e,d
h
aij,T (u, h) − bij,T (u, h)
i
e
≤ max
e=1,...,D
h
aij,T (u, h) − bij,T (u, h)
i
e
· max
d=1,...,D
D
X
e=1
h
eΣ−1/2
ij
i
e,d
= aij,T (u, h) − bij,T (u, h) ∞ · eΣ−1/2
ij 1.
Then,
eΨT − Φ⋄
T ≤ max
1≤i<j≤N max
(u,h)∈GT
Seij,T (u, h) − S⋄
ij,T (u, h)
≤ max
1≤i<j≤N
eΣ−1/2
ij 1 max
1≤i<j≤N max
(u,h)∈GT
aij,T (u, h) − bij,T (u, h) ∞,
(B.4)
Now, using summation by parts we get that
aij,T (u, h) − bij,T (u, h)
= √1T h
T
X
t=1
Kt,u,h (veit −  ̄
vei) − (vejt −  ̄
vej) − Σ1/2
i (Zit − Z ̄i) + Σ1/2
j (Zjt − Z ̄j)
= √1T h
T −1
X
t=1
cij,t (Kt,u,h − Kt+1,u,h) + √1T h cij,T KT,u,h,
where
cij,t =
t
X
s=1
(
veis −  ̄
vei) − (vejs −  ̄
vej) − Σ1/2
i (Zis − Z ̄i) + Σ1/2
j (Zjs − Z ̄j)
33

and cij,T = 0 for all pairs (i, j) by construction. From this, it follows that
max
1≤i<j≤N max
(u,h)∈GT
aij,T (u, h) − bij,T (u, h) ∞ ≤ max
(u,h)∈GT
WT (u, h) max
1≤i<j≤N max
1≤t≤T ||cij,t||∞ (B.5)
with
WT (u, h) = √1T h
T −1
X
t=1
Kt,u,h − Kt+1,u,h .
Due to the Lipschitz continuity of the kernel function K(·), we have that
max
(u,h)∈GT
WT (u, h) = O


1
q
T (hmin
T )3

 . (B.6)
Using the triangular inequality yields that
max
1≤t≤T ||cij,t||∞ ≤ max
1≤t≤T
t
X
s=1
veis − Σ1/2
i
t
X
s=1
Zis ∞
+ max
1≤t≤T t( ̄
vei − Σ1/2
i Z ̄i)
∞
+ max
1≤t≤T
t
X
s=1
vejs − Σ1/2
j
t
X
s=1
Zjs ∞
+ max
1≤t≤T t( ̄
vej − Σ1/2
j Z ̄j)
∞
≤ 2 max
1≤t≤T
t
X
s=1
veis − Σ1/2
i
t
X
s=1
Zis ∞
+ 2 max
1≤t≤T
t
X
s=1
vejs − Σ1/2
j
t
X
s=1
Zjs ∞
= 2 max
1≤t≤T
t
X
s=1
veis − Σ1/2
i IB(t)
∞
+ 2 max
1≤t≤T
t
X
s=1
vejs − Σ1/2
j IB(t)
∞
Applying the strong approximation result (B.1) (which is formulated for the Euclidean norm,
but the maximum norm is equivalent to it within the fixed number of dimensions D), we can
infer that
max
1≤i<j≤N max
1≤t≤T ||cij,t||∞ = op T 1/q . (B.7)
Plugging (B.6) and (B.7) into (B.5), we obtain that
max
1≤i<j≤n max
(u,h)∈GT
aij,T (u, h) − bij,T (u, h) ∞ = op


T 1/q
q
T (hmin
T )3

 . (B.8)
Therefore, coming back to (B.4), we obtain that
Ψe T − Φ⋄
T ≤ max
1≤i<j≤N
Σe −1
ij 1 max
1≤i<j≤N max
(u,h)∈GT
aij,T (u, h) − bij,T (u, h) ∞
= Op(1) · op
T 1/q
pT (hmin
T )3
!
= op
T 1/q
pT (hmin
T )3
!
,
34

where we used the fact that max1≤i<j≤N eΣ−1/2
ij 1 = Op(1), since Σi is positive definite with
bounded from ∞ and from 0 eigenvalues for all i according to Assumption (A10).
Hence, we just proved (B.2), i.e., that
|
eΨT − Φ⋄
T | = op


T 1/q
q
T (hmin
T )3

.
Next, we consider Φ⋄
T − ΦT in (B.3). Similarly to (B.4), we have that
Φ⋄
T − ΦT ≤ max
1≤i<j≤N max
(u,h)∈GT
S⋄
ij,T (u, h) − Sij,T (u, h)
≤ max
1≤i<j≤N max
(u,h)∈GT
(
eΣ−1/2
ij − Σ−1/2
ij )bij,T (u, h) ∞
≤ max
1≤i<j≤N max
(u,h)∈GT
bij,T (u, h) ∞ max
1≤i<j≤N
eΣ−1/2
ij − Σ−1/2
ij 1.
First, we want to bound max1≤i<j≤N max(u,h)∈GT bij,T (u, h) ∞:
"
bij,T (u, h)
#
d
=
"
√1T h
T
X
t=1
Σ1/2
i Zit − Z ̄i Kt,u,h − √1T h
T
X
t=1
Σ1/2
j Zjt − Z ̄j Kt,u,h
#
d
=
"
√1T h
T
X
t=1
Kt,u,h − 1
T
T
X
s=1
Ks,u,h Σ1/2
i Zit
#
d
−
"
√1T h
T
X
t=1
Kt,u,h − 1
T
T
X
s=1
Ks,u,h Σ1/2
j Zjt
#
d
∼ N 0, 1
Th
T
X
t=1
Kt,u,h − 1
T
T
X
s=1
Ks,u,h
2
[Σi + Σj]dd
!
.
We want to use standard results on maxima of Gaussian random variables, and for that we
need a uniform bound on the variance. Since [Σi + Σj]dd ≤ C for fixed N and D, we want
to show that 1
Th
PT
t=1 Kt,u,h − 1
T
PT
s=1 Ks,u,h
2
=1
Th
PT
t=1 K2
t,u,h − 1
T 2h
PT
t=1 Kt,u,h
2
≤C
35

for all (u, h). We can regard this value as a Riemann sum. Hence,
lim
T →∞
1
T
T
X
t=1
1
h K2 t/T − u
h − lim
T →∞
1
T
T
X
t=1
√1h K t/T − u
h
!2
= lim
T →∞
1
T
T
X
t=1
1
h K2 t/T − u
h − lim
T →∞
1
T
T
X
t=1
1
h K t/T − u
h
!2
=
Z1
0
1
hK2 z − u
h dz −
Z1
0
√1h K z − u
h dz
2
=
Z (1−u)/h
−u/h
K2(y)dy − h
Z (1−u)/h
−u/h
K (y)dy
!2
≤
Z1
−1
K2(y)dy < ∞,
where we used that K has a compact support [−1, 1] and according to the Assumption
(A13), R 1
−1 K2(y)dy < ∞, and for sufficiently large T , 1
Th
PT
t=1 Kt,u,h − 1
T
PT
s=1 Ks,u,h
2
≤
2
R1
−1 K2(y)dy < C for all (u, h). Therefore, all the coordinates of bij,T (u, h) are normally
distributed random variables with bounded variance. By Assumption (A12) and standard
results on maxima of Gaussian random variables, we have that
max
1≤i<j≤n max
(u,h)∈GT
bij,T (u, h) ∞ = Op(plog T ). (B.9)
Hence, taking into account that || eΣ−1/2
ij − Σ−1/2
ij ||1 = op(ρT ) for all i and j, we have that
Φ⋄
T − ΦT ≤ max
1≤i<j≤N max
(u,h)∈GT
bij,T (u, h) ∞ max
1≤i<j≤N
eΣ−1/2
ij − Σ−1/2
ij 1
= Op(plog T ) · op(ρT ) = op(ρT
plog T ).
This completes the proof of (B.3).
Proof of Proposition A.2. The proof is an application of anti-concentration bounds for Gaus
sian random vectors. We in particular make use of the following anti-concentration inequality
from Nazarov (2003), which can also be found as Lemma A.1 in Chernozhukov et al. (2017).
Lemma A.1. Let Z = (Z1, . . . , Zp)⊤ be a centered Gaussian random vector in Rp such that
E[Z 2
j ] ≥ b for all 1 ≤ j ≤ p and some constant b > 0. Then for every z ∈ Rp and a > 0,
P(Z ≤ z + a) − P(Z ≤ z) ≤ Caplog p,
where the constant C only depends on b.
36

To apply this result, we introduce the following notation: We write x = (u, h) and GT =
{x1, . . . , xp}, where p := |GT | = O(T θ) for some large but fixed θ > 0 by our assumptions.
For k = 1, . . . , p, d = 1, . . . , D and 1 ≤ i < j ≤ N , we further let
Zij,2k−1,d = Σ−1/2
ij bij,T (xk1, xk2) d and Zij,2k,d = − Σ−1/2
ij bij,T (xk1, xk2) d
along with λij,2k−1,d := λij,2k−1 = λ(xk2) and λij,2k,d := λij,2k = λ(xk2), where xk = (xk1, xk2).
Under our assumptions, it holds that E[Zij,l,d] = 0 and E[Z2
ij,l,d] ≥ b > 0 for all i, j, l and d.
First, as before,
"
Σ−1/2
ij bij,T (xk1, xk2)
#
d
∼ N 0, 2
T xk2
T
X
t=1
Kt,xk1,xk2 − 1
T
T
X
s=1
Ks,xk1,xk2
!2 !
.
We want to show that 2
T xk2
PT
t=1 Kt,xk1,xk2 − 1
T
PT
s=1 Ks,xk1,xk2
2
=2
T xk2
PT
t=1 Kt2,xk1,xk2 −
2 T 2xk2
PT
t=1 Kt,xk1,xk2
2
≥ b for all k. As before, we regard this value as a Riemann sum:
lim
T →∞
1
T
T
X
t=1
2
xk2
K2 t/T − xk1
xk2
− lim
T →∞
1
T
T
X
t=1
√2
√xk2
K t/T − xk1
xk2
!2
=2
Z (1−xk1)/xk2
−xk1 /xk2
K2(y)dy − 2xk2
Z (1−xk1)/xk2
−xk1 /xk2
K (y)dy
!2
≥2
Z 4−4xk1
−4xk1
K2(y)dy − 1
2
Z∞
−∞
K (y)dy
2
≥
Z1
−1
K2(y)dy − 1
2 = 2b > 0,
where we used the following facts: xk2 ≤ hmax
T ≤ 1/4 as stated in Assumption (A12), K is a
symmetric function with a compact support [−1, 1], the interval [−4xk1, 4 − 4xk1] fully cov
ers either [−1, 0] or [0, 1] for all xk1 ∈ [0, 1], and according to Assumption (A13), R 1
−1 K2(y)dy−
1
2 > 0. Therefore, for sufficiently large T , we have 2
T xk2
PT
t=1 Kt,xk1,xk2 − 1
T
PT
s=1 Ks,xk1,xk2
2
≥
R1
−1 K2(y)dy − 1
2 /2 = b > 0.
We next construct the random vector Z = (Zij,l,d : 1 ≤ i < j ≤ N, 1 ≤ l ≤ 2p, 1 ≤ d ≤ D)
by stacking the variables Zij,l,d in a certain order (which can be chosen freely) and construct
the vector λ = (λij,l,d : 1 ≤ i < j ≤ N, 1 ≤ l ≤ 2p, 1 ≤ d ≤ D) in an analogous way.
Since the variables Zij,l,d are normally distributed, Z is a Gaussian random vector of length
(N − 1)N pD.
With this notation at hand, we can express the probability P(ΦT ≤ q) as follows for each
37

q ∈ R:
P(ΦT ≤ q) = P max
1≤i<j≤n max
1≤l≤2p max
1≤d≤D Zij,l,d − λij,l ≤ q
= P max
1≤i<j≤n max
1≤l≤2p max
1≤d≤D Zij,l,d − λij,l,d ≤ q
= P Zij,l,d ≤ λij,l,d + q for all (i, j, l, d) = P Z ≤ λ + q .
Consequently,
P |ΦT − x| ≤ δT = P x − δT ≤ ΦT ≤ x + δT
= P ΦT ≤ x + δT − P ΦT ≤ x
+ P ΦT ≤ x − P ΦT ≤ x − δT
= P Z ≤ λ + x + δT − P Z ≤ λ + x
+ P Z ≤ λ + x − P Z ≤ λ + x − δT
≤ 2CδT
plog((N − 1)N pD),
where the last line is by Lemma A.1. With δT = T 1/q
√T (hmin
T )3 + ρT
√log T , this immediately
implies Proposition A.2.
Proof of Proposition 4.2. To proof the result, we first show that
P(ΦT ≤ qT (α)) = 1 − α. (B.10)
We prove (B.10) by contradiction. Suppose (B.10) is false. By definition of qT (α), it holds
that P(ΦT ≤ qT (α)) ≥ 1−α, and thus, there exists ξ > 0 such that P(ΦT ≤ qT (α)) = 1−α+ξ.
Following the proof of Proposition A.2, we have that for any δ > 0,
P(ΦT ≤ qT (α)) − P(ΦT ≤ qT (α) − δ) ≤ 2Cδplog((N − 1)N pD).
Combining this result with P(ΦT ≤ qT (α)) = 1 − α + ξ yields
P(ΦT ≤ qT (α) − δ) ≥ (1 − α) + ξ − 2Cδplog((N − 1)N pD) > (1 − α),
for δ > 0 small enough. This contradicts the definition of qT (α), saying that qT (α) :=
infq∈R{P(ΦT ≤ q) ≥ (1 − α)}. Therefore, by contradiction, (B.10) holds. The result of
38

Proposition 4.2 follows directly now by applying Theorem 4.1.
P( bΨT ≤ qT (α)) − (1 − α) (B.10)
= P( bΨT ≤ qT (α)) − P(ΦT ≤ qT (α))
≤ sup
y∈R
P( bΨT ≤ y) − P(ΦT ≤ y)
Thm. 4.1
= o(1).
Proof of Proposition 4.3. By assumption, there exists a pair (i0, j0) and (u0, h0) ∈ GT with
[u0 − h0, u0 + h0] ⊂ [0, 1] assume that there exists at least one coordinate d0 ∈ {1, . . . , D} such
that
βi0,T (w) − βj0,T (w) d ≥ cT
r log T
T h for all w ∈ [u0 − h0, u0 + h0]. (B.11)
where cT → ∞ as T → ∞. Since
Ψb T ≥ Sˆi0j0 (u0, h0) − λ(h0),
we obtain
P
bΨT ≤ qT (α) ≤ P Sˆi0j0(u0, h0) − λ(h0) ≤ qT (α) .
Thus, it suffices to show that
P Sˆi0j0(u0, h0) − λ(h0) ≤ qT (α) = o(1).
For notational simplicity, we write (i, j, u, h) = (i0, j0, u0, h0) as follows.
Using the representation in Section 3.3,
Sˆij(u, h) = bΣ−1/2
ij
√1T h
T
X
t=1
Xt X′
tβi,T (t/T ) + εit − X′
tβj,T (t/T ) − εjt Kt,u,h
!
∞
.
Hence, we can write
Sˆij(u, h) = AT (u, h) + BT (u, h)
∞
,
with
AT (u, h) := bΣ−1/2
ij
√1T h
T
X
t=1
Xt X ′
t(βi,T (t/T ) − βj,T (t/T )) Kt,u,h,
BT (u, h) := bΣ−1/2
ij
√1T h
T
X
t=1
Xt(εit − εjt) Kt,u,h.
39

The term AT (u, h) represents the deterministic “signal” induced by βi(w) − βj(w), and
BT (u, h) is the stochastic “noise” due to the errors.
For fixed (i, j, u, h), the random vector
√1T h
T
X
t=1
Xt(εit − εjt)Kt,u,h
is a kernel-weighted sum of mean-zero weakly dependent random vectors with finite q-th
moments, by Assumptions (A5) - (A9). Standard moment bounds for such sums (as used in
the proof of Theorem 4.1) yield that its Euclidean norm is Op(1), and hence its l∞-norm is
also Op(1).
The long-run covariance estimators satisfy
∥
bΣ−1/2
ij − Σ−1/2
ij ∥1 = op(1),
and Assumption (A10) implies that the eigenvalues of Σij are bounded away from 0 and ∞.
Thus, multiplication by bΣ−1/2
ij preserves stochastic order, and we obtain
∥BT (u, h)∥∞ = Op(1). (B.12)
Now we look at AT (u, h). By Assumption (A13), there exists cK > 0 such that for all w with
|w − u| ≤ hδK ,
K w−u
h ≥ cK. (B.13)
Consider the signal term before covariance normalization
CT (u, h) := √1T h
T
X
t=1
Xt X ′
t(βi,T (t/T ) − βj,T (t/T )) Kt,u,h.
Since Kt,u,h vanishes outside [u − h, u + h], at most O(T h) summands are nonzero; the factor
1/√T h therefore yields an overall scale √T h.
By Assumption (A11) and standard arguments for kernel-weighted laws of large numbers,
1
Th
T
X
t=1
Xt X ′
tKt,u,h → Γ(u, h),
where Γ(u, h) is positive definite with eigenvalues bounded away from 0 and ∞.
Using (B.11)-(B.13), the boundedness of βi − βj (from the smoothness of βi and βj), and a
40

Riemann-sum approximation, we obtain
1
Th
T
X
t=1
Xt X ′
t(βi,T (t/T ) − βj,T (t/T ))Kt,u,h
∞
≥ c1 cT
r log T
Th
for some constant c1 > 0 and all sufficiently large T , with probability tending to one. Hence
∥CT (u, h)∥∞ =
√
Th 1
Th
T
X
t=1
Xt X ′
t(βi,T (t/T ) − βj,T (t/T ))Kt,u,h
∞
≥ c1
√
T h cT
r log T
Th
= c1 cT
plog T
with probability tending to one.
As before, multiplication by bΣ−1/2
ij preserves the stochastic order, hence, for some constant
c2 > 0,
∥
bΣ−1/2
ij v∥∞ ≥ c2∥v∥∞ for all v ∈ RD,
with probability tending to one. Applying this to v = CT (u, h) and combining with the bound
on ||CT (u, h)||∞ yields
∥AT (u, h)∥∞ = ∥ bΣ−1/2
ij CT (u, h)∥∞ ≥ c3 cT
plog T (B.14)
with probability tending to 1 for some constant c3 > 0.
By the triangle inequality and (B.12), (B.14),
Sˆij(u, h) = ∥AT (u, h) + BT (u, h)∥∞ ≥ ∥AT (u, h)∥∞ − ∥BT (u, h)∥∞ ≥ c3 cT
plog T − Op(1).
Thus, for any ε > 0, there exists T0 such that for all T ≥ T0,
P Sˆij(u, h) ≥ 1
2 c3cT
plog T ≥ 1 − ε. (B.15)
The multiscale correction term is λ(h) = p2 log 1/(2h). Note that for some sufficiently large
constant C we have
λ(h) = p2 log{1/(2h)} ≤
q
2 log{1/(2hmin,T )} ≤ Cplog T . (B.16)
The critical value qT (α) is the (1 − α)-quantile of the Gaussian max-type statistic ΦT defined
41

in (10). Each component of ΦT is the l∞-norm of a Gaussian vector with variance uniformly
bounded and bounded away from zero, and the number of components is of order |GT | × N 2 ×
D = O(T θ) for some θ > 0 by Assumption (A12). Standard Gaussian tail bounds for maxima
imply that
qT (α) = O plog T . (B.17)
Combining (B.16) and (B.17), there exists C4 > 0 such that
qT (α) + λ(h) ≤ C4
plog T for all sufficiently large T. (B.18)
From (B.15) and (B.18), and since cT → ∞, we can choose T large enough such that
1
2 c3 cT > C4,
which implies
P Sˆij(u, h) − λ(h) > qT (α) → 1.
Equivalently,
P Sˆij(u, h) − λ(h) ≤ qT (α) = o(1),
which yields the necessary statement.
Proof of Proposition 4.4. The proof of this result follows the steps in the proof of Proposition
4.5 in Khismatullina and Vogt (2022) and therefore omitted for brevity.
42

References in Appendix
Chernozhukov, V., Chetverikov, D. and Kato, K. (2017). Central limit theorems and
bootstrap in high dimensions. Annals of Probability, 45 2309–2352.
Karmakar, S. and Wu, W. B. (2020). Optimal Gaussian approximation for multiple time
series. Statistica Sinica, 30 1399–1417.
Khismatullina, M. and Vogt, M. (2022). Multiscale comparison of nonparametric trend
curves. arXiv preprint arXiv:2209.10841.
Nazarov, F. (2003). On the maximal perimeter of a convex set in Rn with respect to a
Gaussian measure. In Geometric Aspects of Functional Analysis. Springer, 169–187.
43

---

## Processing Information

- **Processing Library:** Zotero PDFWorker
- **Processing Date:** 2026-02-10T18:15:14.614Z
- **Text Length:** 79423 characters
- **Success:** Text extraction completed
- **PDF Library Used:** Zotero PDFWorker
- **Pages Processed:** 43 of 43
