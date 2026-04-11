# PDF Document: Ortyashov and Ghassami - 2025 - A Sensitivity Analysis Framework for Causal Inference Under Interference.pdf

**File Path:** Ortyashov and Ghassami - 2025 - A Sensitivity Analysis Framework for Causal Inference Under Interference.pdf

**Processed Date:** 2026-02-10T18:19:00.477Z

**File Size:** 446.46 KB

**Total Pages:** 21

**Extracted Pages:** 21

**PDF Library:** Zotero PDFWorker

**Attachment Item ID:** 3371

**Title:** A Sensitivity Analysis Framework for Causal Inference Under Interference

**Collection:** Large Files > Random Papers

---

## Extracted Text Content

A Sensitivity Analysis Framework for Causal Inference
Under Interference
Matvey Ortyashov AmirEmad Ghassami Department of Mathematics and Statistics, Boston University
Abstract
In many applications of causal inference, the treatment received by one unit may influence the outcome of another, a phenomenon referred to as interference. Although there are several frameworks for conducting causal inference in the presence of interference, practitioners often lack the data necessary to adjust for its effects. In this paper, we propose a weighting-based sensitivity analysis framework that can be used to assess the systematic bias arising from ignoring interference. Unlike most o-
f the existing literature, we allow for the presence of unmeasured confounding, and show that the combination of interference and unmeasured confounding is a notable challenge to causal inference. We also study a third factor contributing to systematic bias: lack of transportability. Our framework enables practitioners to assess the impact of these three issues simultaneously through several easily interpretable sensitivity parameters that can reflect a wide range of intuitions about the data.
Keywords– causal inference, sensitivity analysis, interference, unmeasured confounding, transportability, spillover effects
1 Introduction
Researchers in causal inference frequently invoke the assumption of no interference, which states that the treatment received by any unit should only affect the outcome of that unit (Rubin, 1980). Due to the widespread adoption of this assumption, most literature ignores the presence of spillover effects, which occur when one unit’s treatment may “spill over,” and have a causal impact on (i.e., interfere with) another’s outcome. Ignoring spillover effects can result in systematic bias, a form of b-
ias that cannot be mitigated by increasing the sample size. Concerns about the bias introduced by spillover effects are particularly relevant in fields where interference is common, such as the study of infectious diseases (VanderWeele et al., 2015).
While the role of ignored interference in creating systematic bias is widely recognized, few authors have explicitly explored the structure, the components, and the extent of this bias. As a result, notwithstanding a proliferation of recent research concerned with proper estimation strategies in the presence of observed interference (Liu et al., 2016; Forastiere et al., 2021; Lee et al., 2023; McNealis et al., 2024; Tortu ́ et al., 2024; Papadogeorgou and Samanta, 2023; Forastiere et al., 2024), t-
he subject of sensitivity analysis for ignored interference has hitherto been underexplored. Despite the limited amount of literature concerning the topic, sensitivity analyses can play an important role in the presence of spillover effects. In many settings, practitioners may incorrectly assume that there are no spillover effects within a given set of data or, due to cost or privacy concerns, may lack the ability to learn the structure of the interference present in the data. A sensitivity analys-
is framework would enable researchers facing these issues to evaluate how ignoring interference impacts their estimates and gauge the strength of interference necessary to change their findings.
1
arXiv:2511.21534v1 [stat.ME] 26 Nov 2025

In this paper, we study the structure of the bias that arises due to failing to adjust for various complexities introduced by the presence of interference. Unlike the majority of the existing literature on interference (with some exceptions, such as Chen et al. (2025), Wu and Franks (2025), and Khot et al. (2025)), we allow for the presence of unobserved confounders. Importantly, we will demonstrate that if interference is present, the impacts of unmeasured confounding on the bias differ from tho-
se that exist without interference, making the combination of unmeasured confounding and ignored interference a distinct challenge to causal inference. Using our bias decomposition, we propose a sensitivity analysis framework that parametrizes the bias through several easily interpretable sensitivity parameters that reflect a practitioner’s beliefs about factors such as the strength of interference effects and unmeasured confounding. Our analyses also account for another data complexity that can o-
ccur alongside interference: the presence of undefined potential outcomes.
Furthermore, we consider settings where the researcher aims to transport their causal findings from a reference domain to a target domain. For this case, we investigate a third source of bias: lack of transportability. Causal transportability, alongside several concepts closely related to it, such as external validity, generalizability, data fusion, and transfer learning, has garnered significant attention over the past several years (Bareinboim and Pearl, 2016; Mitra et al., 2022; Huang, 2024; De-
gtiar and Rose, 2023; Colnet et al., 2024; Vuong et al., 2025). As discussed by Buchanan et al. (2023) as well as Bhadra and Schweinberger (2025), though there is a wide range of considerations about transporting causal effects in the presence of interference (one of which is that transportability requires similar patterns of interference between populations, as noted by Hern ́an and VanderWeele (2011)), few authors have explicitly examined them. We study how our causal estimands change between di-
fferent populations, and extend our sensitivity analysis to account for lack of transportability.
To the best of our knowledge, our paper is the first to develop a comprehensive sensitivity analysis framework that allows practitioners to simultaneously account for the bias that comes from ignored interference, unmeasured confounding, and lack of transportability. Although Forastiere et al. (2021) discuss the bias of an estimator that does not adjust for interference and unmeasured confounding, they do not present sensitivity parameters or offer a structured approach that can be employed by a p-
ractitioner wishing to calculate the bias of their naive estimator. To date, only VanderWeele et al. (2015) have developed a formal sensitivity analysis framework for unmeasured confounding in the presence of interference, though their methodology does not account for ignored interference or lack of transportability. Unlike their work, our method not only incorporates the aforementioned data complexities, but also does not require strong assumptions about the outcome generating process, the distri-
bution of the unmeasured confounder, or the selection bias. However, if one is willing to make certain assumptions, we demonstrate that our bias decomposition can be significantly simplified. Our bias decomposition generalizes previous weighting-based results, such as those of Shen et al. (2011), and is related to the approaches of Hong et al. (2021) and Huang (2024).
The rest of this paper is organized as follows. Section 2 describes the problem setting. In Section 3, we provide the main theoretical results for bias arising from unmeasured confounding and interference. Section 4 extends the results of Section 3 to the task of causal transport. Section 5 extends the results of Sections 3 and 4 to undefined potential outcomes. We conclude in Section 6. All of the proofs are provided in the Appendix.
2 Problem Description
Consider a setting in which unit i ∈ I receives treatment Ai ∈ {0, 1} and has an observed outcome Yi. Without interference, unit i’s outcome depends only on unit i’s treatment; however, in the presence of interference, Yi may also depend on the treatments received by other units (Rubin, 1974, 1990). We refer to those units whose treatments affect Yi as the neighbors of unit i. We let Ni denote the set of indices of unit i’s neighbors, and let the vector ANi represent their treatments. We do not im-
pose any restrictions on which units can belong to Ni. Thus, our approach allows for more flexibility than the common setting of
2

partial interference, in which units are partitioned into blocks, and interference can only occur within blocks, not across them (Sobel, 2006). We adopt the potential outcomes framework, where units’ outcomes under different realizations of the treatments are considered distinct random variables (Rubin, 1974). Specifically,
if Ai is set to a and ANi is set to a, we write the potential outcome of unit i as Y (a,a)
i . Furthermore, we let Xi and Ui denote the observed and unobserved pre-treatment covariates respectively. For the context of causal transport, we use variable Si to demarcate units in the reference population (Si = 1) from those in the target population (Si = 2). We assume that our observational data only contains units with Si = 1, and that the two populations may differ in terms of covariates (as long as those covariates do not affect the outcome) and treatment generating mechanisms.
Under neighborhood interference, a unit with ni neighbors may have 2ni+1 distinct potential outcomes. Nevertheless, in a majority of applications, many of these potential outcomes would equal each other. Thus, we assume that there exists a scalar-valued function gi(ANi ) = Gi which acts as a summary of the treatments received by unit i’s neighbors and reduces the number of potential outcomes we need to consider. This assumption is formalized below.
Assumption 1 (Outcome Exposure Mapping). For all i ∈ I, there exists a function gi : {0, 1}ni → R such that for any two different sets of treatments received by a unit’s neighbors, a1 and a2, we have that
Y (a,a1)
i = Y (a,a2)
i
for a ∈ {0, 1}, as long as gi(a1) = gi(a2). We assume, without loss of generality, that for all i ∈ I, gi(ANi ) ∈ {0, 1, ..., gmax} (i.e., gi(ANi ) is discrete). Moreover, we assume that gi only depends on i through the dimension of the domain, and that gmax < maxi 2ni .
Effectively, Assumption 1 states that if Ai = a and Gi = g, the potential outcome can be written as Y (a,g)
i. The function gi is a particular case of the exposure mapping described by Aronow and Samii (2017). We call function gi the outcome exposure mapping, Gi the neighborhood treatment, and Ai the personal treatment of unit i.1 Throughout the rest of this paper, we drop the subscript i and refer to generic instances of the aforementioned variables without the subscript.
Next, we propose a version of the consistency assumption, which relates the unit’s observed outcome, Y , to its potential outcomes.
Assumption 2 (Consistency under Interference). The potential outcome Y (a) satisfies Y (a) = Y (a,G) =
Pgmax
g=g0 I(G = g) · Y (a,g). Moreover, the observed outcome Y satisfies Y = P1
a=0 I(A = a) · Y (a).
Taken together, the two components of Assumption 2 imply that if a unit receives personal treatment a and neighborhood treatment g, its outcome equals Y (a,g), i.e., Y = P1
a=0
Pgmax
g=0 I(A = a, G = g) · Y (a,g). In addition to Assumptions 1 and 2, we impose one ancillary constraint to develop tractable bias decompositions in Sections 3 and 4.
Assumption 3 (Well-Defined Potential Outcomes). The potential outcomes Y (a) and Y (a,g) for a ∈ {0, 1}, g ∈ {0, 1, ..., gmax} are well-defined for every unit.
In general, Assumption 3 does not necessarily hold in the presence of interference, and thus, is not required for our bias decomposition. Nevertheless, we introduce Assumption 3 in order to avoid unnecessary complexities in notation that do not employ any new methodological tools and do not offer any additional insights into our main results. In Section 5, we explore cases in which Assumption 3 may be violated, and extend our sensitivity analysis to such settings.
1Note that the exposure mapping assumption is not the only way to define potential outcomes in the presence of interference: alternative definitions, typically based on a given treatment allocation strategy, have also been posited in the literature (Tchetgen Tchetgen and VanderWeele, 2012; Liu et al., 2016; Lee et al., 2023).
3

2.1 Estimands
In this paper, we have two primary parameters of interest: the natural average main effect, denoted by φ1, and the transported natural average main effect, denoted by φ2. In order to describe these parameters, we begin by considering the controlled individual main effect, τ (g):
τ (g) := Y (1,g) − Y (0,g).
τ (g) represents the individual causal effect of changing A when G is set to g, and can be viewed as a direct controlled effect (Robins and Greenland, 1992; VanderWeele, 2011). In addition to τ (g), for each unit, we can define the natural individual main effect, κ, which measures the causal impact of changing A while G equals the actual value of neighborhood treatment received by the unit:
κ := Y (1,G) − Y (0,G) = Y (1) − Y (0) =
gmax X
g=0
I(G = g) · τ (g).
We can then define both of our parameters of interest as averages of κ, one taken over the reference population (S = 1), the other over the target population (S = 2):
φs := E Y (1,G) − Y (0,G)
| {z }
κ
|S = s = E Y (1) − Y (0)|S = s =
gmax X
g=0
E I(G = g) · τ (g)|S = s .
As the average difference between Y (1,G) and Y (0,G), φs can be interpreted as measuring the impact of changing A from 0 to 1 while G is allowed to vary as it naturally does in the population where S = s.
Remark 1. Note that φ2 is a generalization of a causal estimand commonly presented in the literature (Forastiere et al., 2021; Liu et al., 2023; Tortu ́ et al., 2024; Zigler et al., 2025) and given by
θ=
gmax X
g=0
p(G = g|S = 1) · E τ (g)|S = 1 =
gmax X
g=0
E I(G = g)|S = 1 · E τ (g)|S = 1 .
The formula above highlights that θ is a special case of φ2 for populations where: (i) τ (g) ⊥⊥ G|S = 2, (ii) G ⊥⊥ S, and (iii) E τ (g)|S = 1 = E τ (g)|S = 2 . Therefore, if G ⊥⊥ τ (g)|S = 1, θ = φ1. Otherwise, while φ1 can be viewed as the average impact of changing A if G was allowed to vary as it does in the reference population, θ represents the average impact of changing A if the neighborhood treatment in the reference population was randomized, with probabilities given by p(G = g|S = 1).
Remark 2. Though we have hitherto discussed parameters that measure the causal effect of changing the personal treatment A, we can also define spillover effects, which measure the causal impact of changing the neighborhood treatment G. Similarly to the natural individual main effect, we can define the natural individual spillover effect at A = a, denoted by γ(a):
γ(a) = Y (a,G) − Y (a,0) = Y (a) − Y (a,0) =
gmax X
g=0
I(G = g) · Y (a,g) − Y (a,0).
γ(a) measures the causal spillover effect for any given unit by comparing the potential outcome where A = a and G is set to the actual neighborhood treatment received by that unit with the potential outcome where A = a and G is set to 0. Note that the individual total effect can be defined in terms of the individual natural main and spillover effects:
Individual Total Effect = Y (1,G) − Y (0,0) = Y (1) − Y (0,0) = κ + γ(0)
While we introduce spillover effects in this section, our focus in this work remains developing a sensitivity analysis framework for φ1 and φ2. Thus, we only discuss spillover effects insofar as they figure into our bias decompositions for the average natural main effects.
4

In settings where all of the relevant variables are observed, the requirements of conditional exchangeability and positivity are typically posited to allow for identification. However, since we wish to develop a framework that allows for the existence of unobserved confounders and lack of transportability, we will adjust these assumptions. Before doing so, we differentiate between several different categories of covariates in our setting. Namely, we write X = XAY ∪ XGY ∪ XAG ∪ XAS ∪ XGS and U = U-
AY ∪ UGY ∪ UAG ∪ UAS ∪ UGS where variables in {XAY , UAY } are common causes of A and Y , variables in {XGY , UGY } are common causes of AN and Y , variables in {XAG, UAG} are common causes of A and AN , variables in {XAS, UAS} are common causes of A and S, and variables in {XGS, UGS} are common causes of AN and S. Using this notation, we posit the following modified versions of positivity and conditional exchangeability under interference.
Assumption 4 (Positivity). For a ∈ {0, 1} and s ∈ {1, 2} we have, almost surely in (X, U)
p(A = a|S = s, X, U) > 0 and p(S = s|X, U) > 0.
Assumption 5 (Weak Conditional Exchangeability). For a ∈ {0, 1}, we have
Y (a) ⊥⊥ A|S,  ̃X,  ̃U
where  ̃X = XAY ∪ XAG ∪ XAS and  ̃U = UAY ∪ UAG ∪ UAS.
Remark 3. Assumption 5 highlights three additional challenges introduced by the combination of interference and lack of transportability.
• Under interference, one needs to condition on common causes of A and AN , even if these variables are not common causes of A and Y , and do not need to be adjusted for in the absence of interference.
• Since the reference and target populations may differ in terms of their treatment generating mechanisms, S also serves as a common cause of A and AN , and thus, must be adjusted for.
• Because the reference and target populations may differ in terms of their covariates (namely, causes of A and AN ), there is a collider structure that necessitates adjusting for common causes of A and S.
Note that because Assumption 5 allows for the existence of a set of unobserved covariates that ensures independence, it is significantly weaker than the version of exchangeability typically presented in the absence of unmeasured confounding.
Remark 4. The combination of Assumptions 2 and 5 implicitly precludes most forms of dependence between A and AN . In Assumption 2, we assume that Y (a) equals Y (a,G), as opposed to Y (a,G(a)), a condition which would typically be violated by the existence of a direct causal pathway from A to AN . In Assumption 5, we assume that the common causes of A and AN are sufficient to close the confounding pathway between A and Y through AN ; however, this would not hold true in most settings in which dire-
ct causal pathways from AN to A exist.
Under Assumptions 1-5, one could identify φs if they were to observe  ̃U. One possible approach is to use inverse probability weighting (IPW), as in Proposition 1.
Proposition 1 (IPW Identification Formula). Under Assumptions 1 through 5, φs, can be identified as
φs = E I(A = 1) · Y
p(A = 1|S = s,  ̃X,  ̃U) |S = s − E I(A = 0) · Y
p(A = 0|S = s, X ̃ ,  ̃U) |S = s .
Assumptions 1-5 are sufficiently strong to develop a bias decomposition for φ1. However, reasoning about φ2 is inherently more challenging, as the practitioner does not observe any units from the target population. Thus, in order to develop a tractable bias decomposition for φ2, we assume that only the treatment generating mechanism, not the outcome generating mechanism, may differ between the two populations, and that the covariates which are the causes of Y do not differ between the two populati-
ons. Assumption 6 formalizes this requirement.
5

Ai Yi
Ui,AY
Ai,1
Ai,2
Ai,3
...
Ai,ni
Gi
Ui,GY
Ui,AG
Si
Ui,AS
Ui,GS
Figure 1: A directed acyclic graph consistent with our assumptions. Xi is omitted for legibility, {Ai,1, Ai,2, ..., Ai,ni} = ANi. Note that this graph is meant for general illustration and there are other systems which satisfy our assumptions (e.g., the five categories of the covariates do not have to be disjoint).
Assumption 6 (Transportability Assumptions). For any a ∈ {0, 1} and g ∈ {0, 1, ..., gmax}, we have
• Y (a,g) ⊥⊥ AN |XGY , UGY ,
• S only has a direct causal effect on A and G, and
• Y and S do not share common causes, or, in other words, Y (a,g) ⊥⊥ S.
One graphical model consistent with our assumptions is depicted in Figure 1. While we introduce φ1 and φ2 together in this section, to provide sufficient detail for both bias decompositions, we investigate them separately in Sections 3 and 4 respectively.
3 Sensitivity Analysis for Unmeasured Confounding and Unob
served Interference
As discussed in Section 1, we examine two limitations to conducting causal inference in the presence of interference: failing to adjust for interference and failing to account for unobserved confounders. Both of these issues can introduce systematic bias into estimation; therefore, we examine both in tandem. To formalize, we consider the case where a practitioner tries to estimate the following functional, which, in the absence of interference and unmeasured confounding, equals φ1:
ψ=E
h I(A = 1) · Y
p(A = 1|S = 1, XAY ) S = 1
i
−E
h I(A = 0) · Y
p(A = 0|S = 1, XAY ) S = 1
i
.
A typical estimator of ψ is the IPW estimator (Hirano and Imbens, 2001), which is given by
ψˆ = En
h I(A = 1, S = 1) · Y pˆ(A = 1|S = 1, XAY ) · pˆ(S = 1)
i
−En
h I(A = 0, S = 1) · Y
1 − pˆ(A = 1|S = 1, XAY ) · pˆ(S = 1)
i
.
In the formula above, En is the empirical expectation operator, pˆ(S = 1) is an estimate of p(S = 1), and pˆ(A = 1|XAY , S = 1) is an estimator of p(A = 1|XAY , S = 1). Throughout the rest of this section, we assume that the nuisance function estimator and pˆ(S = 1) are correctly specified and that the estimation
6

error of ψˆ for ψ is negligible. Thus, we can treat ψˆ as an unbiased estimator of ψ. Our goal is to study the bias that arises from using ψˆ instead of an unbiased estimator of φ1. Specifically, we are interested in the following quantity:
Biasφ1 (ψˆ) = ψ − φ1.
The differences between the formula of ψ given above and the IPW identification formula of φ1 highlight two sources of bias that result from the practitioner’s use of the naive estimator.
First, as described in Section 2, because of the causal path between A and Y through AN , one needs to condition on common causes of A and AN (XAG and UAG) as well as the common causes of A and S (XAS and UAS) for Assumption 5 to hold. However, if the practitioner is unaware of interference, they have no reason to include these common causes inside the propensity score model. The second source of bias arises from the fact that the naive propensity score model used in ψˆ does not account for unmeas-
ured confounders of the relationship between A and Y (UAY ). This becomes particularly problematic in settings with interference, since UAY may frequently contain both, individual-level covariates (e.g., a given school district’s spending per student), as well as neighborhood-level covariates (e.g., the average spending per student of neighboring school districts). Thus, if the practitioner is ignoring interference, they may not only be missing common causes of A and AN , common causes of A and S,-
 and individual-level unmeasured confounders, but are likely ignoring most of the neighborhood-level confounders for the relationship between A and Y . Our sensitivity analysis enables practitioners to address the bias resulting from all of these omissions.
3.1 Bias Decomposition and Sensitivity Parameters
To conduct our sensitivity analysis, we begin by comparing ψ with the unbiased IPW form of φ1 (as presented in Proposition 1) through a multiplicative error in weights, given by
εa = p(A = a|S = 1, X ̃ ,  ̃U)
p(A = a|S = 1, XAY ) .
We refer to p(A = a|S = 1, X ̃ , U ̃ ) as the true propensity score for A = a and to p(A = a|S = 1, XAY ) as the pseudo-propensity score for A = a. We call εa the multiplicative error in weights (MEW) score for A = a. εa forms the basis of our sensitivity analysis, as Biasφ1 (ψˆ) depends on εa and the potential outcomes. We formalize this in Theorem 1.
Theorem 1 (Bias Decomposition for φ1). Under Assumptions 1 through 5, the bias of the naive estimator, ψˆ, for the natural average treatment effect, φ1, can be written as
Biasφ1 (ψˆ) =
X
a∈{0,1}
(−1)1−a ρY (a,0),εa · σY (a,0) · σεa (T1)
+
X
a∈{0,1}
(−1)1−a ργ(a),εa · σγ(a) · σεa , (T2)
where σX represents the standard deviation of arbitrary variable X conditional on S = 1, and ρW,Z represents the correlation between arbitrary variables W and Z conditional on S = 1.
While the details of the proof are left for Appendix A, we provide some intuition behind Theorem 1 below. T1 and T2 each highlight a different aspect of the bias that is introduced by ignored interference and unmeasured confounding. Namely, the bias of the naive estimator for φ1 is governed by a sum of covariances that reflect the relationship between MEW scores and two types of causal variables: the baseline potential
7

outcomes and the natural spillover effects. We write each of these covariances as a product of a correlation term and two standard deviation terms, which form the basis of our sensitivity analysis framework.
T1 reflects the joint variability of MEW scores and the baseline potential outcomes, Y (1,0) and Y (0,0). We refer to Y (1,0) and Y (0,0) as the baseline potential outcomes since we view G = 0 as the reference neighborhood treatment. Three terms contribute to T1: the correlation between the baseline potential outcomes and MEW scores (ρY (a,0),εa ), the standard deviation of the baseline potential outcomes (σY (a,0) ), and the standard deviation of MEW scores (σεa ). If the variability of the basel-
ine potential outcomes is high (σY (a,0) is large), if the variance of the MEW scores is significant (σεa is large), and if MEW scores and potential outcomes are highly correlated (|ρY (a,0),εa | is close to 1), T1 would contribute significantly to the bias.
T2 is a measure of the joint variability of individual natural spillover effects (γ(a)) and MEW scores. T2 contributes significantly to the bias if the following three conditions are met simultaneously: if there is a large amount of heterogeneity in the natural individual spillover effects (σ2
γ(a) is large), if there is significant
variability in MEW scores (σε2a is large), and if there is a strong correlation between MEW scores and spillover effects (|ργ(a),εa | is close to 1).
Remark 5. The presence of T2 highlights the fact that under interference, even in the absence of common causes of A and AN and common causes of A and S, the effects of unmeasured confounding on the bias still depend on the distribution of the individual natural spillover effects (γ(a)). Intuitively, T2 adjusts for the fact that Y (a) is no longer equal to Y (a,0), but is now a function of G and several distinct variables, Y (a,g) for a ∈ {0, 1} and g ∈ {0, 1, ..., gmax}. Note that in the absence o-
f interference, our bias decomposition reduces to the one proposed by Shen et al. (2011):
Biasφ1 (ψˆ) =
X
a∈{0,1}
(−1)1−a ρY (a,0),ε′
a · σY (a,0) · σε′
a.
where ε′
a = p(A=a|XAY ,UAY ,S=1)
p(A=a|S=1,XAY ) .
3.2 Specifying the Sensitivity Parameters
Next, we provide several guidelines for specifying the parameters of our bias decomposition. Note that these guidelines are meant to be widely applicable, and that in many cases, practitioners may have certain domain knowledge that allows them to specify these parameters in a less conservative manner.
Specifying Parameters in T1 As discussed previously, the first term reflects the relationship between MEW scores and the baseline potential outcomes. Six sensitivity parameters need to be specified in T1.
σY (a,0) acts as a scaling factor in T1. If Y (0,0) and Y (1,0) (the baseline potential outcomes) are bounded
between yref
min and yrmefax, then by Popoviciu’s inequality on variances, σY (a,0) is bounded from above by
1
2 (yrmefax − yref
min). We propose specifying an upper bound for both values of σY (a,0) as a percentage of their maximum possible value through a single sensitivity parameter ηbaseline ∈ [0, 1]:
max
a∈{0,1}
σY (a,0) ≤ ηbaseline
2 · (yref
max − yref
min).
Tools like contour plots can be used to assess the sensitivity of ψˆ to a variety of values of ηbaseline. If the practitioner has additional information about the baseline potential outcomes, they could specify different
values of ηbaseline for σY (1,0) and σY (0,0) .
σεa is a measure of variability in MEW scores. Note that the mean of εa is 1. If εa deviates significantly from this value, that would imply that the pseudo-propensity score for A = a significantly overestimates (if
8

εa < 1) or underestimates (if εa > 1) the true propensity score (i.e., the effects of ignoring common causes and confounding are fairly strong). Following an argument analogous to the one presented by Shen et al.
(2011), it can be proven that for a ∈ {0, 1}, σεa ≤
q
E 1−p(A=a|S=1,XAY )
p(A=a|S=1,XAY ) |S = 1 (this upper bound can be
calculated from the observed data). Once again, unless additional information is available to the practitioner, we propose specifying an upper bound for both values of σεa as some proportion of the maximum standard deviation of the MEW scores through a single sensitivity parameter ηε ∈ [0, 1]:
σεa ≤ ηε ·
s
E 1 − p(A = a|S = 1, XAY )
p(A = a|S = 1, XAY ) |S = 1 for a ∈ {0, 1}.
Remark 6. The choice of ηε can be viewed from the perspective of previous sensitivity analyses by Rosenbaum (2002) and Tan (2006). Namely, instead of specifying ηε, one could assume that εa is bounded between αa−1 and αa, where αa ≥ 1 is a sensitivity parameter. In that case, by the Bhatia-Davis inequality, σεa ≤
p
αa − 2 + αa−1. A choice of αa which provides a non-trivial bound on σεa in light of the distribution of the pseudo-propensity scores can be viewed as corresponding to ηε < 1. A value of 1 for αa and 0 for ηε corresponds to the setting in which the pseudo-propensity score is identical to the true propensity score (i.e., no confounding or interference).
The two ρY (a,0),εa values describe the correlation between the baseline potential outcomes and MEW scores, and determine the sign of T1. If these correlations are zero, then T1 does not contribute to the bias, despite the presence of unmeasured confounding and interference. Generally, a positive ρY (a,0),εa implies that units with higher values of Y (a,0) tend to have pseudo-propensity scores that are lower than their true propensity scores; meanwhile, a negative ρY (a,0),εa indicates that the ps-
eudo-propensity scores of units with high values of Y (a,0) tend to overestimate their true propensity scores. If a practitioner does not have domain knowledge which allows them to specify the signs of the correlations, they can first set these signs so as to maximize bias, and then vary their magnitude from 0 to 1 by setting ρbaseline = |ρY (0,0),ε0 | = |ρY (1,0),ε1 |.
Specifying Parameters in T2 T2 describes the relationship between the individual natural spillover effects and MEW scores. To determine the magnitude and sign of T2, four additional terms (beyond those present in T1) need to be specified.
σγ(a) measures the variability of natural spillover effects if G is allowed to vary as it does in the reference population. Note that this term is large if there is a significant number of units which receive neighborhood treatments other than 0 and if there is notable variability in causal contrasts of the form Y (a,g) − Y (a,0). If the natural spillover effects (γ(a)) are both bounded between xref
min and xrmefax for a ∈ {0, 1}, the worst-case
bound for this term is 1
2 · (xrmefax − xref
min). In the absence of additional information, we suggest specifying an upper bound for both values of σγ(a) as a single proportion of the maximum standard deviation of γ(a) through the sensitivity parameter ηγ ∈ [0, 1]:
max
a∈{0,1}
σγ(a) ≤ ηγ
2 · (xref
max − xref
min).
ργ(a),εa determines the sign of T2. Generally, if the correlation is positive, then the pseudo-propensity scores of units with higher values of γ(a) usually underestimate their true propensity scores, and if the correlation is negative, units with higher values of γ(a) have pseudo-propensity scores that typically overestimate their true propensity scores. If domain knowledge does not allow a practitioner to specify these correlations, we propose setting the signs of ργ(a),εa so as to maximize bias-
, and adjusting their common magnitude
ρspillover = |ργ(0),ε0 | = |ργ(1),ε1 | from 0 to 1.
9

4 Sensitivity Analysis for Transportability
In this section, we consider settings in which the practitioner is interested in estimating the transported natural average treatment effect (φ2) alongside the natural average treatment effect (φ1). Because treatment assignment may differ between the target and reference populations (and our parameter of interest depends on the distribution of G), in general, φ1 ̸= φ2. If the practitioner ignores the differing treatment assignments between the two populations, and assumes that their naive estimate-
 is generalizable to the target population, they will incur another source of bias due to lack of transportability, in addition to the bias arising from ignoring interference and unmeasured confounding (Degtiar and Rose, 2023). Proposition 1 highlights that bias due to lack of transportability occurs since the practitioner’s naive estimator, ψˆ, only incorporates information from the reference population (S = 1), rather than the target population (S = 2).
To help practitioners interested in estimating the bias they incur due to unmeasured confounding, ignored interference, and lack of transportability, we decompose the bias of ψˆ for φ2 as follows:
Biasφ2 (ψˆ) = ψ − φ2 = ψ − φ1 + φ1 − φ2 .
The second equality forms the basis of our bias decomposition, which is formalized below.
Theorem 2 (Bias Decomposition for φ2). Under Assumptions 1 through 6, the bias of the naive estimator, ψˆ, for the transported natural average treatment effect, φ2, can be written as
Biasφ2 (ψˆ) = Biasφ1 (ψˆ)
| {z }
(T1 +T2 )
+
gmax X
g=0
ρ ̃τ(g),υ(g) · σ ̃τ(g) · σ ̃υ(g) + E τ (g) · p(G = g|S = 1) − p(G = g|S = 2) ,
| {z }
(T3 )
where υ(g) = p(G = g|S = 1, XGY , UGY )−p(G = g|S = 2, XGY , UGY ), T1 and T2 are defined as in Theorem 1, while σ ̃X and ρ ̃W,Z are defined as in Theorem 1, but unconditionally (i.e., over both, the reference and target populations).
Theorem 2 underlines that the difference between φ1 and φ2, given by T3, depends on two main factors for each level of g. The first is the covariance of the controlled individual main effects, τ (g), and υ(g), an important quantity measuring the difference in the nuisance function for G (based on XGY and UGY ) between the reference and target populations. If υ(g) deviates significantly from 0, then the conditional probability of receiving treatment G = g differs greatly between the two populations-
. At each level of g, the covariance of τ (g) and υ(g) contributes significantly to T3 if the following three conditions hold simultaneously: if there is a large amount of heterogeneity in the controlled individual main effects (σ ̃τ(g) is large), if there is significant variability in υ(g) (συ(g) is large), and if there is a strong correlation between τ (g) and υ(g) (|ρ ̃τ(g),υ(g)| is close to 1). As before, we decompose this covariance term into a product of two standard deviations and a correla-
tion.
The second factor affecting T3 is the product of E τ (g) and p(G = g|S = 1) − p(G = g|S = 2). At each level of g, this term contributes significantly to T3 if both, the average value of the controlled individual main effects is large, and if there is a strong imbalance in the marginal distribution of G across the reference and target population. This term reflects that our parameter of interest is a function of τ (g) and G.
In order to specify T3, we propose extending our previous methodology. If the controlled individual main effects (τ (g)), like the natural spillover effects (γ(a)), are bounded between xref
min and xrmefax for each value of g, then we can write
E τ (g) ∈ xref
min, xref
max for g ∈ {0, 1, ..., gmax} and
max
g ∈{0,1,...,gmax }
σ ̃τ(g) ≤ ητ
2 · (xref
max − xref
min),
10

where ητ ∈ [0, 1] represents a proportion of the maximum standard deviation of τ (g). The practitioner can specify a different parameter for each level of G if they have additional information allowing them to do so (as opposed to specifying a single value ητ ).
Next, we propose setting the sensitivity parameter β ∈ [0, 1] such that for each value of g, p(G = g|S = 1) − p(G = g|S = 2) ∈ [−β, β]. β reflects a practitioner’s beliefs about the imbalance in the neighborhood treatments between the two populations. This parameter not only bounds p(G = g|S = 1) − p(G = g|S = 2), but can also be used to create an upper bound for the standard deviation of υ(g) through Popoviciu’s inequality:
σ ̃υ(g) ≤ β.
Remark 7. If the practitioner has domain knowledge which allows them to determine all values of p(G = g|S = 1) − p(G = g|S = 2) = ζ(g), they can use the Bhatia-Davis inequality to create an upper bound for the standard deviation of υ(g) as σ ̃υ(g) ≤ ηυ · p1 − ζ(g)2 where ηυ ∈ [0, 1] is the proportion parameter reflecting the practitioner’s belief about the variability of υ(g).
As before, in the absence of additional information, the practitioner can set the signs of the correlations (ρ ̃τ(g),υ(g)) so as to maximize bias, and assume they have a common magnitude, which we denote by ρtransport.
The sensitivity analysis framework outlined above is broadly generalizable. Nevertheless, Theorem 2 can also be significantly simplified in many settings. We outline several such cases below.
Corollary 1. If the marginal distribution of G is equal between the reference and target populations, T3 can be simplified to
T3 =
gmax X
g=0
ρ ̃τ (g),υ(g) · σ ̃τ (g) · σ ̃υ(g) .
If the neighborhood treatment is randomized in both, the reference population and the target population, T3 can be simplified to
T3 =
gmax X
g=0
E τ (g) · p(G = g|S = 1) − p(G = g|S = 2) .
Proposition 2. Under Assumptions 1 through 6, the bias of ψˆ for φ2 reduces to the bias of ψˆ for φ1 provided that Y is generated according to the model
Y = f0(X, U) + f1(A, X, U) + f2(G, X, U) + ε(A, G),
where ε(A, G) is a zero-mean noise term uncorrelated with any of the confounders.
Remark 8. As discussed previously, θ is a special case of φ2, and our bias decomposition can be extended to account for θ. Namely, if the parameter of interest is θ, T3 becomes
T3 =
gmax X
g=0
ρ ̃τ (g),π(g) · σ ̃τ (g) · σ ̃π(g) .
where π(g) = p(G = g|XGY , UGY , S = 1). Analysis similar to the one done in Proposition 2 shows that if the parameter of interest is θ, then T3 = 0 if Y is generated by
Y = f0(X, U) + f1(A, X, U) + f2(G, X, U) + f3(A, G) + ε(A, G).
11

5 Bias Decomposition in the Presence of Undefined Potential Out
comes
In earlier sections of this paper, we considered settings in which all potential outcomes are well-defined for all units. While Assumption 3, which encodes this condition, is widely applicable, there may be certain settings in which it is unreasonable. Concerns about violations of Assumption 3 are most relevant for applications where the number of neighbors (which determines the domain of the exposure mapping function) is viewed as fixed. For instance, in a geographic context, if G represents the -
number of a neighboring countries adopting a certain policy, defining the potential outcome Y (1,2) for a country that has only one neighbor could be seen as conceptually incoherent. Moreover, in general, potential outcomes of the form Y (a,g) are undefined for units without neighbors (Forastiere et al., 2021; Kim, 2025). Due to these issues, practitioners may wish to define a different number of potential outcomes for each unit to better match their philosophical intuitions about causality.
In this section, we extend our earlier results to account for this complexity. Without loss of generality, we will assume that G ∈ {0, 1, 2, ..., gmax} represents the number of treated neighbors a unit has. For the sake of notational convenience, we also make the following assumptions:
• Y (a,g) for a ∈ {0, 1} is well-defined for any unit with g or more neighbors, and is undefined for any unit with fewer than g neighbors.
• N records the number of neighbors a unit has, and the maximum value of N is gmax (i.e., N ∈ {0, 1, 2, ..., gmax}).
• The potential outcomes Y (1,0) and Y (0,0) are well-defined for units with N = 0 (i.e., they behave like units that have neighbors none of whom are treated).
• Vg = I(N ≥ g) tracks units for which Y (a,g) is well-defined. Note that if Vg′ = 1, then Vg ̃ = 1 for any g ̃ < g′.
In order to extend our bias decomposition to this setting, the assumptions and causal estimands outlined in Section 2 need to be modified. First, we introduce a new version of consistency which relates the observed outcome to the potential outcomes in a manner which depends on a unit’s number of neighbors.
Assumption 7 (Consistency with Undefined Potential Outcomes). Given that N = n, the potential outcome Y (a) satisfies Y (a) = Pn
g=0 I(G = g) · Y (a,g) and the observed outcome Y satisfies Y = P1
a=0 I(A = a) · Y (a).
Since potential outcomes are only well-defined conditionally under this framework, the causal estimands need to be re-defined. We begin by considering a measure of the impact of changing A, the controlled individual main effect,
τ (g) :=
(
N.A. if Vg = 0
Y (1,g) − Y (0,g) if Vg = 1.
Here, τ (g) still represents the causal impact of changing A from 0 to 1 while g is fixed. However, this quantity is now only well-defined for units who have enough neighbors to receive neighborhood treatment g. The other causal estimand measuring the impact of changing A, the natural individual main effect, κ, now also depends on the number of neighbors a unit has. Namely, if N = n, then κ = Y (1) − Y (0) = Pn
g=0 I(G = g) · Y (a,g). Our previous parameters of interest, the natural average main effect, φ1, and the transported natural average main effect, φ2, can be expressed as conditional expectations of κ across the reference and target populations
12

respectively, as
φs =
gmax X
n=0
E Y (1) − Y (0)
| {z }
κ
|S = s, N = n · p(N = n|S = s)
=
gmax X
n=0
n
X
g=0
E I(G = g) · τ (g)|S = s, N = n · p(N = n|S = s)
=
gmax X
g=0
gmax X
n=g
E I(G = g) · τ (g)|S = s, N = n · p(N = n|S = s)
=
gmax X
g=0
E I(G = g) · τ (g)|S = s, Vg = 1 · p(Vg = 1|S = s).
Next, we modify our positivity and exchangeability assumptions to account for undefined potential outcomes.
Assumption 8 (Positivity with Undefined Potential Outcomes). For any a ∈ {0, 1}, any s ∈ {1, 2}, and any n, g ∈ {0, 1, 2, ..., gmax}, we have, almost surely in (X, U),
• p(A = a|S = s, N = n, X, U) > 0,
• p(S = s, N = n|X, U) > 0, and
• p(S = s, Vg = 1|X, U) > 0.
Assumption 9 (Weak Conditional Exchangeability with Undefined Potential Outcomes). Given that N = n where n ∈ {0, 1, 2, ..., gmax}, for any a ∈ {0, 1},
Y (a) ⊥⊥ A|  ̃X, U ̃ , S, N = n.
Finally, we posit one new condition, which allows us to deal with the difficulties introduced by the fact that the potential outcome Y (a) for a ∈ {0, 1} is defined differently depending on a unit’s number of neighbors.
Assumption 10 (Independence Assumption for Undefined Potential Outcomes). The two nuisance functions for the personal treatment, the true propensity score and the pseudo-propensity score, do not depend on N . In other words, for a ∈ {0, 1}, s ∈ {1, 2}, and n ∈ {0, 1, 2, ..., gmax}, we have p(A = a|S = s, N =
n,  ̃X,  ̃U) = p(A = a|S = s,  ̃X, U ̃ ) and p(A = a|S = s, N = n, XAY ) = p(A = a|S = s, XAY ).
Using the assumptions outlined above, we can extend our previous formula providing identification (if the unmeasured confounders were observed) to our new causal estimands.
Proposition 3 (IPW Identification Formula with Undefined Potential Outcomes). Under Assumptions 1, 7, 8, 9, and 10, φs can be identified by the formula given in Proposition 1.
Note that while our identification formula does not change, we can no longer say that I(A = a) · Y is equivalent to I(A = a) · Y (a) unless we condition on N = n (since Y (a) is no longer a well-defined quantity over the whole population). While our existing assumptions suffice to develop a bias decomposition for φ1, we once again need an additional set of conditions to develop a bias decomposition for φ2.
Assumption 11 (Transportability Assumptions with Undefined Potential Outcomes). For any a ∈ {0, 1} and any g ∈ {0, 1, 2, ..., gmax}, we have
1. Y (a,g) ⊥⊥ AN |Vg = 1, XGY , UGY ,
13

2. S only has a direct causal effect on A and G, and
3. Y and S do not share common causes.
Using the conditions outlined above, we can develop a new bias decomposition for settings with undefined potential outcomes.
Theorem 3 (Bias Decomposition in Presence of Undefined Potential Outcomes). Under Assumptions 1, 7, 8, 9, and 10, the bias of a naive estimator, ψˆ for the natural average treatment effect, φ1, can be written as
Biasφ1 (ψˆ) =
X
a∈{0,1}
(−1)1−a · Cov Y (a,0), εa|S = 1
+
X
a∈{0,1}
gmax X
n=0
(−1)1−a · Cov γ(a), εa|S = 1, N = n ·p(N = n|S = 1).
Meanwhile, under Assumptions 1, 7, 8, 9, 10, and 11, the bias of ψˆ for the transported natural main effect, φ2, can be written as
Biasφ2 (ψˆ) = Biasφ1 (ψˆ) +
gmax P
g=0
Cov τ (g), υ(g)|Vg = 1 + E τ (g)|Vg = 1 · p(G = g|S = 1) − p(G = g|S = 2) ,
where υ(g) = p(G = g|S = 1, Vg = 1, XGY , UGY ) · p(Vg = 1|S = 1) − p(G = g|S = 2, Vg = 1, XGY , UGY ) · p(Vg = 1|S = 2).
Theorem 3 can serve as the basis of a sensitivity analysis framework developed according to the principles discussed in Sections 3 and 4. Note that if the potential outcome Y (1) is well-defined for all units (without conditioning on N ) and if Vg = 1 for any g ∈ {0, 1, 2..., gmax}, Theorem 3 is equivalent to Theorem 1 by the law of total expectation. Thus, many of our results from the previous sections of this paper can be extended to applications with undefined potential outcomes.
6 Conclusion
We introduced a sensitivity analysis framework, which, unlike existing frameworks, can be used to explore the effects of unmeasured confounding, omitted interference, and lack of transportability simultaneously. Our method does not require strict parametric assumptions about the data generating mechanism and provides practitioners with the ability to specify bias through several easily interpretable sensitivity parameters. These parameters are flexible and can integrate a wide array of perspective-
s informed by domain knowledge. We also investigated several special cases under which our bias decomposition can be significantly simplified. Finally, we extended our methodology to account for the additional data complexity of undefined potential outcomes, which can arise in the presence of interference.
References
Aronow, P. M. and Samii, C. (2017). Estimating average causal effects under general interference, with application to a social network experiment. The Annals of Applied Statistics, 11(4):1912 – 1947.
Bareinboim, E. and Pearl, J. (2016). Causal inference and the data-fusion problem. Proceedings of the National Academy of Sciences, 113(27):7345–7352.
Bhadra, S. and Schweinberger, M. (2025). Causal inference under network interference. arXiv preprint arXiv:2508.06808.
14

Buchanan, A. L., Katenka, N., Lee, Y., Wu, J., Pantavou, K., Friedman, S. R., Halloran, M. E., Marshall, B. D., Forastiere, L., and Nikolopoulos, G. K. (2023). Methods for assessing spillover in network-based studies of hiv/aids prevention among people who use drugs. Pathogens, 12(2):326.
Chen, W., Cai, R., Qiao, J., Yan, Y., and Hern ́andez-Lobato, J. M. (2025). Causal effect estimation under networked interference without networked unconfoundedness assumption. arXiv preprint arXiv:2502.19741.
Colnet, B., Mayer, I., Chen, G., Dieng, A., Li, R., Varoquaux, G., Vert, J.-P., Josse, J., and Yang, S. (2024). Causal inference methods for combining randomized trials and observational studies: a review. Statistical Science, 39(1):165–191.
Degtiar, I. and Rose, S. (2023). A review of generalizability and transportability. Annual Review of Statistics and Its Application, 10(1):501–524.
Forastiere, L., Airoldi, E. M., and Mealli, F. (2021). Identification and estimation of treatment and interference effects in observational studies on networks. Journal of the American Statistical Association, 116(534):901–918.
Forastiere, L., Del Prete, D., and Sciabolazza, V. L. (2024). Causal inference on networks under continuous treatment interference. Social Networks, 76:88–111.
Hern ́an, M. A. and VanderWeele, T. J. (2011). Compound treatments and transportability of causal inference. Epidemiology, 22(3):368–377.
Hirano, K. and Imbens, G. W. (2001). Estimation of causal effects using propensity score weighting: An application to data on right heart catheterization. Health Services and Outcomes Research Methodology, 2(3):259–278.
Hong, G., Yang, F., and Qin, X. (2021). Did you conduct a sensitivity analysis? a new weighting-based approach for evaluations of the average treatment effect for the treated. Journal of the Royal Statistical Society Series A: Statistics in Society, 184(1):227–254.
Huang, M. Y. (2024). Sensitivity analysis for the generalization of experimental results. Journal of the Royal Statistical Society Series A: Statistics in Society, 187(4):900–918.
Khot, A., Oprescu, M., Schr ̈oder, M., Kagawa, A., and Luo, X. (2025). Spatial deconfounder: Interferenceaware deconfounding for spatial causal inference. arXiv preprint arXiv:2510.08762.
Kim, B. (2025). Estimating spillover effects in the presence of isolated nodes. Spatial Economic Analysis, pages 1–15.
Lee, T., Buchanan, A. L., Katenka, N. V., Forastiere, L., Halloran, M. E., Friedman, S. R., and Nikolopoulos, G. (2023). Estimating causal effects of hiv prevention interventions with interference in network-based studies among people who inject drugs. The Annals of Applied Statistics, 17(3):2165.
Liu, J., Ye, F., and Yang, Y. (2023). Nonparametric doubly robust estimation of causal effect on networks in observational studies. Stat, 12(1):e549.
Liu, L., Hudgens, M. G., and Becker-Dreps, S. (2016). On inverse probability-weighted estimators in the presence of interference. Biometrika, 103(4):829–842.
McNealis, V., Moodie, E. E. M., and Dean, N. (2024). Revisiting the effects of maternal education on adolescents’ academic performance: Doubly robust estimation in a network-based observational study. Journal of the Royal Statistical Society Series C: Applied Statistics, 73(3):715–734.
15

Mitra, N., Roy, J., and Small, D. (2022). The future of causal inference. American Journal of Epidemiology, 191(10):1671–1676.
Papadogeorgou, G. and Samanta, S. (2023). Spatial causal inference in the presence of unmeasured confounding and interference. arXiv preprint arXiv:2303.08218.
Robins, J. M. and Greenland, S. (1992). Identifiability and exchangeability for direct and indirect effects. Epidemiology, 3(2):143–155.
Rosenbaum, P. R. (2002). Observational studies. Springer series in statistics. Springer, New York, 2nd ed. edition.
Rubin, D. B. (1974). Estimating causal effects of treatments in randomized and nonrandomized studies. Journal of Educational Psychology, 66(5):688.
Rubin, D. B. (1980). Randomization analysis of experimental data: The fisher randomization test comment. Journal of the American Statistical Association, 75(371):591–593.
Rubin, D. B. (1990). [On the application of probability theory to agricultural experiments. Essay on principles. Section 9.] Comment: Neyman (1923) and causal inference in experiments and observational studies. Statistical Science, 5(4):472–480.
Shen, C., Li, X., Li, L., and Were, M. C. (2011). Sensitivity analysis for causal inference using inverse probability weighting. Biometrical Journal, 53(5):822–837.
Sobel, M. E. (2006). What do randomized studies of housing mobility demonstrate? causal inference in the face of interference. Journal of the American Statistical Association, 101(476):1398–1407.
Tan, Z. (2006). A distributional approach for causal inference using propensity scores. Journal of the American Statistical Association, 101(476):1619–1637.
Tchetgen Tchetgen, E. J. and VanderWeele, T. J. (2012). On causal inference in the presence of interference. Statistical Methods in Medical Research, 21(1):55–75.
Tort ́u, C., Crimaldi, I., Mealli, F., and Forastiere, L. (2024). Estimating causal effects of multi-valued treatments accounting for network interference: Immigration policies and crime rates. Sociological Methods & Research, 53(4):1794–1828.
VanderWeele, T. J. (2011). Controlled direct and mediated effects: definition, identification and bounds. Scandinavian Journal of Statistics, 38(3):551–563.
VanderWeele, T. J., Tchetgen Tchetgen, E. J., and Halloran, M. E. (2015). Interference and sensitivity analysis. Statistical science: a review journal of the Institute of Mathematical Statistics, 29(4):687.
Vuong, Q., Metcalfe, R. K., Ling, A., Ackerman, B., Inoue, K., and Park, J. J. (2025). Systematic review of applied transportability and generalizability analyses: A landscape analysis. Annals of Epidemiology.
Wu, J. and Franks, A. (2025). A latent factor panel approach to spatiotemporal causal inference. arXiv preprint arXiv:2509.10974.
Zigler, C., Liu, V., Mealli, F., and Forastiere, L. (2025). Bipartite interference and air pollution transport: estimating health effects of power plant interventions. Biostatistics, 26(1):kxae051.
16

Appendices
A Proofs
Proof of Proposition 1. We will begin by considering E Y (1)|S = s . Note that:
E Y (1)|S = s = E E Y (1)|S = s,  ̃X,  ̃U |S = s
= E E Y (1)|S = s, A = 1, X ̃ ,  ̃U |S = s
= E E Y |S = s, A = 1, X ̃ ,  ̃U |S = s
=
Z
x ̃ ,u ̃ ,y
y · p(y|S = s, A = 1, x ̃,  ̃u) · p(x ̃, u ̃|S = s)
=
Z
x ̃ ,u ̃ ,y
y · p(y, A = 1, x ̃, u ̃|S = s)
p(A = 1|S = s,  ̃x, u ̃)
=
Z
x ̃ ,  ̃u,y,a
I(A = 1) · y · p(y, a, x ̃, u ̃|S = s)
p(A = 1|S = s, x ̃, u ̃)
= E I(A = 1) · Y
p(A = 1|S = s, x ̃, u ̃) |S = s .
An analogous argument for E Y (0)|S = s proves Proposition 1.
Proof of Theorem 1. We will begin by rewriting the first component of ψ, E I(A=1)·Y
p(A=1|S=1,XAY ) |S = 1 . Note
that:
E I(A = 1) · Y
p(A = 1|S = 1, XAY ) |S = 1 = E I(A = 1) · Y (1)
p(A = 1|S = 1, XAY ) |S = 1
=E
"
E I(A = 1) · Y (1)
p(A = 1|S = 1, XAY ) |S = 1,  ̃X,  ̃U, Y (1) |S = 1
#
= E Y (1)
p(A = 1|S = 1, XAY ) · E I(A = 1)|S = 1, X ̃ , U ̃ , Y (1) |S = 1
= E Y (1)
p(A = 1|S = 1, XAY ) · E I(A = 1)|S = 1, X ̃ , U ̃ |S = 1
= E Y (1) · p(A = 1|S = 1,  ̃X,  ̃U)
p(A = 1|S = 1, XAY ) |S = 1 = E Y (1) · ε1|S = 1 .
Next, note that since E[ε1|S = 1] = 1, we can write:
E I(A = 1) · Y
p(A = 1|S = 1, XAY ) |S = 1 − E Y (1)|S = 1 = E Y (1) · ε1|S = 1 − E Y (1)|S = 1
= E Y (1) · (ε1 − 1)|S = 1
= Cov Y (1), ε1|S = 1
= Cov Y (1,0), ε1|S = 1 + Cov γ(1), ε1|S = 1
17

We can go through a similar argument to show the following:
E Y (0)|S = 1 − E I(A = 0) · Y
p(A = 0|S = 1, XAY ) |S = 1 = −Cov Y (0,0), ε0|S = 1 − Cov γ(0), ε0|S = 1 .
Combining both of the above results proves Theorem 1.
Proof of Theorem 2. We have already shown that ψ − φ1 = T1 + T2. Thus, we only have to show that φ1 − φ2 = T3. Note that we can write E[Y (1) − Y (0)|S = s] as follows:
E[Y (1) − Y (0)|S = s] = E I(S = s) · (Y (1) − Y (0))
p(S = s)
=
gmax X
g=0
E I(S = s, G = g) · τ (g)
p(S = s) .
Next, by Assumption 6, we have the following two relationships: (i) S, G ⊥⊥ τ (g)|XGY , UGY , and (ii) S ⊥⊥ XGY , UGY . Thus, we can write:
E[Y (1) − Y (0)|S = s] =
gmax X
g=0
E
"
E I(S = s, G = g) · τ (g)
p(S = s) |τ (g), XGY , UGY
#
=
gmax X
g=0
E
"
τ (g)
p(S = s) · E I(S = s, G = g)|τ (g), XGY , UGY
#
=
gmax X
g=0
E
"
τ (g)
p(S = s) · E I(S = s, G = g)|XGY , UGY
#
=
gmax X
g=0
E
"
τ (g)
p(S = s) · p(S = s, G = g|XGY , UGY )
#
=
gmax X
g=0
E
"
τ (g)
p(S = s) · p(G = g|S = s, XGY , UGY ) · p(S = s|XGY , UGY )
#
=
gmax X
g=0
E
"
τ (g) · p(G = g|S = s, XGY , UGY )
#
=
gmax X
g=0
Cov τ (g) · p(G = g|S = s, XGY , UGY )
+
gmax X
g=0
E τ (g) · E p(G = g|S = s, XGY , UGY )
=
gmax X
g=0
Cov τ (g) · p(G = g|S = s, XGY , UGY )
+
gmax X
g=0
E τ (g) · p(G = g|S = s)
Utilizing the above argument for S = 1 and S = 2 completes the proof.
Proof of Proposition 2. First, notice that since we assumed that G is discrete, for g ∈ {1, 2, ..., gmax} and s ∈ {1, 2}, we have p(G = g|S = s) = p(G ≤ g|S = s)−p(G ≤ g−1|S = s) and p(G = g|S = s, XGY , UGY ) =
18

p(G ≤ g|S = s, XGY , UGY ) − p(G ≤ g − 1|S = s, XGY , UGY ). Thus, for s ∈ {1, 2},
gmax X
g=0
Cov τ (g), p(G = g|S = s, XGY , UGY ) =
gmax X
g=1
Cov τ (g − 1) − τ (g), p(G ≤ g − 1|S = s, XGY , UGY ) .
Similarly, for s ∈ {1, 2}, we have
gmax X
g=0
E[τ (g)] · p(G = g|S = s) =
gmax X
g=1
E τ (g − 1) − τ (g) · p(G ≤ g − 1| S = s) + E τ (gmax) .
Next, note that if Y = f0(X, U)+f1(A, X, U)+f2(G, X, U)+ε(A, G), for any g ∈ {1, 2, ..., gmax}, Cov τ (g − 1) − τ (g), p(G ≤ g − 1|S = s, XGY , UGY ) = 0 and E τ (g − 1) − τ (g) = 0. Thus, T3 = E τ (gmax) − E τ (gmax) = 0, completing the proof.
Proof of Proposition 3. Similar to our proof of Proposition 1, we will begin by considering E[Y (1)|S = s, N = n]. Note that:
E Y (1)|S = s, N = n = E E Y (1)|S = s, N = n,  ̃X,  ̃U |S = s, N = n
= E E Y (1)|S = s, N = n, A = 1, X ̃ , U ̃ |S = s, N = n
= E E Y |S = s, N = n, A = 1, X ̃ ,  ̃U |S = s, N = n
=
Z
x ̃ ,u ̃ ,y
y · p(y|S = s, N = n, A = 1, x ̃,  ̃u) · p(x ̃, u ̃|S = s, N = n)
=
Z
x ̃ ,u ̃ ,y
y · p(y, A = 1, x ̃, u ̃|S = s, N = n)
p(A = 1|S = s, N = n,  ̃x, u ̃)
=
Z
x ̃ ,u ̃ ,y,a
I(A = 1) · y · p(y, a, x ̃, u ̃|S = s, N = n)
p(A = 1|S = s, N = n, x ̃, u ̃)
= E I(A = 1) · Y
p(A = 1|S = s, N = n,  ̃X,  ̃U) |S = s, N = n
= E I(A = 1) · Y
p(A = 1|S = s,  ̃X,  ̃U) |S = s, N = n .
Next, we can write
gmax X
n=0
E[Y (1)|S = s, N = n] · p(N = n|S = s) =
gmax X
n=0
E I(A = 1) · Y
p(A = 1|S = s,  ̃X, U ̃ ) |S = s, N = n · p(N = n|S = s)
= E I(A = 1) · Y
p(A = 1|S = s, X ̃ , U ̃ ) |S = s .
The last equality uses the law of total expectation. Note that we did not use the law of total expectation while dealing with the potential outcome Y (1) since Y (1) is only well-defined conditionally on N = n. An analogous argument for E Y (0)|S = s, N = n proves Proposition 3.
Proof of Theorem 3. First, we will prove our result for Biasφ1 . We can begin by writing:
E I(A = 1) · Y
p(A = 1|S = 1, XAY ) |S = 1 =
gmax X
n=0
E I(A = 1) · Y
p(A = 1|S = 1, XAY ) |S = 1, N = n · p(N = n|S = 1).
19

We can re-write this quantity as:
=
gmax X
n=0
E I(A = 1) · Y (1)
p(A = 1|S = 1, XAY ) |S = 1, N = n · p(N = n|S = 1)
=
gmax X
n=0
E
"
E I(A = 1) · Y (1)
p(A = 1|S = 1, XAY ) |S = 1, N = n,  ̃X, U ̃ , Y (1) |S = 1, N = n
#
· p(N = n|S = 1)
=
gmax X
n=0
E
"
Y (1)
p(A = 1|S = 1, XAY ) · E I(A = 1)|S = 1, N = n,  ̃X, U ̃ , Y (1) |S = 1, N = n
#
· p(N = n|S = 1)
=
gmax X
n=0
E
"
Y (1)
p(A = 1|S = 1, XAY ) · E I(A = 1)|S = 1, N = n,  ̃X, U ̃ |S = 1, N = n
#
· p(N = n|S = 1)
=
gmax X
n=0
E
"
Y (1)
p(A = 1|S = 1, XAY ) · p(A = 1|S = 1, N = n, X ̃ , U ̃ )|S = 1, N = n
#
· p(N = n|S = 1)
=
gmax X
n=0
E
"
Y (1) · ε1|S = 1, N = n
#
· p(N = n|S = 1).
Note that by Assumption 10, ε1 = p(A=1|S=1,X ̃ ,U ̃ )
p(A=1|S=1,XAY ) = p(A=1|S=1,N =n,  ̃X,U ̃ )
p(A=1|S=1,N=n,XAY ) , and thus E[ε1|S = 1, N = n] = E[ε1|S = 1] = 1. Recall that we are interested in the following quantity:
E
h I(A = 1) · Y
p(A = 1|S = 1, XAY ) |S = 1
i
−
gmax X
n=0
E[Y (1)|S = 1, N = n] · p(N = n|S = 1) .
We can write the above expression as:
=
gmax X
n=0
E
h
Y (1) · (ε1 − 1)|S = 1, N = n
i
· p(N = n|S = 1)
=
gmax X
n=0
E
h
Y (1,0) · (ε1 − 1)|S = 1, N = n
i
· p(N = n|S = 1)
+
gmax X
n=0
E
h
γ(1) · (ε1 − 1)|S = 1, N = n
i
· p(N = n|S = 1)
=E
h
Y (1,0) · (ε1 − 1)|S = 1
i
+
gmax X
n=0
E
h
γ(1) · (ε1 − 1)|S = 1, N = n
i
· p(N = n|S = 1)
= Cov Y (1,0), ε1|S = 1 +
gmax X
n=0
Cov γ(1), ε1|S = 1, N = n · p(N = n|S = 1).
Note that while we can use the law of total expectation for Y (1,0) (since, in our setting, this quantity is well-defined for all units), we cannot do the same for γ(a), as it is defined differently depending on a unit’s number of neighbors. An analogous argument for P
n E[Y (0)|S = 1, N = n] · p(N = n|S = 1) proves the first part of Theorem 3.
Next, we will prove our result for Biasφ2 . Note that under our assumptions, we can write E[I(G = g)·τ (g)|S =
20

s, Vg = 1] as follows:
E[I(G = g) · τ (g)|S = s, Vg = 1] = E I(G = g, S = s) · τ (g)
p(S = s|Vg = 1) |Vg = 1
=E
"
E I(G = g, S = s) · τ (g)
p(S = s|Vg = 1) |Vg = 1, XGY , UGY , τ (g) |Vg = 1
#
=E
"
τ (g)
p(S = s|Vg = 1) · E I(G = g, S = s)|Vg = 1, XGY , UGY , τ (g) |Vg = 1
#
=E
"
τ (g)
p(S = s|Vg = 1) · E I(G = g, S = s)|Vg = 1, XGY , UGY |Vg = 1
#
=E
"
τ (g)
p(S = s|Vg = 1) · p(G = g, S = s|Vg = 1, XGY , UGY )|Vg = 1
#
.
Using Assumption 11, we also have:
gmax X
g=0
E[I(G = g) · τ (g)|S = s, Vg = 1] · p(Vg = 1|S = s) =
gmax X
g=0
E
"
τ (g)
p(S = s|Vg = 1) · p(G = g, S = s|Vg = 1, XGY , UGY )|Vg = 1
#
· p(Vg = 1|S = s)
=
gmax X
g=0
E
"
τ (g) · p(G = g|S = s, Vg = 1, XGY , UGY )|Vg = 1
#
· p(Vg = 1|S = s)
=
gmax X
g=0
Cov τ (g), p(G = g|S = s, Vg = 1, XGY , UGY )|Vg = 1 · p(Vg = 1|S = s)
+ E τ (g)|Vg = 1 · E p(G = g|S = s, Vg = 1, XGY , UGY )|Vg = 1 · p(Vg = 1|S = s)
=
gmax X
g=0
Cov τ (g), p(G = g|S = s, Vg = 1, XGY , UGY )|Vg = 1 · p(Vg = 1|S = s)
+ E τ (g)|Vg = 1 · p(G = g, Vg = 1|S = s)
=
gmax X
g=0
Cov τ (g), p(G = g|S = s, Vg = 1, XGY , UGY )|Vg = 1 · p(Vg = 1|S = s)
+ E τ (g)|Vg = 1 · p(G = g|S = s).
Utilizing the above argument for S = 1 and S = 2 completes the proof.
21

---

## Processing Information

- **Processing Library:** Zotero PDFWorker
- **Processing Date:** 2026-02-10T18:19:00.477Z
- **Text Length:** 60744 characters
- **Success:** Text extraction completed
- **PDF Library Used:** Zotero PDFWorker
- **Pages Processed:** 21 of 21
