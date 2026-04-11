# PDF Document: Kurozumi and Skrobotov - 2025 - Confidence Sets for the Emergence, Collapse, and Recovery Dates of a Bubble.pdf

**File Path:** Kurozumi and Skrobotov - 2025 - Confidence Sets for the Emergence, Collapse, and Recovery Dates of a Bubble.pdf

**Processed Date:** 2026-02-10T18:15:07.362Z

**File Size:** 455.06 KB

**Total Pages:** 53

**Extracted Pages:** 53

**PDF Library:** Zotero PDFWorker

**Attachment Item ID:** 3145

**Title:** Confidence Sets for the Emergence, Collapse, and Recovery Dates of a Bubble

**Collection:** Large Files > Random Papers

---

## Extracted Text Content

Confidence Sets for the Emergence, Collapse, and Recovery
Dates of a Bubble∗
Eiji Kurozumia, Anton Skrobotovb a Hitotsubashi University
b HSE University
November 21, 2025
Abstract
We propose constructing confidence sets for the emergence, collapse, and recovery dates of a bubble by inverting tests for the location of the break date. We examine both likelihood ratio-type tests and the Elliott-M ̈uller-type (2007) tests for detecting break locations. The limiting distributions of these tests are derived under the null hypothesis, and their asymptotic consistency under the alternative is established. Finitesample properties are evaluated through Monte Carlo simulations. The re-
sults indicate that combining different types of tests effectively controls the empirical coverage rate while maintaining a reasonably small length of the confidence set.
Keywords: confidence interval; rational bubble; change points; explosive autoregression; mildly explosive; mildly integrated; moderate deviation.
JEL Codes: C12, C22
∗We thank professors Yuta Koike, Tatsushi Oka, Yohei Yamamoto, Daisuke Yamazaki, and the participants at the seminar at Hitotsubashi University, the K4 conference held at Kobe University, and 2025 world congress of the econometric society. All errors are our responsibility. Kurozumi’s research was supported by JSPS KAKENHI Grant Number 22K01422, 23H00804, and 25K05034. Address correspondence to Eiji Kurozumi, Department of Economics, Hitotsubashi University, 2-1 Naka, Kunitachi, Tokyo 186-8601, Ja-
pan; e-mail: kurozumi@econ.hit-u.ac.jp
1
arXiv:2511.16172v1 [econ.EM] 20 Nov 2025

1 Introduction
Since the seminal work by Phillips et al. (2011) (hereafter PWY), numerous tests for bubble
detection have been developed in the literature. In PWY, the supremum of right-tailed unit
root tests in subsamples is proposed to detect bubbles and shown to have considerable power
compared with the full-sample test. On the other hand, the double-supremum test developed
by Phillips et al. (2015a,b) (hereafter PSY) is effective for detecting multiple bubbles. These
subsample right-tailed ADF tests have become standard and are widely used to identify
explosive behavior in financial asset prices. The PWY and PSY tests have since been extended
in several directions. For instance, the model has been adapted to account for shocks with
nonstationary volatility, and robust tests have been developed by Harvey et al. (2016), Harvey
et al. (2019), Harvey et al. (2020b), Kurozumi et al. (2023), and Harvey et al. (2025), among
others. Kurozumi and Nishi (2025) investigated the random-coefficient model with a possible
explosive root and demonstrated that some tests are more powerful than the right-tailed ADF
tests. In addition, Wu et al. (2025) showed that quantile regression techniques are effective
for bubble detection. For a comprehensive review of bubble detection methods, see Skrobotov
(2023).
Once evidence of a bubble is detected, attention often turns to estimating its emergence,
collapse, and recovery dates. PWY, PSY, and Phillips and Shi (2018), among others, pro
posed date-stamping methods based on bubble detection tests and demonstrated that their
estimators are consistent for the break fractions. Alternatively, traditional methods for de
tecting break dates, which minimize the sum of squared residuals, have been explored by
Harvey et al. (2017), Pang et al. (2018), Harvey et al. (2020a), Pang et al. (2021), Kurozumi
and Skrobotov (2023), and Kejriwal et al. (2025). These studies show that the emergence,
collapse, and recovery dates can be consistently estimated if the explosive speed is sufficiently
fast, whereas only consistency for the break fractions is guaranteed for the emergence and
recovery dates under slow explosiveness. However, to the best of our knowledge, confidence
sets for the bubble dates have not yet been developed in the literature.
In this article, we address this gap by investigating methods for constructing confidence
sets for the emergence, collapse, and recovery dates of a bubble. A commonly used approach
2

for constructing a confidence set for a break date relies on the limiting distribution of the
breakpoint estimator. However, our preliminary simulations reveal that this method performs
poorly for bubble dates. Instead, we propose constructing the confidence set by inverting
tests for the location of the break date, as proposed by Elliott and Mu ̈ller (2007) and Eo and
Morley (2015), among others. We develop several tests, including one based on the likelihood
ratio principle, as in Eo and Morley (2015), and others inspired by Elliott and Mu ̈ller (2007).
We examine the asymptotic properties of these tests under both the null and alternative
hypotheses. Furthermore, we evaluate their finite-sample performance through Monte Carlo
simulations, showing that some of the proposed methods perform satisfactorily in terms of
both the coverage rate and the length of the confidence set.
The remainder of this article is organized as follows. Section 2 introduces the model
and assumptions. Section 3 proposes several methods for constructing confidence sets for the
emergence, collapse, and recovery dates of the bubble and develops the associated asymptotic
theory. Section 4 investigates the finite-sample properties, and Section 5 presents an empirical
application. Concluding remarks are given in Section 6. Proofs of the theorems are relegated
to the appendix, and detailed simulation results are provided in the online appendix.
2 Model and Assumptions
We consider the following model for the emergence and collapse of a bubble for t = 1, 2, . . . , T :
yt =

    
    
μ + yt−1 + εt, 1 ≤ t ≤ Te,
φayt−1 + εt, Te + 1 ≤ t ≤ Tc,
φbyt−1 + εt, Tc + 1 ≤ t ≤ Tr,
μ + yt−1 + εt, Tr + 1 ≤ t ≤ T,
(1)
where y0 = op(T 1/2), φa := 1 + a/T α with a > 0 and 0 < α < 1, and φb := 1 − b/T β with
b > 0 and 0 < β < 1. The drift term μ is sometimes specified as being local to zero, such
as μ = c/T γ with 1/2 < γ ≤ 1, in which case the effect of the drift term becomes negligible.
For simplicity, we assume μ = 0 throughout this article.
In model (1), the process {yt} follows a random walk in the first regime but becomes
explosive at t = Te + 1. It then collapses at t = Tc + 1, where {yt} becomes mean-reverting
3

with φb < 1, and eventually returns to a random walk. The emergence, collapse, and recovery
dates (Te, Tc, and Tr, respectively) can thus be viewed as the break dates of the AR(1)
coefficients. The corresponding break fractions are defined as λe := Te/T , λc := Tc/T , and
λr := Tr/T . We assume that these fractions are distinct, satisfying 0 < λe < λc < λr < 1, as
is standard in the literature.
For model (1), we impose the following assumption.
Assumption 1 The sequence {εt} for t = 1, 2, . . . is a martingale difference sequence with
E[εt|Ft−1] = 0 a.s. for all t and supt E[εt2] < ∞, where Ft = σ{εt, εt−1, . . .}. We assume that
the following law of large numbers and functional central limit theorem (FCLT) hold:
1
T
⌊T r⌋
X
t=1
E[ε2
t ] → rσ2, 1
T
⌊T r⌋
X
t=1
ε2
t
−p→ rσ2, (2)
for 0 ≤ r ≤ 1, where −p→ denotes convergence in probability, and
√1T
⌊T r⌋
X
t=1
εt ⇒ σW (r), (3)
where W (·) is a standard Brownian motion and ⇒ denotes weak convergence of the associated
probability measures.
Assumption 1 requires the shocks to be uncorrelated but allows for conditional het
eroskedasticity. Note that the pointwise convergences in (2) imply uniform convergence
over 0 ≤ r ≤ 1 because the functions are monotonic in r (see, for example, Lemma A.10
in Hansen (2000)). The FCLT in (3) holds, for example, when {εt} is strongly uniformly
integrable under certain additional conditions (see Section 3.6 in Tanaka (1996)).
3 Construction of the Confidence Sets
In this section, we consider several methods for constructing confidence sets for Te, Tc, and
Tr, and investigate their asymptotic properties. Several approaches for estimating the bubble
dates have been proposed in the literature, and all of them establish the consistency of the
break fraction estimators. Hence, regardless of the specific estimation method employed, we
4

focus on subsamples divided according to the estimated break dates. In particular, we use
the estimators Tˆe, Tˆc, and Tˆr obtained via the step-by-step least squares method proposed
by Kurozumi and Skrobotov (2023). We also employ the OLS estimators φˆa and φˆb obtained
from the corresponding subsamples, while σˆ2 is computed from the residuals of the full sample.
It is straightforward to show that φˆa/φa
−p→ 1, φˆb/φb
−p→ 1, and σˆ2 −p→ σ2.
In the following subsections, since the break fraction estimators are consistent, as shown
in Kurozumi and Skrobotov (2023), we proceed with the analysis using the true regimes for
ease of exposition: [1, Tc], [Te + 1, Tr], and [Tc + 1, T ], corresponding to the analyses of the
emergence date Te, the collapse date Tc, and the recovery date Tr, respectively.
3.1 Confidence Set for the Emergence Date of a Bubble
In this subsection, we focus on the emergence date of a bubble in the regime [1, Tc] and
construct a confidence set for the emergence date using the first two regimes, in which Te is
unknown:
yt =
(
yt−1 + εt, 1 ≤ t ≤ Te,
φayt−1 + εt, Te + 1 ≤ t ≤ Tc. (4)
Let TUB := Tc denote the sample size of the first two regimes.
3.1.1 Confidence Interval Based on the Asymptotic Distribution of the Breakpoint Estimator
One frequently used method for constructing a confidence set for a break date is based on
the limiting distribution of the breakpoint estimator. For the emergence date of a bubble,
Pang et al. (2018) show in their Theorem 1.3 that
T2
UB ρ2
a λˆ∗
e − λ∗
e ⇒ argmax
v∈R
W ∗(v)
W1(λe∗) − |v|
2 (5)
when α > 1/2, where λˆe∗ := Tˆe/TUB is the estimator of λe∗ := Te/TUB (the relative position of
Te within the first two regimes), obtained by minimizing the sum of squared residuals in (4);
ρa := φa − 1; and W ∗(·) is a two-sided Brownian motion on R defined by W ∗(v) := W1(−v)
for v ≤ 0 and W ∗(v) := W2(v) for v > 0. For α = 1/2, the breakpoint estimator is Op(1),
5

whereas Tˆe is consistent for Te when α < 1/2. In other words, the emergence date can be
consistently estimated if the explosive speed is sufficiently fast.
Although the asymptotic behavior of Tˆe depends on the true value of α, we may construct
a confidence interval for Te based on (5) under the assumption α > 1/2, namely
Tˆe − cu
ρˆ2aT , Tˆe − cl
ρˆ2aT ,
where ρˆa := φˆa − 1 and cl and cu are the 0.05 and 0.95 quantiles of the limiting distribution in
(5) for a 0.9 confidence level. However, our preliminary simulations indicate that this interval
tends to be extremely wide: the empirical coverage rate is essentially one and the interval
covers all permissible break dates. Because of this poor performance, we do not further
pursue confidence intervals based on the limiting distribution of the breakpoint estimator.
3.1.2 Confidence Set Based on the LR Test
Another approach is to invert a test for the break date. Consider
H0 : Te = T1 vs. H1 : Te = T2 ̸= T1,
and exclude T1 from the confidence set if the null is rejected; otherwise, include it. By
repeatedly conducting the test over the permissible range of T1 at significance level δ, we
obtain a confidence set with nominal confidence 1 − δ. In this framework, the correctness of
the coverage rate is tied to the empirical size of the test, while the length of the confidence
set depends on its power.
For the test construction, assume {εt} ∼ i.i.d. N (0, σ2). This assumption is used only to
derive the test statistic; the asymptotic theory below does not rely on normality. A natural
candidate is a likelihood ratio (LR)-type test, as in Eo and Morley (2015) for regime-wise
stationary models. Pin down the alternative to H1 : Te = T2 (T2 ̸= T1) and let the joint
density of y := {y1, . . . , yT } be fT (y; Hi) under Hi. The LR principle suggests rejecting H0
6

when fT (y | H1)/fT (y | H0) is large. It can be shown that an equivalent rejection rule is
2
T2
X
t=T1+1
yt−1∆yt − ρa
T2
X
t=T1+1
y2
t−1 < c1 for T1 < T2, (6)
2
T1
X
t=T2+1
yt−1∆yt − ρa
T1
X
t=T2+1
y2
t−1 > c2 for T2 < T1, (7)
where c1 and c2 are chosen by the significance level. Under H0 : Te = T1, the convergence
rates of (6) and (7) differ, so distinct scalings are needed depending on whether T1 < T2 or
T2 < T1. We therefore propose, for T1 < T2,
LRe
a,12 :=
min
T2∈Λe
12

2
T2
X
t=T1+1
yt−1∆yt − ρˆa
T2
X
t=T1+1
y2
t−1


T φˆ2(T e
LRa12 −T1 )
a σˆ2/2
, (8)
where Λe12 := {T2 : T1 + ⌊TUBε⌋ ≤ T2 ≤ Tc} is the permissible range of T2 with trimming
parameter ε, and T e
LRa12 is the minimizer of the numerator of (8). For T2 < T1, define
LRe
a,21 :=
max
T2∈Λe
21

2
T1
X
t=T2+1
yt−1∆yt − ρˆa
T1
X
t=T2+1
y2
t−1


T2
UBρˆaσˆ2 , (9)
where Λe21 := {T2 : 1 ≤ T2 ≤ T1 − ⌊TUBε⌋}. Because we do not know whether T1 < Te or
T1 > Te under the alternative, we combine LRe
a,12 and LRe
a,21 and reject H0 : Te = T1 if
LRe
a,12 < cve
LR12,δ/2 or LRe
a,21 > cve
LR21,1−δ/2, (10)
where cve
LR12,δ/2 and cve
LR21,1−δ/2 are the δ/2 and 1 − δ/2 quantiles of the null limiting
distributions of (8) and (9), respectively. We call this the LRe
a test. Note that
P LRe
a,12 < cve
LR12,δ/2 or LRe
a,21 > cve
LR21,1−δ/2 ≤ δ,
so the asymptotic coverage is conservative (at least 1 − δ).
Remark 1 A joint test based on LRe
a,12 and LRe
a,21 can control the asymptotic size via the
union-of-rejections rule: reject if
LRe
a,12
cve
LR12,δ/2
< ψe
LRa,δ or LRe
a,21
cve
LR21,1−δ/2
< ψe
LRa,δ ,
7

where the inequality for LRe
a,21 is reversed because cve
LR21,1−δ/2 is negative (see Theorem 1).
Our preliminary simulations, however, indicate that the resulting confidence set is nearly
identical to that from the conservative rule (10) for all tests considered. Since the union rule
requires the additional critical value ψe
LRa,δ (in addition to two critical values), we focus on
the conservative procedure (10).
As shown in the simulation section, the above LR tests—especially LRe
a,12—tend to be
over-sized in finite samples. Because the rejection region is in the left tail, over-sizing indicates
that the statistic is too small in finite samples. To mitigate this distortion, we propose a
finite-sample correction that shifts the statistic in the positive direction without altering its
asymptotic null distribution. Noting that
2
T2
X
t=T1+1
yt−1∆yt = y2
T2 − y2
T1 −
T2
X
t=T1+1
(∆yt)2 ≤ y2
T2 ,
and that only y2
T2 contributes asymptotically in the above expansion, we modify LRe
a,12 to
LRe
b,12 :=
min
T2∈Λe
12

y2
T2 − ρˆa
T2
X
t=T1+1
y2
t−1


T φˆ2(T e
LRb12 −T1 )
a σˆ2/2
, (11)
where T e
LRb12 minimizes the numerator of (11). We will combine LRe
b,12 with EMe
a,21, intro
duced next.
3.1.3 Confidence Set Based on the EM-Type Test
Optimal tests for break dates in regime-wise stationary regression models have been studied
by Elliott and Mu ̈ller (2007), Kurozumi and Yamamoto (2015), and Yamamoto (2018), among
others, and for cointegrating regressions by Kurozumi and Skrobotov (2018). These works
assume priors on the break size and break date and derive tests that maximize weighted
average power. Typically, the prior for the break size is normal, chosen so that the test is
invariant to the magnitude of the break, while the break-date prior is uniform. As a result,
the optimal test can be written as a weighted average of LR statistics:
Z Z fT (y; H1)
fT (y; H0) dQT2(a) dJ (T2), (12)
8

where QT2(a) and J(T2) are the priors. Although the formal optimality of (12) requires
exogenous regressors (not our case), it nonetheless suggests suitable candidate statistics for
testing the break date.
For tractability, suppose {εt} ∼ i.i.d. N (0, σ2) and let
QT2 (a) ∼ N

0, κ


1
σ2T 2α
T1
X
t=T2+1
y2
t−1


−1

when T1 > T2, where κ > 0 controls the dispersion of a. This prior is adopted solely to obtain
a tractable statistic. Conditional on {yt}, the integral over a in (12) is explicit for κ < 2;
direct calculation yields
Z Z fT (y; H1)
fT (y; H0) dQT2(a) dJ (T2) ∝
Z 2−κ
2
−1/2
exp
"
κ
2(2 − κ)
PT2
t=T1+1 yt−1∆yt
2
σ2 PT2
t=T1+1 yt2−1
#
dJ (T2).
This suggests basing the test on
t2
T1,T2 :=


T2
X
t=T1+1
yt−1∆yt


2
σˆ2
T2
X
t=T1+1
y2
t−1
,
the square of the t-statistic for ρ in a regression of ∆yt on yt−1 over t = T1 +1, . . . , T2, with σˆ2
from the full-sample regression as before. Analogously, t2
T2,T1 serves against the alternative
T1 > T2. Following Yamazaki (2021), using one-sided t-statistics can shrink the confidence
set when the direction of the break is known; since the AR coefficient moves from a unit root
to an explosive value here, we employ one-sided statistics.
We consider average-type statistics with suitable scalings:
EMe
a,12 :=
Tc
X
T2=T1+⌊TUB ε⌋
tT1,T2
q
T φˆ2(Tc−T1)
a /(2ρˆa)
and EMe
a,21 := 1
TU B
T1−⌊TUB ε⌋
X
T2=1
tT2,T1 , (13)
and reject when
EMe
a,12 < cve
EM12,δ/2 or EMe
a,21 > cve
EM a21,1−δ/2,
9

where cve
EM12,δ/2 and cve
EMa21,1−δ/2 are the δ/2 and 1 − δ/2 quantiles of the respective null
limiting distributions. We call this the EMe
a test.
We also consider minimum- and maximum-type statistics:
EMe
b,12 :=
min
T2∈Λe
12
tT1,T2
q
T ρˆaφˆ2(T e
EM b12 −T1 )
a /2
and EMe
b,21 := max
T2∈Λe
21
tT2,T1 , (14)
where T e
EMb12 minimizes the numerator of EMe
b,12. Reject when
EMe
b,12 < cve
EMb12,δ/2 or EMe
b,21 > cve
EM b21,1−δ/2,
with critical values from the corresponding null limiting distributions. Since the null limiting
distributions of EMe
b,12 and EMe
a,12 coincide, we use the same critical values for the tests.
Taking finite-sample performance into account (see the next section), we propose combining
LRe
b,12 and EMe
a,21, which we call the LEe test.
3.1.4 Limiting Distributions of the Tests for the Emergence Date
We first establish the limiting distributions of the test statistics under the null.
Theorem 1 Suppose Assumption 1 holds. Under H0 : Te = T1,
LRe
a,12, LRe
b,12 ⇒ W 2(λ1), (15)
EMe
a,12, EMe
b,12 ⇒ |W (λ1)|, (16)
and
LRe
a,21 ⇒ −
Z λ∗
1
λ∗
1 −ε
W 2(s∗) ds∗, (17)
EMe
a,21 ⇒
Z λ∗
1 −ε
0
ADF (λ∗
2, λ∗
1) dλ∗
2, (18)
EMe
b,21 ⇒ sup
0≤λ∗
2 ≤λ∗
1 −ε
ADF (λ∗
2, λ∗
1), (19)
where λ∗
j := Tj/TUB for j = 1, 2, and
ADF (λ∗
2, λ∗
1) :=
1
2 W 2(λ∗1) − W 2(λ∗2) − (λ∗1 − λ∗2)
q
R λ∗
1
λ∗
2 W 2(s∗) ds∗
.
10

The left-tail critical values of (15) and (16) for a given λ1 follow from chi-square per
centiles:
cve
LR12,0.05 = λ1χ2
1,0.05 = 0.00393 λ1, cve
EM 12,0.05 =
q
λ1χ21,0.05 = p0.00393 λ1,
at significance level 0.05 (corresponding to confidence level 0.9), where χ21,0.05 is the 0.05 quan
tile of the chi-square distribution with one degree of freedom. In contrast, the critical values
for (17)–(19) are nonstandard. We therefore compute them for λ∗1 = 0.10, 0.11, . . . , 0.90 with
ε = 0.1 via simulation with 50,000 replications, approximating standard Brownian motion by
scaled partial sums of 1,000 i.i.d. standard normals. As it is inconvenient to tabulate critical
values for every admissible break date, we fit the response-surface regression
cve
l21,0.95 = a0,l + a−1,l
1
λ∗1
+ a1,lλ∗
1 + a2,lλ∗2
1 + a3,lλ∗3
1,
for l ∈ {LR, EM a, EM b}. The estimated coefficients are summarized in Table 1.
Next, we study the asymptotic behavior under the alternative.
Theorem 2 Suppose Assumption 1 holds.
(i) If Te > T1 (λe > λ1), then
LRe
a,12, LRe
b,12, EMe
a,12, EMe
b,12
−p→ 0, whereas LRe
a,21, EMe
a,21, EMe
b,21 = Op(1).
(ii) If Te < T1 (λe < λ1), then
LRe
a,12, LRe
b,12, EMe
a,12, EMe
b,12 → ∞, and LRe
a,21, EMe
a,21, EMe
b,21 → ∞.
From Theorem 2(i), the LRe
·,12 and EMe
·,12 tests are consistent against Te > T1 (their
rejection regions are left tails with positive critical values), whereas the LRe
a,21 and EMe
·,21
tests are not. Conversely, Theorem 2(ii) implies that the former are inconsistent against
Te < T1, while the latter are consistent. Thus, each test is consistent in exactly one direction
(either Te > T1 or Te < T1), as intended in their construction.
Since we test across all permissible break dates, Theorem 2 suggests that confidence sets
based on LRe
·,12 and EMe
·,12 will include only a small portion of dates earlier than the true Te,
11

but may include a substantial set of dates later than Te. In contrast, the LRe
a,21 and EMe
·,21
tests tend to yield asymmetric confidence sets with many dates to the left of Te and relatively
few to the right. These patterns are also borne out in finite samples in the next section.
3.2 Confidence Set for the Collapse Date of a Bubble
In this subsection, we focus on the collapse date of a bubble in the regime [Te + 1, Tr] and
consider a one-break model:
yt =
(
φayt−1 + εt, Te + 1 ≤ t ≤ Tc,
φbyt−1 + εt, Tc + 1 ≤ t ≤ Tr. (20)
Let TBC := Tr − Te denote the sample size of these two regimes.
3.2.1 Confidence Sets for the Collapse Date
As shown by Pang et al. (2021) and Kurozumi and Skrobotov (2023), the least squares
estimator of the collapse date is consistent, so the limiting distribution of the breakpoint
estimator is not directly useful for inference. As in the emergence-date case, we construct a
confidence set by inverting a test for
H0 : Tc = T1 vs. H1 : Tc = T2 ̸= T1.
Assuming {εt} ∼ i.i.d. N (0, σ2), the likelihood principle implies rejection of H0 when
2
T2
X
t=T1+1
yt−1(yt − φayt−1) + (φa − φb)
T2
X
t=T1+1
y2
t−1 > c1 for T1 < T2, (21)
2
T1
X
t=T2+1
yt−1(yt − φayt−1) + (φa − φb)
T1
X
t=T2+1
y2
t−1 < c2 for T2 < T1, (22)
which can be rewritten as
2
T2
X
t=T1+1
yt−1∆yt + (2 − φa − φb)
T2
X
t=T1+1
y2
t−1 > c1 for T1 < T2,
2
T1
X
t=T2+1
yt−1∆yt + (2 − φa − φb)
T1
X
t=T2+1
y2
t−1 < c2 for T2 < T1.
12

Replacing unknown parameters with consistent estimators and applying appropriate scalings,
we propose, for T1 < T2,
LRc
a,12 :=
max
T2∈Λc
12

2
T2
X
t=T1+1
yt−1∆yt + (2 − φˆa − φˆb)
T2
X
t=T1+1
y2
t−1


T (φˆa − φˆb)φˆ 2(T1−Te)
a σˆ2/(2ρˆb) , (23)
where ρˆb := 1 − φˆb and Λc12 := {T2 : T1 + ⌊TBC ε⌋ ≤ T2 ≤ Tr}. For T2 < T1, define
LRc
a,21 :=
min
T2∈Λc
21

2
T1
X
t=T2+1
yt−1∆yt + (2 − φˆa − φˆb)
T1
X
t=T2+1
y2
t−1


T (φˆa − φˆb)φˆ 2(T1−Te)
a σˆ2/(2ρˆa) , (24)
where ρˆa := φˆa − 1 and Λc21 := {T2 : 1 ≤ T2 ≤ T1 − ⌊TBC ε⌋}. We reject H0 : Tc = T1 if
LRc
a,12 > cvc
LR12,1−δ/2 or LRc
a,21 < cvc
LR21,δ/2,
where cvc
LR12,1−δ/2 and cvc
LR21,δ/2 are the 1 − δ/2 and δ/2 quantiles of the respective null
limiting distributions. We refer to this as the LRc
a test.
A finite-sample correction analogous to LRe
b,12 can be considered for LRc
a,12. However,
preliminary simulations indicate no meaningful improvement in coverage or set length, so we
do not pursue it further.
As in the emergence-date case, we may also consider EM-type tests based on the weighted
average of likelihood ratios. Proceeding as before, the EM-type tests can be based on t2
T1,T2
and t2
T2,T1, or on one-sided tT1,T2 and tT2,T1 when the break direction is known. With suitable
scalings, we propose
EMc
a,12 :=
1
Tr − T1 − ⌊TBC ε⌋ + 1
Tr
X
T2=T1+⌊TBC ε⌋
tT1,T2
q
T ρˆbφˆ 2(T1−Te)
a /2
, (25)
and
EMc
a,21 :=
1
T1 − ⌊TBC ε⌋ − Te
T1−⌊TBC ε⌋
X
T2=Te+1
tT2,T1
q
T ρˆaφˆ 2(T1−Te)
a /2
, (26)
13

and reject when
EMc
a,12 > cvc
EM12,1−δ/2 or EMc
a,21 < cvc
EM 21,δ/2,
where cvc
EM12,1−δ/2 and cvc
EM21,δ/2 are the respective critical values. We call this the EMc
a
test.
We further consider minimum- and maximum-type tests:
EMc
b,12 :=
max
T2∈Λc
12
tT1,T2
q
T ρˆbφˆ 2(T1−Te)
a /2
and EMc
b,21 :=
min
T2∈Λc
21
tT2,T1
q
T ρˆaφˆ 2(T1−Te)
a /2
, (27)
and reject when
EMc
b,12 > cvc
EM12,1−δ/2 or EMc
b,21 < cvc
EM 21,δ/2,
where the critical values coincide with those for EMc
a,12 and EMc
a,21 (see also Theorem 3).
We refer to this as the EMc
b test.
3.2.2 Limiting Distributions of the Tests for the Collapse Date
We first establish the limiting distributions under the null.
Theorem 3 Suppose Assumption 1 holds. Under H0 : Tc = T1,
LRc
a,12 ⇒ −W 2(λe), (28)
EMc
a,12, EMc
b,12 ⇒ −|W (λe)|, (29)
LRc
a,21 ⇒ W 2(λe), (30)
EMc
a,21, EMc
b,21 ⇒ |W (λe)|. (31)
For a given value of λe, the critical values follow from chi-square percentiles:
cvc
LR12,0.95 = −λeχ2
1,0.05 = −0.00393 λe, cvc
LR21,0.05 = λeχ2
1,0.05 = 0.00393 λe,
cvc
EM 12,0.95 = −
q
λeχ21,0.05 = −p0.00393 λe, cvc
EM 21,0.05 =
q
λeχ21,0.05 = p0.00393 λe,
at significance level 0.05 (corresponding to confidence level 0.9).
Next, we study asymptotic behavior under the alternative.
14

Theorem 4 Suppose Assumption 1 holds.
(i) If Tc > T1 (λc > λ1), then
LRc
a,12, EMc
a,12, EMc
b,12 → ∞, whereas LRc
a,21, EMc
a,21, EMc
b,21 = Op(1).
(ii) If Tc < T1 (λc < λ1), then
LRc
a,12, EMc
a,12, EMc
b,12
−p→ 0, LRc
a,21, EMc
a,21, EMc
b,21
−p→ 0.
From Theorem 4(i), the LRc
a,12, EMc
a,12, and EMc
b,12 tests are consistent against Tc > T1
(right-tail rejection), whereas LRc
a,21, EMc
a,21, and EMc
b,21 are not. In contrast, Theorem 4(ii)
implies that the latter tests are consistent against Tc < T1 (left-tail rejection), while the
former also reject because their right-tail critical values are negative. Overall, each test is
consistent at least for the direction it is designed to detect, mirroring the emergence-date
case.
As in the emergence-date confidence sets, Theorem 4 suggests that sets based on LRc
a,12,
EMc
a,12, and EMc
b,12 will include only a small fraction of permissible dates earlier than the
true Tc, whereas sets based on LRc
a,21, EMc
a,21, and EMc
b,21 will tend to include relatively few
dates later than Tc.
3.3 Confidence Set for the Recovery Date of a Bubble
In this subsection, we focus on the recovery date of a bubble in the regime [Tc + 1, T ], and
consider a one-break model:
yt =
(
φbyt−1 + εt, Tc + 1 ≤ t ≤ Tr,
yt−1 + εt, Tr + 1 ≤ t ≤ T. (32)
Let TCU := T − Tc be the sample size of these two regimes.
3.3.1 Confidence Set for the Recovery Date
The limiting distribution of Tˆr is derived in Theorem 3 of Kurozumi and Skrobotov (2023)
for α > β, but it depends on the localizing parameter b in a complicated way that cannot be
15

consistently estimated. Hence, it is difficult to construct a confidence interval based on the
limiting distribution of the breakpoint estimator.
Instead, as in the cases of the emergence and collapse dates, we construct the confidence
set by inverting a test for
H0 : Tr = T1 vs. H1 : Tr = T2 ̸= T1.
Assuming {εt} ∼ i.i.d. N (0, σ2), the likelihood principle implies rejection of H0 when
2
T2
X
t=T1+1
yt−1∆yt + ρb
T2
X
t=T1+1
y2
t−1 < c1 for T1 < T2, (33)
2
T1
X
t=T2+1
yt−1∆yt + ρb
T1
X
t=T2+1
y2
t−1 > c2 for T2 < T1, (34)
where c1 and c2 are determined by the significance level. We propose the following statistics:
LRr
a,12 :=
min
T2∈Λr
12

2
T2
X
t=T1+1
yt−1∆yt + ρˆb
T2
X
t=T1+1
y2
t−1


T (T r
LRa12 − T1) ρˆb φˆ 2(Tc−Te)
a φˆ 2(T1−Tc)
b σˆ2 , (35)
LRr
a,21 :=
max
T2∈Λr
21

2
T1
X
t=T2+1
yt−1∆yt + ρˆb
T1
X
t=T2+1
y2
t−1


T φˆ 2(Tc−Te)
a φˆ 2(T r
LRa21 −Tc )
b σˆ2/2
, (36)
where T r
LRa12 minimizes the numerator of (35), Λr12 := {T2 : T1 + ⌊TCU ε⌋ ≤ T2 ≤ T }, T r
LRa21
maximizes the numerator of (36), and Λr21 := {T2 : Tc + ⌊TCU ε⌋ ≤ T2 ≤ T1 − ⌊TCU ε⌋}. The
LRr
a test rejects H0 if
LRr
a,12 < cvr
LR12,δ/2 or LRr
a,21 > cvr
LR21,1−δ/2,
where cvr
LR12,δ/2 and cvr
LR21,1−δ/2 are the δ/2 and 1 − δ/2 quantiles of the respective null
limiting distributions.
We also consider a finite-sample correction for LRr
a,21:
LRr
b,21 :=
max
T2∈Λr
21

−y2
T2 −
T1
X
t=T2+1
(∆yt)2 + ρˆb
T1
X
t=T2+1
y2
t−1


T φˆ 2(Tc−Te)
a φˆ 2(T r
LRb21 −Tc )
b σˆ2/2
,
16

where T r
LRb21 maximizes the numerator. We will use LRr
b,21 in conjunction with EMr
b,12
introduced below; we refer to this combination as the LEr test.
Proceeding as before, we can also base EM-type tests on t-statistics. We propose
EMr
a,12 := 1
TCU
T
X
T2=T1+⌊TCU ε⌋
tT1,T2 and EMr
a,21 :=
T1−⌊TCU ε⌋
X
T2=Tc+⌊TCU ε⌋
tT2,T1
q
T φˆ 2(Tc−Te)
a φˆ 2⌊TCU ε⌋
b /(2ρˆb)
, (37)
and reject when
EMr
a,12 < cvr
EMa12,δ/2 or EMr
a,21 > cvr
EM a21,1−δ/2,
where cvr
EMa12,δ/2 and cvr
EMa21,1−δ/2 are the respective critical values. We refer to this as
the EMr
a test. We also consider minimum- and maximum-type tests:
EMr
b,12 := min
T2∈Λr
12
tT1,T2 and EMr
b,21 :=
max
T2∈Λr
21
tT2,T1
q
T ρˆbφˆ 2(Tc−Te)
a φˆ 2(T r
EM b21 −Tc )
b /2
, (38)
where T r
EMb21 maximizes the numerator. Reject when
EMr
b,12 < cvr
EMb12,δ/2 or EMr
b,21 > cvr
EM 21,δ/2.
We refer to this as the EMr
b test.
3.3.2 Limiting Distributions of the Tests for the Recovery Date of a Bubble
We first present the limiting distributions under the null. A complication is that the limiting
distributions depend on whether α < β or α > β.1
Theorem 5 Suppose Assumption 1 holds. Under H0 : Tr = T1,
(i) If α < β, then
LRr
a,12 ⇒ W 2(λe), (39)
EMr
a,12 ⇒
Z1
λ∗
1 +ε
W (λ∗2) − W (λ∗1)
pλ∗2 − λ∗1
dλ∗
2, (40)
EMr
b,12 ⇒ inf
λ∗
1 +ε<λ∗
2 <1
W (λ∗2) − W (λ∗1)
pλ∗2 − λ∗1
, (41)
1The knife-edge case α = β is more involved (see Kurozumi and Skrobotov (2023)). As the behavior of the tests can be inferred from the analyses of α < β and α > β, we do not pursue it here.
17

where λ∗
j := (Tj − Tc)/TCU for j = 1, 2, and
LRr
a,21 ⇒ −W 2(λe), (42)
EMr
a,21, EMr
b,21 ⇒ −|W (λe)|. (43)
(ii) If α > β, then
LRr
a,12 → ∞,
EMr
a,12 ⇒
Z1
λ∗
1 +ε
ADF r(λ∗
1, λ∗
2) dλ∗
2, (44)
EMr
b,12 ⇒ inf
λ∗
1 +ε<λ∗
2<1 ADF r(λ∗
1, λ∗
2), (45)
where
ADF r(λ∗
1, λ∗
2) :=
1
2 (W (λ∗2) − W (λ∗1))2 − (λ∗2 − λ∗1)
q
R λ∗
2
λ∗
1 (W (s) − W (λ∗1))2ds
,
and
LRr
a,21, EMr
a,21, EMr
b,21 → −∞.
We must choose critical values in light of Theorem 5. For LRr
a,12, a nominal level (say,
0.05) is asymptotically controlled by rejecting when
LRr
a,12 < cvr
LR12,0.05 = λeχ2
1,0.05 = 0.00393 λe,
if α < β. Because the rejection region is the left tail, the test becomes conservative (the
theoretical size tends to zero) when α > β if we use the above critical values. Note that the
numerator of LRr
a,12 is Op(T 2−β) when α > β (see the proof of Theorem 5). Thus, scaling
the LR-type statistic by T 2−β would control size when α > β, but would drive the statistic
to zero in probability when α < β, yielding a liberal test (size tends to one). To ensure
conservativeness uniformly, we adopt the critical values based on (39).
By contrast, EMr
a,12 and EMr
b,12 converge in distribution in both cases. Simulations
indicate that the critical values based on (44) and (45) are smaller than those based on (40)
and (41), respectively. Hence, we use the former as cvr
EMa12,δ/2 and cvr
EMb12,δ/2. Because
the limits depend on λ∗1, we fit the response-surface regression
cvr
EMa12,0.05 = a0,l + a−1,l
1
λ∗1
+ a1,lλ∗
1 + a2,lλ∗2
1 + a3,lλ∗3
1,
18

and, for EMr
b,12,
cvr
EMb12,0.05 = a0,l + a−1,l
1
λ∗1
+ a1,lλ∗
1 + a2,lλ∗2
1 + a3,lλ∗3
1
+ 1{λ∗
1 > 0.7} b0,l + b−1,l
1
λ∗1
+ b1,lλ∗
1 + b2,lλ∗2
1 + b3,lλ∗3
1.
The estimated coefficients are reported in Table 1.
Similarly, the critical values based on (42) and (43) yield conservative tests in general, so
we use
cvr
LR21,0.95 = −λeχ2
1,0.05 = −0.00393 λe, cvr
EM 21,0.95 = −
q
λeχ21,0.05 = −p0.00393 λe.
Next, we study asymptotic behavior under the alternative.
Theorem 6 Suppose Assumption 1 holds.
(i) If α < β:
(i-a) If Tr > T1 (λr > λ1),
LRr
a,12 → 0, EMr
a,12, EMr
b,12 → −∞,
whereas
LRr
a,21, LRr
b,21, EMr
a,21, EMr
b,21 = Op(1).
(i-b) If Tr < T1 (λr < λ1),
LRr
a,12 → ∞, EMr
a,12, EMr
b,12 = Op(1),
whereas
LRr
a,21, LRr
b,21 → ∞, EMr
a,21 = Op(1), EMr
b,21
−p→ 0.
(ii) If α > β:
(ii-a) If Tr > T1 (λr > λ1),
LRr
a,12, EMr
a,12, EMr
b,12 → −∞,
whereas
LRr
a,21, LRr
b,21 → ∞, EMr
a,21, EMr
b,21 → ∞ or − ∞.
19

(ii-b) If Tr < T1 (λr < λ1),
LRr
a,12 → ∞, EMr
a,12, EMr
b,12 = Op(1),
whereas
LRr
a,21, LRr
b,21 → ∞, EMr
a,21, EMr
b,21 → ∞ or − ∞.
Interpreting Theorem 6 requires care. From (i-a) and (ii-a), LRr
a,12, EMr
a,12, and EMr
b,12
are consistent against the designated alternative Tr = T2 > T1. By contrast, while LRr
a,21 and
LRr
b,21 are consistent against Tr = T2 < T1 regardless of whether α < β or α > β, EMr
b,21 is
consistent against this alternative only when α < β, and EMr
a,21 is inconsistent in both cases.
Such inconsistencies would theoretically inflate the confidence set, although, as we show in
the next section, finite-sample behavior need not perfectly mirror these asymptotic patterns.
4 Monte Carlo Simulations
In this section, we investigate the finite-sample properties of the confidence sets for the
emergence, collapse, and recovery dates of a bubble proposed in the previous sections. The
data-generating process is given by (4) with {εt} ∼ i.i.d. N (0, 6.792), y0 = 100, and T = 200,
which follows a setting similar to that considered in PSY. The AR(1) parameters are specified
as local-to-unity: φa = 1 + a/T and φb = 1 − a/T with a ∈ {2, 4, 6}, referred to as the small,
medium, and large bubble, respectively. We report the empirical coverage rate and the
average length of the confidence set relative to the regime length used in the tests for the
break-date location. Results are based on 2,000 replications with a nominal confidence level
of 0.9, implemented by setting the significance level to 0.05 for each one-sided location test.
Note that we refer to the latter as “length,” even though the confidence set can be a (possibly)
discontinuous subset of sample points.
We consider the following break-date specifications: (Case 1) λe = 0.3, λc = 0.5, and
λr = 0.7; (Case 2) λe = 0.4, λc = 0.6, and λr = 0.8; (Case 3) λe = 0.5, λc = 0.7, and
λr = 0.9; and (Case 4) λe = 0.4, λc = 0.6, and λr = 0.7. We report the detailed results for
Case 1; the remaining cases are summarized in the online appendix.
20

Table 2 summarizes the results for the confidence set of Te when the sample period is
correctly specified as t = 1, . . . , Tc. Results using the estimated end of the sample (t =
1, . . . , Tˆc) are presented later. The rows labeled “coverage” report the empirical coverage
rates, which should equal 0.9 in theory, whereas “coverage12” (“coverage21”) corresponds to
the coverage rates of the one-sided tests LRe
·,12 and EMe
·,12 (LRe
·,21 and EMe
·,21), each of which
should be 0.95 theoretically. For example, when a = 2, the coverage rates of LRe
a, LRe
a,12,
and LRe
a,21 are 0.19, 0.39, and 0.56, respectively. We see that LRe
·,12 and EMe
·,12 under-cover
the true emergence date for small a, with coverage improving as a increases. Among the one
sided tests, LRe
b,12 (appearing at the “coverage12” rows in the “LEe” column) and EMe
a,21
deliver better coverage, although the former is slightly conservative; the latter’s coverage is
very close to the nominal 0.95. Motivated by these properties, we combine LRe
b,12 and EMe
a,21
as LEe, which achieves coverage close to the nominal 90%.
Average lengths of the confidence sets appear in the lower panel of Table 2. The rows
labeled “length” report the fraction of observations included in the confidence set relative to
Tc, the sample size used for the tests. In general, a more liberal test yields a shorter relative
length, which we observe in Table 2. For the small bubble, the confidence set based on LEe
is the largest among all methods—about 61% of the sample from 1 to Tc—yet it is the only
method that controls coverage in this case. As the explosive speed increases, the confidence
set shortens; for the medium bubble, LEe is comparable to EMe
a (the second-best in terms of
coverage), and for the large bubble, LEe yields shorter sets than EMe
a.
To further examine the finite-sample behavior of each one-sided location test, we decom
pose the confidence set into two parts: the “left-hand side” consists of dates in the set less than
or equal to the true emergence date, and the “right-hand side” consists of dates greater than
or equal to Te. The rows “length12left” and “length12right” report average lengths of the
left- and right-hand portions for LRe
·,12 and EMe
·,12, while “length21left” and “length21right”
report the corresponding quantities for LRe
·,21 and EMe
·,21. Since each one-sided test is con
sistent in its designated direction, we expect the left-hand (right-hand) portion from LRe
·,12
and EMe
·,12 (LRe
·,21 and EMe
·,21) to shrink as explosiveness increases, provided coverage is
controlled. This pattern is borne out in finite samples. For instance, the left-hand length for
LEe
12 is 0.48, 0.39, and 0.29 for a = 2, 4, 6, respectively, while the right-hand length for LEe
21
21

is 0.29, 0.20, and 0.14, with coverage well controlled in each case.
Table 3 reports coverage and lengths when the sets are constructed using the estimated
subsample t = 1, . . . , Tˆc. Here, Tˆc can fall before Te, in which case reporting the length is
not meaningful. Thus, average lengths are computed only for replications with Tˆc ≥ Te,
whereas coverage rates are computed over all replications. In this design, all methods yield
liberal coverage when a = 2, partly because the estimated collapsing date precedes the true
emerging date in 16% of the 2,000 replications. This occurs in only 5% and 2% of replications
for the medium and large bubbles, respectively, and the overall patterns then approach those
in Table 2.
Table 4 summarizes the results for the confidence set of Tc when the sample period is
correctly specified as t = Te + 1, . . . , Tr. For the small bubble, all tests, LRc
a, EMc
a, and EMc
b,
under-cover the true collapsing date; EMc
a performs best among the three but still attains
only 0.76, below the nominal 0.9. As a increases, performance improves. For the medium
bubble, LRc
a and EMc
b are liberal but closer to nominal (0.82), whereas EMc
a is conservative
(0.95). For the large bubble, all tests are conservative.
Regarding the length of the confidence set, EMc
a delivers the longest sets, which is partly
the price for improved coverage. Consistent with Section 3.6, the sets based on LRc
a,12,
EMc
a,12, and EMc
b,12 tend to include only a small portion of dates earlier than the true Tc,
whereas LRc
a,21, EMc
a,21, and EMc
b,21 yield sets with relatively few dates later than Tc.
Table 5 reports coverage and lengths when sets are constructed using the estimated break
interval [Tˆe + 1, Tˆr]. As in the emergence-date case, average lengths are computed only for
replications with Tc ∈ [Tˆe + 1, Tˆr]. All methods show smaller coverage rates here, partly
because Tc ∈/ [Tˆe, Tˆr] in 22% of replications. For the medium bubble, the coverage of EMc
a is
close to nominal (0.85), and for the large bubble it is slightly conservative (0.94). The lengths
are similar to those under the true-ends design.
Tables 6 and 7 present the results for Tr when the sample period is correctly specified as
[Tc + 1, T ] and when the lower end is estimated as [Tˆc + 1, T ], respectively. We report results
for LRr
a, EMr
a, EMr
b, and LEr (the combination of EMr
b,12 and LRr
b,21). With true break ends,
LEr attains the best (slightly conservative) coverage of about 0.93–0.95. Its set length is the
22

largest for the small bubble but comparable to EMr
a for the medium bubble (whose coverage
is 0.89, close to nominal), and shorter than EMr
a for the large bubble. Using estimated
ends, coverage decreases and becomes too liberal for the small bubble—again partly because
Tr ∈/ [Tˆc + 1, T ] in 12% of replications—but is closer to nominal for the medium and large
bubbles.
To summarize the finite-sample results, LEe and LEr deliver well-controlled coverage with
reasonable set lengths for medium and large bubbles. For the collapse date, EMc
b controls
coverage better than the alternatives, while EMc
a produces shorter sets with coverage close
to 0.9 for the large bubble.
5 Empirical Application
In this section, we illustrate how to construct confidence sets for the emergence, collapse,
and recovery dates of explosive behavior by applying the proposed methods to stock prices.
Figure 1 plots the logarithm of daily Japanese stock prices (Nikkei 225) from September 2012
to August 2013. A visual inspection suggests mild explosiveness followed by a collapse over
this period. The exuberance in stock prices may be associated with changes in the Bank of
Japan (BOJ) monetary policy: the BOJ announced a 2% inflation target in January 2013
and implemented quantitative and qualitative monetary easing in April 2013.
We first test for bubbles and reject the null of no bubble using the SADF test of Phillips
et al. (2011) and the UR test of Kurozumi and Nishi (2025) at the 5% significance level.
Given evidence of exuberance, we estimate the emergence, collapse, and recovery dates by the
sample-splitting approach of Kurozumi and Skrobotov (2023). The resulting point estimates
are November 13, 2012; May 21, 2013; and June 13, 2013, respectively, shown as red vertical
lines—Te, Tc, and Tr—in Figure 1. Although the estimated emergence predates the BOJ
policy changes, our focus is whether the confidence sets include the dates of these policy
shifts.
To this end, we construct a 90% confidence set for Te based on the LEe test introduced
above. This set is depicted as the gray band in Figure 1. Notably, late January and early
April are excluded from the set, suggesting that prices began rising before the policy changes.
23

We also note that the confidence set for the collapse date based on EMc
a (blue band) does
not include the point estimate of Tc, which might be due to the under-coverage tendency of
collapse-date location tests discussed earlier. Finally, the yellow band shows the confidence
set for Tr based on LEr. We conclude that it is unlikely that a reversion to normal market
behavior occurred much earlier than the point estimate of Tr.
6 Concluding Remarks
We propose constructing confidence sets for the emergence, collapse, and recovery dates of a
bubble by inverting tests for the location of the break date: one class based on the likelihood
ratio (LR) principle and two Elliott–Mu ̈ller-type tests (Elliott and M ̈uller, 2007). We also
introduce finite-sample modifications aimed at better controlling the empirical confidence
level. In general, coverage probabilities are well controlled for large bubbles, whereas under
coverage tends to arise under weak explosiveness. Monte Carlo evidence further shows that,
the faster the explosive speed, the shorter the resulting confidence set.
Our analysis is based on model (1), but there are several alternative ways to model the
collapsing regime. Such alternatives would require different constructions for the confidence
sets of the collapsing and recovery dates; this is the subject of our ongoing research.
References
Elliott, G. and Mu ̈ller, U. K. (2007). Confidence sets for the date of a single break in linear
time series regressions. Journal of Econometrics, 141:1196–1218.
Eo, Y. and Morley, J. (2015). Likelihood-ratio-based confidence sets for the timing of struc
tural breaks. Quantitative Economics, 6:463–497.
Hansen, B. E. (2000). Sample splitting and threshold estimation. Econometrica, 68:575–603.
Harvey, D. I., Leybourne, S. J., and Sollis, R. (2017). Improving the accuracy of asset price
bubble start and end date estimators. Journal of Empirical Finance, 40:121–138.
Harvey, D. I., Leybourne, S. J., Sollis, R., and Taylor, A. M. R. (2016). Tests for explosive
24

financial bubbles in the presence of non-stationary volatility. Journal of Empirical Finance,
38:548–574.
Harvey, D. I., Leybourne, S. J., Taylor, A. M. R., and Zu, Y. (2025). A new heteroskedasticity
robust test for explosive bubbles. Journal of Time Series Analysis, 46:846–866. https:
//doi.org/10.1111/jtsa.12784.
Harvey, D. I., Leybourne, S. J., and Whitehouse, E. J. (2020a). Date-stamping multiple
bubble regimes. Journal of Empirical Finance, 58:226–246.
Harvey, D. I., Leybourne, S. J., and Zu, Y. (2019). Testing explosive bubbles with time
varying volatility. Econometric Reviews, 38:1131–1151.
Harvey, D. I., Leybourne, S. J., and Zu, Y. (2020b). Sign-based unit root tests for explosive
financial bubbles in the presence of deterministically time-varying volatility. Econometric
Theory, 36:122–169.
Kejriwal, M., Nguyen, L., and Perron, P. (2025). An improved procedure for retrospectively
dating the emergence and collapse of bubbles. Journal of Time Series Analysis, 46:867–883.
https://doi.org/10.1111/jtsa.12810.
Kurozumi, E. and Hayakawa, K. (2009). Asymptotic properties of the efficient estimators for
cointegrating regression models with serially dependent errors. Journal of Econometrics,
149:118–135.
Kurozumi, E. and Nishi, M. (2025). Testing for a bubble with a stochastically varying
explosive coefficient. Journal of Time Series Analysis, 46:945–965. https://doi.org/10.
1111/jtsa.12768.
Kurozumi, E. and Skrobotov, A. (2018). Confidence sets for the break date in cointegrating
regressions. Oxford Bulletin of Economics and Statistics, 80:514–535.
Kurozumi, E. and Skrobotov, A. (2023). On the asymptotic behavior of bubble date esti
mators. Journal of Time Series Analysis, 44:359–373. https://doi.org/10.1111/jtsa.
12672.
25

Kurozumi, E., Skrobotov, A., and Tsarev, A. (2023). Time-transformed test for bubbles
under non-stationary volatility. Journal of Financial Econometrics, 21:1282–1307. https:
//doi.org/10.1093/jjfinec/nbac004.
Kurozumi, E. and Yamamoto, Y. (2015). Confidence sets for the break date based on optimal
tests. Econometrics Journal, 18:412–435.
Pang, T., Chong, T. T.-L., Zhang, E., and Liang, Y. (2018). Structural change in nonsta
tionary AR (1) models. Econometric Theory, 34:985–1017.
Pang, T., Du, L., and Chong, T.-L. (2021). Estimating multiple breaks in nonstationary
autoregressive models. Journal of Econometrics, 221:277–311.
Phillips, P. C. B. and Shi, S. (2018). Financial bubble implosion and reverse regression.
Econometric Theory, 34:705–753.
Phillips, P. C. B., Shi, S., and Yu, J. (2015a). Testing for multiple bubbles: Historical episodes
of exuberance and collapse in the S&P 500. International Economic Review, 56:1043–1077.
Phillips, P. C. B., Shi, S., and Yu, J. (2015b). Testing for multiple bubbles: Limit theory of
real-time detectors. International Economic Review, 56:1079–1133.
Phillips, P. C. B., Wu, Y., and Yu, J. (2011). Explosive behavior in the 1990s NASDAQ:
When did exuberance escalate asset values? International Economic Review, 52:201–226.
Skrobotov, A. (2023). Testing for explosive bubbles: A review. Dependence Modeling, 11.
https://doi.org/10.1515/demo-2022-0152.
Tanaka, K. (1996). Time Series Analysis: Nonstationary and Noninvertible Distribution
Theory. Wiley, New York.
Wu, R., Shi, S., and Wu, J. (2025). Quantile analysis for financial bubble detection and
surveillance. Journal of Time Series Analysis, 46:908–931. https://doi.org/10.1111/
jtsa.12791.
Yamamoto, Y. (2018). A modified confidence set for the structural break date in linear
regression models. Econometric Reviews, 37:974–999.
26

Yamazaki, D. (2021). Improved confidence sets for the date of a structural break. Econometric
Reviews, 40:257–289.
27

Appendix
Throughout the proofs, the notation aT ∼a bT indicates that aT /bT
−p→ 1 as T → ∞.
As shown in Pang et al. (2021) and Kurozumi and Skrobotov (2023), λˆe and λˆr are at least
consistent for λe and λr, respectively, while Tˆc is consistent for Tc. It then follows that
ρˆa
ρa
−p→ 1,
φˆa
φa
−p→ 1,
φˆb
φb
−p→ 1, and σˆ2 −p→ σ2.
Therefore, in the following proofs, we replace ρˆa, φˆa, φˆb, and σˆ2 with ρa, φa, φb, and σ2,
respectively, without loss of generality.
Proof of Theorem 1: We first note that, for 0 ≤ λ ≤ λe,
√1T y⌊T λ⌋ = √1T
⌊T λ⌋
X
t=1
εt + op(1) ⇒ σW (λ) (46)
by Assumption 1, whereas, as given in Lemma A1 in Phillips et al. (2015b) and Lemma 2 in
Kurozumi and Skrobotov (2023), for Te + 1 ≤ t ≤ Tc,
yt = φt−Te
a yTe(1 + op(1)), (47)
where the op(1) term is uniform over Te < t ≤ Tc. In addition, we have
t
X
s=1
ys−1εs = Op(T ) : for t ≤ Te
Op(T α+1φt−Te
a ) : for t > Te
, (48)
where the second result is obtained in Lemma A5 in Phillips et al. (2015b) and Lemma 2 in
Kurozumi and Skrobotov (2023).
We first consider LRe
·12 and EMe
·12 for T1 < T2. Under the null hypothesis of Te = T1, we
have, using (47),
T2
X
t=T1+1
y2
t−1 ∼a y2
Te
T2
X
t=T1+1
φ2(t−1−T1)
a
∼a
σ2
2
T φ2(T2−T1)
a
ρa
y2
T1
T σ2
!
, (49)
28

and from (46)–(49),
T2
X
t=T1+1
yt−1∆yt = 1
2



y2
T2 − y2
T1 −
T2
X
t=T1+1
(∆yt)2



=1
2



φ2(T2−T1)
a y2
Te (1 + op(1)) − y2
T1 −
T2
X
t=T1+1
(ρayt−1 + εt)2



∼a
1
2 φ2(T2−T1)
a y2
T1 − y2
T1 − ρ2
a
φ2(T2−T1)
a
2ρa
y2
T1
!
(50)
∼a
σ2
2 T φ2(T2−T1)
a
y2
T1
T σ2
!
, (51)
where the dominant term comes from y2
T2. Combining (49) and (51), we observe that
2
T2
X
t=T1+1
yt−1∆yt − ρa
T2
X
t=T1+1
y2
t−1 ∼a
σ2
2 T φ2(T2−T1)
a
y2
T1
T σ2
!
.
As the negligible terms absorbed in the symbol ∼a are uniform over T2 ∈ Λe12, we have
LRe
a,12 ⇒ W 2(λ1).
As y2
T2 is the dominant term in (50), we can easily observe that LRe
b,12 has the same weak
limit as LRe
a,12.
For EMe
·,12, we note from (49) and (51) that
tT1,T2 ∼a
r T ρa
2 φT2−T1
a
y2
T1
T σ2
1/2
, (52)
and thus,
Tc
X
T2=T1+⌊TUB ε⌋
tT1,T2 ∼a
r T ρa
2
y2
T1
T σ2
1/2 Tc
X
T2=T1+⌊TUB ε⌋
φT2−T1
a ∼a
s
T
2ρa
φ(Tc−T1)
a
y2
T1
T σ2
1/2
.
Then, we obtain
EMe
a,12 ∼a
y2
T1
T σ2
1/2
⇒ |W (λ1)|.
Similarly, using (52), we observe that
EMe
b,12 ⇒ |W (λ1)|.
29

Next, we derive the asymptotic distributions of LRe
b,21 and EMe
·,21 for T1 > T2. Under the
null hypothesis of Te = T1, the standard unit root asymptotic theory implies that
1
TU B
T1
X
t=T2+1
yt−1∆yt ⇒ σ2
2 W 2(λ∗
1) − W 2(λ∗
2) − (λ∗
1 − λ∗
2) (53)
and
1
T2
UB
T1
X
t=T2+1
y2
t−1 ⇒ σ2
Z λ∗
1
λ∗
2
W 2(s∗)ds∗, (54)
where λ∗
j := Tj/TUB for j = 1 and 2. From (53), (54), and the continuous mapping theorem
(CMT), we have
LRe
a,21 ∼a
maxT2∈Λe
21 − PT1
t=T2+1 yt2−1 T2
UBσ2 =
−
PT1
t=T1−⌊T ε⌋ yt2−1 T2
UBσ2 ⇒ −
Z λ∗
1
λ∗
1 −ε
W 2(s∗)ds∗.
Using (53) and (54), we have
tT2,T1 ⇒
1
2 W 2(λ∗1) − W 2(λ∗2) − (λ∗1 − λ∗2)
q
R λ∗
1
λ∗
2 W 2(s∗)ds∗
=: ADF (λ∗
2, λ∗
1).
By the CMT, the above result yields
EMe
a,21 ⇒
Z λ∗
1 −ε
0
ADF (λ∗
2, λ∗
1)dλ∗
2
and
EMe
b,21 ⇒ sup
0≤λ∗
2 ≤λ∗
1 −ε
ADF (λ∗
2, λ∗
1).■
Proof of Theorem 2: (i) Suppose that Te > T1 (λe > λ1) and let T2 ≥ Te to investigate
LRe
·,12 and EMe
·,12. Then, similarly to (49) and (54), we have
T2
X
t=T1+1
y2
t−1 =
Te
X
t=T1+1
y2
t−1 +
T2
X
t=Te+1
y2
t−1
= Op(T 2) +
T2
X
t=Te+1
y2
t−1
∼a
σ2
2
T φ2(T2−Te)
a
ρa
yTe2
T σ2 , (55)
30

and from (51) and (53),
T2
X
t=T1+1
yt−1∆yt =
Te
X
t=T1+1
yt−1∆yt +
T2
X
t=Te+1
yt−1∆yt
= Op(T ) +
T2
X
t=Te+1
yt−1∆yt
∼a
σ2
2 T φ2(T2−Te)
a
y2
Te
T σ2
!
.
Then, we have
LRe
a,12 ≤ Op(φ−2(Te−T1)
a ) = op(1).
LRe
b,12 = op(1) is proved similarly.
Regarding EMe
·12, noting that
tT1,T2 ∼a
r T ρa
2 φT2−Te
a
y2
Te
T σ2
1/2
, (56)
we have
EMe
b,12 ∼a φ−(Te−T1)
a
y2
Te
T σ2
1/2
= op(1).
For EMe
a,12, because (56) holds for T2 ≥ Te, whereas it is not difficult to see that tT1,T2 = Op(1)
for T2 < Te. Using these results, it can be shown that
EMe
a,12 ∼a
s
T
2ρa
φTc−Te
a
ye2
T σ2
1/2
s
T φ2(Tc−T1)
a
2ρa
= Op(φ−(Te−T1)
a ) = op(1).
For LRe
·,21 and EMe
·,21, because T2 < T1 < Te, it holds that
T1
X
t=T2+1
y2
t−1 = Op(T 2) and
T1
X
t=T2+1
yt−1∆yt = Op(T ),
and thus,
LRe
a,21 = −Op(1),
where the Op(1) term is positive, and tT2,T1 = Op(1), which implies that EMa,21 and EMe
b,21
are Op(1).
31

(ii) Suppose that Te < T1 (λe < λ1). For LR·,12 and EM·,12 with T2 set to be greater than
T1, we have,
T2
X
t=T1+1
y2
t−1 ∼a
σ2
2
T φ2(T2−Te)
a
ρa
y2
Te
T σ2
!
and
T2
X
t=T1+1
yt−1∆yt = σ2
2 T φ2(T2−Te)
a
y2
Te
T σ2
!
and then,
LRa,12 ∼a φ2(T1−Te)
a
y2
Te
T σ2
!
→ ∞.
LRb,12 → ∞ is proved in exactly the same manner. In addition, we can observe that
tT1,T2 ∼a
r T ρa
2 φT2−Te
a
y2
Te
T σ2
1/2
(57)
and thus,
EMa,12 ∼a φT1−Te
a
y2
Te
T σ2
1/2
→ ∞.
Similarly, we can also show that EMb,12 → ∞ from (57).
For LR·,21 and EM·,21, let T2 < Te < T1. Then, we have
T1
X
t=T2+1
y2
t−1 ∼a
T1
X
t=Te+1
y2
t−1 ∼a
σ2
2
T φ2(T1−Te)
a
ρa
y2
Te
T σ2
!
and T1
X
t=T2+1
yt−1∆yt ∼a
y2
T1
2 ∼a
σ2
2 T φ2(T1−Te)
a
y2
Te
T σ2
!
and thus, LRa,21 → ∞. Using the above results, it is observed that
tT2,T1 ∼a
r T ρa
2 φT1−Te
a
y2
Te
T σ2
1/2
and then, it is shown that EMa,21 and EMb,21 diverge to infinity.■
Proof of Theorem 3: We first note that, for T1 = Tc < t ≤ Tr,
yt = φ(t−Tc)
b yTc +
t
X
j=Tc+1
φ(t−j)
b εt. (58)
32

Then, similarly to Lemma 3 of Kurozumi and Skrobotov (2023), we have, noting that yTc =
yT1 ∼a φT1−Te
a yTe under the null hypothesis,
T2
X
t=T1+1
y2
t−1 ∼a y2
Tc
T2
X
t=T1+1
φ2(t−Tc−1)
b
∼a
T φ2(T1−Te)
a
2ρb
1
T y2
Te , (59)
T2
X
t=T1+1
yt−1εt = Op T (β+1)/2φ(T1−Te)
a (60)
T2
X
t=T1+1
yt−1∆yt = 1
2

y2
T2 − y2
T1 −
T2
X
t=T1+1
(∆yt)2


∼a − 1
2 y2
T1
∼a − 1
2 T φ2(T1−Te)
a
1
T y2
Te . (61)
To derive the limiting distribution of LRc
a,12, we transform expression (21) as
2
T2
X
t=T1+1
yt−1(yt − φˆayt−1) + (φˆa − φˆb)
T2
X
t=T1+1
y2
t−1
=2
T2
X
t=T1+1
yt−1[(φb − φˆb + φˆb)yt−1 + εt − φˆayt−1] + (φˆa − φˆb)
T2
X
t=T1+1
y2
t−1
∼a −(φˆa − φˆb)
T2
X
t=T1+1
y2
t−1
∼a −(φa − φb) T φ2(T1−Te)
a
2ρb
1
T y2
Te ,
where we used (59) and (60). As this relation holds uniformly over T2 ∈ Λc12, we obtain the
limiting distribution of LRca,12.
33

Using (59) and (61), we also have
tT1,T2 =
PT2
t=T1+1 yt−1∆yt
σˆ
q
PT2
t=T1+1 yt2−1
∼a
−1
2 T φ2(T1−Te)
a
1
T y2
Te
σ
s
T φ2(T1−Te)
a
2ρb
1
T y2
Te
∼a −
r T ρb
2 φT1−Te
a
1
T σ2 y2
Te
1/2
.
As the last relation holds uniformly over T2 ∈ Λc12, we obtain the limiting distributions of
EMc
a,12 and EMb,12.
Next, for Te + 1 ≤ t < T1 = Tc, similarly to (49), (51), and Lemma 2 of Kurozumi and
Skrobotov (2023), we have, using (47),
T1
X
t=T2+1
y2
t−1 ∼a y2
Te
T1
X
t=T2+1
φ2(t−1−Te)
a
∼a
T φ2(T1−Te)
a
2ρa
1
T y2
Te , (62)
T1
X
t=T2+1
yt−1εt = Op T (α+1)/2φT1−Te
a , (63)
T1
X
t=T2+1
yt−1∆yt = 1
2

y2
T1 − y2
T2 −
T1
X
t=T2+1
(∆yt)2


∼a
1
2 y2
T1
∼a
1
2 T φ2(T1−Te)
a
1
T y2
Te . (64)
34

To derive the limiting distribution of LRc
a,21, we transform expression (22) as
2
T1
X
t=T2+1
yt−1(yt − φˆayt−1) + (φˆa − φˆb)
T1
X
t=T2+1
y2
t−1
=2
T1
X
t=T2+1
yt−1[(φa − φˆa)yt−1 + εt] + (φˆa − φˆb)
T1
X
t=T2+1
y2
t−1
∼a (φˆa − φˆb)
T1
X
t=T2+1
y2
t−1
∼a (φa − φb) T φ2(T1−Te)
a
2ρa
1
T y2
Te ,
where we used (62) and (63). As this relation holds uniformly over T2 ∈ Λc21, we obtain the
limiting distribution of LRca,21.
Using (62) and (64), we also have
tT2,T1 =
PT1
t=T2+1 yt−1∆yt
σˆ
q
PT1
t=T2+1 yt2−1
∼a
1
2 T φ2(T1−Te)
a
1
T y2
Te
σ
s
T φ2(T1−Te)
a
2ρa
1
T y2
Te
∼a
r1
2 T ρaφT1−Te
a
1
T σ2 y2
Te
1/2
.
As the last relation holds uniformly over T2 ∈ Λc21, we obtain the limiting distributions of
EMc
a,21 and EMc
b,21.■
Proof of Theorem 4: (i) Suppose that Tc > T1 (λc > λ1) and let T2 = Tc to investigate
LRa,12 and EM·,12. Similarly to (49) and (51), from (47), we have
T2
X
t=T1+1
y2
t−1 ∼a φ2(Tc−Te)
a
y2
Te
2ρa
, (65)
and T2
X
t=T1+1
yt−1∆yt ∼a
1
2 y2
T2 ∼a
1
2 φ2(Tc−Te)
a y2
Te . (66)
35

(65) and (66) yield
LRc
a,12 ≥ 2 PT2
t=T1+1 yt−1∆yt + (2 − φa − φb) PT 2
t=T1+1 yt2−1
σ2T (φa − φb)φ2(T1−Te)
a /(2ρa)
∼a
h
φ2(Tc−Te)
a + (− a
Tα + b
Tβ )Tα
2a φ2(Tc−Te)
a
i
y2
Te
σ2T ( a
Tα + b
T β )φ2(T1−Te)
a Tα
2a
≥ Op
φ2(Tc−T1)
a
1+ b
a T α−β
!
→ ∞.
As
tT1,T2 ∼a
1
2 φ2(Tc−Te)
a y2
Te
σ
q
Tα
2a φ2(Tc−Te)
a y2
Te
= Op(T (1−α)/2φTc−Te
a)
uniformly over T2 ∈ Λc12, we can observe that
EMc
a,12, EMc
b,12 = Op T (β−α)/2φTc−T1
a → ∞.
For T2 < T1, we have
T1
X
t=T2+1
y2
t−1 ∼a
1
2ρa
φ2(T1−Te)
a y2
Te , (67)
and T1
X
t=T2+1
yt−1∆yt ∼a
1
2 y2
T1 ∼a
1
2 φ2(T1−Te)
a y2
Te . (68)
Using (67) and (68), we have
2
T1
X
t=T2+1
yt−1∆yt + (2 − φˆa − φˆb)
T1
X
t=T2+1
y2
t−1
∼a φ2(T1−Te)
a y2
Te + − a
Tα + b
Tβ
Tα
2a φ2(T1−Te)
a y2
Te
=1
2 φ2(T1−Te)
a y2
Te + b
2a T α−β φ2(T1−Te)
a y2
Te .
Noting that the last expression holds uniformly over T2 ∈ Λc21, we conclude that
LRa,21 = Op
T φ2(T1−Te)
a + T 1+α−β φ2(T1−Te)
a
T( a
Tα + b
T β )φ2(T1−Te)
a Tα
2a
!
= Op(1).
36

Similarly, we observe that
tT2,T1 =
Op T φ2(T1−Te)
a
T (1+α)/2φ(T1−Te)
a
= Op T (1−α)/2φT1−Te
a.
and thus, we have
EMa,21, EMb,21 = Op
T (1−α)/2φT1−Te
a
T (1−α)/2φT1−Te
a
!
= Op(1).
(ii) We prove only the case where α < β, in which the exploding speed is faster than the
collapsing speed. The proof of the case where α ≥ β proceeds in exactly the same manner.
Suppose that Tc < T1 (λc < λ1) and let T2 > T1. In exactly the same manner as (59),
(61), and Lemma 3 of Kurozumi and Skrobotov (2023), using (58), we observe that
T2
X
t=T1+1
y2
t−1 ∼a y2
Tc
T2
X
t=T1+1
φ2(t−Tc−1)
b
= Op T β+1φ2(T1−Tc)
b φ2(Tc−Te)
a , (69)
while
y2
T1 ∼a φ2(T1−Tc)
b φ2(Tc−Te)
a y2
Te = Op T φ2(T1−Tc)
b φ2(Tc−Te)
a,
y2
T2 = Op(T φ2(T2−Tc)
b φ2(Tc−Te)
a ),
T2
X
t=T1+1
(∆yt)2 ∼a (φb − 1)2
T2
X
t=T1+1
y2
t−1 = Op T 1−β φ2(T1−Tc)
b φ2(Tc−Te)
a,
which implies
T2
X
t=T1+1
yt−1∆yt = Op T φ2(T1−Tc)
b φ2(Tc−Te)
a . (70)
From (69) and (70), we obtain, as φ2(Tc−T1)
a → 0 at an exponential rate,
LRc
a,12
=
Op T φ2(T1−Tc)
b φ2(Tc−Te)
a + Op(T −α + T −β )Op T β+1φ2(T1−Tc)
b φ2(Tc−Te)
a
Op T (T −α + T −β )φ2(T1−Te)
a Tβ
= op(1).
37

Similarly, observing that
tT1,T2 =
Op T φ2(T1−Tc)
b φ2(Tc−Te)
a
Op T (β+1)/2φT1−Tc
b φTc−Te
a
= Op T (1−β)/2φT1−Tc
b φTc−Te
a,
we can show that EMc
a,12 and EMc
a,21 are op(1).
For LRc
a,21 and EMc
·,21, consider the case where T2 = Tc. Then, we observe using (58)
that T1
X
t=T2+1
y2
t−1 ∼a y2
Tc
T1
X
t=Tc+1
φ2(t−Tc−1)
b ∼a
Tβ
2b φ2(Tc−Te)
a y2
Te , (71)
T1
X
t=T2+1
yt−1∆yt ∼a − 1
2 y2
Tc ∼a − 1
2 φ2(Tc−Te)
a y2
Te , (72)
from which
2
T1
X
t=T2+1
yt−1∆yt + (2 − φa − φb)
T1
X
t=T2+1
y2
t−1
∼a −φ2(Tc−Te)
a y2
Te + − a
Tα + b
Tβ
Tβ
2b φ2(Tc−Te)
a y2
Te
= Op T φ2(Tc−Te)
a + Op T 1+β−αφ2(Tc−Te)
a.
Therefore, LRc
a,21 is shown to be op(1).
Similarly, using (71) and (72), EMc
a,21 and EMc
b,21 are proved to be op(1).■
Proof of Theorem 5: (i) When α < β, we can see that φTc−Te
a φTr−Tc
b diverges to infinity
at the exponential rate. Then, for T1 = Tr < t ≤ T ,
yt = yT1 +
t
X
j=T1+1
εt ∼a φTc−Te
a φT1−Tc
b yTe (73)
holds uniformly under the null hypothesis. Using (73), we have
T2
X
t=T1+1
y2
t−1 ∼a (T2 − T1)φ2(Tc−Te)
a φ2(T1−Tc)
b y2
Te , (74)
38

T2
X
t=T1+1
yt−1∆yt = 1
2

y2
T2 − y2
T1 −
T2
X
t=T1+1
(∆yt)2


∼a yT1
T2
X
t=T1+1
εt
∼a φTc−Te
a φT1−Tc
b yTe
T2
X
t=T1+1
εt. (75)
Then, using (74) and (75), we obtain
2
T2
X
t=T1+1
yt−1∆yt + ρb
T2
X
t=T1+1
y2
t−1 ∼a ρb(T2 − T1)φ2(Tc−Te)
a φ2(T1−Tc)
b y2
Te ,
which leads to
LRr
a,12 ∼a
1
T σ2 y2
Te ⇒ W 2(λe).
For the EM-type tests, as
tT1,T2 ∼a
φTc−Te
a φT1−Tc
b yTe
T2
X
t=T1+1
εt
σ
q
(T2 − T1)φ2(Tc−Te)
a φ2(T1−Tc)
b y2
Te
=
√TCU
p(T2 − Tc) − (T1 − Tc)
1
σ√TCU
sign(yTe )
T2−Tc
X
j=(T1−Tc)+1
εTc+j
⇒ W (λ∗2) − W (λ∗1)
pλ∗2 − λ∗1
,
where λ∗
j := (Tj − Tc)/TCU , because yTe is supposed to be positive in our model. Using this
result, we have the limiting distributions of EMr
a,12 and EMr
b,12.
To derive the limiting distributions of LRr
a,21 and EMr
·,21, we note that for Tc + 1 ≤ t <
T1 = Tr, when α < β,
yt = φt−Tc
b yTc +
t
X
j=Tc+1
φt−j
b εj ∼a φTc−Te
a φt−Tc
b yTe .
As this relation holds uniformly, we have
T1
X
t=T2+1
y2
t−1 ∼a φ2(Tc−Te)
a y2
Te
T1
X
t=T2+1
φ2(t−Tc−1)
b ∼a
1
2ρb
φ2(Tc−Te)
a φ2(T2−Tc)
b y2
Te , (76)
39

and, because y2
T2 is shown to dominate y2
T1 and PT1
t=T2+1(∆yt)2,
T1
X
t=T2+1
yt−1∆yt ∼a − 1
2 y2
T2 ∼a − 1
2 φ2(Tc−Te)
a φ2(T2−Tc)
b y2
Te . (77)
Then, using (76) and (77), we obtain
2
T1
X
t=T2+1
yt−1∆yt + ρb
T1
X
t=T2+1
y2
t−1 ∼a − 1
2 φ2(Tc−Te)
a φ2(T2−Tc)
b y2
Te ,
which leads to
LRr
a,21 ∼a − y2
Te
T σ2 ⇒ −W 2(λe).
For the EM-type tests, as
tT2,T1 ∼a
−1
2 φ2(Tc−Te)
a φ2(T2−Tc)
b y2
Te
σ
q
1
2ρb φ2(Tc−Te)
a φ2(T2−Tc)
b y2
Te
=−
r ρb
2 φTc−Te
a φT2−Tc
b
|yTe |
σ,
we observe that
EMr
a,21, EMr
b,21 ∼a − |yTe |
σ√T ⇒ −|W (λe)|.
(ii) When α > β, we can see that φTc−Te
a φTr−Tc
b converges to zero at the exponential order.
Then, we observe that
yTr = φTr−Tc
b yTc +
Tr
X
t=Tc+1
φ(Tr −t)
b εt = Op(T β/2).
Then, noting that β/2 < 1/2 because 0 < β < 1, for T1 = Tr < t ≤ T , we have
yt = yT1 +
t
X
t=T1+1
εt = Op(T β/2) +
t
X
t=T1+1
εt. (78)
Using (78), we have
T2
X
t=T1+1
y2
t−1 ∼a
T2
X
t=T1+1


t−1
X
j=T1+1
εj


2
, (79)
T2
X
t=T1+1
yt−1∆yt ∼a
1
2

y2
T2 −
T2
X
t=T1+1
(∆yt)2


∼a
1
2




T2
X
t=T1+1
εt


2
−
T2
X
t=T1+1
ε2
t

 . (80)
40

Then, using (79) and (80), we obtain
2
T2
X
t=T1+1
yt−1∆yt + ρb
T2
X
t=T1+1
y2
t−1 ∼a ρb
T2
X
t=T +1


t−1
X
j=T1+1
εj


2
= Op(T 2−β),
which implies that LRr
a,12 diverges to infinity because the scalar goes to zero much faster
than T 2−β. For the EM-type tests, as
tT1,T2 ⇒
1 2
h
(W (λ∗2) − W (λ∗1))2 − (λ∗2 − λ∗1)
i
q
R λ∗
2
λ∗
1 (W (s∗) − W (λ∗1))2 ds∗
=: ADF r(λ∗
1, λ∗
2),
we obtain the limiting distributions of EMa,12 and EMb,12.
To see the behavior of LRr
a,21 and EMr
·,21, note that for Tc + ⌊TCU ε⌋ < t ≤ Tr, when
α > β,
yt = φt−Tc
b yTc +
t
X
j=Tc+1
φt−j
b εj ∼a
t
X
j=Tc+1
φt−j
b εj .
Then, we observe that
1
TCU T β
T1
X
t=T2+1
y2
t−1 ∼a
1
TCU T β
T1
X
t=T2+1


t−1
X
j=Tc+1
φt−1−j
b εj


2
−p→ (λ∗
1 − λ∗
2) σ2
2b , (81)
where the convergence in probability holds by Lemma 2(a) of Kurozumi and Hayakawa (2009)
by noting that the term in the parentheses corresponds to the mildly integrated process, and
the convergence in probability holds uniformly over ε ≤ λ∗2 ≤ λ∗1 − ε by Lemma A.10 of
Hansen (2000). In addition, as y2
T1 = Op(T β) and y2
T2 = Op(T β) whereas
T1
X
t=T2+1
(∆yt)2 =
T1
X
t=T2+1
(−ρbyt−1 + εt)2 ∼a
T1
X
t=T2+1
ε2
t = Op(T ),
we observe that
1
TCU
T1
X
t=T2+1
yt−1∆yt ∼a − 1
2TCU
T1
X
t=T2+1
ε2
t
−p→ − σ2
2 (λ∗
1 − λ∗
2). (82)
41

From (81) and (82), we have
1
TCU

2
T1
X
t=T2+1
yt−1∆yt + ρb
T1
X
t=T2+1
y2
t−1


∼a − 1
TCU
T1
X
T2+1
ε2
t+ b
T βTCU
T1
X
t=T2+1


t−1
X
j=Tc+1
φt−1−j
b εj


2
−p→ −(λ∗
1 − λ∗
2)σ2 + b σ2
2b (λ∗
1 − λ∗
2)
= −1
2 (λ∗
1 − λ∗
2)σ2, (83)
which implies that LRr
a,21 → −∞. For the EM-type tests, using (81) and (82), we observe
that
s
Tβ
TCU
tT2,T1 ∼a
−1
2TCU
PT1
t=T2+1 εt2
σ
r
1
TCU T β
PT1
t=T2+1
Pt−j−1
j=Tc+1 εj
2
−p→ −
r
b(λ∗1 − λ∗2)
2,
which implies that EMa,21, EMb,21 → −∞.■
Proof of Theorem 6: (i-a) When α < β, suppose that Tr > T1 (λr > λ1). Then, as
yt ∼a φTc−Te
a φt−Tc
b yTe for Tc + 1 ≤ t ≤ Tr, we observe for T1 < T2 ≤ Tr that, similarly to (76)
and (77),
T2
X
t=T1+1
y2
t−1 ∼a φ2(Tc−Te)
a y2
Te
T2
X
t=T1+1
φ2(t−1−Tc)
b ∼a
1
2ρb
φ2(Tc−Te)
a φ2(T1−Tc)
b y2
Te ,
and T2
X
t=T1+1
yt−1∆yt ∼a − 1
2 y2
T1 ∼a − 1
2 φ2(Tc−Te)
a φ2(T1−Tc)
b y2
Te .
Using these results, we have
2
T2
X
t=T1+1
yt−1∆yt + ρb
T2
X
t=T1+1
y2
t−1 ∼a − 1
2 φ2(Tc−Te)
a φ2(T1−Tc)
b y2
Te ,
and
tT1,T2 ∼a
−1
2 φ2(Tc−Te)
a φ2(T1−Tc)
b y2
Te
σ
q
1
2ρb φ2(Tc−Te)
a φ2(T1−Tc)
b y2
Te
∼a −
r ρb
2 φTc−Te
a φT1−Tc
b |yTe |.
42

As the same results are obtained for T2 > Tr, we observe from the definitions of the test
statistics that
LRr
a,12 → 0 and EMa,12, EMb,12 → −∞.
The orders of LRr
·,21 and EMr
·,21 are obtained in exactly the same manner as the derivations
under the null hypothesis and we omit the details.
(i-b) Suppose that Tr < T1 (λr < λ1). Similarly to (74) and (75), we observe that
T2
X
t=T1+1
y2
t−1 ∼a (T2 − T1)φ2(Tc−Te)
a φ2(Tr−Tc)
b y2
Te
and T2
X
t=T1+1
yt−1∆yt ∼a φTc−Te
a φTr−Tc
b yTe
T2
X
t=Tr +1
εt.
Then, we have
2
T2
X
T1+1
yt−1∆yt + ρb
T2
X
t=T1+1
y2
t−1 ∼a (T2 − T1)ρbφ2(Tc−Te)
a φ2(Tr−Tc)
b y2
Te ,
which implies LRa,12 → ∞. In addition, we can observe that tT1,T2 ∼a Op(1) uniformly over
T2 ∈ Λr12 and thus, EMr
a,12 and EMr
b,12 are Op(1).
For T2 < Tr, we observe that
T1
X
t=T2+1
y2
t−1 =
Tr
X
t=T2+1
y2
t−1 +
T1
X
t=Tr +1
y2
t−1
∼a
Tr
X
t=T2+1
y2
t−1
∼a
1
2ρb
φ2(Tc−Te)
a φ2(T2−Tc)
b y2
Te ,
and
T1
X
t=T2+1
yt−1∆yt ∼a − 1
2 y2
T2
∼a − 1
2 φ2(Tc−Te)
a φ2(T2−Tc)
b y2
Te ,
43

which imply that
2
T1
X
t=T2+1
yt−1∆yt + ρb
T1
X
t=T2+1
y2
t−1 ∼a − 1
2 φ2(Tc−Tr)
a φ2(T2−Tc)
b y2
Te ,
whereas for Tr ≤ T2 < T1,
T1
X
t=T2+1
y2
t−1 ∼a (T1 − T2)φ2(Tc−Te)
a φ2(Tr−Tc)
b y2
Te ,
and T1
X
t=T2+1
yt−1∆yt ∼a φTc−Te
a φTr−Tc
b yTe
T1
X
t=Tr +1
εt,
which imply that
2
T1
X
t=T2+1
yt−1∆yt + ρb
T1
X
t=T2+1
y2
t−1 ∼a (T1 − T2)ρbφ2(Tc−Te)
a φ2(Tr−Tc)
b y2
Te .
From these results, we observe that the numerator of LRa,21 cannot be maximized for T2 < Tr.
Therefore, from the definition of the test statistic, we observe that LRa,21 → ∞. In addition,
we observe that
tT2,T1 ⇒ W (λ∗1) − W (λr∗)
pλ∗1 − λ∗2
for T2 ≥ Tr, whereas for T2 < Tr,
tT2,T1 ∼a −
r ρb
2 φTc−Te
a φT2−Tc
b
|yTe |
σ.
These imply that EMa,21 = Op(1) while EMb,21 = op(1).
(ii-a) When α > β, suppose that Tr > T1 (λr > λ1). Then, following (83), we observe that,
for T2 = Tr,
1
TCU

2
T2
X
t=T1+1
yt−1∆yt + ρb
T2
X
t=T1+1
y2
t−1


−p→ − 1
2 (λ∗
r − λ∗
1)σ2,
which implies that LRr
a,12 → −∞. To investigate tT1,T2, note that for T2 > Tr,
T2
X
t=T1+1
y2
t−1 =
Tr
X
t=T1+1
y2
t−1 +
T2
X
t=Tr +1
y2
t−1
∼a TCU T β(λ∗
r − λ∗
1) σ2
2b + T 2
CU σ2
Z λ∗
2
λr∗
(W (s∗) − W (λ∗
r))2ds∗, (84)
44

while
T2
X
t=T1+1
yt−1∆yt =
Tr
X
t=T1+1
yt−1∆yt +
T2
X
t=Tr +1
yt−1∆yt
∼a −TCU
σ2
2 (λ∗
r − λ∗
1) + TCU
σ2
2
h
(W (λ∗
2) − W (λ∗
r))2 − (λ∗
2 − λ∗
r)
i
, (85)
which implies tT1,T2 = Op(1) for T2 > Tr. On the contrary, for T1 < T2 ≤ Tr, only the
first terms of (84) and (85) matter and we can observe that tT1,T2 → −∞. Therefore,
we conclude that EMa,12, EMb,12 → −∞. The behavior of LRa,21, EMa,21, and EMb,21 is
obtained similarly to the proof of Theorem 5(ii) and thus they diverge to −∞.
(ii-b) Suppose that Tr < T1 (λr < λ1). Then, following the proof of Theorem 5(ii), we observe
that LRa,12 → ∞ and EMa,12, and EMb,12 are Op(1).
For T2 < Tr, we observe that
T1
X
t=T2+1
y2
t−1 =
Tr
X
t=T2+1
y2
t−1 +
T1
X
t=Tr +1
y2
t−1
∼a TCU T β(λ∗
r − λ∗
2) σ2
2b + T 2
CU
Z λ∗
1
λr∗
(W (s∗) − W (λ∗
r))2 ds∗ (86)
and
T1
X
t=T2+1
yt−1∆yt =
Tr
X
t=T2+1
yt−1∆yt +
T1
X
t=Tr +1
yt−1∆yt
∼a −TCU
σ2
2 (λ∗
r − λ∗
2) + TCU
σ2
2
h
(W (λ∗
1) − W (λ∗
r))2 − (λ∗
1 − λ∗
r)
i
. (87)
Then, we observe that LRa,21 → ∞. On the contrary, tT2,T1 = Op(1) for T2 < Tr and the
same order is observed for Tr ≤ T2. As the sign of tT2,T1 is indeterministic while the scalars
go to zero from the definitions of EMr
a,21 and EMr
b,21, we conclude that they diverge to ∞ or
−∞.■
45

Table 1: Coefficients of the Response Surface Regressions
a0,l a−1,l a1,l a2,l a3,l
LRe
a,21 −9.99 × 10−4 5.13 × 10−5 −1.09 × 10−3 4.40 × 10−4 −2.16 × 10−4
EMe
a,21 −0.127 −4.75 × 10−4 1.34 −0.185 0.0956
EMe
b,21 1.59 −0.0368 0.706 −0.525 0.194
EMr
a,12 −1.47 5.02 × 10−5 1.57 −0.0124 0.0779
EMr
b,12 −2.81 −7.44 × 10−5 0.258 −0.382 0.745
b0,l b−1,l b1,l b2,l b3,l
−2710 530 5192 −4420 1411
46

Table 2: Coverage Rates and Lengths of the Confidence Sets (Te, Case 1, true ends)
a LRe
a EMe
a EMe
b LEe coverage 2 0.19 0.70 0.45 0.90 coverage12 0.39 0.76 0.52 0.96 coverage21 0.56 0.94 0.90 0.94 coverage 4 0.33 0.86 0.68 0.91 coverage12 0.55 0.92 0.77 0.97 coverage21 0.67 0.94 0.90 0.94 coverage 6 0.56 0.90 0.79 0.92 coverage12 0.71 0.96 0.89 0.98 coverage21 0.81 0.94 0.90 0.94
length 2 0.09 0.42 0.21 0.61 length12left 0.09 0.36 0.13 0.48 length12right 0.15 0.20 0.19 0.31 length21left 0.31 0.47 0.45 0.47 length21right 0.15 0.29 0.27 0.29 length 4 0.07 0.50 0.22 0.50 length12left 0.05 0.45 0.15 0.39 length12right 0.22 0.27 0.27 0.31 length21left 0.35 0.47 0.45 0.47 length21right 0.09 0.20 0.17 0.20 length 6 0.08 0.51 0.21 0.39 length12left 0.05 0.51 0.16 0.29 length12right 0.27 0.30 0.29 0.31 length21left 0.41 0.47 0.45 0.47 length21right 0.07 0.14 0.11 0.14
Note: LEe is a combination of LRe
b,12 and EMe
a,21.
47

Table 3: Coverage Rates and Lengths of the Confidence Sets (Te, Case 1, estimated ends)
a LRe
a EMe
a EMe
b LEe coverage 2 0.21 0.59 0.35 0.71 coverage12 0.36 0.65 0.42 0.77 coverage21 0.51 0.78 0.75 0.78 coverage 4 0.35 0.82 0.63 0.86 coverage12 0.56 0.88 0.73 0.92 coverage21 0.64 0.89 0.85 0.89 coverage 6 0.57 0.89 0.78 0.90 coverage12 0.72 0.95 0.88 0.96 coverage21 0.79 0.92 0.88 0.92
length 2 0.11 0.42 0.19 0.60 length12left 0.09 0.37 0.13 0.44 length12right 0.16 0.21 0.18 0.34 length21left 0.28 0.42 0.40 0.42 length21right 0.19 0.33 0.30 0.33 length 4 0.09 0.50 0.21 0.51 length12left 0.06 0.46 0.15 0.39 length12right 0.23 0.27 0.26 0.32 length21left 0.34 0.45 0.43 0.45 length21right 0.11 0.20 0.17 0.20 length 6 0.08 0.51 0.20 0.40 length12left 0.05 0.51 0.16 0.30 length12right 0.27 0.30 0.29 0.31 length21left 0.41 0.46 0.44 0.46 length21right 0.08 0.14 0.11 0.14
Note: LEe is a combination of LRe
b,12 and EMe
a,21.
48

Table 4: Coverage Rates and Lengths of the Confidence Sets (Tc, Case 1, true ends)
a LRc
a EMc
a EMc
b
coverage 2 0.38 0.76 0.36 coverage12 0.59 0.91 0.58 coverage21 0.65 0.81 0.57 coverage 4 0.82 0.95 0.82 coverage12 0.87 0.99 0.90 coverage21 0.92 0.96 0.88 coverage 6 0.95 0.98 0.96 coverage12 0.96 1.00 0.97 coverage21 0.98 0.98 0.97
length 2 0.07 0.29 0.05 length12left 0.08 0.23 0.06 length12right 0.27 0.36 0.27 length21left 0.26 0.30 0.23 length21right 0.10 0.16 0.04 length 4 0.08 0.30 0.07 length12left 0.05 0.19 0.05 length12right 0.37 0.41 0.37 length21left 0.35 0.37 0.33 length21right 0.07 0.15 0.05 length 6 0.09 0.28 0.08 length12left 0.05 0.16 0.05 length12right 0.41 0.42 0.41 length21left 0.39 0.39 0.38 length21right 0.06 0.14 0.05
49

Table 5: Coverage Rates and Lengths of the Confidence Sets (Tc, Case 1, estimated ends)
a LRc
a EMc
a EMc
b
coverage 2 0.33 0.56 0.32 coverage12 0.46 0.67 0.47 coverage21 0.52 0.61 0.48 coverage 4 0.78 0.85 0.78 coverage12 0.81 0.89 0.83 coverage21 0.85 0.87 0.83 coverage 6 0.93 0.94 0.93 coverage12 0.93 0.96 0.94 coverage21 0.95 0.95 0.94
length 2 0.07 0.25 0.05 length12left 0.07 0.21 0.06 length12right 0.29 0.36 0.27 length21left 0.28 0.31 0.24 length21right 0.09 0.15 0.05 length 4 0.09 0.28 0.08 length12left 0.05 0.18 0.05 length12right 0.38 0.41 0.37 length21left 0.36 0.37 0.34 length21right 0.07 0.14 0.05 length 6 0.09 0.27 0.09 length12left 0.05 0.16 0.05 length12right 0.40 0.41 0.39 length21left 0.39 0.39 0.38 length21right 0.06 0.14 0.05
50

Table 6: Coverage Rates and Lengths of the Confidence Sets (Tr, Case 1, true ends)
a LRr
a EMr
a EMr
b LEr coverage 2 0.20 0.76 0.63 0.93 coverage12 0.45 0.93 0.97 0.97 coverage21 0.49 0.82 0.65 0.95 coverage 4 0.31 0.89 0.84 0.94 coverage12 0.50 0.92 0.96 0.96 coverage21 0.66 0.97 0.87 0.97 coverage 6 0.49 0.91 0.92 0.95 coverage12 0.61 0.92 0.96 0.96 coverage21 0.81 0.99 0.96 0.98
length 2 0.09 0.45 0.30 0.62 length12left 0.11 0.30 0.34 0.34 length12right 0.28 0.48 0.52 0.52 length21left 0.12 0.14 0.16 0.22 length21right 0.13 0.43 0.19 0.50 length 4 0.06 0.53 0.33 0.55 length12left 0.06 0.18 0.21 0.21 length12right 0.31 0.48 0.52 0.52 length21left 0.17 0.20 0.20 0.22 length21right 0.10 0.51 0.22 0.44 length 6 0.07 0.54 0.31 0.44 length12left 0.04 0.12 0.13 0.13 length12right 0.35 0.48 0.52 0.52 length21left 0.20 0.21 0.22 0.22 length21right 0.09 0.56 0.23 0.35
Note: LEr is a combination of EMr
b,12 and LRr
b,21.
51

Table 7: Coverage Rates and Lengths of the Confidence Sets (Tr, Case 1, estimated ends)
a LRr
a EMr
a EMr
b LEr coverage 2 0.19 0.65 0.51 0.72 coverage12 0.39 0.76 0.80 0.80 coverage21 0.40 0.69 0.53 0.73 coverage 4 0.32 0.84 0.79 0.87 coverage12 0.50 0.86 0.91 0.91 coverage21 0.63 0.91 0.82 0.90 coverage 6 0.49 0.89 0.90 0.92 coverage12 0.60 0.89 0.94 0.94 coverage21 0.79 0.97 0.93 0.96
length 2 0.10 0.48 0.30 0.61 length12left 0.14 0.32 0.36 0.36 length12right 0.25 0.45 0.48 0.48 length21left 0.13 0.17 0.15 0.24 length21right 0.13 0.44 0.20 0.47 length 4 0.07 0.53 0.32 0.54 length12left 0.07 0.18 0.21 0.21 length12right 0.30 0.47 0.50 0.50 length21left 0.17 0.20 0.20 0.22 length21right 0.10 0.52 0.22 0.43 length 6 0.07 0.54 0.30 0.43 length12left 0.05 0.12 0.13 0.13 length12right 0.35 0.47 0.51 0.51 length21left 0.20 0.21 0.21 0.22 length21right 0.09 0.57 0.23 0.35
Note: LEr is a combination of EMr
b,12 and LRr
b,21.
52

2012.10.1 2012.12.3 2013.2.1 2013.4.1 2013.6.3 2013.8.1
Te Tc Tr
Figure 1: Logarithm of Japanese stock price
Note: The red vertical lines show the point estimates of Te, Tc, and Tr, respectively, while the gray, blue, and yellow areas correspond to the confidence set for Te, Tc, and Tr, respectively.
53

---

## Processing Information

- **Processing Library:** Zotero PDFWorker
- **Processing Date:** 2026-02-10T18:15:07.362Z
- **Text Length:** 71408 characters
- **Success:** Text extraction completed
- **PDF Library Used:** Zotero PDFWorker
- **Pages Processed:** 53 of 53
