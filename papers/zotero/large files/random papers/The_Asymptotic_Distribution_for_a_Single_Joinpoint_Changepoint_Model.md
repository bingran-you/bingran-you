# PDF Document: Shi and Lund - 2025 - The Asymptotic Distribution for a Single Joinpoint Changepoint Model.pdf

**File Path:** Shi and Lund - 2025 - The Asymptotic Distribution for a Single Joinpoint Changepoint Model.pdf

**Processed Date:** 2026-02-10T18:17:00.104Z

**File Size:** 300.59 KB

**Total Pages:** 19

**Extracted Pages:** 19

**PDF Library:** Zotero PDFWorker

**Attachment Item ID:** 3423

**Title:** The Asymptotic Distribution for a Single Joinpoint Changepoint Model

**Collection:** Large Files > Random Papers

---

## Extracted Text Content

The Asymptotic Distribution for a Single Joinpoint Changepoint Model
Xueheng Shi
Department of Statistics, University of Nebraska-Lincoln shixueheng@gmail.com
Robert Lund
Department of Statistics, University of California, Santa Cruz rolund@ucsc.edu
November 26, 2025
Abstract
A single joinpoint changepoint model partitions a time series into two segments, joined at the changepoint time by constraining the estimated piecewise linear regression responses to be continuous. This manuscript derives the exact asymptotic distribution of the changepoint existence test statistic gauging whether or not a second segment is necessary. The identified asymptotic distribution, a supremum of a Gaussian process over the unit interval, is rather unwieldy. The work presented here provide-
s the result and its derivation; quantiles of the asymptotic distribution are presented for the user. This addresses a subtle gap in the changepoint literature.
Keywords Brownian Bridge, Gaussian Process, Joinpoint Model, Supremum.
1 Introduction
Detecting changepoints, i.e., the locations in time where the statistical properties of a process shift, has become a fundamental statistical task. Correctly identifying whether shifts occur and their occurrence times is crucial for accurate modeling, interpretation, and forecasting. Changepoint issues now permeate a wide range of disciplines including speech [Davis et al., 2006], quality control [Hawkins et al., 2003], and climatology [Lund et al., 2023]. In some domains, processes exhibit abrupt-
 level shifts without any trend changes (the so-called mean shift paradigm). In other cases, trends can also change. Trend shifts are known to occur in agricultural [Alston et al., 2010], economic [Brandt and Rawski, 2008], and climate [Beaulieu et al., 2024] time series.
Misclassifying the nature of a changepoint shift can lead to incorrect conclusions about causality, trends, and future projections. For example, interpreting an upward mean shift as a trend change may overstate long-term growth; conversely, ignoring a slope change may understate cumulative impacts over time. These distinctions are also critical for counterfactual analysis, policy evaluation, and attribution studies. To understand changes in global temperature trends in the context of natural and a-
nthropogenic influences, we need to consider both mean and trend shifts. For global series, a discontinuous mean function is physically unrealistic. This motivates the study of joinpoint (also called joinpin) models: a two-phase linear regression where the regression response is constrained to be continuous.
A gap in the statistical literature exists on the single joinpoint changepoint problem: an asymptotic distribution has not been quantified to date. The joinpoint regression model is used in medicine [Kim et al., 2022], biology [Gillis and Edwards, 2019], and climatology [Beaulieu et al., 2024]. We fill this gap here, deriving an asymptotic distribution for a single joinpoint changepoint test.
2 Model and Changepoint Test Statistic
Two or multi-phase regression models where the regression response is required to meet (i.e., be continuous in a discrete sense) between regimes are called joinpoint models. A two-regime joinpoint regression structure describing
arXiv:2511.17942v2 [stat.ME] 25 Nov 2025

A preprint - November 26, 2025
this scenario has the form
Xt = μ + αt + εt , 1 ≤ t ≤ k,
μ + αt + β(t − k) + εt , k + 1 ≤ t ≤ n. (1)
The above formulation ensures continuity in E [Xt ] at the changepoint time t = k. The changepoint existence hypothesis is H0 : β = 0 versus HA : β ≠ 0, and k is unknown, as are μ, α, and β. We assume that {εt } is independent and identically
distributed with mean zero and variance σ2.
If time k is known to be the changepoint, then
Jk := βˆ
Var( βˆ)1/2
should be large in absolute magnitude (statistically non-zero). Here and elsewhere, hats on quantities denote estimators. Because the time k is unknown, the quantity
Jmax = max
2≤ k ≤ n−2
|Jk |
is used as the test statistic for the existence of a joinpoint changepoint. The point of this paper is to identify the asymptotic distribution of Jmax as n → ∞.
Several tactics exist to derive this asymptotic distribution. Julious [2001] provides a closed form for βˆ via Lagrange multipliers, expressing estimators of μ, α, and β by relating them to an unconstrained optimization involving two unconstrained linear segments. While interesting, this does not seem to lead to any computational reductions; moreover, it is challenging to identify Var(βˆ) with this setup. Unfortunately, results in Jandhyala and MacNeill [1997] and Robbins et al. [2016] do not appl-
y to this case and would apparently take significant work to modify. As such, we take a classic approach to obtain βˆ and derive its variances and covariances. While the ideas are straightforward, the computations are quite tedious.
A sum of squared errors for μ, α and β when k is known to be the changepoint time is
S(μ, α, β) = min
μ, α, β
"k ∑︁
t =1
(Xt − μ − αt)2 +
n ∑︁
t = k +1
(Xt − μ − αt − β(t − k))2
#
. (2)
Taking partial derivatives with respect to μ, α, and β, respectively and equating the results to zero, we obtain a three dimensional linear system of equations:
n ∑︁
t =1
Xt = nμˆ + αˆ
n ∑︁
t =1
t + βˆ
n ∑︁
t = k +1
(t − k)
n ∑︁
t =1
t Xt = μˆ
n ∑︁
t =1
t + αˆ
n ∑︁
t =1
t2 + βˆ
n ∑︁
t = k +1
(t − k)t
n ∑︁
t = k +1
(t − k) Xt = μˆ
n ∑︁
t = k +1
(t − k) + αˆ
n ∑︁
t = k +1
t (t − k) + βˆ
n ∑︁
t = k +1
(t − k)2
for the estimators μˆ, αˆ , and βˆ,
With some computational effort, the estimate for β when a changepoint exists at time k is
βˆk = (nV3 − bV1) (nc − a2) − (nV2 − aV1) (nd − ab)
(ne − b2) (nc − a2) − (nd − ab)2 , (3)
where
a=
n ∑︁
t =1
t = n(n + 1)
2
, b=
n ∑︁
t = k +1
(t − k) = (n − k)(n − k + 1)
2
,
c=
n ∑︁
t =1
t2 = n(n + 1) (2n + 1)
6
, d=
n ∑︁
t = k +1
(t − k)t = (n − k)(n − k + 1)(2n + k + 1)
6
,
and
e=
n ∑︁
t = k +1
(t − k)2 = (n − k) (n − k + 1) (2(n − k) + 1)
6
.
Here,
V1 =
n ∑︁
t =1
Xt , V2 =
n ∑︁
t =1
t Xt , V3 =
n ∑︁
t = k +1
(t − k) Xt
2

A preprint - November 26, 2025
Expressing βˆk as a linear combination of V1,V2, and V3 gives
βˆk = (bc − ad)n
D
V1 + (dn − ab)n
D
V2 +
a2 − cn n
D
V3,
with D = (ab − dn)2 − (b2 − ne) (a2 − nc). As the variances and covariances of V1,V2,V3 are computable, we find
Var( βˆk ) = Vnum
Vdem
,
where
Vnum = 1
864 11k2 − 32k3 + 33k4 − 14k5 + 2k6 n5
+1
864 −23k + 84k2 − 98k3 + 43k4 − 6k5 n6
+1
864 12 − 72k + 91k2 − 12k3 − 27k4 + 14k5 − 2k6 n7
+1
864 20 − 18k − 73k2 + 96k3 − 43k4 + 6k5 n8
+1
864 −8 + 80k − 102k2 + 44k3 − 6k4 n9
+1
864 −24 + 41k − 11k2 + 2k3 n10
+1
864 (−4 − 8k)n11
+1
216
n12,
and
Vdem = 121k4 − 704k5 + 1750k6 − 2420k7 + 2029k8 − 1052k9 + 328k10 − 56k11 + 4k12 n4
5184 + −506k3 + 3320k4 − 9050k5 + 13406k6 − 11796k7 + 6302k8 − 1992k9 + 340k10 − 24k11 n5
5184 + 793k2 − 6216k3 + 19208k4 − 31026k5 + 28848k6 − 15868k7 + 5061k8 − 860k9 + 60k10 n6
5184 + −552k + 5768k2 − 21322k3 + 38490k4 − 38010k5 + 21350k6 − 6788k7 + 1144k8 − 80k9 n7
5184 + 144 − 2648k + 12966k2 − 27138k3 + 28332k4 − 15682k5 + 4782k6 − 800k7 + 60k8 n8
5184 + 480 − 4048k + 10464k2 − 10940k3 + 4892k4 − 1116k5 + 196k6 − 24k7 n9
5184 + 496 − 1840k + 1113k2 + 1082k3 − 715k4 + 100k5 + 4k6 n10
5184 + 64 + 568k − 1384k2 + 512k3 − 80k4 n11
5184 + −144 + 392k − 24k2 + 16k3 n12
5184 + (−32 − 64k)n13
5184
+ n14
324
.
Some work with the above expressions yields, as n → ∞,
Var(βˆk) = 3
n3
k n
3
1− k
n
3
+ o(n−1)
k n
6
1− k
n
6
+ o(n−1)
.
Here, o(n−1) is a generic sequence of numbers rn with nrn → 0 as n → ∞.
3

A preprint - November 26, 2025
To get the asymptotic distribution of Jmax under the null hypothesis of no changepoints, we note that as n → ∞, Jk
→D N (0, 1) by the central limit theorem. As such, any limit will be a Gaussian process. To obtain the covariance function of this limit, we need to identify Cov(Jk, Jl ) when 1 ≤ k ≤ l ≤ n. While a tedious endeavor, one can show that
Cov(Jk , Jl ) = Cnum
Cdem
(4)
where
Cnum = 1
864 (11kl − 16k2l + 5k3l − 16kl2 + 23k2l2 − 7k3l2 + 5kl3 − 7k2l3 + 2k3l3)n5
+1
864 (−11k + 16k2 − 5k3 − 12l + 52kl − 43k2l + 11k3l + 16l2 − 46kl2 + 21k2l2
− 3k3l2 − 4l3 + 11kl3 − 3k2l3)n6
+1
864 (12 − 36k + 20k2 − 4k3 − 36l + 51kl − 2k2l − 5k3l + 20l2 − 2kl2 − 17k2l2
+ 7k3l2 − 4l3 − 5kl3 + 7k2l3 − 2k3l3)n7
+1
864 (20 − 10k − 12k2 + 6k3 − 8l − 49kl + 40k2l − 11k3l − 12l2 + 46kl2 − 21k2l2
+ 3k3l2 + 4l3 − 11kl3 + 3k2l3)n8
+1
864 (−8 + 40k − 20k2 + 4k3 + 40l − 62kl + 18k2l − 20l2 + 18kl2 − 6k2l2 + 4l3)n9
+1
864 (−24 + 21k − 4k2 − k3 + 20l − 3kl + 3k2l − 4l2)n10
+1
864 (−4 − 4k − 4l)n11
+1
216
n12,
and
Cdem = 1
5184 (121k2l2 − 352k3l2 + 363k4l2 − 154k5l2 + 22k6l2 − 352k2l3 + 1024k3l3
− 1056k4l3 + 448k5l3 − 64k6l3 + 363k2l4 − 1056k3l4 + 1089k4l4
− 462k5l4 + 66k6l4 − 154k2l5 + 448k3l5 − 462k4l5 + 196k5l5 − 28k6l5
+ 22k2l6 − 64k3l6 + 66k4l6 − 28k5l6 + 4k6l6)n4
+1
5184 (−253k2l + 736k3l − 759k4l + 322k5l − 46k6l − 253kl2 + 1848k2l2 − 3766k3l2
+ 3245k4l2 − 1242k5l2 + 168k6l2 + 736kl3 − 3766k2l3 + 6272k3l3
− 4610k4l3 + 1564k5l3 − 196k6l3 − 759kl4 + 3245k2l4 − 4610k3l4
+ 2838k4l4 − 800k5l4 + 86k6l4 + 322kl5 − 1242k2l5 + 1564k3l5
− 800k4l5 + 168k5l5 − 12k6l5 − 46kl6 + 168k2l6 − 196k3l6 + 86k4l6
− 12k5l6)n5
+1
5184 (132k2 − 384k3 + 396k4 − 168k5 + 24k6 + 529kl − 2724k2l + 4558k3l
− 3365k4l + 1146k5l − 144k6l + 132l2 − 2724kl2 + 9300k2l2
− 11980k3l2 + 7044k4l2 − 1932k5l2 + 204k6l2 − 384l3 + 4558kl3
− 11980k2l3 + 12420k3l3 − 5858k4l3 + 1204k5l3 − 88k6l3 + 396l4
− 3365kl4 + 7044k2l4 − 5858k3l4 + 2245k4l4 − 342k5l4 + 12k6l4 − 168l5
+ 1146kl5 − 1932k2l5 + 1204k3l5 − 342k4l5 + 36k5l5 + 24l6 − 144kl6
+ 204k2l6 − 88k3l6 + 12k4l6)n6
+1
5184 (−276k + 1228k2 − 1816k3 + 1176k4 − 352k5 + 40k6 − 276l + 3312kl
− 8845k2l + 9380k3l − 4587k4l + 1006k5l − 82k6l + 1228l2 − 8845kl2
+ 17378k2l2 − 14066k3l2 + 5253k4l2 − 766k5l2 + 22k6l2 − 1816l3
4

A preprint - November 26, 2025
+ 9380kl3 − 14066k2l3 + 8752k3l3 − 2546k4l3 + 292k5l3 − 4k6l3
+ 1176l4 − 4587kl4 + 5253k2l4 − 2546k3l4 + 516k4l4 − 36k5l4 − 352l5
+ 1006kl5 − 766k2l5 + 292k3l5 − 36k4l5 + 40l6 − 82kl6 + 22k2l6
− 4k3l6)n7
+1
5184 (144 − 1324k + 2948k2 − 2616k3 + 1064k4 − 176k5 + 8k6 − 1324l + 7070kl
− 10953k2l + 6976k3l − 1931k4l + 134k5l + 16k6l + 2948l2 − 10953kl2
+ 12252k2l2 − 5734k3l2 + 1085k4l2 − 66k5l2 − 2616l3 + 6976kl3
− 5734k2l3 + 2328k3l3 − 350k4l3 + 12k5l3 + 1064l4 − 1931kl4
+ 1085k2l4 − 350k3l4 + 36k4l4 − 176l5 + 134kl5 − 66k2l5 + 12k3l5 + 8l6
+ 16kl6)n8
+1
5184 (480 − 2024k + 2464k2 − 1168k3 + 160k4 + 32k5 − 8k6 − 2024l + 5536kl
− 4302k2l + 1164k3l + 98k4l − 48k5l + 2464l2 − 4302kl2 + 2244k2l2
− 688k3l2 + 66k4l2 − 1168l3 + 1164kl3 − 688k2l3 + 176k3l3 − 12k4l3
+ 160l4 + 98kl4 + 66k2l4 − 12k3l4 + 32l5 − 48kl5 − 8l6)n9
+1
5184 (496 − 920k + 292k2 + 176k3 − 148k4 + 24k5 − 920l + 529kl + 365k2l
− 270k3l + 48k4l + 292l2 + 365kl2 + 121k2l2 − 22k3l2 + 176l3 − 270kl3
− 22k2l3 + 4k3l3 − 148l4 + 48kl4 + 24l5)n10
+1
5184 (64 + 284k − 364k2 + 168k3 − 24k4 + 284l − 656kl + 88k2l − 16k3l − 364l2
+ 88kl2 + 168l3 − 16kl3 − 24l4)n11
+1
5184 (−144 + 196k − 44k2 + 8k3 + 196l + 64kl − 44l2 + 8l3)n12
+1
5184 (−32 − 32k − 32l)n13
+1
324
n14 .
Mathematica was used to assist with the calculation of above variance and covariance. Another exercise with the above expressions shows the limit in 4 as
lim
n→∞ Cov(Jk , Jl ) = 1
2
(3s − t − 2st) s(1 − t)
√︄
t(1 − s)
s(1 − t) . (5)
Here, k ≤ l and n → ∞ in a manner such that k/n → t and l/n → s, with 0 < t ≤ s < 1.
Weak convergence theory on general spaces [Billingsley, 2013] now essentially shows (the finiteness caveats below) that as n → ∞,
Jmax
−D→ sup
t ∈ (0,1)
|G (t) |,
where {G (t)}1
t=0 is a zero-mean unit-variance Gaussian process with
Cov(G (t), G (s)) =
3
2s− t
2 − st
s(1 − t)
√︄
t(1 − s)
s(1 − t) , 0 < t ≤ s < 1.
Unfortunately, supt ∈ (0,1) |G (t)| = ∞ with probability one. This can be seen as follows. First, it is known that
sup
t ∈ (0,1)
|B(t)|
√︁
t (1 − t)
= ∞ (6)
with probability one. Here, {B(t)}t=1
t=0 is a standard Brownian bridge process; viz.
B(t) = W (t) − tW (1), t ∈ [0, 1],
where {W (t)}t=1
t=0 is the standard Brownian motion. The divergence in (6) essentially follows from the divergence
sup
t ∈ (0,κ )
W (t)
√
t
=∞
5

A preprint - November 26, 2025
with probability one for every fixed κ > 0, which in turn is justified from the law of the iterated logarithm for Brownian motion. See Qualls [1977], Csörgö and Horváth [1997], and Horváth and Rice [2024] for further technical detail.
To connect this to the above, one can establish the bound
3
2s− t
2 − st
s(1−t) ≤ 3
for any t, s satisfying 0 ≤ t ≤ s ≤ 1. Hence, the covariance function on the right hand side of (5) obeys
1 2
(3s − t − 2st) s(1 − t)
√︄
t(1 − s)
s(1−t) ≤ 3
√︄
t(1 − s) s(1−t) ,
which is the covariance function of {√
3Bt /√︁
t (1 − t)}. By a stochastic comparison, it follows that supt ∈ (0,1) |G (t)| = ∞ with probability one.
Given the above, we proceed by truncating the boundaries near zero and unity, using
Jmax, δ := max
k:δ<k/n<1− δ
|Jk |
as the changepoint detection statistic. This statistic has the limit
Jmax, δ
−D→ sup
t ∈ ( δ,1− δ)
|G (t) |,
which is finite with probability one. Asymptotic tables for Jmax, δ are reported in Table 1 for several common truncation values of δ.
Table 1: Asymptotic quantiles for the joinpoint changepoint test statistic Jmax, δ.
Statistic 90.0% 95.0% 97.5% 99.0% 99.9% Jmax,.01 2.530 2.795 3.038 3.327 3.964 Jmax,.05 2.380 2.658 2.908 3.207 3.852 Jmax,.10 2.285 2.570 2.827 3.132 3.792
3 Application
We now illustrate the methods by examining the merged Land–Ocean Global Surface Temperature record from the National Oceanic and Atmospheric Administration (NOAAGlobalTemp v5.1.0) [Vose et al., 2021]. The version analyzed here was compiled by the University of California, Berkeley and is available at https://www.ncei.noaa.gov/access/monitoring/ climate-at-a-glance/global/time-series/globe/land_ocean/1/9/1850-2023. Annual temperature anomalies over the 174-year period 1850–2023 were tested for poss-
ible slope changes using our joinpoint model. The data are plotted in Figure 1. As the Earth’s temperature is arguably continuous in time, a joinpoint model enforcing continuity of the regression responses between the two regimes seems appropriate.
6

A preprint - November 26, 2025
1850 1900 1950 2000
−0.5 0.0 0.5 1.0
Year
Temperature anomaly (°C)
Observed Fitted Changepoint
Figure 1: NOAA’s annual global temperature anomalies over 1850–2023.
Table 2 presents the results of the Jmax slope change test, where the year 1850 is bookkept as t = 1. The Jmax statistic peaks in 1972 at 17.46, far above any reasonable critical value. This same maximum applies to all reasonable truncation levels δ and suggests a roughly sixfold increase in slope, presumably attributable to anthropogenic global warming. Parameter estimators for the two regimes are reported in the table. The estimated piecewise trends are superimposed on the data in Figure 1; visu-
ally, the fit appears excellent. Table 2 reports the corresponding 95th critical value when δ = 0.05; the resulting p-values are extremely small (below 0.1% for any reasonable δ). We also examined the 1970–2023 subperiod for an additional trend shift, but nothing was detected, consistent with the findings of Beaulieu et al. [2024].
Table 2: Joinpoint test summary with the 95% quantile when δ = 0.05. The p-value is less than 0.1%.
Test τˆ Test Statistic 95% Quantile Left Intercept Left Slope Right Intercept Right Slope
Jmax 1972 17.46 2.658 −6.61 0.0034 −40.44 0.0201
4 Conclusion
This paper derives the asymptotic distribution of the joinpoint test statistic Jmax for detecting a single changepoint in a continuous two-phase linear regression model. We show that the untrimmed supremum diverges and obtain a well-defined Gaussian-process limit for the trimmed statistic Jmax, δ, allowing practical critical values to be computed. These results fill a gap in the changepoint literature and provide a simple, rigorous framework for identifying slope changes when continuity of the mea-
n response is required. An application to the 1850–2023 global temperature record illustrates the method, revealing a significant slope increase in the early 1970s with no additional evidence of later trend shifts. The theory developed here may be extended to settings with multiple joinpoints, dependent errors, or additional smoothness constraints.
Acknowledgments
Robert Lund thanks National Science Foundation Grant DMS-2113592 for partial support; Xueheng Shi thanks University of Nebraska-Lincoln Grant ARD-2162251011 for partial support.
7

A preprint - November 26, 2025
5 Data Statement
Berkeley temperature series analyzed in this paper can be downloaded were listed where they first appeared. R code is available on https://github.com/shixueheng/AMOC.
8

A preprint - November 26, 2025
6 Appendix: the inference of single joinpoint model
First, we set up the objective function to be optimized:
S(μ, α, β) = min
μ, α, β
"k ∑︁
t =1
(Xt − μ − αt)2 +
n ∑︁
t = k +1
(Xt − μ − αt − β(t − k))2
#
(7)
By taking partial derivatives with respect to μ, α, and β respectively, we get
∂S
∂μ
=
k ∑︁
t =1
2 (Xt − μ − αt) (−1) +
n ∑︁
t = k +1
(Xt − μ − αt − β(t − k)) (−1) s=et 0
⇒
k ∑︁
t =1
(Xt − μ − αt) +
n ∑︁
t = k +1
(Xt − μ − αt − β(t − k)) = 0
n ∑︁
t =1
Xt − nμ − α
n ∑︁
t =1
t−β
n ∑︁
t = k +1
(t − k) = 0
⇒
n ∑︁
t =1
Xt = nμ + α
n ∑︁
t =1
t+β
n ∑︁
t = k +1
(t − k)
∂S
∂α
=
k ∑︁
t =1
2 (Xt − μ − αt) (−t) +
n ∑︁
t = k +1
2 (Xt − μ − αt − β(t − k)) (−t) s=et 0
⇒
k ∑︁
t =1
(Xt − μ − αt) t +
n ∑︁
t = k +1
(Xt − μ − αt − β(t − k)) t = 0
n ∑︁
t =1
Xt −
n ∑︁
t =1
μt −
n ∑︁
t =1
αt2 −
n ∑︁
t = k +1
β(t − k)t = 0
⇒
n ∑︁
t =1
t Xt = μ
n ∑︁
t =1
t+α
n ∑︁
t =1
t2 + β
n ∑︁
t = k +1
(t − k)t
∂S
∂β
=
n ∑︁
t = k +1
2 (Xt − μ − αt − β(t − k)) (−(t − k)) s=et 0
⇒
n ∑︁
t = k +1
(Xt − μ − αt − β(t − k)) (t − k) = 0
n ∑︁
t =1
t Xt = μ
n ∑︁
t =1
t+α
n ∑︁
t =1
t2 + β
n ∑︁
t = k +1
(t − k)t
⇒
n ∑︁
t = k +1
(t − k) Xt = μ
n ∑︁
t = k +1
(t − k) + α
n ∑︁
t = k +1
t(t − k) + β
n ∑︁
t = k +1
(t − k)2.
Therefore, we establish the normal equation set
( A)
n ∑︁
t =1
Xt = nμˆ + αˆ
n ∑︁
t =1
t + βˆ
n ∑︁
t = k +1
(t − k)
(B)
n ∑︁
t =1
t Xt = μˆ
n ∑︁
t =1
t + αˆ
n ∑︁
t =1
t2 + βˆ
n ∑︁
t = k +1
(t − k)t
(C)
n ∑︁
t = k +1
(t − k) Xt = μˆ
n ∑︁
t = k +1
(t − k) + αˆ
n ∑︁
t = k +1
t (t − k) + βˆ
n ∑︁
t = k +1
(t − k)2
9

A preprint - November 26, 2025
For computational convenience, we define the follow notations
a=
n ∑︁
t =1
t = n(n + 1)
2
b=
n ∑︁
t = k +1
(t − k) = (n − k)(n − k + 1)
2
c=
n ∑︁
t =1
t2 = n(n + 1) (2n + 1)
6
d=
n ∑︁
t = k +1
(t − k)t =
n ∑︁
t −k+1
(t − k)2 +
n ∑︁
t = k +1
k(t − k)
= (n − k) (n − k + 1) [2(n − k) + 1]
6 +k
(n − k)(n − k + 1)
2 = (n − k)(n − k + 1)(2n + k + 1)
6
e=
n ∑︁
t = k +1
(t − k)2 = (n − k) (n − k + 1) (2(n − k) + 1)
6
V1 =
n ∑︁
t =1
Xt , V2 =
n ∑︁
t =1
t Xt , V3 =
n ∑︁
t = k +1
(t − k) Xt
The normal equation set becomes
V1 = nμˆ + aαˆ + bβˆ (1)
V2 = aμˆ + cαˆ + d βˆ (2)
V3 = bμˆ + dαˆ + eβˆ (3)
From equation (1) we have μˆ = V1−aαˆ −bβˆ
n , and plug it into equations (2) and (3) to get
V2 − aV1
n
= αˆ c − a2
n
+ βˆ d − ab
n
(2′)
V3 − bV1
n
= αˆ d − ab
n
+ βˆ e − b2
n
(3′)
With (2′), we denote αˆ as:
V2 − aV1
n − βˆ d − ab
n
c − a2
n
= αˆ
⇒ nV2 − aV1 − βˆ(nd − ab)
nc − a2 = αˆ
Plug αˆ into (3′) to get
nV3 − bV1 = αˆ (nd − ab) + βˆ ne − b2
nV3 − bV1 = (nV2 − aV1) − βˆ(nd − ab)
nc − a2 (nd − ab) + βˆ(ne − b2)
(nV3 − bV1) (nc − a2) = nV2 − aV1 − βˆ(nd − ab) (nd − ab) + βˆ(ne − b2) (nc − a2)
(nV3 − bV1) (nc − a2) − (nV2 − aV1) (nd − ab) = βˆ (ne − b2) (nc − a2) − (nd − ab)2
⇒ βˆ = (nV3 − bV1) (nc − a2) − (nV2 − aV1) (nd − ab)
(ne − b2)(nc − a2) − (nd − ab)2 .
10

A preprint - November 26, 2025
Next, we compute the variances and covariances of V1,V2 and V3:
Var (V1) =Var
n ∑︁
t =1
Xt
!
= Var
n ∑︁
t =1
εt
!
= nσ2
Var (V2) =Var
n ∑︁
t =1
t Xt
!
= Var
n ∑︁
t =1
tεt
!
=
n ∑︁
t =1
σ2t2 = cσ2
Var (V3) =Var
n ∑︁
t = k +1
(t − k) Xt
!
=
n ∑︁
t = k +1
(t − k)2σ2 = eσ2
= σ2 (n − k) (n − k + 1) (2(n − k) + 1)
Cov (V1,V2) =Cov
n ∑︁
t =1
Xt ,
n ∑︁
s=1
s Xs
!
=
n ∑︁
t =1
n ∑︁
s=1
sCov (εt , εs)
=
n ∑︁
t =1
tσ2 = σ2 n(n + 1)
2 = aσ2
Cov (V1,V3) =Cov
n ∑︁
t =1
Xt ,
n ∑︁
s=k+1
(s − k)Xs
!
=
n ∑︁
t = k +1
n ∑︁
s=k+1
Cov (εt , (s − k)εs)
=
n ∑︁
t = k +1
n ∑︁
s=k+1
(s − k)σ21[s = t]
=σ2
n ∑︁
t = k +1
(t − k) = σ2
n−k ∑︁
e=1
l = bσ2
Cov (V2,V3) = Cov
n ∑︁
t =1
t Xt ,
n ∑︁
s=k+1
(s − k)Xs
!
=
n ∑︁
t = k +1
t
n ∑︁
s=k+1
(s − k)Cov (Xt , Xs)
=
n ∑︁
t = k +1
t (t − k)σ2 = σ2 (n − k) (n − k + 1) 2n + k + 1
6 = dσ2
βˆk = (aV1 − nV2) (ab − dn) − (bV1 − nV3) a2 − cn
(ab − dn)2 − b2 − ne a2 − nc
The numerator of β is denoted as
Num = a(ab − dn)V1 − n(ab − dn)V2 − b a2 − cn V1 + n a2 − cn V3
= a2b − adn − ba2 + bcn V1 + n(dn − ab)V2 + n a2 − cn V3
= (bc − ad)nV1 + (dn − ab)nV2 + a2 − cn nV3,
the denominator of β is denoted as
Dem = (ab − dn)2 − b2 − ne a2 − nc ,
and
βˆk = (bc − ad)n
Dem
V1 + (dn − ab)n
Dem
V2 +
a2 − cn n
Dem
V3
= p1V1 + p2V2 + p3V3.
11

A preprint - November 26, 2025
Var( βˆ) = Var ( p1V1 + p2V2 + p3V3)
= p2
1Var
n ∑︁
t =1
Xt
!
+ p2
2Var
n ∑︁
t =1
t Xt
!
+ p2
3Var
n ∑︁
t = k +1
(t − k) Xt
!
+ 2p1 p2Cov
n ∑︁
t =1
Xt ,
n ∑︁
t =1
t Xt
!
+ 2p1 p3Cov
n ∑︁
t =1
Xt ,
n ∑︁
t = k +1
(t − k) Xt
!
+ 2p2 p3Cov
n ∑︁
t =1
t Xt ,
n ∑︁
t = k +1
(t − k) Xt
!
=p2
1 · nσ2 + p2
2 · cσ2 + p2
3 · eσ2 + 2p1 p2 · aσ2 + 2p1 p3 · bσ2 + 2p2 p3 · dσ2
=σ2 np2
1 + cp2
2 + ep2
3 + 2a p1 p2 + 2b p1 p3 + 2dp2 p3
= σ2
Dem2 n3 (bc − ad)2 + c(dn − ab)2n2 + e a2 − cn
2
n2
+ 2an2(bc − ad)(dn − ab) + 2bn2(bc − ad) a2 − cn
+2dn2 (dn − ab) a2 − cn
i
With Mathematica, we find
Var( βˆk ) = σ2 Vn
Vd
where
Vn = 1
864 11k2 − 32k3 + 33k4 − 14k5 + 2k6 n5
+1
864 −23k + 84k2 − 98k3 + 43k4 − 6k5 n6
+1
864 12 − 72k + 91k2 − 12k3 − 27k4 + 14k5 − 2k6 n7
+1
864 20 − 18k − 73k2 + 96k3 − 43k4 + 6k5 n8
+1
864 −8 + 80k − 102k2 + 44k3 − 6k4 n9
+1
864 −24 + 41k − 11k2 + 2k3 n10
+1
864 (−4 − 8k)n11
+1
216
n12,
12

A preprint - November 26, 2025
and
Vd = 121k4 − 704k5 + 1750k6 − 2420k7 + 2029k8 − 1052k9 + 328k10 − 56k11 + 4k12 n4
5184 + −506k3 + 3320k4 − 9050k5 + 13406k6 − 11796k7 + 6302k8 − 1992k9 + 340k10 − 24k11 n5
5184 + 793k2 − 6216k3 + 19208k4 − 31026k5 + 28848k6 − 15868k7 + 5061k8 − 860k9 + 60k10 n6
5184 + −552k + 5768k2 − 21322k3 + 38490k4 − 38010k5 + 21350k6 − 6788k7 + 1144k8 − 80k9 n7
5184 + 144 − 2648k + 12966k2 − 27138k3 + 28332k4 − 15682k5 + 4782k6 − 800k7 + 60k8 n8
5184 + 480 − 4048k + 10464k2 − 10940k3 + 4892k4 − 1116k5 + 196k6 − 24k7 n9
5184 + 496 − 1840k + 1113k2 + 1082k3 − 715k4 + 100k5 + 4k6 n10
5184 + 64 + 568k − 1384k2 + 512k3 − 80k4 n11
5184 + −144 + 392k − 24k2 + 16k3 n12
5184 + (−32 − 64k)n13
5184
+ n14
324
Suppose n → ∞, k → ∞, and k
n = t. Dividing both the numerator and the denominator of Var(βˆk) by n16, we obtain
Var(βˆk) = 3
n3
k n
3
1− k
n
3
+ o(n−1)
k n
6
1− k
n
6
+ o(n−1)
.
13

A preprint - November 26, 2025
To compute the covariance of of βˆk, βˆl, k < l for the jointpoint model, i.e., Cov βˆk, βˆl , k < l, we first represent them as
βˆk = p1V1 + p2V2 + p3V3
where V1 =
n ∑︁
t =1
Xt , V2 =
n ∑︁
t =1
t Xt , V3 =
n ∑︁
t = k +1
(t − k) Xt
βˆl = q1W1 + q2W2 + q3W3
where W1 =
n ∑︁
t =1
Xt , W2 =
n ∑︁
t =1
t Xt , W3 =
n ∑︁
t =l+1
(t − l) Xt
Note V1 = W1, V2 = W2. The coefficients p1, p2, p3, q1, q2, q3 depend on k, and l. Here,
Cov (Jk, Jl) = Cov βˆk, βˆl
√︃
Var βˆk Var βˆl
,
Var βˆk and Var βˆl were previously computed.
Cov βˆk , βˆl = Cov ( p1V1 + p2V2 + p3V3, q1W1 + q2W2 + q3W3)
= p1q1 Cov (V1, W1)
| {z }
(1)
+p1q2 Cov (V1, W2)
| {z }
(2)
+p1q3 Cov (V1, W3)
| {z }
(3)
+ p2q1 Cov (V2, W1)
| {z }
(4)
+p2q2 Cov (V2, W2)
| {z }
(5)
+p2q3 Cov (V2, W3)
| {z }
(6)
+ p3q1 Cov (V3, W1)
| {z }
(7)
+p3q2 Cov (V3, W2)
| {z }
(8)
+p3q3 Cov (V3, W3)
| {z }
(9)
.
(1) = Cov (V1,W1) = Cov (V1,W1) = Cov
n ∑︁
t =1
Xt ,
n ∑︁
t =1
Xt
!
= Var
n ∑︁
t =1
Xt
!
= nσ2
(2)Cov (V1,W2) = Cov (V1,V2) = Cov
n ∑︁
t =1
Xt ,
n ∑︁
t =1
t Xt
!
=
n ∑︁
t =1
tσ2 = σ2 n(n + 1)
2 = a · σ2
(3) = Cov (V1,W3) = Cov
n ∑︁
t =1
Xt ,
n ∑︁
t =l+1
(t − l) Xt
!
= σ2
n ∑︁
t =l+1
(t − l) = σ2 (n − l) (n − l + 1)
2
(4) = Cov (V2, W1) = Cov (V2,V1) = Cov (V1,V2) = Cov
n ∑︁
t =1
Xt ,
n ∑︁
t =1
t Xt
!
= σ2 n(n + 1)
2 = a · σ2
Note that (2) and (4) are the same.
14

A preprint - November 26, 2025
(5) = Cov (V2,W2) = Cov (V2,V2) = Var (V2) = Var
n ∑︁
t =1
t Xt
!
=
n ∑︁
t =1
t2σ2 = σ2 n(n + 1) (2n + 1)
6 = c · σ2
(6) = Cov (V2,W3) = Cov
n ∑︁
t =1
t Xt ,
n ∑︁
t =l+1
(t − l) Xt
!
=
n ∑︁
t =l+1
t (t − l)σ2 = σ2 (n − l) (n − l + 1) (2n + l + 1)
6
(7) = Cov (V3, W1) = Cov (V3,V1) = Cov (V1,V3) = Cov
n ∑︁
t =1
Xt ,
n ∑︁
t = k +1
(t − k) Xt
!
= σ2
n ∑︁
t = k +1
(t − k) = σ2 (n − k) (n − k + 1)
2 = b · σ2
(8) = Cov (V3, W2) = Cov (V3,V2) = Cov (V2,V3) = Cov
n ∑︁
t =1
t Xt ,
n ∑︁
t = k +1
(t − k) Xt
!
= σ2
n ∑︁
t = k +1
t (t − k) = σ2 (n − k) (n − k + 1) (2n + k + 1)
6 = d · σ2
(9) = Cov (V3,W3) = Cov
n ∑︁
t = k +1
(t − k) Xt ,
n ∑︁
t =l+1
(t − l)Xs
!
k <l
= Cov
n ∑︁
t = k +1
(t − k) Xt ,
n ∑︁
s=l+1
(s − l)Xs
!
=
n ∑︁
s=l+1
(s − k) (s − l)Cov (Xs, Xs) = σ2
n ∑︁
s=l+1
(s − k)(s −l)
= σ2
n ∑︁
s=l+1
(s −l +l − k)(s −l)−
= σ2
n ∑︁
s=l+1
(s − l)2 + (l − k)(s −l)
= σ2
"n ∑︁
s=l+1
(s −l)2 +tl − k
!n ∑︁
s=l+1
(s −l)
#
= σ2
" n−l ∑︁
s=1
s2 + (l − k)
n−l ∑︁
s=1
s
#
= σ2 (n − l) (n − l + 1) (2n − 2l + 1)
6 + (l − k) (n − l)(n − l + 1)
6
= σ2 [n − l) (n − l + 1) 1
6 (2n − 2l + 1) + 1
2 (l − k)
Here, we re-define the following constants (which were defined when computing the variance), but b, d, e depend on the changepoint location k and l
15

A preprint - November 26, 2025
a=
n ∑︁
t =1
t= 1
2
n(n + 1)
bk =
n ∑︁
t = k +1
(t − k) = (n − k)(n − k + 1)
2
bl =
n ∑︁
t =l+1
(t − l) = (n − l)(n − l + 1)
2
c=
n ∑︁
t =1
t2 = 1
6
n(n + 1)(2n + 1)
dk =
n ∑︁
t = k +1
(t − k)t = 1
6 (n − k)(n − k + 1)(2n + k + 1)
dl =
n ∑︁
t =l+1
(t − l)t = 1
6 (n − l)(n − l + 1)(2n + l + 1)
ek =
n ∑︁
t = k +1
(t − k)2 = 1
6 (n − k)(n − k + 1)(2n − 2k + 1)
el =
n ∑︁
t =l+1
(t − l)2 = 1
6 (n − l)(n − l + 1)(2n − 2l + 1)
Combined with all these notations, we get
Cov βˆk , βˆl = p1q1 · (n6)2 + p1q2 · aσ2 + p1q3 · 1
2 (n − l) (n − l + 1)σ2
+ p2q1 · aσ2 + p2q2 · cσ2 + p2q3 · 1
6 (n − l) (n − l + 1) (2n + l + 1)σ2
+ p3q1 · bσ2 + p3q2 · dσ2 + p3q3 · (n − l) (n − l + 1) 1
6 (2n − 2l + 1) + 1
2 (l − k) σ2
Next, we need to deal p′
i s and qi ’s. (We need to go back to the definition of p′
i s in the variance calculation)
Let (∗) denote the denominator for all pi ’s at such that
(∗) = (abk − ndk )2 − b2
k − nek a2 − nc
Let (Δ) denote the denominator for all qi ’s at l.
(Δ) = (abl − ndl)2 − bl2 − nel a2 − nc .
16

A preprint - November 26, 2025
so
p1q1 = 1
(∗) (Δ) (bk c − adk) n (bl c − adl) n
p1q2 = 1
(∗) (Δ) (bk c − adk) n (dln − abl) n
p1q3 = 1
(∗) (Δ) (bk c − adk) n a2 − cn n
p2q1 = 1
(∗) (Δ) (dk n − abk) n (bl c − adl) n
p2q2 = 1
(∗) (Δ) (dk n − abk) n (dln − abl) n
p2q3 = 1
(∗) (Δ) (dk n − abk) n a2 − cn n
p3q1 = 1
(∗) (Δ) a2 − cn n(blc − adl)n
p3q2 = 1
(∗) (Δ) a2 − cn n(dln − abl)n
p3q3 = 1
(∗) (Δ) a2 − cn n a2 − cn n
By substituting those notations into Mathementica, we find
Cov( βˆk, βˆl) = Cn
Cd
, (8)
where
Cn = 1
864 (11kl − 16k2l + 5k3l − 16kl2 + 23k2l2 − 7k3l2 + 5kl3 − 7k2l3 + 2k3l3)n5
+1
864 (−11k + 16k2 − 5k3 − 12l + 52kl − 43k2l + 11k3l + 16l2 − 46kl2 + 21k2l2
− 3k3l2 − 4l3 + 11kl3 − 3k2l3)n6
+1
864 (12 − 36k + 20k2 − 4k3 − 36l + 51kl − 2k2l − 5k3l + 20l2 − 2kl2 − 17k2l2
+ 7k3l2 − 4l3 − 5kl3 + 7k2l3 − 2k3l3)n7
+1
864 (20 − 10k − 12k2 + 6k3 − 8l − 49kl + 40k2l − 11k3l − 12l2 + 46kl2 − 21k2l2
+ 3k3l2 + 4l3 − 11kl3 + 3k2l3)n8
+1
864 (−8 + 40k − 20k2 + 4k3 + 40l − 62kl + 18k2l − 20l2 + 18kl2 − 6k2l2 + 4l3)n9
+1
864 (−24 + 21k − 4k2 − k3 + 20l − 3kl + 3k2l − 4l2)n10
+1
864 (−4 − 4k − 4l)n11
+1
216
n12
Cd = 1
5184 (121k2l2 − 352k3l2 + 363k4l2 − 154k5l2 + 22k6l2 − 352k2l3 + 1024k3l3
− 1056k4l3 + 448k5l3 − 64k6l3 + 363k2l4 − 1056k3l4 + 1089k4l4
− 462k5l4 + 66k6l4 − 154k2l5 + 448k3l5 − 462k4l5 + 196k5l5 − 28k6l5
+ 22k2l6 − 64k3l6 + 66k4l6 − 28k5l6 + 4k6l6)n4
+1
5184 (−253k2l + 736k3l − 759k4l + 322k5l − 46k6l − 253kl2 + 1848k2l2 − 3766k3l2
17

A preprint - November 26, 2025
+ 3245k4l2 − 1242k5l2 + 168k6l2 + 736kl3 − 3766k2l3 + 6272k3l3
− 4610k4l3 + 1564k5l3 − 196k6l3 − 759kl4 + 3245k2l4 − 4610k3l4
+ 2838k4l4 − 800k5l4 + 86k6l4 + 322kl5 − 1242k2l5 + 1564k3l5
− 800k4l5 + 168k5l5 − 12k6l5 − 46kl6 + 168k2l6 − 196k3l6 + 86k4l6
− 12k5l6)n5
+1
5184 (132k2 − 384k3 + 396k4 − 168k5 + 24k6 + 529kl − 2724k2l + 4558k3l
− 3365k4l + 1146k5l − 144k6l + 132l2 − 2724kl2 + 9300k2l2
− 11980k3l2 + 7044k4l2 − 1932k5l2 + 204k6l2 − 384l3 + 4558kl3
− 11980k2l3 + 12420k3l3 − 5858k4l3 + 1204k5l3 − 88k6l3 + 396l4
− 3365kl4 + 7044k2l4 − 5858k3l4 + 2245k4l4 − 342k5l4 + 12k6l4 − 168l5
+ 1146kl5 − 1932k2l5 + 1204k3l5 − 342k4l5 + 36k5l5 + 24l6 − 144kl6
+ 204k2l6 − 88k3l6 + 12k4l6)n6
+1
5184 (−276k + 1228k2 − 1816k3 + 1176k4 − 352k5 + 40k6 − 276l + 3312kl
− 8845k2l + 9380k3l − 4587k4l + 1006k5l − 82k6l + 1228l2 − 8845kl2
+ 17378k2l2 − 14066k3l2 + 5253k4l2 − 766k5l2 + 22k6l2 − 1816l3
+ 9380kl3 − 14066k2l3 + 8752k3l3 − 2546k4l3 + 292k5l3 − 4k6l3
+ 1176l4 − 4587kl4 + 5253k2l4 − 2546k3l4 + 516k4l4 − 36k5l4 − 352l5
+ 1006kl5 − 766k2l5 + 292k3l5 − 36k4l5 + 40l6 − 82kl6 + 22k2l6
− 4k3l6)n7
+1
5184 (144 − 1324k + 2948k2 − 2616k3 + 1064k4 − 176k5 + 8k6 − 1324l + 7070kl
− 10953k2l + 6976k3l − 1931k4l + 134k5l + 16k6l + 2948l2 − 10953kl2
+ 12252k2l2 − 5734k3l2 + 1085k4l2 − 66k5l2 − 2616l3 + 6976kl3
− 5734k2l3 + 2328k3l3 − 350k4l3 + 12k5l3 + 1064l4 − 1931kl4
+ 1085k2l4 − 350k3l4 + 36k4l4 − 176l5 + 134kl5 − 66k2l5 + 12k3l5 + 8l6
+ 16kl6)n8
+1
5184 (480 − 2024k + 2464k2 − 1168k3 + 160k4 + 32k5 − 8k6 − 2024l + 5536kl
− 4302k2l + 1164k3l + 98k4l − 48k5l + 2464l2 − 4302kl2 + 2244k2l2
− 688k3l2 + 66k4l2 − 1168l3 + 1164kl3 − 688k2l3 + 176k3l3 − 12k4l3
+ 160l4 + 98kl4 + 66k2l4 − 12k3l4 + 32l5 − 48kl5 − 8l6)n9
+1
5184 (496 − 920k + 292k2 + 176k3 − 148k4 + 24k5 − 920l + 529kl + 365k2l
− 270k3l + 48k4l + 292l2 + 365kl2 + 121k2l2 − 22k3l2 + 176l3 − 270kl3
− 22k2l3 + 4k3l3 − 148l4 + 48kl4 + 24l5)n10
+1
5184 (64 + 284k − 364k2 + 168k3 − 24k4 + 284l − 656kl + 88k2l − 16k3l − 364l2
+ 88kl2 + 168l3 − 16kl3 − 24l4)n11
+1
5184 (−144 + 196k − 44k2 + 8k3 + 196l + 64kl − 44l2 + 8l3)n12
+1
5184 (−32 − 32k − 32l)n13
+1
324
n14
18

A preprint - November 26, 2025
References
Julian M. Alston, Jason M. Beddow, and Philip G. Pardey. Persistence Pays: U.S. Agricultural Productivity Growth and the Benefits from Public R&D Spending. Springer, New York, 2010.
Claudie Beaulieu, Colin Gallagher, Rebecca Killick, Robert Lund, and Xueheng Shi. A recent surge in global warming is not detectable yet. Nature Communications Earth & Environment, 5(1):576, 2024.
Patrick Billingsley. Convergence of Probability Measures. John Wiley & Sons, 2013.
Loren Brandt and Thomas G. Rawski. China’s Great Economic Transformation. Cambridge University Press, 2008.
Miklós Csörgö and Lajos Horváth. Limit Theorems in Change-point Analysis. Wiley, 1997.
Richard A. Davis, Thomas C.M. Lee, and Gabriel A. Rodriguez-Yam. Structural break estimation for nonstationary time series models. Journal of the American Statistical Association, 101(473):223–239, 2006.
Daniel Gillis and Brandon PM Edwards. The utility of joinpoint regression for estimating population parameters given changes in population structure. Heliyon, 5(11), 2019.
Douglas M Hawkins, Peihua Qiu, and Chang Wook Kang. The changepoint model for statistical process control. Journal of Quality Technology, 35(4):355–366, 2003.
Lajos Horváth and Gregory Rice. Change Point Analysis for Time Series. Springer, 2024.
Venkata K Jandhyala and Ian B MacNeill. Iterated partial sum sequences of regression residuals and tests for changepoints with continuity constraints. Journal of the Royal Statistical Society Series B: Statistical Methodology, 59(1):147–156, 1997.
Steven A Julious. Inference and estimation in a changepoint regression problem. Journal of the Royal Statistical Society: Series D (The Statistician), 50(1):51–61, 2001.
Hyune-Ju Kim, Huann-Sheng Chen, Jeffrey Byrne, Bill Wheeler, and Eric J Feuer. Twenty years since joinpoint 1.0: Two major enhancements, their justification, and impact. Statistics in Medicine, 41(16):3102–3130, 2022.
Robert B Lund, Claudie Beaulieu, Rebecca Killick, QiQi Lu, and Xueheng Shi. Good practices and common pitfalls in climate time series changepoint techniques: A review. Journal of Climate, 36(23):8041–8057, 2023.
Clifford Qualls. The law of the iterated logarithm on arbitrary sequences for stationary Gaussian processes and Brownian motion. The Annals of Probability, 5(5):724–739, 1977.
Michael W Robbins, Colin M Gallagher, and Robert B Lund. A general regression changepoint test for time series data. Journal of the American Statistical Association, 111(514):670–683, 2016.
R.S. Vose, B. Huang, X. Yin, D. Arndt, D.R. Easterling, J.H. Lawrimore, M.J. Menne, A. Sanchez-Lugo, and H.M. Zhang. Implementing full spatial coverage in NOAA’s global temperature analysis. Geophysical Research Letters, 48(4):e2020GL090873, 2021.
19

---

## Processing Information

- **Processing Library:** Zotero PDFWorker
- **Processing Date:** 2026-02-10T18:17:00.104Z
- **Text Length:** 32832 characters
- **Success:** Text extraction completed
- **PDF Library Used:** Zotero PDFWorker
- **Pages Processed:** 19 of 19
