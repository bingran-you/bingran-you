# PDF Document: Gnabeyeu and Pagès - 2025 - On a Stationarity Theory for Stochastic Volterra Integral Equations.pdf

**File Path:** Gnabeyeu and Pagès - 2025 - On a Stationarity Theory for Stochastic Volterra Integral Equations.pdf

**Processed Date:** 2026-02-10T18:15:10.358Z

**File Size:** 3159.55 KB

**Total Pages:** 52

**Extracted Pages:** 52

**PDF Library:** Zotero PDFWorker

**Attachment Item ID:** 3516

**Title:** On a Stationarity Theory for Stochastic Volterra Integral Equations

**Collection:** Large Files > Random Papers

---

## Extracted Text Content

On a Stationarity Theory for Stochastic Volterra Integral
Equations
Emmanuel Gnabeyeu
Laboratoire de Probabilit ́es, Statistique et Mode ́lisation (LPSM), UMR 8001, Sorbonne Universit ́e and Universit ́e Paris Cit ́e, Paris, France. E-mail: emmanuel.gnabeyeu mbiada@sorbonne-universite.fr
Gilles Page`s
Laboratoire de Probabilit ́es, Statistique et Mode ́lisation (LPSM), UMR 8001, Sorbonne Universit ́e, case 158, 4, pl. Jussieu, F-75252 Paris Cedex 5, France. E-mail: gilles.pages@sorbonne-universite.fr
September 1, 2025
Abstract
This paper provide a comprehensive analysis of the finite and long time behavior of continuoustime non-Markovian dynamical systems, with a focus on the forward Stochastic Volterra Integral Equations(SVIEs). We investigate the properties of solutions to such equations specifically their stationarity, both over a finite horizon and in the long run. In particular, we demonstrate that such an equation does not exhibit a strong stationary regime unless the kernel is constant or in a degenerate settings-
. However, we show that it is possible to induce a fake stationary regime in the sense that all marginal distributions share the same expectation and variance. This effect is achieved by introducing a deterministic stabilizer ς associated with the kernel. We also look at the Lp -confluence (for p > 0) of such process as time goes to infinity(i.e. we investigate if its marginals when starting from various initial values are confluent in Lp as time goes to infinity) and finally the functional weak l-
ong-run assymptotics for some classes of diffusion coefficients. Those results are applied to the case of Exponential-Fractional Stochastic Volterra Integral Equations, with an α-gamma fractional integration kernel, where α ≤ 1 enters the regime of rough path whereas α > 1 regularizes diffusion paths and invoke long-term memory, persistence or long range dependence. With this fake stationary Volterra processes, we introduce a family of stabilized volatility models.
Keywords: Stochastic Volterra Processes, Stochastic Differential Equations, Fourier-Laplace Transforms, Jordan-Cauchy Residue Theorem, Regular Variation, Tauberian Theorems, Limit theorems.
1 Introduction
The theory of stochastic Volterra integral equations (SVIEs) has its origins in the 1980s and has been widely developed since then. These equations which have recently attracted much attention in the mathematical finance community have been introduced mostly with non-singular kernel for modelling in population dynamics, biology and physics [34], in order to generalize modelling to non-Markovian stochastic systems with some memory effect. They were also motivated particularly by the physics
1
arXiv:2511.03474v1 [math.PR] 5 Nov 2025

of heat transfer [4] and have undergone extensive mathematical study. Early investigations can be traced back to the seminal work of Berger et al. (see [5],[6]) who derived existence and uniqueness results for SVIEs driven by Brownian motion with Lipschitz continuous coefficients. These initial results were subsequently extended in various directions. For instance, [40] generalized the existence and uniqueness results to SVIEs driven by right-continuous semimartingales and smooth kernels. An
example of such a kernel is K(t, s) = (t − s)H− 1
2 , where H is known as the Hurst coefficient. Others studies focused on extensions that incorporated anticipative integrands, utilizing Skorokhod integration and Malliavin calculus (This was explored in [38] and [3]). [12] and [14] focused on SVIEs with singular kernels. In a more recent contribution, [49] proved the existence and uniqueness of solutions to SVIEs with singular kernels and non-Lipschitz coefficients, utilizing a condition analogous to that of [50] for stochastic differential equat-
ions. Additionally, [51] examined SVIEs in Banach spaces with locally Lipschitz coefficients and singular kernels. In the late 1990s, attempts were made within the financial community to incorporate long-memory effects into continuous-time stochastic volatility models. This shift was largely motivated by the need to capture persistent dependencies observed in financial markets, particularly through fractional Brownian motion (see [15, 13]). Earlier studies, such as those by Comte and Renault [13],-
 found that H > 1/2 was a key parameter in capturing long memory in volatility dynamics. In the early 2000s, research shifted to Volterra equations with singular kernels that blow up as s → t (i.e., K(t, s) → +∞ as s → t or H < 1/2), following the empirical observation in [19] that volatility paths exhibit low Ho ̈lder regularity (H ≈ 0.1). As a result, there has been a resurgence of interest in SVIEs within mathematical finance, particularly with the rise of rough volatility models, as highlighte-
d in the work of [16]. These models, which use the above kernel, naturally capture this feature, as their paths have a H ̈older continuity exponent H. Singular kernel Volterra equations also arise as limiting dynamics in models of order books via nearly unstable Hawkes processes (see [29, 22]). In both context, such processes are used to mimic Fractional Brownian motion-driven stochastic differential equations (SDEs). More specifically, within these frameworks, Volterra equations with fractional k-
ernels K provide a more tractable alternative than SDEs involving stochastic integrals with respect to true H-fractional Brownian motions, which would otherwise require the use of “high-order” rough path theory or regularity structures. As the debate on the empirical value of the Hurst index remains controversial in the literature, we note that the setting considered in this paper covers the full range of the Hurst coefficient, namely H := α − 1
2 ∈ (0, 1). By considering a deterministic continuous function φ, typically normalized such that φ(0) = 1, a rather general form of the stochastic version of the Volterra equation on [0, T ] in R for any T > 0 takes the following form:
(
Xt = X0φ(t) + R t
0 K(t, s)b(s, Xs) ds + R t
0 K(t, s)σ(s, Xs) dWs, X0 ⊥⊥ W.
X0 : (Ω, F , P) → (R, B(R)) is a given initial random variable (1.1)
where b, σ : [0, T ] × R → R are Lipstchiz continuous function and K(t, s) a deterministic kernel modeling the memory or hereditary structure of the system. The process (Wt)t≥0 is an R-valued Brownian motion independent of X0, both defined on a probability space (Ω, A, P ) and Ft ⊃ Ft,X0,W a filtration satisfying the usual conditions. Such equations (1.1) naturally arise in the modeling of random systems with memory effects and irregular behaviour, including in mathematical finance, physics, and b-
iology.
1.1 Our contribution
In this paper, we investigate a weak form of stationarity for SVIEs with affine drifts and convolutive kernels of the form (1.1). Specifically, our main result follow that of [36] and states that, under a suitable
2

functional equation satisfied by a stabilizing function, the process of the form (1.1) may exhibit a form of fake stationarity regime, where the solution has either constant moments up to the order 2 or the same marginal distribution at each time t in the Gaussian case (typically pseudo-Ornstein-Uhlenbeck process, which could be called a fake stationary regime of type II). Moreover, we establish the existence of limiting distributions. Formally, we prove that as u → ∞, the shifted process (Xtu)t≥-
0, defined by
Xtu := Xt+u, converges in law to a limiting continuous process X∞. Unlike in [21] (see also [18, 28]), this convergence does not imply that the limiting process is stationary (in the sense that its finite-dimensional distributions are invariant under time shifts). However, we prove that, under fake stationarity regime, the limiting process is weak L2-stationary. Furthermore, since we do not characterize the dynamics of the limiting process, the notion of fake stationarity provides a tractable alte-
rnative framework for analyzing both short- and long-term behaviors in settings where classical stationarity is either unavailable or analytically intractable. From an applied perspective, this result may have important implications for volatility models widely used in mathematical finance. In particular, it suggests the possibility of introducing stabilized versions of such models, where the dynamics driving the asset’s (typically equity) volatility exhibit constant mean and variance over time. A-
 key advantage of the stabilized formulation lies in its ability to overcome a well-known limitation of classical and rough Heston models [27, 17] driven by mean-reverting CIR or Volterra-CIR dynamics. These models typically display two distinct regimes: a short-maturity regime, where the initial condition (deterministic value at the origin, often the long run mean) is prominent and the variance remains very small, and a long-term regime, which may correspond to the stationary distribution of the -
process. In contrast, the stabilized model provides a unified and coherent framework that captures both short- and long-maturity behaviors within a single regime, thereby enabling robust and consistent fitting across the full term structure.
1.2 Plan of the paper and Notations
The remainder of the paper is organized as follows: In Section 2, we review key properties of stochastic Volterra equations with convolutive kernels, including results on existence, moment control, and a special focus on processes with affine drift. In this setting, specific analytical tools become available, such as the resolvent and the solution of the Wiener–Hopf equation. Section 3 investigates the conditions under which SVIEs (1.1) with affine drift admit a weak stationary regime, in the spir-
it of [36], in a setting where the volatility coefficient is separable in time and state. The time-dependent (deterministic) multiplicative function, referred to as the stabilizer, appears in the Brownian convolution and serves to regulate or control the volatility of the process. In the fake stationarity regime, this stabilizing function is characterized as the solution to an intrinsic convolution equation involving the derivative of the resolvent associated with the Volterra kernel. Next, in Sec-
tion 3.3, we provide an example of a fake stationary regime of order p = 2 when the state-depedndent diffusion coefficient is a trinomial function. It follows in Section 4 the analysis of the confluence and long-run behavior of these time-inhomogenous processes as time tends to infinity. Specifically, we investigate, for such stabilized processes, the functional weak asymptotics of the time-shifted process (Xt+s)s≥0 as t → +∞, which turns out to be a weakly L2-stationary process. Finally, in Secti-
on 5, we apply these results to the case of SVIEs with an α-fractional integration kernel for α ∈ 1, 3
2 (long-term memory, persistence
or long range dependence), where the case α ∈ 1
2 , 1 has been extensively studied in [36, Section 5, Theorem 5.2]. In Section 6, we further extend the application to SVIEs with an α -exponential fractional integration kernel for α ∈ 1
2, 3
2 involving both the rough/short memory and long-term memory effects inherent to Volterra equations. Notations.
• Denote T = [0, T ] ⊂ R+, Lebd the Lebesgue measure on (Rd, Bor(Rd)), H := Rd, etc.
3

• X := C([0, T ], H)(resp. C0([0, T ], H)) denotes the set of continuous functions(resp. null at 0) from [0, T ] to H and Bor(Cd) denotes the Borel σ-field of Cd induces by the sup-norm topology.
• For p ∈ (0, +∞), Lp
H(P) or simply Lp(P) denote the set of H-valued random vectors X defined on a
probability space (Ω, A, P) such that ∥X∥p := (E[∥X∥p
H])1/p < +∞. For f : E → R, ∥f ∥sup = sup
x∈E
|f (x)|
• For f, g ∈ L1
R+,loc(R+, Leb1), we define their convolution by f ∗ g(t) = R t
0 f (t − s)g(s)ds, t ≥ 0.
• For f, g ∈ L2
R+,loc(R+, Leb) and W a Brownian motion, we define their stochastic convolution by
f W∗ g = R t
0 f (t − s)g(s)dWs, t ≥ 0.
• For a random variable/vector/process X, we denote by L(X) or [X] its law or distribution.
• X ⊥⊥ Y stands for independence of random variables, vectors or processes X and Y .
• Γ(a) = R +∞
0 ua−1e−u du, a > 0, and B(a, b) = R 1
0 ua−1(1 − u)b−1 du, a, b > 0. We will extensively
use the classical identities: Γ(a + 1) = a Γ(a) and B(a, b) = Γ(a)Γ(b)
Γ(a+b) .
2 Background on Stochastic Volterra equations with convolutive
kernels
We will assume that, the process (Xt)t≥0 takes values in R, i.e. H = H ̃ = R and X := C([0, T ], R).
Definition 2.1 (Convolutive kernel and Volterra equations). A kernel K : {(s, t) ∈ R2+ : 0 ≤ s < t} → R+ satisfying ∀ s, t ≥ 0, s < t, K(s, t) = K(0, t − s) is called a convolutive kernel. A Volterra equation based on a convolutive kernel is called a convolutive Volterra equation.
To alleviate notations, we denote from now on K(t) := K(0, t) so that K(s, t) = K(t − s). For convenience we also extend the function K : R+ → R+ to the whole real line by setting K(t) = 0, t ≤ 0.
2.1 Volterra processes with convolutive kernels
A significant difference between regular diffusion processes and Volterra processes from a technical viewpoint comes from the presence of the kernels which introduces some memory in the dynamics of the process, depriving us of the Markov property and usual tools of stochastic calculus. We are interested in the convolutive stochastic Volterra equation:
Xt = X0φ(t) +
Zt
0
K(t − s)b(s, Xs)ds +
Zt
0
K(t − s)σ(s, Xs)dWs, t ≥ 0. (2.2)
where b : T × R → R, σ : T × R → R are Borel measurable, K ∈ L2
loc,R+(Leb1) is a convolutive kernel and (Wt)t≥0 is a standard Brownian motion independent from the R-valued random variable X0 both defined on a probability space (Ω, A, P). Let (Ft)t≥0 be a filtration (satisfying the usual conditions) such that X0 is F0-measurable and W is an (Ft)-Brownian motion independent of X0. X0φ is thus a random function evolving deterministically for t > 0, i.e. X0φ is F0-measurable.
Assumption 2.2 (On Volterra Equations with convolutive kernels). Assume that the kernel K satisfies:
for every T > 0, Kint
T,β ∃ β > 1 such that K ∈ L2β
loc(Leb1). (2.3)
(Kcont
T,θ ) ∃ κT < +∞, ∃ θT > 0, ∀ δ ∈ (0, T ), sup
t∈[0,T ]
Zt
0
|K( s + δ) ∧ T − K(s))|2ds
1 2
≤ κT δθT . (2.4)
4

Assume b and σ satisfy the following Lipschitz-linear growth assumption uniform in time
(i) ∀t ∈ [0, T ], ∀x, y ∈ R, |b(t, x) − b(t, y)| + |σ(t, x) − σ(t, y)| ≤ Cb,σ,T |x − y| 1,
(ii) sup
t∈[0,T ]
(|b(t, 0)| + |σ(t, 0)|) < +∞,
(iii) Moreover, for some δ > 0, for any p > 0 and T > 0,
E sup
t∈[0,T ]
|X0φ(t)|p
!
< +∞, E|X0φ(t′) − X0φ(t)|p ⩽ CT,p 1 + E
"
sup
t∈[0,T ]
|X0φ(t)|p
#!
|t′ − t|δp.
Under Assumption (2.2), if X0 ∈ Lp(P) for some p > 0, then Equation (2.2) admits a unique pathwise continuous solution on R+ starting from X0 satisfying (among other properties),
∀ T > 0, ∃ CT,p > 0, sup
t∈[0,T ]
|Xt| p ≤ CT,p 1 + sup
t∈[0,T ]
|φ(t)| |X0| p
!
. (2.5)
This result appears as a generalization of the classical strong existence-uniqueness result of pathwise continuous solutions established in [30, Theorem 1.1] as an improved version of [51, Theorem 3.1 and Theorem 3.3], which holds only when the starting value X0 has finite polynomial moments of any order (the framework is more general with a function φ in front of the starting value).
2.2 Fourier-Laplace transforms and Solvent core of a convolutive kernel
The Laplace transform is a valuable tool, and we provide a brief overview here, as it is particularly effective for addressing the key equation (2.2). Let us first introduce the Laplace transform of a Borel function f : R+ → R+ by
∀ t ≥ 0, Lf (t) = R +∞
0 e−tuf (u)du ∈ [0, ∞].
This Laplace transform is non-increasing and if Lf (t0) < +∞ for some t0 ≥ 0, then Lf (t) → 0 as t → +∞ by Lebesgue’s dominated convergence theorem. One can define the Laplace transform of a Borel function f : R+ → R on (0, +∞) as soon as L|f|(t) < +∞ for every t > 0 by the above formula. The Laplace transform can be extended to R+ as an R-valued function if f ∈ L1
R+ (Leb1). Throughout this work, we will adopt the below resolvent definition put forth in [36], which offers a distinct perspective compared to the functional resolvent introduced in [4] and also discussed or presented in works such as [2]. Let K be a convolution kernel satisfying (2.3), (2.4) and R t
0 K(u)du > 0 for every t > 0. For every λ ∈ R, the resolvent or Solvent core Rλ associated to K and λ is defined as the unique solution – if it exists – to the deterministic Volterra equation
∀ t ≥ 0, Rλ(t) + λ
Zt
0
K(t − s)Rλ(s)ds = 1. (2.6)
or, equivalently, written in terms of convolution, Rλ + λK ∗ Rλ = 1. This equation is also known as resolvent equation or renewal equation. Its solution always satisfies Rλ(0) = 1 and admits the formal Neumann series expansion 2:
Rλ =
X
k≥0
(−1)kλk(1 ∗ Kk∗). (2.7)
1. By the Lipschitz-continuity of b and σ in x, uniformly in t, we have |b(t, x)| ≤ K (1 + |b(t, 0)| + |x|) for some constant K and likewise for σ i.e. b and σ are of linear growth in the sense that there exists a constant C > 0 such that:
∀t ∈ [0, T ], ∀x ∈ R, |b(t, x)| + |σ(t, x)| ≤ C(1 + |x|).
2. Recall that K1∗ = K and Kk∗(t) = R t
0 K(t − s) · K(k−1)∗(s) ds.
5

where, Kk∗ denotes the k-th convolution of K or the k-fold ∗ product of k with itself, with the convention in this formula, K0∗ = δ0 (Dirac mass at 0). From now on we will assume that the kernel K has a finite
Laplace transform LK(t) < +∞. Note that, as mentioned in [36], if the (non-negative) kernel K satisfies
0 ≤ K(t) ≤ Cebtta−1 for some a, b, C > 0 ∈ R+. (2.8)
then, by induction 1 ∗ K∗n(t) ≤ Cnebt Γ(a)n
Γ(an+1) tan, so that for such kernels, the above series (2.7) is
absolutely converging for every t > 0 implying that the function Rλ is well-defined on (0, +∞).
Remark 1. If K is regular enough (say continuous) the resolvent Rλ is differentiable and one checks that fλ = −R′
λ satisfies, for every t > 0, −fλ(t) + λ Rλ(0)K(t) − K ∗ fλ(t) = 0 that is fλ is solution to the equation
fλ + λK ∗ fλ = λK. (2.9)
2. Taking the Laplace transform from both side of the above equality (2.9), we have that : Lfλ(t)(1 +
λLK (t)) = λLK (t), t > 0. Consequently, Lfλ(t) = λLK(t)
1+λLK(t) so that, for λ ≥ 0, Lfλ(t) ≡ 0 if and only if
LK(t) ≡ 0 i.e. if and only if K = 0 by the injectivity of Laplace transform. 3. If lim
t→+∞ Rλ(t) = 0 then, one also has that R +∞
0 fλ(t)dt = 1 − Rλ(+∞) = 1.Moreover, if Rλ turns
out to be non-increasing, then fλ is non-negative and satisfies 0 ≤ fλ ≤ λK, so that fλ is a probability density.
Example 2.3 (Laplace transform and λ− Resolvent associated to the Exponential-fractional Kernel). The Laplace transform associated to a kernel K always exists and reads, for t > 0 LK(t) :=
R +∞
0 e−tuK(u)du. When K is the Gamma kernel Kb,α,ρ(t) := be−ρt tα−1
Γ(α) · 1(0,∞)(t), for b > 0, α > 0 and
ρ > 0, then by introducing v = u(t + ρ), we have
LKb,α,ρ (t) =
Z∞
0
be−(t+ρ)u uα−1
Γ(α) du = b(t + ρ)−α
Γ(α)
Z∞
0
e−vvα−1dv = b(t + ρ)−α.
Moreover, one checks that these kernels also satisfy (2.3) and (2.4) for α > 1/2 (with θT = (α − 1
2 ) ∧ 1)
and trivially (2.8). For simplification, assume that b = 1. It follows from the easy identity Kα,ρ ∗ Kα′,ρ = Kα+α′,ρ and the Neumann series expansion provided in equation (2.7) that the resolvent reads:
Rα,ρ,λ(t) = (1 ∗ δ0)(t) +
X
k≥1
(−1)kλk(1 ∗ K(k∗)
α,ρ ) = 1R+ (t) +
X
k≥1
(−1)k λk
Zt
0
e−ρsskα−1
Γ(kα) ds. (2.10)
Hence, if λ > 0, we define the function fα,ρ,λ := −Rα,ρ,λ on (0, +∞) by:
fα,ρ,λ(t) = − d
dt Rα,ρ,λ(t) = −
X
k≥1
(−1)kλk e−ρttkα−1
Γ(kα) = λe−ρttα−1 X
k≥0
(−1)kλk tαk
Γ(α(k + 1)) . (2.11)
2.3 Application to the Wiener-Hopf equation
Proposition 2.4 (Wiener-Hopf and Resolvent equations). Let g, h : R+ → R be two locally bounded Borel function, let K ∈ L1
loc(LebR+) and let λ ∈ R. Assume that the λ-resolvent Rλ of K is differentiable
on (0, +∞) with a derivative R′
λ ∈ L1
loc(LebR+), that both Rλ and R′
λ admit a finite Laplace transform on R+ and lim
u→+∞ e−tuRλ(u) = 0 for every t > 0. Then,
(a) The Wiener-Hopf equation ∀ t ≥ 0, x(t) = g(t)−λ R t
0 K(t−s)x(s)ds (also reading x = g−λK ∗x) has a solution given by:
∀ t ≥ 0, x(t) = g(t) + R t
0 R′
λ(t − s)g(s)ds or equivalently, x = g − fλ ∗ g,
where fλ = −R′
λ. This solution is uniquely defined on R+ up to dt-a.e. equality.
6

(b) The integral equation ∀ t ≥ 0, x(t) = h(t)−R t
0 R′
λ(t−s)x(s)ds where R′
λ = −fλ (also reading
x = h − R′
λ ∗ x) has a solution given by:
∀ t ≥ 0, x(t) = h(t) + λ R t
0 K(t − s)h(s)ds or equivalently, x = h + λK ∗ h.
This solution is uniquely defined on R+ up to dt-a.e. equality.
In Appendix B, we provide a proof of this classical result for the reader’s convenience.
3 Investigating stationarity of a scaled stochastic Volterra Integral
equation
From now we focus on the special case of a scaled stochastic Volterra equation associated to a convolutive kernel K : R+ → R+ satisfying (2.3) and (2.4):
Xt = X0φ(t) +
Zt
0
K(t − s)(μ(s) − λXs)ds +
Zt
0
K(t − s)σ(s, Xs)dWs, X0 ⊥⊥ W. (3.12)
where λ > 0, μ : T+ → R is a bounded Borel function (hence having a well-defined finite Laplace transform on (0, +∞)) and σ : T+ × R → R is Lipschitz continuous in x, locally uniformly in t ∈ T+. Note that the drift b(t, x) = μ(t) − λx is clearly Lipschitz continuous in x, uniformly in t ∈ T+. Then,
Equation (3.12) has a unique solution (Xt)t≥0 adapted to F X0,W
t , starting from X0 ∈ Lp(P), p > 0. This follows by applying the existence Theorem of [51, 30]to each time interval [0, T ], T ∈ N, and gluing the solutions together, utilizing the uniform linear growth of the drift and σ in time. Note that under our assumptions, if p > 0 and E[|X0|p] < +∞, then E[supt∈[0,T ] |Xt|p] < CT (1 +
∥φ∥p
T E[|X0|p]) < +∞ for every T > 0 (see [30, Theorem 1.1]). Combined with |σ(t, x)| ≤ C′
T (1 + |x|) for
t ∈ [0, T ], this implies E[supt∈[0,T ] |σ(t, Xt)|p] < C′
T (1 + ∥φ∥p
T E[|X0|p]) < +∞ for every T > 0, enabling
the unrestricted use of both regular and stochastic 3 Fubini’s theorems. Sufficient conditions for interchanging the order of ordinary integration (with respect to a finite measure) and stochastic integration (with respect to a square integrable martingale) are provided in [46, Thm. 1], and further details can be found in [39, Thm. IV.65].(see also [48, Theorem 2.6], [47, Theorem 2.6])
We will always work under the following assumption.
Assumption 3.1 (λ-resolvent Rλ of the kernel). Throughout the paper, we assume that the λ-resolvent Rλ of the kernel K satisfies the following for every λ > 0:
(K)

  
  
(i) Rλ(t) is differentiable on R+, Rλ(0) = 1 and limt→+∞ Rλ(t) = a ∈ [0, 1[, (ii) fλ ∈ L2
loc(R+, Leb1), where we set fλ := −R′
λ for t > 0, Lfλ(t) ̸= 0 dt − a.e.,
(iii) φ ∈ L1
R+(Leb1), is a continuous function satisfying limt→∞ φ(t) = φ∞, with aφ∞ < 1,
(iv) μ is a C1-function such that ∥μ∥sup < ∞ and limt→+∞ μ(t) = μ∞ ∈ R.
(3.13)
Under assumptions K (i) and (ii), fλ is a (1 − a)-sum measure, i.e., R +∞
0 fλ(s) ds = 1 − a. In fact,
R +∞
0 fλ(s) ds = [1 − Rλ(s)]s=+∞
s=0 = − lims→+∞ Rλ(s) + Rλ(0) = 1 − a
Lemma 3.1. Assume that assumption (K) (ii) holds, then limt→+∞
Rt
0 fλ(t − s)μ(s)ds = μ∞(1 − a) and limt→+∞ φ(t) − (fλ ∗ φ)(t) = φ∞ a.
For clarity and conciseness, the proof of the above Lemma is postponed to Appendix B, where the main technical results are presented.
3. Interchangeability of Lebesgue and stochastic integration.
7

Proposition 3.2 (Wiener-Hopf transform). Let λ > 0 and let μ : R → R be a bounded Borel function. Assume the kernel K satisfies the above assumptions (K), (2.3) and (2.4) from Assumption 2.2 and its λ-resolvent Rλ is well-defined on (0, +∞). Then, the solution (Xt)t≥0 of the Volterra equation (3.12) also satisfies:
Xt = X0 φ(t) −
Zt
0
fλ(t − s)φ(s) ds + 1
λ
Zt
0
fλ(t − s)μ(s) ds + 1
λ
Zt
0
fλ(t − s)σ(s, Xs) dWs. (3.14)
Conversely, any process satisfying (3.14) also satisfies the original Volterra equation (3.12). Thus, the two formulations are equivalent.
Proof. Equation (3.12) can be interpreted pathwise as a Wiener-Hopf equation with x(t) = Xt(ω) and
g(t) = X0(ω)φ(t) + (μ ∗ K)t + K W∗ σ(., X·(ω))
t
.
This leads to the following expression for Xt:
Xt = g(s) +
Zt
0
R′
λ(t − s)g(s) ds = X0φ(t) + (μ ∗ K)t + K W∗ σ(., X.) t
+
Zt
0
R′
λ(t − s)
h
X0φ(s) + (μ ∗ K)s + K W∗ σ(., X.) s
i
ds = X0φ(t) + (μ ∗ K)t + K W∗ σ(., X·)
t
+ X0
Zt
0
R′
λ(t − s)φ(s) ds +
Zt
0
R′
λ(t − s)(μ ∗ K)s ds
| {z }
(a)
+
Zt
0
R′
λ(t − s) K W∗ σ(., X·)
s
ds
| {z }
(b)
.
Using commutativity and associativity (via regular Fubini’s theorem) of convolution, we obtain for (a):
(a) = −fλ ∗ (μ ∗ K)t = − ((fλ ∗ K) ∗ μ)t . (3.15)
Differentiating Equation (2.6) yields the identity −fλ ∗ K = 1
λ fλ − K, which, upon substitution into (3.15), leads to the following expression in (3.16) for term (a). For term (b), owing to stochastic Fubini’s theorem, equation (2.9) provides the below expression in (3.16).
(a) = 1
λ (fλ ∗ μ)t − (K ∗ μ)t, (b) = 1
λ fλ
W∗ σ(·, X·)
t
− K W∗ σ(·, X·)
t
. (3.16)
Substituting (3.16) into (3.12), finally yields
Xt = X0(φ(t) − (fλ ∗ φ)t) + 1
λ (fλ ∗ μ)t + 1
λ fλ
W∗ σ(·, X·)
t
,
The controverse is obtained by solving the corresponding Wiener-Hopf equation. We convolve both sides of Equation (3.14) with the kernel K, using regular and stochastic Fubini’s theorem. Details are left to the reader.
Remark 3.3. 1. Notably, in the Markovian case, the Wiener–Hopf equation amounts to applying Itoˆ’s lemma to the transformed process eλtXt. In fact, if K(t) = 1 in the volterra equation, then Rλ(t) = e−λt and fλ(t) = λe−λt, so that the above computation corresponds to Itˆo’ s Lemma applied to eλtXt. 2. Note that if the solution (Xt)t≥0 is stationary 4, and X0 ∈ L2(P), then both the mean and variance of Xt are constant functions of t. Furthermore, the expectations of any function of Xt that grows at-
 most quadratically (see see (2.5)) also remain constant. Typically, such is the case of x 7→ x, x 7→ x2.
4. In the sense that the shifted processes (Xt+u)u≥0 and (Xu)u≥0 have the same distribution when viewed on the canonical space C(R+, R).
8

3.1 Towards stationarity of First Moments.
Before investigating the stationary regime of the “scaled” stochastic Volterra equation (3.12), we first determine under which conditions this equation has a constant first moments.
3.1.1 Stationarity of the Mean
We begin by identifying the conditions under which the Volterra Equation (3.12) exhibits a constant mean; that is, when E[Xt] = E[X0] for all t ≥ 0, assuming that X0 ∈ L2(P). We know that:
E
Rt
0 fλ(t − s)σ(s, Xs)dWs
2
=
Rt
0 f2
λ(t − s)E[|σ(s, Xs)|2] ds ≤ C(1 + ∥φ∥2
T E[|X0|2]) R t
0 f2
λ(u) du < +∞,
which implies E
h
Rt
0 fλ(t − s)σ(s, Xs)dWs
i
= 0. Thus, we have
∀t ≥ 0, E[Xt] = (φ(t) − (fλ ∗ φ)t)E[X0] + 1
λ (fλ ∗ μ)t. (3.17)
Thus, E[Xt] is constant if and only if the following condition holds:
∀t ≥ 0, E[X0] 1 − φ(t) + (fλ ∗ φ)t = 1
λ
Zt
0
fλ(t − s) μ(s) ds. (3.18)
Proposition 3.4 (Stationarity of the first moment). Let (Xt)t≥0 be a solution to the scaled Volterra equation (3.12) starting from X0 ∈ L1(Ω, F , P), with λ > 0 and μ∞ ∈ R. Then the Volterra process (Xt)t≥0 has constant first moment, if and only if
E[X0] = 1 − a
1 − aφ∞
μ∞
λ := x∞ and ∀ t ≥ 0, φ(t) = 1 − λ
Zt
0
K(t − s) μ(s)
λx∞
− 1 ds. (3.19)
so that the equation reads:
Xt = X0 − 1
λx∞
X0 − x∞
Zt
0
fλ(t − s)μ(s)ds + 1
λ
Zt
0
fλ(t − s)ς(s)σ(Xs)dWs. (3.20)
Proof. Case 1 E[X0] = 0: In this case, equation (3.18) reads: (fλ ∗ μ)t = 0. By taking the limit
in both side and owing to Lemma 3.1, we have μ∞ = 0. Taking the Laplace transform and owing to assumption K(ii), we μ(t) = 0 dt − a.e. and since μ is C1 owing to K(iv), we have μ ≡ 0. In this case, from equation (3.17), we deduce that ∀t ≥ 0, E[Xt] = E[X0] = 0.
Case 2 E[X0] ̸= 0: In this case, equation (3.18) reads: φ(t) − (fλ ∗ φ)(t) = 1 − 1
λ (fλ ∗ μ
E[X0] )t. We may
read the above equation as a Wiener-Hopf equation with x(t) = φ(t) and h(t) = 1 − 1
λ (fλ ∗ μ
E[X0] )t.
Then, applying the claim (b) of Proposition 2.4, we get: φ(t) = h(t) + λ(K ∗ h)t. That is:
φ(t) = 1 − (fλ ∗ μ
λE[X0] )t + λ(K ∗ 1)t − (K ∗ fλ ∗ μ
E[X0] )t = 1 − (fλ + λK ∗ fλ) ∗ μ
λE[X0] t
+ λ(K ∗ 1)t
(2=.9) 1 − (K ∗ μ
E[X0] )t + λ(K ∗ 1)t = 1 − λ
Zt
0
K(t − s) μ(s)
λE[X0] − 1 ds.
Moreover, by taking the limit in both side of the equality (3.18), we have:
E[X0](1 − aφ∞) := limt→+∞ E[X0] 1 − (φ(t) − (fλ ∗ φ)t) = limt→+∞ 1
λ (fλ ∗ μ)t =: μ∞
λ (1 − a)
owing to Lemma 3.1 so that, E[X0] = 1−a
1−aφ∞
μ∞
λ := x∞. Therefore, φ(t) = 1 − λ R t
0 K(t −
s) μ(s)
λx∞ − 1 ds and E[X0] = x∞. Conversely, as φ(t) − (fλ ∗ φ)(t) = 1 − 1
λ (fλ ∗ μ
E[X0] )t, equation (3.17)
gives:
9

∀t ≥ 0, E[Xt] = x∞ φ(t) − (fλ ∗ φ)t + 1
λ (fλ ∗ μ)t = x∞
Thus a necessary and sufficient condition for constant mean is:
E[X0] = x∞, φ(t) − (fλ ∗ φ)(t) = 1 − (fλ ∗ μ)(t)
λx∞
i.e. φ(t) = 1 − λ
Zt
0
K(t − s) μ(s)
λx∞
− 1 ds. (3.21)
Then Equation (3.14) can be rewritten as (3.20) We can easily check that φ(0) = 1. However, if
φ(t) ≡ Cste ≡ 1, (φ∞ = 1), then by (3.21), we have R t
0 K(t − s) μ(s)
λx∞ − 1 ds ≡ 0 ∀t ≥ 0, which
reduces to the Laplace transform equation LK · L μ(·)
λx∞ −1 ≡ 0. Since LK (t) > 0 ∀t ≥ 0 as K > 0, we have
L μ(·)
λx∞ −1 ≡ 0 i.e. μ(·)
λx∞ − 1 ≡ 0 i.e. ∀t ≥ 0, μ(t) = Cste = μ∞. Consequently, the mean is stationary, with
the following conditions: φ(t) = 1 almost surely, μ(t) = μ∞ almost surely, E[X0] = μ∞
λ.
Conversely, these conditions guarantee that the mean of Xt is constant over time and we recover the case studied in [36]. In the following, we will assume the more general case: (3.21) □
3.1.2 Towards stationarity of the variance
We deduce from the beginning of the section( 3) that, the non-negative function defined by t 7−→ Ξ2(t) := E σ2(t, Xt), t ≥ 0.
is locally bounded on R+ since σ has at most linear growth in space, locally uniformly in t ≥ 0. To take advantage of this formula, we need to assume that a priori Ξ ∈ L2
loc(R+, Leb1). First noting that by assuming constant mean as in the above section, i.e. ∀ t ≥ 0, E Xt = E X0 = x∞, equation (3.14) reads:
Xt − x∞ = X0 − x∞ (φ − fλ ∗ φ)(t) + 1
λ
Rt
0 fλ(t − s)σ(s, Xs) dWs.
By Itˆo’s isomorphism and Fubini’s Theorem
Var
Zt
0
fλ(t − s)σ(s, Xs) dWs = E
hZ t
0
fλ(t − s)σ(s, Xs) dWs
i2
=
Zt
0
fλ(t − s)2Ξ2(s)ds = (f 2
λ ∗ Ξ2)(t).
Then, it follows from the above equation that: ∀ t ≥ 0, by setting v0 = Var(X0), we have:
Var(Xt) = E
h
(Xt−x∞)2i
=E
h
(X0−x∞)2i
(φ−fλ∗φ)2(t)+ 1
λ2
Zt
0
fλ(t−s)2Ξ2(s)ds = v0(φ−fλ∗φ)2(t)+ 1
λ2 (f 2
λ ∗Ξ2 )(t)
i.e. ∀ t ≥ 0, Var(Xt) = v0(φ − fλ ∗ φ)2(t) + 1
λ2 (f 2
λ ∗ Ξ2)(t). (3.22)
Examples. The case of equation (3.20) reads easily owing to (φ − fλ ∗ φ)(t) = 1 − (fλ∗μ)t
λE[X0] = 1 − (fλ∗μ)t
λx∞
∀ t ≥ 0, Var(Xt) = v0 1 − (fλ∗μ)t
λx∞
2
+1
λ2 (f 2
λ ∗ Ξ2)(t).
Now, assume a time homogenous or autonomous volatility coefficient, i.e. ∀ (t, x) ∈ T×R, σ(t, x) = σ(x). As discussed in Remark 3.3 (2), if the solution (Xt)t≥0 is stationary and X0 ∈ L2(P) then: ∀ t ≥ 0, E Xt = cste = x∞, Var(Xt) = cste = v0 ≥ 0 and σ ̄2(t) := E σ2(Xt) = cste := σ ̄2 ≥ 0. so that from equation (3.22) together with the fact that, here Ξ2 = σ ̄2, we have:
∀ t ≥ 0, v0 = Var(Xt) = v0(φ − fλ ∗ φ)2(t) + 1
λ2 (f 2
λ ∗ σ ̄2)(t) = v0(φ − fλ ∗ φ)2(t) + σ ̄2
λ2
Rt
0 f2
λ (s)ds
or, equivalently
∀ t ≥ 0, v0 1 − (φ − fλ ∗ φ)2(t) = σ ̄2
λ2
Zt
0
f2
λ(s)ds. (3.23)
Consequently,
10

(i) If σ ̄2 = 0, we get v0 = 0 since limt→+∞(φ − fλ ∗ φ)(t) = aφ∞ < 1 ⇒ (φ − fλ ∗ φ)(t) ̸= 1 (at least for t large enough). As a consequence, Var(Xt) = 0 for every t ≥ 0. But, we know that E Xt = E X0 = x∞, it follows that Xt = x∞ P-a.s.. (ii) If σ ̄ > 0, using equation (3.21) and differentiating this equality implies, owing to K (iv) and Lemma 3.9 (2):
κ
λx∞ 1 − (fλ∗μ)t
λx∞ (μ(0)fλ(t) + (fλ ∗ μ′)t) = f 2
λ(t) where κ = 2 λ2v0
σ ̄2 .
Thus the kernel K must be the function such that its Laplace transform is given (from
equation (2.6)) by LK(t) = 1
λ
1
tLRλ (t) − 1 where fλ := R′
λ is a solution (if exists any) of the
above functional equation. However, in the particular case φ ≡ 1 i.e. ∀t ≥ 0, μ(t) = μ∞, a.s., as shown in [36], the kernel K is necessary constant, in which case (Xt)t≥0 is a (Markov) Brownian diffusion process with constant mean and variance, thus true Volterra equations with non constant kernels are never stationary.
From now on, we will assume that the volatility coefficient σ(t, x) is time-dependent or inhomogenous defined by:
∀ (t, x) ∈ T+ × R, σ(t, x) = ς(t)σ(x) ς(t), σ(x) > 0.
where ς is a (locally) bounded Borel function to be specified later. We assume that the kernel K satisfies equations (2.3) and (2.4) of Assumption 2.2 and σ is Lipschitz continuous. As ς is a (locally) bounded Borel function, the scaled Volterra equation (3.12) has a unique (F X0,W
t )t>0-adapted pathwise
continuous solution starting from X0 ∈ L2(P) independent of W (still owing to [51, Theorem 3.3.] Still as a consequence of Remark 3.3 (2), if the solution (Xt)t≥0 of the Volterra equation (3.12) starting by X0 ∈ L2(P) is stationary, then: ∀ t ≥ 0, E Xt = cste = x∞, Var(Xt) = cste = v0 ≥ 0 and σ ̄2(t) := E σ2(Xt) = cste := σ ̄02 ≥ 0. The theorem below shows what are the consequences of these three constraints in this settings.
Theorem 3.5 (Time-dependent or inhomogenous diffusion coefficient σ). Let σ(t, x) = ς(t)σ(x) in the equation (3.12), and assume that X0 ∈ L2(P) with E[X0] = x∞. Suppose the following conditions hold for all t ≥ 0: E[Xt] = x∞, Var(Xt) = v0 ≥ 0, and σ ̄2(t) = E[Xt] = σ ̄02 ≥ 0.
Then, a necessary condition for these relations to be satisfied is that the triplet (v0, σ ̄02, ς(t)) satisfies the following functional equation :
(Eλ,c) : ∀ t ≥ 0, cλ2 1−(φ−fλ ∗φ)2(t) = (f 2
λ ∗ς2)(t) where c = v0
σ ̄02
and thus ς = ςλ,c. (3.24)
Remark With equation (3.21), (Eλ,c) in (3.24) can also be re-written as follows:
(Eλ,c) : ∀ t ≥ 0, cλ2 1 − 1 − (fλ∗μ)t
λx∞
2
= (f 2
λ ∗ ς2)(t) where c = v0
σ ̄2
0
and thus ς = ςλ,c.
Proof of Theorem 3.5. From Equation (3.22) with Ξ2 = ς2σ ̄2 and the assumption of the theorem :
∀ t ≥ 0, v0 = Var(Xt) = v0(φ − fλ ∗ φ)2(t) + 1
λ2 (f 2
λ ∗ σ ̄2ς2)(t) = v0(φ − fλ ∗ φ)2(t) + σ ̄2
λ2 (f 2
λ ∗ ς2)(t) or, equivalently
∀ t ≥ 0, v0 1 − (φ − fλ ∗ φ)2(t) = σ ̄2
λ2 (f 2
λ ∗ ς2)(t).
3.2 Stabilizer and Fake Stationary Regimes
Definition 3.6 (Stationary of Order p ≥ 1 and Fake stationary regime of type I and II (see. [36])). .
1. The process (Xt)t≥0 starting from X0 ∈ Lp(P) for p ≥ 1, exhibit a stationary regime of order p if: ∀ t ≥ 0, ∀ k ∈ {1, ..., p}, E [Xtk] = cste = E [X0k].
11

2. The process (Xt)t≥0 starting from X0 ∈ L2(P), exhibit a fake stationary regime of type I if: ∀ t ≥ 0, E Xt = cste = x∞, Var(Xt) = cste = v0 ≥ 0 and σ ̄2(t) := E σ2(Xt) = cste := σ ̄2 ≥ 0.
This is equivalent to the definition (1) above, for p=2. In fact,( see proposition 3.1), there is an equivalence between the abose last two equalities, assuming the first one.
3. The process (Xt)t≥0 starting from X0 has a fake stationary regime of type II if (Xt)t≥0 has the
same marginal distribution, i.e., Xt
=d X0 for every t ≥ 0. 5
Definition 3.7. We will call the stabilizer (or corrector) of the scaled stochastic Volterra equation (3.12) a bounded Borel function ς = ςλ,c, which is a solution(if any) to the functional equation:
(Eλ,c) : ∀ t ≥ 0, cλ2 1−(φ−fλ ∗φ)2(t) = (f 2
λ ∗ς2)(t) where c = v0
σ ̄02
and thus ς = ςλ,c. (3.25)
Remark Note that (3.25) has a solution ςλ,c for some c > 0 if and only if it has a solution ςλ,1 when
c = 1, and ςλ,c = √cςλ,1. Hence, (Eλ,c) can be replaced by (Eλ,1) denoted (Eλ) for simplicity.
Assumption 3.8 (On the stabilizer). There exists a unique positive bounded Borel solution ςλ on ]0, +∞) of the equation (Eλ) : ∀ t > 0, λ2 1 − (φ − fλ ∗ φ)2(t) = (f 2
λ ∗ ς2)(t).
Lemma 3.9 (On equation (Eλ,c): Laplace Transform of (Eλ,c), Uniqueness and Limit of ς2
λ,c).
1. ∀ t > 0, t Lf2
λ (t)Lς2 (t) = −2cλ2L(φ−fλ∗φ)(φ−fλ∗φ)′ (t). (3.26)
2. (φ − fλ ∗ φ)′(t) = − 1
λx∞ (μ(0)fλ(t) + (fλ ∗ μ′)t) so that (φ − fλ ∗ φ)′(t) 0∼ − μ(0)
λx∞ fλ(t).
3. c being fixed, the equation (Eλ,c) in (3.25) has at most one solution ς2
λ,c in L1
loc(Leb1).
4. For fixed c, if ς2
λ,c ∈ L1
loc(Leb1) is the unique solution of (Eλ,c) in (3.25) and fλ ∈ L2(R+, Leb1), then
limt→+∞ ς2
λ,c(t) = cλ2(1−a2φ2∞)
∥fλ∥2
L2 (Leb1 )
.
Proposition 3.1 (Equivalence). Let λ > 0, let μ∞ ∈ R, and let σ : R → R be a Lipschitz continuous function. Let X0 ∈ L2(Ω, A, P) be such that E[X0] = x∞ and Var(X0) = v0 ≥ 0. Set σ ̄02 = E[σ2(X0)] > 0
and set c = v0
σ ̄2
0
∈ R+. Assume the kernel K satisfies (2.3), (2.4), f 2
λ has a finite Laplace transform on
(0, +∞), and (Eλ,c) is in force. Then, the unique strong solution starting from X0 of the scaled stochastic Volterra equation (3.12), where ςλ,c is a solution to (3.25) has constant mean and satisfies the following equivalence : (i) ∀t ≥ 0, Var(Xt) = Var(X0) = v0,
(ii) ∀t ≥ 0, E[σ2(Xt)] = E[σ2(X0)] = σ ̄02.
For clarity and conciseness, the proofs of Lemma 3.9 and Proposition 3.1 are deferred to Appendix B, where the main technical results are presented.
3.3 Examples of fake stationary regimes of type I and II
In this section we specify a family of scaled models where b(t, x) = μ(t) − λ x and the diffusion coefficient σ (to be specified later) satisfies the usual conditions (Lipschitz continuous) and is sufficiently regular or smooth, specifically, σ ∈ C3(R).
5. The distribution of X0 is not the invariant distribution of the equation since (Xt)t≥0 is not a stationary process.
12

Proposition 3.2 (Fake stationary regimes (types I and II) and asymptotics). Let X = (Xt)t≥0 be a one-dimensional solution of the stabilized Volterra equation (3.20) starting from any random variable X0 defined on (Ω, F , P), with λ > 0, μ∞ ∈ R, and a squared diffusion coefficient σ2 ∈ C2
K,Lip(R, R), where
ς = ςλ,c, assumed to be the unique continuous solution to Equation (3.24) for some c ∈ (0, 1
[σ]2
Lip
) (so that
condition (Eλ,c) is satisfied). If X0 ∈ L2(P) is such that E[X0] = x∞, given in (3.20) and Var(X0) = v0
1. Case σ(x) = σ is constant. The solution (Xt)t≥0 has a constant mean μ∞
λ and variance v0. — The process exhibits a fake stationary regime of type I i.e.
∀t ≥ 0, E[Xt] = x∞, Var(Xt) = v0 = cσ2.
— Furthermore, if X0 ∼ ν∗ := N (x∞, v0), this represents a fake stationary regime of type II, since in this case, Xt ∼ X0 for all t ≥ 0. ((Xt)t≥0 is a Gaussian process with a fake stationary regime of type II. anyway.). ν∗ is the 1-marginal distribution.
2. Case where σ is not constant. Assume that the mean, variance process (vt := E[(Xt − x∞)2])t≥0 and expected squared diffusion process (σ ̄2(t) := E[σ2(Xt)])t≥0 are constant, i.e. ∀t ≥ 0, E[Xt] = x∞, Var(Xt) = v0 = Cste, E[σ2(Xt)] = σ ̄02 = Cste.
Then, a necessary and sufficient condition for this Fake Stationarity Regime of Type I to hold is that there exists a function f not depending on t such that:
∀u ∈ [0, 1] , ∀t ≥ 0 E (Xt − x∞)3∂3
xσ2(x∞ + (Xt − x∞)u) = f (u). (3.27)
As soon as equation (3.27) holds, the solution (Xt)t≥0 to the Volterra equation (3.12) starting from X0 has a fake stationary regime of type I in the sense i.e. for all t ≥ 0,
E[Xt] = x∞, Var(Xt) = v0 = c(σ2(x∞) + r∞)
1 − cκ , and E[σ2(Xt)] = σ ̄2
0 = (σ2(x∞) + r∞)
1 − cκ . (3.28)
where κ := 1
2 ∂x2σ2(x∞) is the curvature of σ2 and r∞ := R 1
0
(1−u)2
2 f (u) du provided κc ̸= 1.
Moreover if limt→+∞ Rλ(t) = 0 (i.e. a = 0) or if limt→+∞ φ(t) = 0 (i.e. φ∞ = 0), as a consequence of the confluence properties in Proposition4.4, for any starting value X0 ∈ L2(P), E[Xt] → x∞, and Var(Xt) → v0 as t → +∞.
Remark. If K ≡ 1, i.e. the solution (Xt)t≥0 to (3.12) is a (Markov) SDE, and if it admits an invariant
distribution (see e.g. [37]) νσ(dx) = πσ(x) λ1(dx), then starting from X0
d= νσ yields a fake stationary regime of type II and, in particular, of type I. In this case, for all t ≥ 0, equation (3.27) corresponds to the expectation under the invariant distribution, i.e. Eπσ [·], and thus the function f does not depend on t. Proof. Assume there exists at least a weak solution on the whole non-negative real line of the Stochastic Voltera equation with volatility term σ(t, x) = ςλ,c(t)σ(x) starting from any X0 ∈ L2(P) such that E[X0] = x∞ and V ar[X0] = v0. The first claim (-
1) is obvious once noted that (Xt)t≥0 is a Gaussian process (and [σ]Lip = 0). The last claim is a straightforward consequence of the confluence property in
Proposition 4.4. We know that: E Xt = E X0 − 1
λx∞ E X0 − x∞
Rt
0 fλ(t − s)μ(s)ds.
Step 1. (Conditions for Fake stationary Regime of type I.) Using the second-Order Taylor Expansion
of σ2 around x∞ with Integral Remainder, we have:
σ2(Xt) = σ2(x∞) + ∂xσ2(x∞)Yt + ∂x2σ2(x∞)
2 Y2
t+
Z1
0
(1 − u)2
2 Y3
t ∂3
xσ2 (x∞ + uYt) du. (3.29)
where Yt := Xt − x∞ for σ2 ∈ C3(R), and the change of variable u → u − x∞ in the integral term. Now, taking the expectation and invoking the standard Fubini lemma, we obtain:
σ ̄(t)2 := E[σ2(Xt)] = σ2 (x∞) + κ Var(Xt) + rt, with rt =
Z1
0
(1 − u)2
2 E Y3
t ∂3
xσ2 (x∞ + uYt) du. (3.30)
13

By the equivalence property, the Fake Stationarity Regime of Type I holds whenever σ ̄(t) is constant in which case Var(Xt) remains constant as well (see Proposition 3.1). It is thus necessary and sufficient that rt be constant (denoted r∞) or equivalently, a necessary and sufficient condition is that E Yt3∂x3σ2(x∞ + Ytu) is independent of t for any fixed u ∈ [0, 1] i.e. Equation (3.28) holds.
Step 2. (Fake stationary Regime of type I. If X0 ∈ L1(P) is such that (3.19) holds, then from equation (3.20) we have constant mean for every t ≥ 0 i.e. E Xt = x∞ Assume that the condition cκ ̸= 1 is satisfied and as for the variance, from equation (3.22), we have: ∀ t ≥ 0, Var(Xt) = Var(X0)(φ − fλ ∗ φ)2(t) + 1
λ2 f 2
λ ∗ ς2 E σ2(X·) t Which become, with equation (3.30) in mind:
Var(Xt) = Var(X0)(φ−fλ∗φ)2(t)+ 1
λ2 (f 2
λ∗(ςσ ̄)2)t = Var(X0)(φ−fλ∗φ)2(t)+ 1
λ2 (f 2
λ ∗(ς 2 (σ2 (x∞ )+κVar(X· )+rt )))t .
(3.31) Now, assuming constant variance, Var(Xt) = v0 for every t ≥ 0, equation (3.27) holds and equation 3.30 becomes: σ ̄(t)2 := E[σ2(Xt)] = σ2(x∞) + κVar(Xt) + r∞ = σ2(x∞) + κv0 + r∞ =: σ ̄02. And then, the equation (3.31) above becomes ( where in the second line, we take advantage of the identity (3.25) satisfied by ς = ςλ,c so that (Eλ,c) in force),
∀ t ≥ 0, v0 = Var(Xt) = Var(X0)(φ − fλ ∗ φ)2(t) + σ ̄02
λ2 (f 2
λ ∗ ς2)(t)
= v0(φ − fλ ∗ φ)2(t) + (σ2(x∞) + κv0 + r∞)c(1 − (φ − fλ ∗ φ)2(t))
Which also reads: v0(1 − (φ − fλ ∗ φ)2(t)) = c(σ2(x∞) + κv0 + r∞)(1 − (φ − fλ ∗ φ)2(t)), t ≥ 0 i.e. the
variance becomes v0 = c(σ2(x∞)+r∞)
1−cκ > 0 which is clearly solution to the equation. Conversely one checks that this constant value for the variance solves the above equation. Let us prove that it is the only one. Assume that there exist two solutions to Equation (3.31) starting from a unique initial value Var(X0) = v0, and let x ∈ C(R+, R) represent the discrepancy over time between those solutions. By the linearity of Equation (3.31), it suffices to show that the equation in x ∈ C(R+, R)
x(t) = κ
λ2 f 2
λ ∗ (ς2. x) t, x(0) = 0
only has the null function as solution. If x solves the above equation, then
|x(t)| ≤ κ
λ2 (f 2
λ ∗ ς2)t sup
0≤s≤t
|x(s)| = κc|1 − (φ − fλ ∗ φ)2(t)| sup
0≤s≤t
|x(s)| ≤ cκ sup
0≤s≤t
|x(s)|.
where the last inequality comes from K(iii). If x ≡/ 0, there exist ε > 0 such that τε = inf{t : |x(t)| > ε} < +∞. By continuity of x it is clear that τε > 0 and |x(τε)| = sup0:≤s≤t |x(s)| = ε which is impossible since κc ̸= 1. Consequently x ≡ 0. We also have:
σ ̄02 = σ2(x∞) + κv0 + r∞ = σ2(x∞) + κ c(σ2(x∞)+r∞)
1−cκ + r∞ = σ2(x∞)+r∞
1−cκ .
Hence (Xt)t≥0 is a fake stationary regime of type I with the above mean and variance. □
Example 3.10 (Polynomial of degree 2). Consider as in [36] a squared trinomial diffusion coefficient:
σ(x) =
p
κ0 + κ1 x + κ2 x2 with κi ≥ 0, i = 0, 2, κ2
1 ≤ 4κ2κ0. (3.32)
• The above vol-vol term covers the rough Heston dynamics introduced in [17] (the volatility process Vt = Xt has the vol-vol term as in equation (3.32) with κ0 = κ2 = a = 0, while the volatility of the traded asset is driven by a different Brownian motion ).
14

• This type of vol-vol term also appears in the quadratic rough volatility dynamic introduced in [20] (Vt = σ2(Xt)). In that model, the asset and its volatility are driven by the same Brownian motion, aiming to jointly calibrate the the S&P 500 and VIX smile, accounting for the so-called Zumbach effect, which links the evolution of the asset (here, an index) with its volatility.
In the next proposition, we assume that when κ2 = 0, the associated Volterra Equation has at least a weak solution (see [22]).
Proposition 3.11. Under the same assumptions as Proposition 3.2, We have the following claims:
1. If the diffusion coefficient σ is degenerated in the sense that σ(x∞) = 0, (in particular σ ̄02 = 0 and v0 = 0) then the solution Xt = x∞ P-a.s. represents a fake stationary regime (of type I).
2. If σ2 is not constant and not degenerated given by (3.32) i.e. σ2(x) ∈ Pol2(R), the solution (Xt)t≥0 to the Volterra equation (3.12) has a fake stationary regime of type I, in the sense that
∀ t ≥ 0, E[Xt] = x∞, Var(Xt) = v0 = cσ2(x∞)
1−cκ2 , and E[σ2(Xt)] = σ ̄02 = σ2(x∞)
1−cκ2 .
Moreover if a = 0 of if φ∞ = 0, for any starting value X0 ∈ L2(P),
E[Xt] → x∞, and Var(Xt) → cσ2(x∞)
1−cκ2 as t → +∞.
Proof. (Applicability of equation (3.27)).
1. First, in the degenerate setting σ(x∞) = 0, one has σ ̄02 = E[σ2(X0)] = 0, we get v0 = 0 owing to equation (3.25) since limt→+∞(φ − fλ ∗ φ)(t) = aφ∞ < 1 ⇒ φ(t) − (fλ ∗ φ)(t) ̸= 1 (at least for t large enough). As a consequence, Var(Xt) = 0 for every t ≥ 0. But, we know that E Xt = E X0 = x∞, it follows that Xt = x∞ P-a.s. and ∀t ≥ 0, L(Yt)(dy) = δ0(dy) so that ∀t ≥ 0, E Yt3 ∂x3σ2 (x∞ + uYt) = R
R y3 ∂x3σ2 (x∞ + uy) L(Yt)(dy) = 0 and r∞ = 0.
2. Secondly, if ∂x3σ2(v) = 0, ∀v ∈ R, then the integral reminder in (3.29) necessarily vanishes. This corresponds to the trinomial setting, which has already been extensively studied in [36] and in
which case if κ2 > 0, [σ]Lip = √κ2, the curvature κ = κ2 and r∞ = 0 (since f ≡ 0 in (3.27)). 2
Practitioner’s corner: 1. The constraint c ∈ 0, 1
κ implies that we treat c as a free parameter, from
which we can deduce v0 and σ ̄02. 2. The presence of the stabilizer ςλ,c allows a better control of the
behaviour of the equation since it induces an L2-confluence and a stability of first two moments if needed. 3. Note that [σ]2
Lip = κ2 = κ so that, in practice, if we rather fix the value of v0, then c = v0
σ2(x∞)+v0κ
so that, σ being √κ-Lipschitz continuous, one has cκ = v0κ
σ2(x∞)+v0κ < 1 provided σ2(x∞) > 0 which
ensures the L2-confluence of the paths of the solution (Proposition 4.4 further on).
4 Towards Long run behaviour: asymptotics and confluence
Remark 4.1. Let μ∞ ∈ R, by assumption (2.2) (i), one has for every x ∈ R,
σ2(x) ≤ σ(x∞) + [σ]Lip|x − x∞|
2
≤ κ0 + κ2|x − x∞|2
where k0 = k0(ε) := (1 + ε)|σ(x∞)|2 and k2 = k2(ε) := (1 + 1
ε )[σ]2
Lip, owing to Young’s inequality
(a + b)2 ≤ (1 + ε)a2 + (1 + 1
ε )b2. Therefore, we can always assume that σ is sublinear i.e.:
(SLσ) : ∃k0 = k0(ε) ∈ R+, k2 = k2(ε) ∈ R+ such that ∀x ∈ R, |σ(x)|2 ≤ κ0 + κ2|x − x∞|2. (4.33)
4.1 Moments control.
Lemma 4.2 (Best constant in a BDG inequality (see Remark 2 in [11])). Let M be a continuous local martingale null at t = 0. Then, for every p ≥ 1,
√1p ∥Mt∥p ≤ 2∥⟨M ⟩1/2
t ∥p.
15

Proposition 4.3 (Moment control). Assume (2.2) (ii) and K (ii) hold. Let σ(t, x) := ς(t)σ(x) where ς = ςλ,c is a non-negative, continuous and bounded solution to (3.25) for some fixed λ, c > 0 (i.e.(Eλ) is in force). Let (Xt)t≥0 be the solutions to the Volterra equation (3.12) starting from any random variable X0.
(a) First two moments. Assume X0 ∈ L2(P) and c ∈ 0, 1
[σ]2
Lip
. Then, one has:
E Xt − x∞ ≤ |φ(t) − (fλ ∗ φ)(t)| E X0 − x∞ = 1 − (fλ ∗ μ
λx∞
)t E X0 − x∞ , t ≥ 0
sup
t≥0
|Xt − x∞|
2
≤
√c
1 − [σ]Lip
√c |σ(x∞)| ∨ |X0 − x∞|
2
< +∞.
(b) Lp-moments. Let p ∈ (2, +∞). If X0 ∈ Lp(P) and c is such that ρp := 4c p [σ]2
Lip < 1, then
sup
t≥0
|Xt − x∞|
p
≤ inf
ε∈(0, 1
ρp −1)
"
2
ppc(1 + ε)
1 − 2[σ]Lip
ppc(1 + ε) σ(x∞) 2
#
∨ (1 + 1/ε) 1
2 |X0 − x∞|
p
< +∞
The proof is postponed to Appendix B. It relies on techniques similar to those in [36], which extend the methods developed for the Markovian framework, as discussed extensively in [35, Chapter 7].
4.2 Lp-Confluence or Contraction Properties
Fix p > 0. Let (Xt)t≥0 and (Xt′)t≥0 be two solutions of the Volterra stochastic equation (3.12) with
initial conditions X0, X′0 ∈ Lp(P). According to assumption 2.2 (i), ∃ κ > 0 such that for every t ≥ 0,
|σ(Xs) − σ(X′
s)|2
p 2
≤ κ |Xs − X′
s|
2
p
. (4.34)
Proposition 4.4 (Lp-confluence). Assume assumption (2.2) (ii). Assume fλ ∈ L2(R+, Leb1), σ(t, x) := ς(t)σ(x) where ς = ςλ,c is a non-negative, continuous and bounded solution to (3.25) for some fixed λ, c > 0 (i.e. assumption 3.8 is in force) and σ : R → R is a Lipschitz continuous function. Let p > 0, for X0, X′0 ∈ Lp(P), we consider the solutions to Volterra equation (3.12) denoted (Xt)t≥0 and (Xt′)t≥0
starting from X0 and X′0 respectively. Let c ∈ 0, 1
κ , where κ is defined in 4.34, set ρp := c (CBDG
p )2 κ.
and assume that ρp < 1 − a2φ2∞. Then, one has:
(a) There exists a continuous non-negative function φλ,c,K,φ
∞,p =: φ∞,p : R+ → [0, 1
(1−√ρp)2 ], such
that φ∞(0) = 1
1−ρp , 0 ≤ limt→∞ φ∞,p(t) ≤ a2φ2∞
1−√ρp
√1−a2φ2∞
2 , only depending on λ, c, φ, and the
kernel K, such that :
∀t ≥ 0, E Xt − Xt′
p
≤ φ∞,p(t)E X0 − X′0
p
.
(b) This result can be written using the p-Wasserstein distance between marginals of X and X′:
∀t ≥ 0, Wp([Xt], [X′
t]) ≤ φ∞,p(t)1/2 Wp([X0], [X′
0]).
(c) In particular, whenever a = 0 or φ∞ = 0, the limit yields φ∞,p(t) → 0 and thus the process is contracting in Wp as t → ∞ i.e more generally finite-dimensional Wp-convergence of marginals.
Proof. By a Banach fixed point argument on the complete space (Cb([0, ∞), R), ∥ · ∥∞).
Fix p > 0. Let (Xt)t≥0 and (Xt′)t≥0 be two solutions of the same SVIE with initial conditions
X0, X′0 ∈ Lp(P). Set ∆t = Xt − Xt′ ∈ Lp(P) for every t ≥ 0. one writes owing to equation 3.14:
Xt − X′
t = φ(t) − (fλ ∗ φ)(t) X0 − X′
0 +1
λ
Zt
0
fλ(t − s)ς(s) σ(Xs) − σ(X′
s) dWs
16

Let δ ̄t = |∆t|
p
for convenience. Under our assumptions, t 7→ δ ̄t is continuous (see [30] ). Let CBDG
p >0
denote a BDG constant in Lp. Set ρp := c (CBDG
p )2 κ. Owing to the triangle inequality and applying the
BDG inequality to the (a priori) local martingale Mu = R u
0 fλ(t − s)ς(s)σ(Xs)dWs, 0 ≤ s ≤ t, (see [41, Proposition 4.3]) follow by the generalized Minkowski inequality, we get:
|Xt − X′
t|
p
≤ |X0 − X′
0|
p
φ(t) − (fλ ∗ φ)(t) + CBDG
p
λ f2
λ
d∗t ς2(·)|σ(Xs) − σ(X′
s)|2
t
1 2
p 2
≤ |X0 − X′
0|
p
φ(t) − (fλ ∗ φ)(t) + CBDG
p
λ
Zt
0
f2
λ(t − s)ς2(s) |σ(Xs) − σ(X′
s)|2 p
2
1 2
Fix ε > 0, using the elementary inequality (a + b)2 ≤ (1 + 1/ε)a2 + (1 + ε)b2 for ε ∈ (0, 1/ρp − 1) i.e. β := ρp(1 + ε) < 1, it follows owing to equation (4.34) that:
|Xt − X′
t|
2
p
≤ |X0 − X′
0|
2
p
φ(t) − (fλ ∗ φ)(t)
2
(1 + 1/ε) + ρp
cλ2 (1 + ε)
Zt
0
f2
λ(t − s)ς2(s) |Xs − X′
s|2
p
ds
which entails:
|∆t|
2
p
≤ |∆0|
2
p
φ(t) − (fλ ∗ φ)(t)
2
1+ 1
ε + (1 + ε) ρp
cλ2
Zt
0
f2
λ(t − s)ς2(s) |∆s|
2
p
ds. (4.35)
i.e. we obtain, for all t ≥ 0,
δ ̄2
t ≤ δ ̄2
0 φ(t) − (fλ ∗ φ)(t)
2
1+ 1
ε + ρp(1 + ε) 1
λ2c
Zt
0
f2
λ(t − s)ς2(s) δ ̄2
s ds. (4.36)
Step 1. Non-expansivity via a deterministic stopping-time argument: For the fixed ε > 0 such that β := ρp(1 + ε) < 1, let η > 0 such that 1 + 1
ε < ρp(1 + ε)(1 + η)2 and define the stopping time
τη := inf{t ≥ 0 : δ ̄t > (1 + η)δ ̄0}
(with the convention inf ∅ = +∞). If τη < ∞, then for s ≤ τη we have δ ̄s ≤ (1 + η)δ ̄0 and by continuity δ ̄τη = (1 + η)δ ̄0. Evaluating (4.36) at t = τη and bounding δ ̄s2 ≤ (1 + η)2δ ̄02 in the integral combined
with the identity f 2
λ ∗ ς2 = cλ2(1 − (φ − fλ ∗ φ)2) yields:
δ ̄2
τη ≤ δ ̄2
0 (φ − fλ ∗ φ)2(τη)(1 + 1
ε ) + (1 − (φ − fλ ∗ φ)2(τη))ρp(1 + ε)(1 + η)2
≤ δ2
0 (φ − fλ ∗ φ)2(τη) 1 + 1
ε − ρp(1 + ε)(1 + η)2 + ρp(1 + ε)(1 + η)2
< ρp(1 + ε)(1 + η)2δ ̄2
0 < (1 + η)2δ ̄2
0.
which leads to a contradiction. Whence τη = +∞ i.e., δ ̄s ≤ (1 + η)δ ̄0 for all s ≥ 0. This holds for every η > 0, implying the non-expansivity bound δ ̄t ≤ δ ̄0 for all t ≥ 0 when letting η ↓ 0.
Step 2. Iteration and the Volterra map: Substituting this (i.e. δ ̄t ≤ δ ̄0) into (4.35) combined with the stabilizer identity f 2
λ ∗ ς2 = cλ2(1 − (φ − fλ ∗ φ)2) gives, for all t > 0,
δ ̄2
t ≤ δ ̄2
0 φε
1,p(t), where φε
1,p(t) := 1 + 1
ε (φ − fλ ∗ φ)2(t) + ρp(1 + ε)(1 − (φ − fλ ∗ φ)2(t)).
Note that φε1,p(t) = ρp(1 + ε) + (φ − fλ ∗ φ)2(t)(1 + 1
ε − ρp(1 + ε)) satisfies:
φε
1,p(0) = 1 + 1
ε , φ1 is continuous, M1 := ∥φε
1,p∥∞ ≤ 1 + 1
ε + ρp(1 + ε)
17

Substituting this upper bound for δt2 (i.e. δ ̄t2 ≤ δ ̄02φε1,p(t)) into (4.35) yields
δ ̄2
t ≤ ̄ ̄δ2
0 φε
2,p(t), where φε
2,p(t) := 1 + 1
ε (φ − fλ ∗ φ)2(t) + ρp(1 + ε)
Zt
0
f2
λ(t − s)ς2(s)φε
1,p(s) ds
λ2c .
and inductively for k ≥ 2
δ ̄2
t ≤ ̄ ̄δ2
0 φε
k,p(t), where φε
k,p(t) := (φ − fλ ∗ φ)2(t) 1 + 1
ε + ρp(1 + ε) 1
λ2c
Zt
0
f2
λ(t − s)ς2(s) φε
k−1,p(s) ds.
(4.37) To obtain a uniform sup-bound, put Mk := ∥φε
k,p∥∞. From (4.37) and (φ − fλ ∗ φ)(t) ≤ 1, 1 − (φ − fλ ∗
φ)(t) ≤ 1, we get Mk ≤ 1 + 1
ε + βMk−1. Iterating yields (since β < 1):
Mk ≤ 1 + 1
ε
Pk−1
j=1 βj + βk−1M1 ≤ max(M1, 1+ 1
ε
1−β ) ≤ max(1 + 1
ε + β, 1+ 1
ε
1−β ) = 1+ 1
ε
1−β . Thus for every
k ≥ 1 and t ≥ 0 one has the uniform bound
0 ≤ φε
k,p(t) ≤ 1 + 1/ε
1 − ρp(1 + ε) := M ε
∗. (4.38)
Step 3. Define the operator T : Cb([0, ∞)) → Cb([0, ∞)) :
(T ψ)(t) := (φ − fλ ∗ φ)2(t) 1 + 1
ε + ρp(1 + ε) 1
λ2c
Zt
0
f2
λ(t − s)ς2(s) ψ(s) ds. (4.39)
and, for k ≥ 2, set φε
k,p = T φε
k−1,p. The operator T is linear in its last term and for any ψ1, ψ2 ∈ Cb,
∥T ψ1 − T ψ2∥∞ ≤ ρp(1 + ε) · sup
t≥0
1
λ2c
Zt
0
f2
λ(t − s)ς2(s) ds · ∥ψ1 − ψ2∥∞ = ρp(1 + ε)∥ψ1 − ψ2∥∞
because the convolution integral equals 1 − (φ − fλ ∗ φ)(t) ≤ 1. By assumption ρp(1 + ε) < 1, so T is a strict contraction in ∥ · ∥∞ with Lipschitz constant ρp(1 + ε) < 1 on the complete or Banach space Cb([0, ∞)) with the sup norm. The Banach fixed point theorem therefore provides a unique fixed point
φε∞,p ∈ Cb([0, ∞)) and, moreover, φε
k,p = T k−1φε1,p
∥·∥∞
−−−→
k→∞ φε∞,p.
In particular the convergence is uniform on [0, ∞) i.e. φε
k,p = T k−1φε1,p converges uniformly (on
[0, ∞)) to φε∞,p. For every t ≥ 0 the Lp-norm satisfies δ ̄t2 ≤ δ ̄02 φε∞,p(t).
Step 4. Limit equation and ε-dependent asymptotic bound: Passing to the limit in (4.37) yields that φε∞,p satisfies the Volterra or functional fixed-point equation
φε
∞,p(t) = (φ − fλ ∗ φ)2(t) 1 + 1
ε + ρp(1 + ε) 1
λ2c
Zt
0
f2
λ(t − s)ς2(s) φε
∞,p(s) ds. (4.40)
By the uniform bound in equation (4.38), φε∞,p is bounded and nonnegative on [0, ∞) i.e. ∀t ≥
0, 0 ≤ φε∞,p(t) ≤ 1+1/ε
1−ρp(1+ε) . Taking lim inft→+∞, lim supt→∞ in (4.40) and using (φ − fλ ∗ φ)2(t) → a2
and the stabilizer identity we obtain lε
∞,p, lε∞,p := lim inft→+∞ φε∞,p(t), lim supt→+∞ φε∞,p(t) ∈ [0, M∗ε].
Now, lε
∞,p, lε∞,p ∈ [0, M∗ε] implies that for any η > 0, there exists tη ∈ R+ such that for t ≥ tη,
lε
∞,p − η ≤ φε∞,p(t) ≤ lε∞,p + η. Then, we obtain on the first hand,
Zt
0
f2
λ(t − s)ς2(s)φε
∞,p(s) ds
λ2c ≤ 1
cλ2
Zt
tη
f2
λ(t − s)ς2(s)(lε
∞,p + η) ds + 1
cλ2
Z tη
0
f2
λ(t − s)ς2(s)φε
∞,p(s) ds
≤1
cλ2
Zt
tη
f2
λ(t − s)ς2(s)(lε
∞,p + η) ds + 1
cλ2 M ε
∗
Zt
t−tη
f2
λ(u)ς2(t − s) du.
18

where the second term on the right-hand side of the last inequality follows from the fact that φε∞,p(t−u) ≤
M∗ε for all u ≤ t ≤ tη and vanishes as t goes to infinity.
Since fλ ∈ L2(Leb1) and limt→+∞(φ − fλ ∗ φ)2(t) = a2φ2∞ both owing to Assumption 3.1, we conclude from equation (4.40) and the identity satisfied by ς:
lε
∞,p =: lim sup
t→+∞
φε
∞,p(t) ≤ (1+ 1
ε ) a2φ2
∞+ρp(1+ε)(lε
∞,p+η)(1−a2φ2
∞) η→0
=⇒ lε
∞,p ≤ (1 + 1
ε ) a2φ2∞
1 − ρp(1 + ε)(1 − a2φ2∞)
On the other hand, we also have:
Zt
0
f2
λ(t − s)ς2(s)φε
∞,p(s) ds
λ2c ≥ 1
cλ2
Zt
tη
f2
λ(t − s)ς2(s)(lε
∞,p − η) ds +
Zt
t−tη
f2
λ(u) ς2(t − u)φε
∞,p(t − u) du
cλ2
≥1
cλ2
Zt
tη
f2
λ(t − s)ς2(s)(lε
∞,p − η) ds.
Therefore, still with the fact that fλ ∈ L2(Leb1) and limt→+∞(φ − fλ ∗ φ)2(t) = a2, we obtain from equation (4.40) and the identity satisfied by ς:
lε
∞,p =: lim inf
t→+∞ φε
∞,p(t) ≥ (1+ 1
ε ) a2φ2
∞+ρp(1+ε)(lε
∞,p−η)(1−a2φ2
∞) η→0
=⇒ lε
∞,p ≥ (1 + 1
ε ) a2φ2∞
1 − ρp(1 + ε)(1 − a2φ2∞) .
Consequently, lε
∞,p = lε∞,p = (1+ 1
ε ) a2φ2∞
1−ρp(1+ε)(1−a2φ2∞) := L(ε). The minimizer of L(ε) in (0, 1/ρp − 1) is
ε∗ = 1
√ρp(1−a2φ2∞) − 1, which is admissible iff ρp < 1 − a2φ2∞. In that admissible case one obtains the
optimal asymptotic value: infε∈(0,1/ρp−1) L(ε) = lε∞∗,p = a2φ2∞
1−√ρp
√1−a2φ2∞
2.
Step 5. Passage to the ε-Free Control: Finally, optimizing φε∞,p over admissible ε gives the ε-free control i.e. passing to the infimum over admissible ε gives the claimed ε-free control with φ∞,p(t). δ ̄t2 ≤ δ ̄02 φ∞,p(t), φ∞,p(t) := infε∈(0,1/ρp−1) φε∞,p(t). Now, note that
∀t ≥ 0, 0 ≤ φ∞,p(t) := inf
ε∈(0,1/ρp−1)
φε
∞,p(t) ≤ inf
ε∈(0,1/ρp−1)
1 + 1/ε
1 − ρp(1 + ε) = M
ε= √1ρp −1
∗ =1
(1 − √ρp)2 .
Moreover, lim supt→∞ φ∞,p(t) = lim supt→∞ infε∈(0,1/ρp−1) φε∞,p(t) ≤ lim supt→∞ φε∞∗,p(t) = lε∞∗,p so that
limt→∞ φ∞,p(t) ≤ a2φ2∞
1−√ρp
√1−a2φ2∞
2 , with equality if the uniform convergence supε∈(0,1/ρp−1) φε∞,p(t) −
l(ε) −−−→
t→∞ 0 holds. Hence ∥Xt − Xt′∥p ≤ φ∞,p(t)1/2 ∥X0 − X′0∥p for every t ≥ 0, and therefore, by
coupling, for the p-Wasserstein distance between marginals,Wp([Xt], [Xt′]) ≤ φ∞,p(t)1/2 Wp([X0], [X′0]). In particular, if a = 0 the asymptotic bound above yields φ∞,p(t) → 0 and thus the process is contracting in Wp as t → ∞. This completes the proof. □
Remark. 1. The function φ∞,p quantifies the time decay of the Lp discrepancy between two solutions of the SVIE with different initial values. If ς is bounded (i.e. ∥ς2∥∞ < +∞ ) and both
κ < λ2
(C BDG
p )2 (1+ε∗) ∥ς2∥∞
R +∞
0 f2
λ(u) du and (φ − fλ ∗ φ) ∈ L2(Leb1), then one derives from equation (4.40)
and using Fubini-Tonelli’s theorem that:
Z +∞
0
φ∞,p(s) ds ≤
Z +∞
0
φε∞∗,p(s) ds ≤
λ2 1 + 1
ε∗
λ2 − (CBDG
p )2 κ(1 + ε∗)∥ς2∥∞∥fλ∥2
L2 (Leb1 )
Z +∞
0
(φ − fλ ∗ φ)2(t) dt < ∞.
2. L2-confluence: Under the assumption of Proposition 4.4 with c ∈ 0, 1
κ , ρ := cκ and X0, X′0 ∈ L2(P). By [21, Proposition 5.3] (which use Itoˆ’s Isometry and the first Dini Lemma), one has that the solutions to Volterra equation (3.12) denoted (Xt)t≥0 and (Xt′)t≥0 starting from X0 and X′0 respectively satisfies:
19

(a) There exists a continuous non-negative function φλ,c,K,φ
∞ =: φ∞ : R+ → [0, 1], such that
φ∞(0) = 1, limt→+∞ φ∞(t) = a2φ2∞
1−ρ(1−a2φ2∞) , only depending on λ, c, φ, and K, such that :
∀t ≥ 0, E Xt − X′
t
2
≤ φ∞(t)E X0 − X′
0
2
W2 ([X ′
t], [Xt]) ≤ φ∞(t)1/2W2([X′
0], [X0]).
(b) In particular, if a = 0 or φ∞ = 0 and X has a fake stationary regime of type I, EXt′ → x∞,
Var(Xt′) → v0 as t → +∞. And more generally finite-dimensional W2-convergence. Thus, the
process X′ mixes: as time increases, the random variable Xt′ progressively forgets its initial mean and variance and converges to those of the limiting fake stationary regime. While, if X has a fake stationary regime of type II, its marginal distribution is unique.
4.3 Asymptotics: Long run functional weak behaviour:
In the following, (C →) stands for functional weak convergence on C(R+, R) equipped with the topology of uniform convergence on compact sets. To establish relative compactness in (b) of the below theorem, in terms of functional W2-compactness (quadratic Wasserstein distance), we require that ∥ supt≥0 |Xt|∥p < +∞ for some p > 2.
Assumption 4.5 (Integrability and Uniform H ̈older continuity). Let λ, c > 0, and assume the kernel
K and its λ-resolvent Rλ satisfy
R +∞
0 f 2β
λ (u) du < +∞ for some β ≥ 1, so that fλ ∈ L2(Leb1),
and there exists θ ∈ (0, 1], and a real constant C < +∞ such that 6
maxi=1,2
h
R +∞
0 |fλ(u + δ ̄) − fλ(u)|i du
i1
i ≤ Cδ ̄θ.
Theorem 4.6. Let λ, c > 0, let μ∞ ∈ R, and let μ : R → R a bounded bornel funtion, σ : R → R be a Lipschitz continuous function satisfying equation (4.33) (SLσ). Assume Assumption 4.5 and Assumption 3.8 on Equation (Eλ) are in force. Let (Xt)t≥0 be the solution to the scaled Stochastic Volterra Integral Equation (3.12) starting from X0 ∈ Lp(P) for some suitable p.
(a) C-tightness of time-shifted processes. Assume
X0 ∈ Lp(P) and



p = 2 and c < 1
κ2 if (δ ∧ θ ∧ β−1
2β ) > 1
2,
p> 1
δ∧θ∧ β−1
2β
and c < 1
(C BDG
p )2κ2 if (δ ∧ θ ∧ β−1
2β ) ≤ 1
2 . (4.41)
Then, the family of shifted processes (Xt+u)u≥0 is C-tight, uniformly integrable, and square uniformly integrable for p > 2 as t → +∞. For any limiting distribution P on Ω0 := C(R+, R), the canonical
process Yt(ω) = ω(t) has a δ ∧ θ ∧ β−1
2β − 1
p − η -H ̈older pathwise continuous P -modification for
sufficiently small η > 0. That is, there exists a process X∞ with continuous sample paths such that (Xt+u)t≥0 ⇒ (Xt∞)t≥0 weakly in C(R+; R) as u → ∞.
Any limiting process X∞ satisfies ∀t ≥ 0, Xt∞ ∈ Lp(P) for each p ≥ 2 and its first moment is
given by E[Xt∞] = aφ∞E[X0] + (1 − a) μ∞
λ.
Moreover, if a = 0, the shifted processes of two solutions (Xt)t≥0 and (Xt′)t≥0 are L2-confluent, i.e. there exists a non-increasing function φ ̄∞ : R+ → [0, 1] with limt→+∞ φ ̄∞(t) = 0, and W2 [(Xt+t1 , . . . , Xt+tN )] , (Xt′+t1 , . . . , Xt′+tN ) → 0 as t → +∞.
6. Uniform Ho ̈lder continuity or Ho ̈lder regularity with exponent θ for the function fα,λ, ensuring controlled behavior as t and t + δ become arbitrarily close.
20

Hence, the functional weak limiting distributions of [Xt+·] and [Xt′+·] coincide, meaning that if
[Xtn+·] (C →) P for some subsequence tn → +∞, then [Xt′n+·] (C→)w P and vice versa.
(b) Functional weak long-run behavior. Assume furthermore that the solution (Xt)t≥0 of the volterra equation (3.12) has a fake stationary regime of type I, starting from a random variable X0 ∈ L2(P ) with
mean μ∞
λ and variance v0.Then for any limiting distribution X∞, E[Xt∞] = μ∞
λ while its autocovariance
function is, for t1, t2 ≥ 0, t1 ≤ t2, given by Cov(Xt1∞, Xt2∞) = Cfλ(t1, t2)
Cov(Xt+t1 , Xt+t2 ) t→→+∞ Cfλ (t1, t2) := a2φ2
∞Var(X0) + (1 − a2φ2∞)v0
R +∞
0 f2
λ (s)ds
Z +∞
0
fλ(t2 − t1 + u)fλ(u)du. (4.42)
Thus, under any limiting distribution P , the canonical process Y is a (weak) L2-stationary process 7 with mean x∞ and covariance function C ̄fλ(s, t), for s, t ≥ 0.
(c) Stationary Gaussian Case. If σ(x) = σ > 0 is constant and X0 has a Gaussian distribution,
(say X0 ∼ N (x∞, v0)), then (Xt)t≥0 satisfies Xt+·
(C )
−→ GP(fλ) as t → +∞, where GP(fλ) is the stationary Gaussian process with mean x∞ and covariance function Cfλ(·).
Remark: Be aware that at this stage, we do not have uniqueness of the limit distributions since they are not characterized by their mean and covariance functions, except in Gaussian setting.
5 Applications to Fractional Stochastic Volterra Integral equations
Let consider the below Fractional integration kernel where α = H + 1
2 , with H denoting the Hurst coefficient:
K(t) = Kα(t) = uα−1
Γ(α) 1R+(t), α > 0. (5.43)
This family of kernels corresponds to the fractional integrations of order α > 0 and satisfy (2.8), (2.3) and (2.4) for α > 1/2 (with θT = (α − 1
2 ) ∧ 1, see [42, 30]) among many others. It follows from the easy
identity Kα ∗ Kα′ = Kα+α′ , that Rα,λ(t) = P
k≥0(−1)k λktαk
Γ(αk+1) = Eα(−λtα) = eα(λ1/αt) t ≥ 0, where Eα denotes the standard Mittag-Leffler function and eα, the alternate Mittag-Leffler function.
Eα(t) =
X
k≥0
tk
Γ(αk + 1) , t ∈ R and eα(t) := Eα(−tα) =
X
k≥0
(−1)k tαk
Γ(αk + 1) , t ≥ 0. (5.44)
In section 5 of [36] (see [25] further on), the author demonstrated that for such kernels Kα, with
1
2 < α < 1 (“ rough models” ), Eα is increasing and differentiable on the real line with lim
t→+∞ Eα(t) = +∞
and Eα(0) = 1. In particular, Eα is an homeomorphism from (−∞, 0] to (0, 1]. Consequently, the resolvent Rα,λ satisfies its established monotonicity condition (K) for all λ > 0. Moreover, it was shown that if λ > 0, the function fα,λ := −Rα,λ exists and is defined on (0, +∞) by:
fα,λ(t) = −R′
α,λ(t) = αλtα−1E′α(−λtα) = λtα−1 P
k≥0(−1)kλk tαk
Γ(α(k+1)) so that for α ∈ ( 1
2 , 1), fα,λ is a probability densitycalled Mittag-Leffler density and is square-integrable with respect to the Lebesgue measure on R+. Consequently, the results established in [36], particularly in Sections 2, 3, and 4, apply to the case σ(t, x) = σ(t) (Gaussian setting) and σ(t, x) = ς(t)σ(x).
Note that, in this paper, our Assumption (K) is a slightly relaxed version of that of [36]. The purpose of this part is to extend these results to the general case where α ∈ R∗+. We show that for
7. Weak-stationarity in the sense of constant mean, variance and stable autocovariance function (see for example [31]) in constrat to Strong-stationarity where all finite-dimensional distributions are invariant under time shifts.
21

0 < α < 2, the resolvent Rα,λ of Kα satisfy our relaxed monotonicity assumption (K) for all λ > 0, and that fα,λ := −Rα,λ exists and is square-integrable with respect to the Lebesgue measure on R+, both for 1
2 < α < 1 (“rough models” ) and 1
2 <α< 3
2 (“long memory volatility models”). As a result, the findings from Sections 3 and 4, will be applicable in the cases where σ(t, x) = σ(x) (Gaussian setting) and σ(t, x) = ς(t)σ(x). To this end, by a scaling property, it is enough to study Rα,1 (λ = 1) given by its expansion Eα(−tα) where Eα in the literature is known as Mittag-Leffler function. We will leverage the conducive class of completely monotone functions. Let us recall that a function φ : (0, +∞) → [0, +∞) is called a completely monotone-
 (CM) function if it is non-negative, C∞ (i.e. it is infinitely differentiable on (0, +∞)), and satisfies (−1)nφ(n)(t) ≥ 0 for all n ∈ N and t > 0. Crucially, “Bernstein-Widder theorem” [44, Theorem 1.4] (see also [7]) provides a necessary and sufficient condition a function φ : R+ → R to be CM. More specifically, φ is CM if it is a ( real valued) Laplace transform of a unique non-negative measure μ on [0, ∞). Futhermore, a result by Pollard [45] state that a CM function can be obtained by composi-
ng a CM function with a Bernstein function 8
5.1 α-fractional kernels with α > 0
The Mittag-Leffler function Eα(z), with α > 0, generalizes the exponential function (attained with α = 1). It is defined by a power series, which converges on the entire complex plane. In particular, we are interested in the alternate Mittag-Leffler function reading:
eα(t) := Eα(−tα) =
X
k≥0
(−1)k tαk
Γ(αk + 1) , t ≥ 0, Eα(z) :=
∞
X
n=0
zn
Γ(αn + 1) , α > 0, z ∈ C.
In the limiting cases α = 1 and α = 2, eα(t) are elementary functions, namely e1(t) = e−t and e2(t) = cos t. Integral representations of the Mittag-Leffler function Eα were first established in [1], followed by further results in [33], where they were connected by the Laplace transform. For instance, (see (F.12) in [33]), the Laplace transform of Eα(−atα), with a ∈ C, is given by:
LEα(−atα)(z) = zα−1
zα+a , z ∈ C, R(z) > |a|1/α, α > 0. From this, we can deduce the Laplace transform
of eα, which is given by: Leα(z) = zα−1
zα+1 , z ∈ C, R(z) > 1, α > 0. Here, we define zα := |z|αeiα arg(z), where −π < arg(z) < π, that is in the complex z-plane cut along the negative real axis
5.1.1 α-fractional kernels for α ∈ R∗+
Proposition 5.1. The followings hold for the the alternate Mittag-Leffler function for any t ≥ 0:
1. If α ∈ R∗+ \ N∗, eα(t) = Fα(t) + Gα(t) where Fα(t) := R +∞
0 e−tuHα(u) du with ∀ u ∈ R+,
Hα(u) = sin(απ)
π
uα−1
u2α+2uα cos(πα)+1 and Gα(t) := 2
α
P⌊ α−1
2⌋
n=0 exp
h
t cos (2n+1)π
α
i
cos
h
t sin (2n+1)π
α
i
2. If α ∈ N∗, eα(t) = Gα(t) = 2
α
P⌊ α−1
2⌋
n=0 exp
h
t cos (2n+1)π
α
i
cos
h
t sin (2n+1)π
α
i
The result or representation of the above proposition 5.1 is an extension of the case α ∈ (0, 2) studied in [23] to the general case α ∈ R \ N. The second claim is straigthforward as the function Hα vanishes identically if α is an integer.
Proof. Based on the inverse Laplace transform (Bromwich-Mellin formula 9 ), we have the below representation as a Laplace inverse integral: For γ larger than the real parts of all poles of the integrand,
eα(t) = 1
2πi
Z
Br(γ,∞)
ezt zα−1
zα + 1 dz, = 1
2iπ
Z z=γ+i·∞
z=γ−i·∞
ezt zα−1
zα + 1 dz = 1
2πi lim
R→+∞
Z
Br(γ,R)
ezt zα−1
zα + 1 dz. (5.45)
8. A function ψ : R+ → R is called a Bernstein function if it is of class C∞, is non-negative, and its derivative is CM. 9. on the Bromwich path, i.e., a line Re{z} = a with a ≥ 1, and Im{z} running from −∞ to +∞.
22

Let Jα(t, ·) : z → ezt zα−1
zα+1 be the integrand of the above representaion. The relevant poles of
Jα(t, ·) or rather zα−1
zα+1 is the set S := {zn = exp i (2n+1)π
α , n = 0, · · · , ⌊α − 1⌋}. Jα(t, ·) is thus
holomorphic/analytic on C \ S. And since 0 is a brand-point of the integrand Jα(t, ·), we consider Γγ,δ,R the Jordan contour (see Figure 1) defined as the union of the below-represented several distinct paths: Γγ,δ,R = Br(γ, R) ∪ C+ ∪ C+
R ∪ (−H(δ, 1
R )) ∪ C−
R ∪ C−,
— H(δ, 1
R ) is the Hankel Contour given by
H(δ, 1
R ) := [−R + iδ, −c + iδ] ∪ C 1
R
∪ [−R −
iδ, −c − iδ], where C 1
R
is the small circular
arc |s| = 1
R.
— Br(γ, R), the truncated Bromwich Path i.e. Br(γ, R) := [γ − iR, γ + iR], where γ ≥ 1 and Re{z} = γ, with Im{z} ∈ [−R, R].
— C+ := [γ + iR, iR] and C− := [−iR, γ − iR].
— C+
R and C−
R denote the upper and lower semicircular arcs, respectively, of a circle of radius R; C+
R runs from iR to −R+iδ, and C−
R from −R − iδ to −iR.
R(z)
I(z)
Br(γ, R)
C+
C−
C+
R
C−
R
H (δ, 1
R)
Figure 1 – Jordan contour Γγ,δ,R. For small values of δ, large values of R, and γ ≥ 1, the Jordan contour Γγ,δ,R encloses all poles of Jα(t, ·). Therefore, by the Jordan-Cauchy Residue Theorem, we have:
X
z ∈C\{−1}:z α =−1
Res(Jα(t, ·), z) = 1
2πi
I
Γγ,δ,R
Jα(t, z) dz = 1
2πi
Z
Br(γ,R)
Jα(t, z) dz + 1
2πi
Z
C+
Jα(t, z) dz
+1
2πi
Z
C+
R
Jα(t, z) dz − 1
2πi
Z
H(δ, 1
R)
Jα(t, z) dz + 1
2πi
Z
C−
R
Jα(t, z) dz + 1
2πi
Z
C−
Jα(t, z) dz.
Taking the limit as R → ∞ and δ → 0, we may decompose (5.45) as follows
eα(t) := 1
2πi lim
R→+∞
Z
Br(γ,R)
Jα(t, z) dz =
X
z ∈C\{−1}:z α =−1
Res(Jα(t, ·), z) + 1
2πi lim
R→+∞ δli→m0
Z
H(δ, 1
R)
Jα(t, z) dz
−1
2πi lim
R→+∞
Z
C+
Jα(t, z) dz + lim
R→+∞
Z
C+
R
Jα(t, z) dz + lim
R→+∞
Z
C−
R
Jα(t, z) dz + lim
R→+∞
Z
C−
Jα(t, z) dz
!
.
We now examine these six terms. The contribution from the Hankel path is given by 1
2πi
R
H(δ, 1
R ) Jα(t, z) dz,
whose limit coincides with the usual contour representation of the Mittag-Leffler function for α ∈ (0, 1).
1
2πi
Z
H(δ, 1
R)
ezt zα−1
zα + 1 dz R→+∞,δ→0
=
Z +∞
0
e−tuHα(u) du = LHα(t) =: Fα(t). (5.46)
where a synthetic formula was found for Hα in [33] (see (F.22) p.31, see also [32] in the case 0 < α < 1).
∀ u ∈ R+, Hα(u) = − 1
2π · 2 Im zα−1
zα + 1 |z=ueiπ = sin(απ)
π
uα−1
u2α + 2uα cos(πα) + 1 (5.47)
Note that this representation of Fα in term of the Laplace transform of a non-negative Lebesgue integrable function (see Equation (5.46) above) was first established in [1].
23

Also note that the function Hα vanishes identically if α is an integer. The limit of the other
integrals vanishes. In fact: R
C+
R
Jα(t, z) dz ≤ R π
π 2
R|Jα(t, eiθ)| dθ and |Jα(t, eiθ)| ≤ Rα−1
Rα−1 etR cos(θ) ≤
Rα−1
Rα−1 etR(− 2
π θ+1) where in the last inequality, we used the trick cos(θ) ≤ − 2
π θ + 1 ∀θ ∈ [ π
2 , π]. Con
sequently, R
C+
R
Jα(t, z) dz ≤ Rα−1
Rα−1 × π
−2tR
h
etR(− 2
π θ+1)iθ=π θ= π
2
= πRα
2t(Rα+1−R) (1 − e−tR) R→∞
−→ 0 Like
wise limR→+∞
R
C−
R
Jα(t, z) dz = 0. Moreover: R
C+ Jα(t, z) dz = R iR
γ+iR Jα(t, z) dz = R 0
γ Jα(t, x +
iR) dx. Now, observe that: |Jα(t, x + iR)| ≤ (x2+R2) α−1
2
(x2+R2) 2α −1 etx ≤ etx (γ2+R2) α−1
2
Rα−1 . As a consequence,
R
C+ Jα(t, z) dz ≤ (γ2+R2) α−1
2 Rα−1
R0
γ etx dx R→∞
−→ 0. Likewise for limR→+∞
R
C− Jα(t, z) dz = 0. Finally,
Gα(t) :=
X
z∈C\{−1}:zα=−1
Res(Jα(t, ·), z) =
X
zn∈S
Res(Jα(t, ·), zn) =
⌊α−1⌋
X
n=0
eznt Res zα−1
zα + 1 zn
=1
α
⌊α−1⌋
X
n=0
eznt,
Note that, eznt + ez ̄nt = eRe{zn}t eIm{zn}t + e−Im{zn}t = 2eRe{zn}t cos (Im{zn}t) and
P
zn∈S Res(Jα(t, ·), zn) = 1
α
P⌊α−1⌋
n=0 eznt = 1
α
P⌊ α−1
2⌋
n=0 eznt + ez ̄nt . As a consequence,
Gα(t) :=
X
z ∈C\{−1}:z α =−1
Res(Jα(t, ·), z) = 1
α
⌊α−1⌋
X
n=0
eznt = 2
α
⌊ α−1
2⌋
X
n=0
exp t cos (2n + 1)π
α cos t sin (2n + 1)π
α
Remark: 1. For 0 < α < 1, there are no relevant poles since | arg(zk)| > π, so Gα(t) ≡ 0, and we obtain eα(t) = Fα(t), for 0 < α < 1. For 1 < α < 2, there are exactly two relevant poles, z0 = exp(iπ/α) and z−1 = exp(−iπ/α) = z ̄0, located in the left half-plane. In this case, we have
Gα(t) = 2
α et cos( π
α ) cos t sin π
α and eα(t) = R +∞
0 e−tuHα(u) du + 2
α et cos( π
α ) cos t sin π
α . It is clear that the function eα(t) oscillates in an evanescent manner to 0 as t → +∞. We note that this function exhibits oscillations with circular frequency and an exponentially decaying amplitude (see Figure 3). Note that, the above expression of eα is the same for 2 < α < 3 with the only difference that the two poles are now located in the right haft plane, and so providing amplified oscillations. 2. In the case 2 < α < +∞ , however, certains poles are located in the right half plane, so -
providing
amplified oscillations. This common instability for α > 2 is the reason why we will limit ourselves to consider α in the range 0 < α < 2 as highlighted by the below proposition.
Figure 2 – Curves of Rα,λ(t) and fα,λ(t) for different values of α ∈ [ 1
2 , 1)
24

Figure 3 – Curves of Rα,λ(t) and fα,λ(t) for different values of α ∈ (1, 2)
Proposition 5.1. Let λ > 0 and let α ∈ R+ \ N.
(a) The function (−1)⌊α⌋Fα is completely monotonic(thus convex), hence infinitely differentiable on R∗+.
(b) The λ-resolvent Rα,λ satisfies Rα,1 = eα and Rα,λ = Rα,1(λ1/α·). The function Rα,λ is infinitely differentiable i.e. C∞ on (0, +∞). Moreover Rα,λ(0) = 1, Rα,λ ∈ Lr(Leb1) for every r > 1
α and α ≤ 2.
fα,λ(t) := −R′
α,λ(t) is infinitely differentiable and satisfy : ∀ t > 0, fα,λ(t) =
λ
1 α


Z +∞
0
e−λ 1
α tuuHα(u)du − 2
α
⌊ α−1
2⌋
X
n=0
exp tλ 1
α cos (2n + 1)π
α cos tλ 1
α sin (2n + 1)π
α − (2n + 1)π
α


so that, Rα,λ converges to a ∈ [0, 1) and fα,λ ∈ L2β(Leb1) for every β > 0 provided α ∈ (0, 2). (c) if α ≥ 2 the L2(R+)-θ-H ̈older continuity of fα,λ as stated in Assumption 4.5 does not holds. Furthermore, the function Rα,λ satisfies the assumptions K (i), specifically, that Rα,λ converges to 0, along with the function fα,λ satisfying the assumption 4.5 10 (for the weak functional behavior property) if and only if α ∈ (0, 2).
Proposition 5.2 (α-fractional kernels 1 < α < 2). Let λ > 0 and let α ∈ (1, 2).
(a) The λ-resolvent Rα,λ satisfies Rα,1 = eα and Rα,λ = Rα,1(λ1/α·). The function eα and thus Rα,λ
are infinitely differentiable i.e. C∞ on (0, +∞)) with:
∀k ∈ N, e(k)
α (t) = F (k)
α (t) + G(k)
α (t) where F (k)
α (t) =
Z +∞
0
e−tuH (k)
α (u) du (5.48)
H (k)
α (u) := (−1)k sin(απ)
π
uα−1+k
u2α + 2uα cos(απ) + 1 and G(k)
α (t) = 2
α et cos( π
α ) cos t sin π
α − kπ
α.
(5.49) Moreover Rα,λ(0) = 1, Rα,λ(t) ≤ 1 ∀t ≥ 0, Rα,λ converges to 0. Rα,λ ∈ Lr(Leb1) for every r > 1
α
and fα,λ := −R′
α,λ is infinitely differentiable , converges to 0 and satisfy:
∀ t > 0, fα,λ(t) := −R′
α,λ(t) = λ 1
α
Z +∞
0
e−λ α1 tuuHα(u)du − 2
α etλ 1α cos( π
α ) cos
h
tλ 1
α sin π
α −π
α
i
.
10. Uniform Ho ̈lder continuity or Ho ̈lder regularity with exponent θ for the function fα,λ, ensuring controlled behavior as t and t + δ become arbitrarily close.
25

(b) Moreover, if α ∈ (1, 2), fα,λ ∈ L2β(Leb1) for every β > 0 and for i ∈ {1, 2}, for every θ ∈ 0, α− 1i=2
i, there exists a real constant Cθ,λ > 0 such that
∀ δ > 0,
h
R +∞
0 fα,λ(t + δ) − fα,λ(t) i dt
i1/i
≤ Cθ,λδθ.
For clarity and conciseness, the proofs of Propositions 5.1 and 5.2 are postponed to Appendix B.
Theorem 5.3. Let α ∈ 1, 3
2 (and more generally α ∈ 1
2, 3
2 ), let K(t) = Kα(t) = tα−1
Γ(α) , t > 0 the
fractional kernel, let σ(t, x) := ς(t)σ(x) with σ a Lipschitz continuous function given by equation (3.32),
thus satisfying a relation of the type (4.33) (SLσ) with κ := κ2 > 0, let c ∈ 0, 1
κ2 with ς = ςλ,c, λ > 0
and let X0 ∈ L2(P) such that E[X0] = x∞ and V ar(X0) = v0 = cσ2(x∞)
1−cκ2 . Then,
1. For fractional kernels Kα with 1 < α < 2, the solution (Xt)t≥0 to the Volterra equation (3.12) starting from X0 has a fake stationary regime of type I in the sense that:
∀ t ≥ 0, E Xt = x∞, Var(Xt) = v0 = cσ2(x∞)
1−cκ2 and E σ2(Xt) = σ ̄02 = σ2(x∞)
1−cκ2 .
2. If a = 0 or φ∞ = 0, ∀X′0 ∈ L2(P), a solution to (3.12) starting from X′0 satisfies ∥Xt′ −Xt∥2 t→→∞ 0
3. The family of shifted processes Xt+·, t ≥ 0, is C-tight as t → +∞ and its (functional) limiting distributions are all L2-stationary processes with covariance function C∞ given by (4.42).
Proof. (1), (2) are consequences of Proposition 3.11. If 0 < θ < α − 1
2 and β > 1, Theorem 4.6 applies.
5.2 The function ς2
α,λ,c solution of the stabilizer equation when α ∈ (0, 2)
In this section we want to compute ςλ,c as a power series in tkα. To this end we rely on the Laplace version of the equation (Eλ,c) in (3.25) satisfied by ς2
λ,c : cλ2 1 − (φ − fλ ∗ φ)2(t) = (f 2
λ ∗ ς2)(t) ∀ t ≥ 0,
for which the laplace transform is given by equation (3.26) in Lemma 3.9: ∀ t > 0, t Lf2
λ (t).Lς2 (t) = −2 cλ2L(φ−fλ∗φ)(φ−fλ∗φ)′ (t).
Given the kernel Kα(u) = uα−1
Γ(α) and the expansion of the resolvents Rα,λ and it derivative −fα,λ, ∀t ≥ 0,
Rα,λ(t) =
X
k≥0
(−1)k λktαk
Γ(αk + 1) = Eα(−λtα), fα,λ(t) = αλtα−1E′
α(−λtα) = λtα−1 X
k≥0
(−1)k λktαk
Γ(α(k + 1)) . (5.50)
Since φ(t) − (fλ ∗ φ)(t) = 1 − (fλ∗μ)t
λx∞ we have φ(t) − (fλ ∗ φ)(t) 0∼ 1 and by Lemma 3.9 (2) (φ(t) − (fλ ∗
φ)(t))′ ∼0 − μ(0)
λx∞ fλ(t), so that: (φ − fλ ∗ φ)(φ − fλ ∗ φ)′(t) ∼0 − μ(0)
λx∞
λtα−1
Γ(α) and f 2
λ (t) 0∼ λ2t2(α−1)
Γ(α)2 .
It follows that – at least heuristically ( 11) 
L(φ−fλ∗φ)(φ−fλ∗φ)′ (t) +∼∞ −λ μ(0)
λx∞ t−α and Lf2
λ (t) +∼∞ λ2Γ(2α−1)t−(2α−1)
Γ(α)2 .
This implies that Lς2(t) +∼∞ 2λ c μ(0)
λx∞
Γ(α)2
Γ(2α−1) t−(2−α) owing to Equation (3.26). This in turn suggests that
ς2(t) ∼0 2λcΓ(α)2
Γ(2α − 1)Γ(2 − α)
μ(0)
λx∞
t1−α so that
(
(i) ς(0) = 0 if α < 1,
(ii) limt→0+ ς(t) = +∞ if α > 1 provided μ(0)
λx∞ > 0. (5.51) This suggests to search ς2(t) of the form (Power Series Ansatz):
ς2(t) = ς2
α,λ,c(t) := 2 λ c t1−α X
k≥0
(−1)kckλktαk with c0 = Γ(α)2
Γ(2α − 1)Γ(2 − α)
μ(0)
λx∞
. (5.52)
11. We use here heuristically a dual version of the Hardy-Littlewood Tauberian theorem for Laplace transform, namely ς2(t) ∼0 Ctγ , γ > −1, iff Lς2 (t) +∼∞ Ct−(γ+1)Γ(γ + 1). We refer to [8, 26] for a general theory of regular variation.
26

Remark: 1. At this point, it is crucial to emphasize that, for a fixed value of α, all functions ς2
α,λ,c
from equation (6.58) are derived or generated from a common function, defined as
ς2
α,λ,c(t) = cλ2− 1
α ς2
α λ1
α t with ς2
α(t) := 2 t1−α X
k≥0
(−1)kcktαk. (5.53)
where the coefficients ck depend on α. Thus, for simplicity in what follows, we will assume c = λ = 1. 2. For the computation of the function ς2
α,λ,c, we need to establish a recurrence formula satisfied by the coefficients ck, which involves knowing the form of the function φ or more specificcally, the mean-reverting function μ. In practice, since this function is usually taken to be constant equal to μ0, we are going in the next subsection to compute and study the function ς2
α,λ,c when μ(t) = μ0 a.e. and
α ∈ (1, 3
2 ) bearing in mind that, the case when α ∈ ( 1
2 , 1) have been intensively study in [36].
5.2.1 Existence and computation of the function ς2
α,λ,c solution of the stabilizer equation
when α ∈ (1, 3
2)
The recurrence formula satisfied by the coefficients ck, which make possible the computation of the functions ςα,λ,c are established in the same manner as in [36]. We consider the case where μ(t) = μ0 a.e., so that μ∞ = μ(0) = μ0, and assume φ ≡ 1 as in the previous subsection. We then have the following proposition, whose proof is postponed to Appendix B.
Proposition 5.2 (Existence of the function ς2
α,λ,c for α ∈ (1, 2)). Let α ∈ (1, 2):
1. limt→0 ς2
α,λ,c = +∞, and limt→+∞ ς2
α,λ,c(t) = cλ2
∥fα,λ ∥2
L2 (Leb1 )
.
2. ς2
α,λ,c(t) = cλ2− 1
α ςα2(λ 1
α t) where ςα2(t) := 2 t1−α P
k≥0(−1)kcktαk and the coefficients (ck)k≥0 are
defined as follows: c0 = Γ(α)2
Γ(2α−1)Γ(2−α) and for every k ≥ 1,
ck = Γ(α)2Γ(α(k + 1))
Γ(2α − 1)Γ(αk + 2 − α)
"
(a ∗ b)k − α(k + 1)
k
X
l=1
B α(l + 2) − 1, α(k − l − 1) + 2 (b∗2)lck−l
#
.
(5.54) where for two sequences of real numbers (uk)k≥0 and (vk)k≥0, the Cauchy product is defined as
(u ∗ v)k = Pk
l=0 ulvk−l and B(a, b) = R 1
0 ua−1(1 − u)b−1du denoting the beta function.
3. The convergence radius ρα = lim infk |ck|1/k −1
α of the power series P
k≥0 cktαk, defined by
the coefficients ck, is infinite. Specifically, there exist constants K ≥ 1 and A ≥ 2α+2 such that
for all k ≥ 0, the following inequality holds: |ck| ≤ KAk
Γ(α(k−1)+2) . As a consequence, the expansion
in equation 5.53 converges for all t ∈ R+, and in fact, for all t ∈ R.
Remark. The equation in (5.54), which provides the coefficients of the expansion for ς2
α,λ,c when
α ∈ (1, 3
2 ), closely resembles that obtained for α ∈ ( 1
2 , 1) in [36], although the properties of the two functions differ significantly. By the scaling property (5.53), we may assume now that c = λ = 1.
Proposition 5.3 (Existence of ςα,λ,c i.e. positivity computation of the function ς2
α,λ,c solution of the
stabilizer equation for α ∈ (1, 3
2 )). Let α ∈ (1, 3
2 ) and consider the volterra equation of the first kind,
κ 1 − R2
α(t) = (f 2
α ∗ gα)(t), ∀t ≥ 0, κ > 0. (5.55)
with Rα : R+ → R, fα := −R′α satisfy Rα(0) = 1, limt→+∞ Rα(t) = 0, and fα(0) = 0, limt→+∞ fα(t) = 0
(a) Then equation (6.59) has at most one solution in L1
loc(Leb1) that converges to a finite limit.
27

(b) If the equation (6.59) has a continuous solution gα defined on I ⊆ (0, +∞) , then gα ≥ 0 on
I ⊆ R+, so that the function √gα is well-defined on I ⊆ R+.
Proof. The argument is similar to that of Proposition 6.1 and is therefore left to the reader.
5.3 Numerical illustration of Fake Stationarity for Fractional SVIE with α ∈ (1
2, 3
2)
In this section we specify a family of scaled volterra equations where b(x) = μ0 − λ x for λ > 0
and a diffusion coefficient σ to be specified later. Let c be such that c[σ]2
Lip < 1. For the numerical
illustrations, we consider the case φ(t) = Cste = φ(0) = 1 almost surely, in which case the equation with constant mean reads :
Xt = μ0
λ + X0 − μ0
λ Rλ(t) + 1
λ
Zt
0
fα,λ(t − s)ς(s)σ(Xs)dWs. (5.56)
The reader is invited to take a look to the Appendix A for the semi-integrated Euler scheme introduce in this setting for the above equation and to the captions of the differents figures for the numerical values of the parameters of the Stochastic Volterra equation.
5.3.1 A numerical illustration of Fake Stationarity in SVIE with α-Fractional Kernels for α ∈ (1, 3
2 ) and (stabilized) quadratic Diffusion coefficient
We consider an α-fractional kernel for α ∈ (1, 3
2 ) (“Long Memory”) and a squared trinomial diffusion
coefficient of the form 3.32, σ(x) =
q
κ0 + κ1 (x − μ0
λ ) + κ2 (x − μ0
λ )2, κi ≥ 0, i = 0, 2, κ21 ≤ 4κ2κ0.
0 2 4 6 8 10 Time t
0.30
0.35
0.40
0.45
0.50
0.55
0.60
(t)
Stabilizer function (t), H=0.8
Figure 4 – Graph of the stabilizer t → ςα,λ,c(t) over time interval [0, T ], T = 10 for a value of the Hurst esponent H = 0.8, λ = 0.2, c = 0.3.
0 10 20 30 40 50 60 Time
5
0
5
10
15
20
25
30
35
Xt
Simulation of 500 Trajectories of the Process Xt,scheme = 1
Figure 5 – Confluence from a [0,30]-Uniform Distribution, T=60, H = 0.8, λ = 0.2, c = 0.36.
Figure 5 shows L2-confluence of the the process’s marginals for different initial values as time increases.
0.0 0.2 0.4 0.6 0.8 1.0 Time Steps tk
0.27
0.28
0.29
0.30
0.31
0.32
0.33
Std Var(tk, M)
Sample Std Var(Xt)
Std of Xtk Benchmark std(X0) = 0.3
0.0 0.2 0.4 0.6 0.8 1.0 Time Steps tk
0.2750
0.2775
0.2800
0.2825
0.2850
0.2875
0.2900
0.2925
0.2950
[ 2(Xt)]
Expectation of 2(Xt)
[ 2(Xt)] Benchmark [ 2(X0)]= 0.285
Curves Var(Xt) and [ 2(Xt)] as function of time, (x) = 0 + 1(x 0 ) + 2(x 0 )2 , H=0.8, c= 0.316, 1.0e+05 Samples, scheme = 2
Figure 6 – Graph of tk 7→ StdDev(tk, M ) and tk 7→ E[σ2(Xtk , M )] over [0, T ], T = 1, H = 0.8, μ0 = 2, λ = 0.2, v0 = 0.09, and StdDev(X0) = 0.3. Number of steps: n = 800, Simulation size: M = 100000.
28

5.3.2 A numerical illustration of the degenerate case of Fake Stationarity in SVIE with α-Fractional Kernels for α ∈ ( 1
2, 3
2 ) and a (stabilized) tanh Diffusion coefficient
In this section we specify a family of scaled models where b(x) = μ0 −λ x and σ(x) =
q
tanh(x− μ0
λ)
2 , λ > 0.
0 10 20 30 40 50 Time t
0.00
0.05
0.10
0.15
0.20
0.25
0.30
0.35
0.40
(t)
Stabilizer function (t), H=0.4
Figure 7 – Graph of the stabilizer t → ςα,λ,c(t) over time interval [0, T ], T = 50 for a value of the Hurst esponent H = 0.4, λ = 0.2, c = 0.36.
0 10 20 30 40 50 Time
9.0
9.5
10.0
10.5
11.0
Xt
Simulation of 50 Trajectories of the Process Xt,scheme = 1
Figure 8 – Confluent trajectories in the degenerate case, T = 50, H = 0.4, λ = 0.2, c = 0.36.
6 Applications to Exponential-Fractional Stochastic Volterra Equa
tions
Let consider the below Gamma Fractional integration kernel or Exponential-Fractional integration kernel defined in Example 2.3, where α = H + 1
2 , with H denoting the Hurst coefficient:
K(t) = Kα,ρ(t) = e−ρt uα−1
Γ(α) 1R+(t), with α, ρ > 0. The purpose of this part is to extend the results of the preceeding section to the general case of a gamma fractional integration kernel where α ∈ ( 1
2, 3
2 ). Note that, this is a generalization of the exponential kernel and the fractional integration kernel. The gamma kernel is often adopted in the Quadratic Rough Heston model (see, e.g., [9]) due to its numerical convenience, flexibility, and the availability of a closed-form expression for its resolvent of the second kind. We show that for such kernels Kα,ρ, the resolvent Rα,ρ,λ satisfy our standing assumption (K) for all λ > 0, and that fα,ρ,λ := −Rα,ρ,λ exists and is square-integrable with res-
pect to the Lebesgue measure on R+, both for 1
2 < α < 1 (“rough
models”) and 1
2 <α< 3
2 (“long memory volatility models”). As a result, the findings from Sections 3, 3.3 and 4, will be applicable in the cases where σ(t, x) = σ(x) (Gaussian setting) and σ(t, x) = ς(t)σ(x).
6.1 α− Exponential Fractional kernels 1
2 <α< 3
2
By definition, L[Rα,ρ,λ](s) = 1
s(1+L[Kα,ρ](s)) = 1
s(1+λ(s+ρ)−α) (owing to Example 2.3) so that, by the
Tauberian Final Value Theorem 12 : a := limt→∞ Rα,ρ,λ(t) = lims→0 sL[Rα,ρ,λ](s) = 1
1+λρ−α ∈ [0, 1). If
λ > 0, we define the function fα,ρ,λ := −Rα,ρ,λ on (0, +∞) (see (2.11) in Example2.3) by noticing that :
L[fα,ρ,λ](s) = L[−R′
α,ρ,λ](s) = −sL[Rα,ρ,λ](s)+Rα,ρ,λ(0) = −s
s(1 + λ(s + ρ)−α) +1 = λ
λ + (s + ρ)α = L[e−ρ·fα,λ](s)
i.e. by injectivity of the Laplace transform, fα,ρ,λ(t) = e−ρtfα,λ(t) = αλe−ρttα−1E′α(−λtα). Likewise,
using Tauberian Final Value Theorem, limt→∞ fα,ρ,λ(t) = lims→0 sL[−R′
α,ρ,λ](s), that is
limt→∞ fα,ρ,λ(t) = − lims→0 s (sL[Rα,ρ,λ](s) − Rα,ρ,λ(0)) = − lims→0 s
(1+λ(s+ρ)−α) − s = 0
12. f : [0, ∞) → C continuous, limt→∞ f (t) = f∞, the Laplace transform Lf (s) exists for s > 0 and lims→0+ sLf (s) = f∞.
29

Remark: Note that we recover the exponential kernel if α = ρ = 1. In fact, if K(t) = e−t1R+(t), R1,1,λ reads:
R1,1,λ(t) = 1R+ (t) +
X
k≥1
(−1)k λk
Zt
0
e−ssk−1
Γ(k) ds = 1R+ (t) +
Zt
0
e−s X
k≥1
(−1)kλk sk−1
k! ds = 1 − λ
Zt
0
e−(λ+1)s ds
So that we recover the resolvent of the exponential kernel given in [36]:
K(t) = e−t, which are Rλ(t) =
(
t + 1 if λ = −1
1+λe−(λ+1)t
λ+1 if λ ̸= −1
Proposition 6.1. Let λ > 0 and let α ∈ (0, 2). (a) The λ-resolvent Rα,ρ,λ is infinitely differentiable
i.e. C∞ on (0, +∞) and completely monotonic if α < 1. Moreover Rα,ρ,λ(0) = 1, Rα,ρ,λ converges to a := 1
1+λρ−α ∈ [0, 1[. Rα,ρ,λ ∈ Lr(Leb1) for every r > 1
α.
(b) fα,ρ,λ := −R′
α,ρ,λ is infinitely differentiable, converges to 0, and satisfy :
∀ t > 0, fα,ρ,λ(t) := e−ρtfα,λ(t) = λ 1
α
Z +∞
0
e−(ρ+λ 1
α )tuuHα(u)du − 2
α et(λ 1
α cos( π
α )−ρ) cos
h
tλ 1
α sin π
α −π
α
i
.
If α < 1, fα,ρ,λ is a completely monotonic function (hence convex), decreasing to 0 while 1 − Rα,ρ,λ is
a Bernstein function. (c) If α ∈ ( 1
2, 3
2 ), fα,ρ,λ is L2β-integrable ∀β ∈ 0, 1
2(1−α) if α < 1 and for every β if α > 1.
Moreover, for i ∈ {1, 2} and for every θ ∈ 0, α − 1i=2
i , there exists a real constant Cθ,ρ,λ > 0 such that
∀ δ > 0,
h
R +∞
0 fα,ρ,λ(t + δ) − fα,ρ,λ(t) ii1/i
≤ Cθ,ρ,λδθ.
For clarity and conciseness, the proof is postponed to Appendix B.
Theorem 6.2. Let α ∈ 1
2, 3
2 , ρ > 0, let K(t) = Kα,ρ(t) = e−ρt tα−1
Γ(α) , t > 0 the Gamma fractional
kernel, let σ(t, x) := ς(t)σ(x) with σ be a Lipschitz continuous function given by (3.32), thus satisfying
a relation of the type (4.33) (SLσ) with κ := κ2 > 0, let c ∈ 0, 1
κ2 with ς = ςλ,c, λ > 0 and let
X0 ∈ L2(P) such that E[X0] = x∞ and V ar(X0) = v0 = cσ2(x∞)
1−cκ2 . Then,
1. For exponential-fractional kernels Kα,ρ with 1
2 <α< 3
2 , the solution (Xt)t≥0 to the Volterra equation (3.12) starting from X0 has a fake stationary regime of type I in the sense that:
∀ t ≥ 0, E Xt = x∞, Var(Xt) = v0 = cσ2(x∞)
1−cκ2 and E σ2(Xt) = σ ̄02 = σ2(x∞)
1−cκ2 .
2. If φ∞ = 0, for every X′0 ∈ L2(P), a solution to (3.12) starting from X′0 satisfies ∥Xt′ −Xt∥2 t→→∞ 0.
3. The family of shifted processes Xt+·, t ≥ 0, is C-tight as t → +∞ and its (functional) limiting distributions are all L2-stationary processes with covariance function C∞ given by (4.42).
Proof. The (1) is a consequence of Proposition 3.11. If 0 < θ < α − 1
2 and β > 1, Theorem 4.6 applies.
6.2 Existence of ςα,ρ,λ,c i.e. positivity computation of the function ς2
α,ρ,λ,c solution of the stabilizer equation when α ∈ ( 1
2, 3
2)
In this section we want to compute ςλ,c. To this end we rely on the Laplace version of the equation (Eλ,c) in (3.25) satisfied by ς2
λ,c, namely ∀ t ≥ 0, cλ2 1 − (φ − fλ ∗ φ)2(t) = (f 2
λ ∗ ς2)(t), for which the laplace transform is given by equation (3.26) in Lemma 3.9: ∀ t > 0, t Lf2
λ (t).Lς2 (t) = −2 cλ2L(φ−fλ∗φ)(φ−fλ∗φ)′ (t).
30

Given the form of the kernel Kα,ρ(u) = e−ρu uα−1
Γ(α) 1R(u), α, ρ > 0 and the expansion of the resolvents Rα,λ and it derivative −fα,λ, in Example 2.3
Rα,ρ,λ(t) = 1 +
X
k≥1
(−1)k λk
Zt
0
e−ρsskα−1
Γ(kα) ds, fα,ρ,λ(t) = e−ρtfα,λ(t) = λe−ρttα−1 X
k≥0
(−1)kλk tαk
Γ(α(k + 1))
Since φ(t) − (fλ ∗ φ)(t) = 1 − (fλ∗μ)t
λx∞ we have φ(t) − (fλ ∗ φ)(t) 0∼ 1 and by Lemma 3.9 (2) (φ(t) − (fλ ∗
φ)(t))′ ∼0 − μ(0)
λx∞ fλ(t), so that:
e2ρt(φ − fλ ∗ φ)(φ − fλ ∗ φ)′(t) 0∼ − μ(0)
λx∞
λtα−1
Γ(α) and e2ρtf 2
λ (t) 0∼ λ2t2(α−1)
Γ(α)2
It follows that (heuristically) Le2ρ·(φ−fλ∗φ)(φ−fλ∗φ)′ (t) +∼∞ −λ μ(0)
λx∞ t−α and Le2ρ·f 2
λ (t) +∼∞ λ2Γ(2α−1)t−(2α−1)
Γ(α)2 .
So, roughly, this implies that
Le2ρ·ς2 (t) = Lς2 (t − 2ρ) = −2cλ2L(φ−fλ∗φ)(φ−fλ∗φ)′ (t−2ρ)
(t−2ρ)Le2ρ· f 2
λ
(t−2ρ)
+∼∞ 2λ c μ(0)
λx∞
Γ(α)2
Γ(2α−1) t−(2−α)
owing to Equation (3.26) evaluated at (t − 2ρ). This in turn suggests that
ς2(t) ∼0 2λcΓ(α)2
Γ(2α − 1)Γ(2 − α)
μ(0) λx∞
e−2ρtt1−α so that (i) ς(0) = 0 if α < 1,
(ii) limt→0+ ς(t) = +∞ if α > 1 provided μ(0)
λx∞ > 0.
(6.57) This suggests to search ς2(t) of the form (Exponential Power Series Ansatz):
ς2(t) = ς2
α,ρ,λ,c(t) := 2 λ c e−2ρtt1−α X
k≥0
(−1)kckλktαk, with c0 = Γ(α)2
Γ(2α − 1)Γ(2 − α)
μ(0) λx∞
. (6.58)
so that, there exists η small enough such that ∀t ∈ (0, η), ς2
α,ρ,λ,c(t) ≈ e−2ρtς2
α,λ,c(t).
Remark: 1. For the computation of the function ς2
α,λ,c, establishing a recurrence formula satisfied by the coefficients ck turns out to be quite challenging. We rather solve the functional equation numerically. This involves knowing the form of the mean-reverting function μ. In practice, since this function is usually taken to be constant equal to μ0, we are study ς2
α,ρ,λ,c when μ(t) = μ0 a.e. and α ∈ ( 1
2, 3
2 ).
2. With that in mind, on a time grid tk = k T
n , k = 0, ..., n., we use the discretization
∀ k ≥ 1, cλ2 1 − R2
α,ρ,λ,c(tk) = (f 2
α,ρ,λ,c ∗ ς 2
α,ρ,λ,c)(tk) = Pk−1
j=0 f 2
α,ρ,λ,c(tk − tj )ς2
α,ρ,λ,c(tj+1)(tj+1 − tj ).
which we can solve step by step (Lower-Triangular system) to recover the values ς2
α,ρ,λ,c (tk ).
From now on, we consider the case μ(t) = μ0 a.e., such that μ∞ = μ(0) = μ0 and φ ≡ 1.
Proposition 6.1 (Existence and Properties of the function ς2
α,ρ,λ,c for α ∈ ( 1
2, 3
2 )). Let α ∈ ( 1
2, 3
2 ):
1. In reference to the remark on the stabilizer, consider the following equation for c, λ > 0:
cλ2 1 − R2
α,ρ,λ(t) = (f 2
α,ρ,λ ∗ gα,ρ,λ)(t), ∀t ≥ 0. (6.59)
where Rα,ρ,λ : R+ → R and fα,ρ,λ := −R′
α,ρ,λ satisfy Rα,ρ,λ(0) = 1, limt→+∞ Rα,ρ,λ(t) = a, and limt→+∞ fα,ρ,λ(t) = 0.
(a) Then equation (6.59) has at most one solution in L1
loc(Leb1) that converges to a finite limit.
(b) If the equation (6.59) has a continuous solution gα,ρ,λ defined on I ⊆ (0, +∞), then gα,ρ,λ ≥ 0
on I ⊆ R+, so that the function √gα,ρ,λ is well-defined on I ⊆ R+. If α < 1, gα,ρ,λ is concave, non-decreasing and non-negative on [0, +∞). In particular, we have ∀t > 0 gα,ρ,λ(t) > 0.
2. The stabilizer ς2
α,ρ,λ,c exists as a non-negative function on I ⊆ (0, +∞) and
limt→0 ςα,ρ,λ,c = 0 if α ≤ 1,
+∞ if α > 1. and limt→+∞ ςα,ρ,λ,c(t) =
√c(1−a2φ2∞)λ
∥fα,ρ,λ ∥L2 (Leb1 )
, a= 1
1+λρ−α .
Proof. Claim 1(a) comes from Lemma 3.9 (3). Claim (2) follows from 1(b), equation (6.57) and Lemma 3.9 (4). The proof of 1(b) is postponed to Appendix B.
31

6.3 Numerical illustration of Fake Stationarity for α-Gamma Fractional SVIE With (Stabilized) Quadratic Diffusion Coefficient and α ∈ ( 1
2, 3
2)
In this section we specify a family of scaled volterra equations where b(x) = μ0 − λ x for some λ > 0 and a diffusion coefficient σ given by (6.60). Let c such that c[σ]2
Lip < 1. For the numerical illustrations,
we consider the case φ(t) = Cste = φ(0) = 1 almost surely, in which case the equation with constant mean reads :
Xt = μ0
λ + X0 − μ0
λ Rλ(t) + 1
λ
Rt
0 fα,λ(t − s)ς(s)σ(Xs)dWs.
The reader is invited to take a look to the Appendix A for the semi-integrated Euler scheme introduce in this setting for the above equation and to the captions of the differents figures for the numerical values of the parameters of the Stochastic Volterra equation. We consider an α-Gamma Fractional kernel for α ∈ ( 1
2, 3
2 ) ⊂ (0, 2) (“Rough and Long Memory models ”) and a squared trinomial diffusion coefficient σ of the form 3.32 and given by:
σ(x) =
r
κ0 + κ1 (x − μ0
λ ) + κ2 (x − μ0
λ )2 with κi ≥ 0, i = 0, 2, κ2
1 ≤ 4κ2κ0. (6.60)
0 2 4 6 8 10 Time t
0.0
0.1
0.2
0.3
0.4
(t)
Stabilizer function (t), H=0.4
Figure 9 – Graph of the stabilizer t → ςα,λ,c(t) over time interval [0, T ], T = 10 for a value of the Hurst esponent H = 0.4, λ = 0.2, ρ = 1.2, c = 0.36.
0 2 4 6 8 10 Time t
0.48
0.50
0.52
0.54
0.56
0.58
0.60
0.62
(t)
Stabilizer function (t), H=0.8
Figure 10 – Graph of the stabilizer t → ςα,λ,c(t) over time interval [0, T ], T = 10 for a value of the Hurst esponent H = 0.8, λ = 0.2, ρ = 1.2, c = 0.36.
0.0 0.2 0.4 0.6 0.8 1.0 Time Steps tk
0.27
0.28
0.29
0.30
0.31
0.32
0.33
Std Var(tk, M)
Sample Std Var(Xt)
Std of Xtk Benchmark std(X0) = 0.3
0.0 0.2 0.4 0.6 0.8 1.0 Time Steps tk
0.26
0.27
0.28
0.29
0.30
0.31
[ 2(Xt)]
Expectation of 2(Xt)
[ 2(Xt)] Benchmark [ 2(X0)]= 0.285
Curves Var(Xt) and [ 2(Xt)] as function of time, (x) = 0 + 1(x 0 ) + 2(x 0 )2 , H=0.8, c= 0.316, 1.0e+05 Samples, scheme = 2
Figure 11 – Graph of tk 7→ StdDev(tk, M ) and tk 7→ E[σ2(Xtk , M )] over the time interval [0, T ], T = 1, H = 0.8, μ0 = 2, λ = 0.2, v0 = 0.09, ρ = 1.2, and StdDev(X0) = 0.3. Number of steps: n = 800, Simulation size: M = 100000.
32

0.0 0.2 0.4 0.6 0.8 1.0 Time Steps tk
0.27
0.28
0.29
0.30
0.31
0.32
0.33
Std Var(tk, M)
Sample Std Var(Xt)
Std of Xtk Benchmark std(X0) = 0.3
0.0 0.2 0.4 0.6 0.8 1.0 Time Steps tk
0.26
0.27
0.28
0.29
0.30
0.31
[ 2(Xt)]
Expectation of 2(Xt)
[ 2(Xt)] Benchmark [ 2(X0)]= 0.285
Curves Var(Xt) and [ 2(Xt)] as function of time, (x) = 0 + 1(x 0 ) + 2(x 0 )2 , H=0.4, c= 0.316, 1.0e+05 Samples, scheme = 2
Figure 12 – Graph of tk 7→ StdDev(tk, M ) and tk 7→ E[σ2(Xtk , M )] over the time interval [0, T ], T = 1, H = 0.4, μ0 = 2, λ = 0.2, v0 = 0.09, ρ = 1.2, and StdDev(X0) = 0.3. Number of steps: n = 800, Simulation size: M = 100000.
0.0 0.2 0.4 0.6 0.8 1.0 Time Steps tk
0.27
0.28
0.29
0.30
0.31
0.32
0.33
Std Var(tk, M)
Sample Std Var(Xt)
Std of Xtk Benchmark std(X0) = 0.3
0.0 0.2 0.4 0.6 0.8 1.0 Time Steps tk
0.2750
0.2775
0.2800
0.2825
0.2850
0.2875
0.2900
0.2925
0.2950
[ 2(Xt)]
Expectation of 2(Xt)
[ 2(Xt)] Benchmark [ 2(X0)]= 0.285
Curves Var(Xt) and [ 2(Xt)] as function of time, (x) = 0 + 1(x 0 ) + 2(x 0 )2 , H=0.1, c= 0.316, 1.5e+05 Samples, scheme = 1
Figure 13 – Graph of tk 7→ StdDev(tk, M ) and tk 7→ E[σ2(Xtk , M )] over the time interval [0, T ], T = 1, H = 0.1, μ0 = 2, λ = 0.2, v0 = 0.09, ρ = 1.2, and StdDev(X0) = 0.3. Number of steps: n = 800, Simulation size: M = 150000.
Acknowledgement: The authors thank J-F. Chassagneux and M. Rosenbaum for insightful discussions, help and comments.
References
[1] O. I. Marichev A. A. Kilbas and S. G. Samko. Fractional integrals and derivatives (theory and applications). 1993. [2] E. Abi Jaber, M. Larsson, and S. Pulido. Affine volterra processes. The Annals of Applied Probability, 29:3155–3200, 2019. [3] E. Alos and D. Nualart. Anticipating stochastic volterra equations. Stochastic Process. Appl., 72(1):73–95, 1997. [4] S. Norlund B. Gripenberg and O. Saavalainen. Volterra Integral and Functional Equations. Encyclopedia of Mathematics and its Applicati-
ons. Cambridge University Press, Cambridge, UK, 1990.
33

[5] M. A. Berger and V. J. Mizel. Volterra equations with ito integrals i. J. Integral Equations, 2(3):187–245, 1980. [6] M. A. Berger and V. J. Mizel. Volterra equations with ito integrals ii. J. Integral Equations, 2(4):319–337, 1980. [7] S. Bernstein. Sur les fonctions absolument monotones. Acta Mathematica, 52:1–66, 1929. [8] N. H. Bingham, C. M. Goldie, and J. L. Teugels. Regular variation, volume 27 of Encyclopedia of Mathematics and its Applications. Cambridge University Press, Cambridge, -
1989. [9] Florian Bourgey and Jim Gatheral. The ssr under quadratic rough heston. SSRN Electronic Journal, 2025. Available at SSRN: https://ssrn.com/abstract=5239929.
[10] Giorgia Callegaro, Martino Grasselli, and Gilles Page`s. Fast hybrid schemes for fractional Riccati equations (rough is not so tough). Math. Oper. Res., 46(1):221–254, 2021. [11] Eric Carlen and Paul Kr ́ee. Lp estimates on iterated stochastic integrals. Annals of Probability, 19(1):354–368, 1991. [12] W. G. Cochran, J.-S. Lee, and J. Potthoff. Stochastic volterra equations with singular kernels. Stochastic Process. Appl., 56(2):337–349, 1995.
[13] Fabienne Comte and Eric Renault. Long memory in continuous-time stochastic volatility models. Math. Finance, 8(4):291–323, 1998. [14] L. Coutin and L. Decreusefond. Stochastic volterra equations with singular kernels. In Stochastic analysis and mathematical physics, volume 50 of Progr. Probab., pages 39–50. Birkh ̈auser Boston, 2001. [15] L. Coutin and L. Decreusefond. Stochastic Volterra equations with singular kernels. In Stochastic analysis and mathematical physics, volume 50 of Progr. Pro-
bab., pages 39–50. Birkh ̈auser Boston, Boston, MA, 2001. [16] Omar El Euch and Mathieu Rosenbaum. Perfect hedging in rough Heston models. Ann. Appl. Probab., 28(6):3813–3856, 2018. [17] Omar El Euch and Mathieu Rosenbaum. The characteristic function of rough Heston models. Mathematical Finance, 29(1):3–38, 2019.
[18] Martin Friesen and Peng Jin. Volterra square-root process: Stationarity and regularity of the law, 2022. [19] Jim Gatheral, Thibault Jaisson, and Mathieu Rosenbaum. Volatility is rough. Quant. Finance, 18(6):933–949. [20] Jim Gatheral, Paul Jusselin, and Mathieu Rosenbaum. The quadratic rough Heston model and the joint S&P 500/VIX smile calibration problem. arXiv e-prints, page arXiv:2001.01789, January 2020. [21] E. Gnabeyeu, G. Pag`es, and M. Rosenbaum. On stationarity of Time-inhomogeneous-
 Affine Volterra process: Finite-Time, Functional Weak Asymptotics and Applications. 2025. working paper. [22] E. Gnabeyeu and M. Rosenbaum. On the Microstructural Foundation of the Time-Inhomogeneous Rough Fractional Square-Root Process. 2025. working paper. [23] R. Gorenflo and F. Mainardi. Fractional calculus: Integral and differential equations of fractional order. In A. Carpinteri and F. Mainardi, editors, Fractals and Fractional Calculus in Continuum Mechanics, pages 223–276. Springer Verlag-
, Wien, 1997. [E-print arxiv.org/abs/0805.3823]. [24] Rudolf Gorenflo, Anatoly A. Kilbas, Francesco Mainardi, and Sergei V. Rogosin. Mittag-Leffler Functions, Related Topics and Applications. Springer Monographs in Mathematics. Springer, Berlin, Heidelberg, 2020. [25] Rudolf Gorenflo and Francesco Mainardi. Fractional calculus: integral and differential equations of fractional order. In Fractals and fractional calculus in continuum mechanics (Udine, 1996), volume 378 of CISM Courses and Lect., pag-
es 223–276. Springer, Vienna, 1997.
34

[26] L. De Haan and A. Ferreira. Extreme Value Theory: An Introduction. Springer Science & Business Media, 2006. [27] Steven L. Heston. A closed-form solution for options with stochastic volatility with applications to bond and currency options. The Review of Financial Studies, 6(2):327–343, 1993. [28] Antoine Jacquier, Alexandre Pannier, and Konstantinos Spiliopoulos. On the ergodic behaviour of affine Volterra processes. arXiv e-prints, page arXiv:2204.05270, April 2022. [29] Thibault Jaisson a-
nd Mathieu Rosenbaum. Rough fractional diffusions as scaling limits of nearly unstable heavy tailed Hawkes processes. Ann. Appl. Probab., 26(5):2860–2882, 2016. [30] Benjamin Jourdain and Gilles Page`s. Convex ordering for stochastic Volterra equations and their Euler schemes. arXiv e-prints, pages arXiv:2211.10186, to appear in Fin. & Stoch., November 2022. [31] P. E. Kloeden and E. Platen. Numerical Solution of Stochastic Differential Equations. Springer, 1999. [32] Francesco Mainardi. On some p-
roperties of the Mittag-Leffler function Eα(−tα), completely monotone for t > 0 with 0 < α < 1. Discrete Contin. Dyn. Syst. Ser. B, 19(7):2267–2278, 2014. [33] Francesco Mainardi and Rudolf Gorenflo. Fractional calculus: special functions and applications. In Advanced special functions and applications (Melfi, 1999), volume 1 of Proc. Melfi Sch. Adv. Top. Math. Phys., pages 165–188. Aracne, Rome, 2000. [34] Salah-Eldin A. Mohammed. Stochastic differential systems with memory: Theory, examples and -
applications. Birkh ̈auser Boston, Boston, MA, 1998.
[35] G. Page`s. Numerical Probability: An Introduction with Applications to Finance. Springer, 2018. [36] G. Pag`es. Volterra equations with affine drift: looking for stationarity. application to quadratic rough heston model. 2024. working paper. [37] Gilles Page`s and Fabien. Panloup. Unadjusted langevin algorithm with multiplicative noise: total variation and wasserstein bounds. Ann. Appl. Probab., 33(1):726–779, 2023. [38] E. Pardoux and P. Protter. Stochastic volterra equations with anticipati-
ng coefficients. Ann. Probab., 18(4):1635–1655, 1990. [39] P. E. Protter. Stochastic integration and differential equations. 2005. [40] Philip Protter. Volterra equations driven by semimartingales. Ann. Probab., 13(2):519–530, 1985. [41] Daniel Revuz and Marc Yor. Continuous martingales and Brownian motion, volume 293 of Grundlehren der mathematischen Wissenschaften [Fundamental Principles of Mathematical Sciences]. Springer-Verlag, 1999. [42] Alexandre Richard, Xiaolu Tan, and Fan Yang. Discrete--
time simulation of stochastic Volterra equations. Stochastic Process. Appl., 141:109–138, 2021.
[43] L. C. G. Rogers and David Williams. Diffusions, Markov processes, and martingales. Vol. 2: Itˆo calculus. Cambridge: Cambridge University Press, 2nd ed. edition, 2000. [44] Ren ́e L. Schilling, Renming Song, and Zoran Vondracek. Bernstein Functions, volume 37 of De Gruyter Studies in Mathematics. Walter de Gruyter, Berlin, 2010. [45] Ren ́e L. Schilling, Renming Song, and Zoran Vondraˇcek. Bernstein Functions: Theory and Applications, volume 37 of De Gruyter Studies in Mathematics. De Gruyter-
, Berlin, Boston, 2nd edition, 2012. [46] A. Segall T. Kailath and M. Zakai. Fubini-type theorems for stochastic integrals. Sankhy ̄a: The Indian Journal of Statistics, pages 138–143., 1978.
[47] M. Veraar. The stochastic fubini theorem revisited. Stochastics, 84(4):543–551, 2012. [48] J. B. Walsh. An introduction to stochastic partial differential equations. In P. L. Hennequin, editor, E ́cole d’E ́t ́e de Probabilit ́es de Saint Flour XIV–1984, volume 1180 of Lecture Notes in Mathematics, pages 265–439. Springer, Berlin, 1986. [49] Z. Wang. Existence and uniqueness of solutions to stochastic volterra equations with singular
35

kernels and non-lipschitz coefficients. Statist. Probab. Lett., 78(9):1062–1071, 2008. [50] T. Yamada and S. Watanabe. On the uniqueness of solutions of stochastic differential equations. Journal of Mathematics of Kyoto University, 11(1):155–167, 1971.
[51] Xicheng Zhang. Stochastic Volterra equations in Banach spaces and stochastic partial differential equation. J. Funct. Anal., 258(4):1361–1425, 2010.
A About the Simulation of the semi-integrated scheme for stochastic
Volterra integral Equations (SVIE)
We aim at providing numerical approximation for the equation:
Xt = X0(φ(t) −
Zt
0
fλ(t − s)φ(s) ds) + 1
λ
Zt
0
fλ(t − s)θ(s)ds
| {z }
=:g(t)
+1
λ
Zt
0
fλ(t − s)σ(s, Xs)dWs
| {z }
=:(b)
. (A.61)
We want to provide a more generalized scheme for equations of the type: Xt = g(t) + R t
0 f (t, s) σ(s, Xs)dWs.
Where g(t) can be computed using quadrature formulae on different intervals( Gauss-Legendre, Gauss-Laguerre etc.) We introduce the following Euler-Maruyama scheme for the above equation:
Xtk = g(tk) +
k
X
l=1
Z tl
tl−1
f (tk, s) σ(tl−1, Xtl−1 )dWs = g(tk) +
k
X
l=1
σ(tl−1, Xtl−1 )In,l
k (A.62)
where In,l
k = R tl
tl−1 f (tk, s)dWs on the time grid tk = tn
k = kT
n , k = 0, . . . , n. Due to the lack of
Markovianity, X ̄tn
k is generally not a function of (X ̄tn
k−1 , Wtn
k − Wtn
k−1). However, it can be computed
uniquely from (X ̄0h, . . . , X ̄tn
k−1) and the Gaussian vector R tl
tl−1 f (tn
k , s)dWs l=1,...,k
, ensuring that the
Euler-Maruyama scheme is well-defined by induction. The exact simulation of the Euler-Maruyama
scheme (A.62) involves simulating the independent random vectors: R tn
l+1
tn
l K2(tn
k , s) dWs l≤k≤n
, l=
1, . . . , n. Practitioner’s corner:. We aim at providing all the In,l
k at once.
I n,l
1 I n,l
2 . . . Inn,l
Gn,l
1
Gn,l
2
Gn,l
...3
Gnn,l

        
∆Wtl
R tl
tl−1 f (t1, u)f (t2, u) dWu
R tl
tl−1 f (t1, u)f (t3, u) dWu · · · R tl
tl−1 f (t1, u)f (tn, u) dWu
0 ∆Wtl
R tl
tl−1 f (t2, u)f (t3, u) dWu · · · R tl
tl−1 f (t2, u)f (tn, u) dWu
0 0 ∆Wtl · · · R tl
tl−1 f (t3, u)f (tn, u) dWu
... ... ... . . . ...
0 0 0 · · · ∆Wtl

        
We will rather consider and simulate the n independent Gaussian vectors:
Gn,l =

∆Wtl ,
"
Z tn
l+1
tn
l
f (tn
k , s) dWs
#
k=l,...,n

 = ∆Wtl ,
h
I n,l
k
i
k=l,...,n
, l = 1, . . . , n.
Remark: Note that we consider the Brownian increment in the above vector because, in applications to volatility model dynamics, the dynamics of the traded asset and its volatility process can be jointly driven by the same Brownian motion (see for exemple the quadratic rough volatility dynamic introduced
36

in [20]). This approach takes into account, among other factors, the so-called Zumbach effect, which links the evolution of the asset or an index with its volatility.
The covariance matrix of
h
I n,l
k
i
k=l,...,n
is symmetric and (n − l + 1) × (n − l + 1), given by:
Σn,l =
h
C ov(I n,l
i , In,l
j)
i
l≤i,j≤n
=
"
Z tl
tl−1
f (ti, u)f (tj, u)du
#
l≤i,j≤n
=
"
Z T /n
0
f (tn
i , tn
l + u)f (tn
j , tn
l + u) du
#
l≤i,j≤n
.
The covariance matrix of Gn,l will be symmetric and (n − l + 2) × (n − l + 2) C := Cn+1,1, given by:
C=


T n
t C 0,1
C0,1 Σn,1

 , C0,l =
h
Cov(∆Wtl , In,l
i)
i
l≤i≤n
=
"
Z T /n
0
f (tn
i , tn
l + u) du
#
l≤k,k′ ≤n
l = 1, . . . , n,
At this stage, we can compute any fixed sub-matrix of C by a cubature formula (such as Trapezoid, Midpoint, Simpson, higher-order Newton-Cote, or Gauss-Legendre integration formulas) and then perform a numerically stable extended Cholesky transform. This results in the decomposition: [Cij ]1≤i,j≤n+1 = T (n)D(n)T (n)∗ T (n) lower triangular.
T (n) is a lower triangular matrix with diagonal entries T (n)
ii = 1, and D(n) is a diagonal matrix with non-negative entries. Then, taking advantage of the telescopic feature and the structure of this Cholesky transform one has:
[Cij ]1≤i,j≤n+1−l = [T (n)
ij ]1≤i,j≤n+1−l[D(n)
ij ]1≤i,j≤n+1−l[T (n)
ij ]∗
1≤i,j≤n+1−l, l = 1, . . . , n.
Finally, for each l = 1, . . . , n, we have: (Gn+1,l)l=1,...,n
=d (T ̃(n+1−l)Z(l))l=1,...,n, where
Z(l) ∼ N (0, In−l+2) and T ̃(n+1−l) = [T (n)
ij ]1≤i,j≤n+1−l[
q
D(n)
ij ]1≤i,j≤n+1−l.
Remark: This Cholesky matrix is usually quite sparse (when H is small in the case of fractional kernel for example) since, all entries beyond the fourth column are numerically 0 (in fact smaller than 10−4). This is due to the fact that such singular kernels have essentially no memory for small H. This feature quickly disappears when running the procedure with H > 1/2.
Application in the Fake Stationary case with φ(t) = 1 ∀t ≥ 0. (A.61) can be re-written as follow:
Xt = μ0
λ + (X0 − μ0
λ )Rλ(t) + 1
λ
Zt
0
fλ(t − s)σ(s, Xs)dWs. (A.63)
knowing that μ(s) = μ0 and noting that R t
0 fλ(s)ds = 1 − Rλ(t). Here f (t, s) = 1
λ fλ(t − s). The
Euler-Maruyama scheme (A.62) on the time grid tk = tn
k = kT
n , k = 0, . . . , n, write recursively:
Xtk = μ0
λ + X0 − μ0
λ Rλ(tk) +
k
X
l=1
Z tl
tl−1
fλ(tk − s) ς(tl)
λ σ(Xtl−1 )dWs = g(tk) +
k
X
l=1
ς (tl )
λ σ(Xtl−1 )In,l
k (A.64)
where the integrals In,l
k = R tl
tl−1 fλ(tk − s)dWs k
can be simulated on the discrete grid (tn
k )0≤k≤n by
generating an independent sequence of gaussian vectors Gn,l, l = 1 · · · n using the Cholesky decomposition of the covariance matrix C of these vectors which read (setting u = T
n (l − v), v ∈ [0, 1]):
Σn,l =
h
C ov(I n,l
k , In,l
k′ )
i
l≤k,k′ ≤n
=
"
Z tl
tl−1
fλ(tk − u)fλ(tk′ − u)du
#
l≤k,k′ ≤n
, l = 1, . . . , n,
=T
n
Z1
0
fλ( T
n (k − l + v))fλ( T
n (k′ − l + v))dv
l≤k,k′ ≤n
=T
n Ωn
k−l,k′−l l≤k,k′≤n,
37

where the symmetric matrix Ωn is defined by Ωn :=
h
R1
0 fλ( T
n (i + v))fλ( T
n (j + v))dv
i
i,j≥0
and
Σ0,l =
h
Cov ∆tl , , In,l
k
i
l≤k,k′ ≤n
=
"
Z tl
tl−1
fλ(tk − u) du
#
l≤k,k′ ≤n
= [Rλ(tk − tl) − Rλ(tk − tl−1)]l≤k,k′≤n = T
n
Z1
0
fλ
T
n (k − l + v) dv
l≤k,k′ ≤n
=T
n Ω0
k−l,k′−l l≤k,k′≤n , l = 1, . . . , n. so that C := Cn+1 = T
n


1 Ω0
Ω0 Ωn

.
Remark 1. If the fonction fλ is a monone (case where we replace it mutantis mutandis by the fractional
integration kernel K(u) = K1,α,0(u) = uα−1
Γ(α) , u ∈ [0, T ], where α ∈ (1/2, 1)), we will have the fact that
Cn is a certain power factor of T
n , say Ψ T
n
β, times an infinite symmetric matrix (Γ ̄) (not depending
on n anyway) defined by Γ ̄ :=
h
R1
0 (i + v)(j + v) (α−1)dv
i
i,j≥0
. In this case, the diagonal entries of  ̄Γ
have closed form formular and the matrices of interest [Cij]0≤,i,j≤n−1, n ≥ 1 are telescopic sub-matrices
of Γ ̄ times the factor Ψ T
n
β.
2. For comprehensive results concerning convergence rates and a priori error estimates related to the approximation of the stochastic Volterra process (A.63) by the semi-integrated Euler–Maruyama scheme (A.64), as well as its continuous-time (or “genuine”) extension, the reader is referred to [30].
B Supplementary material and Proofs.
Proof of Proposition 2.4: Convoluting x(t) + λ R t
0 K(t − s)x(s)ds with R′
λ together with the fact
that λK ∗ R′
λ = −λK − R′
λ(see equation 2.9 ), we obtain:
Zt
0
g(s)R′
λ(t − s)ds =
Zt
0
x(s)R′
λ(t − s)ds + λ
Zt
0
Zs
0
K(s − u)x(u)duR′
λ(t − s)ds
=
Zt
0
x(s)R′
λ(t − s)ds + λ
Zt
0
Z t−u
0
K(t − u − s)R′
λ(s)dsx(u)du
=
Zt
0
x(s)R′
λ(t − s)ds +
Zt
0
− λK(t − u) − R′
λ(t − u) x(u)du = −λ
Zt
0
K(t − s)x(s)ds.
Inserting this in the Wiener-Hopf equation gives the results. For the second claim, we can use the Laplace transform in the integral equation and deduced that: Lx(t) = Lh(t)
1+LR′
λ
(t) = Lh(t) 1 + λLK (t) = Lh+λK∗h(t)
where the penultimate equality comes from applying the Laplace transform to R′
λ ∗ K = −K − R′
λ
λ (see Equation (2.9)). We then conclude by the injectivity of the Laplace transform.
Proof of Lemma 3.1. For our convenience, we will consider two cases:
Case 1 (fλ is a probability density). If fλ > 0 on (0, +∞) (i.e. Rλ decreases), then the function fλ is a
probability density. Upon replacing μ with μ
μ∞ , we can assume that μ(t) tends to 1 as t becomes large.
Zt
0
fλ(t − s)μ(s)ds − μ∞(1 − a) =
Zt
0
fλ(t − s)μ(s)ds − μ∞
Z +∞
0
fλ(s) ds
=
Zt
0
fλ(t − s)(μ(s) − μ∞) ds − μ∞
Z +∞
t
fλ(s) ds
38

so that, by the triangle inequality, we have:
Rt
0 fλ(t − s)μ(s)ds − μ∞(1 − a) ≤ R t
0 fλ(t − s) |μ(s) − μ∞| ds + μ∞
R +∞
t fλ(s) ds
First note that we can split the first integral as follows:
Zt
0
fλ(t − s) |μ(s) − μ∞| ds =
Z t−Aε
0
fλ(t − s) |μ(s) − μ∞| ds +
Zt
t−Aε
fλ(t − s) |μ(s) − μ∞| ds
=
Zt
Aε
fλ(s) |μ(t − s) − μ∞| ds +
Z Aε
0
fλ(s) |μ(t − s) − μ∞| ds.
where Aε is chosen such that for all s ≥ Aε, we have |μ(s) − μ∞| ≤ ε. Moreover ∀s ∈]0, Aε[, t − s ≥ t − Aε ≥ Aε for t large enough, (say t ≥ 2Aε), and hence, this implies that |μ(t − s) − μ∞| ≤ ε, ∀s ∈]0, Aε[.
We thus have: R t
0 fλ(t − s) |μ(s) − μ∞| ds ≤ ∥μ − μ∞∥sup
Rt
Aε fλ(s) ds + ε R Aε
0 fλ(s) ds. And hence,
tli→m∞
Zt
0
fλ(t − s)μ(s)ds − μ∞(1 − a) ≤ ∥μ − μ∞∥∞ tli→m∞
Zt
Aε
fλ(s) ds + ε
Z Aε
0
fλ(s) ds
+ μ∞ tli→m∞
Z +∞
t
fλ(s) ds ≤ ε(1 − a) ≤ ε, since
Z∞
0
fλ(s) ds = 1 − a.
Case 2 (fλ is just a 1-sum measure). If R +∞
0 fλ(s) ds = 1 , a more rigorous Approach to prove the
above Lemma make used of Laplace Transforms - and Tauberian Final Value Theorem. Let’s assume the L1-integrability of fλ, i.e., R ∞
0 |fλ(s)|ds < ∞ so that L|fλ|(t) < +∞ for every t > 0: fλ has subsequently
a finite Laplace transform defined (at least) on R+. Since limt→+∞ μ(t) = μ∞, we have by Tauberian Final Value Theorem limz→0 zLμ(z) = μ∞. As the Laplace transform of the convolution is the product of the Laplace transforms, we have:
L
Rt
0 fλ(t − s)μ(s)ds (z) = Lfλ(z)Lμ(z)
Therefore, by Tauberian Final Value Theorem if limt→+∞
Rt
0 fλ(t − s)μ(s)ds exists, then
lim
t→+∞
Zt
0
fλ(t − s)μ(s)ds = zli→m0 zL
Zt
0
fλ(t − s)μ(s)ds (z) = zli→m0 zLμ(z)Lfλ(z) = μ∞ zli→m0 Lfλ(z)
However, by our assumption R ∞
0 fλ(s)ds = 1 − a, we have limz→0 Lfλ(z) = limz→0
R∞
0 e−zsfλ(s)ds =
Lfλ (0) = R ∞
0 fλ(s)ds = 1 − a.
Consequently, we have limt→+∞ φ(t) − (fλ ∗ φ)(t) = φ∞ − φ∞(1 − a) = φ∞ a. This completes the proof.
Proof of Lemma 3.9. Step 1. The equation 3.25 can be expressed in terms of the Laplace transform
as follows: cλ2L1−(φ−fλ∗φ)2 = Lf2
λ Lς2 .
In order to get rid of the Laplace transform of 1 − (φ − fλ ∗ φ)2, we apply integration by parts using (φ − fλ ∗ φ) as the integrator, treating it as a single function:
L1−(φ−fλ∗φ)2 (t) = L1(t) − L(φ−fλ∗φ)2 (t)
=1
t − (φ − fλ ∗ φ)2(0) − limu→+∞ e−tu(φ − fλ ∗ φ)2(u)
t +2
t L(φ−fλ∗φ)(φ−fλ∗φ)′ (t)
= −2
t L(φ−fλ∗φ)(φ−fλ∗φ)′ (t).
Thus, the Laplace counterpart of equation (3.25) simplifies to equation (3.26).
Step 2. The second assertion is straightforward, noting that φ(t) − (fλ ∗ φ)(t) = 1 − (fλ∗μ)t
λx∞ , and
applying the Leibniz rule for differentiating an integral along with the fact that the space (L1(R), +, ·, ∗)
39

is a commutative algebra:
d dt
Zt
0
μ(t − s)fλ(s) ds = μ(t − t)fλ(t) +
Zt
0
∂
∂t (μ(t − s)fλ(s)) ds = μ(0)fλ(t) +
Zt
0
μ′(t − s)fλ(s) ds.
One recognises hereinabove the equation given in the Lemma.
Step 3. If ς1
λ,c and ς2
λ,c are two solutions of the equation (Eλ,c) in (3.25), then f 2
λ ∗ δςλ,c = 0 in L1
loc(R+) with δςλ,c = ς1
λ,c − ς2
λ,c. As Lf2
λ (t) > 0 for t > 0 (by Assumption (K)(ii)), then δg = 0, which
implies δςλ,c = 0 in L1
loc(R+). Thus, the solution ς2
λ,c of Equation (3.25) if any, is unique. We would also note that, c being fixed, Lf2
λ (t) > 0 for t > 0 (by Assumption (K)(ii)). Then Lς2
λ,c is
uniquely determined by (3.26), which in turn implies the uniqueness of ς2
λ,c (at least dt-a.e.).
Step 4. ς2
λ,c is non-negative and has a limit l∞ ∈ (0, +∞] as t → +∞. If l∞ = +∞, then for every
A > 0, there exists tA such that for t ≥ tA, ς2
λ,c(t) ≥ A. Hence
(f 2
λ ∗ ς2
λ,c)(t) = R tA
0 f2
λ(t − s)ς2
λ,c(s) ds + R t
tA f 2
λ(t − s)ς2
λ,c(s) ds ≥ R tA
0 f2
λ(t − s)ς2
λ,c(s) ds + A R t
tA f 2
λ(t − s) ds i.e.
(f 2
λ ∗ ς2
λ,c)(t) ≥
Z tA
0
f2
λ(t − s)ς2
λ,c(s) ds + A
Z t−tA
0
f2
λ(s) ds.
Consequently, as (f 2
λ ∗ ς2
λ,c)(t) = cλ2(1 − (φ − fλ ∗ φ)2(t)) → cλ2(1 − a2φ2∞) as t → +∞ owing to
Lemma 3.1, we have: cλ2(1 − a2φ2∞) = limt→+∞(f 2
λ ∗ ς2
λ,c)(t) ≥ A R +∞
0 f2
λ(u) du. As fλ ∈ L2(R+, Leb1), this yields a contradiction by letting A → ∞. Hence, l∞ < +∞. Now, still by the same arguments, limt→+∞ ς2
λ,c(t) = l∞ ∈ (0, +∞[ =⇒ ∀η > 0, ∃tη ∈ R+ such that ∀t > tη l∞ − η ≤ ς2
λ,c(t) ≤ l∞ + η On the first hand, we have:
(f 2
λ ∗ς2
λ,c)(t) ≥
Z tη
0
f2
λ(t − s)ς2
λ,c(s) ds + (l∞ − η)
Zt
tη
f2
λ(t − s) ds =
Z tη
0
f2
λ(t − s)ς2
λ,c(s) ds + (l∞ − η)
Z t−tη
0
f2
λ(s) ds.
Hence, we obtain:
cλ2(1 − a2φ2∞) = limt→+∞(f 2
λ ∗ ς2
λ,c)(t) ≥ (l∞ − η) R +∞
0 f2
λ (u) du =⇒ l∞ ≤ cλ2(1−a2φ2∞)
R +∞
0 f2
λ(s) ds by letting η → 0.
On the other hand, we also have:
(f 2
λ ∗ς2
λ,c)(t) ≤
Z tη
0
f2
λ(t − s)ς2
λ,c(s) ds + (l∞ + η)
Zt
tη
f2
λ(t − s) ds =
Z tη
0
f2
λ(t − s)ς2
λ,c(s) ds + (l∞ + η)
Z t−tη
0
f2
λ(s) ds.
Therefore, we obtain:
cλ2(1 − a2φ2∞) = limt→+∞(f 2
λ ∗ ς2
λ,c)(t) ≤ (l∞ + η) R +∞
0 f2
λ (u) du =⇒ l∞ ≥ cλ2(1−a2φ2∞)
R +∞
0 f2
λ(s) ds as η → 0.
This completes the proof and we are done. □
Proof of Proposition 3.1. We adapt the proof of the corresponding Proposition in [36] in order to prove the equivalence of the two statements or claims above.
(i) ⇒ (ii) Assume Var(Xt) = Var(X0) = v0 for every t ≥ 0. If v0 = 0, then Xt = x∞ a.s. for every
t ≥ 0. Consequently E σ2(Xt) = E σ2 μ∞
λ which is constant over time anyway. Assume that v0 > 0.
Then, since the constant c is finite, it follows that E[σ2(X0)] > 0. Define the function
g(t) = ς2
λ,c
E[σ2(Xt)]
E[σ2(X0)] − 1 .
We can check using equation (3.22) and (Eλ,c) that this function satisfies the convolution equation f2
λ ∗ g = 0 with the initial condition g(0) = 0. Furthermore, under the assumption that σ has linear
growth, the expectation E[σ2(Xt)] remains bounded due to the boundedness of E[Xt2]. As a consequence,
the function g, along with its positive and negative parts g+ and g−, admits a Laplace transform.
40

Since the Laplace transform of f 2
λ, denoted Lf2
λ , is not identically zero and is strictly positive on
(0, +∞), we obtain:
Lf 2
λ · Lg+ = Lf 2
λ · Lg− .
This implies Lg+ = Lg−, hence g+ = g−, and consequently g = 0. (ii) ⇒ (i) First, we have that
σ ̄02 = σ ̄t2 = E σ2(Xt), t ≥ 0, so that it follows from Equation (3.22) and (Eλ,c).
Var(Xt) = Var(X0)(φ − fλ ∗ φ)2(t) + σ ̄02
λ2 (f 2
λ ∗ ς2
λ,c)(t) = Var(X0)(φ − fλ ∗ φ)2(t) + v0
cλ2 (f 2
λ ∗ ς2
λ,c)(t)
(Eλ,c )
= v0(φ − fλ ∗ φ)2(t) + v0 1 − (φ − fλ ∗ φ)2(t) = v0.
Proof of Proposition 4.3. Using equation (3.2) and owing to (3.21), we have: ∀ t ≥ 0,
Xt − x∞ = X0 − x∞ (φ − fλ ∗ φ)(t) + x∞ (φ − fλ ∗ φ)(t) − 1 + 1
λ (fλ ∗ μ)t + 1
λ fλ
W∗ ς(·)σ(X·)
t
= X0 − x∞ (φ − fλ ∗ φ)(t) + 1
λ
Zt
0
fλ(t − s)ς(s)σ(Xs) dWs.
so that in particular, E Xt −x∞ ≤ |φ(t)−(fλ∗φ)(t)| E X0 −x∞ = 1−(fλ∗ μ
λx∞ )t E X0 −x∞ .
(a) Using elementary computations and Itoˆ’s Isometry show that for every t ≥ 0
E Xt − x∞
2
≤ E (X0 − x∞)(φ(t) − (fλ ∗ φ)(t))
2
+1
λ2
Zt
0
f2
λ(t − s)ς2(s)E σ2(Xs) ds.
Set ρ := c [σ]2
Lip ∈ (0, 1) and let ε in Remark 4.1 be equal to ε = ρ
η where η ∈ (0, 1 − ρ) is a free parameter such that ρ + η ∈ (0, 1). From equation (4.33), The real constants κi, i = 0, 2 depending on
η and given by k0 = k0(η) := (1 + ρ
η )|σ(x∞)|2 and k2 = k2(η) := (1 + η
ρ )[σ]2
Lip so that c κ2 = ρ + η < 1.
Next, we have using equations (4.33) and (3.25) (f 2
λ ∗ ς2 = cλ2(1 − (φ − fλ ∗ φ)2)):
E |Xt − x∞|
2
≤ E |X0 − x∞|
2
(φ − fλ ∗ φ)2(t) + κ0c 1 − (φ − fλ ∗ φ)2(t)
+ κ2
λ2
Zt
0
f2
λ(t − s)ς2(s)E |Xs − x∞|2 ds.
Now let A > A ̄η := κ0c
1−κ2c ∨ E |X0 − x∞|
2
, δ > 0 and tδ = inf
n
t ≥ 0 : E |Xt − x∞|
2
≥A+δ
o
. As
t 7→ E |Xt − x∞|
2
is continuous and A > E |X0 − x∞|
2
it follows from the above inequality and
the identity satisfied by ς 13 that, if tδ < +∞, then E |Xs − x∞|
2
< A + δ ∀s ≤ tδ and we have:
A + δ = E |Xtδ − μ∞
λ|
2
< A(φ − fλ ∗ φ)2(tδ) + κ0c + κ2c(A + δ) 1 − (φ − fλ ∗ φ)2(tδ) . Now, as
κ0c + κ2cA < A by construction of A, we have:
A+δ = E |Xtδ −x∞|
2
< A(φ−fλ ∗φ)2(tδ)+A(1−(φ−fλ ∗φ)2(tδ))+κ2cδ (1−(φ−fλ ∗φ)2(tδ) < A+δ.
As c is so that cκ2 < 1. This yields a contradiction. Consequently, tδ = +∞ which implies that
E |Xt − x∞|
2
≤ A + δ for every t ≥ 0. Letting δ → 0 and A → A ̄η successively, yields
13. f 2
λ ∗ ς2 = cλ2(1 − (φ − fλ ∗ φ)2)
41

supt≥0 E |Xt − x∞|
2
≤ A ̄η = c(1+ ρ
η )|σ(x∞)|2
1−(1+ η
ρ )c[σ]2
Lip
= c|σ(x∞)|2 η+ρ
η(1−ρ−η) .
A straightforward computation shows that η 7→ A ̄η attains its minimum on (0, 1 − ρ) at η = √ρ − ρ. This minimum is given by c
(1−√ρ)2 |σ(x∞)|2 which completes the proof of the stated result.
(b) Let p ≥ 2. Set ρp := c (CBDG
p )2 [σ]2
Lip ∈ (0, 1). Owing to the triangle inequality and applying the
BDG inequality to the (a priori) local martingale Mu = R u
0 fλ(t − s)ς(s)σ(Xs)dWs, 0 ≤ s ≤ t, (see [41, Proposition 4.3]) follow by the generalized Minkowski inequality, we get:
|Xt − x∞|
p
≤ |X0 − x∞|
p
φ(t) − (fλ ∗ φ)(t) + CBDG
p
λ f2
λ
d∗t ς2(·)|σ(X·)|2
t
1 2
p 2
≤ |X0 − x∞|
p
φ(t) − (fλ ∗ φ)(t) + CBDG
p
λ
Zt
0
f2
λ(t − s)ς2(s) |σ(Xs)|2 p
2
1
2.
Owing to the elementary inequality (a + b)2 ≤ (1 + 1
ε )a2 + (1 + ε)b2 ∀ε ∈ (0, 1/ρp − 1), it follows that:
|Xt − x∞|
2
p
≤ |X0 − x∞|
2
p
φ(t) − (fλ ∗ φ)(t)
2
(1 + 1/ε) + (CBDG
p )2
λ2 (1 + ε)
Zt
0
f2
λ(t − s)ς2(s)∥|σ(Xs)|2∥ p
2 ds
Likewise, set ρep := c (CBDG
p )2 [σ]2
Lip(1 + ε) = ρp(1 + ε) ∈ (0, 1) and let ε in Remark 4.1 be equal
to ρep
η where η ∈ (0, 1 − ρep) is a free parameter such that ρep + η ∈ (0, 1). From equation (4.33),
The real constants κi, i = 0, 2 depending on η are given by k0 = k0(η) := (1 + ρep
η )|σ(x∞)|2 and
k2 = k2(η) := (1 + η
ρep )[σ]2
Lip so that c (CBDG
p )2 (1 + ε) κ2 = ρep + η < 1. As p
2 ≥ 1, according
to the remark 4.1, |σ(Xs)|2
p 2
≤ κ0 + κ2 |Xs − x∞|
2
p
which entails, combined with the identity
f2
λ ∗ ς2 = cλ2(1 − (φ − fλ ∗ φ)2), that, for every t ≥ 0,
|Xt − x∞|
2
p
≤ |X0 − x∞|
2
p
φ(t) − (fλ ∗ φ)(t)
2
(1 + 1
ε)
+ (CBDG
p )2(1 + ε) κ0c 1 − (φ − fλ ∗ φ)2(t) + κ2
λ2
Zt
0
f2
λ(t − s)ς2(s) |Xs − x∞|
2
p
ds . (B.65)
Now let A > A ̄η,ε := κ0c(CBDG
p )2(1+ε) 1−κ2 c(C B DG
p )2(1+ε) ∨
h
(1 + 1/ε) |X0 − x∞|
2
p
i
, δ > 0 and tδ = inf
n
t≥0:
|Xt − x∞|
2
p
≥ A+δ
o
. If tδ < +∞, then, on the one hand, it follows from the continuity of t 7→
|Xt −x∞|
2
p
that A+δ = |Xtδ −x∞|
2
p
and, on the other hand, from Equation (3.25) satisfied by ς, that
Rt
0 f2
λ(t − s)ς2(s) |Xs − x∞|
2
p
ds ≤ Acλ2(1 − (φ − fλ ∗ φ)2(t)). Moreover, since A > ∥X0 − x∞∥2
p (1 + 1
ε ),
we deduce from (B.65) the inequalities:
A + δ = |Xtδ − x∞|
2
p
< A(φ − fλ ∗ φ)2(tδ) + (CBDG
p )2(1 + ε) κ0c + κ2c(A + δ) 1 − (φ − fλ ∗ φ)2(tδ)
< A(φ − fλ ∗ φ)2(tδ) + A(1 − (φ − fλ ∗ φ)2(tδ)) + (CBDG
p )2(1 + ε)cκ2δ (1 − (φ − fλ ∗ φ)2(tδ)
< A + δ (1 − (φ − fλ ∗ φ)2(tδ) < A + δ.
Here, the second inequality uses the bound (CBDG
p )2(1 + ε) c (κ0 + κ2A) < A which holds by the very
definition of A, while the penultimate inequality follows from the assumption that (CBDG
p )2(1+ε)cκ2 < 1.
42

This yields a contradiction. Consequently, tδ = +∞ which implies that |Xtδ − x∞|
2
p
≤ A + δ for every
t ≥ 0. Letting δ → 0 and A → A ̄η,ε successively, yields
supt≥0 |Xt − x∞|
p
≤ A ̄
1
η2,ε = ρep
[σ]2
Lip
|σ(x∞)|2 η+ρep
η(1−ρep−η)
1 2
< +∞.
A straightforward computation shows that the mapping η 7→ A ̄η,η attains its minimum on the interval
(0, 1−ρep) at η = p
ρep−ρep, this minimum being ρep
[σ]2
Lip(1−√
ρep)2 σ(x∞) 2 = c(CBDG
p )2(1+ε)
(1−[σ]Lip
√c(C B DG
p )2(1+ε))2 σ(x∞) 2,
which completes the proof. The stated results follows by setting CBDG
p = 2√p owing to Lemma 4.2.□
Proof of Theorem 4.6. It follows from (4.41) that either p = 2 and c < 1
κ2 , or p > 2 and c < 1
(C B DG
p )2κ2 .
Hence, Proposition 4.3 implies that supt≥0 |Xt − x∞|
p
< +∞. As a consequence of σ having at most
affine growth, we derive that supt≥0 |σ(Xt)|
p
< +∞.
Step 1. (Kolmogorov criterion). Now, we can establish C-tightness by the Kolmogorov criterion. Let p be given by (4.41). One writes for s, t ≥ 0 with s ≤ t and owing to equation 3.14:
Xt − Xs = (φ − fλ ∗ φ)(t) − (φ − fλ ∗ φ)(s) X0 + 1
λ J(t) − J(s) + I(t) − I(s) .
Where we set: J(t) := R t
0 fλ(t − u)ς(u)σ(Xu)dWu and I(t) = R t
0 fλ(t − u)μ(u) du. On the first hand,
(fα,λ ∗ φ)(t) − (fα,λ ∗ φ)(s) =
Zs
0
[fα,λ(t − u) − fα,λ(s − u)] φ(u) du +
Zt
s
fα,λ(t − u)φ(u) du
≤ sup
u≥0
|φ(u)|
Zs
0
| (fα,λ(t − u) − fα,λ(s − u)) |du +
Zt
s
|fα,λ(t − u)|du
!
.
Consequently, we obtain the following bound:
| (φ − fλ ∗ φ)(t) − (φ − fλ ∗ φ)(s) X0|
p
= |X0|
p
| |(fα,λ ∗ φ)(s) − (fα,λ ∗ φ)(t)| + |φ(t) − φ(s)|
≤ |X0|
p
∥φ∥∞ C |t − s|θ +
Z +∞
0
f 2β
α,λ(u)du
1 2β
|t − s|1− 1
2β
!
+ C′
p 1 + ∥φ∥∞ ∥|X0|∥p |t − s|δ
≤ Cp,X0,φ,β,fλ |t − s|θ(1− 1
2β )∧δ .
where the penultimate inequality come from assumption 2.2 (iii). Next, by using generalized Minkowski inequalities, one gets similarly:
|I(t) − I(s)|
p
≤|
Zt
s
fλ(t − u)μ(u) du|
p
+|
Zs
0
(fλ(t − u) − fλ(s − u)) μ(u) du|
p
≤ sup
u≥0
|μ(u)| ×
Zt
s
|fλ(t − u)| du +
Zs
0
| (fλ(t − u) − fλ(s − u)) | du
!
≤ ∥μ∥∞ ×
Z +∞
0
f 2β
λ (u)du
1
2β (t − s)1− 1
2β +
Zs
0
|fλ(t − u) − fλ(s − u)| du
!
≤ Cp,μ,fλ |t − s|(θ∧(1− 1
2β )).
On the other hand, combining the Lp-BDG and the generalized Minkowski inequality, one derives from (4.41) that,
43

|J(t) − J(s)|
p
≤|
Zt
s
fλ(t − u)ς(u)σ(Xu)dWu|
p
+|
Zs
0
(fλ(t − u) − fλ(s − u)) ς(u)σ(Xu)dWu|
p
≤ Cp∥ς2∥∞
Zt
s
f2
α,λ(t − u) |σ(Xu)| 2
pdu
1
2+
Zs
0
fα,λ(t − u) − fα,λ(s − u) 2 |σ(Xu)| 2
pdu
1 2
≤ Cp∥ς2∥∞ sup
u≥0
|σ(Xu)|
p
"
Z +∞
0
f 2β
α,λ(u)du
1
2β |t − s| β−1
2β +
Z +∞
0
fα,λ(t − s + u) − fα,λ(u) 2du
1 2
#
≤ Cp,ς,fλ · 1 + ∥φ∥T |X0|
p
|t − s|θ∧ β−1
2β := Cp,T,σ,ς,fλ,X0 · |t − s|θ∧ β−1
2β where Cp ≡ CBDG
p.
Finally, putting all these estimates together, since β−1
2β ≤ 1 − 1
2β we have the existence of a real constant
Cp,X0,φ,β,λ,fλ > 0 such that:
E (|Xt − Xs|)p ≤ Cp,X0,φ,β,λ,fλ |t − s|p(δ∧θ∧ β−1
2β )
Define for u ≥ 0 the process Xu by Xtu = Xt+u, where t ≥ 0. Then Xu has continuous sample paths
and satisfies supu≥0 E[|Xtu − Xsu|p] ≤ C(p)|t − s|p(δ∧θ∧ β−1
2β ) for 0 ≤ t − s ≤ 1.
As p(δ ∧ θ ∧ β−1
2β ) > 1 according to equation (4.41), it follows from Kolmogorov’s C-tightness criterion
(see [41, Theorem 2.1, p. 26, 3rd edition] 14 or [43, Lemma 44.4, Section IV.44, p.100]), that the family of shifted processes Xt+·, t ≥ 0, is C-tight i.e. (Xu)u≥0 is tight on C(R+; R) (hence the existence of a weak continuous accumulation point thanks to Prokhorov’s theorem) with limiting distributions P under which the canonical process has the announced Ho ̈lder pathwise regularity. Therefore, we conclude that along a sequence uk ↑ ∞, the process Xuk converges in law to some continuous process -
X∞. An application of Fatou’s lemma shows that any limiting process (resp. the limit distribution) has a finite moment of any order, i.e., ∀t > 0, E[|Xt∞|p] ≤ supu≥0 E[|Xu|p] < ∞. For the first moment formula, we note using equation (3.17) and Lemma 3.1 that
E[Xt] −→ aφ∞E[X0] + (1 − a) μ∞
λ as t → ∞.
Since supt≥0 E[|Xt|2] < ∞, we easily conclude that limt→∞ E[Xt] = E[Xt∞].
Step 3. (b) Asymptotic weak stationarity. Now let us consider the asymptotic covariance between
Xt+t1 and Xt+t2 , 0 < t1 < t2 when Xt starts for X0 with mean μ∞
λ , variance v0 and σ ̄2 = E σ(Xt)2,
t ≥ 0 constant over time. Using Cov(aU + b, cV + d) = ac Cov(U, V ) and equation (3.14), we have:
Cov(Xt+t1 , Xt+t2 ) = Var(X0) ((φ − fλ ∗ φ)(t + t1)) ((φ − fλ ∗ φ)(t + t2))
+1
λ2 E
Z t+t1
0
fλ(t + t2 − s)fλ(t + t1 − s)ς2(s)σ2(Xs)ds
= Var(X0) ((φ − fλ ∗ φ)(t + t1)) ((φ − fλ ∗ φ)(t + t2)) + σ ̄2
λ2
Z t+t1
0
fλ(t2 − t1 + u)fλ(u)ς2(t + t1 − u)du.
As fλ(t2 − t1 + ·)fλ ∈ L2(Leb1) since fλ ∈ L2(Leb1) , 1{0≤u≤t+t1}ς2(t + t1 − u) → cλ2(1−a2φ2∞)
R +∞
0 f2
λ(s)ds for every
u ∈ R+ as t → +∞ (owing to Lemma 3.9) and limt→+∞(φ − fλ ∗ φ)(t) = aφ∞, v0 = cσ ̄2, we have:
Cov(Xt+t1 , Xt+t2 ) t→+∞
−→ a2φ2∞Var(X0) + cσ ̄2(1−a2φ2∞)
R +∞
0 f2
λ (s)ds
R +∞
0 fλ(t2 − t1 + u)fλ(u)du =: Cfλ(t1, t2).
The confluence result follows from the Remark (2) in Proposition 4.4 with φ ̄∞(t) = supu≥t φ∞(u). Let X
and X′ be two solutions of Equation (3.14) starting from X0 and X′0 respectively, both square integrable.
14. If a process X taking values in a Polish space (S, ρ) satisfies E[ρ(Xs, Xt)α] ≤ c|s − t|β+d for some constants α, β, c > 0 and all s, t ∈ R, then X admits a continuous modification whose paths are Ho ̈lder continuous of any order γ ∈ (0, β
α ).
44

Using the Remark (2) in Proposition 4.4, we derive that for every 0 ≤ t1 < t2 < · · · < tN < +∞ W2 [(Xt+t1 , · · · , Xt+tN )], [(Xt′+t1 , · · · , Xt′+tN )]) → 0 as t → +∞.
As a consequence, the weak limiting distributions of [Xt+·] and [Xt′+·] are the same in the sense
that, if [Xtn+·] (C)
−→ P for some subsequence tn → +∞ (where P is a probability measure on C(R+, R)
equipped with the Borel σ-field induced by the sup-norm topology), then [Xt′n+·] (C)w
−→ P and conversely.
Step 4. (c) Stationary Gausian case. This result stems first from the fact that (Xt)t≥0 is a Gaussian process, implying that its limiting distributions in the functional weak sense are also Gaussian. Secondly, a Gaussian process is completely characterized by its mean and covariance functions. In fact, when σ(x) = σ > 0 ∀x ∈ R and X0 follows a Gaussian distribution, the process X is Gaussian, which implies (at least for finite-dimensional weak convergence, i.e., weak convergence of all marginals
of any order) that,(Xt+·) (C)
−→ GP(fλ) as t → +∞, where GP(fλ) is a Gaussian process with mean x∞ and covariance function given above. 2
Lemma B.1 (Expansions). We have the following inequalities:
1. 0 ≤ 1 − e−v ≤ (1 − e−v)θ ≤ vθ, for every v ≥ 0, and θ ∈ (0, 1].
2. sin(v) ≤ vθ, for every v ≥ 0, and θ ∈ (0, 1].
Proof. The claim (1) is straightforward since θ ∈ (0, 1), while for the second claim, we have: — if 0 ≤ v ≤ 1, then sin(v) ≤ v ≤ vθ, for every θ ∈ (0, 1]. — if v ≥ 1, then vθ ≥ 1 ≥ sin(v), for every θ ∈ (0, 1].
Proof of Proposition 5.1: Step 1. As ∀α ∈ R \ N , (−1)⌊α⌋ sin(απ) > 0, we have the inequality:
u2α + 2uα cos(πα) + 1 ≥ 1 − cos2(απ) = sin2(απ) > 0 (or ≥ (uα − 1)2 > 0). (B.66)
i.e., (−1)⌊α⌋Hα(u) is non-negative for all u in the integral 5.46. Therefore, (−1)⌊α⌋Fα(t) is the Laplace transform of a non-negative Lebesgue integrable function (−1)⌊α⌋Hα : R+ → R+, and, by the ”Bernstein theorem”, (−1)⌊α⌋Fα(t) is completely monotone (CM) in the real line,in the sense that
(−1)n(−1)⌊α⌋F (n)
α (t) ≥ 0 at every order n ≥ 0. However, the CM property of (−1)⌊α⌋Fα(t) can also be seen as a consequence of the result by Pollard [45] because the transformation x = tα is a Bernstein function for α ∈ (0, 1).
Step 2. Moreover as Hα is continuous on (0, +∞), Hα(u) ∼0 uα−1 sin(πα)
π and Hα(u) +∼∞ sin(πα)
πuα+1 .
It is clear that Hα ∈ L1
R+(Leb1) and that both functions u 7→ uHα(u) and u 7→ uα+1Hα(u) are bounded
on R+. Thus, for every t > 0, R +∞
0 e−tuuHα(u)du < +∞ so that owing to a Lebesgue-type condition for differentiation under the integral sign, Fα is differentiable on (0, +∞) with
F′
α(t) = −
Z +∞
0
e−tuuHα(u)du, t > 0. (B.67)
The same rule applied k times shows that Fα is Ck for k ∈ N, hence is infinitely differentiable and
F (k)
α (t) =
Z +∞
0
e−tuH (k)
α (u) du with H(k)
α (u) := (−1)kukHα(u) = (−1)k sin(απ)
π
uα−1+k
u2α + 2uα cos(απ) + 1 . (B.68)
Gα(t) is infinitely differentiable(Ck for k ∈ N) as product of such functions and by recurrence, we have:
∀k ∈ N, G(k)
α (t) = 2
α
⌊ α−1
2⌋
X
n=0
exp t cos (2n + 1)π
α cos t sin (2n + 1)π
α − k(2n + 1)π
α . (B.69)
45

Claim (b) follows from the fact that Rα,λ = eα(λ1/α·) = Rα,1(λ1/α·), hence infinitely differentiable on (0, +∞) from B.68 and B.69. The representation of fα,λ follows from B.67 and B.69.
It follows from (5.47) and (B.66) that Hα(u) ≤ uα−1 sin(πα)
π sin2(πα) = uα−1
π sin(πα) . Hence, for every t ≥ 0,
Rα,1(t) = eα(t) = Fα(t) + Gα(t) < 1
π sin(πα)
Z +∞
0
e−tuuα−1du + 2
α
⌊ α−1
2⌋
X
n=0
exp t cos (2n + 1)π
α
≤ Γ(α)
π sin(πα) t−α + 2
α
⌊ α−1
2⌋
X
n=0
exp t cos (2n + 1)π
α ≤ Γ(α)
π sin(πα) t−α + ⌊α + 1⌋
α et cos( π
α)
where the last inequality comes from the fact that cos(x) is non-increasing on [0, π] so that Rα,1 ∈ Lγ(Leb1) for every γ > 1
α where α is such that cos π
α < 0 i.e. α ∈ (0, 2] . This extends to
Rλ,α by scaling. For the L2β-integrability of fα,λ, once noted that fα,λ = λ1/αfα,1(λ1/α·) so that
R +∞
0 f 2β
α,λ(t)dt = λ 2β−1
α
R +∞
0 f 2β
α,1(t)dt, it is clear that it is enough to prove that fα,1 is L2β-integrable.
By the same argument as above, it follows from (B.67) and (B.69) that for every t > 0
fα,1(t) < 1
π sin(πα)
Z +∞
0
e−tuuαdu − 2
α
⌊ α−1
2⌋
X
n=0
exp t cos (2n + 1)π
α ≤ Γ(α + 1)
tα+1π sin(πα) − ⌊α + 1⌋
α et cos( π
α ).
Thus fα,1 ∈ L2β([1, +∞), Leb1) ∀β > 0 provided that cos π
α < 0 i.e. α ∈ (0, 2). On the other
hand fα,λ(t) = −R′
α,λ(t) = αλtα−1E′α(−λtα) = λtα−1 P
k≥0(−1)kλk tαk
Γ(α(k+1)) so that fα,1(t) ∼0 tα−1
Γ(α) . As
t 7→ 1
t1−α ∈ L2β((0, 1], Leb1) for any β ∈ 1
2(1−α) , +∞ , we conclude that fα,1 ∈ L2β(Leb1) ∀β > 0
provided that cos π
α < 0 i.e. α ∈ (0, 2).
Step 3. As for the L2(R+)-θ-H ̈older continuity of fα,λ, one may again assume w.l.g. that λ = 1. Let δ > 0. One has
fα,1(t+δ)−fα,1(t) = (F ′
α(t) − F ′
α(t + δ))+(G′
α(t) − G′
α(t + δ)) = (F ′
α(t) − F ′
α(t + δ))+
⌊ α−1
2⌋
X
n=0
(G′n
α (t) − G′n
α (t + δ))
However, bearing in mind that 0 ≤ π
α ≤ (2n+1)π
α ≤ π for α ∈ R+ \ N and 0 ≤ n ≤ ⌊ α−1
2 ⌋ , we have:
G′n
α (t) − G′n
α (t + δ) =
2
α et cos( (2n+1)π
α ) cos t sin (2n + 1)π
α − (2n + 1)π
α − eδ cos( (2n+1)π
α ) cos (t + δ) sin (2n + 1)π
α − (2n + 1)π
α
=2
α et cos( (2n+1)π
α ) cos t sin (2n + 1)π
α − (2n + 1)π
α − cos (t + δ) sin (2n + 1)π
α − (2n + 1)π
α
!
+ 1 − eδ cos( (2n+1)π
α ) cos (t + δ) sin (2n + 1)π
α − (2n + 1)π
α
≤2
α et cos( (2n+1)π
α ) 2 sin δ
2 sin (2n + 1)π
α sin −(t + δ
2 ) sin (2n + 1)π
α + (2n + 1)π
α + (1 − eδ cos( (2n+1)π
α ))
≤2
α et cos( (2n+1)π
α ) 2 sin δ
2 sin (2n + 1)π
α + (1 − eδ cos( (2n+1)π
α ))
≤2
α et cos( π
α) 2 δ
2π
θ
+ (1 − e−δ)
!
≤2
α et cos( π
α ) 21−θπθδθ + δθ = 2
α et cos( π
α ) 21−θπθ + 1 δθ.
46

The penultimate inequality follows from the fact that 0 ≤ π
α ≤ (2n+1)π
α ≤ π, which leads to two key
observations. On one hand, we have 1 − eδ cos (2n+1)π
α ≤ 1 − e−δ, and on the other hand, by applying Lemma B.1 (2), we obtain the following inequality:
sin
hδ
2 sin (2n+1)π
α
i
≤δ
2 sin (2n+1)π
α
θ
≤δ
2
(2n+1)π α
θ
≤δ
2π θ .
Where the final inequality follows from Lemma B.1 (1). Consequently, H ̈older regularity with exponent θ for the function fα,λ can be achieved provided that cos π
α < 0, i.e., α ∈ (0, 2).
Now, about the α-fractional kernels with 1 < α < 2, it follows from Proposition5.1, (see also [23]) that:
eα(t) = Fα(t) + Gα(t) = R +∞
0 e−tuHα(u) du + 2
α et cos( π
α ) cos t sin π
α , 1 < α < 2, t ≥ 0.
Note that, in this case (1 < α < 2), the function Hα(u) is negative for all u (and thus -F is completely monotone and hence infinitely differentiable on R+
+) since 1 < α < 2 implies sin(απ) < 0 and we have
the following inequality: u2α + 2uα cos(πα) + 1 ≥ 1 − cos2(απ) = sin2(απ) > 0 (or ≥ (uα − 1)2 > 0). □
Proof of Proposition 5.2. (a) follows from the first claim of Proposition 5.1 since Rα,λ = eα(λ1/α·) = Rα,1(λ1/α·), hence infinitely differentiable on (0, +∞) from B.68 and B.69. All will extend to Rα,λ by
scaling. It follows from (5.47) and (B.66) that Hα(u) ≤ uα−1 sin(πα)
π sin2(πα) = uα−1
π sin(πα) . Hence, for every t ≥ 0,
Rα,1(t) = eα(t) = Fα(t)+Gα(t) ≤ 1
π sin(πα)
Z +∞
0
e−tuuα−1du+ 2
α et cos( π
α ) = Γ(α)
π sin(πα) t−α+ 2
α et cos( π
α ).
so that Rα,1 ∈ Lγ(Leb1) for every γ > 1
α as cos π
α < 0, ∀ α ∈ (1, 2) and in particular Rα,1(t) ≤ 1 ∀t ≥ 0 since sin(πα) ≤ 0 . The representation of fα,λ in (b) follows from (B.67) and (5.49).
(c) Let us prove the L2β-integrability of fα,λ. Once noted that fα,λ = λ1/αfα,1(λ1/α·) so that
R +∞
0 f 2β
α,λ(t)dt = λ 2β−1
α
R +∞
0 f 2β
α,1(t)dt, it is clear that it is enough to prove that fα,1 is L2β-integrable.
It follows from (B.67) and (5.49) that for every t > 0,
fα,1(t) = −e′
α(t) = −F ′
α(t)−G′
α(t) ≤ 1
π sin(πα)
Z +∞
0
e−tuuαdu+ 2
α et cos( π
α ) = Γ(α + 1)
tα+1π sin(πα) + 2
α et cos( π
α ).
Thus fα,1 ∈ L2β([1, +∞), Leb1) ∀β > 0. On the other hand fα,λ(t) = λtα−1 P
k≥0(−1)kλk tαk
Γ(α(k+1)) so
that fα,1(t) 0∼ tα−1
Γ(α) . As t 7→ 1
t1−α ∈ L2β((0, 1], Leb1) for any β ∈ 1
2(1−α) , +∞ ∩ R∗+ = R∗+, we conclude
that fα,1 ∈ L2β(Leb1) ∀β > 0 and in particular ∀β > 1. Another consequence is that, for every t ≥ 1,
Rα,1(t) = eα(t) = R +∞
t fα,1(s) ds ≤ C′α t−α + C′α′ et cos( π
α ), so that Rα,1 ∈ L2(Leb1).
As for the L2(R+)-θ-H ̈older continuity of fα,λ, one may again assume w.l.g. that λ = 1. Let
δ > 0. One has fα,1(t + δ) − fα,1(t) = (F ′α(t) − F ′α(t + δ)) + (G′α(t) − G′α(t + δ)) and following the same
reasoning as above while bearing in mind that cos π
α ≤ 0, sin π
α ≥ 0 for α ∈ (1, 2), we have:
G′
α(t) − G′
α(t + δ) = 2
α et cos( π
α ) cos
h
t sin π
α −π
α
i
− eδ cos( π
α ) cos
h
(t + δ) sin π
α −π
α
i
=2
α et cos( π
α ) (cos
h
t sin π
α −π
α
i
− cos
h
(t + δ) sin π
α −π
α
i
) + (1 − eδ cos( π
α )) cos
h
(t + δ) sin π
α −π
α
i
≤2
α et cos( π
α ) 2 sin δ
2 sin π
α sin −(t + δ
2 ) sin π
α +π
α + (1 − eδ cos( π
α ))
≤2
α et cos( π
α ) 2 sin δ
2 sin π
α + (1 − eδ cos( π
α)) ≤ 2
α et cos( π
α) 2 δ
2
π α
θ
+ (1 − e−δ)
!
≤2
α et cos( π
α ) 21−θ( π
α )θδθ + δθ = 2
α et cos( π
α ) 21−θ( π
α )θ + 1 δθ.
47

Where the penultimate inequality follows from the fact that π
2≤π
α ≤ π, so that 1 − eδ cos( π
α ) ≤ 1 − e−δ,
and sin δ
2 sin π
α ≤δ
2 sin π
α
θ≤ δ
2
π α
θ owing to Lemma B.1 (2). The final inequality follows
from Lemma B.1 (1). Moreover, for the term F ′α(t) − F ′α(t + δ) := R +∞
0 e−tu(1 − e−δu)uHα(u)du, we may write
F ′α(t) − F ′α(t + δ) ≤ R +∞
0 e−tu(1 − e−δu)θuHα(u)du ≤ R +∞
0 e−tuδθu1+θHα(u)du.
1. Owing to Fubini-Tonelli’s theorem in the first line to interwind the order of integration, we have:
R +∞
0 F ′α(t + δ) − F ′α(t) dt ≤ R
(0,+∞)u1+θHα(u) R +∞
0 e−tudt du δθ =
h R
(0,+∞)uθHα(u) du
i
δθ and
Z +∞
0
G′
α(t) − G′
α(t + δ) dt ≤ 2
α 21−θ( π
α )θ + 1 δθ
Z +∞
0
et cos( π
α )dt =
"
−2
α cos π
α
21−θ( π
α )θ + 1
#
δθ.
It follows that, R +∞
0 fα,1(t + δ) − fα,1(t) dt ≤
h R
R+uθHα(u) du + 2
α 21−θ( π
α )θ + 1
i
δθ.
Now, we derive form (5.47) that: Hα(u) ∼0 sin(πα)
π uα−1 and Hα(u) +∼∞ sin(πα)
π u−(α+1). Consequently
uθHα(u) 0∼ sin(πα)
π uα−1+θ and uθHα(u) +∼∞ sin(πα)
π u−(1+α−θ),
which implies that R
(0,+∞)uθHα(u) du < +∞ if and only if 2 − α < θ < α.
2. Secondly, as: (fα,1(t + δ) − fα,1(t))2 ≤ 2 ((F ′α(t) − F ′α(t + δ)))2 + 2 ((G′α(t) − G′α(t + δ)))2 with:
Z +∞
0
F′
α(t + δ) − F ′
α(t) 2dt ≤
Z +∞
0
Z +∞
0
e−tuδθu1+θHα(u)du
Z +∞
0
e−tv δ θ v1+θ Hα (v)dv
≤
Z
(0,+∞)2
(uv)1+θHα(u)Hα(v)
Z +∞
0
e−t(u+v)dt du dv δ2θ =
Z
(0,+∞)2
(uv)1+θ
u + v Hα(u)Hα(v) du dv δ2θ
≤1
2
Z
(0,+∞)2
(uv) 1
2 +θHα(u)Hα(v) du dv δ2θ = 1
2
" Z
(0,+∞)
u
1
2 +θHα(u) du
#
δ2θ.
where we used Fubini-Tonelli’s theorem in the first line to interwind the order of integration and the
elementary inequality √uv ≤ 1
2 (u + v) when u, v ≥ 0 in the penultimate line. Furthermore,
Z +∞
0
G′
α(t+δ)−G′
α(t) 2dt ≤ 4
α2 21−θ( π
α )θ + 1 δθ 2 Z +∞
0
e2t cos( π
α )dt =
"
−2
α2 cos π
α
21−θ( π
α )θ + 1
2
#
δ2θ.
It follows that , R +∞
0 fα,1(t + δ) − fα,1(t) 2dt ≤
h R
R+u 1
2 +θHα(u) du + 4
α2 21−θ( π
α )θ + 1 2i
δ2θ.
Now, we derive form (5.47) that: Hα(u) ∼0 sin(πα)
π uα−1 and Hα(u) +∼∞ sin(πα)
π u−(α+1), Consequently
u1
2 +θHα(u) 0∼ sin(πα)
π uα− 1
2 +θ and u 1
2 +θHα(u) +∼∞ sin(πα)
π u−(− 1
2 +α−θ),
which implies that R
R+u 1
2 +θHα(u) du < +∞ iff θ < α − 1
2 . One concludes when λ > 0 by scaling. 2
Lemma B.2. Let α ∈ (1, 3
2 ). For every k ≥ 1,
1. ∀l ≥ 1 ∀a ≥ 1, B(αl, α(k − l + a)) ≥ 1
(α(k+a)−1)2αk+2(a−1) ≥ 1
α(k+a)2αk+2(a−1) .
2. (a ∗ b)k ≤ 2αk
Γ(α(k+1)) (1 + (k + 1)(1 + log k)) .
3. (b∗2)k ≤ (α(k+2)−1)(k+1)2αk+2
Γ(α(k+2)) .
48

Proof. 1.∀l ≥ 1 ∀a ≥ 1, we have:
B(αl, α(k − l + a)) =
Z1
0
uαl−1 (1 − u)α(k−l+a)−1 du ≥
Z1
2
0
uα(k+a)−2 du +
Z1
1 2
(1 − u)α(k+a)−2 du
=2
Z1
2
0
uα(k+a)−2 du ≥ 1
(α(k + a) − 1)2α(k+a)−2 ≥ 1
(α(k + a) − 1)2αk+2(a−1) .
Where the last inequality comes from the fact that α < 2. 2. Using the identity : ∀a, b > 0 Γ(a + 1) = aΓ(a), B(a, b) := Γ(a)Γ(b)
Γ(a+b) , we have for every k ≥ 1
(a ∗ b)k =
k
X
l=0
1
Γ(αl + 1)Γ(α(k − l + 1)) = 1
Γ(1)Γ(α(k + 1)) +
k
X
l=1
1
αlΓ(αl)Γ(α(k − l + 1))
=1
Γ(α(k + 1))
"
1+ 1
α
k
X
l=1
1 l
1
B(αl, α(k − l + 1))
#
≤ 2αk
Γ(α(k + 1)) (1 + (k + 1)(1 + log k)) .
where the last inequality comes from Lemma B.2(1) for a = 1 and the fact that 1
2α ≤ 1. 3. Likewise,
(b∗2)k =
k
X
l=0
1
Γ(α(l + 1))Γ(α(k − l + 1)) = 1
Γ(α(k + 2))
k
X
l=0
1
B(α(l + 1), α(k − l + 1))
≤ (α(k + 2) − 1)(k + 1)
Γ(α(k + 2)) 2αk+2.
Still owing to Lemma B.2 (1), now for a = 2. 2
Proof of Proposition 5.2. Step 1. (1) comes from equation (5.51) and Lemma 3.9 (4).
Step 2. To establish statement (2), following the approach in [36], it is useful (though not strictly necessary) to transition to Laplace transforms. For simplicity, and as indicated in remark (5.53), we assume c = λ = 1 and proceed by rewriting the series expansions in (5.50). We define Rα := Rα,1 and fα := fα,1, as follows:
Rα(t) =
X
k≥0
(−1)kaktαk, fα(t) = tα−1 X
k≥0
(−1)kbktαk with ak = 1
Γ(αk + 1) , bk = 1
Γ(α(k + 1)) , k ≥ 0.
Now, using the Cauchy product of two series 15 and the fact that Luγ (t) = t−(γ+1)Γ(γ + 1), we obtain
the following Laplace transforms: LRαfα(t) = t−α P
k≥0(−1)k(a ∗ b)kt−αkΓ(α(k + 1)) and
Lfα2 (t) = t−2α+1 P
k≥0(−1)k(b∗2)kt−αkΓ(α(k + 2) − 1), where for two sequences of real numbers (uk)k≥0
and (vk)k≥0, the Cauchy product is defined as (u ∗ v)k = Pk
l=0 ulvk−l. We define the sequences
bek = (b∗2)kΓ(α(k + 2) − 1) and cek = ckΓ(α(k − 1) + 2), k ≥ 0.
Assuming that ςα2(t) (for c = λ = 1) takes the expected form (5.53), we have:
Lςα2 (t) = 2
X
k≥0
(−1)kckt−(α(k−1)+2)Γ(α(k − 1) + 2) = 2tα−2 X
k≥0
(−1)k
cek t−αk .
15. The Cauchy product of two series A(x) = P∞
n=0 anxn and B(x) = P∞
n=0 bnxn is given by the series C(x) =
A(x) · B(x) = P∞
n=0 cnxn, where the coefficients cn are defined by cn = Pn
k=0 akbn−k.
49

Thus, by equating the coefficients from both sides of equation (3.26), we obtain the condition: ∀k ≥ 0, (be ∗ ce)k = (a ∗ b)kΓ(α(k + 1)).
Simple computations yield c0 = Γ(α)2
Γ(2α−1)Γ(2−α) , and for every k ≥ 1,
ck = Γ(α)2
Γ(α(k − 1) + 2)Γ(2α − 1)
"
Γ(α(k + 1))(a ∗ b)k −
k
X
l=1
Γ(α(l + 2) − 1)Γ(α(k − l − 1) + 2)(b∗2)lck−l
#
.
(B.70) Using standard identities such as Γ(a)Γ(b) = Γ(a + b)B(a, b) for a, b > 0, where B(a, b) = R 1
0 ua−1(1 −
u)b−1 du, and Γ(a + 1) = aΓ(a), we arrive at the formulation of the ck’s provided in the proposition, which is more suitable for numerical computations.
Step 3. Using standard methods, as in [10] or Appendix A of [36] (in the case α ∈ ( 1
2 , 1)), we show that the radius of convergence ρα of the power series defined by the coefficients ck is infinite. Firstly, let us prove by induction that there exists A > 2α+2 and K > 1 such that,
∀k ≥ 0 |ck| ≤ KAk
Γ(α(k − 1) + 2) . (B.71)
By the triangle inequality, we get the bound :
|ck| ≤ Γ(α)2Γ(α(k + 1))
Γ(α(k − 1) + 2)Γ(2α − 1)
"
(a ∗ b)k + α(k + 1)
k
X
l=1
B (α(l + 2) − 1, α(k − l − 1) + 2) (b∗2)l|ck−l|
#
.
(B.72)
Initialisation: For k = 0, c0 = Γ(α)2
Γ(2−α)Γ(2α−1) ≤ K
Γ(2−α) since K > 1 and by log-convexity Γ(α)2
Γ(2α−1) < 1.
Heredity: Now let k ≥ 1 and assume that cl satisfies the inequality (B.71) for every l = 0, . . . , k − 1. Then, for every l = 1, . . . , k,
B (α(l + 2) − 1, α(k − l − 1) + 2) (b∗2)l|ck−l| ≤ Γ(α(l + 2) − 1)Γ(α(k − l − 1) + 2)
Γ(α(k + 1) + 1) Γ(α(k − l − 1) + 2) × KAk−l(b∗2)l
≤ KAk−lΓ(α(l + 2) − 1)
Γ(α(k + 1) + 1)
(α(l + 2) − 1)(l + 1)2αl+2
Γ(α(l + 2)) ≤ KAk−l
Γ(α(k + 1) + 1)
(α(l + 2) − 1)(l + 1)2αl+2
(α(l + 2) − 1)
≤ K (l + 1)2αl+2Ak−l
α(k + 1)Γ(α(k + 1)) . Inserting this bound into the inequality (B.72) for ck gives:
|ck| ≤ Γ(α)2
Γ(α(k−1)+2)Γ(2α−1)
h
Γ(α(k + 1))(a ∗ b)k + K Ak 1
Γ(α(k+1))
Pk
l=1(l + 1)ρli
.
where we set ρ = ρ(A) := 2α+2
A . Next, dividing the above inequality by KAk and using the upper bound for (a ∗ b)k from Lemma B.2(2):
|ck|
KAk ≤ 1
Γ(α(k − 1) + 2)
Γ(α)2
Γ(2α − 1)
ρk
K (1 + (k + 1)(1 + log k)) + 1
(1 − ρ)2 .
Owing to the elementary inequality: ∀ ρ ∈ (0, 1), P
l≥1 lρl−1 ≤ 1
(1−ρ)2 . Let ε > 0 and let A = Aε
be large enough so that supk≥1 ρk + ρk(k + 1)(1 + log k) < ε and 1
(1−ρ)2 < 1 + ε. Due to the log
convexity of the Gamma function, log Γ(α) ≤ 1
2 log Γ(2α − 1) + log Γ(1) = 1
2 log Γ(2α − 1), so that
Γ(α)2
Γ(2α−1) < 1. Thus, it is possible to choose ε small enough and K large enough such that:
Γ(α)2 Γ(2α−1)
h ρk
K (1 + (k + 1)(1 + log k)) + 1
(1−ρ)2
i
≤ Γ(α)2
Γ(2α−1)
ε
K + 1 + ε < 1.
50

Consequently, |ck| ≤ KAk
Γ(α(k−1)+2) . And thus the Cauchy-Hadamard’s formula for the radius of convergence together with Stirling’s formula give:
lim supk→∞ |ck| 1
k ≤ lim supk→∞ K Ak
Γ(αk+2−α)
1/k
∼ limk→∞ A K 1
k
e−α(α(k−1)+2)α = 0.
Proof of Proposition 5.3.From equation (6.58), there exists an analytic function g ̃α : C → C such that ∀t ≥ 0, gα,ρ,λ(t) = e−2ρtt1−αg ̃α(λ tα) and g ̃α(0) = 2 c λ c0 > 0. (B.73)
Step 1. Case α ≤ 1: The class of completely monotone (CM) functions is a convex cone, thus is stable under pointwise positive summation, product, and also convolution. Differentiating both sides of equation (6.59) and using the fact that gα,ρ,λ(0) = 0 yields
2cλ2fα,ρ,λ(t)Rα,ρ,λ(t) =
Zt
0
f2
α,ρ,λ(t − s) g′
α,ρ,λ(s) ds, ∀ t ≥ 0.
Here fα,ρ,λ(t) := e−ρtfα,λ(t), which is CM as the product of two CM functions. Hence Rα,ρ,λ is CM, and consequently both 2cλ2fα,ρ,λRα,ρ,λ and f 2
α,ρ,λ are CM functions. Since gα,ρ,λ(0) = 0, we deduce
from [4, Theorem 5.5.5] that gα,ρ,λ(t) = R t
0 g′
α,ρ,λ(s) ds ≥ 0, ∀ t ≥ 0.
For simplification, we set gα,ρ,λ ≡ gα. One shows, as in [36], by contradiction that g′′
α ≤ 0 on (0, +∞), i.e. gα is concave. Using the product and chain rules, we have that
g′α(t) = e−2ρt (−2ρt1−α + (1 − α)t−α)g ̃α(λtα) + λ α g ̃′α(λtα) . Since α < 1, limt→0+ t−α
t1−α = limt→0+ 1
t
= +∞, we have g′α(t) ∼
t→0+ (1 − α)t−αg ̃α(0) + λ αg ̃′α(0) so that limt→0+ g′α(t) = +∞. Moreover, by
Tauberian Final Value Theorem if limt→+∞ g ̃′α(t) exists, then
lim
t→+∞ g ̃′
α(t) = zli→m0 zLg ̃′α (z)(z) = zli→m0 z2Lg ̃α (z) − zg ̃α(0) = zli→m0 z2Lg ̃α (0) − zg ̃α(0) = 0
since g ̃α is integrable and thus have a finite Laplace transform. Consequently, limt→+∞ g′α(t) = 0.
Finally, limt→0+ g′α(t) = +∞ , limt→+∞ g′α(t) = 0 and g′α is non-increasing on (0, +∞) (g′α′ ≤ 0), it
follows that g′α(t) ≥ 0 ∀t ∈ (0, +∞). Hence gα is concave, non-decreasing and non-negative on (0, +∞).
step 2.Case α > 1: We have limt→0+ gα,ρ,λ = +∞ and limt→+∞ gα,ρ,λ > 0. Hence, there exists t0, t1 > 0 such that gα,ρ,λ ≥ 0 at least on the small intervals (0, t0) ∪ (t1, +∞) with t0 = inf{t : gα,ρ,λ(t) < 0} and t1 = sup{t : gα,ρ,λ(t) < 0}. By continuity of gα,ρ,λ it is clear that gα,ρ,λ(t0) = gα,ρ,λ(t1) = 0 and gα,ρ,λ ≥ 0 on [0, t0] ∪ [t1, +∞). While numerical computations suggest that gα,ρ,λ is positive on R+ (i.e. t0 = t1 = ∞), establishing this positivity analytically turns out to be quite chal-
lenging. We shall, however, establish that if T α,λ,ρ is the first zero of the resolvent Rα,ρ,λ (see [24, Proposition 3.13.] for all zeros of the functions Eα), then, since R2
α,ρ,λ decreases strictly on (0, T α,λ,ρ), the function gα,ρ,λ remains non-negative over that interval.
Let’s assume that t0 ∈ (0, T α,λ,ρ) and thus gα,ρ,λ ≤ 0 on a small interval [t0, t0 + η] ⊂ (0, T α,λ,ρ) for
some η > 0. Then, for every t ∈ (t0, t0 + η], there exists τ > 0 such that t = t0 + τ . Let δ ∈ (0, τ
2 ), and
set c := − maxs∈[t0+δ,t0+τ] gα,ρ,λ(s). By continuity c > 0 and gα,ρ,λ(s) ≤ −c for all s ∈ [t0 + δ, t0 + τ ]. For simplification, we set fα,ρ,λ ≡ fα and Rα,ρ,λ ≡ Rα, gα,ρ,λ ≡ gα. Then, we have:
(f 2
α ∗ gα)(t0 + τ ) − (f 2
α ∗ gα)(t0) =
Z t0
0
(f 2
α(t0 + τ − s) − f 2
α(t0 − s))
| {z }
≥≈0
gα(s)
| {z }
≥0
ds +
Z t0+δ
t0
f2
α(t0 + τ − s) gα(s)
| {z }
≤0
ds
+
Z t0+τ
t0 +δ
f2
α(t0 + τ − s) gα(s)
| {z }
≤0
ds ≤ I1 − I2 − c
Z τ −δ
0
f2
α(u) du
!
.
51

where I2 := − R t0+δ
t0 fα2(t0 + τ − s) gα(s) ds ≥ 0 and I1 := R t0
0 (fα2(t0 + τ − s) − fα2(t0 − s)) gα(s) ds ≥ 0
However, as I1 is nonnegative and close to zero, for an adequate choice of δ ∈ (0, τ
2 ), the upper bound
above is strictly negative. On the other hand, (fα2∗gα)(t0+τ )−(fα2∗gα)(t0) = cλ2(R2α(t0)−R2α(t0+τ )) > 0,
which yields a contradiction. Hence, for every large enough n ≥ 0, there exists tn+ ∈ (t0, t0 + 1
n ] such
that gα(tn+) > 0. On the other hand, by the very definition of t0, there exists a sequence tn− > t0, n ≥ 1,
such that gα(tn−) < 0. One then builds by induction a sequence (τn)n≥1 such that gα(τ2n+1) < 0 and gα(τ2n) > 0, with τn → t0 as n → +∞, τn > t0. In turn this implies, by the intermediate value theorem, the existence of a sequence (τ ̃n)n≥1 such that g ̃α(λτ ̃nα) = gα(τ ̃n) = 0, λτ ̃nα > λt0α and λτ ̃nα → λt0α by the continuity of gα. As g ̃α is analytic, it implies that g ̃α is everywhere zero. Hence a contradiction since g ̃α(0) > 0. From the above steps, we have ∀t ≥ 0 gα,ρ,λ(t) ≥ 0 on an interv-
al I ⊆ (0, +∞) so that the function
√gα,ρ,λ is well-defined on I. □
Proof of Proposition 6.1. (a) We consider the function Rα,ρ,λ(t) = 1 + P
k≥1(−1)k λk
Γ(kα) Ik(t) where
Ik(t) = R t
0 e−ρsskα−1 ds. Given that for all k ≥ 1, the function s 7→ e−ρsskα−1 is measurable and
locally integrable on (0, t), the map t 7→ R t
0 e−ρsskα−1 ds is differentiable. Moreover, the series of
derivatives P
k≥1(−1)k λk
Γ(kα) e−ρttkα−1 converges absolutely locally uniformly in t > 0. Hence, by the
dominated convergence theorem (or Lebesgue’s theorem on differentiation under the integral sign), term-by-term differentiation is justified, and Rα,ρ,λ(t) is differentiable for t > 0, with its derivative
given by: R′
α,ρ,λ(t) = P
k≥1(−1)k λk
Γ(kα) e−ρttkα−1 =: fα,ρ,λ(t), One could argue similarly to show that
Rα,ρ,λ is infinitely differentiable, i.e., C∞ on (0, +∞). Alternatively, observe that for all t > 0, we have fα,ρ,λ(t) = e−ρtfα,λ(t), which is C∞ as the product of such functions, by virtue of the first claim in Proposition 5.2.
(b) The representation of fα,ρ,λ follows by definition and from the claim (b) of Proposition 6.1.
(c) Let us prove the L2β-integrability of fα,ρ,λ. Once noted that fα,ρ,λ = e−ρtfα,λ so that
Z +∞
0
f 2β
α,ρ,λ(t)dt =
Z +∞
0
e−2βρtf 2β
α,λ(t)dt ≤
Z +∞
0
f 2β
α,λ(t)dt,
it is clear that it is enough to have that fα,λ is L2β-integrable.
It follows from [36, Proposition 5.1] and Proposition 5.2 that fα,ρ,λ is L2β-integrable ∀β ∈ 0, 1
2(1−α)
if α < 1 and ∀β ∈ R∗+ if α > 1. As for the L2(R+)-θ-H ̈older continuity of fα,ρ,λ, let δ > 0. One has
fα,ρ,λ(t + δ) − fα,ρ,λ(t) = e−ρ(t+δ) (fα,λ(t + δ) − fα,λ(t)) + fα,λ(t) e−ρ(t+δ) − e−ρt .
Then, for i ∈ {1, 2}, we write:
|fα,ρ,λ(t + δ) − fα,ρ,λ(t)|i ≤ 2i−1 e−iρ(t+δ) |fα,λ(t + δ) − fα,λ(t)|i + e−iρt |fα,λ(t)|i (1 − e−iρδ)i .
Integrating both side and using again Lemma B.1, one may deduce
Z∞
0
|fα,ρ,λ(t + δ) − fα,ρ,λ(t)|i dt ≤ 2i−1 e−iρδ
Z∞
0
|fα,λ(t + δ) − fα,λ(t)|i dt + (ρδ)iθ
Z∞
0
|fα,λ(t)|i dt .
Consequently, since fα,λ ∈ L2(Leb1)
Z∞
0
|fα,ρ,λ(t + δ) − fα,ρ,λ(t)|i dt
1/i
≤ e−ρδ
Z∞
0
|fα,λ(t + δ) − fα,λ(t)|i dt
1/i
+ (ρδ)θ
Z∞
0
|fα,λ(t)|i dt
1 i
≤ e−ρδCθ,λδθ + Cfλ δθ := Cθ,ρ,λδθ.
where the last inequality is a direct application of Proposition 5.2 and we are done. □
52

---

## Processing Information

- **Processing Library:** Zotero PDFWorker
- **Processing Date:** 2026-02-10T18:15:10.358Z
- **Text Length:** 151082 characters
- **Success:** Text extraction completed
- **PDF Library Used:** Zotero PDFWorker
- **Pages Processed:** 52 of 52
