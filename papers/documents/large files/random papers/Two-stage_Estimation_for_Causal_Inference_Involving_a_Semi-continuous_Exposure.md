# PDF Document: Wang et al. - 2025 - Two-stage Estimation for Causal Inference Involving a Semi-continuous Exposure.pdf

**File Path:** Wang et al. - 2025 - Two-stage Estimation for Causal Inference Involving a Semi-continuous Exposure.pdf

**Processed Date:** 2026-02-10T18:17:22.177Z

**File Size:** 433.10 KB

**Total Pages:** 15

**Extracted Pages:** 15

**PDF Library:** Zotero PDFWorker

**Attachment Item ID:** 3383

**Title:** Two-stage Estimation for Causal Inference Involving a Semi-continuous Exposure

**Collection:** Large Files > Random Papers

---

## Extracted Text Content

TWO-STAGE ESTIMATION FOR CAUSAL INFERENCE INVOLVING A
SEMI-CONTINUOUS EXPOSURE
A PREPRINT
Xiaoya Wang∗
Department of Statistics and Actuarial Science University of Waterloo Waterloo, ON N2L 3G1, Canada x932wang@uwaterloo.ca
Richard J. Cook
Department of Statistics and Actuarial Science University of Waterloo Waterloo, ON N2L 3G1, Canada rjcook@uwaterloo.ca
Yeying Zhu
Department of Statistics and Actuarial Science University of Waterloo Waterloo, ON N2L 3G1, Canada yeying.zhu@uwaterloo.ca
Tugba Akkaya-Hocagil
Department of Biostatistics, School of Medicine Ankara University Ankara, Ankara 06230, Turkey yeying.zhu@uwaterloo.ca
R. Colin Carter
Departments of Emergency Medicine and Pediatrics Columbia University New York, NY 10032, USA yeying.zhu@uwaterloo.ca
Sandra W. Jacobson
Department of Psychiatry and Behavioral Neurosciences Wayne State University Detroit, MI 48202, USA
sandra.jacobson@wayne.edu
Joseph L. Jacobson
Department of Psychiatry and Behavioral Neurosciences Wayne State University Detroit, MI 48202, USA
joseph.jacobson@wayne.edu
Louise M. Ryan
School of Mathematical and Physical Sciences University of Technology Sydney Sydney, NSW 2007, Australia louise.m.ryan@uts.edu.au
November 27, 2025
ABSTRACT
Methods for causal inference are well developed for binary and continuous exposures, but in many settings, the exposure has a substantial mass at zero—such exposures are called semi-continuous. We propose a general causal framework for such semi-continuous exposures, together with a novel two-stage estimation strategy. A two-part propensity structure is introduced for the semi-continuous exposure, with one component for exposure status (exposed vs unexposed) and another for the exposure level amon-
g those exposed, and incorporates both into a marginal structural model that disentangles the effects of exposure status and dose. The two-stage procedure sequentially targets the causal dose–response among exposed individuals and the causal effect of exposure status at a reference dose, allowing flexibility in the choice of propensity score methods in the second stage. We establish consistency and asymptotic normality for the resulting estimators, and characterise their limiting values under miss-
pecification of the propensity score models. Simulation studies evaluate finite sample performance and robustness, and an application to a study of prenatal alcohol exposure and child cognition demonstrates how the proposed methods can be used to address a range of scientific questions about both exposure status and exposure intensity.
∗Use footnote for providing further information about author (webpage, alternative address)—not for acknowledging funding agencies.
arXiv:2511.20985v1 [stat.ME] 26 Nov 2025

arXiv Template A PREPRINT
Keywords Augmented inverse probability weighting (AIPW) · Causal inference · Inverse probability weighting (IPW) · Propensity score (PS) regression adjustment · Semi-continuous exposure · Two-stage approach
1 Introduction
In many areas of public health research, the goal is to estimate causal effects of exposures on outcomes using observational data subject to confounding. Propensity scores summarise measured confounders for a binary exposure and can be used to mitigate bias in estimation of causal effects [Rubin, 1974, Rosenbaum and Rubin, 1983, 1984]. For continuous exposures, the generalised propensity score is defined as the conditional density of the exposure given covariates, evaluated at the observed exposur-
e [Hirano and Imbens, 2004, Imai and Van Dyk, 2004]. Inverse density weighting can be used to estimate dose–response relationships, but the resulting estimators may be unstable when outliers are present and weights are highly variable [Naimi et al., 2014], and correctly modelling the exposure distribution can be challenging.
In many applications, however, the exposure is neither purely binary nor fully continuous. Samples often consist of both unexposed individuals and exposed individuals receiving varying doses, yielding a semi-continuous exposure with a point mass at zero and a continuous component among the exposed. Such structures arise, for example, in environmental health studies where pollutants may be absent at some locations but vary in concentration where present [Begu et al., 2016], and in studies of behavi-
ours such as smoking or alcohol consumption where many individuals abstain but usage among those who do not can vary considerably. Yet despite their prevalence, semi-continuous exposures have received relatively little attention in causal inference using propensity score methods.
As a motivating example, we consider the challenge of assessing the effect of prenatal alcohol exposure (PAE) on child cognition. We analyse data from a Detroit longitudinal cohort of African-American children in which maternal alcohol use during pregnancy was measured as average daily ounces of absolute alcohol, yielding a semi-continuous exposure with a point mass at zero among non-drinkers and a continuous right-skewed distribution among drinkers [Jacobson et al., 2002]. Although epidemiologica-
l studies have reported associations between PAE and children’s cognitive outcomes [Jacobson et al., 2004, 2011, Lewis et al., 2015, 2016], the precise nature of the dose–response effect remains unclear. Scientific and public health inquiries focus on the potential adverse effects of any alcohol consumption during pregnancy, as well as how those risks escalate with increased consumption. To address such semi-continuous exposures, Akkaya Hocagil et al. [2021] construct a two-part propensity score, -
modelling exposure status via logistic regression and the dose component among the exposed via log linear regression. In related work, Li et al. [2023] outline a two-stage analysis for semi-continuous exposures with continuous outcomes, focusing on the modelling strategy and empirical illustration rather than on a formal counterfactual causal framework or asymptotic and robustness properties. We return to this study in Section 6.
In this article, we develop and evaluate a two-stage procedure for assessing the causal effect of a semi-continuous exposure on a continuous outcome. In Stage I, we use propensity score regression adjustment among the exposed to estimate the effect of the continuous exposure level. In Stage II, we assess the effect of exposure at a specified reference dose compared with no exposure, using a second propensity score defined for the binary exposure indicator. This two-stage structure enables a doubly-
 robust procedure in Stage II through augmented inverse probability weighted (AIPW) estimating equations [Bang and Robins, 2005, Robins et al., 2007]. We allow three distinct sets of confounders: one affecting exposure status (exposed versus unexposed), a second affecting the exposure dose among those exposed, and a third affecting both exposure status and dose. Within the potential outcomes framework, we define causal estimands for both status and dose, specify the assumptions required for identi-
fication, and derive the large sample properties of the resulting estimators. Extensive simulation studies are used to assess finite sample performance and to examine the impact of various forms of propensity score misspecification. Finally, we illustrate the methods using data from a study of PAE and child cognition.
The remainder of this article is organised as follows. In Section 2, we introduce notation, models, and assumptions for causal analysis with a semi-continuous exposure, and describe regression adjustment based on two propensity scores for the causal estimands of interest. In Section 3, we present the two-stage estimators for the binary status and continuous dose effects, and derive their asymptotic properties. In Section 4, we study the impact of propensity score misspecification by evaluating the-
 limiting values of the estimators. Simulation studies are reported in Section 5, and in Section 6 we apply the methods to data from a study by Jacobson et al. [2002] on the effect of PAE on child cognition. Conclusions and future directions are discussed in Section 7.
2

arXiv Template A PREPRINT
X1 T
X3 Y
X2 A
Figure 1: A directed acyclic graph for a two-part exposure model
2 Causal Analysis in a Two-part Model
2.1 Notation and Assumptions
Let Y denote a continuous response variable, T denote a non-negative random variable which represents the exposure (e.g. the ounces of absolute alcohol per day) of an individual, and let A = I(T > 0) indicate the exposure status. A k1 × 1 vector of confounding variables X1 = (X11, ..., X1k1 )′ has effects on T and Y , a k2 × 1 vector of
X2 = (X21, ..., X2k2 )′ confounds the relationship between the binary indicator A and Y among those with A = 1, and
a k3 × 1 vector of confounders X3 = (X31, ..., X3k3 )′ affects on (A, T ), and Y ; see the directed acyclic graph in Figure
1. We then let X = (X′1, X′2, X′3)′ be the k × 1 full vector of confounders with k = k1 + k2 + k3, Z1 = (X′1, X′3)′ be a
(k1 +k3)×1 vector of confounders associated with the continuous exposure T and Y given A = 1, and Z2 = (X′2, X′3)′ be a (k2 + k3) × 1 vector of confounders associated with the binary exposure A and the response. For a sample of n
independent individuals, the observed data is {(Yi, Ti, Ai, X′
i), i = 1, . . . , n}.
As is common in dose-response modelling, we consider a log transformation of the continuous positive exposure T to define the dose D = log T , with d its realized value. We then let Yi(1, d) represent the potential outcome for the i-th individual exposed at dose d [Rubin, 1974, Splawa-Neyman et al., 1990]; if the i-th individual is unexposed, then the dose is undefined, but we denote the potential outcome as Yi(0, d) for consistency of notation, taking it as understood that d is undefined. For a s-
emi-continuous exposure among those exposed, the average causal effect of a one-unit increase in dose from d to d + 1 is
E {Y (1, d + 1)} − E {Y (1, d)} ;
we refer to this as the causal dose-response effect. To define the average causal effect of the binary exposure status we must specify a reference dose c for the exposed individuals. We then let
E {Y (1, c)} − E {Y (0, d)}
denote the average causal effect of exposure at level c corresponds to those that are unexposed. In a sample, we often use the sample average of the log volume among the exposed group for c, but any reference value can of course be set.
To identify the causal effects we extend the standard causal inference assumptions [Rubin, 1980, 1990, Rosenbaum and Rubin, 1983, Cole and Hernán, 2008] to the setting of a semi-continuous exposure; Web Appendix A provides a detailed discussion.
Assumption 1 (Stable Unit Treatment Value Assumption) This assumption states that the potential outcome for one individual is independent of the exposure of another individual.
Assumption 2 (Consistency) Yi(1, d) = Yi if the i-th individual is exposed at dose Di = d and Yi(0, d) = Yi if unexposed for all d and i = 1, . . . , n.
Assumption 3 (Ignorability) Yi(1, d) ⊥ Di|Ai = 1, Xi = x and Yi(1, d), Yi(0, 0) ⊥ Ai|Xi for all d and i = 1, . . . , n.
Assumption 4 (Positivity) f (Di = d|Ai = 1, Zi1) > 0 for all d, and P (Ai = a|Zi2) > 0 for a = 0, 1 and i = 1, . . . , n.
3

arXiv Template A PREPRINT
2.2 Model Settings
Suppressing the index i for individuals, we assume the data generation model for Y :
Y = θ0 + θ11A + θ12A(D − c) + X′
1θ21 + X′
2θ22 + X′
3θ23 + E, (1)
with the error E ∼ N (0, τ 2) and E ⊥ (A, AD, X), c a specified reference dose, θ = (θ0, θ11, θ12, θ′
2)′ is a (k + 3) × 1
vector of parameters with θ21 = (θ211, ..., θ21k1 )′, θ22 = (θ221, ..., θ22k2 )′, θ23 = (θ231, ..., θ23k3 )′, and θ2 =
(θ′
21, θ′
22, θ′
23)′; see the DAG of Figure 1. Note θ11 and θ12 in (1) represent the causal effects of the exposure at the reference dose (comparing to those who are unexposed) and the causal dose-response effect respectively. Since the mean response varies as a function of dose, a reference dose c is required to define the parameter θ11; any value can be specified but values near the center of the distribution of doses among those exposed will often be appealing.
Here we consider a two-part model for the semi-continuous exposure with one for the exposure status and one for the dose [Smith et al., 2017]. The exposure model for the dose among those exposed has the form
E(D|A = 1, Z1; α1) =  ̄Z′
1α1 (2)
where  ̄Z1 = (1, Z′1)′ and α1 = (α10, α′11, α′12)′ where α11 = (α111, ..., α11k1 )′ and α12 = (α121, ..., α12k3 )′. For
the data generating process we let W = D −  ̄Z′1α1 and assume W |A = 1 ∼ N (0, σ2
W ). We define the exposure model
for A as
log P (A = 1|Z2; α2)
1 − P (A = 1|Z2; α2) =  ̄Z′
2α2 (3)
with  ̄Z2 = (1, Z′2)′ and α2 = (α20, α′21, α′22)′ where α21 = (α211, ..., α21k2 )′ and α22 = (α221, ..., α22k3 )′.
2.3 A New Marginal Structural Model (MSM)
MSMs relate potential outcomes to exposures after marginalising over baseline covariates [Robins, 2000]. We describe the effects of exposure status and dose through the MSM
Y (A, D) = ψ0 + ψ11A + ψ12A(D − c) + Q (4)
where Y (A, D) is the potential outcome, (A, D) ⊥ Q, Q has a mean of zero, and ψ = (ψ0, ψ11, ψ12)′. Based on Assumption 3, the potential outcomes Y (A, D) are independent of observed exposures (A, D) given covariates X [Rosenbaum and Rubin, 1983] which implies Q is conditionally independent of A and D. Under Assumptions 1-4, ψ11 and ψ12 represent the causal effects of the exposure at the mean dose and the causal dose-response effect; see Web Appendix B for more derivation details.
2.4 Regression Adjustment with Two Propensity Scores
For binary exposures the propensity score (PS) is the conditional probability of exposure given covariates [Rosenbaum and Rubin, 1983], while for continuous exposures the generalised PS is the conditional exposure density given covariates [Imai and Van Dyk, 2004]. As noted by Imai and Van Dyk [2004], any function of the confounders that indexes the exposure distribution can serve as a PS. In our setting with a binary exposure A and a continuous dose D among the exposed, we therefore define two pro-
pensity scores S(X; α) = {S1(Z1; α1), S2(Z2; α2)}′ with α = (α′1, α′2)′ where S1(Z1; α1) = E(D|A = 1, Z1; α1) and S2(Z2; α2) = E(A|Z2; α2).
To adjust for confounding, we consider the regression model
E{Y |A, D, S(X; α); η} = η0 + η11A + η12A(D − c) + η21S1(Z1; α1) + η22S2(Z2; α2), (5)
where η = (η0, η′1, η′2)′ with η1 = (η11, η12)′ and η2 = (η21, η22)′. Under Assumptions 1–4 and correct specification of the exposure models, conditioning on S(X; α) balances covariates, and η11 and η12 identify the causal effect of exposure at the reference dose and the causal dose–response effect, respectively. Detailed derivations are given in Web Appendix C.
3 Two-stage Causal Analyses
While attractive in its simplicity, the regression adjustment strategy in Section 2.4 hinges on the correct specification of both propensity score models. This reliance on joint specification motivates a two-stage formulation that separates estimation of the dose–response from the contrast between exposure and no exposure at a reference dose. In Stage I we estimate the causal dose–response effect among exposed individuals, and in Stage II we estimate the effect of exposure
4

arXiv Template A PREPRINT
at a reference dose. We use PS regression adjustment in Stage I, and PS regression adjustment, IPW, or AIPW in Stage II, and derive the corresponding estimating equations and asymptotic properties.
Let n denote the sample size and index individuals by i = 1, . . . , n. The observed data are Di = (Yi, Xi, Ai, Di), i = 1, . . . , n. We write Siq = Sq(Ziq; αq), q = 1, 2, for the propensity scores based on covariates Zi1 for D | A = 1 and Zi2 for A, with parameters αq.
3.1 Stage I: The Causal Dose-response Effect
Among exposed individuals (A = 1), we consider a PS regression adjustment to assess the causal dose–response effect by fitting the model
E {Yi|Ai = 1, Di, S1(Zi1; α1); γ1} = γ10 + γ11Di + γ12S1(Zi1; α1) = μi11(φ1), (6)
by least squares where S1(Zi1; α1) = E(Di|Ai = 1, Zi1; α1), γ1 = (γ10, γ11, γ12)′, and φ1 = (γ′1, α′1)′. The estimating equation for γ1 is
U11(D; φ1) =
n
X
i=1
Ui11(Di; φ1) = 0, (7)
where
Ui11(Di; φ1) = Ai
∂μi11(φ1) ∂γ1
{Yi − μi11(φ1)}.
The parameter α1 can be estimated by solving
U12(D; α1) =
n
X
i=1
Ui12(Di; α1) = 0 (8)
where
Ui12(Di; α1) = Ai
∂μi12(α1) ∂α1
{Di − μi12(α1)}
with μi12(α1) =  ̄Z′
i1α1. Considering (7) and (8) jointly, the Stage I estimating equation is
U1(Di; φ1) =
n
X
i=1
Ui1(Di; φ1) = 0 (9)
with Ui1(Di; φ1) = {U′
i11(Di; φ1), U′
i12(Di; α1)}′ . Under Assumptions 1–4, the causal dose–response effect is represented by γ11, which corresponds to ψ12 in (4).
3.2 Stage II: The Effect of Exposure Status
In Stage II, we assess the causal effect of exposure at a pre-specified reference dose c compared to no exposure, with γ11 obtained from Stage I and incorporated through the offset term γ11Ai(Di − c). We use the term “offset" because in practice γ11 will be estimated in Stage I and γˆ11Ai(Di − c) will be treated as a fixed quantity in what follows. We represent it as the scaled parameter γ11Ai(Di − c) here to unify the discussion of the estimation. We consider three alternative approaches to estim-
ation: (i) PS regression adjustment [Vansteelandt and Daniel, 2014], (ii) IPW [Robins, 2000], and (iii) AIPW [Bang and Robins, 2005, Robins et al., 2007].
3.2.1 Propensity score (PS) regression adjustment
To assess the effect of A = 1 at dose D = c via a PS regression adjustment, we consider a Stage II linear predictor of the form
E {Yi|Di, Ai, S2(Zi2; α2); γ2} = μi21(φ2) + offset {γ11Ai(Di − c)}
where μi21(φ2) = γ20 + γ21Ai + γ22S2(Zi2; α2) with PS S2(Zi2; α2) = E(Ai|Zi2; α2), and γ2 = (γ20, γ21, γ22)′
with φ2 = (γ′2, α′2)′.
The regression parameter γ2 can be estimated for specified (γ′1, α′2)′ by the estimating equation
 ̃U21(D; γ1, φ2) =
n
X
i=1
 ̃Ui21(Di; γ1, φ2) = 0 (10)
5

arXiv Template A PREPRINT
where
 ̃Ui21(Di; γ1, φ2) = ∂μi21(φ2)
∂γ2
Yi − [μi21(φ2) + offset {γ11Ai(Di − c)}] .
The parameter α2 can be estimated by solving
U22 (D; α2) =
n
X
i=1
Ui22 (Di; α2) = 0 (11)
where
Ui22 (Di; α2) = ∂S2(Zi2; α2)
∂α2
1
S2(Zi2; α2) {1 − S2(Zi2; α2)} {Ai − S2(Zi2; α2)} .
Any binary regression model can be used; we employ a logistic link. Let
 ̃U2(Di; γ1, φ2) =
n
X
i=1
 ̃Ui2(Di; γ1, φ2) = 0
denote the joint Stage II estimating equation under PS regression adjustment with  ̃Ui2(Di; γ1, φ2) =  ̃U′
i21(Di; γ1, φ2), U′
i22(Di; α2) ′. Then taken together with the estimating equation of Stage I, the joint estimating equation for the two-stage analysis under PS regression adjustment is
 ̃U(D; Ω) = U1(D; φ1)
 ̃U2(D; γ1, φ2) = 0 (12)
for Ω = (φ′
1, φ′
2)′. Under Assumptions 1 to 4, γ21 represents the causal effect of exposure at the reference dose compared to no exposure. and this holds likewise for the IPW and AIPW approaches described in Sections 3.2.2 and 3.2.3.
3.2.2 Inverse Probability Weighting (IPW)
We construct inverse probability weights based on S2(Zi2; α2) to fit the Stage II marginal structural model
E {Yi(Ai, Di); γ1, γ2} = γ20 + γ21Ai + offset {γ11Ai(Di − c)} .
An IPW estimating equation [Hernán et al., 2000, Robins, 2000] is
 ̄U21(D; γ1, φ2) =
n
X
i=1
 ̄Ui21(Di; γ1, φ2) = 0 (13)
where
 ̄Ui21(D; γ1, φ2) =
1
X
a=0
wi(a; α2) ∂μ21(a; γ2)
∂γ2
Yi − [μ21(a; γ2) + offset {γ11Ai(Di − c)}]
where
μ21(a; γ2) = γ20 + γ21a, (14)
and
wi(a; α2) = I(Ai = a)
S2(Zi2; α2)a {1 − S2(Zi2; α2)}1−a (15)
for a = 0, 1. The joint Stage II estimating equation under IPW is
 ̄U2(Di; γ1, φ2) =
n
X
i=1
 ̄Ui2(Di; γ1, φ2) = 0
where  ̄Ui2(Di; γ1, φ2) =  ̄U′
i21(Di; γ1, φ2), U′
i22(Di; α2) ′. The two-stage estimating equations with IPW are therefore given by
 ̄U(Ω) = U1(D; φ1)
 ̄U2(D; γ1, φ2) = 0. (16)
6

arXiv Template A PREPRINT
3.2.3 Augmented Inverse Probability Weighting (AIPW)
An AIPW estimating function is introduced by Bang and Robins [2005] to obtain consistent estimators of causal effects when at least one of the PS model and the imputation model is correctly specified [Funk et al., 2011]; the augmentation term we describe ensures this double robustness property. We again estimate γ2 via an augmented estimating equation
 ̄ ̄U21(D; γ1, φ2) =
n
X
i=1
 ̄ ̄Ui21(Di; γ1, φ2) = 0, (17)
and  ̄ ̄Ui21(Di; γ1, φ2) is given by
1
X
a=0
wi(a; α2) ∂μ12(a; γ2)
∂γ2
Yi − [μ12(a; γ2) + offset {γ11Ai(Di − c)}] − {wi(a; α2) − 1}gi(a; θ, γ2)
where φ2 = (γ′2, α′2, θ′)′ with θ = (θ′
1, θ′
0)′, and μ12(a; γ2) is defined in (14). Here wi(a; α2) is given in (15), and
gi(a; θ, γ2) = ∂μ12(a; γ2)
∂γ2
{mia(θ) − μ12(a; γ2)}
where mia(θ) denotes the imputed model based expression for the expected response under treatment a ∈ 0, 1; from (1). The imputed values are specified as
mia(θa) = E {Yi − γ11a(Di − c) |Ai = a, Xi; θa} = θa0 + θ′
a1Xi1 + θ′
a2Xi2 + θ′
a3Xi3,
where θap is kp-dimensional, p = 1, 2, 3 for a = 0, 1. The estimating equation for θ with specified γ1 is
U23(D; γ1, θ) =
n
X
i=1
Ui23(Di; γ1, θ) = 0 (18)
where Ui23(Di; γ1, θ) = {U′
i231(Di; γ1, θ1), U′
i232(Di; θ0)}′ with
Ui231(Di; γ1, θ1) = Ai
∂mi1(θ1) ∂θ1
{Yi − γ11(Di − c) − mi1 (θ1)} ,
and
Ui232(Di; θ0) = (1 − Ai) ∂mi0(θ0)
∂θ0
{Yi − mi0(θ0)} .
By combining (17), (11), and (18), let  ̄ ̄Ui2(Di; φ2) = U ̄ ̄ ′
i21(Di; γ1, φ2), U′
i22(Di; α2), U′
i23(Di; γ1, θ) ′ and consider the joint Stage II AIPW estimating equation
U ̄ ̄ 2(D; γ1, φ2) =
n
X
i=1
 ̄ ̄Ui2(Di; γ1, φ2) = 0. (19)
By combining (9) and (19), the joint estimating equation is
 ̄ ̄U(Ω) = U1(D; φ1)
 ̄ ̄U2(D; γ1, φ2) = 0. (20)
3.3 Estimation and Statistical Inference
3.3.1 Estimation in Two-stage Analysis
The two-stage analysis can be characterised by
U(D; Ω) = U1(D; φ1)
U2(D; γ1, φ2) = 0, (21)
where U1(·) is defined in (9) and U2(·) denotes the Stage II estimating equations under regression adjustment, IPW, or AIPW, as given in (12), (16), and (20), respectively. From a theoretical perspective, treating (21) as a unified system is
convenient for deriving the large sample properties of the resulting estimators, and the estimates Ωˆ = (φˆ ′
1, ˆφ′
2)′ can be obtained by solving (21) directly. In practice, however, estimation proceeds sequentially: the Stage I estimating equation (9) is solved to obtain ˆφ1 and hence γˆ11, which is then substituted into the Stage II estimating equation.
Solving the latter yields φˆ 2 which includes γˆ21, the estimator of the causal effect of exposure at the reference dose.
7

arXiv Template A PREPRINT
3.3.2 Large Sample Theory
We now establish the large sample properties of the two-stage estimator with AIPW in Stage II; results for regression adjustment and IPW follow analogously. Let ˆΩ denote the solution to the joint estimating equation (21), where Ui(·) is the stacked vector of estimating functions contributions from individual i from Stages I and II, i = 1, . . . , n.
Theorem 1 Suppose Assumptions 1–4 hold, and the PS S1(Z1; α1) = E(D|A = 1, Z1; α1) is correctly specified. Then the solution ˆφ1 = (γˆ′
1, ˆα′
1)′ to (9) is consistent for φ1. In particular, γˆ11 is a consistent estimator of ψ12, the causal dose–response effect in the marginal structural model (4).
Theorem 2 Suppose Assumptions 1–4 hold, and that at least one of the PS S2(Z2; α2) or the imputation model ma(θ)
is correctly specified. If γˆ11 is a consistent estimator of ψ12, then the solution γˆ2 = (γˆ20, γˆ21, γˆ22)′ to the estimating equation (17) is consistent for γ2. In particular, γˆ21 is a consistent estimator of ψ11, the causal effect of exposure at the reference dose in the marginal structural model (4).
Theorem 3 Suppose Assumptions 1–4 hold and standard regularity conditions [Van der Vaart, 2000] are satisfied.
Then the joint estimator ˆΩ is consistent for Ω, and √n (Ωˆ − Ω) converges in distribution to a mean-zero multivariate normal vector with covariance matrix
Σ(Ω) = A−1(Ω) B(Ω) {A−1(Ω)}′,
where A(Ω) = E −∂U(Ω)/∂Ω′ and B(Ω) = E {Ui(Ω)U′
i(Ω)}.
Proofs of Theorems 1–3 and explicit expressions for the sandwich covariance estimator and Wald statistics are given in Web Appendix D. We use the resulting sandwich covariance matrix for ˆΩ to compute standard errors and construct Wald tests and confidence intervals.
4 Implication of Misspecified Propensity Scores in Two-stage Approaches
The consistency of the causal effect estimators introduced above relies on correct specification of the PS models. Akkaya Hocagil et al. [2021] derive the explicit form of the possibly biased estimator obtained by PS regression adjustment based on a possibly misspecified PS model for a semi-continuous exposure in one stage. Here we derive limiting values under misspecified propensity scores for the two-stage approach with PS regression adjustment in both stages.
4.1 Misspecification of the Stage I Propensity Score
We work with expectations of the estimating functions to characterise limiting values under misspecification [White, 1982]. Since the data are i.i.d., we suppress the subscript i and use (Y, A, D, X) to denote a generic observation.
Let S ̃1(X;  ̃α1) denote the Stage I PS under misspecification parameterized by  ̃α1. A regression adjustment based on S ̃1(X; α ̃ 1) involves fitting
E(Y |A = 1, D, S ̃1(X;  ̃α1); γ ̃1) = γ ̃10 + γ ̃11D + γ ̃12S ̃1(X; α ̃ 1) = μ11(  ̃φ1),
where γ ̃1 = (γ ̃10, γ ̃11, γ ̃12)′ and φ ̃ 1 = (γ ̃′
1,  ̃α′
1)′. Let U (·) denote the corresponding estimating functions under misspecification. The limiting value of the estimator for γ1 is the solution to
E
n
U11(D;  ̃φ1)
o
= 0, (22)
with
U11(D;  ̃φ1) = A ∂μ11(  ̃φ1)
∂ γ ̃ 1
{Y − μ11(  ̃φ1)},
where the expectation is taken with respect to the true distribution of (Y, A, D, X). Solving (22) yields γ1∗ =
(γ1∗0, γ1∗1, γ1∗2)′ with
γ∗
11 = θ12 +
θ′
2
h
ζ1(X|A = 1) − β1(X|A = 1)ρ1
q var{E(D|X,A=1)} var{S ̃1(X;α ̃ 1)}
i
var(D|A = 1) − var{E(D|X, A = 1)}ρ21
, (23)
8

arXiv Template A PREPRINT
where ρ1 = corr{E(D|X, A = 1), S ̃1(X;  ̃α1)}, ζ1(X|A = 1) = {ζ11(X|A = 1), . . . , ζ1k(X|A = 1)}′, and
β1(X|A = 1) = {β11(X|A = 1), . . . , β1k(X|A = 1)}′, with ζ1j(X|A = 1) = cov{E(D|X, A = 1), Xj|A = 1}
and β1j(X|A = 1) = cov{S ̃1(X; α ̃ 1), Xj|A = 1} for j = 1, . . . , k. Further details are provided in Web Appendix E.1.
When the PS model for the continuous exposure is correctly specified, S ̃1(X;  ̃α1) = E(D|X, A = 1). In this case ρ1 = 1, ζ1(X|A = 1) = β1(X|A = 1), and var{E(D|X, A = 1)} = var{S ̃1(X; α ̃ 1)}. Substituting these equalities
into (23) eliminates the second term, yielding γ1∗1 = θ12. Otherwise, when S ̃1(X; α ̃ 1) is misspecified, the asymptotic
bias of γˆ11 depends on the covariance structure among E(D|X, A = 1), X given A = 1, and S ̃1(X;  ̃α1).
4.2 Biased Estimator in Stage II
We now derive the limiting value of the exposure effect at the reference dose compared to no exposure. Let S ̃2(X;  ̃α2) be the Stage II PS under misspecification, and then fit the regression model by treating γ ̃11A(D − c) as an offset term in
E
n
Y |D, A, S ̃2(X;  ̃α2); γ ̃1, γ ̃2
o
= γ ̃20 + γ ̃21A + γ ̃22S ̃2(X;  ̃α2) + offset {γ ̃11A(D − c)}
where γ ̃2 = (γ ̃21, γ ̃22, γ ̃23)′. The estimating equation for γ ̃2 is
E
n
U21(D; γ ̃1,  ̃φ2)
o
= 0 (24)
where
U21(D; γ ̃1,  ̃φ2) = ∂μ21(φ ̃ 2)
∂φ ̃ 2
h
Y−
n
μ21(  ̃φ2) + γ ̃11A(D − c)
oi
with μ21(  ̃φ2) = γ ̃20 + γ ̃21A + γ ̃22S ̃2(X;  ̃α2) again; the expectation in (24) is taken with respect to the true
distribution of (Y, D, A, X). Solving (24) with γ1∗1 given by (23) yields γ2∗ = (γ2∗0, γ2∗1, γ2∗2)′. Here we let
ρ21 = corr E(A|X), S ̃1(X) , ρ22 = corr E(AD|X), S ̃1(X) , ζ2(X) = ζ21(X), ..., ζ2k(X) ′, β2(X) = {β21(X), ..., β2k(X)}′, and δ1 = cov E(A|X), S ̃1(X) where ζ2j(X) = cov {E(A|X), Xj} and β2j(X) =
cov S ̃1(X), Xj for j = 1, 2, ..., k. Then γ2∗1 corresponding to the limiting value of the causal effect of the exposure at the reference dose c compared to no exposure under misspecification is
γ∗
21 = θ11 +
θ′
2
h
ζ2(X) − β2(X)ρ21
q var{E(A|X)} var{S ̃2(X;α ̃ 2)}
i
var(A) − var {E(A|X)} ρ221
+
(θ12 − γ1∗1)
h
cov(AD, A) − cE {var(A|X)} − δ1ρ22
pvar {E(A|X)} var {E(AD|X)}
i
var(A) − var {E(A|X)} ρ221
. (25)
Further details are provided in Web Appendix E.2.
Note that γ2∗1 = θ11 when the second and third terms in (25) are zero. If S ̃2(X;  ̃α2) is correctly specified so that
S ̃2(X; α ̃ 2) = E(A | X), and the Stage I estimator is consistent (implying γ1∗1 = θ12), these terms vanish and γ2∗1 = θ11. More generally, the asymptotic bias in the Stage II estimator depends on the covariance and variance structure of E(A | X), X and S ̃2(X; α ̃ 2), as well as any misspecification of S ̃1(X;  ̃α1) in Stage I. The bias decreases as S ̃2(X;  ̃α2) approaches E(A | X) and as γ ̃11 approaches θ12.
5 Simulation Studies
5.1 Data Generation and Simulation Design
We consider two data generation processes.
5.1.1 Data Generation Model 1
Let X = (X1, . . . , X6)′ follow a multivariate normal distribution with mean zero, unit variances and pairwise correlation
0.2 with X1 = (X11, X12)′, X2 = (X21, X22)′, and X3 = (X31, X32)′. The binary exposure A|Z2 is generated from
model (3) with  ̄Z2 = (1, X′2, X′3)′, α21 = (log 1.2, log 2)′ and α22 = (log 0.8, log 1.3)′. We solve for α20 such that P (A = 1) = EZ2 {P (A = 1|Z2)} = 0.25, 0.5 or 0.75 which give values α20 = −1.249, 0.0008 and 1.249. For those
9

arXiv Template A PREPRINT
exposed, the continuous exposure D is generated from model (2) with  ̄Z1 = (1, X′1, X′3)′, α10 = 0, α11 = (1, 0.5)′,
α12 = (0.6, 0.8)′, and W ∼ N (0, 1). If Ai = 0 for each individual Di undefined. Finally, we generate the response
variable Y from model (1) with θ0 = 0, θ11 = 4, θ12 = 0.5, θ21 = (0.6, 0.8)′, θ22 = (0.8, 0.4)′, θ23 = (0.3, 0.7)′, and Ei ∼ N (0, 1).
5.1.2 Data Generation Model 2
Let X = (X1, X2)′ follow a bivariate normal distribution with mean zero, unit variances and correlation 0.2. We generate A based on
log π(X)
1 − π(X) = α10 + α′
11X (26)
with α11 = (log 1.2, log 2)′; we find α10 to give marginal probabilities of A = 1 as 0.25, 0.5 and 0.75 yielding α10 = −1.224, 0.005 and 1.236. If A = 1, the continuous exposure D is generated from
D = α20 + α′
21X + W, (27)
where α20 = 0, α21 = (1, 0.5)′, W ⊥ X, and W ∼ N (0, 1). The second data generation model is the special case of (1)
Y = θ0 + θ11A + θ12A(D − c) + X′θ2 + E, (28)
with θ0 = 0, θ11 = 4, θ12 = 0.5, θ2 = (0.8, 0.4)′, and E ∼ N (0, 1).
5.2 Methods
For each data generation model, we generate 2000 replicated datasets of size n = 1000 and estimate the causal parameters using six methods: (i) a naive least-squares fit of the MSM (4); (ii) the correctly specified response model; (iii) two–PS regression adjustment in a single stage; (iv) two-stage approach with PS regression; (v) two-stage approach with IPW; and (vi) two-stage approach with AIPW.
Brookhart et al. [2006] note that including covariates unrelated to the exposure but related to the outcome can reduce the variance of causal effect estimators without introducing bias. Accordingly, we consider two propensity score specifications: (i) including only exposure-related covariates and (ii) including all outcome-related covariates. In data-generation model 2 these sets coincide, so the two specifications are identical.
To examine robustness, we consider five misspecification scenarios: (i) misspecified Stage I PS S1; (ii) misspecified Stage II PS S2; (iii) misspecified imputation model ma(X; θ); (iv) misspecification of S1 and ma(X; θ); and (v) misspecification of S2 and ma(X; θ). In all cases we focus on the setting with minimal propensity scores S =
{S1(Z1), S2(Z2)}′. Full details of how each model is misspecified are given in Web Appendix F.1.
5.3 Finite Sample Performance
Table 1 presents the empirical bias (EBias), empirical standard error (ESE), average robust standard error (RSE), and empirical coverage probability (ECP) for estimators with P (A = 1) = 0.5 under correctly specified models. The naive method yields poor estimates for both parts across both data-generation models. In contrast, all other methods show small biases and ECPs close to the nominal 95% level. Including all covariates in the PS models reduces empirical variance without inflating bias, in l-
ine with the variance reduction principle of Brookhart et al. [2006]. The ESEs closely match the mean RSE, supporting the validity of the sandwich variance estimator in Section 3.3.2.
Table 2 reports empirical results under misspecified S1 and S2 for the two-dimensional PS regression adjustment, PS
regression in both stages, and PS regression in Stage I with IPW in Stage II with π∗ = 0.5. Misspecification of S1 induces bias in the Stage I estimator and consequently poor Stage II performance. Similarly, misspecification of S2 yields large empirical bias in the Stage II estimator.
Table 3 summarises the performance of the Stage II AIPW estimators under model misspecification with P (A = 1) = 0.5. When either the imputation model or the S2 model is misspecified, the estimator remains consistent by double robustness. In contrast, misspecified S1 induces bias in both stages, and simultaneously misspecifying the imputation and S2 models leads to biased Stage II estimates and loss of nominal coverage.
Web Tables 1–3 and 4–6 in Web Appendix F.2 present results for P (A = 1) = 0.25 and 0.75 respectively, and show patterns consistent with those for P (A = 1) = 0.5.
10

arXiv Template A PREPRINT
Table 1: Empirical properties of estimators of causal effects with P (A = 1) = 0.5 under six methods of analysis based on correctly specified models.
Minimal PS: S = {S1(Z1), S2(Z2)}′ Expanded PS: S = {S1(X), S2(X)}′ Method Exposure Effect Ebias ESE RSE ECP(%) Ebias ESE RSE ECP(%)
Data Generation Model 1
Naive D θ12 0.760 0.036 0.035 0.0 - - - 
A θ11 0.952 0.128 0.126 0.0 - - - DG model D θ12 -0.001 0.028 0.027 94.2 - - - 
A θ11 < 0.001 0.067 0.068 95.2 - - - Two PS Reg D θ12 -0.002 0.034 0.034 94.3 -0.002 0.033 0.032 95.0
A θ11 < 0.001 0.073 0.074 95.4 < 0.001 0.067 0.068 95.0
PSI + PSII
D θ12 -0.002 0.060 0.059 94.4 -0.002 0.046 0.045 94.2 A θ11 -0.002 0.096 0.098 95.2 < 0.001 0.068 0.069 95.6
PSI + IPWII
D θ12 -0.002 0.060 0.059 94.4 -0.002 0.046 0.045 94.2 A θ11 -0.002 0.107 0.107 94.5 < 0.001 0.082 0.083 95.5
PSI + AIPWII
D θ12 -0.002 0.060 0.059 94.4 -0.002 0.046 0.045 94.2 A θ11 0.001 0.070 0.071 95.5 < 0.001 0.069 0.070 95.4 Data Generation Model 2
Naive D θ12 0.462 0.034 0.034 0.0 - - - 
A θ11 0.486 0.080 0.080 0.0 - - - DG model D θ12 0.001 0.035 0.034 94.4 - - - 
A θ11 < 0.001 0.068 0.068 95.4 - - - Two PS Reg D θ12 0.001 0.035 0.037 95.4 - - - 
A θ11 < 0.001 0.068 0.068 95.3 - - - 
PSI + PSII
D θ12 0.002 0.046 0.045 93.9 - - - A θ11 < 0.001 0.069 0.069 95.1 - - - 
PSI + IPWII
D θ12 0.002 0.046 0.045 93.9 - - - A θ11 < 0.001 0.072 0.072 94.9 - - - 
PSI + AIPWII
D θ12 0.002 0.046 0.045 93.9 - - - A θ11 < 0.001 0.070 0.070 94.4 - - - 
DG model: Data generation model; Two PS Reg: Two-dimensional PS regression adjustment; PSI + PSII: Using PS regression adjustment in Stage I and II; PSI + IPWII: Using PS regression adjustment in Stage I and IPW in Stage II; PSI + AIPWII: Using PS regression adjustment in Stage I and AIPW in Stage II.
Table 2: Empirical results for estimators of causal effects with P (A = 1) = 0.5 for two-propensity-score regression adjustment and two-stage analysis under model misspecification.
Misspecified S1 Misspecified S2 Method Exposure Effect Ebias ESE RSE ECP(%) Ebias ESE RSE ECP(%)
Data Generation Model 1
Two PS Reg D θ12 0.135 0.039 0.039 6.9 -0.002 0.035 0.036 96.0
A θ11 0.034 0.084 0.086 93.6 0.245 0.074 0.075 9.7
PSI+PSII
D θ12 0.348 0.062 0.062 0.1 -0.002 0.060 0.059 94.4 A θ11 0.089 0.093 0.094 84.1 0.331 0.095 0.099 7.5
PSI+IPWII
D θ12 0.348 0.062 0.062 0.1 -0.002 0.060 0.059 94.4 A θ11 0.089 0.103 0.102 84.3 0.330 0.097 0.100 7.8 Data Generation Model 2
Two PS Reg D θ12 -0.053 0.045 0.044 75.9 0.002 0.046 0.045 93.9
A θ11 -0.016 0.073 0.072 94.3 0.208 0.070 0.070 15.8
PSI+PSII
D θ12 0.144 0.044 0.043 8.4 0.002 0.046 0.045 93.9 A θ11 0.044 0.068 0.068 90.5 0.241 0.069 0.069 6.9
PSI+IPWII
D θ12 0.144 0.044 0.043 8.4 0.002 0.046 0.045 93.9 A θ11 0.043 0.072 0.071 90.3 0.241 0.070 0.069 6.8
S1 represents the PS model for the continuous exposure D conditioned on A = 1, given by S1 = E(D|A = 1, Z1); S2 represents the PS model for the binary exposure A, given by S2 = E(A|Z2).
11

arXiv Template A PREPRINT
Table 3: Empirical results for estimators of effects for both parts with P (A = 1) = 0.5 for applying PS regression adjustment in Stage I and AIPW in Stage II under model misspecification.
Misspecified Model Exposure Effect Ebias ESE RSE ECP(%) Data Generation Model 1
S1
D θ12 0.348 0.063 0.062 0.1 A θ11 0.091 0.077 0.077 79.0
S2
D θ12 -0.002 0.060 0.059 94.4 A θ11 -0.015 0.071 0.072 95.0 ma(X; θ) D θ12 -0.002 0.060 0.059 94.4
A θ11 -0.003 0.071 0.074 95.7 S1 + ma(X; θ) D θ12 0.348 0.062 0.062 0.1
A θ11 0.093 0.078 0.079 79.1 S2 + ma(X; θ) D θ12 -0.002 0.060 0.059 94.4
A θ11 0.225 0.069 0.071 11.0 Data Generation Model 2
S1
D θ12 0.144 0.044 0.043 8.4 A θ11 0.044 0.070 0.069 90.8
S2
D θ12 0.002 0.046 0.045 93.9 A θ11 < 0.001 0.069 0.069 95.0 ma(X; θ) D θ12 0.002 0.046 0.045 93.9
A θ11 < 0.001 0.070 0.072 95.2 S1 +ma(X; θ) D θ12 0.144 0.044 0.043 8.4
A θ11 0.044 0.070 0.070 91.0 S2 + ma(X; θ) D θ12 0.002 0.046 0.045 93.9
A θ11 0.241 0.070 0.069 6.8
S1 represents the PS model for the continuous exposure D conditioned on A = 1, given by S1 = E(D|A = 1, Z1); S2 represents the PS model for the binary exposure A, given by S2 = E(A|Z2); ma(X; θ) represents the imputation models for a = 0, 1.
6 Application to the prenatal alcohol exposure study
6.1 Description of the data
The Detroit Longitudinal Cohort is a prospective study of 480 pregnant African-American women from inner-city Detroit and their children, followed from birth to age 19 to investigate the effects of PAE [Jacobson et al., 2004, 2002]. Prenatal alcohol intake was assessed at each visit using a timeline follow-back interview [Jacobson et al., 2002] and summarised as average daily consumption over pregnancy; let T denote the average ounces of absolute alcohol (AA) per day. We treat PAE as a semi-contin-
uous exposure: A = I(T > 0) is a binary indicator of any drinking, and D = log T is the log daily dose among drinkers. The reference dose is set to −2.31, the sample mean of D among exposed mothers. The outcome is the Freedom from Distractibility Index of the Wechsler Intelligence Scales for Children, 3rd edition (WISC-III), measured at age 7 years for 377 children.
We adjust for baseline maternal sociodemographic characteristics, smoking and other substance use during pregnancy, reproductive history, gestational age at screening, and measures of the home environment and maternal cognition (listed in Web Table 7 in Web Appendix G.1). To address missingness, we generate 20 multiply imputed datasets using an imputation model including all variables; further details are given in Web Appendix G.2. Point estimates and standard errors are combined using Rubin’s rul-
es under a missing-at-random assumption [Rubin, 1976, Little and Rubin, 2019].
6.2 Application and findings
We estimate the causal effects of prenatal drinking status and continuous dose using five approaches: (i) conventional covariate regression adjustment; (ii) two–propensity-score regression adjustment; (iii) a two-stage analysis with PS regression adjustment in Stage II; (iv) a two-stage analysis with IPW in Stage II; and (v) a two-stage analysis with AIPW in Stage II. Implementation details are provided in Web Appendix G.3.
Web Table 7 summarises the fitted models for the continuous and binary exposure components, E(D|A = 1, X) and P (A = 1|X). Both models include all candidate covariates, following the recommendation of Brookhart et al. [2006] that including variables related to the outcome can improve precision of causal effect estimates.
12

arXiv Template A PREPRINT
Table 4: Estimated effects of drinking status and log prenatal absolute alcohol consumption per day
D|A = 1 A
Method Estimate Standard error Estimate Standard error Covariate adjustment -0.125 0.515 0.253 1.655 Two–PS regression -0.189 0.572 -0.128 1.621 PSI + PSII -0.011 0.518 -0.013 1.634 PSI + IPWII – – -0.268 2.128 PSI + AIPWII – – -0.176 1.965
Two–PS regression: two-dimensional PS regression adjustment; PSI + PSII: PS regression adjustment in Stages I and II; PSI + IPWII: PS regression in Stage I and IPW in Stage II; PSI + AIPWII: PS regression in Stage I and AIPW in Stage II.
Table 4 reports the estimated causal effects under the five approaches. For all PS–based methods, the estimated effects of both log(AA/day) and drinking status are negative, with the magnitude of the drinking status effect larger than that of the dose effect. By contrast, the conventional covariate adjustment model yields a small positive estimate (0.253) for drinking status and a slightly negative estimate (−0.125) for log dose. Given the reliance of covariate adjustment on correct specification -
of the outcome model [Greenland et al., 1999, Brookhart et al., 2006], these estimates may be more vulnerable to bias than those from the PS–based procedures.
For the log-dose effect among drinkers, PS–based point estimates are small and similar across methods, with standard errors around 0.5. For the drinking status effect, the PS–based estimates range from approximately −0.013 to −0.268, whereas the conventional covariate adjustment estimate is slightly positive. The two-stage AIPW estimator provides a negative point estimate (−0.176) and benefits from its double-robustness property, but, as in our simulations, weightingbased methods yield larger stan-
dard errors than regression-based approaches (approximately 2.0 versus 1.6). Taken together, the PS–based results are compatible with modest harmful causal effects of both increased prenatal alcohol dose among drinkers and drinking status at the reference dose on WISC-III distractibility scores, although none of the estimated effects is statistically significant at the 5% level.
7 Discussion
We propose a causal framework involving a semi-continuous exposure with two-stage estimation. In Stage I, propensity score regression adjustment is used to estimate the continuous exposure effect, and Stage II focuses on the binary exposure via an AIPW estimator. We establish large sample properties for these estimators, characterise their limiting values under PS misspecification, and examine their finite sample performance. Together, these developments provide an interpretable framework that sep-
arates the consequences of any exposure from those of increasing dose, while allowing the use of doubly robust methods for the status effect. Theoretical results and simulations indicate that the proposed estimators perform well in finite samples and that the bias expressions under misspecification offer practical guidance for propensity score modelling with semi-continuous exposures.
A main limitation is that we do not pursue doubly robust estimation of the continuous exposure effect in Stage I. Doubly robust estimators for continuous treatments based on kernel smoothing and flexible generalised PS models [e.g. Zhu et al., 2015, Kennedy et al., 2017, Zhao et al., 2020] could be used to strengthen Stage I and reduce sensitivity to model misspecification.
Children’s cognition in the wider PAE literature is often assessed through multidimensional neurological outcomes across several U.S. cohort studies, including analyses based on hierarchical and structural equation models with PS adjustment [Akkaya Hocagil et al., 2022, Dang et al., 2023]. Extending our semi-continuous two-stage framework to multivariate neurological outcomes, and to settings that pool information across cohorts, is a natural next step.
Acknowledgements
We thank Neil Dodge, Ph.D., for his assistance with data management support. This research was funded by grants to Sandra W. Jacobson and Joseph L. Jacobson from the National Institutes of Health/National Institute on Alcohol Abuse and Alcoholism (NIH/NIAAA; R01-AA025905) and the Lycaki-Young Fund from the State of Michigan. Richard J. Cook was supported by a grant from the Canadian Institutes for Health Research (PJT: 180551). Yeying Zhu is supported by a Discovery grant from the Natural Sciences-
 and Engineering Research Council of Canada (RGPIN-2017-04064). Louise Ryan was supported by the Australian Research Council Centre of Excellence for Mathematical and Statistical Frontiers (ACEMS) CE140100049. Data collection for the Detroit Longitudinal Study was supported by grants from
13

arXiv Template A PREPRINT
NIH/NIAAA (R01-AA06966, R01-AA09524, and P50-AA07606) and NIH/ National Institute on Drug Abuse (R21DA021034).
References
Donald B. Rubin. Estimating causal effects of treatments in randomized and nonrandomized studies. Journal of Educational Psychology, 66(5):688–701, 1974.
Paul R Rosenbaum and Donald B Rubin. The central role of the propensity score in observational studies for causal effects. Biometrika, 70(1):41–55, 1983.
Paul R Rosenbaum and Donald B Rubin. Reducing bias in observational studies using subclassification on the propensity score. Journal of the American Statistical Association, 79(387):516–524, 1984.
Keisuke Hirano and Guido W Imbens. The propensity score with continuous treatments. Applied Bayesian Modeling and Causal Inference from Incomplete-data Perspectives, 226164:73–84, 2004.
Kosuke Imai and David A Van Dyk. Causal inference with general treatment regimes: generalizing the propensity score. Journal of the American Statistical Association, 99(467):854–866, 2004.
Ashley I Naimi, Erica EM Moodie, Nathalie Auger, and Jay S Kaufman. Constructing inverse probability weights for continuous exposures: a comparison of methods. Epidemiology, 25(2):292–299, 2014.
Ermira Begu, Yaroslav Shlyapnikov, Andrej Stergarsek, Peter Frkal, Jože Kotnik, and Milena Horvat. A method for semi-continuous measurement of dissolved elemental mercury in industrial and natural waters. International Journal of Environmental Analytical Chemistry, 96(7):609–626, 2016.
Sandra W Jacobson, Lisa M Chiodo, Robert J Sokol, and Joseph L Jacobson. Validity of maternal report of prenatal alcohol, cocaine, and smoking in relation to neurobehavioral outcome. Pediatrics, 109(5):815–825, 2002.
Sandra W Jacobson, Joseph L Jacobson, Robert J Sokol, Lisa M Chiodo, and Raluca Corobana. Maternal age, alcohol abuse history, and quality of parenting as moderators of the effects of prenatal alcohol exposure on 7.5-year intellectual function. Alcoholism: Clinical and Experimental Research, 28(11):1732–1745, 2004.
Joseph L Jacobson, Neil C Dodge, Matthew J Burden, Rafael Klorman, and Sandra W Jacobson. Number processing in adolescents with prenatal alcohol exposure and adhd: differences in the neurobehavioral phenotype. Alcoholism: Clinical and Experimental Research, 35(3):431–442, 2011.
Catherine E Lewis, Kevin GF Thomas, Neil C Dodge, Christopher D Molteno, Ernesta M Meintjes, Joseph L Jacobson, and Sandra W Jacobson. Verbal learning and memory impairment in children with fetal alcohol spectrum disorders. Alcoholism: Clinical and Experimental Research, 39(4):724–732, 2015.
Catherine E Lewis, Kevin GF Thomas, Christopher D Molteno, Matthias Kliegel, Ernesta M Meintjes, Joseph L Jacobson, and Sandra W Jacobson. Prospective memory impairment in children with prenatal alcohol exposure. Alcoholism: Clinical and Experimental Research, 40(5):969–978, 2016.
Tugba Akkaya Hocagil, Richard J Cook, Sandra W Jacobson, Joseph L Jacobson, and Louise M Ryan. Propensity score analysis for a semi-continuous exposure variable: a study of gestational alcohol exposure and childhood cognition. Journal of the Royal Statistical Society Series A: Statistics in Society, 184(4):1390–1413, 2021.
Kecheng Li, Tugba Akkaya-Hocagil, Richard J Cook, Louise M Ryan, R Colin Carter, Khue-Dung Dang, Joseph L Jacobson, and Sandra W Jacobson. Use of generalized propensity scores for assessing effects of multiple exposures. Statistics in Biosciences, pages 1–30, 2023.
Heejung Bang and James M Robins. Doubly robust estimation in missing data and causal inference models. Biometrics, 61(4):962–973, 2005.
James Robins, Mariela Sued, Quanhong Lei-Gomez, and Andrea Rotnitzky. Comment: performance of double-robust estimators when “inverse probability" weights are highly variable. Statistical Science, 22(4):544–559, 2007.
Jerzy Splawa-Neyman, Dorota M Dabrowska, and Terrence P Speed. On the application of probability theory to agricultural experiments. essay on principles. section 9. Statistical Science, pages 465–472, 1990.
Donald B Rubin. Randomization analysis of experimental data: the fisher randomization test comment. Journal of the American Statistical Association, 75(371):591–593, 1980.
Donald B Rubin. Comment: Neyman (1923) and causal inference in experiments and observational studies. Statistical Science, 5(4):472–480, 1990.
Stephen R Cole and Miguel A Hernán. Constructing inverse probability weights for marginal structural models. American Journal of Epidemiology, 168(6):656–664, 2008.
14

arXiv Template A PREPRINT
Valerie A Smith, Brian Neelon, Matthew L Maciejewski, and John S Preisser. Two parts are better than one: modeling marginal means of semicontinuous data. Health Services and Outcomes Research Methodology, 17:198–218, 2017.
James M Robins. Marginal structural models versus structural nested models as tools for causal inference. Statistical Models in Epidemiology, the Environment, and Clinical Trials, pages 95–133, 2000.
Stijn Vansteelandt and Rhian M Daniel. On regression adjustment for the propensity score. Statistics in Medicine, 33 (23):4053–4072, 2014.
Miguel Ángel Hernán, Babette Brumback, and James M Robins. Marginal structural models to estimate the causal effect of zidovudine on the survival of hiv-positive men. Epidemiology, 11(5):561–570, 2000.
Michele Jonsson Funk, Daniel Westreich, Chris Wiesen, Til Stürmer, M Alan Brookhart, and Marie Davidian. Doubly robust estimation of causal effects. American Journal of Epidemiology, 173(7):761–767, 2011.
Aad W Van der Vaart. Asymptotic statistics, volume 3. Cambridge university press, 2000.
Halbert White. Maximum likelihood estimation of misspecified models. Econometrica: Journal of the Econometric Society, pages 1–25, 1982.
M Alan Brookhart, Sebastian Schneeweiss, Kenneth J Rothman, Robert J Glynn, Jerry Avorn, and Til Stürmer. Variable selection for propensity score models. American Journal of Epidemiology, 163(12):1149–1156, 2006.
Donald B Rubin. Inference and missing data. Biometrika, 63(3):581–592, 1976.
Roderick JA Little and Donald B Rubin. Statistical analysis with missing data, volume 793. John Wiley & Sons, 2019.
Sander Greenland, Judea Pearl, and James M Robins. Causal diagrams for epidemiologic research. Epidemiology, pages 37–48, 1999.
Yeying Zhu, Donna L Coffman, and Debashis Ghosh. A boosting algorithm for estimating generalized propensity scores with continuous treatments. Journal of Causal Inference, 3(1):25–40, 2015.
Edward H Kennedy, Zongming Ma, Matthew D McHugh, and Dylan S Small. Non-parametric methods for doubly robust estimation of continuous treatment effects. Journal of the Royal Statistical Society Series B: Statistical Methodology, 79(4):1229–1245, 2017.
Shandong Zhao, David A van Dyk, and Kosuke Imai. Propensity score-based methods for causal inference in observational studies with non-binary treatments. Statistical Methods in Medical Research, 29(3):709–727, 2020.
Tugba Akkaya Hocagil, Louise M Ryan, Richard J Cook, Sandra W Jacobson, Gale A Richardson, Nancy L Day, Claire D Coles, Heather Carmichael Olson, and Joseph L Jacobson. A hierarchical meta-analysis for settings involving multiple outcomes across multiple cohorts. Stat, 11(1):e462, 2022.
Khue-Dung Dang, Louise M Ryan, Tugba Akkaya Hocagil, Richard J Cook, Gale A Richardson, Nancy L Day, Claire D Coles, Heather Carmichael Olson, Sandra W Jacobson, and Joseph L Jacobson. Bayesian modelling of effects of prenatal alcohol exposure on child cognition based on data from multiple cohorts. Australian & New Zealand Journal of Statistics, 65(3):167–186, 2023.
15

---

## Processing Information

- **Processing Library:** Zotero PDFWorker
- **Processing Date:** 2026-02-10T18:17:22.177Z
- **Text Length:** 52153 characters
- **Success:** Text extraction completed
- **PDF Library Used:** Zotero PDFWorker
- **Pages Processed:** 15 of 15
