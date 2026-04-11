# PDF Document: Itkin - 2025 - Semi-analytical pricing of American options with hybrid dividends via integral equations and the GIT.pdf

**File Path:** Itkin - 2025 - Semi-analytical pricing of American options with hybrid dividends via integral equations and the GIT.pdf

**Processed Date:** 2026-02-10T18:18:02.186Z

**File Size:** 1014.36 KB

**Total Pages:** 43

**Extracted Pages:** 43

**PDF Library:** Zotero PDFWorker

**Attachment Item ID:** 3572

**Title:** Semi-analytical pricing of American options with hybrid dividends via integral equations and the GIT method

**Collection:** Large Files > Random Papers

---

## Extracted Text Content

Semi-analytical pricing of American options with hybrid dividends via integral equations and the GIT method
Andrey Itkin
FRE Department, Tendon School of Engineering, New York University, email: aitkin@ nyu. edu
October 22, 2025
T
his paper introduces a semi-analytical method for pricing American options on assets (stocks, ETFs) that pay discrete and/or continuous dividends. The problem is notoriously complex because discrete dividends create abrupt price drops and affect the optimal exercise timing, making traditional continuous-dividend models unsuitable. Our approach utilizes the Generalized Integral Transform (GIT) method introduced by the author and his co-authors in a number of papers, which transforms the pricing pro-
blem from a complex partial differential equation with a free boundary into an integral Volterra equation of the second or first kind. In this paper we illustrate this approach by considering a popular GBM model that accounts for discrete cash and proportional dividends using Dirac delta functions. By reframing the problem as an integral equation, we can sequentially solve for the option price and the early exercise boundary, effectively handling the discontinuities caused by the dividends. Our me-
thodology provides a powerful alternative to standard numerical techniques like binomial trees or finite difference methods, which can struggle with the jump conditions of discrete dividends by losing accuracy or performance. Several examples demonstrate that the GIT method is highly accurate and computationally efficient, bypassing the need for extensive computational grids or complex backward induction steps.
1 Introduction
The valuation of American-style options is a nuanced and critically important challenge in quantitative finance. Unlike European options, American options can be exercised at any time before expiration, creating a complex optimal stopping problem. The holder must continuously decide whether to capture the option’s immediate intrinsic value or retain it for potential future gains. This challenge is profoundly complicated by discrete dividends. These lump-sum payments cause predictable drops in the -
underlying stock price, creating a powerful incentive for early exercise just before the ex-dividend date. Accurately determining the optimal exercise boundary is therefore paramount. Pricing these instruments is more than an academic exercise; it is a vital task for traders, risk managers, and arbitrageurs. The standard Black-Scholes-Merton framework, which assumes a continuous dividend
1
arXiv:2510.18159v1 [q-fin.PR] 20 Oct 2025

yield, is ill-suited for handling large, discrete dividends. This limitation has driven decades of research into more sophisticated models, which generally fall into two categories: those that modify the underlying stock price process and those that develop numerical techniques to solve the ensuing free boundary problem. Due to the vast existing literature, we provide a focused survey organized by the underlying methodology for treating discrete dividends. This review traces the field’s evolution-
 from its analytical origins to current numerical techniques. We direct the reader to the cited references for a comprehensive bibliography.
Compound option approach & Escrowed dividend models. One of the earliest and most influential contributions was made by [Roll, 1977; Geske, 1979; Whaley, 1981] for pricing American calls. Their solution, often termed the Roll-Geske-Whaley (RGW) formula, treats an American call on a stock with a single discrete dividend as a compound option. The option to exercise just before the dividend is viewed as an option on another option expiring at the ex-date. While elegant and analytical, the RGW model i-
s limited to a single dividend and only applies to calls, as early exercise of puts is optimal at other times. A common simplification, the Escrowed Dividend Models, adjusts the initial stock price by subtracting the present value of all future dividends. This model is simple to implement but is known to systematically misprice options, particularly those deep in- or out-of-the-money, as it fails to accurately capture the diffusion of the stochastic process around the known jump.
Lattice-Based Methods (Trees). Lattice methods, particularly binomial and trinomial trees pioneered by [Cox, Ross, and Rubinstein, 1979] offer a more flexible numerical framework. The primary challenge is modifying the tree to account for the discrete dividend drop. Two main approaches have emerged:
• The "Lump-Sum" approach. The tree is built based on the stochastic process of the underlying stock, and at an ex-dividend date, the value at each node is reduced by the dividend amount. This simple method can lead to computational issues, as nodes may fall below zero for large dividends, violating the lognormal assumption. • The "Shift" approach suggested by [Bos and Vandermark, 2002; Haug, Haug, and Lewis, 2003]. The tree is constructed for the "stochastic" component of the stock price (i.e., t-
he stock price minus the present value of future dividends). The known, deterministic dividend payments are then added back at each node. This approach avoids negative probabilities and is generally considered more robust and accurate, forming the basis for many modern implementations.
Partial differential equation and finite-difference methods. The PDE framework, rooted in the fundamental Black-Scholes differential equation, provides a powerful alternative. The problem becomes solving a PDE with a free boundary (the optimal exercise boundary) and a jump condition at each ex-dividend date. The value of the option immediately before the dividend date, V (S(t−
d ), t−
d ), must be equal to the
value immediately after, V (S(t+
d ) − D, t+
d ), where D is the dividend amount. Numerical methods like finite differences are used to solve this system, often providing greater accuracy and convergence properties than trees for a given computational cost. In more detail, see [Wilmott, Dewynne, and Howison, 1993; Hirsa, 2013; Chiarella, El-Hassan, and Kucera, 2006; Itkin, 2017; Andersen, 2025] and references therein.
Monte-Carlo methods. Monte-Carlo simulation for American options relies on a Lest-Square method (LSMC) proposed in [Longstaff and Schwartz, 2001] and various more recent modifications. Handling discrete dividends in LSMC methods involves adjusting the stock price paths at ex-dates and has become a popular method for high-dimensional problems where trees and PDEs become impractical.
Page 2 of 43

Recent developments. A promising alternative for pricing American options is the integral equation method, derived from decomposition formulas by [Peskir, 2005] (see also [Vellekoop and Nieuwenhuis, 2011; Itkin, 2025; Andersen and Lake, 2024] and references therein). This approach offers significant computational advantages: solving the resulting integral equations can be substantially more efficient than using standard finite-difference methods. Furthermore, for models with a Gaussian kernel suc-
h as geometric Brownian motion, the Fast Gaussian Transform can be applied to compute the integral efficiently. This technique achieves linear complexity in the number of temporal nodes, even for multi-factor models, enabling fast and scalable pricing. The integral equation approach has been further extended to handle dividend-paying assets in [Vellekoop and Ni Andersen and Lake, 2024]. For example, Vellekoop and Nieuwenhuis generalize the decomposition formula to models with more general asset an-
d cumulative dividend processes, uncovering new properties of the exercise boundary. However, a key challenge arises that computing the expectation of the early exercise premium (EEP) requires the transition density of the underlying process, which is generally unknown in closed form for many models, especially those that are time-inhomogeneous. To address this, in this paper we propose several tractable alternatives for computing the option price, transition density, and early exercise boundary (-
EB). The latter can be efficiently determined using the GIT method, developed by the author and co-authors in a series of papers and comprehensively described in [Itkin, Lipton, and Muravey, 2021]. Note that a key practical decision is whether to model dividends as a fixed cash amount or a known proportion of the stock price. The fixed cash model is more common for mature companies but introduces the risk of negative prices. The proportional dividend model avoids this but may be less realistic for-
 shortterm, declared dividends. The choice significantly impacts the optimal exercise strategy and the resulting option price. Despite this extensive literature, a consensus on a single optimal method remains elusive, as the choice is highly context-dependent. Key factors include the number and size of dividends, computational constraints, and the requirement to calibrate the model to market implied volatilities. For the purpose of generality, in this paper we consider a flexible hybrid dividend m-
odel that can simultaneously incorporate both discrete and continuous dividend representations or be reduced to either case. The remainder of this paper is organized as follows. Section 2 outlines the mathematical framework for pricing American options with hybrid dividends. We review the decomposition formula of [Peskir, 2005] and derive an integral equation for the American option price. In Section 3, we compute the European option price and transition density for a time-dependent geometric Brow-
nian motion model with hybrid dividends. Section 4 derives a Volterra integral equation for the EB using the GIT method. We provide a rigorous treatment of the weak singularities inherent in such equations, including the known singularity in the EB’s derivative at expiration. A change of variables is proposed to remove these singularities, ensuring robust numerical solutions. We also demonstrate that in the dividend-free limit, our equation reproduces well-known properties of the EB for American C-
alls and Puts. Section 5 discusses de-Americanization within our framework - the process of converting an American option price into an equivalent European option price with the same implied volatility. This transformation simplifies pricing and analysis, particularly when inferring local volatility from market prices of American options. We also explore an alternative approach based on the implied strike concept introduced in [Skabelin, 2015], and show that it offers greater computational efficie-
ncy. Section 6 presents numerical experiments comparing the performance of our method with the binomial tree across various scenarios. The final section concludes by discussing implications for both academics and practitioners and suggests directions for future research.
Page 3 of 43

2 Model
In this section, we present our approach to pricing American options with discrete dividends using a specific model for the underlying stock price. Although the proposed method is general and applicable to various models, we focus here on the time-inhomogeneous Geometric Brownian Motion (GBM) model widely used by practitioners. We choose this model for clarity and transparency, while other models could be treated in a similar way. To make the model more realistic, we incorporate different types of-
 discrete dividends (compare, e.g., with [Vellekoop and Nieuwenhuis, 2011]). Specifically, we assume the stock price St under a risk-neutral measure Q follows the stochastic differential equation (SDE):
dSt = [a(t)St − b(t)]dt + σ(t)StdWt, (1)
with
a(t) = r(t) − q(t) −
Np
∑
i=1
diδ(t − ti−), di ∈ [0, 1) (2)
b(t) =
Nd
∑
j=1
Djδ(t − Tj−), S
∣ ∣
∣t=0 = S, (t, S) ∈ [0, T ] × [0, ∞).
Here, r(t) ∈ C1 is the instantaneous interest rate, q(t) ∈ C1 is the borrow cost (which could also represent the continuous dividend yield if the model is used in such settings), σ(t) > 0 is the volatility, which is a continuous function of t, di, i ∈ [1, Np] is the value of the proportional discrete dividend paid at time ti (the dividend payment is proportional to Sti− and released on discrete dividend dates), Np is the number of proportional dividend payments, Dj, j ∈ [1, Nd] is the value of the-
 discrete cash dividend paid at time Tj, Nd is the number of cash dividend payments and δ(x) is the Dirac delta function [Abramowitz and Stegun, 1964]. The representation of discrete dividends via the Dirac delta function has been widely utilized in the existing literature; see, for example, [Haug, Haug, and Lewis, 2003; Ballester, Company, and Jódar, 2008; Guo and Chang, 2020] among others. In Eq. (2) we assume that St ≥ 0 ∀t ∈ [0, T ] where T denotes the maturity of the American option under con-
sideration. However, one must bear in mind that if the borrow cost and discrete dividends are high, the model might become mean-reverting with mean-reversion level θ(t) = b(t)/a(t) < 0 and mean-reversion speed κ(t) = −a(t) > 0. In this case,
tli→mτ EQ[St] = Se− ∫ τ
0 κ(k)dk +
∫τ
0
e− ∫ τ
k κ(χ)dχκ(k)θ(k)dk. (3)
where EQ[·] is the expectation under the measure Q. Since θ(k) < 0, the expected value EQ[Sτ ] could become negative at some time 0 < τ ≤ τ (0). To resolve this issue, we impose an additional regularization condition
∀τ ∈ [0, τ (0)] : Se− ∫ τ
0 κ(k)dk +
∫τ
0
e− ∫ τ
k κ(χ)dχκ(k)θ(k)dk > 0. (4)
This condition introduces further constraints on the borrow cost and proportional discrete dividends that the model can accommodate. Strictly speaking, we must also impose the condition 0 ≤ Dj < STj− for all j ∈ [1, Nd]. This ensures that the stock price STj remains positive after each cash dividend payment. However, enforcing this restriction makes the cash dividend model state-dependent. As noted in [Andersen and Lake, 2024], dividends in practice typically satisfy this condition, so it typicall-
y does not matter unless the model parameters are extremely unusual. For this reason, we relax this requirement in our subsequent analysis and instead assume that admissible values of Dj obey this constraint by default.
Page 4 of 43

2.1 The decomposition formula
To price American option written on the underlying stock St with the dynamics given by Eqs. (1) and (2), we use the construction known as the American option decomposition and originated to [Kim, 1990], see, e.g., a short survey in [Itkin, 2025] where this approach is further developed and generalized. Let us first consider an American Put option and denote its price as P (t, S). For ∀x ∈ lx we distinguish the exercise (E) and continuation (C) regions as
E=
{
(u, Su) ∈ [0, T ) × (lx, ∞) : P (u, Su) = K − Su
}
(5)
C=
{
(u, Su) ∈ [0, T ) × (lx, ∞) : P (u, Su) > K − Su
}
,
where lx is the left boundary of the St domain which could be either lx = 0 or lx = −∞ depending on the model. These two regions are separated by the EB SB(t), which is a time-dependent function of the time t. Note, that in this paper we don’t consider the case of multiple EBs as the latter is discussed in detail in [Itkin and Kitapbayev, 2025]. Using the change of variable formula of [Peskir, 2005], the following proposition has been proved in [Itkin and Kitapbayev, 2025]
Proposition 1 (Proposition 1 in [Itkin and Kitapbayev, 2025]). Conditional on St = S, the American Put price with a single exercise boundary SB(t) can be represented by the following decomposition formula
P (t, S) = EQ
{
DF(t, T )(K − ST )+|St = S
}
+
∫T
t
DF(t, u)EQ {[r(u)(K − Su) + μ(u, Su)] 1Su∈E } du. (6)
where DF(t, s) = e− ∫ s
t r(u) du is the deterministic discount factor, and μ(t, S) is the drift of the corresponding underlying process. Here, the first term represents the European Put option price PE (t, S) while the second term is the EEP which depends on the early exercise boundary SB(t).
Proof. See [Itkin and Kitapbayev, 2025].
Using Eqs. (1) and (2), the integrand in the right-hands part of Eq. (6) can be represented as
r(u)(K − Su) + μ(u, Su) = r(u)(K − Su) + a(u)Su + b(u) = a ̃(u)Su + b ̃(u), (7)
 ̃a(u) = a(u) − r(u) = −q(u) −
Np
∑
i=1
diδ(u − ti−) < 0, di ∈ [0, 1),
b ̃(u) = b(u) + r(u)K =
Nd
∑
j=1
Djδ(u − Tj−) + r(u)K.
Note, that b ̃(u) > 0 if r(t) > 0, otherwise it could be negative. Also, a ̃(t), b ̃(t) are not continuous anymore and experience finite jumps at ti− and Tj−, respectively, see [Vellekoop and Nieuwenhuis, 2011; Andersen and Lake, 2024] among others. Using the definitions in Eq. (7), the decomposition formula can be re-written in the form
P (t, S) = PE (t, S) +
∫T
t
DF(t, u)EQ {[r(u)K − q(u)Su] 1Su∈E } du + Θ(t, S), (8)
Θ(t, S) =
Nd
∑
j=1
DF(t, Tj−)Dj
∫ SB (Tj )
0
G(S, ξ, Tj − t)dξ −
Np
∑
i=1
DF(t, ti−)di
∫ SB(ti)
0
ξG(S, ξ, ti − t)dξ,
Page 5 of 43

where G(x, ξ, t) is the transition density function (in this case it coincides with Green’s function of the corresponding forward PDE, see below). In the absence of discrete dividends and with q(t) denoting the continuous dividend yield, this formula appears in [Itkin and Kitapbayev, 2025; Itkin, 2025]. For the time-homogeneous GBM model it has been presented in a number of papers, e.g., see [Andersen, Lake, and Offengenden, 2016; Andersen and Lake, 2021] and references therein and in [Itkin, 202-
5].
3 Computing expectations in Eq. (6)
The decomposition formula Equation Eq. (8) provides a solution for pricing American options with discrete dividends, contingent upon knowing the early exercise boundary SB(t) and the density function G(x, ξ, t) in either closed form or through numerical methods. However, for the model described in Eqs. (1) and (2), these quantities are not readily available. In this section, we present a method to compute the European Put option price and the density of the process.
3.1 The European option price
Even for the European options written on the stock St with the dynamics provided in Eqs. (1) and (2) the explicit expression for PE(t, S) is not known. To proceed, observe that by a standard argument, [Cont and Voltchkova, 2005; Klebaner, 2005] the European Put option price PE(t, S) solves a parabolic partial differential equation (PDE)
∂PE
∂t + 1
2 σ2(t)S2 ∂2PE
∂S2 + [a(t)S − b(t)] ∂PE
∂S = r(t)PE, (9)
which should be solved subject to the terminal condition at the option maturity t = T
PE(T, ST ) = (K − ST )+, (10)
and the boundary conditions
PE(t, S)
∣ ∣
∣S↑∞ = 0, PE (t, 0) = Ke− ∫ t
T r(k)dk. (11)
By a change of variables
S→ K
α(t) ex, PE(t, x) = W (t, x)e
∫t
T r(k)dk + Ke−S/K−∫ t
T r(k)dk, α(t) = e
∫t
T[1
2 σ2(k)−a(k)]dk, (12)
(t, x) ∈ [0, T ] × R.
the PDE in Eq. (9) can be transformed to
∂W
∂t + 1
2 σ2(t) ∂2W
∂x2 − e−xα(t)b(t) ∂W
∂x + 1
2 σ2(t)Θ(t, x) = 0, (13)
Θ(t, x) = Ke− ex
α(t) −2 ∫ t
T r(k) dk
{ e2x
α2(t) + 2
σ2(t)
[ b(t)
K − 2r(t) − ex
]
}
,
xli→m∞ Θ(t, x) = 0, lim
x→−∞ Θ(t, x) = 2K b(t)/K − 2r(t)
σ2(t) e−2 ∫ t
T r(k) dk.
Making another transformation of the time
τ=1
2
∫T
t
σ2(k)dk ≥ 0, (14)
Page 6 of 43

we arrive at another PDE for W (τ, x)
∂W
∂τ = ∂2W
∂x2 − e−xγ(τ ) ∂W
∂x + Θ(τ, x), γ(τ ) = 2 α(t(τ ))b(t(τ ))
Kσ2(t(τ )) , t = t(τ ), (15)
where the function t(τ ) can be obtained by inverting Eq. (14). Accordingly, the boundary condition Eq. (11) and the terminal condition in Eq. (10) in new variables read1
W (τ, x)
∣ ∣
∣x↑∞ = 0, W (τ, x)
∣ ∣
∣x↑−∞ = 0, W (0, xT ) = K
[
(1 − exT )+ − e−e−xT ]
. (16)
The PDE in Eq. (15) does not admit a closed-form solution. However, it can be transformed into a linear Volterra integral equation of the second kind, which can then be solved numerically. To see this, consider Eq. (15) without the last term on the right-hand side. In this case, the equation reduces to a standard heat equation, whose Green’s function is well-known [Polyanin and Manzhirov, 2008].
G(x, ξ, τ ) = 1
2√πτ e− (x−ξ)2
4τ . (17)
Using this result, the additional term in Eq. (15) can be taken into account by using a generalized Duhamel’s principle, [Itkin, 2024; Hunter, 2014]. This yields
W (τ, x) = K
∫∞
−∞
{ (
1 − eξ)+ − e−eξ
}
G(x, ξ, τ )dξ (18)
+
∫τ
0
∫∞
−∞
[
Θ(ν, ξ) − e−ξγ(ν)Wξ′(ν, ξ)
]
G(x, ξ, τ − ν)dξdν.
Integrating the last term by parts yields
W (τ, x) = K
∫∞
−∞
{ (
1 − eξ)+ − e−eξ
}
G(x, ξ, τ )dξ +
∫τ
0
∫∞
−∞
Θ(ν, ξ)G(x, ξ, τ − ν)dξdν (19)
+1
2√π
∫τ
0
∫∞
−∞
x − ξ − 2(τ − ν) τ −ν
α(ν)
σ2(ν) b(ν)e−ξG(x, ξ, τ − ν)W (ν, ξ)dξdν.
Due to the definition of b(t) in Eq. (2), the last double integral can be reduced to a single one. Therefore, Eq. (19) transforms to a Volterra-Fredholm integral equation of the second kind
W (τ, x) = K
∫∞
−∞
{ (
1 − eξ)+ − e−eξ
}
G(x, ξ, τ )dξ +
∫τ
0
∫∞
−∞
Θ(ν, ξ)G(x, ξ, τ − ν)dξdν (20)
+
Nd
∑
j=1
Dj 1τj−≤τ
∫∞
−∞
x − ξ − 2(τ − τj−) τ − τj−
α(τj−)
σ2(τj−) e−ξG(x, ξ, τ − τj−)W (τj−, ξ)dξ.
Here, discrete cash dividends are counted backward in time t (or, equivalently, forward in time τ ). The notation 1τj−≤τ indicates that we only consider dividends satisfying 0 < τ1− < . . . < τk− < τ , where τj is the inverse map of Tj as defined in Eq. (14). We have to solve Eq. (20) by setting t = 0, τ = t(0). Once it is solved, the European option price PE(t, x) follows from Eq. (12). The Eq. (20) can be solved sequentially in time τ by first, setting τ = τ1−, then τ = τ2−, and so on. Observe, -
that at τ = τj− the following identity holds
x − ξ − 2(τ − τj−) τ − τj−
G(x, ξ, τ − τj−) = G′ξ(x, ξ, τ − τj−) − G(x, ξ, τ − τj−) = δ′(x − ξ) − δ(x − ξ). (21)
Then, we proceed as follows:
1Note, that by Eq. (12) we have α(τ )|τ=0 = 1.
Page 7 of 43

Algorithm 1. Pricing procedure
(a) τ < τ1−. The solution of Eq. (20) coincides with the Black-Scholes formula with time-dependent coefficients. (b) τ = τ1−. Using the identity, [Abramowitz and Stegun, 1964]
∫∞
−∞
f (ξ)δ′(x − ξ) dξ = f ′(x) (22)
we obtain from Eq. (20)
W (τ1−, x) = A(τ1−, x) + B(τ1−)e−x [Wx′ (τ1−, x) − 2W (τ1−, x)] , (23)
A(τ, x) = K
∫∞
−∞
{ (
1 − eξ)+ − e−eξ
}
G(x, ξ, τ )dξ
+
∫τ
0
∫∞
−∞
Θ(ν, ξ)G(x, ξ, τ − ν)dξdν, B(τ ) = 1
2√π D1
α(τ )
σ2(τ ) .
This is a first-order ordinary differential equation for W (τ1−, x). By solving it, we obtain
W (τ1−, x) = e
ex
B(τ1−) +2x 1
B(τ1−)
∫∞
x
A(τ1−, k)e−k−ek/B(τ1−)dk. (24)
At x → ±∞ this yields W (τ1−, x) → 0 which are the correct boundary conditions, see Eq. (16). (c) τ2− > τ > τ1−. Since W (τ1−, x) was computed in the previous step, the option value W (τ, x) is given by the Black-Scholes formula with time-dependent coefficients (the first term in Eq. (20)) plus a second integral whose integrand is already known. (d) τ = τ2−. This step is similar to the step (b) with the only difference that A(τ2−, x) is now defined as
A(τ2−, x) = K
∫∞
−∞
{ (
1 − eξ)+ − e−eξ
}
G(x, ξ, τ2−)dξ +
∫τ
0
∫∞
−∞
Θ(ν, ξ)G(x, ξ, τ2− − ν)dξdν
+1
2√π
1
∑
j=1
Dj
∫∞
−∞
x − ξ + 2(τ2− − τ1−)
τ2− − τ1−
α(τ2−)
σ2(τ2−) e−ξG(x, ξ, τ2− − τ1−)W (τ1−, ξ)dξ. (25)
(e) and so on ...
It is important to notice, that the first integral in Eq. (25) (and also in Eq. (23)) could be computed in closed-from since the Green’s function is Gaussian. This yields
I1 =
∫∞
−∞
(
1 − eξ)+ G(x, ξ, τ )dξ = Φ
(x + log (B(τ ))
√2τ
)
(26)
+ eτ +x
[
−Φ
( log (B(τ )) + 2(τ + x)
√2τ
)
+Φ
(2τ + x
√2τ
)
−Φ


√
2(τ + x) + x2
2τ

+ 3
2
]
,
where Φ(x) is the normal CDF, [Abramowitz and Stegun, 1964]. The integral
I2 = −
∫∞
−∞
e−eξ G(x, ξ, τ2−)dξ (27)
can be approximated by using a Taylor series expansion of e−ex − e−eξ around ξ = x. For instance, taking into account the first four terms yields
I2 =
∫∞
−∞
(
−e−eξ )
G(x, ξ, τ )dξ = −e−ex +
∫∞
−∞
(
e−ex − e−eξ )
G(x, ξ, τ )dξ (28)
Page 8 of 43

≈ −e−ex + ex−ex ∫ ∞
−∞
[
(ξ − x) + a2(ξ − x)2 + a3(ξ − x)3 + a4(ξ − x)4]
G(x, ξ, τ )dξ
= e−ex
[1
2 τ ex [2 + τ − ex (2 + τ (7 + ex(ex − 6)))] − 1
]
,
a2 = − 1
2 (ex − 1) , a3 = 1
6 (ex (ex − 3) + 1) , a4 = 1
24 (1 − ex (ex (ex − 6) + 7)) .
Fig. 1 compares the "exact" values of I2(x), computed numerically, with those obtained from the analytical approximation in Eq. (28) for three values of τ = 0.02, 0.125, 0.3. These values correspond to typical scenarios: a) σ(t) = σ = 0.2, T = 1; b) σ(t) = σ = 0.5, T = 1; and c) σ(t) = σ = 1, T = 0.6. Since the "exact" and approximated values are very close, in Fig. 1 we display their difference. It can be seen that even in case c) the difference is less than one cent, therefore this approximation-
 can be surely used in practice.
τ = 0.02
τ = 0.125
τ = 0.3
-0.4 -0.2 0 0.2 0.4
-0.0075
-0.0050
-0.0025
0
0.0025
x
Ia2(x)- Ie2(x)
Figure 1: The difference between the "exact" (computed numerically) and approximating (by Eq. (28)) values of I2(x) for τ = 0.02, 0.125, 0.3.
The second and third integrals in Eq. (25) can be computed with linear complexity by using the Fast Gauss Transform (FGT), [Spivak, Veerapaneni, and Greengard, 2010]. This efficiency arises from the Gaussian form of the Green’s function (the kernel), while the remaining integrands are known in closed form (see above). Moreover, for the integral
∫τ
0
∫∞
−∞
Θ(ν, ξ)G(x, ξ, τ − ν)dξdν (29)
an approximation analogous to Eq. (28) can be constructed following the same approach:
1. Add and subtract a term proportional to e−ex/α(τ ). 2. Expand Θ(ν, ξ) in a Taylor series around ξ = x up to, say, fourth order.
This procedure allows the integral in Eq. (29) to be evaluated in closed form. One more important point for computing these integrals numerically is that, by the definition of α(t) in Eq. (12), we have
α(t) = e 1
2
∫t
T σ2(k)−∫ t
T a(k)dk. (30)
Page 9 of 43

Based on the definition of a(t) in Eq. (2), the second integral in Eq. (30) can be rewritten as
∫t
T
a(k)dk =
∫t
T
[r(k) − q(k)dk −
Np
∑
i=1
di1ti−≥t. (31)
3.2 Transition density function
An alternative approach to pricing European options, when the underlying stock St follows the dynamics in Eq. (1), is to derive the transition density function p(t, s|0, S) of the process and then compute the option price by evaluating the first expectation in Eq. (6). Furthermore, if the EB SB(t) is known, the density function also enables the computation of the second expectation in Eq. (8). In other words, given the EB, knowledge of the density resolves the problem of pricing American Put optio-
ns with discrete dividends. It is well-known that the density function p(t, s|0, S) of the stochastic process is the solution of the corresponding Fokker-Planck equation, see [Gardiner, 2004; van Kampen, 1992] among others. For our process in Eq. (1) it reads
∂
∂t p(t, s|0, S) = − ∂
∂s [μ(t, s)p(t, s|0, S)] + 1
2
∂2
∂s2 [σ2(t)p(t, s|0, S)], (32)
where s denotes the current state of the stochastic process at time t, and S is the initial state at time t = 0. It should be solved subject to the initial condition
p(0, s|0, S) = δ(s − S), (33)
and homogenous boundary conditions
p(t, 0|0, S) = p(t, s|0, S)|s↑∞ = 0. (34)
Expanding Eq. (32), we obtain
∂p
∂t = 1
2 σ2(t)s2 ∂2p
∂s2 + [a ̄(t)s − b(t)] ∂p
∂s − r ̄(t)p, (35)
r ̄(t) = a(t) − σ2(t),  ̄a(t) = 2σ2(t) − a(t).
By doing a change of variables similar to that in Eq. (12)
s→ K
α ̄(t) ex, p(t, x|0, x0) = W (t, x|0, x0)e
∫t
0 r ̄(k)dk, α ̄(t) = e
∫t
0[3
2 σ2(k)−a(k)]dk, (36)
(t, x) ∈ [0, T ] × R, x0 = log(S/K).
and then the transformation of the time similar to Eq. (14)
τ=1
2
∫t
0
σ2(k)dk ≥ 0, (37)
we arrive at Eq. (15) with the source term Φ(τ, x) = 0. In the new variables, the boundary condition Eq. (34) and initial condition from Eq. (33) become
W (τ, x|0.x0)∣
∣x→∞ = W (τ, x|0.x0)∣
∣x→−∞ = 0, W (0, x|0, x0) = δ(x − x0). (38)
The Eq. (15) has been already solved by using the method outlined in Section 3.1. Furthermore, because the initial condition in Eq. (33) holds and Φ(τ, x) vanishes, the expressions in Section 3.1 simplify significantly. To enhance transparency, a detailed application of Algorithm 1. specifically for computing the transition density, is presented in Appendix A.
Page 10 of 43

Remark. Our analysis has thus far focused on Put options. However, the decomposition formula for American call options shares the same general form as Eq. (8) since follows from the change of variables formula of [Peskir, 2005]. The key differences lie in the payoff function at maturity, and the structure of the exercise region, represented by the indicator function 1Su∈E in Eq. (8). For Put options, the exercise region is Su ∈ [0, SB(t)], whereas for Call options it becomes Su ∈ [SB(t), ∞). Sinc-
e the transition density remains identical for both Put and Call options, the pricing methodology for Call options follows the same approach as for Puts.
4 Computing the exercise boundary SB(t)
When pricing American options using the decomposition formula, the standard method for determining the EB proceeds as follows. At the EB, the option value is known: for a Put, it is P (t, SB(t)) = K −SB(t), and for a Call, it is CP (t, SB(t)) = SB(t) − K. By substituting S = SB(t) into Eq. (8), we obtain a nonlinear equation for SB(t). However, solving this equation can be computationally intensive because the EEP involves a double integral: one over time and another arising from the expectation. -
As pointed out in [Itkin and Kitapbayev, 2025], if one needs to numerically compute the integral in Eq. (8) (the EEP) for the Put, a more efficient approach is to treat each integrand as the price of an Up-and-Out barrier Call option with the upper barrier: SB(u), maturity u, the payoff H(u, S(u)), and a zero strike. Thus, given SB(t) computation of the EEP requires pricing two barrier options for each maturity u ∈ [t, T ]. Therefore, it could more efficient to use the method proposed in [Itkin an-
d Muravey, 2024]. Below we shortly describe this method as applied to our problem of pricing American Put option.
4.1 The exercise boundary for the American Put option
Similar to Section 3.1, by a standard argument, [Cont and Voltchkova, 2005; Klebaner, 2005] for the model in Eqs. (1) and (2), the American Put option price P (t, S) in the continuation region S ∈ C = [SB(t), ∞) solves a parabolic PDE Eq. (9), subject to the boundary conditions
P (t, SB(t) = K − SB(t), P (t, S)|S↑∞ = 0, (39)
and the terminal condition P (T, S) = (K − S)+ = 0, (40)
since SB(T ) = K. By a series of transformations similar to that in Eqs. (12) and (14)
S→ K
α(t) ex, P (t, x) = u(τ, x)e
∫t
T r(k)dk, α(t) = exp
[1
2
∫t
T
[σ2(k) − 2a(k)]dk
]
,
τ = −1
2
∫t
T
σ2(k)dk ≥ 0, y(τ ) = log
(
α(τ ) SB(τ )
K
)
, (τ, x) ∈ [0, τ (0)] × [y(τ ), ∞). (41)
the PDE in Eq. (9) can be transformed to Eq. (15) with no source term and the moving left boundary y(τ )
∂u
∂τ = ∂2u
∂x2 − e−xγ(τ ) ∂u
∂x , (42)
u(0, x) = u(τ, x)
∣ ∣
∣x↑∞ = 0, u(τ, y(τ )) = Kβ(τ )
(
α(τ ) − ey(τ))
β(τ ) = eτ+2 ∫ τ
0
( r(k) σ2(τ )
)
dk−ρ(τ), α(τ ) = e−τ+ρ(τ), ρ(τ ) =
∫τ
0
2a(k)
σ2(k) .
Page 11 of 43

Further, we make another change of the dependent variable
U (τ, x) = u(τ, x) − z(τ, x)e−τ(y(τ)−x)2 , z(τ, x) = Kβ(τ ) (α(τ ) − ex) , (43)
where the reason for the specific form of the subtracted term in the right-hands part of Eq. (43) will become clear in Section 4.1.1. The transformation in Eq. (43) reduces the problem in Eq. (42) to that with homogeneous boundary conditions
∂U
∂τ = ∂2U
∂x2 − e−xγ(τ ) ∂U
∂x + h(τ, x), U (0, x) = −z(0, x), U (τ, x)
∣ ∣
∣x↑∞ = U (τ, y(τ )) = 0, (44)
h(τ, x) = e−τ(x−y(τ))2 {γ(τ )ζ(τ, x) + η(τ, x)} , ζ(τ, x) = 2τ z(τ, x)(x − y(τ ))e−x + Kβ(τ ),
η(τ, x) = z(τ, x)
[
(x − y(τ ))2(1 + 4τ 2) − 2τ y′(τ )(x − y(τ )) − (2τ + r ̄(τ ))
]
+ Kβ(τ )ex [4τ (x − y(τ )) − ρ′(τ )] , r ̄(τ ) = 2r(τ )
σ2(τ ) .
This problem was already solved in [Itkin and Muravey, 2024], Section 1.2.2. A comparison of the frameworks shows that our case corresponds to setting their function g(τ ) = 0, while their source term λ(τ, x) becomes
λ(τ, x) = −e−xγ(τ ) ∂U
∂x + h(τ, x). (45)
Although our source term depends on ∂U
∂x , this does not pose any issues due to the generalized Duhamel’s principle, see [Itkin, 2024; Hunter, 2014]. Accordingly, based on [Itkin and Muravey, 2024], the solution of Eq. (44) reads
U (τ, x) = 1
2√πτ
∫∞
y(0)
U (0, ξ)
[
e− (ξ−x)2
4τ − e− (ξ+x−2y(τ ))2
4τ
]
dξ (46)
−
∫τ
0
Ψ(s, y(s))
2
√π(τ − s)
[
e− (x−y(s))2
4(τ −s) − e− (x−2y(τ )+y(s))2
4(τ −s)
]
ds
+
∫τ
0
∫∞
y(s)
λ(s, ξ) 2
√π(τ − s)
[
e− (ξ−x)2
4(τ −s) − e− (ξ−2y(τ )+x)2
4(τ −s)
]
dξds,
where Ψ(τ, y(τ )) is the gradient of the solution at the moving boundary y(τ )
Ψ(τ, y(τ )) = ∂U (τ, x)
∂x
∣ ∣
∣x=y(τ). (47)
Due to the smooth-pasting condition for American options, see [Kwok, 2008] among others, PS(t, SB(t)) = −1. Accordingly, after doing some algebra, we obtain
Ψ(τ, y(τ )) = 0. (48)
However, strictly speaking, the smooth pasting condition is not required here since our problem is confined to the continuation region. In other words, Eq. (48) needs only hold within the continuation region, without necessarily extending to the exercise region. Consequently, the EB may not be continuous (and not monotonic) in S and could exhibit a jump at the ex-dividend date, see [Vellekoop and Nieuwenhuis, 2011]. The first integral in Eq. (46) can be taken in closed form to yield
I0 = 1
2√πτ
∫∞
y(0)
U (0, ξ)
[
e− (ξ−x)2
4τ − e− (ξ+x−2y(τ ))2
4τ
]
dξ = − 1
2K
[
Erf
(x
2√τ
)
+ Erf
( x − 2y(τ )
2√τ
)
(49)
Page 12 of 43

+ eτ +x
(
Erfc
( 2τ + x
2√τ
)
−2
)
+ ex+τ +2y(τ ) Erfc
( −2τ + x − 2y(τ )
2√τ
)]
.
Since in our case λ(s, ξ) ∝ Uξ′(s, ξ), Eq. (46) is actually not the solution but rather an integral Volterra equation of the first kind for U (s, ξ). Indeed, with allowance for Eq. (45), after integrating by parts the last integral in Eq. (46) reads
J (τ, x) = J1(τ, x) + J2(τ, x), J2(τ, x) =
∫τ
0
γ(s)(J1 + J2)ds, (50)
J1(τ, x) =
∫τ
0
∫∞
y(s)
e−s(ξ−y(s))2 η(s, ξ)
2
√π(τ − s)
[
e− (ξ−x)2
4(τ −s) − e− (ξ−2y(τ )+x)2
4(τ −s)
]
dξds,
J2 =
∫∞
y(s)
e−s(ξ−y(s))2 ζ(s, ξ)
2
√π(τ − s)
[
e− (ξ−x)2
4(τ −s) − e− (ξ−2y(τ )+x)2
4(τ −s)
]
dξ,
J1 =
∫∞
y(s)
e−ξU (s, ξ)
{
−1
2
√π(τ − s)
[
e− (x−ξ)2
4(τ −s) − e− (ξ+x−2y(τ ))2
4(τ −s)
]
+1
4
√π(τ − s)3
[
(x − ξ)e− (x−ξ)2
4(τ−s) + (x + ξ − 2y(τ ))e− (ξ+x−2y(τ))2
4(τ −s)
]}
dξ.
Since Eq. (46) contains two unknown functions, U (τ, x) and y(τ ), a second equation is needed to determine the early exercise boundary (EB). Following [Itkin and Muravey, 2024], we derive this by differentiating both sides of Eq. (46). Differentiation with respect to x yields the option’s Delta, while differentiation with respect to τ yields the options’s theta 2. We proceed by differentiating with respect to x and then evaluating at x → y(τ ), which gives (see Appendix B):
0 = √1πτ
∫∞
y(0)
Uξ′ (0, ξ)e− (ξ−y(τ))2
4τ dξ +
∫τ
0
∫∞
y(s)
e− (ξ−y(τ ))2
4(τ −s)
2
√π(τ − s)
ξ − y(τ )
τ − s η(s, ξ)e−s(ξ−y(s))2 dξds, (51)
−
∫τ
0
γ(s)
∫∞
y(s)
[
e−ξUξ′ (s, ξ) − ζ(s, ξ)e−s(ξ−y(s))2 ] ξ − y(τ )
2
√π(τ − s)3 e− (ξ−y(τ))2
4(τ−s) dξds,
The first integral in Eq. (46) can be taken in closed form, and since y(0) = 0 this yields
J0 = −
∫∞
0
e− (ξ−y(τ ))2
4τ
√πτ
∂f (0, ξ)
∂ξ dξ = Keτ+y(τ)
[
1 + Erf
( 2τ + y(τ )
2√τ
)]
. (52)
The impact of dividends is incorporated through two key functions: γ(τ ), which accounts for discrete cash dividends, and α(τ ), which models discrete proportional dividends. Since by definitions in Eq. (15), Eq. (2)
γ(s) = 2α(s)
K σ2 (s)
Nd
∑
j=1
Dj δ(s − τj−)1s≤τj− , (53)
Eq. (51) reduces to the equation
−Keτ +y(τ )
[
1 + Erf
( 2τ + y(τ )
2√τ
)]
=
∫τ
0
∫∞
y(s)
e− (ξ−y(τ ))2
4(τ −s)
2
√π(τ − s)
ξ − y(τ )
τ − s η(s, ξ)e−s(ξ−y(s))2 dξds (54)
2For the underlying GBM process with constant coefficients, an integral equation for y(τ ) using the option’s Theta was derived in [Goodman and Ostrov, 2002; Lu, 2018] using a different approach. However, their approach cannot be used for models with time-dependent coefficients.
Page 13 of 43

−
Nd
∑
j=1
1τj− <τ
2α(τj−)
σ2(τj−) Dj
{
−
∫∞
y(τj− )
ζ(τj−, ξ)e−τj−(ξ−y(τj−))2 ξ − y(τ )
2
√
π(τ − τj−)3 e− (ξ−y(τ))2
4(τ −τj−) dξ
+
∫∞
y(τj− )
e−ξUξ′(τj−, ξ) ξ − y(τ )
2
√
π(τ − τj−)3 e− (ξ−y(τ))2
4(τ −τj−) dξ
}
.
The last integral in this equation can be further simplified, as in Eq. (50). In case τ = τj−, in Eq. (54) the last integral under the sum vanishes because
I = lim
τ →τj−
ξ − y(τ )
2
√
π(τ − τj−)3 e− (ξ−y(τ))2
4(τ−τj−) = lim
τ →τj−
1
2
√π(τ − s) ∂x
[
e− (ξ−x)2
4(τ −s) − e− (ξ−2y(τ )+x)2
4(τ −s)
]
x=y(τ )
s=τj−
(55)
= ∂x [δ(ξ − x) − δ(ξ + x − 2y(τ ))]
∣ ∣
∣x=y(τ) = −2δ′(ξ − y(τ )),
and
−2
∫∞
y(τ )
e−ξUξ′ (τ, ξ)δ′(ξ − y(τ ))dξ = ∂ξ
[
e−ξUξ′ (τ, ξ)
]
ξ=y(τ) = 0. (56)
Accordingly, we use 1τj−<τ instead of 1τj−≤τ when doing summation. Thus, at given τj−, and τ ≤ τj− Eq. (54) reduces to a nonlinear Volterra equation of the first kind for y(τ ), as all terms in the summation of Eq. (54) are already known at time τ . However, once τ exceeds τj−, the sum in the right-hands part of Eq. (54) will further contain a extra term dependent on U (τj−, ξ) which is not known yet. Fortunately, it can be found from Eq. (46). The latter equation after substituting γ(s) from Eq. -
(53) and τ = τj− becomes
U (τj−, x) = J1(τj−, x) +
Nd
∑
i=1
1τi− <τj−
2α(τi−)
σ2(τi−) DiJ3(τj−, τi−, x) + 2α(τj−)
σ2(τj−) DjJ3(τj−, τj−, x), (57)
J3(τj−, τi−, x) =
∫∞
y(τi− )
e−ξU (τi−, ξ)



−1 2
√
π(τj− − τi−)

e− (x−ξ)2
4(τj−−τi−) − e− (ξ+x−2y(τj−))2
4(τj− −τi−)


+1 4
√
π(τj− − τi−)3

(x − ξ)e− (x−ξ)2
4(τj−−τi−) + (x + ξ − 2y(τj−))e− (ξ+x−2y(τj−))2
4(τj− −τi−)





dξ
+
∫∞
y(τi− )
ζ(τi−, ξ)e−τi−(ξ−y(τi−))2 ξ − y(τj−)
2
√
π(τj− − τi−)3 e− (ξ−y(τj−))2
4(τj−−τi−) dξ, i < j,
J3(τj−, τj−, x) = −ζξ(τj−, y(τj−)) − e−xU ′x(τj−, x).
The expression for J3(τj−, τj−, x) arises from the definition of J3(τj−, τi−, x) having in mind that at i = j the expression in first square brackets is a difference of two delta functions, the second square brackets gives rise to a difference of the first derivatives of delta functions, the third integral contains a derivative of the delta function as an integrand, and also x ≥ y(τ ) + 0. In more detail, see Appendix C. Thus, U (τj−, x) solves an ordinary differential equation (ODE)
U (τj−, x) + wj e−xU ′x(τj−, x) = Φ(τj−, x), (58)
Φ(τj−, x) = J1(τj−, x) − wjζξ(τj−, y(τj−))
+
Nd
∑
i=1
1τi− <τj−
2α(τi−)
Kσ2(τi−) DiJ3(τj−, τi−, x), wj = 2α(τj−)
Kσ2(τj−) Dj ,
Page 14 of 43

subject to the zero boundary condition at x = y(τj−). The solution reads
U (τj−, x) = 1
wj
∫x
y(τj− )
Φ(τj−, k) exp
(
k + ek − ex
wj
)
dk, (59)
and hence
U ′x(τj−, x) = ex
wj
[
Φ(τj−, x) − 1
wj
e−ex/wj
∫x
y(τj− )
ek+ek/wj Φ(τj−, k)dk
]
. (60)
Since Eq. (57) provides an explicit expression for U (τj−, x), it can further be substituted into Eq. (54), so Eq. (54) again becomes a nonlinear Volterra equation of the first kind for y(τ ). The inclusion of an additional term in Eq. (54) when τ reaches τj− causes the EB y(τ ) to exhibit a jump at τj. In the zero
order approximation, the magnitude of this jump is proportional to Dj, i.e SB(tj) = SB(tj−)eDjη(τj,y(τj)), where η(τj, y(τj)) is a function that can be explicitly determined using Eq. (54) and Eq. (57). Because y(τ ) is computed sequentially backward in time, the integrals over s contain only one unknown term corresponding to the most recent time interval ∆τ = (τi−1, τi]. After all integrands are evaluated at a single point τi (they are already known at previous points τk, k < i, Eq. (51) can be s-
olved numerically to obtain y(τi). The algorithm repeats until convergence is achieved within the desired tolerance. As reported in [Itkin, 2024], where a similar system of equations was solved using an analogous method, the latter typically converges within 5–6 iterations. Since all integrals in Eq. (57) involve Gaussian kernels, the FGT can be efficiently applied to compute them. It is important to emphasize that U (τ, x) is not the price of the American option given by Eq. (8). Rather, it repre-
sents the American put option price within the continuation region C, where it coincides with the price of its European counterpart, subject to the boundary and terminal conditions in Eqs. (39) and (40). Using the approach outlined in Section 3.1, the European put price can be obtained for the entire domain S ∈ [0, ∞) as well as the transition density (see Section 3.2). Once the EB, the European option price, and the transition density are determined, they can be substituted into Eq. (6) to comput-
e the full American put option price.
4.1.1 Singularity in y′(τ ) at τ → 0
As noted in [Lu, 2018], almost all the existing integral equations for optimal exercise boundary of the American option known in the literature are exposed to a singularity at τ = 0 due to the presence of the negative indefinite slope of the EB y′(0) = −∞. This is important because numerical methods (like finite difference or quadrature methods) approximate solutions by breaking time into small discrete steps. A singularity represents an infinite value within the very first, most critical time ste-
p. This corrupts the numerical solution from the outset. The error introduced at τ = 0 due to various numerical approximations does not remain isolated. It propagates and amplifies through the entire numerical scheme as the algorithm steps backward in time (i.e., as τ increases). This leads to a computed EB that can be significantly inaccurate for times well before expiry. Also, a key requirement for a numerical method is that as the time grid is made finer (smaller time steps), the solution shoul-
d converge to the true answer. The presence of a singularity often prevents this convergence, or makes it impractically slow. The solution may oscillate wildly or produce nonsensical results as the step size decreases. At the first glance, our integral equation for the exercise boundary (EB) in Eq. (54) appears to suffer from the same problem. It contains the term y′(s) which is defined by Eq. (44) and is integrated from a lower limit of s = 0, suggesting a potential singularity. However, we aim t-
o demonstrate that by a change of variables this singularity can be removed.
Page 15 of 43

It is well-known, see e.g., [Evans, Kuske, and Keller, 2002], that for a GBM process with constant coefficients a short-time asymptotic of SB(ν) at ν → 0+ where ν = σ2(T − t), takes the following forms
SB(ν) ∼

    
    
K −K
√
ν ln
( σ4
8πν(r−q)2
)
, 0 ≤ q < r,
K −K
√
2ν ln
( σ2
4√πqν
)
, q = r,
r
q K(1 − α ̄√2ν), q > r.
(61)
Here, α ̄ is a numerical constant which satisfies a known transcendental equation. Accordingly, introducing ν ̄ = σ2ν, we obtain
SB′(ν) ∼ K



√− log(ν ̄)/ν ̄, 0 ≤ q ≤ r,
− α ̄
2√ν ̄ , q > r, (62)
so S′B(ν ̄) is singular when ν ̄ → 0. Accordingly, by the definition of y(τ ) in Eq. (41) we have
y′(τ ) = −1 + ρ′(τ ) + S′B(τ )
SB(τ ) , S′B(τ ) = S′B(ν) ∂ν
∂τ = 2S′B(ν) + O(ν), (63)
and, thus, y′(τ ) is also singular at τ → 0. The definitions of y(τ ) in Eq. (41) and the asymptotic behavior of SB(τ ) in Eq. (61) imply
y(τ ) ∼ −
√
−τ log(τ ), y′(τ ) ∼ −
√
− log(τ )/τ . (64)
A careful analysis shows that the term y′(s) appears only within the function η(s, ξ) in the double integral in Eq. (54), which can be represented as
I=
∫τ
0
G(ξ, s, τ )ds, G(ξ, s, τ ) =
∫∞
y(s)
e− (ξ−y(τ ))2
4(τ −s)
2
√π(τ − s)
ξ − y(τ )
τ − s η(s, ξ)e−s(ξ−y(s))2 dξ. (65)
But y′(s) enters the definition of η(s, ξ) in Eq. (44) only as a product sy′(s). Based on Eq. (64), one can see that sli→m0 sy′(s) ∼ sli→m0 y(s) = 0. (66)
Therefore, our integral equations have no singularity at s → 0. This is achieved by a special choice of the
correcting function z(τ, x)e−τ(y(τ)−x)2 in Eq. (43). It is important to note that G(ξ, x, τ ) also has no singularity at s = τ because in this case
sli→mτ
e− (ξ−y(τ ))2
4(τ −s)
2
√π(τ − s)
ξ − y(τ )
τ − s = −2δ′(ξ − y(τ )). (67)
This results demonstrates that our method is free of singularities in the temporal variable τ . This finding aligns with the singularity-free results of [Goodman and Ostrov, 2002; Lu, 2018], who addressed the cases of no dividends and time-inhomogeneous GBM model by constructing an integral equation for y(τ ) via the option’s theta. A critical distinction, however, is that their methodology is incompatible with models featuring time-dependent coefficients. Finally, note that solving Eq. (54) requi-
res knowledge of y′(s) for all s ∈ [0, τ ]. While we have determined its value at s = 0, at other points s ∈ (0, τ ] it can be approximated by using a finite difference scheme, which is naturally compatible with the temporal grid used to solve the integral equation numerically.
Page 16 of 43

4.1.2 The no-dividends case
In case of no dividends (i.e., γ(t) = q(t) = 0), Eq. (54) transforms to
−Keτ +y(τ )
[
1 + Erf
( 2τ + y(τ )
2√τ
)]
=
∫τ
0
∫∞
y(s)
e− (ξ−y(τ ))2
4(τ −s)
2
√π(τ − s)
ξ − y(τ )
τ − s η(s, ξ)e−s(ξ−y(s))2 dξds. (68)
It it is easy to see that the left-hands part of Eq. (68) is non-positive. By the definitions in Eq. (41) we have y(τ ) ≤ 0 since
α(τ ) = e−τ+ρ(τ), ρ(τ ) =
∫τ
0
2a(k)
σ2(k) , y(τ ) = −τ + ρ(τ ) + log(SB(τ )/K), (69)
and for the American Put option K ≥ SB(τ ). On the other hand, for the American Put option S′B(τ ) < 0, and hence
y(s) − y(τ ) = (τ − s)
[
1− 1
τ − s (r ̄(τ ) − r ̄(s))
]
+ log
( SB(s) SB(τ )
)
> 0, (70)
if τ > s and r ̄′(τ ) < 1. For instance, if r(t), σ(s) are constants, this means 2r/σ2 < 1. Moreover, the inequality y(s) − y(τ ) > 0 still holds if ∂r ̄(s)
∂s < 1 − ∂ log(SB(s))
∂s > 1 for all 0 ≤ s ≤ τ . Thus, the sign of the
integral in the right-hands part of Eq. (69) coincides with that of η(s, ξ). This statement holds because ξ − y(τ ) > 0 even when ξ = y(s). Furthermore, the integrand decays rapidly for large ξ due to the product of two Gaussian exponential terms. Consequently, the integral’s dominant contribution comes from the region near the lower limit, ξ = y(s). At this limit we have
η(s, y(s)) = −(2s + r ̄′(s))z(s, y(s)) − Kβ(s)ey(s)ρ′(s) = −2sz(s, y(s)) − Ker ̄(s)r ̄′(s), (71)
z(s, y(s)) = Ker ̄(s)
(
1 − SB(s)
K
)
≥ 0, r ̄(τ ) =
∫τ
0
2r(k)
σ2(k) .
This result holds because for no dividends r ̄(s) = ρ(s). Thus, η(s, y(s)) ≤ 0 and both sides of Eq. (68) are negative. The existence of a real-valued solution y(τ ) < 0 therefore follows, a conclusion supported by numerical results. However, when r < 0, the derivative S′B(τ ) becomes positive. This occurs because the holder of the American Put has a stronger incentive to exercise longer-dated options early to avoid the cost of holding cash with a negative yield. In other words:
• When r > 0, the opportunity cost of forfeiting interest on K discourages early exercise for longerdated options, resulting in a lower boundary for higher τ . • In contrast, when r < 0, the "opportunity benefit" of receiving K early to avoid its negative yield encourages early exercise for longer-dated options, resulting in a higher boundary for higher τ .
Because S′B(s) > 0, it follows that y′(τ ) > 0 and hence, y(s) − y(τ ) < 0. while η(s, y(s) remains same. Consequently, the integrand now becomes non-negative for all ξ ∈ [y(s), ∞). This, in turn, leads to a contradiction: the left-hand side of Eq. (68) is non-positive, while its right-hand side is non-negative. Thus, the integral equation possesses no real-valued solutions except of y(τ ) = −∞, or SB(τ ) = 0. This means that the EB for an American Put doesn’t exist (or, is undefined) for r < 0 an-
d the whole domain S ∈ [0, ∞) is just a continuation region. Although the absence of the EB in this case is well-established, it is typically argued from a financial perspective, while here we derive it mathematically through an analysis of Eq. (68). The absence of an EB implies that early exercise is never optimal for the American Put option. Consequently, its price equals that of the corresponding European option, and the EEP is zero. At the end, notice that the double integral in the right-hand-
s part of Eq. (68) can be transformed to a single integral as the internal integral in ξ can be taken in closed form, see Appendix D.
Page 17 of 43

4.2 Volterra equations with weak singularities
It turns out that Eq. (46) is a Volterra integral equation with weakly singular kernels. Indeed, denote D to be the domain of definition of the variable τ . In our case D = [0, τ (0)]. The equation of the form
u(τ ) = f (τ ) +
∫τ
0
kα(t − s)K(τ, s)u(s)ds. (72)
with (τ, s) ∈ D, K(τ, s) ∈ C(D), and the weakly singular function kα(τ − s)
kα(τ − s) =
{(τ − s)α−1, 0 < α < 1,
log(τ − s), α = 0, (73)
is called the Volterra integral equation with a weakly singular kernel. It is easy to see that, for instance, Eq. (51) obeys the definition in Eq. (72) if in the double integral we take an integrand at the lower limit ξ = y(s), so
k1/2(τ − s) = 1
√τ − s , K(τ, s) = η(s, y(s))
√π
y(τ ) − y(s)
τ − s e− (y(τ)−y(s))2
4(τ−s) . (74)
To illustrate regularity of K(τ, s) in Eq. (74), observe that K(τ, s) is regular if s 6= τ . Since y(τ ) ∈ C1, the limit s → τ can be computed as follows
sli→mτ
η(s, y(s))
√π
y(τ ) − y(s)
τ − s e− (y(τ)−y(s))2
4(τ−s) = η(τ, y(τ )) y′(τ )
√π < ∞,
etc. At the same time the existence and uniqueness of the solution of Eq. (72) still holds. Since K(τ, s) ∈ C0, f ∈ C0 and 0 < α < 1, Eq. (72) possesses a unique solution u ∈ C0 given by
u(τ ) = f (τ ) +
∫τ
0
Rα(τ, s)f (s)ds. (75)
Here Rα(τ, s) is the resolvent kernel corresponding to Kα(τ, s) = K(τ, s)kα(τ − s). The resolvent Rα(τ, s)
inherits the weak singularity (τ − s)α−1 and can be represented via Neumann series. Since each term in the series is uniformly bounded on D, the series converges absolutely and uniformly for all α ∈ (0, 1). For more details, see [Itkin, Lipton, and Muravey, 2021]. In practice, by a change of variables s → τ − ν2, e.g. the second integral in Eq. (44) transforms to
∫τ
0
η(s, y(s)) y(τ ) − y(s)
τ −s
e− (y(τ )−y(s))2
4(τ −s)
√π(τ − s) ds = √2π
∫
√τ
0
η(τ − ν2, y(τ − ν2)) y(τ ) − y(τ − ν2)
ν2 (76)
· e− (y(τ)−y(τ−ν2))2
4ν2 dν.
By a Taylor series expansion,
y(τ ) − y(τ − ν2)
ν2 = y′(τ ) + O(ν2), (77)
(y(τ ) − y(τ − ν2))2
4ν2 = 1
4 ν2y′(τ )2 − 1
4 ν4 (y′(τ )y′′(τ )) + O(ν5),
and the exponent in Eq. (76) vanishes as ν → 0. Consequently, the integral in Eq. (76) remains nonsingular.
Page 18 of 43

Alternatively, this integral can be computed numerically using singularity subtraction. This method isolates the singular part for analytical solution, allowing the remaining regular part to be handled with standard numerical quadratures. In particular, given some function g(s) we have
∫τ
0
g(s) e− (y(τ)−y(s))2
4(τ −s)
√π(τ − s) ds =
∫τ
0
g(s)e− (y(τ)−y(s))2
4(τ−s) − g(τ )
√π(τ − s) ds + g(τ )
∫τ
0
1
√π(τ − s) ds (78)
=
∫τ
0
g(s)e− (y(τ)−y(s))2
4(τ−s) − g(τ )
√π(τ − s) ds + 2g(τ )
√
τ /π.
The first integral in the last line vanishes at s = τ . This can be shown by a Taylor series expansion of the integrand, and this vanishing behavior removes the singularity.
4.3 The exercise boundary for the American Call option
For the American Call option the EB can be computed in a way similar to that Section 4.1. Indeed, again by by a standard argument, [Cont and Voltchkova, 2005; Klebaner, 2005] for the model in Eqs. (1) and (2), the American Call option price C(t, S) in the continuation region S ∈ C = [0, SB(t)] solves a parabolic PDE
∂C
∂t + 1
2 σ2(t)S2 ∂2C
∂S2 + [a(t)S − b(t)] ∂C
∂S = r(t)C, (79)
subject to the boundary conditions
C(t, SB(t) = SB(t) − K, C(t, 0) = 0, (80)
and the terminal condition C(T, S) = (S − K)+ = 0, (81)
since SB(T ) = K. Again, by a change of variables similar to that in Eq. (41), but now with
S→ K
α(t) e−x, C(t, x) = U (τ, x)e
∫t
T r(k)dk, (τ, x) ∈ [0, τ (0)] × [y(τ ), ∞), (82)
the PDE in Eq. (79) can be transformed to the PDE in Eq. (44) with the moving left boundary y(τ )
∂U
∂τ = ∂2U
∂x2 + λ(τ, x), λ(τ, x) = exγ(τ ) ∂U
∂x , (83)
U (0, x) = −z(0, x), U (τ, x)
∣ ∣
∣x↑∞ = U (τ, y(τ )) = 0, z(τ, x) = Kβ(τ ) (e−x − α(τ )) .
This is the same problem as in Eq. (44), with change of signs in the definition of z(τ ) and λ(τ, x). Consequently, y(τ ) solves a system of equations Eq. (46) and Eq. (51) with the corresponding changes of signs. In particular, the integral J1 and η(s, ξ), ζ(s, ξ) are now defined as
J1 = −
∫∞
y(s)
eξU (s, ξ)
{
−1
2
√π(τ − s)
[
e− (x−ξ)2
4(τ −s) − e− (ξ+x−2y(τ ))2
4(τ −s)
]
(84)
+1
4
√π(τ − s)3
[
(x − ξ)e− (x−ξ)2
4(τ−s) + (x + ξ − 2y(τ ))e− (ξ+x−2y(τ))2
4(τ −s)
]}
dξ,
ζ(τ, x) = 2τ z(τ, x)(x − y(τ ))ex − Kβ(τ ),
Page 19 of 43

η(τ, x) = z(τ, x)
[
(x − y(τ ))2(1 + 4τ 2) − 2τ y′(τ )(x − y(τ )) − (2τ + r ̄(τ ))
]
,
+ Kβ(τ )e−x [4τ (x − y(τ )) + ρ′(τ )] .
and Eq. (51) transforms to
− √1πτ
∫∞
y(0)
Uξ′ (0, ξ)e− (ξ−y(τ))2
4τ dξ =
∫τ
0
∫∞
y(s)
e− (ξ−y(τ ))2
4(τ −s)
2
√π(τ − s)
ξ − y(τ )
τ − s η(s, ξ)e−s(ξ−y(s))2 dξds, (85)
+
∫τ
0
γ(s)
∫∞
y(s)
[
eξUξ′ (s, ξ) − ζ(s, ξ)e−s(ξ−y(s))2 ] ξ − y(τ )
2
√π(τ − s)3 e− (ξ−y(τ))2
4(τ−s) dξds,
with
J0 = − √1πτ
∫∞
y(0)
Uξ′ (0, ξ)e− (ξ−y(τ))2
4τ dξ = −Keτ−y(τ) Erfc
( 2τ − y(τ )
2√τ
)
. (86)
Also, due to the definitions in Eq. (82), now we have
Ψ(τ, y(τ )) = 0, y(τ ) = τ − ρ(τ ) − log(SB(τ )/K), (87)
Hence, for a Call option, y(τ ) is a concave function, implying y′(s) < 0 and y(s) < 0. Same as for the American Put option, in case of no dividends (i.e., γ(t) = q(t) = 0), Eq. (51) transforms to Eq. (68). But, since for the American Call option SB(s) ≥ K and S′B(s) > 0, this implies at r(s) > 0,
y(τ ) − y(s) = (τ − s)
(
1+ 1
τ −s
∫τ
s
2r(k) σ2(k)
)
− log
( SB(τ ) SB (s)
)
< 0, (88)
if τ > s.
Thus, the sign of the first integral in the right-hands part of Eq. (85) coincides with that of η(s, ξ). This statement holds because ξ −y(τ ) > 0 even when ξ = y(s). Furthermore, the integrand decays rapidly for large ξ due to the product of two Gaussian exponential terms. Consequently, the integral’s dominant contribution comes from the region near the lower limit, ξ = y(s). In this limit we have
η(s, y(s)) = −(2s + r ̄′(s))z(s, y(s)) + Kβ(s)e−y(s)ρ′(s) = −2sz(s, y(s) + Kβ(s)er ̄(s)r ̄′(s), (89)
z(s, y(s)) = Ker ̄(s)
( SB(s)
K −1
)
≥ 0.
This result holds because for no dividends r ̄(s) = ρ(s). Thus, η(s, y(s)) ≥ 0 (at least, for small s). As the result, the right-hand side of Eq. (85) is non-negative, while the left-hand side is non-positive. Therefore, the integral equation admits no real-valued solutions. A more delicate analysis reveals that in this case the only correct solution would be y(τ ) = −∞ or SB(τ ) = ∞. Indeed, in this case the right-hands part of Eq. (85) tends to 0, so does the left-hands part due to the identity
lim
y(τ )→−∞ eτ −y(τ ) Erfc
( 2τ − y(τ )
2√τ
)
= 0. (90)
This means that the EB for an American Call doesn’t exist (or, it moves to infinity) for r > 0 and the whole domain S ∈ [0, ∞) is just a continuation region. To recall, although this fact is well-established, it is typically argued from a financial perspective, while here we derive it mathematically through an analysis of Eq. (85). An absence of the EB implies that early exercise is never optimal for the American
Page 20 of 43

Call option. Consequently, its price equals that of the corresponding European option, and the EEP is zero. However, when r(s) < 0, the derivative S′B(τ ) becomes negative. This occurs because it is beneficial to exercise early to avoid paying a higher effective strike in the future. In other words, if you exercise early, you get S − K immediately. If you wait, the option value may increase, but the cash K you would pay in the future is actually becoming less valuable (since r(s) < 0, the present-
 value of K increases over time). This means that the strike price K becomes more expensive in real terms as time passes. Consequently, the right-hands part of Eq. (85) will now contain negative terms implying this integral equation admits a real-valued solution y(τ ) < 0, a result also supported by its numerical solution.
5 De-Americanization
The de-Americanization of American options refers to the process of converting an American option, exercisable at any time before expiration, into an equivalent (in the implied volatility) European option, which can only be exercised at maturity. This transformation simplifies pricing and analysis, particularly when restoring local volatility from market American option prices PM (t, S) by using Dupire’s formula, [Dupire, 1994]. For the model in Eq. (1), this involves computing the volatility σ(t)-
 of the underlying asset’s dynamics so the theoretical (model dependent) price coincides with the market option. Traditionally, numerical methods such as binomial or trinomial trees are employed to determine this implied volatility σ (which is assumed to be constant), see [Burkovska et al., 2018] and reference therein, while a semi-analytical approach of [De Marco and Henry-Labordere, 2017] provides more tractability despite less accurate. However, when discrete dividends are present, de-Americani-
zation becomes more complex. At each ex-dividend date, the stock price must be adjusted by the dividend amount, and the option value must be computed under the no-early-exercise assumption, i.e., as a European-style continuation value, see [Vellekoop and Nieuwenhuis, 2006; Areal and Rodrigues, 2013] among others. It turns out that the approach proposed in this paper can also be naturally applied to de-Americanization. As detailed in Appendix A, the algorithm for computing the transition density fo-
r the model with discrete dividends (given in Eqs. (1) and (2)) can be adapted to calculate the theoretical price P (t, S) of the American option. This allows solving the equation
P (t, S) = PM (t, S), (91)
iteratively to determine σ(t). Once this equation is solved and the implied volatility is determined, the corresponding European option price can be obtained by evaluating the first expectation in Eq. (6) - that is by computing the integral of the discounted payoff multiplied by the already known transition density. Notably, this value is already computed at every iteration while solving for σ(t). Furthermore, note that this result depends on σ(t) only through the definition of τ in Eq. (14). Intr-
oducing the mean volatility Σ as
Σ2 = 1
2T
∫T
t
σ2(k) dk ≥ 0, so that τ = Σ2T, (92)
we can determine it by solving the algebraic equation Eq. (91). At each iteration step for Σ, the computation of P (τ, x) follows the algorithm in Algorithm 3., which requires evaluating 2(Nd + Np) integrals with Gaussian kernels. Consequently, the computational complexity of this method is O(4(Nd + Np)INx), where I is the number of iterations needed to achieve convergence within the desired tolerance, and Nx is the number of points in x-space used to compute the integrals. This can be compared wi-
th
the complexity of the binomial tree method which is O(NxM 2) with M the number of time steps, and
Page 21 of 43

M ≫ Nd+Np since the temporal grid must encompass all ex-dividend dates as well as additional time steps to ensure sufficient accuracy (for the binomial tree method, the accuracy is only O(∆t), corresponding to a first-order temporal approximation). Moreover, in the case of discrete cash dividends the binomial tree loses its recombing property. When using the finite-difference (FD) method, a standard approach for valuing American options is: a) approximating the American option as a Bermudan optio-
n with a large number of exercise opportunities, and b) applying Richardson extrapolation to a series of Bermudan options with increasing exercise dates. However, this method introduces errors due to the discrete exercise schedule. Furthermore, the Bermudan option price is computed iteratively over time with some step size ∆t = T /M . At each time step tm, the option value is given by P (tm, x) = max(E(tm, x), PE (tm, x)), (93)
where PE(tm, x) is the continuation value (a European option price) and E(tm, x) is the exercise value. While this representation suffices for pricing, it suffers from poor accuracy when computing option Greeks, especially near the early exercise boundary (EB). To mitigate this issue, a penalty method is recommended [Zvan, Forsyth, and Vetzal, 1998; d’Halluin, Forsyth, and Vetzal, 2004], although it makes the whole algorithm slower. Overall, the complexity of the FD method is O(NxM Ip), with Ip be-
ing the number of iterations in the penalty method. Thus, our method should be faster due to: a) the fact that M ≫ Nd + Np because between the ex-dividend dates we employ a semi-analytical solution of the problem, so we don’t need a dense grid, and b) computation of spatial integrals is done using the FGT where the error decays exponentially when increasing p – the degree at which a Hermite expansion of the Gaussian kernel is truncated. Usually, moderate values of p ≈ 10 provide an error near mach-
ine precision, while the FD method spatial error is normally O(h2) with h being the spatial step. Thus, when comparing with the FD method, the FGT can deliver the same error while running with lower p, providing even faster performance. Alternatively, rather than solving an integral equation for the transition density, one can directly use the corresponding option pricing equation (e.g., Eq. (20)) to infer the implied time-dependent volatility σ(t).
5.1 De-Americanization via implied strikes
Similar to the concept of implied volatility, we can introduce the alternative notion of an implied strike K. Given a maturity T and a volatility function σ(t), the implied strike is defined as the solution to Eq. (91). To the best of our knowledge, this idea was first proposed by A. Skabelin in [Skabelin, 2015]. Under this approach the implied volatility could be chosen as an input of the model, for instance being equal to the constant ATM implied volatility. In this framework, de-Americanization-
 means that instead of working with implied volatilities, we consider a set of implied strikes K that make the theoretical price of an American option match its market price. By assuming that K remains the same for both American and European options, we can obtain a de-Americanized European option price. This adjusted price can then be used to recover the local volatility from American option market prices PM (t, S) via Dupire’s formula [Dupire, 1994], albeit with a slight modification. Under this-
 new framework, the option price is expressed as a function of the implied strike K rather than the strike K, where K is defined in terms of the variable x by Eq. (12), i.e.,
K = α(0)Se−x. (94)
Thus, without ambiguity, x can also be interpreted as a dimensionless implied strike. Recall that the values of x are obtained by solving Eq. (91). Then, in the Dupire formula, for instance,
Page 22 of 43

for the Call option, the local volatility is given by:
σ2(K, T ) =
∂C
∂T + [(r(T ) − q(T )]K ∂C
∂K + q(T )C
1
2 K2 ∂2C
∂K2
. (95)
However, now the following substitutions must be applied:
C(τ, x) = W (τ, x)e− ∫ τ
0 r(k)dk, ∂C
∂T → ∂C
∂T + ∂C
∂x
∂x
∂T , (96)
∂C
∂K → ∂C
∂x
∂x
∂K , ∂2C
∂K2 → ∂C
∂x
∂2x
∂K2 + ∂2C
∂x2
( ∂x ∂K
)2
, (97)
where
∂x
∂K = − 1
K , ∂2x
∂K2 = 1
K2 , ∂x
∂T = −1
2 σ2(T ) + a(T ), (98)
and the function τ (t, T ) is defined in Eq. (14). This approach provides a notable computational advantage because the implied strikes K (or x) can be calculated simultaneously for all market quotes across different strikes K (for a fixed maturity T ). Indeed, Eq. (20) can be made "autonomous", i.e., independent on K since by the definitions of W (τ, x) and Ψ(ν, ξ) in Eqs. (12) and (13), both terms are proportional to K, meaning the entire equation Eq. (20) can be divided by K to eliminate explic-
it strike dependence. As the variable x itself depends on K, the solution to Eq. (20) should be determined for a range of x values corresponding to market quotes. However, thanks to the FGT technique, this computation can be performed in a single sweep, as the method yields simultaneous outputs for multiple x. Once Eq. (20) is solved across the relevant x values which are obtained using the given spot price S and market strikes K, the implied strikes K can be reconstructed (e.g., via interpolation-
) from the definition of x in Eq. (12). Now, what happens when the option maturity T changes? According to the definition of τ in Eq. (14), we can adjust the volatility function σ(t) to maintain the original value of τ . Consequently, while Eq. (20) remains unchanged, the market quotes PM (t, S) on the left-hand side of Eq. (91) (or Eq. (20)) will vary. This means we must solve the same equation but with different left-hand sides. Importantly, this implies that solutions for all maturities T can b-
e obtained simultaneously by considering multiple lefthand sides, while the integrals in the right-hand side need only be computed once per iteration. As a result, all implied strikes K for various combinations of T and K can be determined in a single computational pass. This approach is conceptually similar to the method proposed in [Carr, Itkin, and Stoikov, 2020] (see also [Matic, Radoicic, and Stefanica, 2020]). The authors note that while the traditional method for computing Black-Scholes imp-
lied volatility is relatively straightforward, it faces significant challenges when applied to a wide range of model (or contract) parameters simultaneously. Specifically, iterative rootfinding algorithms may converge slowly due to two key issues: (i) the lack of a universally good initial guess to initiate the iterations, and (ii) the potential non-existence of solutions or extreme numerical sensitivity in certain parameter regions where the model price exhibits low sensitivity to changes in impl-
ied volatility. A counterintuitive yet promising alternative is to replace the algebraic equation like Eq. (91) with a more complex object, such as a PDE. At first glance, this substitution might seem impractical, as PDEs, particularly nonlinear ones, require specialized numerical methods that are far more involved than simple root-finding algorithms. However, the PDE framework offers a crucial advantage: whereas the algebraic equation must be solved independently at each point in the parameter sp-
ace (e.g., for every strike and maturity), the PDE approach enables simultaneous solutions across multiple points via time-marching
Page 23 of 43

sweeps. Moreover, linear PDEs can be solved non-iteratively, eliminating the need for an accurate initial guess altogether. A potential drawback of using implied strikes instead of implied volatilities is the need to construct an implied volatility surface from market quotes. If high precision is not essential, this can be achieved through various approximations, since the local volatility function is already known. For example, the approximation proposed in [Berestycki, Busca, and Florent, 2002]-
 can be applied for this purpose.
6 Numerical examples
This section presents numerical examples illustrating the methodology from the previous sections. The corresponding MATLAB code can be downloaded from this GitHub repository. The primary objective of this section is the computation of the EB. The American option price could be subsequently found using this EB. The procedure involves calculating the process’s transition density (as outlined in Section 3.2) and then substituting both the density and the EB into equation Eq. (8). Evaluating the resul-
ting integrals provides the European option value and the EEP. In terms of computational cost, solving Eq. (15) for the transition density is far less intensive than finding the EB, by a factor of 10 to 12. This disparity arises because the density solution uses a direct marching method in time, while the EB computation relies on an iterative root solver. Therefore, the total computation time is dominated by the EB, and the cost of obtaining the transition density and two remaining integrals is ne-
gligible in comparison.
6.1 The EB of an American Put on a non-dividend-paying asset
The first test case computes the EB for an American Put option on a non-dividend-paying asset, whose dynamics follows a time-homogeneous GBM. The results are then compared to those obtained from the binomial tree method, [Seydel, 2017]. The computation of EB via the GIT method involves numerically solving Eq. (68). However, the integral in ξ has a closed-form solution expressed in terms of special functions (via Erf). Therefore, we use this representation derived in Appendix D
I=
∫τ
0
η(s, y(s)) e− (y(s)−y(τ))2
4(τ −s)
√π(τ − s) ds + I2, (99)
I2 =
∫τ
0
∫∞
y(s)
η′ξ(s, ξ) − 2sη(s, ξ)(ξ − y(s))
√π(τ − s) e− (ξ−y(τ))2
4(τ−s) −s(ξ−y(s))2 dξds
=
∫τ
0
eC
2
√π(τ − s)
[
J1,1 + e−y(s)J1,2
]
ds,
so, Eq. (68) now reads
−Keτ +y(τ )
[
1 + Erf
( 2τ + y(τ )
2√τ
)]
=
∫τ
0
ds
√π(τ − s)
{
η(s, y(s))e− (y(s)−y(τ))2
4(τ−s) + eC
2
[
J1,1 + e−y(s)J1,2
]}
,
(100)
where integrals J1,1, J1,2 and function C are defined in Appendix D. As this is discussed in detail in Section 4.2, the first integral is an integral with weak singularity. Accordingly, based on Section 4.2, we re-write it as
∫τ
0
η(s, y(s)) e− (y(s)−y(τ))2
4(τ −s)
√π(τ − s) ds =
∫τ
0
ds
√π(τ − s)
[
η(s, y(s))e− (y(s)−y(τ))2
4(τ−s) − η(τ, y(τ ))
]
+ 2η(τ, y(τ ))
√τ
π.
Page 24 of 43

Using a Taylor series expansion around s → τ , it can be shown that the integrand in the right-hands part vanishes at s → τ , implying that the whole integral in the left-hands part has no singularities in this form. Regarding the second integral in Eq. (100), which is discussed in Appendix D, it has no singularity at s → τ . The contribution of this integral is minor compared to the first one at s → τ . The same holds at s → 0 if ρ′(0) ∼ O(1). However, this hierarchy at s → 0 reverses for small -
ρ′(0), causing the second term to dominate. Such small values of ρ′(s) are typically observed in environments characterized by high volatility and low instantaneous interest rates. Without loss of generality, we model the time-dependent coefficients of the GBM model as
r(t) = r0e−rkt + r1, q(t) = q0e−qkt + q1, σ(t) = σ0e−σkt + σ1, (101)
where r0, r1, rk, q0, q1, qk, σ0, σ1, σk are constants. In the first example the values of these parameters are given in Table 1, i.e. first, we explore a time-homogeneous GBM model with no dividends.
r0 r1 rk q0 q1 qk σ0 σ1 σk 0.01 0.0 0.0 0.0 0.0 0.0 0.6 0.0 0.0
Table 1: Model parameters for the numerical test 1.
0 0.05 0.1 0.15 0.2 0.25 t
50
55
60
65
70
75
80
85
90
95
100
-5
-4
-3
-2
-1
0
1
10-3
(a)
0 0.05 0.1 0.15 0.2 t
50
55
60
65
70
75
80
85
90
95
100
0
0.005
0.01
0.015
0.02
0.025
0.03
0.035
0.04
0.045
0.05
(b)
Figure 2: Early exercise boundaries for an American Put option under the time-homogeneous GBM model: (a) Using the model parameters from Table 1 with no dividends. The boundary SB(t) is computed using our method, while SF (t) is from the binomial tree method. (b) The same test where the EB is computed by solving Eq. (100) taking into account only the first term under the integral (curve SB(t)) and both terms (curve SB,2(t)).
The Volterra equation in Eq. (100) is solved using the trapezoidal rule. We use the previously computed value y(ti−1) as an initial guess for the iterative solver, which typically converges within 10-12
Page 25 of 43

iterations to reach the tolerance 1.0 × 10−8. 3 All computations were performed in MATLAB on a system with two Intel Quad-Core i7-4790 CPUs at 3.80 GHz. The first numerical test is conducted using the parameters T = 0.25, K = 100, and S = 100. In Fig. 2(a) the EB for the American Put option is plotted as a function of time t. Our method computed this boundary in 0.05 seconds using only N = 50 time steps. This small number of steps proved to be sufficient, as the output is stable and remains pract-
ically unchanged with further refinement of the time grid. This is due to the fact that the trapezoid quadratures provide a second order approximation O(∆τ ).
0 0.05 0.1 0.15 0.2 0.25 t
50
55
60
65
70
75
80
85
90
95
100
-14
-12
-10
-8
-6
-4
-2
0
2
4
6
10-3
(a)
0 0.05 0.1 0.15 0.2 0.25 t
30
40
50
60
70
80
90
100
-4
-2
0
2
4
6
8
10-3
(b)
Figure 3: Early exercise boundaries for an American Put option under the time-homogeneous GBM model: (a) Using the model parameters from Table 1 with no dividends. The boundary SB(t) is computed using our method, while SF (t) is from the binomial tree method. (b) The same test is repeated with r = 0.01, σ = 0.3, and a coarse 400 × 400 tree grid, which produces a non-monotonic early exercise boundary.
Following the discussion in Appendix D, Fig. 3(b) assesses the contribution of the two terms in the integral in Eq. (100). This is done by computing the EB using only the first term (curve SB(t) ) and then using both terms (curve SB,2(t) ). The two curves are nearly identical close to maturity but deviate as one moves away from it. This behavior, however, is parameter-dependent. For instance, with r = 0.05 and the other parameters from Table 1, the deviation remains relatively small for all t . We-
 compare our results against the EB computed using the binomial tree method [Seydel, 2017]. With a standard 400 × 400 grid, the binomial method runs in 0.03 seconds but yields a large error and a non-monotonic boundary for large τ , as shown in Fig. 3(a). To eliminate this non-monotonicity (Fig. 2(a)), the grid must be increased to 1600 × 3000 points, which increases the runtime to 0.37 seconds. Both methods are sensitive to the value of volatility. An increase in σ requires a larger N in our meth-
od and a larger grid size for the binomial tree. However, ensuring the stability of the binomial tree is non-trivial, as it requires manually adjusting the number of space (decreasing) or time steps (increasing)
3Higher-order quadrature methods, such as Simpson’s rule (which achieves O((∆t)4) accuracy) or adaptive schemes, could further enhance precision. These improvements require minimal implementation changes and no fundamental algorithmic modifications. In contrast, achieving similar accuracy gains with finite difference, tree, or Least Squares Monte Carlo (LSMC) methods remains challenging.
Page 26 of 43

to avoid non-monotonicity and a loss of accuracy, with no automated algorithm to guide this choice. This is demonstrated in Fig. 3(b) for the parameters r = 0.01, σ = 1.0. To achieve agreement between the outputs, we increased N to 150 for our method and the binomial grid to 500 × 2000. Consequently, the elapsed time increased to 0.10 seconds for our method and 0.12 seconds for the binomial tree (vs 0.04 secs for the grid of size 400 × 400).
6.2 The EB of an American Put with continuous dividends.
To investigate the influence of continuous dividends, we modify our model in two ways: a) by including continuous dividends, and b) by making all model parameters time-dependent. These parameters are given in Table 2. We compare our results with those from the binomial tree method, which uses average
r0 r1 rk q0 q1 qk σ0 σ1 σk 0.01 0.01 1.0 0.02 -0.01 0.1 0.3 0.0 2.0
Table 2: Model parameters for the numerical test 2 (continuous dividends and time-inhomogeneous parameters.
parameters defined as:
ra = 1
T
∫T
0
r(k)dk, qa = 1
T
∫T
0
q(k)dk, σa2 = 1
T
∫T
0
σ2(k)dk, (102)
where r(t), q(t), σ(t) are given in Eq. (101). The results are shown in Fig. 4.
0 0.05 0.1 0.15 0.2 0.25 t
78
80
82
84
86
88
90
92
94
96
98
100
-0.01
-0.005
0
0.005
0.01
0.015
0.02
(a)
0 0.05 0.1 0.15 0.2 0.25 t
0.01
0.011
0.012
0.013
0.014
0.015
0.016
0.017
0.018
0.019
0.02
0.19
0.2
0.21
0.22
0.23
0.24
0.25
0.26
0.27
0.28
0.29
(b)
Figure 4: Early exercise boundaries for an American Put option under the time-inhomogeneous GBM model: (a) Using the model parameters from Table 2. The boundary SB(t) is computed using our method, while SF (t) is from the binomial tree method with 500 × 2000 points. (b) Time-dependent parameters of the model.
The results indicate that even with a fine grid of 500 × 2000, the binomial tree method produces non-monotonicity for large τ . Furthermore, averaging the time-dependent parameters is ineffective, as
Page 27 of 43

the resulting EB diverges significantly from that computed by our time-inhomogeneous method (N = 50) as shown in Fig. 4(b). Our method is also computationally more efficient, with an elapsed time of 0.06 seconds compared to 0.08 seconds for the binomial tree. While efficient FD methods could resolve these issues with trees, our approach provides a clear advantage since it doesn’t require a 2D space-time grid.
6.3 The EB of an American Put with discrete proportional dividends
We now examine the case of discrete proportional dividends, which are incorporated into the model via the function a(t) in Eq. (2). Since a(t) only affects the function ρ(τ ) , the inclusion of discrete dividends solely modifies this term. We consider M dividends with amounts di 6= 0 paid at ex-dividend dates ti−. We conduct a test with four ex-dividend dates at t = [0.07, 0.12, 0.17, 0.22] and a maturity of T = 0.25. The associated dividend amounts are [5%, 4%, 3%, 2%]. All remaining parameters a-
re identical to those specified in Tables 1 and 2. The corresponded r(t), q(t), σ(t) are shown in Fig. 5(a). A temporal grid resolution of N = 100 is employed to accurately capture the ex-dividend dates, which are required to lie on the grid to preclude the need for interpolation. The results are presented in Fig. 5(b). A comparative benchmark, shown by the red curve, is generated using a binomial tree with no discrete dividends. In this benchmark, the time-dependent continuous dividends are repla-
ced by a constant continuous dividend yield, obtained by averaging the time-dependent dividends over the option’s lifetime. The elapsed computation time is almost unchanged at 0.08 seconds, as the algorithm’s structure is preserved. The sole modification is the pre-computation of the function a(t).
0 0.05 0.1 0.15 0.2 t
0.01
0.015
0.02
0.025
0.03
0.035
0.04
0.045
0.05
0.055
0.38
0.4
0.42
0.44
0.46
0.48
0.5
0.52
0.54
0.56
0.58
(a)
0 0.05 0.1 0.15 0.2 0.25 t
40
50
60
70
80
90
100
-0.6
-0.5
-0.4
-0.3
-0.2
-0.1
0
(b)
Figure 5: Early exercise boundaries for an American Put option under the time-inhomogeneous GBM model. (a) Time-dependent model parameters r(t), q(t), and σ(t), accounting for discrete proportional dividends. (b) The EB SB(t) is computed using our method, while SF (t) is from a binomial tree method that uses no discrete dividends and constant parameters, obtained by averaging the time-dependent parameters over the option’s lifetime.
As predicted by classical theory, the early exercise boundary (EB) for a proportional dividend is effectively vertical, existing only immediately before the ex-dividend date and solely for deep in-the-money options. Fig. 5 demonstrates a similar (but slightly different) behavior in the presence of both continuous
Page 28 of 43

dividends and time-dependent model parameters. To isolate the specific effect of the proportional dividend, we present the EB for a discrete proportional dividend alone in Fig. 6. The first plot shows results with time-dependent parameters, while the second uses constant parameters (i.e., r1 = rk = σ1 = σk = 0). It can be seen that both continuous dividends and time-dependent parameters of the model could significantly affect a shape of the EB.
0 0.05 0.1 0.15 0.2 0.25 t
50
60
70
80
90
100
-0.5
-0.4
-0.3
-0.2
-0.1
0
(a)
0 0.05 0.1 0.15 0.2 0.25 t
40
50
60
70
80
90
100
-0.6
-0.5
-0.4
-0.3
-0.2
-0.1
0
(b)
Figure 6: Early exercise boundaries for an American Put option under the GBM model, computed using our method with only proportional dividends: (a) time-dependent parameters, and (b) constant parameters (i.e., r1 = rk = σ1 = σk = 0). The benchmark SF (t) is derived from a binomial tree assuming no discrete dividends and constant parameters, where the constant values are the time-average of the model’s time-dependent parameters.
6.4 The EB of an American Put with cash discrete dividends.
This case is the most involved, as it entails solving a more complex nonlinear equation obtained by substituting the expression for U ′x(τj−, x) from Eq. (60) into Eq. (54).
−Keτ +y(τ )
[
1 + Erf
( 2τ + y(τ )
2√τ
)]
=
∫τ
0
∫∞
y(s)
e− (ξ−y(τ ))2
4(τ −s)
2
√π(τ − s)
ξ − y(τ )
τ − s η(s, ξ)e−s(ξ−y(s))2 dξds (103)
−
Nd
∑
j=1
1τj− <τ
2α(τj−)
Kσ2(τj−) Dj Λ(τj−, y(τj−)),
Λ(τj−, y(τj−)) =
∫∞
y(τj− )
ξ − y(τ )
2
√
π(τ − τj−)3 e− −(ξ−y(τ))2
4(τ −τj−)
[
−ζ(τj−, ξ)e−τj−(ξ−y(τj−))2 + e−ξUξ′ (τj−, ξ)
]
dξ.
Recall, that in the absence of discrete cash dividends, this equation reduces to the form we considered in earlier examples (i.e., all Dj = 0). Then, the algorithm of solving it with Dj 6= 0 is as follows:
Algorithm 2. Solving Eq. (103)
(a) Define the ex-dividend dates tj− and the corresponding cash dividend amounts Dj for j = 1, . . . , M .
Page 29 of 43

(b) Solve Eq. (103) as in the no-dividend case until the first ex-dividend date, τ ≤ τ1−. (c) At τ = τ1− + 0, compute the first term of the sum in Eq. (103). (d) Continue solving Eq. (103) with this new term included and updated at every τ until the next ex-dividend date, τ ≤ τ2−. (e) At τ = τ2− + 0, compute the second term of the sum in Eq. (103). (f) Repeat this process sequentially for all remaining dividend dates j = 3, . . . , M .
Thus, this differs from the case of no dividends by the necessity to compute Λ(τj−, y(τj−)) at times right after each ex-dividend date. Fortunately, a part of these calculations could be done analytically as this is shown in Appendix E. The final result reads
Λ(τj−, y(τj−)) = Kβ(τj−)
[
e−y(τj−) (a0J2(1) + a1J2′ (1) + a2J2′′(1)) + b0J2(0) + b1J2′ (0) + b2J2′′(0)
]
, (104)
where coefficients ai, bi, i = 0, 1, 2 are defined in Eq. (E.4) and the function J2(A) and its derivatives are given in Eqs. (D.8) and (D.9). It is important that J2(A) and its derivatives can be computed all together with just one evaluation of an exponential, a complementary error function (Erfc), and a square root. In this test we maintain the same experimental setup as before, substituting discrete proportional dividends with discrete cash dividends. While the ex-dividend dates remain identica-
l, the dividend amounts are now defined as fixed cash values: [0.05, 0.04, 0.03, 0.02] × K. This formulation preserves the same nominal percentages as in the proportional case but links them to the strike price K instead of the spot prices at the ex-dividend dates St−.
0 0.05 0.1 0.15 0.2 0.25 t
20
30
40
50
60
70
80
90
100
-2.5
-2
-1.5
-1
-0.5
0
(a)
0 0.05 0.1 0.15 0.2 0.25 t
20
30
40
50
60
70
80
90
100
-2.5
-2
-1.5
-1
-0.5
0
(b)
Figure 7: Early exercise boundaries SB(t) for an American put option under the time-inhomogeneous GBM model, computed using our method for two cases: (a) with continuous and discrete cash dividends, and (b) with all dividend types (continuous, discrete cash, and discrete proportional). The benchmark SF (t) is derived from a binomial tree assuming no discrete dividends and constant parameters, where the constant values are the time-average of the model’s time-dependent parameters.
The results are presented in Fig. 7(a). The typical elapsed time increases slightly to 0.085 seconds, as expected.
Page 30 of 43

Finally, Fig. 7(b) shows the early exercise boundary for an American Put where the underlying pays all types of dividends: continuous, discrete cash (as in the previous experiment), and discrete proportional dividends. The proportional dividends use the same amounts as in Section 6.3 but with slightly shifted ex-dividend dates (to distinguish them from the discrete cash dividends) to [0.08, 0.13, 0.18, 0.23]. The elapsed time again increases slightly, to 0.11 seconds. It is worth noting that the -
current computation time is dominated by a non-vectorizable for-loop that calculates the EB using basic arithmetic operations (like MATLAB’s fzero solver. Due to the interpreter overhead in MATLAB loops, a C++ implementation would be dramatically faster. One could expect a speedup of 100x or more, which aligns with the performance reported in [Andersen, Lake, and Offengenden, 2016].
7 Conclusion
This paper presents a novel, semi-analytical framework for pricing American options on assets that pay various types of dividends including discrete cash and proportional dividends (taken into account by using Dirac delta functions) and continuous dividends. The core challenge lies in the complex interplay between the optimal early exercise strategy and the predictable, discontinuous jumps in the underlying asset price at ex-dividend dates. The proposed methodology is built upon two foundational p-
illars: a) the decomposition formula which represents the American option price as the sum of the corresponding European option price and the EEP, while the EEP is formulated as an integral that depends critically on the unknown EB; and b) the GIT method which, to determine the EB, transforms the problem into an non-linear Volterra integral equation of the first or second kind with respect to SB(t). This equation can be solved by various method including fixed-point iterations, etc. To emphasize, -
the model accommodates a realistic market setting by incorporating both discrete cash and proportional dividends within a popular time-inhomogeneous Geometric Brownian Motion framework, featuring time-dependent interest rates, borrow costs, and volatility. A similar approach could be developed for some other one-factor models as this is shown in [Itkin and Muravey, 2024; Itkin, 2025]. Key advantages of the proposed approach are:
• Efficiency and accuracy: By leveraging the structure of the integral equations and the FGT for numerical computation, the method achieves high accuracy with linear computational complexity in the spatial variable. This is a significant advantage over traditional methods like finite difference or binomial trees, which require dense temporal grids and lose efficiency, especially with multiple dividends. • Handling singularities: The paper provides a rigorous treatment of the numerical challenges p-
osed by the problem, including the weak singularities inherent in the Volterra equations and the known singularity in the derivative of the EEB at expiration. A change of variables is proposed to effectively remove these singularities, ensuring robust numerical solutions.
• Simultaneous solution for strikes and maturities: A particularly powerful insight is the method’s potential for "de-Americanization" – converting American option prices into their European equivalents for use in local volatility models. By using a notion of "impled strike", [Skabelin, 2015], the structure of the equations allows for the simultaneous computation of implied strikes across multiple maturities and market quotes in a single computational pass, a task that is computationally prohibiti-
ve for traditional iterative methods.
The analysis also yields important theoretical insights. The derived integral equations for the EEB formally demonstrate the well-known financial results, namely: for American Put options, the early exercise boundary ceases to exist (i.e., early exercise is never optimal) when interest rates are negative.
Page 31 of 43

Conversely, for American call options, the early exercise boundary does not exist when interest rates are positive. This is derived mathematically from the properties of the governing integral equations. In summary, this work provides a robust, efficient, and theoretically sound semi-analytical alternative to purely numerical methods for a classic problem in quantitative finance. By reformulating the problem in terms of integral equations and employing advanced analytics and numerical techniques -
(like the FGT for computing integrals with Gaussian kernels), it offers a path to accurate pricing and risk management of American options with discrete dividends, even in demanding applications like calibration of local volatility surfaces from market data. The framework is general and can be extended to more complex underlying dynamics beyond the time-inhomogeneous GBM model considered here.
Acknowledgments
I thank Leif Andersen for various fruitful discussions and Alex Skabelin for useful comments. The use of LLMs in this paper has been limited to minimal proofreading. Both the mathematical content and the drafting of this research have been produced without any kind of reliance on generative AI.
Conflict of interest
The author has no competing interests to declare that are relevant to the content of this article.
Funding
The author has no relevant financial or non-financial interests to disclose.
Compliance with Ethical Standards
This article does not contain any studies with human participants or animals performed by any of the authors.
References
Abramowitz, M. and I. Stegun (1964). Handbook of Mathematical Functions. Dover Publications, Inc. Andersen, L. (2025). “American Option Pricing by the Finite Difference Method”. In: Willmott Magazine (forthcoming).
Andersen, L. and M. Lake (2021). “Fast American Option Pricing: The Double-Boundary Case”. In: Wilmott Magazine (116), pp. 30–41.
Andersen, L. and M. Lake (2024). “Fast Option Pricing with Discrete Dividends”. In: WBS Conference. Cannes, France. Andersen, L., M. Lake, and D. Offengenden (2016). “High-performance American option pricing”. In: Journal of Computational Finance 20, 1, pp. 39–87.
Areal, N. and A. Rodrigues (2013). “Fast Trees for Options with Discrete Dividends”. In: The Journal of Derivatives 21, 1, pp. 49–63.
Ballester, C., R Company, and L Jódar (2008). “An efficient method for option pricing with discrete dividend payment”. In: Computers & Mathematics with Applications 56, 3, pp. 822–835.
Page 32 of 43

Bateman, H. and A. Erdélyi (1953). Higher Transcendental Functions. Vol. 1. Bateman Manuscript Project California Institute of Technology. McGraw-Hill.
Bender, C. M. and S. A. Orszag (1978). Advanced mathematical methods for scientists and engineers. New York: McGraw-Hill. Berestycki, H., H. Busca, and I. Florent (2002). “Asymptotics and calibration of local volatility models”. In: Quantitative Finance 2, pp. 61–69.
Bos, R. and S. Vandermark (2002). “Finessing Fixed Dividends”. In: Risk 15, 9, pp. 157–158. Burkovska, O. et al. (2018). “Calibration to American options: numerical investigation of the de-Americanization method”. In: Quantitative Finance 18, 7, pp. 1091–1113. Carr, P., A. Itkin, and S. Stoikov (2020). “Model-Free Backward and Forward Nonlinear PDEs for Implied Volatility”. In: Journal of Derivatives 28, 1, pp. 51–79. Chiarella, C., N. El-Hassan, and A. Kucera (2006). The Numerical Solution of the-
 American Option Pricing Problem: Finite Difference and Transform Approaches. Frontiers in Finance Series. River Edge, NJ: World Scientific Publishing. Cont, R. and E. Voltchkova (2005). “Integro-differential equations for option prices in exponential Lévy models”. In: Finance and Stocxhastics 9, 3, pp. 299–325. Cox, J., S. Ross, and M. Rubinstein (1979). “Option Pricing: A Simplified Approach”. In: Journal of Financial Economics 7, pp. 229–263.
De Marco, S. and P. Henry-Labordere (Nov. 2017). “Local Volatility from American Options”. In: Risk. d’Halluin, Y., P. A. Forsyth, and K. R. Vetzal (2004). “A penalty method for American options with jump diffusion processes”. In: Numerische Mathematik 97, pp. 321–352. Dupire, B. (1994). “Pricing with a Smile”. In: Risk 7, pp. 18–20. Evans, J., R. Kuske, and J. Keller (2002). “American options on assets with dividends near expiry”. In: Mathematical Finance 12, 3, 219––237. Gardiner, C. W. (2004). -
Handbook of stochastic methods for physics, chemistry and the natural sciences. Third. Vol. 13. Springer Series in Synergetics. Berlin: Springer-Verlag. isbn: 3-540-20882-8. Geske, R. (1979). “A Note on an Analytical Valuation Formula for Unprotected American Call Options on Stocks with Known Dividends”. In: Journal of Financial Economics 7, 4, pp. 375–380. Goodman, J. and D. Ostrov (2002). “On the early exercise boundary of the American put option”. In: SIAM Journal of Applied Mathematics 62, 5, -
pp. 1823–1835.
Greengard, L. F. et al. (2024). “A New Version of the Adaptive Fast Gauss Transform for Discrete and Continuous Sources”. In: SIAM Review 66, 2, pp. 287–315. Guo, J.-H. and L.-F. Chang (2020). “A generalization of option pricing to price-limit markets”. In: Review of Derivatives Research 23, 2, pp. 145–161.
Haug, E., J. Haug, and A. Lewis (2003). “Back to basics: a new approach to the discrete dividend problem”. In: Wilmott magazine September, pp. 37–47. Hirsa, A. (2013). Computational Methods in Finance. 1st. Chapman and Hall/CRC. isbn: 978-1439829578. Hunter, J. (2014). Notes on Partial Differential Equations. Department of Mathematics, University of California at Davis. url: https://www.math.ucdavis.edu/~hunter/pdes/pde_notes.pdf.
Itkin, A. (2017). Pricing derivatives under Lévy models. 1st ed. Pseudo-Differential Operators 12. Basel: Birkhauser. Itkin, A. (2024). “Semi-analytic pricing of American options in time-dependent jump-diffusion models with exponential jumps”. In: The Journal of derivatives 31 (4), pp. 0–0.
Itkin, A. (June 2025). American options valuation in time-dependent jump-diffusion models via integral equations and characteristic functions. ArXiV: 2506.18210. url: https://arxiv.org/abs/2506.18210. Itkin, A. and Y. Kitapbayev (Feb. 2025). Floating exercise boundaries for American options in timeinhomogeneous models. ArXiv: 2502.00740. url: https://arxiv.org/abs/2502.00740.
Page 33 of 43

Itkin, A., A. Lipton, and D. Muravey (2021). Generalized Integral Transforms in Mathematical Finance. Singapore: WSPC. isbn: 978-981-123-173-5. Itkin, A. and D. Muravey (2024). “American options in time-dependent one-factor models: Semi-analytic pricing, numerical methods and ML support”. In: The Journal of derivatives 31 (3), pp. 74–114. Kim, I. (1990). “The analytic valuation of American options”. In: Financial Studies 3, pp. 547–572.
Klebaner, F. (2005). Introduction to stochastic calculus with applications. London, UK.: Imperial College Press. Kwok, Y. (2008). Mathematical Models of Financial Derivatives. Springer Finance. Springer Berlin Heidelberg. isbn: 9783540686880. Longstaff, F. A. and E. S. Schwartz (2001). “Valuing American Options by Simulation: A Simple LeastSquares Approach”. In: The Review of Financial Studies 14, 1, pp. 113–147. Lu, S.-P. Z. X.-J. H. X. (2018). “A new integral equation formulation for American pu-
t options”. In: Quantitative Finance 18. 3, pp. 483–490.
Matic, I., R. Radoicic, and D. Stefanica (2020). “A PDE method for estimation of implied volatility”. In: Quantitative Finance 20, 3, pp. 393–408.
Peskir, G. (2005). “A Change-of-Variable Time on Curves”. In: Journal of Theoretical Probability 18, 3, pp. 499–535. Polyanin, P. and A. Manzhirov (2008). Handbook of Integral Equations: Second Edition. Handbooks of mathematical equations. CRC Press. isbn: 9780203881057. Roll, R. (1977). “An Analytic Valuation Formula for Unprotected American Call Options on Stocks with Known Dividends”. In: Journal of Financial Economics 5, 2, pp. 251–258. Seydel, R. (2017). Tools for computational finance. 6th. -
London: Springer.
Skabelin, A. (Aug. 2015). The Implied Strike. SSRN::5392787. url: https://papers.ssrn.com/sol3/papers.cfm? Spivak, M., S. Veerapaneni, and L. Greengard (2010). “The Fast Generalized Gauss Transform”. In: SIAM Journal on Scientific Computing 32, 5, pp. 3092–3107.
Tikhonov, A. and A. Samarskii (1963). Equations of mathematical physics. Oxford: Pergamon Press. Van Kampen, N. (1992). Stochastic Processes in Physics and Chemistry. Elsevier Science Publishers, Amsterdam. Vellekoop, M. and H. Nieuwenhuis (2006). “A Tree-Based Method to Price American Options in the Presence of Discrete Dividends”. In: Journal of Computational Finance 10, 1, pp. 1–21. Vellekoop, M. H. and J. W. Nieuwenhuis (2011). “An integral equation for American put options on assets with gene-
ral dividend processes”. In: Quantitative Finance 11, 1, pp. 151–159. Whaley, R. E. (1981). “On the Valuation of American Call Options on Stocks with Known Dividends”. In: Journal of Financial Economics 9, 2, pp. 207–211. Wilmott, P., J. Dewynne, and S. Howison (1993). Option Pricing: Mathematical Models and Computation. Oxford: Oxford Financial Press. isbn: 0-9522082-0-4. Zvan, R., P. A. Forsyth, and K. R. Vetzal (1998). “Penalty Methods for American Options with Stochastic Volatility”. In: J. Co-
mput. Appl. Math. 91, 2, pp. 199–218.
Page 34 of 43

Appendices
A Computing the transition density step-by-step
This case differs from the European put option pricing problem described in Section 3.1, namely: while we still need to solve the PDE in Eq. (15), the source term Φ(τ, x) now vanishes, and the initial condition in Eq. (33) becomes a delta function. Accordingly, instead of Eq. (20) we now obtain the following Volterra-Fredholm equation of the second kind
W (τ, x|0, x0) = e− (x−x0)2
4τ
2√πτ (A.1)
+
Nd
∑
j=1
Dj 1τj−≤τ
∫∞
−∞
x − ξ − 2(τ − τj−) τ − τj−
α(τj−)
σ2(τj−) e−ξG(x, ξ, τ − τj−)W (τj−, ξ|0, x0)dξ,
where the Green’s function G(x, ξ, τ ) remains defined by Eq. (17). Here, discrete cash dividends are counted forward in time τ . The notation 1τj−≤τ indicates that we only consider dividends satisfying 0 < τ1− < . . . < τk− < τ , where τj is the inverse map of Tj as defined in Eq. (37). To solve Eq. (A.1) we proceed as follows:
Algorithm 3. Solving Eq. (A.1)
(a) τ < τ1−. The solution of Eq. (A.1) coincides with the log-normal density same as in the BlackScholes model with time-dependent coefficients (the first term in the right-hands part of Eq. (A.1)). (b) τ = τ1−. Using the identity Eq. (22), we obtain from Eq. (A.1)
W (τ1−, x|0, x0) = A(τ1−, x) + B(τ1−)e−x [Wx′ (τ1−, x|0, x0) − 2W (τ1−, x|0, x0)] , (A.2)
A(τ, x) = e− (x−x0)2
4τ
2√πτ .
This is a first-order ordinary differential equation for W (τ1−, x|0, x0). By solving it, we obtain
W (τ1−, x|0, x0) = e
ex
B(τ1−) +2x 1
B(τ1−)
∫∞
x
A(τ1−, k)e−k−ek/B(τ1−)dk. (A.3)
At x → ±∞ this yields W (τ1−, x|0, x0) → 0 which are the correct boundary conditions, see Eq. (34). (c) τ2− > τ > τ1−. Since W (τ1−, x|0, x0) has already been found at the previous step, the transition density W (τ, x|0, x0) is again given by the log-normal density identical to that in the Black-Scholes model with time-dependent coefficients (the first term on the right-hands part of Eq. (A.1)), plus the second integral where all integrand terms are known from prior calculations. (d) τ = τ2−. This-
 step is similar to the step (b) with the only difference that A(τ2−, x) is now defined as
A(τ2−, x) = e− (x−x0)2
4τ
2√πτ + 1
2√π
1
∑
j=1
DjJj(τ2−, x), (A.4)
Jj (τ2−, x) =
∫∞
−∞
x − ξ + 2(τ2− − τ1−)
τ2− − τ1−
α(τ2−)
σ2(τ2−) e−ξG(x, ξ, τ2− − τ1−)W (τ1−, ξ|0, x0)dξ.
(e) and so on ...
Page 35 of 43

Again, the integrals in Eqs. (A.3) and (A.4) can be computed with linear complexity by using [Spivak, Veerapaneni, and Greengard, 2010; Greengard et al., 2024]. Alternatively, similar to the computation of the integral in Eq. (27), we can rewrite Eq. (A.3) as
W (τ, x|0, x0) = e2x
B(τ )
∫∞
x
A(τ, k)e−k [
e−ex−LB − e−ek−LB ]
= e−e−LB +x−LB +x e2x
B(τ )
N
∑
i=1
ai(LB, x) (A.5)
·
∫∞
x
A(τ, k)(k − x)ie−kdk = e2x
B(τ )
2k−1τ k/2
√π e−x− (x−x0)2
4τ
[
Γ
(k + 1 2
)
1F1
(k + 1
2 ;1
2 ; (x − x0 + 2τ )2
4τ
)
+ x − x0 + 2τ
√τ Γ
(k
2 +1
)
1F1
(k + 2
2 ;3
2 ; (x − x0 + 2τ )2
4τ
)]
, LB = log(B(τ )), τ = τ1−,
where Γ(x) is the gamma function, 1F1(a, b, x) is the Kummer confluent hypergeometric function, [Abramowitz and
In Eq. (A.5) we employ a Taylor series expansion of e−ex−LB − e−ek−LB about k = x, retaining terms up to order N . The coefficients of this expansion can be readily computed, e.g.
a1(LB, x) = 1, a2(LB, x) = 1
2
(
eLB − ex)
e−LB , ... (A.6)
However, computing the integral in Eq. (A.4) and subsequently evaluating the expectations in Eq. (8) may be computationally expensive when using analytical representations of the integrands in terms of special functions. Therefore, numerical integration via the FGT method is preferable.
B Integral equation for the exercise boundary of the American Put
To derive an integral Volterra equation of the first kind for the EB, similar to [Itkin and Muravey, 2024] we first, differentiate both parts of Eq. (46) on x, and then set x → y(τ ). The first step yields
Ψ(τ, x) = 1
2√πτ
∫∞
y(0)
U (0, ξ)
[
− y(τ ) − ξ
2τ e− (y(τ)−ξ)2
4τ + ξ − y(τ )
2τ e− (y(τ)−ξ)2
4τ
]
(B.1)
+
∫τ
0
Ψ(s, y(s))
4
√π(τ − s)3
[
(x − y(s))e− (x−y(s))2
4(τ−s) − (x + y(s) − 2y(τ )))e− (x−2y(τ)+y(s))2
4(τ −s)
]
ds (B.2)
−
∫τ
0
∫∞
y(s)
λ(s, ξ)
4
√π(τ − s)3
[
(x − ξ)e− (x−ξ)2
4(τ−s) − (x + ξ − 2y(τ ))e− (ξ−2y(τ)+x)2
4(τ −s)
]
dξds.
Here, the function Ψ(τ, x) is the gradient of the solution
Ψ(τ, x) = ∂U (τ, x)
∂x . (B.3)
We now need to take the limit x → y(τ ). As detailed in [Tikhonov and Samarskii, 1963; Itkin, Lipton, and Muravey for the first two integrals the result depends on whether we approach the EB from the right, x → y(τ ) + 0, or from the left, x → y(τ ) − 0. But, since we are working within the continuation region of the American Put, which is x ∈ [y(τ ), ∞), we require the limit from the right: x → y(τ ) + 0. We begin with the first part of the first integral I1 in Eq. (B.1). Using the result in [Tik-
honov and Samarskii, 19 Itkin, Lipton, and Muravey, 2021], we obtain
lim
x→y(τ )+0
∫τ
0
Ω(s, y(s))
4
√π(τ − s)3 (x − y(s))e− (x−y(s))2
4(τ−s) ds = 1
2 Ω(τ, y(τ )) +
∫τ
0
Ω(s, y(s))
4
√π(τ − s)3 (y(τ ) − y(s))e− (y(τ)−y(s))2
4(τ −s) ,
Page 36 of 43

Ω(s, y(s)) ≡ Ψ(s, y(s)). (B.4)
Similarly, for the second part of the first integral in Eq. (B.1), introducing x ̄ = 2y(τ ) − x, we have
− lim
x→y(τ )+0
∫τ
0
Ω(s, y(s))
4
√π(τ − s)3 (2y(τ ) − x − y(s))e− (2y(τ)−x−y(s))2
4(τ−s) ds (B.5)
= − lim
x ̄→y(τ )−0
∫τ
0
Ω(s, y(s))
4
√π(τ − s)3 (x ̄ − y(s))e− (x ̄−y(s))2
4(τ −s) ds
= −1
2 Ω(τ, y(τ )) +
∫τ
0
Ω(s, y(s))
4
√π(τ − s)3 (y(τ ) − y(s))e− (y(τ)−y(s))2
4(τ −s) .
Thus,
lim
x→y(τ )+0 I1 =
∫τ
0
Ω(s, y(s))
2
√π(τ − s)
y(τ ) − y(s)
τ − s e− (y(τ)−y(s))2
4(τ−s) ds. (B.6)
This result can also be directly applied to the second integral in Eq. (B.1) when ξ = y(s) while for other values of ξ there is no such an issue. For the first integral in Eq. (B.1) we have
J0 =
∫∞
y(0)
U (0, ξ) ξ − y(τ )
2√πτ 3 e− (ξ−y(τ))2
4τ dξ = −
∫∞
y(0)
U (0, ξ)
√πτ d
(
e− (ξ−y(τ ))2
4τ
)
(B.7)
= U (0, y(0))
√πτ e− (y(0)−y(τ))2
4τ +
∫∞
y(0)
Uξ′ (0, ξ)
√πτ e− (ξ−y(τ))2
4τ dξ = √1πτ
∫∞
y(0)
Uξ′ (0, ξ)e− (ξ−y(τ))2
4τ dξ,
since U (0, y(0)) = 0. Further, using the definition of h(τ, x) in Eq. (44), an expression for Ψ(τ, y(τ ) in Eq. (48) and combining them with the above results together, we finally obtain a nonlinear integral Volterra equation of the first kind for y(τ )
0 = √1πτ
∫∞
y(0)
Uξ′ (0, ξ)e− (ξ−y(τ))2
4τ dξ +
∫τ
0
∫∞
y(s)
e− (ξ−y(τ ))2
4(τ −s)
2
√π(τ − s)
ξ − y(τ )
τ − s η(s, ξ)e−s(ξ−y(s))2 dξds, (B.8)
−
∫τ
0
γ(s)
∫∞
y(s)
[
e−ξUξ′ (s, ξ) − ζ(s, ξ)e−s(ξ−y(s))2 ] ξ − y(τ )
2
√π(τ − s)3 e− (ξ−y(τ))2
4(τ−s) dξds,
C Derivation of J3(τj−, τj−, x) in Eq. (57)
Recall that by the definition in Eq. (57)
J3(τj−, τi−, x) =
∫∞
y(τi− )
ζ (τi−, ξ)τj−−1e− (ξ−y(τi−))2
√τi−
ξ − y(τj−)
2
√
π(τj− − τi−)3 e− (ξ−y(τj−))2
4(τj−−τi−) dξ (C.1)
+
∫∞
y(τi− )
e−ξU (τi−, ξ)



−1 2
√
π(τj− − τi−)

e− (x−ξ)2
4(τj−−τi−) − e− (ξ+x−2y(τj−))2
4(τj− −τi−)


+1 4
√
π(τj− − τi−)3

(x − ξ)e− (x−ξ)2
4(τj−−τi−) + (x + ξ − 2y(τj−))e− (ξ+x−2y(τj−))2
4(τj−−τi− )





dξ, i < j.
Page 37 of 43

Further, for ease of notation we drop the index in τj−. At i = j the second integral takes the form
J3(τ, τ, x) =
∫∞
y(τ )
e−ξU (τ, ξ)
[
δ(ξ + x − 2y(τ )) − δ(x − ξ) + δ′ξ(x − ξ) − δ′ξ(ξ + x − 2y(τ ))
]
. (C.2)
Thus, the result is a sum of four integrals. Consider, for instance, the last one
I4 =
∫∞
y(τ )
f (ξ) ∂δ(x + ξ − 2y(τ ))
∂ξ dξ, f (ξ) = −e−ξU (τ, ξ). (C.3)
To simplify the argument of the delta function, let’s perform a change of variables: u = x + ξ − 2y(τ ). Substituting these into the integral, we get:
I4 =
∫∞
x−y(τ )
f (u − x + 2y(τ ))δ′(u) du (C.4)
By the sifting property of the derivative of the Dirac delta function
∫b
a
g(u)δ′(u) du = −g′(0). (C.5)
This identity holds if and only if the point u = 0 is within the interval of integration [a, b]. Otherwise, if u = 0 is outside this interval, the integral is zero. Since in our case x > y(τ ), we have I4 = 0. In a similar manner, we get
I3 =
∫∞
y(τ )
f (ξ) ∂δ(x − ξ)
∂ξ dξ = −f ′(x), I2 =
∫∞
y(τ )
f (ξ)δ(x + ξ − 2y(τ )) dξ = 0, (C.6)
I1 = −
∫∞
y(τ )
f (ξ)δ(x − ξ) dξ = −f (x).
The first integral can be calculated in a similar manner since at i = j the integrand is also proportional to the derivative of a delta function. Collecting all terms, this yields
J3(τj−, τj−, x) = −ζξ(τj−, y(τj−)) − e−xU ′(τj−, x). (C.7)
D Calculation of the internal integral in Eq. (68)
Here, we want to calculate the integral
I=
∫∞
y(s)
e− (ξ−y(τ ))2
4(τ −s)
2
√π(τ − s)
ξ − y(τ )
τ − s η(s, ξ)e−s(ξ−y(s))2 dξ, (D.1)
where η(τ, x) is defined in Eq. (43) as
η(s, ξ) = z(s, ξ)
[
Z2(1 + 4s2) − 2sy′(s)Z − (2s + r ̄′(s))
]
+ Kβ(s)eξ [4sZ − ρ′(s)] , Z = ξ − y(s). (D.2)
Using the representation
ξ − y(τ )
2(τ − s) e− (ξ−y(τ))2
4(τ−s) e−s(ξ−y(s))2 = −L
[
e− (ξ−y(τ ))2
4(τ −s) −s(ξ−y(s))2
]
, L= ∂
∂ξ + 2s(ξ − y(s)), (D.3)
Page 38 of 43

and integrating by parts, the double integral in Eq. (68) can be represented as
I =−
∫τ
0
∫∞
y(s)
η(s, ξ)
√π(τ − s) L
[
e− (ξ−y(τ ))2
4(τ −s) −s(ξ−y(s))2
]
dξds = −(I1 + I2), (D.4)
I2 = 2
∫τ
0
∫∞
y(s)
sη(s, ξ)(ξ − y(s))
√π(τ − s) e− (ξ−y(τ))2
4(τ−s) −s(ξ−y(s))2 ,
I1 = −
∫τ
0
η(s, y(s)) e− (y(s)−y(τ))2
4(τ −s)
√π(τ − s) ds −
∫τ
0
∫∞
y(s)
η′ξ(s, ξ)
√π(τ − s) e− (ξ−y(τ))2
4(τ−s) −s(ξ−y(s))2 dξds.
Combining all these expressions together, yields
I=
∫τ
0
η(s, y(s)) e− (y(s)−y(τ))2
4(τ −s)
√π(τ − s) ds +
∫τ
0
∫∞
y(s)
η′ξ(s, ξ) − 2sη(s, ξ)(ξ − y(s))
√π(τ − s) e− (ξ−y(τ))2
4(τ−s) −s(ξ−y(s))2 dξds. (D.5)
Therefore, now we need to calculate
J1 =
∫∞
y(s)
η′ξ(s, ξ) − 2sη(s, ξ)(ξ − y(s))
√π(τ − s) e− (ξ−y(τ))2
4(τ −s) −s(ξ−y(s))2 dξ = e− (y(s)−y(τ ))2
4(τ −s)
√π(τ − s)
∫∞
0
F (s, Z)e− p2Z2+p1Z
4(τ−s) dZ,
F (s, Z) = η′Z (s, Z) − 2sZη(s, Z) = Kβ(s)
3
∑
i=0
[
aieZ+y(s) + bi
]
Zi, (D.6)
a0 = r ̄′(s) − ρ′(s) + 2s (y′(s) + 3) , a1 = 2
(
s
(2 − r ̄′(s) + ρ′(s) + y′(s)) − 6s2 − 1
)
,
a2 = −(1 + 4s2(3 + y′(s))), a3 = 2s
(
4s2 + 1
)
,
b0 = −2sα(s)y′(s), b1 = 2α(s)
(
1 + 6s2 + sr ̄′(s)
)
,
b2 = 4s2α(s)y′(s), b3 = −2sα(s)
(
4s2 + 1
)
.
In turn, using a standard trick, the last integral can be re-written in the form
J1,0 =
∫∞
0
F (s, Z)e− p2Z2+p1Z
4(τ−s) dZ = Kβ(s)
[
ey(s) Ali→m1
3
∑
i=0
ai + Ali→m0
3
∑
i=0
bi
] ∂i
∂Ai
∫∞
0
e−k2Z2+k1(A)Z dZ,
k1(A) = A + y(τ ) − y(s)
2(τ − s) , k2 = s + 1
4(τ − s). (D.7)
The integral in Eq. (D.7) can be computed in closed form to yield
J2(A) =
∫∞
0
e−k2Z2+k1(A)Z dZ =
√π
2√k2
e
k1 (A)2
4k2
[
1 + Erf
( k1(A)
2√k2
)]
. (D.8)
Accordingly,
J2′ (A) = 1
2k2
+
√πk1(A)
4k3/2
2
e
k12 (A)
4k2
[
1 + Erf
( k1(A)
2√k2
)]
, (D.9)
J2′′(A) = k1(A)
4k22
+
√π(2k2 + k12(A))
8k5/2
2
e
k12 (A)
4k2
[
1 + Erf
( k1(A)
2√k2
)]
,
J2′′′(A) = 4k2 + k12(A)
8k23
+
√πk1(A)(6k2 + k12(A))
16k7/2
2
e
k12 (A)
4k2
[
1 + Erf
( k1(A)
2√k2
)]
,
Page 39 of 43

and, hence
J1,0 = Kβ(s)
[
ey(s) (a0J2(1) + a1J2′ (1) + a2J2′′(1) + a3J2′′′(1)) + b0J2(0) + b1J2′ (0) + b2J2′′(0) + b3J2′′′(0)
]
.
(D.10)
Finally, combining Eqs. (D.5) and (D.9), we obtain
I=
∫τ
0
e− (y(s)−y(τ ))2
4(τ −s)
√π(τ − s) [η(s, y(s)) + J1,0] ds, (D.11)
where η(s, y(s)) = −(2s + r ̄′(s))z(s, y(s)) − Kβ(s)ey(s)ρ′(s). (D.12)
One can verify that the dominant contribution to the integrand in Eq. (D.11) comes from the first term inside the brackets. Indeed, consider both terms in the limit s → τ . By the definition of J2 and its derivatives in Eq. (D.9), at s → τ J2 vanishes together with all its derivatives, while the first term in the braces η(τ, y(τ ) not.
ρ' 0) = 1.0
ρ'(0) = 0.1
ρ'(0) = 0.01
0 0.02 0.04 0.06 0.08 0.10
-2.5
-2.0
-1.5
-1.0
-0.5
0
T2/T1
Figure 8: Comparison of two terms T1 and T2 in braces in Eq. (D.11) at various values of ρ′(0).
Similar analysis can be done as s → 0. In this limit we have a0 = a3 = b0 = b2 = b3 = 0, b1 = 2, a1 = −2, a2 = −1,and all non-vanished terms in J1,0 are of the order of
T2 = 1
16 K√πτ e y(τ)2
64τ y(τ )
[
1 + Erf
( y(τ )
8√τ
)]
,
while the first term in brackets in Eq. (D.11) reads
T1 = −Kρ′(0).
The dominance of the T1 term, which is the motivation for isolating it, occurs when ρ′(0) ∼ O(1) and so T1 ≫ T2, a relationship confirmed numerically in Fig. 8. Here, we use an asymptotic behavior of y(τ ) as in Eq. (61)
y(τ ) ≈ −τ + ρ′(τ )τ −
√
−τ log (2πρ′(τ )2τ ), (D.13)
Page 40 of 43

and compute the ratio T2/T1 as a function of τ ∈ [0, 0.1] (the upper limit is chosen to be able to apply the asymptotic in Eq. (61)). However, this hierarchy reverses for small ρ′(0) ∼ O(τ ) causing the second term to dominate. Such small values of ρ′(s) are typically observed in environments characterized by high volatility and low instantaneous interest rates.
E Calculation of Λ(τj−, y(τj−)) in Eq. (103)
As established previously, our focus is on the integral
Λ(τj−, y(τj−)) =
∫∞
y(τj− )
ξ − y(τ )
2
√
π(τ − τj−)3 e− (ξ−y(τ))2
4(τ −τj−)
[
e−ξUξ′ (τj−, ξ) − ζ(τj−, ξ)e−τj−(ξ−y(τj−))2 ]
dξ, (E.1)
where, based on the definitions in Eq. (43)
ζ(τ, x) = 2τ z(τ, x)(x − y(τ ))e−x + Kβ(τ ), ζ′x(τ, x) = 2τ e−x [z(τ, x) − (x − y(τ ))α(τ )] . (E.2)
Thus, Λ(τj−, y(τj−)) is a difference of two integrals, i.e. J1 − J2.
E.1 Computation of J2
This integral corresponds to the second term in square brackets in Eq. (E.1) and has the same integral structure as in Appendix D. Therefore, it could be computed using the same approach. This yields
J2 =
∫∞
0
e− (Z+y(τj−)−y(τ ))2
4(τ −τj−) −τj−Z2
√
π(τ − τj−)
[ζ(τj−, Z + y(τj−)) + F (τj−, Z + y(τj−))] dZ, (E.3)
ζ(τj−, x) + F (τj−, x)
∣ ∣
∣x→Z+y(τj−) = ζ′x(τj−, x) + 2 (1 − τj−x) ζ(τj−, x)
∣ ∣
∣x→Z +y(τj− )
= Kβ(s)
2
∑
i=0
[
e−y(τj−)aie−Z + bi
]
Zi,
a0 = 2τj−α(τj−), a1 = 2τj−α(τj−) [1 − 2τj−y(τj−)] , a2 = −8τj2−α(τj−),
b0 = −2 [−1 + τj−(1 + y(τj−))] , b1 = −2τj− [3 − 2τj−y(τj−)] , b2 = 8τj2−.
In particular, by representing it in the form of J1,0 in Eq. (D.7), we obtain
J2 = −K β(τj−) e− (y(τj−)−y(τ))2
4(τ −τj− )
√
π(τ − τj−)
[
e−y(τj−) Ali→m1
1
∑
i=0
(−1)iai + Ali→m0
1
∑
i=0
bi
] ∂i
∂Ai
∫∞
0
e−k2Z2+k1(A)Z dZ,
k1(A) = −A + y(τ ) − y(τj−)
2(τ − τj−) , k2 = τj− + 1
4(τ − τj−) . (E.4)
Using Eqs. (D.8) and (D.9) gives the final result
J2 = Kβ(τj−)
[
e−y(τj−) (a0J2(1) + a1J2′ (1) + a2J2′′(1)) + b0J2(0) + b1J2′ (0) + b2J2′′(0)
]
. (E.5)
Page 41 of 43

E.2 Computation of J1
The first integral in Eq. (E.1) can be simplified using integration by parts
J1 =
∫∞
y(τj− )
ξ − y(τ )
2
√
π(τ − τj−)3 e− (ξ−y(τ))2
4(τ−τj−) e−ξUξ′ (τj−, ξ)dξ (E.6)
=
∫∞
0
e− (Z+y(τj−)−y(τ ))2
4(τ −τj−)
2
√
π(τ − τj−)3 F1(Z)e−(Z+y(τj−))U (τj−, Z + y(τ ))dZ,
F1(Z) = τ − τj−
2 − 1 + (Z + τ − τj− + y(τj−) − y(τ ))2
2(τ − τj−) , Z = ξ − y(τj−),
where, based on Eq. (59)
e−y(τj−)e−Z U (τj−, Z + y(τj−)) = 1
wj
∫Z
0
Φ(τj−, k + y(τj−))ek exp
( ek+y(τj−) − eZ
wj
)
dk, (E.7)
Φ(τ, x) =
∫τ
0
∫∞
y(s)
e−s(ξ−y(s))2 η(s, ξ)
2
√π(τ − s)
[
e− (ξ−x)2
4(τ −s) − e− (ξ−2y(τ )+x)2
4(τ −s)
]
dξds − wjζξ(τj−, x),
wj = 2α(τj−)
σ2(τj−)
Dj
K.
Since usually Dj /K ≪ 1 and 2α(τj−)
σ2(τj−) = O(1), it follows that wj ≪ 1. Furthermore, the inequality k + y(τj−) ≤ Z holds because k ≤ Z and y(τj−) < 0. Consequently, the exponent in the integral in Eq. (E.7) is small everywhere except in a region near Z = 0.
F2(wj )
wj
0 0.1 0.2 0.3 0.4 0.5
0
0.1
0.2
0.3
0.4
0.5
wj
F2(wj), wj
Figure 9: Comparison of F2(wj ) to the linear function y(wj) = wj .
Given that Φ(τ, Z + y(τj−)) is bounded in Z, we apply Laplace’s method, [Bender and Orszag, 1978] to obtain the leading-order asymptotics
e−(Z+y(τj−))U (τj−, Z + y(τj−)) ≈ 1
wj
e− eZ
wj Zli→m0
∫Z
0
Φ(τ, k + y(τj−)) exp
( ey(τj−)+k
wj
+k
)
dk (E.8)
Page 42 of 43

= Φ(τ, y(τj−)) 1
wj
e
ey(τj− )
wj Z e− eZ
wj + O(Z2).
Given that τ > τj−, the exponent in Eq. (E.6) is bounded in Z. Substituting Eq. (E.8) into Eq. (E.6), therefore yields
J1 ≈ Φ(τ, y(τj−))F1(0) e− (y(τj−)−y(τ))2
4(τ −τj−) + ey(τj−)
wj
2
√
π(τ − τj−)3
1
wj
∫∞
0
Ze− eZ
wj dZ (E.9)
= Φ(τ, y(τj−))F1(0) e− (y(τj−)−y(τ))2
4(τ −τj−) + ey(τj−)
wj
2
√
π(τ − τj−)3 F2(wj ), F2(wj ) = 1
wj
G3,0
2,3
(1
wj
| 1, 1
0, 0, 0
)
,
where the last G symbol denotes the Meijer G-function, [Bateman and Erdélyi, 1953]. Fig. 9 compares F2(wj) to the linear function y(wj) = wj. The results show that F2(wj) remains small even for unrealistically high values of wj near 50%. Also, since y(τj−) < 0, the exponent in Eq. (E.9) is small. Therefore, the integral J1 is negligible and can be disregarded in a good approximation.
Page 43 of 43

---

## Processing Information

- **Processing Library:** Zotero PDFWorker
- **Processing Date:** 2026-02-10T18:18:02.186Z
- **Text Length:** 111643 characters
- **Success:** Text extraction completed
- **PDF Library Used:** Zotero PDFWorker
- **Pages Processed:** 43 of 43
