# PDF Document: Lund and Shi - 2025 - Single Changepoint Procedures.pdf

**File Path:** Lund and Shi - 2025 - Single Changepoint Procedures.pdf

**Processed Date:** 2026-02-10T18:14:56.430Z

**File Size:** 369.43 KB

**Total Pages:** 20

**Extracted Pages:** 20

**PDF Library:** Zotero PDFWorker

**Attachment Item ID:** 3475

**Title:** Single Changepoint Procedures

**Collection:** Large Files > Random Papers

---

## Extracted Text Content

Single Changepoint Procedures
Robert Lund
Department of Statistics, University of California, Santa Cruz rolund@ucsc.edu
Xueheng Shi
Department of Statistics, University of Nebraska-Lincoln shixueheng@gmail.com
November 25, 2025
Abstract
Single changepoint tests have become a staple check for homogeneity of a climate time series, suggesting how climate has changed should non-homogeneity be declared. This paper summarizes the most prominent single changepoint tests used in today’s climate literature, relating them to one and other and unifying their presentations. Asymptotic quantiles for the individual tests are presented. Derivations of the quantiles are given, enabling the reader to tackle cases not considered within. Our work h-
ere studies both mean and trend shifts, covering the most common settings arising in climatology. SOI and global temperature series are analyzed within to illustrate the techniques.
1 Introduction
Structural changes commonly occur in climate time series. These changes can arise in the series’ mean, variance, autocorrelation, or general marginal distributions. In climatology, structural changes called changepoints are often induced by artificial means such as station relocations and/or instrumentation changes. Changepoints can also naturally arise [Rodionov, 2005]. Mitchell [1953] estimates that US climate stations average about six relocations or gauge changes per century, about half of whi-
ch induce mean shift changepoints. Statistical trend analyses are usually distrusted on climate data that has not been adjusted for the effects of changepoints; Lund and Reeves [2002] and Reeves et al. [2007] show what can go wrong. In the last two decades, the climate community has recognized the importance of changepoints, and the changepoint homogeneity literature has now exploded.
Many distinct changepoint methods have been proposed by researchers. While most of these have merit, others are off base. Unfortunately, changepoint statistics, which are typically based on maximums of dependent quantities, are some of the more technically challenging statistics to quantify; analysis mistakes are easily made. Our intent here is to present an overview of single changepoint analyses in climatology. We consider changes in mean and/or trend, and link the various statistics to one and -
other en route. Our treatment contains most of the settings that arise in practice. Asymptotic quantiles of the various statistics are presented.
Single changepoint techniques were introduced in Page [1955], who considered testing for a shift in the mean of a process occurring at an unknown time. Single changepoint mean shift asymptotic distributions were rigorously quantified in MacNeill [1974]. Mean shift reviews include Reeves et al. [2007], Shi et al. [2022], Wang et al. [2020], and Lund et al. [2023]. Staple mean shift tests include cumulative sum (CUSUM) procedures and likelihood ratio tests (LRTs) (also called a standard normal homog-
eneity test (SNHT)). Other mean shift references in climatology include Alexandersson [1986], Peterson et al. [1998], Caussinus and Mestre [2004], and Wang et al. [2007] — this list is necessarily incomplete.
Beyond shifts in process means, changepoints also occur in series with trends. For one example, Beaulieu et al. [2024] consider whether or not global warming has accelerated recently by examining changes in slopes through changepoint methods. After our mean shift treatment, this paper moves to changepoint tests for linear trend slopes. Several settings arise here, depending on whether or not one demands continuity of the fitted regression response at the changepoint time. These cases are enumerate-
d and their analyses are presented.
arXiv:2511.17870v1 [stat.ME] 22 Nov 2025

A preprint - November 25, 2025
No climate manuscripts have previously quantified the asymptotic null quantiles of single changepoint methods in any systematic manner. Even statistical books on changepoints such as Csörgo and Horváth [1997] focus on specific tests (in this case, likelihood ratios). Here, an attempt is made to provide reliable null hypothesis quantiles for many of the common single changepoint statistics that the climatologist may encounter. Our intent is to construct a “one-stop shopping superstore” for the clim-
ate changepoint community. While some recommendations on superior and inferior techniques are made en route, comparison has been dealt with elsewhere [Shi et al., 2022, Lund et al., 2023] and our focus is more on completeness.
Despite our over-arching intent, some concessions on scope need to be made up front. First and foremost, we do not delve into multiple changepoints. The tests considered here are at most one changepoint (AMOC) procedures. Here, the null statistical hypothesis is that the series is homogeneous (no changepoints) and is assessed against the alternative hypothesis that one changepoint occurs at an unknown time. While many researchers devise multiple changepoint procedures from AMOC tests via a procedu-
re known as binary segmentation, binary segmentation is arguably the worst way to handle multiple changepoint problems [Shi et al., 2022, Lund et al., 2023]. Second, our quantiles are for Gaussian series only; non-Gaussian marginal distributions can be handled as in Lund et al. [2025], but this is beyond our scope here. Finally, we consider independent observations only; mistakes are easily made in changepoint analyses when autocorrelation between observations is ignored [Lund et al., 2023].
The rest of this paper proceeds as follows. Section 2 considers mean shift detection, perhaps the most common changepoint analysis. Section 3 moves to linear trend shifts. Section 4 presents two examples showing how the tests work and Section 5 closes with discussion.
2 Mean Shift Changepoint Tests
Perhaps the simplest changepoint test discerns whether or not the series has a single mean shift. The shift occurs at an unknown time; should the time of the changepoint be known apriori, the shift time is called a breakpoint and intervention methods are the appropriate analysis tools.
Given a time series {Xt }t=n
t=1 , the regression model for a mean shift changepoint occurring at the unknown time k is
Xt = μ + εt , for 1 ≤ t ≤ k,
μ + Δ + εt , for k + 1 ≤ t ≤ n, . (1)
in (1), μ is an unknown location parameter, Δ is the magnitude of the time k mean shift, and {εt }t=n
t=1 is an independent
and identically distributed Gaussian white noise having mean zero and variance σ2. The null (H0) and alternative (HA) hypotheses for a single changepoint are H0 : Δ = 0 versus HA : Δ ≠ 0. In this section, no trend is assumed to exist.
2.1 Zmax and CUSUM Statistics
Suppose that the changepoint was apriori known to occur at time k and that Var(Xt ) ≡ σ2 is also known. Testing whether the two segment means are equal can be accomplished with a Z-based statistical test. A two-sample Z test statistic at index k is
Zk = X1:k − X k+1:n
√︃
Var( X1:k − X k+1:n)
, (2)
where X1:k = k −1 Ík
t=1 Xt and X k+1:n = (n − k)−1 Ín
t=k+1 Xt denote the sample means of {Xt } before and after time k.
One rejects mean equality if |Zk | is too large to be explained by chance variation.
Since {Xt } is Gaussian and we have standardized the statistic by its standard deviation, Zk has a standard normal distribution (mean zero and unit variance) for each k. Simple calculations give
Var( X1:k − X k+1:n) = σ2 1
k
+1
n−k
= σ2 n
k(n − k) .
In particular, one rejects equality of segment means with confidence 95% if
|Zk | = | X1:k − X k+1:n |
σ
√︃
1
k+ 1
n−k
> 1.96.
2

A preprint - November 25, 2025
In practice, σ2 is usually unknown. Its estimated value can be used in place of it (as we do here) without altering any future asymptotic results. This estimate should be calculated under the null hypothesis:
ˆσ2 =
Ín
t=1 ( Xt − X ̄1:n)2
n−1
. (3)
Cumulative sum (CUSUM) statistics and processes are often used in changepoint analyses. At index k, the CUSUM statistic is
CUSUMk :=
Ík
t=1 Xt − k
n
Ín
t=1 Xt
√
n
.
When the changepoint time is unknown, the time where the maximal discrepancy between the two segments occurs is used as the estimate of the changepoint time. Hence, a statistic to detect a mean shift at an unknown time becomes
Zmax = max
1≤k<n
|Zk | = max
1≤k<n
|CUSUMk |
√︂
k
n 1− k
n
. (4)
The second equality in (4) follows from some elementary algebraic manipulations in the Appendix. Since Zk accounts for a differing number of observations before and after time k, Zmax does too.
To assess whether a mean shift changepoint occurs at an undocumented time, one needs to derive the distribution of Zmax. This is typically done asymptotically and requires advanced probability theory involving weak convergence in function spaces [Billingsley, 2013]. The reader is warned that mistakes have been made in pursuit of this objective. The ideas are now presented in an elementary manner. One can quantify the asymptotics in terms of {Zk } or {CUSUMk }; we choose the latter since this is th-
e traditional statistics route.
From the assumed normality, the Appendix derives the Gaussian relationship
CUSUMk ∼ N 0, σ2 k
n
1− k
n
and the covariance
Cov CUSUMk1 , CUSUMk2 = σ2 k1
n
1− k2
n
, 1 ≤ k1 ≤ k2 ≤ n. (5)
This allows us to transition to a Gaussian process in continuous time. First, if k depends on the sample size n such
that k/n → t ∈ (0, 1) as n → ∞, then CUSUMk
→D N (0, t (1 − t)), where the D denotes convergence in distribution as n → ∞. For bivariate pairs (CUSUMk1 , CUSUMk2 ) with k1/n → t ∈ (0, 1) and k2/n → s ∈ (0, 1) with t ≤ s, the covariance in (5) yields CUSUMk1 CUSUMk2
−D→ N2
0
0 , σ2 t(1 − t) t(1 − s)
t(1 − s) s(1 − s) ,
From this, some advanced probability theory shows that {B(t)}t=1
t=0 defined by B(t) := limn→∞ CUSUMk converges to
a Gaussian process with mean E [B(t)] ≡ 0, Var(B(t)) = σ2t (1 − t), and Cov(B(t), B(s)) = σ2t (1 − s) for 0 ≤ t ≤ s ≤ 1. This is the famous Brownian bridge process of empirical statistics [Van Der Vaart and Wellner, 1996]. A standard (σ = 1) Brownian bridge can be constructed from the classical standard Brownian motion process {W (t)}t=1
t=0 via
B(t) = W (t) − tW (1), 0 ≤ t ≤ 1.
We now deal with the maximum and absolute value in (4). Because the maximum of the absolute value of a function defined over [0,1] is a continuous operation (over the space of continuous functions), a result called Donsker’s Theorem in the probability literature allows us to assert that
Zmax
−D→ sup
t ∈ (0,1)
|B(t)|
√︁
t (1 − t)
(6)
as n → ∞. There is, however, one important issue.
Technically, the above supremum, taken over t ∈ (0, 1), is infinite; that is, the limiting distribution of Zmax is infinite
with probability one. This follows from the fact that sup0<t<δ |W (t)|/√
t is infinite for any δ > 0, which in turn follows from the law of the iterated logarithm for random walk processes and Brownian motion [Billingsley, 2013, Horváth
3

A preprint - November 25, 2025
and Rice, 2024]. The mathematics is telling us that when t is close to zero or unity, insufficient observations lie in one of the segments to reliably make conclusions. To proceed, we set a small truncation (cropping) threshold δ > 0 and examine
Zmax, δ := max
k:k/n∈ ( δ,1− δ)
|Zk |.
This “cropped" Zmax statistic is finite with probability one:
Zmax, δ
−D→ sup
t ∈( δ,1− δ)
|B(t)|
√︁
t (1 − t)
.
Quantiles for Zmax, δ for δ ∈ {0.01, 0.05, 0.10} are listed in Table 1.
The CUSUM statistic itself can also be used as a mean shift detector. One simply examines max1≤k<n |CUSUMk | as the changepoint statistic; the argument maximizing |CUSUMk | is the estimate of the changepoint time. There is no need to crop CUSUM values at the two boundaries; indeed, as n → ∞,
max
1≤k<n
|CUSUMk |
ˆσ
−D→ sup
t ∈ (0,1)
|B(t)|,
which is finite with probability one. Table 1 lists quantiles for max1≤k<n |CUSUMk |/ ˆσ. An improvement to the CUSUM test, in the form of superior detection power, sums CUSUM statistics over all times to assess whether a changepoint is present. This test, dubbed a “SCUSUM test", uses
SCUSUM = 1
n
n ∑︁
k=1
CUSUM2
k
ˆσ2
for the changepoint existence statistic. Note that CUSUM and SCUSUM are distinct acronyms. The time of the changepoint is still estimated as the location k that maximizes |CUSUMk |.
The SCUSUM test won the single changepoint comparison competition in Shi et al. [2022], was developed in Kirch [2006], and has good false detection properties and superior detection power. To quantify its asymptotic distribution, the continuous mapping theorem of probability theory [Billingsley, 2013] shows that
SCUSUM →D
∫1
0
B2 (t)dt (7)
as n → ∞ under the null hypothesis of no changepoints. Equation (7) (or simulation) can be used to compute quantiles of the test, which are reported in Table 1.
2.2 Likelihood Ratio Tests (LRT) and Standard Normal Homogeneity Tests (SNHT)
A staple statistical procedure is the LRT, which compares how likely the series is under the null and alternative hypotheses. Let Lk denote the Gaussian likelihood of {Xt }t=n
t=1 when a changepoint occurs at time k and LH0 be the
Gaussian likelihood of the series when no mean shift exists. The LRT statistic for a changepoint at time k is
Λ
k = supμ, σ2 LH0
supμ,Δ, σ2 L Hk
. (8)
Here, supμ, σ2 LH0 uses the parameters μ and σ2 that maximize the likelihood when H0 is true and supμ,Δ, σ2 LHk uses
the μ, Δ, and σ2 that maximize the likelihood when HA is true and the shift time is known as k. Homogeneity is rejected in favor of a changepoint at time k if Λk is sufficiently small in a statistical sense, the “smallness threshold" depending on the desired statistical confidence.
Since k is unknown, a LRT rejects homogeneity when min1≤k<n Λk is small enough. This leads to rejecting homogeneity when lmax := max
1≤k<n
−2 ln(Λk)
is too large to be explained by chance variation. To compute the LRT statistic explicitly, we need to derive supμ,Δ,σ2 LHk and supμ, σ2 LH0 . The Appendix establishes
sup
μ,Δ, σ2
LHk = (2π)−n/2 ( ˆσ2
Hk
)− n
2 exp(−n/2), sup
μ, σ2
LH0 = (2π)−n/2 ( ˆσ2
H0 ) − n
2 exp(−n/2)
4

A preprint - November 25, 2025
from the normal distribution governing the observations, where
ˆσ2
Hk = 1
n
k ∑︁
t =1
( Xt − X ̄1:k)2 +
n ∑︁
t = k +1
( Xt − X ̄k+1:n)2
!
, ˆσ2
H0 = 1
n
k ∑︁
t =1
( Xt − X ̄1:n)2.
Here, ˆσ2
Hk and ˆσ2
H0 are the likelihood estimate of σ2 when a mean shift occurs at time k (compare to (3)). Using these
in (8) shows that homogeneity is rejected when
lmax = n max
1≤k<n
ln
ˆσ2
H0
ˆσ2
Hk
!
is too large (the small/large direction shifts after taking a negative logarithm) to be explained by chance variation. The rejection threshold is set according to the desired statistical confidence.
To make conclusions, the asymptotic distribution of lmax is needed. Csörgo and Horváth [1997] show that under H0, for every t, the extreme value probability law
lim
n→∞ P
√︁
2lmax ln(ln(n)) ≤ t + 2 ln(ln(n)) + 1
2 ln(ln(ln(n))) − ln(√
π) = e−2e−t
(9)
holds. Equation (9) allows us to compute p-values for LRTs. A caveat is made: the convergence rate in (9) is quite slow, implying that LRTs require a large sample size to become trustable.
A related climatological staple test for a mean shift is the SNHT of Alexandersson [1986]. Assuming unit variance data, the SNHT statistic at index k is
SNHTk = k X
2
1:k + (n − k) X
2
k+1:n
and the test statistic for the existence of a changepoint is max1≤k<n SNHTk.
The Appendix relates the SNHT to the LRT by showing that SNHTk = C − 2 ln(Λk) for some constant C (this constant depends on the data). Hence, the SNHT is also a Gaussian LRT and the SNHT and the LRT are equivalent tests when the process variance is unity. SNHT critical values are obtained by Monte Carlo simulations for different sample sizes [Khaliq and Ouarda, 2007]. However, the assumption of a unit variance is unrealistic in practice and influences critical values; perhaps more problematic, est-
imating σ2 (and then scaling the data by it to make a unit variance series) when changepoints exist can be problematic.
2.3 Comments
It would be shortsighted not to mention U-statistics. Single changepoint statistics are generally two-sample comparisons, measuring discrepancies before and after the changepoint time. As such, many changepoint statistics can be written in the form of U-statistics. A U-statistic for the candidate changepoint time k has the general form
Uk :=
k ∑︁
i=1
n ∑︁
j = k +1
h(Xi, X j ), 1 ≤ k < n,
where h(·, ·) is a real-valued function called a kernel. Common choices of h are h(x, y) = x − y and h(x, y) = |x − y|r 1(x ≥ y) − |x − y|r 1(x < y) for continuous data (r > 0 is a user-specified parameter), and h(x, y) = 1(x < y) − 1
2
for discrete data. Here, 1(·) is the zero/one indicator, 1(x < y) = 1 if x < y and zero otherwise. A detailed review of U-statistics for changepoint problems can be found in Dehling et al. [2022].
A weighted maximum absolute U-statistic for a single mean shift has the form
Umax := max
1≤k<n
Ík
i=1
Ín
j=k+1 h( Xi, X j )
h k
n 1− k
n
iγ
n3/2
, (10)
where γ ∈ [0, 1/2) is a user-set parameter. The no changepoint null hypothesis is rejected when Umax is too large to be explained by random chance. As the limit distribution of Umax depends on both h and γ, critical values will also depend on them; hence, quantiles will need to be developed for each case. As such, we will not delve further into U-statistics; however, the case where γ = 1/2 and h(x, y) = x − y generally leads to CUSUM statistics (one needs to crop boundaries again).
5

A preprint - November 25, 2025
To connect LRT and CUSUM statistics, scale and square CUSUMk via
λk = CUSUM2
k
k
n 1− k
n
.
Since x2 is continuous in x, the continuous mapping theorem of probability and our previous arguments with Zmax, δ give
max
k:k/n∈ ( δ,1− δ)
λk = Z2
max, δ
→D sup
t ∈( δ,1− δ)
B2 (t)
t (1 − t)
as n → ∞. Robbins [2009] shows that, as n → ∞,
max
k:k/n∈ ( δ,1− δ)
−2 ln(Λk) −−D→ sup
t ∈( δ,1− δ)
B2 (t)
t(1−t) .
Hence, LRTs and squared, scaled CUSUM statistics have the same asymptotic distributions.
Before closing our mean shift treatment, one might seek recommendations given the myriad of test choices. We recommend the SCUSUM test as a reliable high detection power test (See Shi et al. [2022]). We do not recommend using the LRT or SNHT tests without careful consideration.
Table 1: Asymptotic quantiles for mean shift tests.
Test Statistic 90% 95% 97.5% 99.0% 99.9% Zmax,.01 2.970 3.225 3.455 3.730 4.331 Zmax,.05 2.833 3.095 3.331 3.619 4.241 Zmax,.10 2.736 3.007 3.252 3.548 4.171 CUSUM 1.224 1.358 1.480 1.628 1.949 SCUSUM 0.347 0.461 0.581 0.743 1.168
3 Series with Trends
Climate time series often exhibit trends and changes may occur in these trends. For example, changes in linear warming rates in global surface air temperature records were investigated in Beaulieu et al. [2024] to assess global warming’s possible acceleration. In a simple linear regression setting, three distinct cases describe possible shifts: a) a mean shift while maintaining a constant trend slope in both regimes, b) changes in both the intercept and trend slope, and c) a joinpoint model that a-
llows the trend slope to shift, but requires the two regression responses to meet at the changepoint time. All three models have the null hypothesis (no changepoint) form
Xt = μ + αt + εt , t = 1, 2, . . . , n,
where α is the linear trend slope. The next three subsections address these three cases, respectively. Trend shifts are not as extensively investigated (relative to mean shift cases) in the statistics literature; much of our subsequent discourse is new. While it may be tempting to examine Xt − Xt−1 to convert a slope change problem into a mean change problem, doing so induces autocorrelation in the process errors, which is beyond the scope of this paper.
3.1 A Mean Shift under a Constant Trend
An alternative hypothesis regression model allowing for a possible change in the regression intercept at time k while maintaining a constant trend slope obeys
Xt = μ + αt + Δ1[t>k] + εt , t = 1, 2, . . . , n. (11)
Here, Δ is the mean shift size, μ is the location parameter of the regression during the first regime, and α is the linear trend slope, which is assumed the same in both regimes in this setting.
A changepoint test statistic can be developed by mimicking arguments in the previous mean shift section. Under the changepoint free null hypothesis, least squares parameter estimates are
αˆ = αˆ 1:n = 12 Ín
t=1 t ( Xt − X ̄1:n)
n(n + 1) (n − 1) , μˆ = μˆ1:n = X1:n − αˆ 1:nt ̄1:n, (12)
6

A preprint - November 25, 2025
where t ̄1:n = (n + 1)/2 is the average time index in {1, . . . , n}. Should a changepoint exist at time k, estimates of μ from data before and after time k should be statistically different. Estimates of μ from the data in {1, . . . , k } and {k + 1, . . . , n} are
μˆ1:k = X ̄1:k − αˆ 1:nt ̄1:k , μˆk+1:n = X ̄k+1:n − αˆ 1:nt ̄k+1:n,
respectively. The slope α is estimated in (12) from all n data points since it is common to both regimes. The subscripts 1 : k and k + 1 : n indicate which segment the parameters are estimated from.
Define the standardized difference between regime estimators of μ as
D k = μˆk+1:n − μˆ1:k
Var( μˆk+1:n − μˆ1:k )1/2 .
Then Dk should be large when a shift occurs at time k. Since we do not know k, the maximal absolute deviation Dmax = max1≤k<n |Dk | is used as a test statistic. The Appendix derives
Var(μˆk+1:n − μˆ1:k) = 1
n−k
+1
k
σ2 − 3n
(n + 1) (n − 1) σ2,
and
Cov(Dk, Dl ) =
n
(n−k)l − 3n
(n+1) (n−1)
√︃1
n−k + 1
k − 3n
(n+1) (n−1)
√︃1
n−l + 1
l − 3n
(n+1) (n−1)
, 1 ≤ k ≤ l ≤ n.
To conduct asymptotics, let n → ∞ in a manner that k/n → t and l/n → s. Arguing as in the last section provides
D max
−D→ supt ∈ (0,1) |G (t)|, where {G (t)}t=1
t=0 is a Gaussian process with mean E [G (t)] ≡ 0, Var(G (t)) ≡ 1, and
Cov(G (t), G (s)) = t (1 − s) − 3t (1 − t)s(1 − s)
√︁
t (1 − t) − 3t2 (1 − t)2√︁
s(1 − s) − 3s2(1 − s)2
, 0 < t ≤ s < 1.
It is an exercise in probability theory to show that supt ∈ (0,1) |G (t)| = ∞ with probability one (this follows from Slepian’s Lemma [Slepian, 1962] and comparisons to a Brownian bridge process). Because of this, a boundary-truncated version of the test is needed. Specifically, we use Dmax, δ := maxk:δ≤k/n<1− δ |Dk |, as the test statistic, which has the asymptotic behavior
Dmax, δ
−D→ sup
t ∈( δ,1− δ)
|G (t) |
as n → ∞. Asymptotic quantiles for Dmax, δ are shown in Table 2 for several δ.
A different test that does not need to truncate boundaries can be devised from the CUSUM statistics of the last section. Residuals under the null hypothesis of no changepoints are
εˆt = Xt − (μˆ1:n + αˆ 1:nt). t = 1, 2, . . . , n.
A test that CUSUMs the residuals {εˆt } is Hmax := max1≤k<n |CUSUMεˆ,k |, where
CUSUMεˆ,k = 1
ˆσε
√
n
k ∑︁
t =1
εˆt − k
n
n ∑︁
t =1
εˆt
!
= √1
n
k ∑︁
t =1
εˆt , ˆσ2
ε=
Ín
t=1 εˆ2
t
n−2
(we have used that Ín
t=1 εˆt = 0).
The asymptotic properties of Hmax have been quantified in Gallagher et al. [2013]: Hmax
−D→ supt ∈ (0,1) |G (t) | as n → ∞, where {G (t)}t=1
t=0 is a Gaussian process related to a Brownian bridge via
G (t) = B(t) − 6t (1 − t)
∫1
0
B ( x ) dx .
From Gaussian process theory [Ross, 1995], it is known that {G (t)}t=1
t=0 is another Gaussian process with G (0) =
G (1) = 0, mean E [G (t)] ≡ 0 for all t ∈ [0, 1], and covariance function
Cov(G (t), G (s)) = t (1 − s) [1 − 3s(1 − t)], 0 < t ≤ s < 1.
Asymptotic critical values for Hmax are provided in Table 2. It is not necessary to truncate boundaries with this test. One generally prefers this test to the above one when a changepoint exist (or be expected to exist) near the beginning or end of the data record.
7

A preprint - November 25, 2025
3.2 Changes in Both Slope and Intercept
When both the slope and intercept are allowed to change at time k, the regression has the form
Xt = μ1 + α1t + εt , 1 ≤ t ≤ k
μ2 + α2t + εt , k + 1 ≤ t ≤ n
. (13)
This is also called a two-phase regression model [Lund and Reeves, 2002, Wang, 2003].
Because two parameters can change at the changepoint time, the analysis becomes more difficult. An F statistic can be developed as follows. Should k be the changepoint time, an F test (also called a Chow Test [Chow, 1960]) statistic is
Fk = (SSERed − SSEFull)/2
SSEFull/(n − 4) . (14)
Homogeneity of the two segments is rejected when Fk is too large to be explained by chance variation. Here, the sum of squared errors are given by
SSEFull =
k
∑︁
t=1
(Xt − μˆ1 − αˆ 1t)2 +
n
∑︁
t=k+1
(Xt − μˆ2 − αˆ 2t)2 , SSERed =
n
∑︁
t=1
(Xt − μˆRed − αˆ Redt)2 ,
where μˆRed and αˆ Red are estimated under H0:
αˆ Red = 12 Ín
t=1 t ( Xt − X ̄1:n)
n(n + 1) (n − 1) , μˆRed = X1:n − αˆ Redt ̄1:n.
When a changepoint exists at time k, parameters in the two regimes are estimated via
αˆ 1 =
Ík
t=1 t Xt − X1:k
Ík
t=1 (t − t ̄1:k )2 , μˆ1 =X ̄1:k − αˆ 1t ̄1:k
αˆ 2 =
Ín
t=k+1 t Xt − X k+1:n
Ín
t=k+1 t − t k+1:n
2 , μˆ2 =X ̄k+1:n − αˆ 2t ̄k+1:n
(15)
(compare to 12). Since the time of the changepoint is unknown, we take Fmax := max2≤k≤n−1 Fk as the test statistic, rejecting homogeneity when Fmax is too large to be explained by chance variation. As a trend slope cannot be estimated without at least two data points, the above maximum is taken over k ∈ {2, 3, . . . , n − 2, n − 1}.
The asymptotic distribution of Fmax is much harder to derive than our previous asymptotic distributions. Nonetheless, Robbins et al. [2016] identifies it as
Fmax, δ := max
k:δ≤k/n≤1− δ
Fk
−D→ sup
δ≤t ≤1− δ
1
2 Λ(t)′Ω(t) −1Λ(t)
as n → ∞, where Ω(t) = t − 4t2 + 6t3 − 3t4 t2/2 − 2t3 + 7t4/2 − 2t5
t2/2 − 2t3 + 7t4/2 − 2t5 t3/3 − t4 + 2t5 − 4t6/3 ,
and
Λ(t) = κ1 (t) − κ1 (1) (4t − 3t2) − κ2 (1) (−6t + 6t2)
κ2 (t) − κ1 (1) (2t2 − 2t3) − κ2 (1) (−3t2 + 4t3) .
Here, κ1 (t) = W (t), κ2 (t) = tW (t) − ∫ t
0 W (u)du, and {W (t)}t=1
t=0 is standard Brownian motion.
While this limiting distribution is cumbersome, application only requires quantiles, which are presented in Table 2 for several δ. For this test, boundaries must be cropped.
3.3 Joinpoint Models
Models where the regression response in the two phases are constrained to meet are called joinpoint models (also called joinpin). Joinpoint models were used in Beaulieu et al. [2024] to assess whether global warming rates have recently changed. The asymptotics presented here have not been investigated to date in the statistics literature.
8

A preprint - November 25, 2025
One way to write a regression model describing this scenario is
Xt = μ + αt + εt , 1 ≤ t ≤ k,
μ + αt + β(t − k) + εt , k + 1 ≤ t ≤ n. (16)
The estimate of β when a changepoint exists at time k, denoted by βˆk, should be statistically non-zero. Deriving least squares parameter estimators is a non-trivial endeavor, even when k is known. While calculations here become unwieldy, Shi and Lund [2025] provide the representation
βˆk = (bc − ad)n
M
V1 + (dn − ab)n
M
V2 + (a2 − cn)n
M
V3,
where M = (bc − ad)2 − (b2 − ne) (a2 − nc), the three random components are
V1 =
n ∑︁
t =1
Xt , V2 =
n ∑︁
t =1
t Xt , V3 =
n ∑︁
t = k +1
(t − k) Xt ,
and the coefficients are
a=
n ∑︁
t =1
t, b =
n ∑︁
t = k +1
(t − k), c =
n ∑︁
t =1
t2, d =
t ∑︁
t = k +1
(t − k)t, e =
t ∑︁
t = k +1
(t − k)2.
From these, another calculation in Shi and Lund [2025] gives
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
Here, o(n−1) is a sequence of numbers rn such that nrn → 0 as n → ∞.
If time k is a changepoint, then Jk := βˆk/Var(βˆk)1/2 should be large in absolute magnitude (statistically non-zero). Because the time k is unknown, the quantity Jmax = max2≤k≤n−2 |Jk | is used as the test statistic for the existence of a joinpoint changepoint.
To get the asymptotic distribution of Jmax under the null hypothesis of no changepoints, Shi and Lund [2025] derive the limit
lim
n→∞ Cov(Jk, Jl ) = 1
2
(3s − t − 2st)
s(1 − t)
√︄
t(1 − s)
s(1 − t) , 0 ≤ t ≤ s ≤ 1.
Here, k ≤ l and n → ∞ in a manner such that k/n → t and l/n → s.
Arguing as before, we have that Jmax
−D→ supt ∈ (0,1) |G (t)|, where {G (t)}t=1
t=0 is a zero-mean unit-variance Gaussian
process with
Cov(G (t), G (s)) = 3s/2 − t/2 − st
s(1 − t)
√︄
t(1 − s)
s(1 − t) , 0 < t ≤ s < 1.
With this statistic, supt ∈ (0,1) |G (t)| is again infinite. Hence, boundaries must again be truncated and Jmax, δ = maxk:δ<k/n<1− δ |Jk | is used as the changepoint detection statistic. This statistic has the limit
Jmax, δ
−D→ sup
t ∈( δ,1− δ)
|G (t) |,
which is finite with probability one. Asymptotic quantiles for Jmax, δ are reported in Table 2 for several common truncation values of δ.
9

A preprint - November 25, 2025
Table 2: Asymptotic quantiles for trend shift tests.
Test Statistic 90.0% 95.0% 97.5% 99.0% 99.9% Dmax,.01 3.224 3.463 3.679 3.935 4.403 Dmax,.05 3.135 3.378 3.603 3.895 4.403 Dmax,.10 3.082 3.330 3.559 3.834 4.376 Hmax 0.830 0.900 0.962 1.041 1.360 Fmax,.01 6.595 7.444 8.273 9.336 11.866 Fmax,.05 6.166 7.017 7.846 8.907 11.510 Fmax,.10 5.856 6.715 7.536 8.606 11.169 Jmax,.01 2.530 2.795 3.038 3.327 3.964 Jmax,.05 2.380 2.658 2.908 3.207 3.852 Jmax,.10 2.285 2.570 2.827 3.132 3.792
4 Examples
4.1 Example: El-Niño/Southern Oscillation
The Southern Oscillation Index (SOI) is a standardized index that tracks sea level pressure differences between Tahiti and Darwin, Australia. The SOI is one measure of large-scale fluctuations in air pressure occurring between the western and eastern tropical Pacific (i.e., the state of the Southern Oscillation) during El Niño and La Niña episodes. The negative phase of the SOI represents below-normal air pressure at Tahiti and above-normal air pressure at Darwin. Our SOI data can be downloaded fr-
om https://www.ncei.noaa.gov/access/monitoring/enso/soi. We scrutinize a 74-year series of annually averaged SOI values for a possible mean shift. Figure 1 plots the series from 1951 to 2024.
−1 0 1 2
Year
SOI
1960 1970 1980 1990 2000 2010 2020
Figure 1: El Niño annual SOI index.
Table 3 reports our Section 2 statistics and their approximate p-values as extracted from Table 1 and (9)). All statistics favor the no changepoint null hypothesis with p-values exceeding 0.10. The LRT p-value was extracted from (9). Overall, this series appears homogeneous in mean.
10

A preprint - November 25, 2025
Test Statistic Conclusion with confidence 95% p-value bound Zmax (δ = 0.01) 1.655 Accept Homogeneity p ≥ 0.10 Zmax (δ = 0.05) 1.655 Accept Homogeneity p ≥ 0.10 Zmax (δ = 0.10) 1.655 Accept Homogeneity p ≥ 0.10 maxk |CUSUMk | 0.783 Accept Homogeneity p ≥ 0.10 SCUSUM 0.141 Accept Homogeneity p ≥ 0.10 LRT (lmax) 3.836 Accept Homogeneity p = 0.59 Table 3: Results for mean shift changepoint tests.
4.2 Example: Global Temperatures
Our next application moves to trends, scrutinizing the merged Land–Ocean Surface Temperature record from the National Oceanic and Atmospheric Administration (NOAAGlobalTemp v5.1.0.) of Vose et al. [2021] for shifts. This series can be downloaded at the website https://www.ncei.noaa.gov/access/monitoring/climate-at-a-glance/ global/time-series/globe/land_ocean/1/9/1850-2023. Annual anomalies over the 174-year period 18502023 were analyzed for possible slope changes with the methods in Sections 3b) -
and 3c). Figure 2 plots the data.
1850 1900 1950 2000
−0.5 0.0 0.5 1.0
Jmax (k^ = 1970)
Year
Temperature anomaly (°C)
Observed Fitted Changepoint
1850 1900 1950 2000
−0.5 0.0 0.5 1.0
Fmax (k^ = 1976)
Year
Temperature anomaly (°C)
Observed Fitted Changepoint
Figure 2: NOAA annual global temperature anomalies during 1850-2023.
Table 4 summarizes our Jmax and Fmax slope change tests. Parameters are estimated using 1850 as t = 1. Both statistics flag a significant warming rate increase in the 1970s — roughly a ten-fold increase in slopes — presumably attributable to anthropogenic global warming. Continuity constrained and discontinuous fits give the same conclusion, although the estimated changepoint time slightly changes. The estimated piecewise means of the series are plotted against the data in Figure 2 and appear to f-
it the series well. While Table 4 lists the 95th quantile of the test, p-values are extremely small (less than 0.1% in each fit). We comment that the 1970-2023 series subsegment was further analyzed for a trend shift, but nothing significant was found, agreeing with the findings in Beaulieu et al. [2024].
Table 4: Slope change test results with 95% quantiles. All p-values are less than 0.1%.
Test τˆ Test Statistic 95% Quantile Left Intercept Left Slope Right Intercept Right Slope
Jmax 1970 18.759 2.658 -3.739 0.0017 -38.440 0.019 Fmax 1976 175.346 6.835 -3.945 0.0018 -38.239 0.019
5 Discussion and Comments
This paper justified and unified many of the single changepoint techniques for mean and slope shifts used in today’s climate literature. The techniques were related to one and other and a new trend shift test for a joinpoint model was developed. The asymptotic quantiles of the test statistics were reported.
11

A preprint - November 25, 2025
Our treatment is admittedly incomplete. For example, non-parametric changepoint tests were not considered here beyond U-statistics. The interested reader is referred to Wolfe and Schechtman [1984], Carlstein [1988], and Brodsky and Darkhovsky [2013] for further information on non-parametric changepoint tests. Also, only mean and trend shift cases were considered in the paper. Other shift types include changes in series variances/volatilities [Lavielle and Teyssiere, 2007] and marginal distribution-
 shifts [Harchaoui et al., 2008].
One common feature of climate series is autocorrelation. Applying our tests, which were constructed for independent Gaussian series, to autocorrelated series without accounting for autocorrelation, often induces erroneous changepoint conclusions [Robbins et al., 2011, Shi et al., 2022, Lund et al., 2023]. This caution aside, it is usually easy to modify the techniques presented here to account for autocorrelation by pre-whitening the data with estimates of the autocorrelation. This point is discus-
sed in detail in Robbins et al. [2011] and Lund et al. [2023]. The Gaussian assumption is not as important as that of independence, but cannot altogether be eschewed. The asymptotic arguments presented here apply to non-Gaussian independent data if the test statistic for each changepoint time k converges to a normal distribution (which is usually justifiable via the Central Limit Theorem). This said, we do not advocate applying the methods here to exotic non-Gaussian series such as counts or mixtu-
res of discrete and continuous distributions (the latter would arise with the daily precipitation measurements studied in Gallagher et al. [2012]).
A few of the asymptotic distributions in this paper involving Brownian bridges admit closed form expressions. For example,
P sup
t ∈ (0,1)
B(t) > x
!
and P
∫1
0
B2(t)dt > x
can be determined somewhat explicitly when {B(t)}t=1
t=0 is a Brownian bridge process [Horváth and Rice, 2024, Tolmatz,
2002]. Such expressions are convenient for obtaining exact p-values for some changepoint tests. Unfortunately, most of the other changepoint statistics here have asymptotic distributions that are more unwieldy. For these, our tables allow one to bound p-values.
Acknowledgments
Robert Lund thanks National Science Foundation Grant DMS-2113592 for partial support; Xueheng Shi thanks University of Nebraska-Lincoln Grant ARD-2162251011 for partial support.
6 Data Statement
Webpages where the SOI indices and NOAA temperatures analyzed in this paper can be downloaded were listed where they first appeared. R code is available on https://github.com/shixueheng/AMOC.
12

A preprint - November 25, 2025
7 Appendix
7.1 Mean Shift Material
7.1.1 CUSUM Asymptotics
Under H0, Xt
II∼D N(μ, σ2). Then for each k, we have the distributions
n ∑︁
t =1
Xt ∼ N(nμ, nσ2),
k
n
n ∑︁
t =1
Xt ∼ N k μ,
k2
n
σ2 ,
k ∑︁
t =1
Xt ∼ N(k μ, kσ2).
It now follows that Ík
t=1 Xt − k/n
Ín
t=1 Xt has a normal distribution:
Var
k ∑︁
t =1
Xt − k
n
n ∑︁
t =1
Xt
!
= Var
k ∑︁
t =1
Xt
!
+ Var
k
n
n ∑︁
t =1
Xt
!
− 2Cov
k ∑︁
t =1
Xt ,
k
n
n ∑︁
t =1
Xt
!
= kσ2 + k2
n2 nσ2 − 2Cov
k ∑︁
t =1
Xt ,
k
n
k ∑︁
t =1
Xt
!
= k(n + k)
n
σ2 − 2
k
n
kσ2 = k
n
1− k
n
σ2.
This implies that
CUSUMk ∼ N 0,
k
n
1− k
n
σ2 .
and
CUSUMk
√︂
k
n 1− k
n
∼ N(0, σ2).
Covariances are
Cov(CUSUMk1 , CUSUMk2 ) = Cov √1
n
"∑︁ k1
t =1
Xt − k1
n
n ∑︁
t =1
Xt
#
,
√1
n
"∑︁ k2
t =1
Xt − k2
n
n ∑︁
t =1
Xt
#!
=1
n
Cov
∑︁ k1
t =1
Xt − k1
n
n ∑︁
t =1
Xt ,
∑︁ k2
t =1
Xt − k2
n
n ∑︁
t =1
Xt
!
= σ2
n
k1 − k2k1
n
− k1
n
k2 + k1
n
k2
n
n
= σ2
n
k1 − k1k2
n
= σ2 k1 n
1− k2
n
, 1 ≤ k1 ≤ k2 ≤ n
as claimed in the paper.
13

A preprint - November 25, 2025
7.1.2 Connections between Zmax and CUSUM statistics
Our work entails mainly algebraic manipulations. First,
Zk = X ̄1:k − X ̄k+1:n
√︁
Var( X ̄1:k − X ̄k+1:n)
=
1
k
Ík
t=1 Xt − 1
n−k
Ín
t=k+1 Xt
σ
√︃ n k (n−k )
=1
σ
√︂
k(n − k)
n
1
k
k ∑︁
t =1
Xt − 1
n−k
n ∑︁
t = k +1
Xt
!
=1
σ
√︄
1
k(n − k)n
(n − k)
k ∑︁
t =1
Xt − k
n ∑︁
t = k +1
Xt
!
=1
σ
√︂ n
k(n − k)
k ∑︁
t =1
Xt − k
n
n ∑︁
t =1
Xt
!
=
Ík
t=1 Xt − k
n
Ín
t=1 Xt
σ
√︃
k (n−k ) n
.
On the other hand,
CUSUMk
√︂
k
n 1− k
n
=
Ík
t=1 Xt − k
n
Ín
t=1 Xt
√
n
√︂
k
n 1− k
n
=
Ík
t=1 Xt − k
n
Ín
t=1 Xt
√︃
k (n−k ) n
.
Therefore, for every k,
σZk = CUSUMk
√︂
k
n 1− k
n
as claimed in the paper.
7.1.3 LRT Material
To compute the LRT statistic, we need the maximum likelihood estimators (MLEs) under the null and alternative hypotheses. Under H0, the MLEs are
μˆ = X1:n, ˆσ2 = 1
n
n ∑︁
t =1
( Xt − X ̄1:n)2 = ˆσ2
H0
.
Under HA when the changepoint occurs at time k, the MLEs for μ, Δ, and σ2 are
μˆ = X1:k, Δˆ = X k+1:n − X1:k, ˆσ2 = 1
n
"k ∑︁
t =1
( Xt − X ̄1:k)2 +
n ∑︁
t = k +1
( Xt − X ̄k+1:n)2
#
= ˆσ2
Hk
Plugging these expressions back into the Gaussian likelihood and simplifying gives
sup
μ,Δ, σ2
LHk = (2π)− n
2 ( ˆσ2
Hk
)−n/2 exp − n
2
, sup
μ, σ2
LH0 = (2π)− n
2 ( ˆσ2
H0 )−n/2 exp − n
2
,
The LRT is hence
Λ
k = supμ, σ2 LH0
supμ,Δ, σ2 L Hk
=
ˆσ2
H0
ˆσ2
Hk
.
The expression for lmax = −2 ln(Λk) given in the paper now follows.
14

A preprint - November 25, 2025
7.1.4 SNHT Material
To relate the LRT and the SNHT, take a known σ2 and use the MLEs above to get
−2 ln(Λk) = sup
μ,Δ
−1
σ2
(k ∑︁
t =1
(Xt − μ)2 +
n ∑︁
t = k +1
(Xt − (μ + Δ))2
)
− sup
μ
−1
σ2
n ∑︁
t =1
(Xt − μ)2
=1
σ2
n ∑︁
t =1
( Xt − X1:n)2
| {z }
(1)
−
k ∑︁
t =1
( Xt − X1:k )2
| {z }
(2)
−
n ∑︁
t = k +1
( Xt − X k+1:n)2
| {z }
(3)
Note that (1) above does not depend on k; hence, it can be treated as a constant and dropped in the maximization. The sum of terms (2) and (3) is simplified as
k ∑︁
t =1
( Xt − X1:k )2 +
n ∑︁
t = k +1
( Xt − X k+1:n)2
=
k ∑︁
t =1
X2
t − 2X1:k
k ∑︁
t =1
Xt + k X
2
1:k +
n ∑︁
t = k +1
X2
t − 2X k+1:n
n ∑︁
t = k +1
Xt + (n − k) X
2
k+1:n
=
n ∑︁
t =1
X2
t −kX
2
1:k − (n − k) X
2
k+1:n
=
n ∑︁
t =1
X2
t
|{z}
(4)
−k X
2
1:k − (n − k) X
2
k +1:n .
Since the sum in (4) does not depend on k, it can also be omitted from the maximization. Hence, the SNHT statistic can be expressed as
SNHTk = k X
2
1:k + (n − k) X
2
k+1:n = C − 2 ln(Λk),
where C is some constant that depends on X1, . . . , Xn.
7.2 Series with Trends
To verify the calculations in subsection 3.a), we first note that
μˆk+1:n − μˆ1:k = X ̄k+1:n − αˆ t ̄k+1:n − X ̄1:k − αˆ t ̄1:k
= X ̄k+1:n − X ̄1:k − αˆ (t ̄k+1:n − t ̄1:k ) .
Hence,
Var ( μˆk+1:n − μˆ1:k ) = Var X ̄k+1:n − X ̄1:k
| {z }
(1)
+ Var(αˆ ) (t ̄k+1:n − t ̄1:k)2
| {z }
(2)
− 2 Cov X ̄k+1:n − X ̄1:k , αˆ (t ̄k+1:n − t ̄1:k )
| {z }
(3)
.
Term (1). Now note that
X ̄k+1:n − X ̄1:k = α t ̄k+1:n − t ̄1:k + ε ̄k+1:n − ε ̄1:k .
Since α(t ̄k+1:n − t ̄1:k) is constant, we have
(1) = Var (ε ̄k+1:n − ε ̄1:k) = Var 1
n−k
n ∑︁
t = k +1
εt − 1
k
k ∑︁
t =1
εt
!
= σ2
n−k
+ σ2
k
.
15

A preprint - November 25, 2025
Term (2). Using t ̄k+1:n − t ̄1:k = n/2 gives (2) = n2
4 Var(αˆ ). To get Var(αˆ ), use
αˆ = 12 Ín
t=1 t ( Xt − X ̄1:n)
n(n + 1) (n − 1)
and examine the numerator:
Var
n ∑︁
t =1
t Xt − X ̄1:n
!
= Var
n ∑︁
t =1
tεt − ε ̄1:n
n ∑︁
t =1
t
!
= Var
n ∑︁
t =1
tεt
!
| {z }
(2a)
+ Var ε ̄1:n
n ∑︁
t =1
t
!
| {z }
(2b)
−2 Cov
n ∑︁
t =1
tεt , ε ̄1:n
n ∑︁
t =1
t
!
| {z }
(2c)
.
Compute the terms gives
(2a) =
n ∑︁
t =1
t2σ2 = n(n + 1) (2n + 1)
6
σ2,
(2b) = n(n+1)
2
2
Var(ε ̄1:n) = n2 (n + 1)2
4
σ2
n
= n(n + 1)2
4
σ2,
(2c) = n(n+1)
2 Cov
n ∑︁
t =1
tεt , ε ̄1:n
!
= n(n + 1)
2
n ∑︁
t =1
t
n
σ2 = (n + 1)n
2
n(n + 1)
2
σ2
n
= n(n + 1)2
4
σ2.
Hence,
Var
n ∑︁
t =1
t Xt − X ̄1:n
!
= n(n + 1) (2n + 1)
6
σ2 + n(n + 1)2
4
σ2 − 2
n(n + 1)2
4
σ2
=
n(n + 1) (2n + 1) − 3
2 n(n + 1)2
6
σ2.
Therefore,
Var(αˆ ) = 12
n(n + 1) (n − 1)
2
Var
n ∑︁
t =1
t ( Xt − X ̄1:n)
!
= 12
n(n + 1) (n − 1) σ2,
(2) = n2
4
12
n(n + 1) (n − 1) σ2 = 3n
(n + 1) (n − 1) σ2.
Term (3). Using t ̄k+1:n − t ̄1:k = n/2,
(3) = Cov X ̄k+1:n − X ̄1:k, αˆ
n
2 =n
2 Cov (ε ̄k+1:n − ε ̄1:k, αˆ ) .
A direct calculation akin to those that produced (2a)–(2c) and using Cov(tεt , ε ̄1:n) = tσ2/n yields (3) = 3n
(n+1) (n−1) σ2.
Putting the above three terms together now produces
Var(μˆk+1:n − μˆ1:k) = 1
n−k
+1
k
σ2 + 3n
(n + 1) (n − 1) σ2 − 2 3n
(n + 1) (n − 1) σ2
=1
n−k
+1
k
σ2 − 3n
(n + 1) (n − 1) σ2,
which is as quoted in the paper.
To get Cov(Dk, Dl ), let 1 ≤ k ≤ l ≤ n and define
D k = μˆk+1:n − μˆ1:k
√︁ Var(μˆk+1:n − μˆ1:k)
, Dl = μˆl+1:n − μˆ1:l
√︁ Var(μˆl+1:n − μˆ1:l )
.
16

A preprint - November 25, 2025
Then
Cov(D k, Dl ) = Cov(μˆk+1:n − μˆ1:k, μˆl+1:n − μˆ1:l )
√︁ Var(μˆk+1:n − μˆ1:k ) Var(μˆl+1:n − μˆ1:l )
.
Write the numerator as
Cov( μˆk+1:n − μˆ1:k , μˆl+1:n − μˆ1:l ) = Cov( μˆk+1:n, μˆl+1:n)
| {z }
(1)
− Cov(μˆk+1:n, μˆ1:l )
| {z }
(2)
− Cov(μˆ1:k, μˆl+1:n)
| {z }
(3)
+ Cov(μˆ1:k, μˆ1:l )
| {z }
(4)
.
Component (1).
(1) = Cov X ̄k+1:n − αˆ t ̄k+1:n, X ̄l+1:n − αˆ t ̄l+1:n
= Cov( X ̄k+1:n, X ̄l+1:n)
| {z }
(1a)
− Cov( X ̄k+1:n, αˆ ) t ̄l+1:n
| {z }
(1b)
− Cov(αˆ , X ̄l+1:n) t ̄k+1:n
| {z }
(1c)
+ Var(αˆ ) t ̄k+1:nt ̄l+1:n
| {z }
(1d)
.
More calculations give
(1a) = σ2
n−k
,
(1b) = 3(n + l + 1) k
n(n + 1) (n − 1) σ2,
(1c) = 3(n + k + 1) l
n(n + 1) (n − 1) σ2, (1d) = 3(n + k + 1) (n + l + 1)
n(n + 1) (n − 1) σ2,
⇒ (1) = 1
n−k
− 3(n + l + 1)k
n(n + 1) (n − 1) − 3(n + k + 1)l
n(n + 1) (n − 1) + 3(n + k + 1) (n + l + 1)
n(n + 1) (n − 1) σ2.
Component (2).
(2) = Cov X ̄k+1:n − αˆ t ̄k+1:n, X ̄1:l − αˆ t ̄1:l
= Cov( X ̄k+1:n, X ̄1:l )
| {z }
(2a)
− Cov( X ̄k+1:n, αˆ ) t ̄1:l
| {z }
(2b)
− Cov(αˆ , X ̄1:l ) t ̄k+1:n
| {z }
(2c)
+ Var(αˆ ) t ̄k+1:nt ̄1:l
| {z }
(2d)
.
With k ≤ l,
(2a) = l − k
(n − k)l
σ2, (2b) = 3k (l + 1)
n(n + 1) (n − 1) σ2,
(2c) = − 3(n + k + 1) (n − l)
n(n + 1) (n − 1) σ2, (2d) = 3(n + k + 1) (l + 1)
n(n + 1) (n − 1) σ2,
⇒ (2) = l − k
(n − k)l
− 3k (l + 1)
n(n + 1) (n − 1) + 3(n + k + 1) (n − l)
n(n + 1) (n − 1) + 3(n + k + 1) (l + 1)
n(n + 1) (n − 1) σ2.
Component (3).
(3) = Cov X ̄1:k − αˆ t ̄1:k, X ̄l+1:n − αˆ t ̄l+1:n
= Cov( X ̄1:k, X ̄l+1:n)
| {z }
(3a)
− Cov( X ̄1:k, αˆ ) t ̄l+1:n
| {z }
(3b)
− Cov(αˆ , X ̄l+1:n) t ̄1:k
| {z }
(3c)
+ Var(αˆ ) t ̄1:kt ̄l+1:n
| {z }
(3d)
.
Here,
(3a) = 0, (3b) = − 3(n + l + 1) (n − k)
n(n + 1) (n − 1) σ2,
(3c) = 3( k + 1) l
n(n + 1) (n − 1) σ2, (3d) = 3( k + 1) (n + l + 1)
n(n + 1) (n − 1) σ2,
⇒ (3) = 3(n + l + 1) (n − k)
n(n + 1) (n − 1) − 3( k + 1) l
n(n + 1) (n − 1) + 3( k + 1) (n + l + 1)
n(n + 1) (n − 1) σ2.
17

A preprint - November 25, 2025
Component (4).
(4) = Cov X ̄1:k − αˆ t ̄1:k, X ̄1:l − αˆ t ̄1:l
= Cov( X ̄1:k, X ̄1:l )
| {z }
(4a)
− Cov( X ̄1:k, αˆ ) t ̄1:l
| {z }
(4b)
− Cov(αˆ , X ̄1:l ) t ̄1:k
| {z }
(4c)
+ Var(αˆ ) t ̄1:kt ̄1:l
| {z }
(4d)
.
Here,
(4a) = σ2
l
, (4b) = − 3(n − k) (l + 1)
n(n + 1) (n − 1) σ2,
(4c) = − 3(n − l) (k + 1)
n(n + 1) (n − 1) σ2, (4d) = 3( k + 1) (l + 1)
n(n + 1) (n − 1) σ2,
⇒ (4) = 1
l
+ 3(n − k) (l + 1)
n(n + 1) (n − 1) + 3(n − l) (k + 1)
n(n + 1) (n − 1) + 3( k + 1) (l + 1)
n(n + 1) (n − 1) σ2.
Collecting the four components, we get
(1) − (2) − (3) + (4) = n
(n − k) l
− 3n
(n + 1) (n − 1) σ2.
Plugging in the above variance expressions, we arrive at
Cov(Dk, Dl ) =
n
(n − k) l
− 3n
(n + 1) (n − 1)
√︂1
n−k
+1
k
− 3n
(n + 1) (n − 1)
√︂1
n−l
+1
l
− 3n
(n + 1) (n − 1)
as claimed in the paper.
18

A preprint - November 25, 2025
References
Hans Alexandersson. A homogeneity test applied to precipitation data. Journal of Climatology, 6(6):661–675, 1986.
Claudie Beaulieu, Colin Gallagher, Rebecca Killick, Robert Lund, and Xueheng Shi. A recent surge in global warming is not detectable yet. Nature Communications, Earth & Environment, 5:576–583, 2024. URL doi.org/10.1038/ s43247-024-01711-1.
Patrick Billingsley. Convergence of Probability Measures. John Wiley & Sons, 2nd edition, 2013.
Emily Brodsky and Boris S Darkhovsky. Nonparametric Methods in Change Point Problems, volume 243. Springer Science & Business Media, 2013.
Edward Carlstein. Nonparametric change-point estimation. The Annals of Statistics, 16(1):188–197, 1988.
Henri Caussinus and Olivier Mestre. Detection and correction of artificial shifts in climate series. Journal of the Royal Statistical Society Series C: Applied Statistics, 53(3):405–425, 2004.
Gregory C Chow. Tests of equality between sets of coefficients in two linear regressions. Econometrica: Journal of the Econometric Society, 28(3):591–605, 1960.
Miklos Csörgo and Lajos Horváth. Limit Theorems in Change-point Analysis. John Wiley & Sons, 1997.
Herold Dehling, Kata Vuk, and Martin Wendler. Change-point detection based on weighted two-sample U-statistics. Electronic Journal of Statistics, 16(1):862–891, 2022.
C. Gallagher, R. B. Lund, and M. Robbins. Changepoint detection in daily precipitation series. Environmetrics, 23: 407–419, 2012.
Colin Gallagher, Robert Lund, and Michael Robbins. Changepoint detection in climate series with long-term trends. Journal of Climate, 26:4994–5006, 2013.
Zaid Harchaoui, Eric Moulines, and Francis Bach. Kernel change-point analysis. Advances in Neural Information Processing Systems, 21:609–616, 2008.
Lajos Horváth and Gregory Rice. Change Point Analysis for Time Series. Springer, 2024.
M Naveed Khaliq and Taha BMJ Ouarda. On the critical values of the standard normal homogeneity test (SNHT). International Journal of Climatolog, 27(5):681–687, 2007.
Claudia Kirch. Resampling methods for the change analysis of dependent data. PhD thesis, Universität zu Köln, 2006.
Marc Lavielle and Gilles Teyssiere. Adaptive detection of multiple change-points in asset price volatility. In In: Long Memory in Economics, pages 129–156. Springer, 2007.
R.B. Lund, N. Diawara, T.J. Fisher, and M. Wehner. Multiple changepoint detection for non-Gaussian processes. Journal of Time Series Analysis, 46:In Press, 2025.
Robert Lund and Jaxk Reeves. Detection of undocumented changepoints: A revision of the two-phase regression model. Journal of Climate, 15:2547–2554, 2002.
Robert B Lund, Claudie Beaulieu, Rebecca Killick, QiQi Lu, and Xueheng Shi. Good practices and common pitfalls in climate time series changepoint techniques: A review. Journal of Climate, 36(23):8041–8057, 2023.
Ian B MacNeill. Tests for change of parameter at unknown times and distributions of some related functionals on Brownian motion. The Annals of Statistics, 2:950–962, 1974.
J. Murray Mitchell. On the causes of instrumentally observed secular temperature trends. Journal of Meteorology, 10: 244–261, 1953.
ES Page. A test for a change in a parameter occurring at an unknown point. Biometrika, 42(3/4):523–527, 1955.
Thomas C Peterson, David R Easterling, Thomas R Karl, Pavel Groisman, Neville Nicholls, Neil Plummer, Simon Torok, Ingeborg Auer, Reinhard Boehm, Donald Gullett, et al. Homogeneity adjustments of in situ atmospheric climate data: a review. International Journal of Climatology, 18(13):1493–1517, 1998.
Jaxk Reeves, Jien Chen, Xiaolan L Wang, Robert Lund, and Qi Qi Lu. A review and comparison of changepoint detection techniques for climate data. Journal of Applied Meteorology and Climatology, 46(6):900–915, 2007.
M Robbins, C Gallagher, RB Lund, and A Aue. Mean shift testing in correlated data. Journal of Time Series Analysis, 32:498–511, 2011.
Michael Robbins. Change-point analysis: Asymptotic theory and applications. PhD thesis, Clemson University, 2009.
Michael W Robbins, Colin M Gallagher, and Robert B Lund. A general regression changepoint test for time series data. Journal of the American Statistical Association, 111(514):670–683, 2016.
19

A preprint - November 25, 2025
SN Rodionov. A brief overview of the regime shift detection methods. Large-scale disturbances (regime shifts) and recovery in aquatic ecosystems: challenges for management toward sustainability, pages 17–24, 2005.
Sheldon M Ross. Stochastic Processes. John Wiley & Sons, 1995.
Xueheng Shi and Robert Lund. The asymptotic distribution of a joinpoint changepoint model. Statistics and Probability Letters, page Submitted, 2025.
Xueheng Shi, Colin Gallagher, Robert Lund, and Rebecca Killick. A comparison of single and multiple changepoint techniques for time series data. Computational Statistics & Data Analysis, 170, 2022. doi: doi.org/10.1016/j.csda. 2022.107433.
David Slepian. The one-sided barrier problem for Gaussian noise. Bell System Technical Journal, 41(2):463–501, 1962.
Leonid Tolmatz. On the distribution of the square integral of the Brownian bridge. The Annals of Probability, 30(1): 253–269, 2002.
Aad W Van Der Vaart and Jon A Wellner. Weak Convergence. Springer, 1996.
R.S. Vose, B. Huang, X. Yin, D. Arndt, D.R. Easterling, J.H. Lawrimore, M.J. Menne, A. Sanchez-Lugo, and H.M. Zhang. Implementing full spatial coverage in NOAA’s global temperature analysis. Geophysical Research Letters, 48(4):e2020GL090873, 2021.
Daren Wang, Yi Yu, and Alessandro Rinaldo. Univariate mean change point detection: Penalization, CUSUM and optimality. Electronic Journal of Statistics, 14(1):1917–1961, 2020.
Xiaolan L Wang. Comments on “Detection of undocumented changepoints: A revision of the two-phase regression model”. Journal of Climate, 16(20):3383–3385, 2003.
Xiaolan L Wang, Qiuzi H Wen, and Yuehua Wu. Penalized maximal t test for detecting undocumented mean change in climate data series. Journal of Applied Meteorology and Climatology, 46(6):916–931, 2007.
Douglas A Wolfe and Edna Schechtman. Nonparametric statistical procedures for the changepoint problem. Journal of Statistical Planning and Inference, 9(3):389–396, 1984.
20

---

## Processing Information

- **Processing Library:** Zotero PDFWorker
- **Processing Date:** 2026-02-10T18:14:56.430Z
- **Text Length:** 50131 characters
- **Success:** Text extraction completed
- **PDF Library Used:** Zotero PDFWorker
- **Pages Processed:** 20 of 20
