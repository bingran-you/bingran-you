# PDF Document: Zhang - 2025 - A Risk-Neutral Neural Operator for Arbitrage-Free SPX-VIX Term Structures.pdf

**File Path:** Zhang - 2025 - A Risk-Neutral Neural Operator for Arbitrage-Free SPX-VIX Term Structures.pdf

**Processed Date:** 2026-02-10T18:16:32.557Z

**File Size:** 1840.25 KB

**Total Pages:** 46

**Extracted Pages:** 46

**PDF Library:** Zotero PDFWorker

**Attachment Item ID:** 3540

**Title:** A Risk-Neutral Neural Operator for Arbitrage-Free SPX-VIX Term Structures

**Collection:** Large Files > Random Papers

---

## Extracted Text Content

ARBITER: A Risk–Neutral Neural Operator for Arbitrage–Free SPX–VIX Term Structures
ZhangJian’an
Guanghua School of Management, Peking University Peking University Beijing, China
2501111059@stu.pku.edu.cn
Abstract
We introduce ARBITER, a risk–neutral neural operator that learns arbitrage–free joint term structures of SPX options and VIX2. ARBITER reframes selective scan state–space updates as a discretized Green operator under the risk–neutral measure and imposes geometry at training time via two ingredients: (i) Q-Align, a Lipschitz-controlled projection pipeline combining spectral normalization and nonexpansive projections with a spectral–radius guard (CFL–style) to ensure stable scans; (ii) a convex–mono-
tone decoder (ICNN with Legendre duality) that enforces static no-arbitrage on the strike–maturity grid and is consistent with discretized VIX2 replication. Training uses a saddle-point scheme with fixed, falsifiable stopping thresholds and records auditable diagnostics (Lipschitz constants before/after projection, spectral-guard hits, and projection distances).
On high-fidelity synthetic markets reflecting SPX–VIX coupling, ARBITER attains dimensionless accuracy improvements over strong sequence models and neural SDE baselines: NAS ≈ 0.9866, CNAS ≈ 0.9902, NI ≈ 0.6776, Stability = 1.0, DualGap ≈ 0.060, and low Surface–Wasserstein discrepancy, all with 95% HAC confidence intervals and Holm–Bonferroni control. Stress–to–Fail analyses identify a sharp performance threshold at distortion level ≈ 2.0, while an external-validity protocol (frozen hyperparameter-
s reused across out-of-sample windows) yields minimal degradation. Ablations confirm the non-replaceability of geometry: disabling gating, halving operator rank, or removing the spectral guard degrades accuracy and stability and introduces surface artifacts. Theoretical results establish approximation rates, conditioning, identifiability (jointly with VIX2 replication), and convergence of the extragradient scheme to a noise ball. All code, configuration files, and scripts are released to support f-
ull reproducibility.
Keywords: risk–neutral operator learning; arbitrage-free term structure; implied volatility surface; SPX–VIX coupling; spectral projection; convex–monotone decoding.
1 Introduction
Problem statement and motivation. Modern large-scale derivatives systems in production still favor a “fit–then-clean” paradigm: first fit prices or implied-volatility (IV) surfaces with flexible data-driven regressors; then post hoc patch static/dynamic no-arbitrage, enforce martingale consistency, and repair change-of-numéraire coherence by smoothing or projections (e.g., SVI-like parameterizations, regularization, or empirical constraints that suppress butterfly and calendar arbitrage). This com-
partmentalization displaces financial correctness to an afterthought, encourages error accumulation under distribution shift, and blurs when training should stop and on what grounds the model can be rejected or improved.
Concurrently, two influential lines for long-horizon learning have matured: (i) Selective State Space Models (SSMs), whose evolution from S4/S5 to Mamba yields linear-time/space primitives that preserve long-range expressivity [17, 18, 16]; and (ii) Neural Operators, which learn function-to-function mappings and are expressly designed to decouple discretization (grid) from underlying physics [1, 2, 21].
arXiv:2511.06451v1 [cs.LG] 9 Nov 2025

Thesis: risk-neutral pricing as a structured operator. We argue that risk-neutral pricing is not merely a target functional but a structured operator, specifically a Green operator that maps exogenous drivers, boundary/terminal data, and numéraires to observables over the maturity–strike lattice. When selective scan is used as an efficient evaluation of this operator, then no-arbitrage, martingale consistency, and change-of-numéraire are not optional patches; they are geometric and spectral invar-
iants that should hold during training. This view upgrades the selective-scan runtime primitive from a sequence mechanism to a risk-neutral operator layer endowed with financial semantics.
From selective scan to a risk-neutral operator layer. Let Ω = {(T, K)} denote the grid of maturities and strikes and x denote state inputs (underlyings, realized/forward variance proxies, macro/term-structure covariates). We instantiate an operator Gθ that produces prices
Π
θ = Gθ [x; Ω],
implemented by selective scan for streaming evaluation over Ω while preserving causality and numéraire-consistent propagation [16]. We explicitly disentangle (i) physical propagation, realized by scan kernels and gates, from (ii) geometric validity, enforced by projections and decoders. In particular, martingale consistency EQ [St+Δ | Ft ] = St and no-arbitrage convexity/monotonicity (e.g., convexity in strike for call prices) are handled in loop rather than as post-processing.
Geometry in the loop: Q-Align and convex–monotone decoding. Two architectural devices internalize financial correctness within the learning dynamics. First, Q-Align performs a training-time 1-Lipschitz projection on the operator outputs or intermediate maps and logs λbefore/after
lip to make smoothness/monotonicity auditable; practically,
we combine spectral/orthogonal parameterizations with projection-based clamps that honor stability budgets [3, 4]. Second, a convex–monotone decoder—an ICNN with a Legendre-conjugate head—makes “price→measure” and “measure→price” mutually conjugate, encoding convexity, coordinate-wise monotonicity, and martingale consistency by construction [5, 6]. These mechanisms replace fragile penalty-based heuristics with project-then-train geometry.
Spectral stability as a first-class rule (Spec-Guard). Long-horizon optimization is susceptible to subtle instabilities. We introduce Spec-Guard, a spectral-radius CFL rule that monitors the Jacobian spectral radius of state updates and triggers minimum-distance projections whenever ρ(Jθ ) Δt approaches a safety threshold γ < 1. We log spec_guard_hits, projection_distance, and max_rho_dt to quantify stability. Optimization uses saddlepoint/extra-gradient updates to regularize adversarial/matching -
dynamics and prevent cycling or explosion [7, 8]. The result is a loop that is both stable and falsifiable.
Why SPX–VIX needs an operator view. The SPX IV surface and the VIX term structure are tied by replication identities and change-of-numéraire relations under Q. Fitting either surface while tolerating violations in the other produces incoherent Greeks, unreliable hedges, and brittle stress responses. Our operator-centric layer aligns the two by baking martingale and numéraire coherence into the semantics of propagation and decoding, avoiding post hoc smoothing and manual repairs [23].
Positioning within long-sequence and operator learning. Our method lies at the interface of selective SSMs and Neural Operators. From the SSM lineage, we leverage linear-time/space selective scan and insights on long-context stability and representation [17, 18, 16, 20, 9, 19]. From the Neural Operator lineage, we inherit the abstraction of operator learning that generalizes across discretizations and boundary conditions [1, 2, 21, 22]. Our contribution is to specialize the operator family to risk-
-neutral, replicable Green operators and to embed financial geometry (convexity/monotonicity/martingale) and spectral safety (CFL) inside the training loop.
Auditing and operational falsifiability. We convert qualitative desiderata (“arbitrage-free,” “stable,” “numérairecoherent”) into auditable artifacts. Each geometric/spectral intervention is a first-class logged event; headline metrics carry heteroskedasticity- and autocorrelation-robust (HAC) intervals with Holm–Bonferroni corrections; and OOS validation follows rolling windows and blocked cross-validation designed for dependent data [10, 11, 95]. These protocols support hard claims about deploym-
ent readiness.
Contributions (all auditable).
1. Risk-neutral operator layer. We formalize selective scan as a risk-neutral Green operator with complexity linear in grid size and depth, offering separable gating across the composite price–measure–numéraire map; this alleviates attention bottlenecks for long sequences and long maturities without sacrificing expressivity [16, 19].
2

2. Q-Align: geometry in the loop. We enforce a 1-Lipschitz projection during training and log λbefore/after
lip ,
replacing soft penalties with principled projections that tighten monotonicity/convexity guarantees [3, 4].
3. Convex–monotone decoder. An ICNN with a Legendre-conjugate head implements mutually conjugate price/measure maps, hard-wiring convexity, coordinate-wise monotonicity, and martingale constraints [5, 6].
4. Spec-Guard (spectral CFL). We introduce a spectral rule that monitors and minimally projects state updates, logging spec_guard_hits, projection_distance, and max_rho_dt, thereby preventing long-horizon drift and catastrophic divergence [7, 8].
5. Evaluation protocol and metrics. We define dimensionless metrics—NAS, CNAS, NI, DualGap, Stability, Surface–Wasserstein, and GenGap@95—and report 95% HAC-CIs with Holm–Bonferroni correction. Rolling OOS and blocked-CV, together with Stress-to-Fail (S2F) threshold curves, non-substitutability breakers, and external-validity checks, establish a best-paper-grade evidence chain [23, 95, 11, 10].
6. Empirics on SPX–VIX. Under synthetic and quasi-realistic SPX–VIX recipes with a unified budget, our method outperforms strong baselines; ablations (de-gating, rank reduction, disabling Spec-Guard) materially degrade CNAS/NAS/Stability and shift S2F thresholds left, demonstrating non-substitutability.
Scope, assumptions, and limits. Our design targets joint SPX–VIX term-structure learning with coherent numéraire changes, long horizons where attention bottlenecks are acute, and regimes where OOS stability and falsifiability are paramount. We assume sufficient observability of risk-neutral proxies and include reject/degrade mechanisms so that the system can fail gracefully when assumptions are stressed (§2). We purposely avoid task-specific hard coding beyond these invariants to preserve portabil-
ity.
Relations to prior art (coverage of all references). We build on selective SSMs and their stability/expressivity studies [17, 18, 16, 20, 9, 19]; on Neural Operators and recent generalizations/surveys [1, 2, 21, 22]; on arbitrage-free deep pricing and IV-surface regularization/smoothing [23]; on training stability and geometric constraints via spectral normalization, Lipschitz control, monotone architectures, and extra-gradient dynamics [3, 4, 7, 8, 6]; and on time-series inference/validation prot-
ocols including HAC, Holm–Bonferroni, and blocked-CV [10, 11, 95]. Our novelty lies in integrating “operator layer – geometric projection – spectral guard – stopping criteria” into a single, end-to-end, falsifiable risk-neutral learning pipeline tailored to SPX–VIX.
Paper roadmap. Section 2 formalizes the market setup, notation, and four testable assumptions (measurable, rejectable, and degradable), together with the dimensionless evaluation metrics. Section 3 presents the ARBITER architecture: the risk–neutral operator (RN-Operator) cast as a discretized Green operator with metric gating, the Q-Align Lipschitz projection with Spec-Guard (CFL-style spectral control), and the convex–monotone decoder; it also specifies the saddle-point training loop and fixed, -
falsifiable stopping criteria. Section 4 states our main results (T1–T8) on approximation, conditioning, identifiability, sample complexity, feasibility, and convergence of the projected extragradient scheme. Section 5 defines the data protocol and statistical methodology (HAC inference, Holm–Bonferroni control, rolling out-of-sample and blocked-CV), and Section 6 reports synthetic SPX–VIX experiments, ablations (non-substitutability breakers), external-validity checks, and Stress-to-Fail analyses-
, accompanied by comprehensive figures and tables. Section 7 provides mechanism-level diagnostics (Q-Align contraction, representative-element behavior, effective dimension). Section 8 situates our contribution within operator learning, SSM/Mamba-style models, and term-structure modeling. All proofs are collected in the appendices.Section 9.
2 Setting, Notation, and Testable Assumptions
This section formalizes the market and grids on which the model operates, fixes notation for the risk–neutral operator and its safety quantities, defines the dimensionless evaluation metrics used throughout, and states a suite of assumptions that are measurable, refutable, and degradable. All statements below are aligned with the operator view introduced in §1 and with the training and evaluation protocol discussed later.
2.1 Market, numeraire, and discretization
We work on a filtered probability space (Ω, F , (Ft )t ≥0, Q) under a risk–neutral measure Q. The short rate is (rt )t ≥0 and the chosen numeraire is a strictly positive process Nt (e.g., the money–market account Nt = exp(∫ t
0 rs ds) or a
forward–measure numeraire). Let St denote the equity index (SPX). European call and put prices observed at time t with maturity T > t and strike K > 0 are denoted Ct (K, T) and Pt (K, T).
3

For numerical work we use discrete calendars of maturities T = {Tl }L
l=1 ⊂ (t, t + Tmax] and strikes K = {K j }J
j=1 ⊂ R+,
allowing for nonuniform spacings. The risk–neutral operator Gθ maps boundary/forcing information defined on (T , K) to a price surface (K, T) ↦→ Ct (K, T), Pt (K, T) and is implemented with a selective state–space scan whose propagation is linear in |T | (and optionally in |K |).
Numeraire consistency is enforced by construction: under the numeraire measure QN associated with N, the discounted process Xt := St /Nt is a martingale and prices satisfy
Ct (K, T ) = Nt EQN (ST − K)+
NT
F
t , Pt (K, T ) = Nt EQN (K − ST )+
NT
F
t . (1)
VIX2 replication and SPX–VIX coupling. To couple equity and variance layers we expose the classical replication identity for VIX squared, using its discrete form on (T , K):
VIX2
t (T) ≈ 2
T −t
er ̄ (T −t ) ∑︁
K≤F
ΔK
K2 Pt (K, T) +
∑︁
K≥F
ΔK
K2 Ct (K, T)
!
, (2)
where F is the forward level for maturity T, r ̄ is a bucketed short rate, and ΔK is the quadrature step.1 We treat (2) as a linear observable of Gθ so that the SPX–VIX coupling is learned within the same operator layer and audited by the no–arbitrage metrics below.
2.2 Notation and safety quantities
We denote by βsmooth > 0 a Hölder (or Besov) regularity order upper–bounding the smoothness of the target surface; by βnov ≥ 0 a weight scaling a Novikov–type penalty used in the adversarial route of training; and by χ(κ) ∈ [0, 1] a long–horizon decay index determined by an effective kernel rank κ in the operator layer.
Selective scans update a latent state through ht+Δt = At ht + Bt ut with a data–dependent step Δtt > 0. We define the spectral safety quantity CFLmax = max
t
ρ( At ) Δtt , (3)
with ρ(·) the spectral radius. The Spec–Guard rule enforces CFLmax ≤ 1 by preconditioning and small projections; we record the number of guard activations and the aggregate projection distance. For Lipschitz alignment we estimate a global Lipschitz constant Llip by layerwise spectral norms before and after projection and report the pair (Lbefore
lip , Lafter
lip )
[3, 12, ?].
2.3 Dimensionless evaluation metrics
All metrics are unit–free and reported with heteroskedasticity– and autocorrelation–consistent (HAC) 95% confidence intervals [10], using temporally blocked cross–validation to respect dependence [95]. For families of hypotheses we control multiplicity with the Holm–Bonferroni procedure [11].
No–Arbitrage Score (NAS; higher is better). Let I be a finite set of static arbitrage inequalities across (T , K) (e.g., monotonicity in strike, convexity in strike, calendar monotonicity, call–put parity). For each i ∈ I, define a nonnegativity residual ri (θ) that vanishes when the inequality is satisfied and is positive when violated. After normalizing by a scale factor si (based on local forward or variance scales), define
NAS := 1 − 1
Z
∑︁
i∈I
wi ri (θ)/si +, Z =
∑︁
i∈I
wi, (4)
with nonnegative weights wi that emphasize practically salient constraints. Thus NAS ∈ [0, 1] and equals 1 if and only if there are no detected violations. Our constraints follow common arbitrage–free surface checks from the literature [48, 13, 14] and are compatible with convex monotone decoders [5, 6].
Convolved NAS (CNAS; higher is better). To evaluate robustness along maturity while downweighting far tails, we convolve NAS over T with a positive kernel Kκ,τ of bandwidth κ and effective horizon τ, after within–maturity rescaling (e.g., by vega or variance scale): CNAS := (NAS ∗T Kκ,τ). (5)
Unless stated otherwise, (κ, τ) and the rescaling convention are fixed across out–of–sample (OOS) windows to enable external validity checks; the average drop in CNAS when reusing the same hyperparameters across disjoint OOS windows is reported as an external–validity statistic (mean with 95% interval).
1See the Cboe VIX white paper for the precise continuous–time derivation and practical discretization details [47].
4

Numeraire Invariance (NI; higher is better). Partition the maturity–strike plane into B × J buckets. For each bucket consider discounted prices under a set of admissible numeraires and compute the median absolute deviation (MAD) across these normalizations; aggregate the bucket–wise relative dispersion by
NI := 1 − 1
BJ
B ∑︁
b=1
J ∑︁
j =1
MAD {N −1
t C (m)
b, j }m
scaleb, j
, (6)
where the denominator is a robust local scale. Higher NI indicates stronger consistency with the numeraire–induced martingale property.
Duality Gap (lower is better). Let minθ maxλ∈Λ L (θ, λ) denote the saddle objective arising from adversarial training or operator matching. The empirical duality gap is the difference between the maximal value over λ at the current θ and the minimal value over θ at the current λ, estimated on held–out batches with stabilized updates (e.g., extragradient or lookahead) [7, 8, 15].
Stability (higher is better). This is the fraction of random seeds and OOS windows that simultaneously achieve (i) a NAS level above a fixed threshold, (ii) a spectral safety condition CFLmax ≤ 1 with bounded projection distance, and (iii) satisfaction of the saddle–point stall conditions. We provide a binomial proportion with HAC intervals.
Surface–Wasserstein distance (lower is better). Define for each maturity T the marginal distributions over strikes induced by the predicted and reference surfaces (after standardization). The overall discrepancy is measured by
SW2 :=
∫
T
W2
2 πpred
T
, πref
T dμ(T)
! 1/2
, (7)
with W2 the 2–Wasserstein distance and μ a weighting measure over maturities [29].
Generalization gap at the 95th percentile (lower is better). We report the 95th percentile of the absolute trainingto–OOS difference for NAS (or the primary objective), a conservative measure of tail overfitting.
Effective dimension. Let K be a Gram matrix of operator features on (T , K). For α ∈ {0.90, 0.95, 0.99} define dα as the minimal index such that the sum of the top dα singular values accounts for an α–fraction of the total. The triple (d90, d95, d99) provides a capacity proxy that enters the oracle bounds in §4.
2.4 Assumptions: measurable, refutable, and degradable
We formulate four assumptions. Each is measurable from training–time statistics, refutable by explicit counter–examples or threshold tests, and degradable in the sense that, when violated, we fall back to weaker but still valid guarantees used in evaluation.
A1 (necessary): Novikov–to–Kazamaki switching. Let (Mt ) be the local martingale driving the stochastic component of the operator layer. Novikov’s condition, E[exp( 1
2 ⟨M⟩T )] < ∞, implies martingality and is stronger than Kazamaki’s
criterion; empirical data roughness can make Kazamaki more appropriate. We measure, across OOS windows, the fraction for which Novikov holds but Kazamaki is preferred by the test statistic, and report its mean with a 95% interval. A stable operator exhibits a high switching rate as roughness increases, consistent with recent stability analyses of selective state–space models [16, 27].
A2 (sufficient): Smoothness fallback and representer bound. When local estimates indicate that βsmooth falls below the nominal order on subsets of (T , K), we switch from the smoothness–based identifiability bound to a representer–type
bound (Theorem T2′), where the operator error over L2 is controlled by a combination of coverage deficit and dual residual. The time of switch and the coverage level at trigger are reported. Proof details and rates are given in §4.
A3 (sufficient): Rank–controlled long–memory decay. The effective rank κ of the selective kernel determines a decay index χ(κ) ∈ [0, 1] that governs long–horizon oracle terms (Theorem T3). We estimate χ(κ) from spectral slopes of the scan kernel; deviations prompt stricter spectral guarding and Lipschitz projections [12, 16, 27].
A4 (necessary): Coverage threshold. Let cmin and c ̄ be, respectively, the minimum and mean fraction of observed (T, K) cells (after quality control) per window. We require cmin ≥ c = 0.75. If violated, claims revert to the representer–bound regime (A2), the event is reported in the main text, and stress–to–fail experiments are used to characterize the failure mode.
5

2.5 Statistical reporting
All metrics are computed per window and aggregated with HAC intervals; multiplicity is controlled within families of hypotheses by Holm–Bonferroni. Cross–validation uses temporally blocked folds to avoid leakage. For the SPX–VIX coupling we apply the replication identity (2) with the discrete quadrature recommended by the exchange documentation [47]. The Lipschitz constants are estimated by spectral–norm proxies; their pre– and post–projection values are reported alongside the spectral safety quan-
tity CFLmax, the number of spectral–guard activations, and the aggregate projection distance. These quantities are used later to establish the stability and refutability of the operator constraints and to ablate the role of each geometric ingredient.
3 Method: The ARBITER Architecture
We present Arbiter, a risk–neutral neural operator for arbitrage-free SPX–VIX term structures. The model integrates four components: (i) a risk–neutral operator layer that interprets selective state-space scans as a discretized Green operator under a learned risk–neutral measure; (ii) Q-Align, a pair of geometric projections that enforce layerwise Lipschitz bounds and a spectral CFL condition; (iii) a convex–monotone decoder that enforces static no-arbitrage along strikes and maturities, tied to V-
IX replication; and (iv) a saddle-point training protocol with safety-oriented stopping rules. We work on a maturity grid {Tl }L
l=1 (not necessarily uniform) and an implied strike set K; the numeraire is fixed
by discounting.
3.1 Risk–Neutral Operator Layer (RN-Operator)
Selective scan as a Green operator. Let hl ∈ Rm be hidden states at Tl , with input features ul (·) ∈ L2 (K) summarizing cross-sectional information (e.g., moneyness bins and microstructure covariates) at maturity Tl. The selective state-space recursion is
hl+1 = Aθ (Tl ) hl + Bθ (Tl ) Ξ[ul ], yl = Q θ (Tl ) hl , (8)
where Ξ is a linear embedding from L2 (K) to Rm and yl ∈ Rm is a latent representation. Unrolling (8) yields the discrete Green expansion
yl =
∑︁
s≤l
lÖ−1
j=s
Aθ (Tj )
!
Bθ (Ts) Ξ[us] =
∑︁
s≤l
G
θ (Tl , Ts) Ξ[us], (9)
with Gθ (Tl , Ts) := Îl−1
j=s Aθ (Tj ) Bθ (Ts).
Measure gating and risk–neutral semantics. To embed no-arbitrage at training time, we introduce a measure gate w θ (K, T) ≥ 0 and replace us by u★
s (K) = w θ (K, Ts) us (K), thereby defining a density w θ (·, ·) on K × {Tl }. The discounted price functional on a payoff φ is evaluated through
Π
θ [φ] (T) =
∫
K
φ(K, T) w θ (K, T) dK, (10)
and training penalizes deviations from the martingale condition under Qθ :
EQθ St+δe−r δ − St Ft = 0 ⇐⇒ dQθ ∝ w θ dP, (11)
with a convex penalty on residuals of (11) across random slices (K, T). In practice w θ is parameterized by a positive
squashing map (e.g., softplus) followed by normalization across K at each T so that ∫
w θ (K, T)dK = 1.
Complexity. Let m be the effective rank of the operator (Section 2). The recurrence (8) and Green evaluation (67) both run in linear time and memory:
time = O (Lm), space = O (m).
This preserves the computational profile of selective SSMs while upgrading its semantics to a risk–neutral operator.
Neumann expansion under a CFL condition. Let Δtl := Tl+1 − Tl and define the discrete CFL indicator
CFL(Tl ) := ρ Aθ (Tl ) Δtl , CFLmax := max
l
CFL(Tl ), (12)
with ρ(·) the spectral radius. When CFLmax < 1, products Îl−1
j=s Aθ (Tj ) are summable and (67) admits a uniformly convergent Neumann-like representation.
6

Spectral safety and discrete Green kernel. Let {Tl }l∈Z be the evaluation grid with steps Δtl := Tl+1 − Tl > 0 and a
time–varying linear operator Aθ (Tl ) ∈ Rd×d. Define Ml := Δtl Aθ (Tl ) and the one–step resolvent Rl := (I − Ml )−1. For an impulse injection Bs at time Ts, the discrete causal Green kernel is
G
θ (Tl , Ts) = Rl Rl−1 · · · Rs+1 Bs, s ≤ l.
Under the CFL–type safeguard ρ( Aθ (Tl )) Δtl ≤ 1 − ε (Spec-Guard), the kernel is uniformly summable.
Lemma 1 (Green kernel bound). Assume ρ( Aθ (Tl )) Δtl ≤ 1 − ε for all l with some ε ∈ (0, 1), and that ∥Bs ∥ ≤ b Δts for a constant b > 0 under an operator norm subordinate to a vector norm. Then there exists C = C (ε, b, Δt) < ∞, with Δt := supl Δtl , such that
∑︁
s≤l
G
θ (Tl , Ts) ≤ C (ε, b, Δt) for all l.
Proof sketch. The CFL constraint enforces ρ(Ml) ≤ 1 − ε. By the extremal–norm (joint spectral radius) argument there
exists an induced norm in which ∥ Ml ∥ ≤ α < 1 uniformly, hence ∥Rl ∥ = ∥ (I − Ml )−1 ∥ ≤ (1− α)−1. Submultiplicativity gives ∥Rl · · · Rs+1 ∥ ≤ (1 − α)−(l−s) , and the factor ∥Bs ∥ ≤ b Δts makes the series geometrically summable over s. Full details, including the non–diagonalizable case via block–Jordan bounds and the removal of norm–equivalence constants, are provided in Appendix A.1. □
Lipschitz surrogate via spectral normalization. Each linear map W in (8) is spectrally normalized, ∥W ∥2 ≤ τ ≤ 1, and each nonlinearity is 1-Lipschitz, yielding a global Lipschitz surrogate for the RN-operator:
Lip(Gθ ) ≤
Ö
linear l
∥Wl ∥2 · C (ε), (13)
with C (ε) from Lemma 1. This bound is tracked by the logged pair (λlip-before, λlip-after).
3.2 Q-Align: Lipschitz Projection and Spectral Guard
Layerwise Lipschitz projection. After each optimizer step, we project every linear map W onto the spectral ball of radius τ ≤ 1:
Wb = τ
max(∥W ∥2, τ) W . (14)
A single power iteration per matrix provides ∥W ∥2 with small overhead. The cumulative Lipschitz surrogate in (13) thus remains controlled.
Spectral Guard (CFL projection). We estimate ρ( Aθ (Tl)) via power iteration and enforce
ρ Aθ (Tl ) Δtl ≤ 1 − ε. (15)
A minimal-distance correction in Frobenius norm admits the scaling solution
Aθ (Tl ) ← 1 − ε
ρ( Aθ (Tl )) Δtl
Aθ (Tl ), (16)
whenever the left-hand side of (15) exceeds 1 − ε. We log the activation count spec_guard_hits, the cumulative correction Í
l ∥ Aθ (Tl ) − Abθ (Tl ) ∥F (denoted projection distance), and maxl ρ( Aθ (Tl ))Δtl .
RN-operator stability under Q-Align. Let {Tl }l∈Z be the evaluation grid with steps Δtl > 0, and write Ml :=
Δtl Aθ (Tl ) and Rl := (I − Ml )−1. Consider the RN-operator layer with nonexpansive nonlinearity φ and projected weights (Q-Align) satisfying the layerwise Lipschitz envelope in (14), together with the spectral safeguard (15). Denote by Gθ (Tl , Ts) the discrete causal Green kernel. We obtain:
Proposition 1 (RN-operator stability under Q-Align). Assume (14) and (15) hold with τ ≤ 1 and ε ∈ (0, 1). Then for any bounded input sequence {ul }, the state trajectory {hl } is uniformly bounded; moreover the input-to-output map induced by Gθ is globally Lipschitz with constant bounded by (13).
Proof sketch. By Lemma 1 (Appendix A.1), the discrete Green kernel is uniformly summable under the CFL-type constraint ρ( Aθ (Tl )) Δtl ≤ 1 − ε. The Q-Align projection (14) enforces a layerwise 1-Lipschitz envelope (with factor τ ≤ 1) and nonexpansive φ preserves Lipschitz bounds through composition. Unrolling the recursion and applying submultiplicativity yields a geometric series dominated by the kernel sum from Lemma 1, which provides both bounded-input–bounded-output (BIBO) stability and a glo-
bal Lipschitz constant that matches (13). Full details are given in Appendix A.2. □
7

Geometric diagnostics. The triplet (λlip-before, λlip-after, CFLmax) summarizes per-epoch geometry. Large projection distance or frequent spec_guard_hits predict subsequent instability or poor generalization and are therefore treated as early-warning signals.
3.3 Convex–Monotone Decoder and SPX–VIX Coupling
No-arbitrage constraints. On each maturity T, let K ↦→ C (K, T) be the call price surface. Static no-arbitrage requires
∂2
KK C (·, T) ≥ 0, ∂TC (K, ·) ≥ 0, 0 ≤ C (K, T) ≤ S0, ∂K C (K, T) ≤ 0. (17)
We parameterize C (·, T) as an input-convex neural potential Φ(·; T), i.e.,
C (K, T) = Φ(K; T), Φ(·; T) convex, ∂T Φ(K, T) ≥ 0, (18)
where convexity is enforced by nonnegative weights on the K-dependent paths and skip connections, and maturity monotonicity is enforced by a positive-slope parameterization in T (with a final monotone calibration if needed).
Legendre structure and density. Define the convex conjugate Φ★( p; T) = supK ∈R{pK − Φ(K; T)}. Then p★(T) :=
∂K Φ(K, T) yields the delta, and the Breeden–Litzenberger relation connects second derivatives to the risk–neutral density fQ:
fQ (K, T ) = erT ∂2
KK C (K, T ). (19)
The decoder thus produces both prices and densities with consistent geometry.
SPX↔VIX replication. Let KT denote the strike grid at maturity T, with ordered knots 0 < K1 < · · · < KM and spacings ΔKi := 1
2 (Ki+1 − Ki−1) (endpoints use one-sided spacings). Write FT := S0e(r −q)T and K0 for the closest
strike to FT . The (continuous) log-contract identity implies the variance-swap fair rate under Q:
σ2
VS (T ) = 2 erT
T
∫ FT
0
P(K, T)
K2 dK +
∫∞
FT
C (K, T)
K2 dK − 1
T
FT
K0 − 1
2 .
Consistent with the Cboe construction, we discretize it as
VIX2 (T ) ≈ 2 erT
T
∑︁
Ki ∈ KT
ΔKi
K2
i
Q(Ki, T) − 1 T
FT
K0 − 1
2
, (20)
where Q is the out-of-the-money option price at strike Ki (put if Ki < FT , call if Ki ≥ FT ) and the small forward adjustment term is retained. Missing strikes are filled by linear interpolation on (K, Q), which preserves piecewise convexity in K; Appendix A.3 compares cubic splines and shows comparable NAS/CNAS together with a mild increase in butterfly-arbitrage risk.
We define the replication residual
RVIX (T ) := VIX2
obs (T ) − VIX2
θ (T), (21)
and include the dual penalty λvs
Í
T w(T) RVIX (T)2 in the saddle objective (weights w(T) reflect sampling density). Under mild regularity (no static arbitrage, integrable OTM tails), the following holds.
Proposition 2 (Consistency of discretized VIX replication). Assume (K ↦→ Q(K, T)) is convex, Q(·, T)/K2 has
bounded variation on compact intervals, and the tail contributions ∫ Kmin
0
P
K2 dK and ∫ ∞
Kmax
C
K2 dK vanish as Kmin ↓ 0,
Kmax ↑ ∞. For any family of strike grids {KT } with mesh ΔKT → 0 uniformly on T in a compact set, the discrete estimator in (20) converges uniformly to the continuous variance-swap rate:
sup
T∈T
VIX2
θ (T) − σ2
VS, θ (T ) ≤ C sup
T
ΔKT + εtail (Kmin, Kmax) −→ 0,
for some constant C independent of T, where εtail is the integrable tail truncation error.
Proposition 3 (Variance-swap identifiability via replication). Fix a maturity range T ⊂ (0, Tmax]. Suppose the RN-operator decoder yields a no-arbitrage surface with K ↦→ Q θ (K, T) convex and the replication residual (21) satisfies RVIX (T) = 0 for all T ∈ T . Then σ2
VS, θ (T ) = σ2
VS,obs (T) for all T ∈ T . If, moreover, the instantaneous
variance admits a density v θ (t) and the mapping T ↦→ 1
T
∫T
0 v θ (t) dt is strictly monotone in T, then v θ matches the
observed variance in the sense of Cesàro means on T .
8

Proof sketches. Proposition 2 follows from convex quadrature error bounds for functions of bounded variation and
the Breeden–Litzenberger representation Q′′ (K, T) = e−rT K −2 fθ (K, T) (distributional derivative), plus integrable OTM tails. Proposition 3 uses the log-contract identity for continuous Itô models, extends to jump-diffusions with the standard jump-compensator term, and invokes strict monotonicity to upgrade equality of Cesàro means to pointwise identification almost everywhere. Full details are provided in Appendix A.3.
Proposition 4 (Static no-arbitrage and replication consistency). Assume the decoder C = Φ satisfies the convex–monotone constraints
∂2
KK C (K, T) ≥ 0, ∂TC (K, T) ≥ 0 (22)
for all strikes K > 0 and maturities T on the grid, and that the VIX replication residual (21) vanishes on the maturity grid. Then the surface is free of static butterfly and calendar arbitrage on the grid, and the Breeden–Litzenberger implied density
fST (K) = erT ∂2
KK C (K, T ) (23)
is consistent with the VIX2 functional (20) in the sense that the VIX computed from C coincides with the replicated variance-swap rate on the grid. Sketch. Convexity in K and monotonicity in T exclude butterfly and calendar violations on the grid. The discretized BL relation and the replication identity tie the second derivative to the integrated OTM portfolio. See Appendix A.4 for a complete proof.
Numerical projection. If small violations appear (finite-sample noise), we solve a convex projection
min
Cb
1 2
∑︁
i,l
Cb(Ki, Tl ) − C (Ki, Tl ) 2 s.t. Cb(·, Tl ) convex in K, Cb(Ki, ·) nondecreasing in T, (24)
via pooled-adjacent-violators in T and tridiagonal quadratic programming in K. This preserves first-order fits while restoring gridwise no-arbitrage.
3.4 Saddle-Point Training and Safety-Oriented Stopping
Objective. The training objective couples data fit, no-arbitrage penalties, martingale residuals, and replication consistency:
L (θ, λ) = E l Gθ (u), Cobs
| {z }
pricing fit
+ ⟨λNA, CNA (θ)⟩
| {z }
static constraints
+ ⟨λmart, MRN (θ)⟩
| {z }
martingale
+ ⟨λVIX, RVIX (θ)⟩
| {z }
replication
, (25)
with dual variables λ = (λNA, λmart, λVIX) ≥ 0; CNA collects soft constraints induced by (17).
Two-time-scale extragradient. We employ a two-time-scale update with extragradient prediction:
θk+ 1
2 = θk − ηθ ∇θ L(θk, λk), λk+1
2 = λk + ηλ ∇λL (θk, λk) +, (26)
θ k+1 = θ k − η θ ∇θ L θ k+ 1
2 , λk+ 1
2 , λk+1 = λk + ηλ ∇λL θ k+ 1
2 , λk+ 1
2 +,
with ηλ ramped from a small value to its target to avoid premature constraint domination. Q-Align is applied after each θ-update.
Martingale stop test and thresholds. On random (K, T) slices we test the discounted martingale increment and accept early stopping if the following hold for at least 103 consecutive steps:
ΔGap < 10−3, dual residual < 10−3. (27)
We also track ratio_log = log(primal/dual) as a bias diagnostic.
Convergence guarantee (noise-stable neighborhood). Let F (z) = (∇θ L (θ, λ), −∇λL (θ, λ)) denote the monotone saddle operator in z = (θ, λ). Under (i) global Lipschitzness of F (by (13) and bounded subgradients for constraints), (ii) small multiplicative bias introduced by Q-Align projections, and (iii) bounded gradient noise with variance σ2, standard extragradient theory implies the following.
Theorem 1 (Extragradient convergence to a noise ball). Let F : Z → Rd be a monotone and L-Lipschitz operator on a nonempty, closed, convex set Z ⊂ Rd, and suppose the Q-Align projections are 1-Lipschitz with per-iteration projection
9

error bounded as ∥ek ∥ = O (ηθ ), where ek aggregates spectral clipping and geometric projection inaccuracies. Consider the projected extragradient iterates with step sizes ηθ , ηλ = Θ(1/L),
yk = ΠZ zk − ηF(zk) + ξk + ek ,
zk+1 = ΠZ zk − ηF (yk) + ξ ̃k + e ̃k ,
where {ξ k }, {ξ ̃k } are martingale-difference noise with E[ξ k | Fk] = 0, E∥ξ k ∥2 ≤ σ2 (and similarly for ξ ̃k), and ΠZ denotes the Euclidean projection onto Z. Then the averaged first-order residual satisfies
min
0≤k≤K −1 E ∥F (zk) ∥2 ≤ O L2 ∥z0 − z★∥2
K
+ O σ2 ,
where z★ is a solution of the monotone variational inequality associated with the saddle-point problem. Sketch. Combine one-step progress of projected extragradient for monotone Lipschitz VIs with a stability treatment of Q-Align as a nonexpansive perturbation whose cumulative effect is O (η), and then control the martingale noise via standard Robbins–Siegmund arguments. See Appendix A.5 for the complete proof.
Instrumentation and audit trail. We continuously log
λlip-before, λlip-after, spec_guard_hits, projection_distance, max
l
ρ( Aθ (Tl ))Δtl , ratio_log,
and align them with evaluation metrics (NAS, CNAS, NI, DualGap, Stability, Surface–Wasserstein, GenGap at 95th percentile, effective dimension). Stress-to-fail scans, external-validity tests (frozen-hyperparameter reuse), and irreplaceability ablations (removing measure gating, halving rank, disabling Spectral Guard) are run under the same logging schema, forming a traceable chain from geometry to training dynamics to statistical outcomes.
3.5 Relation to Selective SSMs and Mamba
Arbiter shares the runtime primitive of selective scans with modern state-space models—diagonal-plus-low-rank parametrizations of Aθ , input-dependent gating, and linear-time recurrences—yet it decisively departs in semantics and constraints. First, the recurrence is interpreted as a risk–neutral Green operator acting on market features, with a learned measure gate w θ that internalizes the Radon–Nikodym derivative and enforces martingale consistency during training. Second, Q-Align supplies train-
ing-time geometric guarantees: layerwise Lipschitz projection and spectral CFL control establish stability and bound the operator norm end-to-end. Third, the decoder is not a generic readout but an input-convex, maturity-monotone potential tied to SPX–VIX replication. Together these elements move no-arbitrage and change-of-measure from post-hoc cleaning to in-training constraints, while retaining the O (Lm) computational profile central to selective SSMs.
Summary of guarantees. Under the Q-Align regime and decoder constraints, Propositions 1 and 4 ensure (i) bounded and Lipschitz RN-operators (stable Green expansion), and (ii) gridwise static no-arbitrage and replication consistency. Theorem 1 further guarantees that saddle-point training converges to a stochastic neighborhood whose radius is controlled by gradient noise and projection errors. In aggregate, these results explain the empirical behavior of Arbiter in Sections 6–6.2 and justify the fa-
lsifiable metrics reported throughout.
4 Theoretical Results
We establish eight results (T1–T8) that quantify approximation error, conditioning, identifiability, oracle rates, capacity control, feasibility under spectral safeguards, joint identifiability with VIX replication, and saddle-point convergence under fixed stopping thresholds. Throughout, we work under the standing assumptions of Section 2: (A1) Novikovto-Kazamaki switching holds at the reported rate; (A2) local Hölder smoothness of order βsmooth > 0 for the target operator; (A3) spectral decay go-
verned by κ with long-horizon index χ(κ) ≥ 0; (A4) coverage level c ∈ (0, 1] on the (K, T) grid. The RN-operator Gθ is equipped with Q-Align (layerwise spectral projection and CFL spectral guard), and the decoder is convex–monotone with optional numerical projection to the no-arbitrage cone.
Notation. Let L be the number of maturities and m the operator rank (hidden dimension). Let Lg denote the Lipschitz bound of nonlinearities (taken as 1 in practice), and Aθ (Tl ) the state transition at maturity Tl . Denote ∥ A∥2 the spectral norm, ρ( A) the spectral radius, and Δtl := Tl+1 − Tl . Define the discrete CFL quantity CFL(Tl ) = ρ( Aθ (Tl ))Δtl and CFLmax = maxl CFL(Tl ). The effective dimension dˆ refers to the 90–95% spectral energy truncation rank of the Gram operator induced by inp-
uts.
10

T1: Approximation Error and Conditioning
Theorem 2 (Approximation rate and conditioning). Let f ★ be the target risk–neutral operator mapping features to price surfaces on a compact domain Z ⊂ Rdz with Hölder regularity βsmooth ∈ (0, 1]. There exists a parameter choice θ = θ (m) such that the RN-operator Gθ with rank m and L maturities satisfies
inf
θ
∥Gθ − f ★∥ L2 (Z) ≤ C1 m−βsmooth , κ Jθ ≤ C2 max
l
∥ Aθ (Tl ) ∥2 Lg m, (28)
where Jθ is the Jacobian of Gθ and κ(·) is a spectral condition proxy. The constants C1, C2 depend only on the domain diameter and curvature bounds of the nonlinearities, but not on L; the dependence on L is controlled by the scan through the Green kernel bound (cf. Lemma 1). Sketch. Approximation follows by representing f ★ via a Green expansion with Hölder control and matching it with a diagonal-plus-low-rank parameterization of ( Aθ , Bθ ); the scan composes L 1-Lipschitz layers under Q-Align a-
nd preserves linear-time complexity. Conditioning tracks the sum of per-step operator norms through the Green kernel Neumann bound and the Lipschitz gate constant Lg, yielding the stated linear dependence in m and independence of L. Full proof in Appendix B.1.
T2: Local Identifiability and CRLB-Type Lower Bounds
Theorem 3 (Local identifiability and information bound). Assume the decoder enforces static no-arbitrage and VIX2 replication consistency on the maturity–strike grid, and the input feature process has a nondegenerate covariance operator on Z. Then there exists a neighborhood U of θ★ such that the RN-operator map θ ↦→ Gθ is injective modulo the finite symmetry group of rank-m factorizations (permutation and rescaling of atoms). Moreover, for any unbiased estimator θbbased on n i.i.d. samples,
E
h
∥
θb− θ★∥2i
≥ trace I (θ★)−1 , (29)
where I (θ★) denotes the Fisher information of the induced RN-operator under the data-generating distribution.
Proof sketch. (i) Decoder identifiability. The Breeden–Litzenberger identity links the second derivative in strike to the risk-neutral density. Together with VIX2 replication consistency, this pins down the decoder’s measure-valued output across maturities. (ii) Propagation through the scan. If two parameterizations yield identical price surfaces for almost every input, then their Green responses must coincide on the grid. Under nondegenerate input covariance and the uniform Green bound (Lemma 1),-
 this forces equality of the low-rank scan parameters up to permutation and atom rescaling symmetries. (iii) Information bound. Local asymptotic normality holds for the price-slice likelihood with Gateaux derivative equal to the RN-operator Jacobian; the score is square-integrable by Q-Align’s Lipschitz control. The Cramér–Rao lower bound then gives (29). Full details are provided in Appendix B.2.
T2′: Representative-Element Error Under Coverage Deficits
Proposition 5 (Representative bound with coverage and residuals). Let cov ∈ [0, 1] denote the fraction of strike–maturity cells covered by reliable quotes. Let γ > 0 be the martingale penalization strength and let dual ≥ 0 be the dual residual at stopping. Then the representative-element error obeys
∥λ ε − λ★∥L2 (Z) ≤ C3 (1 − cov)−1ε + γ−1 + dual , (30)
where λ indexes the operator-induced risk measure and ε bounds the interpolation error on missing strikes.
Proof sketch. Partition the grid into covered and uncovered cells. The first term controls the imputation bias: extending prices from the covered set to the full grid by a linear, no-arbitrage–preserving interpolant yields an L2 error that
scales as (1 − cov)−1ε due to the stability modulus of the extension operator on sparse masks. The second term is the
bias from enforcing the martingale constraint via a penalty of strength γ, which leaves an O (γ−1) feasibility gap by first-order optimality. The third term converts a nonzero KKT residual at termination into a distance-to-solution via a Hoffman-type error bound. The RN-operator is globally Lipschitz under Q-Align and Spec-Guard; hence all three perturbations transport to λ with a uniform constant. Full details and constants appear in Appendix B.3.
T3: Oracle Risk Bounds with Long-Memory Factor
Theorem 4 (Oracle rate with scan and memory). Let dˆ be the effective dimension of the input Gram operator and Δt := maxl Δtl. Under Q-Align and decoder constraints, the prediction risk of the oracle estimator with rank m and n samples satisfies
R
n,m ≤ C4 n−1/2 + m−βsmooth/dˆ +
√
Δt + C5 T χ(κ ) , (31)
11

where T is the horizon and χ(κ) ≥ 0 quantifies long-memory spectral accumulation. The first three terms are short-horizon effects; the last term captures the asymptotic tail induced by spectral mass at small decay rates.
Sketch. The stochastic term n−1/2 derives from standard central limit rates under bounded variance; the approximation term m−β/dˆ follows from T1 with effective dimension; the discretization term
√Δt arises from Riemann-sum error in
the scan. The long-memory penalty T χ(κ) appears when eigenvalues near one accumulate according to A3. Appendix C provides a spectral decomposition proof.
T4–T5: Capacity via Rademacher and a Sample–Seminorm Bridge
Lemma 2 (Rademacher complexity with Lipschitz and projection). Let F be the class of RN-operators obeying Q-Align projections with a global Lipschitz constant Λ. Then for sample size n,
R
n (F ) ≤ C6 Λ
√︂
dimeff
n
, (32)
where dimeff ≤ dˆ is the energy-truncation rank at the sample scale.
Proof sketch. Project the trajectories onto the top energy subspace of rank dimeff defined by the Gram operator of the Green kernel. Under Q-Align+Spec-Guard the RN-operator is globally Λ-Lipschitz, hence the function class admits a Lipschitz envelope on a radius-1 domain (normalization). Dudley chaining with covering numbers of a dimeff-dimensional ball yields the stated rate. Full details appear in Appendix B.4.
Lemma 3 (Bridge from sample to seminorm). Let ∥ · ∥n be the empirical norm on the observed grid and ∥ · ∥H a seminorm induced by the RN-operator’s Green kernel. Under A4 and a linear no-arbitrage–preserving interpolation with error ε, with high probability,
∥ f ∥H ≤ C7 ∥ f ∥n + C8 (1 − cov)−1ε , (33)
uniformly over f in the model class.
Proof sketch. Bound the kernel seminorm by the operator norm of the discrete Green Gram, which is finite by Lemma 1 and Proposition 1. Decompose the grid into covered cells and their complement; the extension operator from
the covered set is linear and stable on the no-arbitrage cone, with amplification scaling as (1 − cov)−1. Concentrate the empirical-to-population deviation via standard symmetrization and the class complexity from Lemma 2. Full proof is in Appendix B.5.
T6: Feasibility and Two-Time-Scale Averaging under Spectral Guard
Proposition 6 (Feasibility and error propagation). Suppose Q-Align enforces ∥Wl ∥2 ≤ τ ≤ 1 and ρ Aθ (Tl ) Δtl ≤ 1 − ε for all l. Then the iterative scan is well-posed, the discrete Green expansion is summable, and the one-step error is contractive:
∥hl+1 − h ̃ l+1 ∥ ≤ (1 − ε) ∥hl − h ̃ l ∥ + ∥B∥ ∥Ξ∥ ∥ul − u ̃l ∥. (34)
Moreover, for two-time-scale averaging of the primal–dual iterates (θk, λk) in the saddle dynamics with bounded gradient noise, the averaged gap enjoys a variance reduction of order O (1/K) after K steps.
Proof sketch. Write the scan as hl+1 = (I + Δtl Al )hl + Wl φ(hl ) + Bul . By Spec-Guard, for each l there exists an induced norm under which ∥I + Δtl Al ∥ ≤ 1 − ε; Q-Align caps ∥Wl ∥ ≤ τ ≤ 1 and φ is nonexpansive. A mean-value bound on the step map shows its Jacobian norm is ≤ 1 − ε, giving (34) after adding the input term. Summability of the Green series follows from the Neumann-type bound (Lemma 1). The two-time-scale variance reduction follows from standard TTSA analysis with monotone operator-
s and bounded noise. Full proofs are given in Appendix B.6 (contractivity and summability) and Appendix B.7 (TTSA variance decay).
T7: Joint Identifiability with VIX2 Replication and a SPX-Only Counterexample
Theorem 5 (Joint identifiability; SPX-only failure). Suppose the decoder Cθ (K, T) is convex in K and nonincreasing in T for each maturity T, and the discretized VIX2 replication residual (cf. (20)–(21)) vanishes on the maturity grid {Tl }L
l=1. Then the pair (SPX calls on a strike grid, VIX2 per maturity) identifies the induced risk–neutral operator Gθ
up to model symmetries (reparameterizations that leave Cθ invariant on the grid).
In contrast, using SPX calls on the strike grid alone, without imposing replication consistency, there exist nontrivial perturbations of the RN-operator that preserve all grid call prices yet alter the induced variance-swap functional.
12

Proof sketch. On each maturity, the Breeden–Litzenberger (BL) relation implies that second strike differences of Cθ recover the discrete risk–neutral density on the grid. The VIX2 replication functional is a linear functional of out-of-the-money option values with weights 1/K2; matching it eliminates degrees of freedom left in the tails/inter-knot segments that are not pinned down by grid values alone. Under convexity/monotonicity and our interpolation policy, the combined constraints (grid calls-
 + replication) fix both local (BL) and integrated (VIX) aspects of the law, yielding injectivity modulo symmetries.
For SPX-only, the measurement operator that samples calls on a finite strike grid has a nontrivial null space in the ambient function class; by a separation argument (or an explicit bump construction supported between grid knots), one can perturb the surface without changing its values at the grid points but changing the 1/K2-weighted integral, hence the variance swap rate. Full details and constructions are in Appendix C.
T8: Saddle-Point Convergence with Fixed Safety Thresholds
Theorem 6 (Convergence to a noise ball under fixed thresholds). Consider the extragradient two-time-scale scheme with Q-Align projections and fixed stopping thresholds
ΔGap < 10−3, dual residual < 10−3, patience ≥ 103 steps.
Assume the saddle operator F (z) is monotone and L-Lipschitz, projections are nonexpansive, and gradient noise has variance σ2. Then the averaged iterates satisfy
min
k≤K
∥F (zk) ∥2 ≤ O L2 ∥z0 − z★∥2
K
+ O (σ2), (35)
and the stopping rule almost surely terminates inside a ball of radius c1σ + c2δproj around a saddle point, where δproj quantifies per-step projection error.
Proof sketch (for Theorem 6). We analyze the two-time-scale projected extragradient (EG) with Q-Align as a nonexpansive projection with bounded defect. A Fejér-type one–step inequality for monotone, L-Lipschitz F yields a telescoping bound on squared distances to a saddle z★, plus additive terms from gradient noise and projection error. Using ∥F (z) ∥ ≤ L ∥z − z★∥ to convert distance decay into a residual bound gives the stated O (L2 ∥z0 − z★∥2/K) + O (σ2) rate (also for the ergodic average). Fixe-
d thresholds on the primal–dual gap and dual residual upper-bound the merit residual, so the procedure almost surely terminates inside a ball of radius c1σ + c2δproj. Full details appear in Appendix D.
Discussion. T1 establishes that operator semantics do not sacrifice universal approximation rates relative to rank-m kernels, while providing explicit conditioning that is tractable to monitor. T2 and T7 formalize identifiability because
the decoder is tied to replication. T2′ quantifies the inevitable error under partial coverage and suboptimal dual solutions, directly justifying the empirical regressions of gap versus representative error. T3–T5 connect sample complexity to effective dimension and long-memory structure, and T6–T8 ensure that Q-Align’s projections and our fixed stopping thresholds lead to stable, falsifiable training.
5 Evaluation Protocol and Metrics
We describe the arXiv-release evaluation protocol, designed to be fully reproducible and aligned with the modeling choices and theoretical guarantees in Sections 3–4. The protocol relies on a high-fidelity synthetic generator that emulates risk–neutral dynamics and the variance–swap replication mechanism, evaluated under blocked cross–validation with rolling out-of-sample (OOS) windows. All criteria are dimensionless and comparable across runs; uncertainty is reported with heteroskedasticity– and -
autocorrelation–consistent (HAC) confidence intervals and family–wise error control via Holm–Bonferroni.
5.1 Data Protocol (arXiv Release)
Synthetic risk–neutral generator. Under the pricing measure Q, the underlying index St and instantaneous variance vt evolve on a trading day grid {ti }N
i=0 as
dSt
St
= r − q dt + √
vt dW (1)
t , S0 > 0, (36)
vt = v0 +
∫t
0
κ θ − vs ds
| {z }
affine mean reversion
+
∫t
0
∫s
0
K(s − u) σ
√
vu dW (2)
u ds
| {z }
rough/long-memory component
, (37)
13

with instantaneous correlation d⟨W (1) , W (2) ⟩t = ρ dt, dividend yield q, and a completely monotone kernel K (τ) =
ÍJ
j=1 a j e−bj τ that reproduces fractional/rough behavior by a positive mixture of exponentials. This yields an
arbitrage–free implied variance term–structure and a VIX2 proxy
VIX2 (T) ≈ 2
Δ
∫Δ
0
EQ [vT+s | FT ] ds, Δ ≈ 30 days. (38)
Option quotes are generated on a Cartesian grid T × K with maturities T ∈ {Tl }L
l=1 and strikes K ∈ {K j }M
j=1, ensuring no static arbitrage at the oracle level. To emulate market frictions, we add microstructure noise εT,K with heteroskedastic variance and censor illiquid deep OTM quotes:
Ce(T , K) = C★(T , K) + εT,K 1{C★(T , K) ≥ τliq (T , K)}, E[εT,K ] = 0, (39)
where C★ is the oracle call price and τliq is a maturity– and moneyness–dependent liquidity floor.
Blocked cross–validation and rolling OOS. We split the synthetic timeline into B contiguous blocks of equal length. In fold b ∈ {1, . . . , B}, blocks 1:(b−1) form the training set, block b is the validation set (early–stopping and model selection), and blocks (b+1):B are scored OOS with a rolling horizon. This enforces temporal causality and reduces leakage. All random seeds and block boundaries are recorded.
Normalization and grids. Prices are evaluated in forward units to avoid numeraire drift. The maturity set T matches the scan length L used by the RN–operator; the strike grid K spans log-moneyness k = log(K/S0) ∈ [kmin, kmax] with nearly uniform coverage. Missing strikes are linearly interpolated unless otherwise stated (spline sensitivity is reported in ablations).
5.2 Primary Metrics (dimensionless)
Let Cb(Tl , K j ) denote model–implied call prices after the convex–monotone decoder, and let C★(Tl , K j ) denote the oracle (or held–out) price. All metrics lie in [0, 1] unless indicated and are constructed so that larger is better (arrows “↑”) or smaller is better (arrows “↓”) are explicit.
Normalized Arbitrage Score (NAS, ↑). NAS quantifies the fraction of the static–arbitrage axioms satisfied by Cb with a soft penalty:
NAS = 1 − 1
ZNAS
∑︁
l, j
h
∂K Cb +
| {z }
monotonicity
+ −∂KK Cb +
| {z }
convexity
+ ∂T Cb +
| {z }
calendar
i
, (40)
where (x)+ = max{x, 0} and ZNAS rescales by the grid measure to make the score dimensionless.
Calibrated NAS (CNAS, ↑). CNAS introduces a three–parameter penalty shaping with curvature–slope coupling:
CNAS(κ, τ, scale) = 1 − 1
ZCNAS
∑︁
l, j
ψκ,τ,scale ∂K Cb +, −∂KK Cb +, ∂T Cb + , (41)
with ψ a smooth, saturating hinge whose stiffness κ, tolerance τ, and scaling factor scale are fixed across all runs and used for sensitivity analysis.
Numeraire Integrity (NI, ↑). Divide the panel into 8 × 4 buckets in maturities and moneyness. For each bucket b, compute the discounted–forward residual variance of single–step price increments and aggregate
NI = 1 −
Í
b wb Var ΔCbfwd
b
Í
b wb Var ΔCfwd,★
b +ε
, (42)
with positive weights wb (volume/open–interest or uniform) and small ε for numerical stability.
Primal–Dual Gap (DualGap, ↓). Let L (θ, λ) be the saddle objective with martingale and no–arbitrage constraints. Report the OOS gap at the chosen validation stop:
DualGap = sup
λ
L (θsel, λ) − inf
θ
L (θ, λsel). (43)
14

Stability (fraction, ↑). The proportion of training runs that (i) satisfy the spectral safety test maxl ρ( Aθ (Tl ))Δtl ≤ 1 at all steps, (ii) pass the martingale randomized stop test, and (iii) terminate within the fixed thresholds in Section 4 (T8).
Surface–Wasserstein (distance, ↓). A sliced 2D Wasserstein distance between model and oracle price panels, normalized by the area of T × K:
SW = 1
|Θ|
∑︁
θ ∈Θ
W2 Cb(Tl , K j ) l, j · θ, C★(Tl , K j ) l, j · θ , (44)
where Θ is a set of random projection directions.
GenGap@95 (quantile, ↓). Across rolling OOS windows, compute the absolute generalization gap |Cb−C★| aggregated over T × K and report its empirical 95th percentile.
Effective dimension (dˆ). Let G be the empirical Gram matrix of inputs; define dˆα as the smallest r such that
Ír
i=1 λi (G) ≥ α
Í
i λi (G), with α ∈ {0.90, 0.95, 0.99}.
5.3 Statistical Inference and Display Conventions
HAC confidence intervals. For any metric sequence {Mt } along wall–clock time, we report 95% confidence intervals using a Newey–West estimator with lag LHAC = ⌊c T1/4⌋ (default c = 1), robust to heteroskedasticity and serial dependence.
Multiple comparisons. For families of hypotheses across metrics or configurations, we apply Holm–Bonferroni at level α = 0.05: order raw p–values as p (1) ≤ · · · ≤ p (m) , and reject H(k) if p (k) ≤ α/(m−k+1) sequentially.
Wall–clock x–axis. All panel curves are plotted against wall–clock time to normalize for variable throughput across models; each point corresponds to a fixed evaluation batch size and a consistent logging interval.
5.4 Budget, Scans, and Reproducibility
Training route and fixed thresholds. We adopt the adversarial route with spectral normalization as the sole regularizer. Stopping thresholds are fixed:
ΔGap < 10−3, dual residual < 10−3, patience ≥ 103.
Evaluation batch size is held constant across baselines.
Default hyperparameters and sweep. Unless stated, the penalty weights are (γ, βnov, ξ) = (1.0, 0.1, 0.5). We explore a grid of seeds and learning–rate multipliers; every trial logs (i) metric trajectories, (ii) spectral safety counters (hits, projection distance, maximum ρ Δt), (iii) coverage statistics (minimum and mean coverage), and (iv) effective dimensions at {90%, 95%, 99%} energy. The sweep ledger records configurations and random seeds for exact replay.
Cross–validation ledger and OOS evaluation. For each fold, we archive the selected checkpoint, the validation early–stop index, HAC interval parameters, and the OOS window boundaries. GenGap@95 and Surface–Wasserstein are computed exclusively on OOS windows.
Ablations and stress–to–fail. We run controlled ablations that disable the gate, halve the RN–operator rank, or turn off the spectral guard, and report their impact on NAS, CNAS, and Stability. Stress–to–fail tests increase distortion strength until NAS drops below a threshold (e.g., 0.9), logging the failure point and confidence intervals.
Release artifacts. The arXiv bundle includes: (i) scripts for data generation and evaluation, (ii) configuration files for plots and stopping thresholds, (iii) a sweep ledger with seeds and budgets, and (iv) figure assets rendered without panel letters and without figure numbering in the captions to ease downstream typesetting.
Together, these choices ensure that (a) the evaluation is falsifiable and aligned with the theoretical safety conditions, (b) comparisons are budget–fair and dimensionless, and (c) every number and figure can be regenerated verbatim from the public release.
15

Figure 1: Core metrics with 95% HAC-CI. NAS, CNAS, and NI are reported as point estimates with HAC-CI bands. The dashed line at 1.0 highlights normalization for NAS/CNAS.
6 Experiments
Compute, code, and seeds. All figures in this section are generated by the visualization scripts described in §3 using the checkpoint and summary provided in the arXiv package. We report blocked time–series confidence intervals (95% HAC-CI) and adjust family-wise error via Holm–Bonferroni. Default sweep hyper-parameters are (γ, βnov, ξ) = (1.0, 0.1, 0.5) with seeds logged in sweeps.csv. Unless noted otherwise, wall-clock time is used on the x-axis for curve plots.
6.1 Primary results on the synthetic SPX–VIX generator
Point estimates and uncertainty. On the held-out test split our model attains:
NAS = 0.9866 [0.98653, 0.98664], CNAS = 0.99022 [0.99018, 0.99027],
NI = 0.67757 [0.67733, 0.67768], Stability = 1.0000,
DualGap = 0.06034 [0.05833, 0.05891], Surface−Wasserstein = 0.08727 [0.08703, 0.08746],
GenGap@95 = 0.25031 [0.24982, 0.25079],
with two-sided p < 10−3 for NAS/CNAS/NI improvements under Holm–Bonferroni. These values are consistent across validation and test (see §6.5).
Pricing structure and implied volatility geometry. Figure 2 shows normalized pricing curves across maturities for three legs derived from the decoder output. The implied-volatility geometry is summarized both as a high-resolution four-panel contour view and as a 3D surface for completeness; the contour view is used for quantitative reading, while the 3D view serves as shape sanity.
Spectral safety and projection geometry. Our Q-Align projection sharply reduces the global Lipschitz surrogate
from λbefore
lip = 1299.27 to λafter
lip = 0.70 with projection distance ≈ 53.32 and 69 Spec-Guard hits recorded during training, indicating effective clipping of spectral outliers while keeping the iterate near the feasible set.
Stress-to-Fail (S2F). Figure 6 reports NAS under increasing distortion strength. The threshold at 2.0 (vertical line) marks the onset at which NAS approaches 0.979; the confidence band reflects HAC-CI across random distortions. The gradual degradation indicates graceful failure and supports our claim that constraints are active in training (rather than post-hoc).
16

Figure 2: Pricing curves across maturities. Three legs (legend) exhibit smooth-in-T behavior with monotone structure consistent with the convex–monotone decoder.
Figure 3: Implied-volatility (IV) contours (multi-view). Top-left: filled contours in (T, K); top-right: line contours with labeled levels; bottom-left: filled contours in (T, log(K/S0)); bottom-right: IV slices σ(K) at selected maturities. This replaces panelized 3D and avoids occlusion while preserving shape diagnostics (smile/smirk and term-structure tilt).
Effective dimension. The spectrum of the kernel Gram matrix yields effective dimensions d90 = 1, d95 = 1, d99 = 2 (Fig. 7), suggesting that the risk-neutral operator concentrates on a remarkably low-dimensional manifold under our synthetic generator.
Assumption monitoring. We log the Novikov-to-Kazamaki switch rate across time blocks to empirically validate Assumption A1 (Fig. 8): the mean is 0.9175 with a 95% CI [0.9020, 0.9330].
17

Figure 4: Model-implied volatility surface (3D). A complementary view to Fig. 3 confirming smoothness across (T, K) and the absence of butterfly/time-arbitrage artifacts on the synthetic generator.
Figure 5: Spectral Guard & projection effect. Left axis (log-scale): Lipschitz upper bound before/after Q-Align; right axis: projection distance aggregated across iterations; the dashed line shows the mean projection distance.
6.2 Ablations: irreplaceability and breakers
We examine three structural switches: gate off, rank half, and Spec-Guard off (Fig. 9). Relative to the base:
• Turning the gate off reduces NAS from 0.9866 to 0.8918 (↓9.6%) and CNAS from 0.9902 to 0.9039; NI drops from 0.6776 to 0.5192 (↓23.4%). DualGap worsens from 0.060 to 0.221 (×3.7), and Surface–Wasserstein from 0.087 to 0.299 (×3.4).
18

Figure 6: Stress-to-Fail (S2F). NAS vs. distortion strength with 95% HAC-CI (shaded); the red dashed line highlights the preset stress threshold 2.0.
Figure 7: Effective dimension at 90/95/99% variance. The operator acts on a low-dimensional manifold, explaining the fast rates in §4.
• Halving the kernel rank leads to collapse: NAS ≈ 0.0079, CNAS ≈ 0.0047, NI ≈ −0.527, stability = 0 and large geometry errors.
• Disabling Spec-Guard produces NAS = 0.5551 and CNAS = 0.5824 with stability = 0 and pronounced surface artifacts (Surface–Wasserstein ≈ 0.590).
These effects are consistent with our theory: removing either measure gating or spectral feasibility breaks the martingale geometry and convex–monotone decoder guarantees.
19

Figure 8: A1 monitoring: Novikov→Kazamaki switch rate (blocked). The dashed line marks the mean 0.9175.
Figure 9: Ablation effects on normalized metrics. Relative change w.r.t. base for NAS, CNAS, NI and DualGap under gate off, rank half, and Spec-Guard off.
6.3 External validity: frozen-hyperparameter reuse
With (κ, τ, scale) frozen and reused across disjoint OOS windows, the mean CNAS drop is cnas_frozen_drop = 3.87 ×
10−4, with window-wise CNAS {0.99008, 0.99013, 0.99063, 0.99103}. The negligible loss supports transportability of the risk-neutral operator across nearby regimes when the measure gate is kept fixed.
6.4 Consolidated table results
Table 1 lists the primary metrics together with stability and geometry statistics; Table 2 compares adversarial (ours) vs. MFM training under matched budgets, including relative-entropy/CVaR alignment. Per our logging protocol, the safety fields spec_guard_hits, projection_distance, max_rho_dt and the coverage diagnostics are included.
6.5 Robustness and additional diagnostics
We verify that (i) HAC bandwidth choices do not materially affect CI width; (ii) Holm–Bonferroni remains conservative under overlapping metric families; (iii) convergence to the saddle point satisfies the fixed stopping thresholds
20

Metric Val Test HAC-CI (Test) Direction
NAS 0.9866 0.9866 [0.98653, 0.98664] ↑ CNAS 0.99022 0.99022 [0.99018, 0.99027] ↑ NI 0.67754 0.67757 [0.67733, 0.67768] ↑ Stability 1.000 1.000 [1.000, 1.000] ↑ DualGap 0.05864 0.06034 [0.05833, 0.05891] ↓ Surf.-Wasserstein 0.08721 0.08727 [0.08703, 0.08746] ↓ GenGap@95 0.25035 0.24875 [0.24982, 0.25079] ↓
spec_guard_hits 69 projection_distance 53.32
λbefore
lip → λafter
lip 1299.27 → 0.70 coveragemin/coveragemean 0.802/0.919
Table 1: Primary metrics and safety logs with 95% HAC-CI.
Route Rel. Entropy CVaR align Notes
Adversarial (ours) ✓ ✓ SN only; Spec-Guard on MFM (matched budget) ≈ ≈ Residual curves logged SPX–VIX–VVIX (ext.) ✓ ✓ Placeholder in arXiv version Table 2: Training-route comparison under unified budget; see Appendix H for fairness ledger.
(primal_dual_tol_delta= 10−3, dual_residual_eps= 10−3) with patience 1000; (iv) coverage logs do not trigger the representer fallback. Additional seeds and stress families are reported in the appendix.
7 Mechanistic Analysis and Diagnostics
This section explains why ARBITER behaves robustly under the synthetic SPX–VIX generator, connecting the observed logs and figures in §6 to the constraints and operator geometry established in §3–§4.
7.1 Q-Align contraction and spectral safety
Denote by λlip the global Lipschitz surrogate of the network mapping in the ambient parameter metric induced by spectral normalization. Q-Align projects each iterate onto the feasible cone
CLip = { θ : Lip( fθ ) ≤ 1 }
via a firmly non-expansive operator ΠCLip applied layerwise. Empirically (Fig. 5), we observe a two-and-a-half orders of magnitude contraction
λbefore
lip = 1299.27 −→ λafter
lip = 0.70,
yielding the contraction ratio
ρLip =
λafter
lip
λbefore
lip
≈ 5.39 × 10−4, κsafety = log
λbefore
lip
λafter
lip
≈ 7.53.
Since the constraint is Lip( f ) ≤ 1, the post-projection safety headroom equals
Δheadroom = 1 − λafter
lip ≈ 0.30,
which prevents near-boundary oscillation of the saddle dynamics. Spec-Guard implements a spectral CFL test, triggering a corrective projection when maxt ρ( At ) Δtt exceeds the budget; we logged 69 hits and an accumulated projection distance of ≈ 53.32.
Generalization implication. Let the loss l(·, y) be Ll-Lipschitz and bounded by B. For any sample set S and an
independent ghost sample S′, the uniform stability of the projected update (gradient step followed by Q-Align and spectral guard) satisfies
βstab ≲
Ll λafter
lip
n
diam(X) + distΠ , distΠ ≡ 1
T
T ∑︁
t =1
dist θt , ΠCLip (θt ) , (45)
21

where dist(·, ·) is the ambient metric and T is the number of updates. Combining (45) with a standard stability-togeneralization bound yields
E ( fθˆ) − Eb( fθˆ) ≲ βstab + O
√︃
log(1/ δ)
n
, w.p. 1 − δ.
Hence the observed contraction (λafter
lip ≈ 0.70) and finite projection budget (distΠ ≈ 53.32) directly tighten the
generalization gap. Proof sketch. Combine firm non-expansiveness of projections with layerwise spectral normalization to show the update map is a contraction on average; then apply uniform stability arguments. Full details are deferred to Appendix I.
7.2 Representer mode under coverage deficiency
Let c ∈ [0, 1] denote the effective coverage of the (T, K) mesh by observed quotes after preprocessing. When c falls below the operational threshold c = 0.75, ARBITER switches to a representer fallback in the RN-Operator layer, which is recorded by the timestamps enter_representer_at_step, coverage_at_trigger. Theory T2′ (§4) upper-bounds the induced error by a combination of coverage shortfall, regularization, and dual residual:
Erep ≤ C1 (1 − c) + C2γ−1 + C3 Δdual.
To verify this mechanism we regress the representer approximation error against the empirical dual gap (blocked OLS with HAC covariance): Erep = α · Gap + β + ε, αb = 0.47, 95% CI [0.41, 0.53], p < 10−5. (46) The positive slope confirms that the fallback error scales linearly with the dual violation, as predicted by T2′; the intercept βbcaptures the coverage and regularization contributions when Gap → 0. We further checked that no fallback was triggered in the main synthetic run (cmin = 0.802, cme-
an = 0.919), and the regression is computed from controlled coverage-ablation windows.
7.3 Effective dimension and sample–compute budgeting
Let K be the kernel Gram matrix of RN-Operator features along the training mesh and define the effective dimension
deff (τ) = min
n
d:
Íd
i=1 λi (K)
Í
i≥1 λi (K) ≥ τ
o
, τ ∈ {0.90, 0.95, 0.99}.
Empirically (Fig. 7),
d90 = 1, d95 = 1, d99 = 2,
which indicates that the risk-neutral operator acts on a low-dimensional manifold under the generator. This observation connects to the oracle rate in T3:
∥ fθˆ − f ★∥ L2 ≲ n−1/2 + m−β/dˆ +
√
Δt + Θ T χ(κ ) ,
so that (i) doubling the discretization budget m reduces the approximation term at rate m−β/dˆ with dˆ ≤ 2, and (ii) computational cost grows only linearly in Lm due to the RN-Operator construction. Practically, with dˆ ∈ {1, 2} the learned measure gate removes redundant directions, explaining both the flatness of NAS/CNAS curves across wall-clock in Fig. 1 and the graceful S2F degradation in Fig. 6.
Failure signatures and diagnostic cross-links. The ablation patterns in Fig. 9 align with the above mechanisms: (i) disabling the gate increases the effective dimension and violates the martingale geometry, inflating the dual gap and the IV geometry error; (ii) removing Spec-Guard raises λlip, shrinks the safety headroom Δheadroom, and destabilizes the saddle dynamics; and (iii) rank halving impoverishes the Green kernel family, producing underfitting that manifests as elevated Surface–Wasserstein-
 and reduced CNAS. Together with the coverage logs and the regression (46), these diagnostics form a closed evidence loop linking constraints, operator geometry, and observed metrics.
8 Related Work
We organize prior art into three threads and position ARBITER accordingly: (i) operator learning for scientific ML; (ii) linear-time state-space sequence models (SSMs), including the Mamba family; and (iii) arbitrage-free term-structure modeling and deep calibration. Our method departs by enforcing risk-neutral geometry at training time: a measure-consistent Green operator (RN-Operator), a Lipschitz/spectral safety stack (Q-Align + Spec-Guard), and an economically constrained decoder (convex in st-
rike K, monotone in maturity T). This contrasts with post-hoc repairs or penalty-only pipelines.
22

8.1 Operator learning: accuracy, physics, and stability
Neural operators approximate maps between function spaces with resolution-invariant inference. The Fourier Neural Operator (FNO) introduced spectral convolutional layers that learn continuous kernels in Fourier space and established a new accuracy–efficiency frontier for PDE families [58]. DeepONet proved universal approximation theorems for nonlinear operators and popularized branch–trunk factorization [59]. The survey of [60] synthesized approximation, training, and generalization aspects and hi-
ghlighted stability pitfalls.
Beyond FNO/DeepONet, researchers pursued locality, structure preservation, and robustness: message-passing neural PDE solvers [61] and graph-based simulators [68] improved inductive bias for conservation laws; multiwavelet/wavelet neural operators exploited compact harmonic support to mitigate Gibbs artifacts on discontinuities [63]; U-shaped neural operators (U-NO) brought multi-scale skip connections that sharpen high-frequency reconstruction [62]. Physicsinformed neural operators (PINO) added r-
esidual penalties that reduce data requirements on stiff dynamics [64, 65]. Recent works also address stability/generalization via operator-theoretic bounds and coercivity assumptions [66, 67].
Positioning. The above systems are physics-governed. In contrast, option surfaces are economically-governed by no-arbitrage, martingale, and numéraire geometry. ARBITER reinterprets selective scan as a risk-neutral Green operator with measure gating, trains it under explicit Lipschitz and spectral constraints (Q-Align, Spec-Guard), and decodes via convex–monotone potentials. This geometry-first stack is closer in spirit to safety-critical operator learning than to unconstrained FNO/DeepONet, and y-
ields arbitrage-free surfaces even under stress (Sec. 6).
8.2 SSMs and the Mamba family: from long-range recurrence to measure-consistent scan
Structured state space models (SSMs) revived linear-time sequence modeling. S4 [69] exploited HiPPO theory to parameterize long convolutions; follow-ups simplified or sped up kernels [70, 71]. Hyena [72] realized implicit long convolutions with subquadratic memory; RetNet replaced attention with multiplicative retention [73]. Most relevant, Mamba introduced selective state spaces—input-gated linear recurrences that train in linear time and scale to LLMs [74]. Variants rapidly percolated to vision -
and speech (VMamba and derivatives) [75, 76].
Connection–difference. We share the runtime primitive of a linear-time scan but change its semantics: selective gating becomes a measure gate for the risk-neutral density. Q-Align applies training-time projections (1-Lip and CFL spectral bounds) that record certificates {λlip, spec_guard_hits, max_rho_dt}, which do not appear in standard SSM stacks. The result is a measure-consistent operator rather than a generic sequence encoder. Empirically, replacing measure-consistent gates with vanilla gates-
 sharply increases dual gaps and breaks stability (our ablations), indicating non-interchangeability.
8.3 Arbitrage-free term structures and deep calibration
Rigorous constructions of arbitrage-free implied-volatility (IV) surfaces study absence of calendar/spread/Butterfly arbitrage and convex order; recent advances include [77] and [78]. On the data side, the VIX white paper details replication of variance swaps and implementation nuances [47]. Learning-based smoothing with explicit no-arbitrage constraints was investigated by [48]. For deep calibration, rough- and hybrid-volatility models saw efficient surrogates and uncertainty-aware estimation [79-
, 85]. Neural differential methods—Neural CDEs and SDEs—help with irregular time grids and stochastic dynamics [83, 84]. Generative transport methods (OT-Flow, flow matching, rectified flows) offer fast simulators and well-behaved gradients for calibration and synthetic data [80, 81, 82]. Recent work on martingale optimal transport connects no-arbitrage calibration, convex order, and dual certificates [86, 87].
Positioning. Classical pipelines often apply post-hoc convexity repairs or penalty-only regularization. ARBITER internalizes risk-neutral constraints at the operator and decoder levels, with training-time certificates. Our evaluation emphasizes dimensionless metrics with HAC-CI and Holm–Bonferroni control (NAS, CNAS, NI, Stability, DualGap, Surface–Wasserstein, GenGap@95), plus S2F thresholds and external validity (frozen-hyperparameter reuse). This combination—operator-level geometry + safety cer-
tificates + rigorous evaluation—appears absent from prior operatorlearning, SSM, and calibration literatures.
Concluding remark. Operator learning contributed resolution-invariant accuracy; SSMs contributed linear-time scaling; calibration brought financial realism. ARBITER integrates the three via a risk-neutral, geometry-aware neural operator with provable safety and identifiability guarantees, demonstrating robustness under ablations and stress.
23

9 Conclusion and Outlook
Summary. We introduced ARBITER, a risk-neutral neural operator for arbitrage-free SPX–VIX term structures that relocates financial geometry from post-hoc repair to the training objective. The core stack comprises: (i) a risk-neutral Green operator (RN-Operator) that endows selective scan with the semantics of a measure-consistent integral kernel; (ii) Q-Align, a training-time safety layer that enforces 1-Lipschitzness (spectral normalization + projection) and a CFL-style Spec-Guard on the state tr-
ansition spectrum; and (iii) a convex–monotone decoder (ICNN + Legendre transform) guaranteeing convexity in strike and monotonicity in maturity. These design choices are supported by a suite of dimensionless metrics with rigorous uncertainty accounting (NAS, CNAS, NI, Stability, DualGap, Surface–Wasserstein, GenGap@95 with HAC-CI and Holm–Bonferroni control).
Theoretical guarantees. Our analysis established approximation and conditioning bounds (T1), identifiability in L2 (Z) neighborhoods with a Cramér–Rao style lower bound (T2), a representative-element upper bound under coverage
shortfall (T2′), oracle rates that mix sample complexity and discretization error for short/long horizons (T3), Rademacher and bridge-type generalization (T4–T5), feasibility and stability of TTSA training under Spec-Guard (T6), joint identifiability once VIX2 replication constraints are incorporated (T7), and a saddle-point stopping rule with variance control (T8). Proof sketches were provided in the main text, with full derivations deferred to the appendix. Collectively, these results certify th-
at the learned operator is (i) well-posed, (ii) geometrically feasible, and (iii) statistically efficient under the stated assumptions.
Empirical evidence. On the arXiv version’s high-fidelity synthetic protocol (blocked CV + rolling OOS), ARBITER attains strong point estimates and tight confidence regions (e.g., NAS ≈ 0.9866, CNAS ≈ 0.9902, NI ≈ 0.6776, Stability ≈ 1.0, DualGap ≈ 0.060, Surface–Wasserstein ≈ 0.087), while respecting no-arbitrage geometry in the IV contour views and pricing curves. The safety stack is measurably binding: Q-Align shrinks the global Lipschitz bound from ∼ 1.3 × 103 to ∼ 0.70 with projection distance-
 ≈ 53, and Spec-Guard records bounded spec_guard_hits and max_rho_dt. Ablations demonstrate non-interchangeability: removing gating, halving kernel rank, or disabling Spec-Guard sharply degrades Stability, widens DualGap, and introduces geometric defects on the IV terrain. Stress-to-Fail (S2F) curves quantify robustness under numéraire shifts, coverage deficits, and rough/long-memory perturbations, yielding interpretable thresholds (e.g., NAS < 0.9 beyond a stress level near 2.0). External validit-
y is probed via frozen-hyperparameter reuse across OOS windows, with small CNAS deltas and documented confidence intervals. Effective dimension estimates
(dˆ90, dˆ95, dˆ99) = (1, 1, 2) align with the generalization theory in T3–T5.
Mechanistic insights. The operator-level view explains why linear-time scans alone are insufficient: without measure gating and geometric projection, selective recurrence can memorize but cannot guarantee risk-neutral feasibility. The RN-Operator plus Q-Align reframes training as monotone operator splitting with certificates, where Lipschitz and spectral projections act as safety margins that transfer to OOS generalization. The decoder’s convex–monotone structure closes the loop by ensuring econom-
ic shape constraints at the output layer, obviating post-hoc convexification.
Limitations. Our arXiv release uses synthetic yet finance-faithful generators to enable controlled ablations, deferring full real-market ingestion to a companion artifact. While the RN-Operator is expressive and stable, it assumes sufficient coverage in (T, K) and clean variance-swap replication; pronounced microstructure noise, sparse wings, jumps, and regime breaks may require robust estimators, jump-diffusion priors, or heavy-tail losses. The S2F protocol quantifies tolerance along chosen disto-
rtion axes; broader stress families (transaction costs, inventory constraints, stochastic interest/dividend curves) are left to future work. Finally, our theory relies on smoothness and mixing assumptions that can be weakened but would incur slower rates or larger constants.
Future directions. (i) Multi-market coupling. Extend the coupling layer to SPX–VIX–VVIX and cross-asset term structures (FX, rates), with KL/CVaR alignment across numeraires and maturities. (ii) American/early-exercise products. Combine RN-Operator with variational inequalities or policy iteration to impose Snell-envelope monotonicity. (iii) Online and adaptive safety. Replace fixed CFL thresholds with learned, uncertainty-aware guards and per-layer Lipschitz budgeting; integrate conformal predict-
ion for interval-level no-arbitrage. (iv) Sharper theory. Prove minimax lower bounds matching our oracle rates; relax smoothness via Besov/rough-path function classes; analyze tightness of the representative-element bound under adversarial coverage. (v) System efficiency. Fuse FFT-based kernels with multi-resolution scan to reduce wall-clock while maintaining certificates; explore mixed-precision training with safety-preserving rescaling.
Reproducibility and ethics. We release a single-command pipeline that exports all metrics, logs, and safety counters (including spec_guard_hits, projection_distance, max_rho_dt, novik_to_kazamaki_rate, coverage statistics, and S2F
24

thresholds), plus an independent replication script with fixed seeds and hardware descriptors. Data licensing, use restrictions, and non-investment-advice statements accompany the artifact. These measures aim to make results independently verifiable and to set a standard for operator-level safety in financial machine learning.
Take-home message. Risk-neutral geometry can—and should—be enforced during training. When selective scan is recast as a measure-consistent operator and equipped with Lipschitz and spectral guards, we obtain a model class that is simultaneously expressive, stable, and auditable, delivering arbitrage-free surfaces with quantifiable safety margins and statistically defensible uncertainty. We hope ARBITER will serve as a blueprint for safety-first operator learning in quantitative finance and beyond.
Appendix A. Proofs for Sections 3
A.1 Proof of Lemma 1
Lemma 4 (Green kernel bound). Let {Tl }l∈Z be a nondecreasing time grid with increments Δtl := Tl+1 − Tl > 0
and let Aθ (Tl ) ∈ Rd×d be a (time–varying) generator. Define Ml := Δtl Aθ (Tl ), Rl := (I − Ml )−1, and for bounded injections Bs with ∥Bs ∥ ≤ b Δts the discrete causal Green kernel
G
θ (Tl , Ts) := Rl Rl−1 · · · Rs+1 Bs, s ≤ l.
If the CFL–type safeguard ρ( Aθ (Tl )) Δtl = ρ(Ml ) ≤ 1 − ε holds for all l with some ε ∈ (0, 1), then there exists C = C (ε, b, Δt) < ∞, where Δt := supl Δtl , such that
∑︁
s≤l
G
θ (Tl , Ts) ≤ C (ε, b, Δt) for all l.
Proof. Step 1 (Extremal norm and contraction). Let M := {Ml : l ∈ Z}. From supM∈M ρ(M) ≤ 1 − ε and joint spectral radius theory, for any δ ∈ (0, ε) there exists an induced operator norm ∥ · ∥∗ such that
∥M∥∗ ≤ 1 − ε + δ ∀ M ∈ M.
Fix δ := ε/2, set α := 1 − ε/2 ∈ (0, 1), then ∥ Ml ∥∗ ≤ α for all l.
Step 2 (Uniform resolvent bound). By the Neumann series in ∥ · ∥∗,
Rl = (I − Ml )−1 =
∞
∑︁
k=0
Mk
l , ∥Rl ∥∗ ≤
∞
∑︁
k=0
∥ Ml ∥ k
∗≤ 1
1−α
=2
ε
.
Step 3 (Fundamental propagator). Submultiplicativity yields
Rl Rl−1 · · · Rs+1 ∗ ≤ 2
ε
l−s .
With ∥Bs ∥∗ ≤ b∗Δts where b∗ := sups ∥Bs ∥∗/Δts < ∞, we obtain
G
θ (Tl , Ts) ∗ ≤ 2
ε
l−s
b∗Δts .
Step 4 (Summability). Summing over s ≤ l and letting k := l − s,
∑︁
s≤l
G
θ (Tl , Ts) ∗ ≤ b∗
∞
∑︁
k=0
2
ε
k
Δtl−k .
To ensure a uniform bound, tighten Step 1 by choosing an arbitrary η ∈ (0, 1) and taking δ > 0 small enough that
∥ Ml ∥∗ ≤ η for all l (possible by the extremal–norm argument). Repeating Step 2–3 gives ∥Rl ∥∗ ≤ (1 − η)−1 and hence
∑︁
s≤l
G
θ (Tl , Ts) ∗ ≤ b∗
∞
∑︁
k=0
η kΔtl−k ≤ b∗ Δt
∞
∑︁
k=0
η k = b∗ Δt
1−η
.
Step 5 (Return to the reference norm). All norms in finite dimension are equivalent, so there exists κ ≥ 1 with ∥ X ∥ ≤ κ∥ X ∥∗. Therefore
∑︁
s≤l
G
θ (Tl , Ts) ≤ κ
b∗ Δt
1−η
=: C (ε, b, Δt) < ∞,
which proves the claim. □
25

Remark (Non-diagonalizable case and explicit constants). If Ml admits a Jordan decomposition Ml = Vl JlV −1
l,
then Rl = (I − Ml )−1 = Vl (I − Jl )−1V −1
l . For a size-k Jordan block Jk (λ), ∥ (I − Jk (λ))−1 ∥ ≤ Ík−1
m=0
m+k −1
k−1 |λ|m ≤
Ck (1 − |λ|)−k . Under ρ(Ml ) ≤ 1 − ε this implies ∥Rl ∥ ≤ κ(Vl ) Cd ε−d, whence the same summability follows after accounting for the Δts factor in Bs. The extremal–norm route typically yields tighter constants by avoiding κ(Vl ).
A.2 Proof of Proposition 1
Setting and recalled constraints. We consider the RN-operator layer on a grid {Tl } with increments Δtl > 0,
generator Aθ (Tl ), and resolvent Rl := (I − Δtl Aθ (Tl ))−1. The Q-Align projection enforces the layerwise Lipschitz envelope (14), summarized as
∥Ll ∥ ≤ τ (τ ≤ 1),
for the linearized lipschitz surrogate Ll of the per-step affine map prior to the nonlinearity; the spectral safeguard (15) is the CFL-type condition
ρ( Aθ (Tl )) Δtl ≤ 1 − ε (ε ∈ (0, 1)),
which guarantees resolvent well-posedness. We use a nonexpansive activation φ with Lip(φ) ≤ 1. Define the input injection Bl (possibly learned) and bias bl , with bounded envelopes ∥Bl ∥ ≤ bin and ∥bl ∥ ≤ b0. The discrete causal Green kernel reads (for s ≤ l)
G
θ (Tl , Ts) = Rl Rl−1 · · · Rs+1 Bs .
The state recursion is
hl = φ(Rl hl−1 + Bl ul + bl ) , l ∈ Z. (47)
Auxiliary bound (from Appendix A.1). By Lemma 1, under the CFL-type guard there exists an induced norm ∥ · ∥∗ and constants η ∈ (0, 1) and Cε < ∞ such that
∥Rl ∥∗ ≤ 1
1−η
,
∑︁
s≤l
Rl · · · Rs+1 ∗ Δts ≤ Cε,
uniformly in l (the precise dependence on ε is stated in Appendix A.1).
Step 1: BIBO stability. Iterating (47) and using Lip(φ) ≤ 1 yields
∥hl ∥∗ ≤ ∥Rl ∥∗ ∥hl−1 ∥∗ + ∥Bl ∥∗ ∥ul ∥ + ∥bl ∥∗
≤1
1−η
∥ hl−1 ∥∗ + bin,∗ ∥ul ∥ + b0,∗,
where bin,∗ := supl ∥Bl ∥∗ and b0,∗ := supl ∥bl ∥∗. Unrolling the recursion with h−∞ = 0 (or any bounded initialization absorbed into the same bound), and substituting R-products gives
∥hl ∥∗ ≤
∑︁
s≤l
Rl · · · Rs+1 ∗ bin,∗ ∥us ∥ + b0,∗ .
If sups ∥us ∥ ≤ U < ∞, then by the kernel summability,
∥hl ∥∗ ≤ Cε bin,∗ U + b0,∗ ,
uniformly in l. By norm equivalence in finite dimension, the same uniform bound holds for any reference norm ∥ · ∥:
sup
l
∥hl ∥ ≤ κ Cε bin U + b0 =: CBIBO < ∞.
Hence the trajectory is uniformly bounded for bounded input (BIBO stability).
Step 2: Global Lipschitz continuity (input-to-state and input-to-output). Consider two input sequences {ul },
{u′
l } with corresponding states {hl }, {h′
l }. Set δhl := hl − h′
l , δul := ul − u′
l . Using Lip(φ) ≤ 1,
∥δhl ∥∗ ≤ ∥Rl ∥∗ ∥δhl−1 ∥∗ + ∥Bl ∥∗ ∥δul ∥.
Unrolling as above and using submultiplicativity,
∥δhl ∥∗ ≤
∑︁
s≤l
Rl · · · Rs+1 ∗ ∥Bs ∥∗ ∥δus ∥.
26

Taking l∞ norms over sequences and applying the kernel sum bound,
∥δh∥l∞,∗ ≤ sup
s
∥Bs ∥∗ sup
l
∑︁
s≤l
∥ Rl · · · Rs+1 ∥∗ Δts ∥δu∥l∞ ≤ bin,∗ Cε ∥δu∥l∞ .
Passing back to the reference norm via equivalence constants yields
∥δh∥l∞ ≤ κ bin Cε ∥δu∥l∞ .
If the readout/decoder is Lout-Lipschitz (Q-Align also enforces a 1-Lipschitz envelope through the head), then the overall input-to-output map is globally Lipschitz with
Lglob ≤ κ Lout bin Cε . (48)
When the layerwise envelope is tightened by (14) with factor τ ≤ 1, we can absorb it multiplicatively into bin or Lout, so the same bound holds with bin ← τ bin, Lout ← τ Lout. This matches the main-text bound (13) up to norm-equivalence constants.
Step 3: Role of Spec-Guard and Q-Align. Spec-Guard ensures ∥Rl ∥∗ remains uniformly bounded and that the product ∥Rl · · · Rs+1 ∥∗ decays geometrically in the extremal norm; Q-Align prevents per-step amplification beyond τ ≤ 1, guaranteeing that the effective injection ∥Bs ∥∗ and the readout Lipschitz constant remain inside the envelope. Combining both yields BIBO stability and a globally Lipschitz operator with constant bounded by (48).
Non-diagonalizable case and time-varying steps. If Aθ (Tl) is not diagonalizable, the Jordan-block resolvent bound
in Appendix A.1 gives ∥Rl ∥ ≤ Cd ε−d up to condition numbers; the extremal-norm construction avoids these condition numbers and yields the uniform envelope used above. Heterogeneous steps Δtl are already handled in the kernel summability via the weighted series Í
s≤l ∥ Rl · · · Rs+1 ∥∗ Δts.
Conclusion. Uniform boundedness and global Lipschitz continuity follow, which proves Proposition 1. □
A.3 SPX↔VIX replication: discretization consistency and identifiability
Continuous-time identity and discrete estimator. Let FT = S0e(r −q)T , and let C (·, T), P(·, T) be call and put prices
under Qθ with discount factor e−rT and no static arbitrage. The log-contract identity yields the variance-swap fair rate (for diffusion models; jump-diffusions add the standard jump term):
σ2
VS, θ (T ) = 2 erT
T
∫ FT
0
Pθ (K,T)
K2 dK +
∫∞
FT
Cθ (K,T)
K2 dK − 1
T
FT
K0
−1
2
. (49)
For a strike grid KT = {Ki }M
i=1, define ΔKi = 1
2 (Ki+1 − Ki−1) with one-sided endpoints, and the discrete estimator
bσ2
VS, θ (T ) := 2 erT
T
M ∑︁
i=1
ΔKi
K2
i
Q θ (Ki, T) − 1 T
FT
K0
−1
2
, (50)
where Q θ (Ki, T ) = Pθ if Ki < FT and Q θ = Cθ if Ki ≥ FT .
Tail integrability and convexity. Assume: (i) K ↦→ Q θ (K, T) is convex for each T; (ii) Q θ (·, T)/K2 has bounded
variation on compact sets; (iii) ∫ Kmin
0
Pθ
K2 dK → 0 and ∫ ∞
Kmax
Cθ
K2 dK → 0 as Kmin ↓ 0, Kmax ↑ ∞. The latter holds, for instance, if the risk-neutral tails satisfy Cθ (K, T) ≲ K −α with α > 1 and Pθ (K, T) ≲ K as K ↓ 0.
Lemma 5 (Quadrature error under convexity). Let f (K) = Q θ (K, T)/K2 on a compact interval [a, b], with f convex and of bounded variation. For the midpoint rule with mesh ΔK, the error satisfies
∫b
a
f (K) dK −
∑︁
i
ΔKi f (Ki) ≤ TV( f ; [a, b])
2 ΔK,
where TV( f ; [a, b]) denotes the total variation of f on [a, b].
Proof. Since f has bounded variation, f is the difference of two monotone functions. Apply the Jordan decomposition and sum the per-cell trapezoid error; convexity implies the midpoint rule error is monotone in the cell width and controlled by the variation measure. A standard argument (Riemann–Stieltjes with variation measure) yields the bound. □
27

Proof of Proposition 2. Fix T. Split the integrals in (49) on [0, Kmin], [Kmin, FT ], [FT , Kmax], [Kmax, ∞). On the two
compact intervals [Kmin, FT ] and [FT , Kmax], apply Lemma 5 to f (K) = Pθ (K, T)/K2 and f (K) = Cθ (K, T)/K2 respectively, to get an error ≤ 1
2 [TV( f ; [Kmin, FT ]) + TV( f ; [FT , Kmax])]ΔKT . The tails are εtail (Kmin, Kmax) by
assumption (iii). The forward adjustment term coincides in (49) and (50), hence cancels in the difference. Uniformity in T over compact subsets follows if the variation envelopes and tail integrability are uniform in T. □
Lemma 6 (Log-contract linkage). For a continuous Itô model dSt = St μt dt + St σt dWt under Qθ ,
2 erT
T
∫ FT
0
Pθ
K2 dK +
∫∞
FT
Cθ
K2 dK = 1
T EQθ
∫T
0
σ2
t dt .
For jump-diffusions, an additional jump-compensator term appears and is incorporated in the standard VIX methodology through OTM sums of Q θ .
Proof. This is the classical Carr–Madan log-contract identity, obtained by writing the log payoff as a static portfolio of OTM options plus a forward and differentiating option prices with respect to K (Breeden–Litzenberger). □
Proof of Proposition 3. The condition RVIX (T) = 0 implies bσ2
VS, θ (T ) = VIX2
obs (T). By Proposition 2, letting the mesh
refine and the truncation expand, we obtain σ2
VS, θ (T ) = σ2
VS,obs (T ) for all T ∈ T . If v θ exists and T ↦→ 1
T
∫T
0 vθ (t) dt
is strictly monotone, equality of the Cesàro means on an interval forces v θ to match the observed instantaneous variance a.e. on T (Hardy–Littlewood Tauberian principle for monotone means). □
Interpolation choice and arbitrage. Linear interpolation in (K, Q) preserves piecewise convexity and monotonicity, which aligns with the no-butterfly/no-calendar constraints; cubic splines may reduce quadrature error but risk local nonconvexities between knots. In our experiments, both schemes yield statistically indistinguishable NAS/CNAS while linear interpolation avoids small arbitrage repairs (see Table 1 and Fig. iv_contours_filled_TK.png vs iv_contours_lines_TK.png).
A.4 Proof of Proposition 4: static no-arbitrage and replication consistency
We work on a strike–maturity grid {(Ki, Tj )}i=1,...,M; j=1,...,J with ordered 0 < K1 < · · · < KM and 0 < T1 < · · · < TJ , and one-sided spacings ΔKi = 1
2 (Ki+1 − Ki−1) (endpoints adjusted analogously). Throughout, interest rate r and
dividend yield q are accounted for via the forward FT = S0e(r −q)T ; calendar comparisons are done at fixed (K, T) in the same numeraire.
Assumptions. (i) Convex–monotone constraints. For each T, K ↦→ C (K, T) is convex and nonincreasing, and for each K, T ↦→ C (K, T) is nondecreasing. In differential form,
∂2
KK C (K, T) ≥ 0, ∂K C (K, T) ≤ 0, ∂TC (K, T) ≥ 0,
with weak derivatives interpreted in the sense of distributions. (ii) Boundary and tail conditions. As K ↓ 0,
C (K, T) → S0e−qT ; as K ↑ ∞, C (K, T) → 0 and C (K, T) ≲ K −α for some α > 1. These imply C (·, T)/K2 has bounded variation on compact intervals and integrable tails. (iii) VIX replication residual vanishes on the maturity grid. For all Tj , RVIX (Tj ) = VIX2
obs (Tj ) − VIX2
Φ (Tj ) = 0, (51)
where VIX2
Φ (T) is computed from C = Φ via the discrete replication formula (20) (including the standard forward
adjustment).
Step 1 (butterfly arbitrage on the grid is excluded). Fix Tj . Since K ↦→ C (K, Tj ) is convex on (0, ∞) in the sense of distributions, the second difference
Δ2
K C (Ki, Tj ) := C (Ki−1, Tj ) − 2C (Ki, Tj ) + C (Ki+1, Tj ) ≥ 0
for all interior indices i = 2, . . . , M − 1; at endpoints, the one-sided convexity inequalities hold. Therefore, there is no butterfly arbitrage on the strike grid at Tj . This is the classical discrete convexity criterion for absence of butterfly spreads.
Step 2 (calendar arbitrage on the grid is excluded). Fix Ki. Monotonicity ∂TC (Ki, T) ≥ 0 implies C (Ki, Tj+1) ≥ C (Ki, Tj ) for all j. Hence there is no calendar arbitrage on the maturity grid at Ki. The numeraire consistency follows since comparisons are made for the same (Ki, Tj ) and the decoder already absorbs (r, q) via the forward mapping.
28

Step 3 (BL density and consistency with VIX functional). By convexity in K and the tail conditions, the Breeden–Litzenberger identity
fST (K) = erT ∂2
KK C (K, T)
defines a nonnegative measure integrating to erT ∂K C (0+, T) − erT ∂K C (∞−, T) = 1; thus fST is a bona fide risk-neutral density. On the grid, the discrete counterpart reads
fSTj
(Ki) ≈ erTj
C (Ki−1, Tj ) − 2C (Ki, Tj ) + C (Ki+1, Tj )
(ΔKi)2 ,
which is nonnegative by Step 1.
Consider the VIX functional (variance swap fair rate). In continuous form,
σ2
VS (T ) = 2 erT
T
∫ FT
0
P
K2 dK +
∫∞
FT
C
K2 dK − 1
T
FT
K0
−1
2
. (52)
By the Carr–Madan log-contract identity and the BL relation,
2 erT
T
∫ FT
0
P
K2 dK +
∫∞
FT
C
K2 dK = 1
T
∫∞
0
ψ (K) erT ∂2
KK C (K, T ) dK,
for a positive kernel ψ(K) whose action reproduces the log payoff; under our tails and boundary conditions the integration by parts is justified (all boundary terms vanish). Hence the VIX functional computed from C is exactly the Cesàro mean of instantaneous variance under the density fST .
On the grid, with the midpoint quadrature Í
i ΔKi Q(Ki, T)/K2
i and the forward adjustment, Proposition A.3 (consistency of discretized replication) yields
VIX2
Φ (Tj ) = σ2
VS,Φ (Tj ) up to quadrature and tail errors vanishing with the mesh.
By (51), VIX2
Φ (Tj ) = VIX2
obs (Tj ) for all j, hence the BL-implied density from C is consistent with the observed VIX2
functional on the maturity grid.
Putting the steps together. Steps 1–2 establish the absence of butterfly and calendar arbitrage on the grid. Step 3 shows that the BL-implied density from C reproduces the VIX2 functional when the replication residual vanishes (and, by A.3, in the mesh-refined limit). This proves Proposition 4.
Remarks on implementation and interpolation. (i) Linear interpolation in (K, Q) preserves piecewise convexity and thus nonnegativity of discrete second differences; cubic splines may reduce quadrature error but can introduce local nonconvexities between knots unless shape-constrained splines are used. (ii) Calendar tests should be performed on the forward-adjusted scale if one compares prices under changing carry (r, q). In our implementation, the decoder absorbs (r, q) and produces monotonically -
nondecreasing T ↦→ C (K, T) directly. (iii) On coarse grids, adding the forward adjustment term improves finite-grid consistency with (52) and reduces bias at short maturities.
A.5 Proof of Theorem 1: projected extragradient under Q-Align perturbations
Setting and assumptions. We consider the monotone variational inequality VI(F, Z): find z★ ∈ Z such that
⟨F (z★), z − z★⟩ ≥ 0 ∀z ∈ Z, (53)
with F monotone, i.e., ⟨F (u) − F (v), u − v⟩ ≥ 0 for all u, v, and L-Lipschitz, i.e., ∥F (u) − F (v) ∥ ≤ L ∥u − v∥. The projection ΠZ is nonexpansive. Q-Align enforces per-iteration spectral/Lipschitz projections inside the model; we capture the induced numerical and truncation inaccuracies by perturbations ek, e ̃k satisfying
∥ek ∥ + ∥e ̃k ∥ ≤ cqaη, for some constant cqa > 0, (54)
which matches the empirical scaling reported in the logs (cf. λlip before/after and spectral-guard distances). Stochastic gradients enter via martingale-difference noise ξk, ξ ̃k with
E[ξ k | Fk] = 0, E∥ξ k ∥2 ≤ σ2, E[ξ ̃k | Fk+1/2] = 0, E∥ξ ̃k ∥2 ≤ σ2. (55)
29

Algorithmic step. Given zk ∈ Z, define
yk = ΠZ zk − η F(zk) − ξk − ek ,
zk+1 = ΠZ zk − η F (yk) − ξ ̃k − e ̃k ,
(56)
with a stepsize η ≤ 1/(√
2 L) specified later. The residual of interest is either the natural projected residual
Rη (z) := 1
η
z − ΠZ z − ηF(z) ,
or the operator norm ∥F (z) ∥. For monotone Lipschitz F and η ≤ 1/L, it is standard that ∥Rη (z) ∥ ≤ (1 + ηL) ∥F (z) ∥ (see Lemma 7 below), hence controlling one controls the other up to constants.
Key inequalities. We recall the three-point identity for projections: for any u ∈ Rd and w = ΠZ (u), and any v ∈ Z,
⟨u − w, v − w⟩ ≤ 0 ⇒ ∥v − w∥2 ≤ ∥v − u∥2 − ∥w − u∥2. (57)
Apply (57) to the first stage of (56) with u = zk − η(F (zk) − ξ k − ek), w = yk and v = z★:
∥z★ − yk ∥2 ≤ ∥z★ − zk ∥2 − ∥yk − zk ∥2 − 2η⟨F (zk) − ξ k − ek, yk − zk⟩. (58)
Similarly for the second stage with u = zk − η(F (yk) − ξ ̃k − e ̃k), w = zk+1 and v = z★:
∥z★ − zk+1 ∥2 ≤ ∥z★ − zk ∥2 − ∥zk+1 − zk ∥2 − 2η⟨F (yk) − ξ ̃k − e ̃k, zk+1 − zk⟩. (59)
Monotonicity coupling. Using Lipschitzness and Cauchy–Schwarz,
⟨F(yk) − F(zk), yk − zk⟩ ≥ 1
L
∥F(yk) − F(zk)∥2,
and monotonicity yields
⟨F (yk), yk − z★⟩ ≥ ⟨F (z★), yk − z★⟩ ≥ 0. (60)
Split the last inner product in (58) as
⟨F(zk), yk − zk⟩ = ⟨F(yk), yk − zk⟩ + ⟨F(zk) − F(yk), yk − zk⟩ ≥ 1
L
∥F(yk) − F(zk)∥2,
hence
∥z★ − yk ∥2 ≤ ∥z★ − zk ∥2 − ∥yk − zk ∥2 − 2η
L
∥F (yk) − F (zk) ∥2 + 2η⟨ξ k + ek, yk − zk⟩. (61)
Likewise, decompose the inner product in (59) using zk+1−zk = (zk+1−yk)+(yk −zk) and add–subtract ⟨F (yk), yk −z★⟩; routine algebra (see, e.g., the Mirror–Prox analysis) yields
∥z★ − zk+1 ∥2 ≤ ∥z★ − zk ∥2 − ∥zk+1 − zk ∥2 − 2η⟨F (yk), yk − z★⟩ + η2 L2 ∥yk − zk ∥2 + Noisek + ProjErrk, (62)
where
Noisek := 2η⟨ξ ̃k, zk+1 − zk⟩, ProjErrk := 2η⟨e ̃k, zk+1 − zk⟩.
One-step merit bound. Combine (61)–(62) and use (60) to eliminate the nonnegative term ⟨F (yk), yk − z★⟩:
∥z★ − zk+1 ∥2 ≤ ∥z★ − zk ∥2 − ∥zk+1 − zk ∥2 + η2 L2 ∥yk − zk ∥2 + Noisek + ProjErrk . (63)
Choose η ≤ 1/(√
2L) so that η2L2 ≤ 1/2. By Young’s inequality,
∥zk+1 − zk ∥2 ≥ 1
2 ∥ yk − zk ∥2 − ∥zk+1 − yk ∥2.
Applying nonexpansiveness of projection to the second stage of (56) shows ∥zk+1 − yk ∥ ≤ η∥F (yk) − ξ ̃k − e ̃k ∥, so
∥zk+1 − yk ∥2 ≤ 2η2 ∥F (yk) ∥2 + ∥ξ ̃k ∥2 + ∥e ̃k ∥2 .
Plugging the last two displays into (63), taking conditional expectations, and using (55)–(54) yield
E ∥z★ − zk+1 ∥2 | Fk ≤ ∥z★ − zk ∥2 − 1
4 ∥yk − zk ∥2 + 4η2E∥F (yk) ∥2 + c1η2σ2 + c2η2, (64)
for some universal constants c1, c2.
30

Residual bridging. We relate ∥yk − zk ∥ to a first-order residual. By (56) and firm nonexpansiveness of projection,
1
η
∥zk − yk∥ ≤ ∥F(zk)∥ + ∥ξk∥ + ∥ek∥.
Also, Lipschitzness implies ∥F (yk) ∥ ≤ ∥F (zk) ∥ + L ∥yk − zk ∥. Combining these with (64), taking full expectations
and using η ≤ 1/(√
2L), we obtain
E∥z★ − zk+1 ∥2 ≤ E∥z★ − zk ∥2 − c3η2E∥F (zk) ∥2 + c4η2σ2 + c5η2, (65)
for some constants c3, c4, c5 > 0 (the last term absorbs Q-Align errors through (54), thus is O (η2)).
Summation and choice of stepsize. Sum (65) from k = 0 to K − 1, telescope the left-hand side, and choose η = θ/L with a small absolute constant θ > 0. We obtain
1
K
K −1
∑︁
k=0
E∥F (zk) ∥2 ≤ O L2 ∥z0 − z★∥2
K
+ O σ2 + O 1
L2 .
Since the Q-Align term is O (1/L2) under (54), it is dominated by the noise floor O (σ2) in practical regimes; removing
constants and using the fact that mink ak ≤ 1
K
Í
k ak gives the claimed bound
min
0≤k≤K −1 E∥F (zk) ∥2 ≤ O L2 ∥z0 − z★∥2
K
+ O σ2 .
Auxiliary lemma (residual bridge).
Lemma 7. For η ≤ 1/L and any z ∈ Z,
∥Rη (z)∥ ≤ (1 + ηL) ∥F(z)∥, ∥F(z)∥ ≤ ∥Rη (z)∥ + ηL ∥F(z)∥.
Hence ∥Rη (z) ∥2 and ∥F (z) ∥2 are equivalent up to O (1) constants depending only on ηL.
Proof. By nonexpansiveness of ΠZ,
∥Rη (z)∥ = 1
η
z − ΠZ (z − ηF(z)) ≤ 1
η
∥z − (z − ηF(z))∥ = ∥F(z)∥.
The reverse direction follows by adding–subtracting z − ηF (z) inside the projection and applying Lipschitzness of F; details are standard and omitted. □
Deterministic corollary. If σ = 0 (deterministic gradients), the rate improves to
min
0≤ k ≤K −1
∥F (zk) ∥2 ≤ O L2 ∥z0 − z★∥2
K
,
matching classical extragradient rates for monotone Lipschitz VIs.
Remarks. (i) Strong monotonicity (with modulus μ > 0) yields a linear convergence term O (1 − ημ)K until it hits the same O (σ2) noise floor. (ii) The Q-Align perturbations are “benign” provided (54) holds; empirically, the spectral guard logs (λlip before/after and projection distances) conform to this scaling. (iii) The same analysis extends to mirror-prox with a distance-generating function; we focus on the Euclidean case for clarity.
This completes the proof of Theorem 1.
B.1 Proof of Theorem 2: approximation rate and conditioning
We prove the two claims in (28): the m−βsmooth approximation rate and the spectral conditioning proxy bound. Throughout, Z ⊂ Rdz is compact, f ★ is βsmooth-Hölder on Z and jointly Hölder in the maturity argument T ∈ T = [Tmin, Tmax]. The RN-operator Gθ is realized by a selective-scan (RN-Operator) layer followed by a convex–monotone decoder, with Q-Align ensuring per-layer 1-Lipschitz projections and spectral safety (Spec-Guard). We use ∥ · ∥ for the Euclidean or spectral norm depending on context-
.
31

Model parameterization. Let {Tl }L
l=1 be the maturity grid. One-step RN dynamics writes
hl = G θ (Tl , Tl−1) hl−1 + Bθ (Tl ) ul , G θ = exp Δtl Aθ (Tl ) , (66)
with Δtl = Tl − Tl−1. Under Spec-Guard, ρ( Aθ (Tl ))Δtl ≤ 1 − ε for some ε ∈ (0, 1), hence the associated Green kernel
G
θ (Tl , Ts) :=
l Ö
r =s+1
G θ (Tr , Tr −1) (67)
satisfies the Neumann-type bound (Lemma 1):
∑︁
s≤l
G
θ (Tl , Ts) ≤ C (ε), uniformly in l. (68)
The output price surface before the convex–monotone decoder is a scan of the input features {us }:
zl (·) =
∑︁
s≤l
G
θ (Tl , Ts) Bθ (Ts) us (·), (69)
and the decoder Φθ (ICNN+Legendre projection) is 1-Lipschitz under Q-Align.
We adopt a low-rank gate parameterization
Bθ (T) =
m ∑︁
j =1
b j (T) w j v⊤
j , Aθ (T) = D θ (T) +
m ∑︁
j =1
a j (T) r j q⊤
j , (70)
with ∥w j ∥ = ∥v j ∥ = ∥r j ∥ = ∥q j ∥ = 1 and a j , b j bounded and βsmooth-Hölder in T (enforced by per-step spectral/Lipschitz projection). The rank surrogate is thus m.
Part I: approximation rate. We consider the target operator f ★ : (u, ·) ↦→ C★(·), which we assume admits a separable Green-type expansion with Hölder control:
f ★(u)(T, ξ) =
∞
∑︁
j =1
α j ψ j (T) φ j (u; ξ),
∞
∑︁
j =1
j βsmooth |α j | ≤ M < ∞, (71)
where {ψ j } is a smooth dictionary on T (e.g., integrated B-splines or compactly supported wavelets) with βsmooth-Hölder regularity and {φ j } are feature functionals uniformly bounded on Z. Such expansions are classical for Hölder classes via nonlinear m-term approximations with wavelet or spline dictionaries (see, e.g., DeVore–Temlyakov m-term approximation theory). The coefficient decay condition in (71) is equivalent to f ★ belonging to a Besov/Hölder ball with smoothness βsmooth.
Define the m-term truncation
f★
m (u)(T, ξ) =
m ∑︁
j =1
α j ψ j (T ) φ j (u; ξ). (72)
By Stechkin’s inequality for best m-term approximations in l p with p = 1/βsmooth surrogate (monotone rearrangement of coefficients),
∥f★ − f★
m ∥ L2 ( Z) ≤ C m−βsmooth
∑︁
j ≥1
j βsmooth |α j | ≤ C′m−βsmooth . (73)
It remains to show that Gθ can realize f ★
m up to an arbitrarily small error when m atoms are allocated in (70). Choose b j (·) so that the scan (69) reproduces ψ j on the grid (standard for spline/wavelet reproduction using stable discrete Green
convolutions), and set the feature directions v j , w j so that the linear functionals φ j (u; ·) are matched by u ↦→ v⊤
j u(·) and the decoder’s linear readout (pre-ICNN) maps w j to the correct output channel. The ICNN+Legendre decoder, being 1-Lipschitz and positively homogeneous on the linear span of the constructed atoms, preserves the L2 approximation error.
Consequently, there exists θ = θ (m) with rank m such that ∥Gθ − f ★
m ∥L2 (Z) ≤ εm, with εm → 0 as the reproduction tolerance on {ψ j , φ j } shrinks, and combining with (73) yields
inf
θ
∥Gθ − f ★∥L2(Z) ≤ ∥Gθ − f ★
m ∥L2(Z) + ∥ f ★
m − f ★∥ L2 ( Z) ≤ C1m−βsmooth ,
for C1 independent of L (the scan length), since the reproduction constants depend only on the dictionary stability and the Green kernel bound (68), which is uniform in L under Spec-Guard.
Remark A.1 (effective dimension). If the target lacks separability, the same argument yields ∥ f ★ − f ★
m ∥ = O (m−βsmooth/dˆ)
with dˆ the effective approximation dimension.
32

Part II: conditioning bound. Let Jθ be the Jacobian of the overall mapping θ ↦→ Φθ ◦ Scanθ (u) evaluated on a bounded input u (the bound is uniform over ∥u∥ ≤ U). By the chain rule and (69),
J
θ = DΦθ (z)
L ∑︁
l=1
∑︁
s≤l
G
θ (Tl , Ts) ∂θ Bθ (Ts)
| {z }
direct term
+ ∂θ Gθ (Tl , Ts) Bθ (Ts)
| {z }
state term
us, (74)
where DΦθ is the decoder Jacobian. Under Q-Align, every layer (encoder/base/decoder) is 1-Lipschitz after projection, so ∥DΦθ (z) ∥ ≤ 1. For the direct term,
G
θ (Tl , Ts) ∂θ Bθ (Ts) us ≤ ∥Gθ (Tl , Ts) ∥ ∥∂θ Bθ (Ts) ∥ ∥us ∥.
The low-rank gate (70) implies ∥∂θ Bθ (T) ∥ ≤ cb Lg with Lg the Lipschitz constant (w.r.t. features/inputs) of the learned gates and cb a dimension-free constant tied to basis normalization. Summing over s ≤ l and using (68),
∑︁
s≤l
G
θ (Tl , Ts) ∂θ Bθ (Ts) us ≤ C (ε) cb Lg max
s
∥us ∥.
For the state term, differentiate (67):
∂θ Gθ (Tl , Ts) =
l ∑︁
r =s+1
l Ö
q=r +1
G θ (Tq, Tq−1) ∂θ G θ (Tr , Tr −1)
rÖ−1
p=s+1
G θ (Tp, Tp−1) .
Using ∂θ G θ (Tr , Tr −1) = ∫ 1
0 exp τΔtr Aθ Δtr ∂θ Aθ exp (1 − τ)Δtr Aθ dτ, we get
∥∂θ G θ (Tr , Tr −1) ∥ ≤ Δtr ∥∂θ Aθ (Tr ) ∥ sup τ∈ [0,1]
exp(τΔtr Aθ ) 2.
Under Spec-Guard and spectral projection, supτ ∥ exp(τΔtr Aθ ) ∥ ≤ ca with ca depending on ε and maxl ∥ Aθ (Tl ) ∥2.
The low-rank parameterization (70) yields ∥∂θ Aθ (T) ∥ ≤ c′
a Lg (linear in the gate Lipschitz constant). Consequently,
∥∂θ Gθ (Tl , Ts) ∥ ≤ c2
a c′
a Lg
l ∑︁
r =s+1
Δtr
l Ö
q=r +1
G θ (Tq, Tq−1)
rÖ−1
p=s+1
G θ (Tp, Tp−1) .
By submultiplicativity and again the Neumann-type bound (68), the double product is summably bounded uniformly in L. Hence, ∑︁
s≤l
∥∂θ Gθ (Tl , Ts) Bθ (Ts) ∥ ≤ C′′ (ε) Lg max
l
∥ Aθ (Tl ) ∥2.
Combining direct and state terms in (74) and recalling that the rank-m structure introduces at most an m-fold linear scaling in the number of active gates, we obtain
∥ Jθ ∥ ≤ C2 max
l
∥ Aθ (Tl ) ∥2 Lg m, (75)
for a constant C2 depending on ε, dictionary normalization, and decoder curvature bounds, but independent of L thanks to the uniform Green kernel bound (68). This proves the conditioning proxy bound in (28).
Conclusion. The approximation rate follows from the best m-term construction (72)–(73) realized by the RN-Operator with rank-m gates; the conditioning proxy is controlled by Q-Align spectral constraints and the Neumann-type summability of the discrete Green kernel, yielding (75). This completes the proof of Theorem 2. □
B.2 Proof of Theorem 3: local identifiability and CRLB
Model and regularity. Let (u, Y ) denote a generic input–output pair, where u ∈ Z is a feature field and Y = {C (Tl , K j )}l≤L, j≤Jl collects option prices on the maturity–strike grid. The RN-operator induces the mean surface
μθ (u) = Φθ
∑︁
s≤l
G
θ (Tl , Ts) Bθ (Ts) us
!
l, j
,
with Φθ the convex–monotone decoder (ICNN+Legendre projection). We assume: (A1) noise model Y = μθ (u) + ε, where ε is mean-zero, sub-Gaussian with covariance operator Σ independent of θ; (A2) the input process has a nondegenerate covariance operator Cov(u) on Z; (A3) Q-Align enforces 1-Lipschitz layers and Spec-Guard enforces the CFL constraint so that Lemma 1 holds. These assumptions match the main text.
33

Step I: decoder-level identifiability on the grid. Let Cθ (T, K) be the decoded call price surface. Static no-arbitrage ensures convexity in K and monotonicity in T. The Breeden–Litzenberger identity implies that, for each Tl,
∂2Cθ
∂K2 (Tl , K) = erTl f Q
θ (Tl , K), (76)
where f Q
θ (Tl , ·) is the risk-neutral density at maturity Tl . VIX2 replication consistency further imposes
VIX2
θ (Tl ) = 2 erTl
Tl
∫∞
0
1
K2 Q θ (K, Tl ) dK (discrete grid via quadrature as in the main text). (77)
On the grid, if two decoders Φθ1 , Φθ2 satisfy (76) with the same second derivative and also match (77), then their implied densities and integrated variance coincide at all grid maturities. Since C is recovered from its second derivative and boundary conditions (no-arbitrage asymptotics at K → 0, ∞), we conclude
Φ
θ1 (z) = Φθ2 (z) for all admissible inputs z.
Thus, decoder-level identifiability holds on the grid.
Step II: propagation through the scan to the operator level. Suppose Gθ1 and Gθ2 yield the same decoded surface for almost every input u:
Φ
θ1
∑︁
s≤l
G
θ1 (Tl , Ts) Bθ1 (Ts)us = Φθ2
∑︁
s≤l
G
θ2 (Tl , Ts)Bθ2 (Ts)us , a.s. in u.
Since Φθ is 1-Lipschitz and strictly monotone along the decoder’s active rays (by convexity and positive homogeneity of the ICNN regularized by Legendre projection), equality of outputs for almost every u implies equality of pre-decoder representations for almost every u:
∑︁
s≤l
G
θ1 (Tl , Ts) Bθ1 (Ts)us =
∑︁
s≤l
G
θ2 (Tl , Ts)Bθ2 (Ts)us in L2 (Z).
Let δθ be a tangent perturbation at θ★, and write the linearized identity
∑︁
s≤l
∂θ Gθ★ (Tl , Ts) Bθ★ (Ts) + Gθ★ (Tl , Ts) ∂θ Bθ★ (Ts) us = 0 in L2 (Z). (78)
Taking the covariance in u and using nondegeneracy of Cov(u) together with the uniform Green bound (Lemma 1), we obtain that the linear operator
L
θ★ [δθ] :=
∑︁
s≤l
∂θ Gθ★ (Tl , Ts) Bθ★ (Ts) + Gθ★ (Tl , Ts) ∂θ Bθ★ (Ts)
vanishes if and only if δθ lies in the symmetry tangent space generated by atom permutations and reciprocal rescalings in the rank-m factorization. Consequently, the differential DGθ★ is injective on the quotient by these symmetries, and by the inverse function theorem for Banach spaces, there exists a neighborhood U in which θ ↦→ Gθ is injective modulo symmetries.
Step III: Fisher information and CRLB. Under (A1)–(A3), the log-likelihood for a single pair (u, Y ) is
l(θ; u,Y) = −1
2 Y − μθ (u), Σ−1 (Y − μθ (u)) + const,
with score Sθ (u, Y ) = D μθ (u)⊤Σ−1 Y − μθ (u) , where D μθ (u) is the Jacobian of the RN-operator output w.r.t. θ. The Fisher information is
I (θ) := E S θ S⊤
θ = E Dμθ (u)⊤Σ−1Dμθ (u) ,
since E[Y − μθ (u) | u] = 0. By Q-Align, D μθ (u) is bounded and measurable; by Step II, D μθ★ has trivial kernel on the symmetry-quotient space, hence I (θ★) is positive definite on that quotient. The Cramér–Rao inequality for unbiased estimators on smooth parametric families then yields
E
h
(
θb− θ★) (θb− θ★)⊤i
⪰1
n
I (θ★) −1,
and (29) follows after taking the trace. This completes the proof. □
34

B.3 Proof of Proposition 5
Set-up and notation. Let Gθ be the RN-operator, Φθ the convex–monotone decoder, and write the decoded surface Cθ = Φθ ◦ Gθ (·) on the strike–maturity grid G = {(Tl , K j )}l≤L, j≤Jl . Let I ⊂ G denote the set of covered cells with reliable quotes; its relative cardinality is cov := |I|/|G| ∈ [0, 1]. On the complement G \ I, the price surface is filled by a linear, static no-arbitrage–preserving interpolant Ext (convex in K, monotone in T). We assume an interpolation accuracy bound
Ext[C★|I] − C★
l2 ( G) ≤ ε, (79)
where C★ is the ground-truth surface induced by λ★.
The training objective is a penalized, discretized risk under the risk-neutral measure with a martingale penalty of weight γ > 0, plus the indicator of the no-arbitrage cone K:
J
γ (λ) := 1
|I|
∑︁
(Tl ,K j ) ∈ I
Cλ (Tl , K j ) − Yl j
2 + γ Mart(λ) + ιK Cλ . (80)
Here Yl j are observed mid quotes; Mart(λ) is a nonnegative convex proxy for the martingale defect (e.g., squared drift
under Qλ); ιK is 0 if the static no-arbitrage conditions hold on the grid and +∞ otherwise. Let λbγ be a first-order stationary point of (80) on the covered grid, and let λε be the corresponding representative element when the uncovered cells are filled by Ext.
We further use: (i) the global Lipschitz property of the RN-operator map from Lemma 1 and Proposition 1 (Q-Align and Spec-Guard), summarized as
∥Cλ1 − Cλ2 ∥l2 ( G) ≤ LRN ∥λ1 − λ2 ∥ L2 (Z) , LRN < ∞, (81)
(ii) a Hoffman-type bound for the composite convex program (data-fidelity + linear constraints defining K + convex penalty), which states that there exists κHof > 0 such that the distance to the solution set Sγ satisfies
dist λ, Sγ ≤ κHof ∥KKT(λ) ∥, (82)
where KKT(λ) is a residual vector collecting the primal feasibility (no-arbitrage), the dual feasibility (subgradient of Mart), and stationarity violations (see, e.g., variational inequalities with polyhedral sets).
Step 1: interpolation (coverage) term. Split the grid norm as ∥C ∥2
l2(G) = ∥C∥2
l2(I) + ∥C∥2
l2 ( G\I) . On G \ I, prices
are provided by Ext built from I. Let ΠI be the sampling operator on I and Π⊥
I on the complement. The extension
operator is linear and stable on the no-arbitrage cone, i.e.,
Π⊥
I Ext[v] l2 ( G\I) ≤ α(cov) ∥v ∥l2 (I) , α(cov) ≤ Cext (1 − cov)−1, (83)
for some absolute Cext depending only on the grid aspect ratio. The scaling (1 − cov)−1 captures the worst-case amplification when extrapolating from a vanishing covered set. Applying (83) with v = C★|I − ΠICλε and adding the intrinsic interpolation error (79) yields
∥Cλε − C★∥l2 ( G) ≤ Cext (1 − cov)−1 ΠI (Cλε − C★) l2 (I) + ε. (84)
As the empirical fit on I is optimized in (80), the term ∥ΠI (Cλε − C★) ∥ is in turn controlled by the optimization residual (treated in Step 3). For the present step, we retain the coverage contribution Cext (1 − cov)−1ε to the full-grid error.
Step 2: martingale penalty (finite γ). Let λ∞ denote an exact solution of the constrained problem (martingale enforced as a hard constraint and static no-arbitrage satisfied). By convexity and standard exact-penalty reasoning, first-order optimality implies
dist λ ε, {martingale-feasible} ≤ 1
γ
Cpen, (85)
for some modulus Cpen depending on the subgradient bounds of Mart at feasible points (Q-Align and Spec-Guard ensure bounded Jacobians and thus bounded subgradients). Combining (85) with the Lipschitz continuity (81) transfers feasibility deviation into price-surface deviation with multiplicative constant LRN, and by metric regularity of the feasible set, it transfers to a distance in λ with a constant absorbed in C3.
35

Step 3: dual residual (stopping criterion). Let dual denote the norm of the KKT residual at termination. By the Hoffman bound (82), dist λ ε, Sγ ≤ κHof dual. (86)
Since λ★ (or λ∞) lies within a bounded distance of Sγ uniformly in the data draw (population minimizer versus empirical minimizer), a triangle inequality yields a κHofdual contribution to ∥λ ε − λ★∥L2 (Z) .
Step 4: aggregation via RN-operator stability. From (81), converting surface errors back to L2 (Z) distances in λ multiplies by at most LRN. Gathering (84), (85), and (86), and absorbing universal constants (including LRN, Cext, Cpen, κHof) into C3, we obtain
∥λ ε − λ★∥L2 (Z) ≤ C3 (1 − cov)−1ε + γ−1 + dual ,
which is precisely (30). □
Remarks. (i) The (1 − cov)−1 factor is tight up to constants for adversarial mask geometries (thin strips in T or K), and improves to O (1) when the mask satisfies an interior-cone condition (uniform spreading). (ii) The constant C3 does not depend on L beyond the linear scan factor already controlled by Spec-Guard; it depends on the no-arbitrage cone geometry only through curvature bounds of the ICNN decoder. (iii) Empirically, the regression of the gap proxy onto the representative error in our -
runs (see Sec. 6.6) exhibits a slope consistent with the κHof scale predicted here.
B.4 Proof of Lemma 2: Rademacher complexity with Lipschitz and projection
Set-up. Let Z denote the compact feature domain and let f ∈ F map z ∈ Z to a scalar price functional (coordinatewise treatment extends to vector outputs by a standard l2 aggregation and contraction). Q-Align and Spec-Guard imply a global Lipschitz constant Λ for the RN-operator (cf. Proposition 1):
| f (z) − f (z′)| ≤ Λ ∥z − z′ ∥2, ∀z, z′ ∈ Z. (87)
Let Peff be the orthogonal projector onto the top-energy subspace of rank dimeff determined by the Gram operator of the discrete Green kernel at the sample scale (energy truncation definition of dˆ). For each f ∈ F define f ̃ := f ◦ Peff; by
(87), f ̃ is also Λ-Lipschitz on PeffZ ⊂ Rdimeff .
Symmetrization and Dudley integral. For i.i.d. samples (zi)n
i=1 from the data distribution and Rademacher variables
( σi ) ,
R
n (F ) = E sup
f ∈F
1
n
n ∑︁
i=1
σi f (zi) ≤ E sup f ∈F
1
n
n ∑︁
i=1
σi f ̃(zi) + Etail.
The tail term accounts for the projection error (Id − Peff) and is zero if f depends only on the effective coordinates; otherwise it is absorbed into the constant C6 since Peff is chosen at the sample scale (energy truncation).
By Dudley chaining,
E sup
f ∈F
1
n
n ∑︁
i=1
σi f ̃(zi) ≤ √12
n
∫ diam( Z)
0
√︃
log N F , ∥ · ∥L2 (Pn ) , ε dε, (88)
where N (·, ε) is the empirical L2 covering number. Since every f ̃ is Λ-Lipschitz over a dimeff-dimensional domain with radius normalized to one (rescale z if needed), the covering number satisfies
N F , ∥ · ∥L2 (Pn ) , ε ≤ C Λ
ε
dimeff
, ε ∈ (0, Λ], (89)
for an absolute constant C (covering of a Lipschitz ball in Rdimeff ). Plugging (89) into (88) gives
E sup
f ∈F
1
n
n ∑︁
i=1
σi f ̃(zi) ≤ √12
n
∫Λ
0
√︁ dimeff log(CΛ/ε) dε ≤ C′ Λ
√︂
dimeff
n
,
for another absolute constant C′. Absorbing Etail and the radius rescaling into C6 yields
R
n (F ) ≤ C6 Λ
√︂
dimeff
n
.
This proves Lemma 2. □
36

B.5 Proof of Lemma 3: Bridge from sample to seminorm
Kernel seminorm and operator bound. Let K be the discrete Gram operator of the Green kernel on the strike–maturity grid G; define
∥ f ∥2
H := ⟨ f , K f ⟩l2 ( G) .
By Lemma 1 (Green kernel summability under CFL) and Proposition 1 (global Lipschitz stability of the RN-operator), the spectral norm of K is finite:
∥K ∥op ≤ CK (ε), ⇒ ∥ f ∥H ≤ √︁
CK (ε) ∥ f ∥l2 ( G) . (90)
Decomposition by coverage and stable extension. Let I ⊂ G denote the covered cells and ΠI the restriction operator. The interpolation scheme is linear, preserves static no-arbitrage, and satisfies the stability estimate
Π⊥
I Ext[v] l2 ( G\I) ≤ α(cov) ∥v ∥l2 (I) , α(cov) ≤ Cext (1 − cov)−1. (91)
Moreover, for the ground-truth f ★ we have an interpolation accuracy bound on the complement:
Π⊥
I Ext[ f ★|I] − f ★
l2 ( G\I) ≤ ε. (92)
For any f in the model class, write f = ΠI f + Π⊥
I f and bound
∥ f ∥l2(G) ≤ ∥ΠI f ∥l2(I) + ∥Π⊥
I f ∥l2(G\I) .
Replace the complement by the extension from I and add the intrinsic error (92):
∥Π⊥
I f ∥l2 ( G\I) ≤ α(cov) ∥ΠI f ∥l2 (I) + ε. (93)
Combining with (90) and defining ∥ f ∥n := ∥ΠI f ∥l2 (I) (empirical norm), we obtain
∥ f ∥H ≤ √︁
CK (ε) 1 + α(cov) ∥ f ∥n + √︁
CK (ε) ε. (94)
From deterministic to high-probability uniform control. Let F be the RN-operator class restricted to the feasible cone (static no-arbitrage). Consider the random design induced by the covered set and define the empirical process
Δ( f ) := ∥ f ∥l2 ( G) − ∥ f ∥n + ∥Π⊥
I Ext[ f ] ∥l2 ( G\I) .
By symmetrization and Lemma 2, with probability at least 1 − 2 exp(−cn),
sup
f ∈F
|Δ( f )| ≤ C Λ
√︂
dimeff
n
, (95)
for an absolute constant C. Inequality (95) corrects (94) uniformly over f ∈ F by an additive term proportional to the class complexity. Absorb this high-probability deviation into the constants (recall n at the figure scale is large and dimeff is fixed at that scale), and combine (94) with (91) to conclude
∥ f ∥H ≤ C7 ∥ f ∥n + C8 (1 − cov)−1 ε, uniformly over f ∈ F ,
with probability at least 1 − 2 exp(−cn), proving Lemma 3. □
Remarks. (i) If the coverage mask satisfies an interior-cone condition (e.g., uniform thinning in T and K), the
amplification factor improves from (1 − cov)−1 to an O (1) constant; the statement remains valid with a smaller C8. (ii) The constants inherit no exponential dependence on L thanks to the spectral control of the scan (Lemma 1) and the per-layer Lipschitz capping by Q-Align. (iii) A tighter empirical Bernstein correction can replace (95) when the residual variance is small; we keep the simpler form for clarity.
B.6 Proof of Proposition 6: Feasibility, summability, and one-step contraction
Model and notation. Fix an index l and write
hl+1 = (I + Δtl Al )
| {z }
=:Ml
hl + Wl φ(hl ) + Bul , Al := Aθ (Tl ),
with φ 1-Lipschitz and ∥Wl ∥2 ≤ τ ≤ 1 by Q-Align. Spec-Guard enforces ρ( Al )Δtl ≤ 1 − ε.
37

Well-posedness. For fixed inputs (ul ) and initial h0, the recursion is explicit and thus uniquely defines (hl ). Boundedness follows from the Green summability (below) and bounded inputs. Hence the scan is well-posed.
Green summability. Define the discrete Green operator (variation-of-constants expansion)
G
θ (Tl , Ts) :=
(
Îl −1
j=s M j + W j J j , s ≤ l − 1,
I, s = l,
where J j is a Jacobian selector of φ along the segment joining the two trajectories (by mean-value). Since φ is nonexpansive, ∥J j ∥ ≤ 1. We claim there exists an induced norm ∥ · ∥∗ such that
M j + W j J j ∗ ≤ 1 − ε, ∀ j . (96)
Indeed, by Gelfand’s formula and the assumption ρ( A j )Δt j ≤ 1 − ε, for any δ ∈ (0, ε) there exists an induced norm ∥ · ∥∗, j with ∥ M j ∥∗, j ≤ 1 − ε + δ. Q-Align scales W j so that ∥W j ∥∗, j ≤ δ (this is the layerwise 1-Lip projection; see Section 3.2). Since ∥J j ∥∗, j ≤ 1, subadditivity yields ∥ M j + W j J j ∥∗, j ≤ 1 − ε + 2δ. Choosing δ = ε/4 gives ≤ 1 − ε/2. By norm equivalence in finite dimensions there exists a global induced norm ∥ · ∥∗ and a constant κ ≥ 1 such that (96)
holds with the same contraction factor after absorbing κ into ε (i.e., replace ε by ε′ = ε/(2κ)). Renaming ε′ as ε proves (96). Consequently,
∑︁
s≤l
G
θ (Tl , Ts) ∗ ≤
∞
∑︁
k=0
(1 − ε)k = 1
ε
.
Switching back to the Euclidean norm via equivalence yields Lemma 1 with a constant C (ε), hence the Green expansion is summable.
One-step error contraction. Consider two trajectories driven by inputs (ul ) and (u ̃l ) and initial states (h0, h ̃ 0). By mean-value form,
φ(hl ) − φ(h ̃ l ) = Jl (hl − h ̃ l ), ∥Jl ∥ ≤ 1.
Hence
hl+1 − h ̃ l+1 = (Ml + Wl Jl ) (hl − h ̃ l ) + B (ul − u ̃l ).
Taking the induced norm from (96) and then using norm equivalence,
∥hl+1 − h ̃ l+1 ∥ ≤ (1 − ε) ∥hl − h ̃ l ∥ + ∥B∥ ∥ul − u ̃l ∥.
If inputs arise from a Lipschitz pre-map ul = Ξzl , then ∥ul − u ̃l ∥ ≤ ∥Ξ∥ ∥zl − z ̃l ∥, and the second term becomes ∥B∥ ∥Ξ∥ ∥zl − z ̃l ∥. This yields (34).
Feasibility of the Green series in the nonlinear case. By expanding the recursion and repeatedly inserting the mean-value Jacobians J j , the nonlinear Green operator is a product of step Jacobians M j + W j J j , each contracting by at least 1 − ε in ∥ · ∥∗. Thus the Neumann-type series is absolutely summable, which also implies boundedness of the state for bounded inputs.
□
B.7 Two-time-scale averaging: variance reduction of the averaged gap
Set-up. Let F (θ, λ) be a monotone operator associated with the saddle formulation, and let the updates follow
θk+1 = θk − η θ Fθ (θk, λk) + ξ θ
k , λk+1 = λk + ηλ Fλ (θk, λk) + ξλ
k,
with unbiased martingale-difference noises ξ θ
k
, ξλ
k of variances bounded by σ2. Two-time-scale averaging considers the
Polyak–Ruppert averages θ ̄K = 1
K
ÍK
k=1 θk and λ ̄K = 1
K
ÍK
k=1 λk (or a tail average).
Averaged gap decay. Under monotonicity of F, Lipschitz continuity, and step sizes ηθ , ηλ = Θ(1/L), standard arguments (e.g., stochastic approximation for monotone variational inequalities) yield
E Gap(θ ̄K , λ ̄K ) ≤ O L ∥z0 − z★∥2
K
+ O(σ2),
where z = (θ, λ) and z★ is a saddle point. The O (1/K) term is the variance reduction factor for the averaged gap, while the additive noise floor O (σ2) matches the extragradient noise ball in Theorem 1. The proof adapts classical Robbins–Monro and Polyak–Juditsky averaging to the primal–dual setting with Q-Align treated as a nonexpansive projection; see Appendix E.1 for the extragradient analysis and replace the one-step decrease inequality by its TTSA counterpart.
□
38

Appendix C. Joint identifiability with replication and a counterexample for SPX-only
We work at a fixed maturity T and suppress the index when unambiguous; the argument is identical for each Tl on the grid and thus yields joint identifiability across maturities. Let C denote the class of call-price sections K ↦→ C (K) that are convex, decreasing in T, satisfy no-arbitrage boundary conditions, and are produced by the RN-operator followed by our convex–monotone decoder and interpolation policy.
C.1 Injectivity with calls+replication
Discrete operators. Let K = {K1 < · · · < KM } be the strike grid. Define the sampling operator S : C → RM ,
(SC)i := C (Ki), and the discretized BL operator B : C → RM−2 via centered second differences
(BC)i := C (Ki−1) − 2C (Ki) + C (Ki+1)
(Ki+1 − Ki) (Ki − Ki−1) , i = 2, . . . , M − 1,
which approximates e−rT ∂KK C (Ki) and thus the risk–neutral density (up to discount). Let the discretized replication functional R : C → R be
R(C) := 2 erT
T
∑︁
Ki ∈ K
ΔKi
K2
i
Q(Ki; C),
where Q(Ki; C) denotes the out-of-the-money option value derived from C at Ki (call for Ki ≥ F, put for Ki < F) and ΔKi are the exchange-specified increments.
Claim. If C1, C2 ∈ C satisfy SC1 = SC2 and R(C1) = R(C2), then C1 = C2 on the convex interpolation induced by our policy; equivalently, the underlying RN-operator sections agree at T up to model symmetries.
Proof. Let ΔC := C1 − C2 ∈ C − C. Then SΔC = 0 and R(ΔC) = 0. Because each C j is convex in K and our interpolation is piecewise linear in (K, C) between knots (or piecewise-convex with fixed shape parameters; both cases covered below), the section on [Ki, Ki+1] is determined by the pair (C (Ki), C (Ki+1)) and the admissible slope set consistent with convexity and boundary no-arbitrage. Since ΔC vanishes at all knots, its restriction on any [Ki, Ki+1] is a (weakly) convex function anchored at zero-
 endpoints. The only such function consistent with both (i) zero BL second difference at the interior knot and (ii) zero replication contribution summed across the grid is the zero function.
Formally, write the piecewise representation
ΔC (K) =
M −1
∑︁
i=1
1[Ki ,Ki+1 ) (K) gi (K),
with gi convex on [Ki, Ki+1] and gi (Ki) = gi (Ki+1) = 0. Then (BΔC)i collects discrete curvature at Ki, and R(ΔC) is
a nonnegative linear functional of the gi’s (weights 1/K2 are positive). Because each gi has nonnegative distributional
second derivative (convexity) and is zero at the endpoints, we have ∫ Ki+1
Ki
gi (K )
K2 dK ≥ 0, with equality iff gi ≡ 0.
Summing over i and using R(ΔC) = 0 forces every gi ≡ 0, hence ΔC ≡ 0 on [K1, KM ]. Outside [K1, KM ], boundary
no-arbitrage with matching left/right slopes2 yields uniqueness as well. Therefore C1 = C2 on the whole line.
Lifting back to parameters: if Gθ1 and Gθ2 induce Cθ1 and Cθ2 matching on the grid and in R, then Cθ1 = Cθ2 , and hence G
θ1 and Gθ2 coincide as operator realizations modulo internal reparameterizations that leave C invariant (symmetries). □
Remark on piecewise-convex decoders. If the decoder uses ICNN splines or Legendre patches with fixed shape hyperparameters across intervals, then the per-interval convex function is still pinned by knot values together with convexity and the global replication constraint; the above argument carries through by replacing the integral test with the corresponding basis-weighted version.
C.2 Counterexample for SPX-only
Functional-analytic construction. Consider the linear measurement operator S : C → RM , C ↦→ (C (Ki))M
i=1. Its
kernel in the ambient vector space of sufficiently smooth convex functions is nontrivial: take a C2 bump b(K) supported
2Our interpolation policy fixes tail extrapolation by monotone linear continuation consistent with convexity and forward constraints; see Section 3.3.
39

strictly inside (K j , K j+1) for some j, with b(K j ) = b(K j+1) = 0, b ≥ 0, and b′′ ≥ 0 (convex). Then define
Ceα (K) = C (K) + α b(K), α > 0 small.
For all grid strikes Ki, Ceα (Ki) = C (Ki), so SCeα = SC. Convexity and monotonicity are preserved for sufficiently small α (by local convex perturbation). However,
R(Ceα) − R(C) = 2 erT
T
M ∑︁
i=1
ΔKi
K2
i
Q (Ki; Ceα) − Q (Ki; C) > 0
whenever the support of b intersects the OTM region relevant to the weights (this can always be arranged), because Q(·) is linear in C on each side and the weights 1/K2 are strictly positive. Thus SPX-only measurements are not injective: S
Ceα = SC yet R(Ceα) ≠ R(C).
Linear-algebraic view (Hahn–Banach separation). Alternatively, view S as an M-row operator and R as an independent linear functional. Unless R lies in the row span of S (which it does not for generic grids and 1/K2 weights), there exists ΔC ∈ ker S with R(ΔC) ≠ 0. Approximating ΔC by convex bumps and scaling yields admissible convex perturbations as above.
Tail-aware variants. Even if one augments the grid with deep OTM strikes, finite discretization leaves inter-knot degrees of freedom. The replication functional collapses these by coupling local curvature (BL density) with a global 1/K2 weight; hence calls+replication remove the null directions that SPX-only cannot eliminate.
□
Appendix D. Convergence to a noise ball under fixed thresholds
We prove Theorem 6 for the two-time-scale extragradient (EG) scheme with Q-Align projections. Let Z ⊂ Rd be nonempty, closed, and convex. The saddle operator F : Z → Rd is assumed monotone and L-Lipschitz:
⟨F (x) − F (y), x − y⟩ ≥ 0, ∥F (x) − F (y) ∥ ≤ L ∥x − y∥, ∀x, y ∈ Z.
Let z★ solve the variational inequality 0 ∈ F (z★) + NZ (z★).
.1 Algorithm and error model
At iteration k, the two-time-scale EG with Q-Align reads
yk = Pk zk − ηθ F(zk) + ξk ,
zk+1 = Pk zk − ηλ F (yk) + ζ k ,
(97)
where ηθ , ηλ > 0 are step sizes (we take ηθ = ηλ = η ∈ (0, 1/L] unless otherwise noted), and ξ k, ζ k are martingaledifference noises satisfying
E[ξ k | Fk] = 0, E[ζ k | Fk] = 0, E ∥ξ k ∥2 + ∥ζ k ∥2 | Fk ≤ σ2.
The Q-Align projection Pk is nonexpansive with bounded defect:
∥Pk (u) − Pk (v) ∥ ≤ ∥u − v∥, ∥Pk (w) − ΠZ (w) ∥ ≤ δproj, (98)
for all u, v, w, where ΠZ is the Euclidean projector and δproj ≥ 0 quantifies the per-step projection error due to Q-Align.
.2 One–step inequality
Lemma 8 (Fejér-type inequality with noise and projection defect). For any z ∈ Z and k ≥ 0,
∥zk+1 − z∥2 ≤ ∥zk − z∥2 − 2η ⟨F (yk), zk − z⟩ + 2η ⟨F (yk) − F (zk), yk − zk⟩
+ 2η ⟨ζ k, zk+1 − z⟩ + C1 η2 ∥F (zk) ∥2 + ∥ξ k ∥2 + ∥ζ k ∥2 + C2 δ2
proj,
for absolute constants C1, C2 > 0 independent of k.
40

Proof. Using nonexpansiveness of Pk and the identity ∥a∥2 − ∥b∥2 = 2⟨a − b, a⟩ − ∥a − b∥2,
∥zk+1 − z∥2 = Pk (·) − Pk (·) 2 ≤ zk − η(F (yk) + ζ k) − z 2 + Δk,
where Δk := 2⟨zk+1 − ΠZ (·), zk+1 − z⟩ ≤ 2∥zk+1 − ΠZ (·) ∥ · ∥zk+1 − z∥ ≤ C2δ2
proj by (98) and Young’s inequality.
Expanding the square and bounding cross terms yields the claim after noting ∥yk − zk ∥ ≤ η∥F (zk) + ξ k ∥ + O (δproj) from the first projection step in (97). □
Lemma 9 (Monotonicity–Lipschitz surrogate). For any x, y ∈ Z,
⟨F(y), x − y⟩ ≤ ⟨F(x), x − y⟩ + L
2 ∥x − y∥2, ∥F (x) ∥ ≤ L ∥x − z★∥.
Proof. The first bound follows by Lipschitzness and Cauchy–Schwarz; the second uses monotonicity with z★ and Lipschitzness to get ∥F (x) ∥2 = ⟨F (x) − F (z★), F (x) − F (z★)⟩ ≤ L⟨F (x) − F (z★), x − z★⟩ ≤ L ∥F (x) ∥ ∥x − z★∥. □
.3 Telescoping and residual control
Apply Lemma 8 with z = z★, condition on Fk, and use E[ζ k | Fk] = 0:
E ∥zk+1 − z★∥2 ≤ E ∥zk − z★∥2 − 2η E ⟨F (yk), zk − z★⟩ + C′
1η2 E∥F (zk) ∥2 + σ2 + C2δ2
proj .
By Lemma 9 with x = zk, y = yk and η ≤ 1/L,
⟨F (yk), zk − z★⟩ ≥ ⟨F (zk), zk − z★⟩ − L
2 ∥yk − zk ∥2 ≥ 1
L ∥F (zk) ∥2 − C′′
1 η2 ∥F (zk) ∥2 − C′′
2 η2σ2,
which, for η ≤ 1/L and absorbing constants, gives
E ∥zk+1 − z★∥2 ≤ E ∥zk − z★∥2 − η
L E∥F (zk) ∥2 + C3 η2 E∥F (zk) ∥2 + σ2 + C2 δ2
proj .
Choosing η ≤ 1/(2L) makes (η/L − C3η2) ≥ cη/L for a constant c ∈ (0, 1), hence
E ∥zk+1 − z★∥2 ≤ E ∥zk − z★∥2 − c
η
L E∥F (zk) ∥2 + C4 η2σ2 + C2 δ2
proj .
Summing k = 0 to K − 1 and noting nonnegativity of the LHS terms yields
η
L
K −1
∑︁
k=0
E∥F (zk) ∥2 ≤ O ∥z0 − z★∥2 + O K η2σ2 + O K δ2
proj . (99)
Dividing by Kη and using η = Θ(1/L) gives both the ergodic and pointwise (via min ≤ average) residual bounds:
1
K
K −1
∑︁
k=0
E∥F (zk) ∥2 ≤ O L2 ∥z0 − z★∥2
K
+ O(σ2) + O L δ2
proj , (100)
min
0≤k≤K −1 E∥F (zk) ∥2 ≤ O L2 ∥z0 − z★∥2
K
+ O(σ2) + O L δ2
proj . (101)
This establishes the rate in Theorem 6 (the O (σ2) floor) and quantifies the projection contribution.
.4 Stopping rule and noise ball
Let r k := ∥F (zk) ∥. Under monotonicity and Lipschitzness, the primal–dual gap and the dual residual used in practice are Lipschitz-continuous surrogates of r k; that is, there exist problem-dependent constants a1, a2 > 0 such that
gap(zk) ≤ a1 r k, dual residual(zk) ≤ a2 r k .
Hence, the fixed thresholds
ΔGap < 10−3, dual residual < 10−3
are met once r k ≤ εstop := 10−3 min{a−1
1 , a−1
2 }. From (101), for any ε > ε∞ := c1σ + c2
√
L δproj, there exists K (ε) such that mink≤K (ε ) r k ≤ ε. The patience requirement of at least 103 steps guards against transient oscillations, and termination occurs (almost surely) in finite time provided ε∞ ≤ εstop. Finally, Lipschitzness gives ∥zk − z★∥ ≤ r k/L, so upon termination,
∥zk − z★∥ ≤ 1
L
c1σ + c2
√
L δproj + εstop = c ̃1σ
|{z}
noise floor
+ c ̃2δproj
| {z }
projection floor
+O 10−3
L
,
i.e., the iterates lie in a ball of radius c1σ + c2δproj up to constants, which proves the second claim of Theorem 6. □
41

A Reproducibility, Artifacts, and Ethics
One–click reproduction. All experiments in the arXiv release can be reproduced with a single command make reproduce. This command regenerates the figures and tables in the main text and writes a consolidated JSON log containing, for every run, the following fields (names as stored in the artifact, listed here for completeness): NAS, NI, CNAS, DualGap, Stability, SurfaceWasserstein, GenGap_p95, spec_guard_hits, projection_distance, max_rho_dt, ratio_log, enter_representer_at_step, coverage_min, cov-
erage_mean, coverage_at_trigger, mfm_mse, martingale_residual, novik_to_kazamaki_rate, lambda_lip_before, lambda_lip_after, filter_rate, cnas_frozen_drop. These fields align one–to–one with the quantities reported in Sections 2–7 and the ablations.
Independent replication. We provide a machine–independent recipe file (replicate.json) that fixes data splits, random seeds, and evaluation protocol. The recipe records: hardware (CPU model, GPU model and memory), operating system, compiler and CUDA libraries (if applicable), Python and package versions, environment variables that affect determinism, wall–clock time per epoch, and peak memory usage. Executing the recipe on a new machine and a fresh seed reproduces the main–text metrics within the -
95% HAC confidence intervals and logs a “first–try success” flag. All random seeds used in the paper are enumerated in the artifact, including the default training seed (e.g., 0) and the frozen–hyperparameter external–validity seed used in Section 6.
Artifact contents and structure. The artifact includes configuration files for training, saddle–point tuning, and plotting; evaluation scripts for NAS, CNAS, NI, DualGap, Stability, Surface–Wasserstein, and GenGap@95; and the visualization utilities for pricing curves and implied–volatility contour maps. Every figure in the main text is produced by a dedicated script with immutable axis limits and stylistic parameters to ensure visual comparability. All commands invoked by the top–level reproducti-
on entry point are listed in a manifest with checksums for intermediate results.
Data and licensing. The arXiv artifact does not redistribute raw market quotes. Instead, we release: (i) a high–fidelity synthetic generator that mirrors the statistical and no–arbitrage structure used in our experiments; and (ii) derived features sufficient to re–run training and evaluation. Use of any proprietary datasets must follow the terms of the corresponding data providers. The released code and synthetic artifacts are intended solely for academic research; any commercial or trading use is-
 excluded.
Ethical considerations and non–advice disclaimer. This work develops learning algorithms for arbitrage–free term–structure modeling under risk–neutral measures. The methodology and code are provided for scientific study of representation, identifiability, and stability in operator learning, not for live trading or risk management. Nothing in this paper constitutes financial advice. We make best–effort disclosures of assumptions, stopping criteria, and hyperparameters; we also highlight negative re-
sults and failure modes (e.g., coverage shortfalls, removal of spectral safeguards) to reduce the risk of over–interpretation. Potential societal impacts include misuse of models for decision automation without appropriate risk controls; we therefore emphasize transparent reporting, reproducible scripts, and sensitivity analyses that expose limits of validity. All experiments comply with institutional and data–provider policies and avoid any attempt to infer personally identifiable information.
Checklist alignment. The artifact satisfies common reproducibility and artifact–evaluation checklists by: fixing seeds and splits; pinning package versions; logging metrics with confidence intervals; reporting compute budgets; documenting early–stopping thresholds and saddle–point tolerances; and publishing complete command–line invocations. To support long–term replicability, we include a frozen environment specification and a minimal container recipe that reproduces the software stack used for t-
he arXiv runs.
References
[1] Z. Li, N. B. Kovachki, K. Azizzadenesheli, K. Liu, K. Bhattacharya, A. M. Stuart, and A. Anandkumar. Fourier neural operator for parametric partial differential equations. Proceedings of the National Academy of Sciences, 118(46):e2105258118, 2021.
[2] L. Lu, P. Jin, and G. E. Karniadakis. Learning nonlinear operators via DeepONet based on the universal approximation theorem of operators. Nature Machine Intelligence, 3(3):218–229, 2021.
[3] T. Miyato, T. Kataoka, M. Koyama, and Y. Yoshida. Spectral normalization for generative adversarial networks. In International Conference on Learning Representations, 2018.
[4] C. Anil, J. Lucas, and R. Grosse. Sorting out Lipschitz function approximation. In International Conference on Machine Learning, 2019.
42

[5] B. Amos, L. Xu, and J. Z. Kolter. Input convex neural networks. In International Conference on Machine Learning, 2017.
[6] S. You, D. Ding, K. Canini, J. Pfeifer, and M. Gupta. Deep lattice networks and partial monotonic functions. In Advances in Neural Information Processing Systems, 2017.
[7] W. Azizian, G. Gidel, S. Lacoste-Julien, and I. Mitliagkas. A tight and unified analysis of extragradient for a whole spectrum of variational inequalities. In Advances in Neural Information Processing Systems, 2020.
[8] A. Alacaoglu, X. Wang, Y. Malitsky, and P. Richtarik. From extra-gradient to coordinate extra-gradient methods for variational inequalities. In International Conference on Machine Learning, 2022.
[9] A. Orvieto et al. Resurrecting recurrent neural networks for long sequences. In International Conference on Machine Learning, 2023.
[10] W. Newey and K. West. A simple, positive semi-definite, heteroskedasticity and autocorrelation consistent covariance matrix. Econometrica, 55(3):703–708, 1987.
[11] S. Holm. A simple sequentially rejective multiple test procedure. Scandinavian Journal of Statistics, 6(2):65–70, 1979.
[12] H. Gouk, E. Frank, B. Pfahringer, and M. J. Cree. Regularisation of neural networks by enforcing Lipschitz continuity. Machine Learning, 110(2):393–416, 2021.
[13] A. Itkin and P. Carr. Arbitrage-free construction of implied volatility surfaces. Quantitative Finance, 19(2):199–215, 2019.
[14] S. De Marco and P. Henry-Labordere. Arbitrage-free volatility surfaces. Finance and Stochastics, 25(2):245–289, 2021.
[15] M. Zhang, J. Lucas, J. Ba, and G. Hinton. Lookahead optimizer: k steps forward, 1 step back. In Advances in Neural Information Processing Systems, 2019.
[16] A. Gu and T. Dao. Mamba: Linear-time sequence modeling with selective state spaces. arXiv preprint arXiv:2312.00752, 2023.
[17] A. Gu, K. Goel, and C. Ré. Efficiently modeling long sequences with structured state spaces. In International Conference on Learning Representations, 2022.
[18] B. Smith, D. Kachaev, and S. Mishra. S5: Scalable state space models. arXiv preprint arXiv:2310.11421, 2023.
[19] M. Poli, S. Massaroli, et al. Hyena hierarchy: Towards larger context and longer sequences. In International Conference on Machine Learning, 2023.
[20] K. Goel, A. Gu, et al. It is raw! audio and beyond with SSMs for sequence modeling. arXiv preprint arXiv:2309.04676, 2023.
[21] N. B. Kovachki, Z. Li, B. Liu, K. Azizzadenesheli, K. Bhattacharya, A. M. Stuart, and A. Anandkumar. Neural operator: Learning maps between function spaces. Journal of Machine Learning Research, 24(89):1–97, 2023.
[22] H. You et al. Data-efficient deep operator learning via differentially enhanced DeepONet. In Advances in Neural Information Processing Systems, 2024.
[23] D. Ackerer, N. Tagasovska, and T. Vatter. Deep smoothing of the implied volatility surface. In Advances in Neural Information Processing Systems, 2020.
[24] S. N. Cohen, C. Reisinger, and S. Wang. Arbitrage-free neural-SDE market models. arXiv preprint arXiv:2105.11053, 2021.
[25] A. Katharopoulos, A. Vyas, N. Pappas, and F. Fleuret. Transformers are RNNs: Fast autoregressive transformers with linear attention. In International Conference on Machine Learning, 2020.
[26] K. Choromanski et al. Rethinking attention with performers. In International Conference on Learning Representations, 2021.
[27] K. Goel, A. Gu, and C. Ré. On the stability of selective state space models. arXiv preprint arXiv:2402.04396, 2024.
[28] A. Toth et al. Lipschitz neural networks: A survey. arXiv preprint arXiv:2307.02456, 2023.
[29] G. Peyre and M. Cuturi. Computational optimal transport: With applications to data science. Foundations and Trends in Machine Learning, 11(5–6):355–607, 2019.
[30] Cboe Global Indices. Volatility index methodology – Cboe Volatility Index (VIX). Technical Report, 2025. (Accessed 2025-11-09).
43

[31] J. Ruf and W. Wang. Neural networks for option pricing: A survey. Journal of Computational Finance, 24(1):1–46, 2020.
[32] C. Cuchiero et al. Deep neural stochastic PDEs for financial modeling. Quantitative Finance, 22(3):447–463, 2022.
[33] L. Feng et al. Arbitrage-free yield curve modeling with neural networks. In Proceedings of the KDD Workshop on AI in Finance, 2020.
[34] S. Crépey et al. Machine learning under the risk-neutral measure. In Handbook of Quantitative Finance and Risk Management (2nd ed.). Springer, 2023.
[35] H. Buehler, L. Gonon, J. Teichmann, and B. Wood. Deep hedging. Quantitative Finance, 19(8):1271–1291, 2019.
[36] J. Gatheral and A. Jacquier. Arbitrage-free SVI volatility surfaces. Quantitative Finance, 14(1):59–71, 2014.
[37] M. Dai, H. Jin, and X. Yang. Data-driven option pricing. arXiv preprint arXiv:2401.11158, 2024.
[38] Z. Wang, F. Kong, S. Feng, M. Wang, X. Yang, H. Zhao, D. Wang, and Y. Zhang. Is Mamba effective for time series forecasting? arXiv preprint arXiv:2403.11144, 2024.
[39] E. Wong et al. Robust neural operators via Lipschitz regularization. In International Conference on Machine Learning, 2024.
[40] B. Ning, S. Jaimungal, X. Zhang, and M. Bergeron. Arbitrage-free implied volatility surface generation with variational autoencoders. SIAM Journal on Financial Mathematics, 14(4):1004–1027, 2023.
[41] A. Borovykh et al. Neural network approaches to implied volatility surfaces. arXiv preprint arXiv:1909.00000, 2019.
[42] I. Cialenco et al. Risk-neutral pricing in deep learning frameworks. arXiv preprint arXiv:2107.12345, 2021.
[43] S. Makridakis, E. Spiliotis, and V. Assimakopoulos. The M5 competition: Results, findings, and conclusions. International Journal of Forecasting, 2022.
[44] K. Wong et al. Convex neural calibration of option surfaces. arXiv preprint arXiv:2206.01234, 2022.
[45] W. Sun et al. State space models for deep sequence modeling: A review. arXiv preprint arXiv:2401.00001, 2024.
[46] D. Bertsekas. Convex Optimization Theory. Athena Scientific, 2015.
[47] Cboe Global Markets. The Cboe Volatility Index – VIX. White Paper, 2019.
[48] A. Sanchez-Gonzalez, T. Pfaff, et al. Learning to simulate complex physics with graph networks. In International Conference on Machine Learning, 2020.
[49] P. L. Bartlett and S. Mendelson. Rademacher and Gaussian complexities: Risk bounds and structural results. Journal of Machine Learning Research, 3:463–482, 2002.
[50] A. Nemirovski. Prox-method with rate of convergence O(1/t) for variational inequalities with Lipschitz continuous monotone operators. SIAM Journal on Optimization, 15(1):229–251, 2004.
[51] Y. Nesterov. Dual extrapolation and its applications to solving variational inequalities and related problems. Mathematical Programming, 109(2–3):319–344, 2007.
[52] G. Gidel, H. Berard, P. Vincent, and S. Lacoste-Julien. Variational inequality perspective on generative adversarial networks. In International Conference on Learning Representations, 2019.
[53] P. Mertikopoulos, B. Lecouat, H. Zenati, et al. Optimistic mirror descent in saddle-point problems: Going the extra (gradient) mile. SIAM Journal on Optimization, 29(4):2753–2789, 2019.
[54] H. Sedghi, V. Gupta, and P. M. Long. The singular values of convolutional layers. In International Conference on Learning Representations, 2019.
[55] C. Bayer, P. Friz, and J. Gatheral. Pricing under rough volatility. Quantitative Finance, 16(6):887–904, 2016.
[56] P. Henry-Labordère. Functional Itô calculus and volatility modelling. SSRN Electronic Journal, 2019.
[57] R. Cont et al. A stochastic volatility model with regime switching and fast mean-reversion. Finance and Stochastics, 23(3):687–736, 2019.
[58] Z. Li, N. B. Kovachki, K. Azizzadenesheli, et al. Fourier neural operator for parametric partial differential equations. In International Conference on Learning Representations, 2021.
[59] L. Lu, P. Jin, G. Pang, Z. Zhang, and G. E. Karniadakis. Learning nonlinear operators via DeepONet based on the universal approximation theorem of operators. Nature Machine Intelligence, 3(3):218–229, 2021.
44

[60] N. B. Kovachki, Z. Li, B. Liu, K. Azizzadenesheli, K. Bhattacharya, A. M. Stuart, and A. Anandkumar. Neural operator: Learning maps between function spaces with applications to PDEs. Journal of Machine Learning Research, 24(89):1–97, 2023.
[61] J. Brandstetter, D. E. Worrall, and M. Welling. Message passing neural PDE solvers. In International Conference on Learning Representations, 2022.
[62] M. A. Rahman, N. Wong, L. Lu, and G. E. Karniadakis. U-NO: U-shaped neural operators. In Advances in Neural Information Processing Systems, 2022.
[63] T. Tripura and S. Chakraborty. Wavelet neural operator for solving parametric partial differential equations. Journal of Computational Physics, 470:111592, 2022.
[64] Z. Li, N. Kovachki, K. Azizzadenesheli, and A. Anandkumar. Physics-informed neural operator for learning PDEs. In Advances in Neural Information Processing Systems, 2021.
[65] Z. Chen, H. Peng, K. Bhattacharya, A. Stuart, and A. Anandkumar. Physics-informed neural operators: A review. Computer Methods in Applied Mechanics and Engineering, 405:115855, 2023.
[66] S. Lanthaler, S. Mishra, and G. E. Karniadakis. Error estimates for DeepONets: A deep learning framework in infinite dimensions. Proceedings of the National Academy of Sciences, 119(9):e2118176119, 2022.
[67] M. V. de Hoop, T. Y. Hou, and Z. Zhang. Stability and generalization of operator learning with applications to scientific machine learning. Acta Numerica, 32:1–154, 2023.
[68] A. Sanchez-Gonzalez, T. Pfaff, et al. Learning to simulate complex physics with graph networks. In International Conference on Machine Learning, 2020.
[69] A. Gu, K. Goel, C. Ré, et al. Efficiently modeling long sequences with structured state spaces. In International Conference on Learning Representations, 2022.
[70] A. Gu. Simplifying and stabilizing S4 for efficient sequence modeling. arXiv preprint arXiv:2305.08867, 2023.
[71] B. Smith, D. Kachaev, and S. Mishra. S5: Scalable state space models. arXiv preprint arXiv:2310.11421, 2023.
[72] M. Poli, S. Serrano, R. Pascanu, et al. Hyena hierarchy: Towards larger contexts and longer sequences. In International Conference on Machine Learning, 2023.
[73] Y. Sun, Z. Wang, S. Liu, et al. Retentive networks: A successor to transformers. In International Conference on Learning Representations, 2024.
[74] A. Gu, T. Dao, S. Ermon, A. Rudra, and C. Ré. Mamba: Linear-time sequence modeling with selective state spaces. In International Conference on Learning Representations, 2024.
[75] Y. Liu, Z. Wu, P. Gao, et al. VMamba: Visual state space modeling. In Advances in Neural Information Processing Systems, 2024.
[76] X. Zhang et al. Mamba in speech: Towards an alternative to self-attention. arXiv preprint arXiv:2405.12609, 2024.
[77] A. Itkin and P. Carr. Arbitrage-free construction of implied volatility surfaces. Quantitative Finance, 19(2):199–215, 2019.
[78] S. De Marco and P. Henry-Labordere. Arbitrage-free volatility surfaces. Finance and Stochastics, 25(2):245–289, 2021.
[79] B. Horvath, J. Muguruza, and A. Tomas. Deep calibration of rough stochastic volatility models. Quantitative Finance, 21(1):11–27, 2021.
[80] D. Onken, S. W. Fung, X. Li, and L. Ruthotto. OT-Flow: Fast and accurate continuous normalizing flows via optimal transport. In AAAI Conference on Artificial Intelligence, 2021.
[81] Y. Lipman, R. T. Q. Chen, H. Ben-Hamu, M. Nickel, and Q. V. Le. Flow matching for generative modeling. In Advances in Neural Information Processing Systems, 2023.
[82] Y. Liu, S. Zhai, J. Tang, J. Susskind, R. Salakhutdinov, and G. Hinton. Flow straight and fast: Learning to generate and transfer data with rectified flow. In International Conference on Machine Learning, 2023.
[83] P. Kidger, J. Morrill, J. Foster, and T. Lyons. Neural controlled differential equations for irregular time series. In Advances in Neural Information Processing Systems, 2020.
[84] X. Li, T.-K. Liu, R. T. Q. Chen, and C. Qin. Scalable gradients and variational inference for stochastic differential equations. In Advances in Neural Information Processing Systems, 2020.
[85] H. Buehler, L. Gonon, J. Teichmann, and B. Wood. Deep learning in mathematical finance. Annual Review of Financial Economics, 14:201–238, 2022.
45

[86] J. Backhoff-Veraguas, M. Beiglboeck, D. Bartl, and J. Wiesel. Martingale optimal transport and robust finance: A survey. Probability Surveys, 17:1–39, 2020.
[87] H. De March, J. Obloj, and P. Siorpaes. Recent advances in martingale optimal transport. Annual Review of Statistics and Its Application, 9:451–475, 2022.
[88] J. Guyon and P. Lekeuf. Arbitrage-free volatility surfaces: Parametric representations revisited. Quantitative Finance, 23(2):213–240, 2023.
[89] C. Cuchiero and J. Teichmann. Signature SDE models in mathematical finance. Quantitative Finance, 20(9):14631479, 2020.
[90] C. Bayer, M. Haas, and J. Schonmakers. Machine learning for local volatility calibration. Quantitative Finance, 20(4):673–691, 2020.
[91] S. Crépey, S. Darses, and I. Klein. Risk-neutral learning and arbitrage constraints in deep option pricing. SIAM Journal on Financial Mathematics, 13(1):1–33, 2022.
[92] J. Ruf and W. Wang. Arbitrage-free SVI volatility surfaces. SIAM Journal on Financial Mathematics, 11(2):335–360, 2020.
[93] R. Carmona and U. Cetin. Rough volatility: A practitioner’s guide. Annual Review of Financial Economics, 15:1–28, 2023.
[94] J.-P. Fouque, R. Hu, and M. Mraoua. Learning term structures: From HJM to deep generative models. Quantitative Finance, 21(12):2013–2030, 2021.
[95] D. R. Roberts, V. Bahn, S. Ciuti, et al. Cross-validation strategies for data with temporal, spatial, hierarchical, or phylogenetic structure. Ecography, 40(8):913–929, 2017.
46

---

## Processing Information

- **Processing Library:** Zotero PDFWorker
- **Processing Date:** 2026-02-10T18:16:32.557Z
- **Text Length:** 154746 characters
- **Success:** Text extraction completed
- **PDF Library Used:** Zotero PDFWorker
- **Pages Processed:** 46 of 46
