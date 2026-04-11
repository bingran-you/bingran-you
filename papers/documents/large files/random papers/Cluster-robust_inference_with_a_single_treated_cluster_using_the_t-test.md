# PDF Document: Lau and Li - 2025 - Cluster-robust inference with a single treated cluster using the t-test.pdf

**File Path:** Lau and Li - 2025 - Cluster-robust inference with a single treated cluster using the t-test.pdf

**Processed Date:** 2026-02-10T18:15:06.026Z

**File Size:** 1234.89 KB

**Total Pages:** 117

**Extracted Pages:** 117

**PDF Library:** Zotero PDFWorker

**Attachment Item ID:** 3186

**Title:** Cluster-robust inference with a single treated cluster using the t-test

**Collection:** Large Files > Random Papers

---

## Extracted Text Content

Cluster-robust inference with a single treated
cluster using the t-test*
Chun Pong Lau† Xinran Li‡
November 11, 2025
Abstract
This paper considers inference when there is a single treated cluster and a fixed
number of control clusters, a setting that is common in empirical work, especially in
difference-in-differences designs. We use the t-statistic and develop suitable critical
values to conduct valid inference under weak assumptions allowing for unknown
dependence within clusters. In particular, our inference procedure does not involve
variance estimation. It only requires specifying the relative heterogeneity between the
variances from the treated cluster and some, but not necessarily all, control clusters.
Our proposed test works for any significance level when there are at least two control
clusters. When the variance of the treated cluster is bounded by those of all control
clusters up to some prespecified scaling factor, the critical values for our t-statistic
can be easily computed without any optimization for many conventional significance
levels and numbers of clusters. In other cases, one-dimensional numerical optimiza
tion is needed and is often computationally efficient. We have also tabulated common
critical values in the paper so researchers can use our test readily. We illustrate our
method in simulations and empirical applications.
Keywords: Cluster-robust inference, single treated cluster, t-test, simultaneous infer
ence, difference-in-differences.
*We thank helpful comments from St ́ephane Bonhomme, Ivan Canay, Azeem Shaikh, and Alex Torgovitsky. †Kenneth C. Griffin Department of Economics, The University of Chicago, ccplau@uchicago.edu. ‡Department of Statistics, The University of Chicago, xinranli@uchicago.edu.
1
arXiv:2511.05710v1 [econ.EM] 7 Nov 2025

1 Introduction
In difference-in-differences designs, it is common for researchers to conduct inference us
ing cluster-robust methods to account for correlation within clusters. However, inference
becomes challenging when there is only a single treated cluster. Intuitively, this is because
researchers are faced with only one estimate from the treated cluster, making its uncer
tainty difficult to quantify. Existing methods either impose strong assumptions on having
a large number of clusters, require the variances to be homogeneous or estimable, or only
work for specific significance levels depending on the number of clusters. In this paper,
we develop a t-test associated with a suitable critical value to conduct valid inference that
relaxes these assumptions.
Having a single treated cluster and a finite number of control clusters is common in
empirical work. For instance, this can happen when researchers use data in the United
States to examine the impact of a policy that takes place in one particular state but not
the other states. The nearby states or the remaining states are commonly used as the
control group. In these scenarios, it is reasonable for researchers to believe they are not
in the scenario with a “large” number of control clusters. Some recent examples in this
context include Wang and Burke (2022) on the effect of payday loan regulations in Texas,
Harris and Larsen (2023) on the effect of Hurricane Katrina on student outcomes in New
Orleans, Dillender et al. (2023) on the effect of change in health care reimbursement rates
in Illinois, Alpert et al. (2024) on the impact of Kentucky’s prescription drug monitoring
programs on opioid prescribing, and Kumar and Liang (2024) on the labor market effects
of constitutional amendments in Texas. Hagemann (2024) has documented earlier related
examples in the context of a single treated cluster. In the next section of this paper, we
demonstrate that our test is also applicable to other empirical designs, in addition to
difference-in-differences.
This paper contributes to the literature on cluster-robust inference. We assume that the
number of clusters is fixed, as in some related work in this literature such as Bester et al.
(2011), Ibragimov and Mu ̈ ller (2010, 2016), Canay et al. (2017), Hagemann (2022), and Lau
(2025). Although the tests in the aforementioned papers are valid when there is a finite
number of clusters, they are not suitable for the problem with a single treated cluster. The
first test requires certain homogeneity conditions, and the other tests cannot be applied
when there is a single treated cluster. Canay et al. (2021) has showed that Wild cluster
bootstrap popularized by Cameron et al. (2008) can be valid under strong homogeneity
conditions when there is a fixed number of clusters. See, for instance, Cameron and Miller
(2015), Conley et al. (2018), MacKinnon et al. (2023), and Alvarez et al. (2025) for some
2

surveys on the literature of conducting inference with a fixed number of clusters.
Several tests have been developed to conduct inference when there is a single treated
cluster, but with assumptions that can be strong in practice. Conley and Taber (2011) as
sume homogeneous errors. Ferman and Pinto (2019) relax the homogeneity assumption
and allow for known heteroskedasticity. Alvarez and Ferman (2023) relax the homogene
ity assumption and allows for spatial correlation. All these tests assume that there is an
infinite number of control clusters. Our t-test neither assumes the variances are known
nor assumes an infinite number of control clusters. Recently, Hagemann (2024) develops
a novel rearrangement test that relaxes the assumptions mentioned earlier. Hagemann
(2024) is the most related paper in that his test relies on a relative heterogeneity condition
between the treated and control clusters. Both our test and Hagemann (2024) work with
a fixed number of clusters, allow for arbitrary correlation within clusters, and do not as
sume that we can estimate or know the cluster variances. He shows his test is valid when
the relative heterogeneity condition holds with all or all but one control cluster. However,
the validity of his test depends on the number of clusters, the significance level, and the
relative heterogeneity condition. For example, when the standard deviation of the treated
cluster is bounded by 2 times all but one of the standard deviations of the control clus
ters, Hagemann (2024) requires at least 14 control clusters to conduct a one-sided test at
the 2.5% level using his rearrangement test, and at least 17 control clusters are needed
for a 1% level test1. This potentially limits the applicability of his test. Among the cases
where his test is valid, he computes weights for his rearrangement test using numerical
optimization that lead to valid tests.
There are several important distinctions between our work and Hagemann (2024).
First, we show that our test can be valid for any choice of significance levels and hetero
geneity parameters when there are at least two control clusters. For many conventional
combinations of significance levels and number of clusters, we derive a closed-form crit
ical value for the t-test. No optimization is necessary for these cases, so researchers can
apply the test readily. For other cases, we can derive critical values that lead to valid
tests through one-dimensional optimizations. Therefore, our test can have broader ap
plicability. Second, we relax the relative heterogeneity condition in Hagemann (2024).
Intuitively, the condition restricts the relative variance between the treated and control
clusters. Hagemann (2024) requires such condition to hold between the treated and all
(or all but one) control clusters to show the validity of his test. We weaken this condi
tion by allowing the researcher to impose this restriction between the treated cluster and
1Equivalently, to conduct two-sided tests, there have to be at least 14 control clusters for a 5% level test.
3

any number of control clusters. This allows researchers to bound relative heterogeneity
on variances depending on their choice on how to restrict the amount of heterogeneity
between the treated and control clusters. Third, we allow for simultaneous inference
across all the relative heterogeneity assumptions that we impose. Specifically, under the
assumption of no treatment effect, we can infer the minimum amount of relative hetero
geneity required to explain away the observed association between treatment and out
comes. If the true relative heterogeneity is unlikely to exceed this amount, the treatment
is likely to have a significant nonzero effect.
While the t-test has been used in Bakirov and Sze ́kely (2006) and Ibragimov and Mu ̈ ller
(2010, 2016), our proof on the validity of the t-test in the current context requires different
proof strategies. This is because we only have a single treated cluster and the relative
heterogeneity assumption imposes additional structure on the parameter space.
We confirm the performance of our proposed test in simulations. We find that our test
controls size under a wide range of significance levels and number of clusters. We also
have favorable power performance when compared to other tests in the literature.
The rest of the paper is organized as follows. Section 2 outlines some popular empir
ical designs that our test can be applied to. Section 3 presents our inference procedure.
Readers interested in applying the test can refer to Algorithm 3.1. Section 4 presents our
main theory. Section 5 explains how our test can be easily used for simultaneous infer
ence. Section 6 presents the simulation results. Section 7 contains two empirical studies.
Section 8 concludes. All proofs can be found in the supplementary material.
2 Motivating examples
We start by describing several empirically relevant designs that are common in applied
work and are related to the issue of having a single treated cluster. These examples show
that our method applies more broadly apart from standard difference-in-differences de
signs. The first three examples have also been discussed in Hagemann (2024).
In the following, i ∈ I ≡ {1, . . . , n} indices units, j ∈ J ≡ {1, . . . , m + 1} indices
clusters, and t ∈ T ≡ {1, . . . , T} indices time. Only cluster (m + 1) is treated, and the
remaining clusters are controls. Thus, J can be partitioned as J0 ∪ J1, where J0 ≡
{1, . . . , m} and J1 ≡ {m + 1} denote the control clusters and treated cluster respectively.
Let Dj ≡ 1[j ∈ J1] be a cluster-level treatment indicator across j ∈ J .
As to be described in Section 3, we require researchers to be able to run regression
4

cluster by cluster, and write the estimator for the target parameter ∆ in terms of the esti
mator for parameters from cluster-level regressions, denoted by {θbj}m+1
j=1 . The following
examples explain how to connect {θbj}m+1
j=1 with the estimator for the target parameters in
common empirical designs.
Example 2.1 (Clustered regression). Consider the following model
Yij = β0 + ∆Dj + Uij,
where β0, ∆, Uij ∈ R. Under the assumption that E[Uij|Dj] = 0, ∆ can be estimated by
∆b = θbm+1 − 1
m
m
∑
j=1
θbj,
where θbj is the sample mean of Yij for each j ∈ J . △
Example 2.2 (Difference-in-differences). Suppose T = 2 and let Postt ≡ 1[t = 2] for all
t ∈ T . Consider the following model
Yjt = αj + βPostt + ∆DjPostt + Ujt, (1)
where Ujt ∈ R, and {αj}m+1
j=1 are the cluster fixed effects. Under the assumption that
E[Ujt|Dj, Postt] = 0, ∆ can be estimated by
∆b = θbm+1 − 1
m
m
∑
j=1
θbj,
where {θbj}m+1
j=1 are the differences in the outcomes before and after treatment. They can
be obtained as the estimates of {θj}m+1
j=1 from the following cluster-level regressions
Yjt = αj + θjPostt + εjt (2)
for each j ∈ J . △
Example 2.3 (Two-way fixed effects). Consider the following two-way fixed effects model:
Yjt = αj + βt + ∆DjPostt + Ujt, (3)
where T ≥ 2, {αj}m+1
j=1 are the cluster fixed effects, {βt}tT=1 are the time fixed effects, and
Postt ≡ 1[t ≥ t0] for some 1 < t0 ≤ T. Under the assumption that E[Ujt|Dj, Postt] = 0,
5

∆ can be estimated by
∆b = θbm+1 − 1
m
m
∑
j=1
θbj,
using the same cluster-level regression as in (2). △
For more discussion about recent advances in difference-in-differences and two-way
fixed effects, see, for instance, the surveys by de Chaisemartin and D’Haultfœuille (2022),
Roth et al. (2023), and Baker et al. (2025).
Example 2.4 (Triple differences). Let Cij, Dij ∈ {0, 1} be binary indicators that depend on
the individual i ∈ I and cluster j ∈ J . Set Dij = 1[j = m + 1] and define Postt ≡ 1[t = 2]
as in Example 2.2 with two periods. Assume for each j ∈ J , there exist units with
Cij = 1 and units with Cij = 0. Consider the following triple differences/difference-in
difference-in-differences model:
Yijt = β0 + β1Cij + β2Dij + β3Postt + β4CijDij
+ β5CijPostt + β6DijPostt + ∆CijDijPostt + Uijt. (4)
Under the assumption that E[Uijt|Cij, Dij, Postt] = 0, ∆ can be estimated by
∆b = θbm+1 − 1
m
m
∑
j=1
θbj,
where {θbj}m+1
j=1 are the estimates of {θj}m+1
j=1 from the following cluster-level regressions
Yijt = αj + γC,jCij + γPost,jPostt + θjCijPostt + εijt,
for each j ∈ J . See Olden and Møen (2022) for a recent survey on triple difference
estimators. △
3 Inference procedure
In this section, we present the main assumptions and our algorithm of conducting infer
ence using the t-test with a single treated cluster. Readers who are interested in applying
our test can directly apply Algorithm 3.1. We also present some brief intuition for the
validity of our test in Section 3.4 to facilitate the theoretical discussion in Section 4.
6

3.1 Assumptions
We follow the notation used in Section 2. Let {θbj}m+1
j=1 be the cluster-level estimators,
J0 = {1, . . . , m} index the control clusters and J1 = {m + 1} index the treated cluster.
For simplicity, we make the dependence of {θbj}m+1
j=1 on the cluster size implicit.
Our procedure requires two main assumptions. First, we assume that an appropriate
central limit theorem applies to {θbj}m+1
j=1 as the sample size within each cluster, denoted by
n, goes to infinity. A similar assumption is also imposed in related papers on a fixed num
ber of clusters, such as Ibragimov and Mu ̈ ller (2010, 2016), Canay et al. (2017), Hagemann
(2022, 2024) and Lau (2025). Intuitively, this holds when each cluster has a large number
of units or consists of a panel with a long time periods. This high-level assumption is
formalized as follows.
Assumption 3.1. The following holds as the sample size within each cluster n −→ ∞:
√n

    
θb1 − μ0
...
θbm − μ0
θbm+1 − μ1

    
−d→ N (0, Σ), (5)
where Σ ≡ diag(σ12, . . . , σ2m, σ2m+1) is an diagonal matrix.
Below we give a few remarks regarding Assumption 3.1. First, it is not necessary for all
clusters to have the same size. In cases where clusters have varying sizes, we can define
n as the size of the smallest cluster, and our inference essentially requires the sample
sizes in all clusters to be large. Second, we assume that the cluster-level estimators are
independent, at least asymptotically, so that the asymptotic covariance matrix Σ in (5)
is diagonal. This is trivially satisfied if the units are independent across clusters. We
emphasize that, while we require independence across clusters, we allow for unknown
dependence structure within clusters. Third, we assume that the estimators from the
control clusters are consistent for a common parameter μ0, which can often be justified by
model assumptions or study designs as illustrated in Section 2.
Second, we impose the following relative heterogeneity assumption, which generalizes
the relative heterogeneity assumption in Hagemann (2024). Let σ(1) ≤ σ(2) ≤ · · · ≤ σ(m)
be the ordered values of {σj}jm=1 in Assumption 3.1.
Assumption 3.2. For a given ρ ≥ 0 and a given k ∈ {1, . . . , m}, σm+1 ≤ ρσ(k).
The above assumption does not require the variances to be known. It only restricts the
7

relative heterogeneity of the standard deviations between the treated and control clusters.
In particular, for any ρ ≥ 0 and k ∈ {1, . . . , m}, it requires the standard deviation of
the treated cluster to be less than or equal to ρ times the standard deviations of at least
(m − k + 1) control clusters. For example, k = 1 requires that the standard deviation of
the treated cluster is smaller than or equal to ρ times the standard deviations of all control
clusters; when k = m, this means that the standard deviation of the treated cluster is
smaller than or equal to ρ times the largest standard deviation from the control clusters.
Assumption 3.2 is a relaxed version of Hagemann (2024)’s maximum relative hetero
geneity assumption. His assumption is equivalent to Assumption 3.2 with k = 1 or k = 2.
Our test allows a general choice of k ∈ {1, . . . , m}. More importantly, as demonstrated
in Section 5, the inference can be simultaneously valid for all k ∈ {1, . . . , m}. In other
words, with additional choices of k, our test can provide more evidences against the null
hypothesis than Hagemann (2024)’s test, which focuses on k = 1 or 2.
Before introducing our algorithm, we end this subsection with some discussion on
choosing (ρ, k) in Assumption 3.2. If the researcher believes the standard deviation of the
treated cluster cannot be larger than the standard deviations of the control clusters, then
the researcher can set k = 1 and ρ = 1.
On the other hand, if the researcher does not want to commit to a particular value of
(ρ, k), the researcher can perform simultaneous inference and report the largest value of
ρ such that the null can be rejected for each k. This approach can also be interpreted as
finding the largest ρ such that the conclusion changes, which is related to the idea of find
ing breakdown points/frontiers in econometrics (Horowitz and Manski, 1995; Kline and
Santos, 2013; Masten and Poirier, 2020). We demonstrate this through two applications in
Section 7.
3.2 Algorithm
The goal is to test the following hypothesis:
H0: μ1 = μ0 vs H1: μ1 ̸= μ0. (6)
Our procedure of conducting inference with a single treated cluster is as follows.
Algorithm 3.1.
Inputs:
• Significance level α ∈ (0, 1
2 ).
8

• The parameters on relative heterogeneity from Assumption 3.2, i.e., (ρ, k).
• The cluster-level estimators {θbj}m+1
j=1 .
Steps:
Step 1 (Test statistic): Compute the t-statistic:
Tbm ≡ θbm+1 − θbm
Sbm
, (7)
where θbm ≡ 1
m ∑jm=1 θbj and Sb2m ≡ 1
m−1 ∑jm=1(θbj − θbm)2 represent the sample average
and sample variance of the estimators from the control clusters, respectively.
Step 2 (Critical value): We have tabulated many empirically-relevant critical values in
Table 1. These critical values can be immediately used. More generally, the critical
value cvm,α,k,ρ can be computed as follows.
• Case 1: If k = 1 and α is below the thresholds in Table 2, use the closed-form
expression in (17). Compute the closed-form critical value as
cvm,α,k,ρ ≡
r
ρ2 + 1
m tm−1, α2 ,
where tm−1, 2α is the (1 − α
2 )-th quantile of the t-distribution with (m − 1) degrees
of freedom.
• Case 2: Search cvm,α,k,ρ such that pm(cvm,α,k,ρ; k, ρ) defined in Theorem 4.3 ahead
is at most α. This requires solving one-dimensional optimization problems.
Step 3 (Decision): Reject (6) if |Tbm| > cvm,α,k,ρ. ■
3.3 Computing p-value and confidence interval
To compute the p-value, the researcher does not need to run the entire Algorithm 3.1. In
particular, the researcher only needs to compute the test statistic Tbm in Step 1 of Algorithm
3.1 and substitute it into the pm function in Step 2 of Algorithm 3.1 and return the p-value
as pm(Tbm; k, ρ).
The researcher can take the critical value cvm,α,k,ρ from Step 2 of Algorithm 3.1 and
return (θbm+1 − θbm) ± cvm,α,k,ρSbm as an (1 − α) confidence interval for μ1 − μ0.
9

3.4 Discussion
Algorithm 3.1 is a computationally simple three-step procedure. The first step is to com
pute the usual t-statistic using the cluster-level estimators.
The second step finds the critical value that depends on (m, α, k, ρ). This step aims to
find the critical value cvm,α,k,ρ such that the procedure controls size for any configurations
of {σj}m+1
j=1 that satisfy Assumption 3.2. In the first case, a closed-form critical value is
available when α is below a certain threshold in Table 2. If α does not satisfy the condition,
we can compute the critical value cvm,α,k,ρ in the second step through one-dimensional
optimization.
The reason for having a closed-form expression for the critical value in case 1 of Step
2 of Algorithm 3.1 is as follows. For k = 1 and any given (m, ρ), for a sufficiently small
significance level α (including many conventional choices), we find that the maximum
rejection probability over all configurations of {σj}m+1
j=1 is achieved when σm+1 = ρσj for
all j = 1, . . . , m. The proof is nontrivial and we explain the technical details in Sections
4. Knowing when the maximum rejection probability is achieved, we are able to derive a
closed-form expression for the critical value using properties of the t-distribution.
Case 2 of Step 2 is in fact a general version that holds for any (m, α, k, ρ). For a general
value of k ∈ {1, . . . , m}, although we cannot find the exact configuration of {σj}m+1
j=1 that
achieves the desired level of rejection probability, we are able to substantially reduce the
set of possible values. In particular, there are at most m2 possible cases for the worst
case configuration of {σj}m+1
j=1 , each of which involves at most one unknown parameter.
Therefore, we can find the maximum rejection probability through one-dimensional opti
mization. In addition, we have a good initial guess for the critical value. To facilitate the
use of the test in practice, we have tabulated many critical values for researchers’ use in
Table 1.
The last step rejects if the absolute value of the test statistic is above the critical value.
4 Theory
In this section, we develop the theory that justifies the validity of Algorithm 3.1. In Section
4.1, we show that the large-sample behavior of the test can be studied via a fixed number
of normal random variables. In Section 4.2, we show the general theory on computing
the maximum rejection probability of the test statistic. This result is used to search for a
critical value such that the test is valid. We show in Section 4.3 that we can get a closed
10

form expression for the critical value as in Step 2 of Algorithm 3.1 when k = 1 and the
significance level is not “too large.” In Section 4.4, we discuss the power of our t-test.
4.1 General framework with normal means
In this subsection, we show that under Assumption 3.1, studying the behavior of the t
statistic in equation (7) of Algorithm 3.1 when n is large is equivalent to studying the
t-statistic of suitably defined (m + 1) normal random variables. Formally, consider the
following assumption on the normal random variables.
Assumption 4.1. Let {ψj}m+1
j=1 be m + 1 independent random variables, where ψj ∼ N (0, σj2)
for 1 ≤ j ≤ m and ψm+1 ∼ N (δ, σ2m+1).
Compared to the notation in Section 3.1, {ψj}jm=1 above correspond to the m control
clusters and ψm+1 corresponds to the single treated cluster. As before, the above assump
tion does not require us to know the variances {σj}m+1
j=1 . The variances can be arbitrarily
heterogeneous as long as they satisfy the relative heterogeneity assumption stated in As
sumption 3.2. Analogous to (7), we define the following t-statistic based on these normal
random variables:
Tm ≡ ψm+1 − ψm
Sm
, (8)
where ψm ≡ 1
m ∑jm=1 ψj and S2m ≡ 1
m−1 ∑jm=1(ψj − ψm)2 denote the sample mean and vari
ance for the control clusters, respectively.
The theorem below shows that, to achieve the desired size asymptotically, it suffices
to consider a stylized setting with normally distributed random variables. Note that Tbm
in (7) depends on the sample size within each cluster n implicitly. In addition, we allow
μ1 and μ0 to vary with the sample size n as well, which can facilitate power investigation
under local alternatives.
Theorem 4.1. Let m ≥ 2. Suppose that Assumption 3.1 holds, √n(μ1 − μ0) −→ δ as n −→ ∞
for some δ ∈ R, and the variances {σj2}m+1
j=1 are not all zero. Then, for any c > 0 and c ̸= m−1/2,2
nli→m∞ P[|Tbm| > c] = P[|Tm| > c],
where Tm is the t-statistic defined in (9).
2We impose c ̸= m−1/2 to avoid the case where |Tm| has a positive point mass at c. This technical requirement excluding a single value of c generally does not affect the practical use of our test, since the desired critical value at a usual significance level is greater than m−1/2. Specifically, as discussed later in Remark 4.4, the rejection probability P[|Tm| > c] for any c < m−1/2 can be as large as 1, and the rejection
probability P[|Tm| > c] for c close to but larger than m−1/2 can at least be about 0.5.
11

Note that in the asymptotics of Theorem 4.1, the limit is taken as n goes to infinity,
while the number of clusters (m + 1) is fixed. In addition, we allow a general δ for the
difference between μ1 and μ0 to facilitate the later discussion on the power of the test. To
derive valid tests, it suffices to consider the case where μ1 = μ0 and δ = 0. Specifically, to
derive large-sample valid t-test with a single treated cluster and a finite number of control
clusters, it suffices to test the following null hypothesis in the stylized setting with exactly
normal observations:
H0 : δ = 0 vs H1 : δ ̸= 0. (9)
In the remainder of this section, we will study valid t-test for (9) in this stylized setting.
Remark 4.1. If we are interested in an one-sided alternative, such as μ1 > μ0, we can
reject the null hypothesis if Tbm > c for some c > 0. Moreover, under the same condition
as in Theorem 4.1, limn→∞ P[Tbm > c] = P[Tm > c] = 1
2 P[|Tm| > c]. Therefore, the critical
value for a level-α one-sided test can be derived from the critical value for a level-(2α)
two-sided test, for any α ∈ [0, 1
2 ]. ■
Remark 4.2. The setup in this paper also works when there is a single control cluster
and at least two treated clusters. All the results would follow by labeling the first m
clusters as the treated clusters and the (m + 1)th cluster as the control cluster. ■
Remark 4.3. Although we focus on a fixed m, we discuss in Appendix A.3 on the behav
ior of the test when m is large, where we derive a closed-form valid test and approximate
its power. ■
4.2 Valid t-test
The key to constructing a valid t-test is to find an appropriate critical value cvm,α,k,ρ for
Step 2 of Algorithm 3.1. This critical value cvm,α,k,ρ has to be chosen such that for any
{σj }m+1
j=1 that satisfy Assumption 3.2, P[|Tm| > cvm,α,k,ρ] under the null hypothesis (9) is
less than or equal to a given significance level α. In the following, we will consider the
maximum rejection probability at any critical value c.
Note that when the treated standard deviation is much larger than the control stan
dard deviations, i.e., σm+1 ≫ max1≤j≤m σj, the rejection probability P[|Tm| > c] will be
close to 1 for any c > 0, under which we cannot derive a meaningful t-test. Therefore,
Assumption 3.2 on the relative heterogeneity of {σj}m+1
j=1 is in some sense necessary.
For descriptive convenience, we introduce Sm(k, ρ) to denote all possible standard de
12

viations that satisfy Assumption 3.2 for a given m, ρ ≥ 0 and k ∈ {1, . . . , m}3:
Sm(k, ρ) ≡ {(σ1, . . . , σm, σm+1) ∈ Rm+1
≥0 : σm+1 ≤ ρσ(k)}. (10)
Using the above notation, our goal of finding the maximum rejection probability as de
scribed above can be formalized as follows
pm(c; k, ρ) ≡ sup
(σ1 ,...,σm ,σm+1 )∈Sm (k,ρ)
P0[|Tm| > c], (11)
where the P0 notation with subscript 0 indicates that the null hypothesis (9) holds and
δ = 0. To conduct a valid test at any given significance level α ∈ (0, 1), it suffices to find
the critical value c such that pm(c; k, ρ) ≤ α and ideally pm(c; k, ρ) = α. On the other hand,
if the goal is to compute a p-value, then one can directly compute pm(|Tm|; k, ρ) without
searching for the required critical value as discussed in Section 3.3. That is, when we set
c to be the observed absolute value of the t-statistic, pm(c; k, ρ) gives a valid p-value for
testing the null hypothesis in (9).
In the following, we consider two cases depending on the standard deviation for the
treated cluster σm+1. Section 4.2.1 considers σm+1 = 0 and shows that the corresponding
maximum rejection probability has a closed-form solution that can be easily computed.
Section 4.2.2 considers σm+1 > 0 and shows that we have an integral representation for
the rejection probability. This facilitates its numerical calculation at any given values of
{σj }m+1
j=1 . However, directly evaluating the optimization problem in (11) generally results
in solving an m-dimensional optimization problem. We discuss how this can be reduced
to solving multiple one-dimensional optimization problems in Section 4.2.3.
4.2.1 Case 1: σm+1 = 0
When σm+1 = 0, regardless of the choices of the relative heterogeneity parameters ρ and
k, the control standard deviations {σj}jm=1 can take arbitrary values in Rm≥0. Moreover,
in this case, except for a multiplicative constant scaling factor of √m in the t-statistic,
our t-statistic essentially reduces to a one-sample t-statistic, and our t-test is equivalent
to testing whether the mean of the control clusters is equal to zero. From Bakirov and
Sze ́kely (2006), we know that the maximum rejection probability with a zero σm+1 has the
3With a slight abuse of notation, we also use {σj}m+1
j=1 to denote generic values of the standard devia
tions. Note that {σj}m+1
j=1 in Assumptions 3.1 and 3.2 represent the true (asymptotic) standard deviations for all the clusters.
13

following form:
pm,0(c) = sup
(σ1 ,...,σm )∈Rm≥0 and σm+1=0
P0[|Tm| > c] = max
Rm(c)<j≤m P
"
|tj−1| >
s
(j − 1)Rm(c)
j − Rm(c)
#
, (12)
where Rm(c) ≡ m2c2
mc2+m−1 , and tj−1 denotes a random variable following the t-distribution
with degrees of freedom (j − 1). In (12), the maximum rejection probability is obtained
when the control standard deviations {σj}jm=1 are either zero or take some common pos
itive value. It can be efficiently computed by calculating the tail probabilities of at most
(m − 1) t-distributions with various degrees of freedom.
It follows that when ρ = 0, we must have σm+1 = 0, and the maximum rejection
probability of our t-test becomes the same as (12), i.e., pm(c; k, 0) = pm,0(c) for any c > 0
and k ∈ {1, . . . , m}. Thus, in the remainder of this section, we focus on ρ > 0.
Remark 4.4. From (12) and as commented in Bakirov and Sz ́ekely (2006), pm,0(c) = 1 for
0 < c < m−1/2 and pm,0(c) = 0.5 for c = m−1/2. Furthermore, by the right-continuous
property of distribution functions, we can verify that pm,0(c) −→ 0.5 as c approaches
m−1/2 from the right. These observations mean that, regardless of the values of ρ and k,
the maximum rejection probability of our t-test in (11) is 1 when 0 < c < m−1/2, at least
0.5 when c = m−1/2, and at least about 0.5 when c is greater than but close to m−1/2.
Thus, it is generally innocuous to assume c ̸= m−1/2 (or even c > m−1/2) as in Theorems
4.1 and later in 4.3 for most conventional significance levels. ■
4.2.2 Case 2: σm+1 > 0
We now consider the case where σm+1 > 0. As shown in the following lemma, the re
jection probability P0[|Tm| > c] can be written as an integral. This not only facilitates
numerical computation, but is also crucial for our later theoretical investigation.
Lemma 4.1. Suppose that σm+1 > 0, and define γi ≡ σi
σm+1 for i = 1, 2, . . . , m. The rejection
probability P0[|Tm| > c] can be written as:
P0[|Tm| > c] = pm(c; γ1, . . . , γm) ≡ 1
π
Z |θm+1|
0
s m2−1
[−gc(−s)] 12
ds. (13)
14

where θm+1 ∈ [−m − max1≤i≤m γi2, −m] is the unique negative root of gc(θ) defined below,
gc(θ) ≡ −(m + θ)
m
∏
i=1
(κγi2 − θ) + κ + κ + 1
mθ ·
m
∑
i=1
"
γi2 ∏
j̸=i
(κγj2 − θ)
#
, (14)
and κ ≡ mc2
m−1 .
From Lemma 4.1, when σm+1 > 0, the rejection probability in (13) depends only on
the ratios between the control standard deviations and the treated standard deviation.
The relative heterogeneity assumption in Assumption 3.2 equivalently assumes that at
least (m − k + 1) of {γj}jm=1 is greater than or equal to ρ−1. To find the maximum re
jection probability, we need to solve an m-dimensional optimization over (γ1, . . . , γm) ∈
[0, ∞)k−1 × [ρ−1, ∞)m−k+1.4 Optimizing this integral directly can be computationally chal
lenging even for a moderate m. As demonstrated in the next subsection, for any m ≥ 2,
we can substantially simplify the m-dimensional optimization problem into multiple one
dimensional optimization problems. The reformulated problem can often be efficiently
solved numerically.
4.2.3 Reformulating the problem of computing the maximum rejection probability
In this subsection, we discuss how to reduce the optimization for the maximum rejection
probability in (11) into multiple one-dimensional optimization problems. We summarize
the key ideas here and defer the technical lemmas to Appendix A.1 of this main text.
First, Lemma A.1 shows that the maximum rejection probability in (11) must be achieved
at some finite values of (σ1, . . . , σm, σm+1) ∈ Sm(k, ρ). This means we do not need to worry
about the boundary case where some of {σj}m+1
j=1 approach infinity. Next, Lemma A.2
shows the necessary conditions for any (σ1, . . . , σm, σm+1) ∈ Sm(k, ρ) to be a maximizer.
We summarize the implications of Lemma A.2 in the following theorem.
Theorem 4.2. For any given m ≥ 2, k ∈ {1, . . . , m}, ρ ≥ 0, c > 0 and c ̸= m−1/2,
the maximum rejection probability in (11) under Assumption 3.2 must be attained at some
{σj }m+1
j=1 ∈ Sm(k, ρ) that satisfy one of the following forms:5
(i) σm+1 = 0, and for 1 ≤ j ≤ m, σj is either 0 or some common value;
(ii) σm+1 = ρ, and for 1 ≤ j ≤ m, σj is either 0, or 1, or some common value.
4Note that the rejection probability is invariant to any permutations of the {γj}jm=1. We can, for example,
assume that the last (m − k + 1) of them is no less than ρ−1 without loss of generality. 5The result in (i) follows from Bakirov and Sz ́ekely (2006) and implies the maximum rejection probability when σm+1 = 0 as shown in (12).
15

Note that 0 is always a boundary value of σj for 1 ≤ j ≤ m, and 1 is also a bound
ary value for some σj when σm+1 = ρ and Assumption 3.2 holds. Therefore, Theorem
4.2 essentially indicates that, at the maximizer of the rejection probability in (11), each σj
must either lie on the boundary or share a common value for all 1 ≤ j ≤ m. Importantly,
Theorem 4.2 explains why we can simplify the optimization for the rejection probabil
ity into multiple one-dimensional optimization problems. This is because for all possible
maximizers shown in Theorem 4.2, there is only one unknown value, which is the com
mon value of the {σj}jm=1 that are not on the boundary. Note that the maximum rejection
probability in case (i) with σm+1 = 0 can be efficiently computed as shown in (12). In the
following, we will therefore focus on the optimization for the rejection probability in case
(ii) with σm+1 > 0.
Specifically, under Assumption 3.2 with any k ∈ {1, . . . , m} and ρ > 0, if (σ1, . . . , σm,
σm+1) ∈ Sm(k, ρ) is the maximizer for the rejection probability and σm+1 > 0, then, for
all 1 ≤ j ≤ m, γj ≡ σj
σm+1 is either on the boundary (equals 0 or ρ−1 ), or takes some
common value γ ≥ 0. Motivated by this, with a slight abuse of notation, we introduce
pm(c; ρ, γ; m1, m0) to denote the value of pm(c; γ1, . . . , γm) in (13) when m1 of {γj}jm=1 equal
ρ−1, m0 of them equal zero, and the remaining equal a common value γ. That is,
pm(c; ρ, γ; m1, m0) ≡ pm(c; ρ−11m⊤1, 0m⊤0, γ1m⊤−m1−m0 ), (15)
where 0 ≤ m0, m1 ≤ m and m0 + m1 ≤ m.
Next, define the following as the supremum of pm(c; ρ, γ; m1, m0) over γ, with the sup
port of γ depending on m1 and k:
pem(c; k, ρ; m1, m0) ≡ sup
γ∈[ρ,∞)
pm(c; ρ, γ; m1, m0), (16)
where ρ = 0 if m1 ≥ m − k + 1 and ρ = ρ−1 if m1 < m − k + 1.
With the above notations, we now state our main theorem of how to evaluate the maxi
mum rejection probability for a given critical value c, heterogeneity parameters (k, ρ) and
the number of clusters m.
Theorem 4.3. For any given m ≥ 2, k ∈ {1, . . . , m}, c > 0 and c ̸= m−1/2, the maximum
16

rejection probability in (11) under Assumption 3.2 can be written as6
pm(c; k, ρ) ≡

 
 
max
n
pm,0(c), max
0≤m0≤k−1,0≤m1≤m−m0
pem(c; k, ρ; m1, m0)
o
if ρ > 0
pm,0(c) if ρ = 0
,
where pm,0(c) is defined in (12) and pem(c; k, ρ; m1, m0) is defined in (16).
From Theorem 4.3, the key to obtaining the maximum rejection probability is to solve
the optimization problem in (16) for all combinations of (m1, m0). Importantly, for each
given (m1, m0), the optimization in (16) is an one-dimensional optimization problem,
which is computationally much simpler than the original optimization in (11), and we
can solve it using numerical optimization. In particular, for any given k ∈ {1, . . . , k}, we
need to solve at most 1
2 k(2m + 1 − k) one-dimensional optimization problems7, which is
m when k = 1, 2m − 1 when k = 2, . . . , and 1
2 m(m + 1) when k = m. Moreover, at a given
m, ρ ≥ 0 and c > 0, to find the maximum rejection probability over all k ∈ {1, . . . , m}, we
need to solve at most m(m + 1) one-dimensional optimization problems of the form (16),
because the optimizations required for different values of k overlap with each other.
We illustrate the above theorem through the following examples. Example 4.1 is about
k = 1 and Example 4.2 is about k = 2.
Example 4.1. Let m = 6, ρ = 2, α = 0.05, k = 1, and c = tm−1,1− 2α
q
ρ2 + 1
m where
tm−1,1− α2 is the (1 − α
2 )-th quantile of the t-distribution with (m − 1) degrees of freedom.
We show the various functions from Theorem 4.3 in Figure 1.
A few observations from Figure 1 are as follows. First, the curves show pm(c; ρ, γ; m1, m0)
as defined in (15) against γ, for m1 = 0, . . . , 5. Recall this function means that among
{γj}j6=1, m1 of them equals ρ−1 and the remaining of them equals γ. We set γ = ex in
order to display the behavior of large γ. Each colored curve corresponds to a specific
value of m1. It can be seen that pm(c; ρ, γ; m1, m0) decreases as γ increases for each m1.
The black dotted horizontal line plots pm,0(c) defined in (12). It shows the maximum
rejection probability when σm+1 = 0. Here, it is much smaller than 0.05.
As γ −→ ∞, pm(c; ρ, γ; m1, m0) converges to values less than or equal to pm,0(c). This
is not surprising, as in such scenarios, σm+1 is much smaller than some control standard
deviations, essentially approximating the case where σm+1 = 0. △
6From Remark 4.4, pm(c; k, ρ) = 1 when 0 < c < m−1/2. For convenience, we also define pm(c; k, ρ) = 1
at c = 0 and c = m−1/2, so that pm(c; k, ρ) upper bounds the rejection probability for all c ≥ 0. 7When m1 + m0 = m, (15) no longer depends on γ, and thus no optimization over γ is needed.
17

0.00
0.01
0.02
0.03
0.04
0.05
log(ρ−1) 2 4 6 8
x (the common value γ = ex)
Rejection probability
m1 0 1 2 3 4 5
m = 6, k = 1, m0 = 0
Figure 1: This above shows pm(c; ρ, γ; m1, m0) against γ for various values of m1 with
m = 6, k = 1 and m0 = 0. The vertical dashed line represents γ = ρ−1. The horizontal dotted line represents pm,0(c). See Theorem 4.3 for the definitions of the functions.
Example 4.2. Consider the same setup as in Example 4.1 but with k = 2 and set the
value of c such that the maximum rejection probability equals α = 0.05. Figure 2 shows
the rejection probability under different combinations of γ, m0 and m1, where m0 here
can only take the values 0 or 1.
As can be seen from the figure, the maximum rejection probability is achieved when
one of the {γj}jm=1 equals 0 and the remaining (m − 1) terms from {γj}jm=1 equals ρ−1. For
instance, in the m0 = 0 panel, the purple line represents m1 = 5 terms of {γj}jm=1 equals
ρ−1. For this line, the maximum rejection probability is achieved when the remaining
m − m1 = 1 term equals γ = 0. Similarly, in the m0 = 1 panel, exactly one of {γj}jm=1 is
equal to 0. Each of the lines shows that the maximum rejection probability is achieved
when all the remaining terms equal ρ−1. △
Remark 4.5. As discussed in Appendix A.3, when m −→ ∞, under certain regular
ity conditions, the maximum rejection probability pm(c; k, ρ) for any c, k and ρ > 0 is
achieved when σm+1 = 1, (k − 1) of {σj}jm=1 are 0, and the remaining (m − k + 1) of
{σj}jm=1 are equal to ρ−1. This is indeed the case for both Examples 4.1 and 4.2. Based on
18

m0 = 0 m0 = 1
0 ρ−1 2 4 6 8 0 ρ−1 2 4 6 8
0.00
0.01
0.02
0.03
0.04
0.05
Common value γ
Rejection probability
m1 0 1 2 3 4 5
m = 6, k = 2
Figure 2: This above shows pm(c; ρ, γ; m1, m0) against γ for various m0 and m1 with
m = 6 and k = 1. See the caption for Figure 1 for more details.
this intuition, we can first use this configuration of {σj}m+1
j=1 to get a candidate threshold
c such that P0[|Tm| > c] = α, where α is the significance level of interest. We can then
verify whether this candidate threshold c achieves the desired type-I error control by
solving the optimization in Theorem 4.3. ■
Finally, we report the critical values for different numbers of control clusters m and
heterogeneity parameters ρ for α = 0.01 and α = 0.05 in Table 1 when k = 1. We report
the critical values for k = 2 in the supplementary material.
4.3 Closed-form valid t-test when k = 1
In this subsection, we consider the case where k = 1 in Assumption 3.2. This means that
σm+1 ≤ ρσj for j = 1, . . . , m, i.e., the treated standard deviation is smaller than or equal to
ρ times each of the control standard deviations.
In this case, we can obtain closed-form solutions for the maximum rejection probabil
ity when the threshold c is large enough. Equivalently, this corresponds to testing at a
significance level that is not “too large.” The theorem is stated as follows:
19

Table 1: Critical values for different values of α, m and ρ for k = 1.
α = 0.01 α = 0.05
ρ\m 5 10 15 20 25 50 5 10 15 20 25 50
0.2 2.256 1.216 0.972 0.858 0.791 0.656 1.360 0.846 0.700 0.628 0.584 0.492 0.4 2.762 1.657 1.417 1.311 1.251 1.137 1.666 1.153 1.021 0.959 0.923 0.853 0.6 3.445 2.204 1.944 1.832 1.769 1.652 2.078 1.534 1.401 1.340 1.305 1.239 0.8 4.220 2.796 2.502 2.376 2.306 2.177 2.545 1.946 1.803 1.739 1.702 1.633 1.0 5.044 3.408 3.074 2.932 2.852 2.707 3.041 2.373 2.215 2.145 2.105 2.030
1.2 5.896 4.033 3.654 3.492 3.403 3.238 3.556 2.807 2.633 2.555 2.511 2.428 1.4 6.767 4.664 4.238 4.056 3.955 3.771 4.081 3.247 3.053 2.967 2.919 2.828 1.6 7.649 5.300 4.825 4.622 4.510 4.305 4.613 3.689 3.476 3.381 3.328 3.228 1.8 8.539 5.939 5.413 5.189 5.065 4.839 5.150 4.134 3.900 3.796 3.738 3.628 2.0 9.436 6.580 6.003 5.758 5.622 5.373 5.690 4.581 4.325 4.212 4.148 4.029
2.2 10.336 7.223 6.594 6.326 6.179 5.908 6.233 5.028 4.751 4.628 4.559 4.430 2.4 11.240 7.867 7.186 6.896 6.736 6.443 6.778 5.476 5.177 5.045 4.971 4.831 2.6 12.146 8.512 7.778 7.466 7.294 6.978 7.325 5.925 5.604 5.462 5.382 5.233 2.8 13.055 9.157 8.371 8.036 7.851 7.513 7.873 6.374 6.031 5.879 5.794 5.634 3.0 13.965 9.804 8.964 8.607 8.409 8.049 8.421 6.824 6.458 6.296 6.205 6.035
3.2 14.876 10.450 9.557 9.177 8.968 8.584 8.971 7.274 6.886 6.714 6.617 6.437 3.4 15.789 11.097 10.150 9.748 9.526 9.120 9.521 7.725 7.313 7.132 7.029 6.838 3.6 16.702 11.744 10.744 10.319 10.085 9.655 10.072 8.175 7.741 7.549 7.441 7.240 3.8 17.616 12.392 11.338 10.890 10.643 10.191 10.623 8.626 8.169 7.967 7.854 7.642 4.0 18.531 13.040 11.932 11.462 11.202 10.727 11.175 9.077 8.597 8.385 8.266 8.043
4.2 19.447 13.688 12.526 12.033 11.760 11.262 11.727 9.528 9.025 8.803 8.678 8.445 4.4 20.362 14.336 13.121 12.604 12.319 11.798 12.279 9.979 9.453 9.221 9.091 8.847 4.6 21.279 14.985 13.715 13.176 12.878 12.334 12.832 10.430 9.882 9.639 9.503 9.248 4.8 22.195 15.633 14.310 13.747 13.437 12.869 13.385 10.882 10.310 10.057 9.915 9.650 5.0 23.112 16.282 14.904 14.319 13.996 13.405 13.938 11.333 10.738 10.476 10.328 10.052
Theorem 4.4. For any given m ≥ 4, ρ > 0, c >
q 3(m−1)
m(m−3) , define:
Hm(c, ρ) ≡ max 3(mρ2 + 1)
mρ2 + κ + 1, 2κ + 3
κ+1
+ 1−τ
1 − τ + min{(1 − 2τ)κZ − 1
2, 0} − mκ
mρ2 + κ + 1 − 1,
where κ ≡ mc2
m−1 and τ ≡ κ+1
mκ are determined by (m, c), and Z ≡ 1
2·max{mρ2+1,κ+2} is determined
by (m, c, ρ). Under the above conditions and notations, the following statements hold.
(i) Hm(c, ρ) is decreasing in c, and limc→∞ Hm(c, ρ) < 0.
20

(ii) Let cm,ρ ≡ inf{c >
q 3(m−1)
m(m−3) : Hm(c, ρ) ≤ 0}, which must be finite. Then, for any
c ≥ cm,ρ, the maximum rejection probability pm(c; 1, ρ) under Assumption 3.2 with k = 1
and the given (ρ, m, c) has the following equivalent form:
pm(c; 1, ρ) = P
"
|tm−1|
r
ρ2 + 1
m >c
#
.
Theorem 4.4 gives a closed-form solution for the maximum rejection probability under
the relative heterogeneity assumption with k = 1 and any given ρ > 0. The maximum
rejection probability is achieved when σ1 = σ2 = . . . = σm = ρ−1 and σm+1 = 1. Im
portantly, for any given m and ρ > 0, the cutoff cm,ρ can be easily computed numerically,
due to the monotonicity of the function Hm(c, ρ) in c. Accordingly, Theorem 4.4 gives a
closed-form critical value of our t-test for any significance level less than or equal to
αm,ρ ≡ P
"
|tm−1|
r
ρ2 + 1
m > cm,ρ
#
. (17)
That is, for any significance level α ∈ (0, αm,ρ], a valid critical value for our two-sided
t-test is p
ρ2 + m−1 tm−1,1− 2α , where tm−1,1− α2 is the (1 − α
2 ) quantile of the t-distribution
with degree of freedom m − 1.
Table 2 reports the largest significance level αm,ρ such that our two-sided t-test has a
simple closed-form expression for the critical value, under Assumption 3.2 with k = 1 and
various values of (m, ρ). Note that our t-test can handle all values of m ≥ 2, k ∈ {1, . . . , m}
and ρ ≥ 0, but it generally involves one-dimensional optimization as described in Section
4.2.3. We can conduct a similar theoretical investigation to simplify the optimization of
the rejection probability under Assumption 3.2 with k ≥ 2. However, in this case, the
potential maximizers cannot be reduced to a single point, so one-dimensional numerical
optimization is still required. We relegate the detailed discussion under Assumption 3.2
with k ≥ 2 to the supplementary material.
4.4 Power of the t-test
We now investigate the power of the proposed t-test under the alternative hypothesis H1
in (9) with δ ̸= 0. Without loss of generality, we assume that δ > 0. The theorem below
gives a lower bound for the power of the t-test.
Theorem 4.5. Suppose that Assumption 4.1 holds for some δ > 0, and define the t-statistic Tm
21

Table 2: Largest significance value in (17) such that our two-sided t-test has a closedform critical value under various values of (m, ρ).
m \ ρ 0.1 0.2 0.5 1 2 3 4 5 10
5 3.950 4.418 6.438 9.456 11.866 12.505 12.647 12.693 12.770 10 3.911 4.510 7.313 9.026 9.404 9.435 9.480 9.486 9.504 20 3.684 4.615 6.337 6.711 6.829 6.850 6.874 6.866 6.874 25 3.491 4.442 6.068 6.278 6.354 6.350 6.357 6.365 6.389 50 3.768 4.663 5.308 5.330 5.391 5.437 5.435 5.436 5.441
as in (8). Then, for any finite c > 0,
P[|Tm| > c] ≥ P[Tm > c] ≥ 1 − 1
δ2
"
σ2m+1 + 2(c2 + m−1)
m
m
∑
j=1
σj2
#
.
The lower bound of power in Theorem 4.5 increases with δ, where δ corresponds to
√n(μ1 − μ0) in our large-sample inference for a finite number of clusters as shown in
Theorem 4.1. If the gap between the means of the treated and control clusters is bounded
away from zero, then, as the sample size n −→ ∞, the power of our t-test with any
finite critical value will converge to 1. In addition, Theorem 4.5 also provides a rough
power estimate when we have some information about the treatment effect size and the
variances for the treated and control clusters.
5 Simultaneous inference
Recall that Assumption 3.2 involves two parameters ρ and k. They represent the allowable
degree of relative heterogeneity between treated and control clusters. Specifically, larger
values of ρ and k correspond to a greater degree of allowable heterogeneity. In practice,
specifying the values of (ρ, k) might be challenging, and it is often desirable to perform
multiple analyses for a wide range of values for (ρ, k). This raises the question of how
to interpret the results of the analysis under different values of (ρ, k). In this section,
we show that the analyses over all possible values of (ρ, k) can be simultaneously valid,
without the need of any adjustment due to multiple analyses. Moreover, the analysis
results can be easily visualized and interpreted. Similar simultaneous inference has been
used for sensitivity analysis of observational studies (Cui and Li, 2025; Wu and Li, 2025).
22

We first introduce several notations to denote the true relative heterogeneity of the
standard deviations between treated and control clusters. For any k ∈ {1, . . . , m}, define
ρ⋆
k ≡ inf ρ ≥ 0 : σm+1 ≤ ρσ(k) =

   
   
σm+1
σ(k) , if σ(k) > 0,
0, if σ(k) = 0 and σm+1 = 0,
∞ if σ(k) = 0 and σm+1 > 0,
(18)
where σm+1 and σ(k) in (18) denote the true standard deviation of the treated cluster and
that of the control cluster at rank k. Consequently, the values of ρ⋆
k reflect the true relative
heterogeneity between the treated and control clusters. In particular, larger values of ρ⋆
k
indicate greater heterogeneity between the treated and control clusters.
We now explain the key idea for our simultaneous inference procedure. In Section 4,
we test the null hypothesis in (9) of no mean difference between the treated and control
clusters under Assumption 3.2 for some k ∈ {1, . . . , m} and ρ ≥ 0, which is equivalent to
that ρ⋆
k ≤ ρ with ρ⋆
k defined as in (18). Importantly, we can reinterpret the t-test in Algo
rithm 3.1 as a valid test for the null hypothesis of ρ⋆
k ≤ ρ about the true relative hetero
geneity in (18), under the assumption of no mean difference between treated and control
clusters (i.e., δ = 0). By standard test inversion, we can construct confidence intervals
for ρ⋆
k , which must be one-sided confidence intervals with unbounded right endpoints
and thus provide essentially lower bounds on the true relative heterogeneity, under the
assumption that δ = 0. Moreover, these confidence intervals will be simultaneously valid
across all k ∈ {1, . . . , m}. We summarize the results in the following theorem, followed
by a discussion of its practical implications and interpretation. For any z ∈ R, we write
(z, ∞] ≡ (z, ∞) ∪ {∞} and analogously [z, ∞] ≡ [z, ∞) ∪ {∞}.
Theorem 5.1. Let α ∈ (0, 1). Suppose Assumption 3.2 holds with δ = 0. Let Tm be the test
statistic as defined in (8).
(i) For any k ∈ {1, . . . , m}, an (1 − α)-confidence set for ρ⋆
k in (18) is
Im,α,k ≡ {ρ ≥ 0 : pm(|Tm|; k, ρ) > α} ∪ {∞} = (ρˆm,α,k, ∞] or [ρˆm,α,k, ∞], (19)
which must be an one-sided confidence interval with ρˆm,α,k ≡ inf Im,α,k.
(ii) The confidence intervals in (i) are simultaneously valid across all k ∈ {1, . . . , m}, in the
sense that
P [ρ⋆
k ∈ Im,α,k for all k ∈ {1, . . . , m}] ≥ 1 − α.
23

The interpretation of Theorem 5.1 is as follows. If there is no mean difference between
treated and control clusters (i.e., δ = 0), then we need to believe that, with (1 − α) confi
dence level, the relative heterogeneity ρ⋆
k in (18) must be greater than (or equal to) ρˆm,α,k,
for all k ∈ {1, . . . , m}. That is, with (1 − α) confidence level, the treated standard devia
tion σm+1 must be at least ρˆm,α,k times the control standard deviation σ(k) at rank k, for all
k ∈ {1, . . . , m}. If we question any of these statements on the true relative heterogeneity,
then the assumption of δ = 0 is likely to fail, or equivalently there is likely significant
mean difference between the treated and control clusters. Obviously, the larger the val
ues of {ρˆm,α,k}km=1, the stronger the evidence for a nonzero treatment effect. In practice,
we can easily visualize these confidence intervals by, say, plotting k against ρˆm,α,k; this is
illustrated in the two empirical applications in Section 7 ahead.
We now discuss the computation for the confidence intervals in Theorem 5.1. By the
definition of the p-value pm(c; k, ρ) in (11) and the fact that the set Sm(k, ρ) in (10) increases
as k or ρ increase, pm(c; k, ρ) must be nondecreasing in both k and ρ. The monotonicity
in ρ then explains the equivalent one-sided form of the set in (19). Thus, we can use the
bisection method to find the thresholds {ρˆm,α,k}km=1. In addition, the monotonicity in k
implies the threshold ρˆm,α,k is nonincreasing with k. Hence, we can first find cˆm,α,1, and
then sequentially use cˆm,α,k−1 as an upper bound for ρˆm,α,k in the bisection method, for
2 ≤ k ≤ m.
Remark 5.1. Hagemann (2024) also reported thresholds like {ρˆm,α,k} for his test. How
ever, his test only works when k = 1 or 2, while our test works for any k ∈ {1, . . . , m}.
In addition, as shown in Theorem 5.1, these thresholds can be interpreted as lower con
fidence bounds for the true relative heterogeneity, and they are simultaneously valid,
indicating that the confidence bounds for all k are indeed “free lunch” added to those
for k = 1 or 2. ■
6 Simulations
In this section, we consider two sets of numerical exercises to compare the performance
of the t-test against other methods for conducting inference with a single treated cluster.
6.1 Simulation design 1: normal means
The first simulation design generates data using normal distributions. The data gener
ating process (DGP) is as follows. We generate normal random variables as in Assump
24

tion 4.1. In particular, {ψj}jm=1 are normally distributed with mean 0, ψm+1 has mean δ,
σ2m+1 = ρ2, and {σj2}jm=1 are specified below.
We consider two different DGPs to generate the random variables for the control clus
ters.
DGP 1. σj2 = 1 for j = 1, . . . , m.
DGP 2. σj2 = 1 + j−1
m−1 for j = 1, . . . , m.
DGP 1 is the homogeneous design in which all control random variables have the same
varaiance. We introduce heterogeneity in DGP 2 and allow the variance to vary between
1 and 2. The goal is to test the two-sided hypothesis (9), under various heterogeneity
parameter ρ, cluster size m, and significance level α. We compare the performance of our
t-test with Hagemann (2024) in terms of size and power. This is because both of our tests
work with a single treated cluster and a finite number of control clusters, and are valid
under a certain relative heterogeneity assumption.
In the simulations, we consider ρ from 0.1 to 2 with step size 0.1, m ∈ {5, 10, 25, 50},
and α ∈ {0.01, 0.05, 0.1}. We focus on two-sided tests and choose ρ in our t-test and
Hagemann (2024) so that it matches the one used in the DGP, i.e., the relative heterogene
ity assumption is always correctly specified. The results are based on 500,000 Monte Carlo
replications. Figure 3 shows the result for α = 0.05 under DGP 1 when k = 1. The figure
plots the rejection rate against various values of ρ. Each facet represents a specific com
bination of m and δ. δ = 0 corresponds to the results under the null. δ > 0 corresponds
to the results under the alternative. Note that Hagemann (2024)’s result does not appear
or only partially appear in some of the facets. This is because Hagemann (2024) may not
necessarily be able to find a weight for his rearrangement test such that his test can be
shown to be valid for some combinations of m, ρ and k.
Figure 3 shows that our test performs favorably when compared to Hagemann (2024).
Both of our tests control size. The t-test is more powerful, especially when ρ is small. As
ρ increases above 1, the power difference decreases, but we are still more powerful.
Next, Figure 4 reports the results for DGP 2 that includes more heterogeneity among
the control random variables for α = 0.05 and k = 1. As predicted by the theory, our t-test
becomes more conservative when more heterogeneity are included. Our t-test continues
to control size and has power against the alternative. Moreover, our test outperforms
Hagemann (2024)’s test in most cases. In the supplementary material, we report the re
sults for k = 1 and k = 2 for both DGP at various significance levels.
25

m = 5 m = 10 m = 25 m = 50
δ = 0 (size) δ = 1 (power) δ = 2 (power) δ = 3 (power)
0.5 1 1.5 2 0.5 1 1.5 2 0.5 1 1.5 2 0.5 1 1.5 2
0.00
0.01
0.02
0.03
0.04
0.05
0.00
0.25
0.50
0.75
1.00
0.25
0.50
0.75
1.00
0.25
0.50
0.75
1.00
ρ
Rejection rate
Method Hagemann t−test
Figure 3: Probability of rejection against heterogeneity parameter ρ for various cluster size m and alternatives δ at α = 0.05 for DGP 1 of simulation design 1.
26

m = 5 m = 10 m = 25 m = 50
δ = 0 (size) δ = 1 (power) δ = 2 (power) δ = 3 (power)
0.5 1 1.5 2 0.5 1 1.5 2 0.5 1 1.5 2 0.5 1 1.5 2
0.00
0.01
0.02
0.03
0.04
0.05
0.00
0.25
0.50
0.75
1.00
0.00
0.25
0.50
0.75
1.00
0.25
0.50
0.75
1.00
ρ
Rejection rate
Method Hagemann t−test
Figure 4: Probability of rejection against heterogeneity parameter ρ for various cluster size m and alternatives δ at α = 0.05 for DGP 2 of simulation design 1.
27

6.2 Simulation design 2: two-way fixed effects
Next, we conduct a simulation exercise with two-way fixed effects as in Example 2.3.
We consider a design that is based on the ones used in Conley and Taber (2011) and
Hagemann (2024). As before, let J0 ≡ {1, . . . , m} be the control clusters and J1 ≡ {m + 1}
be the treated cluster. Let T ≡ {1, . . . , 10} be the total number of time periods. Let t0 = 6
be the intervention period and Djt ≡ 1[j ∈ J1 and t > t0] for j ∈ J and t ∈ T . Each
simulated data is generated from the following two-way fixed effects model
Yjt = αt + γj + θDjt + Ujt, (20)
where αt = 1 for all t ∈ T and γj = 21[j ≤ m
2 ] − 1 for all j ∈ J . We test the null of θ = 0
and consider θ ∈ {0, 1, 2, 3} when generating the data. We consider the following DGPs
based on model (20). The first four DGPs are the same as the ones considered in Hage
mann (2024). The remaining two DGPs are based on the error distributions considered in
Conley and Taber (2011).
DGP 1. Generate Ujt = ηUj,t−1 + σ1[j=m+1]Vjt where η = 0.5 and Vjt are independently
distributed standard normal random variables.
DGP 2. Same as DGP 1, but use η = 0.1.
DGP 3. Same as DGP 1, but use η = 0.9.
DGP 4. Same as DGP 1, but Vjt follows a normalized χ22 distribution with mean 0 and
variance 1.
DGP 5. Same as DGP 1, but use Vjt ∼ Uniform[−√3, √3].
For each DGP, we are interested in testing the two-sided hypothesis of
H0 : θ = 0 vs H1 : θ ̸= 0.
In addition, we consider simulations with m ∈ {5, 10, 25, 50}, σ ∈ {0.1, 0.5, 1, 2}, and
α = 0.05. We report the rejection rate curves based on 5,000 Monte Carlo simulations. For
each DGP, we consider conducting inference using the following four methods:
t The t-test proposed in our paper.
H The rearrangement test by Hagemann (2024).
CT The procedure of Conley and Taber (2011) that assumes homogeneity.
FP The bootstrap procedure of Ferman and Pinto (2019).
28

Figures 5 and 6 show the results for DGPs 1 and 2 under α = 0.05 across different
numbers of clusters m and true relative heterogeneity σ. We set the relative heterogeneity
parameter ρ for both our and Hagemann (2024)’s method in all the DGPs to be the corre
sponding σ, so that the relative heterogeneity assumption is correctly specified. We also
incorporate the correct value of σ in applying FP to specify the heterogeneity.
m = 5 m = 10 m = 25 m = 50
σ = 0.1 σ = 0.5 σ = 1 σ = 2
0 0.5 1 1.5 2 0 0.5 1 1.5 2 0 0.5 1 1.5 2 0 0.5 1 1.5 2
0.00
0.25
0.50
0.75
1.00
0.00
0.25
0.50
0.75
1.00
0.00
0.25
0.50
0.75
1.00
0.00
0.25
0.50
0.75
1.00
δ
Rejection rate
Methods t H FP CT
Figure 5: Simulation results for DGP 1 of simulation design 2 at α = 0.05.
It can be seen that our t-test performs well and compares favorably to other methods.
In particular, the CT test exhibits inflated Type I error rates when the number of control
clusters m is small and σ is large. This inflation arises because the validity of CT relies
on the assumption of an infinite number of clusters and homogeneous variances between
29

m = 5 m = 10 m = 25 m = 50
σ = 0.1 σ = 0.5 σ = 1 σ = 2
0 0.5 1 1.5 2 0 0.5 1 1.5 2 0 0.5 1 1.5 2 0 0.5 1 1.5 2
0.00
0.25
0.50
0.75
1.00
0.00
0.25
0.50
0.75
1.00
0.00
0.25
0.50
0.75
1.00
0.00
0.25
0.50
0.75
1.00
δ
Rejection rate
Methods t H FP CT
Figure 6: Simulation results for DGP 2 of simulation design 2 at α = 0.05.
the treated and control clusters. The FP test also shows an inflated Type I error when m
is small, with the inflation becoming more pronounced as σ decreases. This again reflects
its reliance on the asymptotic validity under an infinite number of clusters. Notably, we
assume that FP has access to the true heterogeneity between the treated cluster and each
control cluster, which is a stronger assumption than those required by our t-test or Hage
mann (2024)’s rearrangement test. Both our test and that of Hagemann (2024) successfully
control Type I error. In contrast, our test is applicable regardless of the number of con
trol clusters and demonstrates higher power across different levels of heterogeneity. The
results for DGPs 3 to 5 are contained in the supplementary material.
30

7 Empirical applications
In this section, we illustrate the t-test proposed in this paper with two recent empirical
applications. For each of the empirical applications, we report two sets of results. First,
we try to find the largest ρ such that the null hypothesis is rejected when k = 1 among
various regression specifications of the empirical examples. Among those specifications
where the null can be rejected at some ρ, we conduct simultaneous inference as discussed
in Section 5.
7.1 Empirical application 1: Depew and Swensen (2022)
Depew and Swensen (2022) examines the impact of the 1911 New York State Sullivan Act
on mortality rate. The Sullivan Act required New York citizens to obtain a permit and
license to carry concealable weapon. We consider the following two-way fixed effects
model:
Outcomejt = βTreatedjt + αt + γj + εjt, (21)
where Treatedjt equals 1 if state j is New York and t is the post-treatment period, αt is the
year fixed effects, γj is the state fixed effects, and εjt is the residual term. They consider
the following four outcome variables: homicide rate, suicide rate, gun suicide rate, and
non-gun suicide rate.
They report cluster-robust standard errors and p-value from the Wild cluster boot
strap. There is only nine control clusters in this empirical application. Hence, Hagemann
(2024)’s test may not be applicable because there can be no weights such that his rear
rangement test is valid for some relative heterogeneity parameters ρ.
We are interested in testing
H0 : β = 0 vs H1 : β ̸= 0. (22)
Table 3 summarizes the estimation and inference results of the baseline model de
scribed in (21) for the four outcomes described above. The point estimates and the Wild
cluster bootstrap p-values are taken from Table 2 of Depew and Swensen (2022).8
The remaining rows of Table 3 report the largest ρ such that the null can be rejected
for significance levels α = 0.01, 0.05, and 0.1. For entries with “NA” in the table, it refers
to the situation where there does not exist a ρ ≥ 0 such that the null is rejected. If we
8The point estimates and p-values that Depew and Swensen (2022) report are based on weighted least squares.
31

Table 3: Regression and inference results for empirical application 1 with k = 1.
Homicide rate Suicide rate Gun suicide rate Non-gun suicide rate
Point estimate -0.04 -0.85 -1.42 0.54
Wild p-value 0.87 0.29 0 0.28
Rearrangement test (Hagemann, 2024)
α = 0.01 NA NA NA NA
α = 0.05 NA NA NA NA
α = 0.1 NA NA NA NA
t-test
α = 0.01 NA NA 0.65 NA
α = 0.05 NA NA 1.03 NA
α = 0.1 NA NA 1.3 NA
focus on the gun suicide rate under α = 0.1, it means that the null can be rejected when
the variance in New York is at most 1.32 ≈ 1.69 larger than the smallest variance in the
control clusters. The true relative level of heterogeneity such that the null can be rejected
may be related to the population size of the various states. In particular, New York state
has a larger population than the other control states in 1911 (Federal Reserve Economic
Data, 2025): the population of New York state was 9.249 million, and the largest control
state was Massachusetts with 3.383 million and the smallest control state was Vermont
with 0.358 million.
Next, we conduct simultaneous inference for our t-test as in Section 5. We focus on the
outcome “gun suicide rate” as we can find ρ such that the null is rejected when k = 1.
Figure 7 reports the results for α ∈ {0.01, 0.05, 0.1} on the range of ρ for various k such
that the null can be rejected. The shaded area represents the simultaneous confidence
region for true relative heterogeneity when there is no treatment effect.
7.2 Empirical application 2: Hiraiwa et al. (2024)
Hiraiwa et al. (2024) examine whether firms enforce noncompete agreements (NCAs).
NCAs are restrictions that prevent workers from joining or starting competing firms. In
2020, Washington state passed a law that prohibits NCAs for workers earning below a
certain threshold. The threshold was $100,000 per year in 2020 and $101,390 per year in
32

α = 0.01 α = 0.05 α = 0.1
0.0 0.5 1.0 0.0 0.5 1.0 0.0 0.5 1.0
2
4
6
8
ρ
k
Figure 7: Simultaneous inference for empirical application 1 at different significance levels α.
2021. They study the impact of being above or below the threshold on employment for
different earnings bins. They consider the following two-way fixed effects model in their
panel B of Table 1:
log Empb,t = βTreatedb,t + αt + γb + εb,t,
where Empb,t is the employment count of bin b at year t, Treatedb,t equals 1 for the focal
bin in the focal year, αt and γb are the year and bin fixed effects, and εb,t is the error term.
They have 30 clusters (income bins). They use one-sided randomization inference and
found that there is no significant effect.
We apply our method and Hagemann (2024). We are interested in testing the two-sided
hypothesis as in (22). Table 4 summarizes our results. Each column contains the result
for a specific focal year and definition of the treatment variable. For instance, column 2
refers to focal year 2020, and the treatment variable is defined to be equal to 1 when the
income bin is just above the threshold, i.e., $100-101.389k. The remaining columns are
defined similarly. For each regression specification, we find the largest ρ such that the
null is rejected. For entries with “NA” in the table, it refers to the situation where there
does not exist a ρ ≥ 0 such that the null is rejected.
Next, we conduct simultaneous inference for our t-test as in the first empirical appli
cation. We focus on the two variables for focal year 2021 because we can find ρ such that
the null is rejected when k = 1. In particular, we report the range of ρ for various k as
long as there exists ρ such that the null can be rejected. Figure 8 reports the results for
α ∈ {0.01, 0.05, 0.1}.
33

Table 4: Regression and inference results for empirical application 2 with k = 1.
Focal year 2020 Focal year 2021
Above threshold $100–101.389k
Below threshold $98.61–100k
Above threshold $101.39–102.78k
Below threshold $100–101.39k
Point estimate -0.001 -0.002 -0.038 -0.024
Rearrangement test (Hagemann, 2024)
α = 0.01 NA NA NA NA
α = 0.05 NA NA NA NA
α = 0.1 NA NA NA NA
t-test
α = 0.01 NA NA 0.31 0.14
α = 0.05 NA NA 0.45 0.25
α = 0.1 NA NA 0.56 0.33
8 Conclusion
In this paper, we propose a t-test to conduct inference with a single treated cluster under a
certain relative heterogeneity assumption. The t-statistic and the associated critical values
are easy to calculate in many empirically relevant applications. We show that our test
performs favorably when compared to other methods in the literature. We also show that
our test is valid with weaker assumptions.
A Appendix for the main text
A.1 Lemmas for Section 4.2.3
We first state the lemma that the maximum rejection probability in (11) must be obtained
at some finite values of {σj}m+1
j=1 . This implies that we do not need to worry about the
boundary case where some of {σj}m+1
j=1 approach infinity.
Lemma A.1. For any k ∈ {1, . . . , m} and c ̸= m−1/2,9 the maximum rejection probability
9Similar to the footnote for Theorem 4.1 and as discussed in Remark 4.4, we will consider values of c greater than m−1/2 for most conventional significance levels.
34

Above threshold $101.39 − 102.78k
(focal year 2021) Below threshold $100 − 101.39k
(focal year 2021)
α = 0.01 α = 0.05 α = 0.1
0.0 0.2 0.4 0.0 0.2 0.4
0
10
20
30
0
10
20
30
0
10
20
30
ρ
k
Figure 8: Simultaneous inference for empirical application 2 for different outcomes and significance levels α.
pm(c; k, ρ) in (11) must be obtained at some (σ1, . . . , σm, σm+1) ∈ Sm(k, ρ).
Next, we investigate possible maximizers for the rejection probability. From Section
4.2.1, when σm+1 = 0, the rejection probability P0[|Tm| > c] of our t-test is at most pm,0(c)
defined as in (12), which can be achieved at some values of {σj}jm=1 that satisfy our relative
heterogeneity assumption, regardless of the values of ρ and k. Thus, in the following, we
consider only the case where σm+1 > 0.
35

Recall the integral representation of the rejection probability in Lemma 4.1. Our goal is
to optimize (13) over γj ≡ σj
σm+1 , j = 1, . . . , m, under the constraint imposed by the relative
heterogeneity assumption. Such an optimization can be numerically challenging even for
moderate m. The following is a key lemma that can greatly reduce the set of possible
maximizers for the rejection probability.
Lemma A.2. Consider the integral representation in (13) for the rejection probability. Fix the
values of c > 0, γ3, . . . , γm ≥ 0 and θm+1 < 0, and view the rejection probability P0[|Tm| >
c] ≡ pm(c; γ1, γ2, γ3, . . . , γm) as a function of only γ1, where γ2 is uniquely determined by
c, γ1, γ3, . . . , γm and θm+1. If c ̸= m−1/2, γ1 and γ2 are both positive and they are not equal,
i.e., γ1 ̸= γ2, and the first derivative of pm(c; γ1, γ2, γ3, . . . , γm) over γ12 is zero, then the second
derivative of pm(c; γ1, γ2, γ3, . . . , γm) over γ12 must be positive.
Lemma A.2 has an important implication. Specifically, given values of c, γ3, . . . , γm
and θm+1, if γ1 is in the interior of the feasible region for optimization, and γ1 ̸= γ2, then
(γ1, γ2, . . . , γm) cannot be a maximizer, or even a local maximizer, for the rejection proba
bility pm(c; γ1, γ2, γ3, . . . , γm). Moreover, because Tm is invariant to permutations of con
trol clusters, the value of pm(c; γ1, γ2, . . . , γm) is invariant to permutations of (γ1, . . . , γm).
Therefore, Lemma A.2 essentially applies to any pair (γi, γj) for i ̸= j.
For any k ∈ {1, . . . , m} and ρ > 0, suppose now that (σ1, . . . , σm, σm+1) is a maxi
mizer for the maximum rejection probability in (11), and σm+1 > 0. Then (γ1, . . . , γm) =
( σ1
σm+1 , . . . , σm
σm+1 ) must be a maximizer of pm(c; γ1, . . . , γm) over all (γ1, . . . , γm) ∈ Rm≥0 sat
isfying that γ(k) ≥ ρ−1, where γ(k) is the kth smallest value of {γj}jm=1. From Lemma A.2,
this cannot be true if there exists i ̸= j ∈ {1, 2, . . . , m} such that (i) γi ̸= γj, and (ii) both
γi and γj are not in the set {0, ρ−1}, where the latter ensures that γi and γj are not in the
boundary of the feasible region so that we can apply Lemma A.2. Therefore, to maximize
the rejection probability, it suffices to consider only the cases where γj, for 1 ≤ j ≤ m,
is either 0, or ρ−1, or some common value in R≥0. More specifically, under Assumption
3.2 for any given k and ρ > 0, it suffices to consider the following possible values for
(γ1, . . . , γm) for 0 ≤ m0 ≤ k − 1 and 0 ≤ m1 ≤ m − m0:

 
ρ−11m1
0m0
γ1m−m1−m0

 
⊤
, where γ ∈



R≥0, if m1 ≥ m − k + 1,
[ρ−1, ∞), if m1 < m − k + 1.
(23)
In (23), we essentially enumerate the possible numbers of {γj}jm=1 that are zero, ρ−1, and
some common value γ, respectively. Note that under Assumption 3.2 with given ρ > 0
36

and k, the number of terms in {γj}jm=1 that are zero is at most (k − 1), and the possible
range of the common value γ depends on the number m1 of the terms in {γj}jm=1 that are
already ρ−1. In particular, if m1 < m − k + 1, then the common value γ is at least ρ−1.
A.2 Lemmas for the k = 1 case in Section 4.3
In this subsection, we show that the optimization in (16) can be further simplified, by
excluding values of γ that cannot maximize pm(c; ρ, γ; m1, m0) in (15). This relies crucially
on the following lemma; we present a concise version below, and relegate the details to
the supplementary material.
Lemma A.3. Consider the integral representation in (13). Fix the values of c > 0, m ≥ 3,
γ3, . . . , γm ≥ 0 and θm+1 < 0, and view the rejection probability P0[|Tm| > c] = pm(c; γ1, γ2, γ3,
. . . , γm) as a function of only γ1, where γ2 is uniquely determined by c, γ1, γ3, . . . , γm and θm+1.
If γ1 = max1≤i≤m γi > γ2 > 0 c ≥
q 2(m−1)
m(m−2) , and Hm(c; γ1, . . . , γm) < 010, then the first
order derivative of pm(c; γ1, γ2, γ3, . . . , γm) over γ12 must be negative.
Lemma A.3 has an important implication. Specifically, given values of γ3, . . . , γm and
θm+1, if, for some small ε > 0, [γ1 − ε, γ1] is in the feasible region for optimization, and
the conditions in Lemma A.3 holds, then (γ1, γ2, . . . , γm) cannot be a maximizer, or even a
local maximizer, for the rejection probability pm(c; γ1, γ2, γ3, . . . , γm). This is because we
can strictly increase this rejection probability by slightly decreasing γ1. Analogous to the
discussion after Lemma A.2, because the rejection probability is invariant to permutations
of (γ1, . . . , γm), we can always set γ1 = max1≤i≤m γi without loss of generality, and apply
Lemma A.3 to any γj with 2 ≤ j ≤ m. As long as the conditions in Lemma A.3 hold for
some 2 ≤ j ≤ m, we can exclude the corresponding (γ1, . . . , γm) from the set of possible
maximizers for the rejection probability.
We apply Lemma A.3 to the optimization in (16) to exclude some values of γ > ρ−1
that cannot maximize pm(c; ρ, γ; m1, m0)11. In the ideal case, we can exclude all values
of γ > ρ−1, and the optimization in (16) is either solved or needs only to be maximized
over γ ∈ [0, ρ−1]. In Theorem 4.4, we focus on the relative heterogeneity assumption with
k = 1, i.e., the treated standard deviation is smaller than or equal to ρ times each of the
control standard deviations. We relegate the discussion under Assumption 3.2 with k ≥ 2
to the supplementary material.
10We give the detailed expression of Hm(·) in the supplementary material 11Specifically, when using Lemma A.3, we set γ1 to be γ and γ2 to be ρ−1.
37

A.3 t-test with a large number of clusters
Despite that our inference procedure focuses on the case with a finite number of control
clusters, we briefly explore the asymptotic regime where the number of control clusters
tends to infinity. This offers useful insights even when the number of control clusters is
finite. Below we first state a rather weak regularity condition. We then present the main
theorem and discuss its implications.
Condition A.1. As m −→ ∞, both σ2m+1 and m−1 ∑jm=1 σj2 are bounded away from zero
and infinity, and m−2 ∑jm=1 σj4 −→ 0.
Theorem A.1. Under Assumption 4.1 and Condition A.1, as m −→ ∞, we have
sup
c∈R
P[Tm ≤ c] − P
"
σm+1ε + δ
q
m−1 ∑jm=1 σj2
≤c
#
−→ 0.
where ε ∼ N (0, 1).
From Theorem A.1, when m is large, the distribution of the test statistic Tm under both
the null and the alternative hypotheses can be approximated by an Gaussian distribution.
This has important implications, as detailed below.
First, suppose the null hypothesis H0 in (9) holds (i.e., δ = 0). Then, when the num
ber of clusters is large, the rejection probability P0[|Tm| > c] depends only the ratio be
tween the treated-cluster variance σ2m+1 and the average of the control-cluster variances
m−1 ∑jm=1 σj2. It is increasing in this ratio. In particular, under Assumption 3.2 for some
ρ > 0, we have the following for any c > 0:
P0[|Tm| > c] ≈ P
"
σm+1|ε|
q
m−1 ∑jm=1 σj2
>c
#
≤P
"s
mρ2
m − k + 1 · |ε| > c
#
,
where the last inequality becomes equality when σm+1 = 1, (k − 1) of {σj}jm=1 equal 0,
and the remaining (m − k + 1) equal ρ−1. It also implies that the critical value cvm,α,k,ρ
of a level-α test is approximately
qm
m−k+1 · ρz 2α , where z 2α is the α
2 upper quantile of the
standard normal distribution.
Second, under the alternative hypothesis with, say, δ > 0, the above discussion also
38

implies that the power of the level-α t-test is approximately
P[|Tm| > cvm,α,k,ρ] ≈ P
"
σm+1ε + δ
q
m−1 ∑jm=1 σj2
>
s
mρ2
m − k + 1 z 2α
#
=P
"
ε+ δ
σm+1
> Rm,k,ρz α2
#
≥P
"
ε+ δ
σm+1
> Rm,k,ρz 2α
#
, (24)
where R2m,k,ρ is the ratio between the maximum possible value of σ2m+1
m−1 ∑jm=1 σj2
and the cor
responding true value, and Rm,k,ρ is the square root of R2m,k,ρ. From (24), the lower bound
of the approximate power in (24), which is also approximately the power of an one-sided
level- α
2 test, is increasing in δ
σm+1 and decreasing in Rm,k,ρ. This is intuitive, since δ
σm+1 rep
resents the signal-to-noise ratio, whereas Rm,k,ρ represents how conservative we are when
making the relative heterogeneity assumption.
We now give a remark that is helpful for our numerical search of the critical value
when m is finite.
Remark A.1. Recall that γj ≡ σj
σm+1 for 1 ≤ j ≤ m. From the discussion before, the maxi
mum rejection probability is achieved when k − 1 of {γj}jm=1 equal 0 and the remaining
(m − k + 1) equal 1. Thus, given any significance level, we suggest using this configura
tion of {γj}jm=1 as an initial guess for the desired critical value for any finite m, and then
use the optimization in Theorem 4.3 to verify whether such an initial guess of critical
value leads to the t-test with the desired significance level; see Remark 4.5. Moreover,
as demonstrated in Section 4.3, under the relative heterogeneity assumption with k = 1,
the maximizer for the rejection probability from the asymptotic analysis with large m
is also valid when the number of control clusters is finite and the significance level is
sufficiently small. Our numerical experiment shows that this holds more generally; at
usual significance levels, the critical value from the asymptotic analysis with large m is
often valid even when m is finite, for general relative heterogeneity assumption with
k ≥ 1. ■
References
ALPERT, A., S. DYKSTRA, AND M. JACOBSON (2024): “Hassle Costs versus Information: How Do Prescription Drug Monitoring Programs Reduce Opioid Prescribing?” American Economic
39

Journal: Economic Policy, 16, 87–123.
ALVAREZ, L. AND B. FERMAN (2023): “Inference in Difference-in-Differences with Few Treated Units and Spatial Correlation,” .
ALVAREZ, L., B. FERMAN, AND K. W  ̈UTHRICH (2025): “Inference with few treated units,” arXiv preprint arXiv:2504.19841.
BAKER, A., B. CALLAWAY, S. CUNNINGHAM, A. GOODMAN-BACON, AND P. H. C. SANT’ANNA
(2025): “Difference-in-Differences Designs: A Practitioner’s Guide,” .
BAKIROV, N. (1989): “An extremal property of the student distribution,” Journal of Mathematical Sciences, 44, 433–440.
BAKIROV, N. K. (1998): “Nonhomogeneous samples in the Behrens-Fisher problem,” Journal of Mathematical Sciences, 89, 1460–1467.
BAKIROV, N. K. AND G. J. SZ  ́EKELY (2006): “Student’s t-test for Gaussian scale mixtures,” Journal of Mathematical Sciences, 139, 6497–6505.
BESTER, A., T. CONLEY, AND C. HANSEN (2011): “Inference with dependent data using cluster covariance estimators,” Journal of Econometrics, 165, 137–151.
CAMERON, A., J. GELBACH, AND D. MILLER (2008): “Bootstrap-Based Improvements for Inference with Clustered Errors,” The Review of Economics and Statistics, 90, 414–427.
CAMERON, A. C. AND D. L. MILLER (2015): “A practitioner’s guide to cluster-robust inference,” Journal of human resources, 50, 317–372.
CANAY, I. A., J. P. ROMANO, AND A. M. SHAIKH (2017): “Randomization Tests under an Approximate Symmetry Assumption,” Econometrica, 85, 1013–1030.
CANAY, I. A., A. SANTOS, AND A. M. SHAIKH (2021): “The Wild Bootstrap with a “small” number of “large” Clusters,” The Review of Economics and Statistics, 2021.
CONLEY, T., S. GON  ̧CALVES, AND C. HANSEN (2018): “Inference with Dependent Data in Accounting and Finance Applications,” Journal of Accounting Research, 56, 1139–1203.
CONLEY, T. G. AND C. R. TABER (2011): “Inference with “Difference in Differences” with a Small Number of Policy Changes,” The Review of Economics and Statistics, 93, 113–125.
CUI, H. AND X. LI (2025): “Robust Sensitivity Analysis via Augmented Percentile Bootstrap under Simultaneous Violations of Unconfoundedness and Overlap,” arXiv preprint arXiv:2509.13169.
DE CHAISEMARTIN, C. AND X. D’HAULTFŒUILLE (2022): “Two-way fixed effects and differencesin-differences with heterogeneous treatment effects: a survey,” The Econometrics Journal, 26, C1–C30.
DEPEW, B. AND I. SWENSEN (2022): “The Effect of Concealed-Carry and Handgun Restrictions on Gun-Related Deaths: Evidence from the Sullivan Act of 1911,” The Economic Journal, 132, 2118–2140.
40

DILLENDER, M., L. JINKS, AND A. T. LO SASSO (2023): “When (and why) providers do not respond to changes in reimbursement rates,” Journal of Public Economics, 217, 104781.
FEDERAL RESERVE ECONOMIC DATA (2025): “Resident Population by State, Annual,” https: //fred.stlouisfed.org/release/tables?rid=118&eid=259194&od=1911-01-01#, accessed: 2025-05-25.
FERMAN, B. AND C. PINTO (2019): “Inference in Differences-in-Differences with Few Treated Groups and Heteroskedasticity,” The Review of Economics and Statistics, 101, 452–467.
HAGEMANN, A. (2022): “Permutation inference with a finite number of heterogeneous clusters,” Working Paper.
——— (2024): “Inference with a single treated cluster,” Working Paper.
HARRIS, D. N. AND M. F. LARSEN (2023): “Taken by storm: The effects of Hurricane Katrina on medium-term student outcomes in New Orleans,” Journal of Human Resources, 58, 1608–1643.
HIRAIWA, T., M. LIPSITZ, AND E. STARR (2024): “Do Firms Value Court Enforceability of Noncompete Agreements? A Revealed Preference Approach,” The Review of Economics and Statistics, 1–47.
HOROWITZ, J. AND C. MANSKI (1995): “Identification and Robustness with Contaminated and Corrupted Data,” Econometrica, 63, 281–302.
IBRAGIMOV, R. AND U. K. M  ̈ULLER (2010): “t-Statistic Based Correlation and Heterogeneity Robust Inference,” Journal of Business & Economic Statistics, 28, 453–468.
——— (2016): “Inference with Few Heterogeneous Clusters,” The Review of Economics and Statistics, 98, 83–96.
KLINE, P. AND A. SANTOS (2013): “Sensitivity to missing data assumptions: Theory and an evaluation of the U.S. wage structure,” Quantitative Economics, 4, 231–267.
KUMAR, A. AND C.-Y. LIANG (2024): “Labor Market Effects of Credit Constraints: Evidence from a Natural Experiment,” American Economic Journal: Economic Policy, 16, 1–26.
LAU, C. P. (2025): “Combining Clusters for the Approximate Randomization Test,” Working Paper.
MACKINNON, J. G., M. ØRREGAARD NIELSEN, AND M. D. WEBB (2023): “Cluster-robust inference: A guide to empirical practice,” Journal of Econometrics, 232, 272–299.
MAKSHANOV, A. AND O. SHALAEVSKII (1977): “Some problems of asymptotic approximations of distributions,” Zapiski Nauchnykh Seminarov POMI, 74, 118–138.
MASTEN, M. A. AND A. POIRIER (2020): “Inference on breakdown frontiers,” Quantitative Economics, 11, 41–111.
OLDEN, A. AND J. MØEN (2022): “The triple difference estimator,” The Econometrics Journal, 25, 531–553.
41

ROTH, J., P. H. SANT’ANNA, A. BILINSKI, AND J. POE (2023): “What’s trending in differencein-differences? A synthesis of the recent econometrics literature,” Journal of Econometrics, 235, 2218–2244.
WANG, J. AND K. BURKE (2022): “The effects of disclosure and enforcement on payday lending in Texas,” Journal of Financial Economics, 145, 489–507.
WANG, Y. AND X. LI (2022): “Rerandomization with diminishing covariate imbalance and diverging number of covariates,” The Annals of Statistics, 50, 3439 – 3465.
WU, D. AND X. LI (2025): “Sensitivity analysis for quantiles of hidden biases in matched observational studies,” Journal of the American Statistical Association, 1–12.
42

Supplementary material for “Cluster-robust inference with a single treated cluster using the t-test”
S1 Technical lemmas for the t-test
Throughout this section, we will study t-test based on independent normal observations
under Assumption 4.1. In Section S1.1, we will show that the t-test reject the null if and
only if a certain quadratic form of the normal observations is bounded by 0, and study
the property of the corresponding coefficient matrix, particularly about its characteristic
polynomial. In Section S1.2, we give an integral representation of the rejection probability.
In Section S1.3, we study the first and second order partial derivatives of the rejection
probability. In Section S1.4, we study bounds on the first order partial derivative of the
rejection probability.
S1.1 Quadratic form and characteristic polynomial of the coefficient
matrix
Lemma S1.1. Recall the definition of Tm in (8). Let ψ ̃ ≡ (ψm+1, ψ1, . . . , ψm)⊤. Then for any
c > 0,
|Tm| > c ⇐⇒ ψ ̃ ⊤V ψ ̃ < 0 (S25)
where
κ ≡ mc2
m − 1 and V ≡ −m 1m⊤
1m κIm − κ+1
m 1m1m⊤
!
.
Proof of Lemma S1.1. By definition, for any c > 0, |Tm| > c if and only if |ψm+1 − ψm| >
cSm, which is further equivalent to mc2S2m − m(ψm+1 − ψm)2 < 0. Let 1m be an m
dimensional vector with all elements being 1, 0m be an m-dimensional vector with all
elements being 0, and Im be an m × m identity matrix. By some algebra, we can show
that
(ψm+1 − ψm)2 = ψ ̃ ⊤ 1
−m−11m
!
1 −m−11m⊤ ψ ̃ = ψ ̃ ⊤ 1 −m−11m⊤
−m−11m m−21m1m⊤
!
ψ ̃ ,
43

and
(m − 1)S2m =
m
∑
j=1
(ψj − ψm)2 = ψ⊤
1:m(Im − m−11m1m⊤)ψ1:m = ψ⊤
1:m(Im − m−11m1m⊤)ψ1:m
= ψ ̃ ⊤ 0 0m⊤
0m Im − m−11m1m⊤
!
ψ ̃ ,
where ψ1:m ≡ (ψ1, . . . , ψm)⊤. These imply that
mc2S2m − m(ψm+1 − ψm)2
= mc2
m − 1 ψ ̃ ⊤ 0 0m⊤
0m Im − m−11m1m⊤
!
ψ ̃ − mψ ̃ ⊤ 1 −m−11m⊤
−m−11m m−21m1m⊤
!
ψ ̃
= ψ ̃ ⊤
"
0 0m⊤
0m mc2
m−1 Im − c2
m−1 1m1m⊤
!
− m −1m⊤
−1m m−11m1m⊤
!#
ψ ̃
= ψ ̃ ⊤ −m 1m⊤
1m mc2
m−1 Im − 1
m ( mc2
m−1 + 1)1m1m⊤
!
ψ ̃
= ψ ̃ ⊤V ψ ̃ ,
where the last equality holds by definition. From the above, we derive Lemma S1.1.
Lemma S1.2. Let D ≡ diag(σm+1, σ1, . . . , σm), and define V and κ as in Lemma S1.1. For any
nonnegative σ12, σ22, . . . , σ2m+1,
f (λ) ≡ −(mσ2m+1 + λ)
m
∏
i=1
(κσi2 − λ) + κσ2m+1 + κ + 1
mλ ·
m
∑
i=1
"
σi2 ∏
j̸=i,1≤j≤m
(κσj2 − λ)
#
is a characteristic polynomial of DV D.
Proof of Lemma S1.2. We first consider the case where σ1, σ2, . . . , σm+1 are all positive.
Let diag(σ−2
1:m) be an m × m diagonal matrix with diagonal elements (σ−2
1 , . . . , σm−2). By
definition, we have
V − λD−2 = −m 1m⊤
1m κIm − κ+1
m 1m1m⊤
!
− λD−2
= −m − λσ−2
m+1 1m⊤
1m κIm − λdiag(σ−2
1:m) − κ+1
m 1m1m⊤
!
44

=

       
b 1 1 ··· 1
1 d + c1 d · · · d
1 d d + c2 · · · d
... ... ... . . . ...
1 d d · · · d + cm

       
,
where b = −m − λσ−2
m+1, d = − κ+1
m , and ci = κ − λσ−2
i for 1 ≤ i ≤ m. Applying Bakirov
(1998, Proposition 1), we have
det(DV D − λIm+1)
= det(D)2 det(V − λD−2)
=
m+1
∏
j=1
σj2
b 1 1 ··· 1
1 d + c1 d · · · d
1 d d + c2 · · · d
... ... ... . . . ...
1 d d · · · d + cm
=
m+1
∏
j=1
σj2 · b
m
∏
i=1
ci 1 + d
m
∑
i=1
1
ci
−1
b
m
∑
i=1
1
ci
!
= σ2m+1b ·
m
∏
i=1
(σi2ci) ·
"
1 + d − σ2m+1
σ2m+1b
!m
∑
i=1
σi2
ci σi2
#
= −(mσ2m+1 + λ) ·
m
∏
i=1
(κσi2 − λ) ·
"
1+ −κ +1
m + σ2m+1
mσ2m+1 + λ
!m
∑
i=1
σi2
κσi2 − λ
#
= −(mσ2m+1 + λ)
m
∏
i=1
(κσi2 − λ) − − κ + 1
m (mσ2m+1 + λ) + σ2m+1 ·
m
∑
i=1
"
σi2 ∏
j̸=i,1≤j≤m
(κσj2 − λ)
#
= −(mσ2m+1 + λ)
m
∏
i=1
(κσi2 − λ) + κσ2m+1 + κ + 1
mλ ·
m
∑
i=1
"
σi2 ∏
j̸=i,1≤j≤m
(κσj2 − λ)
#
= f (λ),
where the last equality holds by definition.
We then consider the case where some of the {σj}m+1
j=1 can be zero. By definition, for
any λ ∈ R, both det(DV D − λIm+1) and f (λ), viewed as functions of {σj}m+1
j=1 , are
polynomial and thus continuous functions of {σj}m+1
j=1 . By continuity and the fact that
det(DV D − λIm+1) = f (λ) for any positive {σj}m+1
j=1 , we can know that det(DV D −
λIm+1) must equal f (λ) for any nonnegative {σj}m+1
j=1 .
45

From the above, Lemma S1.2 holds.
Lemma S1.3. Consider any positive σm+1 and any nonnegative σ1, . . . , σm. Let κ ≡ mc2
m−1 ,
γi ≡ σi
σm+1 for 1 ≤ i ≤ m, and
g(θ) = −(m + θ)
m
∏
i=1
(κγi2 − θ) + κ + κ + 1
mθ ·
m
∑
i=1
"
γi2 ∏
j̸=i
(κγj2 − θ)
#
. (S26)
Then, for any λ ∈ R, f (λ) in Lemma S1.2 can be written equivalently as
f (λ) = (σ2m+1)m+1g λ
σ2m+1
!
.
Consequently, if λ1, . . . , λm+1 are the m + 1 roots of f (·), then θi = λi
σ2m+1
, i = 1, 2, . . . , m + 1,
are the (m + 1) roots of g(·).
Proof of Lemma S1.3. For any positive σ2m+1, λ ∈ R and θ ≡ λ
σ2m+1
, by definition and
some algebra, we can verify that
(σ2m+1)−(m+1) · f (λ) = −(m + θ)
m
∏
i=1
(κγi2 − θ) + κ + κ + 1
mθ ·
m
∑
i=1
"
γi2 ∏
j̸=i
(κγj2 − θ)
#
= g(θ).
This immediately implies Lemma S1.3.
Lemma S1.4. Consider any c > 0, any positive σm+1, and any nonnegative σ1, . . . , σm. Define
κ, γ1, . . . , γm and g(·) as in Lemma S1.3. Define further τ ≡ κ+1
κm . Let γ(1) ≤ γ(2) ≤ . . . ≤
γ(m) be the sorted values of γ1, γ2, . . . , γm. The (m + 1) roots of g(θ) in (S26) can then be
characterized as follows:
(a) for each 1 ≤ i ≤ m − 1, there is a nonnegative root θi ∈ (κγ2
(i), κγ2
(i+1)) if γ(i) < γ(i+1)
and θi = κγ2
(i) otherwise;
(b) there is a zero root θm = 0;
(c) there is a negative root θm+1 < −τ−1.
Proof of Lemma S1.4. First, we give an equivalent expression for g(·). Let {γ ̃i}iL=1 be the
unique ordered values of {γi}im=1 such that γ ̃1 < · · · < γ ̃ L. In addition, let mi be the
multiplicity of γ ̃i for each i = 1, . . . , L. Note that ∑iL=1 mi = m by construction. From
46

Lemma S1.3, g(·) in (S26) has the following equivalent forms:
g(θ) = −(m + θ)
m
∏
i=1
(κγi2 − θ) + κ + κ + 1
mθ ·
m
∑
i=1
"
γi2 ∏
j̸=i
(κγj2 − θ)
#
=
L
∏
i=1
(κγ ̃ i2 − θ)mi−1
(
−(m + θ)
L
∏
i=1
(κγ ̃i2 − θ) + κ + κ + 1
mθ ·
L
∑
i=1
"
miγ ̃i2 ∏
j̸=i
(κγ ̃ j2 − θ)
#)
=
L
∏
i=1
(κγ ̃i2 − θ)mi−1g ̃(θ), (S27)
where
g ̃(θ) ≡ −(m + θ)
L
∏
i=1
(κγ ̃i2 − θ) + κ + κ + 1
mθ ·
L
∑
i=1
"
miγ ̃i2 ∏
j̸=i
(κγ ̃ j2 − θ)
#
.
From (S27), it can be seen that there are ∑iL=1(mi − 1) = ∑iL=1 ml − L = m − L roots from
the factor ∏iL=1(κγ ̃i2 − θ)mi−1.
Second, we prove (a) and (b) in the case where γ ̃1 > 0. Consider the value of g(·)
evaluated at κγ ̃l2 for l = 1, . . . , L. By definition, for 1 ≤ l ≤ L, we have
g ̃(κγ ̃l2) ≡ −(m + κγ ̃l2)
L
∏
i=1
(κγ ̃i2 − κγ ̃ l2)
| {z }
=0
+ κ+ κ+1
m κγ ̃ l2 ·
L
∑
i=1
"
miγ ̃i2 ∏
j̸=i
(κγ ̃ j2 − κγ ̃ l2)
#
= κ+ κ+1
m κγ ̃ l2 · mlγ ̃ l2 · ∏
j̸=l
(κγ ̃ j2 − κγ ̃ l2)
= κL−1 κ + κ + 1
m κγ ̃ l2 · mlγ ̃ l2
| {z }
>0
·∏
j̸=l
(γ ̃ j2 − γ ̃ l2). (S28)
By the construction of {γ ̃ j}jL=1, we can know that the sign of g ̃(κγ ̃l2) is (−1)l−1 for 1 ≤
l ≤ L. Thus, by the continuity of g ̃(·), it must have a positive root in (κγ ̃l2, κγ ̃l2+1), for
l = 1, 2, . . . , L − 1. In addition, we can verify that
g ̃(0) ≡ −m
L
∏
i=1
(κγ ̃i2) + κ ·
L
∑
i=1
"
miγ ̃i2 ∏
j̸=i,1≤j≤L
(κγ ̃ j2)
#
= −mκL L
∏
i=1
γ ̃i2 + κL ·
L
∑
i=1
mi
L
∏
j=1
γ ̃ j2
!
47

= κL L
∏
i=1
γ ̃i2 · −m +
L
∑
i=1
mi
!
= 0.
Combined with the first part, we can know that (a) and (b) in Lemma S1.4 hold.
Third, we prove (a) and (b) in the case where γ ̃1 = 0. In this case, g ̃(·) simplifies to
g ̃(θ) ≡ −(m + θ)(−θ)
L
∏
i=2
(κγ ̃i2 − θ) + κ + κ + 1
m θ (−θ) ·
L
∑
i=2
"
miγ ̃i2 ∏
j̸=1,i
(κγ ̃ j2 − θ)
#
= −θ ·
(
−(m + θ)
L
∏
i=2
(κγ ̃i2 − θ) + κ + κ + 1
mθ ·
L
∑
i=2
"
miγ ̃i2 ∏
j̸=1,i
(κγ ̃ j2 − θ)
#)
= −θ · gˇ(θ), (S29)
where
gˇ(θ) = −(m + θ)
L
∏
i=2
(κγ ̃i2 − θ) + κ + κ + 1
mθ ·
L
∑
i=2
"
miγ ̃i2 ∏
j̸=1,i
(κγ ̃ j2 − θ)
#
.
We can verify that
gˇ(κγ ̃12) = gˇ(0) = −m
L
∏
i=2
(κγ ̃i2) + κ ·
L
∑
i=2
"
miγ ̃i2 ∏
j̸=1,i
(κγ ̃ j2)
#
= κL−1 L
∏
i=2
γ ̃i2 −m +
L
∑
i=2
mi
!
= κL−1 L
∏
i=2
γ ̃i2 · (−m1) < 0,
where the last equality holds because ∑iL=1 mi = m, and for 2 ≤ l ≤ L,
gˇ(κγ ̃l2) = −(m + κγ ̃l2)
L
∏
i=2
(κγ ̃i2 − κγ ̃ l2)
| {z }
=0
+ κ+ κ+1
m κγ ̃ l2 ·
L
∑
i=2
"
miγ ̃i2 ∏
j̸=1,i
(κγ ̃ j2 − κγ ̃ l2)
#
= κ+ κ+1
m κγ ̃ l2 · mlγ ̃ l2
| {z }
>0
·∏
j̸=1,l
(κγ ̃ j2 − κγ ̃ l2),
whose sign is (−1)l−2. Thus, by the continuity of gˇ(·), it must have a positive root in
(κγ ̃l2, κγ ̃l2+1), for l = 1, 2, . . . , L − 1. In addition, as shown in (S29), g ̃(·) also has a zero
root. Combined with the first part, we can know that (a) and (b) in Lemma S1.4 holds.
Fourth, we prove (c). Consider first the sign of the limit of g(θ) as θ −→ −∞. By
48

definition,
lim
θ→−∞ θ−(m+1)g(θ)
= lim
θ→−∞
(
−(m/θ + 1)
m
∏
i=1
(κγi2/θ − 1) + θ−1 κ/θ + κ + 1
m·
m
∑
i=1
"
γi2 ∏
j̸=i
(κγj2/θ − 1)
#)
= (−1)m+1.
Consequently, g(θ) is positive when θ is sufficiently small. Consider then the sign of
g(θ) when −τ−1 ≤ θ < 0. By definition, for θ < 0,
"m
∏
i=1
(κγi2 − θ)
#−1
| {z }
>0
g(θ)
= −(m + θ) + κ + κ + 1
mθ ·
m
∑
i=1
γi2
κγi2 − θ
= −(m + θ) + (1 + τθ) ·
m
∑
i=1
κγi2
κγi2 − θ
=
m
∑
i=1
"
κγi2 + τθκγi2
κγi2 − θ
−1
#
−θ =
m
∑
i=1
τθκγi2 + θ
κγi2 − θ
−θ =θ
m
∑
i=1
τκγi2 + 1
κγi2 − θ
−1
!
=θ
"m
∑
i=1
τ(κγi2 + τ−1)
κγi2 − θ
−1
#
. (S30)
When −τ−1 ≤ θ < 0, we have τ−1 ≥ −θ, and thus κγi2 + τ−1 ≥ κγi2 − θ. This then
implies that
"m
∏
i=1
(κγi2 − θ)
#−1
| {z }
>0
g(θ) = θ
"m
∑
i=1
τ(κγi2 + τ−1)
κγi2 − θ
−1
#
≤θ
m
∑
i=1
τ−1
!
= θ(mτ − 1)
=θ κ+1
κ
−1
< 0.
Consequently, g(θ) is negative for θ ∈ [−τ−1, 0). From the above, g(·) must have a
negative root in (−∞, −τ−1). Thus, (c) in Lemma S1.4 holds.
49

From the above, Lemma S1.4 holds.
S1.2 Integral representation of the rejection probability
Lemma S1.5. Recall the test statistic Tm in (8). Let {θi}m+1
i=1 be the roots of the function g(·) in
Lemma S1.3, with θm+1 being the unique negative root, and g0(θ) ≡ ∏m+1
i=1 (θ − θi). Then for
any c > 0, any positive σm+1, and any nonnegative σ1, . . . , σm,
P[|Tm| > c] = 1
π
Z |θm+1|
0
s m2−1
[(−1)mg0(−s)] 12
ds = 1
π
Z |θm+1|
0
s m2−1
[−g(−s)] 12
ds
Proof of Lemma S1.5. Let {ξi}m+1
i=1 be i.i.d. standard normal random variables, and ξ ≡
(ξ1, ξ2, . . . , ξm+1)⊤. From Lemma S1.1, the probability that |Tm| > c is equivalent to:
P[|Tm| > c] = P[ψ ̃ ⊤V ψ ̃ < 0] = P[ξ⊤DV Dξ < 0] = P
"m+1
∑
i=1
λiξi2 < 0
#
,
where λ1, λ2, . . . , λm+1 are eigenvalues of DV D or equivalently the roots of the charac
teristic polynomial in Lemma S1.2. From Lemma S1.3, it can be further written as
P[|Tm| > c] = P
"m+1
∑
i=1
λiξi2 < 0
#
=P
"m+1
∑
i=1
λiσ−2
m+1ξi2 < 0
#
=P
"m+1
∑
i=1
θiξi2 < 0
#
.
Using Makshanov and Shalaevskii (1977, Theorem 2), we can write the probability as the
following integral:
P[|Tm| > c] = P


ξ 2m+1
∑im=1
θi
|θm+1| ξi2
>1

= 1 π
Z∞
0
t− 21 (1 + t)−1
q
∏im=1[1 + θi
|θm+1| (1 + t)]
dt. (S31)
By some algebra and the definition of g0(·),
m
∏
i=1
1 + θi
|θm+1| (1 + t)
=
m
∏
i=1
|θm+1|
1 + t + θi
1+t
|θm+1| = 1 + t
|θm+1|
mm
∏
i=1
|θm+1|
1 + t + θi
= 1+t
|θm+1|
m |θm+1|
1 + t − |θm+1|
−1 m+1
∏
i=1
|θm+1|
1 + t + θi
50

= −1
t
1+t
|θm+1|
m+1 m+1
∏
i=1
|θm+1|
1 + t + θi = (−1)m+2 1
t
1+t
|θm+1|
m+1 m+1
∏
i=1
− |θm+1|
1 + t − θi
= (−1)m 1
t
1+t
|θm+1|
m+1
g0 − |θm+1|
1+t .
We can then write (S31) as
P[|Tm| > c] = 1
π
Z∞
0
(1 + t)− m2+1 −1|θm+1| m2+1
[(−1)mg0(− |θm+1|
1+t )] 12
dt.
After a change of variable with s = |θm+1|
1+t and ds = −|θm+1|(1 + t)−2 dt, this further
simplifies to
P[|Tm| > c] = 1
π
Z0
|θm+1|
(1 + t)−1s m2+1
[(−1)mg0(−s)] 12
· − (1 + t)2
|θm+1| ds = 1
π
Z |θm+1|
0
s m2−1
[(−1)mg0(−s)] 12
ds.
Note that, by definition, g(θ) and g0(θ) are both polynomial functions of θ and have
exactly the same roots. Hence, they must be a scalar multiple of each other. Because the
coefficient of θm+1 in g(θ) is (−1)m+1 and the coefficient of θm+1 in g0(θ) is 1, we have
g(θ) = (−1)m+1 · g0(θ). Consequently,
P[|Tm| > c] = 1
π
Z |θm+1|
0
s m2−1
[(−1)mg0(−s)] 12
ds = 1
π
Z |θm+1|
0
s m2−1
[−g(−s)] 12
ds
From the above, Lemma S1.5 holds.
Lemma S1.6. Recall the test statistic Tm in (8), and consider any c > 0, any positive σm+1, and
any nonnegative σ1, . . . , σm. Define κ ≡ mc2
m−1 , τ ≡ κ+1
κm , and γi ≡ σi
σm+1 for i ∈ {1, . . . , m}.
Let θm+1 be the unique negative root of the function g(·) in Lemma S1.3. Let xi ≡ κγi2 for
i ∈ {1, . . . , m}. Then,
P[|Tm| > c] = 1
π
Z |θm+1|
0
U(x, s)
p|θm+1| − s ds,
where x ≡ (x1, . . . , xm),
U(x, s) ≡ s m
2 −1
pP(x, s)Q(x, s) , P(x, s) ≡
m
∑
i=1
1 + τxi
(xi + s)(xi − θm+1) , Q(x, s) ≡
m
∏
i=1
(xi + s).
51

Proof of Lemma S1.6. By the same logic as (S30), for θ < 0, we have
g(θ) =
m
∏
i=1
(κγi2 − θ) · θ
m
∑
i=1
τκγi2 + 1
κγi2 − θ
−1
!
=
m
∏
i=1
(xi − θ) · θ
m
∑
i=1
τxi + 1
xi − θ
−1
!
. (S32)
Because g(θm+1) = 0 and θm+1 < 0, we must have
1=
m
∑
i=1
1 + τxi
xi − θm+1
. (S33)
Substituting (S33) into (S32), we can write g(θ) for θ < 0 as
g(θ) =
m
∏
i=1
(xi − θ) · θ
m
∑
i=1
τxi + 1
xi − θ
−
m
∑
i=1
1 + τxi
xi − θm+1
!
=
m
∏
i=1
(xi − θ) · θ
"m
∑
i=1
(1 + τxi) 1
xi − θ
−1
xi − θm+1
#
=
m
∏
i=1
(xi − θ) · θ(θ − θm+1)
m
∑
i=1
1 + τxi
(xi − θ)(xi − θm+1) (S34)
Substituting (S34) into the integral representation in Lemma S1.5, we then have
P[|Tm| > c] = 1
π
Z |θm+1|
0
s m2−1
q
− ∏im=1(xi + s)(−s)(−s − θm+1) ∑im=1
1+τxi
(xi +s)(xi −θm+1 )
ds
=1
π
Z |θm+1|
0
sm
2 −1
q
∏im=1(xi + s)(−s − θm+1) ∑im=1
1+τxi
(xi +s)(xi −θm+1 )
ds
=1
π
Z |θm+1|
0
sm
2 −1
pQ(x, s)P(x, s)(|θm+1| − s) ds
=1
π
Z |θm+1|
0
U(x, s)
p|θm+1| − s ds.
Therefore, Lemma S1.6 holds.
S1.3 Derivatives of the rejection probability
Lemma S1.7. Consider the same setup and notations in Lemma S1.6. Fix c, x3, . . . , xm and
θm+1, and let z = x1 > 0 and w = x2 > 0, where we view w as a function of z as implied by
52

(S33). Define ∆ ≡ z−w
(z−θm+1)2 , A ≡ wz − θ2m+1 and B ≡ z + w − 2θm+1. We then have
∂w
∂z = − (w − θm+1)2
(z − θm+1)2 , (S35)
∂P(x, s)
∂z = 2∆(1 − τs)[A + B
2 (s − θm+1)]
(z + s)2(w + s)2 , (S36)
∂Q(x, s)
∂z = ∆(A + Bs)
m
∏
i=3
(xi + s). (S37)
Proof of Lemma S1.7. From Lemma S1.4, θm+1 < −τ−1, which implies that −τθm+1 > 1.
Consequently, 1+τw
w−θm+1 is increasing in w, because
∂
∂w
1 + τw
w − θm+1
= −τθm+1 − 1
(w − θm+1)2 > 0.
This ensures that w can be uniquely determined by z through (S33), once we fix c, x3, . . . , xm
and θm+1. Below we prove the three derivatives in (S35)–(S37) separately as follows.
• Proof of (S35). From (S33), we have
1 = 1 + τz
z − θm+1
+ 1 + τw
w − θm+1
+
m
∑
i=3
1 + τxi
xi − θm+1
| {z }
“Constant”
.
Taking derivative of the above gives
0 = −τθm+1 − 1
(z − θm+1)2 dz + −τθm+1 − 1
(w − θm+1)2 dw.
As discussed before, −τθm+1 > 1. We then have
∂w
∂z = − (w − θm+1)2
(z − θm+1)2 ,
i.e., (S35) holds.
• Proof of (S36). Let p ̃(x) ≡ 1+τx
(x+s)(x−θm+1) . We have
dp ̃(x)
dx = − τx2 + 2x + (s − θm+1 + sθm+1τ)
(x + s)2(x − θm+1)2 = − τx2 + 2x + d
(x + s)2(x − θm+1)2 ,
53

where d ≡ s − θm+1 + sθm+1τ = s(1 + θm+1τ) − θm+1. Using (S35), we have
∂P(x, s)
∂z = dp ̃(z)
dz + dp ̃(w)
dw
∂w
∂z = − τz2 + 2z + d
(z + s)2(z − θm+1)2 + τw2 + 2w + d
(w + s)2(w − θm+1)2
(w − θm+1)2 (z − θm+1)2
= −(τz2 + 2z + d)(w + s)2 + (τw2 + 2w + d)(z + s)2
(w + s)2(z + s)2(z − θm+1)2 . (S38)
The numerator of (S38) can be simplified as follows:
− (τz2 + 2z + d)(w + s)2 + (τw2 + 2w + d)(z + s)2
= (z − w)[2wz(1 − τs) − (w + z)(τs2 − d) + 2ds − 2s2]
= (z − w){2wz(1 − τs) − (w + z)[τs2 − s(1 + θm+1τ) + θm+1]
+ 2s2(1 + θm+1τ) − 2sθm+1 − 2s2}
= (z − w){(zw − θ2m+1)
| {z }
=A
[2(1 − τs)] − (w + z − 2θm+1)
| {z }
=B
[τs2 − s(1 + θm+1τ) + θm+1]
+ 2s2(1 + θm+1τ) − 2sθm+1 − 2s2 + 2θ2m+1(1 − τs) − 2θm+1[τs2 − s(1 + θm+1τ) + θm+1]
| {z }
=0
}
= (z − w){A[2(1 − τs)] − B[τs2 − s(1 + θm+1τ) + θm+1]}
= (z − w){A[2(1 − τs)] − B(τs − 1)(s − θm+1)}
= 2(z − w)(1 − τs) A + B
2 (s − θm+1) , (S39)
where the definitions of A and B follow from the statement of the lemma. Next,
substitute (S39) into (S38) and using the definition of ∆, we have
∂P(x, s)
∂z = 2(z − w)(1 − τs) A + B
2 (s − θm+1)
(w + s)2(z + s)2(z − θm+1)2 = 2∆(1 − τs) [A + B
2 (s − θm+1)]
(w + s)2(z + s)2 .
Thus, (S36) holds.
• Proof of (S37). By the definition of Q, we have
Q(x, s) = (w + s)(z + s)
m
∏
i=3
(xi + s)
| {z }
“Constant”
.
54

Using (S35), we have
∂[(w + s)(z + s)]
∂z = (w + s) + (z + s)∂w
∂z = (w + s) − (z + s) (w − θm+1)2
(z − θm+1)2
= (z − w)[(wz − θ2m+1) + s(z + w − 2θm+1)]
(z − θm+1)2
= ∆(A + Bs). (S40)
Thus,
∂Q(x, s)
∂z = ∆(A + Bs)
m
∏
i=1
(xi + s),
i.e., (S37) holds.
From the above, Lemma S1.7 holds.
Lemma S1.8. Consider the same setup and notations as in Lemmas S1.6 and S1.7. We have
∂U(x, s)
∂z = − ∆  ̃h(x, s)U(x, s)
2,
where
 ̃h(x, s) ≡  ̃hP(x, s) +  ̃hQ(x, s),
 ̃hP(x, s) ≡ 2(1 − τs)[A + B
2 (s − θm+1)]
(z + s)2(w + s)2P(x, s) ,
 ̃hQ(x, s) ≡ A + Bs
(w + s)(z + s).
Proof of Lemma S1.8. By definition,
∂U(x, s)
∂z = − s m
2 −1
2[P(x, s)Q(x, s)] 32
Q(x, s) ∂P(x, s)
∂z + P(x, s) ∂Q(x, s)
∂z
= − U(x, s)
2
h1
P(x, s)
∂P(x, s)
∂z
| {z }
≡hP (x,s)
+1
Q(x, s)
∂Q(x, s)
∂z
| {z }
≡hQ (x,s)
i
. (S41)
55

From Lemma S1.7, hP(x, s) and hQ(x, s) have the following equivalent forms:
hP(x, s) = 2∆(1 − τs)[A + B
2 (s − θm+1)]
(z + s)2(w + s)2P(x, s) = ∆  ̃hP(x, s),
hQ(x, s) = ∆(A + Bs) ∏im=3(xi + s)
Q(x, s) = ∆(A + Bs)
(w + s)(z + s) = ∆  ̃hQ(x, s),
where the last equality in each of the above two equations follows by definition. Substi
tuting the above into (S41), we then have
∂U(x, s)
∂z = − U(x, s)
2 hP(x, s) + hQ(x, s)
= − U(x, s)
2 ∆  ̃hP(x, s) +  ̃hQ(x, s)
= − U(x, s)
2 ∆  ̃h(x, s),
where the last equality holds by definition. Therefore, Lemma S1.8 holds.
Lemma S1.9. Consider the same setup and notations as in Lemmas S1.6 and S1.7. Let δ ≡
A+ B
2 (s − θm+1). Then, we have
∂A
∂z = ∆A, (S42)
∂B
∂z = ∆B, (S43)
∂δ
∂z = ∆δ. (S44)
Proof of Lemma S1.9. We prove the three derivatives in (S42)–(S44) separately as fol
lows.
• Proof of (S42):
∂A
∂z = w + z∂w
∂z = w − z (w − θm+1)2
(z − θm+1)2 = ∆(wz − θ2m+1) = ∆A.
• Proof of (S43):
∂B
∂z = 1 + ∂w
∂z = 1 − (w − θm+1)2
(z − θm+1)2 = ∆B.
56

• Proof of (S44):
∂δ
∂z = ∂A
∂z + ∂B
∂z
(s − θm+1)
2 = ∆A + ∆B
2 (s − θm+1) = ∆δ.
From the above, Lemma S1.9 holds.
Lemma S1.10. Consider the same setup and notations as in Lemmas S1.6–S1.9. We have
∂  ̃hP(x, s)
∂z = ∆  ̃hP(x, s)[1 −  ̃hP(x, s) − 2 ̃hQ(x, s)], (S45)
∂  ̃hQ(x, s)
∂z = ∆[  ̃hQ(x, s) −  ̃hQ(x, s)2]. (S46)
Proof of Lemma S1.10. We prove the two derivatives in (S45) and (S46) separately as
follows.
• Proof of (S45): Let δ ̃ ≡ 2(1 − τs)δ. By definition,
 ̃hP(x, s) = 2(1 − τs)[A + B
2 (s − θm+1)]
(z + s)2(w + s)2P(x, s)
= 2(1 − τs)δ
(z + s)2(w + s)2P(x, s)
= δ ̃
(z + s)2(w + s)2P(x, s) .
Thus,
∂  ̃hP(x, s)
∂z = ∂
∂z
δ ̃
(w + s)2(z + s)2P(x, s)
=1
(w + s)4(z + s)4P(x, s)2
n
[(w + s)2(z + s)2P(x, s)] ∂δ ̃
∂z
− δ ̃∂[(w + s)2(z + s)2P(x, s)]
∂z
o
. (S47)
From Lemma S1.9, we have
∂δ ̃
∂z = 2(1 − τs) ∂δ
∂z = 2∆(1 − τs)δ = ∆δ ̃. (S48)
Next, using the definition of δ in Lemma S1.9 and using the expression of ∂P(x,s)
∂z
57

from Lemma S1.7, we obtain
∂[(z + s)2(w + s)2P(x, s)]
∂z
= (z + s)2(w + s)2 ∂P(x, s)
∂z + P(x, s) ∂[(z + s)2(w + s)2]
∂z
= (z + s)2(w + s)2 ∂P(x, s)
∂z + 2P(x, s)(z + s)(w + s) ∂[(z + s)(w + s)]
∂z
= (z + s)2(w + s)2 ∆δ ̃
(z + s)2(w + s)2 + 2P(x, s)(z + s)(w + s)∆(A + Bs)
= ∆[δ ̃ + 2P(x, s)(z + s)(w + s)(A + Bs)], (S49)
where the second last equality follows from (S40). From (S47)–(S49), we then have
∂  ̃hP(x, s)
∂z
= ∆δ ̃[(w + s)2(z + s)2P(x, s)] − ∆δ ̃[δ ̃ + 2P(x, s)(z + s)(w + s)(A + Bs)]
(w + s)4(z + s)4P(x, s)2
= ∆δ ̃[(w + s)2(z + s)2P(x, s) − δ ̃ − 2P(x, s)(z + s)(w + s)(A + Bs)]
(w + s)4(z + s)4P(x, s)2
= ∆δ ̃
(w + s)2(z + s)2P(x, s) 1 − δ ̃
(w + s)2(z + s)2P(x, s) − 2(A + Bs)
(w + s)(z + s)
= ∆  ̃hP(x, s) 1 −  ̃hP(x, s) − 2 ̃hQ(x, s) ,
where the first equality follows from (S47)–(S49), the second and third equality fol
lows from rearranging and simplifying the fractions, and the last equality follows
from the definition of  ̃hP(x, s) and  ̃hQ(x, s).
• Proof of (S46): From the definition of  ̃hQ(x, s) in Lemma S1.8, we have
∂  ̃hQ(x, s)
∂z = ∂
∂z
(A + Bs)
(w + s)(z + s) = (w + s)(z + s) ∂(A+Bs)
∂z − (A + Bs) ∂[(w+s)(z+s)]
∂z
(w + s)2(z + s)2
= (w + s)(z + s)∆(A + Bs) − (A + Bs)∆(A + Bs)
(w + s)2(z + s)2
= ∆(A + Bs)
(w + s)(z + s) − ∆(A + Bs)2
(w + s)2(z + s)2
= ∆[  ̃hQ(x, s) −  ̃hQ(x, s)2],
where the third last equality follows from (S40), and the last equality follows from
the definition of  ̃hQ(x, s).
58

From the above, Lemma S1.10 holds.
Lemma S1.11. Consider the same setup and notations in Lemmas S1.6–S1.9. For any function
r(x, s) of x and s, define
L(r(x, s)) ≡ 1
π
Z |θm+1|
0
r(x, s)U(x, s)
p|θm+1| − s ds.
From Lemma S1.6, P[|Tm| > c] = L(1), where 1 here denotes a constant function taking value
one.
(i) The first and second order derivatives of P[|Tm| > c] over z have the following equivalent
forms:
∂P[|Tm| > c]
∂z = −∆
2 L(  ̃h(x, s)), (S50)
∂2P[|Tm| > c]
∂z2 = − L(  ̃h(x, s))
2
∂∆
∂z − ∆2
2 L(  ̃h(x, s)) + 3∆2
4 L(  ̃h(x, s)2). (S51)
(ii) If c ̸= m−1/2, z ̸= w, and ∂P[|Tm|>c]
∂z = 0, then we must have ∂2P[|Tm|>c]
∂z2 > 0.
Proof of Lemma S1.11. We first prove (i). We prove the two derivatives in (S50) and (S51)
separately as follows.
• Proof of (S50): From Lemmas S1.6 and S1.8, the derivative of P[|Tm| > c] with
respect to z is
∂P[|Tm| > c]
∂z = 1
π
Z |θm+1|
0
∂U(x, s)
∂z
1
p|θm+1| − s ds
=− ∆
2π
Z |θm+1|
0
 ̃h(x, s)U(x, s)
p|θm+1| − s ds
= −∆
2 L(  ̃h(x, s)).
• Proof of (S51): Using (S50) and recognizing that ∆,  ̃h, and U are functions of z, we
have
∂2P[|Tm| > c]
∂z2
= − L(  ̃h(x, s))
2
∂∆
∂z − ∆
2π
Z |θm+1|
0
∂  ̃h(x, s)
∂z U(x, s) + ∂U(x, s)
∂z  ̃h(x, s) 1
p|θm+1| − s ds
59

= − L(  ̃h(x, s))
2
∂∆
∂z − ∆
2π
Z |θm+1|
0
∂  ̃h(x, s)
∂z
U(x, s)
p|θm+1| − s ds
+ ∆2
4π
Z |θm+1|
0
 ̃h(x, s)2 U(x, s)
p|θm+1| − s ds
= − L(  ̃h(x, s))
2
∂∆
∂z − ∆
2 L ∂  ̃h(x, s)
∂z + ∆2
4 L(  ̃h(x, s)2), (S52)
where the second last equality follows from Lemma S1.8. By the definition of
 ̃h(x, s) in Lemma S1.8 and from Lemma S1.10, we have
∂  ̃h(x, s)
∂z = ∂  ̃hP(x, s)
∂z + ∂  ̃hQ(x, s)
∂z
= ∆  ̃hP(x, s)[1 −  ̃hP(x, s) − 2  ̃hQ(x, s)] + ∆[  ̃hQ(x, s) −  ̃hQ(x, s)2]
=∆
n
[  ̃hP(x, s) +  ̃hQ(x, s)] − [  ̃hP(x, s) +  ̃hQ(x, s)]2o
= ∆[  ̃h(x, s) −  ̃h(x, s)2]. (S53)
Substituting (S53) into (S52) gives
∂2P[|Tm| > c]
∂z2 = − L(  ̃h(x, s))
2
∂∆
∂z − ∆2
2 L(  ̃h(x, s)) + 3∆2
4 L(  ̃h(x, s)2).
We now prove (ii). Because z ̸= w, ∆ is nonzero. From (S50) and the condition in (ii),
L(  ̃h(x, s)) must be zero. From (S51), we then have
∂2P[|Tm| > c]
∂z2 = − L(  ̃h(x, s))
2
∂∆
∂z − ∆2
2 L(  ̃h(x, s)) + 3∆2
4 L(  ̃h(x, s)2) = 3∆2
4 L(  ̃h(x, s)2) ≥ 0.
From the definition of U(x, s) in Lemma S1.6, we can know that U(x, s) is positive for
s ∈ (0, |θm+1|). Therefore, L(  ̃h(x, s)2) = 0 if and only if  ̃h(x, s) = 0 for all s ∈ (0, |θm+1|).
Note that, by the definition of  ̃h(x, s) in Lemma S1.8, for any s ∈ (0, |θm+1|),
 ̃h(x, s) = 0
⇐⇒ 2(1 − τs)[A + B
2 (s − θm+1)]
(z + s)2(w + s)2P(x, s) + A + Bs
(w + s)(z + s) = 0
⇐⇒ 2(1 − τs)[A + B
2 (s − θm+1)] + (A + Bs)(z + s)(w + s)P(x, s) = 0
⇐⇒ χ(s) = 0,
60

where
χ(s) ≡ 2(1 − τs)[A + B
2 (s − θm+1)]
m
∏
j=1
(xi + s)
+ (A + Bs)(z + s)(w + s)
m
∑
i=1
"
∏
j̸=i
(xi + s) · 1 + τxi
xi − θm+1
#
(S54)
is a polynomial function of s. Note that the coefficient of sm+2 in (S54) is
−Bτ + B
m
∑
i=1
1 + τxi
xi − θm+1
= B(1 − τ)
= B 1− κ+1
κm
=B
κm [κ(m − 1) − 1]
=B
κm (mc2 − 1) ̸= 0,
where the first equality follows from (S33), the second equality follows from the def
inition of τ, the last equality follows from the definition of κ, and the last inequality
holds because B = z + w − 2θm+1 > 0 and c ̸= m−1/2. Thus, (S54) cannot be zero for all
s ∈ (0, |θm+1|). This implies that L(  ̃h(x, s)2) must be positive. Consequently, ∂2P[|Tm|>c]
∂z2
is also positive.
From the above, Lemma S1.11 holds.
S1.4 Bounds on the derivative of the rejection probability
S1.4.1 More accurate bounds on the unique negative root θm+1
Lemma S1.12. Consider the same setup and notations in Lemma S1.6. For any x ≥ 0 and
integer 1 ≤ k ≤ m, define
h(θ; x, k) = −(k − 1)x − [m − x + (m + 1 − k)τx] θ + θ2.
(a) For any x ≥ 0 and 1 ≤ k ≤ m, h(θ; x, k), viewed as a function of θ, has a unique positive
root, which is denoted as θ(x, k).
(b) θ(x, k) ≥ m for any x ≥ 0 and 1 ≤ k ≤ m.
(c) θ(0, k) = m for any 1 ≤ k ≤ m, and θ(x, 1) = m + x/κ for any x ≥ 0.
61

(d) For any 1 ≤ k ≤ n, |θm+1| ≥ θ(x(k), k) = θ(κγ2
(k), k), where γ(1) ≤ γ(2) ≤ . . . ≤ γ(m)
are the sorted values of {γj}jm=1, and x(1) ≤ x(2) ≤ . . . ≤ x(m) are the sorted values of
{ x j } jm=1 .
Proof of Lemma S1.12(a)–(c). First, we consider the case when x = 0. In this case,
h(θ; x, k) simplifies to h(θ; x, k) = −mθ + θ2 = θ(θ − m). Obviously, h(θ; x, k) has a
unique positive root at θ = m.
Second, we consider the case when k = 1. In this case, h(θ; x, k) simplifies to h(θ; x, k) =
−(m − x + mτx)θ + θ2 = θ{θ − m − (mτ − 1)x}. Note that mτ − 1 = m · ( κ+1
κm ) − 1 = 1
κ by
definition. Consequently, h(θ; x, k) = θ(θ − m − x
κ ). Thus, h(θ; x, k) has a unique positive
root at θ = m + x
κ.
Third, we consider the case when x > 0 and k > 1. In this case, h(0; x, k) = −(k −
1)x < 0. Note that h(θ; x, k) converges to infinity as θ goes to positive or negative infinity.
Thus, h(θ; x, k) must have one positive root and one negative root.
From the above, (a) and (c) hold. Below we prove (b). Note that, for any x ≥ 0 and
1 ≤ k ≤ m,
h(m; x, k) = −(k − 1)x − [m − x + (m + 1 − k)τx] m + m2
= −(k − 1)x + mx − (m + 1 − k)τmx
= (m + 1 − k)x(1 − τm)
= (m + 1 − k)x 1 − κ + 1
κ
≤ 0,
where the last equality follows from the definition of τ. By the property of quadratic
functions, we must have θ(x, k) ≥ m, i.e., (b) holds.
Proof of Lemma S1.12(d). From (S33), we know that
1=
m
∑
i=1
1 + τxi
xi − θm+1
=
m
∑
i=1
1
xi − θm+1
+
m
∑
i=1
τxi
xi − θm+1
=1
θm+1
m
∑
i=1
θm+1
xi − θm+1
+τ
m
∑
i=1
xi
xi − θm+1
=1
θm+1
m
∑
i=1
xi
xi − θm+1
−1 +τ
m
∑
i=1
xi
xi − θm+1
=1
θm+1
+τ
m
∑
i=1
xi
xi − θm+1
−m
θm+1
.
(S55)
62

Consequently,
0 = −(m + θm+1) + (1 + τθm+1)
m
∑
j=1
xj
xj − θm+1
.
From Lemma S1.4(c), 1 + τθm+1 < 0. Because x/(x − θm+1) is increasing in x ≥ 0, we
have, for any 1 ≤ k ≤ m,
0 = −(m + θm+1) + (1 + τθm+1)
m
∑
j=1
xj
xj − θm+1
= −(m + θm+1) + (1 + τθm+1)
m
∑
j=1
x(j)
x(j) − θm+1
≤ −(m + θm+1) + (1 + τθm+1)(m + 1 − k) x(k)
x(k) − θm+1
.
Multiplying both left-hand and right-hand sides by x(k) − θm+1, we have
0 ≤ −(m + θm+1)(x(k) − θm+1) + (1 + τθm+1)(m + 1 − k)x(k)
= −mx(k) + mθm+1 − θm+1x(k) + θ2m+1 + (m + 1 − k)x(k) + (m + 1 − k)x(k)τθm+1
= −(k − 1)x(k) +
h
m − x(k) + (m + 1 − k)τx(k)
i
θm+1 + θ2m+1
= −(k − 1)x(k) −
h
m − x(k) + (m + 1 − k)τx(k)
i
|θm+1| + |θm+1|2,
i.e., h(|θm+1|; x, k) ≥ 0. From Lemma S1.12(a) and the properties of quadratic functions,
we know that |θm+1| > 0 must be no less than θ(x(k), k).
Lemma S1.13. Consider the same setup and notations in Lemmas S1.6 and S1.12. |θm+1| ≤
m + x(m)/κ = m + γ2
(m), recalling that x(m) = max1≤i≤m xi and γ(m) = max1≤i≤m γi.
Proof of Lemma S1.13. From (S33) and by the same logic as the proof of Lemma S1.12,
0 = −(m + θm+1) + (1 + τθm+1)
m
∑
j=1
xj
xj − θm+1
.
From Lemma S1.4, τ|θm+1| > 1. Because x
x+|θm+1| is increasing in x, we then have
|θm+1| − m = (τ|θm+1| − 1)
m
∑
j=1
xj
xj + |θm+1| ≤ (τ|θm+1| − 1) mx(m)
x(m) + |θm+1| ,
63

which further implies that
(x(m) + |θm+1|)(|θm+1| − m) ≤ (τ|θm+1| − 1)mx(m)
=⇒ x(m)|θm+1| + |θm+1|2 − mx(m) − m|θm+1| ≤ τ|θm+1|mx(m) − mx(m)
=⇒ (x(m) + |θm+1| − m)|θm+1| ≤ τ|θm+1|mx(m)
=⇒ x(m) + |θm+1| − m ≤ τmx(m)
=⇒ |θm+1| ≤ m + (τm − 1)x(m) = m + x(m)
κ
= m + γ2
(m),
where the last two equalities follow from definition, recalling that τ = κ+1
κm . Therefore,
Lemma S1.13 holds.
S1.4.2 Lemmas for bounding the derivative of the rejection probability
Lemma S1.14. Consider the same setup and notations as in Lemma S1.6. Suppose that z ≡
max1≤i≤m xi and |θm+1| ∈ [θ, θ] for some θ ≥ m. For any given ν ∈ R, define
G(s) ≡ sνU(x, s)
(w + s)(z + s).
Then for any s ∈ (0, |θm+1|],
d log G(s)
ds ≥ 1
s
(
ν−
"
1+ θ
2(z + θ) + θ
w+θ
− θ−m
2(τθ − 1)
#)
.
Proof of Lemma S1.14. Using the definition of U(x, s) in Lemma S1.6, we have
log G(s)
=m
2 − 1 + ν log s − 1
2 log P(x, s) − 1
2 log Q(x, s) − log(w + s) − log(z + s).
(S56)
Since, by definition,
∂P(x, s)
∂s = −
m
∑
i=1
1 + τxi
(xi + s)2(xi − θm+1) ,
we have
∂ log P(x, s)
∂s = 1
P(x, s)
∂P(x, s)
∂s = − ∑im=1
1+τxi
(xi +s)2 (xi −θm+1 )
∑im=1
1+τxi
(xi +s)(xi −θm+1 )
. (S57)
64

Recall that z = max1≤i≤m xi. It follows that 1
z+s ≤ 1
xi+s for any 1 ≤ i ≤ m. Thus,
− ∂ log P(x, s)
∂s = ∑im=1
1+τxi
(xi +s)2 (xi −θm+1 )
∑im=1
1+τxi
(xi +s)(xi −θm+1 )
≥
1
z+s ∑im=1
1+τxi
(xi +s)(xi −θm+1 )
∑im=1
1+τxi
(xi +s)(xi −θm+1 )
=1
z + s . (S58)
Since, by definition, log Q(x, s) = ∑im=1 log(xi + s), we have
∂ log Q(x, s)
∂s =
m
∑
i=1
1
xi + s . (S59)
Combining the results from (S57)–(S59) into (S56), we have
d log G(s)
ds = m
2 −1+ν 1
s−1
2
∂ log P(x, s)
∂s − 1
2
∂ log Q(x, s)
∂s − 1
w+s− 1
z+s
≥m
2 −1+ν 1
s+1
2
1
z+s − 1
2
m
∑
i=1
1
xi + s − 1
w+s− 1
z+s
=m
2 −1+ν 1
s−1
2
1
z+s − 1
2
m
∑
i=1
1
xi + s − 1
w+s
=1
2
m
∑
i=1
1
s− 1
xi + s − 1 − ν
s− 1
2(z + s) − 1
w+s
=1
2s
m
∑
i=1
xi
xi + s − 1 − ν
s− 1
2(z + s) − 1
w+s
=1
2s
"m
∑
i=1
xi
xi + s − 2(1 − ν) − s
z + s − 2s
w+s
#
. (S60)
Below we bound the terms in (S60).
We first bound the first term in (S60). Because s ≤ |θm+1| = −θm+1, we have
m
∑
i=1
xi
xi + s ≥
m
∑
i=1
xi
xi − θm+1
.
Next, from (S33) and (S55), we know that
1= 1
θm+1
+τ
m
∑
i=1
xi
xi − θm+1
−m
θm+1
.
65

Consequently,
m
∑
i=1
xi
xi + s ≥
m
∑
i=1
xi
xi − θm+1
= 1+ m
θm+1
1
θm+1 + τ
= −θm+1 − m
−τθm+1 − 1 = |θm+1| − m
τ|θm+1| − 1
= τ−1 − τ−1 mτ − 1
τ|θm+1| − 1.
Because, by definition, mτ = κ+1
κ > 1, using the condition that τ|θm+1| ≥ τθ ≥ τm > 1,
we then have
m
∑
i=1
xi
xi + s ≥ τ−1 − τ−1 mτ − 1
τ|θm+1| − 1 ≥ τ−1 − τ−1 mτ − 1
τθ − 1 = θ − m
τθ − 1.
We then bound the third term in (S60). Because s
z+s is increasing in s > 0 and
s ≤ |θm+1| ≤ θ, we have
s
z + s ≤ |θm+1|
z + |θm+1| ≤ θ
z+θ
.
We finally bound the last term in (S60). By the same logic as before, we have
s
w + s ≤ |θm+1|
w + |θm+1| ≤ θ
w+θ
.
From the above, we have
d log G(s)
ds ≥ 1
2s
"m
∑
i=1
xi
xi + s − 2(1 − ν) − s
z + s − 2s
w+s
#
≥1
2s
"
θ−m
τθ − 1 − 2(1 − ν) − θ
z+θ
− 2θ
w+θ
#
=1
s
"
θ−m
2(τθ − 1) − 1 + ν − θ
2(z + θ) − θ
w+θ
#
=1
s
(
ν−
"
1+ θ
2(z + θ) + θ
w+θ
− θ−m
2(τθ − 1)
#)
.
Therefore, Lemma S1.14 holds.
66

Lemma S1.15. For any ν < 1 and ζ > 0,
Zζ
0
s−ν
√
ζ − s ds = √
πζ
12 −ν Γ(1 − ν)
Γ( 3
2 − ν).
Proof of Lemma S1.15. To begin with, using the properties of beta and gemma functions,
Z1
0
x−ν
√1 − x dx = Γ(1 − ν)Γ(1
2) Γ( 3
2 − ν) = Γ(1 − ν)√
π
Γ( 3
2 − ν) . (S61)
The integral (S61) is convergent if 1 − ν > 0, or equivalently, ν < 1. By change of
variables, let s = ζx. Hence, ds = ζdx. Therefore,
Zζ
0
s−ν
√
ζ − s ds =
Z1
0
ζ −ν x−ν
√
ζ − ζx ζ dx = ζ
12 −ν
Z1
0
x−ν
√1 − x dx = √
πζ
12 −ν Γ(1 − ν)
Γ( 3
2 − ν),
where the last equality uses (S61). Therefore, Lemma S1.15 holds.
Lemma S1.16. Consider the same setup and notations in Lemma S1.6, and adopt the notations
from Lemmas S1.7 and S1.8. Suppose that z ≡ max1≤i≤m xi > 0, w ≡ min1≤i≤m xi, |θm+1| ≤
θ for some positive θ, and τ ≤ 1/2. Define
F(s) ≡ s−ν(w + s)(z + s)  ̃h(x, s)
p|θm+1| − s ,
and
C1 ≡ (1 − 2τ) wz − θ2
(w + z + 2θ)θ
+
2 wz−θ2
(w+z+2θ)θ + 1
z − τ.
(a) For any s ∈ (0, |θm+1|),
F(s) ≥ Bs−ν
p|θm+1| − s [|θm+1|C1 + (1 − τ)s] .
(b) If
ν < min
(
3
2− 1
2(1 + 1C−1τ ) , 1
)
67

then
Z |θm+1|
0
s−ν
p|θm+1| − s [|θm+1|C1 + (1 − τ)s] ds > 0.
Proof of Lemma S1.16(a). From the definition of  ̃h(x, s) in Lemma S1.8, we have
(w + s)(z + s)  ̃h(x, s) = A + Bs + 2(A + s−θm+1
2 B)
(w + s)(z + s)P(x, s) − 2τs(A + s−θm+1
2 B)
(w + s)(z + s)P(x, s) . (S62)
In the following, we bound (S62) from below.
First, because z = max1≤i≤m xi, we have
(w + s)(z + s)P(x, s) = (w + s)(z + s)
m
∑
i=1
1 + τxi
(xi + s)(xi − θm+1) (S63)
= (w + s)
m
∑
i=1
z+s
xi + s · 1 + τxi
xi − θm+1
≥ (w + s)
m
∑
i=1
1 + τxi
xi − θm+1
= w + s ≥ s, (S64)
where the last equality follows from (S33) and the last inequality follows from the fact
that w ≥ 0.
Second, because w = min1≤i≤m xi, we have
(w + s)(z + s)P(x, s) = (w + s)(z + s)
m
∑
i=1
1 + τxi
(xi + s)(xi − θm+1)
= (z + s)
m
∑
i=1
w+s
xi + s · 1 + τxi
xi − θm+1
≤ (z + s)
m
∑
i=1
1 + τxi
xi − θm+1
= z + s, (S65)
where the last equality follows from (S33).
Third, from the definition of A and B in Lemma S1.7, we know that
A + s − θm+1
2 B = wz − θ2m+1 + s − θm+1
2 (z + w − 2θm+1)
= wz − |θm+1|2 + s + |θm+1|
2 (z + w + 2|θm+1|)
68

=s z+w
2 + |θm+1| + wz − |θm+1|2 + |θm+1|2 + |θm+1| z + w
2 =s z+w
2 + |θm+1| + z w + |θm+1|
2 + w|θm+1|
2
≥ 0. (S66)
In addition, because A+ s−θm+1
2B
z+s = (A+ |θm+1|
2 B)+ B
2s
z+s is monotone in s, we have, for any
s ∈ [0, |θm+1|],
A + s−θm+1
2B
z + s ≥ min
(
A + |θm+1|
2B
z , A + |θm+1|B
z + |θm+1|
)
≥ min
(
A + |θm+1|
2B
z , A + |θm+1|B
z+θ
)
, (S67)
where the last inequality holds due to (S66) and that |θm+1| ≤ θ.
Fourth, from the previous three parts, we have
(w + s)(z + s)  ̃h(x, s)
= A + Bs + 2(A + s−θm+1
2 B)
(w + s)(z + s)P(x, s) − 2τs(A + s−θm+1
2 B)
(w + s)(z + s)P(x, s)
≥ A + Bs + 2(A + s−θm+1
2 B)
z + s − 2τ A + s − θm+1
2 B using (S64), (S65), and (S66)
≥ A + Bs + 2 · min
(
A + |θm+1|
2B
z , A + |θm+1|B
z+θ
)
− 2τ A + s − θm+1
2 B using (S67)
= (1 − 2τ)A + 2 · min
(
A + |θm+1|
2B
z , A + |θm+1|B
z+θ
)
− τ|θm+1|B + (1 − τ)Bs
= |θm+1|B ·
"
(1 − 2τ) A
B|θm+1| + 2 · min
(A
B|θm+1| + 1
2
z,
A
B|θm+1| + 1
z+θ
)
−τ
#
+ (1 − τ)Bs.
(S68)
Note that
A
B|θm+1| = wz − |θm+1|2
(w + z + 2|θm+1|)|θm+1| = wz
(w + z + 2|θm+1|)|θm+1| − |θm+1|
w + z + 2|θm+1|
≥ wz
(w + z + 2θ)θ
−θ
w + z + 2θ
= wz − θ2
(w + z + 2θ)θ
.
69

Because τ ≤ 1/2, we then have
(1 − 2τ) A
B|θm+1| + 2 · min
(A
B|θm+1| + 1
2
z,
A
B|θm+1| + 1
z+θ
)
−τ
≥ (1 − 2τ) wz − θ2
(w + z + 2θ)θ
+ 2 · min

 
 
wz−θ2
(w+z+2θ)θ + 1
2
z,
wz−θ2
(w+z+2θ)θ + 1
z+θ

 
 
− τ.
Note that
wz−θ2
(w+z+2θ)θ + 1
2
z≤
wz−θ2
(w+z+2θ)θ + 1
z+θ
⇐⇒ (wz − θ2)z
(w + z + 2θ)θ
+z
2 + (wz − θ2)θ
(w + z + 2θ)θ
+θ
2 ≤ (wz − θ2)z
(w + z + 2θ)θ
+z
⇐⇒ z
2 ≥ wz − θ2
w + z + 2θ
+θ
2 = wz − θ2 + (w + z + 2θ) θ
2
w + z + 2θ
= wz + (w + z)θ
2
w + z + 2θ
⇐⇒ (w + z)z + 2zθ ≥ 2wz + (w + z)θ
⇐⇒ z(z − w) + θ(z − w) ≥ 0,
which must hold because z ≥ w ≥ 0 and θ ≥ 0. Thus, we have
(1 − 2τ) A
B|θm+1| + 2 · min
(A
B|θm+1| + 1
2
z,
A
B|θm+1| + 1
z+θ
)
−τ
≥ (1 − 2τ) wz − θ2
(w + z + 2θ)θ
+
2 wz−θ2
(w+z+2θ)θ + 1
z −τ
= C1,
where the last equality holds by definition. From (S68), we then have
(w + s)(z + s)  ̃h(x, s) ≥ |θm+1|BC1 + (1 − τ)Bs
This immediately implies that
F(s) ≡ s−ν(w + s)(z + s)  ̃h(x, s)
p|θm+1| − s ≥ s−ν
p|θm+1| − s [|θm+1|BC1 + (1 − τ)Bs]
= Bs−ν
p|θm+1| − s [|θm+1|C1 + (1 − τ)s] .
70

From the above, Lemma S1.16(a) holds.
Proof of Lemma S1.16(b). From Lemma S1.15, for ν < 1, we have
Z |θm+1|
0
s−ν
p|θm+1| − s [|θm+1|C1 + (1 − τ)s] ds
= |θm+1|C1 ·
Z |θm+1|
0
s−ν
p|θm+1| − s ds + (1 − τ)
Z |θm+1|
0
s−(ν−1)
p|θm+1| − s ds
= C1
√
π|θm+1| 32 −ν Γ(1 − ν)
Γ( 3
2 − ν) + (1 − τ)√
π|θm+1| 32 −ν Γ(2 − ν)
Γ( 5
2 − ν)
=√
π|θm+1| 32 −ν Γ(1 − ν)
Γ( 3
2 − ν)
"
C1 + (1 − τ) 1 − ν
3
2 −ν
#
,
where the last equality uses the property of gamma functions. Note that, by definition,
wz − θ2
(w + z + 2θ)θ
+1
2 = wz + 1
2(w + z)θ
(w + z + 2θ)θ
> 0, (S69)
which immediately implies that
C1 + (1 − τ) = (1 − 2τ) wz − θ2
(w + z + 2θ)θ
+
2 wz−θ2
(w+z+2θ)θ + 1
z − τ + (1 − τ)
= (1 − 2τ)
"
wz − θ2
(w + z + 2θ)θ
+1
#
+
2 wz−θ2
(w+z+2θ)θ + 1
z > 0.
Consequently, when ν < 1 and τ < 1
2 , we have
C1 + (1 − τ) 1 − ν
3
2 −ν
>0
⇐⇒ C1 + (1 − τ) 1 −
1 2 3
2 −ν
!
>0
⇐⇒ C1
1−τ
+1 >
1 2 3
2 −ν
⇐⇒ 3
2−ν> 1
2(1 + 1C−1τ )
⇐⇒ ν < 3
2− 1
2(1 + 1C−1τ ) ,
71

where the second last equivalence holds because 1C−1τ + 1 = C1+1−τ
1−τ > 0. Therefore,
Lemma S1.16(b) holds.
Lemma S1.17. Consider the same setup and notations in Lemma S1.6, and adopt the notations
from Lemmas S1.7 and S1.8. Suppose that z ≡ max1≤i≤m xi > 0, |θm+1| ≤ θ for some positive
θ, and τ ≤ 1/2. Define
F(s) ≡ s−ν(w + s)(z + s)  ̃h(x, s)
p|θm+1| − s ,
and
C2 ≡ (1 − 2τ) wz − θ2
(w + z + 2θ)θ
− τ.
(a) For any s ∈ (0, |θm+1|),
F(s) ≥ Bs−ν
p|θm+1| − s [|θm+1|C2 + (1 − τ)s] .
(b) If
ν < min
(
3
2− 1
2(1 + 1C−2τ ) , 1
)
then
Z |θm+1|
0
s−ν
p|θm+1| − s [|θm+1|C2 + (1 − τ)s] ds > 0.
Proof of Lemma S1.17. The proof of Lemma S1.17 follows almost the same steps as the
proof of Lemma S1.16, except for a few differences discussed below. For (a), we no longer
have (S65) and instead bound the second term in (S62) by zero. That is, 2(A+ s−θm+1
2 B)
(w+s)(z+s)P(x,s) ≥
0, which follows immediately from (S66). For (b), we also have
C2 + (1 − τ) = (1 − 2τ) wz − θ2
(w + z + 2θ)θ
− τ + (1 − τ)
= (1 − 2τ)
"
wz − θ2
(w + z + 2θ)θ
+1
#
> 0,
72

which follows immediately from (S69).
S1.4.3 Bounds on the derivative of the rejection probability
Lemma S1.18 (Modified from Lemma 1 of Bakirov (1989)). Let F and G be two functions of
x that satisfy the following properties, where θm+1 can be any given negative number in R:
(i) G(x) is not identically equal to zero, continuous and nonnegative on (0, |θm+1|] and
d
dx G(x) is continuous and nonnegative on (0, |θm+1|).
(ii) F(x) is continuous on (0, |θm+1|), and there exists some x0 < |θm+1| such that F(x)(x −
x0) ≥ 0 and F(x) > 0 for x0 < x < |θm+1|.
If R |θm+1|
0 F(x) dx converges and is positive, then R |θm+1|
0 F(x)G(x) dx converges, and
Z |θm+1|
0
F(x)G(x) dx > 0.
Proof of Lemma S1.18. The result mainly follows from the proof of Lemma 1 in Bakirov
(1989), with 1 in the integral limit replaced by |θm+1| and slightly revised conditions. For
completeness purposes, we prove the lemma with the revised conditions below, although
most of the proof are taken from Bakirov (1989).
First, from condition (i), G(·) is nonnegative and monotone nondecreasing on (0, |θm+1|].
Thus, G(x) must have a nonnegative limit as x −→ 0+. Define the value of G(·) eval
uated at 0 as this limit, i.e., G(0) ≡ limx−→0+ G(x) ≥ 0. Consequently, G(·) becomes a
continuous and nonnegative function on [0, |θm+1|]. In addition, there must exist a finite
M such that 0 ≤ G(x) ≤ M for all x ∈ [0, |θm+1|].
Second, we prove that F(x) ≡ R |θm+1|
x F(s) ds > 0 for any x ∈ [0, |θm+1|). If condition
(ii) holds for some x0 ≤ 0, then this holds obviously. Below we consider only the case
where condition (ii) holds for some x0 ∈ (0, |θm+1|). For any x ≥ x0, we obviously have
R |θm+1|
x F(s) ds > 0, since F(x) > 0 for x > x0. For any x < x0, we have
Z |θm+1|
x
F(s) ds =
Z |θm+1|
0
F(s) ds −
Zx
0
F(s) ds ≥
Z |θm+1|
0
F(s) ds > 0,
where the second last inequality holds because F(s) ≤ 0 for 0 < s ≤ x < x0.
Third, we prove that R |θm+1|
0 F(x)G(x) dx converges. From condition (ii), there exists
0 < x1 < |θm+1| such that F(x) ≥ 0 for all x ∈ [x1, |θm+1|). From the first part, for any x ∈
[x1, |θm+1|), we then have 0 ≤ F(x)G(x) ≤ MF(x). This implies that R |θm+1|
x1 F(x)G(x) dx
is bounded from the above by M R |θm+1|
x1 F(x) dx and thus converges. We consider then
73

two cases depending on the value of x0 in condition (ii).
• Consider first the case where condition (ii) holds for some x0 ≤ 0. Let x2 be any
number in (0, |θm+1|). We then have F(x) ≥ 0 for all x ∈ (0, x2]. From the first
part, for any x ∈ (0, x2], we then have 0 ≤ F(x)G(x) ≤ MF(x). This implies that
R x2
0 F(x)G(x) dx is bounded from the above by M R x2
0 F(x) dx and thus converges.
• Consider then the case where condition (ii) holds for some x0 > 0. Let x3 < x0 be
a number in (0, |θm+1|). We then have F(x) ≤ 0 for all x ∈ (0, x3]. From the first
part, for any x ∈ (0, x3], we then have MF(x) ≤ F(x)G(x) ≤ 0. This implies that
R x3
0 F(x)G(x) dx is bounded from the below by M R x3
0 F(x) dx and thus converges.
The above discussion then implies that R |θm+1|
0 F(x)G(x) dx converges.
Fourth, recalling the definition of F(x) in the second part, we have d
dx F(x) = −F(x).
For any positive ε1 and ε2 such that ε1 + ε2 < |θm+1|, using integration by parts, we have
Z |θm+1|−ε2
ε1
F(x)G(x) dx
=−
Z |θm+1|−ε2
ε1
G(x) dF(x)
= − G(x)F(x) |θm+1|−ε2
ε1 +
Z |θm+1|−ε2
ε1
F(x) dG(x)
= −G(|θm+1| − ε2)F(|θm+1| − ε2) + G(ε1)F(ε1) +
Z |θm+1|−ε2
ε1
d
dx G(x)F(x) dx. (S70)
From the first part and the condition that R |θm+1|
0 F(x) dx converges, we can know that
G(|θm+1| − ε2)F(|θm+1| − ε2) = G(|θm+1| − ε2)
Z |θm+1|
|θm+1 |−ε2
F(s) ds −→ G(|θm+1|) · 0 = 0
as ε2 −→ 0+, and
G(ε1)F(ε1) −→ G(0)
Z |θm+1|
0
F(x) dx = G(0)F(0)
as ε1 −→ 0+. From the third part, R |θm+1|
0 F(x)G(x) dx converges. These imply that
R |θm+1|
0
d
dx G(x)F(x) dx converges. By letting ε1 and ε2 in (S70) converge to zero from the
right, we then have
Z |θm+1|
0
F(x)G(x) dx = G(0)F(0) +
Z |θm+1|
0
d
dx G(x)F(x) dx. (S71)
74

From the second part, we know that F(x) > 0 for any x ∈ [0, |θm+1|). From condition (i)
and the first part, we know that G(0) ≥ 0 and d
dx G(x) is continuous and nonnegative for
any x ∈ (0, |θm+1|). Thus, the right-hand side of (S71) nonnegative, and it becomes zero if
and only if G(0) = 0 and d
dx G(x) = 0 for any x ∈ (0, |θm+1|), under which G(·) becomes
a zero function on [0, |θm+1|]. Because G(x) is not identically equal to zero as in condition
(i), the right-hand side of (S71) must be positive. Therefore, R |θm+1|
0 F(x)G(x) dx > 0.
From the above, Lemma S1.18 holds.
Lemma S1.19. Consider the same setup and notations in Lemmas S1.6–S1.9. Let z = x(m), w
be any one of (x1, x2, . . . , xm), θ = m + z/κ, θ = max1≤k≤m θ(x(k), k), and
C≡

 
 
(1 − 2τ) wz−θ2
(w+z+2θ)θ + 2 wz−θ2
(w+z+2θ)θ +1
z − τ, if w = x(1),
(1 − 2τ) wz−θ2
(w+z+2θ)θ − τ, otherwise.
Fix the value of c, the values of {xi}im=1 excluding (z, w), and the value of θm+1, and view
P[|Tm| > c] as a function of z. If τ ≤ 1/2, z > w > 0, and
θ
z+θ
+ 2θ
w+θ
− θ−m
τθ − 1 + 1 − τ
1 − τ + min{C, 0} < 1
then ∂P[|Tm|>c]
∂z < 0.
Proof of Lemma S1.19. Let
ν=1+ θ
2(z + θ) + θ
w+θ
− θ−m
2(τθ − 1) , (S72)
and define G(s) and F(s) in the same say as in Lemmas S1.14–S1.17:
G(s) = sνU(x, s)
(w + s)(z + s),
F(s) = s−ν(w + s)(z + s)  ̃h(x, s)
p|θm+1| − s
for s ∈ (0, |θm+1|). From Lemma S1.11, we have
∂P[|Tm| > c]
∂z = −∆
2 L(  ̃h(x, s)) = − ∆
2
1
π
Z |θm+1|
0
 ̃h(x, s)U(x, s)
p|θm+1| − s ds
75

=− z−w
2(z − θm+1)2
1
π
Z |θm+1|
0
sνU(x, s)
(w + s)(z + s)
s−ν(w + s)(z + s)  ̃h(x, s)
p|θm+1| − s ds
=− z−w
2(z − θm+1)2
1
π
Z |θm+1|
0
G(s)F(s) ds.
Note that z > w. To prove Lemma S1.19, it suffices to prove that R |θm+1|
0 G(s)F(s) ds > 0
under the conditions in Lemma S1.19.
First, from Lemma S1.12, θ = max1≤k≤m θ(x(k), k) ≥ m. From Lemmas S1.12 and
S1.13, we must have m ≤ θ ≤ |θm+1| ≤ θ.
Second, by definition, we can know that G(s) is positive and continuous on (0, |θm+1|].
Moreover, by the definition in (S72) and using Lemma S1.14, we can know that d log G(s)
ds ≥
0 for s ∈ (0, |θm+1|]. These then imply that dG(s)
ds ≥ 0 for s ∈ (0, |θm+1|].
Third, by the definition of C and using Lemmas S1.16 and S1.17 for s ∈ (0, |θm+1|),
we have F(s) ≥ BF ̃(s), where
F ̃(s) ≡ s−ν
p|θm+1| − s [|θm+1|C + (1 − τ)s] .
By the definition in (S72) and the conditions in Lemma S1.19, we have
2(ν − 1) + 1 − τ
1 − τ + min{C, 0} < 1
=⇒ ν < 3
2− 1
2(1 + min{C,0}
1−τ )
= min
(
3
2− 1
2(1 + C
1−τ ) , 1
)
.
From Lemmas S1.16 and S1.17, we then have R |θm+1|
0 F ̃(s) ds > 0. Moreover, because
1 − τ > 0, there must exists s0 < |θm+1| such that F ̃(s) · (s − s0) ≥ 0 for s ∈ (0, |θm+1|)
and F(s) > 0 for s0 < s < |θm+1|.
From the above, Lemma S1.18 and the fact that B > 0 from its definition, we then
have
Z |θm+1|
0
G(s)F(s) ds ≥ B ·
Z |θm+1|
0
G(s)F ̃(s) ds > 0.
Therefore, Lemma S1.19 holds.
76

S2 Proof of theorems and lemmas
S2.1 Proof of Theorem 4.1
To prove Theorem 4.1, we need the following lemma.
Lemma S2.1. Under Assumption 4.1, for any δ ∈ R and c > 0, if c ̸= m−1/2 and {σj2}m+1
j=1 are
not all zero, then P[(ψm+1 − ψm + δ)2 = c2S2m] = 0.
Proof of Lemma S2.1. If σm+1 > 0, then, by the law of iterated expectation, we must
have
P[(ψm+1 − ψm + δ)2 = c2S2m] = E
n
P
h
(ψm+1 − ψm + δ)2 = c2S2m | ψ1, . . . , ψm
io
= 0, (S73)
where the last equality holds because ψm+1 is a continuous random variable and has
zero probability mass at any real value. Below it suffices to consider the case where
σm+1 = 0.
From the proof of Lemma S1.1, mc2S2m − m(ψm+1 − ψm)2 = ψ ̃ ⊤V ψ ̃ , and ψm+1 − ψm =
a⊤ψ ̃ , where V and ψ ̃ are defined the same as in Lemma S1.1, and a⊤ = (1, −m−11m⊤).
Consequently,
P[(ψm+1 − ψm + δ)2 = c2S2m] = P[m(ψm+1 − ψm + δ)2 = mc2S2m]
= P[mc2S2m − m(ψm+1 − ψm)2 − 2mδ(ψm+1 − ψm) − mδ2 = 0]
=P
hψ ̃ ⊤V ψ ̃ − 2mδa⊤ψ ̃ − mδ2 = 0
i
=P
h
ξ⊤DV Dξ − 2mδa⊤Dξ − mδ2 = 0
i
,
where D is defined as in Lemma S1.2, ξ ≡ (ξ1, ξ2, . . . , ξm+1)⊤, and {ξi}m+1
i=1 are i.i.d.
standard normal random variables. Let DV D = ΓΛΓ⊤ be the eigendecomposition of
DV D, where Γ is an orthogonal matrix, Λ is a diagonal matrix with diagonal elements
{λi}m+1
i=1 , and {λi}m+1
i=1 are the eigenvalues of DV D, or equivalently the root of the
characteristic polynomial f (λ) in Lemma S1.2. Let ζ = (ζ1, . . . , ζm+1)⊤ = Γ⊤ξ. We can
verify that {ζi}m+1
i=1 are i.i.d. standard normal random variables, and ξ = Γζ. We then
have
P[(ψm+1 − ψm + δ)2 = c2S2m]
77

=P
h
ξ⊤DV Dξ − 2mδa⊤Dξ − mδ2 = 0
i
=P
h
ζ⊤Λζ − 2mδa⊤DΓζ − mδ2 = 0
i
=P
"m+1
∑
i=1
λiζi2 − 2mδa⊤DΓζ − mδ2 = 0
#
. (S74)
Because σm+1 = 0, the characteristic polynomial f (λ) simplifies to
f (λ) = −λ
m
∏
i=1
(κσi2 − λ) + κ + 1
m λ·
m
∑
i=1
"
σi2 ∏
j̸=i,1≤j≤m
(κσj2 − λ)
#
,
where κ = mc2
m−1 . Let σ(1) ≤ σ(2) ≤ . . . ≤ σ(m) be the sorted values of {σi}im=1. We then
have
(−1)m−1 f (κσ2
(m)) = κ + 1
m λ · σ2
(m)κm−1 ∏
j̸=m,1≤j≤m
{σ2
(m) − σ2
(j))} ≥ 0,
(−1)m−1 f (κσ2
(m−1)) = κ + 1
m λ · σ2
(m−1)κm−1 ∏
j̸=m−1,1≤j≤m
{σ2
(m−1) − σ2
(j))} ≤ 0,
which imply that f (λ) must have a root in [κσ2
(m−1), κσ2
(m)]. If σ2
(m−1) > 0, then f (λ)
must have a positive root. By a conditioning argument similar to (S73), we can know
that the quantity in (S74) must be zero. If σ2
(m−1) = 0, then we have must σ2
(j) = 0 for all
1 ≤ j < m, under which f (λ) further simplifies to
f (λ) = (−λ)m · (κσ2
(m) − λ) + κ + 1
m λ · σ2
(m)(−λ)m−1
= (−λ)m κσ2
(m) − λ − κ + 1
m σ2
(m)
= (−λ)m 1
m
n
[(m − 1)κ − 1]σ2
(m) − mλ
o
= (−λ)m 1
m
h
(mc2 − 1)σ2
(m) − mλ
i
,
where the last equality follows from the definition of κ. Because c ̸= m−1/2 and {σj2}m+1
j=1
are not all zero, we can know that (mc2−1)σ2
(m)
m must be a nonzero root of f (λ). By a
conditioning argument similar to (S73), the quantity in (S74) must be zero.
From the above, Lemma S2.1 holds.
Proof of Theorem 4.1. Let θ ̃n,j ≡ √n(θbj − μ0) for 1 ≤ j ≤ m, θ ̃n,m+1 ≡ √n(θbm+1 − μ1),
78

and δn ≡ √n(μ1 − μ0). By definition, we can verify that
|
Tbm| > c ⇐⇒ (θbm+1 − θbm)2 − c2Sb2m > 0 ⇐⇒ (θ ̃n,m+1 − θ ̃n,m + δn)2 − c2S ̃2n,m > 0,
where θ ̃n,m = m−1 ∑jm=1 θ ̃n,j and S ̃2n,m is the sample variance of {θ ̃n,j}jm=1. From Assump
tion 3.1, the condition that √n(μ1 − μ0) −→ δ as n −→ ∞, and using continuous map
ping theorem, we have
(θ ̃n,m+1 − θ ̃n,m + δn)2 − c2S ̃2n,m
−d→ (ψm+1 − ψm + δ)2 − c2S2m,
where ψi ∼ N (0, σj2) for 1 ≤ j ≤ m + 1, {ψi}m+1
i=1 are mutually independent, and ψm and
S2m are the sample average and sample variance of {ψi}im=1. From Lemma S2.1, when
c ̸= m−1/2, the distribution function of (ψm+1 − ψm + δ)2 − c2S2m is continuous at 0.
Consequently, we must have
P[|Tbm| > c] = P
h
(θ ̃n,m+1 − θ ̃n,m + δn)2 − c2S ̃2n,m > 0
i
−→ P
h
(ψm+1 − ψm + δ)2 − c2S2m > 0
i
= P[|Tm| > c],
where the last equality holds by definition. From the above, we derive Theorem 4.1.
S2.2 Proof of Lemmas 4.1 and A.2 and Theorem 4.3
Proof of Lemma 4.1. Lemma 4.1 follows directly from Lemmas S1.4, S1.5, S1.12 and
S1.13.
To prove Lemma A.1, we need the following lemma.
Lemma S2.2. Let {ξi}m+1
i=1 be i.i.d. standard normal random variables. For any c > 0 and
(σm+1, σ1, . . . , σm) ∈ Rm+1
≥0 , define
Dc(σm+1, σ1, . . . , σm) ≡ σm+1ξm+1 − m−1 m
∑
i=1
σi ξ i
2
− c2 · (m − 1)−1 m
∑
j=1
σjξj − m−1 m
∑
i=1
σi ξ i
2
,
pc(σm+1, σ1, . . . , σm) ≡ P[Dc(σm+1, σ1, . . . , σm) > 0].
Consider any given c > 0, ρ > 0 and 1 ≤ k ≤ m, and let p ̃ denote the supremum of
pc(σm+1, σ1, . . . , σm) over all possible values of (σm+1, σ1, . . . , σm) ∈ Rm+1
≥0 such that σm+1 ≤
79

ρσ(k), where σ(1) ≤ σ(2) ≤ . . . ≤ σ(m) denote the sorted values of {σi}im=1. That is,
p ̃ ≡ sup
(σm+1 ,σ1 ,...,σm )∈Rm+1
≥0 :σm+1≤ρσ(k)
pc(σm+1, σ1, . . . , σm).
If c ̸= m−1/2, then one of the following two must hold:
(a) p ̃ = sup(σ1,...,σm)∈Rm≥0 pc(0, σ1, . . . , σm),
(b) p ̃ = pc(  ̃σm+1,  ̃σ1, . . . ,  ̃σm) for some (  ̃σm+1,  ̃σ1, . . . ,  ̃σm) ∈ R+ × Rm≥0 such that  ̃σm+1 ≤
ρ  ̃σ(k), where  ̃σ(1) ≤  ̃σ(2) ≤ . . . ≤  ̃σ(m) denote the sorted values of {  ̃σi}im=1.
Proof of Lemma S2.2. Below we consider any given c > 0, ρ > 0 and 1 ≤ k ≤ m. Below
we state two properties about p ̃, followed from its definition.
• For any (σm+1, σ1, . . . , σm) ∈ Rm+1
≥0 , if σm+1 = 0, then we must have σm+1 ≤ ρσ(k).
By the definition of p ̃, this implies that p ̃ ≥ sup(σ1,...,σm)∈Rm≥0 pc(0, σ1, . . . , σm).
• By the definition of p ̃ and note that the value of pc(σm+1, σ1, . . . , σm) is invariant un
der permutations of (σ1, . . . , σm), there exists a sequence {(σn,m+1, σn1, . . . , σnm)}n∞=1
such that pn ≡ pc(σn,m+1, σn1, . . . , σnm) → p ̃ as n → ∞ and σn,m+1 ≤ ρσni for all n
and all k ≤ i ≤ n.
First, we consider the case where there are infinitely many n such that σn2,m+1 = 0.
In this case, we must have p ̃ ≤ sup(σ1,...,σm)∈Rm≥0 pc(0, σ1, . . . , σm). From the discussion
before, we must have p ̃ = sup(σ1,...,σm)∈Rm≥0 pc(0, σ1, . . . , σm), i.e., (a) in Lemma S2.2 holds.
Second, we consider the case where there are only finitely many n such that σn2,m+1 =
0. We can therefore assume σn2,m+1 > 0 for all n without losing any generality. In the fol
lowing, we consider two cases, depending on whether the limit superior of max1≤i≤m σni
σn,m+1
is finite.
(i) We consider the case where the limit superior of max1≤i≤m σni
σn,m+1 is finite. By the
Bolzano–Weierstrass theorem, there exists a subsequence {(σnj,m+1, σnj1, . . . , σnjm)}j∞=1
such that σni
σn,m+1 converges to some ai for each 1 ≤ i ≤ m. This implies that, as
j → ∞,
Dc(1, σnj1
σnj,m+1 , . . . , σnjm
σnj,m+1 ) a.s.
−→ Dc(1, a1, . . . , an).
Because c ̸= m−1/2, Lemma S2.1 implies that
the distribution function of Dc(1, a1, . . . , an) is continuous at zero. By the property
80

of weak convergence, we then have
p ̃ = jli→m∞ pnj = jli→m∞ P[Dc(1, σnj1
σnj,m+1 , . . . , σnjm
σnj,m+1 ) > 0] = P[Dc(1, a1, . . . , an) > 0]
= pc(1, a1, . . . , an).
Furthermore, it is easy to verify that ρai = ρ limj→∞
σn j i
σnj,m+1 ≥ 1 for k ≤ i ≤ n.
Consequently, (b) in Lemma S2.2 holds.
(ii) We consider the case where the limit superior of max1≤i≤m σni
σn,m+1 is infinite. There
then exists a subsequence such that σn,m+1
max1≤i≤m σni → 0 along this subsequence. By the
Bolzano–Weierstrass theorem, there exists a subsequence {(σnj,m+1, σnj1, . . . , σnjm)}j∞=1
such that, as j → ∞, σnj,m+1
max1≤l≤m σnjl → 0 and σnji
max1≤l≤m σnjl → bi ≤ 1 for all 1 ≤ i ≤ m.
Moreover, at least one of {bi}im=1 is 1.
These then imply that
Dc( σnj,m+1
max1≤l≤m σnjl , σnj1
max1≤l≤m σnjl , . . . , σnjm
max1≤l≤m σnjl ) a.s.
−→ Dc(0, b1, . . . , bn).
Since c ̸= m−1/2 holds, Lemma S2.1 implies that the distribution function of
Dc(0, b1, . . . , bn) is continuous at zero. By the property of weak convergence, we
then have
p ̃ = jli→m∞ pnj = jli→m∞ P[Dc( σnj,m+1
max1≤l≤m σnjl , σnj1
max1≤l≤m σnjl , . . . , σnjm
max1≤l≤m σnjl ) > 0]
= P[Dc(0, b1, . . . , bn) > 0] = pc(0, b1, . . . , bn) ≤ sup
(σ1 ,...,σm )∈Rm≥0
pc(0, σ1, . . . , σm).
From the discussion before, this implies that p ̃ = sup(σ1,...,σm)∈Rm≥0 pc(0, σ1, . . . , σm),
i.e., (a) in Lemma S2.2 holds.
From the above, Lemma S2.2 holds.
Lemma S2.3. For any 1 ≤ k ≤ m and c ̸= m−1/2,12 the maximum rejection probability
pm(c; k, ρ) in (11) must be obtained at some (σ1, . . . , σm, σm+1) ∈ Sm(k, ρ).
Proof of Lemma A.1. From Lemma S2.2, we can know that one of the following two
must hold:
12Similar to the footnote for Theorem 4.1 and as discussed in Remark 4.4, we will consider values of c greater than m−1/2 for most conventional significance levels.
81

(a) pm(c; k, ρ) = sup(σ1,...,σm)∈Rm≥0 pc(0, σ1, . . . , σm),
(b) pm(c; k, ρ) = pc(  ̃σm+1,  ̃σ1, . . . ,  ̃σm) for some (  ̃σm+1,  ̃σ1, . . . ,  ̃σm) ∈ R+ × Rm≥0 such that
 ̃σm+1 ≤ ρ  ̃σ(k), where  ̃σ(1) ≤  ̃σ(2) ≤ . . . ≤  ̃σ(m) denote the sorted values of {  ̃σi}im=1.
When (b) holds, Lemma A.1 holds obviously. Below we consider only the case when (a)
holds. When σm+1 = 0, our t statistic essentially reduces to a one-sample t statistic, ex
cept for a constant scaling term of √m. From Bakirov and Sz ́ekely (2006), the supremum
of pc(0, σ1, . . . , σm) over (σ1, . . . , σm) ∈ Rm≥0 must be achieved when some of {σj}jm=1 are
zero and the remaining take a some common positive value, such as 1. From the above,
Lemma A.1 holds.
Proof of Lemma A.2. Lemma A.2 follows directly from Lemma S1.11, noting that z =
κγ12, where κ is a constant depending only on m and c.
Proof of Theorem 4.2. Consider any given 1 ≤ k ≤ m, ρ ≥ 0, and c > 0 with c ̸= m−1/2.
When ρ = 0, Theorem 4.2 follows immediately from Bakirov and Sze ́kely (2006). We then
consider the case where ρ > 0. From Lemma A.1, the maximum rejection probability
pm(c; k, ρ) is achieved at some finite {σj}jm=1. If σm+1 = 0, then the maximizer must have
the form in (i), as shown in Bakirov and Sze ́kely (2006). Below we consider only the case
where σm+1 > 0.
Because the rejection probability is unchanged when we scale all the variances {σj}jm=1
by a positive constant, we must have pm(c; k, ρ) = pm(c; γ1, . . . , γm) for some (γ1, . . . , γm) ∈
Rm≥0, where γ(k) ≥ ρ−1 and γ(1) ≤ γ(2) ≤ . . . ≤ γ(m) are the sorted values of {γi}im=1.
We prove that, besides 0 and ρ−1, {γi}im=1 cannot take more than one distinct values;
equivalently, there exists γ ≥ 0 such that γi ∈ {0, ρ−1, γ} for all 1 ≤ i ≤ m. We prove
this by contradiction. Assume that, without loss of generality, γ1, γ2 ∈/ {0, ρ−1}, and
γ1 ̸= γ2. Fix the values of c, γ3, . . . , γm and θm+1, and view pm(c; γ1, γ2, γ3, . . . , γm) as a
function of only γ1, where γ2 is uniquely determined by γ1, c, γ3, . . . , γm and θm+1. Note
that the condition γ(k) ≥ ρ−1 still holds when we slightly change the values of γ1 and
consequently γ2. Thus, γ1 is at least a local maximizer of pm(c; γ1, γ2, γ3, . . . , γm) over
a sufficiently small neighborhood of γ1. This implies that the first order derivative of
pm(c; γ1, γ2, γ3, . . . , γm) over γ12 is zero, and the second order derivative of pm(c; γ1, γ2, γ3, . . . , γm)
over γ12 is less than or equal to zero. This, however, contradicts Lemma A.2.
Therefore, we must have pm(c; k, ρ) = pm(c; γ1, . . . , γm) for some {γj}jm=1 such that
γi ∈ {0, ρ−1, γ} for 1 ≤ i ≤ m and some γ ≥ 0. Again, because the rejection probability is
unchanged when we scale all the variances {σj}jm=1 by a positive constant, the maximum
82

rejection probability must be obtained at some {σj}m+1
j=1 such that σm+1 = ρ, and σi ∈
{0, 1, γ} for 1 ≤ i ≤ m and some γ ≥ 0.
From the above, Theorem 4.2 holds.
Proof of Theorem 4.3. Consider any given 1 ≤ k ≤ m, ρ > 0, and c > 0 with c ̸= m−1/2.
From Theorem 4.2, we have either pm(c; k, ρ) = pm,0(c), or pm(c; k, ρ) = pm(c; γ1, . . . , γm)
for some (γ1, . . . , γm) ∈ Rm≥0 such that γi ∈ {0, ρ−1, γ} for some γ ∈ R and γ(k) ≥ ρ−1,
where γ(1) ≤ γ(2) ≤ . . . ≤ γ(m) are the sorted values of {γi}im=1.
Now suppose that the latter holds, i.e., pm(c; k, ρ) = pm(c; γ1, . . . , γm) some (γ1, . . . , γm) ∈
Rm≥0 satisfying the conditions discussed before.
Let m1 and m0 denote the numbers of γis that take values ρ−1 and 0, respectively.
That is, m1 = ∑im=1 1(γi = ρ−1) and m0 = ∑im=1 1(γi = 0). Consequently, the number
of γis that take the value γ is m − m1 − m0, and pm(c; γ1, γ2, γ3, . . . , γm) simplifies to
pm(c; ρ, γ; m1, m0) defined in (15). Note that {γi}im=1 needs to satisfy the constraint that
γ(k) ≥ ρ−1. Thus, we must have 0 ≤ m0 ≤ k − 1, m1 ≤ m − m0, and γ ∈ R≥0 if
m1 ≥ m − k + 1 and γ ∈ [ρ−1, ∞) if m1 < m − k + 1. In sum, pm(c; k, ρ) equals to
pm(c; ρ, γ; m1, m0) for some 0 ≤ m0 ≤ k − 1, m1 ≤ m − m0, and γ ∈ R≥0 if m1 ≥ m − k + 1
and γ ∈ [ρ−1, ∞) if m1 < m − k + 1.
From the above, we list possible cases where the rejection probability obtains its supre
mum value pm(c; k, ρ). Thus, pm(c; k, ρ) must be the supremum over all the cases we
discussed above. We can therefore derive Theorem 4.3.
S2.3 Proof of Lemma A.3
Below we first give the form of Hm(c; γ1, . . . , γm) in Lemma A.3. For any c > 0 and
(γ1, γ2, . . . , γm) ∈ Rm≥0, let κ ≡ mc2
m−1 , τ ≡ κ+1
κm , xi ≡ κγi2 for 1 ≤ i ≤ m, x(1) ≤ x(2) ≤ . . . ≤
x(m) be the sorted values of {xi}im=1, and
H′m(w; c; γ1, . . . , γm)
≡θ
x(m) + θ
+ 2θ
w+θ
− θ−m
τθ − 1 + 1 − τ
1 − τ + min{Cm(w; c; γ1, . . . , γm), 0} − 1, (S75)
83

where θ ≡ m + x(m)
κ , θ ≡ max1≤j≤m θ(x(j), j) with θ(·) defined as in Lemma S1.12, and
Cm(w; c; γ1, . . . , γm) ≡

 
 
1 − 2τ + 2
x(m)
wx(m)−θ2
(w+x(m)+2θ)θ + 1
x(m) − τ, if w = x(1),
(1 − 2τ) wz−θ2
(w+z+2θ)θ − τ, if w > x(1).
Then Hm(c; γ1, . . . , γm) is defined as
Hm(c; γ1, . . . , γm) = H′m(x2; c; γ1, . . . , γm). (S76)
Proof of Lemma A.3. Note that if c ≥ p2(m − 1)/[m(m − 2)], then τ defined as in
Lemma S1.19 satisfies that
τ = κ+1
κm = 1
m+ 1
κm = 1
m + m−1
m2c2 ≤ 1
m + (m − 1)m(m − 2)
m2 · 2(m − 1) = 1
m + m−2
2m = 1
2,
where κ is defined as in Lemma S1.19. Lemma A.3 follows immediately from Lemma
S1.19.
S2.4 Simplifying the optimization under general relative heterogene
ity assumption
Below we consider simplification on optimization under general relative heterogeneity
constraint. Specifically, Lemma A.3 can help to simplify the optimization in (16). Consider
any 1 ≤ m1 ≤ m − 1, 0 ≤ m0 ≤ m − m1 − 1, and the optimization of pm(c; ρ, γ; m1, m0)
over either γ ∈ [0, ∞) or γ ∈ [ρ−1, ∞). Let
(γ1, γ2, . . . , γm) = ( γ, . . . , γ
| {z }
m−m1−m0
, ρ−1, . . . , ρ−1
| {z }
m1
, 0, . . . , 0
| {z }
m0
).
Define
Hˇ m(c; ρ, γ; m1, m0) = H′m(ρ−1; c; γ1, . . . , γm)}
For any ρ > 0 and γ > ρ−1, if Hˇ m(c; ρ, γ; m1, m0) < 0, then we can strictly increase
the rejection probability pm(γ1, γ2, . . . , γm) by slightly decreasing one of {γj}jm=1 that is
equal to γ and slightly increasing one of {γj}jm=1 that is equal to ρ−1. Importantly, if
the original {γj}jm=1 satisfy the relative heterogeneity assumption for some k, then the
slight changes of the {γj}jm=1 will maintain this relative heterogeneity assumption. Con
84

sequently, pm(γ1, γ2, . . . , γm) cannot be the maximum rejection probability under the rel
ative heterogeneity assumption.
From the above, if Hˇ m(c; ρ, γ; m1, m0) < 0 for all γ > ρ−1, then supγ∈[ρ−1,∞) pm(c; ρ, γ; m1, m0)
must be obtained at γ = ρ−1, and supγ∈R≥0 pm(c; ρ, γ; m1, m0) must be obtained at some
γ ∈ [0, ρ−1]. In other words, we can either obtain a closed-form solution for the optimiza
tion or restrict the optimization to a smaller range.
S2.5 Simplifying the optimization under relative heterogeneity assump
tion with k = 1
Theorem S1. For any given m ≥ 4, ρ > 0, c >
q 3(m−1)
m(m−3) , define the following as a
function of γ:
Hem(γ; c, ρ) ≡ θ
κγ2 + θ
+ 2θ
κρ−2 + θ
− θ−m
τθ − 1 + 1 − τ
1 − τ + min{C, 0} − 1,
where θ ≡ m + γ2, θ ≡ m + ρ−2, κ ≡ mc2
m−1 , τ ≡ κ+1
mκ , and
C ≡ 1 − 2τ + 2
κγ2
κ2γ2ρ−2 − θ2
(κγ2 + κρ−2 + 2θ)θ
+1
κγ2 − τ.
Suppose that
Hem(γ; c, ρ) < 0 for all γ > ρ−1.
Then, the maximum rejection probability pm(c; 1, ρ) under Assumption 3.2 with k = 1
and the given ρ, m, and c has the following equivalent form:
pm(c; 1, ρ) = P
"
|tm−1|
r
ρ2 + 1
m >c
#
.
Proof of Theorem S1. First, for any given 1 ≤ m1 ≤ m − 1, ρ > 0 and γ > ρ−1, we
consider
(γ1, γ2, . . . , γm) = (γ, ρ−1, γ, . . . , γ
| {z }
m−m1−1
, ρ−1, . . . , ρ−1
| {z }
m1−1
). (S77)
Recall the definition in (S75) and (S76), we have
Hm(c; γ1, . . . , γm)
85

= H′m(x2; c; γ1, . . . , γm)
=θ
x(m) + θ
+ 2θ
x2 + θ
− θ′ − m
τθ′ − 1 + 1 − τ
1 − τ + min{Cm(x2; c; γ1, . . . , γm), 0} − 1,
where κ ≡ mc2
m−1 , τ ≡ κ+1
κm , xi ≡ κγi2 for 1 ≤ i ≤ m, x(1) ≤ x(2) ≤ . . . ≤ x(m) are the
sorted values of {xi}im=1, θ = m + x(m)/κ, θ′ = max1≤j≤m θ(x(j), j) with θ(·) defined as in
Lemma S1.12, and
Cm(x2; c; γ1, . . . , γm) = 1 − 2τ + 2
x(m)
! x2x(m) − θ2
(x2 + x(m) + 2θ)θ
+1
x(m)
− τ.
Note that (θ − m)/(τθ − 1) is increasing in θ, due to the fact that −1 + mτ = 1/κ > 0,
and θ′ = max1≤j≤m θ(x(j), j) ≥ θ(x(1), 1) = m + ρ−2 = θ, where the last equality follows
from Lemma S1.12(c). We then have
Hm(c; γ1, . . . , γm) = θ
x(m) + θ
+ 2θ
x2 + θ
− θ′ − m
τθ′ − 1 + 1 − τ
1 − τ + min{Cm(x2; c; γ1, . . . , γm), 0} − 1
≤θ
x(m) + θ
+ 2θ
x2 + θ
− θ−m
τθ − 1 + 1 − τ
1 − τ + min{Cm(x2; c; γ1, . . . , γm), 0} − 1
=
Hem(c; ρ, γ),
where the last equality follows by definition.
Second, from the first part and the condition that Hem(c; ρ, γ) < 0 for all γ > ρ−1, we
know that Hm(c; γ1, . . . , γm) < 0, for all 1 ≤ m1 ≤ m, ρ > 0, γ > ρ−1 and (γ1, . . . , γm)
defined as in (S77). In addition, we have
c
q 2(m−1) m(m−2)
>
q 3(m−1) m(m−3)
q 2(m−1) m(m−2)
=
s
3(m − 2)
2(m − 3) =
r3m − 6
2m − 6 ≥ 1.
From Lemma A.3, we know that for 1 ≤ m1 ≤ m − 1 and any c, ρ > 0, pm(c; ρ, γ; m1, 0)
cannot be pm(c; 1, ρ) for any γ > ρ−1, since we can strictly increase the rejection proba
bility pm(γ1, . . . , γm) by slightly decreasing one of {γi}im=1 that is equal to γ and slightly
increasing one of {γi}im=1 that is equal to ρ−1.
Third, we consider pm(c; γ1m⊤) for any γ > 0. In this case, pm(c; γ1m⊤) = P[|Tm| > c],
where Tm is defined as in (8) with ψm+1 ∼ N (0, γ−2) and ψi ∼ N (0, 1) for 1 ≤ i ≤ m. We
can verify that Tm ∼ p
γ−2 + m−1tm−1, where tm−1 is a t-distributed random variable
86

with m − 1 degrees of freedom. Consequently,
pm(c; γ1m⊤) = P[|Tm| > c] = P
"
|tm−1| > c
p
γ−2 + m−1
#
,
which is decreasing in γ. This implies that supγ∈[ρ−1,∞) pm(c; γ1m⊤) = pm(c; ρ−11m⊤).
Fourth, from the second and third parts, we know that pm(c; 1, ρ) defined as in Theo
rem 4.3 has the following equivalent forms:
pm(c; 1, ρ) = max
n
max
0≤m1≤m p ̃m(c; k, ρ; m1, 0), pm,0(c)
o
= max
n
pm(c; ρ−11m⊤), pm,0(c)
o
= max
(
P
"
|tm−1| > c
p
ρ2 + m−1
#
, pm,0(c)
)
.
Fifth, from Bakirov and Sze ́kely (2006), we can know that, when c > p3(m − 1)/[m(m − 3)],
pm,0(c) = P |tm−1| > √mc ≤ P
"
|tm−1| > c
p
ρ2 + m−1
#
.
This implies that
pm(c; 1, ρ) = max
(
P
"
|tm−1| > c
p
ρ2 + m−1
#
, pm,0(c)
)
=P
"
|tm−1| > c
p
ρ2 + m−1
#
.
Therefore, Theorem S1 holds.
S2.6 Proof of Theorem 4.4
We will prove Theorem 4.4 using Theorem S1. Define
Hem,1(γ; c, ρ) ≡ θ
κγ2 + θ
+ 2θ
κρ−2 + θ
,
Hem,2(γ; c, ρ) ≡ 1 − τ
1 − τ + min{C, 0} ,
Hem,3(c, ρ) ≡ − θ − m
τθ − 1,
(S78)
where κ, θ, θ, τ and C are defined the same as in Theorem S1:
87

κ ≡ mc2
m − 1, θ ≡ m + γ2, θ ≡ m + ρ−2, τ ≡ κ + 1
mκ ,
C ≡ 1 − 2τ + 2
κγ2
κ2γ2ρ−2 − θ2
(κγ2 + κρ−2 + 2θ)θ
+1
κγ2 − τ. (S79)
By definition, we can then write Hem(γ; c, ρ) in Theorem S1 as
Hem(γ; c, ρ) = Hem,1(γ; c, ρ) + Hem,2(γ; c, ρ) + Hem,3(c, ρ) − 1.
In the following Lemmas S2.4–S2.7, we construct upper bounds Hm,1(c, ρ) and Hm,2(c, ρ)
for Hem,1(γ; c, ρ) and Hem,2(γ; c, ρ), respectively, over all γ ∈ (ρ−1, ∞); see (S86) and (S96)
for their expressions. We can thus bound Hem(γ; c, ρ) over all γ > ρ−1 from the above by
Hm,1(c, ρ) + Hm,2(c, ρ) + Hem,3(c, ρ) − 1.
We then establish the monotonicity of Hm,1(c, ρ), Hm,2(c, ρ), and Hem,3(c, ρ) with respect
to c in Lemmas S2.8–S2.10, respectively. Finally, we prove Theorem 4.4.
Lemma S2.4. Define Hem,1(γ; c, ρ) as in (S78) for γ > ρ−1. One of the following statements is
true:
(a) There exists at most one finite γ0 such that γ0 > ρ−1 and ∂Hem,1(γ;c,ρ)
∂γ
γ=γ0
= 0.
(b) ∂Hem,1(γ;c,ρ)
∂γ = 0 for any γ > ρ−1.
Proof of Lemma S2.4. Note that Hem,1(γ; c, ρ) can be written explicitly in terms of γ2 as
follows:
Hem,1(γ; c, ρ) ≡ m + γ2
(κ + 1)γ2 + m + 2 m + γ2
γ2 + (κρ−2 + m) . (S80)
The derivatives of the above two fractions with respect to γ2 are, respectively,
∂[ m+γ2
(κ+1)γ2+m ]
∂(γ2) = −mκ
[(κ + 1)γ2 + m]2 , (S81)
and
∂[ m+γ2
γ2+(κρ−2+m) ]
∂(γ2) = κρ−2
[γ2 + (κρ−2 + m)]2 . (S82)
88

Combining (S81) and (S82) gives
∂
Hem,1(γ; c, ρ) ∂(γ2)
=
∂[ m+γ2
(κ+1)γ2+m ]
∂(γ2) + 2
∂[ m+γ2
γ2+(κρ−2+m) ]
∂(γ2) = κ 2ρ−2
[γ2 + (κρ−2 + m)]2 − m
[(κ + 1)γ2 + m]2
= κ{2ρ−2[(κ + 1)γ2 + m]2 − m[γ2 + (κρ−2 + m)]2}
[γ2 + (κρ−2 + m)]2 · [(κ + 1)γ2 + m]2
= κ{p2ρ−2[(κ + 1)γ2 + m] + √m[γ2 + (κρ−2 + m)]}
[γ2 + (κρ−2 + m)]2 · [(κ + 1)γ2 + m]2 ×
q
2ρ−2[(κ + 1)γ2 + m] − √m[γ2 + (κρ−2 + m)]
= κ{p2ρ−2[(κ + 1)γ2 + m] + √m[γ2 + (κρ−2 + m)]}
[γ2 + (κρ−2 + m)]2 · [(κ + 1)γ2 + m]2 ×
q
2ρ−2(κ + 1) − √m γ2 − √m(κρ−2 + m) −
q
2ρ−2m . (S83)
The goal of this lemma is to show either there exists at most one γ0 > ρ−1 that
satisfy statement (a), or the partial derivative is constant for all γ. Since ∂Hem,1(γ;c,ρ)
∂(γ2) =
2γ ∂Hem,1(γ;c,ρ)
∂γ and we require γ > ρ−1 > 0, finding a γ0 such that ∂Hem,1(γ;c,ρ)
∂γ
γ=γ0
=0
is equivalent to finding γ0 that satisfy ∂Hem,1(γ;c,ρ)
∂(γ2)
γ2 =γ02
= 0. To this end, it suffices to
consider the scenario such that (S83) equals 0. Because ρ, κ, γ and m are all positive,
(S83) equals 0 if and only if
q
2ρ−2(κ + 1) − √m γ2 = √m(κρ−2 + m) −
q
2ρ−2m. (S84)
There are two scenarios to consider.
First, consider the case where p2ρ−2(κ + 1) − √m ̸= 0. Then, (S84) implies that
γ2 =
√m(κρ−2 + m) − p2ρ−2m
p2ρ−2(κ + 1) − √m . (S85)
In (S85), if the RHS is positive, then there is one positive γ that satisfy the equation.
If the RHS equals 0, then this cannot be the γ0 we wish to find because we require
γ0 > ρ−1 > 0. If the RHS is negative, then there is no real solution. Thus, in this case,
89

there is at most one γ0 > ρ−1 such that ∂Hem,1(γ;c,ρ)
∂γ
γ=γ0
=0.
Now, consider the second scenario where p2ρ−2(κ + 1) − √m = 0 under the first
case. Then, the derivative is either always positive, negative, or zero for all γ > ρ−1.
Thus, either statement (a) or (b) is true.
From the above, Lemma S2.4 holds.
Lemma S2.5. For any given values of positive c, ρ, and m, define Hem,1(γ; c, ρ) as in (S78) for
γ > ρ−1. For any γ > ρ−1, we have Hem,1(γ; c, ρ) ≤ Hm,1(c, ρ), where
Hm,1(c, ρ) ≡ max Hem,1(ρ−1; c, ρ), γli→m∞
Hem,1(γ; c, ρ)
= max 3(m + ρ−2)
(κ + 1)ρ−2 + m , 2κ + 3
κ + 1 . (S86)
Proof of Lemma S2.5. Following Lemma S2.4, we consider the following three scenarios.
First, suppose there is no γ0 > ρ−1 such that ∂Hem,1(γ;c,ρ)
∂γ
γ=γ0
= 0. This means
∂
He m,1 (γ;c,ρ)
∂γ is either positive or negative for all γ > ρ−1 because ∂Hem,1(γ;c,ρ)
∂γ is continu
ous for all real γ from (S83). Thus, Hem,1(γ; c, ρ) is monotone in γ for all γ > ρ−1.
Second, suppose that ∂Hem,1(γ;c,ρ)
∂γ = 0 for any γ > ρ−1. This means Hem,1(γ; c, ρ) is
constant in γ for all γ > ρ−1.
Third, suppose there is one γ0 > ρ−1 such that ∂Hem,1(γ;c,ρ)
∂γ
γ=γ0
= 0. For this γ0, it has
to satisfy (S85). There are two scenarios to consider as follows:
(i) √m(κρ−2 + m) − p2ρ−2m > 0 and p2ρ−2(κ + 1) − √m > 0.
(ii) √m(κρ−2 + m) − p2ρ−2m < 0 and p2ρ−2(κ + 1) − √m < 0.
We first show that scenario (ii) is impossible. To see this, assume to the contrary that
√m(κρ−2 + m) − p2ρ−2m < 0 and p2ρ−2(κ + 1) − √m < 0. The first inequality implies
that
κρ−2 + m <
q
2ρ−2m, (S87)
whereas the second inequality implies that
q
2ρ−2 <
√m
κ + 1. (S88)
90

Combining inequalities (S87) and (S88) gives
κρ−2 + m < √m ·
√m
κ+1 = m
κ + 1 < m,
leading to a contradiction. Therefore, it remains to consider scenario (i), i.e., √m(κρ−2 +
m) − p2ρ−2m > 0 and p2ρ−2(κ + 1) − √m > 0. From (S83), we can know that
∂
He m,1 (γ;c,ρ)
∂(γ2) is negative when γ < γ0 and positive when γ > γ0. Consequently, Hem,1(γ; c, ρ)
is decreasing for γ < γ0 and increasing for γ > γ0.
From the above, we have:
(a) in the first and second scenarios, Hem,1(γ; c, ρ) is either increasing, decreasing, or
constant in γ ∈ (ρ−1, ∞);
(b) in the third scenario, Hem,1(γ; c, ρ) is decreasing for γ ∈ (ρ−1, γ0) and increasing for
γ ∈ (γ0, ∞), for some γ0 > ρ−1.
This means Hem,1(γ; c, ρ) is bounded from above by its endpoints, i.e., it is bounded from
above by
Hm,1(c, ρ) ≡ max Hem,1(ρ−1; c, ρ), γli→m∞
Hem,1(γ; c, ρ) ,
where
Hem,1(ρ−1; c, ρ) = m + ρ−2
(κ + 1)ρ−2 + m + 2(m + ρ−2)
(κ + 1)ρ−2 + m = 3(m + ρ−2)
(κ + 1)ρ−2 + m ,
γli→m∞
Hem,1(γ; c, ρ) = γli→m∞
m + γ2
(κ + 1)γ2 + m + 2 γli→m∞
m + γ2
γ2 + (κρ−2 + m)
=1
κ + 1 + 2 = 2κ + 3
κ+1 .
Therefore, we have proved Lemma S2.5.
Lemma S2.6. For any given positive c, ρ, m and any γ > ρ−1, define
D1(γ) = 1
2 γ4 + κρ−2 + 1
2 ρ−2 + 1
2 m γ2 + 1
2 ρ−2m,
D2(γ) = (κ + 2)γ4 + (κm + κρ−2 + 4m)γ2 + m(κρ−2 + 2m),
Z(γ) = D1(γ)
D2(γ) .
91

For all γ > ρ−1, we have Z(γ) ≥ Z, where
Z ≡ min 1
2(mρ2 + 1), 1
2(κ + 2) = 1
2 · max{mρ2 + 1, κ + 2} > 0. (S89)
Proof of Lemma S2.6. To derive the lower bound on Z(γ), we will study ∂Z(γ)
∂γ2 . The
derivatives of D1(γ) and D2(γ) with respect to γ2 are, respectively:
∂D1(γ)
∂γ2 = γ2 + κρ−2 + 1
2 (m + ρ−2),
∂D2(γ)
∂γ2 = 2(κ + 2)γ2 + (κm + κρ−2 + 4m).
Using the above, we have
∂Z(γ)
∂γ2 =
D2(γ) ∂D1(γ)
∂(γ2) − D1(γ) ∂D2(γ)
∂(γ2)
{D2(γ)}2
= [m − ρ−2(κ + 1)2]γ4 + 2m(m − ρ−2)γ2 + m[κ2ρ−4 + m2 + mρ−2(2κ − 1)]
{D2(γ)}2
= Z1γ4 + Z2γ2 + Z3
{D2(γ)}2 , (S90)
where Z1 ≡ m − ρ−2(κ + 1)2, Z2 ≡ 2m(m − ρ−2), and Z3 ≡ m[κ2ρ−4 + m2 + mρ−2(2κ −
1)]. Let f (γ2) ≡ Z1γ4 + Z2γ2 + Z3 be a quadratic function of γ2. In the following, we
consider three different cases depending on the sign of Z1.
First, suppose that Z1 > 0. Since κ > 0, it follows that
Z2 = 2m(m − ρ−2) > 2m[m − ρ−2(κ + 1)2] = 2mZ1 > 0. (S91)
In addition, Z1 > 0 implies that mρ2 > (κ + 1)2, or equivalently,
κ<ρ
√m − 1. (S92)
Note that Z3 can be written as
Z3 = m[κ2ρ−4 + 2mκρ−2 + m2 − mρ−2] = m[(κρ−2 + m)2 − mρ−2]
= m(κρ−2 + m + √mρ−1)(κρ−2 + m − √mρ−1)
= mρ−2(κρ−2 + m + √mρ−1)(κ + mρ2 − √mρ)
92

= mρ−2(κρ−2 + m + √mρ−1)[κ + √mρ(√mρ − 1)]. (S93)
Combining (S92) and (S93), we have
Z3 > mρ−2(κρ−2 + m + √mρ−1)(κ + √mρκ) > 0. (S94)
(S91) and (S94) then imply that − ZZ21 < 0 and ZZ31 > 0. If the quadratic function f (·)
have real roots, then, by Vieta’s formulas, the sum of the two roots are negative while
the product of roots is positive, implying that both roots of f (γ2) = 0 are negative.
Otherwise, the quadratic function f (·) takes positive values on the whole real line. In
both cases, we have f (γ2) > 0 for all γ > 0.
Second, consider the case where Z1 = 0. In this case, f (γ2) = Z2γ2 + Z3. By the same
argument as in (S91), we have Z2 > 0. Note that Z1 = 0 implies κ = √mρ − 1. Using
(S93), we have Z3 > 0. Therefore, f (γ2) > 0 for all γ > 0.
Third, consider the case where Z1 < 0. We consider the following cases.
• Suppose that f (·) has real roots and Z2 < 0. Then the sum of the two roots of
f (·) equals − ZZ12 < 0. Thus, there is at most one positive root of f (·). If f (·) has a
positive root γ02, i.e., f (γ02) = 0, then f (γ2) must be positive when 0 < γ < γ0 and
negative when γ > γ0. Otherwise, f (γ2) < 0 for all γ > 0.
• Suppose that f (·) has real roots and Z2 ≥ 0. By definition, this means √m ≥ ρ−1,
or equivalently, √mρ − 1 ≥ 0. From (S93), because κ > 0, this implies that Z3 > 0.
Thus, the product of the two roots of f (·) equals ZZ31 < 0. Consequently, f (·) has
one positive root and one negative root. Let γ02 be the positive root of f (·), i.e.,
f (γ02) = 0. Then f (γ2) must be positive when 0 < γ < γ0 and negative when
γ > γ0.
• Suppose that f (·) does not have real roots. Then the quadratic function f (·) takes
negative values on the whole real line.
From the above, one of the following must hold for f (·):
(i) f (γ2) > 0 for all γ > 0;
(ii) f (γ2) < 0 for all γ > 0;
(iii) for some γ0 > 0, f (γ2) > 0 for 0 < γ < γ0, f (γ02) = 0, and f (γ2) < 0 for γ > γ0.
From (S90), we can know that
(i) Z(γ) is either increasing or decreasing in γ ∈ (ρ−1, ∞);
93

(ii) for some γ0 > ρ−1, Z(γ) is increasing for γ ∈ (ρ−1, γ0) and decreasing for γ ∈
(γ0, ∞)
Thus, the infimum of Z(γ) over γ ∈ (ρ−1, ∞) must be obtained at the endpoints, which
immediately implies that, for all γ > ρ−1,
Z(γ) ≥ min Z(ρ−1), γli→m∞ Z(γ) , (S95)
where
Z(ρ−1) = ρ−4(κ + ρ2m + 1)
2ρ−4(mρ2 + 1)(κ + mρ2 + 1) = 1
2(mρ2 + 1) ,
γli→m∞ Z(γ) = 1
2(κ + 2).
By definition, this then implies that Z(γ) ≥ Z for all γ > ρ−1. Moreover, we have Z > 0
because κ, m, ρ > 0. Therefore, we derive Lemma S2.6.
Lemma S2.7. For any given values of positive m ≥ 4, c >
q 2(m−1)
m(m−2) and ρ, define Hem,2(γ; c, ρ)
as in (S78) for γ > ρ−1. For any γ > ρ−1, we have Hem,2(γ; c, ρ) ≤ Hm,2(c, ρ), where
Hm,2(c, ρ) ≡ 1 − τ
1 − τ + min{
h
(1 − 2τ)κZ − 1
2
i
, 0}
, (S96)
and Z is defined as in (S89).
Proof of Lemma S2.7. Recall that Hem,2(γ; c, ρ) ≡ 1−τ
1−τ+min{C,0} with
C ≡ 1 − 2τ + 2
κγ2
κ2γ2ρ−2 − θ2
(κγ2 + κρ−2 + 2θ)θ
+1
κγ2 − τ and θ = m + γ2.
Define D1(γ) and D2(γ) as in (S2.6). We have
(κγ2 + κρ−2 + 2θ)θ = [(κ + 2)γ2 + 2m + κρ−2](γ2 + m)
= D2(γ),
and
(κ2γ2ρ−2 − θ2) + 1
2 (κγ2 + κρ−2 + 2θ)θ = κ2γ2ρ−2 + 1
2κγ2θ + 1
2 κρ−2θ ≡ D1(γ) · κ > 0.
(S97)
94

By the same logic as the proof of Lemma A.3, because c ≥
q 2(m−1)
m(m−2) , we have τ < 1/2.
Hence, we have
C = 1 − 2τ + 2
κγ2
D1(γ)κ − 1
2 D2(γ)
D2(γ) + 1
κγ2 − τ = 1 − 2τ + 2
κγ2
D1(γ)κ
D2(γ) − 1
2
≥ (1 − 2τ) D1(γ)κ
D2(γ) − 1
2 = (1 − 2τ)κZ(γ) − 1
2 ≥ (1 − 2τ)κZ − 1
2, (S98)
where the last inequality follows from Lemma S2.6 and that τ < 1/2. This then implies
that
1 − τ + min{C, 0} ≥ 1 − τ + min (1 − 2τ)κZ − 1
2 , 0 > 0,
and consequently
Hem,2(γ; c, ρ) = 1 − τ
1 − τ + min{C, 0} ≤ 1 − τ
1 − τ + min{
h
(1 − 2τ)κZ − 1
2
i
, 0}
= Hm,2(c, ρ).
(S99)
Therefore, Lemma S2.7 holds.
Lemma S2.8. For any given values of positive c, ρ, and m ≥ 2, define Hm,1(c, ρ) as in (S86).
We have that Hm,1(c, ρ) is decreasing in c > 0.
Proof of Lemma S2.8. By definition,
Hm,1(c, ρ) = max 3(m + ρ−2)
(κ + 1)ρ−2 + m , 2κ + 3
κ+1 ,
where κ = mc2
m−1 is increasing in c > 0. Note that both 3(m+ρ−2)
(κ+1)ρ−2+m and 2κ+3
κ+1 = 2 + 1
κ+1
are decreasing in κ. These then imply that Hm,1(c, ρ) is decreasing in κ. Consequently,
Hm,1(c, ρ) is decreasing in c > 0. Therefore, Lemma S2.8 holds.
Lemma S2.9. For any given values of positive m ≥ 4, c >
q 2(m−1)
m(m−2) and ρ, define Hm,2(c, ρ)
as in (S96). We have that Hm,2(c, ρ) is nonincreasing in c.
Proof of Lemma S2.9. Because κ is increasing in c > 0, as shown in the proof of Lemma
S2.8, it suffices to prove that Hm,2(c, ρ) is nonincreasing in κ. By definition,
Hm,2(c, ρ) = 1 − τ
1 − τ + min{(1 − 2τ)κZ − 1
2, 0} ,
95

where
κ = mc2
m − 1, τ = κ + 1
mκ , Z = min 1
2(mρ2 + 1) , 1
2(κ + 2) .
Note that
(1 − 2τ)κZ − 1
2 = (1 − 2τ) min κ
2(mρ2 + 1) , κ
2(κ + 2) − 1
2.
Obviously, κ
2(mρ2+1) and κ
2(κ+2) are increasing in κ, which implies that κZ is increasing in
κ. In addition, τ = κ+1
mκ = 1
m+ 1
mκ is decreasing in κ. Thus, (1 − 2τ)κZ − 1
2 is increasing
in κ. Below we consider two cases depending on whether there exists κ0 > 0 such that
(1 − 2τ)κZ − 1
2 = 0 when evaluated at κ = κ0.
First, assume that such κ0 > 0 exists. Since (1 − 2τ)κZ − 1
2 is increasing in κ, we can
know that (1 − 2τ)κZ − 1
2 < 0 for κ < κ0 and (1 − 2τ)κZ − 1
2 > 0 for κ > κ0. Thus, for
κ ≥ κ0,
Hm,2(c, ρ) = 1 − τ
1−τ
= 1, (S100)
which is a constant over all κ ≥ κ0. For κ < κ0,
Hm,2(c, ρ) = 1 − τ
1−τ+
h
(1 − 2τ)κZ − 1
2
i = 2(1 − τ)
(1 − 2τ)(1 + 2κZ) = 1
1 + 2κZ 1 + 1
1 − 2τ .
(S101)
From the discussion before, κZ is increasing in κ, and τ is decreasing in κ. These imply
that (S101) must be decreasing in κ ∈ (0, κ0). Therefore, Hm,2(c, ρ) is nonincreasing in κ.
Second, assume that such κ does not exist. Then (1 − 2τ)κZ − 1
2 is either positive for
any κ > 0, or negative for any κ > 0. Below we consider the two cases, separately.
• Suppose that (1 − 2τ)κZ − 1
2 > 0 for any κ > 0. Then Hm,2(c, ρ) has the form in
(S100). This implies that Hm,2(c, ρ) is constant over all κ > 0.
• Suppose that (1 − 2τ)κZ − 1
2 < 0 for any κ > 0. Then Hm,2(c, ρ) has the form in
(S101). For the same reason as in the first case, Hm,2(c, ρ) is decreasing in κ > 0.
From the above, Lemma S2.9 holds.
Lemma S2.10. For given values of positive c, ρ, and m ≥ 2, define Hem,3(c, ρ) as in (S78). We
have that Hem,3(c, ρ) is decreasing in c > 0
Proof of Lemma S2.10. Because κ is increasing in c > 0, as shown in the proof of Lemma
96

S2.8, it suffices to prove that Hem,3(c, ρ) is decreasing in κ. By definition,
∂
∂κ
Hem,3(c, ρ) ≡ −(θ − m) · ∂
∂κ
1
τθ − 1 = (θ − m) · θ
(τθ − 1)2
∂τ
∂κ ,
where θ = m + ρ−2 and τ = κ+1
mκ . Because θ − m = ρ−2 > 0, θ > 0, and τ = 1
m+ 1
mκ is decreasing in κ, we can know that ∂
∂κ Hem,3(c, ρ) < 0. Consequently, Hem,3(c, ρ) is
decreasing in κ. Therefore, Lemma S2.10 holds.
Proof of Theorem 4.4. Define Hem(γ; c, ρ) as in Theorem S1, Hem,1(γ; c, ρ), Hem,2(γ; c, ρ) and
Hem,3(c, ρ) as in (S78), Hm,1(c, ρ) as in Lemma S2.5, and Hm,2(c, ρ) as in Lemma S2.7. By
definition and from Lemmas S2.5 and S2.7, for any c >
q 2(m−1)
m(m−2) ,
Hem(γ; c, ρ) = Hem,1(γ; c, ρ) + Hem,2(γ; c, ρ) + Hem,3(c, ρ) − 1
≤ Hm,1(c, ρ) + Hm,2(c, ρ) + Hem,3(c, ρ) − 1. (S102)
In addition, by definition,
Hm,1(c, ρ) + Hm,2(c, ρ) + Hem,3(c, ρ) − 1
= max 3(m + ρ−2)
(κ + 1)ρ−2 + m , 2κ + 3
κ+1 + 1−τ
1 − τ + min{(1 − 2τ)κZ − 1
2, 0} − θ − m
τθ − 1 − 1
= max 3(mρ2 + 1)
mρ2 + κ + 1, 2κ + 3
κ+1 + 1−τ
1 − τ + min{(1 − 2τ)κZ − 1
2, 0} − ρ−2
τm + τρ−2 − 1 − 1
= max 3(mρ2 + 1)
mρ2 + κ + 1, 2κ + 3
κ+1 + 1−τ
1 − τ + min{(1 − 2τ)κZ − 1
2, 0} − mκ
mρ2 + κ + 1 − 1
= Hm(c, ρ), (S103)
where κ, τ, θ is defined as in (S79), Z is defined as in (S89), the first and last equalities
follow by definition, and the second and third equalities follow by some algebra.
First, from Lemmas S2.8–S2.10, Hm(c, ρ) = Hm,1(c, ρ) + Hm,2(c, ρ) + Hem,3(c, ρ) − 1
is decreasing in c. Moreover, as c −→ ∞, we have κ = mc2/(m − 1) −→ ∞, τ =
(κ + 1)/(mκ) −→ 1/m,
κZ = κ
2 · max{mρ2 + 1, κ + 2} −→ 1
2,
97

and consequently
Hm(c, ρ)
= max 3(mρ2 + 1)
mρ2 + κ + 1, 2κ + 3
κ+1 + 1−τ
1 − τ + min{(1 − 2τ)κZ − 1
2, 0} − mκ
mρ2 + κ + 1 − 1
−→ max {0, 2} + 1 − m−1
1 − m−1 + min{(1 − 2m−1) 1
2−1
2, 0} − m − 1
= 1 − m + 1 − m−1
1 − m−1 − m−1 = 1 − m + m − 1
m − 2 = (1 − m)(m − 3)
m − 2 < 0, (S104)
where the last inequality holds because m ≥ 4.
Second, by definition and from (S104), we know that cm,ρ = inf{c >
q 3(m−1)
m(m−3) :
Hm(c, ρ) ≤ 0} must be finite. Because Hm(c, ρ) is decreasing in c, we must have
Hm(c, ρ) < 0 for any c > cm,ρ. From (S102) and (S103), we then have, for any given
m ≥ 4, ρ > 0, c > cm,ρ ≥
q 3(m−1)
m(m−3) >
q 2(m−1)
m(m−2) ,
Hem(γ; c, ρ) ≤ Hm(c, ρ) < 0 for all γ > ρ−1.
From Theorem S1, this implies that, for any given m ≥ 4, ρ > 0, c > cm,ρ, the maximum
rejection probability pm(c; 1, ρ) under Assumption 3.2 with k = 1 and the given ρ, m, and
c has the following equivalent form:
pm(c; 1, ρ) = P
"
|tm−1|
r
ρ2 + 1
m >c
#
.
Third, we consider the case when c = cm,ρ. From Lemma A.2, there exist {σ1, . . . , σm+1} ∈
Sm(1, ρ) such that P0[|Tm| > cm,ρ] = pm(cm,ρ; 1, ρ). By the right continuity of distribution
functions, we can know
pm(cm,ρ; 1, ρ) = P0[|Tm| > cm,ρ]
= lim
ε→0+ P0[|Tm| > cm,ρ + ε]
≤ lim
ε→0+ P
"
|tm−1|
r
ρ2 + 1
m > cm,ρ + ε
#
=P
"
|tm−1|
r
ρ2 + 1
m > cm,ρ
#
, (S105)
98

where the last inequality follows from the second part. Moreover, the rejection proba
bility can reach the upper bound on the right-hand side of (S105) when σm+1 = ρ and
σ1 = . . . = σm = 1. Thus, (S105) must hold with equality.
From the above, Theorem 4.4 holds.
S2.7 Proof of Theorem 4.5
Proof of Theorem 4.5. Because c > 0, we obviously have P[|Tm| > c] ≥ P[Tm > c] =
1 − P[Tm ≤ c]. Note that
Tm ≤ c ⇐⇒ (ψm+1 − δ) + δ − ψ ≤ cSm
⇐⇒ cSm + ψ − (ψm+1 − δ) ≥ δ
=⇒ {cSm + ψ − (ψm+1 − δ)}2 ≥ δ2,
where the last step holds because δ > 0. By the Markov inequality, we then have
P[Tm ≤ c] ≤ P[{cSm + ψ − (ψm+1 − δ)}2 ≥ δ2] ≤ δ−2E[{cSm + ψ − (ψm+1 − δ)}2].
Under Assumption 4.1, we have
E[{cSm + ψ − (ψm+1 − δ)}2] = E[(cSm + ψ)2] + E[(ψm+1 − δ)2]
≤ 2E[c2S2m] + 2E[ψ2] + E[(ψm+1 − δ)2],
where the first equality holds because ψm+1 − δ ∼ N (0, σ2m+1) and is independent of
{ψj}jm=1, and the second equality follows from the Cauchy–Schwarz inequality. By some
algebra, E[(ψm+1 − δ)2] = Var(ψm+1) = σ2m+1, E[ψ2] = Var(ψ) = 1
m2 ∑jm=1 σj2,
E[S2m] = 1
m−1
m
∑
j=1
E[ψj2] − m
m − 1E[ψ2] = 1
m−1
m
∑
j=1
σj2 − m
m−1
1 m2
m
∑
j=1
σj2 = 1
m
m
∑
j=1
σj2.
These then imply that
E[{cSm + ψ − (ψm+1 − δ)}2] ≤ 2E[c2S2m] + 2E[ψ2] + E[(ψm+1 − δ)2]
= 2c2 1
m
m
∑
j=1
σj2 + 2
m2
m
∑
j=1
σj2 + σ2m+1
= σ2m+1 + 2(c2 + m−1)
m
m
∑
j=1
σj2.
99

From the above, we have
P[Tm ≤ c] ≤ δ−2E[{cSm + ψ − (ψm+1 − δ)}2] ≤ 1
δ2
"
σ2m+1 + 2(c2 + m−1)
m
m
∑
j=1
σj2
#
,
and consequently
P[|Tm| > c] ≥ P[Tm > c] = 1 − P[Tm ≤ c] ≥ 1 − 1
δ2
"
σ2m+1 + 2(c2 + m−1)
m
m
∑
j=1
σj2
#
.
Therefore, Theorem 4.5 holds.
Comment on the number of one-dimensional optimizations needed. We first count the num
ber of one-dimensional optimizations needed at a given k. From Theorem 4.3, we
need to consider the one-dimensional optimization in (16) for 0 ≤ m0 ≤ k − 1 and
0 ≤ m1 ≤ m − m0 − 1; note that when m1 = m − m0 no optimization is needed. Thus,
the number of one-dimensional optimization needed is
k−1
m0∑=0
(m − m0) =
m
∑
j=m−k+1
j= 1
2k(2m + 1 − k).
We then count the total number of one-dimensional optimizations needed to compute
pm(c; k, ρ) for all 1 ≤ k ≤ m. For each combination of (m1, m0, mc) satisfying m1 ≥ 0,
m0 ≥ 0, mc ≥ 1, and m1 + m0 + mc = m, we solve the one-dimensional optimization
in (16) at most twice. Intuitively, m1, m0, and mc correspond to the numbers of γjm
j=1
that are equal to ρ−1, 0, and a common value γ, respectively. The optimization is solved
at most twice because γ may vary from 0 or ρ−1 to infinity. By some algebra, the total
number of one-dimensional optimizations needed is at most
2· m+1
2 = m(m + 1).
S2.8 Proof of Theorem 5.1
Proof of Theorem 5.1. By the definition of pm(c; k, ρ) in (11), we know that it is non
decreasing in ρ. Thus, the set Im,α,k in (19) must be an one-sided interval. To prove
Theorem 5.1, it suffices to prove the simultaneous validity of the confidence intervals
100

Im,α,ks as stated in (ii). Let G0(c) = P0[|Tm| > c] denote the true tail probability of |Tm|
at the true values of {σj}m+1
j=1 .
Suppose that ρ⋆
k ∈/ Im,α,k for some k ∈ {1, 2, . . . , m}. By definition, we then have
pm(|Tm|; k, ρ⋆
k ) ≤ α and ρ⋆
k < ∞. By the definition of ρ⋆
k in (18), we must have σm+1 ≤
ρ⋆
k σ(k) for the true standard deviation of the treated cluster and that of the control cluster
at rank k. By the definition in (11), this then implies that pm(c; k, ρ⋆
k ) ≥ G0(c) for any
c ≥ 0. Consequently, we must have α ≥ pm(|Tm|; k, ρ⋆
k ) ≥ G0(|Tm|).
From the discussion before, we then have
P [ρ⋆
k ∈/ Im,α,k for some 1 ≤ k ≤ m] ≤ P [G0(|Tm|) ≤ α] ≤ α,
where the last inequality holds because G0(·) is the tail probability function of |Tm| (see,
e.g., Lemma A4 in Wu and Li (2025) for a proof). This then implies that
P [ρ⋆
k ∈ Im,α,k for all 1 ≤ k ≤ m] = 1 − P [ρ⋆
k ∈/ Im,α,k for some 1 ≤ k ≤ m] ≥ 1 − α,
Therefore, we derive Theorem 5.1.
S2.9 Proof of Theorem A.1
Proof of Theorem A.1. From Condition A.1, as m −→ ∞,
Var(ψ) = 1
m2
m
∑
j=1
σj2 = 1
m· 1
m
m
∑
j=1
σj2 −→ 0,
and
Var 1
m
m
∑
j=1
ψj2
!
=1
m2
m
∑
j=1
Var(ψj2) = 1
m2
m
∑
j=1
(2σ4) = 2
m2
m
∑
j=1
σ4 −→ 0,
where the second last equality uses the fact that the variance of a chi-squared random
variable with degree of freedom 1 is 2. By Chebyshev’s inequality, these then imply that
ψ = oP(1), 1
m
m
∑
j=1
ψj2 = E
"
1 m
m
∑
j=1
ψj2
#
+ oP(1) = 1
m
m
∑
j=1
σj2 + oP(1).
101

and consequently
S2m = m
m−1
1 m
m
∑
j=1
ψj2 − m
m − 1 ψ2 = 1
m
m
∑
j=1
σj2 + oP(1).
These further imply that
Tm = ψm+1 − oP(1)
q
m−1 ∑jm=1 σj2 + oP(1)
= ψm+1
q
m−1 ∑jm=1 σj2
+ oP(1),
where the last equality holds under Condition A.1. Let ε ≡ ψm+1−δ
σm+1 ∼ N (0, 1). Note that
ψm+1
q
m−1 ∑jm=1 σj2
= σm+1ε + δ
q
m−1 ∑jm=1 σj2
= σm+1ε
q
m−1 ∑jm=1 σj2
+δ
q
m−1 ∑jm=1 σj2
.
Using Wang and Li (Lemma A27 2022), we can then derive that, as m −→ ∞,
sup
c∈R
P[Tm ≤ c] − P
"
σm+1ε + δ
q
m−1 ∑jm=1 σj2
≤c
#
−→ 0.
Therefore, Theorem A.1 holds.
S3 Supplemental results for Section 6
S3.1 Supplemental results for Section 6.1
This section reports additional results from simulations on the first simulation design
with k = 1 and k = 2 at various significance levels.
S3.1.1 Results for k = 1
This subsection reports the simulation results for k = 1 that are not contained in the main
paper. Figures S1 and S2 report the results at the 1% and 10% levels respectively for DGP
1. Figures S3 and S4 report the results at the 1% and 10% levels respectively for DGP 2.
102

m = 5 m = 10 m = 25 m = 50
δ = 0 (size) δ = 1 (power) δ = 2 (power) δ = 3 (power)
0.5 1 1.5 2 0.5 1 1.5 2 0.5 1 1.5 2 0.5 1 1.5 2
0.0000
0.0025
0.0050
0.0075
0.0100
0.00
0.25
0.50
0.75
1.00
0.00
0.25
0.50
0.75
1.00
0.00
0.25
0.50
0.75
1.00
ρ
Rejection rate
Method Hagemann t−test
Figure S1: Probability of rejection against heterogeneity parameter ρ for various cluster size m and alternatives δ at α = 0.01 for DGP 1 of simulation design 1 with k = 1.
103

m = 5 m = 10 m = 25 m = 50
δ = 0 (size) δ = 1 (power) δ = 2 (power) δ = 3 (power)
0.5 1 1.5 2 0.5 1 1.5 2 0.5 1 1.5 2 0.5 1 1.5 2
0.000
0.025
0.050
0.075
0.100
0.00
0.25
0.50
0.75
1.00
0.25
0.50
0.75
1.00
0.25
0.50
0.75
1.00
ρ
Rejection rate
Method Hagemann t−test
Figure S2: Probability of rejection against heterogeneity parameter ρ for various cluster size m and alternatives δ at α = 0.1 for DGP 1 of simulation design 1 with k = 1.
104

m = 5 m = 10 m = 25 m = 50
δ = 0 (size) δ = 1 (power) δ = 2 (power) δ = 3 (power)
0.5 1 1.5 2 0.5 1 1.5 2 0.5 1 1.5 2 0.5 1 1.5 2
0.0000
0.0025
0.0050
0.0075
0.0100
0.00
0.25
0.50
0.75
0.00
0.25
0.50
0.75
1.00
0.00
0.25
0.50
0.75
1.00
ρ
Rejection rate
Method Hagemann t−test
Figure S3: Probability of rejection against heterogeneity parameter ρ for various cluster size m and alternatives θ at α = 0.01 for DGP 2 of simulation design 1 with k = 1.
105

m = 5 m = 10 m = 25 m = 50
δ = 0 (size) δ = 1 (power) δ = 2 (power) δ = 3 (power)
0.5 1 1.5 2 0.5 1 1.5 2 0.5 1 1.5 2 0.5 1 1.5 2
0.000
0.025
0.050
0.075
0.100
0.00
0.25
0.50
0.75
1.00
0.00
0.25
0.50
0.75
1.00
0.25
0.50
0.75
1.00
ρ
Rejection rate
Method Hagemann t−test
Figure S4: Probability of rejection against heterogeneity parameter ρ for various cluster size m and alternatives θ at α = 0.1 for DGP 2 of simulation design 1 with k = 1.
106

S3.1.2 Results for k = 2
This subsection reports the results for k = 2. Figures S5 to S7 report the results at the 1%,
5% and 10% levels respectively for DGP 1. Figures S8 to S10 report the results at the 1%,
5% and 10% levels respectively for DGP 2. The figures show that the t-test continue to
perform favorably in other significance levels.
S3.2 Supplemental results for Section 6.2
Figures S11 to S13 report the results for DGPs 3 to 5 for various m and ρ at α = 0.05.
S4 Supplemental tables: critical values for k = 2
Table S1 reports the critical values for different numbers of clusters m and heterogeneity
parameters ρ for α = 0.01 and α = 0.05 when k = 2.
107

m = 5 m = 10 m = 25 m = 50
δ = 0 (size) δ = 1 (power) δ = 2 (power) δ = 3 (power)
0.5 1 1.5 2 0.5 1 1.5 2 0.5 1 1.5 2 0.5 1 1.5 2
0.0000
0.0025
0.0050
0.0075
0.0100
0.00
0.25
0.50
0.75
1.00
0.00
0.25
0.50
0.75
1.00
0.00
0.25
0.50
0.75
1.00
ρ
Rejection rate
Method Hagemann t−test
Figure S5: Probability of rejection against heterogeneity parameter ρ for various cluster size m and alternatives δ at α = 0.01 for DGP 1 of simulation design 1 with k = 2.
108

m = 5 m = 10 m = 25 m = 50
δ = 0 (size) δ = 1 (power) δ = 2 (power) δ = 3 (power)
0.5 1 1.5 2 0.5 1 1.5 2 0.5 1 1.5 2 0.5 1 1.5 2
0.00
0.01
0.02
0.03
0.04
0.05
0.00
0.25
0.50
0.75
1.00
0.00
0.25
0.50
0.75
1.00
0.25
0.50
0.75
1.00
ρ
Rejection rate
Method Hagemann t−test
Figure S6: Probability of rejection against heterogeneity parameter ρ for various cluster size m and alternatives δ at α = 0.05 for DGP 1 of simulation design 1 with k = 2.
109

m = 5 m = 10 m = 25 m = 50
δ = 0 (size) δ = 1 (power) δ = 2 (power) δ = 3 (power)
0.5 1 1.5 2 0.5 1 1.5 2 0.5 1 1.5 2 0.5 1 1.5 2
0.000
0.025
0.050
0.075
0.100
0.00
0.25
0.50
0.75
1.00
0.25
0.50
0.75
1.00
0.25
0.50
0.75
1.00
ρ
Rejection rate
Method Hagemann t−test
Figure S7: Probability of rejection against heterogeneity parameter ρ for various cluster size m and alternatives δ at α = 0.1 for DGP 1 of simulation design 1 with k = 2.
110

m = 5 m = 10 m = 25 m = 50
δ = 0 (size) δ = 1 (power) δ = 2 (power) δ = 3 (power)
0.5 1 1.5 2 0.5 1 1.5 2 0.5 1 1.5 2 0.5 1 1.5 2
0.0000
0.0025
0.0050
0.0075
0.0100
0.00
0.25
0.50
0.75
0.00
0.25
0.50
0.75
1.00
0.00
0.25
0.50
0.75
1.00
ρ
Rejection rate
Method Hagemann t−test
Figure S8: Probability of rejection against heterogeneity parameter ρ for various cluster size m and alternatives δ at α = 0.01 for DGP 2 of simulation design 1 with k = 2.
111

m = 5 m = 10 m = 25 m = 50
δ = 0 (size) δ = 1 (power) δ = 2 (power) δ = 3 (power)
0.5 1 1.5 2 0.5 1 1.5 2 0.5 1 1.5 2 0.5 1 1.5 2
0.00
0.01
0.02
0.03
0.04
0.05
0.00
0.25
0.50
0.75
1.00
0.00
0.25
0.50
0.75
1.00
0.00
0.25
0.50
0.75
1.00
ρ
Rejection rate
Method Hagemann t−test
Figure S9: Probability of rejection against heterogeneity parameter ρ for various cluster size m and alternatives δ at α = 0.05 for DGP 2 of simulation design 1 with k = 2.
112

m = 5 m = 10 m = 25 m = 50
δ = 0 (size) δ = 1 (power) δ = 2 (power) δ = 3 (power)
0.5 1 1.5 2 0.5 1 1.5 2 0.5 1 1.5 2 0.5 1 1.5 2
0.000
0.025
0.050
0.075
0.100
0.00
0.25
0.50
0.75
1.00
0.00
0.25
0.50
0.75
1.00
0.25
0.50
0.75
1.00
ρ
Rejection rate
Method Hagemann t−test
Figure S10: Probability of rejection against heterogeneity parameter ρ for various cluster size m and alternatives δ at α = 0.1 for DGP 2 of simulation design 1 with k = 2.
113

m = 5 m = 10 m = 25 m = 50
σ = 0.1 σ = 0.5 σ = 1 σ = 2
0 0.5 1 1.5 2 0 0.5 1 1.5 2 0 0.5 1 1.5 2 0 0.5 1 1.5 2
0.00
0.25
0.50
0.75
1.00
0.00
0.25
0.50
0.75
1.00
0.00
0.25
0.50
0.75
1.00
0.00
0.25
0.50
0.75
1.00
δ
Rejection rate
Methods t H FP CT
Figure S11: Simulation results for DGP 3 of simulation design 2 at α = 0.05.
114

m = 5 m = 10 m = 25 m = 50
σ = 0.1 σ = 0.5 σ = 1 σ = 2
0 0.5 1 1.5 2 0 0.5 1 1.5 2 0 0.5 1 1.5 2 0 0.5 1 1.5 2
0.00
0.25
0.50
0.75
1.00
0.00
0.25
0.50
0.75
1.00
0.00
0.25
0.50
0.75
1.00
0.00
0.25
0.50
0.75
1.00
δ
Rejection rate
Methods t H FP CT
Figure S12: Simulation results for DGP 4 of simulation design 2 at α = 0.05.
115

m = 5 m = 10 m = 25 m = 50
σ = 0.1 σ = 0.5 σ = 1 σ = 2
0 0.5 1 1.5 2 0 0.5 1 1.5 2 0 0.5 1 1.5 2 0 0.5 1 1.5 2
0.00
0.25
0.50
0.75
1.00
0.00
0.25
0.50
0.75
1.00
0.00
0.25
0.50
0.75
1.00
0.00
0.25
0.50
0.75
1.00
δ
Rejection rate
Methods t H FP CT
Figure S13: Simulation results for DGP 5 of simulation design 2 at α = 0.05.
116

Table S1: Critical values for different values of α, m and ρ for k = 2.
α = 0.01 α = 0.05
ρ\m 5 10 15 20 25 50 5 10 15 20 25 50
0.2 2.260 1.224 0.984 0.869 0.800 0.661 1.365 0.860 0.711 0.636 0.590 0.496 0.4 2.820 1.722 1.460 1.341 1.274 1.148 1.729 1.200 1.051 0.981 0.940 0.861 0.6 3.652 2.328 2.017 1.882 1.807 1.669 2.264 1.616 1.450 1.375 1.332 1.251 0.8 4.668 2.977 2.604 2.445 2.358 2.200 2.849 2.061 1.870 1.786 1.738 1.649 1.0 5.724 3.644 3.204 3.019 2.918 2.736 3.459 2.521 2.301 2.205 2.151 2.051
1.2 6.794 4.323 3.811 3.598 3.482 3.273 4.082 2.988 2.737 2.627 2.566 2.454 1.4 7.874 5.007 4.423 4.180 4.049 3.812 4.713 3.460 3.176 3.052 2.984 2.858 1.6 8.960 5.696 5.037 4.765 4.617 4.351 5.350 3.935 3.616 3.479 3.403 3.262 1.8 10.049 6.387 5.653 5.350 5.186 4.892 5.990 4.411 4.058 3.906 3.822 3.667 2.0 11.142 7.080 6.270 5.936 5.756 5.432 6.633 4.889 4.501 4.334 4.242 4.072
2.2 12.236 7.775 6.888 6.524 6.326 5.973 7.278 5.368 4.945 4.763 4.662 4.477 2.4 13.332 8.470 7.507 7.111 6.897 6.513 7.924 5.848 5.389 5.192 5.083 4.883 2.6 14.429 9.166 8.126 7.699 7.468 7.054 8.572 6.329 5.834 5.621 5.504 5.288 2.8 15.527 9.864 8.746 8.288 8.039 7.596 9.220 6.810 6.279 6.051 5.925 5.694 3.0 16.626 10.561 9.366 8.876 8.611 8.137 9.869 7.291 6.724 6.481 6.346 6.100
3.2 17.726 11.259 9.987 9.465 9.183 8.678 10.519 7.773 7.169 6.911 6.767 6.505 3.4 18.826 11.957 10.607 10.054 9.754 9.220 11.169 8.254 7.614 7.340 7.189 6.911 3.6 19.926 12.656 11.228 10.643 10.326 9.761 11.819 8.736 8.060 7.771 7.610 7.317 3.8 21.027 13.355 11.849 11.232 10.898 10.302 12.470 9.219 8.506 8.201 8.032 7.723 4.0 22.128 14.054 12.470 11.821 11.471 10.844 13.121 9.701 8.952 8.631 8.454 8.129
4.2 23.229 14.753 13.092 12.411 12.043 11.386 13.772 10.184 9.398 9.061 8.875 8.535 4.4 24.331 15.452 13.713 13.000 12.615 11.927 14.424 10.666 9.844 9.492 9.297 8.941 4.6 25.432 16.152 14.334 13.590 13.187 12.469 15.075 11.149 10.290 9.922 9.719 9.347 4.8 26.534 16.851 14.956 14.180 13.760 13.010 15.727 11.632 10.736 10.353 10.141 9.753 5.0 27.636 17.551 15.578 14.769 14.332 13.552 16.379 12.115 11.182 10.783 10.562 10.159
117

---

## Processing Information

- **Processing Library:** Zotero PDFWorker
- **Processing Date:** 2026-02-10T18:15:06.026Z
- **Text Length:** 175624 characters
- **Success:** Text extraction completed
- **PDF Library Used:** Zotero PDFWorker
- **Pages Processed:** 117 of 117
