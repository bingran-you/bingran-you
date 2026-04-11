# PDF Document: Bakoyannis et al. - 2025 - Robustness intervals for competing risks analysis with causes of failure missing not at random.pdf

**File Path:** Bakoyannis et al. - 2025 - Robustness intervals for competing risks analysis with causes of failure missing not at random.pdf

**Processed Date:** 2026-02-10T18:18:56.680Z

**File Size:** 384.96 KB

**Total Pages:** 28

**Extracted Pages:** 28

**PDF Library:** Zotero PDFWorker

**Attachment Item ID:** 3422

**Title:** Robustness intervals for competing risks analysis with causes of failure missing not at random

**Collection:** Large Files > Random Papers

---

## Extracted Text Content

ROBUSTNESS INTERVALS FOR COMPETING RISKS ANALYSIS
WITH CAUSES OF FAILURE MISSING NOT AT RANDOM
Giorgos Bakoyannis
Department of Biostatistics and Health Data Science Indiana University Indianapolis Indianapolis, Indiana, U.S.A. gbakogia@iu.edu
Aristofanis Rontogiannis Department of Biostatistics Brown University Providence, Rhode Island, U.S.A.
aristofanis_rontogiannis@brown.edu
Ying Zhang
Department of Biostatistics University of Nebraska Medical Center Omaha, Nebraska, U.S.A. ying.zhang@unmc.edu
Wanzhu Tu
Department of Biostatistics and Health Data Science Indiana University Indianapolis Indianapolis, Indiana, U.S.A. wtu1@iu.edu
Ann Mwangi
Department of Mathematics, Physics, and Computing Moi University Eldoret, Kenya
annwsum@gmail.com
Constantin T. Yiannoutsos
Department of Epidemiology and Biostatistics City University of New York New York City, New York, U.S.A.
Constantin.Yiannoutsos@sph.cuny.edu
November 27, 2025
ABSTRACT
Analysis of competing risks data is often complicated by the incomplete or selectively missing information on the cause of failure. Standard approaches typically assume that the cause of failure is missing at random (MAR), an assumption that is generally untestable and frequently implausible in observational studies. We propose a novel sensitivity analysis framework for the proportional cause-specific hazards model that accommodates missing-not-at-random (MNAR) scenarios. A sensitivity parameter i-
s used to quantify the association between missingness and the unobserved cause of failure. Regression coefficients are estimated as functions of this parameter, and a simultaneous confidence band is constructed via a wild bootstrap procedure. This allows identification of a range of MNAR scenarios for which effects remain statistically significant; we refer to this range as a robustness interval. The validity of the proposed approach is justified both theoretically, via empirical process theory, -
and empirically, through simulation studies. We apply the method to the analysis of data from an HIV cohort study in sub-Saharan Africa, where a substantial proportion of causes of failure are missing and the MAR assumption is implausible. The analysis shows that key findings regarding risk factors for care interruption and mortality are robust across a broad spectrum of MNAR scenarios, underscoring the method’s utility in situations with MNAR causes of failure.
1 Introduction
Competing risks data are common in many research settings, including observational cohort studies and clinical trials. Analysis is often complicated by incomplete information on the event type, or cause of failure, for a subset of study participants. Causes of missingness include data loss, unrecorded event classifications, and reporting delays. Naïve analytical approaches, such as complete case analysis, or treating missing causes as an additional failure category, can lead to substantially biase-
d estimates and questionable inferences (Lu & Tsiatis 2001, Bakoyannis et al. 2010).
arXiv:2511.20980v1 [stat.ME] 26 Nov 2025

A PREPRINT - NOVEMBER 27, 2025
Accordingly, valid statistical inference in the presence of missing causes of failure requires methods that appropriately account for missingness. Knowing how robust the findings are under different missing data mechanisms becomes a question of great practical importance.
An example arises from the East Africa Regional Consortium of the International epidemiology Databases to Evaluate AIDS (EA-IeDEA), which collects data from HIV care programs in Kenya, Uganda, and Tanzania. The consortium aims to identify factors associated with gaps in care and mortality following the initiation of antiretroviral therapy (ART). In this setting, under-reporting of death is common, leading to misclassified outcomes. Specifically, patients who die outside the care system may be inco-
rrectly recorded as lost to follow-up, creating ambiguity about their true cause of failure. To mitigate this problem, EA-IeDEA conducts community tracing of patients lost to care to verify their vital status. However, even with extensive tracing, many individuals cannot be located, and those successfully traced are not necessarily representative of all lost patients (Brinkhof et al. 2009, 2010). Non-traced individuals may be more likely to have died than those who have been successfully traced (B-
rinkhof et al. 2009, 2010). Consequently, the probability that the cause of failure is missing depends on the unobserved event type itself, thus violating the key missing at random (MAR) assumption and motivating the current research for assessing the robustness of the study findings under missing-not-at-random (MNAR) mechanisms.
The issue of missing causes of failure under MAR has received considerable attention in the literature of competing risks analysis. Nonparametric estimation and two-sample hypothesis testing for the cumulative incidence function under MAR cause of failure has been addressed using multiple imputation (Lee et al. 2011, 2014) and nonparametric pseudolikelihood approaches (Bakoyannis et al. 2019, Bakoyannis 2020). Several papers have addressed the MAR cause of failure problem in the context of modelin-
g the cause-specific hazard function (Goetghebeur & Ryan 1995, Lu & Tsiatis 2001, Gao & Tsiatis 2005, Hyun et al. 2012, Bordes et al. 2014, Nevo et al. 2018, Bakoyannis et al. 2020, Lô et al. 2022, Zhou et al. 2023) and the cumulative incidence function (Bakoyannis et al. 2010, Moreno-Betancur & Latouche 2013, Mao & Lin 2017). Violation of the MAR assumption, which cannot be verified based on the observed data, can invalidate the latter methods. Nevertheless, the problem of regression analysis of -
competing risks data with MNAR cause of failure has not received sufficient attention. Moreno-Betancur et al. (2015) proposed a sensitivity analysis approach for MNAR cause of failure based on a patternmixture model specification. Azizi et al. (2020) proposed a Bayesian sensitivity analysis approach for evaluating the robustness of Bayesian estimates to violations of the assumption of MAR cause of failure. However, existing sensitivity analysis approaches focus on point estimates only and do not c-
onsider the additional uncertainty due to the unknown MNAR scenario. Thus, they cannot be used to directly assess the impact of violations of the MAR assumption on hypothesis testing and the associated conclusions. Furthermore, these approaches use fully parametric competing risks models, which limits their applicability. In addition to these sensitivity analysis approaches, Koley & Dewanji (2022) proposed a methodology for regression analysis with current status competing risks data and MNAR caus-
e of failure. However, to achieve identifiability, this approach imposes strong and untestable assumptions based on the data, and also uses a fully parametric competing risks model.
To assess the robustness of study findings, a number of sensitivity analysis approaches have been proposed for general MNAR and unmeasured confounding problems (Vansteelandt et al. 2006, Todem et al. 2010, Cao et al. 2013, Zhao et al. 2019, Ding & VanderWeele 2016, VanderWeele & Ding 2017, Bonvini & Kennedy 2022). However, these methods are not applicable to the problem of quantifying robustness of competing risks analyses when the causes of failure are MNAR. A review of these approaches in relati-
on to our proposed methodology is provided in the Discussion Section.
In this paper, we propose a principled sensitivity analysis for the semiparametric proportional cause-specific hazards model. The approach constructs a class of MNAR mechanisms, including MAR as a special case, under a patternmixture model specification. The goal is to estimate functional regression coefficients as functions of a sensitivity parameter, which controls the extent of deviation from the MAR assumption. The novelty of this work is twofold. First, unlike previous sensitivity analysis ap-
proaches for this problem (Moreno-Betancur et al. 2015), we account for the additional uncertainty regarding the unknown MNAR scenario by proposing a simultaneous confidence band for the functional regression coefficients. Given that these are infinite-dimensional parameters, we use empirical process theory (Kosorok 2008) to study the methodology for deriving this confidence band. Second, we introduce the concept and methodology for computing a robustness interval, which is defined as the range of-
 MNAR scenarios (i.e., sensitivity parameter values) within which an effect remains statistically significant. This interval provides a measure of the extent of the robustness of conclusions about statistical hypotheses of interest against MNAR causes.
The rest of the paper is organized as follows: We introduce notation, the proposed methodology, and cover the relevant asymptotic theory in Section 2. In addition to establishing the asymptotic properties of the proposed estimator, we evaluate the finite-sample performance of our methodology through extensive simulation experiments. These are presented in Section 3. We illustrate the proposed methodology in a real-world setting by using competing risk data from
2

A PREPRINT - NOVEMBER 27, 2025
the EA-IeDEA study cohort. This analysis, which is presented in Section 4, indicates that our previously published results regarding key factors associated with the hazard of gap in care are quite robust against violations of the MAR assumption. We summarize our methodology and connect our ideas with other sensitivity analysis approaches for general MNAR and unmeasured confounding problems in a brief discussion in Section 5.
2 Methodology
2.1 Notation and data
Consider a cohort study with finite follow-up duration τ . Let T denote the failure time, U the right censoring time, X = T ∧U the observation time, where a∧b = min(a, b), and ∆ = I(T ≤ U ) the event indicator. Denoting the cause of failure by C, we assume, for simplicity and without loss of generality, that C ∈ {1, 2}, although this methodology can be trivially adapted for situations with more than two causes of failure. In our motivating application, C = 1
denotes gap in care and C = 2 death. In addition, let Z ∈ Z ⊂ Rp be the vector of covariates of scientific interest. In a setting with missing causes of failure, we introduce the observed cause indicator R, with R = 1 if the cause of failure is observed and R = 0 otherwise. In our setting the censoring status is always observed, so that if R = 0, then
∆ = 1. In some settings, an auxiliary covariate vector A ∈ A ⊂ Rq, which includes covariates that may be related to the probability of missingness, is also observed. The observable data from a study of n individuals are independent and identically distributed copies of
Di =
{ (Xi, ∆i, Ci, Zi, Ai, Ri) if Ri = 1 and ∆i = 1
(Xi, ∆i, Zi, Ai, Ri) otherwise , i = 1, . . . , n,
where the cause of failure is only observed for those with ∆i = 1 and Ri = 1. To facilitate the presentation of the methods, we introduce some further notation. Let ∆ij = I(∆i = 1, Ci = j), j = 1, 2, be the indicator that the ith individual experienced the jth cause of failure. In addition, we define the counting processes Ni(t) = I(Xi ≤ t, ∆i = 1), t ∈ [0, τ ], and the cause-specific counting process Nij(t) = I(Xi ≤ t, ∆ij = 1) = ∆ijNi(t), j = 1, 2. Finally, we define the at-risk process Yi(t) = -
I(Xi ≥ t), t ∈ [0, τ ].
2.2 Competing risk analysis with MAR cause of failure
In this work, we focus on the cause-specific hazard function, which is defined, conditionally on covariates Z, as
λj(t; z) = lhi↓m0
P (t ≤ T < t + h, C = j|T ≥ t, Z = z)
h , t ∈ [0, τ ], j = 1, 2.
We impose the semiparametric proportional hazards model
λj (t; z) = λ0,j(t) exp(β′0,j z) t ∈ [0, τ ], j = 1, 2, (1)
where λ0,j (t) is the unspecified baseline cause-specific hazard corresponding to the jth cause of failure. In the absence of missingness, the parameters in model (1) can be estimated by maximizing the logarithm of the partial likelihood function
ln(β) =
2
∑
j=1
n
∑
i=1
∫τ
0
[
β′j Zi − log
{n ∑
l=1
Yl(t) exp(β′jZl)
}]
dNij (t),
where β = (β′1, β′2)′, or equivalently, by solving the partial score equation
Gn,j (βj ) =
n
∑
i=1
∫τ
0
{
Zi −
∑n
l=1 ZlYl(t)eβ′
j Zl
∑n
l=1 Yl(t)eβ′
j Zl
}
dNij(t) = 0, j = 1, 2.
When there are missing causes of failure however, Gn,j(βj), j = 1, 2, cannot be computed. If cause of failure is MAR
conditionally on the fully observed variables, W = (X, Z′, A′)′ and ∆ = 1, then
P (C = 2|R = 0, ∆ = 1, W ) = P (C = 2|R = 1, ∆ = 1, W ). (2)
In other words, the model for the probability of the cause of failure for the missing cases is the same as that for the observed cases. For simplicity and following Bakoyannis et al. (2020), we impose a parametric logit model P (C = 2|R = 1, ∆ = 1, W ) = g(γ′0W ̃ ), where g(x) = ex/(1 + ex), γ0 ∈ Γ ⊂ Rp+q+2, and W ̃ = (1, W ′)′. The
proposed approach is trivially applicable with a broad class of models for P (C = 2|R = 1, ∆ = 1, W ), for example, a flexible logistic regression model that incorporates regression splines for the continuous variables (Wu et al. 2025). The challenge arises in cases where the MAR assumption does not hold, since the equality (2) is no longer valid and thus the model g(γ′0W ̃ ), which is established on individuals with observed causes of failure, cannot be used for
predicting the missing causes. Consequently, under MNAR, methods that assume that cause of failure is MAR are expected to lead to biased estimates.
3

A PREPRINT - NOVEMBER 27, 2025
2.3 Identification region under MNAR
In this subsection, we present a sensitivity analysis approach under MNAR cause of failure using a sensitivity parameter which quantifies the extent to which the MAR assumption is violated. This parameter can receive a pre-specified range of values, which can be elicited from subject-matter experts or study investigators. Under this range, a plausible set of regression coefficients can be estimated.
The proposed approach assumes a class of MNAR mechanisms under a pattern-mixture model specification. A natural choice for such a class is
M = {P (C = 2|R = 0, ∆ = 1, W ) = g{γ′0W ̃ + s(η, W )} : η ∈ H ⊂ Rr},
for a finite r. In this framework, the departure from MAR is quantified by the term s(η, W ). This term depends on the fully observed variables W and the non-estimable sensitivity parameter η. For the remainder of this paper, to simplify the presentation of the methodology and facilitate interpretability, we focus on the special subset of this class
M ̃ = {P (C = 2|R = 0, ∆ = 1, W ) = g(γ′0W ̃ + η) : η ∈ [a, b] ⊂ R} ⊂ M.
Under this subclass M ̃ , η = 0 corresponds to the MAR mechanism, while η 6= 0 implies MNAR. In our motivating study, η is the log odds ratio of death for those with missing vital status versus those with observed vital status, so that
exp(η) = P (C = 2|R = 0, ∆ = 1, W )
1 − P (C = 2|R = 0, ∆ = 1, W )
/ P (C = 2|R = 1, ∆ = 1, W )
1 − P (C = 2|R = 1, ∆ = 1, W ) .
The sensitivity parameter η takes values in a set [a, b], which is selected by subject-matter experts or study investigators. In the next subsection we consider an approach that is useful in situations where obtaining a plausible range of values for η is not possible or desirable.
Given that the cause of failure C is not observed for the missing cases (i.e., observations with R = 0 and ∆ = 1), η cannot be estimated from the data. For given η and the parameter γ0, which is estimable from the complete data, we define the expected jump processes
N ̃2(t; γ0, η) = {R∆2 + (1 − R)g(γ′0W ̃ + η)}N (t)
and N ̃1(t; γ0, η) = [R∆1 + (1 − R){1 − g(γ′0W ̃ + η)}]N (t), t ∈ [0, τ ]. If the cause of failure is missing, the size of the
jump of these processes is equal to the model-based probabilities of death g(γ′0W + η) and gap in care 1 − g(γ′0W + η),
respectively. Otherwise, these jump sizes are equal to 1 or 0, corresponding to the values of ∆2 and ∆1.
For a given value of η under the class M ̃ (i.e., for a given MNAR mechanism), the population regression parameter,
denoted by βj∗(η), j = 1, 2, is the root of the equation
G ̃j∗(βj∗(η); γ0, η) = E
(
∫τ
0
[
Z − E{ZY (t)eβ∗
j (η)′Z }
E{Y (t)eβ∗
j (η)′Z }
]
dN ̃j(t; γ0, η)
)
= 0, j = 1, 2.
The corresponding set of population parameters under the entire class of MNAR mechanisms M ̃ is Bj∗ ≡ {βj∗(η) : η ∈ [a, b]}, j = 1, 2. Such sets are known as ignorance regions (Vansteelandt et al. 2006) or identification regions (Bonvini & Kennedy 2022) in the general sensitivity analysis literature. In this paper, we use the latter term. The functional regression coefficients can be consistently estimated using our proposed functional partial pseudo-score estimating equations
G ̃n,j (βˆn,j (η); γˆn, η) = 1
n
n
∑
i=1
∫τ
0
{
Zi −
∑n
l=1 ZlYl(t)eβˆn,j (η)′Zl
∑n
l=1 Yl(t)eβˆn,j(η)′Zl
}
dN ̃ij(t; γˆn, η) = 0, (3)
for j = 1, 2 and η ∈ [a, b], where γˆn is the maximum likelihood estimate of γ0 based on the complete cases. The
corresponding set of regression coefficient estimates under the entire class of MNAR mechanisms M ̃ is
Bn,j ≡ {βˆn,j(η) : η ∈ [a, b]}, j = 1, 2.
Computation of βˆn,j(η), η ∈ [a, b], can be practically implemented in two stages. In the first stage, equation (3) is solved for a finite subset {a, η1, . . . , ηM , b} of the sensitivity parameter set [a, b], for a sufficiently large M . In the
second stage, computation of βˆn,j(η), for any η ∈ [a, b], can be performed using linear or polynomial interpolation based on the values βˆn,j(a), βˆn,j(η1), . . . , βˆn,j(ηM ), βˆn,j(b). In Appendix A we argue that the function βj∗(η), η ∈ [a, b], is continuous.
4

A PREPRINT - NOVEMBER 27, 2025
Next, we construct a confidence band for a linear combination K′βj∗(η), for K ∈ Rp, which can be directly applied
to construct a confidence band for the lth functional regression coefficient βj∗,l(η), for l = 1, . . . , p, by choosing K to
be the indicator of the lth coordinate of βj∗(η). Let ψˆij(η), i = 1, . . . , n, j = 1, 2, denote the empirical version of the influence function ψij(η) of the proposed estimator (see Theorem 2 in Section 2.5 below and Appendix B for explicit
formulas for ψˆij (η)). A simultaneous 100(1−α)% confidence band for K′βj∗(η), η ∈ [a, b], can be computed based on
the following wild bootstrap approach, which approximates the sampling distribution of the proposed estimator. Wild bootstrap avoids repeated model refitting while maintaining the correct covariance structure under complex censoring and missingness mechanisms, as justified by Theorem 3 in Section 2.5.
Select a large integer S, and for s ∈ {1, . . . , S} follow the steps:
Step 1. Simulate i.i.d. random variables ξ(s)
1 , . . . , ξ(ns) from N (0, 1).
Step 2. Based on ξ(s)
1 , . . . , ξ(ns), calculate
ˆG(s)
n,j(η) = √1n
n
∑
i=1
ψˆij (η)ξ(s)
i , η ∈ [a, b],
and then supη∈[a,b] |K′ ˆG(s)
n,j (η)|.
When this process is completed, the empirical 100(1 − α)th percentile of the sample
sup
η∈[a,b]
|K′ ˆG(1)
n,j(η)|, . . . , sup
η∈[a,b]
|K′ ˆG(S)
n,j (η)|,
denoted by cˆα,j is be computed. From this, the simultaneous confidence band is
K′βˆn,j (η) ± cˆα,j
√n , η ∈ [a, b].
Setting S = 1000 was shown to perform well in simulation studies (Section 3). A conservative 100(1−α)% confidence
interval for the identification region {K′βj∗(η) : η ∈ [a, b]} can be computed as
[
inf
η∈[a,b]{K′βˆn,j (η)} − cˆα,j
√n , sup
η∈[a,b]
{K′βˆn,j (η)} + cˆα,j
√n
]
.
Given that the asymptotic coverage probability of the simultaneous confidence band is at least 1 − α, as justified by Theorem 3 in Section 2.5, the asymptotic coverage probability of the above confidence interval is at least 1 − α.
2.4 Robustness interval under MNAR
In this subsection, we present an alternative sensitivity analysis approach for situations where a sensitivity parameter range [a, b] cannot be prespecified. The main idea is to estimate, for all statistically significant effects in the MAR analysis, the largest absolute value of the sensitivity parameter (i.e., the most extreme violation of the MAR assumption) under which statistical significance is preserved. This maximal value is used to specify an entire range of MNAR mechanisms (i.e., sensiti-
vity parameter values) within which statistical significance is preserved. We call this range a robustness interval.
For computational convenience, we consider symmetric (around 0) robustness intervals here. Before providing the approach for the computation of these intervals, we introduce some further notation. For any nonnegative real number η ̄ ≥ 0, let cˆα,j(η ̄) denote the empirical 100(1 − α)th percentile for the 100(1 − α)% simultaneous confidence band
for K′βj∗(η) for all η ∈ [−η ̄, η ̄], computed based on the wild bootstrap approach described above. Also, define the 100(1 − α)% confidence interval
In,j(K; η ̄, α) ≡
[
inf
η∈[−η ̄,η ̄]{K′βˆn,j (η)} − cˆα,j(η ̄)
√n , sup
η∈[−η ̄,η ̄]
{K′βˆn,j (η)} + cˆα,j(η ̄)
√n
]
,
and the corresponding identification region Bj∗(K; η ̄) ≡ {K′βj∗(η) : η ∈ [−η ̄, η ̄]}. Note that, both In,j(K; η ̄, α)
and Bj∗(K; η ̄) are monotonic in η ̄ in the sense that if η1 ≤ η2, then In,j(K; η1, α) ⊂ In,j(K; η2, α), for any sample
size n, and Bj∗(K; η1) ⊂ Bj∗(K; η2). Our goal is to compute the largest value η ̃n ≥ 0, such that the 100(1 − α)%
5

A PREPRINT - NOVEMBER 27, 2025
confidence interval In,j(K; η ̃n, α) for the corresponding identification region Bj∗(K; η ̃n) does not include zero. Thus,
η ̃n is defined as
η ̃n = sup
{
η ̄ : η ̄ ≥ 0,
[
inf
η∈[−η ̄,η ̄]{K′βˆn,j(η)} − cˆα,j (η ̄)
√n
]
×
[
sup
η∈[−η ̄,η ̄]
{K′βˆn,j (η)} + cˆα,j(η ̄)
√n
]
≥ǫ
}
,
for a small ǫ > 0. A positive value for the product of the two factors in brackets above indicates that the limits of the 100(1 − α)% confidence interval have the same sign and, thus, the confidence interval does not include zero.
The robustness interval is [−η ̃n, η ̃n], in the scale of η, or, equivalently, [e−η ̃n , eη ̃n ], in the odds ratio scale. This interval is the range of MNAR scenarios within which statistical significance is preserved, based on the observed data
D1, . . . , Dn. To see the validity of this interpretation, suppose that 0 ∈ Bj∗(K; η1), for some η1 ∈ [0, η ̃n]. This implies
that, 0 ∈ Bj∗(K; η ̄) for all η ̄ ≥ η1, by the monotonicity of Bj∗(K; η ̄) in η ̄. Then, the probability of a Type I error is
P
(∪η ̄∈[η1,η ̃n] {0 ∈/ In,j (K; η ̄, α)}) = P (0 ∈/ In,j (K; η1, α))
= 1 − P (0 ∈ In,j(K; η1, α))
≤ 1 − P (Bj∗(K; η1) ⊂ In,j(K; η1, α))
≤ α + o(1),
where the first equality follows from the monotonicity of In,j(K; η ̄, α) in η ̄, and the last inequality from Theorem 3 below, which implies that
1 − α + o(1) ≤ P
(
K′βˆn,j (η) − cˆα,j (η1)
√n ≤ K′βj∗(η)
≤ K′βˆn,j (η) + cˆα,j (η1)
√n for all η ∈ [−η1, η1]
)
≤ P (Bj∗(K; η1) ⊂ In,j(K; η1, α)) .
Thus, the asymptotic Type I error is at most α. The computation of η ̃n can be achieved using a non-derivative-based root-finding algorithm to find the largest root of the equation
fn,j(η ̄; K, ǫ) ≡
[
inf
η∈[−η ̄,η ̄]{K′βˆn,j(η)} − cˆα,j (η ̄)
√n
]
×
[
sup
η∈[−η ̄,η ̄]
{K′βˆn,j(η)} + cˆα,j (η ̄)
√n
]
−ǫ=0
with respect to η ̄ within a search set [0, ηmax], ηmax > 0, given a small value for ǫ. The applicability of these algorithms to this problem is guaranteed by the fact that the function fn,j(η ̄; K, ǫ) is continuous in η ̄, by the continuity of the proposed estimator in the sensitivity parameter η. In the application, we search for roots in the set
[0, ηmax] = [0, 5], which covers a very broad range of MNAR scenarios, with ǫ = 10−8, using the R function
uniroot.all. If fn,j(0; K, ǫ) × fn,j(ηmax; K, ǫ) < 0, that is, if there is a sign change in fn,j(η ̄; K, ǫ) on the search set [0, ηmax], then there exists at least one root in [0, ηmax], by the intermediate value theorem. Otherwise, if fn,j(0; K, ǫ) × fn,j(ηmax; K, ǫ) > 0, there are no roots in [0, ηmax] since there can only be one sign change in fn,j(η ̄; K, ǫ), from positive to negative, on any search set. This is because once the confidence interval captures zero, i.e., if 0 ∈ In,j(K; η1, α) fo-
r some η1 > 0 and thus fn,j(η1; K, ǫ) < 0, then zero will be included in any other confidence interval over a wider sensitivity parameter range, i.e. 0 ∈ In,j(K; η2, α) and fn,j(η2; K, ǫ) < 0 for all η2 ≥ η1. Therefore, when there are no roots in [0, ηmax], the robustness interval is defined either as the empty set ∅, if
fn,j(0; K, ǫ) < 0 (i.e., effect is not significant in the MAR analysis), or equal to [−ηmax, ηmax] (or [e−ηmax, eηmax ] in the odds ratio scale), if fn,j(ηmax; K, ǫ) > 0 (i.e., effect remains significant over the entire search set [−ηmax, ηmax]).
A naïve approach to estimating robustness intervals is to compute the 100(1 − α)% confidence band over the broadest set [−ηmax, ηmax] and identify the range of η values where the band excludes zero. However, this approach is conservative, tending to yield unnecessarily narrower robustness intervals because, by definition, cˆα,j(ηmax) ≥ cˆα,j(η ̄), for any η ̄ ∈ [0, ηmax], and thus
[
inf
η∈[−η ̄,η ̄]{K′βˆn,j (η)} − cˆα,j (ηmax)
√n , sup
η∈[−η ̄,η ̄]
{K′βˆn,j (η)} + cˆα,j (ηmax)
√n
]
⊃ In,j(K; η ̄, α),
for all η ̄ ∈ [0, ηmax]. Our proposed method yields wider robustness intervals while controlling the Type I error in the strong sense asymptotically, as shown previously. The inferior performance of the naïve approach for computing robustness intervals is illustrated in our real data analysis (Section 4)
6

A PREPRINT - NOVEMBER 27, 2025
2.5 Asymptotic theory
The theorems presented in this subsection guarantee the validity of the proposed methodology under a set of realistic regularity conditions. These conditions along with the proofs of the following theorems are listed in Appendix A. Before presenting Theorem 1, consider the notation a→s∗ to indicate outer almost sure convergence (Kosorok 2008). Let βˆn,j(·) and βj∗(·) denote the functional regression coefficients βˆn,j(η) and βj∗(η), η ∈ [a, b], as whole functions as
opposed to their values for a particular choice of η. Theorem 1 below justifies the validity of the proposed estimator of the functional regression coefficient.
Theorem 1 Assume that regularity conditions C1–C6 listed in Appendix A hold. Then,
sup
η∈[a,b]
∥ ∥ ∥
βˆn,j (η) − βj∗(η)
∥ ∥ ∥
a→s∗ 0, j = 1, 2.
Moreover, if the assumed class M ̃ includes the true probability P (C = 2|R = 0, ∆ = 1, W = w), then
inf
η∈[a,b]
∥ ∥ ∥
βˆn,j (η) − β0,j
∥ ∥ ∥
a→s∗ 0, j = 1, 2.
Theorem 1 states that the proposed estimator βˆn,j(·) is strongly uniformly consistent for the parameter βj∗(·), j = 1, 2.
This justifies the use of the proposed estimator for sensitivity analysis purposes. The second statement implies that the sets Bn,j will contain the true parameters β0,j, j = 1, 2, almost surely asymptotically.
The next theorem provides the asymptotic distribution of the estimator βˆn,j(·). The influence function of this estimator,
denoted by ψij (η), i = 1, . . . , n, j = 1, 2 and η ∈ [a, b], is provided in Appendix A.
Theorem 2 Assume that regularity conditions C1–C6 listed in Appendix A hold. Then,
√n
{βˆn,j (η) − βj∗(η)
}
= √1n
n
∑
i=1
ψij (η) + ǫn,j(η), j = 1, 2, η ∈ [a, b]
where E{ψj(η)} = 0 and E‖ψj(η)‖2 < ∞, η ∈ [a, b], and supη∈[a,b] ‖ǫn,j(η)‖ = op(1), j = 1, 2. Moreover, the classes of influence functions {ψj(η) : η ∈ [a, b]}, j = 1, 2, are Donsker.
Theorem 2 implies that √n{βˆn,j(·) − βj∗(·)} converges weakly to a (vector-valued) tight zero mean Gaussian process
Gj(·), with covariance function σj(η1, η2) = E{ψj(η1)ψ′j (η2)}. This covariance can be consistently estimated by σˆn,j (η1, η2) = n−1 ∑n
i=1 ψˆij (η1)ψˆi′j (η2), where ψˆij are the empirical versions of the influence functions. Explicit
formulas for these are provided in Appendix B.
Next, define the multiplier empirical process Gˆ n,j(η) = n−1/2 ∑n
i=1 ψˆij(η)ξi, where ξi are standard normal variables
that are independent of the data Dn = (D1, . . . , Dn). Theorem 3 justifies the validity of the proposed wild bootstrap
approach for computing simultaneous confidence bands for any linear combination K′βj∗(η), η ∈ [a, b]. Therefore, it
also justifies the confidence intervals for the identification region and the proposed robustness intervals.
Theorem 3 Assume that regularity conditions C1–C6 listed in Appendix A hold. Then, for any fixed vector K ∈ Rp, we have that
sup
x∈A
∣ ∣ ∣ ∣ ∣
P
{
sup
η∈[a,b]
|K′Gˆ n,j(η)| ≤ x
∣ ∣ ∣ ∣
Dn
}
−P
{
sup
η∈[a,b]
|K′Gj(η)| ≤ x
}∣ ∣ ∣ ∣ ∣
→p 0, j = 1, 2,
for any closed set A ⊂ R ∪ {−∞, ∞}.
3 Simulation Studies
To evaluate the finite-sample performance of the proposed approach, we conducted a series of simulation experiments. We considered two causes of failure, with C ∈ {1, 2}, and one covariate Z ∼ N (0, 1). The competing risks data were
simulated based on the cause-specific hazard functions λj (t; Z) = p0λp0
0 tp0−1 exp(β0,jZ), j = 1, 2, where p0 = 1.5,
λ0 = 1.5, β0,1 = 0.5, and β0,2 = −1, while the right censoring time U was simulated from Exp(0.7). This simulation setup led to an average proportion of C = 1 among the non-right-censored observations of 49.0%, with the average right-censoring rate being 20.5%. The nonmissingness indicators R were simulated according to the following four MNAR scenarios:
7

A PREPRINT - NOVEMBER 27, 2025
1. logit{P (R = 1|∆ = 1, X, Z, C)} = 0.3 + 0.5 × I(C = 2). 2. logit{P (R = 1|∆ = 1, X, Z, C)} = 0.3 + I(C = 2). 3. logit{P (R = 1|∆ = 1, X, Z, C)} = 0.3 − X + Z + 0.5 × I(C = 2). 4. logit{P (R = 1|∆ = 1, X, Z, C)} = 0.3 − X + Z + I(C = 2).
These scenarios led to average missing cause of failure rates of 48.6%, 54.2%, 56.3%, and 61.4%, respectively. For each scenario, we simulated 1,000 datasets and considered the sample sizes n = 200, 400, 800. The data were analyzed based on the partial pseudolikelihood approach by Bakoyannis et al. (2020), which assumes MAR, and the proposed sensitivity analysis methodology. For the proposed methodology, we assumed the pattern-mixture model
logit{P (C = 2|∆ = 1, X, Z, R = 0)} = γ′0W ̃ + η, η ∈ [−1, 1],
where W ̃ = (1, X, Z)′. Under this simulation setup, the corresponding true model is
logit{P (C = 2|∆ = 1, X, Z, R = 0)} = 0.5Z + log
{ 1 − P (R = 1|∆ = 1, X, Z, C = 2) 1 − P (R = 1|∆ = 1, X, Z, C = 1)
}
+ η0,
where η0 ∈ {0.5, 1}, depending on the scenario. Thus, our assumed pattern-mixture model was correctly specified under missingness scenarios 1 and 2, but misspecified in scenarios 3 and 4. A similar model was considered in the implementation of the approach by Bakoyannis et al. (2020), with the exception that η = 0, which corresponds to the
MAR scenario. The evaluation metrics in this simulation study were the pointwise bias 1000−1 ∑1000
s=1 βˆn,1,s(η) −
β1∗(η), η ∈ {−1, −0.5, 0, 0.5, 1}, where the subindex s indicates the simulated dataset number, the mean minimum
absolute deviation, defined as 1000−1 ∑1000
s=1 infη∈[−1,1] |βˆn,1,s(η) − β0,1|, and the empirical coverage probabilities
of the proposed 95% simultaneous confidence band for β1∗(η), η ∈ [−1, 1], and the proposed 95% confidence interval
for the identification region. For comparison, we also computed the bias and 95% confidence interval for the true β0,1 under the MAR assumption.
The results from the simulation study are presented in Table 1. In all scenarios, the pointwise bias was close to zero and the mean minimum absolute deviation was small and decreased with sample size n. This provides empirical evidence for the validity of the proposed estimator and its robustness against some degree of misspecification of the patternmixture model logit{P (C = 2|∆ = 1, X, Z, R = 0)} (scenarios 3 and 4). The empirical coverage probabilities for the proposed 95% simultaneous confiden-
ce bands and the 95% confidence intervals for the identification region were close to the nominal level, regardless of the correctness of the specification of the pattern-mixture model. An exception was a somewhat lower coverage probability for the band when n = 200, the smallest sample size considered here (empirical coverage probability range: 0.919 to 0.929). This was also observed for the confidence interval of the identification region in scenario 4 (empirical coverage probability: 0.926). Th-
is is expected to be due to the smaller sample size in addition to the large proportion of missingness (range of average missingness rate: 48.6% to 61.4%). The estimator that assumes MAR (Bakoyannis et al. 2020) exhibited large bias (bias range: 13.8% to 48.6%) and the corresponding 95% confidence intervals provided poor coverage (empirical coverage probability range: 0.386 to 0.908). This suboptimal performance was more pronounced with higher missingness rates, more extreme violation of the MAR a-
ssumption (scenarios 2 and 4 where η0 = 1), and larger sample sizes n. The last trend is attributed to the fact that the width of the confidence interval reduces with sample size, and also the inconsistency of the estimator due to the violation of the MAR assumption. These result in a coverage probability going to zero as n → ∞.
4 Real Data Analysis
4.1 Cohort description
We applied the proposed method to data from EA-IeDEA, which monitored people living with HIV receiving care at 30 clinics in Kenya. The analytic cohort included 24,372 patients for whom antiretroviral therapy (ART) was initiated. Of these, 15,672 (64.3%) were female, and the median (interquartile range, IQR) age and CD4 cell count at ART initiation were 36.9 (30.4–45.1) years and 178 (75–285) cells/μL, respectively. During follow-up, 91 patients (0.4%) were passively reported to have died, while 1-
8,439 (75.7%) missed a scheduled clinic visit and were flagged as lost to clinic. Among those lost, 6,608 (35.8%) were successfully traced in the community, and 1,856 (28.1%) were confirmed deceased. The cause of failure remained unobserved for 11,823 (63.8%) patients who were lost to clinic and were not traced. The descriptive characteristics of the study cohort are summarized in Table 2.
4.2 Model specification
We fit the cause-specific proportional hazards model described in Section 2, while accounting for dependence between outcomes of patients receiving care in the same clinic (clustering) following prior work on clustered competing risk
8

A PREPRINT - NOVEMBER 27, 2025
Table 1: Results from the simulation study. (Bias∗(η): Pointwise bias 1000−1 ∑1000
s=1 βˆn,1,s(η) − β1∗(η), η ∈
{−1, −0.5, 0, 0.5, 1}; MAD: mean minimum absolute deviation defined as 1000−1 ∑1000
s=1 infη∈[−1,1] |βˆn,1,s(η) −
β0,1|; CPBand: Coverage probability of the 95% simultaneous confidence band for β1∗(η), η ∈ [−1, 1],; CPIR: Cover
age probability of the 95% confidence interval for the identification region; Bias: Bias of the estimate of β0,1 assuming MAR; CP: Coverage probability of the 95% confidence interval for β0,1 assuming MAR)
Proposed Approach MAR
Bias∗(η)
Scenario n -1 0.5 0 0.5 1 MAD CPBand CPIR Bias CP 1 200 0.006 0.007 0.009 0.011 0.013 0.057 0.928 0.942 0.077 0.908 400 0.000 0.000 0.001 0.002 0.003 0.027 0.938 0.945 0.070 0.897 800 0.000 0.000 0.001 0.001 0.002 0.011 0.959 0.971 0.069 0.883
2 200 0.012 0.013 0.015 0.018 0.021 0.093 0.929 0.944 0.165 0.834 400 0.002 0.002 0.003 0.004 0.005 0.055 0.942 0.955 0.153 0.761 800 0.001 0.001 0.001 0.002 0.003 0.035 0.960 0.971 0.151 0.608
3 200 0.011 0.013 0.015 0.019 0.024 0.054 0.923 0.934 0.121 0.872 400 -0.001 0.000 0.002 0.005 0.008 0.024 0.933 0.943 0.108 0.856 800 -0.003 -0.001 0.001 0.004 0.006 0.012 0.942 0.953 0.107 0.806
4 200 0.023 0.023 0.026 0.030 0.035 0.108 0.919 0.926 0.243 0.750 400 0.006 0.007 0.008 0.011 0.014 0.071 0.930 0.935 0.225 0.638 800 0.002 0.004 0.006 0.009 0.013 0.049 0.955 0.963 0.223 0.386
Table 2: Descriptive characteristics the EA-IeDEA study population. (Age: Age at ART initiation; CD4: CD4 cell count at ART initiation; Disclosure: Disclosure of the HIV status)
Cause of failure
In care (censored) Gap in care Death Missing
(N = 5842) (N = 4752) (N = 1955∗) (N = 11823)
n (%) n (%) n (%) n (%) Gender Female 3770 (64.5) 3044 (64.1) 976 (49.9) 7882 (66.7) Male 2072 (35.5) 1708 (35.9) 979 (50.1) 3941 (33.3) Disclosure No 2244 (38.4) 1719 (36.2) 535 (27.4) 4403 (37.2) Yes 3598 (61.6) 3033 (63.8) 1420 (72.6) 7420 (62.8)
Median (IQR) Median (IQR) Median (IQR) Median (IQR) Age (years) 39.6 (33.2, 47.5) 35.4 (28.8, 42.6) 39.1 (32.3, 48.2) 35.8 (29.3, 43.8) CD4 (cells/μl) 200 (102, 297) 176 (74, 286) 67 (22, 168) 183 (81, 291) ∗ Includes 91 passively reported deaths and 1864 actively ascertained deaths through outreach
9

A PREPRINT - NOVEMBER 27, 2025
Table 3: Analysis of the EA-IeDEA data assuming the range [a, b] = [−1, 1] for the sensitivity parameter. (IR: Identification region for the cause-specific hazard ratio; CI: Confidence interval for the identification region of the causespecific hazard ratio; Age: Age at ART initiation; CD4: CD4 cell count at ART initiation; Disclosure: Disclosure of the HIV status)
IR 95% CI Gap in care
Gender (male vs. female) [0.98, 1.05] [0.88, 1.17] Age (per 10 years) [0.76, 0.79] [0.71, 0.84] CD4 cell count (per 100 cells/μl) [1.02, 1.06] [1.01, 1.08] Disclosure (yes vs. no) [0.88, 0.90] [0.79, 1.00]
Death
Gender (male vs. female) [1.36, 1.48] [1.20, 1.67] Age (per 10 years) [1.01, 1.11] [0.94, 1.19] CD4 cell count (per 100 cells/μl) [0.59, 0.68] [0.56, 0.73] Disclosure (yes vs. no) [1.16, 1.34] [0.98, 1.57]
data with MAR cause of failure (Zhou et al. 2023). We operated under a working-independence assumption along with a version of the influence function to account for clustering in standard errors and 95% confidence bands and intervals. More details on how we accounted for the clustered nature of the data in this setting are presented in Appendix C. Predictors used in the analysis include age and CD4 cell count at the start of ART, plus gender and disclosure of the HIV status.
4.3 Identification regions
To compute the identification regions we assumed that the sensitivity parameter η, which characterizes the association between being untraced and dying (i.e., deviation from the MAR assumption), falls within [−1, 1], corresponding to
odds ratios of death for those not traced vs those traced between e−1 = 0.37 and e1 = 2.72. Odds ratios over 1 imply an elevated mortality risk among the lost patients who were not traced in the community compared to those who were traced, while an odds below 1 implies the opposite. An odds ratio of 1 is equivalent to the MAR assumption (equal risk of death among patients who were traced and those who were not traced). These odds ratios indicate a range of marginal probabilities of death among the-
 non-successfully traced (i.e., with missing cause of failure) patients, i.e., Pˆ(C = 2|R = 0; γˆn, η) with η ∈ [−1, 1], from 0.100 to 0.372 (marginal probability of death under MAR: 0.210), which is considered realistic for this application. The estimator of these marginal probabilities is provided in Appendix D.
Figure 1 shows the estimated functional cause-specific hazard ratios (HRs) for CD4 cell count as functions of η, together with the simultaneous 95% confidence bands. Table 3 summarizes identification regions (IRs) and their 95% confidence intervals for all covariates. For the gap-in-care analysis, higher CD4 counts were associated with a slightly increased hazard. The limits of the IR are the minimum and maximum of the estimated functional cause-specific hazard ratio per 100 CD4 cells/μl (solid bl-
ue line) over the range [−1, 1] for η, i.e., IR = [1.02, 1.06], as described in Section 2.3. The corresponding 95% confidence interval for the IR of the cause-specific hazard ratio of CD4 cell count is [1.01, 1.07] in the gap-in-care analysis. Similarly, the CD4 count IR for the mortality cause of failure is [0.59, 0.68], with corresponding 95% confidence interval [0.56, 0.73]. For mortality, male sex and lower CD4 counts were strong risk factors (IR = [1.36, 1.48] and [0.59, 0.68]). These associa-
tions remained qualitatively stable across the plausible MNAR range, indicating that modest deviations from MAR would not change inference.
4.4 Robustness intervals
To avoid imposing assumptions on the range of η and identify the range of MNAR scenarios for which effects remain significant, we computed the robustness intervals. To achieve this, we used the proposed approach (Section 2.4) along
with the R function uniroot.all for root finding within the search set [0, 5], and set ǫ = 10−8. Under this search
set, the maximum possible robustness interval was [−5, 5], corresponding to odds ratios between e−5 = 0.01 and
e5 = 148.4. Table 4 reports robustness intervals for each covariate. The effects of age on gap in care and of CD4 count on mortality remained significant throughout this entire range, suggesting exceptional robustness. Also, the effect of gender on the cause-specific hazard of death remained significant over a wide range of MNAR scenarios, indicating a high degree of robustness against MNAR cause of failure. In contrast, the effects of HIV-status disclosure
10

A PREPRINT - NOVEMBER 27, 2025
0.90
0.95
1.00
1.05
1.10
Hazard ratio (CD4)
−1.0 −0.5 0.0 0.5 1.0 Sensitivity parameter (η)
Gap in care
0.50
0.60
0.70
0.80
0.90
1.00
1.10
Hazard ratio (CD4)
−1.0 −0.5 0.0 0.5 1.0 Sensitivity parameter (η)
Death
Estimate (per 100 cells/μl ↑)
95% simultaneous confidence band
Figure 1: Cause-specific hazard ratios for the effect of CD4 cell count as a function of the sensitivity parameter η, along with the corresponding 95% simultaneous confidence bands. The cause-specific hazard ratios at η = 0 correspond to those estimated under the MAR assumption.
on gap in care and mortality, as well as the effect of CD4 cell count on gap in care, remained significant within a tighter range of MNAR scenarios, implying a moderate degree of robustness against MNAR. The naïve robustness intervals described in Section 2.4 were considerably more conservative in the gap-in-care analysis, being substantially narrower for CD4 count, and reduced to the empty set for HIV status disclosure. This is indicative of the fact that the naïve robustness intervals underestim-
ate the robustness of conclusions regarding statistical hypotheses of interest against MNAR.
5 Discussion
In this research, we proposed a novel sensitivity analysis for the semiparametric proportional cause-specific hazards model with causes of failure being MNAR. We considered a class of MNAR scenarios under a pattern-mixture model specification and provided uniformly consistent estimates of the regression coefficients as functions of a sensitivity parameter (i.e., MNAR scenario). In addition, we proposed a rigorous wild bootstrap procedure for computing simultaneous confidence bands for the function-
al regression coefficients, capturing the additional uncertainty due to the unknown MNAR scenario within the assumed class. The functional regression coefficient estimator and the simultaneous confidence band are used to estimate the identification region for the true parameter, along with the associated confidence interval, as well as the robustness interval. The latter is defined as the range of MNAR scenarios within which an effect remains statistically significant, and provides a measure of th-
e extent of the robustness of conclusions about statistical hypotheses of interest against MNAR cause of failure. An alternative conservative approach to esti
11

A PREPRINT - NOVEMBER 27, 2025
Table 4: Results from the MAR analysis of the EA-IeDEA data along with the corresponding proposed and naïve robustness intervals. (HR: Cause-specific hazard ratio assuming MAR; CI: Confidence interval assuming MAR; RI: Proposed robustness interval - range of odds ratios of death for those with missing vital status compared to those with known vital status which preserve statistical significance; RInaïve: Conservative robustness interval derived from the confidence band over the full range of η val-
ues considered; Age: Age at ART initiation; CD4: CD4 cell count at ART initiation; Disclosure: Disclosure of the HIV status)
MAR Sensitivity
HR 95% CI RI∗ RIn∗aïve Gap in care
Gender (male vs. female) 1.01 [0.92, 1.12] ∅∗∗ ∅∗∗
Age (per 10 years) 0.77 [0.74, 0.81] [0.01, 148.41] [0.01, 148.41] CD4 cell count (per 100 cells/μl) 1.04 [1.03, 1.05] [0.29, 3.49] [0.68, 1.47]
Disclosure (yes vs. no) 0.89 [0.82, 0.96] [0.39, 2.53] ∅∗∗
Death Gender (male vs. female) 1.44 [1.28, 1.63] [0.01, 98.40] [0.01, 97.61]
Age (per 10 years) 1.07 [0.99, 1.15] ∅∗∗ ∅∗∗
CD4 cell count (per 100 cells/μl) 0.63 [0.59, 0.66] [0.01, 148.41] [0.01, 148.41] Disclosure (yes vs. no) 1.25 [1.06, 1.48] [0.46, 2.17] [0.46, 2.17] ∗ Maximum possible robustness interval in this analysis was [0.01, 148.41] ∗∗ Empty set implies a nonsignificant result even under MAR
mating robustness intervals is to compute the confidence band over the broadest set [−ηmax, ηmax] and identify the range of η values where the band excludes zero. However, this approach tends to yield unnecessarily narrower robustness intervals, as illustrated in our real data analysis, underestimating the robustness of conclusions about statistical hypotheses against MNAR causes of failure. The validity of the proposed methods was established using empirical process theory, while simulation exper-
iments showed a good numerical performance and the robustness of the methods against some degree of mispecification of the assumed pattern-mixture model. To increase flexibility, the assumed model for the probability of cause of failure C = 2 can incorporate regression splines with a fixed number of internal knots for continuous covariates.
The proposed approach is related to prior work on sensitivity analysis for general MNAR problems. Vansteelandt et al. (2006) provided the definitions and properties of the weak consistency of an identification region estimator, which they call an honestly estimated ignorance region under MNAR. They also introduced the concepts of pointwise, strong, and weak uncertainty region (i.e., confidence interval) for the identification region, for MNAR problems. Our consistency result in Theorem 1 is a stro-
nger version of weak consistency as defined in Vansteelandt et al. (2006), while our proposed confidence interval for the identification region is a strong uncertainty region. Todem et al. (2010) and Cao et al. (2013) proposed hypothesis testing procedures for parametric and semiparametric models, respectively, under MNAR scenarios. These tests require specifying the range of the sensitivity parameter, which is assumed to be the same across all parameters of interest. In contrast, our proposed rob-
ustness intervals do not require this specification, while controlling Type I error in the strong sense, as shown in Section 2.4. In addition, unlike our proposal, these tests evaluate significance over a predetermined sensitivity parameter set and do not provide the range of MNAR scenarios within which statistical significance is preserved. Thus, our proposed robustness intervals provide a more precise way to quantify robustness against MNAR. Applying the tests by Todem et al. (2010) and Cao et a-
l. (2013) in specific problems, including the one considered in this paper, requires deriving the influence function of the estimator and establishing the necessary entropy conditions (see regularity condition C2 in Cao et al. 2013) for the problem under consideration. This is not trivial with semiparametric models and typically requires the use of empirical process theory techniques (Kosorok 2008). Zhao et al. (2019) proposed a percentile bootstrap approach for sensitivity analysis when estimatin-
g the mean of an outcome with missing data and the MAR assumption is not warranted. This approach uses inverse probability weighting under a selection model specification to incorporate MNAR scenarios. This sensitivity analysis is not applicable to our problem since we focus on the semiparametric proportional hazards model with competing risks data. Also, we used a pseudolikelihood approach (Bakoyannis et al. 2020) to deal with missingness instead of inverse probability weighting, since it has bee-
n shown to provide substantially more efficient estimates compared to inverse probability weighting in prior simulation studies (Bakoyannis et al. 2020).
Beyond missing data, sensitivity analyses have also been developed to assess the robustness of estimates against unmeasured confounding. For instance, Ding & VanderWeele (2016) and VanderWeele & Ding (2017) introduced the
12

A PREPRINT - NOVEMBER 27, 2025
concept of E-value, a measure quantifying the minimum strength of association that an unmeasured confounder must have with both exposure and outcome to explain away an observed effect. However, the proposed formula for the Evalue with survival outcomes relies on the rare-event assumption, in the sense that the survival probability is close to one over the entire follow-up period (see eAppendix 7 in Ding & VanderWeele 2016), which limits its general use. In contrast, our methodology does not impose-
 assumptions on the rarity of the events under study. Furthermore, there is no formula for computing the E-value in the context of competing risks analysis with MNAR causes of failure, which is addressed in this paper. Bonvini & Kennedy (2022) proposed a global robustness summary for average treatment effects against unmeasured confounding. While this approach seeks to identify the most extreme violation of the underlying assumption (i.e., no unmeasured confounding) under which the effect of inter-
est becomes zero, it is not applicable to the problem of competing risks analysis with MNAR causes of failure. Our proposed approach extends the concept of robustness quantification to the competing risks setting, providing a principled method for evaluating the stability of estimates and the robustness of conclusions regarding statistical hypotheses of interest against MNAR causes.
Acknowledgements
Research reported in this publication was supported by the National Institute Of Allergy And Infectious Diseases (NIAID), Eunice Kennedy Shriver National Institute Of Child Health & Human Development (NICHD), National Institute On Drug Abuse (NIDA), National Cancer Institute (NCI), and the National Institute of Mental Health (NIMH), National Institute of Diabetes and Digestive and Kidney Diseases (NIDDK) , Fogarty International Center (FIC), National Heart, Lung, and Blood Institute (NHLBI) , Nati-
onal Institute on Alcohol Abuse and Alchoholism (NIAAA), in accordance with the regulatory requirements of the National Institutes of Health under Award Numbers U01AI069911 East Africa IeDEA Consortium and R21AI145662. The content is solely the responsibility of the authors and does not necessarily represent the official views of the National Institutes of Health.
References
Azizi, F., Eftekhari Mahabadi, S. & Mosayebi Omshi, E. (2020), ‘Bayesian sensitivity analysis to the non-ignorable missing cause of failure for hybrid censored competing risks data’, Journal of Statistical Computation and Simulation 90(12), 2228–2255.
Bakoyannis, G. (2020), ‘Nonparametric tests for transition probabilities in nonhomogeneous markov processes’, Journal of Nonparametric Statistics 32(1), 131–156.
Bakoyannis, G., Siannis, F. & Touloumi, G. (2010), ‘Modelling competing risks data with missing cause of failure’, Statistics in Medicine 29, 3172–3185.
Bakoyannis, G., Zhang, Y. & Yiannoutsos, C. T. (2019), ‘Nonparametric inference for Markov processes with missing absorbing state’, Statistica Sinica 29, 2083–2104.
Bakoyannis, G., Zhang, Y. & Yiannoutsos, C. T. (2020), ‘Semiparametric regression and risk prediction with competing risks data under missing cause of failure’, Lifetime Data Analysis 26, 659–684.
Bonvini, M. & Kennedy, E. H. (2022), ‘Sensitivity analysis via the proportion of unmeasured confounding’, Journal of the American Statistical Association 117(539), 1540–1550.
Bordes, L., Dauxois, J. Y. & Joly, P. (2014), ‘Semiparametric inference of competing risks data with additive hazards and missing cause of failure under mcar or mar assumptions’, Electronic Journal of Statistics 8, 41–95.
Brinkhof, M. W., Pujades-Rodriguez, M. & Egger, M. (2009), ‘Mortality of patients lost to follow-up in antiretroviral treatment programmes in resource-limited settings: systematic review and meta-analysis’, PLOS ONE 4(6), e5790.
Brinkhof, M. W., Spycher, B. D., Yiannoutsos, C., Weigel, R., Wood, R., Messou, E., Boulle, A., Egger, M., Sterne, J. A. & epidemiological Database to Evaluate AIDS (IeDEA), I. (2010), ‘Adjusting mortality for loss to follow-up: analysis of five art programmes in sub-saharan africa’, PLOS ONE 5(11), e14149.
Cao, G., Todem, D., Yang, L. & Fine, J. P. (2013), ‘Evaluating statistical hypotheses using weakly-identifiable estimating functions’, Scandinavian Journal of Statistics 40(2), 256–273.
Cong, X. J., Yin, G. & Shen, Y. (2007), ‘Marginal analysis of correlated failure time data with informative cluster sizes’, Biometrics 63, 663–672.
Ding, P. & VanderWeele, T. J. (2016), ‘Sensitivity analysis without assumptions’, Epidemiology 27(3), 368–377.
Gao, G. & Tsiatis, A. A. (2005), ‘Semiparametric estimators for the regression coefficients in the linear transformation competing risks model with missing cause of failure’, Biometrika 92, 875–891.
13

A PREPRINT - NOVEMBER 27, 2025
Goetghebeur, E. & Ryan, L. (1995), ‘Analysis of competing risks survival data when some failure types are missing’, Biometrika 82, 821–833.
Hyun, S., Lee, J. & Sun, Y. (2012), ‘Proportional hazards model for competing risks data with missing cause of failure’, Journal of Statistical Planning and Inference 142, 1767–1779.
Koley, T. & Dewanji, A. (2022), ‘Current status data with two competing risks and missing failure types: a parametric approach’, Journal of Applied Statistics 49(7), 1769–1783.
Kosorok, M. R. (2008), Introduction to Empirical Processes and Semiparametric Inference, Springer, New York.
Lee, M., Cronin, K. A., Gail, M. H., Dignam, J. J. & Feuer, E. J. (2011), ‘Multiple imputation methods for inference on cumulative incidence with missing cause of failure’, Biometrical Journal 53(6), 974–993.
Lee, M., Dignam, J. J. & Han, J. (2014), ‘Multiple imputation methods for nonparametric inference on cumulative incidence with missing cause of failure’, Statistics in Medicine 33(26), 4605–4626.
Lô, S. N., Ma, J., Manuguerra, M., Moreno-Betancur, M., Scolyer, R. A. & Thompson, J. F. (2022), ‘Competing risks analysis with missing cause-of-failure—penalized likelihood estimation of cause-specific cox models’, Statistical Methods in Medical Research 31(5), 978–994.
Lu, K. & Tsiatis, A. A. (2001), ‘Multiple imputation methods for estimating regression coefficients in the competing risks model with missing cause of failure’, Biometrics 57, 1191–1197.
Mao, L. & Lin, D. (2017), ‘Efficient estimation of semiparametric transformation models for the cumulative incidence of competing risks’, Journal of the Royal Statistical Society Series B: Statistical Methodology 79(2), 573–587.
Moreno-Betancur, M. & Latouche, A. (2013), ‘Regression modeling of the cumulative incidence function with missing causes of failure using pseudo-values’, Statistics in Medicine 32(18), 3206–3223.
Moreno-Betancur, M., Rey, G. & Latouche, A. (2015), ‘Direct likelihood inference and sensitivity analysis for competing risks regression with missing causes of failure’, Biometrics 71(2), 498–507.
Nevo, D., Nishihara, R., Ogino, S. & Wang, M. (2018), ‘The competing risks cox model with auxiliary case covariates under weaker missing-at-random cause of failure’, Lifetime Data Analysis 24, 425–442.
Peypouquet, J. (2015), Convex optimization in normed spaces: theory, methods and examples, Springer.
Todem, D., Fine, J. & Peng, L. (2010), ‘A global sensitivity test for evaluating statistical hypotheses with nonidentifiable models’, Biometrics 66(2), 558–566.
van der Vaart, A. W. & Wellner, J. A. (1996), Weak Convergence and Empirical Processes with Applications to Statistics, Springer-Verlag, New York.
VanderWeele, T. J. & Ding, P. (2017), ‘Sensitivity analysis in observational research: introducing the e-value’, Annals of Internal Medicine 167(4), 268–274.
Vansteelandt, S., Goetghebeur, E., Kenward, M. G. & Molenberghs, G. (2006), ‘Ignorance and uncertainty regions as inferential tools in a sensitivity analysis’, Statistica Sinica pp. 953–979.
Wu, R., Zhang, Y. & Bakoyannis, G. (2025), ‘Non-parametric estimation for semi-competing risks data with event misascertainment’, Statistics in Medicine 44(3-4), e10332.
Zhao, Q., Small, D. S. & Bhattacharya, B. B. (2019), ‘Sensitivity analysis for inverse probability weighting estimators via the percentile bootstrap’, Journal of the Royal Statistical Society Series B: Statistical Methodology 81(4), 735761.
Zhou, W., Bakoyannis, G., Zhang, Y. & Yiannoutsos, C. T. (2023), ‘Semiparametric marginal regression for clustered competing risks data with missing cause of failure’, Biostatistics 24(3), 795–810.
14

A PREPRINT - NOVEMBER 27, 2025
Appendices
Appendix A: Proofs of Theoretical Results
This Appendix provides the outlines of the proofs of Theorems 1–3 presented in the main text. The proofs rely heavily on empirical process theory techniques (van der Vaart & Wellner 1996, Kosorok 2008). Let D be the sample space and D a data point in D. Also, let P be the probability measure in the underlying probability space (Ω, F , P ). For any measurable function f : D 7→ R, we use the standard empirical process theory notation
Pf =
∫
f dP = E{f (D)},
Pnf = 1
n
n
∑
i=1
f (Di),
and Gnf = √n(Pn − P )f . Also, for any probability measure Q, define the L2 space
L2(Q) =
{
f : D 7→ R : ‖f ‖Q,2 =
(∫
f 2dQ
)1/2
<∞
}
.
To simplify the presentation of the proofs, we introduce some further notation. We use the notation f ≡ f (·) to denote
a function f (x) as a whole as opposed to its value for a particular choice of x. Also, let {C[a, b]}p denote the space of
continuous functions f : [a, b] 7→ Rp, and define the norm
‖f ‖[a,b] ≡ sup
η∈[a,b]
‖f (η)‖, for any f ∈ {C[a, b]}p.
In addition, let
E(β, η, t) = P {ZY (t)eβ′(η)Z }
P {Y (t)eβ′(η)Z } , and
En(β, η, t) =
∑n
i=1 ZiYi(t)eβ′(η)Zi
∑n
i=1 Yi(t)eβ′(η)Zi .
Furthermore, let φβ,η(t) = P {ZY (t)eβ′(η)Z } and φ ̃β,η(t) = P {Y (t)eβ′(η)Z }, so that
φβ ,η (t)
φ ̃β,η(t) = E(β, η, t).
Finally, let
H(β; γ0, η) =
∫τ
0


P {ZZ′Y (t)eβ′(η)Z }
P {Y (t)eβ′(η)Z } −
[
P {ZY (t)eβ′(η)Z } P {Y (t)eβ′(η)Z }
]⊗2
 P dN ̃ (t; γ0, η).
Our theorems rely on the following regularity conditions:
C1. The parameter space for the regression coefficients is
B=
{
β ∈ {C[a, b]}p : ‖β(η1)‖ ≤ L, ‖β(η1) − β(η2)‖ ≤ L|η1 − η2|, ∀η1, η2 ∈ [a, b]
}
for some positive constant L. Also, the parameter β∗ is contained in an open and convex subset of B.
C2. The theoretical cumulative baseline hazards
Λj∗(t; η) =
∫t
0
dP N ̃j(s; γ0, η)
P {Y (s)eβ∗′
j (η)Z } , j = 1, 2, t ∈ [0, τ ], η ∈ [a, b],
are continuous functions on [0, τ ]. Also, E{Y (τ )|Z} ≥ K1 > 0 almost surely.
C3. The covariates Z and auxiliary covariates A are bounded in the sense that there exist a constant K2 > 0 such that P (‖Z‖ ∨ ‖A‖ ≤ K2) = 1.
15

A PREPRINT - NOVEMBER 27, 2025
C4. The inverse g of the link function of the model for P (C = 2|R = 1, ∆ = 1, W ) is continuously differentiable
on compacts. Also, the parameter space Γ of γ is a bounded and convex subset of Rp+q+2.
C5. The estimator γˆn is a strongly consistent consistent estimator of γ0 and asymptotically linear, that is √n(γˆn −
γ0) = n−1/2 ∑n
i=1 ωi + op(1), with the influence functions satisfying E(ω) = 0 and E‖ω‖2 < ∞. Also,
the empirical versions of the influence functions ωˆi, i = 1, . . . , n, satisfy n−1 ∑n
i=1 ‖ωˆi − ωi‖2 = op(1). C6. The variance matrix Var(Z) is positive definite and minj=1,2 E(R∆j|W ) > 0 almost surely.
Condition C1 implies that the parameter space B involves continuous functions only. This is guaranteed by the Berge’s theorem of the maximum. The conditions of this theorem are satisfied here since the true log partial pseudolikelihood functions,
lj∗(β) = E
{∫ τ
0
(
β′Z − log [E{Y (t) exp(β′Z)}]
)
dNj (t)
}
, j = 1, 2,
are continuous in both β and η, and the maximizers βj∗, j = 1, 2, are unique (this is justified in the proof of Theorem
1 below). The stronger assumption of Lipschitz continuity in condition C1 is reasonable since the objective functions are continuously differentiable with respect to β and η, and not just continuous. Condition C1 also implies that the
parameter space is a bounded and convex subset of the Banach space ({C[a, b]}p, ‖·‖[a,b]). Boundedness and convexity assumptions on the parameter space are standard in the literature of Z-estimation (Kosorok 2008). Conditions C2, C3, and C6 (for a given η) are standard in the survival analysis literature. Also, conditions C4 and C5 are standard in the literature of semiparametric analysis of competing risks data with missing at random cause of failure (Bakoyannis et al. 2020). Conditions C4 and C5-
 are automatically satisfied if the model for P (C = 2|R = 1, ∆ = 1, W = w; γ0) is a correctly specified logistic regression model estimated via maximum likelihood. The goodness of fit of the latter model can be evaluated using the cumulative residual process approach introduced in Bakoyannis et al. (2019) and Bakoyannis et al. (2020). Evidence of a lack of fit can be alleviated by imposing a flexible parametric model including regression splines.
Next, we provide a useful lemma that will be utilized in the proofs of our main theorems.
Lemma 1 If conditions C1–C3 are satisfied, then the class of functions
F1 =
{
∫τ
0
φβ,η (t)
φ ̃β,η(t) dN (t) : β ∈ B, η ∈ [a, b]
}
,
where N (t) = ∆I(X ≤ t), t ∈ [0, τ ], is P -Donsker.
Proof. We have that ∫ τ
0
φβ ,η (t)
φ ̃β,η(t) dN (t) = φβ,η(X)
φ ̃β,η(X) ∆, (4) for all β ∈ B and η ∈ [a, b]. Next, consider the class
F2 =
{
1
φ ̃β,η
: β ∈ B, η ∈ [a, b]
}
.
For all β1, β2 ∈ B and all η1, η2 ∈ [a, b] we have that
∣ ∣ ∣
φ ̃β1,η1 (t) − φ ̃β2,η2 (t)
∣
∣
∣≤
∣ ∣ ∣
φ ̃β1,η1 (t) − φ ̃β2,η1 (t)
∣
∣
∣+
∣ ∣ ∣
φ ̃β2,η1 (t) − φ ̃β2,η2 (t)
∣ ∣ ∣
≤
∣
∣
∣E
(
eβ′
1(η1)Z − eβ′
2(η1)Z )∣
∣
∣+
∣
∣
∣E
(
eβ′
2(η1)Z − eβ′
2(η2)Z )∣
∣ ∣
≤E
∣ ∣
∣eβ′
1(η1)Z − eβ′
2(η1)Z ∣
∣
∣+E
∣ ∣
∣eβ′
2(η1)Z − eβ′
2(η2)Z ∣
∣ ∣
by Jensen’s inequality
≤ K3E‖Z‖ {‖β1(η1) − β2(η1)‖ + ‖β2(η1) − β2(η2)‖}
by Lipschitz continuity of ex and Cauchy-Schwartz inequality
≤ K3K2
{
‖β1 − β2‖[a,b] + sup
β∈B
‖β(η1) − β(η2)‖
}
by condition C3 ≤ K3K2
{‖β1 − β2‖[a,b] + L|η1 − η2|} by condition C1,
16

A PREPRINT - NOVEMBER 27, 2025
for all t ∈ [0, τ ]. This inequality along with conditions C1 and C3 imply that for all β1, β2 ∈ B and all η1, η2 ∈ [a, b]
∣ ∣ ∣ ∣ ∣
1
φ ̃β1,η1 (t) − 1
φ ̃β2,η2 (t)
∣ ∣ ∣ ∣ ∣
≤1
K12e−2pLK2
∣ ∣ ∣
φ ̃β1,η1 (t) − φ ̃β2,η2 (t)
∣ ∣ ∣
≤ K4
{‖β1 − β2‖[a,b] + L|η1 − η2|}
for all t ∈ [0, τ ], where
K4 = K3K2
K12e−2pLK2 .
The last inequality implies that for any ǫ > 0, any β ∈ B, any η ∈ [a, b], and any probability measure Q, there exists a βl ∈ B, l = 1, . . . , N (ǫ/(2K4), B, ‖ · ‖[a,b]), and an ηm ∈ [a, b], m = 1, . . . , N (ǫ/(2LK4), [a, b], | · |), such that
∥ ∥ ∥ ∥ ∥
1
φ ̃β,η
−1
φ ̃βl,ηm
∥ ∥ ∥ ∥
∥Q,2
≤ ǫ.
This implies that the class F2 can be covered by
N (ǫ/(2K4), B, ‖ · ‖[a,b]) × N (ǫ/(2LK4), [a, b], | · |)
L2(Q) 2ǫ-balls with centers φ ̃βl,ηm , l = 1, . . . , N (ǫ/(2K4), B, ‖ · ‖[a,b]), m = 1, . . . ,
N (ǫ/(2LK4), [a, b], | · |). Also, note that, by conditions C1 and C3, |f (t)| ≤ F ≡ K1−1e−pLK2 < ∞, for all f ∈ F2
and t ∈ [0, τ ]. Thus, the uniform covering number of the class F2 can be bounded as follows
sup
Q
N (2ǫ‖F ‖Q,2, F2, L2(Q)) ≤ N (ǫF/(2K4), B, ‖ · ‖[a,b])N (ǫF/(2LK4), [a, b], | · |)
≤ N[](ǫF/(2K4), B, ‖ · ‖[a,b])N (ǫF/(2LK4), [a, b], | · |)
≤ N (ǫF/(4LK4), [a, b], | · |)N (ǫF/(2LK4), [a, b], | · |)
≤ K5
(1
ǫ
)2
,
where the second inequality follows from Lemma 9.18 in Kosorok (2008) and the third inequality from condition C1 and Theorem 9.23 in Kosorok (2008), and K5 is a positive constant. The last inequality implies that the uniform entropy integral satisfies
∫1
0
√
log sup
Q
N (ǫ‖F ‖Q,2, F2, L2(Q))dǫ ≤
∫1
0
√
log(4K5) + log
(1
ǫ2
)
dǫ
≤
√log(4K5) +
∫1
0
√
1 + log
(1
ǫ2
)
dǫ
≤
√log(4K5) +
∫∞
0
u1/2 e−u/2 du
=
√log(4K5) + √2π < ∞.
In addition, using arguments similar to those used in page 142 in Kosorok (2008), it can be shown that the classes
F2,δ ≡ {f1 − f2 : f1, f2 ∈ F2, ‖f1 − f2‖P,2 < δ} and F22,∞ ≡ {(f1 − f2)2 : f1, f2 ∈ F2} are P -measurable for all
δ > 0. Therefore, by Theorem 2.5.2 in van der Vaart & Wellner (1996), it follows that that the class F2 is P -Donsker. Using similar arguments to those used for the class F2, it can be shown that the class
F3 = {φβ,η : β ∈ B, η ∈ [a, b]} ,
is also P -Donsker, with supf∈F3 ‖f ‖ ≤ K2epLK2 < ∞, by conditions C1 and C3. Therefore, the class F1 is P 
Donsker by (4) and Corollary 9.32 in Kosorok (2008), since it is formed by the product of two uniformly bounded P -Donsker classes multiplied by a random variable with bounded second moment. This completes the proof of Lemma 1.
Since the proofs do not depend on the choice of j, we will ignore this subindex for notational simplicity and present the proofs for the case where j = 2.
17

A PREPRINT - NOVEMBER 27, 2025
A.1 Proof of Theorem 1
First, we have that
sup
β∈B
∥ ∥ ∥
G ̃n(β; γˆn, ·) − G ̃∗(β; γ0, ·)
∥ ∥
∥[a,b] ≤ sup
β∈B
∥ ∥ ∥
G ̃n(β; γˆn, ·) − G ̃n(β; γ0, ·)
∥ ∥
∥[a,b]
+ sup
β∈B
∥ ∥ ∥
G ̃n(β; γ0, ·) − G ̃∗(β; γ0, ·)
∥ ∥
∥[a,b]
≡ sup
β∈B
‖M1,n(β, ·)‖[a,b] + sup
β∈B
‖M2,n(β, ·)‖[a,b] . (5)
For the first term in the right side of (5) we have
‖M1,n(β, η)‖ =
∥ ∥ ∥ ∥
Pn(1 − R){g(γˆ′nW ̃ + η) − g(γ′0W ̃ + η)}
∫τ
0
{Z − En(β, η, t)}dN (t)
∥ ∥ ∥ ∥
≤ Pn
∣ ∣
∣g(γˆ′nW ̃ + η) − g(γ′0W ̃ + η)
∣ ∣ ∣
∥ ∥ ∥ ∥
∫τ
0
{Z − En(β, η, t)}dN (t)
∥ ∥ ∥ ∥
≤ sup
w∈Rp+q :‖w‖≤K2
|g ̇ (w)|‖γˆn − γ0‖K2Pn
∥ ∥ ∥ ∥
∫τ
0
{Z − En(β, η, t)}dN (t)
∥ ∥ ∥ ∥
by conditions C3 and C4
≤ sup
w∈Rp+q :‖w‖≤K2
|g ̇ (w)|2K22pN (τ )‖γˆn − γ0‖.
Given that the latter upper bound does not depend on β and η, and since this bound is measurable, it follows that
supβ∈B ‖M1,n(β, ·)‖[a,b]
a→s∗ 0, as a consequence of conditions C3–C5.
Next, for the second term in the right side of (5) we have that
‖M2,n(β, η)‖ ≤
∥ ∥ ∥ ∥
Pn
∫τ
0
{En(β, η, t) − E(β, η, t)}dN ̃ (t; γ0, η)
∥ ∥ ∥ ∥
+
∥ ∥ ∥ ∥
(Pn − P )
∫τ
0
E(β, η, t)dN ̃ (t; γ0, η)
∥ ∥ ∥ ∥
≤ sup
t∈[0,τ ]
‖En(β, η, t) − E(β, η, t)‖ PnN ̃ (τ ; γ0, η)
+
∥ ∥ ∥ ∥
(Pn − P ){R∆ + (1 − R)g(γ′0W ̃ + η)}
∫τ
0
E(β, η, t)dN (t)
∥ ∥ ∥ ∥
≤ sup
t∈[0,τ ]
‖En(β, η, t) − E(β, η, t)‖
+
∥ ∥ ∥ ∥
(Pn − P ){R∆ + (1 − R)g(γ′0W ̃ + η)}
∫τ
0
E(β, η, t)dN (t)
∥ ∥ ∥ ∥
.
Therefore,
sup
β∈B
‖M2,n(β, ·)‖[a,b] ≤ sup
β∈B,t∈[0,τ ]
‖En(β, ·, t) − E(β, ·, t)‖[a,b]
+ sup
β∈B
∥ ∥ ∥ ∥
(Pn − P ){R∆ + (1 − R)g(γ′0W ̃ + η)}
∫τ
0
E(β, η, t)dN (t)
∥ ∥ ∥
∥[a,b]
≡ sup
β∈B,t∈[0,τ ]
‖M2′,n(β, ·, t)‖[a,b] + sup
β∈B
‖M2′′,n(β, ·)‖[a,b]. (6)
For the first term in (6), note that the fixed classes {β : β ∈ B} and {η : η ∈ [a, b]} are trivially P -Donsker, and thus the class {eβ′(η)Z : β ∈ B, η ∈ [a, b]} is also P -Donsker by Corollary 9.32 (iv) in Kosorok (2008). Thus, the classes {ZY (t)eβ′(η)Z : t ∈ [0, τ ], β ∈ B, η ∈ [a, b]} and {Y (t)eβ′(η)Z : t ∈ [0, τ ], β ∈ B, η ∈ [a, b]} are P -Donsker by Lemma 4.1 in Kosorok (2008) and the fact that they are formed by the product of two uniformly bounded P -Donsker classes. Therefore, the latt-
er two classes are also P -Glivenko–Cantelli and thus
sup
β∈B,t∈[0,τ ]
∥ ∥
∥(Pn − P )ZY (t)eβ′(·)Z ∥
∥
∥[a,b]
a→s∗ 0,
18

A PREPRINT - NOVEMBER 27, 2025
and
sup
β∈B,t∈[0,τ ]
∥ ∥
∥(Pn − P )Y (t)eβ′(·)Z ∥
∥
∥[a,b]
a→s∗ 0.
These results, along with the continuous mapping theorem and conditions C1–C3, lead to the conclusion that
sup
β∈B,t∈[0,τ ]
‖M2′,n(β, ·, t)‖[a,b]
a→s∗ 0.
For the second term in (6), we have that the class of functions
{
{R∆ + (1 − R)g(γ′0W ̃ + η)}
∫τ
0
E(β, η, t)dN (t) : β ∈ B, η ∈ [a, b]
}
is P -Donsker by Corollary 9.32 (iv) in Kosorok (2008), Lemma 1, and the fact that it is formed by the product of two uniformly bounded P -Donsker classes. Thus, the latter class is also P -Glivenko–Cantelli which implies that
sup
β∈B
‖M2′′,n(β, ·)‖[a,b]
a→s∗ 0.
Therefore, by (5) and (6) we have that
sup
β∈B
∥ ∥ ∥
G ̃n(β; γˆn, ·) − G ̃∗(β; γ0, ·)
∥ ∥
∥[a,b]
a→s∗ 0.
Next, to show the uniqueness of the maximizer β∗, we will first leverage proposition 3.11 in Peypouquet (2015), to
show the strict concavity of the true log partial pseudolikelihood function l∗(β) for all β ∈ B. The true log partial pseudolikelihood function is twice Gâteaux-differentiable with the second derivative at every β in the convex hull of the interior of B in the direction (h1, h2), h1, h2 ∈ B being
l ̈∗(β)(h1, h2) = −h′1H(β; γ0, ·)h2.By
This fact, the result in page 56 in Kosorok (2008), conditions C3 and C6, and proposition 3.11 in Peypouquet (2015),
imply the strict concavity of l∗(β) over the convex hull of the interior of B. This result, along with the boundedness assumed in conditions C1 and C3, and theorem 2.19 in Peypouquet (2015), lead to the conclusion that the maximizer
β∗ of l∗(β) is unique. Therefore,
‖βˆn − β∗‖[a,b]
a→s∗ 0.
This completes the proof of the first statement of Theorem 1. The second statement of Theorem is implied by the first statement and the continuous mapping theorem.
A.2 Proof of Theorem 2
By the definition of βˆn, we have that
0 = √nG ̃n(βˆn(η); γˆn, η)
= √n
{G ̃n(βˆn(η); γˆn, η) − G ̃n(βˆn(η); γ0, η)
}
+ √nG ̃n(βˆn(η); γ0, η)
≡ √nM1,n(βˆn, η) + √nG ̃n(βˆn(η); γ0, η), (7)
for all η ∈ [a, b]. For the first term in the right size of (7), it is straightforward to see that
√nM1,n(βˆn, η) = √n(Pn − P )
[
(1 − R){g(γˆ′nW ̃ + η) − g(γ′0W ̃ + η)}ZN (τ )
]
−√nPn(1 − R){g(γˆ′nW ̃ + η) − g(γ′0W ̃ + η)}
×
∫τ
0
{En(βˆn, η, t) − E(β∗, η, t)}dN (t)
−√n(Pn − P )
[
(1 − R){g(γˆ′nW ̃ + η) − g(γ′0W ̃ + η)}
∫τ
0
E(β∗, η, t)dN (t)
]
+√nP
[
(1 − R){g(γˆ′nW ̃ + η) − g(γ′0W ̃ + η)}
∫τ
0
{Z − E(β∗, η, t)}dN (t)
]
≡ ǫ1,n(η) − ǫ2,n(η) − ǫ3,n(η) + √nM1′,n(η). (8)
19

A PREPRINT - NOVEMBER 27, 2025
First, by conditions C3–C5, the dominated convergence theorem, and a first order Taylor expansion around γ0, we have that
‖ǫ1,n(η)‖ ≤
∥ ∥
∥(Pn − P )
{
(1 − R)N (τ )Zg ̇′(γ′0W ̃ + η)
} √n(γˆn − γ0)
∥ ∥
∥ + op(1).
Note that the classes {(1 − R)N (τ )Z}, {γ′0W ̃ } and {η : η ∈ [a, b]} are all trivially P -Glivenko–Cantelli. Thus, by
condition C4 and Corollary 9.27 (iii) in Kosorok (2008), we have that the class {(1 − R)N (τ )Zg ̇′(γ′0W ̃ + η) : η ∈
[a, b]} is P -Glivenko–Cantelli. Thus, by condition C2 and the central limit theorem, which imply that √n(γˆn − γ0) = Op(1), it follows that ‖ǫ1,n‖[a,b] = op(1). For the term ǫ2,n(η) note that
‖ǫ2,n‖[a,b] ≤ sup t∈[0,τ ]
‖En(βˆn, ·, t) − E(β∗, ·, t)‖[a,b]
×√nPn‖(1 − R){g(γˆ′nW ̃ + ·) − g(γ′0W ̃ + ·)}N (τ )‖[a,b]
≤ sup
t∈[0,τ ]
‖En(βˆn, ·, t) − E(β∗, ·, t)‖[a,b]
×K2Pn‖g ̇ ′(γ′0W ̃ + ·)‖[a,b]‖√n(γˆn − γ0)‖ + op(1), (9)
by conditions C3–C5, and a first order Taylor expansion around γ0. It is not hard to see that
‖En(βˆn, η, t) − E(β∗, η, t)‖ ≤ ‖En(βˆn, η, t) − En(β∗, η, t)‖
+
∥ ∥ ∥ ∥ ∥
PnZY (t)eβ∗′ (η)Z
PnY (t)eβ∗′ (η)Z − P ZY (t)eβ∗′ (η)Z
P Y (t)eβ∗′ (η)Z
∥ ∥ ∥ ∥ ∥
≤ 2K2e3pLK2
K12
Pn|eβˆ′
n(η)Z − eβ∗′ (η)Z |
+
∥ ∥ ∥ ∥ ∥
PnZY (t)eβ∗′ (η)Z
PnY (t)eβ∗′ (η)Z − P ZY (t)eβ∗′ (η)Z
P Y (t)eβ∗′ (η)Z
∥ ∥ ∥ ∥ ∥
by conditions C1–C3. Now, the first term in the right side of the last inequality is independent of t and converges uniformly (in η ∈ [a, b]) outer almost surely to 0 by condition C3, the Lipschitz continuity of the exponential function on compacts, the Cauchy–Schwartz inequality, and Theorem 1. For the second term in the right side of the last
inequality we have that the classes {ZY (t)eβ∗′(η)Z : η ∈ [a, b], t ∈ [0, τ ]} and {Y (t)eβ∗′(η)Z : η ∈ [a, b], t ∈ [0, τ ]} are P -Donsker by arguments similar to those used in the proof of Theorem 1. Thus, these classes are also P -GlivenkoCantelli and, therefore, it follows from the continuous mapping theorem that
sup
t∈[0,τ ]
∥ ∥ ∥ ∥ ∥
PnZY (t)eβ∗′ (·)Z
PnY (t)eβ∗′ (·)Z − P ZY (t)eβ∗′ (·)Z
P Y (t)eβ∗′ (·)Z
∥ ∥ ∥ ∥
∥[a,b]
a→s∗ 0.
Consequently, supt∈[0,τ] ‖En(βˆn, ·, t) − E(β∗, ·, t)‖[a,b]
a→s∗ 0. This result along with condition C5, the central limit theorem, and inequality (9), imply that ‖ǫ2,n‖[a,b] = op(1). Using similar arguments to those used for the term ǫ1,n(η) along with Lemma 1 leads to the conclusion that ‖ǫ3,n‖[a,b] = op(1). Finally,
√nM1′,n(η) = P
[
(1 − R)
∫τ
0
{Z − E(β∗, η, t)}dN (t)g ̇ ′(γ′0W ̃ + η)
] √n(γˆn − γ0) + op(1)
=P
[
(1 − R)
∫τ
0
{Z − E(β∗, η, t)}dN (t)g ̇ ′(γ′0W ̃ + η)
] √1n
n
∑
i=1
ωi + op(1),
where the first equality follows from condition C1–C4, the dominated convergence theorem, and a first order Taylor expansion, and the second equality from condition C5.
Next, to analyze the second term in the right side of (7) we introduce some additional notation. Let
ψ ̃n(β; η) =
∫τ
0
{Z − En(β, η, t)} dN ̃ (t; γ0, η),
ψ ̃(β; η) =
∫τ
0
{Z − E(β, η, t)} dN ̃ (t; γ0, η),
20

A PREPRINT - NOVEMBER 27, 2025
and
M ̃ (t; β∗, η, γ0) = N ̃ (t; γ0, η) −
∫t
0
Y (s)eβ∗′ (η)Z dΛ∗(s; η).
Using the latter notation and after some algebra, it can be shown that
√nG ̃n(βˆn(η); γ0, η) = √nPnψ ̃n(βˆn; η)
= √nPn
∫τ
0
{Z − E(β∗, η, t)} dM ̃ (t; β∗, η, γ0)
+√n
{
P ψ ̃(βˆn; η) − P ψ ̃(β∗; η)
}
+ǫ4,n(η) + ǫ5,n(η) − ǫ6,n(η), (10)
where
ǫ4,n(η) = √nPn
{ψ ̃n(βˆn; η) − ψ ̃(βˆn; η) − ψ ̃n(β∗; η) + ψ ̃(β∗; η)
}
,
ǫ5,n(η) = Gn
{ψ ̃(βˆn; η) − ψ ̃(β∗; η)
}
,
and
ǫ6,n = √nPn
∫τ
0
{En(β∗, η, t) − E(β∗, η, t)} dM ̃ (t; β∗, η, γ0).
It is straightforward to show that
‖ǫ4,n‖[a,b] ≤ sup
t∈[0,τ ]
∥ ∥ ∥
√n
{
En(βˆn, ·, t) − E(βˆn, ·, t)
}
− √n {En(β∗, ·, t) − E(β∗, ·, t)}
∥ ∥
∥[a,b]
≤ epLK2
K1
[
sup
t∈[0,τ ]
∥ ∥
∥GnZY (t)
{
eβˆ′
n(·)Z − eβ∗′ (·)Z }∥
∥
∥[a,b]
+ K2e2pLK2
K1
sup
t∈[0,τ ]
∥ ∥
∥GnY (t)
{
eβˆ′
n(·)Z − eβ∗′ (·)Z }∥
∥
∥[a,b]
]
,
by conditions C1–C3. As argued in the proof of Theorem 1, the classes {ZY (t)eβ′(η)Z : β ∈ B, η ∈ [a, b], t ∈ [0, τ ]} and {Y (t)eβ′(η)Z : β ∈ B, η ∈ [a, b], t ∈ [0, τ ]} are P -Donsker. In addition,
sup
η∈[a,b],t∈[0,τ ]
P
(
Y (t)
{
eβ′(η)Z − eβ∗′ (η)Z })2
≤ sup
η∈[a,b]
P
∣ ∣
∣eβ′(η)Z − eβ∗′ (η)Z ∣
∣ ∣
2
≤ (K2K3)2‖β − β∗‖[2a,b] → 0,
as ‖β − β∗‖[a,b] → 0, where the second inequality follows from the Lipschitz continuity of the exponential function and the Cauchy–Schwartz inequality. Similarly,
sup
η∈[a,b],t∈[0,τ ]
P
∥ ∥
∥ZY (t)
{
eβ′(η)Z − eβ∗′ (η)Z }∥
∥ ∥
2 → 0,
as ‖β − β∗‖[a,b] → 0. Therefore, by Theorem 1 and arguments similar to those used in Lemma 3.3.5 in van der Vaart & Wellner (1996), it follows that ‖ǫ4,n‖[a,b] = op(1). Next, Lemma 1 and condition C4 imply that
the class {ψ ̃(β; η) : β ∈ B, η ∈ [a, b]} is P -Donsker. Furthermore, using similar arguments to those used in the proof of Theorem 1, it can be shown that
sup
η∈[a,b]
P
∥ ∥ ∥
ψ ̃(β; η) − ψ ̃(β∗; η)
∥ ∥ ∥
2 → 0,
as ‖β − β∗‖[a,b] → 0. Therefore, by Theorem 1 and arguments similar to those used in Lemma 3.3.5 in van der Vaart & Wellner (1996), it follows that ‖ǫ5,n‖[a,b] = op(1).
Next, for ǫ6,n(η), condition C1 and Lemmas 4.1 and 15.10 in Kosorok (2008) imply that the class {M ̃ (t; β∗, η, γ0) :
t ∈ [0, τ ], η ∈ [a, b]} is P -Donsker. Also, standard arguments imply that P {M ̃ (t; β∗, η, γ0)} = 0. Thus,
√nPnM ̃ (·; β∗, ·, γ0) GM ̃ in D([0, τ ] × [a, b]),
21

A PREPRINT - NOVEMBER 27, 2025
where GM ̃ is a tight zero mean Gaussian process and D([0, τ ] × [a, b]) is the space of cadlag functions defined on the
set [0, τ ] × [a, b]. In addition, using similar arguments to those used in the proof of Theorem 1 it follows that
sup
t∈[0,τ ]
‖En(β∗, ·, t) − E(β∗, ·, t)‖[a,b]
a→s∗ 0.
Thus,
(Xn Yn
)
≡
(En(β∗, ·, ·) − E(β∗, ·, ·)
√nPnM ̃ (·; β∗, ·, γ0)
) (0
GM ̃
)
.
Since the map
φ(x, y)(η) ≡
∫τ
0
x(t, η)dy(t, η),
is continuous at each (x, y) with x, y ∈ D([0, τ ] × [a, b]) and ∫ τ
0 |dx(t, η)| < ∞, it follows from the continuous
mapping theorem that
ǫ6,n ≡ φ(Xn, Yn) φ(0, GM ̃ ) = 0.
Note that φ(0, GM ̃ )(η) is well defined by integration by parts. Since weak convergence to a constant is equivalent to
convergence in probability, we have ‖ǫ6,n‖[a,b] = op(1).
Next, it is easy to show that the map β 7→ G ̃∗(β; γ0, ·) = P ψ ̃(β; ·) is Fréchet differentiable at β∗ in the direction of
h ∈ B, with derivative −H(β∗; γ0, ·)h, where
H(β∗; γ0, ·)h =
∫τ
0


P ZZ′Y (t)eβ∗′ Z
P Y (t)eβ∗′ Z −
{
P ZY (t)eβ∗′ Z P Y (t)eβ∗′ Z
}⊗2
 P dN ̃ (t; γ0, ·)h, h ∈ B,
where A⊗2 = AA′ for any vector A. Therefore,
∥ ∥
∥P ψ ̃(βˆn; ·) − P ψ ̃(β∗; ·) + H(β∗; γ0, ·)(βˆn − β∗)
∥
∥
∥[a,b] = op(‖βˆn − β∗‖[a,b]).
Consequently, the second term in the right side of (10) we have
√n
{
P ψ ̃(βˆn; ·) − P ψ ̃(β∗; ·)
}
= H(β∗; γ0, ·)√n(βˆn − β∗) + op(√n‖βˆn − β∗‖[a,b]).
By conditions C1 and C6 and the result on page 56 in Kosorok (2008), it follows that H(β∗; γ0, η) is continuously invertible for all η ∈ [a, b]. Thus, using the same arguments as those used on page 311 in van der Vaart & Wellner
(1996), it follows that √n(βˆn − β∗) = Op(1), and thus op(√n‖βˆn − β∗‖[a,b]) = op(1). Therefore, taking all the pieces together and letting
ǫn(η) = ǫ1,n(η) − ǫ2,n(η) − ǫ3,n(η) + ǫ4,n(η) + ǫ5,n(η) − ǫ6,n(η) + op(1),
and
ψi(η) = −H−1(β∗; γ0, η)
{
∫τ
0
{Zi − E(β∗, η, t)} dM ̃ i(t; β∗, η, γ0)
+P
[
(1 − R)
∫τ
0
{Z − E(β∗, η, t)}dN (t)g ̇ ′(γ′0W ̃ + η)
]
ωi
}
,
we have by (7) that
√n
{βˆn(η) − β∗(η)
}
= √1n
n
∑
i=1
ψi(η) + ǫn(η),
where
‖ǫn‖[a,b] ≤ max
1≤l≤6 ‖ǫl,n‖[a,b] + op(1) = op(1).
Finally, conditions C1, C4, C5, Lemma 1 in Appendix A, and Lemmas 4.1 and 15.10 in Kosorok (2008) imply that the class of functions {ψ(η) : η ∈ [a, b]} is P -Donsker, which concludes the proof of Theorem 2.
22

A PREPRINT - NOVEMBER 27, 2025
A.3 Proof of Theorem 3
The Donsker property is preserved for any linear combination of P -Donsker classes of functions. Therefore, for simplicity and without loss of generality, we consider the case of a single covariate, i.e., p = 1, and K = 1. Let BL1 denote the space of all Lipschitz functions f with ‖f ‖∞ ≤ 1 and Lipschitz constant bounded by 1 (Kosorok 2008), and define
G ̃ n(η) = √1n
n
∑
i=1
ψi (η )ξi ,
where {ξi}in=1 are i.i.d. standard normal random variables that are independent of the data Dn. Also, let Eξ denote
the expectation with respect to ξi, i = 1, . . . , n, conditionally on the observed data Dn. Next, we have
sup
h∈BL1
∣
∣
∣Eξ
{
h(‖Gˆ n‖[a,b])
}
− E {h(‖G‖[a,b])}
∣ ∣
∣ ≤ sup
h∈BL1
∣
∣
∣Eξ
{
h(‖Gˆ n‖[a,b])
}
− Eξ
{
h(‖G ̃ n‖[a,b])
}∣ ∣ ∣
+ sup
h∈BL1
∣
∣
∣Eξ
{
h(‖G ̃ n‖[a,b])
}
− E {h(‖G‖[a,b])}
∣ ∣ ∣
(11)
For the first term in the right side of inequality (11), we have by Jensen’s inequality that
sup
h∈BL1
∣
∣
∣Eξ
{
h(‖Gˆ n‖[a,b])
}
− Eξ
{
h(‖G ̃ n‖[a,b])
}∣ ∣
∣ ≤ sup
h∈BL1
Eξ
∣ ∣
∣h(‖Gˆ n‖[a,b]) − h(‖G ̃ n‖[a,b])
∣ ∣
∣ . (12)
Note that for any h ∈ BL1, we have
∣ ∣
∣h(‖Gˆ n‖[a,b]) − h(‖G ̃ n‖[a,b])
∣
∣
∣≤
∣
∣
∣‖Gˆ n‖[a,b] − ‖G ̃ n‖[a,b]
∣
∣
∣≤
∥ ∥ ∥
ˆGn −  ̃Gn
∥ ∥
∥[a,b]
=
∥ ∥ ∥
√nPn(ψˆ − ψ)ξ
∥ ∥
∥[a,b]
≤
(∥ ∥ ∥
Hˆn−1(βˆn; γˆn, ·) − H−1(β∗; γ0, ·)
∥ ∥
∥[a,b] + ∥
∥H−1(β∗; γ0, ·)∥
∥[a,b]
)
×
{∥ ∥ ∥ ∥ ∥
√nPn
[
∫τ
0
{
Z − Eˆn(βˆn, ·, t)
}
dMˆ (t; βˆn, ·, γˆn)
−
∫τ
0
{Z − E(β∗, ·, t)} dM ̃ (t; β∗, ·, γ0)
]
ξ
∥ ∥ ∥ ∥
∥[a,b]
+
∥ ∥ ∥ ∥ ∥
√nPn
(
Pn
[
(1 − R)
∫τ
0
{Z − Eˆn(βˆn, ·, t)}dN (t)g ̇ ′(γˆ′nW ̃ + ·)
]
ωˆ
−P
[
(1 − R)
∫τ
0
{Z − E(β∗, ·, t)}dN (t)g ̇ ′(γ′0W ̃ + ·)
]
ω
)
ξ
∥ ∥ ∥ ∥
∥[a,b]
}
+
∥ ∥ ∥
Hˆn−1(βˆn; γˆn, ·) − H−1(β∗; γ0, ·)
∥
∥
∥[a,b] ‖H (β∗; γ0, ·)‖[a,b]
×
∥ ∥
√nPnψξ∥
∥[a,b] . (13)
Using arguments similar to those used in the proof of Theorem 1 along with the continuous mapping theorem lead to the conclusion that ∥
∥ ∥
Hˆn−1(βˆn; γˆn, ·) − H−1(β∗; γ0, ·)
∥ ∥
∥[a,b]
a→s∗ 0.
In addition, conditions C1-C4 and C6 imply the boundedness of both ‖H−1(β∗; γ0, ·)‖[a,b] and ‖H(β∗; γ0, ·)‖[a,b]. Furthermore, using argumes similar to those used in the proof of Theorem 2 as well as in the proof of theorem 3 in Bakoyannis et al. (2020) imply that the term inside the curly brackets in the first factor of the right side of (13)
converges to 0 in probability. Finally, Theorem 2 along with the fact that ξ ∼ N (0, 1) imply that ‖√nPnψξ‖[a,b] = Op(1). Taking all the pieces together along with inequality (13) leads to the conclusion that
∣ ∣
∣h(‖Gˆ n‖[a,b]) − h(‖G ̃ n‖[a,b])
∣ ∣ ∣
→p 0.
23

A PREPRINT - NOVEMBER 27, 2025
Thus, we have by inequality (12), the definition of BL1, and the dominated convergence theorem, that
sup
h∈BL1
∣
∣
∣Eξ
{
h(‖Gˆ n‖[a,b])
}
− Eξ
{
h(‖G ̃ n‖[a,b])
}∣ ∣ ∣
p → 0.
For the second term in the right side of (11), the Donsker property of the class of influence functions by Theorem 2, and theorem 10.4 (conditional multiplier central limit theorem) and proposition 10.7 in Kosorok (2008) imply that
sup
h∈BL1
∣
∣
∣Eξ
{
h(‖G ̃ n‖[a,b])
}
− E {h(‖G‖[a,b])}
∣ ∣ ∣
p → 0.
Therefore, it follows that
sup
h∈BL1
∣
∣
∣Eξ
{
h(‖Gˆ n‖[a,b])
}
− E {h(‖G‖[a,b])}
∣ ∣ ∣
p → 0,
by (11). Finally, for any Lipschitz function  ̃h : R 7→ [0, 1] with Lipschitz constant c0 we have
∣
∣
∣Eξ
{ ̃h(‖Gˆ n‖[a,b])
}
−E
{ ̃h(‖G‖[a,b])
}∣ ∣
∣ ≤ c0 sup
h∈BL1
∣
∣
∣Eξ
{
h(‖Gˆ n‖[a,b])
}
− E {h(‖G‖[a,b])}
∣ ∣ ∣
→p 0,
and, therefore, by lemma 10.11 in Kosorok (2008) it follows that
sup
x∈A
∣ ∣ ∣ ∣
P
{
‖Gˆ n‖[a,b] ≤ x
∣ ∣ ∣ ∣
Dn
}
− P {‖G‖[a,b] ≤ x}
∣ ∣ ∣ ∣
→p 0, j = 1, 2,
for any closed set A ⊂ R ∪ {−∞, ∞}, which concludes the proof.
Appendix B: Empirical Versions of the Influence Functions
To obtain the empirical versions of the influence functions we replace the unknown parameters with their consistent estimators and the sample averages with expectations. That is, the empirical versions of the influence functions are as follows
ψˆi1(η) = −Hˆn−1(βˆn,j ; γˆn, η)
{
∫τ
0
{
Zi − Eˆn(βˆn,1, η, t)
}
dMˆ i1(t; βˆn,1, η, γˆn)
−Pn
[
(1 − R)
∫τ
0
{Z − Eˆn(βˆn,1, η, t)}dN (t)g ̇ ′(γˆ′nW ̃ + η)
]
ωˆi
}
,
and
ψˆi2(η) = −Hˆn−1(βˆn,j ; γˆn, η)
{
∫τ
0
{
Zi − Eˆn(βˆn,2, η, t)
}
dMˆ i2(t; βˆn,2, η, γˆn)
+Pn
[
(1 − R)
∫τ
0
{Z − Eˆn(βˆn,2, η, t)}dN (t)g ̇ ′(γˆ′nW ̃ + η)
]
ωˆi
}
,
where
Hˆn,j (βˆn,j ; γˆn, η) =
∫τ
0


Pn{ZZ′Y (t)eβˆ′
n,j (η)Z }
Pn{Y (t)eβˆ′
n,j(η)Z } −
[
Pn{ZY (t)eβˆ′
n,j (η)Z }
Pn{Y (t)eβˆ′
n,j (η)Z }
]⊗2
 PndN ̃j(t; γˆn, η),
Eˆn(βˆn, η, t) = Pn{ZY (t)eβˆ′
n(η)Z }
Pn{Y (t)eβˆ′n(η)Z } ,
Mˆ ij(t; βˆn,j, η, γˆn) = N ̃ij(t; γˆn, η) −
∫t
0
Yi(s)eβˆ′
n,j(η)Zi d ˆΛn,j(s; βˆn,j , η, γˆn),
and
ˆΛj(t; βˆn,j, η, γˆn) =
∫t
0
PndN ̃j(s; γˆn, η)
PnY (s)eβˆ′
n,j (η)Z .
24

A PREPRINT - NOVEMBER 27, 2025
Appendix C: Marginal Analysis with Clustered Competing Risks Data
Consider a clustered-data setting with n clusters (e.g., clinics) and Mi individuals in the ith cluster, i = 1, . . . , n. Cluster size Mi is considered random and potentially informative (Cong et al. 2007), in the sense that it is allowed to be associated with the competing risks data under study. The observed data for the mth individual in the ith cluster are then Dim = (Xim, ∆im, ∆imRimCim, Zim, Aim, Rim), i = 1, . . . , n, m = 1, . . . , Mi. Based on Dim, let ∆imj = I(∆im = 1, Cim = j), j = 1,-
 2, be the indicator that the mth individual in the ith cluster experienced the jth cause of failure. In addition, we define the counting processes Nim(t) = I(Xim ≤ t, ∆im = 1), t ∈ [0, τ ], and the cause-specific counting process Nimj(t) = I(Xim ≤ t, ∆imj = 1) = ∆imjNim(t), j = 1, 2. Finally, we define the at-risk process Yim(t) = I(Xim ≥ t), t ∈ [0, τ ]. In what follows, we assume independence across different clusters but allow for an arbitrary dependence structure within clusters.
Zhou et al. (2023) extended the partial pseudolikelihood approach for semiparametric analysis of competing risks data under MAR cause of failure (Bakoyannis et al. 2020) to the clustered-data setting with informative cluster size. To achieve this, they imposed a working-independence assumption and weighted the contribution of each cluster by the inverse of the corresponding cluster size Mi. Following Zhou et al. (2023) and using the ideas presented in the present paper, estimation of the marginal -
(or population-averaged) functional regression coefficients can be achieved under a working-independence assumption via the solution of the estimating equation
G ̃n,j (βˆn,j (η); γˆn, η) = 1
n
n
∑
i=1
1
Mi
Mi
∑
m=1
∫τ
0
{
Zim − Eˆn(βˆn,j , η, t)
}
dN ̃imj(t; γˆn, η) = 0, j = 1, 2,
where
Eˆn(β, η, t) =
∑n
i=1 M −1
i
∑Mi
m=1 ZimYim(t)eβ′(η)Zim
∑n
i=1 M −1
i
∑Mi
m=1 Yim(t)eβ′(η)Zim
,
N ̃im2(t; γ, η) = {Rim∆im2 + (1 − Rim)g(γ′W ̃ im + η)}Nim(t), W ̃ im = (1, Xim, Zi′m, A′im)′, and
N ̃im1(t; γ, η) = [Rim∆im1 + (1 − Rim){1 − g(γ′W ̃ im + η)}]Nim(t), t ∈ [0, τ ].
The estimate γˆn is obtained using generalized estimating equations, weighted by the inverse of the cluster size M −1
i
to account for a potentially informative cluster size (Cong et al. 2007).
The validity of the marginal estimator requires two additional regularity conditions:
C7. The cluster size is finite almost surely, that is that there exists a positive integer m0 such that P (M ≤ m0) = 1.
C8. The variables Wim, ∆im, Cim, and Rim are identically distributed conditional on cluster size Mi, which implies that E(Wim|Mi) = E(Wi1|Mi), E(∆im|Mi) = E(∆i1|Mi), E(Cim|Mi) = E(Ci1|Mi), and E(Rim|Mi) = E(Ri1|Mi), for all i = 1, . . . , n, m = 1, . . . , Mi, and j = 1, 2.
The uniform consistency and asymptotic Gaussianity of the estimated functional regression coefficient, as well as the validity of the wild bootstrap, follow from arguments similar to those used in Zhou et al. (2023) for competing risks data with MAR cause of failure and the arguments used in the proof of Theorems 1-3 in Appendix A above. The empirical versions of the influence functions for the clustered-data setting are just the cluster-level averages
ψˆij (η) = 1
Mi
Mi
∑
m=1
ψˆimj (η),
where ψˆimj(η) is the influence function of the mth individual in the ith cluster for the jth cause of failure, computed using the formulas provided in Appendix B above. Using this influence function, computation of confidence bands based on wild bootstrap proceeds as described in Section 2.3 of the main text.
Appendix D: Additional Data Analysis Results
To estimate the marginal probabilities of death among the non-successfully traced patients (i.e., with missing cause of failure), P (C = 2|R = 0; γ0, η), in our application we used the following estimator
∑n
i=1 M −1
i
∑Mi
m=1 eγˆ′nW ̃ im+η
1+eγˆ′nW ̃ im+η (1 − Rim)
∑n
i=1 M −1
i
∑Mi
m=1(1 − Rim) ,
25

A PREPRINT - NOVEMBER 27, 2025
0.60
0.70
0.80
0.90
1.00
1.10
Hazard ratio (age)
−1.0 −0.5 0.0 0.5 1.0 Sensitivity parameter (η)
Gap in care
0.80
0.90
1.00
1.10
1.20
Hazard ratio (age)
−1.0 −0.5 0.0 0.5 1.0 Sensitivity parameter (η)
Death
Estimate (per 10 years ↑)
95% simultaneous confidence band
Figure 2: Cause-specific hazard ratios for the effect of age as a function of the sensitivity parameter η, along with the corresponding 95% simultaneous confidence bands. The cause-specific hazard ratios at η = 0 correspond to those estimated under the MAR assumption.
for a given sensitivity parameter value η, where Mi is the number of patients in the ith clinic and W ̃ im =
(1, Xim, Ageim, Genderim, CD4im, Disclosureim)′, and Xim is the event time for the mth patient in the ith clinic.
The weight M −1
i in both the numerator and the denominator is used to adjust for the potentially informative cluster
size (Zhou et al. 2023).
The functional regression coefficients and the corresponding simultaneous 95% confidence bands for the effects of gender, age, and HIV status disclosure are provided in Figures 2 to 4.
26

A PREPRINT - NOVEMBER 27, 2025
0.80
0.90
1.00
1.10
1.20
Hazard ratio (gender)
−1.0 −0.5 0.0 0.5 1.0 Sensitivity parameter (η)
Gap in care
0.90
1.00
1.10
1.20
1.30
1.40
1.50
1.60
1.70
Hazard ratio (gender)
−1.0 −0.5 0.0 0.5 1.0 Sensitivity parameter (η)
Death
Estimate (males vs females)
95% simultaneous confidence band
Figure 3: Cause-specific hazard ratios for the effect of gender as a function of the sensitivity parameter η, along with the corresponding 95% simultaneous confidence bands. The cause-specific hazard ratios at η = 0 correspond to those estimated under the MAR assumption.
27

A PREPRINT - NOVEMBER 27, 2025
0.80
0.90
1.00
1.10
1.20
Hazard ratio (HIV status disclosure)
−1.0 −0.5 0.0 0.5 1.0 Sensitivity parameter (η)
Gap in care
0.90
1.00
1.10
1.20
1.30
1.40
1.50
1.60
1.70
Hazard ratio (HIV statuse disclosure)
−1.0 −0.5 0.0 0.5 1.0 Sensitivity parameter (η)
Death
Estimate (yes vs no)
95% simultaneous confidence band
Figure 4: Cause-specific hazard ratios for the effect of HIV status disclosure as a function of the sensitivity parameter η, along with the corresponding 95% simultaneous confidence bands. The cause-specific hazard ratios at η = 0 correspond to those estimated under the MAR assumption.
28

---

## Processing Information

- **Processing Library:** Zotero PDFWorker
- **Processing Date:** 2026-02-10T18:18:56.680Z
- **Text Length:** 88317 characters
- **Success:** Text extraction completed
- **PDF Library Used:** Zotero PDFWorker
- **Pages Processed:** 28 of 28
