# PDF Document: Fang and Ridder - 2025 - The Exact Variance of the Average Treatment Effect Estimator in Cluster RCT.pdf

**File Path:** Fang and Ridder - 2025 - The Exact Variance of the Average Treatment Effect Estimator in Cluster RCT.pdf

**Processed Date:** 2026-02-10T18:16:09.269Z

**File Size:** 457.61 KB

**Total Pages:** 43

**Extracted Pages:** 43

**PDF Library:** Zotero PDFWorker

**Attachment Item ID:** 3242

**Title:** The Exact Variance of the Average Treatment Effect Estimator in Cluster RCT

**Collection:** Large Files > Random Papers

---

## Extracted Text Content

The Exact Variance of the Average Treatment Effect
Estimator in Cluster RCT
Yue Fang∗ Geert Ridder†
November 11, 2025
Abstract
In cluster randomized controlled trials (CRCT) with a finite populations, the exact
design-based variance of the Horvitz-Thompson (HT) estimator for the average treat
ment effect (ATE) depends on the joint distribution of unobserved cluster-aggregated
potential outcomes and is therefore not point-identifiable. We study a common two
stage sampling design-random sampling of clusters followed by sampling units within
sampled clusters-with treatment assigned at the cluster level. First, we derive the ex
act (infeasible) design-based variance of the HT ATE estimator that accounts jointly
for cluster- and unit-level sampling as well as random assignment. Second, extending
Aronow et al. [2014], we provide a sharp, attanable upper bound on that variance and
propose a consistent estimator of the bound using only observed outcomes and known
sampling/assignment probabilities. In simulations and an empirical application, confi
dence intervals based on our bound are valid and typically narrower than those based
on cluster standard errors.
1 Introduction
Cluster randomized controlled trials are prevalent in applied economics [Baranov et al.,
2020, Attanasio et al., 2020, Dhar et al., 2022]. Populations are partitioned into natural
groups—cities, villages, schools, classrooms—and randomization occurs at the cluster level
while outcomes are measured on individuals within clusters. We take a finite-population,
design-based perspective with two sources of randomness, following Abadie et al. [2020,
∗School of Management and Economics, The Chinese University of Hong Kong, Shenzhen. Email: fangyue@cuhk.edu.cn.
†Department of Economics, University of Southern California. Email: ridder@usc.edu.
1
arXiv:2511.05801v1 [econ.EM] 8 Nov 2025

2023]: (i) sampling of the empirical study from a finite target population and (ii) treatment
assignment. We explicitly allow for two-stage sampling: first sample clusters, then sample
units within sampled clusters; treatment is assigned at the cluster level.
We analyze design-based inference for the finite-population ATE when exposure is as
signed by cluster and data are collected via two-stage sampling. The estimand is the average
of unit-level potential outcomes in the finite population. Under known sampling and assign
ment probabilities, the Horvitz–Thompson (HT) estimator is unbiased. However, its exact
variance depends on cluster-aggregated potential outcomes that are not jointly observed
(the familiar “cross-arm covariance” problem), so the exact variance cannot be consistently
estimated without additional assumptions.
A finite-population perspective is natural for cluster randomized experiments with two-stage
sampling. It has long roots in survey sampling and has become increasingly important
in causal inference and program evaluation, where researchers seek design-faithful uncer
tainty quantification that conditions on the realized finite population and the actual sam
pling/assignment mechanisms. In parallel, a growing line of work emphasizes finite-sample,
design-based inference for experiments as implemented. For example, Heckman and Kara
pakula [2021] develop worst-case randomization tests for compromised or partially docu
mented experiments, modeling experimenters who “satisfice” on covariate balance and deliv
ering exact small-sample procedures that are robust to rerandomization and post-assignment
transfers. Their framework motivates finite-sample, design-based inference when assignment
protocols are only partially known, and it explicitly targets settings where conventional
asymptotics can be misleading. More broadly, recent contributions clarify when design
versus sampling-based uncertainty is appropriate [Abadie et al., 2020], develop theory for
rerandomization and studentized randomization tests [Morgan and Rubin, 2015, Li et al.,
2018, Chung and Romano, 2016], study experiments “as implemented” rather than “as in
tended” [e.g., Heckman et al., 2010], and assess the reliability of asymptotics in small ex
perimental samples [Young, 2019]. Our paper contributes to this agenda by deriving exact
finite-population variance formulas and sharp (and conservative) variance estimators for
cluster randomized trials with two-stage sampling, and by establishing asymptotic normal
ity under weak moment and heterogeneity conditions—supplying practical, design-based
uncertainty quantification tailored to the settings most common in field experiments.
In particular, we derive the exact design-based variance of the HT estimator of the ATE
that incorporates randomness from cluster sampling, unit sampling, and cluster-level as
signment. Relative to designs without sampling or without clustering, two-stage sampling
introduces identifiable within- and between-cluster variance components. Extending the
sharp-bounds approach of Aronow et al. [2014] to two-stage sampling with cluster assign
2

ment, we obtain a sharp, consistently estimable upper bound for the variance by applying the
bounds to the joint distribution of the estimated cluster averages—thereby embedding both
cluster- and unit-sampling noise. We then construct a consistent estimator of this bound
using only observed data and known inclusion/assignment probabilities. In simulations and
in an application, Wald intervals that plug in our bound estimator are typically tighter than
intervals based on clustered standard errors (Liang–Zeger), which can be overly conservative
in this design, while maintaining nominal coverage.
Our paper is closely connected to the literature on cluster randomization and design-based
inference. A large literature studies experiments in which treatment is assigned at the cluster
level and outcomes are measured on units within clusters. Early work formalized design
based estimands under cluster assignment, and subsequent papers developed randomization
based variance expressions and estimators for cluster-level designs [Middleton and Aronow,
2015, Su and Ding, 2021, Schochet et al., 2022, Wang and Hansen, 2024]. Much of this
literature treats the sample as given, i.e. conditioning on the set of observed clusters and
units and focuses on assignment-induced uncertainty. We differ by explicitly integrating two
stage sampling uncertainty, sampling clusters, then sampling units within sampled clusters,
into the variance of the Horvitz-Thompson (HT) estimator for ATE. This adds variance
components that persist even if assignment were held fixed, and it changes the object that
a variance estimator must target.
Our analysis follows the finite-population, design-based perspective emphasized by Abadie
et al. [2020, 2023] and by the survey-sampling literature on two-stage designs [Ohlsson, 1989,
Chauvet and Valle ́e, 2020]. Those references clarify that sampling and assignment are dis
tinct randomization mechanisms whose contributions to uncertainty should be kept separate.
Relative to these, we specialize to cluster-level assignment and deliver (i) the exact design
based variance of the HT estimator that aggregates both stages of sampling ans treatment
assignment, and (ii) a sharp, consistently estimable upper bound for that variance when it
is not point-identified due to missing cluster-aggregated potential outcomes.
Aronow et al. [2014] show that when cross-potential-outcome terms are unobserved, the
variance of common design-based estimators may not be point-identified but admits a sharp
upper bound under the randomization. We extend that sharp-bounds logit to two-stage sam
pling with cluster-level treatment assignment: the unobserved terms are cluster-aggregated
potential outcomes, and the feasible bound must respect both sampling inclusion probabili
ties and treatment probabilities, being applied to the distribution of the estimated quantities.
Our consistent estimator targets this bound, and hence supports valid yet typically tighter
intervals than generic clustered standard errors in our settings.
Moreover, Bugni et al. [2022] analyze the cluster-randomized experiments from a super
3

population perspective in which potential outcomes and even sample size are random vari
ables. As they note (Remark 3.4), finite-population precision gains stemming from observing
a large share of the population cannot be consistently estimated because counterfactual po
tential outcomes are missing. We adopt the finite-population perspective and show how to
recover a portion of precision gains via a sharp design-based variance bound, i.e., we trade
point identification of the variance for a tight, attainable bound that is consistently estimable
under the actual design.
The HT estimator weights observed outcomes by the inverse of the product of sampling
and assignment probabilities. With cluster-level assignment, each sampled cluster reveals
only one of its two cluster-aggregated potential outcomes, so the covariance term that in
volves the joint distribution of the potential outcomes in the variance cannot be pinned
down. Our sharp bounds identifies the largest variance compatible with the design, the re
alized treatment assignments, and the observed outcomes. Because the bound respects the
actual sampling and assignment probabilities, it is often materially less conservative than
generic clustered standard errors. In practice, many applied papers report cluster standard
errors computed from unit-level regressions, sometimes with or without survey weights. As
emphasized by Abadie et al. [2020, 2023] and others, such standard errors mix model-based
approximation with design-based features and can be over- or under-conservative depend
ing on the design, especially under unequal inclusion probabilities or when the estimand is
finite-population.
Throughout the paper, we consider no interference across clusters, known sampling and
assignment probabilities, possibly unequal across clusters, and treatment assignment at the
cluster level (compliance issues are outside our scope). The sampling scheme is conducted
without replacement at each stage and may allow probability-proportional-to-size draws.
The structure of this paper is as follows. Section 2 formalizes the two-stage sampling and
cluster-level assignment and introduce notation. Section 3 defines the HT estimator for the
finite-population ATE and gives its exact design-based variance. Section 4 develops asymp
totic properties under increasing numbers of clusters in a sequence of finite populations.
Section 5 extends Aronow et al. [2014] to derive a sharp variance bound and proposes a con
sistent estimator of the bound. Section 6 presents Monte Carlo evidence. Section 7 applies
our methods to a school-level cluster randomized controlled trial and compares bound-based
intervals to clustered standard errors.
4

2 Set up
We consider a finite population of size N , consisting of C clusters. Cluster c ∈ {1, 2, . . . , C},
contains Nc units, and we take N , C, and all Nc as fixed and known. This assumption is plau
sible in many field settings (e.g., development economics) where researchers typically gather
population information from the study area, have census lists, or have access to administra
tive records. For asymptotic results, we consider a sequence of such finite populations, with
the number of clusters C going to infinity, allowing for heterogeneous cluster size Nc.
Randomness arises from both sampling and treatment assignment. The sampling process
has two stages. Firstly, S clusters are randomly selected from C clusters without replacement.
Secondly, in a sampled cluster c, nc units are sampled at random from Nc units without
replacement. The treatment assignment is independent of both sampling stages by design.
The treatment is on the cluster level: S1 out of the S sampled clusters are randomly assigned
to treatment without replacement, and the remaining S0 = S − S1 clusters are assigned to
control. All units within a given cluster receive the same treatment status. Only the sampled
units are observed and used for analysis.
In practice, the intervention is delivered to the entire cluster in some experiments, even
though only a subset of units is sampled for measurement; and in some designs, the inter
vention is administered only to the sampled units. Our analysis formally accommodates
both cases. However, we note that in the latter setting, extending conclusions to the entire
cluster may involve extrapolation when considering potential spillover effects–issues that go
beyond the scope of this paper. These considerations are related to the broad literature on
two-stage randomization designs, which explicitly study within-cluster and between-cluster
treatment allocations in the existence of spillover.
Let Yci(1) and Yci(0) denote the potential outcomes for unit i in cluster c under treatment
and control, respectively. The potential outcomes are taken as fixed. We introduce several
indicator variables to describe the sampling and assignment process.
Define Rc ∈ {0, 1} as the indicator variable denoting whether cluster c is sampled (Rc = 1)
or not (Rc = 0) in the first-stage sampling, and Dc ∈ {0, 1} as the treatment assignment
indicator for cluster c, where Dc = 1 if c is assigned to treatment and Dc = 0 if c is assigned
to control. Let Ri|c ∈ {0, 1} be the indicator of whether unit i in cluster c is sampled in the
second-stage sampling, conditional on that cluster c is sampled (Rc = 1) in the first stage.
The overall sampling indicator for unit i in cluster c is then denoted as Rci = RcRi|c.
The sampling and treatment assignment processes induce the following probabilities. The
5

probability that cluster c is sampled is
p = Pr(Rc = 1) = S
C,
where S is the number of sampled clusters out of C total clusters.
Within a sampled cluster c, the probability of unit i, which belongs to cluster c, being
sampled is
πc = Pr(Rci = 1 | Rc = 1) = Pr(Ri|c = 1) = nc
Nc
,
where nc is the number of sampled units within cluster c and Nc is the total number of units
in that cluster.
Conditional on being sampled, the probability that cluster c is assigned to treatment is
q = Pr(Dc = 1 | Rc = 1) = S1
S,
where S1 clusters are assigned to treatment and S0 = S − S1 clusters are assigned to control.
Because both sampling and treatment assignment are carried out without replacement,
the inclusion events are dependent, affecting the joint inclusion probabilities of pairs of
clusters and units. Specifically, the probability that both clusters c and c′ (c ̸= c′) are
sampled is
Pr(Rc = 1, Rc′ = 1) = S(S − 1)
C(C − 1) .
Within cluster c, the probability that both units i and j (i ̸= j) are sampled is
Pr(Ri|c = 1, Rj|c = 1) = nc(nc − 1)
Nc(Nc − 1) .
For units in different clusters, the probability that unit i in cluster c and unit j in cluster c′
are both sampled is
Pr(Ri|c = 1, Rj|c′ = 1) = ncnc′
NcNc′
.
Conditional on both clusters c and c′ being sampled, the probability that both clusters are
assigned to treatment is
Pr(Dc = 1, Dc′ = 1 | Rc = 1, Rc′ = 1) = S1(S1 − 1)
S(S − 1) ,
6

the probability that both clusters are assigned to control is
Pr(Dc = 0, Dc′ = 0 | Rc = 1, Rc′ = 1) = S0(S0 − 1)
S(S − 1) ,
and the probability that c is assigned to treatment and c′ is assigned to control is
Pr(Dc = 1, Dc′ = 0 | Rc = 1, Rc′ = 1) = S1S0
S(S − 1).
In this two-stage design, the sampling process first determines which clusters and which
units within them are observed, while treatment is assigned independently at the cluster
level. The without-replacement nature of both sampling and assignment means that inclu
sion and treatment probabilities for different clusters or units are not independent. The
above probabilities form the basis for the Horvitz-Thompson weighting scheme used in our
estimator and for deriving its exact design-based variance.
3 The Estimator of the ATE and its Exact Variance
3.1 The estimator
The population parameter of interest is the average treatment effect (ATE), defined as
τ= 1
N
C
X
c=1
Nc
X
i=1
(Yci(1) − Yci(0)) , (1)
where Yci(1) and Yci(0) denote the potential outcomes of unit i in cluster c under treatment
and control, respectively. The potential outcomes are treated as fixed in the finite population,
while all randomness arises from the sampling and treatment assignment in the experimental
design.
We estimate τ using the Horvitz-Thompson (HT) estimator:
τb = 1
N
C
X
c=1
"
RcDc
pq
Nc
X
i=1
Ri|cYci
πc
− Rc(1 − Dc)
p(1 − q)
Nc
X
i=1
Ri|cYci
πc
#
.
This estimator is unbiased, because by construction Pr(RcDc = 1) = pq, Pr(Rc(1 − Dc) =
1) = p(1 − q), and Pr(Ri|c = 1) = πc.
Our goal in this section is to calculate the exact variance of τb and then propose a feasible
and consistent estimator of that variance for inference purposes.
7

To simplify notation and account for heterogeneity in cluster sizes, define the average
cluster size
N ̄ = 1
C
C
X
c=1
Nc,
and the average within-cluster sample size
 ̄n = 1
C
C
X
c=1
nc.
The quantity N = CN ̄ represents the total number of units in the population. In contrast,
n = C  ̄n does not correspond to the actual number of sampled units in the realized data,
because only S out of C clusters are drawn in the first stage. Instead, it represents the
design-level number of sampling opportunities, which is the total number of units that would
be sampled if all clusters were included in the first stage. The actual number of sampled
units is random and equals PC
c=1 Rcnc, which depends on which clusters are sampled, i.e.,
the realizations of Rc. This distinction is important because  ̄n and n = C  ̄n are fixed by
design, not random. They are specified in advance to characterize the sampling probabilities
and to simplify expressions of the estimator’s variance. In many applications, especially in
development economics, researchers know all cluster sizes Nc from census or administrative
data, so N ̄ is treated as a known quantity. Also, in practice, the within-cluster sample
sizes nc are almost always determined before the first-stage cluster sampling is carried out.
Typically, one of the following conventions is adopted at the design stage: fixed number of
sampled units per cluster nc =  ̄n; fixed sampling proportion nc = πNc, where π is a constant
sampling rate applied across clusters; predetermined list of sample sizes, where a set of values
nc are chosen in advance based on available information about cluster sizes, survey logistics,
or budget constraints. Because these choices are made ex-ante, before any cluster is actually
sampled, it is natural and appropriate to treat nc,  ̄n, and n = Cn ̄ as known, nonrandom
design parameters.
To derive the exact variance of the ATE estimator in a way that separates contributions
from the two sampling stages, we introduce scaled version of the potential outcomes. For
each unit i in cluster c and treatment status d ∈ {0, 1}, define the scaled potential outcomes
Yeci(d) = Yci(d)
N ̄ .
8

The scaled cluster total is then
Yec(d) =
Nc
X
i=1
Yeci(d) = 1
N ̄
Nc
X
i=1
Yci(d),
and the scaled cluster mean is
 ̄
Ye c(d) = 1
Nc
Yec(d).
The mean of scaled cluster totals equals the mean outcome over all units.
Y ̄ (d) = 1
C
C
X
c=1
Yec(d) = 1
N
C
X
c=1
Nc
X
i=1
Yci(d).
With these definitions, the ATE τ can be expressed as an average of cluster-level treat
ment effects:
τ= 1
C
C
X
c=1
Yec(1) − Yec(0) = 1
C
C
X
c=1
τc,
where τc = Yec(1) − Yec(0) is the treatment effect for cluster c.
We first consider an infeasible benchmark estimator. If all units within sampled clusters
are observed, then the population cluster totals Yec(1) and Yec(0) would be known. In that
case, the infeasible Horvitz-Thompson estimator using the true cluster totals is
τ ̄ = 1
C
C
X
c=1
"
RcDcYec
pq − Rc(1 − Dc)Yec
p(1 − q)
#
, (2)
where Yec = DcYec(1) + (1 − Dc)Yec(0). In this expression, randomness arises only from the
first-stage cluster sampling and treatment assignment of clusters, since no within-cluster
sampling occurs.
In practice, the true cluster totals Yec(d) are not observed because only a subset of units
within each sampled cluster is surveyed. To obtain unbiased estimates of cluster-level totals,
we use a within-cluster Horvitz-Thompson estimator:
b
Ye c =
Nc
X
i=1
Ri|cYeci
πc
=1
N ̄
Nc
X
i=1
Ri|cYci
πc
. (3)
Replacing each unobserved cluster total Yec by its within-cluster estimate b
Ye c yields an equiv
9

alent, cluster-level representation of the overall ATE estimator:
τb = 1
C
C
X
c=1


RcDc b
Ye c
pq − Rc(1 − Dc) b
Ye c
p(1 − q)

 . (4)
This form makes explicit the two distinct sources of randomness in the estimator: between
cluster randomness, which is due to sampling and treatment assignment of clusters; within
cluster randomness, which is due to the second-stage sampling of units used to construct
b
Ye c.
By expressing the estimator in this way, we can cleanly separate the contributions of each
stage to the total design-based variance. The next subsection derives the exact variance of
both τ ̄ (the infeasible estimator) and τb (the feasible estimator with unit sampling).
3.2 The exact variance
We begin by showing that both τ ̄ and τb are unbiased estimators of the average treatment
effect, and then derive their exact variances. The results are summarized in the following
proposition.
Proposition 1. Suppose the first stage sampling probability p = S
C ∈ (0, 1], and the cluster
level treatment assignment probability is q = S1
S ∈ (0, 1). Then both estimators τ ̄ and τb are
unbiased for the finite-population average treatment effect τ :
E [τ ̄] = τ, E [τb] = τ.
The exact variance of the infeasible estimator τ ̄ (which uses true cluster totals) is
Var (τ ̄) = 1
C

 
 
1 C −1
PC
c=1 Yec(1) − Y ̄ (1)
2
pq +
1 C −1
PC
c=1 Yec(0) − Y ̄ (0)
2
p(1 − q) − 1
C −1
C
X
c=1
(τc − τ )2

 
 
.
(5)
When within-cluster unit sampling is also performed, let πc = nc
Nc ∈ (0, 1] denote the second
stage sampling probability and π ̃c = nc−1
Nc−1 . The exact variance of the feasible estimator τb
10

is:
Var (τb) = 1
C

 
 
1 C −1
PC
c=1 Yec(1) − Y ̄ (1)
2
pq +
1 C −1
PC
c=1 Yec(0) − Y ̄ (0)
2
p(1 − q) − 1
C −1
C
X
c=1
(τc − τ )2

 
 
(6)
+1
C2



C
X
c=1
(1 − πc)(1 − π ̃c)
πc(πc − π ̃c)


1 Nc−1
PNc
i=1(Yeci(1) −  ̄
Ye c(1))2
pq +
1 Nc−1
PNc
i=1(Yeci(0) −  ̄
Ye c(0))2
p(1 − q)





.
When only the first-stage sampling of clusters and the treatment assignment are random,
the variance of τ ̄ in (5) can be understood as having three additive components. The first
term is between-cluster variation under treatment. 1
C −1
PC
c=1 Yec(1) −  ̄
Ye (1)
2
measures the
dispersion of the scaled cluster outcomes under treatment. It captures how heterogeneous
treated clusters would be if all could be observed. The second term is between-cluster
variation under control. 1
C −1
PC
c=1 Yec(0) −  ̄
Ye (0)
2
is the analogous quantity for control
clusters. The third term is the adjustment for the covariance between treatment and control
potential outcomes. 1
C −1
PC
c=1(τc −τ )2 equals 1
C −1
PC
c=1 Yec(1) −  ̄
Ye (1) Yec(0) −  ̄
Ye (0) , and
removes the double-counting of variability that arises when the two potential outcomes are
positively correlated within clusters. Intuitively, when clusters that perform well under
control also perform well under treatment, this term reduces the overall variance. The
factors 1/(pq) and 1/(p(1−q)) reflect the design probabilities: smaller sampling or treatment
probabilities increase variance because fewer clusters contribute to information to each term.
If there is no sampling, i.e., S = C and all clusters are observed, our estimator τ ̄ coincides
with the difference-in-means estimator studied by Su and Ding [2021]. The corresponding
variance expression for τ ̄, denoted as Var (τ ̄), is identical to theirs, except that our expression
includes the exact finite population correction factor of 1
C−1 rather than 1
C . Abadie et al.
[2023] studied a difference-in-means estimator but under Bernoulli randomization, where each
cluster is independently assigned to treatment or control. They approximate the variance
by conditioning on the realized number of treated and control units. This yields a variance
expression that is algebraically similar to ours, but omits the finite population correction,
which aligns with the inherent nature of Bernoulli assignment. A similar distinction arises
when only a subset of clusters is sampled in the first stage (S < C). In this case, the
effective weights in the first two variance components of Var (τ ̄) depend on both the cluster
sampling and treatment probabilities-specifically, the products pq and p(1 − q). These terms
capture how the uncertainty from sampling and assignment jointly contributes to the overall
design-based variance.
11

When second-stage sampling is introduced, the true cluster totals Yec are no longer directly
observed; instead, they are estimated from within-cluster samples using b
Ye c. Consequently,
the variance of τb contains additional components that reflect the extra randomness intro
duced by the within-cluster sampling process (πc < 1). Intuitively, because each cluster’s
total outcome is now estimated from a subsample of its units, the precision of b
Ye c depends on
the within-cluster sampling fraction πc = nc/Nc, and the heterogeneity of outcomes among
units in that cluster. These features appear in the additional variance terms involving the
within-cluster variance of scaled outcomes, 1
Nc−1
PNc
i=1 Yeci(d) −  ̄
Ye c(d)
2
, which measure how
dispersed individual outcomes are around the cluster mean.
If all sampled clusters share the same within-cluster sampling i.e. πc = π for all c-then the
adjustment term simplifies to a constant scaling factor. In that case, our variance expressions
Var(τb) coincides with the one derived in Abadie et al. [2023], except that our formulation
explicitly includes finite population correction factors arising from considering sampling and
treatment assignment without replacement.
4 Asymptotic Analysis
We study the asymptotic properties of the Horvitz-Thompson estimator under a sequence of
finite, clustered populations. The number of clusters C grows to infinity, while the number
of units per cluster may either remain fixed or grow with C. This is a finite population
framework in which cluster counts, rather than individual counts, drive asymptotics.
Our asymptotic analysis builds on two complementary strands of the literature. First,
the survey-sampling strand, exemplified by Ohlsson [1989] and Chauvet and Vall ́ee [2020],
establishes central limit theorems for two-stage sampling in finite populations. Second, Li
and Ding [2017] develops a general framework for finite-population asymptotics in design
based causal inference, identifying conditions under which estimators remain asymptotically
normal as the population size grows. Related work in cluster-randomized experiments in
cludes Middleton and Aronow [2015] and Su and Ding [2021], who analyze asymptotics un
der cluster-level treatment assignment, and Abadie et al. [2023], who develop a design-based
framework that explicitly incorporates both clustered sampling and clustered (possibly par
tial) assignment.
Building on these foundations, we establish asymptotic normality for our two-stage
Horvitz–Thompson estimator. To do so, we impose a set of regularity conditions on (i)
moments of potential outcomes, (ii) sampling and treatment probabilities, and (iii) the de
gree of cluster-size heterogeneity. These assumptions are stated next.
12

Assumption 1. 1
N
PC c=1
PNc
i=1 Yci(d)4 = O(1), d = 0, 1.
Assumption 1 imposes a finite fourth-moment bound on unit-level potential outcomes.
It ensures that extremely large or heavy-tailed outcomes do not dominate the behavior
of the estimator. As inSu and Ding [2021], imposing the moment condition at the unit
level ensures that the scaled cluster totals Yec(d) = N ̄ −1 PNc
i=1 Yci(d) are well-behaved. By
contrast, Abadie et al. [2023] assume a stronger uniform boundedness condition on the
potential outcomes—stronger than a finite fourth-moment requirement—thereby excluding
heavy-tailed distributions. Our weaker condition allows for moderate heterogeneity across
units and clusters, provided the overall moment bound holds.
We next state the assumptions on the sampling probabilities and treatment assignment.
Assumption 2. The probability of cluster sampling p = S
C ∈ (0, 1] satisfies p−1 = O Cβ ,
with β ∈ [0, 1/2).
Assumption 3. The probability of treatment q = S1
S ∈ (0, 1).
Assumption 4. Conditional on the cluster c being sampled, nc > 0.
Assumption 2 allows the first-stage sampling rate p to decline with C, but not too quickly.
The restriction p−1 = O(Cβ) with β < 1/2 ensures that the number of sampled clusters
S = pC still grows sufficiently fast to support a central limit theorem. Assumption 3 is
the standard overlap condition, ruling out near-degenerate treatment shares among sampled
clusters. Assumption 4 requires the number of units sampled in the sampled clusters to
be bounded away from 0. This is a minimal requirement preventing empty clusters in the
observed data. In practice, it is usually automatically satisfied since the within-cluster
sample sizes nc are fixed in advance at the design stage.
We also need to control cluster-size heterogeneity, which plays a critical role in establish
ing asymptotic normality. Let ωc = Nc/N ̄ , where N ̄ is the average cluster size, and define
ω = maxc ωc. Here, ωc is cluster c’s relative size compared to the average, while ω captures
the overall degree of heterogeneity in cluster size. If all clusters are of equal size, i.e., Nc = N ̄ ,
then ω = 1. Large values of ω indicate that a few clusters are disproportionately large, which
can dominate the sampling variation and invalidate standard central limit approximations if
left uncontrolled.
Assumption 5. ω = o C 1
3 (1−2β) .
In comparison, Abadie et al. [2023] assumed that maxc Nc
minc Nc < ∞, which implies that cluster
sizes are uniformly bounded relative to each other. Our condition is weaker: we permit some
heterogeneity and even allow the largest cluster size to grow with C, provided it does so slowly
13

enough. When all clusters are sampled (p = 1), our rate condition simplifies to ω = o C1/3 ,
which coincides with the assumption in Su and Ding [2021]. Because our setting includes
cluster sampling, we must simultaneously control the sampling probability p (Assumption
2) and the degree of size heterogeneity ω (Assumption 5). Because our setting includes
cluster sampling, we must simultaneously control the sampling rate: p−1ω3/2 = o C1/2 .
Intuitively, the condition means that as the number of clusters grows, both the sampling
rate and the distribution of cluster sizes must be balanced so that the total information is
not concentrated in a small number of large clusters.
Lemma 1. Under Assumptions 1, 2, 3, and 5, if CVar(τ ̄) ↛ 0 as C → ∞, then (τ ̄ −
τ )/se(τ ̄) →d N (0, 1), where se(τ ̄) = pVar(τ ̄).
The condition CVar(τ ̄) ↛ 0 ensures a non-degenerate design variance, which means
that the variance arising from the first-stage sampling and treatment assignment does not
vanish as the number of clusters grows. This assumption is the finite-population analogue
of requiring that the design provides enough independent information for a central limit
theorem to apply, much as in classical two-stage survey-sampling theory.
Define the across-cluster variance and covariance components:
σ2(1) = 1
C −1
C
X
c=1
Yec(1) − Y ̄ (1)
2
, σ2(0) = 1
C −1
C
X
c=1
Yec(0) − Y ̄ (0)
2
σ2(τ ) = 1
C −1
C
X
c=1
(τc − τ )2 , σ10 = 1
C −1
C
X
c=1
Yec(1) − Y ̄ (1) Yec(0) − Y ̄ (0) .
A sufficient condition for CVar(τ ̄) ↛ 0 is either: (i) σ2(1) ↛ 0 and (1−p)+ λ − 1−q
q ̸= 0,
where λ = σ(0)
σ(1) ; or (ii) σ2(0) ↛ 0 and (1−p)+ λ − q
1−q ̸= 0, where λ = σ(1)
σ(0) . These conditions
ensure that the design variance does not collapse wither because treatment shares become
perfectly balanced (q = 1/2) or because sampling covers all clusters (p = 1) while the treated
and control potential outcomes have co-movements.
To see why the above suffices, suppose σ2(1) ↛ 0 and define λ = σ(0)/σ(1). Using
14

σ2(τ ) = σ2(1) + σ2(0) − 2σ10, we could have
CVar(τ ̄) = 1
pq σ2(1) + 1
p(1 − q) σ2(0) − σ2(τ )
=1
pq σ2(1) + 1
p(1 − q) σ2(0) − σ2(1) + σ2(0) − 2σ10
≥1
pq − 1 σ2(1) + 1
p(1 − q) − 1 λ2σ2(1) − 2λσ2(1)
=1
p(1 − q) − 1 λ2 − 2λ + 1
pq − 1 σ2(1)
where the inequality uses σ10 ≥ −σ(1)σ(0) = −λσ2(1) by Cauchy-Schwarz. The expression
in the bracket, 1
p(1−q) − 1 λ2 − 2λ + 1
pq − 1 , is equal to
qq
1−q λ −
q 1−q q
2
if p = 1; and
it is strictly positive if p < 1.
The proof of Lemma 1 follows by applying the finite-population CLT in Li and Ding
[2017] to the cluster-level Hotvitz-Thompson statistics. The argument parallels Theorem 1
of Su and Ding [2021], who derive the same result for cluster-randomized experiment without
a cluster sampling stage.
We now turn to the feasible estimator τb. Relative to τ ̄, the estimator τb includes second
stage unit sampling, which introduces additional randomness and within-cluster depen
dence. Proving asymptotic normality therefore requires two ingredients: (i) the CLT for
the first-stage component τ ̄ (Lemma 1); (ii) a Lyapunov-type condition ensuring that the
added variability from estimating cluster totals using within-cluster subsamples is asymp
totically negligible—formally analogous to conditions in two-stage survey-sampling CLTs.
Together, these will yield asymptotic normality of τb as C → ∞.
Theorem 1. Under Assumption 1, 2, 3, 4, and 5, and conditions specified in Lemma 1, if
CVar(τ ̄) ↛ 0 as C → ∞, then (τb − τ )/se(τb) →d N (0, 1), where se(τb) = pVar(τb).
Theorem 1 generalizes classical two-stage survey-sampling CLTs [Ohlsson, 1989, Chauvet
and Valle ́e, 2020] to a causal estimand with cluster-level assignment. It also parallels the
main asymptotic normality result of Abadie et al. [2023], who consider clustered sampling
and assignment in a more general design-based framework. Our analysis differs, however,
in focusing specifically on cluster-randomized experiments with explicit two-stage sampling.
Consequently, our rate conditions are expressed in terms of the number of clusters and the
heterogeneity of their sizes, rather than only the total number of sampled units. Abadie
et al. [2023] likewise require the number of sampled clusters to diverge, but because their
framework is broader (not limited to CRTs), their asymptotic statements are framed in a
more general sampling and treatment assignment environment.
15

Lemma 1 and Theorem 1 jointly show that under mild design-based conditions, the
Horvitz–Thompson estimator is asymptotically normal—first when cluster totals are known,
and then when they are estimated via within-cluster sampling. In empirical terms, this result
justifies using standard normal-based inference for two-stage cluster-randomized designs,
provided that the number of sampled clusters is sufficiently large and no small subset of
clusters dominates the sample.
5 Estimators of Exact Variance
In clustered randomized controlled trials, we never observe both Yec(1) or Yec(0) for the same
cluster c. Even without within-cluster subsampling, each cluster reveals only one potential
cluster total. Following Aronow et al. [2014], we construct sharp bounds on the exact variance
of τb.
Throughout, expectations E[·] and covariances are design-based (i.e., taken over the sam
pling and assignment mechanisms). For brevity, define the design covariances
∆1
cc′ = E[RcDcRc′ Dc′ ] − E[RcDc]E[Rc′ Dc′ ],
∆0
cc′ = E[Rc(1 − Dc)Rc′(1 − Dc′)] − E[Rc(1 − Dc)]E[Rc′(1 − Dc′)],
and, for the second stage,
∆ij|c = E[Ri|cRj|c] − E[Ri|c]E[Rj|c].
A convenient rearrangement of the exact variance of τb is
Var (τb) = V1 + V0 + 2
C σ Ye (1), Ye (0) ,
where
V1 = 1
C2
(C X
c=1
C
X
c′=1
∆1
cc′ Yec(1)Yec′ (1)
E[RcDc]E[Rc′Dc′] +
C
X
c=1
Nc
X
i=1
Nc
X
j=1
∆ij|c Yeci (1)Yecj (1)
E[Ri|c]E[Rj|c]
)
,
V0 = 1
C2
(C X
c=1
C
X
c′=1
∆0
cc′ Yec(0)Yec′ (0)
E[Rc(1 − Dc)]E[Rc′(1 − Dc′)] +
C
X
c=1
Nc
X
i=1
Nc
X
j=1
∆ij|c Yeci (0)Yecj (0)
E[Ri|c]E[Rj|c]
)
,
16

and
σ
Ye (1), Ye (0) = 1
C −1
C
X
c=1
Yec(1)Yec(0) − 1
C
C
X
c=1
Yec(1)
!
1
C
C
X
c=1
Yec(0)
!!
.
Here, V1 and V0 collect the first-stage (cluster) contributions together with the second
stage (unit) contributions within each arm. The term σ Ye (1), Ye (0) denotes the cross-arm
covariance of cluster totals, taken across clusters.
With unit-level sampling within the sampled clusters, Yec(1) or Yec(0) cannot be observed
for any c unless the second-stage sampling probability πc = 1. Instead, we only observe the
within-cluster Horvitz-Thompson estimates of the scaled cluster totals, denoted by b
Ye c(d).
If, counterfactually, we could draw independent subsamples of units from each cluster to
estimate both b
Ye c(1) and b
Ye c(0) for the same cluster c, then E b
Ye c(1) b
Ye c′(0) = Yec(1)Yec′(0),
∀c, c′. In that hypothetical setting, a plug-in estimator
Vgar (τb) = Ve1 + Ve0 + 2
Cσ b
Ye (1), b
Ye (0) ,
would be unbiased and consistent for Var (τb). Here,
Ve1 = 1
C2
(C X
c=1
C
X
c′=1
∆1
cc′
b
Ye c(1) b
Ye c′(1)
E[RcDc]E[Rc′Dc′] +
C
X
c=1
Nc
X
i=1
Nc
X
j=1
∆ij|c Ri|c Rj|c Yeci (1)Yecj (1)
E[Ri|cRj|c]E[Ri|c]E[Rj|c]
)
,
Ve0 = 1
C2
(C X
c=1
C
X
c′=1
∆0
cc′
b
Ye c(0) b
Ye c′(0)
E[Rc(1 − Dc)]E[Rc′(1 − Dc′)] +
C
X
c=1
Nc
X
i=1
Nc
X
j=1
∆ij|c Ri|c Rj|c Yeci (0)Yecj (0)
E[Ri|cRj|c]E[Ri|c]E[Rj|c]
)
,
σ
b
Ye (1), b
Ye (0) = 1
C −1
C
X
c=1
b
Ye c(1) b
Ye c(0) − 1
C
C
X
c=1
b
Ye c(1)
!
1
C
C
X
c=1
b
Ye c(0)
!!
.
In practice, however, we cannot observe both potential cluster totals for any given cluster.
With second-stage sampling, each cluster provides only one observed aggregate, either b
Ye c(1)
or b
Ye c(0), depending on its assignment. Formally,
b
Ye c(d) =
Nc
X
i=1
Ri|cYeci(d)
πc
=1
N ̄ sumNc
i=1
Ri|cYeci(d)
πc
, d ∈ {0, 1}.
Hence, Vgar (τb) is infeasible because it relied on cross-arm covariance terms involving
both b
Ye c(1) and b
Ye c(0) for the same c. To address this, we apply Fre ́chet-Hoeffding covariance
bounds proposed by Aronow et al. [2014] to construct an interval estimator for this infeasible
17

variance. These bounds describe the maximal and minimal possible covariance consistent
with the observed marginal distributions of b
Ye c(1) and b
Ye c(0).
We next characterize the maximal and minimal possible covariance between the estimated
cluster aggregates under treatment and control. Define the empirical cumulative distribution
functions (CDFs) of b
Ye c(1) and b
Ye c(0) as
G(y) = 1
C
C
X
c=1
1
b
Ye c(1) ≤ y , F (y) = 1
C
C
X
c=1
1
b
Ye c(0) ≤ y ,
where 1(·) is the indicator function. The corresponding left-continuous inverses (quantile
functions) of these CDFs are defined as
G−1(u) = inf{y : G(y) ≥ u}, F −1(u) = inf{y : F (y) ≥ u}, for u ∈ [0, 1].
Using these marginal distributions, the Fre ́chet-Hoeffding bounds identify the extreme
possible covariances between b
Ye c(1) and b
Ye c(0) compatible with the observed marginals: We
then define the maximal and minimal possible covariances:
Maximal Covariance (Positive Association):
σH b
Ye (1), b
Ye (0) =
Z1
0
G−1(u)F −1(u) du − 1
C
C
X
c=1
b
Ye c(1)
!
1
C
C
X
c=1
b
Ye c(0)
!
.
Minimal Covariance (Negative Association):
σL b
Ye (1), b
Ye (0) =
Z1
0
G−1(u)F −1(1 − u) du − 1
C
C
X
c=1
b
Ye c(1)
!
1
C
C
X
c=1
b
Ye c(0)
!
.
These bounds provide the most precise interval for σ b
Ye (1), b
Ye (0) given the observed
data, without making additional assumptions about the joint distribution of b
Ye (1) and b
Ye (0).
Different from Aronow et al. [2014], we are now constructing bounds on the covariance
between b
Ye c(1) and b
Ye c(0), instead of the covariance between true scaled cluster totals.
By replacing σ b
Ye (1), b
Ye (0) in Vgar (τb) with σH b
Ye (1), b
Ye (0) and σL b
Ye (1), b
Ye (0) re
spectively, we could obtain VgarH (τb) and VgarL (τb), delivering the sharpest bounds on Vgar (τb).
In practice, we do not observe both potential aggregates for any cluster, since we only
observe b
Ye c(1) for treated sampled clusters and b
Ye c(0) for control sampled clusters. We
therefore construct the empirical cumulative distribution functions of the estimated totals
18

b
Ye c(1) and b
Ye c(0) as
Gb(y) = 1
C
C
X
c=1
RcDc
pq 1 b
Ye c(1) ≤ y , Fb(y) = 1
C
C
X
c=1
Rc(1 − Dc)
p(1 − q) 1 b
Ye c(0) ≤ y .
These weights ensure that the empirical distributions of the observed treated and control
clusters estimate the population marginals of b
Ye c(1) and b
Ye c(0). The corresponding left
continuous inverses of Gb and Fb are
Gb−1(u) = inf
n
y : Gb(y) ≥ u
o
=
b
Ye (⌈S1u⌉)(1), Fb−1(u) = inf
n
y : Fb(y) ≥ u
o
=
b
Ye (⌈S0u⌉)(0),
where b
Ye (1)(1) ≤ · · · ≤ b
Ye (S1)(1) and b
Ye (1)(0) ≤ · · · ≤ b
Ye (S0)(0) are the ordered aggregates for
the S1 treated and S0 control clusters.
To approximate the integrals above, let B = {b0, b1, . . . , bB} be the ordered distinct values
in the set {0, 1/S1, 2/S1, . . . , 1} ∪ {0, 1/S0, 2/S0, . . . , 1}, which partitions [0, 1].
Define the corresponding stepwise quantiles
b
Ye [h](1) = b
Ye (⌈S1bh⌉)(1), b
Ye [h](0) = b
Ye (⌈S0bh⌉)(0), h = 1, . . . , B.
Then the sample analogues of the covariance bounds are
σbH b
Ye (1), b
Ye (0) =
B
X
h=1
(bh − bh−1) b
Ye [h](1) b
Ye [h](0) −


1
C
C
X
c=1
RcDc b
Ye c
pq




1
C
C
X
c=1
Rc(1 − Dc) b
Ye c
p(1 − q)

,
σbL b
Ye (1), b
Ye (0) =
B
X
h=1
(bh − bh−1) b
Ye [h](1) b
Ye [B+1−h](0) −


1
C
C
X
c=1
RcDc b
Ye c
pq




1
C
C
X
c=1
Rc(1 − Dc) b
Ye c
p(1 − q)

.
Again, with the first-stage sampling and the treatment assignment, Ve1 and Ve0 is not
directly observed. An unbiased and consistent estimator for Ve1 is
Vb1 = 1
C2
(C X
c=1
C
X
c′=1
∆1
cc′ RcDcRc′ Dc′ b
Ye c b
Ye c′
E[RcDcRc′ Dc′ ]E[RcDc]E[Rc′ Dc′ ]
+
C
X
c=1
RcDc
E[RcDc]
Nc
X
i=1
Nc
X
j=1
∆ij|cRi|cRj|cYeciYecj
E[Ri|cRj|c]E[Ri|c]E[Rj|c]
)
.
19

Similarly, an unbiased and consistent estimator for Ve0 is
Vb0 = 1
C2
(C X
c=1
C
X
c′=1
∆0
cc′Rc(1 − Dc)Rc′(1 − Dc′) b
Ye c b
Ye c′
E[Rc(1 − Dc)Rc′(1 − Dc′)]E[Rc(1 − Dc)]E[Rc′(1 − Dc′)]
+
C
X
c=1
Rc(1 − Dc)
E[Rc(1 − Dc)]
Nc
X
i=1
Nc
X
j=1
∆ij|cRi|cRj|cYeciYecj
E[Ri|cRj|c]E[Ri|c]E[Rj|c]
)
.
The above variance estimators are the so-called Horvitz-Thompson variance estimator, and
the counterparts in survey sampling can be found in Chauvet and Valle ́e [2020]. Each line
mirrors the classic HT variance form: a cluster-level piece that uses pairwise cluster inclusion
covariances ∆d
cc′, and a unit-level piece that uses pairwise unit inclusion covariances ∆ij|c,
with the appropriate design probabilities in the denominators. Under our regular conditions,
these estimators are unbiased for the corresponding variance components and consistent as
C → ∞.
Combining the arm-specific pieces with the sharp covariance bound estimators σbH and
σbL, yields an interval estimator VdarH(τb) and VdarL(τb) as:
VdarH(τb) = Vb1 + Vb0 + 2
C
σbH b
Ye (1), b
Ye (0)
VdarH(τb) = Vb1 + Vb0 + 2
C
σbL b
Ye (1), b
Ye (0) .
Proposition 2. Under Assumption 1 - 5, VdarH(τb) −p→ VgarH(τb) and VdarL(τb) −p→ VgarL(τb) as
C → ∞; that is,
h
VdarL(τb), VdarH(τb)
i
is a consistent estimator of
h
VgarL(τb), VgarH(τb)
i
.
Remark 1. An alternative route is to apply the Aronow et al. [2014] bounds directly to the co
variance of the true (unobserved) cluster totals. This yields variance bounds VarL (τb) , VarH (τb) .
To estimate those bounds in our setting, two adjustments are required: (i) replace the un
observed marginals of those of Yec(d) by the marginals of the estimated cluster totals b
Ye c(d),
which incorporate second-stage within-cluster sampling; and (ii) move from the population
of clusters to the sampled clusters using HT weights, which account for first-stage sampling
and treatment assignment. Operationally, these steps lead to the same feasible interval esti
mators we propose. Under stronger growth conditions, i.e., C → ∞ and minc Nc → ∞ (so
that within-cluster estimation error vanishes and the empirical marginals of b
Ye c(d) converge
to those of Yec(d), the interval estimators converge to VarL (τb) , VarH (τb) .
Our approach, however, deliberately targets the bounds
h
VgarL (τb) , VgarH (τb)
i
defined with
the estimated cluster aggregates. This choice has a practical advantage: it yields consistent
bound estimators without requiring minc Nc → ∞; that is, cluster sizes may remain bounded
20

while the number of clusters grow.
Additionally, dropping the negative term − 1
C −1
PC
c=1 (τc − τ )2 in (6), we could obtain a
conservative part of the exact variance, denoted as Var(τb)consv:
Var (τb)consv = 1
C
1 C −1
PC
c=1 Yec(1) − Y ̄ (1)
2
pq + 1
C2
C
X
c=1
(1 − πc)(1 − π ̃c)
πc(πc − π ̃c)
1 Nc−1
PNc
i=1(Yeci(1) −  ̄
Ye c(1))2
pq
+1
C
1 C −1
PC
c=1 Yec(0) − Y ̄ (0)
2
p(1 − q) + 1
C2
C
X
c=1
(1 − πc)(1 − π ̃c)
πc(πc − π ̃c)
1 Nc−1
PNc
i=1(Yeci(0) −  ̄
Ye c(0))2
p(1 − q) .
If treatment effects are homogeneous across clusters, then Var (τb)consv = Var (τb), this con
servative variance part is exact. An estimator for the above conservative part of the exact
variance is
Vdar(τb)consv = 1
C2
(
1
1 − pq
C
X
c=1
C
X
c′=1
∆1
cc′ RcDcRc′ Dc′ b
Ye c b
Ye c′
E[RcDcRc′ Dc′ ]E[RcDc]E[Rc′ Dc′ ]
+1
1 − p(1 − q)
C
X
c=1
C
X
c′=1
∆0
cc′Rc(1 − Dc)Rc′(1 − Dc′) b
Ye c b
Ye c′
E[Rc(1 − Dc)Rc′(1 − Dc′)]E[Rc(1 − Dc)]E[Rc′(1 − Dc′)] .
Proposition 3. Var(τb) ≤ Var(τb)consv. If the fourth moment of the potential outcomes
is bounded, and C
Sd − 1 σ2 Ye (d) ↛ 0, d = 0, 1, then Vdar(τb)consv is an unbiased and
consistent estimator of Var(τb)consv.
6 Simulation Results
This section investigates the performance of our proposed bound estimators through Monte
Carlo simulations. We compare it against the widely used Liang-Zeger cluster-robust stan
dard error estimator.
For each unit i in cluster c, we generate two independent covariates Xci = (X1ci, X2ci) ∈
(U [0, 1])2, and let γ = (1, 1). We consider four distinct data generating processes that vary
in how heterogeneity and clustering enter the model. They are presented in Table 1. All
noise terms are Guassian with variance 25.
21

Yci(0) Yci(1)
DGP 1 N (γT Xci, 25) N (τ + γT Xci, 25)
DGP 2 N (γT Xci, 25) N (τi + γT Xci, 25)
DGP 3 N (−αc + γT Xci, 25) N (αc + τc + γT Xci, 25)
DGP 4 N (−αc + γT Xci, 25) N (αc + τci + γT Xci, 25)
Table 1: Data Generating Processes
DGP 1 is the benchmark case, corresponding to the constant treatment effect, with
all units sharing the same treatment effect τ = 50. DGP 2 corresponds to the case of
heterogeneous treatment effects across individuals without clustering. Treatment effects
vary randomly across individuals, τi ∼ N (50, 100), but there are no cluster-level shocks.
This mimics a standard i.i.d. setting. DGP 3 depicts cluster-level heterogeneity. Each
cluster c has its own random intercept αc ∼ N (5, 25), and cluster-specific treatment effect
τc ∼ N (20, 100). Units in the same cluster share the same treatment effect, but treatment
effects differ across clusters. DGP 4 reflects both clustered and within-cluster heterogeneity.
Clusters differ in their mean effect τc ∼ N (20, 100), and within each cluster, individuals differ
further via an idiosyncratic spread σ2
c ∼ U [0, 4], and thus have effect τci ∼ N (τc, σ2
c ). This
is the most complex and realistic design, reflecting cases such as school-level interventions
with student-specific idiosyncrasies.
To mimic a two-stage sampling clustered experiment, we consider the following sampling
and treatment assignment mechanisms. We consider the population has total clusters C =
120. We randomly sample S = 80 clusters without replacement. Among these, we randomly
assign S1 = 40 clusters to treatment, and the remaining S0 = 40 clusters to control.
In the second stage sampling, we consider two regimes to determine the number of sam
pled units nc per sampled cluster. The first regime (R1) samples units nc = πNc from each
cluster, with π = 0.8 identical across clusters. Every sampled cluster contributes the same
fraction of its members. The second regime (R2) samples the same number of units, i.e.,
nc =  ̄n = 100, from each cluster. Each cluster contributes the same number of sampled
units, regardless of its true size.
We conduct 1,000 Monte Carlo replications for each DGP and sampling regime. In
each replication, we draw samples, estimate the population ATE using the HT estimator
τb, compute the Monte Carlo standard deviation sbe, the proposed upper bound SE, sbeH(τb),
and the Liang-Zeger cluster-robust SE, sbeLZ(τb), construct 95% confidence intervals based on
each SE and record the coverage and power. All the results are collected in Table 2.
22

Sampling Upper Bound Estimator Liang-Zeger Estimator
Regime τb se(τb) sbeH(τb) coverage power sbeLZ(τb) coverage power
DGP1 R1 50.380 0.412 0.465 97.4% 100.0% 0.457 97.1% 100.0%
R2 50.353 0.483 0.562 97.8% 100.0% 0.535 96.8% 100.0%
DGP2 R1 49,430 1.249 1.322 96.5% 100.0% 1.404 97.0% 100.0%
R2 49.426 1.461 1.580 96.7% 100.0% 1.613 97.1% 100.0%
DGP3 R1 48.790 14.325 16.083 96.6% 89.5% 17.976 98.5% 82.6%
R2 47.515 14.168 16.073 96.8% 87.2% 17.924 98.1% 81.9%
DGP4 R1 56.303 13.273 14.642 96.7% 97.7% 16.277 98.0% 96.1%
R2 55.904 13.239 14.716 96.8% 97.7% 16.331 98.3% 95.4%
Table 2: Simulation Results
When treatment effects are constant (DGP 1) or vary independently across individuals
(DGP 2), both the upper-bound and Liang–Zeger estimators perform almost identically:
coverage rates are near the nominal 95%, estimated SEs are close to the empirical standard
deviation, power is essentially 100% because the true signal is large relative to the sampling
noise. This confirms that our estimator remains valid and does not over- or under-estimate
variance in simple, without-clustering settings.
When treatment effects vary across clusters (DGP 3) or both within and across clusters
(DGP 4), differences emerge: the Liang–Zeger SEs are consistently larger, leading to over
coverage (≈ 98%) and lower power (≈ 82–96%); the upper-bound SEs remain close to the
empirical dispersion, yielding coverage near the nominal 95–97% and higher power (up to +7
percentage points). This behavior aligns with theory: the LZ estimator is known to be con
servative under design-based randomization, while our bound-based estimator incorporates
the attainable negative covariance term, reducing unnecessary conservatism. Comparing R1
(proportional sampling) and R2 (fixed size): Proportional sampling typically yields smaller
standard errors and more stable estimates because sampling intensity scales with cluster size.
Fixed-size sampling oversamples smaller clusters relative to their size, which slightly inflates
the total variance. The performance patterns of both variance estimators are similar across
regimes, but proportional sampling tends to produce marginally more precise inference.
In summary, when treatment effects are clustered or heterogeneous, the proposed bound
based estimator yields tighter and more informative inference than conventional Liang–Zeger
cluster-robust standard errors.
23

7 Application
Cluster randomized controlled trials in development economics often share a common struc
ture: researchers enumerate all clusters in a defined area, randomly assign treatment at the
cluster level, and then sample a subset of individuals within each cluster to measure out
comes. Our empirical illustration applies the proposed variance estimators to a school-based
cluster randomized trial in India, studied by Dhar et al. [2022].
The experiment was implemented in collaboration with the NGO Breakthrough and
evaluated by Dhar et al. [2022]. The program sought to change adolescents’ attitudes to
ward gender equality by integrating discussions on gender norms into the regular school
curriculum. Over roughly two and a half school years, the treatment consisted of a series of
45–minute classroom sessions, accompanied by teacher training and school-wide activities.
The intervention was delivered to students in grades 7 through 10 in government secondary
schools in the state of Haryana.
The study involved 314 schools across four districts, which serve as the natural “clusters”
in our framework. Randomization took place at the school level: 150 schools were assigned
to the treatment group and 164 to the control group. Within each school, the research
team then selected a subsample of students for baseline and follow-up surveys. Among the
students whose parents returned consent forms, approximately 45 students per school were
randomly chosen. This procedure represents the second stage of sampling in our setup, with
cluster-specific inclusion probabilities πc = nc/Nc. Crucially, recruitment and baseline data
collection were conducted blind to treatment status, ensuring that the sampling probabilities
are independent of assignment.
The study collected outcome data at two points in time: the first endline survey oc
curred approximately three and a half months after the program ended, and the second
endline survey was fielded about two to two and a half years later, when most students had
completed grade 11 or 12. For illustration, we focus on several of the key attitudinal out
comes reported in the original paper. These include a gender-attitudes index, a self-reported
behavior index, and individual survey items capturing attitudes toward women’s education
and employment—whether women should be allowed to work outside the home, whether
they should go to college, and whether respondents would oppose women attending college.
Each outcome is coded so that higher values correspond to more gender-equitable attitudes.
This experimental design maps directly onto our two-stage sampling framework. At
the first stage, schools are randomized into treatment and control groups. At the second
stage, students are sampled within schools with known inclusion probabilities. The setting is
therefore an ideal case for applying our variance estimators, which are specifically designed for
24

experiments with cluster-level treatment assignment and within-cluster sampling. We treat
the 314 schools as the finite population of interest, so p = 1 and q = 150/314. Within each
school, we compute Horvitz–Thompson totals using the known sampling rates πc, and we
compare our upper-bound (sharp-bound) variance estimator with the standard Liang–Zeger
(LZ) cluster-robust estimator.
Table 3 presents the results. For each outcome, we report the estimated average treat
ment effect τb, the estimated standard error based on bound variance estimator sbeH(τb), the
corresponding Liang–Zeger standard error sbeLZ(τb), their respective 95% confidence intervals,
and the percentage reduction in confidence-interval width achieved by our estimator.
Dependent Variable τb sbeH(τb) 95% CI sbeLZ(τb) 95% CI Reduction
in CI
Endline 1 Outcomes
Gender attitudes index 0.310 0.061 [0.191,0.429] 0.066 [0.181,0.439] 7.2%
Self-reported behave index 0.317 0.077 [0.167,0.467] 0.084 [0.153,0.481] 8.3%
Women be allowed to work 0.058 0.027 [0.006,0.112] 0.029 [0.000,0.117] 8.0%
Women should go to college 0.070 0.035 [0.001,0.140] 0.039 [
0.006,0.147]
8.9%
Not oppose women in college 0.092 0.031 [0.032,0.152] 0.036 [0.022,0.162] 13.8%
Endline 2 Outcomes
Women be allowed to work 0.093 0.038 [0.018,0.169] 0.043 [0.009.0.177] 10.3%
Not oppose women in college 0.105 0.033 [0.040,0.170] 0.037 [0.032,0.178] 11.0%
Table 3: Application Results
The results show that our bound-based estimator and the Liang–Zeger estimator produce
very similar point estimates and standard errors in this setting, but confidence intervals con
structed with the bound estimator are consistently narrower. For the outcomes considered,
the reduction in interval width ranges from about 7% to 14%. The differences are modest
but systematic, reflecting the conservative nature of cluster-robust standard errors.
Substantively, these results highlight two points. First, the design of this study—cluster
level assignment combined with within-cluster sampling—is exactly the type of setting where
our method is most relevant. Second, even in large, well-balanced experiments with hundreds
of clusters, traditional Liang–Zeger standard errors can remain slightly over-conservative be
cause they do not exploit the structure of the design-based variance. Our estimator achieves
25

modest efficiency gains while maintaining valid coverage.
Overall, this empirical application complements the simulation evidence: when treatment
is assigned at the cluster level and sampling occurs within clusters, the proposed upper
bound variance estimator provides tighter inference than standard clustered standard errors,
without relying on additional modeling assumptions.
8 Conclusion
This paper develops a design-based framework for analyzing cluster randomized experiments
(cluster randomized controlled trials, CRCTs) when both cluster-level assignment and two
stage sampling—of clusters and, within them, individual units—are present. We derive
the exact finite-population variance of the Horvitz–Thompson estimator for the average
treatment effect (ATE) and establish its asymptotic normality under mild assumptions on
outcome moments, sampling probabilities, and cluster-size heterogeneity.
Building on these foundations, we extend the Aronow et al. [2014] sharp variance bounds
to the cluster setting with within-cluster sampling. This yields a sharp, attainable upper
bound for the design variance and a consistent estimator for that bound, along with a
conservative variance estimator that becomes exact when cluster-level treatment effects are
homogeneous. Together, these results bridge classic survey-sampling theory and modern
finite-population causal inference, providing a unified design-based approach to inference in
cluster experiments.
Our simulations and empirical application, using the school-based CRCT of Dhar et al.
[2022], show that the proposed upper-bound variance estimator delivers tighter confidence in
tervals than the conventional Liang–Zeger cluster-robust estimator, while maintaining correct
coverage. The improvement is most pronounced when treatment effects are heterogeneous
and clustered, where standard clustered standard errors tend to be conservative. In such
cases, our estimator captures the attainable negative covariance components that standard
approaches ignore, leading to more efficient inference and higher power.
In summary, the paper contributes (i) exact design-based variance formulas for cluster
level treatment with two-stage sampling, (ii) sharp and conservative variance estimators that
are consistent under the design, and (iii) asymptotic results linking finite-population theory
to practical inference. These tools enable researchers to conduct design-faithful and efficient
uncertainty quantification in cluster randomized experiments.
26

APPENDIX
A Proof
Proof of Proposition 1. We begin with the mean and variance of the infeasible estimator τ ̄.
By (2) and (4),
τ ̄ − τ = 1
C
C
X
c=1
RcDc − pq
pq
Yec(1) − Rc(1 − Dc) − p(1 − q)
p(1 − q)
Yec(0) (A.1)
Only Rc and Dc are random and E[RcDc] = pq, E[Rc(1 − Dc)] = p(1 − q), so that E [τ ̄] = τ .
Next
(τ ̄ − τ )2 = 1
C2
C
X
c=1
RcDc − pq
pq
Yec(1) − Rc(1 − Dc) − p(1 − q)
p(1 − q)
Yec(0)
2
+2
C2
C
X
c=1
c−1
X
c′=1
RcDc − pq
pq
Yec(1) − Rc(1 − Dc) − p(1 − q)
p(1 − q)
Yec(0) ×
Rc′ Dc′ − pq
pq
Yec′(1) − Rc′(1 − Dc′) − p(1 − q)
p(1 − q)
Yec′ (0)
We have
E (RcDc − pq)2 = pq(1 − pq)
E (Rc(1 − Dc) − p(1 − q))2 = p(1 − q)(1 − p(1 − q))
E [(RcDc − pq)(Rc(1 − Dc) − p(1 − q))] = −pqp(1 − q)
E [(RcDc − pq)(Rc′Dc′ − pq)] = ppeqqe − p2q2
E [(RcDc − pq)(Rc′(1 − Dc′) − p(1 − q))] = ppeq(1 − qe) − p2q(1 − q)
E[(Rc(1 − Dc) − p(1 − q))(Rc′(1 − Dc′) − p(1 − q))] = ppe(1 − 2q + qeq) − p2(1 − q)2
with
pe = S − 1
C − 1 qe = S1 − 1
S−1
Note that
1 − 2q + qeq = (S − S1)(S − S1 − 1)
S(S − 1) > 0
if S > 1.
27

The variance is
Var(τ ̄) = 1 − pq
pq
1
C2
C
X
c=1
Yec(1)
2
+ 1 − p(1 − q)
p(1 − q)
1
C2
C
X
c=1
Yec(0)
2
+2
C2
C
X
c=1
Yec(1)Yec(0)
(A.2)
+ p ̃q ̃ − pq
pq
2
C2
C
X
c=1
c−1
X
c′=1
Yec(1)Yec′(1) − pe(1 − qe) − p(1 − q)
p(1 − q)
2
C2
C
X
c=1
c−1
X
c′=1
Yec (1)Yec′ (0)
−
pe(1 − qe) − p(1 − q)
p(1 − q)
2
C2
C
X
c=1
c−1
X
c′=1
Yec(0)Yec′(1) + pe(1 − 2q + qeq) − p(1 − q)2
p(1 − q)2
2
C2
C
X
c=1
c−1
X
c′=1
Yec(0)Yec′ (0)
=1
C

 
 
1 C −1
PC
c=1 Yec(1) −  ̄
Ye c(1)
2
pq +
1 C −1
PC
c=1 Yec(0) −  ̄
Ye c(0)
2
p(q − 1) − 1
C −1
C
X
c=1
(τc − τ )2

 
 
.
Now consider τb. We have
τb − τ = τb − τ ̄ + τ ̄ − τ = 1
C
C
X
c=1

  
RcDc b
Ye c − Yec
pq −
Rc(1 − Dc) b
Ye c − Yec
p(1 − q)

  
+ τ ̄ − τ
Also
E RcDc b
Ye c = E
"
RcDc
Nc
X
i=1
Ri|c
πc
Yeci
#
=E
"
RcDc
Nc
X
i=1
Ri|c
πc
Yeci Rc = 1, Dc = 1
#
pq = Yec(1)pq
In the same way
E Rc(1 − Dc) b
Ye c = p(1 − q)Yec(0)pq
Therefore E [τb − τ ] = 0.
For the variance, we use
Var(τb) = E[(τb − τ ̄)2] + 2E[(τb − τ ̄)(τ ̄ − τ )] + E[(τ ̄ − τ )2]
28

with
E(τb − τ ̄)2] = 1
C2
C
X
c=1
E

   

  
RcDc b
Ye c − Yec
pq −
Rc(1 − Dc) b
Ye c − Yec
p(1 − q)

  
2

   
(A.3)
+2
C2
C
X
c=1
c−1
X
c′=1
E

  

  
RcDc b
Ye c − Yec
pq −
Rc(1 − Dc) b
Ye c − Yec
p(1 − q)

  
×

  
Rc′ Dc′ b
Ye c′ − Yec′
pq −
Rc′(1 − Dc′) b
Ye c′ − Yec′
p(1 − q)

  

  
=1
C2
C
X
c=1

   
E

   
RcDc b
Ye c − Yec
2
p2q2

   
+E

   
Rc(1 − Dc) b
Ye c − Yec
2
p2(1 − q)2

   

   
+2
C2
C
X
c=1
c−1
X
c′=1

  
E

  
RcDcRc′ Dc′ b
Ye c − Yec b
Ye c′ − Yec′
p2q2

  
−E

  
RcDcRc′(1 − Dc′) b
Ye c − Yec b
Ye c′ − Yec′
p2q(1 − q)

  
−E

  
Rc(1 − Dc)Rc′Dc′ b
Ye c − Yec b
Ye c′ − Yec′
p2q(1 − q)

  
+E

  
Rc(1 − Dc)Rc′(1 − Dc′) b
Ye c − Yec b
Ye c′ − Yec′
p2(1 − q)2

  

  
By iterated expectations
E
"
RcDc b
Ye c − Yec
2
#
=E
"
b
Ye c − Yec
2
Rc = 1, Dc = 1
#
pq
29

Further
E
"
b
Ye c − Yec
2
Rc = 1, Dc = 1
#
=E
"
b
Ye c(1) − Yec(1)
2
Rc = 1, Dc = 1
#
=
Nc
X
i=1
E (Ri|c − πc)2
πc2
Yeci(1)
2
+2
Nc
X
i=1
i−1
X
i′=1
E (Ri|c − πc)(Ri′|c − πc)
πc2
Yeci(1)Yeci′ (1)
= 1 − πc
πc
Nc
X
i=1
Yeci(1)
2
+ 2 πec − πc
πc
Nc
X
i=1
i−1
X
i′=1
Yeci(1)Yeci′ (1)
E

   
RcDc b
Ye c − Yec
2
p2q2

   
= (1 − πc)(1 − π ̃c)
pqπc(πc − π ̃c)


1
Nc − 1
Nc
X
i=1
Yeci(1) −  ̄
Ye c(1)
!2
 (A.4)
By iterated expectations
E
"
Rc(1 − Dc) b
Ye c − Yec
2
#
=E
"
b
Ye c − Yec
2
Rc = 1, Dc = 0
#
p(1 − q)
and
E
"
b
Ye c − Yec
2
Rc = 1, Dc = 0
#
= 1 − πc
πc
Nc
X
i=1
Yeci(0)
2
+ 2 πec − πc
πc
Nc
X
i=1
i−1
X
i′=1
Yeci (0)Yeci′ (0)
E

   
Rc(1 − Dc) b
Ye c − Yec
2
p2(1 − q)2

   
= (1 − πc)(1 − π ̃c)
p(1 − q)πc(πc − π ̃c)


1
Nc − 1
Nc
X
i=1
Yeci(0) −  ̄
Ye c(0)
!2

(A.5)
30

By iterated expectations
E RcDcRc′ Dc′ b
Ye c − Yec b
Ye c′ − Yec′
=E
"
b
Ye c − Yec b
Ye c′ − Yec′ Rc = 1, Dc = 1, Rc′ = 1, Dc′ = 1
#
p
peqqe
and
E
"
b
Ye c − Yec b
Ye c′ − Yec′ Rc = 1, Dc = 1, Rc′ = 1, Dc′ = 1
#
=E b
Ye c(1) − Yec(1) b
Ye c′(1) − Yec′(1) Rc = 1, Dc = 1, Rc′ = 1, Dc′ = 1
=E
" Nc
X
i=1
Ri|c − πc
πc
Yeci(1)
! Nc′
X
i=1
Ri|c′ − πc′
πc′
Yec′i(1)
!#
=0
In the same way
E RcDcRc′(1 − Dc′) b
Ye c − Yec b
Ye c′ − Yec′ = 0
E Rc(1 − Dc)Rc′Dc′ b
Ye c − Yec b
Ye c′ − Yec′ = 0
E Rc(1 − Dc)Rc′(1 − Dc′) b
Ye c − Yec b
Ye c′ − Yec′ = 0
Putting these together,
E(τb − τ ̄)2] (A.6)
=1
C2



C
X
c=1
(1 − πc)(1 − π ̃c)
πc(πc − π ̃c)


1 Nc−1
PNc
i=1(Yeci(1) −  ̄
Ye c(1))2
pq +
1 Nc−1
PNc
i=1(Yeci(0) −  ̄
Ye c(0))2
p(1 − q)





.
31

Finally, for the cross-product
E[(τ ̄ − τ )(τb − τ ̄)] =E
"
1
C
C
X
c=1
RcDc − pq
pq
Yec(1) − Rc(1 − Dc) − p(1 − q)
p(1 − q)
Yec(0)
!
×

  
1
C
C
X
c=1

  
RcDc b
Ye c − Yec
pq −
Rc(1 − Dc) b
Ye c − Yec
p(1 − q)

  

  

  
=E

  
1
C
C
X
c=1
RcDc − pq
pq
Yec(1)
!

  
1
C
C
X
c=1
RcDc b
Ye c − Yec
pq

  

  
−E

  
1
C
C
X
c=1
RcDc − pq
pq
Yec(1)
!

  
1
C
C
X
c=1
Rc(1 − Dc) b
Ye c − Yec
p(1 − q)

  

  
−E

  
1
C
C
X
c=1
Rc(1 − Dc) − p(1 − q)
p(1 − q)
Yec(0)
!

  
1
C
C
X
c=1
RcDc b
Ye c − Yec
pq

  

  
+E

  
1
C
C
X
c=1
Rc(1 − Dc) − p(1 − q)
p(1 − q)
Yec(0)
!

  
1
C
C
X
c=1
Rc(1 − Dc) b
Ye c − Yec
p(1 − q)

  

  
Now by iterated expectations and because E[Rc′Dc′|Rc = 1, Dc = 1] = peqe,
E (RcDc − pq)RcDc b
Ye c − Yec = E b
Ye c(1) − Yec(1) |Rc = 1, Dc = 1 (1 − pq)pq = 0
E (Rc′Dc′ − pq)RcDc b
Ye c − Yec = E b
Ye c(1) − Yec(1) |Rc = 1, Dc = 1 (1 − pq)pq = 0
E (Rc′Dc′ − pq)Rc(1 − Dc) b
Ye c − Yec = E b
Ye c(0) − Yec(0) |Rc = 1, Dc = 0 (1−pq)pq = 0
32

Summarizing all the above terms, we could obtain
Var (τb) = 1
C

 
 
1 C −1
PC
c=1 Yec(1) − Y ̄ (1)
2
pq +
1 C −1
PC
c=1 Yec(0) − Y ̄ (0)
2
p(1 − q) − 1
C −1
C
X
c=1
(τc − τ )2

 
 
+1
C2



C
X
c=1
(1 − πc)(1 − π ̃c)
πc(πc − π ̃c)


1 Nc−1
PNc
i=1(Yeci(1) −  ̄
Ye c(1))2
pq +
1 Nc−1
PNc
i=1(Yeci(0) −  ̄
Ye c(0))2
p(1 − q)





.
Proof of Lemma 1. Under the assumption that ω = o C 1
3 (1−2β) and 1/p = C/S = O Cβ ,
we could have S−1 maxc Yec(d)2 = o(1):
S−1 mcax
Yec(d)2 = S−1 1
C mcax
Yec(d)4
1/2
C 1/2
Assuming that 1
N
PC c=1
PNc
i=1 Yci(d)4 = O(1), we could obtain
1
C mcax
Yec(d)4 ≤ 1
C
C
X
c=1
Nc
X
i=1
Yci(d) N ̄
!4
≤1
CN ̄ 4
C
X
c=1
N3
c
Nc
X
i=1
Yci(d)4
≤1
CN ̄ mcax
Nc N ̄
3C
X
c=1
Nc
X
i=1
Yci(d)4
= ω3 1
N
C
X
c=1
Nc
X
i=1
Yci(d)4 = O ω3
Therefore, S−1 maxc Yec(d)2 = O S−1C1/2ω3/2 = o(1).
If σ2(1) ↛ 0 and (1 − p) λ − 1−q
q ̸= 0, where λ = σ(0)
σ(1) ; or if σ2(0) ↛ 0 and (1 −
p) λ − q
1−q ̸= 0, where λ = σ(1)
σ(0) , we could have CVar(τ ̄) ↛ 0, then the asymptotic
normality of τ ̄ follows from Lemma A.2., Theorem 1 in Su and Ding [2021] and Theorem 1
in Li and Ding [2017].
Proof of Theorem 1. Theorem 1 follows from Theorem 2.1 and Remark 2.4 in Ohlsson [1989]
if we could prove conditions (C1), (C2), and (2.8). With our notations, these conditions can
33

be written respectively as
τ ̄ − τ
pVar(τ ̄)
→d N (0, 1) (A.7)
PC
c=1 E Θb c − eΘc
4
(Var (τb))2
p → 0 (A.8)
E [RcRc′] − E [Rc] E [Rc′] ≤ 0, c ̸= c′ (A.9)
where bΘc = 1
C
RcDcYbe c
pq − Rc(1−Dc)Ybe c
p(1−q) , eΘc = 1
C
RcDcYec
pq − Rc(1−Dc)Yec
p(1−q) , and b
Ye c = PNc
i=1
Yci Ri|c
N ̄ πc ,
Yec = PNc
i=1
YN ̄ci .
Condition A.7 has been verified in Lemma 1, and Condition A.9 is satisfied naturally
in this design of simple sampling and random assignment without replacement. It remains
to prove Condition A.8. Let bΘc1 = 1
C
RcDcYbe c
pq , bΘc0 = 1
C
Rc(1−Dc)Ybe c
p(1−q) , eΘc1 = 1
C
Rc Dc Yec
pq , Θe c0 =
1 C
Rc(1−Dc)Yec
p(1−q) .
E
Θb c − eΘc
4
= E bΘc1 − Θe c1 − bΘc0 − Θe c0
4
= E bΘc1 − Θe c1
4
+
Θb c0 − eΘc0
4
E
Θb c1 − eΘc1
4
=1
C4 E


Nc
X
i=1
Ri|c − πc
πc
Yeci(1)
!4

=1
C4
( Nc
X
i=1
E[w4
ci]Yeci(1)4 + 4
Nc
X
i=1
X
j̸=i
E[w3
ciwcj]Yeci(1)3Yecj(1) + 3
Nc
X
i=1
X
j̸=i
E[w2
ciw2
cj ]Yeci (1)2 Yecj (1)2
+6
Nc
X
i=1
X
j̸=i
X
k̸=i̸=j
E[w2
ci wcj wck ]Yeci (1)2 Yecj (1)Yeck (1)
+
Nc
X
i=1
X
j̸=i
X
k̸=i̸=j
X
l̸=i̸=j̸=k
E[wci wcj wck wcl ]Yeci (1)Yecj (1)Yeck (1)Yecl (1)
)
34

where wci = Ri|c−πc
πc
E[w4
ci] = 1 − 4πc + 6π2
c − 4π3
c
πc3
E[w3
ciwcj ] = ∆ij|c − 3∆ij|cπc + 3∆ij|cπ2
c − π2
c + 3π3
c − 3π4
c
πc4
E w2
ciw2
cj = ∆ij|c − 4∆ij|cπc + 4∆ij|cπ2
c + 2π3
c − 3π4
c
πc4
E[w2
ciwcj wck] = ∆ijk|c − 2∆ijk|cπc + 5∆ij|cπ2
c − 2∆ij|cπc + π3
c − 3π4
c
πc4
E[wciwcjwckwcl] = ∆ijkl|c − 4∆ijk|cπc + 6∆ij|cπ2
c − 3π4
c
πc4
where ∆ij|c = E[Ri|cRj|c] = nc(nc−1)
Nc(Nc−1) , ∆ijk|c = E[Ri|cRj|cRk|c] = nc(nc−1)(nc−2)
Nc(Nc−1)(Nc−2) , and ∆ijkl|c =
E[Ri|cRj|cRk|cRl|c] = nc(nc−1)(nc−2)(nc−3)
Nc(Nc−1)(Nc−2)(Nc−3) .
Nc
X
i=1
X
j̸=i
X
k̸=i̸=j
X
l̸=i̸=j̸=k
E[wci wcj wck wcl ]Yeci (1)Yecj (1)Yeck (1)Yecl (1)
≤ E[wciwcjwckwcl] N 3
c N ̄ 4
Nc
X
i=1
Yci(1)4.
Then
C2
C
X
c=1
E
Θb c − eΘc
4
= O C−2
C
X
c=1
N3
c N ̄ 4
Nc
X
i=1
Yci(1)4
!
≤ O C−1 ω3 1
C N ̄
C
X
c=1
Nc
X
i=1
Yci(1)4
!
= o C−2
3 (1−2β)
under the assumption that ω = O C 1
3 (1−2β) .
And since C2Var (τb)2 ≥ (C−S1)σ2(Ye (1))
S1 + (C−S0)σ2(Ye (0))
S0 + 2σ Ye (1), Ye (0)
2
is bounded
away from 0, we have
PC
c=1 E Θb c − eΘc
4
Var(τb)2 → 0.
35

All three conditions are verified.
Proof of Proposition 2. Under the notation
Vgar (τb) = Ve1 + Ve0 + 2
Cσ b
Ye (1), b
Ye (0)
VgarH (τb) = Ve1 + Ve0 + 2
C σH b
Ye (1), b
Ye (0) , VgarL (τb) = Ve1 + Ve0 + 2
C σL b
Ye (1), b
Ye (0)
VdarH (τb) = Vb1 + Vb0 + 2
C
σbH b
Ye (1), b
Ye (0) , VdarL (τb) = Vb1 + Vb0 + 2
C
σbL b
Ye (1), b
Ye (0)
we would like to prove that
Vb1
p → Ve1, Vb0
p → Ve0
σbH b
Ye (1), b
Ye (0) p → σH b
Ye (1), b
Ye (0) , σbL b
Ye (1), b
Ye (0) p → σL b
Ye (1), b
Ye (0)
Conditional on the second-stage sampling,
E
"
Vb1 b
Ye c(1)
C
c=1
#
=E


1
C2
C
X
c=1
C
X
c′=1
∆1
cc′ RcDcRc′ Dc′ b
Ye c b
Ye c′
E [RcDcRc′Dc′] E [RcDc] E [Rc′Dc′]
b
Ye c(1)
C
c=1


+E
"
1
C2
C
X
c=1
RcDc
E [RcDc]
Nc
X
i=1
Nc
X
j=1
∆c
ij Ri|cRj|cYciYcj
E Ri|cRj|c E Ri|c E Rj|c
b
Ye c(1)
C
c=1
#
=E


1
C2
C
X
c=1
C
X
c′=1
∆1
cc′ RcDcRc′ Dc′ b
Ye c(1) b
Ye c′(1)
E [RcDcRc′Dc′] E [RcDc] E [Rc′Dc′]
b
Ye c(1)
C
c=1


+E
"
1
C2
C
X
c=1
RcDc
E [RcDc]
Nc
X
i=1
Nc
X
j=1
∆c
ij Ri|c Rj|c Yci (1)Ycj (1)
E Ri|cRj|c E Ri|c E Rj|c
b
Ye c(1)
C
c=1
#
=1
C2


C
X
c=1
C
X
c′=1
∆1
cc′
b
Ye c(1) b
Ye c′(1)
E [RcDc] E [Rc′Dc′] +
C
X
c=1
Nc
X
i=1
Nc
X
j=1
∆c
ij Ri|c Rj|c Yci (1)Ycj (1)
E Ri|cRj|c E Ri|c E Rj|c


=
Ve1
36

E
"
Vb1 − Ve1
2
b
Ye c(1)
C
c=1
#
=E
"
1
C2
C
X
c=1
C
X
c′=1
RcDcRc′ Dc′
E [RcDcRc′Dc′] − 1 ∆1
cc′
b
Ye c b
Ye c′
E [RcDc] E [Rc′Dc′]
+
C
X
c=1
RcDc
E[RcDc] − 1
Nc
X
i=1
Nc
X
j=1
∆ij|cRi|cRj|cYciYcj
E[Ri|cRj|c]E[Ri|c]E[Rj|c]
!2
b
Ye c(1)
C
c=1
#
=1
C4 E
(


C
X
c=1
C
X
c′=1
RcDcRc′ Dc′
E [RcDcRc′Dc′] − 1 ∆1
cc′
b
Ye c(1) b
Ye c′(1)
E [RcDc] E [Rc′Dc′]


2
+2


C
X
c=1
C
X
c′=1
RcDcRc′ Dc′
E [RcDcRc′Dc′] − 1 ∆1
cc′
b
Ye c(1) b
Ye c′(1)
E [RcDc] E [Rc′Dc′]


×
C
X
c=1
RcDc
E[RcDc] − 1
Nc
X
i=1
Nc
X
j=1
∆ij|c Ri|c Rj|c Yci (1)Ycj (1)
E[Ri|cRj|c]E[Ri|c]E[Rj|c]
!
+
C
X
c=1
RcDc
E[RcDc] − 1
Nc
X
i=1
Nc
X
j=1
∆ij|c Ri|c Rj|c Yci (1)Ycj (1)
E[Ri|cRj|c]E[Ri|c]E[Rj|c]
!
b
Ye c(1)
C
c=1
)
For simplicity, denote Γcc′ = ∆1
cc′
Ybe c(1)Ybe c′ (1)
E[RcDc]E[Rc′ Dc′ ] , Λc = PNc
i=1
PNc j=1
∆ij |c Ri|c Rj |c Yci Ycj
E[Ri|c Rj |c ]E[Ri|c ]E[Rj |c ]
E
"C X
c=1
C
X
c′=1
RcDcRc′ Dc′
E [RcDcRc′ Dc′ ] − 1 Γcc′
!C X
c′′=1
C
X
c′′′ =1
Rc′′ Dc′′ Rc′′′ Dc′′′
E [Rc′′ Dc′′ Rc′′′ Dc′′′ ] − 1 Γc′′c′′′
!
b
Ye c(1)
C
c=1
#
=E
"C X
c=1
C
X
c′=1
C
X
c′′=1
C
X
c′′′ =1
RcDcRc′ Dc′
E [RcDcRc′ Dc′ ] − 1 Rc′′ Dc′′ Rc′′′ Dc′′′
E [Rc′′ Dc′′ Rc′′′ Dc′′′ ] − 1 Γcc′ Γc′′c′′′ b
Ye c(1)
C
c=1
#
=2
C
X
c=1
C
X
c′=1
E[RcDcRc′ Dc′ ]
E [RcDcRc′Dc′ ]2 − 1 Γ2
cc′ + 4
C
X
c=1
C
X
c′=1
X
c′′̸=c,c′
E[RcDcRc′ Dc′ Rc′′ Dc′′ ]
E [RcDcRc′ Dc′ ] E [RcDcRc′′ Dc′′ ] − 1 Γcc′ Γcc′′
=2
C
X
c=1
C
X
c′=1
1
E[RcDcRc′Dc′] − 1 Γ2
cc′ + 4
C
X
c=1
C
X
c′=1
X
c′′̸=c,c′
E[RcDcRc′ Dc′ Rc′′ Dc′′ ]
E[RcDcRc′ Dc′ ]E[RcDcRc′′ Dc′′ ] − 1 Γcc′ Γcc′′
37

1
C4
C
X
c=1
C
X
c′=1
1
E[RcDcRc′Dc′] − 1 Γ2
cc′
=
C
X
c=1
1 − pq
pq
1 − pq
pq
b
Ye c(1)2
2
+
C
X
c=1
X
c′̸=c
1
pqp ̃q ̃ − 1 p ̃q ̃ − pq
pq
b
Ye c(1) b
Ye c′(1)
2
=1
C4
1 − pq
pq
3C
X
c=1
b
Ye c(1)4 + 1
pqp ̃q ̃ − 1 p ̃q ̃ − pq
pq
2C
X
c=1
b
Ye c(1)2
C
X
c′=1
b
Ye c′(1)2 − b
Ye c(1)2
!!
≤1
C4
1 − pq
pq
3C
X
c=1
b
Ye c(1)4 + 1
pqp ̃q ̃ − 1 p ̃q ̃ − pq
pq
2
(C − 1)
C
X
c=1
b
Ye c(1)4
!
=1
C4
1 − pq
pq
3 S1C
(S1 − 1)(C − 1)
C
X
c=1
b
Ye c(1)4
≤1
C4
1 − pq
pq
3 S1C
(S1 − 1)(C − 1)
C
X
c=1
N3
c
N ̄ 4πc4
Nc
X
i=1
Y4
ci
≤C−3 1 − pq
pq
3 S1C
(S1 − 1)(C − 1) ω3 mcin π−4
c
1
N
C
X
c=1
Nc
X
i=1
Y4
ci = o C−2+β mcin π−4
c
1
C4
C
X
c=1
C
X
c′=1
X
c′′̸=c,c′
E[RcDcRc′ Dc′ Rc′′ Dc′′ ]
E[RcDcRc′ Dc′ ]E[RcDcRc′′ Dc′′ ] − 1 Γcc′ Γcc′′
≤1
C4
C
X
c=1
X
c′̸=c
pqp ̃q ̃
pqpqp ̃q ̃ − 1 1 − pq
pq
b
Ye c(1)2 b
Ye c′(1) b
Ye c′′ (1)
+1
C4
C
X
c=1
X
c′̸=c
X
c′′̸=c′̸=c
pqp ̃q ̃p ̃ ̃q ̃ ̃
(pqp ̃q ̃)2 − 1 p ̃q ̃ − pq
pq
2
b
Ye c(1)2 b
Ye c′(1) b
Ye c′′ (1)
!
≤1
C4
1 − pq
pq
3C
X
c=1
b
Ye c(1)4 + 1
C4
1 − pq
pq
3 S1C
(S1 − 1)(C − 1)
C
X
c=1
b
Ye c(1)4
=o C−2+β mcin π−4
c
38

E
"C X
c=1
C
X
c′=1
RcDcRc′ Dc′
E [RcDcRc′ Dc′ ] − 1 Γcc′
!C X
c=1
RcDc
E[RcDc] − 1 Λc
!
b
Ye c(1)
C
c=1
#
=E
"C X
c=1
C
X
c′=1
C
X
c′′′ =1
RcDcRc′ Dc′
E [RcDcRc′ Dc′ ] − 1 Rc′′′ Dc′′′
E[Rc′′′ Dc′′′ ] − 1 Γcc′ Λc′′′ b
Ye c(1)
C
c=1
#
=2
C
X
c=1
C
X
c′=1
E[RcDcRc′ Dc′ ]
E [RcDcRc′Dc′] E[RcDc] − 1 Γcc′Λc
=2
C
X
c=1
C
X
c′=1
1
pq − 1 Γcc′Λc
Notice that |Λc| ≤ PNc
i=1
PNc j=1
|
Yeci(1)||Yecj (1)|
πc2 ≤ Nc
PNc
i=1 Yeci(1)2
πc2 Therefore,
1
C4
C
X
c=1
C
X
c′=1
1
pq − 1 Γcc′Λc
≤1
C4
C
X
c=1
1 − pq
pq
2
b
Ye c(1)2 Nc
PNc
i=1 Yeci(1)2
πc2
+
C
X
c=1
X
c′̸=c
1 − pq
pq
p ̃q ̃ − pq
pq
b
Ye c(1) b
Ye c′(1) Nc
PNc
i=1 Yeci(1)2
πc2
!
≤C−3 1 − pq
pq
2
ω3 mcin π−4
c
1
N
C
X
c=1
Nc
X
i=1
Y4
ci = o C−2 mcin π−4
c
E
"C X
c=1
RcDc
E[RcDc] − 1 Λc
!C X
c′=1
Rc′ Dc′
E[Rc′ Dc′ ] − 1 Λc′
!
b
Ye c(1)
C
c=1
#
=E
"C X
c=1
C
X
c′=1
RcDc
E[RcDc] − 1 Rc′Dc′
E[Rc′ Dc′ ] − 1 ΛcΛc′ b
Ye c(1)
C
c=1
#
=
C
X
c=1
E[RcDc]
E[RcDc]2 − 1 Λ2
c=
C
X
c=1
1
pq − 1 Λ2
c
1
C4
C
X
c=1
1
pq − 1 Λ2
c≤ 1
C4
1 − pq
pq ω3 mcin π−4
c
C
X
c=1
Nc
X
i=1
Y4
ci = o C−2−β mcin π−4
c
Summing the above, we have E
"
Vb1 − Ve1
2
b
Ye c(1)
C
c=1
#
= o C−2+β , therefore, Vb1 → Ve1
39

in probability. Similarly, it can be shown that Vb0 → Ve0 in probability.
Proof of Proposition 3. For the treated part, we have
E


1
C2
1
1 − pq
C
X
c=1
C
X
c′=1
∆1
cc′ RcDcRc′ Dc′ b
Ye c b
Ye c′
E[RcDcRc′ Dc′ ]E[RcDc]E[Rc′ Dc′ ]


=1
C2(1 − pq)
(
E


C
X
c=1
(E[RcDc] − E[RcDc]2) E[RcDc]
E[RcDc]E[RcDc]2
Nc
X
i=1
Ri|c
πc
Yeci(1)
!2

+
C
X
c=1
X
c′̸=c
(E[RcDcRc′Dc′ − E[RcDc]E[Rc′Dc′]) E[RcDcRc′Dc′]
E[RcDcRc′ Dc′ ]E[RcDc]E[Rc′ Dc′ ]
Nc
X
i=1
Ri|c
πc
Yeci(1)
! Nc′
X
i′=1
Ri′|c′
πc′
Yec′i′ (1)
!)
=1
C2(1 − pq)
(C X
c=1
1 − pq
pq
" Nc
X
i=1
1
πc
Yeci(1)2 +
Nc
X
i=1
X
j̸=i
π ̃c
πc
Yeci (1)Yecj (1)
#
+
C
X
c=1
X
c′̸=c
p ̃q ̃ − pq
pq
Yec(1)Yec′ (1)
)
=1
C2(1 − pq)
(C X
c=1
1 − pq
pq
"
1 − π ̃c
πc
Nc
X
i=1
Yeci(1)2 + π ̃c
πc
Yec(1)2
#
+ pq − 1
pq
1
C −1


C
X
c=1
Yec(1)
!2
−
C
X
c=1
Yec(1)2





=1
C 2 pq
(C X
c=1
"
1 − π ̃c
πc
Nc
X
i=1
Yeci(1)2 + π ̃c
πc
Yec(1)2 − Yec(1)2
#
+C
C −1
"C X
c=1
Yec(1)2 − C  ̄
Ye (1)2
#)
=1
C2
C
X
c=1
(1 − π ̃c)(1 − πc)
πc(πc − π ̃c)
1 Nc−1
PNc
i=1 Yeci(1) −  ̄
Ye c(1)
2
pq + 1
C
1 C −1
PC
c=1 Yec(1) −  ̄
Ye (1)
2
pq .
Similarly, for the control part, we have
E


1
C2
1
1 − p(1 − q)
C
X
c=1
C
X
c′=1
∆1
cc′Rc(1 − Dc)Rc′(1 − Dc′) b
Ye c b
Ye c′
E[Rc(1 − Dc)Rc′(1 − Dc′)]E[Rc(1 − Dc)]E[Rc′(1 − Dc′)]


=1
C2
C
X
c=1
(1 − π ̃c)(1 − πc)
πc(πc − π ̃c)
1 Nc−1
PNc
i=1 Yeci(0) −  ̄
Ye c(0)
2
p(1 − q) + 1
C
1 C −1
PC
c=1 Yec(0) −  ̄
Ye (0)
2
p(1 − q) .
40

B Auxiliary Lemmas
Lemma B.1 (Lemma 1 in Aronow et al. [2014] (Hoeffding)). Given only G and F and no
other information on the joint distribution of (Yec(1), Yec(0)), the bound
σL Yec(1), Yec(0) ≤ σ Yec(1), Yec(0) ≤ σH Yec(1), Yec(0)
is sharp. The upper bound is attained if Yec(1) and Yec(0) are comonotonic. The lower bound
is attained if Yec(1) and Yec(0) are countermonotonic.
References
Peter M Aronow, Donald P Green, and Donald KK Lee. Sharp bounds on the variance in
randomized experiments. The Annals of Statistics, pages 850–871, 2014.
Victoria Baranov, Sonia Bhalotra, Pietro Biroli, and Joanna Maselko. Maternal depression,
women’s empowerment, and parental investment: Evidence from a randomized controlled
trial. American economic review, 110(3):824–859, 2020.
Orazio Attanasio, Sarah Cattan, Emla Fitzsimons, Costas Meghir, and Marta Rubio-Codina.
Estimating the production function for human capital: results from a randomized con
trolled trial in colombia. American Economic Review, 110(1):48–85, 2020.
Diva Dhar, Tarun Jain, and Seema Jayachandran. Reshaping adolescents’ gender attitudes:
Evidence from a school-based experiment in india. American economic review, 112(3):
899–927, 2022.
Alberto Abadie, Susan Athey, Guido W Imbens, and Jeffrey M Wooldridge. Sampling-based
versus design-based uncertainty in regression analysis. Econometrica, 88(1):265–296, 2020.
Alberto Abadie, Susan Athey, Guido W Imbens, and Jeffrey M Wooldridge. When should
you adjust standard errors for clustering? The Quarterly Journal of Economics, 138(1):
1–35, 2023.
James J Heckman and Ganesh Karapakula. Using a satisficing model of experimenter
decision-making to guide finite-sample inference for compromised experiments. The econo
metrics journal, 24(2):C1–C39, 2021.
Kari Lock Morgan and Donald B Rubin. Rerandomization to balance tiers of covariates.
Journal of the American Statistical Association, 110(512):1412–1421, 2015.
41

Xinran Li, Peng Ding, and Donald B Rubin. Asymptotic theory of rerandomization in
treatment–control experiments. Proceedings of the National Academy of Sciences, 115
(37):9157–9162, 2018.
EunYi Chung and Joseph P Romano. Multivariate and multiple permutation tests. Journal
of econometrics, 193(1):76–91, 2016.
James Heckman, Seong Hyeok Moon, Rodrigo Pinto, Peter Savelyev, and Adam Yavitz.
Analyzing social experiments as implemented: A reexamination of the evidence from the
highscope perry preschool program. Quantitative economics, 1(1):1–46, 2010.
Alwyn Young. Channeling fisher: Randomization tests and the statistical insignificance of
seemingly significant experimental results. The quarterly journal of economics, 134(2):
557–598, 2019.
Joel A Middleton and Peter M Aronow. Unbiased estimation of the average treatment effect
in cluster-randomized experiments. Statistics, Politics and Policy, 6(1-2):39–75, 2015.
Fangzhou Su and Peng Ding. Model-assisted analyses of cluster-randomized experiments.
Journal of the Royal Statistical Society Series B: Statistical Methodology, 83(5):994–1015,
2021.
Peter Z Schochet, Nicole E Pashley, Luke W Miratrix, and Tim Kautz. Design-based ratio
estimators and central limit theorems for clustered, blocked rcts. Journal of the American
Statistical Association, 117(540):2135–2146, 2022.
Xinhe Wang and Ben B Hansen. Design-based variance estimation of the h\’ajek effect
estimator in stratified and clustered experiments. arXiv preprint arXiv:2406.10473, 2024.
Esbj ̈orn Ohlsson. Asymptotic normality for two-stage sampling from a finite population.
Probability theory and related fields, 81(3):341–352, 1989.
Guillaume Chauvet and Audrey-Anne Vall ́ee. Inference for two-stage sampling designs.
Journal of the Royal Statistical Society Series B: Statistical Methodology, 82(3):797–815,
2020.
Federico Bugni, Ivan Canay, Azeem Shaikh, and Max Tabord-Meehan. Inference
for cluster randomized experiments with non-ignorable cluster sizes. arXiv preprint
arXiv:2204.08356, 2022.
42

Xinran Li and Peng Ding. General forms of finite population central limit theorems with
applications to causal inference. Journal of the American Statistical Association, 112(520):
1759–1769, 2017.
43

---

## Processing Information

- **Processing Library:** Zotero PDFWorker
- **Processing Date:** 2026-02-10T18:16:09.269Z
- **Text Length:** 78194 characters
- **Success:** Text extraction completed
- **PDF Library Used:** Zotero PDFWorker
- **Pages Processed:** 43 of 43
