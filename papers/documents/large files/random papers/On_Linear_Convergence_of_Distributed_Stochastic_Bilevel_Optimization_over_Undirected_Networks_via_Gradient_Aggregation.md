# PDF Document: Tak and Baranwal - 2025 - On Linear Convergence of Distributed Stochastic Bilevel Optimization over Undirected Networks via Gr.pdf

**File Path:** Tak and Baranwal - 2025 - On Linear Convergence of Distributed Stochastic Bilevel Optimization over Undirected Networks via Gr.pdf

**Processed Date:** 2026-02-10T18:14:15.725Z

**File Size:** 1268.21 KB

**Total Pages:** 8

**Extracted Pages:** 8

**PDF Library:** Zotero PDFWorker

**Attachment Item ID:** 3358

**Title:** On Linear Convergence of Distributed Stochastic Bilevel Optimization over Undirected Networks via Gradient Aggregation

**Collection:** Large Files > Random Papers

---

## Extracted Text Content

On Linear Convergence of Distributed Stochastic Bilevel Optimization
over Undirected Networks via Gradient Aggregation
Ajay Tak1 and Mayank Baranwal2
Abstract— Many large-scale constrained optimization problems can be formulated as bilevel distributed optimization tasks over undirected networks, where agents collaborate to minimize a global cost function while adhering to constraints, relying only on local communication and computation. In this work, we propose a distributed stochastic gradient aggregation scheme and establish its linear convergence under the weak assumption of global strong convexity, which relaxes the common requirement of lo-
cal function convexity on the objective and constraint functions. Specifically, we prove that the algorithm converges at a linear rate when the global objective function (and not each local objective function) satisfies strong-convexity. Our results significantly extend existing theoretical guarantees for distributed bilevel optimization. Additionally, we demonstrate the effectiveness of our approach through numerical experiments on distributed sensor network problems and distributed linear regres-
sion with rank-deficient data.
I. INTRODUCTION AND RELATED WORK
We study a class of bilevel optimization problem of the form [1]:
min
x∈Rd
n
X
i=1
fi(x) such that x ∈ argmin
x∈Rd
n
X
i=1
gi(x), (1)
where the objective functions fi, gi : Rd → R are assumed to be private and distributed across a network of n agents. However, we assume that there is no central coordination between the agents, and since each agent has access only to its local functions {fi(·), gi(·)}, the nodes must work together to collaboratively solve the problem. Bilevel distributed optimization problems generalize several existing formulations in the distributed optimization literature. For example, consider the standard di-
stributed optimization problem in the absence of strong convexity. By defining fi(x) := ∥x∥2/n, the bilevel optimization problem (1) reduces to finding the minimum-energy solution, i.e., the one with the smallest l2-norm—of the classical
distributed optimization problem, min
x∈Rd
Pn
i=1 gi(x). Simi
larly, consider the following linearly constrained distributed optimization problem:
min
x∈Rd
n
X
i=1
fi(x) s.t. Aix = bi for all i ∈ [n]
xj ≥ 0 for all j ∈ J ⊆ [d] .
1A. Tak is with the Institute for Robotics and Intelligent Machines, Georgia Institute of Technology, Atlanta, GA 30332, USA ajytak@gatech.edu. 2M. Baranwal is with the Faculty of Centre for Systems and Control, Indian Institute of Technology, Bombay, 400076, India mbaranwal@iitb.ac.in.
If the above problem is feasible, we can define constraint objective function as:
gi(x) := 1
2 ∥Aix − bi∥2 + 1
2n
X
J max{0, −xj}2,
making it amenable to the bilevel optimization framework in (1). As a result, a broad class of distributed optimization problems can be expressed within the framework of (1), encompassing applications such as sensor networks, satellite tracking [2], and large-scale machine learning [3], among others. The classical consensus-based approaches were initially formulated in the 1970s and 1980s [4] with early work assuming shared global objectives distributed across networked agents. Over time, research-
 has expanded to accommodate heterogeneous local objectives, communication constraints, and nonconvex settings [5]. In the past decade, accelerated and gradient-tracking methods have emerged as key innovations for improving convergence rates in distributed settings. Algorithms such as EXTRA [6], gradient-tracking-based approaches [7], and dual-decomposition techniques [8] have provided rigorous guarantees for convex and strongly convex problems. However, challenges remain when addressing time-vary-
ing networks and nonconvex landscapes. Recent works such as decentralized momentum methods [9], push-pull protocols for directed graphs [10], and adaptive gradient schemes [11] have demonstrated improved scalability and robustness. Most recently, [1] proposed stochastic gradient aggregation for bilevel distributed optimization over directed networks under assumptions of strong convexity on local objective functions. Despite these advancements, existing approaches often assume strong convexity of i-
ndividual objective functions or require restrictive communication topologies. Our work extends this theory by considering a bilevel distributed setting, leveraging regularization techniques to weaken convexity assumptions while preserving linear convergence rates. By incorporating the Polyak-Łojasiewicz (PL) condition, we broaden the applicability of distributed methods to a wider range of practical problems. Contributions: We propose the Bilevel Distributed Aggregated Stochastic Gradient (BDASG)-
 algorithm for solving (1). We provide a rigorous theoretical analysis and establish that, under suitable assumptions the algorithm achieves linear convergence to the optimal solution. In particular, we show that the BDASG algorithm exhibits linear convergence when the global objective function, i.e., Pn
i=1 fi(x), is strongly convex, without requiring individual objective functions to be convex. Moreover, we conjecture that the
arXiv:2511.18390v1 [math.OC] 23 Nov 2025

algorithm can be extended to guarantee linear convergence even when the global objective function satisfies the PL inequality, the weakest known condition for ensuring linear convergence. However, apart from Lemma 3, which assumes strong convexity of the global objective function, the rest of our theoretical analysis relies only on the PL condition to establish linear convergence. To the best of our knowledge, our work provides the strongest convergence guarantees under the minimal set of assumpt-
ions. While our contributions are primarily theoretical, we validate the effectiveness of our approach through numerical experiments. Mathematical Notations: We denote the set of real numbers by R. Vectors are represented using bold lowercase letters, while matrices are denoted by uppercase italicized symbols. For a function f : Rd → R, the gradient at a point x ∈ Rd is written as ∇f (x). Unless stated otherwise, ∥x∥ refers to the Euclidean (2-norm) of x. We represent an undirected graph as G := (-
V, E) with adjacency matrix A = [aij] ∈ Rn×n, where aij ∈ [0, 1]. The set of nodes is given by V = {1, 2, . . . , n}, and the 1-hop neighborhood of a node i ∈ V is denoted by Ni, i.e., Ni = {j ∈ V | aij > 0}. An agent i’s information vector is denoted by xi, while the
average information of all the agents is represented as: x ̄ :=
1 n
Pn
i=1 xi. The aggregated state is represented by X :=
[x1 x2 . . . xn]⊺ with X † depicting the aggregated consensus error given as: X † = I − 1
n 11⊺ X, where 1 is a vector
of all 1’s and x†
i := xi − x ̄ is the consensus error at the
ith-node.
II. PRELIMINARIES AND PROBLEM FORMULATION
In this section, we present preliminary results, including definitions, lemmas, and assumptions, that serve as foundational elements for the convergence analysis of the proposed algorithmic approach.
Definition 1 (PL-inequality): A continuously differentiable function q : Rd → R is said to satisfy the Polyak-Łojasiewicz (PL) inequality with constant μ > 0 if, for all x ∈ Rd,
∥∇q(x)∥2 ≥ 2μ(q(x) − q∗),
where q∗ is the minimum value of q(·). In addition, every strongly convex function q(·) with convexity modulus μ > 0 satisfies the PL-inequality. Definition 2 (L-smooth): A differentiable function q : Rd → R is said to be L-smooth if its gradient is Lipschitz continuous with constant L, i.e., for all x, y ∈ Rd, the following inequality holds:
∥∇q(x) − ∇q(y)∥ ≤ L∥x − y∥.
Lemma 1 (Norm equivalence): For any x ∈ Rd, the fol
lowing holds: ∥x∥2 ≤ ∥x∥1 ≤ √d∥x∥2.
Lemma 2 (Co-coercivity [12]): Let h : Rd → R be an L-smooth function. Then for all x, y ∈ Rd, the following inequality holds:
⟨y − x, ∇h(y) − ∇h(x)⟩ ≥ 1
L ∥∇h(y) − ∇h(x)∥2.
Assumption 1: Each agent i ∈ V queries noisy samples of the gradients of its local functions fi(·) and gi(·), i.e., for some z ∈ Rd, the agent i generates:
∇ ̃ fi(z) = ∇fi(z) + ξfi ,
 ̃∇gi(z) = ∇gi(z) + ξgi ,
where ξfi and ξgi are independent random vectors in Rd with zero mean, i.e., E[ξfi ] = E[ξgi ] = 0.
Remark 1: Assumption 1 implies that ∇ ̃ fi(·) and  ̃∇gi(·) are unbiased estimates of ∇fi(·) and ∇gi(·), respectively. In addition, we assume bounded noise in stochastic gradients, i.e., without loss of generality with probability 1, the following holds:
∥ξfi ∥ ≤ Cf , ∥ξgi ∥ ≤ Cg, for all i ∈ V.
Assumption 2: The cumulative objective function f (x) :=
Pn
i=1 fi(x) is strongly convex with μ > 0, while the cumu
lative constraint function g(x) := Pn
i=1 gi(x) is convex. Remark 2: Assumption 2 only requires the sum of the private functions to be (strongly) convex, allowing for the possibility that the individual functions may be non-convex. Moreover, Assumption 2 also implies that for some λ > 0, the function g(x)+λf (x) is strongly convex, with a modulus of convexity μλ := μλ > 0, and that the optimal solution of (1) is unique if it exists. Moreover, from Assumption 1, since the noise is bounded, we define C := max
i∈cV ∥ξi∥, where
ξi := ξgi + λξfi .
Assumption 3: The local functions {fi} and {gi} are {Lfi } and {Lgi }-smooth, respectively. Remark 3: Assumption 3 implies that the function gi(x)+ λfi(x) is Li := Lgi +λLfi -smooth. In addition, the function
g(x)+λf (x) defined in Remark 2 is L ̄ := P
i∈V Li-smooth.
Lemma 3: Assume Assumption 2 holds. Let x∗ denote the unique optimizer of (1), and let x∗
λ represent the minimizer
of g(·) + λf (·). Then, the norm of the difference, ∥x∗ − x∗
λ∥, converges to zero as λ → 0. Proof: Note that the bilevel optimization problem in (1)
can be equivalently expressed as min
y∈argmin g(x)
f (y). Thus, if
x∗ is the unique optimizer of (1), then g(x∗) ≤ g(x) for all x. Since g + λf is μλ-strongly convex, it follows that
g(x∗) + λf (x∗) ≥ g(x∗
λ) + λf (x∗
λ) + μλ
2 ∥x∗ − x∗
λ∥2,
(2)
which implies that in the limit λ → 0, g(x∗) ≥ g(λli→m0 x∗
λ)
indicating that xˆ := λli→m0 x∗
λ is also a feasible solution to
(1), with xˆ also being a minimizer of g(x). Taking the limit λ → 0 in (2) and using the continuity of f , we obtain that f (x∗) ≥ f (xˆ). From the uniqueness of x∗, it must follow that λli→m0 x∗
λ = x∗.
Remark 4: Lemma 3 implies that for sufficiently small values of λ, the optimal solution x∗
λ remains close to the unique optimal solution of (1). Henceforth, with a slight abuse of notation, we denote x∗
λ by x∗, assuming λ is sufficiently small.

III. MAIN RESULTS
We introduce the Bilevel Distributed Aggregated Stochastic Gradient (BDASG) algorithm, which achieves linear convergence under suitable assumptions. At each iteration, the algorithm aggregates stochastic gradients and integrates consensus with gradient updates to converge to the optimal solution. The detailed steps are outlined in Algorithm 1. To this end, we introduce the following notation:
hi(xi(k)) := ∇ ̃ gi(xi(k))+λ  ̃∇fi(xi(k))
= ∇gi(xi(k))+λ∇fi(xi(k))
| {z }
:=∇bi (xi (k))
+ ξgi +λξfi
| {z }
ξi
(3)
Algorithm 1 Bilevel Distributed Aggregated Stochastic Gradient (BDASG) algorithm
1: Initialize: Each agent i ∈ V initializes at an arbitrary state xi(0) and yi(0) = ∇ ̃ gi(xi(0)) + λ  ̃∇fi(xi(0)).
2: while k = 0, 1, 2, . . . do ▷ Iterate until convergence 3: xi(k+1) ← P
j∈Ni
aijxj(k) − αyi(k)
4: yi(k+1) ← P
j∈Ni
aijyj (k)+hi (xi (k+1))−hi (xi (k))
5: end while
Algorithm 1 can be summarized as the following set of iterative updates:
X (k + 1) = AX (k) − αY (k),
Y (k + 1) = AY (k) + H(X (k + 1)) − H(X (k)), (4)
where H(X (k)) :=  ̃∇G(X (k)) + λ∇ ̃ F (X (k)), and k is the iteration number. Here, the functions G(X (k)) and F (X (k)) are defined as:
G(X (k)) =

   
g1(x1(k)) g2(x2(k))
...
gn(xn(k))

   
, F (X (k)) =

   
f1(x1(k)) f2(x2(k))
...
fn(xn(k))

   
.
The averaged dynamics follows:
 ̄x(k + 1) = x ̄(k) − αy ̄(k),
y ̄(k + 1) = H ̄ (X (k + 1)) := 1
n
Xn
i=1 hi(xi(k + 1)), (5)
where hi(xi) := ∇ ̃ gi(xi) + λ  ̃∇fi(xi).
Now, that all the definitions and assumptions have been stated, we look at a series of lemmas and their proofs which are essential in the analysis of our algorithm. This section analyzes the convergence rate of BDASG, showing that it achieves linear convergence in expectation to a neighborhood of the solution of problem (1). Inspired by [13], our analysis consists of two steps: first, we establish that the nodes in the graph reach consensus at a linear rate, meaning the difference between each nod-
e’s value xi and the average state x ̄ diminishes linearly, i.e., ∥xi − x ̄∥ → 0 at a linear rate (Lemma(4)); second, we show that the average state  ̄x itself converges linearly to the optimal solution x∗
(Theorem 1), demonstrating that BDASG achieves linear convergence to the optimal solution. Before we begin our analysis, we will first state an assumption, the proof to which will be presented at the end.
Gradient Reduction at a Linear Rate: Given some positive constants B, D, and γ ∈ (σ2, 1), the sequence {y(k)} generated by Algorithm 1 satisfies
E[∥Y †(k)∥] ≤ Dγk + B, k ≥ 0, (6)
where σ2 is the second largest singular value of the graph adjacency matrix. We will prove this statement later in the analysis. We begin by establishing the linear convergence of ∥xi −  ̄x∥ → 0 under condition (6). To this end, we first present a series of supporting lemmas, followed by the proof of the main result in Theorem 1. Lemma 4: Let {xi(k), yi(k)} be the sequence generated by Algorithm 1, and let σ2 denote the second largest singular value of the graph adjacency matrix A. Then the norm o-
f the overall consensus error satisfies the following inequality:
E[∥X †(k)∥] ≤ σk
2 E[∥X †(0)∥] + α
k−1
X
t=0
σk−1−t
2 E[∥Y †(t)∥]
Proof: The proof follows by iteratively expanding X †(k) as:
X†(k) = I − 1
n 11⊺ {AX(k−1) − αY (k−1)}
= AX†(k − 1) − αY †(k − 1)
= AkX†(0) − α
Xk−1
t=0 Ak−1−tY †(t)
=⇒E[∥X†(k)∥] ≤ σk
2 E[∥X†(0)∥]+α
k−1
X
t=0
σk−1−t
2 E[∥Y †(t)∥],
which completes the proof. Assuming the linear gradient reduction property in (6) (as established in Theorem 2) and leveraging Lemma 4, we demonstrate that the sequence generated by Algorithm 1 exhibits linear convergence of ∥xi − x ̄∥ → 0. By (6) and since γ ∈ (σ2, 1), the second term on the righthand side of Lemma 4 is given as:
k−1
X
t=0
σk−1−t
2 E ∥Y †(t)∥ ≤
k−1
X
t=0
σk−1−t
2 Dγt + B
=⇒
k−1
X
t=0
σk−1−t
2 E ∥Y †(t)∥ ≤ Dγk
γ − σ2
+B
1 − σ2
.
Therefore
E ∥X†(k)∥ ≤ E ∥X†(0)∥ + Dα
γ − σ2
!
γk + Bα
1−σ2
. (7)
Now that we have established the linear convergence of consensus, we state some additional results which will help us in proving that x ̄ converges to x∗ linearly.

Lemma 5: Let Assumptions 1-3 hold. Let {xi(k), yi(k)} be the sequence generated by Algorithm 1 for all i ∈ V. Then the averaged state vector  ̄x(k) satisfies:
 ̄x(k) − x∗ − α
n
Xn
i=1 ∇bi(x ̄(k)) ≤ θ∥ ̄x(k) − x∗∥,
where θ =
q
1 − αμ2
λ n
L2 ̄ − α
n ∈ (0, 1), and ∇bi(x(k)) is defined in (3). Proof: Recall that
x ̄(k) − x∗ − α
n
Xn
i=1 ∇bi(x ̄(k))
2
= ∥ ̄x(k) − x∗∥2 + α2
n2
Xn
i=1 ∇bi( ̄x(k))
2
− 2α
n
D
x ̄(k) − x∗,
Xn
i=1 ∇bi(x ̄(k))
E
≤ ∥ ̄x(k) − x∗∥2 + α2
n2
Xn
i=1 ∇bi( ̄x(k))
2
− 2α
nL ̄
Xn
i=1 ∇bi(x ̄(k))
2
(From Lemma 2)
= ∥ ̄x(k) − x∗∥2 − α
n
2
L ̄ − α
n
Xn
i=1 ∇bi(x ̄(k))
2
| {z }
≤2μλ (Pn
i=1 bi(x ̄(k))−Pn
i=1 bi(x ̄∗))
, (8)
where the last step follows from applying PL-inequality to the function b(x) = g(x) + λf (x). Recall that PL-functions exhibit at least quadratic growth resulting in the following upper-bound on (8) as:
(8) ≤ ∥x ̄(k) − x∗∥2 − 2μλα
n
2
L ̄ − α
n
μλ
2 ∥x ̄(k) − x∗∥2
= 1 − μ2
λα n
2
L ̄ − α
n ∥x ̄(k) − x∗∥2
Defining θ2 = 1 − μ2
λα n
L2 ̄ − α
n , and considering 0 < α
n<
L2 ̄ , we have θ2 < 1. In order to complete the proof, we still
need to show that θ2 > 0. Observe that
θ2 = 1 − μ2
λα n
2
L ̄ − α
n = α2
n2 μ2
λ − 2μ2
λ
2 L ̄
α
n +1
=⇒ θ2 = αμλ
n − μλ
L ̄
2
+ 1 − μ2
λ
L ̄2 ≥ 0,
implying that θ =
q
1 − μ2
λα n
L2 ̄ − α
n ∈ (0, 1), which completes the proof. Using the Lemma stated above, we now prove linear convergence of x ̄ to x∗ , which will complete our analysis of the algorithm. Theorem 1: Let Assumptions 1-3 hold. Let {xi(k), yi(k)} be the sequence generated by Algorithm 1 for all i ∈ V. Given γ ∈ (σ2, 1), and let the step size α be chosen as
n
L ̄ + n
s
(σ2 + τ )2 − 1
μλ
+1
L ̄2 ≤ α ≤ n
L ̄ + n
s
γ2−1
μλ
+1
L ̄2 ,
where τ > 0 is a tuning parameter and σ2 is the second largest singular value of the adjacency matrix A. Then
the averaged state vector  ̄x(k) converges linearly to the neighborhood of x∗ in expectation, i.e.,
E[∥ ̄x(k + 1) − x∗∥] ≤ E[∥x ̄(0) − x∗∥]+
L ̃√dαE[∥X †(0)∥] n(γ −σ2)
!
γk+1+ cα
n(1−γ)+
L ̃√dα2
n(1−γ)
B γ −σ2
+D
γ
Proof: From (5) and using y ̄(k) = 1
n
n
P
i=1
hi(xi(k)) we
have
∥x ̄(k + 1) − x∗∥ = x ̄(k) − x∗ − α
n
n
X
i=1
hi(xi(k))
= x ̄(k) − x∗ − α
n
n
X
i=1
hi(xi(k)) − α
n
n
X
i=1
∇bi(x ̄(k))
+α
n
n
X
i=1
∇bi(x ̄(k))
≤ x ̄(k) − x∗ − α
n
n
X
i=1
∇gi(x ̄(k)) + λ∇fi(x ̄(k))
+α
n
n
X
i=1
∥hi(xi(k))) − ∇gi(x ̄(k)) − λ∇fi(x ̄(k))∥
≤ x ̄(k) − x∗ − α
n
n
X
i=1
∇bi(x ̄(k))
+α
n
n
X
i=1
∥∇bi(xi(k))) − ∇bi(x ̄(k))∥ + ∥ξk
i∥
(Lemma 5)
≤ θ∥x ̄(k) − x∗∥2 + α
n
Xn
i=1 Li∥xi(k) − x ̄(k)∥2 + αC
n
≤ θ∥x ̄(k) − x∗∥2 + α
n
Xn
i=1 Li∥xi(k) − x ̄(k)∥1 + αC
n
≤ θ∥x ̄(k) − x∗∥2 + αC
n +α
n
L ̃∥X(k) − 1x ̄⊺∥1
= θ∥x ̄(k) − x∗∥2 + αC
n + αL ̃
n ∥X†(k)∥1
≤ θ∥x ̄(k) − x∗∥2 + αC
n + αL ̃√d
n ∥X†(k)∥,
where the last inequality follows from norm equivalence.
Observe that given the bounds on α, we have σ2 ≤ θ =
q
1 − μ2α
n
2
L−α
n ≤ γ ≤ 1. Substituting ∥X †∥ from Lemma 4 into the above equation and considering linear gradient reduction (6) yields,
E [∥x ̄(k + 1) − x∗∥] ≤ E [∥ ̄x(0) − x∗∥]γk+1 + Cα
n(1−γ)
+
L ̄√dαE ∥X†(0)∥
n(γ − σ2) γk+1
+
L ̄α2√d
n
k
X
s=0
γ k−s
s−1
X
t=0
σs−1−t
2 (Dγt + B),
which upon further simplification reduces to:

E [∥x ̄(k+1)−x∗∥]
≤ E [∥x ̄(0) − x∗∥] +
L ̄√dαE ∥X†(0)∥
n(γ − σ2)
!
γ k+1
+ Cα
n(1 − γ) +
L ̄√dα2
n(1 − γ)
B γ − σ2
+D
γ.
As observed in the above result, the first term on the righthand side decays linearly to zero. In contrast, the second and third terms remain dependent on α. A similar pattern is evident in (7). Consequently, for any desired accuracy level, one can choose a sufficiently small ε such that E[∥xi(k) − x∗∥] ≤ ε for sufficiently large k. This concludes our analysis of the linear convergence of Algorithm 1. Next, we establish the gradient reduction at a linear rate property (6), which plays a crucial ro-
le in proving the linear convergence of our proposed algorithm. We now establish a series of lemmas, leading to the proof of the main theorem, which demonstrates that Algorithm 1 indeed achieves linear gradient reduction. Lemma 6: Let {xi(k), yi(k)} be the sequence generated by Algorithm 1. Then there exist constants β1, β2 > 0 such that the vector-valued function H(·) defined in (4) satisfies the following inequality:
∥H(X (k +1))−H(X (k))∥2 ≤ β1∥X (k +1)−X (k)∥2 +β2. Proof: Recall that from norm equivalence:
∥H(X (k+1))−H(X (k))∥2 ≤ ∥H(X (k+1))−H(X (k))∥1
≤
√ d
n
X
i=1
∥hi(xi(k + 1))−hi(xi(k))∥2
≤
√ d
n
X
i=1
(∥∇bi(xi(k + 1)) − ∇bi(xi(k))∥2 + 2C) .
Using Lipschitz-smoothness of bi(·), the above inequality can be further simplified to:
∥H(X (k + 1))−H(X (k))∥2
≤
√
dL ̄∥X(k + 1) − X(k)∥1 + 2C
√ d
≤ dL ̄
|{z}
β1
∥X(k + 1) − X(k)∥2 + 2C
√ d
| {z }
β2
,
which completes the proof. Lemma 7: Let Assumptions 1-3 hold. Consider the sequence {xi(k), yi(k)} generated by Algorithm 1 for all i ∈ V. Given γ ∈ (σ2, 1), let the step size α be chosen as
n
L ̄ + n
s
(σ2 +τ )2 − 1
μλ
+1
L ̄2 ≤ α ≤ n
L ̄ + n
s
γ2−1
μλ
+1
L ̄2 ,
where τ > 0 is a tuning parameter. Then, the following bound holds:
E[∥x ̄(k + 1) − x∗∥] ≤ β3θk+1 + β1
1−θ
+ αβ2θ
σ2(θ − σ2)
k−1
X
l=0
σk−l
2 E[∥Y †(l)∥],
where β3 > 0 is a constant, and θ is as defined in Lemma 5. Proof: Applying triangle inequality to the averaged dynamics yields:
∥ ̄x(k + 1) − x∗∥ ≤ x ̄(k)−x∗ − α
n
n
X
i=1
∇bi( ̄x(k))
+α
n
n
X
i=1
∥hi(xi(k))−∇bi(x ̄(k))∥,
which can be further simplified using Lemma 5 as:
∥ ̄x(k + 1) − x∗∥ ≤ θ∥x ̄(k) − x∗∥
+α
n
n
X
i=1
∥∇bi(xi(k))) − ∇bi(x ̄(k))∥ + ∥ξk
i∥
≤ θ∥x ̄(k) − x∗∥ + αC
n +α
n
L ̄ ∥X(k) − 1x ̄⊺∥1
| {z }
∥X †(k)∥
= θ∥x ̄(k) − x∗∥ + αC
n + αL ̄√d
n ∥X †(k)∥.
Iteratively expanding the above equation yields:
∥x ̄(k + 1) − x∗∥ ≤ θk+1∥ ̄x(0) − x∗∥ + β1
1−θ
+ β2
k
X
t=0
θk−t σt
2∥X†(0)∥ + α
t−1
X
l=0
σt−1−l
2 ∥Y †(l)∥
!
Rearranging the terms, the above inequality reads:
∥x ̄(k + 1) − x∗∥ ≤ ∥x ̄(0) − x∗∥ + β2∥X†(0)∥
θ − σ2
θk+1
+ β1
1 − θ + αβ2
k−1
X
l=0
σk−1−l
2 ∥Y †(l)∥
k
X
t=l+1
σ2 θ
t−k
≤ β3θk+1 + β1
1 − θ + αβ2θ
σ2 (θ − σ2)
k−1
X
l=0
σk−l
2 ∥Y †(l)∥,
which completes the proof. Lemma 8: Let Assumptions 1-3 hold. Let {xi(k), yi(k)} be the sequence generated by Algorithm 1 for all i ∈ V. Given γ ∈ (σ2, 1), and let the step size α be chosen as
n
L ̄ + n
s
(σ2 + τ )2 − 1
μ +1
L ̄2 ≤ α ≤ n
L ̄ + n
s
γ2−1
μ +1
L ̄2 ,

where τ > 0 is a tuning parameter. Then, the following bound holds:
E[∥X(k+1)−X(k)∥2] ≤ β4θk +αE[∥Y †(k)∥]+ 2nβ1
√d
1−θ
+β5
k−1
X
t=0
θk−1−tE[∥Y †(t)∥],
where β4, β5 > 0 are appropriate constants and β1 is as defined in Lemma 6. Proof: The proof follows a similar approach, utilizing the triangle inequality, as in:
∥X(k+1)−X(k)∥ ≤ ∥X†(k+1)∥ + ∥X†(k)∥
+ ∥1x ̄⊺(k+1)−1x∗⊺∥ + ∥1 ̄x⊺(k)−1x∗⊺∥
≤ σk+1
2 ∥X†(0)∥ + α
Xk
t=0 σk−t
2 ∥Y †(t)∥ + σk
2 ∥X†(0)∥
+α
k−1
X
t=0
σk−1−t
2 ∥Y †(t)∥ + ∥1x ̄⊺(k + 1) − 1x∗⊺∥1
+ ∥1x ̄⊺(k)−1x∗⊺∥1,
where the last inequality follows from Lemma 4. Rearranging the terms and applying Lemma 7 yields:
∥X(k + 1)− X(k)∥ ≤ 2σk
2 ∥X†(0)∥ + α∥Y †(k)∥
+ 2α
Xk−1
t=0 σk−1−t
2 ∥Y †(t)∥ + 2n
√
dβ3θk + 2n√dβ1
1−θ
+ n√dαβ2θ
σ2 (θ − σ2)
k−1
X
l=0
σk−l
2 ∥Y †(l)∥
≤ 2σk
2 ∥X†(0)∥ + α∥Y †(k)∥ + 2α
Xk−1
t=0 σk−1−t
2 ∥Y †(t)∥
+ 2n
√
dβ3θk + 2n√dβ1
1 − θ + n√dαβ2θ
(θ − σ2) ∥Y †(k − 1)∥
+ 2n√dαβ2θ
σ2 (θ − σ2)
Xk−2
l=0 σk−1−l
2 ∥Y †(l)∥,
which can be further simplified as:
∥X(k+1)−X(k)∥ ≤ θk 2∥X†(0)∥ + 2n
√
dβ3
+ α∥Y †(k)∥ + 2α
k−1
X
t=0
θk−1−t∥Y †(t)∥ + 2n√dβ1
1−θ
+ 2n√dαβ2θ
σ2 (θ − σ2)
k−1
X
l=0
θk−1−l∥Y †(l)∥
≤ β4θk + α∥Y †(k)∥ + 2nβ1
√d
1 − θ + β5
k−1
X
t=0
θk−t∥Y †(t)∥.
Taking expectation on both sides completes the proof. Lemma 9: Let Assumptions 1-3 hold. Let {xi(k), yi(k)} be the sequence generated by Algorithm 1 for all i ∈ V, and let the conditions in Lemma 8 hold. Then, the vectorvalued function H(·) defined in (4) satisfies the following
inequality:
E[∥H(X(k+1))−H(X(k))∥] ≤ β7θk + L ̄dαE[∥Y †(k)∥]
+β6 + η
k−1
X
t=0
θk−1−tE[∥Y †(t)∥],
where β6, β7, and η > 0 are appropriate constants.
Proof: The proof follows directly from Lemmas 6-8:
∥H(X(k+1))−H(X(k))∥ ≤ dL ̄∥X(k+1)−X(k)∥+2C
√ d
≤ L ̄dβ4
| {z }
:=β7
θk + L ̄dα∥Y †(k)∥ + 2nL ̄dβ1
√d
1−θ +2
√
dC
| {z }
:=β6
+ L ̄dβ5
| {z }
:=η
k−1
X
t=0
θk−1−t∥Y †(t)∥,
where the last inequality follows from Lemma 8.
We now proceed to discuss the linear rate of the gradient reduction, i.e., (6) can be achieved by Algorithm 1. This will complete our analysis for the linear convergence.
Theorem 2: Let Assumptions 1-3 hold. Let {xi(k), yi(k)} be the sequence generated by Algorithm 1 for all i ∈ V. In addition, given some constant
γ∈
q
1 − μ2
L ̄2 , 1 and a tuning parameter τ > 0,
let the step size satisfy the condition in Theorem 1. Then there exist constants B, D > 0 such that the sequence {yi(k)} satisfies E[∥Y †(k)∥] ≤ Dγk + B.
Proof: Observe that the step size α satisfies the bound in Theorem 1, implying θ ∈ (σ2, 1). In addition, it can be
shown that σ2 + L ̄dα < θ < 1 with some proper choice of τ . From the definition of Y †, it follows that:
E ∥Y †(k + 1)∥ ≤ σ2E ∥Y †(k)∥
+ E [∥H(X(k + 1)) − H(X(k))∥]
(Lemma 9)
≤ (σ2 +L ̄dα)E ∥Y †(k)∥ +β7θk +β6 +η
k−1
X
t=0
θk−tE ∥Y †(t)∥
≤ (σ2 + L ̄dα)k+1E ∥Y †(0)∥ + β8
1−σ2 −L ̄α
+η
k
X
t=0
(σ2 + L ̄α)k−t
t−1
X
l=0
θt−lE ∥Y †(l)∥
≤ (σ2 + L ̄dα)k+1E ∥Y †(0)∥ + β8
1−σ2 −L ̄dα
+ ηθ
θ−σ2 −L ̄dα
k−1
X
t=0
E ∥Y †(t)∥ θk−t, (9)
where the last inequality follows from:

k
X
t=0
(σ2 + L ̄dα)k−t
t−1
X
l=0
θt−lE ∥Y †(l)∥
= (σ2 + L ̄dα)k
k−1
X
l=0
E ∥Y †(l)∥ θ−l
k
X
t=l+1
θ
σ2 + L ̄dα
t
≤θ
θ − σ2 − L ̄dα
k−1
X
l=0
E ∥Y †(l)∥ θk−l
Let r(k − 1) = Pk−1
t=0 θ−tE ∥Y †(t)∥ . Then r(k) is a non-decreasing, non-negative function with r(−1) = 0. In addition, from (9) and using a proper choice of constants β9, β10 we have
E ∥Y †(k + 1)∥ ≤βk+1
9 E ∥Y †(0)∥ + β10
+η
θ−σ2 −L ̄dα θk+1r(k − 1). (10)
We now provide an upper bound for r(k). Consider:
r(k) − r(k−1) = θ−kE ∥Y †(k)∥
≤ θ−k βk
9 E ∥Y †(0)∥ + β10 + η
θ−σ2 −L ̄dα θkr(k−2)
≤ E ∥Y †(0)∥ + β10θ−k + η
θ − σ2 − L ̄dα r(k − 2),
which since r(−1) = 0, can be simplified to:
r(k) ≤ E ∥Y †(0)∥ +β10θ−k + η
θ−σ2 −L ̄dα +1 r(k−1)
≤ E ∥Y †(0)∥
Xk−1
t=0 1 + η
θ−σ2 −L ̄dα
t
+ β10
Xk−1
t=0 θ−k+t 1 + η
θ−σ2 −L ̄dα
t
. (11)
For the given bounds on α, one can show that
θ 1+ η
θ − σ2 − L ̄dα ≤ 1. (12)
Thus, from (11) and (12), it follows that:
r(k) ≤ θ−k
1 − θ E[∥Y †(0)∥] + β11θ−k. (13)
Substituting (13) into (10) yields:
E[∥Y †(k + 1)∥] ≤ γk+1E[∥Y †(0)∥] + β10
+ ηθ2
θ − σ2 − L ̄dα
E[∥Y †(0)∥]
1 − θ + β11 ,
which completes the linear convergence analysis.
IV. NUMERICAL EXPERIMENTS
We evaluate the performance of the proposed BDASG algorithm on two problem settings: (i) the Distributed Sensor Network problem, and (ii) the Distributed Linear Regression problem with rank-deficient data. The first experiment is conducted over 150-node randomly connected network, while for the second experiment two distinct network topologies are considered: a ring graph and a star graph. For both cases,
we employ the Metropolis weighting scheme to construct the adjacency matrix of the communication graph.
aij =



1
1+max{di,dj } if i ̸= j,
1−P
j̸=i aij if i = j
,
where di is the number of neighbors for agent i.
Distributed Sensor Network Problems: The problem is formulated as the following unconstrained optimization task:
min
x∈Rd
n
X
i=1
∥zi − Hix∥2
2,
where Hi ∈ Rm×d represents the measurement matrix, and zi ∈ Rm denotes the noisy observation at the i-th sensor. The secondary objective function is given by
n
X
i=1
∥x∥2.
In our implementation, we set the regularization parameter to λ = 0.01 and the learning rate to γ = 0.01. Stochastic gradients are employed in the simulation, incorporating noise sampled from a normal distribution with mean 0 and standard deviation 0.01. The matrices Hi and vectors zi are randomly generated with parameters n = 150, d = 30, and m = 1. The experiment is repeated 50 times using the same Hi and zi, and we report the average results (Figure 1b) to assess the performance of the algorith-
m in expectation. we evaluate the algorithm’s performance using the error metric ∥x ̄ −x∗∥, where x ̄ represents the average of the agents’ local estimates, and x∗ is the centralized optimal solution.
Distributed Linear Regression with Rank Deficiency: We assess the performance of the BDASG algorithm in solving a Lasso regression problem. The objective is to solve the following regularized ill-posed problem:
min
x∈Rd
n
X
i=1
∥Aix − bi∥2
2 + λ∥x∥1,
where Ai ∈ Rm×d represents the local measurement matrix of the i-th agent, and bi ∈ Rm is the corresponding observation. To introduce ill-conditioning, one agent is assigned a rank-deficient matrix Ai. For our implementation, we set the regularization parameter to λ = 0.1 and the learning rate to γ = 0.001. The network topology is modeled using both a ring graph and a star graph, with the adjacency matrix constructed using the Metropolis weighting scheme. Once again, stochastic gradients are utili-
zed, with noise sampled from a normal distribution with mean 0 and standard deviation 0.001. We generate Ai and bi randomly for n = 9 agents, with d = 3 and m = 3. The experiment runs for 2000 iterations, and we evaluate the algorithm’s performance using the error metric ∥ ̄x − x∗∥, where x ̄ represents the average of the agents’ local estimates, and x∗ is the centralized optimal solution obtained via the proximal gradient method. The results are presented in Figures 1c and d.

(a) (b)
(c) (d)
Fig. 1: Plots for Distributed sensor network problem on 150-node network – (a) network topology, (b) convergence behavior. Plots for distributed linear regression with rank deficiency problem on (c) star graph, and (d) ring graph, respectively.
V. CONCLUSIONS
In this work, we address the problem of bilevel distributed optimization by proposing the BDASG algorithm, which achieves linear convergence under minimal assumptions. Our theoretical analysis establishes that BDASG ensures convergence when the global objective function is strongly convex, without requiring convexity of individual functions. Furthermore, we conjecture that the algorithm remains effective under the weaker PL condition, suggesting broader applicability. Our findings have significant-
 implications for large-scale distributed optimization, particularly in scenarios where individual objective functions lack strong convexity.
REFERENCES
[1] F. Yousefian, “Bilevel distributed optimization in directed networks,” in 2021 American Control Conference (ACC), 2021, pp. 2230–2235. [2] Q. Hu and X. Shao, “Smooth finite-time fault-tolerant attitude tracking control for rigid spacecraft,” Aerospace Science and Technology, vol. 55, pp. 144–157, 2016. [3] A. Nathan and D. Klabjan, “Optimization for large-scale machine learning with distributed features and observations,” in Machine Learning and Data Mining in Pattern Recognition: 13th Interna-
tional Conference, MLDM 2017, New York, NY, USA, July 15-20, 2017, Proceedings 13. Springer, 2017, pp. 132–146.
[4] J. N. Tsitsiklis, “Problems in decentralized decision making and computation,” Ph.D. dissertation, Massachusetts Institute of Technology, 1984. [5] A. Nedi ́c and A. Ozdaglar, “Subgradient methods for saddle-point problems,” Journal of optimization theory and applications, vol. 142, pp. 205–228, 2009. [6] W. Shi, Q. Ling, G. Wu, and W. Yin, “Extra: An exact first-order algorithm for decentralized consensus optimization,” SIAM Journal on Optimization, vol. 25, no. 2, pp. 944–966, 2015. [7] S. P-
u and A. Nedic ́, “Distributed stochastic gradient tracking methods,” Mathematical Programming, vol. 187, no. 1, pp. 409–457, 2021. [8] S. Boyd, N. Parikh, E. Chu, B. Peleato, J. Eckstein et al., “Distributed optimization and statistical learning via the alternating direction method of multipliers,” Foundations and Trends® in Machine learning, vol. 3, no. 1, pp. 1–122, 2011. [9] G. Scutari and Y. Sun, “Distributed nonconvex constrained optimization over time-varying digraphs,” Mathematical Program-
ming, vol. 176, pp. 497–544, 2019. [10] S. Pu, W. Shi, J. Xu, and A. Nedi ́c, “Push–pull gradient methods for distributed optimization in networks,” IEEE Transactions on Automatic Control, vol. 66, no. 1, pp. 1–16, 2020. [11] D. Han, K. Liu, Y. Lin, and Y. Xia, “Distributed adaptive gradient algorithm with gradient tracking for stochastic non-convex optimization,” IEEE Transactions on Automatic Control, 2024.
[12] T. Vu, “Convex optimization notes,” April 2017, accessed: February 5, 2025. [Online]. Available: https://trungvietvu.github.io/notes/2017/ConvexOptimization [13] T. T. Doan, “Aggregating stochastic gradients in distributed optimization,” in 2018 Annual American Control Conference (ACC). IEEE, 2018, pp. 2170–2175.

---

## Processing Information

- **Processing Library:** Zotero PDFWorker
- **Processing Date:** 2026-02-10T18:14:15.725Z
- **Text Length:** 31109 characters
- **Success:** Text extraction completed
- **PDF Library Used:** Zotero PDFWorker
- **Pages Processed:** 8 of 8
