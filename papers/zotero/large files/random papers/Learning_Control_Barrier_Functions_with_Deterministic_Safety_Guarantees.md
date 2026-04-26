# PDF Document: Strong et al. - 2025 - Learning Control Barrier Functions with Deterministic Safety Guarantees.pdf

**File Path:** Strong et al. - 2025 - Learning Control Barrier Functions with Deterministic Safety Guarantees.pdf

**Processed Date:** 2026-02-10T18:17:10.501Z

**File Size:** 972.71 KB

**Total Pages:** 19

**Extracted Pages:** 19

**PDF Library:** Zotero PDFWorker

**Attachment Item ID:** 3251

**Title:** Learning Control Barrier Functions with Deterministic Safety Guarantees

**Collection:** Large Files > Random Papers

---

## Extracted Text Content

Proceedings of Machine Learning Research vol vvv:1–19, 2026
Learning Control Barrier Functions with Deterministic Safety
Guarantees
Amy K. Strong AKS121@DUKE.EDU and Leila J. Bridgeman LJB48@DUKE.EDU Department of Mechanical Engineering and Materials Science at Duke University, Durham, NC, 27708, USA
Ali Kashani FWW9BA@VIRGINIA.EDU School of Data Science at the University of Virginia, Charlottesville, VA, 22903, USA
Claus Danielson CDANIELSON@UNM.EDU Department of Mechanical Engineering at the University of New Mexico, Albuquerque, NM, 87131, USA
Abstract
Barrier functions (BFs) characterize safe sets of dynamical systems, where hard constraints are never violated as the system evolves over time. Computing a valid safe set and BF for a nonlinear (and potentially unmodeled), non-autonomous dynamical system is a difficult task. This work explores the design of BFs using data to obtain safe sets with deterministic assurances of control invariance. We leverage ReLU neural networks (NNs) to create continuous piecewise affine (CPA) BFs with deterministic-
 safety guarantees for Lipschitz continuous, discrete-time dynamical system using sampled one-step trajectories. The CPA structure admits a novel classifier term to create a relaxed BF condition and construction via a data driven constrained optimization. We use iterative convex overbounding (ICO) to solve this nonconvex optimization problem through a series of convex optimization steps. We then demonstrate our method’s efficacy on two-dimensional autonomous and non-autonomous dynamical systems. K-
eywords: Control barrier functions, control invariant sets, data driven, safety of dynamical systems, neural networks, continuous piecewise affine functions
1. Introduction
An invariant set is a region of the state space where a dynamical system remains in perpetuity – either autonomously via the dynamics alone or non-autonomously through admissible control inputs. When an invariant set is a subset of the state constraint set (S ⊆ X ), it is a “safe set", i.e., a region where constraints will never be violated. While methods exist for data driven safe set determination, they often approximate the safe set (Korda, 2020) or provide probabilistic guarantees of invarianc-
e (Wang and Jungers, 2020). A BF is a scalar function of state variables whose zero superlevel or sublevel set denotes the safe set (Ames et al., 2016). The system must satisfy a BF condition that modulates system evolution over time to ensure the state trajectories always remain within the safe set, i.e. ensure invariance. The BF condition takes the form of an inequality constraint that must be held for all states in the state constraint set, (∀x ∈ X ). Synthesizing a BF for a given system and it-
s constraints is often a difficult, system-dependent process. As the control community moves towards developing model-free designs, it is crucial we develop model-free methods to assure safety. This work explores the design of BFs using data to obtain safe sets with deterministic assurances of control invariance.
© 2026 A.K. Strong, L.J. Bridgeman, A. Kashani & C. Danielson.
arXiv:2511.20463v1 [eess.SY] 25 Nov 2025

STRONG BRIDGEMAN KASHANI DANIELSON
1.1. Related Work
Often, in data driven BF synthesis, the safe set is assumed to be fully (Robey et al., 2020; Dawson et al., 2023) or partially known (Qin et al., 2021; Anand and Zamani, 2023; Nejati and Zamani, 2023). However, in practice, the safe sets are often unavailable. Recent data-driven literature is aligned to find both the safe set and corresponding BF (Kashani and Danielson, 2025; Liu and Fitzsimmons, 2025; So et al., 2024). The BF is typically modeled as a parameterized function, such as linear functi-
on (Saveriano and Lee, 2019), polynomial (Nejati and Zamani, 2023; Lefringhausen et al., 2025), or NN (Jin et al., 2020; Qin et al., 2022; Anand and Zamani, 2023; Mathiesen et al., 2023; Edwards et al., 2024), where the aim is to learn the parameters that enforce the BF condition. It is often difficult to ensure deterministic safety guarantees in data driven settings, i.e., adherence of BF condition for the unseen states. Specifically, the BF condition for a NN BF is often imposed as a soft constr-
aint in the loss function. Guarantees of enforcing the BF condition are shown probabilistically (Qin et al., 2021). Alternatively, verification of BF is performed after synthesis (Edwards et al., 2024). Satisfiability modulo theory (SMT) methods can verify the NN adheres to the BF conditions using an iterative learner verifier architecture (Edwards et al., 2024; Peruffo et al., 2021). Arguably, the most popular one-shot method is ε−net coverage (Robey et al., 2020; Anand and Zamani, 2023), where t-
he density of samples and the Lipschitz continuity of the BF and dynamical system are leveraged for deterministic guarantees of safety.
1.2. Contributions
Our work extends the field of BF synthesis by learning both a BF and its corresponding safe set for any Lipschitz continuous, discrete-time dynamical system from one-step state transition samples. We first develop a necessary and sufficient BF condition for discontinuous BFs that uses a discontinuous classifier function to determine the invariance condition applied to each state within the state constraint set. We then leverage this condition to develop a nonconvex optimization program that simult-
aneously learns a rectified linear unit (ReLU) neural network (NN) barrier function and its classifier function. We implement the non-convex optimization method, iterative convex overbounding (ICO) (de Oliveira et al., 2000; Warner and Scruggs, 2017; Sebe, 2018), to efficiently find the BF – guaranteeing convergence of the problem to some local minima. Finally, we develop a method to prompt additional sampling, if possible, to maximize the volume of the safe set while maintaining the feasibility o-
f the learning problem. A key advancement of our work is the way the ReLU NN BF are learned. Enforcing the BF condition would require constrained gradient descent techniques through iterative approaches, which may render the problem infeasible. However, a ReLU NN is a CPA function (Arora et al., 2016). Instead of learning and verifying the NN weights layer-by-layer, we directly learn the continuous piecewise affine (CPA) function through an optimization problem. This change in perspective allows u-
s to benefit from the simplicity of ReLU NNs while verifying BF conditions. Further, the local structure of the CPA function can be leveraged to require less data density than ε-net methods.
Notation and Preliminaries
The notation Zba (Zb ̄a ̄) denotes the set of integers between a and b inclusive (exclusive), and Rba (Rb ̄a ̄) denotes the set of real numbers between a and b inclusive (exclusive). The interior, boundary, and closure of the set Ω ⊂ Rn are denoted as Ω◦, δΩ and Ω ̄ , respectively. The notation Rn denotes the set of all compact subsets satisfying i) Ω◦ is connected and ii) Ω =  ̄Ω◦.
2

LEARNING CONTROL BARRIER FUNCTIONS
Scalars, vectors, and matrices are denoted as x, x, and X, respectively. The mapping g : X → Y between two metric spaces is said to be a Lipschitz mapping if there is some Lipschitz constant, L > 0, such that ∥g(p) − g(q)∥ ≤ L ∥p − q∥ for all points p and q in X (Fitzpatrick, 2009). Let gk indicate that a mapping has been applied k times, where k ∈ Z0∞. Let φ : R0∞ → R0∞ be a class K function if it is continuous, strictly increasing, and φ(0) = 0. A set S is control invariant (CI) under the dynami-
cs of (1) if, ∀x0 ∈ S, there exists uk ∈ U such that g(xk, uk) ∈ S for k ∈ Z0∞ (Borrelli et al., 2017). Here, a safe set refers to a constraint admissible CI set, i.e., a CI set that is a subset of the state constraint set (S ⊆ X ).
2. Problem Statement and Preliminaries
Consider the discrete dynamical system,
x+ = g(x, u), x ∈ X , u ∈ U , (1)
where g : Rn × Rm → Rn, X ⊂ Rn and U ⊂ Rm are the state and input constraint sets, respectively. This paper aims to compute a BF, W : X → R and corresponding safe set, S ⊆ X , from a sampled data set of N M one-step mappings produced by (1), i.e. D = {xz, {uz,k, x+
z,k }M
k=1}zN=1,
where a state, xz, may be repeatedly sampled with multiple inputs {uz,k}M
k=1. One-step trajectories allow for flexible sampling strategies; D can be stochastically or deterministically sampled and can easily incorporate multi-step trajectories. We use Lipschitz continuity to extrapolate system behavior from data points to nearby regions without a model. Many methods have been proposed to estimate the Lipschitz constant from data (Huang et al., 2023; Nejati and Zamani, 2023; Wood and Zhang, 1996; Strongin, 1973; Sergeyev, 1995), making this a reasonable assumption in a -
data-driven context.
Assumption 1 The system (1) is locally Lipschitz continuous on X × U. Moreover, there exists a known (but not necessarily tight) Lipschitz constant L > 0 with respect to the Euclidean norm ∥·∥2.
2.1. Barrier Functions and Safe Sets
BFs are scalar functions that denote a safe set of a system via a sublevel set. In (Ahmadi et al., 2019, Theorem 1), necessary and sufficient conditions for invariance were found for continuous BFs.
Definition 1 (Ahmadi et al., 2019, Definition 2) For (1), the continuous function W : Rn → R is a discrete time barrier function for the set S := {x ∈ X | W (x) ≥ 0} ⊆ X ⊂ Rn if there exists k : X → U and γ ∈ class K and satisfying γ(r) < r for all r > 0 such that if u(x) = k(x) then
W (x+) − W (x) ≥ −γ(W (x)), ∀x ∈ X . (2)
In the following lemma, we extend these necessary and sufficient conditions of invariance to discontinuous W and γ. Further, we consider non-autonomous systems by considering viable u ∈ U that produce x+ where (2) holds.
Lemma 2 Consider the (1) and let Assumption 1 hold. Define the function γ : R × Rn → R, where γ(0, x) = 0 and ⟨γ(y, x), y⟩ ≥ 0 for all y ∈ R, x ∈ Rn. For W : X → R, the set S := {x ∈ X | W (x) ≤ 0} ⊆ X is a safe set if and only if there exists u ∈ U and γ such that
W (g(x, u)) − γ(W (x), x) ≤ 0, ∀x ∈ X . (3)
3

STRONG BRIDGEMAN KASHANI DANIELSON
Proof First, we show sufficiency. Because ⟨γ(y, x), y⟩ ≥ 0, γ always has the same sign as its argument. Let (3) hold for all x ∈ X for u = 0 (autonomous systems) or for a viable u ∈ U for each x ∈ X (non-autonomous systems). If W (x) ≤ 0, then γ(W (x), x) ≤ 0 and W (g(x, u)) ≤ 0. By definition, S is a safe set. To show necessity, note that if S := {x ∈ X | W (x) ≤ 0} is a safe set, then the proximal function of W satisfies the required conditions. To see why, let
γ(W (x), x) = Π(W (x)) =
(
0 if W (x) ≤ 0
∞ if W (x) > 0. (4)
Then W (x) = 0 implies x ∈ S, so γ(0, x) = 0. Further, ⟨γ(y, x), y⟩ = ⟨Π(y), y⟩ ≥ 0 because if y ≤ 0, then ⟨Π(y), y⟩ = ⟨0, y⟩ = 0, and if y > 0, then ⟨Π(y), y⟩ = ⟨∞, y⟩ = ∞ > 0. Finally, to show that (3) holds, consider first x ∈ S ⊆ X . In this case, there is a u ∈ U such that x, g(x, u) ∈ S, so W (g(x, u)) ≤ 0 = γ(W (x), x). If x ∈ X \ S, then W (g(x, u)) ≤ ∞ = γ(W (x), x).
Essentially, γ is a sign classifier. The least conservative choice of γ would be the proximal function of W , (4). However, the proximal function is not an appropriate choice for data driven scenarios, wherein we are trying to learn W and S. The crux of any data driven problem is extrapolating information from a data point to nearby unsampled regions. If the proximal function is used, then any data point at the boundary of S would have an infinite difference between itself and nearby states. Thus,-
 the challenge of this paper is to determine a useful γ to synthesize W using a finite data set. The function γ must classify a sampled point and the region around that sampled point.
2.2. CPA Functions
In this work, we assume the BF has a predetermined functional form, a CPA function. This is equivalent to the output of a ReLU NN (Arora et al., 2016; He et al., 2018), but the CPA representation will admit error bounds via Lemma 7 below that are crucial to our guarantees.
Definition 3 Affine independence (Giesl and Hafstein, 2014b): A collection of m vectors, {x0, x1, . . . , xm} ⊂ Rn, is affinely independent if x1 − x0, . . . , xm − x0 are linearly independent.
Definition 4 n - simplex (Giesl and Hafstein, 2014b): A simplex, σ, is defined as the convex hull of n + 1 affinely independent vectors, co{xj}n
j=0, where each vector, xj ∈ Rn, is a vertex.
Definition 5 Triangulation (Giesl and Hafstein, 2014b): Let T ={σi}mT
i=1∈Rn represent a finite collection of mT simplices, where the intersection of any two simplices is a face or an empty set.
Let T = {σi}mT
i=1, where σi = co({xi,j}n
j=0). All vertices of the triangulation T are denoted as ET .
Lemma 6 ((Giesl and Hafstein, 2014b, Remark 9)): Consider T ={σi}mT
i=1, where σi=co({xi,j}n
j=0),
and a set W={Wx}x∈ET ⊂R, where W (x)=Wx, ∀x ∈ ET . For simplex σi, let Xi ∈ Rn×n be a
matrix that has xi,j−xi,0 as its j-th row and W ̄ i ∈ Rn be a vector that has Wxi,j −Wxi,0, as its j-th
element. The function W (x)=x⊤X−1
i W ̄ i is the unique CPA interpolation of W on T for x ∈ σi.
Lemma 7 uses system dynamics to develop an error bound that characterizes the difference between the system evaluated at the vertices of a simplex and evaluated within the simplex.
4

LEARNING CONTROL BARRIER FUNCTIONS
Lemma 7 ((Baier et al., 2012, Proposition 4.1)): Let {xj}k
j=0 ⊂ Rn be affinely independent vec
tors. Define σ := co({xj}k
j=0), c = maxx,y∈σ ∥x − y∥ , and consider a convex combination
Pn
j=0 λjxj ∈ σ. If g : Ω → R is Lipschitz with constant L, then
g


n
X
j=0
λj xj

−
n
X
j=0
λjg(xj) ≤ Lc. (5)
3. CPA Barrier Function
With the established BF condition in Lemma 2, we now determine a specific functional for both the BF W and the decision function, γ, that is amenable to data driven learning using the data set of one-step trajectories, D = {xz, {uz,k, x+
z,k }M
k=1}zN=1. First, the BF W is characterized as a CPA
function over a triangulation,T ⊆ X , where the data samples {xz}zN=0 form the vertices of the triangulation. Here, W is affine on each simplex of the triangulation. In Theorem 8, the unique local structure of W is used to ensure the BF condition in the Lemma 2 is enforced. Note that W is both a CPA function and a ReLU NN. The advantage of directly learning the CPA function is that we can impose hard constraints on the function (Giesl and Hafstein, 2014a). In contrast, learning a ReLU NN relies on-
 either soft constraints imposed in a loss function (Anand and Zamani, 2023) or verification of constraint adherence after training (Zhang et al., 2024). Next, we define γ as a piecewise linear function, γ(y, x) = γiy, where γi ≥ 0 is constant on each simplex of the triangulation, σi ∈ T . Condition (3) from Lemma 2 becomes
min
k∈ZM
1
W (x+
i,j,k) − γiW (xi,j) ≤ 0, (6)
where xi,j defines a vertex in T (i ∈ ZmT
1 , j ∈ Z0n). Because there are many potential successor
states {x+
i,j,k }M
k=1 based on the input samples associated with each state, {ui,j,k}M
k=1, the successor state that minimizes (6) is chosen. A single input sample per sampled state is allowable as well. Thus, on each simplex σi ∈ T , the nearby data samples of {xi,j}n
j=0 that make up the vertices of σi are used to inform the BF condition applied to all x ∈ σi. Condition (6) provides a conservative approximation of the proximal function, (4). The selection of γi is also inherently tied to the sign of W (xi,j) at the vertex points, {xi,j}n
j=0. If W (xi,j) is negative for all j ∈ Z0n, then γ ∈ R10 provides
the least conservative BF condition. If W (xi,j) is positive for all j ∈ Z0n, then γ ∈ R∞
1 allows for the system to have less constrained evolution over time. For simplices with a mix of positive and negative W (xi,j) at the vertices, whichever γ ∈ R∞
0 that provides a feasible condition is used. In Theorem 8, the specific forms of W and γ are used to develop conditions for a CPA barrier function. Later, an optimization problem is developed to learn both W and γ, while maximizing the volume of the safe set.
Theorem 8 Consider (1), and let Assumption 1 hold. Let U be a convex set. Let the data set D = {xz, {uz,k, x+
z,k }M
k=1}zN=1 be N M one step trajectories generated by (1) in (X , U ). Let T =
{σi}mT
i=1 ⊆ X be a triangulation over {xz}zN=0. Let γ = {γi}mT
i=1 ⊂ R. Let W = {Wx}x∈ET ⊂ R,
where W : Rn → R is the CPA interpolation of W on T for any x ∈ σi. Define the W ̄ as
W ̄ =
(
W (x) ∀x ∈ T
ε ∀x ∈/ T , (7)
5

STRONG BRIDGEMAN KASHANI DANIELSON
where ε ∈ R∞
0 . Let W ̄ satisfy
W ̄ (x) ≥ ε, ∀x+ ∈/ T , (8a)
W (x) ≥ −ρ, ∀x ∈ ET , (8b)
|∇W ̄ i| ≤ b, ∀i ∈ ZmT
1 , (8c)
min
k∈ZM
1
W ̄ (x+
i,j,k) − γiW (xi,j) + bLgci < 0, ∀i ∈ ZmT
1 , ∀j ∈ Zn
0 , (8d)
γi ≥ 0, ∀i ∈ ZmT
1 (8e)
where Lg is the Lipschitz constant of (1) and ∇W (x) = ∇Wi for x ∈ σi. Moreover, ρ ∈ R∞
0 and
ci ≥ max
r,s∈Zn
0
xi,r
ui,r
− xi,s
ui,s 2
, (9)
where ui,r and ui,s depend on the minimization in (8d). Then, the sublevel set S := {x ∈ X | W ̄ (x) ≤ 0} is a control invariant set. Further, because S ⊆ X , S is a safe set.
Proof Consider (3) and let γ(W (x)) = γiW (x), where γ(W (x)) = γiW (x) when x ∈ σi. By Constraint (8e), γiW (x) satisfies the condition ⟨γiW (x), W (x)⟩ ≥ 0 ∀W (x) ∈ X and ∀γi ∈ Γ. Therefore, the condition W ̄ (g(x, u)) − γiW (x) ≤ 0 is a specific instance of (3). Constraint (8d) then assures that this instance of (3) holds for all x ∈ T , which proven below.
By definition, any point x ∈ σi is some convex combination of the vertex points, i.e. x =
Pn
j=0 λjxi,j. Therefore, for any x ∈ σi the barrier condition can be expressed as
W ̄ (g(
n
X
j=0
λjxi,j, u∗)) −
n
X
j=0
λjγiW ̄ (xi,j) ≤ 0,
where Pn
j=0 λjγiW ̄ (xi,j) = γiW ̄ (Pn
j=0 λjxi,j) due to linearity of γiW (x) on a simplex. Here,
u∗ is some input which ensures the barrier condition holds. Consider Pn
j=0 λj W ̄ (g(xi,j , ui,j,k)),
where ui,j,k some sampled input. By adding and subtracting Pn
j=0 λjW ̄ (g(xi,j, ui,j,k)), the barrier condition is also equivalent to
n
X
j=0
λjW ̄ (g(xi,j, ui,j,k)) + W ̄ (g(
n
X
j=0
λjxi,j, u∗)) −
n
X
j=0
λjW ̄ (g(xi,j, ui,j,k)) −
n
X
j=0
λjγiW ̄ (xi,j) ≤ 0.
The expression is bounded above by
n
X
j=0
λjW ̄ (g(xi,j, ui,j,k)) + δ −
n
X
j=0
λjγiW (xi,j) ≤ 0,
where δ = W ̄ (g(Pn
j=0 λj xi,j , u∗))− Pn
j=0 λj W ̄ (g(xi,j , ui,j,k)) .
One valid candidate input is u∗ = Pn
j=0 λjui,j,k, which lies in the convex hull of ui,j,k ∈ U .
Therefore, δ = W ̄ (g(Pn
j=0 λj xi,j , Pn
j=0 λj ui,j,k)) − Pn
j=0 λjW ̄ (g(xi,j, ui,j,k)) . By (Giesl and
Hafstein, 2012) and (Strong and Bridgeman, 2024), this expression is bounded above by
6

LEARNING CONTROL BARRIER FUNCTIONS
b g(Pn
j=0 λj xi,j , Pn
j=0 λj ui,j ) − Pn
j=0 λj g(xi,j , ui,j,k)
2. Using Lemma 7,
b g(Pn
j=0 λj xi,j , Pn
j=0 λj ui,j,k) − Pn
j=0 λj g(xi,j , ui,j,k)
2
≤ bLci.
Therefore for any x ∈ σi and for the feasible input u∗ = Pn
j=0 λjui,j,k, W ̄ (g(x, u)) − γiW (x) is bounded above by (8d). By assumption, (8d) holds on each vertex of σi. By convexity of linear inequalities, it therefore holds across all x ∈ σi. Because (8d) is enforced across all σ ∈ T ⊆ X , (3) from Lemma 2 holds for all x ∈ T . By Lemma 2, S ⊆ T is an invariant set. Additionally, because T ⊆ X , S is constraint admissible and therefore, a safe set.
Remark 9 If the system is autonomous, Theorem 8 can simply consider ui = 0 for all i ∈ Z0N .
Constraint (8d) enforces the BF condition (3) of Lemma 2, with an additional error term on each vertex of the simplex, which results in (3) holding for all x ∈ X . This error term corresponds to those used in CPA Lyapunov function literature (Giesl and Hafstein, 2014a, Theorem 2.10). It is also reminiscent of methods that use sampled ε−nets to validate constraint adherence. For εnet methods, the maximum distance between sampled points, along with the Lipschitz continuity of the barrier function an-
d the dynamical system, are used to ensure that function conditions hold for all x ∈ X (Robey et al., 2020; Jin et al., 2020). In contrast, the triangulation, T , and the corresponding structure imposed on W in Theorem 8 allow local relationships between points to be considered (via (9)). As a result, Theorem 8 only requires dense sampling in regions where it needed to successfully impose constraints, while ε-net methods require uniform dense sampling across X inherently demanding more samples. Co-
nservatism is introduced in S through the incorporation of the error term in Constraint (3). This creates a limitation, as Theorem 8 is only capable of determining safe sets that are contractive at the boundary. Any set where a point on the boundary maps to the boundary again after application of (1) would immediately violate (8d).
3.1. Implementation via Iterative Convex Overbounding
An optimization problem is developed to learn the CPA BF, W = {Wx}x∈ET , the decision function
and Γ = {γi}mT
i=1 of system, while maximizing the volume of the safe set. The resulting problem is nonconvex due to the bilinearity of (8d). Therefore, we use ICO, a nonconvex optimization technique (Warner and Scruggs, 2017). ICO is often used in control design for problems with bilinear and polynomial design variables (Warner and Scruggs, 2017; Sebe, 2018; de Oliveira et al., 2000). In ICO, a design variable, X, is decomposed to X + δX, where X is constant and δX is a design variable. Any non-convexity involv-
ing δX is bounded above by convex constraints. Then, the new convex optimization problem is iteratively solved – updating X with the solved δX at each iteration. A benefit of ICO methods are their convergence guarantees. If an ICO problem begins with a feasible solution, then the objective function of the optimization problem will decrease monotonically each iteration – converging to a local minimum (Warner and Scruggs, 2017). Problem 1 describes a single iteration of ICO to solve conditions in Th-
eorem 8. The constant values of the BF, W = {W x}x∈ET and classifier function, Γ = {γi}mT
i=1, are assumed to be known from an initialization or a previous iteration of ICO. The aim is to determine δW and δΓ. Complexity is introduced in the ICO problem by the minimization in (8d), which is used to select the best input sample for a given state. In Problem 1, we assume a constant input across each
7

STRONG BRIDGEMAN KASHANI DANIELSON
simplex. We also assume there is some selection of inputs for each simplex {uk}mT
k=1 available from an initialization or a previous ICO iteration. The goal of Problem 1 then is to choose new inputs for each simplex, Ξ that improves the BF condition with respect to W, Γ, and Ξ, as seen in (12).
Problem 1 Let the data set D = {xz, {uz,k, x+
z,k }M
k=1}zN=1 be N M one-step trajectories generated
by (1) in (X , U ). Let Γ = Γ + δΓ = {γi = γi + δγi}mT
i=1 ⊂ R and Θ = {θx}x∈ET ⊂ R. Let
W = W + δW = {Wx = W x + δWx}x∈ET ⊂ R, where W : Rn → R is the CPA interpolation
of W on T for any x ∈ σi. Define the W ̄ as in (7). Finally, define Ξ = {ξi}mT
i=1 ⊂ Z1M and
Ξ = {ξi}mT
i=1 ⊂ Z1M , where (10) is satisfied for Ξ, W, and Γ. The convex optimization problem is defined as
min
δW,δΓ,b,Θ C
W ̄ (x) ≥ ε, ∀x+ ∈/ T , (10a)
W ̄ (x) ≥ −ρ, ∀x ∈ ET , (10b)
|∇W ̄ i| ≤ b, ∀i ∈ ZmT
1 , (10c)
M(x+
i,j,ξi , xi,j ) ⪯ θxi,j I, ∀i ∈ ZmT
1 , ∀j ∈ Zn
0 , (10d)
γi ≥ 0, ∀i ∈ ZmT
1 (10e)
θx ≥ 0, ∀x ∈ ET , (10f)
where
M(x+
i,j,ξi , xi,j ) =


W ̄ (x+
i,j,ξi ) − γiW (xi,j ) − δγiW (xi,j ) − γiδW (xi,j ) + bLgci,k δγi δW (xi,j ) ∗ −2 0 ∗ ∗ −2

 , (11)
ξi = arg min
ξ∈ZM
1
W ̄ (x+
i,j,ξ) ≤ W ̄ (x+
i,j,ξi
) ∀j ∈ Zn
0 , (12)
C is some convex cost function, ci = maxr,s∈Zn
0 ∥xi,r − xi,s∥2, and ε, ρ ∈ R>0 are equivalent to the values in Theorem 8.
Remark 10 For practical implementation, we use ξi = arg minξ∈ZM
1 maxj∈Zn
0 W (x+
i,j,ξ)−γiW (xi,j )+
bLgci rather than (12).
In Problem 1, the matrix (11) bounds the barrier condition (8d) above (see Section A.1). Here, M (xi,j, x+
i,j) is bounded above by the slack variable, θ(xi,j), rather than 0. The slack variables relax the barrier condition, allowing for a feasible initialization is found by iteratively minimizing Θ = {θx}x∈ET . Lemma 11 states the conditions for which the solution to Problem 1 produces a valid barrier function and safe set. The proof of Lemma 11 can be found in Section A.1.
Lemma 11 The solution of Problem 1 adheres to the conditions of Theorem 8 if ∄x ∈ ET such that θx > 0. Therefore, the CPA function, W , that satisfies Problem 1 is a barrier function and S := {x ∈ Rn | W (x) ≤ 0} is a valid safe set.
8

LEARNING CONTROL BARRIER FUNCTIONS
In Algorithm 1, Problem 1 is iteratively solved to determine a valid barrier function, W, decision function, Γ, and safe set, S. The cost function of Problem 1 aims to minimize the slack variables, Θ. Problem 1 is iteratively solved until all slack variables are zero and, as a result, a valid BF and safe set have been determined. Then, the cost function changes to minimizing all positive values of W, increasing the area of the safe set, S.
Corollary 1 If a valid initial barrier function is found by lines 2-7 of Algorithm 1, then Algorithm 1 will produce a valid barrier function, W , and the safe set, S.
When a valid initial barrier function can be found, Algorithm 1 will always produce a true safe set, S. However, note that the safe set S can be the null set if W (x) > 0 for all x ∈ X . Sections A.3 and A.4 detail the convergence properties of Algorithm 1 and the process of adding additional data during learning in Algorithm 1.
3.2. Computation Complexity
Modeling the BF as a CPA function allows us to exploit local properties of the function and ensure that the BF conditions hold for all x ∈ X . These benefits come at the cost of computation. First, we require a triangulation of the space over the vertex points created by the sampled points {xz}zN=1. Forming Delaunay triangulations becomes computationally difficult beyond 6 dimensions (Hornus and Boissonnat, 2008), but
Algorithm 1: ICO for BF synthesis Input: D
Initialize W and Γ (Section A.2); Set C = P
x∈ET θx in Problem 1;
∆C = ∞;
while ∃x ∈ ET s.t. θx > 0 and ∆C ≥ χ do
Solve Problem 1;
W = W + δW , Γ = Γ + δΓ; ∆C = C − Cprev; end if ∄x ∈ ET s.t. θx > 0 then Set C = P
x∈ET max(0, Wx),
∆C = ∞; Set Θ = 0; end while ∆C ≥ χ do
Solve Problem 1;
W = W + δW , Γ = Γ + δΓ; ∆C = C − Cprev; end Result: W, Γ, S
incremental algorithms can be used instead. Recent triangulation methods can handle up to 17 dimensions (Yadav et al., 2024). Problem 1 requires solving 2N + mT + 2mT n linear constraints and mT (n + 1) LMI constraints with matrix dimension 3 × 3 (this dimension is invariant to state dimension, etc) each iteration. We use interior point methods to solve the series of convex optimization problems that result from ICO, which has polynomial complexity (Vandenberghe and Boyd, 1996).
4. Numerical Experiments
Algorithm 1 was tested on a nonlinear autonomous system and a linear non-autonomous system. In Figures 1(a) and 1(c), respectively, the boundary of the safe set, W = 0, found by Algorithm 1 is denoted by the light blue line. Both systems are then compared to a model based method of determining safe sets. In 1(a), the safe set of the nonlinear system is compared to the largest level set of the Lyapunov function, V = (x(1))2 + (x(2))2. Here, the safe set found by Algorithm 1 actually has a larger vo-
lume than this model-based method. In 1(c), the safe set found is compared to the maximal CI set of the system, which is determined by model-based geometric methods (Herceg et al., 2013). Here, the volume of our safe set approaches that of the maximal CI set.
9

STRONG BRIDGEMAN KASHANI DANIELSON
The value of γ across on each simplex of the triangulation, T ⊆ X , is also shown for each system in Figures 1(b) and 1(d), where darker colors show that γ is near 0 and bright yellow denotes high values. In 1(b) in particular, it can be seen than γ approximates the proximal function (4).
For more details of the numerical experiments see Sections B and C. Additionally, results from a linear, autonomous system are shown in B.1 and results from implementing an adaptive sampling strategy are shown in B.3.
(a) Safe set of nonlinear autonomous system. (b) Values of γ across X for the nonlinear, autonomous system.
(c) Safe set of linear non-autonomous system. (d) Values of γ across X for the linear, nonautonomous system.
Figure 1: The resulting safe sets found for the nonlinear autonomous system 1(a) and the linear non-autonomous system 1(c). The safe set boundary is in blue, while safe sets found using model based methods are shown as green polygons. The values of γ across the triangulation T ⊆ X are shown for the nonlinear autonomous system 1(b) and linear non-autonomous system 1(d). Black denotes a minimal value of γ (near 0.1) and bright yellow denotes the maximal value of γ (ranging from 12.4 (1(b)) to 4.456 -
(1(d))).
10

LEARNING CONTROL BARRIER FUNCTIONS
Acknowledgments
This work was supported by NSF Grant No. 2303158.
References
Mohamadreza Ahmadi, Andrew Singletary, Joel W Burdick, and Aaron D Ames. Safe policy synthesis in multi-agent pomdps via discrete-time barrier functions. In 2019 IEEE 58th Conference on Decision and Control (CDC), pages 4797–4803. IEEE, 2019.
Aaron D Ames, Xiangru Xu, Jessy W Grizzle, and Paulo Tabuada. Control barrier function based quadratic programs for safety critical systems. IEEE Transactions on Automatic Control, 62(8): 3861–3876, 2016.
Mahathi Anand and Majid Zamani. Formally verified neural network control barrier certificates for unknown systems. IFAC-PapersOnLine, 56(2):2431–2436, 2023.
MOSEK ApS. MOSEK API for MATLAB, 2025.
Raman Arora, Amitabh Basu, Poorya Mianjy, and Anirbit Mukherjee. Understanding deep neural networks with rectified linear units. arXiv preprint arXiv:1611.01491, 2016.
Robert Baier, Lars Grüne, and Sigurður Freyr Hafstein. Linear programming based Lyapunov function computation for differential inclusions. Discrete and Continuous Dynamical Systems. Series B, 17(1):33–56, 2012.
Francesco Borrelli, Alberto Bemporad, and Manfred Morari. Predictive control for linear and hybrid systems. Cambridge University Press, 2017.
Charles Dawson, Sicun Gao, and Chuchu Fan. Safe control with learned certificates: A survey of neural Lyapunov, barrier, and contraction methods for robotics and control. IEEE Transactions on Robotics, 39(3):1749–1767, 2023.
Maurício C de Oliveira, Juan F Camino, and Robert E Skelton. A convexifying algorithm for the design of structured linear controllers. In Proceedings of the 39th IEEE Conference on Decision and Control (Cat. No. 00CH37187), volume 3, pages 2781–2786. IEEE, 2000.
Alec Edwards, Andrea Peruffo, and Alessandro Abate. Fossil 2.0: Formal certificate synthesis for the verification and control of dynamical models. In Proceedings of the 27th ACM International Conference on Hybrid Systems: Computation and Control, pages 1–10, 2024.
Patrick Fitzpatrick. Advanced calculus, volume 5. American Mathematical Soc., 2009.
Peter Giesl and Sigurdur Hafstein. Computation of lyapunov functions for nonlinear discrete time systems by linear programming. Journal of Difference Equations and Applications, 20(4):610640, 2014a.
Peter Giesl and Sigurður Hafstein. Construction of Lyapunov functions for nonlinear planar systems by linear programming. J. Math. Anal. Appl., 388(1):463–479, 2012.
11

STRONG BRIDGEMAN KASHANI DANIELSON
Peter Giesl and Sigurður Hafstein. Revised CPA method to compute Lyapunov functions for nonlinear systems. J. Math. Anal. Appl., 410(1):292–306, 2014b.
Juncai He, Lin Li, Jinchao Xu, and Chunyue Zheng. Relu deep neural networks and linear finite elements. arXiv preprint arXiv:1807.03973, 2018.
M. Herceg, M. Kvasnica, C.N. Jones, and M. Morari. Multi-Parametric Toolbox 3.0. In Proc. of the European Control Conference, pages 502–510, Zürich, Switzerland, 2013.
Samuel Hornus and Jean-Daniel Boissonnat. An efficient implementation of Delaunay triangulations in medium dimensions. PhD thesis, INRIA, 2008.
Julien Walden Huang, Stephen J Roberts, and Jan-Peter Calliess. On the sample complexity of lipschitz constant estimation. Transactions on Machine Learning Research, 2023.
Wanxin Jin, Zhaoran Wang, Zhuoran Yang, and Shaoshuai Mou. Neural certificates for safe control policies. arXiv preprint arXiv:2006.08465, 2020.
Ali Kashani and Claus Danielson. Data-driven invariant set for nonlinear systems with application to command governors. Automatica, 172:112010, 2025.
Milan Korda. Computing controlled invariant sets from data using convex optimization. SIAM Journal on Control and Optimization, 58(5):2871–2899, 2020.
Robert Lefringhausen, Sami Leon Noel Aziz Hanna, Elias August, and Sandra Hirche. Barrier certificates for unknown systems with latent states and polynomial dynamics using bayesian inference. arXiv preprint arXiv:2504.01807, 2025.
Jun Liu and Maxwell Fitzsimmons. Computing control lyapunov-barrier functions: Softmax relaxation and smooth patching with formal guarantees. arXiv preprint arXiv:2510.02223, 2025.
J. Löfberg. Yalmip : A toolbox for modeling and optimization in matlab. In In Proceedings of the CACSD Conference, Taipei, Taiwan, 2004.
Frederik Baymler Mathiesen, Simeon C. Calvert, and Luca Laurenti. Safety certification for stochastic systems via neural barrier functions. IEEE Control Systems Letters, 7:973–978, 2023. doi: 10.1109/LCSYS.2022.3229865.
Ameneh Nejati and Majid Zamani. Data-driven synthesis of safety controllers via multiple control barrier certificates. IEEE Control Systems Letters, 7:2497–2502, 2023.
Andrea Peruffo, Daniele Ahmed, and Alessandro Abate. Automated and formal synthesis of neural barrier certificates for dynamical models. In International conference on tools and algorithms for the construction and analysis of systems, pages 370–388. Springer, 2021.
Zengyi Qin, Kaiqing Zhang, Yuxiao Chen, Jingkai Chen, and Chuchu Fan. Learning safe multiagent control with decentralized neural barrier certificates. arXiv preprint arXiv:2101.05436, 2021.
Zengyi Qin, Dawei Sun, and Chuchu Fan. Sablas: Learning safe control for black-box dynamical systems. IEEE Robotics and Automation Letters, 7(2):1928–1935, 2022.
12

LEARNING CONTROL BARRIER FUNCTIONS
Alexander Robey, Haimin Hu, Lars Lindemann, Hanwen Zhang, Dimos V Dimarogonas, Stephen Tu, and Nikolai Matni. Learning control barrier functions from expert demonstrations. In 2020 59th IEEE Conference on Decision and Control (CDC), pages 3717–3724. Ieee, 2020.
Matteo Saveriano and Dongheui Lee. Learning barrier functions for constrained motion planning with dynamical systems. In 2019 IEEE/RSJ International Conference on Intelligent Robots and Systems (IROS), pages 112–119. IEEE, 2019.
Noboru Sebe. Sequential convex overbounding approximation method for bilinear matrix inequality problems. IFAC-PapersOnLine, 51(25):102–109, 2018.
Yaroslav D Sergeyev. An information global optimization algorithm with local tuning. SIAM Journal on Optimization, 5(4):858–870, 1995.
Oswin So, Zachary Serlin, Makai Mann, Jake Gonzales, Kwesi Rutledge, Nicholas Roy, and Chuchu Fan. How to train your neural control barrier function: Learning safety filters for complex input-constrained systems. In 2024 IEEE International Conference on Robotics and Automation (ICRA), pages 11532–11539. IEEE, 2024.
Amy K Strong and Leila J Bridgeman. Data driven verification of positive invariant sets for discrete, nonlinear systems. In 6th Annual Learning for Dynamics & Control Conference, pages 14771488. PMLR, 2024.
Amy K Strong, Samuel Akinwande, and Leila J Bridgeman. Adaptive meshing for CPA Lyapunov function synthesis. In 2025 IEEE 64th Conference on Decision and Control (CDC). IEEE, 2025. (under review).
RG Strongin. On the convergence of an algorithm for finding a global extremum. Eng. Cybernetics, 11:549–555, 1973.
Lieven Vandenberghe and Stephen Boyd. Semidefinite programming. SIAM review, 38(1):49–95, 1996.
Zheming Wang and Raphaël M Jungers. Scenario-based set invariance verification for black-box nonlinear systems. IEEE control systems letters, 5(1):193–198, 2020.
EC Warner and JT Scruggs. Iterative convex overbounding algorithms for bmi optimization problems. IFAC-PapersOnLine, 50(1):10449–10455, 2017.
Graham R Wood and BP Zhang. Estimation of the lipschitz constant of a function. Journal of Global Optimization, 8(1):91–103, 1996.
Anuarag Yadav, Rohit P Singh, and Philip A Wilsey. Resource efficient delaunay triangulation for higher dimensional topological studies. In 2024 IEEE International Conference on Data Mining Workshops (ICDMW), pages 341–348. IEEE, 2024.
Hongchao Zhang, Zhizhen Qin, Sicun Gao, and Andrew Clark. Seev: Synthesis with efficient exact verification for relu neural barrier functions. Advances in Neural Information Processing Systems, 37:101367–101392, 2024.
13

STRONG BRIDGEMAN KASHANI DANIELSON
Appendix A. Iterative Convex Overbounding
A.1. Proof of Lemma 11
Proof In Problem 1, Constraints (10a)-(10c) and (10e) are equivalent to Conditions (8a)-(8c) and (8e) in Theorem 8. When W (xi,j) = W (xi,j,ξi) + δW (xi,j,ξi) and γi = γi + δγi, Condition (8d) can be written as
W ̄ (x+
i,j,ξi ) − γiW (xi,j) − δγiW (xi,j) − γiδW (xi,j) − δγiδW (xi,j) + bLgci ≤ 0,
where δγiδW (xi,j) are bilinear design variables. By completion of the square, 1
2 (δγ2
i +δW (x2
i,j )) ≥ −δγiδW (xi,j). Therefore, the above expression can be bounded above by
W ̄ (x+
i,j,ξi ) − γiW (xi,j ) − δγiW (xi,j ) − γiδW (xi,j ) + 1
2 (δγ2
i + δW (x2
i,j)) + bLgci.
If the above equation is less than 0 (i.e. θx = 0), then Condition (8d) also holds. This inequality can be equivalently expressed as (11) by applying a Schur complement to the terms 1
2 δγ2
i and
1
2 δW (xi,j)2. Therefore, if W and Γ are solutions to Problem 1, then they also satisfy Theorem 8.
A.2. Initialization of ICO
For nonconvex optimization, convergence is only guaranteed to local optima. Thus, initialization can drastically affect results. Incorporating slack variables into Problem 1 allows for a smart initialization of the ICO problem. Initialization: All vertices x ∈ ET that have a corresponding x+ ∈ T are assigned Wx = −ρ for the CPA function, while all x ∈ ET with corresponding x+ ∈/ T are assigned Wx ≥ ε. The values of Γ are assigned γi = 0.1 when all vertices in a simplex σi have the value Wx = −ρ. O-
therwise, γi is assigned a value of 1. This initialization prioritizes having the largest area S possible.
A.3. Convergence properties of Algorithm 1
Theorem 12 then shows that the two optimization problems in Algorithm 1 will always converge to a local minima.
Theorem 12 Algorithm 1 converges to a local minimum of Problem 1 with C = P
x∈ET and
Problem 1 with C = P
x∈ET max(0, Wx).
Proof For the first iteration of lines 3-7, Problem 1 will produce a feasible solution by the following logic. The triangulation T ⊆ X and the function W is bounded, producing a finite ∇Wi at each simplex σi ∈ T . Thus, the design variable b will be finite. This fact, along with Assumption 1, the constraint that A ≥ 0, and the definition of W ̄ in (7), ensure that the matrix M (x+
i,j , xi,j,ξi ) is
always bounded above and can therefore be bounded above with some finite matrix, θ(xi,j)I. From there on, each iteration of lines 3-7 will inherit the feasibility of the previous problem as W + δW and Γ + δΓ are always feasible when δW and δΓ are zeros. Therefore, the cost function either decreases or remains the same. The cost function is bounded below (by (10f)), so the cost function will converge to a local minima.
14

LEARNING CONTROL BARRIER FUNCTIONS
When expanding the safe set of the barrier function (lines 8-16), the if statement on line 8 ensures that the initial W and Γ are feasible solutions to Problem 1 with Θ = 0. Once again, the new cost function is bounded by the bounds place on W in Problem 1. By the logic above, this section of the algorithm will also converge to a local optima.
A.4. Searching for additional data
As the BF and safe set are searched, we can add additional data points to facilitate either a feasible or improved solution. For initialization in ICO (lines 2-7) of Algorithm 1, this can be achieved by determining the simplex with the largest value of summed slack variables and adding a point to bisect the simplex using the longest edge bisection algorithm (Strong et al., 2025). When a valid barrier function is found, we can also add data points to the boundary of the barrier function – bisecting-
 all simplices where W passes through 0. In this way, our iterative algorithm selects regions of the state space that require denser sampling. To ensure feasibility of the solution, we add points so that the bisected simplices maintain the current barrier function. The added point will have a W value that is the midpoint between the two existing vertex points, and the new simplices will have an γ value than maintains the γ of the originator simplex.
Appendix B. Autonomous Systems: Numerical Results
B.1. Results
In addition to the results shown in Section 4, we also tested Algorithm 1 on a linear, autonomous system (described in Section B.2). Figure 2(a) shows the safe set found by Algorithm 1 in blue – compared to the maximal invariant set found by model based geometric methods (Herceg et al., 2013) (shown as a green polygon). Figure 2(b) shows the values of γ over each simplex of the triangulation, T ⊆ X , where a darker value indicates γ is closer to 0. Figure 3 shows the CPA BF found for the linear an-
d nonlinear autonomous. Each simplex of the triangulation T ⊆ X is mapped to an affine function.
B.2. Experimental details: Autonomous Systems
Algorithm 1 was tested on two autonomous dynamical systems: a linear system and a nonlinear system. The dynamical systems and related experimental details are described below.
• The autonomous linear system is described by the equation of motion
x+ = 0.22 0.4013
−0.5364 0.2109 x. (13)
The Lipschitz constant of the system, L, is 0.5837. The state constraint set considered was X = [−0.25, 1] × [−1, 0.25].
In order to produce the safe set in Figure 2(a) (and corresponding γ values in Figure 2(b)), a BF was synthesized using grid sampled one-step trajectories in X . A spacing of 0.0625 was used between each point, producing a data set with 441 one-step trajectories, i.e. {xz, xz+}441
i=1.
15

STRONG BRIDGEMAN KASHANI DANIELSON
(a) Linear autonomous system. (b) Value of γ across X .
Figure 2: The resulting safe sets found for the linear autonomous system 2(a) The safe set boundary is in blue, while the maximal safe set for the system as found by (Herceg et al., 2013) is in green. In 2(b), the value of γ are shown across the simplices of the triangualtion.
(a) Linear autonomous system. (b) Nonlinear autonomous system.
Figure 3: The resulting CPA barrier function found for the linear autonomous system 3(a) and nonlinear autonomous system 3(b) are shown. The high data density for the nonlinear system results in very small simplices, while the linear system’s BF was generated with much fewer data points.
16

LEARNING CONTROL BARRIER FUNCTIONS
Algorithm 1 found a feasible BF at the 34th iteration. Algorithm 1 then expanded that initial invariant set for an additional 9, 966 iterations with the final change in the cost between iteration being 1.7 × 10−5.
• The autonomous nonlinear system is described by
x+ = 0.5x(1) − 0.7(x(2))2
0.9(x(2))3 + x(1)x(2) . (14)
The Lipschitz constant of the system used was L = 4.05 and the state constraint set considered was X = [−1, 1] × [−1, 1].
To produce results in Figures 1(a) and 1(b), Algorithm 1 was applied to a data set of one-step trajectories. This data set was created by sampling one-step trajectories over a grid of 0.02 intervals covering X . This produced a total of 10, 201 one-step trajectories in the data set. Algorithm 1 required 12 iterations to determine a feasible BF and then iterated an additional 66 iterations to expand the set with the final change in the cost between iterations being 0.0597.
Algorithm 1 requires convex optimization, which is solved using Mosek version 9.3.13 (ApS, 2025) and YALMIP (Löfberg, 2004) in MATLAB. Solving Problem 1 (a single iteration of Algorithm 1) typically took between 1 and 110 seconds (depending on the data set size) with a maximum number of computational threads being 8.
B.3. Sampling during BF synthesis
Section A.4 provides guidelines for sampling during BF synthesis. Here, we provide brief results for the linear dynamical system (13).
The initial data set used to synthesize a BF was a grid sampling of one step trajectories over X = [−0.25, 1] × [−1, 0.25], where the sampling interval was 0.25. Additional data points were added when finding a feasible BF by determining the simplex with the highest summed slack variable and then adding an additional data point to bisect the simplex. During safe set expansion, additional data points were added along the current boundary of the safe set. Overall, 453 one step trajectores were used.
Figure 4 shows the safe set found in 4(a) and the corresponding values of γ on each simplex of the triangulation in 4(b). Note that the triangulation is no longer uniform across X . Instead, refinements are concentrated in certain regions – typically near the border of the safe set.
17

STRONG BRIDGEMAN KASHANI DANIELSON
(a) Linear autonomous system. (b) γ values across the triangulation.
Figure 4: In 4(a), the safe set found for the linear autonomous system when using adaptive sampling during Algorithm 1 is shown. The safe set boundary is in blue, which approaches the maximal safe set of the system (find via model based geometric methods (Herceg et al., 2013)), which is shown as the green polygon. In 4(b), the corresponding γ values across the triangulation are shown – with black representing a smaller value of γ near the minimum of 0.01 and yellow representing a higher value of γ-
 near the maximum of 14.45.
Appendix C. Non-Autonomous Systems: Numerical Results
Algorithm 1 was tested on a linear, non-autonomous dynamical system described by the equation
of motion
x+ = 0.22 0.4013
−0.5364 0.2109 x + 0
1 u. (15)
The state constraint set considered was X = [−0.25, 1] × [−1, 0.25] and U = [−1, 1]. The Lipschitz constant of the system with respect to x is 0.5837, and the Lipschitz constant with respect to u is 1. Because the B matrix is constant, the Lipschitz continuity of the system can be bounded as ∥Ax + Bu − Ay − Bw∥ ≤ ∥A∥ ∥x − y∥ + ∥B∥ ∥u − w∥ via application of the triangle inequality and the properties of matrix operator norms. The BF was synthesized using grid sampled one-step trajectories in X × U -
. A spacing of 0.0625 was used between each state. The inputs were sampled from −1 to 1 with an interval of 0.1. This results in the data set producing a data set with 441 × 21 one-step trajectories, i.e. D = {xz, {uz,k, x+
z,k }21
k=1}z44=11.
Algorithm 1 found a feasible BF at the 10th iteration. The safe set was then expanded for an additional 13 iterations, with minimal change in the cost function for the last 4 iterations. The CPA BF found for the non-autonomous linear system is shown in Figure 5.
18

LEARNING CONTROL BARRIER FUNCTIONS
(a) Linear non-autonomous system.
Figure 5: The CPA BF found for the linear, non-autonomous system is shown, where the function is affine on each simplex of the triangualtion.
19

---

## Processing Information

- **Processing Library:** Zotero PDFWorker
- **Processing Date:** 2026-02-10T18:17:10.501Z
- **Text Length:** 47217 characters
- **Success:** Text extraction completed
- **PDF Library Used:** Zotero PDFWorker
- **Pages Processed:** 19 of 19
