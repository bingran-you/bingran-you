# PDF Document: Strong et al. - 2025 - Data-driven certificates of constraint enforcement and stability for unmodeled, discrete dynamical s.pdf

**File Path:** Strong et al. - 2025 - Data-driven certificates of constraint enforcement and stability for unmodeled, discrete dynamical s.pdf

**Processed Date:** 2026-02-10T18:16:18.248Z

**File Size:** 518.67 KB

**Total Pages:** 6

**Extracted Pages:** 6

**PDF Library:** Zotero PDFWorker

**Attachment Item ID:** 3324

**Title:** Data-driven certificates of constraint enforcement and stability for unmodeled, discrete dynamical systems using tree data structures

**Collection:** Large Files > Random Papers

---

## Extracted Text Content

Data-driven certificates of constraint enforcement and stability for unmodeled, discrete dynamical systems using tree data
structures ⋆
Amy K. Strong ∗ Ali Kashani ∗∗ Claus Danielson ∗∗ Leila J. Bridgeman ∗
∗ Duke University, Durham, NC, 27708, USA (e-mail: amy.k.strong@duke.edu). ∗∗ University of New Mexico, Albuquerque, NM, 87131, USA
Abstract: This paper addresses the critical challenge of developing data-driven certificates for the stability and safety of unmodeled dynamical systems by leveraging a tree data structure and an upper bound of the system’s Lipschitz constant. Previously, an invariant set was synthesized by iteratively expanding an initial invariant set. In contrast, this work iteratively prunes the constraint set to synthesize an invariant set – eliminating the need for a known, initial invariant set. Furthermore-
, we provide stability assurances by characterizing the asymptotic stability of the system relative to an invariant approximation of the minimal positive invariant set through synthesis of a discontinuous piecewise affine Lyapunov function over the computed invariant set. The proposed method takes inspiration from subdivision techniques and requires no prior system knowledge beyond Lipschitz continuity.
Keywords: Lyapunov methods, invariant sets, data driven, stability of nonlinear systems, constrained systems
1. INTRODUCTION
Establishing the safety and stability of unmodeled systems is challenging.
©2025 the authors. This work has been accepted to IFAC for publication under a Creative Commons Licence CC-BY-NC-ND.
Invariant sets and Lyapunov functions are related. Invariant sets are regions of the state space wherein a dynamical system remains for all time, which is vital for constraint adherence. Lyapunov functions are associated with the energy of a dynamical system and can be used to verify stability of the system about an equilibrium (LaSalle (2012)) or about a set (Blanchini et al. (2008)) – often the minimum positive invariant (PI) set within the constraint set. For nonlinear systems, stability is oft-
en a local property and thus requires knowledge of the region of attraction (ROA), the region in which the system is Lyapunov stable with respect to an equilibrium point or destination set. The ROA depends on the specific Lyapunov function constructed, and asymptotic stability within a ROA does not necessarily imply constraint satisfaction. Therefore, the ROA may not coincide with the maximal PI set, the largest invariant set within the system constraints, leading to a disconnect between stability-
 and safety guarantees.
For nonlinear systems, invariant sets and Lyapunov functions are difficult to construct even if the model is known. Methods to determine an invariant set are often not guaranteed to converge for nonlinear systems (Kerrigan
⋆ This work was supported by NSF Grant CMMI-2303157. Any opinions, findings, and conclusions or recommendations expressed in this material are those of the authors and do not necessarily reflect the views of the NSF.
(2000)), only give approximate invariant sets, (Dellnitz and Junge (2002);Korda et al. (2014)), and/or are restricted to certain classes of systems (Korda et al. (2014)). Invariant sets can also be synthesized as sublevel sets of a Lyapunov function (LaSalle (2012)), but the Lyapunov function of a stable nonlinear system has no set form and is only valid for a potentially unknown ROA. Model based methods to determine Lyapunov functions often choose a flexible function form and develop a constraine-
d optimization problem to synthesize the Lyapunov function (Giesl and Hafstein (2014); Anderson and Papachristodoulou (2015)), an approach leveraged in this paper.
This paper presents a deterministic, data driven and model free approach to synthesize invariant sets and Lyapunov functions. While methods exist to identify system models from data, a model-free approach circumvents issues introduced in model-based methods. However, without knowledge of system behavior between sampled points, data alone is insufficient to characterize a nonlinear system. While approximations or probabilistic guarantees are an option for data driven invariant sets (Korda (2020); K-
ashani et al. (2024)) and Lyapunov functions (Dawson et al. (2023)), we opt to require additional knowledge of system evolution to achieve deterministic guarantees. In line current literature (Dawson et al. (2023)), we leverage the Lipschitz continuity.
This paper’s contributions are twofold. First, we develop a data driven method to synthesize an invariant set for an unmodeled, Lipschitz continuous, discrete-time dynamical system. Our method uses deterministic sampling of
arXiv:2511.19231v1 [eess.SY] 24 Nov 2025

successive state pairs, i.e. {x, x+}, to iteratively refine a partition of the state constraint set via a tree data structure. We are inspired by Global Analysis of Invariant Objects (GAIO) (Dellnitz et al. (2001)), a subdivision algorithm that iteratively approximates the invariant set of a known system using set-based methods. Here, we modify GAIO for the data driven case. In contrast to GAIO, our modified algorithm leverages Lipschitz continuity to produce a provably invariant set in a finite -
number of iterations and data points.
The second contribution is sufficient conditions for a piecewise constant Lyapunov function within the invariant set to certify asymptotic stability of the system with respect to an invariant approximation of the minimal PI set – demonstrating the uniform ultimate boundedness (UUB) of the system. These conditions are used in an optimization problem to synthesize a Lyapunov function, leveraging the same data-set and tree structure used for invariant set synthesis by assigning a Lyapunov function va-
lue to each partition of the invariant set.
Notation and Preliminaries: Let Zba be the set of integers between a and b inclusive. The interior, boundary, and
closure of the set Ω⊂Rn are denoted as Ω◦, ∂Ω and Ω ̄ . Scalars, vectors, and matrices are denoted as x, x, and X. Let {1, −1}n denote the set of all n-dimensional vectors with entries either 1 or −1. Let φ : R0∞→R0∞ be a class K function if it is continuous, strictly increasing, and φ(0)=0.
Define a norm ball a x∈Rn for some norm, ∥·∥p, as Br,p(x):={y∈Rn| ∥x − y∥p ≤r}. Let Br,∞(x) denote a max-norm ball, where ∥x∥∞ = maxi∈Zn
1 |xi|. Recall
∥x∥∞ ≤ ∥x∥2 ≤√n ∥x∥∞ . The mapping T :X →Y between
two metric spaces is Lipschitz continuous mapping with respect to norm ∥·∥ if there exists some Lipschitz constant, L>0, such that ∥T (p)−T (q)∥ ≤L ∥p−q∥ for all p, q ∈ X (Fitzpatrick (2009)). Define mapping T , and let T k indicate the mapping is applied k times (k∈Z0∞). Let
∆(x, S):= infs∈S ∥x−s∥2 .
2. PROBLEM STATEMENT
Consider an unmodeled discrete-time, dynamical system
x+ = T (x), x ∈ X ⊂ Rn, (1)
over the bounded state constraint admissible set, X . The primary goal of this paper is to synthesize an admissible subset, S ⊆ X , that is positively invariant under the dynamics (1) using deterministically sampled data set consisting of successive state pairs, i.e. {xi, x+
i }N
i=0. The set S is an invariant approximation of the maximal PI set.
Definition 1. Invariant Set (Alberto et al. (2007)): S is PI under the dynamics of (1) if, ∀x0 ∈ S, k ∈ Z0∞,
T k(x0) ∈ S.
Our secondary goal is to use this data set to synthesize a Lyapunov function over the invariant set, S, to verify asymptotic stability the system, while adhering to the constraints. We make the following assumption:
Assumption 2. Let (1) be Lipschitz continuous for some norm, ∥·∥ . Let L > 0 be an upper bound on the Lipschitz constant of the system.
Assumption 2 allows us to extend information provided by the samples {xi, x+
i }N
i=0 to unsampled states within X . The Lipschitz constant can be determined from data (Wood and Zhang (1996); Nejati and Zamani (2023)).
2.1 Geometric Conditions of Invariance
The behavior of subsets of X under the dynamics of (1) are characterized geometrically using the precursor and successor sets, defined below.
Definition 3. Precursor Set (Borrelli et al. (2017)): For T : Rn → Rn, the precursor set to set S is Pre(S) = {x∈Rn | T (x) ∈ S}.
Definition 4. Successor Set (Borrelli et al. (2017)): For T : Rn → Rn, the successor set of set S is Suc(S) = {x∈Rn | ∃x0 ∈ S s.t. x = T (x0)}.
Definitions 3 and 4 are leveraged in Lemma 5 to determine the geometric conditions of an invariant set, S, in X .
Lemma 5. Invariant Set (Alberto et al. (2007); Dorea and Hennet (1999)): The set S ⊆ Ω is PI for mapping T : Rn→Rn, if Suc(S) ⊆ S or S ⊆ Pre(S).
Methods that use Lemma 5 often require an exact model of the system to determine an invariant set (Kerrigan (2000)). When the system is unmodeled, the invariance condition can only be verified at the data points. With partial information, Strong et al. (2025) used Lipschitz continuity to bound the precursor and successor sets.
Lemma 6. (Strong et al. (2025)): Let Assumption 2 hold. Consider the point x∈X and its successor, x+=T (x). Define Br+(x):={y∈Rn | ∥x+−y∥ ≤Lr} and let Br(x), Br+(x)
⊆ X . Then, Suc(Br(x))⊆Br+(x), and Br(x)⊆Pre(Br+(x)).
Lemma 6 over approximates the precursor and successor sets of (1) in X using Lipschitz continuity rather than requiring full knowledge of (1). Lemma 7 uses these overapproximations to construct an invariant set composed of the union of norm balls about sampled points. Lemma 7. (Strong et al. (2025)): Let Assumption 2 hold. Consider a data set of N + 1 pairs, {xi, x+
i }N
i=0, sampled
in X ⊂Rn where each element in a pair are related via (1). Let Bri (x) and Br+i (xi) be as defined in Lemma 6. If ∪N
i=0Br+i (xi) ⊆ ∪N
i=0Bri (xi), then ∪N
i=0Bri (xi) is a PI set.
2.2 Lyapunov Functions
Synthesizing a Lyapunov function in a region of the state space confirms local stability characteristics of a system. Crucially, discrete-time Lyapunov functions only need to be continuous at the equilibrium (Lazar (2006)). Theorem 8 states conditions for an equilibrium to be locally asymptotically stable within an invariant set.
Theorem 8. (Lazar (2006)): Let S ⊆ Rn be a bounded positively invariant set for the system (1) that contains a neighborhood N of the equilibrium xe, where T (xe)=xe. Let α1, α2, α2 ∈ K. Suppose there exists a function V :
X →R0∞ with V (xe)=0 such that V (x) ≥ α1(∥x − xe∥), ∀x ∈ S, (2a)
V (x) ≤ α2(∥x − xe∥), ∀x ∈ N , (2b)
V (T (x)) − V (x) ≤ −α3(∥x − xe∥), ∀x ∈ S. (2c) Then, the equilibrium of (1) is asymptotically stable in S.

Asymptotic stability can also be found in relation to a set, known as UUB, which can be confirmed via synthesis of a Lyapunov function (Blanchini et al. (2008)).
3. DATA DRIVEN INVARIANT SET SYNTHESIS
This section presents a data driven algorithm that iteratively computes the intersection of a candidate invariant set Sˆ ⊆ X with an over-approximation of its successor (Sˆ+ ⊇ Suc(Sˆ)), i.e. Sˆ ∩ Sˆ+, and prunes regions of Sˆ beyond this intersection to find a true invariant set, S. Algorithm 1 harnesses the approach of the seminal geometric algorithm (Kerrigan (2000)), but uses a novel data driven approach. We also build on the partitioning strategy of GAIO (Dellnitz et al. (2001)), but are able -
to provide true invariance guarantees in finite time and with a finite data set. Invariance is accomplished by parameterizing Sˆ as the union of max norm balls about sampled points, ∪N
i=0Bri,∞(xi), and Sˆ+ as ∪N
i=0Br+i,∞(x+
i ), as defined by Lemma 6. The result of Algorithm 1 is a set that satisfies Sˆ ⊆ Sˆ+. Thus, by Lemma 7, Sˆ is invariant.
Algorithm 1 uses a tree data structure, defined below.
Definition 9. Define Q=Q(xi, x+
i , ri, si)N
i=0 as a tree data
structure containing N +1 nodes, Q(xi, x+
i , ri, si). Each
node contains a state sample, xi, and the sampled state’s
successor, x+
i , found by applying (1). The value ri defines
the radius of the max norm ball about xi and is used to construct Bri,∞(xi)⊂X , which partitions X . The label si denotes if Bri,∞(xi) is included in (si=1) or excluded from
(si=0) the candidate invariant set, Sˆ. Let LQ denote the
set of indices of the N ̄ +1 leaf nodes of Q with value s = 1.
We define Sˆ using the leaf nodes of Q where si = 1
Definition 10. Define Sˆ= ∪k∈LQ Brk,∞(xk), where each norm ball is constructed from the leaf nodes of Q where s = 1. For brevity, we denote QSˆ = Q(xi, x+
i , ri, si)i∈LQ .
Algorithm 1 iteratively determines an invariant set as follows. Algorithm 1 initializes Sˆ with a partition of X (or an under-approximation of X ) using ∪i∈LQ Bri,∞(xi) ⊆ X constructed from Q. Each node of the initial partition is part of the candidate invariant set. The lower threshold for the radius of a node, τ > 0, and an upper bound on the system’s Lipschitz constant with respect to the max norm, L > 0, are assumed given for initializing the algorithm. Note a lower threshold, τ , allows for l-
arger data sets.
At each iteration of Algorithm 1, the behavior of (1) in Sˆ is characterized by constructing Br+i,∞(xi) for each
node of QSˆ using Lemma 6, L, and the successive sample
x+
i . Here, the tree structure, Q, is essential for efficiently
characterizing the behavior of Br+i,∞(xi). If Br+i,∞(xi)
fully remains within Sˆ, then the corresponding node is unchanged, i.e. si remains 1 for node Q(xi, x+
i , ri, si). If
Br+i,∞(xi) does not intersect with Sˆ at all, it is removed
from the candidate invariant set for all future iterations, i.e. si = 0. If Br+i,∞(xi) only partially remains within
Sˆ, there are two possible outcomes. If ri
2 <τ , then the
radius is too small and the node is removed from the candidate invariant set for all future iterations, i.e. si = 0.
In all above cases, Q(xi, x+
i , ri, si) remains a leaf node. If
(a) The candidate invariant set intersected with the overapproximation of a node’s successor set.
(b) The resulting division of a node (Algorithm 2) and its corresponding samples.
(c) The new candidate invariant set resulting from the steps in 1a and 1b.
Fig. 1. A representation of different stages in Algorithm 1 for a single node in the tree data structure. Each blue square is a member of the candidate invariant set, Sˆ.
ri
2 ≥ τ , then Algorithm 2 divides the node into 2n new leaf
nodes (therefore creating 2n new samples) with new radii
of ri
2 . These new nodes are added to Q and remain the
candidate invariant set by setting si = 1. Each iteration, LQ and Sˆ = ∪k∈LQ Brk,∞(xk) update as each node in QSˆ
is considered. The dataset D is tracks the samples that make up Sˆ each iteration. Figure 1 shows an example of Algorithm 1 applied to a single node in X ⊂ R2 for (1).
Algorithm 1 terminates when the candidate invariant set remains the same after iterating through each node of Q ̄(xi, x+
i , ri, 1)N ̄
i=0. Theorem 11 shows Algorithm 1 results in an invariant set. The radius threshold τ ensures termination in finite time by precluding infinite divisions.
Theorem 11. Let Assumption 2 hold for (1), where L is defined with respect to the max-norm. Let Q (Definition 9) τ >0, and L>0 be inputs to Algorithm 1. Algorithm 1 will produce an invariant set, S, in a finite number of steps.
Proof. Algorithm 1 terminates when S ̃j−1=Sˆj−1. If
S ̃j−1=Sˆj−1̸=∅ at termination, then by lines 7 through 17, there were no node divisions or node removals from Sˆj−1 in iteration j − 1, i.e. every Bri,∞(xi) in S= ∪k∈LQ Brk,∞(xk) had a corresponding over approximation of its
successor set, Br+i,∞(xi) that was a subset of S. In other
words, ∪k∈LQ Suc(Bri,∞(xi))⊆ ∪k∈LQ Br+i,∞(xi)⊆ ∪k∈LQ Bri,∞(xi)=S. By Lemma 7, S is an invariant set.
Because divisions of the partition of X are limited by the radius threshold, τ, there are a finite number of divisions that can be performed. After that, each time there is a node where Br+i,∞(xi)̸⊆Sˆj, the node Q(xi, x+
i , ri, si) is
removed from Sˆj. This process iterates until S ̃j−1=Sˆj−1, which may only occur at the null set, which is invariant.
The number of divisions and nodes of Q are limited by τ . Thus, Algorithm 1 terminates in finite time. □
Algorithm 1 differs from GAIO (Dellnitz et al. (2001)) in that it uses the system’s Lipschitz continuity to over approximate the successor set of a max norm ball about a single sample, characterizing all states in a partition with a single {x, x+} pair. Further, Algorithm 1 is guaranteed to terminate in finite time (with finite data) with a true invariant set rather than a covering of the set.

Algorithm 1 Synthesize Invariant Set
Require: Q = Q(xi, x+
i , ri, si = 1)N
i=0, τ > 0, L > 0
1: j = 0, Sˆj ← ∪k∈LQBrk,∞(xk), S ̃j−1 ← ∅
2: while Sˆj−1 ̸= S ̃j−1 do
3: Sˆj ← ∪k∈LQ Brk,∞(xk), S ̃j ← ∪k∈LQ Brk,∞(xk)
4: D = {}
5: for Q(xi, x+
i , ri, si) ∈ QS ̃j do
6: Br+i,∞(xi) := {y∈Rn | x+
i − y ∞ ≤ Lri}
7: if Br+i,∞(xi) ∩ Sˆj = Br+i,∞(xi) then
8: si = 1 in Q(xi, x+
i , ri, si)
9: D = D ∪ (xi, x+
i)
10: else if Br+i,∞(xi) ∩ Sˆj = ∅ then
11: si = 0 in Q(xi, x+
i , ri, si)
12: else 13: if ri
2 > τ then
14: Q = Alg. 2(Q, i) 15: else
16: si = 0 in Q(xi, x+
i , ri, si)
17: end if 18: end if
19: Sˆj ← ∪k∈LQ Brk,∞(xk) 20: end for 21: j = j + 1 22: end while
23: S ← Sˆj return S, D
Algorithm 2 Divide Node i
Require: Q = Q(xi, x+
i , ri, si)N
i=0, i
1: for k = N + 1 to k = N + 1 + 2n do 2: Sample xk = xi + ri
2 v(k − N ), where v(k − N ) ∈
{1, −1}n, and sample x+
k by applying (1)
3: Add leaf node Q(xk, x+
k , rk, sk) to node i
4: sk = 1 in Q(xk, x+
k , rk, sk)
5: end for return Q = Q(xi, x+
i , ri, si)N+k
i=0
Lipschitz continuity is a conservative characterization of a system – introducing conservatism into Algorithm 1. To find a viable invariant set S ⊆ X , the dynamics of (1) must ensure B τ+
2 ,∞(xk) ⊆ S for all k ∈ LQ. If the
dynamics make this impossible, Algorithm 1 produces an empty set. Note also that Algorithm 1 suffers from the curse of dimensionality, as partitioning a node creates 2n new nodes (Meagher (1982)).
4. DATA DRIVEN LYAPUNOV FUNCTION SYNTHESIS
The aim of this section is to synthesize a Lyapunov function, V : S → R, using the invariant approximation of the maximal PI set from Algorithm 1, S, and its corresponding samples, D, to confirm UUB. As in Section 3, the main tool used is max-norm balls about data points. We consider the case where V is piecewise constant function – defined by a constant, vi, on each max norm ball of S= ∪k∈LQ Brk,∞(xk) – and derive conditions for the value vi on each partition so that V shows asymptotic convergenc-
e of (1) to an invariant approximation of the
minimal PI set, Sβ. The set Sβ contains a user defined set BE , where the system’s energy may increase. These conditions can be used to synthesize a Lyapunov function via optimization.
There are two main challenges in synthesizing V . The first challenge is that the decrease condition of the Lyapunov function must be enforced across the entirety of S. We exploit the unique tree structure of S and V to develop a decrease condition that can be enforced by a single condition on a node, but ensures the decrease condition holds across the node. To reference the tree structure in upcoming proofs, we assume the following.
Assumption 12. Let QS , S, and D = {(xi, x+
i )}i∈LQ , and be the tree nodes, invariant set (Definition 10), and data set produced by applying Algorithm 1 to X , while sampling state successors from (1), which satisfies Assumption 2 with respect to the max norm.
The second challenge involves the system’s equilibrium (xe). By Theorem 8, V (xe)=0 and, accordingly, V (T (xe))− V (xe)=0. The node in QS containing the equilibrium cannot be constant without either violating the positive definiteness of V or the condition V (xe)=0. Therefore, we leverage UUB (Blanchini et al. (2008)). We consider a user defined set BE ⊂S where the decrease condition need not hold and develop conditions for V to verify that any x∈S\Sβ asymptotically converges to the invariant app-
roximation of the minimal PI set, Sβ ⊇ BE .
4.1 Convergence to a set
This section analyzes a system’s convergence to Sβ ⊇ BE , an invariant estimate of the minimal PI set. To this end, we define a Lyapunov-like function form, the values of which are later selected via optimization.
Definition 13. Let Assumption 12 hold and let BE ⊂S. Define V :S→R as a discontinuous piecewise constant function described by vxi on each node i∈LQ in QS . For any z∈S,
V (z) =

 
 
vxi , z ∈ B◦
ri,∞(xi) \ BE
min
j∈Ze
1
vxj , z ∈ ∩e
j=1∂Brj,∞(xj )
vxi = 0, z ∈ BE ,
(3)
where ∩e
j=1∂Brj,∞(xj) describes the intersection of e neighboring nodes where z lies on the boundary.
We develop a decrease condition for each node of S to ensure Condition (2c) holds for S\BE before finding conditions on V for (1) in S\Sβ to converge to Sβ.
Decrease Condition The decrease condition of the Lyapunov function (Condition (2c)) must be enforced on all x∈S\BE . However, the available data is limited to
{x, x+}N ̄
i=0. We leverage Lemma 6 and the unique format of V to develop an inequality that, when enforced at a data point (xi) contained in a node of the tree data structure, ensures the decrease condition holds across Bri,∞(xi). Lemma 14. Let Assumption 12 hold. Let V be defined by Definition 13. Let Bˆri,∞(xi)={z∈Bri,∞(xi)|V (z)=V (xi)}. Let αˆ ∈ K, −αˆi ≤ miny∈Bri,∞(xi) −αˆ(∆(y, BE )), and
V ̄ +
i := maxy∈B+
ri,∞(xi) V (y). If
V ̄ +
i − V (xi) ≤ −αˆi, (4)

then V (z+)−V (z)≤−αˆ(∆(z, BE )) for all z∈Bˆri,∞(xi).
Proof. From Lemma 6, Suc(Bri,∞(xi))⊆Br+i,∞(xi). There
fore, V ̄ +
i ≥ maxz∈Bri,∞(xi) V (z+). Because V (z) is con
stant for all z∈Bˆri,∞(xi), V (z+)−V (z)≤V ̄ +
i −V (xi) ≤
−αˆi≤−αˆ(∆(z, BE )) holds across Bˆri,∞(xi). Hence, (4) implies V (z+)−V (z)≤−αˆ(∆(z, BE )) holds ∀z∈Bˆri,∞(xi). □
The practical utility of Lemma 14 depends on the tree
structure of S and V. Typically, determining the value of
V ̄ +
i for Bri,∞(xi) would require additional sampling or the system model. Here, it requires determining all nodes in QS that Br+i,∞(xi) intersects with by traversing Q and then determining the values of V based on (3).
Lyapunov Function Conditions In Theorem 15, conditions on V : S→R (Definition 13) are found to verify asymptotic convergence of (1) to Sβ, a sublevel set of V which contains the user defined set BE .
Theorem 15. Consider (1). Let Assumption 12 hold, and let V : S → R be defined by Definition 13, where
BE := ∪p
k=mBrk,∞(xk) ⊂ S, m ≤ p, and Zpm ⊆ LQ. Let
αˆ ∈ K. Let V satisfy
vxi ≤ 1, ∀i ∈ LQ (5a) vxi > 0, ∀i ∈ LQ \ Zp
m, (5b) V ̄ +
i − V (xi) ≤ −αˆi, ∀i ∈ LQ \ Zp
m, (5c) V ̄ +
E ≤ β (5d)
where β ∈ R1
0, −αˆi≤ miny∈Bri,∞(xi) −αˆ(∆(y, BE )), V ̄ +
i :=
maxy∈B+
ri,∞(xi) V (y), and V ̄ +
E := maxy∈∪p
k=m B +
ri,∞(xk) V (y).
Then, (1) asymptotically converges to Sβ ⊇ BE , where Sβ := {x ∈ S | V (x) ≤ β} and Sβ is an invariant set.
Proof. By (5a) and (5b), V is bounded and positive definite on S\BE . By Definition 13, V is bounded on BE .
Let Bˆri,∞(xi)={z∈Bri,∞(xi)|V (z)=V (xi)}. By Definition
13, ∪i∈LQ\[m,...,p]Bˆri,∞(xi) covers S\BE . By (5c) and Lemma 14, the Lyapunov decrease condition holds on all Bˆri,∞(xi) ⊆ S \ BE and therefore on all of S\BE .
Paralleling the proof of Theorem 2.2.4 (Lazar (2006)),
if z∈S\BE , then V (T j+1(z)) − V (T j(z)) j→T
−−−→ 0 for some T >0 by Conditions (5b) and (5c). Since this bounds
−αˆ(∆(z, BE )) ≤ 0 below, αˆ(∆(T j(z), BE )) j→T
−−−→ 0. There
fore, ∆(T j(z), BE ) j→T
−−−→ 0 for all z ∈ S \ BE .
By Conditions (5d) and (5c) respectively, the successors of z∈BE ⊆Sβ and z∈Sβ\BE will be in Sβ. Thus, Sβ is invariant and all trajectories starting in S \ Sβ converge to it. □
Corollary 16. If a Lyapunov function satisfying Theorem 15 for (1) in S is found, then (1) is uniformly ultimately bounded in S.
5. NUMERICAL EXAMPLES
5.1 Linear Dynamical System
Consider the linear system
x+ = 0.2200 0.4013
−0.5364 0.2109 x, (6)
Fig. 2. Area and number of partitions of the candidate invariant set over each iteration of Algorithm 1. The area of Sˆ is compared to the maximal invariant set area calculated from MPT3 (Herceg et al. (2013)).
Fig. 3. A discontinuous Lyapunov function shows asymptotic convergence of (6) to the small invariant set, BE = [−0.25, 0.375] × [−0.375, 0.25].
where X : [−0.25, 1] × [−1, 0.25]. An upper bound on the Lipschitz constant with respect to the max norm is L=0.8225. Algorithm 1 was initialized with Sˆ=X and τ =0.001. The candidate invariant set area is compared to the area of the maximal invariant set found using MPT3 in Figure 2 –showing the invariant set produced by Algorithm 1 has a slightly smaller area than that found by MPT3. The number of partitions required used was also tracked across iterations of the algorithm (Figure 2). The total -
number of sampled (x, x+) pairs required to produce S was 11,796. The total number of partitions was 5,056. In contrast, Strong et al. (2025), required 9,190 partitions to iteratively expand an initial invariant set to a similar size.
Next, we sought a scalar function to verify asymptotic convergence of the system. An optimization problem was set up using Theorem 15, where β was minimized. For Con
dition (5c), αˆi=c∆(xi, BE )+c√2ri was used, where c≥0.25 and xi and ri are defined by the relevant node in the tree. Figure 3 shows the Lyapunov function verifying that (6) converges to the set BE =[−0.25, 0.375]×[−0.375, 0.25].
Here, V ̄ +
E ≤β holds for β=0, meaning BE is invariant.
5.2 Nonlinear Dynamical System
Consider the nonlinear dynamical system

Fig. 4. Area and number of partitions of the candidate invariant set over each iteration of Algorithm 1.
Fig. 5. A discontinuous Lyapunov function shows asymptotic convergence of (7) to the set, BE = [−0.21875, 0.21875] × [−0.21875, 0.21875].
x+
1 = 0.5x1 − 0.7x2
2
x2 = 0.9x3
2 + x1x2
(7)
over the space, X : [−1, 1] × [−1, 1], with L = 5.728. upper bounding its Lipschitz constant with respect to the max norm. Algorithm 1 with τ = 0.01 and Sˆ initialized as X was used to determine an invariant set. Figure 4 shows the area of the candidate invariant set over each iteration of the algorithm compared to the area of the invariant set of the level set of the Lyapunov function, V (x) = x21 + x22. The invariant set produced by Algorithm 1 has a larger invariant set than that of the level s-
et and required 934 partitions. In total, 2,178 sampled (x, x+) pairs were needed for Algorithm 1 to determine S.
Figure 5 shows the scalar function verifying convergence of (7), where BE =[−0.21875, 0.21875] × [−0.21875, 0.21875]. The optimization problem was created using Theorem 15
where β was minimized. Here, αˆi=c∆(xi, BE ) + c√2ri was used with c≥0.15 and xi and ri defined by the node. Additional data was needed to find the Lyapunov function; all nodes were divided until they hit the threshold, τ producing 3,946 pairs of {x, x+} data. Condition (5d) held with β=0.0057 – thus, the sublevel set V (x) ≤ 0.0057 is the invariant approximation of the minimal PI set.
REFERENCES
Alberto, L.F. et al. (2007). An invariance principle for nonlinear discrete autonomous dynamical systems. IEEE Tran. Aut. Ctrl., 52(4), 692–697.
Anderson, J. and Papachristodoulou, A. (2015). Advances in computational lyapunov analysis using sumof-squares programming. Discrete Cont Dyn-B, 20(8). Blanchini, F. et al. (2008). Set-theoretic methods in control, volume 78. Springer.
Borrelli, F. et al. (2017). Predictive control for linear and hybrid systems. Cambridge University Press. Dawson, C. et al. (2023). Safe control with learned certificates: A survey of neural lyapunov, barrier, and contraction methods for robotics and control. IEEE Trans. Robot., 39(3), 1749–1767. Dellnitz, M. and Junge, O. (2002). Set oriented numerical methods for dynamical systems. Handbook of dynamical systems, 2, 221–264. Dellnitz, M. et al. (2001). The algorithms behind gaio—set oriented nume-
rical methods for dynamical systems. In Ergodic theory, analysis, and efficient simulation of dynamical systems, 145–174. Springer. Dorea, C.E.T. and Hennet, J. (1999). (a, b)-invariant polyhedral sets of linear discrete-time systems. J. Opt. Theory. Appl., 103, 521–542.
Fitzpatrick, P. (2009). Advanced calculus, volume 5. American Mathematical Soc. Giesl, P. and Hafstein, S. (2014). Computation of lyapunov functions for nonlinear discrete time systems by linear programming. J. Differ. Equ. Appl., 20(4), 610–640. Herceg, M. et al. (2013). Multi-Parametric Toolbox 3.0. In Proc. of Eur. Control Conf., 502–510. Zu ̈rich, Switzerland. Kashani, A. et al. (2024). Probabilistic data-driven invariance for constrained control of nonlinear systems. IEEE Ctrl. Sys. Lett. Ker-
rigan, E.C. (2000). Robust constraint satisfaction: Invariant sets and predictive control. University of London. Korda, M. (2020). Computing controlled invariant sets from data using convex optimization. SIAM J. Control Optim., 58(5), 2871–2899. Korda, M. et al. (2014). Controller design and region of attraction estimation for nonlinear dynamical systems. IFAC Proceedings Volumes, 47(3), 2310–2316. LaSalle, J.P. (2012). The stability and control of discrete processes, volume 62. Springer Science &-
 Business Media.
Lazar, M. (2006). Model predictive control of hybrid systems: Stability and robustness. Ph.D. thesis, Eindhoven University of Technology. Meagher, D. (1982). Geometric modeling using octree encoding. Computer graphics and image processing, 19(2), 129–147. Nejati, A. and Zamani, M. (2023). Data-driven synthesis of safety controllers via multiple control barrier certificates. IEEE Ctrl. Sys. Lett, 7, 2497–2502. Strong, A.K. et al. (2025). Data driven synthesis of invariant sets for unmodeled lipscht-
iz dynamical systems using a tree data structure. In Amer. Ctrl. Conf. Wood, G.R. and Zhang, B. (1996). Estimation of the lipschitz constant of a function. J. of Glob. Optim., 8, 91–103.

---

## Processing Information

- **Processing Library:** Zotero PDFWorker
- **Processing Date:** 2026-02-10T18:16:18.248Z
- **Text Length:** 29676 characters
- **Success:** Text extraction completed
- **PDF Library Used:** Zotero PDFWorker
- **Pages Processed:** 6 of 6
