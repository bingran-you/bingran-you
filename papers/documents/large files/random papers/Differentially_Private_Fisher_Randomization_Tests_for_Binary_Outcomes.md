# PDF Document: Sun and Reiter - 2025 - Differentially Private Fisher Randomization Tests for Binary Outcomes.pdf

**File Path:** Sun and Reiter - 2025 - Differentially Private Fisher Randomization Tests for Binary Outcomes.pdf

**Processed Date:** 2026-02-10T18:14:07.774Z

**File Size:** 2842.85 KB

**Total Pages:** 39

**Extracted Pages:** 39

**PDF Library:** Zotero PDFWorker

**Attachment Item ID:** 3420

**Title:** Differentially Private Fisher Randomization Tests for Binary Outcomes

**Collection:** Large Files > Random Papers

---

## Extracted Text Content

Differentially Private Fisher Randomization
Tests for Binary Outcomes
Qingyang Sun∗ Jerome P. Reiter†
Department of Statistical Science, Duke University
November 27, 2025
Abstract
Across many disciplines, causal inference often relies on randomized experiments with binary outcomes. In such experiments, the Fisher randomization test provides exact, assumption-free tests for causal effects. Sometimes the outcomes are sensitive and must be kept confidential, for example, when they comprise physical or mental health measurements. Releasing test statistics or p-values computed with the confidential outcomes can leak information about the individuals in the study. Those responsib-
le for sharing the analysis results may wish to bound this information leakage, which they can do by ensuring the released outputs satisfy differential privacy. In this article, we develop and compare several differentially private versions of the Fisher randomization test for binary outcomes. Specifically, we consider direct perturbation approaches that inject calibrated noise into test statistics or p-values, as well as a mechanism-aware, Bayesian denoising framework that explicitly models the p-
rivacy mechanism. We further develop decision-making procedures under privacy constraints, including a Bayes risk-optimal rule and a frequentist-calibrated significance test. Through theoretical results, simulation studies, and an application to the ADAPTABLE clinical trial, we demonstrate that our methods can achieve valid and interpretable causal inference while ensuring the differential privacy guarantee.
Keywords: Confidentiality; Decision; Experiment; Hypothesis; Privacy.
∗qingyang.sun@duke.edu, 214 Old Chemistry, Box 90251, Durham, NC 27708-0251, USA †jreiter@duke.edu, 214 Old Chemistry, Box 90251, Durham, NC 27708-0251, USA
1
arXiv:2511.20884v1 [stat.ME] 25 Nov 2025

1 Introduction
Randomization-based inference is a cornerstone of causal analysis, offering inferences that derive solely from the randomization of treatment assignments to study subjects. Among such methods, the Fisher randomization test (FRT) is perhaps the most widely used approach (Fisher 1935). In the FRT, one presumes Fisher’s sharp null hypothesis: each individual’s outcome is the same regardless of treatment assignment. Under this sharp null, one can use the observed outcomes to compute the value of the c-
hosen test statistic for any possible randomization, and thereby construct a reference distribution for the test statistic. The analyst compares the observed value of the test statistic to this reference distribution, resulting in a p-value under the null hypothesis. In this article, we consider FRTs for binary outcomes in completely randomized experiments. In many causal studies, the outcomes are inherently sensitive and therefore should be kept confidential. For example, the outcomes could encod-
e personal information like disease status, substance use, or criminal recidivism. The literature on data privacy indicates that releasing results of any statistical analysis leaks information about the underlying study subjects. Even releasing summary statistics can introduce disclosure risks (Dinur & Nissim 2003, Dwork et al. 2017, Abowd et al. 2022). Thus, those responsible for sharing the analysis results of an FRT with confidential outcomes may want to limit the amount of information leakage.-
 Differential privacy (DP) has emerged as a leading framework for bounding the information leakage when releasing results of analyses (Dwork 2006, Dwork et al. 2006). It establishes a bound on how much the inclusion or exclusion of any single record can change the distribution of a released statistic. Thus, adversaries seeking to use the released statistic to learn confidential information cannot tell whether or not any particular individual (or value) was part of the data used to make the publish-
ed output. In this sense, DP offers a mathematically rigorous guarantee of data confidentiality. Several researchers have developed DP methods for causal inference and hypothesis testing; however, to our knowledge, there do not exist any DP algorithms to do Fisher randomization tests. Within causal inference, D’Orazio et al. (2015) develop DP estimators for paired mean differences. Lee et al. (2019) propose a differentially private inverse probability weighting estimator that privatizes both the p-
ropensity score model and the final treatment effect estimate. Subsequent advances extend these ideas to conditional average treatment effect estimation (Niu et al. 2022) and Bayesian inference under local DP (Ohnishi & Awan 2025). Guha & Reiter (2025) introduced private algorithms for binary-outcome causal inference that support a range of weighted average treatment effect (WATE) estimators and provide standard errors and confidence intervals using a subsample-and-aggregate strategy. Finally, Muk-
herjee et al. (2024) present DP regression modeling strategies to analyze randomized controlled trials. Within hypothesis testing, researchers have developed DP methods for χ2 tests for goodness-of-fit (Gaboardi et al. 2016), rank-based nonparametric tests (Couch et al. 2019), and uniformly most powerful tests for discrete models (Awan & Slavkovi ́c 2018). More recent work extends these ideas to yield level-α private tests across a variety of settings (Kazan et al. 2023, Pen ̃a & Barrientos 2025),-
 but they are designed for parametric or asymptotic contexts rather than for randomization-based causal inference. We aim to close that gap by developing differentially private Fisher randomization tests for binary outcomes, which we abbreviate as DP-FRT. The central goal is to estimate and
2

release Fisher’s randomization p-value under a specified privacy budget while maintaining statistical validity and interpretability. We first explore direct perturbation mechanisms that add calibrated noise to the p-value or test statistics. We then propose a mechanismaware, Bayesian denoising approach that explicitly models the DP noise to recover a posterior distribution for the confidential p-value. Furthermore, we develop decision frameworks under both Bayesian and frequentist paradigms that -
translate privatized p-values into actionable conclusions. The Bayesian framework enables analysts to abstain from making a decision when the evidence is inconclusive and to refine or update their conclusions by spending additional privacy budget, thereby incorporating uncertainty and adaptivity into decision-making. The frequentist-calibrated framework focuses on maintaining valid inference through rigorous control of type I error, ensuring that privacy protection does not compromise the nominal -
significance level. Together, these frameworks enable reliable and interpretable causal conclusions with formal privacy guarantees. The remainder of this article is organized as follows. Section 2 reviews the notation and formulation of the FRT for binary outcomes and key concepts of DP. Section 3 presents differentially private methods for releasing the p-value from a FRT, introducing both the direct perturbation and Bayesian denoising methods. Section 4 discusses decision-making under DP-FRT, of-
fering Bayesian risk-optimal and frequentist-calibrated decision frameworks. Section 5 describes simulation studies and a genuine data analysis that assess the performance of the proposed methods and offer guidance for their implementation. Section 6 concludes with a discussion and potential extensions.
2 Background
In Section 2.1, we review the Fisher randomization test, particularly in the context of completely randomized experiments with binary outcomes. In Section 2.2, we review several key concepts and properties of differential privacy.
2.1 Randomization Test for Binary Outcomes
2.1.1 Potential Outcomes and Data Representation
We first introduce some notations under the potential outcome framework for causal inference (Rubin 1974). Suppose there are n units in the experiment. For each unit i ∈ {1, . . . , n} in the study, let Zi = 1 when unit i is assigned to the treatment and Zi = 0 when the unit is assigned the control, and let (Yi(1), Yi(0)) denote the pair of potential outcomes under treatment and control, respectively. Under the stable unit treatment value assumption (SUTVA), the observed outcome is
Y obs
i = ZiYi(1) + (1 − Zi)Yi(0) = Yi(0) + Zi{Yi(1) − Yi(0)}.
Thus, Y obs
i equals the potential outcome corresponding to the realized treatment: if Zi = 1 then Y obs
i = Yi(1), and if Zi = 0 then Y obs
i = Yi(0). The full collection {(Yi(1), Yi(0))}n
i=1 is often referred to as the “Science,” which represents the underlying object of interest in causal inference. The Science can be equivalently
3

represented as a table of unit-level potential outcomes:
Unit i (Yi(1), Yi(0)) 1 (Y1(1), Y1(0)) 2 (Y2(1), Y2(0))
... ...
n (Yn(1), Yn(0))
For binary outcomes, it is often more convenient to summarize the Science by the joint distribution of (Yi(1), Yi(0)), which leads to the so-called Science table. Let
Njk = #{i : Yi(1) = j, Yi(0) = k}, j, k ∈ {0, 1},
with row and column sums N1+, N0+, N+1, N+0 satisfying P
j,k Njk = n. The Science table
is then Yi(0) = 1 Yi(0) = 0 Row sum Yi(1) = 1 N11 N10 N1+ Yi(1) = 0 N01 N00 N0+ Col sum N+1 N+0 n
Crucially, the Science table is never directly observed, since only one of {Yi(1), Yi(0)} is realized for each unit i. What we do observe is the pair (Zi, Y obs
i ), which can be aggregated into the following 2 × 2 Outcome table
Y obs
i = 1 Y obs
i = 0 Row sum
Zi = 1 n11 n10 n1
Zi = 0 n01 n00 n0 Col sum n+1 n+0 n
Here, n11 and n10 are the numbers of treated units with Y obs
i = 1 and Y obs
i = 0, respectively, and n01 and n00 are the corresponding counts in the control group. Accordingly, n1 and n0 are the sizes of the treatment and control groups, and n+1 and n+0 are the marginal counts of each outcome.
2.1.2 Fisher Randomization Test
The fundamental problem of causal inference lies in the fact that only one potential outcome is observed for each unit. Within the potential outcomes framework, randomized experiments address this missing data problem by exploiting the known treatment assignment mechanism. Specifically, let Z = (Z1, . . . , Zn)T be the stochastic treatment assignment vector and Y obs = (Y obs
1 , . . . , Y obs
n )T the observed outcome vector. The assignment mechanism links the unobserved Science table to the observed Outcome table through the distribution of Z known by design. This connection enables exact, finite-sample valid, model-free inference. One of the canonical designs is the Completely Randomized Experiment (CRE).
Definition 2.1 (CRE). Fix n1 treated units and n0 controlled units with n = n1 + n0. Define the set of admissible assignments in CRE
Z=
(
z ∈ {0, 1}n :
n
X
i=1
zi = n1
)
, |Z| = n
n1
.
4

The assignment mechanism is uniform over all Z, i.e.,
Pr(Z = z) = 1
|Z| , for all z ∈ Z,
so that all randomness in the observed data arises solely from Z.
Under the design of CRE, Fisher (1935) proposed to test the sharp null hypothesis of no individual causal effects.
Definition 2.2 (Fisher’s Sharp Null Hypothesis).
HF
0 : Yi(1) = Yi(0) for all i = 1, . . . , n.
The hypothesis HF
0 is referred to as “sharp” because it enables the imputation of all missing potential outcomes via Yi(1) = Yi(0) = Y obs
i , thus the entire Science table becomes observable. Although Fisher’s sharp null has been criticized for being restrictive, subsequent research has extended the framework to test weak null hypotheses (Wu & Ding 2021). We will discuss possible extensions to weak nulls in Section 6. The Fisher randomization test under HF
0 is defined as follows.
Definition 2.3 (FRT). Under CRE and HF
0 , the FRT proceeds in the following steps:
1. Choose a test statistic. Select a statistic T (Z; Y obs) that reflects deviations from HF
0 , such as a difference in means, t-statistic, or a rank-based measure.
2. Compute the observed value. Let zobs denote the realized assignment. The observed statistic is
T obs = T (zobs; Y obs).
3. Generate the randomization distribution. Under the known assignment mechanism of CRE, evaluate T (z; Y obs) for each z ∈ Z to obtain the randomization distribution under HF
0 for reference.
4. Compute the p-value. The (one-sided) Fisher’s randomization p-value is
pFRT = Pr T (z; Y obs) ≥ T obs = 1
|Z |
X
z∈Z
1{T (z; Y obs) ≥ T obs}.
When |Z| = n
n1 is too large to enumerate, one common strategy is to approximate
pFRT by Monte Carlo: randomly draw z(1), . . . , z(R) i.i.d.
∼ Unif(Z) for some large R and compute
p ̃FRT = 1 + PR
r=1 1 T z(r); Y obs ≥ T obs
1+R ,
where the add-one correction ensures a strictly positive p-value.
For binary outcomes, the implications of FRT are particularly straightforward. Recall from the Outcome table in Section 2.1.1 that n1, n0 denote the treatment and control group sizes, and n+1, n+0 the totals for outcomes Y obs
i = 1 and Y obs
i = 0. Under the sharp null
5

hypothesis HF
0 , the number of treated successes n11 follows a hypergeometric distribution with probability mass function
n11 ∼ Hypergeometric(n, n+1, n1), Pr(n11 = a) =
n+1 a
n+0 n1−a n n1
,
where a = max{0, n1 − n+0}, . . . , min{n1, n+1}. Moreover, as noted by Ding & Dasgupta (2016), commonly used test statistics are monotonic in n11 and thus yield identical rejection regions. A natural choice is the difference-inproportions statistic, τb = n11/n1 −n01/n0. In this case, the FRT coincides numerically with Fisher’s exact test for 2 × 2 tables, though its validity relies on the known randomization mechanism rather than any distributional assumptions.
2.2 Differential Privacy
Agencies and researchers often need to release summaries of sensitive data while limiting disclosure risks. Traditional statistical disclosure control techniques can be effective in practice but typically lack formal, data-agnostic guarantees. Differential privacy (DP) addresses this limitation by ensuring that the inclusion or exclusion of a single individual’s data has a limited impact on the output distribution, regardless of any auxiliary information an adversary may possess (Dwork 2006). Form-
ally, we view a data-release procedure as a randomized algorithm M that takes a dataset D as input and produces a randomized output. The privacy guarantee is defined with respect to neighboring datasets, i.e., datasets that differ in the data of a single individual, such as by adding, removing, or modifying one record. Intuitively, DP requires that the output distributions produced by M on any pair of neighboring datasets be nearly indistinguishable. Consequently, it becomes difficult for an adver-
sary to determine whether a specific individual is present in the dataset or to infer sensitive attributes with high confidence.
Definition 2.4 (ε-Differential Privacy (Dwork 2006)). A randomized algorithm M satisfies ε-differential privacy (ε-DP) if, for any pair of neighboring datasets D and D′ and for all measurable subsets S ⊆ R(M),
Pr{M(D) ∈ S} ≤ eε Pr{M(D′) ∈ S},
where the probabilities are taken over the randomness in M, and R(M) denotes its range of possible outputs.
The privacy parameter ε > 0, referred to as the privacy budget, quantifies the worstcase multiplicative difference between the output distributions over neighboring datasets, where smaller values of ε indicate stronger privacy protection. Extensions such as (ε, δ)-DP allow a small failure probability δ in exchange for improved utility; please refer to Dwork & Roth (2014) for more details. To ensure DP, a typical approach is to add random noise calibrated to the sensitivity of the released quantity-
. A common ε-DP mechanism used in continuous domains is the Laplace mechanism (Dwork 2006). Let f : D → Rd be a function defined on datasets. The l1-sensitivity of f is defined as ∆f = maxD,D′ ∥f (D) − f (D′)∥1, where the maximum is taken over all pairs of neighboring datasets D and D′.
6

Definition 2.5 (Laplace Mechanism (Dwork 2006)). Suppose f (D) ∈ R is a real-valued function with l1-sensitivity ∆f . The Laplace mechanism releases
f ̃(D) = f (D) + η, where η ∼ Lap 0, ∆f
ε,
with probability density function
pη(h) = ε
2∆f exp −ε|h|
∆f , h ∈ R.
If f (D) ∈ Rd, independent Laplace noise is added to each coordinate.
In contexts involving count queries or discrete outputs, the (two-sided) Geometric mechanism (Ghosh et al. 2012) is particularly suited as it adds integer-valued noise, which can be viewed as the discrete analogue of the Laplace mechanism.
Definition 2.6 (Geometric Mechanism (Ghosh et al. 2012)). Suppose f (D) ∈ Z is an integer-valued function with l1-sensitivity ∆f , and let ρ = exp{−ε/∆f }. The geometric mechanism releases
f ̃(D) = f (D) + η, where η ∼ Geom(ρ),
with probability mass function
Pr(η = h) = 1 − ρ
1 + ρ · ρ|h|, h ∈ Z.
If f (D) ∈ Zd, independent geometric noise is added to each coordinate.
Two fundamental properties of DP are particularly useful when designing private algorithms. Proposition 2.7 ensures that the privacy guarantee is preserved under any transformation of the output, as long as the transformation is independent of the underlying dataset. Proposition 2.8 summarizes how privacy guarantees behave under both sequential and parallel compositions of multiple DP mechanisms.
Proposition 2.7 (Post-Processing Invariance (Dwork et al. 2006)). Let M be an ε-DP mechanism, and let g be any (possibly randomized) function that does not depend on the dataset. Then the composed mechanism g ◦ M also satisfies ε-DP.
Proposition 2.8 (Composition Properties (McSherry 2009)). Let M1, M2, . . . , Mk be mechanisms applied to datasets. (a) Sequential Composition: If each Mi is applied to the same dataset D and satisfies
εi-DP, then their sequential composition satisfies Pk
i=1 εi -DP. (b) Parallel Composition: If each Mi is applied to a disjoint subset of the dataset D and satisfies εi-DP, then the overall mechanism satisfies (maxi εi)-DP.
We wrap up this subsection by highlighting the fundamental privacy-utility tradeoff inherent in DP data analysis. Intuitively, a smaller value of ε provides stronger privacy guarantees but necessitates adding larger noise, which would reduce the accuracy or utility of the released data. Given a fixed privacy budget, the key challenge lies in designing mechanisms that maximize the utility of the output for the intended analytical task. In other words, the goal is to enable valid population-level st-
atistical inference from privatized noisy data, closely approximating the results that would be obtained without privacy constraints.
7

3 Methods for Differentially Private Estimation of the
Fisher’s randomization p-value
This section presents ε-DP approaches for privatizing the p-value of FRT. Section 3.1 introduces direct perturbation methods for the p-values and the test statistics. Section 3.2 develops a mechanism-aware Bayesian denoising framework with uncertainty quantification for the privatized p-values.
3.1 Direct Perturbation Approaches
3.1.1 Perturbation of p-value
The most straightforward approach is to directly perturb the exact p-value by adding calibrated Laplace noise. Recall that under CRE, the treatment group sizes (n1, n0) are fixed with n = n1 + n0, and the assignment space is Z = {z ∈ {0, 1}n : P
i zi = n1} with
realized assignment zobs. We use substitution adjacency, where neighbors D ∼ D′ differ only at one coordinate Y obs
j ∈ {0, 1}, while (n1, n0) and zobs are fixed by the design of CRE. For simplicity, we let pFRT denote the Fisher’s randomization p-value for the difference-inproportions statistic τb, and we abbreviate its l1-sensitivity as ∆p.
Lemma 3.1 (Sensitivity of the Fisher’s randomization p-value). Under CRE with binary
outcomes and the test statistic τb, the l1-sensitivity of pFRT is ∆p = max
n n1
n , n0
n
o
.
Proof. Define A(z) = Pn
i=1 ziY obs
i and a = A(zobs). Since n01(z) = n+1 − A(z), we have τb(z; Y obs) = [(1/n1) + (1/n0)]A(z) − n+1/n0, hence τb is strictly increasing in A(z). Therefore pFRT = |Z|−1 P
z∈Z 1{A(z) ≥ a}.
Let D and D′ differ only at unit j, and set s = Y ′
j − Yj ∈ {−1, +1}. Then for D′, A′(z) = A(z) + szj and a′ = a + szobs
j . If zj = zobs
j the indicator is unchanged; if zj ̸= zobs
j
it can change by at most one in absolute value. Averaging over Z gives
|pFRT(D) − pFRT(D′)| ≤ Pr
Z ∼Unif (Z )
(Zj ̸= zobs
j )=
(
n1/n, zobs
j = 0,
n0/n, zobs
j = 1.
Maximizing over j yields ∆p ≤ max{n1/n, n0/n}. Tightness holds in two extremal constructions. If all Y obs
i = 0 and zobs
j = 1, then pFRT(D) = 1, while after flipping Y obs
j to 1, we obtain pFRT(D′) = Pr(Zj = 1) = n1/n. So the gap is n0/n. Symmetrically, if all Y obs
i =1 and zobs
j = 0, the gap is n1/n. In particular, under the balanced design n1 = n0 = n/2, the sensitivity is ∆p = 1/2.
Based on Lemma 3.1, we release privatized p-values by adding Laplace noise calibrated to the sensitivity and clipping to the feasible range.
Theorem 3.2 (Laplace mechanism for the Fisher’s randomization p-value). Fix a privacy budget ε > 0 and let ∆p be as in Lemma 3.1. Define [L, U ] = [|Z|−1, 1] and release
p ̃ = Π[L,U] (pFRT + η) , η ∼ Lap 0, ∆p
ε,
where Π[L,U](x) = min{U, max{L, x}} is the clipping operator. Then p ̃ satisfies ε-DP.
8

The privacy guarantee follows from the standard Laplace mechanism, and the postprocessing invariance of DP ensures that clipping does not degrade privacy.
3.1.2 Perturbation of Test Statistic and its Reference
Apart from directly perturbing the p-value, one may privatize the test statistic and pair it with a privatized randomization distribution for reference. We start by calculating the l1-sensitivity of the difference-in-proportions statistic τb = n11/n1 − n01/n0.
Lemma 3.3 (Sensitivity of τb). Under CRE with binary outcomes, the l1-sensitivity of the
statistic τb is ∆τb = max 1
n1
,1
n0
.
Proof. If Zobs
j = 1, flipping Y obs
j changes n11 by ±1 and keeps n01 unchanged, so ∆τb = 1/n1. If Zobs
j = 0, it changes n01 by ±1 and keeps n11 unchanged, so ∆τb = 1/n0. Maximizing over j yields the claim. In a balanced design, ∆τb = 2/n.
First, we perform separate perturbation on the observed statistic and its randomization distribution. We note that privatizing the randomization distribution is necessary since it depends on the sensitive total number of observed successes n+1.
Theorem 3.4 (Separate perturbation mechanism). Fix a privacy budget ε > 0 and choose εobs > 0 and εref > 0 with εobs + εref = ε. Let ∆τb be the l1-sensitivity of τb as in Lemma 3.3. Produce a privatized p-value p ̃ in two steps: Step 1: Perturbation of the observed statistic
T ̃obs = Π[−1,1] (τb + ηobs) , ηobs ∼ Lap 0, ∆τb
εobs
.
Step 2: Perturbation of the randomization distribution
 ̃n+1 = Π{0,1,...,n} (n+1 + ηref ) , ηref ∼ Geom(e−εref ).
Given (T ̃obs,  ̃n+1), report the private Fisher tail probability
p ̃ = Pr  ̃n11
n1
−  ̃n+1 −  ̃n11
n0
≥ T ̃obs ,
where  ̃n11 ∼ Hypergeometric (n,  ̃n+1, n1). Then p ̃ satisfies ε-DP.
Proof. For Step 1, the release of T ̃obs is εobs-DP by the Laplace mechanism with sensitivity ∆
τb. The subsequent clipping to [−1, 1] is post-processing. For Step 2, under HF
0 the randomization distribution depends on (n, n1, n+1) through n11 ∼ Hypergeometric(n, n+1, n1). Here n and n1 are public by design, while n+1 is sensitive. By privatizing n+1 using the geometric mechanism with unit sensitivity, we obtain  ̃n+1 which is εref-DP. Based on  ̃n+1 we form the private hypergeometric reference. Since τb is strictly monotone in n11, this induces a privatized randomization distribution for T through the mapping a 7→ a/n1 − ( ̃n+1 − a)/n0.
Finally, p ̃ is computed as a measurable function of (T ̃obs,  ̃n+1), which is again postprocessing. By sequential composition, the entire mechanism satisfies ε-DP.
9

Alternatively, one may privatize all statistics simultaneously when the randomization distribution is approximated via R Monte Carlo samples.
Theorem 3.5 (Monte Carlo perturbation mechanism). Fix the number of Monte Carlo replicates R ∈ N+ and a privacy budget ε > 0, choose εobs > 0 and ε1, . . . , εR > 0 with
εobs + PR
r=1 εr = ε. Let ∆τb be the l1-sensitivity of τb as in Lemma 3.3. Release the privatized
vector T ̃obs, T ̃(1), . . . , T ̃(R) , where
T ̃obs = Π[−1,1] (τb + ηobs) , ηobs ∼ Lap 0, ∆τb
εobs
,
and for each r = 1, . . . , R,
T ̃(r) = Π[−1,1] T (r) + ηr , ηr ∼ Lap 0, ∆τb
εr
,
with T (r) = T (z(r); Y obs) computed at data-independent assignments z(r) ∼ Unif(Z). A private Monte Carlo p-value is obtained by
p ̃ =
1 + PR
r=1 1
nT ̃(r) ≥ T ̃obs
o
1+R .
Then p ̃ satisfies ε-DP.
Proof. Each coordinate in the released (R + 1)-dimensional vector is differentially private with its assigned budget by the Laplace mechanism with sensitivity ∆τb, and clipping is post-processing. The random draws z(r) are independent of the dataset and consume no privacy budget. The final p-value p ̃ is a deterministic function of the privatized vector
and is therefore post-processing. By sequential composition, the mechanism satisfies εobs +
PR
r=1 εr = ε differential privacy.
We wrap up this subsection by discussing several limitations of the direct perturbation approaches, which motivate the mechanism-aware Bayesian denoising framework introduced in Section 3.2.
(1) Utility loss due to DP noise and clipping. The addition of DP noise can strongly distort the p-value. As shown in Lemma 3.1, the sensitivity of the p-value is at least 1/2, which is substantial relative to its full range [0, 1]. Even with moderate privacy budgets, the added noise can greatly reduce accuracy. In the Monte Carlo perturbation mechanism (Theorem 3.5), all R replicates need to be privatized, so the budget is split and the noise scale grows linearly with R, a well-known issue in DP -
hypothesis testing (e.g., Kim & Schrab 2023). Moreover, clipping the outputs to valid ranges preserves privacy but introduces bias and further harms utility.
(2) Invalidity of privatized p-values. The privatized p ̃ may not retain the properties of a valid p-value, such as uniformity. For example, once noise is added, p ̃ is no longer guaranteed to satisfy Pr(p ̃ ≤ α) ≤ α under HF
0 for any prespecified level α ∈ [0, 1]. This undermines the reliability of downstream decisions based on p ̃.
10

(3) Lack of uncertainty quantification. These direct perturbation mechanisms do not provide uncertainty quantification for the privatized outputs. Only noisy summaries are released, with no means to account for the added randomness from DP noise. The absence of uncertainty measures limits the interpretability and transparency of the results for end users.
(4) No support for broader synthetic inference. Directly perturbing p-values or test statistics only enables the release of privatized test outcomes, without providing corresponding synthetic data or treatment effect estimates that are consistent with the privatized p-values. Consequently, users cannot perform follow-up synthetic inferences of their interest, limiting the utility of these methods in applications that require both hypothesis testing and effect estimation.
3.2 Mechanism-aware Bayesian Denoising Approach
We next present a Bayesian denoising framework that explicitly accounts for the DP mechanism. The strategy is to privatize the sufficient statistics, update a Bayesian model for the underlying true counts, and then map the posterior distribution onto the space of p-values. Multiple studies have demonstrated the importance of accounting for DP noise during inference (Karwa et al. 2017, Seeman et al. 2020, Nixon et al. 2022, Ra ̈is ̈a et al. 2023). By modeling the noise distribution and propagating -
it through the pipeline, this approach provides a full posterior distribution of pFRT rather than a single noisy point estimate. Recall that under CRE with binary outcomes, the observed data can be summarized as a 2 × 2 table with cell counts (n11, n10, n01, n00). Since the treated and control group sizes (n1, n0) are fixed by design, it suffices to only privatize the success counts n11 and n01. Specifically, given a privacy budget ε > 0, we perturb (n11, n01) by
 ̃n = ( ̃n11,  ̃n01) = (n11 + η11, n01 + η01), η11, η01
i.i.d.
∼ Geom (exp(−ε)) . (1)
Since the treatment assignment is fixed by design, modifying the outcome of a single individual can only change the success count within that individual’s assigned group. Consequently, at most one of n11 or n01 can change by ±1. Therefore, the l1-sensitivity of the pair (n11, n01) is one. By the geometric mechanism in Definition 2.6, the release of ( ̃n11,  ̃n01) satisfies ε-DP. To denoise these counts, we specify a data-independent prior π on (n11, n01) with support {0, . . . , n1} × {0, . . . , -
n0}. By Bayes’ rule, the posterior distribution is then
Pr(n11 = a, n01 = b |  ̃n) = w(a, b)
Pn1 a′=0
Pn0
b′=0 w(a′, b′) , (2)
with weights
w(a, b) = π(a, b)κρ( ̃n11 − a)κρ( ̃n01 − b),
where κρ(h) = 1 − ρ
1 + ρ ρ|h| is the (two-sided) geometric kernel with ρ = exp(−ε).
For each candidate pair of true counts (a, b), let K = a + b denote the corresponding total number of observed successes. Recall that the difference-in-proportions statistic τb = n11/n1 − n01/n0 is a strictly increasing function of n11 given fixed total successes. Under
11

the sharp null HF
0 , we have n11 ∼ Hypergeometric(n, K, n1), so the one-sided FRT p-value corresponding to (a, b) is given by:
p(a, b) = Pr(n11 ≥ a) =
min(n1 ,K )
X
t=max{a,K −n0 }
K t
n−K n1−t n n1
. (3)
Denote γ(a, b) = Pr(n11 = a, n01 = b |  ̃n). The deterministic mapping (a, b) 7→ p(a, b) induces the following posterior distribution of pFRT given ( ̃n11,  ̃n01):
Pr(pFRT ∈ B |  ̃n) =
n1
X
a=0
n0
X
b=0
γ(a, b)1{p(a, b) ∈ B}, B ⊆ [0, 1]. (4)
Since the original data is only used in the construction of (n ̃11,  ̃n01), with all later steps being post-processing, we obtain the ε-DP guarantee for this framework.
Theorem 3.6. The posterior distribution Pr(pFRT | n ̃ ) released by the Bayesian denoising framework satisfies ε-DP.
The whole procedure is briefly summarized in Algorithm 1. This approach is mechanismaware because it explicitly models the distribution of the DP noise. Rather than treating the noisy counts as true data, it propagates the uncertainty induced by the mechanism. The resulting posterior distribution for pFRT enables the reporting of point estimates together with credible sets for uncertainty quantification, which also supports more principled decision-making as discussed in Section 4.
Algorithm 1 DP-FRT: Mechanism-aware Bayesian Denoising
Input: group sizes (n1, n0); success counts (n11, n01); privacy budget ε; prior π.
Output: posterior distribution of pFRT.
Step 1 (Privatize counts): Apply the geometric mechanism (1) to privatize the success counts as ( ̃n11,  ̃n01);
Step 2 (Obtain posterior): Combine the prior π with the noise kernels of mechanism centered at ( ̃n11,  ̃n01) to obtain the posterior distribution γ(a, b) as in (2);
Step 3 (Map to p-value): For each (a, b) ∈ {0, . . . , n1} × {0, . . . , n0}, compute the randomization p-value p(a, b) using (3), and induce the posterior distribution of pFRT as given in (4).
To provide an illustrative example of the proposed DP-FRT procedure, we consider a dataset with treatment and control group sizes n1 = n0 = 500, where the observed numbers of successes are n11 = 260 and n01 = 250. Using a uniform prior on (n11, n01), we apply the approach under privacy budgets ε ∈ {0.1, 0.5, 1.0}, and visualize the resulting posterior distributions of the Fisher’s randomization p-value. Figure 1 shows the posterior probability mass functions for each privacy level, with the red da-
shed line marking the non-private pvalue pFRT = 0.2846 computed from the original data. When ε is small, the posterior is
12

highly diffuse and exhibits a mode at pFRT = 0.5, reflecting greater uncertainty due to DP noise. As ε increases, the posterior concentrates more sharply around the non-private value, demonstrating the privacy-utility tradeoff captured by the DP-FRT framework.
Figure 1: Posterior distributions of Fisher’s randomization p-value under privacy budget ε ∈ {0.1, 0.5, 1}. The red dashed line indicates the non-private p-value.
3.2.1 Prior Specification for Counts
As a key ingredient of the Bayesian denoising framework, we need to specify a dataindependent prior π on (n11, n01) to translate ( ̃n11,  ̃n01) into a posterior over the true counts via (2). When no external information is available, a natural default is the discrete uniform prior that assigns equal mass to every admissible pair:
πunif (a, b) = 1
(n1 + 1)(n0 + 1) , a ∈ {0, . . . , n1}, b ∈ {0, . . . , n0}. (5)
This choice is transparent, easy to compute with, and avoids privileging any specific configuration between the treatment and the control groups. A closely related but slightly more structured option arises from the independent binomial formulation commonly used in clinical practice. Specifically, we independently posit n11 ∼ Binom(n1, p1) and n01 ∼ Binom(n0, p0), together with independent priors p1 ∼ Beta(α1, β1) and p0 ∼ Beta(α0, β0). Integrating out (p1, p0) yields the following independent Bet-
a-Binomial prior for the counts:
πBB(a, b; α1, β1, α0, β0) =
n1
a B(a + α1, n1 − a + β1)
B(α1, β1)
n0
b B(b + α0, n0 − b + β0)
B(α0, β0) , (6)
where B(·, ·) denotes the Beta function B(x, y) = Γ(x)Γ(y)/Γ(x + y). Intuitively, this specification assumes that each group has its own baseline success rate and that the two groups are a priori independent. In particular, when taking (α1, β1) = (α0, β0) = (1, 1),
13

it reduces to the discrete uniform prior (5). Thus, the uniform prior can be viewed as a special case of this independent Beta-Binomial construction. An alternative that is sometimes useful encodes a common success rate across groups by setting p1 = p0 = θ with θ ∼ Beta(α, β). Marginalizing over θ gives a joint prior on counts that depends only on the total number of successes K = a + b:
πCR(a, b; α, β) = n1
a
n0
b
B a + b + α, n1 + n0 − (a + b) + β
B(α, β) . (7)
When (α, β) = (1, 1), the induced distribution of the Fisher’s randomization p-value is close to the uniform distribution on (0, 1) up to discreteness. When prior knowledge about the treatment effect is available from past studies or expert opinion, it can be encoded through the relationship between (p0, p1). Two practical choices are the risk difference (RD) and the log odds ratio (log-OR):
RD: p0 ∼ Beta(α, β), p1 = min{max{p0 + τ, 0}, 1}, with τ ∼ N (τ0, σ2
τ ),
log-OR: p0 ∼ Beta(α, β), p1 = logit−1 (logit(p0) + δ) , with δ ∼ N (δ0, σ2
δ ).
Both approaches induce flexible joint priors on (n11, n01) that reflect prior beliefs about the magnitude of the treatment effect. In practice, posterior inference typically requires MCMC sampling for these richer priors. To conclude, we emphasize that FRT itself does not require any model assumptions. The priors above appear only in the denoising step to handle the randomness introduced by DP noise. Moreover, as Ding & Dasgupta (2016) caution, the independent binomial specification is a convenien-
t practice rather than a consequence of randomization under the potential outcome framework. Any such specification should be regarded as a way of incorporating our prior beliefs instead of an inherent property of the design. Practically, as sample sizes grow, the likelihood dominates and the influence of π on the posterior of pFRT becomes negligible.
3.2.2 Posterior Summaries with Uncertainty Quantification
A major advantage of the mechanism-aware Bayesian denoising framework is that it yields a full posterior distribution for pFRT with clear uncertainty quantification. Recall that given the posterior weights γ(a, b) in (2) and the mapping (a, b) 7→ p(a, b) in (3), the posterior of pFRT is the discrete mixture in (4). Several summaries are natural and enjoy clear decision-theoretic interpretations. For point estimation, let wp(u) = P
(a,b):p(a,b)=u γ(a, b) and U = {p(a, b) : (a, b) ∈ {0, . . . , n1} × {0, . . . , n0}}. The posterior mean minimizes quadratic loss and is
pbmean =
X
u∈U
uwp(u) =
n1
X
a=0
n0
X
b=0
γ(a, b)p(a, b). (8)
The posterior median minimizes absolute loss and may not be unique because the posterior places mass at discrete points. Let F (u) = P
v≤u wp(v) be the posterior cumulative distribution function on the support, then a valid posterior median satisfies
pbmedian ∈ m : F (m) ≥ 1
2 and 1 − F (m−) ≥ 1
2 . (9)
14

The maximum a posteriori (MAP) estimate may also be non-unique. It is defined as the mode of the aggregated weights:
pbMAP ∈ arg max
u∈U wp(u), (10)
which is informative when the posterior is multi-modal. Credible sets can be constructed directly from (4) on the finite support. Let {u(1) < · · · < u(J)} be the sorted distinct support points with masses wp u(j) and distribution function F (u). The equal-tailed credible set at level 1 − α uses posterior quantiles on this support:
C1−α = {u(j) : L ≤ u(j) ≤ U }, (11)
where L = inf{u : F (u) ≥ α/2} and U = inf{u : F (u) ≥ 1 − α/2}. Because F is a step function, the posterior content of C1−α is at least 1 − α but may not be exact. When multiple (L, U ) achieve the same nominal level due to ties at the boundaries, it is reasonable to break ties by minimizing either the range U −L or the cardinality of the included support points, and the chosen rule should be stated. A highest-posterior-density set at level 1 − α thresholds the weights. Let tα be the smallest num-
ber such that P
u:wp(u)≥tα wp(u) ≥ 1 − α. This yields
HPD1−α = {u ∈ U : wp(u) ≥ tα}, (12)
which is computed by sorting the support points in decreasing wp and accumulating mass until the target level is attained. If several points tie at the threshold, one may include all tied points to be conservative or include a minimal subset to match the nominal content, and the rule should be declared. Since many (a, b) can map to the same u, the posterior on p can be multi-modal and the HPD set need not be an interval. For interpretability, it is helpful to present both the exact finite set and -
its smallest enclosing interval in [0, 1]. In addition to providing explicit uncertainty quantification, the Bayesian framework eliminates the need for post-processing to enforce feasible ranges on privatized counts. Specifically, the privatized counts  ̃n11 and  ̃n01 may fall outside the intervals [0, n1] or [0, n0], respectively, and the conventional approach is to clip these values to their feasible range. However, the following lemma shows that truncation is unnecessary for posterior inference-
, as the posterior update remains unchanged when the released counts are clipped under the geometric mechanism (1).
Lemma 3.7 (Clipping invariance). Let n ∈ {0, . . . , M } have prior {πk}M
k=0 and observe  ̃n = n+η with η drawn from a kernel K(n,  ̃n) = κρ(|n− ̃n|) that is multiplicatively separable: κρ(a + b) = κρ(a)κρ(b)/κρ(0). Define  ̃nclip = min(max( ̃n, 0), M ). Then, for all k,
Pr(n = k |  ̃n) = Pr(n = k |  ̃nclip).
Proof. By Bayes’ rule, we have
Pr(n = k |  ̃n = x) = πkκρ(|k − x|)
PM
m=0 πmκρ(|m − x|) .
If x ∈ [0, M ] there is nothing to prove. If x < 0, then for all k ∈ {0, . . . , M }, |k − x| = |k − 0| + |0 − x|, hence
κρ(|k − x|) = κρ(|k − 0|)κρ(|0 − x|)
κρ(0) .
15

The factor κρ(|0 − x|)/κρ(0) cancels between numerator and denominator, yielding
Pr(n = k |  ̃n = x) = πkκρ(|k − 0|)
PM
m=0 πmκρ(|m − 0|) = Pr(n = k |  ̃nclip = 0).
If x > M , then |k − x| = |M − k| + |x − M | and the same argument gives
Pr(n = k |  ̃n = x) = πkκρ(|M − k|)
PM
m=0 πmκρ(|M − m|) = Pr(n = k |  ̃nclip = M ).
Thus Pr(n = k |  ̃n) = Pr(n = k |  ̃nclip) in all cases.
The argument applies coordinate-wise for (n11, n01) when independent geometric noise are used, because the kernel is multiplicatively separable and the joint kernel factorizes across coordinates.
3.2.3 Monte Carlo Sampling and Aggregation
To compute the exact posteriors for pFRT, enumerating all (a, b) ∈ {0, . . . , n1} × {0, . . . , n0} requires O(n1n0) operations to compute and normalize the weights w(a, b). For each pair, evaluating the tail sum in (3) takes O(min{n1, n0}) time, resulting in an overall complexity of O(n1n0 × min{n1, n0}). When both n1 and n0 are moderate, full enumeration is feasible. For large (n1, n0), it might be preferable to sample from the posterior rather than exhaustively evaluating the entire grid. In p-
articular, when the prior can be factorized as π(a, b) = π1(a)π0(b), as in the case of the discrete uniform prior (5) and the independent Beta Binomial prior (6), the posterior distribution also factorizes as γ(a, b) = γ11(a)γ01(b), where
γ11(a) ∝ π1(a)κρ( ̃n11 − a), γ01(b) ∝ π0(b)κρ( ̃n01 − b).
As a result, a(r) ∼ γ11 and b(r) ∼ γ01 can be sampled independently for r = 1, . . . , R. The cost of normalizing the two distributions is O(n1 + n0), sampling R pairs is O(R), and evaluating the p-value for each draw via (3) costs O(min{n1, n0}) per sample, resulting in a total computational cost of O(n1 + n0 + R min{n1, n0}). Given Monte Carlo samples {(a(r), b(r))}R
r=1, posterior summaries are obtained by mapping each pair to u(r) = p(a(r), b(r)) and aggregating over {u(r)}. For example, the posterior mean can be approximated by p ̃mean = PR
r=1 u(r)/R. The posterior distribution function
can be approximated by the empirical distribution of {u(r)}, from which the posterior median, credible sets, and HPD sets can be extracted as described in Section 3.2.2. The MAP estimate can also be obtained by tabulating the frequencies of the distinct values in {u(r)} and selecting the mode. Furthermore, these Monte Carlo draws also enable posterior predictive generation of synthetic data and effect estimation. Specifically, each draw (a(r), b(r)) determines
n(r)
11 = a(r), n(r)
01 = b(r), n(r)
10 = n1 − a(r), n(r)
00 = n0 − b(r).
Based on these tables, the following estimands can be computed:
τ (r) = a(r)
n1
− b(r)
n0
, RR(r) = a(r)/n1
b(r)/n0
, OR(r) = a(r)(n0 − b(r))
(n1 − a(r))b(r) ,
16

where τ (r) is the risk difference, RR(r) is the risk ratio with a small continuity adjustment when needed, and OR(r) is the odds ratio with the standard Haldane-Anscombe correction applied if any cell is zero. The empirical distributions of {τ (r)}, {RR(r)}, and {OR(r)} provide posterior point summaries and credible intervals for treatment effects consistent with the mechanism-aware denoising. Notice that all operations are deterministic functions of ( ̃n11,  ̃n01), releasing such synthetic tabl-
es is post-processing and does not expend additional privacy budget.
4 Decision Making under DP-FRT
After obtaining the privatized Fisher’s randomization p-value, one common practice is to reject the null hypothesis when it falls below a user-specified level α. However, under differential privacy, the released statistics include randomness introduced by the privacy mechanism. A principled decision rule should also account for this uncertainty rather than rely on a single noisy realization or summary. In this section, we base our decisions under DP-FRT on Pr (pFRT ≤ α | n ̃ ), which represents th-
e posterior probability that the Fisher p-value does not exceed α. This quantity summarizes the strength of evidence for rejection, incorporates the full posterior shape rather than a single noisy point, and connects naturally to classical summaries such as posterior quantiles and one-sided credible bounds. We introduce two frameworks for implementing this decision-making process.
4.1 Bayes Risk-optimal Decision Framework
We first develop a Bayes rule that minimizes posterior risk of departing from the non-private decision. The aim is to recover as faithfully as possible the significance label that would be obtained without DP noise. Fix a threshold α ∈ (0, 1) and let the decision δ ∈ {1, 0} indicate reject and not reject. Consider the loss
L(δ, pFRT) =

   
   
0, δ = 1, pFRT ≤ α,
λ0, δ = 1, pFRT > α,
λ1, δ = 0, pFRT ≤ α,
0, δ = 0, pFRT > α,
(13)
where λ0 > 0 and λ1 > 0 represent the losses due to discordance with the non-private significance decision defined by {pFRT ≤ α}. More specifically, λ0 denotes the loss of being too aggressive, such that we reject in cases where the non-private test would not. Conversely, λ1 corresponds to the loss of being too conservative, such that we fail to reject in cases where the non-private test would. Then the corresponding posterior risks given  ̃n = ( ̃n11,  ̃n01) are
R(δ = 1 |  ̃n) = λ0 Pr(pFRT > α |  ̃n), (14)
R(δ = 0 |  ̃n) = λ1 Pr(pFRT ≤ α |  ̃n). (15)
17

The Bayes risk-optimal decision rule is given by
δBayes(  ̃n) = arg min
δ∈{0,1} E[L(δ, pFRT) |  ̃n]
=
(
1, R(δ = 1 |  ̃n) < R(δ = 0 |  ̃n),
0, otherwise,
=



1, Pr(pFRT ≤ α |  ̃n) > λ0
λ0 + λ1
,
0, otherwise.
(16)
This rule can also be viewed as a decision based on a posterior quantile, where the quantile level is determined by the trade-off between the losses of being overly aggressive and overly conservative relative to the non-private decision. In particular, when there is no justification for assigning different losses to the two types of discordance (i.e., λ0 = λ1), the decision rule reduces to one based on the posterior median. Although the decision rule (16) admits an intuitive interpretation, it cap-
tures only the relative penalties for overly liberal versus overly conservative decisions, and does not quantify confidence in the decision under DP noise. Therefore, it is advisable to present the decision together with Pr(pFRT ≤ α |  ̃n), which conveys the strength of evidence supporting the decision and clarifies how DP noise has influenced it.
4.1.1 Decision Confidence and Abstention under Uncertainty
When the posterior quantity Pr(pFRT ≤ α |  ̃n) is close to 1 or to 0, there is strong evidence to reject or not, respectively. However, with a tight privacy budget or a small sample size, the posterior for pFRT can be diffuse and this probability may lie near the binary Bayes threshold λ0/(λ0 + λ1), thus the decision might be unreliable. In the spirit of Chow’s rule (Chow 1957, 1970), it is natural to equip the decision procedure with an explicit abstention option to deal with these situations. Sp-
ecifically, let δ ∈ {0, 1, u} with u representing abstention due to uncertainty, and let λu > 0 be the loss incurred for abstaining, such as the operational cost of deferring the decision. The Bayes-optimal decision rule becomes
δ∗
Bayes(n ̃ ) =

 
 
1, R(δ = 1 |  ̃n) < min{R(δ = 0 |  ̃n), λu},
0, R(δ = 0 |  ̃n) < min{R(δ = 1 |  ̃n), λu},
u, otherwise,
=

    
    
1, Pr(pFRT ≤ α |  ̃n) > max λ0
λ0 + λ1
, 1 − λu
λ0
,
0, Pr(pFRT ≤ α |  ̃n) < min λ0
λ0 + λ1
, λu
λ1
,
u, otherwise.
(17)
In particular, when λu is large relative to λ0 and λ1, the abstention region degenerates, and the trinary rule (17) reduces to the binary rule (16). The following lemma gives a condition that is both sufficient and tight.
18

Lemma 4.1. If λu ≥ H
2 , where H = 2λ0λ1
λ0 + λ1
is the harmonic mean of λ0 and λ1, then the
abstention option degenerates.
Guidance for specifying λu can be based on the relative tolerance for indecision versus making errors. From an alternative viewpoint, λu determines the width of the abstention region around the threshold Pr(pFRT ≤ α |  ̃n) = λ0/(λ0 + λ1). Figure 2 illustrates this rule, where the abstention region is visualized as the shaded gray band with width max {0, 1 − 2λu/H}. A smaller λu enlarges the abstention region and thereby increases the likelihood of abstention, whereas a larger λu narrows the region-
 and ultimately reduces the rule to the binary decision when λu ≥ H/2. Therefore, λu can be chosen accordingly, particularly when its direct interpretation is unclear. For instance, setting λu = 0.025H yields an abstention region of width 0.95, which can be interpreted as imposing a 95% decision confidence in the Bayesian sense.
Figure 2: Illustration of the Bayes risk-optimal decision with an abstention option. The losses are specified as λ0 = 0.2, λ1 = 0.5, and λu = 0.1. The blue, orange, and green lines correspond to the posterior risks normalized by (λ0 + λ1) for decisions δ = 0, δ = 1, and δ = u, respectively. The shaded gray band marks the abstention region.
4.1.2 Sequential Decision under Additional Privacy Budget
We next consider how a Bayes risk-optimal decision rule (17) that initially abstains can be refined into a definite decision by allocating additional privacy budget. Suppose the first privatized release  ̃n = ( ̃n11,  ̃n01) is obtained with privacy budget ε > 0, leading the trinary Bayes decision rule (17) to yield δ∗
Bayes = u. In such cases, the posterior evidence Pr(pFRT ≤ α |  ̃n) lies within the abstention interval determined by the loss parameters (λ0, λ1, λu). To improve decision certainty without fully releasing the data,
19

one may adopt a sequential procedure that updates the posterior through an additional noisy observation drawn under a top-up privacy budget. Specifically, let εplus > 0 be the supplementary budget, we first generate an independent second noisy release
n ̃ + =  ̃n+
11,  ̃n+
01 = (n11 + η+
11, n01 + η+
01), η+
11, η+
01
i.i.d.
∼ Geom (exp(−εplus)) , (18)
so that the total privacy budget of the two releases is εtot = ε + εplus by the sequential
composition property 2.8. Write ρ = exp(−ε) and ρ+ = exp(−εplus), and let κρ(h) = 1−ρ
1 + ρ ρ|h| denote the geometric kernel. Then the sequential update of posterior follows
directly from Bayes’ rule as
Pr(n11, n01 |  ̃n,  ̃n+) ∝ Pr(  ̃n+ | n11, n01,  ̃n) Pr(n11, n01 | n ̃ )
∝ Pr(  ̃n+ | n11, n01) Pr(  ̃n | n11, n01) π(n11, n01), (19)
where π(n11, n01) denotes the prior defined in Section 3.2.1. Here, the posterior obtained from the first release serves as the prior for the second, allowing the sequential Bayesian update to combine both sources of information under the total privacy budget εtot. Denote γ+(a, b) = Pr(n11 = a, n01 = b |  ̃n,  ̃n+). By substituting the geometric kernels, we have the following normalized posterior
γ+(a, b) = π(a, b)κρ( ̃n11 − a)κρ( ̃n01 − b)κρ+( ̃n+
11 − a)κρ+( ̃n+
01 − b)
n1
X
a′=0
n0
X
b′=0
π(a′, b′)κρ( ̃n11 − a′)κρ( ̃n01 − b′)κρ+( ̃n+
11 − a′)κρ+( ̃n+
01 − b′)
(20)
for (a, b) ∈ {0, . . . , n1} × {0, . . . , n0}.
Next, we investigate how allocating additional privacy budget can improve decision certainty. Denote the abstention region as
A = (tlow, thigh) = min λ0
λ0 + λ1
, λu
λ1
, max λ0
λ0 + λ1
, 1 − λu
λ0
,
which is determined solely by the loss parameters. By allocating extra privacy budget, the posterior evidence of rejection given α is updated from Pr(pFRT ≤ α | n ̃ ) to Pr(pFRT ≤ α | n ̃ ,  ̃n+), which may become more concentrated around 0 or 1. Hence, although the width of the abstention region remains fixed, the probability that the updated evidence falls within this abstention region may decrease. The following theorem lower bounds this improvement on decision certainty.
Theorem 4.2 (Lower Bound on Abstention-probability Reduction). Denote Ψ = Pr(pFRT ≤ α |  ̃n), Ψ+ = Pr(pFRT ≤ α |  ̃n,  ̃n+), and let A = (tlow, thigh) be the abstention region with 0 < tlow < thigh < 1. Assume Pr(Ψ ∈ A) > 0. Then there exists a finite constant c > 0 such that, for all εplus > 0,
Pr Ψ+ ∈/ A | Ψ ∈ A ≥ 1 − ce−εplus. (21)
20

Proof. The proof proceeds in three steps: (1) establishing posterior concentration on the true cell counts after the top-up release; (2) translating posterior concentration into escape from the abstention region; and (3) converting the unconditional escape bound into the desired conditional probability bound. In the first step, we analyze the posterior concentration around the true counts. Define the event
E = {η+
11 = 0, η+
01 = 0}.
Since η+
11, η+
01
i.i.d.
∼ Geom(ρ+), we have
Pr(Ec) = 1 − 1 − ρ+
1 + ρ+
2
= 4ρ+
(1 + ρ+)2 ≤ 4ρ+.
On E we have  ̃n+
11 = n11 and  ̃n+
01 = n01, so
κρ+ (  ̃n+
11 − a)κρ+( ̃n+
01 − b) = κρ+(n11 − a)κρ+(n01 − b).
Thus, for (a, b) = (n11, n01) this factor equals κρ+(0)κρ+(0), while for any (a, b) ̸= (n11, n01) we have |a − n11| + |b − n01| ≥ 1, so
κρ+ (n11 − a)κρ+ (n01 − b) ≤ κρ+ (0)2(ρ+)|a−n11|+|b−n01| ≤ κρ+ (0)2ρ+. (22)
Next we control the remaining factors uniformly in  ̃n. Let S denote the finite support of (n11, n01). Because the prior is strictly positive on S, there exist constants 0 < πmin ≤ π(a, b) ≤ πmax < ∞ for all (a, b) ∈ S. For any integers x and any (a, b) ∈ S,
κρ(x − a)
κρ(x − n11) = ρ|x−a|−|x−n11|,
and by the triangle inequality, |x − a| − |x − n11| ≤ |a − n11|. Since 0 < ρ < 1, this implies
κρ(x − a)
κρ(x − n11) ≤ ρ−|a−n11|.
Applying this to both coordinates, we obtain, for any (a, b) ∈ S,
κρ( ̃n11 − a)κρ( ̃n01 − b)
κρ( ̃n11 − n11)κρ( ̃n01 − n01) ≤ ρ−|a−n11|−|b−n01|,
and hence π(a, b)κρ( ̃n11 − a)κρ( ̃n01 − b)
π(n11, n01)κρ( ̃n11 − n11)κρ( ̃n01 − n01) ≤ πmax
πmin
ρ−|a−n11|−|b−n01|.
Since S is finite, the right-hand side admits a finite maximum over (a, b) ̸= (n11, n01). Thus there exists a finite constant C1 > 0, depending only on the prior and ρ, such that for all n ̃ and all (a, b) ̸= (n11, n01),
π(a, b)κρ( ̃n11 − a)κρ( ̃n01 − b)
π(n11, n01)κρ( ̃n11 − n11)κρ( ̃n01 − n01) ≤ C1. (23)
21

Combining the bounds (22) and (23), we obtain that on E,
γ+(a, b)
γ+(n11, n01) ≤ C1ρ+ for all (a, b) ̸= (n11, n01).
Summing over all (a, b) ̸= (n11, n01) in the finite support S gives
1 − γ+(n11, n01) =
X
(a,b)̸=(n11,n01)
γ+(a, b) ≤ C2ρ+ on E,
for some finite C2 > 0 independent of  ̃n and ρ+. Notice that on Ec we have the trivial bound 1 − γ+(n11, n01) ≤ 1. Therefore,
1 − γ+(n11, n01) ≤ 1Ec + 1E C2ρ+.
Taking expectations and using Pr(Ec) ≤ 4ρ+ yields
E 1 − γ+(n11, n01) ≤ 4ρ+ + C2ρ+ ≤ Cρ+ = Ce−εplus, (24)
for some finite constant C > 0 independent of εplus. In the second step, we translate posterior concentration into abstention probability. Let pFRT = g(n11, n01) be the non-private Fisher’s randomization p-value. Notice that the corresponding non-private decision H = 1{g(n11, n01) ≤ α} is a deterministic function of (n11, n01). Then, by the definition of Ψ+, we have
Ψ+ =
X
a,b
1{g(a, b) ≤ α}γ+(a, b).
If H = 1, then (n11, n01) is in the rejection region and
Ψ+ = γ+(n11, n01) +
X
(a,b)̸=(n11,n01) g(a,b)≤α
γ+(a, b) ≥ γ+(n11, n01),
hence
1 − Ψ+ ≤ 1 − γ+(n11, n01).
If H = 0, then (n11, n01) is in the acceptance region and
Ψ+ =
X
(a,b)̸=(n11,n01) g(a,b)≤α
γ+(a, b) ≤ 1 − γ+(n11, n01).
Denote dA = min{tlow, 1 − thigh} > 0. If 1 − γ+(n11, n01) ≤ dA and H = 0, then Ψ+ ≤ dA ≤ tlow, and thus Ψ+ ∈/ A. If 1 − γ+(n11, n01) ≤ dA and H = 1, then 1 − Ψ+ ≤ dA ≤ 1 − thigh, so Ψ+ ≥ thigh and hence Ψ+ ∈/ A. Therefore, we have
{Ψ+ ∈ A} ⊆ {1 − γ+(n11, n01) > dA}.
22

Taking probabilities and applying Markov’s inequality together with (24) gives
Pr(Ψ+ ∈ A) ≤ Pr 1 − γ+(n11, n01) > dA
≤ E [1 − γ+(n11, n01)]
dA
≤C
dA
e−εplus =: CAe−εplus .
(25)
In the final step, we derive the conditional escape probability that is of interest. By Bayes’ rule,
Pr(Ψ+ ∈ A | Ψ ∈ A) = Pr(Ψ+ ∈ A, Ψ ∈ A)
Pr(Ψ ∈ A) ≤ Pr(Ψ+ ∈ A)
Pr(Ψ ∈ A) .
Since Ψ depends only on the first release, Pr(Ψ ∈ A) =: pA > 0 is a constant independent of εplus. Combining this with (25), we obtain
Pr(Ψ+ ∈ A | Ψ ∈ A) ≤ CA
pA
e−εplus .
Setting c = CA/pA yields
Pr(Ψ+ ∈/ A | Ψ ∈ A) = 1 − Pr(Ψ+ ∈ A | Ψ ∈ A) ≥ 1 − ce−εplus,
which completes the proof of Theorem 4.2.
As the additional privacy budget εplus increases, the second-stage noise becomes negligible. In the limit εplus → ∞, the second-stage release reveals the true cell counts with probability tending to one. Consequently, the updated posterior quantity Ψ+ converges to the non-private decision 1{pFRT ≤ α}, and the chance of remaining in the abstention region decays exponentially in εplus. We next turn to a complementary upper bound on how likely the refined posterior is to exit the abstention region af-
ter the top-up release. Our derivation adopts an informationtheoretic viewpoint: conditioned on the first release, the top-up mechanism induces a channel whose ability to move the posterior is governed by its total variation contraction under differential privacy. By bounding this contraction and relating posterior movement to the distance from the abstention boundaries, we obtain a sharp upper bound on the reduction of abstention probability. We introduce some notation to formalize this argument.-
 Let S = {0, . . . , n1} × {0, . . . , n0} denote the support of (n11, n01). For h ∈ {0, 1}, let Sh = {(a, b) ∈ S : H(a, b) = h} be the subsets of S corresponding to acceptance (h = 0) and rejection (h = 1). Define the l1-distance between these two classes by Lmax = max(a,b)∈S0,(a′,b′)∈S1 |a − a′| + |b − b′| , which can be computed without accessing any private data. We obtain the following theorem.
Theorem 4.3 (Upper Bound on Abstention-probability Reduction). Let A = (tlow, thigh) be the abstention region with 0 < tlow < thigh < 1, and define r(Ψ) = min{Ψ − tlow, thigh − Ψ} whenever Ψ ∈ A. Then, for every εplus > 0,
Pr Ψ+ ∈/ A | Ψ ∈ A ≤ 2 min{Lmaxs(εplus), 1} E
"
Ψ(1 − Ψ)
r(Ψ)2 Ψ ∈ A
#
, (26)
where s(ε) = tanh(ε/2) = (eε − 1)/(eε + 1).
23

Proof. The proof proceeds in three steps: (1) a channel-based representation of posterior refinement; (2) bounding the channel’s total variation contraction via DP; and (3) converting mean-square movement into an upper bound on the probability of exiting the abstention region. For simplicity, denote H = 1{pFRT ≤ α}. All expectations and probabilities in this proof are taken with respect to the joint law of (H,  ̃n,  ̃n+). In the first step, we formulate the binary-input channel given the first re-
lease. Fix a realization  ̃n and condition on this event. Under this conditional law, the posterior of the non-private decision H is Ψ(  ̃n) = Pr(H = 1 |  ̃n) ∈ [0, 1]. For h ∈ {0, 1}, define the conditional output distributions as
Qh(·) := L  ̃n+ | H = h,  ̃n .
Thus, conditionally on  ̃n, (H,  ̃n+) is a binary-input channel with input prior Pr(H = 1) = Ψ(  ̃n) and output kernel {Q0, Q1}. Let Y denote a generic random variable with distribution L(  ̃n+ |  ̃n). Then, by Bayes’ rule, the refined posterior can be written as Ψ+(Y ) = Pr(H = 1 |  ̃n, Y ). Conditionally on  ̃n, one can compute
E |Ψ+ − Ψ| |  ̃n = 2Ψ(1 − Ψ)TV(Q1, Q0),
where TV(·, ·) denotes total variation distance. Since |Ψ+ − Ψ| ≤ 1, we also have
E (Ψ+ − Ψ)2 | n ̃ ≤ E |Ψ+ − Ψ| |  ̃n = 2Ψ(1 − Ψ)TV(Q1, Q0).
Thus, E (Ψ+ − Ψ)2 |  ̃n ≤ 2Ψ(1 − Ψ)TV(Q1, Q0). (27)
In the second step, we bound TV(Q1, Q0) via Lmax and s(εplus). Let K(· | a, b) denote the distribution of the top-up release  ̃n+ when the true counts are (n11, n01) = (a, b), i.e., the geometric mechanism kernel. Conditionally on n ̃ and H = h, the posterior of the counts is supported on Sh and Qh is the corresponding mixture:
Qh(·) =
X
(a,b)∈Sh
K(· | a, b) Pr n11 = a, n01 = b | H = h,  ̃n , h ∈ {0, 1}.
Consider two arbitrary mixtures Q1 = P
i αiPi, Q0 = P
j βjRj with weights summing to 1. By the triangle inequality, we have TV(Q1, Q0) ≤ supi,j TV(Pi, Rj). Applied here, we obtain TV(Q1, Q0) ≤ sup
(a,b)∈S1,(a′,b′)∈S0
TV K(· | a, b), K(· | a′, b′) . (28)
Since the geometric mechanism on the counts has l1-sensitivity one and satisfies εplus-DP with respect to the adjacency d((a, b), (a′, b′)) = 1. By Ghazi & Issa (2024), we know that for an ε-DP mechanism K, any adjacent inputs z, z′ obey
TV K(· | z), K(· | z′) ≤ s(ε) := tanh(ε/2).
Equip S with the l1-metric d (a, b), (a′, b′) = |a − a′| + |b − b′|. Then, for any two (a, b), (a′, b′) ∈ S, one can connect them by a path of d((a, b), (a′, b′)) adjacent points in
24

this lattice. Applying the triangle inequality for total variation along this path and using the adjacent bound at each step gives
TV K(· | a, b), K(· | a′, b′) ≤ d (a, b), (a′, b′) s(εplus).
Combining with (28) and the definition of Lmax, and noting that total variation is always at most one, we obtain
TV(Q1, Q0) ≤ min Lmaxs(εplus), 1 . (29)
Substituting (29) into (27), we obtain, for each fixed n ̃ ,
E (Ψ+ − Ψ)2 |  ̃n ≤ 2Ψ(1 − Ψ) min Lmaxs(εplus), 1 . (30)
In the final step, we establish how the mean-square movement translates into the abstention probability. Fix  ̃n such that Ψ ∈ A. The minimal distance from Ψ to the boundaries of A is r(Ψ) = min{Ψ − tlow, thigh − Ψ} > 0. If Ψ ∈ A and Ψ+ ∈/ A, then necessarily |Ψ+ − Ψ| ≥ r(Ψ), so
{Ψ ∈ A, Ψ+ ∈/ A} ⊆ Ψ ∈ A, |Ψ+ − Ψ| ≥ r(Ψ) .
Conditionally on this fixed  ̃n with Ψ ∈ A, we obtain
Pr Ψ+ ∈/ A | n ̃ ≤ Pr |Ψ+ − Ψ| ≥ r(Ψ) |  ̃n .
Applying Markov’s inequality to the nonnegative random variable (Ψ+ − Ψ)2 yields
Pr |Ψ+ − Ψ| ≥ r(Ψ) |  ̃n ≤ E (Ψ+ − Ψ)2 |  ̃n
r(Ψ)2 .
Combining with (30) gives, for every  ̃n such that Ψ ∈ A,
Pr Ψ+ ∈/ A |  ̃n ≤ 2 min{Lmaxs(εplus), 1} Ψ(1 − Ψ)
r(Ψ)2 .
Finally,
Pr Ψ+ ∈/ A | Ψ ∈ A = E
h
Pr Ψ+ ∈/ A |  ̃n | Ψ ∈ A
i
.
Using the bound from the previous step and the fact that Ψ and r(Ψ) are functions of  ̃n, we obtain
Pr Ψ+ ∈/ A | Ψ ∈ A ≤ 2 min{Lmaxs(εplus), 1} E
"
Ψ(1 − Ψ)
r(Ψ)2 Ψ ∈ A
#
,
which is exactly (26). This completes the proof of Theorem 4.3.
Remark 4.4 (Interpretation of s(ε)). The quantity s(ε) = tanh(ε/2) is the standard conversion from a privacy budget ε to an upper bound on the adversary’s distinguishing advantage between neighboring datasets, measured by the total variation distance between their output distributions under an ε-DP mechanism. It thus provides an interpretable measure of how much information a DP mechanism can reveal about the underlying data (Ghazi & Issa 2024). In the context of Theorem 4.3, this quantity governs-
 how far the posterior can move after the top-up release: the total variation distance between the top-up channels corresponding to acceptance and rejection grows at most linearly in s(εplus) up to a universal cap Lmax, so the refinement induced by additional privacy budget εplus is necessarily limited by this contraction factor.
25

Based on Theorem 4.3, the following corollary quantifies a necessary lower bound on the additional privacy budget needed for obtaining a certain decision with high probability. It serves as a practical guideline for practitioners on privacy budget allocation.
Corollary 4.5 (Budget necessary to exit the abstention region). Let A = (tlow, thigh) be the abstention region with 0 < tlow < thigh < 1, and define r(Ψ) = min{Ψ − tlow, thigh − Ψ} whenever Ψ ∈ A. Fix a confidence level 1 − η ∈ (0, 1). If the refined posterior Ψ+ satisfies
Pr Ψ+ ∈/ A | n ̃ ≥ 1 − η,
then it is necessary that
εplus ≥ 2 arctanh (1 − η)r(Ψ)2
2LmaxΨ(1 − Ψ) , (31)
where Lmax is the l1-distance between the classes as in Theorem 4.3.
Proof. From the proof of Theorem 4.3, for any fixed n ̃ with Ψ ∈ A,
Pr(Ψ+ ∈/ A |  ̃n) ≤ 2 min{Lmaxs(εplus), 1} Ψ(1 − Ψ)
r(Ψ)2 .
Assume that for some εplus > 0 the desired bound Pr(Ψ+ ∈/ A |  ̃n) ≥ 1 − η holds. Then
1 − η ≤ Pr Ψ+ ∈/ A |  ̃n ≤ 2 min{Lmaxs(εplus), 1} Ψ(1 − Ψ)
r(Ψ)2 ,
which implies
min{Lmaxs(εplus), 1} ≥ (1 − η)r(Ψ)2
2Ψ(1 − Ψ) . (32)
Since Ψ ∈ A ⊂ (0, 1), we have
r(Ψ) = min{Ψ − tlow, thigh − Ψ} ≤ min{Ψ, 1 − Ψ},
hence r(Ψ)2 ≤ min{Ψ, 1 − Ψ}2 ≤ Ψ(1 − Ψ). Combining with the fact that Lmax ≥ 1, the right-hand side of (32) lies in (0, 1). Therefore
s(εplus) ≥ (1 − η)r(Ψ)2
2LmaxΨ(1 − Ψ) .
Finally, since s(ε) = tanh(ε/2) and the hyperbolic arctangent function arctanh(·) is the inverse of tanh(·) on [0, 1), it is equivalent to
εplus ≥ 2 arctanh (1 − η)r(Ψ)2
2LmaxΨ(1 − Ψ) ,
which completes the proof of Corollary 4.5.
26

While Theorem 4.3 quantifies how much the additional release can at most reduce the probability of abstention, Corollary 4.5 inverts this relationship: it determines a necessary lower bound on εplus for ensuring, with high probability, that the refined posterior escapes the abstention region. The two results therefore provide dual perspectives on the same phenomenon: a larger privacy budget increases distinguishability, which strengthens posterior concentration and thus reduces abstention. Intuit-
ively, the necessary privacy budget depends on Lmax, η, and the initial posterior Ψ because these quantities together capture (i) how different the acceptance and rejection hypotheses can be in the worst case (Lmax), (ii) how confident a decision the analyst requires (η), and (iii) how close the current posterior is to the abstention boundary (Ψ through r(Ψ)). When the separation between hypotheses is smaller (smaller Lmax), when higher confidence is required (smaller η), or when the posterior lie-
s deeper inside the abstention region so that the ratio r(Ψ)2/ Ψ(1 − Ψ) is larger, a greater privacy budget is needed to push the posterior outside the abstention region. In practice, one may begin with a moderate initial privacy budget ε as a pilot release. If the decision rule (17) abstains, compute the bound above as a necessary lower bound when selecting εplus for a pre-specified confidence level (e.g., η = 0.05 for 95% certainty). A second release  ̃n+ is then generated, the posterior is upda-
ted, and the decision is recomputed. If the decision still abstains, the procedure may be repeated, or the decision may be reported as inconclusive once the total privacy budget has been fully used. This strategy spends privacy budget adaptively and only when necessary, allowing practitioners to decide at each stage whether to continue.
4.2 Frequentist-calibrated Decision Framework
We next calibrate a threshold to control frequentist type I error based on the posterior quantity Pr(pFRT ≤ α |  ̃n). Specifically, define
δFreq =
(
1, Pr(pFRT ≤ α | n ̃ ) > t∗,
0, otherwise, (33)
where the threshold t∗ ∈ [0, 1] is chosen as the smallest value such that, under the sharp null HF
0,
Pr
HF
0
(δFreq = 1) ≤ αFreq, (34)
with αFreq ∈ (0, 1) denoting the target type I error level. Specifically, let FΨ be the distribution of Pr(pFRT ≤ α | n ̃ ) under HF
0 , then its (1 − αFreq)-quantile
t∗ = F −1
Ψ (1 − αFreq) = inf{t ∈ [0, 1] : FΨ(t) > 1 − αFreq} (35)
yields the desired calibrated threshold. Equivalently, rule (33) can also be viewed as an FRT based on the test statistic Ψ = Pr(pFRT ≤ α |  ̃n), which rejects the null if its randomization p-value is at or below the target level αFreq. To determine the critical value t∗ defined in (35), the key step is to derive FΨ, the distribution of Ψ under the sharp null hypothesis. However, the construction of FΨ depends on the total number of successes, n+1 = n11 + n01, which is also subject to privatizatio-
n and therefore unknown. Two calibration strategies are proposed below.
27

4.2.1 Worst-case Calibration
We first construct a threshold that is valid for all possible total number of successes. Recall that under the sharp null, the randomization redistributes all successes across groups. For each K ∈ {0, . . . , n}, let QK denote the probability mass function of  ̃n = ( ̃n11,  ̃n01) under HF
0 with total number of successes equal to K, given by
QK(a, b) =
min{n1 ,K }
X
t=max{0,K −n0 }
K t
n−K n1−t n n1
κρ(a − t)κρ(b − (K − t)) (36)
for (a, b) ∈ {0, . . . , n1} × {0, . . . , n0}. We then define F (K)
Ψ as the cumulative distribution function of Ψ = Pr(pFRT ≤ α |  ̃n) when n ̃ ∼ QK, that is,
F (K)
Ψ (t) =
n1
X
a=0
n0
X
b=0
QK(a, b)1{Ψ ≤ t}, t ∈ [0, 1], (37)
and denote tK = inf{t : F (K)
Ψ (t) > 1 − αFreq} as the right-continuous (1 − αFreq)-quantile of
F (K)
Ψ . Finally, we set the least favorable threshold as t∗
LFC = supK∈{0,...,n} tK . This leads to the following decision rule as
δLFC(  ̃n) =
(
1, Pr(pFRT ≤ α |  ̃n) > t∗
LFC,
0, otherwise. (38)
The following theorem ensures type I error control under this rule.
Theorem 4.6 (Type I error control with worst-case calibration). Under the sharp null HF
0 , we have
Pr
HF
0
(δLFC(  ̃n) = 1) ≤ αFreq, (39)
where the probability averages over randomization and the privacy mechanism.
Proof. Fix K, then by construction, Pr (Pr(pFRT ≤ α | n ̃ ) > tK | K) ≤ αFreq. Since t∗
LFC ≥
tK, it follows that Pr (Pr(pFRT ≤ α | n ̃ ) > t∗
LFC | K) ≤ αFreq. Since this holds for every K, including the case where K equals the true total successes n+1, the type I error is guaranteed to be no greater than αFreq.
4.2.2 Data-adaptive Calibration with Confidence Sets
We can also restrict the least favorable search to a data-adaptive confidence set for n+1 with high coverage. Specifically, for each K, define QK as in (36), then order the lattice points (a, b) ∈ {0, . . . , n1} × {0, . . . , n0} by decreasing QK(a, b) and take the smallest set AK whose total mass is at least 1 − η, with η ∈ (0, αFreq). Define the (1 − η)-confidence set
C1−η(  ̃n) = {K ∈ {0, . . . , n} :  ̃n ∈ AK}. (40)
Then for α′ = αFreq −η, define t′
K = inf{t : F (K)
Ψ (t) > 1−α′} as the right-continuous (1−α′)
quantile of F (K)
Ψ defined in (37). By setting t∗
Neyman(  ̃n) = supK∈C1−η(  ̃n) t′
K, we obtain the decision rule
δNeyman(  ̃n) =
(
1, Pr(pFRT ≤ α |  ̃n) > t∗
Neyman(n ̃ ),
0, otherwise. (41)
28

Intuitively, this rule spends at most η on potential miscoverage of n+1 and uses the least favorable threshold within the confidence set, which yields type I error control while typically reducing conservativeness. In practice, one may choose η = 0.05 to make C1−η(  ̃n) a 95% confidence set. By construction, we obtain the following results.
Lemma 4.7 (Neyman confidence set). With AK and C1−η(n ̃ ) defined as above, for each K, we have
PKr{K ∈ C1−η(n ̃ )} = PKr{  ̃n ∈ AK} ≥ 1 − η, (42)
where PrK denotes probability under QK.
Theorem 4.8 (Type I error control with the data-adaptive confidence set). Fix η ∈ (0, αFreq) and set α′ = αFreq − η. Then under the sharp null HF
0 , we have
Pr
HF
0
(δNeyman(  ̃n) = 1) ≤ αFreq. (43)
Proof. Fix K and denote Ψ = Pr(pFRT ≤ α | n ̃ ). We first decompose
PKr Ψ > t∗
Neyman(n ̃ ) = PKr Ψ > t∗
Neyman(n ̃ ), n ̃ ∈ AK + PKr Ψ > t∗
Neyman(n ̃ ), n ̃ ∈/ AK
≤ PKr Ψ > t∗
Neyman(  ̃n),  ̃n ∈ AK + PKr (  ̃n ∈/ AK) .
On the event {  ̃n ∈ AK} we have K ∈ C1−η(  ̃n), so by the definition of t∗
Neyman(  ̃n), t∗
Neyman(  ̃n) ≥ t′
K. Hence, Ψ > t∗
Neyman(n ̃ ) ⊆ {Ψ > t′
K} on {n ̃ ∈ AK}. Therefore,
PKr Ψ > t∗
Neyman(  ̃n),  ̃n ∈ AK ≤ PKr (Ψ > t′
K) ≤ α′.
By Lemma 4.7, we have PrK (  ̃n ∈/ AK) ≤ η. Combining the two bounds gives
PKr Ψ > t∗
Neyman(n ̃ ) ≤ α′ + η = αFreq.
Since this holds for every K, including the case where K equals the true total successes n+1, the type I error is bounded by αFreq.
5 Simulation Studies and Real Data Analysis
This section presents simulation studies that illustrate and evaluate the proposed methods. We then apply the methods to the ADAPTABLE trial data (Jones et al. 2021) to compare the effectiveness and safety of the 81 mg and 325 mg aspirin doses under privacy protection. The code for reproducing the results is available at https://github.com/qy-sun/dp_frt.
5.1 Simulation Studies
5.1.1 DP Studies: Assessing Differentially Private Estimation of Fisher’s Randomization p-value
In this subsection, we evaluate the differentially private estimation of Fisher’s randomization p-value conditional on the observed data. We consider different realized data summarized by (n11, n10, n01, n00), with the corresponding non-private p-values reported in Table
29

1. Under varying sample sizes and privacy budgets, we repeat the privatization procedure 1000 times to assess estimation performance.
Table 1: Simulation settings for Cases 1–4 in the DP studies. The counts (n11, n10, n01, n00) summarize the observed outcomes under n ∈ {50, 100, 500}, along with the corresponding nonprivate Fisher’s randomization p-values.
Case n n11 n10 n01 n00 Non-private pFRT
Case 1: No effect
50 12 13 12 13 0.611 100 25 25 25 25 0.579 500 125 125 125 125 0.536
Case 2: Small effect
50 14 11 12 13 0.389 100 28 22 25 25 0.344 500 138 112 125 125 0.141
Case 3: Medium effect
50 16 9 12 13 0.197 100 32 18 25 25 0.113 500 162 88 125 125 5.54 × 10−4
Case 4: Large effect
50 20 5 12 13 1.89 × 10−2 100 40 10 25 25 1.53 × 10−3 500 200 50 125 125 1.11 × 10−12
Figure 3: MSE of the naive and Bayesian denoising estimators for Fisher’s randomization p-value across privacy budgets ε ∈ {0.1, 0.2, 0.5, 1.0} in Cases 1–4 under sample sizes n ∈ {50, 100, 500}. The y-axis scales differ across panels.
30

Figure 3 presents the MSE of different estimators for the Fisher’s randomization p-value across privacy budgets, simulation cases, and sample sizes. The posterior mean, median, and MAP estimators are obtained from the mechanism-aware Bayesian denoising framework, whereas the naive estimator directly perturbs the observed counts without accounting for DP noise. As expected, the MSE of all estimators decreases as either the privacy budget or sample size increases. The Bayesian estimators slightly i-
mprove estimation accuracy relative to the naive approach, particularly under small privacy budgets. Among the Bayesian methods, the posterior mean and posterior median achieve comparable MSE across most settings. The posterior MAP estimator occasionally exhibits larger MSE when ε is small, reflecting its sensitivity to multimodal posterior distributions induced by heavy DP noise. We recommend using the posterior mean estimator for its overall stability and accuracy.
Table 2: Coverage (%) and interval width of the 95% credible sets across privacy budgets ε ∈ {0.1, 0.2, 0.5, 1.0} in Cases 1–4 under sample sizes n ∈ {50, 100, 500}.
ε = 0.1 ε = 0.2 ε = 0.5 ε = 1.0 Case Cov Width Cov Width Cov Width Cov Width
(a) Sample Size n = 50
1: No effect 100 1.000 99.5 0.983 95.2 0.878 95.9 0.674 2: Small 100 1.000 99.2 0.981 93.8 0.870 94.8 0.673 3: Medium 100 1.000 99.1 0.986 95.9 0.825 96.3 0.564 4: Large 100 1.000 97.9 0.980 97.1 0.574 95.5 0.211
(b) Sample Size n = 100
1: No effect 99.8 0.990 96.3 0.940 93.5 0.782 94.4 0.537 2: Small 99.6 0.991 95.7 0.935 96.3 0.787 96.7 0.516 3: Medium 99.0 0.990 95.7 0.920 95.4 0.620 95.1 0.322 4: Large 97.7 0.988 96.5 0.778 95.3 0.173 94.6 0.027
(c) Sample Size n = 500
1: No effect 95.8 0.929 96.2 0.846 94.9 0.500 93.5 0.275 2: Small 95.4 0.899 93.6 0.708 96.4 0.324 95.1 0.162 3: Medium 95.3 0.585 94.2 0.145 94.9 0.009 94.4 0.002 4: Large 95.6 0.062 94.9 0.000 96.0 0.000 97.4 0.000
More importantly, the Bayesian denoising framework provides valid uncertainty quantification for the privatized Fisher’s randomization p-value. Table 2 reports the frequentist coverage and interval width of the 95% credible sets. The coverage of the proposed Bayesian credible sets remains close to the nominal 95% level when ε ≥ 0.2. Under very tight privacy constraints (ε = 0.1), the credible sets are slightly conservative, with coverage approaching 100% and wider intervals. The results confirm th-
at the credible sets produced by the mechanism-aware Bayesian framework maintain appropriate frequentist coverage.
5.1.2 Causal Studies: Evaluating Decision Rules under DP-FRT
In this subsection, we illustrate the decision rules based on the DP-FRT framework in finite-population randomized experiments. Specifically, we start with a finite population possessing both potential outcomes {Yi(1), Yi(0)}n
i=1, then randomly assign n1 units to the
31

treatment group, and finally observe the realized outcome table (n11, n10, n01, n00). Four representative scenarios (Cases 5–8) are reported in the Science table 3. We repeat the randomization and privatization procedures 100 times to evaluate decisions. The DP-FRT is implemented under a uniform prior with nominal significance level α = 0.05.
Table 3: Simulation settings for Cases 5–8 in the causal studies. The counts (N11, N10, N01, N00) summarize the potential outcomes under n ∈ {50, 100, 500}, along with the corresponding treatment effects τ = (N10 − N01)/n.
Case n N11 N10 N01 N00 τ
Case 5: No effect
50 25 0 0 25 0.00 100 50 0 0 50 0.00 500 250 0 0 250 0.00
Case 6: Small effect
50 25 3 0 22 0.06 100 50 5 0 45 0.05 500 250 25 0 225 0.05
Case 7: Medium effect
50 25 8 0 17 0.16 100 50 15 0 35 0.15 500 250 75 0 175 0.15
Case 8: Large effect
50 25 15 0 10 0.30 100 50 30 0 20 0.30 500 250 150 0 100 0.30
Figure 4: Decision proportions of the Bayes risk-optimal rule under budgets ε ∈ {0.1, 0.2, 0.5, 1.0} in Cases 5–8 for sample sizes n ∈ {50, 100, 500} with loss parameters (λ0, λ1, λu) = (1, 1, 0.025).
32

Figure 4 presents the decision proportions of the Bayes risk-optimal rule with abstention under different settings, with loss parameters (λ0, λ1, λu) = (1, 1, 0.025). Each stacked bar shows the relative frequencies of the three possible decisions. Under tight privacy budgets, the proportion of abstentions is substantial, reflecting greater decision uncertainty induced by stronger privacy noise. As the privacy budget or sample size increases, abstentions gradually diminish and the proportion of co-
rrect rejections rises. For large effects (Case 8), nearly all decisions favor rejection when either ε or n is sufficiently large, indicating that the Bayes risk-optimal rule remains sensitive to true treatment effects while effectively managing privacy-induced uncertainty through the abstention option.
Figure 5: Rejection rates of the Bayes risk-optimal rule with abstention under varying loss parameters (λ0, λ1, λu) across ε ∈ {0.1, 0.2, 0.5, 1.0} in Cases 5–8 for n ∈ {50, 100, 500}.
Figure 5 shows the rejection rates of the Bayes risk-optimal rule with abstention under varying loss parameters (λ0, λ1, λu) across privacy budgets and sample sizes. The results highlight the sensitivity of decision outcomes to the relative weighting of rejection, nonrejection, and abstention losses. When λu is small, the rule tends to abstain more and reject less frequently, leading to lower rejection rates across all settings. As λu increases, abstention becomes less likely. Under the sharp null-
 (Case 5), rejection rates remain near zero across all loss parameters. For cases with genuine effects (Cases 6–8), rejection rates increase with both ε and n as expected. The results suggest that the abstention loss λu provides a flexible mechanism for balancing privacy protection and inferential confidence.
5.2 Real Data Analysis
In this section, we illustrate the proposed DP-FRT framework using data from the ADAPTABLE trial (Jones et al. 2021). This is a pragmatic, randomized comparison of two aspirin
33

dosing strategies (81 mg vs. 325 mg daily) for secondary prevention in patients with established atherosclerotic cardiovascular disease. Our primary binary endpoint is the composite of death from any cause, hospitalization for myocardial infarction, or hospitalization for stroke, evaluated under the intention-totreat assignment of 81 mg (n0 = 7540) versus 325 mg (n1 = 7536) aspirin. Let Y (1) and
Y (2) denote the primary composite endpoint and the safety endpoint, respectively, and let
n(k)
ij denote the corresponding 2 × 2 cell counts for endpoint k = 1, 2. At median follow-up, 590 patients in the 81 mg group and 569 patients in the 325 mg group experienced the primary outcome, yielding the 2 × 2 Outcome table
Y (1) = 1 Y (1) = 0 Row sum
Aspirin 325 mg n(1)
11 = 569 n(1)
10 = 6967 7536
Aspirin 81 mg n(1)
01 = 590 n(1)
00 = 6950 7540 Col sum 1159 13,917
We also consider the prespecified safety endpoint of hospitalization for major bleeding with transfusion. For this outcome, there were 53 events in the 81 mg group and 44 events in the 325 mg group, corresponding to
Y (2) = 1 Y (2) = 0 Row sum
Aspirin 325 mg n(2)
11 = 44 n(2)
10 = 7492 7536
Aspirin 81 mg n(2)
01 = 53 n(2)
00 = 7487 7540 Col sum 97 14,979
Both the primary composite endpoint and the safety endpoint are clinically sensitive outcomes, which may reveal information about severe cardiovascular and hemorrhagic events. In what follows, we treat the published 2 × 2 tables as the confidential input and use the proposed mechanism-aware Bayesian denoising framework to obtain posterior summaries of Fisher’s randomization p-value and to derive the corresponding decision rules. Under the non-private FRT, the p-values for the primary composite end-
point and major bleeding were 0.7464 and 0.8452, respectively, providing no evidence against the sharp null hypothesis of no difference between the 325 mg and 81 mg aspirin groups. We subsequently applied the proposed DP-FRT procedure under privacy budgets ε ∈ {0.1, 0.5, 1.0}, where α = 0.05 and loss parameters λ0 = λ1 = 1 and λu = 0.025. As shown in Figure 6 and Table 4, the posterior distributions of the differentially private Fisher’s randomization p-values increasingly concentrate around their-
 non-private counterparts as the privacy budget grows, with most of the posterior mass remaining well away from the rejection region. For the primary composite endpoint, the posterior rejection probabilities Ψ are nearly zero across all privacy levels, yielding a Bayes decision of “not reject”. For major bleeding, the procedure abstains at ε = 0.1 due to greater posterior uncertainty (Ψ = 0.1031), but returns “not reject” decisions for ε ≥ 0.5. Taken together, the DP-FRT analysis is consistent wit-
h the non-private findings from the original trial: 325 mg daily aspirin does not reduce the risk of death, myocardial infarction, or stroke compared with 81 mg, and there is no clear evidence of a difference in major bleeding risk between the two doses.
34

(a) Primary composite endpoint (death, myocardial infarction, or stroke).
(b) Major bleeding requiring transfusion.
Figure 6: Posterior distributions of Fisher’s randomization p-value under privacy budget ε ∈ {0.1, 0.5, 1.0} for two clinical endpoints in the ADAPTABLE trial. The red dashed lines indicate the non-private p-values 0.7464 and 0.8452, respectively.
Table 4: Bayes risk-optimal decisions under the DP-FRT framework for the two ADAPTABLE endpoints, where α = 0.05 and (λ0, λ1, λu) = (1, 1, 0.025).
Endpoint Non-private pFRT Privacy budget Ψ Decision
Primary composite 0.7464
0.1 0.0012 not reject 0.5 0.0000 not reject 1.0 0.0000 not reject
Major bleeding 0.8452
0.1 0.1031 abstain 0.5 0.0000 not reject 1.0 0.0000 not reject
35

6 Discussion
This paper develops a framework for differentially private FRT with binary outcomes, enabling exact and interpretable causal inference under formal privacy guarantees. It introduces approaches for differentially private estimation of Fisher’s randomization p-value and formal decision rules built upon them. These methods maintain finite-sample validity while also supporting uncertainty quantification and adaptive use of the privacy budget. While the proposed approaches focus on the most canonical s-
etting, the framework naturally leads to several methodological extensions and theoretical directions.
Toward bounded outcomes. A direct extension is to randomized experiments with bounded discrete responses, such as ordinal or count data with finite support. Since the sensitivity of bounded discrete statistics remains finite, both the direct perturbation and mechanism-aware Bayesian frameworks can be adapted with minor modifications. For bounded continuous responses, direct application of the binary FRT requires discretization or binning. A principled approach is to treat the binning as a latent p-
rocess and marginalize over the latent contingency tables rather than conditioning on a fixed discretization. This can be embedded within the Bayesian denoising framework, thereby propagating both binning and DP-induced uncertainties.
Toward complex randomized designs. The proposed methods can also be generalized beyond completely randomized experiments to stratified or block-randomized designs, paired or cluster randomization, and rerandomization procedures. In each case, the structure of the assignment mechanism changes the randomization distribution but does not affect the privacy mechanism applied to the observed outcomes. Combining DP-FRT with covariate-adjusted or rerandomized FRTs may improve efficiency, though the resul-
ting randomization distributions will generally depend on more complex sufficient statistics requiring tailored privacy analysis.
Toward testing weak null hypotheses. Another promising direction is to extend the DP-FRT framework to the testing of weak null hypotheses (Ding & Dasgupta 2018, Wu & Ding 2021), which are often more relevant in practice than Fisher’s sharp null. Under weak nulls, exact randomization inference is generally infeasible without additional modeling or asymptotic justification, because unit-level treatment effects are not fully specified. A natural bridge arises through the posterior predictive checking-
 framework (Rubin 1984, Meng 1994), where one computes posterior predictive p-values (ppp) by averaging the randomization p-values over the posterior distribution of unobserved potential outcomes. As emphasized by Ding & Li (2018), the Bayesian interpretation of the Fisher randomization test is particularly valuable for weak nulls. In such settings, posterior averaging over the missing potential outcomes provides a coherent and interpretable way to account for uncertainty. Incorporating this avera-
ging into the DP-FRT might therefore yield a unified framework for privacy-preserving inference under both sharp and weak null hypotheses.
Toward superpopulation inference. While our current formulation assumes a fixed finite population, many practical studies often target superpopulation inference, where the units are viewed as random draws from a larger population. Extending DP-FRT to
36

this context would require accounting for the randomness in the sampling process and integrating sampling design into the inference procedure.
Toward design-based privacy efficiency. Certain special cases naturally induce nonsensitive randomization distributions. For example, under matched-pair randomization, the paired sign test depends only on the number of discordant pairs and not on individual outcomes. Consequently, the randomization distribution itself requires no privacy noise, which can instead be applied only to the observed test statistic. Incorporating designbased structure can substantially reduce privacy cost and motivate fu-
rther exploration of design-adaptive privacy mechanisms.
Toward valid inference under data perturbation. A broader theoretical question concerns whether the validity of hypothesis testing and decision-making can be preserved when data are stochastically perturbed, whether by privacy mechanisms, measurement error, or missingness. Our analysis suggests that explicitly modeling the noise process, as in the Bayesian denoising approach, is crucial for valid uncertainty quantification. Future research could seek to formalize this principle and characterize ge-
neral conditions under which exact or asymptotically valid inference remains possible in the presence of stochastic perturbations.
Conflict of Interest
On behalf of all authors, the corresponding author states that there is no conflict of interest.
References
Abowd, J. M., Ashmead, R., Cumings-Menon, R. et al. (2022), ‘The 2020 Census Disclosure Avoidance System TopDown Algorithm’, Harvard Data Science Review (Special Issue 2).
Awan, J. & Slavkovi ́c, A. (2018), Differentially private uniformly most powerful tests for binomial data, in ‘Proceedings of the 32nd International Conference on Neural Information Processing Systems’, Curran Associates Inc., pp. 4212–4222.
Chow, C. (1957), ‘An optimum character recognition system using decision functions’, IRE Transactions on Electronic Computers EC–6(4), 247–254.
Chow, C. (1970), ‘On optimum recognition error and reject tradeoff’, IEEE Transactions on Information Theory 16(1), 41–46.
Couch, S., Kazan, Z., Shi, K. et al. (2019), Differentially private nonparametric hypothesis testing, in ‘Proceedings of the 2019 ACM SIGSAC Conference on Computer and Communications Security’, ACM, pp. 737–751.
Ding, P. & Dasgupta, T. (2016), ‘A potential tale of two-by-two tables from completely randomized experiments’, Journal of the American Statistical Association 111(513), 157168.
37

Ding, P. & Dasgupta, T. (2018), ‘A randomization-based perspective on analysis of variance: a test statistic robust to treatment effect heterogeneity’, Biometrika 105(1), 45–56.
Ding, P. & Li, F. (2018), ‘Causal inference: A missing data perspective’, Statistical Science 33(2), 214–237.
Dinur, I. & Nissim, K. (2003), Revealing information while preserving privacy, in ‘Proceedings of the Twenty-second ACM SIGMOD-SIGACT-SIGART Symposium on Principles of Database Systems’, ACM, pp. 202–210.
D’Orazio, V., Honaker, J. & King, G. (2015), ‘Differential privacy for social science inference’, Sloan Foundation Economics Research Paper No. 2676160. Available at SSRN: https://ssrn.com/abstract=2676160.
Dwork, C. (2006), Differential privacy, in ‘International Colloquium on Automata, Languages, and Programming’, Vol. 4052, Springer, pp. 1–12.
Dwork, C., McSherry, F., Nissim, K. et al. (2006), Calibrating noise to sensitivity in private data analysis, in ‘Theory of Cryptography Conference’, Vol. 3876, Springer, pp. 265–284.
Dwork, C. & Roth, A. (2014), ‘The algorithmic foundations of differential privacy’, Foundations and Trends in Theoretical Computer Science 9(3–4), 211–407.
Dwork, C., Smith, A., Steinke, T. et al. (2017), ‘Exposed! a survey of attacks on private data’, Annual Review of Statistics and Its Application 4(1), 61–84.
Fisher, R. A. (1935), The Design of Experiments, 1st edn, Oliver and Boyd, Edinburgh.
Gaboardi, M., Lim, H., Rogers, R. et al. (2016), Differentially private chi-squared hypothesis testing: Goodness of fit and independence testing, in ‘International Conference on Machine Learning’, Vol. 48, PMLR, pp. 2111–2120.
Ghazi, E. & Issa, I. (2024), ‘Total variation meets differential privacy’, IEEE Journal on Selected Areas in Information Theory 5, 207–220.
Ghosh, A., Roughgarden, T. & Sundararajan, M. (2012), ‘Universally utility-maximizing privacy mechanisms’, SIAM Journal on Computing 41(6), 1673–1693.
Guha, S. & Reiter, J. P. (2025), ‘Differentially private estimation of weighted average treatment effects for binary outcomes’, Computational Statistics & Data Analysis 207, 108145.
Jones, W. S., Mulder, H., Wruck, L. M. et al. (2021), ‘Comparative effectiveness of aspirin dosing in cardiovascular disease’, New England Journal of Medicine 384(21), 1981–1990.
Karwa, V., Krivitsky, P. N. & Slavkovic ́, A. B. (2017), ‘Sharing social network data: differentially private estimation of exponential family random-graph models’, Journal of the Royal Statistical Society Series C: Applied Statistics 66(3), 481–500.
Kazan, Z., Shi, K., Groce, A. et al. (2023), The test of tests: A framework for differentially private hypothesis testing, in ‘International Conference on Machine Learning’, Vol. 202, PMLR, pp. 16131–16151.
38

Kim, I. & Schrab, A. (2023), ‘Differentially private permutation tests: Applications to kernel methods’, arXiv preprint arXiv:2310.19043 .
Lee, S. K., Gresele, L., Park, M. et al. (2019), ‘Privacy-preserving causal inference via inverse probability weighting’, arXiv preprint arXiv:1905.12592 .
McSherry, F. D. (2009), Privacy integrated queries: An extensible platform for privacypreserving data analysis, in ‘Proceedings of the 2009 ACM SIGMOD International Conference on Management of data’, ACM, pp. 19–30.
Meng, X. L. (1994), ‘Posterior predictive p-values’, The Annals of Statistics 22(3), 11421160.
Mukherjee, S., Mustafi, A., Slavkovic, A. et al. (2024), Improving privacy for respondents in randomized controlled trials: A differential privacy approach, in ‘Data Privacy Protection and the Conduct of Applied Research: Methods, Approaches and their Consequences’, University of Chicago Press.
Niu, F., Nori, H., Quistorff, B. et al. (2022), Differentially private estimation of heterogeneous causal effects, in ‘Conference on Causal Learning and Reasoning’, Vol. 177, PMLR, pp. 618–633.
Nixon, M., Barrientos, A., Reiter, J. P. et al. (2022), ‘A latent class modeling approach for differentially private synthetic data for contingency tables’, Journal of Privacy and Confidentiality 12(1).
Ohnishi, Y. & Awan, J. (2025), ‘Locally private causal inference for randomized experiments’, Journal of Machine Learning Research 26(14), 1–40.
Pen ̃a, V. & Barrientos, A. F. (2025), ‘Differentially private hypothesis testing with the subsampled and aggregated randomized response mechanism’, Statistica Sinica 35, 671691.
Ra ̈is ̈a, O., J ̈alko ̈, J., Kaski, S. et al. (2023), Noise-aware statistical inference with differentially private synthetic data, in ‘International Conference on Artificial Intelligence and Statistics’, Vol. 206, PMLR, pp. 3620–3643.
Rubin, D. B. (1974), ‘Estimating causal effects of treatments in randomized and nonrandomized studies’, Journal of Educational Psychology 66(5), 688–701.
Rubin, D. B. (1984), ‘Bayesianly justifiable and relevant frequency calculations for the applied statistician’, The Annals of Statistics 12(4), 1151–1172.
Seeman, J., Slavkovic, A. & Reimherr, M. (2020), Private posterior inference consistent with public information: A case study in small area estimation from synthetic census data, in ‘International Conference on Privacy in Statistical Databases’, Vol. 12276, Springer, pp. 323–336.
Wu, J. & Ding, P. (2021), ‘Randomization tests for weak null hypotheses in randomized experiments’, Journal of the American Statistical Association 116(536), 1898–1913.
39

---

## Processing Information

- **Processing Library:** Zotero PDFWorker
- **Processing Date:** 2026-02-10T18:14:07.774Z
- **Text Length:** 92882 characters
- **Success:** Text extraction completed
- **PDF Library Used:** Zotero PDFWorker
- **Pages Processed:** 39 of 39
