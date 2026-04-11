# PDF Document: Lee and Brook - 2025 - Connectivity-Preserving Multi-Agent Area Coverage via Optimal-Transport-Based Density-Driven Optimal.pdf

**File Path:** Lee and Brook - 2025 - Connectivity-Preserving Multi-Agent Area Coverage via Optimal-Transport-Based Density-Driven Optimal.pdf

**Processed Date:** 2026-02-10T18:18:13.335Z

**File Size:** 889.56 KB

**Total Pages:** 6

**Extracted Pages:** 6

**PDF Library:** Zotero PDFWorker

**Attachment Item ID:** 3295

**Title:** Connectivity-Preserving Multi-Agent Area Coverage via Optimal-Transport-Based Density-Driven Optimal Control (D2OC)

**Collection:** Large Files > Random Papers

---

## Extracted Text Content

Connectivity-Preserving Multi-Agent Area Coverage via
Optimal-Transport-Based Density-Driven Optimal Control (D2OC)
Kooktae Lee1 and Ethan Brook1
Abstract— Multi-agent systems are widely used for area coverage tasks in applications such as search-and-rescue, environmental monitoring, and precision agriculture. Achieving non-uniform coverage, where certain regions are prioritized, requires coordinating agents while accounting for dynamic and communication constraints. Existing density-driven methods effectively distribute agents according to a reference density but typically do not guarantee connectivity, which can lead to disconnected agent-
s and degraded coverage in practical deployments. This letter presents a connectivity-preserving approach within the Density-Driven Optimal Control (D2OC) framework. The coverage problem, expressed via the Wasserstein distance between agent distributions and a reference density, is formulated as a quadratic program. Communication constraints are incorporated through a smooth penalty function, ensuring strict convexity and global optimality while naturally maintaining inter-agent connectivity witho-
ut rigid formations. Simulation results demonstrate that the proposed method effectively keeps agents within communication range, improving coverage quality and convergence speed compared to methods without explicit connectivity enforcement.
I. INTRODUCTION
Multi-agent systems have increasingly attracted attention for area coverage tasks, including search-and-rescue, environmental monitoring, precision agriculture, and infrastructure inspection [1], [2], [3]. Coordinated agents can explore large or complex environments more efficiently than a single agent by distributing sensing and actuation, reducing mission time and energy consumption. In many applications, some regions require greater attention due to environmental significance, hazard likelihood-
, or mission priorities, necessitating non-uniform coverage strategies [4].
Literature Survey: Various approaches have been proposed for non-uniform coverage. Classical density-driven methods, such as Heat Equation Driven Area Coverage (HEDAC) [5] and Density-Driven Control (D2C) [4], operate in a decentralized manner: each agent computes its motion locally based on a reference density. In contrast, Spectral Multiscale Coverage (SMC) [6] is centralized, requiring global knowledge of all agents and the reference distribution. While decentralization provides flexibility and-
 adaptability, agents must still communicate to maintain coordinated behavior. Existing methods generally do not explicitly enforce connectivity, which can lead to disconnected agents and degraded coverage.
Connectivity Preservation: Maintaining inter-agent communication is critical for decentralized coordination. Conven
1Kooktae Lee and Ethan Brook are with the Department of Mechanical Engineering, New Mexico Institute of Mining and Technology, Socorro, NM 87801, USA, email: kooktae.lee@nmt.edu, ethan.brook@student.nmt.edu.
tional strategies rely on fixed formations or rigid inter-agent distance constraints [1], [7], [8], which reduce flexibility in cluttered or dynamic environments. Opportunistic communication [9] allows agents to exchange information as opportunities arise but can slow convergence and cause uneven coverage. Recent connectivity-preserving MPC methods [10], [11] maintain communication via algebraic-connectivity or distance-based penalties, but typically require centralized or iterative computation an-
d do not address non-uniform coverage. In this study, a connectivity-preserving mechanism is embedded within a convex density-driven optimal control framework, ensuring scalability, decentralization, and robust communication.
Density-Driven Optimal Control (D2OC): This work builds on the D2OC framework [12], [13], where a reference density defines spatial priorities and the Wasserstein distance measures how well the agent distribution aligns with this reference. Control inputs steer agents to reduce this discrepancy while respecting dynamics and motion constraints. Unlike [12], [13], which derived an optimal-control solution using Lagrange multipliers, the present work reformulates the problem to enable a quadratic-pro-
gram (QP) representation and further incorporates connectivity-preserving constraints to maintain inter-agent communication during coverage. Contribution: This work enhances D2OC by enforcing connectivity during non-uniform coverage. The main contributions are summarized as follows: 1) QP Equivalence and Convexity Analysis: The Wasserstein-based D2OC objective, without connectivity constraints, is shown to be equivalent to a QP, and its strict convexity and associated optimal solution, including t-
he closed-form unconstrained optimizer, are established. These results were not presented in [12], [13]; 2) Connectivity-Preserving Penalty with Reachable Sets: A smooth connectivity penalty integrated with a reachable-set formulation is developed to maintain inter-agent communication without enforcing rigid formations. When this penalty is included, the overall formulation remains convex but is no longer quadratic, an aspect absent from [12], [13]; 3) Simulation-Based Validation: Representative s-
imulations confirm that the proposed connectivitypreserving D2OC achieves improved coverage efficiency, faster convergence, and sustained communication compared with the unconstrained case.
II. PROBLEM SETUP
Notation: The sets of real and integer numbers are denoted by R and Z, respectively. The sets Z>0 and Z≥0 := Z>0 ∪ {0} denote positive and non-negative integers. The space Rn
arXiv:2511.18579v2 [eess.SY] 26 Nov 2025

represents n-dimensional column vectors. The Euclidean and infinity norms are denoted by ∥·∥2 (simply ∥·∥ when obvious) and ∥ · ∥∞, respectively, and the transpose of a matrix A by A⊤. The zero matrix 0m×n ∈ Rm×n and the identity matrix In ∈ Rn×n are denoted with their sizes as subscripts. A weighted norm is defined as ∥U ∥R :=
√
U ⊤RU , where R ≻ 0. The operator diag([·]) constructs a block diagonal matrix from its arguments. The operator blkdiag(·) denotes a blockdiagonal concatenation, i.e., blkdiag(Ah)r+H−1
h=r places each block Ah on the diagonal. The Hadamard (elementwise) product is denoted by ⊙, and ⊕ denotes the Minkowski sum, i.e., A ⊕ B = {a + b | a ∈ A, b ∈ B}.
We study a network of agents, each described by discretetime linear dynamics. For agent i in the multi-agent system, the evolution over time index k ∈ Z≥0 is modeled by the Linear Time-Invariant (LTI) system as
xi(k + 1) = Aixi(k) + Biui(k), yi(k) = Cixi(k), (1)
where xi(k) ∈ Rn denotes the state vector, ui(k) ∈ Rm the control action, and yi(k) ∈ Rd the measured output. The system, input, and output matrices are given by Ai ∈ Rn×n, Bi ∈ Rn×m, and Ci ∈ Rd×n.
To guarantee that the reachable sets we later use remain meaningful and well-behaved, the following standard assumptions are adopted.
Assumption 1. For each agent i, the pair (Ai, Bi) is controllable.
Assumption 2. For each agent i, the state matrix Ai is marginally stable: all eigenvalues lie in the closed unit disk, and any eigenvalue on the unit circle has equal algebraic and geometric multiplicity.
Assumption 3. Each agent is assumed to know the nominal dynamics (Aj, Bj, Cj) of those agents with which communication connectivity is to be preserved, as these models are specified during system integration. At each control step, agents update the most recent neighbor output (or position) information received.
These assumptions are essential for the communicationaware coverage problem. Assumption 1 ensures that each agent can maneuver its own state through admissible inputs, while Assumption 2 guarantees bounded state evolution. Assumption 3 allows an agent to compute the reachable sets of its neighbors from their current states and known dynamics, which is necessary for enforcing communication constraints over the prediction horizon.
A. Wasserstein Distance and Optimal Transport
To formalize the notion of non-uniform coverage, we employ optimal transport theory [14], with particular emphasis on the Wasserstein distance. For two discrete probability measures ρ and ν on a metric space (X , d), the p-Wasserstein distance is given by
Wp(ρ, ν) = minπlj
PM l=1
PN
j=1 πlj d(yl, qj )p 1/p
, (2)
subject to the constraints πlj ≥ 0, PN
j=1 πlj =
αl, PM
l=1 πlj = βj , P
l,j πlj = 1, where πlj specifies the amount of probability mass transported from yl to qj. In this paper we focus on the quadratic case (p = 2) with Euclidean distance as the ground cost for d(·). We distinguish between two categories of points. Agent points yl(k) ∈ Rd denote the positions of agents at time step k, evolving according to the LTI dynamics (1). Sample points qj ∈ Rd represent fixed reference locations that encode the desired spatial distribution. Each agent has a finite operation tim-
e and produces at most Mi agent points, yielding a total of M = Pna
i=1 Mi
points for total na agents. For simplicity, uniform weights are assumed: αl = 1/Mi for agent points and βj = 1/N for samples. To assess coverage quality, we compare the empirical agent distribution with the reference distribution:
ρ(k) = 1
k+1
k
X
t=0
1 na
na
X
i=1
δyi(t) , ν = 1
N
N
X
j=1
δqj , (3)
where δy is the Dirac measure. The discrepancy between the two is quantified at time k by W2(ρ(k), ν). The objective of Density-Driven Optimal Control (D2OC) is to minimize the Wasserstein distance W2(ρ(k), ν) between the empirical agent distribution ρ(k) and the reference density ν, subject to constraints such as the number of agents, operation time, and communication range.
B. Decentralized Coverage Protocol
Directly minimizing W2(ρ(k), ν) is challenging due to its nonconvexity and high dimensionality. To address this, each agent solves a local subproblem that considers only nearby sample points rather than the full reference map. By defining a local Wasserstein distance over these points, agents can compute feasible control inputs that progressively reduce the overall discrepancy while satisfying dynamics and actuation constraints. Within this framework, D2OC organizes agent behavior into three recur-
ring stages:
1) Sample selection and control input: Each agent identifies nearby sample points with relatively high remaining weights and computes a feasible control input to reduce its local Wasserstein distance while respecting dynamics and actuation limits. 2) Weight adjustment: After executing its control input, agent i updates (reduces) the weights of the sample points j it has covered or influenced, denoted by βi,j(k), recording its coverage progress at time k.
3) Information exchange for multi-agent collaboration: When agents come within communication range, they synchronize weight information by adopting the minimum observed weights among neighbors. This ensures global coverage consistency and prevents redundant exploration.
The first two stages are performed independently by each agent, while the third stage coordinates neighboring agents

via weight sharing. Iterating this cycle gradually aligns the agents’ empirical distribution with the reference distribution. In this work, we focus on deriving the optimal control input for the first stage under a connectivity-preserving constraint. A full description of the overall cycle is provided in [4].
III. FORMULATION OF THE D2OC COST FUNCTION VIA
QUADRATIC PROGRAMMING
This section presents the formulation of the D2OC optimization problem in terms of the Wasserstein distance. In general, for a discrete-time system, the control input u(k) does not immediately influence the system output y(k) at the same time step. Instead, the input affects the output after a certain number of steps, which is formalized using the concept of output relative degree.
Definition 1 (Output Relative Degree of a Discrete-Time LTI System). Consider the discrete-time LTI system (1). The output relative degree r ∈ Z>0 is the smallest positive integer such that CiAr−1
i Bi ̸= 0, and CiAl−1
i Bi = 0 for all l = 1, . . . , r − 1.
This defines the number of time steps required for the control input ui(k) to first have a direct effect on the output vector yi(k). Then, the cost function for agent i using
the squared local Wasserstein distance to achieve D2OC is defined over the prediction horizon H ∈ Z>0, starting from time k + r:
r+H −1
X
h=r
W2
i (k+h) :=
r+H −1
X
h=r
X
j ∈Si (k+h)
πj (k+h) ∥yi(k+h)−qj ∥2,
(4) subject to agent dynamics (1) and the Wasserstein distance constraints in (2). The symbol Si(k + h) denotes the set of local sample points selected for agent i at time k + h, based on (i) remaining weights βi,j(k + h) of sample points, prioritizing points not yet fully covered, and (ii) proximity to agent i, ensuring computational tractability and focus on nearby regions (see [4]). The transport weight πj(k + h) represents agent i’s contribution to sample qj under the local optimal transport p-
lan. The agent index does not appear in πj since it corresponds to a single point. This formulation captures the cost of moving agents to assigned targets while respecting dynamics over the prediction horizon. Leveraging this property, we establish the following result.
Proposition 1. Let Si(k + h) denote the index set of local sample points for agent i at time k + h. Let the transport weights πj(k + h) ≥ 0 be locally computed over the prediction window h = r, . . . , r+H−1 based on the selected local samples. Define the weighted barycenter at k + h as
q ̄i(k+h) := 1
P
j∈Si(k+h) πj (k + h)
P
j∈Si(k+h) πj (k+h)qj
and
Y k|r:H
i := [ yi(k + r)⊤ · · · yi(k + r+H −1)⊤ ]⊤,
Q ̄ k|r:H
i := [ q ̄i(k + r)⊤ · · · q ̄i(k + r+H −1)⊤ ]⊤,
Ωk|r:H
i := blkdiag
q P
j∈Si(k+h)πj (k + h) Id
r+H −1
h=r .
(5)
With ‘const.’ denoting all terms independent of Y k|r:H
i , we
have
r+H −1
X
h=r
W2
i (k + h) = Ωk|r:H
i Y k|r:H
i − Q ̄k|r:H
i
2
+ const.,
Proof. Expanding the quadratic Wasserstein term for each h,
r+H −1
X
h=r
W2
i (k+h) =
r+H −1
X
h=r
X
j ∈Si (k+h)
πj (k+h)∥yi(k+h) − qj ∥2
=
r+H −1
X
h=r
X
j
πj(k+h) ∥yi(k+h) − q ̄i(k+h)∥2+
r+H −1
X
h=r
C (h),
where C(h) := P
j πj(k+h)∥qj−q ̄i(k+h)∥2 is independent of the decision variables. Stacking the terms yields the compact form Ωk|r:H
i (Y k|r:H
i − Q ̄k|r:H
i ) 2 + const.
To apply Proposition 1 within the optimal control formulation, the stacked output Y k|r:H
i in (5) over the horizon
is written in affine form using the stacked input U k|H
i :=
[ ui(k)⊤ · · · ui(k + H − 1)⊤ ]⊤ ∈ RmH as
Y k|r:H
i = ΘiU k|H
i + Φixi(k), (6)
where Θi ∈ RdH×mH and Φi ∈ RdH×n are given by
Θi :=

   
Ci Ar−1
i Bi 0 · · · 0
CiAr
i Bi CiAr−1
i Bi · · · 0
...
... . . . ...
Ci Ar+H −2
i Bi CiAr+H−3
i Bi · · · CiAr−1
i Bi

   
,
(7)
Φi := (CiAr
i )⊤, (CiAr+1
i )⊤, . . . , (CiAr+H−1
i )⊤ ⊤ . (8)
Combining (4) with the input penalty ∥U k|H
i ∥2
Ri , where Ri ≻ 0, yields
J (U k|H
i ) :=
r+H −1
X
h=r
W2
i (k + h) + ∥U k|H
i ∥2
Ri . (9)
Finally, by utilizing Proposition 1 together with the input–output relation (6), the control objective becomes the quadratic form
J (U k|H
i )= 1
2 (U k|H
i )⊤HiU k|H
i + f⊤
i U k|H
i + const.,
Hi := 2 (Ωk|r:H
i Θi)⊤(Ωk|r:H
i Θi) + Ri ,
fi := 2(Ωk|r:H
i Θi)⊤Ωk|r:H
i (Φixi(k) − Q ̄k|r:H
i ),
(10) where ‘const.’ collects all terms independent of U k|H
i.
Theorem 1 (Uniqueness of the Unconstrained Optimal Input). For agent i in the multi-agent system, governed by the LTI dynamics (1) with output relative degree r and prediction horizon H, the quadratic cost in (10) has the unconstrained optimal input
(U k|H
i )uncon = − H −1
i fi, (11)
and this solution is the unique global minimizer.

Proof. Taking the gradient of (10) and setting it to zero yields HiU k|H
i + fi = 0, so the unconstrained minimizer
is (U k|H
i )uncon = −H −1
i fi.
Since Ri ≻ 0, the Hessian Hi =
2 (Ωk|r:H
i Θi)⊤(Ωk|r:H
i Θi) + Ri satisfies Hi ≻ 0. Thus the cost is strictly convex and the minimizer is unique.
IV. CONNECTIVITY-PRESERVING D2OC
A. Connectivity Constraint with Reachable Sets
To maintain communication over the prediction horizon, agent i and a designated neighbor j satisfy
gij(k + h) := ∥xi(k + h) − xj(k + h)∥2
− r2
comm ≤ 0, h = r, . . . , r + H − 1, (12)
with relative degree r, horizon H, and communication radius rcomm > 0. The neighbor j is selected according to a userspecified connected communication topology (e.g., chain, tree), and global connectivity is preserved as long as the resulting graph remains connected. Since agent i cannot know agent j’s exact future outputs, we describe agent j’s possible outputs via a reachable set.
Reachable-Set Formulation: Let the reachable set of agent j in output space be the zonotope
Zy
j (k + h) = yˆj(k + h) ⊕ Gj(k + h)B∞, (13)
where yˆj(k + h) denotes the nominal prediction of agent j’s output at time k + h, obtained from its known model (Aj, Bj, Cj) and the most recently exchanged output. This prediction is used as the reference center of the reachable set for enforcing the connectivity constraint. The generator matrix Gj(k+h) ∈ Rd×m represents the linear mapping from bounded control deviations to predicted output deviations, computed as
Gj (k+h) = Cj A h−1
j Bj , Cj A h−2
j Bj , . . . , Cj A r−1
j Bj , (14) which applies for all h ≥ r, as inputs affect the output only from step r onward. For h < r, Gj(k+h) is the zero matrix. Each column of Gj(k+h) represents the effect of one control-input direction propagated through the dynamics, and B∞ = {z ∈ Rm : ∥z∥∞ ≤ 1} is the unit hypercube capturing all admissible combinations of these bounded deviations. Equivalently, Zy
j (k+h) = {yˆj(k+h)+Gj(k+h)z | ∥z∥∞ ≤ 1}.
Conservative Scalar Inequality: For tractability, approximate the set inclusion with
Rj(k + h) = max∥z∥∞≤1 ∥Gj(k + h)z∥,
and enforce ∥yi(k + h) − yˆj(k + h)∥ ≤ rcomm − Rj(k + h), h = r, . . . , r+H−1, which ensures the reachable set of agent j lies within agent i’s communication ball while accounting for bounded inputs. To enable fast online connectivity checks without handling the full zonotope geometry, we adopt a conservative scalar radius bound:
Rj(k+h) = mlax ∥Gj,l(k+h)∥2, (15)
where Gj,l(k+h) denotes the l-th column of Gj(k+h).
B. Soft-Constraint for Connectivity-Preserving Control
We relax the feasibility requirement by introducing a soft penalty on communication range violations. Specifically, for each horizon step h ∈ {r, . . . , r + H − 1}, we define the predicted output
yi(k + h) = CiAh
i xi(k) +
h−1
X
s=0
CiAh−1−s
i Bi ui(k + s). (16)
Defining fi(h) = CiAh
i xi(k) − yˆj(k + h), Fi(h) =
CiAh−1
i Bi · · · CiBi , the nominal inter-agent distance becomes
di(h) := ∥yi(k + h) − yˆj(k + h)∥ = ∥fi(h) + Fi(h)U k|h
i ∥. (17) To penalize violations of the communication threshold rcomm − Rj(k + h), We now introduce the smooth penalty using the log-sum-exp
φ(Ti(h)) = κ
η log 1 + exp(η Ti(h)) , κ, η > 0, (18)
where Ti(h) := di(h) − rcomm − Rj(k + h) and κ > 0 scales the penalty and η > 0 controls its steepness. This convex function vanishes when di(h) ≤ rcomm − Rj(k + h) and increases smoothly when the threshold is exceeded. The overall soft-constraint cost now becomes
Jsoft(U k|H
i ) = J (U k|H
i ) + Pr+H−1
h=r φ(Ti(h)). (19)
Remark 1 (Extension to Collision Avoidance). The formulation in (19) can be further extended to include an additional soft constraint for inter-agent collision avoidance by penalizing violations of a minimum distance dmin.
Remark 2 (Robustness to Communication Delays and Uncertainties). The reachable-set formulation provides inherent tolerance to limited communication delays and imperfect knowledge of neighboring agents’ behavior. When output updates from neighbors are delayed, their effects are captured by the conservative zonotope radius Rj(k +h), ensuring that connectivity is maintained. The soft-constraint term further improves robustness by smoothly penalizing temporary violations instead of enforcing strict fe-
asibility.
Theorem 2 (Strict Convexity of Soft-Constraint Control with Box Constraints). Consider the discrete-time linearized dynamics of agent i in (1) with output relative degree r. Let the soft-constrained D2OC cost be given by (19), subject to the admissible input set
U k|H
i := {U k|H
i ∈ RmH | u(H)
min ≤ U k|H
i ≤ u(H)
max}.
Then, Jsoft is strictly convex, and the optimization problem admits a unique minimizer.
Proof. The proof follows the original convexity argument, with the box constraints included. For each h, the predicted
output yi(k + h) is an affine function of the stacked input
U k|H
i , and the inter-agent distance is given by (17).

a) Convexity of the distance term: The map U k|H
i 7→ di(h) is the Euclidean norm composed with an affine map, hence convex.
b) Convexity and monotonicity of the scalar penalty: Consider the scaled log-sum-exp function
φ(z) = κ
η log 1 + exp(ηz) , κ, η > 0. (20)
Its derivatives are φ′(z) = κ exp(ηz)
1 + exp(ηz) ≥ 0, φ′′(z) =
κ η exp(ηz)
(1 + exp(ηz))2 ≥ 0, thus φ is convex and nondecreasing.
c) Composition with shifted distance: Define the shifted distance
Ti(h) := di(h) − rcomm − Rj(k + h) , (21)
which is convex in U k|h
i . By the composition rule for convex functions (convex, nondecreasing scalar composed with convex vector-valued map), φ(Ti(h)) is convex in U k|h
i. d) Sum of convex terms and box constraints: The total objective is
Jsoft(U k|H
i ) =1
2 (U k|H
i )⊤H U k|H
i + f ⊤U k|H
i+
r+H −1
X
h=r
φ(Ti(h)).
(22) Each term is convex; finite sums of convex functions are
convex. The feasible set U k|H
i = {U k|H
i ∈ RmH |
u(H)
min ≤ U k|H
i ≤ u(H)
max} is closed and convex. Hence,
minU k|H
i ∈U k|H
i
Jsoft(U k|H
i ) is convex.
e) Existence of minimizers: If U k|H
i is bounded, conti
nuity of Jsoft guarantees existence. If U k|H
i is unbounded but Hi ≻ 0, coercivity of the quadratic term ensures existence. f) Uniqueness under Hi ≻ 0: The quadratic term
1
2 (U k|H
i )⊤HU k|H
i is strictly convex. Adding convex penalties preserves strict convexity. Restricting a strictly convex function to the convex set U k|H
i yields a unique minimizer.
g) KKT characterization: Let λ± ≥ 0 be Lagrange multipliers for the box bounds. At the minimizer (U k|H
i )⋆,
∇Jsoft((U k|H
i )⋆) + λ+ − λ− = 0, λ± ≥ 0,
λ+ ⊙ ((U k|H
i )⋆ − u(H)
max) = 0, λ− ⊙ (u(H)
min − (U k|H
i )⋆) = 0.
Combining these steps, the soft-constrained problem with box constraints is strictly convex, and a minimizer exists and is unique since Hi ≻ 0.
Remark 3 (Soft Connectivity and Effect of Penalty Parameters). The soft-constraint formulation provides a convex relaxation of the hard connectivity condition, allowing limited violations while maintaining overall communication. The penalty parameters κ and η jointly determine the strength and sharpness of this relaxation. Increasing κ reinforces the penalty and improves connectivity preservation, whereas larger η produces a steeper transition toward a hard constraint and may introduce numerical s-
tiffness if too large. In practice, κ is increased until violations are consistently penalized, and η is then selected as the smallest value that sharpens the penalty without causing oscillatory or
saturated behavior. Smaller η values yield smoother but weaker enforcement, whereas larger η values impose stricter connectivity at the cost of reduced smoothness.
Remark 4 (Computational Scalability). In the decentralized D2OC framework, each agent solves an independent convex optimization problem (19) using local information, enabling parallel computation and maintaining scalability as the number of agents increases. The prediction horizon affects only the dimension of each local problem and remains tractable for typical receding-horizon settings.
V. SIMULATIONS
To evaluate the proposed connectivity-preserving D2OC, simulations were performed with a twenty-agent system using a full 12-state linearized quadrotor model [15], which has an output relative degree of r = 4. The reference map was generated from a 3D point cloud distribution, shown as green dots in Fig. 1(a,c), where the agents’ final positions are marked with yellow circles. All agents were initialized near the origin (red crosses) and clustered at the start. With connectivity constraints, a cha-
in-like topology was used, where agent i remained within the communication range of agent i+1 for i < 20. The prediction horizon was set to H=1 for simplicity. A larger horizon would provide better foresight in coordination but at a higher computational cost. In this setting, each local optimization required about 10 ms per agent in MATLAB, indicating that real-time execution is readily achievable in faster compiled implementations.
TABLE I: Key Simulation Parameters
Description Value Number of agents 20 Number of reference sample points 500 Sampling period T 0.1 s Prediction horizon H / relative degree r 1 / 4 Communication range threshold rcomm 15 Connectivity margin γ 0.8 Connectivity soft penalty (κ, η) (750, 0.25) Minimum inter-agent distance dmin 1 Agent maximum speed vmax 10
Two scenarios were tested: (i) no connectivity constraint and (ii) connectivity constraint with rcomm = 15. Trajectories were computed in MATLAB, using QUADPROG for the unconstrained case and FMINCON for the constrained cases. In all scenarios, box input constraints were imposed to satisfy the small-angle condition of the linearized model. The right column of Fig. 1 shows the corresponding inter-agent distances, verifying whether connectivity was preserved. Without the connectivity constraint (Fig-
s. 1a,b), agents moved freely and dispersed widely across the domain. Although the communication range was rcomm = 15, the absence of constraint allowed inter-agent distances to exceed 200, as shown in Fig. 1(b). Trajectories appeared to cover the reference samples (green) uniformly. However, since connectivity was not enforced, agents could share weight information, which represents local coverage, only when they temporarily came within range of others, resulting in

(a) Trajectories without connectivity constraint
(b) Inter-agent distances without connectivity constraint
(c) Trajectories with rcomm = 15 (d) Inter-agent distances with rcomm = 15
Fig. 1: Twenty-agent D2OC simulation: trajectories (left) and inter-agent distances (right) without/with connectivity constraints. Red dashed: communication threshold; black dashed: minimum distance.
event-based communication. Once disconnected, they lost awareness of covered regions, causing redundant revisits and inefficient exploration. When the connectivity-preserving constraint was applied (Figs. 1c,d), agents maintained cohesive motion through relay links. Although collision avoidance is not the main focus of this work, a minimum distance of 1 was additionally enforced via a second soft constraint. While individual freedom was slightly reduced, continuous communication enabled synchroniz-
ed weight updates and improved overall mission efficiency. The connectivity-preserving penalty was implemented with parameters κ = 750, η = 0.25, and γ = 0.8 (Remark 3), ensuring communication maintenance, whereas the second soft constraint independently kept safe separation of at least 1. For quantitative evaluation, the sliced Wasserstein distance (SWD) was used to measure how closely the distribution formed by agent trajectories matched the reference distribution, where a smaller value indicate-
s better alignment. The unconstrained case yielded an SWD of 82.54 compared with 63.72 for the constrained case and required 1,374 versus 756 iterations for completion. These results demonstrate that the proposed connectivity-preserving mechanism enables faster and more accurate coverage with stronger spatial consistency among agents.
VI. CONCLUSION
This letter presented a connectivity-preserving approach for multi-agent non-uniform area coverage within the Density-Driven Optimal Control (D2OC) framework. By formulating the coverage problem via the Wasserstein distance
as a quadratic program and incorporating communication constraints through a smooth penalty function, the proposed method ensures that agents remain within communication range while achieving effective coverage. The resulting formulation is strictly convex, allowing for globally optimal control inputs without imposing rigid formations. Simulation studies demonstrated that the approach improves both coverage quality and convergence speed compared to methods without explicit connectivity enforcement-
. Future work includes extending the framework to dynamic environments with time-varying communication and sensing conditions and incorporating emergency protocols for restoring connectivity when links are lost. We also plan to conduct experimental validation of the proposed connectivitypreserving D2OC framework using a multi-agent platform.
ACKNOWLEDGEMENTS
This work was supported by NSF CAREER Grant CMMIDCSD-2145810.
REFERENCES
[1] K.-K. Oh, M.-H. Park, and H.-S. Ahn, “A survey of multi-agent formation control,” Automatica, vol. 53, pp. 424–440, 2015. [2] J. Cortes, S. Martinez, T. Karatas, and F. Bullo, “Coverage control for mobile sensing networks,” IEEE Transactions on Robotics and Automation, vol. 20, no. 2, pp. 243–255, 2004. [3] G. Mathew and I. Mezic ́, “Metrics for ergodicity and design of ergodic dynamics for multi-agent systems,” Physica D: Nonlinear Phenomena, vol. 240, no. 4-5, pp. 432–442, 2011. [4] K. Lee a-
nd R. Hasan Kabir, “Density-aware decentralised multi-agent exploration with energy constraint based on optimal transport theory,” International Journal of Systems Science, vol. 53, no. 4, pp. 851–869, 2022. [5] S. Ivic ́, B. Crnkovi ́c, L. Grbcˇi ́c, and L. Matlekovic ́, “Multi-uav trajectory planning for 3d visual inspection of complex structures,” Automation in Construction, vol. 147, p. 104709, 2023.
[6] G. Mathew and I. Mezic, “Spectral multiscale coverage: A uniform coverage algorithm for mobile sensor networks,” in Proceedings of the 48h IEEE Conference on Decision and Control (CDC) held jointly with 2009 28th Chinese Control Conference, pp. 7872–7877, IEEE, 2009. [7] Y. Zhao, Y. Hao, Q. Wang, Q. Wang, and G. Chen, “Formation of multi-agent systems with desired orientation: a distance-based control approach,” Nonlinear Dynamics, vol. 106, no. 4, pp. 3351–3361, 2021. [8] M. Afrazi, S. Seo, a-
nd K. Lee, “Density-driven formation control of a multi-agent system with an application to search-and-rescue missions,” in 2025 American Control Conference (ACC), pp. 3622–3627, IEEE, 2025. [9] D. Mox, K. Garg, A. Ribeiro, and V. Kumar, “Opportunistic communication in robot teams,” in 2024 IEEE International Conference on Robotics and Automation (ICRA), pp. 12090–12096, IEEE, 2024.
[10] A. Carron, D. Saccani, L. Fagiano, and M. N. Zeilinger, “Multi-agent distributed model predictive control with connectivity constraint,” IFAC-PapersOnLine, vol. 56, no. 2, pp. 3806–3811, 2023. [11] S. Kawajiri, K. Hirashima, and M. Shiraishi, “Coverage control under connectivity constraints,” in Proceedings of the 20th International Conference on Autonomous Agents and MultiAgent Systems, pp. 15541556, 2021. [12] S. Seo and K. Lee, “Density-driven optimal control for efficient and collaborativ-
e multiagent nonuniform coverage,” IEEE Transactions on Systems, Man, and Cybernetics: Systems, vol. 55, no. 12, pp. 93409354, 2025. [13] S. Seo and K. Lee, “Density-driven multidrone coordination for efficient farm coverage and management in smart agriculture,” IEEE Transactions on Control Systems Technology, pp. 1–14, 2025.
[14] C. Villani, Optimal transport: old and new, vol. 338. Springer Science & Business Media, 2008. [15] C. Powers, D. Mellinger, and V. Kumar, “Quadrotor kinematics and dynamics,” Handbook of Unmanned Aerial Vehicles, pp. 307–328, 2015.

---

## Processing Information

- **Processing Library:** Zotero PDFWorker
- **Processing Date:** 2026-02-10T18:18:13.335Z
- **Text Length:** 31698 characters
- **Success:** Text extraction completed
- **PDF Library Used:** Zotero PDFWorker
- **Pages Processed:** 6 of 6
