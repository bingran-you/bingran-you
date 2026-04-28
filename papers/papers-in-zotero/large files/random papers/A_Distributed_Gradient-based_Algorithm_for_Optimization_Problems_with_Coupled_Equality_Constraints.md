# PDF Document: Qiu and Lin - 2025 - A Distributed Gradient-based Algorithm for Optimization Problems with Coupled Equality Constraints.pdf

**File Path:** Qiu and Lin - 2025 - A Distributed Gradient-based Algorithm for Optimization Problems with Coupled Equality Constraints.pdf

**Processed Date:** 2026-02-10T18:16:25.522Z

**File Size:** 556.38 KB

**Total Pages:** 11

**Extracted Pages:** 11

**PDF Library:** Zotero PDFWorker

**Attachment Item ID:** 3267

**Title:** A Distributed Gradient-based Algorithm for Optimization Problems with Coupled Equality Constraints

**Collection:** Large Files > Random Papers

---

## Extracted Text Content

A Distributed Gradient-based Algorithm for Optimization
Problems with Coupled Equality Constraints ⋆
Chenyang Qiu a, Zongli Lin a
aCharles L. Brown Department of Electrical and Computer Engineering, University of Virginia, Charlottesville, VA 22904, USA
Abstract
This paper studies a class of distributed optimization problems with coupled equality constraints in networked systems. Many existing distributed algorithms rely on solving local subproblems via the argmin operator in each iteration. Such approaches become computationally burdensome or intractable when local cost functions are complex. To address this challenge, we propose a novel distributed gradient-based algorithm that avoids solving a local optimization problem at each iteration by leveraging -
first-order approximations and projection onto local feasible sets. The algorithm operates in a fully distributed manner, requiring only local communication without exchanging gradients or primal variables. We rigorously establish sublinear convergence for general convex cost functions and linear convergence under strong convexity and smoothness conditions. Numerical simulation on the IEEE 118-bus system demonstrates the superior computational efficiency and scalability of the proposed method comp-
ared to several state-of-the-art distributed optimization algorithms.
Key words: Distributed optimization, first-order method, coupled-constraint optimization
1 Introduction
The optimization problem with coupled equality constraints, also known as the resource allocation or economic dispatch problem, serves as a fundamental model in various real-world applications, including efficient power system operation [1], channel assignment in wireless communication networks [2], and task scheduling [3]. At its core, the optimization problems with coupled equality constraints seek to optimally allocate available resources to satisfy demand at the minimum possible cost, while ad-
hering to a range of operational constraints. Historically, such problems have been solved via centralized approaches, where a central coordinator, equipped with global system information, computes the optimal solution [4]. While effective, these centralized methods incur significant communication overhead, raise privacy concerns, and are vulnerable to the failure of the central node. In the meantime, the rapid development of several advanced technologies, such as distributed energy resources, cyb-
er-networks, and cloud
⋆ This work was supported in part by the National Science Foundation under the grant number CMMI–2243930. The material in this paper was not presented at any conference. Corresponding author: Zongli Lin.
Email addresses: nzp4an@virginia.edu (Chenyang Qiu), zl5y@virginia.edu (Zongli Lin).
computing, is making conventional centralized management strategies increasingly inadequate [5, 6].
These practical limitations of centralized methods, together with the growing deployment of advanced technologies, have spurred the development of distributed algorithms. In the distributed framework, each agent conducts local optimization and communicates with neighboring units through limited information exchange. This decentralized strategy significantly improves scalability, enhances system resilience, and offers better privacy preservation. Consensus-based algorithms have been extensively ado-
pted to solve the optimization problem with coupled equality constraints in a distributed manner. These algorithms exploit local communication to iteratively achieve consensus on marginal costs, enabling fully distributed and scalable solutions without the need for centralized coordination [7–10]. However, existing consensus-based approaches often assume quadratic cost functions and relatively simple constraints, which limit their applicability to more general settings involving non-quadratic obje-
ctives.
To handle more general or nonsmooth cost functions beyond quadratic functions, a range of advanced distributed optimization algorithms has been proposed. A common approach involves reformulating the distributed optimization problem with coupled equality
Preprint submitted to Automatica 26 November 2025
arXiv:2511.19723v1 [math.OC] 24 Nov 2025

constraints by introducing two convex sets with associated indicator functions, thereby enabling variable splitting and problem decomposition. Building on the Alternating Direction Method of Multipliers (ADMM) framework, several works have made notable progress [11–13]. Ref. [11] provided a class of algorithms that solve the distributed optimization problem with coupled equality constraints with convergence guarantees. Further, Ref. [12] introduced a fully distributed ADMM-based algorithm with co-
nvergence guarantees. Ref. [14] proposes a distributed primal–dual algorithm, where each iteration embeds a finite-time multi-step consensus iterations to get local estimates of the global constraint violation. More recently, Ref. [15] proposed an augmented Lagrangian tracking method to address distributed optimization problems involving coupled constraints, broadening the applicability of ADMMbased strategies.
Another line of research tries to solve the distributed optimization problem with coupled equality constraints from a duality perspective, by reformulating it as a consensus optimization problem and solving its dual formulation [16–20]. For instance, based on the mirror relationship between the consensus optimization problem and the optimization problem with coupled equality constraints, Ref. [16] proposed three algorithms, MirrorP-EXTRA, Mirror-EXTRA, and Mirror-PG-EXTRA. Ref. [17] utilized the f-
irst-order information of the objective function and provided convergence rates for both convex and strongly convex cases. Leveraging the duality, Ref. [18] developed a distributed dual gradient tracking algorithm for resource allocation. Under the assumption of strong convexity and in the absence of local constraints, the algorithm achieves ergodic sublinear convergence to the Karush–Kuhn–Tucker (KKT) condition at a rate of O(1/k). Algorithms proposed in Ref. [19] achieve an ergodic convergence r-
ate of O(1/k) considering local constraints and have been extended for differential privacy.
It is worth noting that many existing distributed algorithms for solving distributed optimization problems with coupled equality constraints rely heavily on the use of the argmin operator and require each agent to solve a local optimization problem at every iteration. While this approach can be efficient when local objective functions are simple, such as in the case of quadratic functions with closed-form solutions, its applicability becomes limited when dealing with more complex functions, such a-
s exponential type cost functions [21], where solving the local optimization problem at each iteration is computationally expensive or even intractable.
To address this challenge, we propose a novel distributed algorithm, termed the Distributed Gradient-based Algorithm (DGA), that circumvents the need to solve local optimization problems at each iteration, resulting in a single-loop algorithm. Instead of applying the
argmin operator, DGA uses a first-order approximation of each agent’s objective function based solely on local gradient information, thereby significantly reducing the per-iteration computational burden. To ensure feasibility, the proposed algorithm employs projection onto local constraint sets at each iteration, maintaining variable updates within the allowable operational limits. Another appealing feature of our algorithmis that it does not require exchanging sensitive information, such as the g-
radient and primal variables, making it privacypreserving. Under mild and standard assumptions, we rigorously establish the convergence properties of the algorithm. Specifically, when the cost function is convex and Lipschitz-smooth, we establish a nonergodic convergence rate of o(1/k). Under the additional assumption of strong convexity, the convergence further improves to a linear rate. Numerical simulation demonstrates that our algorithm outperforms state-of-the-art methods in terms of converge-
nce speed, both with respect to the number of iterations and the overall computation time.
Our main contributions in this paper are summarized as follows.
(1) We propose a novel gradient-based distributed optimization algorithm for solving optimization problems with coupled affine equality constraints by adapting an approximate method of multipliers. In contrast to many existing approaches [11, 12, 14, 15, 18, 19, 22–24] that require solving a local optimization problem at each iteration, the proposed method eliminates the need for the use of argmin to solve local optimization problem per iteration. Instead, it relies solely on local gradient inform-
ation and projection onto feasible sets, thereby significantly reducing per-iteration computational complexity. Unlike existing methods, the proposed algorithm does not require any special initialization and guarantees the feasibility of each agent’s local constraints throughout the iterations. (2) For convex cost functions, we prove that the KKT errors converge to 0 at a nonergodic rate of o (1/k). For strongly convex functions, we establish linear convergence. In contrast, existing algorithms ba-
sed on similar first-order approximations, such as Mirror-PG-EXTRA [16], which lacks explicit convergence guarantees, and DuSPA [17], which achieves a non-ergodic rate of O(1/k) for convex case, offer weaker theoretical assurances.
The remainder of this paper is organized as follows. Section 2 introduces the problem formulation. Section 3 develops our single-loop distributed algorithm. Section 4 establishes the convergence analysis. Section 5 provides numerical experiments to validate our algorithm. Section 6 concludes the paper.
Notation: For a differentiable function f : Rp → R,
its gradient at x ∈ Rp is denoted by ∇f (x). For any,
2

possibly non-differentiable, function g : Rp → R, its
subdifferential, i.e., its subgradient set at x ∈ Rp, is represented by ∂g(x). The symbols 0p, 1p, and Ip are used to denote the p-dimensional all-zero vector, allone vector, and identity matrix, respectively. In addition, Om×p denotes the (m × p)-dimensional zero matrix. Let ⊗ denote the Kronecker product, 〈·, ·〉 be the Euclidean inner product, and ‖ · ‖ be the l2 norm. Given A ∈ Rp×p, A 1
2 is the square root of A (i.e., A 1
2 A1
2 =A ), and we write A Op×p if it is positive semidefinite and A ≻ Op×p if it is positive definite. For any A Op×p and x ∈ Rp, ‖x‖2A := xTAx, the spectral
norm of A is denoted by ‖A‖. For any matrix A, A† is
A′ ’s pseudoinverse. In addition, we denote the block diagonal matrix by diag(A1, A2, . . . , An) whose blocks are A1, A2, . . . , An. The projection of a vector x onto X is denoted by PX (x).
2 Problem Formulation
2.1 Optimization Problem
This paper considers the following affine coupledconstraint problem,
min
x∈X f (x) =
n
∑
i=1
fi(xi), s. t.
n
∑
i=1
Aixi =
n
∑
i=1
di, (1)
where x = [x1T x2T . . . xnT
]T ∈ Rnp, xi ∈ Rp, i ∈ V, are the decision variables, di ∈ Rm, Ai ∈ Rm×p and {Ai}in=1
are not all zero, the local constraint for each agent is a
convex constraint set Xi ⊆ Rp. Accordingly, we define X = X1 × X2 × · · ·× Xn. In problem (1), we only require m ≤ np, which is weaker than [19], where Ai is required to have a full row rank.
Assumption 1 For each i ∈ V, the function fi is convex, differentiable and lf -smooth, i.e.,
‖∇fi (x′i) − ∇fi (xi)‖ ≤ lf ‖x′i − xi‖ ∀x′i, xi ∈ Rp,
for some lf > 0.
Assumption 2 (Slater’s condition) The solution set is nonempty, and there exist some points in the relative interior of X, ri{X}, such that the desired power con
straint ∑n
i=1 Aixi = ∑n
i=1 di is satisfied.
2.2 Communication Model
We consider a networked system consisting of n agents labeled by the index set V = {1, 2, . . . , n}, where the communication structure among agents is modeled by a connected undirected graph G = (V, E). Each vertex i ∈ V corresponds to an individual agent, and the edge
set E ⊆ {(i, j) | i 6= j, i, j ∈ V} encodes the bidirectional communication links between agents. An edge (i, j) ∈ E is associated with a positive scalar weight pij = pji > 0, representing the interaction strength between agents i and j. The communication topology is further character
ized by the adjacency matrix P = [pij ] ∈ Rn×n, where pij > 0 if and only if (i, j) ∈ E, and pij = 0 otherwise. For each agent i ∈ V, we define its local neighborhood as Ni = {j ∈ V | (i, j) ∈ E}. Communication is assumed to be local, i.e., each agent can exchange information only with its immediate neighbors.
3 Algorithm Development
By introducing the Lagrangian multiplier y ∈ Rp, the Lagrangian function associated with problem (1) is de
fined as f (x) + 〈δ, ∑n
i=1(Aixi − di)〉. The dual problem
to problem (1) is then given as
max
δ∈Rm inf
x∈XL(x, δ) = max
δ∈Rm inf
x∈X
{n ∑
i=1
(fi(xi)+〈δ, Aixi −di〉)
}
= max
δ∈Rm
n
∑
i=1
inf
xi ∈Xi
{fi(xi) +〈δ, Aixi −di〉}
= max
δ∈Rm
n
∑
i=1
−fi∗(−δ) − 〈δ, di〉, (2)
where, for each i ∈ V, the conjugate function fi∗(δ) is
defined as
fi∗(δ) = − inf
xi∈Xi
{fi(xi) − 〈δ, Aixi〉} .
Let gi(δ) = fi∗(−δ) + 〈δ, di〉. Then, the dual problem in
(2) can be written as minδ∈Rp
∑n
i=1 gi(δ). To solve this
problem in a distributed manner, each agent i ∈ V maintains a local copy yi of the global variable δ. The resulting formulation is a distributed consensus optimization problem
min
y∈Rnm G(y) =
n
∑
i=1
gi(yi), s. t. yi = yj, i, j ∈ V, (3)
where y = [y1T y2T . . . ynT
]T. In [25], it has been shown that, when the topology of the network is connected, problem (3) is equivalent to the following compact form:
min
y∈Rnm G(y) =
n
∑
i=1
gi(yi), s. t. W 1
2 y = 0nm. (4)
where W = L ⊗ Im Onm and L is the Laplacian matrix of the network. By introducing the augmented Lagrangian function Lρ(y, v) = G(y) − vTW 1
2y +
ρ 2
∥ ∥
∥W 1
2y
∥ ∥ ∥
2 , ρ > 0, we can linearize the method of mul
tipliers [26] for solving (4), and the resulting update is
3

given as follows,
yk+1 = argmin
y
{
〈∇G(yk), y〉 − 〈W 1
2 vk, y〉 + ρ〈W yk, y〉
+η
2
∥
∥y − yk∥
∥
2
}
= yk − 1
η (∇G(yk) + W 1
2 vk − ρW yk), (5a)
vk+1 = vk − ρW 1
2 yk+1, (5b)
where ∇G(yk) = [∇g1T(y1k) ∇g2T(y2k) . . . ∇gnT(ynk )]T ∈
Rnm and
∇gi(yk
i ) = −∇fi∗(−yk
i ) + di
= −argmin
z∈Xi
{fi(z) + 〈Aiz, yk
i 〉} + di
= −Aixk+1
i + di. (6)
Let A ∈ Rnm×np be a block-diagonal matrix defined as A = diag(A1, A2, . . . , An) and d = [d1T d2T . . . dnT]T.
Then, ∇G(yk) = Axk + d, and the linearized method of multipliers for (4) is given as
xk+1 = argmin
z∈X
{f (z) + 〈Az, yk〉} , (7a)
yk+1 = yk − 1
η (−Axk+1 + d − λk + ρW yk), (7b)
λk+1 = λk − ρW yk+1, (7c)
where λk = W 1
2 vk. In the above algorithm, due to the presense of the local optimization problem at each iteration in (7a) which might not be efficiently solved, we approximate the solution of argmin in (7a) with the pro
jection of (xk − α(∇f (xk) + ATyk)) onto set X. Substituting the projection into the dual ascent steps yields our proposed algorithm:
xk+1 = PX (xk − α(∇f (xk) + ATyk)), (8a)
yk+1 = yk − 1
η (−Axk+1 + d − λk + ρW yk), (8b)
λk+1 = λk − ρW yk+1, (8c)
where PX is the projection operator over the convex set X. The distributed implementation of (8) over the undirected network (V, E) is detailed in Algorithm 1.
4 Convergence Analysis
In this section, we consider two cases, with and without
local constraints, i.e., Xi ⊂ Rp and Xi = Rp, i ∈ V. For these two cases, we establish sublinear and linear convergence rates, respectively.
We denote the optimal solution of problem (1) by
h∗ = [(x∗)T (y∗)T (λ∗)T]T, where x∗ = [(x1∗)T (x2∗)T . . .
Algorithm 1 Distributed Gradient-based Algorithm
1: Initialization: x0 = [(x01)T (x02)T . . . (x0n)T]T,
y0 = [(y10)T (y20)T . . . (y0n)T]T are arbitrarily set.
λ0 = [(λ01)T (λ02)T . . . (λ0n)T]T is intialized to satisfy (1Tm ⊗ In)λ0 = 0m . Each agent i ∈ V sends
the variable yi0 to its neighbors j ∈ Ni. After re
ceiving the information from its neighbors, each agent i ∈ V computes the aggregated information ti0 = ∑
j∈Ni pij (yi0 − yj0).
2: for k = 0, 1, 2, . . . , do
3: For each agent i ∈ V computes xk+1
i = PXi (xik −
α(∇f (xik) + AiTyik)).
4: Each agent i ∈ V updates yk+1
i = yik −
1
η (−Aixk+1
i + di − λik + ρti,k) and sends the variable yik to its neighbors j ∈ Ni.
5: Each agent i ∈ V sends the variable yk+1
i to its
neighbors j ∈ Ni. After receiving the information from its neighbors, each agent i ∈ V computes the aggregated information tk+1
i =∑
j∈Ni pij (yk+1
i− yk+1
j ).
6: Each agent i ∈ V updates λk+1
i = λik − tk+1
i.
7: Set k ← k + 1 and go to Step 3 until a certain stopping criterion is satisfied, e.g., maximum number of iterations. 8: end for
(x∗n)T]T, y∗ = [(y1∗)T (y2∗)T . . . (y∗n)T]T, and λ∗ =
[(λ1∗)T (λ2∗)T . . . (λ∗n)T]T. The optimal solution satisfies
the first-order optimality conditions (KKT conditions) for convex constrained optimization problems as described in [27]. In particular, the following conditions
must hold. First, the dual variable y∗ lies in the null space of the W , i.e.,
W y∗ = 0nm, (9)
which indicates consensus of yi∗ for all i ∈ V. Second,
let σi(xi) be the indicator function associated with the convex set Xi, i ∈ V, i.e., σi (xi) = 0 if xi ∈ Xi and σi (xi) = +∞, otherwise. Then, the subdifferential condition associated with the objective and constraint functions is given by
−ATy∗ − ∇f (x∗) ∈ ∂σ(x∗), (10)
where σ(x) = ∑n
i=1 σi(xi) and ∂σ (x∗) denotes the sub
differential of the indicator function encoding local con
straints at x∗. This reflects a standard KKT-type optimality condition under nonsmooth composite objectives. In addition, based on the definition of Lρ(y, v) and (6), every v∗ satisfying W 1
2 v∗ = ∇G(y∗) = −(Ax∗ − d) is an optimal dual variable for problem (4), and hence,
λ∗ = −(Ax∗ − d). (11)
4

Since λ∗ is in the range space of W , (11) is equivalent to
the coupled constraint, i.e., (1Tm ⊗ In)(Ax∗ − d) = 0m.
4.1 Sublinear Convergence Rate
In this section, we carry out the convergence analysis of the proposed algorithm under Assumptions 1 and 2. Denote the variable generated by the proposed algorithm
at the kth iteration as hk = [(xk)T (yk)T (λk)T]T. For k ≥ 0, denote the difference of variables between the
(k + 1)th iteration and the kth iteration as ∆xk+1 =
xk+1 − xk, ∆yk+1 = yk+1 − yk, ∆λk+1 = λk+1 − λk,
∆∇f (xk+1) = ∇f (xk+1)−∇f (xk) and ∆hk+1 = hk+1 −
hk. The next two lemmas show the upper bound of the
summation of ‖∆hk‖2Ω and the monotonicity of ‖∆hk‖2Ω.
The relationship between two consecutive iterations are given in Lemma 1.
Lemma 1 Let Assumptions 1 and 2 hold, If ρ
η< 1
λmax(W ) and α < 1
lf , we have the following inequalities
which establish the monotonicity of ‖hk − h∗‖2Ω and pro
vide an upper bound of the summation of the sequence ∆hk generated by the proposed DGA, respectively,
‖hk − h∗‖2
Ω − ‖hk+1 − h∗‖2
Ω
≥ ‖hk+1 − hk‖2
Ω − αlf ‖xk+1 − xk‖2, k ≥ 0, (12)
k
∑
t=0
∥
∥∆ht+1∥
∥
2
Ω < ‖h0 − h∗‖2Ω
(1 − αlf ) , k ≥ 1, (13)
where Ω ∈ R(np+2nm)×(np+2nm) is defined as
Ω=

  
Inp −αAT Onp×nm
Onm×np αη(Inm − ρ
η W ) Onm×nm
Onm×np Onm×nm α
ρW†

  
.
PROOF. By (8b) and (9), we have
λk+1 − λ∗ = λk − λ∗ − ρW (yk+1 − y∗) . (14)
In addition, (8c) and (11) yield
yk+1 − y∗ =
(
Inm − ρ
ηW
)
(yk − y∗)
−1
η
(A(xk+1 − x∗) − (λk − λ∗)) . (15)
Note that (Inm−ρ
η W ) ≻ Onm. Combining the above two equations leads to
A(xk+1 − x∗)
=η
(
Inm − ρ
ηW
)
(yk+1 − yk) − (λk+1 − λ∗). (16)
In addition, by the optimal condition of (8a), we have
−xk+1 + (xk − α(∇f (xk) + ATyk)) ∈ ∂σ (xk+1) . (17)
The convexity of the indicator function σ leads to
〈∂σ (xk+1) − ∂σ (x∗) , xk+1 − x∗〉 ≥ 0. Therefore, in view of (10) and (17), we have
0 ≤ 〈xk − xk+1 − α((∇f (xk) + ATyk)
− (ATy∗ + ∇f (x∗))), xk+1 − x∗〉. (18)
Then, we can embed (16) into (18) to obtain
− α〈∇f (xk) − ∇f (x∗), xk+1 − x∗〉
≥ 〈xk+1 − xk, xk+1 − x∗〉+α〈AT(yk − y∗), xk+1 − x∗〉 = 〈xk+1 − xk, xk+1 − x∗〉+α〈AT(yk −yk+1), xk+1 − x∗〉
+ α〈AT(yk+1 − y∗), xk+1 − x∗〉
= 〈xk+1 − xk, xk+1 − x∗〉+α〈AT(yk −yk+1), xk+1 − x∗〉
+α
〈
yk+1 − y∗, η
(
Inm − ρ
ηW
)
(yk+1 − yk)
〉
− α〈yk+1 − y∗, λk+1 − λ∗〉. (19)
By (8c) and (9), we have λk+1 − λk = −ρW (yk+1 − y∗). Since W is a semi-definite matrix with only one zero eigenvalue, we have the pseudo inverse matrix of W is also semi-definite with only one zero eigenvalue. Thus, we have
−1
ρ W †(λk+1 − λk) = yk+1 − y∗, (20)
and hence, 〈y∗ − yk+1, λk+1 − λ∗〉 = 〈 1
ρ W †(λk+1 − λk), λk+1 −λ∗〉, substitution of which into (19) yields
− α〈∇f (xk) − ∇f (x∗), xk+1 − x∗〉
≥ 〈xk+1 − xk, xk+1 − x∗〉+α〈AT(yk −yk+1), xk+1 − x∗〉
+α
〈
yk+1 − y∗, η
(
Inm − ρ
ηW
)
(yk+1 − yk)
〉
+α
ρ 〈W †(λk+1 − λk), λk+1 − λ∗〉
= 〈hk+1 − hk, hk+1 − h∗〉Ω
=1
2 (‖hk+1 −h∗∥
∥2
Ω−∥
∥ hk −h∗∥
∥2
Ω+∥
∥hk+1 −hk‖2
Ω). (21)
By the Lipschitz smoothness and convexity of f , we have
f (xk+1) ≤ f (xk)+〈∇f (xk), xk+1−xk〉+ lf
2 ‖xk+1−xk‖2,
f (xk+1) ≥ f (x∗) + 〈∇f (x∗), xk+1 − x∗〉.
5

Combining the above two inequalities, we obtain
f (xk) − f (x∗) + lf
2 ‖xk+1 − xk‖2
≥〈∇f (x∗), xk+1 − x∗〉 − 〈∇f (xk), xk+1 − xk〉,
which together with f (xk) − f (x∗) ≤ 〈∇f (xk), xk − x∗〉, results in
〈∇f (xk) − ∇f (x∗) , xk+1 − x∗〉 ≥ − lf
2 ‖xk+1 − xk‖2,
substitution of which into (21) results in (12).
Noting that α < 1
lf , we have
∥
∥∆hk+1∥
∥
2
Ω−αlf Ω′ ≥ (1 − αlf ) ∥
∥∆hk+1∥
∥
2
Ω ≥ 0, (22)
where Ω′ = diag{Inp, Onm, Onm} and the second equality holds at ∆hk+1 = 0. Based on (22), summing (12) from 0 to k leads to (13). ✷
Lemma 2 Let Assumptions 1 and 2 hold. If ρ
η< 1
λmax(W ) and α < 1
lf , then the sequence ‖∆hk‖Ω gener
ated by the proposed DGA algorithm is monotonically nonincreasing, that is,
‖∆hk‖2
Ω ≥ ‖∆hk+1‖2
Ω. (23)
PROOF. Similar to (16), we have the relationship
among ∆yk+1, ∆xk+1 and ∆λk+1 as follows
η
(
Inm − ρ
ηW
)
(∆yk+1 − ∆yk) = A∆xk+1 − ∆λk+1.
(24) Taking the difference of the kth update and the (k +1)th update of (17) yields
−(∆xk+1 −∆xk)−α(∆∇f (xk)+AT∆yk)) ∈ σk+1 −σk,
which, in view of the convexity of σ, i.e., 〈∆xk+1, σk+1 − σk〉 ≥ 0, results in
〈∆xk+1, −∆xk+1 + ∆xk〉 + α〈∆xk+1, −∆∇f (xk)〉
+ α〈∆xk+1, −AT∆yk〉 ≥ 0. (25)
The equivalent expression of the last term on the right hand side of the above equation is
α〈∆xk+1, −AT∆yk〉
= α〈∆xk+1, AT(∆yk+1 − ∆yk)〉 − α〈∆xk+1, −AT∆yk+1〉
= α〈∆xk+1, AT(∆yk+1 − ∆yk)〉
−α
〈
η
(
Inm − ρ
ηW
)
(∆yk+1 − ∆yk), −∆yk+1
〉
− α〈∆λk+1, −∆yk+1〉
= α〈∆xk+1, AT(∆yk+1 − ∆yk)〉
−α
〈
η
(
Inm − ρ
ηW
)
(∆yk+1 − ∆yk), −∆yk+1
〉
−α
〈
∆λk+1, 1
ρ W †(∆λk+1 − ∆λk)
〉
, (26)
where the second equality results from (24) and the last equality is due to (8c). Substituting (26) back into (25), we have
− α〈∆∇f (xk ), ∆xk+1〉
≥ 〈∆xk+1 −∆xk, ∆xk+1〉+α〈AT(∆yk −∆yk+1), ∆xk+1〉
+α
〈
η
(
Inm − ρ
ηW
)
(∆yk+1 − ∆yk), ∆yk+1
〉
+ α〈∆λk+1 − ∆λk, ∆λk+1〉
=1
2 (‖∆hk+1‖2
Ω − ‖∆hk‖2
Ω + ‖∆hk+1 − ∆hk‖2
Ω). (27)
On the other hand
− α〈∆∇f (xk ), ∆xk+1〉
= − α〈∆∇f (xk), ∆xk+1 − ∆xk〉 − α〈∆∇f (xk), ∆xk〉
≤
(α
2ξ − α
lf
)
‖∆∇f (xk)‖2 + αξ
2 ‖∆xk+1 − ∆xk‖2,
(28)
where for any ξ > 0 the last inequality is due to the triangular inequality and the Lipschitz smoothness of f . Taking ξ > lf /2 and combining (28) and (27) results in
‖∆hk ‖2
Ω
≥‖∆hk+1‖2
Ω + ‖∆hk+1 − ∆hk‖2
Ω − αξ‖∆xk+1 − ∆xk‖2,
which, in view of ξ ∈ ( lf
2, 1
α ), completes the proof of
Lemma 2. ✷
Theorem 3 Let Assumptions 1 and 2 hold. If ρ
η<
1
λmax(W ) and α ∈
(
0, min
{1
lf , 4λmin(ηInm−ρW )
‖A‖2
2
})
, then
‖∆hk‖2Ω = o (1/k), and, consequently, the errors in the
KKT conditions vanish at the rate of o (1/k),
∥ ∥ ∥ ∥ ∥
n
∑
i=1
Aixk+1
i − di
∥ ∥ ∥ ∥ ∥
2
=o
(1
k
)
, (29a)
‖α(∇f (xk+1) + ATyk)) + νk+1‖2 = o
(1
k
)
, (29b)
where νk+1 ∈ ∂σ (xk+1).
6

PROOF. Combining Lemmas 1 and 2 with [16, Propo
sition 1], we have that the sequence ∆hk satisfies the non
ergodic rate, i.e., ‖∆hk‖2Ω = o(1/k). Let S = 1
2 (Ω + ΩT)
and ‖∆hk‖2Ω = ‖∆hk‖2S. Since α < 4λmin(ηInm−ρW )
‖A‖2
2
, we
have αη
(
Inm − ρ
ηW
)
− α2
4 AA⊤ 0 and S is thus positive semidefinite, which directly implies that
‖xk+1 − xk‖2 = o
(1
k
)
, (30a)
‖yk+1 − yk‖2
η(Inm−ρ
ηW) = o
(1
k
)
. (30b)
Since both λk and λ∗ lie in the null space of W , leftmultiplying both sides of (16) by (1Tm ⊗ In) gives
η(1Tm ⊗ In)
(
Inm − ρ
ηW
)
(yk+1 − yk)
= (1Tm ⊗ In)(Axk+1 − d) =
n
∑
i=1
Aixi − di.
Taking norms of both sides and using (30b), we obtain
∥ ∥ ∥ ∥ ∥
n
∑
i=1
Aixk+1
i − di
∥ ∥ ∥ ∥ ∥
2
=η∥
∥1Tm ⊗ In
∥ ∥
2 ‖(Inm −(ρ/η)W )‖‖yk+1 − yk‖2
η(Inm−ρ
η W ),
which establishes (29a). By (17), there exists νk+1 ∈ ∂σ (xk+1) such that
‖xk+1 − xk‖ = ‖α(∇f (xk) + ATyk)) + νk+1‖,
Using the Lipschitz continuity of ∇f and inequality (30a) yields
‖α(∇f (xk+1)+ATyk))+νk+1‖
≤ ‖α(∇f (xk)+ATyk))+νk+1‖+‖∇f (xk+1)−∇f (xk)‖
≤ (αlf + 1)‖xk+1 − xk‖,
which establishes (29b). ✷
4.2 Linear Convergence Rate
In this section, we consider the case of X = Rnp and establish a linear convergence rate of Algorithm 1 under certain conditions.
Assumption 3 For each i ∈ V, the cost function fi is μ-strongly convex, i.e.,
‖∇fi (x′i) − ∇fi (xi)‖ ≥ μ ‖x′i − xi‖ ∀x′i, xi ∈ Rp,
for some μ > 0.
Since the constraint in problem (1) is affine and X is convex, the feasible set is convex. Under a μ-strongly convex objective function and Assumption 2, the problem has a unique optimal solution in the feasible convex set.
Theorem 4 Suppose that X = Rnp and Assumptions 1-3 hold. Suppose that the parameters satisfy
η > max



α‖A‖2
(2
lf+μ − 1
θ0
)
θ2
, lf +μ
2μlf α
(
ρ‖A‖2‖W ‖+ ‖A‖2
θ1
)



,
α< 2
lf +μ , θ0 ∈ ( lf +μ
2 ,1
α ], and θ1 + θ2 < 1, the sequence
{hk }
k≥0 generated by the proposed algorithm will con
verge linearly to the optimal solution h∗ of the problem (1). In particular, we have
∥
∥hk+1 − h∗∥
∥
2
Θ ≤δ∥
∥hk − h∗∥
∥
2
Θ , (31)
where for some positive definite Θ and δ ∈ (0, 1).
PROOF. We first establish the basic inequality showing the decreasing property of the optimality gap
∥
∥hk − h∗∥
∥Ω based on the smoothness and strong con
vexity of f . By (21), we have
∥
∥hk+1 − h∗∥
∥
2
Ω−∥
∥hk − h∗∥
∥
2 Ω
≤−∥
∥∆hk+1∥
∥
2
Ω − 2α 〈∇f (xk) − ∇f (x∗) , xk+1 − x∗〉
≤−∥
∥∆hk+1∥
∥
2
Ω − 2α 〈∇f (xk) − ∇f (x∗) , xk − x∗〉
− 2α 〈∇f (xk) − ∇f (x∗) , ∆xk+1〉 . (32)
For the last term on the right-hand side of the second inequality in (32), using Young’s inequality, for any given θ0 > 0 we have
〈∇f (xk) − ∇f (x∗) , ∆xk+1〉
≥−
∥
∥∇f (xk) − ∇f (x∗)∥
∥
2
2θ0
− θ0
∥
∥∆xk+1 ∥
∥
2
2 . (33)
Since f is lf -smooth and μ-strongly convex, for the second term of (32) we have
〈∇f (xk)−∇f (x∗) , xk −x∗〉
≥1
lf +μ
∥
∥∇f (xk)−∇f (x∗)∥
∥
2+ μlf
lf +μ
∥
∥xk −x∗∥
∥
2 . (34)
Using (33) and (34) in (32), we have
∥
∥hk+1 − h∗∥
∥
2
Ω−∥
∥hk − h∗∥
∥
2 Ω
≤−∥
∥∆hk+1∥
∥
2
Ω + αθ0
∥
∥∆xk+1 ∥
∥
2 − 2μlf α
lf + μ
∥
∥xk − x∗∥
∥
2
−
( 2α
lf + μ − α
θ0
)
∥
∥∇f (xk) − ∇f (x∗)∥
∥
2 . (35)
7

Taking square of both sides of (14) yields
‖λk+1 − λ∗‖2 = ‖λk − λ∗ − ρW (yk+1 − y∗)‖2
= ‖λk − λ∗‖2 + ρ2‖yk+1 − y∗‖2
W2
− 2ρ〈W (yk+1 − y∗), λk − λ∗〉. (36)
Left-multiplying both sides of (15) by ρ 1
2W 1
2 yields, we have
ρ
1
2W 1
2
[
(yk+1 − y∗) − 1
η (λk − λ∗)
]
=ρ 1
2W 1
2
[(
Inm − ρW
η
)
(yk − y∗) + 1
η A(xk+1 − x∗)
]
.
Then, taking square both sides of the above equation results in
ρ‖yk+1 −y∗‖2W −2
〈
ρW (yk+1 −y∗), 1
η (λk −λ∗)
〉
+ρ
η2 ‖λk −λ∗‖2W
=ρ‖yk −y∗‖2
W (Inm−ρW
η )2 + ρ
η ‖A(xk+1 −x∗)‖2W
+2
〈
ρW
(
Inm − ρW
η
)
(yk −y∗), 1
η A(xk+1 −x∗)
〉
=ρ‖(yk −y∗)‖2
W (Inm−ρW
η )2 + ρ
η ‖A(xk+1 −x∗)‖2W
+2
η
〈
ρW
(
Inm − ρW
η
)
(yk −y∗), A(xk −x∗)
〉
−2
η
〈
ρW
(
Inm − ρW
η
)
(yk −y∗),αA(∇f (xk)−∇f (x∗))
〉
−2
η
〈
ρW
(
Inm − ρW
η
)
(yk −y∗), αAAT(yk −y∗)
〉
≤ρ‖yk −y∗‖2
W (Inm−ρW
η )2 + ρ
η ‖A(xk+1 −x∗)‖2W
+1
η ‖yk −y∗‖2
(θ1+θ2)ρ2W 2(Inm−ρW
η )2−αρAATW (Inm−ρW
η)
+ ‖A‖2
ηθ1
‖xk −x∗‖2 + α2‖A‖2
ηθ2
‖∇f (xk)−∇f (x∗)‖2
≤‖yk −y∗‖2H + ρ‖A‖2‖W ‖
η ‖xk+1 −x∗‖2 + ‖A‖2
ηθ1
‖xk −x∗‖2
+ α2‖A‖2
ηθ2
‖∇f (xk)−∇f (x∗)‖2, (37)
where θ1, θ2 > 0 and H = ρW
(
Inm − ρW
η
)2
+1
η
[
(θ1 +
θ2)ρ2W 2
(
Inm − ρW
η
)2 − αAATρW
(
Inm − ρW
η
)]
, the
second equality results from (8a), and the inequality is by the application of the triangular inequality.
Combining (36) and (37) leads to
‖yk+1 − y∗‖2
ρW − ρ2
η W2 + 1
η ‖λk+1 − λ∗‖2
− ρ‖A‖2‖W ‖
η ‖xk+1 − x∗‖2
≤‖λk − λ∗‖21
η Inm− ρ
η2 W + ‖yk − y∗‖2H + ‖A‖2
ηθ1
‖xk − x∗‖2
+ α2‖A‖2
ηθ2
‖∇f (xk) − ∇f (x∗)‖2. (38)
Combining (35) and (38) leads to
(
1− ρ‖A‖2‖W ‖
η
)
‖xk+1 −x∗‖2 +‖λk+1 −λ∗‖2α
ρ W †+1
η Inm
+ ‖yk+1 − y∗‖2
(αηInm+ρW )(Inm− ρ
ηW)
≤
(
1+ ‖A‖2
ηθ1
− 2μlf α
lf +μ
)
‖xk − x∗‖2
+‖yk −y∗‖2
αη(Inm−ρ
η W )+H +‖λk −λ∗‖2α
ρ W†+ 1
η Inm− ρ
η2 W
−
∥
∥∆hk+1∥
∥
2
Ω +αθ0
∥
∥∆xk+1 ∥
∥
2
−
( 2α
lf +μ − α
θ0
− α2‖A‖2
ηθ2
)
∥
∥∇f (xk)−∇f (x∗)∥
∥
2. (39)
To prove that there exists a δ ∈ (0, 1) such that (31) holds, we first show that the following inequalities hold,
− ρ‖A‖2‖W ‖
η ≻ ‖A‖2
ηθ1
− 2μlf α
lf + μ , (40a)
(αηInm +ρW)
(
Inm − ρ
ηW
)
≻ αη
(
Inm − ρ
ηW
)
+H, (40b)
α
ρW† + 1
η Inm ≻ α
ρW† + 1
η Inm − ρ
η2 W, (40c)
1 − αθ0 ≥ 0, (40d) 2α
lf + μ − α
θ0
− α2‖A‖2
ηθ2
≥ 0. (40e)
Inequality (40a) holds by the condition of the theorem,
that is, η > lf +μ
2μlf α
(
ρ‖A‖2‖W ‖ + ‖A‖2
θ1
)
. (40b) is equivalent to
ρ
ηW
(
Inm − ρW
η
)
(
αAAT +ρW −(θ1 +θ2)ρW
(
Inm − ρW
η
))
≻ Onm×nm,
which is true if the following inequality holds
αAAT + ρ(1 − θ1 − θ2)W + ρ2 (θ1 + θ2) W
η ≻ Onm×nm.
Since W and AAT are positive semidefinite, θ1 + θ2 < 1 ensures the above inequality and hence (40b). Inequality (40c) is true due to the positiveness of both ρ and η. Setting α < 2
lf +μ , θ0 ∈ ( lf +μ
2 ,1
α ] and η ≥ α‖A‖2
(2
lf +μ − 1
θ0 )θ2
ensures (40d) and (40e).
8

Based on inequalities (40d) and (40e), we can eliminate the nonpositive terms on the right-hand side of (39), leading to the following recursive inequality that relates the (k + 1)th and kth iterations,
∥
∥hk+1 − h∗∥
∥
2
Θ≤∥
∥hk − h∗∥
∥
2
Θ′ , (41)
where Θ and Θ′ are block-diagonal matrices defined as
Θ = diag{Θ1, Θ2, Θ3} and Θ′ = diag{Θ1, Θ2, Θ3} with individual blocks given by Θ1 = Inm − ρ‖A‖2‖W ‖
η , Θ2 =
(αηInm + ρW )
(
Inm − ρ
ηW
)
, Θ3 = α
ρW† + 1
η Inm, Θ′1 =
(1 + ‖A‖2
ηθ1 − 2μlf α
lf +μ )Inm, Θ′2 = αη
(
Inm − ρ
ηW
)
+ H, and
Θ′3 = α
ρW† + 1
ηI − ρ
η2 W . Furthermore, in view of the
fact that inequalities (40a), (40b), and (40c) hold by
proper parameter selections, we have Θ ≻ Θ′ Op. Consequently, there exists a scalar δ ∈ (0, 1) such that
δΘ Θ′. Substituting this bound into (41), we obtain the following inequality,
∥
∥hk+1 − h∗∥
∥
2
Θ ≤δ∥
∥hk − h∗∥
∥
2
Θ+∥
∥hk − h∗∥
∥Θ′ −δΘ
≤δ∥
∥hk − h∗∥
∥
2
Θ,
which completes the proof. ✷
5 Numerical Experiments
To validate the effectiveness of the proposed algorithm and to compare its performance with existing methods, we conduct a series of numerical experiments on a standard benchmark system. Specifically, the proposed method is compared with five state-of-the-art distributed algorithms: the Augmented Lagrangian Tracking (ALT) algorithm from [15], Mirror-PG-EXTRA and Mirror-P-EXTRA from [16], DMAC from [19], and DuSPA from [17]. Notably, the proposed algorithm and Mirror-PG-EXTRA rely solely on gradien-
t information, while Mirror-P-EXTRA, DMAC, and ALT require solving local optimization subproblems via the argmin operator at each iteration.
We consider the economic dispatch problem over the IEEE 118-bus system [28], where the communication network is modeled as an undirected graph G = (V, E) with V = 1, 2, . . . , 118 and edges defined by (i, i + 1) and (i, i + 2) for 1 ≤ i ≤ 116. This yields a sparse yet connected topology. A doubly stochastic weight matrix is generated accordingly. Among the 118 buses, 14 are randomly designated as generator buses, denoted by the set Vg. As for the settings for the optimization, we adapt the emissi-
on cost function in [21] to model the following optimization problem, whose local cost of each generator is a combination of quadratic functions and exponential
functions
mPin f (P ) =
118
∑
i=1
aiPi2 + biPi + δieliPi , (42)
s. t.
118
∑
i=1
Pi = d, pi ≤ P ≤ p ̄i, ∀i ∈ V,
where P = [P1 P2 . . . P118]T and the coefficients for each generator are randomly generated positive numbers. To be more specific, for i ∈ Vg, ai ∼ U([0.3, 0.7],
bi ∼ U ([100, 400]), δi ∼ U ([1, 10]) × 10−4 and li ∼
U([1, 10]) × 10−2. As for the limitations of generators, we set [pi, pi] = [0, 250], i ∈ Vg. For buses without gen
erators, i.e., for i ∈ V \ Vg, their corresponding coefficients ai, bi and δi are set to zero and their local constraints are set as pi = pi = 0. The total power demand
across the system is given by ∑14
i=1 di = 950MW, where
the summation is unknown to each bus. Without loss of generality, we set a virtual initial local demand di as (950/14)MW at each bus with a generator and 0MW at
all other buses. The optimal solution P ∗ of this problem is obtained by solving the problem centrally using a state-of-the-art solver MOSEK in YALMIP [29], and is used as a reference for evaluating convergence and accuracy. For the argmin opreation in Mirror-P-EXTRA, DMAC, and ALT, we also invoke the solver MOSEK in YALMIP to get the solutions of local optimization problems. Our experimental setup uses a Laptop with an Intel Core i7-13700HX CPU, and the MATLAB version is R2023b.
Figure 1 illustrates the evolution of the generator outputs, showing the difference between each Pi and its op
timal value Pi∗ over iterations. By the 300th iteration,
all generators exhibit negligible error, indicating convergence to the optimal dispatch. Figure 2 presents the
power mismatch ‖Pk − P ∗‖2 across iterations for the five algorithms. The proposed method consistently outperforms all baselines in terms of both convergence speed and solution quality. To assess computational time efficiency, Figure 3 plots the optimality error over actual computation time. It is observed that the proposed algorithm achieves the fastest convergence, significantly outperforming Mirror-P-EXTRA, Mirror-PG-EXTRA, DMAC, DuSPA, and ALT. This performance advantage arises because these m-
ethods require solving local optimization problems at each iteration. In contrast, the proposed algorithm, Mirror-PG-EXTRA, and DuSPA only involve first-order gradient computations and simple projections, resulting in superior time efficiency and faster error decay.
The simulation results on the IEEE 118-bus system demonstrate the effectiveness and efficiency of the proposed algorithm. Compared to five representative stateof-the-art methods, our algorithm achieves superior
9

0 100 200 300 400 500
-250
-200
-150
-100
-50
0
50
Fig. 1. The power output error of each generator under the proposed Algorithm 1.
0 500 1000 1500 2000 2500 3000 3500 4000 4500
10-6
10-4
10-2
100
102
104
106
Fig. 2. Comparison of optimal error over iteration for the six algorithms.
0 0.05 0.1 0.15 0.2 0.25 0.3 0.35 0.4 0.45
10-6
10-4
10-2
100
102
104
106
Fig. 3. Comparison of optimal error over computation time for the six algorithms.
performance in terms of convergence speed and solution accuracy, both with respect to iteration count and CPU time. This advantage is primarily attributed to the algorithm’s lightweight per-iteration computation, which avoids solving local optimization subproblems and instead leverages gradient-based updates with simple projection steps. Furthermore, the proposed method maintains competitive accuracy while offering better scalability and practicality for resource-constrained
distributed energy systems.
6 Conclusions
This paper presents a lightweight and scalable distributed algorithm for solving optimization problems with coupling equality constraints over networked systems. Unlike many existing methods that require solving local optimization problems at every iteration, the proposed algorithm obviates such a need by employing a projection-based gradient update. As a result, the proposed algorithm forms a single-loop iteration and reduces per-iteration computational overhead while preserving convergence guara-
ntees. We rigorously analyze the convergence behavior under both convex and strongly convex cost function settings, establishing nonergodic sublinear and linear convergence rates for general convex and strongly convex cases, respectively. Extensive numerical experiments on the IEEE 118bus system validate the algorithm’s effectiveness and demonstrate its superior performance in both convergence speed and computational efficiency compared to several benchmark methods.
References
[1] Yijing Xie, Yichen Zhang, Wei-Jen Lee, Zongli Lin, and Yacov A Shamash. Virtual power plants for grid resilience: A concise overview of research and applications. IEEE/CAA Journal of Automatica Sinica, 11(2):329–343, 2024.
[2] Haitao Zhao, Kaiqi Ding, Nurul I Sarkar, Jibo Wei, and Jun Xiong. A simple distributed channel allocation algorithm for D2D communication pairs. IEEE Transactions on Vehicular Technology, 67(11):10960–10969, 2018.
[3] Bushra Jamil, Humaira Ijaz, Mohammad Shojafar, Kashif Munir, and Rajkumar Buyya. Resource allocation and task scheduling in fog computing and internet of everything environments: A taxonomy, review, and future directions. ACM Computing Surveys (CSUR), 54(11s):1–38, 2022.
[4] John Hetzer, C Yu David, and Kalu Bhattarai. An economic dispatch model incorporating wind power. IEEE Transactions on Energy Conversion, 23(2):603–611, 2008.
[5] Mudathir Funsho Akorede, Hashim Hizam, and Edris Pouresmaeil. Distributed energy resources and benefits to the environment. Renewable and Sustainable Energy Reviews, 14(2):724–734, 2010.
[6] Abir Muhtadi, Dilip Pandit, Nga Nguyen, and Joydeep Mitra. Distributed energy resources based microgrid: Review of architecture, control, and reliability. IEEE Transactions on Industry Applications, 57(3):2223–2235, 2021.
[7] Rui Wang, Qiqiang Li, Bingying Zhang, and Luhao Wang. Distributed consensus based algorithm for economic dispatch in a microgrid. IEEE Transactions on Smart Grid, 10(4):3630–3640, 2019.
[8] Xiao-Kang Liu, Jiaqi Yan, Lantao Xing, and Changyun Wen. Constrained consensus-based iterative algorithm for economic dispatch in power systems. In The 46th Annual Conference of the IEEE Industrial Electronics Society, pages 3537–3542. IEEE, 2020.
[9] Wei Chen and Guo-Ping Liu. Privacy-preserving consensusbased distributed economic dispatch of smart grids via state decomposition. IEEE/CAA Journal of Automatica Sinica, 11(5):1250–1261, 2024.
10

[10] Lianghao Ji, Yuhe Dou, Cuijuan Zhang, and Huaqing Li. Selftriggered consensus-based strategy for economic dispatch in uncertain communication networks. IEEE Transactions on Network Science and Engineering, 2024.
[11] Tsung-Hui Chang, Mingyi Hong, and Xiangfeng Wang. Multi-agent distributed optimization via inexact consensus ADMM. IEEE Transactions on Signal Processing, 63(2):482497, 2014.
[12] Gang Chen and Qing Yang. An ADMM-based distributed algorithm for economic dispatch in islanded microgrids. IEEE Transactions on Industrial Informatics, 14(9):3892–3903, 2017.
[13] Lei Sun, Derui Ding, Hongli Dong, and Xiaojian Yi. Distributed economic dispatch of microgrids based on admm algorithms with encryption-decryption rules. IEEE Transactions on Automation Science and Engineering, 2024.
[14] Yanxu Su, Qingling Wang, and Changyin Sun. Distributed primal-dual method for convex optimization with coupled constraints. IEEE Transactions on Signal Processing, 70:523–535, 2022.
[15] Alessandro Falsone and Maria Prandini. Augmented lagrangian tracking for distributed optimization with equality and inequality coupling constraints. Automatica, 157:111269, 2023.
[16] Angelia Nedi ́c, Alex Olshevsky, and Wei Shi. Improved convergence rates for distributed resource allocation. In Proceedings of the IEEE Conference on Decision and Control (CDC), pages 172–177, 2018.
[17] Jinming Xu, Shanying Zhu, Yeng Chai Soh, and Lihua Xie. A dual splitting approach for distributed resource allocation with regularization. IEEE Transactions on Control of Network Systems, 6(1):403–414, 2019.
[18] Jiaqi Zhang, Keyou You, and Kai Cai. Distributed dual gradient tracking for resource allocation in unbalanced networks. IEEE Transactions on Signal Processing, 68:21862198, 2020.
[19] Wenwen Wu, Shanying Zhu, Shuai Liu, and Xinping Guan. Distributed mismatch tracking algorithm for constraintcoupled resource allocation: Optimality and differential privacy. IEEE Transactions on Automatic Control, 2025.
[20] Huaqing Li, Zheng Wang, Guo Chen, and Zhao Yang Dong. Distributed robust algorithm for economic dispatch in smart grids over general unbalanced directed networks. IEEE Transactions on Industrial Informatics, 16(7):4322–4332, 2020.
[21] Xing He, You Zhao, and Tingwen Huang. Optimizing the dynamic economic dispatch problem by the distributed consensus-based admm approach. IEEE Transactions on Industrial Informatics, 16(5):3210–3221, 2019.
[22] Shanying Zhu, Tao Ding, Cailian Chen, Mo-Yuen Chow, and Xinping Guan. Deed-admm: A scalable distributed algorithm for economic dispatch in multi-energy systems with energy storage. IEEE Transactions on Automation Science and Engineering, 2025.
[23] Tao Yang, Jie Lu, Di Wu, Junfeng Wu, Guodong Shi, Ziyang Meng, and Karl Henrik Johansson. A distributed algorithm for economic dispatch over time-varying directed networks with delays. IEEE Transactions on Industrial Electronics, 64(6):5095–5106, 2016.
[24] Xiasheng Shi, Changyin Sun, and Chaoxu Mu. Distributed economic dispatch algorithm with quantized communication mechanism. IEEE Transactions on Automation Science and Engineering, 2024.
[25] Chenyang Qiu, Shanying Zhu, Zichong Ou, and Jie Lu. A stochastic second-order proximal method for distributed optimization. IEEE Control Systems Letters, 7:1405–1410, 2023.
[26] Stephen Boyd, Neal Parikh, Eric Chu, Borja Peleato, Jonathan Eckstein, et al. Distributed optimization and statistical learning via the alternating direction method of multipliers. Foundations and Trends® in Machine Learning, 3(1):1–122, 2011.
[27] Stephen Boyd and Lieven Vandenberghe. Convex Optimization. Cambridge University Press, 2004.
[28] P Venkatesh, R Gnanadass, and Narayana Prasad Padhy. Comparison and application of evolutionary programming techniques to combined economic emission dispatch with line flow constraints. IEEE Transactions on Power Systems, 18(2):688–697, 2003.
[29] Johan L ̈ofberg. Yalmip: A toolbox for modeling and optimization in matlab. In In Proceedings of the CACSD Conference, Taipei, Taiwan, 2004.
11

---

## Processing Information

- **Processing Library:** Zotero PDFWorker
- **Processing Date:** 2026-02-10T18:16:25.522Z
- **Text Length:** 42066 characters
- **Success:** Text extraction completed
- **PDF Library Used:** Zotero PDFWorker
- **Pages Processed:** 11 of 11
