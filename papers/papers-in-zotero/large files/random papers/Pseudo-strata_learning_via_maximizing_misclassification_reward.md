# PDF Document: Luo et al. - 2025 - Pseudo-strata learning via maximizing misclassification reward.pdf

**File Path:** Luo et al. - 2025 - Pseudo-strata learning via maximizing misclassification reward.pdf

**Processed Date:** 2026-02-10T18:14:52.884Z

**File Size:** 572.47 KB

**Total Pages:** 38

**Extracted Pages:** 38

**PDF Library:** Zotero PDFWorker

**Attachment Item ID:** 3441

**Title:** Pseudo-strata learning via maximizing misclassification reward

**Collection:** Large Files > Random Papers

---

## Extracted Text Content

Pseudo-strata learning via maximizing
misclassification reward
Shanshan Luo1, Peng Wu1*, Zhi Geng1,2
1School of Mathematics and Statistics, Beijing Technology and Business University
2School of Mathematical Sciences, Peking University
Abstract
Online advertising aims to increase user engagement and maximize revenue, but users respond heterogeneously to ad exposure. Some users purchase only when exposed to ads, while others purchase regardless of exposure, and still others never purchase. This heterogeneity can be characterized by latent response types, commonly referred to as principal strata, defined by users’ joint potential outcomes under exposure and non-exposure. However, users’ true strata are unobserved, making direct analysis in-
feasible. In this article, instead of learning the true strata, we propose a novel approach that learns users’ pseudo-strata by leveraging information from an outcome (revenue) observed after the response (purchase). We construct pseudo-strata to classify users and introduce misclassification rewards to quantify the expected revenue gain of pseudo-strata-based policies relative to true strata. Within a Bayesian classification framework, we learn the pseudo-strata by optimizing the expected revenue-
. To implement these procedures, we introduce identification assumptions and estimation methods, and establish their large-sample properties. Simulation studies show that the proposed method achieves more accurate strata classification and substantially higher revenue than baselines. We further illustrate the method using a large-scale industrial dataset from the Criteo Predictive Search Platform.
Keywords: Bayesian decision theory, policy learning, principal stratification, pseudo-type classification
1 Introduction
1.1 Background and Main Contributions
In ad recommendation settings, when users are exposed to an ad, they may exhibit diverse purchase behaviors (responses), resulting in varying levels of revenue (outcomes). To characterize such individual heterogeneity, we introduce a latent variable, referred to as principal stratification (strata) (Frangakis and Rubin, 2002), which is defined by the joint values of potential response variables. This latent variable typically takes four possible values, representing four distinct user types: alway-
s buyers, who purchase regardless of ad exposure; never buyers, who never purchase under any condition; persuadable buyers, who purchase only when exposed to the ad; and discouraged buyers, who purchase only when not exposed to the ad. Inferring principal strata enables at least three key applications with significant theoretical and practical implications:
1
arXiv:2511.20318v1 [stat.ME] 25 Nov 2025

(i) Causal attribution analysis. Knowledge of principal strata enables causal attribution by exploring users who are persuaded, discouraged, or unaffected by ad exposure (Kuroki and Cai, 2011; Pearl, 2009; Shingaki and Kuroki, 2021).
(ii) Optimal ad recommendation policy. Knowledge of principal strata enables the development of optimal ad recommendation policies that maximize revenue under resource constraints. Platforms can expose ads to persuadable buyers, avoid discouraged buyers, and exclude always and never buyers (Ben-Michael et al., 2024; Li et al., 2023; Wu et al., 2025).
(iii) Principal causal effects. Naive revenue comparisons between purchasers with and without ad exposure lack causal interpretability due to latent strata heterogeneity. Valid causal inference requires conditioning on latent principal strata (Ding et al., 2011; Jiang and Ding, 2021; Jiang et al., 2016; Wang et al., 2017).
Despite these important applications, the true principal strata are unobserved, rendering direct learning infeasible. In this article, instead of learning the true strata, we propose a novel approach that learns users’ pseudo-strata by leveraging information from an outcome variable (revenue) observed after the response (purchase). Specifically, we make four main contributions:
(i) We propose a novel conceptual framework for learning pseudo-strata. The framework proceeds in three steps. First, we construct pseudo-strata to classify users and define the corresponding optimal policies. Second, we introduce misclassification rewards to quantify the expected revenue of each policy conditional on users’ true principal strata. Finally, we define the optimal pseudo-strata and learn them by maximizing the expected revenue.
(ii) We establish identification results under a new set of model separation conditions, which disentangle treatment effects across latent response strata, and further ensure that both the misclassification reward and the pseudo-strata are identifiable from observed data.
(iii) We develop flexible estimation and inference procedures that accommodate both parametric and semiparametric specifications, and establish their large-sample properties, including consistency and convergence rates.
(iv) Simulation studies show that the proposed method achieves more accurate classification and substantially higher policy revenue than baselines. An empirical analysis on a large-scale industrial dataset from the Criteo Predictive Search platform further demonstrates its practical effectiveness, yielding significantly higher revenue.
1.2 Related Work
Instead of learning the true principal strata, much of the existing literature has focused on deriving bounds for the strata probability distribution under minimal assumptions. For example, Tian and Pearl (2000) derived sharp bounds for strata probabilities under the strong ignorability assumption, while Kuroki and Cai (2011) further tightened these bounds by incorporating covariate information. Dawid et al. (2017) showed that introducing auxiliary information through a mediator can narrow these b-
ounds, and Wu et al. (2025) proposed tighter bounds by imposing constraints on the correlation coefficient between potential outcomes. Nevertheless, these bounds are often too wide to support precise causal inference; subsequent research has explored conditions under which point identification of strata probabilities becomes
2

achievable. Tian and Pearl (2000) presented identification results under the monotonicity assumption, provided that the marginal causal effects themselves are identifiable. Similarly, Pearl (2009) derived explicit functional relationships linking causal effects to strata probabilities. Within the framework of natural direct and indirect effects (Pearl, 2022), Robins and Richardson (2010) demonstrated that under the assumption of no unmeasured confounding, strata probabilities are identifiable if -
either (i) the two potential response variables are independent, or (ii) one is a deterministic function of the other. Shingaki and Kuroki (2021) proposed two classes of identification conditions: one incorporates a single proxy variable together with causal risks, while the other relies on two proxy variables without using causal risks. Zhang et al. (2009) established that when the outcome variable follows a mixture of normal distributions, the proportions of strata are also identifiable. Alterna-
tive stochastic monotonicity assumptions for two potential purchase outcomes were used by Roy et al. (2008) and Lee et al. (2010) to establish the identification of strata probabilities. Unlike existing work that focuses on estimating principal strata probabilities (or their bounds), our approach aims to learn pseudo-strata that maximize expected revenue while accounting for potential misclassification of principal strata. This aligns naturally with practical objectives in causal inference, such a-
s quantifying population heterogeneity, characterizing strata-specific causal effects, and designing optimal treatment policies to maximize revenue.
2 Notation and Setup
Assume that n individuals are independently sampled from an infinite superpopulation. For each individual i, let Zi denote the treatment indicator describing whether the individual is exposed to an ad, Xi denote a vector of m-dimensional covariates such as demographic characteristics, Si denote the response status representing whether the individual would purchase the product, and Yi denote the revenue corresponding to the purchase behavior. Using the potential outcomes framework, each individual -
has two potential response statuses: S1i if treated (ad exposure) and S0i if untreated (control, ad non-exposure). Similarly, Similarly, each individual has two potential revenues: Y1i, corresponding to ad exposure, and Y0i, corresponding to non-exposure. Under the consistency assumption, Yi = ZiY1i + (1 − Zi)Y0i and Si = ZiS1i + (1 − Zi)S0i. For notational simplicity, we suppress the subscript i in the subsequent exposition. In practice, some individuals may view an ad but choose not to purchase,-
 while others may purchase without being exposed to the ad. To capture such heterogeneity in behavior, we adopt the types framework (Angrist et al., 1996) or the principal stratification framework (Frangakis and Rubin, 2002; Rubin, 2006) under which individuals are categorized into four latent strata: always buyers (G = 11, with S0 = S1 = 1) purchase regardless of treatment; never buyers (G = 00, with S0 = S1 = 0) never purchase; persuadable buyers (G = 01, with S0 = 0, S1 = 1) purchase only when -
treated; and discouraged buyers (G = 10, with S0 = 1, S1 = 0) purchase only when untreated. Let πs0s1(X) := pr(G = s0s1 | X) denote the conditional probability that an individual with covariates X belongs to the type G = s0s1. Although the four strata provide a useful conceptual framework, each individual’s true type G remains unobserved. Learning this latent variable is critical for three key applications: (i) principal causal effects, such as understanding treatment effect heterogeneity across s-
trata (Ding et al., 2011; Jiang et al., 2016; Wang et al., 2017); (ii) causal attribution, such as determining which ads drive conversions (Kuroki and Cai, 2011; Shingaki and Kuroki, 2021); and (iii) personalized recommendation policy, such as targeting high-value users to maximize revenue (Ben-Michael et al., 2024;
3

Li et al., 2023; Wu et al., 2025). In this article, we propose a novel classification-based approach that learns individuals’ principal strata while maximizing expected revenue under misclassification uncertainty. Before introducing the proposed method, we discuss a commonly used approach and reveal its limitation in our setting, see Remark 1 below.
Remark 1. An intuitive approach, referred to as the posterior mode rule, infers an individual’s strata by computing the probabilities of belonging to each of the four strata (11, 01, 10, 00) and assigning the individual to the stratum with the highest probability (see, e.g., Dawid et al., 2017; Kuroki and Cai, 2011; Pearl, 2009; Shingaki and Kuroki, 2021; Tian and Pearl, 2000; Zhang et al., 2009); also see (10) in Section 6.3 for details. However, these probabilities are typically derived from X a-
nd S alone, without incorporating the information contained in Y . Such a classification approach often yields less accurate strata, resulting in suboptimal recommendation policies and substantial economic losses, as demonstrated in our simulation studies and real-world applications, where this method is included as a baseline for numerical comparison.
Let Lz,s0s1(X) = E(Yz | G = s0s1, X) denote the conditional expectation of the potential outcome Yz given the true principal stratum G = s0s1 and covariates X. In the context of personalized treatment assignment, Lz,s0s1(X) represents the expected revenue (utility) from assigning treatment z to an individual in stratum s0s1 with covariates X. A key feature of our setting is that the post-treatment outcome (revenue) is only observed for individuals who complete the intermediate response (purchase).-
 This structural constraint naturally implies L0,01(X) = L1,10(X) = L0,00(X) = L1,00(X) = 0, which states that individuals who do not purchase under treatment z generate zero revenue (utility). We define the marginal expected utility for stratum G = s0s1 under treatment z as Lz,s0s1 := E(Yz | G = s0s1).
3 Statistical Framework for Pseudo-Strata Learning
3.1 Optimal Treatment Policy Based on Strata
In this section, we assume that the causal estimands πs0s1(X) and Lz,s0s1(X) are known, to illustrate the main ideas of the proposed framework. Given covariates X, let c1(X) and c0(X) denote the known costs of treatment and control, respectively. In an ideal scenario where the true principal stratification G were known, the optimal treatment policy ρ(G, X) is defined as follows:
• Always buyers (G = 11): For individuals who purchase regardless of treatment, the decision rule ρ(11, X) = I{L1,11(X) − c1(X) ≥ L0,11(X) − c0(X)} compares net profits under both conditions. Treatment (Z = 1) is recommended if its net profit exceeds that of control. otherwise, control (Z = 0) is recommended.
• Persuadable buyers (G = 01): For individuals who only purchase when treated, the policy ρ(01, X) = I{L1,01(X) − c1(X) ≥ −c0(X)} compares the net profit under treatment with the cost of control. Treatment is recommended if the net profit under treatment exceeds the cost of control; Otherwise, control is recommended.
• Discouraged buyers (G = 10): For individuals who only purchase when untreated, the policy ρ(10, X) = I{−c1(X) ≥ L0,10(X) − c0(X)} compares the net profit under control with the cost of treatment. Control is recommended if its net profit exceeds the cost of treatment; otherwise, treatment is recommended.
4

• Never buyers (G = 00): For individuals who never purchase, the policy ρ(00, X) = I{−c1(X) ≥ −c0(X)} (equivalently, c1(X) ≤ c0(X)) depends solely on minimizing cost. Treatment is recommended if c1(X) ≤ c0(X); otherwise, control is recommended.
The above policy ρ(s0s1, X) depends on the true principal stratum G for each individual. However, G is unobserved in practice. To proceed, in the next subsection, we construct a pseudo-stratum G ̃ to approximate each individual’s true stratum G. The pseudo-stratum G ̃ is a classifier that maps each individual to one of the four strata {00, 01, 10, 11} based on their observed characteristics X. We suppress X in the notation for G ̃ to emphasize that it serves as an approximation to the true G. Once-
 each individual is assigned a pseudo-stratum G ̃ = s ̃0s ̃1, we apply the corresponding treatment policy ρ(s ̃0s ̃1, X) for tailored ad recommendations.
Remark 2. In terms of policy learning alone, an alternative approach to obtaining the optimal policy is to optimize the overall revenue directly. Specifically, for a given policy d(X), when πs0s1(X) and Lz,s0s1(X) are known, the overall revenue (or value function) V (d) is defined as
V (d) =
X
s0,s1∈{0,1}
E I(G = s0s1)
h
d(X) {L1,s0s1 (X) − c1(X)} + {1 − d(X)} {L0,s0s1 (X) − c0(X)}
i
=
X
s0,s1∈{0,1}
E πs0s1 (X)
h
d(X) {L1,s0s1 (X) − c1(X)} + {1 − d(X)} {L0,s0s1 (X) − c0(X)}
i
.
(1)
The optimal policy is the one that maximizes V (d) (possibly within a pre-specified policy class). We compare our proposed method with this direct optimization approach in both simulation studies and real data analysis, where our method demonstrates superior performance.
3.2 Misclassification Probability and Reward
In this subsection, we consider the misclassification probability and the reward induced by the pseudo-strata G ̃. For any given pseudo-strata G ̃, it induces a partition of the covariate space X : D ̃ s ̃0s ̃1 = {X ∈ X : G ̃ = s ̃0s ̃1}, where D ̃ 00 ∪ D ̃ 01 ∪ D ̃ 10 ∪ D ̃ 11 = X and the sets are mutually disjoint.
Let pr(G ̃ = s ̃0s ̃1 | G = s0s1) denote the probability that individuals with true principal stratum G = s0s1 are classified into pseudo-stratum G ̃ = s ̃0s ̃1. We express this misclassification probability as:
pr(G ̃ = s ̃0s ̃1 | G = s0s1) = pr(X ∈ D ̃ s ̃0s ̃1 | G = s0s1) =
Z
D ̃ s ̃0s ̃1
f (x | G = s0s1) dx,
where f (x | G = s0s1) denotes the conditional density of covariates X given true principal stratum G = s0s1.
Figure 1 provides an illustration of the misclassification probabilities pr(G ̃ = s ̃0s ̃1 | G = 11) for a given true principal stratum G = 11, assuming that the covariate space X is partitioned into four regions, D ̃00, D ̃01, D ̃10, and D ̃11, corresponding to the four pseudo-strata. The conditional density f (x | G = 11) illustrates how individuals with true principal stratum G = 11 are distributed across the covariate space, with the shaded area under the curve in each region representing the -
corresponding misclassification probability pr(G ̃ = s ̃0s ̃1 | G = 11). In addition to accounting for the probability of misclassification, it is also important to assess the potential revenue when a misclassified individual receives a treatment inconsistent with the
5

X
f (x | G = 11)
D ̃ 00
D ̃ 01 D ̃ 10
D ̃ 11
pr(G ̃ = 10 | G = 11)
pr(G ̃ = 01 | G = 11)
pr(G ̃ = 00 | G = 11) pr(G ̃ = 11 | G = 11)
Figure 1: Illustration of misclassification probabilities pr(G ̃ = s ̃0s ̃1 | G = 11) for a given true principal stratum G = 11.
true stratification. Specifically, suppose an individual’s true principal stratum is G = s0s1, but they are misclassified as G ̃ = s ̃0s ̃1 and consequently receive the policy ρ(s ̃0s ̃1, X) defined in Section 3.1. The individual’s actual outcomes will follow the response pattern of their true principal stratum G = s0s1, but the treatment policy is determined by the misclassified stratum G ̃ = s ̃0s ̃1, leading to a potentially suboptimal revenue realization. We define the expected revenue under s-
uch misclassification, referred to as the conditional misclassification reward, as follows:
R(s ̃0s ̃1 | s0s1) = E [{L1,s0s1(X) − c1(X)}ρ(s ̃0s ̃1, X) | G = s0s1]
+ E [{L0,s0s1(X) − c0(X)}{1 − ρ(s ̃0s ̃1, X)} | G = s0s1] . (2)
The quantity R(s ̃0s ̃1 | s0s1) includes three key components: (i) Lz,s0s1(X) − cz(X) represents the net profit from treatment Z = z for true principal stratum G = s0s1; (ii) ρ(s ̃0s ̃1, X) determines the treatment policy based on the pseudo-strata G ̃ = s ̃0s ̃1; and (iii) the expectation is conditional on the true principal stratum s0s1, ensuring evaluation relative to actual response behavior. When G ̃ = G = s0s1, R(s0s1 | s0s1) attains the maximum expected revenue; this implicitly suggests tha-
t the outcome Y may provide information on the learning principal-strata labels G. When G ̃ ̸= G, R(s0s1 | s0s1) quantifies the revenue under misclassification, providing a revenuebased criterion for evaluating the average performance of pseudo-strata G ̃.
3.3 Determining Pseudo-Strata by Maximizing the Average Misclassification Reward
With the concepts of misclassification probabilities and misclassification rewards, we introduce the average misclassification reward for any given pseudo-strata G ̃:
V (G ̃) =
X
s0,s1∈{0,1}
pr(G = s0s1)
X
s ̃0,s ̃1∈{0,1}
pr(G ̃ = s ̃0s ̃1 | G = s0s1)R(s ̃0s ̃1 | s0s1). (3)
The inner sum computes the expected revenue for individuals with true principal stratum G = s0s1, averaging over all possible pseudo-strata, each weighted by its misclassification probability. The outer sum averages these expected revenues over all strata, weighted by their marginal probabilities
6

True stratum Conditional
misclassification reward
Misclassification probability
Average misclassification reward
G = 11
pr(G = 11)
G = 10
pr(G = 10)
G = 01
pr(G = 01)
G = 00
pr(G = 00)
Ge = 11 : R(11 | 11)
Ge = 10 : R(10 | 11)
Ge = 01 : R(01 | 11)
Ge = 00 : R(00 | 11)
Ge = 11 : R(11 | 10)
Ge = 10 : R(10 | 10)
Ge = 01 : R(01 | 10)
Ge = 00 : R(00 | 10)
Ge = 11 : R(11 | 01)
Ge = 10 : R(10 | 01)
Ge = 01 : R(01 | 01)
Ge = 00 : R(00 | 01)
Ge = 11 : R(11 | 00)
Ge = 10 : R(10 | 00)
Ge = 01 : R(01 | 00)
Ge = 11 : R(11 | 00)
pr(Ge = 11 | G = 11)
pr(Ge = 10 | G = 11)
pr(Ge = 01 | G = 11)
pr(Ge = 00 | G = 11)
pr(Ge = 11 | G = 10)
pr(Ge = 10 | G = 10)
pr(Ge = 01 | G = 10)
pr(Ge = 00 | G = 10)
pr(Ge = 11 | G = 01)
pr(Ge = 10 | G = 01)
pr(Ge = 01 | G = 01)
pr(Ge = 00 | G = 01)
pr(Ge = 11 | G = 00)
pr(Ge = 10 | G = 00)
pr(Ge = 01 | G = 00)
pr(Ge = 11 | G = 00)
Figure 2: Structural illustration of the average misclassification reward (3) for a given label G ̃.
pr(G = s0s1). Figure 2 illustrates the structure of the average misclassification reward. The left column shows the four true principal strata G ∈ {00, 01, 10, 11} (corresponding to the outer sum), each weighted by its marginal probability pr(G = s0s1). Given G = s0s1, the middle column displays all possible pseudo-strata assignments G ̃ = s ̃0s ̃1 (corresponding to the inner sum), each associated with a conditional misclassification reward R(s ̃0s ̃1 | s0s1). The right column shows the correspond-
ing misclassification probabilities pr(G ̃ = s ̃0s ̃1 | G = s0s1) that weight each reward. The average misclassification reward V (G ̃) aggregates across all paths from true principal strata to pseudo-strata, combining their misclassification probabilities and rewards. An optimal pseudo-strata G∗ is said to follow the optimal Bayesian decision rule if it maximizes the average misclassification reward in (3): G∗ = arg maxG ̃ V (G ̃), where the value function V (G ̃) quantifies the expected reward f-
rom assigning individuals to pseudo-strata based on their observed covariates. The optimal decision rule induces a partition of the covariate space X into four mutually exclusive and exhaustive decision regions, {D1∗1, D0∗1, D1∗0, D0∗0}, where each region corresponds to one of the four latent strata:
D∗
s0s1 = {x ∈ X : G∗ = s0s1} , (s0, s1) ∈ {0, 1}2.
7

Individuals falling in region Ds∗0s1 are assigned to the optimal pseudo-stratum G∗ = s0s1. In the following theorem, we derive the closed-form solution of the optimal pseudo-stratum and characterize its dependence on both the misclassification rewards and the strata probabilities.
Theorem 1. The optimal Bayesian decision rule assigns each individual with covariates X to the pseudo-strata that maximizes the expected revenue:
G∗ = arg max
s ̃0,s ̃1∈{0,1}
hs ̃0s ̃1 (X), (4)
where hs ̃0s ̃1 (X) = P
s0,s1∈{0,1} R(s ̃0s ̃1 | s0s1) · πs0s1(X). Equivalently, the optimal decision region
Ds∗0s1, corresponding to the optimal Bayesian decision rule G∗, is given by
D∗
s0s1 = X ∈ X : hs0s1 (X) ≥ hs ̄0s ̄1 (X) for all (s ̄0, s ̄1) ∈ {0, 1}2 .
Theorem 1 presents the explicit form of the optimal pseudo-strata that maximizes the expected revenue. For each pair (s0, s1), the function hs0s1(X) represents the expected revenue for individuals truly belonging to the true principal stratum G = s0s1, computed as a weighted average of the rewards R(s ̃0s ̃1 | s0s1) across all possible pseudo-strata, with weights being the corresponding probabilities πs ̃0s ̃1(X). By construction, the optimal G∗ in (4) depends on the covariates X. However, since o-
ur primary interest lies in how G∗ approximates the true G in terms of misclassification rewards, we suppress the explicit dependence on X for simplicity and clarity. Our proposed approach conceptually resembles the expected cost minimization (ECM) framework in Bayesian classification theory (Johnson et al., 2002, Chapter 11), but it differs fundamentally: the standard ECM classifies observed labels, whereas our approach targets unobserved latent principal strata. This distinction results in diffe-
rent classification rules and necessitates novel identification conditions. The pseudo-strata learned by our approach may not perfectly align with the true latent strata. This stems from the fact that the true strata are defined at the individual level, whereas the optimal Bayesian decision rule operates at the covariate-defined subpopulation level. However, they represent a Bayes-optimal solution that balances revenue maximization and classification error in practice. Once the optimal Bayesian de-
cision rule G∗ is determined, we can utilize the learned pseudo-strata for multiple applications, see Sections 5.1, 6, and 7 for details.
4 Identification Results
In this section, we investigate the identification results of the causal estimands πs0s1(X), Lz,s0s1(X), and R(s ̃0s ̃1 | s0s1) discussed in the previous section. We begin by introducing several commonly used assumptions in causal inference (Rosenbaum and Rubin, 1983).
Assumption 1 (Ignorability). Z ⊥⊥ (Y0, Y1, S0, S1) | X.
Assumption 1 states that, conditional on covariates X, there is no unmeasured confounding between the treatment Z and the purchase status S, nor between the treatment Z and the revenue Y . In practice, collecting a comprehensive set of covariates is crucial for improving the applicability of this assumption. It is worth noting that Assumption 1 does not preclude the presence of unmeasured confounding between S and Y .
8

To address the identifiability of πs0s1(X), we adopt an odds ratio parameterization to characterize the dependence structure between potential purchase statuses S0 and S1 (Cioc ̆anea-Teodorescu et al., 2025; Tong et al., 2025; Wu et al., 2025; Zhang et al., 2013):
θ(X) = π00(X)π11(X)
π10(X)π01(X) .
This parameter captures the conditional association between S0 and S1 given X. We consider the assumption for the odds ratio below.
Assumption 2. The odds ratio function θ(X) is known.
Assumption 2 links the two potential purchase statuses S0 and S1. Although θ(X) is not identifiable from the observed data, we recommend treating it as a sensitivity parameter by varying it over an informative range rather than fixing it to a specific value. The choice of this range can be guided by domain knowledge, with common specifications including: (i) Conditional independence (θ(X) = 1): it corresponds to S1 ⊥⊥ S0 | X, implying that the two potential outcomes are independent given covariate-
s. (ii) Monotonicity (θ(X) → +∞): S1 ≥ S0 or S0 ≥ S1, where the former rules out discouraged buyers by imposing π10(X) = 0, and the latter rules out persuadable buyers by imposing π01(X) = 0. (iii) Positive association (θ(X) > 1): potential outcomes S0 and S1 are positively associated, meaning individuals likely to purchase under control tend to also be likely to purchase under treatment. (iv) Negative association (θ(X) < 1): potential outcomes S0 and S1 are negatively associated, meaning individu-
als likely to purchase under control tend to be less likely to purchase under treatment. Although Assumptions 1 and 2 ensure the identifiability of πs0s1(X) (Cioc ̆anea-Teodorescu et al., 2025; Tong et al., 2025; Wu et al., 2025; Zhang et al., 2013), it does not suffice for identifying Lz,s0s1(X). To facilitate identification, we decompose the covariates as X = (C, A) without loss of generality, where this partition enables us to exploit covariates that exhibit differential relationships with the -
strata G. Building on this decomposition, we propose a separable model assumption that allows the effects of C and A on Y to be modeled separately.
Assumption 3 (Additive model). Assume that L0,11(X), L1,11(X), L1,01(X), and L0,10(X) follow additive models of the form:
Lz,s0s1 (X) = μT
z,s0s1,aq(A) + L∗
z,s0s1 (C),
where q(A) = {q1(A), . . . , qp(A)}T is a p-dimensional vector of known functions of covariates A, μz,s0s1,a ∈ Rp is an unknown parameter vector, and Lz∗,s0s1(C) is an unspecified nonparametric function of C.
Assumption 3 imposes additive separability between A and C in the model for Lz,s0s1(X), while retaining modeling flexibility through the nonparametric component Lz∗,s0s1(C). This assumption generalizes several existing identification strategies, which emerge as special cases:
(i) Instrumental variable: When μ0,11,a = μ1,11,a = μ1,01,a = μ0,10,a = 0, the covariate A has no direct effect on the outcome Y , recovering the identification framework of Ding et al. (2011), Jiang et al. (2016), and Wang et al. (2017).
(ii) Linear model specification: When q(A) = A and Lz∗,s0s1(C) is linear in C, it reduces to the fully parametric linear model specification studied by Ding et al. (2011); Luo et al. (2021).
9

(iii) No-interaction constraint: Wang et al. (2017) assumed that, conditional on covariates C, neither Z nor G modifies the effect of covariates A on Y . In our setting, this would impose L1,01(X) − L1,00(X) = L1,11(X) − L1,10(X) = L0,11(X) − L0,10(X) for all X, implying treatment effects are constant across strata. We do not impose this restriction.
In practice, we recommend selecting covariates for A based on two criteria: (i) choose variables that affect Y primarily through strata G rather than via direct causal pathways (Ding et al., 2011; Jiang et al., 2016; Wang et al., 2017), analogous to the exclusion restriction in instrumental variables (Angrist et al., 1996); (ii) select variables whose effects on Y do not interact with C and for which the functional form q(A) can be reliably specified. Additionally, we empirically recommend that q(-
A) employ flexible specifications such as polynomial terms, spline basis functions, or generalized linear model forms to capture as much information from A as possible.
Theorem 2. Suppose Assumptions 1, 2, 3 hold, and for all real numbers b1, b2, b3, b4, the following conditions hold:
b1 · π11(X) + b2 · π01(X) + b3 · q(A)π11(X) + b4 · q(A)π01(X) = 0 ⇒ b1 = b2 = b3 = b4 = 0,
b1 · π11(X) + b2 · π10(X) + b3 · q(A)π11(X) + b4 · q(A)π10(X) = 0 ⇒ b1 = b2 = b3 = b4 = 0. (5)
Then, (a) the L0,11(X), L1,11(X), L1,01(X), and L0,10(X) are identifiable; and (b) the Bayesian decision rule (4) is identifiable.
Theorem 2 essentially requires that the function sets {π11(X), π01(X), q(A)π11(X), q(A)π01(X)} and {π11(X), π10(X), q(A)π11(X), q(A)π10(X)} are linearly uncorrelated. A key advantage is that this linear independence condition (5) can be empirically verified (Cioc ̆anea-Teodorescu et al., 2025; Tong et al., 2025; Zhang et al., 2013), since π11(X), π01(X), and π10(X) are identifiable from observed data under Assumptions 1 and 2. These conditions ensure the uniqueness of the solution and thus the ide-
ntifiability of the optimal Bayesian decision rule. Notably, beyond establishing identifiability, as discussed below Assumption 2, Theorem 2 also provides a principled framework for sensitivity analysis. By specifying informative priors on the odds function θ(X) based on domain knowledge, researchers can systematically assess the robustness of their conclusions. We implement this framework by conducting sensitivity analysis under various specifications of θ(X) in both our simulation and real-data -
application.
5 Estimation and Inference
5.1 Estimation Procedure
We present the proposed estimation method for learning G∗. Let e0(X) = pr(S = 1 | Z = 0, X), and e1(X) = pr(S = 1 | Z = 1, X). The estimation procedures consist of the following five steps:
Step 1. Obtain the estimate πˆs0s1(X) for πs0s1(X), where z, s0, s1 ∈ {0, 1}. In practice, we consider two methods: (i) Given consistent estimators eˆ0(X) and eˆ1(X) for e0(X) and e1(X), compute πˆs0s1(X) using the equation (S11) in Supplementary Material; (ii) Use the EM algorithm for maximum likelihood estimation as proposed in S5.2 of Supplementary Material.
Step 2. Obtain the estimate Lˆz,s0s1(X) for Lz,s0s1(X), where z, s0, s1 ∈ {0, 1}. In particular, as indicated by equation (S12) in Supplementary Material, the Lz,s0s1(X) can be solved based
10

on the following residual-based moment conditions:
m0(X; β0) = I(Z = 0, S = 1) B(X)



Y−
X
s1∈{0,1}
πˆ1s1 (X)
eˆ0(X) L0,1s1 (X; β0,1s1 )



,
m1(X; β1) = I(Z = 1, S = 1) B(X)



Y−
X
s0∈{0,1}
πˆs0 1 (X )
eˆ1(X) L1,s01(X; β1,s01)



,
where L0,1s1 (X; β0,1s1 ) and L1,s01(X; β1,s01) denote working models for L0,1s1 (X) and L1,s01(X), respectively, with unknown parameters β0,1s1 and β1,s01. The term B(X) is some userspecified functions whose dimension is at least as large as that of the parameter vectors.
Step 3. Given covariates X = x, the treatment policy ρˆ(s ̃0s ̃1, x) is determined based on the policy proposed in Section 3:
ρˆ(s ̃0s ̃1, x) = I
nLˆ1,s ̃0s ̃1 (X) − c1(X) ≥ Lˆ0,s ̃0s ̃1 (X) − c0(X)
o
.
Step 4. Applying the law of iterated expectations to (2), and using the estimated policy ρˆ(s ̃0s ̃1, x) from Step 3, the estimated misclassification reward Rˆ(s ̃0s ̃1 | s0s1) is calculated as:
Rˆ(s ̃0s ̃1 | s0s1) = Pn
{Lˆ1,s0s1 (X) − c1(X)}πˆs0s1 (X)ρˆ(s ̃0s ̃1, X) +{Lˆ0,s0s1 (X) − c0(X)}πˆs0s1 (X){1 − ρˆ(s ̃0s ̃1, X)}
,
Pn {πˆs0s1 (X)},
where Pn(·) denotes the sample average operator.
Step 5. Given the observed covariates X = x, the estimated Bayesian decision rule, as stated in Theorem 1, is given by
Gˆ∗ = argmax
s0,s1∈{0,1}
X
s ̃0,s ̃1∈{0,1}
Rˆ (s ̃0s ̃1 | s0s1) · πˆs ̃0s ̃1 (x).
We give additional remarks on the implementation of Step 2. In practice, when parametric forms are assumed for Lz,s0s1(X), the generalized method of moments (Hansen, 1982) provides a natural estimation framework. For nonparametric or semiparametric specifications, such as when L0,11(X), L1,11(X), L1,01(X), and L0,10(X) are modeled using sieve methods, we can estimate them using the sieve minimum distance method of Ai and Chen (2003) or the penalized sieve minimum distance method of Chen and Pouzo -
(2015). Beyond the estimation of pseudo-strata described above, we now discuss two important tasks that can be implemented using the estimated quantities from our estimation procedures: (i) Estimation of principal causal effects. Given πˆs0s1(X) from Step 1 and Lˆz,s0s1(X) from Step 2, for (z, s0s1) ∈ (1, 11), (1, 01), (0, 11), (0, 10), we estimate the marginal expected outcomes Lz,s0s1 as follows:
Lˆz,s0s1 = Pn
nLˆz,s0s1 (X) · πˆs0s1 (X)
o
Pn {πˆs0s1 (X)}. (6)
The principal causal effects within G = 11 is then given by Lˆ1,11 − Lˆ0,11. We will use (6) to evaluate the proposed estimation method for Lz,s0s1(X).
11

(ii) Personalized treatment policy. Given Gˆ∗ = s0s1 obtained from Step 5, the pseudo-stratainduced treatment policy is given by
ρˆ(s0s1, x) = I
nLˆ1,s0s1 (x) − c1(x) ≥ Lˆ0,s0s1 (x) − c0(x)
o
, (7)
which assigns treatment if and only if the net profit under treatment exceeds that under control.
5.2 Inference
We present the theoretical asymptotic properties of the proposed estimation method. First, we establish the convergence rate of the estimator Rˆ(s ̃0s ̃1 | s0s1), which forms the basis for analyzing the properties of the decision rule Gˆ∗. The regularity conditions are summarized below.
Assumption 4. Suppose the following conditions hold:
(i) The e0(X), e1(X), L0,s0s1 (X), L1,s0s1 (X) and their estimates eˆ0(X), eˆ1(X), Lˆ0,s0s1 (X), Lˆ1,s0s1 (X) are uniformly bounded by a constant M > 0, i.e.,
∥eˆz(X)∥∞ ≤ M, ∥ez(X)∥∞ ≤ M, ∥Lˆz,s0s1 (X)∥∞ ≤ M, ∥Lˆz,s0s1 (X)∥∞ ≤ M,
where || · ||∞ denotes the L∞ norm.
(ii) For z ∈ {0, 1} and s0, s1 ∈ {0, 1}, the estimated functions eˆz and Lˆz,s0s1 converge uniformly to their population counterparts at the following rates:
∥eˆz(X) − ez(X)∥∞ = Op(n−γz ), ∥Lˆz,s0s1 (X) − Lz,s0s1 (X)∥∞ = Op(n−γz,s0s1 ),
where all γz > 0 and γz,s0s1 > 0.
(iii) For each s0, s1 ∈ {0, 1}, the density of the random variables L1,s0s1(X) − L0,s0s1(X) is uniformly bounded over x ∈ X .
Assumptions 4(i) and (ii) present regularity conditions on the nuisance components involved in the estimation process, where 4(i) requires that these functions and their estimators be uniformly bounded by a positive constant, and 4(ii) specifies the uniform convergence rates of the estimators toward their population targets. Assumption 4(iii) introduces an additional, though mild, regularity condition requiring that the conditional expectation L1,s0s1(X) − L0,s0s1(X) have a uniformly bounded densi-
ty. This assumption is a special case of the margin condition, which is widely used in the literature on estimating non-smooth functionals (Audibert and Tsybakov, 2007; Kennedy, 2019; Kitagawa and Tetenov, 2018; Luedtke and van der Laan, 2016). Further discussion on the convergence rate of the working models is provided in S6 of Supplementary Material.
Theorem 3. Under Assumptions 1-4, the estimated misclassification reward satisfies
Rˆ(s ̃0s ̃1 | s0s1) − R(s ̃0s ̃1 | s0s1) ≤ Op n−γ ,
where γ = min minz∈{0,1} γz, min(z,s0s1) γz,s0s1 , 1/2 .
12

Theorem 3 shows that the estimation error of the misclassification reward is dominated by the slowest convergence rate among estimators of L0,s0s1(X) and ez(X) for z, s0, s1 ∈ {0, 1}. In particu
lar, when we construct these estimators under correctly specified parametric models, Rˆ(s ̃0s ̃1 | s0s1) achieves a convergence rate of Op(n−1/2). Define Qs0s1 (x) = P
s ̃0,s ̃1∈{0,1} R(s ̃0s ̃1 | s0s1) · πs ̃0s ̃1 (x), and the true maximizer set as S(x) = arg maxs0s1 Qs0s1(x), which may contain more than one element (i.e., the maximum may not be unique). The following proposition provides the selection consistency.
Proposition 1. Under Assumptions 1-4, and for any s0s1 ∈/ S(x), there exists some s ̄0s ̄1 ∈ S(x) such that Qs ̄0s ̄1(x) − Qs0s1(x) ≥ δ for some δ > 0, we have
nli→m∞ pr(Gˆ∗ ∈ S(x) | X = x) = 1.
Proposition 1 establishes the selection consistency of the pseudo-strata estimator. The key condition imposes a strict separation requirement: every suboptimal candidate s0s1 ∈/ S(x) must be uniformly dominated by at least one element s ̄0s ̄1 ∈ S(x) in the optimal set, with a margin of at least δ > 0. Under this condition, Gˆ∗ asymptotically selects from the optimal decision set S(x) with probability one as the sample size grows, for any covariate configuration X = x.
6 Simulation Studies
6.1 Simulation Settings
We conduct simulation studies to evaluate the finite-sample performance of the proposed method. The covariates X = {A, C} are generated from a multivariate normal distribution N ((0.25, −0.25)T, I2), where I2 is the 2 × 2 identity matrix. The treatment Z is generated using a logistic model:
pr(Z = 1 | X) = expit(0.15 − δA − δC),
where δ ∈ {0, 1} controls the treatment assignment mechanism. When δ = 1, treatment assignment depends on covariates A and C; when δ = 0, it is randomized. We specify a multinomial logistic model for the principal strata G ∈ {00, 10, 01, 11}, with G = 00 as the baseline stratification. The corresponding true strata probabilities are:
pr(G = 00 | X) ∝ 1, pr(G = 10 | X) ∝ exp(ι10 + ι10,AA + ι10,C C),
pr(G = 01 | X) ∝ exp(ι01 + ι01,AA + ι01,C C), pr(G = 11 | X) ∝ exp(ι11 + ι11,C C + η), (8)
where ι10 = −0.3, ι10,A = −1, ι10,C = 0.5, ι01 = 0.4, ι01,A = 1, ι01,C = −1, ι11 = 0.1, ι11,C = −0.5, and η is the sensitivity parameter. The observed intermediate variable S is then determined by the consistency assumption. Additionally, by verifying the definition of the odds function, we have θ(X) = exp(η); the verification details are provided in S5.1 of Supplementary Material. To mimic the non-negative nature of outcomes in the application (Section 7), the potential outcomes Y0 and Y1 are gen-
erated from non-negative distributions. Specifically, let ε0, ε1∼U (−1, 1) independently. For G = 00, Y0 = Y1 = 0; for G = 10, Y0 = exp(1.5 + A) + exp(0.5 − 1.1C) + ε0 and Y1 = 0; for G = 01, Y0 = 0 and Y1 = exp(1 + A) + exp(1.5 + 1.15C) + ε1; for G = 11, Y0 = exp(1.5 + A) + exp(1 + 1.2C) + ε0 and Y1 = exp(1 + A) + exp(1 + 0.5C) + ε1. The observed outcome Y is determined by the consistency assumption. Assumptions 1–3 hold in the above setups.
13

Table 1: Simulation results for causal estimands L1,11, L1,01, L0,11, and L0,10, with bias (×100) and standard error (×100, in parentheses) reported.
δ = 0, η = 0 δ = 0, η = 0.25 Sample Size n = 500 n = 2000 n = 5000 n = 20000 n = 500 n = 2000 n = 5000 n = 20000 L1,11 -0.06 (1.06) 0.01 (0.55) -0.02 (0.31) -0.02 (0.15) -0.07 (0.87) 0.01 (0.43) -0.02 (0.24) -0.01 (0.13) L1,01 0.07 (0.66) 0.01 (0.34) 0.02 (0.21) 0.01 (0.1) 0.09 (0.72) 0.02 (0.36) 0.02 (0.22) 0.01 (0.11) L0,11 0.06 (0.42) 0.02 (0.23) 0.02 (0.14) 0.00 (0.06) 0.06 (0.36) 0.01 (0.20) 0.02 (0.12) 0.00 (0.06) L0,10 -0.01 (0.48) -0.01 (0.23) 0.00 (0.16) 0.01 (0.07) -0.04 (0.57) 0.00 (0.2-
8) 0.00 (0.17) 0.01 (0.08)
δ = 0.25, η = 0 δ = 0, η = 0.25 Sample Size n = 500 n = 2000 n = 5000 n = 20000 n = 500 n = 2000 n = 5000 n = 20000 L1,11 -0.17 (1.13) -0.04 (0.53) -0.02 (0.33) -0.01 (0.15) -0.09 (0.88) -0.04 (0.46) -0.03 (0.25) 0.00 (0.13) L1,01 0.12 (0.71) 0.05 (0.32) 0.02 (0.22) 0.00 (0.10) 0.09 (0.73) 0.06 (0.37) 0.03 (0.22) 0.00 (0.11) L0,11 0.04 (0.41) 0.02 (0.2) 0.01 (0.13) 0.00 (0.07) 0.06 (0.35) 0.01 (0.18) 0.02 (0.11) -0.01 (0.06) L0,10 -0.02 (0.48) 0.00 (0.22) 0.00 (0.16) 0.01 (0.07) -0.05 (0.52) 0.00 -
(0.27) 0.00 (0.17) 0.02 (0.08)
We implement the proposed method described in Section 5.1. In Step 1, we employ a multinomial logistic model for estimating πs0s1(X) with s0, s1 ∈ {0, 1}; implementation details are provided in S5 of Supplementary Material. In Step 2, we specify the outcome regression models Lz,s0s1(X) using an additive exponential form:
Lz,s0s1 (X) = exp(βz,s0s1,0 + A) + exp(βz,s0s1,1 + βz,s0s1,2C), (9)
where the first exponential term captures the effect of covariate A, and the second term models the influence of covariate C, with all parameters varying across treatment levels and strata. In Supplementary Material, we also provide additional simulation studies under the same settings, except that potential outcomes Y0 and Y1 are generated using a linear model. The results are similar to those in the main text, further confirming the robustness of the proposed method.
6.2 Simulation Results: Principal Causal Effects
Table 1 reports the bias and standard error of the estimates of Lz,s0s1 obtained using equation (6) over 200 replications, where (z, s0s1) ∈ {(1, 11), (1, 01), (0, 11), (0, 10)}. From Table 1, the proposed method demonstrates robust and consistent performance under various combinations of parameters (δ, η). As the sample size increases from n = 500 to n = 20000, the bias converges to zero and the standard error decreases substantially, confirming the asymptotic properties of the estimators. When η-
 = 0, corresponding to the conditional independence case S0 ⊥⊥ S1 | X, the method exhibits smaller bias and SE even in small sample scenarios. When η = 0.25, corresponding to the conditional dependence case S0 ̸ ⊥⊥S1 | X with positive correlation as discussed in Assumption 2, The proposed method also performs well, although the standard error increases slightly due to the additional uncertainty introduced by the dependence structure.
6.3 Simulation Results: Strata Classification Accuracy
Since true principal strata G are observable in simulation studies, we compare the proposed method with the posterior mode rule in terms of strata classification accuracy. As described in Remark 1, the posterior mode rule assigns each individual to the principal stratum with the highest posterior
14

(a) (b) (a) (b) (a) (b) (a) (b)
0.38
0.39
0.40
0.41
0.42
0.43
0.44
Proportion of G^ = G
η = 0, δ = 0 η = 0, δ = 0.25 η = 0.25, δ = 0 η = 0.25, δ = 0.25
Figure 3: Comparison of principal strata classification accuracy under different parameters (η, δ). Blue boxes represent the proposed method, and red boxes represent the posterior mode method.
probability: Gˆ◦ = argmax
s ̃0,s ̃1∈{0,1}
πˆs ̃0s ̃1 (X), (10)
where πˆs ̃0s ̃1(X) for s ̃0, s ̃1 ∈ {0, 1} are estimated using the method in Section 5.1. Throughout all procedures, we set c0(X) = c1(X) ≡ 0. Figure 3 compares the strata classification accuracy between the proposed method (proposed, shown in blue) and the posterior mode approach (posterior, shown in red) under various combinations of parameters (η, δ), with a fixed sample size of n = 20000 over 200 replications. The classification accuracy is evaluated by computing pr(Gˆ∗ = G) and pr(Gˆ◦ = G). -
Across all scenarios, both methods achieve accuracy around 39%–43%. The proposed method consistently outperforms the posterior method: when η = 0, both methods achieve similar accuracy of approximately 42.5%; however, when η = 0.25, the proposed method maintains accuracy around 40.5%, while the posterior method drops to approximately 39%, demonstrating the superior performance of the proposed approach in recovering true strata.
6.4 Simulation Results: Policy Revenue
In this section, we compare three policy learning methods in terms of policy revenue. The first two methods follow the same two-step process:
Step 1: estimating pseudo-strata using the approaches described in Section 6.3;
Step 2: assigning treatment according to the policy rule (7), which selects the treatment assignment with higher expected net profit for each pseudo-strata.
The first two methods differ only in Step 1: the first one (proposed) uses the proposed pseudo-strata learning approach, while the second one (posterior) uses the posterior-mode approach. The third policy learning method (direct) directly optimizes the value function without estimating pseudo-strata. As introduced in Remark 2, we substitute the estimated quantities πˆs0s1(X)
15

(a) (b) (c) (a) (b) (c) (a) (b) (c) (a) (b) (c)
1.20
1.22
1.24
1.26
1.28
1.30
1.32
1.34
Policy revenue / Real revenue
η = 0, δ = 0 η = 0, δ = 0.25 η = 0.25, δ = 0 η = 0.25, δ = 0.25
Figure 4: Comparison of policy revenue under different parameter configurations (η, δ). Red boxes represent the proposed method, blue boxes represent the posterior mode method, and green boxes represent the direct optimization method.
and Lˆz,s0s1(X) into the value function (1) to obtain the empirical value Vˆ (d). We then search for
the optimal policy within a linear policy class: dˆ∗(X) = arg maxd∈Π Vˆ (d), where Π = {d(X) =
I{XTβ > 0} : β ∈ Rp} represents linear decision rules parameterized by β. Treatment is assigned when the linear score XTβ is positive. We employ grid search over a discretized parameter space to identify the optimal β∗ that maximizes Vˆ (d). Figure 4 compares policy revenue across the three methods under various parameter configurations (η, δ) with sample size n = 20000 over 200 replications. The figure reports the ratio of policy revenue to actual revenue, where policy revenue denotes the expecte-
d outcomes under each method’s treatment policy, and actual revenue corresponds to the mean of observed outcomes Y . From Figure 4, the proposed achieves the highest median revenue (1.28–1.32) across all settings, outperforming both posterior (1.26–1.30) and direct (1.25–1.31). The superior performance of proposed relative to direct may stem from its higher stratum classification accuracy.
7 Application
7.1 Background
Since 2023, Criteo has released anonymized click and conversion logs from its Predictive Search platform to support research on conversion modeling in sponsored search advertising (Jeunen et al., 2022; Tallis and Yadav, 2018). The dataset covers 90 days of real user traffic, amounting to approximately 6.4 GB, and records user clicks during advertising campaigns, along with whether those clicks eventually resulted in a purchase within a 30-day window. Each record captures a user’s click on a produc-
t advertisement shown after the user expressed purchase intent through an online search engine. The dataset includes product features (such as target age group, brand, gender, and price), click time (uniformly time-shifted), user attributes, and device information. It also contains an indicator of whether a conversion occurred and the time interval between the click
16

and the conversion. In this study, we excluded all records containing missing values and randomly sampled 20000 complete entries for modeling and analysis. We selected nine categorical variables closely related to user-product interaction and conversion behavior, denoted as X1 through X9. Specifically, X1 indicates the target age group for the product (e.g., adult, teen, or child), X2 represents the device type used by the user at the time of the click (e.g., desktop, mobile, or tablet), X3 corre-
sponds to the product’s intended gender (e.g., male, female, or unisex), X4 represents the product brand, X5 through X8 denote four hierarchical product category levels, ranging from broad to specific, and X9 indicates the country in which the advertisement was displayed or the product was sold. According to the official documentation, all categorical variables have been hashed to protect the privacy of users and advertisers, rendering their exact meanings unidentifiable. Thus, we encoded these va-
riables as integers to facilitate statistical modeling. We use three key variables for subsequent analysis. The first variable is the binary treatment indicator Z, which captures user engagement intensity. Specifically, we define Z = 1 if the number of product clicks in the past week is less than 20, i.e., Z = I(nb clicks 1week < 20). The threshold of 20 is approximately the median in the dataset and helps distinguish low-frequency from highfrequency users. When the number of clicks is below 20 (Z-
 = 1), it may reflect limited interest or low ad exposure. In contrast, Z = 0 indicates high-frequency engagement, which, considering that ad exposures are typically triggered by search intent, may suggest intensive ad delivery, strong product interest, or both. The second variable S indicates whether a conversion occurred, that is, whether the user made a purchase. The third variable Y is a continuous outcome defined as product revenue.
7.2 Estimation Results: Principal Causal Effects
We examine whether user engagement intensity, measured by how actively users click on ads, influences the platform’s overall revenue. We apply the estimation procedure described in the simulation studies, estimating the principal causal effect quantities Lz,s0s1 (marginal expected outcomes) via
the estimators Lˆz,s0s1 in (6) for (z, s0s1) ∈ (1, 11), (1, 01), (0, 11), (0, 10). Following the simulation setup in (8), we specify the odds ratio function in Assumption 2 as θ(X) = exp(η). As outlined in Assumption 2, we vary η as a sensitivity parameter to examine how the degree of conditional dependence between S0 and S1 affects the conclusions. We anticipate a positive association between the two potential purchase statuses. Users who would purchase under low engagement (S1 = 1) likely posses-
s strong intrinsic purchase intent and are also more responsive to intensive advertising (S0 = 1), as the additional exposure serves to reinforce their existing interest and further increase conversion probability. Conversely, users who would not purchase under low engagement (S1 = 0) typically lack intrinsic motivation and are also unlikely to be persuaded to purchase by intensive ad exposure (S0 = 1). Under this positive association, individuals with high intrinsic purchase intent exhibit greate-
r responsiveness to intensive advertising compared to those with low intrinsic intent. We therefore examine the sensitivity parameter η ranging from 0 (conditional independence) to 3.5 (strong positive association). To model the conditional outcome means Lz,s0s1(X), we treat the product’s target gender (X3) as the binary variable A in Assumption 3, with the remaining covariates as C. We assume that gender’s effect on revenue Y does not interact with other covariates C, the effects of device type, -
brand, or age on revenue remain consistent across gender groups. This no-interaction assumption is plausible in our setting and ensures Assumption 3 is satisfied. We therefore adopt the separable
17

0
100
200
300
0.0 0.5 1.0 1.5 2.0 2.5 3.0 3.5 4.0
η
Estimate with 95% CI
E(Y0 | G = 10)
0
100
200
300
0.0 0.5 1.0 1.5 2.0 2.5 3.0 3.5 4.0
η
Estimate with 95% CI
E(Y1 | G = 01)
0
100
200
300
0.0 0.5 1.0 1.5 2.0 2.5 3.0 3.5 4.0
η
Estimate with 95% CI
E(Y0 | G = 11)
0
100
200
300
0.0 0.5 1.0 1.5 2.0 2.5 3.0 3.5 4.0
η
Estimate with 95% CI
E(Y1 | G = 11)
Figure 5: Sensitivity analysis for principal causal effects, where η is the sensitivity parameter in (8).
model in equation (9) for estimation. Figure 5 presents the estimates of Lz,s0s1 under varying values of the sensitivity parameter η in (8) over 200 bootstrap resamples. Additional numerical results are provided in Section S8 of Supplementary Material. Across all panels, the point estimates of Lz,s0s1 remain relatively stable as η varies, and the corresponding 95% confidence intervals almost always exclude zero, suggesting that expected revenue remains robustly positive. However, the behavior of c-
onfidence interval width varies across different strata: for L1,01 and L1,11, the intervals widen substantially as η increases, reflecting greater uncertainty as conditional dependence strengthens; in contrast, for L0,10 and L0,11, the confidence intervals remain relatively stable across different η. These results reveal the expected outcomes for each stratum under their observable treatment assignments. For always buyers (G = 11, lower panels), expected revenue ranges from approximately 50–150 un-
der control and 100–250 under treatment, showing consistently positive outcomes regardless of ad exposure. The persuadable subgroup (G = 01, upper-right) shows expected revenue of 100–200 under treatment. For the discouraged subgroup (G = 10, upper-left), expected revenue under control ranges from 50–150. Across all strata, as η increases, confidence intervals for always buyers narrow substantially, while those for persuadables and discouraged buyers widen
18

0.0
0.2
0.4
0.6
0.0 0.5 1.0 1.5 2.0 2.5 3.0 3.5 4.0
η
Probability with 95% CI
pr(S0 = 1, S1 = 1)
0.04
0.08
0.12
0.0 0.5 1.0 1.5 2.0 2.5 3.0 3.5 4.0
η
Probability with 95% CI
pr(S0 = 1, S1 = 0)
0.05
0.10
0.15
0.20
0.0 0.5 1.0 1.5 2.0 2.5 3.0 3.5 4.0
η
Probability with 95% CI
pr(S0 = 0, S1 = 1)
0.2
0.4
0.6
0.0 0.5 1.0 1.5 2.0 2.5 3.0 3.5 4.0
η
Probability with 95% CI
pr(S0 = 0, S1 = 0)
Figure 6: Sensitivity analysis of the proportions of the principal strata.
considerably. This pattern directly reflects the estimated strata proportions discussed in the next paragraph: always-buyers increase from 5% to over 60%, while persuadables and discouraged buyers remain small (below 16%) and gradually decline. In Figure 6, we present sensitivity analysis for the estimated strata proportions πs0s1 under varying η over 200 bootstrap resamples. As positive dependence strengthens (η increases from 0 to 4), the proportion of always buyers π11 rises from 5% to over 60%-
, while never buyers π00 decline from 65% to 30%. The persuadable π01 and discouraged π10 subgroups remain small (5–15%) but show opposite trends: persuadables slightly increase while discouraged decrease.
7.3 Estimation Results: Policy Revenue
Following the approach in Section 6.3, we evaluate the learned pseudo-strata using policy revenue. Figure 7 compares the ratio of policy revenue to actual revenue across three methods over 200 bootstrap resamples: the proposed pseudo-strata learning method (blue boxes), the posterior mode rule (red boxes), and the direct policy optimization approach (green boxes), under different values of the sensitivity parameter η in (8). The horizontal dashed red line at 1 represents the benchmark where policy-
 revenue equals actual revenue. When η < 1, all three methods perform comparably, with policy revenue ratios between 1.5 and 4. However, the results show substantial instability due to challenges in estimating principal strata proportions. As shown in Figure 6, never buyers comprise approximately 65% of the population
19

2 4 6 8 10
Policy revenue / Real revenue
0
0.25
0.5
0.75
1
1.25
1.5
1.75
2
2.25
2.5
2.75
3
3.25
3.5
3.75
4
η
Proposed Posterior Direct
Figure 7: Sensitivity analysis of revenue ratios for three methods. Blue: proposed method; Red: posterior mode method; Green: direct optimization.
when η < 1, while always buyers, discouraged buyers, and persuadable buyers together account for only about 30%. This small proportion of responsive individuals leads to high estimation variance. As η increases from 0 to 2.25, the three methods begin to differ. At η = 2.25, the proposed method shows clear advantages, coinciding with a more balanced population structure: always buyers increase to roughly 25% while never buyers decrease to about 55%, leading to more stable estimation overall. For η -
> 3, the proposed method outperforms the other two methods. However, the results again become unstable in this region, likely because discouraged buyers and persuadable buyers together account for only about 10% of the population. Nonetheless, the proposed method maintains competitive performance across all scenarios. This aligns with our simulation findings: the proposed method’s explicit modeling of the latent strata enables better policy recommendations, while the direct optimization and poster-
ior mode approaches cannot fully exploit this structure.
8 Discussion
In this paper, we propose a novel method for inferring individuals’ strata, defined by the joint value of the potential outcomes of a post-treatment response variable. The core idea is to incorporate an outcome variable observed after the principal strata to guide the learning process, while also accounting for the strata probabilities within a Bayesian decision framework. While the learned pseudo-strata may not perfectly match the true latent strata, our method incorporates misclassification rewa-
rds into the learning objective, ensuring that even imperfect pseudo-strata lead to effective treatment policies and substantial revenue gains in practice. Future research directions include relaxing the current identification assumptions and adopting more flexible model structures to enhance the method’s applicability across a wider range of scenarios. The exploration of these issues is beyond the scope of this paper, and we consider them important avenues for future research.
20

Acknowledgement
Peng Wu is the corresponding author. The authors thank Prof. Qingyuan Zhao and Dr. Yue Zhang for their valuable discussions.
Supplementary Material
The Supplementary Material includes all technical proofs, along with additional results for the simulation and application.
References
Ai, C. and X. Chen (2003). Efficient estimation of models with conditional moment restrictions containing unknown functions. Econometrica 71(6), 1795–1843.
Angrist, J. D., G. W. Imbens, and D. B. Rubin (1996). Identification of causal effects using instrumental variables. Journal of the American Statistical Association 91(434), 444–455.
Audibert, J.-Y. and A. B. Tsybakov (2007). Fast learning rates for plug-in classifiers. The Annals of Statistics 35(2), 608–633.
Ben-Michael, E., K. Imai, and Z. Jiang (2024). Policy learning with asymmetric counterfactual utilities. Journal of the American Statistical Association 119(548), 3045–3058.
Chan, K. C. G., S. C. P. Yam, and Z. Zhang (2016). Globally efficient non-parametric inference of average treatment effects by empirical balancing calibration weighting. Journal of the Royal Statistical Society. Series B (Statistical Methodology) 78(3), 673–700.
Chen, X. and D. Pouzo (2012). Estimation of nonparametric conditional moment models with possibly nonsmooth generalized residuals. Econometrica 80(1), 277–321.
Chen, X. and D. Pouzo (2015). Sieve wald and qlr inferences on semi/nonparametric conditional moment models. Econometrica 83(3), 1013–1079.
Cioc ̆anea-Teodorescu, I., E. E. Gabriel, and A. Sjo ̈lander (2025). Sensitivity analysis for the probability of benefit in randomized controlled trials with a binary treatment and a binary outcome. Biostatistics 26(1), kxaf011.
Dawid, A. P., M. Musio, and R. Murtas (2017). The probability of causation. Law, Probability and Risk 16(4), 163–179.
Ding, P., Z. Geng, W. Yan, and X.-H. Zhou (2011). Identifiability and estimation of causal effects by principal stratification with outcomes truncated by death. Journal of the American Statistical Association 106(496), 1578–1591.
Frangakis, C. E. and D. B. Rubin (2002). Principal stratification in causal inference. Biometrics 58(1), 21–29.
21

Hansen, L. P. (1982). Large sample properties of generalized method of moments estimators. Econometrica 50, 1029–1054.
Hirano, K., G. W. Imbens, and G. Ridder (2003). Efficient estimation of average treatment effects using the estimated propensity score. Econometrica 71(4), 1161–1189.
Jeunen, O., T. Joachims, H. Oosterhuis, Y. Saito, and F. Vasile (2022). Consequences—causality, counterfactuals and sequential decision-making for recommender systems. In Proceedings of the 16th ACM Conference on Recommender Systems, pp. 654–657.
Jiang, Z. and P. Ding (2021). Identification of causal effects within principal strata using auxiliary variables. Statistical Science 36(4), 493–508.
Jiang, Z., P. Ding, and Z. Geng (2016). Principal causal effect identification and surrogate end point evaluation by multiple trials. Journal of the Royal Statistical Society: Series B (Statistical Methodology) 78(4), 829–848.
Johnson, R. A., D. W. Wichern, et al. (2002). Applied multivariate statistical analysis.
Kennedy, E. H. (2019). Nonparametric causal effects based on incremental propensity score interventions. The Annals of Statistics 114(526), 645–656.
Kitagawa, T. and A. Tetenov (2018). Who should be treated? empirical welfare maximization methods for treatment choice. Econometrica 86(2), 591–616.
Kuroki, M. and Z. Cai (2011). Statistical analysis of ‘probabilities of causation’ using co-variate information. Scandinavian Journal of Statistics 38(3), 564–577.
Lee, K., M. J. Daniels, and D. J. Sargent (2010). Causal effects of treatments for informative missing data due to progression/death. Journal of the American Statistical Association 105(491), 912929.
Li, H., C. Zheng, Y. Cao, Z. Geng, Y. Liu, and P. Wu (2023). Trustworthy policy learning under the counterfactual no-harm criterion. In International Conference on Machine Learning, pp. 20575–20598. PMLR.
Lipsitz, S. R., N. M. Laird, and D. P. Harrington (1991). Generalized estimating equations for correlated binary data: using the odds ratio as a measure of association. Biometrika 78(1), 153–160.
Luedtke, A. R. and M. J. van der Laan (2016). Statistical inference for the mean outcome under a possibly non-unique optimal treatment strategy. The Annals of Statistics 44(2), 713–742.
Luo, S., W. Li, and Y. He (2021). Causal inference with outcomes truncated by death in multiarm studies. Biometrics, in press.
Pearl, J. (2009). Causality. Cambridge university press.
Pearl, J. (2022). Direct and indirect effects. In Probabilistic and causal inference: the works of Judea Pearl, pp. 373–392.
22

Robins, J. M. and T. S. Richardson (2010). Alternative graphical causal models and the identification of direct effects. Causality and psychopathology: Finding the determinants of disorders and their cures 84, 103–158.
Rosenbaum, P. R. and D. B. Rubin (1983). The central role of the propensity score in observational studies for causal effects. Biometrika 70(1), 41–55.
Roy, J., J. W. Hogan, and B. H. Marcus (2008). Principal stratification with predictors of compliance for randomized trials with 2 active treatments. Biostatistics 9(2), 277–289.
Rubin, D. B. (2006). Causal Inference Through Potential Outcomes and Principal Stratification: Application to Studies with “Censoring” Due to Death. Statistical Science 21(3), 299 – 309.
Shingaki, R. and M. Kuroki (2021). Identification and estimation of joint probabilities of potential outcomes in observational studies with covariate information. In Proceedings of the 35th International Conference on Neural Information Processing Systems, pp. 26475–26486.
Tallis, M. and P. Yadav (2018). Reacting to variations in product demand: An application for conversion rate (cr) prediction in sponsored search. arXiv preprint arXiv:1806.08211.
Tian, J. and J. Pearl (2000). Probabilities of causation: Bounds and identification. Annals of Mathematics and Artificial Intelligence 28(1), 287–313.
Tong, J., B. Kahan, M. O. Harhay, and F. Li (2025). Semiparametric principal stratification analysis beyond monotonicity. arXiv preprint arXiv:2501.17514.
Wang, L., X.-H. Zhou, and T. S. Richardson (2017). Identification and estimation of causal effects with outcomes truncated by death. Biometrika 104(3), 597–612.
Wu, P., P. Ding, Z. Geng, and Y. Liu (2025). Quantifying individual risk for binary outcome. arXiv preprint arXiv:2402.10537.
Wu, P., Q. Jiang, S. Luo, and Z. Geng (2025). Safe individualized treatment rules with controllable harm rates. arXiv preprint arXiv:2505.05308.
Zhang, J. L., D. B. Rubin, and F. Mealli (2009). Likelihood-based analysis of causal effects of job-training programs using principal stratification. Journal of the American Statistical Association 104(485), 166–176.
Zhang, Z., C. Wang, L. Nie, and G. Soon (2013). Assessing the heterogeneity of treatment effects via potential outcomes of individual patients. Journal of the Royal Statistical Society Series C: Applied Statistics 62(5), 687–704.
23

Supplementary Material
The Supplementary Material includes all technical proofs, along with additional results for the simulation and application.
S1 The proof of Theorem 1
Proof. For any pseudo-stratum G ̃ = s ̃0s ̃1, there exists a corresponding region D ̃s ̃0s ̃1 in the covariate
space. Let D ̃ = {D ̃00, D ̃01, D ̃10, D ̃11} be the partition defined by the pseudo-stratum G ̃. When the true stratum of an individual is G = s0s1, but the decision rule classifies the individual into G ̃ = s ̃0s ̃1 (i.e., the baseline covariates X fall into region D ̃s ̃0s ̃1, with G ̃ ̸= G), then a misclassification occurs. We then consider the misclassification probability of assigning a sample truly belonging to true stratum G = s0s1 to the pseudo-stratum G ̃ = s ̃0s ̃1 as pr(G ̃ = s ̃0s ̃1 -
| G = s0s1). Clearly, we have:
pr(G ̃ = s ̃0s ̃1 | G = s0s1) =
Z
D ̃ s ̃0s ̃1
f (X | G = s0s1) dX,
where f (X | G = s0s1) denotes the conditional density of the covariates X given the true stratum G = s0s1. From (3) in the main text, we have:
V (G ̃) =
X
s0,s1∈{0,1}
pr(G = s0s1)
X
s ̃0,s ̃1∈{0,1}
pr(G ̃ = s ̃0s ̃1 | G = s0s1)R(G ̃ = s ̃0s ̃1 | G = s0s1)
=
X
s0,s1∈{0,1}
pr(G = s0s1)
X
s ̃0,s ̃1∈{0,1}
R(G ̃ = s ̃0s ̃1 | G = s0s1)
Z
D ̃ s ̃0s ̃1
f (X | G = s0s1)dX
=
X
s ̃0,s ̃1∈{0,1}
Z
D ̃ s ̃0s ̃1
X
s0,s1∈{0,1}
pr(G = s0s1)R(G ̃ = s ̃0s ̃1 | G = s0s1)f (X | G = s0s1)dX
=
X
s ̃0,s ̃1∈{0,1}
Z
D ̃ s ̃0s ̃1
rs ̃0s ̃1 (X)dX,
where
rs ̃0s ̃1 (X) =
X
s0,s1∈{0,1}
pr(G = s0s1)R(G ̃ = s ̃0s ̃1 | G = s0s1)f (X | G = s0s1)
=
X
s0,s1∈{0,1}
pr(G = s0s1 | X)R(G ̃ = s ̃0s ̃1 | G = s0s1)f (X)
= hs ̃0s ̃1 (X)f (X),
and
hs ̃0s ̃1 (X) = P
s0,s1∈{0,1} R(s ̃0s ̃1 | s0s1) · πs0s1 (X).
Therefore, for any pseudo-stratum G ̃ and its partition D ̃ = {D ̃00, . . . , D ̃11} of Rm, the average misclassfication reward is:
V (G ̃) =
X
s ̃0,s ̃1∈{0,1}
Z
D ̃ s ̃0s ̃1
rs ̃0s ̃1 (X)dX =
X
s ̃0,s ̃1∈{0,1}
Z
D ̃ s ̃0s ̃1
hs ̃0s ̃1 (X)f (X)dX.
24

Recall that the optimal decision region Ds∗0s1 is defined as
D∗
s0s1 = {X : hs0s1 (X) ≥ hs ̄0s ̄1 (X) for all s ̄0, s ̄1 ∈ {0, 1}} .
Thus, for any G ̃, we have
V (G∗) − V (G ̃) =
X
s0,s1∈{0,1}
Z
Ds∗0 s1
rs0s1 (X)dX −
X
s ̃0,s ̃1∈{0,1}
Z
D ̃ s ̃0s ̃1
rs ̃0s ̃1 (X)dX
=
X
s0,s1∈{0,1}
X
s ̃0,s ̃1∈{0,1}
Z
Ds∗0s1 ∩D ̃ s ̃0s ̃1
{rs0s1 (X) − rs ̃0s ̃1 (X)}dX
=
X
s0,s1∈{0,1}
X
s ̃0,s ̃1∈{0,1}
Z
Ds∗0s1 ∩D ̃ s ̃0s ̃1
{hs0s1 (X) − hs ̃0s ̃1 (X)}f (X)dX.
From the definition of Ds∗0s1 , we have hs0s1 (X) ≥ hs ̃0s ̃1 (X) for all X ∈ Ds∗0s1 . Hence,
V (G∗) − V (G ̃) ≥ 0,
which implies V (G∗) = maxG ̃ V (G ̃). Thus, G∗ is the optimal Bayesian decision rule.
S2 The proof of Theorem 2
S2.1 The identification of proportions of true strata
The identification of the proportions of true strata has been established in several prior works (Cioc ̆anea-Teodorescu et al., 2025; Tong et al., 2025; Wu et al., 2025; Zhang et al., 2013). For completeness, we provide a proof in Lemma S1.
Lemma S1. Under Assumptions 1 and 2, the proportions of true strata are identifiable.
Proof. Under the treatment ignorability assumption (Assumption 1), for any given odds function θ(X) in Assumption 2, the proportion of individuals in the always buyer stratum G = 11 can be identified using Equation (6) in Lipsitz et al. (1991) as follows:
π11(X) =

 
 
θ(X) + {1 − θ(X)}{e0(X) + e1(X)} − θ(X)pδ(X)
1 − θ(X) , θ(X) ̸= 1,
e0(X)e1(X), θ(X) = 1.
(S11)
where δ(X) = 1 + {θ−1(X) − 1}{e0(X) + e1(X)} 2 − 4θ(X){θ−1(X) − 1}e0(X)e1(X). Once π11(X) is identified in (S11), the remaining proportions can be obtained as:
π01(X) = e1(X) − π11(X), π10(X) = e0(X) − π11(X),
π00(X) = 1 − π11(X) − π01(X) − π10(X).
25

S2.2 The identification of conditional outcome expectations
Lemma S2. Under Assumptions 1, 3, 2, and condition (5), the conditional outcome mean Lz,s0s1(X) is identifiable for (z, s0s1) ∈ {(1, 11), (1, 01), (0, 11), (0, 10)}.
Proof. We present a unified proof for the identification of the conditional outcome expectations, as stated in Theorem 2. For any covariate vector X = (A, C), define
ω1(x) = pr(G = 11 | Z = 1, S = 1, x) = π11(x)/e1(x),
ω0(x) = pr(G = 11 | Z = 0, S = 1, x) = π11(x)/e0(x).
The numerator can be identified based on Lemma S1, and the denominator is identifiable from the observed data under Assumptions 1. Let xj = (c, aj) for j = 1, . . . , 2 · p + 2, we thus have
E(Y | Z = S = 1, x1)
= E(Y | G = 11, Z = S = 1, x1)ω1(x1) + E(Y | G = 01, Z = S = 1, x1){1 − ω1(x1)}
= L1,11(x1)ω1(x1) + L1,01(x1){1 − ω1(x1)}
= μT
1,11,aq(a1)ω1(x1) + L∗
1,11(c)ω1(x1) + {μT
1,01,aq(a1) + L∗
1,01(c)}{1 − ω1(x1)},
...
E(Y | Z = S = 1, x2p+2)
= E(Y | G = 11, Z = S = 1, x2p+2)ω1(x2p+2) + E(Y | G = 01, Z = S = 1, x2p+2){1 − ω1(x2p+2)}
= L1,11(x2p+2)ω1(x2p+2) + L1,01(x2p+2){1 − ω1(x2p+2)}
= μT
1,11,aq(a2p+2)ω1(x2p+2) + L∗
1,11(c)ω1(x2p+2) + {μT
1,01,aq(a2p+2) + L∗
1,01(c)}{1 − ω1(x2p+2)}. (S12) For any given C = c, the above system can be rewritten as

   
qT(a1)ω1(x1) ω1(x1) qT(a1){1 − ω1(x1)} 1 − ω1(x1) qT(a2)ω1(x2) ω1(x2) qT(a2){1 − ω1(x2)} 1 − ω2(x2)
... . . . . . . ...
qT(a2p+2)ω1(x2p+2) ω1(x2p+2) qT(a2p+2){1 − ω1(x2p+2)} 1 − ω1(x2p+2)

   

  
  
μ1,11,a
L∗1,11(c)
μ1,01,a
L∗1,01(c)

  
  
=

   
   
E(Y | Z = S = 1, X = x1) E(Y | Z = S = 1, X = x2)
...
E(Y | Z = S = 1, X = x2p+2)

   
   
.
As long as condition (5) is satisfied, the coefficient matrix has full rank, and the system of equations has a unique solution. Consequently, the parameters μ1,11,a, L1,11(c), μ1,01,a, and L1,01(c) are identifiable. According to a similar logic, we can also identify μ0,11,a, L0,11(c), μ0,10,a, and L0,10(c). It then follows that Lz,s0s1 (X) is identifiable: Lz,s0s1 (X) = μT
z,s0s1,aq(A) + Lz∗,s0s1 (C).
S2.3 The identification of Bayesian decision rule
Lemma S3. Under Assumptions 1, 3, 2, and condition (5), the optimal Bayesian decision rule is identifiable.
26

Proof. After identifying πs0s1(X) and Lz,s0s1(X), the misclassification reward can be further identified via the following equation:
R(s ̃0s ̃1 | s0s1) = E {L1,s0s1 (X) − c1(X)}πs0s1 (X)ρ(s ̃0s ̃1, X)
+{L0,s0s1 (X) − c0(X)}πs0s1 (X){1 − ρ(s ̃0s ̃1, X)}
,
E {πs0s1 (X)},
Consequently, Theorem 1 implies that the optimal Bayesian decision rule is identifiable.
S3 Estimation performance
S3.1 Preliminaries
In this section, we present several preliminary lemmas.
Lemma S4. Let fˆ and f be any real numbers. Then
I(fˆ > 0) − I(f > 0) ≤ I(|f | ≤ |fˆ − f |).
Proof. We first note that
I(fˆ > 0) − I(f > 0) = I(fˆ · f < 0),
since the indicator values differ if and only if fˆ and f have opposite signs. Now suppose fˆ · f < 0. Then
|fˆ| + |f | = |fˆ − f |,
which implies that |f | ≤ |fˆ − f |.
Therefore, whenever I(fˆ > 0) − I(f > 0) = 1, we must have I(|f | ≤ |fˆ − f |) = 1, and the
inequality holds. This completes the proof.
Lemma S5. Suppose the random variable h(X) has a density function ph(x) that is uniformly bounded on R; that is, there exists a constant C0 > 0 such that
ph(x) ≤ C0 for all x ∈ R.
Then there exists a constant C > 0 such that, for all t > 0,
P (|h(X)| ≤ t) ≤ Ct.
Proof. We have
P (|h(X)| ≤ t) =
Zt
−t
ph(x) dx ≤
Zt
−t
C0 dx = 2C0t.
Setting C = 2C0 yields the result.
Lemma S6. Under Assumptions 2 and 4(i), for any s0s1 ∈ {00, 01, 10, 11}, the plug-in estimator πˆs0s1(X) from the first method in Step 1 of Section 5.1 satisfies
∥πˆs0s1 − πs0s1 ∥∞ = Op(n−γ∗ ),
where γ∗ = min{γ0, γ1}.
27

Proof. By Lemma S1, the function π11(X) can be expressed as
π11(X) =

 
 
θ(X) + {1 − θ(X)}{e0(X) + e1(X)} − θ(X)pδ(X)
1 − θ(X) , θ(X) ̸= 1,
e0(X)e1(X), θ(X) = 1,
where
δ(X) = 1 + θ−1(X) − 1 {e0(X) + e1(X)} 2 − 4θ(X) θ−1(X) − 1 e0(X)e1(X).
We consider two cases:
(i) If θ(X) = 1: Then
π11(X) = e0(X)e1(X), πˆ11(X) = eˆ0(X)eˆ1(X),
and hence
|πˆ11(X) − π11(X)| = |eˆ0(X)eˆ1(X) − e0(X)e1(X)|
≤ |eˆ0(X)| · |eˆ1(X) − e1(X)| + |e1(X)| · |eˆ0(X) − e0(X)|
= Op(n−γ1 ) + Op(n−γ0 ) = Op(n−γ∗ ),
where γ∗ = min{γ0, γ1}.
(ii) If θ(X) ̸= 1: Define
q(e0, e1) = θ + (1 − θ)(e0 + e1) − θ√δ
1−θ ,
where
δ = 1 + (θ−1 − 1)(e0 + e1) 2 − 4θ(θ−1 − 1)e0e1.
Then π11(X) = q(e0(X), e1(X)) and πˆ11(X) = q(eˆ0(X), eˆ1(X)). Since q(·, ·) is continuously differentiable on bounded domains, it is Lipschitz continuous, so
|πˆ11(X) − π11(X)| ≤ C (|eˆ0(X) − e0(X)| + |eˆ1(X) − e1(X)|) = Op(n−γ∗),
for some constant C > 0.
Combining the two cases gives the desired result for the proportion π11(X). The same argument applies to the other components πij(X) for (i, j) ∈ {0, 1}2, since their definitions are also continuously differentiable functions of e0(X), e1(X) and π11(X).
S3.2 The rate of R(s ̃0s ̃1 | s0s1) in Theorem 3
To prove Theorem 3, we first present a more general result under a set of assumptions that parallel those in Theorem 3.
Lemma S7 (Convergence Rate). Assume the following conditions hold:
28

(i) The functions f1(x), f2(x), f3(x) and their estimators fˆ1(x), fˆ2(x), fˆ3(x) are uniformly bounded by some constant M > 0, i.e.,
sup
x
|fl(x)| ≤ M, sup
x
|fˆl(x)| ≤ M, for all l = 1, 2, 3.
(ii) For all l = 1, 2, 3, we have ∥fˆl − fl∥∞ = Op(n−αl) for some αl > 0.
(iii) The function f1(x) has a density that is uniformly bounded over x ∈ Rm.
Then define
Cn =
Pn
hfˆ2(X) · fˆ3(X) · max{fˆ1(X), 0}
i
Pn
nfˆ3 (X )
o , C = E [f2(X) · f3(X) · max{f1(X), 0}]
E {f3(X)} ,
we have
|Cn − C| ≤ Op ∥fˆ1 − f1∥∞ ∨ ∥fˆ2 − f2∥∞ ∨ ∥fˆ3 − f3∥∞ ∨ n−1/2 .
Proof. Define
An = Pn
hfˆ2(X) · fˆ3(X) · max{fˆ1(X), 0}
i
, Bn = Pn
nfˆ3 (X )
o
,
A = E [f2(X) · f3(X) · max{f1(X), 0}] , B = E [f3(X)] .
By Slutsky’s theorem, if Bn
−p→ B > 0, then
Cn − C = An
Bn
−A
B = AnB − ABn
B2 + op(1).
We decompose
AnB − ABn = (An − A)B − A(Bn − B).
Let
A1n = Pn
nfˆ2(X) · fˆ3(X) · I(fˆ1(X) > 0)
o
− Pn
n
f2(X) · f3(X) · I(fˆ1(X) > 0)
o
,
A2n = Pn
n
f2(X) · f3(X) · I(fˆ1(X) > 0)
o
− Pn {f2(X) · f3(X) · I(f1(X) > 0)} ,
A3n = Pn {f2(X) · f3(X) · I(f1(X) > 0)} − E {f2(X) · f3(X) · I(f1(X) > 0)} .
For A1n, we have that
|A1n| ≤ 1
n
n
X
i=1
fˆ2(Xi)fˆ3(Xi) − f2(Xi)f3(Xi)
≤1
n
n
X
i=1
fˆ2(Xi) fˆ3(Xi) − f3(Xi) + f3(Xi) fˆ2(Xi) − f2(Xi)
= Op sup
x
|fˆ3(x) − f3(x)| + sup
x
|fˆ2(x) − f2(x)|
29

For A2n, we have that
|A2n| ≤ 1
n
n
X
i=1
f2(Xi) · f3(Xi) · I(fˆ1(Xi) > 0) − I(f1(Xi) > 0)
≤ sup
x
f2(x) · sup
x
f3(x) · 1
n
n
X
i=1
I(fˆ1(Xi) > 0) − I(f1(Xi) > 0)
≤ sup
x
f2(x) · sup
x
f3(x) · 1
n
n
X
i=1
I(f1(Xi) ≤ |fˆ1(Xi) − f1(Xi)|)
= M 2 · pr f1(Xi) ≤ |fˆ1(Xi) − f1(Xi)| + op(1)
≲ Op sup
x
|fˆ1(x) − f1(x)| ,
where the third inequality follows from Lemma S4, and the last equality holds because Lemma S5. By the central limit theorem, we have
A3n = 1
n
n
X
i=1
f2(Xi) · f3(Xi) · I(f1(Xi) > 0) − E [f2(X)f3(X) · I(f1(X) > 0)] = Op(n−1/2)
We then have
|(An − A)B| = |A1n + A2n + A3n||B|
= Op ||fˆ1(x) − f1(x)||∞ + ||fˆ3(x) − f3(x)||∞ + ||fˆ2(x) − f2(x)||∞ + n−1/2
Furthermore, write
Bn − B = Pn{fˆ3(X) − f3(X)} + Pn{f3(X)} − E{f3(X)} .
The first term is bounded by
|Pn{fˆ3(X) − f3(X)}| ≤ ∥fˆ3(x) − f3(x)∥∞,
and the second term is Op(n−1/2) by the central limit theorem. Multiplying by a bounded A, we get
|(Bn − B)A| = Op ∥fˆ3(x) − f3(x)∥∞ + n−1/2 .
Therefore,
|(An − A)B| = Op ∥fˆ1(x) − f1(x)∥∞ + ∥fˆ2(x) − f2(x)∥∞ + ∥fˆ3(x) − f3(x)∥∞ + n−1/2 .
Combining the above,
|Cn − C| = AnB − ABn
B2 + op(1)
= (An − A)B
B2 + A(Bn − B)
B2 + op(1)
≤ Op ∥fˆ1(x) − f1(x)∥∞ ∨ ∥fˆ2(x) − f2(x)∥∞ ∨ ∥fˆ3(x) − f3(x)∥∞ ∨ n−1/2 .
30

S3.3 The proof of Theorem 3
Proof. Let ρˆ(s ̃0s ̃1, X) = I
nLˆ1,s ̃0s ̃1 (X) − c1(X) ≥ Lˆ0,s ̃0s ̃1 (X) − c0(X)
o
. We have,
Rˆ(s ̃0s ̃1 | s0s1) =
Pn
{Lˆ1,s0s1 (X) − c1(X)}πˆs0s1 (X)ρˆ(s ̃0s ̃1, X) +{Lˆ0,s0s1 (X) − c0(X)}πˆs0s1 (X){1 − ρˆ(s ̃0s ̃1, X)}
Pn {πˆs0s1 (X)}
=
Pn
h
{Lˆ1,s0s1 (X) − c1(X)}πˆs0s1 (X)I Lˆ1,s ̃0s ̃1 (X) − c1(X) − Lˆ0,s ̃0s ̃1 (X) + c0(X) > 0
i
Pn {πˆs0s1 (X)}
+
Pn
h
{Lˆ0,s0s1 (X) − c0(X)}πˆs0s1 (X)I Lˆ1,s ̃0s ̃1 (X) − c1(X) − Lˆ0,s ̃0s ̃1 (X) + c0(X) < 0
i
Pn {πˆs0s1 (X)} .
Consequently, Lemma S6 provides the convergence rate for πˆs0s1(X) when we employ the first estimation approach in Step 1 of Section 5.1 to estimate πs0s1(X). Under correct parametric specification, the second estimation approach in Step 1 achieves a root-n convergence rate. The conclusion then follows directly from Lemma S7 by setting:
f1(X) = L1,s ̃0s ̃1 (X) − L0,s ̃0s ̃1 (X) − c1(X) + c0(X),
f2(X) = πs0s1 (X), f3(X) = L1,s0s1 (X) − c1(X).
and f1(X) = L1,s ̃0s ̃1 (X) − L0,s ̃0s ̃1 (X) − c1(X) + c0(X),
f2(X) = πs0s1 (X), f3(X) = L0,s0s1 (X) − c0(X).
S4 The proof of Proposition 1
S4.1 The selection consistency in Proposition 1
Define
Qˆs0s1 (x) =
X
s ̃0,s ̃1∈{0,1}
Rˆ (s ̃0s ̃1 | s0s1) · πˆs ̃0s ̃1 (x), Qs0s1 (x) =
X
s ̃0,s ̃1∈{0,1}
R(s ̃0s ̃1 | s0s1) · πs ̃0s ̃1 (x).
Lemma S8. Under Assumption 4, for any fixed X = x and s0, s1 ∈ {0, 1}, the estimated value
function Qˆs0s1(x) is a consistent estimator of Qs0s1(x), i.e., Qˆs0s1(x) −p→ Qs0s1(x).
Proof. According to Theorem 3, for any s0, s1, s ̃0, s ̃1 ∈ {0, 1}, we have
Rˆ(s ̃0s ̃1 | s0s1) −p→ R(s ̃0s ̃1 | s0s1).
By definition,
Qˆs0s1 (x) =
X
s ̃0,s ̃1
Rˆ (s ̃0s ̃1 | s0s1) · πˆs ̃0s ̃1 (x), Qs0s1 (x) =
X
s ̃0,s ̃1
R(s ̃0s ̃1 | s0s1) · πs ̃0s ̃1 (x).
31

Then by the triangle inequality,
Qˆs0s1 (x) − Qs0s1 (x) ≤
X
s ̃0,s ̃1
Rˆ (s ̃0s ̃1 | s0s1)πˆs ̃0s ̃1 (x) − R(s ̃0s ̃1 | s0s1)πs ̃0s ̃1 (x) .
Each term can be bounded as
Rˆ (s ̃0s ̃1 | s0s1)πˆs ̃0s ̃1 (x) − R(s ̃0s ̃1 | s0s1)πs ̃0s ̃1 (x) ≤ Rˆ (s ̃0s ̃1 | s0s1) − R(s ̃0s ̃1 | s0s1) · |πˆs ̃0s ̃1 (x)|
+ |R(s ̃0s ̃1 | s0s1)| · |πˆs ̃0s ̃1 (x) − πs ̃0s ̃1 (x)| .
Under the boundedness assumption |πˆs ̃0s ̃1(x)| ≤ M , it follows that
Qˆs0s1 (x) − Qs0s1 (x) ≤ C
X
s ̃0,s ̃1
Rˆ(s ̃0s ̃1 | s0s1) − R(s ̃0s ̃1 | s0s1) + |πˆ(x) − π(x)| ,
for some constant C > 0, where all terms vanish in probability as n → ∞. Therefore,
Qˆs0s1 (x) −p→ Qs0s1 (x),
which establishes the consistency of Qˆs0s1(x) at any fixed x.
S4.2 The proof of Proposition 1
Proof. Fix any covariate value X = x. Recall that the true optimal decision set is defined as
S(x) = arg max
s0 s1
X
s ̃0,s ̃1∈{0,1}
R(s ̃0s ̃1 | s0s1) · πs ̃0s ̃1 (x)
We aim to show that the estimated optimal decision Gˆ∗, which maximizes the estimated reward Qˆs0s1(x), lies in S(x) with high probability as n → ∞; that is,
pr Gˆ∗ ∈/ S(x) | X = x → 0.
According to Lemma S8, we know that Qˆs0s1(x) is a consistent estimator of Qs0s1(x) for every s0s1 ∈ {00, 01, 10, 11}. Therefore,
max
s0s1∈{00,01,10,11}
Qˆs0s1 (x) − Qs0s1 (x) −p→ 0.
Let δ > 0 denote the smallest positive gap in reward between any suboptimal decision and the optimal set. More precisely, for any s0s1 ∈/ S(x), there exists some s ̄0s ̄1 ∈ S(x) such that
Qs ̄0s ̄1 (x) − Qs0s1 (x) ≥ δ.
Choose ξ = δ/2 > 0. By consistency, there exists an integer N > 0 such that for all n > N ,
max
s0s1∈{00,01,10,11}
Qˆs0s1(x) − Qs0s1(x) < ξ with probability at least 1 − ε.
Now consider any suboptimal strategy s0s1 ∈/ S(x) and any optimal strategy s ̄0s ̄1 ∈ S(x). We have:
32

Qˆs0s1 (x) < Qs0s1 (x) + ξ < Qs ̄0s ̄1 (x) − δ + ξ = Qs ̄0s ̄1 (x) − ξ < Qˆs ̄0s ̄1 (x).
This implies that every suboptimal strategy s0s1 is assigned strictly lower estimated reward than at least one optimal strategy s ̄0s ̄1, so Gˆ∗ ̸= s0s1, i.e., it must be that Gˆ∗ ∈ S(x). Therefore,
pr Gˆ∗ ∈/ S(x) | X = x ≤ pr max
s0s1∈{00,01,10,11}
Qˆs0s1 (x) − Qs0s1 (x) ≥ ξ X = x → 0 as n → ∞.
This completes the proof.
S5 Estimation method for Logistic models
S5.1 Verification of θ(X) in Section 6.1
According to (8) in the main text, we have
pr(G = s0s1 | X) = exp{s1(ι01 + ιT
01,X X)} exp{s0(ι10 + ιT
10,X X)} exp(ηs0s1)
P
s ̃0,s ̃1∈{0,1} exp{s ̃1(ι01 + ιT
01,X X)} exp{s ̃0(ι10 + ιT
10,X X)} exp(ηs ̃0s ̃1) ,
specifically,
pr(G = 00 | X) = 1
1 + exp(ι01 + ιT
01,X X) + exp(ι10 + ιT
10,X X) + exp(ι01 + ιT
01,X X + ι10 + ιT
10,X X + η) ,
pr(G = 01 | X) = exp(ι01 + ιT
01,X X)
1 + exp(ι01 + ιT
01,X X) + exp(ι10 + ιT
10,X X) + exp(ι01 + ιT
01,X X + ι10 + ιT
10,X X + η) ,
pr(G = 10 | X) = exp(ι10 + ιT
10,X X)
1 + exp(ι01 + ιT
01,X X) + exp(ι10 + ιT
10,X X) + exp(ι01 + ιT
01,X X + ι10 + ιT
10,X X + η) ,
pr(G = 11 | X) = exp(ι01 + ιT
01,X X + ι10 + ιT
10,X X + η)
1 + exp(ι01 + ιT
01,X X) + exp(ι10 + ιT
10,X X) + exp(ι01 + ιT
01,X X + ι10 + ιT
10,X X + η) .
By verifying the definition of the odds function, we know that
θ(X) = π00(X)π11(X)
π10(X)π01(X) = exp(η).
S5.2 EM algorithm
In this section, we provide an EM algorithm for estimating the strata probabilities πs0s1(X) under the logistic model. Although we cannot fully observe G, we can use the EM algorithm to find the MLEs by treating G as missing data. In the E-step, we compute the conditional probabilities pr(Gi = s0s1 | −) for each observation (Zi, Si, Xi) given current parameter estimates (ιˆ0k, ιˆ1k) as follows: If (Zi = 1, Si = 1):
pr(Gi = 01 | −) = exp(ιˆ0k1 + ιˆk
01,X X)
exp(ιˆ0k1 + ιˆk
01,X X) + exp(ιˆ0k1 + ιˆk
01,X X + ιˆ1k0 + ιˆkT
10,X X + η) ,
33

pr(Gi = 11 | −) = exp(ιˆ0k1 + ιˆk
01,X X + ιˆ1k0 + ιˆkT
10,X X + η)
exp(ιˆ0k1 + ιˆk
01,X X) + exp(ιˆ0k1 + ιˆk
01,X X + ιˆ1k0 + ιˆkT
10,X X + η) .
If (Zi = 0, Si = 1):
pr(Gi = 10 | −) = exp(ιˆ1k0 + ιˆkT
10,X X)
exp(ιˆ1k0 + ιˆkT
10,X X) + exp(ιˆ0k1 + ιˆk
01,X X + ιˆ1k0 + ιˆkT
10,X X + η) ,
pr(Gi = 11 | −) = exp(ιˆ0k1 + ιˆk
01,X X + ιˆ1k0 + ιˆkT
10,X X + η)
exp(ιˆ1k0 + ιˆkT
10,X X) + exp(ιˆ0k1 + ιˆk
01,X X + ιˆ1k0 + ιˆkT
10,X X + η) .
If (Zi = 1, Si = 0):
pr(Gi = 10 | −) = exp(ιˆ1k0 + ιˆkT
10,X X)
1 + exp(ιˆ1k0 + ιˆkT
10,X X) , pr(Gi = 11 | −) = 1
1 + exp(ιˆ1k0 + ιˆkT
10,X X) .
If (Zi = 0, Si = 0):
pr(Gi = 10 | −) = exp(ιˆ0k1 + ιˆk
01,X X)
1 + exp(ιˆ0k1 + ιˆk
01,X X) , pr(Gi = 11 | −) = 1
1 + exp(ιˆ0k1 + ιˆk
01,X X) .
Using these probabilities, we construct a weighted pseudo-dataset. For each individual i, two pseudo-observations (Gi = s0s1, Xi) are generated with the conditional posterior probabilities. In the M-step, we update the parameters (ιˆk+1
0 , ιˆk+1
1 ) by fitting two logistic regression models using the weighted samples obtained in the E-step:
pr(G = 0s1 | Z = 0, S = 0, X) ∝ exp s1(ι01 + ιT
01,X X) ,
pr(G = s00 | Z = 1, S = 0, X) ∝ exp s0(ι10 + ιT
10,X X) .
S6 Additional discussion about convergence rate
In this section, we provide further discussion on the convergence rate, particularly focusing on Assumption 4. We expand on the implications of this assumption for the consistency of the estimators and the overall estimation process. In Step 1 of the estimation procedure, πˆs0s1(X) under the first estimation approach typically attains the rate Op(n−1/2) when eˆs0s1(X) is correctly specified parametrically, and can also achieve this rate under nonparametric estimation given sufficient regularity (C-
han et al., 2016; Hirano et al., 2003). Under the second estimation approach of Step 1, correct parametric specification of πs0s1(X) is required to achieve the Op(n−1/2) rate. As outlined in Step
2, the convergence rate of the outcome model Lˆz,s0s1(X) depends on that of πˆs0s1(X). To ensure that the overall estimator achieves the desired convergence rate of Op(n−1/2), it is necessary for Lˆz,s0s1(X) to converge at least at the same rate. This can be guaranteed under correct parametric specification. Under stronger smoothness assumptions and regularity conditions (e.g., those in Ai and Chen (2003); Chen and Pouzo (2012, 2015)), nonparametric approaches may also yield comparable rates.
34

S7 Additional results for simulation studies
In this section, we provide additional simulation studies to supplement Section 6. All settings remain the same as in the main text, except that the outcome model (9) is replaced with a linear specification. The baseline covariates X = {A, C} are generated from a multivariate normal distribution: A ∼ N (−0.25, 1) and C ∼ N (0.25, 1). The treatment variable Z is generated according to a logistic model: pr(Z = 1 | A, C) = expit(0.15 − δA − δC),
where δ ∈ {0, 1} controls the treatment assignment mechanism. When δ = 1, treatment assignment depends on covariates A and C; when δ = 0, treatment is randomized. We specify a multinomial logistic model for the true strata G ∈ {00, 10, 01, 11}, with G = 00 as the baseline category. The corresponding probabilities are:
pr(G = 00 | X) ∝ 1, pr(G = 10 | X) ∝ exp(−0.3 − A + 0.5C),
pr(G = 01 | X) ∝ exp(0.4 + A − C), pr(G = 11 | X) ∝ exp(0.1 − 0.5C + η),
where η is a parameter varied across scenarios. The observed intermediate variable S is then determined by the consistency assumption. The potential outcomes Y0 and Y1 are generated from
normal distributions with stratum-specific mean functions. Let ε0, ε1
ii∼d N (0, 1). The potential outcomes are specified as:
• For G = 00: Y0 = Y1 = 0;
• For G = 10: Y0 = 5.3 − 1.1C + 1.5A − 1.2C2 + ε0, Y1 = 0;
• For G = 01: Y0 = 0, Y1 = 7.0 + 1.15C − 1.25A + 1.15C2 + ε1;
• For G = 11: Y0 = 6 + 1.2C + 1.4A + 1.4C2 + ε0, Y1 = 6.5 + 1.2C + 1.4A − 1.25C2 + ε1.
The observed outcome Y is then determined by the consistency assumption: Y = ZY1 + (1 − Z)Y0.
S7.1 Simulation Results: Principal Causal Effects
Table S2 presents additional simulation results for the marginal expected outcomes Lz,s0s1 under a linear outcome model specification, where (z, s0s1) ∈ {(1, 11), (1, 01), (0, 11), (0, 10)}. As the sample size increases from n = 500 to n = 20000, the bias consistently converges toward zero and the standard error decreases substantially for all four causal estimands.
S7.2 Simulation Results: Strata Classification Accuracy
Since the true strata G are observable in simulation studies, we compare the strata classification accuracy between the proposed method and the posterior mode rule. Figure S8 compares the strata classification accuracy between the proposed method (prop, shown in blue) and the posterior mode approach (post, shown in red) under various combinations of parameters (η, δ), with a fixed sample size of n = 20000.
35

Table S2: Additional simulation results for causal estimands L1,11, L1,01, L0,11, and L0,10, with bias (×100) and standard error (×100) reported.
δ = 0, η = 0 δ = 0, η = 0.25 Sample Size n = 500 n = 2000 n = 5000 n = 20000 n = 500 n = 2000 n = 5000 n = 20000 L1,11 -0.03 (5.84) 0.13 (2.58) 0.11 (1.53) 0.04 (0.75) 0.3 (4.6) 0.02 (2.04) 0.02 (1.22) 0.03 (0.6) L1,01 0.04 (3.88) -0.08 (1.7) -0.06 (1) -0.02 (0.49) -0.24 (3.89) 0.00 (1.73) -0.02 (1.03) -0.02 (0.51) L0,11 0.4 (4.05) 0.07 (1.94) 0.06 (1.16) -0.08 (0.59) 0.15 (3.64) -0.09 (1.76) -0.1 (0.96) -0.05 (0.54) L0,10 -0.22 (2.48) -0.05 (1.23) -0.03 (0.73) 0.04 (0.37) -0.09 (2.81) 0.07 (1.38)-
 0.08 (0.77) 0.03 (0.42)
δ = 0.25, η = 0 δ = 0.25, η = 0.25 Sample Size n = 500 n = 2000 n = 5000 n = 20000 n = 500 n = 2000 n = 5000 n = 20000 L1,11 -0.16 (5.83) -0.17 (2.54) 0.07 (1.63) -0.06 (0.75) 0.04 (4.83) -0.15 (2.19) 0.04 (1.31) -0.05 (0.6) L1,01 0.13 (3.87) 0.12 (1.66) -0.04 (1.09) 0.04 (0.49) -0.02 (4.07) 0.13 (1.83) -0.03 (1.11) 0.05 (0.51) L0,11 0.46 (4.5) 0.22 (2.16) -0.14 (1.25) -0.05 (0.65) 0.49 (4.08) 0.05 (1.9) -0.07 (1.09) -0.04 (0.57) L0,10 -0.28 (2.77) -0.13 (1.33) 0.07 (0.77) 0.02 (0.39) -0.39 (3.17)-
 -0.03 (1.47) 0.05 (0.86) 0.02 (0.44)
(a) (b) (a) (b) (a) (b) (a) (b)
0.46
0.47
0.48
0.49
0.50
0.51
0.52
Proportion of G^ = G
η = 0, δ = 0 η = 0, δ = 0.25 η = 0.25, δ = 0 η = 0.25, δ = 0.25
Figure S8: Comparison of causal strata classification accuracy under different parameters (η, δ). Blue boxes represent the proposed method, and red boxes represent the posterior mode method.
S7.3 Simulation Results: Policy Revenue
Building upon Section S7.2, we now evaluate policy learning performance by comparing three approaches: the proposed pseudo-strata learning method (prop), the posterior mode rule (post), and the direct optimization method (direct). The first two follow a two-stage procedure of learning strata then assigning treatments, while the third directly optimizes the policy value function using estimated πˆs0s1(X) and Lˆz,s0s1(X). Throughout all procedures, we set c0(X) = c1(X) ≡ 0. Figure S9 compares policy-
 revenue across these three methods under various parameter configurations (η, δ) with sample size n = 20000.
S8 Additional results for real data analysis
Tables S3 and S4 provide more detailed data analysis results in Section 7.2 of the main text.
36

(a) (b) (c) (a) (b) (c) (a) (b) (c) (a) (b) (c)
1.10
1.15
1.20
1.25
1.30
1.35
1.40
Policy revenue / Real revenue
η = 0, δ = 0 η = 0, δ = 0.25 η = 0.25, δ = 0 η = 0.25, δ = 0.25
Figure S9: Comparison of policy revenue under different parameter configurations (η, δ). Red boxes represent the proposed method, blue boxes represent the posterior mode method, and green boxes represent the direct optimization method.
Table S3: Simulation studies with bias (×100), standard error (×100), and 95% confidence interval for the causal estimands.
L1,11 L1,01
η Point estimate SE 95% Confidence Interval Point estimate SE 95% Confidence Interval
0.00 143.44 58.03 (29.70, 257.18) 84.94 12.38 (60.68, 109.20) 0.25 137.00 59.86 (19.68, 254.32) 86.42 14.19 (58.61, 114.23) 0.50 125.96 50.72 (26.54, 225.38) 89.35 14.82 (60.29, 118.40) 0.75 131.09 50.02 (33.04, 229.13) 92.99 23.15 (47.62, 138.36) 1.00 122.96 48.64 (27.63, 218.30) 91.76 28.17 (36.55, 146.98) 1.25 114.70 38.17 (39.89, 189.52) 86.96 29.96 (28.23, 145.69) 1.50 119.71 30.11 (60.69, 178.73) 82.16 44.91 (-5.86, 170.19) 1.75 115.45 23.88 (68.65, 162.26) 77.96 42.80 (-5.93, 161.86) 2.00 1-
05.86 18.91 (68.80, 142.93) 85.09 51.88 (-16.59, 186.77) 2.25 98.60 15.83 (67.58, 129.62) 90.81 62.16 (-31.02, 212.64) 2.50 91.91 13.96 (64.55, 119.27) 99.91 59.49 (-16.69, 216.52) 2.75 87.11 12.11 (63.38, 110.85) 108.42 63.29 (-15.62, 232.46) 3.00 82.05 11.26 (59.98, 104.11) 109.19 62.29 (-12.89, 231.27) 3.25 78.06 11.15 (56.20, 99.92) 126.50 61.60 (5.77, 247.23) 3.50 75.38 10.86 (54.09, 96.67) 141.58 64.40 (15.36, 267.79) 3.75 73.54 10.80 (52.37, 94.71) 139.32 67.81 (6.42, 272.22) 4.00 73.86 8.4-
7 (57.26, 90.47) 138.99 59.03 (23.29, 254.69)
37

Table S4: Simulation studies with bias (×100), standard error (×100), and 95% confidence interval for the causal estimands.
L0,11 L0,10
η Point estimate SE 95% Confidence Interval Point estimate SE 95% Confidence Interval
0.00 155.17 54.92 (47.53, 262.80) 105.26 23.96 (58.29, 152.22) 0.25 148.44 61.98 (26.94, 269.93) 107.23 27.81 (52.72, 161.75) 0.50 139.22 58.58 (24.40, 254.04) 119.43 33.59 (53.59, 185.27) 0.75 135.16 60.76 (16.08, 254.24) 131.54 39.35 (54.42, 208.67) 1.00 130.80 62.42 (8.45, 253.15) 143.71 40.62 (64.10, 223.32) 1.25 128.77 56.62 (17.79, 239.76) 144.17 46.43 (53.17, 235.17) 1.50 123.73 46.91 (31.78, 215.68) 149.24 56.22 (39.06, 259.42) 1.75 115.10 40.10 (36.52, 193.69) 153.02 55.99 (43.28, 262.75)-
 2.00 119.70 42.58 (36.24, 203.16) 149.70 61.96 (28.26, 271.14) 2.25 114.68 37.10 (41.95, 187.40) 154.34 62.71 (31.42, 277.26) 2.50 104.01 37.09 (31.32, 176.70) 162.19 54.55 (55.27, 269.12) 2.75 107.66 35.07 (38.92, 176.40) 165.04 57.00 (53.33, 276.75) 3.00 104.59 30.57 (44.66, 164.51) 168.11 53.69 (62.88, 273.34) 3.25 99.45 24.95 (50.55, 148.35) 175.86 57.61 (62.94, 288.78) 3.50 103.48 23.86 (56.72, 150.25) 165.62 55.82 (56.22, 275.02) 3.75 105.85 25.27 (56.33, 155.38) 156.37 65.76 (27.49, 285.26-
) 4.00 108.06 23.23 (62.53, 153.60) 172.74 59.92 (55.30, 290.19)
38

---

## Processing Information

- **Processing Library:** Zotero PDFWorker
- **Processing Date:** 2026-02-10T18:14:52.884Z
- **Text Length:** 91422 characters
- **Success:** Text extraction completed
- **PDF Library Used:** Zotero PDFWorker
- **Pages Processed:** 38 of 38
