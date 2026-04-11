# PDF Document: Couthures et al. - 2025 - From Consensus to Robust Clustering Multi-Agent Systems with Nonlinear Interactions.pdf

**File Path:** Couthures et al. - 2025 - From Consensus to Robust Clustering Multi-Agent Systems with Nonlinear Interactions.pdf

**Processed Date:** 2026-02-10T18:14:19.995Z

**File Size:** 2262.53 KB

**Total Pages:** 16

**Extracted Pages:** 16

**PDF Library:** Zotero PDFWorker

**Attachment Item ID:** 3350

**Title:** From Consensus to Robust Clustering: Multi-Agent Systems with Nonlinear Interactions

**Collection:** Large Files > Random Papers

---

## Extracted Text Content

1
From Consensus to Robust Clustering:
Multi-Agent Systems with Nonlinear Interactions
Anthony Couthures1, Gustave Bainier2 , Vineeth Satheeskumar Varma1,3, Samson Lasaulce1, Irinel-Constantin Mora ̆ rescu1,3
Abstract— This paper establishes a theoretical framework to describe the transition from consensus to stable clustering in multi-agent systems with nonlinear, cooperative interactions. We first establish a sharp threshold for consensus. For a broad class of non-decreasing, Lipschitz-continuous interactions, an explicit inequality linking the interaction’s Lipschitz constant to the secondlargest eigenvalue of the normalized adjacency matrix of the interaction graph confines all system equilibria to-
 the synchronization manifold. This condition is shown to be a sharp threshold, as its violation permits the emergence of non-synchronized equilibria. We also demonstrate that such clustered states can only arise if the interaction law itself possesses specific structural properties, such as unstable fixed points. For the clustered states that emerge, we introduce a formal framework using Input-to-State Stability (ISS) theory to quantify their robustness. This approach allows us to prove that the -
internal cohesion of a cluster is robust to perturbations from the rest of the network. The analysis reveals a fundamental principle: cluster coherence is limited not by the magnitude of external influence, but by its heterogeneity across internal nodes. This unified framework, explaining both the sharp breakdown of consensus and the quantifiable robustness of the resulting modular structures, is validated on Zachary’s Karate Club network, used as a classic benchmark for community structure.
Index Terms— Multi-agent systems, Consensus, Synchronization, Clustering, Nonlinear dynamics
I. INTRODUCTION
A central theme in the study of multi-agent systems is the emergence of collective behavior from local interactions. One of the most important behaviors is consensus, where a group of interconnected agents dynamically achieves a common agreement. The canonical model for this problem is the linear Laplacian dynamics, a subject of extensive research for decades [1]–[4]. The elegance of this linear model lies in its direct connection to the spectral properties of the underlying network graph. For a c-
onnected network of agents with linear interactions, reaching a consensus is guaranteed, and the agents fully synchronize to a common constant value.
*This work was supported by the CNRS MITI project BLESS and by the project DECIDE funded under the PNRR I8 scheme by the Romanian Ministry of Research. 1Universite ́ de Lorraine, CNRS, CRAN, F-54000 Nancy, France. anthony.couthures@univ-lorraine.fr
2 Dept. of Electrical Engineering and Computer Science, University of Lie` ge, 4000 Lie` ge, Belgium. 3Automation Department, Technical University of Cluj-Napoca, Memorandumului 28, 400114 Cluj-Napoca, Romania.
Ubiquitous in real-world systems, the emergence of stable opinion clusters and persistent disagreement, rather than full synchronization, necessitates models that extend beyond the linear paradigm. Prior research has primarily examined two mechanisms for breaking consensus. The first, prominent in social dynamics, involves a dynamic topology, where agents cut communication with those who have disparate views, as seen in bounded confidence models [5]–[7]. The second mechanism retains a fixed topolo-
gy but introduces antagonistic interactions, where repulsion between agents on a signed graph can lead to polarized states [8], [9]. This paper advances a third, rapidly developing line of research: the emergence of disagreement on a fixed, cooperative network, driven purely by the inherent nonlinearity of agent interactions: a perception-based influence. Unlike antagonistic or adaptive topologies models, this framework explains persistent disagreement as a property of the interaction law itself. -
Prior work has explored two complementary manifestations of such nonlinearities: those arising from quantized communication, where discrete actions replace continuous opinions [10]–[12], and those based on smooth sigmoidal activation inspired by collective decision-making in biological and social systems [13]–[15]. Seminal theoretical work has rigorously linked the emergence of multiple equilibria to the network’s algebraic connectivity for specific sigmoidal models [16]. However, a unified theory-
 capturing the transition from consensus to clustering across a broad class of nonlinearities, encompassing both smooth and quantized interactions, remains lacking. Furthermore, a formal framework for quantifying the robustness of the resulting clusters with respect to the perturbation from the rest of the network is absent from the literature. To this end, we investigate the fundamental trade-off between network connectivity and interaction nonlinearity to: establish explicit conditions for full -
synchronization, characterize the equilibria when these conditions are violated, and formally quantify the robustness of these emergent structures against network perturbations. Our main contributions are:
• Sharp Threshold for Full Synchronization: We establish a sufficient condition that guarantees full synchronization. This result provides a direct link between the agents’ maximal interaction nonlinearity (Lipschitz constant) and the network’s algebraic connectivity. We then prove constructively that this threshold is sharp: its violation is a sufficient condition for the existence of an admissible signal function that generates disagreement.
arXiv:2511.21228v1 [eess.SY] 26 Nov 2025

2
• Characterization of Emergent Clustered Equilibria: We provide necessary conditions on the signal function itself for the emergence of structured disagreement. This reveals that, independent of the network topology, clustering is only possible if the interaction law possesses specific features, such as unstable fixed points.
• Formal Framework for Cluster Robustness: We develop a general methodology proving that these clustered equilibria are ISS with respect to network perturbations. This allows us to prove a fundamental result: cluster cohesion is sensitive to heterogeneity and not to the magnitude of external influence. Centering the approach on the interaction law itself and its fixed points provides a unifying framework for previously distinct lines of research. It treats systems with smooth sigmoidal interaction-
s as a direct special case, while capturing those with quantized communication as a limiting case of steep, continuous approximations. Furthermore, our application of the ISS framework provides, for the first time, a formal methodology for quantifying the robustness of the clustered equilibria that emerge. This allows an analysis that goes beyond solely the existence of equilibria to characterize their stability from the rest of the network. The remainder of this paper is organized as follows. Sec-
tion II introduces the system model and our core definitions. Section III establishes the fundamental qualitative properties of the dynamics. Section IV provides a detailed characterization of both synchronized and clustered equilibria. Section V derives the sharp threshold for full synchronization. Section VI develops the Input-to-State Stability framework for robust clusters, including a validating numerical example. Section VII concludes the paper and discusses future directions. Notation In th-
e following, we denote by R the set of real numbers. For a vector x ∈ RN , we denote by xi the i-th component of x. For a matrix A ∈ RN×N , we denote by aij the element of A at the i-th row and j-th column. We denote by 0 and 1 the vector of RN with all components equal to 0 and 1, respectively. For a column vector x ∈ RN , we denote
by ∥x∥ = (x⊤x) 1
2 the Euclidean norm of x and, for a positive definite matrix D, by ∥x∥D = (x⊤Dx) 1
2 the norm induced by D. Moreover, we denote by diag(x) ∈ RN×N the diagonal matrix with diagonal elements given by the vector x ∈ RN . For two vectors x, y ∈ RN , x ≤ y means xi ≤ yj for all i ∈ {1, . . . , N }, if, in addition x ̸= y, we note x < y. For a function f : X → X , the set Fix(f ) = {x ∈ X | x = f (x)} contains the fixed points of f .
II. A FRAMEWORK FOR CONSENSUS DYNAMICS WITH NONLINEAR INTERACTIONS
A. Graph Structure and Network Interaction
Consider the set V = {1, . . . , N } of N agents or vertices interacting with each other. The interactions are described by a graph G = (V, E), where the edge set E ⊂ V × V indicates whether two agents are interacting. The fundamental properties and assumptions of this interaction graph are as follows.
Standing Assumption 1: The graph G is time-invariant, undirected, connected, and simple (i.e., it has no self-loops or multiple edges).
The topology of the network is captured by its symmetric adjacency matrix, A ∈ RN×N , where aij = 1 if (i, j) ∈ E and aij = 0 otherwise. From this, we define two other key matrices: the degree matrix, D := diag(d1, . . . , dN ) ∈
RN×N , where di = PN
j=1 aij is the degree of vertex i, and the Laplacian matrix, L := D − A ∈ RN×N . The set of direct neighbors of agent i is its neighborhood: Ni = {j ∈ V | (i, j) ∈ E}, with cardinality di. An induced subgraph of G is a graph G′ = (V′, E′) such that V′ ⊂ V and E′ = E ∩ (V′ × V′) is the set of internal edges. Its topology is described by the induced adjacency matrix Ain ∈
RN′×N′ , where N ′ = |V′|. A crucial consequence of Assumption 1 is that the adjacency matrix A is irreducible due to the graph being connected. This allows us to apply the Perron-Frobenius theorem, providing foundational results on the spectral properties of such matrices. Lemma 1 (Perron-Frobenius [17, Theorem 2.12]): Let A ∈ RN×N with N ≥ 2. If A is a non-negative matrix, then there exists a real eigenvalue λ ≥ |μ| ≥ 0 for all other eigenvalues μ of A and the right and left eigenvectors v and w-
 of A associated with the eigenvalue λ are non-negative. i.e., v ≥ 0 and w ≥ 0. If additionally A is irreducible, then the eigenvalue λ is strictly positive and simple, and the right and left eigenvectors v and w of A associated with the eigenvalue λ are unique and positive, up to rescaling. i.e., v > 0 and w > 0.
B. Agent and Collective Dynamics
To each agent i we assign a normalized scalar state xi ∈ [−1, 1] (e.g., an opinion). Agents are assumed to interact based on their perception of the neighbors’ states, a process modeled by a common signal function s : [−1, 1] → [−1, 1]. This function acts as the lens through which agents see each other’s states before the averaging process. The driving mechanism for the agent’s evolution is the discrepancy between the current state and the average of the perceived state of the neighbors. This cons-
ensus-seeking behavior is captured by the following feedback law:
x ̇ i = 1
di
N
X
j=1
aijs(xj) − xi. (1)
The right-hand side of this equation represents a disagreement vector for agent i. Its state velocity, x ̇ i, is directly proportional to the difference between what it “sees” from its neighborhood and its own internal state. A positive disagreement pulls its state up, while a negative disagreement pushes it down, thus naturally driving the agent towards the local average. The collective dynamics of all N agents can be expressed in the compact collective vector form:
x ̇ = D−1As(x) − x := f (x), (2)
where x = (x1, . . . , xN )⊤ and s(x) = (s(x1), . . . , s(xN ))⊤
belong to the hypercube X := [−1, 1]N , which defines the system state space. The choice of the row-stochastic matrix D−1A, often called the random-walk normalized adjacency matrix, is a crucial

3
modeling decision. Unlike dynamics governed by the unweighted graph Laplacian (L = D − A), this formulation ensures that each agent updates its state based on the average of the signals received from its neighbors, rather than their sum. Consequently, the influence of a neighborhood is independent of its size, preventing high-degree nodes from having an overly fast response. This modeling paradigm is representative of many real-world processes, such as social opinion formation or distributed estim-
ation, where an individual is influenced by the prevailing sentiment of its local group, not the sheer volume of its connections.
C. Signal Function and Communication Model
The nonlinearity introduced by s(x) allows us to model various interaction scenarios. For instance, by choosing s(x) = x, one recovers the normalized linear consensus model, while an affine function s(x) = ax + b can model biased consensus algorithms. Sigmoidal functions, such as s(x) = tanh(x), inspired by biological systems, can also represent saturation or decoding effects in communication [13], [14]. In the following, we will restrict our study to the signal function, verifying the following a-
ssumption:
Standing Assumption 2: The function s : [−1, 1] → [−1, 1] is non-decreasing and Lipschitz-continuous with constant K. The assumption that the signal function s is non-decreasing is central to our analysis, providing justification from both a modeling and a mathematical standpoint. From a modeling perspective, it captures a natural causality inherent to many physical, biological, and social systems: a higher internal state (e.g., opinion, temperature, activation) should induce a correspondingly hig-
her, or at least non-lower, signal to its neighbors. Mathematically, this non-decreasing property is precisely what ensures that the influence between any two connected agents is fundamentally cooperative [18]. As we will formally establish in Section III, this is the key that unlocks the rigorous analytical framework of monotone dynamical systems, which allows us to prevent complex oscillatory behaviors and guarantee convergence to a set of equilibria. The fully synchronized equilibria of the sys-
tem occur when all agents reach a common state c such that c = s(c); in other words, they are precisely the fixed points of the signal function, c ∈ Fix(s). As we will see later, the stability of such an equilibrium is determined by its local behavior on the fully synchronized manifold, where the dynamics reduces to x ̇ = s(x) − x. The term s(x) − x acts as a restoring force when it pulls the state towards the fixed point, and a repelling force when it pushes the state away. To formalize this cruc-
ial behavior, we classify the fixed points based on their local stability properties. Definition 1: A signal function s is said to be:
• an underestimation if x(s(x)−x) ≤ 0 for all x ∈ [−1, 1]. • an overestimation if x(s(x) − x) ≥ 0 for all x ∈ [−1, 1]. Furthermore, a fixed point c ∈ Fix(s) is classified based on its one-sided stability: • It is left-stable (resp. right-stable) if there exists a neighborhood I ⊆ [−1, 1] of c such that (x − c)(s(x) − x) ≤ 0 for all x ∈ I with x < c (resp. x > c).
• It is left-unstable (resp. right-unstable) if the strict inequality (x − c)(s(x) − x) > 0 holds under the same conditions.
Based on these properties, we define a fixed point as stable if it is both left- and right-stable, unstable if it is both left- and right-unstable, and semi-stable otherwise. The local stability defined in Definition 1 captures a fundamental dichotomy. A stable fixed point acts as a local attractor: for a state x slightly deviating from c, the dynamics generates a restoring force that pushes x back towards c. In contrast, an unstable or semi-stable fixed point is locally repelling from at least on-
e side. As we will prove, this simple one-dimensional classification is the key determinant of stability for the full N -dimensional synchronized states. Based on this property, we partition the set of all fixed points, Fix(s), into the set of stable fixed points, which we denote by Fix•(s), and the set of unstable or semi-stable ones, Fix◦(s). For a more granular analysis, we will also need to identify the specific sources of instability. We define Fix◦
L(s) as the set of all fixed points that are unstable from the left, and Fix◦
R(s) as the set of those that are unstable from the right. Note that a fully unstable fixed point belongs to both of these subsets, as shown in the following fundamental lemma. Lemma 2: Any continuous signal function s has at least one stable fixed point. i.e., Fix•(s) ̸= ∅. Proof: See Appendix A.
III. QUALITATIVE BEHAVIOR: INVARIANCE AND CONVERGENCE
Despite its high dimensionality and nonlinear nature, the system (2) possesses remarkable properties that make its asymptotic behavior predictable. This section is dedicated to establishing two useful fundamental properties that can tackle this complexity. First, by proving that the system is cooperative, we rule out complex oscillatory behaviors and guarantee that almost all trajectories converge towards the set of equilibria. Second, by identifying key invariant sets, we show that these trajecto-
ries are confined to specific, welldefined regions of the state space. Together, these properties allow us to shift our focus from asking if the system settles down, to analyzing precisely where it settles. As a direct consequence of the dynamics, the hypercube state space X = [−1, 1]N is forward invariant [19], ensuring solutions remain bounded. A primary invariant set of interest is the Fully Synchronized Manifold (FSM) denoted S, which represents the subspace of complete agent agreement:
S := {x ∈ X | xi = xj, ∀i, j ∈ V} = Span(1) ∩ X .
For this class of systems, the FSM is also forward invariant [19], implying that a trajectory starting on the manifold remains on it for all future times.
A. Monotonicity and Guaranteed Convergence to Equilibria
The cooperative nature of the system arises from the nondecreasing signal function s, which ensures a positive influence between connected agents (A ≥ 0). In such systems,

4
trajectories exhibit strong ordering properties; for instance, a trajectory starting coordinate-wise below another will remain so forever. This structure is key to preventing oscillations and chaos. For a comprehensive survey, see [18], [20]. Definition 2: A dynamical system x ̇ = f (x) in X is cooperative if for any initial conditions x(0) ≤ y(0) in X , the resulting trajectories satisfy x(t) ≤ y(t) for all t ≥ 0. Proposition 1: The dynamical system (2) is cooperative on X . Consequently, it does-
 not admit attracting cycles, and almost all trajectories converge to the set of equilibria. Proof: To show that (2) is cooperative on X , since X is forward invariant, it is sufficient to show that f : X → X is a quasi-monotone function i.e., for any x, y ∈ X , such that x ≤ y one has fi(x) ≤ fi(y) for all i ∈ V such that xi = yi, where fi represents the i-th component of function f . This is known as the Kamke–Mu ̈ller condition [18, Theorem 3.2]. Let x, y ∈ X satisfying the conditions x ≤ y and-
 xi = yi for all i ∈ I ⊂ V. For any i ∈ I, one has that
fi(y) − fi(x) = 1
di
N
X
j=1
aij (s(yj) − s(xj)) − (yi − xi)
=1
di
N
X
j=1
aij (s(yj) − s(xj)) ≥ 0.
Since for all i, j ∈ V, di > 0, aij ≥ 0 and s is non-decreasing. Therefore, f is a quasi-monotone function on X and the system (2) is cooperative. Finally, from [20, Corollary 2.4] we have that cooperative systems do not admit attracting cycles and almost all trajectories converge to an equilibrium. Proposition 1 is a key result, ensuring that almost all the trajectories of the system will eventually settle at a steady state. Under the regularity conditions on the signal function, the result can b-
e extended to all trajectories as follows. Lemma 3: Let s be a strictly increasing and continuously differentiable function. Then, any trajectory of (2) will asymptotically converge to an equilibrium. Proof: For a smooth cooperative system, it is sufficient to show that the Jacobian matrix of the vector field is irreducible [21, Chapter 4, Theorem 1.1]. The Jacobian of (2) is J (x) = D−1Adiag(s′(x)) − I. Since s is strictly increasing, all entries of the diagonal matrix diag(s′(x)) are positive. T-
he irreducibility of J (x) is determined by the pattern of its off-diagonal entries, which is identical to that of D−1A. As the graph is connected, D−1A is irreducible, and thus, J (x) as well. Convergence to an equilibrium then follows from the boundedness of trajectories [18, Proposition 1.2 and Corollary 1.9].
B. Bounding Trajectories with Invariant Hypercubes
Proposition 1 guarantees that trajectories settle at an equilibrium, but it does not specify to which equilibrium when multiple equilibria exist. This section aims to provide further insights into this issue. The trajectories are constrained by invariant hypercubes generated by the fixed points of the signal function s. These “trapping regions” are essential for localizing equilibria and analyzing their basins of attraction. The
following proposition formalizes this idea and is illustrated in Figure 1. Proposition 2: The following statements hold true for dynamics (2):
i) For any a, b ∈ [−1, 1] with a < b, if s(a) ≥ a and s(b) ≤ b, the hypercube [a, b]N is forward invariant. ii) For any a, b ∈ [−1, 1] with a < b, if s(a) > a and s(b) < b, the hypercube (a, b)N is forward invariant.
Proof: (i) Since the system (2) admits a unique maximal trajectory for any initial condition (since f is Lipschitz continuous), by Nagumo’s theorem (see [22]), it is sufficient to analyze the dynamics at the boundary of the hypercube [a, b]N . Consider any agent i ∈ V. Suppose its state reaches the upper boundary, xi = b. The states of all other agents satisfy xj ≤ b. Since s is non-decreasing, s(xj) ≤ s(b). The dynamics for agent i is:
x ̇ i = 1
di
N
X
j=1
aijs(xj) − b ≤ 1
di
N
X
j=1
aijs(b) − b.
Since the matrix D−1A is row-stochastic, PN
j=1 aij /di = 1. This simplifies the inequality to x ̇ i ≤ s(b) − b. By assumption, s(b) ≤ b, so x ̇ i(t) ≤ 0. This ensures that the trajectory does not exit through the upper face xi = b. By symmetry, using the same argument, trajectories cannot exit through the lower face xi = a. Since this holds for any agent i, the hypercube [a, b]N is forward invariant. (ii) Since s is non-decreasing, there exists a ε > 0 such that for all y ∈ [b−ε, b], we have s(y) < y and for all y ∈ [a, a+ε], we have s(y) -
> y. Let us note Hn = [a + ε/n, b − ε/n]N for n ≥ 1. By (i), for n ≥ 1, the hypercube Hn is forward invariant and the sequence Hn is increasing. i.e., Hn ⊂ Hn+1. Since every Hn is forward invariant, so is their union:
[
n≥1
Hn =
[
n≥1
[a + ε
n,b − ε
n ]N = (a, b)N .
Thus, the open hypercube (a, b)N is forward invariant. Corollary 1: Proposition 2 can be applied to the fixed points of s as follows:
i) For any c, c ∈ Fix(s) such that c < c, the hypercube [c, c]N is forward invariant. ii) In addition, if c ∈ Fix◦
R(s) and c ∈ Fix◦
L(s), then the
hypercube (c, c)N is forward invariant.
Consequently, if c, c ∈ Fix(s) such that c ≤ mini∈V xi(0) and
maxi∈V xi(0) ≤ c, then x(t) ∈ [c, c]N , for all t ≥ 0. Proof: Any fixed point c satisfies s(c) = c thus Proposition 2 applies to c, c. Our analysis reveals two key insights about the system behavior. First, Proposition 1 establishes that almost all trajectories converge to equilibrium states. Second, Proposition 2 shows that trajectories remain bounded within hypercubes defined by the signal function’s fixed points. More precisely, when initial conditions start within a hypercube [a, b]N satisfyin-
g the conditions of Proposition 2-(ii), both the trajectory and its eventual equilibrium state must remain confined within that same hypercube. This property helps us predict and localize where the system will ultimately settle. The following section

5
−1 1
−1
1
a a′ b′ b
a
a′
b
b′
c2
c4
c1
c3
c5
x
y
y=x s(x) Fix◦(s) Fix•(s)
(a) A piecewise linear signal function s(x) with two unstable fixed points c2 and c4 and three stable fixed points c1, c3, and c5. The shape of s indicates the presence of induced invariant hypercubes.
−1 1
−1
1
a a′ b′ b
a
a′
b
b′
S
c21
c41
c11
c31
c51
x1
x2
[c, c]2 [a, b]2 [a′, b′]2
(b) Induced invariant hypercubes of the signal. The hatched green areas correspond to different invariant hypercubes defined by successive fixed points of s, while the blue and the red areas correspond to the invariant hypercubes defined by intervals [a, b]
and [a′, b′], respectively.
Fig. 1: Illustration of Proposition 2.
is dedicated to the characterization of the equilibria of the dynamics (2).
IV. CHARACTERIZATION OF EQUILIBRIA: FROM FULLY SYNCHRONIZED TO CLUSTERED STATES
Having established that trajectories converge to the set of equilibria of (2) (Propositions 1 and Lemma 3), we now characterize the structure of these points. An equilibrium state x∗ ∈ X satisfies x ̇ ∗ = 0, which from (2) implies:
x∗ = D−1As(x∗). (3)
Component-wise, this fundamental condition states that for every agent i ∈ V, its equilibrium state x∗
i must equal the weighted average of the signals received from its neighbors:
x∗
i= 1
di
X
j∈Ni
s(x∗
j ). (4)
Equilibria fall into one of two classes:
• Fully Synchronized Equilibria (FSE): States of complete agreement, belonging to the FSM (x∗ ∈ S), where all agents share a common value c ∈ [−1, 1]. i.e., x∗ = c1. • Non-Fully Synchronized Equilibria (NFSE): States of persistent disagreement, outside of the FSM (x∗ ∈ X \ S), where agents’ states settle at different values, often forming clusters.
A. Properties of Fully Synchronized Equilibria
For an equilibrium x∗ = c1 to exist, it must satisfy the equilibrium condition (3):
c1 = D−1As(c1) = s(c)D−1A1.
Since the matrix D−1A is row-stochastic, its rows sum to one, meaning D−1A1 = 1. The condition thus simplifies to c1 = s(c)1, which requires c = s(c). This proves a crucial connection:
Lemma 4: The set of Fully Synchronized Equilibria (FSE) of the system (2) is precisely the set of states x∗ = c1 where c is a fixed point of the signal function s, i.e., c ∈ Fix(s). Since Lemma 2 guarantees that at least one such fixed point c always exists, the existence of at least one FSE is guaranteed. The central question then becomes one of stability. The following theorem establishes an elegant result: the stability of an N -dimensional FSE is completely determined by the one-dimensional st-
ability of its corresponding fixed point, as defined in Definition 1. Beyond simply proving existence, our goal is to characterize the equilibria structure more precisely. The local stability of FSE was studied in [19]. We recall the main result:
Theorem 1 (Stability of FSE): Let x∗ = c1 be a Fully Synchronized Equilibrium. Then:
i) x∗ is locally stable if and only if c is a stable fixed point of s (c ∈ Fix•(s)).
ii) x∗ is locally asymptotically stable if and only if c is a stable and isolated fixed point of s. iii) x∗ is unstable if and only if c is not a stable fixed point of s (c ∈ Fix◦(s)).
Proof: See [19, Theorem 1]. This theorem provides a complete characterization of the stability of all possible states of full agreement.
B. Basins of Attraction for Synchronized States
Theorem 1 tells us which FSE are stable, but not which initial conditions converge to them. By leveraging the invariant hypercubes identified in Proposition 2, we can provide a geometric characterization of the basins of attraction for these equilibria. The following proposition shows that these basins are defined by the semi-stable or unstable fixed points of s, which act as separatrixes [23].
Proposition 3 (Basin of Attraction of FSE): Let c∗ be a fixed point of s, defining the FSE x∗ = c∗1. Let its basin of attraction be B(x∗) := {x(0) ∈ X | limt→∞ x(t) = x∗}. Define the nearest non-stable fixed points bounding c∗ as:
c := max({c ∈ Fix◦(s) | c < c∗} ∪ {−1}),
c := min({c ∈ Fix◦(s) | c > c∗} ∪ {1}).
Then the following equivalences hold:
i) The region [c, c∗]N \{c1} is a subset of B(x∗) if and only if s(x) > x, for all x ∈ (c, c∗), i.e., c ∈ Fix◦
R(s) ∪ {−1}.
ii) The region [c∗, c]N \{c1} is a subset of B(x∗) if and only if s(x) < x, for all x ∈ (c∗, c), i.e., c ∈ Fix◦
L(s) ∪ {1}.
iii) The region [c, c]N \ {c1, c1} ⊆ B(x∗) if and only if x∗ is locally asymptotically stable. i.e., c∗ ∈ Fix•(s).
Those results extend to intervals over S of fixed point I ⊆ Fix(x).
Proof: Note that c1 and c1 are also equilibria of (2). Thus, c1 ∈/ B(x∗) and c1 ∈/ B(x∗).
(i) (⇒) Let us restrict to the FS case since S is forward invariant. Over, S we have a 1-dimensional dynamics: x ̇ = s(x) − x := f (x) defined over [−1, 1].
Since [c, c∗]N \ {c1} ⊆ B(x∗), one has [c, c∗]N ∩ S \ {c1} ⊆ B(x∗), then for all x(0) ∈ (c, c∗], we must have

6
limt→∞ x(t) = x∗. Moreover, since for all x ∈ (c, c∗), we have x < c∗, the function t 7→ x(t) must be increasing. Therefore, x ̇ (t) > 0 for all t ≥ 0. Then,
x ̇ (t) = s(x(t)) − x(t) > 0 ⇔ s(x(t)) > x(t).
This yields s(x) > x for all x ∈ (c, c∗). (⇐) Let us consider the function V (x) = 1
2 (x −
x∗)⊤D(x − x∗) ≥ 0. The time derivative of V along the trajectories of the dynamics is given by
V ̇ (x) = (x − x∗)⊤Dx ̇ = (x − x∗)⊤As(x) − (x − x∗)⊤Dx
= (x − c∗1)⊤D(s(x) − x) − (x − c∗1)⊤Ls(x),
using the definition of the Laplacian matrix L = D−A. Since 1⊤ is a left eigenvector of L associated with eigenvalue 0, this rewrites in summation form:
V ̇ (x) =
N
X
i=1
di(xi − c∗)(s(xi) − xi)
−1
2
N
X
i,j=1
aij(xi − xj)(s(xi) − s(xj)).
One has {x ∈ X | V ̇ (x) = 0} ∩ ([c, c∗]N \ {c1}) = {x∗}, since L1 = 0 and c∗ is the only fixed point of s in (c, c∗] (since s(x) > x, for all x ∈ (c, c∗)). Additionally, over the hypercube [c, c∗)N \ {c1}, the first term of V ̇ (x) is negative since there exists at least one i ∈ V such that xi ̸= c∗
L and
then verify (xi − c∗)(s(xi) − xi) < 0 by the assumption
s(xi) > xi and PN
i,j=1 aij (xi − xj )(s(xi) − s(xj )) ≥ 0 by non-decreasing-ness of s. Therefore, V is a Lyapunov function for the dynamics (2) over [c, c∗]N \ {c1}. Let n0 ∈ N such that [c + 1/n0, c∗] ⊂ (c, c∗]. For any i ∈ V, let us note Hin = [c, c∗]i−1 × [c + 1/n, c∗] × [c, c∗]N−i for n ≥ n0, this hypercube is a compact forward invariant for the dynamics (2) from Corollary 1-(ii). Additionally, one has V ̇ (x) < 0 for any x ∈ Hin \ {c∗1}. Thus, by LaSalle’s
invariance principle [24, Theorem 4.4], one has Hin ⊆ B(x∗). Then, since this is true for all i ∈ V and n ≥ n0, we have that every Hin ⊆ B(x∗) and thus
[
n≥n0
[
i∈V
Hi
n ⊆ B(x∗) ⇔ [c, x∗]N \ {cL∗ 1} ⊆ B(x∗).
(ii) The proof follows by symmetry from the previous. (iii) This is a corollary of (i) and (ii) or [19, Proposition 4]. The extension to intervals over S uses the same argument except that in that case {x ∈ X | V ̇ (x) = 0} = IN ∩ S and is not reduced to a singleton. The results follow from LaSalle’s invariance principle [24, Theorem 4.4]. Proposition 3 yields geometric insights into the system’s global behavior. Since the system is cooperative and its trajectories are ordered, the one-dimensional-
 dynamics on the FSM effectively governs the behavior within the entire N dimensional hypercubes defined by successive fixed points. This implies that any trajectory starting within, or later entering, an invariant hypercube such as (c, c)N is guaranteed to converge asymptotically to a stable equilibrium on the FSM. This principle of convergence has a big impact on the potential location of any NFSE. If an equilibrium exists outside
−1 −0.5 0.5 1
−1
−0.5
0.5
1
x
y=x s(x) Fix◦(s) Fix•(s)
−1 −0.5 0 0.5 1
B(−0.95) B(0.95)
x
(a) s(x) = tanh(2.5x).
−1 −0.5 0.5 1
−1
−0.5
0.5
1
x
y=x s(x) Fix◦(s) Fix•(s)
−1 −0.5 0 0.5 1
B(−0.5) B(0) B(0.5) B(1)
x
(b) s(x) = x − min(sin(αx), sin(αx + π))/α, with α = 2π.
Fig. 2: Illustration of the attraction basins for dynamics restricted to FSM (i.e., x ̇ 1 = (s(x) − x)1) for two different signal functions s(x). The first plots show the function s(x) and the identity line y = x and exhibits the fixed points of s(x). The stable fixed points are represented by a black circle and the unstable ones by a white circle. The second plots show the basins of attraction of the different equilibria over S.
the FSM, it cannot lie within any of the invariant “trapping regions” that guarantee convergence to a synchronized state (the green areas in Figure 1). Therefore, a necessary condition for the existence of NFSE is that they must lie in the complement between these regions with respect to X \ [ci, ci+1]N for i ∈ {1, . . . , M }, where c1 < c2 < · · · < cM are the fixed points of s ordered in increasing order (such as the complement of the blue area with respect to the green ones). This geometric co-
nstraint provides the foundation for our investigation into the conditions under which such states of persistent disagreement can emerge.
C. Emergence of Non-Fully Synchronized Equilibria
The analysis so far has focused on equilibria characterized by full synchronization. We now investigate the conditions under which states of persistent disagreement, or NFSE, can emerge. This also raises a fundamental question: can NFSE act as stable attractors for the dynamics? The following example provides a constructive proof of their existence and offers intuition for the mechanisms that enable them.
Example 1 (Emergence of a Stable NFSE on a Line Graph): To provide a constructive proof that asymptotically stable NFSE can exist, we consider a line graph G with N = 5 agents and an odd sigmoidal signal function, s(−x) = −s(x). This system possesses an anti-symmetric invariant subspace,
M = {x ∈ X | x3 = 0, x2 = −x4, and x1 = −x5}.
Then, the set M is an invariant manifold under the dynamics (2). Indeed, for any x ∈ M:
x ̇ 1 = s(x2) − x1 = −s(−x2) + x5 = −s(x4) + x5 = −x ̇ 5
x ̇ 2 = s(x1) + s(x3)
2 − x2 = − s(−x1)
2 + x4 = −x ̇ 4
x ̇ 3 = s(x2) + s(x4)
2 − x3 = s(x2) + s(−x2)
2 − 0 = 0.

7
0.5 1.0 1.5 2.0 2.5 3.0 3.5 Gain Parameter K
−1.00
−0.75
−0.50
−0.25
0.00
0.25
0.50
0.75
1.00
Equilibrium State x *
1
Creation Bifurcation K = √2
Stabilization Bifurcation
Kstab ≈ 2.463
K=1 K=2 K=3
Stable on  Unstable on  Stable on  Unstable on 
Fig. 3: Bifurcation diagram for the N = 5 line graph with s(x) = tanh(Kx) for K ∈ [0.5, 3.5], illustrating the distinction between stability on the invariant manifold M and stability in the full state space X . The plot shows the equilibrium state x1∗ as a function of the gain parameter K.
Stability on M (lines): The FSE at x1∗ = 0 loses stability
at K = √2 (dashed line), creating two branches of NFSE that are stable on the manifold (solid lines). Stability in X (red/blue colors): The FSE becomes unstable in the full space
at K = √2 (red dashed line). Crucially, the new NFSE branches are also born unstable in X (solid red lines), despite their stability on M. They only become stable in the full space (solid blue lines) after the transversal stabilization bifurcation at Kstab ≈ 2.463. The inset phase portraits visualize the dynamics (5) on M at three representative values of K.
Therefore, any trajectory starting on M remains on M. The dynamics on this manifold reduces to the two-dimensional system in variables (x ̃1, x ̃2) = (x1, x2) given by
(x ̃ ̇ 1 = s(x ̃2) − x ̃1,
x ̃ ̇ 2 = 1
2 s(x ̃1) − x ̃2. (5)
The asymptotic stability of equilibria in this system depends critically on the gain at the origin, K = s′(0). A local bifurcation analysis, visualized comprehensively in Figure 3, reveals
a two-stage process. First, at Kbif = √2, the FSE becomes unstable on M, giving rise to two symmetric branches of NFSE. However, these equilibria remain unstable in the full state space X due to dynamics transverse to the manifold. Second, at a higher critical gain Kstab, a transversal stabilization bifurcation occurs, rendering the NFSE locally stable in X . This example is not an isolated curiosity; it reveals the fundamental conditions necessary for any NFSE to exist. First, the loss of stabili-
ty of the FSE at the origin was the critical event that allowed a new NFSE to emerge. This suggests a general principle: the existence of at least one non-stable fixed point (c◦ ∈ Fix◦(s)) is a prerequisite for breaking the system’s tendency to synchronization. Second, the emergent NFSE was characterized by a clear partitioning of agent states around this unstable point. This hints that any NFSE must be structurally organized around such a “splitting point.” Finally, the shape of the signal functi-
on s(x) was the ultimate cause; its steep slope at the origin created the instability. This shows the importance of the local properties of s(x), specifically the existence of
points where it generates a repelling rather than a restoring force. The following theorem formalizes and generalizes these important insights.
D. Necessary Conditions for the Existence of NFSE
Theorem 2 (Necessary Conditions for NFSE): Let x∗ be an NFSE of the dynamics (2). i.e., x∗ is an equilibrium that lies outside the FSM, x∗ ∈/ S. Then:
i) The set of non-stable fixed points must be non-empty, i.e., Fix◦(s) ̸= ∅.
ii) There must exist a non-stable fixed point c◦ ∈ Fix◦(s) that splits the agents into two non-empty sets, I = {i | x∗
i < c◦} and J = {j | x∗
j > c◦}. Furthermore, both of these sets must contain at least two agents: |I| ≥ 2 and |J | ≥ 2.
iii) Let x∗m = mini∈V x∗
i and x∗
M = maxi∈V x∗
i . The signal function s must possess both a left-unstable fixed point, c◦
L, and a right-unstable fixed point, c◦
R, that lie strictly
between the extremal states of the equilibrium: x∗m <
c◦
L ≤ c◦
R < x∗
M.
Proof: (i) We will proceed by contradiction. Assume there exists an NFSE x∗ ∈/ S while Fix◦(s) is empty. If Fix◦(s) is empty, then s neither reaches the identity line from below nor exits it above. By the continuity of s, this implies there is either a unique fixed point c• of s or a continuum of them (i.e., there exists an interval I ⊂ [−1, 1] over which s is an exact estimation). The same reasoning applies to both situations by taking c• as the minimal fixed point in the case of a continuum. The-
n, x 7→ s(x − c•) − c• is an underestimation. By [19, Proposition 3], if s is an underestimation over [−1, 1], it implies that S is globally asymptotically stable, thus there is no non-synchronized equilibrium contradicting the premise. (ii) Let x∗ ∈/ S be given. Let x∗m = mini∈V x∗
i and x∗
M=
maxi∈V x∗
i . We first show by contradiction that there must
exist some c◦ ∈ Fix◦(s) such that x∗m < c◦ < x∗
M.
Suppose that for all c◦ ∈ Fix◦(s), c◦ ≤ x∗
i ≤ 1 for all i ∈ V.
This must be true for their maximum c◦max = max(Fix◦(s)),
then c◦max ≤ xi ≤ 1. By assumption, x∗ ∈/ S, thus we
must have x∗
M > c◦max and xm < 1. i.e., x∗ ∈ [c◦max, 1]N \
{c◦max1, 1}. Now there are two possible situations:
• Fix•(s)∩(c◦max, 1] = ∅. Then, by continuity of s we must
have s(x) ≤ x for all x > c◦max. Since c◦max is the maximum
of Fix◦(s), the inequality is strict, otherwise it would exist another unstable fixed point of s greater than c◦max. i.e., s(x) <
x for all x > c◦maxin this case, from Proposition 3-(ii), one
has x∗ ∈ B(c◦max1).
• Fix•(s)∩(c◦max, 1] ̸= ∅. If this set is reduced to a singleton
c• in this case by Proposition 3-(iii) one has [c◦max, 1]N \
{c◦max1, 1} ⊆ B(c•1) and implies x∗ ∈ B(c•1). If this set is an interval I, the reasoning is the same, using the extension of Proposition 3-(iii) to intervals and x∗ ∈ B(IN ∩ S). i.e., x∗ is in the attraction basin of a continuum of equilibria.
In both cases, x∗ is in the basin of attraction of FSE equilibria. Moreover, x∗ ∈ B(x∗) by definition. Since x∗ cannot be in two different attraction basins, this contradicts the assumption that for all c◦ ∈ Fix◦(s), x∗
i ≥ c◦ for all i ∈ V. Thus, there

8
exists c◦ ∈ Fix◦(s) such that x∗m < c◦ < x∗
M . Using (4), one obtains that:
x∗
m= 1
dm
N
X
j=1
amj s(x∗
j ) < c◦.
Since x∗m is a convex combination of the family (s(x∗
i ))i∈Nm ,
this implies there must exist some j ∈ Nm with s(x∗
j ) < c◦. Recalling that s is non-decreasing one gets s(xm) ≤ s(xj) < c◦. It is clear that j, m ∈ I = {i ∈ V | s(xi) < c◦}. Moreover, since j ∈ Nm and m ∈/ Nm (since there is self loop in the graph G), this implies, j ̸= m and we conclude that I has at least two elements. Similarly, since x∗
M > c◦, the same
reasoning applies to show that s(xM ) > c◦, and that J = {j ∈ V | s(xj) > c◦} has at least two elements. (iii) Let x∗ be an NFSE, so x∗m < x∗
M . Let g(x) = s(x)−x. The equilibrium condition (4) yields:
x∗
m= 1
dm
N
X
j=1
amj s(x∗
j) ≥ 1
dm
N
X
j=1
amj s(x∗
m) = s(x∗
m).
We then have x∗m ≥ s(x∗m) implying g(x∗m) ≤ 0. A symmetric
argument yields g(x∗
M ) ≥ 0. If the inequalities are strict, there
exist x′m, x′
M with x∗m ≤ x′m < x′
M ≤ x∗
M such that g(x′m) <
0 and g(x′
M ) > 0.
Otherwise, if g(x∗m) = 0, since x∗
j ≥ x∗m for all j ∈ Nm and
s is non-decreasing we must have s(x∗
j ) ≥ x∗m. Moreover, as
x∗m is a convex combination of (s(x∗
j ))j∈Nm , we must have
s(x∗
j ) = x∗
M for all j ∈ Nm. Since x∗ is an NFSE on a
connected graph, there exists k ∈ Nm with x∗
k > x∗m (this
statement must be true for at least one m∗ ∈ arg maxi∈V x∗
i, otherwise it imply x ∈ S by propagation of equality to all the graph), implying s is constant on [x∗m, x∗
k]. Thus, for any x ∈
(x∗m, x∗
k], g(x) = x∗m − x < 0. Symmetrically, if g(x∗
M ) = 0,
we can find x near and below x∗
M where g(x) > 0. Hence,
there exist x′m, x′
M with x∗m ≤ x′m < x′
M ≤ x∗
M such that
g(x′m) < 0 and g(x′
M ) > 0.
Let c◦
L := inf{x ∈ (x′m, x′
M ) | g(x) ≥ 0} and c◦
R :=
sup{x ∈ (x′m, x′
M ) | g(x) ≤ 0}. By continuity of g, both
are fixed points of s. i.e., g(c◦
L) = 0 and g(c◦
R) = 0. The
construction implies that for some δ > 0, g(x) < 0 on (c◦
L−
δ, c◦
L) and g(x) > 0 on (c◦
R, c◦
R +δ), so c◦
L ∈ Fix◦
L(s) and c◦
R∈
Fix◦
R(s). By definition, the strict inequalities x∗m < c◦
L < x∗
M
and x∗m < c◦
R < x∗
M hold.
Finally, if c◦
L > c◦
R, then for any x ∈ (c◦
R, c◦
L), the definitions imply both g(x) > 0 and g(x) < 0, which would be a contradiction. Thus, c◦
L ≤ c◦
R, which completes the proof. Theorem 2 provides a connection between the properties of the scalar function s and the emergence of disagreement in the N -dimensional system. Item (iii) provides the most immediate practical check: for disagreement to be possible, the signal function must possess both left- and right-unstable fixed points. This allows one to rule out NFSE for entire classes of functions by visual inspection. For instance, the signal function in Figure 2a, with its unstable fixed poi-
nt at the origin, satisfies this condition and can therefore support NFSE (as demonstrated in Example 1). In contrast, the function in Figure 2b, while possessing right-unstable fixed points, has no left-unstable fixed points. Consequently, Theorem 2 guarantees
that NFSE cannot exist for any system governed by this signal function, regardless of the network topology. Furthermore, the structural requirement from item (ii), that any disagreement must involve at least two agents on either side of a splitting point, has a direct consequence on the minimum network size required to support such a state. Corollary 2: If the network size N ≤ 3, then all equilibria of (2) are FSE. While Corollary 2 highlights a size constraint, the network’s topology plays an equ-
ally important role, as we now show.
E. On the Critical Role of Network Topology
Theorem 2 established that the existence of NFSE depends on the shape of the signal function s. We now show that the network topology plays an equally important role. This section demonstrates that for any given network, there exists a class of signal functions capable of generating disagreement, and that this capability is directly linked to the network’s algebraic connectivity. We begin by ordering the eigenvalues of the row-stochastic matrix D−1A as −1 ≤ λ1 ≤ · · · ≤ λN−1 < λN = 1. Since the gr-
aph is connected, we have λN−1 < 1. The key metric for our analysis is the second-largest eigenvalue, λN−1, which governs the convergence speed of linear consensus [7]. Its value is related to the graph’s algebraic connectivity, μ = 1 − λN−1. A value of λN−1 close to 1 indicates a sparsely connected or string-like (path-like) structure, while a value close to 0, or negative, indicates a densely connected graph. It is a known result that for highly connected graphs such as complete or complete bipa-
rtite graphs (where λN−1 ≤ 0), NFSE cannot exist for any non-decreasing signal function [19]. We can state the following lemma.
Lemma 5 (Highly connected graphs imply FSE): Let the graph G be such that λN−1 < 0. Then, any equilibrium x∗ of the dynamics (2) must be an FSE. Proof: Let P = D−1A. An equilibrium state x∗ satisfies (3). i.e., x∗ = P s(x∗). The non-decreasing property of the signal function s implies that y⊤Ls(y) = y⊤(D −A)s(y) ≥ 0 for any y ∈ X . This is equivalent to the D-weighted inner product inequality ⟨y, (I − P )s(y)⟩D ≥ 0. Let x∗
⊥ and s(x∗)⊥ be the projection of x∗ and s(x∗) onto the disagreement subspace (in the D-orthogonal complement of S), respectively. At equilibrium, the inequality reduces to this subspace, yielding ⟨x∗
⊥, (I−P )s(x∗)⊥⟩D ≥ 0. Projecting
the equilibrium condition itself gives x∗
⊥ = P s(x∗)⊥. By
hypothesis, all eigenvalues of P on this subspace, {λi}N−1
i=1 ,
are strictly negative, so P is invertible here. Substituting s(x∗)⊥ = P −1x∗
⊥ into the inequality gives:
⟨x∗
⊥, (P −1 − I)x∗
⊥⟩D ≥ 0.
The operator P −1 − I is strictly negative definite on the disagreement subspace, as its eigenvalues 1/λi − 1 are all less than −1. This quadratic form can only be non-negative if x∗
⊥ = 0, proving that any equilibrium x∗ must be an FSE. This result formally establishes that for this class of highly connected graphs, disagreement is structurally impossible. We therefore focus on the more general case where λN−1 > 0.

9
The following proposition provides a sufficient condition, linking the maximal nonlinearity (quantified by K) and network connectivity (quantified by λN−1), for the existence of a signal function that generates NFSE. Proposition 4: Let K > 0 and N ≥ 4. For any graph G, such that λN−1 > 0. The following statements hold:
i) If KλN−1 = 1, there exists a signal function s verifying Assumption 2 such that the dynamics (2) possesses a continuum of NFSE, in Span(vN−1) ∩ X , where vN−1 is the eigenvector associated to λN−1. ii) If KλN−1 > 1, there exists a signal function s verifying Assumption 2 (more specifically s is K-Lipschitz) such that dynamics (2) possesses NFSE.
Consequently, if KλN−1 ≥ 1, the fully synchronized manifold S is not globally asymptotically stable for the dynamics (2) across all admissible signal functions s. Proof: The proof of part (i) is constructive and provided here. The proof of part (ii) involves constructing a specific odd signal function and using a topological argument on the stability boundaries of its basins of attraction; due to its length, it is deferred to Appendix B. (i) By assumption, λN−1 > 0. Under Assumption 1, λN = 1 is s-
imple and we have λN−1 < 1. Moreover, the eigenvector vN−1 cannot be aligned with vN = 1, thus vN−1 ∈ X \ S. Since KλN−1 = 1 and λN−1 < 1 one has K > 1. Define the signal function s(x) = min(1, max(−1, Kx)). This function verifies conditions of Assumption 2. Consider states of the form xε = εvN−1 for some scalar 0 < ε ≤ 1/K. Since xε ∈ [−1/K, 1/K]N and the function is linear in this hypercube one has s(xi) = Kxi for all i ∈ V. Therefore, s(xε) = Kxε = KεvN−1. Injecting it into the dynamics yields:
x ̇ ε = D−1As(xε) − xε = εKD−1AvN−1 − εvN−1
= ε(KλN−1 − 1)vN−1 = 0.
Thus, xε is an NFSE. This being true for all 0 < ε ≤ 1/K, any xε for such ε is an NFSE. Therefore, there exists a continuum of NFSE in Span(vN−1) ∩ X .
Remark 1 (Generalization of Sufficiency Condition): The proof of (ii) of this proposition, postponed to Appendix B, establishes that λN−1K ≥ 1 is a sufficient condition for the existence of a signal function s inducing an NFSE. This result is analogous to the sufficiency result in [16, Theorem 6], which uses bifurcation theory to prove the emergence of mixed-sign equilibria under the explicit assumption that the eigenvalue λN−1 is simple. On the other hand, our proof relies on a topological argume-
nt concerning stability boundaries and does not require this simplicity assumption, thus holding for all network topologies such that λN−1 > 0, including those with repeated eigenvalues. Proposition 4 provides a constructive proof: if the interplay between nonlinearity and topology is sufficiently strong (KλN−1 ≥ 1), then there exists a signal function capable of generating disagreement. This should be read in conjunction with the necessary conditions of Theorem 2: for an NFSE to exist, the signal-
 function must also have the requisite shape (e.g., possess unstable fixed points). An underestimation function, for example, will never generate an NFSE, regardless
of the value of KλN−1. Figure 4 provides a visual summary of these dynamics, illustrating the starkly different outcomes on various network topologies when the threshold condition KλN−1 < 1 is satisfied versus when it is violated. This synthesis leads to the ultimate question for full synchronization: Do these conditions collapse into a single sharp threshold? Specifically, is the condition KλN−1 < 1 sufficient to guarantee full synchronization for any admissible signal function, thereby overpower-
ing any specific shape properties? This question is answered in the next section.
V. A SHARP THRESHOLD FOR FULL SYNCHRONIZATION
This section provides the definitive answer to the question posed above. We prove that the condition KλN−1 < 1 is indeed sufficient to confine all system equilibria to the FSM, regardless of the specific shape of the signal function s. This sufficiency result, when combined with the possibility of disagreement established in Proposition 4, formally establishes the condition as a sharp threshold. We thereby generalize the condition found in [16], demonstrating that a guarantee previously establishe-
d for a restrictive class of smooth, sigmoidal interactions holds for any admissible interaction law.
Theorem 3 (Sharp Threshold for Synchronization): Let K be the Lipschitz constant of s. If KλN−1 < 1, then, all the equilibria of (2) are FSE. The proof relies on Ostrowski’s theorem on matrix congruence, which we state here for completeness.
Lemma 6 (Ostrowski [25, Theorem 4.5.9]): Let A, S ∈ RN×N with A symmetric. Let the eigenvalues of A, SS⊤, and SAS⊤ be arranged in nondecreasing order, denoted by λk(A), λk(SS⊤), and λk(SAS⊤) respectively, for k = 1, . . . , N . Then, for each k = 1, . . . , N , there exists a real number θk ∈ [λ1(SS⊤), λN (SS⊤)] such that λk(SAS⊤) = θk λk (A).
Proof of Theorem 3: The proof proceeds by contraposition: we assume the existence of an NFSE, x∗, and we show that this leads to the necessary condition KλN−1 ≥ 1. An equilibrium point x∗ of the system (2) must satisfy the condition (3). i.e., x∗ = D−1As(x∗). Since x∗ is an NFSE, by Theorem 2-(ii), there exists c◦ ∈ Fix◦(s) such that the components of x∗ and s(x∗) are not all on one side of c◦. Specifically, the sets I = {i | s(x∗
i ) < c◦} and J = {j |
s(x∗
j ) > c◦} are non-empty. We now center the equilibrium equation around this fixed point c◦. Let v∗ = x∗ − c◦1. Subtracting c◦1 from the equilibrium equation and using D−1A1 = 1 yields:
v∗ = D−1A(s(x∗) − c◦1).
To recover v∗ in the right hand side, we define a diagonal matrix M = diag(m1, . . . , mN ), where
mi =



s(x∗
i ) − c◦ x∗
i − c◦ if x∗
i ̸= c◦,
K if x∗
i = c◦.
The Lipschitz continuity of s ensures that each diagonal entry satisfies 0 ≤ mi ≤ K. By construction, we have s(x∗) − c◦1 = M v∗, which transforms the equation into:
v∗ = D−1AM v∗. (6)

10
To proceed, we define the vector y∗ = M 1/2v∗ and show that it must be non-zero and contain both positive and negative entries. We argue by contradiction. Suppose y∗ contains no positive entries, i.e., y∗
i ≤ 0 for all i ∈ V. This implies that
for any index j ∈ J (where v∗
j > 0), the corresponding entry mj must be zero. By definition of mj, this would mean s(x∗
j ) = c◦. This contradicts the fact that J is the set of
indices where s(x∗
j ) > c◦. Therefore, our assumption is false,
and y∗ must contain at least one positive entry. A symmetric argument using the set I shows it must also contain at least one negative entry. Consequently, y∗ is a non-zero vector with mixed-sign entries. Left-multiplying (6) by M 1/2 yields y∗ = M 1/2D−1AM 1/2y∗. This reveals that 1 is an eigenvalue of the matrix Θ = M 1/2D−1AM 1/2, with corresponding eigenvector y∗. To analyze the eigenvalues of Θ, we relate it to a symmetric matrix. Let A ̃ = D−1/2AD−1/2 be the symmetrically normalized adjacenc-
y matrix, which is symmetric and has the same eigenvalues as D−1A by similarity. The matrix Θ is similar to the symmetric matrix Θ ̃ = M 1/2A ̃M 1/2 via the transformation Θ ̃ = (D1/2M −1/2)Θ(M 1/2D−1/2). Therefore, Θ and Θ ̃ share the same real eigenvalues, which means 1 is also an eigenvalue of the symmetric matrix Θ ̃ . The corresponding eigenvector is z∗ = D1/2y∗. Since D1/2 has strictly positive diagonal entries, z∗ inherits the mixed-sign property of v∗. Since Θ ̃ is a nonnegative matrix, by-
 Perron-Frobenius theorem (Lemma 1), the eigenvectors of Θ ̃ associated with the largest eigenvalue λN (Θ ̃ ) must be nonnegative. Since z∗ has mixed-sign, it cannot be the Perron-Frobenius eigenvector corresponding to the largest eigenvalue. Therefore, z∗ must be associated with λi(Θ ̃ ) for i ∈ {1, . . . , N } such that
λi(Θ ̃ ) ̸= λN (Θ ̃ ). This implies that 1 < λN (  ̃Θ), and therefore
1 must be one of the lower eigenvalues, so 1 ≤ λN−1(Θ ̃ ). Finally, we use Ostrowski’s theorem (Lemma 6) for matrix congruence on Θ ̃ = (M 1/2)⊤A ̃(M 1/2). This theorem guarantees that λk(Θ ̃ ) = θkλk(A ̃) for some scalar θk ∈ [mini(mi), maxi(mi)]. Since 0 ≤ mi ≤ K for all i, we have θk ∈ [0, K]. Applying this to the (N − 1)-th eigenvalue, and
noting that λN−1(A ̃) = λN−1, we get:
1 ≤ λN−1(Θ ̃ ) = θN−1λN−1(A ̃) ≤ KλN−1.
The existence of an NFSE has led to the necessary condition KλN−1 ≥ 1. By contraposition, if KλN−1 < 1, no such equilibria can exist.
Remark 2 (Generalization of Necessity Condition): This theorem and its proof generalize the necessity condition to obtain NFSE with sigmoidal signals in [16, Theorem 4] in two key aspects. First, our result applies to a much broader class of signal functions, requiring only that s be non-decreasing and Lipschitz-continuous, whereas the model in [16] assumes smooth, odd, and sigmoidal nonlinearities. Second, our proof technique correctly establishes the nonstrict inequality KλN−1 ≥ 1 as the necessa-
ry condition for disagreement, refining the strict inequality derived for their specific model.
4-Regular
K N 1 < 1 (Sync)
K N 1 > 1 (Non-Sync)
10-Ring
K N 1 < 1 (Sync)
K N 1 > 1 (Non-Sync)
5x5-Grid
K N 1 < 1 (Sync)
K N 1 > 1 (Non-Sync)
10-Star
N 1 = 1 (Always Sync)
10-Complete
N 1 > 1 (Always Sync)
1.00
0.75
0.50
0.25
0.00
0.25
0.50
0.75
1.00
xi state value
Fig. 4: Visual validation of the sharp synchronization threshold on various network topologies. The figure displays the final equilibrium state, with node colors representing the agent state x∗
i ∈ [−1, 1]. For diverse topologies (columns 1-3), the top panels confirm that meeting the condition KλN−1 < 1 guarantees convergence to an FSE, as predicted by Corollary 3. In contrast, the bottom panels demonstrate that violating this threshold leads to an NFSE, characterized by robust clustering. Column 4 highlights the special case of highly connected graphs (e.g., Star and Complete), which are intrinsically robust to disagreement and always synchronize. All simulations use the signal function-
 s(x) = max(−1, min(1, Kx)), with identical initial conditions for top and bottom panels to ensure a fair comparison.
Theorem 3 provides the condition under which the set of equilibria is confined to the FSM. This has immediate consequences for the long-term behavior of trajectories.
Corollary 3 (Global Attractivity of the FSM): Assume that KλN−1 < 1. Then, for almost all initial conditions x(0) ∈ X , one has limt→∞ x(t) ∈ S. If additionally, s is strictly increasing and smooth (for simplicity), this is verified for all initial conditions in X . That is, the fully synchronized manifold S is globally attractive. Proof: From Proposition 1, we have that for almost all initial conditions, the associated trajectory converges to an equilibrium. Since the only equilibria are synchron-
ized equilibria, the FSM is globally attractive. If s is strictly increasing and smooth, from Lemma 3, we have the previous verified for all initial conditions, leading to the global attractiveness of S.
Remark 3 (Attractivity vs. Lyapunov Stability): It is important to distinguish the global attractivity of S guaranteed by Corollary 3 from its Lyapunov stability. Even when the threshold is met, it is possible for the trajectories to transiently move away from S before finally returning, which excludes a general statement on global asymptotic stability. The distinction between attractivity and stability highlighted in Remark 3 asks for further discussion. The sharp threshold KλN−1 < 1 guarantees t-
hat no NFSE can exist to act as alternative attractors. It ensures that all trajectories must eventually converge to the FSM. However, it does not constrain the transient behavior. The standard Lyapunov function for consensus, V (e) = ∥e∥2
D /2, may not be strictly decreasing
everywhere if some eigenvalues of D−1A are negative and large in magnitude, potentially allowing for transient growth of the disagreement vector e. To guarantee not just eventual asymptotic convergence, but

11
a direct and exponentially fast decay of disagreement from any initial condition, we must ensure that the stabilizing effect of consensus outweighs the destabilizing potential across the entire spectrum of the system, not just for the mode corresponding to λN−1. This requires a stricter condition, as established in the following theorem.
Theorem 4 (Exponential stability of the FSM): Let us define α := K maxi∈{1,...,N−1} |λi|. If α < 1, then the fully synchronized manifold S is globally exponentially stable. Proof: Let e = x − x ̄1 be the error from center of mass of the agents x ̄ := PN
i=1 dixi/ PN
i=1 di. When the error is zero, the agents are synchronized. The dynamics of the error is given by e ̇ = x ̇ − x ̄ ̇ 1.
Let us take the Lyapunov function V (e) = ∥e∥2
D /2 =
e⊤De/2 for which V (e) = 0 if and only if e = 0. The time derivative of the Lyapunov function is given by
V ̇ (e) = e⊤De ̇ = (x − x ̄1)⊤ D D−1As(x) − x .
Note that since 1 is a the right eigenvector of L = D − A associated to the eigenvalue 0, one has
(x − x ̄1)⊤ A1 = (x − x ̄1)⊤ D1 = x⊤D1 − x ̄1⊤D1
=
N
X
i=1
dixi −
PN
i=1 di PN
i=1 di
N
X
i=1
dixi = 0.
Thus, e⊤A1 = e⊤D1 = 0. By substituting x = e + x ̄1 and s(x) = s(x) − s(x ̄)1 + s(x ̄)1 in the dynamics of the error, one has
V ̇ (e) = e⊤As(x) − e⊤D (x − x ̄1 + x ̄1)
= e⊤A (s(x) − s(x ̄)1 + s(x ̄)1) − e⊤De
= e⊤A (s(x) − s(x ̄)1) − e⊤De.
The Lipschitz condition of s implies |s(xi)−s(x ̄)| ≤ K|xi− x ̄| = K|ei|, for all i ∈ {1, . . . , N }. This allows us to write:
s(x) − s(x ̄)1 = KΘe.
where Θ = diag(θ1, . . . , θN ) is a diagonal matrix with statedependent entries satisfying θi = (s(xi) − s(x ̄))/K(xi − x ̄) = (s(xi) − s(x ̄))/Kei for ei ̸= 0 and θi = 1 for ei = 0. Note that 0 ≤ θi ≤ 1.
Substituting this into the expression for V ̇ yields:
V ̇ (e) = Ke⊤AΘe − e⊤De.
Let us perform a change of coordinates, e ̃ = D1/2e. The expression for V ̇ becomes:
V ̇ (e) = Ke ̃⊤A ̃Θe ̃ − ∥e ̃∥2
2.
where A ̃ = D−1/2AD−1/2 is the normalized adjacency matrix. As in proof of Theorem 3, A ̃ is similar to D−1A, therefore, they share the same eigenvalues λ1, . . . , λN . In the transformed coordinates, the normalized eigenvector of A ̃ for λN = 1 is v ̃N = D1/21. The transformed error vector e ̃ is orthogonal to v ̃N :
e ̃⊤v ̃N = (D1/2e)⊤D1/21 = e⊤D1 = 0.
Thus, e ̃ lies in the subspace spanned by the eigenvectors {v ̃1, . . . , v ̃N−1} of A ̃, which are orthogonal to v ̃N .
We now bound the quadratic form by applying the CauchySchwarz inequality:
e ̃⊤A ̃Θe ̃ = (A ̃e ̃)⊤(Θe ̃) ≤ ∥A ̃e ̃∥2∥Θe ̃∥2.
Let us bound the two norms separately. Since Θ is a diagonal matrix with entries |θi| ≤ 1, its induced 2-norm satisfies ∥Θ∥2 = maxi |θi| ≤ 1. Thus, ∥Θe ̃∥2 ≤ ∥e ̃∥2.
For ∥A ̃e ̃∥2, we use the spectral decomposition of A ̃ since it is symmetric. Let {v ̃i}N
i=1 be an orthonormal basis of
eigenvectors for A ̃. As established, e ̃ has no component along vN , so it can be written as e ̃ = PN−1
i=1 civ ̃i, where ci = e ̃⊤v ̃i. Then,
∥A ̃e ̃∥2 =
N −1
X
i=1
ciλiv ̃i 2
≤ max
j∈{1,...,N −1}
|λj |∥e ̃∥2 .
Combining these two bounds, we get:
e ̃⊤A ̃Θe ̃ ≤ max
i∈{1,...,N −1}
|λi| ∥e ̃∥2
2.
Substituting this back into the expression for V ̇ (e):
V ̇ (e) ≤ K max
i∈{1,...,N −1}
|λi| ∥e ̃∥2
2 − ∥e ̃∥2
2
= 2 K max
i∈{1,...,N −1}
|λi| − 1 V (e) = −2αV (e),
since ∥e ̃∥22 = 2V (e) and α = K maxi∈{1,...,N−1} |λi| − 1 > 0 by the condition of the theorem. By Gro ̈nwall’s inequality, we have:
V (e(t)) ≤ V (e(0))e−2αt ⇔ ∥e(t)∥D ≤ ∥e(0)∥De−αt.
This shows that V (e(t)) → 0 exponentially, which implies ∥e(t)∥D → 0 exponentially. Since the graph is connected, D is positive definite, and the norm ∥ · ∥D is equivalent to any other vector norm on RN . Thus, the manifold S (where e = 0) is globally exponentially stable.
VI. INPUT-TO-STATE STABILITY OF SYNCHRONIZED CLUSTERS
Having established the sharp conditions for full synchronization, we turn to the equally important and arguably more common phenomenon of local synchronization, or clustering. In many complex networks, from biological systems to social organizations, global consensus is neither the goal nor the outcome. Instead, these systems self-organize into distinct and coherent clusters that perform specialized tasks while maintaining a persistent, structured disagreement with one another. This raises a natur-
al question: why do such clusters maintain their internal cohesion when they are perpetually influenced by the rest of the network?
A. Preliminaries on Input-to-State Stability
This section analyzes the stability of these clusters through the lens of Input-to-State Stability. We model the disagreement within a cluster as the system state and the influence from the rest of the network as a persistent external input. Our main result demonstrates that if a cluster possesses sufficient internal cohesion, its internal disagreement is bounded and robust to

12
these external influences. Crucially, we show that this bound depends not on the total magnitude of the external influence, but on its heterogeneity across the cluster’s nodes. To build on this argument, we begin by recalling its formal definition.
Definition 3 (Input-to-State Stable (ISS)): Consider a nonlinear system described by the differential equation
x ̇ (t) = f (x(t), u(t)),
where x(t) ∈ Rn is the state vector and u(t) ∈ Rm is the input vector. Let x(t) denote the solution starting from the initial state x(0) = x0 under the input u(t). The system is said to be Input-to-State Stable (ISS) if there exist functions γ : [0, ∞) → [0, ∞) and β : [0, ∞)×[0, ∞) → [0, ∞) such that:
i) γ is a K function. i.e., it is continuous, strictly increasing, and γ(0) = 0.
ii) β is a KL function. i.e., for any fixed t ≥ 0, β(·, t) is a K function, and for any fixed r > 0, β(r, t) is decreasing with respect to t and limt→∞ β(r, t) = 0.
And for any initial state x0 ∈ Rn and any bounded measurable input u : [0, ∞) → Rm, the solution x(t) exists for all t ≥ 0 and satisfies the inequality:
∥x(t)∥ ≤ β(∥x0∥ , t) + γ sup
0≤τ ≤t
∥u(τ )∥ , for all t ≥ 0.
Remark 4: The ISS inequality captures two key properties. First, with zero input (u(t) ≡ 0), the system is globally asymptotically stable. Second, with a bounded input, the state is guaranteed to remain ultimately bounded. For finitedimensional systems, this property holds irrespective of the chosen norm.
B. ISS Analysis of Internal Cluster Disagreement
We now apply this framework to analyze the dynamics within a connected subgraph G′ = (V′, E′) that contains N ′ nodes. Our goal is to express the dynamics of the cluster V′ in the form of an ISS system, where the “state” is the internal disagreement within the cluster and the “input” is the influence from the rest of the network. i.e., from the node in V \ V′.
Let S ∈ RN′×N be the selection matrix that maps the full state vector x to the subgraph state vector x′ := Sx. Specifically, for j ∈ V′, Sij = 1 for its corresponding index i ∈ V and 0 otherwise. Note that SS⊤ = IN′ and S⊤S = diag(IV′ ), where IV′ ∈ RN is the indicator vector of V′ ⊆ V. i.e., [IV′ ]i = 1 if node i ∈ V is in V′ and 0 otherwise. Applying this to the system dynamics (2) yields:
x ̇ ′ = SD−1As(x) − x′. (7)
We can decompose the term As(x) based on the subgraph structure. Let Ain = SAS⊤ ∈ RN×N be the adjacency matrix of the induced subgraph G′. Let Aext be the matrix representing connections between V′ and V \ V′. Then, for the nodes in V′, the input from the network can be split into an internal and an external part:
SAs(x) = Ains(x′) + SAexts(x).
Let us define the following: • Din = diag(din
i )i∈V′ , where din
i =P
j∈V′ aij , is the
diagonal matrix of internal degrees for nodes in G′.
•
De in = SDS⊤ ∈ RN′×N′ is the diagonal matrix containing the total degrees di for nodes i ∈ V′ in the original graph G. Note that De −1
in = SD−1S⊤. Since
S⊤S is diagonal and SS⊤ = IN′ , one has De −1
in S =
SD−1S⊤S = SS⊤SD−1 = SD−1.
Substituting these definitions into (7) and rearranging allows us to express the dynamics as an ideal internal system plus two distinct perturbation terms:
x ̇ ′ = D−1
in Ains(x′) − x′
+
De −1
in − D−1
in Ains(x′) + De −1
in SAexts(x)
:= D−1
in Ains(x′) − x′
| {z }
Ideal Internal Dynamics
+ p(x).
| {z }
Total Perturbation
(8)
The total perturbation p(x) originates from two sources: • External Perturbation: Influence from neighbors outside the cluster, given by De −1
in SAexts(x).
• Internal Perturbation: A more subtle effect arising from the mismatch between a node’s total degree and its internal degree, given by De −1
in − D−1
in Ains(x′).
A key insight of consensus dynamics is that the system’s internal disagreement is insensitive to any uniform perturbation that pushes all nodes in the cluster equally. The component of the perturbation that drives disagreement is its non-uniform part. We therefore define the residual perturbation as the component of p(x) that is orthogonal to the fully synchronized manifold of the cluster:
p ̃(x) := p(x) − p ̄(x)1N′ ,
where p ̄(x) = (P
i∈V′ din
i [p(x)]i)/(P
i∈V′ din
i ) is the weighted average of the perturbation over the cluster. The norm of the residual perturbation,
∥p ̃(x)∥2
Din =
N′
X
i=1
din
i ([p(x)]i − p ̄(x))2,
is a weighted variance of the total perturbation’s effect on the subgraph. The closest ∥p ̃(x)∥Din is to 0, the most uniform
is the perturbation across the subgraph G′. We can define an upper bound for this norm as:
∥p ̃(x)∥Din ≤ sup
x∈X
∥p ̃(x)∥Din := P sup.
We can now state the main result of this section.
Theorem 5 (ISS of Synchronized Clusters): Consider a connected induced subgraph G′ = (V′, E′) of the graph G. Let us define αin := 1 − K maxi∈{1,...,N−1} |λi(D−1
in Ain)|.
If the internal stability condition αin > 0 holds, then the disagreement within the subgraph G′ is input-to-state stable with respect to the residual perturbation p ̃(x). Specifically, for the disagreement vector e = x′ − x ̄′1N′ , where x ̄′ = (P
i∈V′ din
i xi)/(P
i∈V′ din
i ), there exist a KL function β and a K function γ, given by
β(r, t) = re−αint and γ(r) = r
αin
,

13
such that the following ISS inequality holds for all t ≥ 0:
∥e(t)∥Din ≤ β(∥e(0)∥Din , t) + γ sup
0≤τ ≤t
∥p ̃(x(τ ))∥Din .
Moreover, the norm of the disagreement ∥e(t)∥Din is ulti
mately bounded by P sup/αin. Proof: The proof starts by considering the ISS-Lyapunov function candidate:
V (e) = 1
2 e⊤Dine = 1
2 ∥e∥2
Din .
From the dynamics in (8) and following similar steps to the proof of Theorem 4, the time derivative of V (e) along the trajectories of the system is:
V ̇ (e) = e⊤Ains(x′) − e⊤Dinx′ + e⊤Dinp(x).
The internal dynamics term is bounded as (from the proof of Theorem 4):
e⊤Ains(x′) − e⊤Dinx′ ≤ −2αinV (e).
The perturbation term e⊤Dinp(x) is analyzed by decomposing the perturbation vector p(x) into its Din-weighted average, p ̄(x)1N′ , and the residual part, p ̃(x). Thus, p(x) = p ̄(x)1N′ + p ̃(x).
Substituting this decomposition into the perturbation term yields:
e⊤Dinp(x) = e⊤Din (p ̄(x)1N′ + p ̃(x))
= p ̄(x)e⊤Din1N′ + e⊤Dinp ̃(x) = e⊤Dinp ̃(x).
Since e⊤Din1N′ = 0 by definition of the weighted average x ̄′, the first term vanishes (as established in proof of Theorem 4). Using the Cauchy-Schwarz inequality for the Din-weighted inner product ⟨u, v⟩Din = u⊤Dinv:
e⊤Dinp ̃(x) = ⟨e, p ̃(x)⟩Din ≤ ∥e∥Din ∥p ̃(x)∥Din .
Combining these, the differential inequality for V (e) becomes:
V ̇ (e) ≤ −2αinV (e) + ∥e∥Din ∥p ̃(x(t))∥Din .
Let y(t) = ∥e(t)∥Din . Then V (e(t)) = 1
2 y(t)2 and its
time derivative is V ̇ (t) = y(t)y ̇(t). Substituting these into the inequality gives:
y(t)y ̇(t) ≤ −αiny(t)2 + y(t) ∥p ̃(x(t))∥Din .
For any t where y(t) > 0, i.e., ∥e(t)∥Din > 0, we can divide by y(t):
y ̇(t) ≤ −αiny(t) + ∥p ̃(x(t))∥Din = −αiny(t) + u(t),
where u(t) = ∥p ̃(x(t))∥Din . This is a linear differential inequality y ̇(t) ≤ −αiny(t) + u(t), which also holds trivially when y(t) = 0. Applying Gronwall’s inequality, the solution is bounded by:
y(t) ≤ y(0)e−αint +
Zt
0
e−αin(t−τ )u(τ )dτ
≤ y(0)e−αint + sup
0≤τ ≤t
u(τ )
Zt
0
e−αin(t−τ )dτ
= y(0)e−αint + 1
αin
sup
0≤τ ≤t
u(τ ) (1 − e−αint).
Since (1 − e−αint) ≤ 1 for t ≥ 0, we have the simpler bound:
y(t) ≤ y(0)e−αint + 1
αin
sup
0≤τ ≤t
u(τ ).
Substituting back y(t) = ∥e(t)∥Din yields the ISS inequality:
∥e(t)∥Din ≤ ∥e(0)∥Din e−αint + 1
αin
sup
0≤τ ≤t
∥p ̃(x(τ ))∥Din .
with β(r, t) = re−αint and γ(r) = r/αin.
For the ultimate bound, taking the limit sup as t → ∞:
lim sup
t→∞
∥e(t)∥Din ≤ lim sup
t→∞
∥e(0)∥Din e−αint+
1
αin
sup
0≤τ ≤t
∥p ̃(x(τ ))∥Din .
Since αin > 0, the first term goes to zero, leaving:
lim sup
t→∞
∥e(t)∥Din ≤ 1
αin
sup
t≥0
∥p ̃(x(t))∥Din ≤ P sup
αin
.
This concludes the proof. Theorem 5 states that a sufficiently cohesive cluster can maintain its internal agreement, even when perpetually influenced by the rest of the network. The theorem formalizes this by demonstrating that the cluster’s internal disagreement is ISS. This implies that while initial disagreement within the cluster decays exponentially, persistent external influence results in a finite ultimate bound on this disagreement. Thus, Theorem 5 provides a tool for analyzing the stabili-
ty of NFSE, interpreting the network as an interconnection of robust and internally stable clusters. An important consequence of this framework is the identification of variance (or non-uniformity) of the external perturbation being the true cause of internal disagreement. A uniform influence, regardless of its magnitude, would not prevent the cluster from achieving perfect internal consensus asymptotically. It is therefore the heterogeneity of external signals, which causes boundary nodes to be p-
ulled in different directions, that fundamentally limits local synchronization. This explains the clustering obtained in [26], where a uniform environmental signal becomes an effectively non-uniform perturbation due to heterogeneous agent gains, sustaining disagreement as our framework predicts.
Remark 5 (A Unifying Principle of Stability): The condition for a cluster’s internal stability, αin > 0, is structurally identical to the condition for global exponential stability in Theorem 4. This reveals a scale-free principle: a group of agents, whether the entire network or a single cluster, maintains cohesion if its internal connectivity is strong enough to overcome the maximal destabilizing effect of the nonlinearity, a principle elegantly quantified by the eigenvalues of the relevant subg-
raph dynamics.
Remark 6 (A Practical Bound on Perturbation): The ultimate bound on disagreement depends on the maximum residual perturbation, P sup. This term can be bounded by the structural properties of the cluster’s boundary:
P sup ≤ 2
X
i∈V ′
din
i
dext
i di
2
,

14
Community 1 Community 2
−1.00
−0.75
−0.50
−0.25
0.00
0.25
0.50
0.75
1.00
State
(a) Final equilibrium state of the network. Node shapes (triangle/square) indicate the two strong communities: V1 and V2. The communities were obtained using [7]. Node colors represent the final
state value x∗
i , demonstrating local synchronization within clusters but global disagreement between them.
0
2
4
Disagreement
Community 1
‖e1(t)‖D1 ‖p̃1(x(t))‖D1
10−1 100 101 102 Time (t)
0
1
2
3
4
Disagreement
Community 2
‖e2(t)‖D2 ‖p̃2(x(t))‖D2
0
2
4
Residual Perturbation
0
1
2
3
4
Residual Perturbation
(b) ISS analysis for each community. For k ∈ {1, 2}, the internal disagreement ∥ek(t)∥Dk (the ISS “state” in red) decays exponen
tially from its initial condition and converges to a non-zero ultimate bound. This bound is sustained by the persistent residual perturbation ∥p ̃k(x(t))∥Dk from the opposing cluster (the ISS “input” in blue),
precisely as predicted by Theorem 5.
Fig. 5: Numerical validation of the ISS framework on Zachary’s Karate Club network, a canonical example of a social network with a strong, empirically verified community structure. The simulation uses a signal function s(x) = max(−1, min(1, Kx)) (with K = 1.2) chosen to violate the threshold for full synchronization (KλN−1 > 1), forcing the emergence of a stable, clustered equilibrium (NFSE).
where dext
i = di − din
i is the number of external connections
for node i ∈ V′. This provides a concrete, computable upper bound on the asymptotic synchronization error within a cluster, based entirely on the network topology.
C. Numerical Illustration: Robust Clustering in the Karate Club Network
To demonstrate our theoretical framework in action, we apply it to Zachary’s Karate Club network [27]. As detailed in the caption of Figure 5, the simulation parameters are chosen specifically to violate the conditions for full synchronization, creating an environment where clustering is the expected outcome.
As predicted by our analysis, the network forgoes global consensus and instead converges to a stable NFSE. The final state of the network, visualized in Figure 5a, shows a clear partitioning of agents’ opinions. The states align perfectly with the two ground-truth communities, forming two internally synchronized but mutually opposed clusters. This outcome confirms that, when the sharp threshold is crossed, the system can transition into a state of structured, local agreement. This clustered equili-
brium provides a perfect setting for validating the core predictions of our ISS analysis. In Figure 5b, we treat each community as a subsystem and plot the time evolution of its internal disagreement (the ISS “state”) and the residual perturbation it receives from the opposing cluster (the ISS “input”). The resulting dynamics are a standard illustration of Input-to-State Stability: • The internal disagreement (red curve) exponentially decays from its initial value, demonstrating the cluster’s inte-
rnal stability (αin > 0). • However, the disagreement does not converge to zero. It is sustained by the persistent, non-uniform perturbation from the other cluster (blue curve), settling to a non-zero ultimate bound. This behavior, of exponential decay to a non-zero bound sustained by a persistent input, is precisely the outcome guaranteed by the ISS inequality in Theorem 5. The simulation thus provides a concrete validation of our theoretical results.
VII. CONCLUSION
This work established a comprehensive theory for the emergence and stability of synchronized states in multi-agent systems with general nonlinear interactions. We demonstrated that the transition from global consensus to robust, localized clustering is governed by a sharp threshold, KλN−1 < 1, that unifies the interplay between agent nonlinearity and network connectivity. By introducing a novel framework based on Input-to-State Stability, we moved beyond analyzing the existence of these clustered -
states to formally quantifying their robustness. This analysis yielded a practical insight: the cohesion of a synchronized cluster is fundamentally limited not by the magnitude, but by the heterogeneity of external network perturbations. These findings provide both a predictive design principle and a formal methodology for analyzing modularity in complex networks, opening several compelling avenues for future research. An immediate next step is to deepen the analysis of the clusters themselves, mo-
ving beyond internal cohesion to performance guarantees such as robust reference tracking and state containment.
APPENDIX
A. Proof of Lemma 2
Proof: The fixed points of s are the zeros of the continuous function g(x) := s(x) − x such that g(−1) ≥ 0 and g(1) ≤ 0. By the Intermediate Value Theorem, Fix(s), is a non-empty closed subset of [−1, 1]. If Fix(s) contains an interval, any point in its interior is trivially a stable fixed point. We therefore assume that Fix(s) consists only of isolated points. As a

15
compact set, Fix(s) must be finite. Let the fixed points be ordered as Fix(s) = {c1, c2, . . . , cM }, where −1 ≤ c1 < · · · < cM ≤ 1. The following handle cases of signal functions similar to the one in Figure 2b. We proceed by contradiction, assuming that all fixed points ci are unstable. i.e., there exists an x such that (x − ci)g(x) > 0. Consider the smallest fixed point, c1. On [−1, c1), if nonempty, g(x) must be positive since g(−1) ≥ 0. For any x in this interval, (x − c1)g(x) < 0, so the s-
tability condition is satisfied to the left of c1. For c1 to be unstable, the violation must occur on its right, which requires g(x) > 0 for x in some interval (c1, c1 + δ). By continuity, this implies g(x) > 0 for all x ∈ (c1, c2). By induction, g(x) > 0 on every interval (ci, ci+1) for i = 1, . . . , M − 1.
Finally, we examine the largest fixed point, cM . Using the induction result, g(x) > 0 on (cM−1, cM ), which implies that the stability condition (x − cM )g(x) ≤ 0 holds on the left of cM . Since cM is assumed to be unstable, there must be a violation to its right, in the interval (cM , 1]. This requires g(x) > 0 for some x ∈ (cM , 1]. If cM = 1, the interval (cM , 1] is empty, so no violation can occur, contradicting our assumption. If cM < 1, by continuity, g(1) = limx→1− g(x) ≥ 0. But we know g-
(1) ≤ 0. Thus, g(1) = 0, which means that 1 is a fixed point, contradicting cM being the largest fixed point. In all cases, the assumption that all fixed points are unstable is absurd. Therefore, at least one stable fixed point exists.
B. Proof of Proposition 4-(ii)
Proof: (ii) Assume KλN−1 > 1. Under Assumption 1, one has λN−1 < 1, which implies K > 1/λN−1 > 1. We proceed by contradiction. Assume that for any signal function s satisfying Assumption 2 with Lipschitz constant K, all equilibria of (2) are FSE. We construct a specific signal function s that satisfies these conditions yet leads to a contradiction. Let s : [−1, 1] → [−1, 1] be a smooth, strictly increasing, and odd function such that s′(0) = K. An example of such a function can be constructed base-
d on s(x) = tanh(Kx) illustrated in Figure 2a. Since s is odd and strictly increasing with s′(0) = K > 1, its fixed points are Fix(s) = {−c, 0, c} for some c ∈ (0, 1]. By Theorem 1, the FSE x∗−c = −c1 and xc∗ = c1 are locally asymptotically stable, while the FSE 0 is unstable. Since s is strictly increasing and smooth, by Lemma 3, every trajectory must converge to one of the three FSE: −c1, 0, or c1. This implies a partition of the state space X into the basins of attraction of these three equilib-
ria:
X = B(−c1) ∪ B(0) ∪ B(c1).
The basins B(−c1) and B(c1) are non-empty, disjoint open sets. As the vector field f (x) = D−1As(x) − x is odd due to the oddness of s, the flow is symmetric with respect to the origin, implying B(−c1) = −B(c1), as observed on the restriction to S in Figure 2a. Consequently, their common boundary, the separatrix, is a single set ∂B(c1) = ∂B(−c1). We now apply [23, Theorem 4.8] to characterize this separatrix. We must verify its assumptions: (A1) Hyperbolicity: The equilibrium points on the boundar-
y ∂B(c1) must be hyperbolic.
(A2) Transversality: The stable and unstable manifolds of equilibrium points on the stability boundary satisfy the transversality condition. (A3) Boundary Convergence: Every trajectory on ∂B(c1) must approach one of the equilibrium points on the boundary.
Assumption (A2) can be satisfied by a smooth choice of s, as s(x) = tanh(Kx). To verify (A1) and (A3), we first identify the equilibria on the boundary. Let y ∈ ∂B(c1). Since the boundary of an invariant set is itself invariant, the trajectory y(t) remains in ∂B(c1). As all trajectories converge to an equilibrium, y(t) must converge to one of {−c1, 0, c1}. It cannot converge to c1 (as y would be in the interior of the basin) or −c1 (as the basins are disjoint). Thus, any trajectory on the boundary-
 must converge to 0. This implies that 0 is the only equilibrium point on the boundary ∂B(c1), satisfying (A3). The Jacobian at the origin is J (0) = s′(0)D−1A − I = KD−1A−I. Its eigenvalues are Kλi −1, which are non-zero for a generic choice of K, satisfying (A1). With the assumptions verified, [23, Theorem 4.8 (b)] yields: ∂B(c1) = W s(0), where W s(0) is the stable manifold of 0. This leads to a topological contradiction based on dimensionality. The set ∂B(c1) is the boundary separating two ope-
n sets in the N -dimensional space X , and thus it must be an (N −1)-dimensional manifold. However, the dimension of the stable manifold W s(0) is equal to the number of eigenvalues of J (0) with negative real parts. The eigenvalues are νi = Kλi − 1 for i = 1, . . . , N . By assumption, KλN−1 > 1. We also know λN = 1, and since K > 1/λN−1 > 1, we have:
• νN = KλN − 1 = K − 1 > 0. • νN−1 = KλN−1 − 1 > 0.
Thus, at least two eigenvalues of J (0) have positive real parts. The dimension of the unstable manifold, dim(W u(0)), is therefore at least 2. Consequently, the dimension of the stable manifold is dim(W s(0)) = N −dim(W u(0)) ≤ N −2. We then have a contradiction: a manifold of dimension at most N − 2 cannot separate an N -dimensional space. i.e., N − 1 = dim(∂B(c1)) = dim(W s(0)) ≤ N − 2. This contradiction implies that our initial assumption was false. Therefore, for our constructed function s, -
there must exist at least one equilibrium that is not an FSE. This completes the proof.
REFERENCES
[1] R. Olfati-Saber, J. A. Fax, and R. M. Murray, “Consensus and Cooperation in Networked Multi-Agent Systems,” Proceedings of the IEEE, vol. 95, no. 1, pp. 215–233, Jan. 2007. [2] A. Jadbabaie, J. Lin, and A. Morse, “Coordination of groups of mobile autonomous agents using nearest neighbor rules,” IEEE Trans. on Automatic Control, vol. 48, no. 6, pp. 988–1001, June 2003. [3] W. Ren and R. W. Beard, “Consensus seeking in multiagent systems under dynamically changing interaction topologies,” IEEE T-
rans. on Automatic Control, vol. 50, no. 5, pp. 655–661, 2005. [4] V. Blondel, J. Hendrickx, et al., “Convergence in Multiagent Coordination, Consensus, and Flocking,” in Proceedings of the 44th IEEE Conference on Decision and Control. Seville, Spain: IEEE, 2005, pp. 2996–3000. [5] G. Deffuant, D. Neau, et al., “Mixing beliefs among interacting agents,” Advances in Complex Systems, vol. 03, no. 01n04, pp. 87–98, Jan. 2000. [6] R. Hegselmann and U. Krause, “Opinion dynamics and bounded confidence m-
odels, analysis, and simulation,” Journal of Artificial Societies and Social Simulation, vol. 5, no. 3, 2002.

16
[7] I.-C. Mora ̆rescu and A. Girard, “Opinion dynamics with decaying confidence: Application to community detection in graphs,” IEEE Trans. on Automatic Control, vol. 56, no. 8, pp. 1862 – 1873, 2011. [8] C. Altafini, “Consensus Problems on Networks With Antagonistic Interactions,” IEEE Trans. on Automatic Control, vol. 58, no. 4, pp. 935–946, Apr. 2013. [9] J. M. Hendrickx, “A lifting approach to models of opinion dynamics with antagonisms,” in 53rd IEEE Conference on Decision and Control. Los An-
geles, CA, USA: IEEE, Dec. 2014, pp. 2118–2123. [10] A. C. R. Martins, “Continuous opinions and discrete actions in opinion dynamics problems,” International Journal of Modern Physics C, vol. 19, no. 4, pp. 617–625, 2008. [11] N. R. Chowdhury, I.-C. Mora ̆rescu, et al., “Continuous opinions and discrete actions in social networks: A multi-agent system approach,” in 2016 IEEE 55th Conference on Decision and Control (CDC), Dec. 2016, pp. 1739–1744. [12] F. Ceragioli and P. Frasca, “Consensus and Dis-
agreement: The Role of Quantized Behaviors in Opinion Dynamics,” SIAM Journal on Control and Optimization, vol. 56, no. 2, pp. 1058–1080, Jan. 2018. [13] R. Gray, A. Franci, et al., “Multiagent Decision-Making Dynamics Inspired by Honeybees,” IEEE Trans. on Control of Network Systems, vol. 5, no. 2, pp. 793–806, 2018. [14] A. Bizyaeva, A. Franci, and N. E. Leonard, “Nonlinear Opinion Dynamics With Tunable Sensitivity,” IEEE Trans. on Automatic Control, vol. 68, no. 3, pp. 1415–1430, 2023. [15] F. -
Baumann, P. Lorenz-Spreen, et al., “Modeling Echo Chambers and Polarization Dynamics in Social Networks,” Phys. Rev. Lett., vol. 124, no. 4, p. 048301, Jan. 2020. [16] A. Fontan and C. Altafini, “Multiequilibria analysis for a class of collective decision-making networked systems,” IEEE Trans. on Control of Network Systems, vol. 5, no. 4, pp. 1931–1940, 2018. [17] F. Bullo, Lectures on Network Systems. North Charleston, South Carolina: CreateSpace, 2018. [18] M. Hirsch and H. Smith, “Chapter 4 Mon-
otone Dynamical Systems,” in Handbook of Differential Equations: Ordinary Differential Equations. Elsevier, 2006, vol. 2, pp. 239–357. [19] A. Couthures, V. S. Varma, et al., “Global synchronization of multi-agent systems with nonlinear interactions,” IEEE Control Systems Letters, vol. 9, pp. 354–359, 2025. [20] M. W. Hirsch, “The dynamical systems approach to differential equations,” Bulletin (New Series) of the American Mathematical Society, vol. 11, no. 1, pp. 1–64, 1984.
[21] H. L. Smith, Monotone Dynamical Systems: An Introduction to the Theory of Competitive and Cooperative Systems, ser. Mathematical Surveys and Monographs 41. American Mathematical Society, 2008. [22] F. Blanchini, “Set invariance in control,” Automatica, vol. 35, no. 11, pp. 1747–1767, 1999. [23] H.-D. Chiang and L. F. C. Alberto, Stability Regions of Nonlinear Dynamical Systems: Theory, Estimation, and Applications, 1st ed. Cambridge University Press, 2015. [24] H. K. Khalil, Nonlinear Systems-
. Upper Saddle River, N.J.: Prentice Hall, 2002. [25] R. A. Horn and C. R. Johnson, Matrix Analysis. New York, NY: Cambridge University Press, 2017. [26] A. Couthures, V. Satheeskumar Varma, et al., “Analysis of an opinion dynamics model coupled with an external environmental dynamics,” Chaos, Solitons & Fractals, vol. 189, p. 115719, 2024.
[27] W. W. Zachary, “An Information Flow Model for Conflict and Fission in Small Groups,” Journal of Anthropological Research, vol. 33, no. 4, pp. 452–473, 1977.
Anthony Couthures received the B.S. degree in fundamental mathematics from the University of Sciences and Technologies, Bordeaux, France, in 2017, the M.S. degree in Research Mathematics on Analysis, Modeling, Simulation in 2021, and the M.S degree in Optimization in 2022 from the University of Paris-Saclay, Orsay, France. He is currently a Ph.D. student at Universit  ́e de Lorraine in CRAN, CNRS in Nancy, France. His research interests include modeling and analysis of nonlinear multi-agent system-
s coupled with the environment using game theory, control, and optimization.
Gustave Bainier received an Engineering Master’s degree from  ́Ecole Centrale Nantes, France, in 2020, and a Ph.D. degree in Automatic Control from Universite ́ de Lorraine, France, in 2024. His doctoral research, carried out at CRAN, CNRS in Nancy, France, under the supervision of J.-C. Ponsart and B. Marx, focused on theoretical developments in the Linear Parameter Varying (LPV) and Takagi–Sugeno (TS) control frameworks, with applications to fault diagnosis. He is currently a Post-Doctoral Resea-
rcher with the Neuroengineering Laboratory at University of Li `ege, Belgium, where his research explores applications of control theory to brain-inspired computing. His research interests include LPV and TS systems, stability analysis, fault diagnosis, and neuroengineering.
Vineeth S. Varma obtained his Bachelor’s in Physics with Honors from Chennai Mathematical Institute, India in 2008, his dual Masters in Science and Technology from Friedrich-SchillerUniversity of Jena in 2009 and Warsaw University of Technology in 2010. He was awarded his PhD from LSS/Paris-Saclay on energy-efficient wireless telecommunications. He did one year of post-doctoral research at Singapore University of Technology and Design from 2014-2015. Since 2016, he has been a CNRS researcher with -
CRAN, in Nancy, France, and got his HDR in 2024. His areas of interest are analysis, control, and games over various networks.
Samson Lasaulce is a CNRS Research Director with CRAN at Nancy. From 2023 to 2025, he has been a Chief Research Scientist with Khalifa University (Abu Dhabi), where he has been the holder of the TII 6G Chair on Native AI. From 2016 to 2019, he was the holder of the RTE CentraleSupelec Chair on the ”Digital Transformation of Electricity Networks”. From 2002 to 2014, he was also a part-time Professor with the Department of Physics at  ́Ecole Polytechnique (France). Before joining CNRS he had been wo-
rking for five years in private R&D research centers (Motorola Labs and Orange Labs). His current research interests lie in distributed networks with a focus on optimization, machine learning, game theory, and optimal control. Dr Lasaulce has been serving as an editor for several international journals such as the IEEE Transactions. He is the co-author of more than 220 publications, including 15 patents and 5 books. Dr Lasaulce is also the recipient of several awards from the IEEE society and the -
Blondel Medal award from the SEE French society.
Irinel-Constantin Mora ̆ rescu is currently Full Professor at Universit  ́e de Lorraine and researcher with CRAN, CNRS in Nancy, France. He holds a Ph.D. in Mathematics and a Ph.D. in Technology of Information and Systems (received in 2006 from the University of Bucharest and the University of Technology of Compie` gne, respectively), and received his ”Habilitation a` Diriger des Recherches” from the Universite ́ de Lorraine in 2016. His works mainly focus on stability and tracking for different c-
lasses of hybrid systems, consensus and synchronization problems. He currently serves as a Senior Editor for IEEE Control Systems Letters and he served as Associate Editor for Nonlinear Analysis: Hybrid Systems, IEEE Control Systems Letters, and IMA Journal of Mathematical Control and Information. He was a member of the CSS Conference Editorial Board, and he is a member of the IFAC Technical Committee on Networked Systems.

---

## Processing Information

- **Processing Library:** Zotero PDFWorker
- **Processing Date:** 2026-02-10T18:14:19.995Z
- **Text Length:** 91011 characters
- **Success:** Text extraction completed
- **PDF Library Used:** Zotero PDFWorker
- **Pages Processed:** 16 of 16
