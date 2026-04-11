# PDF Document: Shoja et al. - 2025 - Parallel Domain-Decomposition Algorithms for Complexity Certification of Branch-and-Bound Algorithms.pdf

**File Path:** Shoja et al. - 2025 - Parallel Domain-Decomposition Algorithms for Complexity Certification of Branch-and-Bound Algorithms.pdf

**Processed Date:** 2026-02-10T18:18:33.785Z

**File Size:** 876.19 KB

**Total Pages:** 9

**Extracted Pages:** 9

**PDF Library:** Zotero PDFWorker

**Attachment Item ID:** 2788

**Title:** Parallel Domain-Decomposition Algorithms for Complexity Certification of Branch-and-Bound Algorithms for Mixed-Integer Linear and Quadratic Programming

**Collection:** Large Files

---

## Extracted Text Content

Parallel Domain-Decomposition Algorithms for Complexity Certification
of Branch-and-Bound Algorithms for Mixed-Integer Linear and
Quadratic Programming
Shamisa Shoja*, Daniel Arnström**, Daniel Axehill*
Abstract— When implementing model predictive control (MPC) for hybrid systems with a linear or a quadratic performance measure, a mixed-integer linear program (MILP) or a mixed-integer quadratic program (MIQP) needs to be solved, respectively, at each sampling instant. Recent work has introduced the possibility to certify the computational complexity of branch-and-bound (B&B) algorithms when solving MILP and MIQP problems formulated as multi-parametric MILPs (mp-MILPs) and mp-MIQPs. Such a framewo-
rk allows for computing the worst-case computational complexity of standard B&B-based MILP and MIQP solvers, quantified by metrics such as the total number of LP/QP iterations and B&B nodes. These results are highly relevant for real-time hybrid MPC applications. In this paper, we extend this framework by developing parallel, domain-decomposition versions of the previously proposed algorithm, allowing it to scale to larger problem sizes and enable the use of high-performance computing (HPC) resour-
ces. Furthermore, to reduce peak memory consumption, we introduce two modifications to the existing (serial) complexity certification framework, integrating them into the proposed parallel algorithms. Numerical experiments show that the parallel algorithms significantly reduce computation time while maintaining the correctness of the original framework.
I. INTRODUCTION
To determine the optimal control inputs in model predictive control (MPC), an optimization problem is solved at each time step. When MPC is applied to hybrid systems that contain both continuous and discrete dynamics, the resulting optimization problems, depending on the chosen performance measure, can be formulated as mixed-integer linear programs (MILPs) (for 1-norm or ∞-norm) or mixedinteger quadratic programs (MIQPs) (for 2-norm) [1]–[3]. In MPC applications, system states and reference signal-
s are usually assumed to belong to a closed (in many applications polyhedral) set and are considered as parameters in the optimization problem. This allows for the formulation of these problems as multi-parametric MILP (mp-MILP) and mp-MIQP problems [4]. Computing the solutions to these optimization problems parametrically offers the advantage of
*S. Shoja and D. Axehill are with the Division of Automatic Control, Department of Electrical Engineering, Linköping University, Sweden. Email: {shamisa.shoja, daniel.axehill}@liu.se. **D. Arnström is with the Division of Systems and Control, Department of Information Technology, Uppsala University, Sweden. Email: daniel.arnstrom@it.uu.se.
This work was partially supported by the Wallenberg AI, Autonomous Systems and Software Program (WASP) funded by the Knut and Alice Wallenberg Foundation. The National Academic Infrastructure for Supercomputing in Sweden (NAISS) is also acknowledged for providing access to the Sigma HPC cluster.
shifting most of the online computational burden offline [5]. However, storing pre-computed solutions might require a significant amount of memory and can become increasingly complex for high-dimensional problems, limiting its use on embedded hardware. The traditional alternative to solving these optimization problems parametrically offline is to solve these problems online in real-time, which in the MPC application considered in this work means solving MILPs and MIQPs under real-time constraints.-
 In such a setup, it is clearly of high interest to be able to obtain relevant bounds on the worst-case computational complexity. Such guarantees on the worst-case computational complexity for LPs, QPs, MILPs, and MIQPs have been provided in, e.g., [6], [7], [8], [9], [10], and [11]–[13], respectively. In particular, the unified certification method presented in [13] focuses on determining the worst-case computational complexity for solving MILP and MIQP instances to optimality that originate from-
 a given mp-MILP or mp-MIQP and a corresponding polyhedral parameter set, when employing the standard branchand-bound (B&B) algorithm. This certification is performed through the process of recursively partitioning the parameter space based on the solver state. The complexity measures considered in [9], [12], [13] are the number of linear systems of equations that are solved in the subsolver of B&B (the iteration number) and the number of relaxations (nodes) required to be solved in B&B. Neverthel-
ess, this method might require a considerable amount of processing time and memory, particularly as the size of the problem increases. The primary contribution of this work is proposing complexity certification algorithms that can be executed in parallel, with the aim to distribute both the computational load and memory requirements across a (potentially large) number of workers [14]–[16]. In particular, our objective is to introduce parallel versions of our previously presented complexity certifi-
cation framework, which will open up for the consideration of larger problem sizes and the certification of more challenging problems. This not only improves computation time but also enables the use of high-performance computing (HPC) to further expand the range of problem sizes that can be certified within a reasonable timeframe. When certifying larger problem instances in this work, a significant increase in peak memory consumption was observed. To address this, we propose two key modifications-
 to the (serial) complexity certification framework presented in [13]. These modifications are then incorporated into the proposed parallel algorithms to reduce peak memory usage.
arXiv:2503.16411v1 [eess.SY] 20 Mar 2025

To summarize, the main contributions of this paper are:
• Two parallel algorithms for certifying the complexity of B&B-based MILP and MIQP solvers. • Two novel strategies for reducing peak memory consumption.
II. PROBLEM FORMULATION
In this work, we consider mp-MILP problems of the form
mxin cT x (1a)
PmpMILP(θ) : s.t. Ax ⩽ b(θ), (1b)
xi ∈ {0, 1}, ∀i ∈ B, (1c)
where x ∈ Rnc ×{0, 1}nb is the decision variable vector with n = nc + nb components, including nc continuous and nb binary components, and θ is the parameter vector belonging to the polyhedral set Θ0 ⊂ Rnθ . The objective function in (1) is defined by c ∈ Rn, and the feasible set is characterized by the matrix A ∈ Rm×n and the vector b(θ), which is an affine function of θ, given by b(θ) = b + W θ, where b ∈ Rm and W ∈ Rm×nθ . Moreover, B represents the index set of the binary decision variables. T-
he problem (1) is non-convex and is known to be N P-hard [17]. A convex relaxation of (1) can be derived by relaxing the binary constraints (1c) as follows
mxin cT x (2a)
PmpLP(θ) : s.t. Ax ⩽ b(θ), (2b)
0 ⩽ xi ⩽ 1, ∀i ∈ B, (2c)
xi = 0, ∀i ∈ B0, xi = 1, ∀i ∈ B1, (2d)
which is in the form of an mp-LP problem. Here, B0 ⊆ B and B1 ⊆ B represent the indices of binary variables fixed to 0 and 1, respectively, with B0 ∩ B1 = ∅.
For a fixed parameter vector θ ̄ ∈ Θ0, the problem (1) is
simplified to the (non-parametric) MILP problem PMILP(θ ̄)
with b(θ ̄) = b + W θ ̄. An LP relaxation PLP(θ ̄) of the MILP
problem PMILP(θ ̄) can be obtained from (2) by fixing θ to θ ̄. We additionally consider mp-MIQP problems of the form
mxin
1
2 xT Hx + f (θ)T x (3a)
PmpMIQP(θ) : s.t. Ax ⩽ b(θ), (3b)
xi ∈ {0, 1}, ∀i ∈ B, (3c)
where H ∈ Sn++ and f (θ) is an affine function of θ, given
by f (θ) = f + fθθ, with f ∈ Rn and fθ ∈ Rn×nθ . The decision variables, parameter vector, and feasible set are defined similarly to those in (1). A convex relaxation PmpQP(θ) of (3) can similarly be derived by relaxing the binary constraints (3c) into constraints (2c). Furthermore, for a fixed parameter θ ̄ ∈ Θ0,
the (non-parametric) MIQP problem PMIQP(θ ̄) is obtained
from (3) with b(θ ̄) = b + W θ ̄ and f (θ ̄) = f + fθθ ̄. A commonly used technique to compute the solutions of MILPs and MIQPs is branch and bound (B&B) [17]. This method explores a binary search tree in search for a possible optimal solution, where each node within the tree represents
a convex (LP/QP) relaxation. The relaxations can be solved using an LP/QP solver, such as the simplex or active-set method [18]. An important feature of B&B is that the results from the solutions to the relaxations can be used to prove that parts of the tree can be pruned from explicit exploration. Such pruning can be done if one of the following conditions is satisfied in a node [17]:
1) The objective function value of the relaxation (the lower bound), denoted as J, is greater than the objective function value of the best-known integer-feasible solution so far (the upper bound), denoted as J ̄. In other words, J ≥ J ̄, which is referred to as the dominance cut. The infeasibility cut is a special case of this, where J = ∞. 2) The solution to the relaxation, denoted x, is integer feasible, which is referred to as the integer-feasibility cut.
If none of these conditions holds in a node, the tree is branched at that node by fixing a relaxed binary variable, which generates two new nodes (child nodes to the parent node). In this paper, we denote a B&B node representing a relaxation by η ≜ (B0, B1), where B0 and B1 are defined in (2d). The first node, i.e., the root node, is thus denoted η0 = (∅, ∅), where all the binary variables have been relaxed. Refer to [17] for a detailed description of the B&B method. Throughout this paper, N0 deno-
tes the set of nonnegative integers, N1:N represents the finite set {1, . . . , N }, and {Ci}N
i=1 denotes a finite collection {C1, . . . , CN } of N
elements. When N is unimportant, we use {Ci}i instead.
III. SERIAL COMPLEXITY CERTIFICATION FRAMEWORK
This section briefly reviews the (serial) complexity certification framework for standard B&B algorithms for MILPs and MIQPs presented in [13], referred to as the B&BCERT algorithm. The framework takes an mp-MILP (1) or mpMIQP (3) along with the parameter set Θ0 as inputs and partitions Θ0 based on the computational effort required to reach optimality. Specifically, B&BCERT iteratively decomposes Θ0 into regions where the parameters produce the same solver state sequence. The complexity measure, d-
enoted by κ, quantifies the number of linear systems of equations solved in relaxations (iterations) or the number of B&B nodes explored. Moreover, as shown in [13], the framework can be extended to include other complexity measures, such as the number of floating-point operations (flops). For clarity and completeness, a version of the B&BCERT certification algorithm is provided in Algorithm 1. This algorithm maintains two lists: S, which stores regions that have not yet terminated, and F, which s-
tores the terminated regions. Each tuple Θ, T , κtot, J ̄ in S, denoted reg for short, consists of the following elements:
• Θ: the corresponding parameter set. • T = {ηi}i: a sorted list of pending nodes, corresponding to the local B&B tree within the region. • κtot: the accumulated complexity measure obtained for the region to reach its current state. • J ̄(θ): the best-known integer feasible solution (i.e., the upper bound) for all θ ∈ Θ.

The initial tuple (reg0) passed to Algorithm 1 is (Θ0, T 0, κt0ot, J ̄0) = (Θ0, {(∅, ∅)}, 0, ∞), which contains the entire parameter set Θ0 and the root node. The output of the algorithm is a partition of Θ0 along with the corresponding complexity measure.
Algorithm 1 B&BCERT: (serial) B&B complexity certification algorithm [13]
Input: reg0 = (Θ0, T 0, κt0ot, J ̄0) Output: Final partition F 1: F ← ∅ 2: Push reg0 to S 3: while S ̸= ∅ do
4: Pop reg = (Θ, T , κtot, J ̄) from S 5: if T = ∅ then 6: Add reg to F 7: else
8: Pop new node η from T 9: {(Θj , κj , J j )}N
j=1 ← SOLVECERT(η, Θ) 10: for j ∈ N1:N do
11: regj ← (Θj , T , κj + κtot, J ̄)
12: S ← CUTCERT (regj , J j , η, S)
13: Return F
Algorithm 1 follows these main steps for a selected reg at Step 4:
• If no pending nodes remain in T , reg is added to the final partition F (Step 6). • Otherwise, a node is selected from T (Step 8), and its corresponding (LP/QP) relaxation is certified using the SOLVECERT subroutine (Step 9). This subroutine partitions the parameter set Θ, associating each resulting subregion Θj with the objective function value Jj(θ) (lower bound) and the required complexity κj. An example of SOLVECERT is provided in [8]. • The region is then decomposed into N subregions (Step -
11). For each subregion Θj, the parameter-dependent B&B cut conditions (see Section II, Items 1-3) are evaluated using the CUTCERT procedure. More details on this procedure can be found in [13, Algorithm 8].
Throughout this paper, we assume that the SOLVECERT function satisfies the properties outlined in Assumption 1 of [13] (which hold for certain subsolvers based on results for mp-LPs and mp-QPs), summarized below. The polyhedral condition in parentheses holds if the inputted Θ is polyhedral. Assumption 1: The SOLVECERT function partitions a (polyhedral) parameter set Θ into a finite collection of (polyhedral) subregions {Θj}j. The value function J(θ) is (polyhedral) piecewise affine (PWA) for MILPs-
 and (polyhedral) piecewise quadratic (PWQ) for MIQPs. Additionally, the complexity measure κ(θ) is (polyhedral) piecewise constant (PWC). Moreover, the complexity measure obtained from SOLVECERT is assumed to coincide with that of the corresponding online solver for any θ ∈ Θ0.
IV. PARALLEL COMPLEXITY CERTIFICATION
FRAMEWORK
In B&BCERT, the entire set Θ0 is processed sequentially, iteratively decomposing it into subregions Θ ⊆ Θ0 while exploring all pending nodes in the B&B search tree until an optimal solution is found or infeasibility is detected ∀θ ∈ Θ. In this section, we extend this approach to enable parallel execution of the certification algorithm for mp-MILPs and mpMIQPs in (1) and (3), respectively. The following subsections introduce two parallel versions of B&BCERT based on domain decomposition, which dist-
ributes tasks across available computational resources, referred to as workers. The main processor responsible for this distribution is referred to as the master [16].
A. Static domain decomposition
An approach to parallelizing the certification framework is to divide the parameter set Θ0 into smaller subsets, for example, by partitioning it into equally sized boxes. These subregions are then distributed among available processors (workers), with each worker independently applying the B&BCERT algorithm to its assigned subset. The B&BCERTSTAT procedure, detailed in Algorithm 2, implements this static domain decomposition strategy. The worker pool, denoted by W, represents the collection of pro-
cessors executing tasks concurrently. Starting with the initial tuple reg0 = (Θ0, T 0, κt0ot, J ̄0) = (Θ0, {(∅, ∅)}, 0, ∞) (as in Algorithm 1), the algorithm partitions Θ0 (Step 3) and distributes the subregions across workers. Each worker w ∈ W independently executes B&BCERT on its assigned subregion (Step 6). Finally, the results are aggregated into a final partition Fs (Step 7), which includes the partitioned parameter set and corresponding complexity measures.
Algorithm 2 B&BCERTSTAT: Static parallel domaindecomposition complexity certification algorithm
Input: reg0 = (Θ0, T 0, κt0ot, J ̄0) Output: Final partition Fs 1: Fs ← ∅ 2: Initialize worker pool W
3: Partition Θ0 into np parts {Θk}np
k=1
4: for all k ∈ N1:np in parallel do 5: regk ← Θk, T 0, κ0
tot, J ̄0
6: F k ← B&BCERT(regk)
7: Append F k for all k to Fs 8: Return Fs
Algorithm 2 follows the master-worker paradigm [16], where the master partitions the initial parameter set, assigns subregions to workers, and collects the results. While conceptually straightforward, this approach does not exploit the problem’s inherent structure. It potentially introduces initial artificial regions, leading to redundant computations and a potential reduction in overall efficiency.

B. Dynamic domain decomposition
This section introduces a parallel method that dynamically distributes computational tasks among available resources while leveraging the problem’s solution structure. Unlike static decomposition, this approach assigns tasks to workers based on the relaxation’s solution structure, aiming to improve resource utilization efficiency and minimize redundant computations. The B&BCERTDYN procedure, detailed in Algorithm 3, implements this dynamic domain decomposition strategy. Similar to Algorithm 1, it -
maintains two lists: Sd for candidate regions and Fd for terminated regions. The algorithm takes as input an initial tuple reg0 = (Θ0, T 0, κ0
tot, J ̄0) and a user-defined parameter r ∈ [0, 1] that determines the distribution ratio. The output is a partition of Θ0 along with the corresponding complexity measures. Upon its initial invocation, the algorithm starts with reg0 = (Θ0, T 0, κ0
tot, J ̄0) = (Θ0, {(∅, ∅)}, 0, ∞) (as in Algorithm 1). Additionally, the algorithm employs the same underlying SOLVECERT and CUTCERT functions as those in Algorithm 1.
Algorithm 3 B&BCERTDYN: Dynamic parallel domaindecomposition complexity certification algorithm
Input: reg0 = (Θ0, T 0, κ0
tot, J ̄0), ratio r Output: Final partition Fd 1: Fd ← ∅ 2: Push reg0 to Sd 3: Initialize worker pool W 4: while Sd ̸= ∅ do
5: Pop reg = (Θ, T , κtot, J ̄) from Sd 6: if T = ∅ then
7: Add reg to Fd 8: else
9: Pop new node η from T 10: {(Θj , J j , κj )}N
j=1 ← SOLVECERT(η, Θ) 11: for j ∈ N1:N do
12: regj ← (Θj , T , κj + κtot, J j )
13: Sd ← CUTCERT(regj , J j , η, Sd)
14: Sw ← Pop ⌈r |Sd|⌉ tuples from Sd 15: for all k ∈ N1:|Sw| in parallel do
16: Pop regk from Sw 17: F k ← B&BCERTDYN(regk, r)
18: Append F k for all k to Fd
19: Return Fd
Algorithm 3 leverages the fact that each tuple in Sd is processed independently, allowing the distribution of regions across multiple independent workers, as implemented in Steps 16–17. The distribution ratio r ∈ [0, 1] at Step 14 specifies the proportion of regions in Sd to be assigned to workers, where |Sd| denotes the number of tuples in Sd. The value of r can be dynamically adjusted based on factors such as the level of the node in the B&B tree, such that at the early stages of the tree, more -
tasks (regions) are distributed to other workers, while at later stages, fewer regions are
distributed. The for loop at Step 15 distributes the fraction r of these regions to available workers in W, while the remaining regions are retained for evaluation by the master. Each worker then executes the B&BCERTDYN function on its assigned tuple regk, recursively invoking Algorithm 3 until termination. Once a worker completes its tasks, it returns the results to the master, which aggregates them into the final partition Fd at Step 18. The algorithm terminates when all workers complete their t-
asks and no unprocessed regions remain in Sd. Algorithm 3 follows a multiple-master-worker paradigm [16], where each worker can dynamically assume the role of a master, distributing tasks to idle workers (see Fig. 1). By dynamically distributing tasks and concurrently processing regions, Algorithm 3 improves scalability and is well-suited for large-scale certification problems.
Master0
Worker1(Master1)
Worker1,1 Worker1,2
Worker2(Master2)
Worker2,1
WorkerP
Fig. 1: Topology of the proposed parallel Algorithm 3.
Remark 1: At Step 17 of Algorithm 3, if the distribution ratio r (input argument) for the worker is set to 0, then B&BCERTDYN executed by the worker reduces to B&BCERT, as no further task distribution occurs. Consequently, each worker independently executes Algorithm 1 on its assigned subregion. Upon completing its task and certifying the entire subregion, the worker returns the results directly to the master. In this case, Algorithm 3 follows a master-worker paradigm, where a single master certif-
ies the root node before assigning tasks to workers. This special case closely resembles Algorithm 2, with the key difference that the parameter set is partitioned only after certifying the root node. This ensures that the final partition coincides with the one generated by the serial algorithm, avoiding artificial subdivisions of the parameter set.
C. Properties of the parallel algorithms
This section investigates the properties of the proposed parallel algorithms. These algorithms spatially parallelize the serial certification framework across the parameter set, while the exploration of nodes in the B&B search tree remains sequential. The following theorems formally establish that the sequences of B&B nodes explored in Algorithms 2 and 3 are equivalent to those explored by Algorithm 1 (the serial counterpart) for all parameters of interest. Theorem 1: Let Bs(θ) denote the sequence-
 of nodes explored by Algorithm 2 (B&BCERTSTAT) applied to the problem (1)/(3) for a fixed θ ∈ Θ0 in a terminated region in Fs. Moreover, let B(θ) represent the sequence of nodes explored by Algorithm 1 (B&BCERT) applied to the same

problem for that θ in a terminated region in F. Then, Bs(θ) = B(θ), ∀θ ∈ Θ0.
Proof: Both algorithms start with the same initial tuple reg0 = (Θ0, T 0, κ0
tot, J ̄0) = (Θ0, {(∅, ∅)}, 0, ∞), ensuring identical starting conditions. In Algorithm 2, Θ0 is parti
tioned into artificial regions {Θk}np
k=1, and each such region
retains the same initial T 0, κ0
tot, and J ̄0. By construction,
∪Θk = Θ0, ensuring that for any θ ∈ Θ0, there is a unique artificial region Θk that contains θ. Now, consider an artificial region Θk and a fixed θ ∈ Θk. Algorithm 2 processes θ by applying B&BCERT to the artificial region Θk, while in Algorithm 1, θ is processed by applying the exact same steps to the entire parameter set Θ0 ∋ θ. Given that the initial node list and upper bound are the same in both algorithms, the node exploration process, including calls to SOLVECERT and CUTCERT, is performed id-
entically for θ in both cases. Consequently, the node exploration sequences remain identical in both algorithms for θ, i.e., Bs(θ) = B(θ). Since θ and k are arbitrarily, this holds ∀θ ∈ Θk, and all k, completing the proof. Therefore, although Algorithm 2 introduces an artificial partitioning of Θ0, potentially resulting in a finer partitioning in Fs compared to F , Theorem 1 ensures that this does not affect the sequence of nodes explored for any θ ∈ Θ0. In other words, the correctness of the node-
 exploration process and its equivalence to the serial algorithm are preserved. Theorem 2: Let Bi
d(θ) denote the sequence of nodes explored by Algorithm 3 (B&BCERTDYN) applied to the problem (1)/(3) for a terminated region Θi in Fd. Moreover, let Bi(θ) represent the sequence of nodes explored by Algorithm 1 (B&BCERT) applied to the same problem for the region Θi in F . Then, Bi
d(θ) = Bi(θ), ∀θ ∈ Θi, and all i.
Proof: Consider Algorithms 1 and 3, both initialized with the same initial tuple reg0. Now, consider an iteration of Algorithm 3 starting from Step 5, where a tuple reg = (Θ, T , κtot, J ̄) is selected. By inspection, the sequence of operations at Steps 6–13 is identical to Steps 5–12 in Algorithm 1 when processing reg. Algorithm 3 then follows one of the following cases based on the value of r: • r = 0: In this case, no subregions are distributed among workers, and Algorithm 3 reduces to Algorith-
m 1. Thus, the sequence of nodes explored in Θi remains the same in both algorithms, i.e., Bi
d(θ) = Bi(θ), ∀θ ∈ Θi.
• r ̸= 0: In this case, Algorithm 3 dynamically distributes subregions among workers. Let regk = (Θk, T k, κk
tot, J ̄k) be selected from Sd at Step 14 and assigned to a worker w ∈ W. The worker then applies the same steps (from Step 6 to Step 13) to regk, just as Algorithm 1 would process regk at later iterations. If the worker w further distributes subregions to other idling workers by recursively calling B&BCERTDYN, the same reasoning applies to each recursion. Each worker processes its assigned subregions independently but follows the same node exploration strategy as the serial algorithm. Hence, the -
sequence of explored nodes remains consistent as the serial algorithm. Therefore, for any ter
minated Θi, Algorithm 3 explores the same sequence of nodes as Algorithm 1, ensuring Bi
d(θ) = Bi(θ), ∀θ ∈
Θi, ∀i.
This completes the proof. An important observation is that while different parts of the parameter space are generally processed in a different order in the parallel algorithms compared to the serial one, the exploration (and hence certification) of the B&B process for any fixed parameter θ ∈ Θ0 remains unique and follows the same order as in the serial algorithm. As a key result, both proposed parallel algorithms yield the same complexity measures for θ as the serial algorithm. Consequently, these-
 parallel algorithms provide complexity measures that coincide pointwise with the online B&B method for any fixed θ ∈ Θ0, as shown in Corollaries 1 and 2. Corollary 1: Let Bs(θ) (Bd(θ)) denote the sequence of nodes explored by Algorithm 2 (Algorithm 3) applied to the problem (1)/(3) for any fixed θ ∈ Θ0 in a terminated region in Fs (Fd). Moreover, let B∗(θ) represent the sequence of nodes explored to solve the corresponding MILP/MIQP problem for a fixed θ using the online B&B algorithm (e.g., [13,-
 Algorithm 1]). Then, B∗(θ) = Bs(θ) (= Bd(θ)), ∀θ ∈ Θ0.
Proof: The proof directly follows from Theorem 1 in [13], which establishes the pointwise equivalence of the explored nodes in the serial B&BCERT and the online B&B algorithms, combined with Theorem 1 (Theorem 2) in this paper. Corollary 2: Let κt∗ot(θ) denote the accumulated complexity measure returned by the online B&B algorithm (e.g., [13, Algorithm 1]) to solve the MILP or MIQP problem for any fixed θ ∈ Θ0. The accumulated complexity measure κtot(θ) : Θ0 → N0 returned by Algorithm 2 (Algorithm-
 3) to certify the problem (1) or (3) for a terminated region Θi in Fs (Fd) satisfies: (i) κtot(θ) is PWC, and (ii) κtot = κt∗ot,
∀θ ∈ Θi, and all i. Proof: The proof directly follows from (i) Corollary 2 and (ii) Theorem 2 in [13], which establishes the pointwise equivalence of the complexity measure in the serial B&BCERT and the online B&B algorithms, along with Theorem 1 (Theorem 2) in this paper. Moreover, for MILPs where the parameter set is polyhedral and all partitions remain polyhedral, κtot(θ) is polyhedral PWC.
V. REDUCING PEAK RESOURCE CONSUMPTION
Algorithm 1, and consequently the parallel Algorithms 2 and 3, can exhibit high memory demands, particularly as the problem dimension increases. A major contributor to this memory intensity is the storage requirement for the number of tuples maintained in the list S during execution. In this section, we propose two modifications to Algorithm 1 to reduce the number of stored tuples in S throughout the algorithm’s execution, thereby lowering peak memory consumption. These refinements are then incorp-
orated into the proposed parallel algorithms. To implement these improvements, we introduce a variable called state (∈ {none, "Fin", "UnFin", "CC"}) for each

region, indicating its current state. The meaning of these states is clarified in the following subsections.
A. Early termination of relaxation’s certification
When evaluating a node within a region in Algorithm 1, the relaxation—either an mp-LP (2) or an mp-QP—is certified using SOLVECERT within Θ at Step 9. This process can be computationally intensive, particularly at the root node, where the entire parameter set is considered. Additionally, executing the SOLVECERT procedure to completion often generates a large number of regions, which are stored in S, leading to excessive resource consumption. To address these challenges, we propose temporarily paus-
ing the SOLVECERT procedure after a predetermined number of regions have been generated and processed. This allows certification to be paused if it becomes resource-intensive and resumed later. To implement this approach, each region produced by the SOLVECERT procedure is assigned a state as follows:
• "Fin" (finished): if the mp-LP/mp-QP relaxation in this region has been solved to optimality or determined to be infeasible or unbounded. • "UnFin" (unfinished): if the SOLVECERT procedure was paused before reaching a conclusive result.
Algorithm 1 is then modified to evaluate cut conditions exclusively in regions with the "Fin" state, while unfinished regions are stored in S for certification at a later stage. For each unfinished region, the information obtained before pausing is preserved, allowing the SOLVECERT procedure to resume efficiently from the paused state rather than restarting from scratch. This warm-starting capability helps mitigate the computational burden associated with certifying complex subproblems.
B. Delayed cut-condition evaluation
In Algorithm 1, parameter-dependent cut conditions are evaluated iteratively over a loop for all resulting (finished) regions at Steps 10–12. This evaluation may further partition each Θj (e.g., when evaluating dominance cuts or selecting branching indices [13]), which increases the number of tuples stored in S and, consequently, the memory usage. To reduce memory consumption, Algorithm 1 can be modified to delay cut condition evaluations. Specifically, instead of evaluating cut conditions at Step-
 12 for the node corresponding to finished regions, these regions are stored in S with their state set to "CC" (cut conditions pending). When a region with the "CC" state is later popped from S, cut conditions are evaluated for its corresponding node, and its state is updated to "Fin" (finished). This modification reduces memory usage by deferring region partitioning from evaluating cut conditions, ensuring that S contains fewer tuples at any given time.
C. Modified parallel certification algorithm
To minimize peak memory usage, we integrate the techniques outlined in Sections V-A and V-B into the proposed parallel algorithms. In this revised approach, each tuple
in S is expanded to include the lower bound J(θ), the region’s state, and the current node ηc, which are used during cut condition evaluation. Consequently, each tuple is now defined as reg = (Θ, T , κtot, J ̄, J, state, ηc). At the start of the algorithm, the initial tuple is set to reg0 = (Θ0, {(∅, ∅)}, 0, ∞, ∞, none, none).
To update Algorithm 2, these techniques are first incorporated into Algorithm 1 as described, resulting in a modified serial algorithm referred to as the B&BCERTMOD function. Consequently, Algorithm 2 is updated to include these strategies by replacing the B&BCERT function at Step 6 with the modified serial algorithm B&BCERTMOD. The updated version of Algorithm 3, incorporating both modifications, is presented in Algorithm 4. In this algorithm, the modifications from Section V-A are implemented at-
 Steps 12 and Steps 14–17, while the modifications described in Section V-B are implemented at Steps 6–7.
Algorithm 4 B&BCERTDYNMOD: Modified dynamic parallel domain-decomposition complexity certification algorithm
Input: reg0 = (Θ0, T 0, κt0ot, J ̄0, J 0, state0, η0), ratio r Output: Final partition Fd 1: Fd ← ∅ 2: Push reg0 to Sd 3: Initialize worker pool W 4: while Sd ̸= ∅ do
5: Pop reg = (Θ, T , κtot, J ̄, J , state, ηc) from Sd 6: if state = "CC" then 7: Sd ← CUTCERT(reg, J , ηc, Sd)
8: else if state = "Fin" and T = ∅ then 9: Add reg to Fd 10: else 11: Pop new node η from T 12: {(Θj, J j, κj, statej)}N
j=1 ← SOLVECERT(η, Θ, state) 13: for j ∈ {1, . . . , N } do 14: if statej = "Fin" then
15: regj ← (Θj, T j, κtot + κj, J ̄j, J j, "CC", η) 16: else
17: regj ← (Θj, T j, κtot + κj, J ̄j, J j, "unFin", η)
18: Push regj to Sd
19: Sw ← Pop ⌈r |Sd|⌉ tuples from Sd 20: for all k ∈ N1:|Sw| in parallel do
21: Pop regk from Sw 22: F k ← B&BCERTDYNMOD(regk, r)
23: Append F k for all k to Fs
24: Return Fd
To summarize Algorithm 4, for a selected reg at Step 5, one of the following three scenarios occurs based on its state:
i. Evaluating cut conditions: The cut conditions are evaluated within the region using CUTCERT, and the node is either cut or branched. The results are then stored in Sd (Step 7). ii. Terminating the region: If no pending nodes remain, the

region is terminated and added to Fd (Step 9).
iii. Certifying the relaxation and distributing regions: The relaxation is certified within the region using SOLVECERT (Step 12), and the results are stored in Sd (Steps 14–18). Next, a fraction r of regions stored in Sd is selected for distribution among available workers (Step 19). Each worker then processes its assigned region using the modified parallel algorithm B&BCERTDYNMOD (Step 22).
The properties of the modified parallel algorithms follow directly from Theorems 1–2 and Corollaries 1–2, with the corresponding modified serial and parallel algorithms substituted accordingly.
VI. NUMERICAL EXPERIMENTS
In this section, the proposed parallel algorithms were applied to randomly generated MILPs and MIQPs in the form of (1) and (3) and an MIQP originating from an MPC application. The SOLVECERT procedure utilizes the certification algorithm described in [8]. The numerical experiments were implemented in Julia, with computations for higher-dimensional problems conducted on two compute nodes, each equipped with 32 cores and 96 GB of RAM, using resources from the National Supercomputer Centre (NSC) [19]-
.
A. Random examples
We first apply the proposed parallel algorithms to randomly generated MILPs and MIQPs in the form of (1) and (3), respectively. The coefficients of these problems were generated as: H ̄ ∼ N (0, 1), H = H ̄ H ̄ T , f ∼ N (0, 1), fθ ∼ N (0, 1), c ∼ N (0, 1), A ∼ N (0, 1), b ∼ U ([0, 2]), and W ∼ N (0, 1), where N and U represent the normal and uniform distributions, respectively. The parameter set was defined as Θ0 = {θ ∈ Rnθ | |θ| ≤ 0.5}. For Algorithms 3 and 4, different values of the ratio r were-
 selected from {1, 0.8, 0.4, 0}. Note that the case where r = 0 corresponds to the serial algorithm. In the experiments, the number of decision variables was set to n = 2nb, the number of constraints to m = n + 8, and the number of parameters to nθ = ⌈nb/4⌉. For example, the largest problem had dimensions nb = 30, n = 60, m = 68, and nθ = 8. For each value of nb, 25 random problems were generated and solved. Furthermore, for Algorithm 2, the number of initial partitions was set to np = n⌈n/4⌉−1
θ.
The proposed parallel algorithms were validated by comparing their results to those of the corresponding serial algorithm. A key finding is that, for both MILP and MIQP problem families, the worst-case complexity measures, including the worst-case accumulated number of iterations (κI ) and B&B nodes (κN ), were identical to those obtained by the serial algorithm across all experiments, confirming the correctness of the proposed algorithms. Fig. 2 illustrates the average worst-case (wc) complexity -
measures obtained by applying Algorithms 2 and 3 to randomly generated mpMILPs, as a function of nb for different problem sizes. The trend in the figure confirms that larger problem sizes require
significantly more iterations and nodes due to the combinatorial nature of the problem, highlighting the importance of parallelization strategies for certifying computationally demanding cases.
Fig. 2: Worst-case number of iterations and B&B nodes as a function of nb for random mp-experiments.
To illustrate the impact of parallel algorithms on computa
tion time, Fig. 3 presents the speed-up factor, defined as ts
tp ,
where ts and tp denote the CPU execution times of the serial and parallel certification algorithms, respectively. These results are based on experiments conducted on supercomputers for random MILPs with nb = 30, presented as a function of the number of employed workers. For reference, the ideal linear speed-up is also shown.
Fig. 3: Speed-up factor of Algorithm 2 (dashed red line) alongside the speed-up factor of Algorithm 3 for three different ratios (solid lines), compared to the ideal linear speed-up (dotted black line), as a function of the number of workers for random experiments.
From Fig. 3, it is clear that the parallel algorithms significantly accelerate computation. For a larger number of workers, however, the speed-up deviates from the ideal trend, highlighting the emergence of communication overhead. In particular, the speed-up factor closely follows the ideal linear trend for fewer workers when using Algorithm 3 (and its variant, Algorithm 4). Furthermore, larger distribution ratios can lead to more consistent speed-up. Algorithm 2, on the other hand, provides a mod-
erate improvement over Algorithm 1 and achieves a lower speed-up compared to Algorithm 3. This is primarily due to the extra regions generated from the initial artificial partitioning, which increase the computational workload (see Fig. 5 (b) and (d)). These results emphasize the importance of dynamic workload distribution to fully leverage the problem structure and improve

performance. To illustrate the reduction in peak resource consumption achieved by Algorithm 4, Fig. 4 shows the number of tuples stored in Sd (i.e., |Sd|) in the master over the course of Algorithms 3 and 4. In this experiment, the SOLVECERT subroutine was paused when a maximum of 100 regions was generated. Algorithm 4 generally requires more outer iterations, since in certain iterations, only the cut conditions are evaluated (see Steps 6–7). In this experiment, the master in Algorithm 4 performe-
d about 100 more outer iterations than Algorithm 3, during which |Sd| = 0 for Algorithm 3. While the total execution time for both algorithms was approximately the same, Algorithm 4 exhibited lower memory consumption. This is reflected in the maximum number of tuples stored in Sd, which is around 100 for Algorithm 4, compared to approximately 1000 for Algorithm 3. Notably, the peaks in Fig. 4 correspond to outer iterations in which a relaxation was certified.
Fig. 4: The number of tuples stored in Sd in the master during Algorithms 3 (solid blue line) and 4 (dotted red line).
Finally, to provide visual insights into the results of Algorithms 2 and 3, Fig. 5 presents a two-dimensional slice of the resulting partition for two randomly generated problems, with nb = 10 in (a) and (b), and nb = 20 in (c) and (d). Specifically, Fig. 5 (a) and (c) show the final regions generated using Algorithm 3, resulting in 36 and 2510 regions, respectively, identically to the final partitioning when applying Algorithm 1. Similarly, Fig. 5 (b) and (d) illustrate the partitions obtained us-
ing Algorithm 2, yielding 69 and 2696 regions, respectively. The additional partitions in Fig. 5 (b) and (d) arise from the initial artificial partitioning introduced in Algorithm 2.
B. MPC application
We now apply the proposed methods to a hybrid MPC problem involving a linearized inverted pendulum on a cart, constrained by a wall, as used in, e.g., [13], [20] (see Fig.6). The objective is to stabilize the pendulum at the origin (z1 = 0) while keeping it upright (z2 = 0). The control inputs consist of a force applied to the cart (u1) and a contact force from wall interaction (u2), introducing binary variables into the model. The state and input constraints follow those in [13], [20]. The hybrid-
 MPC controller employs a quadratic performance measure with a prediction/control horizon of N . The system’s initial state vector serves as the parameter vector θ in the multi-parametric setting, with the parameter
(a) (b)
(c) (d)
Fig. 5: Resulting parameter space partitions for two randomly generated examples, determined using Algorithm 3 in (a) and (c), and Algorithm 2 in (b) and (d). Results are shown for nb = 10 in (a) and (b), and nb = 20 in (c) and (d).
set determined by state constraints. The resulting mp-MIQP, formulated following [4], includes n = 4N decision variables, of which nb = 2N are binary. The weights matrices and dynamics are consistent with those in [20]. For further details, see [20].
Fig. 6: Regulating the inverted pendulum on a cart with contact forces.
Table I summarizes the complexity certification results for the (serial) certification Algorithm 1 and the parallel certification Algorithms 2 and 3 executed using 10 workers, as a function of the prediction horizon N . The table reports the number of constraints (m), the worst-case computational complexity in terms of iterations (κI
wc) and B&B nodes
(κN
wc), along with the CPU time required for certification (in seconds). The results highlight the impact of parallelization in reducing computational time. Specifically, as the problem size increases (i.e., as N grows), the parallel algorithms outperform the serial one in terms of certification time, while maintaining correct results.

Tab. I: The number of constraints (m) in the resulting mpMIQPs for the inverted pendulum example, along with worstcase complexity results and the computation time of the Julia implementation for Algorithm 1 (tser), Algorithm 2 (tstat), and Algorithm 3 (tdyn) across different prediction horizons (N ).
prob. dim. wc. complexity cert. time [sec] N m κIwc κwNc tser tstat tdyn
1 19 9 4 1.4 0.93 0.48 2 38 22 8 6.2 3.2 1.9 3 57 76 47 44.6 20.3 11.1 4 76 134 68 122 46.4 30.1 5 95 198 76 635 201.3 119.4 6 114 250 78 1311.6 326.9 212.7
VII. CONCLUSION
This paper presents parallel versions of the complexity certification framework for B&B-based MILP and MIQP solvers applied to the family of mp-MILPs and mp-MIQPs, extending its applicability to larger and more challenging problem instances. The proposed algorithms employ both static and dynamic domain decomposition to distribute computational workloads across available processing resources. To address the challenge of peak memory consumption in computationally demanding problems, two complementar-
y strategies are introduced and integrated into the parallel algorithms. These enhancements improve the scalability of the method, even for more memory-intensive problems. The parallel algorithms enable the use of HPC resources, facilitating the certification of larger and more complex problem instances. Numerical experiments demonstrate significant reductions in computation time while preserving the correctness of the certification results. Future work will focus on further refining the implement-
ation, including parallelizing the SOLVECERT subroutine to further distribute the computational workload.
REFERENCES
[1] V. Dua, N. A. Bozinis, and E. N. Pistikopoulos, “A multiparametric programming approach for mixed-integer quadratic engineering problems,” Computers & Chemical Engineering, vol. 26, no. 4-5, pp. 715733, 2002. [2] F. Borrelli, M. Baotic ́, A. Bemporad, and M. Morari, “Dynamic programming for constrained optimal control of discrete-time linear hybrid systems,” Automatica, vol. 41, no. 10, pp. 1709–1721, 2005. [3] F. Borrelli, A. Bemporad, and M. Morari, Predictive control for linear and hybrid s-
ystems. Cambridge University Press, 2017. [4] A. Bemporad, F. Borrelli, M. Morari et al., “Model predictive control based on linear programming – the explicit solution,” IEEE Transactions on Automatic Control, vol. 47, no. 12, pp. 1974–1985, 2002. [5] V. Dua and E. N. Pistikopoulos, “An algorithm for the solution of multiparametric mixed integer linear programming problems,” Annals of Operations Research, vol. 99, no. 1, pp. 123–139, 2000. [6] M. N. Zeilinger, C. N. Jones, and M. Morari, “Real-tim-
e suboptimal model predictive control using a combination of explicit MPC and online optimization,” IEEE Transactions on Automatic Control, vol. 56, no. 7, pp. 1524–1534, 2011. [7] G. Cimini and A. Bemporad, “Exact complexity certification of active-set methods for quadratic programming,” IEEE Transactions on Automatic Control, vol. 62, no. 12, pp. 6094–6109, 2017. [8] D. Arnström and D. Axehill, “A unifying complexity certification framework for active-set methods for convex quadratic programming-
,” IEEE Transactions on Automatic Control, vol. 67, no. 6, pp. 27582770, 2022.
[9] S. Shoja, D. Arnström, and D. Axehill, “Exact complexity certification of a standard branch and bound method for mixed-integer linear programming,” in Proceedings of the 61st IEEE Conference on Decision and Control (CDC), 2022, pp. 6298–6305. [10] S. Shoja and D. Axehill, “Exact complexity certification of suboptimal branch-and-bound algorithms for mixed-integer linear programming,” IFAC-PapersOnLine, vol. 56, no. 2, pp. 7428–7435, 2023. [11] D. Axehill and M. Morari, “Improved complexity anal-
ysis of branch and bound for hybrid MPC,” in Proceedings of the 49th IEEE Conference on Decision and Control (CDC). IEEE, 2010, pp. 42164222. [12] S. Shoja, D. Arnström, and D. Axehill, “Overall complexity certification of a standard branch and bound method for mixed-integer quadratic programming,” in Proceedings of 2022 American Control Conference (ACC), 2022, pp. 4957–4964. [13] ——, “A unifying complexity certification framework of standard branch-and-bound algorithms for mixed-integer linear an-
d quadratic programming,” Submitted., 2025. [14] G. A. Constantinides, “Tutorial paper: Parallel architectures for model predictive control,” in 2009 European Control Conference (ECC). IEEE, 2009, pp. 138–143.
[15] D. Bertsekas and J. Tsitsiklis, Parallel and distributed computation: numerical methods. Athena Scientific, 2015. [16] T. Ralphs, Y. Shinano, T. Berthold, and T. Koch, “Parallel solvers for mixed integer linear programming,” Tech. Rep. 16-74, ZIB, Takustr.7, 14195 Berlin, 2016. [17] L. A. Wolsey, Integer programming. John Wiley & Sons, 2020. [18] J. Nocedal and S. Wright, Numerical optimization. Springer Science & Business Media, 2006. [19] National Supercomputer Centre. [Online]. Available: -
https://www.nsc. liu.se/ [20] T. Marcucci and R. Tedrake, “Warm start of mixed-integer programs for model predictive control of hybrid systems,” IEEE Transactions on Automatic Control, vol. 66, no. 6, pp. 2433–2448, 2020.

---

## Processing Information

- **Processing Library:** Zotero PDFWorker
- **Processing Date:** 2026-02-10T18:18:33.785Z
- **Text Length:** 45917 characters
- **Success:** Text extraction completed
- **PDF Library Used:** Zotero PDFWorker
- **Pages Processed:** 9 of 9
