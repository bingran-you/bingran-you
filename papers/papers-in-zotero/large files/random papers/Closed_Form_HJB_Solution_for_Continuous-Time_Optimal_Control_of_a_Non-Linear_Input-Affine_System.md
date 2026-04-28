# PDF Document: Vyas et al. - 2025 - Closed Form HJB Solution for Continuous-Time Optimal Control of a Non-Linear Input-Affine System.pdf

**File Path:** Vyas et al. - 2025 - Closed Form HJB Solution for Continuous-Time Optimal Control of a Non-Linear Input-Affine System.pdf

**Processed Date:** 2026-02-10T18:17:23.965Z

**File Size:** 406.30 KB

**Total Pages:** 12

**Extracted Pages:** 12

**PDF Library:** Zotero PDFWorker

**Attachment Item ID:** 3305

**Title:** Closed Form HJB Solution for Continuous-Time Optimal Control of a Non-Linear Input-Affine System

**Collection:** Large Files > Random Papers

---

## Extracted Text Content

Proceedings of Machine Learning Research vol vvv:1–12, 2026
Closed Form HJB Solution for Continuous-Time Optimal Control of a
Non-Linear Input-Affine System
Akash Vyas VYAS.8@IITJ.AC.IN Department of Mechanical Engineering, IIT Jodhpur
Shreyas Kumar SHREYASKUMAR@IISC.AC.IN HiRo Lab, Cyber Physical Systems, IISc Bengaluru
Jayant Kumar Mohanta JAYANT@IITJ.AC.IN Department of Mechanical Engineering, IIT Jodhpur
Ravi Prakash RAVIPR@IISC.AC.IN HiRo Lab, Cyber Physical Systems, IISc Bengaluru
Abstract
Designing optimal controllers for nonlinear dynamical systems often relies on reinforcement learning and adaptive dynamic programming (ADP) to approximate solutions of the Hamilton Jacobi Bellman (HJB) equation. However, these methods require iterative training and depend on an initially admissible policy. This work introduces a new analytical framework that yields closed-form solutions to the HJB equation for a class of continuous-time nonlinear input-affine systems with known dynamics. Unlike AD-
P-based approaches, it avoids iterative learning and numerical approximation. Lyapunov theory is used to prove the asymptotic stability of the resulting closed-loop system, and theoretical guarantees are provided. The method offers a closed-form control policy derived from the HJB framework, demonstrating improved computational efficiency and optimal performance on state-of-the-art optimal control problems in the literature. Keywords: Optimal control, HJB equation, Closed-form solution.
1. Introduction
Optimal control of dynamic systems has long attracted significant research attention, with modern approaches predominantly relying on reinforcement learning (RL) and adaptive dynamic programming (ADP) methods to handle nonlinear systems. However, this computational shift has overshadowed opportunities to obtain closed-form solutions to the Hamilton Jacobi Bellman (HJB) equation Vrabie et al. (2009b); Lewis et al. (2012) for certain classes of input-affine systems where analytical tractability is s-
till possible. For linear quadratic regulator (LQR) systems with quadratic cost functions, the HJB equation reduces to the algebraic Riccati equation, which admits exact analytical solutions. In contrast, solving the HJB equation for nonlinear systems remains challenging because it requires complete knowledge of the dynamics and involves solving complex nonlinear PDEs Lewis et al. (2012); White and Sofge (1992). This difficulty has motivated extensive research on approximate solution methods, part-
icularly ADP-based approaches Kreinovich (2005); Bertsekas and Tsitsiklis (1995). ADP methods, implemented in either model-based or model-free forms, approximate the HJB solution using value or policy iteration algorithms Bertsekas (2017). Variants such as generalized policy iteration Vrabie and Lewis (2009b) and integral policy iteration Lee et al. (2014) aim to improve learning efficiency, while value iteration methods can converge without an initial admissible
© 2026 A. Vyas, S. Kumar, J.K. Mohanta & R. Prakash.
arXiv:2511.21593v1 [math.OC] 26 Nov 2025

VYAS KUMAR MOHANTA PRAKASH
policy Bian and Jiang (2021); Su et al. (2018). As a result, ADP has become a major branch of RL for both discrete-time Wang et al. (2011); Liu et al. (2020) and continuous-time systems Liu et al. (2014); Jiang and Jiang (2012); Wang et al. (2017). Although effective, most ADP and integral reinforcement learning (IRL) methods still require partial knowledge of system dynamics (e.g., control coefficient matrices) Vamvoudakis and Lewis (2010); Ganie and Jagannathan (2023), and rely on iterative trai-
ning with function approximators, which can limit practical deployment. Adaptive critic designs (ACDs) Vrabie et al. (2009a); Dierks and Jagannathan (2010a); Vrabie and Lewis (2009a) address this by performing online approximation of the cost function and control law, but they remain computationally demanding and lack closed-form guarantees. However, existing adaptive critic–based schemes typically provide only uniform ultimate boundedness (UUB) of the closed-loop trajectories. While UUB ensures t-
hat system states remain within a bounded neighborhood of the equilibrium, it does not guarantee convergence to the exact equilibrium. In safety-critical domains such as robotics or aerospace, this residual steady-state error is undesirable. To address this limitation, this work introduces a novel drift-free augmented formulation for a class of continuous-time nonlinear input-affine systems, enabling a closed-form analytical solution of the HJB equation under known system dynamics. The proposed ap-
proach leverages Lyapunov stability theory to establish strict asymptotic convergence of the closed-loop system, thereby providing both analytical tractability and theoretical guarantees beyond those offered by adaptive critic–based methods.
2. Mathematical Preliminaries
Let’s consider a nonlinear input-affine dynamical system in continuous-time written as,
x ̇ = f (x) + g(x)τ (1)
where, x ∈ Rm denotes the state, f (x) ∈ Rm denotes the Internal dynamics, g(x) ∈ Rm×n denotes control coefficient matrix and τ ∈ Rn denotes the control input. Additionally, It is assumed that the dynamics f (x) and g(x) are known a prior in this study. The system is assumed to be observable and controllable, with x = 0 as its unique equilibrium contained in a compact set χ with f (0) = 0, ensuring that an optimal control input for (1) can be determined. To facilitate the derivation of an analytic-
al solution, the original system (1) is rewritten in an augmented drift-free form as,
x ̇ = f (x) g(x) 1
τ = P (x)u (2)
where, P (x) ∈ Rm×(n+1), u ∈ R(n+1). In the following sections, an optimal control law will be derived for this augmented system to ensure stability while minimizing a global cost function.
2.1. The Hamilton-Jacobi-Bellman Equation
The value function for the given system dynamics (2) over time interval (t, ∞] is defined by,
V (x, t) = muin J(x, u), s.t. x ̇ = f (x, u) (3)
2

CLOSED FORM HJB SOLUTION
J(x, u) =
Z∞
t
l(x(τ ), u(τ )) dτ (4)
where, l(x, u) = 1
2 [Q(x) + u⊤Ru] is the stage cost, Q(xi) ≥ 0 and R ∈ R(n+1)×(n+1) is a positive
definite matrix. A proper choice of Q(x) = x⊤[Q0 + γP (x)P (x)⊤]x where Q0 ∈ Rm×m is symmetric, ensures that the components of the state vector are ’small’ as the second term in Q(x) increases the penalty on state in regions where the system is highly nonlinear and harder to control Rodrigues (2022), while R limits excessive control effort u(t). The objective is to find an optimal control law u∗(t) which minimizes the above cost function. For this we can write the Hamiltonian as, H(x, u) = ∇xV (x,-
 t)⊤x ̇ + l(x, u) where, ∇xV (x, t)⊤ is the gradient of the V (x, t) with respect to x, It is well known that the optimal control input that minimizes the cost function (4) also minimizes the Hamiltonian and therefore we use stationary condition to find optimal control u∗(t), this gives the formulation popularly known as the HamiltonianJacobi-Bellman (HJB) equation,
muin
(
∂V
∂x
⊤
x ̇ (t) + l(x(t), u(t))
)
= 0 (5)
now, substituting expressions of x ̇ from (2) and l(x(t), u(t)) in equation (5),
muin
(
∂V
∂x
⊤
P (x)u + Q(x)
2 + u⊤Ru
2
)
= 0 (6)
Differentiating (6) with respect to u and setting the derivative to 0 will give,
u∗(t) = −R−1P ⊤(x) ∂V
∂x (7)
In order to find the expression for ∂V
∂x , use the optimal control input u∗(t) from (7) in eqn (6),
∂V
∂x
⊤
P (x)R−1P ⊤(x) ∂V
∂x = Q(x) (8)
Generally to solve for the optimal control problem, equations (7)-(8) need to be solved to obtain optimal value function ∇xV (x, t) first. However, finding the solution is relatively difficult due to nonlinear system (1). Consequently, iterative methods are often employed to compute approximate optimal solutions, but they are computationally expensive, sensitive to initialization, and typically only guarantee local optimality. In this method we aim to construct a closed form solution for a set of -
nonlinear systems (1) to find an optimal control Reddy et al. (2020), Prakash et al. (2022). So, eqn (8) has a quadratic form
Z⊤Z = z for z ≥ 0 which has a solution of the form Z = √zψ, where ψ ∈ R(n+1) is a vector with ψ⊤ψ = 1. Thus, we get,
Z = R− 1
2 P ⊤(x) ∂V
∂x = pQ(x)ψ (9)
Substituting Z from (9) into optimal control input u∗(t) eqn (7), we get,
u∗(t) = −R− 1
2 ψpQ(x) (10)
3

VYAS KUMAR MOHANTA PRAKASH
The expression for ψ is determined using Lyapunov Stability criteria defined as,
V(x) = 1
2 x⊤x (11)
The time derivative of the Lyapunov function is, V ̇ (x) = x⊤x ̇ = x⊤P (x)u∗ and substituting the
control input from (10) gives V ̇ (x) = x⊤x ̇ = −x⊤P (x)R− 1
2 ψpQ(x).
Here, the choice of ψ = P ⊤(x)x
∥P ⊤(x)x∥ is made to directly enforce the Lyapunov stability condition
while satifying the constraint ψ⊤ψ = 1. This ensures that the Lyapunov derivative, V ̇ (x) is negative definite. This strategic selection is the key that enables an analytical, closed-form solution for the control law from the HJB equation. However, since P (x) depends on the state, it is possible that it might lose rank or align unfavorably with x at nonzero states. In such cases, the right-hand side can become arbitrarily small (or even vanish), which may locally prevent strict decrease of V(x).-
 This degeneracy can give rise to saddle-type behaviors in the closed-loop dynamics.
Unlike adaptive critic–based approximations, which typically guarantee only uniform ultimate boundedness (UUB) due to residual approximation errors, the closed-form analytical control law derived in (12) ensures a strictly negative-definite Lyapunov derivative. As a result, the proposed controller guarantees asymptotic convergence of the system state to the equilibrium point without requiring persistent excitation or iterative parameter adaptation. Hence, we get final control input as,
u∗(t) = −R− 1
2 P ⊤(x)x
∥P ⊤(x)x|∥
q
x⊤[Q0 + γP (x)P ⊤(x)]x (12)
where, P (x)P ⊤(x) = f (x)f ⊤(x) + g(x)g⊤(x). Now, we require the state penalty x⊤[Q0 + γP (x)P ⊤(x)]x ≥ 0 ∀x ∈ χ. So, for x ̸= 0,
γ ≥ − x⊤Q0x
∥P ⊤(x)x∥2 (∥P (x)⊤x∥ ̸= 0) (13)
So, parameters γ should satisfy the condition given in (13) for Q(xi) ≥ 0. Now, augmented control input u∗(t) from eqn (12) is multiplied with D ∈ Rn×(n+1) matrix,
τ ∗(t) = Du∗(t) = 0n×1 In×n u∗(t) (14)
The transformation matrix D is used to extract the actual control input from the augmented optimal control u∗(t) in (12). While the original system (1) uses an n-dimensional control input τ (t), the HJB formulation yields an (n + 1)-dimensional solution u∗(t), his transformation effectively removes the scalar component and retains only the n-dimensional control vector needed for the actual system. For practical implementation, these considerations needs to be satisfied:
1. Verify ∥P ⊤(x)x∥ ̸= 0 to avoid singularities in the control law.
2. Choose γ to satisfy (13) over the operating region χ.
4

CLOSED FORM HJB SOLUTION
2.2. Proposed Optimal Tracking Control
For trajectory tracking, the goal is to design an optimal control law τ ∗(t) that enables the nonlinear system to follow a time-varying desired trajectory xd(t) with known derivative x ̇ d(t) Dierks and Jagannathan (2010a). The desired trajectory dynamics are defined as,
x ̇ d = f (xd) + g(x)τd (15)
where f (xd) is the internal dynamics of the system (1) expressed at the desired state xd, g(x) is defined in (1), and τd is the desired control input. It is useful to note that x ̇ d(t), f (xd) and g(x) are known in (15). Let the tracking error be defined as: e(t) = x(t) − xd(t) and its derivative with respect to time t is,
e ̇(t) = x ̇ (t) − x ̇ d(t) = f (x) + g(x)τ − f (xd) − g(x)τd
e ̇(t) = fe(e) + g(x)τe (16)
where, fe(e) = f (x) − f (xd), τe = τ − τd. We, can convert eqn (16) into augmented form,
e ̇ = fe(e) g(x) 1
τe
= Pe(x)ue (17)
To achieve optimal control of (17), the control policy ue must be chosen to minimize the infinitehorizon HJB cost function,
V (e, t) = muien
Z∞
t
l(e(τ ), ue(τ )) dτ (18)
where, l(e, ue) = 1
2 [Q(e) + ue⊤Rue] is the cost function, Q(ei) ≥ 0 and R ∈ R(n+1)×(n+1) is the positive definite penalty on the control input. The Hamiltonian for the HJB tracking problem is now written as, H(e, ue) = ∇eV (e, t)⊤e ̇ + l(e, ue). Now, applying the stationary condition to it gives us the optimal control input for the tracking problem as,
u∗
e(t) = −R−1P ⊤
e (x) ∂V
∂e (19)
Now, substituting (19) into Hamiltonian yields the HJB equation for the tracking problem to be,
∂V
∂e
⊤
Pe(x)R−1P ⊤
e (x) ∂V
∂e = Q(e) (20)
This is a quadratic equation of the form Z⊤Z = z. It has a solution of the form Z = √zψ, where ψ ∈ R(n+1) is a vector with ψ⊤ψ = 1. and substituting the value of Z in (19), we get,
u∗
e(t) = −R− 1
2 ψpQ(e) (21)
The expression for ψ is determined using Lyapunov Stability criteria defined as,
V(e) = 1
2 e⊤e (22)
5

VYAS KUMAR MOHANTA PRAKASH
Then the time derivative of the Lyapunov function is, V ̇ (e) = e⊤e ̇ = e⊤Pe(x)ue∗. Now, using
control input expression in V ̇ (e) = e⊤e ̇ = −e⊤Pe(x)R− 1
2 ψpQ(e).
we need to choose ψ such that V ̇ (e) is negative definite, let ψ = Pe⊤(x)e
||Pe⊤(x)e|| it makes V ̇ (e) negative
definite and satisfy the constraint ψ⊤ψ = 1. Hence, we get final control input as,
u∗
e(t) = −R− 1
2 Pe⊤(x)e
||Pe⊤(x)e||
q
e⊤[Q0 + γPe(x)Pe(x)⊤]e (23)
control input τe for trajectory tracking can be extracted out from (23), we can multiply it with
D ∈ Rn×(n+1),
τ∗
e (t) = Du∗
e(t) = 0n×1 In×n u∗
e(t) (24)
Recalling τe = τ − τd, So, eqn (24) can be rewritten as,
τ ∗(t) = τ ∗
e (t) + τd = Du∗
e(t) + τd (25)
this optimal control input (25) consists of a predetermined feedforward term, τd that can be found by rearranging (15) as,
τ ∗(t) = Du∗
e(t) + g(x)†[x ̇ d − f (xd)] (26)
3. Results
To demonstrate the effectiveness of our analytical method, we offer multiple numerical examples for set-point control and trajectory tracking with a nonlinear input-affine system on a personal computer having intel i9-13900K (13th Gen) and 64 GB of RAM was used to conduct the numerical experiments. To quantitatively assess the performance of the proposed control method, the following standard indices are considered:
1. Integral of Time-weighted Squared Error (ITSE): It show how quickly controller drives errors to zero which highlights transient vs. steady-state trade-offs.
ITSE =
ZT
0
te2(t) dt (27)
2. Cumulative Cost: This metric is a measure of accuracy and optimal effort with smooth trajectories.
Jτ =
ZT
0
[e⊤(t)e(t) + τ ⊤(t)τ (t) + τ ̇ ⊤(t)τ ̇ (t)] dt (28)
Although the methods were designed under different weighting matrices, we report a normalized evaluation cost using Q = I, R = I for fair comparison.
3. Computation Time: The wall-clock time required to reduce the tracking error below 10−3 is reported; if this threshold is not reached, the time for the full horizon [0, T ] is used.
6

CLOSED FORM HJB SOLUTION
3.1. Example I
Consider this continuous-time nonlinear system from Dierks and Jagannathan (2010a) and Vamvoudakis and Lewis (2010),
x ̇ 1 x ̇ 2
=
" −x1 + x2
− x1
2 − x2 1−(cos(2x1)+2)2
2
#
+0
cos(2x1) + 2 τ (29)
0 10 20 Time (s)
2
0
2
4
x1
(a)
State x1
0 10 20 Time (s)
5.0
2.5
0.0
2.5
x2
(b)
State x2
0 10 20 Time (s)
0
5
10
15
(c)
Control Input
0 10 20 Time (s)
0
200
400
Cost
(d)
Actual Cost: e Qe + R
10 15 20
0.1
0.0
0.1
10 15 20
0.1
0.0
0.1 0 1
0
5
10
0.0 2.5 5.0
0
100
Proposed Method SOLA
Figure 1: System response: (a) State variables x1, (b) State variables x2, (c) Control input τ , (d) Cost function
We conducted a quantitative comparison study of the proposed method with a single online approximator (SOLA) based scheme Dierks and Jagannathan (2010a). For SOLA, the stage cost was l(x, u) = Q(x) + u⊤Ru with Q(x) = x⊤x, R = 1 and the basis vector
φ(x) = [x1, x2, x1x2, x2
1, x2
2, x2
1cos(2x1)2, x3
1]⊤
was used. The tuning parameters α1 = 25.0, α2 = 0.01, and the initialization of all NN-weights to zero were taken directly from Dierks and Jagannathan (2010a). Initial condition for both methods was x(0) = [5, −5]⊤ and for the proposed method Q0 = I2×2, R = I2×2 and γ = 1.0 were used.
Fig. 1 illustrates the comparative performance over t ∈ [0, T ]. Subplots (a-b) shows the state convergence to the equilibrium point x = 0 for both methods while subplots (c-d) illustrates the control effort and cost metric. For a fair comparison, the controllers were simulated without adding any probing noise. While persistent excitation is generally required for parameter convergence in adaptive control, practical control objectives can often be achieved without artificial excitation, as demonst-
rated by successful convergence in the results. Table 1 shows that the proposed HJB-based
Table 1: Performance Comparison of Optimal Control Methods for Example-I
Method ITSE Cumulative Cost Computation Time (s) HJB-SOLA Dierks and Jagannathan (2010a) 4615.71 1546.702 2.235 Proposed method 35.977 876.785 0.201
method achieves the lowest ITSE and cumulative cost, indicating faster convergence with lower control effort than the SOLA baseline Dierks and Jagannathan (2010a). It also records the shortest computation time, demonstrating computational efficiency.
7

VYAS KUMAR MOHANTA PRAKASH
3.2. Example II
The following nonlinear system studied here is taken from Lin (2000) and Zhong et al. (2013),
x ̇ 1 x ̇ 2
=
"
x2 + λ1x1cos 1
x2+λ2 + λ3x2sin(λ4x1x2)
0
#
+0
1 τ (30)
Now, we simulate the close-loop system based on optimal control policy (14). Set the initial state be x(0) = [2, −2]⊤ and the simulation results for the following three cases are given in Fig. 2, for the proposed method where Q0 = I2×2, R = I2×2, γcase−1 = 0.5, γcase−2 = 0.5 and γcase−3 = 1.0 respectively.
1. Case 1: λ1 = −1, λ2 = −100, λ3 = 0, λ4 = −100
2. Case 2: λ1 = −0.2, λ2 = 100, λ3 = 1, λ4 = −1
0 5 10 15 20 Time (s)
1
0
1
2
x1
(a)
State x1
0 5 10 15 20 Time (s)
2
1
0
x2
(b)
State x2
0 5 10 15 20 Time (s)
0.0
0.5
1.0
1.5
(c)
Control Input
0 5 10 15 20 Time (s)
0.0
2.5
5.0
7.5
10.0
Cost
(d)
Cost: e e +
10 15 20
0.1
0.0
0.1
10 15 20
0.1
0.0
0.1 0 2 4
0
1
02
0
2
4
Proposed Method SOLA
0 5 10 15 20 Time (s)
0
1
2
x1
(e)
State x1
0 5 10 15 20 Time (s)
2.0
1.5
1.0
0.5
0.0
x2
(f)
State x2
0 5 10 15 20 Time (s)
0
1
2
(g)
Control Input
0 5 10 15 20 Time (s)
0
5
10
15
Cost
(h)
Cost: e e +
02
0
2
4
Figure 2: System response: (a) State variables x1 for Case-1, (b) State variables x2 for Case-1, (c) Control input τ for Case-1, (d) cost function for Case-1, (e) State variables x1 for Case-2, (f) State variables x2 for Case-2, (g) Control input τ for Case-2, (h) cost function for Case-2
From the results shown in Fig. 2, it can be observed that under the optimal control policy (14), system states converge to their respective equilibrium points: subplots (a–d) correspond to Case1, subplots (e–h) to Case-2, and subplots (i–l) to Case-3. For a fair evaluation, all methods were simulated over the time interval t ∈ [0, T ] without adding any probing noise, and the basis functions were kept the same as those used in Dierks and Jagannathan (2010a). Moreover, no explicit tuning of Q and R-
 was performed for any method; their values were fixed at 1. The results of the comparative study is presented in Table 2, the proposed HJB-based method achieves lowest ITSE, demonstrating superior transient response and faster error decay compared to Dierks and Jagannathan (2010a).
8

CLOSED FORM HJB SOLUTION
Table 2: Performance Comparison of Optimal Control Methods for Example-II
Case Method ITSE Cumulative Cost Computation Time (s) Case 1 HJB-SOLA Dierks and Jagannathan (2010a) 40.59 16.62 2.085
Proposed method 2.036 6.097 0.191 Case 2 HJB-SOLA Dierks and Jagannathan (2010a) N/C N/C N/C
Proposed method 2.684 14.859 0.649
∗N/C: Not Converged
0 10 20 Time (s)
0
1
2
3
4
x1
(a)
State x1
0 10 20 Time (s)
5
0
5
10
x2
(b)
State x2
0 10 20 Time (s)
0
10
20
(c)
Control Input
u1proposed u2proposed dproposed u1sola u2sola dsola
0 10 20 Time (s)
0
200
400
Cost
(d)
Cost: e e +
05
0.1
0.0
0.1
Proposed Method SOLA
Figure 3: System response for Case 3: (a) State variables x1, (b) State variables x2, (c) Control input τ , (d) Cost function
3.3. Example III
In this example, we are trying to solve a different problem from differential game theory and this following nonlinear system studied here is taken from Dierks and Jagannathan (2010b). Let’s consider the nonlinear system in the presence of disturbances as,
x ̇ = f (x) + g(x)u + k(x)d (31)
where, x ∈ Rm denotes the state, u ∈ Rn denotes the control input, d ∈ Rw denotes the disturbance, k(x) ∈ Rm×w is bounded according to ∥k(x)∥F ≤ kM for a known constant kM , where ∥.∥F is the Frobenius norm. These systems are two-player zero-sum differential game, governed by the Hamilton Jacobi Isaacs (HJI) equation,
x ̇ 1 x ̇ 2
=
"
− 29x1+87x1x2
2
8 − 2x2+3x2x2
1 4
− x1+3x1x2
2 4
#
+1 0
03
u1
u2
+ 0.5
1 d (32)
We simulated the close-loop system under the optimal control policy (14). For this, the control input was assumed to be a vector τ = [u1, u2, d]⊤ and band the initial state was set as x(0) = [4, −4]⊤ with Q0 = I2×2, R = I3×3 and γ = 0.1 respectively for the proposed method. From the results shown in Fig. 3(a)-(b), it can be observed that under the action of the optimal control policy (14), the states of system (32) can converge to the equilibrium point.
9

VYAS KUMAR MOHANTA PRAKASH
We also conducted a quantitative comparison of the proposed method with a single online approximator (SOLA) based scheme reported in Dierks and Jagannathan (2010b). For the HJI problem, the penalties were set as Q(x) = 2((2x1 + 6x1x22)2 + (4x2 + 6x21x2)2) and R = 1. The basis
vector φ(x) = [x1, x2, x1x2, x21, x22, x21x22, x31]⊤ was used. The tuning parameters were chosen as
α1 = 200.0, α2 = 0.01. The initial condition was set to x(0) = [4, −4]⊤ and all neural network weights were initialized to zero following Dierks and Jagannathan (2010b). For a fair evaluation, both methods were simulated for time t ∈ [0, T ] without adding any probing
Table 3: Performance Comparison of Optimal Control Methods for Example-III
Method ITSE Cumulative Cost Computation Time (s) HJI-SOLA Dierks and Jagannathan (2010b) 9567621.127 25233371.564 0.561 Proposed method 1.155 979.797 0.0705
noise and system (32) was able to converge without it. Table 3 shows that the proposed HJB-based method achieves the lowest ITSE and cumulative cost, indicating faster convergence with lower control effort than Dierks and Jagannathan (2010b). It also records the shortest computation time, demonstrating its computational efficiency.
4. Conclusion
In this paper, a novel analytical solution was presented for the Hamilton Jacobi Bellman equation applied to continuous-time nonlinear affine systems. Unlike popular ADP-based methods, the proposed approach is purely analytical, does not require training, and is computationally efficient. For systems with known dynamics, both optimal regulation and tracking control problems were addressed, and Lyapunov techniques were employed to demonstrate stability of the resulting optimal control scheme. Exten-
sive numerical tests on multiple benchmark problems illustrate the advantages of the proposed method. Proposed optimal tracking controller also exhibited satisfactory performance, though results are omitted due to space constraints.
References
Dimitri P. Bertsekas. Value and policy iterations in optimal control and adaptive dynamic programming. IEEE Transactions on Neural Networks and Learning Systems, 28(3):500–509, 2017. doi: 10.1109/TNNLS.2015.2503980.
{Dimitri P.} Bertsekas and {John N.} Tsitsiklis. Neuro-dynamic programming: an overview. Proceedings of the IEEE Conference on Decision and Control, 1:560–564, 1995. ISSN 0191-2216. Proceedings of the 1995 34th IEEE Conference on Decision and Control. Part 1 (of 4) ; Conference date: 13-12-1995 Through 15-12-1995.
Tao Bian and Zhong-Ping Jiang. Reinforcement learning and adaptive optimal control for continuous-time nonlinear systems: A value iteration approach. IEEE transactions on neural networks and learning systems, 33(7):2781–2790, 2021.
T. Dierks and S. Jagannathan. Optimal control of affine nonlinear continuous-time systems. In Proceedings of the 2010 American Control Conference, pages 1568–1573, 2010a. doi: 10.1109/ ACC.2010.5531586.
10

CLOSED FORM HJB SOLUTION
T. Dierks and S. Jagannathan. Optimal control of affine nonlinear continuous-time systems using an online hamilton-jacobi-isaacs formulation. In 49th IEEE Conference on Decision and Control (CDC), pages 3048–3053, 2010b. doi: 10.1109/CDC.2010.5717676.
Irfan Ganie and S. Jagannathan. Continual optimal adaptive tracking of uncertain nonlinear continuous-time systems using multilayer neural networks. In 2023 American Control Conference (ACC), pages 3395–3400, 2023. doi: 10.23919/ACC55779.2023.10156466.
Yu Jiang and Zhong-Ping Jiang. Computational adaptive optimal control for continuous-time linear systems with completely unknown dynamics. Automatica, 48(10):2699–2704, 2012. ISSN 0005-1098. doi: https://doi.org/10.1016/j.automatica.2012.06.096. URL https://www.
sciencedirect.com/science/article/pii/S0005109812003664.
Vladik Kreinovich. Handbook of learning and approximate dynamic programming, by jennie si, andrew g. barto, warren b. powell and donald wunsch ii, eds. J. Intell. Fuzzy Syst., 16(4):305–309, October 2005. ISSN 1064-1246.
Jae Young Lee, Jin Bae Park, and Yoon Ho Choi. On integral generalized policy iteration for continuous-time linear quadratic regulations. Automatica, 50(2):475–489, 2014. ISSN 0005-1098. doi: https://doi.org/10.1016/j.automatica.2013.12.009. URL https://www.
sciencedirect.com/science/article/pii/S0005109813005682.
F.L. Lewis, D. Vrabie, and V.L. Syrmos. Optimal Control. Wiley, 2012. ISBN 9780470633496.
URL https://books.google.co.in/books?id=aRgwdEQ-bOEC.
Feng Lin. An optimal control approach to robust control design. International Journal of Control, 73 (3):177–186, 2000. doi: 10.1080/002071700219722. URL https://doi.org/10.1080/
002071700219722.
Derong Liu, Ding Wang, Fei-Yue Wang, Hongliang Li, and Xiong Yang. Neural-networkbased online hjb solution for optimal robust guaranteed cost control of continuous-time uncertain nonlinear systems. IEEE Transactions on Cybernetics, 44(12):2834–2847, 2014. doi: 10.1109/TCYB.2014.2357896.
Yang Liu, Huaguang Zhang, Rui Yu, and Zuoxia Xing. H∞ tracking control of discrete-time system with delays via data-based adaptive dynamic programming. IEEE Transactions on Systems, Man, and Cybernetics: Systems, 50(11):4078–4085, 2020. doi: 10.1109/TSMC.2019.2946397.
Ravi Prakash, Jayant Kumar Mohanta, and Laxmidhar Behera. Closed form hjb solution for path planning of a robot manipulator with warehousing applications. In 2022 IEEE 18th International Conference on Automation Science and Engineering (CASE), pages 2049–2055, 2022. doi: 10. 1109/CASE49997.2022.9926505.
Tharun Kumar Reddy, Vipul Arora, and Laxmidhar Behera. Hjb-equation-based optimal learning scheme for neural networks with applications in brain–computer interface. IEEE Transactions on Emerging Topics in Computational Intelligence, 4(2):159–170, 2020. doi: 10.1109/TETCI.2018. 2858761.
11

VYAS KUMAR MOHANTA PRAKASH
Luis Rodrigues. Inverse optimal control with discount factor for continuous and discrete-time control-affine systems and reinforcement learning. In 2022 IEEE 61st Conference on Decision and Control (CDC), pages 5783–5788, 2022. doi: 10.1109/CDC51059.2022.9992796.
Hanguang Su, Huaguang Zhang, Kun Zhang, and Wenzhong Gao. Online reinforcement learning for a class of partially unknown continuous-time nonlinear systems via value iteration. Optimal Control Applications and Methods, 39(2):1011–1028, 2018.
Kyriakos G. Vamvoudakis and Frank L. Lewis. Online actor–critic algorithm to solve the continuous-time infinite horizon optimal control problem. Automatica, 46(5):878–888, 2010. ISSN 0005-1098. doi: https://doi.org/10.1016/j.automatica.2010.02.018. URL https://www.
sciencedirect.com/science/article/pii/S0005109810000907.
D. Vrabie, O. Pastravanu, M. Abu-Khalaf, and F.L. Lewis. Adaptive optimal control for continuoustime linear systems based on policy iteration. Automatica, 45(2):477–484, 2009a. ISSN 0005-1098. doi: https://doi.org/10.1016/j.automatica.2008.08.017. URL https://www.
sciencedirect.com/science/article/pii/S0005109808004469.
Draguna Vrabie and Frank Lewis. Neural network approach to continuous-time direct adaptive optimal control for partially unknown nonlinear systems. Neural Networks, 22(3):237–246, 2009a. ISSN 0893-6080. doi: https://doi.org/10.1016/j.neunet.2009.03.008. URL https://
www.sciencedirect.com/science/article/pii/S0893608009000446. GoalDirected Neural Systems.
Draguna Vrabie and Frank L. Lewis. Generalized policy iteration for continuous-time systems. In 2009 International Joint Conference on Neural Networks, pages 3224–3231, 2009b. doi: 10.1109/IJCNN.2009.5178964.
Draguna Vrabie, Kyriakos Vamvoudakis, and Frank Lewis. Adaptive optimal controllers based on generalized policy iteration in a continuous-time framework. In 2009 17th Mediterranean Conference on Control and Automation, pages 1402–1409, 2009b. doi: 10.1109/MED.2009. 5164743.
Ding Wang, Haibo He, and Derong Liu. Adaptive critic nonlinear robust control: A survey. IEEE Transactions on Cybernetics, 47(10):3429–3451, 2017. doi: 10.1109/TCYB.2017.2712188.
Fei-Yue Wang, Ning Jin, Derong Liu, and Qinglai Wei. Adaptive dynamic programming for finitehorizon optimal control of discrete-time nonlinear systems with ε-error bound. IEEE Transactions on Neural Networks, 22(1):24–36, 2011. doi: 10.1109/TNN.2010.2076370.
David A. White and Donald A. Sofge. Handbook of intelligent control: Neural, fuzzy, and
adaptive approaches. 1992. URL https://api.semanticscholar.org/CorpusID:
7580240.
Xiangnan Zhong, Haibo He, and Danil V. Prokhorov. Robust controller design of continuous-time nonlinear system using neural network. In The 2013 International Joint Conference on Neural Networks (IJCNN), pages 1–8, 2013. doi: 10.1109/IJCNN.2013.6707098.
12

---

## Processing Information

- **Processing Library:** Zotero PDFWorker
- **Processing Date:** 2026-02-10T18:17:23.965Z
- **Text Length:** 29986 characters
- **Success:** Text extraction completed
- **PDF Library Used:** Zotero PDFWorker
- **Pages Processed:** 12 of 12
