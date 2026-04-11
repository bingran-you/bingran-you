# PDF Document: Wang and Fazlyab - 2025 - Anytime-Feasible First-Order Optimization via Safe Sequential QCQP.pdf

**File Path:** Wang and Fazlyab - 2025 - Anytime-Feasible First-Order Optimization via Safe Sequential QCQP.pdf

**Processed Date:** 2026-02-10T18:18:32.621Z

**File Size:** 782.28 KB

**Total Pages:** 13

**Extracted Pages:** 13

**PDF Library:** Zotero PDFWorker

**Attachment Item ID:** 3344

**Title:** Anytime-Feasible First-Order Optimization via Safe Sequential QCQP

**Collection:** Large Files > Random Papers

---

## Extracted Text Content

IEEE TRANSACTIONS AND JOURNALS TEMPLATE 1
Anytime-Feasible First-Order Optimization via
Safe Sequential QCQP
Jiarui Wang and Mahyar Fazlyab
Abstract— This paper presents the Safe Sequential Quadratically Constrained Quadratic Programming (SS-QCQP) algorithm, a first-order method for smooth inequality-constrained nonconvex optimization that guarantees feasibility at every iteration. The method is derived from a continuous-time dynamical system whose vector field is obtained by solving a convex QCQP that enforces monotonic descent of the objective and forward invariance of the feasible set. The resulting continuous-time dynamics achieve-
 an O(1/t) convergence rate to first-order stationary points under standard constraint qualification conditions. We then propose a safeguarded Euler discretization with adaptive step-size selection that preserves this convergence rate while maintaining both descent and feasibility in discrete time. To enhance scalability, we develop an active-set variant (SS-QCQP-AS) that selectively enforces constraints near the boundary, substantially reducing computational cost without compromising theoretical -
guarantees. Numerical experiments on a multi-agent nonlinear optimal control problem demonstrate that SS-QCQP and SS-QCQP-AS maintain feasibility, exhibit the predicted convergence behavior, and deliver solution quality comparable to second-order solvers such as SQP and IPOPT.
Index Terms— Constrained optimization, Nonconvex optimization, First-order methods, Anytime algorithms, Quadratically constrained quadratic programming (QCQP), Safe optimization, Control barrier functions.
I. INTRODUCTION
Constrained optimization forms the foundation of numerous engineering disciplines, including optimal power flow [1], optimal control [2], and robotics [3]. In many practical settings, particularly when algorithms are deployed on high-frequency physical systems such as quadrotors, optimization must be executed in real time [4] [5]. This necessitates producing feasible solutions prior to full convergence while operating under strict computational limitations. Meeting these requirements poses fundame-
ntal challenges for the design of optimization methods that are simultaneously efficient, reliable, and capable of enforcing constraints at all intermediate iterates. A key requirement in this setting is anytime feasibility. This property guarantees that the algorithm can be safely interrupted at any time while still returning a feasible, though possibly suboptimal, solution. Such a property is essential in real-world deployments, where constraints frequently encode
The authors are with the Department of Electrical and Computer Engineering, Johns Hopkins University, Baltimore, MD 21218 USA (email: {jwang486, mahyarfazlyab}@jhu.edu).
safety conditions; violating them may induce instability, equipment damage, or safety hazards. Another desirable property is monotonic descent, meaning that the objective value decreases at every iteration. Since premature termination is common in real-time settings, monotonic descent ensures consistent improvement over time and provides a quantifiable performance guarantee for any intermediate solution. A third desirable property is scalability. Modern machine learning, control, and robotics appl-
ications increasingly involve high-dimensional decision variables and large numbers of constraints, for example, model predictive control with long horizons, multi-agent coordination tasks, optimization problems arising in real-time perception and planning, or datadriven verification [6]. In such settings, each iteration must be computationally inexpensive, ideally relying only on first-order information, so that the algorithm can meet strict real-time deadlines and be deployed on resource-limited-
 hardware. Despite the importance of these properties, most classical algorithms do not satisfy them simultaneously. Interior-point methods [7]–[9] enforce feasibility only asymptotically and generally allow infeasible iterates until convergence, which is incompatible with safety-critical applications. Sequential Quadratic Programming (SQP) methods [10]–[12] may violate constraints even when initialized at a feasible point due to the mismatch between linearized and nonlinear constraints. Penalty a-
nd augmented Lagrangian methods deliberately relax constraints and therefore cannot guarantee feasibility during intermediate iterations. Moreover, many of these classical methods require second-order information or the solution of large linear systems at each iteration, which limits scalability and hinders deployment in real-time environments. These limitations highlight the need for first-order optimization algorithms that simultaneously ensure anytime feasibility, monotonic descent, and scalabi-
lity. Our Contribution: To address the limitations of existing constrained optimization methods, this paper proposes a new first-order framework for solving general inequalityconstrained nonconvex problems. Our main contributions are as follows: (1) Adopting a control-theoretic perspective, we design a continuous-time dynamical system whose vector field is obtained by solving a convex quadratically constrained quadratic program (QCQP) that uses only first-order information. The dynamics guarantee -
forward invariance of the feasible set, monotonic descent, and global convergence to Karush–Kuhn–Tucker (KKT) points. We further show that the continuous-time system achieves an O(1/t) ergodic conver
arXiv:2511.19675v1 [math.OC] 24 Nov 2025

2 IEEE TRANSACTIONS AND JOURNALS TEMPLATE
gence rate in terms of a first-order stationary measure. (2) We discretize the continuous-time dynamics using a safeguarded Armijo-type line search. The discrete-time method preserves anytime feasibility and monotonic decrease of the objective and matches the continuous-time O(1/t) rate. (3) To enhance scalability in problems with many constraints, we introduce an active-set variant that enforces only a subset of nearly active constraints at each iteration, substantially reducing periteration comp-
utational cost. (4) We establish convergence guarantees for both the full and active-set variants, showing that each achieves an O(1/k) ergodic convergence rate in discrete time under standard Mangasarian-Fromovitz constraint qualification (MFCQ) and Lipschitz assumptions, matching the rate of classical gradient descent for unconstrained problems. (5) We provide detailed implementation guidelines, including conic reformulations, solver considerations, and adaptive hyperparameter selection, to ensu-
re strong empirical performance in practical deployments.
A. Related Work
1) SQP Methods: A widely used approach for solving nonconvex constrained optimization problems is to approximate them by a sequence of convex subproblems. The most prominent example is Sequential Quadratic Programming (SQP), which computes search directions by solving a convex quadratic program (QP) obtained from a second-order expansion of the Lagrangian and a first-order linearization of the constraints. Viewed analytically, SQP corresponds to applying Newton’s method to the KKT conditions. Howe-
ver, because linearized constraints only approximate the feasible region locally, the QP step can be overly optimistic—improving the objective while violating the true nonlinear constraints. Line search on an exact penalty function often forces very small step sizes, a limitation known as the Maratos effect [13]. Classical remedies, such as augmented Lagrangian merit functions [14] or second-order correction steps [15], [16], improve robustness but still do not guarantee anytime feasibility or mon-
otonic descent. In model predictive control (MPC), SQP variants have been adapted to return feasible iterates, for instance through double-loop schemes [17] or feasibility perturbation techniques [18]. Nevertheless, these methods generally lack monotonic decrease guarantees and may still exhibit constraint violations during intermediate iterations. 2) QCQP Methods: Sequential quadratically constrained quadratic programming (SQCQP) methods follow a structure similar to SQP, but replace linearized c-
onstraints with quadratic approximations, leading to a QCQP subproblem at each iteration. Classical approaches construct second-order Taylor expansions of the constraints, which requires computing Hessians and generally yields nonconvex QCQPs. To avoid these difficulties, Fukushima [19] proposed computing a search direction via a QCQP but, due to the lack of efficient QCQP solvers at the time, implemented this idea through two successive convex QPs. Variants for convex problems have also been expl-
ored [20], though these methods still rely on line search with an l1 penalty merit function and therefore do not guarantee anytime feasibility or monotonic descent.
A related line of work is the phase-I–phase-II SQCQP scheme of [21], which uses quadratic approximations of both the objective and the constraints sharing a common Hessian, chosen as a positive multiple of the identity. Once feasibility is achieved, this approach ensures both anytime feasibility and monotonic decrease, with convergence established under standard assumptions including twice differentiability, MFCQ, second-order sufficiency, and strict complementarity. However, the method requires i-
ncluding all constraints in every QCQP subproblem, a significant limitation for large-scale problems with many constraints. 3) First-Order Methods: A growing body of work develops first-order algorithms for constrained optimization motivated by control theory [22]–[24] or Lipschitz-based surrogate modeling. One line of research designs continuous-time dynamics that guarantee invariance of the feasible set. In the safe gradient flow framework [25], each constraint is treated as a Control Barrier Fu-
nction (CBF) [26], yielding a vector field that follows the unconstrained gradient flow as closely as possible while enforcing feasibility in continuous time. However, when discretized, these flows generally lose their invariance properties–an issue closely related to the Maratos effect–so that anytime feasibility cannot be guaranteed in discrete time. A related formulation in [27] provides a discretetime update with convergence guarantees, but feasibility is not preserved at intermediate iterates-
 and the stepsize depends on problem-dependent constants that are difficult to estimate in practice. A complementary line of first-order methods constructs conservative local approximations of the objective and constraints using Lipschitz bounds. Representative examples include Successive Convex Approximation (SCA) [28] and the Moving Ball Approximation (MBA) method [29]. While these approaches guarantee feasibility of the surrogate subproblem, they require knowledge of the Lipschitz constants of -
the gradients, which are often unavailable or hard to estimate. Lu et al. [30] proposed a line-search-based Sequential Convex Programming (SCP) algorithm that avoids explicit Lipschitz constants, but each line-search step involves solving a convex QCQP, resulting in substantially higher computational cost. Overall, existing first-order methods either lack anytime feasibility after discretization or rely on problem-dependent constants, limiting their applicability in real-time or large-scale settin-
gs.
B. Notation
We denote the space of n-dimensional real vectors by Rn. For a vector x ∈ Rn, ∥x∥2 denotes the Euclidean norm, and ∥x∥P =
√
x⊤P x denotes the weighted P -norm, where P ∈ Rn×n is symmetric positive definite (P ≻ 0). For a natural number m, we use [m] := {1, 2, . . . , m} to denote the index set of the first m integers. For x ∈ Rn and r > 0, B(x, r) denotes the open ball centered at x with radius r.
II. BACKGROUND AND PROBLEM STATEMENT
This section introduces the constrained optimization problem studied in the paper, reviews the assumptions and optimal

AUTHOR et al.: TITLE 3
ity conditions used throughout, and summarizes key methods that motivate the development of our algorithm.
A. Problem Setup and Assumptions
We consider inequality-constrained, possibly nonconvex, optimization problems of the form
mxin f (x) (OPT)
s.t. gi(x) ≤ 0, i ∈ [m],
where f : Rn → R and gi : Rn → R are continuously differentiable functions. We denote the feasible set as
F = {x ∈ Rn : gi(x) ≤ 0 ∀i ∈ [m]}.
For x ∈ F , we denote the set of active constraints at x as I(x) = {i ∈ [m] : gi(x) = 0}.
Definition 1: A continuously differentiable function f : Rn → R is L-smooth if its gradient is L-Lipschitz, i.e.,
∥∇f (x) − ∇f (y)∥2 ≤ L∥x − y∥2 ∀x, y.
The L-smoothness of a function f implies the following quadratic upper bound (see, e.g., [31]):
f (y) ≤ f (x) + ∇f (x)⊤(y − x) + L
2 ∥y − x∥2
2 ∀x, y. (1)
Definition 2 (MFCQ): We say the Mangasarian-Fromovitz constraint qualification (MFCQ) holds at x for (OPT) if ∃d ∈ Rn such that ∇gi(x)⊤d < 0 ∀i ∈ I(x). Assumption 1: Throughout the paper, the following assumptions are imposed on (OPT). 1. f is Lf -smooth and gi is Li-smooth ∀i ∈ [m]. 2. (OPT) is feasible and bounded below, and the optimal value is achieved at x⋆. 3. The Mangasarian-Fromovitz constraint qualification (MFCQ) holds for all x ∈ F .
Definition 3: A point x ∈ Rn is said to be stationary for (OPT) if there exists λ ∈ Rm such that the pair (x, λ) satisfies the Karush–Kuhn–Tucker (KKT) conditions:
∇f (x) +
m
X
i=1
λi∇gi(x) = 0, (2a)
gi(x) ≤ 0 ∀i ∈ [m], (2b)
λ ≥ 0, (2c)
λigi(x) = 0 ∀i ∈ [m]. (2d)
B. Background
1) Safe Gradient Flow: Leveraging the theory of Control Barrier Functions (CBFs) [32], Allibhoy et al. [22] introduced the safe gradient flow dynamics for solving constrained optimization problems of the form (OPT). Specifically, the safe gradient flow is defined as
x ̇ = u ̃(x), (3)
where the velocity field u ̃(x) is obtained as the solution of the following convex quadratic program (QP):
u ̃(x) := arg muin
1
2 ∥u + ∇f (x)∥2
2 (4)
s.t. ∇gi(x)⊤u ≤ −αgi(x), ∀i ∈ [m],
with α > 0 a prescribed parameter. This QP can be interpreted in two complementary ways. From a control-theoretic perspective, the QP computes the smallest correction to the unconstrained gradient descent direction that ensures satisfaction of the differential inequalities
g ̇i(x) + αgi(x) ≤ 0, ∀i ∈ [m], (5)
which serve as control barrier conditions. These inequalities guarantee both forward invariance and exponential stability of the feasible set. In particular, if the initial condition is feasible, gi(x(0)) ≤ 0, then gi(x(t)) ≤ 0 for all t ≥ 0; moreover, if a constraint is initially violated, gi(x(0)) > 0, its violation decays exponentially, i.e.,
gi(x(t)) ≤ gi(x(0))e−αt.
From an optimization standpoint, when α = 1, the QP in (4) projects the negative gradient −∇f (x) onto the linearized feasible set
{ u : ∇gi(x)⊤u ≤ −gi(x), ∀i ∈ [m] }, (6)
This coincides with the SQP search direction under an identity Hessian approximation of the Lagrangian and has also appeared in the MPC literature as a means of generating feasible descent directions [33]. Under the Mangasarian–Fromovitz constraint qualification (MFCQ) and the constant rank condition (CRC) [34], the mapping x 7→ u ̃(x) is locally Lipschitz [22]. This guarantees existence and uniqueness of solutions of (3). Moreover, if x⋆ satisfies u ̃(x⋆) = 0, then (x⋆, λ⋆) satisfies the KKT cond-
itions of (OPT), and conversely. If x⋆ is an isolated stationary point, it is asymptotically stable; exponential stability follows under LICQ, strict complementarity, and the second-order sufficient condition [22, Thm. 5.7]. Although these results provide strong guarantees for the continuous-time system, the analysis in [22] does not address the discretization required for numerical implementation. In particular, the anytime feasibility property—which holds exactly in continuous time—may be lost u-
pon discretization.
2) Constrained Gradient Flow (Descent): In closely related work, Muehlebach et al. [27] proposed the constrained gradient flow, in which the invariance condition (5) is enforced only for active or violated constraints. This modification reduces the number of constraints appearing in the QP (4), but it renders the mapping x 7→ u ̃(x) nonsmooth. The authors further developed a constant–step size Euler discretization of the resulting dynamics and established that, under convexity assumptions on probl-
em (OPT), the squared distance to an optimal solution decreases at a rate of O(1/k). However, the discrete-time scheme in [27] does not guarantee feasibility of the iterates, and its admissible step size depends on problemdependent constants that are often difficult to estimate in practice. In the next section, we address these issues by developing a new continuous-time dynamical system and an associated safeguarded discretization procedure that provably preserves feasibility at every iteration wh-
ile ensuring monotonic descent of the objective.

4 IEEE TRANSACTIONS AND JOURNALS TEMPLATE
III. SAFE SEQUENTIAL QCQP
In this section, we develop a continuous-time dynamical system x ̇ = u(x) and an associated Euler discretization for solving problem (OPT). Given an iterate x(k), the update takes the form
x(k+1) = x(k) + t(k)u(x(k)), (7)
where the vector field (or search direction) u(x(k)) and step size t(k) > 0 are designed to guarantee two fundamental properties: (1) Anytime feasibility: If the initial iterate x(0) satisfies gi(x(0)) ≤ 0 for all i ∈ [m], then feasibility is maintained at every iteration, i.e.,
gi(x(k)) ≤ 0, ∀k ≥ 0, i ∈ [m]. (8)
(2) Monotonic descent: The sequence of objective values is strictly decreasing,
f (x(k+1)) < f (x(k)), ∀k ≥ 0. (9)
The proposed method, referred to as the Safe Sequential QCQP (SS-QCQP) algorithm, constructs u(x(k)) by solving a convex quadratically constrained quadratic program (QCQP) that locally approximates (OPT) while enforcing feasibility (Section III-A). The step size tk is then selected to guarantee both a sufficient decrease in the objective and preservation of safety along the resulting feasible direction (Section III-D).
A. ODE Construction
Discretizing the safe gradient flow (3) into an iterative algorithm introduces a fundamental difficulty: the linearization of the constraints in (4) neglects curvature, which can cause infeasibility for any positive step size. To illustrate this, consider a point x where gi(x) = 0 for some i ∈ [m] (an active constraint). In this case, the feasible set of (4) permits
∇gi(x)⊤u ̃(x) = 0, (10)
meaning that u ̃(x) can be tangent to the zero-level set of gi. Consequently, taking any positive step in the direction of u ̃(x) may violate feasibility, i.e.,
gi(x + tu ̃(x)) > 0, ∀ t > 0. (11)
This phenomenon, similar to the Maratos effect, arises from the mismatch between the local linear approximation of the constraints and their true nonlinear geometry. To mitigate this limitation, we incorporate a quadratic correction term into the feasibility constraints of the QP (4), leading to the following convex quadratically constrained quadratic program (QCQP):
u(x) := arg muin
1
2 ∥u + ∇f (x)∥2
2 (SS-QCQP(x))
s.t. ∇gi(x)⊤u ≤ −αgi(x) − wi∥u∥2
2, ∀i ∈ [m],
where α > 0 and wi > 0 are prescribed parameters. When gi(x) = 0, i.e., when x lies on the boundary of the feasible region, the additional quadratic term wi∥u∥22 ensures that
∇gi(x)⊤u(x) < 0, (12)
Fig. 1: The search directions computed by solving the QP (4) and the QCQP (SS-QCQP(x)) where x = x1, x2
⊤, the objective f (x) = x2 is a linear function and the constraint g(x) = ∥x∥22−1 ≤ 0 is a unit ball constraint. Here we scale the search directions differently so that they do not overlap. When x is on the boundary of the feasible region, i.e., g(x) = 0, (4) might generate a direction tangent to the boundary, while (SS-QCQP(x)) tilts the direction towards the interior of the feasible region.
thereby preventing the vector field from being tangent to the constraint boundary. Geometrically, the penalty wi|u|2 tilts the direction towards the interior of the feasible set (see Figure 1), thereby providing a curvature-aware safeguard absent in the original QP formulation. In the next subsection, we establish key properties of the direction field u(x) defined by (SS-QCQP(x)), including feasibility preservation, regularity, and its correspondence with KKT points of (OPT).
B. Properties of the Search Direction
We begin by showing that (SS-QCQP(x)) always admits a strictly feasible point whenever the original problem (OPT) satisfies MFCQ. Because the QCQP is convex, strict feasibility guarantees that the optimizer u(x) exists and is unique.
Lemma 1 (Strict Feasibility of (SS-QCQP(x))): Suppose the MFCQ condition holds for (OPT) and that x is feasible. Then (SS-QCQP(x)) is strictly feasible. Proof: Under MFCQ, there exists a vector u such that
∇gi(x)⊤u < 0, ∀i ∈ I(x),
where I(x) := {i ∈ [m] : gi(x) = 0} denotes the set of active constraints. We consider two cases.
Case 1: i ∈ I(x) (active constraints). Since gi(x) = 0 and ∇gi(x)⊤u < 0, choose any
0 < η1 < min
i∈I(x)
−∇gi(x)⊤u wi∥u∥22
.
Then uˆ1 := η1u satisfies
∇gi(x)⊤uˆ1 = η1∇gi(x)⊤u < −wi∥uˆ1∥2
2 = −αgi(x)−wi∥uˆ1∥2
2,
for all i ∈ I(x).

AUTHOR et al.: TITLE 5
Case 2: i ∈/ I(x) (inactive constraints). For these indices, gi(x) < 0. The inequality
∇gi(x)⊤(ηu) ≤ −αgi(x) − wi∥ηu∥2
2
is quadratic in η. It holds strictly for any
0 < η2 < min
i∈/I(x)
−∇gi (x)⊤ u+
√
(∇gi (x)⊤ u)2 −4αwi ∥u∥2
2 gi (x) 2wi ∥u∥2
2
.
Finally, let η := min{η1, η2} and set uˆ := ηu. Then uˆ satisfies
∇gi(x)⊤uˆ < −αgi(x) − wi∥uˆ∥2
2, ∀i ∈ [m],
showing that (SS-QCQP(x)) is strictly feasible. Theorem 1: Assume that problem (OPT) satisfies Assumption 1, and let x be a feasible point of (OPT). Then the solution u(x) to (SS-QCQP(x)) satisfies:
1) u(x) = 0 if and only if x is a stationary point of (OPT). 2) The search direction is a descent direction for f , i.e.,
∇f (x)⊤u(x) ≤ −∥u(x)∥2
2. (13) Proof: Since (SS-QCQP(x)) is convex and strictly feasible (by the preceding lemma), strong duality holds and the KKT conditions are necessary and sufficient [35]. Define
ci(u; x) := ∇gi(x)⊤u + wi∥u∥2
2 + αgi(x), i ∈ [m].
The KKT conditions of (SS-QCQP(x)) state that there exists λ(x) ∈ Rm
≥0 such that
u(x) + ∇f (x) +
m
X
i=1
λi(x) ∇gi(x) + 2wiu(x) = 0, (14a)
ci u(x); x ≤ 0, i ∈ [m], (14b)
λi(x) ≥ 0, i ∈ [m], (14c)
λi(x) ci u(x); x = 0, i ∈ [m]. (14d)
Part (1): ( =⇒ ) Setting u(x) = 0 in (14a) gives
∇f (x) +
m
X
i=1
λi(x) ∇gi(x) = 0.
Complementarity (14d) with u(x) = 0 yields αλi(x)gi(x) = 0, so λi(x) = 0 whenever gi(x) < 0, while λi(x) ≥ 0 is allowed if gi(x) = 0. Thus, x together with multipliers satisfies the KKT conditions of (OPT), proving stationarity. ( ⇐= ) Let x be a stationary point of (OPT). By Definition 3, there exists λ such that (x, λ) satisfies (2). Letting u = 0, (2a) gives
u + ∇f (x) +
m
X
i=1
λi(x) ∇gi(x) + 2wiu = 0.
Complementarity (2d) yields λici(0; x) = 0, and (2b) yields ci(0, ; x) = αgi(x) ≤ 0. Thus, the pair (0, λ) satisfies the KKT conditions (14). Since (SS-QCQP(x)) is a convex problem with a strongly convex objective, u = 0 is the unique solution to (SS-QCQP(x)).
Part (2): Taking the inner product of (14a) with u(x) gives
∇f (x)⊤u(x)
=− 1+2
m
X
i=1
λi(x)wi ∥u(x)∥22 −
m
X
i=1
λi(x)∇gi(x)⊤u(x)
=− 1+2
m
X
i=1
λi(x)wi ∥u(x)∥22 +
m
X
i=1
λi(x) αgi(x) + wi∥u(x)∥22
=− 1+
m
X
i=1
λi(x)wi ∥u(x)∥22 +
m
X
i=1
λi(x)αgi(x)
≤ − ∥u(x)∥22.
Here we use the complementarity (14d) to get the second equality.
C. Convergence Analysis of Continuous-Time Dynamics
With the properties of the search direction u(x) established in Theorem 1, we define the continuous-time system
x ̇ (t) = u(x(t)) with x(0) given (15)
to solve (OPT), where u(x) is the unique solution to (SS-QCQP(x)). For this ODE to be well posed, we must ensure that the mapping x 7→ u(x) is continuous on a neighborhood of the feasible set F . This property guarantees the existence of solutions to the ODE. In the following lemma, we will first extend the strict feasibility result of Lemma 1 from feasible points to an entire open neighborhood of F . Then, we will show that every solution trajectory converges to the set of first-order stationary -
points of (OPT). Lemma 2: There exists an open set U containing F such that the QCQP (SS-QCQP(x)) is strictly feasible for all x ∈ U . Proof: For any x ∈ F, Lemma 1 establishes that (SS-QCQP(x)) is strictly feasible; that is, there exist u and δi < 0 such that
αgi(x) + ∇gi(x)⊤u + wi∥u∥2
2 = δi, ∀i ∈ [m].
Since each gi is Li-smooth, there exists εi(x) > 0 such that
αgi(y) + ∇gi(y)⊤u + wi∥u∥2
2 ≤ δi
2 < 0,
for all y ∈ B(x, εi(x)). Hence, (SS-QCQP(y)) remains strictly feasible for all y ∈ B x, mini εi(x) . Defining
U :=
[
x∈F
B x, miin εi(x) ,
we conclude that (SS-QCQP(x)) is strictly feasible for all x ∈ U.
Existence of Trajectories: The continuity of u(·) established above guarantees existence of solutions to the ODE (15), but it does not ensure uniqueness. Uniqueness would require local Lipschitz continuity of u(·), which in turn depends on the stability of the active-set structure of (SS-QCQP(x)). Such stability is typically ensured by the Constant Rank Constraint Qualification (CRC) applied directly to the QCQP. However, CRC is considerably stronger than MFCQ and is rarely imposed in nonlinear pr-
ogramming, where regularity assumptions are made for the original problem (OPT) rather than for subproblems such as (SS-QCQP(x)).

6 IEEE TRANSACTIONS AND JOURNALS TEMPLATE
Moreover, CRC for (OPT) does not imply CRC for (SS-QCQP(x)). If the original problem satisfies CRC at a feasible point x, then the gradients of its active constraints, {∇gi(x) : gi(x) = 0}, are linearly independent. But when x is strictly feasible, this set is empty, and CRC provides no information. In contrast, the QCQP (SS-QCQP(x)) may still have active constraints,
∇gi(x)⊤u(x) + αgi(x) + wi∥u(x)∥2
2 = 0.
The gradients associated with these QCQP-active constraints,
∇gi(x)+2wiu(x) : ∇gi(x)⊤u(x)+αgi(x)+wi∥u(x)∥2
2=0 ,
need not be linearly independent, even if the original problem satisfies CRC. Thus, the QCQP subproblem may fail to satisfy CRC regardless of any regularity properties possessed by (OPT). For these reasons, we do not assume uniqueness of trajectories, and all convergence guarantees below apply to every solution of the ODE. Theorem 2: Suppose problem (OPT) satisfies Assumption 1, and x(t) is any solution to the ODE (15) with a feasible initial condition x(0) ∈ F . Then x(t) satisfies the following -
properties:
1) Anytime feasibility:
gi(x(t)) ≤ 0, ∀ t > 0, i ∈ [m].
2) Convergence:
1 2
Zt
0
∥u(x(τ ))∥2
2 dτ ≤ f (x(0)) − f ⋆, ∀ t > 0.
where f ⋆ is the optimal value of (OPT). Proof: ∀i ∈ [m], when gi(x) = 0, we have
g ̇i(x(t)) = ∇gi(x)⊤u(x(t)) ≤ −αgi(x) − wi∥u(x(t))∥2
2 ≤ 0.
According to Nagumo’s theorem [36] [37], the 0-sublevel set {x : gi(x) ≤ 0} is forward-invariant. Let f ⋆ be the optimal value of (OPT) and define the Lyapunov function V (x(t)) = f (x(t)) − f ⋆ + 1
2
Rt
0 ∥u(x(τ ))∥22dτ .
Using the result ∇f (x(t))⊤u(x(t)) ≤ −∥u(x(t))∥22 from Theorem 1, we have
V ̇ (x(t)) = ∇f (x(t))⊤u(x(t)) + 1
2 ∥u(x(t))∥2
2
≤ −1
2 ∥u(x(t))∥2
2
Thus V (x(t)) ≤ V (x(0)) ∀t > 0. Since f (x(t)) − f ⋆ ≥ 0, we have
1 2
Zt
0
∥u(x(τ ))∥2
2dτ ≤ V (x(t)) ≤ V (x(0)) = f (x(0)) − f ⋆.
This implies that
min
τ ∈[0,t]
∥u(x(τ ))∥2
2≤ 1
t
Zt
0
∥u(x(τ ))∥2
2dτ ≤ 2(f (x(0)) − f ⋆)
t,
Remark 1 (Non-ergodic vs. ergodic rates and stationarity): The estimate in the theorem yields the non-ergodic rate
min
τ ∈[0,t]
∥u(x(τ ))∥2
2 ≤ 2 f (x(0)) − f ⋆
t.
By averaging, we also obtain the ergodic bound
1 t
Zt
0
∥u(x(τ ))∥2
2 dτ ≤ 2 f (x(0)) − f ⋆
t.
Consequently R ∞
0 ∥u(x(t))∥22dt < ∞, so there exists a sequence tk → ∞ with ∥u(x(tk))∥ → 0.
D. Safeguarded Adaptive Discretization
The proposed formulation (SS-QCQP(x)) enables automatic step size selection via a safeguarded Armijo-type line search that guarantees both feasibility and descent at every iteration. Starting from a feasible point x0, we discretize the ODE x ̇ (t) = u(x(t)) using the forward Euler method, where u(xk) is obtained by solving (SS-QCQP(x)) and tk > 0 is chosen via a backtracking line search so that the next iterate
x(k+1) = x(k) + t(k)u(x(k))
satisfies
f (x(k+1)) ≤ f (x(k)) + γ∇f (x(k))⊤(x(k+1) − x(k)), (16)
gi(x(k+1)) ≤ 0, ∀i ∈ [m],
where γ ∈ (0, 1) is fixed. The first inequality in (16) is the classical Armijo condition, ensuring sufficient descent in the objective. The rest guarantees anytime feasibility, guaranteeing that all iterates remain in the feasible set of (OPT). The next lemma shows that, under Assumption 1, the backtracking procedure in (16) terminates in finitely many steps and returns a step size bounded away from zero. Lemma 3: Suppose xk is feasible for (OPT), and that wi ≥ w for all i ∈ [m], for some w > 0. -
Then, the backtracking conditions (16) are satisfied for all t ∈ [0, t], where
t = min 1
α , 2(1 − γ)
Lf
, 2w
L1
, . . . , 2w
Lm
. (17)
Proof: We first establish feasibility. For any t ∈ [0, t], it follows that t ≤ min{ 1
α , 2wi
Li } for all i = 1, . . . , m.
Using the Li-smoothness of gi and the feasibility constraint in (SS-QCQP(x)), we obtain
gi(x + tu(x)) ≤ gi(x) + t ∇gi(x)⊤u(x) + Lit2
2 ∥u(x)∥2
2
≤ gi(x) + t[−αgi(x) − wi∥u(x)∥2
2] + Lit2
2 ∥u(x)∥2
2
= (1 − αt)gi(x) + Lit2
2 − wit ∥u(x)∥2
2
≤ (1 − αt)gi(x) ≤ 0,
which establishes that x + tu(x) is feasible for all t ∈ [0, t]. We now verify the Armijo condition. By the Lf -smoothness of f , we have
f (x + tu(x)) ≤ f (x) + t ∇f (x)⊤u(x) + Lf t2
2 ∥u(x)∥2
2.
From Theorem 1, the search direction satisfies ∇f (x)⊤u(x) ≤ −∥u(x)∥22. Substituting this bound yields
f (x + tu(x)) ≤ f (x) + t ∇f (x)⊤u(x) − Lf t2
2 ∇f (x)⊤u(x)
≤ f (x) + Lf t2
2 − t − ∇f (x)⊤u(x) .

AUTHOR et al.: TITLE 7
For t ≤ 2(1−γ)
Lf , the coefficient ( Lf t2
2 − t) is upper-bounded by γt, giving
f (x + tu(x)) ≤ f (x) + γt ∇f (x)⊤u(x),
which confirms the Armijo condition. Thus, both conditions in (16) hold for all t ∈ [0, t].
In Lemma 3, we only require that the parameters wi are lower bounded by some w > 0. This condition guarantees a uniformly positive lower bound on the step size, unlike the pure QP case, where the step size can vanish, thus preventing infeasibility and stagnation during backtracking line search. At the same time, it allows for the adaptive selection of wi, as discussed in Section V-B, enabling the algorithm to adjust the strength of the quadratic correction dynamically while preserving the theoreti-
cal convergence guarantees. The overall algorithm is summarized in Algorithm 1.
Algorithm 1 Safe Sequential QCQP (SS-QCQP) for solving (OPT)
1: Input: initial feasible point x(0) such that gi(x(0)) ≤ 0 for all i ∈ [m]; parameters γ ∈ (0, 1), w > 0, α > 0, and tolerance ε > 0.
2: for k = 0, 1, 2, . . . do
3: Choose adaptive parameters { w(k)
i ≥ w : i ∈ [m]}.
4: Compute the search direction u = u(x(k)) by solving (SS-QCQP(x)) with wi = w(k)
i. 5: if ∥u∥2 ≤ ε then
6: return x(k) ▷ Convergence achieved 7: end if
8: Initialize step size t(k) = 1. 9: while ∃i ∈ [m] such that gi(x(k) + t(k)u) > 0 or f (x(k) + t(k)u) > f (x(k)) + γt(k)∇f (x(k))⊤u do 10: t(k) := 1
2 t(k) ▷ Backtracking line search 11: end while
12: Update x(k+1) := x(k) + t(k)u. 13: end for
In the next result, we show that the convergence rate of the discrete-time algorithm matches that of its continuous-time counterpart.
Theorem 3 (Convergence Guarantee of SS-QCQP): Let
Assumption 1 hold for (OPT). Then, for all iterations k = 0, 1, . . . generated by Algorithm 1, the following bound holds:
min
i=0,...,k ∥u(x(i))∥2
2 ≤ f (x(0)) − f ⋆
γ t (k + 1) , (18)
where t is the uniform lower bound on the step size established in Lemma 3.
Proof: Using Lemma 3, at each iteration k, the backtracking line search admits a step size satisfying t(k) ≥ t. By the Armijo condition in (16) and the descent property ∇f (x(k))⊤u(x(k)) ≤ −∥u(x(k))∥22 from Theorem 1, we
obtain
f (x(k+1)) ≤ f (x(k)) + γt(k)∇f (x(k))⊤u(x(k))
≤ f (x(k)) − γt(k)∥u(x(k))∥2
2
≤ f (x(k)) − γt∥u(x(k))∥2
2.
Summing over i = 0, . . . , k and telescoping the inequality yields
k
X
i=0
γt∥u(x(i))∥2
2 ≤ f (x(0)) − f (x(k+1)) ≤ f (x(0)) − f ⋆.
Dividing both sides by γt(k + 1) gives
min
i=0,...,k ∥u(x(i))∥2
2≤ 1
k+1
k
X
i=0
∥u(x(i))∥2
2
≤ f (x(0)) − f ⋆
γt(k + 1) ,
which establishes the result. The bound in (18) implies a non-ergodic O(1/k) rate of convergence, which directly parallels the continuous-time result in Theorem 3. By averaging over the iterates, one also obtains the corresponding ergodic bound
1 k+1
k
X
i=0
∥u(x(i))∥2
2 ≤ f (x(0)) − f ⋆
γ t (k + 1) ,
Consequently, P∞
k=0 ∥u(x(k))∥22 < ∞, which implies
∥u(x(k))∥ → 0 along a subsequence.
Remark 2 (Comparison with the MBA method [29]): The design of the proposed SS-QCQP algorithm is conceptually inspired by the Moving Balls Approximation (MBA) method [29], which constructs locally feasible quadratic models for nonlinear constrained problems. MBA iteratively solves
myin f (x) + ∇f (x)⊤(y − x) + Lf
2 ∥y − x∥2
2 (19)
s.t. gi(x) + ∇gi(x)⊤(y − x) + Li
2 ∥y − x∥2
2 ≤ 0, ∀i ∈ [m].
The key distinction lies in how feasibility is enforced. MBA builds a conservative local approximation using Lipschitz upper bounds (see (1)) so that the solution to (19) is guaranteed to be feasible and can be directly adopted as the next iterate. In contrast, (SS-QCQP(x)) computes a feasible search direction and updates the iterate through a safeguarded line search. Thus, unlike MBA, the SS-QCQP framework does not require prior knowledge of the Lipschitz constants Lf and Li, which are often diff-
icult to estimate in practice. We note that extensions of MBA incorporating line search have been proposed to relax this requirement [30], but each line-search step requires solving a convex QCQP, making these variants computationally more expensive than both SS-QCQP and the standard MBA method.
IV. SCALABILITY TO MANY CONSTRAINTS
The main computational bottleneck of the SS-QCQP algorithm lies in solving the QCQP subproblem (SS-QCQP(x)) at each iteration. When the original problem (OPT) contains

8 IEEE TRANSACTIONS AND JOURNALS TEMPLATE
a large number of inequality constraints (m ≫ 1), solving this QCQP with all constraints active can be prohibitively expensive. However, in many practical applications, only a small subset of constraints is active or nearly active at optimality [38]. Thus, enforcing all m constraints in every subproblem is overly conservative. To improve scalability, we introduce a specialized activeset strategy that enforces forward invariance only with respect to constraints that are nearly active. This reduces -
the size of the QCQP without compromising theoretical guarantees. In particular, we prove that the active-set variant preserves the O(1/k) convergence rate established in Theorem 3 while significantly lowering the per-iteration computational cost.
A. Active-Set Strategy
We define the δ-active set at a point x as
Aδ(x) = { i ∈ [m] | gi(x) ≥ −δ } (20)
where δ > 0 is a prescribed threshold. We also define A(x) to be any set such that Aδ(x) ⊆ A(x) ⊆ [m]. The particular choice of A(x) will be discussed in Section V-C. At each iteration, instead of considering all m constraints, we propose to compute the search direction by solving a reduced QCQP involving only the nearly active constraints:
uˆ(x) := arg muin
1
2 ∥u + ∇f (x)∥2
2 (21)
s.t.∇gi(x)⊤u ≤ −αgi(x) − wi∥u∥2
2, i ∈ A(x).
Next, we will show that the direction uˆ(x) inherits the key properties established in Theorem 1. Hence, the active-set SSQCQP maintains the same theoretical guarantees as the full SS-QCQP while achieving substantially improved scalability. Theorem 4: Let Assumption 1 hold, and let x be a feasible point of (OPT). Then, 1) If uˆ(x) = 0, then x is a stationary point of (OPT). 2) The direction uˆ(x) satisfies the descent condition
∇f (x)⊤uˆ(x) ≤ −∥uˆ(x)∥2
2. (22) Proof: Since problem (SS-QCQP(x)) is strictly feasible, it follows that the reduced subproblem (21) is also strictly feasible. Hence, by the KKT optimality conditions [35], there exists a multiplier vector λ(x) ≥ 0 satisfying
uˆ(x) + ∇f (x) +
X
i∈A(x)
λi(x) ∇gi(x) + 2wiuˆ(x) = 0,
(23a)
∇gi(x)⊤uˆ(x) ≤ −αgi(x) − wi∥uˆ(x)∥2
2, ∀i ∈ A(x),
(23b)
λi(x) ≥ 0, ∀i ∈ A(x), (23c)
λi(x) ∇gi(x)⊤uˆ(x) + αgi(x) + wi∥uˆ(x)∥2
2 = 0, ∀i ∈ A(x). (23d)
Comparing the KKT conditions in (23) with those of (2), we observe that when uˆ(x) = 0, the pair (x, λ) satisfies the original KKT system (2), where
λi =
(λi(x), if i ∈ A(x),
0, otherwise. (24)
Therefore, x is a stationary point of (OPT). The proof of the descent property (22) follows identically to the argument presented in Theorem 1. Having defined uˆ(x) in (21), we now consider the corresponding iterative scheme
x(k+1) = x(k) + t(k)uˆ(x(k)), (25)
where the step size t(k) > 0 is selected using the same backtracking conditions as in (16), ensuring that each new iterate x(k+1) remains feasible and achieves sufficient descent. To guarantee the existence of a uniform lower bound on the accepted step sizes, we impose the following mild assumption. Assumption 2: The feasible set F is compact. Under this assumption, the reduced QCQP directions remain uniformly bounded as we show next. Lemma 4: Suppose (OPT) satisfies Assumption 1 and Assumption 2,-
 and wi ≥ w for some w > 0 and all i ∈ [m]. Then, the set {uˆ(x) : x ∈ F} is bounded. Proof: Fix any x ∈ F and define, for each i ∈ [m],
Ωi(x) ≜ u ∈ Rn : wi∥u∥2
2 + ∇gi(x)⊤u + αgi(x) ≤ 0 .
Dividing both sides by wi and completing the square, Ωi(x) can be represented as
u ∈ Rn : ∥u + 1
2wi ∇gi(x)∥2
2 ≤ −α
wi gi(x) + ∥ 1
2wi ∇gi(x)∥2
2.
Since gi is continuously differentiable and F is compact, both gi(x) and ∇gi(x) are bounded on F . Hence, there exist finite constants
Mi ≜ max
x∈F |gi(x)|, Gi ≜ max
x∈F ∥∇gi(x)∥2.
Using wi ≥ w and upper bounds on gi(x) and ∇gi(x), we can write
∥u + 1
2wi ∇gi(x)∥2
2 ≤ R2
i
where R2
i ≜ αMi
w + Gi
2w
2
is independent of x. Therefore, for all x ∈ F,
Ωi(x) ⊆ B ̄ − 1
2w ∇gi(x), Ri ,
where B ̄(c, r) denotes the closed Euclidean ball centered at c with radius r. Because F is compact and ∇gi is continuous, the union Ωi ≜ S
x∈F Ωi(x) is bounded. Finally, since uˆ(x) satisfies all active constraints,
uˆ(x) ∈
\
i∈A(x)
Ωi(x) ⊆
\
i∈A(x)
Ωi,
implying that {uˆ(x) : x ∈ F} is bounded. Lemma 5: Suppose (OPT) satisfies Assumption 1, and let x be a feasible point of (OPT). Assume γ ∈ (0, 1) and wi ≥ w for all i ∈ [m], for some w > 0. Then there exists a constant M > 0 such that the backtracking conditions in Equation (16) hold for all t ∈ [0, t], where
t = min
(
2(1−γ)
Lf , 1, δ
M, 1
α , 2w
maxi∈[m] Li
)
. (26)

AUTHOR et al.: TITLE 9
Proof: From Theorem 4, we have ∇f (x)⊤uˆ(x) ≤ −∥uˆ(x)∥22. Hence, for all t ∈ [0, 2(1−γ)
Lf ], the Armijo condition is satisfied, i.e.,
f (x + tuˆ(x)) ≤ f (x) + t∇f (x)⊤uˆ(x) + Lf t2
2 ∥uˆ(x)∥2
2 (27)
≤ f (x) + γt∇f (x)⊤uˆ(x).
The proof follows the same steps as in Lemma 3 for the full QCQP case. For feasibility, consider two cases. Case 1: i ∈ A(x). Then, by the constraint in (21), gi(x + tuˆ(x)) ≤ 0 for all t ∈ [0, min{ 1
α , 2w
Li }], as in Lemma 3.
Case 2: i ∈/ A(x). Since Aδ(x) ⊆ A(x), we have gi(x) ≤ −δ. Define
si(t) ≜ gi(x) + t∇gi(x)⊤uˆ(x) + Lit2
2 ∥uˆ(x)∥2
2,
which is a quadratic upper bound on gi(x+tuˆ(x)). The largest nonnegative root ηi of si(t) = 0 is given by
ηi = −∇gi(x)⊤uˆ(x)+
√
(∇gi (x)⊤ uˆ(x))2 −2Li gi (x)∥uˆ(x)∥2
2 Li ∥uˆ(x)∥2
2
.
By construction, si(0) = gi(x) ≤ −δ < 0, si(ηi) = 0, and for all t ∈ [0, ηi],
gi(x + tuˆ(x)) ≤ si(t) ≤ 0.
Applying the mean value theorem, there exists θi ∈ [0, ηi] such that
−gi(x) = si(ηi) − si(0) = s′
i(θi)ηi
= ηi ∇gi(x)⊤uˆ(x) + Liθi∥uˆ(x)∥2
2
≤ ηi |∇gi(x)⊤uˆ(x)| + Liθi∥uˆ(x)∥2
2.
If ηi ≤ 1, then since θi ≤ ηi, we can write
−gi(x) ≤ ηi |∇gi(x)⊤uˆ(x)| + Li∥uˆ(x)∥2
2.
Since −gi(x) ≥ δ, we have
ηi ≥ δ
|∇gi(x)⊤uˆ(x)| + Li∥uˆ(x)∥22
.
Since uˆ(x) and ∇gi(x) are bounded over the compact feasible set F, there exists a constant M > 0 such that
|∇gi(x)⊤uˆ(x)| + Li∥uˆ(x)∥2
2 ≤ M, ∀ x ∈ F , i ∈ [m].
Hence, ηi ≥ δ
M . Eliminating the temporary assumption ηi ≤ 1, we obtain
ηi ≥ min
n
1, δ
M
o
.
Combining all cases, we conclude that:
• The Armijo condition holds for all t ∈ [0, 2(1−γ)
Lf ];
• For all i ∈ A(x), gi(x + tuˆ(x)) ≤ 0 for t ∈ [0, min{ 1
α , 2w
Li }];
• For all i ∈/ A(x), gi(x + tuˆ(x)) ≤ 0 for t ∈ [0, min{1, δ
M }].
Therefore, the backtracking conditions (16) hold for all t ∈ [0, t], where t is given by (26). Theorem 4 and Lemma 5 prove similar results to Theorem 1 and Lemma 3, respectively, enabling us to extend Algorithm 1
with active set strategy while preserving theoretical convergence guarantees. The algorithm is summarized in Algorithm 2.
Algorithm 2 SS-QCQP with Active Set Strategy (SS-QCQPAS) for solving (OPT)
1: Input: initial feasible point x(0) such that gi(x(0)) ≤ 0 for all i ∈ [m]; parameters δ > 0, γ ∈ (0, 1), w > 0, α > 0, and tolerance ε > 0. 2: for k = 0, 1, 2, . . . do
3: Choose adaptive parameters { w(k)
i ≥ w : i ∈ [m]}.
4: Choose active set such that Aδ(x) ⊆ A(x) ▷ Active set strategy 5: Compute the search direction u = uˆ(x(k)) by solving (21) with wi = w(k)
i. 6: if ∥u∥2 ≤ ε then
7: return x(k) ▷ Convergence achieved 8: end if
9: Initialize step size t(k) = 1. 10: while ∃i ∈ [m] such that gi(x(k) + t(k)u) > 0 or f (x(k) + t(k)u) > f (x(k)) + γt(k)∇f (x(k))⊤u do 11: t(k) := 1
2 t(k) ▷ Backtracking line search 12: end while
13: Update x(k+1) := x(k) + t(k)u. 14: end for
Theorem 5: Let Assumption 1 and Assumption 2 hold for (OPT). Then, there exists a constant M > 0 such that, for all iterations k = 0, 1, 2, . . . generated by Algorithm 1, the following bound holds:
min
i=0,...,k ∥u(x(i))∥2
2 ≤ f (x(0)) − f ⋆
γ t (k + 1) , (28)
where
t = min 2(1−γ)
Lf , 1, δ
M, 1
α , 2w
maxi∈[m] Li . (29)
Proof: Given a lower bound on step size from Lemma 5, the proof is the same as in Theorem 3.
V. PRACTICAL IMPLEMENTATION
A. Efficient Computation of the Search Direction
The optimization problem (SS-QCQP(x)) (or its reduced form (21)) is convex and can be solved efficiently using modern conic solvers such as ECOS [39] and Clarabel [40], after reformulating the quadratic constraints as second-order cone (SOC) constraints. While these solvers are robust and well optimized, the efficiency of each iteration in SS-QCQP depends critically on how the problem is expressed in conic form. To improve practical performance, we exploit a structural feature of (SS-QCQP(x)), whe-
re both the objective and the constraints are quadratic functions with identity Hessians. For simplicity, we describe the formulation when all m constraints are included in the subproblem; the same approach applies directly to the reduced QCQP (21).

10 IEEE TRANSACTIONS AND JOURNALS TEMPLATE
Introducing an auxiliary variable s, problem (SS-QCQP(x)) can be equivalently written as
uˆ(x), sˆ(x) = arg mu,isn
1
2 ∥u + ∇f (x)∥2
2 (30)
s.t. ∇gi(x)⊤u + wis + αgi(x) ≤ 0, ∀i ∈ [m],
∥u∥2
2 ≤ s.
See Lemma 6 below for proof of equivalence. Although the transformation (30) is conceptually straightforward, it significantly simplifies the problem representation for off-theshelf conic solvers. For example, Clarabel [40] solves generic conic programs of the form
mx,isn
1
2 x⊤P x + q⊤x (31)
s.t. Ax + s = b,
s ∈ K,
where K denotes a convex cone (e.g., a second-order cone). When modeling (SS-QCQP(x)) through high-level interfaces such as CVXPY [41], the auxiliary-variable form (30) leads to a sparser coefficient matrix A and a more compact representation, yielding consistent reductions in solver runtime across iterations. Lemma 6: Problems (SS-QCQP(x)) and (30) are equivalent in the sense that, if (uˆ(x), sˆ(x)) is an optimal solution of (30), then uˆ(x) is the unique optimal solution of (SS-QCQP(x)). Proof: -
Let p1⋆ and p2⋆ denote the optimal values of (SS-QCQP(x)) and (30), respectively. For any (u, s) feasible to (30), the first constraint implies that u is feasible for (SS-QCQP(x)). Since both problems share the same objective, it follows that p1⋆ ≤ p2⋆. Conversely, for any u feasible
to (SS-QCQP(x)), the pair (u, ∥u∥22) is feasible for (30) and
yields the same objective value, implying p2⋆ ≤ p1⋆. Thus,
p1⋆ = p2⋆.
Consequently, if (uˆ(x), sˆ(x)) is an optimal solution of (30), then uˆ(x) attains the same optimal value in (SS-QCQP(x)), and hence is optimal for that problem. Since the objective of (SS-QCQP(x)) is strongly convex, the solution uˆ(x) is unique.
B. Hyperparameter Choice
Another important practical aspect of the proposed SSQCQP algorithm is the selection of the parameters α and {wi}m
i=1 in (SS-QCQP(x)). As illustrated in Figure 1, when wi is small, the direction uˆ(x) becomes nearly tangent to the constraint boundary, leading to a small step size required to maintain feasibility. Conversely, when wi is large, uˆ(x) deviates significantly from the negative gradient direction, resulting in a smaller decrease in the objective value. Therefore, the choice of wi critically affects the empirical performance of Algorithm 1. Inspired by the MBA method [29], we fix α = 1 and set wi ≈ -
Li
2 . However, since Li is typically unknown in practice,
we adaptively estimate it during iterations. We initialize each
w(0)
i = w with a small positive value (e.g., 10−3), and update
it according to
w(k+1)
i = max
n
w(k)
i , ∥∇gi(x(k+1))−∇gi(x(k))∥2
2∥x(k+1) −x(k) ∥2
o
, ∀i ∈ [m].
(32)
Since the sequence {w(k)
i } is nondecreasing, the convergence guarantees established in Theorem 3 and Theorem 5 remain valid.
C. Active Set Choice
In Lemma 5 and Theorem 5, we only required that Aδ(x) ⊆ A(x), allowing flexibility in the choice of A. A natural and straightforward option is to set A(x) = Aδ(x). However, with this choice, even small perturbations in x can cause significant changes in Aδ(x), which in turn may induce large variations in the direction uˆ(x). Such discontinuities can produce zigzagging trajectories and degrade the empirical performance of the algorithm. To improve stability, we propose to use A(x) = Aδ(x) ∪ Tq(x), -
where
Tq(x) = {i : gi(x) is among top q% of {gi(x) : i ∈ [m]}}. (33)
This construction smooths transitions in A(x) by including a small fraction of nearly active constraints, effectively balancing scalability and stability.
VI. NUMERICAL EXPERIMENTS
In this section, we demonstrate the effectiveness of the proposed SS-QCQP algorithm on an optimal control problem involving multi-agent navigation. The objective is to steer four vehicles from their initial positions to their designated goal locations while avoiding collisions with both static obstacles and other vehicles. The problem setup is similar to that in [42]. The problem is summarized as follows,
min
X,U .
N −1
X
t=0
l(X(t), U (t)) + V (X(N )) (34)
s.t. Ui(t) ∈ U ∀t ∈ [N − 1], i ∈ [4],
Xi(t) ∈ X ∀t ∈ [N ], i ∈ [4],
Xi(t + 1) = f (Xi(t), Ui(t)) ∀t ∈ [N − 1], i ∈ [4],
Xi(0) = Xs
i ∀i ∈ [4]
gj(Xi(t)) ≤ 0 ∀i ∈ [4], j ∈ [3], t ∈ [N ], (35)
where Xi(t) = [xi(t), yi(t), θi(t)]⊤ is the state of the i-th car at time step t, consisting of the x-position, y-position, and orientation, and Ui(t) = [vi(t), wi(t)]⊤ is its control input, consisting of the linear and angular velocities. The discretetime dynamics, shared by all cars, are given by
f (Xi(t), Ui(t)) =


xi(t) + vi(t)T cos θi(t) − ∆x yi(t) + vi(t)T sin θi(t) θi(t) + wi(t)T

.
where T = ∆x = 0.03. Here, X(t) = [Xi(t)⊤]⊤
i∈[4] stacks the states of all four cars at time t, and X = [X(t)⊤]t∈[N] and U = [U (t)⊤]t∈[N−1] denote the stacked states and control inputs over the entire horizon.

AUTHOR et al.: TITLE 11
The initial and target states are specified as follows. The starting state of the i-th vehivle is denoted by Xs
i , with
Xs
1 = [−2, −2, 0]⊤, Xs
2 = [−3, −1, 0]⊤,
Xs
3 = [−3, −3, 0]⊤, Xs
4 = [−1, −3, 0]⊤,
and the corresponding target (desired) states are
Xd
1 = [2, 3, 0]⊤, Xd
2 = [3, 2, 0]⊤,
Xd
3 = [2, 1, 0]⊤, Xd
4 = [1, 2, 0]⊤.
The desired steady-state input is U d
i = [1, 0]⊤ for all i ∈ [4]. The stage cost is defined as
l(X(t), U (t)) =
X
i∈[4]
∥Xi(t) − Xd
i ∥2
2 + 0.01 ∥Ui(t) − U d
i ∥2
2,
and the terminal cost is
V (X(N )) =
X
i∈[4]
∥Xi(N ) − Xd
i ∥2
Pi ,
where each Pi is obtained from the discrete-time algebraic Riccati Equation
A⊤
i PiAi − Pi − (A⊤
i PiBi)(R + B⊤
i PiBi)−1(B⊤
i PiAi) + Q = 0
with Ai = ∇1f (Xd
i ,Ud
i ), Bi = ∇2f (Xd
i ,Ud
i ), Q = I and R = 0.01I. The state and input constraints are defined as
X = {(x, y, θ) : |x| ≤ 3.7, |y| ≤ 3.7, |θ| ≤ π},
U = {(v, w) : −5 ≤ v ≤ 12, |w| ≤ 3
2 π}.
Obstacle avoidance is enforced through the constraint
gj(Xi(t)) = r2
j − ∥Xi(t) − cj∥2
2 ≤ 0,
which models circle obstacles centered at c1 = [−1, −1]⊤, c2 = [1, 0]⊤, c3 = [0, 1]⊤ with radii r1 = 1, r2 = 0.5, r3 = 0.5.
By unrolling the dynamics from the starting state and applying the control inputs, (34) can be transformed into an optimization problem in form of (OPT). We set the planning horizon to N = 40, resulting in a total number of 320 variables and 2320 constraints. Algorithm 1 and Algorithm 2 were implemented in CasADi [43], and the corresponding subproblems (SS-QCQP(x)) and (21) were solved using Clarabel [40] through the CVXPY [41] interface. In both methods, the parameters were initialized as wi = 10-
−3 and adaptively updated according to (32). For the active-set strategy, we used A(x) = A0.5(x) ∪ T5(x), where Aδ(x) and Tq(x) are defined in (20) and (33), respectively. The experiments are conducted on a 2020 MacBook Pro equipped with an Apple M1 CPU and 16 GB of memory. We compared SS-QCQP and SS-QCQP-AS against IPOPT [44] (as called from CasADi) and CasADi’s built-in SQP solver. Figure 2 illustrates the position trajectories of the four agents obtained using SS-QCQP, SS-QCQP-AS, IPOPT, and SQ-
P. The dotted lines, stars, and triangles represent the trajectories, initial positions, and target positions of the agents, respectively, while the gray circles denote obstacles. It can be observed that Algorithm 1, Algorithm 2, and SQP yield similar near-optimal trajectories. Figure 3a further depicts the
(a) SS-QCQP (b) SS-QCQP-AS
(c) IPOPT (d) SQP
Fig. 2: Position trajectories of four agents obtained using SSQCQP, SS-QCQP-AS, IPOPT, and SQP.
pairwise distances among the four agents over the planning horizon obtained using SS-QCQP. Figure 3b and Figure 3c plot, for each algorithm, the objective value and the maximum constraint violation across iterations, respectively. Furthermore, Figure 3d shows the minimum squared norm of the search directions across iterations, which converges at the theoretical rate of O(1/k) established in Theorems 3 and 5. Finally, Figure 4 shows the number of nearly active constraints at each iteration, illustr-
ating that fewer than 10% of all constraints are nearly active and enter the QCQP subproblem. The runtime of Algorithm 1 is 186.53 seconds, whereas Algorithm 2 achieves a comparable solution in 49.47 seconds. It can be observed that while the SQP method decreases the objective value more rapidly than both SS-QCQP and SS-QCQP-AS, it exhibits small constraint violations before convergence. In contrast, both SS-QCQP and SS-QCQP-AS remain feasible throughout all iterations, albeit with a slower decrea-
se in the objective value. This property enables early termination with feasibility guarantees. It is worth noting that both SQP and IPOPT are second-order methods (in this experiment, CasADi’s built-in SQP employs an L-BFGS Hessian approximation), whereas SS-QCQP and SS-QCQPAS are first-order algorithms that achieve comparable solution quality while ensuring feasibility at every iteration.
VII. CONCLUSION
This paper introduced the Safe Sequential QCQP (SSQCQP) algorithm, a first-order framework for solving inequality-constrained nonlinear optimization problems with guaranteed feasibility at every iteration. The method is derived from a continuous-time dynamical system whose vector field

12 IEEE TRANSACTIONS AND JOURNALS TEMPLATE
(a) (b) (c) (d)
Fig. 3: (a): Pairwise distances among the four agents over the planning horizon solved by SS-QCQP. (b): Objective of SSQCQP, SS-QCQP-AS, IPOPT, and SQP along iterations. (c): Maximum constraint of SS-QCQP, SS-QCQP-AS, IPOPT, and SQP along iterations. (d): mini=1,...,k ∥u(x(i))∥22 in SS-QCQP and mini=1,...,k ∥uˆ(x(i))∥22 in SS-QCQP-AS along iterations.
Fig. 4: Number of active constraints in Algorithm 2 along the iterations. The total number of constraints is 2320.
is obtained by solving a convex quadratically constrained quadratic program (QCQP) that enforces strict descent and forward invariance of the feasible set. A safeguarded discretization with adaptive step-size selection yields a discrete-time algorithm that maintains feasibility and achieves a provable O(1/k) convergence rate. To improve scalability, we developed an active-set variant (SS-QCQP-AS) that selectively enforces invariance for nearly active constraints, significantly reducing computation-
al cost without compromising convergence guarantees. Extensive numerical experiments on a multi-agent optimal control problem confirmed that both SS-QCQP and SS-QCQP-AS maintain feasibility, exhibit the predicted convergence behavior, and deliver performance comparable to second-order solvers such as SQP and IPOPT. Future work will explore the integration with model predictive control (MPC) schemes, as well as acceleration strategies using higher-order derivatives.
[1] T. Erseghe, “Distributed optimal power flow using admm,” IEEE transactions on power systems, vol. 29, no. 5, pp. 2370–2380, 2014. [2] M. Bagherzadeh, S. Savehshemshaki, and W. Lucia, “Guaranteed collision-free reference tracking in constrained multi unmanned vehicle systems,” IEEE Transactions on Automatic Control, vol. 67, no. 6, pp. 3083–3089, 2021.
[3] P. M. Wensing, M. Posa, Y. Hu, A. Escande, N. Mansard, and A. Del Prete, “Optimization-based control for dynamic legged robots,” IEEE Transactions on Robotics, vol. 40, pp. 43–63, 2023.
[4] K. Nguyen, S. Schoedel, A. Alavilli, B. Plancher, and Z. Manchester, “Tinympc: Model-predictive control on resource-constrained microcontrollers,” in 2024 IEEE International Conference on Robotics and Automation (ICRA). IEEE, 2024, pp. 1–7. [5] A. L. Bishop, J. Z. Zhang, S. Gurumurthy, K. Tracy, and Z. Manchester, “Relu-qp: A gpu-accelerated quadratic programming solver for modelpredictive control,” in 2024 IEEE International Conference on Robotics and Automation (ICRA). IEEE, 2024, pp. 13 285-
–13 292. [6] E. Dietrich, A. Devonport, and M. Arcak, “Nonconvex scenario optimization for data-driven reachability,” in 6th Annual Learning for Dynamics & Control Conference. PMLR, 2024, pp. 514–527.
[7] A. S. Nemirovski and M. J. Todd, “Interior-point methods for optimization,” Acta Numerica, vol. 17, pp. 191–234, 2008. [8] J. Nocedal, A. W ̈achter, and R. A. Waltz, “Adaptive barrier update strategies for nonlinear interior methods,” SIAM Journal on Optimization, vol. 19, no. 4, pp. 1674–1693, 2009.
[9] A. Wachter, An interior point algorithm for large-scale nonlinear optimization with applications in process engineering. Carnegie Mellon University, 2002. [10] E. R. Panier and A. L. Tits, “A superlinearly convergent feasible method for the solution of inequality constrained optimization problems,” SIAM Journal on control and Optimization, vol. 25, no. 4, pp. 934–950, 1987. [11] K. Schittkowski, “On the convergence of a sequential quadratic programming method with an augmented lagrangian line -
search function,” Mathematische Operationsforschung und Statistik. Series Optimization, vol. 14, no. 2, pp. 197–216, 1983. [12] E. R. Panier and A. L. Tits, “On combining feasibility, descent and superlinear convergence in inequality constrained optimization,” Mathematical programming, vol. 59, no. 1, pp. 261–276, 1993. [13] N. Maratos, “Exact penalty function algorithms for finite dimensional and control optimization problems,” Ph.D. dissertation, Imperial College London (University of London), 1-
978. [14] P. E. Gill, W. Murray, M. A. Saunders, and M. H. Wright, “Some theoretical properties of an augmented lagrangian merit function.” Tech. Rep., 1986. [15] D. Q. Mayne and E. Polak, “A surperlinearly convergent algorithm for constrained optimization problems,” in Algorithms for constrained minimization of smooth nonlinear functions. Springer, 2009, pp. 45–61. [16] R. H. Byrd, R. B. Schnabel, and G. A. Shultz, “A trust region algorithm for nonlinearly constrained optimization,” SIAM Journal -
on Numerical Analysis, vol. 24, no. 5, pp. 1152–1170, 1987. [17] L. Numerow, A. Zanelli, A. Carron, and M. N. Zeilinger, “Inherently robust suboptimal mpc for autonomous racing with anytime feasible sqp,” IEEE Robotics and Automation Letters, vol. 9, no. 7, pp. 66166623, 2024. [18] M. J. Tenny, S. J. Wright, and J. B. Rawlings, “Nonlinear model predictive control via feasibility-perturbed sequential quadratic programming,” Computational Optimization and Applications, vol. 28, no. 1, pp. 87121, 200-
4. [19] M. Fukushima, “A successive quadratic programming algorithm with global and superlinear convergence properties,” Mathematical Programming, vol. 35, no. 3, pp. 253–264, 1986.

AUTHOR et al.: TITLE 13
[20] M. Fukushima, Z.-Q. Luo, and P. Tseng, “A sequential quadratically constrained quadratic programming method for differentiable convex minimization,” SIAM Journal on Optimization, vol. 13, no. 4, pp. 10981119, 2003. [21] E. West and E. Polak, “A generalized quadratic programming-based phase i-phase ii method for inequality-constrained optimization,” Applied Mathematics and Optimization, vol. 26, no. 3, pp. 223–252, 1992. [22] A. Allibhoy and J. Cort ́es, “Control-barrier-function-based design -
of gradient flows for constrained nonlinear programming,” IEEE Transactions on Automatic Control, vol. 69, no. 6, pp. 3499–3514, 2023. [23] M. Muehlebach and M. I. Jordan, “On constraints in first-order optimization: a view from non-smooth dynamical systems,” J. Mach. Learn. Res., vol. 23, no. 1, Jan. 2022. [24] A. Raghunathan, J. Shamma, N. Li et al., “Constrained optimization from a control perspective via feedback linearization,” arXiv preprint arXiv:2503.12665, 2025.
[25] A. Allibhoy and J. Corte ́s, “Anytime solution of constrained nonlinear programs via control barrier functions,” in 2021 60th IEEE Conference on Decision and Control (CDC). IEEE, 2021, pp. 6527–6532.
[26] C. Dawson, S. Gao, and C. Fan, “Safe control with learned certificates: A survey of neural lyapunov, barrier, and contraction methods for robotics and control,” IEEE Transactions on Robotics, vol. 39, no. 3, pp. 17491767, 2023. [27] M. Muehlebach and M. I. Jordan, “On constraints in first-order optimization: A view from non-smooth dynamical systems,” arXiv preprint arXiv:2107.08225, 2021.
[28] G. Scutari, F. Facchinei, and L. Lampariello, “Parallel and distributed methods for constrained nonconvex optimization—part i: Theory,” IEEE Transactions on Signal Processing, vol. 65, no. 8, pp. 1929–1944, 2016. [29] A. Auslender, R. Shefi, and M. Teboulle, “A moving balls approximation method for a class of smooth constrained minimization problems,” SIAM Journal on Optimization, vol. 20, no. 6, pp. 3232–3259, 2010. [30] Z. Lu, “Sequential convex programming methods for a class of structured-
 nonlinear programming,” arXiv preprint arXiv:1210.3039, 2012. [31] J. Nocedal and S. J. Wright, Numerical optimization. Springer, 2006. [32] A. D. Ames, X. Xu, J. W. Grizzle, and P. Tabuada, “Control barrier function based quadratic programs for safety critical systems,” IEEE Transactions on Automatic Control, vol. 62, no. 8, pp. 3861–3876, 2016. [33] G. Torrisi, S. Grammatico, R. S. Smith, and M. Morari, “A projected gradient and constraint linearization method for nonlinear model predictive con-
trol,” SIAM Journal on Control and Optimization, vol. 56, no. 3, pp. 1968–1999, 2018. [34] J. Liu, “Sensitivity analysis in nonlinear programs and variational inequalities via continuous selections,” SIAM Journal on Control and Optimization, vol. 33, no. 4, pp. 1040–1060, 1995. [35] S. P. Boyd and L. Vandenberghe, Convex optimization. Cambridge university press, 2004.
[36] F. Blanchini, S. Miani et al., Set-theoretic methods in control. Springer, 2008, vol. 78. [37] F. Blanchini, “Set invariance in control,” Automatica, vol. 35, no. 11, pp. 1747–1767, 1999. [38] S. Misra, L. Roald, and Y. Ng, “Learning for constrained optimization: Identifying optimal active constraint sets,” INFORMS Journal on Computing, vol. 34, no. 1, pp. 463–480, 2022. [39] A. Domahidi, E. Chu, and S. Boyd, “Ecos: An socp solver for embedded systems,” in 2013 European control conference (EC-
C). IEEE, 2013, pp. 3071–3076. [40] P. J. Goulart and Y. Chen, “Clarabel: An interior-point solver for conic programs with quadratic objectives,” arXiv preprint arXiv:2405.12762, 2024. [41] S. Diamond and S. Boyd, “Cvxpy: A python-embedded modeling language for convex optimization,” Journal of Machine Learning Research, vol. 17, no. 83, pp. 1–5, 2016. [42] J. Wu, L. Dai, S. Dou, and Y. Xia, “Accelerated successive convex approximation for nonlinear optimization-based control,” IEEE Transactions on-
 Automatic Control, 2025.
[43] J. A. Andersson, J. Gillis, G. Horn, J. B. Rawlings, and M. Diehl, “Casadi: a software framework for nonlinear optimization and optimal control,” Mathematical Programming Computation, vol. 11, no. 1, pp. 1–36, 2019. [44] A. W ̈achter and L. T. Biegler, “On the implementation of an interiorpoint filter line-search algorithm for large-scale nonlinear programming,” Mathematical programming, vol. 106, no. 1, pp. 25–57, 2006.

---

## Processing Information

- **Processing Library:** Zotero PDFWorker
- **Processing Date:** 2026-02-10T18:18:32.621Z
- **Text Length:** 61376 characters
- **Success:** Text extraction completed
- **PDF Library Used:** Zotero PDFWorker
- **Pages Processed:** 13 of 13
