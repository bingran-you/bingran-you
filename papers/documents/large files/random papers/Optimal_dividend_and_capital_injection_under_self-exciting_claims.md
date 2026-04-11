# PDF Document: Aubert et al. - 2025 - Optimal dividend and capital injection under self-exciting claims.pdf

**File Path:** Aubert et al. - 2025 - Optimal dividend and capital injection under self-exciting claims.pdf

**Processed Date:** 2026-02-10T18:18:03.905Z

**File Size:** 3031.45 KB

**Total Pages:** 31

**Extracted Pages:** 31

**PDF Library:** Zotero PDFWorker

**Attachment Item ID:** 3590

**Title:** Optimal dividend and capital injection under self-exciting claims

**Collection:** Large Files > Random Papers

---

## Extracted Text Content

Optimal dividend and capital injection under self-exciting claims
Paulin Aubert∗ Etienne Chevalier† Vathana Ly Vath‡
November 26, 2025
Abstract
In this paper, we study an optimal dividend and capital-injection problem in a Cramér-Lundberg model where claim arrivals follow a Hawkes process, capturing clustering effects often observed in insurance portfolios. We establish key analytical properties of the value function and characterise the optimal capital-injection strategy through an explicit threshold. We also show that the value function is the unique viscosity solution of the associated HJB variational inequality. For numerical purposes-
, we first compute a benchmark solution via a monotone finite-difference scheme with Howard’s policy iteration. We then develop a reinforcement learning approach based on policy-gradient and actor-critic methods. The learned strategies closely match the PDE benchmark and remain stable across initial conditions. The results highlight the relevance of policy-gradient techniques for dividend optimisation under self-exciting claim dynamics and point toward scalable methods for higher-dimensional exten-
sions.
Keywords: Optimal dividend, Singular stochastic control, Hawkes processes, Viscosity solutions, Reinforcement learning, Policy gradient.
1 Introduction
The allocation of an insurer’s surplus between solvency and shareholder remuneration is a central question in actuarial science, traditionally addressed through ruin probabilities and optimal dividend policies. In this context, the surplus process provides a framework for quantifying the trade-off between long-term financial stability and the distribution of profits. Since the seminal contribution of de Finetti [10], a vast literature has emerged at the intersection of probability theory, stochast-
ic control, and insurance mathematics.
Classical studies build upon the Cramér–Lundberg model introduced by Lundberg [24] and Cramér [8], and further developed by Gerber [12, 11]. Over the past decades, the dividend optimisation problem has been analysed using both regular and singular control techniques in models driven by compound Poisson processes or Brownian motion. See for instance Jeanblanc and Shiryaev [17], Asmussen and Taksar [4], and Gerber and Shiu [14, 13]. Numerous extensions have since been proposed to incorporate investm-
ent risk, reinsurance, capital injections, and taxation, as documented in the works of Paulsen and Gjessing [26], Hojgaard and Taksar [16], Azcue and Muler [5], Kulenko and Schmidli [21], Lokka and Zervos [23], and Albrecher and Thonhauser [2]. Comprehensive reviews of these developments can be found in Albrecher and Thonhauser [3] and in the monograph by Schmidli [29]. A persistent assumption in the classical literature is that claim arrivals are independent and identically distributed, typically-
 modelled by a Poisson process. Yet real insurance portfolios—particularly those exposed to catastrophic, environmental, cyber, or systemic risks—often
∗Laboratoire de Mathématiques et Modélisation d’Évry, Université Évry Paris-Saclay, Exiom Partners, France, paulin.aubert@univ-evry.fr.
†Laboratoire de Mathématiques et Modélisation d’Évry, Université Évry Paris-Saclay, UMR 8071 CNRS, France, etienne.chevalier@univ-evry.fr.
‡Laboratoire de Mathématiques et Modélisation d’Évry, Université Paris-Saclay, ENSIIE, UMR 8071 CNRS, France, vathana.lyvath@ensiie.fr.
1
arXiv:2511.19701v1 [math.OC] 24 Nov 2025

display pronounced clustering, generating temporal dependence in claim occurrences. This has motivated the use of more general point processes, including Cox and shot-noise dynamics [1], and more recently Hawkes processes, as studied by Brachetta, Callegaro, Ceci, and Sgarra [7]. Dividend optimisation has been analysed in some of these non-Poisson settings. However, the combined optimisation of dividends and capital injections in a Cramér-Lundberg model driven by Hawkes claim arrivals has not bee-
n addressed in the existing literature. The present work develops a dividend optimisation framework for a Cramér–Lundberg model with Hawkes claim arrivals, allowing for both dividend distributions and capital injections. This extends classical results obtained under compound Poisson dynamics, including those of Kulenko and Schmidli [21]. From an analytical perspective, we establish fundamental properties of the value function, including bounds, monotonicity, and local Lipschitz continuity, and cha-
racterise the optimal capital-injection strategy through an explicit threshold. We then show that the value function is the unique viscosity solution of the associated Hamilton–Jacobi–Bellman variational inequality. Because Hawkes dynamics considerably increase the analytical complexity of the model, numerical methods are required to approximate the value function and the associated optimal policy. As a classical benchmark, we first compute a reference solution using a monotone finite-difference a-
pproximation of the HJB variational inequality combined with Howard’s policy iteration algorithm. This PDE-based approach serves to validate the structure of the optimal strategy in our setting. The main numerical contribution of the paper lies in the development of a reinforcement learning methodology tailored to this class of singular stochastic control problems. A growing body of work aims to connect stochastic control theory with reinforcement learning by developing policy-gradient and actor–c-
ritic formulations, as illustrated by the contributions of Wang et al. [31], Jia and Zhou [19, 18, 20], as well as the recent advances of Hamdouche et al. [15] and Pham and Warin [27]. Building on these developments, we examine whether parameterised stochastic policies can learn near-optimal dividend and capital-injection strategies in our setting. Our methodology is related to the framework of Hamdouche et al. [15], who study policy-gradient approaches for control problems with random exit times.-
 The results obtained reinforce the view that policy-gradient algorithms offer a scalable alternative to PDE-based methods, and can be effectively applied to higher-dimensional or path-dependent extensions of the dividend optimisation problem where classical numerical techniques become impractical.
The remainder of the paper is structured as follows. Section 2 introduces the surplus model with capital injections and Hawkes-driven claims. Section 3 establishes key analytical properties of the value function and derives the structure of the optimal injection strategy. Section 3.5 shows that the value function is the unique viscosity solution to the associated HJB variational inequality. Section 4 presents the finitedifference framework and the corresponding numerical results, which serve as a -
benchmark and illustrate the economic features of the optimal policy. Finally, Section 5 develops the reinforcement learning methodology and compares the learned strategies with the PDE benchmark.
2 Modelling insurer’s portfolio and clustering effect
2.1 Uncontrolled surplus dynamics
Let (Ω, F, P) be a probability space on which all stochastic processes and random variables are defined and such that F is complete and right-continuous. The insurer’s cash reserve is represented by a stochastic process R = (Rt)t≥0, whose dynamics, in the absence of any control, follow the classical Cramér-Lundberg model:
Rx
t = x + ct −
Nt
∑
k=1
Yk ,
where x ∈ R+ is the company’s initial capital, c > 0 is the constant premium income per unit of time, N = (Nt)t≥0 is a counting process representing the number of claims occurring up to time t and (Yk)k∈N is a positive random variable with density f , assumed independent of the counting process. Traditionally, N is assumed to be a homogeneous Poisson process with constant intensity λ > 0, which implies independent, exponentially distributed inter-arrival times. While analytically convenient, this -
framework is not designed to account for temporal dependence in claim arrivals, which motivates the use of more flexible models such as self-exciting processes.
2

2.2 Temporal claim dependence via a Hawkes process
In practice, claim arrivals often exhibit temporal clustering: events such as natural disasters, cyber incidents, or pandemics tend to generate multiple claims in short time intervals. This behaviour, known as the clustering effect, contradicts the memoryless nature of the Poisson process. To model the clustering behaviour of claims, we choose to represent the arrival process N as a Hawkes process. Hawkes processes are well known for their ability to model clustering effects. In our framework, the-
 claim arrival intensity λ = (λt)t≥0 evolves dynamically according to the following equation:
λt = a(b − λt)dt + ηdNt,
where a, b, η > 0 are model parameters, and the initial condition is λ0 = y ∈ [b, +∞). Between claim arrivals, the intensity λt reverts toward the long-term level b at rate a, while each claim at time t increases λt by η. This dynamics captures both the self-exciting nature and the memory effects in claim arrivals. We assume λ0 ≥ b without loss of generality. Indeed, under exponential kernels and as soon as a few claims occur, the intensity will almost surely exceed b and remain above it due to th-
e accumulation of excitation. This assumption also simplifies several technical arguments in the analysis that follows.
2.3 Controlled surplus dynamics
We assume that the company is owned by a group of shareholders whose objective is to extract value from the surplus through dividend distributions, while preserving solvency via capital injections when needed. These two financial levers modify the surplus dynamics, leading to a controlled process. Let α = (Zt, Kt)t≥0 be a control strategy, where Z is a non-decreasing, right-continuous, F -adapted process representing the cumulative dividends paid out to shareholders and K is a non-decreasing, left-
continuous, F-adapted process representing the cumulative capital injections by shareholders. Under strategy α the controlled surplus process is given by:
Xt = Rx
t − Zt + Kt
= x + ct −
Nt
∑
k=1
Yk − Zt + Kt.
Dividend payments reduce the reserve, while capital injections increase it. These interventions are subject to economic constraints and are only permitted within an admissible set. To ensure both economic relevance and mathematical well-posedness of the model, we restrict our attention to a class of admissible strategies defined as follows:
Definition 2.1 (Set of admissible strategies). A strategy αt = (Zt, Kt)t≥0 is said to be admissible if:
• Z is càd-làg, F-adapted, non-decreasing and such that Zt − Zt− ≤ Xt− + Rt0 − R0
t− and Z0− = 0,
• K is càg-làd, F-adapted, non-decreasing and such that K0− = 0.
When (X0, λ0) = (x, y) ∈ R × [b, +∞), the set of admissible strategies is denoted by A(x, y).
The condition Zt − Zt− ≤ Xt− + Rt0 − R0
t− enforces that dividends cannot be paid beyond the available
reserve at any time.
2.4 Ruin and objective function
As is standard in risk theory, we assume that the company ceases operations at the time of ruin, i.e., when its reserve becomes negative. The ruin time under strategy α is defined as:
T α = inf{t ≥ 0, Xt+ < 0}.
3

The shareholders’ objective is to maximize the expected discounted net gains until ruin. The gain includes the total discounted dividends and subtracts a penalty proportional to the capital injected. Formally, for (x, y) ∈ R × [b, +∞), the reward associated with a strategy α ∈ A(x, y) is given by:
Jα(x, y) = E
[
∫ Tα
0
e−ρsdZs − δ
∫ Tα
0
e−ρsdKs
]
,
where ρ > 0 is the discount rate, and δ > 1 is the penalty coefficient reflecting the opportunity cost of capital injections. The optimization problem then consists in maximizing Jα(x, y) over all admissible strategies:
v(x, y) = sup
α∈A(x,y)
Jα(x, y) on R × [b, +∞). (2.1)
Remark 2.1. The condition δ > 1 is crucial to prevent excessive capital injections, which would otherwise be incentivized if δ ≤ 1. Similarly, the discount rate ρ > 0 ensures finiteness of the value function and rules out infinite accumulation of dividends over time. See [21] for a detailed discussion.
3 Theoretical analysis
We now examine the analytical and structural properties of the value function associated with the stochastic control problem (2.1). These results provide the mathematical foundations required to characterize the value function as a viscosity solution of the Hamilton–Jacobi–Bellman (HJB) equation, a task carried out in Section 3.5.
3.1 Pre-claim intensity
A recurring element in our analysis is the conditional behaviour of the claim intensity process prior to the first jump of the counting process N . In order to simplify computations involving the law of the first claim
time, we introduce the deterministic intensity process λ ̃, defined on the event {t ≤ τ1}, where τ1 denotes the first jump time of N . On {t ≤ τ1}, the intensity process satisfies the deterministic ordinary differential equation:
dλt = a(b − λt)dt, λ0 = y ≥ b,
which integrates explicitly to: λ ̃t := λt = b − (b − y)e−at. (3.1)
This expression appears frequently in computations involving expectations conditional on the absence of claims. In particular, the following expression for the survival probability will be used repeatedly in the analysis. Let h > 0. The probability that no claim occurs up to time h is given by:
P (τ1 ≥ h) = e−
∫h
0
 ̃λs ds
= e−bh− y−b
a (1−e−ah)
h=→0 1 − yh + o(h).
This approximation is especially useful when analysing the infinitesimal behaviour of the controlled process, as will be required in the rest of this section.
3.2 Dynamic programming principle
We begin by establishing the dynamic programming principle (DPP) associated with the control problem (2.1). This fundamental result expresses the value function in terms of sequentially optimal decisions over time intervals, and serves as the cornerstone for deriving the Hamilton–Jacobi–Bellman equation and for analyzing the structural properties of the value function. In our problem, the dynamic programming principle can be stated as follows:
4

Proposition 3.1 (Dynamic Programming Principle). Let θ be any F-stopping time and (x, y) ∈ R×[b, +∞), it follows from the dynamic programming principle that
v(x, y) = sup
α∈A(x,y)
E
[
∫ T α∧θ
0
e−ρsdZs − δ
∫ T α∧θ
0
e−ρsdKs + e−ρ(T α∧θ)v(XT α∧θ, λT α∧θ)
]
. (3.2)
We refer to standard texts (e.g., [21]) for further details and omit the proof, which follows classical arguments.
3.3 Analytical properties of the value function
We first derive upper and lower bounds for the value function. The lower bound is immediate, as the controller can always choose to take no action. The upper bound corresponds to an idealized scenario where all available surplus is instantly paid as dividends without receiving further claims.
Proposition 3.2 (Value function boundaries). For x ∈ R and y ≥ b, we have
x+ ≤ v(x, y) ≤ x+ + c
ρ.
Proof. The lower bound follows by considering a strategy αˆ which immediately distributes the whole cash reserve, x+ and then does not distribute any dividends and does not inject capital. We get
v(x, y) ≥ Jαˆ(x, y) = x+, for (x, y) ∈ R × [b, +∞).
Let (x, y) ∈ R+ × [b, +∞). We know that, for any strategy α = (Z, K), we have 0 ≤ Zu ≤ x + cu + Ku, on before {u ≤ T α}, so we deduce that:
Jα(x, y) ≤ x + E
[
∫ Tα
0
e−ρscds + (1 − δ)
∫ Tα
0
e−ρs dK s
]
≤x+
∫ +∞
0
e−ρscds = x + c
ρ.
If (x, y) ∈ R− × [b, +∞), there are only two admissible actions at time 0: letting the firm going to bankruptcy or injecting capital up to 0. Hence we have
v(x, y) ≤ max(x + v(0, y); 0) ≤ c
ρ.
We next establish monotonicity properties, reflecting the natural intuition that higher surplus enhances value, whereas higher claim intensity reduces it.
Proposition 3.3 (Monotonicity in x). Let 0 ≤ x < x′ and y ∈ [b, +∞). Then:
v(x′, y) − v(x, y) ≥ x′ − x.
Proof. Let ε > 0 and αε be an ε-suboptimal strategy, i.e., Jαε (x, y) ≥ v(x, y) − ε. Let 0 ≤ x < x′. We consider the strategy consisting in distributing dividends up to x and then apply strategy αε. By the dynamic programming principle (3.2) we obtain:
v(x′, y) ≥ x′ − x + Jαε (x, y)
≥ x′ − x + v(x, y) − ε.
Letting ε → 0 yields the desired result.
Proposition 3.4 (Monotonicity in y). Let x ∈ R+. The function y → v(x, y) is non-increasing on [b, +∞).
5

Proof. Let x ∈ R and b ≤ y < y′. For ε > 0, there exists ε-suboptimal strategy αε = (Zε, Kε) ∈ A(x, y′)
such that v(x, y′) ≤ J αε (x, y′) + ε.
From theorem 3.2 in [9] we know that the intensity process is such that λy ≤ λy′ almost surely, which, from
Lemma A.2 in [1] implies that Xαε,y′ ≤ Xαε,y and therefore T αε,y′ ≤ T α,y. From the dynamic programming principle we have:
v(x, y) ≥ E
[
∫ T αε,y′
0
e−ρs d(Z ε
s − δKε
s ) + e−ρT αε,y′
v(X x
T αε,y′ , λy
T αε,y′ )
]
,
≥E
[
∫ T αε,y′
0
e−ρs d(Z ε
s − δKε
s)
]
≥ v(x, y′) + ε.
As this is true for every ε > 0 we deduce, by letting ε going to 0, that v is non increasing in y.
Corollary 3.1. For x ∈ R+, we have
lim
y→+∞ v(x, y) = x.
Proof. Let x ∈ R+. For y > eb, we set t∗(y) = 1
a ln
( y−b ln(y)−b
)
. t∗(y) is then such that
λy
t ≥ λ ̃y
t ≥ λ ̃y
t∗(y), for all t ≤ t∗(y).
Let ε > 0, it follows from the dynamic programming principle (3.1), that
v(x, y) ≤ ε + E
[
∫ T α∧t∗(y)
0
e−ρsd(Zs − δKs) + e−ρ(T α∧t∗(y))v(XT α∧t∗(y), λT α∧t∗(y))
]
As limy→+∞ t∗(y) = +∞ and from the monotonicity of v in intensity, for y big enough, we have
E
[
∫ T α∧t∗(y)
0
e−ρsd(Zs − δKs)1{T α≤t∗(y)}
]
≤ vln(y)(x),
where we denote by vζ the value function of our control problem with a constant intensity equal to ζ. We recall that limζ→+∞ vζ(x) = x. On the other hand, from Propositions (3.2), (3.3) and (3.4), we have
E
[(
∫ t∗(y)
0
e−ρsd(Zs − δKs) + e−ρt∗(y)v(Xt∗(y), λt∗(y))
)
1{T α>t∗(y)}
]
≤ e−ρt∗(y)
(
x + ct∗(y) + c
ρ
)
.
Hence we can conclude, thanks to Proposition (3.2), that
x ≤ lim
y→+∞ v(x, y) ≤ ε + lim
y→+∞ vln(y)(x) + e−ρt∗(y)
(
x + ct∗(y) + c
ρ
)
=ε+x
We obtain the result by letting ε going to 0.
We establish the local Lipschitz continuity of the value function, which is essential for applying comparison principles in the viscosity solution analysis.
Proposition 3.5 (Local Lipschitz continuity). The value function v is locally Lipschitz continuous on R × (b, +∞). More precisely:
i) For b ≤ y and 0 ≤ x < x′ and y > 0, we have:
x′ − x ≤ v(x′, y) − v(x, y) ≤ δ(x′ − x).
If x < x′ ≤ 0, we have
0 ≤ v(x′, y) − v(x, y) = max(δx′ + v(0, y), 0) − max(δx + v(0, y), 0) ≤ δ(x′ − x).
6

ii) Let x ∈ R+ and b < y < y′. For ε > 0 such that b + ε ≤ y, we have:
0 ≤ v(x, y) − v(x, y′) ≤ (x + c
ρ)a
ε (y′ − y) + o(y′ − y).
If x ≤ 0, we have v(x, y) − v(x, y′) ≤ max(δx + v(0, y), 0) − max(δx + v(0, y′), 0) ≤ v(0, y) − v(0, y′) ≤
ac
ρε (y′ − y) + o(y′ − y).
Proof. We start by showing the first point:
i) Let y ≥ b and 0 ≤ x < x′, we consider the strategy, in A(x, y) which consits in immediately inject some capital up to the cash level x′. It follows from the dynamic programming principle that:
v(x, y) ≥ v(x′, y) − δ(x′ − x).
Set t0 = (x′ − x)/c and
v(x, y) ≥ E
[
e−ρ(τ1∧t0)v(Xτ1∧t0 , λτ1∧t0 )
]
≥ E [e−ρt0 v(Xt0 , λt0 )1{t0≤τ1}
]
≥ e−ρt0 v(x′, λt0 )P (t0 ≤ τ1)
= e−ρt0 e−
∫ t0 0
 ̃λsdsv(x′, y), with λ ̃s = b − (b − y)e−as.
Hence, from Proposition 3.3, we have:
x′ − x ≤ v(x′, y) − v(x, y) ≤
(
eρt0 e
∫ t0 0
 ̃λsds − 1
)
v(x, y)
As z → zez − ez + 1 takes values in R+ and that ∫ t0
0 λ ̃sds = bt0 + y−b
a (1 − e−at0 ), we get‘
v(x′, y) − v(x, y) ≤
[
(ρ + b)t0 + y − b
a
(1 − e−at0 )
]
e(ρ+y)t0 e
∫ t0 0
 ̃λsdsv(x, y)
≤ (ρ + y)t0e(ρ+y)t0 v(x, y) ≤ ρ+y
c e ρ+y
c (x′−x)(x + c
ρ )(x′ − x).
We conclude that v is locally Lipschitz in x and that
x′ − x ≤ v(x′, y) − v(x, y) ≤ (x + c
ρ)
(
(x′ − x) ρ + y
c + o(x′ − x)
)
Hence v is Lipschitz in x.
ii) We now consider x ∈ R+, b < y < y′ and ε > 0 such that y ≥ b + ε . Let t0 be such that λ ̃y′
t0 = y. From
the definition of λ ̃ (see (3.1)), we have that:
t0 = − 1
a ln
(y−b y′ − b
)
≤ y′ − y
a(y − b) ≤ 1
aε (y′ − y).
Applying the stragtegy (0, 0) ∈ A(x, y′), the dynamic programming principle implies that:
v(x, y′) ≥ E
[
e−ρ(τ1∧t0)v(Xτ1∧t0 , λτ1∧t0 )
]
≥ e−ρt0 v(x + ct0, y)P (t0 ≤ τ1)
≥ e−ρt0 e−
∫ t0 0
 ̃λsdsv(x + ct0, y).
7

As v(x + ct0, y) ≥ v(x, y), we deduce from Proposition 3.4 that
0 ≤ v(x, y) − v(x, y′) ≤ v(x, y′)
(
eρt0 e
∫ t0 0
 ̃λsds − 1
)
≤ v(x, y′)(ρ + y′)t0e(ρ+y′)t0 ,
v is then locally lipshitz in its second variable and
0 ≤ v(x, y) − v(x, y′) ≤ (x + c
ρ)a
ε (y′ − y)e a
ε (ρ+y′)(y′−y).
3.4 Capital injection strategies
From an economic perspective, capital injections represent a costly measure that should only be used to prevent imminent ruin. Injecting capital before it is strictly necessary is therefore suboptimal, as we formally establish below.
Proposition 3.6 (Capital injection policy). Injecting capital is only optimal when strictly necessary to prevent ruin. In particular, capital injection at time t can only be optimal if the controlled surplus satisfies Xt < 0.
Proof. For y ≥ b and x ∈ R, two scenarios must be considered:
i) If x ≥ 0, we claim that:
v(x + ε, y) − εδ < v(x, y)
Let κ > 0 and ε > 0 and αε a ε-suboptimal strategy, i.e. it is such that:
v(x + κ, y) ≤ Jαε (x + κ, y) + ε.
We let αˆ be the strategy consiting in applying αε while s < T αε and increasing capital if s = T αε . Then we have:
v(x, y) ≥ Jαˆ(x, y)
=E
[
∫ T αε
0
e−ρs (dZs − δdKs) − e−ρT αε κδ + e−ρT αε v(XT αε + κ, YT αε )
]
= −δκE
[
e−ρT αε ]
+E
[
∫ T αε
0
e−ρs (dZs − δdKs) + e−ρT αε v(XT αε + κ, YT αε )
]
≥ −δκE
[
e−ρT αε ]
+ v(x + κ, y) − ε.
Finally, letting ε → 0 and as E [e−ρT αε ] < 1 we conclude that:
v(x, y) > v(x + κ, y) − κδ.
ii) If x < 0, capital injection of at least |x| is needed to avoid ruin, incurring a cost of δ|x|. Then:
• Either v(0, y) > 0 and we inject at least capital |x| if and only if v(0, y) + δx > 0 ,
• Or v(0, y) = 0 and we have v(0, y) + δx < 0 so we let the firm go bankrupt.
We now provide an explicit characterization of the value function for negative surplus values. The following result introduces a threshold that determines whether capital injection is optimal or if letting the firm go bankrupt is preferable.
8

Proposition 3.7 (Capital injection threshold). Let x < 0 and y ∈ [b, +∞). We define κ⋆(y) = − v(0,y)
δ. Then, the value function satisfies:
v(x, y) =
{
0 if x < κ⋆(y),
v(0, y) + δx if κ⋆(y) < x < 0.
Proof. Let (x, y) ∈ (−∞, 0) × [b, +∞). By the dynamic programming principle (3.2) and Proposition 3.6, it is never optimal to inject more than |x| units of capital. Let us define:
κ⋆(y) = inf{z ∈ R−, v(z, y) > 0}.
Then, for x < 0, we have that: v(x, y) = max(v(0, y) + δx, 0).
Which implies that capital is injected only if v(0, y) + δx > 0, or equivalently, if x ≥ −v(0, y)/δ. The result follows directly.
Thus, the capital injection threshold κ⋆(y) clearly delineates the boundary between solvency and bankruptcy, allowing us to precisely describe the insurer’s optimal behaviour in situations of financial distress.
3.5 Hamilton–Jacobi–Bellman equation
In this section, we first state the HJB equation relateted to our control problem and then we show that the value function is the unique locally Lipschitz viscosity solution of the HJB equation. It will allow us to build a benchmark numerical method, based on the discretization of the variational inequality satisfied by the value function v in the next section.
We set D+ := [0, +∞) × (b, +∞) and D− := (−∞, 0) × (b, +∞). The HJB equation associated with our control problem is given by the following variational inequality:
{ min (φ1D− , (∂xφ − 1)1D+ , δ − ∂xφ, −Lφ1D+ ) = 0 on R × (b, +∞) = D− ∪ D+ (3.3)
where, L denotes the infinitesimal generator of the controlled surplus process, defined by:
Lφ(x, y) := −(ρ + y)φ + c∂xφ + a(b − y)∂yφ + y
∫ +∞
0
φ(x − z, y + η)dF (z),
and F denotes the cumulative distribution function of the claim sizes.
3.6 Viscosity solution characterization
The HJB equation stated in Equation (3.3) reflects the optimal trade-off between three control actions: paying dividends, injecting capital to prevent ruin, or passively allowing the surplus to evolve under the stochastic environment driven by the claim process. Due to the complexity introduced by the two-dimensional state space, classical solutions to the HJB equation are not expected to exist. For this reason, we adopt the framework of viscosity solutions. We now define the notion of viscosity s-
olution used throughout the paper.
Definition 3.2 (Viscosity subsolution). A function u : R × [b, +∞) → R is said to be a viscosity subsolution of (3.3) at point (x, y) ∈ R × (b, +∞) if any continuously differentiable function φ : R × [b, +∞) → R with φ(x, y) = u(x, y) such that u − φ reaches a local maximum, 0, at (x, y) satisfies:
min (φ(x, y)1(−∞,0)(x), (∂xφ(x, y) − 1)1R+ (x), δ − ∂xφ(x, y), −Lφ(x, y)1R+ (x)) ≤ 0.
Definition 3.3 (Viscosity supersolution). A function u ̄ : R × [b, +∞) → R is said to be a viscosity supersolution of (3.3) at point (x, y) ∈ R × (b, +∞) if any continuously differentiable function [ φ:R×
b,+∞)→R
] with φ(x, y) = u ̄(x, y) such that u ̄ − φ reaches a local minimum, 0, at (x, y) satisfies:
min (φ(x, y)1(−∞,0)(x), (∂xφ(x, y) − 1)1R+ (x), δ − ∂xφ(x, y), −Lφ(x, y)1R+ (x)) ≥ 0.
9

Definition 3.4 (Viscosity solution). A function u : R × [b, +∞) → R is said to be a viscosity solution of (3.3) if it is both a viscosity subsolution and a viscosity supersolution.
We now justify the viscosity characterization of the value function v by proving that it satisfies the HJB equation (3.3) both as a subsolution and as a supersolution in the viscosity sense.
Lemma 3.1 (Value function as viscosity supersolution). The value function v is a viscosity supersolution of (3.3) at every point (x, y) ∈ R × (b, +∞)
Proof. Let φ ∈ C1 be a test function such that v − φ has a local minimum at (x, y) ∈ R × (b, +∞) and v(x, y) = φ(x, y). We verify the four conditions defining the viscosity supersolution are in force:
i) Bankruptcy constraint: As φ(x, y) = v(x, y) ≥ 0 we have φ(x, y)1D− (x, y) ≥ 0.
ii) Dividend constraint: Assume that x > 0. For any ε > 0 small enough, it follows from the possibility to immediately pay ε in dividends, that we have:
v(x, y) ≥ v(x − ε, y) + ε ≥ φ(x − ε, y) + ε.
As at point (x, y) we have v(x, y) = φ(x, y) and φ ∈ C1 we deduce:
∂φ
∂x (x, y) − 1 ≥ 0.
For x = 0, we know that φ(−ε, y) ≤ v(−ε, y)) = max(v(0, y) − δε, 0). Moreover, φ(0, y) = v(0, y) > 0 therefore, for ε going to 0 we get ∂xφ(0, x) ≥ δ ≥ 1.
iii) Capital injection constraint: Similarly, for any ε > 0, the possibility to inject capital at cost δ leads to:
v(x, y) ≥ v(x + ε, y) − δε.
This implies:
δ − ∂φ
∂x (x, y) ≥ 0. (3.4)
iv) Generator inequality: The inequality is obvious for x < 0, so we shall assume that x ≥ 0. We define the stopping time θh as:
θh := inf{u ≥ 0 : (x + cu, λ ̃u) ∈/ B(x, y)} ∧ h.
And recall that τ1 is the time of arrival of the first claim. Let dλ ̃t = a(b − λt)dt. Then we have:
v(x, y) ≥ E
[
∫ τ1∧θh
0
e−ρsdZs − δ
∫ τ1∧θh
0
e−ρsdKs + e−ρ(τ1∧θh)φ(Xτ1∧h, λτ1∧θh )
]
=E
[
∫ τ1∧θh
0
e−ρsdZs + e−ρ(τ1∧θh)φ(Xτ1∧θh , λτ1∧θh )
]
=E
[
∫ τ1∧θh
0
e−ρudZu + e−ρθh φ(x + cθh, λ ̃θh )1{θh<τ1} + e−ρτ1 φ(x + cτ1 − Y1, λ ̃τ1 + η)1{τ1≤θh}
]
= E[
∫ τ1∧θh
0
e−ρudZu +
(
φ(x, y) − ρθhφ(x, y) + cθh
∂φ
∂x + a(b − y)θh
∂φ
∂y + o(θh)
)
1{θh<τ1}]
+
∫ θh
0
(∫ +∞
0
φ(x + cs − u, λ ̃s + η)dF (u)
)
e−ρspτ1 (s)ds.
10

Rearranging the terms and dividing by θh we obtain:
0≥E
[
∫ τ1∧θh
0
1
θh
e−ρudZu
]
+
(
−ρφ(x, y) + c ∂φ
∂x + a(b − y) ∂φ
∂y + o(θh)
)
E
[1{θh<τ1}
]
+
∫ θh
0
(∫ +∞
0
1
θh
(φ(x + cs − u, λ ̃s + η) − v(x, y))dF (u)
)
e−ρspτ1 (s)ds
+ v(x, y)
θh
∫ θh
0
e−ρspτ1 (s)ds.
But we have that:
v(x, y)
θh
∫ θh
0
e−ρspτ1 (s)ds h−→→0 yv(x, y).
Because:
pτ1 (s) = (b + (y − b)e−as)e−bs− y−b
a (1−eas) s−→→0 y.
Finally, letting h → 0 we obtain:
0 ≥ E [Z0+ − Z0] − (ρ + y)φ(x, y) + c ∂φ
∂x + a(b − y) ∂φ
∂y + y
∫ +∞
0
φ(x − u, y + η)dF (u).
Finally, choosing a strategy Z such that E [Z0+ − Z0] = 0 we obtain:
(ρ + y)φ(x, y) − c ∂φ
∂x − a(b − y) ∂φ
∂y − y
∫ +∞
0
φ(x − u, y + η)dF (u) ≥ 0.
Lemma 3.2 (Value function as viscosity subsolution). The value function v is a viscosity subsolution of (3.3) at every point (x, y) ∈ R × (b, +∞)2
Proof. This proof is inspired by [2]. Arguing by contradiction that v is not a viscosity subsolution of (3.3) at point (x, y) ∈ R × (b, +∞). By definition this means that one can find ν > 0 and φ ∈ C1 such that φ(x, y) = v(x, y) and φ(x′, y′) ≥ v(x′, y′) for (x′, y′) ∈ R × (b, +∞):
min (φ(x, y)1(−∞,0)(x), (∂xφ(x, y) − 1)1(0,+∞)(x), δ − ∂xφ(x, y), −Lφ(x, y)1[0,+∞)(x)) > ν.
i) If x < 0, this implies that
min (φ(x, y), δ − ∂xφ(x, y)) > ν.
As v(x, y) = φ(x, y) > 0, the optimal policy is to inject capital and there exists ε > 0 such that v(x, y) = v(x + ε) − δε. On the other hand, φ is continuously differentiable, so for ε > 0 small enough ∂xφ(x′, y) ≤ δ − ν
2 for x′ ∈ (x, x + ε). Integrating the last ineqality between x and x + ε, we get
ε(δ − ν
2 ) ≥ φ(x + ε, y) − φ(x, y) ≥ v(x + ε, y) − v(x, y) = εδ.
That leads to a contradiction.
ii) For x = 0, we have
min (∂xφ(0, y) − 1, δ − ∂xφ(0, y), −Lφ(0, y)) > ν.
Let h > 0 and ε > 0. From the dynamic programming principle, there exists (Zε, Kε) ∈ A(0, y) such that:
v(0, y) ≤ E
[
∫ τ1∧h
0
e−ρs dZ ε
s −δ
∫ τ1∧h
0
e−ρs dK ε
s + e−ρτ1∧hv(Xε
τ1∧h, λy
τ1∧h)
]
+ εh
≤E
[
∫ τ1∧h
0
e−ρs d(Z ε
s − δKε
s ) + e−ρτ1∧hφ(Xε
τ1∧h, λy
τ1∧h)
]
+ εh
11

It follows from Proposition 3.6 that Kuε = 0 on {u ≤ τ1}. Hence, we have Zuε ≤ cu on 0 ≤ u ≤ 0τ1. It follows that there exists cˆ ∈ [0, c] such that, on {h < τ1}:
∫h
0
e−ρs d(Z ε
s − δKε
s) =
∫h
0
e−ρs dZ ε
s = (c − cˆ)h + o(h) and Xε
h = cˆh + o(h).
Hence, as φ(0, y) = v(0, y), we have:
φ(0, y) ≤ E [((c − cˆ)h + o(h) + e−ρhφ(cˆh + o(h), λ ̃y
h)) 1{τ1>h}
]
+E
[(∫ τ1
0
e−ρs dZ ε
s + e−ρτ1 φ(τ1c − Y1, λ ̃y
τ1 + η)
)
1{τ1 ≤h}
]
+ εh,
where λ ̃ is solution of the following ODE: dλ ̃s = a(b − λ ̃s)ds. One can easily check that:
λ ̃y
s = (y − b)e−as + b; for s ≥ 0.
For s going to 0, we get: λ ̃y
s = y − as(y − b) + o(s).
Then we have:
φ(0, y) ≤ e−ρhφ(cˆh + o(h), y − a(y − b)h + o(h))P (τ1 > h) + (c − cˆ)h + o(h)
+
∫h
0
(
∫ z⋆(y)
0
e−ρsφ(cs − z, y + η − as(y − b) + o(s))p(z)dz
)
λ ̃se−
∫s
0
 ̃λududs + εh
= e−ρh
(
φ(0, y) + h
[
cˆ∂φ
∂x (0, y) + a(b − y) ∂φ
∂y (0, y)
]
+ o(h)
)
e−
∫h
0
 ̃λsds + (c − cˆ)h + εh + o(h)
+ hy
∫ z⋆(y)
0
φ(−z, y)p(z)dz + o(h)
For h and then ε going to 0, we obtain that:
φ(0, y)≤ 1
ρ+y
[
c + cˆ( ∂φ
∂x (0, y) − 1) + a(b − y) ∂φ
∂y (0, y) + y
∫ z⋆(y)
0
φ(−z, y)p(z)dz
]
.
As we have ∂φ
∂x (0, y) − 1 ≥ 0, we get a contradiction between Lφ(0, y) < −ν and
φ(0, y)≤ 1
ρ+y
[
c∂φ
∂x (0, y) + a(b − y) ∂φ
∂y (0, y) + y
∫ z⋆(y)
0
φ(−z, y)p(z)dz
]
. (3.5)
iii) Assume that x > 0 and set Br(x, y) ⊂ (0, +∞) × (b, +∞) be a closed ball of radius r > 0. We define:
τB = inf{t > 0|Xα
t ̸∈ Br(x, y)}.
We denote by τ ⋆ = τB ∧ T .
Case 1: On {τ ⋆ = τB} two cases are possible:
– There was no jump and:
{ Xα
τ⋆− = Xτα⋆ = x + r ⇒ y − r ≤ λτ⋆− = λτ⋆ ≤ x + r,
λτ⋆− = λτ⋆ = y − r ⇒ x − r ≤ Xτα⋆ ≤ x + r.
– There has been a jump and:
{ Xα
τ⋆− ≥ Xτα⋆ and Xτα⋆ ≤ x − r and λτ⋆− ≤ λτ⋆ ,
λτ⋆− ≤ λτ⋆ and λτ⋆ ≥ y + r and Xτα⋆ ≤ x + r.
12

Taken together, these elements give us Xτα⋆ ≤ x ± r := x′ and λτ⋆− ≤ λτ⋆ and as v is increasing in x
and decreasing in y we have:
v(X α
τ⋆ , λτ⋆ ) ≤ v(x′, λτ⋆ ) ≤ φ(x′, λτ⋆ ) ≤ φ(Xα
τ ⋆− , λτ ⋆− ).
Case 2: On {τ ⋆ = T } we have Xα
τ⋆− ≥ Xτα⋆ and λτ⋆− ≤ λτ⋆ , then we can write:
v(X α
τ⋆ , λτ⋆ ) ≤ φ(Xα
τ ⋆− , λτ ⋆− ).
Then, for both cases one can write:
e−ρτ⋆ v(Xα
τ ⋆ , λτ ⋆ ) ≤ e−ρτ ⋆−
φ(X α
τ ⋆− , λτ ⋆− ).
Recall that: 
 
 
Xα
τ ⋆− = x + cτ ⋆− −
Nτ ⋆−
∑
k=1
Yk − Zτ ⋆− + Kτ ⋆− ,
dλτ⋆− = a(b − λτ⋆− )dτ ⋆− + ηdNτ⋆− .
By by applying Itô’s formula on e−ρτ⋆−
φ(X α
τ⋆− , λτ⋆− ) we obtain:
e−ρτ ⋆−
φ(X α
τ⋆− , λτ⋆− ) − φ(x, y) =
∫ τ ⋆−
0
e−ρs ∂φ
∂x (Xα
s− , λα
s− ) [cds − dZs + dKs]
+
∫ τ ⋆−
0
e−ρs ∂φ
∂y (Xα
s− , λα
s− ) [a(b − y)ds] − ρ
∫ τ ⋆−
0
e−ρs φ(X α
s− , λα
s− )ds
+
∑
0≤s≤τ ⋆−
Xα
s ̸=Xα
s−
(φ(X α
s , λα
s ) − φ(Xα
s− , λα
s− )) e−ρs
+
∑
0≤s≤τ ⋆−
Xα
s+ ̸=Xα
s
(φ(X α
s+ , λα
s+ ) − φ(Xα
s , λα
s )) e−ρs.
By construction before τ ⋆ we are in Br(x), so this can not be optimal to inject capital, which leads to K = 0 before τ ⋆.
e−ρτ ⋆−
φ(X α
τ⋆− , λτ⋆− ) − φ(x, y) =
∫ τ ⋆−
0
e−ρs
[∂φ
∂x (Xα
s− , λα
s− )c + ∂φ
∂y (Xα
s− , λα
s− )a(b − y)
]
ds
−
∫ τ ⋆−
0
e−ρs ∂φ
∂x (Xα
s− , λα
s− )dZs − ρ
∫ τ ⋆−
0
e−ρs φ(X α
s− , λα
s− )ds
+
∑
0≤s≤τ ⋆−
Xα
s ̸=Xα
s−
(φ(X α
s , λα
s ) − φ(Xα
s− , λα
s− )) e−ρs
+
∑
0≤s≤τ ⋆−
Xα
s+ ̸=Xα
s
(φ(X α
s+ , λα
s+ ) − φ(Xα
s , λα
s )) e−ρs.
– Xα
s+ − Xsα ̸= 0 corresponds to the case where dividends has been distributed. So, we have:
Xα
s+ − X α
s = −(Zs+ − Zs),
13

hence:
∑
0≤s≤τ ⋆−
Xα
s+ ̸=Xα
s
(φ(X α
s+ , λs+ ) − φ(Xα
s , λs)) e−ρs ≤
∑
0≤s≤τ ⋆−
Xα
s+ ̸=Xα
s
(φ(X α
s+ , λs) − φ(Xα
s , λs)) e−ρs
=−
∑
0≤s≤τ ⋆−
Zs+ ̸=Zα
s
(
∫ Zs+ −Zs
0
∂φ
∂x (Xα
s − u, λs)du
)
.
Using the fact that ∂xφ − 1 > ν i.e. ∂xφ > 1 we obtain:
−


∫ τ ⋆−
0
e−ρs ∂φ
∂x (Xα
s− , λα
s− )dZs + ∑
0≤s≤τ ⋆−
Zs+ ̸=Zα
s
e−ρs
(
∫ Zs+ −Zs
0
∂φ
∂x (Xα
s − u, λs)du
)

   
≤
−

   
∫ τ ⋆−
0
e−ρsdZs + ∑
0≤s≤τ ⋆−
Zs+ ̸=Zα
s
e−ρs (Zs+ − Zs)

   
=−
∫ τ⋆
0
e−ρsdZs.
– Xsα − Xα
s− corresponds to the case where there has been a jump in the cash process (claims has
arrived). As pointed out in [21] and used in [2], the following process is a martingale:
∑
0≤s≤τ ⋆−
Xα
s ̸=Xα
s−
(φ(X α
s , λα
s ) − φ(Xα
s− , λα
s− ))e−ρs
−y
∫ τ ⋆−
0
(∫ +∞
0
(φ(X α
s− − u, λs− + η) − φ(Xα
s− , λs− )) dF (u)
)
e−ρsds.
We obtain:
e−ρτ ⋆−
φ(X α
τ ⋆− , λτ ⋆− ) +
∫ τ⋆
0
e−ρsdZs ≤ φ(x, y)
+
∫ τ ⋆−
0
e−ρs
[
c∂φ
∂x (Xα
s− , λα
s− ) + a(b − y) ∂φ
∂y (Xα
s− , λα
s− ) − ρφ(Xα
s− , λα
s− )
+y
∫ +∞
0
(φ(X α
s− − u, λs− + η) − φ(Xα
s− , λs− )) dF (u)
]
ds.
Finally:
φ(x, y) = v(x, y) ≤ E


∫ τ ⋆−
0
e−ρs (dZs − δdKs) + eτ⋆−
v(X α
τ ⋆− , λτ ⋆− )

+ε
≤E


∫ τ ⋆−
0
e−ρsdZs + eτ ⋆−
v(X α
τ ⋆− , λτ ⋆− )

+ε
≤ φ(x, y)+E


∫ τ ⋆−
0
e−ρs
[
c∂φ
∂x (Xα
s− , λα
s− ) + a(b − y) ∂φ
∂y (Xα
s− , λα
s− )
− ρφ(Xα
s− , λα
s− ) + y
∫ +∞
0
(φ(X α
s− − u, λs− + η) − φ(Xα
s− , λs− )) dF (u)
]
ds
]
+ ε.
14

This implies the following contradiction:
0 ≤ −E


∫ τ ⋆−
0
e−ρsLφ(Xs− , λs− )ds

 ≤ −νE


∫ τ ⋆−
0
e−ρsds

 < 0.
A direct consequence of Lemmas 3.2 and 3.1 is the following result.
Theorem 3.1 (Value function as viscosity solution). The value function v is a viscosity solution of the Hamilton–Jacobi–Bellman equation (3.3) on the domain R × (b, +∞).
Remark 3.2. Notice that the variational inequality at points (0, y) could be considered as a boundary condition because it could be written as
(ρ + y)φ(0, y) = c ∂φ
∂x (0, y) + a(b − y) ∂φ
∂y (0, y) + y
∫ φ(0,y+η)/δ
0
(φ(0, y + η) − δz) dF (z) (3.6)
Following the proof of Proposition 4.2 in[1], we can now give a characterization of the value function as the smallest viscosity supersolution of equation (3.3).
Theorem 3.2. v is the smallest viscosity supersolution of (3.3) that is non-increasing in y, locally Lipschitz continuous and satisfies the growth condition established in Proposition 3.2.
4 Finite-difference estimate
In this section, we present the classical finite-difference scheme used as a numerical benchmark for the solution of the HJB variational inequality (3.3). The method relies on a monotone discretization of the state dynamics combined with Howard’s policy iteration algorithm to obtain the stationary solution. This framework provides a consistent and interpretable reference against which the reinforcement learning approach introduced later can be compared.
4.1 Discrete HJB variational inequality
Computational grid and domain truncation
To approximate the value function numerically, we truncate the state space and construct a uniform grid over the resulting bounded domain. Let Xmin < 0 < Xmax and Ymax ∈ (b, +∞), and define D := [Xmin, Xmax] × [b, Ymax] as the computational domain for the surplus and intensity variables. The domain D is discretized using Nx ∈ N and Ny ∈ N spatial subdivisions along the x and y directions, respectively, leading to the mesh sizes
∆x := Xmax − Xmin
Nx
, ∆y := Ymax − b
Ny
.
The corresponding grid points are defined by
xi := Xmin + i∆x, yj := b + j∆y.
The full grid is therefore
G := {(xi, yj) : 0 ≤ i ≤ Nx, 0 ≤ j ≤ Ny},
with its interior nodes denoted by
G◦ := {(xi, yj) ∈ G : 1 ≤ i ≤ Nx − 1, 1 ≤ j ≤ Ny − 1}.
At each grid point (xi, yj) ∈ G, the numerical approximation of the value function is denoted by Vi,j ≈ v(xi, yj) and will be used consistently throughout the discrete formulation. The index corresponding to the origin x = 0 is denoted by i0, so that xi0 = 0.
15

Discretization of differential operators
We approximate the differential operators in the HJB variational inequality by means of a monotone finitedifference discretization. One-sided differences are employed in each direction to preserve the directionality of the underlying drift terms. For x and y coordinates, the discrete first-order operators are defined as
D−
x Vi,j := Vi,j − Vi−1,j
∆x , D+
x Vi,j := Vi+1,j − Vi,j
∆x ,
and similarly
D−
y Vi,j := Vi,j − Vi,j−1
∆y , D+
y Vi,j := Vi,j+1 − Vi,j
∆y .
For a generic convective term s∂ξV with ξ ∈ {x, y}, an upwind discretization is adopted:
s∂ξV ≈
{sD−
ξ V, if s ≥ 0,
sD+
ξ V, if s < 0.
In particular, since c > 0, we approximate −c∂xV by cDx+V . For the intensity dynamics, the drift satisfies a(b − y) ≤ 0 on [b, Ymax], yielding
−a(b − yj)∂yVi,j ≈ −a(b − yj)D−
y Vi,j .
Approximation of the jump integral
The discrete infinitesimal generator Lh acting on the grid interior G◦ is then defined by
−LhVi,j := (ρ + yj )Vi,j − cD+
x Vi,j − a(b − yj )D−
y Vi,j − yj Qh[V ]i,j , (4.1)
where Qh denotes the discrete approximation of the jump operator
Q[V ](x, y) :=
∫ +∞
0
V (x − z, y + η)dF (z).
To approximate this integral, we truncate the support of f at Zmax = (M + 1
2 )∆x and apply a midpoint
quadrature rule on [0, Zmax]:
∫ Zmax
0
V (x − z, y + η)f (z)dz ≈
M
∑
m=0
V
(x − (m + 1
2 )∆x, y + η)f((m + 1
2 )∆x)∆x,
When xi − (m + 1
2 )∆x < 0, the capital injection condition given in Proposition 3.7 is enforced to evaluate
V , while off-grid values are obtained by bilinear interpolation.
Discrete HJB variational inequality
Combining the spatial and integral approximations introduced above, the discrete counterpart of the HJB variational inequality takes the form
min
(
D−
x Vi,j − 1
} {{ }
dividends
, δ − D+
x Vi,j
} {{ }
capital injection
, −LhVi,j
} {{ }
continuation
)
= 0, (i, j) ∈ G◦, (4.2)
The resulting non-linear system is monotone and consistent with the viscosity framework, providing a robust basis for numerical resolution.
16

4.2 Numerical implementation
Local update rules
The discrete variational inequality (4.2) defines, at each grid node, the local optimality condition between the three possible regimes: dividend payment, capital injection, and continuation. In practice, this translates into a set of region-specific update formulas that can be used to iteratively compute the value function over the grid. The expressions below follow directly from the monotone discretization introduced in the previous subsection. In the dividend region, the optimal action correspo-
nds to an immediate payout, leading to the first-order condition Dx−Vi,j = 1, which yields
Vi,j = Vi−1,j + ∆x.
In the continuation region, the process evolves according to the controlled surplus dynamics without intervention, and the value function satisfies the discrete HJB equation obtained from (4.1):
Vi,j =
(
ρ + yj + c
∆x + a(yj − b)
∆y
)−1 ( c
∆x Vi+1,j + a(yj − b)
∆y Vi,j−1 + yj Qh[V ]i,j
)
.
The capital injection region requires a specific treatment, as its behaviour is entirely characterized by Proposition 3.7. According to this result, the value function is known explicitly for x < 0, where injections occur whenever the surplus lies below the optimal boundary. Hence, the relation
Vi,j = max (0, Vi0,j + δxi
),
is imposed directly as a boundary condition for all grid points with xi < 0, ensuring consistency with the theoretical characterization of the optimal policy.
Boundary conditions
In the negative surplus region x < 0, the value function is entirely determined by the theoretical characterization established in Proposition 3.7, which directly governs the capital injection mechanism. Hence, no numerical update is required in this area, and the boundary relation at x = 0+ serves as the effective entry condition for the computational domain. According to the HJB equation 3.3, for j ∈ {0, . . . , Ny} the value function at x = 0 satisfies
(ρ + yj )Vi0,j = cD+
x Vi0,j + a(b − yj )D−
y Vi0,j + yj Ih
(
V (η)
i0,j /δ
)
,
where we recall that i0 denotes the index corresponding to xi0 = 0. Here, the term V (η)
i0,j represents the
numerical approximation of v(0, yj+η) obtained by linear interpolation, while Ih(·) denotes the approximation of the integral term arising from the infinitesimal generator at x = 0, using the injection characterization given in Proposition 3.7. In practice, Ih can be evaluated using a midpoint or trapezoidal rule depending on the discretization of F , although for many standard claim size distributions, this integral admits a closed-form expression, allowing for an exact and computationally effici-
ent evaluation. At the upper boundary of the intensity domain, the asymptotic behaviour derived in Corollary 3.1 implies limy→∞ v(x, y) = x for all x ∈ R+, which translates numerically into
Vi,Ny = xi,
for all i ≥ i0. Together, these two boundary conditions fully close the discrete problem and ensure the well-posedness of the numerical resolution of the value function.
Howard policy iteration
The non-linear discrete system (4.2) is solved using Howard’s policy iteration algorithm. The method alternates between a policy evaluation step, where the value function is computed for a fixed control configuration, and a policy improvement step, where the control is updated pointwise according to the minimization operator in (4.2). Starting from an initial value function V (0) and an initial policy π(0), the iteration proceeds as follows:
17

(i) Policy evaluation: For a fixed policy π(k), the corresponding value function V (k+1) is obtained by solving the discrete HJB system (4.1) induced by this policy. This consists in applying, at each grid point, the update rule associated with the prescribed regime. The system is solved by fixed-point iteration until convergence, under the boundary conditions described above.
(ii) Policy improvement: The policy is then updated pointwise by selecting the locally optimal regime,
π(k+1)(i, j) = arg min
π∈{dividend, injection, continuation}
Hπ
h [V (k+1)]i,j ,
where Hπ
h denotes the local discrete HJB operator associated with regime π.
The algorithm iterates between these two steps until the policy stabilizes, that is, when π(k+1) = π(k) over the grid, indicating convergence to the stationary optimal control. The convergence of the numerical scheme follows from standard arguments for monotone finite-difference approximations and policy iteration methods. Under the usual monotonicity, consistency, and stability assumptions on the discrete operator Lh, the fixed-point evaluation step preserves the viscosity solution framework of t-
he continuous HJB variational inequality [6]. Moreover, the outer Howard iteration, alternating between policy evaluation and improvement, converges to the unique stationary solution of the discrete control problem under these same structural conditions [28, 22]. Overall, the scheme is guaranteed to converge to the discrete viscosity solution, which consistently approximates the continuous value function as the mesh is refined.
4.3 Numerical results and sensitivity analysis
4.3.1 Reference configuration and qualitative analysis
Model and grid setup
We begin with a balanced baseline configuration of parameters, chosen to represent a typical regime where claim arrivals, excitation effects, and premium inflows are of comparable magnitude. In particular, claim sizes are assumed to follow an exponential distribution with parameter β. This setup serves as a reference for the numerical results presented below and will later be used to assess the sensitivity of the optimal policy to individual model parameters. The corresponding values are reported -
in Table 1, while the discretization settings are summarized in Table 2.
abηρcδβ
2.0 2.0 0.4 0.1 1.0 1.8 3.0
Table 1: Baseline configuration of model parameters.
Instead of fixing Nx and Ny directly, we define the grid resolution through the auxiliary parameters M and nη, which determine the number of discretization steps relative to Zmax and η. This construction ensures that ∆y is an exact multiple of η and ∆x an exact multiple of Zmax, thereby avoiding interpolation errors when evaluating the jump and excitation terms. The origin x = 0 is explicitly enforced to belong to the grid, with minor adjustments of the bounds if necessary.
Xmin Xmax Ymax nη M Zmax
−5.0 4.0 25.0 8 80 5.0
Table 2: Grid parameters used for the numerical discretization.
Value function and associated optimal policy
Figure 1a displays the estimated value function obtained from the finite-difference scheme. The surface exhibits the expected qualitative behaviour: the value increases with the surplus x and decreases with the claim intensity y, reaching its highest levels for large surpluses and low intensities. These numerical patterns
18

are fully consistent with the theoretical monotonicity properties established in Propositions 3.3 and 3.4, confirming the accuracy and stability of the discretization procedure. Figure 1b shows the optimal control policy under the baseline configuration. The solution exhibits a threshold structure, with two distinct regions for x < 0 (a ruin region and a capital-injection region) and two regions for x ≥ 0 (a continuation region and a dividend region), yielding a clear and interpretable partition -
of the state space.
(a) Estimated value function under the baseline parameter configuration.
(b) Optimal control policy under the baseline parameter configuration.
Figure 1: Estimated value function and corresponding optimal control policy under the baseline parameter configuration.
In the positive surplus region, the policy exhibits the expected two-zone structure: a continuation region and a dividend region. For sufficiently large surplus levels, it is always optimal to distribute dividends. This behaviour reflects the fact that the insurer holds enough reserves to absorb potential losses, making the immediate distribution of excess capital preferable. By contrast, the continuation region corresponds to states in which the activity remains exposed to significant risk. In th-
is zone, it is optimal to retain earnings until the reserve reaches a safer level, at which point dividend payments resume. A critical feature emerging from the numerical solution is the existence of an intensity threshold y above which the optimal action is to liquidate the surplus down to x = 0+. In this high-intensity regime, there exists an increased and persistent risk of claim occurrences, leading to a high likelihood of large loss clusters and little chance that the intensity will decline r-
apidly enough to restore profitability. Operating under such conditions is no longer profitable, and the optimal strategy is to distribute all available capital before the firm is driven to ruin. In the negative surplus region, the numerical policy reproduces the expected qualitative behaviour, featuring a clear capital-injection region and a ruin region. The boundary separating these two zones coincides with the one derived in Proposition 3.7. Since κ⋆(y) = −v(0, y)/δ and Corollary 3.1 establishe-
s that v(0, y) → 0 as y → ∞, the convergence of the injection boundary toward 0 for large intensities is fully consistent with the theoretical predictions. Beyond this boundary, capital injection is no longer optimal. When incoming claims push the cash reserves past this threshold, the activity becomes too costly to refinance. Injecting capital up to x = 0 would not generate future earnings sufficient to offset the cost of the refinancing itself. In such circumstances, further investment is econom-
ically dominated, and the optimal decision is to let ruin occur.
4.3.2 Sensitivity of the optimal policy
We now examine how the optimal control policy reacts to changes in the model parameters. Each parameter is varied independently around its baseline value while keeping the others fixed. The resulting policy maps illustrate how the intervention thresholds adapt to the underlying economic and risk conditions. Overall, the numerical outcomes remain consistent with theoretical expectations and economic intuition.
19

Impact of Hawkes dynamics parameters
The parameters (a, b, η) govern the temporal behaviour of the claim intensity process. An increase in the mean-reversion rate a accelerates the return of λt to its baseline level b, reducing the persistence of highintensity episodes. This results in wider continuation and injection regions, as the system spends less time in high-risk states. In contrast, a higher excitation parameter η amplifies clustering effects, making the environment significantly more risky. When the self-excitation of future-
 claim arrivals makes the business unprofitable, the optimal strategy shifts toward full liquidation: distributing all available surplus rather than continuing operations.
(a) Sensitivity to the mean-reversion rate a. (b) Sensitivity to the excitation parameter η.
Figure 2: Sensitivity of optimal policy to Hawkes dynamics parameters.
A closer inspection of the continuation region also reveals a distinctive shape that depends sensitively on the model parameters. For a fixed but sufficiently high intensity level, the optimal policy in the positive surplus region may switch from dividend distribution to continuation and then back to dividend distribution as x increases. This non-monotone pattern appears for specific parameter configurations, such as a = 4 and η = 0.1, but also emerges under other parameter variations in the subse-
quent sensitivity analyses. The initial dividend region observed at low surplus levels reflects situations where the intensity has risen too sharply for profitability to be restored. Such states necessarily arise from a sequence of adverse claims originating in the continuation region, which simultaneously depletes the surplus and drives the intensity upward. Under these conditions, continued operation is no longer viable, and the optimal action is to liquidate the available surplus immediately. F-
or the same intensity level, a slightly higher surplus would allow the insurer to absorb potential short-term losses while waiting for the intensity to revert, making continuation preferable. As the surplus becomes large, the policy reverts to its usual behaviour: the company holds enough reserves to withstand adverse shocks, and distributing dividends again becomes optimal. This layered structure of the continuation region thus captures a subtle interplay between short-term risk exposure and long-
-term mean reversion in the intensity dynamics, and aligns with the economic interpretation of the Hawkes-driven claim environment.
Impact of the premium–claim balance
The premium rate c determines the rate of surplus accumulation, directly affecting the insurer’s capacity to sustain operations. Higher values of c expand the continuation region and postpone both injections and dividend payments. In contrast, the claim size parameter β affects the expected cost of claims, with larger β (smaller expected losses) leading to higher profitability and a broader dividend region.
20

(a) Sensitivity to the premium rate c. (b) Sensitivity to the claim size parameter β.
Figure 3: Sensitivity of the optimal policy to insurance parameters.
Impact of financing and valuation parameters
The discount rate ρ and the capital injection cost δ capture financial and valuation effects. A higher discount rate reduces the present value of future profits, leading the insurer to liquidate earlier rather than maintaining operations with limited expected returns. This translates into a contraction of the continuation region and an expansion of the dividend area. Conversely, increasing the injection cost δ discourages recapitalization and makes the firm more reluctant to support temporary loss-
es, thereby enlarging the liquidation region and shrinking the domain where capital injections are optimal.
(a) Sensitivity to the discount rate ρ. (b) Sensitivity to the injection cost δ.
Figure 4: Sensitivity of the optimal policy to financing and valuation parameters.
5 Reinforcement learning estimate
In this section, we introduce a numerical method based on policy optimisation techniques from reinforcement learning to solve the control problem (2.1).
5.1 Discrete-time reformulation of the control problem
Formulation as a Markov Decision Process
We begin by reformulating the problem within a general MDP framework, following the approach of [15] for control problems with random exit times. Let (Stα)t≥0 denote the controlled state process taking values in a
domain S ⊂ Rd, and let α be an admissible control with values in a subset of Rm. The process evolves until the random exit time T α := inf{t ≥ 0 : Sα
t ∈/ O},
21

where O ⊂ S is an open domain.
Remark 5.3. In our setting, the state variable is St = (Xt, λt), where Xt denotes the surplus process and λt the Hawkes intensity. The control is αt = (Zt, Kt), consisting of cumulative dividends and capital injections.
The performance criterion is defined in terms of a running reward function f and a terminal reward function g. Given an initial state S0 = s, the expected return under a control α is
Jα(s) = E
[
∫ Tα
0
e−ρtf (Sα
t , dαt) + g(Sα
Tα)
]
. (5.1)
The associated value function is v(s) = sup
α∈A(s)
Jα(s).
Remark 5.4. In our model, there is no terminal reward, i.e., g ≡ 0. The running reward is
f (Sα
t , dαt) = dZt − δdKt,
reflecting dividend payments and penalised capital injections.
We allow for general controlled state dynamics, potentially involving drift, diffusion, jumps, and control actions. A typical form is
dSt = μ(St)dt + σ(St)dWt + η(St)dNt +
m
∑
i=1
dαi
t,
where Wt is a Brownian motion and Nt a jump process (e.g., a Hawkes process). In our model, the state St = (Xt, λt) evolves with deterministic drift and jump-driven increments: λt follows Hawkes dynamics, while Xt is affected by premium inflows, claim jumps, and the control (Zt, Kt).
Discretisation and finite-horizon MDP approximation
Let T = {t0 = 0 < t1 < · · · < tN } be a uniform time grid with step size h > 0. The state space is S ⊂ Rd, and we denote by s ∈ S the initial state. At each state si, the set of admissible controls is A(si) ⊂ Rm. We consider the discretised controlled process (Sti )N
i=0, where the transition from Sti = si to Sti+1 under control a ∈ A(si) is specified by a transition kernel
p(· | ti, si, a),
that is, p(· | ti, si, a) is the law of Sti+1 given (Sti , a).
Definition 5.5 (Randomised policy). A randomised policy is a measurable transition kernel
π : (ti, si) ∈ T × S 7−→ π(· | ti, si) ∈ P(A(si)),
assigning to each state a probability distribution over admissible actions. We write α ∼ π for the random control sequence generated under π.
We denote by Πh the set of all admissible discrete-time randomised policies. Under π ∈ Πh, the controlled state process is (Stπi )N
i=0. The discrete-time exit time is defined as
τ := inf{ti ∈ T : Sπ
ti ∈/ O}.
We introduce the corresponding exit index
N (τ ) := inf{i ∈ {0, . . . , N } : Sπ
ti ∈/ O}.
To obtain a discrete-time counterpart of the objective (5.1), let Atπi+1 := αti+1 − αti denote the action increment on [ti, ti+1]. The expected cumulative reward under a policy π is then
J (π) = Eα∼π


N (τ )−1
∑
i=0
f (Sπ
ti , Aπ
ti+1 ) + g(Sπ
τ)

 , (5.2)
where f is the instantaneous reward function and g the terminal reward.
22

5.2 Policy gradient estimators
Gradient representations for policy optimization
Policy optimisation methods developed in the reinforcement learning literature provide an alternative way to approximate the solution of stochastic control problems. In this framework, the control is modelled through a parametrised family of stochastic policies {πθ : θ ∈ Rp}, where each policy assigns to a state a probability distribution over actions. Such distributions are typically represented by neural networks, whose parameters depend on the current state. Sampling actions from these distribu-
tions yields unbiased gradient estimators of the expected return, giving rise to policy gradient algorithms. We now introduce a formal definition of a parametrised stochastic policy.
Definition 5.6 (Parametrised stochastic policy). Let θ ∈ Rp. A stochastic policy πθ is said to be parametrised if, for each (ti, si), it admits a density with respect to a reference measure ν on A(si):
πθ(da | ti, si) = ρθ(ti, si, a)ν(da),
where ρθ : T × S × A → (0, +∞) is a measurable function.
We restrict attention to parametrised policies of the form πθ, and the objective becomes to optimise the parameter θ ∈ Rp so as to maximise the discrete-time functional (5.2).
Theorem 5.3 (Objective function gradient). Let θ ∈ Rp and πθ be a randomized parametrised policy. Then, the gradient of (5.2) with respect to θ is given by:
∇θJ (πθ) = Eα∼πθ




N (τ )−1
∑
i=0
f (Sπθ
ti , Aπθ
ti+1 ) + g(Sτπθ )




N (τ )−1
∑
i=0
∇θ log(ρθ(ti, Sπθ
ti , Aπθ
ti+1 ))



 , (5.3)
where we recall that Aπθ
ti+1 = απθ
ti+1 − απθ
ti
Proof. Recall that:
J (πθ) = Eα∼πθ


N (τ )−1
∑
i=0
f (Sπθ
ti , Aπθ
ti+1 ) + g(Sτπθ )


The proof relies on the arguments presented in the work by Hamdouche et al. [15] . In our setting we need to increase the dimension of the dynamics. Hence, we consider the process Y defined as follows:
Yt =
∫t
0
e−ρsf (Sα
s , dαs) + g(Sα
t ), for t ≥ 0
As the process S ̃t = (St, Yt)t≥0 is Markovian and we can apply Theorem (2.1) of Hamdouche et al. to get that
∇θJ (πθ) = Eα∼πθ




N (τ )−1
∑
i=0
f (Sπθ
ti , Aπθ
ti+1 ) + g(Sτπθ )




N (τ )−1
∑
i=0
∇θ log(ρθ(ti, Sπθ
ti , Aπθ
ti+1 ))




The representation of Theorem 5.3 expresses the gradient of the performance functional in terms of the cumulative realised reward and the score of the policy. An alternative and often more stable estimator can be obtained by exploiting the dynamic programming structure of the value process. To this end, following [15], we introduce a dynamic version of the performance functional under the policy πθ. For each index i ∈ {0, . . . , N } and state s ∈ S, define
vθ
i (s) := Eα∼πθ


N (τi)−1
∑
j=i
f (Sπθ
tj , Aπθ
tj+1 ) + g(Sτπiθ
)
∣ ∣ ∣ ∣ ∣ ∣
S πθ
ti = s

,
23

where the local exit time is
τi := inf{tj ∈ T : tj ≥ ti, Sπθ
tj ∈/ O} ∧ tN .
Clearly, vθ
N (s) = g(s), and vθ
i (s) = g(s) for all i < N whenever s ∈/ O. Moreover, by the discrete-time dynamic programming principle for s ∈ O, i = 0, . . . , N − 1,
vθ
i (s) = Eα∼πθ
[
vθ
i+1
(
S πθ
ti+1
)∣ ∣
∣S πθ
ti = s
]
.
Theorem 5.4 (Martingale representation). We have:
∇θJ (πθ) = Eα∼πθ


N (τ )−1
∑
i=0
vθ
i+1 (S πθ
ti+1 )∇θ log(ρθ(ti, Sπθ
ti , Aπθ
ti+1 ))

 (5.4)
Proof. For a trajectory controlled by πθ, define the cumulative reward process on the discrete grid by
Yt0 := 0, Yti+1 := Yti + f (Sπθ
ti , Aπθ
ti+1
), i = 0, . . . , N (τ ) − 1,
and set Yτ := YtN(τ) + g(Sτπθ
). Then J (πθ) = Eα∼πθ [Yτ ], and the augmented process S ̃ti := (Sπθ
ti , Yti ) is
Markovian. Applying the results in Hamdouche et al. [15] to (S ̃ti )i≥0 yields the gradient representation stated in Theorem 5.4.
Remark 5.5. An equivalent expression based on the temporal differences of the value function is given by:
∇J (πθ) = Eα∼πθ


N (τ )−1
∑
i=0
(
vθ
i+1 (S πθ
ti+1 ) − vθ
i (Sπθ
ti )
)
∇θ log(ρθ(ti, Sπθ
ti , Aπθ
ti+1 ))


This form is particularly relevant in actor-critic methods where vθ
i is replaced by a learned critic.
After time discretisation with step h > 0, the controlled process (Xt, λt) induces a Markov decision process with continuous action space. Rather than discretising the actions, we restrict attention to a parametrised class of stochastic policies, typically implemented through neural networks. From a theoretical perspective, the work of Kushner and Dupuis [22] shows that, when the full admissible action space is retained, the value functions of the discrete-time control problems converge to their c-
ontinuous-time counterpart as h → 0. The use of parametrised stochastic policies introduces a second level of approximation: the optimisation is now restricted to a subset of all admissible randomised controls. This additional approximation does not affect the consistency of the time discretisation itself, but it may prevent the algorithm from attaining the true optimal value if the optimal policy lies outside the chosen parametrised class.
Gradient-based learning algorithm
We now leverage Theorems 5.3 and 5.4 to design learning algorithms aimed at approximating optimal policies. Our first method is a direct policy gradient algorithm based on Theorem 5.3. This approach corresponds to an extension of the well-known REINFORCE algorithm introduced by Sutton [30], and has been adapted in recent works. The algorithm proceeds as follows: the policy is initialized and used to generate a collection of sample paths. For each path, the cumulative reward and the log-probabiliti-
es of the actions taken are recorded. These are then used to compute a Monte Carlo estimate of the gradient, which serves to update the policy parameters via stochastic gradient ascent.
24

Algorithm 1 Policy gradient algorithm
Number of episodes E, number of Monte Carlo trajectories K and learning rate η Initialize policy πθ with its parameters θ for epoch e = 1, ..., E do for trajectory k = 1, ..., K do Apply current policy up to the end of trajectory N (τk) : {(si, ai)}τk
i=0
Calculate total reward and log probabilities:
Gk =
N (τk)−1
∑
i=0
f (sti , ati ) + g(sτk )
Λk =
N (τk)−1
∑
i=0
∇θ log(ρθ(ti, sti , ati ))
end for
Compute total loss and update policy parameters by gradient ascent:
θ ← θ+η 1
K
K
∑
k=1
Gk Λk
end for
While the policy gradient algorithm is straightforward to implement and only requires that the policy admit a differentiable density, it does not rely on any value function approximation. This simplicity is one of its main advantages. However, a well-known drawback of REINFORCE-type methods is the high variance of the gradient estimators, which can lead to slow and unstable convergence. To address this issue, several variance-reduction techniques have been proposed. A common strategy is to subtrac-
t a baseline from the return: typically, an estimate of the value function. It helps reduce variance without introducing bias. This idea motivates the actor-critic methods presented in the next section.
Actor-critic algorithm
The second approach is an actor-critic algorithm, based on the gradient formula provided by Theorem 5.4. This method combines elements of both value-based and policy-based methods: the actor updates the policy, while the critic estimates the value function. This dual update often results in improved sample efficiency and convergence stability. We follow the methodology introduced in [30] and adapted in [15], using two neural networks: one for the policy πθ (the actor) and one for the value functio-
n qˆω (the critic).
Algorithm 2 Off-line actor critic policy gradient algorithm
Number of episodes E, number of trajectories to use K and ηθ and ηω the learning rates Initialize policy and value function πθ and qˆω with their parameters θ and ω for epoch e = 1, ..., E do for trajectory k = 1, ..., K do Apply current policy πθ up to the end of trajectory N (τk) : {(sti , ati )}N(τk)
i=0
Calculate total advantage and log probabilities:
Φk =
N (τk)−1
∑
i=0
(qˆω(sti+1 ) − qˆω(sti ))∇θ log(ρθ(ti, sti , ati+1 ))
Ψk =
N (τk)−1
∑
i=0
(qˆω(sti+1 ) − qˆω(sti ))∇ωqˆω(sti )
end for
Compute total losses and update policy and value function parameters by gradient ascent:
θ ← θ + ηθ 1
K
K
∑
k=1
Φk
ω ← ω + ηω 1
K
K
∑
k=1
Ψk
end for
25

5.3 Reinforcement learning setup
In our framework, the observation space consists of two state variables: the current value of the Hawkes intensity process and the insurer’s available cash reserves. To simulate the stochastic dynamics of the claim process and its intensity, we rely on Ogata’s thinning algorithm [25]. Notably, the evolution of the intensity process is independent of the agent’s actions, and thus remains unaffected by the control policy. On the other hand, the agent directly influences the cash reserve through its -
actions. It is therefore essential to clearly define how the chosen policy impacts the surplus process. In the theoretical formulation of the problem, the exit time is random and may potentially never be reached. To address this issue in our numerical implementation, we introduce a maximum time horizon T > 0 and define the stopping time as:
τ = T ∧ inf{ti ∈ T, Xπ
ti < 0}.
Naturally, the introduction of T modifies the original problem and may introduce a bias if not handled carefully. To mitigate this, we choose T large enough so that, in the absence of any control intervention, ruin occurs before time T with high probability. Formally, we select T such that
P
(inf{ti ∈ T, Xπ
ti < 0} ≥ T ) ≤ ε,
where ε > 0. This ensures that the finite-horizon approximation remains faithful to the structure of the original problem.
Naïve setup
We follow the MDP framework introduced in the previous section, where T denotes the discretized time grid, and Sti represents the state at time ti ∈ T. In the most basic setup, we define the observation space as the pair Sti = (Xti , λti ), and let the agent sample an action Atπi from a policy π, constrained to the interval (−∞, Xti ]. A positive action corresponds to a dividend payment, while a negative action corresponds to a capital injection. The cash reserve then evolves according to:
Xπ
ti+1 = X π
ti + hc −
Nti+1 −Nti ∑
k=1
Yk − Aπ
ti .
The agent’s expected reward under policy π is then defined by:
J(π) = E


N (τ )
∑
j=1
e−ρtj
(
Aπ
tj 1{
Aπ
tj ≥0
} + δAπ
tj 1{
Aπ
tj <0
}
)

.
While this approach is theoretically valid, it grants the agent considerable freedom, which can significantly slow down learning due to the difficulty of balancing exploration and exploitation. In particular, it becomes challenging for the agent to discover optimal intervention timings. For this reason, we propose a more structured approach that incorporates theoretical insights derived from the analytical study presented in the first part of the paper.
Setup based on theoretical knowledge
This second approach restricts the admissible controls by imposing a two-barrier structure. For capital injections, Proposition 3.7 provides an explicit optimal threshold κ⋆. For dividend payments, guided by the numerical solution of the HJB variational inequality, we postulate the existence of a state-dependent payout threshold x⋆(y) for y ∈ [b, +∞). Such a threshold is economically natural: once the surplus becomes sufficiently large, an optimal strategy must eventually prescribe dividend distri-
butions. We define the observation space as Sti = λti and use the policy to predict the values of the optimal boundaries κ⋆(y) and x⋆(y). The surplus process then evolves according to:
Xπ
ti+1 = X π
ti + hc −
Nti+1 −Nti ∑
k=1
Yk − (Xπ
ti − x⋆(y))1{
Xπ
ti ≥x⋆(y)
} − Xπ
ti 1{
κ⋆ (y)≤X π
ti <0
}. (5.5)
26

In this context, the agent’s expected reward is:
J(π) = E


N (τ )
∑
j=1
e−ρtj
(
(X π
tj − x⋆(y))1{
Xπ
tj ≥x⋆(y)
} + δXπ
tj 1{
κ(y)≤X π
tj <0
}
)

 . (5.6)
This approach reduces the complexity of the learning task by restricting the agent’s output to the prediction of the two optimal boundaries, rather than a full-range action. As a result, it helps accelerate training and improves the stability of the learned policy.
5.4 Numerical results
Learning boundaries
We implement both reinforcement learning algorithms together with standard regularisation techniques—such as entropy bonuses—to stabilise training and improve convergence. For comparability with the PDE-based results, we adopt the same model parameters as those reported in Table 1. The learning procedure proceeds as follows. Given a parameter vector θ ∈ Rp, we initialise a neural network policy πθ that takes as input the current value of the Hawkes intensity and outputs four real numbers correspon-
ding to the parameters used to sample the control. The network architecture consists of two hidden layers of 64 neurons with ReLU activations. Trajectory generation under the policy is carried out through the following steps:
i) At each time step, the current intensity is observed and passed through πθ, which returns the parameters (μ1, σ1, μ2, σ2).
ii) From these parameters, we construct two normal distributions N (μ1, σ1) and N (μ2, σ2).
iii) One sample is drawn from each distribution, and the log-probabilities of the sampled actions are recorded.
iv) The corresponding control boundaries are constructed and applied to the surplus process according to Equation 5.5, after which steps (i)–(iii) are repeated until the ruin time is reached.
Each simulated trajectory yields a total reward together with its associated sequence of log-probabilities. Repeating this procedure M times provides a Monte Carlo estimate of the policy gradient, using either Theorem 5.3 or Theorem 5.4. The policy parameters are then updated via stochastic gradient ascent. In the actor–critic setting, the procedure remains identical except that a second neural network, with the same architecture as the policy network, is introduced to approximate the value functi-
on and serve as a learned baseline for variance reduction.
Comparison to baseline
To assess the performance of the reinforcement learning methods, we train the agents under the benchmark parameter set reported in Table 1 and compare the learned values to the reference solution obtained from the numerical resolution of the HJB variational inequality. The time discretisation step is set to h = 1/50, and the time maximum horizon to T = 50, which corresponds to a maximum of T /h = 2, 500 time steps, an upper limit that is never reached in practice due to earlier ruin. Each policy u-
pdate relies on M = 2048 Monte Carlo trajectories generated in parallel, with learning rates of order 10−3 for both the actor and the critic. Training is performed over 200 epochs for each algorithm. We consider two initial surplus–intensity states, (x0, y0) = (1, 2.8) and (x0, y0) = (0, 2.8), representing respectively a comfortably capitalised position and a near-boundary initial surplus. Figures 5a–5b display the evolution of the empirical objective J during training, together with the PDE bench-
mark value. In both initial configurations, the actor–critic method exhibits the fastest and most stable convergence, reaching the PDE benchmark within relatively few epochs. The REINFORCE estimator also converges toward the correct value, although with slightly higher variance, which is expected for Monte Carlo policy gradients. The variance remains moderate thanks to the inclusion of a baseline term, which
27

stabilises the updates without introducing bias. Overall, both algorithms succeed in learning policies whose performance matches the PDE solution, thereby validating the discrete-time formulation and the policy gradient estimators developed in this section.
(a) Training performance for (x0, y0) = (1, 2.8). (b) Training performance for (x0, y0) = (0, 2.8).
Figure 5: Convergence of the learned objective toward the PDE benchmark value.
In Figures 6a and 6b, we display the control regions learned by the reinforcement learning agent. The colour map indicates the action selected in each state: the yellow region corresponds to inaction, the purple region to capital injection, and the blue region to dividend distribution.
(a) Learned optimal policy (x0, y0) = (1, 2.8). (b) Learned optimal policy (x0, y0) = (0, 2.8).
Figure 6: Learned control regions obtained by the policy gradient algorithm for two initial states.
The learned strategies display the same qualitative structure as the optimal policy obtained through the variational inequality formulation in the PDE section. This close agreement provides strong evidence for the validity of the reinforcement learning approach. Some discrepancies between the two training runs can be observed in the precise location of the control boundaries. This behaviour is expected: since policy-gradient methods optimise over a restricted class of parametrised stochastic polic-
ies, they converge to near-optimal strategies rather than an exact optimum. For such quasi-optimal policies, the control boundary is not uniquely defined. Our Monte Carlo experiments confirm that the estimated value is only slightly sensitive to variations in the dividend boundary, provided that the global structure of the optimal strategy is preserved.
28

x y PDE MC (Opt.) IC95% (MC Opt.) Rel. err. MC (RL) IC95% (RL) Rel. err.
0 2 0.8588 0.8414 [0.8023, 0.8805] −2.07% 0.8677 [0.8263, 0.9090] 1.03% 0 3 0.6811 0.6642 [0.6269, 0.7014] −2.54% 0.6840 [0.6455, 0.7225] 0.44% 0 4 0.5298 0.5181 [0.4833, 0.5528] −2.27% 0.5360 [0.5016, 0.5705] 1.17%
0.5 2 1.3874 1.3412 [1.2987, 1.3838] −3.44% 1.3890 [1.3467, 1.4313] 0.12% 0.5 3 1.2031 1.1581 [1.1166, 1.1995] −3.89% 1.2368 [1.1948, 1.2788] 2.80% 0.5 4 1.0360 0.9882 [0.9514, 1.0249] −4.84% 1.0324 [0.9920, 1.0728] −0.35%
1.0 2 1.8881 1.8673 [1.8257, 1.9089] −1.11% 1.8872 [1.8451, 1.9293] −0.05% 1.0 3 1.7033 1.6886 [1.6477, 1.7294] −0.87% 1.7143 [1.6727, 1.7558] 0.64% 1.0 4 1.5360 1.4894 [1.4527, 1.5261] −3.13% 1.5312 [1.4911, 1.5714] −0.31%
Table 3: Comparison of the PDE and RL estimates of the value function.
Finally, Table 3 reports three sets of values for representative state pairs. The first column (PDE) shows the benchmark value computed from the numerical solution of the HJB variational inequality. The second block provides a Monte Carlo estimate of the value obtained when applying the theoretically optimal policy to the discretised environment. The third block reports the corresponding estimate obtained using the policy learned by reinforcement learning. Both Monte Carlo values are computed from-
 4,096 simulated trajectories, and the reported confidence intervals are the standard asymptotic 95% confidence intervals. The relative errors reported in the table are computed by comparing respectively the Monte Carlo estimate of the value function applying theoretical optimal policy and RL Monte Carlo estimate to the PDE benchmark value. The policy learned by RL consistently outperforms the theoretically optimal continuous-time policy when both are evaluated on the discretised environment, high-
lighting the ability of RL to adapt favourably to numerical discretisation effects. Beyond this qualitative agreement, the reinforcement learning framework offers two significant advantages. First, it scales naturally to higher-dimensional settings in which PDE-based methods become impractical or computationally prohibitive. Second, it provides a flexible modelling environment: changes to the claim distribution, richer dependence structures between claims and intensity, or more complex interaction-
s in the dynamics can be incorporated with minimal modifications to the learning procedure. In this regard, reinforcement learning constitutes a powerful and adaptable tool for approximating optimal strategies in stochastic control problems with complex or high-dimensional dynamics.
Bibliography
[1] Hansjörg Albrecher, Pablo Azcue, and Nora Muler. “Optimal dividend strategies for a catastrophe insurer”. In: Frontiers of Mathematical Finance 3 (Nov. 2023), pp. 304–344. doi: 10 . 3934 / fmf . 2024008.
[2] Hansjörg Albrecher and Stefan Thonhauser. “Optimal dividend strategies for a risk process under force of interest”. In: Insurance: Mathematics and Economics 43.1 (2008), pp. 134–149. issn: 0167-6687. doi: 10.1016/j.insmatheco.2008.03.012.
[3] Hansjörg Albrecher and Stefan Thonhauser. “Optimality results for dividend problems in insurance”. In: Revista de la Real Academia de Ciencias Exactas, Físicas y Naturales. Serie A, Matemáticas 103 (Mar. 2009), pp. 295–320. doi: 10.1007/BF03191909.
[4] Soren Asmussen and Michael Taksar. “Controlled diffusion models for optimal dividend pay-out”. In: Insurance: Mathematics and Economics 20.1 (1997), pp. 1–15. issn: 0167-6687. doi: 10.1016/S01676687(96)00017-0.
[5] Pablo Azcue and Nora Muler. “Optimal reinsurance and dividend distribution policies in the CramérLundberg model”. In: Mathematical Finance 15.2 (2005), pp. 261–308. doi: 10.1111/j.0960-1627. 2005.00220.x.
29

[6] Guy Barles and Panagiotis E Souganidis. “Convergence of approximation schemes for fully nonlinear second order equations”. In: Asymptotic analysis 4.3 (1991), pp. 271–283. doi: 10.3233/ASY- 19914305.
[7] Matteo Brachetta, Giorgia Callegaro, Claudia Ceci, and Carlo Sgarra. “Optimal reinsurance via BSDEs in a partially observable model with jump clusters”. In: Finance and Stochastics 28.2 (2024), pp. 453495. doi: 10.1007/s00780-023-00523-z.
[8] Harald Cramér. “On the Mathematical Theory of Risk”. In: Skandia Jubilee Volume. Stockholm, Sweden: Skandia Insurance Company, 1930.
[9] Donald A. Dawson and Zenghu Li. “Stochastic equations, flows and measure-valued processes”. In: The Annals of Probability 40.2 (2012), pp. 813–857. issn: 00911798. doi: 10.1214/10-AOP629.
[10] Bruno de Finetti. “Su un’Impostazione Alternativa Della Teoria Collettiva del Rischio”. In: Proceedings of the Transactions of the XV International Congress of Actuaries. New York, 1957, pp. 433–443.
[11] Hans U. Gerber. “An extension of the renewal equation and its application in the collective theory of risk”. In: Scandinavian Actuarial Journal 1970.3-4 (1970), pp. 205–210. doi: 10.1080/03461238. 1970.10405664.
[12] Hans U. Gerber. “Entscheidungskriterien für den zusammengesetzten Poisson-Prozess”. de. In: Mitteilungen der Vereinigung Schweizerischer Versicherungsmathematiker 69 (1969), pp. 185–227.
[13] Hans U. Gerber and Elias S. W. Shiu. “On Optimal Dividend Strategies In The Compound Poisson Model”. In: North American Actuarial Journal 10.2 (2006), pp. 76–93. doi: 10.1080/10920277.2006. 10596249.
[14] Hans U. Gerber and Elias S. W. Shiu. “Optimal Dividends”. In: North American Actuarial Journal 8.1 (2004), pp. 1–20. doi: 10.1080/10920277.2004.10596125.
[15] Mohamed Hamdouche, Pierre Henry-Labordere, and Huyên Pham. “Policy Gradient Learning Methods for Stochastic Control with Exit Time and Applications to Share Repurchase Pricing”. In: Applied Mathematical Finance 29 (July 2023). doi: 10.1080/1350486X.2023.2239850.
[16] Bjarne Hojgaard and Michael Taksar. “Optimal proportional reinsurance policies for diffusion models with transaction costs”. In: Insurance: Mathematics and Economics 22.1 (1998). Special issue on the interplay between insurance, finance and control, pp. 41–51. issn: 0167-6687. doi: 10.1016/S01676687(98)00007-9.
[17] Monique Jeanblanc-Picqué and A. N. Shiryaev. “Optimization of the flow of dividends”. In: Russian Mathematical Surveys 50.2 (Apr. 1995), p. 257. doi: 10.1070/RM1995v050n02ABEH002054.
[18] Yanwei Jia and Xun Yu Zhou. “Policy Evaluation and Temporal-Difference Learning in Continuous Time and Space: A Martingale Approach”. In: Journal of Machine Learning Research 23.154 (2022), pp. 1–55. url: https://www.jmlr.org/papers/v23/21-0947.html.
[19] Yanwei Jia and Xun Yu Zhou. “Policy Gradient and Actor-Critic Learning in Continuous Time and Space: Theory and Algorithms”. In: Journal of Machine Learning Research 23.275 (2022), pp. 1–50. url: https://www.jmlr.org/papers/v23/21-1387.html.
[20] Yanwei Jia and Xun Yu Zhou. “q-Learning in Continuous Time”. In: Journal of Machine Learning Research 24.161 (2023), pp. 1–61. url: https://www.jmlr.org/papers/v24/22-0755.html.
[21] Natalie Kulenko and Hanspeter Schmidli. “Optimal dividend strategies in a Cramér–Lundberg model with capital injections”. In: Insurance: Mathematics and Economics 43.2 (2008), pp. 270–278. issn: 0167-6687. doi: 10.1016/j.insmatheco.2008.05.013.
[22] Harold J. Kushner and Paul Dupuis. Numerical Methods for Stochastic Control Problems in Continuous Time. 2nd ed. Vol. 24. Stochastic Modelling and Applied Probability. 2001. doi: 10.1007/978-1-46130007-6.
[23] Arne Lokka and Mihail Zervos. “Optimal dividend and issuance of equity policies in the presence of proportional costs”. In: Insurance: Mathematics and Economics 42.3 (2008), pp. 954–961. issn: 01676687. doi: 10.1016/j.insmatheco.2007.10.013.
30

[24] Filip Lundberg. 1. Approximerad framställning af sannolikhetsfunktionen: 2. Återförsäkring af kollektivrisker. Thèse de doctorat. Stockholm, 1903.
[25] Yosihiko Ogata. “On Lewis’ Simulation Method for Point Processes”. In: IEEE Transactions on Information Theory 27 (Jan. 1981), pp. 23–30. doi: 10.1109/TIT.1981.1056305.
[26] Jostein Paulsen and Håkon K. Gjessing. “Optimal choice of dividend barriers for a risk process with stochastic return on investments”. In: Insurance: Mathematics and Economics 20.3 (1997), pp. 215–223. issn: 0167-6687. doi: 10.1016/S0167-6687(97)00011-5.
[27] Huyên Pham and Xavier Warin. “Actor-Critic Learning Algorithms for Mean-Field Control with Moment Neural Networks”. In: Methodology and Computing in Applied Probability 27 (2025). doi: 10. 1007/s11009-025-10142-0.
[28] Martin L. Puterman. Markov Decision Processes: Discrete Stochastic Dynamic Programming. Wiley Series in Probability and Statistics. 1994. isbn: 978-0-471-61977-2. doi: 10.1002/9780470316887.
[29] Hanspeter Schmidli. Stochastic Control in Insurance. 2008. doi: 10.1007/978-1-84800-003-2.
[30] Richard S. Sutton and Andrew G. Barto. Reinforcement Learning: An Introduction. Second. 2018. url: http://incompleteideas.net/book/the-book-2nd.html.
[31] Haoran Wang, Thaleia Zariphopoulou, and Xun Yu Zhou. “Reinforcement Learning in Continuous Time and Space: A Stochastic Control Approach”. In: Journal of Machine Learning Research 21.198 (2020), pp. 1–34. url: http://jmlr.org/papers/v21/19-144.html.
31

---

## Processing Information

- **Processing Library:** Zotero PDFWorker
- **Processing Date:** 2026-02-10T18:18:03.905Z
- **Text Length:** 81943 characters
- **Success:** Text extraction completed
- **PDF Library Used:** Zotero PDFWorker
- **Pages Processed:** 31 of 31
