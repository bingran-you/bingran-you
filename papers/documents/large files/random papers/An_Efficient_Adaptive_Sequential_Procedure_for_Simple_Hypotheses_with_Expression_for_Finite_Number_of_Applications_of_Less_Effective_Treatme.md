# PDF Document: Kundu et al. - 2025 - An Efficient Adaptive Sequential Procedure for Simple Hypotheses with Expression for Finite Number o.pdf

**File Path:** Kundu et al. - 2025 - An Efficient Adaptive Sequential Procedure for Simple Hypotheses with Expression for Finite Number o.pdf

**Processed Date:** 2026-02-10T18:18:58.593Z

**File Size:** 383.70 KB

**Total Pages:** 14

**Extracted Pages:** 14

**PDF Library:** Zotero PDFWorker

**Attachment Item ID:** 3446

**Title:** An Efficient Adaptive Sequential Procedure for Simple Hypotheses with Expression for Finite Number of Applications of Less Effective Treatment

**Collection:** Large Files > Random Papers

---

## Extracted Text Content

An Efficient Adaptive Sequential Procedure for
Simple Hypotheses with Expression for Finite
Number of Applications of Less Effective Treatment
Sampurna Kundu∗, Jayant Jha†and Subir Kumar Bhandari‡
Interdisciplinary Statistical Research Unit, Indian Statistical Institute, Kolkata, India
Abstract
We propose an adaptive sequential framework for testing two simple hypotheses that analytically ensures finite exposure to the less effective treatment. Our proposed procedure employs a likelihood ratio–driven adaptive allocation rule, dynamically concentrating sampling effort on the superior population while preserving asymptotic efficiency (in terms of average sample number) comparable to the Sequential Probability Ratio Test (SP RT ). The foremost contribution of this work is the derivation of -
an explicit closed-form expression for the expected number of applications to the inferior treatment. This approach achieves a balanced method between statistical precision and ethical responsibility, aligning inferential reliability with patient safety. Extensive simulation studies substantiate the theoretical results, confirming stability in allocation and consistently high probability of correct selection (P CS) across different settings. In addition, we demonstrate how the adaptive procedure m-
arkedly reduces inferior allocations compared with the classical SP RT , highlighting its practical advantage in ethically sensitive sequential testing scenarios. The proposed design thus offers an ethically efficient and computationally tractable framework for adaptive sequential decision-making.
Keywords. Adaptive sequential design; Adaptive allocation; Average sample number; Number of applications of inferior treatment; Probability of correct selection; Sequential probability ratio test.
MSC 2020 Classification. 62L05, 62L10.
∗sampurna.kundu58@gmail.com, Corresponding Author. †jayantjha@gmail.com ‡subirkumar.bhandari@gmail.com
1
arXiv:2511.20061v1 [math.ST] 25 Nov 2025

1 Introduction
Sequential design, first formalized by Wald (1947) through the Sequential Probability Ratio Test (SP RT henceforth), is a cornerstone of modern statistical decision theory. It departs from fixed-sample schemes by allowing data to be analyzed as they are collected, and the decision to continue or stop sampling depends on accumulated information. The principal goal is to achieve efficient inference — minimizing the expected or average sample number (ASN ) for given Type I and Type II error probabili-
ties. This framework has since evolved into a variety of methodologies used in industrial quality control (Teoh et al., 2022; Li and Nenes, 2024), reliability testing (Rasay and Alinezhad, 2022; Jain and Jain, 1994), and clinical trials (Li et al., 2012; Martens and Logan, 2024), where resources are limited and early stopping can save both cost and ethical burden. In the classical sequential paradigm, the experimenter observes an equal number of samples from each of two or more populations at each-
 stage and uses likelihood ratios computed from the collected data to update inference until a stopping criterion is satisfied. However, adaptive sequential designs allocate experimental units (or observations) to competing treatments or populations sequentially, using information accrued so far to guide future allocation. At each stage, the probability of selecting a population depends on its estimated superiority. Adaptive sequential design embodies the dual objectives — achieving precise infere-
nce while safeguarding subjects from excessive exposure to inferior treatments, which has driven a large literature spanning bandit problems, response-adaptive randomization, and sequential testing (see Berry and Fristedt, 1985; Friedman et al., 2010; Ivanova and Rosenberger, 2000; Rosenberger et al., 2001). Typical approaches emphasize either optimality of inference or desirable allocation properties, but rarely provide closed-form control of the total use of the inferior option. The central prob-
lem in adaptive allocation lies in balancing statistical optimality and ethical constraints. Ideally, an adaptive procedure should satisfy the following criteria:
• It should asymptotically allocate a higher proportion of samples to the better population and the number of samples allocated to the inferior population should remain small or, if possible, finite in expectation and higher moments.
• It should retain inferential efficiency comparable to the SP RT , ensuring that Type I and Type II error probabilities remain controlled.
Most existing methods satisfy only part of these goals. Urn and play-the-winner–type schemes tend to concentrate sampling on the superior treatment as trials progress, but typically the absolute number of allocations to the inferior treatment continues to grow with the total sample size. Moreover, very few of these studies provide analytical expressions for the number of inferior allocations or connect their procedures to formal inferential properties such as ASN or error control. A number of stud-
ies have examined aspects of adaptive allocation and ethical sequential sampling. Biswas et al. (2007) provided a comprehensive treatment of responseadaptive designs in clinical trials, highlighting the ethical dimension of minimizing allocations to inferior treatments. Recent contributions by Das et al. (2023), Biswas et al. (2020), Bandyopadhyay et al. (2020), Das (2024a), and Das (2024b) have proposed new adaptive rules incorporating covariate adjustments, ordinal responses, crossover trials, m-
ulti-treatment response adaptive design, misclassifications, and adaptive interim decisions, all designed to enhance ethical allocation properties.
2

Earlier studies explored related versions of the two-treatment adaptive problem, but with important limitations. Bhandari et al. (2007) considered the case with known face value of the parameters, indicating that under a specific adaptive procedure, the expected number of allocations to the less effective treatment could be finite, although no closedform expression or rigorous distributional analysis was provided, and inferential aspects such as the ASN or probability of correct selection (P CS h-
enceforth) were not addressed. Bhandari et al. (2009) extended the problem to unknown parameters and obtained that the expected number of inferior allocations grows logarithmically with the total sample size, but the study did not link the allocation mechanism with inferential efficiency. More recently, Kundu et al. (2025) revisited the problem in an adaptive sequential context, proving that the number of inferior allocations is a finite random variable with finite moments. However, their proof re-
lied on a subset of the sample space corresponding to correct selection events and did not yield a general closed-form expression, while the procedure’s inferential efficiency was only qualitatively observed but not comparable with the SP RT framework. Building on that theoretical foundation, the present paper addresses the above gap by developing a new adaptive sequential procedure for two-sample/simple-hypotheses testing problem and employs a likelihood ratio–driven adaptive rule that determines-
 at each stage which population to sample next, based on cumulative log-likelihood comparisons of the data collected so far. The method ensures that sampling effort is increasingly concentrated on the better-performing population, thereby simultaneously achieving statistical efficiency and ethical prudence. Secondly, and most importantly, we derive an explicit analytical expression for the expected number of allocations to the less effective treatment (valid for large sample regimes) and we prove -
that this count is a finite random variable with all moments finite. While the existence of a finite bound was hinted at in our earlier work (Kundu et al., 2025), no closed-form expression had been obtained. In the current framework, using the asymptotic behavior of cumulative likelihood ratios and the distributional properties of their standardized sums, we elucidate that this expected number converges to a finite value that depends on the mean and variance of the underlying log-likelihood ratio -
statistics. This formula provides a quantifiable measure of ethical efficiency, representing the expected finite number of applications of the less effective treatment. Thirdly, we demonstrate that the proposed adaptive rule retains the asymptotic efficiency same as that of SP RT in terms of ASN . The remainder of this paper is organized as follows. Section 2 introduces the formal preliminaries and describes the proposed adaptive allocation rule (Method M). Section 3 explicates the main theoretica-
l results, including the proof of finiteness and the derivation of the closed-form expression for the number of inferior allocations, along with the efficiency comparison with the SP RT . Section 4 assesses the results of comprehensive simulation studies under various parameter choices and distributions. Finally, Section 5 concludes the paper.
2 Preliminaries
Let X = X1, X2, X3, . . . and Y = Y1, Y2, Y3, . . . two independent data streams be generated. Xi and Yi have densities from {f0, f1} with respect to some σ-finite measure. It is not known which fi is assigned with Xi or Yi.
3

2.1 Adaptive Sequential Procedure
We start with one sample each from X and Y. At the step n, using past data, we use the method M to select the population from which to collect a sample next. At step n, let we have N0,n and N1,n samples from X and Y respectively, with N0,n + N1,n = n. Let us define the following:
nmax = max{N0,n, N1,n} and nmin = min{N0,n, N1,n}.
When N0,n = N1,n, we assign them to nmax and nmin with probability 1
2 each. Consider two simple null and alternative hypotheses: H0 : (f0, f1) vs H1 : (f1, f0), where the first coordinate represents density that corresponds to X .
Lemma 2.1. At step n, the samples collected from X is (X1, X2, . . . , XN0,n) and the samples collected from Y is (Y1, Y2, . . . , YN1,n). n samples together conditioned by (N0,n, N1,n) are independent and conditional distribution of X1, X2, . . . , XN0,n is i.i.d. and that of Y1, Y2, . . . , YN1,n is also i.i.d..
Proof.
P (N0,n, N1,n) =
X
path
P (path leading to (N0,n, N1,n)) .
In the below, let f denote respective densities (or, probabilities) for the random variables (or, events) given after it.
f (X1, X2, . . . , XN0,n|N0,n, N1,n)
= f (X1, X2, . . . , XN0,n, N0,n, N1,n)
f (N0,n, N1,n)
=
P
path f (X1, X2, . . . , XN0,n, path leading to (N0,n, N1,n))
f (N0,n, N1,n)
=
P
path f (X1, X2, . . . , XN0,n| path leading to (N0,n, N1,n)).P (path leading to (N0,n, N1,n))
f (N0,n, N1,n)
= f (X1)f (X2) . . . f (XN0,n). P
path P (path leading to (N0,n, N1,n))
f (N0,n, N1,n)
=f (X1)f (X2) . . . f (XN0,n),
where, f is f0 (under H0) and f1 (under H1). Similarly, this holds for Y ′
i s.
Remark 1. We consider without loss of generality, f0 to be better distribution. Under H0, X ∼ f0 and under H1, Y ∼ f0. Without loss of generality, we consider that H0 is true.
2.2 Method M
One observes that nmax ≥ n
2 . At step n, we consider U1, U2, . . . , Unmax i.i.d. sample where Ui (Xi or Yi) corresponds to nmax.
(i) If log
h Qnmax
i=1 f0(Ui)
Qnmax
i=1 f1(Ui)
i
> 0, we draw one more sample from fi corresponding to nmax.
4

(ii) If log
h Qnmax
i=1 f0(Ui)
Qnmax
i=1 f1(Ui)
i
< 0, we draw one more sample from fi corresponding to nmin.
(iii) If log
h Qnmax
i=1 f0(Ui)
Qnmax
i=1 f1(Ui)
i
= 0, we draw a sample from f0 or f1 with probability 1
2 each.
3 Main Result
We aim to allocate more samples to a better density (f0). PIn denotes the probability of incorrect allocation in this context at step n. We consider f0 and f1 to be continuous. If they are not continuous, we need to adjust a little bit (not shown in the paper). Here, in this context, let
PIn =

 
 
P
h
log Qnmax
i=1
f0(Ui)
f1(Ui) < 0
i
, if U ∼ X,
P
h
log Qnmax
i=1
f0(Ui)
f1(Ui) > 0
i
, if U ∼ Y
=

 
 
P
h
Pnmax
i=1 Z (X)
i <0
i
, if U ∼ X where Z(X)
i = log f0(Xi)
f1(Xi) ,
P
h
Pnmax
i=1 Z (Y )
i >0
i
, if U ∼ Y where Z(Y )
i = log f0(Yi)
f1(Yi)
=

  
  
P
Pnmax i=1
Z (X )
i −ηx
σx < − ηx
σx · nx , if U ∼ X,
P
Pnmax i=1
Z(Y )
i −ηy
σy > − ηy
σy · ny , if U ∼ Y
→

 
 
1 − Φ ηx
σx · √nx , if U ∼ X,
Φ ηy
σy · √ny , if U ∼ Y.
Here, ηx, σx and ηy, σy are respective means and standard deviations of Z(X)
i = log f0(Xi)
f1(Xi)
and Z(Y )
i = log f0(Yi)
f1(Yi) , with nx = N0,n and ny = N1,n. The expected number of alloca
tions to the less effective treatment is
E (N1,n) =
n
X
m=2
PIm
≈
nx
X
i=1
1 − Φ ηx
σx
√
i+
ny
X
j=1
Φ ηy
σy
pj
≤
∞
X
i=1
1 − Φ ηx
σx
√
i+
∞
X
j=1
Φ ηy
σy
pj < ∞. (1)
As ηx > 0 and ηy < 0, N1,n < ∞ ∀ n, and nli→m∞ E(N1,n) < ∞.
With nx = N0,n and ny = N1,n moderately large, the expected number of allocations to the less effective treatment can be given by the following result.
5

Theorem 3.1 (Expression for the expected number of inferior allocations). For large n, the expected number of allocations to the less effective treatment under the proposed adaptive rule (and with the assumptions given in Section 2) satisfies
E(N1,n) ≈ 1
2
σ2
x
ηx2
+ σ2
y
ηy2
,
which represents a finite constant depending only on the first two moments of the loglikelihood ratio statistics. Also, as N1,n is the sum of independent Bernoulli variables, it follows that all the moments of N1,n are bounded.
Proof. Starting from the preceding summation (Equation 1) and applying the normal approximation to the tail probabilities,
E (N1,n) ≈
∞
X
i=1
Φ − ηx
σx ·
√
i+
∞
X
j=1
Φ ηy
σy · pj
≈
Z0
−∞
Φ − ηx
σx
· √−t dt +
Z0
−∞
Φ ηy
σy
· √−t dt
=1
2
σ2
x
ηx2
+ σ2
y
ηy2
[By Integration by parts]
where N0,n and N1,n are moderately large. This is finite. This is the approximate value of the number of applications of the less effective treatment for large n.
As P∞
m=2 PIm < ∞, moment generating function of N1,n is finite for finite domain by a constant function not depending on n. Thus, all the moments of N1,n are similarly bounded.
Remark 2. E(N1,n) increases to a finite quantity, as n → ∞. Also, we proved that all
the moments of N1,n are bounded. Hence, N1,n
N0,n → 0 in probability, as n → ∞, by Markov
inequality.
3.1 Stopping Rule
We will perform the SP RT with U1, U2, . . . to test hypotheses K0 : Ui ∼ f0 Vs K1 : Ui ∼ f1, where Ui corresponds to data stream for nmax. Under H0, if K0 is accepted, we have correct selection. Here, we derive the expression for probability of incorrect selection.
Remark 3. In summary, at each step n, we get U1, U2, . . . , Unmax and apply method M and get the population to which to allocate next treatment and we update U1, U2, . . . , Unmax+1. So, we continue with the adaptive rule to get U -data stream and ultimately stop when the SP RT between K0 and K1 stop. Hence, if we get P ICS of that SP RT , we get P ICS of the adaptive rule.
3.2 Details of Adaptive SP RT Rule
Suppose α = P(Type I error) = P ICSI and β = P(Type II error) = P ICSII. Let a ≈ log 1−β
α and b ≈ log β
1−α . We consider the following adaptive SPRT rule:
6

• We continue adaptive sampling if b < Pnmax
i=1 log f1(Ui)
f0(Ui) < a.
• We stop adaptive sampling in favour of K1 if Pnmax
i=1 log f1(Ui)
f0(Ui) ≥ a.
• We stop adaptive sampling in favour of K0 if Pnmax
i=1 log f1(Ui)
f0(Ui) ≤ b.
Let ASN denote the average sample number of the proposed adaptive rule when coupled with the SP RT stopping rule above, and let ASNK0 and ASNK1 denote the corresponding ASN s under K0 and K1, respectively. From Rao (1973) (pp. 479), we get approximate expressions for ASN of the SP RT as
ASNK0 ≈ b(1 − α) + aα
−ηx
and, ASNK1 ≈ bβ + a(1 − β)
−ηy
, (2)
α and β are small (tend to 0) and accordingly a → ∞ and b → −∞. Hence, from Equation 2,
log(P ICSII ) ≈ −ηx · ASNK0 + o(ASNK0)
log(P ICSI ) ≈ ηy · ASNK1 + o(ASNK1).
Thus, we get the expression for log(P ICS) using our stopping rule and our selection procedure.
Remark 4. If we make SP RT with X-data stream (or, Y -data stream) instead of U -data stream for hypotheses K0 : X ∼ f0 Vs K1 : X ∼ f1 (or, K0 : Y ∼ f0 Vs K1 : Y ∼ f1), we get similar expression for log(P ICSII) and log(P ICSI). Only difference will be in ASN . In that case,
ASN ≈ ASNK0 + N ∗
1 (or, ≈ ASNK1 + N ∗
1 ) (3)
where, N ∗
1 = nli→m∞ E(N1,n).
Theorem 3.2 (Efficiency of the proposed selection procedure). Under the assumptions in Section 2, the proposed adaptive SP RT rule using U1, U2, . . . , Unmax is efficient, and for the same value of P ICS,
ASN
ASNK0
→ 1 or, ASN
ASNK1
→ 1.
Proof. The proof can be directly followed from the Equation 3 for the adaptive SP RT rule.
3.3 Example
We illustrate the results with an example of f0 ∼ N(θ0, 1) (first data stream) and f1 ∼ N(θ1, 1) (second data stream). Then with the notations of Section 3 we have, ηx =
1
2 · (θ0 − θ1)2 > 0 and ηy = − 1
2 · (θ0 − θ1)2 < 0 are the means of Z(X)
i = log f0(Xi)
f1(Xi) and
Z(Y )
i = log f0(Yi)
f1(Yi) respectively. Also, the calculated variances for both are same, i.e.,
σ2
x = σ2
y = (θ0 − θ1)2.
7

In this context, from Theorem 3.1, the expression of N ∗
1 is,
N∗
1≈
∞
X
m=1
Φ − ηx
σx
· √m +
∞
X
m=1
Φ ηy
σy
· √m
=1
2
σ2
x
ηx2
+ σ2
y
ηy2
=4
(θ0 − θ1)2 < ∞.
Our stopping rule in case of samples from normal populations is to be adapted from the SP RT stopping rule given in the earlier section. After adapting the selection procedure in that context, we will find the example exhibited is efficient also.
Remark 5. With Xi ∼ N(−θ0, 1) and Yi ∼ N(θ0, 1), we have, ηx = 2θ2
0 and ηy = −2θ2
0, whereas, σ2
x = σ2
y = 4θ2
0 for doing adaptive sequential testing as discussed earlier. Here, we can note that, the allocation rule in this context does not depend on parameters and it depends only on U ̄n = 1
n
Pn
i=1 Ui and n. In that case, N ∗
1≈ 1
θ2 < ∞.
Remark 6. Let f0, f1 be in the same M LR-family (with parameter θ) with X ̄n and Y ̄n as sufficient statistics respectively. Note that, for testing composite hypotheses H′
0 : θ ≤ θ0 Vs H′
1 : θ > θ1, if we try to apply adaptive sequential rule as discussed earlier, allocation
rule will depend on U ̄n and parameters, and a, b, α, β depend on parameters. Then,
N∗
1≈1
2 · σx2(θ′
0 ,θ′
1)
ηx2 (θ′
0 ,θ′
1) + σy2(θ′
0 ,θ′
1) ηy2 (θ′
0 ,θ′
1) , where θ′
0 ∈ H′
0 and θ′
1 ∈ H′
1. In that case, for θ′
0 ∈ H′
0 and
θ′
1 ∈ H′
1, the worst (i.e., highest) N ∗
1≈1
2 · σx2(θ0,θ1)
ηx2(θ0,θ1) + σy2(θ0,θ1)
ηy2(θ0,θ1) .
4 Simulation
In this section, we present a comprehensive simulation analysis to assess the performance of the proposed adaptive SP RT procedure under a range of underlying distributional settings. For each configuration, we estimate the P CS, the expected number of allocations to the inferior population, and the ASN . Simulations are conducted under Normal, Poisson, and Asymmetric Laplace distributions, with 1000 replications in each scenario to ensure numerical stability. These results collectively convey the-
 operational behaviour of the procedure across distinct distributional regimes. Across all experiments, the decision thresholds are computed as a = log 1−β
α ,b=
log β
1−α , for each specified pair (α, β). Sampling commences when one observation is drawn independently from each population, forming the initial likelihood contributions. Subsequent sampling proceeds according to the adaptive allocation rule described in Section 3.2. At each stage, the accumulated sample sizes from the two populations are examined, and the next observation is drawn from the population whose cumulative log
likelihood ratio Ln = Pnmax
i=1 log f0(Ui)
f1(Ui) , provides weaker support for K1 (hypothesis as
defined in Section 3.1). This mechanism ensures that sampling is dynamically steered toward the superior population, thereby allowing the likelihood ratio to evolve in an efficient manner towards getting more and more samples from the superior population and highlighting the implication of the adaptive nature of the design.
8

After each new observation, the log-likelihood ratio is updated based on the stream currently yielding the larger sample size. The procedure terminates once the statistic crosses one of the two boundaries: the alternative K1 is accepted when the statistic exceeds a, and the null K0 is accepted when it falls below b. For every replication, we record whether the final decision corresponds to the truly superior population, the total number of observations drawn, and the frequency of allocations to t-
he inferior population. Averages across replications yield the performance metrics P CS, E(N1,n), and ASN . The subsequent subsections outline the distributional scenarios considered and summarize the corresponding numerical results.
4.1 Normal Distributions (Adaptive SP RT )
We first consider, f0 ∼ N(θ0, 1), f1 ∼ N(θ1, 1), with following mean pairs
(θ0, θ1) ∈ {(0.1, 0), (0.2, 0), (0.3, 0), (0.4, 0), (0.5, 0)}.
The adaptive SP RT procedure continues to perform reliably, producing high P CS and maintaining small inferior allocations across these configurations. The expected number of allocations to the inferior population remains small and aligns closely with the theoretical benchmark N ∗
1 derived in Section 3.3. As the separation |θ0 − θ1| increases, ASN declines substantially and as (α, β) decreases E(N1,n) increases to the finite limit N∗
1 , reflecting good discrimination between the two populations. Detailed results are reported in Table 1.
4.2 Poisson Distributions (Adaptive SP RT )
Next, we consider f0 ∼ P(λ0), f1 ∼ P(λ1), with several contrasting parameter pairs
(λ0, λ1) ∈ {(2.5, 2), (3, 2.5), (3.5, 2.5), (2, 1), (1.5, 0.5), (2.5, 1)}.
The adaptive procedure continues to exhibit good behaviour under these discrete distributions, yielding high P CS values and maintaining modest inferior allocations. As in the Normal case, ASN decreases as the divergence between λ0 and λ1 widens. The corresponding numerical outcomes are displayed in Table 2.
4.3 Asymmetric Laplace Distributions (Adaptive SP RT )
To evaluate performance under skewed and asymmetric settings, we consider the Asymmetric Laplace family (Kotz et al., 2001)
f (x; m, λ, κ) = λ
κ + κ−1



exp λ
κ (x − m) , x < m,
exp(−λκ(x − m)) , x ≥ m,
where m is a location parameter, λ > 0 is a scale parameter, and κ > 0 governs the degree of asymmetry. A variety of contrasting parameter pairs (m0, λ0, κ0) and (m1, λ1, κ1) are examined. Across all configurations, the adaptive SP RT continues to achieve strong P CS performance and small inferior allocations. As expected, ASN decreases monotonically with increasing separation between the distributions. The resulting performance measures are summarized in Table 3.
9

Table 1: Simulation results for two Normal populations with distinct mean pairs (θ0, θ1) and common variance (σ2
0, σ2
1) = (1, 1) conducted within the adaptive SP RT framework.
(a) (θ0, θ1) = (0.1, 0), N1∗ = 400
α(= β) P CS E(N1,n) ASN 10−3 0.908 349.550 1575.253 5 × 10−5 0.955 394.827 2289.517 10−5 0.969 391.828 2657.338 5 × 10−6 0.975 398.996 2756.844 10−6 0.986 394.102 3093.543
(b) (θ0, θ1) = (0.2, 0), N1∗ = 100
α(= β) P CS E(N1,n) ASN 10−3 0.918 91.237 418.085 5 × 10−5 0.955 98.748 574.303 10−5 0.979 97.999 663.545 5 × 10−6 0.976 99.725 694.320 10−6 0.984 100.309 781.425
(c) (θ0, θ1) = (0.3, 0), N1∗ = 44.444
α(= β) P CS E(N1,n) ASN 10−3 0.909 38.350 180.370 5 × 10−5 0.969 38.488 252.804 10−5 0.974 46.189 296.015 5 × 10−6 0.975 43.336 309.886 10−6 0.989 40.482 351.835
(d) (θ0, θ1) = (0.4, 0), N1∗ = 25
α(= β) P CS E(N1,n) ASN 10−3 0.919 20.496 100.263 5 × 10−5 0.952 23.338 143.625 10−5 0.971 25.552 168.346 5 × 10−6 0.987 23.845 177.570 10−6 0.984 22.652 194.418
(e) (θ0, θ1) = (0.5, 0), N1∗ = 16
α(= β) P CS E(N1,n) ASN 10−3 0.930 13.422 66.488 5 × 10−5 0.961 15.735 94.617 10−5 0.980 14.324 105.348 5 × 10−6 0.979 14.463 110.278 10−6 0.985 15.161 124.351
4.4 Classical SP RT
For comparative context, we also examine the classical SP RT under the Normal distribution, where it is naturally applicable. It utilizes the same threshold pair (a, b), i.e., same pair of (α, β) but employs deterministic alternating sampling from the two
populations, without any adaptive allocation. The test statistic is Zn = Pn
i=1 log f1(Xi)
f0(Xi) ,
and the sampling continues until Zn crosses one of the stopping boundaries. Although the classical SP RT often achieves reasonably small ASN , it necessarily allocates a substantial number of samples to the inferior population. This stands in sharp contrast with the adaptive SP RT , which significantly curtails inferior allocations by design. The numerical results (Table 4) show that the P CS of classical SP RT is higher than that of our adaptive SP RT method, although both methods are efficient.
Remark 7. N ∗
1≈1
2
σx2
ηx2 + σy2
ηy2 is the limit of E(N1,n), i.e., the expression for finite
increasing limit of applications to the inferior treatment. For adaptive SP RT , in all the three sets of the above tables, we have found that E(N1,n) conforms to N ∗
1 as (α, β) decreases. There may be small fluctuations due to sampling error but overall E(N1,n) goes close to N ∗
1.
10

Table 2: Simulation results for two Poisson populations with distinct mean pairs (λ0, λ1) conducted within the adaptive SP RT framework.
(a) (λ0, λ1) = (2.5, 2), N1∗ = 35.851
α(= β) P CS E(N1,n) ASN 10−3 0.924 32.295 146.120 5 × 10−5 0.959 35.314 203.890 10−5 0.984 32.991 229.243 5 × 10−6 0.982 35.608 245.363 10−6 0.987 34.219 271.723
(b) (λ0, λ1) = (3, 2.5), N1∗ = 43.879
α(= β) P CS E(N1,n) ASN 10−3 0.909 39.151 176.486 5 × 10−5 0.971 41.286 246.989 10−5 0.980 42.927 286.710 5 × 10−6 0.978 43.234 303.215 10−6 0.986 42.506 333.556
(c) (λ0, λ1) = (3.5, 2.5), N1∗ = 11.888
α(= β) P CS E(N1,n) ASN 10−3 0.931 10.940 49.169 5 × 10−5 0.967 10.668 66.835 10−5 0.980 11.002 76.338 5 × 10−6 0.987 10.611 80.323 10−6 0.996 10.525 89.907
(d) (λ0, λ1) = (2, 1), N1∗ = 5.771
α(= β) P CS E(N1,n) ASN 10−3 0.935 5.452 24.310 5 × 10−5 0.969 5.548 32.654 10−5 0.981 5.793 37.123 5 × 10−6 0.986 5.962 39.403 10−6 0.992 5.518 42.659
(e) (λ0, λ1) = (1.5, 0.5), N1∗ = 3.642
α(= β) P CS E(N1,n) ASN 10−3 0.962 3.662 15.269 5 × 10−5 0.981 3.759 20.489 10−5 0.989 3.689 22.976 5 × 10−6 0.986 3.650 24.098 10−6 0.994 3.701 26.718
(f) (λ0, λ1) = (2.5, 1), N1∗ = 2.911
α(= β) P CS E(N1,n) ASN 10−3 0.952 2.996 12.614 5 × 10−5 0.977 3.093 16.832 10−5 0.986 3.204 19.170 5 × 10−6 0.990 2.991 19.950 10−6 0.989 3.104 21.790
Remark 8. Regarding P CS of adaptive SP RT in Tables 1, 2 and 3, we have seen that obtained P CS is little higher than 1 − α(= 1 − β), though it is found that P CS tends to 1 as ASN increases (conforming that adaptive SP RT is efficient). In classical SP RT (Table 4), the value of P CS well coincide with 1 − α(= 1 − β). Effective ASN of adaptive SP RT is less than that of classical SP RT by the finite amount N ∗
1 . Hence, though being efficient, adaptive SP RT gives little higher value of probability of incorrect selection.
4.5 Summary
Across all distributional regimes, the adaptive SP RT maintains high P CS while drastically reducing sampling from the inferior population. ASN decreases systematically with increasing signal strength, and the procedure remains stable across symmetric, discrete, and skewed scenarios. In the Normal case, the classical SP RT underscores the ethical and operational advantages of the adaptive allocation mechanism as while retaining comparable inferential accuracy, the adaptive SP RT dramatically reduc-
es the expected inferior sample size. These findings collectively highlight the strong practical merits of the adaptive SP RT framework in sequential decision-making problems.
11

Table 3: Simulation results for two Asymmetric Laplace populations with various parameter configurations (m0, λ0, κ0) and (m1, λ1, κ1) conducted within the adaptive SP RT framework.
(a) (m0, λ0, κ0) = (0.2, 2, 0.7), (m1, λ1, κ1) = (0, 1, 0.3), N1∗ = 2.288
α(= β) P CS E(N1,n) ASN 10−3 0.844 1.936 11.701 10−5 0.920 1.996 19.366 5 × 10−6 0.949 1.978 20.703 10−6 0.955 2.020 23.325 10−7 0.964 2.060 27.126
(b) (m0, λ0, κ0) = (0.2, 1, 0.8), (m1, λ1, κ1) = (0, 2, 0.2), N1∗ = 4.802
α(= β) P CS E(N1,n) ASN 10−3 0.943 3.259 9.819 10−5 0.985 3.493 12.693 5 × 10−6 0.989 3.416 12.720 10−6 0.994 3.364 13.489 10−7 0.995 3.511 14.804
(c) (m0, λ0, κ0) = (0.4, 1, 0.6), (m1, λ1, κ1) = (0, 1, 0.2), N1∗ = 4.576
α(= β) P CS E(N1,n) ASN 10−3 0.893 2.793 15.669 10−5 0.959 2.890 24.958 5 × 10−6 0.969 2.812 26.276 10−6 0.971 3.005 29.531 10−7 0.975 3.046 33.611
(d) (m0, λ0, κ0) = (0, 2, 0.7), (m1, λ1, κ1) = (0.2, 2, 0.3), N1∗ = 2.774
α(= β) P CS E(N1,n) ASN 10−3 0.940 2.323 9.663 10−5 0.975 2.492 14.553 5 × 10−6 0.986 2.539 15.371 10−6 0.989 2.571 17.121 10−7 0.992 2.514 18.929
Table 4: Simulation results for two Normal populations with distinct mean pairs (μ0, μ1) and common variance (σ2
0, σ2
1) = (1, 1) conducted within the SP RT framework.
(μ0, μ1) = (0.1, 0) (μ0, μ1) = (0.2, 0) (μ0, μ1) = (0.3, 0) (μ0, μ1) = (0.4, 0) (μ0, μ1) = (0.5, 0) α(= β) P CS ASN P CS ASN P CS ASN P CS ASN P CS ASN 10−2 0.989 928.385 0.991 231.763 0.990 104.929 0.992 57.987 0.989 38.152 10−3 0.999 1370.521 1.000 346.063 1.000 155.557 0.999 89.838 0.998 56.901 10−4 0.999 1867.227 1.000 462.753 1.000 206.995 0.999 117.981 1.000 76.770 10−5 1.000 2335.468 1.000 571.699 1.000 265.242 1.000 146.960 1.000 95.605
5 Concluding Remarks
This work, from a broader perspective, addresses a longstanding gap in adaptive sequential analysis — the lack of an explicit, finite-form quantification of ethical performance in allocation-driven testing procedures. The proposed likelihood ratio–based adaptive sequential rule for testing H0 : (f0, f1) vs H1 : (f1, f0), provides a direct analytical expression for the expected number of allocations to the less effective treatment and establishes its finiteness. The procedure also has significant i-
mplications for experimental design in practice. In clinical trials or adaptive testing problems where sample collection incurs real-world ethical or economic costs, having an explicit upper bound on the expected number of allocations to the inferior option offers clear interpretability for regulators and practitioners. The procedure also retains the asymptotic efficiency of the SP RT .
The study also opens up several directions for further research. In particular, when the parameters are completely unknown (composite hypotheses), it is of interest to design or modify the procedure to achieve a parameter-free decision rule while preserving the
12

essential goals of ethical and inferential efficiency. In this paper, we have achieved this property to some extent (as mentioned in Remark 5) for the symmetric case H0 : θ = θ0 Vs H1 : θ = −θ0. It is to be seen if the results can also be extended to settings involving more than two treatments, where similar finiteness and efficiency properties are expected to hold.
References
Bandyopadhyay, U., Mukherjee, S., and Biswas, A. (2020). Adaptive two-treatment three-period crossover design for normal responses. Brazilian Journal of Probability and Statistics, 34(2):291 – 303. https://doi.org/10.1214/18-BJPS427.
Berry, D. A. and Fristedt, B. (1985). Bandit Problems: Sequential Allocation of Experiments. Chapman and Hall, London.
Bhandari, S. K., De, S. K., Mandal, S., Pradhan, S., and Ghosh, B. (2009). Study of optimal adaptive rule in testing composite hypothesis. Sequential Analysis, 28(3):394405. https://doi.org/10.1080/07474940903041852.
Bhandari, S. K., Dutta, R., and Niyogi, R. G. (2007). Study of optimal adaptive rule in testing problem. In Advances in Multivariate Statistical Methods. World Scientific.
Biswas, A., Bandyopadhyay, U., and Bhattacharya, R. (2007). Response-Adaptive Designs in Phase III Clinical Trials. In Statistical Advances in the Biomedical Sciences, pages 33–53. John Wiley & Sons, Ltd.
Biswas, A., Bhattacharya, R., and Das, S. (2020). A multi-treatment response adaptive design for ordinal categorical responses. Statistical Methods in Medical Research, 29(3):827–836.
Das, R. (2024a). An optimal sequential design in ethical allocation with an adaptive interim analysis. Journal of Nonparametric Statistics, 36(3):547–572. https://doi. org/10.1080/10485252.2023.2223322.
Das, S. (2024b). A two armed optimal response adaptive randomization for ordinal categorical responses with possible misclassification. Sequential Analysis, 43(2):131146. https://doi.org/10.1080/07474946.2023.2295264.
Das, S., Bhattacharya, R., and Biswas, A. (2023). Multi-arm covariate adjusted response adaptive designs for ordinal outcome clinical trials. Statistical Methods in Medical Research, 32(1):88–99.
Friedman, L. M., Furgberg, C. D., and DeMets, D. L. (2010). Fundamentals of Clinical Trials. Springer.
Ivanova, A. and Rosenberger, W. F. (2000). A comparison of urn designs for randomized clinical trials of k > 2 treatments. Journal of Biopharmaceutical Statistics, 10(1):93107.
Jain, S. and Jain, R. (1994). An application of sprt for detecting change point in a reliability growth model. Microelectronics Reliability, 34(5):811–814. https://www. sciencedirect.com/science/article/pii/002627149490006X.
13

Kotz, S., Kozubowski, T. J., and Podgo ́rski, K. (2001). Asymmetric Laplace Distributions. In The Laplace Distribution and Generalizations: A Revisit with Applications to Communications, Economics, Engineering, and Finance, pages 133–178. Birkha ̈user Boston. https://doi.org/10.1007/978-1-4612-0173-1_3.
Kundu, S., Jha, J., and Bhandari, S. K. (2025). To study properties of a known procedure in adaptive sequential sampling design. Sequential Analysis, pages 1–13. https://doi. org/10.1080/07474946.2025.2533328.
Li, C. and Nenes, G. (2024). Economic modelling and optimisation of sprt-based quality control schemes for individual observations. International Journal of Production Research, 62(24):8766–8789. https://doi.org/10.1080/00207543.2024.2349252.
Li, J. X., Jeske, D. R., and Klein, J. A. (2012). Sequential analysis methodology for a poisson glmm with applications to multicenter randomized clinical trials. Journal of Statistical Planning and Inference, 142(12):3225–3234. https://www.sciencedirect. com/science/article/pii/S0378375812001760.
Martens, M. J. and Logan, B. R. (2024). Statistical rules for safety monitoring in clinical trials. Clinical Trials, 21(2):152–161.
Rao, C. R. (1973). Linear Statistical Inference and its Applications: Second Editon, pages 444–515. Wiley Series in Probability and Statistics. Wiley. https://doi.org/ 10.1002/9780470316436.ch7.
Rasay, H. and Alinezhad, E. (2022). Developing an adaptable sequential probability ratio test applicable for lifetime analysis of different continuous distributions. Quality Technology & Quantitative Management, 19(4):511–530. https://doi.org/10.1080/ 16843703.2021.2020954.
Rosenberger, W. F., Stallard, N., Ivanova, A., Harper, C. N., and Ricks, M. L. (2001). Optimal adaptive designs for binary response trials. Biometrics, 57(3):909–913. https: //doi.org/10.1111/j.0006-341X.2001.00909.x.
Teoh, J., Teoh, W., Khoo, M. B., Castagliola, P., and Moy, W. (2022). On designing an optimal sprt control chart with estimated process parameters under guaranteed in-control performance. Computers & Industrial Engineering, 174:108806. https: //www.sciencedirect.com/science/article/pii/S036083522200794X.
Wald, A. (1947). Sequential Analysis. Wiley Mathematical Statistics Series. John Wiley & Sons.
14

---

## Processing Information

- **Processing Library:** Zotero PDFWorker
- **Processing Date:** 2026-02-10T18:18:58.593Z
- **Text Length:** 35369 characters
- **Success:** Text extraction completed
- **PDF Library Used:** Zotero PDFWorker
- **Pages Processed:** 14 of 14
