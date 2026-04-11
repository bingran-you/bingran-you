# PDF Document: Hampsey et al. - 2025 - Equivariant Tracking Control for Fully Actuated Mechanical Systems on Matrix Lie Groups.pdf

**File Path:** Hampsey et al. - 2025 - Equivariant Tracking Control for Fully Actuated Mechanical Systems on Matrix Lie Groups.pdf

**Processed Date:** 2026-02-10T18:15:12.132Z

**File Size:** 606.40 KB

**Total Pages:** 15

**Extracted Pages:** 15

**PDF Library:** Zotero PDFWorker

**Attachment Item ID:** 3361

**Title:** Equivariant Tracking Control for Fully Actuated Mechanical Systems on Matrix Lie Groups

**Collection:** Large Files > Random Papers

---

## Extracted Text Content

EQUIVARIANT TRACKING CONTROL FOR FULLY ACTUATED
MECHANICAL SYSTEMS ON MATRIX LIE GROUPS
PREPRINT⋆
Matthew Hampsey
Systems Theory and Robotics Group Australian National University ACT, 2601, Australia
matthew.hampsey@anu.edu.au
Pieter van Goor
Robotics and Mechatronics Department, University of Twente, 7500 AE Enschede, The Netherlands. p.c.h.vangoor@utwente.nl
Ravi Banavar
Centre for Systems and Control, Indian Institute of Technology Bombay, India banavar@iitb.ac.in
Robert Mahony
Systems Theory and Robotics Group Australian National University ACT, 2601, Australia
robert.mahony@anu.edu.au
November 25, 2025
ABSTRACT
Mechanical control systems such as aerial, marine, space, and terrestrial robots often naturally admit a statespace that has the structure of a Lie group. The kinetic energy of such systems is commonly invariant to the induced action by the Lie group, and the system dynamics can be written as a coupled ordinary differential equation on the group and the dual space of its Lie algebra, termed a Lie-Poisson system. In this paper, we show that Lie-Poisson systems can also be written as a left-invarian-
t system on a semi-direct Lie group structure placed on the trivialised cotangent bundle of the symmetry group. The authors do not know of a prior reference for this observation and we are confident the insight has never been exploited in the context of tracking control. We use this representation to build a right-invariant tracking error for the full state of a Lie-Poisson mechanical system and show that the error dynamics for this error are themselves of Lie-Poisson structure, albeit with time-v-
arying inertia. This allows us to tackle the general trajectory tracking problem using an energy shaping design metholodology. To demonstrate the approach, we apply the proposed design methodology to a simple attitude tracking control.
1 Introduction
Trajectory tracking is a core system capability for all robotic systems [Slotine and Li, 1989, Spong et al., 2020]. The classical solution to this problem uses a feed-forward computed torque control to enforce Euler-Lagrange or Hamiltonian error dynamics on an error system, and then applies passive damping injection to stabilise the resulting error system [Markiewicz, 1973, Paul, 1981]. The classical control design is effective, however, it depends heavily on the quality of the model in computing -
the feedforward input, and this input cancels nonlinearities in the system to force the error system into the Euler-Lagrange structure, leading to potential wasted control action even if the model is exact. To address the limitations of this design methodology, Fujimoto et al. [Fujimoto et al., 2001] considered port Hamiltonian systems and used generalised canonical transforms to find error coordinates (by solving a specific set of partial differential equations) for which the error system is also-
 Hamiltonian. The IDA-PBC algorithms of Ortega et al. [Ortega and Garc ́ıa-Canseco, 2004, Ortega et al., 2002] achieve a similar outcome for a class of Euler-Lagrange and port-Hamiltonian control systems. Mahony [Mahony, 2019] introduced a 1-dimensional dynamics system that replicated the desired trajectory dynamics and used energy shaping and energy pumping between the true system and the new desired system to achieve tracking control. All these papers are formulated in generalised coordinates wh-
ile much of the nonlinearity of robot dynamics comes from their inherently non-linear state-spaces SE(3) or SO(3). For systems with state-spaces on Lie groups, the group is normally a natural symmetry of the system, leading to the Lie-Poisson equations – a left trivialised version of Hamilton’s equations for a system on a Lie group with invariant inertia tensor [Marsden and Ratiu, 1994]. Attitude control on SO(3) for satellites and aerial robots was studied in [Meyer, 1971, Koditschek, 1989, Chatu-
rvedi et al., 2011, Bayadi and Banavar, 2014]. General fully-actuated mechanical control systems on Lie groups were considered in
⋆Under review
arXiv:2511.18800v1 [eess.SY] 24 Nov 2025

Equivariant Tracking Control for Fully Actuated Mechanical Systems on Matrix Lie Groups PREPRINT
[Bullo and Lewis, 2005] and the stabilisation of general mechanical systems on Lie groups with nonholonomic constraints was studied in [Chandrasekaran et al., 2024]. The geometry underlying these developments is well covered in [Murray et al., 1994, Lynch and Park, 2017]. An interesting extension that is less commonly studied is that where the Hamiltonian is time-varying. For example a satellite systems with changing configuration has time-varying inertia [Filipe et al., 2014]. Another case study -
of interest is autonomous refueling [Haitao et al., 2016] or control of a rocket [Gantmacher and Levin, 1950], where the changing mass of the system leads to time-varying inertia.
Recently, the Lie group structure of robotic systems has been exploited in the development of equivariant observer and filter theory [Mahony et al., 2008, van Goor et al., 2022, Ge et al., 2022]. Interestingly, the insight obtained by studying the observer problem has led to new perspectives on the tracking control problem as shown by recent work [Hampsey et al., 2024a,b, 2023b, Welde and Kumar, 2024]. In particular, the use of the spatial, or right-invariant, error contrasts to prior work in cont-
rol literature, where the body, or left-invariant, error had been universally preferred. For example, Bullo and Murray [Bullo and Murray, 1995] state that the “reciprocal (right-invariant in our language) [. . .] error [. . .] depend[s] on the arbitrary choice of inertial frame” to argue against using the error. However, using the right invariant, or spatial, error in certain applications makes the error system synchronous [Trumpf et al., 2012, van Goor and Mahony, 2025] and has been shown to lead-
 to lower energy control action for the same performance [Hampsey et al., 2024b, 2023a].
In this paper, we derive a stabilising control law for time-varying Lie-Poisson systems. We review the (trivialised) cotangent semi-direct symmetry [Marsden et al., 1984] and show that Lie-Poisson systems are left invariant with respect to this symmetry. We then show that the induced right-invariant error system for the tracking task is also such a Lie-Poisson system, and thus the tracking task reduces to the stabilisation problem of a Lie-Poisson (error) system with time-varying inertia. We use t-
his to derive a tracking control law that consists of a feedforward term to compensate time-variation in the inertia, along with energy shaping and passive damping. We explore the derived control with an example system and verify the performance with simulation studies. The main results of the paper
1. Introduce a symmetry group G⋉
g∗ and group action for the trivialised cotangent bundle T∗G ∼= G × g∗ that makes Lie-Poisson systems left-invariant.
2. Introduce a right-invariant error between two dynamical Lie-Poisson systems and show that the resulting error system is itself a Lie-Poisson system with a time-varying inertia tensor.
3. Propose a simple tracking control based on energy shaping and damping injection to stabilise the error system.
The paper is structured as follows. In Section 2, the notation used throughout the paper is established, and some mathematical preliminaries required for the main development are revised. In Section 3 we revise Lie-Poisson systems, the main dynamical system of interest in this paper. We extend some known results regarding stabilisation to Lie-Poisson systems with time-varying inertias. In Section 4, we develop the idea of extended Lie-Poisson systems in order to investigate the equivariant symmetr-
ies of these dynamical systems and define appropriate error functions. In Section 6, we show that the developed error system is itself a Lie-Poisson system, and apply the proposed stabilising control to this system to solve the tracking problem. In Section 7, we present our proposed control design on a system posed on SO(3) and provide a tracking control simulation study.
2 Preliminaries
Let V denote a (finite-dimensional) vector space and let V∗ denote its dual space; that is, the set of linear functionals acting on V. Let P ∈ V∗ and V ∈ V, then the contraction P [V ] of P and V is written ⟨P, V ⟩ = ⟨V, P ⟩ (where V and (V ∗)∗ are identified). If V, W are vector spaces and A : V → W is a linear map, W = A[V ] where square brackets indicate linearity of the operator, then A∗ denotes the dual map A∗ : W∗ → V∗ defined by
(A∗[P ])[V ] = ⟨A∗[P ], V ⟩ = ⟨P, A[V ]⟩ = P [A[V ]] (1)
for all P ∈ V∗, V ∈ V. If compatible bases for V and V∗ are used then A∗ = A⊤, where we overload the notation A to be the matrix representation of the operator as well as the abstract operator.
Let M and N denote smooth manifolds. Denote the tangent space at an arbitrary point Q ∈ M by TQM . For a smooth function h : M → N the notation
DZ |Q h(Z) : TQM → Th(Q)N
V 7→ DZ |Q h(Z)[V ],
denotes the derivative of h(Z) evaluated at Z = Q in the direction V ∈ TQM . When the basepoint and argument are implied the notation Dh will also be used for simplicity.
The space of smooth vector fields on M is denoted by X(M ). Given a tangent bundle TM , there is an additional natural vector bundle (called the cotangent bundle) T∗M such that T∗pM is the dual space of TpM .
Let G denote an m-dimensional matrix Lie group and denote the identity element with I. The Lie algebra, g of G, is identified with the tangent space of G at identity, g ≃ TI G ⊂ Rm×m. Given arbitrary X ∈ G, left translation by X is written
2

Equivariant Tracking Control for Fully Actuated Mechanical Systems on Matrix Lie Groups PREPRINT
L X(M )
L X(M )
f
ψY φ∗(Y,·)
f
Figure 1: Equivariance as seen as a transformation of the input space commuting with the transformation of vector fields φ∗(Y, fu) := DφY ◦ fu ◦ φY −1 induced by the group action φ.
LX : G → G, LX (Y ) = XY. This induces an isomorphism DLX : g → TX G. For a matrix Lie group we will write DLX U = XU . Similarly, right translation by X RX (Y ) = Y X induces an isomorphism DRX : g → TX G, written DRX U = U X.
Given X ∈ G, the adjoint map AdX : g → g is defined by AdX U := DLX DRX−1 [U ] and can be written AdX U = XU X−1 for a matrix Lie group. In this paper, we use adjoint operators on different groups and the reader should take care to check which group and associated algebra the subscript and operand come from to infer the appropriate adjoint. Given U ∈ g, the
“little” adjoint map adU : g → g is defined by the matrix commutator adU V = U V − V U . The operator ad∗ : g × g∗ → g∗ is defined by
⟨ad∗
V P, U ⟩ = ⟨P, adV U ⟩ = ⟨P, [V, U ]⟩. (2)
From (1), if compatible bases are used for g and g∗, then one has ad∗
V = ad⊤
V . Given a function h : g∗ → R, one defines
δh
δP ∈ g via the implicit relationship [Marsden and Ratiu, 1994]
W, δh
δP = d
dt t=0
h(P + W t) = Dh[W ], (3)
for all W ∈ g∗. Note that this is the same as identifying g ∼= T∗
P (g∗) for the derivative δh
δP := Dh ∈ T∗
P (g∗).
Let G be a Lie group and M a smooth manifold. A right action is a smooth function φ : G × M → M satisfying the identity and compatibility properties:
φ(I, Q) = Q, φ(Y, φ(X, Q)) = φ(XY, Q)
for all Q ∈ M and X ∈ G. Given a fixed Y ∈ G, the partial map φY : M → M is defined by φY (Q) := φ(Y, Q).
For a manifold M , let X(M ) denote the set of smooth vector fields on M . Let f : L → X(M ), u 7→ fu, be a dynamical system on the manifold M with input space L. Let G act on M by the action φ : G × M → M . For any Y ∈ G, define the vector field pushforward of fu ∈ X(M ) by Y by
φ∗(Y, fu) := DφY ◦ fu ◦ φY −1 ∈ X(M ).
The system f is said to be equivariant if there exists an input group action ψ : G × L → L such that
φ∗(Y, fu) = fψ(Y,u)
for all Y ∈ G, u ∈ L. In other words, Figure 1 commutes. Note that this also implies that if f is equivariant [Mahony et al., 2022], then for all Q ∈ M , Y ∈ G, we have
DφY [fu(Q)] = DφY [fu(φY −1 (φY (Q)))]
= φ∗(Y, fu)(φY (Q))
= fψ(Y,u)(φY (Q)). (4)
Definition 2.1. A Morse function [Shastri, 2011] is a function Υ : M → R for which every critical point p ∈ M is regular: that is, for any point p such that DΥ(p) = 0 and any chart φ : U → Rn (with p ∈ U ⊂ M and φ(p) = 0), then the Hessian
∂2(Υ ◦ φ−1)
∂xi∂xj (0)i,j=1,...,n
is non-degenerate. A navigation function [Koditschek, 1989] is a proper Morse function with a unique local minimum. In this way, these functions serve as suitable coordinate-free definitions of potentials.
3 Lie-Poisson Systems
Let G be a matrix Lie group and let g∗ ∼= T∗
I G be the dual space of the Lie algebra g. Recalling (2), consider a matrix ODE of the form
Q ̇
P ̇ = QV
ad∗
V P + τ , (5)
3

Equivariant Tracking Control for Fully Actuated Mechanical Systems on Matrix Lie Groups PREPRINT
where (Q, P ) ∈ G × g∗, V ∈ g, and τ ∈ g∗.
Let h : g∗ × R → R be a (possibly time-varying) function defined on the dual of the Lie algebra. We will term this function the Hamiltonian [Marsden and Ratiu, 1994]. Recalling (3) and identifying
V := δh
δP ∈ g, (6)
then (Q, P ) correspond to the configuration and momentum states of a mechanical system and τ ∈ g∗ corresponds to an exogenous force. In the mechanics literature, the uncontrolled dynamics P ̇ = ad∗
V P (written as P ̇ = ad∗
δh δP
P ) are referred
to as the Lie-Poisson equation [Marsden and Ratiu, 1994] and the kinematics Q ̇ = QV (written as Q ̇ = Q δh
δP ) are re
ferred to as the reconstruction equation [Cendra et al., 2003]. If one defines a left-invariant Hamiltonian H : T∗G → R by H(Q, μ) := h(L∗
Qμ) on the cotangent bundle, then these equations are equivalent to Hamilton’s equations on T∗G (i.e. Q ̇ = ∂H(Q,μ)
∂μ , μ ̇ = − ∂H(Q,μ)
∂Q ) [Cendra et al., 2003]. In this paper, we emphasise that the correspondence V := δh
δP has the form of an additional constraint applied to a more general system (5). In §4 we will study the geometry of the generalised Lie-Poisson systems (5) without the constraint (6).
Example 3.1 (Dynamics on SO(3)). The Lie group SO(3) is the matrix Lie group defined by
SO(3) = R ∈ R3×3 : R⊤R = I, det(R) = 1 .
The associated Lie algebra so(3) is the set of real 3 × 3 skew-symmetric matrices
so(3) = U ∈ R3×3 : U + U ⊤ = 0 .
Define the vector space isomorphism (·)× : R3 → so(3) by
x1 x2 x3
!×
=
0 −x3 x2 x3 0 −x1 −x2 x1 0
!
,
and write the inverse map as (·)∨ : so(3) → R3. The Lie bracket can be computed
[u×, v×] = u×v× − v×u× = (u × v)×,
and so imbuing R3 with the bracket [u, v] = u × v makes it isomorphic to so(3). The dual space so∗(3) may also be identified with R3 (and so(3)) via the dot product on R3: if P ∈ so∗(3), then it is identified with π ∈ R3 by ⟨P, u×⟩ = π⊤u. Thus, as an operator on R3, adu = u× and ad∗
u = (u×)⊤ = −u×. Additionally, AdR ω× = (Rω)× ∼= Rω, so ⟨Ad∗
R P, ω×⟩ =
⟨P, AdR ω×⟩ ∼= π⊤Rω = (R⊤π)⊤ω, and Ad∗
R P ∼= R⊤π.
With these identifications, the Lie-Poisson equations on SO(3) × R3 become
R ̇ = Rω× (7a)
π ̇ = −ω × π + τ, (7b)
where ω := δh
δπ , for some h : R3 → R. For a rigid-body, the kinetic energy Hamiltonian is given by h(π) = 1
2 π⊤I−1π [Marsden
and Ratiu, 1994], where I is the distance-weighted volume integral of the mass-density, I = R
B ρ(x)(∥x∥2I − xx⊤)d3x, and
assumed to be non-degenerate. Then ω = δh
δπ = I−1[π], π = Iω, and the dynamics (7) become the well-known (controlled)
Euler equations for a rigid body [Marsden and Ratiu, 1994]:
R ̇ = Rω× (8a)
Iω ̇ = −ω × Iω + τ. (8b)
3.1 Energy shaping control of systems with invariant kinetic energy Hamiltonians
In this work, we are interested in the stabilisation and tracking control for a system (5). We consider systems with kinetic energy Hamiltonian of the form
h(P, t) = 1
2 ⟨P, I−1
t [P ]⟩, (9)
where It : g × g → R is a time-parameterised, nondegenerate, positive definite (0, 2) inertia tensor. Here I−1
t is the inverse
of the intrinsic mapping1 It : g → g∗ induced by It. In this case, the velocity is given by V = δh
δP = I−1
t [P ] ∈ g. In general,
because of the self-adjoint symmetry of I, we may write down It = St∗I0St for some invertible St : g → g with S0 = I. To
1Any (0, 2)-tensor T induces a map T ♭ : V → V∗, defined by ⟨T ♭[x], y⟩ := T (x, y). The inverse of this map is often denote T ♯ = (T ♭)−1. To minimize notational complexity, we will simply write It : g → g∗ and I−1
t : g∗ → g.
4

Equivariant Tracking Control for Fully Actuated Mechanical Systems on Matrix Lie Groups PREPRINT
see this, choose a basis for g and then consider It and I0 as matrices and set S(t) = I−1/2
0 I1/2
t . Since I ̇t = S ̇t∗I0St + St∗I0S ̇t, straightforward computation yields
 ̇I−1
t = −I−1
t S ̇ ∗
t S−∗
t − S−1
t S ̇tI−1
t,
where S−∗ = (S∗)−1. Thus, the explicit time derivative of h can be computed as
1
2 ⟨P, ̇I−1
t [P ]⟩
=1
2 ⟨P, (−I−1
t S ̇ ∗
t S−∗
t − S−1
t S ̇tI−1
t ) [P ]⟩
= −1
2 ⟨P, I−1
t S ̇ ∗
t S−∗
t [P ]⟩ − 1
2 ⟨P, S−1
t S ̇tI−1
t [P ]⟩
= −1
2 ⟨S ̇ ∗
t S−∗
t [P ], I−1
t [P ]⟩ − 1
2 ⟨P, S−1
t S ̇tI−1
t [P ]⟩
= −1
2 ⟨S ̇ ∗
t S−∗
t [P ], I−1
t [P ]⟩ − 1
2 ⟨S ̇ ∗
t S−∗
t P, I−1
t [P ]⟩
= −⟨S ̇ ∗
t S−∗
t [P ], I−1
t [P ]⟩, (10)
where we have used the fact that ⟨U, I−1
t P ⟩ = ⟨P, I−1
t U ⟩ due to the self-adjoint symmetry of I−1.
It is well-known that if h has no explicit time-dependence, then the Lie-Poisson system (5) can be stabilised to an arbitrary configuration Q0 by energy shaping with a potential Υ and damping injection by some dissipative Rayleigh tensor R [Bullo and Lewis, 2005, Koditschek, 1989, Maithripala et al., 2006]. The case where h has an explicit time-dependence is handled similarly.
Theorem 3.2. Consider the Lie-Poisson dynamics (5) corresponding to a Hamiltonian h of the form h = 1
2 ⟨P, I−1
t [P ]⟩ =
1
2 ⟨P, S−1
t I−1
0 S−∗[P ]⟩, where It : g × g → R+ is a nondegenerate positive-definite family of bilinear forms that is uniformly
bounded above and below, with I ̇t bounded. Let Υ : G → R+ be a navigation function with minimum Q0 ∈ G (Def. 2.1) and let R be a positive-definite (0, 2) tensor. Define
τff := S ̇ ∗
t S−∗
t [P ], (11a) τpd := −R [V ] − L∗
QdΥ(Q). (11b)
Then, the closed-loop system (5) with control τ = τff + τpd is locally asymptotically stable to (Q0, 0) ∈ G × g∗.
Proof. Define the Lyapunov function
L (Q, P, t) = h(P, t) + Υ(Q),
which is positive definite and has a minimum at (Q, P ) = (Q0, 0).
The time derivative L ̇ is given by
L ̇ =  ̇h(P, t) + Υ ̇ (Q)
= dh[P ̇ ] + ∂h
∂t +
D
dΥ(Q), Q ̇
E
= P ̇, δh
δP + ∂h
∂t +
D
dΥ(Q), Q ̇
E
= ⟨τ, V ⟩ + ∂h
∂t + ⟨dΥ(Q), QV ⟩ ,
where we have used the fact that ⟨V, ad∗
V P ⟩ = ⟨[V, V ], P ⟩ = 0. Substituting in the control law τ = τff + τpd, the closed-loop P dynamics become
P ̇ = ad∗
V P − R [V ] − L∗
QdΥ(Q) + S ̇ ∗
t S−∗
t [P ]. (12)
5

Equivariant Tracking Control for Fully Actuated Mechanical Systems on Matrix Lie Groups PREPRINT
Computing the time-derviative of L along trajectories of the system, one obtains
L ̇ = ⟨τpd, V ⟩ + ⟨τff , V ⟩
+ ∂h
∂t + ⟨dΥ(Q), QV ⟩
= −R (V ) − L∗
QdΥ(Q), V
DS ̇ ∗
t S−∗
t [P ], V
E
+ ∂h
∂t + ⟨dΥ(Q), QV ⟩
= −R (V, V ) +
DS ̇ ∗
t S−∗
t [P ], V
E
+ ∂h
∂t − L∗
QdΥ(Q), V + ⟨dΥ(Q), LQV ⟩
= −R (V, V ) ,
which is negative semi-definite. Since Υ is a Morse function and Q0 is a local minimum, there exists a compact set D ⊂ G containing Q0 and an upper bound B > 0 such that 0 ≤ Υ(Q) ≤ B for all Q ∈ D . The bilinear form It is uniformly bounded above and below in time, so I−1
t is also uniformly bounded above and below in time, and there exist constants C1, C2 > 0 such that
C1∥P ∥2 ≤ h(P, t) ≤ C2∥P ∥2
for all t ≥ 0. Then C1∥P ∥2 ≤ L (Q, P, t) ≤ B + C2∥P ∥2 for all (Q, P ) ∈ D × g∗ and t ≥ 0. Then, by the Lasalle-Yoshizawa
theorem [Khalil and Grizzle, 2002, Theorem 8.4], there exists a compact set B ⊂ D × g∗ such that if (Q0, P0) ∈ B , then the trajectory (Q(t), P (t)) is bounded (and thus exists for all time) and satisfies R (V, V ) → 0. Thus, V → 0 and because V = I−1
t [P ] and It is nondegenerate, it also holds that P → 0. The map P ̇ (12) is continuous on the compact set B and so
by the Heine-Cantor theorem [Rudin, 1976, Theorem 4.19], P ̇ is uniformly continuous along trajectories of the system. Thus, by Barbalat’s lemma [Khalil and Grizzle, 2002, Lemma 8.2], P (t) → 0 implies that P ̇ (t) → 0. Examining the closed-loop equations (12), this is only possible if −L∗
QdΥ(Q) → 0, which ensures that that Q → Q0.
Remark 3.3. Due to the global topological structure of the Lie groups and the properties of the navigation functions used, the basin of attraction is typically very large. For example, on SO(3) the stability is almost global [Chaturvedi et al., 2011].
Example 3.4 (Stabilising control on SO(3)).
Consider dynamics on SO(3) as introduced in Example 3.1. A navigation function with minimum I ∈ SO(3) is given by [Koditschek, 1989]
ΥSO(3)(R(θ, n)) = tr(K(I − R(θ, n)))
= −(1 − cos θ) tr(K(n×)2)
where K ∈ R3×3 is a diagonal symmetric matrix whose eigenvalues satisfy λi + λj > 0 for i ̸= j ∈ {1, 2, 3} [Bullo and Lewis, 2005]. The eigenvalue condition ensures the Hessian of Υ is positive definite on so(3) ≡ TI SO(3). Note that if K = I then ΥSO(3)(R(θ, n)) = 1 − cos(θ). Define a Rayleigh dissipation by R (v, w) := v⊤Kdw, where Kd ∈ R3×3 is positive-definite. To generate the control term one must compute dΥSO(3) ∈ T∗SO(3). For arbitrary u× ∈ so(3), one has
⟨L∗
RdΥSO(3), u×⟩ = ⟨dΥSO(3), Ru×⟩
= − tr(KpRu×)
= − tr 1
2 (KpR − R⊤K⊤
p )u×
= u⊤ KpR − R⊤K⊤
p
∨ , (13)
and so g∗ ∋ L∗
RdΥSO(3) ∼= KpR − R⊤Kp⊤
∨ ∈ R3. Note that for the standard kinetic energy Hamiltonian, the inertia I is
constant for and S ̇ = 0. It follows that τff = 0 (11a). Define
τ = − KpR − R⊤K⊤
p
∨ − Kdω.
This corresponds to the control proposed in Theorem 3.2 and it follows that the system is stabilised to the identity I locally. The proposed control corresponds to the standard control from the literature [Chaturvedi et al., 2011] and the system is known to be almost globally asymptotically stable and locally exponentially stable.
4 Extended Lie-Poisson Systems
We are interested in extending the stabilisation results of §3.1 to the tracking of smooth trajectories. To this end we will study a novel form of the Lie-Poisson equation that we term the extended Lie-Poisson equation and show that these equations are
6

Equivariant Tracking Control for Fully Actuated Mechanical Systems on Matrix Lie Groups PREPRINT
left invariant with respect to a group action on the cotangent bundle. This will lead to structure that we exploit to define an equivariant error and solve the tracking problem.
The extended Lie-Poisson system is defined to be the same ordinary differential equation (5) without the identification (6). That is, where the velocity V is treated as a free input decoupled from the momentum P . The resulting system no longer corresponds directly to physical dynamics, however, as we see below it admits a natural symmetry. The total input space is given by g × g∗ where (V, τ ) ∈ g × g∗ are free inputs. The behaviour of the extended Lie-Poisson system contains the Lie-Poisson dyna-
mics as a sub-behaviour of the system, obtained by assigning V = δh
δP .
Define a general input U := (V, τ ) ∈ g × g∗, a state X := (Q, P ) ∈ G × g∗, and a system function f : g × g∗ → X(G × g∗),
fU (X) := f (U, X) := (QV, ad∗
V P + τ ). (14)
Then the extended system can be written in compact notation as X ̇ = fU (X).
The state-space, G × g∗, of the extended Lie-Poisson system can be provided with a semi-direct product structure that makes
it into a Lie group G⋉
g∗ = G ⋉ g∗ in its own right [Holm et al., 1998, Engø-Monsen, 2003, Jayaraman et al., 2020]. Group multiplication is given by
(Q1, P1)(Q2, P2) = (Q1Q2, Ad∗
Q2 P1 + P2), (15)
for Q1, Q2 ∈ G and P1, P2 ∈ g∗. The identity is given by I = (I, 0) and the inverse operation is given by (Q, P )−1 = (Q−1, − Ad∗
Q−1 P ). Note that while G⋉
g∗ is a semi-direct product of matrix Lie groups, it is not a matrix Lie group itself as written, although a matrix representation of the action could be obtained by selecting a basis of g. The group
multiplication can be motivated by noting that it is the combination of the coadjoint action Ad∗
Q (which acts canonically on g∗) and a momentum translation. The uncontrolled dynamics of the Lie-Poisson system are known to be invariant on orbits of the coadjoint action, a property that is related to the left-invariant structure of the extended Lie-Poisson system that we demonstrate below.
The Lie algebra of G⋉
g∗ is given by the vector space
g⋉
g∗ := TI (G × g∗) ∼= g ⋉ g∗,
with Lie bracket (Appendix A)
[(V1, P1), (V2, P2)] = ([V1, V2], − ad∗
V1 P2 + ad∗
V2 P1).
The adjoint map Ad : G⋉
g∗ × g⋉
g∗ → g⋉
g∗ is given by (Appendix A)
AdX U = DRX−1 [DLX [U ]]
= (AdQ V, Ad∗
Q−1 (ad∗
V P + τ )).
Theorem 4.1. The extended Lie-Poisson (5) equations are left-invariant in the semi-direct group structure G ⋉ g∗. That is, recalling (14),
fU (X) = DLX [U ],
for X ∈ G⋉
g∗ , where U := (V, τ ) ∈ g⋉
g∗ lies in the algebra of G⋉
g∗ .
Proof. From the definition of U and equation (25), we have
DLX [U ] = (QV, ad∗
V P + τ ). (16)
The result follows by comparing (14) and (16).
Let Y ∈ G⋉
g∗ be arbitrary. Then (cf. Figure 2)
DRY fu(X) = DRY DLX U = DLX DLY DLY −1 DRY U
= DLXY AdY −1 U
= fAdY −1 U (RY X).
In particular, the system (5) is equivariant (4) with respect to the right-translation R (state space φ) and adjoint Ad (input ψ)
group actions. Note that the Adjoint operator AdY −1 U here is taken on G⋉
g∗ since Y ∈ G⋉
g∗ .
7

Equivariant Tracking Control for Fully Actuated Mechanical Systems on Matrix Lie Groups PREPRINT
g⋉
g∗ X(G⋉
g∗ )
g⋉
g∗ X(G⋉
g∗ )
f
AdY −1 R∗(Y,·)
f
Figure 2: Equivariance of extended Lie-Poisson systems.
5 Error Systems
Let G ⊂ Rd×d be a m-dimensional matrix Lie group and g∗ ⊂ Rd×d be the associated Lie coalgebra. Let h : g∗ → R be a Hamiltonian. Consider a desired trajectory (Qd, Pd, Vd, τd) : R → G × g∗ that satisfies of the Lie-Poisson system (5) with the constraint (6). Let X(t) = (Q, P ) be a system trajectory evolving according to the extended Lie-Poisson equations (5). Specifically, we do not impose that (6) holds for the trajectory X(t) in the following analysis, although the constraint will be applied du-
ring the control design undertaken later. We wish to construct an error between X(t) and Xd(t). In prior work, the most commonly used error is the left-invariant error [Bullo and Murray, 1995, Lee et al., 2010, Chaturvedi et al., 2011]
Eprior = (Q−1
d Q, V − AdQ−1Qd Vd),
that is derived from the left-trivialised tangent group structure on G × g [Bullo and Murray, 1995]. Note that here the Adjoint
used is defined on the group G not on G⋉
g∗ . The error system dynamics for Eprior are not an extended Lie-Poisson system. They are certainly not a Lie-Poisson system, and there is no underlying Hamiltonian that generates these dynamics. The most common approach to control [Bullo and Murray, 1999] uses feedforward compensation to impose a certain form of passivity by cancelling non-linearities and then designs a stabilizing control for the compensated system.
In this document, we pose the error directly on G ⋉ g∗ (acting on the state (Q, P ) rather than (Q, V )) and use the group multiplication (15) to generate the error. In addition, we use a right-invariant Lie group error motivated by recent work in equivariant observer design [Mahony et al., 2022, van Goor et al., 2022]
(QE, PE) := E = XX−1
d = φ(X−1
d ,X)
= (QQ−1
d , Ad∗
Q−1
d
(P − Pd)). (17)
The motivation for this choice is that left-invariant systems are right-equivariant and the right-invariant error is synchronous [van Goor and Mahony, 2025].
Lemma 5.1. Let X(t) = (Q(t), P (t)) and Xd(t) = (Qd(t), Pd(t)) be the system and desired trajectories satisfying (5) for
inputs U = (V, τ ), Ud = (Vd, τd) ∈ g × g∗. Define E = (QE, PE) to be the control error (17). Then the error dynamics have the form of an extended Lie-Poisson system
Q ̇ E = QEVE, P ̇E = ad∗
VE PE + τE , (18)
where
UE = (VE, τE) := AdXd (V − Vd, τ − τd). (19)
Proof. Compute
E ̇ = DRX−1
d
X ̇ − DLX DLX−1
d
DRX −1
d
X ̇ d
= DRX−1
d
fU (X) − DLX DLX−1
d
DRX −1
d
fUd (Xd)
= fAdXd U (RX−1
d
X)
− DLXX−1
d
fAdXd Ud (RX−1
d
Xd)
= fAdXd U (E) − DLE fAdXd Ud (I)
= fAdXd U (E) − fAdXd Ud (E)
= fAdXd (U−Ud)(E)
= fUE (XE ).
8

Equivariant Tracking Control for Fully Actuated Mechanical Systems on Matrix Lie Groups PREPRINT
6 Tracking Control for Lie-Poisson Systems
Lemma 5.1 shows that the error dynamics (18) are associated with an extended Lie-Poisson system. To show that this system is in fact Lie-Poisson then we must find a Hamiltonian hE(PE, t) such that VE = δhE
δPE . If we reinstate the constraint V = δh
δP on the desired trajectory (that is, that we assume the dynamics of the original system are Lie-Poisson), then this is possible. This construction will lead to the definition of an “error kinetic energy” that forms the key element underlying the proposed tracking control design.
Lemma 6.1. Let (Qd(t), Pd(t)) : R → G ⋉ g∗ be a solution of (5) for a kinetic energy Hamiltonian h = 1
2 ⟨P, I−1P ⟩, with
input τd : R → g∗. Define a time-varying tensor
 ̄It(V, W ) := I(AdQ−1
d (t) V, AdQ−1
d (t) W ).
Define hE : g∗ → R by
hE(PE) := 1
2 ⟨PE, I ̄−1
t [PE]⟩
to be the kinetic energy Hamiltonian defined by I ̄t. Assume both V := δh(P )
δP and Vd := δh(Pd)
δPd . Then the error system dynamics
(QE, PE) (18) are Lie-Poisson dynamics induced by hE with constraint VE = δhE
δPE and free input τE.
Proof. From Lemma 5.1 the error dynamics are extended Lie-Poisson, so it remains to show that VE = δhE
δPE and verify τE
is free. The error velocity VE is given by AdQd(t)(V − Vd), the first component of (19). Writing V := δh(P )
δP = I−1[P ],
Vd := I−1[Pd] = δh(Pd)
δPd then VE = AdQd(t) I−1[P − Pd]. From (17), we may write P − Pd = Ad∗
Qd PE, and so VE =
AdQd(t) I−1[Ad∗
Qd(t) PE ] = I ̄−1[PE ]. Thus, h(PE ) = 1
2 ⟨PE , VE ⟩ and VE = δhE
δPE . For arbitrary τE one sets
τ := τd + Adτ
X −1
d
(VE, τE), (20)
where Adτ
Xd denotes the second (g∗) component of AdXd , VE is defined as in (19). By choosing τ in this manner, then any
desired τE can be assigned, and this completes the proof.
Note that the error inertia corresponds to a time-varying linear map I ̄t : g → g∗ that can be written
 ̄It := Ad∗
Q−1
d (t) ◦I ◦ AdQ−1
d (t) .
This is explicitly of the form St∗ISt, with St = AdQ−1
d (t). Then d
dt Qd(t) = Qd(t)ud(t) for some ud(t) : R → g, and one can compute (10)
S ̇t = − adud(t) ◦ AdQ−1
d (t) = − AdQ−1
d (t) ◦ adAdQd(t) ud(t) . (21)
In the following Theorem we will consider tracking control for a Lie-Poisson system. Conceptually, we construct the error between true and desired systems exploiting the geometry of the extended Lie-Poisson system, and then restrict to only those trajectories where the velocity constraint (6) holds.
Theorem 6.2. Consider true and desired trajectories (Q, V ), (Qd, Pd) : R → G × g∗ that satisfy the Lie-Poisson system
(5) with the constraint (6) for a Hamiltonian h : g∗ → R with inputs τ and τd respectively. Assume Qd(t) is bounded, and
AdQd(t) and AdQ−1
d (t) are positively bounded above and below (see Remark 6.3). Define the error (17). Let Υ : G → R+ be
a navigation function with global minimum (I, 0) ∈ G⋉
g∗ and let R be a positive-definite (0, 2) tensor. The closed-loop input τ is defined by (20) where τE := τEff + τEpd with
τEff := − ad∗
AdQd Ud PE . (22a)
τEpd := −R [VE ] − L∗
QE dΥ(QE). (22b)
Then the closed-loop error system (18) is locally asymptotically stable to (I, 0) and Q(t) → Qd(t) and P (t) → Pd(t).
Proof. By Lemma 6.1, the error system (17) is a Lie-Poisson system. Recalling the definition of τ (20) then in the error system (18) one has τE = τEff + τEpd .
Using (21), one computes
S ̇ ∗S−∗
t = (− AdQ−1
d (t) ◦ adAdQd(t) ud(t))∗(AdQ−1
d (t))−∗
= − ad∗
AdQd(t) ud(t) Ad∗
Q−1
d (t) Ad∗
Qd (t)
= − ad∗
AdQd(t) ud(t) .
9

Equivariant Tracking Control for Fully Actuated Mechanical Systems on Matrix Lie Groups PREPRINT
Comparing (11) and (22), we note that these control laws are identical up to the variable substitutions Q ↔ QE, P ↔ PE, V ↔ VE and τ ↔ τE, with S ̇ ∗S−∗
t taking the explicit form given above. The term I ̇t is uniformly bounded if AdQd(t) and Ud(t) are uniformly bounded. Thus, by Theorem 3.2, QE → I and PE → 0. If AdQ−1
d (t) is uniformly bounded below then
PE → 0 implies P → Pd, and if Qd(t) is bounded then QE → I implies Q → Qd.
Remark 6.3. For compact Lie groups or Lie groups that are the semidirect product of a compact Lie group with a finitedimensional vector space (for example, SO(2), SO(3), SE(2), SE(3), SE2(3), etc), it suffices for Qd(t) to be bounded. Then lower and upper boundedness of AdQd(t) and AdQ−1
d (t) are guaranteed by the compact component of the Lie group.
7 Attitude control on SO(3)
In this example we consider tracking control for the SO(3) dynamics introduced in Examples 3.1 and 3.4. We translate the abstract formula presented in §3 and §4 into concrete algebraic formula written in matrix/vector coordinates. This both provides an example of how to apply the theory presented in the paper, and also provides a comparison with prior work.
Recall the notation introduced in Example 3.1. The semi-direct group product on SO(3) ⋉ R3 ∼= SO(3) ⋉ so∗(3) can be written
(R1, π1)(R2, π2) = (R1R2, R⊤
2 π1 + π2).
The inverse element is (R, π)−1 = (R⊤, −Rπ). Right multiplication on SO(3) ⋉ R3 (the φ action) is given by
R(RY ,πY )(R, π) = (R, π)(RY , πY ) = (RRY , R⊤
Y π + πY ).
Finally, the adjoint map (the ψ action) Ad : (SO(3) ⋉ R3) × (R3 × R3) → R3 × R3 is given by
Ad(RY ,πY )(ω, τ ) = (RY ω, RY (−ω × πY ) + RY τ ).
where R3 × R3 ∼= so(3) × so∗(3).
The error state (17) and inputs (19) are given by
(RE , πE ) = R(R⊤
d ,−Rdπd)(R, π) = (RR⊤
d , Rd(π − πd))
(ωE , τE ) = Ad(Rd,πd)(ω − ωd, τ − τd)
= (Rd(ω − ωd),
− Rd(ω − ωd) × πd + Rd(τ − τd)).
From Theorem 6.2 the tracking control law for the error input is given by
τE = − ad∗
AdRd ωd πE − L∗
RE dΥ(RE) − R [ωE]
= (Rdωd) × πE − (KpRE − R⊤
EK⊤
p )∨ − KdωE .
Define ω ̃ = ω − ωd, τ ̃ = τ − τd. Unwinding the definitions of RE, πE, ωE and τE, one has
Rdτ ̃ = Rdω ̃ × πd − KdRdω ̃ − (KpRE − R⊤
EK⊤
p )∨
+ (Rdωd) × πE.
Then the closed loop input τ is recovered using (20):
τ EqT = τd + ω ̃ × Iωd + ωd × R⊤
d πE
− R⊤
d KdRdω ̃ − R⊤
d (KpRE − R⊤
EK⊤
p )∨
= τd + ω ̃ × Iωd + ωd × Iω ̃
− R⊤
d KdRdω ̃ − R⊤
d (KpRE − R⊤
EK⊤
p )∨. (23)
We will refer to this as the Equivariant Tracking (EqT) control.
To provide context we compare (23) with the right-invariant error form of the tracking controller drawn from Bullo et al. [Bullo and Lewis, 2005]. We will refer to the Bullo et al. controller as a Geometric Tracking (GT) tracking control. In [Bullo and Lewis, 2005], the velocity tracking error is defined by
K(vE) = 1
2 GR(t)(vE , vE ),
where the kinetic energy metric is defined as GR := DL∗
RIDLR for I the body-fixed inertia introduced in Example 3.1, and
vE = R(ω× − ω×
d ) ∈ TRSO(3). Note that in [Bullo and Lewis, 2005], K(vE) is used purely as a velocity error term in the appropriate Lyapunov function and there is no interpretation as kinetic energy of any error system.
10

Equivariant Tracking Control for Fully Actuated Mechanical Systems on Matrix Lie Groups PREPRINT
Recalling Example 3.4, we use the navigation function Υ(RE) as the configuration error function and note that it satisfies [Bullo and Lewis, 2005, Proposition 11.31]. Applying the formulae in [Bullo and Lewis, 2005] one obtains a control
τ GT = −Kdω ̃ − R⊤
d (KpRE − R⊤
EK⊤
p )∨ + I(∇ωωd + ω ̇ d),
where ∇ωωd is the Levi-Civita connection corresponding to the kinetic energy metric. The feedforward terms ∇ωωd + ω ̇ d arrive naturally by taking the covariant derivative of vE along R ̇ and left-trivialising. For SO(3) with inertia I one has
∇ωωd := 1
2 ω × ωd + 1
2 I−1[ωd × Iω] + 1
2 I−1[ω × Iωd].
Expanding ∇ωωd and ω ̇ d, the GT control can be written
τ GT = τd + 1
2 I(ω × ωd) + 1
2 ω × Iωd + 1
2 ωd × Iω
− ωd × Iωd − Kdω ̃ − R⊤
d (KpRE − R⊤
EK⊤
p )∨. (24)
Consider the EqT (23) and GT (24) control laws in comparison to each other. The proportional feedback term −R⊤
d (KpRE −
R⊤
EKp⊤)∨ is the same in both control designs. This should be expected since the same navigation function is used and this term depends only on the geometry of the group SO(3) and not on the cotangent or tangent bundle structure. The damping term, −R⊤
d KdRdω ̃, in the EqT compares to −Kdω ̃ term in the GT control. This difference can be explained by noting that the damping gain is defined in spatial coordinates for the EqT, and in body coordinates for the GT. For a homogeneous gain matrix Kd = κdI3 then there is no difference in the case of SO(3).
The feedforward terms vary from each other significantly and warrant a more detailed discussion. The feedforward terms of the GT controller appear as a consequence of the covariant derivative of ωd in the direction of ω, while the feedforward terms in the EqT come from the time-varying inertia of the error system. By inspection the feedforward terms for the EqT (23) and GT (24) controls are
τ EqT
ff := τd + ω ̃ × Iωd + ωd × Iω ̃
τ GT
ff := τd + 1
2 ω ̃ × Iωd + 1
2 ωd × Iω ̃ + 1
2 I(ω × ωd).
In both the EqT and GT control, the Lyapunov function depends on the control through a left trivialised power term ⟨ω ̃, τ ̃⟩ = ω ̃⊤τ ̃. Computing this power term for the EqT and GT separately yields
ω ̃⊤(τ GT
ff − τd)
= ω ̃⊤ 1
2 ω ̃ × Iωd + 1
2 ωd × Iω ̃ + 1
2 I(ω × ωd)
=1
2 ω ̃⊤(ωd × Iω ̃) + 1
2 (Iω ̃)⊤(ω × ωd)
=1
2 (Iω ̃)⊤(ω ̃ × ωd) + 1
2 (Iω ̃)⊤(ω × ωd)
= (Iω ̃)⊤(ω × ωd)
and
ω ̃⊤(τ EqT
ff − τd) = ω ̃⊤ (ω ̃ × Iωd + ωd × Iω ̃)
= ω ̃⊤(ωd × Iω ̃)
= (Iω ̃)⊤(ω ̃ × ωd)
= (Iω ̃)⊤(ω × ωd).
It follows that the feedforward terms for the EqT and GT controls correspond to the same instantaneous change in the the Lyapunov function. Although instantaneously equivalent, the different passive gyroscopic forces in the feedforward terms do effect the trajectory of the system and lead to global differences in the convergence. They also lead to significant differences in the magnitude of control action required.
Before discussing the difference between τ EqT and τ GT in more detail, there are two alternative controls to τ EqT that are suggested by the analysis undertaken above. Firstly, the gyroscopic terms could be removed entirely from the control, since they do not correspond to instantaneous change in energy of the error system:
τ nog = τd + ωd × Iω ̃
− R⊤
d KdRdω ̃ − R⊤
d (KpRE − R⊤
EK⊤
p )∨.
11

Equivariant Tracking Control for Fully Actuated Mechanical Systems on Matrix Lie Groups PREPRINT
Secondly, in showing the correspondence between τ GT and τ EqT we proved that ⟨ω ̃, ωd × Iω ̃⟩ = ⟨ω ̃, I(ω × ωd)⟩. This suggests that the control
τ asym = τd + ω ̃ × Iωd + 1
2 ωd × Iω ̃ + 1
2 I(ω × ωd)
− R⊤
d KdRdω ̃ − R⊤
d (KpRE − R⊤
EK⊤
p )∨
is of interest to consider. This correspondence is associated with the symmetrisation of the inertia (10) and can be applied to any Lie-Poisson system leading to a general control of the form τ asym.
All four of these controls are stabilising and are compared by Monte Carlo simulation in Figure 3. The trajectory to be the tracked is the sinuoidal trajectory defined by Rd(0) = I, ωd(0) = 0, τd = (cos(t), sin(t), cos(t) sin(t)). For each iteration, the initial conditions for the actual system are perturbed to R(0) = Rd(0)R(θ, φ, ψ), where the Euler angles θ, φ, ψ are sampled uniformly from the interval [−π, π]. The initial system angular velocity is perturbed by ω(0) = ωd(0) + ωp, where ωp is sa-
mpled from a normal distribution of mean 0 and standard deviation 1.0 in all directions. The moment of inertia is chosen to be that of a model fixed-wing, which has light roll-yaw coupling [Burston et al., 2014]
I=
0.824 0 0.12 0 1.135 0 0.12 0 1.759
!
.
The proportional gain is set to Kp = I3 and the Rayleigh dissipation term Kd = 1
2 I3 is chosen to be homogeneous, removing
any difference due to damping. The differences in the trajectories are purely due to the different choices of feedfoward controls. Clearly, while the term ω ̃ × Iωd is gyroscopic, it significantly effects the input magnitude required. The EqT and GT controls appear to be superior to the two approximations discussed as variations. It appears that the EqT control requires less control action for large error (the first 5 seconds of the response) but leads to slightly slower attitude tracking than the-
 GT control. Beyond these fairly general observations, the authors do not have any further insight and we make no claim of the superiority of either control in practice. We note furthermore, that these insights are based on a single simple (albeit a Monte-Carlo simulation) example and care should be taken to read too much into the results.
8 Conclusion
In this paper, we have addressed the problem of trajectory tracking for general mechanical systems on Lie groups. To do this, we first addressed the stabilisation problem for a class of systems with time-dependent inertias. Then, we extended the natural symmetry of the configuration space to a semi-direct product symmetry on the phase space G×g∗. We have shown that the LiePoisson dynamics are equivariant with respect to this symmetry, leading to a natural error construction for trajectory tracking-
. Equivariance of the dynamics implies that the error system is itself a Lie-Poisson system and thus the tracking problem can be reduced to the stabilisation problem. To verify the approach, we explored an example system on SO(3), giving explicit constructions and verifying the control approach in simulation.
Acknowledgement
This research was supported by the Australian Research Council through Discovery Grant DP210102607 “ Exploiting the Symmetry of Spatial Awareness for 21st Century Automation”.
References
Ramaprakash Bayadi and Ravi N. Banavar. Almost global attitude stabilization of a rigid body for both internal and external actuation schemes. European Journal of Control, 20(1):45–54, January 2014. ISSN 0947-3580. doi: 10.1016/j.ejcon.2013. 10.006.
Francesco Bullo and Andrew D. Lewis. Geometric Control of Mechanical Systems: Modeling, Analysis, and Design for Simple Mechanical Control Systems, volume 49 of Texts in Applied Mathematics. Springer, New York, NY, 2005. ISBN 978-14419-1968-7 978-1-4899-7276-7. doi: 10.1007/978-1-4899-7276-7.
Francesco Bullo and Richard M. Murray. Proportional derivative (PD) control on the Euclidean group. In European Control Conference 1995: Volume 2, volume 2, page 1091. European Control Association, 1995.
Francesco Bullo and Richard M. Murray. Tracking for fully actuated mechanical systems: A geometric framework. Automatica, 35(1):17–34, January 1999. ISSN 0005-1098. doi: 10.1016/S0005-1098(98)00119-8.
Martin Burston, Roberto Sabatini, Alessandro Gardi, and Reece Clothier. Reverse engineering of a fixed wing Unmanned Aircraft 6-DoF model based on laser scanner measurements. In 2014 IEEE Metrology for Aerospace (MetroAeroSpace), pages 144–149, May 2014. doi: 10.1109/MetroAeroSpace.2014.6865910.
Hernan Cendra, Jerrold Marsden, Sergey Pekarsky, and Tudor Ratiu. Variational Principles for Lie—Poisson and HamiltonPoincare ́ Equations. Moscow Mathematical Journal, 3, July 2003. doi: 10.17323/1609-4514-2003-3-3-833-867.
12

Equivariant Tracking Control for Fully Actuated Mechanical Systems on Matrix Lie Groups PREPRINT
0 5 10 15 20 t
0.0
0.5
1.0
1.5
2.0
‖I − R>
d (t)R(t)‖
0 5 10 15 20 t
0.0
0.5
1.0
1.5
‖Ω(t) − Ωd(t)‖
0 5 10 15 20 t
0.0
0.5
1.0
1.5
2.0
‖τ (t)‖
0 5 10 15 20 t
0
1
2
3
4
L(t)
τ EqT
τ GT
τ nog
τ asym
Figure 3: SO(3) tracking error averaged over 200 iterations.
Rama Seshan Chandrasekaran, Ravi N. Banavar, Arun D. Mahindrakar, and D. H. S. Maithripala. Geometric PID controller for stabilization of nonholonomic mechanical systems on Lie groups. Automatica, 165:111658, July 2024. ISSN 0005-1098. doi: 10.1016/j.automatica.2024.111658.
Nalin A. Chaturvedi, Amit K. Sanyal, and N. Harris McClamroch. Rigid-Body Attitude Control. IEEE Control Systems Magazine, 31(3):30–51, June 2011. ISSN 1941-000X. doi: 10.1109/MCS.2011.940459.
Kenth Engø-Monsen. Partitioned Runge–Kutta Methods in Lie-Group Setting. BIT, 43:21–39, January 2003. doi: 10.1023/A: 1023668015087.
Nuno Filipe, Marcus J. Holzinger, and Panagiotis Tsiotras. Pose-tracking controller for satellites with time-varying inertia. In AIAA/AAS Astrodynamics Specialist Conference. August 2014. doi: 10.2514/6.2014-4455.
K. Fujimoto, K. Sakurama, and T. Sugie. Trajectory tracking control of port-controlled Hamiltonian systems and its application to a magnetic levitation system. In Proceedings of the 40th IEEE Conference on Decision and Control (Cat. No.01CH37228), volume 4, pages 3388–3393 vol.4, December 2001. doi: 10.1109/CDC.2001.980360.
F. R. Gantmacher and L. M. Levin. Equations of Motion of a Rocket. Technical Report NACA-TM-1255, January 1950.
Yixiao Ge, Pieter van Goor, and Robert Mahony. Equivariant Filter Design for Discrete-time Systems. In 2022 IEEE 61st Conference on Decision and Control (CDC), pages 1243–1250, December 2022. doi: 10.1109/CDC51059.2022.9992342.
Wang Haitao, Dong Xinmin, Xue Jianping, Jiaolong Liu, and Wang Jian. Modeling and simulation of a time-varying inertia aircraft in aerial refueling. Chinese Journal of Aeronautics, 29, March 2016. doi: 10.1016/j.cja.2016.02.011.
Matthew Hampsey, Pieter van Goor, Tarek Hamel, and Robert Mahony. Exploiting different symmetries for trajectory tracking control with application to quadrotors. IFAC-PapersOnLine, 56(1):132–137, 2023a.
Matthew Hampsey, Pieter van Goor, and Robert Mahony. Tracking control on homogeneous spaces: The Equivariant Regulator (EqR). IFAC-PapersOnLine, 56(2):7462–7467, 2023b.
13

Equivariant Tracking Control for Fully Actuated Mechanical Systems on Matrix Lie Groups PREPRINT
Matthew Hampsey, Pieter van Goor, Ravi Banavar, and Robert Mahony. Exploiting Equivariance in the Design of Tracking Controllers for Euler-Poincare Systems on Matrix Lie Groups*. IFAC-PapersOnLine, 58(6):333–338, January 2024a. ISSN 2405-8963. doi: 10.1016/j.ifacol.2024.08.303.
Matthew Hampsey, Pieter van Goor, and Robert Mahony. Spatial group error and synchrony for tracking control of left-invariant kinematic systems on Lie groups (Accepted for Publication). In 2024 IEEE 63rd Conference on Decision and Control (CDC). IEEE, 2024b.
Darryl D Holm, Jerrold E Marsden, and Tudor S Ratiu. The Euler–Poincare ́ Equations and Semidirect Products with Applications to Continuum Theories. Advances in Mathematics, 137(1):1–81, July 1998. ISSN 0001-8708. doi: 10.1006/aima.1998.1721.
Amitesh S. Jayaraman, Domenico Campolo, and Gregory S. Chirikjian. Black-Scholes Theory and Diffusion Processes on the Cotangent Bundle of the Affine Group. Entropy, 22(4):455, April 2020. ISSN 1099-4300. doi: 10.3390/e22040455.
Hassan K. Khalil and Jessy W. Grizzle. Nonlinear Systems, volume 3. Prentice hall Upper Saddle River, NJ, 2002.
Daniel E. Koditschek. The application of total energy as a lyapunov function for mechanical control systems. Contemporary mathematics, 97:131, 1989.
Taeyoung Lee, Melvin Leok, and N. Harris McClamroch. Geometric tracking control of a quadrotor UAV on SE(3). In 49th IEEE Conference on Decision and Control (CDC), pages 5420–5425, December 2010. doi: 10.1109/CDC.2010.5717652.
Kevin M. Lynch and Frank C. Park. Modern Robotics. Cambridge University Press, May 2017. ISBN 978-1-107-15630-2.
Robert Mahony. A novel passivity-based trajectory tracking control for conservative mechanical systems. In 2019 IEEE 58th Conference on Decision and Control (CDC), pages 4259–4266. IEEE, 2019.
Robert Mahony, Tarek Hamel, and Jean-Michel Pflimlin. Nonlinear complementary filters on the special orthogonal group. IEEE Transactions on automatic control, 53(5):1203–1218, 2008.
Robert Mahony, Pieter van Goor, and Tarek Hamel. Observer Design for Nonlinear Systems with Equivariance. Annual Review of Control, Robotics, and Autonomous Systems, 5(1):221–252, May 2022. ISSN 2573-5144, 2573-5144. doi: 10.1146/ annurev-control-061520-010324.
D.H.S. Maithripala, J.M. Berg, and W.P. Dayawansa. Almost-global tracking of simple mechanical systems on a general class of Lie Groups. IEEE Transactions on Automatic Control, 51(2):216–225, February 2006. ISSN 1558-2523. doi: 10.1109/TAC.2005.862219.
B. R. Markiewicz. Analysis of the computed torque drive method and comparison with conventional position servo for a computer-controlled manipulator. Technical Report JPL-TM-33-601, March 1973.
J.E. Marsden and T.S. Ratiu. Introduction to Mechanics and Symmetry: A Basic Exposition of Classical Mechanical Systems. Texts in Applied Mathematics. Springer-Verlag New York, 1994.
Jerrold E. Marsden, Tudor Ratiu, and Alan Weinstein. Semidirect Products and Reduction in Mechanics. Transactions of the American Mathematical Society, 281(1):147–177, 1984. ISSN 0002-9947. doi: 10.2307/1999527.
G. Meyer. Design and global analysis of spacecraft attitude control systems. Technical Report A-3526, March 1971.
Richard M. Murray, Zexiang Li, S. Shankar Sastry, and S. Shankara Sastry. A Mathematical Introduction to Robotic Manipulation. CRC Press, March 1994. ISBN 978-0-8493-7981-9.
Romeo Ortega and Elo ́ısa Garc ́ıa-Canseco. Interconnection and damping assignment passivity-based control: A survey. European Journal of Control, 10(5):432–450, 2004. ISSN 0947-3580. doi: 10.3166/ejc.10.432-450.
Romeo Ortega, Arjan van der Schaft, Bernhard Maschke, and Gerardo Escobar. Interconnection and damping assignment passivity-based control of port-controlled Hamiltonian systems. Automatica, 38(4):585–596, April 2002. ISSN 0005-1098. doi: 10.1016/S0005-1098(01)00278-3.
Richard P. Paul. Robot Manipulators: Mathematics, Programming, and Control : The Computer Control of Robot Manipulators. Richard Paul, 1981. ISBN 978-0-262-16082-7.
W. Rudin. Principles of Mathematical Analysis. International Series in Pure and Applied Mathematics. McGraw-Hill, 1976. ISBN 978-0-07-085613-4.
A.R. Shastri. Elements of Differential Topology. CRC Press, 2011. ISBN 978-1-4398-3163-2.
Jean-Jacques E. Slotine and Weiping Li. Composite adaptive control of robot manipulators. Automatica, 25(4):509–519, 1989. ISSN 0005-1098. doi: 10.1016/0005-1098(89)90094-0.
Mark W. Spong, Seth Hutchinson, and M. Vidyasagar. Robot Modeling and Control. John Wiley & Sons, March 2020. ISBN 978-1-119-52399-4.
Jochen Trumpf, Robert Mahony, Tarek Hamel, and Christian Lageman. Analysis of Non-Linear Attitude Observers for TimeVarying Reference Measurements. IEEE Transactions on Automatic Control, 57(11):2789–2800, November 2012. ISSN 1558-2523. doi: 10.1109/TAC.2012.2195809.
14

Equivariant Tracking Control for Fully Actuated Mechanical Systems on Matrix Lie Groups PREPRINT
Pieter van Goor and Robert Mahony. Synchronous models and fundamental systems in observer design, 2025. arXiv 2505.19517.
Pieter van Goor, Tarek Hamel, and Robert Mahony. Equivariant Filter (EqF). IEEE Transactions on Automatic Control, pages 1–13, 2022. ISSN 1558-2523. doi: 10.1109/TAC.2022.3194094.
Jake Welde and Vijay Kumar. Almost Global Asymptotic Trajectory Tracking for Fully-Actuated Mechanical Systems on Homogeneous Riemannian Manifolds. IEEE Control Systems Letters, 2024.
A Semidirect structure
We compute some useful identities for the semidirect group G⋉
g∗ . Writing Y := (QY , PY ) ∈ G⋉
g∗ and U = (VU , PU ) ∈ g × g∗, one can also verify the following identities
DLY [U ] = d
dt |t=0(QY , PY )(exp(tVU ), tPU )
= (QY VU , ad∗
VU PY + PU ) (25)
DRY [U ] = d
dt |t=0(exp(tVU ), tPU )(QY , PY )
= (VU QY , Ad∗
QY PU ) (26)
AdY U = DRY −1 [DLY [U ]]
= (AdQY VU , Ad∗
Q−1
Y
(ad∗
VU PY + PU )). (27)
Note that AdY U is the adjoint on G⋉
g∗ while AdQY VU and Ad∗
YQ YP is the adjoint on G. Writing W = (VW , PW ) ∈ g × g∗ then, one also has
adW U = d
dt |t=0 Ad(exp(tVW ),tPW ) U
= (adVW VU , ad∗
VU PW − ad∗
VW PU ). (28)
15

---

## Processing Information

- **Processing Library:** Zotero PDFWorker
- **Processing Date:** 2026-02-10T18:15:12.132Z
- **Text Length:** 51731 characters
- **Success:** Text extraction completed
- **PDF Library Used:** Zotero PDFWorker
- **Pages Processed:** 15 of 15
