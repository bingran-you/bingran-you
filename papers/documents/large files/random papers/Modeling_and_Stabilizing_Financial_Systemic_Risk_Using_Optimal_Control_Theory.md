# PDF Document: Wu - 2025 - Modeling and Stabilizing Financial Systemic Risk Using Optimal Control Theory.pdf

**File Path:** Wu - 2025 - Modeling and Stabilizing Financial Systemic Risk Using Optimal Control Theory.pdf

**Processed Date:** 2026-02-10T18:17:07.590Z

**File Size:** 242.06 KB

**Total Pages:** 21

**Extracted Pages:** 21

**PDF Library:** Zotero PDFWorker

**Attachment Item ID:** 3578

**Title:** Modeling and Stabilizing Financial Systemic Risk Using Optimal Control Theory

**Collection:** Large Files > Random Papers

---

## Extracted Text Content

Modeling and Stabilizing Financial Systemic Risk Using
Optimal Control Theory
Jiacheng Wu
University of California Berkeley
Abstract
A theoretical model of systemic-risk propagation of financial market is analyzed for stability. The state equation is an unsteady diffusion equation with a nonlinear logistic growth term, where the diffusion process captures the spread of default stress between interconnected financial entities and the reaction term captures the local procyclicality of financial stress. The stabilizing controller synthesis includes three steps: First, the algebraic Riccati equation is derived for the linearized sy-
stem equation, the solution of which provides an exponentially stabilizing controller. Second, the nonlinear system is treated as a linear system with the nonlinear term as its forcing term. Based on estimation of the solutions for linearized equations and the contraction mapping theorem, unique existence of the solution for the nonlinear system equation is proved. Third, local asymptotic stability of the nonlinear system is obtained by considering the corresponding Hamilton-Jacobi equation. In bo-
th the linearized and nonlinear systems, the resulting controllers ensure that the H∞ norms of the mappings from disturbance to the output are less than a predefined constant. Stabilizing conditions provide a new framework of achieving system-level financial risk managing goals via the synergy of decentralized components, which offers policy-relevant insights for governments, regulators and central banks to mitigate financial crises.
1 Introduction
Financial systems are complex networks of financial institutions and market participants where shocks of distress can propagate through dense webs of interconnections, amplifying localized disturbances into global crises [1]. The 2008 global financial crisis and the subsequent contagion reaction underscores how seemingly uncorrelated financial entities can become deeply coupled via inter-bank exposure, linked balance-sheet and correlated asset holdings. Therefore, understanding the mechanism of ri-
sk propagation dynamics in terms
1
arXiv:2511.11909v1 [q-fin.MF] 14 Nov 2025

of how distress spreads, amplifies, and potentially stabilizes [2, 3], is of great importance for policy-level risk mitigation and society-level financial security. Traditional network-contagion model captures some features of financial systems by a network with financial institutions as nodes and exposure as weighed edge [4, 5]. However, such models often lack an explicit treatment of continuous time and spatial propagation mechanisms, which potentially poses difficulties for application of adva-
nced mathematical tools to model the unsteady dynamics. Borrowing the ideas from information theory and epidemiology, diffusion is a natural mechanism to model the spread of financial stress across sectors, geographies, and asset classes through liquidity flows, information channels, and overlapping portfolios. On the other hand, local dynamics such as leverage feedback, liquidity spirals and credit contagion can further amplify the distress, which is also a key component to model financial networ-
ks [6, 7, 8]. To capture these dual features of diffusion and local dynamics, the following diffusionreaction partial differential equation is used to model the time evolution of financial stress and its propagation through financial networks,
∂
∂t s(x, t) = Ds∇2s + c2s 1 − s
S , (1)
where s(x, t) is the financial stress level at location x and time t, Ds is the diffusion coefficient represents how tightly different financial institution is connected, and c2 is the growth coefficient. Note that x here represents spatial dimensions beyond geographic locations, and it can also represent generic distance between financial entities in the network. The first term on the right-hand side of equation (1) describes distress propagation through financial interconnections. The second ter-
m corresponds to local amplification of distress even without contagion. S is the saturated value for the distress s(x, t). The state equation (1) has two fixed points s(x, t) = 0 and s(x, t) = S. The equilibrium point s(x, t) = 0 corresponds to zero distress, which is desired but unstable, while s(x, t) = S corresponds to complete liquidation corresponding to financial crisis and this equilibrium is stable without intervention. Therefore, the goal is to stabilize the system equation (1) about its-
 zero state to attenuate systemic financial distress. Stability of linear partial differential equations is well understood using semigroup theory [9, 10]. The key idea is to consider the partial differential equation as an ordinary differential equation in a functional space and prove that the corresponding spatial operator generates an exponentially stable semigroup. In the case of nonlinear systems, stability properties usually need to leverage Lyapunov indirect method [11, 12, 13]. However, th-
e theory is less well developed there, in particular for the case of partial differential state equations. Here, a novel method is proposed to handle the stabilizing controller synthesis problem for the specific nonlinear growth term in equation (1) by making use of the relationship between the nonlinear state equation and its linearized version. Optimal control theory is used to give the mathematical form of the stabilizing controller. After formulating the control problem in Section 2, the optim-
al control problem for
2

the linearized system is considered in Section 3. Pontryagin’s minimum principle [14] is used to derive the algebraic Riccati equation, the solution of which gives the exact form of the stabilizing controller. Based on the resulting controller, it is proved that the H∞ norm of the mapping from the disturbance to the output is less than a preset constant. In section 4, the linearized system with additional forcing terms is considered. Second, the norm estimation for the solution is obtained with r-
espect to the norm of the forcing terms. Third, by setting the nonlinear term in the state equation (1) to be the forcing term, the existence and uniqueness of the solution for the nonlinear state equation is proved based on the contraction mapping theorem. Finally, Pontryagin’s minimum problem is used again for the nonlinear optimal control problem to obtain the Hamilton-Jacobi equation, which is a nonlinear version of the Riccati equation. The feedback controller is synthesized based on the solu-
tion of the Hamilton-Jacobi equation, and local asymptotic stability is proved.
2 Formulation of the control problem
Consider the controlled state equation with control input u(x, t) and disturbance w(x, t),
∂
∂t s(x, t) = Ds∇2s + c2s 1 − s
S + B1w(x, t) + B2u(x, t), (2)
where s(x) ∈ H01(Ω), and B1 and B2 are input operators of the disturbance and control input, respectively. Note that Ω is the control domain, which in this case is the landscape of distributed financial entities. The Neumann boundary conditions are
∇s x
|x| (x, t)
x∈Γ
= 0, (3)
where Γ is the boundary of the domain Ω. The homogeneous Neumann boundary condition enforces that there is no distress flux across the boundary. The initial condition is
s(x, 0) = s0(x), (4)
where s0 represents the initial level of financial stress. The partial differential system equation (2) may be considered to an ordinary differential equation in the Sobolev space H01(Ω), with w(t) as the disturbance and u(t) as the control input according to
d
dt s(t) + DsAs(t) + F (s(t)) = B1w(t) + B2u(t), (5)
where
As := −∇2s, (6)
F (s(t)) = F0s(t) + FN (s(t)) = −c2s + c2
S s2. (7)
3

F0s(t) is the linear part of the function F (s(t)), and FN (s(t)) is the nonlinear part. Therefore, the linearized state equation about the state s(t) = 0 is
d
dt s(t) + DsAs(t) + F0s(t) = B1w(t) + B2u(t). (8)
Note that B1 and B2 are assumed to be bounded linear operators, and the operator A with corresponding homogeneous Neumann boundary condition is a self-adjoint operator.
3 Optimal control for the linearized system
Before considering the full nonlinear state equation, a stability analysis of the corresponding linearized equation is carried out, the results of which will give one of the conditions of the controller synthesis for the nonlinear system.
3.1 Algebraic Riccatti equation
The linearized system is given by
d
dt s(t) + DsAs(t) + F0s(t) = B1w(t) + B2u(t), (9)
y(t) = Cs(t) + Du(t). (10)
Here, y(t) denotes the output of the system, and C and D are bounded linear operators. We construct the LQ optimal control problem for the linear system as follows
sup
w
inuf
1
2
+∞
Z
0
(|y(t)|2 − γ2|w(t)|2)dt subject to equations (9) and (10), (11)
where γ is a weight coefficient. Roughly speaking, the cost functional minimizes the influence from the disturbance on the output. Without loss of generality, we can set |y(t)|2 = |Cs(t)|2 + |u(t)|2. Now construct Pontryagin’s Hamiltonian for the system (9) and (10) as
H(s, p, u, w) = ⟨B1w + B2u − DsAs − F0s, p⟩ − 1
2 (|Cs|2 + |u|2 − γ2|w|2), (12)
where ⟨·, ·⟩ represents the inner product, and p(t) is the Lagrange multiplier used to adjoin the state equation (9) to the cost functional (11). Based on Pontryagin’s minimum principle, an extremum is reached when
∂H
∂u = 0 ∂H
∂w = 0, (13)
4

which yields
u = B∗
2p, w = − 1
γ2 B∗
1p, (14)
respectively, where asterisks denote adjoint operators. The state equation and adjoint equation can be obtained from
∂H
∂p = s ̇, ∂H
∂s = −p ̇, (15)
respectively. Therefore, the Hamiltonian system is formulated as
s ̇ + DsAs + F0s = B1w + B2u,
p ̇ − DsAp − F ∗
0 p = C∗Cs,
s(0) = s0, p(+∞) = 0. (16)
Because the system is linear, assume the invariant manifolds of the Hamiltonian system are such that p(t) = −P s(t), (17)
where P > 0 and is a self-adjoint bounded operator. Because the system is autonomous, and the terminal time is not specified, H(s, p) = 0 for t > 0. Substituting equations (14) and (17) into H(s, p) = 0 from equation (12) yields
P (DsA + F0)s − 1
2C∗Cs + 1
2 P B2B∗
2Ps − 1
2γ2 P B1B∗
1P s, s = 0, (18)
which gives the algebraic Riccati equation
P (DsA + F0) − 1
2C∗C + 1
2 P B2B∗
2P − 1
2γ2 P B1B∗
1P = 0. (19)
The solution for P > 0 defines the mathematical form of the stabilizing feedback controller u = −B2∗P s.
3.2 Stability of the linearized system with no disturbances
In order to prove stability of the linearized system with the no disturbances, that is, w = 0, first construct the Lyapunov function from the solution to the algebraic Riccati equation as
V (s(t)) = 1
2 ⟨s, P s⟩ ≥ 0. (20)
5

Taking the time derivative of V (s(t)) along the trajectory of the linearized system gives
dV (s(t))
dt = s ̇, dV (s)
ds
= ⟨B2u − (DsA + F0)s, P s⟩
= ⟨P B2u − P (DsA + F0)s, s⟩. (21)
Substituting u = B2∗p = −B2∗P s and the algebraic Riccati equation (19) into this equation requires
dV (s(t))
dt = − 1
2 P B2B∗
2Ps − 1
2γ2 P B1B∗
1Ps − 1
2 C∗Cs, s
= −1
2 |B∗
2 P s|2 − 1
2γ2 |B∗
1 P s|2 − 1
2 |Cs|2
≤ −m|s|2, (22)
where m > 0. This result demonstrates the global exponential stability of the linearized system with w = 0 via the state feedback controller u = −B2∗P s, and that the operator
−(DsA + F0 + B2B2∗P ) generates an exponentially stable semigroup. This result ensures the unique existence of the solution for the linearized system and will be used later to prove asymptotic stability of the nonlinear system.
3.3 Boundedness of the H∞ norm of the mapping from w to y
Once stability is assured for the linearized system with no disturbances, it is sought to demonstrate that the influence from disturbances on the output is smaller that γ. Consider the linearized system with zero initial condition
d
dt s(t) + DsAs(t) + F0s(t) = B1w(t) + B2u(t), s(0) = 0. (23)
Taking the time derivative of the Lyapunov function V (s(t)) = 1
2 ⟨s, P s⟩ along the trajectory of equation (23) gives
dV (s(t))
dt = ⟨s ̇, P s⟩
= ⟨B1w + B2u − (DsA + F0)s, P s⟩
= ⟨P B1w + P B2u − P (DsA + F0)s, s⟩. (24)
6

Substituting u = B2∗p = −B2∗P s and the algebraic Riccati equation (19) into this equation
lead to (note that we do not set w = − 1
γ2 B1∗p)
dV (s(t))
dt = P B1w − 1
2 P B2B∗
2Ps − 1
2γ2 P B1B∗
1Ps − 1
2 C∗Cs, s
= ⟨P B1w, s⟩ − 1
2 |B∗
2 P s|2 − 1
2γ2 |B∗
1 P s|2 − 1
2 |Cs|2
= −1
2 γ2|w|2 + ⟨w, B∗
1 P s⟩ − 1
2γ2 |B∗
1 P s|2 + 1
2 γ2|w|2 − 1
2 |Cs|2 − 1
2 |u|2
= −1
2γ2 w − 1
γ2 B∗
1Ps
2
+1
2 γ2|w|2 − 1
2 |Cs|2 − 1
2 |u|2
≤1
2 γ2|w|2 − 1
2 |Cs|2 − 1
2 |u|2. (25)
Integrate the equation above from t = 0 to t = +∞,
V (s(+∞)) − V (s0) <
+∞
Z
0
1
2 γ2|w|2 − 1
2 |Cs|2 − 1
2 |u|2 dt. (26)
For the initial condition s0 = 0, V (s0) = 0. Also, because V (s(+∞)) ≥ 0, it can be concluded that +∞
Z
0
(|Cs|2 + |u|2)dt < γ2
+∞
Z
0
|w|2dt. (27)
This demonstrates that the H∞ norm of the mapping from the disturbance w to the output y is less than γ, which is the weight coefficient in the cost functional (11).
4 Optimal control for the nonlinear system
In the linear case, the fact that the operator −(DsA + F0 + B2B2∗P ) generates an exponentially stable semigroup ensures the unique existence of the solution for the linearized state equation. However, this is generally not the case for the nonlinear situation. Therefore, the contraction mapping theorem will be used to prove existence and uniqueness of the solution for the nonlinear state equation.
4.1 Construct a linearized system with a forcing term and no disturbances
The idea here is to treat the nonlinear term as an additional forcing term in the linearized system. Adding a forcing term f (t) to the linearized state equation considered in the
7

previous section gives
d
dt s(t) + DsAs(t) + F0s(t) = B2u(t) + f (t). (28)
Consider the following optimal control problem
inuf
1
2
+∞
Z
0
(|Cs|2 + |u|2 + 2⟨g, s⟩)dt subject to equation (28), (29)
where g(t) will be a forcing term in the differential adjoint equation. Constructing the Pontryagin Hamiltonian yields
H(s, p, u) = ⟨B2u − DsAs − F0s + f, p⟩ − 1
2 (|Cs|2 + |u|2 + 2⟨g, s⟩). (30)
Note that the function g(t) will show up as a forcing term in the adjoint equation. From Pontryagin’s minimum principle, an extremum is reached when
∂H
∂u = 0; (31)
thus
u = B∗
2p, (32)
and the Hamiltonian system corresponding to the optimal control problem (29) is
s ̇ + DsAs + F0s = B2u + f,
p ̇ − DsAp − F ∗
0 p = C∗Cs + g,
s(0) = s0, p(+∞) = 0. (33)
The Hamiltonian system is written in the following form
s ̇ + (DsA + F0 + B2B∗
2P )s = f,
p ̇ − (DsA + F0 + B2B∗
2 P )∗p = C∗Cs − P B2B∗
2p + g. (34)
Because it has been proved that the operator −(DsA + F0 + B2B2∗P ) generates an exponentially stable semigroup, then ∃ a > 0 such that
|s(t)| ≤ |s0|e−at +
t
Z
0
e−a(t−r)|f (r)|dr, (35)
and
|p(t)| ≤ C
+∞
Z
t
e−a(r−t)(|Cs(r)| + |B∗
2p(r)| + |g(r)|)dr. (36)
8

Let us first calculate the estimate for the norm of s(t) in the space L2(0, ∞; L2(Ω)), denoted by ∥ · ∥, by integrating the square of equation (35) from 0 to +∞
∥s(t)∥2 =
+∞
Z
0
|s(t)|2dt
≤ |s0|2
+∞
Z
0
e−2atdt + e−at ∗ |f (t)| 2
≤ |s0|2
+∞
Z
0
e−2atdt +


+∞
Z
0
e−at dt


2
∥f (t)∥2
≤ C |s0|2 + ∥f (t)∥2 . (37)
The derivation of this inequality has made use of Young’s inequality for convolution. Similarly, from equation (36), the estimate for the norm of s(t) in the space L2(0, ∞; L2(Ω)) is
∥p(t)∥2 ≤ C ∥|Cs| + |B∗
2 p| + |g|∥2
≤C


+∞
Z
0
|Cs|2 + |B∗
2 p|2 dt + ∥g∥2

 . (38)
From equation (34),
|Cs|2 + |B∗
2 p|2 = ⟨C∗Cs, s⟩ + ⟨B2B∗
2 p, p⟩
= ⟨p ̇ − (DsA + F0)∗p − g, s⟩ + ⟨B2B∗
2 p, p⟩
= ⟨p ̇, s⟩ − ⟨g, s⟩ + ⟨p, −(DsA + F0)s + B2B∗
2 p⟩
= ⟨p ̇, s⟩ − ⟨g, s⟩ + ⟨p, s ̇ − f ⟩
=d
dt ⟨p, s⟩ − ⟨g, s⟩ − ⟨p, f ⟩. (39)
Integrating this from 0 to +∞, it is found that
+∞
Z
0
|Cs|2 + |B∗
2p|2 dt = −⟨p(0), s(0)⟩ −
∞
Z
0
⟨g, s⟩dt −
∞
Z
0
⟨p, f ⟩dt
≤ ⟨|p(0)|, |s0|⟩ +
+∞
Z
0
|⟨g, s⟩|dt +
+∞
Z
0
|⟨p, f ⟩|dt. (40)
9

Substituting t = 0 into equation (36) gives the following estimate for |p(0)|:
|p(0)| ≤ C
+∞
Z
0
e−ar(|Cs(r)| + |B∗
2p(r)| + |g(r)|)dr. (41)
Therefore,
+∞
Z
0
|Cs|2 + |B∗
2 p|2 dt ≤ C
* +∞
Z
0
e−ar(|Cs(r)| + |B∗
2p(r)| + |g(r)|)dr, |s0|
+
+
+∞
Z
0
|⟨g, s⟩|dt +
+∞
Z
0
|⟨p, f ⟩|dt
≤C
+∞
Z
0
|Cs(r)| + |B∗
2 p(r)| + |g(r)|, e−ar|s0| dr
+
+∞
Z
0
|⟨g, s⟩|dt +
+∞
Z
0
|⟨p, f ⟩|dt. (42)
Applying Young’s inequality with ε
k1k2 ≤ 1
2ε k2
1+ ε
2 k2
2 (43)
to the three terms on the right hand side of inequality (42) yields
+∞
Z
0
|Cs|2 + |B∗
2 p|2 dt ≤ ε
+∞
Z
0
(|Cs| + |B∗
2 p| + |g|)2 dt + Cε|s0|2
+ε ∥s∥2 + ∥p∥2 + Cε ∥g∥2 + ∥f ∥2
≤ε


+∞
Z
0
|Cs|2 + |B∗
2 p|2 dt + ∥s∥2 + ∥p∥2


+Cε |s0|2 + ∥g∥2 + ∥f ∥2 . (44)
This is equivalent to
+∞
Z
0
|Cs|2 + |B∗
2 p|2 dt ≤ ε ∥s∥2 + ∥p∥2 + Cε |s0|2 + ∥g∥2 + ∥f ∥2 . (45)
10

Substituting this inequality into inequality (38) yields
∥p(t)∥2 ≤ ε ∥s∥2 + ∥p∥2 + Cε |s0|2 + ∥g∥2 + ∥f ∥2 . (46)
Now combine with inequality (37) to obtain
∥s(t)∥ + ∥p(t)∥2 ≤ ε ∥s∥2 + ∥p∥2 + Cε |s0|2 + ∥g∥2 + ∥f ∥2 , (47)
which is equivalent to
∥s(t)∥2 + ∥p(t)∥2 ≤ C |s0|2 + ∥g∥2 + ∥f ∥2 . (48)
Then, with some algebraic manipulations, it can be concluded that
∥s(t)∥ + ∥p(t)∥ ≤ C (|s0| + ∥g∥ + ∥f ∥) . (49)
This estimation is of great significance because it enables us to bound the norm of the solution by the norm of the initial condition and the additional forcing term. By choosing the forcing term in a special form, the nonlinear state equation can be readily connected to the linearized state equation.
4.2 Uniqueness and existence of the solution of the nonlinear system with no disturbances
Now consider the optimal control problem for the original nonlinear system (5) once again and define the cost functional in the form (11), then the optimal control problem is formulated as
sup
w
inuf J (s0) = 1
2
+∞
Z
0
|Cs|2 + |u|2 − γ2|w|2 dt,
subject to d
dt s(t) + DsAs(t) + F (s(t)) = B1w(t) + B2u(t), (50)
where F (s(t)) is given by (7), which includes the nonlinear term. Once again the Pontryagin Hamiltonian is constructed in the following way
H(s, p, u, w) = ⟨B1w + B2u − DsAs − F (s), p⟩ − 1
2 |Cs|2 + |u|2 − γ2|w|2 . (51)
Based on Pontryagin’s minimum principle, an extremum is reached, as in equation (14), when
∂H
∂u = 0 ∂H
∂w = 0, (52)
11

which yields
u = B∗
2p, w = − 1
γ2 B∗
1p, (53)
respectively. The corresponding Hamiltonian system is now
s ̇ + DsAs + F (s) = B1w + B2u,
p ̇ − DsAp − (∇F (s))∗p = C∗Cs,
s(0) = s0, p(+∞) = 0. (54)
Recall that F (s) = F0s + FN (s) in the nonlinear case; therefore, this becomes
s ̇ + DsAs + F0s = B2u − FN (s),
p ̇ − DsAp − F ∗
0 p = C∗Cs + (∇FN (s))∗ p,
s(0) = s0, p(+∞) = 0. (55)
This is the same as the linear system with forcing (33), but now with
f = −FN (s) = c2
S s2, g = (∇FN (s))∗ p = 2c2
S sp. (56)
Let us define the mapping from the solution pair (s, p) to the forcing terms (f, g) through the nonlinear term as M1. Similarly, the mapping from the forcing terms (f, g) to the solution pair (s, p) through the linearized system with forcing terms (33) is M2. The composite mapping is denoted by M2 ◦ M1. If (s, p) is a solution to the nonlinear system, then (s, p) = M2 ◦ M1(s, p). Then if the composite mapping M2 ◦ M1 is a contraction, the solution (s, p) uniquely exists. Let Σμ be a subset of H × -
H defined as
Σμ = {(s, p) |∥s∥ + ∥p∥ ≤ μ }. (57)
Then for (s, p) ∈ Σμ, we have
∥f ∥ + ∥g∥ = c2
S s2 + 2c2
S sp
≤ 2c2
S ∥s∥ (∥s∥ + ∥p∥)
≤ 2c2
S μ2. (58)
From the inequality (49), it is observed that
∥s∥ + ∥p∥ ≤ C (|s0| + ∥f ∥ + ∥g∥) ≤ |s0| + 2c2
S μ2. (59)
12

In order to make Σμ invariant with respect to the composite mapping M2 ◦ M1, it is necessary to set
|s0| + 2c2
S μ2 ≤ μ. (60)
Therefore, if
|s0| < S
8c2C2 , (61)
then
S − pS2 − 8c2C2S|s0|
4c2C ≤ μ ≤ S + pS2 − 8c2C2S|s0|
4c2C , (62)
and Σμ is invariant with respect to M2 ◦ M1. As one can see, if (s, p) is a solution to the nonlinear system (54), then (s, p) is a fixed point of the composite mapping M2 ◦ M1. Hence, in order to show that the nonlinear system (54) has a unique solution, it is necessary to prove that M2 ◦ M1 is a contraction mapping. To do so, assume there are two different groups of forcing terms (f1, g1) and (f2, g2), and the corresponding solutions of (33) are (s1, g1) and (s2, g2), which satisfy the following-
 systems of equations
s ̇1 + DsAs1 + F0s1 = B2B∗
2 p1 + f1,
p ̇1 − DsAp1 − F ∗
0 p1 = C∗Cs1 + g1,
s1(0) = s0, p1(+∞) = 0, (63)
and
s ̇2 + DsAs2 + F0s2 = B2B∗
2 p2 + f2,
p ̇2 − DsAp2 − F ∗
0 p2 = C∗Cs2 + g2,
s2(0) = s0, p2(+∞) = 0, (64)
respectively. By linearity of the above equations, superposition leads to
d
dt (s1 − s2) + DsA(s1 − s2) + F0(s1 − s2) = B2B∗
2 (p1 − p2) + (f1 − f2),
d
dt (p1 − p2) − DsA(p1 − p2) − F ∗
0 (p1 − p2) = C∗C(s1 − s2) + (g1 − g2),
(s1 − s2)(0) = 0, (p1 − p2)(+∞) = 0. (65)
Applying relation (49), requires that
∥s1 − s2∥ + ∥p1 − p2∥ ≤ C (∥g1 − g2∥ + ∥f1 − f2∥) , (66)
which demonstrates that the mapping M2 is Lipschitz continuous.
13

Now consider the mapping M1 from (s, p) to (f, g), for which
∥f1 − f2∥ + ∥g1 − g2∥ = c2
S s2
1 − s2
2 + 2c2
S (s1p1 − s2p2)
≤ c2
S (∥s1∥ + ∥s2∥) ∥s1 − s2∥
+ 2c2
S ∥s1p1 − s1p2 + s1p2 − s2p2∥
≤ c2
S (∥s1∥ + ∥s2∥ + 2∥p2∥) ∥s1 − s2∥
+ 2c2
S ∥s1∥∥p1 − p2∥. (67)
If the mapping is considered to be within Σμ, that is
∥f1 − f2∥ + ∥g1 − g2∥ ≤ 4c2μ
S (∥s1 − s2∥ + ∥p1 − p2∥) , (68)
then this relation can be combined with (66) to yield
∥s1 − s2∥ + ∥p1 − p2∥ ≤ 4c2Cμ
S (∥s1 − s2∥ + ∥p1 − p2∥) . (69)
Therefore, for the Lipschitz constant to be less than one, we set
4c2 C μ
S < 1, (70)
which requires that
μ< S
4c2C , (71)
then the composite mapping M2 ◦M1 is a contraction mapping. This ensures the existence and uniqueness of the solution (s, p) to the nonlinear system (54), which is a fixed point of M2 ◦ M1.
4.3 Conditions for the solution to the Hamilton-Jacobi equation for the nonlinear system
Thus far, the contraction mapping theorem has been used to prove existence and uniqueness of the solution for the controlled nonlinear system equation. Next, the mathematical form of the stabilizing controller for the nonlinear system is obtained via the Hamilton-Jacobi equation. Recall that the Hamiltonian for the nonlinear system (54) is
H(s, p, u, w) = ⟨B1w + B2u − DsAs − F (s), p⟩ − 1
2 |Cs|2 + |u|2 − γ2|w|2 . (72)
14

Because the system is nonlinear, assume that the mapping from s0 to p(0) has the nonlinear form p(0) = −G(s0). (73)
Because the uniqueness of the solution for the nonlinear system (54) has been proved, the invariant manifold of the Hamiltonian system also takes the same nonlinear form according to p(t) = −G(s(t)). (74)
The terminal time of the optimal control problem (50) is not specified; therefore, we have
H(s, p, u, w) = 0. (75)
Substituting the invariant manifolds gives,
H(s, p, u, w) = 1
γ2 B1B∗
1 G(s(t)) − B2B∗
2G(s(t)) − DsAs(t) − F (s(t)), −G(s(t))
−1
2 |Cs(t)|2 + |B∗
2 G(s(t))|2 − 1
γ2 |B∗
1 G(s(t))|2
= ⟨DsAs + F (s), G(s)⟩ − 1
2γ2 |B∗
1 G(s)|2 + 1
2 |B∗
2 G(s)|2 − 1
2 |Cs|2. (76)
Therefore, the Hamilton-Jacobi equation for the nonlinear mapping G(·) is
⟨DsAs + F (s), G(s)⟩ − 1
2γ2 |B∗
1 G(s)|2 + 1
2 |B∗
2 G(s)|2 − 1
2 |Cs|2 = 0. (77)
From equations (53) and (54), if s = 0, then p = 0, which yields
G(0) = 0. (78)
To see the relationship between the Hamilton-Jacobi equation (77) and the algebraic Riccati equation (19), first consider the relationship between the cost function J(s0) and the nonlinear mapping G. Because the cost functional J(s0) can be treated as a function of the initial condition s0, consider how perturbation of the initial condition will influence the solution of the nonlinear Hamiltonian system (54). Assume δ is a small perturbation on the initial condition of (54), that is, (s + sδ)(0) =-
 s0 + δ, and the solution becomes (s + sδ, p + pδ). Both sδ and pδ are on the scale of O(δ).
d
dt (s + sδ) + DsA(s + sδ) + F (s + sδ) = B2B∗
2− 1
γ2 B1B∗
1 (p + pδ),
d
dt (p + pδ) − DsA(p + pδ) − (∇F (s + sδ))∗(p + pδ) = C∗C(s + sδ),
(s + sδ)(0) = s0 + δ, (p + pδ)(+∞) = 0. (79)
15

Canceling the O(1) terms by substituting (54) and neglecting O(δ2) terms leaves the following equations for the perturbations
s ̇δ + DsAsδ + ∇F (s)sδ = B2B∗
2− 1
γ2 B1B∗
1 pδ,
p ̇δ − DsApδ − (∇F (s))∗ pδ − ∇2F (s)sδ
∗ p = C ∗ Cpδ,
sδ(0) = δ, pδ(+∞) = 0. (80)
Define the mapping from s0 to (s, p) as
Φ(s0) = (s, p). (81)
Then from the definition of (sδ, pδ), we have
⟨∇Φ(s0), δ⟩ = (sδ, pδ). (82)
Because J(s0) = J(s(s0), p(s0)),
⟨∇J(s0), δ⟩ = δJ
δs , δJ
δp , (sδ, pδ)T
=
+∞
Z
0
⟨C∗Cs, sδ⟩ + ⟨B2B∗
2 p, pδ⟩ − 1
γ2 B1B∗
1 p, pδ dt. (83)
Substituting (54) and (80) yields
⟨∇J(s0), δ⟩ =
+∞
Z
0
⟨p ̇ − DsAp − (∇F (s))∗p, sδ⟩ + B2B∗
2p − 1
γ2 B1B∗
1 p, pδ dt
=
+∞
Z
0
⟨p ̇, sδ⟩ − ⟨p, DsAsδ + (∇F (s))sδ⟩ + p, B2B∗
2p − 1
γ2 B1B∗
1 pδ dt
=
+∞
Z
0
d
dt ⟨p, sδ⟩ dt
= −⟨p(0), δ⟩. (84)
Because p(0) = −G(s0), then we have
∇J(s0) = G(s0). (85)
Now consider the case when s0 = 0, then the corresponding solution of the nonlinear system is (s, p) = (0, 0). Substituting (s, p) = (0, 0) into (80), the equations are satisfied
16

by the perturbation about the zero solution (s, p) = (0, 0) as follows:
s ̇δ + DsAsδ + F0sδ = B2B∗
2− 1
γ2 B1B∗
1 pδ,
p ̇δ − DsApδ − F ∗
0 pδ = C ∗ Cpδ,
sδ(0) = δ, pδ(+∞) = 0, (86)
which have the same form as the linear Hamiltonian system (16). Therefore, the invariant manifold for (86) is the same as for (16), which is
pδ = −P sδ, (87)
where P is the solution to the algebraic Riccati equation (19). Therefore,
⟨∇Φ(s0), δ⟩ = (sδ, pδ) = (sδ, −P sδ). (88)
On the other hand, because Φ(s0) = (s, p) = (s, −G(s)),
⟨∇Φ(s0), δ⟩ = (sδ, −∇G(s)sδ). (89)
Setting s0 = 0, the relationship between the solutions to the algebraic Riccati equation (19) and Hamilton-Jacobi equation (77) is given by
∇G(0) = P. (90)
Hence, it is concluded that the nonlinear mapping G(·) needs to satisfy the following four conditions:
i) ⟨DsAs + F (s), G(s)⟩ − 1
2γ2 |B1∗G(s)|2 + 1
2 |B2∗G(s)|2 − 1
2 |Cs|2 = 0,
ii) G(0) = 0,
iii) ∇J(s0) = G(s0),
iv) ∇G(0) = P .
From the last two conditions, note that
∇J(0) = G(0) = 0, ∇2J(0) = ∇G(0) = P > 0. (91)
Therefore, in some neighborhood of s0 = 0, the cost functional J(s0) can be bounded by a convex function of s0, that is,
∃ k > 0, such that J(s0) ≤ k|s0|2. (92)
This result will be employed in the following subsection.
17

4.4 Optimal control for the nonlinear system
Recalling that u = B2∗p, the cost functional J(·) is
J(s) =
+∞
Z
t
|Cs|2 + |B∗
2 p|2 − γ2|w|2 dt, (93)
where s(t) is taken as the initial value. Taking the time derivative gives
d
dt J(s) = ⟨∇J(s), s ̇⟩ = ⟨G(s), s ̇⟩
= ⟨G(s), B1w⟩ − ⟨G(s), DsAs + F (s) + B2B∗
2 G(s)⟩
= ⟨B∗
1G(s), w⟩ − 1
2γ2 |B1 ∗ G(s)|2 − 1
2 |B∗
2 G(s)|2 − 1
2 |Cs|2
≤ γ2
2 |w|2 + 1
2γ2 |B1 ∗ G(s)|2 − 1
2γ2 |B1 ∗ G(s)|2 − 1
2 |B∗
2 G(s)|2 − 1
2 |Cs|2
= γ2
2 |w|2 − 1
2 |B∗
2 G(s)|2 − 1
2 |Cs|2. (94)
Integrating the inequality from 0 to +∞ yields
J(+∞) − J(s0) < γ2
2
+∞
Z
0
|w|2dt − 1
2
+∞
Z
0
|Cs|2 + |B∗
2 G|2 dt. (95)
Based on the fact that J(+∞) = 0 and the relation (92),
1
2
+∞
Z
0
|Cs|2 + |B∗
2 G|2 dt − γ2
2
+∞
Z
0
|w|2dt < k|s0|2. (96)
When calculating the H∞ problem, the initial condition s0 needs to be set to zero; therefore,
+∞
Z
0
|Cs|2 + |B∗
2 G|2 dt < γ2
+∞
Z
0
|w|2dt. (97)
Hence, the H∞ norm of the mapping from the disturbance w(t) to the output of the system is less than γ, just as in the linear case.
4.5 Stability analysis for the nonlinear system with no disturbances
Now the stability analysis for the original nonlinear state equations is the only remaining issue. The objective here is to show that the norm of s(t) in the space L2(0, ∞; L2(Ω)) is bounded.
18

Consider the nonlinear equation without disturbances but with feedback control u = −B2∗G(s)
s ̇ + DsAs + F0s + FN (s) + B2B∗
2G(s) = 0. (98)
Because it is assumed that the pair (DsA+F0, C) is detectable, then there exists a bounded operator D, such that −(DsA + F0 + DC) generates an exponentially stable semigroup. Rewrite equation (98) as
s ̇ + (DsA + F0 + DC)s = DCs − B2B∗
2G(s) − FN (s). (99)
Then there exists a constant b > 0 such that
|s(t)| ≤ e−bt|s0| +
t
Z
0
e−b(t−r)|DCs − B2B∗
2G(s) − FN (s)|dr. (100)
Integrating from 0 to +∞ and applying Young’s inequality for convolution yields
∥s(t)∥2 =
+∞
Z
0
|s(t)|2dt ≤ C|s0|2 + C
+∞
Z
0
|Cs|2 + |B∗
2 G|2 + |FN (s)|2 dt. (101)
Applying relation (92) and substituting w(t) = 0 gives
∥s(t)∥2 ≤ (C + k)|s0|2 + C
+∞
Z
0
|FN (s)|2dt. (102)
If (s, p) ∈ Σμ, that is, ∥s(t)∥ ≤ μ, the following quadratic estimate for |FN (s)|2 = c2
S s2 2
holds:
|FN (s)|2 ≤ C|s(t)|4 ≤ Cμ2|s(t)|2. (103)
Substituting this inequality into equation (102) gives
(1 − Cμ2)∥s(t)∥2 ≤ (C + k)|s0|2. (104)
If it is then required that 1 − Cμ2 > 0, (105)
in which case
μ < √1C . (106)
This provides the following sufficient condition on the solution
∥s(t)∥2 ≤ C + k
1 − Cμ2 |s0|2 < ∞, (107)
from which we can conclude that
lim
t→+∞ |s(t)| = 0. (108)
Therefore, the nonlinear system is locally asymptotically stable.
19

5 Conclusions
A nonlinear partial differential reaction-diffusion equation is used to describe the evolution of financial distress in financial networks. The equation includes a diffusion term capturing the distress propagation and a reaction term capturing local amplification of stress level. Because s(x) = 0 corresponds to the case with zero stress level, it is sought to stabilize the system about this state. A stabilizing feedback controller of the corresponding linearized system is constructed based on the -
solution to the algebraic Riccati equation, and norm estimation of the linearized system with forcing terms is obtained via semi-group theory. Based on this norm estimation, unique existence of the solution to the controlled nonlinear system equation is proved by showing that the solution is a fixed point of a contraction mapping. Finally, the nonlinear state equation describing financial distress propagation and amplification is then stabilized about s(x) = 0 via a feedback controller given by th-
e solution of the Hamilton-Jacobi equation. The resulted control u(x, t) is a state feedback that depends on financial distress diffusion coefficient and the nonlinear local amplification term. In this setting, the distress levels are measured spatially (across different geographical regions or across sectors), and the spatial distribution of control input is computed at government or regulator level. Then local value of control input u(x) for a given time t is sent to location x to execute locall-
y. The spatial distribution of the control input u(x, t) also helps to identify the sub-areas like a specific region or sector that needs financial intervention most. The local control input mapped to real world can take the forms of Bank-specific liquidity assistance or recapitalization programs, targeted purchase programs for specific markets, emergency credit facilities directed at key sectors, etc. With the collaboration of all local decentralized executions of control inputs u(x, t), the over-
all financial system will achieve stability as a whole. This approach fits well into the new modern financial policy making paradigm where global financial goals are achieved by the synergy of multiple policy-guided decentralized efforts. Beyond the applications in financial distress control, because equation (1) is a generic reaction-diffusion equation, with the reaction being modeled as a nonlinear logistic growth term, the presented results may suggest approaches to be applied to similar mathem-
atical models in other physical applications.
References
[1] Daron Acemoglu, Asuman Ozdaglar, and Alireza Tahbaz-Salehi. Systemic risk and stability in financial networks. American Economic Review, 105(2):564–608, 2015.
[2] Andrew G Haldane and Robert M May. Systemic risk in banking ecosystems. Nature, 469(7330):351–355, 2011.
20

[3] Stefano Battiston, Michelangelo Puliga, Rahul Kaushik, Paolo Tasca, and Guido Caldarelli. Debtrank: Too central to fail? financial networks, the fed and systemic risk. Scientific reports, 2(1):541, 2012.
[4] Prasanna Gai and Sujit Kapadia. Contagion in financial networks. Proceedings of the Royal Society A: Mathematical, Physical and Engineering Sciences, 466(2120):24012423, 2010.
[5] Franklin Allen and Douglas Gale. Financial contagion. Journal of political economy, 108(1):1–33, 2000.
[6] Tobias Adrian and Hyun Song Shin. Liquidity and leverage. Journal of financial intermediation, 19(3):418–437, 2010.
[7] Markus K Brunnermeier and Lasse Heje Pedersen. Market liquidity and funding liquidity. The review of financial studies, 22(6):2201–2238, 2009.
[8] Douglas W Diamond and Philip H Dybvig. Bank runs, deposit insurance, and liquidity. Journal of political economy, 91(3):401–419, 1983.
[9] Einar Hille and Ralph Saul Phillips. Functional analysis and semi-groups, volume 31. American Mathematical Soc., 1996.
[10] Amnon Pazy. Semigroups of linear operators and applications to partial differential equations, volume 44. Springer Science & Business Media, 2012.
[11] Aleksandr Mikhailovich Lyapunov. The general problem of the stability of motion. International journal of control, 55(3):531–534, 1992.
[12] James Justus. Ecological and lyapunov stability. Philosophy of Science, 75(4):421–436, 2008.
[13] Jiacheng Wu and Shawn C Shadden. Stability analysis of a continuum-based constrained mixture model for vascular growth and remodeling. Biomechanics and modeling in mechanobiology, 15(6):1669–1684, 2016.
[14] L.S. Pontryagin, V.G. Boltyanskii, R.V. Gamkrelidze, and E.F. Mishchenko. The Mathematical Theory of Optimal Processes. Interscience Publishers, New York, 1962.
21

---

## Processing Information

- **Processing Library:** Zotero PDFWorker
- **Processing Date:** 2026-02-10T18:17:07.590Z
- **Text Length:** 33293 characters
- **Success:** Text extraction completed
- **PDF Library Used:** Zotero PDFWorker
- **Pages Processed:** 21 of 21
