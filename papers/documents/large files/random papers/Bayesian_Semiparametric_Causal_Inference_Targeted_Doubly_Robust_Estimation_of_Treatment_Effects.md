# PDF Document: Sert et al. - 2025 - Bayesian Semiparametric Causal Inference Targeted Doubly Robust Estimation of Treatment Effects.pdf

**File Path:** Sert et al. - 2025 - Bayesian Semiparametric Causal Inference Targeted Doubly Robust Estimation of Treatment Effects.pdf

**Processed Date:** 2026-02-10T18:17:27.367Z

**File Size:** 2624.11 KB

**Total Pages:** 48

**Extracted Pages:** 48

**PDF Library:** Zotero PDFWorker

**Attachment Item ID:** 3246

**Title:** Bayesian Semiparametric Causal Inference: Targeted Doubly Robust Estimation of Treatment Effects

**Collection:** Large Files > Random Papers

---

## Extracted Text Content

Bayesian semiparametric causal inference: Targeted doubly robust
estimation of treatment effects
Go ̈zde Sert1, Abhishek Chakrabortty1, Anirban Bhattacharya1,*
1Department of Statistics, Texas A&M University
Abstract
We propose a semiparametric Bayesian methodology for estimating the average treatment effect (ATE) within the potential outcomes framework using observational data with highdimensional nuisance parameters. Our method introduces a Bayesian debiasing procedure that corrects for bias arising from nuisance estimation and employs a targeted modeling strategy based on summary statistics rather than the full data. These summary statistics are identified in a debiased manner, enabling the estimation of nu-
isance bias via weighted observables and facilitating hierarchical learning of the ATE. By combining debiasing with sample splitting, our approach separates nuisance estimation from inference on the target parameter, reducing sensitivity to nuisance model specification. We establish that, under mild conditions, the marginal posterior for the ATE satisfies a Bernstein-von Mises theorem when both nuisance models are correctly specified and remains consistent and robust when only one is correct, achi-
eving Bayesian double robustness. This ensures asymptotic efficiency and frequentist validity. Extensive simulations confirm the theoretical results, demonstrating accurate point estimation and credible intervals with nominal coverage, even in high-dimensional settings. The proposed framework can also be extended to other causal estimands, and its key principles offer a general foundation for advancing Bayesian semiparametric inference more broadly.
Keywords:Average treatment effect, Bayesian debiasing, hierarchical learning, high-dimensional nuisance, semiparametric Bayesian inference, summary statistics modeling.
1 Introduction
Inferring the causal effect of a treatment or exposure is central to many scientific disciplines. While randomized controlled trials are the gold standard for causal estimation, they are often infeasible due to ethical, logistical, or financial constraints. A common alternative is to use observational data, which is typically easier to obtain, but also requires careful methodology to handle potential confounding and high dimensionality issues, while ensuring robust (unbiased) estimation of causal -
estimands. Among these, the average treatment effect (ATE) is a key popular estimand, measuring the treatment’s overall causal impact, and is widely adopted in various scientific disciplines.
∗Corresponding author. Email addresses: gozdesert@stat.tamu.edu (G ̈ozde Sert), abhishek@stat.tamu.edu (Abhishek Chakrabortty), anirbanb@stat.tamu.edu (Anirban Bhattacharya).
1
arXiv:2511.15904v1 [stat.ME] 19 Nov 2025

Estimation of the ATE is naturally linked to semiparametric inference, as its identification involves infinite-dimensional nuisance parameters (Bang and Robins, 2005). Most existing approaches are frequentist, such as propensity score adjustment or matching (Rosenbaum and Rubin, 1983, 1984), and doubly robust (DR) estimators (Robins et al., 1994; Robins and Rotnitzky, 1995). Recently, Bayesian semiparametric methods for ATE estimation have gained attention (Ray and Szab ́o, 2019; Ray and van der -
Vaart, 2020; Hahn et al., 2020; Antonelli et al., 2022; Linero and Antonelli, 2023; Luo et al., 2023; Breunig et al., 2025). Traditional Bayesian methods marginalize out nuisance parameters to obtain a posterior of the target parameter and can achieve desirable contraction rates (Ghosal and Van der Vaart, 2017). However, strong regularization often induces nuisance estimation bias (Bickel and Kleijn, 2012; Rivoirard and Rousseau, 2012; Castillo and Rousseau, 2015) that jeopardizes the validity of -
Bayesian inference for low-dimensional targets, such as the ATE. Several strategies have been proposed to mitigate this bias. One line of research modifies or tailors priors to incorporate the propensity score and better align the prior with the semiparametric model structure (Ray and Szab ́o, 2019; Ray and van der Vaart, 2020). Another applies posterior corrections or influence function (Hahn, 1998) (IF)-based updates (Breunig et al., 2025; Yiu et al., 2025). A related method by Antonelli et al. -
(2022) constructs a posterior for the ATE by plugging nuisance posterior samples into the IF, followed by an additional variance correction for valid inference.
Building on recent advances, we propose the doubly robust debiased Bayesian (DRDB) procedure, which provides a principled and scalable solution to nuisance bias in high-dimensional or complex settings. DRDB departs from existing Bayesian methods in two key ways. First, it adopts a targeted modeling strategy that focuses on summary statistics informative about the ATE, rather than the full data distribution. Second, it introduces a Bayesian debiasing mechanism that learns nuisance bias directly fro-
m data, eliminating the need for prior modification or post hoc correction (Ray and van der Vaart, 2020; Breunig et al., 2025; Yiu et al., 2025). By decoupling inference for the ATE from nuisance estimation, DRDB ensures robustness of the marginal posterior and serves as a Bayesian analogue of the frequentist double machine learning framework (Chernozhukov et al., 2018), maintaining validity even under high-dimensional and/or misspecified models. A prominent usage of summary statistics in Bayesian-
 inference appears in the approximate Bayesian computation (ABC) literature to mitigate issues with a low acceptance rate (Drovandi et al., 2015). DRDB instead leverages them in a targeted manner to separate the ATE from nuisance bias. Its key component is a retargeting step that models the nuisance bias using weighted observables (an idea akin to importance sampling) which naturally incorporates the propensity score (PS) into the Bayesian framework. Although the PS plays a central role in the fre-
quentist literature on DR estimation (Robins et al., 1994; Robins and Rotnitzky, 1995; Bang and Robins, 2005), it has lacked a principled Bayesian counterpart (Li et al., 2023, Section 5). DRDB fills this gap by integrating the PS seamlessly through its debiasing mechanism. Related work by Sert et al. (2025) develops Bayesian inference via summary statistics for semi-supervised learning, which motivates the construction of DRDB. However, DRDB differs in two key respects: (i) DRDB uses a hierarchic-
al model to learn the ATE directly, without relying on independence between data subsets, and (ii) it introduces a retargeting mechanism to identify and estimate nuisance bias appropriately. Building on this bias estimation, DRDB integrates the bias into a hierarchical Bayesian framework: The posterior for the bias informs a conditional likelihood for the ATE, whose integration yields a valid marginal posterior for the ATE (see Equation (11)). Another salient feature of DRDB is its
2

use of sample-splitting and cross-fitting (CF) (Chernozhukov et al., 2018). Beyond their traditional role in technical aspects, DRDB uses them as critical methodological tools to validate the debiasing step and decouple nuisance estimation from target inference. DRDB employs randomized splitting to obtain multiple subposteriors and aggregates them using a consensus Monte Carlo–type scheme (Scott et al., 2022), producing a posterior that efficiently utilizes the entire data (see Section 3.2). DRDB-
 establishes a semiparametric Bernstein-von Mises (BvM) result for the marginal posterior of the ATE (Theorems 1 and 2): When both nuisance models are well-specified and their posteriors contract at rates whose product is o(n−1/2), the posterior concentrates around the true ATE at the parametric rate and is asymptotically Gaussian. In this case, the posterior mean is an asymptotically
efficient estimator of the true ATE, converging at a √n-rate with asymptotic variance that achieves the semiparametric efficiency bound (Hahn, 1998). Notably, the DRDB posterior depends on the nuisance posteriors only through their asymptotic limits, underscoring its robustness to nuisance modeling. Moreover, DRDB satisfies Bayesian double robustness: when only one nuisance model is well-specified (consistently estimated, while the other may be misspecified or slowly estimated), the posterior rema-
ins consistent for the ATE, contracting at the rate of the well-specified nuisance, extending the frequentist DR principle (Bang and Robins, 2005) to Bayesian inference (posteriors). Finally, the key principles of DRDB (its debiasing mechanism, targeted modeling, and hierarchical learning strategy) extend naturally beyond the ATE, providing valid Bayesian inference for a broad class of causal estimands, including the average treatment effect on the treated (ATT), that on the control (ATC), and sub-
group-specific effects. For clarity and brevity, the detailed extension of DRDB to these general estimands is presented in Section S1 of the Supplementary Material. The rest of this paper is organized as follows. Section 2 introduces the basic setup and preliminaries. Section 3 develops our proposed DRDB methodology, first for one counterfactual mean (Section 3.1), then for the ATE (Section 3.2). Section 4 presents the technical details of the DRDB posterior, and the main theoretical results, incl-
uding BvM results and Bayesian double robustness. Section 5 reports finite-sample performance via simulations and data analysis. Section 6 provides a concluding discussion. Extensions of our methodology, additional simulation results, and proofs and technical details are deferred to the Supplementary Material (Sections S1-S5).
2 Setup and preliminary causal assumptions
2.1 Data and notation
Let T ∈ {0, 1} denote a binary treatment indicator; Y ∈ R denote the observed outcome, defined as: Y = T Y (1) + (1 − T )Y (0), where {Y (1), Y (0)} are the potential outcomes (Rubin, 1974; Imbens and Rubin, 2015) under treatment (T = 1) and control (T = 0), respectively (i.e., Y (t) is the outcome that would have been observed if T = t, possibly contrary to fact); and X ∈ Rp denote the vector of covariates (or potential confounders). The observed data D consists of independent and identically dis-
tributed (i.i.d) observations Z1, . . . , Zn of the random variable Z := (Y, X, T ) with support Y × X × {0, 1} and underlying joint probability distribution (p.d.) PZ. Also, the setting is throughout allowed to be (possibly) high dimensional (i.e., p is allowed to grow with n). Let U be a random object with an underlying p.d. PU , and f be a measurable R-valued function of U . The expectation of f (U ) is defined as EU {f (U )} := R f (u)dPU (u), whenever it exists. For any d ≥ 1, Ld(PU ) denotes-
 the space of all R-valued measurable functions of U equipped with the norm ∥f ∥Ld(PU ) := [EU {f (U )d}]1/d. We adopt the following Bayesian notation throughout: for a
3

generic random object θ, Πθ denotes its posterior, θ a posterior sample, and θ† its true value.
2.2 Identification
The parameter of interest is the average treatment effect (ATE), defined as: ∆† := μ†(1) − μ†(0), with μ†(t) := EZ{Y (t)} for t ∈ {0, 1}, where the expectation is taken under the true p.d. PZ of Z := {Y (1), Y (0), X, T }. Since {Y (1), Y (0)} cannot be jointly observed in the data, we impose standard causal assumptions to identify ∆† from the available data D (Rosenbaum and Rubin, 1984).
Assumption 1 (Causal assumptions). (i) (Ignorability) T ⊥⊥ {Y (1), Y (0)}|X. (ii) (Positivity) Let e†(X) := P(T = 1|X) be the propensity score. Then, l ≤ e(X) ≤ 1 − l, for some constant l > 0.
Assumption 1(a), known as no unmeasured confounding (NUC), posits that the set of observed covariates captures all confounding factors affecting both treatment assignment and the potential outcomes. Assumption 1(b) imposes an overlap condition, ensuring that X in the treatment groups (i.e., X | T = t) share sufficient common support for valid comparisons (Imbens and Rubin, 2015).
Regression-based identification. Define m†
t (X) ≡ m†(X, t) := E(Y (t) | X) as the regression function for treatment t ∈ {0, 1}. Under Assumption 1 (ignorability), it can be equivalently written as: m†
t (X) = E(Y | X, T = t). The ATE is then identified using the law of iterated expectations:
∆† ≡ ∆†(−→m†, PX) = ∆†(m†
1, m†
0, PX) := EX{m†
1(X) − m†
0(X)}, (1)
where we note that each m†
t (·) is estimable via a regression in the observable data on: (Y, X)|T = t.
Hence, the ATE ∆† is a functional of both PX and the nuisance functions −→m† ≡ −→m†(·), with
−→m† := (m†
1, m†
0), and this identification serves as a foundation for our approach to estimating ∆†.
3 Methodology
Motivated by (1), we propose a doubly robust debiased Bayesian (DRDB) procedure for estimating the ATE. To clarify the main steps of DRDB, we first present the methodology for a single-arm: μ†
1 ≡ μ†(1) = E[Y (1)], and thereafter, extend it to the ATE in Section 3.2. Importantly, estimating
μ†
1 is an interesting and non-trivial problem in its own right, as it corresponds to the mean of an outcome that is missing at random (MAR) within the missing data framework (Tsiatis, 2007). Let K ≥ 2 be a fixed integer. We randomly split D into K disjoint subsets {Dk}kK=1, each of equal size nK := n/K, assuming without loss of generality that n is divisible by K. The corresponding index sets are denoted by {Ik}kK=1. For each k ∈ {1, . . . , K}, define D
k := D \ Dk, which has size
n
K := n − nK and index set I
k . Let (S, S–) := (Dk, D
k) denote a generic pair of test and training
datasets with corresponding index sets (I, I–) for some k ∈ {1, . . . , K}. For t ∈ 0, 1, let (St, St–)
denote the subgroups of (S, S–) corresponding to treatment level T = t, so S1 and S1– represent the
respective treated subgroups, and S0 and S0– represent the control subgroups. By construction, S
and S– are independent (S ⊥⊥ S–), which is both crucial and necessary for the DRDB approach.
4

Motivating the DRDB procedure. An intuitive approach to estimating μ†
1, motivated by (1), is to use a regression-based Bayesian (BREG) procedure: Suppose the unknown nuisance function m†
1(·) is learned from S– via any suitable Bayesian regression method–parametric (like Bayesian ridge regression via Gaussian priors, or high dimensional sparse Bayesian linear regression using spike-and-slab type priors (Johnson and Rossell, 2012)) or nonparametric (such as Gaussian process regression (Williams, 1998) or Bayesian additive regression trees (BART) (Chipman et al., 2010))yielding a posterior Πm1 for m1. For a sample m1 ∼ Πm1, one can treat {m1(Xi)}i∈I as derived
i.i.d. samples in S, targeting μ†
1 through their mean. A standard Bayesian analysis, specifying a likelihood for this data and a prior on model parameters, then yields a posterior Πreg for μ1. Despite its intuitive appeal, BREG is highly sensitive to the quality of nuisance estimation: A misspecified nuisance model leads to an inconsistent posterior Πreg for μ1. Even with a correctly specified nuisance model, the posterior’s first-order properties, such as its rate and shape, are strongly determined by the nuisance estimation bia-
s: EX{m1(X) − m†
1(X)|m1}. This makes the posterior overly dependent on the behavior of Πm1 and the choice of regression method, which in turn requires restrictive conditions to control the bias (e.g., in high dimensions) for achieving BvM-type results. These limitations motivate the key principles of our DRDB approach, which systematically eliminates this nuisance estimation bias within a Bayesian likelihood framework.
3.1 Doubly robust debiased Bayesian (DRDB) procedure for μ†(1)
DRDB is fundamentally a two-step approach. First, a Bayesian debiasing step learns and corrects for nuisance estimation bias within a Bayesian framework via a retargeting method. Second, a hierarchical learning framework learns the parameter of interest, μ†
1 ≡ μ†(1), after this bias has been addressed. We detail the steps in subsequent sections. Adopting the notation from Section 3, let (S, S–) be a pair of test and training datasets. Assume the nuisance posterior Πm1 ≡ Πm1(·; S–) for m1 is obtained from S– as before.
Debiasing step. Let m1 ∼ Πm1 ≡ Πm1(·; S–) be one sample independent (by design) of S. Using
the regression-based representation of μ†
1 in given (1), we obtain the debiased identification of μ†
1:
μ†
1 = EX∈S {m†
1(X) − m1(X)|m1} + EX∈S{m1(X)|m1}
=: b†(m1) + EX∈S{m1(X)|m1}.
(2)
The term b†(m1) captures the nuisance estimation bias from replacing the true m†
1 with a random sample m1. This bias is the primary source of the limitations of BREG and serves as the central target of our Bayesian debiasing strategy. Its analysis and the validity of the debiased decomposition in (2) crucially rely on the independence condition that ensures the distribution of X ∈ S in m1(X) is
unaffected by that of m1 ∼ Πm1(·; S–) since S– ⊥⊥ S. To further analyze b†(m1), we write it as:
b†(m1) = EX∈S[E{Y (1) − m1(X) | X, T = 1} | m1]. (3)
This formulation implies that if Y (1) and X were observed for all units in S, one could directly estimate b†(m1) from S. However, both {Y (1), X} are only observed in the treated subgroup: S1. Moreover, given m1 ∼ Πm1, the observables {Y − m1(X)} ∈ S1 target E(Y,X)|T =1{Y − m1(X)},
rather than the desired bias b†(m1). To correct this discrepancy, a retargeting step is required in which the (derived) observations {Y − m1(X)} ∈ S1 are reweighted using a density ratio function.
5

This adjustment ensures that the distribution of the weighted observations aligns with that of (Y, X) in the whole population, rather than the conditional distribution given T = 1.
Retargeting bias via weighting. Let r†
1(X) := f (X)/f1(X|T = 1) be the density ratio function, where f (·) is the density function (pdf) of X and f1(·) is the conditional pdf given T = 1. Given m1 ∼ Πm1, we define the weighted observations r†
1(X){Y − m1(X)} in S1 and observe that:
E(Y,X)|T =1[r†
1(X){Y − m1(X)} | T = 1] = EX[E{Y − m1(X) | X, T = 1}]
= b†(m1) ≡ b†(m1, r†
1).
(4)
This derivation shows that unbiasedly estimating the bias requires using the weighted observables r†
1(X){Y − m1(X)} in S1. It also clarifies that the bias b†(m1) ≡ b†(m1, r†
1) should be viewed as a
functional of two nuisances: m1 and r†
1 ≡ r†
1(·). To learn b†(m1, r†
1) from S1, we must first estimate
r†
1 by deriving a posterior from S–. This leads to the final analysis of the bias b†(m1, r†
1).
Let r1 be one sample from the posterior Πr1 ≡ Πr1(·; S–) of r1 ≡ r1(·), which we derive from a Bayesian binary regression method (e.g., Bayesian logistic regression or BART (Chipman et al., 2010)), as detailed in Remark 4. Since r1 is independent of S, substituting it into (4) yields:
b†(m1, r†
1) = b†(m1, r1) + EX[{r†
1(X) − r1(X)}{m†
1(X) − m1(X)}|m1, r1]. (5)
(5) provides a full characterization of the bias. The second term in (5): Γ†(m1, r1) := E[{r†
1(X) −
r1(X)}{m†
1(X) − m1(X)}|m1, r1] is a second-order ‘bias of bias’ (or ‘drift’) term, arising from the
product of the estimation errors for r†
1 and m†
1. We subsequently focus on modeling and correcting
the more tractable, first-order, bias b†(m1, r1). The second-order term Γ†(m1, r1), while accounted for in the theoretical analysis of our eventual posterior, is not the primary debiasing target.
Targeted modeling strategy for bias. Given m1 ∼ Πm1 and r1 ∼ Πr1, the bias b†(m1, r1) = ES1[r1(X){Y − m1(X)}|m1, r1] can be viewed as a functional of the underlying distribution of S1, specifically, relying on the summary statistic of the weighted observables r1(X){Y − m1(X)} ∈ S1. We can then construct a working likelihood based on these i.i.d. observables in S1 and place a prior on the model parameters, yielding a posterior Πb1 for b1 ≡ b(m1, r1), as detailed in Proposition 1. A defining feature-
 of the DRDB procedure, beyond its debiasing mechanism, is the targeted use of data. While traditional methods model the entire data (Ray and Szabo ́, 2019; Ray and van der Vaart, 2020; Breunig et al., 2025), DRDB exclusively targets the parameters directly informative for μ†
1. This targeted modeling strategy, combined with debiasing, forms the core of our DRDB approach, distinguishing it from existing Bayesian methodologies. Building on these, we next introduce the hierarchical learning framework, which facilitates a construction of a valid marginal posterior for μ†
1, by leveraging in a novel way the conventional integral representation of the marginal posterior.
Remark 1 (Key methodological role of the data splitting). A core characteristic of DRDB is its strict separation of nuisance estimation from target inference using independent data sources (S ⊥⊥ S–). This independence is methodologically crucial, validating our debiased representation, and equally importantly, validating the construction of the respective likelihoods, enabling our targeted modeling for the bias. This is distinct from earlier approaches that used independent auxiliary data mainly t-
o address theoretical challenges, and incorporate the propensity score (Ray and Szabo ́, 2019; Ray and van der Vaart, 2020; Breunig et al., 2025). In our framework, independence is not a mere technical tactic, but the central mechanism driving the DRDB procedure.
6

Hierarchical learning strategy. If one had access to a joint posterior for {μ1, b(m1)}, which would be the case in a traditional Bayesian framework, the marginal posterior for μ1 would be obtained by integrating out b(m1): [μ1|S] = R [μ1|b(m1), S] [b(m1)|S1] db(m1). We instead take a fundamentally different perspective, using the right-hand side of this representation itself as the defining principle for constructing a posterior for μ1. In this formulation, [μ1|b(m1), S] and [b(m1)|S] are individ-
ual building blocks which we aim to learn separately under our targeted modeling strategy, and mixing (integrating) over the uncertainty in b(m1) defines an idealized marginal posterior for μ1. Since the actual bias b(m1) involves the intractable second-order term in (5), we achieve a key simplification by replacing the mixing variable b(m1) with its first-order proxy b1 ≡ b(m1, r1). Thus, we replace [b(m1)|S] with the posterior Πb1 for b1 alluded to earlier, and construct a conditional posterior -
Πμ1|b1 for μ1|b1; see discussion after Remark 2. These switches allow us to mix over the proxy variable b1, and define a valid probability measure
[μ1 | S] :=
Z
[μ1 | b1, S] [b1 | S] db1 =
Z
[μ1 | b1, S] [b1 | S1] db1, (6)
which serves as our constructive definition of a posterior for μ1. Here, Πb1(·; S) coincides with Πb1(·; S1), as it is derived solely from S1 under the targeted modeling strategy (see Proposition 1). This formulation is not only a practical construction of a marginal posterior but also represents a conceptually distinct perspective, motivated directly by the structure of the Bayesian integral, offering a new way to define posteriors when a full joint model is unavailable.
Remark 2 (Hierarchical novelties). A key methodological contribution of DRDB is its novel use of the Bayesian hierarchical framework. Unlike standard methods that derive a marginal posterior from a joint posterior, DRDB builds it through a hierarchically specified conditional likelihood, enabling a targeted modeling strategy that efficiently uses data while maintaining valid Bayesian inference. Although this hierarchical specification bears resemblance to semi-implicit variational inference (SIVI)-
 (Yin and Zhou, 2018), the goal is fundamentally different. SIVI employs a hierarchy to improve posterior approximation, DRDB, in contrast, leverages it for exact Bayesian inference. This redefines the role of the Bayesian hierarchy, transforming it from a conventional modeling tool into a principled mechanism for achieving targeted and debiased inference.
To implement this hierarchical construction, it suffices to specify Πμ1|b1. We formulate a conditional likelihood on S, which allows us to exploit the debiased representation in (2) and adhere to our target-specific strategy. Specifically, we take a sample b1 ∼ Πb1 and model μ†
1 − b1 conditional
on b1, using S. Given b1 ∼ Πb1, we have i.i.d. observables {m1(Xi)} ∈ S, which target μ†
1 − b1 via their mean. Using these observables, we construct a working conditional likelihood with a corresponding prior, yielding a conditional posterior Πμ1|b1 for μ1|b1 (see Proposition 2). Finally, combining Πμ1|b1 and Πb1 via the integral (6), we get a marginal posterior Πμ1 ≡ Πμ1(·; S) for μ1.
Remark 3. A key feature of DRDB is its efficient use of the data. It first models the nuisance bias b†
1
using S1, and then models the debiased quantity μ†
1 −b1 using S. This two-step, hierarchical approach allows inference to focus directly on target-specific quantities while correcting for the nuisance bias. Notably, under the targeted learning framework (and the Bayesian debiasing mechanism), the nuisance estimation method is not restricted to any particular class, enabling the use of a wide range of flexible models for the nuisance posterior Πm1. On the other hand, the target posteriors for the summary statistics are simple and analytically trac-
table (typically t-distributions; see Propositions
7

1 and 2). An additional noteworthy advantage of DRDB (a consequence of the debiasing) is that it requires only a single nuisance posterior draw, yielding substantial computational efficiency without compromising theoretical validity (see Theorem 2).
Remark 4 (Role of PS). To simplify the computation of Πr1, Bayes’ theorem yields:
r†
1(X) = P(T = 1)
P(T = 1|X) := p1
e†(X) , where e†(·) is the propensity score (PS). (7)
This representation offers a flexible regression-based approach to estimate r†
1(·), avoiding direct
density estimation. Specifically, we first learn e†(·) using a Bayesian binary regression on S–, e.g., Bayesian logistic regression, sparse Bayesian binary regression based on spike-and-slab type priors (George and McCulloch, 1993), and BART (Chipman et al., 2010), which yields a posterior Πe ≡ Πe(·; S–). Further, we construct a point estimator pb1 for p1 from S–. By (7), for a sample e(·) ∼ Πe, we define: r1 ≡ r1(·) := pb1/e(·) as a sample from its posterior Πr1. This formulation naturally incorp-
orates the PS into our framework. While frequentist methods have long recognized the critical role of the PS in causal inference (Rosenbaum and Rubin, 1983, 1984; Bang and Robins, 2005), its integration in Bayesian approaches varies across methodologies (Ray and Szab ́o, 2019; Ray and van der Vaart, 2020; Luo et al., 2023; Breunig et al., 2025), and there is no consensus on how to incorporate it systematically (Li et al., 2023, Section 5). In contrast, DRDB brings the PS in organically as a core c-
omponent of the debiasing mechanism via the targeted reweighting step, implemented via the density ratio, which explicitly links the procedure to the PS as shown in (7).
The initial DRDB formulation relies on a single data split, (S–, S), to ensure the independence required for our debiasing and targeted modeling strategy. The drawback, however, is a significant loss of efficiency from using only a fraction of the data for the final inference. To address this, we now detail a strategy to construct a final posterior for μ1 based on usage of the full data D.
The final DRDB posterior with cross-fitting. Leveraging the randomized sample-splitting presented in Section 3, we can apply the DRDB procedure, as detailed in Steps (2)–(6), to each of
the K test and training folds {(Dk, D
k)}kK=1. This yields corresponding posteriors: Π(1)
μ1 , . . . , Π(K)
μ1 .
To efficiently use all available data, we aggregate these fold-specific posteriors into a final posterior for μ1 that incorporates information from all splits. Following the consensus Monte Carlo (CMC)type aggregation strategy employed in Sert et al. (2025), we define a new random variable, μ1CF, as
the average of independent samples {μ(k)
1 }kK=1 drawn from the respective posteriors {Π(k)
μ1 }kK=1:
μCF
1 := 1
K
K
X
k=1
μ(k)
1 , and let ΠCF
μ1 denote the corresponding distribution. (8)
The resulting distribution, ΠμC1F, serves as the final DRDB posterior for μ1 and is a scaled
convolution of the fold-specific posteriors {Π(k)
μ1 }kK=1. This construction provides a principled and
computationally efficient way to unify inference for μ†
1 across all splits. Although the combination step draws inspiration from CMC (Scott et al., 2022), its goal here is quite different. We use sample splitting not for computational efficiency, but as a methodological necessity to create independent training and test sets that validate the debiased representation and enable targeted modeling. The aggregation strategy then provides a Bayesian analogue of cross-fitting (CF) (Chernozhukov et al., 2018) of posteriors, for semiparametric inference proble-
ms.
8

3.2 Generalized DRDB procedure for the ATE
Building on the DRDB procedure for μ†
1, we now extend the method to our primary target, the
ATE, ∆†. Unlike frequentist ATE point estimators, which are simply the difference between the mean estimates for the two arms, Bayesian inference has no such direct analogue of ‘subtracting’ posterior distributions. Hence, constructing a valid posterior for the ATE requires a more careful ‘first-principles’ approach, accounting for the full posterior structure of the underlying components. For clarity, we first detail the generalized DRDB procedure for one data split (S, S–) = (Dk, D
k ). Second, we use the combination step from Section 3.1 to aggregate the posteriors from all K folds.
Debiasing step for the ATE. The regression-based identification in (1) shows the ATE ∆†
can be expressed as a functional of −→m† and PX, denoted ∆† = ∆†(−→m†, PX). The nuisance function
−→m† = (m†
1, m†
0) includes the unknown regression functions m1 and m0, both requiring estimation.
Define m†(·) := m†
1(·) − m†
0(·). Let m ≡ m(·) be one draw from the posterior Πm ≡ Πm(·; S–)
obtained from S–, as in Remark 7. Using the debiasing framework in Section 3.1, we express ∆† in its debiased form as: ∆† = b†(m) + EX∈S{m(X)|m}, where b†(m) := EX∈S{m(X) − m(X)|m}, with the equality being valid due to the independence condition (m ⊥⊥ S). The term b†(m) is the expected bias from learning m†(·) and can be viewed as a function of (b†
1, b†
0) ≡ (b†(m1), b†(m0)),
where b†(mt) is the bias for each arm μ†(t) for t = 0, 1. To accurately model b†(m) and construct
its posterior Πb ≡ Πb(·; S), we require a joint learning strategy: both biases, b†
1 and b†
0, must be learned together to produce a joint posterior for (b1, b0), which defines a valid posterior for b(m).
Remark 5. A key distinction of the generalized DRDB procedure, compared to the one-arm case, is that modeling or learning the bias b†(m) must be approached as a function of both (b†
1, b†
0). Thus,
valid and accurate inference for b†(m) is only feasible if the joint posterior for (b1, b0) is obtained, rather than constructing separate posteriors for each bias and combining them afterward.
Bias modeling for the ATE. Following the bias analysis in Section 3.1 and adopting the notational conventions introduced there for the first-order bias and the drift term (see Equations (3)(5)), the bias b†(m) ≡ b†(m, r†) can be decomposed into a first-order bias b†(m, r) and a drift term Γ†(m, r):
b†(m, r†) = {b†
1(m1, r1) − b†
0(m0, r0)} + {Γ†(m1, r1) − Γ†(m0, r0)}
=: b†(m, r) + Γ†(m, r),
(9)
where r† ≡ r†(·) := (r†
1(·), r†
0(·)), with r†
1(X) = p1/e†(X) and r†
0(X) := (1 − p1)/{1 − e†(X)}, and with corresponding posterior draws r1 := pb1/e ∼ Πr1 and r0 := (1 − pb1)/(1 − e) ∼ Πr0 (see Remark 4 for details), yielding a posterior sample r := (r0, r1) from (Πr0, Πr1). (9) emphasizes that retargeting with the density ratio is crucial for accurate bias estimation. Similar to the one-arm case (see the discussions around (5) and (6)), we focus on modeling the first-order bias b†(m, r) in (9) above, consistent with our main goal of debiasing. The second-order te-
rm Γ†(m, r), though not our primary debiasing target, is included in the theoretical analysis of our eventual posterior of ∆†.
Posterior calculation for bias. Recall that b†(m, r) can be expressed as function of (b†
1, b†
0) ≡
(b†(m1, r1), b†(m0, r0)), where b†(mt, rt) denotes the first-order bias for each arm t = 0, 1, as defined in (9). Thus, calculating the posterior Πb for b reduces to obtaining the joint posterior Π(b1,b0) for
9

(b1, b0) from S. Notably, since the treated and control subsets, S1 and S0, are independent (by design), the joint posterior Π(b1,b0) can be factorized as the product of the marginal posteriors:
Π(b1,b0) ≡ Π(b1,b0)(·; S) = Πb1 (·; S1) × Πb0 (·; S0) ≡ Πb1 × Πb0 . (10)
where Πbt denotes the posterior of bt based on St for t = 0, 1. For explicit derivations, see Proposition 1 in Section 4.1. This factorization not only simplifies the analysis of Πb, but also provides a straightforward sampling procedure: first, draw a sample b1 from Πb1 and b0 from Πb0, then define b := b1 − b0, yielding a posterior sample from Πb for constructing the ATE posterior.
Hierarchical learning and posterior construction for the ATE. For completeness, we briefly restate the hierarchical learning strategy from Section 3.1, now adopted to construct a valid posterior Π∆ for ∆. Building on the motivation and derivations in Section 3.1, construction proceeds by first drawing b ∼ Πb using the joint posterior factorization in (10). Conditional on b, the posterior Π∆|b is obtained through the conditional likelihood formulation with a suitably chosen prior; see Section 4.1 f-
or details. The marginal posterior for ∆ is then defined as:
[∆ | S] :=
Z
[∆ | b, S] [b | S]db =
Z
[∆ | b, S] [b1 | S1] [b0 | S0]db1 db0, (11)
where the second equality follows from (10). This procedure then yields a valid posterior for ∆, integrating the joint bias information and the hierarchical learning framework, both of which are central to the generalized DRDB procedure.
Posterior aggregation. Finally, we construct the final posterior ΠCF
∆ for ∆ using the entire data D, to recover the efficiency lost. Following the DRDB with CF procedure in Section 3.1, we combine
the posteriors Π(1)
∆ , · · · Π(K)
∆ obtained from the corresponding splits (Dk, D
k) via a CMC approach.
We draw independent samples {∆(k)}kK=1 from these posteriors, and define a new random variable:
∆CF := 1
K
K
X
i=1
∆(k) and denote the distribution of ∆CF by: ΠCF
∆ . (12)
The aggregated posterior ΠCF
∆ , our final output, integrates information on ∆ across all splits, providing a principled and computationally efficient basis for final inference on the ATE (see Theorem 2). The main steps of the DRDB procedure with CF are summarized in Algorithm 1.
Remark 6 (Scalability aspects). Algorithm 1 summarizes the generalized DRDB procedure for obtaining the posterior of ∆, which can be easily adopted for the one-arm μ†
1 = E[Y (1)] detailed in Section 3.1. A key feature of DRDB is its computational efficiency: it requires only a single draw from each nuisance posterior, enabling fast estimation of high-dimensional nuisance functions under both parametric and nonparametric models. In contrast, conventional Bayesian methods rely on multiple nuisance posterior samples, which can be computationally costly (Antonelli et al., 2022). Moreover, DRDB facilitates direct posterior sampling for ∆, as both the bias posterior-
 Πb and the conditional posterior Π∆|b have simple, tractable forms (see Propositions 1 and 2). The choice of K: Theoretically, the number of folds K does not affect asymptotic properties as long as it remains fixed. In finite samples, however, K should be chosen carefully: larger K improves nuisance estimation through larger training sets but may increase posterior variance due to smaller test sets. Simulations suggest that K = 5 or 10 generally achieve a favorable balance; in Section 5, we repor-
t results with K = 5 for simplicity, noting similar conclusions for K = 10.
10

Algorithm 1: Generalized Doubly Robust Debiased Bayesian Procedure for the ATE
Input: Observed data D, number of folds K, number of posterior draws M .
Randomly partition D into K disjoint subsets {Dk}kK=1, as described in Section 3.
for k = 1 to K: do
Construct training dataset D−
k := D \ Dk and test dataset Dk.
Compute the nuisance posteriors Π(k)
m ≡ Π(k)
m (·; D−
k ) and Π(k)
rt ≡ Π(k)
rt (·; D−
k ) for t = 0, 1,
using any suitable Bayesian methods (see Remarks 7 and 4) based on D−
k.
Draw one sample m ∼ Π(k)
m and one sample r := (r0, r1) where rt ∼ Πrt for t = 0, 1. Retarget the bias via density-ratio reweighting, as described in Section 3.2, to obtain the first-order bias b† ≡ b†(m, r).
Obtain the bias posterior Π(k)
b ≡ Π(k)
b (·; Dk) as formulated in (10) and computed in Proposition 1.
Given b ∼ Π(k)
b , compute conditional posterior Π(k)
∆|b as in Proposition 2.
Construct marginal posterior Π(k)
∆ for ∆ using Dk as in (11).
Combine posteriors {Π(k)
∆ }kK=1 via a consensus Monte Carlo-type approach in (12) to obtain
aggregated DRDB posterior ΠCF
∆ using the full dataset D.
Output: Final aggregated DRDB posterior ΠCF
∆ for the target parameter ∆ from D.
4 Theory
This section develops the theoretical foundations of the DRDB procedure and establishes posterior consistency and BvM–type results (Theorems 1–2) for the final DRDB posteriors, under mild regularity conditions on the nuisance parameters. We first present the posterior construction details for DRDB in Section 4.1, followed by the result for μ†
1 in Theorem 1, a problem of independent interest in missing data theory, and thereafter the main result for the ATE in Theorem 2.
4.1 Likelihood constructions and posterior calculations
We provide a general characterization of the likelihood construction and prior specification used to obtain the posterior of the bias b(mt, rt) for t = 0, 1 and the conditional posterior calculation used in deriving the marginal posterior for ∆ (and μ1) as discussed in Sections 3.1 and 3.2. To avoid repetition, we present a unified procedure applicable to any bias term defined in Sections 3.1 and 3.2. Likewise, the conditional posterior derivation is also framed generally, covering the computation-
 of conditional posteriors for ∆ and μ1, given the corresponding bias(es). This construction includes the specific forms used in Sections 3.1 and 3.2 as special cases.
Bias modeling via targeted modeling strategy. For notational convenience, we use N (μ, σ2) for a Normal distribution with mean μ and variance σ2, and tν(η, c2) for a t-distribution with degrees of freedom ν > 0, center η and scale c. Define bt := b(mt, rt), W(Z, rt, mt) := rt(X){Y − mt(X)}
and σt2 := Var(Y,X)∈St{W(Z, rt, mt)|rt, mt} for t = 0, 1 and Z = (Y, X) ∈ S(⊥⊥ (mt, rt)). Then, given mt ∼ Πmt and rt ∼ Πrt, for Zi ∈ St ⊂ S, the weighted observables W(Zi, rt, mt) are i.i.d. with mean
bt and variance σt2. This motivates a natural working model based on a Normal distribution with
11

unknown variance. For simplicity, we recommend using an improper prior on the model parameters, though more general priors yield the same asymptotic properties. Let It denote the index set of St. The model and prior formulation are then given as: for each t ∈ {0, 1},
W (Zi, rt, mt) | mt, rt, bt, σ2
t
i.i.d.
∼ N (bt, σ2
t ) for i ∈ It; π(bt, σ2
t ) ∝ (σ2
t )−1. (13)
Proposition 1. Under the model construction and the prior given in (13), the marginal posterior Πbt ≡ Πbt(·; St) for bt follows a t-distribution for t = 0, 1. Specifically, for nt = |St|, νt = nt − 1,
Πbt = tνt (ηt, c2
t ), with ηt = 1
nt
X
i∈It
W (Zi, rt, mt) and c2
t= 1
nt(nt − 1)
X
i∈It
{W (Zi, rt, mt) − ηt}2. (14)
Conditional posterior construction. To generalize the conditional posterior derivation, we introduce the generic random variables θ and λ, where θ represents either ∆ or μ1, and λ denotes the corresponding bias, i.e., b1 in Section 3.1 or b in Section 3.2. Since the likelihood is constructed using the entire data S and does not depend on specific properties of the bias term or the target parameter, we are justified in adopting this unified notation. Let φ(·) denote a generic regression function, c-
orresponding to m1(·) in Section 3.1 or m(·) in Section 3.2. Given posterior samples φ ∼ Πφ ≡ Πφ(·; S–) and λ ∼ Πλ ≡ Πλ(·; S), we have the i.i.d. replicates {φ(Xi)}i∈I ∈ S targeting θ − λ through their mean. Within the target-specific modeling strategy, θ − λ can be viewed as a functional of the distribution of S, characterized by the summary statistic (mean) of φ(X). Given the independence of these observables, it is natural to adopt a Normal working model with unknown variance and place an impro-
per prior (for simplicity again, though more general priors are allowed) on its parameters, yielding an analytically tractable posterior. Specifically, let σ22 := VarX∈S{φ(X)|φ}. Then, the resulting model is specified as:
φ(Xi) | φ, λ, θ, σ2
2
i.i.d.
∼ N (θ − λ, σ2
2) for i ∈ I; π(θ, σ2
2) ∝ (σ2
2)−1. (15)
Proposition 2. Under the model-prior specification in (15), the conditional posterior Πθ|λ ≡ Πθ|λ(·; λ, S) for θ|λ is a t-distribution: For νS = nS − 1 and ηS := ηφ + λ,
Πθ|λ = tνS (ηS , c2
S), with ηS =
P
i∈I φ(Xi) + λ
nS
, c2
S=
P
i∈I {φ(Xi) − ηφ}2
nS(nS − 1) . (16)
In particular, setting θ = μ1, λ = b1 and φ = m1 ∼ Πm1 gives the conditional posterior Πμ1|b1 for μ1 given b1 ∼ Πb1, as in Section 3.1. Similarly, setting θ = ∆, λ = b and φ = m ∼ Πm yields the conditional posterior Π∆|b for ∆ given b ∼ Πb, as in Section 3.2.
Remark 7 (Some implementation details). By construction, obtaining a posterior Πm for m based on S– reduces to obtaining the joint posterior Π(m1,m0) for (m1, m0) using S–. Now, the marginal
regression functions mt(·) for t ∈ {0, 1} need only the corresponding treated/control subsets St– ⊂ Sto obtain Πmt, via any proper Bayesian regression method. Then, we can directly get the joint posterior as: Π(m1,m0) ≡ Π(m1,m0)(·; S–) = Πm1(·; S1–) × Πm0(·; S0–), where the factorization follows
from the independence: S1– ⊥⊥ S0– (notably not due to CF, but a natural consequence of the two-arm setup). This crucially ensures: the joint Π−m → is obtainable from the marginals only. (Same type of independence, S1 ⊥⊥ S0 , was also used for the joint bias modeling step in (10).) To sample m ∼ Πm, we independently draw m1 ∼ Πm1 and m0 ∼ Πm0, and then set m(·) := m1(·) − m0(·).
12

4.2 Main results
This section presents the theoretical properties of the proposed DRDB procedure, providing results for both the ATE ∆† and the one-arm parameter μ†
1 ≡ μ†(1) = E[Y (1)].
Assumption 2. Let K ≥ 2 be a fixed integer. For k = 1, . . . , K, we impose the following high-level
conditions on the nuisance posteriors Π(k)
mt ≡ Πmt (·; D
k) and Π(k)
rt ≡ Πrt (·; D
k) for t = 0, 1:
(a) Let εm,n ≥ 0 and εr,n ≥ 0 be two sequences satisfying max{εm,n, εr,n} → 0 and √nKεm,nεr,n → 0, and let Mn ≥ 0 be any sequence such that Mn → ∞ as n → ∞. Then, we assume that:
Π(k)
mt {∥mt(X) − m∗
t (X)∥L2(PX) > Mnεm,n | D
k}
PD
k
−−→ 0, and (17)
Π(k)
rt {∥rt(X) − r∗
t (X)∥L2(PX) > Mnεr,n | D
k}
PD
k
−−→ 0, (18)
where mt∗(·) ∈ L2(PX) and rt∗(·) ∈ L2(PX) is the respective limiting nuisance functions.
(b) We assume supx∈X E{Y − mt∗(X)|X = x} < ∞, ∥rt(X){Y − mt(X)}∥L4(PZ) = OP(mt,rt) (1),
∥rt(X)∥L∞(PX) = OPrt (1) and ∥mt(X)∥L4(PX) = OPmt (1), for any mt ∼ Π(k)
mt and rt ∼ Π(k)
rt .
Remark 8. Assumption 2 (b) is standard, mild moment conditions. Condition (a) specifies the posterior contraction requirement for the nuisance parameters: Πmt and Πrt contract around some fixed functions mt∗(·) and rt∗(·) at rates εm,n and εr,n, respectively; these limiting functions need not
match with the true m†
t (·) and r†
t (·). Notably, this is the only assumption required on the nuisance posteriors for Theorems 1–2 to establish posterior consistency and BvM-type results. In contrast to traditional approaches (Ray and van der Vaart, 2020; Breunig et al., 2025; Yiu et al., 2025), which often require restrictive conditions (Donsker class) on the nuisance model or explicit posterior correction, DRDB is flexible: any Bayesian method may be used to obtain the nuisance posteriors, provided Assumption 2 (a) holds. Moreov-
er, Assumption 2 (a) serves as the Bayesian analogue of the L2-consistency requirements for nuisance parameters commonly imposed in frequentist debiased semiparametric inference; see, e.g., Chernozhukov et al. (2018).
Let P and Q be two probability measures on a measurable space (Ω, B). Then, the total variation distance between P and Q is defined as: dTV(P, Q) := supB∈B |P (B) − Q(B)|.
Theorem 1 (Main result for the one-arm case: μ†(1)). Suppose Assumptions 1 and 2 hold.
(a) If both nuisance models are well-specified (Case C1), the posterior ΠμC1F satisfies the BvM
theorem: dTV(ΠμC1F, N (μ1(m†
1, r†
1), c2(m†
1, r†
1))) −P−D → 0, as n → ∞, where:
μ1(m†
1, r†
1) := 1
n
X
i=1
m†
1(Xi) + 1
n
n
X
i=1
ψ(Zi, m†
1, r†
1), and c2(m†
1, r†
1) := Var{μ1(m†
1, r†
1)}, (19)
with ψ(Z, m†
1, r†
1) := r†
1(X)T {Y − m†
1(X)}/p1.
(b) If only one nuisance model is well-specified (Case C2 or C3), then ΠμC1F contracts around μ†(1)
at a rate εn: For any sequence Mn → ∞, as n → ∞, ΠμC1F{|μ1 − μ†(1)| ≥ Mnεn | D} −P−D → 0, where εn is the contraction rate for the well-specified nuisance model.
13

Theorem 2 (Main result for the ATE: ∆†). Suppose Assumptions 1 and 2 hold.
(a) Under Case C1, the posterior ΠCF
∆ satisfies the BvM theorem:
dTV(ΠCF
∆ , N (∆(m†, r†), c2(m†, r†))) −P−D → 0, as n → ∞, where
∆(m†, r†) := 1
n
X
i=1
m†(Xi) + 1
n
n
X
i=1
γ(Zi, m†, r†), c2(m†, r†) := Var{∆(m†, r†)}, (20)
and γ(Z, m†, r†) = r†
1(X)T {Y − m†
1(X)}/p1 − r†
0(X)(1 − T ){Y − m†
0(X)}/(1 − p1).
(b) Under Case C2 or C3, ΠCF
∆ contracts around the true ∆† at a rate εn, where εn is the contraction rate for the well-specified nuisance model.
A direct consequence of Theorems 1 and 2 is that DRDB provides natural Bayesian point estimators for μ†(1) and the ATE ∆† through the posterior means: μb1(m1, r1) and ∆b (m, r), respectively. In Corollary 1, we rigorously characterize the theoretical properties of these DRDB point estimators.
Corollary 1 (Properties of the posterior means). Suppose the assumptions of Theorems 1 and 2 hold.
(a) Under Case C1, the posterior means are asymptotically equivalent to the means of the limiting
distributions: (i) √n{μb1(m1, r1) − μ1(m†
1, r†
1)} = oP(1) and (ii) √n{∆b (m, r) − ∆(m†, r†)} = oP(1).
(b) Under Case C2 or C3, μb1(m1, r1) and ∆b (m, r) are εn−1-consistent estimators for μ†(1) and
∆†, respectively, where εn denotes the posterior contraction rate of the well-specified nuisance model: (i) μb1(m1, r1) − μ†(1) = OP(εn) and (ii) ∆b (m, r) − ∆† = OP(εn).
Remark 9 (Matching frequentist properties). Corollary 1 establishes the asymptotic behavior of DRDB point estimators under different nuisance model specifications. In Case C1, ∆b (m, r) admits
asymptotically linear representations at the √n-rate, achieving semiparametric efficiency as the mean ∆(m†, r†) of the limiting distribution in Theorem 2 coincides with the ‘efficient’ influence function (EIF) for the ATE (Robins and Rotnitzky, 1995; Hahn, 1998). Under Cases C2 and C3, ∆b (m, r) remains consistent for ∆† with convergence rates determined by the posterior contraction rate of the well-specified nuisance model, reflecting the double robustness of the DRDB procedure.
Similar asymptotic properties to those in Remark 9 hold for μb1(m1, r1), relevant for mean estimation of missing outcomes under MAR (Tsiatis, 2007). The details are analogous and omitted for brevity.
Remark 10 (Key theoretical properties of DRDB). Theorems 1 and 2 establish the main theoretical guarantees of DRDB. Under Case C1, the posterior ΠCF
∆ contracts around the true ATE at the
parametric 1/√n rate. This condition holds, for example, if each nuisance contracts faster than n−1/4, allowing wide flexibility in model choices. Also, the asymptotic variance of ΠCF
∆ remains
unaffected by nuisance estimation error: it relies only on the limiting functions m∗ and r∗, no other features of the nuisance posteriors. This robustness arises from the Bayesian debiasing strategy combined with CF and the targeted modeling introduced in Section 3. Thus, DRDB allows high-dimensional or nonparametric nuisance models with rates slower than n−1/2, while retaining
√n-rate inference for the ATE. Moreover, under Cases C2 and C3, ΠCF
∆ still contracts around the true ATE at the rate of the correctly specified model, showing Bayesian double-robustness of DRDB. Analogous results for the one-arm case: μ†(1) also follow from Theorem 1.
14

4.3 Comparison with alternative Bayesian debiasing strategies
A main challenge in Bayesian semiparametric inference is that regularization bias from flexible nuisance models can propagate into the posterior for a low-dimensional target parameter, such as the ATE, compromising inferential validity (Bickel and Kleijn, 2012; Castillo and Rousseau, 2015). To mitigate this nuisance-induced bias, two prominent strategies have emerged: prior modification, which tailors prior specification to the semiparametric model structure (Ray and van der Vaart, 2020; Breunig e-
t al., 2025, e.g.,); and posterior correction, which applies a post-hoc adjustment using the efficient influence function (EIF) (Yiu et al., 2025). A complementary approach by Luo et al. (2023) constructs posteriors via exponentially tilted empirical likelihood and establishes BvM results for partially linear and parametric models. Our DRDB procedure introduces an alternative perspective by embedding debiasing directly into the modeling process through targeted learning. Below, we compare DRDB wit-
h these two state-of-the-art alternatives, focusing on the seminal works of Ray and van der Vaart (2020) and Yiu et al. (2025), both mainly interested in the mean outcome under MAR, closely related to the one-arm case for our ATE setting, discussed in Section 3.1. The prior modification approach proposed by Ray and van der Vaart (2020) models the full data distribution with nonparametric priors, innovatively augmenting the prior for the outcome regression with an estimator of the propensity score -
(PS) obtained from an independent auxiliary data. This augmentation perturbs the prior in the model’s least favorable direction of the semiparametric model, and thereby mitigates nuisance-induced bias. While theoretically elegant, this approach requires customized prior design and strong conditions, including Donsker assumptions and smoothness constraints, limiting the use of machine learning or high dimensional nuisance models. Moreover, its theoretical guarantees require both nuisance models to -
be correctly specified. The posterior correction approach in Yiu et al. (2025) takes a different route by adding a stochastic correction to posterior draws, inspired by the frequentist one-step estimator (van der Vaart, 2000, Chapter 5.7). Using the EIF and the Bayesian bootstrap (Rubin, 1981), it projects draws towards the truth along the most informative direction, achieving bias reduction. While this approach can target multiple functionals, it relies on posterior draws for the full data model,-
 and, similar to DRDB, its theoretical guarantees rely on product-type rate conditions on the nuisance posteriors. In addition, it requires Donsker-type conditions (van der Vaart, 2000, Chapter 19), which are often restrictive for flexible or high-dimensional nuisance models, whereas DRDB avoids the explicit need for such conditions (see Assumption 2) via its distinct use of cross-fitting. Cross-fitting (CF) is a well-established tool in the frequentist literature, commonly used to relax Donsker-t-
ype conditions on nuisance parameters Chernozhukov et al. (2018). In DRDB, however, CF is not merely a technical device; it is a crucial component of our debiasing mechanism. Within the DRDB framework, CF is methodologically essential (see Remark 1), and also underpins a novel Bayesian analogue, an aggregation strategy that combines posteriors across splits (folds), enabling principled Bayesian semiparametric inference while leveraging the full data efficiently. DRDB departs from both methods in p-
hilosophy and implementation. Rather than modifying the prior or correcting the posterior, DRDB embeds debiasing within the modeling process through the debiased representation. It explicitly identifies and learns the bias as a separate target, using summary statistics that are directly informative about the ATE and its bias. Furthermore, the role of the propensity score underlines these differences: it enters externally to guide prior design, while in DRDB it arises naturally through density rati-
o weighting. Likewise, the use of independent data differs: Ray and van der Vaart (2020) primarily leverages it for technical convenience, whereas DRDB uses it to validate the debiased representation and strengthen bias correction.
15

Theoretically, DRDB requires only high-level posterior contraction for the nuisance models, and mild moment conditions, making it compatible with flexible nuisance models. Most importantly, DRDB achieves Bayesian double robustness: ATE posterior remains consistent and contracts at the rate of the well-specified nuisance, even if the other is misspecified. This guarantee is stronger than those of both prior augmentation and one-step posterior correction methods, offering greater stability under mo-
del misspecification. Computationally, DRDB is also far simpler and more scalable. Whereas Yiu et al. (2025) require a full set of posterior draws for all nuisance parameters, DRDB needs only a single posterior draw per nuisance per cross-fitting fold. Compared with Ray and van der Vaart (2020), which demands intricate prior customization, DRDB’s modular structure allows seamless use of standard Bayesian regression tools without model-specific tuning. A further distinction of DRDB is the generalit-
y of its methodological framework, which extends seamlessly beyond the ATE to a broad class of causal estimands. By representing each estimand as a weighted functional and adapting the debiasing and retargeting steps accordingly, DRDB maintains inferential validity and computational scalability under these broader settings. The detailed formulation of this extension is presented in Section S1 of the Supplementary Material. DRDB unifies the theoretical strengths of prior modification and posterior -
correction while also introducing new modeling perspectives and methodological advances that extend its applicability. By embedding debiasing directly into the modeling process, it enables flexible nuisance estimation, ensures valid inference under mild conditions, and remains computationally efficient. These features establish DRDB as a robust, theoretically grounded, and practically scalable framework for Bayesian causal inference and, more broadly, Bayesian semiparametric inference in general.
5 Numerical studies
We evaluate the finite-sample performance of the proposed DRDB procedure for both estimation and inference of the ATE through extensive simulation studies across various data-generating mechanisms and Bayesian methods for nuisance estimation, including both well-specified and misspecified settings. The mean of the DRDB posterior ΠCF
∆ serves as our point estimator. We report the empirical bias (Bias) and mean squared error (MSE) for estimation accuracy. For inference evaluation, we report the empirical coverage probabilities (Cov) and average lengths of the 95% credible intervals (CI-Len) based on 1000 posterior samples from ΠCF
∆ . For the number of folds, we set K = 5 for computational efficiency. All reported results are based on 500 replications. We study two scenarios: one where both nuisance models are well-specified (Section 5.1), and another where only one of them is well-specified (Section S2 of the Supplementary Material). The following notations are used throughout this section. For any integer p ≥ 1 and v ∈ R, let vp be the vector vp := (v, . . . , v)′ ∈ Rp×1. Let Ip denote the p × p identity matrix, Np(μp, Σp-
) denotes the p-variate Gaussian distribution with mean vector μp ∈ Rp and covariance matrix Σp ∈ Rp×p.
5.1 Simulation results
Throughout, we set n = 1000 and consider p = 10, 50, and 200, representing low, moderate, and high-dimensional settings, respectively. For each i = 1, . . . , n, the covariate vector is generated
as: Xi
i.i.d.
∼ Np(0p, Ip). Conditional on Xi, the treatment assignment follows: Ti|Xi ∼ Ber{e†(Xi)},
where e†(Xi) = 1/{1 + exp−(X′
iβ3−0.08)} and β3 = (0.352, 0p−2), ensuring the positivity condition
in Assumption 1. Given Xi, the potential outcomes are generated as: Yi(t) ∼ N (m†
t (Xi), σt2),
16

Table 1: Estimation and inference results for the ATE based on DRDB with the setting given in Section 5.1. To distinguish between nuisance estimation methods, we denote each approach as DRDB-M, where “M” indicates the specific nuisance method: S = BS, R = BR, and B = BART.
Method Bias MSE Cov CI-Len Bias MSE Cov CI-Len
p = 10 s = 3 s = 10 Oracle -0.006 0.008 0.936 0.333 0.010 0.020 0.944 0.552 DRDB-S -0.006 0.008 0.936 0.335 0.010 0.020 0.944 0.552 DRDB-R -0.008 0.008 0.934 0.340 0.010 0.021 0.952 0.566 DRDB-B -0.010 0.009 0.958 0.396 0.014 0.029 0.962 0.722 p = 50 s = 7 s = 13 Oracle 0.008 0.015 0.952 0.482 0.000 0.025 0.954 0.644 DRDB-S 0.009 0.016 0.954 0.494 0.000 0.027 0.952 0.671 DRDB-R 0.015 0.018 0.956 0.546 -0.001 0.030 0.960 0.729 DRDB-B 0.013 0.020 0.968 0.630 -0.006 0.035 0.992 0.908 p = 200 s = 14 s-
 = 50 Oracle 0.007 0.026 0.962 0.656 -0.010 0.105 0.946 1.235 DRDB-S 0.006 0.027 0.972 0.684 -0.014 0.134 0.980 1.600 DRDB-R 0.028 0.048 0.982 1.026 0.010 0.167 0.978 1.930 DRDB-B 0.016 0.036 0.986 0.973 -0.019 0.243 0.994 2.468
with m†
1(X) = 5 + 2X′β1 and m†
0(X) = 3 + X′β0, and variances σt2 = Var{m†
t (X)}/5 for t = 0, 1. The observed outcome is therefore Yi = TiYi(1) + (1 − Ti)Yi(0), and the observed data is D = {(Yi, Xi, Ti)}n
i=1. The regression coefficients β1 = β0 are set as (1s/2, 0.5s/2, 0p−s), where s denotes
sparsity. For p = 10, we use s = 3 and s = 10; for p = 50 and p = 200, we take s ≈ √p and s ≈ p/4 to represent sparse and moderately dense regimes. For illustrative purposes, we employ the sample mean pb1 := n−1 Pn
i=1 Ti as a point estimator for p1 := P(T = 1). For the posterior Πe, we only use sparse Bayesian (BS) logistic regression with nonlocal priors (NLP) (Johnson and Rossell, 2012) for simplicity. For the posteriors Πm1 and Πm0, in addition to BS linear regression with NLP, we consider Bayesian ridge regression (BR) and BART (Chipman et al., 2010), implemented using the R package BART. For parametric methods, we consider the Gaussian linear and logistic regression working models: for i = 1, . . . , n-
,
Yi|Xi, Ti = 0, γ0, θ0, σ i.i.d.
∼ N (γ0 + X′
iθ0, σ2), Yi|Xi, Ti = 1, γ1, θ1, τ i.i.d.
∼ N (γ1 + X′
iθ1, τ 2) and
Ti|Xi ∼ Ber{e(Xi)}, where e(Xi) = 1/{1 + exp−(γ3+X′
iθ3)}. For BR, we employ a Gaussian prior on the regression coefficients and an improper prior on the variance parameter. The ridge parameter λ is estimated using an empirical Bayes approach, with the point estimate λb obtained via the R package glmnet. For BS, posterior samples for (γ0, θ0), (γ1, θ1) and (γ3, θ3) are obtained using the R package mombf. Finally, as a performance benchmark, we report the results for the frequentist oracle estimator, constructed using the empirical mean of the EIF o-
f the ATE (Hahn, 1998) over Dn using the true nuisance parameters, denoted as Oracle. Table 1 reports the estimation and inference results for the ATE. Across all scenarios and nuisance estimation methods, DRDB performs nearly identically to the Oracle estimator. In both
low- and moderate-dimensional settings (p = 10, 50), and across sparse (s = √p) and moderately dense (s = p/4) regimes, all DRDB variants yield negligible differences from Oracle. Even DRDB-B
17

1.8
2.0
2.2
∆Oracle ∆DRDB−B ∆DRDB−R ∆DRDB−S
True ∆+
Box plot of posterior means (500 replicates)
DRDB−B DRDB−R DRDB−S
1.6 2.0 2.4 1.6 2.0 2.4 1.6 2.0 2.4
1
2
3
4
5
∆
DRDB Oracle
Posterior curves overlaid (20 replicates)
(a) Setting: p = 10 with s = 3.
1.50
1.75
2.00
2.25
2.50
∆Oracle ∆DRDB−B ∆DRDB−R ∆DRDB−S
True ∆+
Box plot of posterior means (500 replicates)
DRDB−B DRDB−R DRDB−S
1.0 1.5 2.0 2.5 1.0 1.5 2.0 2.5 1.0 1.5 2.0 2.5
1
2
3
∆
DRDB Oracle
Posterior curves overlaid (20 replicates)
(b) Setting: p = 10 with s = 10.
1.50
1.75
2.00
2.25
∆Oracle ∆DRDB−B ∆DRDB−R ∆DRDB−S
True ∆+
Box plot of posterior means (500 replicates)
DRDB−B DRDB−R DRDB−S
1.0 1.5 2.0 2.5 1.0 1.5 2.0 2.5 1.0 1.5 2.0 2.5
1
2
3
∆
DRDB Oracle
Posterior curves overlaid (20 replicates)
(c) Setting: p = 50 with s = 7.
1.50
1.75
2.00
2.25
2.50
∆Oracle ∆DRDB−B ∆DRDB−R ∆DRDB−S
True ∆+
Box plot of posterior means (500 replicates)
DRDB−B DRDB−R DRDB−S
1.0 1.5 2.0 2.5 3.0 1.0 1.5 2.0 2.5 3.0 1.0 1.5 2.0 2.5 3.0
1
2
∆
DRDB Oracle
Posterior curves overlaid (20 replicates)
(d) Setting: p = 50 with s = 13.
Figure 1: Box plots of posterior means (based on 500 replications) and overlaid density curves (based on 20 iterations) for the posteriors ΠOracle (pink) and Π∆ (blue) of ∆. The plots show results from using three methods (BART, BR, BS) to obtain the nuisance posteriors. The subfigures correspond to different values of p and s. Each density curve is generated using 1000 posterior samples of ∆. The red dashed vertical line indicates the true ∆† (= 2 for all settings).
performs comparably well, though with slightly higher finite-sample bias and wider credible intervals, reflecting the slower convergence of nonparametric nuisance estimation. As the dimensionality increases to p = 200, the role of sparsity becomes more pronounced. The sparsity-adaptive DRDB-S continues to perform close to Oracle, effectively leveraging the underlying sparse structure, whereas DRDB-R and DRDB-S exhibit increased finite-sample bias and wider CIs, with DRDB-B most affected due to slo-
wer convergence inherent to nonparametric procedures. Table 1 shows that DRDB consistently achieves coverage probabilities near the nominal 95%
18

1.2
1.6
2.0
2.4
∆Oracle ∆DRDB−B ∆DRDB−R ∆DRDB−S
True ∆+
Box plot of posterior means (500 replicates)
DRDB−B DRDB−R DRDB−S
123 123 123
0.5
1.0
1.5
2.0
2.5
∆
DRDB Oracle
Posterior curves overlaid (20 replicates)
(e) Setting: p = 200 with s = 14.
1
2
3
∆Oracle ∆DRDB−B ∆DRDB−R ∆DRDB−S
True ∆+
Box plot of posterior means (500 replicates)
DRDB−B DRDB−R DRDB−S
0246 0246 0246
0.5
1.0
∆
DRDB Oracle
Posterior curves overlaid (20 replicates)
(f) Setting: p = 200 with s = 50.
Figure 2: Box plots of posterior means and overlaid density curves for the posteriors ΠOracle and Π∆ of ∆ for p = 200 and s = 14 or 50. The rest of the caption details are the same as in Figure 1.
level across nearly all settings with various dimensions, sparsity levels, and the nuisance estimation methods. In high-dimensional scenarios, DRDB-B tends to produce slightly conservative coverage and wider CIs, reflecting the effect of slower convergence rates and increased finite-sample bias associated with higher parameter dimensionality. Nevertheless, CI lengths remain comparable to those of the Oracle, and DRDB-S consistently maintains coverage near the nominal level. These patterns highligh-
t DRDB’s robustness and adaptability: when nuisance models capture the true underlying structure, its performance remains near-optimal even in high-dimensional regimes. Figures 1 and 2 visually support these findings. Across all scenarios, DRDB posteriors exhibit approximately Gaussian shapes, always concentrated around the truth ∆† = 2, with posterior means (from box plots) tightly centered near the truth. In low or moderate-dimensional regimes (p = 10 or p = 50), all DRDB variants produce nearly-
 identical posteriors that closely align with the Oracle, confirming the stability and efficiency of DRDB when nuisance parameters are accurately estimated. In the high-dimensional settings (p = 200), however, the differences between nuisance models become more pronounced: DRDB-S maintains the most concentrated posterior, nearly matching the Oracle, while DRDB-R and DRDB-B show wider and heavier-tailed posteriors, reflecting slower nuisance convergence and the inherent difficulty of ridge and nonp-
arametric estimators in such settings. Yet, all density curves remain well centered around ∆† = 2, and the credible interval lengths are largely comparable to the Oracle’s. Overall, the plots confirm DRDB’s robust finite-sample performance, while clearly revealing how high dimensionality amplifies the effect of nuisance model choice on second-order properties of posterior concentration. Finally, while our analysis herein focuses on correctly specified models, high-dimensional settings inherently i-
ntroduce a soft form of misspecification due to finite-sample nuisance estimation bias. Even in such cases, DRDB consistently estimates the ATE across nuisance methods, demonstrating its double robustness: as long as the product of nuisance convergence rates exceeds the parametric rate, DRDB yields near-Oracle estimates with accurate coverage. Under explicit functional-form misspecification (see Section S2 in the Supplementary Material), DRDB continues to produce stable estimates across all nuisan-
ce models and maintains valid coverage with only mildly wider credible intervals. These findings support its double robustness, and highlight a distinct advantage of the
19

Bayesian framework as well. Overall, the results confirm that DRDB offers robust, efficient, and reliable inference across diverse settings, highlighting its insensitivity to nuisance estimation.
5.2 Real data application
We apply the proposed DRDB approach to evaluate the effect of smoking cessation on weight gain using data from the National Health and Nutrition Examination Survey Epidemiologic Follow-up Study (NHEFS). The NHEFS is a longitudinal study initiated by the National Center for Health Statistics and the National Institute on Aging, in collaboration with other agencies of the U.S. Public Health Service (Hern ́an and Robins, 2020), and is well-studied in the causal inference literature (Ertefaie et al., -
2022; Zhang et al., 2023). Our analysis focuses on a subset of n = 1566 individuals who were cigarette smokers aged 25–74 years at baseline in 1971, and had a follow-up visit in 1982. The treatment T ∈ {0, 1} (qsmk) equals 1 if the individual quit smoking before the follow-up and 0 otherwise. The outcome Y ∈ R (wt82 71) is the weight gain (in kg), calculated as the difference between body weight at the follow-up and baseline weight. We use the same nine covariates as in Ertefaie et al. (2022): sex-
, race, age, education, smokeintensity, smokeyrs, exercise, active, and wt71. A detailed data description is available at https://miguelhernan.org/whatifbook. Our goal is to estimate the ATE of the treatment on body weight gain. As a baseline for comparison, we include the naive estimator (Naive), defined as the difference in empirical mean outcomes between the treatment groups (Tsiatis, 2007). Using the Bayesian nuisance estimation methods given in Section 5.1, we compute the DRDB posterior of ∆ -
via Algorithm 1 with K = 5. For each posterior, we draw 1000 samples to compute Monte Carlo approximations of the posterior mean (as the point estimate) and the 2.5% and 97.5% quantiles to construct 95% credible intervals (CIs). Table 2 reports the ATE estimates, the 95% CIs, and the respective CI lengths (CI-Leng). All methods yield a positive ATE, indicating that quitting smoking is associated with weight gain. A notable disparity exists between the naive estimate of 2.541 and the DRDB-based est-
imates, which are consistently higher and clustered in the 3.31 to 3.54 range. This gap strongly suggests the presence of confounding (given the observational setting), which the naive estimator fails to address. Further, our estimates align closely with those of Ertefaie et al. (2022), who reported ATE estimates between 3.20 and 3.42 using IPW estimators on the same data, providing strong external validation for our method. Moreover, DRDB yields substantially narrower CIs, with lengths of approxi-
mately 1.55, compared with the naive estimator (length = 1.91) and the IPW-based CIs in Ertefaie et al. (2022) (length ≈ 2.34 – 2.41), demonstrating improved efficiency. This consistency in results across various nuisance estimation methods highlights the robustness of DRDB to the choice of nuisance model. Overall, these findings indicate the presence of notable confounding via X, and support a causal effect of smoking cessation on weight gain after adjusting for confounders.
6 Concluding discussion
We proposed a DRDB procedure for estimating causal functionals within a Bayesian framework, focusing on the ATE and the single-arm mean μ†(1). DRDB builds on two key ideas: (i) explicit separation of the nuisance estimation from inference on the target, through a Bayesian debiasing mechanism (coupled with data splitting); and (ii) a targeted modeling strategy, along with hierarchical learning and use of posterior aggregation. The debiasing step corrects nuisance-induced bias via a
20

Table 2: Estimation and inference results for ATE in NHEFS data based on the naive and DRDB approaches. The rest of the caption details remain the same as in Table 1.
Method Estimator 95% Cred. Interval CI-Leng
Naive 2.541 (1.585, 3.496) 1.911 DRDB-S 3.368 (2.560, 4.116) 1.556 DRDB-R 3.312 (2.502, 4.124) 1.622 DRDB-B 3.544 (2.699, 4.458) 1.759
density-ratio–based retargeting, while targeted modeling ensures efficient use of relevant summaries. All these aspects put together make DRDB both theoretically robust/efficient and computationally scalable. Theorems 1–2 establish BvM theorems for DRDB with matching frequentist guarantees when both nuisances are correctly specified, as well as a Bayesian analogue of the frequentist double robustness, while operating within the posterior framework. Computationally, DRDB is flexible, allowing for o-
ff-the-shelf nuisance model choices, admits a simple final posterior, and requires only a single posterior draw from each nuisance per CF fold, ensuring its scalability in high dimensions. Finally, our framework also readily extends to a wide class of policy-relevant causal estimands, as shown in Section S1 of the Supplementary Material, with similar theoretical guarantees expected to hold therein as well. Overall, DRDB provides a novel Bayesian perspective on debiasing and double robustness, offe-
ring both theoretical guarantees and practical feasibility, and opens the door to broader applications of Bayesian targeted semiparametric learning.
Acknowledgments and funding
The authors gratefully acknowledge funding support from the NSF grants: NSF-DMS 2113768 (Abhishek Chakrabortty) and NSF-DMS 2210689 (Anirban Bhattacharya) towards partial support of this research.
Data availability
The dataset used in this paper is publicly available. The code used to generate the simulation results is available at https://github.com/gozdesert/DRDB.
Supplementary material
The Supplementary Material contains: (i) an extension of our methodology to other causal estimands, (ii) additional numerical results, and (iii) all technical details, including the complete proofs of the main results, that could not be included in the main paper.
21

References
Joseph Antonelli, Georgia Papadogeorgou, and Francesca Dominici. Causal inference in high dimensions: a marriage between bayesian modeling and good frequentist properties. Biometrics, 78:100–114, 2022.
Heejung Bang and James M Robins. Doubly robust estimation in missing data and causal inference models. Biometrics, 61(4):962–973, 2005.
Peter J. Bickel and Bart J. K. Kleijn. The semiparametric Bernstein–von Mises theorem. The Annals of Statistics, 40(1):206–237, 2012.
Christoph Breunig, Ruixuan Liu, and Zhengfei Yu. Double robust Bayesian inference on average treatment effects. Econometrica, 93(2):539–568, 2025.
Isma ̈el Castillo and Judith Rousseau. A Bernstein–von Mises theorem for smooth functionals in semiparametric models. The Annals of Statistics, 43(5):2353–2383, 2015.
Victor Chernozhukov, Denis Chetverikov, Mert Demirer, Esther Duflo, Christian Hansen, Whitney Newey, and James Robins. Double/debiased machine learning for treatment and structural parameters. The Econometrics Journal, 21(1):C1–C68, 2018.
Hugh A. Chipman, Edward I. George, and Robert E. McCulloch. BART: Bayesian additive regression trees. The Annals of Applied Statistics, 4(1):266–298, 2010.
Christopher C. Drovandi, Anthony N. Pettitt, and Anthony Lee. Bayesian Indirect Inference Using a Parametric Auxiliary Model. Statistical Science, 30(1):72–95, 2015.
Ashkan Ertefaie, Nima S. Hejazi, and Mark J. van der Laan. Nonparametric inverse probability weighted estimators based on the highly adaptive lasso. Biometrics, 79(2):1029–1043, 2022.
Andrew Gelman, John B. Carlin, Hal S. Stern, David B. Dunson, Aki Vehtari, and Donald B. Rubin. Bayesian Data Analysis. Texts in Statistical Science Series. CRC Press, Boca Raton, FL, 3rd edition, 2014. ISBN 978-1-4398-4095-5.
Edward I. George and Robert E. McCulloch. Variable selection via Gibbs sampling. Journal of the American Statistical Association, 88(423):881–889, 1993.
Subhashis Ghosal and Aad Van der Vaart. Fundamentals of Nonparametric Bayesian Inference, volume 44. Cambridge University Press, 2017.
Jinyong Hahn. On the role of the propensity score in efficient semiparametric estimation of average treatment effects. Econometrica, 66(2):315–331, 1998.
P Richard Hahn, Jared S Murray, and Carlos M Carvalho. Bayesian regression tree models for causal inference: Regularization, confounding, and heterogeneous effects (with discussion). Bayesian Analysis, 15(3):965–1056, 2020.
Miguel A. Herna ́n and James M. Robins. Causal Inference: What If. Chapman & Hall/CRC, 2020.
Keisuke Hirano, Guido Imbens, and Geert Ridder. Efficient estimation of average treatment effects using the estimated propensity score. Econometrica, 71:1161–1189, 02 2003.
22

Guido W Imbens and Donald B Rubin. Causal Inference in Statistics, Social, and Biomedical Sciences. Cambridge University Press, 2015.
Valen E. Johnson and David Rossell. Bayesian model selection in high-dimensional settings. Journal of the American Statistical Association, 107(498):649–660, 2012.
Fan Li, Peng Ding, and Fabrizia Mealli. Bayesian causal inference: A critical review. Philosophical Transactions of the Royal Society A, 381(2247):20220153, 2023.
Antonio Linero and Joseph Antonelli. The how and why of Bayesian nonparametric causal inference. WIREs Computational Statistics, 15(1):e1583, 2023.
Yu Luo, Daniel J Graham, and Emma J McCoy. Semiparametric Bayesian doubly robust causal estimation. Journal of Statistical Planning and Inference, 225:171–187, 2023.
Kolyan Ray and Botond Szabo ́. Debiased Bayesian inference for average treatment effects. Advances in Neural Information Processing Systems, 32, 2019.
Kolyan Ray and Aad van der Vaart. Semiparametric Bayesian causal inference. The Annals of Statistics, 48(5):2999–3020, 2020.
Vincent Rivoirard and Judith Rousseau. Bernstein–von Mises theorem for linear functionals of the density. The Annals of Statistics, 40(3):1489–1523, 2012.
James M Robins and Andrea Rotnitzky. Semiparametric efficiency in multivariate regression models with missing data. Journal of the American Statistical Association, 90(429):122–129, 1995.
James M Robins, Andrea Rotnitzky, and Lue P Zhao. Estimation of regression coefficients when some regressors are not always observed. Journal of the American Statistical Association, 89(427): 846–866, 1994.
Paul Rosenbaum and Donald Rubin. Reducing bias in observational studies using subclassification on the propensity score. Journal of the American Statistical Association, 79(387):516–524, 1984.
Paul R Rosenbaum and Donald B Rubin. The central role of the propensity score in observational studies for causal effects. Biometrika, 70(1):41–55, 1983.
Donald B Rubin. Estimating causal effects of treatments in randomized and nonrandomized studies. Journal of Educational Psychology, 66(5):688, 1974.
Donald B Rubin. The Bayesian bootstrap. The Annals of Statistics, 9(1):130–134, 1981.
Steven L. Scott, Alexander W. Blocker, Fernando V. Bonassi, Hugh A. Chipman, Edward I. George, and Robert E. McCulloch. Bayes and big data: The consensus Monte Carlo algorithm. In Big Data and Information Theory, pages 8–18. Routledge, 2022.
Go ̈zde Sert, Abhishek Chakrabortty, and Anirban Bhattacharya. Bayesian semi-supervised inference via a debiased modeling approach. Econometrics and Statistics, (to appear), 2025. ISSN 2452-3062.
Yebin Tao and Haoda Fu. Doubly robust estimation of the weighted average treatment effect for a target population. Statistics in Medicine, 38(3):315–325, 2019.
23

Anastasios Tsiatis. Semiparametric Theory and Missing Data. Springer Science & Business Media, 2007.
Aad W. van der Vaart. Asymptotic Statistics, volume 3. Cambridge University Press, 2000.
Christopher K. I. Williams. Prediction with Gaussian processes: From linear regression to linear prediction and beyond. In Learning in Graphical Models, pages 599–621. Springer, 1998.
Mingzhang Yin and Mingyuan Zhou. Semi-implicit variational inference. In International Conference on Machine Learning, pages 5660–5669. PMLR, 2018.
Andrew Yiu, Edwin Fong, Chris Holmes, and Judith Rousseau. Semiparametric posterior corrections. Journal of the Royal Statistical Society Series B: Statistical Methodology, pages 1–30, 2025.
Yuqian Zhang, Abhishek Chakrabortty, and Jelena Bradic. Double robust semi-supervised inference for the mean: selection bias under MAR labeling with decaying overlap. Information and Inference: A Journal of the IMA, 12(3):2066–2159, 2023.
24

Supplement to “Bayesian semiparametric causal inference: Targeted doubly robust estimation of treatment effects”
Go ̈zde Sert, Abhishek Chakrabortty, and Anirban Bhattacharya Department of Statistics, Texas A&M University 1
This supplement (Sections S1–S5) provides methodological extensions, additional numerical analyses, and technical materials, including all proofs, that could not be accommodated in the main paper. (i) Section S1 presents a detailed analysis of the extension of the DRDB procedure to a broader class of policy-relevant causal estimands. (ii) Section S2 presents a supplementary table and a detailed discussion of simulation results for the misspecified setting introduced in Section 5. (iii) Section S3 -
contains preliminary results and intermediate lemmas used in proving the main theorems (Theorems 1 and 2). (iv) Section S4 provides the full proofs of the main results of the paper. (v) Finally, Section S5 includes proofs of the preliminary results and lemmas introduced in Section S3.
S1 Extension of DRDB to other causal estimands
DRDB naturally extends from the ATE to a broad class of causal estimands of the form:
∆†
h := E[Y (1) − Y (0)|h(X, T ) = c],
where h(X, T ) is a known measurable function of the covariates and the treatment, and c specifies the condition of interest. Notably, for ∆†
h to be well-defined, a standard overlap condition is required, ensuring the target set {(X, T ) : h(X, T ) = c} has positive probability. Many classical causal estimands arise as special cases of this general formulation. For example, this includes: the average treatment effect on the treated (ATT), E[Y (1) − Y (0)|T = 1], and that on the control (ATC), E[Y (1) − Y (0)|T = 0], based on h(X, T ) = T and c = t ∈ {1, 0}; as well as subgroup-specific effects, such as E[Y (1) − Y (0)|X[j] > δ] (subgro-
ups under a specific covariate threshold, e.g., ‘Age > 60’), using h(X, T ) = 1(X[j] > δ) for a given δ and j, and c = 1. In general, ∆†
h unifies many policy-relevant subgroup effects (Hirano et al., 2003; Tao and Fu, 2019).
To explain the DRDB extension, we fix an arm t ∈ {0, 1} and consider μ†
h(t) := E[Y (t)|h(X, T ) = c]. Under the NUC assumption, we have:
μ†
h(t) = EX[m†
t (X)w†
h(X)], where w†
h(X) := P{h(X, T ) = c | X}/P{h(X, T ) = c}
is the adjustment needed to target the subpopulation defined by h, c. DRDB for μ†
h(t) then parallels that in Section 3.1, with two key adaptations: (i) the bias is defined by the weighted functional, and (ii) the retargeting step is adapted to the subgroup defined by h, c.
Bias decomposition and retargeting. Following the notation of Section 3.1, for a given nuisance draw mt ∼ Πmt(·; S–), we decompose μ†
h(t) as:
μ†
h(t) = b†
t (mt, w†
h) + EX∼S{mt(X)w†
h(X) | mt}, where:
1Email addresses: gozdesert@stat.tamu.edu (G ̈ozde Sert), abhishek@stat.tamu.edu (Abhishek Chakrabortty), anirbanb@stat.tamu.edu (Anirban Bhattacharya; corresponding author).
25

b†
t ≡ b†
t (mt, w†
h) := EX∼S[{m†
t (X) − mt(X)}w†
h(X)|mt] is the nuisance estimation bias. This equality
follows from the independence of S and S–. Under the NUC condition and the definition of w†
h(X) as above, we further obtain that:
b†
t = EX∼S [w†
h(X)E{Y (t) − mt(X)|X, T = t}] = EX∼fA[E{Y (t) − mt(X)|X, T = t}],
where A := {h(X, T ) = c} is the subgroup of interest with covariate distribution fA(X) ≡ f (X|A). This shows that correct estimation of b†
t requires access to (Y (t), X) for all units in S, but Y (t) is observed only for the subgroup St ⊂ S. To address this distributional mismatch, DRDB introduces a density ratio adjustment as follows. Let r†
h(X) := fA(X)/f (X|T = t) be the unknown density ratio, which reweights the observed treated (or control) sample to match the covariate distribution fA. Then, the bias admits the estimable representation: b†
t = E(Y,X)|T =t[r†
h(X){Y − mt(X)}|T = t].
To estimate r†
h ≡ r†
h(·), notice that Bayes’ theorem yields:
r†
h(X) = {P(A | X)P(T = t)}/{P(A)P(T = t | X)}.
This reveals that estimating r†
h requires two flexible binary regression models – for the subgroup probability P(A|X) and the treatment assignment probability P(T = t|X), avoiding explicit density estimation, along with simple point estimators for P(T = t) and P(A), similar to the discussion in Remark 4. It is also worth noting that the original ATE corresponds to the special/trivial case: P(A|X) = 1 and P(A) = 1, which simplifies the density ratio to the form (7) in Remark 4. Given one draw rh from Πrh(·; S–), the bias b†
t can be modeled using the observables rh(X){Y − mt(X)} ∈ St via the targeted modeling strategy. Once the bias is estimated, DRDB applies
hierarchical learning to model μ†
h(t) − b†
t using the weighted observables: {wh(X)mt(X)}X∈S, where
wh(·) denotes a sample from the posterior Πwh. Analogous to the estimation of r†
h, posterior samples
of wh ≡ wh(·) are obtained by fitting a flexible binary regression for P(A|X) on S–, along with a simple point estimator for P(A), similar to the procedure described in Remark 4. The details for both steps are parallel to those in Section 3.1 and are omitted for brevity. Finally, the present discussion addresses the one-arm case. The two-arm version requires a similar appropriate modification, in the above spirit, to the method of Section 3.2 via analogous joint debiasing steps. Hence, DRDB offers-
 a unified and principled framework for valid Bayesian inference across a broad class of treatment effects. The essence of this seamless extension is in expressing the target as a weighted functional and appropriately extending the original debiasing and retargeting steps.
S2 Additional simulation results: Misspecified nuisance models
To illustrate DRDB performance under model misspecification, we adapt the simulation setup from Section 5.1. The true regression function is now quadratic: m†
1(X) = 5 + 2X′β1 + (X2)′β12, where
X2 is the coordinate–wise square of X. We choose β12 to satisfy Var(2X′β1)/Var{(X2)′β12} = 3, which balances the contributions from the linear and quadratic terms. All other aspects of the data-generating mechanism and the nuisance functions remain the same as in Section 5.1. For parametric nuisance model estimators, in addition to the Gaussian linear regression employed in Section 5.1, we also consider the following Gaussian quadratic regression model: for i = 1, . . . , n,
Yi|Xi, Ti = 1, γ1, θ1, θ2, τ i.i.d.
∼ N (γ1 + X′
iθ1 + (X2
i )′θ2, τ 2) where the inclusion of (X2
i )′θ2 allows the
26

model to capture the nonlinear effects. This quadratic model represents the correctly specified nuisance setting, since the true regression function m†
1(·) is quadratic. As in Section 5.1, we fit this model using two Bayesian approaches. The Bayesian ridge quadratic regression (BR-q) extends the Bayesian ridge regression (BR) method to include quadratic terms, with Gaussian priors on (γ1, θ1, θ2) and an improper prior on τ 2, where the ridge parameter λ is estimated using an empirical Bayes approach, with the point estimate bλ obtained via the glmnet R package. Similarly, the Bayesian sparse quadratic regression (BS-q) extends the sparse Bayesia-
n linear regression (BS) method by including both linear and quadratic covariates (X, X2), while employing the same nonlocal prior structure implemented via the mombf R package. For comparison, the original linear models BS and BR, which omit the quadratic terms, represent misspecified nuisance settings, as the posterior Πm1 now contracts to a limiting function m∗1, which
may differ from the true nonlinear regression function m†
1. In contrast, the quadratic (BS-q, BR-q)
and nonparametric (BART) models correctly specify m†
1, and therefore provide consistent nuisance estimates. To distinguish between the resulting DRDB approaches, we use the following notation: DRDB-S and DRDB-R correspond to DRDB with misspecified linear nuisance models (BS and BR); DRDB-Sq and DRDB-Rq correspond to DRDB with correctly specified quadratic nuisance models (BS-q and BR-q); and DRDB-B corresponds to DRDB with the nonparametric BART model. This setup allows a clear comparison of DRDB’s performance under misspecified (DRDB-S, DRDB-R) ve-
rsus correctly specified (DRDB-Sq, DRDB-Rq, DRDB-B) nuisance models. Table S.1 reports the results for the data-generating mechanisms presented in Section 5.1. For DRDB-Sq, DRDB-Rq, and DRDB-B, where the nuisance model for m1 is correctly specified (quadratic or nonparametric), the results closely match those in Section 5.1, with low bias, low MSE, coverage probabilities near the nominal 95% level, and near-optimal credible interval (CI) lengths across all settings, supporting the theoretical prop-
erties of DRDB in Theorem 2. Examining the misspecified cases, DRDB-S and DRDB-R, which use linear models for a truly quadratic m1, estimation accuracy remains reasonable in low and moderate dimensions (p = 10 and p = 50). As dimension and sparsity increase (p = 200), bias and MSE increase modestly compared to the Oracle and correctly specified variants (DRDB-Sq, DRDB-Rq, and DRDB-B), reflecting the effects of model misspecification and finite-sample error, consistent with theoretical expectations-
. Despite misspecification, DRDB-S and DRDB-R maintain valid inference, with coverage probabilities consistently at or above the nominal 95% level across all settings. However, the CIs are consistently wider for DRDB-S and DRDB-R, compared to their correctly specified counterparts, particularly in high-dimensional settings, reflecting increased finite-sample nuisance estimation error and the effects of model misspecification. Overall, these results provide empirical support for the double robustne-
ss property of DRDB: when only one model is correctly specified, DRDB still yields reliable consistent estimation, and also valid inference, albeit with wider CIs.
S3 Preliminary results
Notational conventions. Throughout this supplement, we use the following notation. For a sequence bn > 0 and a sequence of random variables Wn, we write Wn = oP(bn) if and only
if (iff) |Wn|/bn
−P−D → 0 as n → ∞. In particular, if Wn
−P−D → 0, we denote this as Wn = oP(1). Similarly, Wn = OP(bn) iff for every ε > 0, there exist constants Bε > 0 and nε such that P(|Wn| ≤ Bε bn) > 1 − ε for all n ≥ nε. Moreover, Wn = oP(1) iff there exists a sequence bn → 0, Wn = OP(bn). Finally, we follow the standard empirical process notation (van der Vaart, 2000): For
27

Table S.1: Estimation and inference results for the ATE based on DRDB under the misspecified
nuisance model setting given in Section S2, where n = 1000, p ∈ {10, 50, 200} with s ≈ √p or
s ≈ p/4 and K = 5. For p = 10, we set s ≈ √p or s = p. Each variant of DRDB are denoted by DRDB-M, where “M” indicates the specific nuisance method and fitted model: S = BS, Sq = BS with a quadratic model, R = BR, Rq = BR with a quadratic model, and B = BART.
Method Bias MSE Cov CI-Len Bias MSE Cov CI-Len
p = 10 s = 3 s = 10 Oracle 0.000 0.009 0.948 0.371 0.005 0.023 0.950 0.617 DRDB-S 0.006 0.011 0.972 0.429 0.017 0.034 0.972 0.723 DRDB-Sq 0.000 0.009 0.944 0.380 0.004 0.025 0.962 0.642 DRDB-R 0.006 0.011 0.964 0.426 0.019 0.033 0.960 0.713 DRDB-Rq -0.001 0.009 0.952 0.385 0.003 0.026 0.942 0.643 DRDB-B -0.002 0.010 0.964 0.434 -0.001 0.033 0.968 0.789 p = 50 s = 7 s = 13 Oracle 0.003 0.019 0.940 0.539 -0.004 0.033 0.952 0.723 DRDB-S 0.017 0.026 0.940 0.628 0.018 0.046 0.952 0.860 DRDB-Sq 0.003 0.-
021 0.938 0.559 -0.003 0.035 0.960 0.760 DRDB-R 0.015 0.030 0.964 0.686 0.015 0.048 0.954 0.917 DRDB-Rq 0.001 0.024 0.964 0.657 -0.001 0.043 0.960 0.877 DRDB-B 0.001 0.027 0.962 0.693 -0.005 0.051 0.962 0.997 p = 200 s = 14 s = 50 Oracle 0.005 0.034 0.958 0.731 0.018 0.131 0.954 1.383 DRDB-S 0.010 0.046 0.970 0.873 0.049 0.227 0.976 2.187 DRDB-Sq 0.004 0.037 0.968 0.771 0.013 0.168 0.974 1.848 DRDB-R 0.050 0.064 0.982 1.215 0.089 0.248 0.986 2.308 DRDB-Rq 0.121 0.109 0.970 1.350 0.180 0.348 0.972 -
2.544 DRDB-B 0.014 0.051 0.982 1.057 0.062 0.309 0.978 2.634
any function f (·) ∈ L2(W) of the random variable W, we define the empirical mean operator on the dataset D with index set I of size N = |I| as PN {f (W)} := N −1 P
i∈I f (Wi).
Lemma S1. For i = 1, 2, let fi(·) denoted the pdfs of the corresponding distribution Pi satisfying
fi(∆) :=
Z
qi(∆ | θ) gi(θ) dθ,
where gi(·) is the pdf of the distribution P(i)
θ of θ and qi(· | θ) is the pdf of the conditional distribution
P (i)
∆|θ of ∆ given θ which belongs to a location family generated by a density ψi(·) with θ + C being the location parameter for some C ∈ R. Then,
dTV(P1, P2) ≤ dTV(P(1)
∆|θ, P (2)
∆|θ) + dTV(P(1)
θ , P(2)
θ)
Lemma S2. Let P , Q be probability distributions (pds) with densities p(·), q(·) where p(x) = (p1 ∗ p2)(x) and q(x) = (q1 ∗ q2)(x), for some pdfs pi(·), qi(·) of pds Pi, Qi for i = 1, 2, and ∗ denotes the convolution operator. Then, dTV(P, Q) ≤ dTV(P1, Q1) + dTV(P2, Q2).
28

Lemma S3. Let θ = η − β with η ⊥⊥ β. For i = 1, 2, let η(i) ∼ P(i)
η and β(i) ∼ P(i)
β be independent,
define θ(i) := η(i) − β(i) with law P(i)
θ = P (i)
η ∗ P (i)
−β. Suppose the conditional laws P(i)
∆|θ admits
densities qi(∆ | θ) belonging to a location family generated by ψi, i.e., qi(∆ | θ) = ψi(∆ − θ − C), for a fixed C ∈ R. Let Pi denote the distribution of ∆ with density fi(∆) = R qi(∆ | θ) gi(θ) dθ,
where gi is the density of P(i)
θ for i = 1, 2. Then,
dTV(P1, P2) ≤ dTV(P(1)
η , P(2)
η ) + dTV(P(1)
β , P(2)
β ) + dTV(P(1)
∆|θ, P (2)
∆|θ ).
Lemma S4 (Nuisance contraction rates). Under Assumption 2 and the setups of Theorems 1 and 2,
∥mt(X) − m∗
t (X)∥L2(PX) = OPmt (εm,n) and
∥rt(X) − r∗
t (X)∥L2(PX) = OPrt (εr,n).
where for t = 0, 1, mt∗(·) and rt∗(·) are non-random limiting functions around which the nuisance posteriors Πmt and Πrt contract, respectively.
Lemma S5 (Convergence of posterior variance of Πμ1.). Under the assumptions and setup of Theorem 1, and assuming that Case C1 holds, the posterior variance cˆ2n(m1, r1) of Πμ1 converges in
probability to the variance c2(m†
1, r†
1) of the limiting distribution at rate 1/n:
n cˆ2
n(m1, r1) − c2(m†
1, r†
1) = oP(1). (S.1)
Corollary S1 (Convergence of posterior variance of Π∆.). Under the assumptions and setup of Theorems 1–2, and Case C1, the posterior variance cˆ2n(m, r) of Π∆ converges in probability to the
variance c2(m†, r†) of the limiting distribution at rate 1/n:
n cˆ2
n(m, r) − c2(m†, r†) = oP(1). (S.2)
S4 Proofs of the main results
Proof of Propositions 1 and 2. Both results follow directly from Bayes’ theorem, applied to the Normal likelihood with an improper prior on the mean and variance parameters, which yields a t-distribution for the posterior of the mean. Since both propositions rely on Normal likelihoods with the same form of prior, we present a unified proof. For notational simplicity, let η be a sample from the nuisance posterior Πη and define W (Z, η) as the observable from the data L with N = |L|. For Proposition-
 1, we have η = (mt, rt), W (Z, η) = W (Z, mt, rt) = rt(X){Y − mt(X)} and L = St for t = 0, 1 where Z = (Y, X). For Proposition 2, we have η = φ, W (Z, η) = W (Z, φ) = φ(X) and L = S where Z = X. In both settings, the observables W (Zi, η) are modeled as W (Zi, η)|δ, τ 2, η ∼ N (δ, τ 2) for i = 1, . . . , N , with improper prior π(δ|τ 2) ∝ 1, π(τ 2) ∝ (τ 2)−1. By Bayes’ theorem, the joint posterior for (δ, τ 2) is given by:
π(δ, τ 2|L) ∝ 1
(τ 2)N/2 exp
"
−1
2τ 2
N
X
i=1
{W (Zi, η)}2
#
(τ 2)−1
29

∝1
(τ 2)N/2+1 exp − S + N (δ − W )2
2τ 2 ,
where the parameters are defined as W := N −1 PN
i=1 W (Zi, η) and S := PN
i=1{W (Zi, η) − W }2.
By integrating out τ 2, we obtain the marginal posterior of δ: π(δ|L) ∝ (S + N (δ − W )2)−N/2. Notably, this expression has exactly the kernel of a t-distribution. Therefore, δ|L ∼ tν(θ, c2) where the degrees of freedom ν = N − 1, the location parameter θ = W and the scale parameter c2 = S/{N (N − 1)}, which establishes the desired result. For additional derivation details, we refer to Section 3.2 of Gelman et al. (2014).
Proof of Theorem 1. We divide the proof of Theorem 1 into two parts. First, we establish the Bernstein-von Mises (BvM) result under the correct specification of both nuisance models. Subsequently, we present a unified proof of the posterior concentration result when only one of the nuisance models is correctly specified.
Proof of the BvM result: Let μ(1)
1 , . . . , μ(K)
1 be independent samples from the corresponding
posteriors {Π(k)
μ1 }kK=1. Define the random variable μ ̃1 := PK
k=1 μ(k)
1 and let eΠμ1 denote its posterior. By the location-scale invariance of TV distance, proving the BvM result in Theorem 1 is equivalent
to showing that dTV Πe μ1, N (Kμ1(m†
1, r†
1), K2c2(m†
1, r†
1)) −P−D → 0 as n → ∞.
Since μ(1)
1 , . . . , μ(K)
1 are independent, by construction, eΠμ1 is the convolution of Π(1)
μ1 , . . . , Π(K)
μ1 .
By Lemma S2, we have
T := dTV Πe μ1 , N (Kμ1(m†
1, r†
1), K2c2(m†
1, r†
1)) ≤ T1 + · · · + TK,
where, for k = 1, . . . , K, Tk := dTV Π(k)
μ1 , N (μ(k)
1 (m†
1, r†
1), c2,(k)(m†
1, r†
1)) is the TV distance
between the DRDB posterior Π(k)
μ1 based on the k-th split (Dk, D
k) and the corresponding limiting
distribution N (μ(k)
1 (m†
1, r†
1), c2,(k)(m†
1, r†
1)), with parameters analogously to those in Equation 19 in
Section 4.2. Thus, the proof of Theorem 1 (a) reduces to showing Tk
−P−D → 0 for each k ∈ {1, . . . , K}. Roadmap of the BvM proof. The proof proceeds by replacing the conditional and marginal posteriors Πμ1|b1 and Πb1, shown in Propositions 1 and 2 to be t-distributions with Gaussian proxies Qμ1|b1 and Qb1 that share their location and scale parameters. This yields a Gaussian marginal posterior Qμ1 for μ1. By adding and subtracting Qμ1, we decompose T1 in (S.3) into two terms R and T as given in (S.3). The term T , comparing two Gaussians, reduces to bounding dif-
ferences in means and variances, which follow from Corollary 1 and Lemma S5. The main challenge lies in controlling R, which arises from the hierarchical structure of Πμ1 as defined in (11), where the TV distance itself involves an embedded integral. Traditional approaches for controlling such distances usually necessitate strong, often impractical, constraints on the prior or posterior. However, this is precisely where the strengths of our debiasing mechanism and targeted modeling strategy become-
 essential. More specifically, since the bias b1 appears is a part of the location parameter in both Πμ1|b1 and Qb1, we can further bound R as a sum of two TV distances between Normal and t-distributions with matched centers and scales, referring to (S.5). This allows us to exploit known TV distance bounds between Normal and t-distribution pairs. The remainder of the proof follows by carefully applying Assumptions 1 and 2, along with several key preliminary results from Section S3. Below, we prese-
nt a detailed and rigorous argument for each step.
30

Without loss of generality, we take k = 1. Set S := D1 with nS := |S| = n/K and S– = D \ D1. We prove the case k = 1, as other cases follow by the same argument.
For notational simplicity, we drop the superscript in N (μ(1)
1 (m†
1, r†
1), c2,(1)(m†
1, r†
1)) and Π(1)
μ1
and accordingly, write T1 = dTV Πμ1, N (μ1(m†
1, r†
1), c2(m†
1, r†
1)) . The first step of the proof is to
replace the posteriors Πμ1|b1 and Πb1 with Normal distributions whose location and scale parameters match those of their corresponding t-distribution forms. Under this substitution, the marginal posterior for μ1 becomes a Normal distribution constructed in direct analogy to Step (6). Specifically, define Qμ1|b1 := N (ηS, c2
S) and Qb1 := N (η1, c21), where the parameters are given in (14) and (16).
Then, the marginal distribution for μ1 is Qμ1 = N (η1 + ηm1, c21 + c2
S) := N (μ1(m1, r1), c2(m1, r1)) with parameters defined analogously to those in Section 4.1. By the triangle inequality,
T1 ≤ dTV (Πμ1 , Qμ1 ) + dTV(Qμ1 , N (μ1(m†
1, r†
1), c2(m†
1, r†
1))) := R + T. (S.3)
Analysis of T = dTV(Qμ1, N (μ1(m†
1, r†
1), c2(m†
1, r†
1))). Since both distributions are Normal, we obtain the following upper bound for T : For some universal constant C < ∞,
T ≤ C c2(m1, r1) − c2(m†
1, r†
1)
c2(m†
1, r†
1)
+ μ1(m1, r1) − μ1(m†
1, r†
1)
q
c2(m†
1, r†
1)
:= CV (m1, r1) + Ω(m1, r1). (S.4)
Since
q
nS c2(m†
1, r†
1) ≥ δ for some δ > 0 by definition, the analysis of Ω(m1, r1) reduces to
showing that √nS {μ1(m1, r1) − μ1(m†
1, r†
1)} → 0 in PD-probability. Further, since μ1(m1, r1)
is the mean of Πμ1, Corollary 1 and its proof applied to the test-training pair (S, S–) yields
|√nS{μ1(m1, r1) − μ1(m†
1, r†
1)}| = oPD (1), establishing the claim.
A similar argument applies to V (m1, r1). Since nS c2(m†
1, r†
1) ≥ δ > 0 by definition, establishing
V (m1, r1) = oPD (1) is equivalent to showing nS {c2(m1, r1) − c2(m†
1, r†
1)} → 0 in PD-probability.
This follows directly from Lemma S5 applied to (S, S–), in complete analogy with the posterior variance case. Thus, n {c2(m1, r1) − c2(m†
1, r†
1)} = oP(1). Combining these results with inequality in (S.4), we conclude that T → 0 in probability under PD. Analysis of R := dTV (Πμ1, Qμ1).
Using the construction of the DRDB posterior Πμ1 and the distribution Qμ1, we note that the location parameter l(b1) of both Πμ1|b1 and Qμ1|b1 are equivalent. In both cases, it has the form
b1 + ω for some ω ∈ R given the data (S, S–), specifically, l(b1) := b1 + ηm1. Hence, by directly applying Lemma S1, we obtain the decomposition:
R ≤ dTV(Qμ1|b1 , Πμ1|b1 ) + dTV(Qb1 , Πb1 ) := R2 + R1. (S.5)
Moreover, by construction, Qμ1|b1 and Qb1 are Normal distributions whose location and scale parameters match those of Πμ1|b1 and Πb1, as given in Section 4.1. By the location-scale invariance of the TV distance (refer to Lemma S4.1 of Sert et al. (2025)) applied to both R2 and R1, we have
R2 = dTV(tνS (ηS, c2
S), N (ηS, c2
S)) = dTV(N (0, 1), tνS (0, 1)); and
31

R1 = dTV tν1 (η1, c2
1), N (η1, c2
1) = dTV (N (0, 1), tν1(0, 1)) .
By directly applying Lemma S4.4 from Sert et al. (2025), which gives an explicit bound for the TV distance between a Normal and a t distribution with matching location and scaling parameters, we
obtain that for universal some constants C1, CS < ∞, R1 ≤ C1/√ν1 and R2 = CS/νS. Note that as n → ∞, for fixed K, νS → ∞ by definition, which implies R2 → 0. Moreover, by
definition, ν1 = n1 − 1 = Pn
i=1 Ti − 1. Defining pen := n−1
S
P
i∈I Ti, we can rewrite ν1 = nSpen − 1. As n → ∞ with K fixed, we have pen → p1 = P(T = 1) in PD-probability with p1 > 0 by Assumption 1. Thus, as n → ∞, ν1 → ∞ which in turn implies R1 → 0 in probability. Combining this with the convergence in probability result for T , and recalling that T1 is bounded by the sum of T and R, we conclude that T1 → 0 in probability under PD. Following the same steps and applying the same proof strategy, we obtain for each k = 1, . . . , K,
Tk
−P−D → 0, which finally establishes the BvM result stated in Theorem 1.
Proof of posterior contraction results. For brevity, we provide a unified proof covering both one-correctly-specified nuisance cases: either the regression function is well-specified (Case C2: m∗1 = m†
1) or the density ratio is well-specified (Case C3: r1∗ = r†
1). The argument is identical in both cases, with the contraction rate set to εn = εm,n in Case C2 and εn = εr,n in Case C3. First, by the construction of μ1CF in (8), for any ε > 0 and fixed K < ∞, we have:
ΠCF
μ1 |μ1 − μ†(1)| > Kε|D ≤ Π(1)
μ1 |μ1 − μ†(1)| > ε|D + · · · + Π(K)
μ1 |μ1 − μ†(1)| > ε|D .
This decomposition suggests that it suffices to prove the desired result for Π(k)
μ1 |μ1 − μ†(1)| > ε | D for an arbitrary k ∈ {1, . . . , K}. By suppressing the superscript for simplicity, to show posterior contraction results in Theorem 1, we aim to prove that, for any Mn → ∞, Πμ1 |μ1 − μ†(1)| > Mnεn | D → 0, in PD-probability, where εn > 0 denotes the contraction rate of the correctly specified nuisance parameter. In particular, εn = εm,n in Case C2, and εn = εr,n in Case C3. Let μb1 ≡ μ1(m1, r1) denote the posterior mean of Πμ1. By the triangle inequality, we obtain that:
Πμ1 |μ1 − μ†(1)| > 2Mnεn|D ≤ Πμ1 |μ1 − μb1| > Mnεn|D
+ Πμ1 |μb1 − μ†(1)| > Mnεn|D
:= V (m1, r1, S) + D(m1, r1, S),
where S = Dk for some k ∈ {1, . . . , K}. Thus, it suffices to establish that both terms V (m1, r1, S) and D(m1, r1, S) converge to zero in probability.
First, note that the second probability D(m1, r1, S) is the indicator of the event {|μb1 − μ†(1)| >
Mnεn}. In Corollary 1 (b), applied to the split (S, S–) = (Dk, D
k) with properly adjusting the
parameters, we have already established that the posterior mean μb1 converges to μ†(1) at the rate εn, where εn = εm,n in Case C2, and εn = εr,n in Case C3. Hence, Corollary 1 (b) directly gives:
D(m1, r1, S) → 0 in probability under PD. (S.6)
Next, consider the first probability V (m1, r1, S). By Chebyshev’s inequality,
V (m1, r1, S) ≡ Πμ1 |μ1 − μb1| > Mnεn | D ≤ (Mnεn)−2Var(μ1 | D). (S.7)
32

Thus, since Mn → ∞, it suffices to show that Var(μ1 | D) = OP(δ2n) under both Cases C2 and C3 where δn → 0 faster than or equal to εn. To this end, recalling the construction of the posterior Πμ1 in Section 3.1 with parameters given in Section 4.1, we explicitly calculate the posterior variance cˆ2n(m1, r1). Specifically, given m1 ∼ Πm1 and r1 ∼ Πr1, and W (Z, m1, r1) := r1(X){Y − m1(X)}, we obtain:
cˆ2
n(m1, r1) = nS
nS − 2 c2
S + n1
n1 − 2 c2
1 := λnc2
S + λn1 c2
1
= λn
nS(nS − 1)
X
i∈I
{m1(Xi) − ηm1 }2 + λn1
n1(n1 − 1)
X
i∈I1
{W (Zi, m1, r1) − η1}2,
where nS = |I|, n1 = |I1|, λn = nS/(nS − 2), λn1 = n1/(n1 − 2), and n1 = P
i∈I1 Ti.
Since nS → ∞ (as K is fixed), we have λn → 1. Moreover, since n1/n → p1 ∈ (0, 1), we obtain λn1 → 1 in PD-probability; in particular, λn1 = OP(1). Next, for the first component c2
S, we observe that for any t > 0, Markov’s inequality
PS (c2
S > t|m1) ≤ t−1 ES(c2
S|m1) = n−1
S VarX{m1(X)|m1} ≤ n−1
S EX{m2
1(X)|m1},
where the equality in the first step follows from the definition of c2
S.
To bound EX{m21(X) | m1}, we write m1(X) = {m1(X) − m∗1(X)} + m∗1(X). Then, the inequality
(a + b)2 ≤ 2a2 + 2b2 gives EX{m21(X)|m1} ≤ 2∥m1(X) − m∗1(X)∥2
L2(PX) + 2∥m∗1(X)∥2
L2(PX). Since
∥m1(X) − m∗1(X)∥L2(PX) = OP(εm,n) by Lemma S4 and ∥m∗1(X)∥L2(PX) < ∞ by Assumption 2, we
obtain EX{m21(X) | m1} = OP(εm,n) + O(1). Thus, applying Lemma S4.6 of Sert et al. (2025) to
upgrade from the conditional bound to an unconditional one, we obtain c2
S = OP(n−1
S ), as εm,n → 0. Since λn = nS/(nS − 2) → 1 and K < ∞ is fixed, we conclude that:
nS
nS − 2 c2
S = OP(n−1). (S.8)
For the treated component, we write c21 = σb12/n1, where σb12 = P
i∈I1 {W (Zi, m1, r1) − η1}2/(n1 − 1)
and n1 = nSpen with pen
−P−D → p1 ∈ (0, 1) under Assumption 1. Hence 1/n1 = OP(n−1) as n → ∞ (since K < ∞ is fixed). Then, for any t > 0, Markov’s inequality yields:
PS (σb2
1 > t | m1, r1) ≤ t−1 ES(σb2
1 | m1, r1) = t−1 VarZ|T =1{W (Z, m1, r1) | m1, r1}
≤ t−1 E(Y,X)|T =1 r2
1(X){Y − m1(X)}2 , (S.9)
where we omit the conditioning argument in the last step for notational simplicity. By the triangle inequality, we decompose E(Y,X)|T =1 r21(X){Y − m1(X)}2 = Er + Em, where:
Er := ES1 {r2
1(X) − r∗2
1 (X)}{Y − m∗
1(X)}2 , and
Em := ES1 r2
1(X) {Y − m∗
1(X)}2 − {Y − m1(X)}2 .
For Er, by Assumption 2, Γ2m = supx E[{Y − m∗1(X)}2|X = x] < ∞, and using Assumption 1, we obtain that: by the Cauchy–Schwarz (CS) inequality,
Er ≤ Γ2
m ∥r1(X) − r∗
1(X)∥L2(PX) {∥r1(X) − r∗
1(X)∥L2(PX) + 2∥r∗
1 (X)∥L2 (PX ) }.
33

Since ∥r1∗(X)∥L2(PX) < ∞, and by Lemma S4, we have:
Er = OP(εr,n). (S.10)
For the Em term, we first obtain the following identity
Em = 2ES1 r2
1(X){m1(X) − m∗
1(X)}{Y − m∗
1(X)} − ES1 r2
1(X){m1(X) − m∗
1(X)}2 .
By the CS inequality and Assumptions 1 and 2, we have:
ES1 r2
1(X){m1(X) − m∗
1(X)}{Y − m∗
1(X)}
≤ Γm∥r1(X)∥2
L∞(PX)∥m1(X) − m∗
1(X)∥L2(PX),
and similarly, EX r21(X){m1(X) − m∗1(X)}2 ≤ ∥r1(X)∥2
L∞(PX)∥m1(X)−m∗1(X)∥2
L2(PX). By Assumption 2,
together with Lemma S4, we therefore conclude that:
Em = OP(εm,n) + OP(ε2
m,n) = OP(εm,n). (S.11)
Combining (S.10) and (S.11), and applying Lemma S4.6 of Sert et al. (2025) to upgrade from conditional to unconditional statements, we obtain σb12 = OP(εm,n) + OP(εr,n) = OP (max{εm,n, εr,n}).
Since 1/n1 = OP(n−1) by construction, it follows that:
c2
1 = σb12
n1
= OP n−1εm,n + OP n−1εr,n = OP n−1 max{εm,n, εr,n} . (S.12)
Together with (S.8), which gives nS
nS −2 c2
S = OP(n−1), and recalling that λn = nS/(nS − 2) = OP(1) and λn1 = n1/(n1 − 2) = OP(1), we conclude that:
cˆ2
n(m1, r1) = OPD (n−1) + OPD n−1 max{εm,n, εr,n} = OPD (n−1), (S.13)
where the last equality uses εm,n → 0 and εr,n → 0 by Assumption 2. Finally, recalling the inequality given in (S.7), and setting εn = εm,n in Case C2 and εn = εr,n in Case C3, and combining with (S.13), we obtain V (m1, r1, S) → 0 in probability under PD. This completes the proof of the posterior contraction at rate εn, with εn = εm,n in Case C2 and εn = εr,n in Case C3; that is, whenever only one of the two nuisance models is correctly specified.
Proof of Theorem 2. The argument proceeds similarly to the proof of Theorem 1 with the necessary modifications. We first establish the proof of the BvM result in Theorem 2, and then provide a unified proof for the posterior contraction statements therein. Proof of the BvM result:
Roadmap of the BvM proof: The overall proof strategy follows the same structure as that of Theorem 1, with one additional step where our methodology plays a crucial role. In the extended DRDB framework, the bias involves joint learning of the individual bias components. However, thanks to our targeted modeling approach and efficient use of the data, we can express this joint posterior as a product of the individual bias posteriors (refer to (10)). This key simplification enables us to decompose th-
e TV distance into terms corresponding to each component and to bound them using known results on the TV distance between Normal and t-distributions, as shown in (S.15). The remainder of the proof then proceeds analogously to the argument in Theorem 1.
34

By recalling the construction of ∆CF with its posterior ΠCF
∆ presented in Section 3.2, and
applying Lemma S2, it suffices to prove the BvM result for a single test-training split (Dk, D
k) for any k ∈ {1, . . . , K} with corresponding Normal limiting distribution. Specifically, for a fixed k, we aim to show:
dTV Π(k)
∆ , N ∆(k)(m†, r†), c2,(k)(m†, r†) −P−D → 0, as n → ∞,
where Π(k)
∆ denotes the posterior of ∆ obtained by applying the DRDB procedure to (Dk, D
k), and
∆(k)(m†, r†) and c2,(k)(m†, r†) are the mean and variance, defined analogously to (20) in Section 4. For notational simplicity, we suppress the superscript (k) and define S := Dk and S– := D
k, adopting the notational conventions of Sections 3 and 4. Under this convention, we want to show:
T := dTV Π∆, N ∆(m†, r†), c2(m†, r†) −P−D → 0.
The key idea of the proof is to replace the t-distributions used in constructing the posterior Π∆ in (11) by Normal distributions with matching center and scale. Specifically, set Q∆|b := N (ηS, c2
S)
and Qb := N (b1; η1, c21) ∗ N (b0; −η0, c20) where the parameters are define analogous to Section 4.1
based on S with m ∼ Πm(·; S–) and r := (r0, r1) where rt ∼ Πrt(·; S–) for t = 0, 1. By the conditional independence structure (given the nuisance posterior draws (m, r1) where S ⊥⊥ m and S ⊥⊥ rt for t = 0, 1) detailed in Section 3.2, the posteriors for b1 and b0 are independent, and since b = b1 − b0, the Normal distribution Qb is well-defined as the convolution above. Then, let Q∆ denote the marginal distribution and is equal to:
Q∆ = N (ηS + η1 − η0, c2
S + c2
1 + c2
0) := N (∆(m, r), c2(m, r)).
By using the triangle inequality,
T ≤ dTV Π∆, Q∆ + dTV Q∆, N ∆(m†, r†), c2(m†, r†) := R + T. (S.14)
Analysis of R. By the construction of Π∆ in Section 3.2 and the independence of Πb1 and Πb0, a direct application of Lemma S3 yields:
R ≤ dTV Π∆|b, Q∆|b + dTV Πb1 , Qb1 + dTV Πb0 , Qb0 =: R1 + R2 + R3. (S.15)
Note that R1, R2, R3 represent TV distances between t and Normal distributions with matching centers and scales. Applying the known bound for the TV distance between t and Normal distributions with matching centers and scales given in Lemma S4.4 of Sert et al. (2025), we obtain R1 ≤ C1/νS, R2 ≤ C2/ν1 and C3/ν0 for universal constants C1, C2, C3 < ∞. Since K is fixed, νS = nS − 1 → ∞ as n → ∞, hence R1 = O(n−1). Also, since ν1 = n1 − 1 with
n1 = |S1| = P
i∈I1 Ti = nSpen and pen
−P−D → p1, where p1 = P(T = 1) > 0 by Assumption 1, we have R2 = OP(n−1) for fixed K. An identical argument, with p0 := 1 − p1 > 0, gives R3 = OP(n−1). This implies that R converges to 0 in probability under PD. Analysis of T . Since T is the TV distance between two Normal distributions, standard known bounds yield: for some universal constant C < ∞,
T ≤ C nS{c2(m, r) − c2(m†, r†)}
nSc2(m†, r†) +
√nS{∆(m, r) − ∆(m†, r†)}
q
nS c2 (m†
1, r†
1)
. (S.16)
35

Since nSc2(m†, r†) > δ > 0 by definition, it suffices to show both Ω(m, r) := √nS{∆(m, r) − ∆(m†, r†)} and V (m, r) := nS{c2(m, r) − c2(m†, r†)} tend to zero in probability under PD. For Ω(m, r), since ∆(m, r) is the posterior mean of Π∆(·; S), applying Corollary 1 to the pair (S, S–) with fixed K < ∞ and under correct specification of both nuisance models (Case C1 in Theorem 2) yields Ω(m, r) = oP(1), hence equivalently, Ω(m, r) → 0 in PD-probability. Similarly, by using Lemma S5 and Corollary S-
1 for the single-split (S, S–) with fixed K < ∞ and under Case C1, we obtain V (m, r) = oP(1), which means V (m, r) → 0 in PD-probability. Combining these results with the bound obtained in (S.14), we conclude that T → 0 in probability under PD, completing the proof of the BvM result in Theorem 2. Proof of posterior contraction results. Instead of presenting two separate proofs, we provide unified arguments that address both Cases C2 and C3, i.e., the settings in which only one nuisance model is c-
orrectly specified. The proof leverages the definition of ∆CF and the construction of the posterior ΠCF
∆ . Specifically, for any ε > 0 and fixed K < ∞, we have:
ΠCF
∆ |∆ − ∆†| > Kε | D ≤ Π(1)
∆ |∆ − ∆†| > ε | D + · · · + Π(K)
∆ |∆ − ∆†| > ε | D .
Using this decomposition, to establish posterior contraction results in Theorem 2, for any k ∈
{1, . . . , K}, it suffices to show that for every Mn → ∞, Π(k)
∆ (|∆ − ∆†| > Mnεn | D) converges to 0 in PD-probability, where εn > 0 is the contraction rate of the correctly specified nuisance model. In particular, εn = εm,n in Case C2, and εn = εr,n in Case C3. For simplicity, we omit the superscript and set the test-training pair as (S, S–) := (Dk, D−
k ). Let
∆b = ∆(m, r) be the posterior mean of Π∆. The triangle inequality gives:
Π∆ |∆ − ∆†| > 2Mnεn|D ≤ Π∆ |∆ − ∆b | > Mnεn|D + Π∆ |∆b − ∆†| > Mnεn|D
:= V (m, r, S) + D(m, r, S).
Firstly, note that the probability D(m, r, S) is the indicator of the event {|∆b − ∆†| > Mnεn}. By applying Corollary 1 to the split (S, S–) with proper parameter adjustments, we conclude that:
D(m, r, S) → 0 in probability under PD. (S.17)
Secondly, since ∆b is the mean of the posterior Π∆, applying Chebyshev’s inequality yields that V (m, r, S) ≡ Π∆(|∆ − ∆b | > Mnεn|D) ≤ (Mnεn)−2 Var(∆|D). Hence, since Mn → ∞, it suffices to show Var(∆|D) = OP(δ2n) under both Cases C2 and C3, where δn → 0 at a rate faster than or equal to εn. By the analysis in the proof of Corollary S1 and adopting the notation therein, we write the posterior variance cˆ2(m, r) := Var∆(∆ | D) as:
cˆ2(m, r) = nS
(nS − 2)
P
i∈I {m(X) − ηm}2
nS(nS − 1) + n1
(n1 − 2)
P
i∈I1 {W (Zi, m1, r1) − η1}2
n1(n1 − 1)
+ n0
(n0 − 2)
1
n0(n0 − 1)
X
i∈I0
{U (Zi, m0, r0) − η0}2 := λnc2
S + λn1 c2
1 + λn0 c2
0,
where m(·) = m1(·) − m0(·), W (Z, m1, r1) := r1(X){Y − m1(X)} and U (Z, m0, r0) := r0(X){Y − m0(X)} and λn = nS/(nS − 2) and λt = nt/(nt − 2) for t = 0, 1 and Z = (Y, X).
36

By Assumption 1 and its definition, as K < ∞ fixed, it is clear that λn = O(1) and λt = OP(1) for t ∈ {0, 1}. For detailed arguments, we refer to the proof of Theorem 1. Thus, it is enough to show ct2 = OP(δn) for t ∈ {S, 0, 1}.
For c2
S , following the conditional probability argument, Markov’s inequality yields:
P(c2
S > t | m) ≤ t−1 E(c2
S | m) = n−1
S VarX{m(X) | m} ≤ n−1
S EX{m2(X) | m}
≤ n−1
S2
n
∥m(X) − m∗(X)∥2
L2(PX) + ∥m∗(X)∥2
L2(PX)
o
,
where the equality in the first line follows from the construction of c2
S and m∗ is the limiting function at which the nuisance posterior Πm contracts. Since ∥m(X)−m∗(X)∥L2(PX) = OP(εm,n) by Lemma S4 and ∥m∗(X)∥L2(PX) < ∞ by Assumption 2, we apply Lemma S4.6 of Sert et al. (2025) allow us to go from the conditional statement to an unconditional one. As K < ∞ is fixed and by definition of nS, this yields:
c2
S = OP(n−1
S ) =⇒ nS
nS − 2 c2
S = OP(n−1). (S.18)
The analysis of c21 follows from the same steps as in the proof of Theorem 1, specifically through Steps (S.9)–(S.12). To avoid repetition, we omit details here and refer to the corresponding parts of the proof of Theorem 1. Therefore, we conclude that:
n1
n1 − 2 c2
1 = OP n−1 max{εm,n, εr,n} . (S.19)
Using analogous arguments from Steps (S.9)–(S.12), now applied to the control group S0 with (m0, r0) (by symmetry between the constructions of c20 and c21), we also obtain:
n0
n0 − 2 c2
0 = OP n−1 max{εm,n, εr,n} . (S.20)
Combining (S.18)–(S.20), since both εm,n and εr,n tends to zero as n → ∞, we have:
cˆ2(m, r) = OPD (n−1) + OPD n−1 max{εm,n, εr,n} = OPD (n−1). (S.21)
Combining (S.17) and (S.21), we obtain that for either εn = εm,n or εn = εr,n, the posterior Π∆ contracts around ∆† at rate εn, where εn is the contraction rate of the well-specified model.
Proof of Corollary 1. By construction of the final DRDB posterior ΠCF
∆ in (8) and linearity of expectation, the posterior mean, denoted by μb1(m1, r1), is given by:
μb1(m1, r1) = 1
K
K
X
k=1
μb(k)
1 (m(k)
1 , r(k)
1 ),
where μb(k)
1 (m(k)
1 , r(k)
1 ) is the posterior mean of Π(k)
∆ , with m(k)
1 and r(k)
1 denoting nuisance posterior
draws from Π(k)
m1 and Π(k)
r1 , respectively, for k = 1, . . . , K.
Since K < ∞ is fixed, it suffices to establish the results of Corollary 1 for each μb(k)
1 based on a
split (Dk, D
k), k = 1, . . . , K. Since the arguments are identical across k by the construction of the
DRDB procedure, for brevity, we present the proof for one posterior mean μb(k)
1.
37

Fix k ∈ {1, . . . , K} and set the test-training pair (S, S–) = (Dk, D
k) with index sets (I, I–) and nS := |I| as in Section 3. For notational simplicity, we drop the superscript (k) and denote the
posterior mean μb1 := μb(k)
1 (m(k)
1 , r(k)
1 ).
Let S1 denote the treated subdata of the test data S with sample size n1. From the construction of the DRDB posterior Πμ1, the posterior mean μb1 ≡ μb1(m1, r1) can then be computed explicitly as:
μb1 = ηm1 + η1 := 1
nS
nS
X
i=1
m1(Xi) + 1
n1
X
i∈I1
r1(Xi){Yi − m1(Xi)},
where m1 ∼ Πm1(·; S–) and r1 ∼ Πr1(·; S–). Then, the mean μ1(m∗1, r1∗) of the limiting Gaussian distribution in Theorem 1 can be expressed as
μ∗
1 ≡ μ1(m∗
1, r∗
1) = 1
nS
nS
X
i=1
m∗
1(Xi) + 1
nS
nS
X
i=1
r1∗(Xi)
p1
Ti{Yi − m∗
1(Xi)}
= PnS m∗
1(X) + 1
p1
PnS r∗
1(X)T {Y − m∗
1(X)} ,
where m∗1 and r1∗ are the deterministic limiting functions to which the nuisance posteriors Πm1 and
Πr1 contract. When both nuisance models are correctly specified (Case C1), m∗1 = m1 and r1∗ = r1, corresponding to their true nuisance functions. Similarly, μb1 can be rewritten as:
μb1 = 1
nS
nS
X
i=1
m1(X) + 1
n−1
S
PnS
i=1 Ti
1
nS
nS
X
i=1
r1(Xi)Ti{Yi − m1(Xi)}
= PnS (m1(X)) + 1
pen
PnS (r1(X)T {Y − m1(X)})
"
with pen := 1
nS
nS
X
i=1
Ti
#
.
Then, the posterior mean μb1 admits the following generalized decomposition:
μb1 − μ∗
1 = PnS {m1(X) − m∗
1(X)}
(
1 − T r†
1(Xi)
p1
)!
+ PnS {Y − m†
1(X)}T r1(X)
pen
− r1∗(X)
p1
+ PnS {m1(X) − m∗
1(X)}T r1(X)
pen
− r1∗(X)
p1
+ PnS {m∗
1(X) − m†
1(X)}T r1(X)
pen
− r1∗(X)
p1
+ PnS {m1(X) − m∗
1(X)}T
(
r†
1(X)
p1
− r1∗(X)
p1
)!
:= R1 + R2 + R3 + R4 + R5. (S.22)
Notice that under the correct specification of nuisance models (Case C1), we have R4 = 0 and R5 = 0. By definition, R4 = 0 also holds in Case C2 (m∗1 = m†
1), while R5 = 0 holds in Case C3
(r1∗ = r†
1). Moreover, in all three cases (C1–C3), R∗ := μ∗1 − μ†(1) can be viewed as the sample
average of centered i.i.d. random variables, implying that R∗ = OP(n−1/2) (as K < ∞ is fixed).
38

Case C1: m∗1 = m†
1 and r1∗ = r†
1. Then, R4 = 0 and R5 = 0. To prove Corollary 1 (a)(i), it suffices–by the dominated convergence theorem (DCT), or equivalently Lemma S4.6 of Sert et al. (2025), and using the independence condition S ⊥⊥ S– (in particular, S ⊥⊥ (m1, r1)) – to verify that
the conditional probabilities of R1, R2, and R3 converge to zero in probability 1. Analysis of R1. We first note that E(R1|m1) = 0 by the definition of r1(·). Then, for any t > 0, Chebyshev’s inequality gives:
PS(|R1| > t|m1) ≤ t−2n−1
S VarS({m1(X) − m†
1(X)}{1 − T r†
1(X)/p1}|m1)
= t−2n−1
S ES({m1(X) − m†
1(X)}2{1 − T r†
1(X)/p1}2|m1)
≤ Mr t−2n−1
S ∥m1(X) − m†
1(X)∥2
L2(PX),
where Mr < ∞ follows from the definition of r†
1(X) and p1 and by Assumption 1. Next, by Lemma S4.6 of Sert et al. (2025) and Lemma S4, as K < ∞ is fixed, we conclude that:
R1 = OP n−1/2
S εm,n . (S.23)
Also, as K is fixed, by Assumption 2 and the DCT, √nR1 = oP(1), yielding the result. Analysis of R2. Note that R2 is not the average of independent random variables, since each summand depends on the common factor pen. Yet, the summands are identically distributed, which will simplify subsequent calculations. We first establish that E(R2|m1) = 0 to use Chebyshev’s inequality. Since r1 ⊥⊥ S, we, for notational simplicity, suppress explicit conditioning on r1 in the expectation. Then, we can write:
ES(R2|r1) ≡ ES(R2) = ES PnS {Y − m†
1(X)} T r1(X)
pen
− ES {Y − m†
1(X)} T r1∗(X)
p1
= ES PnS {Y − m†
1(X)} T r1(X)
pen
, (S.24)
where the last step follows from the NUC condition in Assumption 1. Thus, it remains to show that the first term in (S.24) is zero, which will establish ES(R2|r1) ≡ ES[R2] = 0. Towards that, define Tn := (T1, . . . , TnS ) and Xn := (X1, . . . , XnS ). Then, we have:
ES PnS {Y − m†
1(X)}T r1(X)
pen
= n−1
SE E
" nS
X
i=1
{Yi(1) − m†
1(Xi)}Ti
r1(Xi)
pen
| Tn, Xn
#!
= n−1
SE 1
pen
nS
X
i=1
E
h
{Yi(1) − m†
1(Xi)}Tir1(Xi) | Xi, Ti
i
!
= E r1(X1)
pen
E
h
{Y1(1) − m†
1(X1)} | X1, T1 = 1
i
= 0,
1The same proof techniques with conditioning arguments, along with the independence between nuisance posterior draws and the test data S, is applied repeatedly in subsequent proofs; for brevity, we will not restate them each time.
39

since the inner expectation in the last step is zero by the NUC condition in Assumption 1. This proves that E(R2 | r1) = 0, as desired.
Next, define W (Z, r1) := r1(X)T {Y − m†
1(X)}/pen. Since ES(W (Z, r1)|r1) = 0, by Chebyshev’s inequality, we have: for any t > 0,
P(|R2| > t|r1) ≤ VarS(R2|r1)
t2 ≡ VarS(R2)
t2 = ES(R22)
t2
=1
t2 n2
S
ES


( nS
X
i=1
W (Zi, r1)
)2

= ES{W 2(Z1, r1)}
t2 nS
+ (nS − 1)
t2 nS
ES{W (Z1, r1)W (Z2, r1)}.
To complete the analysis of R2, it remains to compute the quaantity: ES{W (Z1, r1)W (Z2, r1)} ≡ ES{W (Z1, r1)W (Z2, r1)|r1}. For notational simplicity, we omit conditioning on r1, as S ⊥⊥ r1. Define R12 := ES{W (Z1, r1)W (Z2, r1)}. Then,
R12 = ES {Y1 − m†
1(X1)}T1
r1(X1)
pen
− r∗(X1)
p1
{Y2 − m†
1(X2)}T2
r1(X2)
pen
− r∗(X2)
p1
= ES(A1T1B1A2T2B2) = E [E(A1T1B1A2T2B2 | X1, X2, T1, T2, pen)]
= E [B1T1T2B2 ES(A1A2 | X1, X2, T1, T2, pen)] ,
where for i = 1, 2, Ai = {Yi − m†
1(Xi)} and Bi = {r1(Xi)/pen − r∗(Xi)/p1}. Notice that for i = 1, 2, Bi is random through Xi and pen; conditioning on these quantities makes them deterministic. Thus, the only remaining randomness in the conditional expectation arises from A1 and A2, which depend on Y1 and Y2, respectively. Since (Y1, X1, T1) and (Y2, X2, T2) are independent, we can write:
E (A1A2 | X1, X2, T1, T2, pen) = E (A1 | X1, X2, T1, T2, pen) E (A2 | X1, X2, T1, T2, pen) .
Since Ai depends only on Yi once Xi and Ti are given, conditioning on extra variables does not alter its conditional expectation. In particular, for i = 1, by using Assumption 1,
E (A1|X1, X2, T1, T2, pen) = E (A1|X1, T1) = E{Y1 − m†
1(X1)|X1, T1 = 1} = 0.
Hence, we obtain that ES{W (Z1, r1)W (Z2, r1) | r1} = 0. Returning to the analysis of R2, using the derivation above, we now have:
P(|R2| > t | r1) ≤ ES W 2(Z1, r1) | r1
t2nS
=1
t2nS
ES
"
{Y − m†
1(X)}2T 2 r1(X)
pen
− r∗(X)
p1
2
#
= M Γ∗m
t2nS
OP max
n
∥p1 − pen∥2
2, ∥r1(X) − r†
1(X)∥2
L2(PX)
o
,
where M < ∞ due to the positivity assumption in Assumption 1 and Γ∗m = supx E[{Y −m†
1(X)}|X =
x] < ∞ by Assumption 2. Since ES(pen) = p1, we have ∥p1 − pen∥22 = VarS(pen) = p1(1 − p1)/nS. Hence, by Lemma S4.6 of Sert et al. (2025) and Lemma S4, we conclude that:
R2 = OP n−1/2
S εr,n . (S.25)
40

Lastly, since K is fixed, by Assumption 2 and the DCT, we obtain √nR2 = oP(1). Analysis of R3. Let U (Z, m1, r1) := {m†
1(X) − m1(X)}T {r1(X)/pen − r†
1(X)/p1}. Then, we rewrite R3 = PnS {U (Z, m1, r1)}. Although, given m1, r1, U (Z1, m1, r1), . . . , U (ZnS , m1, r1) are not independent due to the shared random factor pen, they are identically distributed. Notably, U (Z, m1, r1) is a product-type random variable with E{U (Z, m1, r1)|m1, r1} ̸= 0. Thus, the preceding zero-mean arguments do not directly apply here. Omitting conditioning on (m1, r1)(⊥⊥ S) for brevity, for any t > 0, we have:
P (|R3| > t|m1, r1) ≤ t−1ES
"
1
n
n
X
i=1
{m†
1(Xi) − m1(Xi)}Ti
(
r1(Xi)
pen
− r†
1(Xi)
p1
)#
≤ t−1ES
"
{m†
1(X) − m1(X)}T
(
r1(X)
pen
− r†
1(X)
p1
)#
≤ M ∥m†
1(X) − m1(X)∥2∥p1r1(X) − penr†
1(X)∥2,
where the last bound follows from the CS inequality and the positivity condition in Assumption 1. Following similar arguments to those used in the analysis of R2, and applying Lemma S4.6 of Sert et al. (2025) together with Lemma S4, we obtain:
R3 = OP (εm,nεr,n) . (S.26)
As K < ∞ is fixed, by Assumption 2 and the DCT, √nR3 = oP(1), establishing the desired result. Combining the bounds derived for R∗, R1, R2, and R3 through (S.23)–(S.26), and recalling that R4 = R5 = 0 under Case C1, we obtain the conclusion of Corollary 1 (a)(i) for this setting. Case C2: m∗1 = m†
1 but r1∗ ̸= r†
1. By the generalized decomposition of μb1 in (S.22),
μb1 − μ†(1) = R∗ + R1 + R2 + R3 + R5, (S.27)
as R4 = 0 when m∗1 = m1. As shown in (S.23), (S.25) and (S.26), we have R1 = OP(n−1/2εm,n),
R2 = OP(n−1/2εr,n), R3 = OP(εm,nεr,n), and, by construction, R∗ = OP(n−1/2). Hence, the analysis for Case C2 reduces to controlling the behavior of the remaining remainder term R5. For any t > 0, using the same conditioning argument as above, suppressing it here for brevity, Markov’s inequality gives:
PS |R5| > t m1 ≤ t−1 ES m1(X) − m†
1(X) T r†
1(X)
p1
− r1∗(X)
p1
!
= t−1 ES m1(X) − m†
1(X) 1 − r1∗(X)
r†
1(X)
!
≤ t−1 ∥m1(X) − m†
1(X)∥L2(PX) 1 − r∗
1 (X)/r†
1(X) L2(PX),
where the second step uses r†
1(X) > 0 and p1 > 0 and the last step follows from the CS inequality.
By Assumption 2, ∥1 − r1∗(X)/r†
1(X)∥L2(PX) < ∞. Applying Lemma S4.6 of Sert et al. (2025) together with Lemma S4, we obtain:
R5 = OP(εm,n). (S.28)
41

Now, take any sequence Mn → ∞ and set εn = εm,n, the contraction rate of the well-specified regression model in Case C2. From the decomposition in (S.27), we have:
P |μb1 − μ†(1)| > Mnεn ≤ P(|R∗| > Mnεn) + P(|R1| > Mnεn) + P(|R2| > Mnεn)
+ P(|R3| > Mnεn) + P(|R5| > Mnεn).
Combining Steps (S.23)–(S.28), since Mn → ∞, we obtain P |μb1 − μ†(1)| > Mnεn → 0, which implies |μb1 − μ†(1)| = OP(εm,n). Thus, under Case C2, the posterior mean μb1 is ε−m,1n-consistent
estimator for μ†(1). Case C3: r1∗ = r†
1 but m∗1 ̸= m†
1. Following analogous arguments to those in Case C2, we first note that R5 = 0 by construction and by the decomposition given in (S.22), we have:
μb1 − μ†(1) = R∗ + R1 + R2 + R3 + R4. (S.29)
As established in (S.23), (S.25) and (S.26), we have R1 = OP(n−1/2 εm,n), R2 = OP(n−1/2 εr,n), R3 = OP(εm,n εr,n), and, R∗ = OP(n−1/2) by construction. Hence, the analysis of Case C3 reduces to controlling the behavior of the last term R4. We apply the same conditioning argument as before and follow the analysis of R2 and R3. For any t > 0, Markov’s inequality gives:
PS(|R4| > t|r1) ≤ t−1ES |m∗
1(X) − m†
1(X)| T r1(X)
pen
− r†
1(X)
p1
!
≤ t−1∥m∗
1(X) − m†
1(X)∥L2(PX)∥p1r1(X) − penr†
1 (X)∥L2 (PS )
≤ t−1∥m∗
1(X) − m†
1(X)∥L2(PX)p1∥r1(X) − r†
1(X)∥L2(PX)
+ t−1∥m∗
1(X) − m†
1 (X)∥L2 (PX ) Mr Var(pen ),
where the second inequality follows from the CS inequality, and the third from the definition of r1(·) together with p1 > 0 and Assumption 1. The detailed analysis of ∥p1r1(X) − penr†
1 (X)∥L2 (PS )
parallels that in the analysis of R2 and R3.
By Assumption 2, ∥m∗1(X) − m†
1(X)∥L2(PX) < ∞. Further, we note Var(pen) = p1(1 − p1)/n =
OP(n−1). Then, applying Lemma S4.6 of Sert et al. (2025) together with Lemma S4, we conclude
R4 = OP(εr,n). (S.30)
Finally, take any sequence Mn → ∞ and set εn = εr,n, nuisance contraction rate in Case C3. From the decomposition in (S.29), P |μb1 − μ†(1)| > Mnεn ≤ P(|R∗| > Mnεn)+P(|R1| > Mnεn)+P(|R2| > Mnεn) + P(|R3| > Mnεn) + P(|R4| > Mnεn). Combining (S.23), (S.25), (S.26), and (S.30), we have P(|μb1 − μ†(1)| > Mnεn) → 0, which implies |μb1 − μ†(1)| = OP(εm,n). Thus, under Case C3, the posterior mean μb1 is an εr−,n1-consistent estimator of μ†(1). This gives a complete proof of Corollary 1
for μ†(1). The proof for the second part of Corollary 1 is omitted for brevity, as it follows from a symmetric argument to the first part. The posterior mean of ΠCF
∆ is ∆b (m, r) = μb1(m1, r1) − μb0(m0, r0), where μb0(m0, r0) is the posterior mean for the control group, defined as μb0(m0, r0) := PnS {m0(X)} + PnS {r0(X)(1 − T ){Y − m0(X)}}/(1 − pen). Here, m0(·) and r0(·) denote nuisance samples drawn from
posteriors Πm0(·; S–) and Πr0(·; S–). For clarity, Πm0(·; S–) and Πr0(·; S–) are the nuisance posteriors
42

obtained applying the DRDB procedure to estimate the mean of control arm, μ†(0) = E[Y (0)] similar to described in Section 3.1. Due to the symmetry in the constructions of μb1(m1, r1) and μb0(m0, r0), all arguments and results established for μb1(m1, r1) in Steps S.22–S.30 across Cases C1–C3 apply directly to μb0(m0, r0). This symmetry completes the proof of the second part of Corollary 1, establishing the desired properties of the posterior mean ∆b (m, r) as a point estimator of the ATE ∆†.
S5 Proofs of the preliminary lemmas
This section provides proofs of the intermediate results used in the proofs of the main results.
Proof of Lemma S1. The proof follows from the integral representation of the TV distance, Fubini’s theorem, and the triangle inequality. To see this clearly, we observe that:
dTV(P1, P2) = 1
2
Z
|f1(∆) − f2(∆)| d∆ = 1
2
ZZ
q1(∆|θ) g1(θ) − q2(∆|θ) g2(θ) dθ d∆
=1
2
Z
|g1(θ) − g2(θ)|dθ
+1
2
ZZ
|ψ1(∆ − θ − C) − ψ2(∆ − θ − C)| g2(θ)dθ d∆
= dTV(P(1)
θ , P(2)
θ )+ 1
2
Z
|ψ1(w) − ψ2(w)|dw
= dTV(P(1)
θ , P(2)
θ ) + dTV(P(1)
∆|θ, P (2)
∆|θ ),
where the last step uses the location-family assumption with a common shift, dTV(P(1)
∆|θ, P (2)
∆|θ) does
not depend on θ and equals dTV(ψ1, ψ2), yielding the stated bound.
Proof of Lemma S2. The proof follows from a direct application of the integral representation of the total variation distance and Fubini’s theorem.
Proof of Lemma S3. By the triangle inequality and Fubini’s theorem,
2dTV(P1, P2) =
ZZ
q1(∆|θ) g1(θ) − q2(∆|θ) g2(θ) dθ d∆
≤
ZZ
q1(∆ | θ) g1(θ) − g2(θ) dθ d∆ (S.31)
+
ZZ
q1(∆ | θ) − q2(∆ | θ) g2(θ) dθ d∆
= dTV(P(1)
θ , P(2)
θ )+
Z
dTV (P (1)
∆|θ, P (2)
∆|θ) g2(θ) dθ
≤ dTV(P(1)
θ , P(2)
θ ) + sup
θ
dTV (P (1)
∆|θ, P (2)
∆|θ). (S.32)
43

Since θ(i) = η(i) − β(i) with η(i) ⊥⊥ β(i), we have P(i)
θ = P (i)
η ∗ P(i)
−β. By applying subadditivity of the TV distance under convolution and invariance under location shifts,
dTV (P (1)
θ , P(2)
θ ) ≤ dTV(P(1)
η , P(2)
η ) + dTV(P(1)
β , P(2)
β ).
Under the location-family assumption with common shift (and scale), dTV(P(1)
∆|θ, P (2)
∆|θ) in (S.32) does not depend on θ. Thus, combining the two bounds above yields the desired result.
Proof of Lemma S4. We present a unified proof for a generic nuisance function ψ(·) whose posterior Πψ is constructed on the training data S– := D \Dk for some k ∈ {1, . . . , K} as described in Section 3. The same proof steps directly apply to the cases ψ(·) = mt(·) ∼ Πmt and ψ(·) = rt(·) ∼ Πrt for t ∈ {0, 1}.
Recalling that the randomness of ψ comes from both S– and the posterior Πψ, we can express the distribution Pψ = PS– ⊗ Πψ. Let ψ∗ ≡ ψ∗(·) ∈ L2(PX) be a deterministic limiting function at which Πψ contract. To show that the nuisance posterior Πψ contracts around ψ∗ at rate εn, it suffices to verify that for every Mn → ∞, Pψ{∥ψ(X) − ψ∗(X)∥L2(PX) ≥ Mnεn} → 0. By definition of Pψ and the iterated expectations, 1(·) denoting the indicator function, we have:
Pψ ∥ψ(X) − ψ∗(X)∥L2(PX) ≥ Mnεn = Eψ 1(∥ψ(X) − ψ∗(X)∥L2(PX) ≥ Mnεn)
= ES– [Πψ ∥ψ(X) − ψ∗(X)∥L2(PX) ≥ Mnεn|S– ].
Define An := ∥ψ(X) − ψ∗(X)∥L2(PX) ≥ Mnεn and Zn(S–) := Πψ(An | S–) ∈ [0, 1], where Zn(S–)
denotes the conditional probability of the set An given S–. Under nuisance contraction condition
given in Assumption 2 (a), we have Zn(S–) PS
−−−→ 0 for any sequence Mn → ∞. Since Zn(S–) is itself random through S– and by definition 0 ≤ Zn(S–) ≤ 1, boundedness implies uniform integrability, hence ES–{Zn(S–)} → 0 (convergence in L1(PS–)-sense), equivalently, Pψ(An) → 0. Thus, Pψ{∥ψ(X) − ψ∗(X)∥L2(PX) ≥ Mnεn} → 0, as desired. Finally, specializing the generic result with (ψ, εn) = (mt, εm,n) and (ψ, εn) = (rt, εr,n) for t ∈ {0, 1} yields the corresponding statements in Lemma S4.
Proof of Lemma S5. Following the construction of the final DRDB posterior ΠμC1F in (12), the
posterior variance of ΠμC1F can be computed explicitly. As in the proof of Corollary 1, we focus on the
variance cˆ2,(k)
n (m1, r1) of the DRDB posterior Π(k)
μ1 based on one test split Dk since the arguments are identical across k by construction of the DRDB procedure. Fix k ∈ {1, . . . , K} and consider the test-training pair (S, S–) = (Dk, D
k) with index sets (I, I–) and nS := |I|. Let S1 denotes the treated group in S with index set I1 and n1 = |I1| as in Section 3.
For notational simplicity, we drop the superscript (k) and write cˆ2n(m1, r1) ≡ cˆ2,(k)
n (m1, r1).
Let m1 ∼ Πm1(·; S–) and r1 ∼ Πr1(·; S–) be nuisance posterior draws and define W (Z, m1, r1) := r1(X){Y − m1(X)} where Z = (Y, X). By the construction of the DRDB posterior Πμ1(·; S) and
the law of total expectation, the posterior variance cˆ2n(m1, r1) admits and explicit expression:
cˆ2
n(m1, r1) := nS
nS − 2 c2
S + n1
n1 − 2 c2
1 = λnc2
S + λn1 c2
1
= λn
1
nS(nS − 1)
nS
X
i=1
{m1(Xi) − ηm1 }2
44

+ λn1
1
n1(n1 − 1)
X
i∈I1
{W (Zi, m1, r1) − η1}2 ,
where λn = nS/(nS − 2) and λn1 = n1/(n1 − 2) with n1 = PnS
i=1 Ti.
First, observe that λn → 1 as n → ∞. Further, we can write λn1 = pen/(pen − 2/nS) where pen := n1/nS. Since pen → p1 = P(T = 1) > 0 as n → ∞, it follows that λn1 → 1 in PD-probability. As a result, by the continuous mapping theorem (CMT), it suffices to establish the desired result for cˆ2 := c2
S + c21 in place of cˆ2n(m1, r1).
Given μ∗1 ≡ μ1(m†
1, r†
1) denoting the posterior mean of the limiting Normal distribution in
Theorem 1, the corresponding variance c2(m†
1, r†
1) is calculated as:
c2(m†
1, r†
1) = VarS(μ∗
1) = VarS PnS (m†
1(X)) + PnS
"
r†
1(X)
p1
T {Y − m†
1(X)}
#!
:= σ2m
nS
+ σ12
nS
,
where the covariance term vanishes under the NUC condition in Assumption 2. Towards showing nS|cˆ2 − c2(m†
1, r†
1)| = oP(1), by the same conditioning argument employed in the proof of Corollary 1 together with applying the DCT or Lemma S4.6 of Sert et al. (2025), it suffices to establish conditional convergence, that is, we show PS(nS|cˆ2 − c2(m†
1, r†
1)| | r1, m1) → 0 in probability under P(m1,r1).
Firstly, the triangle inequality gives nS|cˆ2 − c2(m†
1, r†
1)| ≤ |nSc2
S − σ2m| + |nSc21 − σ12| := TS + T1. Therefore, the problem reduces to showing that both TS and T1 converge to zero in probability. Analysis of TS. Define σb12(m1) := VarX{m1(X)|m1}. For any t > 0, the triangle inequality yields
PS(TS > t|m1) ≤ PS(|nSc2
S − σb12(m1)| > t/2|m1) + PS(|σb12(m1) − VarX{m†
1(X)}| > t/2|m1).
By construction, ES(nSc2
S | m1) = σb12(m1). Applying Chebyshev’s inequality yields as n → ∞,
PS (|nS c2
S −σb12(m1)| > t/2|m1) ≤ 4VarS({m1(X)−ηm1}2|m1)/(nSt2), provided that ∥m1(X)∥L4(PX) = OPm1 (1) in Assumption 2.
Moreover, given m1 ∼ Πm1, the variable PS |σb12(m1)−VarX{m†
1(X)}| > t/2 | m1 is the indicator
of the event where |σb12(m1) − VarX{m†
1(X)}| > t/2. Thus, to complete the proof, it suffices to show
that the probability of this event converges to zero. We first notice that |σb12(m1) − VarX{m†
1(X)}| ≤
4∥m1(X) − m†
1(X)∥L2(PX)∥m†
1(X)∥L2(PX) + ∥m1(X) − m†
1(X)∥2
L2(PX). Since ∥m†
1(X)∥L2(PX) < ∞, by
applying Lemma S4, we have ∥m1(X) − m†
1(X)∥L2(PX) = oPm1 (1). By the CMT, this implies that TS converges to zero in probability. Analysis of T1 = |nSc21 − σ12|. Let W (Z, m1, r1) := r1(X){Y − m1(X)} for Z = (Y, X). Then, we write:
nS c2
1= 1
pen
1
(n1 − 1)
X
i∈I1
W (Zi, m1, r1) − η1
2 := 1
pen
S2
n1 .
By using the construction of pen and applying the CMT, we obtain that as n → ∞, 1/pen → 1/p1. This result enables us to reduce the analysis of T1 to focus solely on S2n1. For notational simplicity, we omit explicit conditioning on m1 and r1. Define Tn := (T1, . . . , TnS ). We then observe that by the tower property of expectation,
ES (S2
n1 |m1, r1) ≡ ES S2
n1 = E{E(S2
n1 | Tn)}
45

=E

E


1
n1 − 1
X
i∈I1
W (Zi, m1, r1) − η1
2 | Tn



.
Note that given m1 and r1, conditioning on Tn, the random variables n1 and I1 are fixed, and the randomness of {W (Zi, m1, r1) : i ∈ I1} arises only from Z = (Y, X); also, these random variables
are i.i.d.. Following this observation, the inner expectation can be computed as E(S2n1|Tn) =
E[P
i∈I1 W (Zi, m1, r1)2 − n1η12 | Tn]/(n1 − 1).
Let θ1 := E[W (Z, m1, r1)|T = 1] and q1 := E[W (Z, m1, r1)2|T = 1]. Then, we observe that:
E
hX
i∈I1
W (Zi, m1, r1)2|Tn
i
=
X
i∈I1
E W (Zi, m1, r1)2|Tn
=
X
i∈I1
E W (Zi, m1, r1)2|Ti = 1 = n1q1.
Also, by using the definition of η1, we calculate that:
E η2
1|Tn = 1
n21
E
X
i∈S1
W (Zi, m1, r1)2|Tn + 1
n21
E
X
i̸=j
W (Zi, m1, r1)Wj(m1, r1)|Tn
=1
n1
E[W (Z, m1, r1)2|T = 1] + (n1 − 1)
n1
E[W (Z1, m1, r1)W (Z2, m1, r1)|Tn]
= q1
n1
+ (n1 − 1)
n1
θ2
1.
Then, combining these derivations above, we obtain that:
E[Sn1 | Tn] = 1
n1 − 1 n1q1 − n1
q1
n1
+ (n1 − 1)
n1
θ2
1 = (q1 − θ2
1) := σ2
1,
where σ21 := Var(W (Z, m1, r1)|T = 1). Given m1 and r1, since σ21 is deterministic, by the iterated
expectation, we obtain E[S2n1] = σ21. By Assumption 2, specifically ∥W (Z, m1, r1)∥L4(PZ) =
OP(m1,r1)(1), it follows that S2n1 → σ21 in probability. Finally, by the CMT, and conditioning
on m1 and r1, we obtain nSc21 → σ21/p1 in probability. Next, by the triangle inequality, we can bound T1 as
T1 ≤ nSc2
1 − σ21
p1
+ σ21
p1
− σ2
1 := T11 + T12.
Since we already established that T11 → 0 in probability in our earlier analysis, it remains to show that T12 → 0 in probability to conclude the desired result for T1.
Towards this goal, we focus on σ12. Define W (Z, m†
1, r†
1) := r†
1(X)T {Y −m†
1(X)}/p1 for Z = (Y, X).
By Assumptions 1–2, it follows that ES{W (m†
1, r†
1)} = 0. Hence,
σ2
1 = VarS{W (Z, m†
1, r†
1)} = ES{W 2(Z, m†
1, r†
1)} = ES
"
{r†
1(X)}2
(p1)2 T 2{Y − m†
1(X)}2
#
= EZ|T =1
h
{r†
1(X)}2{Y − m†
1(X)}2 | T = 1
i
/p1.
46

where the final step follows from the law of iterated expectations and by noting that P(T = 1) = p1. Moreover, since ES{W (Z, m†
1, r†
1)} = 0 and p1 > 0, the law of iterated expectations gives
E[r†
1(X){Y − m†
1(X)}|T = 1] = 0. Thus, M E[r†
1(X){Y − m†
1(X)}|T = 1] = 0 for any scalar M < ∞. Therefore, we obtain that:
σ2
1= 1
p1
E
h
{r†
1(X)}2{Y − m†
1(X)}2 | T = 1
i
+1
p1
(E[r†
1(X){Y − m†
1(X)} | T = 1])2
= (p1)−1Var[r†
1(X){Y − m†
1(X)} | T = 1] := (p1)−1τ 2
1.
Hence, we obtain that T12 = |σ21 − τ12|/p1. Since p1 > 0, to establish the desired result, it suffices to
show that |σ21 − τ12| → 0 in probability.
Next, define U (Z, m†
1, r†
1) := r†
1(X){Y − m†
1(X)} and U (Z, m1, r1) := r1(X){Y − m1(X)} for notational clarity. With these definitions, we can bound T12 as follows:
|σ2
1 − τ2
1 | = Var{U (Z, m1, r1)|T = 1} − Var{U (Z, m†
1, r†
1)|T = 1}
≤ 2∥U (Z, m1, r1) − U (Z, m†
1, r†
1)∥2
L2(PS1 )∥U (Z, m1, r1) − U (Z, m†
1, r†
1)∥L2(PS1 )
+ 4∥U (Z, m1, r1) − U (Z, m†
1, r†
1)∥L2(PS1 )∥U (Z, m†
1, r†
1)∥L2(PS1 ).
Since ∥U (Z, m†
1, r†
1)∥L2(PS1) < ∞ by Assumption 2, it suffices to show that ∥U (Z, m1, r1)−U (Z, m†
1, r†
1)∥L2(S1) =
oP(m1,r1)(1). Using the definitions and the triangle inequality,
∥U (Z, m1, r1) − U (Z, m†
1, r†
1)∥L2(PS1 )
≡ r1(X){Y − m1(X)} − r†
1(X){Y − m†
1(X)} L2(PS1 )
≤ Γ1∥r1(X) − r†
1(X)∥2 + Mr∥m1(X) − m†
1(X)∥L2(PS1 ),
where the final step follows from the CS inequality and the boundedness of r†
1(X), i.e., r†
1(X) < Mr
for some Mr < ∞ by Assumption 1. Here, Γ2
1 := supx E {Y − m1(X)}2 | X = x = OPm1 (1) by Assumption 2. Given that ∥r1(X) − r†
1(X)∥2 = oPr1 (1) and ∥m1(X) − m†
1(X)∥2 = oPm1 (1) by Lemma S4, we establish the conditional convergence of T1. Finally, by applying the DCT or Lemma S4.6 of Sert et al. (2025), the desired result follows.
Proof of Corollary S1. Following the construction of the final DRDB posterior ΠCF
∆ in (12), the
posterior variance of ΠCF
∆ can be computed explicitly. As in the proof of Lemma S5, we focus on
the variance cˆ2n(m1, r1)(k) of the posterior Π(k)
∆ based on Dk since the arguments are identical across k by construction of the DRDB procedure. Fix k ∈ {1, . . . , K} and consider the test-training pair (S, S–) = (Dk, D
k) with index sets (I, I–) and nS := |I|. Let (S1, S0) denotes the treated and control subgroups in S with index sets (I1, I0) with n1 = |I1| and n0 = |I0| as in Section 3. For notational simplicity, we drop the superscript (k) and write cˆ2n(m, r) ≡ cˆ2n(m, r)(k). Using the construction of Π∆ in Section 3.2, we have:
cˆ2(m, r) = nS
(nS − 2)
P
i∈I {m(X) − ηm}2
nS(nS − 1) + n1
(n1 − 2)
P
i∈I1 {W (Zi, m1, r1) − η1}2
n1(n1 − 1)
47

+ n0
n0 − 2
P
i∈I0 {U (Zi, m0, r0) − η0}2
n0(n0 − 1)
:= λnc2
S + λn1 c2
1 + λn0 c2
0,
where m(·) = m1(·) − m0(·), W (Z, m1, r1) := r1(X){Y − m1(X)} and U (Z, m0, r0) := r0(X){Y − m0(X)} and λn = nS/(nS − 2) and λt = nt/(nt − 2) for t = 0, 1 and Z = (Y, X). By definition, λn → 1, λt → 1 in probability for t = 0, 1. Hence, the problem reduces to showing the desired result for (c2
S + c21 + c20) in place of cˆ2(m, r).
We next compute the variance c2(m†, r†) of the limiting Normal distribution in Theorem 2. Note that c2(m†, r†) is equal to the variance of the mean ∆b (m†, r†) of the limiting Normal distribution. Recall that for D = (Y, T, X) and m†(·) := m†
1(·) − m†
0(·), the posterior mean can be written as
∆b (m†, r†) = PnS {m†(X)} + Pn
"
r†
1(X)
p1
T {Y − m†
1(X)} − r†
0(X)
1 − p1
(1 − T ){Y − m†
0(X)}
#
=: PnS {m†(X)} + Pn{φ1(D) − φ0(D)} =: PnS {m(X)} + PnS {φ(D)}.
Thus, we can explicitly calculate c2(m†, r†) as c2(m†, r†) = [VarS{m†(X)} + VarS{φ(D)} + 2CovS(m†(X), φ(D))]/nS = (V1 + V2 + 2V3)/nS. Note that V2 = VarS{φ1(D)} + VarS{φ0(D)} + 2CovS{φ1(D), φ0(D)} =: σ12 + σ02, where CovS{φ1(D), φ0(D)} = 0 by using the tower property and E{φt(D)|X} = 0 for t = 0, 1 from Assumption 1. Also, by definition, note that φ1(D)φ0(D) = 0 since T (1 − T ) = 0. By definition, V3 = E{m†(X)φ(D)} − E{m†(X)}E{φ(D)} = 0, as E{φt(D)|X} = 0 by Assumption 1 for t = 0, 1. Thus, defin-
ing σ2m := VarS{m†(X)}, we have c2(m†, r†) = (σ2m +
σ12 + σ02)/nS. Combining these decompositions yields the following bound:
nS |c2
S + c2
1 + c2
0 − c2(m†, r†)| ≤ |nSc2
S − σ2
m| + |nSc2
1 − σ2
1| + |nSc2
0 − σ2
0| := TS + T1 + T0.
Since, by using Assumption 2 and the definition of m(·) = m1(·) − m0(·), the triangle inequality yields ∥m(X)∥L4(PX) ≤ ∥m1(X)∥L4(PX) + ∥m0(X)∥L4(PX) = OP(1), the analysis of TS analogously
follows from the proof of Lemma S5, replacing the pair {m1(·), m†
1(·)} with the pair {m(·), m†(·)}; for brevity, we refer to that part of the proof. Thus, applying Lemma S4.6 of Sert et al. (2025) and Lemma S4, we obtain TS = oP(1). Similarly, the analysis of T1 is identical to that in the proof of Lemma S5; to avoid repetition, we refer to that proof for details. By using Assumption 1 (in particular, p1 > 0) and Assumption 2, and applying Lemma S4 together with Lemma S4.6 of Sert et al. (2025), we obtain T1 = oP(1). By the same arguments applied symmetrically -
to the control group, we skip the details for brevity and correspondingly conclude T0 = oP(1), which gives the desired result.
48

---

## Processing Information

- **Processing Library:** Zotero PDFWorker
- **Processing Date:** 2026-02-10T18:17:27.367Z
- **Text Length:** 142395 characters
- **Success:** Text extraction completed
- **PDF Library Used:** Zotero PDFWorker
- **Pages Processed:** 48 of 48
