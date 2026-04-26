# PDF Document: Grigorian and Jarrow - 2025 - Differential Beliefs in Financial Markets Under Information Constraints A Modeling Perspective.pdf

**File Path:** Grigorian and Jarrow - 2025 - Differential Beliefs in Financial Markets Under Information Constraints A Modeling Perspective.pdf

**Processed Date:** 2026-02-10T18:17:14.327Z

**File Size:** 3152.17 KB

**Total Pages:** 35

**Extracted Pages:** 35

**PDF Library:** Zotero PDFWorker

**Attachment Item ID:** 3531

**Title:** Differential Beliefs in Financial Markets Under Information Constraints: A Modeling Perspective

**Collection:** Large Files > Random Papers

---

## Extracted Text Content

Differential Beliefs in Financial Markets Under
Information Constraints: A Modeling Perspective
Karen Grigorian ̳ Robert A. Jarrow†
November 5, 2025
Abstract
We apply the theory of McKean-Vlasov-type SDEs to study several problems related to market efficiency in the context of partial information and partially observable financial markets: (i) convergence of reduced-information market price processes to the true price process under an increasing information flow; (ii) a specific mechanism of shrinking biases under increasing information flows; (iii) optimal aggregation of expert opinions by a trader seeking a positive alpha. All these problems are stud-
ied by means of (conditional) McKeanVlasov-type SDEs, Wasserstein barycenters, KL divergence and relevant tools from convex optimization, optimal control and nonlinear filtering. We supply the theoretical results in (i)-(iii) with concrete simulations demonstrating how the proposed models can be applied in practice to model financial markets under information constraints and the arbitrage-seeking behavior of traders with differential beliefs.
Keywords: differential beliefs; partially observable financial markets; McKean–Vlasov SDE; Wasserstein distance; Wasserstein barycenter; nonlinear filtering; measure–valued control.
MSC 2020: 49K45; 60H10; 93E11; 91G80.
1 Introduction
Our general goal is to study the interplay between the notions of market efficiency, partial information and partial observability from a modeling perspective. This is accomplished in a sequence of three successively more specialized models which, as we show, are highly amenable to practical implementation and simulation. The original inspiration for some of the suggested models came from several examples of model uncertainty presented in [31] and the interesting application of the notion of baryc-
enters in [26], as well as the authors’ own published research [18, 19, 20, 21, 22, 23, 28] which naturally suggested a deeper study of financial markets under information constraints. In the first application, the most general setting, we propose a model based on a McKeanVlasov-type stochastic differential equation (MKVSDE) with a barycentric measure input that explicitly describes how increasing information flows impact stock prices and market efficiency. Here, we first construct a hypothetical -
market with price S that satisfies No Free Lunch with Vanishing Risk (NFLVR) and No Dominance (ND) with respect to the information set F, which represents all the information available in the market. These properties imply that there exists an equivalent martingale measure (EMM) with respect to F in the hypothetical market, see [27] for the definitions of NFLVR, ND, and EMM and the stated theorems. Using the definition of an efficient market as in Jarrow and Larsson [28], by construction, this hyp-
othetical market is efficient with respect to F in the sense of strong-form efficiency [27], Ch.16.
 ̳Department of Statistics and Applied Probability, University of California Santa Barbara; grigorian@ucsb.edu †Samuel Curtis Johnson Graduate School of Management, Cornell University; robertjarrow@cornell.edu
1
arXiv:2511.01486v2 [q-fin.MF] 4 Nov 2025

Next, we consider a sequence of actual markets, indexed by n. The markets differ by the private information available to the m traders, indexed by i, and denoted Gi,n ⊂ F. We assume that the true price process S is not observable in the actual market, hence it is not Gi,n-adapted. We call it the true market price because it is the market price that would exist if all the traders knew F. For the actual market, the total information available (in the sense of strong-form efficiency) is Hn := Ôm
i=1 Gi,n. The market price for the stock in the actual market is denoted S ̃n.
For the actual market with price S ̃n, we no longer assume that there exist an EMM  ̃Q, hence the actual market may violate either NFLVR or ND. It follows that the actual market may be inefficient with respect to Hn. We show that as the information increases in a market, i.e. Hn ↑ F, the actual markets approach the hypothetical market that satisfies NFLVR and ND, i.e. they approach an efficient market with respect to F. The second and third applications studied are motivated by the observation tha-
t in financial markets, traders (hedge funds, investment and commercial banks, pension funds, insurance companies) use different factor models to identify mispriced securities looking for arbitrage opportunities (see Jarrow and Protter [29]), this is called “the search for positive alphas.” The search for positive alphas is the search for a security’s “true” drift (expected return). For the second application, using the same market set-up as in the first application, the nth market may not satisfy-
 NFLVR or ND with respect to Gn. Here, we represent the search for positive alphas by a single trader using their private information to estimate the drift of the actual market price. We study how increasing this information impacts the market price process. We show that the search for a positive alpha removes FLVR and dominated assets in the market, thereby increasing market efficiency. Finally, in the third application, we study an optimal aggregation problem where a trader seeking arbitrage opp-
ortunities (positive alphas) is acting under information constraints G ⊂ F and consults a (possibly continuous) set of experts Λ, who propose corrections to the observed drift, represented by expert-indexed random field ρλ, which the trader wishes to aggregate to obtain the best estimate of the unknown true drift a. The trader tries to minimize the distance between the aggregated correction term ρ ̄ and the trader’s own estimate ab based on available information G, taking into account their own pr-
ior beliefs on the expert community, represented by a flow π of probability measures over Λ. Here as well, we have that the hypothetical market with price S satisfies NFLVR and ND and is efficient with respect to F. As in the preceding case,
we now no longer assume that there exist an EMM  ̃Q for the market price S ̃ in the actual market, hence the actual market may violate either NFLVR or ND. It follows that the actual market may be inefficient with respect to G. This analysis begins from purely financial arguments, and eventually arrives at well-known variational formulas for KL divergence, exponential tilting, and KL-regularized decision/control. The Gibbs measure form of the optimizer follows from the variational characterization -
of logpartition functions and the Donsker–Varadhan (DV) variational principle for relative entropy; see standard treatments of large deviations [33, 13, 14, 11]. The geometry of I–projections (KL projections) onto convex sets under linear constraints is classical and gives exponential-family solutions closely related to our characterization, see [12]. KL-based distributionally robust optimization (DRO) provides another close analogue: worst-case expectations over a KL-ball ambiguity set admit dual-
 solutions that are exponential tilts of the nominal distribution, similar to our optimal Gibbs measure-valued controls and KL constraints, see [25]. Aggregation and opinion pooling also often lead to exponential reweighting. The logarithmic opinion pool and its characterizations (and weighting schemes) provide aggregation rules that formally coincide with our optimal Gibbs measures, but most commonly use KL-barycetners, see, e.g., [24, 17]. However, the core ideas of this paper are inherently fin-
ancial in nature and admit very explicit interpretation in the context of partial information and partially observable financial markets. We end each section with explicit simulations showing how the proposed
2

models can be applied in finance. We acknowledge the use of ChatGPT 5 Pro in obtaining the code for simulations as well as in testing out a large number of model hypotheses which often led to dead ends, and hence expediting the creative part of research. It helped with transferring handwritten notes to LaTex, and finding connections to information theory. It also suggested proof strategies and arguments in several technical lemmas and propositions that eventually worked after our guided fixing an-
d helping it identify its own errors. While in most of these cases we continually steered it away from erroneous suggestions and arguments, it was very helpful nevertheless and saved from hours of cumbersome work. The paper is structured as follows: section 2 introduces a general McKean-Vlasov-type SDE-based model of price dynamics affected by traders’ beliefs and studies the convergence of a sequence of reduced-information markets to the market with full information; section 3 proposes a speciali-
zed model to analyze the evolution of individual biases under increasing information; section 4 investigates the problem of optimal aggregation of experts’ opinions by a trader seeking to find an arbitrage opportunity or a dominated asset; section 5 concludes, and the appendix contains some well-known facts about the measurability properties of flows of probability kernels.
2 Differential Beliefs and Convergence to an Efficient Market
2.1 Preliminaries and Model Set-Up
We study a financial market supported on some complete filtered probability space (Ω, F , F, P) endowed with a filtration F = (Ft)t∈[0,T] for a fixed finite horizon T > 0 which satisfies the usual conditions. Let W be a D–dimensional F–Brownian motion. The d–dimensional true price process S is the F–adapted Markov diffusion
dSt = b ̄(t, St) dt + σ ̄ (t, St) dWt , S0 ∈ L2, E
h
sup
t≤T
|St |2 i
< ∞, (2.1)
where b ̄ : [0, T] × Rd → Rd and σ ̄ : [0, T] × Rd → Rd×D satisfy the usual global Lipschitz and linear–growth conditions ensuring well–posedness. The true price process S is not fully observable and each of the m traders has access to their respective information flow defined by a right–continuous, complete subfiltration
Gi,n = (G i,n
t )t∈[0,T] of F, i ∈ {1, . . . , m}, n ∈ N fixed, which determines their individual opin
ions/proposals on the drift and volatility, assumed to be some functions of the flows πi of conditional distributions of the price process given their respective information flow. Thus, for each (i, n) and t ∈ [0, T], the ith trader’s beliefs are given by
πi,n
t := L(St | G i,n
t ),
the conditional law of St given G i,n
t , i.e. a P2(Rd)-valued random variable, where P2(Rd) is the set of all probability measures on Rd with finite second moments. We stress that the traders have different conditional beliefs, given their information, and the conditional law is based on the statistical probability measure P. When only drifts are affected by the views, this is not a serious restriction and, with obvious modifications of the arguments below, the results can easily be generalized to the case when the the individual con-
ditional laws also depend on the traders’ probability measures Pi that are equivalent to P, and hence the drifts can be changed by Girsanov’s theorem. When volatilities are affected, the argument has to be refined, see [26] for one approach.
The market combines their respective beliefs into a single price process S ̃, whose drift and volatility depend on the barycenter of the m traders’ views, denoted by π ̃ . Hence, the total
3

available information in the market is
Hn :=
m Ü
i=1
Gi,n , H n
t :=
m Ü
i=1
G i,n
t.
The aggregate belief of the market, called the market beliefs, is defined by
π ̃ n
t ∈ argminν∈P2(Rd)
m Õ
i=1
w
(n)
i,t W2
2 ν, πi,n
t, w
(n)
i,t > 0, t ∈ [0, T], (2.2)
where W2 is the 2-Wasserstein distance between two probability measures. Thus, (2.2) is the standard Wasserstein barycenter of probability measures, see [1] for details on existence and properties. Existence of minimizers for (2.2) is classical for a finite family of inputs in (P2(Rd), W2), and, assuming the individual flows of measures are Gi,n-progressively measurable, by a measurable selection theorem one may choose (t, ω) ↦→ π ̃ n
t (ω) to be Hn–progressively measurable. The argument is nontrivial, but standard and rests on checking the properties of normal integrands and using a measurable selection theorem, as in [32], Thm. 14.37. Thus, our market beliefs are represented by the minimizer of a weighted average of W2-distances to
the traders’ beliefs. The weights w
(n)
i,t > 0 imply that each trader has a positive impact on the
market beliefs. This condition and the technical assumption of at least one of the measures πi,n
t
being absolutely continuous wrt the Lebesgue measure ensure the uniqueness of the barycenter measure π ̃ n
t , [1] Prop. 3.5. Our analysis, however, does not rely on uniqueness and only requires the existence of one such measure. The weight selection mechanism is not explicitly given. However, intuitively it is generated by each trader’s market impact on prices either through the magnitude of the trader’s trade size or the trader’s influence on the market via media communication and online followers (e.g. Warren Buffet).
We define the market price to be
dS ̃
(n)
t = b t, S ̃
(n)
t , π ̃ n
t dt + σ t, S ̃
(n)
t , π ̃ n
t dWt , S ̃
(n)
0 = S0, (2.3)
driven by the same Brownian motion W. This assumption is not restrictive and will be relaxed in the subsequent sections. We adopt it in this section to focus our analysis on the pure impact of differential beliefs. We assume the Lipschitz and linear–growth conditions
∃L ≥ 1 s.t. ∀t ∈ [0, T], x, y ∈ Rd, μ, ν ∈ P2(Rd) :
|b(t, x, μ) − b(t, y, ν)| + ∥σ(t, x, μ) − σ(t, y, ν)∥ ≤ L |x − y| + W2(μ, ν) ,
|b(t, x, μ)|2 + ∥σ(t, x, μ)∥2 ≤ L 1 + |x|2 +
ˆ
|z|2 μ(dz) ,
(2.4)
together with the compatibility condition linking (2.1) and (2.3):
b ̄(t, x) = b t, x, δx , σ ̄ (t, x) = σ t, x, δx , ∀(t, x) ∈ [0, T] × Rd. (2.5)
Under (2.4), (2.3) is well–posed and E supt≤T |S ̃
(n)
t |2 < ∞.
The true price is the market price that would exist if all the traders knew F. F represents all the available information in the sense of strong form efficiency [27], Ch.16. We consider a sequence of markets, indexed by n. The markets differ by the information available to the m traders, indexed by i with private information Gi,n ⊂ F. We want to study how increasing the information available to traders impacts market efficiency, i.e. the convergence of prices as n → ∞.
4

The mechanism that generates the market price based on the trader’s beliefs and trading strategies is outside the model’s structure. This is a “reduced form” model. This contrasts with a “structural model” that determines the market price given a specification of each trader’s endowments, portfolio and consumption optimization problem, and market clearing mechanism. In the classical asset pricing literature, this is given by a Radner equilibrium. In the market microstructure literature, this woul-
d be based on a Nash equilibrium. We note that our reduced form specification of the price process is consistent with these structural models, and possibly other market clearing mechanisms. However, the converse is also true. The market price process need not be an equilibrium price with respect to the standard paradigms mentioned above.
We assume that the filtration generated by S ̃
(n)
t is contained in Hn. Thus, we have constructed
two markets: a hypothetical market with price S and the actual market with price S ̃. We assume that these markets have the standard asset pricing structure, trading strategies, etc. as in [28]. We assume that there exists an equivalent martingale measure (EMM) Q for the true price S in the hypothetical market constructed above. This hypothetical market satisfies No Free Lunch with Vanishing Risk (NFLVR) and No Dominance (ND), see [27]. The EMM need not be unique, so the hypothetical market can be-
 incomplete. Using the definition of an efficient market in Jarrow and Larsson [28], the hypothetical market is efficient with respect to F, i.e. it is strong-form efficient. It is also efficient with respect to smaller information sets, so it is semi-strong form and weak-form efficient as well. Hence, it is the ideal market.
We do not assume that there exists an EMM  ̃Q for the market price S ̃ in the actual market constructed above. Hence, the actual market may violate either NFLVR or ND. If it exists, the EMM need not be unique, so the actual market can be incomplete. By the definition of an efficient market in [28], the actual market may be inefficient with respect to Hn, and is efficient with respect to F if for some finite n
S ̃(n) = S.
In our case, the actual market may be inefficient with respect to Hn, and is inefficient with respect to F. In the actual market, the information from F could generate arbitrage opportunities, as discussed in [23]. This issue in studied in section 2. We also note that if there is an EMM in the actual market and one trader i for which Gi,n = F, then, because Hn includes Gi,n = F, the nth market is efficient with respect to F immediately. This implies the interesting structure is where no individual-
 trader knows F, therefore we assume that
Gi,n ⊊ F
for all i and all n.
In this section we do not posit a specific functional form for the individual/combined proposed drift and volatility, and their explicit dependence on traders’ beliefs. In the subsequent sections we study more specialized models where these dependencies are given explicitly. Finaly, we provide explicit simulations of our theoretical results and demonstrate how they can be implemented in practice.
We shall repeatedly use the following stability estimate; its proof is standard and included for completeness.
Lemma 2.1. Assume (2.4) and (2.11). Then for each n and all t ∈ [0, T],
E
h
sup
s≤t
S ̃
(n)
s − Ss
2
i
≤ CL,T
ˆt
0
EW2
2 π ̃ n
u , δSu du, (2.6)
for a constant CL,T < ∞ depending only on L and T.
5

Proof. Let Δt := S ̃
(n)
t − St. Using (2.3), (2.1), and the compatibility (2.11),
dΔt = b t, S ̃
(n)
t , π ̃ n
t − b t, St , δSt dt + σ t, S ̃
(n)
t , π ̃ n
t − σ t, St , δSt dWt , Δ0 = 0.
By Burkholder–Davis–Gundy, Jensen, and (2.4), for some C = CL,T,
E
h
sup
s≤t
|Δs |2 i
≤ CE
ˆt
0
b u, S ̃
(n)
u , π ̃ n
u − b u, Su , δSu
2
du
+CE
ˆt
0
σ u, S ̃
(n)
u , π ̃ n
u − σ u, Su , δSu
2 du
≤ CE
ˆt
0
|Δu|2 + W 2
2 (π ̃ n
u , δSu ) du.
Gronwall’s lemma yields
E
h
sup
s≤t
|Δs |2 i
≤ CL,T
ˆt
0
EW2
2 π ̃ n
u , δSu du,
as claimed.
We also record a basic identity and a simple domination bound that will be used repeatedly.
Lemma 2.2. Let X ∈ L2 and G ⊂ F be a sub-σ-algebra. Then
W2
2 L(X | G), δX =
ˆ
|y − X|2 L(X | G)(dy) = Var(X | G) + X − E[X | G] 2.
In particular, E W2
2 L(X | G), δX = 2 E X − E[X | G] 2 ≤ 2 E|X|2.
Proof. Standard.
Lemma 2.3. Let μ1, . . . , μm ∈ P2(Rd), w ∈ Δm, and let Barw(μ1, . . . , μm) be any minimizer in (2.2). Then, for every ρ ∈ P2(Rd),
W2
2 Barw(μ1, . . . , μm), ρ ≤ 4 max
1≤i≤m
W2
2 (μi , ρ).
Proof. Let μ ̄ := Barw(μ1, . . . , μm). Pick i★ minimizing W2(μ ̄ , μi). By optimality of μ ̄,
m Õ
i=1
wi W2
2 (μ ̄ , μi) ≤
m Õ
i=1
wi W2
2 (ρ, μi) ≤ max
i
W2
2 (ρ, μi).
Hence W2
2 (μ ̄ , μi★) ≤ maxi W 2
2 (ρ, μi). By the triangle inequality and (a + b)2 ≤ 2(a2 + b2),
W2
2 (μ ̄ , ρ) ≤ 2 W 2
2 (μ ̄ , μi★) + 2 W 2
2 (μi★ , ρ) ≤ 4 max
i
W2
2 (μi , ρ).
2.2 Convergence Under Uniformly Increasing Information
The following assumption plays a key role in ensuring convergence to the true price process.
Assumption 2.4. For each i ∈ {1, . . . , m} and each t ∈ [0, T], the σ–algebras increase in n and exhaust Ft:
G i,1
t ⊆ G i,2
t ⊆ ··· , σ
Ø
n≥1
G i,n
t = Ft (up to P–null sets).
6

Theorem 2.5. Under Assumption 2.4, for each t ∈ [0, T],
W2 π ̃ n
t , δSt
L1(Ω)
−−−−−→
n 0.
Proof. Fix t ∈ [0, T]. By the martingale convergence theorem,
E St − E[St | G i,n
t ] 2 −→
n 0, i = 1, . . . , m.
By Lemma 2.2, E W2
2 (πi,n
t , δSt ) = 2 E|St − E[St | G i,n
t ]|2 → 0. Using Lemma 2.3 with ρ = δSt ,
W2
2 π ̃ n
t , δSt ≤ 4 max
1≤i≤m
W2
2 πi,n
t , δSt ,
and hence, taking expectations and using max ≤ Í,
EW2
2 π ̃ n
t , δSt ≤ 4
m Õ
i=1
EW2
2 πi,n
t , δSt −→
n 0.
By Cauchy–Schwarz, E W2(π ̃ n
t , δSt ) ≤
q
EW2
2 (π ̃ n
t , δSt ) → 0.
Corollary 2.6. If (2.4) and (2.11) hold, then
E
h
sup
t≤T
S ̃
(n)
t − St
2
i
−→
n 0.
Proof. By Lemma 2.3 with ρ = δSt ,
W2
2 π ̃ n
t , δSt ≤ 4 max
1≤i≤m
W2
2 πi,n
t , δSt ≤ 4
m Õ
i=1
W2
2 πi,n
t , δSt .
Taking expectations and using Lemma 2.2 together with the martingale convergence theorem (applied under Assumption 2.4) gives, for each fixed t,
EW2
2 π ̃ n
t , δSt ≤ 4
m Õ
i=1
EW2
2 πi,n
t , δSt −→
n 0.
Moreover, still by Lemma 2.2,
EW2
2 π ̃ n
t , δSt ≤ 4
m Õ
i=1
EW2
2 πi,n
t , δSt ≤ 8m E|St|2,
and t ↦→ E|St|2 is integrable on [0, T] by (2.1). Hence
ˆT
0
EW2
2 π ̃ n
s , δSs ds −→
n0
by dominated convergence. Inserting this into (2.6) yields E supt≤T |S ̃
(n)
t − St|2 → 0.
7

2.3 Failure of Convergence Under Non-Uniformly Increasing Information
We first show that improvement of the combined information pool Hn alone is not sufficient to ensure convergence of the barycenter.
Assumption 2.7. For each t ∈ [0, T], H 1
t ⊆ H2
t ⊆ · · · and σ Ð
n≥1 H n
t = Ft (P-a.s.), but for at
least one expert i, σ Ð
n≥1 G i,n
t ⊊ Ft (P-a.s.).
Example 2.8. Let d = 1 and fix t ∈ (0, T]. On a product space supporting an F–Brownian motion W, take independent Rademacher variables U , V with P(U = ±1) = P(V = ±1) = 1
2 , independent
of W. Define Ss := UV for all s ∈ [0, T], which solves (2.1) with b ̄ ≡ 0 = σ ̄ . Define
Ft := σ(U , V) ∨ σ(Wr : r ≤ t) (completed and right–continuous), t ∈ [0, T].
For all n set
G 1,n
t := σ(U) ∨ σ(Wr : r ≤ t), G2,n
t := σ(V) ∨ σ(Wr : r ≤ t),
and, without changing notation, let Gi,n be their right–continuous, complete versions. Then
Hn
t = σ(U , V) ∨ σ(Wr : r ≤ t) = Ft for all n, so the join is already full, while σ(Ð
n G1,n
t )=
σ(U) ∨ σ(Wr : r ≤ t) ⊊ Ft and similarly for i = 2. Since St = UV is independent of W and P(V = ±1 | σ(U)) = 1
2 , we have
π1,n
t = π2,n
t =1
2 δ−1 + 1
2 δ+1 a.s., δSt ∈ {δ−1, δ+1} a.s.
Therefore, for any weights w
(n)
1,t , w
(n)
2,t
∈ Δ2,
π ̃ n
t = Barw
(n) t
1
2 δ−1 + 1
2 δ+1, 1
2 δ−1 + 1
2 δ+1 = 1
2 δ−1 + 1
2 δ+1,
and hence
W2 π ̃ n
t , δSt =
(√
2, St = +1,
√
2, St = −1,
so W2(π ̃ n
t , δSt ) =
√
2 a.s. and in particular does not converge to 0.
It is easy to show that this may cause the actual price process not to converge to the true price process. We do not pursue this here.
2.4 Simulation of Convergence under Increasing Information
We assume d = 1 and a filtered space (Ω, F , F, P) carrying a one–dimensional Brownian motion W. The true price S is a geometric Brownian motion (GBM)
dSt = b ̄(t, St) dt + σ ̄ (t, St) dWt with b ̄(t, x) = μ★x, σ ̄ (t, x) = σ★x, S0 > 0, (2.7)
where μ★ and σ★ > 0 are some constants. Fix m ∈ N traders and information levels n ∈ N. Let Xt := log St and suppose trader i at level n observes
Yi,n
t = Xt + εi,n
t , εi,n
t ∼ N 0, τ2
i /n ,
independent of W and across (i, n). Then πi,n
t := L(St | Yi,n
t ) is lognormal. For weights
w(n) ∈ Δm, define the (one–dimensional) W2–barycenter of the traders at time t by
π ̃ n
t ∈ argminν∈P2(R+)
m Õ
i=1
w
(n)
i W2
2 ν, πi,n
t . (2.8)
8

In d = 1, π ̃ n
t is the quantile average (comonotone coupling), which we evaluate in closed form via its first two moments.
π ̃ n
t =L
m Õ
i=1
w
(n)
i,t e mi,n
t +si,n
t Z , Z ∼ N (0, 1), mi,n
t := E[log St | G i,n
t ], (si,n
t )2 := Var(log St | G i,n
t ).
We assume the drift and volatility depend on the barycentric mean and standard deviation:
m1(μ) :=
ˆ
y μ(dy), s(μ) :=
rˆ
(y − m1(μ))2 μ(dy).
For κd , κv ≥ 0, set for (t, x, μ) ∈ [0, T] × R+ × P2(R+)
b(t, x, μ) := x μ★ + κd log m1(μ)
x , σ(t, x, μ) := x σ★ 1 + κv
s(μ)
m1(μ) . (2.9)
The actual market price S ̃(n) follows the McKean-Vlasov-type SDE driven by the same W:
dS ̃
(n)
t = b t, S ̃
(n)
t , π ̃ n
t dt + σ t, S ̃
(n)
t , π ̃ n
t dWt , S ̃
(n)
0 = S0. (2.10)
By construction,
b(t, x, δx) = μ★x = b ̄(t, x), σ(t, x, δx) = σ★x = σ ̄ (t, x), (2.11)
so (4.34) is compatible with (2.7) in the sense b(·, ·, δx) = b ̄, σ(·, ·, δx) = σ ̄ . As n → ∞ the posterior variances scale as τ2
i
/n, the barycenter π ̃ n
t ⇒ δSt , and under standard Lipschitz and linear
growth conditions of (2.9) one has convergence of S ̃(n) to S in L2(Ω; C). We simulate 30 paths on [0, 1] year with daily steps. For each n ∈ {1, 10, 100, 1000} we draw a common Brownian path
per row and plot: left (blue) the true S, right (red) the synthetic S ̃(n) built from the W2–barycenter (2.8). Parameters used in the figure: S0 = 100, μ★ = 8%, σ★ = 60%, m = 4, w = (0.4, 0.3, 0.2, 0.1), τ = (2.0, 1.2, 2.5, 1.5), κd = 0.35, κv = 2.75.
It must be noted that other choices are possible, as long as they satisfy the compatibility
condition. Some suggestions are given below. For μ ∈ P2(R+) set m1(μ) :=  ́
y μ(dy), s(μ) :=
p ́ (y − m1(μ))2 μ(dy), cv(μ) := s(μ)/(m1(μ) + ε) for small ε > 0. Let b ̄, σ ̄ be the true coefficients from (2.1). All parameters κ, κd, κv , λ ≥ 0.
# Drift b(t, x, μ) Volatility σ(t, x, μ)
1 b ̄(t, x) + κ m1(μ) − x σ ̄ (t, x)
2 b ̄(t, x) σ ̄ (t, x) 1 + κ cv(μ)
3 b ̄(t, x) + κd m1(μ) − x σ ̄ (t, x) 1 + κv cv(μ)
4 b ̄(t, x) 1 + κ m1(μ)
x − 1 σ ̄ (t, x)
5 b ̄(t, x) − λ x cv(μ)2 σ ̄ (t, x)
6 b ̄(t, x) σ ̄ (t, x)
r
1 + κ m1(μ)−x
m1 (μ)+ε
2
Table 1: Each pair satisfies the compatibility condition: for μ = δx one has m1(δx) = x,
s(δx) = cv(δx) = 0, hence b(t, x, δx) = b ̄(t, x) and σ(t, x, δx) = σ ̄ (t, x).
However, it is obvious that any choice of the drift and volatility must be meaningful from the modeling perspective, i.e. admit financial interpretation. In the next sections, we will provide more concrete (and much more sophisticated) structures that admit clear interpretation and generate a wide range of nontrivial implications and results.
9

Figure 1: Increasing information. Rows n = 1, 10, 100, 1000; left: true price S (blue); right:
synthetic S ̃(n) (red). Common Brownian shocks per row; we observe convergence as the dispersion in traders’ posteriors vanishes.
10

3 Individual Biases under Increasing Information
3.1 Preliminaries and Model Set-Up
In this section, we propose a much more explicit and financially motivated drift perturbation scheme capturing model uncertainty in which a single trader’s belief is represented by a drift perturbation term ρ which is convexly combined with the true drift α, with a (random, time–varying) bias weight β that shrinks to 0 as information increases. Thus, we want to study how a single trader uses the information available to them, combining observations with personal biases to arrive at a candidate pri-
ce process. In the next section we will study how a trader seeking arbitrage opportunities should aggregate the individual (biased) proposal processes. This is an elaboration on the ideas of the previous section, showing more explicitly how an increasing information flow implies convergence of the proposal process to the true price process for a single trader. In this setting, the weight of the bias depends on the distance between the conditional distribution of the price St given the available in-
formation Gn
t and the value of the
optimal estimate of St provided by the filtered Sbt. This structure corresponds to the intuition that the the distance between the conditional distribution and the estimated value captures ambiguity regarding the true value of the price process, and this ambiguity shrinks as more information is revealed, as n → ∞, eventually collapsing to a Dirac measure at the correct value. Thus, this more specialized model also incorporates a fairly novel way of measuring the impact of a trader’s intuitive sens-
e of ambiguity regarding the true value of a partially observed price process. Let (Ω, F , F, P) be a complete probability space with a right–continuous, complete filtration F = (Ft)t∈[0,T] supporting a D–dimensional Brownian motion W. The true d–dimensional price process S is the unique strong solution of
dSt = α(t, St) dt + σ(t, St) dWt , S0 ∈ L2(Ω; Rd), (3.1)
where the coefficients α : [0, T] × Rd → Rd and σ : [0, T] × Rd → Rd×D satisfy:
Assumption 3.1. There exists L ≥ 1 such that for all t ∈ [0, T], x, y ∈ Rd,
|α(t, x) − α(t, y)| + ∥σ(t, x) − σ(t, y)∥ ≤ L|x − y|,
|α(t, x)|2 + ∥σ(t, x)∥2 ≤ L (1 + |x|2).
Under Assumption 3.1, (3.1) is well posed and E supt≤T |St|2 < ∞.
We model increasingly informative observers by a fixed index n ∈ N and a subfiltration
Gn = (G n
t )t∈[0,T] of F such that for each t ∈ [0, T]
G1
t ⊆ G2
t ⊆ ··· , σ
Ø
n≥1
Gn
t = Ft (up to P-null sets). (3.2)
We assume right–continuity and completeness of each Gn without changing notation. Fix n and t ∈ [0, T]. Set
Sb
(n)
t := E[St | G n
t ], πn
t := L(St | G n
t ) ∈ P2(Rd).
Recall the identity (see Lemma 2.2)
W2
2 πn
t , δSb
(n) t
=E
h
|St − Sb
(n)
t |2 G n
t
i
= Var St | G n
t . (3.3)
Define the measure of ambiguity and the bias weight correspondingly by
γ(n)
t :=
q
Var(St | G n
t ) = W2 πn
t , δSb
(n) t
, β(n)
t := β γ(n)
t , (3.4)
where β : [0, ∞) → [0, 1] satisfies:
11

Assumption 3.2. β is continuous at 0 with β(0) = 0, bounded by 1, and locally Lipschitz on [0, ∞).
Define the bias-perturbed drift by
α(n)
β (t, x, ω) := (1 − β(n)
t (ω)) α(t, x) + β(n)
t (ω) ρ(n)
t (ω). (3.5)
Consider the proposed synthetic price process Se(n) given by:
d
Se
(n)
t = α(n)
β t, Se
(n)
t dt + σ t, Se
(n)
t dWt , Se
(n)
0 = S0. (3.6)
Note γ(n)
t is G n
t –measurable by (3.3). By considering the Gn-progressively measurable versions
of πn
t (see the remark 4.7 in section 4) and the optional modifications of Sb
(n)
t , we obtain that β(n) can be chosen to be Gn–progressively measurable.
Lemma 3.3. Assume (3.2). Then for each t ∈ [0, T],
E (γ(n)
t )2 = E St − Sb
(n)
t
2 −→
n 0, E (β(n)
t )2 −→
n 0,
and by dominated convergence, ˆ T
0
E (β(n)
t )2 dt −→
n 0. (3.7)
Proof. By (3.2) and the martingale convergence theorem, Sb
(n)
t → St in L2, hence E(γ(n)
t )2 = E|St −
Sb
(n)
t |2 → 0. By Assumption 3.2, β is locally Lipschitz at 0 and β(0) = 0, hence (β(n)
t )2 ≤ C (γ(n)
t )2
for all γ(n)
t sufficiently small. Set γn := γ(n)
t and βn := β(γn); fix δ > 0 and let Lδ be the Lipschitz
constant of β on [−δ, δ]. Then, using 0 ≤ (β(n)
t )2 ≤ 1 and Chebyshev’s inequality, we have
E[β2
n] = E β2
n 1{|γn|≤δ} +E β2
n 1{|γn|>δ} ≤ L2δ E γ2
n1{|γn|≤δ} +P(|γn| > δ) ≤ L2δ +δ−2 E[γ2
n] −−−−→
n→∞ 0.
Hence (3.7) follows by dominated convergence.
Let ρ(n) = (ρ(n)
t )t∈[0,T] be a Gn–progressively measurable Rd–valued process interpreted as the trader’s opinion on the correct drift. We assume:
Assumption 3.4. There exists p > 1 such that
sup
n≥1
ˆT
0
E |ρ(n)
t |2p dt < ∞.
Proposition 3.5. Under Assumptions 3.1, 3.2, 3.4, for every n the SDE (3.6) admits a unique strong solution with
E
h
sup
t≤T
Se
(n)
t
2
i
≤ C 1 + E|S0|2 + E
ˆT
0
|ρ(n)
t |2 dt ,
for a constant C = C(L, T) independent of n.
Proof. The drift x ↦→ α(n)
β (t, x) is globally Lipschitz with the same constant L as α, since
β(n)
t ∈ [0, 1] and ρ(n)
t does not depend on x. Moreover,
|α(n)
β (t, x)| ≤ |α(t, x)| + |ρ(n)
t | ≤ C(1 + |x|) + |ρ(n)
t|
with C = C(L). Standard SDE estimates (e.g. Itô, BDG, Gronwall) yield the moment bound under Assumption 3.4.
12

3.2 Stability and Convergence to the True Process
Set Δ(n)
t := Se
(n)
t − St. Using (3.1) and (3.6),
dΔ(n)
t = α t, Se
(n)
t − α(t, St) dt + σ t, Se
(n)
t − σ(t, St) dWt + β(n)
t ρ(n)
t − α t, Se
(n)
t dt. (3.8)
Theorem 3.6. Under Assumptions 3.1, 3.2, 3.4, there exists C = C(L, T) such that for every n and t ∈ [0, T],
E
h
sup
s≤t
Δ(n)
s
2
i
≤C
ˆt
0
E
h
Δ(n)
u
2 + (β(n)
u )2 1 + |ρ(n)
u |2 + |Su|2 i
du. (3.9)
Proof. Applying BDG and the Lipschitz properties of (α, σ),
E sup
s≤t
Δ(n)
s
2 ≤C
ˆt
0
E Δ(n)
u
2 du + C
ˆt
0
E
h
(β(n)
u )2 ρ(n)
u − α(u, Se
(n)
u ) 2i
du.
Using (a + b)2 ≤ 2(a2 + b2) and the linear growth of α,
ρ(n)
u − α(u, Se
(n)
u ) 2 ≤ 2|ρ(n)
u |2 + 2 |α(u, Se
(n)
u )|2 ≤ C 1 + |Se
(n)
u |2 + |ρ(n)
u |2 .
By Proposition 3.5 and (a + b)2 ≤ 2(a2 + b2), |Se
(n)
u |2 ≤ 2|Su|2 + 2|Δ(n)
u |2, from which we obtain
ρ(n)
u − α(u, Se
(n)
u ) 2 ≤ C 1 + |Su|2 + |Δ(n)
u |2 + |ρ(n)
u |2 .
Inserting this bound and absorbing the resulting (β(n)
u )2|Δ(n)
u |2 term into the first integral (since
(β(n)
u )2 ≤ 1), we obtain (3.9).
Theorem 3.7. Assume 3.1, 3.2, 3.4 and (3.2). Then
E
h
sup
t≤T
Se
(n)
t − St
2
i
−→
n 0.
Proof. From (3.9) with t = T and Gronwall’s inequality,
E
h
sup
s≤T
Δ(n)
s
2
i
≤C
ˆT
0
E
h
(β(n)
u )2 1 + |ρ(n)
u |2 + |Su|2 i
du ,
for C = C(L, T). Write
An :=
ˆT
0
E (β(n)
u )2 du, Bn :=
ˆT
0
E (β(n)
u )2|ρ(n)
u |2 du, Cn :=
ˆT
0
E (β(n)
u )2|Su|2 du.
By Lemma 3.3, An → 0. For Bn, apply Hölder’s inequality on the product space ([0, T] × Ω, dt ⊗ dP) with conjugate
exponents p > 1, q := p
p−1 ∈ (1, ∞):
Bn = ∥(β(n))2 |ρ(n)|2∥L1 ≤ ∥(β(n))2∥Lq ∥|ρ(n)|2∥Lp .
Since 0 ≤ (β(n))2 ≤ 1, we have (β(n))2q ≤ (β(n))2 and hence ∥(β(n))2∥Lq ≤ A1/q
n . By Assumption 3.4,
∥|ρ(n)|2∥Lp = ( ́ T
0 E|ρ(n)
u |2p du)1/p ≤ C uniformly in n. Therefore Bn ≤ C A1/q
n → 0. For Cn, fix A > 0 and split
Cn =
ˆT
0
E (β(n)
u )2|Su|21{|Su|≤A} du+
ˆT
0
E (β(n)
u )2|Su|21{|Su|>A} du ≤ A2An+
ˆT
0
E |Su|21{|Su|>A} du.
The second term is independent of n and goes to 0 as A → ∞ because  ́ T
0 E|Su|2 du < ∞ (from
(3.1) and Assumption 3.1). Hence, given ε > 0, choose A such that the tail term ≤ ε, and then n large so that A2An ≤ ε, yielding Cn ≤ 2ε for n large. Combining, we obtain An + Bn + Cn → 0, and the claim follows.
13

The above analysis hinges on the following precise identification, which also motivates our choice of the functional form for measuring ambiguity.
Proposition 3.8. For any sub–σ–algebra G ⊂ F and any X ∈ L2(Ω; Rd),
inf
z∈Rd
W2
2 L(X | G), δz = W2
2 L(X | G), δE[X|G] = Var(X | G).
Consequently, the choice
β(n)
t = β W2 L(St | G n
t ), δSb
(n) t
=β
q
Var(St | G n
t)
shrinks to 0 exactly at the (square–root) rate at which the conditional variance vanishes.
Proof. Immediate from Lemma 2.2 by minimizing over z.
3.3 Rate of Information Convergence
Suppose, in addition, that for some η ∈ (0, 1] and all u ∈ [0, T],
E Var Su | G n
u ≤ C n−2η (a numerical rate of information gain). (3.10)
Assume further that β is globally Lipschitz on [0, ∞) with constant Lβ and β(0) = 0. Then,
recalling γ(n)
u = pVar(Su | G n
u ),
β(n)
u
2 = β(γ(n)
u )2 ≤ L2β Var Su | G n
u , hence
ˆT
0
E β(n)
u
2 du ≤ C L2β n−2η.
To convert this into a rate for E supt≤T |Se
(n)
t − St|2 , we need to control the mixed terms
containing |S|2 and |ρ(n)|2 appearing in (3.9). Assume the following fourth–moment bounds:
ˆT
0
E|Su|4 du < ∞, sup
n≥1
ˆT
0
E |ρ(n)
u |4 du < ∞. (3.11)
Proposition 3.9. Under (3.10), the global Lipschitz condition on β, and (3.11), there exists C′ = C′(L, T, Lβ, data) such that
E
h
sup
t≤T
Se
(n)
t − St
2
i
≤ C′ n−η, n → ∞.
Proof. From (3.9) with t = T and Gronwall’s inequality,
E
h
sup
s≤T
Δ(n)
s
2
i
≤C
ˆT
0
E
h
(β(n)
u )2i
du + C
ˆT
0
E
h
(β(n)
u )2|ρ(n)
u |2i
du + C
ˆT
0
E
h
(β(n)
u )2|Su|2i
du ,
with C = C(L, T). Denote
An :=
ˆT
0
E (β(n)
u )2 du, Bn :=
ˆT
0
E (β(n)
u )2|ρ(n)
u |2 du, Cn :=
ˆT
0
E (β(n)
u )2|Su|2 du.
By the computation above, An ≤ CL2βn−2η. Since 0 ≤ β(n)
u ≤ 1, we have (β(n)
u )4 ≤ (β(n)
u )2 and hence
ˆT
0
E (β(n)
u )4 du ≤ An ≤ CL2βn−2η.
By Hölder’s inequality on ([0, T] × Ω, dt ⊗ dP) with exponents (2, 2) and (3.11),
Bn ≤
ˆT
0
E[(β(n)
u )4] du
1/2 ˆ T
0
E[|ρ(n)
u |4] du
1/2 ≤ C n−η ,
and similarly
Cn ≤
ˆT
0
E[(β(n)
u )4] du
1/2 ˆ T
0
E[|Su|4] du
1/2 ≤ C n−η.
Thus An + Bn + Cn ≤ C′(n−2η + n−η + n−η) ≤ C′′ n−η, and the claim follows.
14

3.4 Simulation of the Shrinking Bias
We work on a filtered probability space (Ω, F , F, P) carrying a one–dimensional Brownian motion W. The true price process S solves
dSt = α(t, St) dt + σ(t, St) dWt , S0 > 0, (3.12)
and for the simulation we again take the geometric Brownian motion (GBM) model
α(t, x) = μ★x, σ(t, x) = σ★x.
We set the weight function to be
β(n)
t = 1 − exp − κb (γ(n)
t )pb = 1 − exp − κb Var(St | G n
t ) pb/2 , κb = 10−3, pb = 2.4.
We use a specification of ρ(n) proportional to the conditional mean (amplified by relative ambiguity):
ρ(n)
t = μop Sb
(n)
t 1 + crel
γ(n)
t
Sb
(n)
t +ε
, μop > 0, crel ≥ 0, ε > 0.
The synthetic price Se(n) is obtained by convexly mixing the true drift with the opinion drift, with β(n) as weight, and keeping the same diffusion and the same Brownian motion W:
d
Se
(n)
t=
h
(1 − β(n)
t ) α t, Se
(n)
t + β(n)
t ρ(n)
t
i
dt + σ t, Se
(n)
t dWt , Se
(n)
0 = S0. (3.13)
At zero ambiguity (γ(n)
t = 0) one has β(n)
t = 0, so (4.34) reduces to the true dynamics (4.6). Under
the standard Lipschitz and linear–growth assumptions, increasing information implies γ(n) → 0, which in turn implies β(n) → 0, and stability yields Se(n) → S in L2(Ω; C). The common Brownian motion W couples the paths so differences are solely driven by the bias term. Below are 4 × 2 plots, with rows corresponding to information levels n ∈ {1, 10, 100, 1000}. The true process S (blue) is on the left, the synthetic process Se(n) (red) is on the right. We generated 30 paths per panel with daily step-
s over [0, 1] year.
15

Figure 2: Ambiguity–driven bias: at low information (n = 1, 10) the synthetic process deviates due to a nonzero β(n), while as n increases (100, 1000) the bias weight shrinks and Se(n) collapses to S.
16

3.5 Conclusions
We have constructed a rigorous, explicit mechanism in which a trader’s opinion drift ρ(n) is convexly combined with the true drift α, with weight
β(n)
t = β W2 L(St | G n
t ), δSb
(n) t
=β
q
Var(St | G n
t ) ∈ [0, 1].
The Wasserstein distance measures a sense of ambiguity regarding using the estimate Sbt instead of the true value of St. As the sub–σ–algebras Gn
t increase to Ft (for each t), β(n) vanishes in L2(dt ⊗ dP), and the modified (synthetic) price process (3.6) converges to the true price process (3.1) in L2(Ω; C([0, T]; Rd)) (Theorem 3.7). The shrinking mechanism is explicitly tied to the conditional variance of St given the current information level (Proposition 3.8).
4 Optimal Aggregation of Expert Opinions under Information Constraints
4.1 Preliminaries and Model Set-Up
We now study an optimal aggregation problem where a trader is acting under information constraints G ⊂ F and consults a (now possibly continuous) set of experts, represented by some compact space Λ, who propose corrections to the observed drift, represented by expert-indexed flows of probability measures ρλ, which the trader wishes to aggregate to obtain the best estimate of the unknown true drift a. The trader tries to minimize the distance between the aggregated correction term ρ ̄ and the trade-
r’s own estimate ab based on available information G, taking into account their own prior beliefs on the expert community, represented by a flow π of probability measures over Λ. From a financial point of view, the trader is seeking positive alphas as defined in [29], i.e. an arbitrage opportunity or a dominated asset. We fix a finite horizon T > 0 and a filtered probability space (Ω, F , F = (Ft)0≤t≤T , P) satisfying the usual conditions. Let W and B be independent one–dimensional F–Brownian moti-
ons. Assume the stock price follows
dSt = at dt + σt dWt , S0 ∈ L2(Ω, F0, P), (4.1)
with a, σ F–progressively measurable and E ́ T
0 |at| dt < ∞, E ́ T
0 σ2
t dt < ∞, σt ≥ 0 a.s.
We assume that S is only partially observable and the trader is only able to observe the process Y given by
dYt = ht(St) dt + R1/2
t dBt , Rt ∈ [r−, r+] a.s. for some 0 < r− ≤ r+ < ∞,
where h is G–progressively measurable with ht : R → R and linear growth |ht(x)| ≤ C(1 + |x|) a.s. Define the observation filtration G as the usual augmentation of σ(Ys : 0 ≤ s ≤ t). Set
hbt := E[ht(St) | Gt] . Wbt :=
ˆt
0
R
−1/2
s dYs − hbs ds .
Then Wb is the innovation process, see [6, 34], which is a G–Brownian motion, and the following standard representation holds
dYt = hbt dt + R1/2
t dWbt . (4.2)
Consider the (conditional–mean) filter Sbt := E[St | Gt]. Under the integrability condition above, Sb is an G–continuous semimartingale with the innovation representation
d
Sbt = abt dt + σbt dWbt , (4.3)
17

where
abt := E[at | Gt], σbt := E[St ht | Gt] − E[St | Gt]E[ht | Gt] R
−1/2
t . (4.4)
Writing πt(φ) := E[φ(St) | Gt], (4.3)–(4.4) follow from the standard Kushner–Stratonovich equation, see [6, 34],
dπt(φ) = πt(at) dt + πt(φht) − πt(φ)πt(ht) R
−1/2
t dWbt
for the test function φ(x) = x. Besides partial observability, we incorporate expert biases by defining the expert-indexed proposal drifts ρλ B (ρλ
t )0≤t≤T such that the real-valued map (t, ω, λ) ↦→ ρλ
t (w) is P(G) ⊗ B(Λ)
measurable and m = (mt)0≤t≤T is a G-progressively measurable flow of probability kernels on Λ which is some compact metric space representing the set of experts that, for simplicity, we take to be [0, 1], and let
ρ ̄t(mt) :=
ˆ
Λ
ρλ
t mt(dλ)
be the aggregated bias/correction term at time t, and m is the aggregator which dynamically assigns weight to each expert’s opinion. With a progressively measurable weight process β = (βt)0≤t≤T taking values in [0, 1], we define the bias–adjusted filtered price Se by
d
Set = abt + βt ρ ̄t(mt) − abt dt + σbt dWbt . (4.5)
Thus βt ≡ 0 recovers the baseline filter (4.3), while βt ≡ 1 replaces the filtered drift by the aggregated bias ρ ̄t(mt). Below, π = (πt)0≤t≤T is an G–progressively measurable flow of probability kernels on Λ representing the prior beliefs of the trader regarding the experts. Note that the bias-adjusted price process can be written in the following equivalent form, emphasizing the fact that the trader forms a convex combination of the observed drift with the proposed correction term:
d
Set = (1 − βt)abt + βt ρ ̄t(mt) dt + σbt dWbt . (4.6)
We measure the discrepancy between ρ ̄ and ab by the functional
L(m) := E
ˆT
0
γ
2
ρ ̄t(mt) − abt
2 dt, γ > 0, (4.7)
which is convex in m because m ↦→ ρ ̄t(m) is linear. Finally, for flows of measures m, π as above, we define the time–integrated relative entropy
DKL(m∥π) := E
ˆT
0
KL mt∥πt dt = E
ˆT
0
ˆ
Λ
log dmt
dπt
mt(dλ) dt, (4.8)
with KL(mt∥πt) = +∞ if mt 3 πt.
Problem 4.1. Fix 0 < K < ∞. Minimize L(m) over G–progressively measurable flows of probability kernels m = (mt)t∈[0,T] subject to
DKL(m∥π) ≤ K, mt ≪ πt a.s. for a.e. t. (4.9)
Thus, we study an optimization problem where the trader wants to select an optimal aggregator process m∗ such that the posited drift is close to the filtered drift ab, while keeping m close to the given prior π. We make the following assumptions.
Assumption 4.2.
(A1) For each (t, ω), λ ↦→ ρλ
t (ω) is continuous and (t, ω, λ) ↦→ ρλ
t (ω) is bounded.
18

(A2) ab = (abt)0≤t≤T satisfies E
ˆT
0
|
abt|2 dt < ∞.
(A3) For each fixed t, the kernel πt has full support. Since Λ is compact and λ ↦→ ρλ
t is bounded, the log–moment generating function
Φt(η) := log
ˆ
Λ
eη ρλ
t πt(dλ) (4.10)
is finite for all η ∈ R, a.s., for a.e. t.
(A4) m = (mt)0≤t≤T satisfies mt ≪ πt a.s. for a.e. t.
Assumption 4.3. For a.e. (t, ω), the filtered drift abt(ω) belongs to the closed convex hull of the expert range:
abt(ω) ∈ co ρλ
t (ω) : λ ∈ Λ = infλρλ
t (ω), supλρλ
t (ω) .
Problem 4.4. Minimize L(m) in (4.7) over all F–progressively measurable flows of probability kernels m = (mt)0≤t≤T on Λ (no absolute continuity requirement with respect to π).
Proposition 4.5. Under Assumption 4.3, Problem 4.4 has minimal value 0. Moreover, there exists an F–progressively measurable flow m0 = (m0
t )t∈[0,T] such that
ρ ̄ t (m 0
t) =
ˆ
Λ
ρλ
t m0
t (dλ) = abt a.s. for a.e. t,
so L(m0) = 0.
Remark 4.6. In Problem 4.1, for each finite K we keep the absolute continuity constraint mt ≪ πt. As K ↑ ∞, the KL constraint becomes asymptotically nonbinding and the optimizers may concentrate (in the limit) on sets of πt–measure zero; thus Problem 4.1 Γ–converges to Problem 4.4, and the minimum loss approaches 0.
Remark 4.7. Basic facts regarding measurability properties of flows of probability kernels are collected in the appendix, where references are also given. In the following, we will use some techniques from the theory of relaxed controls, see e.g. [10], [2], [16]. In particular, once a Gadapted relaxed control Q(ω, dt, dλ) is disintegrated into a product dtQ(t, ω, dλ), the Proposition 6.41, p.584, [10], allows to choose a G-progressively measurable version of (t, ω) → Q(t, ω, dλ), hence we do not a-
lways differentiate between adaptedness and progressiveness below.
Lemma 4.8. Equip P(Λ) with the weak topology. The map (μ, ν) ↦→ KL(μ∥ν), extended by +∞ when μ 3 ν, is Borel and lower semicontinuous on P(Λ) × P(Λ). Consequently, if m, π are G-progressively measurable kernels, then (t, ω) ↦→ KL(mt(ω)∥πt(ω)) is P(G)–measurable.
Proof. See Tim van Erven, Peter Harremoës, [15], Theorem 19.
For each (t, ω) the map μ ↦→ KL(μ∥πt(ω)) is proper, strictly convex, and lower semicontinuous on P(Λ) (for the weak topology). Since (A1) ensures that m ↦→ ρ ̄t(m) is continuous and bounded on P(Λ), integrands below will be normal convex integrands in the sense of Rockafellar; this allows the interchange of infimum and integral used later, see [7], Section 3.2. For F : P(Λ) → R, the (linear) functional derivative δF
δm (m, λ) is characterized by
d
dε F (1 − ε)m + εm′
ε=0
=
ˆ
Λ
δF
δm
(m, λ) (m′ − m)(dλ), ∀ m′ ∈ P(Λ),
and we normalize it by  ́
Λ
δF
δm (m, λ) m(dλ) = 0. For the linear map ρ ̄t(m) =  ́ ρλ
t m(dλ) we have
δρ ̄t
δm
(m, λ) = ρλ
t − ρ ̄t(m). (4.11)
19

4.2 Existence of the Minimizing Flow
Theorem 4.9. Under Assumption 4.2, Problem 4.1 admits a solution m∗. Moreover, there exists a scalar α∗ ≥ 0 such that m∗ minimizes the Lagrangian
E
ˆT
0
hγ
2 ρ ̄t(mt) − abt
2 + α∗ KL(mt∥πt)
i
dt, (4.12)
and complementary slackness holds:
α∗ DKL(m∗∥π) − K = 0. (4.13)
Proof. We begin by setting up some notation. The proof is technical but is in fact a modification of standard arguments used for relaxed controls, which can be found in [2, 16]. Write the optimization over flows m = (mt)t∈[0,T] with the absolute continuity constraint mt ≪ πt by means of the Radon–Nikodým densities
ft(ω, λ) := dmt(ω, ·)
dπt(ω, ·) (λ), ft ≥ 0,
ˆ
Λ
ft(ω, λ) πt(ω, dλ) = 1 a.s. for a.e. t.
Set
X := Ω × [0, T], Q := P ⊗ dt, Π(dω, dt, dλ) := P(dω) dt πt(ω, dλ).
Note Π is well-defined on (Ω × [0, T] × Λ, P(G) ⊗ B(Λ). Then f ∈ L1(Π) and the integrated KL constraint can be written as
DKL(m∥π) =
ˆ
f log f dΠ.
Let Mt(ω) := supλ∈Λ |ρλ
t (ω)|; by (A1), M ∈ L1(Q) and |ρ ̄t(mt)| =  ́ ρλ
t ft πt(dλ) ≤ Mt a.s. for a.e.
t. Finally, denote
AK :=
n
f ∈ L1(Π) : f ≥ 0,
ˆ
Λ
ft(ω, λ) πt(ω, dλ) = 1 Q-a.e.,
ˆ
f log f dΠ ≤ K
o
.
Feasibility holds since f ≡ 1 ∈ AK (this corresponds to m ≡ π), and DKL(π∥π) = 0 < K, i.e. Slater’s condition is satisfied.
We now show compactness of the feasible set. Let { f n} ⊂ AK. Since  ́
Λ fn
t dπt = 1 Q
a.e., we have ∥ f n∥L1(Π) =  ́
f n dΠ =  ́ 1 dQ = Q(X) < ∞ for all n. Moreover, the KL bound
 ́
f n log f n dΠ ≤ K gives uniform integrability of { f n} by the de la Vallée Poussin criterion
(use Φ(u) = u log u − u + 1, which is superlinear and  ́ Φ( f n) dΠ ≤ K + Q(X)). Hence, by the Dunford–Pettis theorem, there is a subsequence (not relabelled) of { f n} and f ∈ L1(Π) with f n ⇀ f in L1(Π), i.e. AK is relatively weakly compact in L1(Π). We next verify weak closedness. Let f n ∈ AK with f n ⇀ f in L1(Π). Nonnegativity is preserved under L1–weak limits. The normalization constraint passes to the limit because for every φ ∈ L∞(X), ˆ
X
φ(ω, t)
ˆ
Λ
fn
t (ω, λ) πt(ω, dλ) dQ =
ˆ
φ(ω, t) f n(ω, t, λ) dΠ −→
ˆ
φ f dΠ,
which implies  ́
f πt(dλ) = 1 Q-a.e. Likewise, the KL constraint is weakly lower semicontinuous:
since u ↦→ u log u is convex l.s.c. on [0, ∞), the functional f ↦→  ́
f log f dΠ is l.s.c. for the
L1–weak topology, hence  ́
f log f dΠ ≤ lim infn
 ́
f n log f n dΠ ≤ K. We also note that, by standard arguments, integrals of the limiting function f with respect to πt are progressively measurable. Thus AK is weakly closed, hence weakly compact in L1(Π).
20

First we prove existence for bounded targets. For n ∈ N, set the truncation ab
(n)
t := (−n)∨(abt∧n). Define the truncated functional
Ln( f ) := E
ˆT
0
γ
2
 ́
Λ ρλ
t ft(·, λ) πt(dλ) − ab
(n)
t
2
dt = γ
2
 ́
X S f (ω, t) − ab
(n)
t (ω) 2
dQ,
where S f (ω, t) :=  ́
Λ ρλ
t (ω) ft(ω, λ) πt(ω, dλ) (note this is just ρ ̄t). For each n, we claim that Ln is
weakly lower semicontinuous on AK. Define Φn(S f ) B Ln( f ) and note that since x ↦→ (x − ab(n))2 is convex and continuous in x, then by it is standard that Φn(S f ) is weakly lower semicontinuous as a functional of S f , hence it suffices to show that S f k ⇀ S f in L1(X) as f k ⇀ f in L1(Π).
Indeed, if f k ⇀ f in L1(Π), then for any ψ ∈ L∞(X), ˆ
X
ψS f k dQ =
ˆ
ψ(ω, t)ρλ
t (ω) f k(ω, t, λ) dΠ −→
ˆ
ψ(ω, t)ρλ
t (ω) f (ω, t, λ) dΠ =
ˆ
X
ψS f dQ,
because (ω, t, λ) ↦→ ψ(ω, t)ρλ
t (ω) ∈ L∞(Π) by (A1). Hence S f k ⇀ S f in L1(X).
By the above, AK is weakly compact. Since Ln is weakly lower semicontinuous on AK, there
exists a minimizer f (n) ∈ AK of Ln.
We now remove the boundedness assumption. By Step 1, the sequence { f (n)}n≥1 ⊂ AK is
relatively weakly compact in L1(Π). Extract a subsequence (not relabelled) such that f (n) ⇀ f ∗ in L1(Π). Then f ∗ ∈ AK by the above. For each fixed f , we have by elementary algebra
(S f − ab(n))2 − (S f − ab)2 ≤ 2 |S f − ab| |ab − ab(n)| + (ab − ab(n))2.
By (A1)–(A2), S f ∈ L2(X) (since |S f | ≤ M ∈ L2) and ab(n) → ab in L2(X). Hence the right-hand side converges to 0 in L1(X), and thus
Ln( f ) −−−−→
n→∞
L( f ) := γ
2
ˆ
X
S f − ab 2 dQ.
Since f (n) ⇀ f ∗ in L1(Π) and f ∗ ∈ AK, Fatou and the pointwise convergence of Ln yield
L( f ∗) = infAK L.
Therefore, with ln := infg∈AK Ln(g) = Ln( f (n)) and l := infg∈AK L(g), we have ln ↓ L∞ := limn→∞ ln and, by the previous result and Fatou,
L( f ∗) ≤ lim inf
n→∞
Ln( f (n)) = L∞.
On the other hand, for any g ∈ AK, L(g) = limn→∞ Ln(g) ≥ limn→∞ ln = L∞; taking the infimum over g yields l ≥ L∞. Combining the two expressions,
l ≤ L( f ∗) ≤ L∞ ≤ l ,
so L( f ∗) = l . In terms of kernels m∗
t (ω, dλ) := f ∗
t (ω, λ) πt(ω, dλ), this proves existence of an
optimal adapted flow m∗ for Problem 4.1.
Finally, we show strong duality and the existence of the Lagrange multiplier. The problem is convex (the map m ↦→ ρ ̄t(m) is linear and x ↦→ x2 is convex; KL is convex) and proper, and Slater’s condition holds. Therefore, classical convex duality yields strong duality and existence of a Lagrange multiplier α∗ ≥ 0 such that m∗ minimizes the Lagrangian
E
ˆT
0
hγ
2 ρ ̄t(mt) − abt
2 + α∗ KL(mt∥πt)
i
dt
over all G–progressively measurable flows m with mt ≪ πt a.s. for a.e. t, and hence over all progressively measurable flows, since KL(mt∥πt) = +∞ when mt 3 πt. Moreover, complementary
slackness holds: α∗ DKL(m∗∥π) − K = 0.
21

The Lagrangian integrand is a normal convex integrand in (t, ω, mt) in the sense of Rockafellar, hence the minimization problem separates pointwise in (t, ω) into independent convex problems over P(Λ). Fix (t, ω) and abbreviate a = abt(ω), ρ(·) = ρ·
t(ω), and π = πt(ω). The pointwise problem is
min
μ∈P(Λ), μ≪π f (μ) := γ
2
ˆ
Λ
ρ dμ − a
2 + α KL(μ∥π), α := α∗ ≥ 0. (4.14)
4.3 Identification of the Form of the Minimizing Measures
Let b(μ) :=  ́ ρ dμ. By equation 4.11 and the Gâteaux derivative of KL, the Lions first variation of f at μ is
δf
δμ (μ, λ) = γ b(μ) − a ρ(λ) + α log dμ
dπ (λ) + 1 + const, (4.15)
with the additive constant fixed by normalization. At any minimizer μ∗ (necessarily with strictly positive density when α > 0), the KKT optimality condition yields
γ b∗ − a ρ(λ) + α log dμ∗
dπ (λ) + 1 = const, b∗ :=
ˆ
ρ dμ∗. (4.16)
Proposition 4.10. If α > 0, the unique minimizer of (4.14) is the Gibbs measure
dμ∗
θ(λ) = e−θ ρ(λ)
Z(θ) π(dλ),
Z(θ) :=
ˆ
Λ
e−θρ(λ) π(dλ),
θ= γ
α (b∗ − a),
(4.17)
with mean
ψ(θ) :=
ˆ
ρ dμ∗
θ=
ˆ
Λ
ρ(λ)e−θρ(λ) π(dλ)
ˆ
Λ
e−θρ(λ) π(dλ)
=− d
dθ log Z(θ). (4.18)
The scalar θ is the unique solution of
ψ(θ) = a + α
γ θ. (4.19)
Proof. Fix (t, ω) and set ρ := ρ·
t(ω), π := πt(ω) and a := abt(ω); we suppress the indices for clarity.
For μ ≪ π set
F(μ) := γ
2 b(μ) − a 2 + α KL(μ∥π), b(μ) :=
ˆ
Λ
ρ dμ.
Assume α > 0. By the boundedness of ρ (Assumption 4.2) the partition function
Z(θ) :=
ˆ
Λ
e−θρ(λ) π(dλ) ∈ (0, ∞), θ ∈ R,
is finite and C1 in θ, with
ψ(θ) :=
ˆ
ρ dμ∗
θ=
 ́ ρe−θρ dπ
 ́
e−θρ dπ = − d
dθ log Z(θ),
where μ∗
θ is defined by (4.17).
22

The variational formula for KL divergence, see, e.g., [14], p.29, Lemma 1.4.3, asserts that for any bounded measurable φ and any μ ≪ π,
KL(μ∥π) ≥
ˆ
φ dμ − log
ˆ
eφ dπ,
with equality iff dμ
dπ ∝ eφ. Applying this with φ = −θρ gives, for all θ ∈ R and μ ≪ π,
KL(μ∥π) ≥ −θ b(μ) − log Z(θ), (4.20)
with equality iff μ = μ∗
θ as in (4.17). Hence
F(μ) ≥ α − θ b(μ) − log Z(θ) + γ
2 b(μ) − a 2 =: Φθ b(μ) .
For fixed θ, Φθ(x) is a strictly convex quadratic in x with unique minimizer
x∗(θ) = a + α
γ θ,
and minimal value
inf
x∈R
Φθ(x) = −α θa + log Z(θ) − α2
2γ θ2. (4.21)
Therefore, for all μ ≪ π and θ ∈ R,
F(μ) ≥ −α θa + log Z(θ) − α2
2γ θ2. (4.22)
Equality in (4.22) for some θ occurs iff simultaneously: (i) equality holds in (4.20), i.e. μ = μ∗
θ,
and (ii) b(μ) = x∗(θ), i.e. b(μ∗
θ) = a + α
γ θ. Since b(μ∗
θ) = ψ(θ), condition (ii) is equivalent to the fixed–point equation
ψ(θ) = a + α
γ θ, (4.23)
which is precisely (4.19). If θ∗ solves (4.23), then μ∗
θ∗ achieves equality in (4.22) and is therefore
optimal for the primal problem, with optimizer of the form (4.17) and tilted mean given by (4.18). Because ρ is bounded, Z is C2 and
ψ′(θ) = − d2
dθ2 log Z(θ) = −Varμ∗
θ
(ρ) ≤ 0.
Hence the function g(θ) := ψ(θ) − a − α
γ θ is strictly decreasing:
g′(θ) = ψ′(θ) − α
γ ≤ −α
γ < 0.
Moreover, ψ(θ) is bounded while the linear term diverges, so g(θ) → +∞ as θ → −∞ and g(θ) → −∞ as θ → +∞. By continuity there exists a unique θ∗ solving (4.23). For α > 0, F is strictly convex on {μ ≪ π} (sum of the strictly convex α KL(·∥π) and a convex function of the linear statistic b(μ)), hence the minimizer is unique. Since μ∗
θ∗ is feasible and optimal, it is the
unique minimizer. This proves that for α > 0 the unique optimizer is the Gibbs measure (4.17); its mean is ψ(θ) in (4.18), and the parameter θ is uniquely determined by (4.19).
Lemma 4.11. Under Assumption 4.2 (A3), ψ in (4.18) is continuous and nonincreasing on R, with range ψ(R) = [infλρ(λ), supλρ(λ)]. Hence (4.19) admits a unique solution θ ∈ R.
23

Proof. Fix (t, ω) and set ρ := ρ·
t(ω) and π := πt(ω), as well as
Z(θ) :=
ˆ
Λ
e−θ ρ(λ) π(dλ), dμθ(λ) := e−θ ρ(λ)
Z(θ) π(dλ), ψ(θ) :=
ˆ
Λ
ρ dμθ.
Write m := ess infλρ(λ) and M := ess supλρ(λ) (finite due to the assumptions).
By Assumption 4.2 (A3), Φ(η) := log ́
eηρ dπ is finite for all η ∈ R. Hence Z(θ) = eΦ(−θ) ∈ (0, ∞) for every θ ∈ R. Moreover, on any compact interval I ⊂ R there exists c = supθ∈I |θ| < ∞
and, for any δ > 0,
| ρ |e−θρ ≤ 1δ e(c+δ)|ρ| ≤ 1δ e(c+δ)ρ + e−(c+δ)ρ , ρ2e−θρ ≤ 2
δ2 e(c+δ)|ρ|,
so Assumption 4.2 (A3) implies the right-hand sides are π–integrable. Dominated convergence then yields Z ∈ C2(R) with
Z′(θ) = −
ˆ
ρ e−θρ dπ, Z′′(θ) =
ˆ
ρ2e−θρ dπ.
Let A(θ) := log Z(θ). Then A′(θ) = Z′(θ)/Z(θ) = −ψ(θ) and
A′′(θ) = Z′′(θ)
Z(θ) − Z′(θ)
Z(θ)
2
= Varμθ (ρ) ≥ 0,
so ψ(θ) = −A′(θ) is continuous and nonincreasing on R. If ρ is not π–a.s. constant, then μθ is
equivalent to π (its density e−θρ/Z(θ) is strictly positive π–a.s.), hence ρ is not μθ–a.s. constant and Varμθ (ρ) > 0 for all θ, i.e. ψ is strictly decreasing.
For every θ, since μθ is a probability measure and ρ ∈ L1(μθ),
m ≤ ψ(θ) ≤ M.
We show limθ→+∞ ψ(θ) = m; the case θ → −∞ is analogous (with limit M). Fix ε > 0 and set
Aε := {λ : ρ(λ) ≤ m + ε}, Bε := Λ \ Aε = {λ : ρ(λ) > m + ε}.
By definition of m = infλρ(λ), π(Aε) > 0 due to (A4). Decompose, for θ > 0,
Z(θ) =
ˆ
e−θρ dπ = e−θ(m+ε)
©
«
ˆ
Aε
e−θ(ρ−m−ε) dπ
| {z }
=:C ε (θ)
+
ˆ
Bε
e−θ(ρ−m−ε) dπ
| {z }
=:Lε (θ)
a ® ® ® ® ®
¬
,
and ˆ
ρ e−θρ dπ = e−θ(m+ε)
ˆ
Aε
ρ e−θ(ρ−m−ε) dπ +
ˆ
Bε
ρ e−θ(ρ−m−ε) dπ .
Since ρ ≤ m + ε on Aε, we have ˆ
Aε
ρ e−θ(ρ−m−ε) dπ ≤ (m + ε) Cε(θ).
On Bε we have ρ − m − ε > 0, hence e−θ(ρ−m−ε) ↓ 0 pointwise as θ → ∞ and is dominated
by 1. Because ρ ∈ L1(π) (by Assumption 4.2 using |x| ≤ δ−1eδ|x| and two-sided exponential integrability), dominated convergence gives
Lε(θ) −→ 0 and Rε(θ) :=
ˆ
Bε
ρ e−θ(ρ−m−ε) dπ −→ 0 as θ → ∞.
24

Therefore,
ψ(θ) =
 ́ ρ e−θρ dπ
Z(θ) ≤ (m + ε) Cε(θ) + Rε(θ)
Cε(θ) + Lε(θ) −−−−→
θ→∞ m + ε.
Since ε > 0 is arbitrary and ψ(θ) ≥ m, it follows that limθ→∞ ψ(θ) = m. The limit limθ→−∞ ψ(θ) =
M is proved symmetrically by applying the same argument to the sets A+
ε := {ρ ≥ M − ε} and
B+
ε := {ρ < M − ε}. Consequently,
ψ(R) = [m, M] = infλρ(λ), supλρ(λ) .
The map θ ↦→ ψ(θ) is continuous and bounded, with ψ(θ) → M as θ → −∞ and ψ(θ) → m as θ → +∞. If α > 0, then
g(θ) := ψ(θ) − a − α
γθ
is strictly decreasing, with limθ→−∞ g(θ) = +∞ and limθ→+∞ g(θ) = −∞, hence there exists a unique θ ∈ R solving (4.19). If α = 0, then (4.19) reduces to ψ(θ) = a, which has a solution iff a ∈ [m, M]; it is unique when ρ is not π–a.s. constant (since ψ is strictly decreasing), and either has no solution or infinitely many solutions when ρ is π–a.s. constant (according as a ≠ m = M or a = m = M).
Lemma 4.12. For α2 > α1 > 0, the corresponding optimizers μ∗
αi satisfy
KL(μ∗
α2 ∥π) ≤ KL(μ∗
α1 ∥π).
Proof. Let Fα(μ) := γ
2 b(μ) − a 2 + α KL(μ∥π) and let μ∗
αi be any minimizer of Fαi for i = 1, 2. By
boundedness of ρ we have Fαi (π) < ∞, hence Fαi (μ∗
αi
) ≤ Fαi (π) < ∞, which in particular implies
KL(μ∗
αi
∥π) < ∞. By optimality,
Fα2 (μ∗
α2 ) ≤ Fα2 (μ∗
α1), (4.24)
Fα1 (μ∗
α1 ) ≤ Fα1 (μ∗
α2). (4.25)
Expanding (4.24)–(4.25) yields
γ
2 b(μ∗
α2 ) − a 2 + α2 KL(μ∗
α2 ∥π) ≤ γ
2 b(μ∗
α1 ) − a 2 + α2 KL(μ∗
α1 ∥π),
γ
2 b(μ∗
α1 ) − a 2 + α1 KL(μ∗
α1 ∥π) ≤ γ
2 b(μ∗
α2 ) − a 2 + α1 KL(μ∗
α2 ∥π).
Adding the two inequalities and cancelling the matching quadratic terms gives
α2 KL(μ∗
α2 ∥π) + α1 KL(μ∗
α1 ∥π) ≤ α2 KL(μ∗
α1 ∥π) + α1 KL(μ∗
α2 ∥π),
i.e.
(α2 − α1) KL(μ∗
α2 ∥π) − KL(μ∗
α1 ∥π) ≤ 0.
Since α2 > α1 > 0, it follows that KL(μ∗
α2 ∥π) ≤ KL(μ∗
α1∥π), as claimed.
4.4 Optimal Adapted Measure-Valued Control
Define θ∗
t (ω) to be the unique solution of (4.19) with a = abt(ω), ρ = ρ·
t(ω), and π = πt(ω). Set
m∗
t (dλ) := exp − θ∗
t (ω) ρλ
t (ω)
ˆ
Λ
exp − θ∗
t (ω) ρλ′
t (ω) πt(ω, dλ′)
πt(ω, dλ). (4.26)
25

Proposition 4.13. (θ∗
t )t∈[0,T] is a G–adapted real–valued process. Consequently, for every t ∈ [0, T], B ∈
B(Λ), the map ω ↦→ m∗
t (ω, B) is Gt–measurable, so (m∗
t )t∈[0,T] is an G–adapted flow of probability
kernels. Moreover, m∗ is optimal for Problem 4.1. If, in addition, the maps (t, ω) ↦→ ρλ
t (ω), (t, ω) ↦→ abt(ω), and (t, ω) ↦→ πt(ω, B) are progressively
measurable for each fixed λ ∈ Λ and B ∈ B(Λ), then the maps (t, ω) ↦→ θ∗
t (ω) and (t, ω) ↦→ m∗
t (ω, B)
are P(G)–measurable (i.e. progressively measurable).
Proof. Fix t ∈ [0, T] and set ρ(ω, λ) := ρλ
t (ω), π(ω, ·) := πt(ω, ·) and a(ω) := abt(ω). For each
θ ∈ R set
Z(ω, θ) :=
ˆ
Λ
e−θ ρ(ω,λ) π(ω, dλ), ψ(ω, θ) :=
ˆ
Λ
ρ(ω, λ) e−θ ρ(ω,λ) π(ω, dλ)
Z(ω, θ) .
We begin by showing the measurability of (ω, θ) ↦→ ψ(ω, θ) at fixed t. From assumptions it follows that (ω, λ) ↦→ ρ(ω, λ) is Gt ⊗ B(Λ)–measurable. Consequently, for each fixed θ, the functions
(ω, λ) ↦→ e−θ ρ(ω,λ) and (ω, λ) ↦→ ρ(ω, λ) e−θ ρ(ω,λ)
are Gt ⊗B(Λ)–measurable and bounded. Since ω ↦→ π(ω, ·) is an Gt–measurable kernel on Λ, the
map ω ↦→  ́
Λ g(ω, λ) π(ω, dλ) is Gt–measurable for any Gt–measurable ω ↦→ g(ω, λ), see [30],
Lemma 1.41. Therefore, for each θ, both ω ↦→ Z(ω, θ) and ω ↦→  ́
Λ ρ(ω, λ)e−θρ(ω,λ) dπ(ω, dλ) are Gt–measurable; as Z(ω, θ) > 0, the ratio ψ(ω, θ) is Gt–measurable. Moreover, by boundedness of ρ and dominated convergence, θ ↦→ ψ(ω, θ) is continuous for each ω, hence a Caratheodory function, hence by Lemma 4.51, [3], p.153, it is Gt ⊗ B(R)–measurable.
Then, we show Gt–measurability of the fixed point θ∗
t . Assume α > 0. Define
f (ω, θ) := ψ(ω, θ) − a(ω) − α
γ θ.
By the previous step and measurability of a(·), for each fixed θ the map ω ↦→ f (ω, θ) is Gt–measurable, and for each ω, θ ↦→ f (ω, θ) is continuous and strictly decreasing (Lemma 4.11).
For each ω there is a unique root θ∗
t (ω) of f (ω, θ) = 0. Using monotonicity,
θ∗
t (ω) = inf q ∈ Q : f (ω, q) ≤ 0 .
Hence, for any r ∈ R,
{ω : θ∗
t(ω) < r} =
Ø
q∈Q, q<r
{ω : f (ω, q) ≤ 0} ∈ Gt ,
since each ω ↦→ f (ω, q) is Gt–measurable. Thus ω ↦→ θ∗
t (ω) is Gt–measurable.
If α∗ = 0 and, in addition, abt(ω) ∈ infλρ(λ), supλρ(λ) for a.e. (t, ω), then one can
define θ∗
t (ω) as any (measurable) solution of ψt(ω, θ) = abt(ω) (e.g., the minimal root), and the conclusions above still hold. To show the adaptedness of m∗
t , define
ht(ω, λ) := exp − θ∗
t (ω) ρ(ω, λ) .
Note ht(ω, λ) is Gt-measurable in ω and continuous in λ, hence a Caratheodory function, hence the map (ω, λ) ↦→ ht(ω, λ) is Gt ⊗ B(Λ)–measurable, and strictly positive. Therefore, for each B ∈ B(Λ) the numerator
ω ↦−→
ˆ
B
ht(ω, λ) π(ω, dλ)
26

and the (strictly positive) denominator
ω ↦−→
ˆ
Λ
ht(ω, λ) π(ω, dλ)
are Gt–measurable. Their ratio equals ω ↦→ m∗
t (ω, B) by (4.26), hence m∗
t is Gt–measurable for
each t, i.e., (m∗
t )t∈[0,T] is an G–adapted flow of kernels.
Finally, we must show that the obtained controls are optimal. Let α∗ be the scalar from Theorem 4.9. For this choice, the above gives θ∗
t and that m∗ is adapted. By Proposition 4.10,
for each (t, ω) the measure m∗
t (ω, ·) solves the corresponding pointwise minimization of the
Lagrangian integrand, hence m∗ minimizes (4.12). Theorem 4.9 then implies m∗ is optimal for Problem 4.1.
Lemma 4.14. At (t, ω) and θ = θ∗
t (ω),
KL m∗
t ∥πt = −θ ψt(θ) − log Zt(θ), Zt(θ) :=
ˆ
Λ
e −θρλ
t πt(dλ). (4.27)
The map α ↦→ E ́ T
0 KL(m∗
t (α)∥πt) dt is continuous and nonincreasing on (0, ∞). It is strictly decreasing provided
Q (t, ω) : at(ω) ≠ ψt(0, ω) > 0 and ρ·
t(ω) is not πt(ω)-a.s. constant a.e.
Hence there exists at least one α∗ ≥ 0 enforcing the global constraint:
E
ˆT
0
KL(m∗
t ∥πt) dt = K,
with α∗ > 0 when 0 < K < G(0+) := limα↓0 E ́ T
0 KL(m∗
t (α)∥πt) dt, and α∗ = 0 when K ≥ G(0+). If,
in addition, the strictness condition holds, then this α∗ is unique.
Proof. We omit the dependence on t for simplicity. Since dm∗
θ
dπ (λ) = e−θ ρ(λ)/Z(θ), we have
log dm∗
θ
dπ = −θ ρ − log Z(θ),
and therefore
KL(m∗
θ∥π) =
ˆ
log dm∗
θ
dπ dm∗
θ = −θ
ˆ
ρ dm∗
θ − log Z(θ) = −θ ψ(θ) − log Z(θ).
This yields (4.27). Recall that by Lemma 4.12 α ↦→ KL(μ∗
α∥π) is nonincreasing pointwise in (t, ω). Consequently,
α ↦→ E ́ T
0 KL(m∗
t (α)∥πt) dt is nonincreasing. It is strictly decreasing if
Q (t, ω) : at(ω) ≠ ψt(0, ω) > 0 and ρ·
t(ω) is not πt(ω)-a.s. constant a.e.
To show continuity of α ↦→ E ́ T
0 KL(m∗
t (α)∥πt) dt on (0, ∞), fix α0 > 0 and work pointwise in
(t, ω). Let θ(α) denote the unique solution of the fixed–point equation
ψ(θ) = a + α
γ θ.
Set f (θ, α) := ψ(θ) − a − (α/γ)θ. Then f (θ(α), α) = 0 and
∂θ f (θ, α) = ψ′(θ) − α
γ = −Varm∗
θ
(ρ) − α
γ < 0.
27

By the (deterministic) implicit function theorem, α ↦→ θ(α) is C1 in a neighborhood of α0; hence
α ↦−→ KL m∗
θ(α)∥π = −θ(α) ψ(θ(α)) − log Z(θ(α))
is continuous pointwise in (t, ω). To pass to expectation and time–integration, observe that for all α and any competitor μ,
KL μ∗
α∥π ≤ 1
α Fα(μ).
Choosing μ = μ∗
α0 and restricting α ∈ [α0/2, 2α0] yields the pointwise bound
KL m∗(α)∥π ≤ 1
α Fα μ∗
α0 ≤ γ
α0
b(μ∗
α0) − a 2
2 + KL μ∗
α0 ∥π .
Both terms on the right are integrable (they appear in Fα0(μ∗
α0)), so they provide an α–uniform
integrable bound on [α0/2, 2α0]. Dominated convergence then gives continuity of
α ↦−→ E
ˆT
0
KL m∗
t (α)∥πt dt
at α0. Since α0 > 0 was arbitrary, continuity holds on (0, ∞). Write G(α) := E ́ T
0 KL(m∗
t (α)∥πt) dt.
By the above, G is continuous and nonincreasing on (0, ∞). Moreover, for each (t, ω), θ(α) → 0 as α → ∞ (since α θ(α) = γ(ψ(θ(α)) − a) and ψ is bounded), so KL(m∗
t (α)∥πt) ↓ 0. By the
monotone convergence theorem, G(α) ↓ 0 as α → ∞. Therefore, for any K ∈ (0, G(0+)) there exists at least one α∗ > 0 with G(α∗) = K; if K ≥ G(0+), the budget is slack and we set α∗ = 0. If, in addition, G is strictly decreasing (e.g. under the strictness condition stated above), then α∗ is unique.
Remark 4.15. In information geometry, the I-projection of π ∈ P(Λ) onto E ⊂ P(Λ) is any
μ★ ∈ arg min
μ∈E KL(μ∥π),
whenever the minimum exists, where (Λ, B(Λ)) is a measurable space and P(Λ) is the set of probability measures on it. When E is convex and suitably closed and DKL(·∥π) is finite on E, the I-projection exists and is unique. In particular, if E is defined by linear moment constraints
(e.g.,  ́
fi dμ = ci), then the I-projection μ★ has an exponential-tilt density with respect to π.
We collect the previous results into a single main theorem.
Theorem 4.16. Under Assumption 4.2, there exists α∗ ≥ 0 and a G–progressively measurable optimal control m∗ given by (4.26), where θ∗
t solves
ψt(θ) = abt + α∗
γ θ, ψt(θ) =
ˆ
ρλ
t e−θρλ
t πt(dλ) ˆ
e −θρλ
t πt(dλ)
.
If α∗ > 0, then for a.e. (t, ω) the equation has a unique solution θ∗
t (ω), and the constraint is binding:
E
ˆT
0
KL(m∗
t ∥πt) dt = K.
If α∗ = 0, then any adapted m with ρ ̄t(mt) = abt a.e. and DKL(m∥π) ≤ K is optimal. In particular,
whenever abt ∈ ess infλρλ
t , ess supλρλ
t a.s., one may select the (possibly nonunique) KL I–projection
given by any solution θt of ψt(θt) = abt as a canonical adapted minimizer.
28

Proof. Combine Theorem 4.9, Propositions 4.10 and 4.13, Lemmas 4.11 and 4.14.
Finally, we check that relaxing the constraints produces the filtered price process.
Theorem 4.17. Assume 4.2 and 4.3. For K > 0, let m∗,K denote an optimal solution to Problem 4.1 and write
ψ(K)
t := ρ ̄t m∗,K
t=
ˆ
Λ
ρλ
t m∗,K
t (dλ).
Let Sb solve (4.3), and for a fixed β ∈ [0, 1] let Se(K) solve
d
Se
(K)
t = (1 − β)abt + β ψ(K)
t dt + σbt dWbt , Se
(K)
0 = Sb0. (4.28)
Then, as K ↑ ∞,
L m∗,K = γ
2E
ˆT
0
ψ(K)
t − abt
2 dt −→ 0, (4.29)
sup
t∈[0,T]
Se
(K)
t − Sbt ≤ β
ˆT
0
ψ(K)
t − abt dt
P
−−−−−→
K→∞ 0, (4.30)
and, in particular,
E
"
sup
t∈[0,T]
Se
(K)
t − Sbt
#
≤β
q
2T
γ L m∗,K 1/2 −−−−−→
K→∞ 0.
Proof sketch. By complementary slackness (4.13), the optimal multiplier satisfies α∗(K) ↓ 0 as K ↑ ∞. Hence the constrained optimizers m∗,K minimize
E
ˆT
0
hγ
2 ρ ̄t(mt) − abt
2 + α∗(K) KL(mt∥πt)
i
dt.
Let m0 be as in Proposition 4.5; using it as a competitor yields L(m∗,K) ≤ α∗(K) E ́ T
0 KL(m0
t ∥πt) dt.
Since α∗(K) → 0, this forces (4.29). For (4.30), note that Se(K) −Sbsolves d(Se(K) −Sb)t = β(ψ(K)
t − abt) dt,
therefore the pathwise bound and the L1–bound follow by Cauchy–Schwarz.
4.5 Example: Uniform Prior and Affine Proposal Drifts
Fix t and suppose πt is uniform on [0, 1]. To ensure relaxing the constraint leads to matching the observable drift, define the expert proposal as a deviation from the filtered drift:
ρλ
t = abt + c1(t) λ, c1(t) > 0, λ ∈ [0, 1],
and write c1 = c1(t) for brevity. Then
Zt(θ) =
ˆ1
0
e−θ(abt +c1λ) dλ = e−θabt 1 − e−θc1
θc1
, (4.31)
ψt(θ) =
 ́1
0 (abt + c1λ) e−θ(abt+c1λ) dλ
 ́1
0 e−θ(abt +c1λ) dλ
=
abt + c1
1
θc1
−1
eθc1 − 1 , (4.32)
with ψt(0) = abt + c1/2 and ψt(θ) ↓ abt as θ → ∞.
For any α > 0 there is a unique θ∗
t solving
c1
1
θc1
−1
eθc1 − 1 = α
γ θ, (4.33)
29

and the optimal kernel (4.26) has density
m∗
t (dλ) = θ∗
t c1 e−θ∗
t c1 λ
1 − e−θ∗
t c1 dλ on [0, 1].
The pointwise KL reads
KL(m∗
t ∥πt) = −θ∗
t ψt(θ∗
t ) − log Zt(θ∗
t ) = −1 + θ∗
t c1 e θ∗
t c1 − 1
− log 1 − e−θ∗
t c1 + log(θ∗
t c1),
and the global constraint uniquely selects α∗ > 0 solving E ́ T
0 KL(m∗
t ∥πt) dt = K, or returns
α∗ = 0 if the constraint is slack. Since θ ↦→ KL(m∗
t ∥πt) is strictly increasing for θ > 0, K ↑ implies
θ∗
t ↑ and thus ψt(θ∗
t ) ↓ abt, so the aggregated mean (and hence the synthetic drift) converges to
the filtered drift as K → ∞. More precisely, as θ ↑ ∞, the m∗
t (dλ) converges weakly to δ{λ=0}, the
zero–loss selector m0, and ψ(θ) ↓ ab. Therefore, for the synthetic model
d
Set = (1 − β)abt + β ψt(θ∗
t ) dt + σbt dWbt ,
the drift collapses monotonically to abt as K ↑ ∞, and Se converges to the observable filter Sb in the sense of Theorem 4.17.
Remark 4.18. If abt equals the essential infimum/supremum of ρλ
t (e.g. here the infimum at
λ = 0 when c1 > 0), then θ∗
t = ±∞ in (4.33) and m∗
t concentrates on the corresponding extremal set; this is obtained as a limit of the formulas above.
4.6 Simulation of the True, Observed and Opinion-Biased Price Processes
On a filtered probability space, the true log–price X is given by
dXt = at dt − 1
2 σ2 dt + σ dW S
t , St = S0eXt .
The trader observes a drift–signal (used in the code for filtering)
dYt = at dt + R1/2 dBt ,
and forms the filtered drift abt := E[at | Ft]. The filtered price admits the innovation representation
d
Sbt = abt dt + σbt dWbt ,
with Wb an F–Brownian motion and σbt ≥ 0. Given an aggregation weight β ∈ [0, 1] and an aggregated mean ψt, the synthetic price is
d
Set = (1 − β) abt + β ψt dt + σbt dWbt , Se0 = Sb0. (4.34)
At time t, experts λ ∈ [0, 1] propose their individual bias terms
ρλ
t = abt + c1(t) λ, c1(t) > 0, (4.35)
with prior πt on [0, 1], where πt = Beta(aπ, bπ). For θ ∈ R the Gibbs measure optimizer is
m∗
t (dλ) = e−θ ρλ
t
Zt(θ) πt(dλ), Zt(θ) :=
ˆ1
0
e−θ ρλ
t πt(dλ),
and the aggregated mean ψt(θ) :=  ́ 1
0 ρλ
t m∗
t (dλ) = − d
dθ log Zt(θ).
30

For the Beta prior πt = Beta(aπ, bπ) and ρλ
t = abt + c1λ, letting u := −θc1 and M(u) :=
1F1(aπ; aπ + bπ; u), the confluent hypergeometric function,
Zt(θ) = e−θabt M(u), ψt(θ) = abt + c1
aπ
aπ + bπ
1F1(aπ+1; aπ+bπ+1; u)
1F1(aπ; aπ+bπ; u) .
The pointwise KL at the optimizer is
KL m∗
t ∥πt = −θ ψt(θ) − log Zt(θ) = −θc1
aπ
aπ + bπ
1F1(aπ+1; aπ+bπ+1; u)
1F1(aπ; aπ+bπ; u) − log M(u).
θ = θ(K) is selected from E ́ T
0 KL(m∗
t ∥πt) dt = K.
From (4.18) and Z′′
t /Zt − (Z′
t /Zt )2 = Varm∗
t
(ρλ
t ),
d
dθ ψt(θ) = −Varm∗
t
(ρλ
t ) ≤ 0, d
dθ KL m∗
t ∥πt = θ Varm∗
t
(ρλ
t ) ≥ 0. (4.36)
Hence K1 < K2 ⇒ θ(K1) < θ(K2) ⇒ ψt θ(K1) > ψt θ(K2) . With the choice (4.35), ψt(θ) ↓ abt as θ ↑ ∞, so the synthetic drift in (4.34) converges monotonically to abt when K → ∞ (Se collapses to Sb).
K θ α KL/T δshift
0.01 1.013811 0.23388 0.010000 0.237110 0.5 9.486238 0.0138132 0.500000 0.131035 5 192.478831 5.27449 × 10−5 5.000000 0.010152 20 364373.533564 1.50637 × 10−11 20.000000 5 × 10−6
31

Figure 3: Rows: increasing constraints K1 < K2 < K3 < K4. Columns: true St (blue), filtered Sbt (black), synthetic Set (red). Common y–scale across all panels. Average Corr(a, ab) across 30 paths is 0.8501.
32

5 Conclusion
We have studied three successively more specialized models of financial markets under information constraints with traders with differential beliefs. Our analysis has shown that under a fairly natural compatibility condition, increasing information leads to an efficient market as defined in [28] provided the increase in information is uniform across different traders. The more specialized model incorporating an individual trader’s biases introduced a novel way of measuring the impact of a trader’s-
 intuitive sense of ambiguity regarding the true value of a partially observed price process. Again, under some natural assumptions, increasing information leads to a decrease in this ambiguity and hence shrinking biases. Finally, we solved a stochastic optimal control problem for a trader seeking positive alphas as defined in [29], i.e. an arbitrage opportunity or a dominated asset. From a mathematical point of view, our optimal solution is formally similar to well-known results in information th-
eory and information geometry. All our theoretical results were implemented in simulations and hence are well-suited for practical applications to asset pricing in markets with significant information constraints and price evolutions affected by differential beliefs of market participants.
References
[1] M. Agueh and G. Carlier. Barycenters in the Wasserstein Space. SIAM Journal on Mathematical Analysis, 43(2):904–924, 2011.
[2] N. U. Ahmed. Dynamic Systems and Control with Applications. World Scientific, 2006.
[3] C. D. Aliprantis and K. C. Border. Infinite Dimensional Analysis: A Hitchhiker’s Guide. 3rd ed., Springer, 2006.
[4] K. Bahlali, M. A. Mezerdi, and B. Mezerdi. Stability of McKean–Vlasov stochastic differential equations and applications. arXiv:1902.03478, 2019.
[5] K. Bahlali, M. Mezerdi, and B. Mezerdi. Existence and optimality conditions for relaxed mean-field stochastic control problems. Systems & Control Letters 102 (2017), 1–8.
[6] A. Bain and D. Crisan. Fundamentals of Stochastic Filtering. Springer, 2009.
[7] J. Frédéric Bonnans. Convex and Stochastic Optimization. Springer, 2019.
[8] R. Carmona. Lectures on BSDEs, Stochastic Control, and Stochastic Differential Games with Financial Applications. SIAM, 2016.
[9] R. Carmona and F. Delarue. Probabilistic Theory of Mean Field Games with Applications I. Springer, 2018.
[10] R. Carmona and F. Delarue. Probabilistic Theory of Mean Field Games with Applications II. Springer, 2018.
[11] T. M. Cover and J. A. Thomas. Elements of Information Theory. Wiley, 2nd ed., 2006.
[12] I. Csiszár. I-divergence geometry of probability distributions and minimization problems. Annals of Probability, 3(1):146–158, 1975.
[13] A. Dembo and O. Zeitouni. Large Deviations Techniques and Applications. Springer, 2nd ed., 1998.
[14] P. Dupuis and R. S. Ellis. A Weak Convergence Approach to the Theory of Large Deviations. Wiley, 1997.
33

[15] T. van Erven and P. Harremoës. Rényi Divergence and Kullback–Leibler Divergence. arXiv:1206.2459, 2012.
[16] H. O. Fattorini. Infinite Dimensional Optimization and Control Theory. Encyclopedia of Mathematics and its Applications, Vol. 62. Cambridge University Press, Cambridge, 1999.
[17] C. Genest, K. J. McConway, and M. J. Schervish. Characterization of externally Bayesian pooling operators. Annals of Statistics, 14(2):487–501, 1986.
[18] K. Grigorian, R.A. Jarrow, 2023, Enlargement of Filtrations: An Exposition of Core Ideas with Financial Examples, working paper, Cornell University.
[19] K. Grigorian, R.A. Jarrow, 2024, Filtration Reduction and Incomplete Markets, Frontiers of Mathematical Finance, 3(1), 78-105.
[20] K. Grigorian, R.A. Jarrow, 2025, Filtration Reduction and Completeness in Brownian Motion Models, Frontiers of Mathematical Finance, Vol. 5, 94-120.
[21] K. Grigorian, R.A. Jarrow, 2023, Filtration Reduction and Completeness in Jump-Diffusion Models, working paper, Cornell University.
[22] K. Grigorian, R.A. Jarrow, 2024, Option Pricing in an Incomplete Market, The Quarterly Journal of Finance, Vol. 14, No 03.
[23] K. Grigorian, R.A. Jarrow, 2025, No arbitrage for a special class of filtration expansions, Annals of Finance, 21, 45-68.
[24] T. Heskes. Selecting weighting factors in logarithmic opinion pools. In NeurIPS, 1998.
[25] Z. Hu and L. J. Hong. Kullback–Leibler divergence constrained distributionally robust optimization. Optimization Online preprint, 2013.
[26] S. Jaimungal and S. M. Pesenti, Kullback–Leibler Barycentre of Stochastic Processes, Apr 2025.
https://arxiv.org/abs/2407.04860.
[27] R. A. Jarrow. Continuous-Time Asset Pricing Theory: A Martingale-Based Approach, 2nd ed. Springer, 2021.
[28] R. A. Jarrow and M. Larsson. The Meaning of Market Efficiency. Mathematical Finance, 22(1):1–30, 2012.
[29] R. A. Jarrow and P. Protter. Positive alphas and a generalized multiple-factor asset pricing model. Mathematics and Financial Economics, 10(1):29–48, 2016.
[30] O. Kallenberg. Foundations of Modern Probability, 2nd ed. Springer, 2002.
[31] B. Øksendal and A. Sulem, Applied Stochastic Control of Jump Diffusions, 3rd ed., Springer, 2019.
[32] R. T. Rockafellar and R. J.-B. Wets. Variational Analysis. Springer, 1998.
[33] M. J. Wainwright and M. I. Jordan. Graphical Models, Exponential Families, and Variational Inference. Foundations and Trends in Machine Learning, 1(1–2):1–305, 2008.
[34] J. Xiong. An Introduction to Stochastic Filtering Theory. Oxford University Press, 2008.
34

Appendix A
Let (Λ, d) be a compact metric space and let P(Λ) denote the space of Borel probability measures on Λ. Write W2 for the 2–Wasserstein distance on P(Λ) induced by d. Since Λ is compact, every probability measure has finite second moment, so P(Λ) = P2(Λ), and the W2–topology coincides with the topology of weak convergence. In particular, (P(Λ), W2) is compact and its Borel σ–algebra, denoted as B(P(Λ)), agrees with the Borel σ–algebra Bw(P(Λ)) for the weak topology.
A flow of probability kernels on Λ is a map (t, ω) ↦−→ mt(ω) ∈ P(Λ) that is (B([0, T]) ⊗ F )–measurable as a map from [0, T] × Ω into the Polish space (P(Λ), B(P(Λ))). We say m is F–adapted if, for each fixed t ∈ [0, T], the map ω ↦−→ mt(ω) is (Ft , B(P(Λ))–measurable. Let P(F) denote the progressive σ–algebra on [0, T] × Ω so that, for each t, the restriction to [0, t] × Ω coincides with B([0, t]) ⊗ Ft. We say m is progressively measurable if (t, ω) ↦−→ mt(ω) is P(F)–measurable as a map into (P(Λ-
), B(P(Λ))).
Lemma .1. Let Λ be Polish and let (Ω, F ) be a measurable space. For a map μ : Ω → P(Λ) with P(Λ) endowed with the weak topology and its Borel σ–algebra Bw(P(Λ)), the following are equivalent:
(i) μ is (F , Bw(P(Λ)))–measurable;
(ii) for all φ ∈ Cb(Λ), the map ω ↦→  ́
Λ φ(λ) dμ(ω, dλ) is F –measurable;
(iii) for all open G ⊂ Λ, the map ω ↦→ μ(ω, G) is F –measurable;
(iv) for all B ∈ B(Λ), the map ω ↦→ μ(ω, B) is F –measurable.
Proof. Standard. See Kallenberg, [30], Lemma 1.40.
Lemma .2. Assume (A1). Then
1. If m is adapted, then for each fixed t, the map ω ↦→ ρ ̄t(mt)(ω) :=  ́
Λ ρλ
t (ω) mt(ω, dλ) is
Ft –measurable.
2. If m is progressively measurable, then the map (t, ω) ↦→ ρ ̄t(mt)(ω) is P(F)–measurable (hence progressively measurable as a real–valued process).
Proof. Standard. Follows from Kallenberg, [30], Lemma 1.41 by standard arguments.
35

---

## Processing Information

- **Processing Library:** Zotero PDFWorker
- **Processing Date:** 2026-02-10T18:17:14.327Z
- **Text Length:** 77397 characters
- **Success:** Text extraction completed
- **PDF Library Used:** Zotero PDFWorker
- **Pages Processed:** 35 of 35
