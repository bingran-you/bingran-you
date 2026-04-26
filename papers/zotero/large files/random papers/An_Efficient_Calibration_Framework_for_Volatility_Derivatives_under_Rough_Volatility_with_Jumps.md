# PDF Document: Wu et al. - 2025 - An Efficient Calibration Framework for Volatility Derivatives under Rough Volatility with Jumps.pdf

**File Path:** Wu et al. - 2025 - An Efficient Calibration Framework for Volatility Derivatives under Rough Volatility with Jumps.pdf

**Processed Date:** 2026-02-10T18:17:20.902Z

**File Size:** 844.20 KB

**Total Pages:** 19

**Extracted Pages:** 19

**PDF Library:** Zotero PDFWorker

**Attachment Item ID:** 3487

**Title:** An Efficient Calibration Framework for Volatility Derivatives under Rough Volatility with Jumps

**Collection:** Large Files > Random Papers

---

## Extracted Text Content

An Efficient Calibration Framework for Volatility
Derivatives under Rough Volatility with Jumps
Keyuan Wu ∗ Tenghan Zhong † Yuxuan Ouyang ‡
2025
Abstract
We present a fast and robust calibration method for stochastic volatility models that admit Fourier-analytic transform-based pricing via characteristic functions. The design is structure-preserving: we keep the original pricing transform and (i) split the pricing formula into data-independent integrals and a market-dependent remainder; (ii) precompute those data-independent integrals with GPU acceleration; and (iii) approximate only the remaining, market-dependent pricing map with a small neural n-
etwork. We instantiate the workflow on a rough volatility model with tempered-stable jumps tailored to power-type volatility derivatives and calibrate it to VIX options with a global-to-local search. We verify that a pure-jump rough volatility model adequately captures the VIX dynamics, consistent with prior empirical findings, and demonstrate that our calibration method achieves high accuracy and speed.
Keywords: Rough volatility, VIX options, Volatility jumps, Option Calibration, Neural network, Cupy
∗Department of Mathematics, University of Southern California. Email: <keyuanwu@usc.edu>. †Department of Mathematics, University of Southern California. Email: <tenghanz@usc.edu>. ‡Department of Mathematics, University of Southern California. Email: <yuxuanou@usc.edu>.
1
arXiv:2510.19126v1 [q-fin.CP] 21 Oct 2025

Contents
1 Introduction 3 1.1 Literature Review . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 3
2 Mathematical Models 3 2.1 Underlying Theoretic Model Formulation . . . . . . . . . . . . . . . . . . . . . . . . . . . 3 2.2 Calibration Framework: Equation Transformations and mpmath Implementation . . . . . 5
3 Data 6 3.1 Data Description . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 6 3.2 Implied Volatility . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 6 3.3 Arbitrage Testing . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 7 3.4 VIX Activity Index . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 7
4 Calibration Methodology 9 4.1 Offline Step . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 9 4.2 Numerical validation: CuPy vs. mpmath . . . . . . . . . . . . . . . . . . . . . . . . . . . . 10 4.3 Online Step . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 11 4.4 Online Training Results . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 11 4.5 Option Calibration . . . . . . . . . . . . . . . .-
 . . . . . . . . . . . . . . . . . . . . . . . . 12 4.5.1 Global Optimization . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 12 4.5.2 Local Refinement . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 13 4.6 Times Series Analysis . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 13
5 Conclusion and Future Directions 15
A Supplementary Analyses and Details 16 A.1 Arbitrage filters and data quality . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 16 A.1.1 Parity filter outcomes . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 16 A.2 Jump-activity index β and the VIX modeling rationale . . . . . . . . . . . . . . . . . . . . 16 A.3 Economic interpretation of calibrated parameters . . . . . . . . . . . . . . . . . . . . . . . 17 A.4 Neural–network pricer: error diagnostics and remed-
ies . . . . . . . . . . . . . . . . . . . . 17 A.5 Extension: two–factor rough–jump model (Proposition 8) . . . . . . . . . . . . . . . . . . 18 A.6 Code repository . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 18
2

1 Introduction
1.1 Literature Review
Stochastic volatility modeling has evolved to capture two key empirical features of financial markets: the highly irregular (“rough”) behavior of volatility over short horizons, and the prevalence of jumps rather than smooth diffusion. Todorov and Tauchen (2011) provide compelling nonparametric evidence—using high-frequency VIX data—that volatility is best described as a pure-jump process with infinitely many small jumps and occasional large spikes. In their framework the estimated activity index -
is strictly below 2, ruling out any continuous Brownian component and demonstrating that even the smallest fluctuations are jump-driven. Gatheral et al. (2018) document that realized volatility time series exhibit a Hurst exponent well below 0.5, giving rise to the “rough volatility” paradigm in which volatility paths have very short-memory dependence reminiscent of fractional Brownian motion with Hurst around 0.1. Integrating these strands, Wang and Xia (2022) introduce a unified model that drive-
s instantaneous variance by a generalized fractional Ornstein–Uhlenbeck process (to capture roughness) alongside a tempered-stable L ́evy subordinator and an independent sinusoidal jump component (to capture infiniteactivity jumps). Thanks to this construction, the characteristic function of the 30-day average-forward variance admits a semi-closed-form expression, enabling Fourier-based pricing of a general class of powertype volatility derivatives. Empirical calibrations to VIX option data—both b-
efore and during the 2020 COVID-19 crisis—show that this pure-jump rough model fits market prices accurately across a wide range of maturities and strikes. However, the nested Volterra and L ́evy integrals in these models render direct calibration computationally intensive, prompting Ruijter and Oosterlee (2015) to adapt the Fourier-cosine expansion for efficient transform inversion, and Bennedsen et al. (2017) to propose a hybrid scheme blending Gauss–Laguerre quadrature with FFT for rough models-
. More recently, Horvath et al. (2021) demonstrated that neural-network surrogates can learn the pricing map offline and deliver implied volatilities over entire surfaces in milliseconds, effectively bypassing repeated integral evaluations. Our work builds on these advances by developing a bespoke calibration algorithm for the rough-OU jump model of Wang and Xia. Instead of relying on generic machine-learning surrogates, we exploit the semi-analytical characteristic-function formulas to pre-tabula-
te key integrals, leverage mpmath for high-precision quadrature, and then train a lightweight neural surrogate for the remaining map—thereby reducing end-to-end VIX calibration times by over an order of magnitude without sacrificing interpretability.
2 Mathematical Models
In this section, we will introduce underlying models first, then show how we transform them and implement “mpmath” to make them computable in calibration.
2.1 Underlying Theoretic Model Formulation
To model VIX, this paper starts from an instantaneous variance process, denoted as V ≡ (Vt), by assuming the following quasi-Ornstein–Uhlenbeck structure:
V◦
t =V◦
0 e−κt + V ̄ 1 − e−κt + X(h)
t , Vt = V ◦
t + ς cos Zt + 1 , t ≥ 0. (1)
where V ̄ is a universal reversion level, X is a Le ́vy subordinator, with L ́evy–Khintchine representation:
log φX1 (l) := log E eilX1 =
Z∞
0
eilz − 1 νX (dz), l ∈ R, (2)
ξ1 := E[X1] > 0 (3)
leading to the following characteristic exponent:
log φX1 (l) = a Γ(−c) (b − i l)c − bc , l ∈ R, (4)
ξ1 = a Γ(1 − c)
b 1−c . (5)
3

Expresses V as a Volterra-type stochastic integral:
Vt = V ◦
t e−κt+V ̄ 1−e−κt +
Z t0
0
h(t, s) dXs+
Zt
t0
h(t, s) dXs+ζ cos(Zt−Zt0 ) cos Zt0 −sin(Zt−Zt0 ) sin Zt0 +1
(6) where h(t, s) is the kernel, we have tried the Ornstein-Uhlenbeck type II kernel, but due to computational complexity, we use the type III piecewise kernel for our calibration to avoid incomplete Gamma, for the d ∈ (0.5, 1) type III kernel:
h(t − s) =

     
     
(t − s)d−1 − 1−d
κ
d−1
Γ(d) − κ1−d
(1 − d)2−d Γ(d − 1) , t − s < 1−d
κ,
− (e κ)1−d e−κ(t−s)
(1 − d)2−d Γ(d − 1) , t − s ≥ 1−d
κ
(7)
And the delta-forward integrated kernel we use is:
H∆(t, s) := 1
∆
Z∆
0
h t + u, s du (8)
H∆(t, s) = H∆(t − s) =

        
        
(t − s + ∆)d − (t − s)d
∆ Γ(d + 1) , t − s + ∆ < 1−d
κ,
1−d κ
d − (t − s)d
∆ Γ(d + 1) + e−κ(t−s+∆)+1−d − 1
κd ∆ (1 − d)2−d Γ(d − 1) , t − s < 1−d
κ ≤ t − s + ∆,
− e−κ(t−s+∆)+1−d eκ∆ − 1
κd ∆ (1 − d)2−d Γ(d − 1) , t − s ≥ 1−d
κ.
(9) Then based on instantaneous variance, we express forward variance curve structure as:
Vet(u) := E Vt+u | Ft , u > 0, t ≥ 0. (10)
With stochastic representation:
Vet(u) = Ve ◦
t (u) + Ut(u), u > 0, t ≥ 0. (11)
where forward variance rising from the generalized fractional Ornstein–Uhlenbeck process V 0 is:
Ve ◦
t (u) = V ◦
0 e−κ(t+u) + V ̄ 1 − e−κ(t+u) +
Zt
0
h t + u, s dXs + ξ1
Z t+u
t
h t + u, s ds (12)
and Ut(u) = ς E[cos Zu] cos Zt − E[sin Zu] sin Zt + 1 . (13)
comes from the composite-sinusoidal L ́evy process.
Then, we can get average-forward volatility process, which is square root of the delta-running average of the forward variance process:
It(∆) :=
s
1 ∆
Z∆
0
Vet(u) du , t ≥ 0. (14)
by Fubini-Tonelli theorem:
I2
t (∆) := 1
∆
Z∆
0
Vet(u) du
=V◦
0
e−κt − e−κ(t+∆)
κ ∆ + V ̄ 1 − e−κt − e−κ(t+∆)
κ ∆ + X(H∆)
t + ξ1 Y∆(t)
+ς
∆
Z∆
0
E[cos Zu] du cos Zt −
Z∆
0
E[sin Zu] du sin Zt + ∆
(15)
4

At this point, based on Rough-OU Volterra driven by tempered-stable subordinator, we have all the necessary tools to give an integral formula for the conditional characteristic function of the averageforward variance:
φI 2
t (∆)|t0 (l) := E ei l I2
t (∆) | Ft0
=1
π exp
n
i l J(t, t0, ∆) +
Zt
t0
log φX1 l H∆(t, s) ds
o
×
Z
R
ψ l, x; t0, ∆
Z∞
0
R e−i l x φ t−t0
Z1 (l) dl dx, l ∈ R.
(16)
Finally, we use equation (24) to price call options and calibrate based on the optimization of equation (34)
2.2 Calibration Framework: Equation Transformations and mpmath Implementation
In the conditional characteristic function, we set ζ = 0.01, and:
ψ l, x; t0, ∆ := exp i l ζ
∆R
h φ∆
Z1 (1) − 1
log φZ1 (1)
i
cos x cos Zt0 −sin x sin Zt0 −I
h φ∆
Z1 (1) − 1
log φZ1 (1)
i
sin x cos Zt0 +cos x sin Zt0 +∆
!!
.
(17) and J is kernel-modulated forward variance quantity which contains all information about spot prices:
J(t, t0, ∆) := 1
∆
Z t−t0+∆
t−t0
Ve ◦
t0 (u) du − ξ1
Zt
t0
H∆(t, s) ds > 0. (18)
Then as we cannot compute V in the offline step, we employ an expansion argument to transform J into a linear combination of square spot price to avoid all V :
J (t, t0, ∆) = I2
t0 (∆) − ξ1
Zt
t0
H∆(t, s) ds + r(t0, t) . (19)
Now we have everything computable:
ΦI 2
t (∆)|t0 (l) = 1
π exp
(
il
h
I2
t0 (∆) − ξ1
Zt
t0
H∆(t, s) ds + r(t0, t)
i
+
Zt
t0
log φX1 l H∆(t, s) ds
)
×
Z
R
ψ l, x; t0, ∆
Z∞
0
R e−i x l φ t−t0
Z1 (l) dl dx, l ∈ R.
(20)
where Z is symmetric 1.715 - stable auxiliary L ́evy process, and the value of α is updated and we will illustrate in section 3:
φZ1 (l) = e−|l|α , α ≈ 1.715. (21)
Then, we mainly implement ’mpmath’ to numerically compute equations and simulate integrations because of its arbitrary-precision arithmetic, adaptive numerical integration for both real and complex integrands (mpmath.quad) and implementations of incomplete Gamma functions. To numerically compute infinite integral, we set different limits for different functions to accelerate
calibration, in the integral:
Z∞
0
R e−i l x φ t−t0
Z1 (l) dl (22)
We set the upper limit to 30 because of the exponential term of φ t−t0
Z1 converges quickly. For the double integral,
Z
R
ψ l, x; t0, ∆
Z∞
0
R e−i x l φ t−t0
Z1 (l) dl dx (23)
We set the lower limit to -30 and the upper limit to 30 due to sin and cos term of ψ l, x; t0, ∆ converges quickly. And set all other limits of infinite integrals from -10000 to 10000 via Simpson’s rule .
5

Then, after computing the conditional characteristic function, we model asymmetric power-type options with:
P (1,1,(a))
0 =K
2− 1
π
Z∞
0
R
"
K e−iK2l +
√π/2 − Γ 3
2 , iK2l
√i l
ΦI 2
t (∆)|t0 (l)
il
#
dl. (24)
Incomplete Gamma functions and complex numbers in this equation are numerically inefficient to compute and are the main reasons for us to use mpmath.
3 Data
3.1 Data Description
We evaluate the model’s performance by calibrating on real VIX index data. These data were collected from the Bloomberg terminal. We use VIX option quotes from a single trading day, January 2, 2025—the first trading day of the new year following the presidential election. The dataset comprises 96 observations of VIX put options at four maturities, T ∈ {20, 48, 100, 258} days. The spot price is I = 0.1793, and strikes range from K = 0.09 to 0.28. A summary appears in Table 1.
Table 1: Summary of original VIX put-option data.
Column Non-Null Rows
Strike 96 IVM call 96 Volm call 96 TTM year 96 mid price call 96 IVM Put 96 Volm Put 96 mid price put 96 spot price 96 Bid 96 Ask 96 Bid Put 96 Ask Put 96
3.2 Implied Volatility
Although implied volatility is not a direct input parameter, it still guides our parameter intuition. Figure 1 shows Figure 2 shows how the implied volatility of put option changes over strike price K under different time to maturity T .
Figure 1: Implied volatility of VIX put options versus strike price for different maturities.
6

It shows that shorter T yield steeper smiles (more jump risk in the short term), while the long-term curve is uneven—suggesting data noise or low liquidity.
3.3 Arbitrage Testing
The option pricing model is based on the assumption of risk-neutral condition, so we conduct 2 data cleaning method to remove the arbitrage prices:
Monotonicity Test For European VIX put options, price must be non-decreasing in the strike:
Ki ≤ Ki+1 =⇒ P (Ki) ≤ P (Ki+1). (25)
Convexity Test To avoid butterfly arbitrage, for each triple (Ki−1, Ki, Ki+1) we check
P (Ki) ≤ Ki+1 − Ki
Ki+1 − Ki−1
P (Ki−1) + Ki − Ki−1
Ki+1 − Ki−1
P (Ki+1). (26)
If P (Ki) exceeds this interpolated value, we record a convexity violation (butterfly arbitrage).We drop any observations failing these two tests (see Appendix ??). After filtering, we will apply the remaining 35 pairs of observations to the calibration.
3.4 VIX Activity Index
In the previous section, the modeling of average-forward volatility is based on the assumption that the VIX index is a pure jump process. According to Todorov and Tauchen (2011), we validate this assumption by calculating the volatility activity index β. β generalizes the classical Blumenthal–Getoor index the Blumenthal–Getoor index (Blumenthal and Getoor, 1961) to arbitrary semimartingales and quantifies the pathwise “vibrancy” of a stochastic process. According to Todorov and Tauchen (2011), hig-
her values of β reflect more frequent or finer-scale fluctuations. Their empirical analysis reveals that the volatility process lacks a Brownian diffusion component but exhibits intense jump activity, with β approaching 2—indicative of behavior close to that of a continuous martingale. This dynamic, characterized by numerous small jumps and occasional large ones, aligns with a Le ́vy-type pure-jump process of infinite variation. Accordingly, when β ∈ [1, 2),the estimated beta is best characterized-
 as a pure-jump process of infinite variation. Such result can be verified by the underlying calculation process
Power Variation
Vt(X, p, ∆n) =



P[ 1
∆n ]
i=1 |∆Xi|p · I(|∆Xi| ≤ L), if p < 2 P[ 1
∆n ]
i=1 |∆Xi|p, if p ≥ 2
(27)
Activity Signature Function
bX,t(p) = ln 2 · p
ln 2 + ln Vt(X, p, 2∆n) − ln Vt(X, p, ∆n) (28)
Components:
• Vt(X, p, ∆n): Power variation at base frequency
• Vt(X, p, 2∆n): Power variation at doubled frequency
Activity Index Estimation
βˆ = solution to b(p) = p (29)
Estimation Method:
• Numerically solve b(p) − p = 0 using Brent’s method
7

• Fallback: Select p that minimizes |b(p) − p| if no root found
This approach estimates β by analyzing how quickly power variations decay across sampling intervals. A high decay rate suggests high small-jump activity. The value of β that makes b(p) = p reflects the true activity level of the process. If β < 2, a Brownian component is ruled out; if β > 1, low-activity or finite variation models are excluded.
Table 2: Summary of Parameters and Variables
Code Variable Symbol Meaning Default/Range
X Xt VIX time series 1-minute frequency L L Truncation threshold 0.5 (VIX units) Delta ∆n Base sampling interval 1 minute p p Power parameter Scan 0.05–1.95 dX1 ∆Xi 1-min increments
dX2 ∆X(2)
i 2-min increments
As presented in Table 2, the data we use is the high-frequency VIX data Xt on January 2nd, 2025, with frequency ∆n = 1 min. Parameter L is used as a truncation threshold to filter extreme jump observations. As shown in Table 3, after inputting different L, we find that the estimate of β becomes stable at 1.715 as L increases.
Table 3: Truncation analysis (l = 0.5) and activity index summary.
Absolute 1-min increment statistics
Median 0.0200 95th percentile 0.1400 Maximum 0.3200
Truncated share (|∆X| > 0.5) 0.00%
Activity Index Result
Estimated β 1.715 Method Root-finding
Sensitivity to L (for β ≈ 1.7–1.8 target)
L = 0.2 trunc = 1.7% L = 0.3 trunc = 0.3% L = 0.4 trunc = 0.0% L = 0.5 trunc = 0.0%
L denotes the truncation threshold (filters extreme jumps). ∆ denotes the base sampling interval.
Hence, when Todorov and Tauchen empirically estimate β ∈ (1.7, 1.8) for the VIX index, they conclude that the volatility process is a pure-jump process of infinite variation. Combining this with our result βˆ = 1.715, we conclude that the VIX index on January 2, 2025, satisfies the pure-jump model assumption.
In Equation (4) of the previous section, the parameter c controls the degree of jump activity in the L ́evy subordinator. For parameter c in Equation (21), it represents fractional dynamics of volatility, which controls the memory and regularity of the volatility process. The instantaneous variance is driven by a generalized fractional Ornstein–Uhlenbeck (OU) process, which has infinite activity but finite variation. Therefore, c should be between 0 and 1. Since c controls the process type in simi-
lar way of β and the example raised in Wang and Xia(2022) that c=1/2 yields exactly inverse Gaussian-driven OU process, which in Todorov and Tauchen (2011) should be classified as β near 1. So in our research, for simplicity, we just set c=βˆ/2 in our following calibration.
8

4 Calibration Methodology
In this section, we explain how we accelerate the process of option calibration. First, we generate a large synthetic dataset of option prices using the analytical model with randomly sampled parameters. Next, we train a feedforward neural network to learn the mapping from model parameters to option prices. Finally, we apply this trained network in a two-stage calibration workflow: a global search via a Genetic Algorithm, followed by a local refinement using L-BFGS-B, enabling fast and accurate pa-
rameter estimation on real market data.
4.1 Offline Step
In the offline stage, we construct a high-quality training dataset by simulating option prices from an analytical pricing model implemented with high-precision numerical libraries (e.g., mpmath). The input model parameters are sampled from predefined, economically reasonable ranges using the Latin Hypercube Sampling (LHS) technique. The overall process is as follows:
1. Parameter Sampling: Use Latin Hypercube Sampling to draw parameter vectors {θi}N
i=1 from the joint distribution defined by the chosen bounds.
2. Price Simulation: For each sampled θi, compute the corresponding option price Pi via the analytical pricing function, ensuring high numerical accuracy with mpmath.
3. Dataset Assembly: Aggregate the input–output pairs {(θi, Pi)}N
i=1 into the training set Dtrain.
Figure 2: Latin Hypercube Sampling
To construct the offline dataset for training our neural network, we simulate put option prices under the Proposition-2 analytical pricing framework. This involves evaluating the characteristic function using high-precision quadrature implemented with CuPy and mpmath.
We consider a seven-dimensional parameter space:
θ = (a, b, c, d, κ, r, t) (30)
where (a, b, c, d, κ, r) are model parameters and t denotes time-to-maturity ratio (i.e., Time to maturity / 365). Each parameter is sampled within mathematically meaningful ranges. Then we employ Latin Hypercube Sampling (LHS) with N = 5,000 samples to ensure efficient and stratified coverage across the high-dimensional space. Compared to simple random sampling, LHS offers better uniformity and variance reduction in function evaluations.
For each sampled parameter set, we compute option prices under four distinct maturities:
T ∈ 258
365 , 100
365 , 48
365 , 20
365 (31)
9

Parameter Value / Range
a [0, 5]
b [0, 5]
c 0.8575
d [0.5, 0.999]
κ [0, 10]
r [−0.25, 0.25]
Table 4: Parameter values and ranges used in the offline simulation.
which represent realistic short- to medium-term contracts.
The pricing is evaluated across a discrete set of strike prices Kj ∈ K, where
K = {0.09, 0.10, . . . , 0.28} (32)
totaling 34 strikes, selected to span both in-the-money and out-of-the-money regimes.
For each tuple, the put option price is computed. The entire pricing loop is parallelized using Python’s multiprocessing Pool.The resulting dataset consists of N = 5,000 parameter sets × 4 maturities × 34 strikes = 680,000 rows, stored in efficient columnar format (Parquet) for downstream neural network training.
4.2 Numerical validation: CuPy vs. mpmath
Before generating the offline dataset, we verify that the CUDA/CuPy implementation of the characteristic–function integrals matches a high–precision mpmath baseline. On a grid of 600,000 evaluations across (θ, T, K, nodes), only 42 points exceed a 10−5 absolute–error tolerance; the bulk errors concentrate near machine precision (Fig. 3).
Table 5: CuPy vs. mpmath (baseline) — summary metrics over 600,000 evaluations.
Metric Value
Max |∆φ| 6.577e−03 Mean |∆φ| 3.954e−06 Max relative error 5.942e+01 Mean relative error 3.153e−01 Rows out of tol. (10−5) 42 (of 600,000)
Figure 3: Histogram of log10 |∆φ| (CuPy − mpmath). Most mass lies near −30, i.e., machine-precision agreement; the few outliers occur at extreme quadrature points.
10

4.3 Online Step
In the online stage, we train a feedforward neural network (FNN) to approximate the mapping from model parameters and option features to the corresponding put option price. Specifically, the neural network learns a function:
f (a, b, c, d, κ, r, t, K) → Option price (33)
Neural Network Architecture:
• Input Layer: 8 nodes, corresponding to the model parameters a, b, c, d, κ, r, time-to-maturity t, and strike price K.
• Hidden Layers: 3 fully connected layers with ELU (Exponential Linear Unit) activation:
– Layer 1: 64 neurons
– Layer 2: 32 neurons
– Layer 3: 32 neurons
• Output Layer: 1 neuron, representing the predicted put option price.
Figure 4: Structure of Neural Network
This architecture was implemented in PyTorch. Before training, the input and output features are standardized using StandardScaler. The dataset is stratified and split into training (90%), validation (5%), and testing (5%) sets based on the (·) combination. The model is trained to minimize the mean squared error (MSE) loss using the Adam optimizer. To enhance convergence and generalization, we apply:
• Early Stopping: Training is terminated if the validation loss does not improve for 25 consecutive epochs.
• Learning Rate Scheduler: We apply ReduceLROnPlateau, which reduces the learning rate by a factor of 0.5 when the validation loss plateaus, with a minimum learning rate threshold.
4.4 Online Training Results
Figure 6 shows the training and validation RMSE curves over epochs, where we observe convergence and stabilization. The best-performing epoch is marked in red.
11

Figure 5: Training and Validation RMSE Curves
The model’s predictions on a held-out test set (100 randomly selected samples) are shown in Figure 6, demonstrating strong generalization capability, with predicted values closely matching the true option prices.
Figure 6: Neural network predictions vs. true option prices on the test set
4.5 Option Calibration
To find the underlying model parameters from observed market option prices, we adopt a two-stage calibration procedure combining global and local optimization techniques.
Given that the pricing model includes a term structure of interest rates, we allow for four different ri (1 ≤ i ≤ 4) to correspond with the four maturities T ∈ {258, 100, 48, 20}.
For each sample in the panel dataset on Jan 2nd, the appropriate ri is assigned based on the nearest maturity, and the corresponding model parameters (a, b, c, d, κ, ri) are mapped accordingly. This forms the full input set for calibration.
a, b, c, d, κ, {r(Tn)}4
n=1 = arg min
a>0, b>0, c=0.8575, d∈(0.5,1), κ>0, r(Tn)∈[−0.25,0.25] n∈{1,2,3,4}, α=1.78, ζ=0.01
X
n
(Market Prices) − (C, P )(1,1,(a))
0
2
(34)
4.5.1 Global Optimization
We first apply the Genetic Algorithm (GA) to perform a global search over the parameter space. The objective is to minimize the mean squared error (MSE) between market-observed option prices and model-implied prices generated by a pretrained neural network surrogate.
The GA is implemented using the PyGAD library, with a population size of 600 and a maximum of 3000 generations. The fitness function is defined as the negative MSE between the neural network’s predicted option prices and the observed market prices, ensuring compatibility with PyGAD’s maximization framework.
12

4.5.2 Local Refinement
The best solution identified by the genetic algorithm is used as the starting point for local refinement via the L-BFGS-B algorithm. This second-stage optimization employs the same loss function to finetune the parameter vector with high precision, ensuring convergence to a local minimum. The optimizer is constrained to the same parameter bounds to ensure economic plausibility.
By combining them in a two-stage calibration strategy, we exploit GA’s global exploration ability to provide a robust initial guess, followed by L-BFGS-B’s fast local convergence to refine the solution. This hybrid approach is particularly effective in high-dimensional calibration settings, where the loss surface may exhibit multiple local minima, and the gradients may be unreliable or hard to compute analytically due to surrogate models (e.g., neural networks). It ensures both robustness and prec-
ision, leading to more stable and interpretable parameter fitting.
Calibration results are shown below:
Figure 7: Calibration curve
Parameter Value Parameter Value
a 0.049762 r1 (20 d) 0.00198 b 0.849782 r2 (48 d) -0.001292 c 0.8575 r3 (100 d) -0.006008 d 0.769302 r4 (258 d) -0.012427 κ 7.798968 — 
Table 6: Calibrated Parameters and Term Structure of Interest Rates
4.6 Times Series Analysis
In this section, we conduct a time series analysis using a near-the-money VIX put option with a given strike and expiration on February 19, 2025. For each of the next 31 trading days, we record the option market mid-quote and value the contract using the GPU-parallel pricer introduced earlier.
The pricing engine relies on a fixed parameter vector that was calibrated using market data from January 2, 2025.
13

Figure 8: VIX Put Option Pricing Over Time: Market vs. Model
The figure above compares the model estimates (orange) with the observed market prices (blue). The model exhibits a persistent upward bias, although it captures the general trend of the market data.
Quantitatively, the prediction errors are summarized below:
Metric Value
Mean Absolute Error (MAE) 0.0329 Root Mean Squared Error (RMSE) 0.0330 Mean Absolute Percentage Error (MAPE) 86.96%
Table 7: Error metrics for model-predicted VIX put option prices
Although the absolute mispricing is only about 0.03, the market prices lie in the $0.03–$0.04 range, causing the relative error to swell to nearly 87%. This distortion is mainly due to the calibration snapshot: on that day, many quoted strikes violated basic arbitrage bounds and exhibited extremely low trading volume, making the calibrated surface strongly fragile.
14

5 Conclusion and Future Directions
Conclusion
This study introduces a GPU-powered, neural-network–assisted calibration pipeline for powertype derivatives under rough-volatility dynamics with jumps. Our main contributions are:
1. GPU-accelerated pricing with CuPy. High-precision quadrature executed on the GPU reduces a single price evaluation from seconds to milliseconds, enabling the generation of large synthetic datasets.
2. NN-based two-stage calibration. A feed-forward surrogate trained on N = 5,000 Latin-Hypercube samples accurately replicates the analytical pricer, achieving a validation RMSE of 3.1 × 10−4. This neural network enables a much faster calibration process: combined with a Genetic Algorithm for global search and L-BFGS-B for local refinement, it recovers model parameters from real VIX-put quotes in under 20 minutes.
By contrast, the original calibration pipeline based on direct evaluation via mpmath quadrature required over 24 hours, even with significantly reduced population sizes and iteration counts. The speed-up from using the neural network surrogate allows for larger population sizes and more generations in the GA stage, facilitating better convergence and more accurate parameter recovery.
3. Empirical validation. Parameters calibrated on 2 Jan 2025 reproduce a 31-day price path with MAE = 0.0329 and RMSE = 0.0330. Although the model slightly over-prices low-premium contracts—pushing MAPE ≈ 87%—it captures the overall trend and demonstrates strong out-of-sample robustness.
Limitation and Future Directions
1. At present, the calibration pools all maturities. A worthwhile extension is to group the data by time-to-maturity and calibrate each maturity slice independently.
2. We fail to filter the data using rough arbitrage checking method of put-call parity. Referring to Madan et al. (2019), we applied:
bidEC(K, T ) − askEP(K, T ) ≤ S0 − K ≤ askEC(K, T ) − bidEP(K, T ) (35)
• bidEC(K, T ) is the bid price of a European call option with strike K and maturity T .
• askEC(K, T ) is the ask price of the European call option with the same strike and maturity.
• bidEP(K, T ) is the bid price of the corresponding European put option.
• askEP(K, T ) is the ask price of the European put option.
This inequality reflects the no-arbitrage bounds for the call–put parity relationship in the presence of bid–ask spreads. If violated, it may signal a potential arbitrage opportunity. However, all of the observation pairs are not in this range. The results can be seen in Appendix A.1.1. The possible causes of such a situation can be: Insufficient Liquidity, Stale Quotes, or Spot Price Mismatch.
15

A Supplementary Analyses and Details
A.1 Arbitrage filters and data quality
Call–put parity test (summary). As discussed in Section 5 (Conclusion & Future Directions; limitation #2), our call–put parity screen flagged systematic inconsistencies between quoted calls, puts, and the contemporaneous spot/discount inputs. The detailed outcomes and diagnostics are consolidated here for archival completeness.
Finding. No observation in the raw panel passes the parity check; all rows exhibit nonzero parity gaps of economically meaningful size.
Likely drivers include: (i) insufficient liquidity (wide, non-synchronous quotes), (ii) stale prints in the vendor feed, and (iii) spot/forward misalignment (timing mismatch between options and spot/carry inputs). For reproducibility, we keep this section as a reference point for downstream filtering.
A.1.1 Parity filter outcomes
For each maturity–strike tuple we compute the standard forward-adjusted parity residual and retain rows with residuals inside a one-tick band. In our dataset, no row meets this criterion. Consequently, we proceed with structural no-arbitrage screens that are more robust to microstructure noise.
Monotonicity and convexity screens (Section 3.3). We enforce (i) decreasing price in strike and (ii) convexity in strike for each maturity slice. These shape constraints eliminate obvious data glitches while tolerating small bid/ask frictions. After applying these two filters, 35 observations remain; all subsequent calibrations in the paper use precisely this filtered subset.
A.2 Jump-activity index β and the VIX modeling rationale
Method (Section 3.4). Following Todorov and Tauchen (2011), we estimate the activity index β from 1-minute VIX increments using power variations and truncation. This identifies whether the driving semimartingale possesses a continuous Brownian component and whether its jumps are of finite or infinite variation.
Empirical findings. Our estimate from the VIX panel is
βˆ = 1.715.
This implies:
1. Absence of a Brownian component. Since βˆ < 2, we reject a continuous diffusion term in VIX dynamics.
2. Infinite-variation jumps. Because βˆ > 1, the jump component exhibits infinite variation, driven by a high intensity of small jumps.
The pure-jump infinite-variation interpretation matches the guidance in Todorov and Tauchen (2011), which anticipates β close to but strictly below 2 (empirically ≈ 1.7–1.8).
Link to the model’s stability index. In the main text (see Equation (21)), the stability index α of the pure-jump L ́evy driver is the same conceptual object as the activity index β. Prior work (e.g., Wang and Xia (2022)) fixes α = 1.78; our data-driven estimate βˆ = 1.715 is consistent with that regime and supports modeling VIX as a pure-jump, infinite-activity, infinite-variation process.
16

A.3 Economic interpretation of calibrated parameters
Symbol Model detail Economic interpretation
a > 0 νX (dz) = a e−bzz−1−c1{z>0}dz, log φX1 (u) = a
c Γ(−c)[(b − iu)c − bc] Baseline intensity of the tempered-stable subordinator X; scales the overall frequency of variance jumps across sizes. b > 0 Tempering parameter in e−bz and (b − iu)c. Controls the exponential tail decay of jump sizes in X; larger b suppresses very large volatility shocks (lower tail risk). c ∈ (0, 1) Power-law weight z−1−c in νX and exponent in (b − iu)c. Jump-activity index of the L ́evy subordinator; governs the intensity of small jumps (higher c ⇒ thicker small-jump clo-
ud). d ∈ (0.5, 1) Kernel g(t − s) = (t − s)d−1/Γ(d). Roughness of volatility paths with Hurst H = d − 1
2 < 0.5.
κ > 0 Exponential temper e−κt in the kernel h(t, s). Speed of mean-reversion in volatility. {r(Tn)} Remainder in J(t, t0, ∆) = I2
t0 (∆) − ξt
1
Rt
t0 H∆(t, s) ds + r(t0, t). Maturity-specific level shifts tied
to spot variance at t0; captures residual term-structure offsets.
Table 8: Economic interpretations of key calibrated parameters.
A.4 Neural–network pricer: error diagnostics and remedies
Table 9: Error diagnostics under unified–dollar target standardisation.
Metric Value Comment
Target s.d. σy 7.69 × 10−2 Standard deviation after scaling
Train abs–RMSE 1.06 × 10−3 Error on training set
Test abs–RMSE 1.10 × 10−3 Error on hold-out test set
Val rel–RMSE (%) 6.36 × 103 Pathologically inflated
Val MAPE (%) 3.80 × 102 Large percentage bias
Relative–error pathology. Absolute errors are uniformly small (∼ 10−3), but percentage metrics explode because many OTM options have pennies-level premiums. A $0.01 miss on a $0.02 option is a 50% relative error; aggregating many such cases dominates rel–RMSE/MAPE.
Remedies. We recommend two practical fixes:
1. Inverse–premium reweighting. Replace plain MSE by
Lw = 1
N
N
X
i=1
wi (yˆi − yi)2, wi = (yi + ε)−α, α ∈ [0, 1], (36)
with ε set to one tick. This upweights low-premium OTM contracts without letting the loss blow up. A robust starting choice is α = 0.5; tune on a log grid.
2. Log–price target. Transform premiums via
zi = log yi + ε , Llog = 1
N
N
X
i=1
zˆi − zi
2, (37)
which compresses the dynamic range and stabilises training across ITM/OTM regimes.
17

A.5 Extension: two–factor rough–jump model (Proposition 8)
Concept. Motivated by evidence that volatility-of-volatility can itself be rough Da Fonseca and Zhang (2019), augment the baseline (rough–jump) factor with an independent L ́evy-driven mean-reverting process Yt (kernel η) that modulates the average forward variance. Structurally this mirrors two–factor Heston: one factor for volatility, another for its variability. Pricing remains tractable through characteristic functions, at the cost of deeper numerics.
Computation. Evaluating the Proposition 8 characteristic function is currently the bottleneck: (i) nested quadratures, (ii) repeated evaluations of log φY1 (·) inside the integrand, and (iii) accumulation of discretisation error. Even with CuPy/GPU parallelism, wall-clock is prohibitive for full calibration. A complete empirical study is therefore deferred.
A.6 Code repository
The full implementation for offline data generation, neural network training, and two–stage option calibration is publicly available:
https://github.com/TenghanZhong/GPU-NN-Option-Calibration
18

References
Todorov, V. and Tauchen, G. Volatility jumps. Journal of Business & Economic Statistics, 29(3): 356371, 2011.
Gatheral, J., Jaisson, T., and Rosenbaum, M. Volatility is rough. Quantitative Finance, 18(6): 933–949, 2018.
Wang, L. and Xia, W. Power-type derivatives for rough volatility with jumps. Journal of Futures Markets, 42(10): 1369–1406, 2022.
Ruijter, M. J. and Oosterlee, C. W. The Fourier-cosine method for option pricing revisited. SIAM Journal on Financial Mathematics, 6(1): 189–210, 2015.
Bennedsen, M., Friz, P., and Rosenbaum, M. Hybrid schemes for Brownian semistationary processes. Finance and Stochastics, 21(4): 931–965, 2017.
Horvath, B., Muguruza, A., and Tomas, M. Deep learning volatility: a deep neural network perspective on pricing and calibration in (rough) volatility models. Quantitative Finance, 21(1): 11–27, 2021.
Blumenthal, R. and Getoor, R. Sample functions of stochastic processes with independent increments. Journal of Mathematics and Mechanics, 10: 493–516, 1961.
Madan, D. B., Reyners, S., and Schoutens, W. Advanced model calibration on bitcoin options. Digital Finance, 1: 117–137, 2019. doi:10.1007/s42521-019-00002-1.
McKay, M. D., Beckman, R. J., and Conover, W. J. A comparison of three methods for selecting values of input variables in the analysis of output from a computer code. Technometrics, 21(2): 239–245, 1979.
Goldberg, D. E. Genetic Algorithms in Search, Optimization, and Learning. Addison-Wesley, 1989.
Zhu, C., Byrd, R. H., Lu, P., and Nocedal, J. Algorithm 778: L-BFGS-B: Fortran subroutines for largescale bound-constrained optimization. ACM Transactions on Mathematical Software, 23(4): 550–560, 1997.
Da Fonseca, J. and Zhang, W. Volatility of volatility is (also) rough. Journal of Futures Markets, 39(5): 600–611, 2019.
19

---

## Processing Information

- **Processing Library:** Zotero PDFWorker
- **Processing Date:** 2026-02-10T18:17:20.902Z
- **Text Length:** 38745 characters
- **Success:** Text extraction completed
- **PDF Library Used:** Zotero PDFWorker
- **Pages Processed:** 19 of 19
