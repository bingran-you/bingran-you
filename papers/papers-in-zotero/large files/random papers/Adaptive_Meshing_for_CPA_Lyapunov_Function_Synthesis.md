# PDF Document: Strong et al. - 2025 - Adaptive Meshing for CPA Lyapunov Function Synthesis.pdf

**File Path:** Strong et al. - 2025 - Adaptive Meshing for CPA Lyapunov Function Synthesis.pdf

**Processed Date:** 2026-02-10T18:14:58.651Z

**File Size:** 786.11 KB

**Total Pages:** 7

**Extracted Pages:** 7

**PDF Library:** Zotero PDFWorker

**Attachment Item ID:** 3303

**Title:** Adaptive Meshing for CPA Lyapunov Function Synthesis

**Collection:** Large Files > Random Papers

---

## Extracted Text Content

Adaptive Meshing for CPA Lyapunov Function Synthesis*
Amy K. Strong1, Samuel Akinwande2, and Leila J. Bridgeman1
Abstract— Continuous piecewise affine (CPA) Lyapunov function synthesis is one method to perform Lyapunov stability analysis for nonlinear systems. This method first generates a mesh over the region of interest in the system’s state space and then solves a linear program (LP), which enforces constraints on each vertex of the mesh, to synthesize a Lyapunov function. Finer meshes broaden the class of Lyapunov function candidates, but CPA function synthesis is more computationally expensive for finer-
 meshes – particularly so in higher dimensional systems. This paper explores methods to mesh the region of interest more efficiently so that a Lyapunov function can be synthesized using less computational effort. Three methods are explored – adaptive meshing, meshing using knowledge of the system model, and a combination of the two. Numerical examples for two and three dimensional nonlinear dynamical systems are used to compare the efficacy of the three methods.
I. INTRODUCTION
Lyapunov stability is an important analysis tool for nonlinear dynamical systems. It requires synthesis of a positive definite, scalar Lyapunov function, V , which is conceptualized as the energy of the system across the region of attraction (ROA) [1]. The system is stable in regions where the energy decreases over time, i.e. the partial differential inequality (PDI) V ̇ < 0 (known as the Lyapunov decrease condition) holds. Synthesizing a Lyapunov function for a nonlinear system is a non-trivial p-
roblem. Current research often assumes a form of the Lyapunov function (such as CPA [2], [3], polynomial [4], or neural network [5]) before learning function parameters for the particular system. A particular benefit of CPA Lyapunov function synthesis is that it applies to a broad class of systems, while maintaining true guarantees of system stability. However, this benefit often comes at the cost of computation. Thus, this paper explores computationally efficient methods of CPA Lyapunov function -
synthesis via mesh generation and refinement strategies. CPA Lyapunov functions are defined on a mesh over the system’s ROA, where an linear program (LP) assigns the function’s value at each vertex, uniquely defining it as affine on each simplex [2], [3]. This LP imposes constraints at mesh vertices to ensure the synthesized function adheres to the required Lyapunov function conditions over entire simplexes. Thus, the number of vertices (and the number of simplices) of the mesh directly affects th-
e computational expense of the LP. Current methods of CPA function synthesis use a simple mesh, where a fan of simplices is centered at the system’s
1Thomas Lord Department of Mechanical Engineering and Materials Science, Duke University amy.k.strong@duke.edu 2Department of Aeronautics and Astronautics, Stanford University
equilibrium and a uniform grid mesh is used elsewhere [6], [3]. This paper aims to explore alternative methods of meshing a system’s state space for CPA Lyapunov function synthesis, with the goal of synthesizing a valid Lyapunov function using fewer simplices compared to a naive grid triangulation. This aim is motivated by the success of anisotropic meshes and adaptive mesh refinement in numerical analysis methods used to solve ordinary differential equations (ODEs) and partial differential equati-
ons (PDEs) [7], [8], [9]. It has been observed that targeting difficult regions with smaller simplices while maintaining a coarser mesh elsewhere leads to more accurate solutions with fewer simplices when compared to a uniform refinement [7]. However, formulating anisotropic mesh is still an active area of research. A priori analysis of errors or of the Hessian are often used to determine initial vertex placement of the mesh [7]. Adaptive mesh refinement is also popular. For example, a posteriori -
error estimates can be used to determine mesh refinement strategies [10] or recently, reinforcement methods have also been used to determine where mesh refinement should be targeted [11]. However, none of this has been adapted to the solution of Lyapunov inequalities, as we have here. Three methods of mesh formulation are considered in this paper with the goal of efficiently synthesizing a CPA Lyapunov function for a nonlinear system. In method 1, slack variables are introduced into the original C-
PA Lyapunov LP to guide an adaptive meshing procedure. Method 2 instead considers the PDI, V ̇ < 0, a priori; this method estimates changes in the Hessian of the PDI and leverages that information to determine vertex placement of the mesh. Finally, method 3 combines a priori and a posteriori mesh refinement; the mesh developed in method 2 is iteratively adapted using method 1. Numerical examples explore the efficacy of these methods compared to a naive grid meshing when synthesizing Lyapunov funct-
ions for two and three dimensional nonlinear systems. Notation: The interior, boundary, and closure of the set Ω ⊂ Rn are denoted as Ωo, δΩ, and Ω, respectively. The symbol Rn denotes the set of all compact subsets Ω ⊂ Rn satisfying i) Ωo is connected and contains the origin and ii) Ω = Ωo. Scalars and vectors are denoted as x and
x, respectively. The notation Zba (Zb
a ̄) denotes the set of integers between a and b inclusive (exclusive). The set of non-negative real numbers is denoted as R+. The p-norm of the vector x ∈ Rn is shown as || · ||p, where p ∈ Z1∞. By
f ∈ Ck(Ω), it is denoted that a real valued function, f , is k-times continuously differentiable over its domain Ω. Let 1n denote a vector of ones in Rn. The Dini derivative of a
arXiv:2511.20443v1 [eess.SY] 25 Nov 2025

function, f , is denoted as D+f (x) [3].
II. PRELIMINARIES
Our objective is to explore meshing schemes for CPA Lyapunov functions synthesis. The following sections detail mesh generation, prior work on CPA Lyapunov function synthesis [2], [3], and outlines the problem statement.
A. Mesh
1) Basic Tools: The necessary definitions and tools for this mesh generation and refinement are described below. Definition 2.1: (Affine independence [3]): A collection of m vectors {x0, x1, . . . , xm} ⊂ Rn is affinely independent if x1 − x0, . . . , xm − x0 are linearly independent. Definition 2.2: (n - simplex [3]): A simplex, σ, is defined as the convex hull of n+1 affinely independent vectors in Rn, co{xj }n
j=0, where each vector, xj ∈ Rn, is a vertex. A face is defined as the convex hull of m ≤ n affinely independent vectors in Rn.
Definition 2.3: (Triangulation [3]): Let T = {σi}mT
i=1 ∈
Rn represent a union of mT simplexes, where the intersection of any two simplexes is a face or an empty set. Let {xi,j }n
j=0 be σi’s vertices. The choice of xi,0 in σi is arbitrary unless 0 ∈ σi, in which case xi,0 = 0 [3]. The vertices of the triangulation T of Ω are denoted as EΩ. Let T0 denote the simplexes in T containing 0 and TΩ\{0} denotes those in Ω that do not contain 0. A CPA function is finitely represented by the values of the function at each vertex, i.e. W = {Wx}x∈ET ⊂ R. The gradient of a CPA function across a mesh can be calculated using Lemma 1. Lemma 1: [3, Remark 9] Consider the triangulation T = -
{σi}mT
i=1, where σi = co({xi,j }n
j=0), and a set W = {Wx}x∈ET ⊂ R, where W (x) = Wx, ∀x ∈ ET . For simplex σi, let Xi ∈ Rn×n be a matrix that has xi,j − xi,0 as its j-th
row and W ̄ i ∈ Rn be a vector that has Wxi,j − Wxi,0 , as its
j-th element. The function W (x) = x⊤X−1
i W ̄ i + bi, is the unique CPA interpolation of W on T for x ∈ σi.
2) Model-Informed Mesh Generation: This work considers the notion of model-informed mesh generation. These meshes are generated during the construction of Bounding Sets. We describe the relevant details in this section. Definition 2.4: (Bounding Sets [12]) A bounding set is defined as the tuple ⟨n, P, L, U ⟩, where n is a natural number, P is a finite set of points in Rn, and L, U are functions from P to R, defined such that L(p) ≤ U (p) ∀ p ∈ P . Bounding sets can be used to construct polyhedral -
enclosures.
B. CPA Lyapunov Function Synthesis
The Lyapunov function, V : Rn → R, of an exponentially stable system must adhere to positive definiteness, a ∥x∥ ≤ V (x) ≤ b ∥x∥ , and a decrease condition, V ̇ ≤ −c ∥x∥, where a, b, c > 0, for all x in the system’s ROA, Ω [1]. In CPA Lyapunov function synthesis, Ω is triangulated and the Lyapunov function conditions are only enforced at the vertices of the triangulation, as seen below in Theorem 1.
Theorem 1: [3, Theorem 1] Consider the dynamical system,
x ̇ = f (x), (1)
in Ω ⊆ Rn, where f : Rn → Rn and f ∈ C2(Ω). Define a triangulation T = {σi}mT
i=1 of Ω, L = {li}mT
i=1 ⊂ Rn, and define the CPA function V = {Vx}x∈ET . Consider
Vx ≥ ∥x∥ , ∀x ∈ ET (2a)
∥∇V (x)∥1 ≤ li, ∀x ∈ σi, i ∈ ZmT
1 (2b)
∇V (xi,j )⊤f (xi,j ) + 1
2 ci,j βi1⊤
n li ≤ − ∥xi,j ∥2 (2c)
∀i ∈ ZmT
1 , j ∈ Zn
0,
where
βi ≥ max
p,q,r∈Zn
0 ,x∈σi
∂2f (q)
∂ xr ∂ xs
, (3)
ci,j =

 
 
n maxk∈Zn
0 ∥∆xj,k∥2
2 , ∀σi ∈ TΩ\{0}
n ∥∆xj,0∥2(maxk∈Zn
1 ∥∆x0,k∥2+∥∆xj,0∥2),
∀σi ∈ T0,
(4)
and ∆xj,k=xi,j−xi,k. If V adheres to (2), then V is a Lyapunov function for (1) in Ω, and (1) is exponentially stable in Ω. Remark 1: The term ci,j in Theorem 1 results from applying a Taylor series expansion with respect to a certain vertex point of the simplex, xj,0, or with respect to any point in a simplex [13, Theorem 2]. In Theorem 1, (2a) enforces positive definiteness, (2b) bounds the gradient of the Lyapunov function, and (2c) enforces the decrease condition. Note that (2c) has an additio-
nal term, 1
2 ci,jβi1⊤li, making the decrease condition more strict [3]. This term accounts for the dynamics of the system across a simplex – ensuring that although the decrease condition is only enforced at the vertices of the triangulation, it also holds across all simplices. It is found by applying a second order Taylor series expansion to the system dynamics [3].
III. MOTIVATION AND PROBLEM STATEMENT
Current CPA Lyapunov function literature typically uses a simple grid mesh with a fan triangulation near the origin to triangulate a region of attraction [3]. However, from (2c), we know the mesh of Ω directly affects CPA Lyapunov function synthesis. Here, 1
2 ci,jβi1n⊤li depends on the edge length of the simplex (via ci,j) and the Hessian of the function across the simplex (βi). If a simplex with large edge length overlays a region of Ω where the absolute value of the Hessian terms are large, then (2c) will enforce a very strict decrease condition that may result in an infeasible problem. Theoretically, the effect of the mesh is not a pressing issue, as an exponentially stable, Lipschitz continuous system will always have a solution if there are enou-
gh simplices, mT , in the mesh [3, Theorem 5]. Thus, current Lyapunov function literature uniformly refines the grid mesh until a CPA Lyapunov function can be found. However, this strategy

can result in very fine grid meshes being used, which requires in a large number of simplices. This can make CPA Lyapunov function synthesis computationally expensive or even infeasible. As seen in Theorem 1, each simplex requires 3n+2 constraints, where n is system dimension. For systems with large ROAs and/or high dimensions, meshes quickly become a bottleneck. This paper therefore aims to explore alternate meshing methods to achieve CPA Lyapunov function synthesis with smaller number of simpli-
ces than the current grid method. Our objective is summarized as: Objective 1: Let
 ̇x = f (x), (5)
where x ∈ Rn, be Lipschitz continuous and exponentially stable in Ω ⊆ Rn with an equilibrium point at the origin.
Define a grid triangulation TG = {σi}mTG
i=1 of Ω. The objective of this paper is to synthesize a valid CPA Lyapunov function, V = {Vx}x∈ET over T = {σi}mT
i=1 (i.e. V adheres to (2)) using a smaller number of simplices than required to synthesize the valid Lyapunov function VG = {Vx}x∈ETG over the triangulation TG, i.e. mT < mTG .
IV. MAIN RESULTS
In this paper, we explore two perspectives for creating meshes for CPA Lyapunov function synthesis. First, we do not consider the model a priori and instead only use a relaxed optimization problem to guide online adaptation of the mesh. This leads to method 1, where we iteratively refine some initial mesh – targeting refinement in areas where the Lyapunov decrease condition is violated. Second, we consider information about the system dynamics – specifically the Hessian of system across the ROA – -
and determine the vertices of the mesh before any optimization. Finally, we combine these two methods in method 3, using method 2 to generate an initial mesh, which is then refined by method 1.
A. Method 1: Online Adaptation
The main idea behind method 1 is to refine some initial mesh based on the regions where the Lyapunov decrease condition (2c) is most prohibitive to CPA function synthesis. In method 1, we consider some initial, sparse mesh for which CPA function synthesis is not feasible. We then introduce slack variables into Theorem 1 to ease the Lyapunov decrease condition, (2c). This creates a relaxed LP that, when solved, indicates which vertices (and corresponding simplices) violate the decrease condition. C-
orollary 1 shows this reformulation of the LP (2) with slack variables Υ = {υx}x∈ET assigned to each vertex of the triangulation. Corollary 1: Consider (5) with f : Rn → Rn and f ∈ C2(Ω) for a bounded set, Ω ⊂ Rn. Let T = {σi}mT
i=1 be
a triangulation of Ω and define L = {li}mT
i=1 ⊂ Rn. Define the CPA function V = {Vx}x∈ET and the slack variables Υ = {υx}x∈ET . Consider the optimization problem
min
Υ,V,L
X
x∈ET
υx
Vx ≥ ∥x∥ , ∀x ∈ ET (6a)
∥∇V (x)∥1 ≤ li, ∀i ∈ ZmT
1 (6b)
∇V (xi,j )⊤f (xi,j ) + 1
2 ci,j βi1⊤
n li + ∥xi,j ∥2 ≤ υxi,j (6c)
∀i ∈ ZmT
1 , j ∈ Zn
0,
υx ≥ −α, ∀x ∈ ET , (6d)
where α > 0, and βi and ci,j are defined by (3) and (4). The LP will always have a solution. If υx ≤ 0 for all x ∈ ET , the V is a valid Lyapunov function. Proof: Since Ω is bounded, setting Vx = ∥x∥ is a valid solution of (6a) and induces finite, constant ∇V (x) across each simplex, so setting li = ∥∇V (xi,1)∥1 satisfies (6b). This also ensures that ci,j is always finite. Boundedness of Ω and continuity of f then together ensure that all terms on the left-hand side of (6c) are finite, making that-
 equation feasible with finite υxi,j ≥ −α. If the solution of (6) results in one or more positive slack variables, we aim to refine the simplices with decrease condition violations until a viable Lyapunov function is found. We do so using longest edge bisection (LEB) [14], [15], [16]. To summarize LEB, a vertex is added on the longest edge of the targeted simplex – bisecting the simplex. Neighboring simplices are also refined to ensure conformity of the triangulation; for example, if the target si-
mplex’s neighbor has a matching longest edge, then it is also bisected via the newly placed vertex. If the neighbor has a different longest edge, it is first bisected along its own longest edge. Then one of the resulting simplices is bisected again. Thus, LEB results in refinement propagating throughout the mesh. Although additional refinement of neighboring simplices could be avoided by placing a new vertex in the interior of the target simplex, it is crucial to cut the longest edge of the simple-
x, as this influences the conservativeness of the LP via ci,j . The targeted refinement process is summarized in Algorithm 1. The algorithm iteratively solves (6), determining the simplex with the largest constraint violation at each iteration (Lines 3-4). Then, LEB is used to refine this simplex (Line 5). The algorithm iterates until a viable CPA Lyapunov function is found, i.e., υx ≤ 0 for all x ∈ ET .
Algorithm 1 Adaptive triangulation
Require: T
1: while ∃x ∈ ET s.t. υx ̸≤ 0 do 2: [V, Υ, L] = Solve (6) 3: Σ = {Pn
j=0 υi,j }mT
i=1 4: σ ̄ = maxi∈ZmT
1Σ
5: T =Refine (T , σ ̄) 6: end while 7: return V, mT , T
B. Method 2: Model Informed Triangulation
Method 2 considers the Lyapunov decrease condition, V ̇ < 0, when creating an initial mesh of the space. Recall the error

term in (2c) depends on the Hessian of the dynamical system across an individual simplex via βi. The intuition behind method 2, therefore, is to determine regions of Ω where βi will be high and reduce the size of the simplices in those regions accordingly. To do so, we leverage the OVERTPoly [12] algorithm to analyze each individual dimension of the nonlinear system. The OvertPoly algorithm [12] was designed to construct polyhedral enclosures (i.e. piecewise linear upper and lower bounds) for non-
linear functions that can be represented using rational compositions of univariate functions. These bounds are used to compute forward reachable sets for nonlinear systems controlled by neural networks. An unintended consequence of the bound generation process is that the OvertPoly algorithm partitions the domain in a manner that approximates the evolution of a function’s Hessian. Polyhedral enclosures are obtained from bounding sets, and bounding sets are defined over finite point sets P . To com-
pute a bounding set for a function, we decompose the function into its univariate components, evaluate the roots of the second derivative of each univariate function, and compute bounding sets for each univariate function using the nonlinear programs defined in [17]. These nonlinear programs compute secant and tangent lines for convex functions. The roots of the second derivative of the univariate functions (as well as the nonlinear programs) determine the point set over which the bounding set is -
defined. We use the composition described in [12] to compute piecewise linear upper and lower bounds for multivariate nonlinear functions. In summary, we compute bounding sets for each univariate component, and we obtain multivariate bounds through the composition of univariate bounding sets. While the Bound algorithm is originally used for function approximation, we only require knowledge of P to create our mesh. The resulting vertex points are not guaranteed to contain the dynamical system’s equ-
ilibrium point (in Objective 1, the origin), which must be a vertex to maintain feasibility of the program. Therefore, the axis xk = 0 is added to the list of vertices for each dimension k = 1, . . . , n. Essentially, an additional row of points is added where each dimension is 0 – including a point at the origin. To prevent irregular simplices, any point from the original list of vertices that is within 0.05 of the origin is removed from the vertex list. Finally, a Delaunay triangulation is appli-
ed to this list of vertices to produce the final mesh.
C. Method 3: Combined Approach
Method 3 explores online refinement (method 1) of a mesh that is formulated with the system dynamics in mind (method 2). In short, method 3 is implemented by initializing Algorithm 1 with a mesh from method 2.
V. NUMERICAL EXAMPLES
We now evaluate the capability of methods 1, 2, and 3 in producing CPA Lyapunov functions for various two dimensional systems and a three dimensional system. For each dynamical system, a table is presented to compare the
performance of methods 1-3 to that of a standard uniform grid mesh.
A. Two-Dimensional Nonlinear Systems
We consider the following three two-dimensional systems, whose dynamics are summarized below.
1) System A: (Pendulum) The sinusoidal system is defined as
x ̇ = f1(x)
f2(x) = x2
− sin(x1) − x2, (7)
over the domain Ω = [− π
2×π
2 ] × [− π
2, π
2 ]. Here, the nonlinearity of the system is isolated to x ̇ 2. As a result of this nonlinearity, the Hessian of f1(x) varies only based on the value of sin(x1). For method 2, there is therefore no bounding used for x2, and we instead use a uniform grid of π
6 for vertex points in this dimension. 2) System B: The polynomial system is defined as
 ̇x = f1(x)
f2(x) = 0.3x51 − 0.5x42 − 0.5x1
−0.5x61 − 0.1x2
(8)
over the domain Ω = [−0.75, 0.75] × [−0.75, 0.75]. System 2 is nonlinear in both x1 and x2. Here, the Hessian of f1(x) depends on the values 6x31 and −6x22,
while the Hessian of f2(x) depends on −15x41. Each Hessian has no diagonal terms– making it ideal for method 2. 3) System C: The final system is defined as
x ̇ = f1(x)
f2(x) = 0.5x41 sin(x2) + 0.3x2
−0.5x1 − 1.25x2 − x32x1
(9)
over the domain Ω = [−1, 1] × [−1, 1]. Here, the two dimensions interact in the Hessian matrix. The Hessian of f1(x) depends on the terms −6x21 sin(x2),
2x31 cos(x2), − 1
2 x41 sin(x2), and 2x31 cos(x2), while the
Hessian of f2(x) depends on −3x22 and −6x1x2.
Table I characterizes the performance of the meshes generated by methods 1-3 when used to synthesize CPA Lyapunov functions for the two-dimensional dynamical systems. Note that for method 1, the mesh used to initialize Algorithm 1 is a grid with uniform spacing, whereas for method 3, Algorithm 1 is initialized using method 2. The initial grid for method 1 or method 3, respectively, corresponds to the row on the left hand side of the table, which indicates the grid spacing (uniform grid) or number -
of points used (method 2), e.g. n2 is two points. First, we will discuss the initial meshes – the grid mesh and method 2. For system A, no viable Lyapunov function was found using the grid meshes considered. However, a grid mesh was able to produce a Lyapunov function using 624 (system B) and 512 (system C) simplices, respectively. For system A, Method 2 was similarly not able to produce a Lyapunov function with the meshes considered, but for systems B and C, it performed worse than a grid mesh re-
quiring 1452 and 1224 simplices, respectively, to produce a viable Lyapunov function.

The adaptive meshing methods, method 1 (uniform grid initialization + adaptive meshing) and method 3 (method 2 initialization + adaptive meshing), both consistently outperformed a uniform grid on all three dynamical systems. Method 1 was able to find a viable Lyapunov function with 190 simplices (system A), 210 simplices (system B), and 186 simplices (system C). Method 3 found a viable Lyapunov function with 199 simplices (system A), 255 simplices (system B), and 334 simplices (system C). It is d-
ifficult to directly compare method 1 and method 3 using only number of simplices in a mesh, as the two start with different initializations. We also consider ∆mT , the number of simplices added to the initial mesh before a viable Lyapunov function was found. With this metric, method 1 outperformed method 3 on System A (method 1 requiring 28 additional simplices at its best, while method 3 required 140). Method 3 outperformed method 1 for system C, requiring 2 or 4 additional simplices, where meth-
od 1 required 58 at its best. Finally, method 1 and 3 have the same performance on system B – needing 4 and 8 additional simplices, respectively. Figure 1 and Figure 2 show the best performing grid of each method over the phase plane of the system for System B and System C. It’s interesting to note the the adaptive meshing methods (method 1 and method 3) tended to refined in areas where the phase place changes direction, whereas method 2 focuses fine mesh on areas, where the Hessian is larger in v-
alue, as this is where the most change in curvature of the system dynamics is occurring.
(a) (b)
(c) (d)
Fig. 1: Comparison of the best meshes for system B plotted over the phase plot of the system. Here, 1a is the best grid mesh, while 1b shows method 1, 1c shows method 2, and 1d shows method 3.
Grid Mesh Method 1
Grid N mT Viable V
It. N mT Viable V
∆mT
π
2 9 8 No 76 109 195 Yes 187 π
4 25 32 No 64 109 196 Yes 164 π
6 49 72 No 51 108 190 Yes 118 π
8 81 121 No 27 116 198 Yes 77 π
10 121 200 No 18 145 248 Yes 48 π
12 169 288 No 11 183 316 Yes 28
Method 2 Method 3
Grid N mT Viable V
It. N mT Viable V
∆mT
n2 35 48 No 54 112 199 Yes 151 n3 42 60 No 63 125 224 Yes 164 n4 49 72 No 54 119 212 Yes 140 n5 56 84 No 54 128 227 Yes 143
(a) System A: Pendulum Grid Triangulation Method 1 Grid N mT Viable V
It. N mT Viable V
∆mT
0.375 25 32 No 72 125 210 Yes 178 0.25 49 72 No 65 132 224 Yes 152 0.125 169 288 No 3 171 292 Yes 4 0.0625 625 1152 Yes – – – – 
Method 2 Method 3 Grid N mT Viable V
It. N mT Viable V
∆mT
n2 70 108 No 76 172 300 Yes 192 n3 117 192 No 41 164 279 Yes 87 n4 176 300 No 33 221 384 Yes 84 n5 247 432 No 25 281 498 Yes 66 n6 330 588 No 26 364 654 Yes 66 n7 452 768 No 19 443 802 Yes 34 n8 532 972 No 25 551 1007 Yes 35 n9 651 1200 No 5 655 1208 Yes 8 n10 782 1452 Yes – – – – 
(b) System B Grid Triangulation Method 1 Grid N mT Viable V
It. N mT Viable V
∆mT
0.5 25 32 No 76 120 206 Yes 174 0. ̄3 49 72 No 55 118 200 Yes 128 0.25 81 128 No 28 110 186 Yes 58 0.125 289 512 Yes – – – – Method 2 Method 3 Grid N mT Viable V
It. N mT Viable V
∆mT
n2 77 120 No 86 211 380 Yes 260 n3 135 224 No 43 191 334 Yes 110 n4 209 360 No 13 228 398 Yes 38 n5 299 528 No 3 301 532 Yes 4 n6 405 728 No 3 407 732 Yes 4 n7 527 960 No 2 528 962 Yes 2 n8 665 1224 Yes – – – 
(c) System C
TABLE I: Results of using methods 1 to 3 to generate meshes over Ω to produce CPA Lyapunov functions for each two-dimensional system. Here, N indicates the number of mesh vertices, and mT denotes the number of simplices. For methods 1 and 3, the number of iterations (It) and total number of simplices added to the initial mesh (∆mT ) are recorded. The best result of each method is in bold.

(a) (b)
(c) (d)
Fig. 2: Comparison of the best meshes for system C plotted over the phase plot of the system. Here, 2a is the best grid mesh, while 2b shows method 1, 2c shows method 2, and 2d shows method 3.
B. Three Dimensional Nonlinear System
We also consider CPA Lyapunov function synthesis for the three dimensional system,
x ̇ =


f1(x) f2(x) f3(x)

=


−3x1 + 0.5x1 − x3x42
−x2x43 − 2.5x2 + 0.5x3
−0.5x2 − 5x3 + x1x22,

 (10)
over the region Ω = [−1, 1] × [−1, 1] × [−1, 1]. The Hessian of f1(x) contains the terms −4x32 and −12x3x22, the Hessian
of f2(x) depends on the values of −4x33 and −12x23x2, and the Hessian of f3(x) depends on 2x1 and 2x2. Because x1 is linear in the Hessian, method 2 does not produce bounds for this dimension. Instead, we use a uniform gridding of 0.25 for x1.
Table II shows the results of applying methods 1-3 when compared to a uniform grid mesh. Here, the importance of exploring different meshing strategies becomes apparent, as the three dimensional system requires 24, 576 simplices to compute a viable Lyapunov function with a uniform grid meshing. In contrast, methods 1 and 3 are able to find viable Lyapunov functions with 3, 431 and 4, 390 simplices, respectively.
VI. DISCUSSION
Overall, numerical experiments showed that both adapting meshing methods (method 1 and method 3) performed better than a uniform grid mesh regardless of initialization. For the three dimensional case, the number of simplices was an order of magnitude lower than that of the uniform grid mesh.
Grid Triangulation Method 1 Grid N mT Viable V
It N mT Viable V
∆mT
1 27 28 No 527 878 3940 Yes 3912 0.5 125 384 No 485 899 4009 Yes 3625 0.25 729 3072 No 53 809 3431 Yes 359 0.125 4913 24576 Yes – – – – Method 2 Method 3 Grid N mT Viable V
It. N mT Viable V
∆mT
n3 891 3840 No 64 1009 4390 Yes 550 n4 1485 6720 No 10 1505 6820 Yes 100 n5 1989 9216 No 10 2013 9336 Yes 120
(a) System 3b
TABLE II: Results of using different meshes over Ω to produce CPA Lyapunov functions for the three dimensional system, (10). For each method, N indicates the number of vertices in the mesh, while mT denotes the number of simplices. The grid spacing (uniform grid) or number of bounding points (method 2) are indicated in the left most column. For methods 1 and 3, the number of iterations of adapting mesh is recorded (It), as well as the total number of simplices added to the initial mesh (∆mT ). The-
 best result of each method is in bold.
When comparing method 1 and method 3, method 1 seemed to have better results over all. In Figures 1b and 2b, we see that method 1 is able to create more regular meshes, while method 3 (Figures 1d and 1d) often produces irregular shapes due to the initial mesh. While method 3 often required less additional simplices when adaptively refining, this may just be a result of method 2 initializing with more simplices to start. When comparing method 2 to a uniform grid mesh, method 2 actually performed th-
e same or worse than a uniform grid mesh. Method 2 constructs candidate points by decomposing the system dynamics into their univariate components and generating samples at locations where the convexity of each univariate term changes. Although this approach is effective for deriving tight bounds, it may yield limited insight when the univariate convexity structure is locally constant or when the Hessian is dominated by offdiagonal terms, causing multivariate curvature effects that are not capture-
d by the univariate decomposition. Therefore, it is expected that method 2 might perform poorly on system C (due to the dominance of off diagonal terms in the Hessian). Further, the structure of system A is relatively simple within the region of interest, yielding limited additional insight from Method 2. However, it is surprising that method 2 did not perform better on system B. This leads us to a key insight in these results. What is apparent from these results is that often the region of the st-
ate space that requires a finer mesh is not necessarily the region with large and/or changing Hessian terms (where method 2 often targets refinement), but instead the region where f (x) is near zero. In Figures 2b and 2d (system C), the adaptive mesh refinement is targeted most where f (x) is near 0. This is likely linked to the fact that satisfying

the Lyapunov decrease condition, V ̇ = ∇V ⊤f (x) ≤ 0, is
more difficult as f (x) → 0. Here, the error term in (2c),
1
2 nβici,j1n⊤li, dominates the inequality and must be reduced before (2c) can be satisfied. In Figures 1b and 1d (system B), this effect is less pronounced, as refinement is also targeted in regions where f (x) is larger, but still visible. Overall, these results show that the focus of meshing should not necessarily be the magnitude of the error term, 1
2 nβici,j 1n⊤li, but instead, reduction of the error relative to the decrease condition, ∇V ⊤f (x).
Limitations and Future Work
While adaptive meshing provides a promising direction, it’s requirement of iteratively re-running an optimization problem is computationally expensive. Future work aims to establish is singular simplices or groups of simplices can be refined without changing the solution of the Lyapunov function elsewhere. This would maintain the benefits of method 1, while reducing its computational load – making it more applicable to systems in high dimension. More initialization schemes for meshing should be ex-
plored in the future as well. It would be interesting to explore an initial mesh which prioritizes density of simplices in areas where f (x) is near 0, in light of the results from systems B and C.
VII. CONCLUSION
This paper considers different meshing strategies to more efficiently synthesize CPA Lyapunov functions for nonlinear dynamical systems. Numerical results demonstrated that adaptive meshing guided by an LP was able to outperform a naive grid mesh. These results also shed light on potential future mesh initializations that prioritize dense meshing in regions with little system evolution, i.e., where f (x) is near 0.
REFERENCES
[1] H. Khalil, Nonlinear Systems. Pearson Edu, Prentice Hall, 2002. [2] P. Giesl and S. Hafstein, “Construction of Lyapunov functions for nonlinear planar systems by linear programming,” J. Math. Anal. Appl., vol. 388, no. 1, pp. 463–479, 2012. [3] ——, “Revised CPA method to compute Lyapunov functions for nonlinear systems,” J. Math. Anal. Appl., vol. 410, no. 1, pp. 292306, 2014. [4] A. Papachristodoulou and S. Prajna, “On the construction of lyapunov functions using the sum of squares decomposit-
ion,” in Proceedings of the 41st IEEE Conference on Decision and Control, 2002., vol. 3. IEEE, 2002, pp. 3482–3487. [5] A. Abate, D. Ahmed, M. Giacobbe, and A. Peruffo, “Formal synthesis of lyapunov neural networks,” IEEE Control Systems Letters, vol. 5, no. 3, pp. 773–778, 2020. [6] P. Giesl and S. Hafstein, “Existence of piecewise linear lyapunov functions in arbitrary dimensions,” Discrete Contin. Dyn. Syst, vol. 32, no. 10, pp. 3539–3565, 2012. [7] F. Alauzet and A. Loseille, “A decade of prog-
ress on anisotropic mesh adaptation for computational fluid dynamics,” Computer-Aided Design, vol. 72, pp. 13–39, 2016. [8] P. Bouchard et al., “An anisotropic mesh adaptation strategy for damage and failure in ductile materials,” Finite Elements in Analysis and Design, vol. 59, pp. 1–10, 2012. [9] Y. Mesri, M. Khalloufi, and E. Hachem, “On optimal simplicial 3d meshes for minimizing the hessian-based errors,” Applied Numerical Mathematics, vol. 109, pp. 235–249, 2016.
[10] M. Yano and D. L. Darmofal, “An optimization-based framework for anisotropic simplex mesh adaptation,” Journal of Computational Physics, vol. 231, no. 22, pp. 7626–7649, 2012. [11] N. Freymuth, P. Dahlinger, T. W ̈urth, S. Reisch, L. Ka ̈rger, and G. Neumann, “Swarm reinforcement learning for adaptive mesh refinement,” Advances in Neural Information Processing Systems, vol. 36, pp. 73 312–73 347, 2023. [12] S. I. Akinwande, C. Sidrane, M. J. Kochenderfer, and C. Barrett, “Verifying nonlinear -
neural feedback systems using polyhedral enclosures,” 2025. [Online]. Available: https://arxiv.org/abs/2503. 22660 [13] A. K. Strong, R. Lavaei, and L. J. Bridgeman, “Improved small-signal l2-gain analysis for nonlinear systems,” in 2024 American Control Conference (ACC). IEEE, 2024, pp. 3377–3382. [14] M. C. Rivara, “Algorithms for refining triangular grids suitable for adaptive and multigrid techniques,” International journal for numerical methods in Engineering, vol. 20, no. 4, pp. 745–756, 198-
4. [15] M.-C. Rivara and C. Levin, “A 3-d refinement algorithm suitable for adaptive and multi-grid techniques,” Communications in applied numerical methods, vol. 8, no. 5, pp. 281–290, 1992. [16] S. Korotov,  ́A. Plaza, and J. P. Sua ́rez, “Longest-edge n-section algorithms: properties and open problems,” Journal of Computational and Applied Mathematics, vol. 293, pp. 139–146, 2016. [17] C. Sidrane, A. Maleki, A. Irfan, and M. J. Kochenderfer, “Overt: An algorithm for safety verification of neura-
l network control policies for nonlinear systems,” Journal of Machine Learning Research, vol. 23, no. 117, pp. 1–45, 2022.

---

## Processing Information

- **Processing Library:** Zotero PDFWorker
- **Processing Date:** 2026-02-10T18:14:58.651Z
- **Text Length:** 34529 characters
- **Success:** Text extraction completed
- **PDF Library Used:** Zotero PDFWorker
- **Pages Processed:** 7 of 7
