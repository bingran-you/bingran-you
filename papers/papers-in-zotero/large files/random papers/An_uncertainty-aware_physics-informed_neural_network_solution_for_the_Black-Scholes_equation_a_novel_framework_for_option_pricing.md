# PDF Document: Kazemian et al. - 2025 - An uncertainty-aware physics-informed neural network solution for the Black-Scholes equation a nove.pdf

**File Path:** Kazemian et al. - 2025 - An uncertainty-aware physics-informed neural network solution for the Black-Scholes equation a nove.pdf

**Processed Date:** 2026-02-10T18:15:43.679Z

**File Size:** 1754.49 KB

**Total Pages:** 11

**Extracted Pages:** 11

**PDF Library:** Zotero PDFWorker

**Attachment Item ID:** 3596

**Title:** An uncertainty-aware physics-informed neural network solution for the Black-Scholes equation: a novel framework for option pricing

**Collection:** Large Files > Random Papers

---

## Extracted Text Content

AN UNCERTAINTY-AWARE PHYSICS-INFORMED NEURAL
NETWORK SOLUTION FOR THE BLACK–SCHOLES EQUATION: A
NOVEL FRAMEWORK FOR OPTION PRICING
A PREPRINT
Sina Kazemian*1, Ghazal Farhani*2, Amirhessam Yazdi3
1Department of Physics and Astronomy, University of Waterloo, Western University 2 National Research Council Canada, London Ontario 3 University of Nevada, Reno
April, 2025
ABSTRACT
We present an uncertainty-aware, physics-informed neural network (PINN) for option pricing that solves the Black–Scholes (BS) partial differential equation (PDE) as a mesh-free, global surrogate over (S, t). The model embeds the BS operator and boundary/terminal conditions in a residualbased objective and requires no labeled prices. For American options, we handle early exercise via an obstacle-style relaxation while retaining the BS residual in the continuation region. To quantify epistemic uncer-
tainty, we introduce an anchored-ensemble fine-tuning stage (AT–PINN) that regularizes each model toward a sampled anchor, producing prediction bands alongside point estimates.
On European calls/puts, the approach achieves low errors (e.g., MAE ∼ 5×10−2, RMSE ∼ 7×10−2, explained variance ≈ 0.999 in representative settings) and tracks ground truth closely across strikes and maturities. For American puts, the method remains accurate (MAE/RMSE on the order of 10−1 with EV ≈ 0.999) and avoids the error accumulation typical of time-marching schemes. Against datadriven baselines (ANN, RNN) and a Kolmogorov–Arnold FINN variant (KAN), our PINN matches or outperforms on accuracy -
while training more stably; anchored ensembles provide uncertainty bands that align with observed error scales. We discuss design choices (loss balancing, sampling near the payoff kink), limitations, and extensions to higher-dimensional BS settings and alternative dynamics.
1 Introduction
Option pricing is a central topic in financial mathematics, essential for hedging risk and determining the fair value of derivative instruments. Over the years, several models have been developed, including the Binomial Option Pricing Model [1, 2, 3], Monte Carlo simulation methods [4, 5], the Heston Model [6, 7, 8], and Merton’s Jump-Diffusion Model [9, 10, 11]. Among these, the Black–Scholes (BS) formula [12] remains the most widely adopted and has become the cornerstone of option pricing [3, 13-
, 14]. Its enduring influence stems from analytical tractability, computational efficiency, and ease of implementation, particularly for European-style options.
Despite its effectiveness, the BS model is constrained by its simplifying assumptions and its classical closed-form solutions. It does not naturally accommodate early exercise, path dependence, or various market frictions and nonlinearities (e.g., transaction costs, stochastic volatility, and jumps). American options, for example, allow the holder to exercise at any time before expiration, a feature that significantly increases modeling complexity. To handle
*First two authors contributed equally to this paper 1skazemi5@uwo.ca 2ghazal.farhani@nrc-cnrc.gc.ca 3ayazdi@unr.edu
arXiv:2511.05519v1 [q-fin.CP] 27 Oct 2025

PINN’s as an Alternative to the BS Model A PREPRINT
such cases, numerical methods such as binomial trees and finite-difference schemes are widely used[15, 16, 17], but they often face challenges related to convergence, stability, and computational cost [18, 19, 20]. In addition, for American-style features in high dimensions, Monte Carlo methods with regression—most notably the Least-Squares Monte Carlo (LSMC) approach of Longstaff and Schwartz—are widely used [21].
To address these limitations, Physics-Informed Neural Networks (PINNs) [22, 23, 24, 25, 26, 27, 28] have emerged as a promising alternative. By embedding governing equations directly into the training objective, PINNs enforce consistency with financial PDE structure through residual and boundary/terminal penalties while leveraging the flexibility of deep neural networks. This hybrid formulation can improve data efficiency and deliver accurate surrogates in settings where closed-form solutions are -
unavailable or meshing is cumbersome (e.g., irregular domains, parameter sweeps, or higher dimensions). PINNs naturally extend to nonlinear PDEs, can reduce computational effort in high-dimensional problems, and adapt to diverse financial instruments through customizable architectures and optimization strategies. Beyond finance, physics-driven modeling across domains demonstrates the value of respecting governing operators in predictive modeling (e.g., PDE and integro–differential formulations in -
materials and condensed matter) [29, 30, 31]. This perspective motivates embedding the BS operator within a learning framework.
However, a critical challenge with deep learning models, including PINNs, is their tendency toward overconfidence in predictions [32, 33, 34, 35]. Conventional evaluation metrics such as root mean squared error or accuracy do not capture the reliability of outputs. In high-stakes domains like finance, quantifying predictive confidence is as important as accuracy itself. This requires to distinguish epistemic uncertainty (from limited data or model misspecification) from aleatoric uncertainty (inhe-
rent noise) [36]. Bayesian neural networks provide a principled solution by treating parameters as probability distributions [37, 38], but their practical use in large-scale networks is computationally prohibitive. Consequently, approximate methods, including ensembling, Monte Carlo dropout, and anchored ensembling, have gained traction [35, 39, 40]. Anchored ensembling is especially noteworthy as it leverages MAP estimation. Although MAP has been extensively applied in inverse problems [41, 42, 4-
3], its adoption in machine learning frameworks has been more limited.
Building on these ideas, our study develops a PINN framework for pricing European and American options, benchmarked against the BS formula. The PINN incorporates the BS PDE directly into its loss function, enabling faithful reproduction of European option values under idealized assumptions. For American options, where early exercise introduces freeboundary conditions, the PINN provides a flexible approximation framework unconstrained by discretization. To address uncertainty, we extend the model w-
ith anchored ensembles, allowing estimation of confidence intervals for option values alongside point predictions. This dual capability—accurate pricing and reliable uncertainty quantification—offers a novel contribution to option pricing.
The remainder of this paper is organized as follows. Section 2 reviews the previous reserach work on implementing deep leanring models for BS option pricing. Then, in Section 3 theoretical foundations of the BS model and PINNs. Section 3 details the methodology, including optimization strategies and network architectures. Section 4 presents numerical experiments comparing PINNs with classical methods across multiple scenarios. Section 5 concludes with insights and future research directions.
2 Related Work
Recent work on data-driven option pricing commonly adopts an artificial neural network ANN baseline that mirrors the BS input set [44, 45, 46, 47, 48]. For example, D’Uggento et al. [48] define ANN1 as a feedforward network trained on precisely the BS covariates—underlying price, strike, time to maturity, annual volatility, and a call/put flag—while deliberately excluding dividends and broader firm/market features so that any incremental value of non-BS information can be assessed against a clean -
benchmark. Such baselines are typically evaluated with point-prediction metrics (MAE, MSE, RMSE, R2, MAPE) and seldom report calibrated predictive intervals or other forms of uncertainty quantification.
A recurrent approach treats pricing as a sequence-learning problem: given per-date descriptors (e.g., moneyness, time to maturity, volatility proxies, and the call/put indicator), a recurrent neural network RNN with LSTM/GRU cells maintains a hidden state to capture temporal dependence and forecast current prices or implied volatilities [49, 50, 51, 52].On large empirical benchmarks, RNNs often outperform static ANNs and, in purely predictive terms, can surpass Black–Scholes on error metrics—refle-
cting benefits from modeling temporal dynamics and market frictions [48]. These gains come with familiar caveats: (i) sensitivity to rolling-window design and leakage control; (ii) absence of no-arbitrage and shape constraints (e.g., call-price monotonicity/convexity in strike, calendar monotonicity) unless explicitly regularized; (iii) higher computational cost; and (iv) continued reliance on point estimates without calibrated uncertainty.
Beyond purely data-driven models, physics- and finance-informed networks inject structure into learning. Dhiman et al. [53] applied PINNs to the BS equation; while results were promising, systematic benchmarking against alternative
2

PINN’s as an Alternative to the BS Model A PREPRINT
learning baselines and American-style early-exercise settings was limited. Finance-Informed Neural Networks (FINNs) [54] push further by replacing a pure PDE-residual objective with a finance-aware loss that encodes no-arbitrage and self-financing hedging: a pricing network gθ yields Greeks via automatic differentiation, and training penalizes hedging residuals of zero-cost ∆ or ∆Γ portfolios across time. This yields a hybrid, self-supervised objective that leverages data while hard-wiring financi-
al structure, demonstrated on synthetic European-option datasets under GBM and Heston dynamics. Training efficiency and stability, however, can be sensitive to architectural choices and hedging-instrument design, and—as with most deep-learning studies—uncertainty quantification is rarely reported.
To improve trainability within a structured paradigm, Liu et al. [55] introduce a Kolmogorov–Arnold Finance-Informed Neural Network(KAFIN), which parameterizes the pricing map using the Kolmogorov–Arnold representation: the multivariate function is expressed as sums of learned univariate transforms composed with learned univariate aggregators. Practically, this Kolmogorov–Arnold Network (KAN) architecture separates inner per-input scalar transforms from outer scalar mixers and is trained with a co-
mposite, PINN-style objective that can include initial/terminal and boundary conditions together with a finance-governed operator term (e.g., the BS operator) and, optionally, FINN-type hedging residuals [55]. On controlled, simulated European-option data, KAFIN reports lower losses and competitive or improved training efficiency relative to baseline FINN settings, at the cost of extra architectural hyperparameters and tuning sensitivity. While some variants discuss extensions, systematic evaluati-
on on live market data, American early-exercise features, and calibrated uncertainty remains comparatively limited [54, 55].
Our approach follows the PINN line [53, 54, 55] but adopts a strictly physics-informed formulation that directly solves the BS PDE by minimizing a residual-based loss augmented with initial and boundary conditions. We parameterize a mesh-free surrogate Vθ(S, t) and, without additional hedging residuals or bespoke regularizers, accurately recover both European and American prices while enforcing arbitrage-consistent bounds through our output mapping. In contrast to purely data-driven ANN/RNN baseli-
nes and the hedging-based FINN family, our method does not require labeled prices or hedging targets and naturally supports standard model variants. Crucially, we move beyond point estimates by quantifying epistemic uncertainty, producing uncertainty bands around predictions; our anchor-augmented objective further stabilizes training and enables fast transfer fine-tuning.
3 Preliminaries
We begin by recalling the BS pricing PDE and show how it is enforced in a physics-informed neural network through a residual-based loss. We then introduce an anchor-augmented objective for uncertainty quantification and efficient transfer.
3.1 Black–Scholes model
Under the risk–neutral measure, the underlying price S(t) follows a geometric Brownian motion on t ∈ [0, T ),
dS(t) = r S(t) dt + σ S(t) dW (t), (1)
where r is the risk–free rate and σ > 0 the volatility. This yields the BS PDE for a European option price V (S, t):
∂V
∂t + 1
2σ2S2 ∂2V
∂S2 + rS ∂V
∂S − rV = 0, (2)
with terminal condition V (S, T ) = max(S − K, 0) for a call. The BS framework admits closed forms for European options, while early–exercise features (e.g., American options) lead to free–boundary problems that typically require numerical methods.
3.2 PINNs for option pricing
Let Vˆθ(S, t) be a neural approximation of V (S, t) with trainable parameters θ. Define the BS residual operator
RBS[Vˆθ](S, t) = ∂Vˆθ
∂t + 1
2 σ2S2 ∂2Vˆθ
∂S2 + rS ∂Vˆθ
∂S − r Vˆθ. (3)
3

PINN’s as an Alternative to the BS Model A PREPRINT
Given collocation points {(Si, ti)}Nr
i=1 in the interior, terminal samples {(Si, T )}Ni
i=1, and boundary samples
{(Sb, tb)}Nb
b=1 with targets h(Sb, tb) (Dirichlet or Neumann), the standard PINN objective is
LPINN(θ) =λr
1
Nr
Nr
X
i=1
RBS[Vˆθ](Si, ti) 2+
λi
1
Ni
Ni
X
i=1
Vˆθ(Si, T ) − max(Si − K, 0) 2 + λb
1
Nb
Nb
X
b=1
Vˆθ(Sb, tb) − h(Sb, tb) 2,
(4)
where Nr, Ni, Nb are the counts of interior, terminal, and boundary samples, respectively, and λr, λi, and λb are positive weighting coefficients that balance the relative contributions of the PDE-residual, terminal, and boundary losses in LPINN (i.e., they control each term’s influence during training). This mesh–free loss enforces the PDE, terminal payoff, and boundary conditions via automatic differentiation.
3.3 Uncertainty quantification via anchoring
Anchored ensembling [39] approximates Bayesian inference by adding a quadratic pull toward a reference parameter vector (an “anchor”), producing MAP-like estimators whose ensemble spread reflects posterior uncertainty. For regression, a typical anchored loss for the j-th model is
Lanch,j (θj ) = 1
N
N
X
n=1
yn − yˆθj (xn) 2 + λanc
Nθ
∥θj − θanc,j ∥2
2, (5)
where θanc,j is drawn from a prior (or otherwise specified). In our PINN setting we combine this idea with the residual/condition losses:
LAT-PINN(θ) = LPINN(θ) + λanc
Nθ
∥θ − θanc∥2
2, (6)
where θanc is a chosen anchor (e.g., a data–dependent anchor from a first training stage; see Sec. 4). Setting λanc=0 recovers (4).
4 Methodology
4.1 Problem setup
We approximate V (S, t) for European and American options with a fully connected network Vˆθ. Training samples comprise interior collocation points for the PDE, terminal points at t=T for the payoff, and boundary points at S=Smin, Smax for boundary conditions. Unless otherwise noted, we work with the formulation of (log S, t).
4.2 Two–stage training with anchoring transfer
To obtain fast convergence and calibrated uncertainty, we adopt a two–stage procedure summarized in Alg. 1.
• We train Vˆθ by minimizing LPINN(θ) of Eq 4 and save the converged parameters θ(1).
• We instantiate a second model, initialize θ ← θ(1), set the anchor θanc := θ(1), and fine–tune with the anchor–augmented loss LAT-PINN(θ) of Eq 6. The transfer initialization provides a strong prior, so Stage 2 requires substantially fewer epochs (e.g., 5,000 vs. 50,000).
• We repeat Stage 2, M times (resampling batches and seeds) to obtain predictors {Vˆθ(m) }m M=1; we report the ensemble mean and standard deviation as point estimate and predictive uncertainty.
4.3 Neural architecture and sampling
We use a fully connected feedforward network with four hidden layers (50 units each, tanh activations). The network takes (S, t) as inputs and returns a single scalar output Vˆθ(S, t). We train with Adam (initial learning rate 10−3, exponential decay), using λr, λi, λb in Eq. 4 and λanc in Eq. 6 as specified per experiment. Training sets comprise interior collocation points Nr, terminal samples Ni at t = T , and boundary samples Nb at Smin, Smax. For American options (Sec. 5.2), we additionally en-
force V ≥ payoff via a projection step while retaining the PDE residual in the continuation region. A schematic overview of this architecture is shown in Fig. 1.
4

PINN’s as an Alternative to the BS Model A PREPRINT
Algorithm 1 Anchor–Transfer PINN (AT–PINN) for Black–Scholes
Require: BS params (r, σ), strike K; domains for (S, t); data sets Dr, Di, Db; weights λr, λi, λb, λanc; ensemble size M ; optimizer O Ensure: Ensemble mean μ(S, t) and std ς(S, t) of Vˆ (S, t) 1: Define residual RBS[Vˆθ] and loss LPINN(θ) as in (4) 2: Stage 1: initialize θ ← θ(0); for E1 epochs update θ ← O θ, ∇θLPINN(θ)
3: Save θ(1) ← θ and set anchor θanc ← θ(1) 4: Stage 2:
5: for m = 1 to M do 6: Initialize θ ← θ(1)
7: For E2 epochs minimize LAT-PINN(θ) = LPINN(θ) + λanc
Nθ ∥θ − θanc∥22
8: Store predictor Vˆ (m)(S, t) ← Vˆθ(S, t) 9: end for
10: Aggregate μ(S, t) = 1
M
PM
m=1 Vˆ (m)(S, t) and ς(S, t) =
q
1 M −1
PM
m=1 Vˆ (m)(S, t) − μ(S, t) 2
Figure 1: Schematic of the physics-informed neural network used to approximate V (S, t): inputs S, t, four tanh hidden layers (50 units each), and a single scalar output Vˆθ.
4.4 Metrics and Uncertainty
Let {(xi, yi)}N
i=1 be targets and {yˆi}N
i=1 predictions. Then MAE = 1
N
PN
i=1|yi −yˆi|; RMSE =
q
1 N
PN
i=1(yi − yˆi)2;
EV = 1 − Var(y − yˆ)
Var(y) ; and the relative error (%) = 100
N
PN i=1
|yi − yˆi|
|yi| .
For an ensemble of M models with pointwise predictions {yˆ(m)(x)}m M=1,
y ̄(x) = 1
M
M
X
m=1
yˆ(m)(x), (7)
σb2(x) = 1
M −1
M
X
m=1
yˆ(m)(x) − y ̄(x)
2
. (8)
We visualize uncertainty as y ̄(x) ± k σb(x) with k ∈ {1, 2}.
For any set {zi}N
i=1, the (sample) variance is
Var(z) = 1
N −1
N
X
i=1
zi − z ̄ 2, z ̄ = 1
N
N
X
i=1
zi. (9)
5

PINN’s as an Alternative to the BS Model A PREPRINT
5 Result
All experiments were implemented in Python with TensorFlow, enforcing the PDE via automatic differentiation. Training ran on NVIDIA T4 GPUs (Google Colab). The codebase is modular—separating PDE operators, boundary/initial conditions, and the training loop—so it can be readily adapted to other pricing PDEs or model variants (GitHub link).
In Sections 5.1 and 5.2, we report results using the anchored PINN loss of Eq. 6, which is key to our contribution: beyond accurate point estimates, the model provides epistemic uncertainty quantification. Concretely, predictions are returned with calibrated uncertainty bands that (i) respect no-arbitrage bounds through our bounded-output mapping and (ii) reflect model uncertainty arising from model behaviour. These intervals make the outputs actionable—supporting risk-aware decisions and enabling-
 coverage/consistency checks—rather than merely offering single-value forecasts.
5.1 European Option
We price a European put with six months to expiry, volatility σ = 0.2, risk-free rate r = 0.05, and strike K = $45. The PINN is trained with 150 interior (collocation) points and 256 boundary/terminal points. Figure 2 (top) compares the PINN prediction (orange) with the ground-truth solution (blue). We also construct an ensemble of M = 30 independently trained models using an anchored loss; the light-blue band shows the ±2σ ensemble uncertainty around the mean prediction y ̄. Because the uncertain-
ty is only a few cents, we display ±2σ for visibility.
The bottom panel plots the signed error ei = yˆi − yi and overlays a ±1σ band to indicate predictive uncertainty at each xi. The uncertainty is computed on the predictions; for visualization, we show it around both the prediction and the error.
Across the slice, errors are on the order of a few cents with the relative percentage error not exceeding 1.2%. Moreover, we report MAE = 5.21 × 10−2, RMSE = 7.12 × 10−2 and explained variance EV = 0.999.
Figure 2: Left Panel: Call price vs stock price shown for ground truth in blue and the prediction in orange curve, with the shaded light blue representing uncertainty at pm2 for better visualization. Right Panel: Absolute error (yˆ − y) at each stock price between the ground truth and the prediction is plotted.
5.2 American Option
For the American-option study, we analyze a put to emphasize its defining difference from the European case—namely, the right to exercise at any time before expiry. We adopt the same market and training settings as in the European benchmark: maturity T = 0.5 years, volatility σ = 0.2, risk-free rate r = 0.05, and strike K = $45. The numbers of collocation points, boundary-condition points, and training epochs are kept identical. Figure 3 (top) compares the PINN solution (orange) with a finite-diff-
erence reference (blue) at three time slices: t = 0 (present), t = T /2, and t = T (maturity). The blue shading denotes predictive uncertainty; the corresponding errors are shown in the bottom panel.
At t = 0, the PINN slightly underprices for S < K (on average by ∼ $0.10), though overall errors remain small. At t = T /2, predictions are generally below the reference, with a mild overvaluation near the exercise kink at S ≈ K (under $0.10). At maturity t = T , the local overvaluation near S ≈ K increases (up to $0.30), a slice that is of limited practical relevance. Unlike time-marching numerical schemes—where backward stepping can accumulate error—the PINN shows no systematic degradation away -
from maturity. Overall performance is strong: MAE = 8.05 × 10−2, RMSE = 9.11 × 10−2, and explained variance EV = 0.999.
6

PINN’s as an Alternative to the BS Model A PREPRINT
Figure 3: Top Panel: Orange dashed line is the prediction, and the solid blue line is the groundtruth with a shaded model uncertainty shown at 2 standard deviations. Bottom Panel: The error between the ground truth and the prediction and the shaded region is the uncertainty of the prediction at 1 standard deviation. In both panels, the left figure shows t = 0, middle panel shows midway to the expiry date, and the right panel is the expiry date.
5.3 Comparison with Other Methods
To assess our approach, we compare against three baselines: the Kolmogorov–Arnold FINN of [55] (henceforth KAN), a simple feed-forward network (ANN), and a recurrent model (RNN) following [48, 44]. We build supervised datasets for American puts and European calls on the Yahoo Finance tickers AAPL, MSFT, GOOGL, AMZN, META, F, T, NOK, CCL, SOFI, SNAP, NIO, AAL, PBR, RIVN.
Figure 4: Ground truth (pink), KAN (dashed dark green), PINN-anchor (dotted purple), RNN (cyan stars), and ANN (solid blue). Left Panel: European, Right Panel: American
For each expiry–strike pair we extract the relevant option chain (put for American, call for European) and set the label to the mid-quote (bid + ask)/2, falling back to the last traded price when necessary. To enforce no-arbitrage under a non-dividend assumption, labels y are clipped to instrument-specific bounds—American put: L = max(K − S, 0), U = K; European call: L = max(S − Ke−rτ , 0), U = S. Each sample includes static covariates [log(S/K), τ, σ] (spot, time to maturity in years, implied vol-
atility). For stable training with guaranteed bounded predictions, we map
7

PINN’s as an Alternative to the BS Model A PREPRINT
prices via f = (y − L)/(U − L) ∈ (0, 1), z = log f
1−f ∈ R, train on z, and invert at inference by yˆ = L + (U − L) σ(z). For the RNN branch we augment each row with a per-ticker sequence of daily log-returns and realized volatility (rolling
standard deviation, annualized by √252) using the last W days (e.g., W = 60); sequences are standardized with train-split moments, and a fallback is used if a ticker’s history is missing. Across all experiments we fix the neural architecture per model and do not retune it per parameter set.
Model architectures are aligned to ensure a fair comparison. The ANN flattens the (w, fseq) window (temporal order ignored) and processes it with Dense(128, ReLU) → Dense(64, ReLU); the static branch is Dense(32, ReLU). The embeddings are concatenated and passed to a fusion head Dense(64, ReLU) → Dense(32, ReLU) → Dense(1) (linear) that predicts the scalar target z. The RNN replaces the flattening with LSTM(64) to capture temporal dynamics before the same fusion head; Dense layers use ReLU and the-
 LSTM retains its standard tanh/sigmoid internals. Our KAN follows the Kolmogorov–Arnold form u(x) ≈ PM
i=1 gi
Pd
j=1 hij(xj) : each hij : R → R and gi : R → R is a small one-dimensional MLP; their inner/outer compositions are summed (optionally with a linear skip) to produce a scalar output.
Anchor (PINN) KAN
European MAE RMSE EV MAE RMSE EV Set 1 4.5e-02 6.5e-02 9.3e-01 8.1e-02 1.2e-01 5.7e-01 Set 2 2.6e-01 4.4e-01 9.3e-01 1.43e-01 1.7e-01 6.1e-01 Set 3 8.5e-02 1.3e-01 9.8e-01 3.4e-01 4.4e-01 6.2e-01 Set 4 2.3e-01 3.4e-01 9.6e-01 1.2e+00 1.4e+00 8.4e-01 RNN ANN MAE RMSE EV MAE RMSE EV Set 1 1.98e-01 2.73e-01 9.7e-01 2.5e-01 3.3e-01 6.8e-01 Set 2 9.2e-01 8.4e-01 8.9e-01 9.6e-01 1.2e+00 8.8e-01 Set 3 6.3e-01 8.4e-01 8.0e-01 7.9e-01 9.3e-01 8.5e-01 Set 4 2.1e+00 2.8e+00 8.3e-01 2.6e+00 3.0e+00 7.6e-01 Ta-
ble 1: Comparison of models for European call option pricing across four parameter sets of strike K, volatility σ, and time to maturity T : (i) K = 30, σ = 0.15, T = 0.25; (ii) K = 45, σ = 0.20, T = 0.5; (iii) K = 45, σ = 0.35, T = 0.5; (iv) K = 60, σ = 0.30, T = 1.0. Evaluation metrics: MAE, RMSE, and explained variance (EV).
Anchor (PINN) KAN
American MAE RMSE EV_S MAE RMSE EV_S Set 1 6.7e-02 1.2e-01 9.9e-01 8.1e-02 1.2e-01 5.7e-01 Set 2 9.1e-02 1.7e-01 9.3e-01 1.43e-01 1.7e-01 6.1e-01 Set 3 9.3e-02 1.3e-01 9.8e-01 3.4e-01 4.4e-01 6.2e-01 Set 4 2.6e-01 3.4e-01 9.8e-01 1.2e+00 1.4e+00 8.4e-01 RNN ANN MAE RMSE EV_S MAE RMSE EV_S Set 1 1.1e-01 2.1e-01 9.8e-01 1.1e-01 2.0e-01 9.7e-01 Set 2 7.6e-01 1.0e+00 8.8e-01 5.2e-01 7.1e-01 9.1e-01 Set 3 1.05e+00 1.3e+00 8.5e-01 1.0e+00 1.3e+00 8.9e-01 Set 4 3.30e+00 3.3e+00 7.5e-01 2.6e+00 3.0e+00 7.-
1e-01 Table 2: Comparison of models for American put option pricing across four parameter sets of strike K, volatility σ, and time to maturity T : (i) K = 30, σ = 0.15, T = 0.25; (ii) K = 45, σ = 0.20, T = 0.5; (iii) K = 45, σ = 0.35, T = 0.5; (iv) K = 60, σ = 0.30, T = 1.0. Evaluation metrics: MAE, RMSE, and explained variance (EV).
Quantitative results (RMSE, MAE, EV) are summarized in Tables 1 and 2. Figure 4 complements these with price–stock curves at t = 0 for both European (left) and American (right) cases: ground truth (pink), KAN (dashed dark green), PINN-anchor (dotted purple), RNN (cyan stars), and ANN (solid blue). Consistent with the tables, PINN-anchor and KAN generally outperform ANN/RNN, with visibly smaller deviations near the strike. Between PINN-anchor and KAN, accuracy is similar across most parameter sets;-
 however, KAN trains markedly slower (about 10×) and exhibits
8

PINN’s as an Alternative to the BS Model A PREPRINT
sharper local variations—especially near the European strike—along with greater run-to-run variability, whereas PINN-anchor tends to train more stably.
6 Conclusion
Neural surrogates for option pricing are gaining traction [53, 50, 55], yet two gaps persist in the literature: (i) systematic comparisons to established numerical solvers, and (ii) uncertainty quantification (UQ) beyond point errors. We addressed both by formulating a physics-informed neural network (PINN) that solves the Black–Scholes (BS) PDE as a mesh-free, global surrogate over (S, t) and by augmenting training with anchored ensembling to capture epistemic uncertainty. To the best of our know-
ledge, this study is the first to provide confidence intervals for PINN solutions to option-pricing PDEs—an important contribution given that practitioners require not only point estimates but also well-calibrated confidence measures (in contrast, Monte Carlo methods routinely provide confidence bands).
Methodologically, our PINN approach departs from time-marching PDE solvers. Rather than stepping backward from maturity—where both error and uncertainty can accumulate—we learn a single solution over the entire (t, S) domain. As a result, we do not observe a systematic increase in uncertainty at t = 0; performance at t = 0 is generally strong, particularly near the early-exercise boundary (the “kink”). Closer to maturity the solution develops sharper, less smooth features that neural networks find-
 harder to learn; correspondingly, uncertainty is larger near the boundary at late times, yet absolute errors remain small (below $0.30, i.e., < 5% relative error). For American options, errors may grow with time, but our comparisons indicate that PINNs still outperform standard neural baselines (e.g., feed-forward and recurrent networks) on Black–Scholes solutions. Overall, these findings underline the suitability of PINNs for option pricing and show that our uncertainty bands closely track the e-
rror scale, yielding practically useful UQ.
Training a PINN is more computationally intensive than evaluating closed-form BS or running a single FD/MC solve; the benefit is amortization across queries and parameter sweeps. Performance depends on residual weighting and sampling (especially near S ≈ K and t → T ), and our UQ targets parameter (epistemic) uncertainty; modeling aleatoric noise would require an additional likelihood head. Future work includes (i) adaptive collocation or curricula to further reduce maturity-adjacent error, (ii) f-
ormal calibration studies (coverage with Wilson intervals, NLL, reliability) and conformal prediction for distribution-free intervals, (iii) higher-dimensional BS settings (baskets, stochastic rates), stochastic volatility and jump-diffusion dynamics, and (iv) broader benchmarks versus FD/PSOR/MC with runtime–accuracy trade-offs and ablations over anchor strength and ensemble size.
References
[1] John C. Cox, Stephen A. Ross, and Mark Rubinstein. Option pricing: A simplified approach. Journal of Financial Economics, 7(3):229–263, 1979.
[2] Yoshifumi Muroi and Shintaro Suda. Binomial tree method for option pricing: Discrete cosine transform approach. Mathematics and Computers in Simulation, 198:312–331, 2022.
[3] Tomas Björk. Arbitrage Theory in Continuous Time. Oxford University Press, 4 edition, 2020.
[4] Phelim P. Boyle. Options: A Monte Carlo approach. Journal of Financial Economics, 4(3):323–338, 1977.
[5] Michael B. Giles. Multilevel monte carlo methods. Acta Numerica, 24:259–328, 2015.
[6] Steven L. Heston. A closed-form solution for options with stochastic volatility with applications to bond and currency options. The Review of Financial Studies, 6(2):327–343, 1993.
[7] Jim Gatheral. The Volatility Surface: A Practitioner’s Guide. Wiley, 2012. Online edition.
[8] Martin Keller-Ressel. Moment explosions and long-term behavior of affine stochastic volatility models. Mathematical Finance, 21(1):73–98, 2011.
[9] Robert C. Merton. Option pricing when underlying stock returns are discontinuous. Journal of Financial Economics, 3(1-2):125–144, 1976.
[10] Rama Cont and Peter Tankov. Financial Modelling with Jump Processes. Chapman & Hall/CRC, 2004.
[11] S. G. Kou. A jump-diffusion model for option pricing. Management Science, 48(8):1086–1101, 2002.
[12] Fischer Black and Myron Scholes. The pricing of options and corporate liabilities. Journal of Political Economy, 81(3):637–654, 1973.
[13] John C. Hull. Options, Futures, and Other Derivatives. Pearson, 11 edition, 2022. Global Edition.
[14] Andrew Kumiega, Chris Vliet, Sergey Khaykin, and Parth Rishi. Black–scholes 50 years later: Has the outperformance of passive option strategies finally faded? International Journal of Financial Studies, 12(4):114, 2024.
9

PINN’s as an Alternative to the BS Model A PREPRINT
[15] Dietmar P. J. Leisen and Matthias Reimer. Binomial models for option valuation—examining and improving convergence. Applied Mathematical Finance, 3(4):319–346, 1996.
[16] Domingo Tavella and Curt Randall. Pricing Financial Instruments: The Finite Difference Method. Wiley, 2000.
[17] Daniel J. Duffy. Finite Difference Methods in Financial Engineering: A Partial Differential Equation Approach. Wiley, 2006.
[18] David M. Pooley, Kenneth R. Vetzal, and Peter A. Forsyth. Convergence remedies for non-smooth payoffs in option pricing. Journal of Computational Finance, 6(4):25–40, 2003.
[19] Neil Clarke and Keith Parrott. Multigrid for american option pricing with stochastic volatility. Applied Mathematical Finance, 6(3):177–195, 1999.
[20] Peter A. Forsyth, Kenneth R. Vetzal, and Rachid Zvan. Convergence of numerical methods for valuing path-dependent options using interpolation. Review of Derivatives Research, 5(3):273–314, 2002.
[21] Francis A. Longstaff and Eduardo S. Schwartz. Valuing american options by simulation: A simple least-squares approach. The Review of Financial Studies, 14(1):113–147, 2001.
[22] Maziar Raissi, Paris Perdikaris, and George Em Karniadakis. Physics-informed neural networks: A deep learning framework for solving forward and inverse problems involving nonlinear partial differential equations. Journal of Computational Physics, 378:686–707, 2019.
[23] George Em Karniadakis, Ioannis G. Kevrekidis, Lu Lu, Paris Perdikaris, Sifan Wang, and Liu Yang. Physics-informed machine learning. Nature Reviews Physics, 3:422–440, 2021.
[24] Ghazal Farhani, Nima Hosseini Dashtbayaz, Alexander Kazachek, and Boyu Wang. A simple remedy for failure modes in physics informed neural networks. Neural Networks, 183:106963, 2025.
[25] Ghazal Farhani, Alexander Kazachek, and Boyu Wang. Momentum diminishes the effect of spectral bias in physics-informed neural networks. arXiv preprint arXiv:2206.14862, 2022.
[26] Yuexing Bai, Temuer Chaolu, and Sudao Bilige. The application of improved physics-informed neural network (ipinn) method in finance. Nonlinear Dynamics, 107(4):3655–3667, 2022.
[27] Noguer I Alonso, Julian Antolin Camarena, et al. Physics-informed neural networks (pinns) in finance. Julian, Physics-Informed Neural Networks (PINNs) in Finance (October 10, 2023), 2023.
[28] Donatien Hainaut and Alex Casas. Option pricing in the heston model with physics inspired neural networks. Annals of Finance, 20(3):353–376, 2024.
[29] Sina Kazemian and Giovanni Fanchini. Influence of higher-order electron-phonon interaction on the electron-related lattice thermal properties of two-dimensional dirac crystals. Physical Review B, 109(20):205422, 2024.
[30] Sina Kazemian and Giovanni Fanchini. Dynamic dielectric function and phonon self-energy from electrons strongly correlated with acoustic phonons in 2d dirac crystals. Journal of Physics: Condensed Matter, 35(32):325601, 2023.
[31] Sina Kazemian, Paul Bazylewski, Reg Bauld, and Giovanni Fanchini. Thermal conductivity of thin film-substrate systems from two-side scanning photothermal deflection measurements: Theoretical model and validation. The Journal of Chemical Physics, 150(18), 2019.
[32] Chuan Guo, Geoff Pleiss, Yu Sun, and Kilian Q. Weinberger. On calibration of modern neural networks. In ICML, 2017.
[33] Jessica Guynn. Google photos labeled black people’gorillas’. USA today, 1, 2015.
[34] Yaniv Ovadia et al. Can you trust your model’s uncertainty? evaluating predictive uncertainty under dataset shift. In NeurIPS, 2019.
[35] Yarin Gal et al. Phd thesis: Uncertainty in deep learning. 2016.
[36] Alex Kendall and Yarin Gal. What uncertainties do we need in bayesian deep learning for computer vision? NeurIPS, 2017.
[37] David JC MacKay. A practical bayesian framework for backpropagation networks. Neural computation, 4(3):448–472, 1992.
[38] Ghazal Farhani, Giovanni Martucci, Tyler Roberts, Alexander Haefele, and Robert J Sica. A bayesian neural network approach for tropospheric temperature retrievals from a lidar instrument. International Journal of Remote Sensing, 44(5):1611–1627, 2023.
[39] Tim Pearce, Felix Leibfried, and Alexandra Brintrup. Uncertainty in neural networks: Approximately bayesian ensembling. In International conference on artificial intelligence and statistics, pages 234–244. PMLR, 2020.
[40] Russell Tsuchida, Fred Roosta, and Marcus Gallagher. Invariance of weight distributions in rectified mlps. In International Conference on Machine Learning, pages 4995–5004. PMLR, 2018.
[41] Ghazal Farhani, Robert J Sica, Sophie Godin-Beekmann, and Alexander Haefele. Optimal estimation method retrievals of stratospheric ozone profiles from a dial. Atmospheric Measurement Techniques, 12(4):2097–2111, 2019.
[42] Arthur Gelb et al. Applied optimal estimation. MIT press, 1974.
[43] Albert Tarantola. Inverse problem theory and methods for model parameter estimation. SIAM, 2005.
[44] Eden Gross, Ryan Kruger, and Francois Toerien. A comparative analysis of option pricing models: Black–scholes, bachelier, and artificial neural networks. Risk Management, 27(2):8, 2025.
10

PINN’s as an Alternative to the BS Model A PREPRINT
[45] Georgios Rigopoulos. Ann model for call options pricing using s&p 100 market data. Financial Engineering, 2:13–22, 2024.
[46] Yossi Shvimer and Song-Ping Zhu. Pricing options with a new hybrid neural network model. Expert Systems with Applications, 251:123979, 2024.
[47] Zakaria Elbayed and Abdelmjid Qadi EI Idrissi. Deep learning in financial modeling: Predicting european put option prices with neural networks. Algorithms, 18(3):161, 2025.
[48] Angela Maria D’Uggento, Marta Biancardi, and Domenico Ciriello. Predicting option prices: From the black-scholes model to machine learning methods. Big Data Research, 40:100518, 2025.
[49] Rita Pimentel, Morten Risstad, Sondre Rogde, Erlend S Rygg, Jacob Vinje, Sjur Westgaard, and Cassandra Wu. Option pricing with deep learning: a long short-term memory approach. Decisions in Economics and Finance, pages 1–32, 2025.
[50] Yan Liu and Xiong Zhang. Option pricing using lstm: A perspective of realized skewness. Mathematics, 11(2):314, 2023.
[51] Junhuan Zhang and Wenjun Huang. Option hedging using lstm-rnn: an empirical analysis. Quantitative Finance, 21(10):17531772, 2021.
[52] Jacob Vinje, Erlend Stegavik Rygg, Cassandra Wu, Morten Risstad, Rita Pimentel, Sjur Westgaard, and Christian O Ewald. Merged lstm-mlp for option valuation. Quantitative Finance, pages 1–16, 2025.
[53] Ashish Dhiman and Yibei Hu. Physics informed neural network for option pricing. arXiv preprint arXiv:2312.06711, 2023.
[54] Amine M Aboussalah, Xuanze Li, Cheng Chi, and Raj Patel. The ai black-scholes: Finance-informed neural network. arXiv preprint arXiv:2412.12213, 2024.
[55] Charles Z Liu, Ying Zhang, Lu Qin, and Yongfei Liu. Kolmogorov–arnold finance-informed neural network in option pricing. Applied Sciences, 14(24):11618, 2024.
11

---

## Processing Information

- **Processing Library:** Zotero PDFWorker
- **Processing Date:** 2026-02-10T18:15:43.679Z
- **Text Length:** 38528 characters
- **Success:** Text extraction completed
- **PDF Library Used:** Zotero PDFWorker
- **Pages Processed:** 11 of 11
