# PDF Document: Feo et al. - 2025 - Stochastic Optimal Control of Interacting Particle Systems in Hilbert Spaces and Applications.pdf

**File Path:** Feo et al. - 2025 - Stochastic Optimal Control of Interacting Particle Systems in Hilbert Spaces and Applications.pdf

**Processed Date:** 2026-02-10T18:17:59.458Z

**File Size:** 1053.91 KB

**Total Pages:** 57

**Extracted Pages:** 57

**PDF Library:** Zotero PDFWorker

**Attachment Item ID:** 3151

**Title:** Stochastic Optimal Control of Interacting Particle Systems in Hilbert Spaces and Applications

**Collection:** Large Files > Random Papers

---

## Extracted Text Content

STOCHASTIC OPTIMAL CONTROL OF INTERACTING PARTICLE SYSTEMS IN HILBERT SPACES AND APPLICATIONS
FILIPPO DE FEO, FAUSTO GOZZI, ANDRZEJ ŚWIĘCH, AND LUKAS WESSELS
Abstract. Optimal control of interacting particles governed by stochastic evolution equations in Hilbert spaces is an open area of research. Such systems naturally arise in formulations where each particle is modeled by stochastic partial differential equations, path-dependent stochastic differential equations (such as stochastic delay differential equations or stochastic Volterra integral equations), or partially observed stochastic systems. The purpose of this manuscript is to build the foundati-
ons for a limiting theory as the number of particles tends to infinity. We prove the convergence of the value functions un of finite particle systems to a function V, which is the unique L-viscosity solution of the corresponding mean-field Hamilton-Jacobi-Bellman equation in the space of probability measures, and we identify its lift with the value function U of the so-called “lifted” limit optimal control problem. Under suitable additional assumptions, we show C1,1-regularity of U , we prove that-
 V projects precisely onto the value functions un, and that optimal (resp. optimal feedback) controls of the particle system correspond to optimal (resp. optimal feedback) controls of the lifted control problem started at the corresponding initial condition. To the best of our knowledge, these are the first results of this kind for stochastic optimal control problems for interacting particle systems of stochastic evolution equations in Hilbert spaces. We apply the developed theory to problems aris-
ing in economics where the particles are modeled by stochastic delay differential equations and stochastic partial differential equations.
Mathematics Subject Classification (2020): 49N80, 49L20, 49L25, 49K27, 49N35, 60H15, 93E20, 34K50. Keywords: interactive particle systems on Hilbert spaces, HJB equations on Wasserstein spaces, mean-field control, viscosity solutions, SPDEs, stochastic delay equations
Contents
1. Introduction 2 2. Notation 6 3. The Control Problems 7 4. Assumptions and Preliminaries 8 5. Convergence of the Value Functions 15 6. C1,1 Regularity of the Value Function of the Lifted Control Problem 31 7. Projection of V onto un 38 8. Lifting and Projection of Optimal Controls 45 9. Applications to problems in economics 47 Appendix A. Viscosity solutions of PDEs in Hilbert spaces 51 Appendix B. Approximation of Measures in the Wasserstein Space 52 References 54
1
arXiv:2511.21646v1 [math.PR] 26 Nov 2025

2 F. DE FEO, F. GOZZI, A. ŚWIĘCH, AND L. WESSELS
1. Introduction
In this paper, we begin the investigation of stochastic optimal control problems for large interacting particle systems of stochastic evolution equations in Hilbert spaces. More precisely, in a real, separable Hilbert space H, for n ≥ 1 we consider x(s) = (x1(s), . . . , xn(s)) ∈ Hn to be the solution of the system of H–valued stochastic differential equations (SDEs)
(1.1)
(
dxi(s) = [Axi(s) + f (xi(s), μx(s), ai(s))]ds + σ(xi(s), μx(s))dW (s), s ∈ [t, T ]
xi(t) = xi ∈ H,
i = 1, . . . , n, where A : D(A) ⊂ H → H is a linear densely defined maximal dissipative operator,
μx(s) := 1
n
Pn
i=1 δxi(s) is the empirical measure of x(s), and W (s) is a cylindrical Wiener process in some Hilbert space Ξ acting as a common noise. The precise conditions on the admissible controls ai(·) and the coefficient functions will be given in Sections 3, 4. The cost functional is of the form
(1.2) Jn(t, x; a(·)) = E
"
ZT
t
1
n
n
X
i=1
l(xi(s), μx(s), ai(s))ds + 1
n
n
X
i=1
UT (xi(T ), μx(T ))
#
for (t, x) = (t, x1, . . . , xn) ∈ [0, T ] × Hn.
The study of these types of problems is motivated by control problems where the particles are modeled by infinite-dimensional dynamics belonging to some of the most prominent and wideranging families of stochastic systems, including:
• stochastic partial differential equations (SPDEs), • path-dependent stochastic differential equations (e.g. stochastic delay differential equations (SDDEs) or stochastic Volterra integral equations (SVIEs)), • partially observed stochastic systems, leading to control of Zakai-type SPDEs.
These problems are natural generalizations of classical optimal control problems of finite-dimensional interacting particle systems and find applications across most applied sciences, such as economics, finance, neuroscience, biology, physics, engineering, and many others. Following the dynamic programming approach, we define the value functions un : [0, T ]×Hn → R by
un(t, x) := inf
a(·)∈Λtn
Jn(t, x; a(·)),
where Λn
t is an appropriate set of optimal controls. The value function un is the B-continuous viscosity solution of the Hamilton–Jacobi–Bellman (HJB) equation
(1.3)

 
 
∂tun + 1
2 Tr(An(x, μx)D2un)
+1
n
Pn
i=1 (⟨Axi, nDxiun⟩ + H(xi, μx, nDxiun)) = 0, (t, x) ∈ (0, T ) × Hn
un(T, x) = 1
n
Pn
i=1 UT (xi, μx), x ∈ Hn,
where μx := 1
n
Pn
i=1 δxi and An(x, μx) is an n × n-matrix consisting of n2 trace-class operators (An)ij(x, μx) : H → H, given by
(An)ij(x, μx) := σ(xi, μx)σ⊤(xj, μx),
i, j = 1, . . . , n, and H : H × P2(H) × H → R denotes the Hamiltonian given by
(1.4) H(x, μ, p) := inf
q∈Λ ̃
(⟨f (x, μ, q), p⟩ + l(x, μ, q)).

STOCHASTIC OPTIMAL CONTROL OF INTERACTING PARTICLE SYSTEMS IN HILBERT SPACES 3
Notice that (1.3) is a degenerate partial differential equation (PDE) on the Hilbert space Hn which contains an unbounded operator A in the linear first order term. Therefore, it must be dealt with using appropriate viscosity solution techniques (see [52, Chapter 3]). Formally, the value functions un, when converted to functions of measures, converge to the value function V of a control problem in the Wasserstein space P2(H) which formally solves the HJB equation
(1.5)

   
   
∂tV(t, μ)+ R
H⟨Ax, ∂μV(t, μ)(x)⟩μ(dx) + 1
2
R
H Tr Dx∂μV(t, μ)(x)σ(x, μ)σ⊤(x, μ) μ(dx)
+1
2
R
H×H Tr ∂2
μV(t, μ)(x, x′)σ(x, μ)σ⊤(x′, μ) μ(dx)μ(dx′)
+
R
H H(x, μ, ∂μV(t, μ)(x))μ(dx) = 0, (t, μ) ∈ (0, T ) × P2(H)
V(T, μ) = R
H UT (x, μ)μ(dx), μ ∈ P2(H).
However, we will neither study the control problem in the Wasserstein space nor the HJB equation (1.5). Instead, we will study the “lifted” version of (1.5) on the Hilbert space E = L2(Ω; H), where Ω = (0, 1), which is satisfied by the lift V of V. It has the form
(1.6)
(
∂tV + 1
2 Tr(Σ(X)(Σ(X))∗D2V )+⟨⟨AX, DV ⟩⟩+H ̃(X, DV ) = 0, (t, X) ∈ (0, T ) × E
V (T, X) = UT (X), X ∈ E,
where A : D(A) ⊂ E → E, AX(ω) := A(X(ω)) is an unbounded operator and other terms are suitably defined, see Section 3. This lifting procedure allows us to use the well-developed theory of viscosity solutions for unbounded HJB equations in Hilbert spaces, see [52, Chapter 3]. Moreover, thanks to the structure of (1.6), it can be associated with a “lifted” limit control problem, see (3.1)(3.2), which enables us to apply control theoretic techniques. The lifting procedure was introduced for H = Rd in-
 [74, 15]. We refer the reader to [22, 65] for further reading. However, we remark that the “lifted” HJB (1.6) is new in the framework of a general Hilbert space H. Literature: case H = Rd. The study of controlled particle systems when H = Rd and, especially, the problem of convergence of their value functions un to a value function V of a control problem in the space of measures have attracted considerable attention in recent years. In particular, convergence results for the case of idiosyncratic-
 noise were obtained in [71] (see also [11, 21, 56, 59, 60] for earlier and related results, including large deviations), and for the case of common noise in [48]. For related problems, see also the recent papers [19, 44]. In [46] so-called extended meanfield control problems, i.e., control problems that involve the law of the control, were considered. Viscosity solution theory was applied to prove convergence in [64, 78, 89] (see also [90]). The rate of convergence of the value functions for fini-
te particle control problems has also been studied extensively. The first result in this direction for both idiosyncratic and common noise was obtained in [67], where, assuming the existence of a classical solution of the infinite dimensional limit HJB equation, the rate of convergence of order O(1/n) was proved. A different and simpler argument to obtain this result was pointed out in [16, Section 1.3]. A similar method was applied earlier in the context of mean-field games [17, 23]. If the value-
 function V is not smooth, the situation becomes much more complicated. We refer to [4, 16, 18, 20, 25, 32, 34] for various results on the rate of convergence of un using the notion of viscosity solutions. Rate of convergence results in these papers depend on the regularity of the data and hence of the regularity of value functions, some also depend on the dimension d of the underlying state space. Moreover, second order HJB equations in spaces of probability measures on finite dimensional sets ha-
ve been studied quite intensively in recent years. Various results about uniqueness of their solutions can be found in [3, 5, 6, 7, 8, 9, 12, 19, 27, 29, 30, 33, 35, 76, 77, 85, 86, 92, 94].

4 F. DE FEO, F. GOZZI, A. ŚWIĘCH, AND L. WESSELS
In particular, the problem (1.1)-(1.2) when H = Rd, A = 0, and with a more specific structure of some coefficients was studied in [78, 89] following the methods of [64]. It was proved there that un(t, x) converge locally uniformly to a function V(t, μx) whose “lift” is the unique viscosity solution of (1.6). Moreover, it was proved in [89] that if the Fréchet derivative in the spatial variable of the lift of V is continuous then un(t, x) = V(t, μx). A similar observation has also been made in [73,-
 25] for problems considered there. We remark that (when H = Rd and A = 0) it was already noticed in [67] that in the absence of idiosyncratic noise, if V is a smooth solution of (1.5) then un(t, x) := V(t, μx) is a solution of (1.3). Finally, we refer the reader to [17, 22, 23] for introductions to the theory of mean field games and control. Literature: infinite dimensional case. Compared to the finite dimensional case, there are few results on mean field games, mean field control and optimal con-
trol of stochastic interacting particle systems in infinite dimensional spaces. Some results have been obtained for mean field games in Hilbert spaces in [53, 54, 57, 58, 61, 83] and for mean field control problems in Hilbert spaces in [28, 45, 49, 69, 87, 91]. We refer to [84] for mean field control of stochastic Volterra integral equations, [79] for control of mean-field jump-diffusion systems with delay, [75] for partially observed stochastic control systems with delay, and to [10, 82] for path-
-dependent mean-field control and games. In particular, we point out that the papers [61] (in the context of linear quadratic mean field games with delays in the control), [57] (in the context of a linear quadratic mean field game in a Hilbert space) seem to be the only ones to study the n-player game driven by a stochastic evolution equation on an infinite dimensional Hilbert space and the convergence to the corresponding mean field limit, while all other papers study directly the limit mean-fiel-
d problem. Finally, we refer to [2, 13, 81] for mean-field games and to [14, 36, 37, 41, 47, 70] for mean-field control under non-exchangeability/heterogeneity (or graphon interactions). In particular, [13, 81] address the convergence in the graphon mean-field game case and the very recent papers [14, 47] in the graphon mean-field control case. These are infinite dimensional formulations, but very different from ours, as the goal there is to model heterogeneity among agents and the equations do no-
t contain unbounded operators, which are typical features of abstract evolution equations in infinite dimensional spaces. Among all these papers, the only ones which deal with viscosity solutions in spaces of probability measures over infinite dimensional state spaces seem to be [28] and [36], but the authors there do not provide any uniqueness results. This is indeed a very difficult problem even when H = Rd. Our theoretical contributions. It is evident from the literature review that the study o-
f optimal control problems for interacting particle systems governed by stochastic evolution equations in infinite-dimensional Hilbert spaces, i.e. (1.1)-(1.2), and their mean-field limits (including convergence and uniqueness of solutions of the limiting PDE) is an open area of research. The purpose of this paper is to build a foundation for such a theory. As already explained before, to study our problem we generalize the approach from [64, 78, 89]. Instead of dealing with the PDE (1.5) we work -
directly with the “lifted” HJB (1.6). However, here the HJB equations (1.3) (on the Hilbert space Hn) and (1.6) (on E) are infinite dimensional. Thus we face significant mathematical difficulties introduced by such intrinsic infinite dimensionality:
• we lose local compactness of the state space H, • our abstract SDEs in H and E do not admit strong solutions (i.e. we neither have xi(s) ∈ D(A), nor X(s) ∈ D(A)); hence we need to deal with weaker notions of solutions as typical in infinite dimensional settings,

STOCHASTIC OPTIMAL CONTROL OF INTERACTING PARTICLE SYSTEMS IN HILBERT SPACES 5
• all HJB equations (1.3), (1.6) are intrinsically infinite dimensional and contain unbounded operators.
To circumvent the lack of local compactness and the unboundedness of the operator A, we work with a weaker space H−1 ⊃ H, and use the theory of the so-called B-continuous viscosity solutions for both PDEs (1.3) and (1.6). We also work with mild solutions of the state SDEs. While these tools have been applied to address similar problems in Hilbert spaces, see e.g. [52, Chapter 3], we would like to emphasize that their application in this new context arising from control of interactive particle syst-
ems and its mean-field limit requires careful consideration: for instance, we need to carefully study the semigroup of linear operators eAt generated by A, deal with the spaces of H- and H−1-valued square integrable random variables E = L2(Ω; H) and E−1 := L2(Ω; H−1), respectively, the spaces of probability measures on H and H−1, and introduce a suitable operator B : E → E satisfying the so called weak B-condition for A. Moreover, due to a more general structure of the coefficients of the control -
problem, various properties of the Hamiltonian that are rather straightforward in the setting of [64, 78, 89] require a more careful analysis in our case. For more details, see Section 4. Despite these difficult technical challenges, we are able to generalize successfully the corresponding results of [89] (and of the ones in [64, 78] for (i), (ii)) to our infinite dimensional framework. In particular:
(i) In Section 5, Theorem 5.7, we prove that un(t, x) converge locally uniformly to V(t, μx), where V is the unique L-viscosity solution of (1.5), that is, its “lift” V is the unique Bcontinuous viscosity solution of (1.6). We then identify V with the value function U of the “lifted” limit optimal control problem in the Hilbert space E, (3.1)–(3.2). (ii) Imposing additional assumptions, in Section 6, we use probabilistic methods to prove that U (t, ·) ∈ C1,1(E−1), where E−1 is the space of square -
integrable H−1-valued random variables. (iii) Under the assumption that the Fréchet derivative in E−1 of V (t, ·) is continuous, we show in Section 7, Theorem 7.1, that the value function V projects precisely onto the value functions un, i.e. un(t, x) = V(t, μx). Note that the differentiability assumption is in particular satisfied in the setting of (ii). (iv) In Section 8, we obtain relationships between optimal controls and optimal feedback controls for problems (1.1)-(1.2) and (3.1)–(3.2), i.e.-
 we prove that under suitable assumptions optimal (resp. optimal feedback) controls of the particle system correspond to optimal (resp. optimal feedback) controls of the “lifted”infinite dimensional control problem started at the corresponding initial condition.
Comparison with the state of the art. The proofs of the above results are much more challenging than the proofs of the corresponding results in [89] where H = Rd, due to the deep mathematical difficulties explained above which require the development of new ad-hoc techniques for these new types of problems. To the best of our knowledge, these are the first results of this kind for stochastic optimal control problems for interacting particle systems driven by stochastic evolution equations in Hilbe-
rt spaces. In particular, regarding (i), this seems to be the first uniqueness result for viscosity solutions of a mean-field PDE over an infinite dimensional state space (that we provide in terms of uniqueness of L-viscosity solutions of (1.5), i.e. in the sense of B-continuous viscosity solution of the “lifted” HJB (1.6)). Compared to the corresponding meanfield game problem in [57] where particles are modeled by abstract evolution equations on Hilbert spaces (or in [61] for mean-field games wit-
h delays rewritten as abstract evolution equations on Hilbert spaces) in the linear-quadratic setting, we consider general dynamics and cost functionals.

6 F. DE FEO, F. GOZZI, A. ŚWIĘCH, AND L. WESSELS
Regarding (iii) and (iv), we remark that such properties are not easy to obtain even in the case H = Rd and even in that setting there are very few results of this kind. Applications. In Section 9, we apply the developed theory to problems arising in economics in the context of optimization for large companies: a (path-dependent) stochastic optimal control problem with delays arising in the context of optimal advertising, inspired by [69]1, and a stochastic optimal control problem with vintage cap-
ital, inspired by [28], where the state equation is a stochastic partial differential equation. However, we remark that the range of possible applications is much wider as explained at the beginning of the introduction, spanning across most applied sciences. To conclude, we believe that the manuscript contains substantial new mathematical insights and techniques that allow to tackle a new class of optimal control problems for interacting particle systems and their associated HJB equations. We hope-
 that the paper will open a new line of research. The range of potential models and applications is extensive.
2. Notation
Throughout this work, we use the following notation.
• H is a real, separable Hilbert space with inner product ⟨·, ·⟩ and norm | · |. For x ∈ Hn, we denote |x|Hn := (Pn
i=1 |xi|2)1/2.
• Given a strictly positive B ∈ S(H), we define the space H−1 as the completion of H with respect to the norm |x|2
−1 := ⟨Bx, x⟩. For more details, see [52, Section 3.1.1]. For x ∈ Hn
−1,
let |x|Hn
−1 := (Pn
i=1 |xi|2
−1)1/2.
• For r ∈ [1, 2] and x = (x1, . . . , xn) ∈ Hn, define
|x|r := 1
n1
r
n
X
i=1
|xi|r
!1
r
, and |x|−1,r := 1
n1
r
n
X
i=1
|xi|r
−1
!1
r
.
• We set Ω = (0, 1) and we denote E := L2(Ω; H) to be the space of all square-integrable H-valued random variables. We denote by ⟨⟨·, ·⟩⟩ and ∥ · ∥ the canonical inner product and norm, respectively. Moreover, let E−1 := L2(Ω; H−1). It is endowed with its natural inner product and norm denoted by ⟨⟨·, ·⟩⟩−1 and ∥ · ∥−1. • For r ∈ [1, 2], we denote by Pr(H) the set of all Borel probability measures on H with finite r-th moment, i.e., Mr(μ) := R
H |x|rμ(dx) < ∞. Let dr : Pr(H) × Pr(H) → R denote the Wasserstein distance, i.e.,
dr(μ, β) = inf
γ∈Γ(μ,β)
Z
H ×H
|x − y|rγ(dx, dy)
1 r
= inf
( Z
Ω
|X(ω) − Y (ω)|rdω
1 r
: X, Y ∈ Lr(Ω; H), X#L1 = μ, Y#L1 = β
)
.
(2.1)
Here, Γ(μ, β) is the set of all probability measures on H ×H with first and second marginals μ and β, respectively. The proof of the second equality in (2.1) can be found for instance in [63, Theorem 3.9]. Note that dr
r(μ, δ0) = Mr(μ). For x ∈ Hn, we denote
μx := 1
n
n
X
i=1
δxi .
1see also [83] for a mean-field game framework with delays

STOCHASTIC OPTIMAL CONTROL OF INTERACTING PARTICLE SYSTEMS IN HILBERT SPACES 7
Then, we have dr(μx, μy) = infσ |x − yσ|r, where the infimum is taken over all permutation σ of {1, . . . , n}, and yσ = (yσ(1), . . . , yσ(n)). Let Pr(H−1), M−1,r and d−1,r be defined analogously with H replaced by H−1. Extensive accounts of the theory of mass transport and Wasserstein spaces in abstract metric spaces can be found in [1, 93]. • We denote by L1 the Lebesgue measure on R. For X ∈ E, let X#L1 be the pushforward measure on H. • For n ∈ N, let An
i = ( i−1
n ,i
n ) ⊂ (0, 1) = Ω, i = 1, . . . , n. Define the lift of x = (x1, . . . , xn) ∈
Hn by
(2.2) Xx
n=
n
X
i=1
xi1An
i,
and let En denote the subspace of E consisting of random variables of the form (2.2). Note that
(2.3) (Xx
n )#L1 = μx.
• For real, separable Hilbert spaces Ξ and H, L(Ξ; H) denotes the space of bounded linear operators from Ξ to H equipped with the norm ∥ · ∥L(Ξ;H). If Ξ = H we will just write L(H). We write L2(Ξ, H) to denote the space of Hilbert–Schmidt operators in L(Ξ; H) and use | · |L2(Ξ,H) to denote its norm.
• Λ is a real, separable Hilbert space with inner product ⟨·, ·⟩Λ and norm |·|Λ, and let Λ ̃ ⊂ Λ be convex. For q ∈ Λn, we write |q|Λn := (Pn
i=1 |qi|2
Λ)1/2. We denote E := L2(Ω; Λ ̃ ) ⊂ L2(Ω; Λ) and use ⟨⟨·, ·⟩⟩Λ and ∥ · ∥Λ to denote, respectively, the natural inner product and norm in this space.
3. The Control Problems
Let Ξ be a real, separable Hilbert space. For every 0 ≤ t < T , we consider a reference probability space (Ω′, F , F t
s, P, W ), where W is a cylindrical Wiener process in Ξ (see [52, Definition 2.7] for the definition of a reference probability space.
3.1. The Finite Particle System Control Problem. For the finite particle control problem (1.1)-(1.2) we have f : H × P2(H) × Λ → H, σ : H × P2(H) → L2(Ξ, H), l : H × P2(H) × Λ → R and UT : H × P2(H) → R. The precise assumptions on these functions will be given in Section 4. The control processes a(·) = (a1(·), . . . , an(·)) ∈ Λn
t , where the set of admissible controls Λn
t
consists of all processes a(·) : [t, T ] × Ω′ → Λ ̃n which are F t
s-progressively measurable, and such that
∥a(·)∥2
M2(t,T ;Λn) := E
"
ZT
t
n
X
i=1
|ai(s)|2
Λds
#
< ∞.
We remind the reader that under reasonable assumptions (in particular if Assumptions 4.4 and 4.5 are satisfied), the above described control problem does not depend on the choice of a reference probability space, see [52, Section 2.3.2].
3.2. The Lifted Limit Control Problem. Recall that E = L2(Ω; H) and E = L2(Ω; Λ ̃), where Ω = (0, 1). We now consider the infinite dimensional SDE
(3.1)
(
dX(s) = [AX(s) + F (X(s), a(s))]ds + Σ(X(s))dW (s), s ∈ [t, T ]
X(t) = X ∈ E,

8 F. DE FEO, F. GOZZI, A. ŚWIĘCH, AND L. WESSELS
where A : D(A) ⊂ E → E is defined as AX(ω) := A(X(ω)), F : E × E → E is defined as F (X, Q)(ω) := f (X(ω), X#L1, Q(ω)), and Σ : E → L2(Ξ, E) is defined as Σ(X)(ω) := σ(X(ω), X#L1). We consider the cost functional
J(t, X; a(·)) = E
ZT
t
L(X(s), a(s))ds + UT (X(T )) ,
where L : E × E → R and UT : E → R are given by
L(X, Q) :=
Z
Ω
l(X(ω), X#L1, Q(ω))dω, UT (X) :=
Z
Ω
UT (X(ω), X#L1)dω.
The set of admissible controls Λt consists of all processes a(·) : [t, T ] × Ω′ → E which are F t
sprogressively measurable, and
∥a(·)∥2
M2(t,T ;E) := E
ZT
t
∥a(s)∥2
Λds < ∞.
In this case, the value function U : [0, T ] × E → R is defined as
(3.2) U (t, X) := inf
a(·)∈Λt
J(t, X; a(·)),
and the corresponding “lifted” HJB equation is
(3.3)
(
∂tV + 1
2 Tr(Σ(X)(Σ(X))∗D2V )+⟨⟨AX, DV ⟩⟩+H ̃(X, DV ) = 0, (t, X) ∈ (0, T ) × E
V (T, X) = UT (X), X ∈ E,
where the lifted Hamiltonian H ̃ : E × E → R is given by
(3.4) H ̃(X, P ) :=
Z
Ω
H(X(ω), X#L1, P (ω))dω.
4. Assumptions and Preliminaries
Assumption 4.1. The operator A : D(A) ⊂ H → H is a linear, densely defined, maximal dissipative operator.
Under this assumption, A generates a C0-semigroup of contractions (esA)s≥0 on H.
Assumption 4.2. (Weak B-condition) There exists a strictly positive, self-adjoint operator B ∈ L(H) such that A∗B ∈ L(H), and −A∗B + c0B ≥ 0, for some c0 ≥ 0.
Assumption 4.3. The operator B ∈ L(H) in Assumption 4.2 is compact.
Assumption 4.4. Let r ∈ [1, 2). Let f : H × P2(H) × Λ → H be given by f (x, μ, q) = f1(x, μ) + f2(x, μ, q) for some f1 : H × P2(H) → H and f2 : H × P2(H) × Λ → H. Moreover, let σ : H × P2(H) → L2(Ξ, H). Let the following conditions be satisfied.
(i) There exists a constant C ≥ 0 such that
⟨f (x, μ, q) − f (y, β, q), B(x − y)⟩ ≤ C(|x − y|2
−1 + d2
−1,r(μ, β))
|f1(x, μ) − f1(y, β)| + |f2(x, μ, q) − f2(y, β, q)| ≤ C(|x − y| + dr(μ, β))
for all q ∈ Λ ̃, x, y ∈ H and μ, β ∈ P2(H).

STOCHASTIC OPTIMAL CONTROL OF INTERACTING PARTICLE SYSTEMS IN HILBERT SPACES 9
(ii) There exists a constant C ≥ 0 such that
|f (x, μ, q)|−1 ≤ C 1 + |x|−1 + M
1 r
−1,r(μ) + |q|Λ
|f2(x, μ, q)| ≤ C(1 + |q|Λ)
for all x ∈ H, μ ∈ P2(H) and q ∈ Λ ̃. (iii) The function H × E × Λ ∋ (x, X, q) 7→ f ̃(x, X, q) := f (x, X#L1, q) is Fréchet differentiable with Fréchet derivative Df ̃ = (Dxf ̃, DXf ̃, Dqf ̃) : H × E × Λ → L(H) × L(E; H) × L(Λ; H) and there is a constant C ≥ 0 such that
|(Df ̃(x, X, p) − Df ̃(y, Y, q))(x − y, X − Y, p − q)|H3
−1 ≤ C(|x − y|2
−1 + ∥X − Y ∥2
−1 + |p − q|2
Λ)
for all x, y ∈ H, X, Y ∈ E, and p, q ∈ Λ ̃. (iv) There exists a constant C ≥ 0 such that
|σ(x, μ) − σ(y, β)|L2(Ξ,H) ≤ C(|x − y|−1 + d−1,r(μ, β)),
for all x, y ∈ H and μ, β ∈ P2(H). (v) The function H ×E ∋ (x, X) 7→ σ ̃(x, X) := σ(x, X#L1) is Fréchet differentiable with Fréchet derivative Dσ ̃ = (Dxσ ̃, DXσ ̃) : H × E → L(H; L2(Ξ, H)) × L(E; L2(Ξ, H)) and there is a constant C ≥ 0 such that
|(Dxσ ̃(x, X) − Dxσ ̃(y, Y ))(x − y)|L2(Ξ,H−1) + |(DX σ ̃(x, X) − DX σ ̃(y, Y ))(X − Y )|L2(Ξ,H−1)
≤ C(|x − y|2
−1 + ∥X − Y ∥2
−1)
for all x, y ∈ H, and X, Y ∈ E.
Assumption 4.5. Let r ∈ [1, 2). Let the running cost l : H × P2(H) × Λ → R be given by l(x, μ, q) = l1(x, μ) + l2(x, μ, q) for some continuous functions l1 : H × P2(H) → R and l2 : H × P2(H) × Λ → R. Let the terminal cost function UT : H × P2(H) → R. Let the following conditions be satisfied.
(i) There exists a constant C ≥ 0 such that
|l1(x, μ) − l1(y, β)| + |l2(x, μ, q) − l2(y, β, q)| ≤ C(|x − y|−1 + d−1,r(μ, β))
for all q ∈ Λ ̃, x, y ∈ H and μ, β ∈ P2(H). (ii) There exist constants C1 ≥ 0 and C2, C3 > 0 such that
−C1 + C2|q|2
Λ ≤ l2(x, μ, q) ≤ C1 + C3|q|2
Λ
for all x ∈ H, μ ∈ Pr(H). (iii) The function H × E × Λ ∋ (x, X, q) 7→ l ̃(x, X, q) := l(x, X#L1, q) is Fréchet differentiable with Fréchet derivative Dl ̃ = (Dxl ̃, DXl ̃, Dql ̃) : H × E × Λ → L(H; R) × L(E; R) × L(Λ; R) and there is a constant C ≥ 0 such that
|(Dl ̃(x, X, p) − Dl ̃(y, Y, q))(x − y, X − Y, p − q)| ≤ C(|x − y|2
−1 + ∥X − Y ∥2
−1 + |p − q|2
Λ)
for all x, y ∈ H, X, Y ∈ E, and p, q ∈ Λ ̃. (iv) There exists a constant C ≥ 0 such that
|UT (x, μ) − UT (y, β)| ≤ C(|x − y|−1 + d−1,r(μ, β)),
for all x, y ∈ H, μ, β ∈ P2(H).

10 F. DE FEO, F. GOZZI, A. ŚWIĘCH, AND L. WESSELS
(v) The function H × E ∋ (x, X) 7→ U ̃T (x, X) := UT (x, X#L1) is Fréchet differentiable with Fréchet derivative DU ̃T = (DxU ̃T , DXU ̃T ) : H × E → L(H; R) × L(E; R), and there is a constant C ≥ 0 such that
|(DU ̃T (x, X) − DU ̃T (y, Y ))(x − y, X − Y )| ≤ C(|x − y|2
−1 + ∥X − Y ∥2
−1),
for all x, y ∈ H, X, Y ∈ E.
Assumption 4.6. There exist constants C1, C2, ν ≥ 0 such that the map
H × E × Λ ̃ ∋ (x, X, q) 7→ l ̃(x, X, q) + C1|x|2
−1 + C2∥X∥2
−1 − ν|q|2
Λ
is convex, where l ̃ is defined as in Assumption 4.5.
Assumption 4.7. (i) The function f : H ×P2(H)×Λ → H is such that its lift F : E ×E → E (as defined in Subsection 3.2) is affine linear, and there is a constant C ≥ 0 such that
∥F (X, P ) − F (Y, Q)∥ ≤ C (∥X − Y ∥ + ∥P − Q∥Λ)
∥F (X, P ) − F (Y, Q)∥−1 ≤ C (∥X − Y ∥−1 + ∥P − Q∥Λ)
for all X, Y ∈ E, P, Q ∈ E. (ii) The function σ : H × P2(H) → L2(Ξ, H) is such that its lift Σ : E → L2(Ξ, E) (as defined in Subsection 3.2) is affine linear, and there is a constant C ≥ 0 such that
∥Σ(X) − Σ(Y )∥L2(Ξ,E) ≤ C∥X − Y ∥−1
for all X, Y ∈ E. (iii) The functions l : H × P2(H) × Λ → R and UT : H × P2(H) → R are such that l ̃ : H × E × E → R and U ̃T : H × E → R (as defined in Assumption 4.5) are convex.
4.1. Properties of the Hamiltonian H. Recall the definition of the Hamiltonian H from equation (1.4). We define Hn : Hn × P2(H) × Hn → R as
Hn(x, μ, p) := 1
n
n
X
i=1
H(xi, μ, npi) = 1
n inf
q∈Λ ̃ n
n
X
i=1
(⟨f (xi, μ, qi), npi⟩ + l(xi, μ, qi)) .
For m > 0, we define Hm
n : Hn × P2(H) × Hn → R as
Hm
n (x, μ, p) := 1
n inf
q∈Λ ̃ n |q|Λn ≤m
n
X
i=1
(⟨f (xi, μ, qi), npi⟩ + l(xi, μ, qi)) .
Lemma 4.8. Let Assumptions 4.4(ii) and 4.5(ii) be satisfied. Then, for every C ̃ > 0, there is a constant K > 0 such that
Hn(x, μ, p) = HK√n
n (x, μ, p)
for all n ∈ N, μ ∈ P2(H), x, p ∈ Hn, |p|Hn ≤ C ̃/√n.
Proof. We have
Hn(x, μ, p) = 1
n inf
q∈Λ ̃ n
n
X
i=1
(⟨f1(xi, μ), npi⟩ + ⟨f2(xi, μ, qi), npi⟩ + l1(xi, μ) + l2(xi, μ, qi))
Hm
n (x, μ, p) = 1
n inf
q∈Λ ̃ n |q|Λn ≤m
n
X
i=1
(⟨f1(xi, μ), npi⟩ + ⟨f2(xi, μ, qi), npi⟩ + l1(xi, μ) + l2(xi, μ, qi)).

STOCHASTIC OPTIMAL CONTROL OF INTERACTING PARTICLE SYSTEMS IN HILBERT SPACES 11
Note that using Assumptions 4.4(ii) and 4.5(ii), we obtain
n
X
i=1
(⟨f2(xi, μ, qi), npi⟩ + l2(xi, μ, qi)) ≥
n
X
i=1
−C(1 + |qi|Λ)n|pi| − C1 + C2|qi|2
Λ ≥ −Cn + C|q|2
Λn
for all |p|Hn ≤ C ̃/√n. Moreover,
inf
q∈Λ ̃ n
n
X
i=1
(⟨f2(xi, μ, qi), npi⟩ + l2(xi, μ, qi)) ≤ C(1 + n)
for all |p|Hn ≤ C/√n. Thus, Hn and Hm
n indeed coincide for m = K√n if K > 0 is chosen sufficiently large, which concludes the proof. □
Let us introduce Hm : H × P2(H) × H → R as
Hm(x, μ, p) := inf
q∈Λ ̃ |q|Λ≤m
{⟨f (x, μ, q), p⟩ + l(x, μ, q)} .
For n = 1 in the previous lemma, we obtain the following result.
Corollary 4.9. Let Assumptions 4.4(ii) and 4.5(ii) be satisfied. Then, for every C > 0, there is a constant K > 0 such that
H(x, μ, p) = HK(x, μ, p)
for all μ ∈ P2(H), x, p ∈ H, |p| ≤ C.
Lemma 4.10. Let Assumptions 4.4(i)(ii) and 4.5(i)(ii) be satisfied. Then, there is a constant C ≥ 0 such that
|H(x, μ, p) − H(x, μ, p′)| ≤ C(1 + |x| + M
1
(4.1) rr (μ) + |p| + |p′|)|p − p′|
(4.2) |H(x, μ, p) − H(y, β, p)| ≤ C(|x − y| + dr(μ, β))(1 + |p|).
for all x, y ∈ H, μ, β ∈ P2(H) and p, p′ ∈ H.
Proof. Let us first observe that
(4.3) |H(x, μ, p)| ≤ C(1 + |x| + M
1
rr (μ))(1 + |p|) + C|p|2.
for all x ∈ H, μ ∈ P2(H) and p ∈ H. Indeed, by Assumptions 4.4(ii) and 4.5(ii), we have
H(x, μ, p) ≤ |⟨f1(x, μ), p⟩| + |l1(x, μ)| + inf
q∈Λ ̃
{|⟨f2(x, μ, q), p⟩| + l2(x, μ, q)}
≤ C(1 + |x| + M
1
rr (μ))(1 + |p|) + inf
q∈Λ ̃
C(1 + |q|Λ)|p| + C1 + C3|q|2
Λ
≤ C(1 + |x| + M
1
rr (μ))(1 + |p|),
−H(x, μ, p) ≤ |⟨f1(x, μ), p⟩| + |l1(x, μ)| + sup
q∈Λ ̃
{|⟨f2(x, μ, q), p⟩| − l2(x, μ, q)}
≤ C(1 + |x| + M
1
rr (μ))(1 + |p|) + sup
q∈Λ ̃
C(1 + |q|Λ)|p| + C1 − C2|q|2
Λ
≤ C(1 + |x| + M
1
rr (μ))(1 + |p|) + C|p|2,
where we used Young’s inequality in the last step. This concludes the proof of (4.3).

12 F. DE FEO, F. GOZZI, A. ŚWIĘCH, AND L. WESSELS
Now, for x ∈ H, μ ∈ P2(H), and p ∈ H, since H is concave in its last variable, we have
−C|p′|2 − C(1 + |x| + M
1
rr (μ))(1 + |p′|) ≤ H(x, μ, p′) ≤ H(x, μ, p) + ⟨ξ, p′ − p⟩,
for all p′ ∈ H and any ξ = ξ(x, μ, p) ∈ D+
p H(x, μ, p), where D+
p H denotes the superdifferential of
H in the last variable, see e.g. [52, Definition E.1]. Let p′ = p−(1+|p|) ξ
|ξ| . Note that |p′| ≤ 2|p|+1.
Thus, using (4.3), we obtain
(1 + |p|)|ξ(x, μ, p)| ≤ C(1 + |x| + M
1
rr (μ))(1 + |p|) + C|p|2,
from which we deduce that
|ξ(x, μ, p)| ≤ C(1 + |x| + M
1
rr (μ) + |p|),
for all x ∈ H, μ ∈ P2(μ), and p ∈ H. Now, we consider the function Ψ : R → R, Ψ(θ) := H(x, μ, p′ + θ(p − p′)). Since H is concave in its last varaible, Ψ is also concave. Thus, Ψ is Lipschitz continuous on [0, 1], hence differentiable almost everywhere. Let θ ∈ (0, 1) be a point of differentiability. Then, we have
Ψ(θ + h) − Ψ(θ) = H(x, μ, p′ + (θ + h)(p − p′)) + H(x, μ, p′ + θ(p − p′)) ≤ ⟨ξ, h(p − p′)⟩.
Hence, for all ξ = ξ(x, μ, p′ + θ(p − p′)) ∈ D+
p H(x, μ, p′ + θ(p − p′)), we have
⟨ξ, p − p′⟩ ≤ lhi↑m0
Ψ(θh) − Ψ(θ)
h = Ψ′(θ) = lhi↓m0
Ψ(θh) − Ψ(θ)
h ≤ ⟨ξ, p − p′⟩,
i.e., |Ψ′(θ)| ≤ |ξ(x, μ, p′ + θ(p − p′))||p − p′|. Therefore,
|H(x, μ, p) − H(x, μ, p′)| = |Ψ(1) − Ψ(0)| =
Z1
0
Ψ′(θ)dθ
≤
Z1
0
|ξ(x, μ, p′ + θ(p − p′))||p − p′|dθ ≤ C(1 + |x| + M
1
rr (μ) + |p| + |p′|)|p − p′|,
which concludes the proof of (4.1). For the proof of inequality (4.2), we observe that
|H(x, μ, p) − H(y, β, p)| ≤ |⟨f1(x, μ) − f1(y, β), p⟩| + |l1(x, μ) − l1(y, β)|
+ inf
q∈Λ ̃
{⟨f2(x, μ, q), p⟩ + l2(x, μ, q)} − inf
q∈Λ ̃
{⟨f2(y, β, q), p⟩ + l2(y, β, q)}
≤ C(|x − y| + dr(μ, β))(1 + |p|)
+ sup
q∈Λ ̃
{|⟨f2(x, μ, q) − f2(y, β, q), p⟩| + |l2(x, μ, q) − l2(y, β, q)|}
≤ C(|x − y| + dr(μ, β))(1 + |p|).
where we used Assumptions 4.4(i) and 4.5(i). □
We need the following representation of the lifted Hamiltonian H ̃ defined in (3.4).
Proposition 4.11. Let Assumptions 4.4(i)(ii), 4.5(i)(ii) be satisfied. Then
(4.4) H ̃(X, P ) = inf
Q∈E {⟨⟨F (X, Q), P ⟩⟩ + L(X, Q)}
for all X, P ∈ E.

STOCHASTIC OPTIMAL CONTROL OF INTERACTING PARTICLE SYSTEMS IN HILBERT SPACES 13
Proof. The inequality “≤” in (4.4) is obvious, so we only prove the opposite inequality. Given R > 0, we denote ΩR = {ω ∈ Ω : max(|X(ω)|, |P (ω)|) > R}. We choose a0 ∈ Λ ̃ and denote μ := X#L1. For ε > 0, let R = Rε be such that
Z
ΩR
(⟨f (X(ω), μ, a0), P (ω)⟩ + L(X(ω), μ, a0)) dω +
Z
ΩR
|H(X(ω), X#L1, P (ω))|dω < ε.
Given δ > 0, we cover B ̄R × B ̄R ⊂ H × H by countably many non-empty, disjoint Borel sets
Di ⊂ B ̄R × B ̄R, i ∈ N, with diam(Di) < δ, and we choose (xi, pi) ∈ Di arbitrary. Due to Lemma 4.10 we may choose δ sufficiently small such that
|H(x, μ, p) − H(xi, μ, pi)| < ε
for all (x, p) ∈ Di. For i ∈ N, let ai ∈ Λ ̃ be such that
H(xi, μ, pi) > ⟨f (xi, μ, ai), pi⟩ + l(xi, μ, ai) − ε.
Since |xi|, |pi| ≤ R, we have |ai|Λ ≤ K for some K > 0, which only depends on R and μ. By Assumptions 4.4(i), 4.5(i), we can take δ > 0 sufficiently small such that
|⟨f (x, μ, ai), p⟩ + l(x, μ, ai) − (⟨f (xi, μ, ai), pi⟩ + l(xi, μ, ai))| < ε
for all (x, p) ∈ Di, i ∈ N. Let Ωi = {ω ∈ Ω : (X(ω), P (ω)) ∈ Di}, i ∈ N, and set
Qε(ω) =
∞
X
i=1
ai1Ωi(ω) + a01ΩR(ω).
Then,
⟨⟨F (X, Qε), P ⟩⟩ + L(X, Qε) =
∞
X
i=1
Z
Ωi
(⟨f (X(ω), μ, ai), P (ω)⟩ + L(X(ω), μ, ai)) dω
+
Z
ΩR
(⟨f (X(ω), μ, a0), P (ω)⟩ + L(X(ω), μ, a0)) dω
≤
∞
X
i=1
Z
Ωi
(⟨f (xi, μ, ai), pi⟩ + l(xi, μ, ai)) dω + 2ε
≤
∞
X
i=1
Z
Ωi
H(xi, μ, pi)dω + 3ε ≤
∞
X
i=1
Z
Ωi
H(X(ω), μ, P (ω))dω + 4ε
≤
Z
Ω
H(X(ω), μ, P (ω))dω + 5ε.
This yields
⟨⟨F (X, Qε), P ⟩⟩ + L(X, Qε) ≤ H ̃(X, P ) + 5ε
which concludes the proof. □
4.2. The Operators A, etA, B. Throughout this subsection, we work under Assumptions 4.1 and 4.2. Recall that A : D(A) ⊂ E → E is defined as A(X)(ω) := A(X(ω)) with domain D(A) = L2(Ω; D(A)), where A : D(A) ⊂ H → H is a maximal dissipative operator.
Lemma 4.12. The operator A : D(A) ⊂ E → E is maximal dissipative.

14 F. DE FEO, F. GOZZI, A. ŚWIĘCH, AND L. WESSELS
Proof. The dissipativity of A follows directly from its definition and the dissipativity of A. Let us show that A is maximal dissipative. Since A is maximal dissipative, R(I − A) = H. Hence, for all y ∈ H, there is an x ∈ D(A) such that x − Ax = y. Now, for given Y ∈ E, let X ∈ E be defined in the following way: Let X(ω) ∈ H be such that X(ω) − A(X(ω)) = Y (ω), i.e., X(ω) := (I − A)−1(Y (ω)). Then we have
Y (ω) = (I − A)(X(ω)) = (I − A)(X)(ω),
i.e., Y = (I − A)(X). This shows that R(I − A) = E, hence A is maximal dissipative. □
It follows that A generates a C0-semigroup of contractions on E, which we denote by (esA)s≥0. Note that (esA)s≥0 is a semigroup in E, and (esA)s≥0 is a semigroup in H. We have the following relation between the two:
Lemma 4.13. For X ∈ E, we have for almost every ω ∈ Ω,
(4.5) (esAX)(ω) = esA(X(ω)).
Proof. Let A(k) = kA(kI − A)−1, k ∈ N, be the Yosida approximation of A, and A(k) = kA(kI − A)−1, k ∈ N, be the Yosida approximation of A.2 Here, I : H → H and I : E → E denote the identity in H and E, respectively. First, note that for X ∈ E, we have
(kI − A)(X)(ω) = (kIX − AX)(ω) = kX(ω) − (AX)(ω) = kX(ω) − A(X(ω)) = (kI − A)(X(ω)).
Thus,
(kI −A)(kI −A)−1(X(ω)) = X(ω) = ((kI −A)(kI −A)−1)(X)(ω) = (kI −A)((kI −A)−1(X)(ω)).
Applying (kI − A)−1 to both sides yields
(kI − A)−1(X(ω)) = (kI − A)−1(X)(ω).
In particular, this shows that
A(k)(X(ω)) = kA(kI−A)−1(X(ω)) = kA((kI−A)−1(X)(ω)) = kA((kI−A)−1(X))(ω) = A(k)(X)(ω).
Since PN
i=1
si Ai
(k) (X )
i! converges to esA(k)(X) in E, we also have convergence along some subsequence for almost every ω ∈ Ω, i.e.,
esA(k)(X(ω)) = jli→m∞
Nj
X
i=1
siAi
(k) (X (ω))
i! = jli→m∞
Nj
X
i=1
siAi
(k) (X )(ω)
i! = esA(k)(X)(ω).
Moreover, since esA(k) converges to esA in the strong operator topology as k → ∞, we know that along some subsequence esA(kj)(X), we have convergence for almost every ω ∈ Ω, i.e.,
esA(X(ω)) = jli→m∞ esA(kj)(X(ω)) = jli→m∞ esA(kj)(X)(ω) = esA(X)(ω),
which concludes the proof of (4.5). □
Lemma 4.14. The operator B ∈ L(E), B(X)(ω) := B(X(ω)), satisfies the weak B condition for A.
2We use the A(k) and A(k) for the Yosida approximation to distinguish it from the n × n matrix An that arises in the HJB equation (1.3).

STOCHASTIC OPTIMAL CONTROL OF INTERACTING PARTICLE SYSTEMS IN HILBERT SPACES 15
Proof. We need to show that B is strictly positive, self-adjoint, A∗B ∈ L(E) and −A∗B + c0B ≥ 0 for some constant c0 ≥ 0. All these properties follow from straightforward computations using the definition of B and the corresponding properties of B. For instance, the strict positivity follows by ⟨⟨BX, X⟩⟩ = R
Ω⟨B(X(ω)), X(ω)⟩dω > 0. □
4.3. Properties of the coefficients of the lifted problem. Notice that, under Assumptions 4.4, 4.5, the functions F, Σ, L, UT , H ̃ inherit estimates with respect to ∥ · ∥, ∥ · ∥−1 from the corresponding estimates for f, σ, l, UT , H. In particular, we have
⟨⟨F (X, Q) − F (Y, Q), B(X − Y )⟩⟩ ≤ C∥X − Y ∥2
−1,
∥Σ(X) − Σ(Y )∥L2(Ξ,E) + |L(X, Q) − L(Y, Q)| ≤ C∥X − Y ∥−1,
|H ̃(X, P ) − H(X, P ′)| ≤ C(1 + ∥X∥ + ∥P ∥ + ∥P ′∥)∥P − P ′∥,
|H ̃(X, P ) − H ̃(Y, P )| ≤ C∥X − Y ∥(1 + ∥P ∥),
for all X, Y, P, P ′ ∈ E and Q ∈ E.
4.4. The HJB Equation in the Wasserstein Space. We introduce the definition of L-viscosity solution of (1.5).
Definition 4.15. A function U : [0, T ] × P2(H) → R is an L-viscosity solution of equation (1.5) if its lift U : [0, T ] × E → R defined by U (t, X) := U(t, X#L1) is a B-continuous viscosity solution of equation (3.3), see Definition A.3 (see also [52, Section 3.3]).
5. Convergence of the Value Functions
5.1. Estimates for the Finite Particle System. Let n ≥ 1. For x = (x1, . . . , xn) ∈ Hn, and a(·) = (a1(·), . . . , an(·)) ∈ Λn
t , let x(·) = (x1(·), . . . , xn(·)) denote the solution of the equation
(5.1)
(
dx(s) = [Ax(s) + f (x(s), μx(s), a(s))]ds + σ(x(s), μx(s))dW (s), s ∈ [t, T ]
x(t) = x ∈ Hn,
where A denotes the n × n diagonal matrix with the operator A on its diagonal, f (x, μx, a) = (f (x1, μx, a1), . . . , f (xn, μx, an)), and σ(x, μx) = (σ(x1, μx), . . . , σ(xn, μx)).
Proposition 5.1. Let Assumptions 4.1 and 4.4(i)(ii)(iv) be satisfied. Then equation (5.1) has a unique mild solution x(·) ∈ L2([t, T ] × Ω′; Hn) in the sense of [52, Definition 1.119], which is progressively measurable and has continuous trajectories. The components (x1(·), . . . , xn(·)) of x(·) are mild solutions of the system of SDEs (1.1). Moreover, if a(·) is bounded, then E sups∈[t,T ] |x(s)|k
Hn <
∞ for every k ≥ 1.
Proof. See [26, Theorem 6.5, page 162]. We remark that since A generates a semigroup of contractions, continuity of paths follows from the continuity of paths of the stochastic convolution, see [26, Theorem 6.2, page 159] or [52, Theorem 1.112]. For the moment estimate when a(·) is bounded we refer for instance to [52, Theorem 1.130]. □
Throughout this work, solutions of SDEs are always understood in the sense of mild solutions, see e.g. [52, Definition 1.119]. For more on the theory of mild solutions of stochastic differential equations in Hilbert spaces we refer the readers to [31, 66].

16 F. DE FEO, F. GOZZI, A. ŚWIĘCH, AND L. WESSELS
Remark 5.2. In the paper we will use two versions of Itô’s formula, [52, Proposition 1.164] and [52, Proposition 1.166]. We remark that it is clear from the proof of [52, Proposition 1.164], together with [52, Theorem 1.112 and Proposition 1.132], that if A generates a semigroup of contractions then Itô’s formula of [52, Proposition 1.164] also holds for p = 2 there and hence it can be applied in our case. Moreover, even though [52, Proposition 1.166] is stated for coefficients b, σ there which ar-
e bounded in the control variable, it is clear from its proof that it can be applied in our case for functions with appropriate growth bounds and stopping times which guarantee that all terms are well defined. We will use it for functions F (t, x) = |x|2 in H and to F (t, X) = ∥X∥2 in E. We leave the simple proofs of such modifications to the reader.
Proposition 5.3. Let Assumptions 4.1, 4.2, and 4.4(i)(ii)(iv) be satisfied. Let x(·), x0(·), x1(·) be the solutions of equation (1.1) with initial conditions x, x0, x1 ∈ Hn, respectively, and control a(·) ∈ Λn
t . Then, there is a constant C ≥ 0, independent of n ∈ N, such that
E
"
sup
s∈[t,T ]
|x(s)|r
#
(5.2) ≤ C 1 + |x|r + √1n ∥a(·)∥M2(t,T ;Λn) ,
E
"
sup
s′∈[t,s]
|x(s′) − x|−1,r
#
≤ √CnE
"
Zs
t
n
X
i=1
|ai(s′)|2
Λds′
#1
2
+ C (1 + |x|r) (s − t) 1
(5.3) 2 ,
E
"
sup
s∈[t,T ]
|x1(s) − x0(s)|−1,r
#
(5.4) ≤ C|x1 − x0|−1,r,
for all s ∈ [t, T ], x, x1, x0 ∈ Hn, and a(·) ∈ Λn
t.
Proof. Proof of (5.2): First, note that
(5.5) E
"
sup
s∈[t,T ]
|x(s)|r
#
≤1
n
n
X
i=1
E
"
sup
s∈[t,T ]
|xi(s)|r
#! 1
r
.
We are going to estimate the right-hand side. For m ≥ 1, we denote by τm the minimum of T and the exit time of x(s) from {|x| ≥ m}. Using [52, Proposition 1.166] (see Remark 5.2), we have for every s′ ∈ [t, s]
|xi(s′ ∧ τm)|2 ≤ |xi|2 + 2
Z s′∧τm
t
|⟨f (xi(t′), μx(t′), ai(t′)), xi(t′)⟩|dt′
+
Z s′∧τm
t
|σ(xi(t′), μx(t′))|2
L2(Ξ,H)dt′ + 2
Z s′
t
⟨1[t,τm](t′)xi(t′), σ(xi(t′), μx(t′))dW (t′)⟩ .
Taking the power r/2 on both sides and the supremum over s′ ∈ [t, s], we obtain
sup
s′∈[t,s]
|xi(s′ ∧ τm)|r
≤ C|xi|r + C
Zs
t
|⟨f (xi(s′), μx(s′), ai(s′)), xi(s′)⟩|ds′
r 2
+C
Zs
t
|σ(xi(s′), μx(s′))|2
L2 (Ξ,H ) ds′
r 2
+ C sup
s′∈[t,s]
Z s′
t
⟨1[t,τm](t′)xi(t′), σ(xi(t′), μx(t′))dW (t′)⟩
r 2
.
(5.6)

STOCHASTIC OPTIMAL CONTROL OF INTERACTING PARTICLE SYSTEMS IN HILBERT SPACES 17
For the second term on the right-hand side, by Assumption 4.4(ii), we have
Zs
t
|⟨f (xi(s′), μx(s′), ai(s′)), xi(s′)⟩|ds′
r 2
≤
Zs
t
|f (xi(s′), μx(s′), ai(s′))||xi(s′)|ds′
r 2
≤ C sup
s′∈[t,s]
|xi(s′)| r
2
Zs
t
1 + |xi(s′)| + M
1
rr (μx(s′)) + |ai(s′)|Λ ds′
r 2
≤ ε sup
s′∈[t,s]
|xi(s′)|r + Cε
Zs
t
1 + |xi(s′)|r + Mr(μx(s′)) + |ai(s′)|r
Λ ds′,
for all ε > 0, where Cε ≥ 0 is a constant that depends on ε. For the third term on the right-hand side of inequality (5.6), we have by Assumption 4.4(iv)
Zs
t
|σ(xi(s′), μx(s′))|2
L2 (Ξ,H ) ds′
r 2
≤C 1+
Zs
t
|xi(s′)|2ds′
r 2
+
Zs
t
M
2
rr (μx(s′))ds′
r 2
!
.
Note that
Zs
t
|xi(s′)|2ds′
r 2
≤ sup
s′∈[t,s]
|xi(s′)| r
2
Zs
t
|xi(s′)|ds′
r 2
≤ ε sup
s′∈[t,s]
|xi(s′)|r + Cε
Zs
t
|xi(s′)|rds′,
for all ε > 0, as well as
Zs
t
M
2
rr (μx(s′))ds′
r 2
=


Zs
t
1
n
n
X
i=1
|xi(s′)|r
!2
r
ds′


r 2
≤ sup
s′∈[t,s]
1
n
n
X
i=1
|xi(s′)|r
!1
2


Zs
t
1
n
n
X
i=1
|xi(s′)|r
!1
r
ds′


r 2
≤ε
n
n
X
i=1
sup
s′∈[t,s]
|xi(s′)|r + Cε
Zs
t
1
n
n
X
i=1
|xi(s′)|r
!
ds′,
for all ε > 0. Moreover, regarding the fourth term on the right-hand side of inequality (5.6), by Burkholder–Davis–Gundy inequality, we have
E

 sup
s′∈[t,s]
Z s′
t
⟨1[t,τm](t′)xi(t′), σ(xi(t′), μx(t′))dW (t′)⟩
r 2


≤ CE
"
Zs
t
1[t,τm](s′)|xi(s′)|2|σ(xi(s′), μx(s′))|2
L2 (Ξ,H ) ds′
r 4
#
≤ CE
"
sup
s′∈[t,s]
1[t,τm](s′)|xi(s′)| r
2
Zs
t
1 + |xi(s′)|2 + M
2
rr (μx(s′)) ds′
r 4
#
≤ εE
"
sup
s′∈[t,s]
|xi(s′)|r
#
+ CεE
"
Zs
t
1 + |xi(s′)|2 + M
2
rr (μx(s′)) ds′
r 2
#
.

18 F. DE FEO, F. GOZZI, A. ŚWIĘCH, AND L. WESSELS
The second term on the right-hand side of this inequality can be estimated using the same arguments as before. Thus, choosing ε > 0 sufficiently small, taking the expectation in equation (5.6), letting m → ∞, and then summing over i = 1, . . . , n and dividing by n, we obtain
1
n
n
X
i=1
E
"
sup
s′∈[t,s]
|xi(s′)|r
#
≤ C 1 + |x|r
r+
Zs
t
1
n
n
X
i=1
E
"
sup
t′∈[t,s′]
|xi(t′)|r
#!
ds′ +
Zs
t
E
"
1
n
n
X
i=1
|ai(s′)|r
Λ
#
ds′
!
.
Therefore, by Grönwall’s inequality, we have
(5.7) 1
n
n
X
i=1
E
"
sup
s′∈[t,s]
|xi(s′)|r
#
≤ C 1 + |x|r
r+
Zs
t
E
"
1
n
n
X
i=1
|ai(s′)|r
Λ
#
ds′
!
.
Taking the power 1/r on both sides and noting that
(5.8)
Zs
t
E
"
1
n
n
X
i=1
|ai(s′)|r
Λ
#
ds′
!1
r
≤C
Zs
t
E
"
1
n
n
X
i=1
|ai(s′)|2
Λ
#
ds′
!1
2
concludes the proof. In the remaining proofs we will omit the technicalities involving the stopping times and assume that all the terms are well defined and have sufficient integrability to apply the necessary theorems. Proof of (5.3): Applying Itô’s formula [52, Proposition 1.164], and taking the supremum over s′ ∈ [t, s] we obtain
sup
s′∈[t,s]
|xi(s′) − xi|2
−1
≤2
Zs
t
⟨A∗B(xi(s′) − xi), xi(s′)⟩ + ⟨B(xi(s′) − xi), f (xi(s′), μx(s′), ai(s′))⟩ ds′
+
Zs
t
|B 1
2 σ(xi(s′), μx(s′))|2
L2(Ξ,H)ds′ + 2 sup
s′∈[t,s]
Z s′
t
⟨B(xi(t′) − xi), σ(xi(t′), μx(t′))dW (t′)⟩ .
(5.9)
For the first term on the right-hand side of this inequality, by Assumption 4.2, we have
Zs
t
|⟨A∗B(xi(s′) − xi), xi(s′)⟩| ds′ ≤ C sup
s′∈[t,s]
|xi(s′)|2 + |xi|2
!
(s − t).
For the second term on the right-hand side of inequality (5.9), we have
Zs
t
⟨B(xi(s′) − xi), f (xi(s′), μx(s′), ai(s′))⟩ ds′
≤ C sup
s′∈[t,s]
|xi(s′)|2 + |xi|2
!
(s − t) +
Zs
t
|f (xi(s′), μx(s′), ai(s′))|2ds′.

STOCHASTIC OPTIMAL CONTROL OF INTERACTING PARTICLE SYSTEMS IN HILBERT SPACES 19
Note that by Assumption 4.4(i)(ii)
Zs
t
|f (xi(s′), μx(s′), ai(s′))|2ds′
≤C
Zs
t
1 + |xi(s′)|2 + M
2
rr (μx(s′)) + |ai(s′)|2
Λ ds′
≤ C 1 + sup
s′∈[t,s]
|xi(s′)|2 + sup
s′∈[t,s]
M
2
rr (μx(s′))
!
(s − t) + C
Zs
t
|ai(s′)|2
Λds′.
For the third term on the right-hand side of inequality (5.9), we have by Assumption 4.4(iv)
Zs
t
|B 1
2 σ(xi(s′), μx(s′))|2
L2(Ξ,H)ds′ ≤ C
Zs
t
1 + |xi(s′)|2 + M
2
rr (μx(s′)) ds′
≤ C 1 + sup
s′∈[t,s]
|xi(s′)|2 + sup
s′∈[t,s]
M
2
rr (μx(s′))
!
(s − t).
For the stochastic integral in inequality (5.9), we obtain using Burkholder–Davis–Gundy inequality and Assumption 4.4(iv)
E

 sup
s′∈[t,s]
Z s′
t
⟨B(xi(t′) − xi), σ(xi(t′), μx(t′))dW (t′)⟩
r 2


≤ CE
"
Zs
t
|σ(xi(s′), μx(s′))|2
L2(Ξ,H)|B(xi(s′) − xi)|2ds′
r 4
#
≤ CE
"
Zs
t
1 + |xi(s′)|2 + M
2
rr (μx(s′)) |xi(s′) − xi|2
−1ds′
r 4
#
≤1
4E
"
sup
s′∈[t,s]
|xi(s′) − xi|r
−1
#
+ CE
"
Zs
t
1 + |xi(s′)|2 + M
2
rr (μx(s′)) ds′
r 2
#
≤1
4E
"
sup
s′∈[t,s]
|xi(s′) − xi|r
−1
#
+ C 1 + sup
s′∈[t,s]
|xi(s′)|r + sup
s′∈[t,s]
Mr (μx(s′ ) )
!
(s − t) r
2.
Finally, we note that sups′∈[t,s] Mr(μx(s′)) ≤ 1
n
Pn
i=1 sups′∈[t,s] |xi(s′)|r. Therefore, taking the power r/2 in inequality (5.9), taking the expectation, the sum over i = 1, . . . , n, and dividing by n, we obtain
1
n
n
X
i=1
E
"
sup
s′∈[t,s]
|xi(s′) − xi|r
−1
#
≤ C 1 + |x|r
r+ 1
n
n
X
i=1
E
"
sup
s′∈[t,s]
|xi(s′)|r
#!
(s − t) r
2+C
n
Zs
t
E
"n X
i=1
|ai(s′)|r
Λ
#
ds′.
Applying inequality (5.7), we obtain
1
n
n
X
i=1
E
"
sup
s′∈[t,s]
|xi(s′) − xi|r
−1
#
≤ C (1 + |x|r
r) (s − t) r
2+C
n
Zs
t
E
"n X
i=1
|ai(s′)|r
Λ
#
ds′.

20 F. DE FEO, F. GOZZI, A. ŚWIĘCH, AND L. WESSELS
Taking the power 1/r on both sides, noting (5.8), and using a similar estimate to (5.5) concludes the proof. Proof of (5.4): Applying Itô’s formula [52, Proposition 1.164], we obtain for every s′ ∈ [t, s]
|x1
i (s′) − x0
i (s′)|2
−1
= |x1
i − x0
i |2
−1 + 2
Z s′
t
⟨A∗B(x1
i (t′) − x0
i (t′)), x1
i (t′) − x0
i (t′)⟩dt′
+2
Z s′
t
⟨f (x1
i (t′), μx1(t′), ai(t′)) − f (x0
i (t′), μx0(t′), ai(t′)), B(x1
i (t′) − x0
i (t′))⟩dt′
+
Z s′
t
|B 1
2 (σ(x1
i (t′), μx1(t′)) − σ(x0
i (t′), μx0(t′)))|2
L2 (Ξ,H ) dt′
+2
Z s′
t
⟨B(x1
i (t′) − x0
i (t′)), (σ(x1
i (t′), μx1(t′)) − σ(x0
i (t′), μx0(t′)))dW (t′)⟩.
(5.10)
First, note that by Assumption 4.2, we have
Z s′
t
⟨A∗B(x1
i (t′) − x0
i (t′)), x1
i (t′) − x0
i (t′)⟩dt′ ≤ c0
Z s′
t
|x1
i (t′) − x0
i (t′)|2
−1dt′.
Moreover, by Assumption 4.4(ii), we have
Z s′
t
⟨f (x1
i (t′), μx1(t′), ai(t′)) − f (x0
i (t′), μx0(t′), ai(t′)), B(x1
i (t′) − x0
i (t′))⟩dt′
≤C
Z s′
t
|x1
i (t′) − x0
i (t′)|2
−1 + d2
−1,r(μx1(t′), μx0(t′)) dt′.
Thus, taking the power r/2 on both sides of equation (5.10) and taking the supremum over s′ ∈ [t, s], we obtain
sup
s′∈[t,s]
|x1
i (s′) − x0
i (s′)|r
−1
≤ C|x1
i − x0
i |r
−1 + C
Zs
t
|x1
i (s′) − x0
i (s′)|2
−1ds′
r 2
+C
Zs
t
d2
−1,r(μx1(s′), μx0(s′))ds′
r 2
+C
Zs
t
|B 1
2 (σ(x1
i (s′), μx1(s′)) − σ(x0
i (s′), μx0(s′)))|2
L2 (Ξ,H ) ds′
r 2
+ C sup
s′∈[t,s]
Z s′
t
⟨B(x1
i (t′) − x0
i (t′)), (σ(x1
i (t′), μx1(t′)) − σ(x0
i (t′), μx0(t′)))dW (t′)⟩
r 2
.
(5.11)
For the second term on the right-hand side of this inequality, we have
Zs
t
|x1
i (s′) − x0
i (s′)|2
−1ds′
r 2
≤ sup
s′∈[t,s]
|x1
i (s′) − x0
i (s′)|
r 2 −1
Zs
t
|x1
i (s′) − x0
i (s′)|−1ds′
r 2
≤ ε sup
s′∈[t,s]
|x1
i (s′) − x0
i (s′)|r
−1 + Cε
Zs
t
sup
t′∈[t,s′]
|x1
i (t′) − x0
i (t′)|r
−1ds′,

STOCHASTIC OPTIMAL CONTROL OF INTERACTING PARTICLE SYSTEMS IN HILBERT SPACES 21
for all ε > 0. For the third term on the right-hand side of inequality (5.11), we note that
E
"
Zs
t
d2
−1,r(μx1(s′), μx0(s′))ds′
r 2
#
≤E
"
Zs
t
|x1(s′) − x0(s′)|2
−1,r ds′
r 2
#
≤E
"
sup
s′∈[t,s]
|x1(s′) − x0(s′)|
r 2
−1,r
Zs
t
|x1(s′) − x0(s′)|−1,rds′
r 2
#
≤ εE
"
sup
s′∈[t,s]
|x1(s′) − x0(s′)|r
−1,r
#
+ CεE
"
Zs
t
sup
t′∈[t,s′]
|x1(t′) − x0(t′)|r
−1,r ds′
#
≤ε
n
n
X
i=1
E
"
sup
s′∈[t,s]
|x1
i (s′) − x0
i (s′)|r
−1
#
+ Cε
Zs
t
1
n
n
X
i=1
E
"
sup
t′∈[t,s′]
|x1
i (t′) − x0
i (t′)|r
−1
#
ds′,
for all ε > 0. By Assumption 4.4(iv), we can estimate the fourth term on the right-hand side of inequality (5.11) by
Zs
t
|B 1
2 (σ(x1
i (s′), μx1(s′)) − σ(x0
i (s′), μx0(s′)))|2
L2 (Ξ,H ) ds′
r 2
≤C
Zs
t
|x1
i (s′) − x0
i (s′)|2
−1 + d2
−1,r(μx1(s′), μx0(s′)) ds′
r 2
.
Moreover, by Burkholder–Davis–Gundy inequality, we obtain for the stochastic integral in (5.11)
E

 sup
s′∈[t,s]
Z s′
t
⟨B(x1
i (t′) − x0
i (t′)), (σ(x1
i (t′), μx1(t′)) − σ(x0
i (t′), μx0(t′)))dW (t′)⟩
r 2


≤ CE
"
Zs
t
|x1
i (s′) − x0
i (s′)|2
−1 |x1
i (s′) − x0
i (s′)|2
−1 + d2
−1,r(μx1(s′), μx0(s′)) ds′
r 4
#
≤ CE
"
sup
s′∈[t,s]
|x1
i (s′) − x0
i (s′)|
r 2 −1
Zs
t
|x1
i (s′) − x0
i (s′)|2
−1 + d2
−1,r(μx1(s′), μx0(s′)) ds′
r 4
#
≤ εE
"
sup
s′∈[t,s]
|x1
i (s′) − x0
i (s′)|r
−1
#
+ CεE
"
Zs
t
|x1
i (s′) − x0
i (s′)|2
−1 + d2
−1,r(μx1(s′), μx0(s′)) ds′
r 2
#
,
for all ε > 0. Now, we again use the same arguments as above to estimate the second term. Therefore, choosing ε > 0 sufficiently small, taking the expectation in inequality (5.11), summing over i = 1, . . . , n, and dividing by n, we obtain
1
n
n
X
i=1
E
"
sup
s′∈[t,s]
|x1
i (s′) − x0
i (s′)|r
−1
#
≤C
n
n
X
i=1
|x1
i − x0
i |r
−1 + C
Zs
t
1
n
n
X
i=1
E
"
sup
t′∈[t,s′]
|x1
i (t′) − x0
i (t′)|r
−1
#
ds′.
Applying Grönwall’s inequality, taking the power 1/r on both sides, and using a similar estimate to (5.5) completes the proof. □

22 F. DE FEO, F. GOZZI, A. ŚWIĘCH, AND L. WESSELS
Proposition 5.4. Let Assumptions 4.1, 4.2, 4.4(i)(ii)(iv), and 4.5(i)(ii)(iv) be satisfied. Then, there is a constant C ≥ 0, independent of n ∈ N, such that
(5.12) |un(t, x)| ≤ C(1 + |x|r)
|un(t, x) − un(t, y)| ≤ C|x − y|−1,r
(5.13)
for all t ∈ [0, T ] and x, y ∈ Hn.
Proof. Let us start with inequality (5.12). Using the growth assumption on l and UT , see Assumption 4.5, as well as (5.2), we obtain the lower bound
un(t, x) = inf
a(·)∈Λtn
E
"
ZT
t
1
n
n
X
i=1
l1(xi(s), μx(s)) + l2(xi(s), μx(s), ai(s)) ds + 1
n
n
X
i=1
UT (xi(T ), μx(T ))
#
≥ inf
a(·)∈Λtn
(
E
"
ZT
t
1
n
n
X
i=1
−C(1 + |xi(s)|−1 + M
1 r
−1,r(μx(s))) − C1 + C2|ai(s)|2
Λ ds
#
+E
"
1
n
n
X
i=1
−C(1 + |xi(T )|−1 + M
1 r
−1,r(μx(T )))
#)
≥ inf
a(·)∈Λtn
(
−C − CE
"
sup
s∈[t,T ]
|x(s)|r
#
+ C2
ZT
t
1
n
n
X
i=1
|ai(s)|2
Λds
)
≥ inf
a(·)∈Λtn
−C(1 + |x|r) − √Cn ∥a(·)∥M2(t,T ;Λn) + C2
n ∥a(·)∥2
M 2(t,T ;Λn)
≥ −C(1 + |x|r),
where we used Young’s inequality in the last step. The upper bound for un(t, x) follows from similar arguments if we use fixed controls ai(·) = q0, i = 1, . . . , n, for some fixed q0 ∈ Λ ̃. Inequality (5.13) follows from the Lipschitz assumptions on l and UT , see again Assumption 4.5, as well as (5.4). □
Define for m > 0, Λn,m
t := {a(·) ∈ Λn
t : a(·) has values in Bm(0) in Λn}.
Proposition 5.5. Let Assumptions 4.1, 4.2, 4.4(i)(ii)(iv), and 4.5(i)(ii)(iv) be satisfied. Then, there is a constant C ≥ 0, independent of n ∈ N, such that
|un(s, x) − un(t, x)| ≤ C(1 + |x|r)|s − t| 1
2
for all s, t ∈ [0, T ] and x ∈ Hn. Moreover, there exists an absolute constant K > 0 such that
un(t, x) = inf
a(·)∈Λn,K√n
t
E
"
ZT
t
1
n
n
X
i=1
l(xi(s), μx(s), ai(s))ds + 1
n
n
X
i=1
UT (xi(T ), μx(T ))
#
and un is the unique B-continuous solution of (1.3) in the class of functions v which satisfy for some C ≥ 0
|v(t, x) − v(t, y)| ≤ C|x − y|Hn ∀x, y ∈ Hn, t ∈ [0, T ].
Proof. We are going to combine the arguments from [78, Proposition 3.1], [89, Proposition 3.3] and [43, Proposition 4.6]. Without loss of generality, let t < s. First, note that inequality (5.13) implies that un is Lipschitz continuous with respect to the Hn
−1-norm, and hence also with respect to the Hn-norm, with Lipschitz constant C/√n. Recall

STOCHASTIC OPTIMAL CONTROL OF INTERACTING PARTICLE SYSTEMS IN HILBERT SPACES 23
the definition of Hn and Hm
n from Section 4.1. By Lemma 4.8, there is a constant K > 0 such that
Hn(x, μx, p) = HK√n
n (x, μx, p) for all |p|Hn ≤ C/√n. Now, for m > 0, we introduce the auxiliary equation
(5.14)

 
 
∂tum
n +1
2 Tr(An(x, μx)D2um
n)− 1
n
Pn
i=1⟨xi, nA∗Dxi um
n⟩
+Hm
n (x, μx, Dxium
n ) = 0, (t, x) ∈ (0, T ) × Hn
um
n (T, x) = 1
n
Pn
i=1 UT (xi, μx), x ∈ Hn,
It is well known, see [52, Theorem 3.66], that equation (5.14) has a unique B-continuous viscosity solution which is given by the value function of the associated stochastic control problem, i.e.,
um
n (t, x) = inf
a(·)∈Λn,m
t
E
"
ZT
t
1
n
n
X
i=1
l(xi(s), μx(s), ai(s))ds + 1
n
n
X
i=1
UT (xi(T ), μx(T ))
#
.
The functions um
n satisfy (5.13) and thus are Lipschitz continuous in Hn with Lipschitz constant
C/√n. If K√n ≤ m1 < m2 then unm1 and unm2 are both B-continuous viscosity solutions of (5.14)
with either Hnm1 or Hnm2 so by uniqueness we have unm1 = unm2. However it is easy to see that un = limm→∞ um
n so we obtain un = uK√n
n.
By the dynamic programming principle, we now have
un(t, x) = inf
a(·)∈Λn,K√n
t
E
"
Zs
t
1
n
n
X
i=1
l(xi(s′), μx(s′), ai(s′))ds′ + un(s, x(s))
#
.
Thus,
|un(t, x) − un(s, x)|
≤ sup
a(·)∈Λn,K√n
t
E
"
Zs
t
1
n
n
X
i=1
|l(xi(s′), μx(s′), ai(s′))|ds′ + |un(s, x(s)) − un(s, x)|
#
.
(5.15)
Due to Assumptions 4.5(i)(ii) and the fact that a(·) ∈ Λn,K√n
t , we have
1
n
n
X
i=1
|l(xi(s′), μx(s′), ai(s′))| ≤ C
n
n
X
i=1
1+ |xi(s′)|−1 + M
1 r
−1,r(μx(s′)) + |ai(s′)|2
Λ ≤ C(1 + |x(s′)|−1,r) .
Moreover, by Proposition 5.4, we have
|un(s, x(s)) − un(s, x)| ≤ C|x(s) − x|−1,r.
Altogether, we obtain from (5.15)
|un(t, x) − un(s, x)|
≤ C 1 + sup
a(·)∈Λn,K√n
t
E
"
sup
s′∈[t,s]
|x(s′)|−1,r
#!
|s − t| + sup
a(·)∈Λn,K√n
t
E
h
|x(s) − x|−1,r
i
.
Applying (5.2), (5.3) concludes the proof. Uniqueness of B-continuous viscosity solutions for our class of functions v follows since each such function is a B-continuous viscosity solution of (5.14) for a sufficiently large m and equation (5.14) has comparison principle, see [52, Theorem 3.50] or [52, Theorem 3.66]. □

24 F. DE FEO, F. GOZZI, A. ŚWIĘCH, AND L. WESSELS
5.2. Convergence of un. In this section we assume that, in addition to the assumptions of Proposition 5.5, Assumption 4.3 holds. First, we define Vn(t, μx) := un(t, x) on subsets Dn ⊂ Pr(H−1) consisting of averages of n Dirac point masses centered at xi ∈ H, i = 1, . . . , n. For R > 0, let M2
R(H) := {μ ∈ P2(H) : R
H |x|2μ(dx) ≤ R}. Note that M2
R(H) can be embedded into Pr(H−1) by extending a measure μ ∈ M2
R(H) to a measure μ ̃ ∈ P2(H−1) defined by μ ̃(B) = μ(B ∩ H), for all B in the Borel σ-algebra of H−1. Using this extension and using the same notation for the extension and the original measure, note that we have μ(H−1 \ H) = 0. For m ∈ N, we extend Vn to functions Vm
n : [0, T ] × Pr(H−1) → R via
Vm
n (t, μ) := sup
(
Vn(t, β) − Cd−1,r(μ, β) : β = 1
n
n
X
i=1
δxi, xi ∈ H, i = 1, . . . n, β ∈ M2
m+1 (H )
)
.
where the constant C is the Lipschitz constant from Proposition 5.4. Note that Vm
n (t, β) coincides
with Vn(t, β) for all (t, β) ∈ [0, T ] × M2
m+1(H) such that β is an average of Dirac measures as in
the supremum above. It is obvious from the definition of Vm
n and Proposition 5.5 that
(5.16) |Vm
n (t, μ) − Vm
n (t, β)| ≤ Cd−1,r(μ, β)
for all t ∈ [0, T ] and μ, β ∈ P2(H−1), and that for every m ∈ N there is a constant Cm > 0 such that
(5.17) |Vm
n (t, μ) − Vm
n (s, β)| ≤ Cd−1,r(μ, β) + Cm|t − s| 1
2,
for all t, s ∈ [0, T ] and μ, β ∈ M2
m+1(H). In particular, for every m ∈ N, the family (Vm
n )n∈N is
equicontinuous and bounded on the sets [0, T ] × M2
m+1 (H ).
Next, we show that the sets M2
m(H) are relatively compact in Pr(H−1), r ∈ [1, 2). It follows from
Chebyshev’s inequality and the definition of M2
m(H) that μ({|x| > R}) ≤ 1
R2
R
H |x|2μ(dx) ≤ m
R2 .
Since closed balls in H are compact in H−1 (recall that B is compact), the sets M2
m(H) are tight, for every m > 0. Since r < 2, these sets are also r-uniformly integrable, see [1, Equation (5.1.20)]. By [1, Proposition 7.1.5], this implies the relative compactness in Pr(H−1). Therefore, we can apply the Arzelà–Ascoli theorem to extract uniformly convergent subsequences. More precisely, let (n1
k)k∈N ⊂ N be a subsequence, such that Vm
n1
k
→ V1, as k → ∞,
uniformly on [0, T ] × M2
1(H) for some function V1 : [0, T ] × M2
1(H) → R. Next, let (n2
k)k∈N be a
subsequence of (n1
k)k∈N, such that V2
n2
k
→ V2, as k → ∞, uniformly on [0, T ] × M2
2(H) for some
function V2 : [0, T ] × M2
2(H) → R. Continuing in the same fashion, we extract a subsequence
(nm
k )k∈N of (nm−1
k )k∈N such that Vm
nm
k → Vm, as k → ∞, uniformly on [0, T ] × M2
m(H) for some
function Vm : [0, T ] × M2
m(H) → R.
Now, let us show that Vm coincides with Vm−1 on the set [0, T ] × M2
m−1(H). Indeed, for
μ ∈ M2
m−1(H), we have by Lemma B.1, for some subsequence (nm
kj )j∈N of (nm
k )k∈N and some points
xj = (x1, . . . , xnm
kj
) ∈ Hnm
kj , j ∈ N, that
d2 μ, μxj → 0, as j → ∞,

STOCHASTIC OPTIMAL CONTROL OF INTERACTING PARTICLE SYSTEMS IN HILBERT SPACES 25
where we recall that μxj = (1/nm
kj ) Pnm
kj
i=1 δxi. Thus, for some j0 ∈ N sufficiently large, μxj ∈ M2
m (H ),
for all j ≥ j0, and therefore Vnm
kj
, V m−1
nm
kj
, and Vm
nm
kj
all coincide at these measures. Hence
|Vm(t, μ) − Vm−1(t, μ)| ≤ Vm(t, μ) − Vm
nm
kj
t, μxj + V m−1
nm
kj
t, μxj − Vm−1(t, μ)
≤ Vm(t, μ) − Vm
nm
kj
(t, μ) + Vm
nm
kj
(t, μ) − Vm
nm
kj
t, μxj
+ V m−1
nm
kj
t, μxj − V m−1
nm
kj
(t, μ) + Vm−1
nm
kj
(t, μ) − Vm−1(t, μ) .
Thus, due to (5.17), the right-hand side converges to zero as k → ∞. Therefore, considering the diagonal sequence (nk
k)k∈N and the corresponding sequence of func
tions Vk
nk
k
, k ∈ N, we obtain a universal limit V : [0, T ] × P2(H) → R, that is, we have Vk
nk
k
→V
uniformly on [0, T ] × M2
m(H), for every m ∈ N.
Remark 5.6. Note that V can be extended continuously to [0, T ] × P2(H−1). Indeed, due to (5.16), for each t ∈ [0, T ] we can extend V(t, ·) to P2(H−1) and the extension is Lipschitz continuous in d−1,2 metric with a Lipschitz constant that is independent of t. Now, let us show that V is continuous in both variables. To this end, it is enough to show that for every (t, μ) ∈ [0, T ] × P2(H−1) and every sequence (tn) in [0, T ] such that tn → t, we have V(tn, μ) → V(t, μ). Using similar arguments as-
 in the proof of Lemma B.1 and using the density of H in H−1, there is a measure με = (1/N ) PN
i=1 δxi, where xi ∈ H, i = 1, . . . , N , such that d−1,2(μ, με) < ε. Note
that με ∈ M2
m(H) for some m = m(ε) ∈ N. Thus, we have
|V(tn, μ) − V(t, μ)| ≤ |V(tn, μ) − V(tn, με)| + |V(tn, με) − V(t, με)| + |V(t, με) − V(t, μ)|
≤ Cd−1,2(μ, με) + Cε|tn − t| 1
2 + Cd−1,2(με, μ).
Choosing ε > 0 sufficiently small, and then taking the limit n → ∞, we see that the right-hand side can be made arbitrarily small, which proves the continuity of V.
Now, we consider the lift V : [0, T ] × E → R of V given by
(5.18) V (t, X) := V(t, X#L1).
We will show that the limit V is an L-viscosity solution of equation (1.5) which is unique. Here, V is an L-viscosity solution of equation (1.5) if its lift V is a B-continuous viscosity solution of equation (3.3). The notion of B-continuous viscosity solution is recalled in Appendix A.
Theorem 5.7. Let Assumptions 4.1, 4.2, 4.3, 4.4(i)(ii)(iv), and 4.5(i)(ii)(iv) be satisfied. Then, for every set M2
m(H), m ∈ N, in P2(H), we have
nli→m∞ sup
(
un(t, x1, . . . , xn) − V t, 1
n
n
X
i=1
δxi
!
: (t, x1, . . . , xn) ∈ (0, T ] × Hn, 1
n
n
X
i=1
δxi ∈ M2
m (H )
)
= 0,
(5.19)
where V is the unique L-viscosity solution of equation (1.5) in the class of functions W whose lifts are uniformly continuous on bounded subsets of [0, T ] × E and satisfy
(5.20) |W (t, X) − W (t, Y )| ≤ C∥X − Y ∥ for all t ∈ [0, T ], X, Y ∈ E.

26 F. DE FEO, F. GOZZI, A. ŚWIĘCH, AND L. WESSELS
In particular, V = U , where U and V are given by (3.2) and (5.18), respectively.
Proof. We are first going to show that V constructed before is an L-viscosity solution of equation (1.5), i.e., V is a B-continuous viscosity solution of equation (3.3). Let us only show that V is a B-continuous viscosity subsolution. The proof that V is a B-continuous viscosity supersolution is analogous. For φ ∈ C1,2((0, T ) × E) and h ∈ C1,2((0, T ) × R), let ψ = φ + h(t, ∥X∥) be a test function as in Definition A.2, and let V − ψ have a strict, global maximum at (t, X) ∈ (0, T ) × E. We need t-
o show that
∂tψ(t, X) + 1
2 Tr(Σ(X)(Σ(X))∗D2ψ(t, X))+⟨⟨X, A∗Dφ(t, X)⟩⟩+H ̃(X, Dψ(t, X)) ≥ 0.
Recall that An
i = ( i−1
n ,i
n ), i = 1, . . . , n, and for x ∈ Hn, we have defined Xx
n := Pn
i=1 xi1An
i.
Now, for t ∈ (0, T ), x ∈ Hn and c ∈ R, we define φn(t, x) := φ(t, Xx
n ), hn(t, c) := h(t, c/√n) and
ψn(t, x) := φn(t, x) + hn(t, |x|Hn) = φ(t, Xx
n ) + h(t, ∥Xx
n ∥). Here we used that ∥Xx
n ∥ = |x|Hn/√n.
By (5.19), we have sup{|un(t, x) − V (t, Xx
n )| : t ∈ [0, T ], x ∈ Hn such that Xx
n ∈ B1(X)} → 0 as n → ∞. Thus, since the maximum of V −ψ at (t, X) is strict, there is a sequence of points (tn, x(n)) such that the functions un − ψn have a local maximum over {(s, x) ∈ [0, T ] × Hn : Xx
n ∈ B1(X)}
at these points and tn → t, Xx(n)
n → X. Indeed, notice that the local maximum is achieved since un − ψn is weakly sequentially upper semicontinuous, which is a consequence of the B-continuity of un and the B-lower semicontinuity of ψ, together with the compactness of B. Since un is a B-continuous viscosity solution of equation (1.3), we have
(5.21)
(
∂tψn(tn, x(n)) + 1
2 Tr(An(x(n), μx(n))D2ψn(tn, x(n)))
+1
n
Pn
i=1 ⟨xi(n), nA∗Dxiφn(tn, x(n))⟩ + H(xi(n), μx(n), nDxiψn(tn, x(n))) ≥ 0.
For the derivatives of φn, hn, and ψn, we have
Dxiφn(t, x) =
Z
Ω
Dφ(t, Xx
n )1An
(5.22) i dω
Dxihn(t, |x|Hn) =
Z
Ω
∂rh(t, ∥Xx
n ∥) Xx
n
∥Xnx∥ 1An
(5.23) i dω
(5.24) Dxiψn(t, x) = Dxiφn(t, x) + Dxihn(t, |x|)
⟨D2
xjxiψn(t, x)ek, el⟩ =
Z
Ω
⟨D2ψ(t, Xx
n )(ek1An
i ), el1An
(5.25) j ⟩dω,
for i, j = 1, . . . , n and k, l ∈ N, where (ek)k∈N is an orthonormal basis of H. Indeed, let fi be the i-th standard basis vector in Rn. Then, for (5.22) we have
⟨Dxiφn(t, x), ek⟩ = lεi→m0
1
ε (φn(t, x + εfiek⟩ − φn(t, x))
= lεi→m0
1
ε φ t,
n
X
j=1
xj 1An
j + εek1An
i
!
− φn t,
n
X
j=1
xj 1An
j
!!
=
Z
Ω
⟨Dφ(t, Xx
n ), ek⟩1An
i dω =
Z
Ω
Dφ(t, Xx
n )1An
i dω, ek .

STOCHASTIC OPTIMAL CONTROL OF INTERACTING PARTICLE SYSTEMS IN HILBERT SPACES 27
A similar calculation shows (5.23) and (5.24). For (5.25), we have
⟨D2
xjxiψn(t, x)ek, el⟩ = ⟨Dxj Dxiψn(t, x)ek, el⟩ = ⟨Dxj Dψ(t, Xx
n )(ek1An
i ), el⟩
= lεi→m0
1
ε Dψ(t, Xx
n + εelfj)(ek1An
i ) − Dψ(t, Xx
n )(ek1An
i)
= D2ψ(t, Xx
n )(ek1An
i )(el1An
j) =
Z
Ω
⟨D2ψ(t, Xx
n )(ek1An
i ), el1An
j ⟩dω.
Thus, a straightforward computation shows that
Tr(An(x, μx)D2ψn) = Tr(Σ(Xx
n )(Σ(Xx
n ))∗D2ψ(t, Xx
(5.26) n ))
1
n
n
X
i=1
⟨xi, nA∗Dxiφn⟩ =
n
X
i=1
*
xi,
Z
An
i
A∗Dφ(t, Xx
n )dω
+
(5.27)
1
n
n
X
i=1
(5.28) H(xi, μx, nDxiψn)
=1
n
n
X
i=1
H xi, μx, n
Z
An
i
Dφ(t, Xx
n )dω + n
Z
An
i
∂rh(t, ∥Xx
n ∥) Xx
n
∥Xnx∥ dω
!
.
Indeed, regarding (5.26), first recall that An(x, μx) is an n × n-matrix consisting of n2 traceclass operators (An)ij(x, μx) = σ(xi, μx)σ⊤(xj, μx), for i, j = 1, . . . , n. Let (ξm)m∈N denote an orthonormal basis of Ξ. Then, we have
Tr(An(x, μx)D2ψn) =
n
X
i,j=1
Tr σ(xi, μx)σ⊤(xj, μx)D2
xjxi ψn(t, x)
=
∞
X
m=1
n
X
i,j=1
⟨D2
xjxiψn(t, x)σ(xi, μx)ξm, σ(xj, μx)ξm⟩
=
∞
X
m=1
n
X
i,j=1
∞
X
k=1
⟨D2
xjxiψn(t, x)σ(xi, μx)ξm, ek⟩⟨σ(xj, μx)ξm, ek⟩
=
∞
X
m=1
n
X
i,j=1
∞
X
k,l=1
⟨D2
xjxiψn(t, x)el, ek⟩⟨σ(xi, μx)ξm, el⟩⟨σ(xj, μx)ξm, ek⟩.

28 F. DE FEO, F. GOZZI, A. ŚWIĘCH, AND L. WESSELS
Thus, using the formula for the second derivative of ψn (5.25), we obtain
Tr(An(x, μx)D2ψn)
=
∞
X
m=1
n
X
i,j=1
∞
X
k,l=1
Z
Ω
⟨D2ψ(t, Xx
n )(el1An
i ), ek1An
j ⟩dω ⟨σ(xi, μx)ξm, el⟩⟨σ(xj, μx)ξm, ek⟩
=
∞
X
m=1
n
X
i,j=1
Z
Ω
*
D2ψ(t, Xx
n)
∞
X
l=1
⟨σ(xi, μx)ξm, el⟩el1An
i
!
,
∞
X
k=1
⟨σ(xj, μx)ξm, ek⟩ek1An
j
+
dω
=
∞
X
m=1
n
X
i,j=1
Z
Ω
D
D2ψ(t, Xx
n ) σ(xi, μx)ξm1An
i , σ(xj, μx)ξm1An
j
E
dω
=
∞
X
m=1
Z
Ω
D2ψ(t, Xx
n ) (σ(Xx
n , μx)ξm) (ω), σ(Xx
n (ω), μx)ξm dω
=
∞
X
m=1
⟨⟨D2ψ(t, Xx
n ) (Σ(Xx
n )ξm) , Σ(Xx
n )ξm⟩⟩ = Tr(Σ(Xx
n )(Σ(Xx
n ))∗D2ψ(t, Xx
n )).
For (5.27), we have
1
n
n
X
i=1
⟨xi, nA∗Dxiφn(t, x)⟩ =
n
X
i=1
⟨xi, A∗
Z
Ω
Dφ(t, Xx
n )1An
i dω⟩
=
n
X
i=1
⟨xi, A∗
Z
An
i
Dφ(t, Xx
n )dω⟩ =
n
X
i=1
⟨xi,
Z
An
i
A∗Dφ(t, Xx
n )dω⟩
=
n
X
i=1
Z
An
i
⟨xi, (A∗Dφ(t, Xx
n ))(ω)⟩dω =
n
X
i=1
Z
An
i
⟨X x
n (ω), (A∗Dφ(t, Xx
n ))(ω)⟩dω
=
Z
Ω
⟨X x
n (ω), (A∗Dφ(t, Xx
n ))(ω)⟩dω = ⟨⟨Xx
n , A∗Dφ(t, Xx
n )⟩⟩,
where we used [52, Proposition 1.29] to interchange the integral and the unbounded operator. Finally, (5.28) directly follows from the derivative formulas (5.22), (5.23), and (5.24). Thus, we derive from (5.21)
(5.29)
(∂tψ(t, Xx(n)
n )+ 1
2 Tr(Σ(Xx(n)
n )(Σ(Xx(n)
n ))∗D2ψ(t, Xx(n)
n ))+⟨⟨Xx(n)
n , A∗Dφ(t, Xx(n)
n )⟩⟩
+1
n
Pn
i=1 H xi(n), μx(n), n R
An
i
Dψ(t, Xx(n)
n )dω ≥ 0.

STOCHASTIC OPTIMAL CONTROL OF INTERACTING PARTICLE SYSTEMS IN HILBERT SPACES 29
Now, let Xε, Y ε ∈ E, ε > 0, be continuous on  ̄Ω = [0, 1] such that ∥Xε − X∥ < ε and ∥Y ε − Dψ(t, X)∥ < ε. We note that
1
n
n
X
i=1
H xi(n), μx(n), n
Z
An
i
Dψ(t, Xx(n)
n )dω ̃
!
−
Z
Ω
H(Xε(ω), Xε
# L1, Y ε(ω))dω
≤1
n
n
X
i=1
H xi(n), μx(n), n
Z
An
i
Dψ(t, Xx(n)
n )dω ̃
!
−1
n
n
X
i=1
H xi(n), μx(n), n
Z
An
i
Y εdω ̃
!
+1
n
n
X
i=1
H xi(n), μx(n), n
Z
An
i
Y εdω ̃
!
−
n
X
i=1
Z
An
i
H Xε(ω), Xε
# L1, n
Z
An
i
Y εdω ̃
!
dω
+
n
X
i=1
Z
An
i
H Xε(ω), Xε
# L1, n
Z
An
i
Y εdω ̃
!
dω −
Z
Ω
H(Xε(ω), Xε
# L1, Y ε(ω))dω .
(5.30)
Next, we estimate the terms on the right-hand side one by one. For the first term, we have
1
n
n
X
i=1
H xi(n), μx(n), n
Z
An
i
Dψ(t, Xx(n)
n )dω ̃
!
−1
n
n
X
i=1
H xi(n), μx(n), n
Z
An
i
Y εdω ̃
!
≤C


1
n
n
X
i=1

1 + |xi(n)|2 + M
2
rr (μx(n)) + n
Z
An
i
Dψ(t, Xx(n)
n )dω
2
+n
Z
An
i
Pε(ω)dω
2




1 2
×


1
n
n
X
i=1
n
Z
An
i
Dψ(t, Xx(n)
n ) − Y ε dω
2


1 2
.
(5.31)
Note that all the terms in the first factor can easily be bounded uniformly in n. Indeed, for the first and second term, we note that
M
2
rr (μx(n)) ≤ 1
n
n
X
i=1
|xi(n)|2 = ∥Xx(n)
n ∥2.
For the third term, we have
1
n
n
X
i=1
n
Z
An
i
Dψ(t, Xx(n)
n )dω
2
≤1
n
n
X
i=1
n
Z
An
i
|Dψ(t, Xx(n)
n )|2dω = ∥Dψ(t, Xx(n)
n )∥2,
which converges to ∥Dψ(t, X)∥2 as n → ∞. Finally, for the fourth term, we have
1
n
n
X
i=1
n
Z
An
i
Pε(ω)dω
2
≤1
n
n
X
i=1
n
Z
An
i
|Pε(ω)|2dω = ∥Pε∥2.
For the second factor on the right-hand side of (5.31), we have
1
n
n
X
i=1
n
Z
An
i
Dψ(t, Xx(n)
n ) − Y ε dω
2
≤
Z
Ω
Dψ(t, Xx(n)
n ) − Y ε 2 dω ≤ ∥Dψ(t, Xx(n)
n ) − Y ε∥2,

30 F. DE FEO, F. GOZZI, A. ŚWIĘCH, AND L. WESSELS
which converges to ∥Dψ(t, X) − Y ε∥2 as n → ∞. For the second term on the right-hand side of (5.30), we have
1
n
n
X
i=1
H xi(n), μx(n), n
Z
An
i
Y εdω ̃
!
−
n
X
i=1
Z
An
i
H Xε(ω), Xε
# L1, n
Z
An
i
Y εdω ̃
!
dω
≤C
n
X
i=1
Z
An
i
1+ n
Z
An
i
Y εdω ̃
!
|xi(n) − Xε(ω)| + dr(μx(n), Xε
# L1) dω
≤C


n
X
i=1
Z
An
i

1 + n
Z
An
i
Y εdω ̃
2

 dω


1
2n
X
i=1
Z
An
i
|xi(n) − Xε(ω)|2 + d2
r(μx(n), Xε
# L1) dω
!1
2
.
Again, the first factor can easily be bounded uniformly in n. Indeed, we have
n
X
i=1
Z
An
i
n
Z
An
i
Y εdω ̃
2
dω ≤ 1
n
n
X
i=1
n
Z
An
i
|Y ε(ω ̃)|2dω ̃ = ∥Y ε∥2.
For the terms in the second factor, we note that
n
X
i=1
Z
An
i
|xi(n) − Xε(ω)|2dω =
n
X
i=1
Z
An
i
|X x(n)
n − Xε|2dω = ∥Xx(n)
n − Xε∥2,
as well as d2
r(μx(n), Xε
# L1) ≤ ∥Xx(n)
n − Xε∥2. Moreover, ∥Xx(n)
n − Xε∥ converges to ∥X − Xε∥. Finally, for the third term on the right-hand side of (5.30), we have
n
X
i=1
Z
An
i
H Xε(ω), Xε
# L1, n
Z
An
i
Y εdω ̃
!
dω −
Z
Ω
H(Xε(ω), Xε
# L1, Y ε(ω))dω
≤C
n
X
i=1
Z
An
i
1 + Xε(ω) + M 1
r (Xε
# L1) + n
Z
An
i
Y εdω ̃ + |Y ε(ω)|
!
n
Z
An
i
Y εdω ̃ − Y ε(ω) dω
≤C


n
X
i=1
Z
An
i

1 + |Xε(ω)|2 + M
2
rr (X ε
# L1) + n
Z
An
i
Y εdω ̃
2
+ |Y ε(ω)|2

 dω


1 2
×


n
X
i=1
Z
An
i
n
Z
An
i
Y εdω ̃ − Y ε(ω)
2
dω


1 2
.
The terms in the first factor can be bounded uniformly in n using the same arguments as before. The second factor tends to zero as n → ∞ due to the uniform continuity of Y ε. Altogether, taking the limit n → ∞ in (5.29), we obtain
∂tψ(t, X) + 1
2 Tr(Σ(X)(Σ(X))∗D2ψ(t, X))+⟨⟨X, A∗Dφ(t, X)⟩⟩+H ̃ (Xε, Y ε) ≥ ρ(ε),
where ρ(ε) → 0 as ε → 0. Thus, taking ε → 0 concludes the proof that V is an L-viscosity solution of equation (1.5). For further details, see also the proof of [89, Theorem 3.4].

STOCHASTIC OPTIMAL CONTROL OF INTERACTING PARTICLE SYSTEMS IN HILBERT SPACES 31
Regarding uniqueness, we notice that if W is another L-viscosity solutions of (1.5) whose lift W satisfies (5.20), then V and W are B-continuous viscosity solutions of equation (5.32)
(
∂tW + 1
2 Tr(Σ(X)(Σ(X))∗D2W )+⟨⟨AX, DW ⟩⟩+H ̃K(X, DW ) = 0, (t, X) ∈ (0, T ) × E
W (T, X) = UT (X), X ∈ E,
for some K > 0, where
H ̃K(X, P ) := inf
Q∈E ,∥Q∥Λ ≤K
{⟨⟨F (X, Q), P ⟩⟩ + L(X, Q)} .
Thus we can use [52, Theorem 3.66] to claim that V = W . We also notice that by Proposition 6.3, U is a B-continuous viscosity solution of (5.32) and hence U = V . Finally, the convergence of the whole sequence Vn follows from the fact that the same arguments can be used to prove that we can choose a convergent subsequence from every subsequence of Vn and show that the limit is an L-viscosity solutions of (1.5), hence it is equal to V. □
6. C1,1 Regularity of the Value Function of the Lifted Control Problem
6.1. Estimates for the Lifted Control Problem.
Lemma 6.1. Let Assumptions 4.1, 4.2 and 4.4(i)(ii)(iv) be satisfied. Then, for every X ∈ E, a(·) ∈ Λt, (3.1) has a unique mild solution X(·) ∈ L2([t, T ] × Ω′; E) which is progressively measurable and has continuous trajectories. Let X(·), X0(·), X1(·) be the solutions of equation (3.1) with initial conditions X, X0, X1 ∈ E, and controls a(·), a0(·), a1(·) ∈ Λt, respectively. Then, there is a constant C ≥ 0 such that
E
" Z
Ω
sup
s∈[t,T ]
|X(s, ω)|2
−1dω
#
≤ C 1 + ∥X∥2
−1 + ∥a(·)∥2
M 2(t,T ;E)
(6.1)
E
" Z
Ω
sup
s∈[t,T ]
|X(s, ω)|2dω
#
≤ C 1 + ∥X∥2 + ∥a(·)∥2
M 2(t,T ;E)
(6.2)
E
" Z
Ω
sup
s′∈[t,s]
|X(s′, ω) − X(ω)|2
−1dω
#
≤ CE
Zs
t
∥a(s′)∥2
(6.3) Λds′ + C(1 + ∥X∥2)(s − t)
E
" Z
Ω
sup
s∈[t,T ]
|X1(s, ω) − X0(s, ω)|2
−1dω
#
≤ C ∥X1 − X0∥2
−1 + ∥a1(·) − a0(·)∥2
M 2(t,T ;E)
(6.4)
for all s ∈ [t, T ], X, X0, X1 ∈ E, and a(·), a1(·), a2(·) ∈ Λt. Moreover, if a(·) is bounded, then E[sups∈[t,T ] ∥X(s)∥k] < ∞ for all k ≥ 1.
Proof. As in the proof of Proposition 5.3, the existence of a unique mild solution follows e.g. from [26, Theorem 6.5, page 162], the continuity of paths follows from the continuity of paths of the stochastic convolution, see [26, Theorem 6.2, page 159] or [52, Theorem 1.112], and the moment estimates when a(·) follow for instance from [52, Theorem 1.130]. Similarly to the proof of Proposition 5.3, in the proof we will assume that all the terms are well defined and have sufficient integrability to-
 apply the necessary theorems. Since X(·) is a solution of equation (3.1), we have
X(s′) = e(s′−t)AX +
Z s′
t
e(s′−t′)AF (X(t′), a(t′))dt′ +
Z s′
t
e(s′−t′)AΣ(X(t′))dW (t′).

32 F. DE FEO, F. GOZZI, A. ŚWIĘCH, AND L. WESSELS
We note that, since E and L2(Ω; Λ) are separable, for a.e. ω, the processes X(·, ω) and a(·, ω) are progressively measurable. We have by (4.5)
X(s′, ω) = e(s′−t)AX(ω) +
Z s′
t
e(s′−t′)Af (X(t′, ω), X(t′)#L1, a(t′, ω))dt′
+
Z s′
t
e(s′−t′)Aσ(X(t′, ω), X(t′)#L1)dW (t′)
for almost every ω ∈ Ω. Note that we can pull the ω inside the stochastic integral since the Wiener process (W (s))s∈[t,T ] does not depend on ω ∈ Ω. Therefore, for almost every ω ∈ Ω, X(·, ω) is a mild solution of the SDE
(
dX(s, ω) = [AX(s, ω) + f (X(s, ω), X(s)#L1, a(s, ω))]ds + σ(X(s, ω), X(s)#L1)dW (s)
X(t, ω) = X(ω).
Here, the law X(s)#L1 is the law of the solution of equation (3.1). Thus, by [52, Proposition 1.164] (recall Remark 5.2) and Assumption 4.2, we obtain
|X(s′, ω)|2
−1
≤ |X(ω)|2
−1 + 2c0
Z s′
t
|X(t′, ω)|2
−1dt′ + 2
Z s′
t
⟨X(t′, ω), f (X(t′, ω), X(t′)#L1, a(t′, ω))⟩−1dt′
+
Z s′
t
σ(X(t′, ω), X(t′)#L1) 2
L2(Ξ,H−1) dt′ + 2
Z s′
t
⟨X(t′, ω), σ(X(t′, ω), X(t′)#L1)dW (t′)⟩−1.
(6.5)
For the term involving f , using Assumption 4.4(ii), we obtain
Z s′
t
⟨X(t′, ω), f (X(t′, ω), X(t′)#L1, a(t′, ω))⟩−1dt′
≤C
Z s′
t
|X(t′, ω)|−1 1 + |X(t′, ω)|−1 + M
1 r
−1,r(X(t′)#L1) + |a(t′, ω)|Λ dt′
≤C 1+
Z s′
t
|X(t′, ω)|2
−1dt′ +
Z s′
t
M
2 r
−1,r(X(t′)#L1)dt′ +
Z s′
t
|a(t′, ω)|2
Λdt′
!
.
Moreover, by Assumption 4.4(iv), we have
Z s′
t
σ(X(t′, ω), X(t′)#L1) 2
L2(Ξ,H−1) dt′
≤C 1+
Z s′
t
|X(t′, ω)|2
−1dt′ +
Z s′
t
M
2 r
−1,r (X (t′ )# L1 )dt′
!
.
(6.6)

STOCHASTIC OPTIMAL CONTROL OF INTERACTING PARTICLE SYSTEMS IN HILBERT SPACES 33
For the stochastic integral in (6.5), we obtain using Burkholder–Davis–Gundy inequality
E
"
sup
s′∈[t,s]
Z s′
t
⟨X(t′, ω), σ(X(t′, ω), X(t′)#L1)dW (t′)⟩−1
#
≤E
"
Zs
t
|X(t′, ω)|2
−1|σ(X(t′, ω), X(t′)#L1)|2
L2(Ξ,H−1)dt′
1 2
#
≤1
4E
"
sup
t′∈[t,s]
|X(t′, ω)|2
−1
#
+ CE
Zs
t
|σ(X(t′, ω), X(t′)#L1)|2
L2(Ξ,H−1)dt′ ,
For the last term in the previous inequality, we use the same estimate as in (6.6). Moreover, we note that
M
2 r
−1,r(X(t′)#L1) =
Z
H−1
|x|r
−1 (X (t′ )# L1 )(dx)
2 r
=
Z
Ω
|X(t′, ω)|r
−1dω
2 r
≤
Z
Ω
|X(t′, ω)|2
−1dω.
Thus, taking the supremum over s′ ∈ [t, s] in equation (6.5), taking the expectation, and integrating over ω ∈ Ω, we obtain
E
" Z
Ω
sup
s′∈[t,s]
|X(s′, ω)|2
−1dω
#
≤ C 1 + ∥X∥2
−1 +
Zs
t
E
" Z
Ω
sup
t′∈[t,s′]
|X(t′, ω)|2
−1dω
#
ds′ + E
Zs
t
∥a(t′)∥2
Λdt′
!
.
Now, (6.1) follows from Grönwall’s inequality. The proofs of (6.2), (6.3), (6.4) follow along the same lines as the proofs of (6.1) and Proposition 5.3.
□
For the following lemma, we are going to use the same notation as in the previous lemma. Moreover, for λ ∈ [0, 1], s ∈ [t, T ], we set
aλ(s) := λa1(s) + (1 − λ)a0(s), Xλ := λX1 + (1 − λ)X0
Xλ(s) := λX1(s) + (1 − λ)X0(s), Xλ(s) := X(s; Xλ, aλ(·)),
where X(s; Xλ, aλ(·)) denotes the solution of equation (3.1) at time s with initial condition Xλ and control aλ(·).
Lemma 6.2. Let Assumptions 4.1 and 4.2 be satisfied. Moreover, let Assumption 4.4 be satisfied with r = 1. Then, there is a constant C ≥ 0, such that
Z
Ω
E
"
sup
s∈[t,T ]
|Xλ(s, ω) − Xλ(s, ω)|−1
#
dω ≤ Cλ(1 − λ) ∥X1 − X0∥2
−1 + ∥a0(·) − a1(·)∥2
M 2(t,T ;E)
for all λ ∈ [0, 1], X0, X1 ∈ E, and a0(·), a1(·) ∈ Λt.
Proof. We remind that as before, in the proof we skip some technical details and assume that all the terms are well defined and have sufficient integrability to apply the necessary theorems. Let
X ̄0(θ) = Xλ(s) + θλ(X0(s) − X1(s)), a ̄0(θ) = aλ(s) + θλ(a0(s) − a1(s))
X ̄1(θ) = Xλ(s) + θ(1 − λ)(X1(s) − X0(s)), a ̄1(θ) = aλ(s) + θ(1 − λ)(a1(s) − a0(s)).

34 F. DE FEO, F. GOZZI, A. ŚWIĘCH, AND L. WESSELS
By Assumption 4.4(iii), for every s ∈ [t, T ] and ω ∈ Ω, we have
|λf ̃(X1(s, ω), X1(s), a1(s, ω)) + (1 − λ)f ̃(X0(s, ω), X0(s), a0(s, ω)) − f ̃(Xλ(s, ω), Xλ(s), aλ(s, ω))|−1
≤ λ(1 − λ)
Z1
0
(Dxf ̃(X ̄1(θ, ω), X ̄1(θ), a ̄1(θ, ω)) − Dxf ̃(X ̄0(θ, ω), X ̄0(θ), a ̄0(θ, ω)))(X1(s, ω) − X0(s, ω))
−1
dθ
+ λ(1 − λ)
Z1
0
(DX f ̃(X ̄1(θ, ω), X ̄1(θ), a ̄1(θ, ω)) − DX f ̃(X ̄0(θ, ω), X ̄0(θ), a ̄0(θ, ω)))(X1(s) − X0(s))
−1
dθ
+ λ(1 − λ)
Z1
0
(Daf ̃(X ̄1(θ, ω), X ̄1(θ), a ̄1(θ, ω)) − Daf ̃(X ̄0(θ, ω), X ̄0(θ), a ̄0(θ, ω)))(a1(s, ω) − a0(s, ω))
−1
dθ
≤ Cλ(1 − λ) |X1(s, ω) − X0(s, ω)|2
−1 + ∥X1(s) − X0(s)∥2
−1 + |a1(s, ω) − a0(s, ω)|2
Λ
(6.7)
and similarly by Assumption 4.4(v)
|λσ ̃(X1(s, ω), X1(s)) + (1 − λ)σ ̃(X0(s, ω), X0(s)) − σ ̃(Xλ(s, ω), Xλ(s))|L2(Ξ,H−1)
≤ Cλ(1 − λ) |X1(s, ω) − X0(s, ω)|2
−1 + ∥X1(s) − X0(s)∥2
−1 .
(6.8)
As in the proof of Lemma 6.1, we see that for almost every ω ∈ Ω, (Xλ(s, ω))s∈[t,T ] is a mild solution of
(
dXλ(s, ω) = [AXλ(s, ω) + f ̃(Xλ(s, ω), Xλ(s), aλ(s, ω))]ds + σ ̃(Xλ(s, ω), Xλ(s))dW (s)
Xλ(t, ω) = Xλ(ω)
and (Xλ(s, ω))s∈[t,T ] is a mild solution of

 
 
dXλ(s, ω) = [AXλ(s, ω) + λf ̃(X1(s, ω), X1(s), a1(s, ω) + (1 − λ)f ̃(X0(s, ω), X0(s), a0(s, ω))]ds
+[λσ ̃(X1(s, ω), X1(s)) + (1 − λ)σ ̃(X0(s, ω), X0(s))]dW (s)
Xλ(t, ω) = Xλ(ω).
Thus, applying [52, Proposition 1.164] (recall Remark 5.2) and Assumption 4.2 yields
|Xλ(s′, ω) − Xλ(s′, ω)|2
−1 ≤ 2c0
Z s′
t
|Xλ(t′, ω) − Xλ(t′, ω)|2
−1dt′
+2
Z s′
t
λf ̃(X1(t′, ω), X1(t′), a1(t′)) + (1 − λ)f ̃(X0(t′, ω), X0(t′), a0(t′))
− f ̃(Xλ(t′, ω), Xλ(t′), aλ(t′)), Xλ(t′, ω) − Xλ(t′, ω) −1dt′
+2
Z s′
t
⟨f ̃(Xλ(t′, ω), Xλ(t′), aλ(t′)) − f ̃(Xλ(t′, ω), Xλ(t′), aλ(t′)), Xλ(t′, ω) − Xλ(t′, ω)⟩−1dt′
+
Z s′
t
|λσ ̃(X1(t′, ω), X1(t′)) + (1 − λ)σ ̃(X0(t′, ω), X0(t′)) − σ ̃(Xλ(t′, ω), Xλ(t′))|2
L2(Ξ,H−1)dt′
+
Z s′
t
|σ ̃(Xλ(t′, ω), Xλ(t′)) − σ ̃(Xλ(t′, ω), Xλ(t′))|2
L2(Ξ,H−1)dt′
+2
Z s′
t
⟨Xλ(t′, ω) − Xλ(t′, ω), λσ ̃(X1(t′, ω), X1(t′))
+ (1 − λ)σ ̃(X0(t′, ω), X0(t′)) − σ ̃(Xλ(t′, ω), Xλ(t′)) dW (t′)⟩−1
+2
Z s′
t
⟨Xλ(t′, ω) − Xλ(t′, ω), (σ ̃(Xλ(t′, ω), Xλ(t′)) − σ ̃(Xλ(t′, ω), Xλ(t′)))dW (t′)⟩−1.
(6.9)

STOCHASTIC OPTIMAL CONTROL OF INTERACTING PARTICLE SYSTEMS IN HILBERT SPACES 35
For the first term on the right-hand side of this inequality, we have
sup
s′∈[t,s]
Z s′
t
|Xλ(t′, ω) − Xλ(t′, ω)|2
−1dt′
≤ ε sup
t′∈[t,s]
|Xλ(t′, ω) − Xλ(t′, ω)|2
−1 + Cε
Zs
t
sup
t′∈[t,s]
|Xλ(t′, ω) − Xλ(t′, ω)|−1ds
!2
for all ε > 0 and some constant Cε ≥ 0 that depends on ε. For the second term, we note that
sup
s′∈[t,s]
Z s′
t
λf ̃(X1(t′, ω), X1(t′), a1(t′)) + (1 − λ)f ̃(X0(t′, ω), X0(t′), a0(t′))
− f ̃(Xλ(t′, ω), Xλ(t′), aλ(t′)), Xλ(t′, ω) − Xλ(t′, ω) −1dt′
≤ ε sup
t′∈[t,s]
Xλ(t′, ω) − Xλ(t′, ω) 2
−1
+ Cε sup
t′∈[t,s]
λf ̃(X1(t′, ω), X1(t′), a1(t′)) + (1 − λ)f ̃(X0(t′, ω), X0(t′), a0(t′))
− f ̃(Xλ(t′, ω), Xλ(t′), aλ(t′)) 2
−1.
Thus, using (6.7), we obtain
sup
s′∈[t,s]
Z s′
t
λf ̃(X1(t′, ω), X1(t′), a1(t′)) + (1 − λ)f ̃(X0(t′, ω), X0(t′), a0(t′))
− f ̃(Xλ(t′, ω), Xλ(t′), aλ(t′)), Xλ(t′, ω) − Xλ(t′, ω) −1dt′
≤ ε sup
t′∈[t,s]
Xλ(t′, ω) − Xλ(t′, ω) 2
−1
+ C2
ε λ2(1 − λ)2 sup
t′∈[t,s]
|X1(t′, ω) − X0(t′, ω)|4
−1 + ∥X1(t′) − X0(t′)∥4
−1
+ C2
ε λ2(1 − λ)2
Zs
t
|a1(t′, ω) − a0(t′, ω)|2
Λdt′
2
.
Using Assumption 4.4(i), and then taking the absolute value and the supremum, we obtain for the third term on the right-hand side of inequality (6.9)
sup
s′∈[t,s]
Z s′
t
⟨f ̃(Xλ(t′, ω), Xλ(t′), aλ(t′)) − f ̃(Xλ(t′, ω), Xλ(t′), aλ(t′)), Xλ(t′, ω) − Xλ(t′, ω)⟩−1dt′
≤ ε sup
s′∈[t,s]
|Xλ(t′, ω) − Xλ(t′, ω)|2
−1
+ Cε
Zs
t
|Xλ(t′, ω) − Xλ(t′, ω)|−1 + d−1,1(Xλ(t′)#L1, Xλ(t′)#L1) dt′
2
,

36 F. DE FEO, F. GOZZI, A. ŚWIĘCH, AND L. WESSELS
for all ε > 0. For the fourth term on the right-hand side of inequality (6.9), using (6.8), we obtain
Z s′
t
|λσ ̃(X1(t′, ω), X1(t′)) + (1 − λ)σ ̃(X0(t′, ω), X0(t′)) − σ ̃(Xλ(t′, ω), Xλ(t′))|2
L2(Ξ,H−1)dt′
≤ C2λ2(1 − λ)2 sup
t′∈[t,s]
|X1(t′, ω) − X0(t′, ω)|4
−1 + ∥X1(t′) − X0(t′)∥4
−1
(6.10)
Moreover, by Assumption 4.4(iv), we have for the fifth term on the right-hand side of inequality (6.9)
sup
s′∈[t,s]
Z s′
t
|σ ̃(Xλ(t′, ω), Xλ(t′)) − σ ̃(Xλ(t′, ω), Xλ(t′))|2
L2(Ξ,H−1)dt′
≤
Zs
t
|Xλ(t′, ω) − Xλ(t′, ω)|2
−1 + d2
−1,1(Xλ(t′)#L1, Xλ(t′)#L1) dt′.
Next, for the sixth term on the right-hand side of inequality (6.9), we obtain using BurkholderDavis–Gundy inequality
E sup
s′∈[t,s]
Z s′
t
⟨Xλ(t′, ω) − Xλ(t′, ω),
(λσ ̃(X1(t′, ω), X1(t′)) + (1 − λ)σ ̃(X0(t′, ω), X0(t′)) − σ ̃(Xλ(t′, ω), Xλ(t′)))dW (t′)⟩−1
1 2
≤ CE
Zs
t
|Xλ(t′, ω) − Xλ(t′, ω)|2
−1
|λσ ̃(X1(t′, ω), X1(t′)) + (1 − λ)σ ̃(X0(t′, ω), X0(t′)) − σ ̃(Xλ(t′, ω), Xλ(t′))|2
L2(Ξ,H−1)dt′
1 4
≤ εE
"
sup
t′∈[t,s]
|Xλ(t′, ω) − Xλ(t′, ω)|−1
#
+ CεE
"
Zs
t
|λσ ̃(X1(t′, ω), X1(t′))
+ (1 − λ)σ ̃(X0(t′, ω), X0(t′)) − σ ̃(Xλ(t′, ω), Xλ(t′))|2
L2(Ξ,H−1)dt′
!1
2#
,
for all ε > 0. The second term on the right-hand side of this inequality can be estimated as in (6.10). Finally, for the last term in inequality (6.9), we obtain again using Burkholder–DavisGundy inequality
E

 sup
s′∈[t,s]
Z s′
t
⟨Xλ(t′, ω) − Xλ(t′, ω), (σ ̃(Xλ(t′, ω), Xλ(t′)) − σ ̃(Xλ(t′, ω), Xλ(t′)))dW (t′)⟩−1
1 2


≤ εE
"
sup
t′∈[t,s]
|Xλ(t′, ω) − Xλ(t′, ω)|−1
#
+ CεE
"
Zs
t
|Xλ(t′, ω) − Xλ(t′, ω)|2
−1 + d2
−1,1(Xλ(t′)#L1, Xλ(t′)#L1) dt′
1 2
#
,

STOCHASTIC OPTIMAL CONTROL OF INTERACTING PARTICLE SYSTEMS IN HILBERT SPACES 37
for all ε > 0. We note that
Zs
t
d2
−1,1(Xλ(t′)#L1, Xλ(t′)#L1)dt′ ≤
Zs
t
Z
Ω
|Xλ(t′, ω) − Xλ(t′, ω)|2
−1dωdt′
≤ε
Z
Ω
sup
t′∈[t,s]
|Xλ(t′, ω) − Xλ(t′, ω)|−1dω
!2
+ Cε
Z
Ω
Zs
t
|Xλ(t′, ω) − Xλ(t′, ω)|−1dt′dω
2
,
for all ε > 0. Thus, choosing ε > 0 sufficiently small, taking the square root, the supremum over s′ ∈ [t, s], the expectation, and integrating over ω ∈ Ω in (6.9) we obtain
Z
Ω
E
"
sup
s′∈[t,s]
|Xλ(s′, ω) − Xλ(s′, ω)|−1
#
dω
≤ Cε
Zs
t
Z
Ω
E
"
sup
t′∈[t,s′]
|Xλ(t′, ω) − Xλ(t′, ω)|−1ds′
#
dω
+ Cελ(1 − λ)
Z
Ω
E
"
sup
t′∈[t,s]
|X1(t′, ω) − X0(t′, ω)|2
−1 + ∥X1(t′) − X0(t′)∥2
−1
#
dω
+ Cελ(1 − λ)
Z
Ω
E
Zs
t
|a1(t′, ω) − a0(t′, ω)|2
Λdt′ dω.
Noting that
E
"
sup
t′∈[t,s]
∥X1(t′) − X0(t′)∥2
−1
#
≤
Z
Ω
E
"
sup
t′∈[t,s]
|X1(t′, ω) − X0(t′, ω)|2
−1
#
dω
and applying Grönwall’s inequality and Lemma 6.1 concludes the proof. □
6.2. C1,1 Regularity of the Value Function.
Proposition 6.3. Let Assumptions 4.1, 4.2, 4.4(i)(ii)(iv) and 4.5(i)(ii)(iv) be satisfied. Then, there is a constant C ≥ 0, depending only on the Lipschitz constants of b, σ, l and UT as well as on T , such that
|U (t, X) − U (t, Y )| ≤ C∥X − Y ∥−1
for all t ∈ [0, T ] and X, Y ∈ E. Moreover, there is a constant K > 0 such that for all t ∈ [0, T ], X ∈ E,
U (t, X) = inf
a(·)∈ΛtK
J(t, X; a(·)),
where ΛK
t = {a(·) ∈ Λt : a(·) has values in BK(0) in E}, U is uniformly continuous on bounded subsets of [0, T ] × E, and U is the unique B-continuous viscosity solution of equation (3.3) as well as equation (5.32). Here, uniqueness holds in the class of functions W which satisfy for some C ≥ 0,
|W (t, X) − W (t, Y )| ≤ C∥X − Y ∥, for all t ∈ [0, T ], X, Y ∈ E.
Proof. The proof follows using the same arguments as the proof of Proposition 5.5 if we use estimates of Lemma 6.1. Uniqueness of B-continuous viscosity solutions is showed in the proof of Theorem 5.7. □

38 F. DE FEO, F. GOZZI, A. ŚWIĘCH, AND L. WESSELS
Proposition 6.4 (Semiconcavity: Case 1). Let Assumptions 4.1 and 4.2 be satisfied. Moreover, let Assumptions 4.4 and 4.5 be satisfied with r = 1. Then, for every t ∈ [0, T ], U (t, ·) is semiconcave with respect to the E−1-norm, i.e., there is a constant C ≥ 0 such that
λU (t, X) + (1 − λ)U (t, Y ) − U (t, λX + (1 − λ)Y ) ≤ Cλ(1 − λ)∥X − Y ∥2
−1
for all λ ∈ [0, 1] and X, Y ∈ E. Moreover, the semiconcavity constant C is independent of t ∈ [0, T ].
Proof. The proof uses the same techniques as the proof of semiconcavity in [78, Proposition 6.1(ii)] and [43, Theorems 3.11, 5.10], using Lemmas 6.1 and 6.2. □
Proposition 6.5 (Semiconcavity: Case 2). Let Assumptions 4.1, 4.2, 4.5 and 4.7 be satisfied. Then, for every t ∈ [0, T ], U (t, ·) is semiconcave with respect to the E−1-norm with the semiconcavity constant independent of t ∈ [0, T ].
Proof. The proof uses again the same techniques as the corresponding result in [78, Proposition 6.2]. We note that now we have Xλ = Xλ, so Lemma 6.2 is not needed and we do not need r = 1. □
Proposition 6.6 (Semiconvexity: Case 1). Let Assumptions 4.1, 4.2 and 4.6 be satisfied. Moreover, let Assumptions 4.4 and 4.5 be satisfied with r = 1. There is a constant ν0 ≥ 0 such that if ν in Assumption 4.6 satisfies ν ≥ ν0, then, for every t ∈ [0, T ], U (t, ·) is semiconvex with respect to the E−1-norm, i.e., there is a constant C ≥ 0 such that
λU (t, X) + (1 − λ)U (t, Y ) − U (t, λX + (1 − λ)Y ) ≥ −Cλ(1 − λ)∥X − Y ∥2
−1
for all λ ∈ [0, 1] and X, Y ∈ E. Moreover, the semiconvexity constant C is independent of t ∈ [0, T ].
Proof. The proof follows along the same lines as the proofs of the corresponding results [78, Proposition 6.1(iii)] and [43, Theorems 3.13, 5.12], now using Lemmas 6.1 and 6.2. □
Proposition 6.7 (Semiconvexity: Case 2). Let Assumptions 4.1, 4.2, 4.5 and 4.7 be satisfied. Then, for every t ∈ [0, T ], U (t, ·) is convex.
Proof. The proof again repeats the steps of the proof of the corresponding result in [78, Proposition 6.2]. We note again that we have Xλ = Xλ, so Lemma 6.2 is not needed and we do not need r = 1. □
We remark that, since for fixed t ∈ [0, T ], the value function U (t, ·) is uniformly Lipschitz, semiconcave and semiconvex with respect to the E−1-norm, it extends to a function on E−1 which is in C1,1(E−1), see [72]. Thus we have the following theorem.
Theorem 6.8. If either the assumptions of Propositions 6.4 and 6.6 are satisfied, or the assumptions of Propositions 6.5 and 6.7 are satisfied, then U (t, ·) ∈ C1,1(E−1), for all t ∈ [0, T ] and the Lipschitz constant of D−1U (t, ·) is independent of t.
7. Projection of V onto un
In this section, generalizing the finite-dimensional result [89, Theorem 5.4] (i.e. H = Rd) to the Hilbert space case, we prove in Theorem 7.1 that, under suitable regularity of the value function U ≡ V of the lifted limit control problem, then it projects onto the value function un of the particle system control problem. The proof of the result will require a careful adaptation of the arguments in [89] to the infinite-dimensional case on H.

STOCHASTIC OPTIMAL CONTROL OF INTERACTING PARTICLE SYSTEMS IN HILBERT SPACES 39
For n ∈ N, i ∈ {1, . . . , n}, recall that An
i = i−1
n ,i
n ⊂ Ω, Xx
n = Pn
i=1 xi1An
i , and define
Vn : [0, T ] × Hn → R, Vn(t, x) := V (t, Xx
n ) = V t,
n
X
i=1
xi1An
i
!
.
Theorem 7.1. Let Assumptions 4.1, 4.2, 4.3, 4.4(i)(ii)(iv), and 4.5(i)(ii)(iv) be satisfied. Moreover, assume that D−1V (t, ·) : E−1 → E−1 is uniformly continuous, uniformly in t ∈ [0, T ]. Then, for all (t, x) ∈ [0, T ] × Hn, it holds Vn(t, x) = un(t, x).
Notice that if the assumptions of Theorem 5.7 (which are included in Theorem 7.1) and the assumptions of Theorem 6.8 are satisfied, D−1V (= D−1U ) satisfies the above continuity requirement.
7.1. Vn ≤ un. In this subsection, we are going to show the first inequality. In order to prove it, we first show the following result.
Lemma 7.2. Let Assumptions 4.1, 4.4(i)(ii)(iv), and 4.5(i)(iv), be satisfied. Then:
(1) Xn(s, ω) = Xx(s)
n (ω), for a.e. ω ∈ Ω, where Xn(·) is the solution of the lifted state
equation (3.1) with initial condition Xx
n and control an(·) := Pn
i=1 ai(·)1An
i and Xx(s)
n :=
Pn
i=1 xi(s)1An
i is the lift of x(s).
(2) Jn(t, x; a(·)) = J(t, Xx
n ; an(·)), for every control a(·) ∈ An
t.
Proof. (1) Note that P-a.s., for every s ∈ [t, T ],
Xn(s) = eA(s−t)
n
X
i=1
xi1An
i+
Zs
t
eA(s−t−r)F Xn(r),
n
X
i=1
ai(r)1An
i
!
dr+
Zs
t
eA(s−t−r)Σ(Xn(r))dW (r);
therefore, for almost every ω ∈ An
i = ( i−1
n ,i
n ), using (4.5), we have
Xn(s, ω) = eA(s−t)xi+
Zs
t
eA(s−t−r)f (Xn(r, ω), Xn(r)#L1, ai(r))dr+
Zs
t
eA(s−t−r)σ(Xn(r, ω), Xn(r)#L1)dW (r).
On the other hand, as in (2.3), we have μx(s) = (Xx(s)
n )#L1, so that Xx(s)
n (ω), ω ∈ An
i , also satisfies the previous equation. Therefore, by uniqueness of mild solutions, we have the claim. (2) Using (1), we have
J(t, Xx
n ; an(·)) = E
ZT
t
L(Xn(s), an(s))ds + UT (Xn(T ))
=E
ZT
t
L(X x(s)
n , an(s))ds + UT (Xx(T )
n)
=E
ZT
t
Z
Ω
l(X x(s)
n (ω), (Xx(s)
n )#L1, an(s, ω))dωds + UT (Xx(T )
n)
=E
"
ZT
t
1
n
n
X
i=1
l(xi(s), μx(s), ai(s))ds + 1
n
n
X
i=1
UT (xi(T ), μx(T ))
#
= Jn(t, x; a(·)),
which concludes the proof. □
Lemma 7.3. Let Assumptions 4.1, 4.2, 4.3, 4.4(i)(ii)(iv), and 4.5(i)(ii)(iv), be satisfied. Then, for all (t, x) ∈ [0, T ] × Hn, it holds Vn(t, x) ≤ un(t, x).

40 F. DE FEO, F. GOZZI, A. ŚWIĘCH, AND L. WESSELS
Proof. We take infa(·)∈Λtn in Lemma 7.2, to obtain
un(t, x) = inf
a(·)∈Λtn
Jn(t, x; a(·)) = inf
a(·)∈Λtn
J(t, Xx
n ; an(·)) ≥ inf
a(·)∈Λt
J(t, Xx
n , a(·)) = V (t, Xx
n ) = Vn(t, x).
□
We remark that the proof of the inequality Vn ≤ un does not require any differentiability of V .
7.2. Vn ≥ un. Next, let us show that U is a B-continuous viscosity solution of equation (3.3) even when using a larger class of test functions than what is usually used in standard theory [52, Chapter 3] (see also Appendix A). This larger class of test functions will be needed in the proof of Lemma 7.10. In order to define this class of test functions, let us introduce some notation.
Notation 7.4. Let fi := √n1An
i , i = 1, . . . , n, and extend this orthonormal set in L2(Ω) to an
orthonormal basis denoted by (fi)i∈N. Let Fn ⊂ L2(Ω) be the subspace spanned by fi, i = 1, . . . n, and let En = Fn⊗H ⊂ E. Let E⊥
n denote its orthogonal complement, i.e., E = En⊕E⊥
n . Moreover,
let Pn denote the orthogonal projection onto En and let P ⊥
n := I − Pn.
Notice that, each element X ∈ E can be written as X = PnX +P ⊥
n X = Pn
i=1 yifi +P∞
i=n+1 yifi =
Pn i=1
P∞
k=1 yk
i fiek + P∞
i=n+1
P∞
k=1 yk
i fiek, where yi = (y1
i , y2
i , . . . ) ∈ H, i ≥ 1 and (ek)k∈N is an
orthonormal basis of H. Let us denote y = (y1, . . . , yn) ∈ Hn and y ̄ = (yi)i≥n+1. In particular, for x ∈ Hn, we have En ∋ Xx
n = Pn
i=1 xi1An
i = Pn
i=1
√1n xifi, so the coefficients y in the basis
representation of Xx
n are given by y = x/√n and y ̄ = 0.
Remark 7.5. We note that if L ∈ L(H), and we define L ∈ L(E), (LX)(ω) := LX(ω), we have
(7.1) PnLX = LPnX = PnLPnX
LP ⊥
n X = LP ⊥
n X = P⊥
n LP ⊥
(7.2) n X.
We only show (7.1) as the proof of (7.2) is similar.
(PnLX)(ω) = Pn
n
X
i=1
Lyifi +
∞
X
i=n+1
Lyifi
!!
(ω) =
n
X
i=1
Lyifi
!
(ω) = L((PnX)(ω)) = (LPnX)(ω).
where in the first equality we used the definition of L to have
(LX)(ω) = L
n
X
i=1
yifi +
∞
X
i=n+1
yifi
!!
(ω) = L
n
X
i=1
yifi(ω) +
∞
X
i=n+1
yifi(ω)
!
=
n
X
i=1
Lyifi(ω) +
∞
X
i=n+1
Lyifi(ω) =
n
X
i=1
Lyifi +
∞
X
i=n+1
Lyifi
!
(ω).
Now obviously LPnX = LPnPnX = PnLPnX.
We will work with test functions of the form g(t, ∥PnX∥); however, these are not radial functions of ∥X∥ and, therefore, they do not fit into the usual class of test functions used in [52, Chapter 3] (recalled in Definition A.2). Hence, we need to enlarge the set of the test functions considered there in the following way.
Definition 7.6. A function ψ is a generalized test function if ψ = φ+h(t, ∥·∥)+g(t, ∥Pn ·∥), where φ ∈ C1,2((0, T ) × E) is locally bounded and is such that φ is B-lower semicontinuous, ∂tφ, A∗Dφ, Dφ, D2φ are uniformly continuous on (0, T ) × E; h, g ∈ C1,2((0, T ) × R) are radial functions.

STOCHASTIC OPTIMAL CONTROL OF INTERACTING PARTICLE SYSTEMS IN HILBERT SPACES 41
Next, we prove a version of Itô’s inequality for these types of functions, which will allow us to drop the term ⟨⟨AX, Dg(s, ∥PnX∥)⟩⟩ in the definition of B-continuous viscosity solution, in a similar way to what is done for radial functions h in [52, Chapter 3].
Lemma 7.7. Let Assumptions 4.1 and 4.4(i)(ii)(iv) be satisfied. Let G ∈ C1,2([t, T ] × E) be of the form G(s, X) = g(s, ∥PnX∥), for some g(s, c) ∈ C1,2([t, T ] × R), where g(s, ·) is even and non-decreasing on [0, ∞). Moreover, suppose that there are constants C ≥ 0 and N ≥ 0 such that
|G(s, X)| + ∥DG(s, X)∥ + |Gt(s, X)| + ∥D2G(s, X)∥L(E) ≤ C(1 + ∥X∥)N
for all X ∈ E and s ∈ [t, T ]. Let X(·) be the solution of equation (3.1) with initial condition (t, X) ∈ [0, T ) × E and bounded a(·), and let τ be an F t
s-stopping time. Then, P-almost surely,
G(s ∧ τ, X(s ∧ τ )) ≤ G(t, X) +
Z s∧τ
t
Gt(s′, X(s′)) + ⟨⟨F (X(s′), a(s′)), DG(s′, X(s′))⟩⟩
+1
2 Tr (Σ(X(s′), a(s′))) (Σ(X(s′), a(s′)))∗ D2G(s′, X(s′)) ds′
+
Z s∧τ
t
⟨⟨DG(s′, X(s′)), Σ(X(s′), a(s′))dW (s′)⟩⟩.
(7.3)
Proof. Inequality (7.3) can formally be derived by applying Itô’s formula and dropping the term involving the unbounded operator. Thus, we have to justify why we can drop that term. To this end, first we observe that DG(s, X) = ∂g
∂c (s, ∥PnX∥) PnX
∥PnX∥ and, since g(s, ·) is non-decreasing on
[0, +∞), ∂g
∂c (s, c) ≥ 0. Let A(k) be the Yosida approximations of A, as introduced in the proof of Lemma 4.13. Note that for every s ∈ [t, T ] and X ∈ E, we have
⟨⟨A(k)X, DG(s, X)⟩⟩ = ∂g
∂c (s, ∥PnX∥) 1
∥PnX∥ ⟨⟨A(k)X, PnX⟩⟩ = ∂g
∂c (s, ∥PnX∥) 1
∥PnX∥ ⟨⟨PnA(k)X, PnX⟩⟩
= ∂g
∂c (s, ∥PnX∥) 1
∥PnX∥ ⟨⟨A(k)PnX, PnX⟩⟩ ≤ 0,
where we used (7.1) (with L = A(k)) and the dissipativity of A(k) (which follows since A is dissipative). Hence, we can proceed as in the proof of [52, Proposition 1.166], by dropping this term when applying Itô’s formula to the approximated equation, in which the unbounded operator A is replaced by its Yosida approximation A(k), and then passing to the limit for k → ∞. □
Thanks to the previous lemma, we can consider the following stronger definition of viscosity solution in place of the standard one on Hilbert spaces [52, Definition 3.35] (recalled in Definition A.3), where we use the enlarged class of test functions in Definition 7.6 (in place of the standard ones in [52, Definition 3.32], recalled in Definition A.2).
Definition 7.8. (i) A locally bounded B-upper semicontinuous function v : (0, T ] × E → R is a B-continuous viscosity subsolution of (3.3) if v(T, X) ≤ UT (X) for X ∈ E and, whenever v − ψ has a local maximum at (t, X) ∈ (0, T ) × E for a test function ψ as in Definition 7.6, then
∂tψ(t, X) + 1
2 Tr(Σ(X)(Σ(X))∗D2ψ(t, X)) + ⟨⟨X, A∗Dφ(t, X)⟩⟩ + H ̃(X, Dψ(t, X)) ≥ 0.

42 F. DE FEO, F. GOZZI, A. ŚWIĘCH, AND L. WESSELS
(ii) A locally bounded B-lower semicontinuous function v : (0, T ] × H → R is a B-continuous viscosity subsolution of (3.3) if v(T, X) ≥ UT (X) for X ∈ E and, whenever v + ψ has a local minimum at (t, X) ∈ (0, T ) × E for a test function ψ as in Definition 7.6, then
−∂tψ(t, X) − 1
2 Tr(Σ(X)(Σ(X))∗D2ψ(t, X) − ⟨⟨X, A∗Dφ(t, X)⟩⟩ + H ̃(X, −Dψ(t, X)) ≤ 0.
(iii) A function v : (0, T ] × E → R is a B-continuous viscosity solution of (3.3) if it is both a B-continuous viscosity subsolution of (3.3) and a B-continuous viscosity supersolution of (3.3).
Proposition 7.9. Let Assumptions 4.1, 4.2, 4.3, 4.4(i)(ii)(iv), and 4.5(i)(ii)(iv) be satisfied. Then, the value function U (= V ) defined in (3.2) is a B-continuous viscosity solution of (3.3) in the sense of Definition 7.8.
Proof. The proof is a straightforward modification of the one of [52, Theorem 3.66] using Lemma 7.7 in place of [52, Proposition 1.166]. We remark that in the proof we can assume that the controls a(·) are bounded (recall Proposition 6.3) and hence the solutions of the state equation have moments of any order. □
Lemma 7.10. Let Assumptions 4.1, 4.2, 4.3, 4.4(i)(ii)(iv), and 4.5(i)(ii)(iv) be satisfied. Moreover, assume that D−1V (t, ·) : E−1 → E−1 is uniformly continuous, uniformly in t ∈ [0, T ]. Then, for all (t, x) ∈ [0, T ] × Hn, it holds Vn(t, x) ≥ un(t, x).
Proof. We claim that Vn is a B-continuous viscosity supersolution of equation (1.3). Once the claim is proved, taking into account that un is a B-continuous viscosity (sub-)solution of (1.3), the result follows from the comparison theorem [52, Theorem 3.50].
Preliminaries. For φn ∈ C1,2((0, T ) × Hn), hn ∈ C1,2((0, T ) × R), let ψn(t, x) := φn(t, x) + hn(t, |x|) be a test function in the sense of [52, Definition 3.32] and and let Vn + ψn have a global minimum at (t0, x0) ∈ (0, T ) × Hn. Assume without loss of generality that (Vn + ψn)(t0, x0) = 0 and that ψn is bounded from below. We will denote X0 := Xnx0 ∈ En (so P ⊥
n X0 = 0).
Using Notation 7.4, we have V (t, PnX) = V (t, Pn
i=1 yifi) = V t, Pn
i=1
√nyi1An
i = Vn(t, √ny), for (t, X) ∈ [0, T ] × E. Note also that, by [88], we have
(7.4) DV (t, X)(ω) = ∂μV(t, X#L1)(X(ω)), a.e.;
thus if X ∈ En, we have DV (t, X) ∈ En, for all t ∈ [0, T ]. Still using Notation 7.4, we define the test functions in the sense of Definition 7.6 φ : (0, T ) ×
E → R, φ(t, X) := φn(t, √ny), g : (0, T ) × R → R, g(t, c) := hn(t, c), ψ : (0, T ) × E → R,
ψ(t, X) := φ(t, X) + g(t, ∥PnX∥) ≡ φn(t, √ny) + hn(t, √n|y|) ≡ ψn(t, √ny). In this way, for x ∈ Hn, we have ψ(t, Xx
n ) = ψn(t, x).
Step 1. Fix ε > 0. Let 0 < δ < min(t0, T − t0, 1) and consider the function, for (t, X) ∈ (0, T ) × E,
Ψδ(t, X) := V (t, X) + ψ(t, X) + ε((t − t0)2 + ∥Pn(X − X0)∥2
−1) + ε
δ2 ∥P ⊥
n (X − X0)∥2
−1 + χ ̃(X)
≡ Vn(t, √ny) + ψn(t, √ny) + ε((t − t0)2 + ∥Pn(X − X0)∥2
−1) + ε
δ2 ∥P ⊥
n X∥2
−1 + V (t, X) − V (t, PnX) + χ ̃(X),
where χ ̃(X) := χ(∥X∥) for a radial function χ ∈ C2(R; [0, ∞)) such that χ(r) = 0 for |r| ≤ ∥X0∥; χ(r) > 0 for |r| > ∥X0∥, and lim|r|→∞ χ(r)/r2 = 1 (notice that χ′ = χ′′ = 0 for |r| ≤ ∥X0∥, so that χ ̃(X) = 0, Dχ ̃(X) = 0, D2χ ̃(X) = 0, for all ∥X∥ ≤ ∥X0∥).

STOCHASTIC OPTIMAL CONTROL OF INTERACTING PARTICLE SYSTEMS IN HILBERT SPACES 43
It can be easily seen using the corollary of the Ekeland–Lebourg Theorem, [52, Theorem 3.26], that for any η > 0 there are a ∈ R, Z ∈ E with ∥(a, Z)∥R×E < η such that the function
(t, X) 7→ Ψδ(t, X) + at + ⟨⟨BZ, X⟩⟩
attains a minimum over Kδ := {(t, X) ∈ R × E : ∥(t − t0, Pn(X − X0)∥R×E−1 ≤ δ, ∥P ⊥
n X∥−1 ≤ δ2}
at some point (tδ, Xδ) ∈ Kδ; since Ψδ ∥X∥→∞
−−−−−→ ∞, uniformly in δ, we have ∥Xδ∥ ≤ C for some C ≥ 0 independent of δ and η. Since we will use the viscosity solution property of V , we check that (tδ, Xδ) ̸∈ ∂Kδ. Indeed, for (t, X) ∈ ∂Kδ (i.e., either such that ∥(t − t0, Pn(X − X0))∥R×E−1 = δ, ∥P ⊥
n X∥−1 ≤ δ2 or such that ∥(t − t0, Pn(X − X0))∥R×E−1 ≤ δ, ∥P ⊥
n X∥−1 = δ2), we have
Ψδ(t, X) ≥ εδ2 + V (t, X) − V (t, PnX),
where we also used that Vn + ψn ≥ 0 (which follows since Vn + ψn has a global minimum equal to
zero at (t0, x0) = (t0, √ny)). Using the (uniform) continuity of D−1V (t, ·) : E−1 → E−1, we have that DV (t, ·) ≡ BD−1V (t, ·) : E → E (this equality is standard) is (uniformly) continuous; hence, we use the mean-value theorem, i.e., denoting Xθ := θX + (1 − θ)PnX for some θ ∈ [0, 1], we have
(7.5) |V (t, X) − V (t, PnX)| = |⟨⟨DV (t, Xθ), P ⊥
n X⟩⟩| = |⟨⟨DV (t, Xθ) − DV (t, X0), P ⊥
n X⟩⟩|
= |⟨⟨D−1V (t, Xθ) − D−1V (t, X0), P ⊥
n X⟩⟩−1| ≤ ρ(∥X − X0∥−1)∥P ⊥
n X∥−1 ≤ ρ(2δ)δ2,
where we have used the fact that ⟨⟨DV (t, X0), P ⊥
n X⟩⟩ = 0 (which follows from DV (t, X0) ∈ En as X0 ∈ En, recall (7.4)), ρ is the modulus of continuity of D−1V (t, ·) (uniform in t), and we have noticed that, by definition of Kδ, we have ∥X − X0∥−1 ≤ ∥Pn(X − X0)∥−1 + ∥P ⊥
n X∥−1 ≤ 2δ. Thus, we have
Ψδ(t, X) ≥ εδ2 − ρ(2δ)δ2 = εδ2
ε
2 =: γε,
where in the equality above, for all 0 < ε < 1, we have chosen a sufficiently small 0 < δ := δε < ε. Next, we notice that if η = ηε is sufficiently small, denoting a = aε, Z = Zε, we have
|aεt + ⟨⟨BZε, X⟩⟩| < γε
2 , for all (t, X) ∈ Kδ. Then
Ψδ(t, X) + aεt + ⟨⟨BZε, X⟩⟩ > γε
2 , ∀(t, X) ∈ ∂Kδ.
Taking into account that
(7.6) Ψδ(t0, X0) = (V + ψ)(t0, X0) + χ ̃(X0) = Vn(t0, x0) + ψn(t0, x0) = 0,
it follows that (tδ, Xδ) must be in the interior of Kδ. Step 2. Recall that in the proof of Step 1, for all ε > 0, we have chosen a suitable δ = δε (which we keep denoting δ to simplify the notation). Here, we prove that, as ε → 0, we have tδ → t and (extracting a sequence and then a subsequence, if necessary, still denoted by Xδ) Xδ → X0. Indeed, first observe that by definition of Kδ,
|tδ − t0| → 0, ∥Xδ − X0∥−1 → 0.
By Step 1, Xδ is bounded so that (extracting a sequence and then a subsequence, still denoted by Xδ), we have Xδ ⇀ Y ∈ E, so that B1/2Xδ ⇀ B1/2Y ; this, together with B1/2Xδ → B1/2X0, implies B1/2(Y − X0) = 0; in turn, due to the strict positivity of B1/2, this implies Y = X0, i.e.,
Xδ ⇀ X0.
Next, we conclude the proof of Step 2 by proving
∥Xδ∥ → ∥X0∥.

44 F. DE FEO, F. GOZZI, A. ŚWIĘCH, AND L. WESSELS
Indeed, since Xδ ⇀ X0, we have ∥X0∥ ≤ lim infδ→0 ∥Xδ∥. We are left to prove lim supδ→0 ∥Xδ∥ ≤
∥X0∥. Indeed, by definitions of χ ̃, Ψδ, taking into account that Vn + ψn has a global minimum at (t0, x0) equal to zero, and using (7.6), we have χ ̃(Xδ) + V (tδ, Xδ) − V (tδ, PnXδ) ≤ Ψδ(tδ, Xδ) ≤
Ψδ(t0, X0) = 0. Since |V (tδ, Xδ) − V (tδ, PnXδ)| ε→0
−−→ 0 (recall (7.5)), we have lim supε→0 χ ̃(Xδ) ≤ 0; by definition of χ ̃, we have the claim. Step 3. We prove the claim using the viscosity supersolution property of V . Since V is a B-continuous viscosity supersolution of (3.3) (recall Proposition 7.9), by Step 1 we have (here {e′
m}m∈N is an orthonormal basis of Ξ)
− ∂tψ(tδ, Xδ) − 2ε(tδ − t0) − aε − ⟨⟨Xδ, A∗[Dφ(tδ, Xδ) + 2εBPn(Xδ − X0) + 2 ε
δ2 BP ⊥
n Xδ − BZε]⟩⟩
−1
2
∞
X
m=1
⟨⟨(D2ψ(tδ, Xδ) + 2εPnBPn + 2 ε
δ2 P ⊥
n BP ⊥
n + D2χ ̃(Xδ))Σ(Xδ)e′
m, Σ(Xδ)e′
m⟩⟩
+ H ̃(Xδ, −Dψ(tδ, Xδ) − 2εBPn(Xδ − X0) − 2 ε
δ2 BP ⊥
n Xδ − BZ − Dχ ̃(Xδ)) ≤ 0.
Applying (7.2) with L = A∗B ∈ L(E) (recall Section 4.2), the weak B-condition (Assumption 4.2), and using that Xδ ∈ Kδ, we have − ε
δ2 ⟨⟨Xδ, A∗BP ⊥
n Xδ⟩⟩ = − ε
δ2 ⟨⟨P ⊥
n Xδ, A∗BP ⊥
n Xδ⟩⟩ ≥ −c0 ε
δ2 ∥P ⊥
n Xδ∥2
−1 ≥ −c0εδ2. Moreover, for X ∈ E, Σ(PnX)(ω) = σ (Pn
i=1 yifi(ω), (PnX)#L1) =
Pn
i=1 σ (√nyi, (PnX)#L1) 1An
i (ω), so that Σ(PnX)e′
m ∈ En, and, in turn, P ⊥
n Σ(PnX)e′
m = 0. Then
|⟨⟨ ε
δ2 P ⊥
n BP ⊥
n Σ(Xδ)e′
m ,Σ(Xδ )e′
m⟩⟩| = |⟨⟨ ε
δ2 P ⊥
n Σ(Xδ)e′
m, P ⊥
n Σ(Xδ)e′
m⟩⟩−1|
= |⟨⟨ ε
δ2 P ⊥
n (Σ(Xδ) − Σ(PnXδ))e′
m, P ⊥
n Σ(Xδ)e′
m⟩⟩−1|
≤ Cε
δ2 ∥Σ(Xδ) − Σ(PnXδ)∥L2(Ξ,E−1) ≤ C ε
δ2 ∥P ⊥
n Xδ∥−1 ≤ Cε.
Therefore, due to Steps 1,2, we let ε → 0, so that using the continuity of all terms (recall Subsection 4.3), we have
−∂tψ(t0, X0) − 1
2
∞
X
m=1
⟨⟨D2ψ(t0, X0)Σ(X0)e′
m, Σ(X0)e′
m⟩⟩ − ⟨⟨X0, A∗Dφ(t0, X0)⟩⟩ + H ̃(X0, −Dψ(t0, X0)) ≤ 0.
Recalling the definitions of the test functions and Notation 7.4, for every (t, X) ∈ (0, T ]×E, we have Dψ(t, X) = Pn
i=1
P∞ k=1
√nDxk
i ψn(t, √ny)fi⊗ek and D2ψ(t, X) = Pn
i,j=1
P∞
k,l=1 nDxk
i xl
j ψn(t, √ny)⟨⟨fi⊗
ek, ·⟩⟩⟨⟨fj⊗el, ·⟩⟩. By definition of H ̃, we have H ̃ (X0, −Dψ (t0, X0)) = 1
n
Pn
i=1 H (x0,i, μx0, −nDxiψn (t0, x0)),
where x0,i denotes the i-th component of x0 (and similarly for the term in A∗). For the second order term, using similar techniques as in the proof of Theorem 5.7 and [89, Proof of Proposition 5.2], we have P∞
m=1⟨⟨D2ψ(t0, X0)Σ(X0)e′
m, Σ(X0)e′
m⟩⟩ = Tr(D2ψn(t0, x0)σ(x0, μx0)σT (x0, μx0)). Thus, we obtain
−∂tψn(t0, x0) − 1
2 Tr(D2ψn(t0, x0)σ(x0, μx0)σT (x0, μx0))
+1
n
n
X
i=1
(−⟨x0,i, nA∗Dxiψn(t0, x0,i)⟩ + H(x0,i, μx0, −nDxiψn (t0, x0))) ≤ 0,
which proves the claim. □

STOCHASTIC OPTIMAL CONTROL OF INTERACTING PARTICLE SYSTEMS IN HILBERT SPACES 45
8. Lifting and Projection of Optimal Controls
In this section, we are going to show that if D−1V (t, ·) is uniformly continuous (resp. V (t, ·) ∈ C1,1(E−1) for the case of optimal feedback controls), then optimal (resp. optimal feedback) controls of the particle system correspond to optimal (resp. optimal feedback) controls of the lifted infinite dimensional control problem started at the corresponding initial condition. Conversely, we will show that piecewise constant optimal (resp. optimal feedback) controls of the infinite dimensional cont-
rol problem project onto optimal (resp. optimal feedback) controls of the particle system. Throughout this section, we assume that the assumptions of Theorem 7.1 are satisfied.
8.1. Lifting of Optimal Controls. Let n ≥ 1 and let a∗(·) = (a∗
1(·), . . . , a∗
n(·)) be an optimal control of the finite dimensional problem, i.e.,
un(t, x) = Jn(t, x; a∗(·)) := E
"
ZT
t
1
n
n
X
i=1
l(x∗
i (s), μx∗(s), a∗
i (s))
!
ds + 1
n
n
X
i=1
UT (x∗
i (T ), μx∗(T ))
#
,
where x∗(s) = (x∗
1(s), . . . , x∗
n(s)) is the mild solution of the system of SDEs
dx∗
i (s) = [Ax∗
i (s) + f (x∗
i (s), μx∗(s), a∗
i (s))]ds + σ(x∗
i (s), μx∗(s))dW (s), x∗
i (t) = xi ∈ H,
i = 1, . . . , n. By Lemma 7.2 and Theorem 7.1, we have
J(t, Xx
n ; a∗,n(·)) = Jn(t, x; a∗(·)) = un(t, x) = Vn(t, x) = V t,
n
X
i=1
xi1An
i
!
,
where a∗,n(·) = Pn
i=1 ai(·)1An
i , i.e., the optimal control a∗(·) lifts to an optimal control a∗,n(·) of
the infinite dimensional problem started at (t, Pn
i=1 xi1An
i ).
8.2. Lifting of Optimal Feedback Controls. Next, we show that an optimal feedback control of the finite dimensional problem lifts to an optimal feedback control of the corresponding lifted control problem. Assume that Λ ̃ = Λ = H and that f, l are of the form f (x, μ, q) := f1(x, μ) + q, l(x, μ, q) := l1(x, μ)+l2(q). Moreover, in addition to the assumptions of Theorem 7.1, let Assumption 4.6 be satisfied with ν > 0, V (t, ·) ∈ C1,1(E−1) for every t ∈ [0, T ], and the semiconcavity and semiconvexit-
y constants of V (t, ·) be independent of t ∈ [0, T ]. Notice that under this assumption, for all t ≥ 0 we have V (t, ·) ∈ C1,1(E), Vn(t, ·) ∈ C1,1(Hn), DV, DxiVn are continuous on [0, T ] × E and [0, T ] × Hn respectively, and there is a constant C ≥ 0 such that ∥DV (t, X)∥ ≤ C, ∥DV (t, X) − DV (t, Y )∥ ≤ C ∥X − Y ∥−1, |DxiVn(t, x)| ≤ C, |DxiVn(t, x) − DxiVn (t, y)| ≤ C |x − y|−1,2, for all i = 1, . . . , n. Then we can proceed in a similar way to [43, Example 4.10] to have that Dl2 is invertible-
 with Lipschitz inverse (Dl2)−1 and then apply [43, Theorem 5.18] to the finite particle system problem with value function un = Vn to get that a∗(·) = (a∗
1(·), . . . , a∗
n(·)), a∗
i (s) := (Dl2)−1(−nDxiVn(s, x∗(s)))
is an optimal feedback control for the finite particle system control problem3. Here x∗(s) = (x∗
1(s), . . . , x∗
n(s)) is the solution of the closed loop system, for i = 1, . . . , n,
dx∗
i (s) = [Ax∗
i (s)+(Dl2)−1(−nDxiVn(s, x∗(s)))+f1(x∗
i (s), μx∗(s))]ds+σ(x∗
i (s), μx∗(s))dW (s), x∗
i (t) = xi.
Now, consider the lifted control a∗,n(s) = Pn
i=1 a∗
i (s)1An
i . By Lemma 7.2, the solution X∗,n(·) of
the lifted state equation with initial condition Xx
n and control a∗,n(·) coincides with the lift Xx∗(·)
n
3Recall that the factor n enters together with Dxi un into the HJB equation (1.3).

46 F. DE FEO, F. GOZZI, A. ŚWIĘCH, AND L. WESSELS
of x∗(·). In particular, X∗,n(·)(ω) is constant for ω ∈ An
i . Therefore, by the same formula for (5.22) and using (7.4),
a∗,n(s) =
n
X
i=1
(Dl2)−1(−nDxiVn(s, x∗(s)))1An
i=
n
X
i=1
(Dl2)−1 −n
Z
An
i
DV (s, X∗,n(s))(ω)dω
!
1An
i
=
n
X
i=1
(Dl2)−1 −n
Z
An
i
∂μV(s, X∗,n
# L1)(X∗,n(s)(ω))dω
!
1An
i
=
n
X
i=1
(Dl2)−1 −∂μV(s, X∗,n
# L1)(X∗,n(s)) 1An
i = (Dl2)−1 −∂μV(s, X∗,n
# L1)(X∗,n(s))
= (DL2)−1(−DV (s, X∗,n(s))),
where in the last equality we have used the fact that (DL2)−1(Y )(ω) = (Dl2)−1(Y (ω)), for Y ∈ E, with L2(Q) := R
Ω l2(Q(ω))dω. Then, applying the results of [43, Theorem 5.18] to the lifted control
problem, we have that a∗,n(s) is an optimal feedback control of the lifted problem with initial data (t, Pn
i=1 xi1An
i ).
8.3. Projection of Optimal Controls. Let a∗,n(·) be a piecewise constant optimal control of the infinite dimensional problem started at (t, Xx
n ), x ∈ Hn, i.e., a∗,n(s) = Pn
i=1 a∗
i (s)1An
i for some
a∗
i (·) taking values in H, i = 1, . . . , n, and
V (t, Xx
n ) = J (t, Xx
n ; a∗,n(·)) = E
ZT
t
L(X∗(s), a∗,n(s))ds + UT (X∗(T )) ,
where X∗(s) is the mild solution of
dX∗(s) = [AX∗(s) + F (X∗(s), a∗(s))]ds + Σ(X∗(s))dW (s), X∗(t) = Xx
n ∈ En.
Note that X∗(s) ∈ En for all s ∈ [t, T ] (see (2.2) for the definition of En). Let a∗(·) = (a∗
1(·), . . . , a∗
n(·)) be the projection of a∗,n(·). Then, by Lemma 7.2 and Theorem 7.1, we have
Jn(t, x; a∗(·)) = J(t, Xx
n ; a∗,n(·)) = V (t, Xx
n ) = Vn(t, x) = un(t, x),
i.e., the piecewise constant optimal control a∗,n(·) of the infinite dimensional control problem started at (t, Xx
n ) projects to an optimal control of the finite dimensional control problem started at (t, x).
8.4. Projection of Optimal Feedback Controls. We work under the assumptions of Subsection 8.2. We know that an optimal feedback control for the infinite dimensional control problem started at (t, Xx
n ), x ∈ Hn, is given by
a∗(s) = (DL2)−1(−DV (s, X∗(s))),
where X∗(·) is the solution of the infinite dimensional state equation with control a∗(·). Using Lemma 7.2 we have that X∗(s) is constant for ω ∈ An
i , so that, using (7.4), we have that
DV (s, X∗(s)) is constant for ω ∈ An
i , and then a∗(·) is constant for ω ∈ An
i . Therefore, in this case the same calculation (in reverse) as in Subsection 8.2 shows that the optimal feedback control projects onto an optimal feedback control of the finite dimensional control problem.

STOCHASTIC OPTIMAL CONTROL OF INTERACTING PARTICLE SYSTEMS IN HILBERT SPACES 47
9. Applications to problems in economics
In this section, we apply the theory developed to problems arising in economics in the context of optimization for large companies: a (path-dependent) stochastic optimal control problem with delays arising in the context of optimal advertising and a stochastic optimal control problem with vintage capital, where the state equation is a stochastic partial differential equation.
Notation 9.1. Throughout this section, for X ∈ E, we denote E[X] := R
Ω X(ω)dω.
9.1. Stochastic optimal advertising with delays for large companies. Inspired by meanfield optimal advertising problems with delays in [69], in this subsection we introduce a particle system type control problem for optimal advertising strategies of a large company. We also refer to [83] for a mean-field game framework with delays and to [39, 39, 40, 42, 68], and the references therein, for classical stochastic optimal advertising models with delays. Consider a large retail company with n stores, -
where local advertising policies interact. The company plans an advertising campaign to promote the sale of a particular product. As typically done in this kind of problems (see the seminal paper [80] or the survey [55]), the state variable for each store i is the so-called “goodwill” yi of the product which is an index capturing the brand awareness, the product image, and the reputation that the average consumers have about the product itself. Concerning the dynamics of the goodwill stock, as in -
the cited papers, we assume that the goodwill increases because of the advertising campaign and decreases because people forget about the product and this process is distributed over time. Hence the dynamics of the stock of the advertising goodwill yi(s) of the product sold by store i = 1, . . . , n is given by the following stochastic delay differential equation (SDDE)
(
dyi(s) =
h
b0yi(s) + c0yn(s) + R 0
−d[η1(ξ)yi(s + ξ) + χ1(ξ)yn(s + ξ)] dξ + e0ai(s)
i
ds + σ0 dW (s),
yi(t) = x0
i , yi(t + ξ) = x1
i (ξ), ξ ∈ [−d, 0),
where s ∈ [t, T ], d > 0, yn(s) = 1
n
Pn
i=1 yi(s) = R
R zμy(s)(dz) is the sample mean, with μy(s)
being the empirical measure for y(s) = (y1(s), . . . , yn(s)); the control process ai(s) with values in Λ ̃ = [0, ∞) ⊂ Λ = R models the rate of advertising spending, W is a real-valued Brownian motion acting as a common noise; b0, c0 ≤ 0 are constant factors of instantaneous goodwill deterioration in absence of advertising; e0 ≥ 0 is a constant advertising effectiveness factor; η1, χ1 ≤ 0 are given deterministic functions in the Sobolev space W 1,2([−d, 0]), such that η1(−d) = χ1(−d) = 0, represen-
ting the distribution of the past forgetting times4; σ0 > 0 represents the intensity of the uncertainty in the model, x0
i ∈ R is the level of goodwill at the beginning of the advertising
campaign; x1
i ∈ L2([−d, 0]) is the history of the goodwill level. Again as usual in this kind of problems (see again [80] or [55]) the company aims at maximizing the present value of its total profit. Hence the goal is to minimize
E
"
ZT
t
1
n
n
X
i=1
l0(yi(s), yn(s), ai(s))ds + 1
n
n
X
i=1
U0
T (yi(T ), yn(T ))
#
,
where l0(y, z, q) = g0(q) − h0(y, z) for a convex, non decreasing, cost function g0 : [0, ∞) → [0, ∞) such that −C1 + C2|q|2 ≤ g0(q) ≤ C1 + C3|q|2 for some C1, C2, C3 > 0, and a concave Lipschitz revenue function h0 : R2 → R; U 0
T : R2 → R is a convex Lipschitz function (to be interpreted as the negative of a concave terminal revenue function). To get some of the results, namely the ones
4Notice that such regularity assumption on ηi, χi needed to apply our results, is not really restrictive as any function in L2 can be approximated by maps of this type.

48 F. DE FEO, F. GOZZI, A. ŚWIĘCH, AND L. WESSELS
concerning the regularity of the value function (Subsection 6.2, in particular Theorem 6.8) and the projections (Sections 7-8, in particular Theorem 7.1) we will also assume the following regularity: g0 ∈ C1,1([0, ∞); [0, ∞)), h0 ∈ C1,1(R2), U 0
T ∈ C1,1(R2). Finally, to get the results on the lifting of optimal feedback controls (Subsections 8.2 and 8.4) we will need to add that, for some ν > 0 the map g0(q) − ν|q|2 is convex. We notice that all the above assumptions, including the last two are typically verified in the above cited literature on optimal advertising. The system of SDDEs is rewritten (see e.g. [40]) as a system without delays over the Hilbert space Hn with H := R × L2([−d, 0]) (endowed with the inner product ⟨x, y⟩ := x0 ·-
 y0 + ⟨x1, y1⟩L2 with ⟨x1, y1⟩L2 denoting the standard inner product in L2([−d, 0])) for the extended state
xi(s) = (x0
i (s), x1
i (s)) := (yi(s), yi(s + ·)), i = 1, . . . , n,
where we use the notation x := (x0, x1) ∈ H and x = (x0, x1) ∈ Hn, i.e.,
dxi(s) = [Axi(s) + bxi(s) + cxn(s) + ηxi(s) + χxn(s) + eai(s)] ds + σ dW (s), xi(t) = xi,
where xn(s) := ( 1
n
Pn
i=1 x0
i (s), 1
n
Pn
i=1 x1
i (s)) = (R
H z0μx(s)(dz), R
H z1μx(s)(dz)), Ax := (−x0, d
dξ x1),
D(A) := {x = (x0, x1) ∈ H : x1 ∈ W 1,2([−d, 0]), x1(0) = x0} is a maximally dissipative operator (so Assumption 4.1 holds), b ∈ L(H), bx := ((b0 + 1)x0, 0), c ∈ L(H), cx := (c0x0, 0), η ∈ L(H), ηx := (⟨η1, x1⟩L2, 0), χ ∈ L(H), χx := (⟨χ1, x1⟩L2, 0), e ∈ L(Λ; H), eq := (e0q, 0), σ ∈ L2(R; H), σw := (σ0w, 0). Then, defining f : H × P(H) × Λ ̃ → H, σ ∈ L2(R, H), l : H × P(H) × Λ ̃ → R, UT : H × P(H) → R, respectively, by
f (x, μ, q) := (b0 + 1)x0 + c0
Z
H
z0μ(dz) + ⟨η1, x1⟩L2 +
Z
H
⟨χ1, z1⟩L2μ(dz) + e0q, 0 ,
σw := (σ0w, 0), l (x, μ, q) := l0 x0,
Z
H
z0μ(dz), q , UT (x, μ) := U 0
T x0,
Z
H
z0μ(dz) ,
for all x = (x0, x1) ∈ H, μ ∈ P2(H) q ∈ Λ ̃, w ∈ R, we have the setup of Subsection 3.1. Here, we have H(x, μ, p) := infq∈Λ ̃ (⟨f (x, μ, q), p⟩ + l(x, μ, q)) and the HJB equation for the particle system is
(
∂tun + 1
2 Tr(σσ⊤D2un) + 1
n
Pn
i=1 (⟨Axi, nDxiun⟩ + H(xi, μx, nDxiun)) = 0, (t, x) ∈ (0, T ) × Hn
un(T, x) = 1
n
Pn
i=1 UT (xi, μx), x ∈ Hn.
We check now that the assumptions of the previous sections are satisfied (we use the setup and notations introduced there) so that the results of our theory can be applied. Indeed, by [40, Section 3], the linear operator B := (A−1)∗A−1 satisfies the weak B-condition Assumption 4.2 with c0 = 0 and it is compact, so it satisfies Assumption 4.3. Moreover, it was shown in [40, Sections 3 and 4] there that there is a constant C ≥ 0 such that
(9.1) |x0| ≤ |x|−1, ⟨Γ1, x1⟩L2 ≤ C|x|−1 Γ1 = η1, χ1, ∀x = (x0, x1) ∈ H.
Next, for all μ, β ∈ P2(H), r ∈ [1, 2], we claim
Z
H
z0(μ − β)(dz) ≤ d−1,r(μ, β),
Z
H
(9.2) ⟨χ1, z1⟩L2(μ − β)(dz) ≤ Cd−1,r(μ, β).

STOCHASTIC OPTIMAL CONTROL OF INTERACTING PARTICLE SYSTEMS IN HILBERT SPACES 49
Indeed, let X = (X0, X1), Y = (Y 0, Y 1) ∈ E be such that X#L1 = μ, Y#L1 = β. Then, using (9.1), we have
Z
H
z0(μ − β)(dz) = |E[X0 − Y 0]| ≤ E[|X0 − Y 0|] ≤ E[|X − Y |−1] ≤ E[|X − Y |r
−1 ]1/r ,
Z
H
⟨χ1, z1⟩L2(μ − β)(dz) = ⟨χ1, E[X1 − Y 1]⟩L2 ≤ C|E[X − Y ]|−1 ≤ CE[|X − Y |r
−1]1/r
and thus (9.2) follows from (2.1). Next, notice that f satisfies Assumption 4.4 (while σ trivially satisfies it); indeed, the first inequality in (i) follows from (9.1), (9.2), while the second is trivial; the first inequality in (ii) follows by choosing β = δ0 in (9.2) and then using the equality dr
−1,r(μ, δ0) = M−1,r(μ),
while the second there is trivial; for (iii) notice that Dxf ̃(x, μ, q)y = ((b0 + 1)y0 + ⟨η1, y1⟩L2, 0), DXf ̃(x, X, q)Y = (c0E[Y 0] + E[⟨χ1, Y 1⟩L2], 0), Dqf ̃(x, μ, q)a = (e0a, 0); then, we have (iii) and so Assumption 4.4 is satisfied. With completely similar techniques, we prove that l, UT satisfy Assumption 4.5 (i), (ii), (iv). If we add, as said above, that g0 ∈ C1,1([0, ∞); [0, ∞)), h0 ∈ C1,1(R2), U0
T ∈ C1,1(R2), then Assumption 4.5 (iii), (v) is satisfied; indeed, note that Dxl ̃(x, X, q)z =
−∂yh0(x0, E[X0])z0, DXl ̃(x, X, q)Y = −∂zh0(x0, E[X0])E[Y 0], Dql ̃(x, X, q)a = ∂qg0(q)a and the claim follows thanks to (9.1), (9.2). Next, Assumption 4.6 is satisfied with C1 = C2 = ν = 0 because of the convexity of l0; indeed, by (9.1), (9.2) (with r = 2 there), for all x, y ∈ H, X, Y ∈ E, a, q ∈ Λ ̃, we have
(9.3)
λl ̃(x, X, a) + (1 − λ)l ̃(y, Y, q) − l ̃(λx + (1 − λ)y, λX + (1 − λ)Y, λa + (1 − λ)q)
= λl0 x0, E[X0], a + (1 − λ)l0 y0, E[Y 0], q
− l0 λx0 + (1 − λ)y0, λE[X0] + (1 − λ)E[Y 0], λa + (1 − λ)q ≥ 0.
On the other hand, if we add that for some ν > 0 the map g0(q) − ν|q|2 is convex, then, arguing as in (9.3), Assumption 4.6 is satisfied with such ν and C1 = C2 = 0. Finally, by (9.1), (9.2), we see that f satisfies Assumption 4.7 (i); Assumption 4.7 (ii) is trivially satisfied, while (iii) follows from the convexity of l0, U 0
T.
Given the above we can apply (without the additional regularity and convexity assumptions) Theorem 5.7 to obtain convergence of the value functions un for the particle control problems to the function V whose lift V is the value function of the lifted problem. Adding the C1,1 regularity of g0, h0, U 0
T we can apply the results of Subsection 6.2 to get C1,1-regularity of V , Theorem 7.1 to prove that V = un on averages of point masses, as well as lifting and projection of optimal controls, i.e., Subsections 8.1, 8.3. What remains is to adapt the results of lifting and projection of optimal feedback controls of Subsections 8.2, 8.4, as we are not exactly in the setting there since we do not have Λ ̃ = Λ = H. In virtue of the results of Subsection 6.2, we can assume that V (t, ·) ∈ C1,1(E−1) for -
every t ∈ [0, T ], and the semiconcavity and semiconvexity constants of V (t, ·) are independent of t ∈ [0, T ]. Assume here for simplicity that g0(q) = 1
2 q2. Define
a∗(·) = (a∗
1(·), . . . , a∗
n(·)), a∗
i (s) := γ∗(DxiVn(s, x∗(s)))0),
where γ∗(p) := argmina∈[0,∞)[ne0p0a+ 1
2 a2] = ne0(p0)−, for p = (p0, p1) ∈ H, with z− = max(−z, 0)
denoting the negative part of z ∈ R, and x∗(s) = (x∗
1(s), . . . , x∗
n(s)) is the unique mild solution of the closed loop system
dx∗
i (s) = Ax∗
i (s) + bx∗
i (s) + cx∗
n(s) + ηx∗
i (s) + χx∗
n(s) + eγ∗(DxiVn(s, x∗(s)))0) ds + σ dW (s),

50 F. DE FEO, F. GOZZI, A. ŚWIĘCH, AND L. WESSELS
with x∗
i (t) = xi, i ≤ n. Then γ∗ defines an optimal advertising policy as an optimal feedback
control a∗(·) for the finite particle system problem. We remark that only the x0-component of DxiVn(s, x∗(s)) ∈ H, for i = 1, . . . n, is used in the optimal feedback map. Then, we can proceed in a similar way to Subsections 8.2, 8.4, to prove lifting and projection of the optimal feedback control. Here, the optimal feedback control for the lifted control problem is given by
a∗(s)(ω) = e0 (DV (s, X∗(s))(ω))0 − , ω ∈ (0, 1).
Again we remark that only the x0-component of DV (s, X∗(s))(ω) is used in the optimal feedback map.
9.2. Optimal investment with vintage capital for large companies (SPDEs). Inspired by mean-field optimal investment problems with vintage capital as introduced in [28], in this subsection we introduce a particle system type control problem for optimal investment strategies with vintage capital under uncertainty for a large company. We refer to the recent review [51] and the references therein for the classical deterministic setting. Consider a large, innovation-driven firm composed of n interconne-
cted subsidiaries. Each subsidiary i = 1, . . . , n produces technologically advanced goods by investing in capital goods that embody both new (disruptive) and older (traditional) technologies. This is modeled through a vintage capital structure, where capital goods are indexed by their age θ ∈ [0, Θ], where Θ > 0 represents the maximum age. We assume that the amount of capital goods yi(s, θ) of age θ accumulated at time s ∈ [t, T ] evolves according to the controlled SPDE
( ∂yi(s,θ)
∂s + ∂yi(s,θ)
∂θ = −δyi(s, θ) − δ ̄ yn(s, θ)) + ui(s, θ) + σ ∂
∂s W (s)(θ), (s, θ) ∈ (t, T ) × (0, Θ),
yi(s, 0) = 0, s ∈ (t, T ), yi(t, θ) = xi(θ), θ ∈ [0, Θ],
where xi ∈ L2([0, Θ]) is the initial value; yn(s, θ) = 1
n
Pn
i=1 yi(s, θ) = R
R zμy(s,θ)(dz), with y(s, θ) =
(y1(s, θ), . . . , yn(s, θ)), is the sample mean and μy(s,θ) being the empirical measure; δ > 0 is a capital depreciation factor, δ ̄ > 0 is a capital interaction depreciation factor modeling how capital becomes obsolete faster when average technological standards improve across subsidiaries; the control process ui(s, θ) with values in Λ ̃ = Λ := L2([0, Θ]; [0, ∞)) is the rate of investment at time s in capital goods of age θ undertaken by the subsidiary i; W is a cylindrical Wiener process with v-
alues in L2([0, Θ]) acting as a common noise; σ ∈ L2(L2([0, Θ])). We now introduce the objective functional. The rate of investment costs at time s undertaken by the subsidiary i is R Θ
0 c(θ, ui(s, θ))dθ for a function c : [0, Θ] × [0, ∞) → [0, ∞), such that there
exist C1, C2, C3 > 0, such that −C1 + C2|q|2 ≤ c(θ, q) ≤ C1 + C3|q|2; the output rate at time s is
RΘ
0 η(θ)yi(s, θ)dθ for a suitable η : [0, Θ] → [0, ∞). The goal of the company is then to minimize an aggregate cost functional of the form
E
"
ZT
t
1
n
n
X
i=1
ZΘ
0
c(θ, ui(s, θ))dθ − h0
ZΘ
0
η(θ)yi(s, θ)dθ ds + 1
n
n
X
i=1
U0
T
ZΘ
0
η(θ)yi(T, θ)dθ
#
,
where h0 : R → R is a concave Lipschitz revenue function; U 0
T : R → R is a convex Lipschitz function (to be interpreted as the negative of a concave terminal revenue function). As in the previous subsection more regularity assumptions will be added to apply the results of Sections 6-7-8, see below. The system is rewritten in the setup of Subsection 3.1 over Hn with H := L2([0, Θ]), where Ax := − d
dθ x − δx, D(A) := {x ∈ W 1,2([0, Θ]), x(0) = 0} is a maximally dissipative operator
(so Assumption 4.1 holds), f : P(H) × Λ ̃ → H, f (μ, q) := −δ ̄ R
H zμ(dz) + q, σ ∈ L2(H),

STOCHASTIC OPTIMAL CONTROL OF INTERACTING PARTICLE SYSTEMS IN HILBERT SPACES 51
l : H × P(H) × Λ ̃ → R, l (x, q) := R Θ
0 c(θ, q(θ))dθ − h0 R Θ
0 η(θ)x(θ)dθ , UT : H × P(H) → R,
UT (x) := U 0
T
RΘ
0 η(θ)x(θ)dθ , for all x ∈ H, μ ∈ P2(H) q ∈ Λ ̃. Here, we have H(x, μ, p) :=
infq∈Λ ̃ (⟨f (x, μ, q), p⟩ + l(x, q)) and the HJB equation for the particle system is
(
∂tun + 1
2 Tr(σσ∗D2un) + 1
n
Pn
i=1 (⟨Axi, nDxiun⟩ + H(xi, μx, nDxiun)) = 0, (t, x) ∈ (0, T ) × Hn
un(T, x) = 1
n
Pn
i=1 UT (xi, μx), x ∈ Hn.
We check now that the assumptions of the previous sections are satisfied (we use the setup and notations introduced there) so that the results of our theory can be applied. Indeed, similarly to [40, 50], the operator B := (A−1)∗A−1 satisfies the weak B-condition Assumption 4.2 with c0 = 0 and it is compact, so it satisfies Assumption 4.3. Moreover, notice that the adjoint operator of A is A∗x := d
dθ x−δx, D(A∗) := {x ∈ W 1,2([0, Θ]), x(Θ) = 0} and assume from now on that η ∈ D(A∗); then
ZΘ
0
(9.4) η(θ)x(θ)dθ = |⟨η, x⟩L2| = ⟨A∗η, A−1x⟩L2 ≤ C|x|−1 ∀x ∈ H,
where C = |A∗η|. The inequality
Z
H
z(μ − β)(dz)
−1
(9.5) ≤ d−1,r(μ, β)
is obtained in the same way as (9.2) in Section 9.1. Next, notice that f satisfies Assumption 4.4 (while σ trivially satisfies it); indeed, the first inequality in (i) follows from (9.5), while the second is trivial; the first inequality in (ii) follows by choosing β = δ0 in (9.5) and then using the equality dr
−1,r(μ, δ0) = M−1,r(μ), while the second
there is trivial; for (iii) notice that DXf ̃(X, q)Y = −δ ̄E[Y ], Dqf ̃(x, μ, q)a = a; then, we have (iii) and so Assumption 4.4 is satisfied. Next, by straightforward computations we have that l, UT satisfy Assumption 4.5 (i), (ii), (iv), if we use (9.4). If c(θ, ·) ∈ C1,1(Λ ̃; [0, ∞)) with Lipschitz constant of ∂qc(θ, q) independent of θ, h0 ∈ C1,1(R), U 0
T ∈ C1,1(R), then Assumption 4.5 (iii),
(v) is satisfied; indeed, note that Dxl ̃(x, q)z = −∂yh0(R Θ
0 η(θ)x(θ)dθ) R Θ
0 η(θ)z(θ)dθ, Dql ̃(x, q)a =
RΘ
0 ∂qc(θ, q(θ))a(θ)dθ and the claim follows thanks to the Lipschitzianity of ∂yh0, ∂qg0, ∂uc(θ, ·), and to (9.4). Next, Assumption 4.6 is satisfied for C1 = C2 = ν = 0 by the above concavity assumptions, while it is satisfied with C1 = C2 = 0 and ν > 0 if there exist ν ≥ 0 such that the map q 7→ c(θ, q) − ν|q|2 is convex (ν independent of θ). As in (9.5), we see that f satisfies Assumption 4.7 (i); Assumption 4.7 (ii) is trivially satisfied, while (iii) follows from the convexity of −h0, U 0
T.
Therefore, as for the problem in Subsection 9.1, we can apply the results of our theory.
Appendix A. Viscosity solutions of PDEs in Hilbert spaces
We recall here the definition of a viscosity solution for a terminal value degenerate parabolic PDE on a Hilbert space with an unbounded operator from [52, Section 3.3]. Throughout this section (Y, ⟨·, ·⟩) is a real separable Hilbert space. We denote by S(Y ) the space of self-adjoint operators in L(Y ).

52 F. DE FEO, F. GOZZI, A. ŚWIĘCH, AND L. WESSELS
A.1. B-continuity. Let B ∈ S(Y ) be a strictly positive operator in Y .
Definition A.1 (B-continuity). Let u : [0, T ] × Y → R. We say that u is B-upper semicontinuous (respectively, B-lower semicontinuous) if, for any sequences (tn) ⊂ [0, T ] and (xn) ⊂ Y such that tn → t ∈ [0, T ], xn ⇀ x ∈ Y , Bxn → Bx as n → ∞, we have lim supn→∞ u (tn, xn) ≤ u(t, x)(respectively, lim infn→∞ u (tn, xn) ≥ u(t, x)). We say that u is B-continuous if it is both B-upper semicontinuous and B-lower semicontinuous.
A.2. Viscosity solutions. Consider the following terminal value PDE in the Hilbert space Y
(A.1) ∂tu + ⟨Ax, Du⟩ + F (x, Du, D2u) = 0, (t, x) ∈ (0, T ) × Y
u(T, x) = g(x), x ∈ Y,
where A : D(A) ⊂ Y → Y is a linear densely defined maximal dissipative operator, F : Y × Y × S(Y ) → R, g : Y → R are continuous. We also assume that F (x, p, X) ≤ F (x, p, Z) for all x, p ∈ Y and X, Z ∈ S(Y ), X ≤ Z. Let B ∈ S(Y ) be strictly positive and such that A∗B ∈ L(Y ).
Definition A.2. A function ψ : (0, T ) × Y → R is a test function if ψ = φ + h(t, |x|), where φ ∈ C1,2((0, T )×Y ) is locally bounded and is such that φ is B-lower semicontinuous, ∂tφ, A∗Dφ, Dφ, D2φ are uniformly continuous on (0, T ) × Y ; h ∈ C1,2((0, T ) × R) is such that for every t ∈ (0, T ), h(t, ·) is even and h(t, ·) is non-decreasing on [0, +∞).
Definition A.3. A locally bounded B-upper semicontinuous function u : (0, T ] × Y is a Bcontinuous viscosity subsolution of (A.1) if u(T, y) ≤ g(y) for all y ∈ Y and whenever u − ψ has a local maximum at a point (t, x) ∈ (0, T ) × Y for a test function ψ(s, y) = φ(s, y) + h(s, |y|) then
∂tψ(t, x) + ⟨x, A∗Dφ(t, x)⟩ + F x, Dψ(t, x), D2ψ(t, x) ≥ 0.
A locally bounded B-lower semicontinuous function u on (0, T ] × Y is a B-continuous viscosity supersolution of (A.1) if u(T, y) ≥ g(y) for y ∈ Y and whenever u + ψ has a local minimum at a point (t, x) ∈ (0, T ) × Y for a test function ψ(s, y) = φ(s, y) + h(s, |y|) then
−∂tψ(t, x) − ⟨x, A∗Dφ(t, x)⟩ + F x, −Dψ(t, x), −D2ψ(t, x) ≤ 0.
A B-continuous viscosity solution of (A.1) is a function which is both a B-continuous viscosity subsolution and a B-continuous viscosity supersolution of (A.1).
We remind the reader that here a function is called locally bounded if it is bounded on bounded sets. Moreover, without loss of generality the maxima and minima in Definition A.3 can be assumed to be global and strict, see [52, Lemma 3.37]. A maximum/minimum of a function f at x is called strict if whenever xn → x and f (xn) → f (x) then xn → x.
Appendix B. Approximation of Measures in the Wasserstein Space
In this appendix, we prove an approximation property for measures in the Wasserstein space P2(X) over some Banach space X. This lemma is needed construct a limit for the sequence of finite dimensional value functions in Subsection 5.2.
Lemma B.1. Let (nk)k∈N ⊂ N be a sequence of natural numbers such that limk→∞ nk = ∞. Then, for all μ ∈ P2(X) there is a subsequence (nkj )j∈N ⊂ N of (nk)k∈N, and there are points xi ∈ X, i = 1, . . . , nkj , j ∈ N, such that
jli→m∞ d2(μnkj , μ) = 0,
where μnkj = 1
nkj
Pnkj
i=1 δxi .

STOCHASTIC OPTIMAL CONTROL OF INTERACTING PARTICLE SYSTEMS IN HILBERT SPACES 53
Proof. For ε > 0, let R = R(ε) > 0 be such that R
{|x|>R} |x|2μ(dx) < ε2. Denote
μ ̃ε(·) = μ(· ∩ B ̄R) + μ(X \ B ̄R)δ0.
Then, d2(μ ̃ε, μ) < ε, and the support of μ ̃ε is a subset of B ̄R. Therefore, see e.g. the proof of [93, Theorem 6.18], there is a measure με which is a convex combination of Dirac masses of points in
B ̄R with rational coefficients such that
d2(μ ̃ε, με) < ε.
Allowing repetitions, we can find an Mε ∈ N and zm ∈ X, |zm| ≤ R, m = 1, . . . , Mε, such that
με = 1
Mε
Mε
X
m=1
δzm .
Now, we choose k ∈ N sufficiently large such that there is an N ∈ N such that
4 1 − nk
N Mε
R2 < ε2, nk ≤ N Mε.
Let the points x ̃l ∈ H, l = 1, . . . , N Mε be given by the points zm, m = 1, . . . , Mε, each repeated N -times. Set
μnk = 1
nk
nk
X
l=1
δx ̃l .
The points x ̃l, l = nk + 1, . . . , N Mε, are not present. Now, we rewrite the measures με and μnk. For με, we use the points yi ∈ X, i = 1, . . . , nkN Mε, consisting of the points zm, m = 1, . . . , Mε, each repeated nkN times, i.e.,
με = 1
nkN Mε
nkN Mε
X
i=1
δyi .
Similarly, for μnk, we use the points xi ∈ X, i = 1, . . . , nkN Mε, consisting of the points x ̃l, l = 1, . . . , nk, each repeated N Mε times, i.e.,
μnk = 1
nkN Mε
nkN Mε
X
i=1
δxi .
Note that in the measures με and μnk, at least n2
k points are the same, and thus at most nk(N Mε − nk) points are different. In order to estimate the Wasserstein distance between με an μnk, let us consider the following
transport map: We leave the n2
k points that coincide for both measures at their places and we assign the remaining points arbitrarily in such a way that the pushforward measure of με is μnk.
Then, recalling that all points are in B ̄R, we obtain the estimate
d2
2(με, μnk ) ≤ 1
nkN Mε
nk(N Mε − nk)(2R)2 = 1 − nk
N Mε
4R2 < ε2.
Taking ε = 1/j we construct our sequence nkj . □

54 F. DE FEO, F. GOZZI, A. ŚWIĘCH, AND L. WESSELS
Acknowledgments. Filippo de Feo acknowledges funding by the Deutsche Forschungsgemeinschaft (DFG, German Research Foundation) – CRC/TRR 388 "Rough Analysis, Stochastic Dynamics and Related Fields" – Project ID 516748464, by INdAM (Instituto Nazionale di Alta Matematica F. Severi) - GNAMPA (Gruppo Nazionale per l’Analisi Matematica, la Probabilità e le loro Applicazioni). Filippo de Feo and Fasuto Gozzi acknowledge funding by the Italian Ministry of University and Research (MUR) in the framework of-
 PRIN project 20223PNJ8K (Impact of the Human Activities on the Environment and Economic Decision Making in a Heterogeneous Setting: Mathematical Models and Policy Implications).
References
1. L. Ambrosio, N. Gigli and G. Savaré (2008). Gradient flows in metric spaces and in the space of probability measures. 2nd ed., Lectures in Mathematics ETH Zürich, Birkhäuser Verlag, Basel. 2. A. Aurell, R. Carmona and M. Laurière (2022). Stochastic graphon games: II. The linear–quadratic case. Appl. Math. Optim. 85 (3), no. 39.
3. E. Bayraktar, H. Cheung, I. Ekren, J. Qiu, H. M. Tai and X. Zhang (2025). Viscosity solutions of fully second-order HJB equations in the Wasserstein space. arXiv preprint arXiv:2501.01612. 4. E. Bayraktar, I. Ekren and X. Zhang (2025). Convergence rate of particle system for second-order PDEs on Wasserstein space. SIAM J. Control Optim. 63 (3), 1768–1782. 5. E. Bayraktar, I. Ekren and X. Zhang (2025). Comparison of viscosity solutions for a class of second-order PDEs on the Wasserstein space. C-
omm. Partial Differential Equations 50 (4), 570–613. 6. E. Bayraktar, I. Ekren, X. He and X. Zhang (2025). Comparison for semi-continuous viscosity solutions for second order PDEs on the Wasserstein space. arXiv preprint arXiv:2504.18697. 7. A. Bensoussan, P. J. Graber and S. C. P. Yam (2024). Control on Hilbert spaces and application to some mean field type control problems. Ann. Appl. Probab. 34 (4), 4085–4136. 8. A. Bensoussan, P. J. Graber and S. C. P. Yam (2025). Control on Hilbert space and -
mean field control: the common noise case. arXiv preprint arXiv:2502.07051. 9. C. Bertucci and P.-L. Lions (2024). An approximation of the squared Wasserstein distance and an application to Hamilton–Jacobi equations. arXiv preprint arXiv:2409.11793. 10. R. Buckdahn, J. Li, J. Li and C. Xing (2025). Path-dependent controlled mean-field coupled forward–backward SDEs: the associated stochastic maximum principle. SIAM J. Control Optim. 63 (3), 2124–2153. 11. A. Budhiraja, P. Dupuis and M. Fischer (201-
2). Large deviation properties of weakly interacting processes via weak convergence methods. Ann. Probab. 40 (1), 74–102.
12. M. Burzoni, V. Ignazio, A. M. Reppen and H. M. Soner (2020). Viscosity solutions for controlled McKean-Vlasov jump-diffusions. SIAM J. Control Optim. 58 (6), 1676–1699. 13. P. E. Caines and M. Huang (2020). Graphon mean field games and their equations. SIAM J. Control Optim. 59 (6), 4373–4399. 14. Z. Cao and M. Laurière (2025). Probabilistic analysis of graphon mean field control. arXiv preprint arXiv:2505.19664. 15. P. Cardaliaguet (2013). Notes on Mean-Field Games (from P-L. Lions’ Lectures -
at Collège de France), https://www.ceremade.dauphine.fr/~cardaliaguet/MFG20130420.pdf.
16. P. Cardaliaguet, S. Daudin, J. Jackson and P. E. Souganidis (2023). An algebraic convergence rate for the optimal control of McKean-Vlasov dynamics. SIAM J. Control Optim. 61 (6), 3341–3369.
17. P. Cardaliaguet, F. Delarue, J.-M. Lasry and P.-L. Lions (2019). The master equation and the convergence problem in mean field games. Ann. of Math. Stud. 201, Princeton University Press, Princeton, NJ. 18. P. Cardaliaguet, J. Jackson, N. Mimikos-Stamatopoulos and P. E. Souganidis (2023). Sharp convergence rates for mean field control in the region of strong regularity. arXiv preprint arXiv:2312.11373.
19. P. Cardaliaguet, J. Jackson and P. E. Souganidis (2025).Mean field control with absorption.arXiv preprint arXiv:2509.07877. 20. P. Cardaliaguet and P. E. Souganidis (2023). Regularity of the value function and quantitative propagation of chaos for mean field control problems. NoDEA Nonlinear Differential Equations Appl. 30 (2), 37 pp. 21. R. Carmona and F. Delarue (2015). Forward-backward stochastic differential equations and controlled McKean-Vlasov dynamics. Ann. Probab. 43 (5), 2647–2700.

STOCHASTIC OPTIMAL CONTROL OF INTERACTING PARTICLE SYSTEMS IN HILBERT SPACES 55
22. R. Carmona and F. Delarue (2018). Probabilistic theory of mean field games with applications. I: Mean Field FBSDEs, Control, and Games Probab. Theory Stoch. Model. 83, Springer, Cham.
23. R. Carmona and F. Delarue (2018). Probabilistic theory of mean field games with applications. II: Mean Field Games with Common Noise and Master Equations Probab. Theory Stoch. Model. 84, Springer, Cham. 24. R. Carmona, J.P. Fouque, S. M. Mousavi and L.H. Sun (2018). Systemic risk and stochastic games with delay, J. Optim. Theory Appl. 179 (2), 366–399. 25. A. Cecchin, S. Daudin, J. Jackson and M. Martini (2025). Quantitative convergence for mean field control with common noise and degenerate i-
diosyncratic noise. Electron. J. Probab. 30, 1–62. 26. P.-L. Chow (2007). Stochastic partial differential equations. Chapman & Hall/CRC Appl. Math. Nonlinear Sci. Ser., Chapman & Hall/CRC, Boca Raton, FL. 27. H. Cheung, H. M. Tai and J. Qiu (2025). Viscosity solutions of a class of second order Hamilton–JacobiBellman equations in the Wasserstein space. Appl. Math. Optim. 91 (1), Paper No. 23, 61 pp.
28. A. Cosso, F. Gozzi, I. Kharroubi, H. Pham and M. Rosestolato (2023). Optimal control of pathdependent McKean–Vlasov SDEs in infinite dimension. Ann. Appl. Probab. 33 (4), 2863–2918.
29. A. Cosso, F. Gozzi, I. Kharroubi, H. Pham and M. Rosestolato (2024). Master Bellman equation in the Wasserstein space: uniqueness of viscosity solutions. Trans. Amer. Math. Soc. 377 (1), 31–83.
30. A. M. G. Cox, S. Källblad, M. Larsson and S. Svaluto-Ferro (2024). Controlled measure-valued martingales: a viscosity solution approach. Ann. Appl. Probab. 34 (2), 1987–2035. 31. G. Da Prato and J. Zabczyk (2014). Stochastic equations in infinite dimensions, 2nd ed. Encyclopedia Math. Appl. 152, Cambridge University Press, Cambridge. 32. S. Daudin, F. Delarue and J. Jackson (2024). On the optimal rate for the convergence problem in mean field control. J. Funct. Anal. 287, Paper No. 110660, 94 -
pp. 33. S. Daudin, J. Jackson and B. Seeger (2025). Well-posedness of Hamilton–Jacobi equations in the Wasserstein space: non-convex Hamiltonians and common noise. Comm. Partial Differential Equations 50, 1–52. 34. S. Daudin, J. Jackson and B. Seeger (2025). Error estimates for finite-dimensional approximations of Hamilton–Jacobi–Bellman equations on the Wasserstein space. arXiv preprint arXiv:2510.02652. 35. S. Daudin and B. Seeger (2024). A comparison principle for semilinear Hamilton–Jacobi–Bel-
lman equations in the Wasserstein space. Calc. Var. Partial Differential Equations 63 (106), 36 pp.
36. A. De Crescenzo, M. Fuhrman, I. Kharroubi and H. Pham (2024). Mean-field control of non exchangeable systems. arXiv preprint arXiv:2407.18635. 37. A. De Crescenzo, F. de Feo and H. Pham (2025). Linear–quadratic optimal control for non-exchangeable mean-field SDEs and applications to systemic risk. arXiv preprint arXiv:2503.03318. 38. F. de Feo (2023). SDEs on Hilbert spaces: slow–fast systems of SPDEs, stochastic optimal control with delays and applications to economics and finance. Ph.D. Thes-
is, Politecnico di Milano. Available at https: //hdl.handle.net/10589/220474.
39. F. de Feo (2024). Stochastic optimal control problems with delays in the state and in the control via viscosity solutions and applications to optimal advertising and optimal investment problems. Decis. Econ. Finance. 1–31. 40. F. de Feo, S. Federico and A. Święch (2024). Optimal control of stochastic delay differential equations and applications to path-dependent financial and economic models. SIAM J. Control Optim. 62 (3), 1490–1520. 41. F. de Feo and S. Mekkaoui (2025). Optimal control of he-
terogeneous mean-field stochastic differential equations with common noise and applications to financial models. arXiv preprint arXiv:2511.18636 42. F. de Feo and A. Święch (2025). Optimal control of stochastic delay differential equations: optimal feedback controls. J. Differential Equations 420 (5), 450–508. 43. F. de Feo, A. Święch and L. Wessels (2025). Stochastic optimal control in Hilbert spaces: C1,1 regularity of the value function and optimal synthesis via viscosity solutions. Electron. J-
. Probab. 30, Paper No. 36, 39 pp. 44. F. Delarue, M. Martini and G. E. Sodini (2025). HJB equations driven by the Dirichlet–Ferguson Laplacian in Wasserstein–Sobolev spaces. arXiv preprint arXiv:2511.03522. 45. B. Djehiche, F. Gozzi, G. Zanco and M. Zanella (2022). Optimal portfolio choice with path dependent benchmarked labor income: a mean field model. Stoch. Process. Appl. 145, 48–85. 46. M. F. Djete (2022). Extended mean field control problem: a propagation of chaos result. Electron. J. Proba-
b. 27 (20), 53 pp. 47. M. F. Djete (2025). A non–exchangeable mean field control problem with controlled interactions. arXiv preprint arXiv:2511.00288.

56 F. DE FEO, F. GOZZI, A. ŚWIĘCH, AND L. WESSELS
48. M. F. Djete, D. Possamaï and X. Tan (2022). McKean–Vlasov optimal control: limit theory and equivalence between different formulations. Math. Oper. Res. 47 (4), 2891–2930. 49. R. Dumitrescu, B. Øksendal and A. Sulem (2018). Stochastic control for mean-field stochastic partial differential equations with jumps. J. Optim. Theory Appl. 176 (3), 559–584. 50. G. Fabbri (2008). A viscosity solution approach to the infinite-dimensional HJB equation related to a boundary control problem in a transport-
 equation. SIAM J. Control Optim. 47 (2), 1022–1052. 51. G. Fabbri, S. Faggian, S. Federico and F. Gozzi (2025). Optimal control in infinite dimensional spaces and economic modeling: state of the art and perspectives. arXiv preprint arXiv:2509.19909. 52. G. Fabbri, F. Gozzi and A. Święch (2017). Stochastic optimal control in infinite dimension: dynamic programming and HJB equations. With a contribution by M. Fuhrman and G. Tessitore. Probab. Theory Stoch. Model. 82, Springer, Cham. 53. S. Federico-
, D. Ghilli and F. Gozzi (2024). Linear–quadratic mean field games in Hilbert spaces. arXiv preprint arXiv:2402.14935. 54. S. Federico, F. Gozzi and A. Święch (2026). On mean field games in infinite dimension. J. Math. Pures Appl. (9) 205, Paper No. 103780, 33 pp. 55. G. Feichtinger, R. Hartl, S. Sethi (1994). Dynamical Optimal Control Models in Advertising: Recent Developments. Management Science (40), 195–226. 56. J. Feng and T. G. Kurtz (2006). Large deviations for stochastic processes. Math. S-
urveys Monogr. 131, Amer. Math. Soc., Providence, RI. 57. D. Firoozi and H. Liu (2025). Hilbert space–valued LQ mean field games: an infinite–dimensional analysis. SIAM J. Control Optim. 63 (5).
58. D. Firoozi, A. Kratsios and X. Yang (2025). Simultaneously solving infinitely many LQ mean field games in Hilbert spaces: the power of neural operators. arXiv preprint arXiv:2510.20017. 59. M. Fischer and G. Livieri (2016). Continuous time mean-variance portfolio optimization through the mean field approach. ESAIM Probab. Stat. 20, 30–44. 60. M. Fornasier and F. Solombrino (2014). Mean-field optimal control. ESAIM Control Optim. Calc. Var. 20 (4), 1123–1152. 61. J.-P. Fouque and Z. Zhang (2018-
). Mean field game with delay: a toy model. Risks 6 (3), 1–17. 62. J.-P. Fouque and Z. Zhang (2020). Deep learning methods for mean field control problems with delay. Front. Appl. Math. Stat. 6 (3), 1–17.
63. W. Gangbo (2018). On some analytical aspects of mean field games. Lecture notes based on a class taught in Berkeley during Fall 2018. Available at https://www.math.ucla.edu/~wgangbo/publications/ MFG-UCB-Final2.pdf.
64. W. Gangbo, S. Mayorga and A. Święch (2021). Finite dimensional approximations of Hamilton–JacobiBellman equations in spaces of probability measures. SIAM J. Math. Anal. 53 (2), 1320–1356. 65. W. Gangbo and A. Tudorascu (2019). On differentiability in the Wasserstein space and well-posedness for Hamilton–Jacobi equations. J. Math. Pures Appl. 125 (7), 119–174. 66. L. Gawarecki and V. Mandrekar (2011). Stochastic differential equations in infinite dimensions with applications to stochastic parti-
al differential equations. Probability and its Applications (New York), Springer, Heidelberg. 67. M. Germain, H. Pham and X. Warin (2022). Rate of convergence for particle approximation of PDEs in Wasserstein space. J. Appl. Probab. 59 (4), 992–1008. 68. F. Gozzi and C. Marinelli (2006). Stochastic optimal control of delay equations arising in advertising models. In: Stochastic partial differential equations and applications–VII, 133–148, Lect. Notes Pure Appl. Math. 245, Chapman & Hall/CRC, Boca -
Raton, FL. 69. F. Gozzi, F. Masiero and M. Rosestolato (2024). An optimal advertising model with carryover effect and mean field terms. Math. Finance Econ. 18 (2), 413–427. 70. I. Kharroubi, S. Mekkaoui and H. Pham (2025). Stochastic maximum principle for optimal control problem of non exchangeable mean field systems. arXiv preprint arXiv:2506.05595. 71. D. Lacker (2017). Limit theory for controlled McKean–Vlasov dynamics. SIAM J. Control Optim. 55 (3), 1641–1672. 72. J.-M. Lasry and P.-L. Lions (-
1986). A remark on regularization in Hilbert spaces. Israel J. Math. 55, 257–266.

STOCHASTIC OPTIMAL CONTROL OF INTERACTING PARTICLE SYSTEMS IN HILBERT SPACES 57
73. H. Liao, A. R. Mészáros, C. Mou and C. Zhou (2024). Convergence analysis of controlled particle systems arising in deep learning: from finite to infinite sample size. arXiv preprint arXiv:2404.05185. 74. P.-L. Lions (2007–2011). Mean-field games. Cours au Collège de France. 75. H. Ma, Y. Shi and W. Wang (2024). Sufficient maximum principle for partially observed mean-field stochastic optimal control problems with delays. Evol. Equ. Control Theory 13 (6), 1436–1459. 76. M. Martini (2023). Kolmo-
gorov equations on spaces of measures associated to nonlinear filtering processes. Stoch. Process. Appl. 161, 385–423.
77. M. Martini (2024). Kolmogorov equations on the space of probability measures associated to the nonlinear filtering equation: the viscosity approach. Stoch. Anal. Appl. 42 (6), 987–999. 78. S. Mayorga and A. Święch (2023). Finite dimensional approximations of Hamilton–Jacobi–Bellman equations for stochastic particle systems with common noise. SIAM J. Control Optim. 61 (2), 820–851. 79. Q. Meng and Y. Shen (2015). Optimal control of mean-field jump-diffusion systems with delay: a stochastic maxi-
mum principle approach. J. Comput. Appl. Math. 279 (1), 13–30. 80. M. Nerlove and K.J. Arrow (1962). Optimal advertising policy under dynamic conditions. Economica 29 (114), 129–142. 81. E. Neuman and S. Tuschmann (2024). Stochastic graphon games with memory. arXiv preprint arXiv:2411.05896. 82. Z. Ren, X. Tan, N. Touzi and J. Yang (2023). Entropic optimal planning for path-dependent mean field games. SIAM J. Control Optim. 61 (3), 1415–1437. 83. M. Ricciardi and M. Rosestolato (2024). Mean field -
games incorporating carryover effects: optimizing advertising models. Decis. Econ. Finance (2024). 84. Y. Shi, T. Wang and J. Yong (2013). Mean-field backward stochastic Volterra integral equations. Discrete Contin. Dyn. Syst. Ser. B 18 (7), 1929–1967.
85. H. M. Soner and Q. Yan (2024). Viscosity solutions for McKean–Vlasov control on a torus. SIAM J. Control Optim. 62 (2), 903–923. 86. H. M. Soner and Q. Yan (2024). Viscosity solutions of the eikonal equation on the Wasserstein space. Appl. Math. Optim. 90, Paper No. 1, 16 pp. 87. J. B. Spille and W. Stannat (2025). Pontryagin maximum principle for McKean–Vlasov stochastic reactiondiffusion equations. arXiv preprint arXiv:2507.16288. 88. W. Stannat and A. Vogler (2024). The Lions derivative in -
infinite dimensions – application to higher order expansion of mean-field SPDEs. arXiv preprint arXiv:2407.14884. 89. A. Święch and L. Wessels (2024). Finite dimensional projections of HJB equations in the Wasserstein space. Ann. Appl. Probab. 35 (4), 3653–3695.
90. M. Talbi (2024). A finite-dimensional approximation for partial differential equations on Wasserstein space. Stoch. Process. Appl. 177, Paper No. 104445, 18 pp. 91. M. Tang, Q. Meng and M. Wang (2019). Forward and backward mean-field stochastic partial differential equation and optimal control. Chinese Ann. Math. Ser. B 40 (4), 515–540. 92. N. Touzi, J. Zhang and J. Zhou (2024). Viscosity solutions for HJB equations on the process space: application to mean field control with common noise. arX-
iv preprint arXiv:2401.04920. 93. C. Villani (2009). Optimal transport. Old and new. Grundlehren Math. Wiss. 338, Springer–Verlag, Berlin. 94. C. Wu and J. Zhang (2020). Viscosity solutions to parabolic master equations and McKean–Vlasov SDEs with closed-loop controls. Ann. Appl. Probab. 30 (2), 936–986.
Institut für Mathematik, Technische Universität Berlin, Berlin, Germany Email address: defeo@math.tu-berlin.de
Dipartimento di AI, Data and Decision Sciences, LUISS University, Roma, Italy Email address: fgozzi@luiss.it
School of Mathematics, Georgia Institute of Technology, Atlanta, GA 30332, USA Email address: swiech@math.gatech.edu
School of Mathematics, Georgia Institute of Technology, Atlanta, GA 30332, USA Email address: wessels@gatech.edu

---

## Processing Information

- **Processing Library:** Zotero PDFWorker
- **Processing Date:** 2026-02-10T18:17:59.458Z
- **Text Length:** 147662 characters
- **Success:** Text extraction completed
- **PDF Library Used:** Zotero PDFWorker
- **Pages Processed:** 57 of 57
