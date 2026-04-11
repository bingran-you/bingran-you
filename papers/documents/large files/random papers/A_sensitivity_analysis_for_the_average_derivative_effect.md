# PDF Document: Zhang - 2025 - A sensitivity analysis for the average derivative effect.pdf

**File Path:** Zhang - 2025 - A sensitivity analysis for the average derivative effect.pdf

**Processed Date:** 2026-02-10T18:13:41.544Z

**File Size:** 563.29 KB

**Total Pages:** 35

**Extracted Pages:** 35

**PDF Library:** Zotero PDFWorker

**Attachment Item ID:** 3197

**Title:** A sensitivity analysis for the average derivative effect

**Collection:** Large Files > Random Papers

---

## Extracted Text Content

A sensitivity analysis for the average derivative effect
Jeffrey Zhang
jeffzhang@uchicago.edu
Abstract
In observational studies, exposures are often continuous rather than binary or discrete. At the same time, sensitivity analysis is an important tool that can help determine the robustness of a causal conclusion to a certain level of unmeasured confounding, which can never be ruled out in an observational study. Sensitivity analysis approaches for continuous exposures have now been proposed for several causal estimands. In this article, we focus on the average derivative effect (ADE). We obtain clo-
sed-form bounds for the ADE under a sensitivity model that constrains the odds ratio (at any two dose levels) between the latent and observed generalized propensity score. We propose flexible, efficient estimators for the bounds, as well as point-wise and simultaneous (over the sensitivity parameter) confidence intervals. We examine the finite sample performance of the methods through simulations and illustrate the methods on a study assessing the effect of parental income on educational attainmen-
t an a study assessing the price elasticity of petrol.
1 Introduction
Drawing causal inferences from observational studies is challenging for a variety of reasons. Two prominent challenges are a) the treatment (or exposure) of interest is continuous rather than binary or discrete, and b) the treatment/exposure assignment is not random, and so treated and control groups may substantially differ on the basis of unmeasured confounders. We are motivated by the intersection of these two challenges. In observational studies, continuous exposures are widespread. In epidemi-
ology, researchers are often interested in quantifying the effect of lead exposure or air pollution on health outcomes. In the social sciences, researchers may be interested in quantifying the effect of household’s income on a child’s later life educational or economic outcomes (Lundberg and Brand, 2023). The vast majority of causal inference methods focus on treatments that are binary or take on a finite number of values. A popular approach when the exposure of interest is continuous is to simply-
 dichotomize the exposure at some threshold. However, this is undesirable because dichotomizing discards potentially useful statistical information from the exposure level and can invalidate the downstream inference (VanderWeele and Hernan, 2013), or at least muddies its interpretation (Lee et al., 2024). When the exposure of interest is continuous, some popular causal estimands include the dose-response curve (also known as the exposure response function) (Kennedy et al., 2017), a (projection) pa-
rameter of the dose-response curve (Bonvini et al., 2022), average derivative effects (Newey and Stoker, 1993; Klyne and Shah, 2023), and stochastic intervention effects (Schindl et al., 2024), among others. In this paper, we focus on the average derivative effect (ADE), which has been extensively studied in economics (Hardle and Stoker, 1989; Newey and Stoker, 1993), with recent work in statistics clarifying its causal interpretation (Rothenh ̈ausler and Yu, 2019; Hines et al., 2021). It has many-
 other names, and has been referred to as an incremental effect (Rothenh ̈ausler and Yu, 2019), average partial effect (Klyne and Shah, 2023), or an average causal derivative (Chernozhukov et al., 2022a). Roughly speaking, the ADE measures the average effect of infinitesimally increasing
1
arXiv:2511.06243v1 [stat.ME] 9 Nov 2025

the exposure level for all units in the population. The ADE corresponds to well-known quantities in economic applications. For example, when one is interested in the effect of the price of a good on demand, the ADE corresponds to the average price elasticity of demand. In cases where one is interested in the effect of increased disposable income on consumption, the ADE corresponds to the average marginal propensity to consume (Bruns-Smith, 2025). As elucidated in Hines et al. (2021), the ADE esti-
mand has some attractive properties, relative to the widely studied dose-response curve. For example, the ADE is a single number summary of the causal effect; it is difficult to summarize the dose-response curve by a single number. Relatedly, estimation of the ADE, a scalar, is a simpler statistical task than estimating the dose-response curve, which is infinite-dimensional. The ADE also relies on a weaker version of the so-called overlap/positivity assumption than that required for identification-
 of the dose-response curve. Finally, as Hines et al. (2021) explain, it may be difficult or unrealistic to envision an intervention that sets exposure to the same level for everyone, which is what the dose-response curve measures. Of course, there are settings where the ADE is less appropriate. Notably, if the causal effect is not monotonic, an average of positive and negative derivatives could cancel and result in a near zero ADE, rendering the ADE an inadequate summary of the causal effect. Dat-
a where the treatment is continuous almost exclusively comes from observational studies, as continuous treatments are rare in randomized experiments. As a result, the ADE is typically only a relevant estimand in observational studies, where unmeasured confounding can never be ruled out. It is therefore of interest to develop methods for ADE estimation that take into account potential unmeasured confounding. A popular way to alleviate concerns about unmeasured confounding in an observational study -
is to perform a sensitivity analysis. Dating back to Cornfield et al. (1959), a sensitivity analysis acknowledges the existence of unmeasured confounding, but asks how strong it must be to overturn a qualitative causal conclusion. There are now a wide array of sensitivity analysis methods developed, especially for binary exposures. Some sensitivity models constrain the effect of the unmeasured confounders affect on the treatment assignment (Rosenbaum, 2002; Tan, 2006). Others constrain how far the-
 potential outcome distribution can be from the observed outcome distribution (Robins et al., 2000; Dı ́az and van der Laan, 2013; Nabi et al., 2024). Some focus on worst-case departures from the no unmeasured confounding assumption (Yadlowsky et al., 2022; Dorn and Guo, 2023; Zhang and Zhao, 2022), and others on average-case departures (Huang and Pimentel, 2025; Zhang and Zhao, 2022). Some are parametric in nature (Frank, 2000; Imbens, 2003; Oster, 2019; Cinelli and Hazlett, 2020; Zhang and Tchet-
gen Tchetgen, 2022) while others are nonparametric. Researchers have also proposed methods that constrain the proportion of unmeasured confounding (Bonvini and Kennedy, 2022). For the ADE, we introduce a new sensitivity analysis model that bounds worst-case departures of the treatment assignment from no unmeasured confounding. The model can be thought of as a generalization of the marginal sensitivity model for binary treatments due to Tan (2006), and is closely related to the model of (Rosenbaum,-
 1989), which itself is a generalization of Rosenbaum’s sensitivity model for binary treatments (Rosenbaum, 2002). Under the sensitivity model, for a fixed value of the sensitivity parameter, we derive closed-form upper and lower bounds for the ADE. We consider both binary and continuous outcomes, which lead to different forms for the bounds. We introduce nonparametric, robust estimators for the closed-form bounds, as well as corresponding confidence intervals. These estimators can leverage data-a-
daptive nuisance estimators that may converge slower than the parametric rate (though not too slowly). One attractive property of our approach is that the closed-form bounds lend themselves to conducting simultaneous inference over an interval of sensitivity parameters in a particularly simple way.
2

1.1 Related work in sensitivity analysis beyond binary treatments
There is a growing body of literature on sensitivity analyses for non-binary treatments. For the multi-valued treatment case, Basit et al. (2023) generalize the model and approach of Zhao et al. (2019) to derive bounds on linear combinations of potential outcome means. For the continuous treatment case, most sensitivity analysis methods have been aimed at bounds on (aspects of) the dose-response curve/exposure response function. For example, Bonvini et al. (2022) propose sensitivity analyses for p-
arameters of marginal structural models for any type of treatment and an array of estimands, including the dose-response curve. Jesson et al. (2022), Marmarelis et al. (2023) Frauen et al. (2023), and Baitairian et al. (2024) all propose sensitivity analyses for the dose-response curve, under distinct sensitivity models and derive distinct bounds. One the models considered in Dalal and Tchetgen (2025) is closely related to ours, but the estimand of interest is the dose-response curve. The recent w-
ork of Levis et al. (2024) proposes a suite of sensitivity analysis methods for stochastic intervention estimands. Meanwhile, Zhang et al. (2024) and Zhang and Heng (2024) propose sensitivity analysis methods for matched studies with continuous treatments under a related sensitivity model. Chernozhukov et al. (2022a) study omitted variable bias (analogous to sensitivity analysis) within a general class of estimands that are continuous, linear functionals of a conditional expectation. Their results-
 apply to a general class of estimands, with the ADE being one example. They assume bounds on the L2 distance between the “short” and “long” Riesz representers and conditional expectation functions. We take a different approach by appealing to a sensitivity model that imposes a bound on the L∞ distance between the odds ratio of the observed and unobserved generalized propensity score at any pair of points in the support of the exposure. This gives rise to different interpretations of the sensitivi-
ty parameters and also different bounds on the ADE. We give a more detailed comparison to previous sensitivity models in Remarks 1 and 2 in Section 3.
1.2 Outline of the paper
The paper is organized as follows. We formally introduce notation, assumptions, and the causal estimands in Section 2. In Section 3, we introduce the sensitivity model and discuss its relation to previous models. In Section 4, we compute the worst-case bounds on the ADE under the sensitivity model. We then propose efficient and robust estimators for the bounds in Section 5. We then apply the methods in a simulation study (Section 6) and two real data applications (Section 7).
2 Preliminaries
2.1 Notation
The underlying data are assumed to be a vector of independent and identically distributed samples from some unknown distribution (A, X, U, Y (a)a∈A) ∼ F , where A is a continuous exposure (also referred to as a treatment or dose), X are observed pre-exposure confounders, U some unobserved pre-exposure confounders, Y (a) are potential outcomes, and A is the support of the exposure. The potential outcomes represent the outcome quantity that would have been observed if the exposure had been externall-
y set to a. In the observed data, we only see one of the potential outcomes. Specifically, the observed outcome satisfies Y = Y (a) when A = a (Assumption 1). Thus, the observed data consists of n i.i.d. samples of the data vector (X, A, Y ). Throughout the paper, we will consider the two scenarios where Y is continuous and Y is binary separately. We will use ′ and ∂a to denote taking a partial derivative with respect to exposure a, which will be clear from
3

the context. ∥·∥ represents the L2 norm, ⊥⊥ denotes statistical independence, and 1 denotes the indicator function.
2.2 Estimand and assumptions
We now formally introduce the causal estimand, which is well-defined for both binary and continuous (potential) outcomes. Let ∂aE[Y (a) | x, u] ≡ limδ→0 δ−1E[Y (a + δ) − Y (a) | x, u], which is assumed to exist. Then the ADE is defined as
θ ≡ E[∂aE[Y (A) | X, U ]], (1)
where the expectation is taken over the joint distribution of A, X, and U . It is useful to unpack the meaning of the estimand θ. One interpretation is as follows (Hines et al., 2021). Consider a very small perturbation δ > 0. Then compare the difference in average outcomes (scaled by δ) between two worlds. In the first world, the exposure is distributed according to the observed A | X, U distribution, except that the exposure is increased by δ for all units. In the second, the exposure is simply -
distributed according to the observed A | X, U distribution. In fact, one can show that θ equals limδ→0 δ−1E[Y (A + δ) − Y (A)], the limiting difference between average outcomes under a small shift intervention and no intervention, scaled by the shift (Hines and Miles, 2025). When Y is continuous, θ also matches the E[Y ′(A)] estimand introduced in Rothenha ̈usler and Yu (2019) under additional smoothness conditions that ensure E[Y ′(A)] is well-defined. These connections and the required regulari-
ty conditions are made explicit in Appendix A. We now introduce causal assumptions that allow the ADE to be written as a statistical functional of the full data, some components of which are not observed.
Assumption 1 (Consistency/SUTVA). Y = Y (a) when A = a.
Consistency requires that the potential outcome corresponding to an exposure a matches the observed outcome when the observed exposure matches a. It also prohibits interference, where the exposure of one individual can affect the outcome of another.
Assumption 2 (Latent Ignorability). {Y (a)}a∈A ⊥⊥ A | X, U .
Latent ignorability essentially requires that the (X, U ) vector contains all common causes of the exposure A and outcome Y . This assumption is notably weaker than the typical ignorability or no unmeasured confounding assumption, which requires {Y (a)}a∈A ⊥⊥ A | X. Moreover, it is a relatively mild assumption since U is unobserved, and there are no restrictions placed on U .
Assumption 3 (Local Overlap). The conditional densities f (a | x) and f (a | x, u) are continuous in a for all x, u.
In contrast to a typical overlap assumption that would require f (a | x, u) > 0 for all a ∈ A (this would be needed for the dose-response curve), the local overlap assumption only requires that at any level of confounders (u, x) for which f (a | x, u) > 0, the conditional density must be positive in a small neighborhood around a as well. We only require this weaker notion of overlap as we focus on the ADE. We will also refer to the conditional density f (a | x, u) as the generalized propensity sco-
re throughout the remainder of the paper (Imbens, 2000). The next assumption collects additional regularity conditions on the conditional density functions and potential outcomes.
Assumption 4 (Regularity).
4

(i) The conditional densities f (a | x) and f (a | x, u) are differentiable in a. Also, f (a | x) → 0 and f (a | x, u) → 0 for all fixed x, u as |a| → ∞.
(ii) The derivative ∂aE[Y (a) | X = x, U = u] is continuous.
These regularity assumptions ensure that certain statistical objects that we introduce are welldefined. In essence, they place smoothness restrictions on the potential outcomes and conditional densities.
Lemma 1. Under Assumptions 1-4,
θ ≡ E[∂aE[Y (A) | X, U ]] = E[∂aE[Y | A, X, U ]] = E[−s(A | X, U )Y ],
where s(a | x, u) ≡ f′(a|x,u)
f(a|x,u) , is the (conditional) score function.
Here, the score function −s(A | X, U ) is the Riesz representer for the statistical functional E[∂aE[Y | A, X, U ]] (Powell et al., 1989). Two statistical examples where the interpretation of θ is fairly simple are the partially linear model and the single index model.
Example 1 (Partially linear model). Consider the case where E[Y | A, X, U ] = βA + g(X, U ), for g an arbitrary function and β a scalar. Then θ = β.
Example 2 (Single index model (Stoker, 1986)). Suppose E[Y | A, X, U ] = F (βA + βX X + βU U ), for F a monotone, differentiable function. Then θ = β × E[∂aF (βA + βX X + βU U )]. So the θ estimand is proportional to the regression coefficient β.
For the remainder of the paper, we focus on the statistical functional θ in the nonparametric model. In Appendix F, we briefly outline how our results could be extended to weighted average derivative effects, i.e. θw ≡ E[w(A, X)∂aE[Y (A) | X, U ]], for weights w(A, X) that are nonnegative and such that E[w(A, X)] = 1. Hines et al. (2021) and Hines et al. (2023) discuss the interpretation of such weighted average derivative effects.
3 Sensitivity model
Based on the previous section, we can write down the causal estimand in terms of the statistical functional θ. However, θ is a function of E[Y | A, X, U ], where U is unobserved. Thus, θ cannot be estimated from observed data without further assumptions. In this section, we introduce a sensitivity analysis model that, through a parameter γ, limits the strength of association between the unmeasured confounder U and the exposure A conditional on X. The sensitivity model then facilitates deriving upp-
er and lower bounds on the estimand of interest based on the allowable amount of unmeasured confounding γ. Recall θ can be expressed by θ = E[∂aE[Y | A, X, U ]] or as a function of its Riesz representer, θ = E[−s(A | X, U )Y ]. The sensitivity model we consider is a generalization of the model of Tan (2006) to the continuous exposure case and is related to Rosenbaum’s semiparametric model for continuous doses (Rosenbaum, 1989). The model restricts the odds ratio of the generalized propensity score-
 (including u) vs. the generalized propensity score (marginalizing over u) at any two dose levels:
Assumption 5 (Marginal γ sensitivity model).
exp(−γ(|a − a′|)) ≤ f (a′ | x, u)f (a | x)
f (a | x, u)f (a′ | x) ≤ exp(γ(|a − a′|)) ∀x, a, a′, u. (2)
5

This model generalizes Tan’s marginal sensitivity model for binary treatments, as it exactly reduces to the model of Tan (2006) when a and a′ are replaced by 0 and 1, and the Γ from Tan (2006) is set to exp(γ). The Tan model has been studied extensively (Zhao et al., 2019; Dorn and Guo, 2023), and has recently been generalized to longitudinal settings (Bruns-Smith and Zhou, 2023; Tan, 2025). Dalal and Tchetgen (2025) consider a more general formulation to bound dose-response curves. The connectio-
n between the Tan and Rosenbaum models has been previously discussed when A is binary and continuous (Zhao et al., 2019; Dalal and Tchetgen, 2025). We examine the connection between model (2) and Rosenbaum’s model for continuous doses specific to our context in Appendix G. In Appendix H, we discuss implications of instead
imposing g(−γ(|a − a′|)) ≤ f(a′|x,u)f(a|x)
f(a|x,u)f(a′|x) ≤ g(γ(|a − a′|)) ∀a, x, u for a smooth, nonnegative, strictly
increasing function g such that g(0) = 1. We now comment on the relationship between the model we consider in relation to other sensitivity models for continuous exposures.
Remark 1. Chernozhukov et al. (2022a) establishes bounds on the bias of estimators that ignore unmeasured confounding for a large class of functionals that can be expressed as a continuous linear function of the conditional expectation E[Y | A, X, U ]. Their class includes the ADE from (1), or what they refer to as the average causal derivative. Their omitted variable bias model imposes R2 type bounds on both the “long” (including U ) Riesz representer and the conditional expectation relative to t-
heir “short” (excluding U ) counterparts. The model we consider differs in several aspects. First, model (2) imposes bounds on worst-case rather than average case departures from no unmeasured confounding. Therefore, the models and their interpretations are fundamentally different. Second, in contrast to Chernozhukov et al. (2022a), we do not directly impose restrictions on the “long” Riesz representer s(a | x, u) in relation to its “short” counterpart s(a | x). Rather, we impose restrictions on t-
he generalized propensity score f (a | x, u) directly, which may be a more familiar statistical object than s(a | x, u), and may aid in the interpretation of the sensitivity parameter. Nevertheless, as will be shown in Lemma 2, our model (2) implies constraints on s(a | x, u). Moreover, the connection between (2) and s(a | x, u) derived in Lemma 2 could be useful in interpreting the bound imposed on s(A | X, U ) in Chernozhukov et al. (2022a). We also point out that Proposition 2 from the earlier -
work of Rothenh ̈ausler and Yu (2019) derives a similar bound on the omitted variable bias as Chernozhukov et al. (2022a), specifically for the ADE.
Remark 2. In relation to other sensitivity models for other causal estimands for continuous exposures, ours model differs in that we consider bounds on the odds deviation of generalized propensity scores, and the deviation depends on the difference between dose levels a and a′. In contrast, Bonvini et al. (2022), Jesson et al. (2022), and Baitairian et al. (2024) consider models that place the restriction 1/Γ ≤ f (a | x, u)/f (a | x) ≤ Γ ∀a, x, u. This model does not involve odds at different dose-
 levels, and so the bounds do not depend on the dose difference. Marmarelis et al. (2023) and Dalal and Tchetgen (2025) consider closely related models to ours, but do not study the ADE. One of the models considered by Levis et al. (2024) is similar to ours in that it considers restrictions on odds, but does not involve the dose difference, and they consider a different estimand.
We next establish an implication of the sensitivity model that will facilitate reducing the problem to an optimization problem with a mathematically tractable form.
Lemma 2. Under sensitivity model (2),
s(a | x) − γ ≤ s(a | x, u) ≤ s(a | x) + γ, ∀a, x, u. (3)
This result demonstrates that the sensitivity models constrain the Riesz representer s(a | x, u) to be within γ of s(a | x), on the additive scale and in a symmetric fashion. Next, we introduce a statistical restriction (entirely separate from the sensitivity model) on s(a | x, u). The restriction is a well-known property of score functions.
6

Lemma 3. Suppose Assumption 4 holds, and that f ′(a | x, u) is continuous and bounded for all a, x, u. Then E[s(A | X, U ) | A = a, X = x] = s(a | x) ∀a, x. (4)
Thus, combining the previous two lemmas with the fact that θ = E[−s(A | X, U )Y ], we can formulate the sensitivity analysis as an optimization problem with (2) and (3) as constraints. As a result, a valid sensitivity analysis under model (2) for the ADE would solve the following optimization problem:
maximize/minimize
s(a|x,u)
E[−s(A | X, U )Y ]
subject to s(a | x, u) ∈ [s(a | x) − γ, s(a | x) + γ] ∀a, x.
and E[s(A | X, U ) | A = a, X = x] = s(a | x) ∀a, x.
(5)
It is straightforward to see that the optimization can be conducted in each stratum (A = a, X = x) separately. Thus, we focus on solving the following formulation:
maximize/minimize
s(a|x,u)
E[−s(A | X, U )Y | A = a, X = x]
subject to s(a | x, u) ∈ [s(a | x) − γ, s(a | x) + γ] ∀a, x.
and E[s(A | X, U ) | A = a, X = x] = s(a | x) ∀a, x.
(6)
These optimization problems formulation follow a Lagrangian formulation, and they resemble other optimization problems in the causal inference literature, for example those in Jin et al. (2022), Zhang and Zhao (2022), Dorn and Guo (2023), among others. Equipped with this formulation of the optimization problem, we will aim to obtain closed-form solutions for the cases where Y is continuous or binary.
4 Solving the optimization problems
4.1 Continuous Outcome
We first consider the case where the outcome Y is continuously distributed, i.e. for all a, x, the distribution Y | A, X has no point masses.
Proposition 1. Suppose the outcome Y is continuously distributed with no point masses. The solution to the maximization version of (6) is
s∗(A | X, U ) =
(
s∗(A | X) − γ if Y > M (A, X)
s∗(A | X) + γ if Y < M (A, X) ,
and the opposite (swap the > and < signs in the piecewise function) for the minimization, where M (A, X) is the conditional median (1/2 quantile) of Y given A, X. Moreover, the maximum and minimum objective values of the optimization programs are
ψmax = E[−s(A | X)Y ] + γE[Y (1{Y >M(A,X)} − 1{Y <M(A,X)})],
ψmin = E[−s(A | X)Y ] − γE[Y (1{Y >M(A,X)} − 1{Y <M(A,X)})], (7)
respectively.
7

One might observe that the solution has a Neyman-Pearson flavor. This flavor of solution in sensitivity analysis has been observed before, for example for the average treatment effect in the binary treatment case (Dorn and Guo, 2023; Zhang and Zhao, 2022). In addition, the optimal values of the optimization problem equal E[−s(A | X)Y ] (what one would estimate if the unmeasured confounding due to U is ignored), plus or minus γ times a nonnegative correction term. Thus, the bounds are symmetric ar-
ound E[−s(A | X)Y ]. It is clear that the correction term is indeed nonnegative, since it is exactly the average difference between outcomes above and below the conditional median.
4.2 Binary Outcome
The above formulation and closed form solution required the outcome Y to be continuous. This can be seen from the fact that the optimal choices for s depend on Y being above or below some median cutoff point. In the binary case, for strata of (A, X) where 0 < P (Y = 1 | A, X) < 1, one cannot simply take s∗(A | X, U ) to match the form in Proposition 1, replacing M (A, X) with 1/2, as this will lead to a violation of the constraint on the score in Equation (6) unless P (Y = 1 | A, X) = 1/2 exactly.-
 Of course, the bound obtained by replacing M (A, X) in the solution from Proposition 1 with 1/2 would still be valid, but potentially conservative. Instead, we can show the following result for the binary outcome case:
Proposition 2. Suppose the outcome Y is binary. A solution to the maximization version of (6) is
s∗(A | X, U ) =
(
s∗(A | X) − γ if Y = 1
s∗(A | X) + γ × P (Y = 1 | A, X)/(1 − P (Y = 1 | A, X)) if Y = 0 ,
if P (Y = 1 | A, X) ≤ 1/2 and
s∗(A | X, U ) =
(
s∗(A | X) − γ × (1 − P (Y = 1 | A, X))/P (Y = 1 | A, X) if Y = 1
s∗(A | X) + γ if Y = 0 ,
if P (Y = 1 | A, X) > 1/2. The optimal solution for the minimum is the opposite (swap the Y = 1 and Y = 0 solutions). Moreover, the maximum and minimum values of the optimization program
are
ψB
max = E[−s(A | X)Y ] + γE[1/2 − |P (Y = 1 | A, X) − 1/2|],
ψB
min = E[−s(A | X)Y ] − γE[1/2 − |P (Y = 1 | A, X) − 1/2|], (8)
respectively.
Again, the solution has a Neyman-Pearson flavor and the optimal value takes the form of E[−s(A | X)Y ] (what one would estimate if they ignored U ), plus or minus γ times a nonnegative correction term, which increases as P (Y = 1 | A, X) approaches 1/2. In the binary case, however, the correction term is not as simple to estimate. We observe that the optimal value for the binary outcome involves an absolute value (or maximum), because of the term γE[1/2 − |P (Y = 1 | A, X) − 1/2|] = γE[1/2 − max{P-
 (Y = 1 | A, X) − 1/2, 1/2 − P (Y = 1 | A, X)}] = γE[min{1 − P (Y = 1 | A, X), P (Y = 1 | A, X)}]. Such a term is not smooth when the probability that P (Y = 1 | A, X) = 1/2 is not zero. An approach that is popular when trying to estimate such non-smooth quantities is to instead target a smooth approximation that bounds the true quantity of interest, which we describe in detail in Section 5.
Remark 3. A natural question to ask is whether the bounds derived in the previous two sections are “sharp” in some sense. For example, in the binary treatment case, for the marginal model from Tan
8

(2006), Dorn and Guo (2023) exhibited sharpness of their bounds (and looseness of the original bounds of Zhao et al. (2019)) by constructing potential outcome and U distributions that can achieve their bounds simultaneously for the treated and control potential outcomes while producing an identical observed data distribution. It is difficult to find an analogous construction in our more complicated setting with a continuous exposure and a sensitivity model that simultaneously places bounds on qua-
ntities at any pair of dose levels a, a′. Moreover, the optimization problem in (6) is solved separately for each stratum (a, x), so we do not impose the mean zero (averaging over A) restriction on score functions. Nevertheless, we do impose the constraint implied by Lemma 3, which is in some sense analogous to the additional constraint imposed by Dorn and Guo (2023) to sharpen the original conservative bounds of Zhao et al. (2019). In addition, the simulations and real data applications suggest t-
hat our bounds can be informative.
5 Estimation and inference
For estimation and inference for the closed-form bounds, we appeal to semiparametric efficiency theory (Tsiatis, 2006). As alluded to previously, the bounds for a binary outcome can be non-smooth, so we instead target a smooth approximation. The central object in semiparametric efficiency theory is the efficient influence function, whose variance equals the semiparametric efficiency bound, and is unique in a completely nonparametric model. The rest of this section is devoted to characterizing the -
efficient influence functions of the (smoothed) bounds for continuous and binary outcomes in the nonparametric model, which will motivate construction of estimators. For convenience, we will at times refer to the efficient influence function even when the precise terminology would be the uncentered efficient influence function. For a recent review of semiparametric theory, we refer the reader to Kennedy (2024).
5.1 Continuous outcome
In this subsection, we will derive the efficient influence function for the bounds on the ADE under the sensitivity model with continuous outcomes. Recall that these were ψmax = E[−s(A | X)Y ] + γE[Y (1{Y >M(A,X)} − 1{Y <M(A,X)})] and ψmin = E[−s(A | X)Y ] − γE[Y (1{Y >M(A,X)} − 1{Y <M(A,X)})]. The efficient influence function for the functional E[−s(A | X)Y ] was derived in Newey and Stoker (1993). Thus, by a linearity property of efficient influence functions (Kennedy, 2024), it only remains to -
find the efficient influence function of γE[Y (1{Y >M(A,X)} −1{Y <M(A,X)})].
Proposition 3. The efficient influence function of γE[Y (1{Y >M(A,X)} − 1{Y <M(A,X)})] is
γ(Y − M (A, X))(1{Y >M(A,X)} − 1{Y <M(A,X)}).
The efficient influence function of E[−s(A | X)Y ] derived in (Newey and Stoker, 1993) takes the following form:
μ′(A, X) − s(A | X){Y − μ(A, X)},
where μ(A, X) ≡ E[Y | A, X], and μ′(A, X) ≡ ∂aμ(A, X). We then get the immediate corollary:
Corollary 1. The efficient influence functions of ψmax and ψmin under the nonparametric model are
φmax = μ′(A, X) − s(A | X){Y − μ(A, X)} + γ(Y − M (A, X))(1{Y >M(A,X)} − 1{Y <M(A,X)}),
φmin = μ′(A, X) − s(A | X){Y − μ(A, X)} − γ(Y − M (A, X))(1{Y >M(A,X)} − 1{Y <M(A,X)}), (9)
respectively.
9

Equipped with the efficient influence functions, it is straightforward to propose estimators with desirable properties. The estimator will require estimating the unknown nuisance functions μ, μ′, s, M . To ease the notational burden for the theoretical analysis, we simply analyze a sample split estimator where the nuisance functions are estimated on one split of the data, and on the second split, those estimates are plugged in to the efficient influence function at each data point, i.e.
ψbmax = 1
n
n
X
i=1
μb′(Ai, Xi) − sb(Ai | Xi){Yi − μb(Ai, Xi)}
+ γ(Yi − Mc(Ai, Xi))(1{Yi>Mc(Ai,Xi)} − 1{Yi<Mc(Ai,Xi)}),
ψbmin = 1
n
n
X
i=1
μb′(Ai, Xi) − sb(Ai | Xi){Yi − μb(Ai, Xi)}
− γ(Yi − Mc(Ai, Xi))(1{Yi>Mc(Ai,Xi)} − 1{Yi<Mc(Ai,Xi)}).
(10)
To make use of all of the data, one can employ the now commonly utilized cross-fitting technique (Chernozhukov et al., 2018), where the data is randomly split into K roughly equally sized folds
D1, . . . , DK. For each k = 1, . . . , K, we compute nuisance estimates ηb = (μb, μb′, sb, Mc) for η = (μ, μ′, s, M ) on all folds except Dk, and plug in these estimates on fold Dk (as in (10)). The result of Theorem 3, which outlines conditions under which the sample split estimator achieves asymptotic normality, will also apply to an analogous cross-fitted estimator.
Theorem 3. Suppose nuisance estimates ηb are estimated from an independent sample of data and the conditional densities f (y | a, x) are uniformly bounded with no point masses. Also, assume
that (μb, μb′, sb, Mc, μ, μ′, s, M ) are bounded almost surely and that ∥μb − μ∥ + μb′ − μ′ + ∥sb − s∥ +
Mc − M = op(n−1/4). Then
√n(ψbmax − ψmax) →d N (0, Var(φmax)),
√n(ψbmin − ψmin) →d N (0, Var(φmin)).
By virtue of using an estimator based on the efficient influence function, the bias of the esti
mator only involves second-order nuisance estimation errors. Thus, √n consistency is possible even if the nuisance functions can be estimated at the (slower than parametric) n−1/4 rate. This makes it possible to conduct valid inference even when using nonparametric or data adaptive estimates of the nuisance functions, provided they are not converging too slowly to the truth. Based on the asymptotic normality of the estimators, it is straightforward to construct Wald-style confidence intervals. Sin-
ce we are bounding upper and lower bounds, it is reasonable to construct one-sided confidence intervals. Explicitly,
ψbmax + z1−α
p
σbmax/n,
ψbmin − z1−α
p
σbmin/n,
(11)
are asymptotically valid 1 − α confidence upper and lower bounds for ψmax and ψmin, provided the variance estimates σbmax and σbmin converges to the true variances. Here, plug-in variance estimates can be used:
σbmax ≡ 1
n
n
X
i=1
n
μb′(Ai, Xi) − sb(Ai | Xi){Yi − μb(Ai, Xi)} + γ(Yi − Mc(Ai, Xi))(1{Yi>Mc(Ai,Xi)} − 1{Yi<Mc(Ai,Xi)}) − ψbmax
o2
,
σbmin ≡ 1
n
n
X
i=1
n
μb′(Ai, Xi) − sb(Ai | Xi){Yi − μb(Ai, Xi)} − γ(Yi − Mc(Ai, Xi))(1{Yi>Mc(Ai,Xi)} − 1{Yi<Mc(Ai,Xi)}) − ψbmin
o2
.
10

These plug-in estimates are consistent under the assumptions of Theorem 3, and so the confidence bounds from Equation (11) will be asymptotically valid.
5.2 Binary outcome
As derived in the previous section, the bounds in the binary outcome case involve the term γE[min{1 − P (Y = 1 | A, X), P (Y = 1 | A, X)}]. The presence of the minimum makes this quantity potentially non-smooth, so we instead rely on a smooth approximation. Specifically, when minima or maxima are involved, the LogSumExp (LSE) function is a popular choice (see Levis et al. (2025) for a recent example in causal inference). For a minimum of k quantities, and any fixed t > 0,
min{x1, . . . , xk} − log(k)
t ≤ −1
t log(exp(−tx1) + . . . + exp(−txk)) ≤ min{x1, . . . , xk}. (12)
Specialized to our setting, where we take a minimum of p and 1 − p, we define
ht(p) ≡ − 1
t log(exp(−tp) + exp(−t(1 − p))). (13)
Thus, we will instead estimate (for a fixed t)
ψB
max,ht ≡ E[−s(A | X)Y ] + γE[ht(P (Y = 1 | A, X))],
ψB
min,ht ≡ E[−s(A | X)Y ] − γE[ht(P (Y = 1 | A, X))]. (14)
From Equation (12), it is immediate that ψmBax ≤ ψB
max,ht and ψB
min ≥ ψB
min,ht for any t > 0, and the inequality gap shrinks as t increases. At the same time, ht becomes less smooth as t increases, and consequently, E[ht(P (Y = 1 | A, X))] becomes harder to estimate. Thus, in choosing t, there is a trade-off between approximation error and statistical estimation. A rigorously justified “optimal” choice for t is outside the scope of this paper, but we refer the reader to Levis et al. (2025) for some additional discussion. In the remainder of this section, we will deriv-
e the efficient influence function for the smoothed lower and upper bounds for the ADE under the sensitivity model with binary outcomes. Recall that these were ψB
max,ht and ψB
min,ht. As in the continuous outcome case, the efficient influence function for the functional E[−s(A | X)Y ] was derived in Newey and Stoker (1993). Thus, it only remains to find the efficient influence function of E[ht P (Y = 1 | A, X) ].
Proposition 4. The efficient influence function of θB
h ≡ E[h P (Y = 1 | A, X) ] for any univariate, continuously differentiable function h is given by
h P (Y = 1 | A, X) + h′(P (Y = 1 | A, X))(Y − P (Y = 1 | A, X)).
As before, we get the immediate corollary:
Corollary 2. The efficient influence functions for ψB
max,ht and ψB
min,ht are
φB
max,ht = μ′(A, X) − s(A | X){Y − μ(A, X)}+
γ{ht P (Y = 1 | A, X) + h′
t(P (Y = 1 | A, X))(Y − P (Y = 1 | A, X))},
φB
min,ht = μ′(A, X) − s(A | X){Y − μ(A, X)}−
γ{ht P (Y = 1 | A, X) + h′
t(P (Y = 1 | A, X))(Y − P (Y = 1 | A, X))},
respectively.
11

Again, we propose estimators based on the efficient influence function, and present sample-split versions that estimate the nuisances μ, μ′, s. They are as follows: (since Y is binary, μb(Ai, Xi) and Pb(Y = 1 | Ai, Xi) are equivalent):
ψbB
max,ht = 1
n
n
X
i=1
μb′(Ai, Xi) − sb(Ai | Xi){Yi − μb(Ai, Xi)}
+ γ(ht Pb(Y = 1 | Ai, Xi) + h′
t(Pb(Y = 1 | Ai, Xi))(Yi − Pb(Y = 1 | Ai, Xi))),
ψbB
min,ht = 1
n
n
X
i=1
μb′(Ai, Xi) − sb(Ai | Xi){Yi − μb(Ai, Xi)}
− γ(ht Pb(Y = 1 | Ai, Xi) + h′
t(Pb(Y = 1 | Ai, Xi))(Yi − Pb(Y = 1 | Ai, Xi))).
(15)
Theorem 4 establishes asymptotic normality of the estimators.
Theorem 4. Suppose nuisance estimates ηb are estimated from an independent sample of data.
Also, assume that (μb, μb′, sb, μ′, s) are bounded almost surely and that ∥μb − μ∥ + μb′ − μ′ +∥sb − s∥ =
op(n−1/4). Then
√n(ψbB
max,ht − ψB
max,ht ) →d N (0, Var(φB
max,ht )), and
√n(ψbB
min,ht − ψB
min,ht ) →d N (0, Var(φB
min,ht )).
Similar to the continuous outcome case, we can construct asymptotically valid Wald-style confidence intervals for ψmBax and ψB
min (rather than the smoothed ψB
max,ht and ψB
max,ht ), if we account for the approximation error from the LSE function. The respective upper and lower bounds for the 1 − α confidence intervals are
ψbB
max,ht + z1−α
q
σbB
max,ht /n + log(2)/t,
ψbB
min,ht − z1−α
q
σbB
min,ht /n − log(2)/t.
(16)
Again, plug-in variance estimates can be used:
σbB
max,ht ≡ 1
n
n
X
i=1
n
μb′(Ai, Xi) − sb(Ai | Xi){Yi − μb(Ai, Xi)} + γ(ht μb(Ai, Xi) + h′
t(μb(Ai, Xi))(Yi − μb(Ai, Xi))) − ψbB
max,ht
o2
,
σbB
min,ht ≡ 1
n
n
X
i=1
n
μb′(Ai, Xi) − sb(Ai | Xi){Yi − μb(Ai, Xi)} − γ(ht μb(Ai, Xi) + h′
t(μb(Ai, Xi))(Yi − μb(Ai, Xi))) − ψbB
min,ht
o2
.
These estimates will be consistent under the assumptions of Theorem 4, and so the confidence bounds from Equation (16) will be asymptotically valid.
5.3 Simultaneous confidence bands
The previous subsections introduced estimators and pointwise confidence intervals for a fixed value of γ. In this subsection, we briefly outline how to conduct simultaneous inference when we wish to conduct the sensitivity analysis over a bounded interval of values, i.e. γ ∈ [γl, γu]. Conveniently, the nature of the resulting estimands take the form a ± γb, and we can easily construct Wald confidence intervals for a and b under the same assumptions as in the previous subsections. Thus, by the unio-
n
12

bound, a uniform (1 − α)% confidence band can be straightforwardly constructed for γ ∈ [γl, γu] by constructing (1 − α/2)% confidence intervals for a and b and concatenating accordingly. In our setting, a corresponds to E[−s(A | X)Y ] and b corresponds to either E[Y (1{Y >M(A,X)} − 1{Y <M(A,X)})] (continuous Y ) or E[ht(P (Y = 1 | A, X))] (binary Y ). Wald-style (1 − α/2)% confidence intervals for a and b can be constructed using the respective efficient influence functions. Alternatively, a mult-
iplier bootstrap approach could be implemented (see Kennedy (2019) and Zhang and Zhao (2022) for recent applications in causal inference). However, we do not pursue that direction as the proposed approach is much simpler.
6 Simulations
We now evaluate the finite sample performance of the proposed methods through a simulation study. In the simulation, we focus on assessing the coverage of confidence intervals of the true ADE when there is unmeasured confounding based on sensitivity analyses at different choices of γ.
6.1 Simulation setup
We conduct simulations corresponding to two different dose distributions, two outcome types (binary and continuous), and three different strengths of unmeasured confounders, yielding 2 × 2 × 3 = 12 different settings. For all 12 settings, we draw the confounders X ∼ Unif[0, 1]d, d = 5, and draw U | X ∼ Bern(Φ(sin(X1 + X2))). We draw the dose from a conditional density that is Gaussian or Gamma. For the Gaussian case, A | X, U ∼ N (θT X + ζU, 1). For the Gamma case (shape and rate parametrization),-
 A | X, U ∼ Gamma(13, 8 + θT X − ζU ). ζ is set to log(2) for all simulations, and here θ are randomly drawn coefficients from N (0, 1), redrawn at each iteration. For the outcome model, we consider different settings for a binary outcome and for a continuous outcome. For the continuous outcome, we draw Y | A, X, U ∼ N (ηA + βT X + δU + ηAX AX, 1). For the binary outcome, we use a probit model and draw Y | A, X, U ∼ Bern(Φ(ηA + βT X + δU + ηAX AX)). δ is varied in {2, 3, 4}. For both outcome model-
s, the β coefficients are randomly drawn from N (−1, 1), redrawn at each iteration. The interaction coefficients βAX are randomly drawn from N (0, 1/4), redrawn at each iteration. In the simulation, a higher U leads to a higher chance of both a higher dose and outcome. The derivatives of the conditional expectations E[Y | A, X, U ] are available in closed form, and so the “ground truth” average derivative effects are approximated by drawing 107 Monte-Carlo samples from the joint distribution of (A-
, X, U ) and computing the sample average of the derivative of E[Y | A, X, U ].
6.2 Estimators
The nuisance estimates required to compute the estimator include the score function s(a | x), the conditional mean μ(a, x) and its derivative μ′(a, x), and the conditional median M (a, x) for the continuous outcome case. For the binary outcome case, we set t = 50 for computing the LSE function approximation. We use the R packages drape and xgboost for nuisance estimation. Specifically, we estimate scores s(a | x) and conditional mean derivatives μ′(a, x) using adaptations of the methods from the d-
rape package (Klyne and Shah, 2023). The methods proposed by Klyne and Shah (2023) can re-smooth any first-stage regression μb(a, x) estimator to produce a differentiable version to obtain an estimate μb′(a, x), and model the conditional distribution f (a | x) through a location-scale model to estimate s(a | x). Hyperparameters for these methods were chosen in the same manner as the simulations in Klyne and Shah (2023). To fit conditional means μ(a, x) and medians M (a, x), we use gradient boosted-
 trees as implemented in the xgboost package with default hyperparameters
13

and the appropriate loss function – squared error for estimating the conditional mean of a continuous variable, logistic loss for estimating the conditional mean of a binary variable, and absolute error for estimating the conditional median of a continuous variable. To make use of the full data sample, we implement 5-fold cross-fitting.
6.3 Simulation results
Table 1 collects coverage results for pointwise 95% confidence intervals of the sensitivity analysis procedures at varying levels of γ. One can verify that the γ at which the sensitivity analysis model (2) holds (and thus the procedure will be valid) is between 0.5 log(2) and log(2). Therefore, it is not surprising to see in Table 1 that the 95% sensitivity analysis confidence intervals can severely undercover when γ is taken to be 0 (no unmeasured confounding) or 0.25 log(2), as both of these are-
 less than the lower bound 0.5 log(2). This also gives some reassurance that although we have not established sharpness of the analytic bounds, the bounds can still be informative. In addition, one may notice that as the strength of the unmeasured confounders impact on the outcome, measured through δ, increases, the sensitivity analysis intervals cover less. This is expected, as the sensitivity model we consider only restricts U ’s impact on the treatment. Thus, the sensitivity analysis must prote-
ct against arbitrary dependence between U and the (potential) outcomes, i.e. arbitrarily large values of δ. Consequently, it is reasonable to expect that if δ were to be increased further, the coverage rate of the sensitivity analysis bounds for γ ≥ 0.5 log(2) would move closer towards but not necessarily reach the nominal level.
Simulation parameters γ value of the sensitivity analysis dose outcome δ 0 0.25 log(2) 0.5 log(2) 0.75 log(2) log(2) Gaussian binary 2.00 0.68 0.95 0.99 1.00 1.00 Gaussian binary 3.00 0.51 0.89 0.99 1.00 1.00 Gaussian binary 4.00 0.26 0.76 0.99 1.00 1.00 Gamma binary 2.00 0.88 0.95 0.98 0.99 0.99 Gamma binary 3.00 0.80 0.93 0.98 0.99 1.00 Gamma binary 4.00 0.70 0.88 0.97 0.99 1.00 Gaussian continuous 2.00 0.24 0.95 1.00 1.00 1.00 Gaussian continuous 3.00 0.07 0.86 1.00 1.00 1.00 Gaussian continuou-
s 4.00 0.02 0.73 1.00 1.00 1.00 Gamma continuous 2.00 0.75 0.97 1.00 1.00 1.00 Gamma continuous 3.00 0.72 0.98 1.00 1.00 1.00 Gamma continuous 4.00 0.69 0.96 1.00 1.00 1.00
Table 1: 95% confidence interval coverage results for the sensitivity analysis under different sets of simulation parameters and different choices of γ. The proportions are averaged over 500 iterations.
7 Applications
7.1 The effect of parental income on child’s education
We illustrate the methodology for binary outcomes using an empirical example studying the extent to which household income affects a child’s educational attainment (Lundberg and Brand, 2023). The data we use comes from the National Longitudinal Survey of Youth 1997 cohort (NLSY97). The NLSY97 is a dataset consisting of a probability sample of U.S. youths ages 12–17, starting in
14

1997, who were followed up through 2019. We largely follow Lundberg and Brand (2023) in preprocessing the data. The treatment variable of interest is reported total gross household income in 1996, when the respondents were age 12-17. Lundberg and Brand (2023) logged and adjusted these measures to 2022 dollars using the Consumer Price Index. Those without income measurements are dropped, as are households coded as the maximum and minimum income values, as these represent upper and lower cutoffs, n-
ot actual incomes. The outcome of interest is a report of enrollment in any college up to age 21, which is binary. Those that did not complete a survey at ages 19–21 are omitted. Following Lundberg and Brand (2023), four measured confounding variables are adjusted for: race, gender, parents’ education, and wealth. The racial categories from 1997 were Hispanic, Non-Hispanic Black, and Non-Hispanic white or other. Parents’ education is categorical, with the 3 categories no parent completed college, -
one parent completed college, or two parents completed college. Wealth is the log of household net worth reported by the parent in 1997, also adjusted to 2022 dollars. There are 5219 individuals in the final, processed dataset. Unfortunately, there may be confounders beyond race, gender, parents’ education, and wealth that are not measured that affect both household income and propensity to pursue higher education. These might include things like innate ability or geographic location, both of whic-
h could be strongly related to household income and propensity to attend college. Thus, we implement our sensitivity analysis to assess the impact of hypothetical unmeasured confounders on the statistical conclusions. We use the same nuisance estimators as in the simulations for a binary outcome. The results of the sensitivity analysis are reported in Figure 1. Each black dot represents a point estimate of an upper or lower bound at some value of γ. The shaded regions depict 95% confidence interva-
ls. Assuming no unmeasured confounding, the point estimate for the ADE is 0.108, and the 95% confidence interval [0.075, 0.141]. Recall that the unit of the outcome is a percentage, and the treatment is the log of household income. In words, this means that on average, an increase of income of δ on the log scale might be expected to increase the propensity of attending any college by δ × 10 percentage points, assuming no unmeasured confounding. As γ increases, lower point estimates and confidence -
bounds decrease. The point estimate ultimately crosses 0 at γ = 0.323, the 95% pointwise confidence interval crosses 0 at γ = 0.222, and the 95% uniform confidence interval crosses 0 at γ = 0.197.
7.2 The effect of price on petrol consumption
We now illustrate the methodology for continuous outcomes using an empirical example studying the extent to which petrol prices affect the demand for petrol, which was also studied in Chernozhukov et al. (2022b). The data come from the Canadian National Private Vehicle Use Survey. We preprocessed the data in an identical fashion to Chernozhukov et al. (2022b), leaving n = 5001 households, each of which has an outcome – log of the petrol consumption, covariates – log age, log income, log distance, -
and other time, geographical, household indicators, and treatment log of petrol price per liter. In this example, the ADE measures the average price elasticity of petrol demand. Instead of constructing pointwise confidence intervals using different estimators, we concatenated the point estimates and standard errors for E[−s(A | X)Y ] as estimated in Chernozhukov et al. (2022b) with estimates and standard errors for the correction term from Equation (7) to produce simultaneous confidence bands. Thi-
s exercise demonstrates the ease in which the sensitivity analysis can be conducted after (and completely separate from) a primary analysis assuming no unmeasured confounding has been completed. For estimation of the correction term, the only nuisance function is the conditional median. As in the simulation, we used the xgboost package with absolute error loss to fit the conditional median M (a, x), in conjunction with 5-fold cross-fitting. The results are displayed in Figure 2 when the generalize-
d Dantzig selector (GDS) and Lasso estimators are used for estimating E[−s(A | X)Y ] as described in Chernozhukov et al.
15

0.323
0.222
0.197
0.0
0.2
0.4
0.0 0.2 0.4 0.6
gamma values
average derivative effect
Confidence Interval
Point
Uniform
Point estimates and confidence
intervals for the ade bounds
Figure 1: A plot displaying point estimates and confidence intervals for the ADE of income on probability of enrolling in college. The black dots represent point estimates of the upper and lower estimates. The darker shade represents 95% pointwise confidence intervals at each γ value, and the lighter shade represents 95% simultaneous confidence intervals. The lower simultaneous confidence interval, pointwise confidence interval, and point estimate cross 0 at γ = 0.197, 0.222, 0.323 respectively.
16

(2022b). Each black dot represents a point estimate of an upper or lower bound at some value of γ. The shaded region depicts the 95% simultaneous confidence intervals. Assuming no unmeasured confounding, the point estimates for the ADE are −0.28 and −0.16 for GDS and the Lasso, respectively. As γ increases, upper point estimates and confidence bounds increase. The point estimates ultimately cross 0 at γ = 0.924 and γ = 0.528 and the 95% simultaneous confidence bounds cross 0 at γ = 0.524 and γ = -
0.2 for GDS and Lasso, respectively.
0.524 0.924
−0.75
−0.50
−0.25
0.00
0.00 0.25 0.50 0.75 1.00 gamma
average derivative effect
GDS
0.2 0.528
−0.6
−0.4
−0.2
0.0
0.2
0.00 0.25 0.50 0.75 1.00 gamma
average derivative effect
Lasso
Figure 2: Point estimates (dotted lines) and 95% simultaneous confidence bands (shaded region) when using the GDS and Lasso estimators of Chernozhukov et al. (2022b) for E[−s(A | X)Y ].
8 Discussion
In this paper, we have proposed a new sensitivity model for the ADE estimand, along with valid closed-form bounds, and estimators and confidence intervals for said bounds. The form of the bounds differ for continuous and binary outcomes and are particularly convenient, allowing easy construction of uniform confidence intervals. The extent to which the bounds introduced in this paper are sharp, in the sense of Dorn and Guo (2023), is unclear and is a promising direction for future research. To the -
best of our knowledge, sharp bounds for causal estimands under sensitivity models resembling (2) do not exist beyond the binary treatment case. Another promising direction for further inquiry might be a calibration procedure, in the vein of Hsu and Small (2013) and McClean et al. (2024). Calibrating the sensitivity analysis to observed confounders, for example, could potentially help researchers gauge whether a certain magnitude of γ is plausible, though such a practice has limitations. Finally, i-
t may be of interest to study ordinal rather than continuous exposures. Such exposures may arise, for example, when doses of drugs are prescribed at a finite number of ordered levels.
Acknowledgements
We thank Abhinandan Dalal, Zhihan Huang, Ziang Niu, Zhimei Ren, Dylan Small, Eric Tchetgen Tchetgen, and participants at ACIC 2025 for helpful discussions and comments.
17

References
Jean-Baptiste Baitairian, Bernard Sebastien, Rana Jreich, Sandrine Katsahian, and Agathe Guilloux. Sharp Bounds for Continuous-Valued Treatment Effects with Unobserved Confounders. arXiv preprint arXiv:2411.02231, 2024.
Md Abdul Basit, Mahbub AHM Latif, and Abdus S Wahed. Sensitivity Analysis of Inverse Probability Weighting Estimators of Causal Effects in Observational Studies with Multivalued Treatments. arXiv preprint arXiv:2308.15986, 2023.
Matteo Bonvini and Edward H. Kennedy. Sensitivity Analysis via the Proportion of Unmeasured Confounding. Journal of the American Statistical Association, 117(539):1540–1550, 2022.
Matteo Bonvini, Edward Kennedy, Valerie Ventura, and Larry Wasserman. Sensitivity analysis for marginal structural models. arXiv preprint arXiv:2210.04681, 2022.
David Bruns-Smith. Two-Stage Machine Learning for Nonparametric Instrumental Variable Regression. 2025.
David Bruns-Smith and Angela Zhou. Robust fitted-q-evaluation and iteration under sequentially exogenous unobserved confounders. arXiv preprint arXiv:2302.00662, 2023.
Victor Chernozhukov, Denis Chetverikov, Mert Demirer, Esther Duflo, Christian Hansen, Whitney Newey, and James Robins. Double/debiased machine learning for treatment and structural parameters. The Econometrics Journal, 21(1):C1–C68, 2018.
Victor Chernozhukov, Carlos Cinelli, Whitney Newey, Amit Sharma, and Vasilis Syrgkanis. Long story short: Omitted variable bias in causal machine learning. Technical report, National Bureau of Economic Research, 2022a.
Victor Chernozhukov, Whitney K Newey, and Rahul Singh. Debiased machine learning of global and local parameters using regularized Riesz representers. The Econometrics Journal, 25(3): 576–601, 2022b.
Carlos Cinelli and Chad Hazlett. Making sense of sensitivity: extending omitted variable bias. Journal of the Royal Statistical Society. Series B: Statistical Methodology, 82(1):39–67, 2020.
Jerome Cornfield, William Haenszel, E. Cuyler Hammond, Abraham M. Lilienfeld, Michael B. Shimkin, and Ernst L. Wynder. Smoking and lung cancer: recent evidence and a discussion of some questions*. International Journal of Epidemiology, 38(5):1175–1191, 1959.
Abhinandan Dalal and Eric J Tchetgen Tchetgen. Partial Identification of Causal Effects for Endogenous Continuous Treatments. arXiv preprint arXiv:2508.13946, 2025.
Iv ́an Dı ́az and Mark J. van der Laan. Sensitivity Analysis for Causal Inference under Unmeasured Confounding and Measurement Error Problems. The International Journal of Biostatistics, 9 (2), 2013.
Jacob Dorn and Kevin Guo. Sharp Sensitivity Analysis for Inverse Propensity Weighting via Quantile Balancing. Journal of the American Statistical Association, 118(544):2645–2657, 2023.
Kenneth A. Frank. Impact of a Confounding Variable on a Regression Coefficient. Sociological Methods & Research, 29(2):147–194, 2000.
18

Dennis Frauen, Valentyn Melnychuk, and Stefan Feuerriegel. Sharp Bounds for Generalized Causal Sensitivity Analysis. Advances in Neural Information Processing Systems, 36, 2023.
Wolfgang Hardle and Thomas M. Stoker. Investigating Smooth Multiple Regression by the Method of Average Derivatives. Journal of the American Statistical Association, 84(408):986–995, 1989.
Oliver Hines, Karla Diaz-Ordaz, and Stijn Vansteelandt. Parameterising the effect of a continuous exposure using average derivative effects. arXiv preprint arXiv:2109.13124, 2021.
Oliver Hines, Karla Diaz-Ordaz, and Stijn Vansteelandt. Optimally weighted average derivative effects. arXiv preprint arXiv:2308.05456, 2023.
Oliver J Hines and Caleb H Miles. Learning density ratios in causal inference using Bregman-Riesz regression. arXiv preprint arXiv:2510.16127, 2025.
Jesse Y. Hsu and Dylan S. Small. Calibrating sensitivity analyses to observed covariates in observational studies. Biometrics, 69(4):803–811, 2013.
Melody Huang and Samuel D Pimentel. Variance-based sensitivity analysis for weighting estimators results in more informative bounds. Biometrika, 112(1):asae040, 2025.
Guido Imbens. The Role of the Propensity Score in Estimating Dose-Response Functions. Biometrika, 87(3):706–710, 2000.
Guido W. Imbens. Sensitivity to Exogeneity Assumptions in Program Evaluation. American Economic Review, 93(2):126–132, 2003.
Andrew Jesson, Alyson Douglas, Peter Manshausen, Ma ̈elys Solal, Nicolai Meinshausen, Philip Stier, Yarin Gal, and Uri Shalit. Scalable Sensitivity and Uncertainty Analyses for CausalEffect Estimates of Continuous-Valued Interventions. Advances in Neural Information Processing Systems, 35, 2022.
Ying Jin, Zhimei Ren, and Zhengyuan Zhou. Sensitivity analysis under the f -sensitivity models: a distributional robustness perspective. arXiv preprint arXiv:2203.04373, 2022.
Edward H. Kennedy. Nonparametric causal effects based on incremental propensity score interventions. Journal of the American Statistical Association, 114(526):645–656, 2019.
Edward H Kennedy. Semiparametric doubly robust targeted double machine learning: a review. Handbook of Statistical Methods for Precision Medicine, pages 207–236, 2024.
Edward H. Kennedy, Zongming Ma, Matthew D. Mchugh, and Dylan S. Small. Nonparametric methods for doubly robust estimation of continuous treatment effects. Journal of the Royal Statistical Society, Series B (Statistical Methodology), 79(4):1229–1245, 2017.
Harvey Klyne and Rajen D Shah. Average partial effect estimation using double machine learning. arXiv preprint arXiv:2308.09207, 2023.
Kaitlyn J Lee, Alan Hubbard, and Alejandro Schuler. Bridging Binarization: Causal Inference with Dichotomized Continuous Exposures. arXiv preprint arXiv:2405.07109, 2024.
Alexander W Levis, Edward H Kennedy, Alec McClean, Sivaraman Balakrishnan, and Larry Wasserman. Stochastic interventions, sensitivity analysis, and optimal transport. arXiv preprint arXiv:2411.14285, 2024.
19

Alexander W Levis, Matteo Bonvini, Zhenghao Zeng, Luke Keele, and Edward H Kennedy. Covariate-assisted bounds on causal effects with instrumental variables. Journal of the Royal Statistical Society Series B: Statistical Methodology, page qkaf028, 2025.
Ian Lundberg and Jennie E. Brand. The Nonlinear and Heterogeneous Effects of Parental Income on Children’s Educational Attainment. OSF, 2023.
Myrl G. Marmarelis, Neda Jahanshad, Elizabeth Haddad, Aram Galstyan, Andrew Jesson, and Greg Ver Steeg. Partial Identification of Dose Responses with Hidden Confounders. Proceedings of Machine Learning Research, 216(UAI):1368–1379, 2023.
Alec McClean, Zach Branson, and Edward H Kennedy. Calibrated sensitivity models. arXiv preprint arXiv:2405.08738, 2024.
Razieh Nabi, Matteo Bonvini, Edward H Kennedy, Ming-Yueh Huang, Marcela Smid, and Daniel O Scharfstein. Semiparametric sensitivity analysis: unmeasured confounding in observational studies. Biometrics, 80(4):ujae106, 2024.
Whitney K. Newey and Thomas M. Stoker. Efficiency of Weighted Average Derivative Estimators and Index Models. Econometrica, 61(5):1199–1223, 1993.
Emily Oster. Unobservable Selection and Coefficient Stability: Theory and Evidence. Journal of Business & Economic Statistics, 37(2):187–204, 2019.
James L. Powell, James H. Stock, and Thomas M. Stoker. Semiparametric Estimation of Index Coefficients. Econometrica, 57(6):1403–1430, 1989.
James M. Robins, Andrea Rotnitzky, and Daniel O. Scharfstein. Sensitivity Analysis for Selection Bias and Unmeasured Confounding in Missing Data and Causal inference Models. In Statistical Models in Epidemiology, the Environment, and Clinical Trials, pages 1–94, New York, NY, 2000. Springer New York.
P. R. Rosenbaum. Sensitivity Analysis for Matched Observational Studies with Many Ordered Treatments. Scandinavian Journal of Statistics, 16(3):227–236, 1989.
Paul R. Rosenbaum. Observational Studies. Springer New York, 2002.
Dominik Rothenh ̈ausler and Bin Yu. Incremental causal effects. arXiv preprint arXiv:1907.13258, 2019.
Kyle Schindl, Shuying Shen, and Edward H Kennedy. Incremental effects for continuous exposures. arXiv preprint arXiv:2409.11967, 2024.
Thomas M Stoker. Consistent Estimation of Scaled Coefficients. Econometrica, 54(6):1461–1481, 1986.
Zhiqiang Tan. A distributional approach for causal inference using propensity scores. Journal of the American Statistical Association, 101(476):1619–1637, 2006.
Zhiqiang Tan. Sensitivity models and bounds under sequential unmeasured confounding in longitudinal studies. Biometrika, 112(1), 2025.
Anastasios A. Tsiatis. Semiparametric Theory and Missing Data. Springer Series in Statistics. Springer New York, New York, NY, 2006.
20

Tyler J. VanderWeele and Miguel A. Hernan. Causal inference under multiple versions of treatment. Journal of Causal Inference, 1(1):1–20, 2013.
Steve Yadlowsky, Hongseok Namkoong, Sanjay Basu, John Duchi, and Lu Tian. Bounds on the conditional and average treatment effect with unobserved confounding factors. The Annals of Statistics, 50(5):2587–2615, 2022.
Bo Zhang and Eric J. Tchetgen Tchetgen. A Semi-Parametric Approach to Model-Based Sensitivity Analysis in Observational Studies. Journal of the Royal Statistical Society Series A: Statistics in Society, 185(Supplement 2):S668–S691, 2022.
Jeffrey Zhang and Siyu Heng. Bridging the Gap Between Design and Analysis: Randomization Inference and Sensitivity Analysis for Matched Observational Studies with Treatment Doses. arXiv preprint arXiv:2409.12848, 2024.
Jeffrey Zhang, Dylan S Small, and Siyu Heng. Sensitivity analysis for matched observational studies with continuous exposures and binary outcomes. Biometrika, 111(4):1349–1368, 2024.
Yao Zhang and Qingyuan Zhao. L∞- and L2-sensitivity analysis for causal inference with unmeasured confounding. arXiv preprint arXiv:2211.04697, 2022.
Qingyuan Zhao, Dylan S Small, and Bhaswar B Bhattacharya. Sensitivity analysis for inverse probability weighting estimators via the percentile bootstrap. Journal of the Royal Statistical Society Series B: Statistical Methodology, 81(4):735–761, 2019.
A Proof of results in Section 2
Proof of Lemma 1. Consider (a, x, u) such that f (a, x, u) > 0. By Assumptions 2 and 1,
E[Y (a) | x, u] = E[Y (a) | a, x, u]
= E[Y | a, x, u].
The first equality then follows by taking derivatives on both sides and then integrating over the support of (A, X, U ). The second equality follows by an integration by parts argument that is permitted by Assumption 4 (Powell et al., 1989).
A.1 Equivalent forms for θ
First, consider the estimand limδ→0 δ−1E[Y (A + δ) − Y (A)]. The difference E[Y (A + δ) − Y (A)] is exactly the difference between the outcome in the population where treatment is shifted by δ above the natural treatment value A, and the outcome under no intervention. We now show that θ equals limδ→0 δ−1E[Y (A + δ) − Y (A)].
Lemma 4. Under Assumptions 1-4 and additionally assuming ∂aE[Y (a) | x, u] is bounded,
θ = δli→m0 δ−1E[Y (A + δ) − Y (A)].
21

Proof.
δli→m0 δ−1E[Y (A + δ) − Y (A)] = δli→m0 δ−1
Z
E[Y (a + δ) − Y (a) | a]f (a)da
= δli→m0 δ−1
Z
E[Y (a + δ) − Y (a) | x, u, a]f (x, u | a)dudxf (a)da
= δli→m0 δ−1
Z
E[Y (a + δ) − Y (a) | x, u]f (a, x, u)dadxdu
=
Z
δli→m0 δ−1E[Y (a + δ) − Y (a) | x, u]f (a, x, u)dadxdu
= E[∂aE[Y (A) | X, U ]].
The first equality is by definition, the second is by iterated expectation, and the third by Assumption 2. The fourth equality follows from Assumption 4 and boundedness of ∂aE[Y (a) | x, u] and the dominated convergence theorem.
Rothenh ̈ausler and Yu (2019) introduce a causal estimand for continuous outcomes called the incremental effect. They introduce the following assumption on the potential outcomes.
Assumption 6 (Regularity - potential outcomes). The potential outcomes Y (a) are bounded and the derivative Y ′(a) := ∂aY (a) = limδ→0 δ−1[Y (a + δ) − Y (a)] is continuous and bounded.
The estimand of interest is the incremental effect, E[Y ′(A)], where the average is taken over potential outcomes, treatments, and confounders. Combining the arguments in Proposition 1 of Rothenha ̈usler and Yu (2019) and the derivation of Lemma 1, it is straightforward to check that θ as defined in (1) is equal to E[Y ′(A)]. Thus, when the outcome is continuous and one is willing to invoke Assumption 6, our methods are directly applicable to E[Y ′(A)].
B Proof of results in Section 3
Proof of Lemma 2. Consider model (2) first. First, taking logs in (2), we get
−γ|a − a′| ≤ log(f (a | x)) − log(f (a′ | x)) − {log(f (a | x, u)) − log(f (a′ | x, u))} ≤ γ|a − a′|.
Next, recall that s(a | x, u) = ∂a log(f (a | x, u)) = limh→0
log(f (a+h|x,u))−log(f (a|x,u))
h . By the above
equation, plugging in a for a and a + h for a′, adding the log(f (a + h | x)) − log(f (a | x)) term everywhere in the inequality and dividing by h, we get
log(f (a + h | x)) − log(f (a | x)) − γh
h ≤ log(f (a + h | x, u)) − log(f (a | x, u))
h
≤ log(f (a + h | x)) − log(f (a | x)) + γh
h,
which immediately implies the result after taking the limit h → 0 everywhere. We can also show the implication under the Rosenbaum-style sensitivity model introduced later in (22). Taking logs, we get
−γ|a − a′| ≤ log(f (a | x, u′)) − log(f (a′ | x, u′)) − {log(f (a | x, u)) − log(f (a′ | x, u))} ≤ γ|a − a′|.
Using an analogous argument, we can deduce that
s(a | x, u′) − γ ≤ s(a | x, u) ≤ s(a | x, u′) + γ ∀a, x, u, u′.
22

The result follows from an application of the upcoming Lemma 3 combined with the following fact: For a random variable with the property that any two points in its support lie within γ of each other, it must be the case that any point of its support must lie within γ of the mean of the random variable.
Proof of Lemma 3. A similar argument appears in Proposition 2 of Rothenh ̈ausler and Yu (2019), but we provide one for completeness. By definition, we have
Z
s(a | x, u)f (u | a, x)du =
Z
f ′(a | x, u)/f (a | x, u)f (u | a, x)du
=
Z
f ′(a | x, u)/f (a | x)f (u | x)du
= 1/f (a | x)
Z
hli→m0
f (a + h | x, u) − f (a | x, u)
h f (u | x)du
= 1/f (a | x) hli→m0 1/h
Z
{f (a + h | x, u) − f (a | x, u)}f (u | x)du
= 1/f (a | x) hli→m0 1/h
Z
f (a + h, u | x) − f (a, u | x)du
= 1/f (a | x) hli→m0 1/h{f (a + h | x) − f (a, | x)}
= f ′(a | x)/f (a | x) = s(a | x).
The second equality is by Bayes. The fourth equality holds by invoking the dominated convergence theorem (which is possible by the boundedness and continuity assumption), which allows for interchange of limit and integration. The remaining equalities are algebraic or by definition.
C Proof of results in Section 4
Proof of Proposition 1. We first characterize the Lagrangian of the minimization program. It is as follows:
L = EY,U|A,X {−s(A | X, U )Y + λ1(s(A | X) − s(A | X, U ) − γ)
+ λ2(s(A | X, U ) − s(A | X) − γ) + λ3(s(A | X) − EY,U|A,X [s(A | X, U )])}.
Taking the derivative of the Lagrangian with respect to s(A | X, U ), we get that
−Y − λ1 + λ2 − λ3 = 0.
By complementary slackness, we know
λ1(s(A | X) − s(A | X, U ) − γ) = 0 and λ2(s(A | X, U ) − s(A | X) − γ) = 0.
We also know that at the optimum, λ1, λ2 ≥ 0. If −λ3 − Y < 0, then it must be the case that λ1 < λ2, in which case λ1 = 0 and s(A | X, U ) = s(A | X) + γ. Similarly, if −λ3 − Y > 0, then it must be the case that λ1 > λ2, in which case λ2 = 0 and s(A | X, U ) = s(A | X) − γ. In the primal problem, we also have the constraint
EY,U|A,X [s(A | X, U )] = s(A | X).
Let α∗ = P (Y < −λ3 | A, X). It then follows that
EY,U|A,X [s(A | X, U )] = α∗(s(A | X) − γ) + (1 − α∗)(s(A | X) + γ).
23

Solving for α∗, we get that α∗ = 1/2. Thus, −λ3 is simply the median of Y | A, X. This means that the (minimization) optimization in (2) is solved by
s∗
min(A | X, U ) =
(
s∗(A | X) − γ if Y < median(Y | A, X)
s∗(A | X) + γ if Y > median(Y | A, X) . (17)
It is the opposite for the maximization, i.e.
s∗
max(A | X, U ) =
(
s∗(A | X) + γ if Y < median(Y | A, X)
s∗(A | X) − γ if Y > median(Y | A, X) . (18)
This result can be derived by replacing −Y in the Lagrangian with Y . Next, the optimal (maximum) value achieved by the solution is the following:
ψmax = ψ+ + ψ−, (19)
where ψ+ = E[−(s(A | X) − γ)μ+(A, X)] and ψ− = E[−(s(A | X) + γ)μ−(X)], where μ+(A, X) = E[Y 1{Y >M(A,X)} | A, X] and μ−(A, X) = E[Y 1{Y <M(A,X)} | A, X]. A simple application of iterated expectation yields ψmax = E[−s(A | X)Y ] + γE[Y (1{Y >M(A,X)} − 1{Y <M(A,X)})]. For the minimum, it is easy to see that ψmin = E[−s(A | X)Y ] + γE[Y (1{Y >M(A,X)} − 1{Y <M(A,X)})], as desired.
Proof of Proposition 2. Since Y is binary, there must exist an optimal solution that sets s∗(A | X, U ) to distinct values according to whether Y = 1 or Y = 0. Since the optimization is conditional on A, X, we may rewrite the optimization as
maximize/minimize
s1(a|x,u),s0(a|x,u)
E[−s1(A | X, U ) | A = a, X = x]
subject to s1(a | x, u) ∈ [s(a | x) − γ, s(a | x) + γ] ∀a, x.
and s0(a | x, u) ∈ [s(a | x) − γ, s(a | x) + γ] ∀a, x.
and s1(A | X, U )P (Y = 1 | A = a, X = x)+
s0(A | X, U )(1 − P (Y = 1 | A = a, X = x)) = s(a | x).
(20)
The objective function can be written as −s1(A | X, U )P (Y = 1 | A = a, X = x). To maximize, we simply take s1(A | X, U ) to be the smallest possible it can be while still satisfying all three constraints in (20). It is clear that if P (Y = 1 | A, X) ≤ 1/2, we can take s1(A | X, U ) = s(a | x)−γ, and s0(A | X, U ) = s∗(A | X) + γ × P (Y = 1 | A, X)/(1 − P (Y = 1 | A, X)) ≤ s(a | x) + γ since P (Y = 1 | A, X)/(1 − P (Y = 1 | A, X)) ≤ 1. It is easy to check that the third constraint holds. Converse-
ly, if P (Y = 1 | A, X) ≥ 1/2, we can only take s1(A | X, U ) = s(a | x) − γ × (1 − P (Y = 1 | A, X))/P (Y = 1 | A, X) ≥ s(a | x) − γ as making it any smaller will cause violation of one of the second or third constraints in (20). To allow s1(A, | X, U ) to be that small, we must take s0(A | X, U ) = s∗(A | X) + γ to be the maximum. It is easy to check that the third constraint holds under this choice. It follows that the maximum value takes the form
ψB
max = E[−(s(A | X) − γ)1(P (Y = 1 | A, X) ≤ 1/2)P (Y = 1 | A, X)]
+ E[−(s(A | X) − γ × P (Y = 0 | A, X)
P (Y = 1 | A, X) 1(P (Y = 1 | A, X) > 1/2)P (Y = 1 | A, X)].
24

We can simplify this to
ψB
max = E[−s(A | X)P (Y = 1 | A, X)] + γE[1(P (Y = 1 | A, X) ≤ 1/2)P (Y = 1 | A, X)
+ 1(P (Y = 1 | A, X) > 1/2)P (Y = 0 | A, X)]
= E[−s(A | X)Y ] + γE[1/2 − |P (Y = 1 | A, X) − 1/2|].
The derivation for the minimum follows analogously.
D Deriving the efficient influence functions
D.1 Continuous outcome
We derive the efficient influence function of the minimal value of the ADE under the sensitivity model at a fixed γ > 0. In some parts, the steps resemble an argument from Zhang and Zhao (2022). We consider a parametric submodel indexed by ε that passes through the truth at ε = 0. We define score functions S with respect to the parametric submodel so that S(y, a, x) = S(y | a, x) + S(a, x), where S(y | a, x) = ∂
∂ε log(fε(y | a, x))|ε=0 and S(a, x) = ∂
∂ε log(fε(a, x))|ε=0. First, we prove a useful lemma.
Lemma 5.
d
dε Eε[Y 1{Y ≤Mε(A,X)} | A, X]|ε=0 = E[(Y − M (A, X))1{Y ≤M(A,X)}S(Y | A, X) | A, X],
d
dε Eε[Y 1{Y >Mε(A,X)} | A, X]|ε=0 = E[(Y − M (A, X))1{Y >M(A,X)}S(Y | A, X) | A, X].
Proof. We first show the first equality. By definition of M (A, X) as the conditional median of Y | A, X, and then taking derivatives using Leibniz rule,
1/2 =
Z Mε(A,X)
pε(y | A, X)dy =⇒
0 = p(y = M (A, X) | A, X) d
dε Mε(A, X)|ε=0 + E[1{Y ≤M(A,X)}S(Y | A, X) | A, X] =⇒
p(y = M (A, X) | A, X) d
dε Mε(A, X)|ε=0 = −E[1{Y ≤M(A,X)}S(Y | A, X) | A, X].
Again using Leibniz rule and the above equation,
d
dε Eε[Y 1{Y ≤Mε(A,X)} | A, X]|ε=0 = d
dε
Z Mε(A,X)
ypε(y | A, X)dy|ε=0
= M (A, X)p(y = M (A, X) | A, X) d
dε Mε(A, X)|ε=0 + E[Y 1{Y ≤M(A,X)}S(Y | A, X) | A, X]
= −M (A, X)E[1{Y ≤M(A,X)}S(Y | A, X) | A, X] + E[Y 1{Y ≤M(A,X)}S(Y | A, X) | A, X]
= E[(Y − M (A, X))1{Y ≤M(A,X)}S(Y | A, X) | A, X].
The second equality follows from a similar argument. By definition of M (A, X) as the conditional median of Y | A, X, and then taking derivatives using Leibniz rule,
1/2 =
Z
Mε (A,X )
pε(y | A, X)dy =⇒
0 = −p(y = M (A, X) | A, X) d
dε Mε(A, X)|ε=0 + E[1{Y >M(A,X)}S(Y | A, X) | A, X] =⇒
− p(y = M (A, X) | A, X) d
dε Mε(A, X)|ε=0 = −E[1{Y >M(A,X)}S(Y | A, X) | A, X].
25

Again using Leibniz rule and the above equation,
d
dε Eε[Y 1{Y >Mε(A,X)} | A, X]|ε=0 = d
dε
Z
Mε (A,X )
ypε(y | A, X)dy|ε=0
= −M (A, X)p(y = M (A, X) | A, X) d
dε Mε(A, X)|ε=0 + E[Y 1{Y >M(A,X)}S(Y | A, X) | A, X]
= −M (A, X)E[1{Y >M(A,X)}S(Y | A, X) | A, X] + E[Y 1{Y >M(A,X)}S(Y | A, X) | A, X]
= E[(Y − M (A, X))1{Y >M(A,X)}S(Y | A, X) | A, X].
Building off of the previous lemma, the following result derives the efficient influence functions of two quantities whose difference is exactly the functional introduced in Proposition 3. Proposition 3 is then an immediate corollary after taking the difference of the two efficient influence functions.
Lemma 6. The efficient influence functions of θ+ ≡ γE[Y 1{Y >M(A,X)}] and θ− ≡ γE[Y 1{Y ≤M(A,X)}] in the nonparametric model are
γ[(Y − M (A, X))1{Y >M(A,X)} + 1/2M (A, X)]and
γ[(Y − M (A, X))1{Y ≤M(A,X)} + 1/2M (A, X)],
respectively.
Proof. We start with θ−. The goal is to find a random variable φ− that is a function of the data such that d
dε θε−|ε=0 = E[φ−(Y, A, X)S(Y, A, X)], where S(y, a, x) = d
dε log(fε(y, a, x))|ε=0. We start by taking derivatives:
−d
dε θ−
ε |ε=0 = d
dε Eε[μ−
ε (A, X)]|ε=0
=d
dε
Z
μ−
ε (a, x)fε(a, x)dadx|ε=0
=d
dε
Z
μ−(a, x)fε(a, x)dadx|ε=0
| {z }
I
+d
dε
Z
μ−
ε (a, x)f (a, x)dadx|ε=0
| {z }
II
We deal with each of the terms separately. Term I: d
dε
Z
μ−(a, x)fε(a, x)dadx|ε=0 = E[μ−(A, X)S(A, X)]
= E[μ−(A, X)S(A, X)] + E[μ−(A, X)S(Y | A, X)]
= E[μ−(A, X)S(Y, A, X)],
The second equality holds because by a property of conditional scores, S(Y | A, X) is mean zero conditional on (A, X). Term II:
d
dε
Z
μ−
ε (a, x)f (a, x)dadx|ε=0 =
Zd
dε μ−
ε (a, x)|ε=0f (a, x)dadx
=
Z
E[(Y − M (a, x))1{Y ≤M(a,x)}S(Y | a, x) | a, x]f (a, x)dadx
= E[E[(Y − M (A, X))1{Y ≤M(A,X)}S(Y | A, X) | A, X]]
= E[(Y − M (A, X))1{Y ≤M(A,X)}S(Y | A, X)],
26

where the second equality follows from the above lemma. Next, observe that E[1/2M (A, X)S(Y | A, X)] = 0 and E[μ−(A, X)S(Y | A, X)] = 0 again because of the property that S(Y | A, X) is mean zero given (A, X). Thus,
E[(Y − M (A, X))1{Y ≤M(A,X)}S(Y | A, X)]
= E[[(Y − M (A, X))1{Y ≤M(A,X)} + 1/2M (A, X) − μ−(A, X)]S(Y | A, X)]
= E[[(Y − M (A, X))1{Y ≤M(A,X)} + 1/2M (A, X) − μ−(A, X)]S(Y | A, X)]
+ E[[(Y − M (A, X))1{Y ≤M(A,X)} + 1/2M (A, X) − μ−(A, X)]S(A, X)]
= E[[(Y − M (A, X))1{Y ≤M(A,X)} + 1/2M (A, X) − μ−(A, X)]S(Y, A, X)],
where the second to last equality holds because (Y − M (A, X))1{Y ≤M(A,X)} + 1/2M (A, X) − μ−(A, X) is mean zero given A, X. To see why, observe that E[Y 1{Y ≤M(A,X)} | A, X] = μ−(A, X) by definition, and E[M (A, X))1{Y ≤M(A,X)} | A, X] = 1/2M (A, X) by definition of the conditional median M (A, X). Putting Term I and Term II together, we get the uncentered EIF of θ− as
(Y − M (A, X))1{Y ≤M(A,X)} + 1/2M (A, X) − μ−(A, X) + μ−(A, X) =
(Y − M (A, X))1{Y ≤M(A,X)} + 1/2M (A, X).
The steps for θ+ are virtually identical to those for θ−, and thus the argument is omitted.
D.2 Binary outcome - smooth functional
For this proof, we introduce some additional notation. Let μ(a, x) = P (Y = 1 | a, x). In addition, compared to the previous section, the score function S(Y | A, X) changes slightly. Namely, since
Y is binary, we have that
S(y | a, x) = μ ̇ (a, x)(y − μ(a, x))
μ(a, x)(1 − μ(a, x)) , (21)
where μ ̇ (a, x) ≡ ∂
∂ε Pε(Y = 1 | a, x)|ε=0. We also introduce the following lemma:
Lemma 7. Let h be a differentiable, scalar-valued function. Then
d
dε h{Pε(Y = 1 | a, x)}|ε=0 = h′(μ(a, x))S(y | a, x)μ(a, x)(1 − μ(a, x))/(y − μ(a, x)).
Proof. By the chain rule and evaluating at ε = 0,
d
dε h{Pε(Y = 1 | a, x)}|ε=0 = h′(μ(a, x))μ ̇ (a, x).
Rearranging Equation (21) and substituting into the previous equation yields the result.
We can now prove Proposition 4.
Proof. Again, the goal is to find a function of the data φB such that dθεB
dε |ε=0 = E[φB(Y, A, X)S(Y, A, X)].
27

We start by taking derivatives:
dθεB
dε |ε=0 = d
dε Eε[h{Pε(Y = 1 | A, X)}]|ε=0
=d
dε
Z
h{Pε(Y = 1 | a, x)}hε(a, x)dadx|ε=0
=
Zd
dε {h{Pε(Y = 1 | a, x)}|ε=0f (a, x)dadx
| {z }
I
Z
h{P (Y = 1 | a, x)} d
dε fε(a, x)|ε=0dadx
| {z }
II
.
We will deal with the terms separately. For Term I:
Zd
dε {h{Pε(Y = 1 | a, x)}|ε=0f (y | a, x)f (a, x)dydadx
=
Z
h′(μ(a, x))S(y | a, x)μ(a, x)(1 − μ(a, x))/(y − μ(a, x))f (y | a, x)f (a, x)dydadx.
Now, we compute the conditional mean on (a, x) of
h′(μ(a, x))μ(a, x)(1 − μ(a, x))/(y − μ(a, x)).
Since y is binary with success probability μ(a, x), this quantity is
h′(μ(a, x))μ(a, x)2 − h′(μ(a, x))(1 − μ(a, x))2.
We continue where we left off,
Z
h′{μ(a, x)}S(y | a, x)μ(a, x)(1 − μ(a, x))/(y − μ(a, x))f (y | a, x)f (a, x)dydadx
= E[h′{μ(A, X)}S(Y | A, X)μ(A, X)(1 − μ(A, X))/(Y − μ(A, X))]
= E[h′{μ(A, X)}S(Y | A, X)μ(A, X)(1 − μ(A, X))/(Y − μ(A, X))]
− (E[{h′(μ(A, X))μ(A, X)2 − h′(μ(A, X))(1 − μ(A, X))2}{S(Y | A, X)}])
= E[h′(μ(A, X)){Y μ(A, X) − (1 − Y )(1 − μ(A, X)}S(Y | A, X)]
− (E[{h′(μ(A, X))μ(A, X)2 − h′(μ(A, X))(1 − μ(A, X))2}{S(Y | A, X)}])
= E[h′(μ(A, X)){Y μ(A, X) − (1 − Y )(1 − μ(A, X)}S(Y | A, X)]
− (E[{h′(μ(A, X))(2μ(A, X) − 1)}{S(Y | A, X)}])
= E[h′{μ(A, X)}{Y − μ(A, X)}S(Y | A, X)]
= E[h′{μ(A, X)}{Y − μ(A, X)}S(Y | A, X)]
− E[h′{μ(A, X)}{Y − μ(A, X)}S(A, X)]
= E[h′{μ(A, X)}{Y − μ(A, X)}S(Y, A, X)].
The second equality is by the fact that S(Y | A, X) is mean zero given (A, X). The third equality is due to the fact that for y binary, p(1 − p)/(y − p) = yp − (1 − y)(1 − p). The fourth equality is by p2 − (1 − p)2 = 2p − 1. The fifth is by algebraic simplification. The sixth is by Y − μ(A, X) being mean zero given (A, X).
28

For Term II:
Z
h{P (Y = 1 | a, x)} d
dε fε(a, x)|ε=0dadx
= E[h{P (Y = 1 | A, X)}S(A, X)]
= E[h{P (Y = 1 | A, X)}S(A, X)]
E[h{P (Y = 1 | A, X)}S(Y | A, X)]
= E[h{P (Y = 1 | A, X)}S(Y, A, X)].
The second equality is due to S(Y | A, X) being mean zero given (A, X). Summing the two terms, it follows that the uncentered efficient influence function must be
h(μ(A, X)) + h′{μ(A, X)}{Y − μ(A, X)}.
E Asymptotic normality
E.1 Helper lemmas
Lemma 8. Let A and B be random variables and suppose the conditional density f (a | b) is bounded above by C < ∞ for all a, b in the respective supports with no point masses. Then for functions h, g,
P (1{g(B)>A>h(B)}) ≲ ∥h − g∥ .
Proof. We can write
P (1{h(B)<A<g(B)}) = EB
"
Z g(B)
h(B)
f (a | B)da
#
≤ CEB |h(B) − g(B)|
≲ ∥h − g∥ .
The first inequality is by the bounded density and the second is by Cauchy-Schwarz.
Lemma 9. Let A and B be random variables and suppose the conditional density f (a | b) is bounded above by C < ∞ for all a, b in the respective supports with no point masses. Then for functions h, g, P (A > h(B)|B) − P (A > g(B)|B) ≲ ∥h − g∥ .
Proof. Observe that by definition,
P (A > h(B)|B) =
Z
h(B)
f (a | B)da,
P (A > g(B)|B) =
Z
g(B)
f (a | B)da.
Taking the difference yields
Z
h(B)
f (a | B)da −
Z
g(B)
f (a | B)da ≤ C|h(B) − g(B)|.
29

Taking the L2 norm on both sides of the above inequality yields
P (A > h(B)|B) − P (A > g(B)|B) ≲ ∥h − g∥ ,
as desired.
E.2 Continuous outcome
Proof of Theorem 3. We only demonstrate the steps for ψmax, as the steps for ψmin are nearly identical. We can decompose
ψbmax = Pnφmax(ηb)
= Pnφmax(ηb) ± Pnφmax(η) ± Pφmax(η) ± Pφmax(ηb)
= Pnφmax(η) + Pnφmax(ηb) − Pnφmax(η) − Pφmax(ηb) + Pφmax(η) + Pφmax(ηb) − Pφmax(η)
= Pnφmax(η) + (Pn − P)(φmax(ηb) − φmax(η)) + P(φmax(ηb) − φmax(η)).
By the central limit theorem, after the scaling by √n, the first term converges to a normal distribution with mean zero and variance matching that in the statement of the theorem. By Lemma 1 from Kennedy (2024), the second term is op(n−1/2) since we have assumed that the nuisance estimates ηb are consistent for the true nuisances η, sample/cross-fitting is employed, and ηb and η are uniformly bounded. This brings us to the final term, which is the bias. We can break this into two parts:
T1 ≡ P[μb′(A, X) − sb(A, X){Y − μb(A, X)} − μ′(A, X) + s(A, X){Y − μ(A, X)}],
T2 ≡ γ × P[(Y − Mc(A, X))(1{Y >Mc(A,X)} − 1{Y <Mc(A,X)})
− (Y − M (A, X))(1{Y >M(A,X)} − 1{Y <M(A,X)})].
We can rearrange T1 to be
T1 = P[μb′(A, X) − sb(A, X){Y − μb(A, X)} − μb′(A, X) + s(A, X){Y − μb(A, X)}]
+ P[μb′(A, X) − s(A, X){Y − μb(A, X)} − μ′(A, X) + s(A, X){Y − μ(A, X)}]
= P[(s(A, X) − sb(A, X)){Y − μb(A, X)}]
+ P[μb′(A, X) + s(A, X)μb(A, X) − μ′(A, X) − s(A, X)μ(A, X)]
= P[(s(A, X) − sb(A, X)){μ(A, X) − μb(A, X)}] + 0.
The last equality is by iterated expectation and integration by parts. Assuming sb and μb converge at least as fast as op(n−1/4), by the Cauchy-Schwarz inequality, we get that T1 = op(n−1/2). For T2, we can simplify it as
T2 = γ × P[(Y − Mc(A, X))(1{Y >Mc(A,X)} − 1{Y <Mc(A,X)})
− (Y − M (A, X))(1{Y >Mc(A,X)} − 1{Y <Mc(A,X)})]
+ γ × P[(Y − M (A, X))(1{Y >Mc(A,X)} − 1{Y <Mc(A,X)})
− (Y − M (A, X))(1{Y >M(A,X)} − 1{Y <M(A,X)})]
= γ × P[(M (A, X) − Mc(A, X))(1{Y >Mc(A,X)} − 1/2 + 1/2 − 1{Y <Mc(A,X)})]
+ γ × P[(Y − M (A, X))(1{Y >Mc(A,X)} − 1{Y <Mc(A,X)}) − (1{Y >M(A,X)} − 1{Y <M(A,X)})].
30

The T1 term, by iterated expectation, can be rewritten as
γ × P[(M (A, X) − Mc(A, X))(1{Y >Mc(A,X)} − 1/2 + 1/2 − 1{Y <Mc(A,X)})]
= γ × P[(M (A, X) − Mc(A, X))(P (Y > Mc(A, X) | A, X) − P (Y > M (A, X) | A, X))]
+ γ × P[(M (A, X) − Mc(A, X))(P (Y < M (A, X) | A, X) − P (Y < Mc(A, X) | A, X))].
This term will op(n−1/2) by the Cauchy-Schwarz inequality, the assumed rate M − Mc = op(n−1/4),
and the fact that the rate of convergence of P (Y > Mc(A, X) | A, X) − P (Y > M (A, X) | A, X))
and P (Y < Mc(A, X) | A, X) − P (Y < M (A, X) | A, X)) inherit the rate of convergence of M − Mc ,
by Lemma 9.
For the T2 term, note that for (1{Y >Mc(A,X)} − 1{Y <Mc(A,X)}) − (1{Y >M(A,X)} − 1{Y <M(A,X)})
to be non-zero, Y must be greater than Mc and less than M , or less than Mc and greater than M . The probability of such an event (call it E) converges to zero at the same rate as the convergence of
M − Mc , by Lemma 8. Moreover, on the event E, Y lies between M and Mc, so |Y − M (A, X)| ≤
|
Mc(A, X) − M (A, X)| on the event. Then an application of the law of total expectation implies that the T2 term can be expressed as
P[E[Y − M (A, X) | E] × P (E)] ≲ Mc − M
2
= op(n−1/2),
by the rate assumptions. In summary, the entire bias term is second order in the estimation error
M − Mc , and consequently is op(n−1/2). Thus, the central limit theorem holds as stated.
E.3 Binary outcome - smoothed functional
Proof of Theorem 4. As in the proof of Theorem 3, we only demonstrate the steps for ψB
max,h, as
the steps for ψB
min,h are nearly identical. Similar to the continuous outcome case, we can decompose our estimator as follows:
ψbB
max,h = PnφB
max,h(ηb)
= PnφB
max,h(η) + (Pn − P)(φB
max,h(ηb) − φB
max,h(η)) + P(φB
max,h(ηb) − φB
max,h(η)).
By the central limit theorem, after the scaling by √n, the first term converges to a normal distribution with mean zero and variance matching that in the statement of the theorem. By Lemma 1 from Kennedy (2024), the second term is op(n−1/2) since we have assumed that the nuisance estimates ηb are consistent for the true nuisances η, sample/cross-fitting is employed, and ηb and η are uniformly bounded. This brings us to the final term, which is the bias. We can break this into two parts:
T1 ≡ P[μb′(A, X) − sb(A, X){Y − μb(A, X)} − μ′(A, X) + s(A, X){Y − μ(A, X)}]
T2 ≡ γ × P[h(μb(A, X)) + h′(μb(A, X))(Y − μb(A, X))]
− γ × P[h(μ(A, X)) + h′(μ(A, X))(Y − μ(A, X))]
= γ × P[h(μb(A, X)) + h′(μb(A, X))(Y − μb(A, X))]
− γ × P[h(μ(A, X))].
31

The last equality is because h′(μ(A, X))(Y − μ(A, X)) is mean zero by iterated expectation. The decomposition of T1 was already done in the proof of Theorem 3, and is op(n−1/2) under our assumptions. For T2, we drop the constant term γ, as it does not affect the analysis and simplifies exposition. Next, observe that a simple Taylor expansion of the function h(p) around the point pb is as follows:
h(p) = h(pb) + h′(pb)(p − pb) + O({p − pb}2).
Applying the Taylor expansion taking μ to be the p,
1/γT2 = P[h(μb(A, X)) + h′(μb(A, X))(Y − μb(A, X))]
− P[h(μ(A, X))]
= P[h(μb(A, X)) + h′(μb(A, X))(Y − μb(A, X))]
− P[h(μb(A, X)) + h′(μb(A, X))(μ(A, X) − μb(A, X))
+ O({μ(A, X) − μb(A, X)})2]
= P[h′(μb(A, X))(Y − μ(A, X))] + O({μ(A, X) − μb(A, X)})2]
= P[O({μ(A, X) − μb(A, X)})2]
≲ ∥μ − μb∥2 .
The second to last equality is because h′(μb(A, X))(Y − μ(A, X)) is mean zero by iterated expectation. The last inequality is due to μb and μ being uniformly bounded. ∥μ − μb∥2 is op(n−1/2) by assumption, so T2 is as well.
F Weighted average derivative effects
We can also adapt the results to the case where the estimand of interest is a weighted average of the derivative effects. Specifically, consider a known weight function w(a, x), where w(a, x) ≥ 0 almost surely, and E[w(A, X)] = 1. Suppose the estimand of interest is E[w(A, X)∂aE[Y (A) | X, U ]]. This quantity will be identified similarly to its unweighted counterpart, under some additional regularity conditions.
Assumption 7 (Regularity - weights). The derivative of w(a, x) with respect to a exists, and f (a | x, u) = 0 implies w(a, x) = 0.
As Hines et al. (2023) discuss, under Assumption 4, and 7, Powell et al. (1989) showed that
E[w(A, X)∂aE[Y | A, X, U ]] = E[{−w′(A, X) − w(A, X)s(A | X, U )}Y ].
Note that the first component, E[−w′(A, X)Y ], is completely identified and is easily estimable when w(a, x) is known. The second component, is simply E[w(A, X)×−s(A | X)Y ]. Since w is known and is nonnegative, the optimization problems defined in (6) for both continuous and binary outcomes would have the same optimal solutions for maximizing and minimizing E[w(A, X) × −s(A | X)Y ], since the optimization problems were solved separately within each (A = a, X = x) strata. The closed-form bounds wo-
uld be essentially the same, modulo an additional w(A, X) term inside the expectations. Explicitly, these would be
ψmax = E[−w(A, X)s(A | X)Y ] + γE[w(A, X)Y (1{Y >M(A,X)} − 1{Y <M(A,X)})],
ψmin = E[−w(A, X)s(A | X)Y ] − γE[w(A, X)Y (1{Y >M(A,X)} − 1{Y <M(A,X)})],
32

for a continuous outcome and
ψB
max,w = E[−w(A, X)s(A | X)Y ] + γE[w(A, X){1/2 − |P (Y = 1 | A, X) − 1/2|}],
ψB
min,w = E[−w(A, X)s(A | X)Y ] − γE[w(A, X){1/2 − |P (Y = 1 | A, X) − 1/2|}],
for a binary outcome. Estimation and inference would follow from the same strategy as presented for the unweighted case. The case where the weights are unknown is an interesting direction for future research.
G Examining the relationship between model 2 and Rosenbaum’s
semiparametric model
An analogous model for the continuous treatment of Rosenbaum’s sensitivity model for binary treatments would look as follows:
Assumption 8 (γ sensitivity model).
exp(−γ(|a − a′|)) ≤ f (a′ | x, u)f (a | x, u′)
f (a | x, u)f (a′ | x, u′) ≤ exp(γ(|a − a′|)) ∀x, a, a′, u, u′. (22)
The model restricts the odds ratio of the generalized propensity scores at any two dose levels and any two values of the unmeasured confounder. This model directly generalizes Rosenbaum’s sensitivity model for binary treatments, i.e. when a and a′ are replaced by 0 and 1 (Rosenbaum, 2002). The key difference between models (2) and (22) is that the latter model compares quantities conditioning on any two different values of the unmeasured confounder, u and u′, whereas the former compares a quantity-
 conditioning on any u with an analogous quantity but with u marginalized out. We now demonstrate that the semiparametric model introduced in (Rosenbaum, 1989) implies model (22).
Example 5 (Rosenbaum model for continuous doses). Suppose that
f (a | u, x) = ζ(x, u)η(a, x) exp(γau),
where η(a, x) is an arbitrary function, and ζ(x, u) is a normalizing constant that ensures f (a | u, x) integrates to 1.
We will now show that if u ∈ [0, 1], then sensitivity model (22) holds at γ. To see this, directly plugging into Equation (22), we get
f (a′ | x, u)f (a | x, u′)
f (a | x, u)f (a′ | x, u′) = ζ(x, u)η(a′, x) exp(γau)ζ(x, u′)η(a, x) exp(γau′)
ζ(x, u)η(a, x) exp(γau)ζ(x, u′)η(a′, x) exp(γau′)
= exp(γa′u) exp(γau′)
exp(γau) exp(γa′u′)
= exp(γ(a′ − a)(u − u′))
∈ [exp(−γ(|a − a′|)), exp(γ(|a − a′|))].
The model from Example 5 covers a range of familiar settings. For example, the situation where A | X, U ∼ N (g(X) + γU, σ2), where g is an arbitrary function, falls within the model. Another is when A | X, U ∼ Gamma(a, g(X) − γU ), for a fixed constant a and an arbitrary function g. There
33

are many other exponential family models for which Example 5 applies. It is also compatible with binary and ordinal treatments. The next result elucidates a connection between models (22) and (2); a similar result for the binary case was derived in Zhao et al. (2019). The following lemma is a slight generalization of Proposition 3 of Zhao et al. (2019).
Lemma 10. If model (2) holds at γ/2, then model (22) holds at γ. Also, if model (22) holds at γ, then model (2) holds at γ.
Proof of Lemma 10. Fix any u, u′, x, and a, a′ and suppose model (2) holds at γ/2. Then taking logs, we get
−γ/2(|a − a′|) ≤ log(f (a′ | x, u)) + log(f (a | x)) − log(f (a | x, u)) − log(f (a′ | x)) ≤ γ/2(|a − a′|),
and
−γ/2(|a − a′|) ≤ − log(f (a′ | x, u′)) − log(f (a | x)) + log(f (a | x, u′)) + log(f (a′ | x)) ≤ γ/2(|a − a′|).
Adding these inequality chains, we get
−γ(|a − a′|) ≤ log(f (a′ | x, u)) + log(f (a | x, u′)) − log(f (a | x, u)) − log(f (a′ | x, u′)) ≤ γ(|a − a′|).
After taking exponents, we get that model (22) holds at γ. For the second implication, suppose that model (22) holds at γ. Then
exp(−γ(|a − a′|))f (a′ | x, u′) ≤ f (a′ | x, u)/f (a | x, u) ≤ exp(γ(|a − a′|))f (a | x, u′).
We can simply integrate the chain of inequalities with respect to f (u′ | x) over the support of U , to get
exp(−γ(|a − a′|))f (a′ | x) ≤ f (a′ | x, u)/f (a | x, u) ≤ exp(γ(|a − a′|))f (a | x),
which is equivalent to model (2).
The second half of the result demonstrates that assuming (22) holds at γ is stronger than assuming (2) holds at γ. Meanwhile, the first half of the result implies that the interpretation of the γ’s from the differing models does not exceed a factor of 2. We refer the reader to Dalal and Tchetgen (2025) for more detailed comparisons between the Tan (marginal) and Rosenbaum sensitivity models.
H Alternative transforms in the sensitivity model
Recall that in model (2), the odds ratio f(a′|x,u)f(a|x)
f(a|x,u)f(a′|x) is bounded between exp(−γ(|a − a′|)) and
exp(γ(|a − a′|)). One might instead consider a model that uses a function other than exponential.
Assumption 9 (g marginal sensitivity model).
g(−γ(|a − a′|)) ≤ f (a′ | x, u)f (a | x)
f (a | x, u)f (a′ | x) ≤ g(γ(|a − a′|)), (23)
for some smooth, nonnegative, strictly increasing function g such that g(0) = 1.
34

Under such a model, we can follow the logic of Lemma 2 to derive a restriction on the latent score s(a | x, u). In contrast to Lemma 2, the restriction is not symmetric on the additive scale.
Lemma 11. Under sensitivity model (23),
s(a | x) + hli→m0
log(g(−γh))
h ≤ s(a | x, u) ≤ s(a | x) + hli→m0
log(g(γh))
h , ∀a, x, u. (24)
Proof. We can apply logs to (23) to get
log(g(−γ|a−a′|)) ≤ log(f (a | x))−log(f (a′ | x))−{log(f (a | x, u))−log(f (a′ | x, u))} ≤ log(g(γ|a−a′|)).
Next, recall that s(a | x, u) = ∂a log(f (a | x, u)) = limh→0
log(f (a+h|x,u))−log(f (a|x,u))
h . By the above
equation, plugging in a for a and a + h for a′, adding the log(f (a + h | x)) − log(f (a | x)) term everywhere in the inequality and dividing by h, we get
log(f (a + h | x)) − log(f (a | x)) + log(g(−γh))
h ≤ log(f (a + h | x, u)) − log(f (a | x, u))
h
≤ log(f (a + h | x)) − log(f (a | x)) + log(g(γh))
h,
which immediately implies the result after taking the limit h → 0 everywhere.
One could then solve the optimization problem (6), except replacing constraint s(a | x) − γ ≤
s(a | x, u) ≤ s(a | x) + γ with s(a | x) + limh→0
log(g(−γh))
h ≤ s(a | x, u) ≤ s(a | x) + limh→0
log(g(γh))
h. Due to the asymmetry, for the continuous outcome case, one would expect the solution to depend on a quantile rather than the median.
35

---

## Processing Information

- **Processing Library:** Zotero PDFWorker
- **Processing Date:** 2026-02-10T18:13:41.544Z
- **Text Length:** 92751 characters
- **Success:** Text extraction completed
- **PDF Library Used:** Zotero PDFWorker
- **Pages Processed:** 35 of 35
