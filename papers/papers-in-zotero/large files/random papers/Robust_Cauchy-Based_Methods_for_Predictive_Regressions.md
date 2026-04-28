# PDF Document: Ibragimov et al. - 2025 - Robust Cauchy-Based Methods for Predictive Regressions.pdf

**File Path:** Ibragimov et al. - 2025 - Robust Cauchy-Based Methods for Predictive Regressions.pdf

**Processed Date:** 2026-02-10T18:18:17.428Z

**File Size:** 642.89 KB

**Total Pages:** 39

**Extracted Pages:** 39

**PDF Library:** Zotero PDFWorker

**Attachment Item ID:** 3173

**Title:** Robust Cauchy-Based Methods for Predictive Regressions

**Collection:** Large Files > Random Papers

---

## Extracted Text Content

Robust Cauchy-Based Methods for Predictive Regressions∗
Rustam Ibragimova,b, Jihyun Kimc, Anton Skrobotovd
a Imperial College Business School
b New Economic School
c School of Economics, Sungkyunkwan University
d HSE University
Abstract
This paper develops robust inference methods for predictive regressions that address
key challenges posed by endogenously persistent or heavy-tailed regressors, as well as per
sistent volatility in errors. Building on the Cauchy estimation framework, we propose two
novel tests: one based on t-statistic group inference and the other employing a hybrid
approach that combines Cauchy and OLS estimation. These methods effectively mitigate
size distortions that commonly arise in standard inference procedures under endogeneity,
near nonstationarity, heavy tails, and persistent volatility. The proposed tests are sim
ple to implement and applicable to both continuous- and discrete-time models. Extensive
simulation experiments demonstrate favorable finite-sample performance across a range of
realistic settings. An empirical application examines the predictability of excess stock re
turns using the dividend–price and earnings–price ratios as predictors. The results suggest
that the dividend–price ratio possesses predictive power, whereas the earnings–price ratio
does not significantly forecast returns.
Keywords: predictive regressions, robust inference, near nonstationarity, heterogeneity, heavy
tails, persistent volatility, endogeneity.
JEL Codes: C12, C22
∗We are grateful to the Editor, Anindya Banerjee, and two anonymous referees for their helpful comments
and constructive suggestions. We also thank Jean-Marie Dufour, Jenny Hau, Nour Meddahi, Aleksey Min,
Ulrich K. Mu ̈ller, Robert Taylor, Neil Shephard, and the participants at the 54th NES conference and iCEBA
conferences for helpful discussions and comments. We also thank Yongok Choi for providing his code.
1
arXiv:2511.09249v2 [econ.EM] 17 Nov 2025

1 Introduction
Predictive regressions play a central role in empirical finance, providing a framework for
assessing whether financial or macroeconomic variables can forecast future returns. Prominent
applications include the forecasting of equity and aggregate returns (see, among others, Camp
bell and Yogo, 2006; Goyal and Welch, 2006; Campbell and Thompson, 2008, Hirshleifer et al.,
2009; Kelly and Jiang, 2014; Rapach et al., 2016; Møller and Rangvid, 2015; Goyal et al.,
2024, and references therein) and tests of market efficiency (e.g., Fama, 1970, 1984, 1991, the
review in Martin and Nagel, 2022, and references therein). Numerous studies have examined
the econometric properties of predictive regressions for stock returns (see Phillips, 2015, for
a review), highlighting several statistical challenges that complicate inference on return pre
dictability. Widely used predictors, including valuation ratios such as the dividend–price and
earnings–price ratios, typically exhibit near–unit–root dynamics, and their innovations are cor
related with stock returns over long horizons. This combination of persistence and endogeneity
induces substantial biases in conventional hypothesis tests (see, e.g., Stambaugh, 1999; Kim
and Park, 2017). Moreover, stock return volatility is stochastic and highly persistent (Jacquier
et al., 2004; Hansen and Lunde, 2014), and Cavaliere (2004) shows that such volatility can lead
to severe size distortions in tests assuming stationarity. Predictive regression data also often
exhibit heavy tails, jumps, structural breaks, and regime shifts, further undermining standard
inference (op. cit.).
A large literature has addressed persistent endogeneity in predictive regressions. Notably,
Campbell and Yogo (2006), Chen and Deo (2009), Phillips and Magdalinos (2009), and Kostakis
et al. (2015), among others, proposed inference procedures designed to handle persistence and
endogeneity. While these methods perform well in such environments, they do not adequately
address other empirical features such as persistent volatility, structural breaks, or regime switch
ing. The simulations in Ibragimov et al. (2024) show that standard tests can suffer from severe
size distortions under persistent volatility.
Choi et al. (2016) proposed an inference method (the Cauchy RT ) based on the Cauchy
estimator and a time-change transformation in a continuous-time framework to address en
dogenous persistence and volatility in the errors.1 Ibragimov et al. (2024) introduced another
approach (the Cauchy VC ), also based on the Cauchy estimator but with a nonparametric
volatility correction. Unlike Choi et al. (2016), it applies to both continuous- and discrete-time
models.
This paper proposes two practical tests that serve as robust alternatives to these methods.
The proposed tests are robust to heterogeneous and persistent volatility, as well as to endoge
nous, persistent, and/or heavy-tailed regressors. Both employ Cauchy estimation procedures, as
1See also Bu et al. (2023) for an alternative method robust to endogenously persistent or heavy-tailed
regressors and persistent volatility in continuous time.
2

in Choi et al. (2016) and Ibragimov et al. (2024), to address endogeneity, persistence, and heavy
tails. The two methods differ in their treatment of heterogeneous volatility: the first extends
the t-statistic-based group inference of Ibragimov and Mu ̈ller (2010) to asymptotically normal
Cauchy estimators, while the second is a hybrid test combining Cauchy and OLS estimation
that uses the Cauchy estimator for the coefficient and OLS residuals for the standard error.
The proposed methods are easy to implement and avoid the technical complexities of the
time-change transformation in Choi et al. (2016) and the nonparametric volatility correction
in Ibragimov et al. (2024). Although they rely on an asymptotically exogenous volatility con
dition, they perform well in finite samples and compare favorably to alternative procedures
across empirically relevant scenarios, including mild violations of this condition. Moreover, the
proposed methods apply to both continuous- and discrete-time models, as in Ibragimov et al.
(2024). Overall, the two tests developed here and the inference procedures of Choi et al. (2016)
and Ibragimov et al. (2024) should be viewed as complementary, particularly in environments
with heteroskedastic and persistent volatility.
The remainder of the paper is organized as follows. Section 2 discusses the predictive re
gression model and the Cauchy estimator; Section 3 develops the inference procedures and
theoretical results; Section 4 extends them to multiple predictors and models with intercepts;
Sections 5 and 6 present simulations and an empirical illustration; and Section 7 concludes. All
proofs are in the Appendix.
2 Predictive Regressions and the Cauchy Estimator
2.1 Model and Issues
Throughout the paper, we consider (Ft)-adapted processes defined on a filtered probability
space (Ω, F, (Ft), P ) equipped with an increasing filtration (Ft) of sub-σ-fields of F. Our ob
jective is to test the (un)predictability of the process (yt) (e.g., the time series of excess stock
returns) based on a covariate process (xt) (e.g., the time series of price–dividend ratios). As
usual, we consider the linear predictive regression model
yt = α + βxt−1 + ut, t = 1, . . . , T. (1)
Following the standard specification for a volatility model, we assume that
ut = vtεt,
where (vt) is a volatility process and (εt) is a martingale difference sequence (MDS) with respect
to (Ft). We impose the following regularity conditions on (vt, εt).
Assumption 2.1. (a) E(ε2
t |Ft−1) = 1; (b) (vt) is (Ft−1)-adapted and nonnegative; and (c)
T −1 ∑︀ T
t=1 E
[︁
ε2
t 1{|εt| ≥ δ√T }
⃒
⃒
⃒ Ft−1
]︁
→p 0 for any δ > 0.
3

Conditions (a) and (b) are standard and ensure that the conditional variance of ut is identi
fied: E(u2
t |Ft−1) = v2
t . Condition (c) is a conditional Lindeberg condition, which holds, for exam
ple, if sup1≤t≤T E(|εt|2+δ|Ft−1) is bounded for some δ > 0 with probability one. See Ibragimov
et al. (2024) and references therein for further discussion and examples of processes satisfying
Assumption 2.1.
The hypothesis of unpredictability of (yt) corresponds to H0 : β = 0 in regression (1). It is
well-known that standard OLS t-statistic inference is not robust to many empirically relevant
features of financial data. For instance, the OLS estimator of β is not asymptotically Gaussian
under H0 if (xt) is endogenous and (nearly) nonstationary (see Elliott and Stock, 1994; Phillips,
1987; Giraitis and Phillips, 2006; Phillips and Magdalinos, 2007a; Kostakis et al., 2015), or
even if (xt) is stationary but has infinite variance (e.g., Granger and Orr, 1972; Embrechts
et al., 1997; Ibragimov et al., 2015). This non-Gaussianity persists even when the errors are
homoskedastic with v2
t = σ2 for all t.2 Furthermore, stock return data exhibit time-varying
and stochastically persistent volatility, which causes the distribution of the OLS t-statistic to
deviate from standard normality, leading to size distortions in conventional tests (see Choi
et al., 2016; Ibragimov et al., 2024).
2.2 The Cauchy Estimator
Both inference methods proposed in this paper build upon the following Cauchy estimator
of β (assuming no intercept, i.e., α = 0):
βˇ =
(︃T ∑︁
t=1
|xt−1|
)︃ −1 T
∑︁
t=1
sign(xt−1) yt,
where sign(·) denotes the sign function, sign(x) = 1 for x ≥ 0 and sign(x) = −1 for x < 0. The
estimator βˇ can be interpreted as an instrumental variable (IV) estimator using sign(xt−1) as
an instrument for xt−1 (see, e.g., So and Shin, 1999; Breitung and Demetrescu, 2015; Kim and
Meddahi, 2020; Shephard, 2020).
Under Assumption 2.1, sign(xt−1)εt (denoted by ξt) is a unit-variance MDS with respect to
(Ft). Define the continuous-time partial sum process (W T (r), 0 ≤ r ≤ 1) by
W T (r) = T −1/2
[T r]
∑︁
t=1
ξt,
which takes values in DR[0, 1], the space of ca`dl`ag functions on [0, 1] with values in Rd. By the
functional central limit theorem for martingales (Theorem 18.2 of Billingsley, 1986), we have
W T ⇒ W in DR[0, 1], where W is a standard Brownian motion.
2As usual, the endogeneity of (xt−1) refers to the existence of nonzero long-run covariance between the
innovations of (yt) and (xt−1).
4

For the volatility process (vt), define σT (r) = v[T r] on DR+[0, 1]. Then the Cauchy estimator
can be expressed in terms of σT and W T as
(︃T ∑︁
t=1
|xt−1|/
√ T
)︃
(︀ βˇ − β)︀ = T −1/2
T
∑︁
t=1
sign(xt−1)vtεt =
∫︁1
0
σT (r) dW T (r).
Following Ibragimov et al. (2024), we assume that the volatility process σT is persistent in
the sense that it admits a limiting process σ defined on [0, 1] such that (W T , σT ) ⇒ (W, σ)
jointly.
Assumption 2.2. There exists a nonnegative process σ on DR+[0, 1] such that
0<
∫︁1
0
σ2(r) dr < ∞, and (W T , σT ) ⇒ (W, σ) in DR×R+[0, 1],
where W is a standard Brownian motion adapted to the same filtration as σ.
Assumption 2.2 encompasses a wide class of models, including those with nonstationary
volatility, regime switching, or structural breaks.3 It also covers cases with deterministic volatil
ity vt = σ(t/T ), as in Cavaliere and Taylor (2007, 2008), Xu and Phillips (2008), and Harvey
et al. (2019), among others.4 It further includes nonstationary volatility processes such as those
in Hansen (1995) and Chung and Park (2007), where v2
t is a smooth positive transformation
of a (near) unit root process. Overall, Assumptions 2.1 and 2.2 are general enough to allow for
stochastic and discontinuous volatility—features commonly observed in financial returns.
Under Assumptions 2.1 and 2.2, the properly normalized Cauchy estimator satisfies
(︃T ∑︁
t=1
|xt−1|/
√ T
)︃
(βˇ − β) ⇒
∫︁1
0
σ(r) dW (r),
by standard results on the convergence of stochastic integrals (see Hansen, 1992; Kurtz and
Protter, 1991; Ibragimov et al., 2024). The limit ∫︀ 1
0 σ(r) dW (r) is in general a non-Gaussian
martingale, becoming Gaussian only if W and σ are independent. In that case, ∫︀ 1
0 σ(r) dW (r)
is a scale mixture of normals with variance ∫︀ 1
0 σ2(r) dr, denoted
∫︁1
0
σ(r) dW (r) =d MN
(︂
0,
∫︁1
0
σ2(r) dr
)︂
.
We formalize the independence assumption as follows.
3Assumptions 2.1 and 2.2 exclude some globally homoskedastic processes, such as stationary GARCH models.
However, the hybrid testing procedure proposed later remains valid under T −1 ∑︀ T
t=1 vt2 →p ω2 > 0, which
includes conditionally heteroskedastic but globally homoskedastic processes, such as stationary GARCH models
(see also Section 4 of Ibragimov et al., 2024). 4Assumption 2.2 is a simplified version of the condition v[T r]/aT ⇒ σr in Assumption 2 of Cavaliere and
Taylor (2009). We focus on stochastically bounded volatilities with aT = 1, excluding explosive volatility settings
(aT → ∞) for simplicity.
5

Assumption 2.3. The processes σ and W in Assumption 2.2 are independent.
Assumption 2.3 requires the volatility process σT to be asymptotically independent of the
martingale W T , but does not preclude finite-sample dependence. For example, consider
σT (t/T ) = T −δf (xt−1, εt) + σT
0 (t/T ) , δ > 0,
where f : R2 → R+ is bounded and σT
0 is independent of W T with (W T , σT
0 ) ⇒ (W, σ), where
W and σ are independent. For any δ > 0, the volatility process σT in this example satisfies
Assumption 2.3, even though σT and W T may be dependent for any fixed T > 0.
In the following sections, we develop inference methods based on the Cauchy estimator.
Section 3 focuses on predictive regressions with a single predictor and no intercept, while
Section 4 extends the analysis to models with multiple predictors and an intercept.
3 Robust Inference for Predictive Regressions
3.1 Robust t-Statistic Approach
The first approach relies on t-statistic-based inference using group estimates of β, as pro
posed by Ibragimov and Mu ̈ller (2010) (see also Ibragimov and Mu ̈ller, 2016; Section 3.3 of
Ibragimov et al., 2015). The method is based on normalized Cauchy estimators—specifically,
the numerator of the Cauchy estimator divided by √T in the full-sample case:
γˇ =
∑︀T
t=1 |xt−1|
√T
βˇ = √1T
T
∑︁
t=1
sign(xt−1)yt. (2)
Following the t-statistic approach, we partition the sample into a fixed number q ≥ 2 of
approximately equal groups of consecutive observations. The observation (yt, xt−1) at time t
belongs to the jth group Gj if
t ∈ Gj = {s : (j − 1)[T /q] < s ≤ j[T /q]}, j = 1, . . . , q.
We compute the normalized Cauchy statistic in (2) within each group:
γˇj =
√︂q
T
j[T /q]
∑︁
t=(j−1)[T /q]+1
sign(xt−1)yt. (3)
The t-statistic based on the q group statistics {γˇj}q
j=1 is given by
tq(γˇ) = √q γ ̄
sγ
, (4)
6

where
γ ̄ = q−1
q
∑︁
j=1
γˇj, s2
γ = (q − 1)−1
q
∑︁
j=1
(γˇj − γ ̄)2.
Under the null hypothesis H0 : β = 0, the test rejects H0 in favor of HA : β ̸= 0 if |tq(γˇ)| >
cvq(α), where cvq(α) denotes the two-sided t-critical value at level α, i.e. P (|Tq−1| > cvq(α)) = α
for Tq−1 ∼ tq−1 (one-sided tests are analogous).
To study the asymptotic behavior of {γˇj}q
j=1, we decompose
γˇj = ζj + ψj,
where
ζj = β
√︂q
T
∑︁
t∈Gj
|xt−1|, ψj =
√︂q
T
∑︁
t∈Gj
sign(xt−1)ut.
Under Assumption 2.1, {ψj}q
j=1 forms a sequence of martingale differences uncorrelated across
groups, yielding the following asymptotic characterization.
Lemma 3.1. Let Assumptions 2.1, 2.2, and 2.3 hold. For any fixed q ≥ 2 and β ∈ R,
(γˇ1 − ζ1, . . . , γˇq − ζq)′ →d MN(︀ 0, diag(qω2
1, . . . , qω2
q ))︀ ,
where ω2
j = ∫︀ j/q
(j−1)/q σ2(r) dr for j = 1, . . . , q.
The statistics {γˇj}q
j=1 do not satisfy the standard condition in Ibragimov and M ̈uller (2010),
which requires estimators {β ̃j}q
j=1 such that
{mT (β ̃j − β)}q
j=1 →d {VjZj}q
j=1,
for some mT → ∞, Zj
ii∼d N(0, 1), and {Vj} independent of {Zj}. By contrast, Lemma 3.1 shows
that {γˇj}q
j=1 lack such a diverging normalization. Consequently, as shown in Proposition 3.2,
the t-statistic approach yields correct asymptotic size but is consistent only for a restricted class
of covariates, excluding (near) unit-root processes. This inconsistency arises precisely because
the asymptotics of {γˇj}q
j=1 do not involve a diverging sequence (see proofs of Proposition 3.2
and Corollary 3.3).
Nevertheless, with additional regularity conditions, if {c−1
T
∑︀
t∈Gj |xt−1|}q
j=1 →d {Dj }q
j=1 for
positive random variables {Dj} and a sequence cT /√T → ∞, then the Cauchy estimator βˇj
computed within each group satisfies
{mT (βˇj − β)}q
j=1 →d {Pj }q
j=1,
for mT = cT
√︀ q/T . In general, however, {Pj}q
j=1 are non-Gaussian, especially when (xt) is (near)
unit root and endogenous. Applying the t-statistic approach to {βˇj}q
j=1 thus yields consistency
for broader classes of covariates but may incur size distortions due to non-Gaussianity.
7

Proposition 3.2. Let Assumptions 2.1, 2.2, and 2.3 hold, with fixed q ≥ 2 and α ≤ 0.83.
(a) Under H0 : β = 0,
Tli→m∞ P(|tq(γˇ)| > cvq(α) | H0) ≤ α.
(b) Under HA : β ̸= 0, suppose (xt) is stationary with E|xt| < ∞ and satisfies
sup
1≤s≤T −T /q
⃒ ⃒ ⃒ ⃒ ⃒
E|xt| − 1
T /q
s+T /q
∑︁
t=s
|xt|
⃒ ⃒ ⃒ ⃒ ⃒
→p 0.
Then
Tli→m∞ P(|tq(γˇ)| > cvq(α) | HA) = 1.
Proposition 3.2 shows that the t-statistic approach is conservative under H0 and consistent
under HA when (xt) is stationary with a finite first moment. It is thus valid and robust to
persistent heteroskedasticity and endogenously heavy-tailed covariates. However, it becomes
inconsistent for highly persistent covariates, such as (near) unit-root processes. To illustrate,
consider the generalized local-to-unity framework of Dou and Mu ̈ller (2021), where XT (r) =
x[T r] for r ∈ [0, 1] and
T −1/2(︀ XT (·) − XT (0))︀ →d X(·) − X(0), (5)
with X a stationary continuous-time Gaussian ARMA process.5
Corollary 3.3. Let Assumptions 2.1–2.3 hold and suppose (xt) satisfies (5). Under β ̸= 0,
tq(γˇ) →d sign(β)Dq for q ≥ 2, where
Dq =
∫︁1
0
|X (r)|dr
⎛
⎝
q(q − 1)
∑︀q
j=1
(︀∫︀ 1
0 |X(r)|dr − q ∫︀ j/q
(j−1)/q |X(r)|dr)︀ 2
⎞
⎠
1/2
,
and Dq > (q − 1)−1/2 with probability one.
When (xt) is highly persistent, tq(γˇ) converges to Dq rather than diverging, with lower
bound (q − 1)−1/2. Simulations in Section 4 confirm that rejection probabilities remain high
even when tq(γˇ) is asymptotically bounded. For q = 2,
D2 =
∫︀1
0 |X(r)|dr
⃒ ⃒
∫︀ 1/2
0 |X(r)|dr − ∫︀ 1
1/2 |X(r)|dr⃒
⃒
> 1. (6)
The ratio form in (6) implies large realizations of D2 in finite samples, producing high rejection
rates even under inconsistency. Figure 1 plots the simulated density of D2 when X is Brownian
5See Dou and Mu ̈ller (2021) for a detailed discussion.
8

motion.6 The minimum simulated value is 1.15, and P(|D2| > cv2(0.05)) = 0.15 with cv2(0.05) =
4.303.
0 2 4 6 8 10 12 14 16 18
0
0.05
0.1
0.15
0.2
0.25
0.3
0.35
0.4
0.45
Figure 1: Simulated density of D2 in (6).
3.2 A Hybrid Test
We now propose a simple hybrid test that remains consistent for a broad class of covariates.
Under Assumptions 2.1–2.3,
∑︀T
t=1 |xt−1|
√T (βˇ − β) = √1T
T
∑︁
t=1
sign(xt−1)ut →d
∫︁1
0
σ(r) dW (r) = ωZ,
where Z ∼ N(0, 1) and ω2 = ∫︀ 1
0 σ2(r) dr.
A key feature of the Cauchy estimator βˇ is that its properly normalized limit distribution
is invariant to the data-generating process of (xt). By contrast, the OLS estimator’s variance
depends on both (ut) and (xt), complicating variance estimation even under homoskedasticity.
For βˇ, the asymptotic variance depends solely on ut, requiring only heteroskedasticity-robust
adjustments.7
We define the hybrid test statistic as
τ (βˇ) = γˇ
ωˆ ,
6Based on 100,000 simulated draws. 7See Shephard (2020), Section 4.3, for related discussion.
9

where γˇ = (∑︀ T
t=1 |xt−1|/√T )βˇ as in (2), and
ωˆ2 = 1
T
T
∑︁
t=1
uˆ2
t , uˆt = yt − βˆxt−1.
Here, ωˆ2 estimates ω2 = ∫︀ 1
0 σ2(r) dr using OLS residuals. As noted by Shephard (2020), the
Cauchy-based variance estimator performs poorly because the Cauchy estimator converges more
slowly and less efficiently than OLS when (xt) is heavy-tailed or nearly integrated. Hence, we
use OLS residuals to improve efficiency.8
We assume:
Assumption 3.1. ∑︀ T
t=1 xt−1ut = op
(︂√︁
T
∑︀T
t=1 x2
t−1
)︂
.
Assumption 3.1 is very general and holds in many time-series settings. It is weaker than
Assumption 3.2 of Ibragimov et al. (2024), which requires ∑︀ T
t=1 xt−1ut = Op
(︂√︁
Tp∑︀ T
t=1 x2
t−1
)︂
for p ∈ [0, 1/16). As shown in Ibragimov et al. (2024), this holds with p = 0 when (xt) is
either (near) unit root or stationary with finite variance; it also applies to certain stationary
heavy-tailed processes (see, e.g., Samorodnitsky et al., 2007).
Under Assumption 3.1,
|βˆ − β| = op
⎛
⎝
⎯ ⎸
⎸
⎷T ⧸︀
T
∑︁
t=1
x2
t−1
⎞
⎠ , and hence ωˆ2 →p ω2.
The asymptotic properties of τ (βˇ) follow.
Proposition 3.4. Let Assumptions 2.1, 2.2, 2.3, and 3.1 hold.
(a) Under H0 : β = 0,
τ (βˇ) →d N(0, 1).
(b) Under HA : β ̸= 0,
τ (βˇ) = β
∑︀T
t=1 |xt−1|
ω√T (1 + op(1)) + Op(1),
so |τ (βˇ)| →p ∞ whenever ∑︀ T
t=1 |xt−1|/√T →p ∞.
The conclusions of Proposition 3.4 remain valid under weaker conditions. For instance, if
Assumptions 2.1 and 3.1 hold and
1
T
T
∑︁
t=1
v2
t →p ω2 > 0, √1T
T
∑︁
t=1
sign(xt−1)ut →d ωZ,
8A related approach is employed by Kostakis et al. (2015) in the IVX framework of Phillips and Magdalinos
(2007a).
10

where Z ∼ N(0, 1) is independent of ω2, then τ (βˇ) retains its asymptotic validity. These con
ditions include stationary volatility with E[v2
t ] = ω2. Hence, Assumptions 2.2 and 2.3 can be
interpreted as primitive sufficient conditions accommodating persistent volatility in predictive
regression data.
Remark. Proposition 3.4(a) also holds if τ (βˇ) uses ω ̄2 = T −1 ∑︀ T
t=1 y2
t instead of ωˆ2, since
β = 0 under H0. Moreover, the corresponding test remains consistent when (xt) is stationary
with finite variance or follows a generalized local-to-unity process (Dou and Mu ̈ller, 2021).
However, it can be inconsistent for heavy-tailed (xt). For instance, if (xt) is i.i.d. α-stable with
α ∈ (0, 2) and independent of (ut), then
ω ̄2 = β2
(︃
1
T
T
∑︁
t=1
x2
t−1
)︃
(1 + op(1)), τ (βˇ) =
∑︀T
t=1 |xt−1|
√︁
∑︀T
t=1 x2
t−1
(1 + op(1)) = Op(1),
by the generalized central limit theorem (see Feller, 1971; Logan et al., 1973; Davis, 1983; Davis
and Resnick, 1986). Thus, the use of ωˆ2 (or another consistent estimator under both H0 and
HA) is crucial for the consistency of the hybrid test.
4 Extensions
This section extends the inference methods developed in Section 3 to models with multiple
predictors and to regressions including an intercept. Our goal is not to design efficient procedures
but to provide simple and robust inference methods that rely on minimal assumptions on the
predictors and volatility processes.
4.1 Predictive Regressions with Multiple Predictors
Consider a predictive regression with K predictors xt = [x1,t, . . . , xK,t]′:
yt = x′
t−1B + ut
= β1,K x1,t−1 + · · · + βK,K xK,t−1 + ut, B = [β1,K , . . . , βK,K ]′. (7)
The objective is to test the joint predictability of the covariates, that is,
H0 : β1,K = · · · = βK,K = 0.
We construct a testing procedure for H0 based on the univariate inference methods in
Section 3. Specifically, we estimate K univariate predictive regressions
yt = βkxk,t−1 + uk,t, k = 1, . . . , K,
11

and test each null hypothesis
H (k)
0 : βk = 0, k = 1, . . . , K.
Clearly, H0 implies H(k)
0 for all k. The converse also holds under mild regularity conditions, as
shown below.
Lemma 4.1. Consider model (7) and define zt = [sign(x1,t), . . . , sign(xK,t)]′. Suppose that for
each t ∈ {1, . . . , T }, E[zt−1ut] = 0K×1, 0 < E[|xk,t−1|] < ∞ for all k, and that the matrix
E[zt−1x′
t−1] is invertible.9 Then, the joint null hypothesis H0 holds if and only if H(k)
0 holds for
all k = 1, . . . , K.
Lemma 4.1 justifies the use of multiple hypothesis testing based on univariate Cauchy es
timators.10 In conjunction with the hybrid test introduced in Section 3.2, we compute the
statistic τ (βˇk) for each parameter βk, where βˇk denotes the corresponding Cauchy estimator.
Let pk denote its p-value. The joint null hypothesis H0 is rejected at level α if mink pk ≤ α/K,
following the Bonferroni correction.
This approach directly extends the univariate robust inference procedure to a multivariate
setting and requires only mild conditions for the equivalence between H0 and {H(k)
0 }K
k=1. The
Bonferroni correction imposes no assumptions on the joint distribution of the test statistics,
which motivates its use here (see Holm, 1979; Benjamini and Hochberg, 1995; Shaffer, 1995).
We also note that if one additionally assumes that E[ztz′
t] is invertible, the joint hypothesis
can be tested directly using a Wald-type statistic:
W=
(︃T ∑︁
t=1
zt−1yt
)︃ ′(︃
ωˆ 2
T
∑︁
t=1
zt−1z′
t−1
)︃ −1 (︃ T
∑︁
t=1
zt−1yt
)︃
.
In particular, under H0,
(︃
ωˆ 2
T
∑︁
t=1
zt−1z′
t−1
)︃ −1/2 (︃ T
∑︁
t=1
zt−1yt
)︃
→d N(0, IK),
9Even when sign(xt−1) is constant, the univariate Cauchy estimator and associated tests remain well defined.
In this case, the estimator simplifies to βˇ = ∑︀ T
t=1 yt
⧸︀∑︀ T
t=1 xt−1, implying βˇ − β = ∑︀ T
t=1 ut
⧸︀∑︀ T
t=1 xt−1, and
Proposition 3.4 continues to hold. Hence, the lack of sign variation does not affect the validity of our methods
in the univariate case. In the multiple-predictor case, however, the invertibility of E[zt−1x′t−1] imposes mild
restrictions on sign changes across predictors. For practical applications, one can induce variation in the sign
instrument by recentering the predictor, for example, x ̃t−1 = xt−1 − t−1 ∑︀ t
s=1 xs−1, which preserves both the
martingale structure and the asymptotic validity of the estimator. 10See Harvey et al. (2015) for an application of the multiple-testing framework in predictive regressions, and
Kostakis et al. (2015) for joint-predictability tests in the IVX framework. Note that the IVX approach may
lose validity under heavy-tailed predictors or continuous-time data, whereas our method remains robust in such
settings.
12

and hence W →d χ2
K.11 We leave a systematic comparison between the Bonferroni-type multiple
testing procedure and the Wald-type joint test for future research.
4.2 Predictive Regressions with an Intercept
The analysis in Section 3 assumes that the intercept α = 0 in (1). When α ̸= 0, it must be
properly accounted for. A natural starting point is the demeaned model
yt − y ̄T = β(xt−1 − x ̄T ) + ut − u ̄T , t = 1, . . . , T, (8)
where z ̄s = s−1 ∑︀ s
t=1 zt for zt ∈ {yt, xt−1, ut}. However, (ut − u ̄T ) is not an martingale difference
sequence (MDS) with respect to (Ft), invalidating the martingale CLT used in Sections 2 and 3.
Specifically, the Cauchy estimator becomes
βˇ − β =
(︃T ∑︁
t=1
|xt−1 − x ̄T |
)︃ −1 T
∑︁
t=1
sign(xt−1 − x ̄T )(ut − u ̄T ),
which is problematic because: (i) ut − u ̄T is not an MDS, and (ii) sign(xt−1 − x ̄T ) is not Ft−1
measurable. Thus, the theory in Section 3 is not directly applicable.12
To restore the MDS property, we instead difference the model:
yt − yt−1 = β(xt−1 − xt−2) + (ut − ut−1),
and estimate this first-differenced (FD) model on alternating subsets of observations. We focus
on the even-indexed observations and define the modified Cauchy estimator:
βˇe = (De
T )−1
T /2
∑︁
t=2
sign(x2t−2)(y2t − y2t−1), De
T=
T /2
∑︁
t=2
sign(x2t−2)(x2t−1 − x2t−2).
This estimator has two key properties. First, for even-indexed data, the regression error
ue
t = u2t − u2t−1 forms an MDS with respect to F e
t := F2t for t = 1, . . . , T /2.13 Second, βˇe can
again be viewed as an IV estimator, but it uses sign(xt−2), which is Ft−2-measurable, as the
instrument.14 Hence, sign(x2t−2)(u2t − u2t−1) is an MDS with respect to (F e
t ).
The inference procedures of Section 3 remain valid for βˇe. In particular, the hybrid test in
Section 3.2 can be implemented as
τ (βˇe) = γˇe
ωˆ , (9)
11As mentioned earlier, zt can be interpreted as an instrument. Therefore, one may use an alternative instru
ment, as in Shephard (2020), and construct a Wald-type test accordingly. 12Recursive demeaning using y ̄t instead of y ̄T does not resolve this issue since ut − u ̄t is not an MDS either. 13For odd-indexed data, uto = u2t+1 − u2t forms an MDS with respect to Fto := F2t+1, yielding an analogous
estimator βˇo.
14More generally, one may use sign
(︁ ∑︀
l≤2 wlxt−l
)︁
for deterministic weights {wl}, provided
E[sign(∑︀
l≤2 wlxt−l)(xt−1 − xt−2)] ̸= 0.
13

where γˇe = De
T βˇe/√︀ T /2, and
ωˆ2 = 1
T
T
∑︁
t=1
uˆ2
t , uˆt = (yt − y ̄T ) − βˆ(xt−1 − x ̄T ),
with βˆ the OLS estimator from the demeaned model (8). Note that ωˆ2 is based on the full sam
ple, whereas βˇe uses only even-indexed data. The asymptotic validity of this hybrid procedure
is established next.
Corollary 4.2. Let Assumptions 2.1, 2.2, and 2.3 hold, and suppose Assumption 3.1 holds
with xt−1 replaced by xt−1 − x ̄T .
(a) Under H0 : β = 0,
τ (βˇe) →d N(0, 1).
(b) Under HA : β ̸= 0,
τ (βˇe) = β
∑︀ T /2
t=1 sign(x2t−2)(x2t−1 − x2t−2)
ω
√︀ T /2 (1 + op(1)) + Op(1),
so that |τ (βˇe)| →p ∞ whenever ⃒
⃒
∑︀ T /2
t=1 sign(x2t−2)(x2t−1 − x2t−2)⃒
⃒ /√︀ T /2 →p ∞.
Although the odd-indexed estimator βˇo has analogous properties, βˇe and βˇo are typically
dependent, with the dependence structure determined by the DGP of (xt). Hence, unless addi
tional assumptions are imposed, we restrict attention to a single subset of observations—either
with even or odd indices.15
Consistency of the hybrid test with an intercept requires
1
√︀ T /2
T /2
∑︁
t=1
sign(x2t−2)(x2t−1 − x2t−2) →p ∞.
This holds for most stationary processes (xt) if
E[sign(xt−1)xt] ̸= E[|xt−1|].
The condition may fail for certain unit-root processes. For instance, for a random walk xt =
xt−1 +εx
t , it does not hold. More generally, in the local-to-unity model of Phillips and Magdalinos
(2007b),
xt =
(︁
1+ c
Tδ
)︁
xt−1 + εx
t , c < 0, δ ∈ [0, 1], (10)
15Using only half of the data is not uncommon in predictive regressions. See, for example, Zhu et al. (2014)
and Liu et al. (2019), who employ long-lag differencing to eliminate intercepts. In addition, Dufour and Torr`es
(2000) uses a split-sample approach to address inference problems under a Markovian structure.
14

with εx
t satisfying Assumption LP therein, the consistency condition becomes
1
T 1/2
T /2
∑︁
t=1
sign(x2t−2)(x2t−1 − x2t−2) = c
T 1/2+δ
T /2
∑︁
t=1
|x2t−2| + 1
T 1/2
T /2
∑︁
t=1
sign(x2t−2)εx
2t−1.
The first term diverges if and only if δ < 1 (see Lemma 3.2 of Phillips and Magdalinos, 2007b).
Since εx
t and xt−1 may be dependent, typically E[sign(x2t−2)εx
2t−1] ̸= 0, causing the second term
to diverge as well. Hence, the condition fails only if δ = 1 and E[sign(x2t−2)εx
2t−1] = 0. In all
other cases (0 ≤ δ < 1 or nonzero covariance), the test remains consistent.
5 Finite Sample Performance
This section investigates the finite-sample performance of the proposed inference methods.
Two sets of simulation experiments are conducted. The first set is based on a continuous-time
model and compares our robust t-statistic–based tests, tq(γˇ) for q ∈ {8, 12, 16}, and the hybrid
test τ (βˇ) with the Cauchy RT test of Choi et al. (2016) and the Cauchy VC test of Ibragimov
et al. (2024). The second set is based on a discrete-time predictive regression model with an
intercept and compares our procedures with the IVX test of Kostakis et al. (2015).
5.1 Continuous-Time Experiments
5.1.1 Simulation Design
Following Choi et al. (2016) and Ibragimov et al. (2024), we consider the continuous-time
predictive regression model
dYt = βXt dt + dUt, (11)
dXt = − κ ̄
T Xt dt + σt dVt, dUt = σt
(︂
dWt +
∫︁
R
x Λ(dt, dx)
)︂
,
where Vt and Wt are Brownian motions with E(VtWt) = −0.98t. The constant term in the
predictive regression is set to zero without loss of generality, and recursive demeaning is applied.
The model is observed at interval ∆ = 1/252, corresponding to daily observations, so that a
sample of length T years contains 252T observations.
The volatility process σt follows one of the following specifications:
• CNST (Constant volatility): σ2
t = σ2
0, with σ0 = 1.
• SB (Structural break): σt = σ0 + (σ1 − σ0)1{t/T ≥ 4/5}, with σ0 = 1 and σ1 = 4.
15

• RS (Regime switching): σt = σ0(1 − st) + σ1st, where st is a two-state Markov chain
independent of (Yt, Xt), with transition matrix
Pt =
(︃
0.8 0.2
0.8 0.2
)︃
+
(︃
0.2 −0.2
−0.8 0.8
)︃
exp
(︂
−
λ ̄
Tt
)︂
,
initialized at its invariant distribution, where  ̄λ = 60, σ0 = 1, and σ1 = 4.
• GBM (Geometric Brownian motion): dσ2
t =1
2
ω ̄ 2
T σ2
t dt + √ω ̄2T σ2
t dZt, where Zt is a
Brownian motion correlated with Wt such that E(WtZt) = −0.4t and ω ̄ = 9.
We set T ∈ {5, 20, 50, 100} (corresponding to 60, 240, 600, and 1200 monthly observations)
and κ ̄ ∈ {0, 5, 10} for the persistence parameter in (11), and consider a two-sided test of
H0 : β = 0 against HA : β ̸= 0.
5.1.2 Results
We first assess the empirical size of each test under the null hypothesis β = 0. The results
for the four volatility models (CNST, SB, RS, and GBM) and for T ∈ {5, 20, 50} are reported in
Table 1. Overall, both the t-statistic–based tests and the hybrid method exhibit satisfactory size
performance, closely matching the nominal levels and performing comparably to the Cauchy RT
and Cauchy VC tests. Among the t-based procedures, moderate partition numbers (q = 12 or
q = 16) provide the most stable results, whereas smaller q values tend to be mildly undersized.
In the GBM case, where volatility is endogenously persistent, the t-statistic–based tests become
slightly conservative but remain competitive with the Cauchy RT and VC methods.
Next, we analyze the finite-sample power properties of the tests. We consider β ∈ {0.004k, k =
1, · · · , 5} and T ∈ {20, 50, 100} under the same volatility specifications. The results are summa
rized in Tables 2–5. The proposed tests exhibit power comparable to that of the Cauchy RT and
Cauchy VC procedures. For small samples (T = 20), the Cauchy RT and VC tests occasionally
show higher power, but the difference diminishes as T increases. In certain settings, our meth
ods even outperform the existing approaches. For instance, t16(γˇ) dominates under β = 0.02,
κ ̄ = 0.5, and regime-switching volatility (Table 4), whereas the hybrid test τ (βˇ) performs best
under β = 0.004, κ ̄ = 20, T = 20, and regime-switching volatility.
In summary, all four robust inference procedures—Cauchy RT, Cauchy VC, tq(γˇ), and
τ (βˇ)—deliver accurate size control and strong discriminatory power under endogenously persis
tent regressors and persistent volatility. While the Cauchy RT requires high-frequency data and
a time transformation, and the Cauchy VC involves nonparametric volatility filtering with a
tuning parameter, our proposed t-statistic and hybrid methods are much simpler to implement
and require neither. Hence, these approaches are best viewed as complementary: the Cauchy
RT and Cauchy VC are preferable in high-frequency environments, whereas our procedures
provide robust and easily implementable alternatives in more general settings. It is also worth
16

emphasizing that the proposed methods, like the Cauchy VC, are applicable to both continuous
and discrete-time models, whereas the Cauchy RT method is restricted to the continuous-time
framework.
5.2 Discrete-Time Experiments
5.2.1 Simulation Design
We now examine the finite-sample performance of the proposed tests in a discrete-time
setting with an intercept, comparing them to the IVX test of Kostakis et al. (2015). The data
generating process (DGP) is specified as
yt = βxt−1 + σtεt,
xt =
(︁
1 − κ ̄
T
)︁
xt−1 + σtηt, (12)
for t = 2, . . . , T , where T ∈ {60, 240, 600} corresponds to 5, 20, and 50 years of monthly data.
We set β ∈ {0.5k : k = 0, 1, . . . , 5} and κ ̄ ∈ {0, 50, 100}, and consider a one-sided test of
H0 : β = 0 against HA : β > 0.16
The innovation process ηt follows an MA(q) process:
ηt =
q
∑︁
j=1
Cj vt−j ,
where (vt, ηt) are jointly normal with correlation −0.98. For the MA(2) case, C1 = C2 = 1/√2
and Cq = 0 for q > 3; for the MA(4) case, C1 = C2 = C3 = C4 = 1/2 and Cq = 0 for q > 5.
The volatility process σt follows the same specifications as in the continuous-time simulations,
except that the GBM model is excluded.
We implement the hybrid tests based on the even and odd observations, denoted by τ (βˇe)
and τ (βˇo), respectively (see (9)), along with their t-statistic versions (see (4)). For comparison,
we also include the IVX test of Kostakis et al. (2015).
5.2.2 Results
The results, summarized in Tables 6–11, indicate that the proposed tests exhibit excellent
size control under the null hypothesis across all DGPs, whereas the IVX test is substantially
16The IVX test of Kostakis et al. (2015) performs well in two-sided testing for a broad class of models.
However, as shown in Demetrescu et al. (2023), the IVX method exhibits severe size distortions in one-sided
tests when regressors are highly persistent and endogenous. For this reason, we focus on the one-sided case to
demonstrate the performance of our methods in this setting.
17

oversized, particularly when volatility is nonstationary or exhibits structural breaks. Further
more, both the hybrid and t-statistic approaches demonstrate nontrivial power, even though
they are constructed using only half of the observations. Among the size-controlled procedures,
the statistic t16(τ (βˇo)) consistently delivers the strongest performance.
Overall, these findings corroborate the theoretical robustness of our methods. They remain
valid under heavy-tailed, endogenous, and persistent regressors, as well as under heteroskedastic
and persistent volatility. In contrast, the IVX test performs well only under stationary volatility
and light tails. Hence, our proposed robust procedures offer a practical and reliable alternative
to existing inference methods for predictive regressions in both continuous- and discrete-time
frameworks.
6 Empirical Application
To illustrate the empirical performance of the proposed tests relative to the Cauchy RT and
Cauchy VC tests, we reexamine the dataset used by Choi et al. (2016) to test the predictability
of stock returns using the dividend–price (D/P) and earnings–price (E/P) ratios as predictors.
For stock returns, we employ the NYSE/AMEX value-weighted index and the S&P 500 index
obtained from the Center for Research in Security Prices (CRSP). The dividend–price ratio is
defined as the annual dividend divided by the current total market value. Further details on
data construction are provided in Section 6.1 of Choi et al. (2016).
Following Choi et al. (2016), we estimate two types of predictive regressions: one based on
all returns and another based only on returns generated from the diffusive component of stock
prices, obtained by first testing for jumps and removing observations corresponding to detected
jumps. In all cases, we apply one-sided tests.
The results are reported in Table 12. As shown in Panels C and D, none of the tests reject
the null hypothesis of unpredictability for the S&P 500 data when the E/P ratio is used as a
predictor. By contrast, when the D/P ratio serves as a predictor, the proposed tests—tq(γˇ) with
q = 12, 16 and τ (βˇ)—reject the null of unpredictability for several cases: CRSP (yearly without
jump removal; quarterly with jump removal) and S&P 500 (quarterly and yearly without jump
removal; yearly with jump removal). In contrast, the Cauchy RT test fails to reject the null
in all cases, while the Cauchy VC test yields qualitatively similar conclusions to our proposed
tests, except that it additionally rejects the null for CRSP (monthly with jump removal) and
S&P 500 (monthly with jump removal; quarterly with jump removal).
Consistent with our simulation evidence, the Cauchy RT test demonstrates strong finite
sample power but requires high-frequency data due to its reliance on a continuous-time ap
proximation.17 The mixed empirical results—where the Cauchy RT test fails to reject the null
while both the proposed methods and the Cauchy VC test do reject—may reflect the limited
17For the Cauchy RT test in our simulations, we estimate the discretized time-changed regression using n
18

accuracy of the continuous-time approximation when applied to monthly, quarterly, or yearly
data. Evaluating the robustness of the continuous-time approximation underlying the Cauchy
RT test remains an interesting topic for future research.
7 Conclusion
This paper introduces two robust inference methods for predictive regressions, address
ing key econometric challenges commonly encountered in empirical finance, such as endoge
nously persistent or heavy-tailed regressors and persistent volatility in errors. Building on the
Cauchy estimation framework, we develop two simple yet theoretically rigorous procedures: a
t-statistic–based approach and a hybrid method. Both methods are computationally straight
forward and applicable to continuous- and discrete-time models alike.
Simulation evidence demonstrates that the proposed tests perform well in finite samples,
maintaining correct size and competitive power under a wide range of data-generating processes,
including those characterized by stochastic volatility, structural breaks, and regime switching.
Although our procedures require the assumption of asymptotically exogenous volatility, they
exhibit excellent robustness and complement existing Cauchy-based methods, including the
IVX method of Kostakis et al. (2015), the Cauchy RT test of Choi et al. (2016) and the Cauchy
VC test of Ibragimov et al. (2024).
In an empirical application to stock return predictability, we use the dividend–price and
earnings–price ratios as predictors for excess returns on major U.S. equity indices. The results
indicate that the dividend–price ratio possesses predictive power, while the earnings–price ra
tio does not significantly forecast returns. Overall, the proposed inference procedures offer a
practical, theoretically sound, and implementable alternative to existing methods for robust
inference in predictive regressions.
Appendix: Proofs
Proof of Lemma 3.1. For j = 1, . . . , q, we have
γˇj − ζj =
√︂q
T
j[T /q]
∑︁
t=(j−1)[T /q]+1
sign(xt−1)ut = √q
∫︁ j/q
(j−1)/q
σT (r) dW T (r).
The stated result follows immediately from Assumptions 2.2 and 2.3.
lower-frequency observations, with n = 12T (approximately monthly), generated by the random time-sampling
scheme described in Section 5 of Choi et al. (2016).
19

Proof of Proposition 3.2. Part (a) follows from Theorem 1 and the discussion in Section 2.2 of
Ibragimov and M ̈uller (2010). For part (b), we deduce from Lemma 3.1 that
1
√︀ T /q γˇj = 1
√︀ T /q ζj + op
(︂ √1T
)︂
→p β E|xt| (A.2)
uniformly in j, under β ̸= 0. Recall that
tq(γˇ) =
√q γ
sγ
, with γ = 1
q
q
∑︁
j=1
γˇj, s2
γ= 1
q−1
q
∑︁
j=1
(γˇj − γ)2.
Hence, the numerator of tq(γˇ) satisfies
√q γ
√T →p β E|xt|. (A.3)
To complete the proof, it suffices to show that s2
γ = op(T ). Indeed, for q ≥ 2, we have
q(q − 1)
T s2
γ= 1
T /q
q
∑︁
j=1
(γˇj − γ)2 →p 0
due to (A.2) and (A.3), which completes the proof.
Proof of Corollary 3.3. We aim to show that
√q
T γ →d β
∫︁1
0
|X(r)| dr, (A.4)
and
q(q − 1)
T 2 s2
γ= q
T2
q
∑︁
j=1
(γˇj − γ)2 →d β2
q
∑︁
j=1
(︃
q
∫︁ j/q
(j−1)/q
|X(r)| dr −
∫︁1
0
|X(r)| dr
)︃2
. (A.5)
For (A.4), we have
√q
T γˇj =
√q
T ζj + op
(︂1
T
)︂
=β q
T 3/2
j[T /q]
∑︁
t=(j−1)[T /q]+1
|xt−1| + op(1) →d βq
∫︁ j/q
(j−1)/q
|X(r)| dr,
by Lemma 3.1 and (5), leading to (A.4). Moreover,
q
T 2 (γˇj − γ)2 →d β2
(︃
q
∫︁ j/q
(j−1)/q
|X(r)| dr −
∫︁1
0
|X(r)| dr
)︃2
,
which yields (A.5).
Combining (A.4) and (A.5), we obtain
tq(γˇ) =
√q γ
sγ
→d sign(β)Dq,
20

where
Dq =
∫︁1
0
|X(r)| dr
⎛
⎝
q(q − 1)
∑︀q
j=1(∫︀ 1
0 |X(r)| dr − q ∫︀ j/q
(j−1)/q |X(r)| dr)2
⎞
⎠
1/2
,
as desired. Furthermore, (q − 1)1/2Dq > 1 for q ≥ 2 with probability one, since
(q − 1)1/2Dq = (q − 1)
∫︁1
0
|X(r)| dr
⎛
⎝
q
∑︀q
j=1(∫︀ 1
0 |X(r)| dr − q ∫︀ j/q
(j−1)/q |X(r)| dr)2
⎞
⎠
1/2
> (q − 1) ∫︀ 1
0 |X(r)| dr
max1≤j≤q
⃒ ⃒ ⃒
∫︀1
0 |X(r)| dr − q ∫︀ j/q
(j−1)/q |X(r)| dr
⃒ ⃒ ⃒
> 1,
which completes the proof.
Proof of Proposition 3.4. It suffices to show that ωˆ2 →p ω2, since this implies
τ (βˇ) = γˇ
ω (1 + op(1)) =
(︃
β
∑︀T
t=1 |xt−1|
ω√T +
∑︀T
t=1 sign(xt−1)ut
ω√T
)︃
(1 + op(1)),
where, in particular,
∑︀T
t=1 sign(xt−1)ut
ω√T →d N(0, 1)
under Assumptions 2.1, 2.2, and 2.3.
Let ω2
T = T −1 ∑︀ T
t=1 u2
t . Then ω2
T →p ω2 by Assumptions 2.1 and 2.2. Furthermore,
ωˆ2 = ω2
T− 1
T
(
∑︀T
t=1 xt−1ut)2 ∑︀T
t=1 x2
t−1
= ω2
T + op(1)
by Assumption 3.1, which gives the desired result.
Proof of Lemma 4.1. We need only show that H0 holds if H(k)
0 holds for all k. Let C =
[β1, . . . , βK]′. By the moment restrictions, C is the solution to
E[zt−1yt] = E[diag(|x1,t−1|, . . . , |xK,t−1|)] C.
Given 0 < E[|xk,t−1|] < ∞ for all k, H(k)
0 holds for all k if and only if E[zt−1yt] = 0K×1.
Moreover,
E[zt−1yt] = E[zt−1x′
t−1]B,
and since E[zt−1x′
t−1] is assumed invertible, the condition E[zt−1yt] = 0K×1 implies B = 0,
completing the proof.
21

Proof of Corollary 4.2. Under the modified version of Assumption 3.1 stated in the corollary,
it follows from arguments analogous to those in the proof of Proposition 3.4 that ωˆ2 →p ω2.
Hence, it suffices to show that
1
ω√T
T /2
∑︁
t=1
sign(x2t−2)(u2t − u2t−1) →d N(0, 1).
Define ξt = sign(xt−2)ut for even t and ξt = − sign(xt−1)ut for odd t, so that
1
ω√T
T /2
∑︁
t=1
sign(x2t−2)(u2t − u2t−1) = 1
ω√T
T
∑︁
t=1
ξt.
By construction, (ξt) is an MDS with respect to (Ft) and satisfies E(ξ2
t | Ft−1) = v2
t under
Assumption 2.1. The desired convergence then follows directly from the martingale central
limit theorem, given Assumptions 2.2 and 2.3.
22

Table 1: Size for the continuous time models
 ̄κ = 0  ̄κ = 5  ̄κ = 20
T 5 20 50 5 20 50 5 20 50
CNSTCauchy RT 5.3 4.9 5.3 5.2 5.4 4.7 5.5 5.1 5.1
Cauchy VC 5.6 5.0 5.3 5.4 5.0 5.1 5.4 5.0 4.8
t8(γˇ) 4.8 4.6 5.2 4.7 5.0 5.1 4.8 4.9 5.0
t12(γˇ) 4.7 4.7 5.0 4.7 5.1 4.9 5.0 5.2 4.9
t16(γˇ) 4.8 4.8 5.1 4.9 5.0 4.9 4.7 4.9 4.9
τ (βˇ) 5.2 4.8 5.2 5.0 4.8 5.1 5.2 4.9 4.8
SB Cauchy RT 5.6 5.0 5.1 5.2 5.3 5.0 5.4 5.0 4.9
Cauchy VC 8.0 6.7 6.3 7.8 6.5 6.0 7.9 6.4 6.0
t8(γˇ) 3.6 3.7 3.9 4.0 4.1 3.7 3.8 3.7 3.7
t12(γˇ) 4.7 4.2 4.6 4.3 4.6 4.5 4.2 4.2 4.5
t16(γˇ) 4.7 4.6 4.6 4.8 4.7 4.5 4.3 4.6 4.5
τ (βˇ) 6.1 5.0 4.9 6.1 5.5 5.1 6.2 5.5 5.0
RS Cauchy RT 5.0 4.8 5.2 4.9 4.9 4.9 5.4 5.1 4.8
Cauchy VC 5.2 5.4 6.1 5.2 5.1 5.8 5.6 5.8 5.8
t8(γˇ) 4.5 4.5 5.1 4.6 4.4 4.9 4.6 5.3 4.6
t12(γˇ) 4.8 4.6 5.0 4.5 4.8 4.8 4.6 4.9 4.7
t16(γˇ) 5.0 4.4 4.9 4.6 4.6 4.9 5.1 5.1 4.5
τ (βˇ) 5.0 4.9 5.2 5.2 4.7 4.9 5.2 5.3 5.0
GBM Cauchy RT 4.4 4.7 4.4 4.3 4.5 4.4 4.6 4.5 4.5
Cauchy VC 5.4 5.5 6.1 5.7 5.7 5.9 5.7 5.9 6.5
t8(γˇ) 3.2 3.1 3.2 3.6 3.8 3.4 3.6 3.8 3.9
t12(γˇ) 3.8 3.6 3.7 4.2 4.3 3.6 4.2 4.2 4.3
t16(γˇ) 3.7 3.8 4.1 4.4 4.2 4.0 4.6 4.5 4.6
τ (βˇ) 5.3 4.6 5.0 5.2 4.8 4.9 5.6 4.9 5.2
CNST, SB, GBM, and RS denote constant volatility, structural break, geometric Brownian motion,
and regime switching, respectively.
23

Table 2: Power for the continuous time models, constant volatility
 ̄κ = 0  ̄κ = 5  ̄κ = 20
T 20 50 100 20 50 100 20 50 100
β = 0.004 Cauchy RT 8.8 25.2 85.4 6.1 9.9 22.7 6.3 13.2 27.9
Cauchy VC 9.1 25.6 86.2 6.5 10.0 23.5 8.2 13.4 26.8
t8(γˇ) 8.0 21.0 79.5 6.7 11.2 24.6 5.1 14.6 30.6
t12(γˇ) 9.5 21.4 82.0 6.2 10.5 25.4 5.9 14.3 31.0
t16(γˇ) 8.8 22.8 84.0 5.5 10.0 23.3 5.5 14.5 29.9
τ (βˇ) 6.4 23.5 66.6 5.3 8.6 17.5 5.9 12.9 24.3
β = 0.008 Cauchy RT 15.5 85.5 100.0 9.2 22.1 83.9 6.6 27.4 85.6
Cauchy VC 17.2 86.2 100.0 8.8 23.1 84.3 11.9 27.7 84.2
t8(γˇ) 13.8 79.9 100.0 9.1 23.5 86.7 6.0 32.5 89.2
t12(γˇ) 15.0 83.4 100.0 8.9 25.5 86.8 6.5 31.7 92.0
t16(γˇ) 15.0 83.7 100.0 8.3 23.7 87.0 6.1 31.9 91.7
τ (βˇ) 14.0 66.7 96.6 7.3 18.8 57.6 8.5 27.6 70.0
β = 0.012 Cauchy RT 37.3 99.2 100.0 12.2 50.1 100.0 7.7 52.2 100.0
Cauchy VC 40.2 99.3 100.0 12.6 51.9 100.0 16.5 56.3 100.0
t8(γˇ) 30.3 98.0 100.0 12.9 55.5 99.8 6.9 60.6 100.0
t12(γˇ) 33.1 99.5 100.0 12.0 56.3 100.0 7.2 61.6 100.0
t16(γˇ) 35.3 98.9 100.0 12.3 54.1 100.0 6.6 59.2 100.0
τ (βˇ) 32.4 87.7 99.1 9.7 34.0 93.5 12.1 48.9 99.0
β = 0.016 Cauchy RT 67.0 100.0 100.0 17.0 84.4 100.0 8.4 83.2 100.0
Cauchy VC 68.8 100.0 100.0 16.6 84.7 100.0 22.4 83.3 100.0
t8(γˇ) 58.8 99.7 100.0 18.1 88.7 100.0 7.3 88.7 100.0
t12(γˇ) 60.7 100.0 100.0 16.8 86.6 100.0 7.6 89.7 100.0
t16(γˇ) 62.4 99.9 100.0 16.7 86.9 100.0 7.0 89.2 100.0
τ (βˇ) 51.2 95.8 99.9 12.4 58.5 99.0 17.8 72.9 100.0
β = 0.02 Cauchy RT 86.7 100.0 100.0 23.2 98.0 100.0 9.3 98.2 100.0
Cauchy VC 87.9 100.0 100.0 24.4 98.5 100.0 29.4 97.4 100.0
t8(γˇ) 79.3 100.0 100.0 24.6 97.8 100.0 8.5 98.3 100.0
t12(γˇ) 81.9 100.0 100.0 23.8 99.1 100.0 8.5 99.1 100.0
t16(γˇ) 82.3 100.0 100.0 23.2 98.3 100.0 7.7 99.2 100.0
τ (βˇ) 65.2 97.5 100.0 16.3 81.3 99.6 23.8 92.3 100.0
24

Table 3: Power for the continuous time models, structural break in volatility
 ̄κ = 0  ̄κ = 5  ̄κ = 20
T 20 50 100 20 50 100 20 50 100
β = 0.004 Cauchy RT 8.7 20.0 67.7 8.3 11.6 35.9 8.7 17.2 52.4
Cauchy VC 8.5 20.6 57.6 8.9 10.5 19.2 8.2 14.6 25.3
t8(γˇ) 5.6 11.3 45.6 4.4 8.7 15.7 6.4 8.4 23.3
t12(γˇ) 6.6 14.8 45.3 6.7 9.1 17.5 6.2 10.5 22.7
t16(γˇ) 8.2 14.6 44.1 6.9 8.9 19.5 6.6 10.1 22.9
τ (βˇ) 5.8 13.7 31.4 7.1 8.1 13.5 5.8 10.2 16.7
β = 0.008 Cauchy RT 14.4 65.1 96.6 11.7 35.7 88.4 14.5 52.2 99.6
Cauchy VC 14.9 60.6 95.6 10.8 21.6 55.8 11.5 30.1 72.9
t8(γˇ) 9.5 44.1 88.5 6.8 16.3 57.4 9.0 21.0 68.3
t12(γˇ) 11.4 45.6 89.8 8.9 17.9 55.9 9.2 23.6 69.4
t16(γˇ) 12.7 42.3 92.1 8.4 18.3 55.9 8.8 22.2 72.2
τ (βˇ) 8.9 32.4 81.9 8.9 14.0 34.3 7.9 16.6 49.7
β = 0.012 Cauchy RT 32.1 87.0 99.3 15.5 68.6 98.8 24.2 90.1 100.0
Cauchy VC 26.1 83.1 99.2 13.5 36.0 91.1 15.5 50.3 98.8
t8(γˇ) 16.9 72.9 97.0 9.2 32.7 89.0 12.0 43.1 95.2
t12(γˇ) 20.7 74.5 99.1 11.9 34.5 90.0 12.2 41.7 98.0
t16(γˇ) 20.0 74.3 99.6 10.0 31.9 90.7 12.6 41.4 98.8
τ (βˇ) 14.7 60.2 98.1 10.8 23.4 73.7 10.8 33.2 92.1
β = 0.016 Cauchy RT 50.2 95.6 99.7 22.8 89.8 100.0 37.7 99.7 100.0
Cauchy VC 42.9 95.1 99.6 17.0 58.9 99.5 20.7 74.5 100.0
t8(γˇ) 30.2 88.8 98.5 12.6 56.2 96.1 16.6 67.4 99.8
t12(γˇ) 31.7 90.4 99.7 14.7 53.8 98.4 17.0 65.0 100.0
t16(γˇ) 31.8 91.1 100.0 13.0 54.4 99.0 18.5 66.6 100.0
τ (βˇ) 23.2 81.4 99.8 13.0 35.6 96.9 14.3 51.8 100.0
β = 0.02 Cauchy RT 65.4 98.6 99.9 34.6 97.4 100.0 55.1 100.0 100.0
Cauchy VC 58.8 98.5 100.0 21.4 78.7 99.9 27.1 91.5 100.0
t8(γˇ) 45.5 95.3 98.8 17.6 74.0 98.2 21.7 86.2 100.0
t12(γˇ) 46.1 96.4 99.8 18.0 75.7 99.7 22.7 87.5 100.0
t16(γˇ) 44.7 97.9 100.0 18.0 73.9 100.0 24.9 87.9 100.0
τ (βˇ) 32.2 92.4 100.0 15.7 56.6 99.8 18.2 73.4 100.0
25

Table 4: Power for the continuous time models, regime switching in volatility
 ̄κ = 0  ̄κ = 5  ̄κ = 20
T 20 50 100 20 50 100 20 50 100
β = 0.004 Cauchy RT 6.6 23.8 64.2 5.9 10.3 21.0 8.1 12.8 32.9
Cauchy VC 11.0 49.9 85.9 7.8 12.9 33.0 7.4 13.0 34.5
t8(γˇ) 7.7 22.1 77.7 6.1 11.8 22.2 7.5 10.4 28.4
t12(γˇ) 8.0 23.2 83.6 6.2 10.9 22.6 7.7 11.0 28.9
t16(γˇ) 7.9 22.8 84.0 6.5 11.8 22.9 7.8 10.6 30.8
τ (βˇ) 8.2 22.3 64.8 7.2 7.6 15.0 8.3 9.3 20.2
β = 0.008 Cauchy RT 11.9 69.3 96.0 8.0 20.3 65.5 12.2 32.2 90.2
Cauchy VC 25.7 84.6 97.8 10.0 30.2 84.1 10.8 28.2 86.6
t8(γˇ) 15.9 77.2 99.8 9.6 24.3 79.8 10.5 26.9 81.9
t12(γˇ) 15.2 80.5 99.9 9.2 23.8 81.3 11.0 27.0 82.9
t16(γˇ) 16.0 82.1 100.0 9.5 24.9 81.4 11.5 26.6 83.7
τ (βˇ) 16.7 67.7 94.4 9.1 13.8 50.9 10.3 19.2 60.0
β = 0.012 Cauchy RT 31.6 87.0 98.9 10.7 39.8 95.5 17.9 63.4 99.5
Cauchy VC 47.3 94.5 98.5 12.1 58.3 95.4 14.9 53.5 98.7
t8(γˇ) 33.0 96.7 100.0 13.9 50.8 99.1 15.4 51.7 99.4
t12(γˇ) 35.1 98.2 100.0 13.3 52.2 99.5 15.1 55.5 99.8
t16(γˇ) 34.8 98.3 100.0 13.2 51.2 99.1 15.4 53.5 99.8
τ (βˇ) 32.3 86.6 98.2 11.1 29.0 87.6 13.1 37.8 95.0
β = 0.016 Cauchy RT 52.7 95.2 99.7 14.2 65.3 99.3 26.2 90.6 100.0
Cauchy VC 65.1 97.2 99.0 17.3 81.7 97.4 19.3 78.2 99.6
t8(γˇ) 52.5 99.7 100.0 18.0 82.1 99.9 21.8 80.0 100.0
t12(γˇ) 59.7 99.6 100.0 18.2 83.6 100.0 20.9 82.5 100.0
t16(γˇ) 61.3 99.9 100.0 19.4 81.8 100.0 21.6 81.0 100.0
τ (βˇ) 51.6 94.3 98.9 13.5 54.9 96.6 17.4 59.5 99.5
β = 0.02 Cauchy RT 66.4 97.7 100.0 20.9 86.1 99.9 36.2 98.2 100.0
Cauchy VC 76.8 98.0 99.2 21.5 91.1 98.7 25.0 92.1 99.7
t8(γˇ) 74.3 100.0 100.0 23.7 95.4 99.9 27.8 94.7 100.0
t12(γˇ) 80.4 99.9 100.0 23.6 96.3 100.0 28.4 95.8 100.0
t16(γˇ) 81.1 100.0 100.0 25.7 96.8 100.0 29.1 96.3 100.0
τ (βˇ) 67.3 97.0 99.1 17.3 77.2 98.7 22.7 81.8 99.8
26

Table 5: Power for the continuous time models, geometric Brownian motion
 ̄κ = 0  ̄κ = 5  ̄κ = 20
T 20 50 100 20 50 100 20 50 100
β = 0.004 Cauchy RT 7.8 19.2 59.9 6.0 9.6 24.6 8.5 14.0 41.8
Cauchy VC 42.4 59.7 80.4 6.7 13.0 29.5 7.2 10.8 19.6
t8(γˇ) 11.0 27.1 67.7 4.4 7.5 21.4 5.7 8.4 18.8
t12(γˇ) 10.3 28.5 72.0 5.4 8.8 21.7 4.9 8.1 19.2
t16(γˇ) 10.2 29.2 73.2 5.5 9.3 21.2 5.8 9.2 19.9
τ (βˇ) 8.8 25.5 61.8 5.6 7.5 13.3 6.2 7.0 14.7
β = 0.008 Cauchy RT 13.7 59.1 92.4 8.2 24.7 73.4 13.2 40.9 92.8
Cauchy VC 55.3 78.9 91.2 9.4 28.0 53.6 8.8 20.5 51.2
t8(γˇ) 21.6 65.5 94.6 7.0 18.8 68.3 8.4 16.3 57.5
t12(γˇ) 23.9 69.7 95.5 7.4 21.2 70.9 7.0 18.6 63.2
t16(γˇ) 22.4 71.3 96.5 7.9 21.1 72.2 8.2 19.3 64.7
τ (βˇ) 21.2 59.2 88.0 6.7 12.0 35.0 8.0 14.5 40.5
β = 0.012 Cauchy RT 29.0 80.8 97.9 11.2 48.3 95.0 18.7 72.2 99.2
Cauchy VC 65.6 88.3 92.2 13.8 42.9 65.6 12.1 36.1 69.9
t8(γˇ) 38.9 85.5 97.3 10.7 43.0 89.6 10.4 35.2 81.2
t12(γˇ) 40.2 88.4 98.5 11.0 43.6 93.0 10.5 39.8 88.0
t16(γˇ) 42.0 89.0 99.1 10.0 44.4 92.8 11.1 39.6 91.5
τ (βˇ) 38.9 77.0 92.1 8.3 22.3 64.9 10.8 26.3 69.7
β = 0.016 Cauchy RT 47.9 91.7 99.1 16.0 70.5 98.5 27.8 91.5 99.7
Cauchy VC 73.4 91.6 93.4 17.6 56.2 70.4 15.0 52.5 77.3
t8(γˇ) 53.4 91.8 98.4 14.6 68.5 94.4 13.9 57.8 83.9
t12(γˇ) 57.4 94.9 99.3 14.9 71.3 97.1 15.1 63.9 93.9
t16(γˇ) 58.9 95.2 99.6 14.4 72.6 98.2 15.9 62.9 96.6
τ (βˇ) 51.2 86.3 93.5 10.3 37.4 74.8 13.1 42.1 82.3
β = 0.02 Cauchy RT 60.1 96.6 99.5 23.7 87.6 98.9 40.3 97.9 99.9
Cauchy VC 79.7 92.6 93.9 22.3 64.9 72.9 19.4 63.6 80.7
t8(γˇ) 67.5 94.8 99.0 20.2 81.4 96.0 18.3 71.0 85.5
t12(γˇ) 69.9 97.2 99.7 19.7 85.7 98.6 20.0 80.7 95.0
t16(γˇ) 72.9 97.2 99.9 20.2 87.5 99.1 21.2 79.9 98.2
τ (βˇ) 59.9 90.7 94.4 12.8 54.6 80.2 16.8 57.5 89.5
27

Table 6: Size and power for the discrete time models, constant volatility, MA(2) innovation
κ ̄ = 0 κ ̄ = 50 κ ̄ = 100
T 20 50 100 20 50 100 20 50 100
β = 0 τ (βˇo) 5.0 4.9 4.8 5.2 5.3 4.8 4.5 4.7 5.2
τ (βˇe) 4.8 4.7 5.2 5.0 4.8 4.8 5.1 5.0 4.9
t8(τ (βˇo)) 4.7 4.5 4.8 3.4 4.1 4.5 3.7 5.0 4.6
t12(τ (βˇo)) 5.1 4.7 4.5 3.1 3.8 4.4 2.8 4.0 4.2
t16(τ (βˇo)) 4.9 4.9 5.1 2.8 4.0 4.2 2.5 3.5 3.9
IVX 14.2 13.5 12.3 10.2 10.5 10.3 9.5 10.3 10.5
β = 0.5 τ (βˇo) 8.4 7.9 8.4 17.0 17.5 16.6 24.9 24.9 25.8
τ (βˇe) 8.2 8.0 8.4 17.4 16.0 17.1 25.4 25.7 26.0
t8(τ (βˇo)) 15.4 15.6 15.9 12.7 14.2 15.4 18.7 20.5 21.9
t12(τ (βˇo)) 20.3 20.9 20.2 13.8 15.1 15.8 18.2 21.4 21.6
t16(τ (βˇo)) 24.8 24.9 26.0 15.0 16.7 18.4 18.3 20.9 22.3
IVX 100.0 100.0 100.0 100.0 100.0 100.0 100.0 100.0 100.0
β = 1 τ (βˇo) 13.4 13.4 13.9 39.3 41.1 39.7 60.5 61.1 62.0
τ (βˇe) 13.7 13.5 13.7 39.6 39.1 39.6 62.0 62.8 62.5
t8(τ (βˇo)) 33.8 33.5 33.6 29.7 32.4 33.0 45.1 48.9 50.7
t12(τ (βˇo)) 47.1 47.4 47.1 35.0 36.4 37.0 47.6 51.9 52.6
t16(τ (βˇo)) 58.8 58.6 59.4 42.2 42.0 43.0 52.3 53.8 56.0
IVX 100.0 100.0 100.0 100.0 100.0 100.0 100.0 100.0 100.0
β = 1.5 τ (βˇo) 20.2 20.1 20.8 63.3 65.2 65.0 85.9 87.6 87.7
τ (βˇe) 20.7 20.4 20.6 63.3 64.0 64.3 86.5 87.8 87.8
t8(τ (βˇo)) 52.8 52.0 52.0 49.0 52.4 53.0 68.4 74.0 75.4
t12(τ (βˇo)) 71.3 70.8 70.7 58.8 59.8 59.6 73.6 77.4 79.2
t16(τ (βˇo)) 83.7 83.2 83.4 69.8 68.5 68.5 80.0 80.8 82.7
IVX 100.0 100.0 100.0 100.0 100.0 100.0 100.0 100.0 100.0
β = 2 τ (βˇo) 27.7 27.3 28.3 80.3 82.1 82.9 95.4 96.6 97.2
τ (βˇe) 28.0 27.3 28.4 80.1 81.4 82.6 95.9 97.0 97.1
t8(τ (βˇo)) 68.1 67.0 66.7 65.5 68.5 69.1 83.7 88.5 89.4
t12(τ (βˇo)) 86.3 85.0 85.1 76.8 77.4 77.7 88.8 91.1 92.6
t16(τ (βˇo)) 94.3 93.9 94.1 86.2 85.3 85.6 93.2 94.0 94.8
IVX 100.0 100.0 100.0 100.0 100.0 100.0 100.0 100.0 100.0
β = 2.5 τ (βˇo) 34.3 33.7 34.7 89.5 91.7 92.1 98.6 99.2 99.3
τ (βˇe) 34.8 33.8 35.4 89.1 91.2 92.0 98.7 99.1 99.3
t8(τ (βˇo)) 78.5 77.8 77.4 76.7 79.5 80.5 90.9 94.7 95.7
t12(τ (βˇo)) 93.5 92.9 92.9 87.7 87.8 88.7 95.4 96.6 97.5
t16(τ (βˇo)) 98.2 98.1 98.0 94.8 93.9 94.2 97.7 98.1 98.6
IVX 100.0 100.0 100.0 100.0 100.0 100.0 100.0 100.0 100.0
28

Table 7: Size and power for the discrete time models, constant volatility, MA(4) innovation
κ ̄ = 0 κ ̄ = 50 κ ̄ = 100
T 20 50 100 20 50 100 20 50 100
β = 0 τ (βˇo) 5.0 4.9 4.8 5.2 5.3 4.8 4.5 4.7 5.2
τ (βˇe) 4.8 4.7 5.2 5.0 4.8 4.8 5.1 5.0 4.9
t8(τ (βˇo)) 4.7 4.5 4.8 3.4 4.1 4.5 3.7 5.0 4.6
t12(τ (βˇo)) 5.1 4.7 4.5 3.1 3.8 4.4 2.8 4.0 4.2
t16(τ (βˇo)) 4.9 4.9 5.1 2.8 4.0 4.2 2.5 3.5 3.9
IVX 14.2 13.5 12.3 10.2 10.5 10.3 9.5 10.3 10.5
β = 0.5 τ (βˇo) 7.1 6.7 7.0 12.3 12.5 12.2 16.5 16.6 17.2
τ (βˇe) 7.0 7.0 7.2 12.4 11.5 12.3 16.8 17.2 17.5
t8(τ (βˇo)) 11.5 11.2 12.0 9.1 10.6 11.4 13.0 14.1 15.0
t12(τ (βˇo)) 14.4 14.4 14.1 9.6 10.9 11.7 11.6 14.1 14.5
t16(τ (βˇo)) 16.7 16.5 17.6 10.1 11.7 13.0 11.3 13.6 14.6
IVX 100.0 100.0 100.0 100.0 100.0 100.0 100.0 100.0 100.0
β = 1 τ (βˇo) 10.1 9.8 10.3 25.4 25.8 24.6 39.4 39.4 40.5
τ (βˇe) 10.3 10.0 10.4 25.4 24.2 25.4 40.3 40.3 40.8
t8(τ (βˇo)) 22.5 22.6 23.0 18.7 21.1 22.0 28.7 31.9 33.6
t12(τ (βˇo)) 31.2 31.4 30.4 21.5 23.2 24.1 29.0 33.4 33.6
t16(τ (βˇo)) 38.7 38.8 39.2 25.1 26.4 28.0 31.0 33.4 34.9
IVX 100.0 100.0 100.0 100.0 100.0 100.0 100.0 100.0 100.0
β = 1.5 τ (βˇo) 14.2 14.2 14.7 42.4 44.1 43.1 64.4 65.1 66.4
τ (βˇe) 14.4 14.4 14.4 42.8 42.5 42.8 65.9 66.9 66.5
t8(τ (βˇo)) 36.4 36.0 36.0 32.2 34.7 35.2 48.3 52.5 54.5
t12(τ (βˇo)) 50.3 50.5 50.3 37.8 39.1 40.0 51.2 55.2 56.5
t16(τ (βˇo)) 62.5 62.3 63.3 46.0 45.4 46.1 56.9 57.9 60.0
IVX 100.0 100.0 100.0 100.0 100.0 100.0 100.0 100.0 100.0
β = 2 τ (βˇo) 19.0 18.9 19.6 59.7 61.4 61.6 82.9 84.3 84.6
τ (βˇe) 19.4 19.1 19.1 59.5 60.2 60.6 83.4 84.7 84.8
t8(τ (βˇo)) 49.9 49.0 49.3 45.7 48.9 49.7 65.1 70.4 72.2
t12(τ (βˇo)) 67.9 67.5 67.1 55.1 56.2 55.9 69.9 73.8 75.9
t16(τ (βˇo)) 80.4 80.3 80.5 65.8 64.5 64.3 76.5 77.2 79.4
IVX 100.0 100.0 100.0 100.0 100.0 100.0 100.0 100.0 100.0
β = 2.5 τ (βˇo) 24.1 24.1 24.9 73.1 75.7 75.7 92.5 93.8 94.4
τ (βˇe) 24.5 24.0 24.6 73.7 74.3 75.5 92.8 94.1 94.1
t8(τ (βˇo)) 61.6 60.4 60.7 58.5 61.6 62.0 77.8 83.2 84.4
t12(τ (βˇo)) 80.4 79.2 79.4 69.3 70.5 70.1 83.1 86.1 87.8
t16(τ (βˇo)) 90.6 90.1 90.3 79.9 78.8 79.0 88.7 89.3 90.8
IVX 100.0 100.0 100.0 100.0 100.0 100.0 100.0 100.0 100.0
29

Table 8: Size and power for the discrete time models, structural break in volatility, MA(2)
innovation
κ ̄ = 0 κ ̄ = 50 κ ̄ = 100
T 20 50 100 20 50 100 20 50 100
β = 0 τ (βˇo) 4.5 4.9 5.1 5.3 5.2 4.8 5.1 4.7 4.7
τ (βˇe) 4.8 4.8 4.9 5.0 4.5 4.8 5.0 4.9 4.9
t8(τ (βˇo)) 3.7 3.7 3.7 2.4 3.4 3.5 2.8 3.5 3.4
t12(τ (βˇo)) 4.5 4.3 3.8 3.0 3.6 3.8 2.7 3.3 3.6
t16(τ (βˇo)) 4.3 4.8 4.6 2.7 3.4 4.1 2.5 3.1 3.7
IVX 30.7 31.2 30.1 32.8 34.2 34.3 33.9 34.5 36.0
β = 0.5 τ (βˇo) 7.7 8.1 8.7 13.7 13.7 13.2 18.5 18.7 19.3
τ (βˇe) 8.0 8.2 8.4 13.6 13.0 12.8 19.3 19.7 19.7
t8(τ (βˇo)) 11.5 11.6 11.7 9.2 10.5 10.8 12.9 15.1 15.6
t12(τ (βˇo)) 16.0 16.0 16.0 10.8 12.1 12.4 13.3 16.1 16.6
t16(τ (βˇo)) 19.6 20.2 20.5 12.2 13.8 14.6 14.6 16.1 17.6
IVX 100.0 100.0 100.0 100.0 100.0 100.0 100.0 100.0 100.0
β = 1 τ (βˇo) 13.5 13.5 14.3 29.2 29.3 28.5 44.3 45.0 46.0
τ (βˇe) 14.0 13.8 13.9 28.2 28.1 27.3 46.1 46.6 46.1
t8(τ (βˇo)) 24.8 24.7 24.8 21.1 23.1 23.4 32.0 35.3 36.3
t12(τ (βˇo)) 36.3 36.6 36.4 27.3 28.2 28.0 35.0 39.3 39.6
t16(τ (βˇo)) 44.8 45.7 46.1 31.5 33.6 34.2 39.5 41.0 43.0
IVX 100.0 100.0 100.0 100.0 100.0 100.0 100.0 100.0 100.0
β = 1.5 τ (βˇo) 20.4 20.4 21.5 46.8 48.1 47.6 68.9 70.8 72.2
τ (βˇe) 21.3 20.8 21.0 46.9 46.3 47.5 71.2 71.5 72.5
t8(τ (βˇo)) 39.4 38.6 39.3 35.6 37.6 38.0 51.1 56.1 57.6
t12(τ (βˇo)) 56.3 57.2 56.4 45.7 46.4 45.9 57.6 62.3 63.3
t16(τ (βˇo)) 67.5 69.2 69.3 53.9 55.3 55.1 63.8 65.9 67.7
IVX 100.0 100.0 100.0 100.0 100.0 100.0 100.0 100.0 100.0
β = 2 τ (βˇo) 27.6 27.7 28.9 62.7 64.9 64.7 84.4 87.3 88.0
τ (βˇe) 28.3 28.0 28.0 63.2 63.2 64.5 85.7 87.3 87.9
t8(τ (βˇo)) 51.7 51.4 51.6 48.5 50.0 51.8 65.0 71.3 72.7
t12(τ (βˇo)) 71.7 72.5 71.4 62.0 62.2 62.1 74.0 77.3 79.1
t16(τ (βˇo)) 82.3 83.1 83.1 71.6 72.3 72.0 81.1 82.0 83.9
IVX 100.0 100.0 100.0 100.0 100.0 100.0 100.0 100.0 100.0
β = 2.5 τ (βˇo) 34.4 34.3 35.5 74.0 76.9 77.2 92.1 94.6 95.4
τ (βˇe) 35.1 34.6 34.3 74.7 75.9 77.3 93.0 94.6 95.3
q=4 23.8 23.3 23.4 34.1 37.0 38.4 46.8 50.2 51.4
t8(τ (βˇo)) 61.7 61.1 61.2 58.6 60.4 62.5 74.1 80.5 82.4
t12(τ (βˇo)) 81.7 82.3 81.3 73.6 73.7 74.4 84.0 86.5 88.2
t16(τ (βˇo)) 90.6 91.1 91.4 83.2 83.1 83.0 90.1 91.1 91.9
IVX 100.0 100.0 100.0 100.0 100.0 100.0 100.0 100.0 100.0
30

Table 9: Size and power for the discrete time models, structural break in volatility, MA(4)
innovation
κ ̄ = 0 κ ̄ = 50 κ ̄ = 100
T 20 50 100 20 50 100 20 50 100
β = 0 τ (βˇo) 4.6 4.9 5.0 4.5 5.0 5.0 4.3 5.0 5.0
τ (βˇe) 4.8 4.7 4.8 4.6 4.6 4.8 4.9 5.1 5.4
q=4 3.3 3.1 3.0 2.2 2.5 3.0 2.4 2.7 3.0
t8(τ (βˇo)) 3.4 3.7 3.5 2.2 2.7 3.0 2.0 2.7 3.2
t12(τ (βˇo)) 4.2 4.1 3.7 2.2 2.8 3.2 1.8 2.6 3.0
t16(τ (βˇo)) 4.3 4.4 4.4 2.5 2.7 3.3 1.6 2.3 3.0
IVX 32.7 32.5 31.2 32.1 33.5 34.3 32.4 34.1 35.5
β = 0.5 τ (βˇo) 9.8 10.1 11.0 7.9 8.9 9.0 9.0 11.4 12.0
τ (βˇe) 10.2 10.2 10.4 8.0 8.3 8.8 10.4 11.8 12.4
t8(τ (βˇo)) 15.1 15.3 15.5 5.5 6.7 7.5 5.8 8.1 9.0
t12(τ (βˇo)) 21.6 22.5 22.1 7.1 9.0 9.3 6.1 8.9 9.9
t16(τ (βˇo)) 26.3 28.5 28.5 9.0 10.3 12.1 6.6 9.6 10.7
IVX 100.0 100.0 100.0 100.0 100.0 100.0 100.0 100.0 100.0
β = 1 τ (βˇo) 18.9 19.2 20.8 13.9 16.0 15.7 18.1 23.3 25.3
τ (βˇe) 19.3 20.0 20.0 14.0 14.7 15.8 20.0 24.4 26.2
t8(τ (βˇo)) 34.2 34.0 34.5 11.9 14.1 15.1 13.3 18.6 19.8
t12(τ (βˇo)) 48.3 50.4 50.2 18.2 20.2 21.7 16.1 21.9 23.3
t16(τ (βˇo)) 59.6 61.5 62.9 22.8 26.5 28.3 18.2 24.6 26.9
IVX 100.0 100.0 100.0 100.0 100.0 100.0 100.0 100.0 100.0
β = 1.5 τ (βˇo) 29.3 29.7 30.9 22.0 25.4 25.5 31.0 39.5 43.1
τ (βˇe) 29.4 29.7 30.0 21.9 24.4 25.8 33.9 40.5 43.3
t8(τ (βˇo)) 50.5 50.7 50.9 21.5 24.0 25.3 24.4 31.9 33.6
t12(τ (βˇo)) 69.6 71.3 71.2 33.1 35.7 37.3 30.8 38.3 40.3
t16(τ (βˇo)) 81.2 83.1 83.2 41.5 46.4 47.7 36.5 44.0 47.4
IVX 100.0 100.0 100.0 100.0 100.0 100.0 100.0 100.0 100.0
β = 2 τ (βˇo) 38.4 38.1 39.8 31.5 36.6 36.8 45.5 56.6 60.8
τ (βˇe) 38.5 38.7 38.8 31.8 35.8 37.5 49.0 58.0 60.4
t8(τ (βˇo)) 63.2 63.5 63.0 31.9 34.5 36.6 36.1 45.2 47.7
t12(τ (βˇo)) 82.2 83.8 83.8 49.2 51.5 52.3 46.4 54.8 56.8
t16(τ (βˇo)) 91.6 92.8 92.7 60.3 64.8 65.0 54.6 62.8 65.2
IVX 100.0 100.0 100.0 100.0 100.0 100.0 100.0 100.0 100.0
β = 2.5 τ (βˇo) 45.9 45.2 46.9 41.8 47.2 48.6 59.1 70.3 74.9
τ (βˇe) 45.5 45.7 46.3 41.9 47.2 48.4 62.4 71.8 74.2
t8(τ (βˇo)) 71.5 71.7 70.9 41.7 45.3 46.4 46.5 56.7 59.3
t12(τ (βˇo)) 89.5 90.3 90.3 62.4 64.9 64.7 60.0 68.1 69.8
t16(τ (βˇo)) 96.2 96.8 96.6 74.1 77.3 78.2 70.3 76.7 78.3
IVX 100.0 100.0 100.0 100.0 100.0 100.0 100.0 100.0 100.0
31

Table 10: Size and power for the discrete time models, regime switching in volatility, MA(2)
innovation
κ ̄ = 0 κ ̄ = 50 κ ̄ = 100
T 20 50 100 20 50 100 20 50 100
β = 0 τ (βˇo) 3.2 4.0 4.3 4.7 5.0 5.0 5.2 4.9 4.8
τ (βˇe) 3.8 3.9 4.2 5.0 4.9 4.9 4.9 5.1 4.8
t8(τ (βˇo)) 2.6 2.9 3.5 2.7 2.5 3.0 3.4 3.4 4.0
t12(τ (βˇo)) 2.4 2.3 3.2 1.8 2.0 2.5 2.3 2.6 3.2
t16(τ (βˇo)) 2.3 2.1 2.8 1.7 1.8 2.3 2.1 2.0 2.4
IVX 13.5 13.2 12.4 9.7 11.1 11.0 10.3 11.2 12.4
β = 0.5 τ (βˇo) 5.8 6.8 7.4 16.1 17.1 16.6 23.4 24.1 24.4
τ (βˇe) 6.4 6.7 6.9 16.8 16.8 16.6 23.9 24.9 23.6
t8(τ (βˇo)) 10.2 10.8 12.1 11.0 11.5 12.3 16.2 17.4 19.0
t12(τ (βˇo)) 13.3 13.8 15.0 11.5 10.7 11.8 17.0 17.1 18.3
t16(τ (βˇo)) 16.1 16.0 18.8 12.9 12.0 12.9 17.7 15.4 18.0
IVX 100.0 100.0 100.0 100.0 100.0 100.0 100.0 100.0 100.0
β = 1 τ (βˇo) 10.4 11.3 12.0 39.6 40.9 39.3 56.7 60.4 60.6
τ (βˇe) 11.0 11.7 11.8 39.7 39.6 39.8 57.3 60.9 59.6
t8(τ (βˇo)) 26.2 27.6 28.7 28.6 30.4 30.1 41.8 45.1 47.2
t12(τ (βˇo)) 37.5 39.1 40.4 34.4 33.2 33.4 46.9 47.9 48.9
t16(τ (βˇo)) 47.6 49.3 50.2 41.3 38.2 38.3 53.6 49.7 50.2
IVX 100.0 100.0 100.0 100.0 100.0 100.0 100.0 100.0 100.0
β = 1.5 τ (βˇo) 17.3 18.2 19.0 64.3 67.1 63.9 81.5 86.0 87.0
τ (βˇe) 17.9 18.6 18.7 63.8 65.3 64.4 82.2 86.8 86.2
t8(τ (βˇo)) 45.8 46.7 47.9 49.7 51.9 50.3 65.8 70.3 72.3
t12(τ (βˇo)) 63.9 65.3 66.4 60.3 58.8 58.2 74.7 75.4 76.2
t16(τ (βˇo)) 76.6 77.6 78.2 70.9 67.5 65.9 82.3 80.3 78.4
IVX 100.0 100.0 100.0 100.0 100.0 100.0 100.0 100.0 100.0
β = 2 τ (βˇo) 25.0 25.4 26.5 80.2 83.1 81.7 92.0 95.5 96.4
τ (βˇe) 25.6 26.2 25.9 79.4 82.0 82.1 92.5 95.5 96.1
t8(τ (βˇo)) 62.3 62.9 63.6 66.5 68.0 67.3 80.4 84.3 86.0
t12(τ (βˇo)) 81.2 82.7 83.6 79.0 78.2 76.9 89.0 90.0 90.2
t16(τ (βˇo)) 91.1 91.9 92.4 88.4 85.9 84.8 94.6 93.5 93.3
IVX 100.0 100.0 100.0 100.0 100.0 100.0 100.0 100.0 100.0
β = 2.5 τ (βˇo) 32.6 32.5 33.9 88.9 91.4 90.7 96.5 98.6 99.1
τ (βˇe) 33.4 33.6 32.7 88.2 90.9 90.6 96.8 98.6 98.9
t8(τ (βˇo)) 73.9 75.2 75.6 78.3 79.5 78.8 88.7 91.8 92.9
t12(τ (βˇo)) 91.0 91.9 92.2 89.7 89.0 88.2 95.7 95.9 96.1
t16(τ (βˇo)) 96.9 97.1 97.4 95.7 94.6 94.2 98.3 98.0 97.9
IVX 100.0 100.0 100.0 100.0 100.0 100.0 100.0 100.0 100.0
32

Table 11: Size and power for the discrete time models, regime switching in volatility, MA(4)
innovation
κ ̄ = 0 κ ̄ = 50 κ ̄ = 100
T 20 50 100 20 50 100 20 50 100
β = 0 τ (βˇo) 3.8 3.9 4.3 4.3 5.1 5.3 4.6 4.8 4.9
τ (βˇe) 4.0 4.2 4.3 4.8 4.9 4.7 4.9 4.8 4.5
t8(τ (βˇo)) 3.5 3.5 3.5 2.3 2.3 2.5 2.3 2.4 3.2
t12(τ (βˇo)) 3.1 3.4 3.2 1.8 2.0 2.6 2.0 1.9 2.6
t16(τ (βˇo)) 3.5 3.2 3.4 1.6 1.8 2.1 1.6 1.8 2.0
IVX 15.6 13.6 13.4 9.8 10.5 11.1 9.6 11.2 12.4
β = 0.5 τ (βˇo) 7.8 7.9 8.8 10.2 11.6 11.5 12.4 14.5 15.8
τ (βˇe) 8.5 8.7 8.7 10.5 11.4 11.9 12.7 14.4 14.9
t8(τ (βˇo)) 16.0 15.5 17.4 8.2 7.9 8.0 8.8 9.8 11.2
t12(τ (βˇo)) 20.7 21.9 23.2 9.3 8.9 9.2 9.7 10.4 11.3
t16(τ (βˇo)) 26.5 26.4 28.5 10.8 9.8 11.1 10.5 10.1 10.7
IVX 100.0 100.0 100.0 100.0 100.0 100.0 100.0 100.0 100.0
β = 1 τ (βˇo) 15.3 15.4 17.0 22.7 24.9 24.1 27.2 34.7 36.4
τ (βˇe) 16.2 16.8 16.9 22.9 24.8 24.0 28.5 34.4 35.7
t8(τ (βˇo)) 37.7 38.7 40.8 21.0 20.2 19.5 22.9 25.2 28.1
t12(τ (βˇo)) 53.2 53.8 56.8 26.3 25.9 24.4 28.0 29.0 29.3
t16(τ (βˇo)) 65.2 66.9 69.0 34.5 31.2 32.7 33.5 31.7 32.3
IVX 100.0 100.0 100.0 100.0 100.0 100.0 100.0 100.0 100.0
β = 1.5 τ (βˇo) 24.1 24.2 26.8 39.3 42.3 41.9 47.5 58.9 61.5
τ (βˇe) 25.4 25.9 26.3 38.3 41.5 41.5 47.6 59.1 60.6
t8(τ (βˇo)) 59.4 59.6 61.8 37.5 36.3 34.6 42.3 44.5 47.6
t12(τ (βˇo)) 78.1 78.7 81.1 49.4 48.4 45.9 52.1 53.0 53.6
t16(τ (βˇo)) 88.3 89.8 90.7 62.2 58.6 58.4 62.0 59.9 59.4
IVX 100.0 100.0 100.0 100.0 100.0 100.0 100.0 100.0 100.0
β = 2 τ (βˇo) 32.9 33.4 35.4 55.1 59.0 59.1 64.5 77.4 80.3
τ (βˇe) 34.3 35.1 35.0 53.1 58.4 58.5 64.7 77.3 79.3
t8(τ (βˇo)) 74.1 74.3 76.0 53.0 52.1 50.5 59.3 62.3 65.2
t12(τ (βˇo)) 90.3 91.1 92.0 69.3 68.4 65.7 72.1 72.5 73.0
t16(τ (βˇo)) 96.6 97.2 97.6 82.1 80.2 78.8 82.8 80.5 79.4
IVX 100.0 100.0 100.0 100.0 100.0 100.0 100.0 100.0 100.0
β = 2.5 τ (βˇo) 40.9 41.0 42.4 67.3 71.8 72.4 76.2 87.7 91.3
τ (βˇe) 42.3 42.4 42.3 64.5 71.5 71.8 76.0 87.6 89.9
t8(τ (βˇo)) 83.8 83.7 84.8 66.6 65.6 63.7 71.9 75.0 77.3
t12(τ (βˇo)) 95.8 96.1 96.7 82.8 81.9 79.9 85.1 85.1 85.0
t16(τ (βˇo)) 99.0 99.3 99.4 92.7 91.5 90.0 93.0 91.2 90.8
IVX 100.0 100.0 100.0 100.0 100.0 100.0 100.0 100.0 100.0
33

Table 12: Empirical results
Series Frequency β Cauchy RT Cauchy VC t12(γˇ) t16(γˇ) τ (βˇ)
Panel A: D/P as predictor for the period of 1927-2011
CRSP Monthly 0.005 1.06 0.85 0.42 0.44 0.43
Quarterly 0.007 0.48 1.26 1.29 1.34 1.09
Yearly 0.063 0.99 2.15** 2.04** 2.35** 1.82**
S&P500 Monthly 0.003 0.74 1.14 0.89 0.82 0.72
Quarterly 0.008 0.65 1.78** 1.75* 1.73* 1.31*
Yearly 0.042 0.82 2.24** 2.33** 2.00** 1.95**
Panel B: D/P as predictor for the period of 1927-2011 with jumps removed
CRSP Monthly 0.001 0.22 1.50* 1.15 1.06 0.90
Quarterly 0.015 0.93 2.02** 2.45** 2.40** 1.46*
Yearly 0.005 0.05 0.56 0.56 0.53 0.45
S&P500 Monthly 0.002 0.48 1.66* 1.35 1.14 1.02
Quarterly 0.017 1.21 1.49* 1.70 1.61 1.20
Yearly 0.008 0.11 1.51* 2.45** 2.56** 1.80**
Panel C: E/P as predictor for the period of 1950-2011
S&P500 Monthly 0.000 -0.05 0.32 0.26 0.22 0.30
Quarterly 0.007 0.39 0.39 0.38 0.35 0.35
Yearly 0.059 0.83 0.76 1.04 0.23 0.84
Panel D: E/P as predictor for the period of 1950-2011 with jumps removed
S&P500 Monthly 0.001 0.16 0.01 0.14 0.18 0.11
Quarterly 0.000 0.02 0.71 0.78 0.61 0.48
Yearly -0.038 -0.38 0.69 -0.05 0.55 0.44
Test results for return predictability of the NYSE/AMEX value-weighted index (CRSP) and S&P 500
using the Cauchy RT, Cauchy VC, tq (q = 12, 16), and τ (βˇ) tests across different regression frequencies.
Panels A–B use the dividend–price ratio (D/P), and Panels C–D use the earnings–price ratio (E/P)
as predictors. Significance at the 5% and 1% levels is denoted by “*” and “**”, respectively.
34

References
Benjamini, Y. and Hochberg, Y. (1995), ‘Controlling the false discovery rate: A practical and
powerful approach to multiple testing’, Journal of the Royal Statistical Society: Series B
(Methodological) 57(1), 289–300.
Billingsley, P. (1986), Convergence of Probability Measures, John Wiley & Sons.
Breitung, J. and Demetrescu, M. (2015), ‘Instrumental variable and variable addition based
inference in predictive regressions’, Journal of Econometrics 187(1), 358–375.
Bu, R., Kim, J. and Wang, B. (2023), ‘Uniform and Lp convergences for nonparametric
continuous time regressions with semiparametric applications’, Journal of Econometrics
235(2), 1934–1954.
Campbell, J. Y. and Thompson, S. B. (2008), ‘Predicting excess stock returns out of sample:
Can anything beat the historical average?’, The Review of Financial Studies 21(4), 1509
1531.
Campbell, J. and Yogo, M. (2006), ‘Efficient tests of stock return predictability’, Journal of
Financial Econometrics 81, 27–60.
Cavaliere, G. (2004), ‘Testing stationarity under a permanent variance shift’, Economics Letters
82, 403–408.
Cavaliere, G. and Taylor, A. R. (2007), ‘Testing for unit roots in time series models with
non-stationary volatility’, Journal of Econometrics 140, 919–947.
Cavaliere, G. and Taylor, A. R. (2008), ‘Bootstrap unit root tests for time series with non
stationary volatility’, Econometric Theory 24, 43–71.
Cavaliere, G. and Taylor, A. R. (2009), ‘Heteroskedastic time series with a unit root’, Econo
metric Theory 25, 1228–1276.
Chen, W. and Deo, R. (2009), ‘Bias reduction and likelihood-based almost exactly sized hy
pothesis testing in predictive regressions using the restricted likelihood’, Econometric Theory
25, 1143–1179.
Choi, Y., Jacewitz, S. and Park, J. Y. (2016), ‘A reexamination of stock return predictability’,
Journal of Econometrics 192, 168–189.
Chung, H. and Park, J. Y. (2007), ‘Nonstationary nonlinear heteroskedasticity in regression’,
Journal of Econometrics 137, 230–259.
35

Davis, R. A. (1983), ‘Stable limits for partial sums of dependent random variables’, The Annals
of Probability 11(2), 262–269.
Davis, R. A. and Resnick, S. I. (1986), ‘Limit theory for the sample covariance and correlation
functions of moving averages’, The Annals of Statistics 14(2), 533–558.
Demetrescu, M., Georgiev, I., Rodrigues, P. M. and Taylor, A. R. (2023), ‘Extensions to ivx
methods of inference for return predictability’, Journal of Econometrics 237(2, Part C), 105
271.
Dou, L. and Mu ̈ller, U. K. (2021), ‘Generalized local-to-unity models’, Econometrica
89(4), 1825–1854.
Dufour, J.-M. and Torr`es, O. (2000), ‘Markovian processes, two-sided autoregressions and
finite-sample inference for stationary and nonstationary autoregressive processes’, Journal
of Econometrics 99, 255–289.
Elliott, G. and Stock, J. H. (1994), ‘Inference in time series regression when the order of
integration of a regressor is unknown’, Econometric Theory 10, 672–700.
Embrechts, P., Klu ̈ppelberg, C. and Mikosch, T. (1997), Modelling Extremal Events for Insur
ance and Finance, Springer.
Fama, E. F. (1970), ‘Efficient capital markets: A review of theory and empirical work’, Journal
of Finance 25, 383–417.
Fama, E. F. (1984), ‘Forward and spot exchange rates’, Journal of Monetary Economics
14, 319–338.
Fama, E. F. (1991), ‘Efficient Capital Markets: II’, Journal of Finance 46, 1575–1617.
Feller, W. (1971), An Introduction to Probability Theory and Its Applications, Volume II, 2nd
edn, Wiley, New York.
Giraitis, L. and Phillips, P. C. B. (2006), ‘Uniform limit theory for stationary autoregression’,
Journal of Time Series Analysis 27, 51–60.
Goyal, A. and Welch, I. (2006), ‘A comprehensive look at the empirical performance of equity
premium prediction’, The Review of Financial Studies 21(4), 1455–1508.
Goyal, A., Welch, I. and Zafirov, A. (2024), ‘A comprehensive 2022 look at the empirical
performance of equity premium’, Review of Financial Studies 37, 3490–3557.
Granger, C. W. J. and Orr, D. (1972), ‘Infinite variance and research strategy in time series
analysis’, Journal of the American Statistical Association 67, 275–285.
36

Hansen, B. E. (1992), ‘Convergence to stochastic integrals for dependent heterogeneous pro
cesses’, Econometric Theory 8, 489–500.
Hansen, B. E. (1995), ‘Regression with nonstationary volatility’, Econometrica 63, 1113–1132.
Hansen, P. R. and Lunde, A. (2014), ‘Estimating the persistence and the autocorrelation func
tion of a time series that is measured with error’, Econometric Theory 30, 60–93.
Harvey, C. R., Liu, Y. and Zhu, H. (2015), ‘. . . and the cross-section of expected returns’, The
Review of Financial Studies 29(1), 5–68.
Harvey, D. I., Leybourne, S. J. and Zu, Y. (2019), ‘Testing explosive bubbles with time-varying
volatility’, Econometric Reviews 38, 1131–1151.
Hirshleifer, D., Hou, K. and Teoh, S. H. (2009), ‘Accruals, cash flows, and aggregate stock
returns’, Journal of Financial Economics 91, 389–406.
Holm, S. (1979), ‘A simple sequentially rejective multiple test procedure’, Scandinavian Journal
of Statistics 6(2), 65–70.
Ibragimov, M., Ibragimov, R. and Walden, J. (2015), Heavy-tailed Distributions and Robustness
in Economics and Finance, Vol. 214 of Lecture Notes in Statistics, Springer.
Ibragimov, R., Kim, J. and Skrobotov, A. (2024), ‘New robust inference for predictive regres
sions’, Econometric Theory 40, 1364–1390.
Ibragimov, R. and Mu ̈ller, U. (2010), ‘t-statistic Based Correlation and Heterogeneity Robust
Inference’, Journal of Business & Economic Statistics 28, 453–468.
Ibragimov, R. and Mu ̈ller, U. K. (2016), ‘Inference with few heterogeneous clusters’, Review of
Economics and Statistics 98, 83–96.
Jacquier, E., Polson, N. G. and Rossi, P. E. (2004), ‘Bayesian analysis of stochastic volatility
models with fat-tails and correlated errors’, Journal of Econometrics 122, 185–212.
Kelly, B. and Jiang, H. (2014), ‘Editor’s choice tail risk and asset prices’, The Review of Fi
nancial Studies 27, 2841–2871.
Kim, J. and Meddahi, N. (2020), ‘Volatility regressions with fat tails’, Journal of Econometrics
218, 690–713.
Kim, J. and Park, J. Y. (2017), ‘Asymptotics for recurrent diffusions with application to high
frequency regression’, Journal of Econometrics 196, 37–54.
37

Kostakis, A., Magdalinos, T. and Stamatogiannis, M. (2015), ‘Robust econometric inference for
stock return predictability’, Review of Financial Studies 28, 1506–1553.
Kurtz, T. G. and Protter, P. (1991), ‘Weak limit theorems for stochastic integrals and stochastic
differential equations’, The Annals of Probability pp. 1035–1070.
Liu, X., Yang, B., Cai, Z. and Peng, L. (2019), ‘A unified test for predictability of asset returns
regardless of properties of predicting variables’, Journal of Econometrics 208(1), 141–159.
Logan, B. F., Mallows, C. L., Rice, S. O. and Shepp, L. A. (1973), ‘Limit distributions of
self-normalized sums’, The Annals of Probability 1(5), 788–809.
Martin, I. W. and Nagel, S. (2022), ‘Market efficiency in the age of big data’, Journal of
Financial Economics 145, 154–177.
Møller, S. V. and Rangvid, J. (2015), ‘End-of-the-year economic growth and time-varying ex
pected returns’, Journal of Financial Economics 115, 136–154.
Phillips, P. C. B. (1987), ‘Towards a unified asymptotic theory for autoregression’, Biometrika
74, 535–547.
Phillips, P. C. B. (2015), ‘Halbert White Jr. Memorial JFEC Lecture: Pitfalls and possibilities
in predictive regression’, Journal of Financial Econometrics 13, 521–555.
Phillips, P. C. B. and Magdalinos, T. (2007a), ‘Limit theory for moderate deviations from a
unit root’, Journal of Econometrics 136, 115–130.
Phillips, P. C. B. and Magdalinos, T. (2007b), Limit theory for moderate deviations from a
unit root under weak dependence, in G. D. A. Phillips and E. Tzavalis, eds, ‘The Refinement
of Econometric Estimation and Test Procedures: Finite Sample and Asymptotic Analysis’,
Cambridge University Press, pp. 123–162.
Phillips, P. C. B. and Magdalinos, T. (2009), ‘Econometric inference in the vicinity of unity’,
Working paper, Yale University and University of Nottingham .
Rapach, D. E., Ringgenberg, M. C. and Zhou, G. (2016), ‘Short interest and aggregate stock
returns’, Journal of Financial Economics 121, 46–65.
Samorodnitsky, G., Rachev, S. T., Kurz-Kim, J.-R. and Stoyanov, S. V. (2007), ‘Asymptotic
distributions of unbiased linear estimators in the presence of heavy-tailed stochastic regressors
and residuals’, Probability and Mathematical Statistics 27, 275–302.
Shaffer, J. P. (1995), ‘Multiple hypothesis testing’, Annual Review of Psychology 46(1), 561–584.
38

Shephard, N. (2020), ‘An estimator for predictive regression: reliable inference for financial
economics’, Working Paper, Harvard University .
So, B. and Shin, D. (1999), ‘Cauchy estimators for autoregressive processes with applications
to unit root tests and confidence intervals’, Econometric Theory 15, 165–176.
Stambaugh, R. F. (1999), ‘Predictive regressions’, Journal of Financial Economics 54, 375–421.
Xu, K.-L. and Phillips, P. C. B. (2008), ‘Adaptive estimation of autoregressive models with
time-varying variances’, Journal of Econometrics 142, 265–280.
Zhu, F., Cai, Z. and Peng, L. (2014), ‘Predictive regressions for macroeconomic data’, The
Annals of Applied Statistics 8(1), 577–594.
39

---

## Processing Information

- **Processing Library:** Zotero PDFWorker
- **Processing Date:** 2026-02-10T18:18:17.428Z
- **Text Length:** 77687 characters
- **Success:** Text extraction completed
- **PDF Library Used:** Zotero PDFWorker
- **Pages Processed:** 39 of 39
