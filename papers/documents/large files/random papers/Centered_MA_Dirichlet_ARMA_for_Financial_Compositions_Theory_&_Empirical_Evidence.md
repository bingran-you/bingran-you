# PDF Document: Katz - 2025 - Centered MA Dirichlet ARMA for Financial Compositions Theory & Empirical Evidence.pdf

**File Path:** Katz - 2025 - Centered MA Dirichlet ARMA for Financial Compositions Theory & Empirical Evidence.pdf

**Processed Date:** 2026-02-10T18:15:03.828Z

**File Size:** 758.36 KB

**Total Pages:** 27

**Extracted Pages:** 27

**PDF Library:** Zotero PDFWorker

**Attachment Item ID:** 3490

**Title:** Centered MA Dirichlet ARMA for Financial Compositions: Theory & Empirical Evidence

**Collection:** Large Files > Random Papers

---

## Extracted Text Content

Centered-Innovation MA for Dirichlet ARMA
in Compositional Time-Series Forecasting:
Theory and Evidence from Bank-Asset Shares
Harrison Katz1
1Forecasting, Data Science, Airbnb
November 3, 2025
Abstract
We study a minimal change to an observation–driven Dirichlet ARMA used for
compositional time-series forecasting: replace the raw ALR residual with a centered
innovation that subtracts the Dirichlet conditional ALR mean, available in closed
form via digamma identities. Centering yields mean–zero MA shocks and an ARMA
consistent forecast recursion, while keeping the Dirichlet likelihood and the ALR link
(with its closed-form inverse) unchanged.
On weekly Federal Reserve H.8 bank-asset shares, the centered specification improves
density forecasts while leaving point error essentially unchanged. In a fixed 104-week
holdout, one-step ELPD is 785.913 vs. 785.745 and empirical 95% coverage is 0.962 vs.
0.952 (Raw), with cleaner HMC diagnostics. In a 104-origin rolling one-step experiment,
cumulative ELPD gains sum to +0.424 (66 vs. 38 wins), coverage is closer to nominal
(0.9529 vs. 0.9505), and divergences drop from 119 to 16 across fits, at effectively tied
RMSE/MAE.
Because the adjustment is analytic and plug-in, it provides a practical recipe for
density forecasting on the simplex without changing likelihood, link, priors, or code
structure.
1
arXiv:2510.18903v2 [stat.ME] 31 Oct 2025

Keywords: Compositional time series; probabilistic forecasting; density forecasting; Dirichlet
ARMA (B–DARMA); additive log–ratio (ALR); centered innovations; expected log predictive
density (ELPD); H.8 bank assets.
1 Introduction
Compositional time series arise whenever a fixed total is allocated across categories through
time. Finance and data science provide many examples: allocations of earned fees into future
recognition buckets for planning and staffing, evolving market or sector shares in portfolio
analytics, the distribution of transactions across settlement currencies that drives treasury,
hedging, and consolidated reporting, and bank balance sheet shares such as cash, securities,
loans, and other assets in the Federal Reserve’s H.8 release. Valid forecasts must respect the
simplex constraints, so they must remain nonnegative and sum to one.
Classical work maps compositions to Euclidean space with log ratios. Additive, centered,
and isometric log-ratio transformations enable standard multivariate tools while preserving
the subcompositional coherence that practitioners care about (Aitchison, 1982; Egozcue et al.,
2003). These mappings motivate transformed VARMA and state space approaches across
marketing, demographics, ecology, environmental science, and forecasting (Cargnoni et al.,
1997; Ravishanker et al., 2001; Silva and Smith, 2001; Brunsdon and Smith, 1998; Mills, 2010;
Barcel ́o-Vidal et al., 2011; Koehler et al., 2010; Kynˇclov ́a et al., 2015; Snyder et al., 2017;
AL-Dhurafi et al., 2018). Modeling directly on the simplex is an alternative that avoids ad hoc
renormalization and yields coherent predictive distributions. For shares and market fractions,
Dirichlet regression and its variants are widely used, and there is a growing literature on
Dirichlet time series in both state space and observation-driven forms (Hijazi and Jernigan,
2009; Grunwald et al., 1993; da Silva et al., 2011; da Silva and Rodrigues, 2015; Zheng and
Chen, 2017; Morais et al., 2018; Giller, 2020; Creus-Martı ́ et al., 2021; Tsagris and Stewart,
2018).
2

Within this class, the Bayesian Dirichlet ARMA framework (B–DARMA) evolves the
Dirichlet mean on the additive log-ratio (ALR) scale with a VARMA process and has been
used for forecasting lead times, investigating prior sensitivity, and modeling energy mixes
(Katz et al., 2024, 2025; Katz and Maierhofer, 2025). Time-varying precision accommodates
volatility clustering on the simplex in a Dirichlet–ARCH spirit (Katz and Weiss, 2025).
These ideas connect to broader Bayesian time series references (Prado and West, 2010; West,
1996) and to Bayesian VAR and VARMA models with shrinkage or stochastic volatility
(Ba ́nbura et al., 2010; Karlsson, 2013; Huber and Feldkircher, 2019; Kastner and Huber,
2020). They also sit alongside generalized linear time-series designs for non-Gaussian data
(Brandt and Sandler, 2012; Roberts and Penny, 2002; Chen and Lee, 2016; McCabe and
Martin, 2005; Berry and West, 2020; Fukumoto et al., 2019; Silveira de Andrade et al., 2015)
and the volatility literature that motivates precision dynamics (Engle, 1982; Bollerslev, 1986;
Nelson, 1991; Bauwens et al., 2006; Engle, 2001; Francq and Zakoı ̈an, 2019; Silvennoinen and
Ter ̈asvirta, 2009; Tsay, 2005).
A practical issue arises for moving-average terms under a Dirichlet likelihood. With finite
precision, the conditional expectation of alr(Yt) is a digamma function of the concentration
parameters and is not equal to the linear predictor. The commonly used regressor alr(yt) − ηt
therefore has nonzero conditional mean, which biases the conditional mean path and obscures
the interpretation of MA coefficients. Frequentist Dirichlet ARMA designs sidestep this
by using a digamma-based link whose inverse depends on precision and is not available
in closed form (Zheng and Chen, 2017). We study a minimal fix that keeps the Dirichlet
likelihood and the ALR link: replace the raw regressor with a centered innovation e◦
t=
alr(yt) − E{alr(Yt) | μt, φt}. The expectation has a closed form via digamma functions, so
the centering is straightforward to compute, restores mean-zero innovations for the MA block,
and delivers mean-consistent forecasts without changing the likelihood or requiring numerical
inversion.
We evaluate with predictive tools standard in Bayesian time series. We summarize
3

out-of-sample fit with expected log predictive density and approximate leave-future-out
cross-validation (Vehtari et al., 2017, 2015; Vehtari and Ojanen, 2012; Bu ̈rkner et al., 2020),
and we report interpretable point-error summaries for compositions. The empirical study
focuses on public weekly H.8 bank asset shares, compares Raw–MA and Centered–MA under
identical covariates and priors, uses a fixed 104-week holdout, and then runs a rolling one-step
evaluation over the last two years to accumulate differences in expected log predictive density
and track coverage. The code follows modern Bayesian forecasting workflows (R Core Team,
2022; Stan Development Team, 2022; Tsay et al., 2022; Hyndman and Athanasopoulos, 2018).
For banking decisions this matters directly. Calibrated density forecasts of H.8 shares feed
liquidity planning and asset and liability management by quantifying the probability that
cash and securities buffers will breach internal limits and by shaping the expected cost of
near-term funding, while better calibrated one-step densities for the asset mix improve hedge
sizing and risk budgets for interest-rate risk when reallocations are volatile.
Contribution to forecasting. This paper makes three forecasting contributions. (i) It
shows that the usual ALR residual in Dirichlet ARMA carries a nonzero conditional mean
under finite precision and gives an analytic centering that restores mean–zero MA shocks
without altering the likelihood or link. (ii) It derives the forecast recursion that results
(already-available shocks enter means; future ones do not), clarifying the interpretation of
MA coefficients for one-step forecasting. (iii) Empirically, on weekly H.8 shares, centering
improves density forecasts, higher ELPD and closer-to-nominal coverage, while point accuracy
remains tied and Hamiltonian Monte Carlo diagnostics improve (Figures 2–4; Table 2).
2 Model recap and centered innovations
Let yt = (yt1, . . . , ytJ )′ be a J–part composition. Conditional on a mean μt ∈ ∆J−1 and
precision φt > 0,
yt | μt, φt ∼ Dir(φtμt).
4

Fix a reference component j⋆ and define alr(yt) ∈ RJ−1 by alrj(yt) = log(ytj/ytj⋆) for j ̸= j⋆.
The inverse is the softmax: μt = alr−1(ηt) with (μtj⋆, μtj) ∝ (1, exp ηtj).
We consider the observation–driven recursion
ηt =
P
X
p=1
Ap{alr(yt−p) − Xt−pβ} +
Q
X
q=1
Bq εt−q + Xtβ, φt = exp(Ztγ), (1)
with bounded, deterministic covariates Xt, Zt. In the raw B–DARMA, εraw
t = alr(yt) − ηt
drives the MA block. We instead define the centered innovation
ε◦
t ≡ alr(yt) − E alr(Yt) | ηt, φt = alr(yt) − g(μt, φt), (2)
where the conditional ALR mean under the Dirichlet is
g(μt, φt)j = ψ(φtμtj) − ψ(φtμtj⋆), j ̸= j⋆, (3)
and ψ(·) is the digamma function. The likelihood and link remain unchanged.
3 Main properties
Let {Ft} be the natural filtration generated by {ys : s ≤ t}. Under (1)–(3), (μt, φt) are
Ft−1–measurable.
3.1 Dirichlet log–moment identity and conditional ALR mean
Lemma 1 (Dirichlet log–moment identity). If Y ∼ Dir(α) with α0 = PJ
k=1 αk, then
E[log Yj] = ψ(αj) − ψ(α0), j = 1, . . . , J.
5

Proof.
f (y | α) = Γ(α0)
QJ
k=1 Γ(αk)
J
Y
k=1
y αk −1
k , α0 =
J
X
k=1
αk;
0=E ∂
∂αj
log f (Y | α) = − ∂
∂αj
log B(α) + E[log Yj];
∂
∂αj
log B(α) = ψ(αj) − ψ(α0) ⇒ E[log Yj] = ψ(αj) − ψ(α0).
Proposition 1 (Conditional ALR mean). With Yt | μt, φt ∼ Dir(φtμt) and reference j⋆,
E alr(Yt) | μt, φt j = ψ(φtμtj) − ψ(φtμtj⋆) ≡ g(μt, φt)j (j ̸= j⋆).
Consequently, E alr(Yt) | Ft−1 = g(μt, φt).
Proof. By Lemma 1, E[log Ytj | μt, φt] = ψ(φtμtj) − ψ(φt). Hence E[alrj(Yt) | μt, φt] =
ψ(φtμtj) − ψ(φtμtj⋆).
3.2 Mean–zero innovations and forecast recursion
Proposition 2 (Mean–zero MA innovations). The centered innovation ε◦
t in (2) satisfies
E[ε◦
t | Ft−1] = 0.
Proof. By Proposition 1, E[alr(Yt) | Ft−1] = g(μt, φt). Subtracting this conditional mean
yields zero.
Proposition 3 (Forecast recursion). Write the recursion as
ηt = Ct +
Q
X
q=1
Bq εt−q, Ct is Ft−1-measurable.
Let ηbT +h|T ≡ E[ηT +h | FT ].
6

(i) Centered innovations. If εt = ε◦
t with E[ε◦
t | Ft−1] = 0, then for any h ≥ 1,
ηbT +h|T = E[CT +h | FT ] +
Q
X
q=h
Bq ε◦
T +h−q
(with the sum understood as 0 when h > Q). Only already-realized shocks enter the mean
path.
(ii) Raw residuals. If εt = εraw
t = alr(yt) − ηt, then with bt ≡ g(μt, φt) − ηt,
ηbT +h|T = E[CT +h | FT ] +
Q
X
q=h
Bq εraw
T +h−q +
min(Q,h−1)
X
q=1
Bq E bT +h−q FT
so future raw residuals contribute via their nonzero conditional mean bt.
Proof. Fix h ≥ 1. Expanding at T + h gives
ηT +h = CT +h +
Q
X
q=1
Bq εT +h−q = CT +h +
Q
X
q=h
Bq εT +h−q
| {z }
indices ≤T
+
min(Q,h−1)
X
q=1
Bq εT +h−q
| {z }
indices >T
.
Taking E[· | FT ],
ηbT +h|T = E[CT +h | FT ] +
Q
X
q=h
Bq εT +h−q +
min(Q,h−1)
X
q=1
Bq E[εT +h−q | FT ].
For centered innovations, E[ε◦
t | Ft−1] = 0 (Prop. 2), and by the tower property with
FT ⊆ Ft−1 for t > T , E[ε◦
T +h−q | FT ] = 0 for q ≤ h − 1, yielding (i). For raw residuals,
E[εraw
t | Ft−1] = bt, so E[εraw
T +h−q | FT ] = E[bT +h−q | FT ], yielding (ii).
Remark (One-step case). For h = 1,
ηbT +1|T = E[CT +1 | FT ] +
Q
X
q=1
Bq ε◦
T +1−q,
7

so all Q past shocks {ε◦
T , ε◦
T −1, . . . , ε◦
T +1−Q} enter the forecast; none are dropped. In the raw
case, add P0
q=1(· · · ) = 0, i.e., no bias term at one step.
Remark (Forecast interpretation for practitioners). Under centered innovations, the one-step
mean depends only on already-observed shocks; future shocks integrate out to zero. For
multi-step means, the MA block contributes only through shocks that are already realized by
the forecast origin. This ensures ARMA-consistent mean forecasts on the ALR scale without
changing the Dirichlet likelihood or the inverse link back to μt.
3.3 Digamma–ALR expansion and first–order equivalence
Lemma 2 (Digamma–ALR expansion). For each j ̸= j⋆,
ψ(φμj) − ψ(φμj⋆) = log μj
μj⋆
−1
2φ
1
μj
−1
μj⋆
+ O(φ−2), φ → ∞,
uniformly on compact subsets of the interior of the simplex.
Proof. Use ψ(x) = log x − 1
2x + O(x−2) applied to x = φμj and x⋆ = φμj⋆.
Corollary 1 (First–order equivalence to digamma–link DARMA). Let ηet = g(μt, φt). Then
ηet − ηt = O(φ−1
t ) componentwise. Consequently, a DARMA recursion written on ηet with
mean–zero innovations is first–order equivalent (in 1/φ) to the centered–innovation ALR
recursion.
4 Case study: forecasting weekly bank-asset shares
Weekly H.8 balance sheet shares are a clean and useful test bed for the centered MA idea.
The series are public, well curated, and available at a high enough frequency to support
rolling origins. The composition has four interpretable parts that matter for risk, liquidity,
and income. The last decade contains calm periods and shocks, which produces the kind of
time variation in precision where centering should help. Our empirical questions are simple.
8

First, does centering improve one–step density forecasts on the simplex relative to the raw
MA construction while leaving point accuracy unchanged. Second, are the computational
diagnostics cleaner under centering when we hold priors, regressors, and sampler settings
fixed. Third, do any gains persist when we move from a single holdout window to a rolling
evaluation with many refits.
4.1 Data and preprocessing
We use weekly, seasonally adjusted (SA) H.8 series from the Federal Reserve Bank of St. Louis
(FRED). Our primary identifiers are TLAACBW027SBOG for total assets, CASACBW027SBOG for
cash assets, and SBCACBW027SBOG for securities in bank credit, with an automatic fallback to
the non–seasonally adjusted series SBCACBW027NBOG if the SA series is unavailable on a given
run. To maintain consistent seasonal treatment across the composition, if the SA version of
any component is unavailable at runtime, we switch all components to their NSA counterparts
for that run; otherwise we use SA for all components. For loans we first attempt TOTLL and
otherwise use LLBACBW027SBOG. We download each series as a CSV from FRED, parse the
date column (DATE/date/observation date), and perform an inner join on calendar weeks
to ensure a common support across all components. To control sampler pathologies in very
long histories, we restrict the panel to the last ten calendar years of available weeks; the
cutoff date is maxt datet − 10 years.
Let xt,tot, xt,cash, xt,secr, xt,loans denote the aligned level series. We define the residual “Other”
level by
xt,other ≡ xt,tot − xt,cash − xt,secr − xt,loans.
As a data integrity check, we count rows with xt,other < 0. If more than 5% of weeks are
negative we abort the build and prompt the user to revisit the security/loan ID choices or
SA/NSA consistency; otherwise we proceed, issuing a warning with the observed fraction.
We convert levels to raw shares by division through total assets and then enforce strict
9

Figure 1: H.8 bank assets as weekly shares of total assets. Shaded bands show cash, securities, loans, and the residual other category over the last decade.
positivity with an explicit floor before renormalizing rows. Let
yraw
t = xt,cash
xt,tot
, xt,secr
xt,tot
, xt,loans
xt,tot
, xt,other
xt,tot
∈ [0, 1]4,
and set the probability floor to εprob ≡ 10−10. We apply the floor componentwise, y ̃tj =
max{yraw
tj , εprob}, and then renormalize
yt = y ̃t
P4
j=1 y ̃tj
,
so that yt ∈ ∆3 and every entry is strictly positive. This ensures the support of the Dirichlet
likelihood is respected and prevents log 0 in the ALR transform while leaving economic
content unaffected; the total injected mass per row is at most 4 × 10−10.
10

4.2 Exploratory composition dynamics
Figure 1 plots the weekly shares of cash, securities, loans, and other assets in the H.8 aggregate
over the last decade. Loans dominate the balance sheet throughout, generally near three
fifths of total assets, with a visible compression around early 2020 followed by a partial
recovery. Cash rises from the high teens before 2020 to roughly the low twenties by 2022,
then settles slightly lower and edges up again into 2025. Securities hover in a narrow band
around the low teens with mild drift, while the residual Other moves mechanically against
loans. The ranking of components is stable over time and there are no boundary touches,
so the probability floor imposed during construction does not bind in economically relevant
weeks.
Two features in the figure motivate our specification choices. The first is the combination
of smooth, low–frequency reallocations with episodic realignments, most notably in 2020 and
again during pockets of volatility in 2025. This is where an AR(1) mean with an MA(1)
shock on the ALR scale is useful. The AR captures persistent rebalancing and the MA soaks
up short transients. The second is that realized ALR step sizes spike in those same episodes,
which is why we drive the Dirichlet precision with a lagged, smoothed measure of ALR
volatility computed without look-ahead. The dominance and persistence of the loans share
in the plot support choosing loans as the ALR reference j⋆, which stabilizes the transformed
coordinates by anchoring them to the largest component.
4.3 ALR reference and unit-root check
All modeling is on the additive log-ratio (ALR) scale with the loans share as the reference com
ponent. To verify weak stationarity on the ALR scale, we applied Augmented Dickey–Fuller
(ADF) unit-root tests with a drift term and six lags to each of the three ALR coordinates
(cash/loans, securities/loans, other/loans). Using MacKinnon 5% critical values, the tests
reject the unit-root null for all three coordinates, indicating stationarity on the ALR scale.
Table 1 summarizes the decisions.
11

Table 1: ADF unit-root tests on weekly ALR coordinates (loans as reference).
ALR coordinate Reject unit root at 5%?
cash / loans Yes securities / loans Yes other / loans Yes
Notes: ADF with drift and six lags for each coordinate. Decisions based on MacKinnon 5% critical values (critical value = −2.86).
4.4 Precision regressor construction
The Dirichlet precision is time-varying and driven by a two-regressor design,
log φt = γ0 + γ1zt,
where zt is a lagged, smoothed measure of realized ALR volatility. We compute one-step
ALR increments as
∆ηt = ηt − ηt−1 (t ≥ 2), ∆η1 ≡ η1,
and summarize them by a root-mean-square
rt ≡
v u u t
1
K
K
X
k=1
(∆ηt,k)2.
We then apply a one-sided four-week trailing mean with equal weights,
r ̄(4)
t ≡1
4
3
X
h=0
rt−h,
implemented with a past-only filter; the initial undefined values from the filter are filled with
the first non-missing value. To avoid look-ahead we lag the smoother by one week,
zvol
t ≡ r ̄(4)
t−1 (t ≥ 2), zvol
1 ≡ r ̄(4)
1.
12

To stabilize estimation and prevent leakage from the test period, we standardize zvol
t using
only the training window: with z ̄train and strain the mean and standard deviation of zvol
t over
t ≤ Ttrain,
zt ≡ zvol
t − z ̄train
strain
, with strain := 1 if strain ≤ 0 or not finite.
The intercept and zt together form the precision-design vector Zt = (1, zt) with Rφ = 2.
Implementation constants. We enforce strict positivity on the simplex with a probability
floor εprob = 10−10 before renormalization. We also guard Dirichlet shape parameters with a
floor εshape = 10−10. These constants are used when computing the digamma centering term,
evaluating log predictive densities, and simulating predictive draws; they only safeguard
numerics and do not bind at economically relevant scales.
4.5 Competing specifications, estimation, and scoring
We estimate two observation–driven Dirichlet models that are identical in likelihood, link,
covariates, and priors, and differ only in the moving–average regressor. Let J = 4 and
K = J − 1 = 3. With loans as the ALR reference j⋆ = loans, define ηt = alr(yt) ∈ RK and
μt = alr−1(ηt) ∈ ∆J−1. The observation equation is
yt | μt, φt ∼ Dir φt μt , φt = exp(Ztγ), Zt = (1, zt),
where zt is the one–sided 4-week trailing mean of realized ALR volatility, lagged one week
and standardized on the training window only (Section 4.4). The mean recursion is a one-lag
DARMA on the ALR scale with intercept-only Xt ≡ 1; write β ∈ RK×1 and A1, B1 ∈ RK×K.
The AR block is common:
A1 alr(yt−1) − Xt−1β .
The MA block differs as follows.
13

Raw–MA B–DARMA.
ηt = Xtβ + A1{alr(yt−1) − Xt−1β} + B1{alr(yt−1) − ηt−1}.
Centered–MA B–DARMA.
ηt = Xtβ + A1{alr(yt−1) − Xt−1β} + B1 ε◦
t−1, ε◦
t−1 ≡ alr(yt−1) − g(μt−1, φt−1) ,
with g(μ, φ)j = ψ(φμj) − ψ(φμj⋆) the Dirichlet ALR mean from (3). The likelihood, link,
and inverse link are otherwise identical.
Priors and fixed numerical guards. Elementwise
vec(A1) ∼ N (0, 0.52), vec(B1) ∼ N (0, 0.52), vec(β) ∼ N (0, 12), γ ∼ N (0, I2).
We floor shares at εprob = 10−10 before row-renormalization and floor Dirichlet shapes
at εshape = 10−10 inside predictive calculations. These constants only stabilize log and Γ
evaluations and never bind at the scales in H.8.
Estimation. Let T be the post-trim sample size. We use a fixed one-step holdout of the
last Ttest = min{104, ⌊0.25 T ⌋} weeks with Ttrain = T − Ttest. In both models we fit by MCMC
in Stan with identical settings: 4 chains, 2,000 iterations, 1,000 warmup, adapt delta= 0.90,
max treedepth= 12, init= 0, single-threaded math. An auto-refit is triggered if there are
any divergences, any Rb > 1.01, or bulk ESS < 400 on the monitored parameters; the refit
doubles iterations and warmup and increases adapt delta by 0.01 up to 0.999.
For a rolling one-step evaluation over the most recent 104 weeks, we define weekly origins
t0 from max{104, min train} to T − 1. At each origin we restandardize zt using t ≤ t0 only,
refit both models on 1:t0 with a lighter sampler (2 chains, 1,200 iterations, 600 warmup,
adapt delta= 0.95, max treedepth= 12), and forecast yt0+1.
14

Diagnostics (reported for each fit). For transparency and reproducibility, we log and
report: (i) number of HMC divergent transitions; (ii) share of iterations hitting the maximum
treedepth; (iii) Rb and bulk ESS for monitored parameters; and (iv) the number of sampler
attempts (auto–refits) per origin. These are summarized alongside forecasting metrics in
Table 2.
Forecasting and scoring. One-step point means on the simplex are obtained by propa
gating posterior draws through the state recursion and alr−1(·). For density scoring we use a
mixture-of-parameters approximation:
lpdt = log
"
1
S
S
X
s=1
fDir yt φ(s)
t μ(s)
t
#
, ELPD =
X
t∈T
lpdt,
with S = 400 draws in the fixed holdout and S = 200 in the rolling exercise. Predictive
95% coverage is computed by simulating yrep
t from the Dirichlet at each draw via gamma
normalization and checking componentwise inclusion in the central interval. Point errors
are summarized by RMSE and MAE on the full composition. All diagnostics (divergences,
treedepth hits, Rb, bulk ESS, auto-refits) are logged per fit.
4.6 Evaluation designs
We report results for two standard designs: (i) a fixed one-step holdout using the last 104
weeks and (ii) a rolling one-step evaluation over the most recent 104 weeks with weekly
re-estimation at each origin. The same covariates, priors, numerical guards, and scoring rules
are used in both models and both designs.
5 Results
Headline findings. Across both designs, centering improves one-step density forecasts
while leaving point accuracy unchanged. In the fixed holdout (104 weeks), ELPD is 785.913 vs.
15

785.745 and 95% coverage is 0.962 vs. 0.952, at essentially tied RMSE/MAE and with cleaner
sampler diagnostics (Figure 4). In the rolling experiment (104 weekly origins), cumulative
ELPD gains sum to +0.424 with 66:38 per-origin wins, coverage is closer to nominal (0.9529
vs. 0.9505), and total divergences drop from 119 to 16 (Table 2; Figures 2–3).
We compare the original B-DARMA with a raw MA regressor to the centered MA version
in two complementary designs: a fixed one–step holdout of the last 104 weeks and a rolling
one–step evaluation across the most recent two years of weekly H.8 data. In both designs the
conditional mean for the Dirichlet composition is parameterized on the additive log–ratio
(ALR) scale, the precision is time–varying via a log–linear function of lagged realized ALR
volatility, and models are estimated by MCMC with identical priors and tuning, including
the same auto–refit policy.
In the fixed holdout, point accuracy for the total composition is essentially tied. The
centered model attains an RMSE of 0.001568 and an MAE of 0.000984, while the raw–MA
model attains 0.001570 and 0.000985, respectively; the differences are at the fourth decimal
place and not practically meaningful for weekly shares. Probabilistic accuracy, however, shows
a measurable edge for the centered specification: the one–step expected log predictive density
(ELPD) over the 104 test weeks is 785.913 versus 785.745 for the raw model, and empirical 95%
coverage across components is 0.962 versus 0.952. Figure 4 summarizes these fixed–holdout
comparisons: the bars for RMSE are visually indistinguishable, yet the annotations reveal a
small log–score and coverage gain in favor of centering. Sampler diagnostics reinforce the
picture. With identical settings, the centered fit completes without divergent transitions,
while the raw–MA fit exhibits several divergences and triggers a single auto–refit with doubled
iterations and warmup, despite similar Rˆ and bulk ESS elsewhere. This is consistent with the
theoretical claim that subtracting the Dirichlet ALR mean removes a persistent shift from
the MA regressor and smooths the posterior geometry of the MA block.
The rolling one–step experiment yields the same qualitative message in a more stringent
setting. Figure 2 plots the cumulative difference in log score, P
s≤t{ELPDCentered
s −ELPDRaw
s },
16

across 104 weekly origins. The curve starts near zero, spends most of the window above
the axis, and ends around +0.42, indicating that small per–week advantages accumulate to
a nontrivial probabilistic improvement over two years. The slope steepens during episodes
of elevated ALR volatility (early 2025), precisely where the innovation centering should
matter most because precision is lower and the O(φ−1) bias in the raw ALR residual is
largest. By contrast, Figure 3 shows that the total–share RMSE series for the two models
lie almost on top of each other. Both spike in the same weeks and subsequently revert to
their pre–shock level, indicating that the conditional mean dynamics are essentially matched
while the predictive distributions differ in subtle but consistent ways. Empirically, coverage
during the rolling window stays closer to the nominal 95% under the centered model, while
the raw version slightly undercovers in volatile periods. Diagnostics in the rolling refits favor
the centered specification as well: divergent transitions are rarer, maximum treedepth hits
are less frequent, and the auto–refit mechanism is invoked less often, even though the rolling
fits use a deliberately lighter sampler to make the exercise feasible.
Taken together, the results show that centering the MA innovation improves density
forecasting, as measured by ELPD and empirical coverage, without sacrificing point accuracy,
and that it does so while reducing sampler pathologies. Because the likelihood, link, and
inverse link are unchanged, the computational cost per effective draw is also comparable or
lower in practice.
6 Discussion
The empirical patterns align closely with the theoretical properties of the centered MA
construction. Under a Dirichlet likelihood with finite precision φt, the conditional expectation
of the ALR–transformed observation is a digamma function of the concentration parameters.
The raw MA regressor, alr(yt) − ηt, therefore has a nonzero conditional mean of order O(φ−1
t)
whenever ηt is interpreted as the ALR linear predictor. Feeding this biased quantity into the
17

MA block simultaneously (i) perturbs the conditional mean path in a way that depends on
the precision and on the composition itself and (ii) distorts the local curvature of the posterior
for the MA coefficients, because the regressor systematically drifts away from zero. The
centered innovation ε◦
t = alr(yt) − E{alr(Yt) | ηt, φt} removes precisely that drift. Because
the correction is analytic and inexpensive, implemented as a pairwise subtraction of digamma
functions, the likelihood, the ALR link, and its closed–form inverse back to μt are preserved,
and the computational profile is unchanged.
For treasury and risk teams, these density gains are operational rather than cosmetic.
Sharper and better calibrated one-step distributions reduce the chance of underestimating
near-term drawdowns in liquidity buffers and provide more reliable inputs to interest-rate
hedging when the balance-sheet mix shifts.
The fact that RMSE and MAE are virtually identical across specifications is exactly
what one should expect. To first order in 1/φt, the centered recursion on the ALR scale is
equivalent to running a DARMA on the digamma link evaluated at the same mean path. In
other words, the two models share the same conditional mean to first order; the difference
is in how they treat the transitory shocks that drive the MA component. Point forecasts
that summarize the mean therefore move together, while density forecasts that integrate
over the full Dirichlet predictive distribution penalize the small but systematic mean shift
in the raw regressor. This is most visible in the rolling ELPD curve, where incremental
advantages cluster in weeks with elevated realized ALR volatility, typically associated with
lower precision. In those periods, failing to center makes the model act as if the previous
period’s innovation contained some mean signal, leading to slightly overconfident and mildly
miscentered predictive distributions. Centering restores the martingale–difference property of
the innovation and produces predictive densities that are better calibrated and marginally
sharper, yielding a higher log score.
The computational consequences are material in practice. Divergent transitions in
Hamiltonian Monte Carlo often signal that the posterior geometry has narrow, curved, or
18

funnel-like regions. In the raw–MA specification, the MA block must reconcile a regressor
that is anchored away from zero by construction with priors that implicitly shrink towards
stationarity and with an ALR mean that already absorbs part of the dynamics through
the AR and covariate terms. This creates unnecessary tension in the joint posterior for
(B, β, γ), especially when φt varies over time. By removing the deterministic shift from the
MA regressor, the centered formulation flattens these curvatures and makes it easier for the
sampler to explore the posterior with fewer divergences and fewer treedepth saturations. The
improvement persists even in the rolling evaluation, where we purposely use a lighter sampler
to keep the computation manageable; in that regime, small geometric gains translate directly
into fewer refits and more stable runs.
Several limitations qualify these findings and suggest next steps. First, the analysis
isolates the MA construction; the usual stability and ergodicity conditions for the full
observation-driven state should be checked as in standard DARMA work. Second, our
experiments are strictly one-step; multi-step density forecasts on the simplex, scored with
log scores or energy scores adapted to compositional constraints, would test whether the
calibration advantage persists with horizon. Third, the precision covariate is a simple lagged
smoother of realized ALR volatility; richer precision dynamics, including component-specific
or seasonal volatility, could matter during prolonged stress. Fourth, the ALR reference was
fixed to the loans share for stability; alternative references or isometric log-ratios may further
stabilize inference when the dominant component changes over time. Fifth, structural zeros
are not modeled explicitly; zero-aware designs could be integrated with the centering idea in
applications where components can be intermittently absent. Sixth, hierarchical or panel
versions that pool information across banks, sectors, or geographies would test whether the
computational advantages of centering scale in higher dimensions.
In sum, the H.8 application demonstrates that the theoretical benefits of centering the
MA innovation, mean zero shocks under the Dirichlet likelihood and ARMA-consistent
mean forecasts, translate into empirical improvements where it matters: better calibrated
19

Table 2: Rolling one–step summary over 104 weekly origins (Total composition).
Centered MA Raw MA Difference Notes
ELPD (sum) 99.57 99.14 +0.424 mean diff +0.0041, sd 0.0235 Wins on ELPD 66 vs 38 (ties: 0) RMSE (mean) 1.169×10−3 1.168×10−3 ≈ 0 per–origin mean MAE (mean) 7.74×10−4 7.77×10−4 ≈ 0 per–origin mean 95% Coverage (mean) 0.9529 0.9505 +0.0024 closer to nominal Divergences (total) 16 119 – across 104 fits Any divergence 10.6% 49.0% – share of origins Avg attempts / origin 1.85 1.95 – auto–refits enabled
and higher-scoring predictive distributions, at essentially identical point accuracy and with
noticeably cleaner computation. Given the minimal code change and the absence of trade-offs,
centering should be regarded as the default specification for MA terms in ALR–Dirichlet
time-series models.
Code and reproducibility
All code, scripts, and instructions to reproduce the analysis are available at https://github.
com/harrisonekatz/centered-DARMA. The entry point is the R script centered DARMA.R.
The script is self contained: it installs missing CRAN packages if needed, downloads the
public data from FRED, runs the models, and writes all figures and tables to a timestamped
results directory. The implementation uses base R and rstan (R Core Team, 2022; Stan
Development Team, 2022), plus standard data and plotting packages. No private data or
credentials are required.
Acknowledgement
The author thanks Sean Wilson, Jess Needleman and Liz Medina for helpful discussions, Ellie
Mertz and Adam Liss for championing the research.
20

Figure 2: Rolling one–step cumulative ELPD difference (Centered − Raw). Positive values favor the centered specification.
Figure 3: Rolling one–step total–share RMSE by origin. The two series are nearly indistinguishable; both spike briefly in early 2025.
References
Aitchison, J. (1982). The statistical analysis of compositional data. Journal of the Royal
Statistical Society: Series B (Methodological) 44 (2), 139–160.
21

Figure 4: Fixed–holdout comparison of total–share RMSE (bars) with MAE/ELPD/coverage annotations. Point accuracy is essentially tied; log score and coverage slightly favor the centered model.
AL-Dhurafi, N. A., N. Masseran, and Z. H. Zamzuri (2018). Compositional time series analysis
for air pollution index data. Stochastic Environmental Research and Risk Assessment 32 (10),
2903–2911.
Ba ́nbura, M., D. Giannone, and L. Reichlin (2010). Large Bayesian vector auto regressions.
Journal of Applied Econometrics 25 (1), 71–92.
Barcel ́o-Vidal, C., L. Aguilar, and J. A. Mart ́ın-Fern ́andez (2011). Compositional varima
time series. In Compositional Data Analysis: Theory and Applications, pp. 87–101. John
Wiley & Sons: Chichester.
Bauwens, L., S. Laurent, and J. V. K. Rombouts (2006). Multivariate GARCH models: A
survey. Journal of Applied Econometrics 21 (1), 79–109.
Berry, L. R. and M. West (2020). Bayesian forecasting of many count-valued time series.
Journal of Business & Economic Statistics 38 (4), 872–887.
22

Bollerslev, T. (1986). Generalized autoregressive conditional heteroskedasticity. Journal of
Econometrics 31 (3), 307–327.
Brandt, P. T. and T. Sandler (2012). A Bayesian Poisson vector autoregression model.
Political Analysis 20 (3), 292–315.
Brunsdon, T. M. and T. M. F. Smith (1998). The time series analysis of compositional data.
Journal of Official Statistics 14 (3), 237.
Bu ̈rkner, P.-C., J. Gabry, and A. Vehtari (2020). Approximate leave-future-out cross-validation
for Bayesian time series models. Journal of Statistical Computation and Simulation 90 (14),
2499–2523.
Cargnoni, C., P. M ̈uller, and M. West (1997). Bayesian forecasting of multinomial time
series through conditionally Gaussian dynamic models. Journal of the American Statistical
Association 92, 640–647.
Chen, C. W. S. and S. Lee (2016). Generalized Poisson autoregressive models for time series
of counts. Computational Statistics & Data Analysis 99, 51–67.
Creus-Mart ́ı, I., A. Moya, and F. J. Santonja (2021). A Dirichlet autoregressive model for
the analysis of microbiota time-series data. Complexity 2021.
da Silva, C. Q., H. S. Migon, and L. T. Correia (2011). Dynamic Bayesian beta models.
Computational Statistics & Data Analysis 55 (6), 2074–2089.
da Silva, C. Q. and G. S. Rodrigues (2015). Bayesian dynamic Dirichlet models. Communi
cations in Statistics-Simulation and Computation 44 (3), 787–818.
Egozcue, J. J., V. Pawlowsky-Glahn, G. Mateu-Figueras, and C. Barcelo-Vidal (2003). Isomet
ric logratio transformations for compositional data analysis. Mathematical Geology 35 (3),
279–300.
23

Engle, R. (2001). Theoretical and empirical properties of dynamic conditional correlation
multivariate GARCH. National Bureau of Economic Research Working Paper No. 8554 .
Engle, R. F. (1982). Autoregressive conditional heteroscedasticity with estimates of the
variance of united kingdom inflation. Econometrica 50 (4), 987–1007.
Francq, C. and J.-M. Zako ̈ıan (2019). GARCH Models: Structure, Statistical Inference and
Financial Applications. John Wiley & Sons.
Fukumoto, K., A. Beger, and W. H. Moore (2019). Bayesian modeling for overdispersed
event-count time series. Behaviormetrika 46 (2), 435–452.
Giller, G. L. (2020). Generalized autoregressive dirichlet multinomial models: Definition and
stability. Available at SSRN 3512527 .
Grunwald, G. K., A. E. Raftery, and P. Guttorp (1993). Time series of continuous proportions.
Journal of the Royal Statistical Society: Series B (Methodological) 55 (1), 103–116.
Hijazi, R. H. and R. W. Jernigan (2009). Modelling compositional data using Dirichlet
regression models. Journal of Applied Probability & Statistics 4 (1), 77–91.
Huber, F. and M. Feldkircher (2019). Adaptive shrinkage in Bayesian vector autoregressive
models. Journal of Business & Economic Statistics 37 (1), 27–39.
Hyndman, R. J. and G. Athanasopoulos (2018). Forecasting: principles and practice. OTexts.
Karlsson, S. (2013). Forecasting with Bayesian vector autoregression. Handbook of Economic
Forecasting 2, 791–897.
Kastner, G. and F. Huber (2020). Sparse Bayesian vector autoregressions in huge dimensions.
Journal of Forecasting 39 (7), 1142–1165.
24

Katz, H., K. T. Brusch, and R. E. Weiss (2024). A Bayesian Dirichlet auto-regressive moving
average model for forecasting lead times. International Journal of Forecasting 40 (4),
1556–1567.
Katz, H. and T. Maierhofer (2025). Forecasting the u.s. renewable-energy mix with an
alr-bdarma compositional time-series framework. Forecasting 7 (4).
Katz, H., L. Medina, and R. E. Weiss (2025). Sensitivity analysis of priors in the bayesian
dirichlet auto-regressive moving average model. Forecasting 7 (3).
Katz, H. and R. E. Weiss (2025). A bayesian dirichlet auto-regressive conditional heteroskedas
ticity model for compositional time series.
Koehler, A. B., R. D. Snyder, J. K. Ord, and A. Beaumont (2010). Forecasting compositional
time series with exponential smoothing methods. Technical report, Monash University,
Department of Econometrics and Business Statistics.
Kynˇclov ́a, P., P. Filzmoser, and K. Hron (2015). Modeling compositional time series with
vector autoregressive models. Journal of Forecasting 34 (4), 303–314.
McCabe, B. P. M. and G. M. Martin (2005). Bayesian predictions of low count time series.
International Journal of Forecasting 21 (2), 315–330.
Mills, T. C. (2010). Forecasting compositional time series. Quality & Quantity 44 (4), 673–690.
Morais, J., C. Thomas-Agnan, and M. Simioni (2018). Using compositional and dirichlet
models for market share regression. Journal of Applied Statistics 45 (9), 1670–1689.
Nelson, D. B. (1991). Conditional heteroskedasticity in asset returns: A new approach.
Econometrica 59 (2), 347–370.
Prado, R. and M. West (2010). Time series: Modeling, Computation, and Inference. Chapman
and Hall/CRC.
25

R Core Team (2022). R: A Language and Environment for Statistical Computing. Vienna,
Austria: R Foundation for Statistical Computing.
Ravishanker, N., D. K. Dey, and M. Iyengar (2001). Compositional time series analysis
of mortality proportions. Communications in Statistics-Theory and Methods 30 (11),
2281–2291.
Roberts, S. J. and W. D. Penny (2002). Variational Bayes for generalized autoregressive
models. IEEE Transactions on Signal Processing 50 (9), 2245–2257.
Silva, D. B. N. and T. M. F. Smith (2001). Modelling compositional time series from repeated
surveys. Survey Methodology 27 (2), 205–215.
Silveira de Andrade, B., M. G. Andrade, and R. S. Ehlers (2015). Bayesian garma models
for count data. Communications in Statistics: Case Studies, Data Analysis and Applica
tions 1 (4), 192–205.
Silvennoinen, A. and T. Ter ̈asvirta (2009). Multivariate garch models. In Handbook of
Financial Time Series, pp. 201–229. Springer.
Snyder, R. D., J. K. Ord, A. B. Koehler, K. R. McLaren, and A. N. Beaumont (2017).
Forecasting compositional time series: A state space approach. International Journal of
Forecasting 33 (2), 502–512.
Stan Development Team (2022). RStan: the R interface to Stan. R package version 2.21.5.
Tsagris, M. and C. Stewart (2018). A Dirichlet regression model for compositional data with
zeros. Lobachevskii Journal of Mathematics 39 (3), 398–412.
Tsay, R. S. (2005). Analysis of Financial Time Series. John Wiley & Sons.
Tsay, R. S., D. Wood, and J. Lachmann (2022). MTS: All-Purpose Toolkit for Analyzing
Multivariate Time Series (MTS) and Estimating Multivariate Volatility Models. R package
version 1.2.1.
26

Vehtari, A., A. Gelman, and J. Gabry (2017). Practical Bayesian model evaluation using
leave-one-out cross-validation and waic. Statistics and Computing 27 (5), 1413–1432.
Vehtari, A. and J. Ojanen (2012). A survey of Bayesian predictive methods for model
assessment, selection and comparison. Statistics Surveys 6, 142–228.
Vehtari, A., D. Simpson, A. Gelman, Y. Yao, and J. Gabry (2015). Pareto smoothed
importance sampling. arXiv preprint arXiv:1507.02646 .
West, M. (1996). Bayesian time series: Models and computations for the analysis of time
series in the physical sciences. In Maximum Entropy and Bayesian Methods, pp. 23–34.
Springer.
Zheng, T. and R. Chen (2017). Dirichlet ARMA models for compositional time series. Journal
of Multivariate Analysis 158, 31–46.
27

---

## Processing Information

- **Processing Library:** Zotero PDFWorker
- **Processing Date:** 2026-02-10T18:15:03.828Z
- **Text Length:** 42454 characters
- **Success:** Text extraction completed
- **PDF Library Used:** Zotero PDFWorker
- **Pages Processed:** 27 of 27
