# PDF Document: Shao et al. - 2025 - Competitive optimal portfolio selection under mean-variance criterion.pdf

**File Path:** Shao et al. - 2025 - Competitive optimal portfolio selection under mean-variance criterion.pdf

**Processed Date:** 2026-02-10T18:15:16.566Z

**File Size:** 590.51 KB

**Total Pages:** 23

**Extracted Pages:** 23

**PDF Library:** Zotero PDFWorker

**Attachment Item ID:** 3499

**Title:** Competitive optimal portfolio selection under mean-variance criterion

**Collection:** Large Files > Random Papers

---

## Extracted Text Content

Competitive optimal portfolio selection under mean-variance
criterion
Guojiang Shao∗ Zuo Quan Xu† Qi Zhang‡
November 10, 2025
Abstract
We investigate a portfolio selection problem involving multi competitive agents, each
exhibiting mean-variance preferences. Unlike classical models, each agent’s utility is deter
mined by their relative wealth compared to the average wealth of all agents, introducing a
competitive dynamic into the optimization framework. To address this game-theoretic prob
lem, we first reformulate the mean-variance criterion as a constrained, non-homogeneous
stochastic linear-quadratic control problem and derive the corresponding optimal feedback
strategies. The existence of Nash equilibria is shown to depend on the well-posedness of
a complex, coupled system of equations. Employing decoupling techniques, we reduce the
well-posedness analysis to the solvability of a novel class of multi-dimensional linear back
ward stochastic differential equations (BSDEs). We solve a new type of nonlinear BSDEs
(including the above linear one as a special case) using fixed-point theory. Depending on the
interplay between market and competition parameters, three distinct scenarios arise: (i) the
existence of a unique Nash equilibrium, (ii) the absence of any Nash equilibrium, and (iii)
the existence of infinitely many Nash equilibria. These scenarios are rigorously characterized
and discussed in detail.
Keywords: Competitive portfolio selection, mean-variance, stochastic linear quadratic
problem, backward stochastic differential equation.
1 Introduction
The seminal work of Markowitz [15, 16] introduced mean-variance (MV) analysis, estab
lishing a foundational framework for optimizing asset allocation by balancing risk and return.
Since then, MV theory has been extended in numerous directions, including the incorporation
of stochastic factors, which are central to the models considered in this paper. In parallel, the
study of multi-agent games and, more broadly, mean-field games has emerged as a vibrant area
in mathematical finance, particularly in the context of multi-agent optimal investment. These
models capture the interactions among multiple investors, where each agent seeks to optimize
∗School of Mathematical Sciences, Fudan University, Shanghai 200433, China (gjshao23@m.fudan.edu.cn). †Contact author. Department of Applied Mathematics, The Hong Kong Polytechnic University, Kowloon, Hong Kong SAR, China (maxu@polyu.edu.hk). ‡School of Mathematical Sciences, Fudan University, Shanghai 200433, China and Laboratory of Mathematics for Nonlinear Science, Fudan University, Shanghai 200433, China (qzh@fudan.edu.cn).
1
arXiv:2511.05270v1 [math.OC] 7 Nov 2025

not only their individual wealth but also their relative performance compared to others. Con
sequently, the agents’ decisions are influenced by both their personal risk preferences and the
competitive dynamics of the market.
This paper investigates competitive optimal portfolio selection under the MV criterion,
bridging game theory and portfolio theory in non-Markovian market setting. In contrast to
traditional frameworks where agents optimize in isolation, we consider a scenario in which
agents compete to maximize their terminal wealth relative to the average wealth of all agents.
This leads naturally to a non-cooperative stochastic differential game formulation.
The continuous-time MV portfolio selection problem has been extensively studied under
various market assumptions and methodological approaches. We briefly review some key devel
opments in this area. Li and Zhou [22] addressed the continuous-time MV portfolio selection
problem using the embedding technique and stochastic linear-quadratic (LQ) control theory.
Under the constraint of no short-selling, Li, Zhou, and Lim [12] analyzed the MV portfolio
selection problem in continuous time via the Hamilton-Jacobi-Bellman (HJB) equation and two
Riccati equations. In a complete market with random coefficients, Lim and Zhou [14] investi
gated the continuous-time MV problem using stochastic LQ control and backward stochastic
differential equation (BSDE) theory. Subsequent works by Zhou and Yin [23] and Xiong and
Zhou [18] extended the MV framework to settings with regime switching and partial information,
respectively. More recently, Hu, Shi, and Xu [9] generalized the problem to non-homogeneous
stochastic LQ control with random coefficients and regime-switching dynamics, applying their
results to asset-liability management under MV criterion.
Meanwhile, optimal investment and reinsurance strategies under relative performance crite
ria in mean-field and multi-agent games have garnered increasing attention in recent years. The
study of portfolio games with relative performance considerations can be traced back to Es
pinosa and Touzi [4], who examined multi-agent games with portfolio constraints under CARA
utility by analyzing the associated systems of quadratic BSDEs. Subsequently, Lacker and Za
riphopoulou [11] derived explicit constant equilibrium strategies for both CARA and CRRA
utilities in Markovian markets, utilizing HJB equations. Building on these results, extensions
to proportional reinsurance and investment were proposed by Bo, Wang, and Zhou [2], as well
as He, He, Chen, and Liu [8]. More recently, Wang, Xu, and Zhang [17] advanced this line of
research by investigating competitive portfolio selection in non-Markovian markets, employing
quadratic BSDEs to characterize Nash equilibria under both CARA and CRRA utility frame
works.
However, existing results on competitive optimal portfolio selection under the MV criterion
are relatively scarce. In fact, research in this area has primarily focused on time-consistent
Nash equilibrium strategies, as seen in works such as Guan and Hu [7], Zhu, Guan, and Li
[24], and Yang, Chen, and Xu [19]. These studies investigated time-consistent investment and
proportional reinsurance strategies for competitive insurers under the MV criterion, utilizing
the extended HJB equations developed by Bj’ ́ork, Khapko, and Murgoci [1]. For further related
results on portfolio selection based on relative performance, see Deng, Su, and Zhou [3], Fu
[5], Fu and Zhou [6], Lacker and Soret [10], Liang and Zhang [13], and Zhang and Huang [21],
among others.
2

Distinct from the aforementioned results on time-consistent Nash equilibrium strategies, the
problem addressed in this paper involves time-inconsistent Nash equilibrium strategies under
the MV criterion for a multi-agent game, where the extended HJB equations are not applicable.
To tackle this game-theoretic problem, we first reformulate it as a constrained stochastic LQ
control problem with a non-homogeneous state equation. Employing Lagrange duality, we derive
the optimal feedback strategy for each agent. The existence of a Nash equilibrium requires
analyzing a coupled system comprising linear optimal feedback controls, forward stochastic
differential equations (SDEs), and BSDEs. By applying decoupling techniques, we separate the
SDEs from the coupled system and characterize the Nash equilibrium via a novel class of linear
multi-dimensional BSDEs with random coefficients:
{dh(t) = − {A(t)h(t) + B(t)η(t) + C(t)h(0) + F (t)} dt + η(t) dW (t), t ∈ [0, T ],
h(T ) = 0.
Notably, the driver of this BSDE depends on the solution h(0), making it a nonstandard BSDE.
To ensure the admissibility of the Nash equilibrium, we establish the solvability of a class of
general nonlinear BSDEs (including the above linear one as a special case) using fixed-point
theory. Depending on the market and competition parameters, three scenarios may arise: the
existence of a unique Nash equilibrium, the absence of any Nash equilibrium, or the existence
of infinitely many Nash equilibria. These scenarios are thoroughly analyzed and discussed. It
is worth emphasizing that, in contrast to the results in [11], [7], and [17], our derived strategy
depends on both the initial and current values of wealth.
The remainder of this paper is organized as follows. In Section 2, we formulate the com
petitive optimal portfolio selection problem under MV criterion and turn it into a constrained
stochastic LQ control problem. Section 3 presents the derivation of the optimal strategy for
each agent under the MV criterion. In Section 4, we address the Nash equilibrium by analyzing
a coupled system comprising linear optimal feedback controls, SDEs, and BSDEs. Section 5
considers a special case to illustrate our theoretical results. Finally, Section 6 summarizes our
findings in a comprehensive table. Appendix A provides a proof of the well-posedness for a new
class of general nonlinear BSDEs, whose linear form arises in our study.
2 Problem Formulation
Let (Ω, F , P) be a complete probability space, and {W (t)}t∈[0,T ] is a one-dimensional Brow
nian motion on it. Denote by F = {Ft}t∈[0,T ] the filtration generated by W . For n ∈ N, we
3

define some useful spaces as follows.
L∞
F (0, T ; Rn) : the set of F-adapted essentially bounded Rn-valued processes;
L∞
F (0, T ; Rn×n) : the set of F-adapted essentially bounded Rn×n-valued processes;
L∞
F (0, T ; R+) : the set of F-adapted essentially bounded nonnegative processes;
L∞
F (0, T ; R>0) : the set of F-adapted essentially bounded positive processes;
L∞
F (0, T ; R≫1) : the set of F-adapted processes v : [0, T ] × Ω → (0, +∞) such
that c−1 ⩽ v(t) ⩽ c a.e. a.s. for some constant c > 0;
L∞
F (0, T ; R≪−1) : the set of F-adapted processes v : [0, T ] × Ω → (−∞, 0) such
that c−1 ⩽ v(t) ⩽ c a.e. a.s. for some constant c < 0;
L2
F (0, T ; Rn) : the set of F-adapted processes v : [0, T ] × Ω → Rn such that
E
[
∫T
0 |v(t)|2 dt
]
< ∞;
S2
F (0, T ; Rn) : the set of F-adapted processes v : [0, T ] × Ω → Rn with
continuous sample paths such that E
[
supt∈[0,T ] |v(t)|2]
< ∞.
BMO martingale, which is a short form of the martingale of bounded mean oscillation, plays
a big role in this paper. For any f ∈ L2
F(0, T ; R1), ∫ ·
0 f (s) dW (s) is a BMO martingale on [0, T ]
if and only if there exists a constant c > 0 such that
E
[
∫T
τ
|f (s)|2 ds
∣ ∣ ∣ ∣
Fτ
]
⩽ c,
holds for all F-stopping times τ ⩽ T . We denote the space of BMO martingales by
L2,BMO
F (0, T ; Rn) =
{
f ∈ L2
F(0, T ; Rn) :
∫·
0
f (s) dW (s) is a BMO martingale on [0, T ]
}
.
We now introduce our financial market, in which there is a risk-free asset (bond) and n ⩾ 2
risky assets (stocks). Correspondingly, there are n agents in the market, each of which has its
preference for a stock to invest. Consequently, the dynamic equations of bond S0 = {S0(t)}t∈[0,T ]
and the stock i for the agent i Si = {Si(t)}t∈[0,T ] are given by



dS0(t)
S0(t) = r(t) dt, S0(0) = s0 > 0, t ∈ [0, T ],
dSi(t)
Si(t) = μi(t) dt + σi(t) dW (t), Si(0) = si > 0, t ∈ [0, T ],
where r ∈ L∞
F (0, T ; R+), μi ∈ L∞
F (0, T ; R+) and σi ∈ L∞
F (0, T ; R≫1) serve as the interest rate,
the appreciation rate of stock i and the volatility, respectively. Our model is non-Markovian
since these parameters are stochastic.
Denote by ρi ≜ μi−r
σi ∈ L∞
F (0, T ; R1) the risk premium of stock i. If ρi ≡ 0, there is no
motivation for agent i to invest in stock i, hence in the rest of this paper, we always assume
ρi ̸≡ 0. For simplicity, we only consider the case that the common noise W in the market is
1-dimensional Brownian motion.
Denote by {πi(t)}t∈[0,T ] the amount of money invested in stock i. Then the self-financing
wealth of agent i, {Xi(t)}t∈[0,T ], is given by



dXi(t) = [r(t)Xi(t) + πi(t)σi(t)ρi(t)] dt + πi(t)σi(t) dW (t), t ∈ [0, T ],
Xi(0) = xi.
4

Definition 2.1. A vector portfolio strategy π ≜ (π1, π2, · · · , πn)⊤ is called admissible if π ∈
L2
F(0, T ; Rn).
Set U ≜ L2
F(0, T ; R1), then π is admissible if and only if πi ∈ U for all i = 1, 2, · · · , n.
In our game, each agent aims to outperform the others. We assume that every agent uses
an MV preference on the relative wealth. The arithmetic average wealth at time T is defined as
X ̄ (T ) ≜ 1
n
n
∑
i=1
Xi(T ).
For agent i, the relative wealth compared to others is defined as Xi(T )−θiX ̄ (T ), where θi ∈ [0, 1]
is a parameter describing agent i’s relative preference between their own wealth and average
wealth. The agent i’s MV preference is formulated as
Ji(π1, π2, . . . , πn, θi, γi) ≜ E[Xi(T ) − θiX ̄ (T )] − γi
2 Var[Xi(T ) − θiX ̄ (T )], (2.1)
where γi > 0 is the risk aversion parameter of agent i.
To simplify our problem, we put forward a new cost functional
Jˆi(π1, π2, . . . , πn, θi, γi) ≜ E[Xi(T ) − θiXˆi(T )] − γi
2 Var[Xi(T ) − θiXˆi(T )], (2.2)
where
Xˆi(t) ≜
∑
k̸=i Xk(t)
n−1 , satisfying the state equation



dXˆi(t) = [r(t)Xˆi(t) + (ρσ \π)i(t)] dt + (̂σπ)i(t) dW (t), t ∈ [0, T ],
Xˆi(0) = xˆi,
with
(ρσ \π)i(t) ≜ 1
n−1
∑
k̸=i
ρk(t)σk(t)πk(t),
(̂σπ)i(t) ≜ 1
n−1
∑
k̸=i
σk(t)πk(t),
xˆi ≜ 1
n−1
∑
k̸=i
xk .
A direct computation reveals the relation between the two cost functionals (2.1) and (2.2):
Ji (π1, π2, . . . , πn, θi, γi) =
(
1 − θi
n
)
Jˆi
(
π1, π2, . . . , πn, (n − 1)θi
n − θi
,
(
1 − θi
n
)
γi
)
,
where
(
1 − θi
n
)
γi > 0 and (n−1)θi
n−θi monotonically increases from 0 to 1 as θi increases from 0 to 1.
Hence optimizing the cost functional (2.1) is equivalent to optimizing the cost functional (2.2)
with a trivial difference in parameters θi and γi. For simplicity, we focus on the cost functional
(2.2) in the rest of the paper. We define Nash equilibrium as follows.
Definition 2.2. An admissible vector strategy π∗ = (π1∗, π2∗, . . . , π∗n)⊤ is called a Nash equilib
5

rium (strategy) if, for each agent i ∈ {1, . . . , n} and any πi ∈ U,
Jˆi
(π∗
1, . . . , π∗
i−1, π∗
i , π∗
i−1, . . . , π∗
n; θi, γi
) ⩾ Jˆi
(π∗
1, . . . , π∗
i−1, πi, π∗
i+1, . . . , π∗
n; θi, γi
).
In the rest of this section, we further simplify our model. Set Zi(t) ≜ Xi(t) − θiXˆi(t) as a
new state variable. Then it satisfies the dynamic equation

    
    
dZi(t) =
[
r(t)Zi(t) + ρi(t)σi(t)πi(t) − θi(ρσ \π)i(t)
]
dt
+
[
σi(t)πi(t) − θi(̂σπ)i(t)
]
dW (t), t ∈ [0, T ],
Zi(0) =zi ≜ xi − θixˆi.
(2.3)
When the n − 1 agents’ strategies πk ∈ U, k ̸= i, are fixed, the game problem for agent i
reduces to an MV portfolio selection problem:
mπai x
E[Zi(T )] − γi
2 Var(Zi(T )),
subject to
{πi ∈ U ,
(Zi, πi) satisfies (2.3).
(2.4)
As its cost functional involves Var(·), it is a mean field stochastic control problem. To avoid
using the dedicated mean field stochastic control theory, we introduce the following constrained
stochastic control problem, parameterized by a target d ∈ R1:
mπiin
Var(Zi(T )) = E [Zi(T ) − d]2 ,
subject to

  
  
E[Zi(T )] = d,
πi ∈ U ,
(Zi, πi) satisfies (2.3).
(2.5)
Since (2.5) is a convex optimization problem, we can introduce a Lagrange multiplier λ ∈ R1
to deal with the goal constraint E[Zi(T )] = d. Then (2.5) can be further transformed into an
unconstrained stochastic control problem, i.e. for each fixed λ,
mπiin
E
[|Zi(T ) − d|2] + 2λ (E[Zi(T )] − d) ≜ Ji(πi, λ),
subject to
{πi ∈ U ,
(Zi, πi) satisfies (2.3),
(2.6)
where the constant 2 in front of λ is used to complete the square. As a result, above control
problem is equivalent to
mπiin
E
[|Zi(T ) − b|2] ≜ Ji(πi),
subject to

  
  
πi ∈ U ,
b = d − λ,
(Zi, πi) satisfies (2.3).
(2.7)
Therefore, to solve the MV portfolio selection problem (2.4), the key is to first solve the stochas
tic LQ control problem (2.7).
6

3 Solutions for the MV Problems (2.4)-(2.7)
In this section, we fix the strategies πk ∈ U, k ̸= i, of the n − 1 agents, and solve the MV
portfolio selection problems (2.4)-(2.7) for agent i.
We first introduce two useful BSDEs,

  
  
dpi = −
( (
2r − ρ2
i
)
pi − 2ρiΛi − Λi2
pi
)
dt + Λi dW, t ∈ [0, T ],
pi(T ) = 1,
(3.1)
and 


dhi =
{
rhi + θi(ρσ \π)i − θiρi(̂σπ)i + ρiηi
}
dt + ηi dW, t ∈ [0, T ],
hi(T ) = −(d − λ).
(3.2)
Here and hereafter, we may omit time variables in equations and formulas if it does not cause
confusion.
Lemma 3.1. BSDE (3.1) admits a unique solution (pi, Λi) ∈ L∞
F (0, T ; R≫1)×L2,BMO
F (0, T ; R1).
Furthermore, pi(t) is explicitly given by
pi(t) = 1 E
[
exp
(
∫T
t −2ρi(s) dW (s) + ∫ T
t (−2r(s) − |ρi(s)|2) ds
)
∣ ∣ ∣ ∣
Ft
] , t ∈ [0, T ]. (3.3)
Proof. The first part of the claim follows from Theorem 3.2 in [17]. To establish (3.3), observe
that (pˇi, Λˇ i) ≜
(
1
pi , − Λi
p2
i
)
solves the linear BSDE



dpˇi = −
(
−
(
2r − ρ2
i
)
pˇi − 2ρiΛˇ i
)
dt + Λˇi dW, t ∈ [0, T ],
pˇi(T ) = 1.
By a simple change of measure, we obtain the explicit expression:
pˇi(t) = E
[
exp
(
∫T
t
−2ρi(s) dW (s) +
∫T
t
(
−2r(s) − |ρi(s)|2)
ds
)∣ ∣ ∣ ∣ ∣
Ft
]
. (3.4)
So pi(t) = 1
pˇi(t) yields (3.3).
Lemma 3.2. BSDE (3.2) admits a unique solution
(hi, ηi) ∈ S2
F
(
0, T ; R1)
× L2
F(0, T ; R1).
Proof. Notice r ∈ L∞
F (0, T ; R+), ρi ∈ L∞
F (0, T ; R1) and θi(ρσ \π)i − θiρi(̂σπ)i ∈ L2
F
(0, T ; R1).
The conclusion follows immediately.
For now on, we fix the solutions (pi, Λi) for BSDE (3.1) and (hi, ηi) for BSDE (3.2). Based
on them, we now introduce a non-homogeneous linear SDE:

      
      
dZ ∗
i=
(
rZ∗
i + θiρi(̂σπ)i − θi(ρσ \π)i − ρi[ηi + ( Λi
pi
+ ρi)(Z∗
i + hi)]
)
dt
−
(
ηi + ( Λi
pi
+ ρi)(Z∗
i + hi)
)
dW, t ∈ [0, T ],
Z∗
i (0) = zi.
(3.5)
7

Note this SDE has unbounded coefficients, so its solvability is not immediately ready.
Lemma 3.3. SDE (3.5) admits a solution Zi∗ ∈ L2
F
(0, T ; R1).
Proof. Clearly, the following SDE with bounded coefficients admits a unique strong solution
Yi ∈ S2
F(0, T ; R1): 


dYi = −rYi dt − ρiYi dW, t ∈ [0, T ],
Yi(0) = pi(0) (zi + hi(0)) .
(3.6)
Applying Itô’s formula, one can see
Z∗
i ≜ Yi
pi
− hi, (3.7)
is a solution in L2
F(0, T ; R1) to the original SDE (3.5). Since the above linear transformation is
invertible, the uniqueness follows.
Now we are ready to solve the stochastic LQ control problem (2.7).
Theorem 3.4. The stochastic LQ control problem (2.7) is well-posed, with the unique optimal
feedback control given by
π∗
i (t, Zi) = θi
(̂σπ)i
σi
−1
σi
[
ηi + ( Λi
pi
+ ρi)(Zi + hi)
]
,
and its corresponding optimal cost functional given by
Ji[π∗
i ] = pi(0)|zi + hi(0)|2,
where πi∗ = πi∗(t, Zi∗) and Zi∗ is determined by (3.5).
Proof. One can check the pair (πi∗, Zi∗) satisfies the state equation (2.3). Applying Lemma 3.3,
we can get πi∗ ∈ U . For any πi ∈ U , let Zi denote the corresponding state determined by (2.3).
Applying Itô’s formula to pi|Zi + hi|2, we have
d
(
pi(Zi + hi)2)
=piσ2
i |πi − π∗
i |2 dt
+
(
|Zi + hi|2Λi + 2p(Zi + hi)(σiπi − θi(̂σπ)i + ηi)
)
dW.
It yields that
Ji(πi) = pi(0)|zi + hi(0)|2 + E
[
∫T
0
piσ2
i |πi − π∗
i |2 dt
]
.
Since (πi∗, Zi∗) satisfies the state equation (2.3), it implies that
Ji[π∗
i ] = pi(0)|zi + hi(0)|2.
The above two equations confirm the optimality of πi∗.
Next we turn to the constrained optimization problem (2.5). We first establish the feasible
condition for it, i.e. for a given target d, there exists an admissible portfolio πi ∈ U satisfying
E[Zi(T )] = d.
8

Theorem 3.5. The constrained LQ Problem (2.5) is feasible for any d ∈ R1 if and only if
E
∫T
0
|ρi(t)ψ(t) + ξ(t)|2 dt > 0, (3.8)
where (ψ, ξ) ∈ L∞
F (0, T ; R≫1) × L2
F(0, T ; R1) is the unique solution to the linear BSDE
{dψ = −rψ dt + ξ dW, t ∈ [0, T ],
ψ(T ) = 1.
Proof. Since σi ∈ L∞
F (0, T ; R≫1), we claim that the feasible condition (3.8) is equivalent to
E
∫T
0
|ρi(t)σi(t)ψ(t) + σi(t)ξ(t)|2 dt > 0. (3.9)
For any admissible πi ∈ U and β ∈ R1, define the scaled portfolio πβ
i ≜ βπi. Denote by Zβ
i the
wealth process corresponding to πβ
i . Then for t ∈ [0, T ], Zβ
i (t) = βx(t) + y(t), where x and y
satisfy 


dx = (rx + ρiσiπi) dt + σiπi dW, t ∈ [0, T ],
x(0) = 0,
and 


dy =
[
ry − θi(ρσ \π)i
]
dt − θi(̂σπ)i dW, t ∈ [0, T ],
y(0) = zi.
Then we have E[Zβ
i (T )] = βE[x(T )] + E[y(T )], where E[y(T )] is independent of πi and
E[x(T )] = E
∫T
0
[ρi(t)ψ(t) + ξ(t)]σi(t)πi(t) dt.
We first prove the “if” part. For t ∈ [0, T ], taking πi(t) = σi(t)[ρi(t)ψ(t) + ξ(t)] in above
equality, we have
E[x(T )] = E
∫T
0
|ρi(t)σi(t)ψ(t) + σi(t)ξ(t)|2 dt > 0.
Hence for any d ∈ R1, there exists β ∈ R1 such that E[Zβ
i (T )] = d, and thus πβ
i ∈ U satisfying
E[Zi(T )] = E[x(T )] + E[y(T )] = d.
For “only if” part, assume that problem (2.5) is feasible for any d ∈ R1, then there exists a
πi ∈ U such that
E[x(T )] = E
∫T
0
[ρi(t)ψ(t) + ξ(t)]σi(t)πi(t) dt ̸= 0,
which implies that (3.9) is true.
Remark 3.1. From Theorem 3.5, we see that if the feasible condition (3.8) does not hold, there
is only one feasible target d for the constrained LQ Problem (2.5). To avoid this trivial case,
we always assume the feasible condition (3.8) holds from now on, which allows us to deal with
the constraint E[Zi(T )] = d by the Lagrangian method.
To move forward on the solvability of constrained optimization problem (2.5), we decompose
BSDE (3.2) into two components as follows:
hi =  ̃hi + (d − λ)ˇhi and ηi = η ̃i + (d − λ)ηˇi,
9

where ( ̃hi, η ̃i) and (ˇhi, ηˇi) solve the following two linear BSDEs



d ̃hi =
[
r ̃hi + θi(ρσ \π)i − θiρi(̂σπ)i + ρiη ̃i
]
dt + η ̃i dW, t ∈ [0, T ],
 ̃hi(T ) = 0,
(3.10)
and 


dˇhi =
(
rˇhi + ρiηˇi
)
dt + ηˇi dW, t ∈ [0, T ],
ˇhi(T ) = −1. (3.11)
For the stochastic LQ control problem (2.7), the unique optimal feedback control can be
written as
π∗
i = θi
(̂σπ)i
σi
−1
σi
[
η ̃i + (d − λ)ηˇi + ( Λi
pi
+ ρi)(Z∗
i +  ̃hi + (d − λ)ˇhi)
]
,
with the corresponding cost functional
Ji[π∗
i ] = pi(0)|zi + hi(0)|2 = pi(0)|zi +  ̃hi(0) + (d − λ)ˇhi(0)|2.
By Proposition 3.5 in [14], the inequality pi(0)ˇhi(0)2 < 1 holds. By Proposition 4.1 in [14],
BSDE (3.11) admits a unique solution (ˇhi, ηˇi) ∈ L∞
F (0, T ; R≪−1) × L2
F(0, T ; R1), and
ˇhi(t) = −E
[
exp
(∫ T
t
−ρi dW +
∫T
t
(−r − ρi2
2 ) ds
)∣ ∣ ∣ ∣
Ft
]
. (3.12)
The assumption on the feasible condition (3.8) allows us to solve the constrained control
problem (2.5) by solving (2.7) for a fixed mean E[Zi(T )] = d. By the Lagrange duality theorem,
the minimization problem (2.5) is equivalent to the unconstrained maximization problem
min
πi(·)∈U ,E[Zi(T )]=d
Var(Zi(T )) = max
λ∈R1 min
πi(·)∈U
Ji(πi, λ).
In particular, by (2.6), (2.7) and Theorem 3.4, we have
min
πi(·)∈U
Ji(πi, λ) = Ji(π∗
i , λ) = Ji[π∗
i (·)] − λ2 = pi(0)|zi +  ̃hi(0) + (d − λ)ˇhi(0)|2 − λ2.
Thanks to pi(0)ˇhi(0)2 < 1, the maximum of λ 7→ Ji(πi∗, λ) is attained at the optimal Lagrange
multiplier
λ∗ =
pi(0)ˇhi(0)
(
zi +  ̃hi(0) + ˇhi(0)d
)
pi(0)|ˇhi(0)|2 − 1 ,
which gives the optimal value of (2.5) as
pi(0)|zi +  ̃hi(0) + ˇhi(0)d|2
1 − pi(0)|ˇhi(0)|2 .
Finally, let us study the MV portfolio selection problem (2.4). We only need to solve
max
d∈R1
(
d − γi
2 · pi(0)|zi +  ̃hi(0) + ˇhi(0)d|2
1 − pi(0)|ˇhi(0)|2
)
,
which attains its maximum 1 − pi(0)|ˇhi(0)|2
2γipi(0)|ˇhi(0)|2 − zi +  ̃hi(0)
ˇhi(0) ,
10

at the optimal mean
d∗ = 1
γi
(1
pi(0)|ˇhi(0)|2 − 1
)
− zi +  ̃hi(0)
ˇhi(0) .
In this way, we know
d∗ − λ∗ = − zi +  ̃hi(0)
ˇhi(0) + 1
γipi(0)|ˇhi(0)|2 . (3.13)
Therefore, for problem (2.4), the linear optimal feedback control for agent i is
π∗
i = θi
(σ\ π∗)i
σi
−1
σi
[
η ̃i + (− zi +  ̃hi(0)
ˇhi(0) + 1
γipi(0)|ˇhi(0)|2 )ηˇi
+ ( Λi
pi
+ ρi)
(
Z∗
i +  ̃hi + (− zi +  ̃hi(0)
ˇhi(0) + 1
γipi(0)|ˇhi(0)|2 )ˇhi
)]
. (3.14)
4 Solving the Nash Equilibrium
In Section 3, we deal with the mena-variance problem by fixing the other n−1 agents’ strate
gies, while in this section, we study the Nash equilibrium of the MV portfolio selection problem
(2.4). It means that we need to find out a vector portfolio strategy π∗ = (π1∗, π2∗, · · · , π∗n)⊤ ∈
L2
F(0, T ; Rn) such that (3.14) is satisfied for all i = 1, 2, · · · , n.
Needless to say, it is much more complicated to solve the Nash equilibrium than to solve a
single MV problem. Notice that the coefficients of BSDEs (3.1) and BSDEs (3.11) only depend
on market parameters rather than portfolio strategies, but SDEs (2.3), BSDEs (3.10) and linear
optimal feedback controls (3.14) constitute a coupled system. Hence the key point is to establish
the well-posedness of this coupled system.
We start from decoupling SDEs (2.3). Due to (3.13), we have
hi(0) =  ̃hi(0) + ˇhi(0)
(
− zi +  ̃hi(0)
ˇhi(0) + 1
γipi(0)|ˇhi(0)|2
)
= −zi + 1
γipi(0)ˇhi(0) .
Rewritten SDEs (3.6) as (here and hereafter, we use Yi∗ instead of Yi in the discussion of Nash
equilibrium): 
  
  
dY ∗
i = −rY ∗
i dt − ρiY ∗
i dW, t ∈ [0, T ],
Y∗
i (0) = 1
γiˇhi(0) ,
with the explicit expression
Y∗
i (t) = 1
γiˇhi(0) exp
(
∫t
0
−ρi(s) dW (s) +
∫t
0
(
−r(s) − ρi(s)2
2
)
ds
)
, t ∈ [0, T ],
which only depends on market parameters, and is independent of portfolio strategies of all
agents. Substituting (3.7) into the optimal feedback controls (3.14), we have
π∗
i = θi
(σ\ π∗)i
σi
−1
σi
[
η ̃i +
(
− zi +  ̃hi(0)
ˇhi(0) + 1
γipi(0)|ˇhi(0)|2
)
ηˇi + ( Λi
pi
+ ρi) Yi∗
pi
]
. (4.1)
After decoupling SDEs (2.3) from the coupled system, we obtain the system of linear equa
11

tions (4.1) of unknown variables πi∗, i = 1, 2, · · · , n, coupled with BSDEs (3.10). Next, we
further decouple BSDEs (3.10) by giving explicit forms of πi∗, i = 1, 2, · · · , n, with the help of
(4.1).
For this, define two constants
Ψ≜
n
∑
i=1
θi n − 1 + θi
∈ [0, 1], γˆ ≜
n
∑
i=1
1
γi
,
and three average quantities
σπ∗ ≜ 1
n
n
∑
k=1
σk π ∗
k, x ̄ ≜ 1
n
n
∑
k=1
xk, ρ ̄ ≜ 1
n
n
∑
i=1
ρi.
Substitute (4.1) into σπ∗, and it yields
σiπ∗
i = θi
nσπ∗ − σiπi∗
n − 1 − φi, (4.2)
where φi ≜ η ̃i + ci ̃hi(0) + fi,
with
ci = − ηˇi
ˇhi(0) , fi =
(
− zi
ˇhi(0) + 1
γipi(0)|ˇhi(0)|2
)
ηˇi +
( Λi
pi
+ ρi
) Yi∗
pi
.
The equality (4.2) implies
σiπ∗
i = nθi
n − 1 + θi
σπ∗ − φi
1 + θi
n−1
. (4.3)
Sum up all agents, and then divide by n. It turns out that
σπ∗ = Ψσπ∗ − 1
n
n
∑
i=1
φi
1 + θi
n−1
. (4.4)
So it can be seen from above that the solvability of (4.1) depends on the value of Ψ. Then we
will discuss the solvability of (4.1) in the usual case Ψ < 1 and in the marginal case Ψ = 1,
respectively.
4.1 The usual case
For Ψ < 1, substituting the average control σπ∗ obtained in (4.4) into (4.3), we have
σiπ∗
i =− 1
1−Ψ
nθi
n − 1 + θi
n
∑
i=1
φi
n + nθi
n−1
− φi
1 + θi
n−1
. (4.5)
Then the terms θi(ρσ \ π∗)i − θiρi(σ\ π∗)i can be given explicitly as a linear combination of  ̃hj, η ̃j
and  ̃hj(0) for j = 1, 2, · · · , n.
Set  ̃h ≜ ( ̃h1,  ̃h2, · · · ,  ̃hn)⊤ and η ̃ ≜ (η ̃1, η ̃2, · · · , η ̃n)⊤. BSDEs (3.10) can be rewritten as



d ̃h = −
[
A ̃h + Bη ̃ + C  ̃h(0) + F
]
dt + η ̃ dW, t ∈ [0, T ],
 ̃h(T ) = 0, (4.6)
12

where A, B, and C are coefficient matrices, and F is a coefficient vector. Precisely, for i, j =
1, 2, · · · , n,
Aij ≜



0, i ̸= j,
−r, i = j,
Bij ≜



θiMij, i ̸= j,
θiMii − ρi, i = j,
Cij ≜



θiMijcj, i ̸= j,
θiMiici, i = j,
Fi ≜ θi(Miifi + ∑
i̸=j
Mij fj ),
with
Mij ≜

     
     
1
n−1
1
1−Ψ
∑
k̸=i
(n − 1)θk(ρk − ρi)
(n − 1 + θk)(n − 1 + θj) − (n − 1)(ρj − ρi))
n − 1 + θj
, i ̸= j,
1
n−1
1
1−Ψ
∑
k̸=i
(n − 1)θk(ρk − ρi)
(n − 1 + θk)(n − 1 + θi) , i = j.
Obviously A ∈ L∞
F (0, T ; Rn×n), B ∈ L∞
F (0, T ; Rn×n), C ∈ L2
F (0, T ; Rn×n) and F ∈ L2
F (0, T ; Rn).
Note that (4.6) is a new type of BSDE since its driver depends on  ̃h(0). In Lemma A.1 in
Appendix A, the solvability of an extended class of general nonlinear BSDEs in the solution
space S2
F(0, T ; Rn) × L2
F(0, T ; Rn) is established by the fixed-point method for sufficiently small
T > 0. Given  ̃h(0), due to the linear structure of BSDE (4.6), its explicit solution can be
obtained for any given T > 0. For this, we introduce an SDE with solution in L2
F(0, T ; Rn×n):



dΓ = Γ [A dt + B dW ] , t ∈ [0, T ],
Γ(0) = In.
For the solution Γ to the above SDE, its inverse flow Γ−1 satisfies another SDE:



dΓ−1 = Γ−1[
(
−A + B2)
dt − B dW ], t ∈ [0, T ],
Γ−1(0) = In.
Applying Itô’s formula to Γ ̃h, we have
d(Γ ̃h) = −Γ
(
C  ̃h(0) + F
)
dt + Γ(η ̃ + Bh ̃) dW.
Noticing  ̃h(T ) = 0, we have
 ̃h(t) = Γ−1(t)E
[
∫T
t
Γ(s)
(
C(s) ̃h(0) + F (s)
)
ds
∣ ∣ ∣ ∣
Ft
]
.
In particular,
 ̃h(0) = E
[
∫T
0
Γ(s)
(
C(s) ̃h(0) + F (s)
)
ds
]
.
Set K ≜ E[ ∫ T
0 Γ(s)C(s) ds] and D ≜ E[ ∫ T
0 Γ(s)F (s) ds], then
(In − K) ̃h(0) = D.
The following result studies the well-posedness of BSDE (4.6) in the usual case.
Theorem 4.1. Assume Ψ < 1. Then the well-posedness of BSDE (4.6) can be classified into
the following situations.
13

1. Unique Solution: If In − K is invertible, there exists a unique consistent initial vector
 ̃h(0) = (In − K)−1D. Consequently, BSDE (4.6) admits a unique solution ( ̃h, η ̃) ∈
S2
F(0, T ; Rn) × L2
F(0, T ; Rn).
2. Infinitely Many Solutions: If In − K is singular and D ∈ Im(In − K), there exist infinitely
many solutions ( ̃h, η ̃) ∈ S2
F(0, T ; Rn) × L2
F(0, T ; Rn). These solutions are characterized by
initial vectors  ̃h(0) in the affine space
 ̃h(0) ∈ ker(In − K) + (In − K)†D,
where (In − K)† represents the Moore-Penrose pseudoinverse of In − K.
3. No Solution: If In − K is singular but D ∈/ Im(In − K), no solution exists to BSDE (4.6).
Remark 4.1. For sufficiently small T > 0, the norm ∥K∥∞ is also sufficiently small due to
the integral structure of K. This guarantees the invertibility of In − K and a unique solution to
BSDE (4.6). This is consistent with Lemma A.1 which assets that a unique solution to BSDE
(A.1) (a generalized nonlinear form of BSDE (4.6)) exists for sufficiently small T > 0.
Next, we establish the connection between BSDE (4.6) and Nash equilibrium.
Theorem 4.2. Assume Ψ < 1. Then there exists a one-to-one correspondence between Nash
equilibrium strategies and the solutions to BSDE (4.6).
Proof. Step 1. Nash Equilibrium ⇒ Solution to BSDE (4.6): Assume that there exists a Nash
equilibrium strategy π∗ = (π1∗, π2∗, · · · , π∗n)⊤ ∈ L2
F(0, T ; Rn). By Definition 2.2, π∗ satisfies the
coupled system composed of SDEs (2.3), BSDEs (3.10) and linear optimal feedback controls
(3.14). Decoupling SDEs (2.3) as what we do at the beginning of Section 4, we transform
the coupled system to a simpler one composed of (3.10) and (4.1). Then, substituting the
equilibrium strategy π∗ into (4.1), we solve (4.1) to obtain  ̃hj, η ̃j and  ̃hj(0) for j = 1, 2, · · · , n.
Consequently, the vector-valued linear BSDE (4.6) with a solution ( ̃h, η ̃) follows from BSDEs
(3.10), where  ̃h = ( ̃h1,  ̃h2, · · · ,  ̃hn)⊤ and η ̃ = (η ̃1, η ̃2, · · · , η ̃n)⊤.
Step 2. Solution to BSDE (4.6) ⇒ Nash Equilibrium: Assume that BSDE (4.6) admits a
solution ( ̃h, η ̃). The strategies πi∗, i = 1, 2, · · · , n can be explicitly constructed by (4.5). The
construction of π∗ = (π1∗, π2∗, · · · , π∗n)⊤ guarantees that it belongs to L2
F(0, T ; Rn) and satisfies
the coupled system composed of SDEs (2.3), BSDEs (3.10) and linear optimal feedback controls
(3.14), and thus π∗ is a Nash equilibrium.
Step 3. Bijectivity: With a known Nash equilibrium, we can construct a solution to BSDE
(4.6) by Step 1, and with this solution to BSDE (4.6), we can retrieve the Nash equilibrium by
Step 2. Therefore, the correspondence is invertible.
We next introduce two new assumptions on the market parameters for further discussions.
Assumption 4.1. The Sharpe ratios of all risky assets are identical, but not identical to 0, i.e.
ρi(t) = ρ(t) ̸≡ 0, for all i = 1, 2, · · · , n, and t ∈ [0, T ].
14

Assumption 4.2. None of the Sharpe ratios ρi, i = 1, 2, · · · , n, is identical to 0, and the
interest rate r are all deterministic processes.
Remark 4.2. Under Assumption 4.1, (ρσ \π)i − ρi(̂σπ)i = 0 for i = 1, 2, · · · , n, and BSDEs
(3.10) admits a unique solution ( ̃hi, η ̃i) ≡ (0, 0).
Remark 4.3. Under Assumption 4.2, BSDE (3.1) admits a unique solutions
(pi (t) , Λi (t)) =
(
exp
(
∫T
t
(
2r(s) − |ρi(s)|2)
ds
)
,0
)
,
and BSDE (3.11) admits a unique solution
(ˇhi (t) , ηˇi (t)
)
= (− exp{∫ T
t (−r(s)) ds}, 0).
Remark 4.4. Under Assumption 4.2, since r is deterministic, ξ ≡ 0 and ψ > 0. Thus (3.8)
also holds due to ρi ̸= 0, i = 1, 2, · · · , n.
Theorem 4.3. Assume Assumption 4.1 and Ψ < 1. Then there exists a unique Nash equilib
rium.
Proof. Under Assumption 4.1, BSDEs (3.10) admit only trivial solutions (0, 0). BSDEs (3.1),
(3.2) and (3.11) are independent of the agent index i. Hence we always denote their solutions
by p, Λ, h, η, ˇh, and ηˇ without index i under Assumption 4.1. The optimal strategies (3.14)
reduces to
π∗
i = θi
̂σπ∗
σi
−1
σi
[
(
− zi
ˇh(0) + 1
γip(0)ˇh(0)2
)
ηˇ
+
(Λ
p +ρ
)
(
Z∗
i+
(
− zi
ˇh(0) + 1
γip(0)ˇh(0)2
)
ˇh
) ]
.
(4.7)
And in this case φi has a form
φi =
(
− zi
ˇh(0) + 1
γip(0)ˇh(0)2
)
ηˇ +
(Λ
p +ρ
)
(
Z∗
i+
(
− zi
ˇh(0) + 1
γip(0)ˇh(0)2
)
ˇh
)
, (4.8)
or equivalently
φi =
(
− zi
ˇh(0) + 1
γip(0)ˇh(0)2
)
ηˇ +
(Λ
p +ρ
) Yi∗
p.
Substituting φi into (4.7), we obtain a fully decoupled linear system. Noticing Ψ < 1, we can
derive a unique Nash equilibrium from (4.5) based on the fully decoupled linear system.
Theorem 4.4. Assume Assumption 4.2 and Ψ < 1. Then there exists a unique Nash equilib
rium.
Proof. Under Assumption 4.2, both BSDE (3.1) and BSDE (3.11) degenerate into ordinary
differential equations with deterministic coefficients. Consequently, Λi = 0, ηˇi = 0. In the mean
time, the coefficient matrices A and B are deterministic, and C = K = 0. By Theorems 4.1 and
4.2, BSDE (4.6) admits a unique solution which corresponds to the unique Nash equilibrium.
15

4.2 The marginal case
For Ψ = 1, by definition of Ψ, we have θi = 1 for all i = 1, 2, · · · , n. Then the equilibrium
strategy (4.3) reduces to
σiπ∗
i = nθi
n − 1 + θi
σπ∗ − φi
1 + θi
n−1
= σπ∗ − n − 1
n φi. (4.9)
Set Φ ≜ ∑n
i=1 φi, then we discuss the existence of Nash equilibrium based on Φ.
1. No Equilibrium: If Φ ̸= 0, it contradicts with (4.9) since a sum of (4.9) implies Φ = 0.
2. Uncertain Situation: If Φ = 0, the existence of Nash equilibrium is uncertain. But if it
exists, the equilibrium strategy should be parameterized by a process χ ∈ L2
F(0, T ; R1)
chosen as a degree of freedom, i.e.
σiπ∗
i =χ− n−1
n φi, i = 1, 2, · · · , n.
Set h ̃′ = ( ̃h′1,  ̃h′2, · · · ,  ̃h′n)⊤ and η ̃′ = (η ̃′1, η ̃′2, · · · , η ̃′n)⊤. BSDEs (3.10) can be rewritten as



d ̃h′ = −
{
A′h ̃′ + B′η ̃′ + C′  ̃h′(0) + F ′}
dt + η ̃′ dW, t ∈ [0, T ],
 ̃h′(T ) = 0, (4.10)
where A′, B′, and C′ are coefficient matrices, and F ′ is a coefficient vector. Precisely, for
i, j = 1, 2, · · · , n,
A′
ij ≜



0, i ̸= j,
−r, i = j,
B′
ij ≜

 
 
ρj − ρi
n , i ̸= j,
−ρi, i = j,
C′
ij ≜

 
 
ρj − ρi
n cj, i ̸= j,
0, i = j,
F′
i≜
∑
i̸=j
ρj − ρi
n fj − ∑
i̸=j
ρj − ρi
n − 1 χ.
Obviously A′ ∈ L∞
F (0, T ; Rn×n), B′ ∈ L∞
F (0, T ; Rn×n), C′ ∈ L2
F (0, T ; Rn×n) and F ′ ∈ L2
F (0, T ; Rn).
Set K′ ≜ E[ ∫ T
0 Γ′(s)C′(s) ds] and D′ ≜ E[ ∫ T
0 Γ′(s)F ′(s) ds], where Γ′ ∈ L2
F(0, T ; Rn×n) solves
SDE 


dΓ′ = Γ′ [A′ dt + B′ dW ] , t ∈ [0, T ],
Γ′(0) = In.
Then the consistent condition for  ̃h′(0) to guarantee the well-posedness of BSDE (4.10) in the
marginal case becomes
(In − K′)h ̃′(0) = D′.
In general, with a degree of freedom process χ, it is difficult to guarantee both Φ = 0 and
the well-posedness of BSDE (4.10) in the mean time. Even if the well-posedness of BSDE (4.10)
is achieved by the invertibility of In − K′ with the help of a sufficiently small time horizon
T > 0, to guarantee Φ = 0 with a suitable choice of χ ∈ L2
F(0, T ; R) is still a challenging
problem. If we further know that BSDE (4.10) admits a unique solution, the difficulty is still
there due to the required delicate balance between the free-choice parameter χ and Φ = 0 in the
marginal case. However, under the homogeneous risk preferences condition (Assumption 4.1)
or the deterministic coefficients condition (Assumption 4.2), the coupled system is simplified
16

much, and explicit criteria could be derived to guarantee both Φ = 0 and the well-posedness of
BSDE (4.10).
We first discuss the delicate balance between χ and Φ = 0 under Assumption 4.1.
Theorem 4.5. Assume Assumption 4.1 and Ψ = 1. Then the existence of Nash equilibrium
can be classified into the following situations.
1. Infinitely Many Equilibria: If the equality
E
∫T
0
(
r(s) + 1
2 |ρ(s)|2
)
ds =
∫T
0
(
r(s) + 1
2 |ρ(s)|2
)
ds +
∫T
0
ρ(s) dWs, (4.11)
holds, then there exist infinitely many Nash equilibria whose components are parameterized
by χ ∈ L2
F(0, T ; R1) as below
π∗
i=χ
σi
− n−1
nσi
[(
− zi
ˇh(0) + 1
γip(0)ˇh(0)2
)
ηˇ +
(Λ
p +ρ
) Yi∗
p
]
.
2. No Equilibrium: If (4.11) does not hold, no Nash equilibrium exists.
Proof. Under Assumption 4.1, BSDEs (3.10) admit only trivial solutions (0, 0). Since θi = 1
for all i = 1, 2, · · · , n,
n
∑
k=1
Z∗
k = 0 and
n
∑
k=1
zk = 0. It follows from (4.8) that
Φ = γˆ
p(0)ˇh(0)2
(
ηˇ +
(Λ
p +ρ
)
ˇh
)
.
Notice γˆ
p(0)ˇh(0)2 ̸= 0. Define
Ξ ≜ ηˇ +
(Λ
p +ρ
)
ˇh.
We claim that there is no Nash equilibrium if Ξ ̸≡ 0, and there are infinitely many Nash
equilibria if Ξ ≡ 0.
Then we present an equivalent condition to Ξ ≡ 0. We claim that Ξ ≡ 0 if and only if (4.11)
holds.
Ξ ≡ 0 =⇒ (4.11): Set L(t) = p(t)ˇh(t) for t ∈ [0, T ], and by Itô’s formula, it follows that
dL =
[
ˇh
(
−rp + ρ2p + 2ρΛ + Λ2
p
)
+ ηˇ (ρp + Λ)
]
dt +
(
ηˇp + ˇhΛ
)
dW,
= (−rL + Ξ(ρp + Λ)) dt + (−ρL + pΞ) dW.
(4.12)
If Ξ ≡ 0, we get from (4.12) an SDE

  
  
dL = −rL dt − ρL dW, t ∈ [0, T ],
L(T ) = −1,
L(0) = p(0)ˇh(0).
(4.13)
The first two equations in (4.13) give a unique explicit F-adapted solution as below
L(t) = − exp
(
∫T
t
ρ(s) dWs +
∫T
t
(
r(s) + 1
2 ρ(s)2
)
ds
)
, t ∈ [0, T ].
17

Hence, if SDE (4.13) is solvable, then
∫T
0
ρ(s) dWs +
∫T
0
(
r(s) + 1
2 ρ(s)2
)
ds = L(0) = p(0)ˇh(0),
must be a constant, which implies that (4.11) is true.
(4.11) =⇒ Ξ ≡ 0: If (4.11) holds, ∫ T
0
(
r(s) + 1
2 ρ(s)2)
ds + ∫ T
0 ρ(s) dW is a constant,
which together with ∫ t
0 ρ(s) dWs +∫ t
0
(
r(s) + 1
2 ρ(s)2)
ds is Ft-measurable, leads to ∫ T
t ρ(s) dWs +
∫T
t
(
r(s) + 1
2 ρ(s)2)
ds is Ft-measurable for t ∈ [0, T ]. According to (3.4) and (3.12), we know
p(t)ˇh(t) = −
E
[
exp
{
∫T
t −ρ dW + ∫ T
t (−r − ρ2
2 ) ds
}
∣ ∣ ∣ ∣
Ft
]
E
[
exp
{
∫T
t −2ρ dW + ∫ T
t (−2r − ρi2) ds
}
∣ ∣ ∣ ∣
Ft
],
and due to measurability we further have
p(t)ˇh(t) = − exp
(
∫T
t
ρ dW +
∫T
t
(r + 1
2 ρ2) ds
)
.
This shows that L(t) = p(t)ˇh(t) is a solution of SDE (4.13). Bearing in mind that p(t)ˇh(t) is
also a solution of SDE (4.12), we immediately have Ξ ≡ 0.
Let us see the delicate balance between χ and Φ = 0 under Assumption 4.2.
Theorem 4.6. Assume Assumption 4.2 and Ψ = 1. Then the existence of Nash equilibrium
can be classified into the following situations.
1. Infinitely Many Equilibria: If the equality
∫T
0
E
[q(ρ ̄ηˆ′ + G)] ds =
∫T
0
q(ρ ̄ηˆ′ + G) ds +
∫T
0
qηˆ′ dW, (4.14)
holds, where
q(t) ≜ e− ∫ t
0 r(s) ds, ηˆ′ ≜
n
∑
i=1
ρi
Yi∗
pi
, G≜
n
∑
i=1
∑
j̸=i
ρj − ρi
n ρj
Yj∗
pj
, (4.15)
there exist infinitely many Nash equilibria whose components are parameterized by χ ∈
L2
F(0, T ; R) as below
π∗
i=χ
σi
− n−1
nσi
(
η ̃′
i + ρi
Yi∗
pi
)
, (4.16)
where η ̃i′ is the solution to BSDE (4.10).
2. No Equilibrium: If (4.14) does not hold, no Nash Equilibrium exists.
Proof. Under Assumption 4.2, ci = 0 for i = 1, 2, · · · , n and thus C′ = 0. Then BSDE (4.10)
admits a unique solution ( ̃h′, η ̃′) parameterized by χ. In this case φi has a form
φi = η ̃′
i + ρi
Yi∗
pi
. (4.17)
18

Denote by ⃗1 = (1, 1, . . . , 1)⊤ ∈ Rn the unit vector. Noticing
n
∑
i=1
A′ij = −r and
n
∑
i=1
Bi′j = −ρ ̄, and
using BSDE (4.10), we get a scalar-valued BSDE:



dˆh = −
{
−rˆh − ρ ̄ηˆ + G
}
dt + ηˆ dW, t ∈ [0, T ],
ˆh(T ) = 0, (4.18)
where ˆh ≜ ⃗1 ·  ̃h′, ηˆ ≜ ⃗1 · η ̃′ and G ≜ ⃗1 · F ′. Note that G is independent of χ and so is BSDE
(4.18). By (4.15) and (4.17) we know ηˆ = ηˆ′ − Φ, so BSDE (4.18) involves Φ. Clearly, if Φ = 0,
there are infinitely many equilibria given by (4.16), and otherwise there is no Nash Equilibrium.
So we need to prove that (4.14) is a criteria to determine Φ = 0 or not.
If Φ = 0, BSDE (4.18) can be rewritten as the following SDE



dˆh = −
{
−rˆh + ρ ̄ηˆ′ + G
}
dt − ηˆ′ dW, t ∈ [0, T ],
ˆh(T ) = 0.
(4.19)
By SDE (4.19) and Itô’s lemma, we obtain
ˆh(t) = 1
q(t)
[
ˆh(0) −
∫t
0
q(ρ ̄ηˆ′ + G) ds −
∫t
0
qηˆ′ dW
]
.
Letting t = T and taking expectation, we have
ˆh(0) =
∫T
0
E
[q(ρ ̄ηˆ′ + G)] ds.
Hence
ˆh(t) = 1
q(t)
[∫ T
0
E
[q(ρ ̄ηˆ′ + G)] ds −
∫t
0
q(ρ ̄ηˆ′ + G) ds −
∫t
0
qηˆ′ dW
]
.
If the equality (4.14) holds, the constraint ˆh(T ) = 0 is satisfied, and the constrained SDE (4.19)
is well-posed.
On the other hand, if the constrained SDE (4.19) is well-posed with a solution ˆh, then
(ˆh, −ηˆ′) is also a solution to BSDE (4.18). By the uniqueness of solution to BSDE (4.18), we
know −ηˆ′ = ηˆ which implies Φ = ηˆ + ηˆ′ = 0.
5 Example
In the case that both Assumptions 4.1 and 4.2 are satisfied, explicit expressions for the
feedback strategies can be given (if existing). We will show this in the following theorem, which
can also be regarded as a special example for our theoretical results.
Theorem 5.1. Assume Assumptions 4.1 and 4.2 hold. Then there exists a unique Nash equi
librium if Ψ < 1 and no Nash equilibrium exists if Ψ = 1.
Proof. Under Assumptions 4.1 and 4.2, r and ρ are deterministic functions, and
p(t) = exp((−2r + ρ2)(t − T )), ˇh(t) = − exp{r(t − T )}, Λ =  ̃h = η ̃ = ηˇ = 0,
where (p, Λ), ( ̃h, η ̃) and (ˇh, ηˇ) are the solutions to BSDE (3.1), (3.10) and (3.11), respectively.
19

If Ψ < 1, by Remark 4.4 and Theorems 4.3 and 4.4, there exists a unique Nash equilibrium.
In this case the optimal feedback strategy (3.14) reduces to
π∗
i = θi
(σ\ π∗)i
σi
−ρ
σi
(
Z∗
i − ertzi − exp (r(t − T ) + ρ2T )
γi
)
.
And φi has a form
φi = ρ
(
Z∗
i − ertzi − exp (r(t − T ) + ρ2T )
γi
)
.
Hence the unique Nash equilibrium is
σiπ∗
i =− 1
1−Ψ
nθi
n − 1 + θi
n
∑
i=1
φi
n + nθi
n−1
− φi
1 + θi
n−1
.
If Ψ = 1, no equilibrium exists. It follows from the term in Theorem 4.5 that
Ξ = ηˇ +
(Λ
p +ρ
)
ˇh = ρˇh ̸≡ 0,
or equivalently, (4.11) does not hold since r + 1
2 ρ2 is deterministic and ∫ T
0 ρ dW ̸≡ 0. Alterna
tively, we obtain the same conclusion by checking (4.14) in Theorem 4.6. If (4.14) holds,
∫T
0
E
[qρ ̄ηˆ′] ds =
∫T
0
qρ ̄ηˆ′ ds +
∫T
0
qηˆ′ dW.
Since
ρ ̄ηˆ′ =
n
∑
i=1
ρ2 Yi∗
p=
n
∑
i=1
ρ2
(
Z∗
i+
(
− zi
ˇh(0) + 1
γip(0)ˇh(0)2
)
ˇh
)
=
n
∑
i=1
γˆρ2
p(0)ˇh(0)2
ˇh,
we see qρ ̄ηˆ′ is deterministic and ηˆ′ ̸≡ 0. But ∫ T
0 qηˆ′ dW obeys the law of normal distribution,
which results in a contradiction.
6 Conclusion
In this paper, we investigate time-inconsistent Nash equilibrium strategies for a multi-agent
game under MV criterion. We first solve a linearly constrained stochastic LQ control problem
to derive optimal strategies for each agent. Then we use a decoupling technique to establish a
connection between the Nash equilibrium and a novel type of linear multi-dimensional BSDEs
(4.6). The well-posedness of such BSDEs is studied in both the usual case and the marginal
case. Based on Assumptions 4.1 and 4.2, we have more refined analyses of Nash equilibria, as
summarized in the following table.
Table 1: Existence of Nash Equilibria
Assumptions None 4.1 4.2 4.1 and 4.2 Ψ < 1 Discussion Unique Unique Unique Ψ = 1 Open None or infinity None or infinity None
20

A Well-Posedness of a New Type of Nonlinear BSDEs
Lemma A.1. Consider the following BSDE
Y (t) = ξ +
∫T
t
f
(s, Y (s), Z(s), C(s)Y (0)) ds −
∫T
t
Z(s) dW (s), t ∈ [0, T ], (A.1)
where
(a1) {W (t)}t∈[0,T ] is a standard m-dimensional Brownian motion with its natural filtration
denoted by F = {Ft}t∈[0,T ];
(a2) ξ ∈ FT and E|ξ|2 < ∞;
(a3) f : Ω × [0, T ] × Rn × Rn×m × Rn → Rn is P ⊗ B(Rn) ⊗ B(Rn×m) ⊗ B(Rn)-measurable
and C : Ω × [0, T ] → Rn×n is P-measurable, where P is the predictable sub-σ algebra of
F ⊗ B([0, T ]);
(a4) for any t ∈ [0, T ], y1, y2 ∈ Rn, z1, z2 ∈ Rn×m, there exists a Lipschitz constant L ⩾ 0 such
that
|f (t, y1, z1, ζ1) − f (t, y2, z2, ζ2) | ⩽ L (|y1 − y2| + |z1 − z2| + |ζ1 − ζ2|) ;
(a5) E ∫ T
0 (|f (t, 0, 0, 0)|2 + |C(t)|2) dt < ∞.
Fix the terminal value ξ, the driver f and process C, then BSDE (A.1) admits a unique solution
(Y, Z) ∈ S2
F (0, T ; Rn) × L2
F (0, T ; Rn×m), provided that the horizon time T > 0 is sufficiently
smal l.
Proof. For a given v ∈ Rn, consider BSDE
Y v(t) = ξ +
∫T
t
f
(s, Y v(s), Zv(s), C(s)v) ds −
∫T
t
Zv(s) dW (s), t ∈ [0, T ].
It is well known that, under (a1)–(a5), the above BSDE admits a unique solution (Y v, Zv) ∈
S2
F (0, T ; Rn) × L2
F (0, T ; Rn×m).
Define the mapping Φ : Rn → Rn by Φ(v) = Y v(0). Below, we analyze the contraction
property of Φ.
Consider the following two BSDEs with parameters vˆ and v ̃ ∈ Rn:

  
  
Yˆ vˆ(t) = ξ +
∫T
t
(f (s, Yˆ vˆ(s), Zˆvˆ(s), C(s)vˆ)) ds −
∫T
t
Zˆvˆ(s) dW (s),
Y ̃ v ̃(t) = ξ +
∫T
t
(f (s, Y ̃ v ̃(s), Z ̃v ̃(s)), C(s)v ̃) ds −
∫T
t
Z ̃v ̃(s) dW (s).
For β = 16(L2 + 1), the standard estimate for BSDEs yields
|Yˆ vˆ(t) − Y ̃ v ̃(t)|2 + 1
2 EFt
[
∫T
t
eβ(s−t) (
|Yˆ vˆ(s) − Y ̃ v ̃(s)|2 + |Zˆvˆ(s) − Z ̃v ̃(s)|2)
ds
]
⩽ L2
4(L2 + 1) EFt
∫T
t
eβ(s−t)|C(s)|2|vˆ − v ̃|2 ds.
21

In particular, it implies
|Yˆ vˆ(0) − Y ̃ v ̃(0)|2 ⩽ 1
4
∫T
0
eβsE[|C(s)|2] ds · |vˆ − v ̃|2.
Taking T > 0 sufficiently small such that ∫ T
0 eβsE[|C(s)|2] ds < 1, the above estimate leads to
i.e.,
|Φ(v1) − Φ(v2)| ⩽ 1
2 |v1 − v2|,
so that Φ is a contraction mapping. By the fixed-point theory, there exists a unique v ∈ Rn
such that Φ(v) = v, i.e., Y v(0) = v, from which the existence and uniqueness of solution to
BSDE (A.1) follows.
References
[1] T. Björk, M. Khapko, and A. Murgoci, On time-inconsistent stochastic control in
continuous time, Finance and Stochastics, 21 (2017), pp. 331–360.
[2] L. Bo, S. Wang, and C. Zhou, A mean field game approach to optimal investment and
risk control for competitive insurers, Insurance: Mathematics and Economics, 116 (2024),
pp. 202–217.
[3] C. Deng, X. Su, and C. Zhou, Relative wealth concerns with partial information and
heterogeneous priors, SIAM Journal on Financial Mathematics, 15 (2024), pp. 360–398.
[4] G.-E. Espinosa and N. Touzi, Optimal investment under relative performance concerns,
Mathematical Finance, 25 (2015), pp. 221–257.
[5] G. Fu, Mean field portfolio games with consumption, Mathematics and Financial Eco
nomics, 17 (2023), pp. 79–99.
[6] G. Fu and C. Zhou, Mean field portfolio games, Finance and Stochastics, 27 (2023),
pp. 189–231.
[7] G. Guan and X. Hu, Time-consistent investment and reinsurance strategies for
mean–variance insurers in n-agent and mean-field games, North American Actuarial Jour
nal, 26 (2022), pp. 537–569.
[8] Y. He, L. He, D. Chen, and Z. Liu, Mean field and n-insurers games for robust optimal
reinsurance-investment in correlated markets., Journal of Industrial & Management Opti
mization, 19 (2023).
[9] Y. Hu, X. Shi, and Z. Q. Xu, Non-homogeneous stochastic LQ control with regime
switching and random coefficients, Math. Control Relat. Fields, 14 (2024), pp. 671–694.
[10] D. Lacker and A. Soret, Many-player games of optimal consumption and investment
under relative performance criteria, Mathematics and Financial Economics, 14 (2020),
pp. 263–281.
22

[11] D. Lacker and T. Zariphopoulou, Mean field and n-agent games for optimal
investment under relative performance criteria, Mathematical Finance, 29 (2019), pp. 1003
1038.
[12] X. Li, X. Y. Zhou, and A. E. Lim, Dynamic mean-variance portfolio selection with
no-shorting constraints, SIAM Journal on Control and Optimization, 40 (2002), pp. 1540
1555.
[13] Z. Liang and K. Zhang, Time-inconsistent mean field and-agent games under relative
performance criteria, SIAM Journal on Financial Mathematics, 15 (2024), pp. 1047–1082.
[14] A. E. Lim and X. Y. Zhou, Mean-variance portfolio selection with random parameters
in a complete market, Mathematics of Operations Research, 27 (2002), pp. 101–120.
[15] H. Markowitz, Modern portfolio theory, Journal of Finance, 7 (1952), pp. 77–91.
[16] H. M. Markowitz, Portfolio selection: efficient diversification of investments, Yale uni
versity press, 2008.
[17] G. Wang, Z. Q. Xu, and P. Zhang, Competitive optimal portfolio selection in a
non-markovian financial market: A backward stochastic differential equation study, arXiv
preprint arXiv:2408.02286, (2024).
[18] J. Xiong and X. Y. Zhou, Mean-variance portfolio selection under partial information,
SIAM Journal on Control and Optimization, 46 (2007), pp. 156–175.
[19] P. Yang, Z. Chen, and Y. Xu, Time-consistent equilibrium reinsurance–investment
strategy for n competitive insurers under a new interaction mechanism and a general
investment framework, Journal of Computational and Applied Mathematics, 374 (2020),
p. 112769.
[20] J. Zhang, Backward stochastic differential equations, Springer, 2017.
[21] P. Zhang and P. Huang, Optimal portfolio with relative performance and partial
information: A mean-field game approach, Asian Journal of Control, 26 (2024), pp. 703
716.
[22] X. Y. Zhou and D. Li, Continuous-time mean-variance portfolio selection: A stochastic
lq framework, Applied Mathematics and Optimization, 42 (2000), pp. 19–33.
[23] X. Y. Zhou and G. Yin, Markowitz’s mean-variance portfolio selection with regime
switching: A continuous-time model, SIAM Journal on Control and Optimization, 42
(2003), pp. 1466–1482.
[24] J. Zhu, G. Guan, and S. Li, Time-consistent non-zero-sum stochastic differential
reinsurance and investment game under default and volatility risks, Journal of Compu
tational and Applied Mathematics, 374 (2020), p. 112737.
23

---

## Processing Information

- **Processing Library:** Zotero PDFWorker
- **Processing Date:** 2026-02-10T18:15:16.566Z
- **Text Length:** 48996 characters
- **Success:** Text extraction completed
- **PDF Library Used:** Zotero PDFWorker
- **Pages Processed:** 23 of 23
