# PDF Document: Chen et al. - 2025 - Sigmoid-FTRL Design-Based Adaptive Neyman Allocation for AIPW Estimators.pdf

**File Path:** Chen et al. - 2025 - Sigmoid-FTRL Design-Based Adaptive Neyman Allocation for AIPW Estimators.pdf

**Processed Date:** 2026-02-10T18:15:30.213Z

**File Size:** 1607.28 KB

**Total Pages:** 138

**Extracted Pages:** 138

**PDF Library:** Zotero PDFWorker

**Attachment Item ID:** 3460

**Title:** Sigmoid-FTRL: Design-Based Adaptive Neyman Allocation for AIPW Estimators

**Collection:** Large Files > Random Papers

---

## Extracted Text Content

Sigmoid-FTRL: Design-Based
Adaptive Neyman Allocation for AIPW Estimators
Fangyi Chen1, Shu Ge2, Jian Qian3, and Christopher Harshaw1
1Columbia University 2Massachusetts Institute of Technology 3New York University
November 26, 2025
Abstract
We consider the problem of Adaptive Neyman Allocation for the class of AIPW estimators in a design-based setting, where potential outcomes and covariates are deterministic. As each subject arrives, an adaptive procedure must select both a treatment assignment probability and a linear predictor to be used in the AIPW estimator. Our goal is to construct an adaptive procedure that minimizes the Neyman Regret, which is the difference between the variance of the adaptive procedure and an oracle varianc-
e which uses the optimal non-adaptive choice of assignment probability and linear predictors. While previous work has drawn insightful connections between Neyman Regret and online convex optimization for the Horvitz–Thompson estimator, one of the central challenges for AIPW estimator is that the underlying optimization is non-convex. In this paper, we propose Sigmoid-FTRL, an adaptive experimental design which addresses the non-convexity via simultaneous minimization of two convex regrets. We prov-
e that under standard regularity conditions, the Neyman Regret of Sigmoid-FTRL converges at a T  ́1{2R2 rate, where T is the number of subjects in the experiment and R is the maximum norm of covariate vectors. Moreover, we show that no adaptive design can improve upon the T  ́1{2 rate under our regularity conditions. Finally, we establish a central limit theorem and a consistently conservative variance estimator which facilitate the construction of asymptotically valid Wald-type confidence interva-
ls.
We thank P.M. Aronow, Alexander Rakhlin, Fredrik Sävje, and Stefan Wager for insightful discussions which helped to shape this work. Christopher Harshaw gratefully acknowledges support from Foundations of Data Science Institute (FODSI) NSF grant DMS2023505 and NSF grant MMS2316335.
arXiv:2511.19905v1 [math.ST] 25 Nov 2025

Table of Contents
1 Introduction 1 1.1 Related Work . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2
2 Design-based Adaptive Experiments 3 2.1 Design-Based Potential Outcomes Framework . . . . . . . . . . . . . 3 2.2 Adaptive Experiment Designs . . . . . . . . . . . . . . . . . . . . . . 3 2.3 Technical Assumptions . . . . . . . . . . . . . . . . . . . . . . . . . . 4 2.4 Adaptive AIPW Estimators . . . . . . . . . . . . . . . . . . . . . . . 5
3 Adaptive Neyman Allocation 6 3.1 Formulation of the Neyman Regret . . . . . . . . . . . . . . . . . . . 6 3.2 Online Optimization and Technical Challenges . . . . . . . . . . . . 7 3.3 Decomposition of the Neyman Regret . . . . . . . . . . . . . . . . . 8
4 The Sigmoid-FTRL Design 9 4.1 Formal Description of The Sigmoid-FTRL Design . . . . . . . . . . . 9 4.2 Neyman Regret Guarantee . . . . . . . . . . . . . . . . . . . . . . . . 11 4.3 Probability Regret . . . . . . . . . . . . . . . . . . . . . . . . . . . . 12 4.4 Prediction Regret . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 14 4.5 Fourth Moments: Prediction Tracking . . . . . . . . . . . . . . . . . 16
5 Asymptotically Valid Inference 18 5.1 Non-Superefficiency . . . . . . . . . . . . . . . . . . . . . . . . . . . . 18 5.2 Central Limit Theorem . . . . . . . . . . . . . . . . . . . . . . . . . 19 5.3 Variance Estimation and Confidence Intervals . . . . . . . . . . . . . 21
6 Conclusion 23
Appendix 26
i

1 Introduction
Randomized experiments are used to investigate causal effects in virtually all of the social sciences, from economics and political science to sociology and public health. In a classical randomized experiment, the experimental design (i.e. the randomized treatment assignment mechanism) does not depend on the observed outcomes. In other words, the subjects enter the study, treatment is assigned, and only afterwards are the outcomes observed and the treatment effects consequently estimated. In recen-
t years, there has been a growing interest in adaptive randomized experiments, where subjects arrive sequentially and the experimenter can incorporate previously observed outcomes in the experimental design. In this paper, we study the problem of Adaptive Neyman Allocation for AIPW estimators in the design-based framework. In this context, an adaptive experimental design must select both the treatment assignment probability and the linear predictors used in the AIPW estimator. Roughly speaking, th-
e goal of Adaptive Neyman Allocation is to construct an adaptive experiment design under which the variance of an effect estimator is nearly equal to its optimal variance under the best non-adaptive design that has oracle access to all potential outcomes. We focus specifically on constructing an adaptive experiment design which minimizes this difference, which is known as the Neyman Regret (Dai, Gradu, and Harshaw, 2023; Kato et al., 2025). A formal description of the problem is deferred to Sectio-
n 3. We focus on the design-based framework, where potential outcomes and covariates of each subject are considered to be deterministic and treatment assignment is the sole source of randomness. The design-based framework stands in contrast to a super-population framework where subjects are assumed to be independent and identical draws from an unknown distribution. The sampling assumption may be difficult to interpret and justify in settings where subjects were not literally randomly selected into-
 the study; moreover, it precludes the possibility of drift or otherwise systematic change in the potential outcomes of subjects over time. For these reasons, the design-based framework is sometimes seen as more robust and assumption-lean (Harshaw, 2025). The paper which is most closely related to ours is Dai, Gradu, and Harshaw (2023), who consider Adaptive Neyman Allocation for the unadjusted Horvitz–Thompson estimator. They introduce Clip-OGD, an experimental design based on online gradient des-
cent with probability clipping, which guarantees that the Neyman Regret converges at a rate of T  ́1{2 expp
alogpT qq. Their results are based upon an insightful connection between Adaptive Neyman Allocation and online convex optimization, which we further explore here. One of the pressing questions left open by this work is how to extend the results to AIPW estimators, which are known to be more efficient in the non-adaptive setting when covariate information is available (Lin, 2013; Lei and Ding, 2020). As we show in this paper, the optimization problem underlying Neyman Regret for AIPW is non-convex,-
 which precludes the possibility of directly using techniques from online convex optimization. A secondary question is whether the convergence rate of T  ́1{2 expp
alogpT qq is optimal. In this paper, we make the following contributions which resolve these open questions:
• Optimal Rates and Experimental Design: We present Sigmoid-FTRL, a new adaptive experimental design under which the AIPW Neyman Regret converges at a rate of T  ́1{2R2, where T is the number of subjects and R is the maximum covariate norm. To overcome the issue of non-convexity, the design simultaneously minimizes two convex objectives corresponding to the selection of treatment assignment probability and linear predictors, respectively. We derive a matching T  ́1{2 lower bound which demonstrates-
 that the design is rate optimal under our regularity assumptions. In order to obtain optimal rates, Sigmoid-FTRL employs a sigmoidal transformation of the domain, which
1

may likely be of independent interest to the online optimization community.
• Inferential Methods: We provide a central limit theorem for the AIPW estimator under Sigmoid-FTRL, which requires further technical developments. We also construct a consistent estimator for Neyman’s variance bound. Together, these enable the development of Wald-type intervals that asymptotically cover at the nominal level.
An interesting conclusion of this work is the distinction between Adaptive Neyman Allocation in design-based and super-population frameworks. We show that T  ́1{2 is the optimal rate of Neyman Regret in a design-based setting, whereas prior work has shown that T  ́1 logpT q is the optimal rate in a super-population setting (Neopane, Ramdas, and Singh, 2025a; Neopane, Ramdas, and Singh, 2025b). This difference mirrors results in the bandit literature, where adversarial and stochastic settings have -
minimax regret T 1{2 and logpT q, respectively (Lattimore and Szepesvári, 2020). In both literatures, treating data as being deterministic offers more robustness, but at the cost of slower convergence.
1.1 Related Work
The foundations of Adaptive Neyman Allocation go back nearly a century. Neyman (1934) was the first to consider optimal allocation strategies, demonstrating that sampling from treatments proportional to the within-treatment outcome variance will minimize the variance of standard estimators. To the best of our knowledge, Robbins (1952) was the first to propose the sequential problem of constructing adaptive procedures which attain nearly the same variance as their optimal non-adaptive counterparts.-
 Adaptive experiments have seen a resurgence of interest from the causal inference community in the last twenty years. We focus our attention on the potential outcomes framework (Neyman, 1923; Rubin, 1980). From the causal inference perspective, early work focused on estimation and inference under adaptive treatment assignment (Laan, 2008; Hahn, Hirano, and Karlan, 2011). The focus in these papers is in estimating parameters (e.g. treatment probabilities) of the optimal design, but this does not d-
irectly guarantee that the resulting effect estimator obtains the correspondingly optimal variance. More recent work has focused on adaptive experiment design for obtaining efficiency bounds (Laan and Lendle, 2014; Cook, Mishler, and Ramdas, 2024; Kato et al., 2024). These results are for the asymptotic variance and do not provide an analysis of how close the finite sample variance is to the efficiency bound. The Neyman Regret is a non-asymptotic quantification of the gap between the actual varian-
ce and the optimal variance, which has only been investigated more recently (Dai, Gradu, and Harshaw, 2023; Kato et al., 2025). In a series of work, Neopane, Ramdas, and Singh (2025a) and Neopane, Ramdas, and Singh (2025b) show that T  ́1 logpT q Neyman regret can be attained for Horvitz-Thompson and AIPW estimators in a super-population setting. Li, Simchi-Levi, and Zhao (2024) have shown that vanishing Neyman regret is achievable in these settings even when the design parameters can only be adap-
ted a few number of times, i.e. low-switching designs. In the context of design-based inference, Blackwell, Pashley, and Valentino (2022) propose a two-stage approach to reduce the variance of the difference-in-means estimator. As previously discussed, Dai, Gradu, and Harshaw (2023) use techniques from online optimization to construct an experimental design which attains T  ́1{2 expplogp
?T qq Neyman Regret for the HorvitzThompson estimator. Noarov et al. (2025) obtain T  ́1 logpT q Neyman Regret for the HorvitzThompson estimator, but under non-standard assumptions where the experimenter knows a constant lower bound on the absolute value of each individual potential outcomes1.
1In the context of AIPW estimators, this assumption would translate into a constant and known lower bound on each subject’s absolute residual under the optimal regression.
2

Outside of Adaptive Neyman Allocation, other aspects of adaptive experiments have been studied from a number of perspectives. A recent line of work has provided methods for estimation and inference of causal effects when treatment is assigned via a bandit algorithm (Hadad et al., 2021; Zhang, Janson, and Murphy, 2020; Zhang, Janson, and Murphy, 2021). Offer-Westort, Coppock, and Green (2021) and Chen and Andrews (2023) focus on selective inference under adaptive treatment assignment. Finally, any-
-time inference and data-dependent stopping are central areas of study in sequential analysis (Wald, 1945; Howard et al., 2021; Waudby-Smith et al., 2024).
2 Design-based Adaptive Experiments
2.1 Design-Based Potential Outcomes Framework
We consider a sequential experiment with T experimental subjects denoted by integers t P rT s. The experimenter must assign each unit to exactly one of two treatment conditions. For each subject t P rT s, we denote their treatment assignment as Zt P t0, 1u. Each experimental subject t P rT s is presumed to have two potential outcomes, ytp1q and ytp0), which correspond to the outcomes that would be measured under treatment (Zt “ 1) and control (Zt “ 0), respectively. The causal estimand of interest-
 is the average treatment effect (ATE) which is defined as
τ“ 1
T
T
ÿ
t“1
ytp1q  ́ ytp0q .
The experimenter also measures a vector of covariates xt P Rd for each subject t P rT s, which are not affected by treatment assignment and may be used to improve estimates of the average treatment effect. Implicit in the above is the standard Stable Unit Treatment Value Assumption (SUTVA) which posits that there are not hidden versions of treatment and that subjects do not interfere with each other (Holland, 1986; Imbens and Rubin, 2015; Hernán and Robins, 2020). In this paper, we work in a desig-
n-based framework where the subjects, their potential outcomes, and their covariates are all considered to be deterministic and treatment is the sole source of randomness. In such a setting, randomization of treatment serves as the sole basis for statistical inference, e.g. no i.i.d. assumptions are placed on the subjects.
2.2 Adaptive Experiment Designs
The sequential experimental procedure proceeds in T rounds. At each round t P rT s, the experimenter observed the covariates xt P Rd, then assigns treatment Zt P t0, 1u and consequently observes the outcome
Yt “ 1rZt “ 1sytp1q ` 1rZt “ 0sytp0q .
The experiment may be adaptive in the sense that the randomization of treatment assignment Zt can depend on previously observed outcomes Y1 . . . Yt ́1 and treatment assignments Z1 . . . Zt ́1. Formally, we represent an adaptive experiment design by a sequence of mappings Π “ tΠtutT“1
with signature Πt : pt0, 1u ˆ Rqt ́1 Ñ r0, 1s ˆ Rd ˆ Rd that encode the conditional treatment assignment probability and linear predictors, i.e.
PrpZt “ 1 | Ft ́1q, βtp1q, βtp0q “ ΠtpZ1, Y1, . . . , Zt ́1, Yt ́1q ,
where Ft ́1 conditions on past observations, i.e. formally Ft ́1 is the σ-algebra generated by Z1 . . . Zt ́1. The linear predictors βtp1q and βtp0q are used in the estimator, as described in Section 2.4. We focus on the setting where the order of subjects in the sequence is fixed and
3

arbitrary (i.e. cannot be chosen by the experimenter), which reflects the conditions often arising in practice. For this reason, we refer to the sequence of potential outcomes tpytp1q, ytp0qqutT“1. We will not assume that the sequence of potential outcomes satisfies any type of stationary condition, i.e. the outcomes are allowed to arrive in an arbitrary order.
2.3 Technical Assumptions
Our main technical assumptions on the potential outcomes and covariates are given below. We emphasize that all constants in the assumptions are presumed to exist but are not known to the experimenter. Indeed, the fact that these constants are not known before the experiment is part of what makes the problem more challenging.
Assumption 1 (Bounded Moments). There exists constants 0 ă c0 ď c1 such that for both treatments k P t0, 1u,
c0 ď min
βPRd
 ́1
T
T
ÿ
t“1
!
ytpkq  ́ xxt, βy
)2 ̄1{2
ď
 ́1
T
T
ÿ
t“1
ytpkq4 ̄1{4
ď c1 .
The moment conditions in Assumption 1 ensures two things. First, the second moments of the OLS residuals are assumed to be bounded from below. This assumption is generally plausible, unless the outcomes are suspected to be exactly a linear function of the covariates, which is rarely (if ever) the case in practice. The assumption also places a bound on the fourth moments of the potential outcomes. Because the problem of Adaptive Neyman Allocation essentially requires the estimation of squared resid-
uals, it is unlikely that either of these moment assumptions can be weakened.
Assumption 2 (Covariate Regularity). There exists constants c2 ą 0 and γ0 ą 0 such that for all t ě T 1{2  ̈ γ0, the covariate matrix is well-invertible:
1
c2
ď σmin
 ́1
t
ÿ
sďt
xsx⊺
s
 ̄
.
Assumption 2 ensures that after the “early iterations” (i.e. iterations t “ OpT 1{2q), the empirical covariance matrix 1
t
ř
sďt xtx⊺
t is well-invertible. This invertability condition guarantees that adaptively estimated regression coefficients are well-behaved. Assumption 2 requires that the dimension of the covariates is bounded as d “ OpT 1{2q. We will not require that the covariate matrices in the sequence are well-conditioned, in the sense that the largest singular value may at times be much larger than its smallest one. Moreover, our asymptotic analyses will not assume that this covariate matrix converges to any limiting -
quantity. The next assumption bounds the maximum radius, defined as R “ maxtPrT s∥xt∥. We do not presume that the maximum radius R is known a priori to the experimenter.
Assumption 3 (Maximum Radius). The maximum radius is bounded as R “ opT 1{4q.
When each of the entry of the covariate vectors is viewed as being of constant order, then the maximum radius is on the order R “ Opd1{2q. In this case, Assumption 3 places a slightly stronger assumption on the dimension of the covariates, i.e. d “ opT 1{2q. The most salient aspect of Assumptions 1-3 is that they allow for non-stationarity in the sequence of potential outcomes and covariates. Nearly all quantities are allowed to drift arbitrarily throughout the experiment, including individual tre-
atment effects and the residuals of best linear predictors. The only substantive restriction on the order of the subjects is the well-invertible condition of Assumption 2, which is fairly mild.
4

To reason about the practicality of the assumptions above, it may help to view them through the lens of a super-population. If the outcomes and covariates were sampled i.i.d., then Assumptions 1 and 2 would hold with probability tending to 1 under the conditions that (i) the fourth moments of the outcomes existed, (ii) the covariates were sampled according to a subgaussian distribution with d “ opT 1{2q, and (iii) the conditional variance of the outcomes is positive almost surely.
Triangular Array Asymptotics Although the majority of our results are finite-sample in nature, we will also consider asymptotic analyses. We follow the convention in the designbased literature of using triangular array asymptotics. In the triangular array asymptotics, we consider a sequence of experiments indexed by T P N. For each T , there is a sequence of potential outcomes and covariates typT q
t p1q, ypT q
t p0q, xpT q
t utT“1 and an adaptive experimental
design ΠpT q. This yields a sequence of (deterministic) average treatment effects τ pT q and estimators τˆpT q. All limiting statements, e.g. τ pT q  ́ τˆpT q ÝpÑ 0, are made with respect to this sequence. For notational clarity, we drop the superscript T when in the asymptotic statements.
2.4 Adaptive AIPW Estimators
We focus on the class of adaptive Augmented Inverse Propensity Weighted (AIPW) estimators for the average treatment effect. The AIPW estimator is widespread in causal inference, where a regression model is used to improve the efficiency of the standard IPW estimator. We focus on adaptive AIPW estimators with linear regression models, though we expect that the extension to more flexible kernel methods should be immediate. At each round, the experimenter updates a linear regression model of the outc-
omes under treatment and control using the observed history. Let βtp1q and βtp0q P Rd denote the coefficients of the linear regression models for the outcomes under treatment and control at time t, respectively, i.e. βtp1q and βtp0q are determined completely by the history Ft ́1. At each round t P rT s, the adaptive AIPW estimator proceeds by estimating the individual treatment effect using the regression models then correcting via an IPW estimate of the residuals. Formally, the adaptive AIPW esti-
mator is given as
τˆ “ 1
T
T
ÿ
t“1
#
xxt, βtp1qy ́xxt, βtp0qy` 1rZt “ 1s
pt
 ́
Yt ́xxt, βtp1qy
 ̄
 ́ 1rZt “ 0s
1  ́ pt
 ́
Yt ́xxt, βtp0qy
 ̄
+
.
Proposition 2.1 (AIPW Bias). If pt P p0, 1q for all t P rT s a.s. then the adaptive AIPW estimator is unbiased: Erτˆs “ τ .
Proposition 2.1 shows that the adaptive AIPW estimator is unbiased, regardless of how well the regression model fits the data. The next proposition shows that better fitted models typically correspond to smaller variance, so long as the conditional treatment probabilities are not too extreme.
Proposition 2.2 (AIPW Variance). The normalized variance of the AIPW estimator is given as
T  ̈ Varpτˆq “ E
«
1 T
T
ÿ
t“1
 ̃
␣ytp1q  ́ xxt, βtp1qy(  ̈
c 1  ́ pt
pt
`
␣ytp0q  ́ xxt, βtp0qy(  ̈
c pt
1  ́ pt
 ̧2ff
.
5

3 Adaptive Neyman Allocation
3.1 Formulation of the Neyman Regret
Introduced by Robbins (1952), the problem of Adaptive Neyman Allocation is to design an adaptive protocol which has nearly the same performance as the optimal non-adaptive protocol which has access to all of the data. In the recent literature on Adaptive Neyman Allocation, the performance of an experimental design is measured by the Neyman Regret, which is the gap between the adaptive variance and the non-adaptive oracle variance. We begin by deriving the oracle variance which serves as the releva-
nt comparator when constructing an adaptive design. In this context, the oracle variance V ̊ is defined as the minimal variance of the AIPW estimator when selecting the best fixed linear predictors and assignment probability:
V ̊ “ arg min
βp1q,βp0q,p
Var`τˆ; p, βp1q, βp0q ̆ .
The Neyman Allocation refers to the optimal choice of linear predictors β ̊p1q, β ̊p0q and assignment probability p ̊ which attain this oracle variance. Note that the oracle variance V ̊ and the Neyman Allocation β ̊p1q, β ̊p0q, and p depend on the potential outcomes and the covariates. For each treatment k P t0, 1u, define the optimal squared residuals as
Epkq “ min
βPRd
 ̃
1 T
T
ÿ
t“1
pytpkq  ́ xxt, βyq2
 ̧1{2
,
and denote the corresponding OLS predictor as βOLSpkq. Define the residual correlation ρ as
ρ“
1 T
řT t“1
`ytp1q  ́ xxt, βOLSp1qy ̆`ytp0q  ́ xxt, βOLSp0qy ̆
Ep0qEp1q .
The following proposition derives the oracle variance and the Neyman Allocation in terms of these parameters. We include a proof sketch because it contains ideas which are essential to understanding non-convexity of the Neyman Regret.
Proposition 3.1. The oracle variance is given by T  ̈ V ̊ “ 2p1 ` ρqEp1qEp0q and the Neyman allocation is given by the least squares predictors β ̊pkq “ βOLSpkq and assignment probability
p “ p1 ` Ep0q{Ep1qq ́1.
Proof Sketch. We begin by writing the variance as a function of the fixed parameters, gpp, βp1q, βp0qq “ Varpτˆ; p, βp1q, βp0qq. Using Proposition 2.2 and expanding terms, we write g as
g
`p, βp1q, βp0q ̆ “ 1
T
T
ÿ
t“1
tytp1q  ́ xxt, βp1qyu2  ̈
 ́1
p  ́1
 ̄
`1
T
T
ÿ
t“1
tytp0q  ́ xxt, βp0qyu2  ̈
 ́1
1 ́p  ́1
 ̄
`2
T
T
ÿ
t“1
tytp1q  ́ xxt, βp1qyutytp0q  ́ xxt, βp0qyu ,
where the expectations do not appear because the parameters are fixed. Observe that the function gpp, βp1q, βp0qq is separately convex in pβp1q, βp0qq and p, but not jointly convex in both. Nevertheless, we can analytically obtain the minimizers.
6

First, we fix the linear predictors βp1q and βp0q and minimize with respect to p. In a slight abuse of notation, let us write Epkq “ pp1{T q řT
t“1tytpkq  ́ xxt, βpkqyu2q1{2 for the fixed βpkq.
Because the mapping p ÞÑ gpp, βp1q, βp0qq is convex, any local minimizer is global and thus we may solve the first order condition to obtain p ̊ “ p1 ` Ep0q{Ep1qq ́1. Plugging this in, we have that the variance for fixed βp1q, βp0q with optimal p ̊ is
g
`p ̊, βp1q, βp0q ̆ “ 2
 ́1
T
T
ÿ
t“1
tytp1q  ́ xxt, βp1qyu2 ̄1{2 ́ 1
T
T
ÿ
t“1
tytp0q  ́ xxt, βp0qyu2 ̄1{2
`2
T
T
ÿ
t“1
tytp1q  ́ xxt, βp1qyutytp0q  ́ xxt, βp0qyu .
At first glance, it may appear that the OLS predictors cannot be the minimizers of the variance due to the presence of the residual correlation term. However, this intuition is false—it turns out that the minimizers are indeed given by the OLS predictors. Some care is needed to establish this fact because the function pβp1q, βp0qq ÞÑ gpp ̊, βp1q, βp0qq is non-convex. In Section B.3 of the appendix, we give the full proof which uses orthogonality properties of the OLS predictors as well as several -
judicious applications of AM-GM and Cauchy Schwarz. Once the Neyman Allocation p ̊, β ̊p1q, and β ̊p0q have been derived, the oracle variance is obtained by substituting these parameters into the variance and using the definition of the residual correlation ρ.
Definition 1. Given an adaptive design, the Neyman Regret RNeyman
T is defined as the difference between the (normalized) adaptive and oracle variances:
RNeyman
T “ T  ̈ Varpτˆq  ́ T  ̈ V ̊ .
We use a subscript T in the Neyman Regret RNeyman
T to reflect the dependence on the sample size T . If the Neyman Regret is decreasing to 0 with the sample size, then the true adaptive variance is essentially upper bounded by the oracle variance. Roughly speaking, this means that the experimenter will be able to use estimates of the oracle variance T  ̈ V ̊ in their inferential procedures. Our goal in this paper is to construct an adaptive experimental design
so that the Neyman Regret RNeyman
T converges to 0 as fast as possible. The following theorem
shows that under our assumptions, the Neyman regret cannot be converging faster than T  ́1{2.
Theorem 3.2 (Lower Bound). For all integers T and any adaptive experimental design Π, there exists a sequence tytp1q, ytp0q, xtutT“1 satisfying Assumptions 1-3 and a constant c ą 0,
such that the corresponding Neyman regret is at least RNeyman
T ě c  ̈ T  ́1{2.
Theorem 3.2 demonstrates a T  ́1{2 lower bound under the conditions of bounded moments (Assumption 1) and covariate regularity (Assumption 2). In Section B.1 of the appendix, we show that both of these assumptions are required in order to achieve a Neyman regret which converges to zero; in other words, if either of them does not hold, then the Neyman regret of any experimental design will be bounded away from zero.
3.2 Online Optimization and Technical Challenges
Following Dai, Gradu, and Harshaw (2023), we view the problem of minimizing the Neyman Regret through the lens of online optimization. Define the objective functions gt : p0, 1q ˆ Rd ˆ Rd Ñ R` as
gt
`p, βp1q, βp0q ̆ “
 ̃
␣ytp1q  ́ xxt, βp1qy(  ̈
c1  ́ p
p ` ␣ytp0q  ́ xxt, βp0qy(  ̈
cp
1 ́p
 ̧2
.
7

Then, using Propositions 2.2 and 3.1, we can write the Neyman regret in terms of online optimization, i.e. as the difference between the expected objective under the adaptive design and the objective for the optimal set of parameters:
RNeyman
T “E
”1
T
T
ÿ
t“1
gt
`pt, βtp1q, βtp0q ̆
ı
 ́ arg min
p,βp1q,βp0q
1 T
T
ÿ
t“1
gt
`p, βp1q, βp0q ̆ .
The underlying online optimization problem will guide our construction of an adaptive experimental design. However, the online optimization itself presents two challenges which require new technical developments:
1. Nonconvexity: The objective functions gt are non-convex. Broadly speaking, convexity is considered to be the watershed for whether a problem can be efficiently solved. In order to guarantee convergence of the Neyman Regret, we need to overcome the issues presented by non-convexity in the objective.
2. Ill-Conditioned: The gradients of gt become arbitrarily large as p approaches the boundary of p0, 1q. Analysis of conventional optimization methods (e.g. gradient descent) often require that the gradients are bounded over the entire domain. The tension is that the optimal p ̊ may be close to the boundary p0, 1q and so we should allow the adaptive pt to get close to the boundary, albeit in a controlled manner. In order to get clean T  ́1{2 rates of Neyman Regret, we must also address the fundame-
ntal ill-conditioning in the objective functions.
3.3 Decomposition of the Neyman Regret
In this section, we show how to overcome the non-convexity underlying the Neyman Regret. Perhaps surprisingly, we show that the non-convex Neyman Regret can be decomposed into the sum of two convex regrets: probability regret and prediction regret. Roughly speaking, the probability regret measures the extent to which the adaptively chosen probability balances the residuals while the prediction regret measures the performance of the adaptively chosen linear predictors . We begin by showing how to e-
valuate the performance of the adaptively chosen treatment probability. For each iteration t, we define the probability loss ft : p0, 1q Ñ R` as the convex function
ftppq “
 ́
ytp1q  ́ xxt, βtp1qy
 ̄2
 ̈1
p`
 ́
ytp0q  ́ xxt, βtp0qy
 ̄2
 ̈1
1 ́p .
The probability loss measures how well a treatment assignment probability p balances the squared error of the predictions made at iteration t. We define the probability regret as
Rprob
T“
T
ÿ
t“1
ftpptq  ́
T
ÿ
t“1
ftpp ̊q .
The probability regret measures how well the adaptively chosen assignment probabilities p1 . . . pT balances the online residuals via comparison to the Neyman Allocation assignment probability p ̊. Because the adaptively chosen probabilities pt and linear predictors βtp1q and βtp0q are random, the prediction regret Rpkq,pred
T is also a random variable. Note that the scaling of the probability regret is such that opT q is considered to be asymptotically vanishing. We now focus on how to evaluate the performance of the adaptively chosen linear predictors. For each iteration t, we define the prediction loss function lt : Rd ˆ Rd Ñ R` as the convex
8

function
lt
`βp1q, βp0q ̆ “
 ̃
␣ytp1q  ́ xxt, βp1qy(  ̈
d
E p0q
Ep1q ` ␣ytp0q  ́ xxt, βp0qy(  ̈
d
E p1q
E p0q
 ̧2
.
The prediction loss measures the error of linear predictions of the potential outcomes at a given iteration, weighted by the ratio of the optimal residuals. We define the prediction regret as
Rpred
T“
T
ÿ
t“1
lt
`βtp1q, βtp0q ̆  ́
T
ÿ
t“1
lt
`β ̊p1q, β ̊p0q ̆ .
The prediction regret measures the overall prediction error of the adaptively chosen predictors by comparing to the prediction error under the optimal least squares predictors β ̊p1q, β ̊p0q. Because the linear predictors are random, the prediction regret Rpred
T is also a random variable. The prediction regret is on the same scale as the probability regret, i.e. a sublinear opT q regret is considered to be asymptotically vanishing.
Lemma 3.3. Under Assumption 1, the Neyman Regret can be decomposed as the T -normalized sum of the probability regret and the prediction regret:
RNeyman
T “1
T ErRprob
T s` 1
T ErRpred
T s.
The decomposition of the Neyman regret in Lemma 3.3 effectively replaces the issue of non-convexity with the issue of multiple objectives; that is, we still need the expected probability regret and the expected prediction regret to be small simultaneously. The main benefit of Lemma 3.3 is that it identifies individual convex objectives on which techniques from convex analysis may be used.
4 The Sigmoid-FTRL Design
4.1 Formal Description of The Sigmoid-FTRL Design
The Sigmoid-FTRL design is formally described in Algorithm 1. The design can be understood as applying the follow-the-regularized leader (FTRL) principle separately to the probability regret and the prediction regret. FTRL is a commonly used technique in online convex optimization which is an alternative to gradient-descent based methods (Hazan, 2016). As each subject arrives in the experiment, the Sigmoid-FTRL design proceeds in two main steps: first, the linear predictors βtp1q, βtp0q are comput-
ed and then the treatment assignment probability pt is computed. The linear predictors βtp1q and βtp0q are chosen to minimize the estimated squared prediction errors on the previously observed units. The squared prediction errors on previously observed units are estimated using adaptive IPW weighting, which is necessary because we observe only one outcome for each unit. To ensure that that predictors are sufficiently regularized, we add a ridge regularizer with penalty term η ́1
t , which depends on the number of units T and the largest norm of any covariate vector seen so far. As we demonstrate in Section 4.4, this step aims to minimize the prediction regret. The selection of treatment probabilities ser The treatment probability pt is chosen so that the subject is more likely to be assigned to the treatment where the online predictions have so far resulted in larger errors. For each treatment k P t0, 1u, define the online residuals up to time t as At ́1pkq “ ř
sďt ́1pyspkq  ́ xxs, βspkqyq2. The online residuals are not directly observable
9

Algorithm 1: Sigmoid-FTRL
Input: Sigmoid φ : R Ñ p0, 1q satisfying Condition 1. Define the sigmoid regularizer Ψ “ ψ  ̋ φ ́1 with ψpuq “ 1
2 u2 ` |u|3. Initialize max radius R0 “ 1. for t “ 1, 2, . . . T do
Observe covariate xt P Rd and update Rt “ maxpRt ́1, ∥xt∥q and ηt “ T  ́1{2R ́2
t. Construct the regression coefficients β1ptq and βtp0q as
βtp1q “ arg min
βPRd
t ́1
ÿ
s“1
 ́
Ys  ̈ 1rZs “ 1s
ps
 ́ xxs, βy
 ̄2
`1
ηt
 ̈ ∥β∥2
βtp0q “ arg min
βPRd
t ́1
ÿ
s“1
 ́
Ys  ̈ 1rZs “ 0s
1  ́ ps
 ́ xxs, βy
 ̄2
`1
ηt
 ̈ ∥β∥2
Construct estimates of the online squared residuals Apt ́1p1q and Apt ́1p0q as
Apt ́1p1q “
t ́1
ÿ
s“1
1rZs “ 1s
ps
 ́
Ys  ́ xxt, βsp1qy
 ̄2
Apt ́1p0q “
t ́1
ÿ
s“1
1rZs “ 0s
1  ́ ps
 ́
Ys  ́ xxt, βsp0qy
 ̄2
Select assignment probability pt as
pt “ arg min
pPp0,1q
Apt ́1p1q
p`
Apt ́1p0q
1 ́p ` 1
ηt
 ̈ Ψppq .
Sample treatment assignment Zt “ 1 with probability pt, and Zt “ 0 otherwise. Observe outcome Yt “ 1rZt “ 1s  ̈ ytp1q ` 1rZt “ 0s  ̈ ytp0q. end
because in all previous iterations s ă t, we have seen either ysp1q or ysp0q, but not both. For this reason, we use adaptive IPW weighting to obtain estimates Apt ́1pkq. The treatment probability pt is then chosen to minimize the weighted sum Apt ́1p1q{p ` Apt ́1p0q{p1  ́ pq with
an additional regularization term η ́1
t  ̈ Ψppq. This step seeks As we demonstrate in Section 4.3, this step aims to minimize the probability regret. We use a sigmoid regularizer Ψ : p0, 1q Ñ R` to regularize the selected treatment probability pt. The purpose of the sigmoidal regularizer is to ensure that the treatment probability does not get too close to the boundary of the interval r0, 1s, which would increase the variance of the AIPW estimator. We refer to this penalty function as sigmoidal because it takes the form Ψ “ ψ  ̋ φ ́1,-
 where φ : R Ñ p0, 1q is a sigmoid function and ψpuq “ 1
2 u2 ` |u|3. In other words,
the penalty Ψ can be understood as using a quadratic + cubic penalty on the transformed variable ut which yields the treatment probability, i.e. pt “ φputq. The sigmoidal penalty is one of the novel techniques introduced in our work and is the namesake of the Sigmoid-FTRL design. The sigmoid penalty is a key ingredient to facilitating
10

the clean T 1{2 term in our regret analysis. This improves upon the probability clipping design of Dai, Gradu, and Harshaw (2023), which features an additional sub-polynomial expp
alogpT qq factor as a result of the probability clipping. One can interpret the sigmoidal regularizer as a gentler version of the harsh regularization implicitly introduced by probability clipping. The choice of an appropriate sigmoid function φ is crucial for obtaining the performance guarantees of the Sigmoid-FTRL design. Many choices of sigmoid will not work, including the logistic function, the hyperbolic tangent, and the error function. Fortunately, there are several good choices, such as the-
 arctangent function φpuq “ 1
π parctanpuq ` π{2q and the algebraic
sigmoid φpuq “ 1
2p u
1`|u| ` 1q. Our theoretical results will hold for any sigmoid satisfying the following condition:
Condition 1 (Sigmoid Condition). The sigmoid φ : R Ñ p0, 1q satisfies the following:
1. φpuq is a strictly monotone increasing with φpuq ` φp ́uq “ 1 and φp`8q “ 1.
2. u ÞÑ 1{φpuq and u ÞÑ 1{p1  ́ φpuqq are convex functions.
3. There exists constants b1, b2, b3 ą 0 such that
(a)  ́
 ́1 φpuq
 ̄1
ď b1 for all u P R
(b)
 ́1 φpuq
 ̄2
ď b2  ̈ 1
p1`|u|q3 for all u P R
(c)
 ́1 φpuq
 ̄2
ě b3  ̈ 1
p1`uq3 for all u ě 0.
Another key aspect of the Sigmoid-FTRL design is the introduction of an adaptive penalty term, ηt. The penalty term is set adaptively as ηt “ pT 1{2Rt2q ́1 where Rt is the largest covariate norm seen so far. The variable is initialized as R0 “ 1 and updated iteratively as Rt “ maxpRt ́1, ∥xt∥q. From a theoretical point of view, the adaptively chosen penalty term ηt ensures that the regularization appropriately scales with the magnitude of the covariates. From a practical point of view, the primary-
 benefit of an adaptive penalty term ηt is that the experimenter is not required to correctly specify the magnitude of the covariates a priori. In keeping with the conventions of online optimization, we define ηT `1 “ ηT . Sigmoid-FTRL is computationally practical to implement. In particular, the number of arithmetic operations per iteration scales like Opd3q and the total storage required for the algorithm is Opd2q. The dominant computational cost is solving the ridge regression. By maintaining a-
nd updating a few intermediate variables, the solution to the ridge regression may be obtained by solving a d-by-d linear system, requiring Opd3q arithmetic operations and Opd2q storage. The estimated online squared residuals Aptp1q and Aptp0q can be updated using Opdq operations. The minimization required to obtain pt is convex and one-dimensional, so simple root finding algorithms may be used for this purpose.
4.2 Neyman Regret Guarantee
The first main result of this paper is the following theorem, which shows that the Neyman regret converges to zero at a T  ́1{2R2 rate under Sigmoid-FTRL.
Theorem 4.1. Under Assumptions 1-3 and Condition 1, there exists a constant C ą 0 such that the Neyman Regret under Sigmoid-FTRL is bounded as
RNeyman
Tď
 ́
C ` op1q
 ̄
 ̈ T  ́1{2R2 .
In the theorem above, C is a constant depending only on the constants c0, c1, c2 and b1, b2, b3 appearing in Assumptions 1-3 and Condition 1, respectively. We remark that C is a small
11

polynomial function of these constants, unlike the exponential dependence in the analysis of Dai, Gradu, and Harshaw (2023). In a slight abuse of notation, we use C throughout the paper to express any constant which depends only on these constants in the assumptions; however, all constants are made explicit in the appendix. In the context of our lower bound (Theorem 3.2), Theorem 4.1 establishes the optimal T dependence on the Neyman regret. In particular, this removes the sub-polynomial factors -
in the probability clipping approach of Dai, Gradu, and Harshaw (2023). Although the proof of Theorem 4.1 is lengthy and technical, the central ideas of the proof can be conveyed by several key lemmas. In the remainder of Section 4, we will present certain lemmas with the aim of providing the intuition underlying our approach. The full proof of Theorem 4.1 appears in Section B of the appendix.
4.3 Probability Regret
We begin by showing how to bound the expected probability regret ErRprob
T s under the Sigmoid-FTRL design. The key idea is the use of a sigmoidal transformation of the regret problem. Rather than selecting a probability pt P p0, 1q, we consider the equivalent selection of a decision variable ut P R through the sigmoid function φ : R Ñ p0, 1q, i.e. pt “ φputq. For each iteration t P rT s, we define the sigmoid probability loss function ht : R Ñ R` as the composition ht “ ft  ̋ φ which may be expressed as:
htpuq “
 ́
ytp1q  ́ xxt, βtp1qy
 ̄2
 ̈1
φpuq `
 ́
ytp0q  ́ xxt, βtp0qy
 ̄2
 ̈1
1  ́ φpuq .
Using the equivalence pt “ φputq, we can re-express the probability regret as
Rprob
T“
T
ÿ
t“1
htputq  ́
T
ÿ
t“1
htpu ̊q ,
where u ̊ “ φ ́1pp ̊q is the transformed Neyman Allocation. Parts 1-3 of Condition 1 ensure that the sigmoid probability loss functions ht are convex and have uniformly bounded gradients. In contrast, the original probability loss functions had gradients which blew up at the boundary of the r0, 1s interval. In this way, the benefit of the sigmoidal transformation is to transform an ill-conditioned constrained problem into a well-conditioned unconstrained problem. The sigmoid probability loss funct-
ions ht depend on both of the potential outcomes, so they cannot be directly observed. In light of this fact, the Sigmoid-FTRL design uses the adaptive IPW weighting technique to construct estimated sigmoid loss functions pht as
phtpuq “
 ́
Yt  ́ xxt, βtp1qy
 ̄2
 ̈ 1rZt “ 1s
pt
 ̈1
φpuq `
 ́
Yt  ́ xxt, βtp0qy
 ̄2
 ̈ 1rZt “ 0s
1  ́ pt
 ̈1
1  ́ φpuq
and then selects the treatment assignment probability pt “ φputq where ut is the minimizer of the estimated sigmoid loss functions
ut “ arg min
uPR
ÿ
săt
phtpuq ` 1
ηt
ψpuq ,
with regularization ψpuq “ 1
2 u2 ` |u|3. In this way, the Sigmoid-FTRL design is working
directly in the sigmoidal transformation. The following lemma shows that these estimated sigmoid loss functions pht are conditionally unbiased for the sigmoid loss functions ht.
Lemma 4.2. The estimated sigmoid loss functions are conditionally unbiased: Erphtpuq | Ft ́1s “ htpuq for all Ft ́1-measurable random variables u.
12

While these estimated sigmoidal loss functions are unbiased, their magnitude now depends on the inverse probabilities. Because the inverse probabilities may grow close to the boundary, the gradients ∇pht may become large. When the gradients ∇phtputq are not bounded, a traditional FTRL algorithm using the squared regularizer ψpuq “ u2 would not attain a T 1{2 probability regret. The issue becomes more pronounced when the maximum inverse probability maxt1{pt, 1{p1  ́ ptqu is large, which happens ex-
actly when |ut| is large. To overcome this issue, Sigmoid-FTRL introduces a modified regularization function ψpuq “ 1
2 u2 ` |u|3, which features an additional cubic term. The role of this cubic term is
to regularize more aggressively in regions where the estimated sigmoid loss functions have larger gradients, i.e. when |u| is large. In fact, the cubic term is chosen specifically so that the regularization “offsets” the magnitude of the squared gradient. To formalize this intuition, we need to use the geometry of Bregman divergences. Bregman divergences play a crucial role in the analysis of optimization algorithms because they express the relevant curvature of the objective functions (Hazan, 201-
6; Orabona, 2023). Given a differentiable convex function f : X Ñ R on a convex set X , the Bregman divergence Bf : X ˆ X Ñ R is defined as Bf pu|vq “ f puq  ́ f pvq  ́ x∇f pvq, u  ́ vy. The Bregman divergence measures local geometry of the function f at different pairs of points through the gap between f puq and the convex lower bound f pvq ` x∇f pvq, u  ́ vy. The following lemma demonstrates that the Bregman divergence of the custom regularizer ψ depends not only on the distance between u and v,-
 but also on their magnitudes:
Lemma 4.3. The Bregman divergence is bounded: Bψpv|uq ě 1
2 pv  ́ uq2p1 ` 1
2 |v| ` |u|q.
Lemma 4.3 is a key technical result which facilitates the T  ́1{2 rate of Sigmoid-FTRL. At first sight, Sigmoid-FTRL may appear similar to imposing a heavy regularizer such as
Ψppq “ p ́2 ` p1  ́ pq ́2 ` p ́3 ` p1  ́ pq ́3.
However, the key advantage of the sigmoid transformation is different: Lemma 4.3 shows that the Bregman divergence Bψput`1|utq in the transformed space can be controlled globally, even when the corresponding probabilities pt “ φputq and pt`1 “ φput`1q are far apart. In contrast, working with such a regularizer Ψ directly in probability space would force us to rely on BΨppt`1|ptq, which could only be controlled locally, due to the classical localization constraint of FTRL: the divergence can only b-
e well-approximated by its second-order expansion when pt`1 remains close to pt. The sigmoid geometry circumvents this limitation by expressing potentially large moves in probability space as well-behaved movements in the unconstrained u-space, enabling a clean regret analysis and ultimately the optimal T  ́1{2 rate. Using Lemma 4.3 together with well-known techniques from online convex optimization, we derive the following bound on the expected probability regret.
Proposition 4.4. The expected probability regret can be bounded as
ErRprob
T sď 1
ηT `1
ψpu ̊q `
T
ÿ
t“1
ηt E
« `∇phtputq ̆2
2p1 ` |ut|q
ff
.
The upper bound in Proposition 4.4 has two parts. The first part is easily analyzed, as it involves the final step size ηT and the regularization ψpu ̊q, which is of constant order by Assumption 1. The second part is the sum of the expected squared gradients p∇htputqq2 normalized by p1 ` |ut|q. This normalization term is a result of our choice of modified regularization ψ and Lemma 4.3. Roughly speaking, this normalization appears because it is equal to ψ2puq “ 1 ` 6|u|, up to constants. The follo-
wing lemma calculates this expectation, formally showing that the normalization “offsets” the inverse probability terms in the squared gradient p∇htputqq2:
13

Lemma 4.5. Under Condition 1, the conditional expectation of the squared gradient term is at most
E
« `∇phtputq ̆2
1 ` |ut|
ˇ
ˇ
ˇFt ́1
ff
ď b2
1 maxtb1, 2u
 ́
tytp1q  ́ xxt, βtp1qyu4 ` tytp0q  ́ xxt, βtp0qyu4 ̄
.
Thus, applying the law of iterated expectation yields
T
ÿ
t“1
ηt E
« `∇phtputq ̆2
2p1 ` |ut|q
ff
ď1
2 b2
1 maxtb1, 2u
ÿ
kPt0,1u
E
«T ÿ
t“1
ηt
␣ytpkq  ́ xxt, βtpkqy(4
ff
.
The first part of Lemma 4.5 is a straightforward calculation. Overall, Lemma 4.5 shows that the expected squared gradient term in the probability regret is upper bounded by the fourth moment of the online residuals, weighted by the adaptively chosen step size. In order to bound the probability regret, the last step is to ensure that the fourth moment of the online residuals is bounded. This will also be the last step in bounding the prediction regret. The following lemma contains such a bound, but-
 its proof sketch is delayed until Section 4.5.
Lemma 4.6. Under Assumptions 1-3 and Condition 1, there exists a constant C ą 0 such that for each treatment k P t0, 1u, the fourth moment of the online residuals can be bounded as
E
«T ÿ
t“1
ηt
␣ytpkq  ́ xxt, βtpkqy(4
ff
ď pC ` op1qq  ̈ T 1{2R2 .
We are now ready to provide a bound on the probability regret. Using Proposition 4.4 to upper bound the expected probability regret in terms of the regularization and squared gradient terms, Lemma 4.5 to bound the squared gradient term via the fourth moment of online residuals, and Lemma 4.6 to bound the fourth moments, we arrive at the following bound on the expected probability regret:
Proposition 4.7. Under Assumptions 1-3 and Condition 1, there exists a constant C ą 0
such that the expected probability regret is bounded as ErRprob
T s ď pC ` op1qqT 1{2R2.
4.4 Prediction Regret
In this section, we show how to bound the prediction regret. Throughout this section, we sometimes use the shorthand βt “ pβtp1q, βtp0qq to refer to the concatenation of the linear predictors. The prediction loss lt depends on both of the potential outcomes, which are not simultaneously observed. Using the adaptive inverse probability weighting technique, we define the estimated prediction loss lpt : Rd ˆ Rd Ñ R` as
lpt
`βp1q, βp0q ̆ “
 ̃ !
Yt ̈ 1rZt “ 1s
pt
 ́xxt, βp1qy
)
 ̈
d
E p0q
Ep1q `
!
Yt ̈ 1rZt “ 0s
1  ́ pt
 ́xxt, βp0qy
)
 ̈
d
E p1q
E p0q
 ̧2
.
Define also the regularizer function m : Rd ˆ Rd Ñ R` as
m
`βp1q, βp0q ̆ “
d
E p0q
Ep1q  ̈ βp1q `
d
E p1q
Ep0q  ̈ βp0q
2
.
14

The Sigmoid-FTRL can be understood as selecting the linear predictors via the FTRL principle
βtp1q, βtp0q “ arg min
βp1q,βp0q
t ́1
ÿ
s“1
lpt
`βp1q, βp0q ̆ ` 1
ηt
 ̈ m`βp1q, βp0q ̆ .
It is not obvious that the individual ridge predictors βtp1q, βtp0q used in Sigmoid-FTRL are also the joint minimizers of the program above. Indeed, the program above includes both a crossing term and the optimal residuals Ep1q and Ep0q in its definition, neither of which do not appear in the usual ridge loss. In the same way that the individual OLS predictors jointly minimize the AIPW variance (Proposition 3.1), it is also true that the individual ridge predictors jointly minimize this program ab-
ove. The following lemma demonstrates that from the perspective of regret minimization, working with the estimated prediction loss functions is, in expectation, equivalent to working with the actual prediction loss functions:
Lemma 4.8. For each iteration t, the following conditional unbiasedness holds:
E
“
lpt
`βtp1q, βtp0q ̆  ́ lpt
`β ̊p1q, β ̊p0q ̆ | Ft ́1
‰ “ lt
`βtp1q, βtp0q ̆  ́ lt
`β ̊p1q, β ̊p0q ̆ .
The Sigmoid-FTRL design uses an adaptive step size ηt which decreases over time. A standard way to analyze online algorithms with adaptive step sizes is to introduce auxiliary objective functions and decision variables, e.g. see Chapter 7 of (Orabona, 2023). Following this conventional analysis, we introduce
L ̃t
`βp1q, βp0q ̆ “
t ́1
ÿ
s“1
lpspβp1q, βp0qq`η ́1
t ́1m`βp1q, βp0q ̆ and βrtp1q, βrtp0q “ arg min
βp1q,βp0q
L ̃t
`βp1q, βp0q ̆ ,
where L ̃t is the regularized loss function which uses the previous iteration’s step size η ́1
t ́1
instead than the current step size η ́1
t and βrtp1q and βrtp0q are the linear predictors which are
obtained by minimizing L ̃t. Standard FTRL arguments yield the following regret bound:
Lemma 4.9. The expected prediction regret is bounded as
ErRpred
T s ď m`β ̊p1q, β ̊p0q ̆
ηT `1
`E
«T ÿ
t“1
L ̃ t`1
`βtp1q, βtp0q ̆  ́ L ̃t`1
`
βrt`1p1q, βrt`1p0q ̆
ff
.
The upper bound in Lemma 4.9 has two parts. The first part involves the final step size and the norm of the OLS predictors. This term will be simple to bound because the step size is controlled throughout the algorithm and the OLS solution is easily bounded via Assumptions 1 and 2. The second part involves the sum of the successive differences of regularized objective functions, which measures the optimality gap between the selected βtpkq and the minimal βrt`1pkq on the objective function L ̃t`1. -
By the definition of βrt, this term is non-negative and so it must be upper bounded. Such analyses usually proceed by bounding these successive differences by first order convexity, i.e. using the shorthand βt “ pβtp1q, βtp0qq for concatenation:
L ̃t`1pβtq  ́ L ̃t`1pβrt`1q ď x∇L ̃t`1pβrt`1q, βt  ́ βrt`1y .
However, this will not suffice for our analysis because it will not allow us to leverage the regularity in the covariates. Indeed, using the first order convexity bound will result in each covariate vector xt being considered separately, whereas the covariates are only assumed to be
15

regular in aggregate as measured by the invertiblity of the covariate matrix (Assumption 2). For this reason, we must analyze this difference of terms appearing in Lemma 4.9 directly. To this end, define the per iteration leverage scores as
Πt,s “ x⊺
t
 ́
X⊺
t ́1Xt ́1 ` η ́1
tI
 ̄ ́1
xs ,
where Xt ́1 “ ř
sďt ́1 xsx⊺
s . Unlike the usual leverage score, the per iteration leverage score Πt,s is not symmetric because the matrix Xt ́1 appearing inside depends on the iteration t. In usual regression analysis, the leverage score appears when adding a new pyt, xtq pair and studying how the estimated βp changes. This per-iteration leverage score is playing a subtly different role in our analysis. Roughly speaking, it appears when we ask how the addition of a new pyt, xtq pair affects the ridge loss on the entire data-
, including the newly added pair. The following lemma shows precisely how the per-iteration leverage score arises in analyzing the successive difference terms appearing in Lemma 4.9.
Lemma 4.10. The successive difference can be written as:
L ̃ t`1
`βtp1q, βtp0q ̆  ́ L ̃t`1
`
βrt`1p1q, βrt`1p0q ̆ “ Πt,t
1 ` Πt,t
 ̈
lpt
`βtp1q, βtp0q ̆ .
The benefit of Lemma 4.10 is that it allows us to make use regularity of the entire sequence of covariates (Assumption 2) through the per-iteration leverage scores. The remainder of the proof for bounding the prediction regret can be carried out via direct calculation, using properties of the per-iteration leverage scores and the bound on the fourth moment of the online residuals (Lemma 4.6). We defer to Section B.4 of the appendix for details and summarize the main result here:
Proposition 4.11. Under Assumptions 1-3 and Condition 1, there exists a constant C ą 0
such that the expected prediction regret is bounded as ErRpred
T s ď pC ` op1qqT 1{2R2.
The proof of Theorem 4.1 is completed by applying the Neyman Regret decomposition (Lemma 3.3) with the bounds on the probability regret (Proposition 4.7) and prediction regret (Proposition 4.11).
4.5 Fourth Moments: Prediction Tracking
In this section, we provide a proof sketch for Lemma 4.6, which bounds the fourth moments of the online residuals. Our high level approach will be as follows: we introduce a sequence of deterministic linear predictors and argue that (1) the online residuals of this deterministic predictor sequence is bounded (2) the difference between the deterministic and the adaptive residuals is a low order term. We refer to this proof technique as prediction tracking. For each treatment k P t0, 1u, we define t-
he sequence of full information predictors tβ ̊
t pkqutT“1 as the solutions to the ridge regression:
β ̊
t pkq “ arg min
βPRd
ÿ
săt
 ́
yspkq  ́ xxs, βy
 ̄2
` η ́1
t ∥β∥2 ,
where the penalty term ηt is as chosen in Sigmoid-FTRL. We remark that the sequence of full-information predictors tβ ̊
t pkqutT“1 is deterministic because it depends on the potential outcomes, not the observed outcomes, hence the name “full-information”. As such, we cannot hope to compute the full-information predictors directly—they are defined merely for the purposes of analysis. The purpose of introducing these full-information predictors is that they
16

are a deterministic sequence around which the adaptively chosen predictors will concentrate. The following conditional unbiasedness property is a direct consequence of the adaptive IPW weighting used in the ridge regression step of Sigmoid-FTRL:
Lemma 4.12. For each iteration t P rT s and treatment k P t0, 1u, the adaptive linear predictors are conditionally unbiased for the full-information predictors: Erβtpkq | Ft ́1s “ β ̊
t pkq a.s.
In Section B.2 of the appendix, we show that the fourth moments of the full-information
residuals are bounded as řT
t“1 ηttytpkq  ́ xxt, β ̊
t pkqyu4 “ OpT 1{2R2q using the moment conditions and covariate regularity, i.e. Assumptions 1 and 2. What remains to be shown is that the adaptively selected predictors’ residuals “tracks” that of the deterministic full-information predictors, in the sense that they have roughly the same fourth moment. To this end, the following proposition calculates what we refer to as the “prediction tracking error”. We focus our exposition on the treatment k “ 1:
Lemma 4.13. The expected prediction tracking error is computed as
E
”T
ÿ
t“1
ηtxxt, βtp1q  ́ β ̊
t p1qy4ı
“E
”T
ÿ
t“1
ηt
 ́t ́1
ÿ
s“1
Πt,sysp1q
! 1rZs “ 1s
ps
 ́1
) ̄4ı
.
Lemma 4.13 demonstrates that the expected prediction tracking error depend on three things: the per-iteration leverage scores, the potential outcomes, and the fourth moments of the inverse probabilities. Throughout the remainder of the section, we focus on the role of the inverse probabilities moments; in the appendix, all three of these quantities are carefully dealt with. The inverse probabilities are controlled, in part, by our choice of sigmoidal regularization. The following lemma illustrates-
 the effect of the sigmoidal regularization for any sigmoid satisfying Condition 1 on the resulting inverse probabilities.
Lemma 4.14. Consider A, B ě 0 an define p ̊ as the minimizer of the following program:
p ̊ “ arg min
pPp0,1q
A
p` B
1  ́ p ` η ́1Ψppq .
Then, the minimizer p ̊ is bounded away from 0 and 1 in the following sense: there exists a universal constant C ą 0 depending only on b1, b2, b3 in Condition 1 such that
1
p ̊ ď 2 ` C  ̈ min
 ́
pηBq1{4,
 ́B
A
 ̄1{2 ̄
and 1
1  ́ p ̊ ď 2 ` C  ̈ min
 ́
pηAq1{4,
 ́A
B
 ̄1{2 ̄
.
Lemma 4.14 provides two types of upper bounds on the inverse probabilities based on the quantities A and B in the objective and the regularization parameter η ́1. If the regularization parameter η ́1 is large relative to A and B, then the inverse probabilities are bounded. Alternatively, if A and B are of the same magnitude so that their ratio is small, then the inverse probabilities are also bounded. Lemma 4.14 relies on the curvature conditions of the sigmoidal regularizer (Condition 1). In each-
 iteration of the Sigmoid-FTRL design, the treatment assignment probability pt is chosen according to the minimization in Lemma 4.14 where η is the step size ηt and A and B are the estimated online residuals Apt ́1p1q and Apt ́1p0q under treatment and control, respectively. The first type of bounds in Lemma 4.14 imply that if we want Er1{pts and Er1{p1  ́ ptqs to be small, we need that the estimated residuals are small in expectation:
17

Corollary 4.15. There exists a universal constant C ą 0 depending on b1 and b2 in Condition 1 such that for each iteration t P rT s and any 0 ď k ď 4, the kth moment of the inverse probabilities are bounded as
E
” ́ 1
pt
 ̄k ı
ď
!
2`C  ̈
 ́
ηt E
”
Apt ́1p0q
ı ̄1{4)k
E
” ́ 1
1  ́ pt
 ̄k ı
ď
!
2`C  ̈
 ́
ηt E
”
Apt ́1p1q
ı ̄1{4)k
.
Corollary 4.15 demonstrates that in order to bound the inverse probabilities, we must bound the expectation of the estimated online residuals ErApt ́1p1qs and ErApt ́1p0qs. The following lemma computes these expectation directly. For each treatment k P t0, 1u, we define the full-information online residuals as At ̊pkq “ ř
sďtpytpkq  ́ xxt, β ̊
t pkqyq2.
Lemma 4.16. For any t P rT s, the expectation of the estimated squared residuals is equal to
ErAptp1qs “ A ̊
t p1q `
t
ÿ
s“1
s ́1
ÿ
r“1
Π2
s,r y 2
r p1q E
”1
pr
 ́1
ı
ErAptp0qs “ A ̊
t p0q `
t
ÿ
s“1
s ́1
ÿ
r“1
Π2
s,r y 2
r p0q E
”1
1  ́ pr
 ́1
ı
.
The magnitude of the estimated online residuals depends on all of the inverse probabilities in previous iterations. The reason for this is that Aptp1q and Aptp0q are estimated using the adaptive IPW technique. At first glance, it appears that we have run into a circular problem: in order to bound the inverse probabilities, we must bound the estimated online residuals, but doing so requires bounding the inverse probabilities. Fortunately, both the inverse probabilities and the estimated online resi-
duals can be bounded through an inductive method. At the first iteration, the estimated online residuals are Ap0p1q “ Ap0p0q “ 0 so the treatment probability is p1 “ 1{2, and thus both of these quantities are well-controlled. At later iterations, we use the inductive hypothesis that ErApt ́1p1qs and ErApt ́1p0qs cannot be too large together with Corollary 4.15 to establish that the inverse probabilities Er1{pts and Er1{p1  ́ ptqs are bounded. Using this together with the inductive hypothesis that -
previous inverse probabilities Er1{pss and Er1{p1  ́ psqs are bounded for s ă t, we are able to bound ErAptp1qs and ErAptp0qs, thereby completing the inductive proof. This method of argument, described in full detail in Section B.4 of the appendix, establishes the bound on the prediction tracking error:
Proposition 4.17. Under Assumptions 1-3 and Condition 1, the prediction tracking error for for both treatments k P t0, 1u can be bounded as ErřT
t“1 ηtxxt, βtpkq  ́ β ̊
t pkqy4s “ opT 1{2R2q.
5 Asymptotically Valid Inference
In this section, we propose methods for asymptotically valid confidence intervals using SigmoidFTRL. While the the results on Neyman regret in Section 4 were stated in terms of finite sample analysis, the results in this section will be solely focused on asymptotic analysis using the triangular array asymptotics discussed in Section 2.3.
5.1 Non-Superefficiency
In design-based inference, it is necessary to place assumptions on the potential outcomes which ensure that the variance of an effect estimator is not superefficient, i.e. the variance does not
18

decay faster than the usual n ́1 rate (Aronow and Samii, 2017; Leung, 2022; Harshaw, Sävje, and Wang, 2022). For example, if the potential outcomes are perfectly correlated so that the AIPW estimator is constant, then the variance can be equal to zero. When potential outcomes are presumed to be sampled i.i.d. from a superpopulation, such an event would occur with probability zero; however, it has so far been permissible under our assumptions. In particular, note that the convergence of the Neyman-
 regret ensures only an upper bound the variance, not a lower bound. Throughout most of the design-based literature which focuses on complex designs, superefficiency is guaranteed by direct assumption—that is, by assuming that lim inf n  ̈ Varpτˆq ą 0. Perhaps surprisingly, we are able to identify precise conditions when the adaptive AIPW estimator will be non-superefficient under Sigmoid-FTRL. Recall that the oracle variance is given by T  ̈ V ̊ “ 2p1 ` ρqEp1qEp0q, where Ep1q and Ep0q are the min-
imal residuals in each treatment condition and ρ is the correlation of residuals between the conditions. The following theorem shows that the asymptotic variance of the adaptive estimator is exactly the oracle variance.
Theorem 5.1. Under Assumptions 1-3 and Condition 1, the asymptotic variance of the adaptive AIPW estimator under Sigmoid-FTRL is the oracle variance:
T  ̈ Varpτˆq “ 2p1 ` ρqEp1qEp0q ` op1q .
While Theorem 5.1 derives the exact asymptotic variance of the adaptive AIPW estimator under Sigmoid-FTRL, it does not imply the Neyman regret guarantee of Theorem 4.1. Theorem 4.1 shows that the difference between the (standardized) adaptive and oracle variances goes to zero at the rate T  ́1{2R2. On the other hand, Theorem 5.1 establishes the exact asymptotic variance, albeit at slower rates of convergence hidden in the op1q term. In this sense, Theorems 4.1 and 5.1 are complimentary but ultimat-
ely incomparable. Theorem 5.1 shows that the exact asymptotic variance depends only on the optimal residuals Ep1q and Ep0q as well as the residual correlation ρ. Assumption 1 ensures that these Ep1q and Ep0q are bounded from below. The following assumption ensures that the correlation is bounded away from  ́1, which implies that the estimator is not superefficient.
Assumption 4 (Bounded Correlation). lim infT Ñ8 ρ ą  ́1.
Corollary 5.2 (Non-Superefficiency). Under Assumptions 1-4 and Condition 1, lim infT Ñ8 T  ̈ Varpτˆq ą 0.
5.2 Central Limit Theorem
To facilitate the development of asymptotically valid inference, we derive a central limit theorem for the adaptive AIPW estimator under Sigmoid-FTRL. Because the estimator has a martingale structure with respect to iterations in the adaptive design, we will use a standard martingale CLT. While the martingale CLT itself is standard, verifying the necessary conditions will require new technical developments.
Lemma 5.3 (Helland, 1982). If Xt,T is a triangular array of martingale difference sequences with respect to filtrations Ft,T , i.e. ErXt,T | Ft ́1,T s “ 0, then if
1. There exists δ ą 0 such that řT
t“1 ErX2`δ
t,T | Ft ́1,T s ÝpÑ 0
2. V 2
T fi řT
t“1 ErX2
t,T | Ft ́1,T s ÝpÑ 1
then the sum ST “ řT
t“1 Xt,T converges to a standard normal in distribution, ST
ÝdÑ N p0, 1q.
19

In order to use the martingale CLT, we will consider the martingale difference sequence given by
Xt,T “ τˆt  ́ τt
T
aVarpτˆq
,
where τt “ ytp1q  ́ ytp0q in the individual treatment effect and
τˆt “ xxt, βtp1qy  ́ xxt, βtp0qy ` `Yt  ́ xxt, βtp1qy ̆  ̈ 1rZt “ 1s
pt
 ́
`Yt  ́ xxt, βtp0qy ̆  ̈ 1rZt “ 0s
1  ́ pt
is the individual effect estimator. One can readily verify that řT
t“1 Xt,T “ pτˆ  ́ τ q{
aVarpτˆq, so that it remains to argue for the two conditions in Lemma 5.3: the Lyapunov condition and the stable variance condition. Due to space considerations, we defer the full proof to Section C.2 in the appendix. Instead, we highlight two technical developments in the proof which involve controlling the inverse probabilities.
Almost Sure Bounds on Inverse Probabilities In the proof of the central limit theorem, we bound the inverse probabilities almost surely. Because Assumption 1 bounds only the fourth moments of outcomes, an almost sure bound on the inverse probabilities is necessary to verify the Lyapunov condition. The following proposition contains our almost sure bound:
Proposition 5.4. Under Assumption 1 and Condition 1, there exists a constant K ą 0 so that
Pr
 ́
max
!1
pt
,1
1  ́ pt
)
ď K  ̈ T 7{26R ́4{11
t for all t P rT s
 ̄
“1 .
The curvature conditions on the sigmoidal regularizer (Condition 1) play a crucial role in proving Proposition 5.4. In particular, we apply an inductive and iterative argument based on the probability regularization lemma (Lemma 4.14). It is crucial to our argument to use not only the bound based on the magnitude of the estimated residuals Aptp1q and Aptp0q, but also the bound based on the magnitude of their ratios Aptp1q{Aptp0q and Aptp0q{Aptp1q.
Stability of Inverse Probabilities In proving the variance stabilization condition, we need to go beyond almost sure bounds and establish the stability of the inverse probabilities; stability of the linear predictors is also required, but this is established through the prediction tracking technique described in Section 4.5. For this purpose, we introduce the stabilized probability pst, which we define as
pst “ arg min
pPp0,1q
ErApt ́1p1qs
p ` ErApt ́1p0qs
1 ́p ` 1
ηt
 ̈ Ψppq . (1)
The stabilized probability pst is a deterministic quantity which is defined similarly to the random adaptively chosen probability pt, except that the stabilized probability pst replaces the estimated squared residuals with their expected values. In the proof of the central limit theorem, we investigate the expected absolute differences of the inverse probabilities to the inverse stabilized probabilities: Er|1{pt  ́ 1{pst|s and Er|1{p1  ́ ptq  ́ 1{p1  ́ pstq|s. These differences can be expressed in-
 terms of the differences in the first order optimality conditions of (1), which can further be expressed as differences Apt ́1p1q  ́ ErApt ́1p1qs and Apt ́1p0q  ́ ErApt ́1p0qs. The subtle aspect is that variance VarpApt ́1p1qq depends on the expectation ErApt ́1p0qs in the following way: when ErApt ́1p0qs is large, then 1{p is small and thus VarpApt ́1p1qq is large due to the favorable inverse probability weighting. Likewise, the
20

variance VarpApt ́1p0qq depends on the expectation ErApt ́1p1qs. In essence, the terms Apt ́1p1q and Apt ́1p0q have a mutually normalizing property. This mutually normalizing property is used to prove several delicate aspects of the central limit theorem, including the following proposition:
Proposition 5.5. Under Assumptions 1-3,
1 T
T
ÿ
t“1
`ytp1q  ́ xxt, β ̊
t p1qy ̆2 E
”1
pt
 ́1
pst
ı
Ñ0 .
Proving Proposition 5.5 is challenging because the residuals and the difference of the inverse probabilities cannot be analyzed separately, e.g. using Hölder’s inequality. The issue is that under Sigmoid-FTRL, a small proportion of the inverse probabilities 1{pt could be large; in fact, some inverse probability terms 1{pt will not concentrate around the inverse stabilized probability 1{pst. This means that some of the terms Er|1{pt  ́ 1{pst|s can be large. The saving grace is that when the differe-
nce of these probabilities are large, the corresponding residuals must be small, so that the product in the sum is controlled. The formal proof of Proposition 5.5 relies heavily on the mutually normalizing property described above. Given its central role in the proof, we believe that the mutual normalizing property might be of independent interest.
5.3 Variance Estimation and Confidence Intervals
In order to construct confidence intervals, we need to first construct an estimator for the oracle variance T  ̈ V ̊ “ 2p1 ` ρqEp1qEp0q. However, this oracle variance cannot be consistently estimated because the residual correlation ρ does not admit a consistent estimator. The impossibility of consistent variance estimation is a well-known problem in the design-based framework (see e.g. Harshaw, Middleton, and Sävje, 2021; Imbens and Rubin, 2015). In light of this issue, experimenters tend to opt -
for conservative (i.e. upwardly biased) estimates of the variance, which in turn yield conservative inferential procedures. Conservative variance estimates are typically constructed by first identifying an estimable upper bound on the variance, or variance bound for short.
The most common variance bound is due to Neyman (1923) and was originally derived in the setting of a (non-adaptive) completely randomized experiment. We proceed by adapting his variance bound to the current setting. Because the correlation is at most ρ ď 1, we have that T  ̈ V ̊ ď T  ̈ VB fi 4Ep1qEp0q, which is referred to as the Neyman variance bound. Unlike the variance itself, the Neyman variance bound is estimable because it depends only on the squared residuals Ep1q and Ep0q, each of which m-
ay be estimated to high precision. Interestingly, selecting the Neyman allocation p ̊, β ̊p1q, and β ̊p0q which minimizes the variance and then applying Neyman’s bound is equivalent to first applying Neyman’s bound and then selecting the allocation to minimize the bound. In other words, by constructing an adaptive design which minimizes the variance of the point estimator, we are also minimizing the expected width of the resulting confidence interval. In order to construct a consistent estimator f-
or the variance bound VB, we focus first on constructing consistent estimates of the squared residuals. For each treatment k P t0, 1u, the squared residual may be given as
E2pkq “ arg min
βPRd
1 T
T
ÿ
t“1
`ytpkq  ́ xxt, βy ̆2 “ 1
T ypkq⊺Qypkq ,
where Q is the orthogonal projection matrix I  ́ XpX⊺Xq ́1X⊺, X is the T -by-d matrix whose rows are covariate vectors, and ypkq is the vector of potential outcomes ypkq “ py1pkq . . . yT pkqq.
21

To simplify the notation, we introduce Apkq “ E2pkq. In order to estimate the optimal residuals, we use an adaptive IPW estimator applied to the quadratic form,
App1q “ 1
T
T
ÿ
t“1
Qt,tY 2
t
1rZt “ 1s
pt
`1
T
T
ÿ
t“1
ÿ
s‰t
Qt,sYtYs
1rZt “ 1, Zs “ 1s
ptps
and
App0q “ 1
T
T
ÿ
t“1
Qt,tY 2
t
1rZt “ 0s 1  ́ pt
`1
T
T
ÿ
t“1
ÿ
s‰t
Qt,sYtYs
1rZt “ 0, Zs “ 0s
p1  ́ ptqp1  ́ psq .
The adaptive inverse probability weighting is chosen so that Appkq is an unbiased estimate of Apkq. Even though this estimate Appkq is unbiased for the positive value Apkq, there is a small chance that it will take negative values. To account for this possibility, we define the estimated OLS residuals as Eppkq “ maxpAppkq, 0q1{2. However, the following Theorem shows that Appkq is a consistent estimator, and so it takes negative values with vanishingly small probability.
Theorem 5.6. Under Assumptions 1-3 and Condition 1, for each treatment k P t0, 1u, we have that the estimated squared OLS residuals satisfy
ErAppkqs “ Apkq and VarpAppkq2q “ OptT  ́5{12R2{3u2q .
Theorem 5.6 shows that Eppkq is consistent at a rate T  ́5{12R2{3, which depends on both the number of samples T and the maximum radius of the covariates R. Under Assumption 3, we have that R “ opT 1{4q so that the consistency is always at least Eppkq  ́ Epkq “ oppT  ́1{4q. On the other hand, if R “ Op1q, then the estimator Eppkq converges at an improved rate of OppT  ́5{12q.
It’s interesting to note that Sigmoid-FTRL uses adaptive experimentation to ensure maximal efficiency of the point estimator, but this seems to come at the cost of slightly worsened rates of consistency of the variance bound estimator. We find this trade-off to be unproblematic because efficiency of the point estimator is the first order concern for confidence intervals. In contrast, the estimated variance bound is required only to be consistent, and the precise rate is inconsequential for asympto-
tic coverage. It is an interesting question whether this trade-off is necessary, or merely an artifact of our approach. The proof of Theorem 5.6 proceeds by analyzing the covariance of the individual terms in the quadratic estimator. This requires specialized case analysis of subject pairs ps, tq and pk, lq. For example, if the subject pairs are distinct, i.e. ts, tu X tk, lu “ H, then the corresponding covariance term is zero. We refer the reader to Section C.4 of the appendix for the full case a-
nalysis. Given the estimates of the OLS residuals, we construct an estimator of the Neyman variance bound as T  ̈ VyB “ 4Epp1qEpp0q. The estimated variance bound inherits the same rates of consistency:
Corollary 5.7. Under Assumptions 1-3 and Condition 1, T  ̈ VyB  ́ T  ̈ VB “ OppT  ́5{12R2{3q.
The estimator of the variance bound, together with the central limit theorem, yields the following Wald-type confidence intervals: for a given α P p0, 1q level, the confidence interval CxIα is
CxIα “ τˆ  ̆ Φ ́1p1  ́ α{2q  ̈
a
VyB ,
where Φ ́1 : p0, 1q Ñ R` is the quantile function of a standard normal.
Corollary 5.8. Under Assumptions 1-4 and Condition 1, the Wald-type intervals cover at the nominal level: lim infT Ñ8 Prpτ P CxIαq ě 1  ́ α.
22

6 Conclusion
In this paper, we have investigated the problem of Adaptive Neyman Allocation for AIPW estimators in the design-based framework. We have presented Sigmoid-FTRL, an adaptive experimental design which selects treatment probabilities and linear predictors together. Assuming mild regularity conditions, the Neyman Regret under Sigmoid-FTRL converges at a rate of T  ́1{2R2. This rate is optimal in its T dependence as evidenced by our lower bound of T  ́1{2. A central limit theorem and variance estimator-
 facilitate the construction of asymptotically valid Wald-type confidence intervals. There are several avenues for future work. One of the technical questions raised by this paper is whether the dependence of R2 in the Neyman Regret is necessary. We conjecture that the answer is yes, but establishing this would require a more refined lower bound construction. It is also an interesting direction to explore anytime valid confidence sequences in conjunction with Adaptive Neyman Allocation in the desi-
gn-based setting. For example, it would be interesting to understand the extent to which minimizing the width of the Wald-type interval (i.e. the central goal of Adaptive Neyman Allocation) and minimizing the width of the anytime valid intervals may be similar or conflicting goals.
References
Aronow, P.M. and Cyrus Samii (2017). “Estimating Average Causal Effects under General Interference”. In: Annals of Applied Statistics 11.4, pp. 1912–1947. Blackwell, Matthew, Nicole E. Pashley, and Dominic Valentino (2022). Batch Adaptive Designs to Improve Efficiency in Social Science Experiments. Working Paper. Harvard University. url: https://www.mattblackwell.org/files/papers/batch_ adaptive.pdf.
Chen, Jiafeng and Isaiah Andrews (2023). “Optimal Conditional Inference in Adaptive Experiments”. arXiv: 2309.12162 [stat.ME]. Cook, Thomas, Alan Mishler, and Aaditya Ramdas (2024). “Semiparametric Efficient Inference in Adaptive Experiments”. In: Proceedings of the Third Conference on Causal Learning and Reasoning. Vol. 236. Proceedings of Machine Learning Research, pp. 1033–1064. Dai, Jessica, Paula Gradu, and Christopher Harshaw (2023). “Clip-OGD: An Experimental Design for Adaptive Neyman Allo-
cation in Sequential Experiments”. In: Advances in Neural Information Processing Systems 37.
Hadad, Vitor et al. (2021). “Confidence intervals for policy evaluation in adaptive experiments”. In: PNAS 118.15. doi: 10.1073/pnas.2014602118. Hahn, Jinyong, Keisuke Hirano, and Dean Karlan (2011). “Adaptive Experimental Design Using the Propensity Score”. In: Journal of Business & Economic Statistics 29.1, pp. 96–108. (Visited on 12/21/2022). Harshaw, Christopher (2025). “Why are RCTs the Gold Standard? The Epistemological Difference Between Randomized Experiments and Observational Studies”. In-
: (to appear in) Observational Studies.
Harshaw, Christopher, Joel A. Middleton, and Fredrik Sävje (2021). “Optimized variance estimation under interference and complex experimental designs”. arXiv:2112.01709. arXiv: 2112.01709 [stat.ME].
23

Harshaw, Christopher, Fredrik Sävje, and Yitan Wang (2022). “A Design-Based Riesz Representation Framework for Randomized Experiments”. arXiv:2210.08698. arXiv: 2210.08698v2 [stat.ME].
Hazan, Elad (2016). “Introduction to Online Convex Optimization”. In: Foundations and Trends® in Optimization 2.3-4, pp. 157–325. issn: 2167-3888. Helland, Inge S (1982). “Central limit theorems for martingales with discrete or continuous time”. In: Scandinavian Journal of Statistics, pp. 79–94.
Hernán, Miguel and James Robins (2020). Causal Inference: What If. London: Chapman & Hall. Holland, Paul W. (1986). “Statistics and Causal Inference”. In: Journal of the American Statistical Association 81.396, pp. 945–960.
Horn, Roger A and Charles R Johnson (2012). Matrix analysis. Cambridge university press. Howard, Steven R. et al. (2021). “Time-uniform, nonparametric, nonasymptotic confidence sequences”. In: The Annals of Statistics 49.2, pp. 1055 –1080. Imbens, Guido W. and Donald B. Rubin (2015). Causal Inference for Statistics, Social, and Biomedical Sciences: An Introduction. Cambridge University Press.
Kato, Masahiro et al. (2024). “Active adaptive experimental design for treatment effect estimation with covariate choice”. In: Proceedings of the 41st International Conference on Machine Learning. ICML’24.
Kato, Masahiro et al. (2025). “Efficient Adaptive Experimental Design for Average Treatment Effect Estimation”. arXiv: 2002.05308 [stat.ML]. Laan, Mark J. van der (2008). “The Construction and Analysis of Adaptive Group Sequential Designs”. Working Paper 232. Laan, Mark J. van der and Samuel D. Lendle (2014). “Online Targeted Learning”. Working Paper 330. Lattimore, Tor and Csaba Szepesvári (2020). Bandit Algorithms. Cambridge University Press. Lei, Lihua and Peng Ding (2020). “Regression adjustme-
nt in completely randomized experiments with a diverging number of covariates”. In: Biometrika 108.4, pp. 815828. Leung, Michael P. (2022). “Causal Inference Under Approximate Neighborhood Interference”. In: Econometrica 90.1, pp. 267–293. Li, Jiachun, David Simchi-Levi, and Yunxiao Zhao (2024). “Optimal Adaptive Experimental Design for Estimating Treatment Effect”. arXiv: 2410.05552 [stat.ML]. Lin, Winston (2013). “Agnostic Notes on Regression Adjustments to Experimental Data: Reexamining Freedma-
n’s Critique”. In: Annals of Applied Statistics 7.1, pp. 295–318. Neopane, Ojash, Aaditya Ramdas, and Aarti Singh (2025a). “Logarithmic Neyman Regret for Adaptive Estimation of the Average Treatment Effect”. In: Proceedings of The 28th International Conference on Artificial Intelligence and Statistics. Vol. 258, pp. 4303–4311. — (2025b). “Optimistic Algorithms for Adaptive Estimation of the Average Treatment Effect”. In: Proceedings of the 42nd International Conference on Machine Learning. Vol. 26-
7, pp. 45895–45910.
24

Neyman, Jerzy (1923). “On the Application of Probability Theory to Agricultural Experiments. Essay on Principles. Section 9”. In: Statistical Science 5.4. This republication appeared in 1990., pp. 465–472. — (1934). “On the Two Different Aspects of the Representative Method: The Method of Stratified Sampling and the Method of Purposive Selection”. In: Journal of the Royal Statistical Society 97.4, pp. 558–625. issn: 09528385. (Visited on 04/25/2023). Noarov, Georgy et al. (2025). “Stronger Neyman-
 Regret Guarantees for Adaptive Experimental Design”. In: Proceedings of the 42nd International Conference on Machine Learning. Vol. 267, pp. 46735–46761. Offer-Westort, Molly, Alexander Coppock, and Donald P. Green (2021). “Adaptive Experimental Design: Prospects and Applications in Political Science”. In: American Journal of Political Science 65.4, pp. 826–844.
Orabona, Francesco (2023). “A Modern Introduction to Online Learning”. arXiv: 1912. 13213 [cs.LG].
Robbins, Herbert (1952). “Some aspects of the sequential design of experiments”. In: Bulletin of the American Mathematical Society 58.5, pp. 527 –535.
Rubin, Donald B. (1980). “Comment: Randomization analysis of experimental data”. In: Journal of the American Statistical Association 75.371, p. 591.
Wald, A. (1945). “Sequential Tests of Statistical Hypotheses”. In: The Annals of Mathematical Statistics 16.2, pp. 117 –186.
Waudby-Smith, Ian et al. (2024). “Time-uniform central limit theory and asymptotic confidence sequences”. In: The Annals of Statistics 52.6, pp. 2613 –2640. Zhang, Kelly, Lucas Janson, and Susan Murphy (2020). “Inference for Batched Bandits”. In: Advances in Neural Information Processing Systems. Vol. 33. Curran Associates, Inc., pp. 9818–9829. — (2021). “Statistical Inference with M-Estimators on Adaptively Collected Data”. In: Advances in Neural Information Processing Systems. Vol. 34. Curran As-
sociates, Inc., 7460=–7471.
25

Appendix
Table of Contents
A Preliminary Results 27 A.1 Properties of AIPW Estimator . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 27 A.2 Verification of the Sigmoidal Condition . . . . . . . . . . . . . . . . . . . . . . . . . 28
B Neyman Regret Analysis 31 B.1 Neyman Regret Lower Bound . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 31 B.2 Technical Lemmas . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 35 B.3 Regret Decomposition . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 53 B.4 Probability Regret . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 56 B.5 Prediction Regret . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .-
 . . 70 B.6 Neyman Regret Analysis (Theorem 4.1) . . . . . . . . . . . . . . . . . . . . . . . . 79
C Inference Analysis 79 C.1 Almost Sure Bounds on Inverse Probabilities . . . . . . . . . . . . . . . . . . . . . 80 C.2 Central Limit Theorem . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 84 C.3 Non-superefficiency . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 115 C.4 Variance Estimator . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 132 C.5 Wald-type Confidence Intervals . . . . . . . . . . . . . . . . . . . . . . . . . . . . -
. 135
26

A Preliminary Results
A.1 Properties of AIPW Estimator
Proposition 2.1. If pt P p0, 1q for all t P rT s a.s. then the adaptive AIPW estimator is unbiased: Erτˆs “ τ .
Proof. By the construction method, βtp1q and βtp0q are measurable with respect to Ft ́1. Hence by the law of iterated expectations, we have
Erτˆs
“E
«
1 T
T
ÿ
t“1
"
xxt, βtp1qy  ́ xxt, βtp0qy ` 1rZt “ 1s
pt
pYt  ́ xxt, βtp1qyq  ́ 1rZt “ 0s
1  ́ pt
pYt  ́ xxt, βtp0qyq
*
ff
“1
T
T
ÿ
t“1
E
„
E
„
xxt, βtp1qy  ́ xxt, βtp0qy ` 1rZt “ 1s
pt
pYt  ́ xxt, βtp1qyq  ́ 1rZt “ 0s
1  ́ pt
pYt  ́ xxt, βtp0qyq
ˇ
ˇ
ˇFt ́1
ȷȷ
“1
T
T
ÿ
t“1
E rxxt, βtp1qy  ́ xxt, βtp0qy ` pytp1q  ́ xxt, βtp1qyq  ́ pytp0q  ́ xxt, βtp0qyqs
“1
T
T
ÿ
t“1
pytp1q  ́ ytp0qq
“τ .
Proposition 2.2. The normalized variance of the AIPW estimator is given as
T  ̈ Varpτˆq “ E
«
1 T
T
ÿ
t“1
 ̃
␣ytp1q  ́ xxt, βtp1qy(  ̈
c 1  ́ pt
pt
`
␣ytp0q  ́ xxt, βtp0qy(  ̈
c pt
1  ́ pt
 ̧2ff
.
Proof. By the proof in Proposition 2.1, it is easy to see that τˆ  ́ τ can be written as the sum of a martingale difference sequence, whose variance can be calculated by summing up the variance of each individual term. Hence by the law of total variance, the variance of τˆ can be calculated by:
T  ̈ Varpτˆq
“T  ̈ Varpτˆ  ́ τ q
“T  ̈ Var
«
1 T
T
ÿ
t“1
"ˆ 1rZt “ 1s
pt
 ́1
 ̇  ́
ytp1q  ́ xxt, βtp1qy
 ̄
 ́
ˆ 1rZt “ 0s
1  ́ pt
 ́1
 ̇  ́
ytp0q  ́ xxt, βtp0qy
 ̄
*
ff
“1
T
T
ÿ
t“1
Var
„ˆ 1rZt “ 1s
pt
 ́1
 ̇  ́
ytp1q  ́ xxt, βtp1qy
 ̄
 ́
ˆ 1rZt “ 0s
1  ́ pt
 ́1
 ̇  ́
ytp0q  ́ xxt, βtp0qy
 ̄
ȷ
“1
T
T
ÿ
t“1
Var
„
E
„ˆ 1rZt “ 1s
pt
 ́1
 ̇  ́
ytp1q  ́ xxt, βtp1qy
 ̄
 ́
ˆ 1rZt “ 0s
1  ́ pt
 ́1
 ̇  ́
ytp0q  ́ xxt, βtp0qy
 ̄ˇ
ˇ
ˇFt ́1
ȷȷ
`1
T
T
ÿ
t“1
E
„
Var
„ˆ 1rZt “ 1s
pt
 ́1
 ̇  ́
ytp1q  ́ xxt, βtp1qy
 ̄
 ́
ˆ 1rZt “ 0s
1  ́ pt
 ́1
 ̇  ́
ytp0q  ́ xxt, βtp0qy
 ̄ˇ
ˇ
ˇFt ́1
ȷȷ
“1
T
T
ÿ
t“1
E
„
Var
„ˆ 1
pt
 ́
ytp1q  ́ xxt, βtp1qy
 ̄
`1
1  ́ pt
 ́
ytp0q  ́ xxt, βtp0qy
 ̄
 ̇
1rZt “ 1s
ˇ
ˇ
ˇFt ́1
ȷȷ
27

“1
T
T
ÿ
t“1
E
«
ˆ1
pt
 ́
ytp1q  ́ xxt, βtp1qy
 ̄
`1
1  ́ pt
 ́
ytp0q  ́ xxt, βtp0qy
 ̄
 ̇2
ptp1  ́ ptq
ff
“E
«
1 T
T
ÿ
t“1
 ̃
␣ytp1q  ́ xxt, βtp1qy(  ̈
c 1  ́ pt
pt
`
␣ytp0q  ́ xxt, βtp0qy(  ̈
c pt
1  ́ pt
 ̧2ff
.
A.2 Verification of the Sigmoidal Condition
In this section, we verify that two commonly used sigmoid functions: φpuq “ 1
π parctanpuq`π{2q and φpuq “ 1
2p u
1`|u| ` 1q satisfy all the required conditions.
Lemma A.1. The choice of sigmoid function: φpuq “ 1
π parctanpuq ` π{2q satisfies Condition
1 with constants b1 “ π, b2 “ 25{2π
3 and b3 “ 2
π.
Proof. We verify the requirements in Condition 1 one by one.
(1) Condition 1 (1) is obvious.
(2) The derivative of 1{φpuq and 1{p1  ́ φpuqq are calculated as:
ˆ1
φpuq
 ̇1
“ ́ π
p1 ` u2q `arctanpuq ` 1
2 π ̆2 ,
ˆ1
1  ́ φpuq
 ̇1
“π
p1 ` u2q ` ́ arctanpuq ` 1
2 π ̆2 .
The second derivative of 1{φpuq and 1{p1  ́ φpuqq are calculated as:
ˆ1
φpuq
 ̇2
“ 2u
πp1 ` u2q2
 ́ arctanpuq
π `1
2
 ̄2 ` 2
π2p1 ` u2q2
 ́ arctanpuq
π `1
2
 ̄3
“2
π2p1 ` u2q2
 ́ arctanpuq
π `1
2
 ̄3
„
1`u
ˆ
arctanpuq ` 1
2π
 ̇ȷ
ˆ1
1  ́ φpuq
 ̇2
“  ́ 2u
πp1 ` u2q2
 ́
 ́ arctanpuq
π `1
2
 ̄2 ` 2
π2p1 ` u2q2
 ́
 ́ arctanpuq
π `1
2
 ̄3
“2
π2p1 ` u2q2
 ́
 ́ arctanpuq
π `1
2
 ̄3
„
1 ́u
ˆ
 ́ arctanpuq ` 1
2π
 ̇ȷ
.
When u ě 0, it is easy to see that p1{φpuqq
2
ą 0. When u ă 0, we have
u
ˆ
arctanpuq ` 1
2π
 ̇
“  ́ p ́uq
ˆ
 ́ arctanp ́uq ` 1
2π
 ̇
“  ́ p ́uq arctanp ́1{uq
ą  ́ p ́uq  ̈ p ́1{uq
“ ́1 .
Hence 1{φpuq is convex. Similarly, we can prove that 1{p1  ́ φpuqq is also convex by the symmetry.
28

(3a) By L’Hopital’s rule, we have
lim
uÑ ́8
a
1 ` u2
ˆ
arctanpuq ` 1
2π
 ̇
“ lim
uÑ ́8
`arctanpuq ` 1
2 π ̆
1{
?1 ` u2
“ lim
uÑ ́8
1{p1 ` u2q  ́up1 ` u2q ́3{2
“ lim
uÑ ́8
p1 ` u2q1{2
 ́u “1 .
Hence we have
 ́π ď
ˆ1
φpuq
 ̇1
ď0 .
(3b) Let θ “ arctanpuq. Then 1 ` u2 “ sec2pθq. Hence
ˆ1
φpuq
 ̇2
“2
π2p1 ` u2q2
 ́ arctanpuq
π `1
2
 ̄3
„
1`u
ˆ
arctanpuq ` 1
2π
 ̇ȷ
“2
π2 sec4pθq ` θ
π`1
2
 ̆3
„
1 ` tanpθq
ˆ
θ` 1
2π
 ̇ȷ
“ 2π cos3pθq
`θ ` 1
2 π ̆3
„
cospθq ` sinpθq
ˆ
θ` 1
2π
 ̇ȷ
.
Since p1 ` u2q3{2 “ sec3pθq, we have
p1 ` u2q3{2
ˆ1
φpuq
 ̇2
“ 2π
`θ ` 1
2 π ̆3
„
cospθq ` sinpθq
ˆ
θ` 1
2π
 ̇ȷ
.
Let t “ θ ` 1
2 π P p0, πq and f ptq “ sin t ́t cos t
t3 . By direct calculation, we have
f 1ptq “ sin tpt2  ́ 3q ` 3t cos t
t4 fi kptq
t4 .
By direct calculation, we have
k1ptq “ cos tpt2  ́ 3q ` 2t sin t ` 3 cos t  ́ 3t sin t “ tpt cos t  ́ sin tq .
Since when t “ 0, t cos t  ́ sin t “ 0 and for any t P p0, 2πq, we have
pt cos t  ́ sin tq1 “ cos t  ́ t sin t  ́ cos t “  ́t sin t ă 0 .
Hence we have k1ptq ă 0 for any t P p0, πq. Since kp0q “ 0, this implies that kptq ă 0 for any t P p0, πq. This further indicates that f 1ptq ă 0 for any t P p0, πq. By L’Hopital’s rule, we have
ltiÓm0 f ptq “ ltiÓm0
sin t  ́ t cos t
t3 “ ltiÓm0
cos t  ́ cos t ` t sin t
3t2 “ 1
3.
we have proved that for any t P p0, 2πq, f ptq ď 1{3. This implies that for any θ P p ́π{2, π{2q,
p1 ` u2q3{2
ˆ1
φpuq
 ̇2
“ 2π
`θ ` 1
2 π ̆3
„
cospθq ` sinpθq
ˆ
θ` 1
2π
 ̇ȷ
ď 2π
3.
Hence for any u P R, we have
ˆ1
φpuq
 ̇2
ď 2π
3 p1 ` u2q ́3{2 ď 2π
3  ̈ 23{2p1 ` |u|q ́3 “ 25{2π
3 p1 ` |u|q ́3 .
29

(3c) By the same argument as in the previous part, since f pπq “ 1{π2, we have proved that for any t P pπ{2, πq, f ptq ě 1{π2. This implies that for any θ P p0, π{2q,
p1 ` u2q3{2
ˆ1
φpuq
 ̇2
“ 2π
`θ ` 1
2 π ̆3
„
cospθq ` sinpθq
ˆ
θ` 1
2π
 ̇ȷ
ě2
π.
Hence for any u ě 0, we have
ˆ1
φpuq
 ̇2
ě2
π p1 ` u2q ́3{2 ě 2
π p1 ` uq ́3 .
Lemma A.2. The choice of sigmoid function: φpuq “ 1
2p u
1`|u| ` 1q satisfies Condition 1 with constants b1 “ 2, b2 “ 8 and b3 “ 1.
Proof. We verify the requirements in Condition 1 one by one.
(1) Condition 1 (1) is obvious.
(2) The derivative of 1{φpuq and 1{p1  ́ φpuqq are calculated as:
ˆ1
φpuq
 ̇1
“
#
 ́2
p2u`1q2 if u ě 0
 ́2 if u ď 0 ,
ˆ1
1  ́ φpuq
 ̇1
“
#
2 if u ě 0
2
p1 ́2uq2 if u ď 0 .
The second derivative of 1{φpuq and 1{p1  ́ φpuqq are calculated as:
ˆ1
φpuq
 ̇2
“
#8
p2u`1q3 if u ě 0
0 if u ď 0 ,
ˆ1
1  ́ φpuq
 ̇2
“
#
0 if u ě 0
8
p ́2u`1q3 if u ď 0 .
Hence it is easy to see that 1{φpuq and 1{p1  ́ φpuqq are convex.
(3a) By the calculations in part (2), it is easy to see that for any u P R,
 ́
ˆ1
φpuq
 ̇1
ď2 .
(3b) By the calculations in part (2), it is easy to see that for any u P R,
ˆ1
φpuq
 ̇2
ď8
p1 ` 2|u|q3 ď 8
p1 ` |u|q3 .
(3c) By the calculations in part (2), it is easy to see that for any u P R,
ˆ1
φpuq
 ̇2
“8
p2u ` 1q3 ě 1
p1 ` uq3 .
30

B Neyman Regret Analysis
In this section, we aim to perform a comprehensive analysis of the Neyman regret. Section B.1 derives a lower bound for the Neyman Regret. The rest sections derive an upper bound for the Neyman regret. Section B.2 presents the technical lemmas used in the subsequent proofs. In Section B.3, we prove Lemma 3.3, which decomposes the Neyman regret into two components: the probability regret and the prediction regret. Sections B.4 and B.5 provide upper bounds for each of these two components in Proposi-
tion 4.7 and Proposition 4.11, respectively. By combining the results from these sections, we establish the main theorem on Neyman regret (Theorem 4.1) in Section B.6.
B.1 Neyman Regret Lower Bound
In this section, we first prove the lower bound on the Neyman regret stated in Theorem 3.2. We then present Corollary B.1 and Lemma B.2, which together show that Assumptions 1–3 are all necessary for obtaining a regret upper bound of order OpT 1{2q, or at least sub-linear order.
Theorem 3.2 (Lower Bound). For all integers T and any adaptive experimental design Π, there exists a sequence tytp1q, ytp0q, xtutT“1 satisfying Assumptions 1-3 and a constant c ą 0,
such that the corresponding Neyman regret is at least RNeyman
T ě c  ̈ T  ́1{2.
Proof. For simplicity, we only prove the case where d “ 1 and R “ 1. Let xt “ 1 for any t P rT s. We generate the random sequence tytp1q, ytp0qu by the following: Generate ε1, . . . , εT as i.i.d. rademacher random variables. Generate an independent random vector D “ pD1, D2q that takes value p2, 4q with probability 1{2 and takes value p ́4,  ́2q with probability 1{2.
Let y1p1q “ D1pT 1{4 ` ε1p1qq, y1p0q “ D2pT 1{4 ` ε1p0qq, ytp1q “ D1p1 ` εtp1qq and ytp0q “ D2p1 ` εtp1qq for any t ě 2. Define the filtration Ft “ tysp0q, ysp1q : 1 ď s ď t  ́ 1u. It is easy to show that y1p1q, y1p0q are independent of F1 and Ery1p1qs “  ́T 1{4 and Ery1p0qs “ T 1{4. Hence by AM-GM inequality and law of iterated expectation, we have
E rT  ̈ Varpτˆqs
“1
T
T
ÿ
t“1
E
„
␣ytp1q  ́ xxt, βtp1qy(2  ̈ 1  ́ pt
pt
`
␣ytp0q  ́ xxt, βtp0qy(2  ̈ pt
1  ́ pt
ȷ
`2
T
T
ÿ
t“1
E
“␣ytp1q  ́ xxt, βtp1qy(  ̈ ␣ytp0q  ́ xxt, βtp0qy(‰
“1
TE
„
␣y1p1q ` T 1{4  ́ T 1{4  ́ xx1, β1p1qy(2  ̈ 1  ́ p1
p1
`
␣y1p0q  ́ T 1{4 ` T 1{4  ́ xx1, β1p0qy(2  ̈ p1
1  ́ p1
ȷ
`2
TE
”
␣y1p1q ` T 1{4  ́ T 1{4  ́ xx1, β1p1qy(  ̈ ␣y1p0q  ́ T 1{4 ` T 1{4  ́ xx1, β1p0qy(
ı
`1
T
T
ÿ
t“2
E
„
␣D1εt ` D1  ́ xxt, βtp1qy(2  ̈ 1  ́ pt
pt
`
␣D2εt ` D2  ́ xxt, βtp0qy(2  ̈ pt
1  ́ pt
ȷ
`2
T
T
ÿ
t“2
E
“␣D1εt ` D1  ́ xxt, βtp1qy(␣D2εt ` D2  ́ xxt, βtp0qy(‰
“1
TE
„
py1p1q ` T 1{4q2  ̈ 1  ́ p1
p1
ȷ
`1
TE
„
pT 1{4 ` xx1, β1p1qyq2  ̈ 1  ́ p1
p1
ȷ
`1
TE
„
py1p0q  ́ T 1{4q2  ̈ p1
1  ́ p1
ȷ
`1
TE
„
p ́T 1{4 ` xx1, β1p0qyq2  ̈ p1
1  ́ p1
ȷ
31

`2
TE
”
␣T 1{4 ` xx1, β1p1qy(  ̈ ␣ ́T 1{4 ` xx1, β1p0qy(
ı
`1
T
T
ÿ
t“2
E
„
E
„
␣D1εt ` D1  ́ xxt, βtp1qy(2  ̈ 1  ́ pt
pt
`
␣D2εt ` D2  ́ xxt, βtp0qy(2  ̈ pt
1  ́ pt
ˇ
ˇ
ˇFt ́1, D
ȷȷ
`2
T
T
ÿ
t“2
E
”
E
”
␣D1εt ` D1  ́ xxt, βtp1qy(␣D2εt ` D2  ́ xxt, βtp0qy(
ˇ
ˇ
ˇFt ́1, D
ıı
ě1
T p18T 1{2 ` 1qE
„ 1  ́ pt
pt
ȷ
`1
T p18T 1{2 ` 1qE
„ pt
1  ́ pt
ȷ
`1
T
T
ÿ
t“2
E
„
D2
1
1  ́ pt
pt
` D2
2
pt 1  ́ pt
` 2D1D2
ˇ
ˇ
ˇFt ́1, D
ȷ
`1
T
T
ÿ
t“2
E
„
E
„
␣y ̊
t p1q  ́ xxt, βtp1qy(2  ̈ 1  ́ pt
pt
`
␣y ̊
t p0q  ́ xxt, βtp0qy(2  ̈ pt
1  ́ pt
ˇ
ˇ
ˇFt ́1, D
ȷȷ
`2
T
T
ÿ
t“2
E
”
E
”
␣y ̊
t p1q  ́ xxt, βtp1qy(␣y ̊
t p0q  ́ xxt, βtp0qy(
ˇ
ˇ
ˇFt ́1, D
ıı
ě2
T p18T 1{2 ` 1q ` 32pT  ́ 1q
T
“ 36T 1{2 ` 32T  ́ 30
T.
On the other hand, we have
E
“T  ̈ V ̊‰ “ 2
TE
 ̈
 ̋
«T ÿ
t“1
`ytp1q  ́ β ̊p1q ̆2
ff1{2 « T ÿ
t“1
`ytp0q  ́ β ̊p0q ̆2
ff1{2
`
T
ÿ
t“1
`ytp1q  ́ β ̊p1q ̆ `ytp0q  ́ β ̊p0q ̆
 ̨
‚
ď4
TE
 ̈
 ̋
«T ÿ
t“1
`ytp1q  ́ β ̊p1q ̆2
ff1{2 « T ÿ
t“1
`ytp0q  ́ β ̊p0q ̆2
ff1{2 ̨
‚
“2
TE
»

«T ÿ
t“1
`ytp1q  ́ β ̊p1q ̆2
ff1{2 « T ÿ
t“1
`ytp0q  ́ β ̊p0q ̆2
ff1{2 ˇ
ˇ ˇ ˇ ˇ
D “ p2, 4q
fi
fl
`2
TE
»

«T ÿ
t“1
`ytp1q  ́ β ̊p1q ̆2
ff1{2 « T ÿ
t“1
`ytp0q  ́ β ̊p0q ̆2
ff1{2 ˇ
ˇ ˇ ˇ ˇ
D “ p ́4,  ́2q
fi
fl
“4
TE
»

«T ÿ
t“1
`ytp1q  ́ β ̊p1q ̆2
ff1{2 « T ÿ
t“1
`ytp0q  ́ β ̊p0q ̆2
ff1{2 ˇ
ˇ ˇ ˇ ˇ
D “ p ́4,  ́2q
fi
fl
ď2
T
«
1
2E
«T ÿ
t“1
pytp1q  ́ y ̄tp1qq2
ˇ ˇ ˇ ˇ ˇ
D “ p ́4,  ́2q
ff
` 2E
«T ÿ
t“1
pytp0q  ́ y ̄tp0qq2
ˇ ˇ ˇ ˇ ˇ
D “ p ́4,  ́2q
ffff
“2
T
T
ÿ
t“1
”1
2 Varrytp1q|D “ p ́4,  ́2qs ` 1
2 E2rytp1q|D “ p ́4,  ́2qs
` 2 Varrytp0q|D “ p ́4,  ́2qs ` 2E2rytp0q|D “ p ́4,  ́2qs
ı
 ́2
”1
2 Varry ̄tp1q|D “ p ́4,  ́2qs ` 1
2 E2ry ̄tp1q|D “ p ́4,  ́2qs
` 2 Varry ̄tp0q|D “ p ́4,  ́2qs ` 2E2ry ̄tp0q|D “ p ́4,  ́2qs
ı
“2
T
”
8T ` 8T 1{2 ` 8pT  ́ 1q ` 8T ` 8T 1{2 ` 8pT  ́ 1q
ı
 ́2
«
16
2T ` 1
2
ˆ 4T 1{4 ` 4pT  ́ 1q T
 ̇2
`8
T `2
ˆ 2T 1{4 ` 2pT  ́ 1q T
 ̇2ff
32

“ 32T ` 32T 1{2 ` opT 1{2q
T.
Hence we have
E
“T  ̈ Varpτˆq  ́ T  ̈ V ̊‰ ě 4T  ́1{2 ` opT  ́1{2q .
We then prove that there exist a certain configuration of tytp1q, ytp0q, xtu which satisfies Assumption 1-3 and the rate of the lower bound is attained. By construction method, we only need to verify that the squared loss under the OLS is of order OpT q. By symmetry, it suffices to prove the result in the treatment group k “ 1 when D “ p2, 4q. Since xt “ 1, we have
T
ÿ
t“1
`ytp1q  ́ β ̊p1q ̆2 ě
T
ÿ
t“2
`ytp1q  ́ β ̊p1q ̆2
ě min
βPR
T
ÿ
t“2
pytp1q  ́ βq2
“ min
βPR
T
ÿ
t“2
p2 ` εt  ́ βq2
“ min
βPR
T
ÿ
t“2
pεt  ́ βq2
Á min
#T ÿ
t“2
1rεt “ 1s,
T
ÿ
t“2
1rεt “  ́1s
+
.
By Hoeffding’s inequality, there exists constant r1, r2 ą 0 such that the probability of
min
#T ÿ
t“2
1rεt “ 1s,
T
ÿ
t“2
1rεt “  ́1s
+
ďT
4
is smaller than r1 expp ́r2T q. On the other hand, the regret is lower bounded by  ́E “T  ̈ V ̊‰, which is of order OpT q. Since T  ̈ r1 expp ́r2T q “ opT  ́1{2q, there exists a configuration such that min
!
řT
t“2 1rεt “ 1s, řT
t“2 1rεt “  ́1s
)
ěT
4 . Moreover, its Neyman regret is positive and
of order OpT  ́1{2q. Hence the result is proved.
The lower bound argument can also be used to demonstrate the necessity of the bounded fourth moment condition in Assumption 1 and the covariate regularity condition in Assumption 2. By similar construction as in Theorem 3.2, we can show the necessity of the bounded fourth moment condition in Assumption 1. This is formally stated in the following corollary.
Corollary B.1. For all integers T and for any adaptive experimental design Π, there exists a sequence tytp1q, ytp0q, xtutT“1 satisfying Assumptions 1-3 except for the bounded fourth moment condition in Assumption 1, and a constant c ą 0, such that the corresponding Neyman regret is at least RNeyman
T ě c.
Proof. For simplicity, we only prove the case where d “ 1 and R “ 1. The proof is similar to Theorem 3.2. Let xt “ 1 for any t P rT s. We generate the random sequence tytp1q, ytp0qu by the following: Generate ε1, . . . , εT as i.i.d. rademacher random variables. Generate an independent random vector D “ pD1, D2q that takes value p2, 4q with probability 1{2 and takes value p ́4,  ́2q with probability 1{2. Let y1p1q “ D1pT 1{2 ` ε1p1qq, y1p0q “ D2pT 1{2 ` ε1p0qq, ytp1q “ D1p1 ` εtp1qq and ytp0q “ D2-
p1 ` εtp1qq for any t ě 2. This construction differs
33

from that in Theorem 3.2 only in the specification of y1p1q and y1p0q, where the order OpT 1{4q is replaced by OpT 1{2q. By the same proof as in Theorem 3.2, we can prove that E
“T  ̈ Varpτˆq  ́ T  ̈ V ̊‰ ě 4 ` op1q. Moreover, one can similarly verify that Assumption 1 is satisfied, except for the bounded fourth-moment condition, for a sequence tytp1q, ytp0q, xtutT“1 such that the Neyman regret is of order Ωp1q. Hence the result is proved.
The following lemma states that the lower bound of the Neyman regret can also attain order Ωp1q if the covariate regularity condition in Assumption 2 is not placed.
Lemma B.2. For all integers T and for any adaptive experimental design Π, there exists a sequence tytp1q, ytp0q, xtutT“1 satisfying Assumptions 1 and 3, and a constant c ą 0, such that
the corresponding Neyman regret is at least RNeyman
T ě c.
Proof. For simplicity, we assume that c0 “ 1, c1 “ 2 and R ě 1 (R is shown to be at least order Θp1q in Lemma B.5). Suppose xt P Rd, where d “ T {2. We generate the random sequence tytp1q, ytp0q, xtu by the following: xt “ et for t “ 1, . . . , T {2 and xT {2`1 “ . . . “ xT “ 0. y1p1q, . . . , yT p1q are independently sampled from the uniform distribution on t ̆1u. Let ytp0q “ ytp1q for t “ 1, . . . , T . It is easy to see that the y’s have their marginal expectations as 0. Now we prove that
E
“T  ̈ Varpτˆq  ́ T  ̈ V ̊‰ “ Ωp1q.
Note that in such construction, the natural filtration Ft is generated by tysp1q, ysp0q, Zs : 1 ď s ď t  ́ 1u. By Proposition 2.2 and law of iterated expectation, we have
E rT  ̈ Varpτˆqs
“1
T
T
ÿ
t“1
E
„
␣ytp1q  ́ xxt, βtp1qy(2  ̈ 1  ́ pt
pt
`
␣ytp0q  ́ xxt, βtp0qy(2  ̈ pt
1  ́ pt
ȷ
`2
T
T
ÿ
t“1
E
“␣ytp1q  ́ xxt, βtp1qy(␣ytp0q  ́ xxt, βtp0qy(‰
“1
T
T
ÿ
t“1
E
„
y2
t p1q  ̈ 1  ́ pt
pt
` y2
t p0q  ̈ pt
1  ́ pt
ȷ
`1
T
T
ÿ
t“1
E
„
ytp1q  ̈ xxt, βtp1qy  ̈ 1  ́ pt
pt
ȷ
`1
T
T
ÿ
t“1
E
„
ytp0q  ̈ xxt, βtp0qy  ̈ pt
1  ́ pt
ȷ
`1
T
T
ÿ
t“1
E
„
xxt, βtp1qy2  ̈ 1  ́ pt
pt
` xxt, βtp0qy2  ̈ pt
1  ́ pt
ȷ
`2
T
T
ÿ
t“1
E rytp1qytp0qs  ́ 2
T
T
ÿ
t“1
E rytp1q  ̈ xxt, βtp0qys  ́ 2
T
T
ÿ
t“1
E rytp0q  ̈ xxt, βtp1qys
`2
T
T
ÿ
t“1
E rxxt, βtp1qy  ̈ xxt, βtp0qys
ě1
T
T
ÿ
t“1
E
„ 1  ́ pt
pt
` pt
1  ́ pt
ȷ
`1
T
T
ÿ
t“1
E
„
E
„
ytp1q  ̈ xxt, βtp1qy  ̈ 1  ́ pt
pt
ˇ
ˇ
ˇFt ́1
ȷȷ
`1
T
T
ÿ
t“1
E
„
E
„
ytp0q  ̈ xxt, βtp0qy  ̈ pt
1  ́ pt
ˇ
ˇ
ˇFt ́1
ȷȷ
`2
T
T
ÿ
t“1
1 ́ 2
T
T
ÿ
t“1
E
”
ytp0q  ̈ xxt, βtp1qy ` ytp1q  ̈ xxt, βtp0qy
ˇ
ˇ
ˇFt ́1
ı
“1
T
T
ÿ
t“1
E
„ 1  ́ pt
pt
` pt
1  ́ pt
ȷ
`2
T
T
ÿ
t“1
E rytp1qytp0qs
ě4 .
34

Denote Y T “ py1p1q, . . . , yT p1qq “ py1p0q, . . . , yT p0qq. It is easy to verify that matrix X⊺
T XT
is invertible. Hence we have
E
“T  ̈ V ̊‰ “ 2
T E `›
›Y T  ́ XT β ̊p1q
› ›2
›
›Y T  ́ XT β ̊p0q
›
›2 ` xY T  ́ XT β ̊p1q, Y T  ́ XT β ̊p0qy ̆
“4
TE
 ́›
›Y T  ́ XT β ̊p1q
› ›
2 2
 ̄
“4E `Y ⊺
T
`IT  ́ XT pX⊺
T XT q ́1X⊺
T
 ̆Y N
 ̆
“4
TE
«T ÿ
t“1
y2
t p1q
ff
 ́4
T Ex,y
“Y ⊺
T XT pX⊺
T XT q ́1X⊺
TY T
‰
“4  ́ 4
T E “tr `Y ⊺
T XT pX⊺
T XT q ́1X⊺
TY T
 ̆‰
“4  ́ 4
T tr `XT pX⊺
T XT q ́1X⊺
T Ey
“Y T Y ⊺
T
‰ ̆
“4  ́ 4
T tr `XT pX⊺
T XT q ́1X⊺
T  ̈ IT
 ̆
“4  ́ 4T  ́1 tr `X⊺
T XT pX⊺
T XT q ́1 ̆
“4  ́ 4T  ́1  ̈ T {2
“2 .
Hence we have proved that
E
“T  ̈ Varpτˆq  ́ T  ̈ V ̊‰ ě 2 .
It is easy to verify that Assumption 1 and 3 are satisfied for any sequence tytp1q, ytp0q, xtu generated by this mechanism. Hence there exists c ą 0 and one specific choice of tytp1q, ytp0q, xtu such that
RNeyman
T ě c.
B.2 Technical Lemmas
In this section, we present several technical lemmas that will be used to establish the main results in the subsequent sections. Lemma B.3 provides upper bounds for the spectral norms of the matrices involved in bounding the regression coefficients.
Lemma B.3. Under Assumption 2, for any t P rT s, there holds:
› › ›
`X ⊺
t ́1Xt ́1 ` η ́1
t Id
 ̆ ́1›
›
›2 ď pγ0 _ c2 _ 1qppt  ́ 1q _ η ́1
t q ́1 ,
›
›
›X t ́1
`X ⊺
t ́1Xt ́1 ` η ́1
t Id
 ̆ ́2 X⊺
t ́1
› ›
›2 ď
 ́ γ0
4 _ c2
 ̄
pt  ́ 1q ́1 .
Proof. For t ď γ0  ̈ η ́1
t , there holds
› › ›
`X ⊺
t ́1Xt ́1 ` η ́1
t Id
 ̆ ́1›
›
›2 ď ηt. For t ě γ0  ̈ η ́1
t `1ě
γ0  ̈ T 1{2 ` 1, by Assumption 2 we have
› › ›
`X ⊺
t ́1Xt ́1 ` η ́1
t Id
 ̆ ́1›
›
›2 ď c2pt  ́ 1q ́1, hence for
any t P rT s, we have
› › ›
`X ⊺
t ́1Xt ́1 ` η ́1
t Id
 ̆ ́1›
›
›2 ď pγ0 _ c2 _ 1qppt  ́ 1q _ η ́1
t q ́1. Suppose
the d eigenvalues of matrix X⊺
t ́1Xt ́1 are as λ1 ě . . . ě λd. Then by Assumption 2, for any t P rT s, we have
›
›
›X t ́1
`X ⊺
t ́1Xt ́1 ` η ́1
t Id
 ̆ ́2 X⊺
t ́1
› ›
›2 “
› › ›
`X ⊺
t ́1Xt ́1 ` η ́1
t Id
 ̆ ́2 X⊺
t ́1X t ́1
› › ›2
35

ď max
k“1,...,d
λk
`λk ` η ́1
t
 ̆2
ď
#1
4 ηt if t  ́ 1 ă γ0  ̈ η ́1
t
c2pt  ́ 1q ́1 if t  ́ 1 ě γ0  ̈ η ́1
t
ď
 ́ γ0
4 _ c2
 ̄
pt  ́ 1q ́1 .
Based on Lemma B.3, we provide the following upper bound on Πt,s.
Corollary B.4. Under Assumption 2, for any 1 ď s ď t ď T , there holds |Πt,s| ď pγ0 _ c2 _
1qRtRsppt  ́ 1q _ η ́1
t q ́1.
Proof. By Lemma B.3 and the definition of Rt, we have
|Πt,s| “
ˇ ˇ
ˇx⊺
t
`X ⊺
t ́1Xt ́1 ` η ́1
t Id
 ̆ ́1 xs
ˇ ˇ ˇ
ď}xt}2}xs}2
› › ›
`X ⊺
t ́1Xt ́1 ` η ́1
t Id
 ̆ ́1›
› ›2
ďpγ0 _ c2 _ 1qRtRsppt  ́ 1q _ η ́1
t q ́1 .
Our proposed algorithm does not guanrantee that RT “ R. The following lemma shows that RT “ OpRq, which allows us to use RT as a proxy of R in several established upper bounds.
Lemma B.5. Under Assumption 2, the radius satisfies: RT ď max1{2tc1, 1uR.
Proof. Since we have
λmin pX ⊺
T XT q ď trpX⊺
T XT q “ tr
 ̃T ÿ
t“1
xtx⊺
t
 ̧
“
T
ÿ
t“1
tr `xtx⊺
t
 ̆“
T
ÿ
t“1
}xt}2
2 ď T R2 ,
which implies that R ě c ́1{2
2 by Assumption 2. If R ě 1, then RT is guaranteed to be bounded
by R. If c ́1{2
2 ď R ď 1, then RT “ 1. Hence we have RT ď max1{2tc1, 1uR.
Lemma 4.12. For each iteration t P rT s and treatment k P t0, 1u, the adaptive linear predictors are conditionally unbiased for the full-information predictors: Erβtpkq | Ft ́1s “ β ̊
t pkq a.s.
Proof. For simplicity, we only prove the result for k “ 1. By direct calculation, we have
E rβtp1q|Ft ́1s “E
«
`X ⊺
t ́1Xt ́1 ` η ́1
t Id
 ̆
t ́1
ÿ
s“1
ysp1q 1rZs “ 1s
ps
 ̈ xs
ˇ
ˇ
ˇFt ́1
ff
“
`X ⊺
t ́1Xt ́1 ` η ́1
t Id
 ̆
t ́1
ÿ
s“1
ysp1q  ̈ xs
“β ̊
t p1q .
We now state the well-known Hardy’s inequality, which will be used to bound the fourth moment of the online residuals in Lemma B.7.
36

Proposition B.6 (Hardy’s inequality). If a1, . . . , an is a sequence of non-negative real numbers, then for every real number p ą 1 one has
n
ÿ
k“1
 ̃
1 k
k
ÿ
r“1
ar
 ̧p
ď
ˆp
p ́1
 ̇p n
ÿ
k“1
ap
k.
Lemma B.7. Under Assumption 1-2, for k P t0, 1u, there holds:
T
ÿ
t“1
ηt
`ytpkq  ́ xxt, β ̊
t pkqy ̆4 ďc4
1p1 ` 2 ́1{2pγ0 _ 4c2q1{2q4R2
T T 1{2 .
Proof. Without loss of generality, we only prove the result for k “ 1. By Hölder’s inequality, we have
T
ÿ
t“1
ηt
`ytp1q  ́ xxt, β ̊
t p1qy ̆4
“
T
ÿ
t“1
ηt
“y4
t p1q  ́ 4y3
t p1qxxt, β ̊
t p1qy ` 6y2
t p1qxxt, β ̊
t p1qy2  ́ 4ytp1qxxt, β ̊
t p1qy3 ` xxt, β ̊
t p1qy4‰4
ď
T
ÿ
t“1
ηty4
t p1q ` 4
 ̃T ÿ
t“1
ηty4
t p1q
 ̧3{4  ̃ T ÿ
t“1
ηtxxt, β ̊
t p1qy4
 ̧1{4
`6
 ̃T ÿ
t“1
ηty4
t p1q
 ̧1{2  ̃ T ÿ
t“1
ηtxxt, β ̊
t p1qy4
 ̧1{2
`4
 ̃T ÿ
t“1
ηty4
t p1q
 ̧1{4  ̃ T ÿ
t“1
ηtxxt, β ̊
t p1qy4
 ̧3{4
`
 ̃T ÿ
t“1
ηtxxt, β ̊
t p1qy4
 ̧
ď
»

 ̃T ÿ
t“1
ηty4
t p1q
 ̧1{4
`
 ̃T ÿ
t“1
ηtxxt, β ̊
t p1qy4
 ̧1{4fi
fl
4
pHölder’s inequalityq . (2)
Denote Y t ́1 “ py1p1q, . . . , yt ́1p1qq⊺. By Lemma B.3, for any t P rT s, we have
}β ̊
t p1q}2
2 “Y ⊺
t ́1X t ́1
`X ⊺
t ́1Xt ́1 ` η ́1
t Id
 ̆ ́2 X⊺
t ́1Y t ́1
ď }Y t ́1}2
2
›
›
›X t ́1
`X ⊺
t ́1Xt ́1 ` η ́1
t Id
 ̆ ́2 X⊺
t ́1
› › ›2
ď
 ́ γ0
4 _ c2
 ̄
pt  ́ 1q ́1
 ̃t ́1
ÿ
s“1
y2
s p1q
 ̧
pLemma B.3q . (3)
By (3), Hardy’s inequality (Proposition B.6) and Assumption 1, we have
T
ÿ
t“1
ηtxxt, β ̊
t p1qy4 ďT  ́1{2
T
ÿ
t“1
R ́2
t }xt}4
2
›
›β ̊
t p1q
› ›
4 2
ďT  ́1{2
T
ÿ
t“1
R2
t
›
›β ̊
t p1q
› ›
4 2
ď
 ́ γ0
4 _ c2
 ̄2
R2
T T  ́1{2
T
ÿ
t“2
 ̃
1 t ́1
t ́1
ÿ
s“1
y2
s p1q
 ̧2
pby (3) and Rt ď RT q
ď
 ́ γ0
4 _ c2
 ̄2
R2
T T  ́1{2
ˆ2
2 ́1
 ̇2 T  ́1
ÿ
t“1
y4
s p1q pHardy’s inequalityq
ď1
4 c4
1 pγ0 _ 4c2q2 R2
T T 1{2 pAssumption 1q . (4)
37

By Assumption 1, it is easy to see that
T
ÿ
t“1
ηty4
t p1q ď T  ́1{2  ̈ c4
1T “ c4
1T 1{2 . (5)
Hence by (2), (4) and (5), we can prove that
T
ÿ
t“1
ηt
`ytp1q  ́ xxt, β ̊
t p1qy ̆4 ď
 ́
c1T 1{8 ` 2 ́1{2c1pγ0 _ 4c2q1{2R1{2
T T 1{8 ̄4
“
 ́
1 ` 2 ́1{2pγ0 _ 4c2q1{2R1{2
T
 ̄4
c4
1T 1{2
“
 ́
R ́1{2
T ` 2 ́1{2pγ0 _ 4c2q1{2 ̄4
c4
1R2
T T 1{2
ďc4
1
 ́
1 ` 2 ́1{2pγ0 _ 4c2q1{2 ̄4
R2
T T 1{2 .
The following corollary is a direct consequence of Lemma B.7.
Corollary B.8. Under Assumption 1-2, for k P t0, 1u, there holds:
T
ÿ
t“1
`ytpkq  ́ xxt, β ̊
t pkqy ̆4 ďc4
1
 ́
1 ` 2 ́1{2pγ0 _ 4c2q1{2 ̄4
R4
TT .
Proof. For any t P rT s, we have η ́1
t ď η ́1
T “ T 1{2R2
T . Hence by Lemma B.7, we have
T
ÿ
t“1
`ytpkq  ́ xxt, β ̊
t pkqy ̆4 ďη ́1
T
T
ÿ
t“1
ηt
`ytpkq  ́ xxt, β ̊
t pkqy ̆4
ďc4
1
 ́
1 ` 2 ́1{2pγ0 _ 4c2q1{2 ̄4
R4
TT .
Lemmas B.9 and B.10 provide upper bounds for deterministic p-series summations, which play a crucial role in establishing Lemma B.15.
Lemma B.9. For any k ą 1 and fixed t, r P rT s, we have řT
s“t`1pps  ́ 1q _ ηr ́1q ́k ď
ξkpt _ ηr ́1q ́pk ́1q, where ξk fi 2k ́1
k ́1 ` 1 ą 0 is a constant.
Proof. For t ě rηr ́1s ` 1 ě T 1{2 ` 1 ě 2, we have pt  ́ 1q ě t{2. Hence we have
T
ÿ
s“t`1
pps  ́ 1q _ η ́1
r q ́k ď
T  ́1
ÿ
s“t
s ́k
ď
ż T  ́2
t ́1
s ́k ds
“1
k ́1
”
pt  ́ 1q ́pk ́1q  ́ pT  ́ 2q ́pk ́1qı
ď pt  ́ 1q ́pk ́1q
k ́1
ď 2k ́1t ́pk ́1q
k ́1 .
38

For t ă rηr ́1s ` 1, we have
T
ÿ
s“t`1
pps  ́ 1q _ η ́1
r q ́k ď
T
ÿ
s“rηr ́1 s`1
pps  ́ 1q _ η ́1
r q ́k `
rη ́1
rs
ÿ
s“2
ηk
r
ď 2k ́1ηk ́1
r
k  ́ 1 ` ηk ́1
r
ď
ˆ 2k ́1
k ́1 `1
 ̇
ηk ́1
r.
Hence for any fixed t, r P rT s, we have
T
ÿ
s“t`1
pps  ́ 1q _ η ́1
r q ́k ď ξkpt _ η ́1
r q ́pk ́1q .
Lemma B.10. For any k, ν ě 0 such that 0 ă 2k  ́ ν ă 2, when T is large enough, there holds:
T
ÿ
t“1
Rν
t ppt  ́ 1q _ η ́1
t q ́k ď T 1 ́k`ν{4
1  ́ pk  ́ ν{2q .
Proof. For any t P rT s, a natural upper bound for Rtνppt  ́ 1q _ η ́1
t q ́k is Rtν ppt  ́ 1q _ η ́1
t q ́k ď
Rtν ηtk “ T  ́k{2R ́p2k ́νq
t ď T  ́k{2. We then derive another upper bound for Rtν ppt  ́ 1q _ η ́1
t q ́k:
(1) If pt  ́ 1q ě T 1{2Rt2, i.e., 1 ď Rt ď ppt  ́ 1qT  ́1{2q1{2, then we have
Rν
t ppt  ́ 1q _ T 1{2R2
t q ́k “Rν
t pt  ́ 1q ́k
ďppt  ́ 1qT  ́1{2qν{2pt  ́ 1q ́k
“pt  ́ 1q ́pk ́ν{2qT  ́ν{4 .
(2) If pt  ́ 1q ď T 1{2Rt2, i.e., Rt ě ppt  ́ 1qT  ́1{2q1{2, then we have
Rν
t ppt  ́ 1q _ T 1{2R2
t q ́k “Rν
t pT 1{2R2
t q ́k
“T  ́k{2R ́p2k ́νq
t
ďT  ́k{2ppt  ́ 1qT  ́1{2q ́p2k ́νq{2
“pt  ́ 1q ́pk ́ν{2qT  ́ν{4 .
Since 0 ă 1  ́ pk  ́ ν{2q ă 1 by assumption, when T is large enough, we have
`tT 1{2u  ́ 1 ̆1 ́pk ́ν{2q
1  ́ pk  ́ ν{2q “ 1
1  ́ pk  ́ ν{2q
ˆ tT 1{2u  ́ 1
T 1{2
 ̇1 ́pk ́ν{2q  ̈ T 1{2 ̈p1 ́pk ́ν{2qq ě T 1{2 ̈p1 ́pk ́ν{2qq .
This implies that
T
ÿ
t“1
Rν
t ppt  ́ 1q _ η ́1
t q ́k ď
T
ÿ
t“1
T  ́k{2 ^ pt  ́ 1q ́pk ́ν{2qT  ́ν{4
ď
tT 1{2u
ÿ
t“1
T  ́k{2 `
T
ÿ
tT 1{2u`1
pt  ́ 1q ́pk ́ν{2qT  ́ν{4
ďT  ́k{2  ̈ tT 1{2u ` T  ́ν{4
ż T  ́2
tT 1{2u ́1
t ́pk ́ν{2qdt
39

ďT  ́k{2  ̈ tT 1{2u ` T  ́ν{4
1  ́ pk  ́ ν{2q
„
pT  ́ 2q1 ́pk ́ν{2q  ́
 ́
tT 1{2u  ́ 1
 ̄1 ́pk ́ν{2qȷ
ďT  ́pk ́1q{2  ́ T  ́ν{4 `tT 1{2u  ́ 1 ̆1 ́pk ́ν{2q
1  ́ pk  ́ ν{2q ` T  ́ν{4`1 ́pk ́ν{2q
1  ́ pk  ́ ν{2q
ďT  ́pk ́1q{2  ́ T  ́ν{4  ̈ T 1{2 ̈p1 ́pk ́ν{2qq ` T  ́ν{4`1 ́pk ́ν{2q
1  ́ pk  ́ ν{2q
“ T 1 ́k`ν{4
1  ́ pk  ́ ν{2q .
The following Lemma B.11 has similar proof as in Lemma 4.9, Lemma 4.10 and Proposition 4.11. However, we present an alternative proof that does not rely on the fourth-moment condition in Assumption 1. Throughout the proofs of Lemma B.11, Corollary B.12 and Lemma B.13, we instead impose only the second-moment assumption (1*):
T
ÿ
t“1
y2
t pkq ď c2
1T .
This assumption is weaker than the Assumption 1, which plays a crucial role in establishing Lemma B.13.
Lemma B.11. Under Assumption 1-3, for k P t0, 1u, there holds A ̊
T pkq ď 2c21T for T large enough.
Proof. Without loss of generality, we only prove the result for k “ 1. By the second moment assumption (1*), we can easily see that řT
t“1
`ytp1q  ́ xxt, β ̊p1qy ̆2 ď řT
t“1 yt2p1q ď c21T . By Corollary B.4, Assumption 2, and similar proofs as in Lemma 4.9 and Lemma 4.10, we have
T
ÿ
t“1
`ytp1q  ́ xxt, β ̊
t p1qy ̆2  ́
T
ÿ
t“1
`ytp1q  ́ xxt, β ̊p1qy ̆2
ďη ́1
T `1}β ̊p1q}2
2`
T
ÿ
t“1
pL ̃ p1q
t`1pβ ̊
t p1qq  ́ L ̃p1q
t`1 pβr  ̊
t`1p1qqq psimilar proof as in Lemma 4.9q
Àη ́1
T `1}Y T p1q}2
2
›
›
›X T
`X ⊺
T XT
 ̆ ́2 X⊺
T
› ›
›2 `
T
ÿ
t“1
Πt,t
`ytp1q  ́ xxt, β ̊
t p1qy ̆2 psimilar proof as in Lemma 4.10q
Àη ́1
T ` R2
t ηt
T
ÿ
t“1
`ytp1q  ́ xxt, β ̊
t p1qy ̆2 pCorollary B.4 and Assumption 2q . (6)
Note that Rt2ηt “ T  ́1{2 “ op1q and η ́1
T “ T 1{2R2
T “ opT q by Assumption 3. Hence (6) implies that A ̊
T p1q “ řT
t“1
`ytp1q  ́ xxt, β ̊
t p1qy ̆2 ď 2 řT
t“1
`ytp1q  ́ xxt, β ̊p1qy ̆2 ď 2c21T when T is large enough.
The following corollary is a direct result of Lemma B.11.
Corollary B.12. Under Assumption 1-3, for k P t0, 1u, there holds: řT
t“1xxt, β ̊
t p1qy2 ď p21{2 ` 1q2c21T for T large enough.
Proof. Without loss of generality, we only prove the result for k “ 1. By Lemma B.11 and Cauchy-Schwarz inequality, for large enough T , we have
2c2
1T ě
T
ÿ
t“1
`ytp1q  ́ xxt, β ̊
t p1qy ̆2 pLemma B.11q
40

“
T
ÿ
t“1
y2
t  ́2
T
ÿ
t“1
ytp1qxxt, β ̊
t p1qy `
T
ÿ
t“1
xxt, β ̊
t p1qy2
ě
T
ÿ
t“1
y2
t  ́2
 ̃T ÿ
t“1
y2
t
 ̧1{2  ̃ T ÿ
t“1
xxt, β ̊
t p1qy2
 ̧1{2
`
T
ÿ
t“1
xxt, β ̊
t p1qy2 pCauchy-Schwarz inequalityq
“
»

 ̃T ÿ
t“1
y2
t
 ̧1{2
 ́
 ̃T ÿ
t“1
xxt, β ̊
t p1qy2
 ̧1{2fi
fl
2
.
By the second moment assumption (1*), we have
 ́
řT
t“1 yt2
 ̄1{2
ď c1T 1{2. Hence it is easy to
see that
 ́
řT
t“1xxt, β ̊
t p1qy2
 ̄1{2
ď p21{2 ` 1qc1T 1{2, which indicates that řT
t“1xxt, β ̊
t p1qy2 ď
p21{2 ` 1q2c21T for T large enough.
Based on Corollary B.12, we can establish the following lemma.
Lemma B.13. Suppose T is large enough. Under Assumption 1-3, for any 2 ď t ď T , let the
entries in matrix  ̆Qptq “ pQ ̆ptq
i,j q P Rpt ́1qˆpt ́1q be Q ̆ptq
i,j “ řt
s“i_j`1 Πs,iΠs,j for any 1 ď i, j ď
t  ́ 1. Then Q ̆ ptq is a semi-definite positive matrix and there holds: }  ̆Qptq}2 ď p21{2 ` 1q2.
Proof. By direct calculation, we have
T
ÿ
s“1
xxs, β ̊
s p1qy2 ě
t
ÿ
s“1
xxs, β ̊
s p1qy2
“
t
ÿ
s“1
 ̃s ́1
ÿ
r“1
Πs,r yr p1q
 ̧2
“
t
ÿ
s“1
ÿ
1ďr1 ,r2 ďs ́1
Πs,r1 Πs,r2 yr1 p1qyr2 p1q
“
ÿ
1ďr1 ,r2 ďt ́1
 ̃t ÿ
s“r1 _r2 `1
Πs,r1 Πs,r2
 ̧
yr1 p1qyr2 p1q
“
t ́1
ÿ
r1 “1
t ́1
ÿ
r2 “1
Q ̆ ptq
r1,r2 yr1 p1qyr2 p1q .
Note that the proof in Lemma B.11 and Corollary B.12 only rely on the second moment assumption (1*): řT
t“1 yt2p1q ď c21T (we do not use the fourth moment assumption). Hence for T large enough, we have
(1) řt ́1
s1 “1
řt ́1
s2“1 Q ̆pst1q,s2 ys1 p1qys2 p1q ě 0, which implies that  ̆Qptq is semi-definite positive.
(2) řt ́1
s1 “1
řt ́1
s2“1 Q ̆pst1q,s2 ys1 p1qys2 p1q ď p21{2 ` 1q2c21T , which implies that }  ̆Qptq}2 ď p21{2 ` 1q2.
Based on Lemma B.13, we can derive the following corollary.
Corollary B.14. Suppose T is large enough. Under Assumption 1-3, for a fixed t P rT s, and any 1 ď s ď t, let the entries in matrix Qps,tq “ pQps,tq
i,j q P Rpt ́sqˆpt ́sq be Qps,tq
i,j “
p
řt
r“i_j`s Πr,i`s ́1Πr,j`s ́1q2
 ́ Rt
Ri`s ́1  ̈ Rt
Rj`s ́1
 ̄1{2
for any 1 ď i, j ď t  ́ s. Then Qps,tq is a
semi-definite positive matrix and there holds: }Qps,tq}2 ď 2p21{2 `1q2pγ0 _c2 _1q2Rt4ps_η ́1
t q ́1.
41

Proof. For any 1 ď s ď t ď T , let the entries in matrix  ̃Qps,tq “ pQ ̃ps,tq
i,j q P Rpt ́sqˆpt ́sq be Q ̃ ps,tq
i,j “ přt
r“i_j`s Πr,i`s ́1Πr,j`s ́1q for any 1 ď i, j ď t  ́ s and let the entries in matrix
 ̄Qps,tq “ pQ ̄ps,tq
i,j q P Rpt ́sqˆpt ́sq be Q ̄ps,tq
i,j “ přt
r“i_j`s Πr,i`s ́1Πr,j`s ́1q
 ́ Rt
Ri`s ́1  ̈ Rt
Rj`s ́1
 ̄1{2
for any 1 ď i, j ď t  ́ s. Since  ̃Qps,tq is a principal submatrix of semi-definite positive matrix
 ̆Qptq,  ̃Qps,tq is semi-definite positive. By the definition of  ̄Qps,tq, we have
 ̄Qps,tq “ diag
#
ˆ Rt
Rs
 ̇1{2
,...,
ˆ Rt
Rt ́1
 ̇1{2+
 ̃Qps,tq diag
#
ˆ Rt
Rt1
 ̇1{2
,...,
ˆ Rt
Rt ́1
 ̇1{2+
.
Hence  ̄Qps,tq is also semi-definite positive. This implies that Qps,tq “  ̃Qps,tq  ̋  ̄Qps,tq is semidefinite positive. Now we prove the second part. For any 1 ď k ď t  ́ 1, we aim to bound the k-th diagonal element of  ̄Qp1,tq. We derive the upper in two different cases. If 1 ď k ď η ́1
t , we have
Q ̄ p1,tq
k,k “ Rt
Rk
 ̈
t
ÿ
s“k`1
Π2
s,k
ďpγ0 _ c2 _ 1q2 Rt
Rk
 ̈
t
ÿ
s“k`1
R2
s R2
kpps  ́ 1q _ η ́1
s q ́2 pCorollary B.4q
ďpγ0 _ c2 _ 1q2RtRk
tη ́1
t u`2
ÿ
s“k`1
R2
spps  ́ 1q _ η ́1
s q ́2 ` pγ0 _ c2 _ 1q2Rt
t
ÿ
s“tη ́1
t u`3
R3
spps  ́ 1q _ η ́1
s q ́2
fiS1 ` S2 . (7)
By calculation, it is easy to see that function x ́1{2p2 ` log xq has maximum value 2 on r1, 8q. Hence we have
S1 ďpγ0 _ c2 _ 1q2T  ́1{2RtRk
tη ́1
t u`2
ÿ
s“k`1
η ́1
s pps  ́ 1q _ η ́1
s q ́2
ďpγ0 _ c2 _ 1q2R2
t  ̈ Rk
Rt
T  ́1{2
tη ́1
t u`2
ÿ
s“k`1
pps  ́ 1q _ η ́1
s q ́1
ďpγ0 _ c2 _ 1q2R2
t  ̈ Rk
Rt
T  ́1{2
 ̈
 ̊  ̋
tη ́1
k`1 u`2
ÿ
s“1
ηk`1 `
tη ́1
t u`2
ÿ
s“tη ́1
k`1 u`3
ps  ́ 1q ́1
 ̨
‹ ‚
ďpγ0 _ c2 _ 1q2R2
t  ̈ Rk
Rt
T  ́1{2
 ̈
 ̋
tη ́1
k`1 u`2
ÿ
s“1
ηk`1 `
ż tη ́1
tu
tη ́1
k`1 u`1
s ́1ds
 ̨
‚
ďpγ0 _ c2 _ 1q2R2
t  ̈ Rk
Rt
T  ́1{2 `ηk`1
`tη ́1
k`1u ` 2 ̆ ` logptη ́1
t uq  ́ logptη ́1
k`1u ` 1q ̆
ďpγ0 _ c2 _ 1q2R2
t ̈
ˆ ηt
ηk
 ̇1{2
T  ́1{2 `2 ` logptη ́1
t uηkq ̆ psince T large enough and ηk`1 ď ηkq
“pγ0 _ c2 _ 1q2R2
t ̈
ˆ ηt
ηk
 ̇1{2
T  ́1{2
ˆ
2 ` logptη ́1
t uηtq ` log
ˆ ηk
ηt
 ̇ ̇
ďpγ0 _ c2 _ 1q2R2
t ̈
ˆ ηt
ηk
 ̇1{2
T  ́1{2
ˆ
2 ` log
ˆ ηk
ηt
 ̇ ̇
ď2pγ0 _ c2 _ 1q2R2
t T  ́1{2 psince ηk{ηt ě 1q
42

“2pγ0 _ c2 _ 1q2R4
t ηt . (8)
By direct calculation, we have
S2 ďpγ0 _ c2 _ 1q2Rt
t
ÿ
s“tη ́1
t u`3
pps  ́ 1qR ́2
s _ T 1{2q ́3{2pps  ́ 1q _ η ́1
s q ́1{2
ďpγ0 _ c2 _ 1q2Rt
t
ÿ
s“tη ́1
t u`3
pps  ́ 1qR ́2
t _ T 1{2q ́3{2  ̈ ps  ́ 1q ́1{2
ďpγ0 _ c2 _ 1q2R4
t η1{2
t
t
ÿ
s“tη ́1
t u`3
pps  ́ 1q _ η ́1
t q ́3{2
ďpγ0 _ c2 _ 1q2R4
t η1{2
t
t
ÿ
s“tη ́1
t u`3
ps  ́ 1q ́3{2
ďpγ0 _ c2 _ 1q2R4
t η1{2
t
ż t ́2
tη ́1
t u`1
ps  ́ 1q ́3{2ds
ď2pγ0 _ c2 _ 1q2R4
t η1{2
t ptη ́1
t u ` 1q ́1{2
ď2pγ0 _ c2 _ 1q2R4
t ηt . (9)
Hence by (7), (8) and (9), for any 1 ď k ď rη ́1
t s, we can derive the following upper bound:
Q ̄ p1,tq
k,k ď S1 ` S2 ď 4pγ0 _ c2 _ 1q2R4
t ηt . (10)
For any η ́1
t ď k ď t, by Corollary B.4 we have
Q ̄ p1,tq
k,k “ Rt
Rk
 ̈
t
ÿ
s“k`1
Π2
s,k
ďpγ0 _ c2 _ 1q2 Rt
Rk
 ̈
t
ÿ
s“k`1
R2
s R2
kpps  ́ 1q _ η ́1
s q ́2 pCorollary B.4q
ďpγ0 _ c2 _ 1q2 Rt
Rk
 ̈ R2
t R2
k ̈
t
ÿ
s“k`1
ps  ́ 1q ́2
ďpγ0 _ c2 _ 1q2R4
t
ż t ́2
k ́1
s ́2ds
ď2pγ0 _ c2 _ 1q2R4
t k ́1 psince T is large enoughq . (11)
By (10) and (11), we have Q ̄p1,tq
k,k ď 4pγ0 _ c2 _ 1q2Rt4pk _ η ́1
t q ́1. Since  ̃Qps,tq is a principal
submatrix of  ̆Qptq, we have }  ̃Qps,tq}2 ď }  ̆Qptq}2 ď p21{2 `1q2 by Lemma B.13. Then by Theorem 5.3.4 in Horn and Johnson, 2012, we have
}Qps,tq}2 “}  ̃Qps,tq  ̋ Q ̄ ps,tq}2
ď}  ̃Qps,tq}2 max
sďkďt
Q ̄ p1,tq
k,k
ď4p21{2 ` 1q2pγ0 _ c2 _ 1q2R4
t ps _ η ́1
t q ́1 .
The following lemma provides upper bounds for several deterministic summations that will be used in the proofs throughout the subsequent sections.
43

Lemma B.15. Under Assumption 1-3, for any t P rT s and k P t0, 1u, we have
(1) řt ́1
s“1 |Πt,s| |yspkq| ď pγ0 _ c2 _ 1q1{2Rtppt  ́ 1q _ η ́1
t q ́1{2
 ́
řt ́1
s“1 ys2p1q
 ̄1{2
.
(2) řt ́1
s“1 |Πt,s| ys2pkq ď c21pγ0 _ c2 _ 1q1{2Rtppt  ́ 1q _ η ́1
t q ́1{2T 1{2.
(3) řt
s“1
řs ́1
r“1 Πs2,ryr2pkq ď c21pγ0 _ c2 _ 1q3{2ξ3{2Rt3η1{2
t T 1{2.
(4) řt
s“1 R ́ν1
s
řs ́1
r“1 R ́ν2
r Πs2,ryr2pkq ď c21pγ0 _ c2 _ 1q3{2 p1  ́ pν1 ` ν2q{2q ́1 T 3{4 ́pν1`ν2q{4 for any ν1, ν2 such that 0 ď ν1, 0 ď ν2 ď 1 and ν1 ` ν2 ă 2. Suppose T is large enough.
(5) řt
s“1
řs ́1
r“1 Πs4,ryr4pkq ď c41pγ0 _ c2 _ 1q4ξ4Rt8ηt3T .
(6) řt
s“1
ř
1ďr1‰r2ďs ́1 |Πs,r1 |3 |Πs,r2 | |yr1 pkq|3 |yr2 pkq| ď c41pγ0 _ c2 _ 1q7{2ξ3ξ1{4
8 R13{2
t η7{4
t T 7{8.
(7) řt
s“1
ř
1ďr1‰r2ďs ́1 Πs2,r1 Πs2,r2 yr21 pkqyr22 pkq ď c41pγ0 _ c2 _ 1q3ξ3Rt6ηt2T .
(8) řt
s“1 Rs ́1
ř
1ďr1‰r2‰r3ďs ́1 Πs2,r1 |Πs,r2 | |Πs,r3 | yr21 pkq |yr2 pkq| |yr3 pkq| ď c41ξ2pγ0 _ c2 _ 1q5{2Rt4ηtT .
(9) řt ́1
s“1
 ́
řt
r“s`1 Πr2,s
 ̄2
ys4pkq ď c41pγ0 _ c2 _ 1q4ξ22Rt8ηt2T .
(10) řt ́1
s“1
 ́
řt
r“s`1 Πr,s
`yrpkq  ́ xxr, β ̊
r pkqy ̆
 ̄2
R ́1{2
s ys2pkq ď 2c41pγ0 _ c2 _ 1q3{2ξ5{4T 11{8R5{2
t η1{4
t for T large enough.
(11) ř
1ďt2 ,t3 ăt1 ďt ́1
ˇ ˇ ˇ
řt
s“t1`1 Πs,t1 Πs,t2
ˇ ˇ ˇ
ˇ ˇ ˇ
řt
s“t1`1 Πs,t1 Πs,t3
ˇ ˇ
ˇ yt21 pkq |yt2 pkq| |yt3 pkq|
 ́ R2
t R2
t1
 ̈ Rt
Rt2
 ̈ Rt
Rt3
 ̄1{4
ď 18c41pγ0 _ c2 _ 1q2Rt4η1{2
t T 3{2 log2pηtT q for T large enough.
Proof. Without loss of generality, we only prove the result for k “ 1.
(1) By Cauchy-Schwarz inequality and Lemma B.3, we have
 ̃t ́1
ÿ
s“1
|Πt,s| |ysp1q|
 ̧2
ď
 ̃t ́1
ÿ
s“1
y2
s p1q
 ̧  ̃t ́1
ÿ
s“1
Π2
t,s
 ̧
pCauchy-Schwarz inequalityq
“
 ̃t ́1
ÿ
s“1
y2
s p1q
 ̧  ̃t ́1
ÿ
s“1
x⊺
t
`X ⊺
t ́1Xt ́1 ` η ́1
t Id
 ̆ ́1 xsx⊺
s
`X ⊺
t ́1Xt ́1 ` η ́1
t Id
 ̆ ́1 xt
 ̧
“
 ̃t ́1
ÿ
s“1
y2
s p1q
 ̧
 ́
x⊺
t
`X ⊺
t ́1Xt ́1 ` η ́1
t Id
 ̆ ́1 X⊺
t ́1X t ́1
`X ⊺
t ́1Xt ́1 ` η ́1
t Id
 ̆ ́1 xt
 ̄
ďR2
t
 ̃t ́1
ÿ
s“1
y2
s p1q
 ̧ › › ›
`X ⊺
t ́1Xt ́1 ` η ́1
t Id
 ̆ ́1 X⊺
t ́1X t ́1
`X ⊺
t ́1Xt ́1 ` η ́1
t Id
 ̆ ́1›
› ›2
ďR2
t
 ̃t ́1
ÿ
s“1
y2
s p1q
 ̧ › › ›
`X ⊺
t ́1Xt ́1 ` η ́1
t Id
 ̆ ́1›
› ›2
ďpγ0 _ c2 _ 1qR2
t ppt  ́ 1q _ η ́1
t q ́1
 ̃t ́1
ÿ
s“1
y2
s p1q
 ̧
pLemma B.3q .
(2) By Assumption 1 and similar method as in (1), we have
 ̃t ́1
ÿ
s“1
|Πt,s| y2
s p1q
 ̧2
ďpγ0 _ c2 _ 1qR2
t ppt  ́ 1q _ η ́1
t q ́1
 ̃t ́1
ÿ
s“1
y4
s p1q
 ̧
ď c4
1pγ0 _ c2 _ 1qR2
t ppt  ́ 1q _ η ́1
t q ́1T .
44

(3) By Corollary B.4, Lemma B.9 and the result in (2), we have
t
ÿ
s“1
s ́1
ÿ
r“1
Π2
s,r y 2
r p1q ďpγ0 _ c2 _ 1q
t
ÿ
s“1
R2
spps  ́ 1q _ η ́1
s q ́1
 ̃s ́1
ÿ
r“1
|Πs,r |y 2
r p1q
 ̧
pby Rr ď Rs and Corollary B.4q
ďc2
1pγ0 _ c2 _ 1q3{2T 1{2
t
ÿ
s“1
R3
spps  ́ 1q _ η ́1
s q ́3{2 pby the result in (2)q
“c2
1pγ0 _ c2 _ 1q3{2T 1{2
t
ÿ
s“1
pps  ́ 1qR ́2
s _ T 1{2q ́3{2
ďc2
1pγ0 _ c2 _ 1q3{2T 1{2
t
ÿ
s“1
pps  ́ 1qR ́2
t _ T 1{2q ́3{2 pby Rs ď Rtq
“c2
1pγ0 _ c2 _ 1q3{2R3
t T 1{2
t
ÿ
s“1
pps  ́ 1q _ η ́1
t q ́3{2
ďc2
1pγ0 _ c2 _ 1q3{2ξ3{2R3
t η1{2
t T 1{2 pLemma B.9q .
(4) When T is large enough, by Cauchy-Schwarz inequality, Corollary B.4, Lemma B.10 and Assumption 1, we have
t
ÿ
s“1
R ́ν1
s
s ́1
ÿ
r“1
R ́ν2
r Π2
s,r y 2
r p1q
ďpγ0 _ c2 _ 1q
t
ÿ
s“1
R1 ́ν1
s pps  ́ 1q _ η ́1
s q ́1
s ́1
ÿ
r“1
R1 ́ν2
r |Πs,r|y2
r p1q pCorollary B.4q
ďpγ0 _ c2 _ 1q
t
ÿ
s“1
R1 ́ν1 `1 ́ν2
s pps  ́ 1q _ η ́1
s q ́1
s ́1
ÿ
r“1
|Πs,r |y 2
r p1q pby Rr ď Rs and 1  ́ ν2 ě 0q
ďpγ0 _ c2 _ 1q
t
ÿ
s“1
R2 ́ν1  ́ν2
s pps  ́ 1q _ η ́1
s q ́1
 ̃s ́1
ÿ
r“1
Π2
s,r
 ̧1{2  ̃s ́1 ÿ
r“1
y4
r p1q
 ̧1{2
pCauchy-Schwarz inequalityq
ďc2
1pγ0 _ c2 _ 1qT 1{2
t
ÿ
s“1
R2 ́ν1  ́ν2
s pps  ́ 1q _ η ́1
s q ́1
ˆ
 ̃s ́1
ÿ
r“1
x⊺
s
`X ⊺
s ́1Xs ́1 ` η ́1
s Id
 ̆ ́1 xrx⊺
r
`X ⊺
s ́1Xs ́1 ` η ́1
s Id
 ̆ ́1 xs
 ̧1{2
pAssumption 1q
“c2
1pγ0 _ c2 _ 1qT 1{2
t
ÿ
s“1
R2 ́ν1  ́ν2
s pps  ́ 1q _ η ́1
s q ́1
ˆ
 ́
x⊺
s
`X ⊺
s ́1Xs ́1 ` η ́1
s Id
 ̆ ́1 X⊺
s ́1X s ́1
`X ⊺
s ́1Xs ́1 ` η ́1
s Id
 ̆ ́1 xs
 ̄1{2
ďc2
1pγ0 _ c2 _ 1qT 1{2
t
ÿ
s“1
R2 ́ν1  ́ν2
s pps  ́ 1q _ η ́1
s q ́1  ́
x⊺
s
`X ⊺
s ́1Xs ́1 ` η ́1
s Id
 ̆ ́1 xs
 ̄1{2
ďc2
1pγ0 _ c2 _ 1q3{2T 1{2
t
ÿ
s“1
R2 ́ν1  ́ν2 `1
s pps  ́ 1q _ η ́1
s q ́3{2 pCorollary B.4q
ďc2
1pγ0 _ c2 _ 1q3{2T 1{2 T 1 ́3{2`p3 ́ν1 ́ν2q{4
1  ́ p3{2  ́ p3  ́ ν1  ́ ν2q{2q pLemma B.10q
ďc2
1pγ0 _ c2 _ 1q3{2T 1{2`1{4 ́pν1`ν2q{4 p1  ́ pν1 ` ν2q{2q ́1
“c2
1pγ0 _ c2 _ 1q3{2 p1  ́ pν1 ` ν2q{2q ́1 T 3{4 ́pν1`ν2q{4 .
45

(5) By Corollary B.4, Lemma B.9 and Assumption 1, we have
t
ÿ
s“1
s ́1
ÿ
r“1
Π4
s,r y 4
r p1q “
t ́1
ÿ
r“1
 ̃t ÿ
s“r`1
Π4
s,r
 ̧
y4
r p1q prewrite the summationq
ď
t ́1
ÿ
r“1
 ̃t ÿ
s“r`1
pγ0 _ c2 _ 1q4R8
spps  ́ 1q _ η ́1
s q ́4
 ̧
y4
r p1q pby Rr ď Rs and Corollary B.4q
“
t ́1
ÿ
r“1
 ̃t ÿ
s“r`1
pγ0 _ c2 _ 1q4pps  ́ 1qR ́2
s _ T 1{2q ́4
 ̧
y4
r p1q
ď
t ́1
ÿ
r“1
 ̃t ÿ
s“r`1
pγ0 _ c2 _ 1q4pps  ́ 1qR ́2
t _ T 1{2q ́4
 ̧
y4
r p1q pby Rs ď Rtq
“pγ0 _ c2 _ 1q4R8
t
t ́1
ÿ
r“1
 ̃t ÿ
s“r`1
pps  ́ 1q _ η ́1
t q ́4
 ̧
y4
t p1q
ďpγ0 _ c2 _ 1q4ξ4R8
t
t ́1
ÿ
r“1
η3
t y4
r p1q pLemma B.9q
ďc4
1pγ0 _ c2 _ 1q4ξ4R8
t η3
t T pAssumption 1q .
(6) By Corollary B.4, Lemma B.9, Cauchy-Schwarz inequality, Hölder’s inequality and Assumption 1, we have
t
ÿ
s“1
ÿ
1ďr1 ‰r2 ďs ́1
|Πs,r1 |3 |Πs,r2 | |yr1 p1q|3 |yr2 p1q|
ď
t
ÿ
s“1
 ̃s ́1
ÿ
r“1
|Πs,r|3 |yrp1q|3
 ̧  ̃s ́1
ÿ
r“1
|Πs,r| |yrp1q|
 ̧
ďpγ0 _ c2 _ 1q1{2
t
ÿ
s“1
 ̃s ́1
ÿ
r“1
|Πs,r|3 |yrp1q|3
 ̧
Rspps  ́ 1q _ η ́1
s q ́1{2
 ̃s ́1
ÿ
r“1
y2
r p1q
 ̧1{2
pby the result in (1)q
ďpγ0 _ c2 _ 1q1{2
t
ÿ
s“1
 ̃s ́1
ÿ
r“1
|Πs,r|3 |yrp1q|3
 ̧
Rspps  ́ 1q _ η ́1
s q ́1{2ps  ́ 1q1{4
 ̃s ́1
ÿ
r“1
y4
r p1q
 ̧1{4
pCauchy-Schwarzq
ďc1pγ0 _ c2 _ 1q1{2T 1{4
t
ÿ
s“1
 ̃s ́1
ÿ
r“1
|Πs,r|3 |yrp1q|3
 ̧
Rsη1{4
s pAssumption 1q
ďc1pγ0 _ c2 _ 1q1{2R1{2
t T 1{8
t ́1
ÿ
r“1
 ̃t ÿ
s“r`1
|Πs,r |3
 ̧
|yrp1q|3 pby Rs ď Rtq
ďc1pγ0 _ c2 _ 1q7{2R1{2
t T 1{8
t ́1
ÿ
r“1
 ̃t ÿ
s“r`1
R6
spps  ́ 1q _ η ́1
s q ́3
 ̧
|yrp1q|3 pCorollary B.4q
“c1pγ0 _ c2 _ 1q7{2R1{2
t T 1{8
t ́1
ÿ
r“1
 ̃t ÿ
s“r`1
pps  ́ 1qR ́2
s _ T 1{2q ́3
 ̧
|yr p1q|3
ďc1pγ0 _ c2 _ 1q7{2R1{2
t T 1{8
t ́1
ÿ
r“1
 ̃t ÿ
s“r`1
pps  ́ 1qR ́2
t _ T 1{2q ́3
 ̧
|yrp1q|3 pby Rs ď Rtq
“c1pγ0 _ c2 _ 1q7{2R1{2
t T 1{8
t ́1
ÿ
r“1
 ̃t ÿ
s“r`1
R6
t pps  ́ 1q _ η ́1
t q ́3
 ̧
|yr p1q|3
ďc1pγ0 _ c2 _ 1q7{2ξ3R13{2
t T 1{8
t ́1
ÿ
r“1
ppr  ́ 1q _ η ́1
t q ́2 |yrp1q|3 pLemma B.9q
46

ďc1pγ0 _ c2 _ 1q7{2ξ3R13{2
t T 1{8
 ̃t ́1
ÿ
r“1
ppr  ́ 1q _ η ́1
t q ́8
 ̧1{4  ̃t ́1 ÿ
r“1
y4
r p1q
 ̧3{4
pHölder’s inequalityq
ďc4
1pγ0 _ c2 _ 1q7{2ξ3ξ1{4
8 R13{2
t T 1{8`3{4η7{4
t pLemma B.9 and Assumption 1q
“c4
1pγ0 _ c2 _ 1q7{2ξ3ξ1{4
8 R13{2
t T 7{8η7{4
t.
(7) By Corollary B.4, Lemma B.9, Cauchy-Schwarz inequality and Assumption 1, we have
t
ÿ
s“1
ÿ
1ďr1 ‰r2 ďs ́1
Π2
s,r1 Π2
s,r2 y2
r1 p1qy2
r2 p1q
ď
t
ÿ
s“1
 ̃s ́1
ÿ
r“1
Π2
s,r y 2
r p1q
 ̧2
ďpγ0 _ c2 _ 1q2
t
ÿ
s“1
R4
spps  ́ 1q _ η ́1
s q ́2
 ̃s ́1
ÿ
r“1
|Πs,r |y 2
r p1q
 ̧2
pby Rr ď Rs and Corollary B.4q
ďc4
1pγ0 _ c2 _ 1q3T
t
ÿ
s“1
R6
spps  ́ 1q _ η ́1
s q ́3 pby the result in (2)q
“c4
1pγ0 _ c2 _ 1q3T
t
ÿ
s“1
pps  ́ 1qR ́2
s _ T 1{2q ́3
ďc4
1pγ0 _ c2 _ 1q3T
t
ÿ
s“1
pps  ́ 1qR ́2
t _ T 1{2q ́3 pby Rs ď Rtq
“c4
1pγ0 _ c2 _ 1q3T
t
ÿ
s“1
R6
t pps  ́ 1q _ η ́1
t q ́3
ďc4
1pγ0 _ c2 _ 1q3ξ3R6
t T η2
t pLemma B.9q .
(8) By Corollary B.4, Lemma B.9, Cauchy-Schwarz inequality, Assumption 1 and the results in (1), (2), we have
t
ÿ
s“1
R ́1
s
ÿ
1ďr1 ‰r2 ‰r3 ďs ́1
Π2
s,r1 |Πs,r2 | |Πs,r3 | y2
r1 p1q |yr2 p1q| |yr3 p1q|
ď
t
ÿ
s“1
R ́1
s
 ̃s ́1
ÿ
r“1
Π2
s,r y 2
r p1q
 ̧  ̃s ́1
ÿ
r“1
|Πs,r| |yrp1q|
 ̧2
ďpγ0 _ c2 _ 1q
t
ÿ
s“1
R ́1`2
s pps  ́ 1q _ η ́1
s q ́1
 ̃s ́1
ÿ
r“1
|Πs,r |y 2
r p1q
 ̧  ̃s ́1
ÿ
r“1
|Πs,r| |yrp1q|
 ̧2
pby Rr ď Rs, Corollary B.4q
ďc2
1pγ0 _ c2 _ 1q5{2T 1{2
t
ÿ
s“1
R4
spps  ́ 1q _ η ́1
s q ́5{2
 ̃s ́1
ÿ
r“1
y2
r p1q
 ̧
presults in (1) and (2)q
ďc2
1pγ0 _ c2 _ 1q5{2T 1{2
t
ÿ
s“1
R4
spps  ́ 1q _ η ́1
s q ́5{2ps  ́ 1q1{2
 ̃s ́1
ÿ
r“1
y4
r p1q
 ̧1{2
pCauchy-Schwarz inequalityq
ďc4
1pγ0 _ c2 _ 1q5{2T
t
ÿ
s“1
R4
spps  ́ 1q _ η ́1
s q ́2 pAssumption 1q
“c4
1pγ0 _ c2 _ 1q5{2T
t
ÿ
s“1
pps  ́ 1qR ́2
s _ T 1{2q ́2
ďc4
1pγ0 _ c2 _ 1q5{2T
t
ÿ
s“1
pps  ́ 1qR ́2
t _ T 1{2q ́2 pby Rs ď Rtq
47

“c4
1pγ0 _ c2 _ 1q5{2R4
tT
t
ÿ
s“1
pps  ́ 1q _ η ́1
t q ́2
ďc4
1ξ2pγ0 _ c2 _ 1q5{2R4
t ηtT pLemma B.9q .
(9) By Corollary B.4, Lemma B.9 and Assumption 1, we have
t ́1
ÿ
s“1
 ̃t ÿ
r“s`1
Π2
r,s
 ̧2
y4
s p1q
ďpγ0 _ c2 _ 1q4
t ́1
ÿ
s“1
 ̃t ÿ
r“s`1
R4
rppr  ́ 1q _ η ́1
r q ́2
 ̧2
y4
s p1q pby Rr ď Rs and Corollary B.4q
“pγ0 _ c2 _ 1q4
t ́1
ÿ
s“1
 ̃t ÿ
r“s`1
ppr  ́ 1qR ́2
r _ T 1{2q ́2
 ̧2
y4
s p1q
ďpγ0 _ c2 _ 1q4
t ́1
ÿ
s“1
 ̃t ÿ
r“s`1
ppr  ́ 1qR ́2
t _ T 1{2q ́2
 ̧2
y4
s p1q pby Rr ď Rtq
“pγ0 _ c2 _ 1q4
t ́1
ÿ
s“1
 ̃t ÿ
r“s`1
R4
t ppr  ́ 1q _ η ́1
t q ́2
 ̧2
y4
s p1q
ďpγ0 _ c2 _ 1q4ξ2
2 R8
t η2
t
t ́1
ÿ
s“1
y4
s p1q pLemma B.9q
ďc4
1pγ0 _ c2 _ 1q4ξ2
2 R8
t η2
t T pAssumption 1q .
(10) By Cauchy-Schwarz inequality, Corollary B.4, Lemma B.9, Lemma B.11 and Assumption 1, we have
t ́1
ÿ
s“1
 ̃t ÿ
r“s`1
Πr,s
`yrp1q  ́ xxr, β ̊
r p1qy ̆
 ̧2
R ́1{2
s y2
s p1q
ď
t ́1
ÿ
s“1
 ̃t ÿ
r“s`1
Π2
r,s
 ̧ ̃ t ÿ
r“s`1
`yrp1q  ́ xxr, β ̊
r p1qy ̆2
 ̧
R ́1{2
s y2
s p1q pCauchy-Schwarz inequalityq
ď2c2
1T
t ́1
ÿ
s“1
 ̃t ÿ
r“s`1
Π2
r,s
 ̧
R ́1{2
s y2
s p1q pLemma B.11q
“2c2
1T
t
ÿ
s“1
 ̃s ́1
ÿ
r“1
Π2
s,r R ́1{2
r y2
r p1q
 ̧
pchange the summation orderq
ď2pγ0 _ c2 _ 1qc2
1T
t
ÿ
s“1
 ̃s ́1
ÿ
r“1
pps  ́ 1q _ η ́1
s q ́1RsR1 ́1{2
r |Πs,r|y2
r p1q
 ̧
pCorollary B.4q
ď2pγ0 _ c2 _ 1qc2
1T
t
ÿ
s“1
pps  ́ 1q _ η ́1
s q ́1R3{2
s
 ̃s ́1
ÿ
r“1
|Πs,r |y 2
r p1q
 ̧
pby Rr ď Rsq
ď2pγ0 _ c2 _ 1qc2
1T
t
ÿ
s“1
pps  ́ 1q _ η ́1
s q ́1R3{2
s
 ̃s ́1
ÿ
r“1
Π2
s,r
 ̧1{2  ̃s ́1 ÿ
r“1
y4
r p1q
 ̧1{2
pCauchy-Schwarz inequalityq
ď2pγ0 _ c2 _ 1qc4
1T 1`1{2
t
ÿ
s“1
R3{2
s pps  ́ 1q _ η ́1
s q ́1Π1{2
s,s pAssumption 1q
ď2pγ0 _ c2 _ 1q3{2c4
1T 1`1{2
t
ÿ
s“1
R3{2
s pps  ́ 1q _ η ́1
s q ́1Rspps  ́ 1q _ η ́1
s q ́1{2 pCorollary B.4q
48

ď2pγ0 _ c2 _ 1q3{2c4
1T 3{2
t
ÿ
s“1
pps  ́ 1qR ́2
s _ T 1{2q ́3{4pps  ́ 1q _ η ́1
s q ́1{4pps  ́ 1qR ́2
s _ T 1{2q ́1{2
ď2pγ0 _ c2 _ 1q3{2c4
1T 3{2η1{4
1
t
ÿ
s“1
pps  ́ 1qR ́2
s _ T 1{2q ́3{4 ́1{2 psince ηs ď η1q
ď2pγ0 _ c2 _ 1q3{2c4
1T 3{2 ́1{8
t
ÿ
s“1
pps  ́ 1qR ́2
t _ T 1{2q ́5{4 pby Rs ď Rtq
ď2pγ0 _ c2 _ 1q3{2c4
1T 11{8R5{2
t
t
ÿ
s“1
pps  ́ 1q _ η ́1
t q ́5{4
ď2c4
1pγ0 _ c2 _ 1q3{2ξ5{4T 11{8R5{2
t η1{4
t pLemma B.9q .
(11) By AM-GM inequality and the definition of matrix Qp1,tq in Corollary B.14, we have
ÿ
1ďt2 ,t3 ăt1 ďt ́1
ˇ ˇ ˇ ˇ ˇ
t
ÿ
s“t1 `1
Πs,t1 Πs,t2
ˇ ˇ ˇ ˇ ˇ
ˇ ˇ ˇ ˇ ˇ
t
ÿ
s“t1 `1
Πs,t1 Πs,t3
ˇ ˇ ˇ ˇ ˇ
y2
t1 p1q |yt2 p1q| |yt3 p1q|
ˆ Rt2
Rt21
 ̈ Rt
Rt2
 ̈ Rt
Rt3
 ̇1{4
ď1
2
ÿ
1ďt2 ,t3 ăt1 ďt ́1
« ̃ t ÿ
s“t1 `1
Πs,t1 Πs,t2
 ̧2
y2
t1 p1qy2
t2 p1q
ˆ Rt2
Rt21
 ̈ Rt2
Rt22
 ̇1{4
`
 ̃t ÿ
s“t1 `1
Πs,t1 Πs,t3
 ̧2
y2
t1 p1qy2
t3 p1q
ˆ Rt2
Rt21
 ̈ Rt2
Rt23
 ̇1{4 ff
pAM-GM inequalityq
ď
ÿ
1ďt2 ăt1 ďt ́1
t1
 ̃t ÿ
s“t1 `1
Πs,t1 Πs,t2
 ̧2
y2
t1 p1qy2
t2 p1q
ˆ Rt
Rt1
 ̈ Rt
Rt2
 ̇1{2
ď1
2
ÿ
1ďt1 ,t2 ďt ́1
pt1 _ t2q
 ̃t ÿ
s“t1 _t2 `1
Πs,t1 Πs,t2
 ̧2
y2
t1 p1qy2
t2 p1q
ˆ Rt
Rt1
 ̈ Rt
Rt2
 ̇1{2
“1
2
ÿ
1ďt1 ,t2 ďt ́1
pt1 _ t2qQp1,tq
t1,t2 y2
t1 p1qy2
t2 p1q .
Let K “ tlog2pηtT qu P N. Since η ́1
t “ OpT 1{2Rt2q “ opT q by Assumption 3, K tends to infinity when T
grows. For k “ 1, . . . , K ` 1, let Ck “ tη ́1`pk ́1q{K
t T pk ́1q{K u and let C0 “ 0. For k “ 0, . . . , K, denote Bk “ tCk ` 1, . . . , Ck`1u X t1, . . . , t  ́ 1u. Then we have
ÿ
1ďt2 ăt1 ,t3 ăt1 ďt ́1
ˇ ˇ ˇ ˇ ˇ
t
ÿ
s“t1 `1
Πs,t1 Πs,t2
ˇ ˇ ˇ ˇ ˇ
ˇ ˇ ˇ ˇ ˇ
t
ÿ
s“t1 `1
Πs,t1 Πs,t3
ˇ ˇ ˇ ˇ ˇ
y2
t1 p1q |yt2 p1q| |yt3 p1q|
ˆ Rt2
Rt21
 ̈ Rt
Rt2
 ̈ Rt
Rt3
 ̇1{4
ď1
2
ÿ
1ďt1 ,t2 ďt ́1
pt1 _ t2qQp1,tq
t1,t2 y2
t1 p1qy2
t2 p1q
ď1
2
K
ÿ
k1 “0
K
ÿ
k2 “0
ÿ
t1 PBk1
ÿ
t2 PBk2
pt1 _ t2qQp1,tq
t1,t2 y2
t1 p1qy2
t2 p1q
fi1
2
K
ÿ
k1 “0
K
ÿ
k2 “0
Sk1,k2 .
For S0,0, by Corollary B.14, we have
S0,0 “
ÿ
t1 PB0
ÿ
t2 PB0
pt1 _ t2qQp1,tq
t1,t2 y2
t1 p1qy2
t2 p1q
ďC1
ÿ
t1 PB0
ÿ
t2 PB0
Qp1,tq
t1,t2 y2
t1 p1qy2
t2 p1q
49

ďC1}Qp1,tq}2
ÿ
sPB0
y4
s p1q
ď4p21{2 ` 1q2pγ0 _ c2 _ 1q2R4
t ηt  ̈ η ́1
t
ÿ
tPB0
y4
t p1q pCorollary B.14q
ď4p21{2 ` 1q2pγ0 _ c2 _ 1q2R4
t
ÿ
sPB0
y4
s p1q .
For k “ 1, . . . , K, by Corollary B.14 and Cauchy-Schwarz inequality on semi-definite positive matrix, we have
Sk,0
“
ÿ
t1 PBk
ÿ
t2 PB0
pt1 _ t2qQp1,tq
t1,t2 y2
t1 p1qy2
t2 p1q
ďCk`1
ÿ
t1 PBk
ÿ
t2 PB0
Qp1,tq
t1,t2 y2
t1 p1qy2
t2 p1q
ďCk`1
 ̃ ÿ
t1 ,t2 PBk
Qpt^Ck `1,tq
t1,t2 y2
t1 p1qy2
t2 p1q
 ̧1{2  ̃
ÿ
t1 ,t2 PB0
Qp1,tq
t1,t2 y2
t1 p1qy2
t2 p1q
 ̧1{2
pCauchy-Schwarzq
ďCk`1
 ̃ › ›
›Qpt^Ck `1,tq
› › ›2
ÿ
sPBk
y4
s p1q
 ̧1{2  ̃
› ›
›Qp1,tq
› › ›2
ÿ
sPBk
y4
s p1q
 ̧1{2
ďCk`1
 ̃
4p21{2 ` 1q2pγ0 _ c2 _ 1q2R4
t C ́1
k
ÿ
sPBk
y4
s p1q
 ̧1{2
ˆ
 ̃
4p21{2 ` 1q2pγ0 _ c2 _ 1q2R4
t ηt
ÿ
sPB0
y4
s p1q
 ̧1{2
pCorollary B.14q
“4p21{2 ` 1q2pγ0 _ c2 _ 1q2R4
t
ˆ Ck`1
Ck
Ck`1
η ́1
t
 ̇1{2  ̃
ÿ
sPBk
y4
s p1q
 ̧1{2  ̃
ÿ
sPB0
y4
s p1q
 ̧1{2
.
For k1, k2 “ 1, . . . , K, by Corollary B.14 and Cauchy-Schwarz inequality on semi-positive definite matrix, we have
Sk1 ,k2
“
ÿ
t1 PBk1
ÿ
t2 PBk2
pt1 _ t2qQt1,t2 y2
t1 p1qy2
t2 p1q
ďCk1_k2`1
 ̈
 ̋
ÿ
t1 ,t2 PBk1
Qp1,tq
t1,t2 y2
t1 p1qy2
t2 p1q
 ̨
‚
1{2  ̈
 ̋
ÿ
t1 ,t2 PBk2
Qp1,tq
t1,t2 y2
t1 p1qy2
t2 p1q
 ̨
‚
1{2
pCauchy-Schwarzq
ďCk1_k2`1
 ̈
 ̋
› ›
›Qpt^Ck1 `1,tq
› › ›2
ÿ
sPBk1
y4
s p1q
 ̨
‚
1{2  ̈
 ̋
› ›
›Qpt^Ck2 `1,tq
› › ›2
ÿ
sPBk2
y4
s p1q
 ̨
‚
1{2
ďCk1_k2`1
 ̈
 ̋4p21{2 ` 1q2ξ2R4
t C ́1
k1
ÿ
t1 PBk1
y4
t p1q
 ̨
‚
1{2
ˆ
 ̈
 ̋4p21{2 ` 1q2pγ0 _ c2 _ 1q2R4
t C ́1
k2
ÿ
t2 PBk2
y4
t p1q
 ̨
‚
1{2
pCorollary B.14q
50

ď4p21{2 ` 1q2pγ0 _ c2 _ 1q2R4
t
ˆ Ck1_k2`1
Ck1
Ck1 _k2 `1
Ck2
 ̇1{2
 ̈
 ̋
ÿ
sPBk1
y4
s p1q
 ̨
‚
1{2  ̈
 ̋
ÿ
sPBk2
y4
s p1q
 ̨
‚
1{2
.
Since K tends to infinity when T grows to infinity, when T is large enough, it is easy to see that
max
k“1,...,K
η ́1`ppk`1q ́1q{K
t T ppk`1q ́1q{K
η ́1`pk ́1q{K
t T pk ́1q{K “ exp
 ́
logpT ηtq
1 K
 ̄
“ exp
ˆ1
K logpT ηtq
 ̇
ď exp
ˆ2
log2pT ηtq
logpT ηtq
 ̇
Ñ1 .
Since C1 “ tη ́1
t u Ñ 8, this implies that for T large enough, we have
max
k“1,...,K
Ck`1
Ck
ď 21{2 .
Then when T is large enough, by the construction method of C1, . . . , CK`1, we have
max
k,k1 ,k2 “1,...,K
#
1,
ˆ Ck`1
Ck
Ck`1
η ́1
t
 ̇1{2
,
ˆ Ck1_k2`1
Ck1
Ck1 _k2 `1
Ck2
 ̇1{2+
ď
ˆ
21{2  ̈ T
tη ́1
tu
 ̇1{2
ď21{2pT ηtq1{2.
Hence by Cauchy-Schwarz inequality and Assumption 1, for T large enough we have
ÿ
1ďt2 ,t3 ăt1 ďt ́1
ˇ ˇ ˇ ˇ ˇ
t
ÿ
s“t1 `1
Πs,t1 Πs,t2
ˇ ˇ ˇ ˇ ˇ
ˇ ˇ ˇ ˇ ˇ
t
ÿ
s“t1 `1
Πs,t1 Πs,t3
ˇ ˇ ˇ ˇ ˇ
y2
t1 p1q |yt2 p1q| |yt3 p1q|
ď1
2
K
ÿ
k1 “0
K
ÿ
k2 “0
Sk1 ,k2
ď23{2p21{2 ` 1q2pγ0 _ c2 _ 1q2R4
t pT ηtq1{2
»

K
ÿ
k1 “0
K
ÿ
k2 “0
 ̈
 ̋
ÿ
sPBk1
y4
s p1q
 ̨
‚
1{2  ̈
 ̋
ÿ
sPBk2
y4
s p1q
 ̨
‚
1{2fi
ffi fl
ď18pγ0 _ c2 _ 1q2R4
t pT ηtq1{2
 ̈
 ̋
K
ÿ
k“0
 ̃ ÿ
sPBk
y4
s p1q
 ̧1{2 ̨
‚
2
ď18pγ0 _ c2 _ 1q2R4
t pT ηtq1{2K
 ̈
 ̋
K
ÿ
k“0
 ̈
 ̋
ÿ
Ck ďtďCk`1  ́1
y4
t p1q
 ̨
‚
 ̨
‚ pCauchy-Schwarz inequalityq
“18pγ0 _ c2 _ 1q2R4
t pT ηtq1{2K
T  ́1
ÿ
t“1
y4
t p1q
ď18c4
1pγ0 _ c2 _ 1q2R4
t pT ηtq1{2KT
ď18c4
1pγ0 _ c2 _ 1q2R4
t η1{2
t T 3{2 log2pηtT q pAssumption 1q .
51

The following lemma characterizes the relationship between the original p-space and the transformed u-space induced by the sigmoid function φ.
Lemma B.16. Under Condition 1, for any u, u ̃ ě 0, p “ φpuq and p ̃ “ φpu ̃q, we have
(1)
 ́1
1 ́φp0q
 ̄1
ě b3
2.
(2) |
 ́1 φpuq
 ̄1
| ď b2
2 ̈ 1
p1`uq2 .
(3) b3
2  ̈ |u  ́ u ̃| ď | 1
1 ́p  ́ 1
1 ́p ̃| ď b1  ̈ |u  ́ u ̃|.
(4) | 1
p ́1
p ̃| ď b2
2  ̈ |u ́u ̃|
p1`uqp1`u ̃q .
(5) |
 ́1 φpuq
 ̄1
 ́
 ́1 φpu ̃q
 ̄1
| ě b3
2  ̈ |u ́u ̃|
p1`uqp1`u ̃qp1`u^u ̃q .
(6) max
"
1
φpuq  ́ 1
φpu ̃q  ́
 ́1 φpu ̃q
 ̄1
pu  ́ u ̃q, 1
1 ́φpuq  ́ 1
1 ́φpu ̃q  ́
 ́1
1 ́φpu ̃q
 ̄1
pu  ́ u ̃q
*
ď b2
2  ̈ u ̃ ́u
p1`uqp1`u ̃q for u ̃ ě u.
Proof. (1) By Condition 1(1) and Condition 1(3c), we have
ˆ1
1  ́ φp0q
 ̇1
ě
ż0
 ́8
ˆ1
1  ́ φpuq
 ̇2
du ě b3
ż0
 ́8
1
p1  ́ uq3 du ě b3
2.
(2) By Condition 1(1) and Condition 1(3b), we have
ˇ ˇ ˇ ˇ ˇ
ˆ1
φpuq
 ̇1ˇ
ˇ ˇ ˇ ˇ
ď
ˇ ˇ ˇ ˇ ˇ
ż8
u
ˆ1
φptq
 ̇2
dt
ˇ ˇ ˇ ˇ ˇ
ď b2
ˇ ˇ ˇ ˇ
ż8
u
1
p1 ` tq3 dt
ˇ ˇ ˇ ˇ
ď b2
2p1 ` uq2 .
(3) By Condition 1(1) and Condition 1(3a), we have
ˇ ˇ ˇ ˇ
1
1 ́p  ́ 1
1  ́ p ̃
ˇ ˇ ˇ ˇ
“
ˇ ˇ ˇ ˇ
1
1  ́ φpuq  ́ 1
1  ́ φpu ̃q
ˇ ˇ ˇ ˇ
“
ˇ ˇ ˇ ˇ ˇ
ˆ1
1  ́ φpu ̄q
 ̇1ˇ
ˇ ˇ ˇ ˇ
|u  ́ u ̃| “
ˇ ˇ ˇ ˇ ˇ
ˆ1
φp ́u ̄q
 ̇1ˇ
ˇ ˇ ˇ ˇ
|u  ́ u ̃| ď b1|u  ́ u ̃| .
By the result in (1) and Condition 1(2), we have
ˇ ˇ ˇ ˇ
1
1 ́p  ́ 1
1  ́ p ̃
ˇ ˇ ˇ ˇ
“
ˇ ˇ ˇ ˇ
1
1  ́ φpuq  ́ 1
1  ́ φpu ̃q
ˇ ˇ ˇ ˇ
“
ˇ ˇ ˇ ˇ ˇ
żu
u ̃
ˆ1
1  ́ φptq
 ̇1
dt
ˇ ˇ ˇ ˇ ˇ
ě
ˇ ˇ ˇ ˇ ˇ
żu
u ̃
ˆ1
1  ́ φp0q
 ̇1
dt
ˇ ˇ ˇ ˇ ˇ
ě b3
2 |u  ́ u ̃| .
(4) By the result in (2), we have
ˇ ˇ ˇ ˇ
1
p ́1
p ̃
ˇ ˇ ˇ ˇ
“
ˇ ˇ ˇ ˇ
1
φpuq  ́ 1
φpu ̃q
ˇ ˇ ˇ ˇ
ď
ˇ ˇ ˇ ˇ ˇ
ż u ̃
u
ˆ1
φptq
 ̇1
dt
ˇ ˇ ˇ ˇ ˇ
ď b2
2
ˇ ˇ ˇ ˇ ˇ
ż u ̃
u
1
p1 ` tq2 dt
ˇ ˇ ˇ ˇ ˇ
“ b2|u  ́ u ̃|
2p1 ` uqp1 ` u ̃q .
(5) By Condition 1(3c), we have
ˇ ˇ ˇ ˇ ˇ
ˆ1
φpuq
 ̇1
 ́
ˆ1
φpu ̃q
 ̇1ˇ
ˇ ˇ ˇ ˇ
ěb3
ˇ ˇ ˇ ˇ
żu
u ̃
1
p1 ` tq3 dt
ˇ ˇ ˇ ˇ
52

“ b3
2
ˇ ˇ ˇ ˇ
1
p1 ` u ̃q2  ́ 1
p1 ` uq2
ˇ ˇ ˇ ˇ
“ b3
2
p1 ` u ̃ ` uq
p1 ` u ̃q2p1 ` uq2 |u  ́ u ̃|
ě b3
2
1
p1 ` u ̃qp1 ` uqp1 ` u ̃ ^ uq |u  ́ u ̃| .
(6) By Condition 1(1), Condition 1(2) and the result in (4), we have
1
φpuq  ́ 1
φpu ̃q  ́
ˆ1
φpu ̃q
 ̇1
pu  ́ u ̃q ď 1
φpuq  ́ 1
φpu ̃q ď b2pu ̃  ́ uq
2p1 ` uqp1 ` u ̃q .
By Condition 1(2) and Condition 1(3b), we have
1
1  ́ φpuq  ́ 1
1  ́ φpu ̃q  ́
ˆ1
1  ́ φpu ̃q
 ̇1
pu  ́ u ̃q
“
ż u ̃
u
ż u ̃
t
ˆ1
1  ́ φpsq
 ̇2
dsdt
“
ż u ̃
u
ż u ̃
t
ˆ1
φp ́sq
 ̇2
dsdt
ďb2
ż u ̃
u
ż u ̃
t
1
p1 ` sq3 dsdt
“ b2
2
ż u ̃
u
„1
p1 ` tq2  ́ 1
p1 ` u ̃q2
ȷ
dt
ď b2
2
„1
1`u  ́ 1
1 ` u ̃  ́ 1
p1 ` u ̃q2 pu ̃  ́ uq
ȷ
“ b2
2  ̈ p1 ` u ̃qpu ̃  ́ uq  ́ p1 ` uqpu ̃  ́ uq
p1 ` uqp1 ` u ̃q2
“ b2
2  ̈ pu ̃  ́ uq2
p1 ` uqp1 ` u ̃q2
ď b2
2  ̈ u ̃  ́ u
p1 ` uqp1 ` u ̃q .
B.3 Regret Decomposition
In this subsection, we derive a decomposition of the Neyman regret into two components: the probability regret and the prediction regret. We start by deriving the oracle variance in the following proposition.
Proposition 3.1. The oracle variance is given by T  ̈ V ̊ “ 2p1 ` ρqEp1qEp0q and the Neyman allocation is given by the least squares predictors β ̊pkq “ βOLSpkq and assignment probability
p “ p1 ` Ep0q{Ep1qq ́1.
Proof. By direct calculation, Varpτˆ; βp1q, βp0q, pq is given by:
Varpτˆ; βp1q, βp0q, pq
“
 ̃T ÿ
t“1
␣ytp1q  ́ xxt, βp1qy(2
 ̧
 ̈
 ́1
p  ́1
 ̄
`
 ̃T ÿ
t“1
␣ytp0q  ́ xxt, βp0qy(2
 ̧
 ̈
 ́1
1 ́p  ́1
 ̄
53

`2
T
ÿ
t“1
␣ytp1q  ́ xxt, βp1qy(  ̈ ␣ytp0q  ́ xxt, βp0qy( .
By fixing βp1q and βp0q, it is easy to see that the optimal choice of p is p ̊ “ p1 ` přT
t“1pytp0q  ́
xxt, βp0qyq2q1{2{přT
t“1pytp1q ́xxt, βp1qyq2q1{2q ́1. By plugging the form of p ̊ into the variance, we can obtain
Varpτˆ; βp1q, βp0q, p ̊q “2
 ̃T ÿ
t“1
␣ytp1q  ́ xxt, βp1qy(2
 ̧1{2  ̃ T ÿ
t“1
␣ytp0q  ́ xxt, βp0qy(2
 ̧1{2
`2
T
ÿ
t“1
␣ytp1q  ́ xxt, βp1qy(  ̈ ␣ytp0q  ́ xxt, βp0qy( .
Now we prove that Varpτˆ; βp1q, βp0q, p ̊q ě Varpτˆ; β ̊p1q, β ̊p0q, p ̊q for any βp1q, βp0q. Let βp1q “ β ̊p1q ` δ1 and βp0q “ β ̊p0q ` δ0. We further denote α1 “ Y T p1q  ́ XT β ̊p1q, α0 “ Y T p0q  ́ XT β ̊p0q, z1 “ XT δ1 and z0 “ XT δ0. By the explicit form of β ̊p1q and β ̊p0q, we can easily prove that xα1, z1y “ xα1, z0y “ xα0, z1y “ xα0, z0y “ 0. Hence we have
Varpτˆ; βp1q, βp0q, p ̊q “2 `}α1  ́ z1}2
2
 ̆1{2 `}α0  ́ z0}2
2
 ̆1{2 ` 2xα1  ́ z1, α0  ́ z0y
“2 `}α1}2
2 ` }z1}2
2
 ̆1{2 `}α0}2
2 ` }z0}2
2
 ̆1{2 ` 2xα1, α0y ` 2xz1, z0y ,
Varpτˆ; β ̊p1q, β ̊p0q, p ̊q “2 `}α1}2
2
 ̆1{2 `}α0}2
2
 ̆1{2 ` 2xα1, α0y .
Hence it suffices to prove that
`}α1}2
2 ` }z1}2
2
 ̆1{2 `}α0}2
2 ` }z0}2
2
 ̆1{2 ` xz1, z0y ě `}α1}2
2
 ̆1{2 `}α0}2
2
 ̆1{2 .
Note that we have xz1, z0y ě  ́}z1}2}z0}2 by Cauchy-Schwarz inequality. Then we only need to show that
`}α1}2
2 ` }z1}2
2
 ̆1{2 `}α0}2
2 ` }z0}2
2
 ̆1{2 ě `}α1}2
2
 ̆1{2 `}α0}2
2
 ̆1{2 ` }z1}2}z0}2 . (12)
Since both sides of (12) are nonnegative, it is equivalent to
`}α1}2
2 ` }z1}2
2
 ̆ `}α0}2
2 ` }z0}2
2
 ̆ ě `}α1}2
2
 ̆ `}α0}2
2
 ̆ ` 2p}α1}2
2}α0}2
2}z1}2
2}z0}2
2q1{2 ` `}z1}2
2
 ̆ `}z0}2
2
 ̆,
which can be further simplified as
}α1}2
2}z0}2
2 ` }α0}2
2}z1}2
2 ě 2p}α1}2
2}α0}2
2}z1}2
2}z0}2
2q1{2 .
This is immediately verified by AM-GM inequality. Hence β ̊p1q and β ̊p0q minimize Varpτˆ; βp1q, βp0q, p ̊q. By plugging in β ̊p1q and β ̊p0q, we can derive the minimizer for p as p ̊ “ p1`Ep0q{Ep1qq ́1.
Based on Proposition 3.1, we can derive the decomposition of the Neyman regret as stated in the following lemma.
Lemma 3.3. Under Assumption 1, the Neyman Regret can be decomposed as the T -normalized sum of the probability regret and the prediction regret:
RNeyman
T “1
T ErRprob
T s` 1
T ErRpred
T s.
Proof. Let us recall the expression for the variance of the AIPW estimator from Proposition 2.2:
T  ̈ Varpτˆq
54

“E
«
1 T
T
ÿ
t“1
tytp1q  ́ xxt, βtp1qyu2  ̈
ˆ1
pt
 ́1
 ̇
ff
`E
«
1 T
T
ÿ
t“1
tytp0q  ́ xxt, βtp0qyu2  ̈
ˆ1
1  ́ pt
 ́1
 ̇
ff
` 2E
«
1 T
T
ÿ
t“1
tytp1q  ́ xxt, βtp1qyu  ̈ tytp0q  ́ xxt, βtp0qyu
ff
“E
«
1 T
T
ÿ
t“1
ftpptq
ff
` 2E
«
1 T
T
ÿ
t“1
tytp1q  ́ xxt, βtp1qyu  ̈ tytp0q  ́ xxt, βtp0qyu
ff
“1
T ErRprob
T s`E
«
1 T
T
ÿ
t“1
ftpp ̊q
ff
` 2E
«
1 T
T
ÿ
t“1
tytp1q  ́ xxt, βtp1qyu  ̈ tytp0q  ́ xxt, βtp0qyu
ff
fi1
T ErRprob
T s ` S1 .
By the definition of prediction regret, we can further decompose term S1 as:
S1 “E
«
1 T
T
ÿ
t“1
tytp1q  ́ xxt, βtp1qyu2
ff
 ̈
ˆ1
p ̊  ́ 1
 ̇
`E
«
1 T
T
ÿ
t“1
tytp0q  ́ xxt, βtp0qyu2
ff
 ̈
ˆ1
1  ́ p ̊  ́ 1
 ̇
` 2E
«
1 T
T
ÿ
t“1
tytp1q  ́ xxt, βtp1qyu  ̈ tytp0q  ́ xxt, βtp0qyu
ff
“1
T
T
ÿ
t“1
␣ytp1q  ́ xxt, β ̊p1qy(2  ̈
ˆ1
p ̊  ́ 1
 ̇
`1
T
T
ÿ
t“1
␣ytp0q  ́ xxt, β ̊p0qy(2  ̈
ˆ1
1  ́ p ̊  ́ 1
 ̇
`2
T
T
ÿ
t“1
␣ytp1q  ́ xxt, β ̊p1qy(  ̈ ␣ytp0q  ́ xxt, β ̊p0qy(
`
ˆ1
p ̊  ́ 1
 ̇
 ̈E
«
1 T
T
ÿ
t“1
tytp1q  ́ xxt, βtp1qyu2  ́ 1
T
T
ÿ
t“1
␣ytp1q  ́ xxt, β ̊p1qy(2
ff
`
ˆ1
1  ́ p ̊  ́ 1
 ̇
 ̈E
«
1 T
T
ÿ
t“1
tytp0q  ́ xxt, βtp0qyu2  ́ 1
T
T
ÿ
t“1
␣ytp0q  ́ xxt, β ̊p0qy(2
ff
` 2E
«
1 T
T
ÿ
t“1
tytp1q  ́ xxt, βtp1qyu  ̈ tytp0q  ́ xxt, βtp0qyu  ́ 1
T
T
ÿ
t“1
␣ytp1q  ́ xxt, β ̊p1qy(  ̈ ␣ytp0q  ́ xxt, β ̊p0qy(
ff
“E2p1q Ep0q
Ep1q ` E2p0q Ep1q
Ep0q ` 2ρEp1qEp0q ` Ep0q
Ep1q E
«
1 T
T
ÿ
t“1
tytp1q  ́ xxt, βtp1qyu2  ́ 1
T
T
ÿ
t“1
␣ytp1q  ́ xxt, β ̊p1qy(2
ff
` Ep1q
Ep0q E
«
1 T
T
ÿ
t“1
tytp0q  ́ xxt, βtp0qyu2  ́ 1
T
T
ÿ
t“1
␣ytp0q  ́ xxt, β ̊p0qy(2
ff
` 2E
«
1 T
T
ÿ
t“1
tytp1q  ́ xxt, βtp1qyu  ̈ tytp0q  ́ xxt, βtp0qyu  ́ 1
T
T
ÿ
t“1
␣ytp1q  ́ xxt, β ̊p1qy(  ̈ ␣ytp0q  ́ xxt, β ̊p0qy(
ff
“2p1 ` ρqEp1qEp0q ` 1
TE
”
Rpred
T
ı
.
Hence the Neyman regret can be finally decomposed by:
RNeyman
T “T  ̈ Varpτˆq  ́ T  ̈ V ̊
“1
T ErRprob
T s ` 2p1 ` ρqEp1qEp0q ` 1
TE
”
Rpred
T
ı
 ́ 2p1 ` ρqEp1qEp0q
“1
T ErRprob
T s` 1
TE
”
Rpred
T
ı
.
55

B.4 Probability Regret
In this subsection, we aim to analyze the inverse weighting terms that are appearing in the procedure and derive an upper bound for the probability regret. Throughout the analysis, we find it important to control the expectation of the inverse probability. This bound is established through a sequence of intermediate results, including Lemma 4.14, Corollary 4.15, Lemma 4.16, and Corollary B.17. In particular, Lemma 4.14 provides an upper bound for the inverse probability under the given optimizatio-
n program.
Lemma 4.14. Consider A, B ě 0 an define p ̊ as the minimizer of the following program:
p ̊ “ arg min
pPp0,1q
A
p` B
1  ́ p ` η ́1Ψppq .
Under Condition 1, the minimizer p ̊ is bounded away from 0 and 1 in the following sense:
1
p ̊ ď2 ` b1pb2{6q1{4η1{4B1{4 ^ b1pb2{b3q1{2pB{Aq1{2 ,
1
1  ́ p ̊ ď2 ` b1pb2{6q1{4η1{4A1{4 ^ b1pb2{b3q1{2pA{Bq1{2 .
Proof. If A ě B, then we have p ̊ ě 1{2 and 1{p ̊ ď 2. By definition, u ̊ “ φpp ̊q ě 0 should satisfy the following first-order equation:
A
ˆ1
φpu ̊q
 ̇1
`B
ˆ1
1  ́ φpu ̊q
 ̇1
` η ́1pu ̊ ` 3pu ̊q2q “ 0 .
By Lemma B.16 and Condition 1, we have
3η ́1pu ̊q2 ď η ́1pu ̊ ` 3pu ̊q2q ` B
ˆ1
1  ́ φpu ̊q
 ̇1
“  ́A
ˆ1
φpu ̊q
 ̇1
ď b2
2 ̈ A
p1 ` u ̊q2 ď b2A
2pu ̊q2 .
Hence we have u ̊ ď pb2{6q1{4η1{4A1{4. Moreover, by Lemma B.16, we have
b3B
2 ďB
ˆ1
1  ́ φp0q
 ̇1
ďB
ˆ1
1  ́ φpu ̊q
 ̇1
ď η ́1pu ̊ ` 3pu ̊q3q ` B
ˆ1
1  ́ φpu ̊q
 ̇1
ď b2A
2p1 ` u ̊q2 .
This implies that u ̊ ď pb2{b3q1{2pA{Bq1{2  ́ 1. Then by Condition 1 we have
1
1  ́ p ̊ “ 1
1  ́ φpu ̊q ď 1
1  ́ φp0q ` b1u ̊ ď 2 ` b1pb2{6q1{4η1{4A1{4 ^ b1pb2{b3q1{2pA{Bq1{2 .
We can derive similar results when A ă B, i.e., 1
p ̊ ď 2`b1pb2{6q1{4η1{4B1{4^b1pb2{b3q1{2pB{Aq1{2.
Based Lemma 4.14 and Jensen’s inequality, we can upper bound the moments of the inverse probabilities in terms of the expectation of the estimated squared residuals. The result is summarized in the following corollary.
Corollary 4.15. Under Condition 1, for each iteration t P rT s and any 0 ď k ď 4, the kth moment of the inverse probabilities are bounded as
E
” ́ 1
pt
 ̄k ı
ď
ˆ
2 ` b1pb2{6q1{4η1{4
t
”
E
Apt ́1p0q
ı1{4 ̇k
,
E
” ́ 1
1  ́ pt
 ̄k ı
ď
ˆ
2 ` b1pb2{6q1{4η1{4
t
”
E
Apt ́1p1q
ı1{4 ̇k
.
56

Proof. By the definition of pt, Lemma 4.14 and Jensen’s inequality, for any 0 ď k ď 4 we have
E
„1
ptk
ȷ
ďE
„  ́
2 ` b1pb2{6q1{4η1{4
t
Ap1{4
t ́1p0q
 ̄k ȷ
ď
ˆ
2 ` b1pb2{6q1{4η1{4
t
”
E
Apt ́1p0q
ı1{4 ̇k
.
Similarly, we can prove the result for the moments of 1{p1  ́ ptq.
Corollary 4.15 implies that we need to further bound the expectation of the estimated squared residuals, which is explicitly derived in the following lemma.
Lemma 4.16. For any t P rT s, the expectation of the estimated squared residuals is equal to
ErAptp1qs “ A ̊
t p1q `
t
ÿ
s“1
s ́1
ÿ
r“1
Π2
s,r y 2
r p1q E
”1
pr
 ́1
ı
ErAptp0qs “ A ̊
t p0q `
t
ÿ
s“1
s ́1
ÿ
r“1
Π2
s,r y 2
r p0q E
”1
1  ́ pr
 ́1
ı
.
Proof. By Lemma 4.12 and the law of iterated expectation, the expectation of Aptp1q is calculated by:
E
”
Aptp1q
ı
“E
«t ÿ
s“1
1rZs “ 1s
ps
 ̈ pysp1q  ́ xxs, βsp1qyq2
ff
“
t
ÿ
s“1
E
«
E
«
1rZs “ 1s
ps
 ̈ pysp1q  ́ xxs, βsp1qyq2
ˇ ˇ ˇ ˇ ˇ
Fs ́1
ffff
“
t
ÿ
s“1
E
”
pysp1q  ́ xxs, βsp1qyq2ı
“
t
ÿ
s“1
E
«
y2
s p1q  ́ 2ysp1qxxs, βsp1qy `
ÿ
1ďr1 ,r2 ďs ́1
Πs,r1 Πs,r2 yr1 p1qyr2 p1q 1rZr1 “ 1s
pr1
 ̈ 1rZr2 “ 1s
pr2
ff
“
t
ÿ
s“1
y2
s p1q  ́ 2ysp1qxxs, β ̊
s p1qy `
t
ÿ
s“1
s ́1
ÿ
r“1
Π2
s,r y 2
r p1qE
«
E
«
ˆ 1rZr “ 1s
pr
 ̇2 ˇ
ˇ
ˇFr ́1
ffff
`2
t
ÿ
s“1
ÿ
1ďr1 ăr2 ďs ́1
E
„
E
„
Πs,r1 Πs,r2 yr1 p1qyr2 p1q 1rZr1 “ 1s
pr1
 ̈ 1rZr2 “ 1s
pr2
ˇ
ˇ
ˇFr2 ́1
ȷȷ
“
t
ÿ
s“1
y2
s p1q  ́ 2ysp1qxxs, β ̊
s p1qy `
t
ÿ
s“1
s ́1
ÿ
r“1
Π2
s,r y 2
r p1qE
„1
pr
ȷ
`2
t
ÿ
s“1
ÿ
1ďr1 ăr2 ďs ́1
Πs,r1 Πs,r2 yr1 p1qyr2 p1q
“
t
ÿ
s“1
`ysp1q  ́ xxs, β ̊
s p1qy ̆2 `
t
ÿ
s“1
s ́1
ÿ
r“1
Π2
s,r y 2
r p1qE
„1
pr
 ́1
ȷ
“A ̊
t p1q `
t
ÿ
s“1
s ́1
ÿ
r“1
Π2
s,r y 2
r p1qE
„1
pr
 ́1
ȷ
.
Similarly, we can prove that
ErAptp0qs “ A ̊
t p0q `
t
ÿ
s“1
s ́1
ÿ
r“1
Π2
s,r y 2
r p0qE
„1
1  ́ pr
 ́1
ȷ
.
57

The following corollary characterized the rate of the expectation of the estimated squared residuals.
Corollary B.17. Under Assumptions 1-3 and Condition 1, for any t P rT s, the expectation of the estimated squared residuals can be bounded as:
max
!
ErAptp1qs, ErAptp0qs
)
ď κ “ p2c2
1 ` op1qqT ,
where κ ą 2c21T is the largest solution to the following equation:
κ “ 2c2
1T ` c2
1pγ0 _ c2 _ 1q3{2ξ3{2
 ́
b1pb2{6q1{4T  ́1{8κ1{4 ` 1
 ̄
R2
T T 1{4 .
Proof. We use induction method to prove the result. For t “ 1, we have EAptp1q “ At ̊p1q “ ytp1q2 ď c21T 1{2 ď 2c21T ď κ and EAptp0q “ At ̊p0q “ ytp0q2 ď c21T 1{2 ď 2c21T ď κ. Hence the result holds. If the result is proved for 1, . . . , t  ́ 1, then by Lemma B.11, Lemma B.15, Lemma 4.16 and Corollary 4.15, we have
ErAptp1qs “A ̊
t p1q `
t
ÿ
s“1
s ́1
ÿ
r“1
Π2
s,r y 2
r p1qE
„1
pr
 ́1
ȷ
pLemma 4.16q
ď2c2
1T `
t
ÿ
s“1
s ́1
ÿ
r“1
Π2
s,r y 2
r p1q
ˆ
1 ` b1pb2{6q1{4η1{4
r
”
E
Apr ́1p0q
ı1{4 ̇
pCorollary 4.15, Lemma B.11q
ď2c2
1T ` b1pb2{6q1{4κ1{4
t
ÿ
s“1
s ́1
ÿ
r“1
Π2
s,r η 1{4
r y2
r p1q `
t
ÿ
s“1
s ́1
ÿ
r“1
Π2
s,r y 2
r p1q pinduction assumptionq
“2c2
1T ` b1pb2{6q1{4T  ́1{8κ1{4
t
ÿ
s“1
R ́1{2
s
s ́1
ÿ
r“1
Π2
s,r y 2
r p1q `
t
ÿ
s“1
s ́1
ÿ
r“1
Π2
s,r y 2
r p1q
ď2c2
1T `
 ́
b1pb2{6q1{4T  ́1{8κ1{4 ` 1
 ̄t
ÿ
s“1
s ́1
ÿ
r“1
Π2
s,r y 2
r p1q
ď2c2
1T ` c2
1pγ0 _ c2 _ 1q3{2ξ3{2
 ́
b1pb2{6q1{4T  ́1{8κ1{4 ` 1
 ̄
R3
t η1{2
t T 1{2 pLemma B.15q
ď2c2
1T ` c2
1pγ0 _ c2 _ 1q3{2ξ3{2
 ́
b1pb2{6q1{4T  ́1{8κ1{4 ` 1
 ̄
R2
T T 1{4 psince Rt ď RT q
“κ .
Similarly, we can prove that ErAptp0qs ď κ. The result is thus proved by induction method. By Assumption 3, we have R2
T T 1{4 “ opT 3{4q. Hence it is easy to see that κ “ p2c21 ` op1qqT .
Under Corollary 4.15 and Corollary B.17, we are now able to control the expectations of powers of inverse probabilities. The following lemma extends these results by providing upper bounds for moments of the inverse weighting terms that arise in the subsequent proofs, beyond the simple power-type functions.
Lemma B.18. Under Assumptions 1-3 and Condition 1, there holds:
(1) max1ďs1ďT E
„
 ́ 1rZs1 “1s ps1
 ́1
 ̄4ȷ
“ OpT 3{8q.
(2) max1ďs1‰s2ďT
ˇ ˇ ˇ ˇ
E
„
 ́ 1rZs1 “1s ps1
 ́1
 ̄3  ́ 1rZs2 “1s
ps2
 ́1
 ̄
ȷˇ ˇ ˇ ˇ
“ OpT 5{16q.
(3) max1ďs1‰s2ďT E
„
 ́ 1rZs1 “1s ps1
 ́1
 ̄2  ́ 1rZs2 “1s
ps2
 ́1
 ̄2ȷ
“ OpT 9{32q.
(4) max1ďs1‰s2‰s3ďT
ˇ ˇ ˇ ˇ
E
„
 ́ 1rZs1 “1s ps1
 ́1
 ̄2  ́ 1rZs2 “1s
ps2
 ́1
 ̄  ́ 1rZs3 “1s
ps3
 ́1
 ̄
ȷˇ ˇ ˇ ˇ
“ OpT 25{128q.
58

(5) For s3 ‰ s2 ă s1,
ˇ ˇ
ˇCov
 ́ ́ 1rZs1 “1s
ps1
 ́1
 ̄  ́ 1rZs2 “1s
ps2
 ́1
 ̄
,
 ́ 1rZs1 “1s ps1
 ́1
 ̄  ́ 1rZs3 “1s
ps3
 ́1
 ̄ ̄ˇ ˇ ˇ
ď4
ˆ
2 ` b1pb2{6q1{4η1{4
s1
”
E
Aps1 p0q
ı1{4 ̇25{16  ́ Rs1
Rs2
 ̄15{96  ́ Rs1
Rs3
 ̄15{96
.
(6) max1ďs1ďT E
„
 ́ 1rZs1 “0s 1 ́ps1
 ́1
 ̄4ȷ
“ OpT 3{8q.
(7) max1ďs1‰s2ďT
ˇ ˇ ˇ ˇ
E
„
 ́ 1rZs1 “0s 1 ́ps1
 ́1
 ̄3  ́ 1rZs2 “0s 1 ́ps2
 ́1
 ̄
ȷˇ ˇ ˇ ˇ
“ OpT 5{16q.
(8) max1ďs1‰s2ďT E
„
 ́ 1rZs1 “0s 1 ́ps1
 ́1
 ̄2  ́ 1rZs2 “0s 1 ́ps2
 ́1
 ̄2ȷ
“ OpT 9{32q.
(9) max1ďs1‰s2‰s3ďT
ˇ ˇ ˇ ˇ
E
„
 ́ 1rZs1 “0s 1 ́ps1
 ́1
 ̄2  ́ 1rZs2 “0s 1 ́ps2
 ́1
 ̄  ́ 1rZs3 “0s 1 ́ps3
 ́1
 ̄
ȷˇ ˇ ˇ ˇ
“ OpT 25{128q.
(10) For s3 ‰ s2 ă s1,
ˇ ˇ
ˇCov
 ́ ́ 1rZs1 “0s 1 ́ps1
 ́1
 ̄  ́ 1rZs2 “0s 1 ́ps2
 ́1
 ̄
,
 ́ 1rZs1 “0s 1 ́ps1
 ́1
 ̄  ́ 1rZs3 “0s 1 ́ps3
 ́1
 ̄ ̄ˇ ˇ ˇ
ď4
ˆ
2 ` b1pb2{6q1{4η1{4
s1
”
E
Aps1 p1q
ı1{4 ̇25{16  ́ Rs1
Rs2
 ̄15{96  ́ Rs1
Rs3
 ̄15{96
.
Proof. Without loss of generality, we only prove (1)-(5).
(1) For any s1 P rT s, by Corollary 4.15 and Corollary B.17, we have
max
1ďs1ďT E
«
ˆ 1rZs1 “ 1s
ps1
 ́1
 ̇4ff
ď max
1ďsďT E
«
ˆ 1rZs “ 1s
ps
 ̇4ff
`1
“ max
1ďsďT E
„1
ps3
ȷ
`1
ď
 ́
2 ` b1pb2{6q1{4η1{4
1 κ1{4 ̄3
`1
ď
 ́
2 ` b1pb2{6q1{4T  ́1{8κ1{4 ̄3
`1
“OpT 3{8q .
(2) If s1 ă s2, then by law of iterated expectation, it is easy to see that
E
«
ˆ 1rZs1 “ 1s
ps1
 ́1
 ̇3 ˆ 1rZs2 “ 1s
ps2
 ́1
 ̇
ff
“0 .
If s2 ă s1, then by law of iterated expectation, Corollary 4.15, Corollary B.17 and Hölder’s inequality, we have
max
1ďs2 ăs1 ďT
ˇ ˇ ˇ ˇ ˇ
E
«
ˆ 1rZs1 “ 1s
ps1
 ́1
 ̇3 ˆ 1rZs2 “ 1s
ps2
 ́1
 ̇
ffˇ ˇ ˇ ˇ ˇ
ď max
1ďs2 ăs1 ďT
ˇ ˇ ˇ ˇ
E
„ˆ 1rZs1 “ 1s
ps31
`1
 ̇ ˆ 1rZs2 “ 1s
ps2
`1
 ̇ȷˇ ˇ ˇ ˇ
ď max
1ďs2 ăs1 ďT
ˆ
E
„ 1rZs1 “ 1s
ps31
1rZs2 “ 1s
ps2
ȷ
`E
„ 1rZs1 “ 1s
ps31
ȷ
`E
„ 1rZs2 “ 1s
ps2
ȷ
`1
 ̇
ď max
1ďs2 ăs1 ďT
ˆ
2`E
„1
ps21
1rZs2 “ 1s
ps2
ȷ
`E
„1
ps21
ȷ ̇
ď max
1ďs2 ăs1 ďT
 ̃
2`
ˆ
E
„1
ps41
ȷ ̇1{2 ˆ
E
„ 1rZs2 “ 1s
ps22
ȷ ̇1{2
`
 ́
2 ` b1pb2{6q1{4η1{4
s1 κ1{4 ̄2
 ̧
59

ď max
1ďs2 ăs1 ďT
 ̃
2`
ˆ
E
„1
ps41
ȷ ̇1{2 ˆ
E
„1
ps2
ȷ ̇1{2
`
 ́
2 ` b1pb2{6q1{4η1{4
1 κ1{4 ̄2
 ̧
ď max
1ďs2 ăs1 ďT
ˆ
2`
 ́
2 ` b1pb2{6q1{4η1{4
1 κ1{4 ̄4 ̈ 1
2`1
2`
 ́
2 ` b1pb2{6q1{4η1{4
1 κ1{4 ̄2 ̇
“OpT 5{16q .
(3) For any 1 ď s2 ă s1 ď T , by law of iterated expectation, Corollary 4.15, Corollary B.17 and Hölder’s inequality, we have
max
1ďs2ăs1ďT E
«
ˆ 1rZs1 “ 1s
ps1
 ́1
 ̇2 ˆ 1rZs2 “ 1s
ps2
 ́1
 ̇2ff
ď max
1ďs2ăs1ďT E
„ˆ 1rZs1 “ 1s
ps21
`1
 ̇ ˆ 1rZs2 “ 1s
ps22
`1
 ̇ȷ
“ max
1ďs2 ăs1 ďT
ˆ
E
„ 1rZs1 “ 1s
ps21
1rZs2 “ 1s
ps22
ȷ
`E
„ 1rZs1 “ 1s
ps21
ȷ
`E
„ 1rZs2 “ 1s
ps22
ȷ
`1
 ̇
“ max
1ďs2 ăs1 ďT
ˆ
E
„1
ps1
1rZs2 “ 1s
ps22
ȷ
`E
„1
ps1
ȷ
`E
„1
ps2
ȷ
`1
 ̇
ď max
1ďs2 ăs1 ďT
 ̈
 ̋
ˆ
E
„1
ps41
ȷ ̇1{4  ̃
E
«
1rZs2 “ 1s
p2 ̈ 4
s23
ff ̧3{4
`E
„1
ps1
ȷ
`E
„1
ps2
ȷ
`1
 ̨
‚
ď max
1ďs2 ăs1 ďT
 ̈
 ̋
ˆ
E
„1
ps41
ȷ ̇1{4  ̃
E
«
1
p5{3
s2
ff ̧3{4
`2
 ́
2 ` b1pb2{6q1{4η1{4
1 κ1{4 ̄
`1
 ̨
‚
ď max
1ďs2 ăs1 ďT
ˆ  ́
2 ` b1pb2{6q1{4η1{4
1 κ1{4 ̄4 ̈ 1
4`5
3 ̈3
4 `2
 ́
2 ` b1pb2{6q1{4η1{4
1 κ1{4 ̄
`1
 ̇
“OpT 9{32q .
(4) If s2 or s3 is the largest number among ts1, s2, s3u, then by law of iterated expectation, it is easy to see that
E
«
ˆ 1rZs1 “ 1s
ps1
 ́1
 ̇2 ˆ 1rZs2 “ 1s
ps2
 ́1
 ̇ ˆ 1rZs3 “ 1s
ps3
 ́1
 ̇
ff
“0 .
If s1 is the largest number among ts1, s2, s3u, we assume WLOG that s3 ă s2. By law of iterated expectation, Cauchy-Schwarz inequality and the result in (3), we have
max
1ďs3 ăs2 ăs1 ďT
ˇ ˇ ˇ ˇ ˇ
E
«
ˆ 1rZs1 “ 1s
ps1
 ́1
 ̇2 ˆ 1rZs2 “ 1s
ps2
 ́1
 ̇ ˆ 1rZs3 “ 1s
ps3
 ́1
 ̇
ffˇ ˇ ˇ ˇ ˇ
“ max
1ďs3 ăs2 ăs1 ďT
ˇ ˇ ˇ ˇ
E
„ 1  ́ ps1
ps1
ˆ 1rZs2 “ 1s
ps2
 ́1
 ̇ ˆ 1rZs3 “ 1s
ps3
 ́1
 ̇ȷˇ ˇ ˇ ˇ
“ max
1ďs3 ăs2 ăs1 ďT
ˇ ˇ ˇ ˇ
E
„1
ps1
ˆ 1rZs2 “ 1s
ps2
 ́1
 ̇ ˆ 1rZs3 “ 1s
ps3
 ́1
 ̇ȷˇ ˇ ˇ ˇ
ď max
1ďs3ăs2ăs1ďT E
„1
ps1
ˆ 1rZs2 “ 1s
ps2
`1
 ̇ ˆ 1rZs3 “ 1s
ps3
`1
 ̇ȷ
ď max
1ďs3 ăs2 ăs1 ďT
ˆ
E
„1
ps1
ȷ
`E
„1
ps1
1rZs2 “ 1s
ps2
ȷ
`E
„1
ps1
1rZs3 “ 1s
ps3
ȷ
`E
„1
ps1
1rZs2 “ 1s
ps2
1rZs3 “ 1s
ps3
ȷ ̇
fiS1 ` S2 ` S3 ` S4 .
60

By Corollary 4.15, Corollary B.17, we can bound S1 as:
S1 ď
 ́
2 ` b1pb2{6q1{4η1{4
1 κ1{4 ̄
.
By law of iterated expectation and Hölder’s inequality, we can bound S2 as:
S2 ď max
1ďs3 ăs2 ăs1 ďT
ˆ
E
„1
ps41
ȷ ̇1{4  ̃
E
«
1rZs2 “ 1s
p4{3
s2
ff ̧3{4
“ max
1ďs3 ăs2 ăs1 ďT
ˆ
E
„1
ps41
ȷ ̇1{4  ̃
E
«
1
p1{3
s2
ff ̧3{4
ď
 ́
2 ` b1pb2{6q1{4η1{4
1 κ1{4 ̄4 ̈ 1
4`1
3 ̈3
4
ď
 ́
2 ` b1pb2{6q1{4η1{4
1 κ1{4 ̄5{4
.
Similarly, S3 can be bounded as:
S3 ď
 ́
2 ` b1pb2{6q1{4η1{4
1 κ1{4 ̄5{4
.
By Hölder’s inequality, we can bound S4 as:
S4 ď max
1ďs3 ăs2 ăs1 ďT
ˆ
E
„1
ps41
ȷ ̇1{4  ̃
E
«
1rZs2 “ 1s
p4{3
s2
1rZs3 “ 1s
p4{3
s3
ff ̧3{4
ď max
1ďs3 ăs2 ăs1 ďT
ˆ
E
„1
ps41
ȷ ̇1{4  ̃
E
«
1
p1{3
s2
1rZs3 “ 1s
p4{3
s3
ff ̧3{4
ď max
1ďs3 ăs2 ăs1 ďT
ˆ
E
„1
ps41
ȷ ̇1{4 ˆ
E
„1
ps42
ȷ ̇ 3
4 ̈ 1
12
 ̃
E
«
1rZs3 “ 1s
p
4
3  ̈ 12
11
s3
ff ̧ 3
4  ̈ 11
12
“ max
1ďs3 ăs2 ăs1 ďT
ˆ
E
„1
ps41
ȷ ̇1{4 ˆ
E
„1
ps42
ȷ ̇ 3
4 ̈ 1
12
 ̃
E
«
1
p
5 s131
ff ̧ 3
4  ̈ 11
12
ď
 ́
2 ` b1pb2{6q1{4η1{4
1 κ1{4 ̄4 ̈ 1
4 `4 ̈ 3
4 ̈ 1
12 ` 5
11  ̈ 3
4  ̈ 11
12
“
 ́
2 ` b1pb2{6q1{4η1{4
1 κ1{4 ̄25{16
.
Hence we have
max
1ďs3 ‰s2 ‰s1 ďT
ˇ ˇ ˇ ˇ ˇ
E
«
ˆ 1rZs1 “ 1s
ps1
 ́1
 ̇2 ˆ 1rZs2 “ 1s
ps2
 ́1
 ̇ ˆ 1rZs3 “ 1s
ps3
 ́1
 ̇
ffˇ ˇ ˇ ˇ ˇ
“ OpT 25{128q .
(5) For any 1 ď s3 ă s2 ă s1 ď T , by law of total variance we have
ˇ ˇ ˇ ˇ
Cov
ˆˆ 1rZs1 “ 1s
ps1
 ́1
 ̇ ˆ 1rZs2 “ 1s
ps2
 ́1
 ̇
,
ˆ 1rZs1 “ 1s
ps1
 ́1
 ̇ ˆ 1rZs3 “ 1s
ps3
 ́1
 ̇ ̇ˇ ˇ ˇ ˇ
“
ˇ ˇ ˇ ˇ ˇ
E
«
Cov
 ̃
ˆ 1rZs1 “ 1s
ps1
 ́1
 ̇ ˆ 1rZs2 “ 1s
ps2
 ́1
 ̇
,
ˆ 1rZs1 “ 1s
ps1
 ́1
 ̇ ˆ 1rZs3 “ 1s
ps3
 ́1
 ̇
ˇ ˇ ˇ ˇ ˇ
Fs1 ́1
 ̧ff
` Cov
«
E
 ̃
ˆ 1rZs1 “ 1s
ps1
 ́1
 ̇ ˆ 1rZs2 “ 1s
ps2
 ́1
 ̇
ˇ ˇ ˇ ˇ ˇ
Fs1 ́1
 ̧
,
61

E
 ̃
ˆ 1rZs1 “ 1s
ps1
 ́1
 ̇ ˆ 1rZs3 “ 1s
ps3
 ́1
 ̇
ˇ ˇ ˇ ˇ ˇ
Fs1 ́1
 ̧ ffˇ ˇ ˇ ˇ ˇ
“
ˇ ˇ ˇ ˇ
E
„ 1  ́ ps1
ps1
ˆ 1rZs2 “ 1s
ps2
 ́1
 ̇ ˆ 1rZs3 “ 1s
ps3
 ́1
 ̇ȷˇ ˇ ˇ ˇ
“
ˇ ˇ ˇ ˇ
E
„1
ps1
ˆ 1rZs2 “ 1s
ps2
 ́1
 ̇ ˆ 1rZs3 “ 1s
ps3
 ́1
 ̇ȷˇ ˇ ˇ ˇ
ď
ˆ
E
„1
ps1
ȷ
`E
„1
ps1
1rZs2 “ 1s
ps2
ȷ
`E
„1
ps1
1rZs3 “ 1s
ps3
ȷ
`E
„1
ps1
1rZs2 “ 1s
ps2
1rZs3 “ 1s
ps3
ȷ ̇
.
By similar method as in (4), we can show that
ˇ ˇ ˇ ˇ
Cov
ˆˆ 1rZs1 “ 1s
ps1
 ́1
 ̇ ˆ 1rZs2 “ 1s
ps2
 ́1
 ̇
,
ˆ 1rZs1 “ 1s
ps1
 ́1
 ̇ ˆ 1rZs3 “ 1s
ps3
 ́1
 ̇ ̇ˇ ˇ ˇ ˇ
ď
 ́
2 ` b1pb2{6q1{4η1{4
s1 E1{4Aps1 p0q
 ̄
`
 ́
2 ` b1pb2{6q1{4η1{4
s1 E1{4Aps1 p0q
 ̄ ́
2 ` b1pb2{6q1{4η1{4
s2 E1{4Aps1 p0q
 ̄1{4
`
 ́
2 ` b1pb2{6q1{4η1{4
s1 E1{4Aps1 p0q
 ̄ ́
2 ` b1pb2{6q1{4η1{4
s3 E1{4Aps1 p0q
 ̄1{4
`
 ́
2 ` b1pb2{6q1{4η1{4
s1 E1{4Aps1 p0q
 ̄ ́
2 ` b1pb2{6q1{4η1{4
s2 E1{4Aps1 p0q
 ̄1{4  ́
2 ` b1pb2{6q1{4η1{4
s3 E1{4Aps1 p0q
 ̄15{48
ď
 ́
2 ` b1pb2{6q1{4η1{4
s1 E1{4Aps1 p0q
 ̄
`
 ́
2 ` b1pb2{6q1{4η1{4
s1 E1{4Aps1 p0q
 ̄ ́
2 ` b1pb2{6q1{4η1{4
s1 E1{4Aps1 p0q
 ̄1{4 ˆ Rs1
Rs2
 ̇1{8
`
 ́
2 ` b1pb2{6q1{4η1{4
s1 E1{4Aps1 p0q
 ̄ ́
2 ` b1pb2{6q1{4η1{4
s1 E1{4Aps1 p0q
 ̄1{4 ˆ Rs1
Rs3
 ̇1{8
`
 ́
2 ` b1pb2{6q1{4η1{4
s1 E1{4Aps1 p0q
 ̄1`1{4`15{48 ˆ Rs1
Rs2
 ̇1{8 ˆ Rs1
Rs3
 ̇15{96
ď4
 ́
2 ` b1pb2{6q1{4η1{4
s1 E1{4Aps1 p0q
 ̄25{16 ˆ Rs1
Rs2
 ̇15{96 ˆ Rs1
Rs3
 ̇15{96
.
With the help of Lemma B.18, we can establish an upper bound for the fourth moment of the random online OLS residuals, similar to the bound for the deterministic online OLS residuals given in Lemma B.7 except for an additional smaller order term. We first given the upper bound on the tracking error term in the following proposition.
Proposition 4.17. Under Assumptions 1-3 and Condition 1, the prediction tracking error for for both treatments k P t0, 1u can be bounded as ErřT
t“1 ηtxxt, βtpkq  ́ β ̊
t pkqy4s “ opT 1{2R2q.
Proof. By explicit calculation, we have
E
«
ηt
T
ÿ
t“1
xxt, βtp1q  ́ β ̊
t p1qy4
ff
“T  ́1{2E
»

T
ÿ
t“1
R ́2
t
 ̃t ́1
ÿ
s“1
Πt,sysp1q
„ 1rZs “ 1s
ps
 ́1
ȷ
 ̧4fi
fl
ÀT  ́1{2
T
ÿ
t“1
t ́1
ÿ
s“1
Π4
t,sy4
s p1qE
«
ˆ 1rZs “ 1s
ps
 ́1
 ̇4ff
62

` T  ́1{2
T
ÿ
t“1
ÿ
1ďs1 ‰s2 ďt ́1
|Πt,s1 |3|Πt,s2 ||ys1 p1q|3|ys2 p1q|
ˇ ˇ ˇ ˇ ˇ
E
«
ˆ 1rZs1 “ 1s
ps1
 ́1
 ̇3 ˆ 1rZs2 “ 1s
ps2
 ́1
 ̇
ffˇ ˇ ˇ ˇ ˇ
` T  ́1{2
T
ÿ
t“1
ÿ
1ďs1 ‰s2 ďt ́1
Π2
t,s1 Π2
t,s2 y2
s1 p1qy2
s2 p1qE
«
ˆ 1rZs1 “ 1s
ps1
 ́1
 ̇2 ˆ 1rZs2 “ 1s
ps2
 ́1
 ̇2ff
` T  ́1{2
T
ÿ
t“1
R ́1
t
ÿ
1ďs1 ‰s2 ‰s3 ďt ́1
Π2
t,s1 |Πt,s2 ||Πt,s3 |y2
s1 p1q|ys2 p1q||ys3 p1q|
ˆ
ˇ ˇ ˇ ˇ ˇ
E
«
ˆ 1rZs1 “ 1s
ps1
 ́1
 ̇2 ˆ 1rZs2 “ 1s
ps2
 ́1
 ̇ ˆ 1rZs3 “ 1s
ps3
 ́1
 ̇
ffˇ ˇ ˇ ˇ ˇ
fiT  ́1{2S1 ` T  ́1{2S2 ` T  ́1{2S3 ` T  ́1{2S4 .
By Assumption 3, Lemma B.15 and Lemma B.18, we have
S1 ÀR8
T η3
T T  ̈ T 3{8 “ T R2
T  ̈ T  ́9{8 “ opT R2
Tq ,
S2 ÀR13{2
t η7{4
t T 7{8  ̈ T 5{16 “ T R2
T  ̈ pT R ́4
T q ́11{16  ̈ R ́7{4
T “ opT R2
Tq ,
S3 ÀR6
T η2
T T  ̈ T 9{32 “ T R2
T  ̈ pT R ́4
T q ́23{32  ̈ R ́23{8
T “ opT R2
Tq ,
S4 ÀR4
T ηT T  ̈ T 25{128 “ T R2
T  ̈ pT R ́4
T q ́39{128  ̈ R ́39{32
T “ opT R2
Tq .
Hence by Lemma B.5 we have
E
«T ÿ
t“1
ηtxxt, βtp1q  ́ β ̊
t p1qy4
ff
ď T  ́1{2pS1 ` S2 ` S3 ` S4q “ opT 1{2R2
T q “ opT 1{2R2q .
The following corollary is a direct consequence of the proof in Proposition 4.17 and will be used in the proofs of Lemma C.3 and Lemma C.18.
Corollary B.19. Under Assumptions 1-3 and Condition 1, for k P t0, 1u, there holds:
E
«t ÿ
s“1
R ́1
s xxs, β ̊
s p1q  ́ βsp1qy4
ff
“ OpT 89{128R2
tq .
Proof. By similar proof as in Proposition 4.17 and Assumption 3, we have
E
«t ÿ
s“1
R ́1
s xxs, β ̊
s p1q  ́ βsp1qy4
ff
ÀR8
t η3
t T  ̈ T 3{8 ` R13{2
t η7{4
t T 7{8  ̈ T 5{16 ` R6
t η2
t T  ̈ T 9{32 ` R4
t ηtT  ̈ T 25{128
“T 89{128R2
t
 ́
T  ́105{128 ` RtT  ́49{128 ` T  ́53{128 ` 1
 ̄
“T 89{128R2
t
 ́
T  ́105{128 ` pT R ́4
t q ́49{128R ́17{32
t ` T  ́53{128 ` 1
 ̄
ÀT 89{128R2
t.
By combining the results in Lemma B.7 and Proposition 4.17, we can obtain the upper bound on the fourth moment of the random online OLS residuals in the following lemma.
63

Lemma 4.6*. Under Assumptions 1-3 and Condition 1, for each treatment k P t0, 1u, the fourth moment of the online residuals is bounded as:
E
«T ÿ
t“1
ηt pytpkq  ́ xxt, βtpkqyq4
ff
ď
„
c4
1 maxtc2, 1u
 ́
1 ` 2 ́1{2pγ0 _ 4c2q1{2 ̄4
` op1q
ȷ
T 1{2R2 .
Proof. Without loss of generality, we only prove the result for k “ 1. By Hölder’s inequality, we have
E
«T ÿ
t“1
ηt pytp1q  ́ xxt, βtp1qyq4
ff
“E
«T ÿ
t“1
ηt
`ytp1q  ́ xxt, β ̊
t p1qy ` xxt, β ̊
t p1q  ́ βtp1qy ̆4
ff
“E
«T ÿ
t“1
ηt
`ytp1q  ́ xxt, β ̊
t p1qy ̆4
ff
` 4E
«T ÿ
t“1
ηt
`ytp1q  ́ xxt, β ̊
t p1qy ̆3 xxt, β ̊
t p1q  ́ βtp1qy
ff
` 6E
«T ÿ
t“1
ηt
`ytp1q  ́ xxt, β ̊
t p1qy ̆2 xxt, β ̊
t p1q  ́ βtp1qy2
ff
` 4E
«T ÿ
t“1
ηt
`ytp1q  ́ xxt, β ̊
t p1qy ̆ xxt, β ̊
t p1q  ́ βtp1qy3
ff
`E
«T ÿ
t“1
ηtxxt, β ̊
t p1q  ́ βtp1qy4
ff
ď
T
ÿ
t“1
ηt
`ytp1q  ́ xxt, β ̊
t p1qy ̆4 ` 4
 ̃T ÿ
t“1
ηt
`ytp1q  ́ xxt, β ̊
t p1qy ̆4
 ̧3{4  ̃
E
«T ÿ
t“1
ηtxxt, β ̊
t p1q  ́ βtp1qy4
ff ̧1{4
`6
 ̃T ÿ
t“1
ηt
`ytp1q  ́ xxt, β ̊
t p1qy ̆4
 ̧1{2  ̃
E
«T ÿ
t“1
ηtxxt, β ̊
t p1q  ́ βtp1qy4
ff ̧1{2
`4
 ̃T ÿ
t“1
ηt
`ytp1q  ́ xxt, β ̊
t p1qy ̆4
 ̧1{4  ̃
E
«T ÿ
t“1
ηtxxt, β ̊
t p1q  ́ βtp1qy4
ff ̧3{4
`E
«T ÿ
t“1
ηtxxt, β ̊
t p1q  ́ βtp1qy4
ff
ď
»

 ̃T ÿ
t“1
ηt
`ytp1q  ́ xxt, β ̊
t p1qy ̆4
 ̧1{4
`
 ̃
E
«T ÿ
t“1
ηtxxt, β ̊
t p1q  ́ βtp1qy4
ff ̧1{4fi
fl
4
.
Hence by Lemma B.5, Lemma B.7 and Proposition 4.17, we have
E
«T ÿ
t“1
ηt pytp1q  ́ xxt, βtp1qyq4
ff
ďc4
1
 ́
1 ` 2 ́1{2pγ0 _ 4c2q1{2 ̄4
R2
T T 1{2 ` opR2T 1{2q
ď
„
c4
1 maxtc2, 1u
 ́
1 ` 2 ́1{2pγ0 _ 4c2q1{2 ̄4
` op1q
ȷ
T 1{2R2 .
We now turn to the analysis of the probability regret. The following lemma is a direct implication of the adaptive sequential design.
Lemma 4.2. The estimated sigmoid loss functions are conditionally unbiased: Erphtpuq | Ft ́1s “ htpuq for all Ft ́1-measurable random variables u.
Proof. Since βt, pt and u are measurable with respect to Ft ́1, we have
Erphtpuq | Ft ́1s
64

“E
„  ́
ytp1q  ́ xxt, βtp1qy
 ̄2
 ̈ 1rZt “ 1s
pt
 ̈1
φpuq `
 ́
ytp0q  ́ xxt, βtp0qy
 ̄2
 ̈ 1rZt “ 0s
1  ́ pt
 ̈1
1  ́ φpuq
ˇ
ˇ
ˇFt ́1
ȷ
“pytp1q  ́ xxt, βtp1qyq2  ̈ 1
φpuq ` pytp0q  ́ xxt, βtp0qyq2  ̈ 1
1  ́ φpuq
“htpuq .
In Lemma 4.3 and Lemma B.20, we establish the lower and upper bounds of the utilized Bregman divergence, respectively.
Lemma 4.3. The Bregman divergence is bounded: Bψpv|uq ě 1
2 pv  ́ uq2p1 ` 1
2 |v| ` |u|q.
Proof. Recall that ψpuq “ 1
2 u2 ` |u|3. Using the shorthand hpuq “ 1
2 u2 and gpuq “ |u|3, we have that ψpuq “ hpuq ` gpuq. Using the properties of Bregman divergence, we can separate the Bregman divergence as
Bψpv|uq “ Bh`gpv|uq “ Bhpv|uq ` Bgpv|uq “ 1
2 pv  ́ uq2 ` Bgpv|uq .
To complete the proof, it suffices to lower bound the second Bregman divergence as
Bgpv|uq ě 1
4 pv  ́ uq2  ̈ p|v| ` 2|u|q . (13)
To this end, we derive the Bregman divergence corresponding to g as
Bgpv|uq “ |v|3  ́ |u|3  ́ p3|u|uq  ̈ pv  ́ uq “ |v|3 ` 2|u|3  ́ 3uv|u| .
To show the inequality (13) holds, we will consider two cases.
Case 1. In the first case, we will suppose that u and v have the same sign, i.e., uv ě 0. In this case, it is true that |u  ́ v| “ |u| ` |v|. Thus, we have that the Bregman divergence is given by
Bgpv|uq “ |v|3 ` 2|u|3  ́ 3|u|2|v| .
On the other hand, we have
pv  ́ uq2p|v| ` 2|u|q “ `v2 ` u2  ́ 2vu ̆ p|v| ` 2|u|q
“|v|3 ` 2v2|u| ` u2|v| ` 2 |u|3  ́ 2vup|v| ` 2|u|q
“|v|3 ` 2v2|u| ` u2|v| ` 2 |u|3  ́ 2|v||u|p|v| ` 2|u|q pbecause uv ą 0q
“|v|3 ` 2|u|3  ́ 3u2|v| .
Thus, this establishes that inequality (13) holds in this case, as we have
Bgpv|uq “ pv  ́ uq2p|v| ` 2|u|q ě 1
4 pv  ́ uq2p|v| ` 2|u|q .
Case 2. In the second case, we will suppose that v and u have different signs, i.e., vu ă 0. This means that vu “  ́|v||u|. Before continuing, we establish a handy upper bound, which is that
4v2|u| ď 2`|v|3 ` 2|u|3 ` |u|2v ̆ . (14)
This upper bound may be established using the AM-GM inequality, as
4v2|u| “ 4|v|3{2  ̈ p|v|1{2|u|q ď 2`|v|3 ` |v||u|2 ̆ ď 2`|v|3 ` 2|u|3 ` |v|u2 ̆ .
65

With that inequality established, let us turn our attention back to the Bregman divergence. In this case, the Bregman divergence is
Bgpv|uq “ |v|3 ` 2|u|3  ́ 3uv|u|
“ |v|3 ` 2|u|3 ` 3|u||v||u| (because uv ă 0)
“ |v|3 ` 2|u|3 ` 3u2|v| .
On the other hand, we have
1
4 pv  ́ uq2p|v| ` 2|u|q “ 1
4
`v2 ` u2  ́ 2vu ̆p|v| ` 2|u|q
“1
4 pv2 ` u2 ` 2|v||u|qp|v| ` 2|u|q
“1
4
␣|v|3 ` 2v2|u| ` 2|u|3 ` u2|v| ` 2v2|u| ` 4|v|u2(
“1
4
␣|v|3 ` 2|u|3 ` 4v2|u| ` 5|v|u2(
ď1
4
␣|v|3 ` 2|u|3 ` 2 `|v|3 ` 2|u|3 ` |v|u2 ̆ ` 6|v|u2( puse (14)q
“1
4
␣3|v|3 ` 5|u|3 ` 7|v|u2(
ď|v|3 ` 2|u|3 ` 3|v|u2
“Bgpv|uq .
Thus, we have established that the inequality (13) holds for all v, u P R, which completes the proof.
The upper bound of the probability is derived through standard FTRL analysis. We first state one key property of the Bregman divergence.
Lemma B.20. Suppose that f and ψ are both differentiable and f  ́ ψ is convex. Then, for all x, y P X , we have that
Bf px|yq ď sup
zPX
tx∇f pyq  ́ ∇f pxq, z  ́ xy  ́ Bψpz|xqu .
Proof. We begin the proof by showing that the the following inequality is true:
f pzq  ́ f pxq  ́ x∇f pyq, z  ́ xy ě x∇f pxq  ́ ∇f pyq, z  ́ xy ` Bψpz|xq for all z P X . (15)
To this end,
f pzq  ́ f pxq  ́ x∇f pyq, z  ́ xy
“ x∇f pxq  ́ ∇f pyq, z  ́ xy ` Bψpz|xq
`
!
f pzq  ́ f pxq  ́ x∇f pxq, z  ́ xy  ́ Bψpz|xq
)
(add + subtract)
“ x∇f pxq  ́ ∇f pyq, z  ́ xy ` Bψpz|xq `
!
Bf pz|xq  ́ Bψpz|xq
)
(definition of Bf )
“ x∇f pxq  ́ ∇f pyq, z  ́ xy ` Bψpz|xq ` Bf ́ψpz|xq (linearity of Bregman divergence)
ě x∇f pxq  ́ ∇f pyq, z  ́ xy ` Bψpz|xq (f  ́ ψ is convex) .
We are now ready to proceed with the proof of the main lemma. Define the auxiliary function φy : X Ñ R as
φypzq “ f pzq  ́ x∇f pyq, zy.
66

Observe that φy is convex and differentiable. Thus, we have that
φypyq ě ziPnXf φypzq
“ φypxq ` ziPnXf tφypzq  ́ φypxqu
“ φypxq ` ziPnXf
!
f pzq  ́ f pxq  ́ x∇f pyq, z  ́ xy
)
(definition of φy)
ě φypxq ` ziPnXf
!
x∇f pxq  ́ ∇f pyq, z  ́ xy ` Bψpz|xq
)
(Using (15)) .
Rearranging terms and using the definition of φypxq and Bf , we have that
sup
zPX
!
x∇f pyq  ́ ∇f pxq, z  ́ xy  ́ Bψpz|xq
)
ě φypxq  ́ φypyq
“ f pxq  ́ f pyq  ́ x∇f pyq, x  ́ yy
“ Bf px|yq .
Based on Lemma 4.3, Lemma B.20 and the sigmoid transformation, we can derive the following upper bound for the probability regret.
Proposition 4.4. The expected probability regret can be bounded as
ErRprob
T sď 1
ηT
ψpu ̊q `
T
ÿ
t“1
ηt E
« `∇phtputq ̆2
2p1 ` |ut|q
ff
.
Proof. We introduce the following notations:
Hptpuq “
t ́1
ÿ
s“1
phspuq ` 1
ηt
ψpuq ,
Hrtpuq “
t ́1
ÿ
s“1
phspuq ` 1
ηt ́1
ψpuq .
Let ut, u ̃t be the minimizer of functions Hpt and Hrt, respectively. By Lemma 4.2, law of iterated expectation and similar proof as in of Lemma 4.9, we have
ErRprob
T s“
T
ÿ
t“1
E rftpptq  ́ ftpp ̊qs
“
T
ÿ
t“1
E rhtputq  ́ htpu ̊qs psigmoid transformationq
“
T
ÿ
t“1
E
”
E
”
phtputq  ́ phtpu ̊q
ˇ
ˇFt ́1
ıı
pLemma 4.2q
“
T
ÿ
t“1
E
”
phtputq  ́ phtpu ̊q
ı
plaw of iterated expectationq
ďη ́1
T `1ψpu ̊q ` E
«T ÿ
t“1
 ́
Hrt`1putq  ́ Hrt`1pu ̃t`1q
 ̄
ff
psimilar proof as Lemma 4.9q .
(16)
Then by Lemma B.20, we have
T
ÿ
t“1
E
” ́
Hrt`1putq  ́ Hrt`1pu ̃t`1q
 ̄ı
67

“E
«T ÿ
t“1
”
x∇Hrt`1pu ̃t`1q, ut  ́ u ̃t`1y ` BHĂt`1 put|u ̃t`1q
ı
ff
“E
«T ÿ
t“1
B
HĂt`1 put|u ̃t`1q
ff
poptimality of u ̃t`1q
ďE
«T ÿ
t“1
sup
zPR
!
x∇Hrt`1pu ̃t`1q  ́ ∇Hrt`1putq, z  ́ uty  ́ η ́1
t Bψpz|utq
)
ff
“
T
ÿ
t“1
E
„
sup
zPR
!A
∇
phtputq, ut  ́ z
E
 ́ η ́1
t Bψpz|utq
)
ȷ
poptimality of u ̃t`1 and utq . (17)
For any t P rT s and any fixed z P R, by Lemma 4.3, we have
A
∇
phtputq, ut  ́ z
E
 ́ η ́1
t Bψpz|utq ď
A
∇
phtputq, ut  ́ z
E
 ́ η ́1
t
2 pz  ́ utq2
ˆ
1` 1
2 |z| ` |ut|
 ̇
ď
A
∇
phtputq, ut  ́ z
E
 ́ η ́1
t
2 pz  ́ utq2 p1 ` |ut|q
ď ηtr∇phtputqs2
2p1 ` |ut|q . (18)
By (16), (17) and (18), we can derive
ErRprob
T sď 1
ηT
ψpu ̊q `
T
ÿ
t“1
ηtE
«
p∇phtputqq2
2p1 ` |ut|q
ff
.
Given the upper bound of the probability regret established in Proposition 4.4, we further upper bound the two corresponding terms in Lemma 4.5 and Lemma B.21, respectively.
Lemma 4.5. Under Condition 1, the conditional expectation of the squared gradient term is at most
E
« `∇phtputq ̆2
1 ` |ut|
ˇ
ˇ
ˇFt ́1
ff
ď b2
1 maxtb1, 2u
 ́
tytp1q  ́ xxt, βtp1qyu4 ` tytp0q  ́ xxt, βtp0qyu4 ̄
.
Thus, applying the law of iterated expectation yields
T
ÿ
t“1
ηt E
« `∇phtputq ̆2
2p1 ` |ut|q
ff
ď1
2 b2
1 maxtb1, 2u
ÿ
kPt0,1u
E
«T ÿ
t“1
ηt
␣ytpkq  ́ xxt, βtpkqy(4
ff
.
Proof. The gradient of the estimated loss function can be computed as
∇
pht puq “  ́ 1rZt “ 1s
pt
pytp1q  ́ xxt, βtp1qyq2  ̈
ˆ1
φpuq
 ̇1
` 1rZt “ 0s
1  ́ pt
pytp0q  ́ xxt, βtp0qyq2  ̈
ˆ1
1  ́ φpuq
 ̇1
.
Using Assumption 1, Condition 1 and the fact that the cross term is zero, we can upper bound the square of the gradient at ut as
p∇pht putqq2
68

“ 1rZt “ 1s
pt2
pytp1q  ́ xxt, βtp1qyq4  ̈
«
ˆ1
φputq
 ̇1ff2
` 1rZt “ 0s
p1  ́ ptq2 pytp0q  ́ xxt, βtp0qyq4  ̈
«
ˆ1
1  ́ φputq
 ̇1ff2
ďb2
1
„ 1rZt “ 1s
pt
pytp1q  ́ xxt, βtp1qyq4  ̈ 1
φputq ` 1rZt “ 0s
1  ́ pt
pytp0q  ́ xxt, βtp0qyq4  ̈ 1
1  ́ φputq
ȷ
ďb2
1
” 1rZt “ 1s
pt
pytp1q  ́ xxt, βtp1qyq4  ̈
ˆ1
φp0q ` b1|ut|
 ̇
` 1rZt “ 0s
1  ́ pt
pytp0q  ́ xxt, βtp0qyq4  ̈
ˆ1
1  ́ φp0q ` b1|ut|
 ̇ ı
ďb2
1p2 ` b1|ut|q
ˆ 1rZt “ 1s
pt
pytp1q  ́ xxt, βtp1qyq4 ` 1rZt “ 0s
1  ́ pt
pytp0q  ́ xxt, βtp0qyq4
 ̇
.
Hence we have
E
«
p∇pht putqq2
1 ` |ut|
ˇ
ˇ
ˇFt ́1
ff
ďE
„ b21p2 ` b1|ut|q
1 ` |ut|
ˆ 1rZt “ 1s
pt
pytp1q  ́ xxt, βtp1qyq4 ` 1rZt “ 0s
1  ́ pt
pytp0q  ́ xxt, βtp0qyq4
 ̇ˇ
ˇ
ˇFt ́1
ȷ
ďb2
1 maxtb1, 2uE
„ 1rZt “ 1s
pt
pytp1q  ́ xxt, βtp1qyq4 ` 1rZt “ 0s
1  ́ pt
pytp0q  ́ xxt, βtp0qyq4 ˇ
ˇ
ˇFt ́1
ȷ
“b2
1 maxtb1, 2u
”
pytp1q  ́ xxt, βtp1qyq4 ` pytp0q  ́ xxt, βtp0qyq4ı
.
Lemma B.21. Under Assumption 1 and Condition 1, there holds:
ψpu ̊q ď 8
b33
«
ˆ c1
c0
 ́1
 ̇3
` b3
4
ˆ c1
c0
 ́1
 ̇2ff
.
Proof. Since p ̊ “ p1 ` Ep0q{Ep1qq ́1, by Assumption 1 we have p ̊ P r 1
1`c1{c0 , 1  ́ 1
1`c1{c0 s. For
p ̊ ě 1{2, we have
1
1  ́ p ̊  ́ 1
1  ́ 1{2 ď 1
1 ́
 ́
1 ́ 1
1`c1 {c0
 ̄  ́ 2 “ c1
c0
 ́1 .
Hence by Lemma B.16, we have
c1
c0
 ́1ě 1
1  ́ p ̊  ́ 1
1  ́ 1{2 ě b3
2 pu ̊  ́ 0q ,
which implies that 0 ď u ̊ ď 2
b3 p c1
c0  ́ 1q. Since ψpuq is monotone increasing on r0, 8q, we can derive the following upper bound:
ψpu ̊q ď 1
2
„2
b3
ˆ c1
c0
 ́1
 ̇ȷ2
`
„2
b3
ˆ c1
c0
 ́1
 ̇ȷ3
.
For p ̊ ď 1{2, we can derive the same upper bound by symmetry.
Based on Proposition 4.4, Lemma 4.5, and Lemma B.21, we can finally establish the upper bound for the probability regret in the following proposition.
Proposition 4.7. Under Assumptions 1-3 and Condition 1, the expected probability regret is bounded in expectation as
ErRprob
T s ď maxtc2, 1u
 ̃
8 b33
«
ˆ c1
c0
 ́1
 ̇3
` b3
4
ˆ c1
c0
 ́1
 ̇2ff
69

` b2
1 maxtb1, 2uc4
1
 ́
1 ` 2 ́1{2pγ0 _ 4c2q1{2 ̄4
` op1q
 ̧
T 1{2R2 .
Proof. By Lemma B.5, Lemma 4.6*, Proposition 4.4, Lemma 4.5 and Lemma B.21, we can derive the following upper bound
ErRprob
Ts
ď1
ηT
ψpu ̊q `
T
ÿ
t“1
ηtE
«
p∇phtputqq2
2p1 ` |ut|q
ff
ď1
ηT
 ̈8
b33
«
ˆ c1
c0
 ́1
 ̇3
` b3
4
ˆ c1
c0
 ́1
 ̇2ff
` b21
2 maxtb1, 2uE
«T ÿ
t“1
ηt
”
pytp1q  ́ xxt, βtp1qyq4 ` pytp0q  ́ xxt, βtp0qyq4ı
ff
ďR2
T T 1{2  ̈ 8
b33
«
ˆ c1
c0
 ́1
 ̇3
` b3
4
ˆ c1
c0
 ́1
 ̇2ff
` b2
1 maxtb1, 2uc4
1 maxtc2, 1u
 ́
1 ` 2 ́1{2pγ0 _ 4c2q1{2 ̄4
R2T 1{2 ` opR2T 1{2q
ď maxtc2, 1u
 ̃
8 b33
«
ˆ c1
c0
 ́1
 ̇3
` b3
4
ˆ c1
c0
 ́1
 ̇2ff
` b2
1 maxtb1, 2uc4
1
 ́
1 ` 2 ́1{2pγ0 _ 4c2q1{2 ̄4
` op1q
 ̧
T 1{2R2 .
B.5 Prediction Regret
In this subsection, we derive an upper bound for the expected prediction regret. The following lemma establish the connection between the defined prediction regret with the corresponding terms that are actually utilized in proposed algorithm.
Lemma 4.8. For each iteration t, the following conditional unbiasedness holds:
E
“
lpt
`βtp1q, βtp0q ̆  ́ lpt
`β ̊p1q, β ̊p0q ̆ | Ft ́1
‰ “ lt
`βtp1q, βtp0q ̆  ́ lt
`β ̊p1q, β ̊p0q ̆ .
Proof. By the definition of lpt and lt, since βtp1q and βtp0q are measurable with respect to Ft ́1, we have
Erlptpβtp1q, βtp0qq  ́ lptpβ ̊p1q, β ̊p0qq|Ft ́1s
“E
«
E p0q
E p1q
ˆ
ytp1q  ̈ 1rZt “ 1s
pt
 ́ xxt, βtp1qy
 ̇2
` Ep1q
E p0q
ˆ
ytp0q  ̈ 1rZt “ 0s
1  ́ pt
 ́ xxt, βtp0qy
 ̇2
`2
ˆ
ytp1q  ̈ 1rZt “ 1s
pt
 ́ xxt, βtp1qy
 ̇
 ̈
ˆ
ytp0q  ̈ 1rZt “ 0s
1  ́ pt
 ́ xxt, βtp0qy
 ̇ˇ
ˇ
ˇFt ́1
ff
 ́E
«
E p0q
E p1q
ˆ
ytp1q  ̈ 1rZt “ 1s
pt
 ́ xxt, β ̊p1qy
 ̇2
` Ep1q
E p0q
ˆ
ytp0q  ̈ 1rZt “ 0s
1  ́ pt
 ́ xxt, β ̊p0qy
 ̇2
`2
ˆ
ytp1q  ̈ 1rZt “ 1s
pt
 ́ xxt, β ̊p1qy
 ̇
 ̈
ˆ
ytp0q  ̈ 1rZt “ 0s
1  ́ pt
 ́ xxt, β ̊p0qy
 ̇ˇ
ˇ
ˇFt ́1
ff
“E
«
E p0q
Ep1q pytp1q  ́ xxt, βtp1qyq2 ` Ep1q
Ep0q pytp0q  ́ xxt, βtp0qyq2 ` 2 pytp1q  ́ xxt, βtp1qyq pytp0q  ́ xxt, βtp0qyq
ˇ
ˇ
ˇFt ́1
ff
70

`E
«
E p0q
Ep1q y2
t p1q
ˆ 1rZt “ 1s
pt
 ́1
 ̇2
` Ep1q
Ep0q y2
t p0q
ˆ 1rZt “ 0s
1  ́ pt
 ́1
 ̇2 ˇ
ˇ
ˇFt ́1
ff
`2E
„ Ep0q
Ep1q ytp1qpytp1q  ́ xxt, βtp1qyq
ˆ 1rZt “ 1s
pt
 ́1
 ̇
` Ep1q
Ep0q ytp0qpytp0q  ́ xxt, βtp0qyq
ˆ 1rZt “ 0s
1  ́ pt
 ́1
 ̇ˇ
ˇ
ˇFt ́1
ȷ
 ́E
«
E p0q
E p1q
`ytp1q  ́ xxt, β ̊p1qy ̆2 ` Ep1q
E p0q
`ytp0q  ́ xxt, β ̊p0qy ̆2 ` 2 `ytp1q  ́ xxt, β ̊p1qy ̆ `ytp0q  ́ xxt, β ̊p0qy ̆
ˇ
ˇ
ˇFt ́1
ff
 ́E
«
E p0q
Ep1q y2
t p1q
ˆ 1rZt “ 1s
pt
 ́1
 ̇2
` Ep1q
Ep0q y2
t p0q
ˆ 1rZt “ 0s
1  ́ pt
 ́1
 ̇2 ˇ
ˇ
ˇFt ́1
ff
 ́2E
„ Ep0q
Ep1q ytp1qpytp1q  ́ xxt, β ̊p1qyq
ˆ 1rZt “ 1s
pt
 ́1
 ̇
` Ep1q
Ep0q ytp0qpytp0q  ́ xxt, β ̊p0qyq
ˆ 1rZt “ 0s
1  ́ pt
 ́1
 ̇ˇ
ˇ
ˇFt ́1
ȷ
“ Ep0q
Ep1q pytp1q  ́ xxt, βtp1qyq2 ` Ep1q
Ep0q pytp0q  ́ xxt, βtp0qyq2 ` 2 pytp1q  ́ xxt, βtp1qyq  ̈ pytp0q  ́ xxt, βtp0qyq
 ́ Ep0q
E p1q
`ytp1q  ́ xxt, β ̊p1qy ̆2 ` Ep1q
E p0q
`ytp0q  ́ xxt, β ̊p0qy ̆2 ` 2 `ytp1q  ́ xxt, β ̊p1qy ̆  ̈ `ytp0q  ́ xxt, β ̊p0qy ̆
“ltpβtp1q, βtp0qq  ́ ltpβ ̊p1q, β ̊p0qq .
Under Lemma 4.8, the following lemma establishes that the regret can be bounded by a regularization term and the expectation of the sum of a sequence of successive differences. The derivation follows the standard FTRL analysis, but is adapted to our setting where the step size varies over time.
Lemma 4.9. The expected prediction regret is bounded as
ErRpred
T s ď m`β ̊p1q, β ̊p0q ̆
ηT `1
`E
«T ÿ
t“1
L ̃ t`1
`βtp1q, βtp0q ̆  ́ L ̃t`1
`
βrt`1p1q, βrt`1p0q ̆
ff
.
Proof. We first prove that pβtp1q, βtp0qq is the minimizer of Lptpβp1q, βp0qq. For simplicity, for any t P rT s, we denote Y tp1q “
 ́
y1p1q  ̈ 1rZ1“1s
p1 , . . . , ytp1q  ̈ 1rZt“1s
pt
 ̄
and Y tp0q “
 ́
y1p0q  ̈ 1rZ1“0s
1 ́p1 , . . . , ytp0q  ̈ 1rZt“0s
1 ́pt
 ̄
. Let β1 “ βtp1q ` δ1 and β0 “ βtp0q ` δ0. We further de
note α1 “ Y t ́1p1q  ́ Xt ́1βtp1q, α0 “ Y t ́1p0q  ́ Xt ́1βtp0q, z1 “ Xt ́1δ1 and z0 “ Xt ́1δ0. Hence we have
Lptpβ1, β0q “ Ep0q
E p1q
`}α1  ́ z1}2 ` η ́1
t }βtp1q ` δ1}2 ̆ ` Ep1q
E p0q
`}α0  ́ z0}2 ` η ́1
t }βtp0q ` δ0}2 ̆
` 2 `xα1  ́ z1, α0  ́ z0y ` η ́1
t xβtp1q ` δ1, βtp0q ` δ0y ̆ ,
Lptpβtp1q, βtp0qq “ Ep0q
E p1q
`}α1}2 ` η ́1
t }βtp1q}2 ̆ ` Ep1q
E p0q
`}α0}2 ` η ́1
t }βtp0q}2 ̆
` 2 `xα1, α0y ` η ́1
t xβtp1q, βtp0qy ̆ .
This implies that
Lptpβ1, β0q  ́ Lptpβtp1q, βtp0qq
“ Ep0q
E p1q
`}z1}2  ́ 2xα1, z1y ` η ́1
t }δ1}2 ` 2η ́1
t xβtp1q, δ1y ̆
` Ep1q
E p0q
`}z0}2  ́ 2xα0, z0y ` η ́1
t }δ0}2 ` 2η ́1
t xβtp0q, δ0y ̆
71

` 2 ` ́xz1, α0y  ́ xα1, z0y ` xz1, z0y ` η ́1
t xδ1, βtp0qy ` η ́1
t xδ0, βtp1qy ` η ́1
t xδ1, δ0y ̆
“ Ep0q
E p1q
 ́
 ́ 2 `Y t ́1p1q  ́ Xt ́1pX⊺
t ́1Xt ́1 ` η ́1
t Idq ́1X⊺
t ́1Y t ́1p1q ̆⊺ Xt ́1δ1
` 2η ́1
t Y⊺
t ́1 p1qX t ́1 pX ⊺
t ́1Xt ́1 ` η ́1
t Idq ́1δ1 ` }z1}2 ` η ́1
t }δ1}2 ̄
` Ep1q
E p0q
 ́
 ́ 2 `Y t ́1p0q  ́ Xt ́1pX⊺
t ́1Xt ́1 ` η ́1
t Idq ́1X⊺
t ́1Y t ́1p0q ̆⊺ Xt ́1δ0
` 2η ́1
t Y⊺
t ́1 p0qX t ́1 pX ⊺
t ́1Xt ́1 ` η ́1
t Idq ́1δ0 ` }z0}2 ` η ́1
t }δ0}2 ̄
`2
 ́
 ́
`Y t ́1p1q  ́ Xt ́1pX⊺
t ́1Xt ́1 ` η ́1
t Idq ́1X⊺
t ́1Y t ́1p1q ̆⊺ Xt ́1δ0
 ̄
`2
 ́
η ́1
t Y⊺
t ́1 p1qX t ́1 pX ⊺
t ́1Xt ́1 ` η ́1
t Idq ́1δ0
 ̄
`2
 ́
 ́
`Y t ́1p0q  ́ Xt ́1pX⊺
t ́1Xt ́1 ` η ́1
t Idq ́1X⊺
t ́1Y t ́1p0q ̆⊺ Xt ́1δ1
 ̄
`2
 ́
η ́1
t Y⊺
t ́1 p0qX t ́1 pX ⊺
t ́1Xt ́1 ` η ́1
t Idq ́1δ1
 ̄
` 2 `xz1, z0y ` η ́1
t xδ1, δ0y ̆ . (19)
Note that
 ́
`I  ́ Xt ́1pX⊺
t ́1Xt ́1 ` η ́1
t Idq ́1X⊺
t ́1
 ̆⊺ Xt ́1 ` η ́1
t Xt ́1pX⊺
t ́1Xt ́1 ` η ́1
t Idq ́1
“  ́ Xt ́1 ` Xt ́1pX⊺
t ́1Xt ́1 ` η ́1
t Idq ́1X⊺
t ́1Xt ́1 ` η ́1
t Xt ́1pX⊺
t ́1Xt ́1 ` η ́1
t Idq ́1
“  ́ Xt ́1 ` Xt ́1pX⊺
t ́1Xt ́1 ` η ́1
t Idq ́1pX⊺
t ́1Xt ́1 ` η ́1
t Idq  ́ η ́1
t Xt ́1pX⊺
t ́1Xt ́1 ` η ́1
t Idq ́1
` η ́1
t Xt ́1pX⊺
t ́1Xt ́1 ` η ́1
t Idq ́1
“0.
Hence (19) can be further simplifies and lower bounded by:
Lptpβ1, β0q  ́ Lptpβtp1q, βtp0qq
“ Ep0q
E p1q
 ́
}z1}2 ` η ́1
t }δ1}2 ̄
` Ep1q
E p0q
 ́
}z0}2 ` η ́1
t }δ0}2 ̄
` 2 `xz1, z0y ` η ́1
t xδ1, δ0y ̆
“
› › › › ›
ˆ Ep0q
E p1q
 ̇1{2
z1 `
ˆ Ep1q
E p0q
 ̇1{2
z0
› › › › ›
2
2
` η ́1
t
› › › › ›
ˆ Ep0q
E p1q
 ̇1{2
δ1 `
ˆ Ep1q
E p0q
 ̇1{2
δ0
› › › › ›
2
2
ě0.
Hence we proved that pβtp1q, βtp0qq is the minimizer of Lptpβp1q, βp0qq. Similarly we can prove that pβrtp1q, βrtp0qq is the minimizer of L ̃tpβp1q, βp0qq. Furthermore, we can see that the penalty term is nonnegative:
mpβp1q, βp0qq “ Ep0q
Ep1q }βp1q}2 ` Ep1q
Ep0q }βp0q}2 ` 2xβp1q, βp0qy “
› › › › ›
ˆ Ep0q
E p1q
 ̇1{2
βp1q `
ˆ Ep1q
E p0q
 ̇1{2
βp0q
› › › › ›
2
2
ě 0.
By the construction method, we can easily see that the step size ηt is decreasing with respect to t. By Lemma 4.8, we have
ErRpred
Ts
“E
«T ÿ
t“1
ltpβtp1q, βtp0qq  ́
T
ÿ
t“1
ltpβ ̊p1q, β ̊p0qq
ff
“
T
ÿ
t“1
E
”
E
”
lptpβtp1q, βtp0qq  ́ lptpβ ̊p1q, β ̊p0qq|Ft ́1
ıı
pLemma 4.8q
72

“E
«T ÿ
t“1
lptpβtp1q, βtp0qq  ́
T
ÿ
t“1
lptpβ ̊p1q, β ̊p0qq
ff
“η ́1
T `1mpβ ̊p1q, β ̊p0qq ` E
«T ÿ
t“1
lptpβtp1q, βtp0qq  ́ LpT `1pβ ̊p1q, β ̊p0qq
ff
“η ́1
T `1mpβ ̊p1q, β ̊p0qq ` E
«T ÿ
t“1
lptpβtp1q, βtp0qq ` Lp1pβ1p1q, β1p0qq  ́ LpT `1pβT `1p1q, βT `1p0qq
ff
`E
”
LpT `1pβT `1p1q, βT `1p0qq  ́ LpT `1pβ ̊p1q, β ̊p0qq
ı
ďη ́1
T `1mpβ ̊p1q, β ̊p0qq ` E
«T ÿ
t“1
lptpβtp1q, βtp0qq `
T
ÿ
t“1
 ́
Lptpβtp1q, βtp0qq  ́ Lpt`1pβt`1p1q, βt`1p0qq
 ̄
ff
(The last inequality is due to the optimality of pβT `1p1q, βT `1p0qq.)
“η ́1
T `1mpβ ̊p1q, β ̊p0qq ` E
«T ÿ
t“1
pL ̃t`1pβtp1q, βtp0qq  ́ L ̃t`1pβt`1p1q, βt`1p0qqq
ff
`E
«T ÿ
t“1
 ́L ̃t`1pβt`1p1q, βt`1p0qq  ́ Lpt`1pβt`1p1q, βt`1p0qq
 ̄
ff
ďη ́1
T `1mpβ ̊p1q, β ̊p0qq ` E
«T ÿ
t“1
pL ̃t`1pβtp1q, βtp0qq  ́ L ̃t`1pβrt`1p1q, βrt`1p0qqq
ff
`
T
ÿ
t“1
`η ́1
t  ́ η ́1
t`1
 ̆ E “mpβt`1p1q, βt`1p0qq‰ (optimality of pβrt`1p1q, βrt`1p0qq)
ďη ́1
T `1mpβ ̊p1q, β ̊p0qq ` E
«T ÿ
t“1
pL ̃t`1pβtp1q, βtp0qq  ́ L ̃t`1pβrt`1p1q, βrt`1p0qqq
ff
,
where the last inequality is due to the monotonicity of ηt and the nonnegativity of mpβp1q, βp0qq.
Lemma 4.10. The successive difference can be written as:
L ̃ t`1
`βtp1q, βtp0q ̆  ́ L ̃t`1
`
βrt`1p1q, βrt`1p0q ̆ “ Πt,t
1 ` Πt,t
 ̈
lpt
`βtp1q, βtp0q ̆ .
Proof. We first derive the explicit form of:
«t ÿ
s“1
lpspβtp1qq ` η ́1
t }βtp1q}2
2
ff
 ́
«t ÿ
s“1
lpspβrt`1p1qq ` η ́1
t }βrt`1p1q}2
2
ff
.
For notation simplicity, we slightly abuse the notation and suppress ytp1q  ̈ 1rZt“1s
pt as yt.
Let Y t ́1 “ py1, . . . , yt ́1q⊺ and Y t “ py1, . . . , ytq⊺. Then we have the explicit form for the regression coefficient: βtp1q “ pX⊺
t ́1Xt ́1 ` η ́1
t Idq ́1X⊺
t ́1Y t ́1 and βrt`1p1q “ pX⊺
t Xt ` η ́1
t Idq ́1X⊺
t Y t. Now we calculate the explicit form for L ̃p1q
t`1pβtp1qq  ́ L ̃p1q
t`1 pβr t`1 p1qq.
W “X⊺
t ́1Xt ́1 ` η ́1
t Id ,
h “x⊺
t W  ́1xt ,
α “Xt ́1W  ́1xt ,
H “Xt ́1W  ́1X⊺
t ́1 .
73

Step 1: Calculate řt
s“1 lpspβrt`1p1qq ` η ́1
t }βrt`1p1q}22.
By the explicit form of βrt`1p1q, we have
t
ÿ
s“1
lpspβrt`1p1qq ` η ́1
t }βrt`1p1q}2
2
“
t
ÿ
s“1
ˆ
ysp1q  ̈ 1rZs “ 1s
ps
 ́ xxs, βrt`1p1qy
 ̇2
` η ́1
t }βrt`1p1q}2
2
“}Y t  ́ XtpX⊺
t Xt ` η ́1
t Idq ́1X⊺
t Y t}2 ` η ́1
t }pX⊺
t Xt ` η ́1
t Idq ́1X⊺
t Y t}2
“Y ⊺
t pIt  ́ XtpX⊺
t Xt ` η ́1
t Idq ́1X⊺
t q2Y t ` η ́1
t Y⊺
t XtpX⊺
t Xt ` η ́1
t Idq ́2X⊺
tYt
“Y ⊺
t Y t  ́ 2Y ⊺
t XtpX⊺
t Xt ` η ́1
t Idq ́1X⊺
tYt
`Y⊺
t XtpX⊺
t Xt ` η ́1
t Idq ́1X⊺
t XtpX⊺
t Xt ` η ́1
t Idq ́1X⊺
t Y t ` η ́1
t Y⊺
t XtpX⊺
t Xt ` η ́1
t Idq ́2X⊺
tYt
“Y ⊺
t Y t  ́ 2Y ⊺
t XtpX⊺
t Xt ` η ́1
t Idq ́1X⊺
tYt
`Y⊺
t XtpX⊺
t Xt ` η ́1
t Idq ́1pX⊺
t Xt ` η ́1
t IdqpX⊺
t Xt ` η ́1
t Idq ́1X⊺
tYt
“Y ⊺
t pIt  ́ XtpX⊺
t Xt ` η ́1
t Idq ́1X⊺
t qY t
“
“Y ⊺
t ́1 yt
‰
ˆ
It  ́
„X t ́1
x⊺
t
ȷ
pW ` xtx⊺
t q ́1 “X⊺
t ́1 xt
‰
 ̇ „Y t ́1 yt
ȷ
. (20)
By Sherman-Morrison formula, we have
pW ` xtx⊺
t q ́1 “ W  ́1  ́ W  ́1xtx⊺
t W  ́1
1 ` x⊺
t W  ́1xt
“ W  ́1  ́ W  ́1xtx⊺
t W  ́1
1 ` h . (21)
For simplicity, suppose we have the following block form for the matrix:
„X t ́1
x⊺
t
ȷ
pW ` xtx⊺
t q ́1 “X⊺
t ́1 xt
‰“
„R1,1 R1,2
R⊺
1,2 R2,2
ȷ
.
Now we calculate the explicit form for each block:
(1) By (21), R1,1 can calculated as:
R1,1 “Xt ́1W  ́1X⊺
t ́1  ́ Xt ́1W  ́1xtx⊺
t W  ́1X⊺
t ́1
1 ` h “ H  ́ αα⊺
1`h .
(2) By (21), R1,2 can be calculated as:
R1,2 “ Xt ́1W  ́1xt  ́ Xt ́1W  ́1xtx⊺
t W  ́1xt
1`h “α ́ h
1 ` hα “ 1
1 ` hα .
(3) By (21), R2,2 can be calculated as:
R2,2 “ x⊺
t W  ́1xt  ́ x⊺
t W  ́1xtx⊺
t W  ́1xt
1 ` h “ h  ́ h2
1`h “ h
1`h .
Hence by (20), we have
t
ÿ
s“1
lpspβrt`1p1qq ` η ́1
t }βrt`1p1q}2
2
“
“Y ⊺
t ́1 yt
‰
ˆ
It  ́
„X t ́1
x⊺
t
ȷ
pW ` xtx⊺
t q ́1 “X⊺
t ́1 xt
‰
 ̇ „Y t ́1 yt
ȷ
“
“Y ⊺
t ́1 yt
‰
ˆ
It  ́
„R1,1 R1,2
R⊺
1,2 R2,2
ȷ ̇ „Y t ́1 yt
ȷ
74

“ “Y ⊺
t ́1 yt
‰
„It ́1  ́ R1,1  ́R1,2
 ́R⊺
1,2 1  ́ R2,2
ȷ „Y t ́1 yt
ȷ
“
“Y ⊺
t ́1 yt
‰
«
pIt ́1  ́ Hq ` αα⊺
1`h  ́ 1
1`h α
 ́1
1`h α⊺ 1
1`h
ff
„Y t ́1 yt
ȷ
“Y ⊺
t ́1pIt ́1  ́ HqY t ́1 ` 1
1 ` h pα⊺Y t ́1q2  ́ 2yt
1 ` h α⊺Y t ́1 ` 1
1 ` hy2
t
“Y ⊺
t ́1pIt ́1  ́ HqY t ́1 ` 1
1 ` h pyt  ́ α⊺Y t ́1q2 . (22)
Step 2: Calculate řt
s“1 lpspβtp1qq ` η ́1
t }βtp1q}22.
Since βtp1q “ pX⊺
t ́1Xt ́1 ` η ́1
t Idq ́1X⊺
t ́1Y t ́1 “ W  ́1X⊺
t ́1Y t ́1, we have
t
ÿ
s“1
lpspβtp1qq ` η ́1
t }βtp1q}2
2
“
›
›Y t ́1  ́ Xt ́1W  ́1X⊺
t ́1Y t ́1
› ›
2
2 ` pyt  ́ x⊺
t W  ́1X⊺
t ́1Y t ́1q2 ` η ́1
t Y⊺
t ́1X t ́1W  ́2X ⊺
t ́1Y t ́1
“Y ⊺
t ́1pIt ́1  ́ Hq2Y t ́1 ` pyt  ́ α⊺Y t ́1q2 ` η ́1
t Y⊺
t ́1X t ́1W  ́2X ⊺
t ́1Y t ́1
“Y ⊺
t ́1
“pIt ́1  ́ Hq2 ` η ́1
t Xt ́1W  ́2X⊺
t ́1
‰ Y t ́1 ` pyt  ́ α⊺Y t ́1q2
“Y ⊺
t ́1
“pIt ́1  ́ Xt ́1pX⊺
t ́1Xt ́1 ` η ́1
t Idq ́1X⊺
t ́1q2 ` η ́1
t Xt ́1pX⊺
t ́1Xt ́1 ` η ́1
t Idq ́2X⊺
t ́1
‰ Y t ́1
` pyt  ́ α⊺Y t ́1q2
“Y ⊺
t ́1rIt ́1  ́ 2Xt ́1pX⊺
t ́1Xt ́1 ` η ́1
t Idq ́1X⊺
t ́1 ` η ́1
t Xt ́1pX⊺
t ́1Xt ́1 ` η ́1
t Idq ́2X⊺
t ́1
` Xt ́1pX⊺
t ́1Xt ́1 ` η ́1
t Idq ́1X⊺
t ́1 X t ́1 pX ⊺
t ́1Xt ́1 ` η ́1
t Idq ́1X⊺
t ́1sY t ́1 ` pyt  ́ α⊺Y t ́1q2
“Y ⊺
t ́1rIt ́1  ́ 2Xt ́1pX⊺
t ́1Xt ́1 ` η ́1
t Idq ́1X⊺
t ́1
` Xt ́1pX⊺
t ́1Xt ́1 ` η ́1
t Idq ́1pX⊺
t ́1Xt ́1 ` η ́1
t IdqpX⊺
t ́1Xt ́1 ` η ́1
t Idq ́1X⊺
t ́1sYt ́1 ` pyt  ́ α⊺Y t ́1q2
“Y ⊺
t ́1rIt ́1  ́ Xt ́1pX⊺
t ́1Xt ́1 ` η ́1
t Idq ́1X⊺
t ́1sY t ́1 ` pyt  ́ α⊺Y t ́1q2
“Y ⊺
t ́1pIt ́1  ́ HqY t ́1 ` pyt  ́ α⊺Y t ́1q2 . (23)
Step 3: Combine the results in the previous steps.
By (22) and (23), we have
«t ÿ
s“1
ˆ
ysp1q  ̈ 1rZs “ 1s
ps
 ́ xxs, βtp1qy
 ̇2
` η ́1
t }βtp1q}2
2
ff
 ́
«t ÿ
s“1
ˆ
ysp1q  ̈ 1rZs “ 1s
ps
 ́ xxs, βrt`1p1qy
 ̇
` η ́1
t }βrt`1p1q}2
2
ff
“Y ⊺
t ́1pIt ́1  ́ HqY t ́1 ` pyt  ́ α⊺Y t ́1q2  ́ Y ⊺
t ́1pIt ́1  ́ HqY t ́1  ́ 1
1 ` h pyt  ́ α⊺Y t ́1q2
“h
1 ` h pyt  ́ α⊺Y t ́1q2
“ x⊺
t pX⊺
t ́1Xt ́1 ` η ́1
t Idq ́1xt
1 ` x⊺
t pX⊺
t ́1Xt ́1 ` η ́1
t Idq ́1xt
ˆ
ytp1q  ̈ 1rZt “ 1s
pt
 ́ xxt, βtp1qy
 ̇2
“ Πt,t
1 ` Πt,t
ˆ
ytp1q  ̈ 1rZt “ 1s
pt
 ́ xxt, βtp1qy
 ̇2
. (24)
By the same method, we can also prove that
«t ÿ
s“1
ˆ
ysp0q  ̈ 1rZs “ 0s
1  ́ ps
 ́ xxs, βtp0qy
 ̇2
` η ́1
t }βtp0q}2
2
ff
75

 ́
«t ÿ
s“1
ˆ
ysp0q  ̈ 1rZs “ 0s
1  ́ ps
 ́ xxs, βrt`1p0qy
 ̇
` η ́1
t }βrt`1p0q}2
2
ff
“ Πt,t
1 ` Πt,t
ˆ
ytp0q  ̈ 1rZt “ 0s
1  ́ pt
 ́ xxt, βtp0qy
 ̇2
. (25)
and
«t ÿ
s“1
ˆ
ysp1q  ̈ 1rZs “ 1s
ps
 ́ xxs, βtp1qy
 ̇
 ̈
ˆ
ysp0q  ̈ 1rZs “ 0s
1  ́ ps
 ́ xxs, βtp0qy
 ̇
` η ́1
t xβtp1q, βtp0qy
ff
 ́
«t ÿ
s“1
ˆ
ysp1q  ̈ 1rZs “ 1s
ps
 ́ xxs, βrt`1p1qy
 ̇
 ̈
ˆ
ysp0q  ̈ 1rZs “ 0s
1  ́ ps
 ́ xxs, βrt`1p1qy
 ̇
` η ́1
t xβrt`1p1q, βrt`1p0qy
ff
“ Πt,t
1 ` Πt,t
ˆ
ytp1q  ̈ 1rZt “ 1s
pt
 ́ xxt, βtp1qy
 ̇ˆ
ytp0q  ̈ 1rZt “ 0s
1  ́ pt
 ́ xxt, βtp0qy
 ̇
. (26)
By (24), (25) and (26), we can finally prove that
L ̃t`1pβtp1q, βtp0qq  ́ L ̃t`1pβrt`1p1q, βrt`1p0qq
“ Ep0q
Ep1q  ̈ Πt,t
1 ` Πt,t
ˆ
ytp1q  ̈ 1rZt “ 1s
pt
 ́ xxt, βtp1qy
 ̇2
` Ep1q
Ep0q  ̈ Πt,t
1 ` Πt,t
ˆ
ytp0q  ̈ 1rZt “ 0s
1  ́ pt
 ́ xxt, βtp0qy
 ̇2
` 2  ̈ Πt,t
1 ` Πt,t
ˆ
ytp1q  ̈ 1rZt “ 1s
pt
 ́ xxt, βtp1qy
 ̇ˆ
ytp0q  ̈ 1rZt “ 0s
1  ́ pt
 ́ xxt, βtp0qy
 ̇
“ Πt,t
1 ` Πt,t
lptpβtp1q, βtp0qq .
Proposition 4.11*. Under Assumptions 1-3 and Condition 1, the expected prediction regret is bounded as
ErRpred
T sď
„
pc2
1c2 maxtc2, 1uq
ˆ c1
c0
` c0
c1
`2
 ̇
` op1q
ȷ
T 1{2R2 .
Proof. By the definition of lpt, we have the following decomposition:
lptpβtp1q, βtp0qq
“ Ep0q
E p1q
ˆ
ytp1q  ̈ 1rZt “ 1s
pt
 ́ xxt, βtp1qy
 ̇2
` Ep1q
E p0q
ˆ
ytp0q  ̈ 1rZt “ 0s
1  ́ pt
 ́ xxt, βtp0qy
 ̇2
`2
ˆ
ytp1q  ̈ 1rZt “ 1s
pt
 ́ xxt, βtp1qy
 ̇ˆ
ytp0q  ̈ 1rZt “ 0s
1  ́ pt
 ́ xxt, βtp0qy
 ̇
“ Ep0q
Ep1q pytp1q  ́ xxt, βtp1qyq2 ` Ep1q
Ep0q pytp0q  ́ xxt, βtp0qyq2 ` 2 pytp1q  ́ xxt, βtp1qyq pytp0q  ́ xxt, βtp0qyq
` Ep0q
Ep1q y2
t p1q
ˆ 1rZt “ 1s
pt
 ́1
 ̇2
` 2Ep0q
Ep1q ytp1qpytp1q  ́ xxt, βtp1qyq
ˆ 1rZt “ 1s
pt
 ́1
 ̇
` Ep0q
Ep1q y2
t p0q
ˆ 1rZt “ 0s
1  ́ pt
 ́1
 ̇2
` 2Ep1q
Ep0q ytp0qpytp0q  ́ xxt, βtp0qyq
ˆ 1rZt “ 0s
1  ́ pt
 ́1
 ̇
` 2ytp1qytp0q
ˆ 1rZt “ 1s
pt
 ́1
 ̇ ˆ 1rZt “ 0s
1  ́ pt
 ́1
 ̇
` 2ytp1q
ˆ 1rZt “ 1s
pt
 ́1
 ̇
pytp0q  ́ xxt, βtp0qyq
` 2ytp0q
ˆ 1rZt “ 0s
1  ́ pt
 ́1
 ̇
pytp1q  ́ xxt, βtp1qyq .
76

It is easy to see that among all terms, term 5, 7, 9, 10 have mean zero by law of iterated expectation. Hence by Lemma 4.10, we have
E
«T ÿ
t“1
pL ̃t`1pβtp1q, βtp0qq  ́ L ̃t`1pβrt`1p1q, βrt`1p0qqq
ff
ďE
«T ÿ
t“1
Πt,tlptpβtp1q, βtp0qq
ff
(Lemma 4.10)
“ Ep0q
Ep1q E
«T ÿ
t“1
Πt,t pytp1q  ́ xxt, βtp1qyq2
ff
` Ep1q
Ep0q E
«T ÿ
t“1
Πt,t pytp0q  ́ xxt, βtp0qyq2
ff
` 2E
«T ÿ
t“1
Πt,t pytp1q  ́ xxt, βtp1qyq pytp0q  ́ xxt, βtp0qyq
ff
` Ep0q
Ep1q E
«T ÿ
t“1
Πt,ty2
t p1q
ˆ 1rZt “ 1s
pt
 ́1
 ̇2ff
` Ep1q
Ep0q E
«T ÿ
t“1
Πt,ty2
t p0q
ˆ 1rZt “ 0s
1  ́ pt
 ́1
 ̇2ff
` 2E
«T ÿ
t“1
Πt,tytp1qytp0q
ˆ 1rZt “ 1s
pt
 ́1
 ̇ ˆ 1rZt “ 0s
1  ́ pt
 ́1
 ̇
ff
fi Ep0q
Ep1q S1 ` Ep1q
Ep0q S2 ` 2S3 ` Ep0q
Ep1q S4 ` Ep1q
Ep0q S5 ` 2S6 . (27)
By Cauchy-Schwarz inequality, Corollary B.4, Corollary B.8, Lemma 4.6* and Assumption 3, we have the following upper bound on S1:
S1 ď
 ̃T ÿ
t“1
Π2
t,t
 ̧1{2  ̃
E
«T ÿ
t“1
pytp1q  ́ xxt, βtp1qyq4
ff ̧1{2
(Cauchy-Schwarz inequality)
ď
 ̃T ÿ
t“1
Π2
t,t
 ̧1{2  ̃
E
«
η ́1
T
T
ÿ
t“1
ηt pytp1q  ́ xxt, βtp1qyq4
ff ̧1{2
(ηt is decreasing)
À
 ̃T ÿ
t“1
R4
t ppt  ́ 1q _ η ́1
t q ́2
 ̧1{2
R2
T T 1{2 (Corollary B.4 and Lemma 4.6*)
“η ́1
T
 ̃T ÿ
t“1
ppt  ́ 1qR ́2
t _ T 1{2q ́2
 ̧1{2
ďη ́1
T
 ̃T ÿ
t“1
ppt  ́ 1qR ́2
T _ T 1{2q ́2
 ̧1{2
(Rt is increasing)
“η ́1
T
 ̃T ÿ
t“1
R4
T ppt  ́ 1q _ η ́1
T q ́2
 ̧1{2
Àη ́1
T  ̈ R2
T η1{2
T (Lemma B.9)
“η ́1
T  ̈ pT R ́4
T q ́1{4
“opη ́1
T q (Assumption 3) . (28)
Similar, we can prove that
S2 “ opη ́1
T q, S3 “ opη ́1
T q . (29)
By Lemma B.9, Corollary 4.15, Corollary B.17, Cauchy-Schwarz inequality and Assumption 1, we have
S4 “E
«T ÿ
t“1
Πt,ty2
t p1q
ˆ 1rZt “ 1s
pt
 ́1
 ̇2ff
77

“
T
ÿ
t“1
Πt,ty2
t p1qE
„1
pt
 ́1
ȷ
À
T
ÿ
t“1
R2
t ppt  ́ 1q _ η ́1
t q ́1y2
t p1q  ̈ η1{4
t T 1{4 pCorollary 4.15 and B.17q
ÀT 1{8
T
ÿ
t“1
R2
t ppt  ́ 1q _ η ́1
t q ́1y2
t p1q
ďT 1{8
 ̃T ÿ
t“1
R4
t ppt  ́ 1q _ η ́1
t q ́2
 ̧1{2  ̃ T ÿ
t“1
y4
t p1q
 ̧1{2
(Cauchy-Schwarz inequality)
ÀT 5{8
 ̃T ÿ
t“1
R4
T ppt  ́ 1q _ η ́1
T q ́2
 ̧1{2
(Assumption 1q
ÀT 5{8R2
T η1{2
T (Lemma B.9)
“η ́1
T  ̈ T  ́1{8R ́1
T
“opη ́1
T q . (30)
Similar, we can prove that
S5 “ opη ́1
T q, S6 “ opη ́1
T q . (31)
Hence by Assumption 1, (27), (28), (29), (30) and (31), we have proved that
E
«T ÿ
t“1
pL ̃t`1pβtp1q, βtp0qq  ́ L ̃t`1pβrt`1p1q, βrt`1p0qqq
ff
À S1 ` S2 ` S3 ` S4 ` S5 ` S6 “ opη ́1
T q.
(32)
On the other hand, by Lemma B.5, Cauchy-Schwarz inequality, Assumption 1 and Assumption 2, we have the following upper bound:
η ́1
T `1mpβ ̊p1q, β ̊p0qq
“η ́1
T
„ Ep0q
Ep1q }β ̊p1q}2 ` Ep1q
Ep0q }β ̊p0q}2 ` 2xβ ̊p1q, β ̊p0qy
ȷ
ďη ́1
T
„ˆ Ep0q
Ep1q ` 1
 ̇
}β ̊p1q}2 `
ˆ Ep1q
Ep0q ` 1
 ̇
}β ̊p0q}2
ȷ
(Cauchy-Schwarz inequality)
“η ́1
T
„ˆ Ep0q
Ep1q ` 1
 ̇
Y⊺
T p1qXT
`X ⊺
T XT
 ̆ ́2 X⊺
T Y T p1q `
ˆ Ep1q
Ep0q ` 1
 ̇
Y⊺
T p0qXT
`X ⊺
T XT
 ̆ ́2 X⊺
T Y T p0q
ȷ
ďη ́1
T
„ˆ Ep0q
Ep1q ` 1
 ̇
}Y T p1q}2
2`
ˆ Ep1q
Ep0q ` 1
 ̇
}Y T p0q}2
2
ȷ›
›
›X T
`X ⊺
T XT
 ̆ ́2 X⊺
T
› › ›2
ďη ́1
T T 1{2
»

ˆ Ep0q
Ep1q ` 1
 ̇
 ̃T ÿ
t“1
y4
t p1q
 ̧1{2
`
ˆ Ep1q
Ep0q ` 1
 ̇
 ̃T ÿ
t“1
y4
t p0q
 ̧1{2fi
fl
› ›
›X ⊺
T XT
`X ⊺
T XT
 ̆ ́2›
›
›2 (Cauchy-Schwarz)
ďη ́1
T c2
1T
ˆ Ep0q
Ep1q ` Ep1q
Ep0q ` 2
 ̇› › ›
`X ⊺
T XT
 ̆ ́1›
›
›2 (Assumption 1)
ďη ́1
T c2
1
ˆ Ep0q
Ep1q ` Ep1q
Ep0q ` 2
 ̇
T  ̈ c2
T (Assumption 2)
“c2
1c2
ˆ c1
c0
` c0
c1
`2
 ̇
T 1{2R2
T (Assumption 1)
ďpc2
1c2 maxtc2, 1uq
ˆ c1
c0
` c0
c1
`2
 ̇
T 1{2R2 pLemma B.5q . (33)
78

Hence by Lemma 4.9, (32) and (33), we have
ErRpred
T s ď mpβ ̊p1q, β ̊p0qq
ηT `1
`E
«T ÿ
t“1
L ̃t`1pβtp1q, βtp0qq  ́ L ̃t`1pβrt`1p1q, βrt`1p0qq
ff
ď
„
pc2
1c2 maxtc2, 1uq
ˆ c1
c0
` c0
c1
`2
 ̇
` op1q
ȷ
T 1{2R2 .
B.6 Neyman Regret Analysis (Theorem 4.1)
Based on the results proved in the previous sections, we can finally prove Theorem 4.1.
Theorem 4.1*. Under Assumptions 1-3 and Condition 1, the Neyman Regret is bounded as
RNeyman
T ď maxtc2, 1u
 ̃
8 b33
«
ˆ c1
c0
 ́1
 ̇3
` b3
4
ˆ c1
c0
 ́1
 ̇2ff
` b2
1 maxtb1, 2uc4
1
 ́
1 ` 2 ́1{2pγ0 _ 4c2q1{2 ̄4
` c2
1c2
ˆ c1
c0
` c0
c1
`2
 ̇
` op1q
 ̧
T  ́1{2R2 .
Proof. By Proposition 3.3, Proposition 4.11, Proposition 4.7 and Assumption 3, we have
RNeyman
T
“1
T ErRprob
T s` 1
T ErRpred
Ts
ď maxtc2, 1u
 ̃
8 b33
«
ˆ c1
c0
 ́1
 ̇3
` b3
4
ˆ c1
c0
 ́1
 ̇2ff
` b2
1 maxtb1, 2uc4
1
 ́
1 ` 2 ́1{2pγ0 _ 4c2q1{2 ̄4
` op1q
 ̧
T  ́1{2R2
`
„
pc2
1c2 maxtc2, 1uq
ˆ c1
c0
` c0
c1
`2
 ̇
` op1q
ȷ
T  ́1{2R2
“ maxtc2, 1u
«
8 b33
«
ˆ c1
c0
 ́1
 ̇3
` b3
4
ˆ c1
c0
 ́1
 ̇2ff
` b2
1 maxtb1, 2uc4
1
 ́
1 ` 2 ́1{2pγ0 _ 4c2q1{2 ̄4
` c2
1c2
ˆ c1
c0
` c0
c1
`2
 ̇
ff
T  ́1{2R2 .
C Inference Analysis
In this section, we aim to verify the inference procedure based on the Horvitz–Thompson estimator and the proposed variance estimator. Section C.1 establishes an almost sure upper bound for the inverse probabilities, which play a crucial role in verifying the central limit theorem. Section C.2 provides a detailed proof of the central limit theorem. Section C.3 demonstrates the equivalence between Assumption 4 and the well-known non-superefficiency condition in design-based causal inference. Sectio-
n C.4 verifies the consistency of the proposed variance estimator.
79

C.1 Almost Sure Bounds on Inverse Probabilities
The following proposition derives the almost sure bounds for the inverse probabilties.
Proposition 5.4. Under Assumption 1 and Condition 1, there exists a constant K ą 0 so that
Pr
 ́
max
!1
pt
,1
1  ́ pt
)
ď K  ̈ T 7{26R ́4{11
t for all t P rT s
 ̄
“1 .
Proof. The proof contains three parts. First, we obtain an initial uniform bound for 1{pt and 1{p1  ́ ptq. Then we refine the uniform bound in a sequential manner. Finally, we derive an almost sure upper bound for each t P rT s based on the obtained uniform bound. Let μ1 ą 2 denote the largest solution to equation: 2 ` b1b1{4
2 c1{2
1 μ3{4
1 T 1{8 “ μ1. We then use induction
method to prove that maxtPrT s
 ́1
pt _ 1
1 ́pt
 ̄
ď μ1, which serves as the initial coarse uniform bound. When t “ 1, we have pt “ 1{2. Hence the result is proved. If the result is proved for 1, . . . , t, now we derive the result for t ` 1. Without loss of generality, we only derive the upper bound for Aptp0q. By induction assumption and AM-GM inequality, we have
Aptp0q “
t
ÿ
s“1
1rZs “ 0s 1  ́ ps
 ̈ pysp0q  ́ xxs, βsp0qyq2
ďμ1
t
ÿ
s“1
pysp0q  ́ xxs, βsp0qyq2 pinduction assumptionq
“μ1
t
ÿ
s“1
„ˆ
ysp0q  ̈ 1rZs “ 0s
1  ́ ps
 ́ xxs, βsp0qy
 ̇
 ́ ysp0q
ˆ 1rZs “ 0s
1  ́ ps
 ́1
 ̇ȷ2
ď2μ1
t
ÿ
s“1
ˆ
ysp0q  ̈ 1rZs “ 0s
1  ́ ps
 ́ xxs, βsp0qy
 ̇2
` 2μ1
t
ÿ
s“1
y2
s p0q
ˆ 1rZs “ 0s
1  ́ ps
 ́1
 ̇2
pAM-GM inequalityq .
We introduce the following notations:
lpp0q
t pβq “
ˆ
ytp0q  ̈ 1rZt “ 0s
1  ́ pt
 ́ xxs, βy
 ̇2
,
Gppkq
t pβq “
t ́1
ÿ
s“1
lppkq
s pβq ` η ́1
t }β}2
2.
G ̄ pkq
t pβq “
t ́1
ÿ
s“1
lppkq
s pβq ` η ́1
t ́1}β}2
2.
Denote β ̄ tp0q be the minimizer of G ̄p0q
t pβq. By similar methods as in the proofs of Lemma 4.9 and Lemma 4.10, we have
t
ÿ
s“1
ˆ
ysp0q  ̈ 1rZs “ 0s
1  ́ ps
 ́ xxs, βsp0qy
 ̇2
 ́
t
ÿ
s“1
ˆ
ysp0q  ̈ 1rZs “ 0s
1  ́ ps
 ́ xxs, βt`1p0qy
 ̇2
“
t
ÿ
s“1
lpp0q
s pβsp0qq  ́
t
ÿ
s“1
lpp0q
s pβt`1p0qq
ďη ́1
t`1}βt`1p0q}2
2`
t
ÿ
s“1
pG ̄ p0q
s`1pβsp0qq  ́ G ̄p0q
s`1pβ ̄ s`1p0qqq pby similar method as in Lemma 4.9q
“η ́1
t`1}βt`1p0q}2
2`
t
ÿ
s“1
Πs,s
1 ` Πs,s
ˆ
ysp0q  ̈ 1rZs “ 0s
1  ́ ps
 ́ xxs, βsp0qy
 ̇2
pby similar proof as in Lemma 4.10q
80

ďη ́1
t`1}βt`1p0q}2
2`
t
ÿ
s“1
x⊺
s
`X ⊺
s ́1Xs ́1 ` η ́1
s Id
 ̆ ́1 xs
ˆ
ysp0q  ̈ 1rZs “ 0s
1  ́ ps
 ́ xxs, βsp0qy
 ̇2
ďη ́1
t`1}βt`1p0q}2
2`
t
ÿ
s“1
R2
s ηs
ˆ
ysp0q  ̈ 1rZs “ 0s
1  ́ ps
 ́ xxs, βsp0qy
 ̇2
“η ́1
t`1}βt`1p0q}2
2 ` T  ́1{2
t
ÿ
s“1
ˆ
ysp0q  ̈ 1rZs “ 0s
1  ́ ps
 ́ xxs, βsp0qy
 ̇2
. (34)
By induction assumption, the definition of βt`1p0q and Assumption 1, we have
t
ÿ
s“1
ˆ
ysp0q  ̈ 1rZs “ 0s
1  ́ ps
 ́ xxs, βt`1p0qy
 ̇2
` η ́1
t`1
›
›βt`1p0q
› ›
2 2
“ min
βPRd
t
ÿ
s“1
ˆ
ysp0q  ̈ 1rZs “ 0s
1  ́ ps
 ́ xxs, βy
 ̇2
` η ́1
t`1 }β}2
2
ď
t
ÿ
s“1
ˆ
ysp0q  ̈ 1rZs “ 0s
1  ́ ps
 ̇2
poptimality of βt`1p0qq
ď
 ̃t ÿ
s“1
y2
s p0q
 ̧ ˆ
max
s“1,...,t
1
1  ́ ps
 ̇2
ďc2
1μ2
1T pinduction assumption, Cauchy-Schwarz inequality and Assumption 1q . (35)
Note that T  ́1{2 should be smaller than 1{2 for T large enough. Hence by (34) and (35), we have
t
ÿ
s“1
ˆ
ysp0q  ̈ 1rZs “ 0s
1  ́ ps
 ́ xxs, βsp0qy
 ̇2
ď1
1  ́ T  ́1{2
 ̃t ÿ
s“1
ˆ
ysp0q  ̈ 1rZs “ 0s
1  ́ ps
 ́ xxs, βt`1p0qy
 ̇2
` η ́1
t`1
›
›βt`1p0q
› ›
2 2
 ̧
ď2
 ̃t ÿ
s“1
ˆ
ysp0q  ̈ 1rZs “ 0s
1  ́ ps
 ́ xxs, βt`1p0qy
 ̇2
` η ́1
t`1
›
›βt`1p0q
› ›
2 2
 ̧
ď2c2
1μ2
1T . (36)
By induction assumption and Assumption 1, we also have
t
ÿ
s“1
y2
s p0q
ˆ 1rZs “ 0s
1  ́ ps
 ́1
 ̇2
ď μ2
1
t
ÿ
s“1
y2
s p0q ď c2
1μ2
1T . (37)
Hence by (36), (37), we have
Aptp0q ď2μ1
t
ÿ
s“1
ˆ
ysp0q  ̈ 1rZs “ 0s
1  ́ ps
 ́ xxs, βsp0qy
 ̇2
` 2μ1
t
ÿ
s“1
y2
s p0q
„ 1rZs “ 0s
1  ́ ps
 ́1
ȷ2
ď 6c2
1μ3
1T .
Then by Lemma 4.14, we have
1
pt`1
ď2 ` b1pb2{6q1{4η1{4
t`1Ap1{4
t p0q ď 2 ` b1b1{4
2 η1{4
1 c1{2
1 μ3{4
1 T 1{4 “ 2 ` b1b1{4
2 c1{2
1 μ3{4
1 T 1{8 “ μ1 .
Similarly we can prove that 1
1 ́pt`1 is bounded by μ1. Then by induction method, we have
max
tPrT s
ˆ1
pt
_1
1  ́ pt
 ̇
ď μ1 .
81

Now we refine the initial uniform bound μ1 in sequential steps. Suppose the upper bound obtained in the r-th step is μr, then we refine this bound to μr`1 in r ` 1-th step through the following procedure. By similar steps, we can prove that ApT p1q ď 6c21μr3T and ApT p0q ď 6c21μr3T . We fix a T -dependent constant δ ą 1 (determined later). For any t P rT s, if Apt ́1p1q ě 6c21μr3T δ ́2, then by Lemma 4.14, we have
1
pt
ď 2 ` b1pb2{b3q1{2
 ̃
Apt ́1p0q
Apt ́1p1q
 ̧1{2
ď 2 ` b1pb2{b3q1{2
ˆ 6c21μr3T 6c21μr3T δ ́2
 ̇1{2
“ 2 ` b1pb2{b3q1{2δ .
If Apt ́1p1q ď 6c21μr3T δ ́2, then by Lemma 4.14, we have
1
pt
ď2 ` b1pb2{6q1{4η1{4
t
Ap1{4
t ́1p0q
ď2 ` b1pb2{6q1{4η1{4
t ̈
 ̃
6c2
1T  ̈
„
max
s“1,...,t ́1
1
1  ́ ps
ȷ3 ̧1{4
ď2 ` b1b1{4
2 c1{2
1 η1{4
1 T 1{4 max
s“1,...,t ́1
 ́
2 ` b1pb2{6q1{4η1{4
s
Ap1{4
s ́1p1q
 ̄3{4
ď2 ` b1b1{4
2 c1{2
1 η1{4
1 T 1{4  ́
2 ` b1pb2{6q1{4η1{4
1
Ap1{4
t ́1p1q
 ̄3{4
ď2 ` b1b1{4
2 c1{2
1 η1{4
1 T 1{4 ”
2 ` b1pb2{6q1{4η1{4
1
`6c2
1μ3
rT δ ́2 ̆1{4ı3{4
ď2 ` b1b1{4
2 c1{2
1 η1{4
1 T 1{4  ́
2 ` b1b1{4
2 η1{4
1 c1{2
1 μ3{4
r T 1{4δ ́1{2 ̄3{4
“2 ` b1b1{4
2 c1{2
1 T 1{8  ́
2 ` b1b1{4
2 c1{2
1 μ3{4
r T 1{8δ ́1{2 ̄3{4
.
Now we choose δ ą 0 to be the largest solution to equation:
2 ` b1pb2{b3q1{2δ “ 2 ` b1b1{4
2 c1{2
1 T 1{8  ́
2 ` b1b1{4
2 c1{2
1 μ3{4
r T 1{8δ ́1{2 ̄3{4
. (38)
We first prove the existence of such δ. The left hand side of equation (38) attains value 2 at δ “ 0 and tends to `8 when δ Ñ 8. The right hand side of equation (38) tends to infinity when δ Ó 0 and tends to 2 when δ Ñ 8. Hence the solution to (38) exists by intermediate value theorem for continuous functions and such δ is well defined due to the continuity on both sides. Then for any t P rT s, we have 1{pt ď 2 ` b1pb2{b3q1{2δ fi μr`1. Similarly, we can prove that for any t P rT s, we have 1{p1  ́-
 ptq ď 2 ` b1pb2{b3q1{2δ “ μr`1. Hence we obtain a new uniform bound μr`1 for 1{pt and 1{p1  ́ ptq. By such sequential steps, we obtain a sequence of upper bounds: tμr : r “ 1, 2, . . .u. Suppose μ ą 2 is the largest solution to the following equation:
μ “ 2 ` b1b1{4
2 c1{2
1 T 1{8  ́
2 ` b1b1{4
2 c1{2
1 μ3{4T 1{8pb ́1
1 pb2{b3q ́1{2pμ  ́ 2qq ́1{2 ̄3{4
. (39)
We first prove that existence of such μ. The left hand side of (39) attains value 2 at μ “ 2, while the right hand side tends to infinity when μ Ó 2. Meanwhile, for any fixed T , the right hand side is of order Opμ3{16q while the left hand side is or order Opμq. Hence by intermediate value theorem for continuous functions, there exists solution to (39) on p2, 8q for any given T . Hence μ is well-defined due to the continuity on both sides. Then we have
μ “2 ` b1b1{4
2 c1{2
1 T 1{8  ́
2 ` b1b1{4
2 c1{2
1 μ3{4T 1{8pb ́1
1 pb2{b3q ́1{2pμ  ́ 2qq ́1{2 ̄3{4
—1 ` T 1{8 ”
1 ` pμ1{4T 1{8q3{4ı
82

—1 ` T 1{8  ́
1 ` T 3{32μ3{16 ̄
—T 7{32μ3{16 .
It is easy to see that μ1 “ ΘpT 1{2q and μ “ OpT 7{26q, which indicates that μ “ opμ1q. Hence for T large enough, we can assume WLOG that μ1 ą μ. Now we prove that the sequence tμr : r “ 1, 2, . . .u is monotone decreasing and μr ą μ for any r by induction method. When r “ 1, the result is proved. Suppose the result is proved for 1, . . . , r, by the definition of μr`1, there holds:
μr`1 “2 ` b1b1{4
2 c1{2
1 T 1{8  ́
2 ` b1b1{4
2 c1{2
1 μ3{4
r T 1{8pb ́1
1 pb2{b3q ́1{2pμr`1  ́ 2qq ́1{2 ̄3{4
. (40)
Since μ ą 2 is the largest solution to equation (39), then either there holds
δ ă 2 ` b1b1{4
2 c1{2
1 T 1{8  ́
2 ` b1b1{4
2 c1{2
1 δ3{4T 1{8pb ́1
1 pb2{b3q ́1{2pδ  ́ 2qq ́1{2 ̄3{4
for any δ ą μ or there holds
δ ą 2 ` b1b1{4
2 c1{2
1 T 1{8  ́
2 ` b1b1{4
2 c1{2
1 δ3{4T 1{8pb ́1
1 pb2{b3q ́1{2pδ  ́ 2qq ́1{2 ̄3{4
for any δ ą μ due to the continuity on both sides. For any fixed T , the left hand side has order Opδq while the right hand side has order Opδ3{16q, which indicates that the only possibility is that the second case holds. Since μr ą μ is proved by induction assumption, we have
μr ą 2 ` b1b1{4
2 c1{2
1 T 1{8  ́
2 ` b1b1{4
2 c1{2
1 μ3{4
r T 1{8pb ́1
1 pb2{b3q ́1{2pμr  ́ 2qq ́1{2 ̄3{4
.
Since the left hand side of (38) is monotone increasing while the right hand side is monotone decreasing, this together with (40) imply that μr`1 ă μr. Then by induction method, we prove that tμru is monotone decreasing and μr ą μ for any r. Hence the limit of the sequence exists, which should also be a solution to (39) by continuity. Since μ ą 2 is the largest solution of equation (39) by definition, it is easy to see that limrÑ8 μr “ μ. Hence we can prove that
max
tPrT s
ˆ1
pt
_1
1  ́ pt
 ̇
ď μ “ OpT 7{26q .
Finally, we obtain the upper bound for each individual t P rT s. If Apt ́1p1q ě 6c21μ3T δ ́2, by Lemma 4.14 we have
1
pt
ď 2 ` b1pb2{b3q1{2
 ̃
Apt ́1p0q
Apt ́1p1q
 ̧1{2
ď 2 ` b1pb2{b3q1{2
ˆ 6c21μ3T 6c21μ3T δ ́2
 ̇1{2
“ 2 ` b1pb2{b3q1{2δ .
If Apt ́1p1q ď 6c21μ3T δ ́2, by Lemma 4.14 we have
1
pt
ď2 ` b1pb2{6q1{4η1{4
t
Ap1{4
t ́1p0q
ď2 ` b1pb2{6q1{4η1{4
t ̈
 ̃
6c2
1T  ̈
„
max
s“1,...,t ́1
1
1  ́ ps
ȷ3 ̧1{4
ď2 ` b1b1{4
2 c1{2
1 η1{4
t T 1{4 max
s“1,...,t ́1
 ́
2 ` b1pb2{6q1{4η1{4
s
Ap1{4
s ́1p1q
 ̄3{4
ď2 ` b1b1{4
2 c1{2
1 η1{4
t T 1{4  ́
2 ` b1pb2{6q1{4η1{4
1
Ap1{4
t ́1p1q
 ̄3{4
83

ď2 ` b1b1{4
2 c1{2
1 η1{4
t T 1{4 ”
2 ` b1pb2{6q1{4η1{4
1
`6c2
1μ3T δ ́2 ̆1{4ı3{4
ď2 ` b1b1{4
2 c1{2
1 η1{4
t T 1{4  ́
2 ` b1b1{4
2 c1{2
1 μ3{4T 1{8δ ́1{2 ̄3{4
.
Let δt ą 0 be the largest solution to equation:
2 ` b1pb2{b3q1{2δ “ 2 ` b1b1{4
2 c1{2
1 η1{4
t T 1{4  ́
2 ` b1b1{4
2 c1{2
1 μ3{4T 1{8δ ́1{2 ̄3{4
. (41)
Choose δ “ p2pb2{b3q ́1{2b3{4
1 b7{16
2 c7{8
1 η1{4
t T 11{32μ9{16q8{11, for T large enough it is easy to see that
b1pb2{b3q1{2δ  ́ b1b1{4
2 c1{2
1 η1{4
t T 1{4  ́
2 ` b1b1{4
2 c1{2
1 μ3{4T 1{8δ ́1{2 ̄3{4
ěb1pb2{b3q1{2δ  ́ 2b1b1{4
2 c1{2
1 η1{4
t T 1{4  ́
b1b1{4
2 c1{2
1 μ3{4T 1{8δ ́1{2 ̄3{4
“b1pb2{b3q1{2δ  ́ 2b7{4
1 b7{16
2 c7{8
1 η1{4
t T 11{32μ9{16δ ́3{8
“0 .
Since the left hand side of (41) is monotone increasing in δ while the right hand side is monotone decreasing in δ, this implies that
max
"1
pt
,1
1  ́ pt
*
ď δt ď δ “p2pb2{b3q ́1{2b7{16
2 c7{8
1 η1{4
t T 11{32μ9{16q8{11
“p2pb2{b3q ́1{2b7{16
2 c7{8
1 T 7{32R ́1{2
t μ9{16q8{11
“p2pb2{b3q ́1{2b7{16
2 c7{8
1 q8{11T 7{44μ9{22R ́4{11
t.
Since μ “ OpT 7{26q, we have shown that there exists a constant K ą 0 (independent of t and T ) such that
Pr
 ́
max
!1
pt
,1
1  ́ pt
)
ď K  ̈ T 7{26R ́4{11
t for all t P rT s
 ̄
“1 .
C.2 Central Limit Theorem
In this section, we prove the central limit theorem for the Horvitz-Thompson estimator. We begin by stating the martingale central limit theorem, which serves as the main tool for our proof.
Lemma 5.3 (Helland, 1982). If Xt,T is a triangular array of martingale difference sequences with respect to filtrations Ft,T , i.e. ErXt,T | Ft ́1,T s “ 0, then if
1. There exists δ ą 0 such that řT
t“1 ErX2`δ
t,T | Ft ́1,T s ÝpÑ 0
2. V 2
T fi řT
t“1 ErX2
t,T | Ft ́1,T s ÝpÑ 1
then the sum ST “ řT
t“1 Xt,T converges to a standard normal in distribution, ST
ÝdÑ N p0, 1q.
In Section 5, we have already defined the martingale difference sequence:
Xt,T “ τˆt  ́ τt
T
aVarpτˆq
84

“1
T
aVarpτˆq
«
`ytp1q  ́ xxt, βtp1qy ̆  ̈
ˆ 1rZt “ 1s
pt
 ́1
 ̇
 ́
`ytp0q  ́ xxt, βtp0qy ̆  ̈
ˆ 1rZt “ 0s
1  ́ pt
 ́1
 ̇
ff
.
In the following two subsections, we separately verify that the martingale difference sequence tXt,T u satisfy the two conditions in Lemma 5.3. We first state, without proof, the nonsuperefficiency condition in the following corollary. Its detailed proof is deferred to Section C.3.
Corollary 5.2 (Non-Superefficiency). Under Assumptions 1-4 and Condition 1, lim infT Ñ8 T  ̈ Varpτˆq ą 0.
C.2.1 Stable Variance Condition
We first derive a simplified form of the stable variance condition. From the expression of Varpτˆq, the term V 2
T can be simplified as:
V2
T “T  ́2 Var ́1pτˆq
«T ÿ
t“1
tytp1q  ́ xxt, βtp1qyu2  ̈
ˆ1
pt
 ́1
 ̇
`
T
ÿ
t“1
tytp0q  ́ xxt, βtp0qyu2  ̈
ˆ1
1  ́ pt
 ́1
 ̇
`2
T
ÿ
t“1
tytp1q  ́ xxt, βtp1qyu  ̈ tytp0q  ́ xxt, βtp0qyu
ff
“1 ` T  ́2 Var ́1pτˆq
«T ÿ
t“1
tytp1q  ́ xxt, βtp1qyu2  ̈
ˆ1
pt
 ́1
 ̇
`
T
ÿ
t“1
tytp0q  ́ xxt, βtp0qyu2  ̈
ˆ1
1  ́ pt
 ́1
 ̇
 ́
T
ÿ
t“1
E
ˆ
tytp1q  ́ xxt, βtp1qyu2  ̈
ˆ1
pt
 ́1
 ̇ ̇
 ́
T
ÿ
t“1
E
ˆ
pytp0q  ́ xxt, βtp0qyq2  ̈
ˆ1
1  ́ pt
 ́1
 ̇ ̇
`2
T
ÿ
t“1
tytp1q  ́ xxt, βtp1qyu tytp0q  ́ xxt, βtp0qyu  ́ 2
T
ÿ
t“1
E ptytp1q  ́ xxt, βtp1qyutytp0q  ́ xxt, βtp0qyuq
ff
.
Under the non-superefficiency condition (Corollary 5.2), to prove that V 2
T
ÝpÑ 1, it suffices to establish the following three convergence results:
1 T
«T ÿ
t“1
tytp1q  ́ xxt, βtp1qyu2  ̈
ˆ1
pt
 ́1
 ̇
 ́E
«T ÿ
t“1
tytp1q  ́ xxt, βtp1qyu2  ̈
ˆ1
pt
 ́1
 ̇
ffff
ÝpÑ 0 ,
1 T
«T ÿ
t“1
tytp0q  ́ xxt, βtp0qyu2  ̈
ˆ1
1  ́ pt
 ́1
 ̇
 ́E
«T ÿ
t“1
tytp0q  ́ xxt, βtp0qyu2  ̈
ˆ1
1  ́ pt
 ́1
 ̇
ffff
ÝpÑ 0 ,
1 T
«T ÿ
t“1
tytp1q  ́ xxt, βtp1qyu tytp0q  ́ xxt, βtp0qyu  ́ E
«T ÿ
t“1
tytp1q  ́ xxt, βtp1qyu tytp0q  ́ xxt, βtp0qyu
ffff
ÝpÑ 0 .
(42)
We begin with the first convergence result in (42). By direct calculation, we obtain the following decomposition:
1 T
T
ÿ
t“1
pytp1q  ́ xxt, βtp1qyq2  ̈
ˆ1
pt
 ́1
 ̇
“1
T
T
ÿ
t“1
`ytp1q  ́ xxt, β ̊
t p1qy ̆2  ̈
ˆ1
pt
 ́1
 ̇
`1
T
T
ÿ
t“1
”
pytp1q  ́ xxt, βtp1qyq2  ́ `ytp1q  ́ xxt, β ̊
t p1qy ̆2ı
ˆ1
pt
 ́1
 ̇
85

“1
T
T
ÿ
t“1
`ytp1q  ́ xxt, β ̊
t p1qy ̆2  ̈
ˆ1
pt
 ́1
p ̄t
 ̇
`1
T
T
ÿ
t“1
`ytp1q  ́ xxt, β ̊
t p1qy ̆2  ̈
ˆ1
p ̄t
 ́1
 ̇
 ́1
T
T
ÿ
t“1
“2pytp1q  ́ xxt, β ̊
t p1qyq  ́ xxt, βtp1q  ́ β ̊
t p1qy‰ xxt, βtp1q  ́ β ̊
t p1qy
ˆ1
pt
 ́1
 ̇
“1
T
T
ÿ
t“1
`ytp1q  ́ xxt, β ̊
t p1qy ̆2  ̈
ˆ1
pt
 ́1
p ̄t
 ̇
`1
T
T
ÿ
t“1
`ytp1q  ́ xxt, β ̊
t p1qy ̆2  ̈
ˆ1
p ̄t
 ́1
 ̇
 ́2
T
T
ÿ
t“1
pytp1q  ́ xxt, β ̊
t p1qyqxxt, βtp1q  ́ β ̊
t p1qy
ˆ1
pt
 ́1
p ̄t
 ̇
 ́2
T
T
ÿ
t“1
pytp1q  ́ xxt, β ̊
t p1qyqxxt, βtp1q  ́ β ̊
t p1qy
ˆ1
p ̄t
 ́1
 ̇
`1
T
T
ÿ
t“1
xxt, βtp1q  ́ β ̊
t p1qy2
ˆ1
pt
 ́1
p ̄t
 ̇
`1
T
T
ÿ
t“1
xxt, βtp1q  ́ β ̊
t p1qy2
ˆ1
p ̄t
 ́1
 ̇
.
Hence, it suffices to show that each term concentrates around its respective expectation, i.e.,
1 T
T
ÿ
t“1
`ytp1q  ́ xxt, β ̊
t p1qy ̆2  ̈
ˆ1
pt
 ́1
p ̄t
 ̇
 ́E
«
1 T
T
ÿ
t“1
`ytp1q  ́ xxt, β ̊
t p1qy ̆2  ̈
ˆ1
pt
 ́1
p ̄t
 ̇
ff
ÝpÑ 0 ,
1 T
T
ÿ
t“1
`ytp1q  ́ xxt, β ̊
t p1qy ̆2  ̈
ˆ1
p ̄t
 ́1
 ̇
 ́E
«
1 T
T
ÿ
t“1
`ytp1q  ́ xxt, β ̊
t p1qy ̆2  ̈
ˆ1
p ̄t
 ́1
 ̇
ff
ÝpÑ 0 ,
1 T
T
ÿ
t“1
pytp1q  ́ xxt, β ̊
t p1qyqxxt, βtp1q  ́ β ̊
t p1qy
ˆ1
pt
 ́1
p ̄t
 ̇
 ́E
«
1 T
T
ÿ
t“1
pytp1q  ́ xxt, β ̊
t p1qyqxxt, βtp1q  ́ β ̊
t p1qy
ˆ1
pt
 ́1
p ̄t
 ̇
ff
ÝpÑ 0 ,
1 T
T
ÿ
t“1
pytp1q  ́ xxt, β ̊
t p1qyqxxt, βtp1q  ́ β ̊
t p1qy
ˆ1
p ̄t
 ́1
 ̇
 ́E
«
1 T
T
ÿ
t“1
pytp1q  ́ xxt, β ̊
t p1qyqxxt, βtp1q  ́ β ̊
t p1qy
ˆ1
p ̄t
 ́1
 ̇
ff
ÝpÑ 0 ,
1 T
T
ÿ
t“1
xxt, βtp1q  ́ β ̊
t p1qy2
ˆ1
pt
 ́1
p ̄t
 ̇
 ́E
«
1 T
T
ÿ
t“1
xxt, βtp1q  ́ β ̊
t p1qy2
ˆ1
pt
 ́1
p ̄t
 ̇
ff
ÝpÑ 0 ,
1 T
T
ÿ
t“1
xxt, βtp1q  ́ β ̊
t p1qy2
ˆ1
p ̄t
 ́1
 ̇
 ́E
«
1 T
T
ÿ
t“1
xxt, βtp1q  ́ β ̊
t p1qy2
ˆ1
p ̄t
 ́1
 ̇
ff
ÝpÑ 0 . (43)
The second convergence result in (43) automatically holds since no randomness is involved. Under Markov’s inequality, we only need to prove the following convergence results:
E
«
1 T
T
ÿ
t“1
`ytp1q  ́ xxt, β ̊
t p1qy ̆2  ̈
ˇ ˇ ˇ ˇ
1
pt
 ́1
p ̄t
ˇ ˇ ˇ ˇ
ff
Ñ0 ,
E
«
1 T
T
ÿ
t“1
pytp1q  ́ xxt, β ̊
t p1qyqxxt, βtp1q  ́ β ̊
t p1qy
ˇ ˇ ˇ ˇ
1
pt
 ́1
p ̄t
ˇ ˇ ˇ ˇ
ff
Ñ0 ,
E
«
1 T
T
ÿ
t“1
pytp1q  ́ xxt, β ̊
t p1qyqxxt, βtp1q  ́ β ̊
t p1qy
ˇ ˇ ˇ ˇ
1 p ̄t
 ́1
ˇ ˇ ˇ ˇ
ff
Ñ0 ,
86

E
«
1 T
T
ÿ
t“1
xxt, βtp1q  ́ β ̊
t p1qy2
ˇ ˇ ˇ ˇ
1
pt
 ́1
p ̄t
ˇ ˇ ˇ ˇ
ff
Ñ0 ,
E
«
1 T
T
ÿ
t“1
xxt, βtp1q  ́ β ̊
t p1qy2
ˇ ˇ ˇ ˇ
1 p ̄t
 ́1
ˇ ˇ ˇ ˇ
ff
Ñ 0 . (44)
Before proving the first convergence result in (44), we establish several supporting lemmas that control the difference between the inverse probabilities associated with pt and p ̄t. The following two lemmas bound the difference between the inverse probabilities in terms of the differences between the corresponding first-order equations. Lemma C.1 discusses the two cases where both probabilities are greater than 1{2 or both are less than 1{2.
Lemma C.1. Let A, A ̃, B, B ̃ be positive constants. Suppose p, p ̃ satisfy
 ́A
p2 ` B
p1  ́ pq2 ` Ψ1ppq “ 0 ,
 ́
A ̃
p ̃2 `
B ̃
p1  ́ p ̃q2 ` Ψ1pp ̃q “ 0 .
(1) If A ě B, A ̃ ě B ̃, under Condition 1 we can attain the following upper bound:
ˇ ˇ ˇ ˇ
1
1 ́p  ́ 1
1  ́ p ̃
ˇ ˇ ˇ ˇ
ď b1b2
b3
ˆ
1` 2
b3
 ̇ |A  ́ A ̃| A
p
1  ́ p ` 2b21b2
b23
ˆ
1` 2
b3
 ̇ |B  ́ B ̃| B
p ̃
1  ́ p ̃ ,
ˇ ˇ ˇ ˇ
1
p ́1
p ̃
ˇ ˇ ˇ ˇ
ď b22
2b3
|A  ́ A ̃|
A ` b1b2
b3
ˆ
1` 2
b3
 ̇ |B  ́ B ̃| A
p
1 ́p .
(2) If A ď B, A ̃ ď B ̃, under Condition 1 we can attain the following upper bound:
ˇ ˇ ˇ ˇ
1
p ́1
p ̃
ˇ ˇ ˇ ˇ
ď b1b2
b3
ˆ
1` 2
b3
 ̇ |B  ́ B ̃| B
1 ́p
p ` 2b21b2
b23
ˆ
1` 2
b3
 ̇ |A  ́ A ̃| A
1  ́ p ̃
p ̃ ,
ˇ ˇ ˇ ˇ
1
1 ́p  ́ 1
1  ́ p ̃
ˇ ˇ ˇ ˇ
ď b22
2b3
|B  ́ B ̃|
B ` b1b2
b3
ˆ
1` 2
b3
 ̇ |A  ́ A ̃| B
1 ́p
p.
Proof. (1) For u “ φ ́1ppq and u ̃ “ φ ́1pp ̃q, it is easy to see that u and u ̃ satisfy
A
ˆ1
φpuq
 ̇1
`B
ˆ1
1  ́ φpuq
 ̇1
` u ` 3u|u| “0 ,
A ̃
ˆ1
φpu ̃q
 ̇1
` B ̃
ˆ1
1  ́ φpu ̃q
 ̇1
` u ̃ ` 3u ̃|u ̃| “0 . (45)
Since A ě B, A ̃ ě B ̃, it is easy to see that u, u ̃ ě 0. By subtracting the second equation in (45) from the first equation, we have
A
«
ˆ1
φpuq
 ̇1
 ́
ˆ1
φpu ̃q
 ̇1ff
` pA  ́ A ̃q
ˆ1
φpu ̃q
 ̇1
`B
«
ˆ1
1  ́ φpuq
 ̇1
 ́
ˆ1
1  ́ φpu ̃q
 ̇1ff
` pB  ́ B ̃q
ˆ1
1  ́ φpu ̃q
 ̇1
` pu  ́ u ̃qp1 ` 3u ` 3u ̃q “ 0 . (46)
By the convexity assumption in Condition 1, A
„
 ́1 φpuq
 ̄1
 ́
 ́1 φpu ̃q
 ̄1ȷ
,B
„
 ́1
1 ́φpuq
 ̄1
 ́
 ́1
1 ́φpu ̃q
 ̄1ȷ
and
pu  ́ u ̃qp1 ` 3u ` 3u ̃q always have the same sign. Hence by Lemma B.16, we have
ˇ ˇ ˇ ˇ ˇ
A
«
ˆ1
φpuq
 ̇1
 ́
ˆ1
φpu ̃q
 ̇1ff
`B
«
ˆ1
1  ́ φpuq
 ̇1
 ́
ˆ1
1  ́ φpu ̃q
 ̇1ff
` η ́1pu  ́ u ̃qp1 ` 3u ` 3u ̃q
ˇ ˇ ˇ ˇ ˇ
87

ěA
ˇ ˇ ˇ ˇ ˇ
ˆ1
φpuq
 ̇1
 ́
ˆ1
φpu ̃q
 ̇1ˇ
ˇ ˇ ˇ ˇ
ě b3
2
A
p1 ` u ̃qp1 ` uqp1 ` u ̃ ^ uq  ̈ |u  ́ u ̃| . (47)
By monotonicty assumption in Condition 1 and (45), we also have
A“
B
 ́1
1 ́φpuq
 ̄1
` u ` 3u2
 ́1 φpuq
 ̄1 ě B
 ́1
1 ́φpuq
 ̄1
 ́1 φpuq
 ̄1 . (48)
Hence by (46), (47), (48), Condition 1 and Lemma B.16, we have
|u  ́ u ̃|
ď
ˆ b3 2
A
p1 ` u ̃qp1 ` uqp1 ` u ̃ ^ uq
 ̇ ́1 ˇ
ˇ ˇ ˇ ˇ
pA  ́ A ̃q
ˆ1
φpu ̃q
 ̇1
` pB  ́ B ̃q
ˆ1
1  ́ φpu ̃q
 ̇1ˇ
ˇ ˇ ˇ ˇ
pby (46) and (47)q
ď2
b3
|A  ́ A ̃|
A p1 ` u ̃q2p1 ` uq
ˇ ˇ ˇ ˇ ˇ
ˆ1
φpu ̃q
 ̇1ˇ
ˇ ˇ ˇ ˇ
`2
b3
|B  ́ B ̃|
A p1 ` u ̃qp1 ` uq2
ˇ ˇ ˇ ˇ ˇ
ˆ1
1  ́ φpu ̃q
 ̇1ˇ
ˇ ˇ ˇ ˇ
ď b2
b3
|A  ́ A ̃|
A p1 ` u ̃q2p1 ` uqp1 ` u ̃q ́2 ` 2b1
b3
|B  ́ B ̃|
B p1 ` u ̃qp1 ` uq2
 ́1 φpuq
 ̄1
 ́1
1 ́φpuq
 ̄1 pby Condition 1 and (48)q
ď b2
b3
|A  ́ A ̃|
A p1 ` uq ` b1b2
b3
|B  ́ B ̃|
B p1 ` u ̃qp1 ` uq2p1 ` uq ́2 1
 ́1
1 ́φp0q
 ̄1 pby Lemma B.16 and Condition 1q
ď b2
b3
|A  ́ A ̃|
A p1 ` uq ` 2b1b2
b23
|B  ́ B ̃|
B p1 ` u ̃q pby Lemma B.16q . (49)
Hence by Lemma B.16, we have
ˇ ˇ ˇ ˇ
1
1 ́p  ́ 1
1  ́ p ̃
ˇ ˇ ˇ ˇ
ď b1|u  ́ u ̃| ď b1b2
b3
|A  ́ A ̃|
A p1 ` uq ` 2b21b2
b23
|B  ́ B ̃|
B p1 ` u ̃q
and
1
1 ́p  ́ 1
1  ́ 1{2 ě b3
2 pu  ́ 0q . (50)
We can finally obtain from (49) that
ˇ ˇ ˇ ˇ
1
1 ́p  ́ 1
1  ́ p ̃
ˇ ˇ ˇ ˇ
ď b1b2
b3
|A  ́ A ̃|
A p1 ` uq ` 2b21b2
b23
|B  ́ B ̃|
B p1 ` u ̃q
ď b1b2
b3
|A  ́ A ̃| A
„
1` 2
b3
ˆ1
1 ́p  ́2
 ̇ȷ
` 2b21b2
b23
|B  ́ B ̃| B
„
1` 2
b3
ˆ1
1  ́ p ̃  ́ 2
 ̇ȷ
pby (50)q
“ b1b2
b3
|A  ́ A ̃| A
„
1` 2
b3
ˆp
1 ́p  ́1
 ̇ȷ
` 2b21b2
b23
|B  ́ B ̃| B
„
1` 2
b3
ˆ p ̃
1  ́ p ̃  ́ 1
 ̇ȷ
ď b1b2
b3
ˆ
1` 2
b3
 ̇ |A  ́ A ̃| A
p
1  ́ p ` 2b21b2
b23
ˆ
1` 2
b3
 ̇ |B  ́ B ̃| B
p ̃
1  ́ p ̃ .
By similar method as in (49) and Lemma B.16, we can also derive
ˇ ˇ ˇ ˇ
1
p ́1
p ̃
ˇ ˇ ˇ ˇ
88

ď b2
2  ̈ |u  ́ u ̃|
p1 ` uqp1 ` u ̃q pLemma B.16q
ď b2
2p1 ` uqp1 ` u ̃q
«
b2
b3
|A  ́ A ̃|
A p1 ` uq ` 2
b3
|B  ́ B ̃|
A p1 ` u ̃qp1 ` uq2
ˇ ˇ ˇ ˇ ˇ
ˆ1
1  ́ φpu ̃q
 ̇1ˇ
ˇ ˇ ˇ ˇ
ff
psimilar proof as in (49)q
ď b22
2b3
|A  ́ A ̃|
A ` b1b2
b3
|B  ́ B ̃|
A p1 ` uq pLemma B.16q
ď b22
2b3
|A  ́ A ̃|
A ` b1b2
b3
ˆ
1` 2
b3
 ̇ |B  ́ B ̃| A
p
1  ́ p pby (50)q .
(2) Let q “ 1  ́ p and q ̃ “ 1  ́ p ̃. Then q and q ̃ satisfy:
 ́A
p1  ́ qq2 ` B
q2 ` Ψ1p1  ́ qq “ 0 ,
 ́
A ̃
p1  ́ q ̃q2 `
B ̃
q ̃2 ` Ψ1p1  ́ q ̃q “ 0 .
Since by Condition 1, φ ́1ppq “  ́φ ́1p1  ́ pq, we have Ψppq “ Ψp1  ́ pq. This implies that Ψ1p1  ́ qq “  ́Ψ1pqq and Ψ1p1  ́ q ̃q “  ́Ψ1pq ̃q. Hence by the proof in (1), the result is verified.
When pt and p ̄t are not both greater than 1{2 or both smaller than 1{2, it is not possible to directly bound the difference between their inverse probabilities. However, when the two first-order equations are close, both probabilities should be close to 1{2. Therefore, we use 1{2 as an intermediate comparator and bound their difference in the following lemma.
Lemma C.2. Let A, B be positive constants. Suppose p satisfy:
 ́A
p2 ` B
p1  ́ pq2 ` Ψ1ppq “ 0 .
(1) If B ď A, then under Condition 1, p satisfies 0 ă 1
1 ́p  ́ 2 ď b1b2
b3  ̈ A ́B
B.
(2) If A ď B, then under Condition 1, p satisfies 0 ă 1
p  ́ 2 ď b1b2
b3  ̈ B ́A
A.
Proof. (1) For u “ φ ́1ppq ě 0 and u ̃ “ φ ́1p1{2q “ 0, by Condition 1 it is easy to see that u and u ̃ satisfy:
A
ˆ1
φpuq
 ̇1
`B
ˆ1
1  ́ φpuq
 ̇1
` u ` 3u2 “0 ,
B
ˆ1
φpu ̃q
 ̇1
`B
ˆ1
1  ́ φpu ̃q
 ̇1
` u ̃ ` 3u ̃2 “0 . (51)
By subtracting the first equation in (51) from the second equation, we have
A
«
ˆ1
φpuq
 ̇1
 ́
ˆ1
φpu ̃q
 ̇1ff
` pA  ́ Bq
ˆ1
φpu ̃q
 ̇1
`B
«
ˆ1
1  ́ φpuq
 ̇1
 ́
ˆ1
1  ́ φpu ̃q
 ̇1ff
` pu  ́ u ̃qp1 ` 3u ` 3u ̃q “ 0 .
Since A
„
 ́1 φpuq
 ̄1
 ́
 ́1 φpu ̃q
 ̄1ȷ
ě 0, B
„
 ́1
1 ́φpuq
 ̄1
 ́
 ́1
1 ́φpu ̃q
 ̄1ȷ
ě 0 and pu  ́ u ̃qp1 ` 3u ` 3u ̃q ě 0, by
Lemma B.16 we have
ˇ ˇ ˇ ˇ ˇ
A
«
ˆ1
φpuq
 ̇1
 ́
ˆ1
φpu ̃q
 ̇1ff
`B
«
ˆ1
1  ́ φpuq
 ̇1
 ́
ˆ1
1  ́ φpu ̃q
 ̇1ff
` η ́1pu  ́ u ̃qp1 ` 3u ` 3u ̃q
ˇ ˇ ˇ ˇ ˇ
89

ěA
ˇ ˇ ˇ ˇ ˇ
ˆ1
φpuq
 ̇1
 ́
ˆ1
φpu ̃q
 ̇1ˇ
ˇ ˇ ˇ ˇ
ě b3
2
A
p1 ` u ̃qp1 ` uqp1 ` u ̃ ^ uq  ̈ |u  ́ u ̃| .
Hence by Lemma B.16, we have
1
1 ́p  ́ 1
1  ́ 1{2 ďb1pu  ́ u ̃q pLemma B.16q
ďb1
ˆ b3 2
B
p1 ` u ̃qp1 ` uqp1 ` u ̃ ^ uq
 ̇ ́1
pA  ́ Bq
ˇ ˇ ˇ ˇ ˇ
ˆ1
φpuq
 ̇1ˇ
ˇ ˇ ˇ ˇ
ď b1b2
b3
A ́B
B p1 ` uq2p1 ` u ̃qp1 ` uq ́2 pLemma B.16q
“ b1b2
b3
 ̈ A ́B
B psince u ̃ “ 0q .
(2) Let q “ 1  ́ p. Then q satisfies
 ́B
q2 ` A
p1  ́ qq2 ` Ψ1pqq “ 0 .
By the same method as in (1) we can prove that
1
p  ́2“ 1
1  ́ q  ́ 2 ď b1b2
b3
 ̈ B ́A
A.
Lemma C.1 and Lemma C.2 together imply that controlling the difference between the inverse probabilities is equivalent to bounding the difference between the corresponding firstorder equations. By the definitions of pt and p ̄t, this reduces to bounding the difference between the estimated squared residuals and their expectations, which can be achieved by controlling the variance of the estimated squared residuals. The following lemma establishes such variance bounds. We denote patpkq “ ηtAptpkq a-
nd atpkq “ ηtEAptpkq for k P t0, 1u and any t P rT s.
Lemma C.3. Suppose T is large enough. Under Assumptions 1-3 and Condition 1, for any t P rT s, the variance of patp1q and patp0q can be bounded by:
Varpaptp1qq ďCpηtT q1{2 log2pηtT qp2 ` b1pb2{6q1{4a1{4
t p0qq25{16 ,
Varppatp0qq ďCpηtT q1{2 log2pηtT qp2 ` b1pb2{6q1{4a1{4
t p1qq25{16 ,
where C fi `64ξ5{4 ` 5248 ̆ c41pγ0 _ c2 _ 1q2 ą 0 is a constant.
Proof. Without loss of generality, we only prove the first inequality. By Cauchy-Schwarz inequality and AM-GM inequality, the variance of Aptp1q can be bounded by:
VarpAptp1qq
“ Var
«t ÿ
s“1
1rZs “ 1s
ps
 ̈ pysp1q  ́ xxs, βsp1qyq2
ff
“ Var
«t ÿ
s“1
ˆ 1rZs “ 1s
ps
 ́1
 ̇
 ̈ pysp1q  ́ xxs, βsp1qyq2 `
t
ÿ
s“1
pysp1q  ́ xxs, βsp1qyq2
ff
90

ď2 Var
«t ÿ
s“1
ˆ 1rZs “ 1s
ps
 ́1
 ̇
 ̈ pysp1q  ́ xxs, βsp1qyq2
ff
` 2 Var
«t ÿ
s“1
pysp1q  ́ xxs, βsp1qyq2
ff
fi2S1 ` 2S2 . (52)
For term S1, using inequality px ` y ` zq4 ď 27x4 ` 27y4 ` 27z4 and the law of total variance, we have
S1 “ Var
«t ÿ
s“1
ˆ 1rZs “ 1s
ps
 ́1
 ̇
 ̈ pysp1q  ́ xxs, βsp1qyq2
ff
“
t
ÿ
s“1
Var
„ˆ 1rZs “ 1s
ps
 ́1
 ̇
 ̈ pysp1q  ́ xxs, βsp1qyq2
ȷ
`2
ÿ
1ďs1 ăs2 ďt
Cov
ˆ„ 1rZs1 “ 1s
ps1
 ́1
ȷ
 ̈
`ys1 p1q  ́ xxs1 , βs1 p1qy ̆2 ,
„ 1rZs2 “ 1s
ps2
 ́1
ȷ
 ̈
`ys2 p1q  ́ xxs2 , βs2 p1qy ̆2
 ̇
“
t
ÿ
s“1
Var
«
E
«
ˆ 1rZs “ 1s
ps
 ́1
 ̇
 ̈ pysp1q  ́ xxs, βsp1qyq2
ˇ ˇ ˇ ˇ ˇ
Fs ́1
ffff
`
t
ÿ
s“1
E
«
Var
«
ˆ 1rZs “ 1s
ps
 ́1
 ̇
 ̈ pysp1q  ́ xxs, βsp1qyq2
ˇ ˇ ˇ ˇ ˇ
Fs ́1
ffff
`2
ÿ
1ďs1 ăs2 ďt
Cov
 ̃
E
«
ˆ 1rZs1 “ 1s
ps1
 ́1
 ̇
 ̈
`ys1 p1q  ́ xxs1 , βs1 p1qy ̆2
ˇ ˇ ˇ ˇ ˇ
Fs2 ́1
ff
,
E
«
ˆ 1rZs2 “ 1s
ps2
 ́1
 ̇
 ̈
`ys2 p1q  ́ xxs2 , βs2 p1qy ̆2
ˇ ˇ ˇ ˇ ˇ
Fs2 ́1
ff ̧
`2
ÿ
1ďs1 ăs2 ďt
E
«
Cov
 ̃
ˆ 1rZs1 “ 1s
ps1
 ́1
 ̇
 ̈
`ys1 p1q  ́ xxs1 , βs1 p1qy ̆2 ,
ˆ 1rZs2 “ 1s
ps2
 ́1
 ̇
 ̈
`ys2 p1q  ́ xxs2 , βs2 p1qy ̆2
ˇ ˇ ˇ ˇ ˇ
Fs2 ́1
 ̧ff
“
t
ÿ
s“1
E
„ 1  ́ ps
ps
pysp1q  ́ xxs, βsp1qyq4
ȷ
ď
t
ÿ
s“1
E
„1
ps
pysp1q  ́ xxs, βsp1qyq4
ȷ
“
t
ÿ
s“1
E
„1
ps
`ysp1q  ́ xxs, β ̊
s p1qy  ́ xxs, βsp1q  ́ β ̊
s p1qy ̆4
ȷ
ď27
t
ÿ
s“1
y4
s p1qE
„1
ps
ȷ
` 27
t
ÿ
s“1
xxs, β ̊
s p1qy4E
„1
ps
ȷ
` 27
t
ÿ
s“1
E
„1
ps
xxs, βsp1q  ́ β ̊
s p1qy4
ȷ
fi27S1,1 ` 27S1,2 ` 27S1,3 . (53)
By Corollary 4.15, Corollary B.17 and Assumption 1, S1,1 can be bounded as:
S1,1 À T  ̈ T 1{8 “ T 9{8 “ opT 5{4R3
t q . (54)
By Cauchy-Schwarz inequality, Corollary B.4 and Assumption 1, for any t P rT s we have
xxt, β ̊
t p1qy2 ď
 ̃t ́1
ÿ
s“1
Πt,sysp1q
 ̧2
91

ď
 ̃t ́1
ÿ
s“1
Π2
t,s
 ̧  ̃t ́1
ÿ
s“1
y2
s p1q
 ̧
pCauchy-Schwarz inequalityq
“
 ̃t ́1
ÿ
s“1
x⊺
t
`X ⊺
t ́1Xt ́1 ` η ́1
t Id
 ̆ ́1 xsx⊺
s
`X ⊺
t ́1Xt ́1 ` η ́1
t Id
 ̆ ́1 xt
 ̧  ̃t ́1
ÿ
s“1
y2
s p1q
 ̧
“
 ́
x⊺
t
`X ⊺
t ́1Xt ́1 ` η ́1
t Id
 ̆ ́1 Xt ́1X⊺
t ́1
`X ⊺
t ́1Xt ́1 ` η ́1
t Id
 ̆ ́1 xt
 ̄
 ̃t ́1
ÿ
s“1
y2
s p1q
 ̧
ďΠt,tpt  ́ 1q1{2
 ̃t ́1
ÿ
s“1
y4
s p1q
 ̧1{2
pCauchy-Schwarz inequalityq
ďc2
1pγ0 _ c2 _ 1qR2
t ppt  ́ 1q _ η ́1
t q ́1pt  ́ 1q1{2T 1{2 pCorollary B.4 and Assumption 1q
ďc2
1pγ0 _ c2 _ 1qR2
t ppt  ́ 1q _ η ́1
t q ́1{2T 1{2
ďc2
1pγ0 _ c2 _ 1qR2
t η1{2
t T 1{2
“c2
1pγ0 _ c2 _ 1qRtT 1{4 . (55)
Hence by (55), Corollary B.12 and Lemma 4.14, S1,2 can be bounded as:
S1,2 ď
t
ÿ
s“1
xxs, β ̊
s p1qy4p2 ` b1pb2{6q1{4η1{4
s E1{4Apt ́1p0qq pLemma 4.14q
ď
t
ÿ
s“1
xxs, β ̊
s p1qy4
ˆ Rt
Rs
 ̇1{2
p2 ` b1pb2{6q1{4η1{4
t E1{4Aptp0qq
ď
t
ÿ
s“1
xxs, β ̊
s p1qy2  ̈ c2
1pγ0 _ c2 _ 1qRsT 1{4
ˆ Rt
Rs
 ̇1{2
p2 ` b1pb2{6q1{4a1{4
t p0qq pby (55)q
ďc2
1pγ0 _ c2 _ 1qT 1{4
t
ÿ
s“1
xxs, β ̊
s p1qy2R1{2
s R1{2
t p2 ` b1pb2{6q1{4a1{4
t p0qq
ďc2
1pγ0 _ c2 _ 1qT 1{4Rtp2 ` b1pb2{6q1{4a1{4
t p0qq
t
ÿ
s“1
xxs, β ̊
s p1qy2 pby Rs ď Rtq
ďp21{2 ` 1q2c4
1pγ0 _ c2 _ 1qT 5{4Rtp2 ` b1pb2{6q1{4a1{4
t p0qq pCorollary B.12q . (56)
By Proposition 5.4 and Corollary B.19, we have
S1,3 “
t
ÿ
s“1
E
„1
ps
xxs, βsp1q  ́ β ̊
s p1qy4
ȷ
ÀT 7{26
t
ÿ
s“1
Rs  ̈ R ́1
s E “xxs, βsp1q  ́ β ̊
s p1qy4‰ pProposition 5.4q
ÀT 7{26Rt  ̈ T 89{128R2
t pby Rs ď Rt and Corollary B.19q
“T 5{4R3
t  ̈ T  ́475{1664
“opT 5{4R3
t q . (57)
Hence by (53), (54), (56) and (57), we have
S1 ď27S1,1 ` 27S1,2 ` 27S1,3
ď27p21{2 ` 1q2c4
1pγ0 _ c2 _ 1qT 5{4Rtp2 ` b1pb2{6q1{4a1{4
t p0qq ` opT 5{4R3
tq
ď27p21{2 ` 1q2c4
1pγ0 _ c2 _ 1qT 5{4Rtp2 ` b1pb2{6q1{4a1{4
t p0qq ` opη ́2
t  ̈ pηtT q1{2q . (58)
92

For S2, by Cauchy-Schwarz inequality and AM-GM inequality, we have
S2 “ Var
«t ÿ
s“1
pysp1q  ́ xxs, βsp1qyq2
ff
“ Var
«t ÿ
s“1
”
pysp1q  ́ xxs, βsp1qyq2  ́ `ysp1q  ́ xxs, β ̊
s p1qy ̆2ı
ff
“ Var
«t ÿ
s“1
`ysp1q  ́ xxs, βsp1qy ` ysp1q  ́ xxs, β ̊
s p1qy ̆ xxs, β ̊
s p1q  ́ βsp1qy
ff
“ Var
«t ÿ
s“1
`2ysp1q  ́ 2xxs, β ̊
s p1qy  ́ xxs, βsp1q  ́ β ̊
s p1qy ̆ xxs, βsp1q  ́ β ̊
s p1qy
ff
“ Var
«
2
t
ÿ
s“1
`ysp1q  ́ xxs, β ̊
s p1qy ̆ xxs, βsp1q  ́ β ̊
s p1qy  ́
t
ÿ
s“1
xxs, βsp1q  ́ β ̊
s p1qy2
ff
ď8 Var
«t ÿ
s“1
`ysp1q  ́ xxs, β ̊
s p1qy ̆ xxs, βsp1q  ́ β ̊
s p1qy
ff
` 2 Var
«t ÿ
s“1
xxs, βsp1q  ́ β ̊
s p1qy2
ff
fi8S2,1 ` 2S2,2 . (59)
For S2,1, by Lemma B.15 and Corollary 4.15, we have
S2,1 “ Var
«t ÿ
s“1
`ysp1q  ́ xxs, β ̊
s p1qy ̆ xxs, βsp1q  ́ β ̊
s p1qy
ff
“ Var
«t ÿ
s“1
`ysp1q  ́ xxs, β ̊
s p1qy ̆
s ́1
ÿ
r“1
Πs,r yr p1q
ˆ 1rZr “ 1s
pr
 ́1
 ̇
ff
“ Var
«t ́1
ÿ
r“1
 ̃t ÿ
s“r`1
Πs,r
`ysp1q  ́ xxs, β ̊
s p1qy ̆
 ̧
yr p1q
ˆ 1rZr “ 1s
pr
 ́1
 ̇
ff
prewrite the summationq
“
t ́1
ÿ
r“1
Var
« ̃ t ÿ
s“r`1
Πs,r
`ysp1q  ́ xxs, β ̊
s p1qy ̆
 ̧
yr p1q
ˆ 1rZr “ 1s
pr
 ́1
 ̇
ff
pvariance of the sum of MDSq
“
t ́1
ÿ
r“1
 ̃t ÿ
s“r`1
Πs,r
`ysp1q  ́ xxs, β ̊
s p1qy ̆
 ̧2
y2
r p1q Var
ˆ 1rZr “ 1s
pr
 ́1
 ̇
“
t ́1
ÿ
r“1
 ̃t ÿ
s“r`1
Πs,r
`ysp1q  ́ xxs, β ̊
s p1qy ̆
 ̧2
y2
r p1qE
„1
pr
 ́1
ȷ
ď
t ́1
ÿ
r“1
 ̃t ÿ
s“r`1
Πs,r
`ysp1q  ́ xxs, β ̊
s p1qy ̆
 ̧2
y2
r p1q
 ́
2 ` b1pb2{6q1{4η1{4
r E1{4Apr ́1p0q
 ̄
pCorollary 4.15q
ď
t ́1
ÿ
r“1
 ̃t ÿ
s“r`1
Πs,r
`ysp1q  ́ xxs, β ̊
s p1qy ̆
 ̧2
y2
r p1q
ˆ Rt
Rr
 ̇1{2  ́
2 ` b1pb2{6q1{4η1{4
t E1{4Aptp0q
 ̄
ďR1{2
t
t ́1
ÿ
r“1
 ̃t ÿ
s“r`1
Πs,r
`ysp1q  ́ xxs, β ̊
s p1qy ̆
 ̧2
R ́1{2
r y2
r p1q
 ́
2 ` b1pb2{6q1{4a1{4
t p0q
 ̄
ď2c4
1pγ0 _ c2 _ 1q3{2ξ5{4T 11{8R5{2`1{2
t η1{4
t
 ́
2 ` b1pb2{6q1{4a1{4
t p0q
 ̄
pLemma B.15q
“2c4
1pγ0 _ c2 _ 1q3{2ξ5{4T 11{8R3
t η1{4
t
 ́
2 ` b1pb2{6q1{4a1{4
t p0q
 ̄
“2c4
1pγ0 _ c2 _ 1q3{2ξ5{4T 5{4R5{2
t
 ́
2 ` b1pb2{6q1{4a1{4
t p0q
 ̄
. (60)
93

For S2,2, by Cauchy-Schwarz inequality and AM-GM inequality, we have
S2,2
“ Var
»

t
ÿ
s“1
 ̃s ́1
ÿ
r“1
Πs,r yr p1q
„ 1rZr “ 1s
pr
 ́1
ȷ
 ̧2fi
fl
ďE
»

 ̈
 ̋
t
ÿ
s“1
 ̃s ́1
ÿ
r“1
Πs,r yr p1q
„ 1rZr “ 1s
pr
 ́1
ȷ
 ̧2 ̨
‚
2
fi
ffi fl
“E
»

 ̃t ÿ
s“1
ÿ
1ďt1 ,t2 ďs ́1
Πs,t1 Πs,t2 yt1 p1qyt2 p1q
ˆ 1rZt1 “ 1s
pt1
 ́1
 ̇ ˆ 1rZt2 “ 1s
pt2
 ́1
 ̇
 ̧2fi
fl
“E
« ̃ t ÿ
s“1
ÿ
1ďrďs ́1
Π2
s,r y 2
r p1q
ˆ 1rZr “ 1s
pr
 ́1
 ̇2
`
t
ÿ
s“1
ÿ
1ďt1 ‰t2 ďs ́1
Πs,t1 Πs,t2 yt1 p1qyt2 p1q
ˆ 1rZt1 “ 1s
pt1
 ́1
 ̇ ˆ 1rZt2 “ 1s
pt2
 ́1
 ̇
 ̧2ff
ď2E
»

 ̃t ÿ
s“1
s ́1
ÿ
r“1
Π2
s,r y 2
r p1q
ˆ 1rZr “ 1s
pr
 ́1
 ̇2 ̧2fi
fl
`2E
»

 ̃t ÿ
s“1
ÿ
1ďt1 ‰t2 ďs ́1
Πs,t1 Πs,t2 yt1 p1qyt2 p1q
ˆ 1rZt1 “ 1s
pt1
 ́1
 ̇ ˆ 1rZt2 “ 1s
pt2
 ́1
 ̇
 ̧2fi
fl pCauchy+AM-GMq
ď2E
»

 ̃t ́1
ÿ
r“1
«t ÿ
s“r`1
Π2
s,r
ff
y2
r p1q
ˆ 1rZr “ 1s
pr
 ́1
 ̇2 ̧2fi
fl prewrite the summationq
` 2 Var
« ÿ
1ďt1 ‰t2 ďt ́1
 ̃t ÿ
s“t1 _t2 `1
Πs,t1 Πs,t2
 ̧
yt1 p1qyt2 p1q
ˆ 1rZt1 “ 1s
pt1
 ́1
 ̇ ˆ 1rZt2 “ 1s
pt2
 ́1
 ̇
ff
ď2
t ́1
ÿ
r“1
 ̃t ÿ
s“r`1
Π2
s,r
 ̧2
y4
r p1qE
«
ˆ 1rZr “ 1s
pr
 ́1
 ̇4ff
`2
ÿ
1ďt1 ‰t2 ďt ́1
 ̃t ÿ
s“t1 `1
Π2
s,t1
 ̧ ̃ t ÿ
s“t2 `1
Π2
s,t2
 ̧
y2
t1 p1qy2
t2 p1qE
«
ˆ 1rZt1 “ 1s
pt1
 ́1
 ̇2 ˆ 1rZt2 “ 1s
pt2
 ́1
 ̇2ff
`2 Var
« ÿ
1ďt1 ‰t2 ďt ́1
 ̃t ÿ
s“t1 _t2 `1
Πs,t1 Πs,t2
 ̧
yt1 p1qyt2 p1q
ˆ 1rZt1 “ 1s
pt1
 ́1
 ̇ ˆ 1rZt2 “ 1s
pt2
 ́1
 ̇
ff
fi2B1 ` 2B2 ` 2B3 . (61)
By Lemma B.15, Lemma B.18 and Assumption 3, we can bound B1 by:
B1 “
t ́1
ÿ
r“1
 ̃t ÿ
s“r`1
Π2
s,r
 ̧2
y4
r p1qE
«
ˆ 1rZr “ 1s
pr
 ́1
 ̇4ff
À
 ̈
 ̋
t ́1
ÿ
r“1
 ̃t ÿ
s“r`1
Π2
s,r
 ̧2
y4
r p1q
 ̨
‚ ̈ T 3{8 pLemma B.18q
ÀR8
t η2
t T  ̈ T 3{8 pLemma B.15q
ÀR8
t T  ̈ T  ́1R ́4
t  ̈ T 3{8
94

“T 3{8R4
t
“T 5{4R3
t  ̈ pT R ́4
t q ́7{8  ̈ R ́5{2
t pAssumption 3q
“opT 5{4R3
t q . (62)
By Lemma B.15, Lemma B.18 and Assumption 3, we can bound B2 by:
B2 “
ÿ
1ďt1 ‰t2 ďt ́1
 ̃t ÿ
s“t1 `1
Π2
s,t1
 ̧ ̃ t ÿ
s“t2 `1
Π2
s,t2
 ̧
y2
t1 p1qy2
t2 p1qE
«
ˆ 1rZt1 “ 1s
pt1
 ́1
 ̇2 ˆ 1rZt2 “ 1s
pt2
 ́1
 ̇2ff
À
 ̃ ÿ
1ďt1 ‰t2 ďt ́1
 ̃t ÿ
s“t1 `1
Π2
s,t1
 ̧ ̃ t ÿ
s“t2 `1
Π2
s,t2
 ̧
y2
t1 p1qy2
t2 p1q
 ̧
 ̈ T 9{32 pLemma B.18q
ď
 ̃t ́1
ÿ
s“1
 ̃t ÿ
r“s`1
Π2
r,s
 ̧
y2
s p1q
 ̧2
 ̈ T 9{32
“
 ̃t ÿ
s“1
 ̃s ́1
ÿ
r“1
Π2
s,r
 ̧
y2
r p1q
 ̧2
 ̈ T 9{32 prewrite the summationq
ÀR6
t ηtT  ̈ T 9{32 pLemma B.15q
ÀR6
t  ̈ T  ́1{2R ́2
t  ̈ T 1`9{32
“T 5{4R3
t  ̈ pT R ́4
t q ́15{32  ̈ R ́7{8
t
“opT 5{4R3
t q pAssumption 3q . (63)
For any 1 ď t1 ‰ t2, t3 ‰ t4 ď t  ́ 1, if the maximum among tt1, t2, t3, t4u is unique (assume without loss of generality that t1 is the unique maximum), by the law of total variance, there holds:
Cov
ˆˆ 1rZt1 “ 1s
pt1
 ́1
 ̇ ˆ 1rZt2 “ 1s
pt2
 ́1
 ̇
,
ˆ 1rZt3 “ 1s
pt3
 ́1
 ̇ ˆ 1rZt4 “ 1s
pt4
 ́1
 ̇ ̇
“E
«
Cov
 ̃
ˆ 1rZt1 “ 1s
pt1
 ́1
 ̇ ˆ 1rZt2 “ 1s
pt2
 ́1
 ̇
,
ˆ 1rZt3 “ 1s
pt3
 ́1
 ̇ ˆ 1rZt4 “ 1s
pt4
 ́1
 ̇
ˇ ˇ ˇ ˇ ˇ
Ft1 ́1
 ̧ff
` Cov
«
E
 ̃
ˆ 1rZt1 “ 1s
pt1
 ́1
 ̇ ˆ 1rZt2 “ 1s
pt2
 ́1
 ̇
ˇ ˇ ˇ ˇ ˇ
Ft1 ́1
 ̧
,E
 ̃
ˆ 1rZt3 “ 1s
pt3
 ́1
 ̇ ˆ 1rZt4 “ 1s
pt4
 ́1
 ̇
ˇ ˇ ˇ ˇ ˇ
Ft1 ́1
 ̧ff
“0 .
Hence the only nonzero terms in the expansion of B3 have four indices where exact two numbers attain the maximum number among the four indices. Then we can rewrite B3 as
B3 ď2
ÿ
1ďt1 ‰t2 ďt ́1
 ̃t ÿ
s“t1 _t2 `1
Πs,t1 Πs,t2
 ̧2
y2
t1 p1qy2
t2 p1q Var
„ˆ 1rZt1 “ 1s
pt1
 ́1
 ̇ ˆ 1rZt2 “ 1s
pt2
 ́1
 ̇ȷ
`4
ÿ
1ďt2 ‰t3 ăt1 ďt ́1
ˇ ˇ ˇ ˇ ˇ
 ̃t ÿ
s“t1 `1
Πs,t1 Πs,t2
 ̧ ̃ t ÿ
s“t1 `1
Πs,t1 Πs,t3
 ̧
y2
t1 p1qyt2 p1qyt3 p1q
ˇ ˇ ˇ ˇ ˇ
ˆ
ˇ ˇ ˇ ˇ
Cov
ˆˆ 1rZt1 “ 1s
pt1
 ́1
 ̇ ˆ 1rZt2 “ 1s
pt2
 ́1
 ̇
,
ˆ 1rZt1 “ 1s
pt1
 ́1
 ̇ ˆ 1rZt3 “ 1s
pt3
 ́1
 ̇ ̇ˇ ˇ ˇ ˇ
fi2B3,1 ` 4B3,2 . (64)
By Corollary B.4 and Lemma B.9, for any 1 ď s ď t  ́ 1, we have
t
ÿ
r“s`1
Π2
r,s ďpγ0 _ c2 _ 1q2
t
ÿ
r“s`1
R2
r R2
sppr  ́ 1q _ η ́1
r q ́2 pCorollary B.4q
95

ďpγ0 _ c2 _ 1q2
t
ÿ
r“s`1
R4
rppr  ́ 1q _ η ́1
r q ́2 pby Rs ď Rrq
“pγ0 _ c2 _ 1q2
t
ÿ
r“s`1
ppr  ́ 1qR ́2
r _ T 1{2q ́2
ďpγ0 _ c2 _ 1q2
t
ÿ
r“s`1
ppr  ́ 1qR ́2
t _ T 1{2q ́2 pby Rr ď Rtq
“pγ0 _ c2 _ 1q2
t
ÿ
r“s`1
R4
t ppr  ́ 1q _ η ́1
t q ́2
ďpγ0 _ c2 _ 1q2ξ2R4
t ηt pLemma B.9q .
Then by Lemma B.15, Lemma B.18 and Assumption 3, B3,1 can be bounded by
B3,1
ď
ÿ
1ďt1 ‰t2 ďt ́1
 ̃t ÿ
s“t1 _t2 `1
Π2
s,t1
 ̧2  ̃ t ÿ
s“t1 _t2 `1
Π2
s,t2
 ̧2
y2
t1 p1qy2
t2 p1q Var
„ˆ 1rZt1 “ 1s
pt1
 ́1
 ̇ ˆ 1rZt2 “ 1s
pt2
 ́1
 ̇ȷ
ď
ÿ
1ďt1 ‰t2 ďt ́1
 ̃t ÿ
s“t1 _t2 `1
Π2
s,t1
 ̧2  ̃ t ÿ
s“t1 _t2 `1
Π2
s,t2
 ̧2
y2
t1 p1qy2
t2 p1qE
«
ˆ 1rZt1 “ 1s
pt1
 ́1
 ̇2 ˆ 1rZt2 “ 1s
pt2
 ́1
 ̇2ff
À
 ̈
 ̋
ÿ
1ďt1 ‰t2 ďt ́1
 ̃t ÿ
s“t1 `1
Π2
s,t1
 ̧2  ̃ t ÿ
s“t2 `1
Π2
s,t2
 ̧2
y2
t1 p1qy2
t2 p1q
 ̨
‚ ̈ T 9{32 pLemma B.18q
ď
 ̈
 ̋
t ́1
ÿ
s“1
 ̃t ÿ
r“s`1
Π2
r,s
 ̧2
y2
s p1q
 ̨
‚
2
 ̈ T 9{32
ÀR8
t η2
t
 ̃t ́1
ÿ
s“1
 ̃t ÿ
r“s`1
Π2
r,s
 ̧
y2
s p1q
 ̧2
 ̈ T 9{32
“R8
t pT  ́1{2R ́2
t q2
 ̃t ÿ
s“1
 ̃s ́1
ÿ
r“1
Π2
s,r
 ̧
y2
r p1q
 ̧2
 ̈ T 9{32
ÀR4
t T  ́1  ̈ R6
t ηtT  ̈ T 9{32 pLemma B.15q
“T 5{4R3
t  ̈ pT R ́4
t q ́47{32  ̈ R ́7{8
t
“opT 5{4R3
t q pAssumption 3q . (65)
By Lemma B.15 and Lemma B.18, we can bound B3,2 as:
B3,2 “
ÿ
1ďt2 ‰t3 ăt1 ďt ́1
ˇ ˇ ˇ ˇ ˇ
 ̃t ÿ
s“t1 `1
Πs,t1 Πs,t2
 ̧ ̃ t ÿ
s“t1 `1
Πs,t1 Πs,t3
 ̧
y2
t1 p1qyt2 p1qyt3 p1q
ˇ ˇ ˇ ˇ ˇ
ˆ
ˇ ˇ ˇ ˇ
Cov
ˆˆ 1rZt1 “ 1s
pt1
 ́1
 ̇ ˆ 1rZt2 “ 1s
pt2
 ́1
 ̇
,
ˆ 1rZt1 “ 1s
pt1
 ́1
 ̇ ˆ 1rZt3 “ 1s
pt3
 ́1
 ̇ ̇ˇ ˇ ˇ ˇ
ď4
ÿ
1ďt2 ‰t3 ăt1 ďt ́1
ˇ ˇ ˇ ˇ ˇ
 ̃t ÿ
s“t1 `1
Πs,t1 Πs,t2
 ̧ ̃ t ÿ
s“t1 `1
Πs,t1 Πs,t3
 ̧
y2
t1 p1qyt2 p1qyt3 p1q
ˇ ˇ ˇ ˇ ˇ
ˆ
 ́
2 ` b1pb2{6q1{4η1{4
t1 E1{4Apt1 p0q
 ̄25{16 ˆ Rt1
Rt2
 ̇15{96 ˆ Rt1
Rt3
 ̇15{96
pLemma B.18q
ď4
ÿ
1ďt2 ‰t3 ăt1 ďt ́1
ˇ ˇ ˇ ˇ ˇ
 ̃t ÿ
s“t1 `1
Πs,t1 Πs,t2
 ̧ ̃ t ÿ
s“t1 `1
Πs,t1 Πs,t3
 ̧
y2
t1 p1qyt2 p1qyt3 p1q
ˇ ˇ ˇ ˇ ˇ
96

ˆ
 ́
2 ` b1pb2{6q1{4η1{4
t E1{4Aptp0q
 ̄25{16 ˆ Rt
Rt1
 ̇25{32 ˆ Rt1
Rt2
 ̇15{96 ˆ Rt1
Rt3
 ̇15{96
pby Rt1 ď Rtq
“4
ÿ
1ďt2 ‰t3 ăt1 ďt ́1
ˇ ˇ ˇ ˇ ˇ
 ̃t ÿ
s“t1 `1
Πs,t1 Πs,t2
 ̧ ̃ t ÿ
s“t1 `1
Πs,t1 Πs,t3
 ̧
y2
t1 p1qyt2 p1qyt3 p1q
ˇ ˇ ˇ ˇ ˇ
ˆ
 ́
2 ` b1pb2{6q1{4a1{4
t p0q
 ̄25{16 ˆ Rt
Rt1
 ̇15{32 ˆ Rt
Rt2
 ̇15{96 ˆ Rt
Rt3
 ̇15{96
ď4
ÿ
1ďt2 ,t3 ăt1 ďt ́1
ˇ ˇ ˇ ˇ ˇ
 ̃t ÿ
s“t1 `1
Πs,t1 Πs,t2
 ̧ ̃ t ÿ
s“t1 `1
Πs,t1 Πs,t3
 ̧
y2
t1 p1qyt2 p1qyt3 p1q
ˆ Rt2
Rt21
 ̈ Rt
Rt2
 ̈ Rt
Rt3
 ̇1{4ˇ
ˇ ˇ ˇ ˇ
ˆ
 ́
2 ` b1pb2{6q1{4a1{4
t p0q
 ̄25{16
pby Rt1 , Rt2 , Rt3 ď Rtq
ď72c4
1pγ0 _ c2 _ 1q2R4
t η1{2
t T 3{2 log2pηtT q  ̈
 ́
2 ` b1pb2{6q1{4a1{4
t p0q
 ̄25{16
“72c4
1pγ0 _ c2 _ 1q2R3
t T 5{4 log2pηtT q  ̈
 ́
2 ` b1pb2{6q1{4a1{4
t p0q
 ̄25{16
. (66)
Then by (59), (60), (61), (62), (63), (64), (65) and (66), we can bound S2 by:
S2 ď8S2,1 ` 2S2,2
ď8S2,1 ` 4B1 ` 4B2 ` 8B3,1 ` 16B3,2
ď16c4
1pγ0 _ c2 _ 1q3{2ξ5{4T 5{4R5{2
t
 ́
2 ` b1pb2{6q1{4a1{4
t p0q
 ̄
` 1152c4
1pγ0 _ c2 _ 1q2R3
t T 5{4 log2pηtT q  ̈
 ́
2 ` b1pb2{6q1{4a1{4
t p0q
 ̄25{16
` opT 5{4R3
tq
ď
 ́
16c4
1pγ0 _ c2 _ 1q3{2ξ5{4 ` 1152c4
1pγ0 _ c2 _ 1q2 ̄
R3
t T 5{4 log2pηtT q  ̈
 ́
2 ` b1pb2{6q1{4a1{4
t p0q
 ̄25{16
` opT 5{4R3
tq
“
`16ξ5{4 ` 1152 ̆ c4
1pγ0 _ c2 _ 1q2η ́2
t pηtT q1{2 log2pηtT q
 ́
2 ` b1pb2{6q1{4a1{4
t p0q
 ̄25{16
` opη ́2
t pηtT q1{2q .
(67)
Then for T large enough, by (52), (58) and (67), we have
VarpAptp1qq
ď2S1 ` 2S2
ď54p21{2 ` 1q2c4
1pγ0 _ c2 _ 1qT 5{4Rtp2 ` b1pb2{6q1{4a1{4
t p0qq ` opη ́2
t pηtT q1{2q
`
`32ξ5{4 ` 2304 ̆ c4
1pγ0 _ c2 _ 1q2η ́2
t pηtT q1{2 log2pηtT q
 ́
2 ` b1pb2{6q1{4a1{4
t p0q
 ̄25{16
ď
`320 ` 32ξ5{4 ` 2304 ̆ c4
1pγ0 _ c2 _ 1q2η ́2
t pηtT q1{2 log2pηtT q
 ́
2 ` b1pb2{6q1{4a1{4
t p0q
 ̄25{16
` opη ́2
t pηtT q1{2q
ď
`64ξ5{4 ` 5248 ̆ c4
1pγ0 _ c2 _ 1q2η ́2
t pηtT q1{2 log2pηtT q
 ́
2 ` b1pb2{6q1{4a1{4
t p0q
 ̄25{16
“C η ́2
t pηtT q1{2 log2pηtT q
 ́
2 ` b1pb2{6q1{4a1{4
t p0q
 ̄25{16
,
which indicates that
Varppatp1qq “ VarpηtAptp1qq ďCpηtT q1{2 log2pηtT q
 ́
2 ` b1pb2{6q1{4a1{4
t p0q
 ̄25{16
.
Lemma C.3 establishes that the variance of aptp1q (or Aptp1q) and aptp0q (or Aptp0q) are upper bounded in a mutually normalizing manner. Such dependence can be undesirable, as the
97

estimated squared residuals for each group may fail to concentrate around their respective expectations when the treatment group and controlled group are imbalanced. Nevertheless, as implied by Corollary B.17 and Lemma C.1, once the expected squared residuals exceed a certain threshold, the maximal (positive) deviation between the two groups is controlled, thereby ensuring a degree of concentration despite the mutual normalization. The result is formally stated in the following lemma.
Lemma C.4. Suppose T is large enough. Suppose 0 ă δ ă 1
4 is a fixed constant and C ̃ ą 0 is a fixed constant given by
C ̃ “ max
#«
C 1{2 b25{32
1 b281{128
2 b3
` 257{32C1{2b89{32
1 b185{128
2 b3
ˆ
1` 2
b3
 ̇
ff
,
2283{64 C 3{4 b139{64
1 b139{256
2 , 257{32C1{2b89{32
1 b185{128
2 b3
ˆ
1` 2
b3
 ̇
,
289{32 C 1{2 b121{32
1 b217{128
2 b5{2
3
ˆ
1` 2
b3
 ̇
, 289{16Cb41{16
1 b41{64
2,
8b1b2
b3
, 33C3{4b139{64
1 b139{256
2
+
.
Then under Assumptions 1-3 and Condition 1, we have the following upper bound:
(1) For any t P rT s such that atp1q ě 5b ́4
1 b ́1
2 , there holds
E
„ˇ ˇ ˇ ˇ
1
pt`1
 ́1
p ̄t`1
ˇ ˇ ˇ ˇ
ȷ
ďC ̃ max
#
pηtT q1{4 logpηtT qa ́71{128
t p1q ` pηtT q3{8 log3{2pηtT qδ ́3{2a ́245{256
t p1q,
pηtT q1{4 logpηtT qa ́71{128
t p1q ` pηtκq89{128pηtT q1{4 logpηtT qa ́3{2
t p1q
` pηtT q1{2 log2pηtT qδ ́2a ́2
t p1qpηtκq41{64, δ ` pηtT q3{8 log3{2pηtT qδ ́3{2a ́245{256
t p1q
+
.
(2) For any t P rT s such that atp0q ě 5b ́4
1 b ́1
2 , there holds
E
„ˇ ˇ ˇ ˇ
1
pt`1
 ́1
p ̄t`1
ˇ ˇ ˇ ˇ
ȷ
ďC ̃ max
#
pηtT q1{4 logpηtT qa ́71{128
t p0q ` pηtT q3{8 log3{2pηtT qδ ́3{2a ́245{256
t p0q,
pηtT q1{4 logpηtT qa ́71{128
t p0q ` pηtκq89{128pηtT q1{4 logpηtT qa ́3{2
t p0q
` pηtT q1{2 log2pηtT qδ ́2a ́2
t p0qpηtκq41{64, δ ` pηtT q3{8 log3{2pηtT qδ ́3{2a ́245{256
t p0q
+
.
Proof. Without loss of generality, we only prove the first part. For any t P rT s such that atp1q ě 5b ́4
1 b ́1
2 , it is easy to see that 2 ` b1pb2{6q1{4a1{4
t p1q ď 2b1b1{4
2 a1{4
t p1q. We then consider the following three cases:
(1) atp0q ď p1  ́ δqatp1q.
By Chebyshev’s inequality and Lemma C.3, we have
Pr ppatp1q ď aptp0qq
98

ď Pr
ˆ |patp1q  ́ atp1q|
atp1q ` |patp0q  ́ atp0q|
atp1q ě δ
 ̇
pChebyshev’s inequalityq
ď Pr
ˆ |patp1q  ́ atp1q|
atp1q ě δ
2
 ̇
` Pr
ˆ |aptp0q  ́ atp0q|
atp1q ě δ
2
 ̇
ď 4 Var ppatp1qq
δ2at2p1q ` 4 Var paptp0qq
δ2at2p1q
ď
4CpηtT q1{2 log2pηtT q
 ́
2 ` b1pb2{6q1{4a1{4
t p0q
 ̄25{16
δ2at2p1q
`
4CpηtT q1{2 log2pηtT q
 ́
2 ` b1pb2{6q1{4a1{4
t p1q
 ̄25{16
δ2at2p1q pLemma C.3q
ď
8CpηtT q1{2 log2pηtT q
 ́
2 ` b1pb2{6q1{4a1{4
t p1q
 ̄25{16
δ2at2p1q
ď 8  ̈ 225{16Cb25{16
1 b25{64
2 pηtT q1{2 log2pηtT qa25{64
t p1q
δ2at2p1q psince atp0q ď atp1qq
ď 273{16Cb25{16
1 b25{64
2 pηtT q1{2 log2pηtT q
δ2a103{64
t p1q
. (68)
Under event tpatp1q ě patp0qu, we have pt`1, p ̄t`1 ě 1{2. By definition, pt`1 and p ̄t`1 satisfy:
 ́
atp1q  ̈ ηt`1
ηt
p ̄t2`1
`
atp0q  ̈ ηt`1
ηt
p1  ́ p ̄t`1q2 ` Ψ1pp ̄t`1q “ 0 ,
 ́
patp1q  ̈ ηt`1
ηt
pt2`1
`
patp0q  ̈ ηt`1
ηt
p1  ́ pt`1q2 ` Ψ1ppt`1q “ 0 .
By Lemma 4.14 and Lemma C.1, we have
ˇ ˇ ˇ ˇ
1
pt`1
 ́1
p ̄t`1
ˇ ˇ ˇ ˇ
ď b22
2b3
|atp1q  ́ patp1q|  ̈ ηt`1
ηt
atp1q  ̈ ηt`1
ηt
` b1b2
b3
ˆ
1` 2
b3
 ̇ p ̄t`1
1  ́ p ̄t`1
 ̈
|atp0q  ́ patp0q|  ̈ ηt`1
ηt
atp1q  ̈ ηt`1
ηt
pLemma C.1q
ď b22
2b3
|atp1q  ́ patp1q|  ̈ ηt`1
ηt
atp1q  ̈ ηt`1
ηt
` b1b2
b3
ˆ
1` 2
b3
 ̇
ˆ
1 ` b1pb2{6q1{4a1{4
t p1q  ̈
 ́ ηt`1 ηt
 ̄1{4 ̇
|atp0q  ́ patp0q|
atp1q pLemma 4.14q
ď b22
2b3
|atp1q  ́ patp1q|
atp1q ` 2b21b5{4
2 b3
ˆ
1` 2
b3
 ̇ |atp0q  ́ aptp0q|
a3{4
t p1q
psince ηt`1 ď ηtq . (69)
By calculation, we have
E
„ˇ ˇ ˇ ˇ
1
pt`1
 ́1
p ̄t`1
ˇ ˇ ˇ ˇ
ȷ
“E
„ˇ ˇ ˇ ˇ
1
pt`1
 ́1
p ̄t`1
ˇ ˇ ˇ ˇ
1 raptp1q ě aptp0qs
ȷ
`E
„ˇ ˇ ˇ ˇ
1
pt`1
 ́1
p ̄t`1
ˇ ˇ ˇ ˇ
1 rpatp1q ď patp0qs
ȷ
fiD1 ` D2. (70)
For term D1, by Lemma C.3, (69) and Cauchy-Schwarz inequality, we have
D1 ďE
«
b22 2b3
|atp1q  ́ patp1q|
atp1q ` 2b21b5{4
2 b3
ˆ
1` 2
b3
 ̇ |atp0q  ́ patp0q|
a3{4
t p1q
ff
99

ď b22
2b3
a ́1
t p1q Var1{2ppatp1qq ` 2b21b5{4
2 b3
ˆ
1` 2
b3
 ̇
a ́3{4
t p1q Var1{2paptp0qq pCauchy-Schwarz inequalityq
ď C1{2b22
2b3
a ́1
t p1qpηtT q1{4 logpηtT q
 ́
2 ` b1pb2{6q1{4a1{4
t p0q
 ̄25{32
` 2C1{2b21b5{4
2 b3
ˆ
1` 2
b3
 ̇
a ́3{4
t p1qpηtT q1{4 logpηtT q
 ́
2 ` b1pb2{6q1{4a1{4
t p1q
 ̄25{32
pLemma C.3q
ď 2 ́7{32C1{2b25{32
1 b281{128
2 b3
a ́1
t p1qpηtT q1{4 logpηtT qa25{128
t p1q
` 257{32C1{2b89{32
1 b185{128
2 b3
ˆ
1` 2
b3
 ̇
a ́3{4
t p1qpηtT q1{4 logpηtT qa25{128
t p1q
ď C1{2b25{32
1 b281{128
2 b3
pηtT q1{4 logpηtT qa ́103{128
t p1q
` 257{32C1{2b89{32
1 b185{128
2 b3
ˆ
1` 2
b3
 ̇
pηtT q1{4 logpηtT qa ́71{128
t p1q . (71)
Under event tpatp1q ď patp0qu, we have pt`1 ď 1{2 and p ̄t`1 ě 1{2. By (68), Corollary 4.15 and Hölder’s inequality, we have
D2 “E
„ˇ ˇ ˇ ˇ
1
pt`1
 ́1
p ̄t`1
ˇ ˇ ˇ ˇ
1 rpatp1q ď patp0qs
ȷ
ďE
„1
pt`1
1 raptp1q ď patp0qs
ȷ
ď
ˆ
E
„1
pt4`1
ȷ ̇1{4
pPr ppatp1q ď aptp0qqq3{4 pHölder’s inequalityq
ď
 ́
2 ` b1pb2{6q1{4a1{4
t p0q
 ̄
 ̃
273{16 C b25{16
1 b25{64
2 pηtT q1{2 log2pηtT q
δ2a103{64
t p1q
 ̧3{4
pby (68) and Corollary 4.15q
ď2b1b1{4
2 a1{4
t p1q
 ̃
273{16 C b25{16
1 b25{64
2 pηtT q1{2 log2pηtT q
δ2a103{64
t p1q
 ̧3{4
ď2283{64 C 3{4 b139{64
1 b139{256
2 pηtT q3{8 log3{2pηtT qδ ́3{2a ́245{256
t p1q . (72)
Hence by (70), (71) and (72), we have
E
„ˇ ˇ ˇ ˇ
1
pt`1
 ́1
p ̄t`1
ˇ ˇ ˇ ˇ
ȷ
ď C1{2b25{32
1 b281{128
2 b3
pηtT q1{4 logpηtT qa ́103{128
t p1q
` 257{32C1{2b89{32
1 b185{128
2 b3
ˆ
1` 2
b3
 ̇
pηtT q1{4 logpηtT qa ́71{128
t p1q
` 2283{64C3{4b139{64
1 b139{256
2 pηtT q3{8 log3{2pηtT qδ ́3{2a ́245{256
t p1q
ď
«
C 1{2 b25{32
1 b281{128
2 b3
` 257{32C1{2b89{32
1 b185{128
2 b3
ˆ
1` 2
b3
 ̇
ff
pηtT q1{4 logpηtT qa ́71{128
t p1q
` 2283{64C3{4b139{64
1 b139{256
2 pηtT q3{8 log3{2pηtT qδ ́3{2a ́245{256
t p1q . (73)
(2) atp1q ď p1  ́ δqatp0q.
100

By Chebyshev’s inequality and Lemma C.3, we have
Pr
ˆ |patp0q  ́ atp0q|
atp0q ě δ
2
 ̇
ď 4 Var ppatp0qq
δ2at2p0q pChebyshev’s inequalityq
ď
4CpηtT q1{2 log2pηtT q
 ́
2 ` b1pb2{6q1{4a1{4
t p1q
 ̄25{16
δ2at2p0q pLemma C.3q
ď 4  ̈ 225{16Cb25{16
1 b25{64
2 pηtT q1{2 log2pηtT qa25{64
t p0q δ2at2p0q
ď 257{16Cb25{16
1 b25{64
2 pηtT q1{2 log2pηtT q
δ2a103{64
t p0q
ď 257{16Cb25{16
1 b25{64
2 pηtT q1{2 log2pηtT q
δ2a103{64
t p1q
psince atp0q ě atp1qq . (74)
Since atp0q “ ηtEAptp0q ď ηtκ by Corollary B.17, we also have
Pr
ˆ |patp1q  ́ atp1q|
atp1q ě δ
2
 ̇
ď 4 Var ppatp1qq
δ2at2p1q pChebyshev’s inequalityq
ď
4CpηtT q1{2 log2pηtT q
 ́
2 ` b1pb2{6q1{4a1{4
t p0q
 ̄25{16
δ2at2p1q pLemma C.3q
ď 4  ̈ 225{16Cb25{16
1 b25{64
2 pηtT q1{2 log2pηtT qpηtκq25{64 δ2at2p1q
“ 257{16Cb25{16
1 b25{64
2 pηtT q1{2 log2pηtT qpηtκq25{64
δ2at2p1q . (75)
Under event t|patp0q  ́ atp0q| ď δ
2 atp0qu and event t|aptp1q  ́ atp1q| ď δ
2 atp1qu, we have
patp0q  ́ patp1q ěpatp0q  ́ atp1qq  ́ |patp0q  ́ atp0q|  ́ |patp1q  ́ atp1q|
ě p1  ́ p1  ́ δqq atp0q  ́ δ
2 atp0q  ́ δ
2 atp1q
ěδatp0q  ́ δ
2 atp0q  ́ δ
2 atp0q psince atp0q ě atp1qq
“0 .
This implies that patp0q ě patp1q. Hence by definition, pt`1 and p ̄t`1 satisfy:
 ́
atp1q  ̈ ηt`1
ηt
p ̄t2`1
`
atp0q  ̈ ηt`1
ηt
p1  ́ p ̄t`1q2 ` Ψ1pp ̄t`1q “ 0 ,
 ́
patp1q  ̈ ηt`1
ηt
pt2`1
`
patp0q  ̈ ηt`1
ηt
p1  ́ pt`1q2 ` Ψ1ppt`1q “ 0 .
Since δ ă 1{4, by Lemma C.1 and the proof in Lemma 4.14, we have
ˇ ˇ ˇ ˇ
1
pt`1
 ́1
p ̄t`1
ˇ ˇ ˇ ˇ
ď b1b2
b3
ˆ
1` 2
b3
 ̇ 1  ́ p ̄t`1
p ̄t`1
|
patp0q  ́ atp0q|  ̈ ηt`1
ηt
atp0q  ̈ ηt`1
ηt
` 2b21b2
b23
ˆ
1` 2
b3
 ̇ 1  ́ pt`1
pt`1
|
aptp1q  ́ atp1q|  ̈ ηt`1
ηt
atp1q  ̈ ηt`1
ηt
pLemma C.1q
101

ď b1b2
b3
ˆ
1` 2
b3
 ̇
ˆ
1 ` b1pb2{6q1{4a1{4
t p0q  ̈
 ́ ηt`1 ηt
 ̄1{4 ̇
|
aptp0q  ́ atp0q|
atp0q
` 2b21b2
b23
ˆ
1` 2
b3
 ̇
 ̈ b1pb2{b3q1{2
 ̃
aptp0q  ̈ ηt`1
ηt
aptp1q  ̈ ηt`1
ηt
 ̧1{2
|
patp1q  ́ atp1q|
atp1q pLemma 4.14q
ď 2b21b5{4
2 b3
ˆ
1` 2
b3
 ̇ a1{4
t p0q|aptp0q  ́ atp0q|
atp0q
` 2b31b3{2
2 b5{2
3
ˆ
1` 2
b3
 ̇
 ̃
atp0q ` δ
2 atp0q
atp1q  ́ δ
2 atp1q
 ̧1{2
|
patp1q  ́ atp1q|
atp1q psince ηt`1 ď ηtq
ď 2b21b5{4
2 b3
ˆ
1` 2
b3
 ̇ |patp0q  ́ atp0q|
a3{4
t p0q
` 2b31b3{2
2 b5{2
3
ˆ
1` 2
b3
 ̇
 ̃
1` δ
2
1 ́ δ
2
 ̧1{2
pηtκq1{2|aptp1q  ́ atp1q|
a3{2
t p1q
ď 2b21b5{4
2 b3
ˆ
1` 2
b3
 ̇ |patp0q  ́ atp0q|
a3{4
t p0q
` 2b31b3{2
2 b5{2
3
ˆ
1` 2
b3
 ̇ˆ1 ` 1
2 ̈1
4
1 ́ 1
2 ̈1
4
 ̇1{2 pηtκq1{2|aptp1q  ́ atp1q|
a3{2
t p1q
ď 2b21b5{4
2 b3
ˆ
1` 2
b3
 ̇ |patp0q  ́ atp0q|
a3{4
t p0q
` 4b31b3{2
2 b5{2
3
ˆ
1` 2
b3
 ̇ pηtκq1{2|patp1q  ́ atp1q|
a3{2
t p1q
. (76)
By calculation, we have
E
„ˇ ˇ ˇ ˇ
1
pt`1
 ́1
p ̄t`1
ˇ ˇ ˇ ˇ
ȷ
“E
„ˇ ˇ ˇ ˇ
1
pt`1
 ́1
p ̄t`1
ˇ ˇ ˇ ˇ
1 raptp0q ě patp1qs
ȷ
`E
„ˇ ˇ ˇ ˇ
1
pt`1
 ́1
p ̄t`1
ˇ ˇ ˇ ˇ
1 rpatp0q ď patp1qs
ȷ
fiD1 ` D2 . (77)
For term D1, by Lemma C.3, (76) and Cauchy-Schwarz inequality, we have
D1 ďE
«
2b21b5{4
2 b3
ˆ
1` 2
b3
 ̇ |patp0q  ́ atp0q|
a3{4
t p0q
` 4b31b3{2
2 b5{2
3
ˆ
1` 2
b3
 ̇ pηtκq1{2|patp1q  ́ atp1q|
a3{2
t p1q
ff
ď 2b21b5{4
2 b3
ˆ
1` 2
b3
 ̇
a ́3{4
t p1q Var1{2paptp0qq ` 4b31b3{2
2 b5{2
3
ˆ
1` 2
b3
 ̇
pηtκq1{2a ́3{2
t p1q Var1{2ppatp1qq pCauchyq
ď 2b21b5{4
2 b3
ˆ
1` 2
b3
 ̇
a ́3{4
t p1qC1{2pηtT q1{4 logpηtT q
 ́
2 ` b1pb2{6q1{4a1{4
t p1q
 ̄25{32
` 4b31b3{2
2 b5{2
3
ˆ
1` 2
b3
 ̇
pηtκq1{2a ́3{2
t p1qC1{2pηtT q1{4 logpηtT q
 ́
2 ` b1pb2{6q1{4a1{4
t p0q
 ̄25{32
pLemma C.3q
ď 257{32C1{2b89{32
1 b185{128
2 b3
ˆ
1` 2
b3
 ̇
a ́3{4
t p1qpηtT q1{4 logpη1T qa25{128
t p1q
` 289{32C1{2b121{32
1 b217{128
2 b5{2
3
ˆ
1` 2
b3
 ̇
pηtκq1{2a ́3{2
t p1qpηtT q1{4 logpηtT qa25{128
t p0q
ď 257{32C1{2b89{32
1 b185{128
2 b3
ˆ
1` 2
b3
 ̇
pηtT q1{4 logpηtT qa ́71{128
t p1q
` 289{32C1{2b121{32
1 b217{128
2 b5{2
3
ˆ
1` 2
b3
 ̇
pηtκq89{128pηtT q1{4 logpηtT qa ́3{2
t p1q . (78)
Under event tpatp1q ě patp0qu, we have pt`1 ě 1{2 and p ̄t`1 ď 1{2. Then by (74), (75), Corollary B.17 and Corollary 4.15, we have
D2 “E
„ˇ ˇ ˇ ˇ
1
pt`1
 ́1
p ̄t`1
ˇ ˇ ˇ ˇ
1 rpatp1q ě patp0qs
ȷ
102

ďE
„1
p ̄t`1
1 rpatp1q ě patp0qs
ȷ
“1
p ̄t`1
Pr ppatp1q ě patp0qq
ď
 ́
2 ` b1pb2{6q1{4a1{4
t p0q
 ̄
ˆ
Pr
ˆ |aptp1q  ́ atp1q|
atp1q ě δ
2
 ̇
` Pr
ˆ |patp0q  ́ atp0q|
atp0q ě δ
2
 ̇ ̇
pCorollary 4.15q
ď2b1b1{4
2 a1{4
t p0q
 ́ 257{16Cb25{16
1 b25{64
2 pηtT q1{2 log2pηtT q
δ2a103{64
t p1q
` 257{16Cb25{16
1 b25{64
2 pηtT q1{2 log2pηtT qpηtκq25{64 δ2at2p1q
 ̄
pby (74) and (75)q
ď273{16 C b41{16
1 b41{64
2 pηtκq1{4pηtT q1{2 log2pηtT qδ ́2  ́
a ́103{64
t p1q ` a ́2
t p1qpηtκq25{64 ̄
ď289{16 C b41{16
1 b41{64
2 pηtT q1{2 log2pηtT qδ ́2a ́2
t p1qpηtκq41{64 pCorollary B.17q . (79)
Hence by (77), (78) and (79), we have
E
„ˇ ˇ ˇ ˇ
1
pt`1
 ́1
p ̄t`1
ˇ ˇ ˇ ˇ
ȷ
ď 257{32C1{2b89{32
1 b185{128
2 b3
ˆ
1` 2
b3
 ̇
pηtT q1{4 logpηtT qa ́71{128
t p1q
` 289{32C1{2b121{32
1 b217{128
2 b5{2
3
ˆ
1` 2
b3
 ̇
pηtκq89{128pηtT q1{4 logpηtT qa ́3{2
t p1q
` 289{16Cb41{16
1 b41{64
2 pηtT q1{2 log2pηtT qδ ́2a ́2
t p1qpηtκq41{64 . (80)
(3) atp0q ě p1  ́ δqatp1q and atp1q ě p1  ́ δqatp0q.
By Chebyshev’s inequality and Lemma C.3, we have
Pr
ˆ |patp0q  ́ atp0q|
atp1q ě δ
 ̇
ď Var ppatp0qq
δ2at2p1q pChebyshev’s inequalityq
ď
CpηtT q1{2 log2pηtT q
 ́
2 ` b1pb2{6q1{4a1{4
t p1q
 ̄25{16
δ2at2p1q pLemma C.3q
ď 225{16Cb25{16
1 b25{64
2 pηtT q1{2 log2pηtT qa25{64
t p1q δ2at2p1q
“ 225{16Cb25{16
1 b25{64
2 pηtT q1{2 log2pηtT q
δ2a103{64
t p1q
. (81)
Similarly, since δ ă 1{4, we can prove that
Pr
ˆ |patp1q  ́ atp1q|
atp0q ě δ
 ̇
ď 225{16Cb25{16
1 b25{64
2 pηtT q1{2 log2pηtT q
δ2a103{64
t p0q
ď 225{16Cb25{16
1 b25{64
2 pηtT q1{2 log2pηtT q
δ2p1  ́ δq103{64a103{64
t p1q
ď 241{16Cb25{16
1 b25{64
2 pηtT q1{2 log2pηtT q
δ2a103{64
t p1q
. (82)
Note that under event t|patp1q  ́ atp1q| ď δatp0qu and event t|aptp0q  ́ atp0q| ď δatp1qu, we have
patp0q
aptp1q ď atp0q ` δatp1q
atp1q  ́ δatp0q ď
 ́
1` δ
1 ́δ
 ̄
atp0q
p1  ́ 2δqatp0q “ 1
p1  ́ δqp1  ́ 2δq ,
103

aptp1q
aptp0q ď atp1q ` δatp0q
atp0q  ́ δatp1q ď
 ́
1` δ
1 ́δ
 ̄
atp1q
p1  ́ 2δqatp1q “ 1
p1  ́ δqp1  ́ 2δq .
Then by Lemma C.2, under event tatp1q ď atp0qu and event tpatp1q ď aptp0qu, we have
ˇ ˇ ˇ ˇ
1
pt`1
 ́1
p ̄t`1
ˇ ˇ ˇ ˇ
ď
ˇ ˇ ˇ ˇ
1
pt`1
 ́2
ˇ ˇ ˇ ˇ
`
ˇ ˇ ˇ ˇ
1
p ̄t`1
 ́2
ˇ ˇ ˇ ˇ
ď b1b2
b3
 ̈ |atp1q  ́ atp0q|
atp1q ` b1b2
b3
 ̈ |patp1q  ́ patp0q|
patp1q
ď b1b2
b3
ˇ ˇ ˇ ˇ
atp0q
atp1q  ́ 1
ˇ ˇ ˇ ˇ
` b1b2
b3
ˇ ˇ ˇ ˇ
patp0q
patp1q  ́ 1
ˇ ˇ ˇ ˇ
ď b1b2
b3
ˆ1
1 ́δ  ́1
 ̇
` b1b2
b3
ˆ1
p1  ́ δqp1  ́ 2δq  ́ 1
 ̇
“ 4b1b2
b3
δ
1  ́ 2δ
ď 8b1b2
b3
δ.
Under event tatp1q ě atp0qu and event tpatp1q ě patp0qu, there holds pt`1, p ̄t`1 ě 1{2. Hence we have
ˇ ˇ ˇ ˇ
1
pt`1
 ́1
p ̄t`1
ˇ ˇ ˇ ˇ
ď
ˇ ˇ ˇ ˇ
1
pt`1
 ́2
ˇ ˇ ˇ ˇ
`
ˇ ˇ ˇ ˇ
1
p ̄t`1
 ́2
ˇ ˇ ˇ ˇ
ď
ˇ ˇ ˇ ˇ
1
2  ́ pt`1
1
2 pt`1
ˇ ˇ ˇ ˇ
`
ˇ ˇ ˇ ˇ
1
2  ́ p ̄t`1
1
2 p ̄t`1
ˇ ˇ ˇ ˇ
ď
ˇ ˇ ˇ ˇ ˇ
1
2  ́ pt`1
`1  ́ 1
2
 ̆ p1  ́ pt`1q
ˇ ˇ ˇ ˇ ˇ
`
ˇ ˇ ˇ ˇ ˇ
1
2  ́ p ̄t`1
`1  ́ 1
2
 ̆ p1  ́ p ̄t`1q
ˇ ˇ ˇ ˇ ˇ
ď
ˇ ˇ ˇ ˇ
1
1  ́ pt`1
 ́2
ˇ ˇ ˇ ˇ
`
ˇ ˇ ˇ ˇ
1
1  ́ p ̄t`1
 ́2
ˇ ˇ ˇ ˇ
ď 8b1b2
b3
δ.
Similarly we can prove that under event tatp1q ě atp0qu X tpatp1q ď aptp0qu or event tatp1q ď atp0qu X
t
patp1q ě patp0qu, we have
ˇ ˇ ˇ ˇ
1
pt`1
 ́1
p ̄t`1
ˇ ˇ ˇ ˇ
ď 8b1b2
b3
δ . (83)
Since δ ă 1{4, by (81), (82), (83), Corollary (4.15) and Hölder’s inequality, we have
E
„ˇ ˇ ˇ ˇ
1
pt`1
 ́1
p ̄t`1
ˇ ˇ ˇ ˇ
ȷ
ďE
„ˇ ˇ ˇ ˇ
1
pt`1
 ́1
p ̄t`1
ˇ ˇ ˇ ˇ
1 r|patp1q  ́ atp1q| ď δatp0qs  ̈ 1 r|patp0q  ́ atp0q| ď δatp1qs
ȷ
`E
„ˆ 1
pt`1
`1
p ̄t`1
 ̇
1 r|patp1q  ́ atp1q| ě δatp0qs
ȷ
`E
„ˆ 1
pt`1
`1
p ̄t`1
 ̇
1 r|patp0q  ́ atp0q| ě δatp1qs
ȷ
ď 8b1b2
b3
δ`
ˆ
E1{4
ˆ1
pt4`1
 ̇
` E1{4
ˆ1
p ̄t4`1
 ̇ ̇
pPr p|patp1q  ́ atp1q| ě δatp0qqq3{4
`
ˆ
E1{4
ˆ1
pt4`1
 ̇
` E1{4
ˆ1
p ̄t4`1
 ̇ ̇
pPr p|aptp0q  ́ atp0q| ě δatp1qqq3{4 pby (83) and Hölder’s inequalityq
ď
»

 ̃
225{16 C b25{16
1 b25{64
2 pηtT q1{2 log2pηtT q
δ2a103{64
t p1q
 ̧3{4
`
 ̃
241{16 C b25{16
1 b25{64
2 pηtT q1{2 log2pηtT q
δ2a103{64
t p1q
 ̧3{4fi
fl
104

ˆ
 ́
2 ̈
 ́
2 ` b1pb2{6q1{4a1{4
t p0q
 ̄ ̄
` 8b1b2
b3
δ pby (81), (82) and Corollary (4.15)q
ď 8b1b2
b3
δ ` 8b1b1{4
2 a1{4
t p0q  ̈ 2123{64C3{4b75{64
1 b75{256
2 pηtT q3{8 log3{2pηtT q
δ3{2a309{256
t p1q
ď 8b1b2
b3
δ ` 2315{64a1{4
t p0qC3{4b139{64
1 b139{256
2 pηtT q3{8 log3{2pηtT qδ ́3{2a ́309{256
t p1q
ď 8b1b2
b3
δ ` 2315{64p1  ́ δq ́1{4a1{4
t p1qC3{4b139{64
1 b139{256
2 pηtT q3{8 log3{2pηtT qδ ́3{2a ́309{256
t p1q
ď 8b1b2
b3
δ ` 33C3{4b139{64
1 b139{256
2 pηtT q3{8 log3{2pηtT qδ ́3{2a ́245{256
t p1q . (84)
Hence by (73), (80) and (84), we have
E
„ˇ ˇ ˇ ˇ
1
pt`1
 ́1
p ̄t`1
ˇ ˇ ˇ ˇ
ȷ
ďC ̃ max
#
pηtT q1{4 logpηtT qa ́71{128
t p1q ` pηtT q3{8 log3{2pηtT qδ ́3{2a ́245{256
t p1q,
pηtT q1{4 logpηtT qa ́71{128
t p1q ` pηtκq89{128pηtT q1{4 logpηtT qa ́3{2
t p1q
` pηtT q1{2 log2pηtT qδ ́2a ́2
t p1qpηtκq41{64, δ ` pηtT q3{8 log3{2pηtT qδ ́3{2a ́245{256
t p1q
+
,
where
C ̃ “ max
#«
C 1{2 b25{32
1 b281{128
2 b3
` 257{32C1{2b89{32
1 b185{128
2 b3
ˆ
1` 2
b3
 ̇
ff
,
2283{64 C 3{4 b139{64
1 b139{256
2 , 257{32C1{2b89{32
1 b185{128
2 b3
ˆ
1` 2
b3
 ̇
,
289{32 C 1{2 b121{32
1 b217{128
2 b5{2
3
ˆ
1` 2
b3
 ̇
, 289{16Cb41{16
1 b41{64
2,
8b1b2
b3
, 33C3{4b139{64
1 b139{256
2
+
.
By selecting an appropriate constant δ ą 0 and a suitable threshold in Lemma C.4, we obtain the following simplified result stated in the corollary.
Corollary C.5. Suppose T is large enough. Under Assumptions 1-3 and Condition 1, there exist a constant K2 ą 0 such that:
(1) For any t P rT s such that atp1q ě pηtT q7{10, there holds:
E
„ˇ ˇ ˇ ˇ
1
pt`1
 ́1
p ̄t`1
ˇ ˇ ˇ ˇ
ȷ
ď K2pηtT q ́2{25 .
(2) For any t P rT s such that atp0q ě pηtT q7{10, there holds:
E
„ˇ ˇ ˇ ˇ
1
1  ́ pt`1
 ́1
1  ́ p ̄t`1
ˇ ˇ ˇ ˇ
ȷ
ď K2pηtT q ́2{25 .
105

Proof. We only prove the first part. It is easy to see that when T is large enough, pηtT q7{10 ě pηT T q7{10 ě 5b ́4
1 b ́1
2 . For 0 ă δ ă 1{4, by Lemma C.4, we have
E
„ˇ ˇ ˇ ˇ
1
pt`1
 ́1
p ̄t`1
ˇ ˇ ˇ ˇ
ȷ
ďC ̃ max
#
pηtT q1{4 logpηtT qa ́71{128
t p1q ` pηtT q3{8 log3{2pηtT qδ ́3{2a ́245{256
t p1q,
pηtT q1{4 logpηtT qa ́71{128
t p1q ` pηtκq89{128pηtT q1{4 logpηtT qa ́3{2
t p1q
` pηtT q1{2 log2pηtT qδ ́2a ́2
t p1qpηtκq41{64, δ ` pηtT q3{8 log3{2pηtT qδ ́3{2a ́245{256
t p1q
+
fiC ̃ maxtB1, B2, B3u .
By Corollary B.17, we have ηtκ À ηtT . Then by choosing δ “ pηtT q ́2{25, we have
B1 À logpηtT qpηtT q
1
4  ́ 71
128  ̈ 7
10 ` log3{2pηtT qpηtT q
3
2 ̈ 2
25 ` 3
8  ́ 245
256  ̈ 7
10
ÀpηtT q ́ 2
25 ,
B2 À logpηtT qpηtT q
1
4  ́ 71
128  ̈ 7
10 ` logpηtT qpηtT q
89
128 ` 1
4 ́3
2 ̈ 7
10 ` log2pηtT qpηtT q2 ̈ 2
25 ` 1
2  ́2 ̈ 7
10 ` 41
64
ÀpηtT q ́ 2
25 ,
B3 ÀpηtT q ́ 2
25 ` log3{2pηtT qpηtT q
3
2 ̈ 2
25 ` 3
8  ́ 245
256  ̈ 7
10
ÀpηtT q ́ 2
25 .
Hence there exists constant K2 ą 0 (independent of t and T ) such that
E
„ˇ ˇ ˇ ˇ
1
pt`1
 ́1
p ̄t`1
ˇ ˇ ˇ ˇ
ȷ
ď maxtB1, B2, B3u ď K2pηtT q ́2{25 .
Based on Corollary C.5, the following lemma verifies the first convergence result in (44).
Lemma C.6. Under Assumptions 1-3 and Condition 1, there holds:
E
«
1 T
T
ÿ
t“1
`ytp1q  ́ xxt, β ̊
t p1qy ̆2  ̈
ˇ ˇ ˇ ˇ
1
pt
 ́1
p ̄t
ˇ ˇ ˇ ˇ
ff
Ñ0 .
Proof. Let G “ ␣2 ď t ď T : at ́1p1q ě pηt ́1T q7{10(. Then we can obtain the following decomposition:
E
 ̃
1 T
T
ÿ
t“1
`ytp1q  ́ xxt, β ̊
t p1qy ̆2  ̈
ˇ ˇ ˇ ˇ
1
pt
 ́1
p ̄t
ˇ ˇ ˇ ˇ
 ̧
“1
T
ÿ
tPG ̄
`ytp1q  ́ xxt, β ̊
t p1qy ̆2  ̈ E
„ˇ ˇ ˇ ˇ
1
pt
 ́1
p ̄t
ˇ ˇ ˇ ˇ
ȷ
`1
T
ÿ
tPG
`ytp1q  ́ xxt, β ̊
t p1qy ̆2  ̈ E
„ˇ ˇ ˇ ˇ
1
pt
 ́1
p ̄t
ˇ ˇ ˇ ˇ
ȷ
fiB1 ` B2 . (85)
Define t0 “ 1 and suppose G ̄ “ tt1, . . . , tN u, where t1 ă . . . ă tN . For any t P rT s, by Cauchy-Schwarz inequality, (55), Corollary B.4, Corollary 4.15, Corollary B.17, Assumption 1 and Assumption 3, we have
ErAptp1qs  ́ ErApt ́1p1qs
106

“E
„ 1rZt “ 1s
pt
 ̈ pytp1q  ́ xxt, βtp1qyq2
ȷ
“E “pytp1q  ́ xxt, βtp1qyq2‰
“pytp1q  ́ xxt, β ̊
t p1qyq2 `
t ́1
ÿ
s“1
Π2
t,sy2
s p1qE
„1
ps
 ́1
ȷ
Ày2
t p1q ` xxt, β ̊
t p1qy2 ` Rtppt  ́ 1q _ η ́1
t q ́1
t ́1
ÿ
s“1
|Πt,s|Rsy2
s p1qη1{4
s T 1{4 pCorollary B.4, 4.15 and B.17q
ÀT 1{2 ` RtT 1{4 ` RtηtT 1{8
t ́1
ÿ
s“1
|Πt,s|Rs  ̈ R ́1{2
s y2
s p1q pAssumption 1 and (55)q
ÀT 1{2 ` T 1{2pT R ́4
t q ́1{4 ` T 1{8 ́1{2R1 ́2`1 ́1{2
t
 ̃t ́1
ÿ
s“1
Π2
t,s
 ̧1{2  ̃t ́1 ÿ
s“1
y4
s p1q
 ̧1{2
pCauchy-Schwarzq
ÀT 1{2 ` T 1{8 ́1{2`1{2R ́1{2
t Π1{2
t,t pAssumption 1 and Assumption 3q
ÀT 1{2 ` T 1{8R ́1{2`1
t η1{2
t pCorollary B.4q
“T 1{2 ` T 1{8 ́1{4R ́1{2`1 ́1
t
ÀT 1{2 ` T  ́1{8R ́1{2
t
ÀT 1{2 .
Hence there exists constant K3 ą 0, such that ErAptp1qs  ́ ErApt ́1p1qs ď K3T 1{2 for any t P rT s. Moreover, the proof also establishes that pytp1q  ́ xxt, β ̊
t p1qyq2 ď ErAptp1qs  ́ ErApt ́1p1qs. Hence by the definition of G ̄, Corollary 4.15, Corollary B.17 and Assumption 3, we have
B1 ÀT  ́1 ÿ
tPG ̄
 ́
ErAptp1qs  ́ ErApt ́1p1qs
 ̄
pηtT q1{4 pCorollary 4.15 and Corollary B.17q
“T  ́1
N
ÿ
k“1
 ́
ErAptk p1qs  ́ ErAptk ́1 p1qs
 ̄
pηtk T q1{4
“T  ́1
N  ́1
ÿ
k“1
ErAptk p1qs
 ́
pηtk T q1{4  ́ pηtk`1 T q1{4 ̄
` T  ́1 ErAptN p1qspηtN T q1{4  ́ T  ́1 ErApt0 p1qspηt1 T q1{4
ďT  ́1
N  ́1
ÿ
k“1
 ́
η ́1
tk ́1  ̈ ηtk ́1 ErAptk ́1p1qs ` K3T 1{2 ̄  ́
pηtk T q1{4  ́ pηtk`1 T q1{4 ̄
` T  ́1  ́
η ́1
tN  ́1  ̈ ηtN  ́1 ErAptN  ́1p1qs ` K3T 1{2 ̄
pηtN T q1{4
ďT  ́1
N  ́1
ÿ
k“1
η ́1
tk ́1pηtk ́1T q7{10  ́
pηtk T q1{4  ́ pηtk`1 T q1{4 ̄
` T  ́1η ́1
tN  ́1pηtN  ́1T q7{10pηtN T q1{4
` K3T  ́1{2
«N  ́1
ÿ
k“1
 ́
pηtk T q1{4  ́ pηtk`1 T q1{4 ̄
` pηtN T q1{4
ff
pby the definition of G ̄q
ďK3T  ́1{2pηt1 T q1{4 ` T  ́1
N  ́1
ÿ
k“1
η ́1
tk pηtk T q7{10  ́
pηtk T q1{4  ́ pηtk`1 T q1{4 ̄
` T  ́1η ́1
tN pηtN T q7{10pηtN T q1{4
ďK3T  ́1{2`1{8 ` pηtN T q ́1`7{10`1{4 `
N  ́1
ÿ
k“1
pηtk T q ́1`7{10  ́
pηtk T q1{4  ́ pηtk`1 T q1{4 ̄
ďop1q ` pηT T q ́1{20 `
N  ́1
ÿ
k“1
 ́
pηtk T q1{4 ̄ ́6{5  ́
pηtk T q1{4  ́ pηtk`1 T q1{4 ̄
pAssumption 3q
107

ďop1q `
N  ́1
ÿ
k“1
ż pηtk T q1{4
pηtk`1 T q1{4
x ́6{5dx
ďop1q `
ż pηt1 T q1{4
pηtN T q1{4
x ́6{5dx
Àop1q ` pηtN T q ́ 1
4 ̈1
5
ďop1q ` pηT T q ́1{20
Ñ0 pAssumption 3q . (86)
By the definition of set G and Corollary C.5, we have
max
tPG E
„ˇ ˇ ˇ ˇ
1
pt
 ́1
p ̄t
ˇ ˇ ˇ ˇ
ȷ
À max
tPG pηt ́1T q ́2{25 ď pηT T q ́2{25 .
Hence by Lemma B.11 and Assumption 3, we can bound B2 by:
B2 “ 1
T
ÿ
tPG
`ytp1q  ́ xxt, β ̊
t p1qy ̆2  ̈ E
„ˇ ˇ ˇ ˇ
1
pt
 ́1
p ̄t
ˇ ˇ ˇ ˇ
ȷ
ďT  ́1 ÿ
tPG
`ytp1q  ́ xxt, β ̊
t p1qy ̆2 pηT T q ́2{25
ÀT  ́1  ̈ T pηT T q ́2{25 pLemma B.11q
ďpηT T q ́2{25
Ñ0 pAssumption 3q . (87)
Hence by (85), (86), (87), we have
E
 ̃
1 T
T
ÿ
t“1
`ytp1q  ́ xxt, β ̊
t p1qy ̆2  ̈
ˇ ˇ ˇ ˇ
1
pt
 ́1
p ̄t
ˇ ˇ ˇ ˇ
 ̧
“ B1 ` B2 Ñ 0 .
Before verifying the remaining convergence results in (44), we first establish the explicit form of the tracking error terms.
Lemma C.7. The expected prediction tracking terms can be computed as
E
”
xxt, β ̊
t p1q  ́ βtp1qy2ı
“
t ́1
ÿ
s“1
Π2
t,sy2
s p1q E
”1
ps
 ́1
ı
,
E
”
xxt, β ̊
t p0q  ́ βtp0qy2ı
“
t ́1
ÿ
s“1
Π2
t,sy2
s p0q E
”1
1  ́ ps
 ́1
ı
.
The remaining convergence results in (44) are easier to establish using the previous lemmas.
Lemma C.8. Under Assumptions 1-3 and Condition 1, there holds:
E
«
1 T
T
ÿ
t“1
xxt, βtp1q  ́ β ̊
t p1qy2  ̈
ˇ ˇ ˇ ˇ
1
pt
 ́1
p ̄t
ˇ ˇ ˇ ˇ
ff
Ñ0 .
Proof. By Lemma B.15, Corollary 4.15, Corollary B.17, Proposition 5.4 and Lemma C.7, We have
E
«
1 T
T
ÿ
t“1
xxt, βtp1q  ́ β ̊
t p1qy2  ̈
ˇ ˇ ˇ ˇ
1
pt
 ́1
p ̄t
ˇ ˇ ˇ ˇ
ff
108

ÀT  ́1`7{26E
«T ÿ
t“1
R ́4{11
t xxt, βtp1q  ́ β ̊
t p1qy2
ff
pProposition 5.4q
“T  ́1`7{26
T
ÿ
t“1
R ́4{11
t
t ́1
ÿ
s“1
Π2
t,sy2
s p1qE
„1
ps
 ́1
ȷ
pLemma C.7q
ÀT  ́1`7{26`1{4
T
ÿ
t“1
R ́4{11
t
t ́1
ÿ
s“1
Π2
t,sy2
s p1qη1{4
s pCorollary 4.15 and Corollary B.17q
ÀT  ́1`7{26`1{4 ́1{8
T
ÿ
t“1
R ́4{11
t
t ́1
ÿ
s“1
R ́1{2
s Π2
t,sy2
s p1q
ÀT  ́1`7{26`1{4 ́1{8  ̈ T 3{4 ́p4{11`1{2q{4 pLemma B.15q
“T  ́41{572
Ñ0 .
Lemma C.9. Under Assumptions 1-3 and Condition 1, there holds:
E
«
1 T
T
ÿ
t“1
xxt, βtp1q  ́ β ̊
t p1qy2  ̈
ˇ ˇ ˇ ˇ
1 p ̄t
 ́1
ˇ ˇ ˇ ˇ
ff
Ñ0 .
Proof. Note that the almost sure bound in Proposition 5.4 also serves as an upper bound for 1{p ̄t. Then by the same proof in Lemma C.8, the result is proved.
Lemma C.10. Under Assumptions 1-3 and Condition 1, there holds:
E
«
1 T
T
ÿ
t“1
pytp1q  ́ xxt, β ̊
t p1qyqxxt, βtp1q  ́ β ̊
t p1qy  ̈
ˇ ˇ ˇ ˇ
1
pt
 ́1
p ̄t
ˇ ˇ ˇ ˇ
ff
Ñ0 .
Proof. By Lemma C.6, Lemma C.8 and Cauchy-Schwarz inequality, we have
E
«
1 T
T
ÿ
t“1
pytp1q  ́ xxt, β ̊
t p1qyqxxt, βtp1q  ́ β ̊
t p1qy  ̈
ˇ ˇ ˇ ˇ
1
pt
 ́1
p ̄t
ˇ ˇ ˇ ˇ
ff
ď
 ̃
E
«
1 T
T
ÿ
t“1
pytp1q  ́ xxt, β ̊
t p1qyq2  ̈
ˇ ˇ ˇ ˇ
1
pt
 ́1
p ̄t
ˇ ˇ ˇ ˇ
ff ̧1{2  ̃
E
«
1 T
T
ÿ
t“1
xxt, βtp1q  ́ β ̊
t p1qy2  ̈
ˇ ˇ ˇ ˇ
1
pt
 ́1
p ̄t
ˇ ˇ ˇ ˇ
ff ̧1{2
Ñ0 .
Lemma C.11. Under Assumptions 1-3 and Condition 1, there holds
E
«
1 T
T
ÿ
t“1
pytp1q  ́ xxt, β ̊
t p1qyqxxt, βtp1q  ́ β ̊
t p1qy  ̈
ˇ ˇ ˇ ˇ
1 p ̄t
 ́1
ˇ ˇ ˇ ˇ
ff
Ñ0 .
Proof. By Cauchy-Schwarz inequality, Lemma B.11, Lemma B.15, Lemma C.7, Lemma 4.14 and Corollary B.17, we have
E
«
1 T
T
ÿ
t“1
|ytp1q  ́ xxt, β ̊
t p1qy||xxt, βtp1q  ́ β ̊
t p1qy|  ̈
ˇ ˇ ˇ ˇ
1 p ̄t
 ́1
ˇ ˇ ˇ ˇ
ff
ÀE
«
1 T
T
ÿ
t“1
|ytp1q  ́ xxt, β ̊
t p1qy||xxt, βtp1q  ́ β ̊
t p1qy|  ̈ η1{4
t T 1{4
ff
pLemma 4.14 and Corollary B.17q
109

ÀT 1{8E
«
1 T
T
ÿ
t“1
R ́1{2
t |ytp1q  ́ xxt, β ̊
t p1qy||xxt, βtp1q  ́ β ̊
t p1qy|
ff
ÀT  ́1`1{8
 ̃T ÿ
t“1
pytp1q  ́ xxt, β ̊
t p1qyq2
 ̧1{2  ̃
E
«T ÿ
t“1
R ́1
t xxt, βtp1q  ́ β ̊
t p1qy2
ff ̧1{2
pCauchy-Schwarzq
ÀT  ́1`1{8`1{2
 ̃T ÿ
t“1
R ́1
t
t ́1
ÿ
s“1
Π2
t,sy2
s p1qE
„1
ps
 ́1
ȷ
 ̧1{2
pLemma B.11 and Lemma C.7q
ÀT  ́1`1{8`1{2`1{16
 ̃T ÿ
t“1
R ́1
t
t ́1
ÿ
s“1
R ́1{2
s Π2
t,sy2
s p1q
 ̧1{2
pLemma 4.14 and Corollary B.17q
ÀT  ́1`1{8`1{2`1{16  ̈
 ́
T 3{4 ́p1`1{2q{4 ̄1{2
pLemma B.15q
“T  ́1{8
Ñ0 .
Based on Lemma C.6-C.11, we now verify the first convergence result in (42) in the following lemma.
Lemma C.12. Under Assumptions 1-3 and Condition 1, there holds:
1 T
«T ÿ
t“1
tytp1q  ́ xxt, βtp1qyu2  ̈
ˆ1
pt
 ́1
 ̇
 ́E
«T ÿ
t“1
tytp1q  ́ xxt, βtp1qyu2  ̈
ˆ1
pt
 ́1
 ̇
ffff
ÝpÑ 0 ,
1 T
«T ÿ
t“1
tytp0q  ́ xxt, βtp0qyu2  ̈
ˆ1
1  ́ pt
 ́1
 ̇
 ́E
«T ÿ
t“1
tytp0q  ́ xxt, βtp0qyu2  ̈
ˆ1
1  ́ pt
 ́1
 ̇
ffff
ÝpÑ 0 .
Proof. By Markov’s inequality and Lemma C.6, we have
ˇ ˇ ˇ ˇ ˇ
1 T
T
ÿ
t“1
`ytp1q  ́ xxt, β ̊
t p1qy ̆2  ̈
ˆ1
pt
 ́1
p ̄t
 ̇
ˇ ˇ ˇ ˇ ˇ
ď1
T
T
ÿ
t“1
`ytp1q  ́ xxt, β ̊
t p1qy ̆2  ̈
ˇ ˇ ˇ ˇ
1
pt
 ́1
p ̄t
ˇ ˇ ˇ ˇ
ÝpÑ 0 .
On the other hand, we also have
ˇ ˇ ˇ ˇ ˇ
E
«
1 T
T
ÿ
t“1
`ytp1q  ́ xxt, β ̊
t p1qy ̆2  ̈
ˆ1
pt
 ́1
p ̄t
 ̇
ffˇ ˇ ˇ ˇ ˇ
ďE
«
1 T
T
ÿ
t“1
`ytp1q  ́ xxt, β ̊
t p1qy ̆2  ̈
ˇ ˇ ˇ ˇ
1
pt
 ́1
p ̄t
ˇ ˇ ˇ ˇ
ff
Ñ0 .
These two convergence results imply that
1 T
T
ÿ
t“1
`ytp1q  ́ xxt, β ̊
t p1qy ̆2  ̈
ˆ1
pt
 ́1
p ̄t
 ̇
 ́E
«
1 T
T
ÿ
t“1
`ytp1q  ́ xxt, β ̊
t p1qy ̆2  ̈
ˆ1
pt
 ́1
p ̄t
 ̇
ff
ÝpÑ 0 .
By Lemma C.8, Lemma C.9, Lemma C.10 and Lemma C.11, we can similarly prove the other four convergence results, which verifies the following:
1 T
«T ÿ
t“1
tytp1q  ́ xxt, βtp1qyu2  ̈
ˆ1
pt
 ́1
 ̇
 ́E
«T ÿ
t“1
tytp1q  ́ xxt, βtp1qyu2  ̈
ˆ1
pt
 ́1
 ̇
ffff
ÝpÑ 0 .
The second convergence is proved due to the symmetry.
We can similarly verify the final convergence result in (42) in the following lemma.
110

Lemma C.13. Under Assumptions 1-3 and Condition 1, there holds:
1 T
«T ÿ
t“1
tytp1q  ́ xxt, βtp1qyu tytp0q  ́ xxt, βtp0qyu  ́ E
«T ÿ
t“1
tytp1q  ́ xxt, βtp1qyu tytp0q  ́ xxt, βtp0qyu
ffff
ÝpÑ 0 .
Proof. We proof the result by similar method as in Lemma C.12. First, we decompose the random term:
1 T
T
ÿ
t“1
pytp1q  ́ xxt, βtp1qyq pytp0q  ́ xxt, βtp0qyq
“1
T
T
ÿ
t“1
pytp1q  ́ xxt, βtp1qyq `ytp0q  ́ xxt, β ̊
t p0qy ̆ ` 1
T
T
ÿ
t“1
pytp1q  ́ xxt, βtp1qyq xxt, β ̊
t p0q  ́ βtp0qy
“1
T
T
ÿ
t“1
`ytp1q  ́ xxt, β ̊
t p1qy ̆ `ytp0q  ́ xxt, β ̊
t p0qy ̆ ` 1
T
T
ÿ
t“1
pytp1q  ́ xxt, βtp1qyq xxt, β ̊
t p0q  ́ βtp0qy
`1
T
T
ÿ
t“1
`ytp0q  ́ xxt, β ̊
t p0qy ̆ xxt, β ̊
t p1q  ́ βtp1qy .
Note that the first term is nonrandom. Hence by Markov’s inequality, it suffices to show that
E
«
1 T
T
ÿ
t“1
|ytp1q  ́ xxt, βtp1qy| |xxt, β ̊
t p0q  ́ βtp0qy|
ff
Ñ0 ,
E
«
1 T
T
ÿ
t“1
ˇ
ˇytp0q  ́ xxt, β ̊
t p0qy
ˇ
ˇ |xxt, β ̊
t p1q  ́ βtp1qy|
ff
Ñ0 .
By Lemma C.7, Lemma B.15, Lemma 4.14 and Corollary B.17, we have
E
«T ÿ
t“1
xxt, β ̊
t p1q  ́ βtp1qy2
ff
“
T
ÿ
t“1
t ́1
ÿ
s“1
Π2
t,sy2
s p1qE
„1
ps
 ́1
ȷ
ÀT 1{8
T
ÿ
t“1
t ́1
ÿ
s“1
R ́1{2
s Π2
t,sy2
s p1q
ÀT 1{8  ̈ T 3{4 ́1{2{4
“T 3{4 . (88)
A similar result can be derived for E
”
řT
t“1xxt, β ̊
t p0q  ́ βtp0qy2
ı
. Hence by (88), CauchySchwarz inequality, Lemma B.11 and Assumption 3, we have
E
«
1 T
T
ÿ
t“1
|ytp1q  ́ xxt, βtp1qy| |xxt, β ̊
t p0q  ́ βtp0qy|
ff
ď1
T
T
ÿ
t“1
 ́
E pytp1q  ́ xxt, βtp1qyq2 ̄1{2 `Exxt, β ̊
t p0q  ́ βtp0qy2 ̆1{2 pCauchy-Schwarz inequalityq
ď1
T
 ̃
E
«T ÿ
t“1
pytp1q  ́ xxt, βtp1qyq2
ff ̧1{2  ̃ T ÿ
t“1
Exxt, β ̊
t p0q  ́ βtp0qy2
 ̧1{2
pCauchy-Schwarz inequalityq
ÀT  ́1`3{8  ̈
 ̃
E
«T ÿ
t“1
`ytp1q  ́ xxt, β ̊
t p1qy ` xxt, β ̊
t p1q  ́ βtp1qy ̆2
ff ̧1{2
pby (88)q
“T  ́5{8  ̈
 ̃T ÿ
t“1
`ytp1q  ́ xxt, β ̊
t p1qy ̆2 ` 2
T
ÿ
t“1
`ytp1q  ́ xxt, β ̊
t p1qy ̆ E “xxt, β ̊
t p1q  ́ βtp1qy‰
111

`E
«T ÿ
t“1
xxt, β ̊
t p1q  ́ βtp1qy2
ff  ̧1{2
“T  ́5{8  ̈
 ̃T ÿ
t“1
`ytp1q  ́ xxt, β ̊
t p1qy ̆2 ` E
«T ÿ
t“1
xxt, β ̊
t p1q  ́ βtp1qy2
ff ̧1{2
ÀT  ́5{8`1{2 pLemma B.11 and (88)q
“T  ́1{8
Ñ0 .
Hence the result is proved by similar argument as in Lemma C.12.
By Lemma C.12 and Lemma C.13, we can verify the stable variance condition in the following lemma:
Lemma C.14. Under Assumptions 1-4 and Condition 1, there holds: V 2
T
ÝpÑ 1.
Proof. By Lemma C.12, Lemma C.13 and the simplified form of V 2
T , the result is proved.
C.2.2 Conditional Lyapunov Condition
We first derive a simplified form of the conditional Lyapunov condition. Setting δ “ 2, we obtain the following result by applying the Cauchy-Schwarz inequality:
T
ÿ
t“1
ErX 4
t,T |Ft ́1,T s À 1
T 4pVarpτˆqq2
T
ÿ
t“1
E
«
`ytp1q  ́ xxt, βtp1qy ̆4  ̈
ˆ 1rZt “ 1s
pt
 ́1
 ̇4 ˇ
ˇ
ˇFt ́1,T
ff
`1
T 4pVarpτˆqq2
T
ÿ
t“1
E
«
`ytp0q  ́ xxt, βtp0qy ̆4  ̈
ˆ 1rZt “ 0s
1  ́ pt
 ́1
 ̇4 ˇ
ˇ
ˇFt ́1,T
ff
pCauchy-Schwarzq
À1
T 4pVarpτˆqq2
T
ÿ
t“1
„
`ytp1q  ́ xxt, βtp1qy ̆4  ̈ 1
pt3
`
`ytp0q  ́ xxt, βtp0qy ̆4  ̈ 1
p1  ́ ptq3
ȷ
.
By Markov’s inequality and non-superefficiency condition (Corollary 5.2), it suffices to prove that
1 T2
T
ÿ
t“1
E
„
`ytp1q  ́ xxt, βtp1qy ̆4  ̈ 1
pt3
ȷ
Ñ0 ,
1 T2
T
ÿ
t“1
E
„
`ytp0q  ́ xxt, βtp0qy ̆4  ̈ 1
p1  ́ ptq3
ȷ
Ñ0 .
Owing to the symmetry between the treated and control groups, we only need to prove the first convergence. Using the inequality pa ` bq4 ď 8a4 ` 8b4, it suffices to show that
1 T2
T
ÿ
t“1
E
„
`ytp1q  ́ xxt, β ̊
t p1qy ̆4  ̈ 1
pt3
ȷ
Ñ 0,
1 T2
T
ÿ
t“1
E
„
xxt, βtp1q  ́ β ̊
t p1qy4  ̈ 1
pt3
ȷ
Ñ 0. (89)
The two convergence results in (89) are proved separately in Lemma C.15 and Lemma C.18.
Lemma C.15. Under Assumptions 1-3 and Condition 1, there holds:
1 T2
T
ÿ
t“1
E
„
`ytp1q  ́ xxt, β ̊
t p1qy ̆4  ̈ 1
pt3
ȷ
Ñ0 .
112

Proof. By Lemma B.7, Corollary 4.15, Corollary B.17 and Assumption 3, we have
1 T2
T
ÿ
t“1
E
„
`ytp1q  ́ xxt, β ̊
t p1qy ̆4  ̈ 1
pt3
ȷ
“1
T2
T
ÿ
t“1
`ytp1q  ́ xxt, β ̊
t p1qy ̆4E
„1
pt3
ȷ
ÀT  ́2
T
ÿ
t“1
pηtT q3{4 `ytp1q  ́ xxt, β ̊
t p1qy ̆4 pCorollary 4.15 and Corollary B.17q
ďT  ́2`3{4
T
ÿ
t“1
η ́1{4
t  ̈ ηt
`ytp1q  ́ xxt, β ̊
t p1qy ̆4
ďT  ́5{4η ́1{4
T  ̈ R2
T T 1{2 pby Lemma B.7 and ηT ď ηtq
“pT R ́4
T q ́5{8
Ñ0 pAssumption 3q .
Before verifying the second convergence result in (89), we first establish the following result, which is a direct corollary of Lemma C.3.
Corollary C.16. Under Assumptions 1-3 and Condition 1, for any t P rT s, there holds:
max
!
E
Ap2
t p1q, EAp2
t p0q
)
ď  ̃κ ,
where  ̃κ “ p4c41 ` op1qqT 2 is a constant that does not depend on t.
Proof. We only prove the result for EApt2p1q. By Lemma C.3 and Assumption 3, we have
VarpAptp1qq Àη ́2
t pηtT q1{2 log2pηtT q
 ́
2 ` b1pb2{6q1{4a1{4
t p0q
 ̄25{16
pLemma C.3q
ÀT 2  ̈ pηtT q ́2pηtT q1{2 log2pηtT qpηtT q
1
4  ̈ 25
16
“T 2  ̈ pηtT q ́71{64 log2pηtT q
“opT 2q pAssumption 3q .
Hence by Corollary B.17 we have
E
Ap2
t p1q “pEAptp1qq2 ` VarpAptp1qq ď p2c2
1 ` op1qq2T 2 ` opT 2q “ p4c4
1 ` op1qqT 2 .
Based on Corollary C.16, we refine the result of Lemma B.18 in the following lemma.
Lemma C.17. Under Assumptions 1-3 and Condition 1, there holds:
max
1ďs3 ‰s2 ‰s1 ďT
ˇ ˇ ˇ ˇ ˇ
E
«
ˆ 1rZs1 “ 1s
ps1
 ́1
 ̇2 ˆ 1rZs2 “ 1s
ps2
 ́1
 ̇ ˆ 1rZs3 “ 1s
ps3
 ́1
 ̇
ffˇ ˇ ˇ ˇ ˇ
“ OpT 81{512q .
Proof. By Corollary C.16 and similar method in Corollary 4.15, we can prove that for any 0 ď k ď 8 and any t P rT s, there holds:
max
"
E
„1
ptk
ȷ
,E
„1
p1  ́ ptqk
ȷ*
ď pηtT qk{4 .
113

By this result, we can sharpen the uniform upper bound derived in Lemma B.18. By similar method as in the proof of Lemma B.18, we can show
max
1ďs3 ‰s2 ‰s1 ďT
ˇ ˇ ˇ ˇ ˇ
E
«
ˆ 1rZs1 “ 1s
ps1
 ́1
 ̇2 ˆ 1rZs2 “ 1s
ps2
 ́1
 ̇ ˆ 1rZs3 “ 1s
ps3
 ́1
 ̇
ffˇ ˇ ˇ ˇ ˇ
À max
1ďs3ăs2ăs1ďT E
„1
ps1
1rZs2 “ 1s
ps2
1rZs3 “ 1s
ps3
ȷ
ď max
1ďs3 ăs2 ăs1 ďT
ˆ
E
„1
ps81
ȷ ̇1{8  ̃
E
«
1rZs2 “ 1s
p8{7
s2
1rZs3 “ 1s
p8{7
s3
ff ̧7{8
ď max
1ďs3 ăs2 ăs1 ďT
ˆ
E
„1
ps81
ȷ ̇1{8  ̃
E
«
1
p1{7
s2
1rZs3 “ 1s
p8{7
s3
ff ̧7{8
ď max
1ďs3 ăs2 ăs1 ďT
ˆ
E
„1
ps81
ȷ ̇1{8 ˆ
E
„1
ps82
ȷ ̇ 7
8 ̈ 1
56
 ̃
E
«
1rZs3 “ 1s
p
8
7  ̈ 56
55
s3
ff ̧ 7
8  ̈ 55
56
“ max
1ďs3 ăs2 ăs1 ďT
ˆ
E
„1
ps81
ȷ ̇1{8 ˆ
E
„1
ps82
ȷ ̇ 7
8 ̈ 1
56
 ̃
E
«
1
p
9 s535
ff ̧ 7
8  ̈ 55
56
À pη1T qp8 ̈ 1
8 `8 ̈ 7
8 ̈ 1
56 ` 9
55  ̈ 7
8  ̈ 55
56 q{4
“ pη1T q81{256 .
Hence we have
max
1ďs3 ‰s2 ‰s1 ďT
ˇ ˇ ˇ ˇ ˇ
E
«
ˆ 1rZs1 “ 1s
ps1
 ́1
 ̇2 ˆ 1rZs2 “ 1s
ps2
 ́1
 ̇ ˆ 1rZs3 “ 1s
ps3
 ́1
 ̇
ffˇ ˇ ˇ ˇ ˇ
“ OpT 81{512q .
We now verify the second convergence result in (89) with the help of Lemma C.17.
Lemma C.18. Under Assumptions 1-3 and Condition 1, there holds:
1 T2
T
ÿ
t“1
E
„
xxt, βtp1q  ́ β ̊
t p1qy4  ̈ 1
pt3
ȷ
Ñ0 .
Proof. By Assumption 3, Proposition 5.4 and similar method as in the proof of Corollary B.19 using the refined bound in Lemma C.17, we have
1 T2
T
ÿ
t“1
E
„1
pt3
xxt, βtp1q  ́ β ̊
t p1qy4
ȷ
ÀT  ́2`21{26
T
ÿ
t“1
E
”
R ́12{11
t xxt, βtp1q  ́ β ̊
t p1qy4ı
pProposition 5.4q
ÀT  ́31{26
T
ÿ
t“1
E
“R ́1
t xxt, βtp1q  ́ β ̊
t p1qy4‰
ÀT  ́31{26 ́
R8
T η3
T T  ̈ T 3{8 ` R13{2
T η7{4
T T 7{8  ̈ T 5{16 ` R6
T η2
T T  ̈ T 9{32
` R4
T ηT T  ̈ T 81{512 ̄
pusing similar proof as in Corollary B.19 and Lemma C.17q
“pT R ́4
T q ́137{104  ̈ R ́85{26
T ` pT R ́4
T q ́183{208  ̈ R ́27{52
T ` pT R ́4
T q ́379{416  ̈ R ́171{104
T
114

` pT R ́4
T q ́3555{6656  ̈ R ́227{1664
T
“op1q pAssumption 3q .
Based on Lemma C.15 and Lemma C.18. We now verify conditional Lyapunov condition.
Lemma C.19. Under Assumptions 1-4 and Condition 1, there holds řT
t“1 ErX4
t,T |Ft ́1,T s ÝpÑ 0.
Proof. By Corollary 5.2, Cauchy-Schwarz inequality and AM-GM inequality, we have
E
«T ÿ
t“1
ErX 4
t,T |Ft ́1,T s
ff
À1
T2
T
ÿ
t“1
E
„
`ytp1q  ́ xxt, β ̊
t p1qy ̆4  ̈ 1
pt3
ȷ
`1
T2
T
ÿ
t“1
E
„
xxt, βtp1q  ́ β ̊
t p1qy4  ̈ 1
pt3
ȷ
`1
T2
T
ÿ
t“1
E
„
`ytp0q  ́ xxt, β ̊
t p0qy ̆4  ̈ 1
p1  ́ ptq3
ȷ
`1
T2
T
ÿ
t“1
E
„
xxt, βtp0q  ́ β ̊
t p0qy4  ̈ 1
p1  ́ ptq3
ȷ
,
which should converge to 0 by Lemma C.15, Lemma C.18 and symmetric results regarding the controlled group (k “ 0). This implies that the conditional Lyapunov condition should hold by Markov’s inequality.
Finally, under Lemma C.14 and Lemma C.19, we can verify the central limit theorem:
Theorem C.20. Under Assumptions 1-4 and Condition 1, the standardized adaptive HorvitzThompson estimator is asymptotically standard normal:
τˆ  ́ τ
aVarpτˆq
ÝdÑ N p0, 1q .
C.3 Non-superefficiency
In this section, we verify the non-superefficiency condition in Corollary 5.2. We first introduce the following notations:
ArT p1q “
T
ÿ
t“1
1rZt “ 1s
pt
 ̈ pytp1q  ́ xxt, β ̊
t p1qyq2 ,
ArT p0q “
T
ÿ
t“1
1rZt “ 0s 1  ́ pt
 ̈ pytp0q  ́ xxt, β ̊
t p0qyq2 ,
p ̃ “ argminpPp0,1q
T
ÿ
t“1
 ̃
1rZt “ 1s
pt
 ̈ pytp1q  ́ xxt, β ̊
t p1qyq2  ̈ 1
p
` 1rZt “ 0s
1  ́ pt
 ̈ pytp0q  ́ xxt, β ̊
t p0qyq2  ̈ 1
1  ́ p ` η ́1
T Ψppq
 ̧
,
p ̆ “ argminpPp0,1q
T
ÿ
t“1
 ̃
pytp1q  ́ xxt, β ̊
t p1qyq2  ̈ 1
p ` pytp0q  ́ xxt, β ̊
t p0qyq2  ̈ 1
1  ́ p ` η ́1
T Ψppq
 ̧
.
In Proposition 4.11, we have shown that the upper bound of the prediction regret is sublinear. The following lemma further establishes that the lower bound of the prediction regret is also sublinear.
115

Lemma C.21. Under Assumptions 1-3 and Condition 1, for k P t0, 1u, there holds: ErRpred
T s“ opT q.
Proof. We only prove the result for k “ 1. By Lemma 4.9 and Assumption 3, we have already proved that the positive part of ErRpred
T s is of order opT q. It suffice to prove that the negative part is also of order opT q. By direct calculation, we have
ltpβtp1q, βtp0qq
“ Ep0q
Ep1q pytp1q  ́ xxt, βtp1qyq2 ` Ep1q
Ep0q pytp0q  ́ xxt, βtp0qyq2 ` 2 pytp1q  ́ xxt, βtp1qyq  ̈ pytp0q  ́ xxt, βtp0qyq
“ Ep0q
E p1q
`ytp1q  ́ xxt, β ̊
t p1qy ̆2 ` 2Ep0q
E p1q
`ytp1q  ́ xxt, β ̊
t p1qy ̆ xxt, β ̊
t p1q  ́ βtp1qy ` Ep0q
Ep1q xxt, β ̊
t p1q  ́ βtp1qy2
` Ep1q
E p0q
`ytp0q  ́ xxt, β ̊
t p0qy ̆2 ` 2Ep1q
E p0q
`ytp0q  ́ xxt, β ̊
t p0qy ̆ xxt, β ̊
t p0q  ́ βtp0qy ` Ep1q
Ep0q xxt, β ̊
t p0q  ́ βtp0qy2
` 2 `ytp1q  ́ xxt, β ̊
t p1qy ̆ `ytp0q  ́ xxt, β ̊
t p0qy ̆ ` 2 `ytp1q  ́ xxt, β ̊
t p1qy ̆ xxt, β ̊
t p0q  ́ βtp0qy
` 2 `ytp0q  ́ xxt, β ̊
t p0qy ̆ xxt, β ̊
t p1q  ́ βtp1qy ` xxt, β ̊
t p1q  ́ βtp1qyxxt, β ̊
t p0q  ́ βtp0qy .(90)
Since Erβtpkqs “ β ̊
t pkq for any k P t0, 1u and t P rT s, terms 2, 5, 8 and 9 in (90) have expectation as 0. We denote
L ̄tpβp1q, βp0qq “
t ́1
ÿ
s“1
lspβp1q, βp0qq ` η ́1
t ́1mpβp1q, βp0qq
and let pβr ̊
t p1q, βr ̊
t p0qq denote its minimizer. Then by (88) and similar calculation as in Lemma 4.9, we have
ErRpred
Ts
“E
«T ÿ
t“1
ltpβtp1q, βtp0qq  ́
T
ÿ
t“1
ltpβ ̊p1q, β ̊p0qq
ff
“
T
ÿ
t“1
ltpβ ̊
t p1q, β ̊
t p0qq  ́
T
ÿ
t“1
ltpβ ̊p1q, β ̊p0qq
` Ep1q
Ep0q E
«T ÿ
t“1
xxt, β ̊
t p1q  ́ βtp1qy2
ff
` Ep0q
Ep1q E
«T ÿ
t“1
xxt, β ̊
t p0q  ́ βtp0qy2
ff
` 2E
«T ÿ
t“1
xxt, β ̊
t p1q  ́ βtp1qyxxt, β ̊
t p0q  ́ βtp0qy
ff
“opT q `
T
ÿ
t“1
ltpβ ̊
t p1q, β ̊
t p0qq  ́
T
ÿ
t“1
ltpβ ̊p1q, β ̊p0qq pby (88)q
“opT q ` η ́1
T `1mpβ ̊p1q, β ̊p0qq `
T
ÿ
t“1
ltpβ ̊
t p1q, β ̊
t p0qq ` L1pβ ̊
1 p1q, β ̊
1 p0qq  ́ LT `1pβ ̊
T `1p1q, β ̊
T `1p0qq
` LT `1pβ ̊
T `1p1q, β ̊
T `1p0qq  ́ LT `1pβ ̊p1q, β ̊p0qq
“opT q ` η ́1
T `1mpβ ̊p1q, β ̊p0qq ` LT `1pβ ̊
T `1p1q, β ̊
T `1p0qq  ́ LT `1pβ ̊p1q, β ̊p0qq
`
T
ÿ
t“1
ltpβ ̊
t p1q, β ̊
t p0qq `
T
ÿ
t“1
`Ltpβ ̊
t p1q, β ̊
t p0qq  ́ Lt`1pβ ̊
t`1p1q, β ̊
t`1p0qq ̆
“opT q ` η ́1
T `1mpβ ̊p1q, β ̊p0qq ` LT `1pβ ̊
T `1p1q, β ̊
T `1p0qq  ́ LT `1pβ ̊p1q, β ̊p0qq
116

`
T
ÿ
t“1
pL ̄ t`1 pβ  ̊
t p1q, β ̊
t p0qq  ́ L ̄t`1pβ ̊
t`1p1q, β ̊
t`1p0qqq
`
T
ÿ
t“1
`L ̄ t`1 pβ  ̊
t`1p1q, β ̊
t`1p0qq  ́ Lt`1pβ ̊
t`1p1q, β ̊
t`1p0qq ̆
ěopT q ` `η ́1
T `1mpβ ̊p1q, β ̊p0qq ` LT `1pβ ̊
T `1p1q, β ̊
T `1p0qq  ́ LT `1pβ ̊p1q, β ̊p0qq ̆
`
T
ÿ
t“1
`η ́1
t  ́ η ́1
t`1
 ̆ mpβ ̊
t`1p1q, β ̊
t`1p0qq
`
T
ÿ
t“1
pL ̄ t`1 pβr  ̊
t`1p1q, βr ̊
t`1p0qq  ́ L ̄t`1pβ ̊
t`1p1q, β ̊
t`1p0qqq (optimality of pβr ̊
t`1p1q, βr ̊
t`1p0qq)
fiopT q ` S1 ` S2 ` S3 . (91)
For simplicity, we denote Y tp1q “ py1p1q, . . . , ytp1qq⊺ and Y tp0q “ py1p0q, . . . , ytp0qq⊺ for t P rT s. By direct calculation, we have
S1 “η ́1
T `1mpβ ̊p1q, β ̊p0qq ` LT `1pβ ̊
T `1p1q, β ̊
T `1p0qq  ́ LT `1pβ ̊p1q, β ̊p0qq
“  ́ Ep0q
E p1q
”› › ›
 ́
Id  ́ XT
`X ⊺
T XT
 ̆ ́1 X⊺
T
 ̄
Y T p1q
› › ›
2
2 ́
› › ›
 ́
Id  ́ XT
`X ⊺
T XT ` η ́1
T Id
 ̆ ́1 X⊺
T
 ̄
Y T p1q
› › ›
2
2
 ́ η ́1
T Y⊺
T p1qXT
`X ⊺
T XT ` η ́1
T Id
 ̆ ́2 X⊺
T Y T p1q
ı
 ́ Ep1q
E p0q
”› › ›
 ́
Id  ́ XT
`X ⊺
T XT
 ̆ ́1 X⊺
T
 ̄
Y T p0q
› › ›
2
2 ́
› › ›
 ́
Id  ́ XT
`X ⊺
T XT ` η ́1
T Id
 ̆ ́1 X⊺
T
 ̄
Y T p0q
› › ›
2
2
 ́ η ́1
T Y⊺
T p0qXT
`X ⊺
T XT ` η ́1
T Id
 ̆ ́2 X⊺
T Y T p0q
ı
 ́2
”
x
 ́
Id  ́ XT
`X ⊺
T XT
 ̆ ́1 X⊺
T
 ̄
Y T p1q,
 ́
Id  ́ XT
`X ⊺
T XT
 ̆ ́1 X⊺
T
 ̄
Y T p0qy
 ́x
 ́
Id  ́ XT
`X ⊺
T XT ` η ́1
T Id
 ̆ ́1 X⊺
T
 ̄
Y T p1q,
 ́
Id  ́ XT
`X ⊺
T XT ` η ́1
T Id
 ̆ ́1 X⊺
T
 ̄
Y T p0qy
 ́ η ́1
T xXT
`X ⊺
T XT ` η ́1
T Id
 ̆ ́1 X⊺
T Y T p1q, XT
`X ⊺
T XT ` η ́1
T Id
 ̆ ́1 X⊺
T Y T p0qy
ı
“  ́ Ep0q
E p1q
”
 ́Y ⊺
T p1q
 ́
XT
`X ⊺
T XT
 ̆ ́1 X⊺
T
 ̄
Y T p1q ` Y ⊺
T p1q
 ́
XT
`X ⊺
T XT ` η ́1
T Id
 ̆ ́1 X⊺
T
 ̄
Y T p1q
ı
 ́ Ep1q
E p0q
”
 ́Y ⊺
T p0q
 ́
XT
`X ⊺
T XT
 ̆ ́1 X⊺
T
 ̄
Y T p0q ` Y ⊺
T p0q
 ́
XT
`X ⊺
T XT ` η ́1
T Id
 ̆ ́1 X⊺
T
 ̄
Y T p0q
ı
 ́2
”
 ́Y ⊺
T p1q
 ́
XT
`X ⊺
T XT
 ̆ ́1 X⊺
T
 ̄
Y T p0q ` Y ⊺
T p1q
 ́
XT
`X ⊺
T XT ` η ́1
T Id
 ̆ ́1 X⊺
T
 ̄
Y T p0q
ı
“
 ̃
ˆ Ep0q
E p1q
 ̇1{2
Y T p1q `
ˆ Ep1q
Ep0q Y T p0q
 ̇1{2 ̧⊺
” ́
XT
`X ⊺
T XT
 ̆ ́1 X⊺
T
 ̄
 ́
 ́
XT
`X ⊺
T XT ` η ́1
T Id
 ̆ ́1 X⊺
T
 ̄ı
ˆ
 ̃
ˆ Ep0q
E p1q
 ̇1{2
Y T p1q `
ˆ Ep1q
E p0q
 ̇1{2
Y T p0q
 ̧
ě
 ̃
ˆ Ep0q
E p1q
 ̇1{2
Y T p1q `
ˆ Ep1q
E p0q
 ̇1{2
Y T p0q
 ̧⊺ ”
XT
`X ⊺
T XT
 ̆ ́1 X⊺
T ` XT
`X ⊺
T XT
 ̆ ́1 X⊺
T
ı
ˆ
 ̃
ˆ Ep0q
E p1q
 ̇1{2
Y T p1q `
ˆ Ep1q
E p0q
 ̇1{2
Y T p0q
 ̧
“0 . (92)
For any t P rT s, by Cauchy-Schwarz inequality, Lemma B.3 and Assumption 1, we have
}β ̊
t`1p1q}2
2 “Y ⊺
t p1qXt
`X ⊺
t Xt ` η ́1
t`1I d
 ̆ ́2 X⊺
t Y tp1q
117

ď
 ̃t ÿ
s“1
y2
s p1q
 ̧ ›
›
›X t
`X ⊺
t Xt ` η ́1
t`1I d
 ̆ ́2 X⊺
t
› › ›2
ď
 ̃t ÿ
s“1
y2
s p1q
 ̧ › › ›
`X ⊺
t Xt ` η ́1
t`1I d
 ̆ ́1›
› ›2
ď
 ̃t ÿ
s“1
y4
s p1q
 ̧1{2
t1{2 pγ0 _ c2 _ 1q pt _ η ́1
t`1q ́1 (Cauchy-Schwarz inequality and Lemma B.3)
ÀT 1{2pt _ η ́1
t`1q ́1{2 (Assumption 1)
ÀT 1{2pη ́1
t`1q ́1{2 .
Similar result can be obtained for β ̊
t`1p0q. Hence we can bound  ́S2 by:
 ́S2 “
T
ÿ
t“1
`η ́1
t`1  ́ η ́1
t
 ̆
ˆ Ep0q
Ep1q }β ̊
t`1p1q}2
2 ` Ep1q
Ep0q }β ̊
t`1p0q}2
2 ` 2xβ ̊
t`1p1q, β ̊
t`1p0qy
 ̇
À
T
ÿ
t“1
`η ́1
t`1  ́ η ́1
t
 ̆
ˆ
}β ̊
t`1p1q}2
2 ` Ep1q
Ep0q }β ̊
t`1p0q}2
2
 ̇
ÀT 1{2
T
ÿ
t“1
`η ́1
t`1  ́ η ́1
t
 ̆ pη ́1
t`1q ́1{2
ďT 1{2
ż η ́1
T `1
0
x ́1{2dx (ηt is decreasing)
ÀT 1{2η ́1{2
T `1 “T 1{2η ́1{2
T . (93)
By the explicit form of β ̊
t`1p1q and βr ̊
t`1p1q, we have
›
›Y tp1q  ́ Xtβ ̊
t`1p1q
› ›
2
2 ` η ́1
t }β ̊
t`1p1q}2
2 ́
ˆ› ›
›Y tp1q  ́ Xtβr ̊
t`1p1q
› › ›
2
2 ` η ́1
t }βr ̊
t`1p1q}2
2
 ̇
“
`Y ⊺
t p1qY tp1q  ́ 2Y ⊺
t p1qXtβ ̊
t`1p1q ` pβ ̊
t`1p1qq⊺ `X⊺
t Xt ` η ́1
t Id
 ̆ β ̊
t`1p1q ̆
 ́
 ́
Y⊺
t p1qY tp1q  ́ 2Y ⊺
t p1qXtβr ̊
t`1p1q ` pβr ̊
t`1p1qq⊺ `X⊺
t Xt ` η ́1
t Id
 ̆
βr  ̊
t`1p1q
 ̄
“  ́ 2Y ⊺
t p1qXt
`X ⊺
t Xt ` η ́1
t`1I d
 ̆ ́1 X⊺
t Y tp1q ` 2Y ⊺
t p1qXt
`X ⊺
t Xt ` η ́1
t Id
 ̆ ́1 X⊺
t Y tp1q
`Y⊺
t p1qXt
`X ⊺
t Xt ` η ́1
t`1I d
 ̆ ́1 `X⊺
t Xt ` η ́1
t Id
 ̆ `X⊺
t Xt ` η ́1
t`1I d
 ̆ ́1 X⊺
t Y tp1q
 ́Y⊺
t p1qXt
`X ⊺
t Xt ` η ́1
t Id
 ̆ ́1 `X⊺
t Xt ` η ́1
t Id
 ̆ `X⊺
t Xt ` η ́1
t Id
 ̆ ́1 X⊺
t Y tp1q
“Y ⊺
t p1q
 ́
 ́ 2Xt
`X ⊺
t Xt ` η ́1
t`1I d
 ̆ ́1 X⊺
t ` 2Xt
`X ⊺
t Xt ` η ́1
t Id
 ̆ ́1 X⊺
t
` Xt
`X ⊺
t Xt ` η ́1
t`1I d
 ̆ ́1 `X⊺
t Xt ` η ́1
t Id
 ̆ `X⊺
t Xt ` η ́1
t`1I d
 ̆ ́1 X⊺
t  ́ Xt
`X ⊺
t Xt ` η ́1
t Id
 ̆ ́1 X⊺
t
 ̄
Y tp1q .
By the same method, we also have
›
›Y tp0q  ́ Xtβ ̊
t`1p0q
› ›
2
2 ` η ́1
t }β ̊
t`1p0q}2
2 ́
ˆ› ›
›Y tp0q  ́ Xtβr ̊
t`1p0q
› › ›
2
2 ` η ́1
t }βr ̊
t`1p0q}2
2
 ̇
“Y ⊺
t p0q
 ́
 ́ 2Xt
`X ⊺
t Xt ` η ́1
t`1I d
 ̆ ́1 X⊺
t ` 2Xt
`X ⊺
t Xt ` η ́1
t Id
 ̆ ́1 X⊺
t
` Xt
`X ⊺
t Xt ` η ́1
t`1I d
 ̆ ́1 `X⊺
t Xt ` η ́1
t Id
 ̆ `X⊺
t Xt ` η ́1
t`1I d
 ̆ ́1 X⊺
t  ́ Xt
`X ⊺
t Xt ` η ́1
t Id
 ̆ ́1 X⊺
t
 ̄
Y tp0q ,
xY tp1q  ́ Xtβ ̊
t`1p1q, Y tp0q  ́ Xtβ ̊
t`1p0qy ` η ́1
t xβ ̊
t`1p1q, β ̊
t`1p0qy
 ́
`xY tp1q  ́ Xtβ ̊p1q, Y tp0q  ́ Xtβ ̊p0qy ` η ́1
t xβ ̊p1q, β ̊p0qy ̆
118

“Y ⊺
t p1q
 ́
 ́ 2Xt
`X ⊺
t Xt ` η ́1
t`1I d
 ̆ ́1 X⊺
t ` 2Xt
`X ⊺
t Xt ` η ́1
t Id
 ̆ ́1 X⊺
t
` Xt
`X ⊺
t Xt ` η ́1
t`1I d
 ̆ ́1 `X⊺
t Xt ` η ́1
t Id
 ̆ `X⊺
t Xt ` η ́1
t`1I d
 ̆ ́1 X⊺
t  ́ Xt
`X ⊺
t Xt ` η ́1
t Id
 ̆ ́1 X⊺
t
 ̄
Y tp0q .
Hence
L ̄ t`1 pβ  ̊
t`1p1q, β ̊
t`1p0qq  ́ L ̄t`1pβr ̊
t`1p1q, βr ̊
t`1p0qq
“
«
ˆ Ep0q
E p1q
 ̇1{2
Y tp1q `
ˆ Ep1q
E p0q
 ̇1{2
Y tp0q
ff⊺  ́
 ́ 2Xt
`X ⊺
t Xt ` η ́1
t`1I d
 ̆ ́1 X⊺
t ` 2Xt
`X ⊺
t Xt ` η ́1
t Id
 ̆ ́1 X⊺
t
` Xt
`X ⊺
t Xt ` η ́1
t`1I d
 ̆ ́1 `X⊺
t Xt ` η ́1
t Id
 ̆ `X⊺
t Xt ` η ́1
t`1I d
 ̆ ́1 X⊺
t  ́ Xt
`X ⊺
t Xt ` η ́1
t Id
 ̆ ́1 X⊺
t
 ̄
ˆ
«
ˆ Ep0q
E p1q
 ̇1{2
Y tp1q `
ˆ Ep1q
E p0q
 ̇1{2
Y tp0q
ff
À
 ̃t ÿ
s“1
y2
t p1q `
t
ÿ
s“1
y2
t p0q
 ̧ ›
›
›X t
 ́
 ́ 2 `X⊺
t Xt ` η ́1
t`1I d
 ̆ ́1 ` 2 `X⊺
t Xt ` η ́1
t Id
 ̆ ́1  ́ `X⊺
t Xt ` η ́1
t Id
 ̆ ́1
`
`X ⊺
t Xt ` η ́1
t`1I d
 ̆ ́1 `X⊺
t Xt ` η ́1
t Id
 ̆ `X⊺
t Xt ` η ́1
t`1I d
 ̆ ́1  ̄
X⊺
t
› › ›2
“
 ̃t ÿ
s“1
y2
t p1q `
t
ÿ
s“1
y2
t p0q
 ̧ › ›
›X ⊺
t Xt
 ́
 ́ 2 `X⊺
t Xt ` η ́1
t`1I d
 ̆ ́1 ` 2 `X⊺
t Xt ` η ́1
t Id
 ̆ ́1  ́ `X⊺
t Xt ` η ́1
t Id
 ̆ ́1
`
`X ⊺
t Xt ` η ́1
t`1I d
 ̆ ́1 `X⊺
t Xt ` η ́1
t Id
 ̆ `X⊺
t Xt ` η ́1
t`1I d
 ̆ ́1  ̄›
› ›2
fi
 ̃t ÿ
s“1
y2
t p1q `
t
ÿ
s“1
y2
t p0q
 ̧
}V }2 .
Let λ1, . . . , λd be all eigenvalues of X⊺
t Xt. Since X⊺
t Xt, X⊺
t Xt ` η ́1
t Id and X⊺
t Xt ` η ́1
t`1I d
can be simultaneously orthogonally diagonalized, if λ is the eigenvalue of X⊺
t Xt, then the corresponding eigenvalue of V is as:
λ
 ̃
 ́2
λ ` η ́1
t`1
`2
λ ` η ́1
t
 ́1
λ ` η ́1
t
` λ ` η ́1
t
pλ ` η ́1
t`1q2
 ̧
“λ  ̈  ́2pλ ` η ́1
t`1qpλ ` η ́1
t q ` pλ ` η ́1
t`1q2 ` pλ ` η ́1
t q2
pλ ` η ́1
t`1q2pλ ` η ́1
tq
“λ  ̈ pλ ` η ́1
t`1  ́ λ  ́ η ́1
t q2
pλ ` η ́1
t`1q2pλ ` η ́1
tq
ďpη ́1
t`1  ́ η ́1
t q2 1
pλ ` η ́1
t`1q2 .
By similar proof as in Lemma B.3, pλ ` η ́1
t`1q ́1 ď pγ0 _ c2 _ 1qpt _ η ́1
t`1q ́1, then we have
}V }2 ď pγ0 _ c2 _ 1q2pη ́1
t`1  ́ η ́1
t q2pt _ η ́1
t`1q ́2. Hence by Cauchy-Schwarz inequality, we can bound S3 as:
 ́S3 “
T
ÿ
t“1
 ́L ̄ t`1 pβ  ̊
t`1p1q, β ̊
t`1p0qq  ́ L ̄t`1pβr ̊
t`1p1q, βr ̊
t`1p0qq
 ̄
À
T
ÿ
t“1
 ̃t ÿ
s“1
y2
t p1q `
t
ÿ
s“1
y2
t p0q
 ̧
}V }2
À
T
ÿ
t“1
»

 ̃t ÿ
s“1
y4
t p1q
 ̧1{2
`
 ̃t ÿ
s“1
y4
t p0q
 ̧1{2fi
fl t1{2pη ́1
t`1  ́ η ́1
t q2pt _ η ́1
t`1q ́2 (Cauchy-Schwarz inequality)
119

ÀT 1{2
T
ÿ
t“1
pη ́1
t`1  ́ η ́1
t q2pt _ η ́1
t`1q ́3{2
ďT 1{2
T
ÿ
t“1
pη ́1
t`1  ́ η ́1
t qpη ́1
t`1q ́1{2
ďT 1{2
ż η ́1
T `1
0
x ́1{2dx (ηt is decreasing)
ÀT 1{2η ́1{2
T `1 “T 1{2η ́1{2
T . (94)
Hence by (91), (92), (93) and (94), we proved that the negative part of ErRpred
T s is of order
opT q ` OpT 1{2η ́1{2
T q “ opT q by Assumption 3. Hence the result is proved.
The following lemma upper bounds the variability of the inverse probability for the last subject T . Its proof follows a similar line of reasoning as that of Lemma C.4. We recommend that readers consult the proof of Lemma C.4 first. For simplicity, some intermediate steps are omitted in the proof of Lemma C.22.
Lemma C.22. Under Assumptions 1-3 and Condition 1, there holds:
max
#
E
«ˇ ˇ ˇ ˇ
1
p ̃  ́ 1
p ̆
ˇ ˇ ˇ ˇ
5{4ff
,E
«ˇ ˇ ˇ ˇ
1
1  ́ p ̃  ́ 1
1  ́ p ̆
ˇ ˇ ˇ ˇ
5{4ff+ “ OpT  ́5{24R1{6
T q,
Proof. We first bound the variance of ArT p1q and ArT p0q. For ArT p1q, by Corollary 4.15, Corollary B.17 and (55) in the proof of Lemma C.3, we have
VarpArT p1qq
“ Var
 ̃T ÿ
t“1
1rZt “ 1s
pt
 ̈ pytp1q  ́ xxt, β ̊
t p1qyq2
 ̧
“ Var
 ̃T ÿ
t“1
ˆ 1rZt “ 1s
pt
 ́1
 ̇
 ̈ pytp1q  ́ xxt, β ̊
t p1qyq2
 ̧
“
T
ÿ
t“1
Var
ˆˆ 1rZt “ 1s
pt
 ́1
 ̇
 ̈ pytp1q  ́ xxt, β ̊
t p1qyq2
 ̇
pvariance of sum of MDSq
“
T
ÿ
t“1
pytp1q  ́ xxt, β ̊
t p1qyq4E
„ 1  ́ pt
pt
ȷ
ď2
T
ÿ
t“1
y4
t p1qE
„1
pt
ȷ
`2
T
ÿ
t“1
xxt, β ̊
t p1qy4E
„ 1  ́ pt
pt
ȷ
ÀOpT 9{8q ` T 5{4 max
tPrT s
Rta1{4
t p0q pby (55), Assumption 1, Corollary 4.15q
ÀT 5{4  ̈ max
tPrT s
RtpηtT q1{4 pCorollary B.17q
“T 11{8  ̈ max
tPrT s
R1{2
t
ďT 11{8R1{2
T.
Hence there exists constant C ą 0 such that VarpArT p1qq ď CT 11{8R1{2
T . Similarly, we can
prove that VarpArT p0qq ď CT 11{8R1{2
T . Suppose 0 ă δ ă 1{4 is a fixed constant. Then we consider the following three cases:
120

(1) A ̊
T p0q ď p1  ́ δqA ̊
T p1q.
For k P t0, 1u, denote events Gk “
!
|
ArT pkq  ́ A ̊
T pkq| ă δ
2 pA ̊
T p1q _ A ̊
T p0qq
)
and Grk “
!
|
ArT pkq  ́ A ̊
T pkq|
ă1
2 pA ̊
T p1q _ A ̊
T p0qq
)
. By Lemma 4.9 and Lemma C.21, it is easy to see that A ̊
T p1q “ ΘpT q and
A ̊
T p0q “ ΘpT q. Hence by Chebyshev’s inequality, we have
Pr pGc
1q Àδ ́2T  ́2 VarpArT p1qq À δ ́2T  ́2T 11{8R1{2
T À δ ́2T  ́5{8R1{2
T,
Pr pGc
0q Àδ ́2T  ́2 VarpArT p0qq À δ ́2T  ́5{8R1{2
T,
PrpGrc
1q ÀT  ́2 VarpArT p1qq À T  ́5{8R1{2
T,
PrpGrc
0q ÀT  ́2 VarpArT p0qq À T  ́5{8R1{2
T . (95)
By Assumption 1, under event Gr1 and Gr0, we have
ArT p0q
ArT p1q
ď A ̊
T p0q ` 1
2 A ̊
T p0q A ̊
T p1q  ́ 1
2 A ̊
T p1q ď 3c1
c0
,
which implies that 1{p ̃ ď 2 ` 31{2b1p2b2{b3q1{2pc1{c0q1{2 by Lemma 4.14. Moreover we have 1{p ̆ ď 2 ` b1p2b2{b3q1{2pc1{c0q1{2 by Lemma 4.14 and Assumption 1. Under event G1 (G1 Ď Gr1) and G0 (G0 Ď Gr0), we have ArT p1q ě ArT p0q. Note that, by definition p ̃ and p ̆ should satisfy the following first-order equations:
 ́
ArT p1q
p ̃2 `
ArT p0q
p1  ́ p ̃q2 ` η ́1
T Ψ1pp ̃q “0 ,
 ́ A ̊
T p1q
p ̆2 ` A ̊
T p0q
p1  ́ p ̆q2 ` η ́1
T Ψ1pp ̆q “0 .
Hence by Lemma C.1, we can show that
ˇ ˇ ˇ ˇ
1
p ̃  ́ 1
p ̆
ˇ ˇ ˇ ˇ
À
ˇ ˇ ˇ ˇ ˇ
A ̊
T p1q  ́ ArT p1q A ̊
T p1q
ˇ ˇ ˇ ˇ ˇ
`
ˇ ˇ ˇ ˇ ˇ
A ̊
T p0q  ́ ArT p0q A ̊
T p0q
ˇ ˇ ˇ ˇ ˇ
,
which indicates that
ˇ ˇ ˇ ˇ
1
p ̃  ́ 1
p ̆
ˇ ˇ ˇ ˇ
5{4
À
 ̃
A ̊
T p1q  ́ ArT p1q A ̊
T p1q
 ̧5{4
`
 ̃
A ̊
T p0q  ́ ArT p0q A ̊
T p0q
 ̧5{4
. (96)
Hence by Corollary 4.15, Corollary B.17, (95), (96) and Hölder’s inequality, we have
E
«ˇ ˇ ˇ ˇ
1
p ̃  ́ 1
p ̆
ˇ ˇ ˇ ˇ
5{4ff
“E
«ˇ ˇ ˇ ˇ
1
p ̃  ́ 1
p ̆
ˇ ˇ ˇ ˇ
5{4
1 rG1 X G0s
ff
`E
«ˇ ˇ ˇ ˇ
1
p ̃  ́ 1
p ̆
ˇ ˇ ˇ ˇ
5{4
1 rGc
1 Y Gc
0s
ff
ďE
«ˇ ˇ ˇ ˇ
1
p ̃  ́ 1
p ̆
ˇ ˇ ˇ ˇ
5{4
1 rG1 X G0s
ff
`E
«ˇ ˇ ˇ ˇ
1
p ̃  ́ 1
p ̆
ˇ ˇ ˇ ˇ
5{4
1
”
pGc
1 Y Gc
0q X Gr1 X Gr0
ı
ff
`E
«ˇ ˇ ˇ ˇ
1
p ̃  ́ 1
p ̆
ˇ ˇ ˇ ˇ
5{4
1
”
Grc
1 Y Grc
0
ı
ff
ÀE
»

 ̃
A ̊
T p1q  ́ ArT p1q A ̊
T p1q
 ̧5{4
`
 ̃
A ̊
T p0q  ́ ArT p0q A ̊
T p0q
 ̧5{4fi
fl`E
”
1
”
pGc
1 Y Gc
0q X Gr1 X Gr0
ıı
`E
«
ˆ1
p ̃  ́ 1
p ̆
 ̇5{4
1
”
Grc
1 Y Grc
0
ı
ff
121

ÀT  ́5{4 Var5{8pArT p1qq ` T  ́5{4 Var5{8pArT p0qq ` Pr pGc
1 Y Gc
0q ` E
„ˇ ˇ ˇ ˇ
1 p ̃4
ˇ ˇ ˇ ˇ
`
ˇ ˇ ˇ ˇ
1 p ̆4
ˇ ˇ ˇ ˇ
ȷ5{16
Pr11{16  ́
Grc
1 Y Grc
0
 ̄
ÀT  ́25{64R5{16
T ` δ ́2T  ́5{8R1{2
T ` pηT T q5{16  ̈ pT  ́5{8R1{2
T q11{16
ÀT  ́25{64R5{16
T ` δ ́2T  ́5{8R1{2
T ` T  ́35{128R ́9{32
T . (97)
(2) AT p1q ď p1  ́ δqAT p0q.
By similar method as in case (1), we can prove that
E
«ˇ ˇ ˇ ˇ
1
p ̃  ́ 1
p ̆
ˇ ˇ ˇ ˇ
5{4ff À T  ́25{64R5{16
T ` δ ́2T  ́5{8R1{2
T ` T  ́35{128R ́9{32
T . (98)
(3) AT p0q ě p1  ́ δqAT p1q and AT p1q ě p1  ́ δqAT p0q.
By similar proof as in Lemma C.4 and in case (1), we can prove that
E
«ˇ ˇ ˇ ˇ
1
p ̃  ́ 1
p ̆
ˇ ˇ ˇ ˇ
5{4ff
À δ ` δ ́2T  ́5{8R1{2
T ` T  ́35{128R ́9{32
T . (99)
By choosing δ “ T  ́5{24R1{6
T , we can verify that
T  ́25{64R5{16
T “ T  ́5{24R1{6
T  ̈ pT R ́4
T q ́35{192  ̈ R ́7{12
T “ opδq ,
δ ́2T  ́5{8R1{2
T “δ ,
T  ́35{128R ́9{32
T “ T  ́5{24R1{6
T  ̈ T  ́25{384R ́43{96
T “ opδq .
Hence the result is proved by (97), (98) and (99).
The following lemma is proved by a similar argument as in Lemma C.1. It characterizes the difference in the inverse probabilities when different step sizes are used.
Lemma C.23. Let A, B, η ě η ̃ be positive constants. Suppose p, p ̃ satisfy
 ́A
p2 ` B
p1  ́ pq2 ` η ́1Ψ1ppq “ 0 ,
 ́A
p ̃2 ` B
p1  ́ p ̃q2 ` η ̃ ́1Ψ1pp ̃q “ 0 .
(1) If A ě B, then under Condition 1 we can attain the following upper bound:
ˇ ˇ ˇ ˇ
1
1 ́p  ́ 1
1  ́ p ̃
ˇ ˇ ˇ ˇ
ď 6b1
b3
ˆ
1` 2
b3
 ̇5 |η ́1  ́ η ̃ ́1|
A
ˆp
1 ́p
 ̇ ˆ p ̃
1  ́ p ̃
 ̇4
.
(2) If A ď B, then under Condition 1 we can attain the following upper bound:
ˇ ˇ ˇ ˇ
1
p ́1
p ̃
ˇ ˇ ˇ ˇ
ď 6b1
b3
ˆ
1` 2
b3
 ̇5 |η ́1  ́ η ̃ ́1|
B
ˆ1  ́ p p
 ̇ ˆ 1  ́ p ̃ p ̃
 ̇4
.
Proof. We only prove the first part. Since A ě B, we have p, p ̃ ě 1{2. For u “ φ ́1ppq ě 0 and u ̃ “ φ ́1pp ̃q ě 0, it is easy to see that u and u ̃ satisfy
A
ˆ1
φpuq
 ̇1
`B
ˆ1
1  ́ φpuq
 ̇1
` η ́1pu ` 3u2q “0 ,
122

A
ˆ1
φpu ̃q
 ̇1
`B
ˆ1
1  ́ φpu ̃q
 ̇1
` η ̃ ́1pu ̃ ` 3u ̃2q “0 . (100)
By subtracting the first equation in (100) from the second equation, we have
A
«
ˆ1
φpuq
 ̇1
 ́
ˆ1
φpu ̃q
 ̇1ff
`B
«
ˆ1
1  ́ φpuq
 ̇1
 ́
ˆ1
1  ́ φpu ̃q
 ̇1ff
` η ́1pu  ́ u ̃qp1 ` 3u ` 3u ̃q ` pη ́1  ́ η ̃ ́1qpu ̃ ` 3u ̃2q “ 0 . (101)
The convexity assumption in Condition 1 implies that A
„
 ́1 φpuq
 ̄1
 ́
 ́1 φpu ̃q
 ̄1ȷ
,B
„
 ́1
1 ́φpuq
 ̄1
 ́
 ́1
1 ́φpu ̃q
 ̄1ȷ
and η ́1pu  ́ u ̃qp1 ` 3u ` 3u ̃q always have the same sign. Hence by Lemma B.16, we have
ˇ ˇ ˇ ˇ ˇ
A
«
ˆ1
φpuq
 ̇1
 ́
ˆ1
φpu ̃q
 ̇1ff
`B
«
ˆ1
1  ́ φpuq
 ̇1
 ́
ˆ1
1  ́ φpu ̃q
 ̇1ff
` η ́1pu  ́ u ̃qp1 ` 3u ` 3u ̃q
ˇ ˇ ˇ ˇ ˇ
ěA
ˇ ˇ ˇ ˇ ˇ
ˆ1
φpuq
 ̇1
 ́
ˆ1
φpu ̃q
 ̇1ˇ
ˇ ˇ ˇ ˇ
ě b3
2
A
p1 ` u ̃qp1 ` uqp1 ` u ̃ ^ uq  ̈ |u  ́ u ̃| . (102)
Then by (101), (102) and Lemma B.16, we have
|u  ́ u ̃| ď
ˆ b3 2
A
p1 ` u ̃qp1 ` uqp1 ` u ̃ ^ uq
 ̇ ́1
|η ́1  ́ η ̃ ́1|pu ̃ ` 3u ̃2q pby (101) and (102)q
ď2
b3
|η ́1  ́ η ̃ ́1|
A p1 ` uqp1 ` u ̃q2pu ̃ ` 3u ̃2q
ď6
b3
|η ́1  ́ η ̃ ́1|
A p1 ` uqp1 ` u ̃q4
ď6
b3
|η ́1  ́ η ̃ ́1| A
„2
b3
ˆ1
1 ́p  ́ 1
1  ́ 1{2
 ̇
`1
ȷ„ 2
b3
ˆ1
1  ́ p ̃  ́ 1
1  ́ 1{2
 ̇
`1
ȷ4
pLemma B.16q
ď6
b3
ˆ
1` 2
b3
 ̇5 |η ́1  ́ η ̃ ́1|
A
ˆp
1 ́p
 ̇ ˆ p ̃
1  ́ p ̃
 ̇4
.
Hence we can prove by Lemma B.16 that
ˇ ˇ ˇ ˇ
1
1 ́p  ́ 1
1  ́ p ̃
ˇ ˇ ˇ ˇ
ď b1|u  ́ u ̃| ď 6b1
b3
ˆ
1` 2
b3
 ̇5 |η ́1  ́ η ̃ ́1|
A
ˆp
1 ́p
 ̇ ˆ p ̃
1  ́ p ̃
 ̇4
.
With the help of Lemma C.21, Lemma C.22 and Lemma C.23, now we can derive the exact form for the asymptotic variance of τˆ in the following theorem.
Theorem 5.1. Under Assumptions 1-3 and Condition 1, the asymptotic variance of the adaptive AIPW estimator under Sigmoid-FTRL is the oracle variance:
T  ̈ Varpτˆq “ 2p1 ` ρqEp1qEp0q ` op1q .
Proof. By Lemma 3.3, we have
T  ̈ Varpτˆq “T  ̈ V ̊ ` 1
T ErRprob
T s` 1
T ErRpred
T s.
123

By Lemma 4.9 and Lemma C.21, we have shown that 1
T ErRpred
T s “ op1q. Hence it suffices to prove that 1
T ErRprob
T s “ op1q. We introduce the following notations:
fptppq “ 1rZt “ 1s
pt
 ̈ pytp1q  ́ xxt, βtp1qyq2  ̈ 1
p ` 1rZt “ 0s
1  ́ pt
 ̈ pytp0q  ́ xxt, βtp0qyq2  ̈ 1
1 ́p ,
Fptppq “
t ́1
ÿ
s“1
fpsppq ` 1
ηt
Ψppq ,
Frtppq “
t ́1
ÿ
s“1
fpsppq ` 1
ηt ́1
Ψppq ,
phtpuq “ 1rZt “ 1s
pt
 ̈ pytp1q  ́ xxt, βtp1qyq2  ̈ 1
φpuq ` 1rZt “ 0s
1  ́ pt
 ̈ pytp0q  ́ xxt, βtp0qyq2  ̈ 1
1  ́ φpuq ,
Hptpuq “
t ́1
ÿ
s“1
phspuq ` 1
ηt
ψpuq ,
Hrtpuq “
t ́1
ÿ
s“1
phspuq ` 1
ηt ́1
ψpuq .
Let p ̃t, ut, u ̃t be the minimizer of function Frt, Hpt and Hrt, respectively. By similar proof as in Lemma 4.9, we have
1
T ErRprob
Ts
“1
TE
«T ÿ
t“1
ftpptq  ́
T
ÿ
t“1
ftpp ̊q
ff
“1
TE
«T ÿ
t“1
fptpptq  ́
T
ÿ
t“1
fptpp ̊q
ff
“1
TE
«
1
ηT `1
Ψpp ̊q `
T
ÿ
t“1
fptpptq `
T
ÿ
t“1
 ́
Fptpptq  ́ Fpt`1ppt`1q
 ̄
`
FpT `1ppT `1q  ́ FpT `1pp ̊q
ff
“1
TE
«
1
ηT `1
Ψpp ̊q `
T
ÿ
t“1
 ́
Frt`1pptq  ́ Fpt`1ppt`1q
 ̄
`
FpT `1ppT `1q  ́ FpT `1pp ̊q
ff
“1
T
1
ηT
Ψpp ̊q ` 1
T
T
ÿ
t“1
E
”
Frt`1pptq  ́ Frt`1pp ̃t`1q
ı
 ́1
T
T
ÿ
t“1
E
”
Frt`1ppt`1q  ́ Frt`1pp ̃t`1q
ı
`1
T
T
ÿ
t“1
E
”
Frt`1ppt`1q  ́ Fpt`1ppt`1q
ı
`1
TE
”
FpT `1ppT `1q  ́ FpT `1pp ̊q
ı
“op1q  ́ 1
T
T
ÿ
t“1
E
”
Frt`1ppt`1q  ́ Frt`1pp ̃t`1q
ı
 ́1
T
T
ÿ
t“1
`η ́1
t`1  ́ η ́1
t
 ̆ E rΨppt`1qs
`1
TE
”
FpT `1ppT `1q  ́ FpT `1pp ̃q
ı
`1
TE
”
FpT `1pp ̃q  ́ FpT `1pp ̆q
ı
`1
TE
”
FpT `1pp ̆q  ́ FpT `1pp ̊q
ı
pProposition 4.7q
fiop1q  ́ S1  ́ S2 ` S3 ` S4 ` S5 . (103)
For S1, by the definition of Fr and Hr , we have
0ď1
TE
«T ÿ
t“1
 ́
Frt`1ppt`1q  ́ Frt`1pp ̃t`1q
 ̄
ff
poptimality of p ̃t`1q
124

“1
T
T
ÿ
t“1
E
” ́
Hrt`1put`1q  ́ Hrt`1pu ̃t`1q
 ̄ı
“1
TE
«T ÿ
t“1
”
x∇Hrt`1pu ̃t`1q, ut`1  ́ u ̃t`1y ` BHĂt`1 put`1|u ̃t`1q
ı
ff
“1
TE
«T ÿ
t“1
B
HĂt`1 put`1|u ̃t`1q
ff
poptimality of u ̃t`1q .
For any t P rT s, if Aptp1q ě Aptp0q, then ut`1, u ̃t`1 ě 0. Since ηt`1 ď ηt, it is easy to show that u ̃t`1 ě ut`1 and p ̃t`1 ě pt`1 by similar method as in Lemma 4.14. Hence for f1puq “ 1{φpuq and f2puq “ 1{p1  ́ φpuqq, by Lemma B.16 we have
Bf1 put`1|u ̃t`1q “f1put`1q  ́ f1pu ̃t`1q  ́ f 1
1pu ̃t`1qput`1  ́ u ̃t`1q
“1
φput`1q  ́ 1
φpu ̃t`1q  ́
ˆ1
φpu ̃t`1q
 ̇1
put`1  ́ u ̃t`1q
ďb2  ̈ u ̃t`1  ́ ut`1
p1 ` ut`1qp1 ` u ̃t`1q ,
Bf2 put`1|u ̃t`1q “f2put`1q  ́ f2pu ̃t`1q  ́ f 1
2pu ̃t`1qput`1  ́ u ̃t`1q
“1
1  ́ φput`1q  ́ 1
1  ́ φpu ̃t`1q  ́
ˆ1
1  ́ φpu ̃t`1q
 ̇1
put`1  ́ u ̃t`1q
ďb2  ̈ u ̃t`1  ́ ut`1
p1 ` ut`1qp1 ` u ̃t`1q ,
Bψput`1|u ̃t`1q “ψput`1q  ́ ψpu ̃t`1q  ́ ψ1pu ̃t`1qput`1  ́ u ̃t`1q
“1
2 u2
t`1 ` u3
t`1  ́ 1
2 u ̃2
t`1  ́ u ̃3
t`1  ́ pu ̃t`1 ` 3u ̃2
t`1qput`1  ́ u ̃t`1q
“1
2 put`1  ́ u ̃t`1q2p1 ` 2ut`1 ` 4u ̃t`1q .
On the other side, by the definition of pt`1 and p ̃t`1, there holds:
 ́
Aptp1q
p ̃t2`1
`
Aptp0q
p1  ́ p ̃t`1q2 ` η ́1
t Ψ1pp ̃t`1q “ 0 ,
 ́
Aptp1q
pt2`1
`
Aptp0q
p1  ́ pt`1q2 ` η ́1
t`1Ψ1ppt`1q “ 0 .
Then by Lemma B.16, Lemma C.1 and Lemma C.23, we have
B
HĂt`1 put`1|u ̃t`1q
“
Aptp1q  ̈ Bf1 put`1|u ̃t`1q ` Aptp0q  ̈ Bf2 put`1|u ̃t`1q ` η ́1
t Bψput`1|u ̃t`1q
À
Aptp1q  ̈ u ̃t`1  ́ ut`1
p1 ` ut`1qp1 ` u ̃t`1q ` Aptp0q  ̈ u ̃t`1  ́ ut`1
p1 ` ut`1qp1 ` u ̃t`1q ` η ́1
t pu ̃t`1  ́ ut`1q2p1 ` u ̃t`1 ` ut`1q
À
Aptp1q  ̈ u ̃t`1  ́ ut`1
p1 ` ut`1qp1 ` u ̃t`1q ` η ́1
t pu ̃t`1  ́ ut`1q2p1 ` u ̃t`1q psince Aptp1q ě Aptp0q and u ̃t`1 ě ut`1q
À
Aptp1q  ̈
1
1 ́p ̃t`1  ́ 1
1 ́pt`1
p1 ` ut`1qp1 ` u ̃t`1q ` η ́1
t
ˆ1
1  ́ p ̃t`1
 ́1
1  ́ pt`1
 ̇2
p1 ` u ̃t`1q pLemma B.16q
À
Aptp1q  ̈
ˆ p ̃t`1
1  ́ p ̃t`1
 ̇ ́1 ˆ pt`1
1  ́ pt`1
 ̇ ́1
 ̈ η ́1
t`1  ́ η ́1
t
Aptp1q
ˆ p ̃t`1
1  ́ p ̃t`1
 ̇ ˆ pt`1
1  ́ pt`1
 ̇4
pLemma C.23q
` η ́1
t
 ̃
p ̃t`1
1  ́ p ̃t`1
ηtAptp1q  ́ ηt`1Aptp1q
ηtAptp1q
` pt`1
1  ́ pt`1
ηtAptp0q  ́ ηt`1Aptp0q
ηtAptp0q
 ̧2 ˆ p ̃t`1
1  ́ p ̃t`1
 ̇
pLemma C.1q
125

Àpη ́1
t`1  ́ η ́1
tq
ˆ pt`1
1  ́ pt`1
 ̇3
` η ́1
t
 ̃
η ́1
t`1  ́ η ́1
t
η ́1
t`1
 ̧2 ˆ p ̃t`1
1  ́ p ̃t`1
 ̇3
psince p ̃t`1 ě pt`1q .
If Aptp1q ď Aptp0q, by symmetry we can similarly prove that
B
HĂt`1 put`1|u ̃t`1q À pη ́1
t`1  ́ η ́1
tq
ˆ 1  ́ pt`1
pt`1
 ̇3
` η ́1
t
 ̃
η ́1
t`1  ́ η ́1
t
η ́1
t`1
 ̧2 ˆ 1  ́ p ̃t`1
p ̃t`1
 ̇3
.
Since ηt ě ηt`1, by Corollary 4.15, Corollary B.17 and Assumption 3, we have
1
TE
«T ÿ
t“1
B
HĂt`1 put`1|u ̃t`1q
ff
À1
T
T
ÿ
t“1
pη ́1
t`1  ́ η ́1
t qE
«
ˆ1
1  ́ pt`1
 ̇3
`
ˆ1
pt`1
 ̇3ff
`1
T
T
ÿ
t“1
η ́1
t
 ̃
η ́1
t`1  ́ η ́1
t
η ́1
t`1
 ̧2
E
«
ˆ1
1  ́ p ̃t`1
 ̇3
`
ˆ1
p ̃t`1
 ̇3ff
À1
T
T
ÿ
t“1
pη ́1
t`1  ́ η ́1
t qη3{4
t`1T 3{4 ` 1
T
T
ÿ
t“1
η ́1
t
 ̃
η ́1
t`1  ́ η ́1
t
η ́1
t`1
 ̧2
η3{4
t T 3{4 pCorollary 4.15 and Corollary B.17q
ďT  ́1{4
«T ÿ
t“1
pη ́1
t`1  ́ η ́1
t qpη ́1
t`1q ́3{4 `
T
ÿ
t“1
η ́1{4
t pη ́1
t`1  ́ η ́1
t qηt`1
ff
ďT  ́1{4
«T ÿ
t“1
pη ́1
t`1  ́ η ́1
t qpη ́1
t`1q ́3{4 `
T
ÿ
t“1
pη ́1
t`1  ́ η ́1
t qpη ́1
t`1q ́3{4
ff
psince η ́1{4
t ď η ́1{4
t`1 q
ď2T  ́1{4
ż η ́1
T `1
η ́1
1
x ́3{4dx
ÀT  ́1{4η ́1{4
T
Ñ0 pAssumption 3q ,
which implies that
S1 “ 1
TE
«T ÿ
t“1
B
HĂt`1 put`1|u ̃t`1q
ff
“ op1q . (104)
For pt`1 ě 1{2, by Lemma B.16, we have
φ ́1ppt`1q “ ut`1  ́ 0 ď 2
b3
ˆ1
1  ́ pt`1
 ́1
1  ́ 1{2
 ̇
À1
1  ́ pt`1
.
Similarly, we can prove that for pt`1 ď 1{2, we have  ́φ ́1ppt`1q À 1
pt`1 . Hence by Corollary 4.15 and Corollary B.17, we have
S2 “ 1
T
T
ÿ
t“1
`η ́1
t`1  ́ η ́1
t
 ̆ E rΨppt`1qs
“1
T
T
ÿ
t“1
`η ́1
t`1  ́ η ́1
t
 ̆E
„1
2 pφ ́1ppt`1qq2 ` |φ ́1ppt`1q|3
ȷ
À1
T
T
ÿ
t“1
`η ́1
t`1  ́ η ́1
t
 ̆ η3{4
t`1T 3{4 pCorollary 4.15 and Corollary B.17q
ďT  ́1{4
T
ÿ
t“1
pη ́1
t`1  ́ η ́1
t qpη ́1
t`1q ́3{4
126

ďT  ́1{4
ż η ́1
T `1
η ́1
1
x ́3{4dx
ÀT  ́1{4η ́1{4
T
Ñ0 pAssumption 3q . (105)
Let u ̃ “ φ ́1pp ̃q. Then by Lemma 4.3 and Lemma B.20, we have
0ď1
TE
”
FpT `1pp ̃q  ́ FpT `1ppT `1q
ı
poptimality of pT `1q
“1
TE
”
HpT `1pu ̃q  ́ HpT `1puT `1q
ı
“1
TE
”
x∇HpT `1puT `1q, u ̃  ́ uT `1y ` BHxT `1 pu ̃|uT `1q
ı
“1
TE
”
B
HxT `1 pu ̃|uT `1q
ı
poptimality of uT `1q
ď1
TE
„
sup
zPR
"
x∇HpT `1puT `1q  ́ ∇HpT `1pu ̃q, z  ́ uty  ́ 1
ηT
Bψ pz |u ̃q
*ȷ
pLemma B.20q
“1
TE
„
sup
zPR
" A
 ́∇HpT `1pu ̃q, ut  ́ z
E
 ́1
ηT
Bψ pz |u ̃q
*ȷ
poptimality of uT `1q
ď1
TE
„
sup
zPR
" A
 ́∇HpT `1pu ̃q, ut  ́ z
E
 ́1
2ηT
pz  ́ u ̃q2 p1 ` |u ̃|q
*ȷ
pLemma 4.3q
ď ηT
2T p1 ` |u ̃|q E
”
p∇HpT `1pu ̃qq2ı
ÀT  ́1ηT E
”
p∇HpT `1pu ̃qq2ı
. (106)
By definition, u ̃ “ φ ́1pp ̃q should satisfy the following first order equation:
T
ÿ
t“1
«
1rZt “ 1s
pt
`ytp1q  ́ xxt, β ̊
t p1qy ̆2  ̈
ˆ1
φpu ̃q
 ̇1
` 1rZt “ 0s
1  ́ pt
`ytp0q  ́ xxt, β ̊
t p0qy ̆2  ̈
ˆ1
1  ́ φpu ̃q
 ̇1 ff
` η ́1
T ψ1pu ̃q “ 0 .
Then by the definition of HpT `1, Condition 1, Cauchy-Schwarz inequality and AM-GM inequality, we have
E
”
p∇HpT `1pu ̃qq2ı
“E
»

 ̃T ÿ
t“1
∇
phtpu ̃q ` η ́1
T ψpu ̃q
 ̧2fi
fl
“E
« ̃ T ÿ
t“1
1rZt “ 1s
pt
 ̈ pytp1q  ́ xxt, βtp1qyq2  ̈
ˆ1
φpu ̃q
 ̇1
` 1rZt “ 0s
1  ́ pt
 ̈ pytp0q  ́ xxt, βtp0qyq2  ̈
ˆ1
1  ́ φpu ̃q
 ̇1
` η ́1
T ψpu ̃q
 ̧2ff
“E
« ̃ T ÿ
t“1
1rZt “ 1s
pt
 ̈
”
pytp1q  ́ xxt, βtp1qyq2  ́ `ytp1q  ́ xxt, β ̊
t p1qy ̆2ı
 ̈
ˆ1
φpu ̃q
 ̇1
` 1rZt “ 0s
1  ́ pt
 ̈
”
pytp0q  ́ xxt, βtp0qyq2  ́ `ytp0q  ́ xxt, β ̊
t p0qy ̆2ı
 ̈
ˆ1
φpu ̃q
 ̇1  ̧2ff
psubtract the first-order equationq
127

ÀE
»

 ̃T ÿ
t“1
1rZt “ 1s
pt
 ̈
”
pytp1q  ́ xxt, βtp1qyq2  ́ `ytp1q  ́ xxt, β ̊
t p1qy ̆2ı
 ̈
ˆ1
φpu ̃q
 ̇1 ̧2fi
fl
`E
»

 ̃T ÿ
t“1
1rZt “ 0s 1  ́ pt
 ̈
”
pytp0q  ́ xxt, βtp0qyq2  ́ `ytp0q  ́ xxt, β ̊
t p0qy ̆2ı
 ̈
ˆ1
1  ́ φpu ̃q
 ̇1 ̧2fi
fl
ÀE
»

 ̃T ÿ
t“1
ˆ 1rZt “ 1s
pt
 ́1
 ̇ ”
pytp1q  ́ xxt, βtp1qyq2  ́ `ytp1q  ́ xxt, β ̊
t p1qy ̆2ı
 ̧2fi
fl
`E
»

 ̃T ÿ
t“1
ˆ 1rZt “ 0s
1  ́ pt
 ́1
 ̇ ”
pytp0q  ́ xxt, βtp0qyq2  ́ `ytp0q  ́ xxt, β ̊
t p0qy ̆2ı
 ̧2fi
fl
`E
»

 ̃T ÿ
t“1
”
pytp1q  ́ xxt, βtp1qyq2  ́ `ytp1q  ́ xxt, β ̊
t p1qy ̆2ı
 ̧2fi
fl
`E
»

 ̃T ÿ
t“1
”
pytp0q  ́ xxt, βtp0qyq2  ́ `ytp0q  ́ xxt, β ̊
t p0qy ̆2ı
 ̧2fi
fl pCauchy-Schwarz and AM-GMq
fiB1 ` B2 ` B3 ` B4 . (107)
By the proof in Lemma C.3 and Lemma C.22, Cauchy-Schwarz inequality and AM-GM inequality, we have
B1 “ Var
 ̃T ÿ
t“1
ˆ 1rZt “ 1s
pt
 ́1
 ̇ ”
pytp1q  ́ xxt, βtp1qyq2  ́ `ytp1q  ́ xxt, β ̊
t p1qy ̆2ı
 ̧
À Var
 ̃T ÿ
t“1
ˆ 1rZt “ 1s
pt
 ́1
 ̇
pytp1q  ́ xxt, βtp1qyq2
 ̧
` Var
 ̃T ÿ
t“1
ˆ 1rZt “ 1s
pt
 ́1
 ̇
`ytp1q  ́ xxt, β ̊
t p1qy ̆2
 ̧
Àη ́2
T pηT T q1{2 log2pηT T qpηT T q25{64 ` T 5{4RT pηT T q1{4 pby the proofs in Lemma C.3 and C.22q
ÀT 3{2R2
T  ̈ pηT T q ́1`1{2`25{64 log2pηT T q
“opT 3{2R2
Tq ,
B2 “opT 3{2R2
Tq ,
B3 Àη ́2
T pηT T q1{2 log2pηT T qpηT T q25{64 pcheck the detailed proof in Lemma C.3q
“opT 3{2R2
Tq ,
B4 “opT 3{2R2
T q . (108)
Hence by (107) and (108), we have E
”
p∇HpT `1pu ̃qq2
ı
À B1 ` B2 ` B3 ` B4 “ opT 3{2R2
T q. Then by (106), we have
|S3| À T  ́1ηT E
”
p∇HpT `1pu ̃qq2ı
“ T  ́1T  ́1{2R ́2
T  ̈ opT 3{2R2
T q “ op1q . (109)
For S4, we have the following decomposition:
S4 “ 1
T
T
ÿ
t“1
E
„ 1rZt “ 1s
pt
 ̈ pytp1q  ́ xxt, βtp1qyq2  ̈ 1
p ̃ ` 1rZt “ 0s
1  ́ pt
 ̈ pytp0q  ́ xxt, βtp0qyq2  ̈ 1
1  ́ p ̃
ȷ
 ́1
T
T
ÿ
t“1
E
„ 1rZt “ 1s
pt
 ̈ pytp1q  ́ xxt, βtp1qyq2  ̈ 1
p ̆ ` 1rZt “ 0s
1  ́ pt
 ̈ pytp0q  ́ xxt, βtp0qyq2  ̈ 1
1  ́ p ̆
ȷ
` pηT T q ́1E rΨpp ̃q  ́ Ψpp ̆qs
128

“1
T
T
ÿ
t“1
E
„ 1rZt “ 1s
pt
 ̈ pytp1q  ́ xxt, βtp1qyq2  ̈
ˆ1
p ̃  ́ 1
p ̆
 ̇ȷ
`1
T
T
ÿ
t“1
E
„ 1rZt “ 0s
1  ́ pt
 ̈ pytp0q  ́ xxt, βtp0qyq2  ̈
ˆ1
1  ́ p ̃  ́ 1
1  ́ p ̆
 ̇ȷ
` pηT T q ́1E rΨpp ̃q  ́ Ψpp ̆qs
fiS4,1 ` S4,2 ` S4,3 . (110)
By Cauchy-Schwarz inequality and AM-GM inequality, we have the following decomposition for S4,1:
|S4,1| “
ˇ ˇ ˇ ˇ ˇ
1 T
T
ÿ
t“1
E
„ 1rZt “ 1s
pt
pytp1q  ́ xxt, βtp1qyq2  ̈
ˆ1
p ̃  ́ 1
p ̆
 ̇ȷ
ˇ ˇ ˇ ˇ ˇ
ď1
T
T
ÿ
t“1
E
„ 1rZt “ 1s
pt
pytp1q  ́ xxt, βtp1qyq2  ̈
ˇ ˇ ˇ ˇ
1
p ̃  ́ 1
p ̆
ˇ ˇ ˇ ˇ
ȷ
“1
T
T
ÿ
t“1
E
„ 1rZt “ 1s
pt
`ytp1q  ́ xxt, β ̊
t p1qy ` xxt, β ̊
t p1q  ́ βtp1qy ̆2  ̈
ˇ ˇ ˇ ˇ
1
p ̃  ́ 1
p ̆
ˇ ˇ ˇ ˇ
ȷ
À1
T
T
ÿ
t“1
E
„ 1rZt “ 1s
pt
`ytp1q  ́ xxt, β ̊
t p1qy ̆2  ̈
ˇ ˇ ˇ ˇ
1
p ̃  ́ 1
p ̆
ˇ ˇ ˇ ˇ
ȷ
`1
T
T
ÿ
t“1
E
„ 1rZt “ 1s
pt
xxt, βtp1q  ́ β ̊
t p1qy2  ̈
ˇ ˇ ˇ ˇ
1
p ̃  ́ 1
p ̆
ˇ ˇ ˇ ˇ
ȷ
fiD1 ` D2 . (111)
By Corollary B.11, Corollary 4.15, Corollary B.17, Lemma C.22, Hölder’s inequality and Assumption 3, we have
D1 “ 1
T
T
ÿ
t“1
E
„ 1rZt “ 1s
pt
 ̈
`ytp1q  ́ xxt, β ̊
t p1qy ̆2  ̈
ˇ ˇ ˇ ˇ
1
p ̃  ́ 1
p ̆
ˇ ˇ ˇ ˇ
ȷ
“1
T
T
ÿ
t“1
`ytp1q  ́ xxt, β ̊
t p1qy ̆2  ̈ E
„ 1rZt “ 1s
pt
 ̈
ˇ ˇ ˇ ˇ
1
p ̃  ́ 1
p ̆
ˇ ˇ ˇ ˇ
ȷ
ď1
T
T
ÿ
t“1
`ytp1q  ́ xxt, β ̊
t p1qy ̆2  ̈
ˆ
E
„ 1rZt “ 1s pt5
ȷ ̇1{5  ̃
E
«ˇ ˇ ˇ ˇ
1
p ̃  ́ 1
p ̆
ˇ ˇ ˇ ˇ
5{4ff ̧4{5
pHölder’s inequalityq
À1
T
T
ÿ
t“1
`ytp1q  ́ xxt, β ̊
t p1qy ̆2  ̈
ˆ
E
„1
pt4
ȷ ̇1{5  ́
T  ́5{24R1{6
T
 ̄4{5
pLemma C.22q
À
 ̃
1 T
T
ÿ
t“1
`ytp1q  ́ xxt, β ̊
t p1qy ̆2
 ̧
 ̈T1
8 ̈4
5  ̈ T  ́1{6R2{15
T pCorollary 4.15 and Corollary B.17q
ÀpT R ́4
T q ́1{15R ́2{15
T pCorollary B.11q
“op1q pAssumption 3q . (112)
By the definition of ArT p0q, Corollary B.11, Lemma 4.14 and Proposition 5.4, we have
1
p ̃ ďη1{4
T
Ar1{4
T p0q ď η1{4
T  ̈ pT 7{26R ́4{11
T  ̈ A ̊
T p0qq1{4 ď η1{4
T  ̈ pT 33{26R ́4{11
T q1{4 “ T 5{26R ́13{22
T,
1
p ̆ ďη1{4
T pA ̊
T p0qq1{4 À η1{4
T T 1{4 À T 5{26R ́13{22
T.
129

Hence by law of iterated expectation and (88), we have
D2 “ 2
T
T
ÿ
t“1
E
„ 1rZt “ 1s
pt
 ̈ xxt, βtp1q  ́ β ̊
t p1qy2  ̈
ˇ ˇ ˇ ˇ
1
p ̃  ́ 1
p ̆
ˇ ˇ ˇ ˇ
ȷ
ÀT  ́1`5{26R ́13{22
T
T
ÿ
t“1
E
„ 1rZt “ 1s
pt
 ̈ xxt, βtp1q  ́ β ̊
t p1qy2
ȷ
ďT  ́21{26R ́13{22
T
T
ÿ
t“1
E
“xxt, βtp1q  ́ β ̊
t p1qy2‰ pby law of iterated expectationq
ÀT  ́21{26R ́13{22
T  ̈ T 3{4 pby (88)q
“T  ́3{52R ́13{22
T
“op1q . (113)
By (111), (112) and (113), we have S4,1 “ op1q. Similarly, we can prove that S4,2 “ op1q. For S4,3, by similar method as in bounding S2, Corollary B.11 and Corollary 4.15, we have
|S4,3| ďpηT T q ́1E rΨpp ̃qs ` pηT T q ́1Ψpp ̆q
ÀpηT T q ́1E
„1
p ̃3 ` 1
p1  ́ p ̃q3
ȷ
` pηT T q ́1E
„1
p ̆3 ` 1
p1  ́ p ̆q3
ȷ
ÀpηT T q ́1 ”
η3{4
T E3{4ArT p0q ` η3{4
T E3{4ArT p1q ` η3{4
T pA ̊
T p0qq3{4 ` η3{4
T E3{4pA ̊
T p1qq3{4ı
pCorollary 4.15q
ÀpηT T q ́1 ”
η3{4
T pA ̊
T p0qq3{4 ` η3{4
T pA ̊
T p1qq3{4ı
ÀpηT T q ́1  ̈ pηT T q3{4 pCorollary B.11q
“pηT T q ́1{4
“op1q pAssumption 3q .
Hence by (110), we have S4 “ S4,1 ` S4,2 ` S4,3 “ op1q. For S5, we have the following decomposition:
S5 “ 1
T
T
ÿ
t“1
E
„ 1rZt “ 1s
pt
 ̈ pytp1q  ́ xxt, βtp1qyq2  ̈ 1
p ̆ ` 1rZt “ 0s
1  ́ pt
 ̈ pytp0q  ́ xxt, βtp0qyq2  ̈ 1
1  ́ p ̆
ȷ
 ́1
T
T
ÿ
t“1
E
„ 1rZt “ 1s
pt
 ̈ pytp1q  ́ xxt, βtp1qyq2  ̈ 1
p ̊ ` 1rZt “ 0s
1  ́ pt
 ̈ pytp0q  ́ xxt, βtp0qyq2  ̈ 1
1  ́ p ̊
ȷ
` pηT T q ́1 rΨpp ̆q  ́ Ψpp ̊qs
“1
T
T
ÿ
t“1
E
„
pytp1q  ́ xxt, βtp1qyq2  ̈ 1
p ̆ ` pytp0q  ́ xxt, βtp0qyq2  ̈ 1
1  ́ p ̆
ȷ
 ́1
T
T
ÿ
t“1
E
„
pytp1q  ́ xxt, βtp1qyq2  ̈ 1
p ̊ ` pytp0q  ́ xxt, βtp0qyq2  ̈ 1
1  ́ p ̊
ȷ
psince p ̆ and p ̊ are nonrandomq
` pηT T q ́1 rΨpp ̆q  ́ Ψpp ̊qs
“pηT T q ́1 rΨpp ̆q  ́ Ψpp ̊qs ` 1
T
T
ÿ
t“1
E
”
pytp1q  ́ xxt, βtp1qyq2ı
 ̈
ˆ1
p ̆  ́ 1
p ̊
 ̇
`1
T
T
ÿ
t“1
E
”
pytp0q  ́ xxt, βtp0qyq2ı
 ̈
ˆ1
1  ́ p ̆  ́ 1
1  ́ p ̊
 ̇
fiS5,1 ` S5,2 ` S5,3 . (114)
130

By similar method as in the previous step, we can prove that S5,1 “ op1q. For S5,2, we consider the following four cases:
(1) E1 ě E0 and A ̊
T p1q ě A ̊
T p0q.
In such case, by definition, p ̆ and p ̊ should satisfy:
 ́ A ̊
T p1q
p ̆2 ` A ̊
T p0q
p1  ́ p ̆q2 ` η ́1
T Ψpp ̆q “ 0 ,
 ́ T  ̈ E2p1q
pp ̊q2 ` T  ̈ E2p0q ` ∆
p1  ́ p ̊q2 ` η ́1
T Ψpp ̊q “ 0 ,
where ∆ fi  ́η ́1
T p1  ́ p ̊q2Ψpp ̊q. Since p ̊ is bounded away from 0 and 1 by Assumption 1, we have ∆ “ Opη ́1
T q “ opT q by Assumption 3. By Assumption 1, Lemma B.11 and similar proof as in Lemma C.21, it is easy to see that A ̊
T p1q “ ΘpT q and A ̊
T p0q “ ΘpT q, then we have 1{p ̆, 1{p1  ́ p ̆q “ Op1q and 1{p ̊, 1{p1  ́ p ̊q “ Op1q by Lemma 4.14. Then by Assumption 1, Lemma C.1, Lemma B.11 and similar proof as in Lemma C.21, we have
ˇ ˇ ˇ ˇ
1
p ̆  ́ 1
p ̊
ˇ ˇ ˇ ˇ
À |A ̊
T p1q  ́ T  ̈ E2p1q|
T  ̈ E2p1q ` |A ̊
T p0q  ́ T  ̈ E2p0q  ́ ∆|
T  ̈ E2p1q pLemma C.1q
ÀT  ́1  ̈ opT q ` T  ́1  ̈ opT q pAssumption 1, Lemma B.11 and Lemma C.21q
“op1q .
(2) E1 ď E0 and A ̊
T p1q ď A ̊
T p0q.
We can prove that
ˇ ˇ ˇ
1
p ̆  ́ 1
p ̊
ˇ ˇ
ˇ “ op1q by the same method as in case (1).
(3) E1 ě E0 and A ̊
T p1q ď A ̊
T p0q.
In such case, p ̆ and p ̊ satisfies:
 ́ A ̊
T p1q
p ̆2 ` A ̊
T p0q
p1  ́ p ̆q2 ` η ́1
T Ψpp ̆q “ 0 ,
 ́ T  ̈ E2p1q
pp ̊q2 ` T  ̈ E2p0q ` ∆
p1  ́ p ̊q2 ` η ́1
T Ψpp ̊q “ 0 ,
where ∆ fi  ́η ́1
T p1  ́ p ̊q2Ψpp ̊q “ opT q. Then by Lemma B.11 and similar proof as in Lemma C.21, we have
0 ď A ̊
T p0q  ́ A ̊
T p1q ďT  ̈ E2p0q  ́ T  ̈ E2p1q ` |A ̊
T p1q  ́ T  ̈ E2p1q| ` |A ̊
T p0q  ́ T  ̈ E2p0q|
ď|A ̊
T p1q  ́ T  ̈ E2p1q| ` |A ̊
T p0q  ́ T  ̈ E2p0q|
“opT q .
Then by Lemma C.2, we have
ˇ ˇ ˇ ˇ
1
p ̆  ́ 2
ˇ ˇ ˇ ˇ
“
ˇ ˇ ˇ ˇ
p ̆  ́ p1{2q
p ̆  ̈ p1{2q
ˇ ˇ ˇ ˇ
ď
ˇ ˇ ˇ ˇ
p ̆  ́ p1{2q
p1  ́ p ̆q  ̈ p1{2q
ˇ ˇ ˇ ˇ
“
ˇ ˇ ˇ ˇ
1
1  ́ p ̆  ́ 2
ˇ ˇ ˇ ˇ
ď A ̊
T p0q  ́ A ̊
T p1q 2A ̊
T p1q “ op1q .
Similarly we can prove that T  ̈ E2p1q  ́ T  ̈ E2p0q “ opT q. Then by Assumption 1 and Lemma C.2, we have
ˇ ˇ ˇ ˇ
1
p ̊  ́ 2
ˇ ˇ ˇ ˇ
ď T  ̈ E2p1q  ́ T  ̈ E2p0q  ́ ∆
T  ̈ E2p0q ` ∆ “ op1q .
Hence we have
ˇ ˇ ˇ ˇ
1
p ̆  ́ 1
p ̊
ˇ ˇ ˇ ˇ
ď
ˇ ˇ ˇ ˇ
1
p ̆  ́ 2
ˇ ˇ ˇ ˇ
`
ˇ ˇ ˇ ˇ
1
p ̊  ́ 2
ˇ ˇ ˇ ˇ
“ op1q .
131

(4) E1 ď E0 and A ̊
T p1q ě A ̊
T p0q.
We can prove that
ˇ ˇ ˇ
1
p ̆  ́ 1
p ̊
ˇ ˇ
ˇ “ op1q by the same method as in case (3).
By the discussions in these four cases, we proved that
ˇ ˇ ˇ
1
p ̆  ́ 1
p ̊
ˇ ˇ
ˇ “ op1q. Then by Corollary B.17 and (88), we have
|S5,2| ď 1
T
T
ÿ
t“1
E
”
pytp1q  ́ xxt, βtp1qyq2ı
 ̈
ˇ ˇ ˇ ˇ
1
p ̆  ́ 1
p ̊
ˇ ˇ ˇ ˇ
“1
T
 ̃T ÿ
t“1
`ytp1q  ́ xxt, β ̊
t p1qy ̆2 ` E
«T ÿ
t“1
xxt, βtp1q  ́ β ̊p1qy2
ff ̧
 ̈
ˇ ˇ ˇ ˇ
1
p ̆  ́ 1
p ̊
ˇ ˇ ˇ ˇ
ÀT  ́1  ̈ T  ̈ op1q
“op1q .
Similarly, we can show that S5,3 “ op1q. Hence S5 “ op1q by (114), which indicates that
1
T ErRprob
T s “ op1q  ́ S1  ́ S2 ` S3 ` S4 ` S5 “ op1q by (103), (104), (105) and (109). Since T  ̈ V ̊ “ 2p1 ` ρqEp1qEp0q, the result is proved.
The explicit form of the asymptotic variance in Theorem 5.1 establishes the equivalence between Assumption 4 and the non-superefficiency condition, which is stated in the Corollary 5.2.
Corollary 5.2 (Non-Superefficiency). Under Assumptions 1-4 and Condition 1, lim infT Ñ8 T  ̈ Varpτˆq ą 0.
Proof. It is easy to see that  ́1 ď ρ ď 1 by Cauchy-Schwarz inequality. Since c0 ď Ep0q, Ep1q ď c1 by Assumption 1, the result is proved by Assumption 4 and Theorem 5.1.
C.4 Variance Estimator
Recall that the variance estimator is proposed as:
App1q “ 1
T
T
ÿ
t“1
Qt,tY 2
t
1rZt “ 1s
pt
`1
T
T
ÿ
t“1
ÿ
s‰t
Qt,sYtYs
1rZt “ 1, Zs “ 1s
pspt
and
App0q “ 1
T
T
ÿ
t“1
Qt,tY 2
t
1rZt “ 0s 1  ́ pt
`1
T
T
ÿ
t“1
ÿ
s‰t
Qt,sYtYs
1rZt “ 0, Zs “ 0s
p1  ́ psqp1  ́ ptq .
In this section, we establish the consistency of the proposed variance estimator and characterize its convergence rate. The following lemma provides an upper bound for the deterministic terms involved in controlling the variance of the estimator.
Lemma C.24. Under Assumptions 1-2, for k P t0, 1u, there holds:
(1) řT
t“1 Qt2,tyt4pkq ď c41T .
(2) ř
1ďt1‰t2ďT Qt21,t2 yt21 pkqyt22 pkq
 ́ RT Rt1
 ̄1{2  ́ RT
Rt2
 ̄1{2
ď c41c2R2
T.
Proof. We only prove the result for k “ 1.
(1) We have Q “
 ́
IT  ́ XT
`X ⊺
T XT
 ̆ ́1 X⊺
T
 ̄
by definition. Since Q ĺ IT , we have Qt,t ď }Q}2 ď 1 for any t P rT s. Hence by Assumption 1, we have
T
ÿ
t“1
Q2
t,ty4
t p1q ď c4
1T .
132

(2) Denote H “ XT
`X ⊺
T XT
 ̆ ́1 X⊺
T and
HĂ “ diag
#
ˆ RT
R1
 ̇1{2
,...,
ˆ RT
RT
 ̇1{2+
H diag
#
ˆ RT
R1
 ̇1{2
,...,
ˆ RT
RT
 ̇1{2+
.
It is easy to see that HĂ is positive definite. Denote Y “ py12p1q, . . . , y2
T p1qq⊺. For any 1 ď i ‰ j ď T , it is easy to see that Hij “  ́Qij. Hence we have
ÿ
1ďt1 ‰t2 ďT
Q2
t1,t2 y2
t1 p1qy2
t2 p1q
ˆ RT
Rt1
 ̇1{2 ˆ RT
Rt2
 ̇1{2
“
ÿ
1ďt1 ‰t2 ďT
H2
t1,t2 y2
t1 p1qy2
t2 p1q
ˆ RT
Rt1
 ̇1{2 ˆ RT
Rt2
 ̇1{2
ď
ÿ
1ďt1 ,t2 ďT
H2
t1,t2 y2
t1 p1qy2
t2 p1q
ˆ RT
Rt1
 ̇1{2 ˆ RT
Rt2
 ̇1{2
“Y ⊺pH  ̋ HĂqY .
The t-th diagonal element of HĂ is bounded by:
Hrt,t “
ˆ RT
Rt
 ̇
Ht,t ď
ˆ RT
Rt
 ̇
}xt}2
2
› › ›
`X ⊺
T XT
 ̆ ́1›
›
›2 ď c2T  ́1
ˆ RT
Rt
 ̇
R2
t ď c2R2
T T  ́1 .
Then by Theorem 5.3.4 in Horn and Johnson, 2012, we have
}H  ̋ HĂ}2 ď}H}2 max
t“1,...,T
Hrt,t
ď
›
›
›X T
`X ⊺
T XT
 ̆ ́1 X⊺
T
› ›
›2  ̈ c2R2
T T  ́1
ď
› ›
›X ⊺
T XT
`X ⊺
T XT
 ̆ ́1›
›
›2  ̈ c2R2
T T  ́1
ďc2R2
T T  ́1 .
Hence by Assumption 1, we have
ÿ
1ďt1 ‰t2 ďT
Q2
t1,t2 y2
t1 p1qy2
t2 p1q
ˆ RT
Rt1
 ̇1{2 ˆ RT
Rt2
 ̇1{2
ďY ⊺pH  ̋ HĂqY
ď}H  ̋ HĂ}2
T
ÿ
t“1
y4
t p1q
ďc4
1c2R2
T.
We now bound the variance of the estimated squared OLS in the following theorem:
Theorem 5.6. Under Assumptions 1-3 and Condition 1, for each treatment k P t0, 1u, we have that the estimated squared OLS residuals satisfy
ErAppkqs “ Apkq and VarpAppkq2q “ OptT  ́5{12R2{3u2q .
133

Proof. We only prove the result for k “ 1. We first verify the unbiasedness of App1q. By law of iterated expectation, we have
ErApp1qs
“1
TE
«T ÿ
t“1
Qt,ty2
t p1q  ̈ 1rZt “ 1s
pt
`
ÿ
1ďt1 ‰t2 ďT
Qt1,t2 yt1 p1qyt2 p1q  ̈ 1rZt1 “ 1s
pt1
1rZt2 “ 1s
pt2
ff
“1
T
T
ÿ
t“1
E
«T ÿ
t“1
Qt,ty2
t p1q  ̈ 1rZt “ 1s
pt
ff
`2
T
ÿ
1ďt1 ăt2 ďT
E
„
E
„
Qt1,t2 yt1 p1qyt2 p1q  ̈ 1rZt1 “ 1s
pt1
1rZt2 “ 1s
pt2
ˇ
ˇ
ˇFt2 ́1
ȷȷ
“1
T
T
ÿ
t“1
Qt,ty2
t p1q ` 2
T
ÿ
1ďt1 ăt2 ďT
E
„
Qt1,t2 yt1 p1qyt2 p1q  ̈ 1rZt1 “ 1s
pt1
ȷ
“1
T
T
ÿ
t“1
Qt,ty2
t p1q ` 2
T
ÿ
1ďt1 ăt2 ďT
Qt1,t2 yt1 p1qyt2 p1q
“1
T ypkq⊺Qypkq
“Ap1q .
Now we turn to bounding the variance of App1q. By Cauchy-Schwarz inequality and AM-GM inequality, we have:
VarpApp1qq
“1
T 2 Var
 ̃T ÿ
t“1
Qt,ty2
t p1q  ̈ 1rZt “ 1s
pt
`
ÿ
1ďt1 ‰t2 ďT
Qt1,t2 yt1 p1qyt2 p1q  ̈ 1rZt1 “ 1s
pt1
1rZt2 “ 1s
pt2
 ̧
À1
T 2 Var
 ̃T ÿ
t“1
Qt,ty2
t p1q  ̈ 1rZt “ 1s
pt
 ̧
`1
T 2 Var
 ̃ ÿ
1ďt1 ‰t2 ďT
Qt1,t2 yt1 p1qyt2 p1q  ̈ 1rZt1 “ 1s
pt1
1rZt2 “ 1s
pt2
 ̧
À1
T2
T
ÿ
t“1
Q2
t,ty4
t p1q Var
ˆ 1rZt “ 1s
pt
 ́1
 ̇
`1
T2
ÿ
1ďt1 ‰t2 ďT
Q2
t1,t2 y2
t1 p1qy2
t2 p1q Var
ˆ 1rZt1 “ 1s
pt1
1rZt2 “ 1s
pt2
 ̇
`1
T2
ÿ
1ďt2 ‰t3 ăt1 ďT
Qt1,t2 Qt1,t3 y2
t1 p1qyt2 p1qyt3 p1q Cov
ˆ 1rZt1 “ 1s
pt1
1rZt2 “ 1s
pt2
, 1rZt1 “ 1s
pt1
1rZt3 “ 1s
pt3
 ̇
fiS1 ` S2 ` S3 .
By similar method as in the proof of Lemma B.18 and Lemma C.17, we can show that
max
1ďtďT Var
ˆ 1rZt “ 1s
pt
 ́1
 ̇
“ OpT 1{8q ,
max
1ďt1‰t2ďT Var
ˆ 1rZt1 “ 1s
pt1
1rZt2 “ 1s
pt2
 ̇
“ OpT 9{32q ,
max
1ďt2 ‰t3 ăt1 ďT
ˇ ˇ ˇ ˇ
Cov
ˆ 1rZt1 “ 1s
pt1
1rZt2 “ 1s
pt2
, 1rZt1 “ 1s
pt1
1rZt3 “ 1s
pt3
 ̇ˇ ˇ ˇ ˇ
À
 ́
2 ` b1pb2{6q1{4η1{4
t1 E1{4Apt1 p0q
 ̄81{64 ˆ Rt1
Rt2
 ̇9{128 ˆ Rt1
Rt3
 ̇9{128
.
Then by Lemma C.24, AM-GM inequality and Assumption 3, we have
|S1| ÀT  ́1  ̈ T 1{8 “ T  ́7{8,
|S2| ÀR2
T T  ́2  ̈ T 9{32 “ T  ́1  ̈ pT R ́4
T q ́23{32  ̈ R ́7{8
T “ opT  ́1q,
134

|S3| ď 1
T2
ÿ
1ďt2 ‰t3 ăt1 ďT
|Qt1,t2 ||Qt1,t3 |y2
t1 p1q|yt2 p1q||yt3 p1q|
ˇ ˇ ˇ ˇ
Cov
ˆ 1rZt1 “ 1s
pt1
1rZt2 “ 1s
pt2
, 1rZt1 “ 1s
pt1
1rZt3 “ 1s
pt3
 ̇ˇ ˇ ˇ ˇ
À1
T2
ÿ
1ďt2 ‰t3 ăt1 ďT
|Qt1,t2 ||Qt1,t3 |y2
t1 p1q|yt2 p1q||yt3 p1q|pηt1 T q81{256
ˆ Rt1
Rt2
 ̇9{128 ˆ Rt1
Rt3
 ̇9{128
ď1
T2
ÿ
1ďt2 ‰t3 ăt1 ďT
|Qt1,t2 ||Qt1,t3 |y2
t1 p1q|yt2 p1q||yt3 p1q|pηT T q81{256
ˆ RT
Rt1
 ̇81{128 ˆ Rt1
Rt2
 ̇9{128 ˆ Rt1
Rt3
 ̇9{128
“1
T2
ÿ
1ďt2 ‰t3 ăt1 ďT
|Qt1,t2 ||Qt1,t3 |y2
t1 p1q|yt2 p1q||yt3 p1q|pηT T q81{256
ˆ RT
Rt1
 ̇63{128 ˆ RT
Rt2
 ̇9{128 ˆ RT
Rt3
 ̇9{128
ÀT  ́1pηT T q81{256 ÿ
1ďt2 ăt1 ďT
Q2
t1,t2 y2
t1 p1qy2
t2 p1q
ˆ RT
Rt1
 ̇63{128 ˆ RT
Rt2
 ̇9{64
ÀT  ́1pηT T q81{256 ÿ
1ďt1 ‰t2 ďT
Q2
t1,t2 y2
t1 p1qy2
t2 p1q
ˆ RT
Rt1
 ̇1{2 ˆ RT
Rt2
 ̇1{2
ÀT  ́1pηT T q81{256R2
T
“T  ́1R2
T pT R ́4
T q81{512
ÀT  ́1R2
T pT R ́4
T q1{6 .
Hence by Lemma B.5, we have
VarpApp1qq ÀS1 ` S2 ` S3
ÀT  ́7{8 ` T  ́1 ` T  ́1R2
T pT R ́4
T q1{6
“T  ́1R2
T pT R ́4
T q1{6  ̈
 ́
T  ́1{24R ́4{3
T ` T  ́1{6R ́4{3
T `1
 ̄
ÀT  ́1R2
T pT R ́4
T q1{6
“T  ́5{6R4{3
T
ÀpT  ́5{12R2{3q2 .
The following corollary is implied by Theorem 5.6, which implies the consistency of the variance estimator.
Corollary 5.7. Under Assumptions 1-3 and Condition 1, T  ̈ VyB  ́ T  ̈ VB “ OppT  ́5{12R2{3q.
Proof. Recall that T  ̈ VB “ 4Ep1qEp0q and T  ̈ VyB “ 4Epp1qEpp0q. By the definition of Eppkq and Theorem 5.6, we have
|
Ep2pkq  ́ E2pkq| ď |Appkq  ́ E2pkq| “ |Appkq  ́ Apkq| “ OppT  ́5{12R2{3q .
Since Epkq “ Θp1q by Assumption 1, it is easy to show that |Eppkq  ́ Epkq| “ OppT  ́5{24R1{3q. Then by Assumption 1, we can directly show that
Epp1qEpp0q  ́ Ep1qEp0q “ OppT  ́5{12R2{3q ,
which implies that T  ̈ VyB  ́ T  ̈ VB “ OppT  ́5{12R2{3q.
C.5 Wald-type Confidence Intervals
Under the central limit theorem (Theorem C.20) and the consistency of the variance estimator (Corollary 5.7), it is easy to prove the following lemma regarding the asymptotic coverage of the Wald-type confidence intervals.
135

Corollary 5.8. Under Assumptions 1-4 and Condition 1, the Wald-type intervals cover at the nominal level: lim infT Ñ8 Prpτ P CxIαq ě 1  ́ α.
136

---

## Processing Information

- **Processing Library:** Zotero PDFWorker
- **Processing Date:** 2026-02-10T18:15:30.213Z
- **Text Length:** 290143 characters
- **Success:** Text extraction completed
- **PDF Library Used:** Zotero PDFWorker
- **Pages Processed:** 138 of 138
