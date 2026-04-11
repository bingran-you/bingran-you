# PDF Document: Lee et al. - 2025 - How to Correctly Report LLM-as-a-Judge Evaluations.pdf

**File Path:** Lee et al. - 2025 - How to Correctly Report LLM-as-a-Judge Evaluations.pdf

**Processed Date:** 2026-02-10T18:18:33.110Z

**File Size:** 1627.25 KB

**Total Pages:** 18

**Extracted Pages:** 18

**PDF Library:** Zotero PDFWorker

**Attachment Item ID:** 3386

**Title:** How to Correctly Report LLM-as-a-Judge Evaluations

**Collection:** Large Files > Random Papers

---

## Extracted Text Content

How to Correctly Report LLM-as-a-Judge Evaluations
Chungpa Lee1 Thomas Zeng2 Jongwon Jeong2 Jy-yong Sohn1 Kangwook Lee2,3
1Yonsei University 2University of Wisconsin–Madison 3KRAFTON
Abstract
Large language models (LLMs) are increasingly used as evaluators in lieu of humans. While scalable, their judgments are noisy due to imperfect specificity and sensitivity of LLMs, leading to biased accuracy estimates. Although bias-correction methods exist, they are underutilized in LLM research and typically assume exact knowledge of the model’s specificity and sensitivity. Furthermore, in general we only have estimates of these values and it is not well known how to properly construct confidence-
 intervals using only estimates. This work presents a simple plug-in framework that corrects such bias and constructs confidence intervals reflecting uncertainty from both test and calibration dataset, enabling practical and statistically sound LLM-based evaluation. Additionally, to reduce uncertainty in the accuracy estimate, we introduce an adaptive algorithm that efficiently allocates calibration sample sizes.
1 Introduction
The use of Large language models (LLMs) as judges provides a cheap, scalable alternative to human evaluation for various tasks like grading factual accuracy, assessing code quality or detecting harmful content (Zheng et al., 2023; Liu et al., 2023; Wang et al., 2023; Li et al., 2025; Gu et al., 2025). However, directly using a point-estimate pˆ (e.g., the raw proportion of answers the LLM judges as ‘correct’ ) as a quality metric is statistically problematic (Angelopoulos et al., 2023; Boyeau et a-
l., 2025; Fraser, 2024; Albinet, 2025). Because LLM judgments are inherently noisy, reporting these uncorrected results leads to biased evaluations (Wang et al., 2024; Koo et al., 2024; Huang et al., 2025).
correct
incorrect
judge correct
judge incorrect
truth LLM evaluation
q1
1 − q1
1 − q0
q0
Figure 1: LLM judgment errors, where q1 and q0 are LLM’s sensitivity and specificity.
The nature of this distortion becomes clear once we examine how LLM evaluators make errors. As shown in Fig. 1, an LLM may incorrectly judge an ‘incorrect’ answer as ‘correct’ or, conversely, mislabel a ‘correct’ answer as ‘incorrect’. Let q0 and q1 denote the probabilities that the LLM makes the right decision in each case. For instance, in the extreme case where q0 = 0 and q1 = 1, the LLM judges every answer as ‘correct’, causing the naive estimate pˆ to be identically 1 regardless of the true a-
ccuracy θ. This illustrates how misleading the raw judgment proportion can be. In general, whenever the LLM is imperfect (q0 + q1 < 2), the expected value of pˆ deviates from the ground-truth accuracy θ:
E[pˆ] = θ + (2 − q0 − q1) 1 − q0
2 − q0 − q1
−θ ,
implying positive bias at low θ and negative bias at high θ (see Sec. 4 for details). This behavior is illustrated in Fig. 2a for an LLM with q0 = 0.7 and q1 = 0.9. E[pˆ] overestimates θ when θ < 0.75 (blue line) and underestimates it when θ > 0.75 (red line), a pattern caused by the two underlying
1
arXiv:2511.21140v1 [cs.LG] 26 Nov 2025

0.0 0.2 0.4 0.6 0.8 1.0 true accuracy ( )
0.0
0.2
0.4
0.6
0.8
1.0
the expected value
1-q0
1-q1
[p] (overestimated) [p] (underestimated)
(a) naive accuracy pˆ
pෝ θ෡
CI
calibration dataset
Q. 4 + 7 = ? A. 11
× m0
Q. 4 + 7 = ? A. 3
× m1
LLM
as a judge
ෝq0 ෝq1
judgment accuracy
on incorrect answers
q0 q1
our code:
point_estimator (p, q0, q1)
confidence_interval (p, q0, q1, n, m0, m1, α)
judgment accuracy
on correct answers
(b) our adjustment method
0.0 0.2 0.4 0.6 0.8 1.0 true accuracy ( )
0.0
0.2
0.4
0.6
0.8
1.0
the expected value
[ ] (unbiased) 95% CI
(c) bias-adjusted accuracy θˆ
Figure 2: Bias and its adjustment in LLM-based judgment under imperfect LLM evaluators (q0 = 0.7 and q1 = 0.9). (a) When the true accuracy θ is low (θ < 0.75), the expected value of the naive estimator E[pˆ] overestimates θ, whereas when θ is high (θ > 0.75), it underestimates θ. (b) By incorporating the judgment accuracies q0 and q1, which can also be estimated from a calibration dataset with ground-truth
labels, we obtain the bias-adjusted estimator θˆ along with its confidence interval. (c) The resulting estimator θˆ is unbiased when the true values of q0 and q1 are known or when a sufficiently large calibration dataset is available. A plug-in Python implementation of this procedure is provided in https://github.com/UW-Madison-Lee-Lab/LLM-judge-reporting.
judgment errors (green arrows). A high error probability of wrongly accepting an ‘incorrect’ answer (large 1 − q0) induces positive bias at low accuracies, whereas a high probability of wrongly rejecting a ‘correct’ answer (large 1 − q1) induces negative bias at high accuracies. This issue is not merely theoretical. As LLM-based evaluation becomes more common, reported improvements may sometimes be influenced by judgment bias rather than true model gains. This suggests that some advances in the li-
terature could stem from differences in evaluation procedures, motivating careful comparison across studies and the use of calibrated judges when interpreting past findings. Consequently, progress may have been overstated or understated depending on the bias direction, highlighting the need for a principled method for bias adjustment. Importantly, this bias can be corrected. When q0 and q1 are known, a classical result from prevalence estimation (Rogan and Gladen, 1978) provides an exact adjustmen-
t. Even when they are unknown, they can be estimated from a calibration dataset with ground-truth labels, and the resulting estimates qˆ0 and qˆ1 can be substituted into the correction formula. Fig. 2c shows that this adjustment substantially
reduces the distortion in pˆ, producing the bias-adjusted estimator θˆ. Correcting the point estimate, however, is only part of the problem. LLM-as-a-Judge evaluation involves two sources of uncertainty: (i) randomness arising from the test dataset, which affects the estimated judgment score pˆ, and (ii) randomness from the calibration dataset, which affects qˆ0 and qˆ1. A principled confidence interval must incorporate both components; yet prior discussion on LLMas-a-Judge (Fraser, 2024; Albinet,-
 2025) has focused largely on bias, offering no practical method for constructing valid intervals. This work provides a full statistical treatment of the LLM-as-a-Judge setting. We formalize the relationship between the observed judgment score pˆ and the true accuracy θ, derive a simple plugin estimator that corrects the resulting bias, and construct a confidence interval that accounts for uncertainty arising from both the test and calibration datasets, as outlined in Fig. 2b. In addition, we intr-
oduce an adaptive allocation algorithm that efficiently distributes calibration sample sizes across the two true-label types to reduce the uncertainty of the final accuracy estimate.
2

2 Problem Setup: LLM-as-a-Judge
Consider the set of all possible test instances X . For example, a single instance x ∈ X may consist of a question together with the corresponding answer produced by a given model1. To evaluate these instances, we assume that there is a human-defined notion of correctness. This is specified by a ground-truth labeler z : X → {0, 1}, where z(x) = 1 indicates that humans judge the answer in instance x to be ‘correct’, and z(x) = 0 indicates it is judged ‘incorrect’. Applying this function to the rand-
om variable X induces a binary random variable Z := z(X). Our goal is to measure the true accuracy of the model with respect to human judgment:
θ := Pr(Z = 1) = E[Z]. (1)
In practice, an LLM is often used to judge correctness instead of human annotators. Let Zˆ := fLLM(X) ∈ {0, 1} denote the LLM’s judgment, where Zˆ = 1 means the LLM marks the answer as
‘correct’, and Zˆ = 0 means it marks the answer as ‘incorrect’. For a test set consisting of n instances {x1, · · · , xn}, the LLM produces labels zˆi := fLLM(xi) ∈ {0, 1} for i ∈ {1, · · · , n}. The accuracy reported in practice is the empirical fraction of instances labeled as ‘correct’ by the LLM judge:
pˆ := 1
n
n
X
i=1
zˆi. (2)
This quantity estimates the population-level probability p := Pr(Zˆ = 1), which represents the probability that the LLM judges a randomly drawn instance as ‘correct’. However, the LLM’s judgment Zˆ does not necessarily coincide with the human ground-truth label Z. That is, the LLM may incorrectly reject answers that are truly ‘correct’ or incorrectly accept answers that are truly ‘incorrect’. The accuracy of the LLM’s judgment in these two cases is captured by
q1 := Pr(Zˆ = 1 | Z = 1) and q0 := Pr(Zˆ = 0 | Z = 0),
which correspond to the sensitivity (true positive rate) and specificity (true negative rate), respectively (Forman, 2008; Lang and Reiczigel, 2014). Because the LLM may misjudge both ‘correct’ and ‘incorrect’ answers, the naive estimator pˆ generally satisfies E[pˆ] ̸= θ, where θ is the true accuracy defined in (1). Moreover, existing evaluations typically report only this point estimate and do not quantify the uncertainty of the judged accuracy, such as through a confidence interval. As a result-
, reported accuracy may appear precise even when it is statistically unreliable. Therefore, our goal is to obtain a bias-adjusted estimate of θ and to report its uncertainty using a statistically sound confidence interval.
3 Method to Correctly Report LLM-as-a-Judge Evaluations
In this section, we introduce a method for correcting the bias inherent in LLM-as-a-Judge evaluations and for quantifying the uncertainty of the resulting estimates. We first describe the bias-adjusted point estimator and then present a confidence interval that accounts for uncertainty from both the test and calibration datasets. The section concludes with an analysis of how sample sizes affect interval length and an adaptive allocation strategy to efficiently design the calibration dataset.
Mitigating Bias on Point Estimator We begin with the setting in which the LLM’s judgment accuracies q0 and q1 are known. In this case, the unbiased estimator of the true accuracy θ in (1) is
θˆ q0, q1 = pˆ + q0 − 1
q0 + q1 − 1 , (3)
1The model producing the answer may be an LLM, but rule-based or statistical models are also possible.
3

where detailed derivations are deferred to Sec. 4. In realistic settings, these accuracies are unknown and must be estimated from a calibration dataset with human-verified labels. Each calibration instance contains both the ground-truth label z ∈ 0, 1 and the corresponding LLM prediction zˆ ∈ 0, 1. Let m0 and m1 denote the number of calibration examples with z = 0 and z = 1, respectively. The accuracies of the LLM’s judgment on the two subsets are
qˆ0 := 1
m0
X
z=0
1{zˆ = 0|z = 0}, qˆ1 := 1
m1
X
z=1
1{zˆ = 1|z = 1},
where 1{·} denotes the indicator function. Substituting these estimates into (3) gives the bias-adjusted estimator (Rogan and Gladen, 1978):
θˆ = pˆ + qˆ0 − 1
qˆ0 + qˆ1 − 1 . (4)
Estimating Uncertainty through Confidence Interval To quantify uncertainty in θˆ, we derive a (1 − α) confidence interval for θ that incorporates variance contributions from both the test and calibration dataset (Lang and Reiczigel, 2014):
θ ̃ + dθ ̃ ± zα
s
p ̃(1 − p ̃)/ ̃n + (1 − θ ̃)2 · q ̃0(1 − q ̃0)/  ̃m0 + θ ̃2 · q ̃1(1 − q ̃1)/  ̃m1
(q ̃0 + q ̃1 − 1)2 , (5)
where values outside the interval [0, 1] are truncated to 0 or 1. Here, zα denotes the (1 − α/2) quantile of the standard normal distribution, e.g., z0.05 = 1.96, and the adjusted quantities are defined as
 ̃n = n + z2
α,  ̃m0 = m0 + 2,  ̃m1 = m1 + 2,
p ̃ = n · pˆ + z2α/2
n + z2α
, q ̃0 = m0 · qˆ0 + 1
m0 + 2 , q ̃1 = m1 · qˆ1 + 1
m1 + 2 , (6)
θ ̃ = p ̃ + q ̃0 − 1
q ̃0 + q ̃1 − 1 , dθ ̃ = 2z2
α −(1 − θ ̃) · q ̃0(1 − q ̃0)
 ̃m0
+ θ ̃ · q ̃1(1 − q ̃1)
 ̃m1
. (7)
102 103 104 calibration set size (m0 + m1)
0.00
0.05
0.10
0.15
0.20
0.25
0.30
confidence interval length
p = 0.3 p = 0.5 p = 0.7 p = 0.9
Figure 3: Confidence–interval length across the calibration size for different values of pˆ ∈ {0.3, 0.5, 0.7, 0.9}, when qˆ0 = 0.7, qˆ1 = 0.9, and n → ∞. Dashed lines correspond to using a calibration dataset with symmetric label counts (m0 = m1), while solid lines correspond to using calibration samples allocated using the adaptive rule introduced in Algorithm 1.
Impact of Sample Sizes on Confidence-Interval Length The confidence interval in (5) reflects uncertainty arising from both the test and calibration datasets through  ̃n,  ̃m0, and  ̃m1. As these sample sizes increase, the terms inside the square root decrease, leading to a shorter confidence interval for θ. In particular, because LLM-as-a-Judge evaluations can be run at scale with minimal cost, the test-set size n can often be made extremely large. In the limit n → ∞, test-set uncertainty vanishes-
 entirely, and the interval length is determined solely by the calibration sample sizes m0 and m1. This observation enables practitioners to specify a desired interval length and then determine the minimal calibration budget required to achieve it. Fig. 3 illustrates how the confidence–interval length decreases as the calibration dataset grows. The dashed curves correspond to cases where the calibration dataset has symmetric true label counts (m0 = m1), using qˆ0 = 0.7, qˆ1 = 0.9, and four test–se-
t accuracies pˆ ∈ {0.3, 0.5, 0.7, 0.9}. For example, the red dashed
4

Algorithm 1 Adaptive allocation of calibration samples
Require: Total calibration dataset size m, pilot calibration sample size mpilot with 2mpilot ≤ m, and the estimate pˆ from the test dataset Ensure: Allocated calibration sample sizes (m0, m1)
1: Pilot calibration.
2: Collect mpilot calibration examples with true label z = 0 and mpilot examples with z = 1. 3: Let q ̃0 and q ̃1 be the empirical accuracies of the LLM judge on these two subsets:
q ̃0 ←
P
z=0 1{zˆ = 0 | z = 0} + 1
mpilot + 2 , q ̃1 ←
P
z=1 1{zˆ = 1 | z = 1} + 1
mpilot + 2 .
4: Compute the estimated error–ratio: ˆκ ← (1 − q ̃0)/(1 − q ̃1). 5: Compute adaptive allocation.
6: Using the approximation in Proposition 2, solve for the provisional allocation:
m⋆
1 ← round m
1 + (1/pˆ − 1)√ˆκ .
7: Enforce pilot size, by setting
m1 ← min max{m⋆
1, mpilot}, m − mpilot , m1 ← m − m0.
return (m0, m1)
curve (pˆ = 0.3) shows that achieving an interval shorter than 0.1 requires roughly m0 = m1 ≈ 200 calibration examples. Because the calibration dataset is collected independently and its label composition is fully under our control, we can purposely choose asymmetric calibration sizes (m0 ̸= m1). This flexibility is important: the two calibration label types generally contribute asymmetrically to the overall uncertainty, and allocating more samples to the higher-variance side can substantially red-
uce the dominant source of uncertainty.
Adaptive Allocation to Reduce Confidence-Interval Length Motivated by this observation, we introduce an adaptive allocation procedure in Algorithm 1. The algorithm begins by collecting a small pilot calibration sample (e.g., mpilot = 10 for each label type) to obtain preliminary estimates of (q ̃0, q ̃1). These estimates allow us to compute the empirical error ratio (1 − q ̃0)/(1 − q ̃1) between the two label types. Using this ratio, together with the naive accuracy pˆ from the test set, the algor-
ithm computes the approximate optimal ratio of (m0, m1) that minimizes the confidence–interval length in (5). The solid curves in Fig. 3, illustrating the results of adaptive allocation, show that this strategy achieves shorter intervals under a fixed calibration budget compared to the symmetric allocation represented by the dashed lines. The optimality of this allocation rule is established in the following section. A Python implementation that computes the bias-adjusted estimator θˆ in (4) and t-
he confidence interval in (5), and applies the adaptive allocation procedure in Algorithm 1 to obtain optimal calibration sizes (m0, m1), is available at https://github.com/UW-Madison-Lee-Lab/LLM-judge-reporting.
4 Derivations and Theoretical Guarantees
We derive the point estimator and confidence interval introduced in Sec. 3, showing how they mitigate bias and account for uncertainty from both the test and calibration datasets. We further characterize the theoretical properties of the resulting estimators and establish the optimality of the proposed allocation algorithm.
5

4.1 Mitigating Bias on Point Estimator
We first analyze how the adjusted estimator θˆ in (4) mitigates the bias in estimating θ by comparing it with the naive estimator pˆ in (2). The naive estimator pˆ is generally biased in estimating the true parameter θ. By the law of total probability, we have
p = Pr(Zˆ = 1 | Z = 1) · Pr(Z = 1) + 1 − Pr(Zˆ = 0 | Z = 0) · 1 − Pr(Z = 1)
= (q0 + q1 − 1) · θ + (1 − q0),
which shows that E[pˆ] = p = θ for all θ only when the LLM judge is perfectly accurate (i.e., q0 = q1 = 1). If q0 + q1 < 2, the expression can be rewritten as
E[pˆ] = p = θ + (2 − q0 − q1) · 1 − q0
2 − q0 − q1
−θ ,
which makes the sign of the bias explicit: E[pˆ] > θ whenever θ < 1−q0
2−q0−q1 and E[pˆ] < θ whenever
θ > 1−q0
2−q0−q1 . Thus, pˆ induces a bias in estimating θ.
To mitigate this bias, we derive an adjusted estimator. Assuming q0 + q1 > 1, the above relation
can be inverted to express θ as
θ = p + q0 − 1
q0 + q1 − 1 . (8)
Replacing p, q0, and q1 with their empirical estimates gives the bias-adjusted estimator θˆ in (4) (Rogan and Gladen, 1978; Lang and Reiczigel, 2014). When q0 and q1 are known, substituting their true values into (4) gives an unbiased estimator of θ, which exactly corrects for the LLM’s misclassification bias. In practice, however, these parameters are unknown and can be estimated from a calibration dataset. Thus, we use the empirical estimates qˆ0 and qˆ1 defined in Sec. 3, which inevitably intro-
duce
some estimation bias. Nevertheless, the following proposition shows that the adjusted estimator θˆ in (4), constructed with these empirical estimates, still effectively mitigates bias compared to the naive estimator as the size of the calibration dataset increases. All proofs are provided in Appendix A.
Proposition 1. Suppose that m := m0 = m1 and q := q0 = q1, where 0.5 < q ≤ 1. For sufficiently
large m ≳ q/(2q − 1)2, the absolute bias of θˆ in (1) is always smaller than that of pˆ in (2) for all θ.
This proposition implies that even when q0 and q1 are estimated rather than known, the adjusted
estimator θˆ consistently achieves lower absolute bias than the naive estimator pˆ, provided that the calibration dataset is sufficiently large. Moreover, the required sample size depends on the reliability of the LLM judge: when the LLM is highly accurate (q ≈ 1), only a small calibration dataset is needed for effective bias correction, whereas when the LLM behaves almost randomly (q ≈ 0.5), a much larger dataset is required to ensure comparable bias reduction.
4.2 Estimating Uncertainty through Confidence Interval
We now quantify the uncertainty of the adjusted estimator θˆ in (4), where two distinct sources of randomness must be considered: (i) the test dataset used to estimate p, and (ii) the calibration dataset used to estimate q0 and q1.
Asymptotic variance of the point estimator To construct a confidence interval for θ, we first compute the asymptotic variance of the adjusted estimator θˆ. By applying the delta method (Dorfman, 1938; Ver Hoef, 2012), the asymptotic variance of θˆ is
Var(θˆ) = pˆ(1 − pˆ)/n + (1 − θˆ)2 · qˆ0(1 − qˆ0)/m0 + θˆ2 · qˆ1(1 − qˆ1)/m1
(qˆ0 + qˆ1 − 1)2 ,
where we also use the variance formula for the binomial estimates pˆ, qˆ0, and qˆ1. A detailed derivation is provided in Sec. A.
6

Estimating confidence interval Based on this variance, we construct a (1 − α) confidence interval for θ following the “add two successes and two failures” adjusted Wald interval approach (de Laplace, 1820; Agresti and Coull, 1998; Brown et al., 2001; Lang and Reiczigel, 2014). To improve coverage accuracy, we replace pˆ, qˆ0, and qˆ1 with their adjusted versions p ̃, q ̃0, and q ̃1, as defined in (6). These adjustments can be interpreted as adding one (or z2α/2) success and one (or z2α/2) failure-
 to each estimate, such that the interval remains reliable even for small sample sizes (Agresti and Caffo, 2000). Substituting these adjusted estimates yields the Wald-type confidence interval shown in (5). Furthermore, the adjustment introduces a minor shift in the interval center (i.e., dθ ̃ in (7)) due to the presence of qˆ0 and qˆ1 in the denominator of θˆ. Although this also slightly affects the interval length, the effect is negligible and thus ignored in the final approximation. Detailed de-
rivations are provided in Lang and Reiczigel (2014).
The optimal allocation of the calibration dataset Lastly, we investigate the optimal allocation of the calibration dataset that minimizes the confidence interval length. For simplicity, consider the case where the LLM’s prediction accuracies q ̃0 and q ̃1 are both close to one. Here, q ̃0 represents the accuracy where the LLM predicts ‘incorrect’ responses as ‘incorrect’, while q ̃1 denotes the accuracy of predicting ‘correct’ responses as ‘correct’. Consequently, (1 − q ̃0) and (1 − q ̃1) corresp-
ond to the respective error probabilities of these two conditions.
Proposition 2. Suppose that q ̃0 and q ̃1 are close to 1, and let κ := (1 − q ̃0)/(1 − q ̃1). Then the
minimum length of the confidence interval defined in (5) is achieved when  ̃m0 ≈ (1/p ̃ − 1)√κ ·  ̃m1.
This result provides a practical guideline for allocating calibration samples between the two response types, increasing either ‘incorrect’ responses (m0) or ‘correct’ responses (m1) in the calibration dataset. When the LLM is less accurate at identifying ‘incorrect’ outputs (that is, when the error ratio κ is large), more calibration data should be assigned to estimating q ̃0 in order to reduce the variance of θˆ. Conversely, if the LLM performs well overall but the proportion p ̃ of ‘correct’ pr-
edictions in the test dataset is small, the factor (1/p ̃− 1) amplifies the relative importance of  ̃m0, suggesting that additional samples should again be allocated to calibration dataset that have the true ‘incorrect’ response to maintain an efficient confidence interval. To use this allocation rule in practice, we employ the adaptive procedure described in Algorithm 1. The algorithm begins by collecting a small pilot calibration sample to estimate (q ̃0, q ̃1) and, in turn, the error–ratio ˆκ. -
Using the estimate pˆ from the test dataset and the value of ˆκ, the calibration sizes (m0, m1) are then determined according to the approximate optimal ratio implied by Proposition 2. This procedure ensures that the calibration budget is distributed in a data-driven manner, adapting automatically to the relative difficulty of estimating the two judge accuracy parameters.
5 Empirical Validation
To validate the theoretical results established above, we empirically evaluate the proposed estimator, confidence interval, and calibration allocation strategy through Monte Carlo simulation.
Experimental Setup We evaluate the method under the following parameter configuration. The LLM judge has accuracy parameters (q0, q1) = (0.7, 0.9), and the true accuracy varies over θ ∈ {0, 0.05, 0.10, · · · , 1}, resulting in 21 distinct settings. For each setting of (q0, q1, θ), we generate a test dataset of size n = 1000 and a calibration dataset of total size m0 + m1 = 500, using an equal allocation m0 = m1 unless stated otherwise. We then compute the naive estimator pˆ in (2) together with it-
s confidence interval, and further compute the bias-adjusted estimator θˆ in (4) and the confidence interval in (5). Each configuration is replicated 10,000 times to evaluate estimator behavior, interval coverage, and average interval length. Additional simulations exploring alternative parameter choices are provided in Appendix C.
7

0.0 0.2 0.4 0.6 0.8 1.0 true accuracy ( )
0.0
0.2
0.4
0.6
0.8
1.0
estimates
p
p + ±z SE
+ d ±z SE
(a) estimates
0.0 0.2 0.4 0.6 0.8 1.0 true accuracy ( )
0.0
0.2
0.4
0.6
0.8
1.0
coverage probability
p + ±z SE + d ±z SE 95%
(b) coverage probability
0.00 0.25 0.50 0.75 1.00 true accuracy ( )
0.000
0.025
0.050
0.075
0.100
0.125
0.150
0.175
0.200
confidence interval length
m0 = m1
m0 (1/p 1) m1
(c) CI length
Figure 4: Monte Carlo simulation for estimating θ under an imperfect LLM judge with (q0, q1) = (0.7, 0.9). We evaluate estimators across 21 values of θ ∈ {0, 0.05, 0.10, . . . , 1}, each visualized as a single point. Fig. 4a reports the results from a single run, while Fig. 4b and Fig. 4c summarize averages computed over 10,000 Monte Carlo replications. All experiments use a test dataset of size n = 1000 and a calibration dataset of size m0 + m1 = 500, and we use an equal allocation m0 = m1 for Fi-
g. 4a and Fig. 4c. (a) The naive estimator pˆ in (2) generally exhibits bias, while the unbiased estimator θˆ in (4) closely recovers the true accuracy θ across all values. Shaded regions represent the 95% confidence intervals. (b) Across all θ, the coverage probability of the confidence interval in (5) remains consistently close to the nominal 95% level. (c) Given a fixed calibration budget of m0 + m1 = 500, we compare two allocation strategies: an equal split (m0 = m1 = 250) and the allocation p-
roportional
to m0 ∝ (1/pˆ − 1)√κ · m1 by using Algorithm 1. The proposed allocation gives consistently shorter confidence intervals.
Bias Reduction in Point Estimation Fig. 4a compares the naive estimator pˆ and the biasadjusted estimator θˆ based on a single simulation run. As shown in Sec. 4, pˆ exhibits bias, particularly overestimating the true accuracy when the underlying θ is small. In contrast, θˆ closely aligns with the ground-truth accuracy across all values of θ, demonstrating the bias correction achieved by (4).
Coverage of the Confidence Interval Fig. 4b reports the empirical coverage probability of the confidence interval in (5). Across all values of θ, the coverage remains consistently close to the nominal 95% level, whereas the confidence interval constructed from the naive estimator pˆ achieves nearly zero coverage except at a few values of θ. These results confirm that the proposed confidence interval provides reliable uncertainty quantification.
Efficiency of Optimal Calibration Allocation To examine the benefits of optimal calibration allocation, we compare two strategies under a fixed calibration budget of m0 + m1 = 500: (i) an equal allocation (m0 = m1 = 250), and (ii) the allocation produced by Algorithm 1, which approximates the optimal ratio derived in Proposition 2. Fig. 4c shows that the adaptive allocation consistently gives shorter confidence intervals than the equal-split baseline. The improvement becomes more pronounced as pˆ -
moves away from the middle point. For instance, when κ = 1 and p ̃ = 0.5, Proposition 2 implies that the optimal allocation satisfies  ̃m0 ≈  ̃m1, since in
this case (1/pˆ − 1)√κ = 1. As pˆ departs from 0.5, however, asymmetric allocations become optimal. This pattern appears clearly in Fig. 4c. In this experiment, we have κ = 3, and the optimal allocation becomes nearly symmetric (  ̃m0 ≈  ̃m1) when p ̃ ≈ 0.633, which corresponds to a true accuracy of θ ≈ 0.557 via (8). When θ lies moderately far from this value, the adaptive allocation produced by Algorithm 1 results in a shorter interval.
8

6 Conclusion
In LLM-as-a-judge, noisy evaluations cause a simple point estimate to be biased. The adjustment introduced in this work reduces the bias from imperfect judgments, and the accompanying confidence interval reflects uncertainty from both the evaluation and calibration datasets. To narrow these intervals, focusing on the calibration design, such as the allocation between response types, is preferable to simply increasing the total number of judgments. We hope this work contributes to more reliable and-
 transparent reporting practices in LLM-based evaluation.
Acknowledgements
This work was supported by the National Science Foundation (NSF) Award DMS-2023239, the NSF CAREER Award CCF-2339978, an Amazon Research Award, and a grant from FuriosaAI. In addition, it was supported by the National Research Foundation of Korea (NRF) grant funded by the Korean Ministry of Science and ICT (MSIT) (RS-2024-00345351, RS-2024-00408003), by the Institute of Information & Communications Technology Planning & Evaluation (IITP) grant funded by MSIT (RS-2023-00259934, RS-2025-02283048), a-
nd by the Brain Korea 21 program funded by the Korean Ministry of Education and the NRF (BK21 FOUR, No.5199990913980).
References
Agresti, A. and Caffo, B. (2000). Simple and effective confidence intervals for proportions and differences of proportions result from adding two successes and two failures. The American Statistician, 54(4):280288.
Agresti, A. and Coull, B. A. (1998). Approximate is better than “exact” for interval estimation of binomial proportions. The American Statistician, 52(2):119–126.
Albinet, F. (2025). Why llms can actually judge other llms (and it’s not cheating). https:// franck-albi-net.pla.sh/post/llm-as-a-judge.
Angelopoulos, A. N., Bates, S., Fannjiang, C., Jordan, M. I., and Zrnic, T. (2023). Prediction-powered inference. Science, 382(6671):669–674.
Boyeau, P., Angelopoulos, A. N., Li, T., Yosef, N., Malik, J., and Jordan, M. I. (2025). Autoeval done right: Using synthetic data for model evaluation. In International Conference on Machine Learning.
Brown, L. D., Cai, T. T., and DasGupta, A. (2001). Interval Estimation for a Binomial Proportion. Statistical Science, 16(2):101 – 133.
de Laplace, P. S. (1820). Théorie analytique des probabilités, volume 7. Courcier.
Dorfman, R. (1938). A note on the δ-method for finding variance formulae. Biometric Bulletin.
Forman, G. (2008). Quantifying counts and costs via classification. Data Mining and Knowledge Discovery, 17(2):164–206.
Fraser, C. (2024). Estimating how many there are of something when you can’t see them all perfectly. https://colin-fraser.net/posts/ 2024-11-12-estimating-how-many-there-are-of-something-using-a-classifier.
Gu, J., Jiang, X., Shi, Z., Tan, H., Zhai, X., Xu, C., Li, W., Shen, Y., Ma, S., Liu, H., Wang, S., Zhang, K., Wang, Y., Gao, W., Ni, L., and Guo, J. (2025). A survey on llm-as-a-judge. arXiv. https://arxiv.org/abs/2411.15594.
9

Huang, H., Bu, X., Zhou, H., Qu, Y., Liu, J., Yang, M., Xu, B., and Zhao, T. (2025). An empirical study of LLM-as-a-judge for LLM evaluation: Fine-tuned judge model is not a general substitute for GPT-4. In Findings of the Association for Computational Linguistics.
Koo, R., Lee, M., Raheja, V., Park, J. I., Kim, Z. M., and Kang, D. (2024). Benchmarking cognitive biases in large language models as evaluators. In Findings of the Association for Computational Linguistics.
Lang, Z. and Reiczigel, J. (2014). Confidence limits for prevalence of disease adjusted for estimated sensitivity and specificity. Preventive Veterinary Medicine, 113(1):13–22.
Li, D., Jiang, B., Huang, L., Beigi, A., Zhao, C., Tan, Z., Bhattacharjee, A., Jiang, Y., Chen, C., Wu, T., Shu, K., Cheng, L., and Liu, H. (2025). From generation to judgment: Opportunities and challenges of LLM-as-a-judge. In Empirical Methods in Natural Language Processing.
Liu, Y., Iter, D., Xu, Y., Wang, S., Xu, R., and Zhu, C. (2023). G-eval: NLG evaluation using gpt-4 with better human alignment. In Empirical Methods in Natural Language Processing.
Rogan, W. J. and Gladen, B. (1978). Estimating prevalence from the results of a screening test. American Journal of Epidemiology, 107(1):71–76.
Ver Hoef, J. M. (2012). Who invented the delta method? The American Statistician, 66(2):124–127.
Wang, J., Liang, Y., Meng, F., Sun, Z., Shi, H., Li, Z., Xu, J., Qu, J., and Zhou, J. (2023). Is ChatGPT a good NLG evaluator? a preliminary study. In Proceedings of the 4th New Frontiers in Summarization Workshop.
Wang, P., Li, L., Chen, L., Cai, Z., Zhu, D., Lin, B., Cao, Y., Kong, L., Liu, Q., Liu, T., and Sui, Z. (2024). Large language models are not fair evaluators. In Annual Meeting of the Association for Computational Linguistics.
Zheng, L., Chiang, W.-L., Sheng, Y., Zhuang, S., Wu, Z., Zhuang, Y., Lin, Z., Li, Z., Li, D., Xing, E., Zhang, H., Gonzalez, J. E., and Stoica, I. (2023). Judging llm-as-a-judge with mt-bench and chatbot arena. In Advances in Neural Information Processing Systems.
10

A Proofs
This section provides the proofs deferred from the main paper. We first derive the variances of the estimators pˆ in (2) and θˆ in (4), followed by proofs of the propositions stated in the main text.
A.1 Deriving the Variance of Estimators
Because p follows a binomial distribution, the variance of pˆ is
Var(pˆ) = pˆ(1 − pˆ)/n.
Similarly, we have Var(qˆ0) = qˆ0(1 − qˆ0)/m0 and Var(qˆ1) = qˆ1(1 − qˆ1)/m1.
We now derive the asymptotic variance of θˆ using the delta method (Dorfman, 1938; Ver Hoef, 2012) for θˆ = pˆ+qˆ0−1
qˆ0+qˆ1−1 . The first order derivatives with respect to pˆ, qˆ0, and qˆ1 are
∂θˆ
∂pˆ = 1
qˆ0 + qˆ1 − 1 , ∂θˆ
∂qˆ0
= 1 − θˆ
qˆ0 + qˆ1 − 1 , ∂θˆ
∂qˆ1
= −θˆ
qˆ0 + qˆ1 − 1 .
Assuming independence between the test dataset and the calibration dataset, the delta method gives
Var(θˆ) = pˆ(1 − pˆ)/n + (1 − θˆ)2 · qˆ0(1 − qˆ0)/m0 + θˆ2 · qˆ1(1 − qˆ1)/m1
(qˆ0 + qˆ1 − 1)2 .
A.2 Proofs of Propositions
Proposition A.1. Suppose that m := m0 = m1 and q := q0 = q1, where 0.5 < q ≤ 1. For sufficiently
large m ≳ q/(2q − 1)2, the absolute bias of θˆ in (1) is always smaller than that of pˆ in (2) for all θ.
Proof. First, note that the bias of pˆ in (2) is
E[pˆ] − θ = (q0 + q1 − 1)θ + (1 − q0) − θ
= −(2θ − 1)(q − 1).
Next, consider the bias of θˆ in (1). By the second-order delta method, we have
E[θˆ] ≈ p + q0 − 1
q0 + q1 − 1 + 1
2 − 2(q1 − p)
(q0 + q1 − 1)3 · q0(1 − q0)
m0
+ 2(p + q0 − 1)
(q0 + q1 − 1)3 · q1(1 − q1)
m1 = θ − (q1 − p)
(q0 + q1 − 1)3 · q0(1 − q0)
m0
+ (p + q0 − 1)
(q0 + q1 − 1)3 · q1(1 − q1)
m1
,
which implies
E[θˆ] − θ ≈ −(1 − θ)q0(1 − q0)/m0 + θq1(1 − q1)/m1
(q0 + q1 − 1)2
=1
m· q
(2q − 1)2 (2θ − 1)(1 − q).
Hence, for sufficiently large m satisfying m ≳ q/(2q − 1)2, we conclude the following for all θ:
E[θˆ] − θ ≈ 1
m· q
(2q − 1)2 · |(2θ − 1)(q − 1)| < |(2θ − 1)(q − 1)| = E[pˆ] − θ .
11

Proposition A.2. Suppose that q ̃0 and q ̃1 are close to 1, and let κ := (1 − q ̃0)/(1 − q ̃1). Then the
minimum length of the confidence interval defined in (5) is achieved when  ̃m0 ≈ (1/p ̃ − 1)√κ ·  ̃m1.
Proof. The length of the confidence interval in (5) is given by
2zα
s
p ̃(1 − p ̃)/ ̃n + (1 − θ ̃)2 · q ̃0(1 − q ̃0)/  ̃m0 + θ ̃2 · q ̃1(1 − q ̃1)/  ̃m1 (q ̃0 + q ̃1 − 1)2
∝
q
(1 − θ ̃)2 · q ̃0(1 − q ̃0)/  ̃m0 + θ ̃2 · q ̃1(1 − q ̃1)/  ̃m1
∝
p(q ̃1 − p ̃)2 · q ̃0(1 − q ̃0)/  ̃m0 + (p ̃ + q ̃0 − 1)2 · q ̃1(1 − q ̃1)/  ̃m1.
By the arithmetic–geometric mean inequality, the minimum condition is satisfied when
 ̃m0  ̃m1
= |q ̃1 − p ̃|
|p ̃ + q ̃0 − 1|
s
q ̃0(1 − q ̃0)
q ̃1(1 − q ̃1) ≈ |1 − p ̃|
|p ̃|
s
1 − q ̃0 1 − q ̃1
= (1/p ̃ − 1)√κ,
where the approximation holds under the assumption that q ̃0 and q ̃1 are close to 1.
B Code
All code used for this paper, including a plug-in Python implementation of the introduced method for LLM-as-a-judge evaluation, is available in the public GitHub repository (https://github.com/ UW-Madison-Lee-Lab/LLM-judge-reporting). To make this appendix self-contained, we provide below the key functions that compute the bias-adjusted estimator and its confidence interval, corresponding to the method described in Sec. 3.
from math import sqrt from scipy.stats import norm
def clip(x, low=0.0, high=1.0): return max(low , min(high , x))
def point_estimator(p, q0 , q1): """Compute the adjusted point estimate.""" th = (p+q0 -1)/(q0+q1 -1) return clip(th)
def confidence_interval (p, q0 , q1 , n, m0 , m1 , alpha =0.05): """Compute the adjusted (1 - alpha) confidence interval.""" z = norm.ppf(1-alpha /2) p, q0 , q1 = (n*p+z**2/2) /(n+z**2) , (m0*q0+1)/(m0+2), (m1*q1+1)/(m1+2) n, m0 , m1 = n+z**2, m0+2, m1+2 th = (p+q0 -1)/(q0+q1 -1) dth = 2*z**2*(-(1-th)*q0*(1-q0)/m0+th*q1*(1-q1)/m1) se = sqrt(p*(1-p)/n+(1-th)**2* q0*(1-q0)/m0+th **2* q1*(1-q1)/m1)/(q0+q1 -1) return clip(th+dth -z*se), clip(th+dth+z*se)
Figure 5: Python code implementation of the adjustment method described in Sec. 3 that computes the bias-adjusted point estimate and the (1 − α) confidence interval for the true accuracy θ. The inputs p, q0, and q1 are empirical estimates from the test and calibration datasets.
12

C Additional Results on Monte Carlo Simulation
To complement the main simulation results presented in Fig. 4, we report an extensive set of Monte Carlo experiments conducted across multiple configurations of the test dataset size n ∈ {200, 1000}, the calibration sizes m0 + m1 ∈ {200, 500}, and the judge reliability parameters (q0, q1) ∈ {(0.9, 0.9), (0.7, 0.7), (0.9, 0.7), (0.7, 0.9)}. The remaining aspects of the simulation design follow the same setup as in the main text. Across all combinations of (n, m0+m1, q0, q1), the qualitative finding-
s observed in the main simulation persist. Bias correction consistently improves estimation accuracy, empirical coverage attains the nominal level, and optimized calibration allocation yields shorter confidence intervals. Below we present the complete collection of results. Each figure corresponds to one configuration (n, m0, m1, q0, q1) and includes three subplots.
C.1 Results for n = 200 and m0 + m1 = 200
0.0 0.2 0.4 0.6 0.8 1.0 true accuracy ( )
0.0
0.2
0.4
0.6
0.8
1.0
estimates
p
p + ±z SE
+ d ±z SE
(a) estimates
0.0 0.2 0.4 0.6 0.8 1.0 true accuracy ( )
0.0
0.2
0.4
0.6
0.8
1.0
coverage probability
p + ±z SE + d ±z SE 95%
(b) coverage
0.0 0.2 0.4 0.6 0.8 1.0 true accuracy ( )
0.0
0.1
0.2
0.3
0.4
confidence interval length
m0 = m1
m0 (1/p 1) m1
(c) CI length
Figure 6: Monte Carlo results for (n, m0+m1, q0, q1) = (200, 200, 0.7, 0.7).
0.0 0.2 0.4 0.6 0.8 1.0 true accuracy ( )
0.0
0.2
0.4
0.6
0.8
1.0
estimates
p
p + ±z SE
+ d ±z SE
(a) estimates
0.0 0.2 0.4 0.6 0.8 1.0 true accuracy ( )
0.0
0.2
0.4
0.6
0.8
1.0
coverage probability
p + ±z SE + d ±z SE 95%
(b) coverage
0.0 0.2 0.4 0.6 0.8 1.0 true accuracy ( )
0.00
0.05
0.10
0.15
0.20
0.25
0.30
confidence interval length
m0 = m1
m0 (1/p 1) m1
(c) CI length
Figure 7: Monte Carlo results for (n, m0+m1, q0, q1) = (200, 200, 0.7, 0.9).
13

0.0 0.2 0.4 0.6 0.8 1.0 true accuracy ( )
0.0
0.2
0.4
0.6
0.8
1.0
estimates
p
p + ±z SE
+ d ±z SE
(a) estimates
0.0 0.2 0.4 0.6 0.8 1.0 true accuracy ( )
0.0
0.2
0.4
0.6
0.8
1.0
coverage probability
p + ±z SE + d ±z SE 95%
(b) coverage
0.0 0.2 0.4 0.6 0.8 1.0 true accuracy ( )
0.00
0.05
0.10
0.15
0.20
0.25
0.30
confidence interval length
m0 = m1
m0 (1/p 1) m1
(c) CI length
Figure 8: Monte Carlo results for (n, m0+m1, q0, q1) = (200, 200, 0.9, 0.7).
0.0 0.2 0.4 0.6 0.8 1.0 true accuracy ( )
0.0
0.2
0.4
0.6
0.8
1.0
estimates
p
p + ±z SE
+ d ±z SE
(a) estimates
0.0 0.2 0.4 0.6 0.8 1.0 true accuracy ( )
0.0
0.2
0.4
0.6
0.8
1.0
coverage probability
p + ±z SE + d ±z SE 95%
(b) coverage
0.00 0.25 0.50 0.75 1.00 true accuracy ( )
0.000
0.025
0.050
0.075
0.100
0.125
0.150
0.175
0.200
confidence interval length
m0 = m1
m0 (1/p 1) m1
(c) CI length
Figure 9: Monte Carlo results for (n, m0+m1, q0, q1) = (200, 200, 0.9, 0.9).
14

C.2 Results for n = 200 and m0 + m1 = 500
0.0 0.2 0.4 0.6 0.8 1.0 true accuracy ( )
0.0
0.2
0.4
0.6
0.8
1.0
estimates
p
p + ±z SE
+ d ±z SE
(a) estimates
0.0 0.2 0.4 0.6 0.8 1.0 true accuracy ( )
0.0
0.2
0.4
0.6
0.8
1.0
coverage probability
p + ±z SE + d ±z SE 95%
(b) coverage
0.0 0.2 0.4 0.6 0.8 1.0 true accuracy ( )
0.0
0.1
0.2
0.3
0.4
confidence interval length
m0 = m1
m0 (1/p 1) m1
(c) CI length
Figure 10: Monte Carlo results for (n, m0+m1, q0, q1) = (200, 500, 0.7, 0.7).
0.0 0.2 0.4 0.6 0.8 1.0 true accuracy ( )
0.0
0.2
0.4
0.6
0.8
1.0
estimates
p
p + ±z SE
+ d ±z SE
(a) estimates
0.0 0.2 0.4 0.6 0.8 1.0 true accuracy ( )
0.0
0.2
0.4
0.6
0.8
1.0
coverage probability
p + ±z SE + d ±z SE 95%
(b) coverage
0.0 0.2 0.4 0.6 0.8 1.0 true accuracy ( )
0.00
0.05
0.10
0.15
0.20
0.25
0.30
confidence interval length
m0 = m1
m0 (1/p 1) m1
(c) CI length
Figure 11: Monte Carlo results for (n, m0+m1, q0, q1) = (200, 500, 0.7, 0.9).
0.0 0.2 0.4 0.6 0.8 1.0 true accuracy ( )
0.0
0.2
0.4
0.6
0.8
1.0
estimates
p
p + ±z SE
+ d ±z SE
(a) estimates
0.0 0.2 0.4 0.6 0.8 1.0 true accuracy ( )
0.0
0.2
0.4
0.6
0.8
1.0
coverage probability
p + ±z SE + d ±z SE 95%
(b) coverage
0.0 0.2 0.4 0.6 0.8 1.0 true accuracy ( )
0.00
0.05
0.10
0.15
0.20
0.25
0.30
confidence interval length
m0 = m1
m0 (1/p 1) m1
(c) CI length
Figure 12: Monte Carlo results for (n, m0+m1, q0, q1) = (200, 500, 0.9, 0.7).
15

0.0 0.2 0.4 0.6 0.8 1.0 true accuracy ( )
0.0
0.2
0.4
0.6
0.8
1.0
estimates
p
p + ±z SE
+ d ±z SE
(a) estimates
0.0 0.2 0.4 0.6 0.8 1.0 true accuracy ( )
0.0
0.2
0.4
0.6
0.8
1.0
coverage probability
p + ±z SE + d ±z SE 95%
(b) coverage
0.00 0.25 0.50 0.75 1.00 true accuracy ( )
0.000
0.025
0.050
0.075
0.100
0.125
0.150
0.175
0.200
confidence interval length
m0 = m1
m0 (1/p 1) m1
(c) CI length
Figure 13: Monte Carlo results for (n, m0+m1, q0, q1) = (200, 500, 0.9, 0.9).
C.3 Results for n = 1000 and m0 + m1 = 200
0.0 0.2 0.4 0.6 0.8 1.0 true accuracy ( )
0.0
0.2
0.4
0.6
0.8
1.0
estimates
p
p + ±z SE
+ d ±z SE
(a) estimates
0.0 0.2 0.4 0.6 0.8 1.0 true accuracy ( )
0.0
0.2
0.4
0.6
0.8
1.0
coverage probability
p + ±z SE + d ±z SE 95%
(b) coverage
0.0 0.2 0.4 0.6 0.8 1.0 true accuracy ( )
0.00
0.05
0.10
0.15
0.20
0.25
0.30
confidence interval length
m0 = m1
m0 (1/p 1) m1
(c) CI length
Figure 14: Monte Carlo results for (n, m0+m1, q0, q1) = (1000, 200, 0.7, 0.7).
0.0 0.2 0.4 0.6 0.8 1.0 true accuracy ( )
0.0
0.2
0.4
0.6
0.8
1.0
estimates
p
p + ±z SE
+ d ±z SE
(a) estimates
0.0 0.2 0.4 0.6 0.8 1.0 true accuracy ( )
0.0
0.2
0.4
0.6
0.8
1.0
coverage probability
p + ±z SE + d ±z SE 95%
(b) coverage
0.00 0.25 0.50 0.75 1.00 true accuracy ( )
0.000
0.025
0.050
0.075
0.100
0.125
0.150
0.175
0.200
confidence interval length
m0 = m1
m0 (1/p 1) m1
(c) CI length
Figure 15: Monte Carlo results for (n, m0+m1, q0, q1) = (1000, 200, 0.7, 0.9).
16

0.0 0.2 0.4 0.6 0.8 1.0 true accuracy ( )
0.0
0.2
0.4
0.6
0.8
1.0
estimates
p
p + ±z SE
+ d ±z SE
(a) estimates
0.0 0.2 0.4 0.6 0.8 1.0 true accuracy ( )
0.0
0.2
0.4
0.6
0.8
1.0
coverage probability
p + ±z SE + d ±z SE 95%
(b) coverage
0.00 0.25 0.50 0.75 1.00 true accuracy ( )
0.000
0.025
0.050
0.075
0.100
0.125
0.150
0.175
0.200
confidence interval length
m0 = m1
m0 (1/p 1) m1
(c) CI length
Figure 16: Monte Carlo results for (n, m0+m1, q0, q1) = (1000, 200, 0.9, 0.7).
0.0 0.2 0.4 0.6 0.8 1.0 true accuracy ( )
0.0
0.2
0.4
0.6
0.8
1.0
estimates
p
p + ±z SE
+ d ±z SE
(a) estimates
0.0 0.2 0.4 0.6 0.8 1.0 true accuracy ( )
0.0
0.2
0.4
0.6
0.8
1.0
coverage probability
p + ±z SE + d ±z SE 95%
(b) coverage
0.0 0.2 0.4 0.6 0.8 1.0 true accuracy ( )
0.00
0.02
0.04
0.06
0.08
0.10
0.12
0.14
confidence interval length
m0 = m1
m0 (1/p 1) m1
(c) CI length
Figure 17: Monte Carlo results for (n, m0+m1, q0, q1) = (1000, 200, 0.9, 0.9).
C.4 Results for n = 1000 and m0 + m1 = 500
0.0 0.2 0.4 0.6 0.8 1.0 true accuracy ( )
0.0
0.2
0.4
0.6
0.8
1.0
estimates
p
p + ±z SE
+ d ±z SE
(a) estimates
0.0 0.2 0.4 0.6 0.8 1.0 true accuracy ( )
0.0
0.2
0.4
0.6
0.8
1.0
coverage probability
p + ±z SE + d ±z SE 95%
(b) coverage
0.0 0.2 0.4 0.6 0.8 1.0 true accuracy ( )
0.00
0.05
0.10
0.15
0.20
0.25
0.30
confidence interval length
m0 = m1
m0 (1/p 1) m1
(c) CI length
Figure 18: Monte Carlo results for (n, m0+m1, q0, q1) = (1000, 500, 0.7, 0.7).
17

0.0 0.2 0.4 0.6 0.8 1.0 true accuracy ( )
0.0
0.2
0.4
0.6
0.8
1.0
estimates
p
p + ±z SE
+ d ±z SE
(a) estimates
0.0 0.2 0.4 0.6 0.8 1.0 true accuracy ( )
0.0
0.2
0.4
0.6
0.8
1.0
coverage probability
p + ±z SE + d ±z SE 95%
(b) coverage
0.00 0.25 0.50 0.75 1.00 true accuracy ( )
0.000
0.025
0.050
0.075
0.100
0.125
0.150
0.175
0.200
confidence interval length
m0 = m1
m0 (1/p 1) m1
(c) CI length
Figure 19: Monte Carlo results for (n, m0+m1, q0, q1) = (1000, 500, 0.7, 0.9).
0.0 0.2 0.4 0.6 0.8 1.0 true accuracy ( )
0.0
0.2
0.4
0.6
0.8
1.0
estimates
p
p + ±z SE
+ d ±z SE
(a) estimates
0.0 0.2 0.4 0.6 0.8 1.0 true accuracy ( )
0.0
0.2
0.4
0.6
0.8
1.0
coverage probability
p + ±z SE + d ±z SE 95%
(b) coverage
0.00 0.25 0.50 0.75 1.00 true accuracy ( )
0.000
0.025
0.050
0.075
0.100
0.125
0.150
0.175
0.200
confidence interval length
m0 = m1
m0 (1/p 1) m1
(c) CI length
Figure 20: Monte Carlo results for (n, m0+m1, q0, q1) = (1000, 500, 0.9, 0.7).
0.0 0.2 0.4 0.6 0.8 1.0 true accuracy ( )
0.0
0.2
0.4
0.6
0.8
1.0
estimates
p
p + ±z SE
+ d ±z SE
(a) estimates
0.0 0.2 0.4 0.6 0.8 1.0 true accuracy ( )
0.0
0.2
0.4
0.6
0.8
1.0
coverage probability
p + ±z SE + d ±z SE 95%
(b) coverage
0.0 0.2 0.4 0.6 0.8 1.0 true accuracy ( )
0.00
0.02
0.04
0.06
0.08
0.10
0.12
0.14
confidence interval length
m0 = m1
m0 (1/p 1) m1
(c) CI length
Figure 21: Monte Carlo results for (n, m0+m1, q0, q1) = (1000, 500, 0.9, 0.9).
18

---

## Processing Information

- **Processing Library:** Zotero PDFWorker
- **Processing Date:** 2026-02-10T18:18:33.110Z
- **Text Length:** 45016 characters
- **Success:** Text extraction completed
- **PDF Library Used:** Zotero PDFWorker
- **Pages Processed:** 18 of 18
