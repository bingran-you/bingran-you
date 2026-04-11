# PDF Document: Boulin and Haufs - 2025 - Extrapolating into the Extremes with Minimum Distance Estimation.pdf

**File Path:** Boulin and Haufs - 2025 - Extrapolating into the Extremes with Minimum Distance Estimation.pdf

**Processed Date:** 2026-02-10T18:15:08.223Z

**File Size:** 2586.63 KB

**Total Pages:** 34

**Extracted Pages:** 34

**PDF Library:** Zotero PDFWorker

**Attachment Item ID:** 3365

**Title:** Extrapolating into the Extremes with Minimum Distance Estimation

**Collection:** Large Files > Random Papers

---

## Extracted Text Content

Extrapolating into the Extremes with
Minimum Distance Estimation
Alexis Boulin∗ Erik Haufs†
November 26, 2025
Understanding complex dependencies and extrapolating beyond observations are key challenges in modeling environmental space-time extremes. To address this, we introduce a simplifying approach that projects a wide range of multivariate exceedance problems onto a univariate peaks-over-threshold problem. In this framework, an estimator is computed by minimizing the L2-distance between the empirical distribution function of the data and the theoretical distribution of the model. Asymptotic properties -
of this estimator are derived and validated in a simulation study. We evaluated our estimator in the EVA (2025) conference Data Challenge as part of Team Bochum’s submission. The challenge provided precipitation data from four runs of LENS2, an ensemble of long-term weather simulations, on a 5 × 5 grid of locations centered at the grid point closest to Asheville, NC. Our estimator achieved a top-three rank in two of six competitive categories and won the overall preliminary challenge against ten c-
ompeting teams.
Keywords. Extreme value analysis, Peaks-over-threshold, Minimum distance estimation, Spatio-temporal extremes, Robust inference, Environmental statistics
MSC subject classifications. Primary 62G32, 62G05, Secondary 62F12, 62P12.
Contents
1. Introduction 2
2. Methods 3 2.1. From events to univariate GPDs . . . . . . . . . . . . . . . . . . . . . . . 4 2.2. Peaks-over-Threshold Framework . . . . . . . . . . . . . . . . . . . . . . . 5
∗Ruhr-Universita ̈t Bochum, Fakulta ̈t fu ̈r Mathematik. Email: alexis.boulin@rub.de †Ruhr-Universita ̈t Bochum, Fakulta ̈t fu ̈r Mathematik. Email: erik.haufs@rub.de
1
arXiv:2511.20466v1 [stat.ME] 25 Nov 2025

2.3. Minimum Distance Estimation (MDE) . . . . . . . . . . . . . . . . . . . . 6
3. Application to the Data Challenge 9 3.1. Residual-based estimation of ς . . . . . . . . . . . . . . . . . . . . . . . . 10 3.2. On the choice of threshold . . . . . . . . . . . . . . . . . . . . . . . . . . . 11
4. Conclusion 12
A. Proofs for Section 2 16
B. Efficiency comparison to MLE 21
C. Additional results for the challenge 24
D. Simulation Study 26
E. Covariance Calculations with Mathematica 29
1. Introduction
Extreme value statistics is frequently concerned with the problem of estimating some extreme occurrence probability. Classical models are often limited to either a spatial or a temporal analysis of an extreme event. In environmental statistics, however, the interest lies in the spatio-temporal extent of an extreme event: for example, the severeness of a flooding is influenced by the cumulative precipitation over different time scales (hourly to several days) as well as the regional spread of extre-
me rain. The tasks in the EVA 2025 data challenge try to capture such complexities. All posed tasks may be phrased in the quite general setting of estimating exceedance probabilities. They have been designed in a way to incorporate multivariate methods, targeting at the simultaneous exceedance probability of precipitation at multiple distinct locations on a grid, as well as capturing the temporal dependence structure by asking for exceedances over consecutive days. A detailed description of the ch-
allenge design is provided in EVA2025-Data-Challenge-Team 2025. The data challenge consisted of a preliminary and a competition challenge, each subdivided into three target probabilities, which will be denoted by (P1) – (P3) and (C1) – (C3) in the following. The targets refer to a simulated data set of daily precipitation at 25 locations, organized into a 5 × 5 grid. At each location, 165 years of daily observations are recorded; four simulation runs of this model were presented. Our contribution -
may be seen as two-fold, first methodological, and secondly, theoretical. On the methodological level, we provide a strategy how to project all, up to 25-dimensional, problems into a simplifying univariate framework, which we exploit to estimate the target probabilities. Within the univariate setting, an L2-minimum distance estimation is employed to extrapolate from less extreme threshold exceedances to the target exceedance probabilities. Latter idea emerged from a diagnostic tool frequently used-
 in the evaluation of multivariate extreme value methods to compare theoretical
2

survival probabilities to empirical ones, see, e.g., Kiriliouk and Zhou 2022, Fig. 3, Li et al. 2024, Fig. 7 or Buritic ́a et al. 2025, Fig. 4. Our proposed minimum distance approach directly fits a parametric model to the empirical survival probabilities and uses this model for extrapolation, similar to a peaksover-threshold approach. Latter is widely applied throughout extreme value statistics, with GPD modeling dating back as far as Pickands 1975 and with statistical properties studied by Balk-
ema and Haan 1974; Davison 1984; Davison and Smith 1990, among many others. Our major theoretical contribution lies in the introduction of an L2 Minimum-Distance Estimator, for which we provide asymptotic theory as well as an exhaustive efficiency comparison to maximum likelihood estimation. Minimum distance estimation strategies are widely used in different areas of statistics Drossos and Philippou 1980; Clarke and Heathcote 1994; Ozturk 1997, increasingly popular in situations demanding robust e-
stimation. Notable contributions to the L2MDE may be attributed to, for instance, Hettmansperger et al. 1994. Even within extreme value statistics, they are a commonly applied tool, see for instance Berghaus et al. 2013; Broadwater and Chellappa 2009; Dietrich and Hu ̈sler 1996; Yilmaz et al. 2021. In particular for the GPD, the MLE has been long criticized to yield non-robust estimates and attempts have been made to provide more robust estimation strategies, such as Jurez and Schucany 2004. Proba-
bly closest to our proposed approach is the work of Chen et al. 2017. However, they only minimize their distance on the GPD sample and do not minimize a distance related to the whole empirical survival functions. Besides, we prove asymptotic normality and provide explicit formulae for the limiting covariance matrix. The remainder of this paper is organized as follows. In Section 2, we formalize the problems of the data challenge and detail the construction and properties of the estimators, includi-
ng two ways for the construction of normal confidence intervals. These tools are then applied to the problems of the challenge in Section 3, forming the core of this paper.
2. Methods
We consider the general task of estimating probabilities of rare spatio-temporal events in multivariate (precipitation) data. Let (Ω, A, P) be a probability space. In this paper, all random variables are assumed to be defined on this space. Denote with (ξ(l)
t )t ⊂ Rd, t = 1, ..., n; l = 1, ..., 4 the (d = 25dimensional) vector of daily precipitation at day t in the simulation run l. The time series (ξ(l)
t )t are regarded as independent observations of a stochastic process (ξt)t with
observation length n = 365·165. The ith coordinate of ξt shall be ξt,i and the ith smallest entry of ξt shall be ξt,i:d. Each task of the EVA 2025 Data Challenge corresponds to estimating an expectation (target) of the form
TA := E
"n X
t=1
1At
#
= n · P(At),
3

where At = At((ξs)s∈S (t)) is a generic spatio-temporal event describing the properties of ξs in a temporal neighborhood S (t) of time t. The equality TA = n · P(At) holds, of course, only under stationarity over t, which we want to assume throughout.
Example 1 (Challenge events). We consider the following events: for a threshold q > 0, put
A(P1)
t (q) := Pd
i=1 ξt,i > q A(C1)
t (q) := ξt,1:d > q
A(P2)
t (q) := ξt,3:5 > q A(C2)
t (q) := ξt,6:d > q (1)
A(P3)
t (q) := ξt−1,3:5 ≤ q, ξt,3:5 ∧ ξt+1,3:5 > q A(C3)
t (q) := ξt−1,3:d ≤ q, ξt,3:d ∧ ξt+1,3:d > q
The events (P1) – (P3) and (C1) – (C3) denote the targets of the preliminary and competition challenge, respectively.
Our subsequent approach is threefold. First, for a given At, we show how to construct univariate random variables Xt with P(At(q)) = P(Xt > q), phrasing the targets as onedimensional threshold exceedances. Next, we employ a peaks-over-threshold approach to model high threshold exceedances via a generalized Pareto distribution. Finally, we construct a L2 Minimum Distance Estimator for P(At), whose asymptotic properties we leverage for inference. The remainder of this section formalizes the describe-
d steps.
2.1. From events to univariate GPDs
All events A(q) of the data challenge have in common that they may be expressed as a function of a univariate parameter q ≥ 0, to be called threshold. Further, a common property is P(A(q)) → 0 as q → ∞. Contrary, the limit q → 0 may differ between the events: for P1, P2, C1 and C2, we have P(A(q)) → 1 as q → 0 and, for P3 and C3, P(A(q)) → p ∈ [0, 1]. The qualitative difference of possible functions q 7→ P(A(q)) is depicted in the left-hand side of Figure 1. During the data challenge, we are inter-
ested in modeling P(A(q)) for large values of q, based on the observed counts #{t : At(q)}. Assume that P(A(q)) ≤ P(A(q′)) for sufficiently large q′ < q, the counts #{t : At(q)} are monotonically decreasing in q (at sufficiently large q); which is not restrictive for the challenge events. Thus, it appears natural to interpret the rescaled counts as the empirical survival function of a random variable. We want to construct such a random variable next and motivate a distributional assumption for it.-
 Recall that q 7→ P(A(q)) maps to [0, 1] with P(A(q)) ↓ 0 as q → ∞ for q sufficiently large. Thus, we put
F (q) = 1 − sup
w≥q
P(At(w)), q ≥ 0 (2)
with F (q) = 1 − P(At(q)) for q sufficiently large. See the right-hand side of Figure 1 for (qualitative) examples of 1 − F . Note that F is a cumulative distribution function on [0, ∞) with a point mass of 1 − supw≥0 P(At(w)) at q = 0.1 Now introduce iid random
1such a distribution, also known as a zero-inflated distribution, may occur, for instance, when modeling daily precipitation sums
4

0.0 2.5 5.0 7.5 10.0 q
0.00
0.25
0.50
0.75
1.00
probability
0 5 10 q
P[A(q)] P[B(q)] P[C (q)] 1 − FA(q) 1 − FB(q) 1 − FC(q)
Figure 1: Left: qualitatively possible curves of q 7→ P(E(q)) for different generic events E ∈ {A, B, C}. Event A qualitatively corresponds to P1, P2, C1 and C2; B (if p = 0) and C (if p > 0) to P3 and C3. Right: event probability curves q 7→ P(E(q)) together with their corresponding survival function 1 − FE(q) = supw≥q P(At(w)) as constructed in Equation (2).
variables Xt ∼ F, t = 1, . . . , n, and denote with t1, . . . , tk the time points of exceedances, {t1, . . . , tk} := {t : Xt > u}. The exceedances shall be Yj := Xtj − u, j = 1, . . . , k. By construction, we have for x := q − u > 0,
P(Yj > x) = P(Xt > q)
P(Xt > u) = P(A(q))
P(Xt > u) .
This demonstrates how to express the target probability P(A(q)) via a univariate random variable Y . The term P(Xt > u) may simply be approximated via its empirical probability; the term P(Yj > x) is a typical threshold exceedance probability. Threshold exceedances are usually modeled by a GPD, as the following section elaborates.
2.2. Peaks-over-Threshold Framework
When analyzing exceedances of a random variable X above a high threshold u, univariate extreme value theory motivates the use of Generalized Pareto Distribution (GPD) as a limiting model for excesses. The GPD cumulative distribution function is defined for any x ≥ 0 by
Fθ(x) = 1 − Sθ(x) = 1 − 1 + γ x
σ
−1/γ
+
, θ = (γ, σ) ∈ Θ ⊂ R × (0, ∞),
where (z)+ = max(z, 0), γ is a shape parameter and σ is a positive scale parameter. We now motivate why and how to model the multivariate events At of Example 1 with
a GPD: let X1, X2, . . . , Xn
ii∼d F denote the random univariate variables constructed as described in the previous section. For a high threshold u, and excess level x ≥ 0, define the conditional distribution of excesses:
Fu(x) := P(X1 − u ≤ x | X1 > u), x ≥ 0.
5

The Pickands-Balkema-de Haan theorem Pickands 1975; Balkema and Haan 1974 gives conditions, so that for sufficiently large u, Fu(x) ≈ Fθ(x) where Fθ is the GPD with shape parameter γ ∈ R and σ > 0. In particular, exceedance probabilities admit the classical approximation
P(X1 > u + x) ≈ P(X1 > u) · Sθ(x) (3)
The exceedance probability P(X1 > u) can be estimated empirically by ˆP(X1 > u) =
1 n
Pn
t=1 1(Xt > u), so it remains to focus on estimating the GPD parameters θ = (γ, σ).
Example 2. To illustrate how multivariate tail behavior leads to a univariate POT limit, we begin with a concrete example. Let ξt ∼ Y for any t = 1, . . . , n where Y is a d-dimensional real random vector. Suppose that the d-dimensional random vector Y = (Y1, . . . , Yd) follows max-linear model, i.e., Yj = maxaK=1 AjaZa, j = 1, . . . , d with nonnegative coefficients Aja and independent α-Fr ́echet Za, a = 1, . . . , K with K ∈ N≥1. Consider the failure region C(x) = {y : max(y1, . . . , yn) > x}-
, which is standard in environmental applications such as wind speed or extreme rainfall. Then, classical multivariate extreme value theory yields the approximation for exceedance of X = max{Y1, . . . , Yd} for large x
P {X > x} ≈ νY (C(x)) = 1
xα
K
X
a=1
max
j=1,...,d Aα
ja,
where νY is the so-called exponent measure of the max-linear random vector ξ, see, e.g., Kiriliouk and Zhou 2022, Equation (9), Boulin and Bu ̈cher 2025, Lemma 2.7. Consequently, the tail of X is regularly varying with index α, so exceedances over a high threshold follow a GPD limit with shape parameter γ = 1/α > 0 and scale parameter
σ= 1
α
PK
a=1 maxj=1,...,d Aα
ja
1/α. Similar representation can be done for failure region
such as {y : min(y1, . . . , yd) > x}, {y; Pd
j=1 vjyj > x} where vj > 0, j = 1, . . . , d or, more generally, for any homogeneous transformation h : [0, ∞)d → R of a regularly varying random vector Y such that νY ◦ h−1 is not the null-measure using Kulik and Soulier 2020, Proposition 2.1.12. This illustrates how multivariate regular variation naturally leads to a univariate GPD limit for exceedances of suitable transformations.
2.3. Minimum Distance Estimation (MDE)
Recall X1, X2, . . . , Xn
ii∼d F , fix a high threshold u = un ∈ R, and define the (ran
dom) number of exceedances as K = Kn := Pn
i=1 1{Xi>u}. Denote by {i1, . . . , iK } ⊂ {1, . . . , n} the indices of those observations that exceed the threshold. For each j = 1, . . . , K, we define the excesses above u by Yj := Xij − u. Thus, put Y1, . . . , YK ∈ (0, ∞) to denote the observed exceedances, which form the basis for GPD modeling. Define the empirical survival function to be
SˆK (x) := 1
K
K
X
j=1
1(Yj > x).
6

To construct the MDE, we will minimize the distance functional
d(F, G) :=
Z∞
0
[F (x) − G(x)]2 dx,
for any two functions F, G ∈ L2. If γ < 2, then Sθ ∈ L2 and we can we define
θˆMDE
K := arg min
θ∈Θ JK (θ), JK (θ) = d(SˆK , Sθ).
By the plug-in principle, we obtain an estimator for the second term of the desired
exceedance probability (3), SˆMDE
K (x) = SθˆMDE
K (x). To avoid technical complications
with dependence within exceedances, only approximate validity of the GPD law, and K being random, we will derive asymptotic properties for
θˆMDE
k := arg min
θ∈Θ Jk(θ), Jk(θ) = d(Sˆk, Sθ), Sˆk(x) := 1
k
k
X
j=1
1(Zj > x),
with Z1, . . . , Zk ∼ GPD(θ0) iid and k ∈ N deterministic. The sample (Zj)j shall be thought of approximating (Yj)j. The results below are stated under quite restrictive conditions, but sufficient to apply the estimator to the challenge. Most importantly, see Section 3 to verify γ ∈ [0, 1]. In particular, they allow us to formulate the MDE as a Z -estimator.
Condition 1. The random variables Z1, Z2, . . . are iid and follow exactly a GPD(θ0) distribution, with θ0 ∈ Interior(Θ), where Θ ⊂ (0, 1) × (0, ∞) is a compact and convex subset.
Lemma 1 (MDE is a Z-estimator). Let (z1, . . . , zk) ∈ (0, ∞)k and Θ ⊂ (0, 1) × (0, ∞) compact. Any local minimizer of the optimization problem
arg min
θ∈Θ d 1
k
k
X
j=1
1(zj > x), Sθ
satisfies
Ψk(θ) := 1
k
k
X
j=1
ψ(zj, θ) = 0,
where, for x ∈ (0, ∞), ψ(x, θ) = ψγ(x, θ) ψσ(x, θ) ⊤ and
ψγ(x, θ) = σ
2(γ − 2)2 + (γ − 1)−2γ−2h
− γ2σ + σ
σ + γx
1/γ n
γ(γσ + (2γ − 1)x)
− (γ − 1)(σ + γx) log γx
σ +1
oi
ψσ(x, θ) = − 1
2(γ − 2) − (γ − 1)−1σ−1h
(σ + x) σ
σ + γx
1/γ − σ
i
.
7

By standard Z-estimator theory, we conclude two major results.
Theorem 2 (Consistency). Assume Condition 1. Then any sequence θˆMDE
k = θˆMDE
k (Z1, . . . , Zk)
with Jk(θˆMDE
k ) ≤ Jk(θ0) + oP(1) , as k → ∞,
θˆMDE
k
−−P→ θ0.
Furthermore, for x ≥ 0,
SˆMDE
k (x) = SθˆMDE
k (x) −−P→ Sθ0(x) := S0(x).
Theorem 3 (Asymptotic Distribution). Assume Condition 1. Then any consistent
estimator sequence θˆMDE
k with Ψk(θˆMDE
k ) = oP(1/√k), as k → ∞
√k θˆMDE
k − θ0
−−D→ Z ∼ N2(0, Σθ0),
with Σθ0 being explicitly given in the proof and visualized in Figure 7. Second, for x ≥ 0,
√k SˆMDE(x) − S0(x) −−D→ G(x) := ∇θS0(x)⊤Z.
where G(x) is a mean-zero Gaussian Process with covariance kernel
Cov(G(x), G(x′)) = ∇θS0(x)⊤Σθ0∇θS0(x′).
In particular, ς2
θ (x) := Cov(G(x), G(x)) satisfies
(3(3 − 2γ)3(γ − 6)2(γ − 3)2γ4(σ + γx)2) · ς2
θ (x)
= 4 γx
σ + 1 −2/γ 4γ2(γ + 2)2 γ γ 30γ2 − 266γ + (γ − 2)2(σ + γx) log γx
σ + 1 + 857
− 1208 + 639 x2 · − γ γ 2γ 4γ2 − 58γ + 243 − 683 + 452 − 639 (γ − 2)2
· (σ + γx) log γx
σ + 1 − 4γ(γ + 2) 2γ γ 8γ2 − 62γ + 223 − 415 + 639 x
The relevance in Theorem 3 lies in the explicit formula for ς2
θ (x). Utilizing the vari
ance estimator ςˆ2
k (x) := ς2
θˆMDE
k
(x), it allows to construct an asymptotically valid level-α
confidence interval for Sθ(x) via
Cθ(x) := SˆMDE(x) ± √k · q1−α/2 · ςˆk(x) , (4)
where q1−α/2 denotes the 1 − α/2-quantile of the standard normal distribution.
8

10−1 100 101 102 x
0.00
0.05
0.10
0.15
0.20
Variance
ςθ2(x) vs x for γ = 0.2
σ=1 σ=2 σ=5
10−1 100 101 102 x
ςθ2(x) vs x for γ = 0.5
10−1 100 101 102 x
ςθ2(x) vs x for γ = 0.8
Figure 2: A depiction of the variance functions x 7→ ς2
θ (x) for different choices of γ and σ.
3. Application to the Data Challenge
We now apply the methodology introduced in Section 2 to the three three preliminary (P1) – (P3) and three competition targets (C1) – (C3) from the EVA 2025 Data Challenge. Recall that each target corresponds to an expected number of spatio-temporal exceedances in a 25-dimensional grid over 165 years of daily observations. In particular, we are interested in the estimation of
A(P1)
t (85), A(P2)
t (4.3), A(P3)
t (2.5), A(C1)
t (1.7), A(C2)
t (5.7), A(C3)
t (5),
with A(T)
t (q) as in Equation (1). For each target, we are provided four model runs (ξ(l)
t )t,
assumingly independent copies of (ξt)t. Every copy leads to events A(T),l
t (q), with equal
probability P(A(T),l
t (q)) = P(A(T),r
t (q)) for all l, r = 1, 2, 3, 4.
Following the construction of Section 2.3, we denote F (T)(q) = 1 − supw≥q P(A(T)
t (w))
and put X(T),l
t ∼ F (T). Further, fix a threshold u ∈ (0, ∞), to be chosen later. We put
kl := |{t ∈ [n] : X(T),l
t > u}| and denote the indices (time points) of exceedances in
copy l with {i1, . . . , ikl} = {t ∈ [n] : X(T),l
t > u}. The exceedances themselves shall be the random variables Y (T),l
j := X(T),l
ij − u for j = 1, . . . , kl. Their survival functions are
given by
Sˆ(T),l
k (x) := 1
kl
kl
X
j=1
1(Y (T),l
j > x).
With Y (T),l
j being independent over l, we can obtain a more refined estimator for S(x) by averaging over the four runs, leading to
Sˆ(T)
k (x) := 1
k
4
X
l=1
kl
X
j=1
1(Y (T),l
j > x),
9

1.0 1.5 2.0 Threshold
0
5
10
15
Number of exceedances
C1
data fit Target
3456 Threshold
0
10
20
30
40
C2
2345 Threshold
0
10
20
30
C3
Figure 3: Average of empirical targets ˆTA(q) = Pn
t=1 1(At(q)) (blue) and corresponding
MDE fits ˆTMDE
A (q) (red), targets C1 – C3, defined in Example 1. The black ⋆ denotes the target of the respective challenge.
where k = k1 + k2 + k3 + k4. The graphs of Sˆ(T)
k (x) are depicted together with their MDE fits in 3 for targets C1 – C3, the preliminary targest P1 – P3 are shown in the appendix, Figure 12. In contrast to the theory in Section 2.3, we fit a three-parametric GPD, θ = (γ, μ, σ) to the survival function
Sˆθ(x) := 1 + γ x − μ
σ
−1/γ
+
, x ≥ μ, θ = (γ, μ, σ) ∈ Ξ ⊂ R2 × (0, ∞), (5)
allowing for a more flexible model. One of the practical advantages of the proposed method is its simplicity, which goes hand in hand with its computational speed: a few seconds on a standard laptop.
3.1. Residual-based estimation of ς
At the time of the data challenge, Theorem 3 was not available, so that the estimator ςˆk
as a function of θˆ, as used in Equation (4), could not be utilized. We therefore employed a residual-based approach for the estimation of ς2
θ (x), which shall be shortly discussed.
Simulation results strongly suggest to prefer the plug-in estimator ςˆ2
k (x). Consider the absolute residuals between the empirical survival function and the MDE fit
rˆk(x) := |Sˆk(x) − SˆMDE
k (x)|.
Inspired by heteroscedastic regression, e.g. Glejser 1969, the residuals rˆk(x) were treated as approximations to the standard deviation ςk(x). We therefore fit a parametric model to the residuals, see Figure 4, and choose, for the sake of simplicity, the one-parametric model
ςφ(x) := φ ·
q
SˆMDE
k (x). (6)
10

1.0 1.2 1.4 Threshold
0.0
0.2
0.4
0.6
0.8
Residuals
C1
Residuals fit
345 Threshold
0.0
0.5
1.0
1.5
C2
Residuals fit
2345 Threshold
0.0
0.5
1.0
1.5
C3
Residuals fit
Figure 4: Residuals and fitted ς ̃2
k (x) for target C1 – C3. The other residual fits have been postponed to Appendix C, Figure 13.
The parameter φ is finally determined via MDE,
φˆk := arg min
φ>0
Z∞
0
[rˆk(x) − ςφ(x)]2 dx.
3.2. On the choice of threshold
All previous sections assumed a known threshold u = un. As it has to be chosen in
practice, we investigate how the estimated value S ̃MDE
k (x) changes with u, the results are depicted in Figure 5 and 14. It is particularly notable that each of the six targets shows a similar behavior with varied threshold u:
• For very low thresholds, the GPD is fitted to the whole bulk of data, not only to extreme exceedances. Consquently, the GPD model does not describe the data well and we see large estimated values.
• For intermediate thresholds, a close-to-zero prediction is visible in all six targets. This may indicate that the intermediate parts of these distributions are not heavytailed enough to capture the actual behaviour of extreme observations adequately.
• For high thresholds, a stabilizing region may be identified, over which the estimated values do not change too much. A zoomed-in version of the “stabilized regions” is shown in Figures 6 and 15.
As it still remains open how to choose the threshold within the stabilized region adequately, we circumvented this issue in two different ways: for the preliminary challenge, we chose a threshold u, such that the resulting fit appears to describe the empirical survival probabilities adequately, based on visual diagnostics. For the competition targets, we identified a stabilized region [u1, u2] via visual diagnostics and averaged the predictions over this interval. The choices of thresholds are sum-
marized in Table 1, together
11

0.5 1.0 Threshold
0
2
4
6
8
Number of exceedances
C1
data pointw. 95
123 Threshold
−2
0
2
4
C2
0123 Threshold
−2.5
0.0
2.5
5.0
7.5
C3
Figure 5: Development of the estimator ˆTMDE
A (q) over the threshold u for target C1 C3. The extreme threshold q = x + u is the target threshold and remains constant.
with the point estimates and confidence intervals. Note that the parameter values of the competition targets are only exemplary parameters – they change over the interval the estimators are being averaged over.
Remark 1 (On the choice of threshold). There exists a vast literature reviewing tools for choosing the threshold sequence un in practice, motivated either by theory Foug`eres et al. 2015; Scarrott and MacDonald 2012; Northrop et al. 2017 or by applications Pan et al. 2022; Solari et al. 2017; Dur ́an-Rosal et al. 2022, among many others. The discussion about which method should be preferred remains ongoing, and no clear consensus has emerged, as recently highlighted in a contributed abstract at th-
e EVA 2025 conference Belzile et al. 2025. We do not aim to contribute further to this debate and simply advise practitioners to adopt their preferred threshold-selection method.
4. Conclusion
In this work, we presented a very simple approach to estimating spatio-temporal exceedance probabilities in multivariate precipitation data, as posed by the EVA 2025 Data Challenge. By reducing each task to a univariate peaks-over-threshold problem, we demonstrate how to efficiently avoid the whole field of multivariate extreme value statistics – even though all tasks targeted this particular field of study. Within the peaks-over-threshold problem, we investigate an L2 estimator for the parameters-
 of a generalized Pareto distribution. Despite estimation via minimum distance is not novel at all, the particular L2 distance under consideration has, to the best of our knowledge, not been studied theoretically for the GPD distribution so far. We derive asymptotic theory for the L2-MDE by embedding it into the classical framework of Z -estimation. Further, we provide a detailed comparison of our L2-MDE to the classical maximum likelihood estimator in the appendix. Monte Carlo simulations indicat-
e superiority of
12

0.9 1.0 1.1 1.2 Threshold
0.0
0.1
0.2
0.3
0.4
Number of exceedances
C1
data pointw. 95
2.25 2.50 2.75 3.00 Threshold
0.0
0.2
0.4
0.6
0.8
C2
2.0 2.5 3.0 Threshold
0.2
0.4
0.6
C3
Figure 6: Zoom-in: development of the estimator Tˆ MDE
A (q) over the threshold u for target C1 – C3. The extreme threshold q = x + u is the target threshold and remains constant.
Table 1: Summary of estimation results for targets (P1) – (P3) and (C1) – (C3). The target level q = x + u is split into an excess x and a threshold u, with choices of u in third column. Consecutive columns contain the L2-MDE estimated parameters of the GPD(γ, μ, σ) distribution, the point estimate for the target probability and a corresponding 95% CI.
Target q u [(u1, u2)] (γˆ, μˆ, σˆ) Point estimate 95% CI
P1 85 43 (0.168, 20.71, 1.615) 0.3218 (0.1336, 0.5101)
P2 4.3 2.1 (0.199, 0.914, 0.070) 0.4160 (0.2970. 0.5351)
P3 2.5 1.2 (0.072, -0.0755, 0.125) 0.1978 (0.1080, 0.2875)
C1 1.7 [42, 70] (0.257, 0.671, 0.012) 0.1281 (0.0186, 0.2377)
C2 5.7 [2, 4] (0.383, 1.738, 0.020) 0.4405 (0.2064, 0.6746)
C3 5.0 [0.9, 1.3] (0.302, 1.065, 0.034) 0.3144 (0.1291, 0.4996)
MLE over L2-MDE, thus we cautiously recommend using former in application settings. Notwithstanding the simplicity of our approach, we managed to be competitive to stringent and complex modeling approaches from multivariate extreme value analysis, in the application to the EVA2025 data challenge. Beyond the scope of this competition, our approach may be considered as an unconventional, but successful alternative to problems in EVT, its main idea being universally applicable to a large scope of dif-
ferent problems. Besides, the discussed properties of the L2-MDE may shed new light on the usage of minimum distance estimators for peaksover-threshold problems.
13

Acknowledgments
The authors would like to express their thanks to Dan Cooley, Ben Shaby (Colorado State), Jennifer Wadsworth (Lancaster) and Emily Hector (Michigan) for organizing the data challenge of the 14th International Conference on Extreme Value Analysis 2025. Finally, valuable hints from and discussions with Axel Bu ̈cher are gratefully acknowledged.
Declarations
Funding
This work has been supported by the integrated project “Climate Change and Extreme Events – ClimXtreme Module B Statistics Phase II” (project B3.3, grant number 01LP2323L) funded by the German Federal Ministry of Education and Research (BMBF). Further financial support by the Deutsche Forschungsgemeinschaft (DFG, German Research Foundation; Project-ID 520388526; TRR 391: Spatio-temporal Statistics for the Transition of Energy and Transport) is gratefully acknowledged. Erik Haufs is grateful for su-
pport by the Studienstiftung des deutschen Volkes and by the Ruhr University Research School, funded by Germany’s Excellence Initiative [DFG GSC 98/3]. This work used resources of the Deutsches Klimarechenzentrum (DKRZ) granted by its Scientific Steering Committee (WLA) under project ID bb1152.
Conflict of interest
The authors do not declare any conflicts of interest.
Data availability statement
The data supporting the findings of this study are from the EVA 2025 data challenge EVA2025-Data-Challenge-Team 2025, and are available on request from the the organizers.
Author contribution
AB and EH participated together in the Data Challenge, conducting exploratory data analysis, simulations, and developed approaches. EH suggested the construction in Section 2. AB and EH wrote the manuscript.
References
Balkema, A. A. and Haan, L. de (1974). “Residual Life Time at Great Age”. In: The Annals of Probability 2.5. doi: 10.1214/aop/1176996548.
14

Belzile, L. et al. (June 2025). “Choosing the Threshold in Extreme Value Analysis”. In: Contributed Session Abstracts, EVA 2025, Chapel Hill. Contributed Session 5.2. Extreme Value Analysis (EVA) Conference. Chapel Hill, NC, USA. Berghaus, B. et al. (2013). “Minimum distance estimators of the Pickands dependence function and related tests of multivariate extreme-value dependence”. In: J. SFdS 154.1, pp. 116–137. Boulin, A. and Bu ̈cher, A. (2025). “Structured linear factor models for tail depende-
nce”. In: arXiv preprint arXiv:2507.16340.
Broadwater, J. B. and Chellappa, R. (2009). “Adaptive threshold estimation via extreme value theory”. In: IEEE Transactions on signal processing 58.2, pp. 490–500.
Buritic ́a, G. et al. (2025). “Modeling extreme events: Univariate and multivariate datadriven approaches: EVA (2023) Conference Data Challenge: Team genEVA”. In: Extremes 28.1, pp. 75–99. Chen, P. et al. (2017). “Minimum Distance Estimation for the Generalized Pareto Distribution”. In: Technometrics 59.4, pp. 528–541. doi: 10.1080/00401706.2016. 1270857. eprint: https://doi.org/10.1080/00401706.2016.1270857.
Clarke, B. R. and Heathcote, C. R. (1994). “Robust estimation ofk-component univariate normal mixtures”. In: Annals of the Institute of Statistical Mathematics 46.1, pp. 8393. doi: 10.1007/bf00773595.
Cram ́er, H. (1946). Mathematical Methods of Statistics. Princeton: Princeton University Press, pp. 479–480. Davison, A. C. and Smith, R. L. (July 1990). “Models for Exceedances Over High Thresholds”. In: Journal of the Royal Statistical Society Series B: Statistical Methodology 52.3, pp. 393–425. doi: 10.1111/j.2517-6161.1990.tb01796.x.
Davison, A. C. (1984). “Modelling Excesses over High Thresholds, with an Application”. In: Statistical Extremes and Applications. Ed. by J. T. de Oliveira. Dordrecht: Springer Netherlands, pp. 461–482. doi: 10.1007/978-94-017-3069-3_34. Dietrich, D. and H ̈usler, J. (1996). “Minimum distance estimators in extreme value distributions”. In: Communications in Statistics - Theory and Methods 25.4, pp. 695703. doi: 10 . 1080 / 03610929608831725. eprint: https : / / doi . org / 10 . 1080 / 0361092960883-
1725.
Drossos, C. A. and Philippou, A. N. (1980). “A note on minimum distance estimates”. In: Ann. Inst. Statist. Math. 32.1, pp. 121–123. doi: 10.1007/BF02480318.
Dur ́an-Rosal, A. M. et al. (2022). “A mixed distribution to fix the threshold for PeakOver-Threshold wave height estimation”. In: Scientific Reports 12.1, p. 17327. EVA2025-Data-Challenge-Team (2025). EVA2025 Data Challenge. Introduction to the EVA2025 Data Challenge Special Issue. Foug`eres, A.-L. et al. (2015). “Bias correction in multivariate extremes”. In: The Annals of Statistics 43.2, pp. 903–934. doi: 10.1214/14-AOS1305.
Glejser, H. (Mar. 1969). “A New Test for Heteroskedasticity”. In: Journal of the American Statistical Association 64.325, pp. 316–323. doi: 10.1080/01621459.1969. 10500976.
15

Hettmansperger, T. et al. (Oct. 1994). “Minimum distance estimators”. In: Journal of Statistical Planning and Inference 41.3, pp. 291–302. doi: 10.1016/0378-3758(94) 90025-6.
Jurez, S. F. and Schucany, W. R. (Sept. 2004). “Robust and Efficient Estimation for the Generalized Pareto Distribution”. In: Extremes 7.3, pp. 237–251. doi: 10.1007/ s10687-005-6475-6.
Kiriliouk, A. and Zhou, C. (2022). “Estimating probabilities of multivariate failure sets based on pairwise tail dependence coefficients”. In: arXiv preprint arXiv:2210.12618. Kulik, R. and Soulier, P. (2020). Heavy-Tailed Time Series. Springer Series in Operations Research and Financial Engineering. New York, NY: Springer. Li, M. et al. (Oct. 2024). “A wee exploration of techniques for risk assessments of extreme events: EVA (2023) conference data challenge: wee extremes group”. In: Extremes 28.1-
, pp. 101–121. doi: 10.1007/s10687-024-00500-5.
Northrop, P. J. et al. (2017). “Cross-validatory extreme value threshold selection and uncertainty with application to ocean storm severity”. In: Journal of the Royal Statistical Society Series C: Applied Statistics 66.1, pp. 93–120.
Ozturk, O. (June 1997). “Generalised weighted Cramer-von Mises distance estimators”. In: Biometrika 84.2, pp. 283–294. doi: 10.1093/biomet/84.2.283.
Pan, X. et al. (2022). “Peaks-over-threshold model in flood frequency analysis: a scoping review”. In: Stochastic Environmental Research and Risk Assessment 36.9, pp. 24192435. Pickands, J. (1975). “Statistical Inference Using Extreme Order Statistics”. In: The Annals of Statistics 3.1. doi: 10.1214/aos/1176343003.
Scarrott, C. and MacDonald, A. (2012). “A review of extreme value threshold estimation and uncertainty quantification”. In: REVSTAT-Statistical journal 10.1, pp. 33–60. Solari, S. et al. (2017). “Peaks O ver T hreshold (POT): A methodology for automatic threshold estimation using goodness of fit p-value”. In: Water Resources Research 53.4, pp. 2833–2849. Vaart, A. W. v. d. (Oct. 1998). Asymptotic Statistics. doi: 10.1017/cbo9780511802256. Wolfram Research, Inc. (n.d.). Mathematica, Version 14.1. C-
hampaign, IL, 2024. Yilmaz, A. et al. (2021). “Comparison of different estimation methods for extreme value distribution”. In: Journal of Applied Statistics 48.13-15. PMID: 35707070, pp. 22592284. doi: 10.1080/02664763.2021.1940109.
A. Proofs for Section 2
Proof of Lemma 1. Recall that the gradient ∇Jk vanishes for any local minimizer. Thus, we will consecutively calculate the gradient. Denote by fθ(x) the density of a GPD(θ), i.e.,
fθ(x) = 1
σ 1+ γ
σx
−1
γ −1
,
16

For any x ≥ 0 , the partial derivatives of Fθ are given by:
∂
∂γ Fθ(x) = − 1 + γ
σx
−1/γ log 1 + γx
σ
γ2 −
1
γσ x
1+ γ
σx
!
=− 1
γ2σ fθ(x) (1 + γ x
σ )(log 1 + γ x
σ − 1) ,
∂
∂σ Fθ(x) = − x
σ2 1 + γ
σx
−1/γ−1 = − 1
σ xfθ(x).
To compute the gradient of Jk, we want to swap the integral and the derivative sign. Since Θ is compact, there exist constants 0 < γmin < γ < γmax < 1 and 0 < σmin < σ < σmax < ∞ such that the rectangle (γmin, γmax) × (σmin, σmax) contains (γ, σ) and lies within a neighborhood of Θ. For the partial derivative with respect to γ, observe that for any θ ∈ Θ,
∂
∂γ Fθ(x) ≤ g1(x),
with,
g1(x) = 1 + γmax
σmax
x
−1/γmax


log 1 + γmax
σmin x
γ2
min
+
x
γmin σmin 1 + γmin
σmax x

,
where we use that γ 7→ (1 + γx/σ)−1/γ is non-decreasing and σ > 0. This can be seen by defining
A(γ, σ, x) := 1 + γx
σ
−1/γ
, B(γ, σ, x) := log 1 + γx
σ
γ2 −
x γσ
1 + γx
σ
.
Then: ∂
∂γ Fθ(x) = |A(γ, σ, x) · B(γ, σ, x)| ≤ A(γ, σ, x) · |B(γ, σ, x)|.
We now bound both terms. Due to γ 7→ (1 + γx/σ)−1/γ being non-decreasing,
A(γ, σ, x) ≤ 1 + γmax
σmax
x
−1/γmax
.
Second, for B(γ, σ, x), observe that
B(γ, σ, x) = 1
γ2 φ 1 + γ
σx ,
where
φ : (0, ∞) → (0, ∞), x 7→ φ(x) = log(x) − 1 + 1
x.
Since φ(·) is increasing on (1, ∞) we obtain by noticing that (1+γx/σ) ≤ (1+γmaxx/σmin):
|B(γ, σ, x)| ≤ log (1 + γmax · x/σmin)
γ2
min
+ x/(γmin · σmin)
1 + γmin · x/σmax
.
17

Combining the bounds, we conclude:
∂
∂γ Fθ(x) ≤ g1(x),
where:
g1(x) := 1 + γmax
σmax
x
−1/γmax


log 1 + γmax
σmin x
γ2
min
+
x
γmin σmin 1 + γmin
σmax x

.
We now show that g1(x) is integrable. Indeed
Z∞
0
1 + γmax
σmax
x
−1/γmax
log 1 + γmax
σmin
x dx = σmaxγmax
(γmax − 1)2 < ∞,
where 0 < γmax < 1. Also,
Z∞
0
1 + γmax
σmax
x
−1/γmax x
γmin σmin 1 + γmin
σmax x
!
dx < ∞.
Same arguments applies for ∂
∂σ Fθ, therefore, by Lebesgue’s theorem, we may interchange
integration and differentiation and obtain θˆMDE
k as the (possibly not unique) root of
∂θJk(θ) =
Z∞
0
∂
∂θ [Fˆk(x) − Fθ(x)]2 d x
We conclude
ψ(x, θ) =
Zx
0
∂
∂θ Fθ(y) dy −
Z∞
0
Zu
0
∂
∂θ Fθ(y) dy dFθ(u) (7)
by partial integration in analogy to Clarke and Heathcote 1994. The assertion follows from evaluating the appearing integrals, see also Appendix E: the inner integrals are
Zx
0
∂
∂γ Fθ(y) dy =
σ σ+γx
1/γ
γ(γσ + (2γ − 1)x) − (γ − 1)(σ + γx) log γx
σ + 1 − γ2σ
(γ − 1)2γ2 ,
Zx
0
∂
∂σ Fθ(y) dy = −
(σ + x) σ
σ+γx
1/γ − σ
(γ − 1)σ ,
whereas the outer integrals yield
Z∞
0
Zu
0
∂
∂γ Fθ(y) dy dFθ(u) = − σ
2(γ − 2)2 ,
Z∞
0
Zu
0
∂
∂σ Fθ(y) dy dFθ(u) = 1
2(γ − 2) .
18

Proof of Theorem 2. This is a direct consequence of Vaart 1998, Theorem 5.7, it remains to verify its conditions. First, we need to show that
sup
θ∈Θ
∥Jk(θ) − J(θ)∥ −−P→ 0.
For this, we have by Cauchy-Schwartz and the triangle inequality
|Jk(θ) − J(θ)| =
Z∞
0
(Sˆk(x) − Sθ(x))2 − (Sθ0(x) − Sθ(x))2 dx
=
Z∞
0
(Sˆk(x) − Sθ0(x)) Sˆk(x) + Sθ0(x) − 2Sθ(x) dx
=
DSˆk − Sθ0 , Sˆk + Sθ0 − 2Sθ
E2
L2
≤ Sˆk − Sθ0
2
L2 · Sˆk − Sθ0 + 2[Sθ0 − Sθ] 2
L2
≤ Sˆk − Sθ0
2
L2 ·
n Sˆk − Sθ0 L2 + 2 Sθ0 − Sθ L2
o2
.
Consequently,
sup
θ∈Θ
|Jk(θ) − J (θ)| ≤ Sˆk − Sθ0
2
L2 ·
n Sˆk − Sθ0 L2 + 2 sup
θ∈Θ
Sθ0 − Sθ(x) L2
o2
.
For fixed θ0 ∈ Θ, we have
sup
θ∈Θ
Sθ0 − Sθ
2
L2 = sup
θ∈Θ
Z∞
0
[Sθ0(x) − Sθ(x)]2 dx =: Cθ0 < ∞,
where the latter holds due to the compactness of Θ ⊂ (0, 1) × (0, ∞). Now, by Fubini,
E
h Sˆk − Sθ0
2 L2
i
=
Z∞
0
E
h1
k
k
X
j=1
1(Zj > x) − Sθ0(x)
i2 dx =
Z∞
0
Var
h1
k
k
X
j=1
1(Zj > x)
i
dx
=1
k
Z∞
0
Sθ0 (x)[1 − Sθ0 (x)] dx =: Vθ0
k < ∞,
as Sˆk(x) is a rescaled Bin(k, Sθ0(x)) random variable, pointwise. The latter Vθ0 < ∞ again holds due to Θ ⊂ (0, 1) × (0, ∞). By Chebyshev’s inequality,
Sˆk − Sθ0
2
L2 = oP(1).
We conclude
sup
θ∈Θ
|Jk(θ) − J (θ)| ≤ oP(1) · oP(1) + 2pCθ0
2 = oP(1),
so that the claimed convergence in probability is indeed fulfilled. It remains to check the second condition
inf
θ: d(θ,θ0)≥ε ∥J (θ)∥ > 0 = ∥J (θ0)∥,
which directly follows from the identifiability of the GPD. We conclude the second assertion by applying the continuous mapping theorem.
19

Proof of Theorem 3. We apply Vaart 1998, Theorem 5.21. Having established Lemma 1, the well-behaved derivatives of ψ and the strong assumptions on Θ make most conditions easy to verify, see sufficient conditions in Vaart 1998, Theorem 5.41. The only condition requiring major effort is the boundedness of the second-order partial derivatives of ψ in a neighborhood around θ0, which we show later. It remains to calculate the limiting covariance matrix Σθ0. Following Vaart 1998, we have Σθ = U −1
θ Vθ(U ⊤
θ )−1 with
Uθ = E ∂γψγ(Y, θ) ∂γψσ(Y, θ)
∂σψγ(Y, θ) ∂σψσ(Y, θ) , Vθ = E ψγ(Y, θ)2 ψγ(Y, θ)ψσ(Y, θ)
ψγ(Y, θ)ψσ(Y, θ) ψσ(Y, θ)2 .
Evaluating these matrices, we find
Uθ =
(γ−6)σ 2(γ−2)3(γ+2)
6−γ 4(γ−2)2(γ+2) 6−γ 4(γ−2)2(γ+2)
1
4σ−γ2σ
!
.
and
Vθ =


(8γ5−148γ4+918γ3−2587γ2+3416γ−1719)σ2 12(γ−3)2(γ−2)4(2γ−3)3
(γ(γ(−4(γ−15)γ−285)+548)−369)σ
12(γ−2)3(2γ2−9γ+9)2 (γ(γ(−4(γ−15)γ−285)+548)−369)σ 12(γ−2)3(2γ2−9γ+9)2
γ(2γ−17)+29 12(γ−3)(γ−2)2(2γ−3)

.
Concluding,
Σθ = U −1
θ Vθ(U ⊤
θ )−1
=


4(γ−2)4(γ(γ(2γ(4γ2−58γ+243)−683)+452)−639) 3(γ−6)2(γ−3)2(2γ−3)3
4(γ−2)2(γ(γ(2γ(4γ2−50γ+207)−791)+778)−387)σ 3(γ−6)(γ−3)2(2γ−3)3 4(γ−2)2(γ(γ(2γ(4γ2−50γ+207)−791)+778)−387)σ 3(γ−6)(γ−3)2(2γ−3)3
4(γ(γ(8γ3−84γ2+374γ−843)+944)−423)σ2 3(γ−3)2(2γ−3)3


(8)
Details of this calculation have been performed in Mathematica Wolfram Research, Inc. n.d., which is elaborated in Appendix E. The entries of Σθ for selected values of θ are depicted in Figure 7. It remains to show the second assertion, to which we apply the delta method. As ∇θS0(x) ̸= 0 for fixed x, the convergence
√k SˆMDE(x) − S0(x) −−D→ G(x) := ∇θS0(x)⊤Z
obviously holds. The covariance structure of G(x) is a direct consequence. Finally, the explicit structure of ς2
θ (x) immediately follows from evaluating ς2
θ (x) = ∇θFθ(x)⊤Σθ∇θFθ(x).
Proof of the boundedness of the second-order partial derivatives. Within the interior of Θ, the second order derivatives are continuous in a neighborhood around θ0. It therefore
20

suffices to show the integrability of the second-order partial derivatives at θ0. We have
Z∞
0
∂2
∂σ2 ψ(x, θ) dFθ(x) = − 1
(γ2 − 4)σ
Z∞
0
∂2
∂σ∂γ ψ(x, θ) dFθ(x) = −
G3,2
3,3 1 −2, − 2
γ , −1 −2, −2, 0
(γ − 1)γ4Γ(1 + 2/γ) − γ3 − 6γ2 + 4γ − 8
4(γ − 1)γ(γ − 2)2(γ + 2)
Z∞
0
∂2
∂γ2 ψ(x, θ) dFθ(x) = 2 γ2 + γ − 1
(γ − 1)2γ4Γ(2/γ) G3,2
3,3 1 −2, − 2
γ , −1
−2, −2, 0 σ
+ (2γ5 − 11γ4 + 4γ3 + 10γ2 + 20γ − 16)
2(γ − 1)2γ2(γ − 2)3(γ + 2) σ,
where G2,3
3,3 denotes the Mejier-G function. As all previous expressions are finite for all θ ∈ Θ, we conclude the assertion.
0.0 0.5 1.0 γ
−5.0
−2.5
0.0
2.5
5.0
7.5
Covariance matrix entry
σ=1
Σ11
Σ12 = Σ21
Σ22
0.0 0.5 1.0 γ
−10
0
10
20
30
σ=2
0.0 0.5 1.0 γ
0
50
100
150
200
σ=5
Figure 7: Entries of the covariance matrix γ 7→ Σθ for σ = 1, 2, 5, corresponding to the display (8). The absolute values (Σθ)ij grow with γ and σ.
B. Efficiency comparison to MLE
A common estimator of the GPD parameters in the peaks-over-threshold method is the maximum-likelihood estimator (MLE). We therefore treat this well-known estimator as a benchmark to compare our MDE against. By standard assumptions, the MLE
θˆMLE is asymptotically normal with limiting covariance being equal to the inverse Fisher information,
√k(θˆMLE
k − θ0) −−D→ N (0, ΣMLE
θ0 )
with
ΣMLE
θ = (γ + 1)2 −((γ + 1)σ)
−((γ + 1)σ) 2(γ + 1)σ2 .
21

Consequently, evaluating ς2,MLE
θ (x) = ∇θFθ(x)⊤Σθ∇θFθ(x), we see
γ4(σ + γx)2ς2,MLE
θ (x) = (γ + 1) γx
σ + 1 −2/γ (γ + 1)(2γ + 1)γ2x2 + (σ + γx) log γx
σ +1
·
n
((γ + 1)(σ + γx) log γx
σ + 1 − 2γ(2γ + 1)x
o
.
By the Crame ́r-Rao-bound Crame ́r 1946, Pages 479-480, we cannot expect to achieve
ς2
θ (x) < ς2,MLE
θ (x), but we can nevertheless compare these estimators in terms of asymptotic variance. Investigating Figure 9, we observe only small differences in limiting variance between MLE and MDE. This is more illustrative in the relative efficiency
ς2
θ (x)/ς2,MLE
θ (x), which appears to be well below 2 for all choices of γ, see Figure 10. Of
particular interest is the limiting behavior xli→m0 ς2,MLE
θ (x)/ς2
θ (x) and xli→m∞ ς2,MLE
θ (x)/ς2
θ (x), as
xli→m0 ς2,MLE
θ (x)/ς2
θ (x) = 2 8γ5 − 84γ4 + 374γ3 − 843γ2 + 944γ − 423
3(γ − 3)2(γ + 1)(2γ − 3)3
xli→m∞ ς2,MLE
θ (x)/ς2
θ (x) = − 4(γ − 2)4 γ γ 2γ 4γ2 − 58γ + 243 − 683 + 452 − 639
3(3 − 2γ)3(γ − 6)2(γ − 3)2(γ + 1)2 .
Notably, these limits are independent from σ and never exceed 2 for all choices of γ, as it is visualized in Figure 11.
0.0 0.5 1.0 γ
−5.0
−2.5
0.0
2.5
5.0
7.5
Covariance matrix entry
σ=1
Σ11 (MDE) Σ11 (MLE) Σ12 = Σ21 (MDE) Σ12 = Σ21 (MLE) Σ22 (MDE) Σ22 (MLE)
0.0 0.5 1.0 γ
−10
0
10
20
30
σ=2
0.0 0.5 1.0 γ
0
50
100
150
200
σ=5
Figure 8: Entries of the limiting covariance matrices ΣMLE
θ and Σθ as a function of γ,
shown for σ = 1, 2, 5 (from left to right). The diagonal entries of ΣMLE
θ are below those of Σθ.
22

10−1 100 101 102 x
0.00
0.05
0.10
0.15
0.20
Variance
σθ2(x) vs x for γ = 0.2
σ = 1 (MDE) σ = 1 (MLE) σ = 2 (MDE) σ = 2 (MLE) σ = 5 (MDE) σ = 5 (MLE)
10−1 100 101 102 x
σθ2(x) vs x for γ = 0.5
10−1 100 101 102 x
σθ2(x) vs x for γ = 0.8
Figure 9: Variances of the survival function, ς2
θ (x), ς2,MLE
θ (x). The variances approach zero for x → ∞ and x → 0, with their peak depending on γ and σ.
10−1 101 103 x
1.0
1.1
1.2
1.3
Variance Ratio
γ = 0.2
σ=1 σ=2 σ=5
10−1 101 103 x
γ = 0.5
10−1 101 103 x
γ = 0.8
Relative Covariance: Var(MDE) / Var(MLE)
Figure 10: Relative variances of the survival function, ς2
θ (x)/ς2,MLE
θ (x) for particular choices of γ = 0.2, 0.5, 0.8 and σ = 1, 2, 5. Note that σ only shifts the ratio horizontally, leaving the limits x → 0 and x → ∞ unaffected.
0.0 0.2 0.4 0.6 0.8 1.0 γ
1.00
1.25
1.50
1.75
2.00
Variance Ratio
x→0
0.0 0.2 0.4 0.6 0.8 1.0 γ
x→∞
Var(MDE) / Var(MLE) at x → 0 and x → ∞
Figure 11: Limiting ratios xli→m0 ς2,MLE
θ (x)/ς2
θ (x) and xli→m∞ ς2,MLE
θ (x)/ς2
θ (x) as a function
of γ. Note that the ratio never exceeds 2.
23

C. Additional results for the challenge
In this section, we provide additional results on the data challenge. All plots (Figures 12 – 15) have their correspondence to a Figure in the main paper. For the sake of brevity, we therefore omit a lengthy discussion of each.
60 80 100 Threshold
0
10
20
30
40
50
Number of exceedances
P1
data fit Target
234 Threshold
0
10
20
30
P2
1.5 2.0 2.5 Threshold
0
10
20
30 P3
Figure 12: Average of empirical survival functions Sˆk(x) (blue) and corresponding MDE fits SˆMDE
k (x) (red), targets P1 – P3. The black ⋆ denotes the target of the respective challenge.
60 80 Threshold
0
1
2
3
Residuals
P1
Residuals fit
234 Threshold
0.00
0.25
0.50
0.75
1.00
1.25 P2 Residuals fit
1.5 2.0 2.5 Threshold
0.0
0.2
0.4
0.6
0.8
1.0
P3
Residuals fit
Figure 13: Residuals and fitted ς ̃2
k (x) for target P1 – P3.
24

20 40 60 Threshold
−2
0
2
4
6
Number of exceedances
P1
data pointw. 95
012 Threshold
0
5
10
15
P2
0.0 0.5 1.0 1.5 Threshold
0
1
2
3
4
5 P3
Figure 14: Development of the estimator SˆMDE(q) over the threshold u for target P1 P3. The extreme threshold q = x + u is the target threshold and remains constant.
40 50 60 Threshold
0.0
0.2
0.4
0.6
Number of exceedances
P1
data pointw. 95
2.0 2.5 Threshold
0.2
0.4
0.6
P2
1.0 1.2 1.4 Threshold
0.0
0.1
0.2
0.3
0.4
P3
Figure 15: Zoom-in: development of the estimator SˆMDE(q) over the threshold u for target C1 – C3. The extreme threshold q = x + u is the target threshold and remains constant.
25

D. Simulation Study
We perform a short Monte Carlo simulation by drawing n iid samples from a GPD(γ, 1) distribution. In particular, we are interested in the comparison of MSE, variance and bias for different choices of n and γ. Thus, we vary n = 10, 50, 100 and γ ∈ {0.05, 0.1, ..., 0.6}. Each MSE (variance, bias) is approximated via 1000 repetitions of each simulation experiment. The results are depicted in Figure 16. It is notable that all MSEs are dominated by the variance. Due to the optimality in variance, the t-
heoretical result is confirmed that the MLE outperforms the MDE in terms of MSE for most combinations of γ and n. The trends in MSE of GPD parameters directly translate to trends in MISE of survival function estimation, shown in Figure 17.
26

0.2 0.4 0.6 0.8 Shape Parameter γ
0
1
2
3
4
n· MSE
MSE of GPD Estimators
L2 MLE
0.2 0.4 0.6 0.8 Shape Parameter γ
n· Variance
Variance of GPD Estimators
L2 MLE
0.2 0.4 0.6 0.8 Shape Parameter γ
n· Sq Bias
Sq Bias of GPD Estimators
L2 MLE
0.2 0.4 0.6 Shape Parameter γ
0
1
2
3
n· MSE
MSE of GPD Estimators
L2 MLE
0.2 0.4 0.6 Shape Parameter γ
n· Variance
Variance of GPD Estimators
L2 MLE
0.2 0.4 0.6 Shape Parameter γ
n· Sq Bias
Sq Bias of GPD Estimators
L2 MLE
0.2 0.4 0.6 Shape Parameter γ
0
1
2
n· MSE
MSE of GPD Estimators
L2 MLE
0.2 0.4 0.6 Shape Parameter γ
n· Variance
Variance of GPD Estimators
L2 MLE
0.2 0.4 0.6 Shape Parameter γ
n· Sq Bias
Sq Bias of GPD Estimators
L2 MLE
Figure 16: MSE, variance and squared bias for the shape parameter γ. estimation. For each point, n samples from a GPD(γ, 1) have been drawn and the MSE was computed over 1000 repetitions. From top to bottom: n = 10, 50, 100. We observe that all MSEs are variance-dominated and that MLE always outperforms MDE, but the MDE differences remain small.
27

0 5 10 15 20 x
0.0
0.2
0.4
0.6
0.8
1.0
Survival Function
GPD SFs (MDE, MISE=0.02146)
True SF (0.2, 1)
0 5 10 15 20 x
0.0
0.2
0.4
0.6
0.8
1.0
Survival Function
GPD SFs (MLE, MISE=0.03094)
True SF (0.2, 1)
0 5 10 15 20 x
0.0
0.2
0.4
0.6
0.8
1.0
Survival Function
GPD SFs (MDE, MISE=0.02116)
True SF (0.2, 1)
0 5 10 15 20 x
0.0
0.2
0.4
0.6
0.8
1.0
Survival Function
GPD SFs (MLE, MISE=0.02055)
True SF (0.2, 1)
Figure 17: Estimated survival functions Sθˆ(x) around true Sθ0(x), θ0 = (0.2, 1). Top:
n = 10, bottom: n = 100. The MISE is computed over the shown domain on 1000 repetitions.
28

Defining the estimating equations
In[1]:= F[x_] := 1 - (1 + γ / σ * x) ^ (- 1 / γ)
In[2]:= f[x_] := D[F[x], x]
In[3]:= gpd = ProbabilityDistribution[f[x], {x, 0, ∞}, Assumptions → {σ > 0, γ > 0, γ < 1}];
Gamma derivative and estimating equation:
In[]:= D[F[x], γ]
Out[]= - 1 + x γ
σ
-1γ
-x
γ 1+ xγ
σσ
+
Log1 + x γ
σ
γ2
In[]:= IntegrateD[F[y], γ], {y, 0, x}, Assumptions → 0 < γ < 1 && σ > 0 && x > 0
Out[ ]=
-γ2 σ + σ
x γ+σ
1
γ γ x - 1 + 2 γ + γ σ - (- 1 + γ) x γ + σ Log1 + x γ
σ
(- 1 + γ)2 γ2
In[]:= Expectation
-γ2 σ + σ
x γ+σ
1
γ γ x - 1 + 2 γ + γ σ - (- 1 + γ) x γ + σ Log1 + x γ
σ
(- 1 + γ)2 γ2
, x  gpd
Out[]= - σ
2 (- 2 + γ)2
In[]:= PsiGam[x_] :=
-γ2 σ + σ
x γ+σ
1
γ γ x - 1 + 2 γ + γ σ - (- 1 + γ) x γ + σ Log1 + x γ
σ
(- 1 + γ)2 γ2
+σ
2 (- 2 + γ)2
Sigma derivative and estimating equation:
In[]:= IntegrateDF[y], σ, {y, 0, x}, Assumptions → 0 < γ < 1 && σ > 0 && x > 0
Out[]= 
- σ + (x + σ) σ
x γ+σ
1 γ
(- 1 + γ) σ
In[]:= Expectation
- σ + (x + σ) σ
x γ+σ
1 γ
(- 1 + γ) σ
, x  gpd
Out[ ]=
1
2 (- 2 + γ)
E. Covariance Calculations with Mathematica
29

In[]:= PsiSig[x_] := 
- σ + (x + σ) σ
x γ+σ
1 γ
(- 1 + γ) σ
-1
2 (- 2 + γ)
Computing V
In[]:= ExpectationPsiGam[x] ^ 2, x  gpd
Out[ ]=
- 1719 + 3416 γ - 2587 γ2 + 918 γ3 - 148 γ4 + 8 γ5 σ2
12 (- 3 + γ)2 (- 2 + γ)4 - 3 + 2 γ3
In[]:= ExpectationPsiSig[x] ^ 2, x  gpd
Out[ ]=
29 - 17 γ + 2 γ2
12 (- 3 + γ) (- 2 + γ)2 - 3 + 2 γ
In[]:= ExpectationPsiSig[x] * PsiGam[x], x  gpd
Out[]= 
369 - 548 γ + 285 γ2 - 60 γ3 + 4 γ4 σ
12 (- 2 + γ)3 9 - 9 γ + 2 γ22
In[]:= V =

- 1719 + 3416 γ - 2587 γ2 + 918 γ3 - 148 γ4 + 8 γ5 σ2
12 (- 3 + γ)2 (- 2 + γ)4 - 3 + 2 γ3 , 
369 - 548 γ + 285 γ2 - 60 γ3 + 4 γ4 σ
12 (- 2 + γ)3 9 - 9 γ + 2 γ22 ,

369 - 548 γ + 285 γ2 - 60 γ3 + 4 γ4 σ
12 (- 2 + γ)3 9 - 9 γ + 2 γ22 ,
29 - 17 γ + 2 γ2
12 (- 3 + γ) (- 2 + γ)2 - 3 + 2 γ
;
In[]:= Simplify[MatrixForm[V]]
Out[ ]//MatrixForm=
-1719+3416 γ-2587 γ2+918 γ3-148 γ4+8 γ5 σ2
12 -3+γ2 -2+γ4 -3+2 γ3 - 369-548 γ+285 γ2-60 γ3+4 γ4 σ
12 -2+γ3 9-9 γ+2 γ22
- 369-548 γ+285 γ2-60 γ3+4 γ4 σ
12 -2+γ3 9-9 γ+2 γ22
29-17 γ+2 γ2
12 -3+γ -2+γ2 -3+2 γ
Computing U
In[]:= ExpectationD[PsiGam[x], γ], x  gpd
Out[ ]=
(- 6 + γ) σ
2 (- 2 + γ)3 (2 + γ)
2 covariance_formulae.nb

In[]:= ExpectationD[PsiGam[x], σ], x  gpd
Out[]= - - 6 + γ
4 (- 2 + γ)2 (2 + γ)
In[]:= ExpectationD[PsiSig[x], γ], x  gpd
Out[]= - - 6 + γ
4 (- 2 + γ)2 (2 + γ)
In[]:= ExpectationD[PsiSig[x], σ], x  gpd
Out[]= - 1
- 4 + γ2 σ
In[]:= U = 
(- 6 + γ) σ
2 (- 2 + γ)3 (2 + γ)
, - -6 + γ
4 (- 2 + γ)2 (2 + γ)
, - - 6 + γ
4 (- 2 + γ)2 (2 + γ)
,- 1
- 4 + γ2 σ
;
In[]:= Simplify[MatrixForm[U]]
Out[ ]//MatrixForm=
-6+γ σ
2 -2+γ3 2+γ
- -6+γ
4 -2+γ2 2+γ
- -6+γ
4 -2+γ2 2+γ
1
4 σ-γ2 σ
Computing Σ
In[]:= Sigma = FullSimplify[Inverse[U].V.Inverse[Transpose[U]]];
In[]:= MatrixForm[Sigma]
Out[ ]//MatrixForm=
4 -2+γ4 -639+γ 452+γ -683+2 γ 243-58 γ+4 γ2
3 -6+γ2 -3+γ2 -3+2 γ3
4 -2+γ2 -387+γ 778+γ -791+2 γ 207-50 γ+4 γ2 σ
3 -6+γ -3+γ2 -3+2 γ3
4 -2+γ2 -387+γ 778+γ -791+2 γ 207-50 γ+4 γ2 σ
3 -6+γ -3+γ2 -3+2 γ3
4 -423+γ 944+γ -843+374 γ-84 γ2+8 γ3 σ2
3 -3+γ2 -3+2 γ3
covariance_formulae.nb 3

Computing the Covariance of G(x)
In[]:= FirstFullSimplifyD[F[x], γ], D[F[x], σ].Sigma.{D[F[x], γ]}, {D[F[x], σ]}
Out[]= 4 1 + x γ
σ
-2γ
4 x2 γ2 (2 + γ)2 639 + γ - 1208 + γ 857 - 266 γ + 30 γ2 +
(- 2 + γ)2 x γ + σ Log1 + x γ
σ  - 4 x γ (2 + γ) 639 + 2 γ - 415 + γ 223 - 62 γ + 8 γ2 
(- 2 + γ)2 - 639 + γ 452 + γ - 683 + 2 γ 243 - 58 γ + 4 γ2 x γ + σ Log1 + x γ
σ 
3 3 - 2 γ3 (- 6 + γ)2 (- 3 + γ)2 γ4 x γ + σ2
In[46]:= sigma[x_, γ_, σ_] :=
4 1+
xγ
σ
-2γ
4 x2 γ2 (2 + γ)2 639 + γ - 1208 + γ 857 - 266 γ + 30 γ2 + (- 2 + γ)2
x γ + σ Log1 +
xγ
σ
 - 4 x γ (2 + γ) 639 + 2 γ - 415 + γ 223 - 62 γ + 8 γ2 
(- 2 + γ)2 - 639 + γ 452 + γ - 683 + 2 γ 243 - 58 γ + 4 γ2 x γ + σ Log1 +
xγ
σ

3 3 - 2 γ3 (- 6 + γ)2 (- 3 + γ)2 γ4 x γ + σ2
Comparison to the MLE
In[8]:= Expectation(D[Log[f[x]], γ]) ^ 2, x  gpd 
Out[8]=
2
1 + 3 γ + 2 γ2
In[9]:= Expectation(D[Log[f[x]], γ]) * (D[Log[f[x]], σ]), x  gpd 
Out[9]=
1
1 + 3 γ + 2 γ2 σ
In[10]:= Expectation(D[Log[f[x]], σ]) ^ 2, x  gpd 
Out[10]=
1
1 + 2 γ σ2
4 covariance_formulae.nb

In[35]:= Fish = 
2
1 + 3 γ + 2 γ2
,1
1 + 3 γ + 2 γ2 σ
, 
1
1 + 3 γ + 2 γ2 σ
,1
1 + 2 γ σ2
;
In[58]:= MatrixForm[FullSimplify[Inverse[Fish]]]
Out[58]//MatrixForm=
(1 + γ)2 - (1 + γ) σ
- (1 + γ) σ 2 (1 + γ) σ2
In[59]:= First
FullSimplifyD[F[x], γ], D[F[x], σ].FullSimplify[Inverse[Fish]].{D[F[x], γ]}, {D[F[x], σ]}
Out[59]=
1
γ4 x γ + σ2
(1 + γ) 1 + x γ
σ
-2γ
x2 γ2 (1 + γ) 1 + 2 γ + x γ + σ Log1 + x γ
σ  - 2 x γ 1 + 2 γ + (1 + γ) x γ + σ Log1 + x γ
σ
In[38]:= sigmaMLE[x_, γ_, σ_] := 1
γ4 x γ + σ2
(1 + γ) 1 +
xγ
σ
-2γ
x2 γ2 (1 + γ) 1 + 2 γ + x γ + σ Log1 +
xγ
σ
 - 2 x γ 1 + 2 γ + (1 + γ) x γ + σ Log1 +
xγ
σ

In[41]:= N[sigmaMLE[1, 5, 1]]
Out[41]= 0.151181
In[47]:= γ =.
In[48]:= σ =.
In[45]:= N[Inverse[Fish]]
Out[45]= {{6.76, - 5.98}, {- 5.98, 27.508}}
In[51]:= Limitsigma[x, γ, σ] / sigmaMLE[x, γ, σ], x → 0, Assumptions → {γ > 0, γ < 1, σ > 0}
Out[51]=
2 - 423 + 944 γ - 843 γ2 + 374 γ3 - 84 γ4 + 8 γ5
3 (- 3 + γ)2 (1 + γ) - 3 + 2 γ3
covariance_formulae.nb 5

In[53]:= Plot
2 - 423 + 944 γ - 843 γ2 + 374 γ3 - 84 γ4 + 8 γ5
3 (- 3 + γ)2 (1 + γ) - 3 + 2 γ3
, {γ, 0, 1}
Out[53]=
0.2 0.4 0.6 0.8 1.0
1.1
1.2
1.3
1.4
1.5
1.6
1.7
In[54]:= Limitsigma[x, γ, σ] / sigmaMLE[x, γ, σ], x → Infinity, Assumptions → {γ > 0, γ < 1, σ > 0}
Out[54]= 
4 (- 2 + γ)4 - 639 + γ 452 + γ - 683 + 2 γ 243 - 58 γ + 4 γ2
3 3 - 2 γ3 (- 6 + γ)2 (- 3 + γ)2 (1 + γ)2
In[56]:= Plot
4 (- 2 + γ)4 - 639 + γ 452 + γ - 683 + 2 γ 243 - 58 γ + 4 γ2
3 3 - 2 γ3 (- 6 + γ)2 (- 3 + γ)2 (1 + γ)2
, {γ, 0, 1}
Out[56]=
0.2 0.4 0.6 0.8 1.0
1.1
1.2
1.3
1.4
1.5
1.6
6 covariance_formulae.nb

---

## Processing Information

- **Processing Library:** Zotero PDFWorker
- **Processing Date:** 2026-02-10T18:15:08.223Z
- **Text Length:** 54357 characters
- **Success:** Text extraction completed
- **PDF Library Used:** Zotero PDFWorker
- **Pages Processed:** 34 of 34
