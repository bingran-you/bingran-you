# PDF Document: Ji - 2025 - Lower Complexity Bounds for Nonconvex-Strongly-Convex Bilevel Optimization with First-Order Oracles.pdf

**File Path:** Ji - 2025 - Lower Complexity Bounds for Nonconvex-Strongly-Convex Bilevel Optimization with First-Order Oracles.pdf

**Processed Date:** 2026-02-10T18:18:58.129Z

**File Size:** 490.61 KB

**Total Pages:** 24

**Extracted Pages:** 24

**PDF Library:** Zotero PDFWorker

**Attachment Item ID:** 3388

**Title:** Lower Complexity Bounds for Nonconvex-Strongly-Convex Bilevel Optimization with First-Order Oracles

**Collection:** Large Files > Random Papers

---

## Extracted Text Content

Lower Complexity Bounds for Nonconvex-Strongly-Convex Bilevel
Optimization with First-Order Oracles
Kaiyi Ji
Department of Computer Science and Engineering
University at Buffalo
kaiyiji@buffalo.edu
November 27, 2025
Abstract
Although upper bound guarantees for bilevel optimization have been widely studied, progress on lower bounds has been limited due to the complexity of the bilevel structure. In this work, we focus on the smooth nonconvex-strongly-convex setting and develop new hard instances that yield nontrivial lower bounds under deterministic and stochastic first-order oracle models. In the deterministic case, we prove that any first-order zero-respecting algorithm requires at least Ω(κ3/2ε−2) oracle calls to fi-
nd an ε-accurate stationary point, improving the optimal lower bounds known for single-level nonconvex optimization and for nonconvex-strongly-convex min-max problems. In the stochastic case, we show that at least Ω(κ5/2ε−4) stochastic oracle calls are necessary, again strengthening the best known bounds in related settings. Our results expose substantial gaps between current upper and lower bounds for bilevel optimization and suggest that even simplified regimes, such as those with quadratic lowe-
r-level objectives, warrant further investigation toward understanding the optimal complexity of bilevel optimization under standard first-order oracles.
1 Introduction
In this paper, we are interested in solving the following bilevel optimization problem:
min
x∈X H(x) := f (x; y∗(x))
s.t. y∗(x) = arg min
y∈Y
g(x; y), (1)
where X ⊂ Rm and Y ⊂ Rn are nonempty closed convex sets. In this paper, we study the smooth nonconvex-strongly-convex bilevel optimization setting, where the lower-level function g is smooth and strongly convex in y, while the upper-level function f is smooth and potentially nonconvex. This formulation captures a variety of modern applications, including meta-learning (Rajeswaran et al., 2019), reinforcement learning (Konda & Tsitsiklis, 2000; Hong et al., 2023), robotics (Wang et al., 2024), as w-
ell as communication networks and federated learning (Ji & Ying, 2022; Tarzanagh et al., 2022; Huang et al., 2023).
1
arXiv:2511.19656v2 [cs.LG] 26 Nov 2025

Recent years have witnessed substantial progress in understanding the convergence and complexity of bilevel optimization. A broad class of works (Ji et al., 2021; Hong et al., 2023; Chen et al., 2022; Dagr ́eou et al., 2022) analyzes nonconvex-strongly-convex bilevel problems under access to second-order information such as Hessian- and Jacobian-vector products. More recently, there has been growing interest in developing and analyzing fully first-order bilevel algorithms that avoid any second-or-
der computations (Shen & Chen, 2023; Chen et al., 2025; Lu & Mei, 2024; Kwon et al., 2023; Liu et al., 2020). Although upper-bound analyses for bilevel optimization have been extensively studied, progress on establishing tight lower bounds has been significantly slower, largely due to the complexity of the general bilevel formulation. Deriving meaningful lower bounds that reflect the dependence on condition numbers and the target accuracy ε requires carefully constructed hard instances; otherwise,-
 one risks obtaining vacuous bounds no stronger than the classical single-level lower bounds. Ji & Liang (2022) establish lower bounds for strongly-convex-strongly-convex and convex-strongly-convex bilevel problems under second-order oracle access, where the hyper-objective H(x) is assumed to be convex or strongly convex. Their results show
a gap of a factor √κ compared with those for min-max optimization with analogous assumptions, where κ denotes the condition number of the lower-level function. However, their analysis is restricted to the deterministic setting, and the convexity assumptions on the hyper-objective may be restrictive for general bilevel problems. More recently, Kwon et al. (2024) provide lower bounds for nonconvex-strongly-convex bilevel optimization under a so-called y∗-aware stochastic first-order oracle, where th-
e oracle returns an estimate yˆ that is ε-close to the exact lower level solution y∗, reducing the analysis to one that resembles single-level optimization. Yet, lower bounds for standard (stochastic) first-order oracles applied directly to the upper- and lower-level functions f and g remain open. In this paper, we take a further step toward reducing this gap by developing nontrivial lower bounds for smooth nonconvex–strongly-convex bilevel optimization under standard first-order oracle models. Ou-
r main contributions are summarized below.
• Deterministic setting. We construct a hard instance on which no first-order zero-respecting algorithm can find an ε-stationary solution using fewer than Ω(κ3/2ε−2) first-order oracle calls for smooth nonconvex-strongly-convex bilevel problems. In comparison, the optimal lower bounds for related settings are Ω(ε−2) for general smooth nonconvex single-level optimization (Carmon et al., 2020) and
Ω(√κε−2) for smooth nonconvex-strongly-convex min–max optimization (Li et al., 2021). Our result improves these bounds by factors of κ3/2 and κ, respectively.
On the upper-bound side, Chen et al. (2025) propose a first-order penalty method achieving a convergence rate of order κ4ε−2, which can be reduced to κ3.5ε−2 through a naive application of Nesterov acceleration. However, even when compared with our lower bound, there remains a gap of order κ2, indicating substantial room for future improvements.
• Stochastic setting. We further construct an instance showing that no first-order zero-respecting algorithm can achieve an ε-stationary solution with fewer than Ω(κ5/2ε−4) stochastic oracle calls under bounded variance assumptions. For comparison, the lower bound for standard smooth nonconvex single-level stochastic optimization is Ω(ε−4) (Arjevani et al., 2023), and for smooth nonconvexstrongly-convex min–max optimization it is Ω(κ1/3ε−2) (Li et al., 2021). Our result improves upon these by fact-
ors of κ5/2 and κ13/6, respectively. Compared with the Ω(ε−6) upper bound established by Kwon et al. (2024), a notable gap still remains.
• Implications. Our constructions demonstrate that nontrivial lower bounds for nonconvex-stronglyconvex bilevel optimization are indeed possible and are significantly stronger than the known results
2

for single-level and min–max problems. Nevertheless, substantial gaps persist between current upper and lower bounds, even in this restricted setting. Motivated by our findings, we suggest that closing these gaps may require first studying the simpler yet meaningful case in which the lower-level function is quadratic. Our lower bounds continue to apply in that regime, but obtaining tighter upper bounds in this setting remains largely unexplored and not yet well understood. We hope that the result-
s presented in this paper offer valuable insights for future progress in this direction.
2 Related Works
Bilevel optimization algorithms. Bilevel optimization has a long history dating back to the seminal work of Bracken & McGill (1973). Early studies (Hansen et al., 1992; Shi et al., 2005) approached bilevel programs from a constrained optimization perspective, motivating the development of KKT-based reformulations and related techniques. More recently, gradient-based bilevel optimization has attracted significant attention due to its efficiency and scalability in modern machine learning application-
s. A major class of gradient-based approaches is the family of Approximate Implicit Differentiation (AID) methods (Domke, 2012; Liao et al., 2018; Ji et al., 2021; Dagre ́ou et al., 2022; Yang et al., 2024), which compute the hypergradient via implicit differentiation and approximate the resulting linear system using iterative solvers. In contrast, Iterative Differentiation (ITD) methods (Maclaurin et al., 2015; Franceschi et al., 2017) estimate hypergradients by unrolling the lower-level optimiza-
tion and applying automatic differentiation in either forward or reverse mode. Building upon these ideas, a number of stochastic bilevel algorithms have been developed using Neumann-series approximation (Chen et al., 2022; Ji et al., 2021), recursive momentum techniques (Yang et al., 2021; Guo & Yang, 2021), and variance-reduction mechanisms (Yang et al., 2021). All such methods rely on second-order information, commonly in the form of Hessian–vector or Jacobian–vector products. A comprehensive ov-
erview is provided in the survey (Liu et al., 2021a). Recently, growing interest has shifted slightly toward designing first-order bilevel optimization methods that use only (stochastic) first-order oracles, thereby avoiding explicit second-order computations. Representative examples include penalty-based methods (Shen & Chen, 2023; Lu & Mei, 2024; Kwon et al., 2023; Jiang et al., 2025; Chen et al., 2025), primal–dual frameworks (Sow et al., 2022), finite-difference Hessian–vector approximation te-
chniques (Yang et al., 2023), value-function-based approaches (Liu et al., 2020, 2021c,b), barrier-based formulations (Liu et al., 2022), and min–max optimization based methods (Lu & Mei, 2025; Wang et al., 2023). These works collectively highlight the potential of first-order bilevel algorithms to achieve competitive performance while significantly reducing computational overhead.
Upper bound analysis. A large body of work, including Ji et al. (2021); Hong et al. (2023); Chen et al. (2022), studies AID- and ITD-type algorithms for nonconvex–strongly-convex bilevel optimization. Another line of research considers cases where the lower-level objective is not strongly convex; for example, Arbel & Mairal (2022); Liu et al. (2021c) analyze settings in which the lower-level solution is characterized through a selection map (e.g., the output of a particular algorithm). For bilevel-
 algorithms that rely solely on (stochastic) first-order oracles, Kwon et al. (2023); Chen et al. (2025) establish convergence guarantees for nonconvexstrongly-convex formulations. In addition, Shen & Chen (2023); Chen et al. (2024) study algorithms under weaker structural assumptions on the lower-level problem, extending beyond strong convexity.
Lower bound analysis. Foundational lower bounds for first-order optimization were established by Nemirovski and Nesterov and are presented in their textbooks (Nemirovsky, 1992; Nesterov et al., 2018).
3

A central concept in this theory is the notion of zero-chains, which ensure that any zero-respecting firstorder method can activate coordinates only sequentially. Recent works have significantly advanced these constructions in the context of smooth nonconvex optimization (Fang et al., 2018; Carmon et al., 2020, 2021; Arjevani et al., 2023). Building upon these developments, Li et al. (2021) establish lower bounds for nonconvex–strongly-convex min–max optimization. Our work builds based on these r-
esults. Lower bounds for bilevel optimization are relatively underexplored. Ji & Liang (2022) derive bounds for convex and strongly-convex bilevel problems using second-order oracles. More recently, Kwon et al. (2024) establish lower bounds for nonconvex-strongly-convex bilevel problems under a y∗-aware stochastic oracle. In contrast, we provide lower bounds for nonconvex-strongly-convex bilevel optimization using only standard (stochastic) first-order oracles.
3 Preliminaries
Notations. We use bold lower-case letters to denote vectors and regular lower-case letters to denote scalars. For a vector x ∈ Rd, we use xt to denote its value at the tth iteration, and xi to denote its ith coordinate and
define its support as supp(x) := { i | xi ̸= 0 }. We use ∥x∥2 =
q
Pd
i=1 x2
i and ∥x∥∞ = max1≤i≤d |xi| to
denote the l2 and l∞ norms, respectively. For a matrix M ∈ Rm×n, we use Mi,j to denote its (i, j)th entry. We use ∥M ∥∞ = max1≤i≤m
Pn
j=1 |Mi,j| for the matrix infinity norm and ∥M ∥2 for its spectral norm. For a square matrix M , we let diagm(M ) denote the block diagonal matrix with m identical copies of M on the diagonal. We use standard asymptotic notation O(·), Ω(·), and Θ(·).
3.1 Function Class
In this paper, we focus on the class of smooth nonconvex-strongly-convex bilevel problems that satisfy the standard assumptions used in first order bilevel optimization.
Definition 1. Given Lf , Lg ≥ μ > 0, C ≥ 0 and ∆ > 0, define F (Lf , Lg, μ, ∆) to be the set of function pairs {f, g} such that f : X × Y → R and g : X × Y → R for some nonempty closed convex sets X ⊂ Rm and Y ⊂ Rn for all m, n ∈ N, which satisfy the following assumptions:
1. Functions f, g are continuously differentiable and Lf and Lg-smooth respectively, jointly in (x, y) over X × Y.
2. For every (x, y) ∈ X × Y, there exists a numerical constant C ≥ 0 such that ∥∇yf (x, y)∥2 ≤ C.
3. For every x ∈ X , g(x, ·) is μ-strongly-convex in y, that is, for any y1, y2 ∈ Y,
g(x; y1) ≥ g(x; y2) + ⟨∇yg(x; y2), y1 − y2⟩ + μ
2 ∥y1 − y2∥2
2. (2)
4. There exists a numerical constant ρ ≥ 0 such that the second-order derivatives ∇2x,yg and ∇2y,yg are well-defined and ρ-Lipschitz jointly in (x, y) for all (x, y) ∈ X × Y.
5. H(0) − minx∈X H(x) ≤ ∆, where H(x) := f (x; y∗(x)) is the hyper-objective function.
The constants Lg, Lf , C, and ρ are all independent of the strong convexity parameter μ and the target accuracy ε. Note that for items 2 and 4, we only require the existence of numerical constants C, ρ = O(1).
4

3.2 Algorithm Class
We focus on algorithms that solve bilevel optimization problems using (stochastic) first order oracles. For clarity of presentation, we first define the (stochastic) first-order oracles considered in this work.
Definition 2 (Deterministic first-order oracle). The deterministic first-order oracle of a differentiable function f : X → R is a mapping O : x 7→ (f (x), ∇f (x)) for x ∈ X .
Definition 3 (Stochastic first-order oracle). The stochastic first-order oracle of a differentiable function f : X → R is a mapping O : x 7→ (f (x), Gf (x; ξ)) for x ∈ X , where ξ is a random variable satisfying Eξ [Gf (x; ξ)] = ∇f (x) and Eξ∥Gf (x; ξ) − ∇f (x)∥22 ≤ σ2
f.
Note that the algorithms rely on first-order oracles for both the upper- and lower-level objectives f and g. In the stochastic setting, we assume for simplicity that the variances of the stochastic first-order oracles are identical, i.e., σf = σg = σ. We further focus on first-order bilevel algorithms that satisfy the following zero-respecting property:
Definition 4 (First-order bilevel algorithm class.). For upper- and lower-level objective functions f : X ×Y → R and g : X × Y → R and their associated first-order oracles Of : (x, y) 7→ (f (x; y), ∇f (x; y)) and Og : (x, y) 7→ (f (x; y), ∇g(x; y)), the (t + 1)-th iterate (xt+1, yt+1) satisfies:
xt+1 ∈ PX (u) : supp(u) ⊂
[
0≤i≤t
(supp(xi) ∪ supp(∇xf (xi; yi)) ∪ supp(∇xg(xi; yi)) ;
yt+1 ∈ PY (v) : supp(v) ⊂
[
0≤i≤t
(supp(yi) ∪ supp(∇yf (xi; yi)) ∪ supp(∇yg(xi; yi)) . (3)
A similar definition applies in the stochastic setting, where the gradients ∇f and ∇g are replaced by their corresponding stochastic first-order oracles.
Note that the subspaces defined in Equation (3) permit both simultaneous and alternating updates of x and y, thereby including single-loop and double-loop bilevel optimization algorithms. Consequently, the algorithm class introduced in Definition 4 covers all existing first-order bilevel optimization methods, including but not limited to penalty-based approaches (Shen & Chen, 2023; Lu & Mei, 2024), primal–dual methods (Sow et al., 2022), finite-difference Hessian–vector–approximation methods (Yang-
 et al., 2023), value-function-based approaches (Liu et al., 2020, 2021c,b), and barrier-based methods (Liu et al., 2022).
4 Lower Bounds in Deterministic Setting
4.1 Useful Techniques for Lower-Bound Construction
In this paper, we focus on the bilevel optimization setting where the lower-level function g(x; y) is strongly convex in y, while the upper-level function f (x; y) is smooth and possibly nonconvex. For this reason, our constructions draw on key techniques and components from the worst-case instances of Nesterov et al. (2018) for smooth strongly convex functions and Carmon et al. (2020) for smooth nonconvex functions. Their core idea is to make sure their instances satisfy the following notion of z-
ero-chain property:
5

Definition 5 (Zero-chain). A function f : X ⊂ Rd → R is a (first-order) zero-chain if for every 1 ≤ i ≤ d,
supp(x) := {i : xi ̸= 0} ⊂ {1, . . . , i − 1} =⇒ supp(∇f (x)) ⊂ {1, . . . , i}.
Consider running a first-order algorithm on a zero-chain function, starting from the initialization x = 0, and assume access to a deterministic first-order oracle. By the zero-chain property, each iteration can introduce at most one new nonzero coordinate of x—that is, each iteration “activates” at most one additional coordinate. Consequently, after t iterations we must have supp(xt) ⊂ {1, . . . , t}. Therefore, if a good solution requires that at least T coordinates be discovered, then any determ-
inistic first-order method must take at least T iterations, which yields a lower bound of order T on the algorithm’s complexity. Following this strategy, Nesterov et al. (2018) and Carmon et al. (2020) provide the following key components for their constructions in strongly-convex and nonconvex settings, respectively:
• Tri-diagonal matrix A. Following Nesterov et al. (2018); Li et al. (2021), we use the following tri-diagonal 1-D discrete Laplacian matrix A ∈ Rn×n to construct the strongly-convex lower-level instance:
A :=

     
1 −1
−1 2 −1
... ... ...
−1 2 −1 −1 1

     
,
where it is verified that A is positive semidefinite and ∥A∥2 ≤ 4. Due to its tri-diagonal nature, it is easily verified that if supp(x) ⊂ 1, ..., i − 1, then Ax ⊂ {1, ..., i}. In other words, if a vector has nonzero entries only at its first i − 1 coordinates, then multiplying it by A can activate at most one additional coordinate, namely the i-th one.
• Ψ(·) and Φ(·) hardness functions. Following the construction in Carmon et al. (2020), we employ the component functions Ψ(x) : R → R and Φ(x) : R → R defined below.
Ψ(x) :=



0, x ≤ 1
2,
exp 1 − 1
(2x−1)2 , x > 1
2,
and Φ(x) := √e
Zx
−∞
e− 1
2 t2 dt, (4)
which possess the following key properties that will be used in our analysis.
Lemma 1 (Carmon et al. (2020), Lemma 1). The functions Φ and Ψ satisfy
1. For all x ≤ 1
2 and k ∈ N, we have Ψ(k)(x) = 0, where Ψ(k) denotes the kth-order derivative.
2. For all x ≥ 1 and |y| < 1, we have Ψ(x) Φ′(y) > 1.
3. Both Ψ and Φ are infinitely differentiable. For all k ∈ N, we have
sup
x
Ψ(k)(x) ≤ exp 5k
2 log(4k) and sup
x
Φ(k)(x) ≤ exp 3k
2 log 3k
2.
4. The functions and derivatives Ψ, Ψ′, Φ, Φ′ are nonnegative and bounded, with
0 < Ψ < e, 0 < Ψ′ <
q
54
e , 0 < Φ < √2πe, 0 < Φ′ < √e.
6

Figure 1: An illustration of the zero-chain for our constructed instance in eq. (6) for nonconvex-stronglyconvex bilevel optimization.
Carmon et al. (2020) use a construction of f (x) = P
i Ψ(−xi−1)Φ(−xi) − Ψ(xi−1)Φ(xi) , which
together with Ψ′(0) = Ψ(0) = 0, ensures the zero-chain property that if x ⊂ {1, ..., i − 1}, then ∇f (x) ⊂ {1, ..., i}. Furthermore, as we will show later, the boundedness of Ψ, Ψ′, Φ, and Φ′ is crucial for constructing a valid worst-case instance within the bilevel class F(Lf , Lg, μ, C, ∆).
4.2 Main Result: A Lower Bound on First-Order Oracle Complexity
The following theorem establishes a complexity lower bound for deterministic first-order bilevel algorithms.
Theorem 1. For any Lf , Lg, μ, ∆, ε > 0 satisfying κ = Lg/μ ≥ 1 and ∆
Lf = O(1), there exist functions
f : Rm × Rn → R and g : Rm × Rn → R such that {f, g} ∈ F (Lf , Lg, μ, ∆) for some m, n ∈ N with their deterministic first-order oracles. For any first-order bilevel algorithm of the form in Definition 4, in order to find an ε-accurate stationary point x such that ∥∇H(x)∥2 < ε, the algorithm must use at least
C0∆Lf κ3/2
ε2 (5)
oracle calls, where H(x) = f (x; y∗(x)) with y∗(x) = arg miny g(x; y) is the hyper-objective, and C0 is a numerical constant.
Carmon et al. (2020) establishes a lower bound of Ω(1/ε2) for smooth nonconvex optimization, and
Li et al. (2021) proves a lower bound of Ω(√κ/ε2) for smooth nonconvex-strongly-concave min-max optimization. Both results can be viewed as special cases of smooth nonconvex-strongly-convex bilevel optimization, for which we obtain in Theorem 1 a much larger lower bound of Ω(κ3/2/ε2). This demonstrates that bilevel optimization is provably more challenging than min-max optimization. This observation is consistent with the fundamental hardness comparison for smooth strongly-convex–strongly-convex b-
ilevel problems established in Ji & Liang (2022).
4.3 Analysis and Proof Outline for Deterministic Lower Bound
We consider the following worst-case instance. For notational simplicity, define x0 ≡ λ
ClMn,n .
f (x; ye) =
T
X
i=1
λ2Lf
L Ψ − Cl
λ y(i−1)
n Φ − Cr
λ y(i)
1 − Ψ Cl
λ y(i−1)
n Φ Cr
λ y(i)
1
7

g(x; ye) =
T
X
i=0
h Lgn2
2(4n2 + 1) (y(i))⊤ 1
n2 In + A y(i) − Lg(b(i)
x )⊤y(i)i
, (6)
where x = [x1, ..., xT ] ∈ RT is the upper-level variable, ye = [y(0), y(1), ...., y(T )] with each y(i) ∈ Rn is
the lower-level variable, y(i)
j returns the jth coordinate of y(i), and the dimension n =
q Lg−μ
4μ , and the
design of b(i)
x is most critical, which is given by
b(i)
x = [0, 0, ...., xi] = xien, (7)
where ei denotes the ith standard basis vector, whose sole nonzero entry equals 1. For simple presentation, the numerical constants Cl, Cr, L and the parameter λ will be specified at a later stage.
Validation of our constructed instance. We first verify that our constructed instance belongs to the function class F (Lf , Lg, μ, ∆).
1. First, we need to verify g(x; ·) is μ-strongly convex. Since the matrix A is positive semidefinite, it
can be verified that ∇2g(x; ·) = Lgn2
4n2+1 diagT +1(A + 1
n2 ). Let M := diagT +1{A}. For any vector
z ∈ Rn(T +1), write it as a block vector z = [z1, z2, ..., zm], zi ∈ Rn, we have z⊤M z = Pm
i=1 z⊤
i Azi.
Since A is positive semidefinite, each term z⊤
i Azi ≥ 0, so the sum is nonnegative. Hence z⊤M z ≥ 0
for all z, and therefore M is positive semidefinite. This further implies that ∥∇2g(x; ·)∥2 ≥ Lg
4n2+1 .
Given that n =
q Lg−μ
4μ ≤
q Lg−μ
4μ , we have Lg
4n2+1 ≥ μ. This validates that g(x; ye) is μ-strongly
convex in ye.
2. Next, we validate the smoothness of f and g functions:
• For the lower-level function g(x; ye), it follows from eq. (6) that ∥∇2
yeg(x; ye)∥2 ≤ Lgn2
4n2+1 ( 1
n2 +
4) = Lg, ∥∇2
x,yeg(x; ye)∥2 = Lg, ∇2xg(x; ye) = 0 for any x, ye, and hence g(x; ye) is Lg-smooth.
• For the upper-level function f (x; ye), note that ∇2
yef (x; ye) = Lf
L M , where M ∈ Rn(T +1)×n(T +1)
is a tri-diagonal matrix, where the absolute value of each nonzero element is bounded by some numerical constant, due to the fact that Cr and Cl are numerical constants, and that the functions Φ and Ψ, together with their derivatives, are bounded by numerical constants, as shown in item 3 of Lemma 1. Then, we have ∥M ∥2 ≤ CM for some numerical constant CM > 0. Thus, choosing L = CM yields ∥∇2
yef (x; ye)∥2 ≤ Lf . Since f (x; ye) depends only on ye, it is thus Lf -smooth.
3. Next, we need to show that the gradient norm ∥∇yef (x; ye)∥2 is bounded by a numerical constant that is independent of both T and n. This step is particularly challenging. For example, the previous lower bound in Ji & Liang (2022) circumvents this requirement by exploiting the strong convexity of the hyper-objective to guarantee gradient boundedness during the optimization process. However, that strategy applies only to the strongly-convex–strongly-convex setting and may not extend well to nonc-
onvex or stochastic regimes. Moreover, another lower bound in Kwon et al. (2024) sets the upper-level function as a scalar y, which ensures that the gradient norm remains bounded by a constant.
For our construction in eq. (6), it can be obtained that ∥∇yef (x; ye)∥2 = λLf
L v, where v ∈ Rn(T +1) has at most 2(T + 1) nonzero entries at coordinates kn + 1 for k = 0, . . . , T and jn for j = 1, . . . , T + 1. Moreover, the absolute value of each nonzero entry is bounded by a positive numerical constant,
8

owing to the fact that Cr and Cl are numerical constants and that Ψ, Ψ′, Φ, and Φ′ are all bounded (Lemma 1, item 3). Therefore, we have ∥v∥ ≤ C0
√T for some numerical constant C0. Thus, we
have ∥∇yef (x; ye)∥2 ≤ C0Lf
L λ√T . As will be seen later, T is chosen such that λ√T ≤
q ∆L
12Lf , which,
together with ∆
Lf = O(1), implies that ∥∇yef (x; ye)∥2 = O(1).
Zero-chain properties and iterate subspaces. We initialize x and ye to be 0. Then, based on the tri-diagonal structure of A and the properties of Ψ function in Lemma 1 (item 1), it can be quickly verified from our construction in eq. (6) that
• At the first iteration, y(0)
n becomes activated, because x0 ̸= 0 and ∂g/∂y(0)
n = −Lgx0. Thus, at the
second iteration, y(1)
1 becomes activated due to the zero-chain property of the f (x; ye) function.
• Suppose the iterates have begun updating y(i) but have not yet reached y(i)
n (i.e., y(i)
n = 0) for some i ≥ 1. This implies that y(j)
n = 0 for all j ≥ i. Then, based on item 1 of Lemma 1, it can be verified that for all j ≥ i,
∂f (x; ye)
∂y(j+1)
1
= − CrλLf
L Ψ − Cl
λ y(j)
n Φ′ − Cr
λ y(j+1)
1 − CrλLf
L Ψ Cl
λ y(j)
n Φ′ Cr
λ y(j+1)
1 = 0,
which, together with the structure of the lower-level function and the condition xj = 0 for all j ≥ i, implies that y(j) = 0 for all j ≥ i + 1. This property is crucial because it preserves the zero-chain structure along the sequence {y(i)}T
i=1 and ensures that advancing from one adjacent y-iterate to the next necessarily requires at least n iterations.
• Suppose the iterates have begun updating y(i) but have not yet reached y(i)
n (i.e., y(i)
n = 0) for some i ≥ 1. Then, for all j ≥ i, the gradient of g(x; ye) with respect to xj is given by −y(j)
n . As a
consequence, the coordinate xj will not be activated until y(j)
n becomes activated.
Based on the above analysis, it can be derived that at any iteration Kn + k with K = 0, ..., T − 1 and k = 1, ..., n,
supp(y(i)) ⊆ {1, ..., n}, i ≤ K and i ̸= 0
supp(y(K+1)) ⊂ {1, ..., k}
supp(y(i)) = ∅, i > K + 1
supp(x) ⊂ {0, ..., K}. (8)
Accordingly, to activate all coordinates of x, one must perform at least T n iterations in total.
The overall hyper-objective function and its key properties. First, it can be verified that the lower-level solutions are given by:
(y(i))∗ = 4n2 + 1
n2
1
n2 In + A
−1
| {z }
M
b(i)
x.
9

The hyper-objective function H(x) := f (x; ye∗) is then given by
H(x) =
T
X
i=1
λ2Lf
L Ψ − Cl
λ Mn,nxi−1 Φ − Cr
λ M1,nxi − Ψ Cl
λ Mn,nxi−1 Φ Cr
λ M1,nxi .
Note that the above definition of H(x) involves the quantities Mn,n and M1,n, whose behaviors are characterized in the following lemma.
Lemma 2. Let A ∈ Rn×n be the tri-diagonal matrix
A=

     
1 −1
−1 2 −1
... ... ...
−1 2 −1 −1 1

     
, S := A + 1
n2 In
−1.
Then for every integer n ≥ 1,
c n ≤ S1,n, Sn,n ≤ C n, c := 1 − π2
12 , C := 1 + π2
12 . (9)
Based on Lemma 2 and 4 ≤ 4n2+1
n2 ≤ 5, it can be derived that 4cn ≤ M1,n, Mn,n ≤ 5Cn, where c and C are given by eq. (9). Thus, choose numerical constants Cl and Cr such that
ClMn,n
n = CrM1,n
n = Ce, (10)
where Ce = O(1) is a numerical constant. Then, we use the following lemma to provide a lower bound on the gradient norm when the algorithm has not yet reached the end of the chain.
Lemma 3. If |xi| < λ
Cen for some i ≤ T . Then, we have ∥∇H(x)∥2 ≥ λLf Cen
L.
The following lemma provides the bound on the optimality gap of the hyper-objective function H(x):
Lemma 4. The hyper-objective function H(x) satisfies H(0) − infx H(x) ≤ 12λ2Lf T
L.
Based on all the above auxiliary lemmas, we begin to prove our main theorem.
Proof of Theorem 1. First note that if xT = 0, based on Lemma 3, we have that
∥∇H(x)∥2 ≥ λLf Cen
L.
Choosing λ = εL
Lf Cen guarantees ∥∇H(x)∥2 ≥ ε. Then, we need to verify that H(0) − infx H(x) ≤ ∆.
Based on Lemma 4, we havethat
H(0) − inxf H(x) ≤ 12λ2Lf T
L , (11)
10

which, by setting T =
j ∆L 12λ2Lf
k
, guarantees that H(0) − infx H(x) ≤ ∆.
Based on the subspace analysis in eq. (8), we have that xT = 0 if t < T n, and hence ∥∇H(xt)∥2 ≥ ε.
Recall that n =
q Lg−μ
4μ . Thus, to achieve an ε-accurate stationary solution, there are at least
T n = c0∆n3
ε2 = ∆Ln
12Lf
L2
f
Ce2n2
ε2L2 = C0∆Lf κ 3
2
ε2 (12)
oracle calls, where c0 is some numerical constant. Then, the proof is complete.
5 Lower Bounds in Stochastic Setting
In this section, we provide a lower bound for stochastic first-order oracles. We first introduce several important definitions and lemmas from Arjevani et al. (2023), which serve as the foundation for our constructions in the stochastic setting.
5.1 Auxiliary Definitions and Lemmas
Following Arjevani et al. (2023), to establish a lower bound in the stochastic setting, we adopt the notion of a probability-p zero-chain.
Definition 6 (Probability-p zero-chain). A function f : X → R with a stochastic first-order oracle O : x 7→ (f (x), Gf (x; ξ)) is a probability-p zero-chain if
supp(x) ⊂ {1, . . . , i − 1} =⇒
(
P supp(Gf (x; ξ)) ̸⊂ {1, . . . , i − 1} ≤ p,
P supp(Gf (x; ξ)) ⊂ {1, . . . , i} = 1.
The above definition implies that at each iteration, a new coordinate i becomes activated (i.e., the iterate acquires a nonzero entry at coordinate i) with probability p. The following lemma (which is an adapted version from Li et al. (2021)) provides a recipe for constructing a probability-p zero-chain based on a given zero-chain.
Lemma 5 ((Arjevani et al., 2023, Lemma 3)). Let f : X → R be a zero-chain on X ⊂ RT . For x ∈ X , let i∗(x) := inf{ i ∈ [T ] : xi = 0 } be the next coordinate to activate. For p ∈ (0, 1], define the stochastic gradient estimator Gf (x; ξ) coordinate-wisely by
[Gf (x, ξ)]i :=



ξ
p ∇if (x), if i = i∗(x),
∇if (x), otherwise,
where ξ ∼ Bernoulli(p). Suppose there exists G < ∞ such that ∥∇f (x)∥∞ ≤ G for all x ∈ X . Then, the oracle O : x 7→ (f (x), Gf (x, ξ)) is a stochastic first-order oracle with bounded variance σ2 ≤ G2(1 − p)/p. Moreover, f with oracle O is a probability-p zero-chain.
Lemma 5 allows us to build a probability-p zero-chain based on the zero-chain we establish in eq. (6) and Figure 1. However, as also noted by Li et al. (2021) for min-max optimization problems, one main challenge
11

lies in the unboundedness of the iterates x and ye, such that the gradient norm of the lower-level function ∥∇g(x; ye)∥∞ is unbounded. To address this challenge, Li et al. (2021) modify the quadratic components in their deterministic worst-case instance and introduce two bounded hypercubes as the domains for x and y:
Cm
Rx := {x ∈ Rm : ∥x∥∞ ≤ Rx}, Cn
Ry := {y ∈ Rn : ∥y∥∞ ≤ Ry}, (13)
where Rx and Ry are chosen so that the variance of the stochastic oracle is bounded by G. Interestingly, unlike Li et al. (2021), which must revise the quadratic components in their deterministic construction, we find that our deterministic instance in eq. (6) can be used directly, provided that the domain radius Rx and Ry are properly selected, as will be seen in our analysis later.
5.2 Main Result: A Lower Bound on Stochastic First-Order Oracle Complexity
The following theorem establishes a complexity lower bound for stochastic first-order bilevel algorithms.
Theorem 2. For any Lf , Lg, μ, ∆, ε > 0 satisfying κ = Lg/μ ≥ 1 and ∆
Lf = O(1), there exist functions
f : X × Y → R and g : X × Y → R such that {f, g} ∈ F (Lf , Lg, μ, ∆) for some X ⊂ Rm and Y ⊂ Rn, and stochastic first-order oracles O for both f and g such that for any first-order bilevel algorithm of the form in Definition 4, in order to find an ε-accurate stationary point x such that
E [Lh∥PX [x − (1/Lh)∇H(x)] − x∥2] < ε,
the algorithm must use at least
Ω L3
f ∆κ5/2σ2
Lg2ε4
!
stochastic oracle calls, where Lh is the smoothness parameter of the hyper-objective H(x).
In the stochastic setting, Arjevani et al. (2023) establishes a lower bound of Ω(1/ε4) for smooth nonconvex optimization, and Li et al. (2021) proves a lower bound of Ω(κ1/3/ε4) for smooth nonconvex-strongly-concave min-max optimization. For smooth nonconvex-strongly-convex bilevel optimization, we obtain in Theorem 2 a significantly larger lower bound of Ω(κ5/2/ε4). To the best of our knowledge, this is the first lower-bound result for stochastic bilevel optimization, and it shows that this setti-
ng is strictly more challenging than both smooth nonconvex optimization and smooth nonconvex-strongly-concave min-max optimization. We note that Kwon et al. (2024) establish a lower bound of Ω(ε−6) for bilevel optimization under a so-called y∗-aware stochastic first order oracle with bounded variance. Their hard instance is constructed as
f (x; y) = y, g(x; y) = (y − F (x))2,
where x ∈ Rε−2 , y ∈ R and F (x) = ε2 Pε−2
i=1 Ψ(−xi−1)Φ(−xi) − Ψ(xi−1)Φ(xi) . It can be verified that |F (x)| = O(1), and therefore
∥∇2
x,yg(x; y)∥2 = O(∥F (x)∥2) = O ε2√
ε−2 = O(ε).
In addition, their y∗-aware oracle requires ∥y −y∗∥ = O(ε), which forces |g(x; y)| to be of order O(ε). These conditions can also be satisfied in our construction by choosing Lg = O(ε), since ∥∇2
x,yeg(x; ye)∥2 = Lg and
both x and ye are bounded. Under this choice, our Theorem 2 also yields a lower bound of order Ω(ε−6). In contrast, a more standard and practically relevant setting assumes Lg, Lf = Θ(1), independent of ε or the condition number κ. Under this commonly studied regime, obtaining an Ω(ε−6) lower bound for bilevel optimization remains an open problem.
12

5.3 Analysis and Proof Outline for Stochastic Lower Bound
We use the following construction {fsc(x; ye), gsc(x; ye)} as the hard instance in the stochastic setting. For
any x ∈ CT
rxλ/n and ye ∈ Cn(T +1)
ryλ ,
fsc(x; ye) =
T
X
i=1
λ2Lf
L Ψ − Cl
λ y(i−1)
n Φ − Cr
λ y(i)
1 − Ψ Cl
λ y(i−1)
n Φ Cr
λ y(i)
1
gsc(x; ye) =
T
X
i=0
h Lgn2
2(4n2 + 1) (y(i))⊤ 1
n2 In + A y(i) − Lg(b(i)
x )⊤y(i)i
, (14)
where rx and ry are positive numerical constants from the hypercube sizes, chosen such that ry ≥ 10rx and rx > 1
Ce , where Ce > 0 is the numerical constant defined in eq. (10). The constants Cl, Cr, and L are the
same as in the deterministic setting. The parameter λ is selected to satisfy λ√T = O(1), and its exact form will be specified later. Recall that x0 = λ
Cen < rxλ
n ∈ C1
rxλ/n.
The following lemma shows that, with appropriately chosen rx and ry, the lower-level minimizer ye∗ lies within the selected bounded domain.
Lemma 6. If ry ≥ 10rx, the lower-level minimizer ye∗ of the instance in eq. (14) satisfies ye∗ ∈ Cn(T +1)
ryλ .
Building on Lemma 6, we establish the following lemma, which provides several properties of the instance in eq. (14) that will be used in the proof of the main theorem.
Lemma 7. Suppose ry ≥ 10rx, rx > 1
Ce , and λ√T = O(1). The functions fsc and gsc satisfy:
(a) fsc and gsc satisfy all items 1-4 in Definition 1.
(b) Hsc(0) − minx Hsc(x) ≤ 12λ2Lf T
L.
(c) Hsc(x) is Lh-smooth with Lh = c0n2Lf
L for some numerical constant c0.
(d) For any (x, ye) ∈ CT
rxλ/n, ×Cn(T +1)
ryλ , we have ∥∇yefsc(x; ye)∥∞ ≤ c1λLf
L , ∥∇yegsc(x; ye)∥∞ ≤ 2Lgryλ, and ∥∇xgsc(x; ye)∥∞ ≤ Lgryλ, where c1 is a numerical constant.
Similarly to Lemma 3, we then provide a lower bound of the hyper-gradient norm when the algorithm has not yet reached the end of the chain.
Lemma 8. Suppose rx > 1
Ce . If xi < λ
Cen for some i ≤ T , then, we have
Lh∥PX [x − (1/Lh)∇Hsc(x)] − x∥2 ≥ c2Lf nλ
L,
where c2 > 0 is a numerical constant.
Based on all the above auxiliary lemmas, we begin to prove our main theorem.
Proof of Theorem 2. Based on part (d) of Lemma 7, we now construct a probability-p zero-chain following the approach of Arjevani et al. (2023), with a slight modification. In Arjevani et al. (2023), the key idea is to perturb the gradient only at the next coordinate to be activated, so that this coordinate is revealed with probability p. For our zero-chain given in eq. (8), let i∗ ∈ n + 1, ..., (T + 1)n be the next coordinate to activate. Thus, we can define the stochastic gradient as follows.
13

• When i∗ mod n ̸= 1, perturb the gradients at the coordinate i = i∗ as ξ
p
∂gsc(x;ye) ∂
yei , where ξ ∼ Bernoulli(p). The gradients at all other coordinates remain unchanged and receive no perturbation.
• When i∗ mod n = 1, perturb the gradients at the coordinate i = i∗ as ξ
p
∂gsc(x;ye)
xj , where j = (i∗ − 1)/n
and ξ ∼ Bernoulli(p). The gradients at all other coordinates remain unchanged and receive no perturbation.
Note that in the above stochastic oracles, we do not perturb the gradients of f . It can be verified that the stochastic gradients defined above are unbiased. Using Lemma 5 together with part (d) of Lemma 7, we conclude that our construction in eq. (14), equipped with these stochastic oracles, forms a probability-p zero-chain, and the variance of the oracles is bounded by
c3L2
gλ2 1 − p
p,
where the bound follows from (d) of Lemma 7, and c3 is a positive numerical constant. Thus, to ensure the variance is bounded by σ2, it suffices to choose
p = min
(
1, c3
Lg2λ2
σ2
)
. (15)
Then, based on Lemma 9 and the stochastic oracles constructed above, we have that with probability 1 − δ, xT = 0 if
t ≤ (n − 1)T − 1 − log( 1
δ)
2p . (16)
Based on the choice of p in eq. (15), we have
(n − 1)T − 1 − log( 1
δ)
2p ≥ ((n − 1)T − 1 − log( 1
δ ))σ2
2c3Lg2λ2 ,
which, together with eq. (16), yields that with probability 1 − δ, xT = 0 for all
t ≤ ((n − 1)T − 1 − log( 1
δ ))σ2
2c3Lg2λ2 .
This, with Lemma 8, implies that with probability 1 − δ, xT = 0 for all t ≤ ((n−1)T −1−log( 1
δ ))σ2
2c3Lg2λ2 , and hence
Lh∥PX [xt − (1/Lh)∇Hsc(xt)] − xt∥2 ≥ c2Lf nλ
L,
which, by setting λ = 2Lε
c2Lf n , yields that Lh∥PX [xt − (1/Lh)∇Hsc(xt)] − xt∥2 ≥ 2ε. Set δ = 1
2 . Then, for
all t ≤ ((n−1)T −1−log( 1
δ ))σ2
2c3Lg2λ2 ,
E Lh∥PX [xt − (1/Lh)∇Hsc(xt)] − xt∥2 ≥ 1
2 (2ε) = ε.
14

Based on (b) of Lemma 7, we have 12λ2Lf T
L = ∆, which implies that T = ∆L
12λ2Lf . Thus, to achieve an ε-accurate stationary point, the algorithm must use at least
Ω nT σ2
Lg2λ2 = Ω n∆σ2
Lf Lg2λ4 = Ω n5L3
f ∆σ2
Lg2ε4
!
,
which, together with n = √κ, finishes the proof.
6 Conclusion and Future Works
In this work, we developed new hard instances that establish improved lower bounds for smooth nonconvex and strongly convex bilevel optimization under both deterministic and stochastic first order oracle models. Our results demonstrate that bilevel optimization is fundamentally more challenging than classical single-level and min-max formulations, and they reveal significant separations between the best known upper and lower bounds. These findings highlight that the current theoretical understandi-
ng of bilevel optimization is still far from complete. There are several promising directions for future research. First, even for the simplified and practically meaningful setting in which the lower level function is quadratic, the optimal complexity remains open. We suggest that closing these gaps may require first studying this simpler yet meaningful quadratic setting. Moreover, our constructions suggest that sharper lower and upper bounds may be obtained by designing algorithms that exploit hi-
gher-order structure of the lower-level function. Second, closing the large gaps between the existing upper bounds and our lower bounds, especially the gap of order κ2 in the deterministic case and the dependence on ε in the stochastic case, represents an important challenge. Third, another compelling direction is to investigate whether an Ω(ε−6) lower bound can be achieved under the standard regime where the smoothness constants Lf and Lg are Θ(1), a question that remains unresolved. Finally, ext-
ending the lower bound framework to broader variants of bilevel optimization, including settings with constraints, approximate inner solvers, or distributed architectures, may deepen the understanding of the fundamental limits of bilevel learning. Overall, we hope that the insights developed in this paper serve as a starting point for further studies toward a complete theory of the computational complexity of bilevel optimization.
A Proofs for Deterministic Lower Bound
A.1 Proof of Lemma 2
It is straightforward to verify that c ≤ S1,1 = 1 ≤ C, so the claim holds for n = 1. For the remainder of the proof, we assume n ≥ 2. Set s := 1/n2. The eigenpairs of A are
μk = 2 1 − cos (k − 1)π
n , k = 1, . . . , n,
with orthonormal eigenvectors
q1(j) = √1n , qk(j) =
q
2
n cos (k − 1)(j − 1
2 )π
n , k ≥ 2.
15

Thus
A = QΛQ⊤, Λ = diag(μ1, . . . , μn), Q = [q1 . . . qn].
Hence
S = (A + sIn)−1 = Q(Λ + sIn)−1Q⊤ =
n
X
k=1
1
μk + s qkq⊤
k,
so we can express Si,j as
Si,j =
n
X
k=1
qk(i)qk(j)
μk + s .
Note that q1(i)q1(j)
s = 1/n
1/n2 = n. Thus, we have
Si,j = n + Ri,j , Ri,j :=
n
X
k=2
qk(i)qk(j)
μk + s .
Higher eigenmodes. Because |qk(·)| ≤ p2/n,
|qk(i)qk(j)| ≤ 2
n.
Also for k ≥ 2,
μk = 2(1 − cos( (k−1)π
n )) ≥ 4(k − 1)2
n2 ,
so
1
μk + s ≤ n2
4(k − 1)2 .
Thus
|Ri,j| ≤
n
X
k=2
2
n · n2
4(k − 1)2 = n
2
n−1
X
m=1
1
m2 ≤ π2
12 n.
Final bounds.
Sn,n = n + Rn,n, Rn,n ≥ 0, S1,n = n + R1,n, |R1,n| ≤ π2
12 n.
Hence for all n ≥ 2,
1 − π2
12 n ≤ S1,n, Sn,n ≤ 1 + π2
12 n.
Then, the proof is complete.
16

A.2 Proof of Lemma 3
Note that x0 = λ
ClMn,n = λ
Cen . Since |x0| ≥ λ
Cen and |xi| < λ
Cen , we can find some 0 < j ≤ i such that
|xj−1| ≥ λ
Cen and |xj| < λ
Cen . Thus, look at
∂ H (x)
∂xj
= − λLf Cen
L
"
Ψ − Cen
λ xj−1 Φ′ − Cen
λ xj + Ψ Cen
λ xj−1 Φ′ Cen
λ xj
#
− λLf Cen
L
"
Ψ′ − Cen
λ xj Φ − Cen
λ xj+1 + Ψ′ Cen
λ xj Φ Cen
λ xj+1
#
,
which, in conjunction with Lemma 1 (items 2 and 4), implies that
∥∇H(x)∥2 ≥ ∂H(x)
∂xj
≥ λLf Cen
L.
Then, the proof is complete.
A.3 Proof of Lemma 4
First note that
H(0) = λ2Lf
L Ψ − Cl
λ Mn,nx0 − Ψ Cl
λ Mn,nx0 Φ(0) ≤ 0, (17)
where the inequality follows because Cl
λ Mn,nx0 ≥ 0 and from the definitions of Ψ and Ψ functions in eq. (4). Furthermore, based on Lemma 1 (item 4), we have that
H(x) ≥ − λ2Lf
L
T
X
i=1
Ψ Cl
λ Mn,nxi−1 Φ Cr
λ M1,nxi ≥ − 12λ2Lf T
L , (18)
which, combined with H(0) ≤ 0, implies that
H(0) − inxf H(x) ≤ 12λ2Lf T
L,
which finishes the proof.
B Proofs for Stochastic Lower Bound
B.1 Auxiliary Lemmas
For a probability-p zero-chain, at each iteration, a new coordinate is discovered with probability at most p. Therefore, it takes at least 1/p steps in expectation to activate a new coordinate. The following lemma, adapted from Arjevani et al. (2023); Li et al. (2021), shows that at least Ω(T /p) iterations are required to reach the end of a probability-p zero-chain.
17

Lemma 9 ((Arjevani et al., 2023, Lemma 1)). Let f : X → R, where X ⊂ RT satisfies supp PX (x) = supp(x), ∀ x ∈ RT , and suppose f is a probability-p zero-chain with a stochastic first-order oracle. Then, for any first-order algorithm, with probability at least 1 − δ, the T -th coordinate of x at the tth iteration, satisfies
xt
T = 0, ∀ t ≤ T − log(1/δ)
2p .
Lemma 10. Recall S := A + 1
n2 In
−1. For every i = 1, . . . , n,
S1,n ≤ Si,n ≤ Sn,n.
Proof. Define B := A + 1
n2 In, and v ∈ Rn the last column of S, i.e., v := S·,n, vi := Si,n, i = 1, . . . , n.
Since v is the last column of S = B−1, it solves the linear system
Bv = en.
Writing this componentwise, we obtain
(1 + n−2)v1 − v2 = 0,
−vi−1 + (2 + n−2)vi − vi+1 = 0, i = 2, . . . , n − 1,
−vn−1 + (1 + n−2)vn = 1.
Define the forward differences
di := vi+1 − vi, i = 1, . . . , n − 1.
We next derive a system of equations for d = (d1, . . . , dn−1)⊤. For i = 2, . . . , n − 2, subtracting the equation at index i from that at index i + 1 gives
−vi + (2 + n−2)vi+1 − vi+2 − −vi−1 + (2 + n−2)vi − vi+1 = 0,
which can be rewritten as
−di−1 + (2 + n−2)di − di+1 = 0, i = 2, . . . , n − 2.
From the first equation, we obtain
(1 + n−2)v1 − v2 = 0 =⇒ (2 + n−2)d1 − d2 = 0.
From the last equation, we obtain
−vn−1 + (1 + n−2)vn = 1 =⇒ −dn−2 + (2 + n−2)dn−1 = 1.
Thus, the vector d = (d1, . . . , dn−1)⊤ satisfies a tri-diagonal linear system
B′d = en−1,
18

where B′ ∈ R(n−1)×(n−1) is the symmetric tri-diagonal matrix
B′ =

   
2 + n−2 −1 −1 2 + n−2 −1
... ... ...
−1 2 + n−2

   
.
The matrix B′ is strictly diagonally dominant with positive diagonal entries and nonpositive off-diagonal entries, hence an irreducible M -matrix (Berman & Plemmons, 1994). It is therefore positive definite and its inverse is entrywise nonnegative: (B′)−1 ≥ 0 (entrywise).
Since d = (B′)−1en−1, we obtain
di ≥ 0, i = 1, . . . , n − 1.
Equivalently,
vi+1 − vi = di ≥ 0 =⇒ v1 ≤ v2 ≤ · · · ≤ vn.
The inequalities S1,n ≤ Si,n ≤ Sn,n follow immediately from this monotonicity.
B.2 Proof of Lemma 6
Note that the minimizers (y(i))∗, i = 0, ..., T take the forms of
(y(i))∗ = 4n2 + 1
n2
1
n2 In + A
−1
| {z }
M
b(i)
x.
Combining Lemma 2 and Lemma 10, we have for all i = 1, ..., n,
4cn ≤ Mi,n ≤ 5Cn,
where c = 1 − π2
12 and C = 1 + π2
12 . Thus, we have
∥(y(i))∗∥∞ ≤ 5Cn|xi| ≤ 5Crxλ < 10rxλ < ryλ,
which finishes the proof.
B.3 Proof of Lemma 7
The proof of (a) is identical to the deterministic case. The proof of (b) follows the same reasoning as in Lemma 4. To establish (c), recall that
Hsc(x) =
T
X
i=1
λ2Lf
L Ψ − Cl
λ Mn,nxi−1 Φ − Cr
λ M1,nxi − Ψ Cl
λ Mn,nxi−1 Φ Cr
λ M1,nxi .
19

Then one can verify that ∇2Hsc(x) is a tri-diagonal matrix whose entries are all of order O Lf n2
L . Conse
quently, ∇2Hsc(x) 2 = O Lf n2
L . To prove (d), note that each coordinate of ∇yefsc(x; ye) takes an order
of O( λLf
L ), and hence ∥∇yefsc(x; ye)∥∞ = O( λLf
L ). For ∇yegsc(x; ye), note that
∂gsc(x; ye)
∂y(i) ∞
= Lgn2
4n2 + 1
1
n2 In + A y(i) − Lgb(i)
x ∞
≤ Lg
4
1
n2 In + A
∞
y(i)
∞
+ Lg|xi|
≤ Lg
4
1
n2 + 4 ryλ + Lgrxλ
n
≤5
4 Lgryλ + 1
10 Lgryλ ≤ 2Lgryλ,
which holds for all i = 0, ..., T . This implies that ∥∇yegsc(x; ye)∥∞ ≤ 2Lgryλ. For ∥∇xgsc(x; ye)∥∞, note that
∂gsc(x; ye)
∂xi
= Lg|y(i)
n | ≤ Lgryλ,
which yields that ∥∇xgsc(x; ye)∥∞ ≤ Lgryλ. Then, the proof is complete.
B.4 Proof of Lemma 8
Note that x0 = λ
ClMn,n = λ
Cen . Since |x0| ≥ λ
Cen and |xi| < λ
Cen , we can find some 0 < j ≤ i such that
|xj−1| ≥ λ
Cen and |xj| < λ
Cen . Thus, look at
∂Hsc(x)
∂xj
= − λLf Cen
L
"
Ψ − Cen
λ xj−1 Φ′ − Cen
λ xj + Ψ Cen
λ xj−1 Φ′ Cen
λ xj
#
− λLf Cen
L
"
Ψ′ − Cen
λ xj Φ − Cen
λ xj+1 + Ψ′ Cen
λ xj Φ Cen
λ xj+1
#
. (19)
Then, if xj − (1/Lh) ∂Hsc(x)
∂xj ≤ rxλ/n, then we have
Lh∥PX [x − (1/Lh)∇Hsc(x)] − x∥2 ≥ ∂Hsc(x)
∂xj
≥ λLf Cen
L.
Otherwise, i.e., xj − (1/Lh) ∂Hsc(x)
∂xj > rxλ/n, we have
Lh∥PX [x − (1/Lh)∇Hsc(x)] − x∥2| ≥Lh PC1
rxλ/n xj − (1/Lh) ∂Hsc(x)
∂xj
− xj
≥Lh
rxλ
n − |xj| ≥ Lh
rxλ
n−λ
Cen
(i)
≥ c0n2Lf
L rx − 1
Ce
λ
n = c0Lf
L rx − 1
Ce nλ,
where (i) follows from (c) of Lemma 7. Combining the above two cases completes the proof.
20

References
Michael Arbel and Julien Mairal. Non-convex bilevel games with critical point selection maps. Advances in Neural Information Processing Systems, 35:8013–8026, 2022.
Yossi Arjevani, Yair Carmon, John C Duchi, Dylan J Foster, Nathan Srebro, and Blake Woodworth. Lower bounds for non-convex stochastic optimization. Mathematical Programming, 199(1):165–214, 2023.
Abraham Berman and Robert J Plemmons. Nonnegative matrices in the mathematical sciences. SIAM, 1994.
Jerome Bracken and James T McGill. Mathematical programs with optimization problems in the constraints. Operations Research, 21(1):37–44, 1973.
Yair Carmon, John C Duchi, Oliver Hinder, and Aaron Sidford. Lower bounds for finding stationary points i. Mathematical Programming, 184(1):71–120, 2020.
Yair Carmon, John C Duchi, Oliver Hinder, and Aaron Sidford. Lower bounds for finding stationary points ii: first-order methods. Mathematical Programming, 185(1):315–355, 2021.
Lesi Chen, Jing Xu, and Jingzhao Zhang. On finding small hyper-gradients in bilevel optimization: Hardness results and improved analysis. In Conference on Learning Theory, pp. 947–980. PMLR, 2024.
Lesi Chen, Yaohua Ma, and Jingzhao Zhang. Near-optimal nonconvex-strongly-convex bilevel optimization with fully first-order oracles. Journal of Machine Learning Research, 26(109):1–56, 2025.
Tianyi Chen, Yuejiao Sun, Quan Xiao, and Wotao Yin. A single-timescale method for stochastic bilevel optimization. In Proceedings of The 25th International Conference on Artificial Intelligence and Statistics,
2022.
Mathieu Dagr ́eou, Pierre Ablin, Samuel Vaiter, and Thomas Moreau. A framework for bilevel optimization that enables stochastic and global variance reduction algorithms. Advances in Neural Information Processing Systems, 35:26698–26710, 2022.
Justin Domke. Generic methods for optimization-based modeling. In Artificial Intelligence and Statistics, pp. 318–326. PMLR, 2012.
Cong Fang, Chris Junchi Li, Zhouchen Lin, and Tong Zhang. Spider: Near-optimal non-convex optimization via stochastic path-integrated differential estimator. Advances in neural information processing systems, 31, 2018.
Luca Franceschi, Michele Donini, Paolo Frasconi, and Massimiliano Pontil. Forward and reverse gradientbased hyperparameter optimization. In International Conference on Machine Learning (ICML), pp.
1165–1173, 2017.
Zhishuai Guo and Tianbao Yang. Randomized stochastic variance-reduced methods for stochastic bilevel optimization. arXiv preprint arXiv:2105.02266, 2021.
Pierre Hansen, Brigitte Jaumard, and Gilles Savard. New branch-and-bound rules for linear bilevel programming. SIAM Journal on Scientific and Statistical Computing, 13(5):1194–1217, 1992.
21

Mingyi Hong, Hoi-To Wai, Zhaoran Wang, and Zhuoran Yang. A two-timescale framework for bilevel optimization: Complexity analysis and application to actor-critic. SIAM Journal on Optimization, 33(1): 147–180, 2023.
Minhui Huang, Dewei Zhang, and Kaiyi Ji. Achieving linear speedup in non-iid federated bilevel learning. In International conference on machine learning, pp. 14039–14059. PMLR, 2023.
Kaiyi Ji and Yingbin Liang. Lower bounds and acceleration algorithms for bilevel optimization. Journal of machine learning research, 2022.
Kaiyi Ji and Lei Ying. Network utility maximization with general and unknown utility functions: A distributed, data-driven bilevel optimization approach. Submitted, 2022.
Kaiyi Ji, Junjie Yang, and Yingbin Liang. Bilevel optimization: Convergence analysis and enhanced design. In International Conference on Machine Learning, pp. 4882–4892. PMLR, 2021.
Liuyuan Jiang, Quan Xiao, Lisha Chen, and Tianyi Chen. Beyond value functions: Single-loop bilevel optimization under flatness conditions. In The Thirty-ninth Annual Conference on Neural Information Processing Systems, 2025.
Vijay R Konda and John N Tsitsiklis. Actor-critic algorithms. In Advances in neural information processing systems, pp. 1008–1014, 2000.
Jeongyeol Kwon, Dohyun Kwon, Stephen Wright, and Robert Nowak. A fully first-order method for stochastic bilevel optimization. pp. 18083–18113, 2023.
Jeongyeol Kwon, Dohyun Kwon, and Hanbaek Lyu. On the complexity of first-order methods in stochastic bilevel optimization. arXiv preprint arXiv:2402.07101, 2024.
Haochuan Li, Yi Tian, Jingzhao Zhang, and Ali Jadbabaie. Complexity lower bounds for nonconvex-stronglyconcave min-max optimization. Advances in Neural Information Processing Systems (NeurIPS), 34:
1792–1804, 2021.
Renjie Liao, Yuwen Xiong, Ethan Fetaya, Lisa Zhang, KiJung Yoon, Xaq Pitkow, Raquel Urtasun, and Richard Zemel. Reviving and improving recurrent back-propagation. In International Conference on Machine Learning, pp. 3082–3091. PMLR, 2018.
Bo Liu, Mao Ye, Stephen Wright, Peter Stone, and Qiang Liu. Bome! bilevel optimization made easy: A simple first-order approach. Advances in Neural Information Processing Systems, 35:17248–17262, 2022.
Risheng Liu, Pan Mu, Xiaoming Yuan, Shangzhi Zeng, and Jin Zhang. A generic first-order algorithmic framework for bi-level programming beyond lower-level singleton. In International Conference on Machine Learning, 2020.
Risheng Liu, Jiaxin Gao, Jin Zhang, Deyu Meng, and Zhouchen Lin. Investigating bi-level optimization for learning and vision from a unified perspective: A survey and beyond. IEEE Transactions on Pattern Analysis and Machine Intelligence, 44(12):10045–10067, 2021a.
22

Risheng Liu, Xuan Liu, Xiaoming Yuan, Shangzhi Zeng, and Jin Zhang. A value-function-based interior-point method for non-convex bi-level optimization. In International Conference on Machine Learning, 2021b.
Risheng Liu, Yaohua Liu, Shangzhi Zeng, and Jin Zhang. Towards gradient-based bilevel optimization with non-convex followers and beyond. Advances in Neural Information Processing Systems, 34:8662–8675,
2021c.
Zhaosong Lu and Sanyou Mei. First-order penalty methods for bilevel optimization. SIAM Journal on Optimization, 34(2):1937–1969, 2024.
Zhaosong Lu and Sanyou Mei. Solving bilevel optimization via sequential minimax optimization. arXiv preprint arXiv:2511.07398, 2025.
Dougal Maclaurin, David Duvenaud, and Ryan Adams. Gradient-based hyperparameter optimization through reversible learning. In International conference on machine learning, pp. 2113–2122. PMLR, 2015.
Arkadi S Nemirovsky. Information-based complexity of linear operator equations. Journal of Complexity, 8 (2):153–175, 1992.
Yurii Nesterov et al. Lectures on convex optimization, volume 137. Springer, 2018.
Aravind Rajeswaran, Chelsea Finn, Sham M Kakade, and Sergey Levine. Meta-learning with implicit gradients. In Advances in Neural Information Processing Systems, pp. 113–124, 2019.
Han Shen and Tianyi Chen. On penalty-based bilevel gradient descent method. In Proceedings of the 40th International Conference on Machine Learning, pp. 30992–31015, 2023.
Chenggen Shi, Jie Lu, and Guangquan Zhang. An extended kuhn–tucker approach for linear bilevel programming. Applied Mathematics and Computation, 162(1):51–63, 2005.
Daouda Sow, Kaiyi Ji, Ziwei Guan, and Yingbin Liang. A primal-dual approach to bilevel optimization with multiple inner minima. arXiv preprint arXiv:2203.01123, 2022.
Davoud Ataee Tarzanagh, Mingchen Li, Christos Thrampoulidis, and Samet Oymak. Fednest: Federated bilevel, minimax, and compositional optimization. In International Conference on Machine Learning, pp. 21146–21179. PMLR, 2022.
Chen Wang, Kaiyi Ji, Junyi Geng, Zhongqiang Ren, Taimeng Fu, Fan Yang, Yifan Guo, Haonan He, Xiangyu Chen, Zitong Zhan, et al. Imperative learning: A self-supervised neural-symbolic learning framework for robot autonomy. arXiv preprint arXiv:2406.16087, 2024.
Xiaoyu Wang, Rui Pan, Renjie Pi, and Tong Zhang. Effective bilevel optimization via minimax reformulation. arXiv preprint arXiv:2305.13153, 2023.
Junjie Yang, Kaiyi Ji, and Yingbin Liang. Provably faster algorithms for bilevel optimization. Advances in Neural Information Processing Systems, 34:13670–13682, 2021.
Yifan Yang, Peiyao Xiao, and Kaiyi Ji. Achieving O(ε−1.5) complexity in Hessian/Jacobian-free stochastic bilevel optimization. arXiv preprint arXiv:2312.03807, 2023.
23

Yifan Yang, Hao Ban, Minhui Huang, Shiqian Ma, and Kaiyi Ji. Tuning-free bilevel optimization: New algorithms and convergence analysis. In The Thirteenth International Conference on Learning Representations,
2024.
24

---

## Processing Information

- **Processing Library:** Zotero PDFWorker
- **Processing Date:** 2026-02-10T18:18:58.129Z
- **Text Length:** 54957 characters
- **Success:** Text extraction completed
- **PDF Library Used:** Zotero PDFWorker
- **Pages Processed:** 24 of 24
