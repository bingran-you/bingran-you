# PDF Document: Gao et al. - 2025 - Active Secure Neighbor Selection in Multi-Agent Systems with Byzantine Attacks.pdf

**File Path:** Gao et al. - 2025 - Active Secure Neighbor Selection in Multi-Agent Systems with Byzantine Attacks.pdf

**Processed Date:** 2026-02-10T18:17:24.485Z

**File Size:** 463.35 KB

**Total Pages:** 11

**Extracted Pages:** 11

**PDF Library:** Zotero PDFWorker

**Attachment Item ID:** 3286

**Title:** Active Secure Neighbor Selection in Multi-Agent Systems with Byzantine Attacks

**Collection:** Large Files > Random Papers

---

## Extracted Text Content

1
Active Secure Neighbor Selection in Multi-Agent Systems with Byzantine Attacks
Jinming Gao, Yijing Wang, Wentao Zhang, Member, IEEE, Rui Zhao, Member, IEEE, Yang Shi, Fellow, IEEE, and Zhiqiang Zuo, Senior Member, IEEE
Abstract— This paper investigates the problem of resilient control for multi-agent systems in the presence of Byzantine adversaries via an active secure neighbor selection framework. A pre-discriminative graph is first constructed to characterize the admissible set of candidate neighbors for each agent. Based on this graph, a dynamic in-neighbor selection strategy is proposed, wherein each agent actively selects a subset of its pre-discriminative neighbors. The number of selected neighbors is adju-
stable, allowing for a trade-off between communication overhead and robustness, with the minimal case requiring only a single in-neighbor. The proposed strategy facilitates the reconstruction of a directed spanning tree among normal agents following the detection and isolation of Byzantine agents. It achieves resilient consensus without imposing any assumptions on the initial connectivity among normal agents. Moreover, the approach significantly reduces communication burden while maintaining resil-
ience to adversarial behavior. A numerical example is provided to illustrate the effectiveness of the proposed method.
Index Terms— Multi-agent systems, security, Byzantine attacks, active secure neighbor selection.
I. INTRODUCTION
Significant progress in cyber-physical systems (CPSs) has been driven by advances in communication and computing technologies [1], [2]. However, the open setting in cyber space poses security challenges for real-world deployments, as exemplified by the 2010 Stuxnet attack on Iran’s nuclear facilities [3] and the 2014 Havex instrusion that disabled hydropower dams over SCADA networks [4]. Given the high security vulnerability of CPSs, resilient defense mechanisms are paramount for ensuring normal s-
ystem operation. Substantial research has focused on attack detection and identification [5], [6], while recent efforts increasingly emphasize attack mitigation [7]. For
This work was supported by the National Natural Science Foundation of China No. 62173243. J. Gao, Y. Wang, and Z. Zuo are with the Tianjin Key Laboratory of Intelligent Unmanned Swarm Technology and System, School of Electrical and Information Engineering, Tianjin University, 300072, P. R. China. (e-mail: gjinming@tju.edu.cn; yjwang@tju.edu.cn; zqzuo@tju.edu.cn) R. Zhao is with the Department of Electrical Engineering, City University of Hong Kong, Hong Kong SAR, China. (e-mail: ruizhao@tju.edu.cn-
, ruzhao@cityu.edu.hk) W. Zhang was with Continental-NTU Corporate Lab, Nanyang Technological University, 639798, Singapore, and will join the School of Robotics, Hunan University, Changsha 410082, China (e-mail: wtzhangee@tju.edu.cn, wentao.zhang@ntu.edu.sg) Y. Shi is with the Department of Mechanical Engineering, University of Victoria, Victoria, BC V8W 2Y2, Canada. (e-mail: yshi@uvic.ca)
example, [8] proposed an active switching approach to defend against denial of service attacks. To ensure resilient control in distributed systems, redundancy-based schemes have been developed by leveraging their structural characteristics [7]. In this way, redundant security components will be used, such as sensors [9] or communication links [10], to achieve security estimation or resilient control. Multi-agent systems (MASs), as a prominent class of CPSs, have received enormous attention owing t-
o their widespread applications [11], [12]. Unlike the centralized systems, MASs comprise multiple autonomous agents that can be sparsely distributed and easily scaled. The applications include intelligent traffic systems [13], smart grid systems [14] and multi-sensor networks [15]. Yet, due to their scalability and complexity restrictions, MASs are intrinsically more susceptible to adversarial manipulation than centralized systems [16], [17]. Guaranteeing resilient consensus under such conditions-
 is therefore a pressing challenge. The existing work on implementing resilient consensus mainly falls into two categories: detectorbased approaches and mean-subsequence-reduced (MSR) algorithms. The first one originates from the diagnosis mechanism, which requires each agent to be equipped with a detector in order to locate and isolate malicious agents. Its essential idea is to utilize the interaction outcoming among neighboring agents. Representative schemes include reputation-based detector [18-
] to expose Byzantine agents, consensus-driven filters to discard compromised data [19], and two-hop information protocols to suppress the intrusion of attacks and restore synchronization [20], [21]. In MSR algorithms, every benign agent discards extreme values from its neighboring agents before the state is updated, under the assumption that the number of adversaries does not exceed a known bound [10], [22], [23]. Specifically, each normal agent removes all potential outliers in accordance with t-
he network’s robustness constraints [24]. Furthermore, MSR algorithms have been extended to resilient convex-optimization problems via integer programming [25]. The problem of resilient formation control for multiple robots has also been investigated in [26]. It is worth emphasizing that the MSR algorithms are convenient for practical operation and can be fully distributed. Both paradigms, however, hinge on abundant communication among normal agents. For the detector-based defense approaches, most-
 of them require that, after
arXiv:2511.19522v1 [eess.SY] 24 Nov 2025

2
isolating malicious agents, the remaining benign agents stay connected within the original communication graph [21], [27]. This progress simultaneously creates severe vulnerabilities because an attacker with access to the global communication topology can deliberately target critical agents, thereby disrupting connectivity. For MSR algorithms, the concept of graph robustness has been presented to enhance graph resilience for the purpose of avoiding the aforementioned drawbacks [10], [22], [28]. It-
 should be pointed out that the lack of detectors can easily cause false isolation of normal ones, resulting in unnecessary losses and default of critical information. At the same time, it also increases the occupation of communication resources due to the edge-redundancy based defense framework. Actually, given the potentially high cost of communications in various applications, it is crucial to investigate how to achieve resilience while minimizing communication [7]. In other words, this work pr-
ovides some guidelines for maintaining secure operation under low communication resources.
Motivated by the above discussions, two persisting limitations are recognized: (i) the stringent network connectivity requirements imposed on normal agents, and (ii) the excessive communication overhead inherent in redundancy-based defenses. To address both challenges, we propose an active secure neighbor selection (ASNS) strategy to achieve resilient consensus for MASs subject to Byzantine attacks. While this work is partially inspired by [29], it is worth noting that the method in [29] neither c-
onsiders security issues nor provides defense mechanisms. Therefore, an active neighbor selection mechanism under adversarial conditions should be considered. The crux of the challenge lies in achieving network connectivity among normal agents through local neighbor selection rules while eliminating the influence of attacks. Because connectivity quantifies how components stay interoperable, it is normally measured using metrics including vertex/edge connectivity [30] and graph robustness [24], etc-
. The contributions of this paper can be summarized as follows:
1) By exploiting a pre-discriminative graph, the proposed active secure neighbor selection (ASNS) strategy guarantees resilient consensus by actively forming a directed spanning tree whenever the attack changes. Compared with [21] and [27], the proposed strategy removes the requirement for the persistentconnectivity assumption that was needed for normal agents. 2) The ASNS strategy allows for a flexible number of selected neighbors in the communication graph, which provides more possibilities to i-
mprove the performance of MASs over the MSR algorithms [10], [25]. Based on this framework, minimum resilient communication with reduced overhead is further achieved through the selection of one in-neighbor. 3) The effectiveness of our work is validated through examples involving dynamic Byzantine attacks. On lowrobustness communication graphs, the ASNS strategy
exhibits stronger resilience than MSR algorithms [10], [25]. When network connectivity among normal agents is disrupted, it also achieves better recoverability than [21], [27] by reconstructing the topology.
The remainder of this paper is organized as follows. Section II reviews some notations and graph-theoretic preliminaries. The system description and attack model are formulated in Section III. The ASNS strategy along with its analytical guarantee is presented in Section IV. Section V provides numerical experiments that demonstrate the effectiveness of the proposed methodologies, and Section VI concludes the paper with some remarks on future research.
II. PRELIMINARIES
Define Rn as the set of n-dimensional real vectors and Rn×m the set of n × m-dimensional real matrices. Z+ denotes the set of positive integers. 1 and I represent a column vector whose entries are all 1 and an identity matrix with appropriate dimensions. diag {x} stands for a diagonal matrix with diagonal entries being the elements of vector x. |·| represents the cardinality of a set. For some positive integer r, let r ≜ {0, . . . , r}. Moreover, the i-th element of vector x is written as x(i) ∈ R-
.
Let G(k) = (E(k), V) be a directed graph with N nodes, where E(k) is the edge set and V is the node set. A directed edge (j, i) ∈ V signifies an ordered edge connection from vi to vj, where nodes vi and vj are called parent node and child node respectively. If a node has ordered paths to preserve all other nodes in the graph, it is called the rooted node. N +
i (k) and N −
i (k) are sets of in-neighbors
and out-neighbors for agent i at time k. A(k) = [aij(k)] ∈ RN×N is a weighted adjacency matrix: aij(k) ̸= 0 if j ∈
N+
i (k) and aij(k) = 0 otherwise for j ̸= i. Moreover,
aii(k) = 0. Define the Laplacian matrix of G(k) as L(k) = [lij(k)] ∈ RN×N in which lij(k) = −aij(k) (i ̸= j) and
lii(k) = ∑
j∈N +
i (k) aij(k) . Table I summarizes some other
important notations.

3
TABLE I NOTATIONS
Symbol Definition
B ̄ The set of attack-admissible agents
A ̄ The normal agent set
B(0, k) The set of Byzantine agents during [0, k]
A(0, k) The set of normal agents staying during [0, k], i.e.,V\B(0, k)
G(k) The graph of agents in V at time k
GA(k) The subgraph of agents in A(0, k) corresponding to
G(k) at time k
Gpre(k) The pre-discriminative graph at time k
GA-pre(k) The subgraph of agents in A(0, k) corresponding to
Gpre(k) at time k
LA-pre(k) The corresponding Laplacian matrix of GA-pre(k) at
time k
Ω(k) The state set of agents in A(0, k)
Ξ(k) The convex hull formed by the states in Ω(k)
III. PROBLEM FORMULATION
A. System Model
For an MAS, an attack-free agent i can be modeled as [31]:
xi (k + 1) = xi (k) + ε
∑
j∈N +
i (k)
aij (k) (xj (k) − xi (k)) ,
(1) where xi (k) ∈ Rn is the state, ε ∈ R is the step-size with
ε∈
(
0, 1
∑
j∈N +
i
aij (k)
) .
For convenience, the system (1) is rewritten as
xi (k + 1) = xi (k) − ε
∑
j ∈N ̃i (k)
lij (k) xj (k) , (2)
where N ̃i (k) = N +
i (k) ∪ {i}. Thus its augmented form
becomes x (k + 1) = (I − εL (k) ⊗ I) x (k) where x(k) = [x1⊤(k), x2⊤(k), . . . , x⊤N (k)]⊤.
In what follows, the concept of robustness is provided to characterize the connectivity of a network. Definition 1: (r-reachable and r-robustness [22]) In G = (E, V), given r ∈ Z+, a nonempty set Q0 ⊂ V is said to be r-reachable, if there exists i ∈ Q0 such that |N +
i \Q0| ≥ r
where N +
i is the set of in-neighbors of agent i. For any
two nonempty disjoint subsets Qa, Qb ⊂ V, G is r-robust if either of them is r-reachable.
B. Attack Model
This paper focuses on the Byzantine attacks [7], which is a kind of flexible attack strategies on the agent layer. It is capable of transmitting different values to different neighbors at each time k. Here the normal agent set is A ̄ and the set of attack-admissible agents is B ̄, that is, A ̄∪B ̄ = V and A ̄∩B ̄ = ∅. Let Bi(k) be the set of Byzantine agents in N +
i (k) at time k for agent i. Moreover, B(0, k) =
⋃
l∈k
(⋃
i∈V Bi (l)) represents the set of Byzantine agents
from initial time 0 to time k and A(0, k) = V\B(0, k). It is clear that A ⊆ A(0, k). Let Ω(k) be the state set of agents in A(0, k). Define Ξ(k) ≜ Conv(Ω(k)) as the convex hull formed by the states in Ω(k). If agent i is a Byzantine agent at time k, then
xa
ij (k) = fij (k) , j ∈ N −
i (k), (3)
where xa
ij (k) ∈ Rn is the state transmitted from agent i
to its neighbor j and fij (k) ∈ Rn is the attack signal. The following assumption is essential to the developments in this paper. Assumption 1: [22], [32] (F -local attack model) For each agent, there are at most F Byzantine agents in its in-neighbors. The system cannot be attacked at the initial time. Remark 1: The F -local attack model includes the F total strategy which limits the number of Byzantine agents on a global scale to F . Besides, the F -local model is more suitable for the situation -
where the number of misbehavior agents varies with network size and connectivity [22]. Actually, such attacks pose a more severe threat. To identify potential anomalies, we employ an attack detector that leverages two-hop information [20], [33], [34]. Specifically, at every time k ⩾ 1, each agent i ∈ V transmits the packet
{
xi (k) , {j, xj (k − 1)}j∈N+
i (k−1)
}
to its out-neighbors. During the detection process, for each normal agent i ∈ A(0, k), the detection strategy with respect to agent j ∈ N +
i (k) admits


xj(k) ̸= xj(k − 1) +
∑
ljh(k − 1)xh(k − 1), j ∈ Bi(k),
xj(k) = xj(k − 1) +
∑
ljh(k − 1)xh(k − 1), j ∈/ Bi(k). (4) This control protocol-based detection approach is partially inspired by [20], [22]. Definition 2: (Resilient Consensus) [35] For the Byzantine attacks, a multi-agent system is said to realize resilient consensus if limk→∞∥xi(k) − xj(k)∥ = 0, ∀ i, j ∈ A ̄. The objective of this paper is to develop an active secure neighbor selection strategy that ensures resilient consensus while relaxing the restrictions on graph connection among normal agents with low communic-
ation overhead.
IV. MAIN RESULTS
In this part, we will propose a defense framework for active secure neighbor selection. More specific, it consists of two steps: 1) construction of pre-discriminative graph, and 2) design of active secure neighbor selection strategy. These tasks will be addressed one by one.
A. Construction of Pre-discriminative Graph
In this subsection, a pre-discriminative graph is constructed to pave the way for the secure neighbor selection. To this end, we first introduce the concept of pre-discriminative graph for all agents in V. This graph specifies the range of neighbors that an agent can select from the normal ones.

4
35
9
47
26
1
8
10
(c)
35
9
47
26
1
8
10
(b)
35
9
47
26
1
8
10
(a)
Normal agent Byzantine agent Edge in pre-discriminative graph Edge in communication graph
Fig. 1. (a) G(k − 1): the communication graph corresponding to time k − 1 under attacks occurring at time k; (b) Gpre(k): the pre-discriminative graph at time k ; (c) G(k): the communication graph at time k after the ASNS strategy with G(k) ⊆ Gpre(k).
Definition 3: (Pre-discriminative Graph) For a given integer k, the pre-discriminative graph is defined as Gpre(k) ≜ (Epre(k), V), where the set Epre(k) comprises every edge through which an agent chooses normal neighbors. For each agent i ∈ V, its neighbor set in Gpre(k), termed as the candidate neighbor set, is defined as Ni-pre(k) ≜ { j ∈ V | (j, i) ∈ Epre(k) }.
Remark 2: It is noted that the actual communication topology is not Gpre(k); rather, it is a subgraph of Gpre(k), i.e., G(k) ⊆ Gpre(k), as illustrated in Figs. 1(b)-(c). Actually, the neighbor information associated with each agent in Gpre(k) reflects the reorganized range of available neighbors after the isolation strategy, providing reliable candidate agents for subsequent neighbor selection for G(k). Consequently, the selected neighbor set satisfies
N+
i (k) ⊆ Ni-pre(k). Fig. 1 depicts a ten-agent system.
When agents 4 and 8 are under attacks (see Fig. 1(a)), the pre-discriminative graph is first constructed as illustrated in Fig. 1(b). Then the communication graph is reconstructed in terms of the ASNS strategy as shown in Fig. 1(c), confirming G(k) ⊆ Gpre(k). Next, the pre-discriminative graph Gpre(k) is constructed. Specifically, the information of Bi(k) is first broadcasted to eliminate any possibility of establishing links between normal and compromised agents. Then the actual reconstruction of-
 Gpre(k) is triggered only when new Byzantine agents are detected, i.e., A(0, k) ̸= A(0, k − 1) and set k = ks where s ∈ Z+. This avoids frequent invocation of the subsequent updates to the pre-discriminative graph and communication graph, thereby reducing defense overhead. In particular, each agent i ∈ A(0, k) rebuilds undirected edges with the agents belonging to Ni-pre(0) ∩ A(0, k) for Gpre(k). In this way, the attacked agents will be isolated from the normal ones to ensure the secure candidate-
 neighbor range. Algorithm 1 summarizes the specific steps. Through the above construction process, it can be seen that Gpre(k) is undirected. Let GA-pre(k) denote the subgraph induced by the agent set A(0, k) within Gpre(k) at time k, as illustrated in Fig. 2(a). Next, the network
connectivity of GA-pre(k), will be analyzed to pave a way to the connection performance preservation among normal agents of the communication graph GA(k) (see Fig. 2(b)) after the ASNS strategy.
35
9
7
26
1 10
(b)
35
9
7
26
1 10
(a)
Normal agent Edge in pre-discriminative graph Edge in communication graph
Fig. 2. (a) GA-pre(k): the subgraph of agents in A(0, k)
corresponding to Gpre(k) in Fig. 1(b); (b) GA(k): the subgraph
of agents in A(0, k) corresponding to G(k) in Fig. 1(c) with GA(k) ⊆ GA-pre(k).
Proposition 1: For MASs suffering from Byzantine attacks, under Algorithm 1, GA-pre(k), the subgraph of Gpre(k) among all agents in A(0, k) is connected if the initial pre-discriminative graph Gpre(0) is (F + 1)-robust. Proof: The worst-case attack scenario within the interval [0, k] is considered. For each normal agent i, if F < |Ni-pre(0)|, it has exactly F Byzantine candidate neighbors; otherwise, all candidate neighbors are compromised. This condition is formally expressed as
∣∣∣∣
(⋃
l∈[0,k]
Ni-pre(l)
)
∩ B(0, k)
∣∣∣∣ = min {F, |Ni-pre(0)|} .
First, the preliminary form of the isolation process in step 11 of Algorithm 1 is considered, where all directed edges from Byzantine agents to normal agents are removed by the defense strategy. Since Gpre(0) is (F + 1)-robust, under the above attack scenario and defense scheme, it follows that Gpre(k) is 1-robust. Notably, using this isolation mechanism, all communication edges between

5
Algorithm 1 Pre-Discriminative Graph Gpre(k) Construction Strategy
1: for k > 0 do 2: for each normal agent i ∈ A(0, k − 1) do 3: (Attack detection) 4: for each j ∈ N +
i (k − 1) ∩ A(0, k − 1) do
5: Implement the detection strategy (4); 6: end for 7: (Broadcast) 8: Bi(k) is broadcasted at time k; 9: if A(0, k) ̸= A(0, k − 1) then 10: (Graph construction) 11: Construct the pre-discriminative graph Gpre(k): each agent i ∈ A(0, k) rebuilds undirected edges with agents belonging to Ni-pre(k − 1) ∩ A(0, k) for Gpre(k). 12: end if 13: end for 14: end for
B(0, k) and A(0, k) are directed from A(0, k) to B(0, k). Consequently, GA-pre(k) is at least 1-robust in this setting. Next, consider the actual isolation mechanism in the ASNS strategy, where all undirected edges between Byzantine and normal agents are removed. Consequently, it follows directly that GA-pre(k) is also at least 1-robust. Hence, GA-pre(k) contains a directed spanning tree. Since all edges among A(0, k) in GA-pre(k) are undirected, the graph is connected. Thus the proof is complete.-
 Subsequently, based on the pre-discriminative graph constructed above, we perform a preprocessing step on system (1) so that the forthcoming ASNS strategy can rely on well-defined selection criteria. Recent research [29] has shown that, in semiautonomous networks, connectivity under neighbor selection can be determined by the normalized eigenvector linked to the smallest eigenvalue. This eigenvalue arises from a perturbed Laplacian matrix formed by the original Laplacian matrix and the input matr-
ix. To exploit this, system (1) is preprocessed to emulate a class of semi-autonomous ones. Specifically, choose any agent in A(0, k) as a virtual leader with no influence caused by external input and the model in (1) can be transformed as
xi (k + 1) = xi (k) + ε
∑
j∈N +
i (k)
aij (k) (xj (k) − xi (k))
−
m ∑
p=1
bip(xi(k) − up(k)),
(5) where up(k) ∈ Rn is the p-th virtual external input with up(k) = xi (k) (bip = 1) in order to offset the impact of virtual input on system (1). Here, bip ∈ R is the weight coefficient of input: bip = 1 if agent i is designed as a virtual leader injected by up(k) and bip = 0 otherwise. Thus, the augmented dynamics of agents in A(0, k)
admits
x (k + 1) = − (εLB (k) ⊗ I) x (k) + (εB ⊗ I) u (k) ,
where x(k) = [x1⊤(k), x2⊤(k), . . . , x⊤
|A(0,k)|(k)]⊤, u(k) =
[u1⊤(k), u2⊤(k), . . . , u⊤m(k)]⊤ and LB(k) = LA-pre (k) + diag(B · 1) is a perturbed Laplacian matrix with B = (bip) ∈ Rm|A(0,k)| and LA-pre(k) is the corresponding Laplacian matrix of GA-pre(k). Lemma 1: If Gpre(0) is (F +1)-robust, then the smallest eigenvalue λ1 (LB (k)) > 0 is a simple eigenvalue of LB (k) and its associated eigenvector v1 (LB (k)) can be chosen strictly positive. Proof: By Proposition 1, GA-pre(k) is connected. The statement then follows immediately from Lemma 1 in [29].
In [29], for the original neighbor set N +
i (k), each
agent selects in-neighbors satisfying v1(j)(LB(k)) < v1(i)(LB(k)). This strategy prunes redundant edges, and accelerates system convergence while preserving network connectivity. However, it offers no protection against adversarial attacks, whose misreported states can render the criterion insecure and destabilize the system. Therefore, the subsequent investigation centers on an active neighbor selection framework against attacked agents.
B. Design of Active Secure Neighbor Selection Strategy
Here an ASNS strategy is designed to reconstruct G (k) and ensure the resilient consensus. The ASNS strategy begins with the pre-discriminative graph reconstruction executed by Algorithm 1, during which attacked agents are exposed and the detection results are broadcasted. Subsequently, normal agents actively establish communication links by selecting secure neighbors, rather than passively removing untrusted ones. The detailed procedure of the ASNS strategy is presented in Algorithm 2. Specifical-
ly, at each time k, the main process implemented by each normal agent i in A(0, k −1) is described as follows. Attack detection and broadcast (Step 6) and Prediscriminative graph construction (Step 9): The detailed procedure has been provided in Algorithm 1. Active secure neighbor selection (Steps 11-19): Based on the pre-discriminative graph Gpre(k), a virtual leader i ̃ in A(0, k) is first selected and the perturbed Laplacian is constructed as LB(k) ≜ LA-pre (k) + diag(B1) in the foundation of (-
5) with up(k) = x ̃i (k). Define ψi(k) as
the set of agents in Ni-pre(0) ∩ A(0, k)\{i ̃} where each agent j ∈ ψi(k) satisfies v1(i) (LB (k)) > v1(j) (LB (k)). Then each agent selects the set of in-neighbors satisfying
N+
i (k) ⊆ ψi(k) and ∣∣N +
i (k)∣∣ ̸= 0.
The performance of the above ASNS strategy is examined next. We first analyze the network connectivity of GA(k) which is defined as the subgraph induced by the agents in A(0, k) corresponding to G(k) at time k, as depicted in Fig. 2(b). The issue of convergence will be investigated in terms of the above graph connection performance analysis.

6
Algorithm 2 Active Secure Neighbor Selection Strategy for Flexible Communication Input: G(0) and F . Output: G(k). 1: Initialization: Each agent i ∈ V initializes its information set N +
i (0) and xi(0); A(0, 0) = V; Bi(0) = ∅;
2: Iteration: 3: for k > 0 do 4: for each normal agent i ∈ A(0, k − 1) do 5: (Attack detection and broadcast) 6: Steps 4-8 in Algorithm 1;
7: if A(0, k) ̸= A(0, k − 1) then
8: (Pre-discriminative graph construction) 9: Step 11 in Algorithm 1; 10: (Active secure neighbor selection)
11: Set an agent i ̃ in A(0, k) as the virtual leader; 12: Calculate LB(k); 13: for each j ∈ Ni-pre(0) ∩ A(0, k)\{i ̃} do 14: if v1(i) (LB (k)) > v1(j) (LB (k)) then
15: Classify agent j into ψi(k) which is the pre-discriminative neighbor selection set of agent i;
16: end if 17: end for 18: Set N +
i (k) = ∅;
19: Construct the communication graph G(k): choose the set of in-neighbors satisfying N +
i (k) ⊆
ψi(k) and ∣∣N +
i (k)∣∣ ̸= 0.
20: end if 21: end for 22: end for
Now we discuss the feasibility of Algorithm 2 by deriving the conditions that guarantee every agent except the rooted one in A(0, k) can always find at least one admissible in-neighbour. Proposition 2: If Gpre(0) is (F +1)-robust, then ψi(k) ̸= ∅ for each agent i ∈ A(0, k)\{i ̃}. Proof: Based on the transformed system (5), we proceed by contradiction. For simplicity, we omit time k hereafter. Suppose that there exists an agent i ∈ A(0, k)\{i ̃}, such that v1(i) < v1(j), for all j ∈ Ni-pre(0) ∩ A(0-
, k). For the i-th row of LBv1 = λ1(LB)v1, we have (∑
j ∈Ξ (0,k)
lij
)
v1(i) −
∑
j ∈Ξ (0,k)
lij v1(j) = λ1(LB)v1(i). (6)
where Ξ(0, k) ≜ Ni-pre(0) ∩ A(0, k).
If v1(i) < v1(j) for all j ∈ Ni-pre(0) ∩ A(0, k), one gets λ1(LB)v1(i) < 0, which is a contradiction with Lemma 1. Thus, ψi(k) ̸= ∅ for each agent i ∈ A(0, k)\{i ̃}. The network connectivity among normal agents GA(k) is now guaranteed. By leverage of [22], it is indicated that under the ASNS strategy and the condition that Gpre(0) is (F + 1)-robust, GA(k) is ensured to contain a spanning
tree for all k. Under the ASNS strategy, there exists no edge between agents in B(0, k) and A(0, k). In other words, the agents in A(0, k) will not be affected by the attackers. Thus, the state evolution of agents in A(0, k) is governed by
x (k + 1) = (I − εLA-pre (k) ⊗ I) x (k) , (7)
where x (k) ∈ R|A(0,k)| and I ∈ R|A(0,k)|×|A(0,k)|.
The resilient-consensus property is formally established in the next theorem. Theorem 1: Consider the MASs (1) subject to Byzantine attacks (3). Under the ASNS strategy and Assumption 1, if Gpre(0) is (F + 1)-robust, the resilient consensus
can be achieved by agents in A ̄. Proof: Let {k1, . . . , ks, ks+1 . . . } be the discrete time instants at which the attackers change their target set; i.e., B(0, ks) ̸= B(0, ks − 1). At each time k and for the l-th dimension, we denote the maximum and minimum state values of agents in A(0, k) as xmax(l)(k) and xmin(l)(k). Let Pmin(l)(k) and Pmax(l)(k) be the sets of agents in A(0, k) holding the state value as xmin(l)(k) and xmax(l)(k), respectively. For convenience, rewrite (2) as
xi (k + 1) = (1 − εlii)xi (k) − ε
∑
j∈N +
i (k)
lij (k) xj (k). (8)
During interval [ks , ks+1), ε ∈ (0, 1
max lii ) ensures that
all coefficients of xi(k) in (8) are nonnegative and sum to one. Hence, the state value of each agent in A(0, ks) is a convex combination of its own value and the values received from its neighbors under protocol (1). Therefore, it has Ξ(k + 1) ⊆ Ξ(k) for all k ∈ [ks , ks+1). Besides, since there is no state jump occur at instant ks, we also have Ξ(ks+) = Ξ(ks−). Then, the following outline of analysis is provided.
Since we have already established Ξ(k + 1) ⊆ Ξ(k) for the entire process, to verify resilient consensus, it remains to show that the time interval satisfying Ξ(k + 1) = Ξ(k) is bounded. To this end, since it is obvious that Ξ(ks+) =
Ξ(ks−), the subsequent proof proceeds with each interval [ks, ks+1) and is carried at each dimension of state xi (k) in (8). For the l-th dimension, we focus on the agents holding extreme values, i.e., i ∈ Pmin(l)(k) ∪ Pmax(l)(k). Three exhaustive cases are involved at each time step k: Case 1) N +
i (k) ∩ Pmin(l)(k) = ∅, ∀i ∈ Pmin(l)(k) and
N+
i (k) ∩ Pmax(l)(k) = ∅, ∀i ∈ Pmax(l)(k); Case 2) N +
i (k) ∩ Pmin(l)(k) = ∅, ∀i ∈ Pmin(l)(k) and
N+
i (k) ∩ Pmax(l)(k) ̸= ∅, ∃i ∈ Pmax(l)(k); Case 3) N +
i (k) ∩ Pmin(l)(k) ̸= ∅, ∃i ∈ Pmin(l)(k) and
N+
i (k) ∩ Pmax(l)(k) ̸= ∅, ∃i ∈ Pmax(l)(k).
Note that resilient consensus is achieved if xmin(l)(k) = xmax(l)(k). In what follows we consider the situation that at least one dimension l satisfies xmin(l)(k) ̸= xmax(l)(k) before resilient consensus is achieved.
Case 1). For every agent i ∈ Pmin(l)(k) ∪ Pmax(l)(k), the ASNS strategy guarantees an in-neighbor i ∈ Pmin(l)(k) ∪

7
Pmax(l)(k) such that lij (k) > 0. This indicates that for i ∈ Pmin(l)(k) ∪ Pmax(l)(k), we get
xi(l)(k + 1) ∈ (xmin(l)(k), xmax(l)(k)).
Agents not in Pmin(l)(k) ∪ Pmax(l)(k) trivially satisfy the same inclusion, so Ξ(k + 1) ⊂ Ξ(k) for all k ∈ [ks , ks+1). Case 2). For every i ∈ Pmin(l)(k), the same reasoning as in Case 1) yields xi(l)(k + 1) ∈ (xmin(l)(k), xmax(l)(k)), i ∈
Pmin(l)(k). For each agent i ∈ Pmax(l)(k), since N +
i (k) ∩
Pmax(l)(k) ̸= ∅, ∃i ∈ Pmax(l)(k), the worst outcome is xi(l)(k + 1) = xmax(l)(k), i ∈ Pmin(l)(k). Therefore, it is derived that Ξ(k + 1) ⊂ Ξ(k) before achieving resilient consensus. As for the subcase that N +
i (k) ∩ Pmax(l)(k) =
∅, for all i ∈ Pmax(l)(k) while N +
i (k) ∩ Pmin(l)(k) ̸=
∅, ∃i ∈ Pmin(l)(k), then at least one agent i ∈ Pmax(l)(k) will be pulled strictly inside the interval, so Ξ(ks + 1) ⊂ Ξ(ks).
Case 3). Assume, for contradiction, that Ξ(k + 1) = Ξ(k) for [k, +∞). Then xmin(l)(k) = xmin(l)(k) and xmax(l)(k) = xmax(l)(k) for k ∈ [k, +∞), which further implies that Pmax(l)(k) and Pmin(l)(k) remain empty. While in alignment with the ASNS strategy, GA(k) contains a
spanning tree. Hence some agent i in A(0, k)\ {i ̃} has in-neighbors outside its own set which are Pmax(l)(k) or Pmin(l)(k). Furthermore, for (8), since xi (k + 1) is the linear combination of xi (k) , i ∈ A(0, k) and ε ∈ (0, 1
max lii ),
the cardinalities of Pmin(l)(k) and Pmax(l)(k) strictly decrease until xmin(l)(k) = xmax(l)(k), contradicting the assumption.
To sum up, we have Ξ(k + 1) ⊆ Ξ(k) with Ξ(ks+) =
Ξ(ks−) and the equality Ξ(k + 1) = Ξ(k) can persist only for a bounded time. In this way, the resilient consensus is guaranteed, which completes the proof.
Remark 3: The ASNS strategy constructs a neighbor selection scheme such that the resulting communication topology is p-robust with p ⩽ F + 1. This significantly relaxes the (2F + 1)-robustness required by the timeinvariant topology in [10]. Consequently, the approach reduces communication overhead while still ensuring consensus.
Remark 4: Unlike [21] and [27], the ASNS strategy no longer presumes that the underlying graph among normal agents should keep the connection performance. Instead, it actively builds a directed spanning tree. This design facilitates implementation, as the adversary’s target behavior remains unknown.
Remark 5: The topology dynamics induced by the ASNS strategy present greater challenges to adversaries. Some sophisticated attacks, such as stealthy attacks [36] and ripple attacks [37], rely on the topological information. The topology dynamics of our work disrupts the adversaries’ knowledge of the system model, thereby hindering the design of targeted attacks aligned with the system behavior.
Through the above analysis, it is evident that under the proposed ASNS strategy, the communication cost
of network can be adjusted while maintaining resilience against attacks. Specifically, the number of in-neighbors corresponding to each normal agent is adjusted with ψi(k), that is, N +
i (k) ⊆ ψi(k). In other words, the
communication remains flexible. Moreover, because communication overhead is often the dominant cost in realworld MASs, achieving resilience with the lowest possible data exchange is of paramount interest [7]. Motivated by this, we evaluate the total defense cost of ASNS strategy when communication is minimized. We first give a formal definition of resilient minimum communication in the presence of Byzantine agents, following the idea in [38].
Definition 4: (Resilient Minimum Communication) The MASs under GA (k) subject to Byzantine attacks are said to achieve resilient minimum communication, if
|EGA (k)| = min
g∈G(k) |Eg (k)| ,
where G (k) is the set of all the communication graphs for agents in A(0, k) that contain a directed spanning tree at time k and Eg (k) is the set of edges corresponding to graph g.
Next, the minimum communication overhead of the ASNS strategy is quantitatively analyzed. It is first noted that, according to Proposition 2, under the ASNS strategy, each normal agent is guaranteed to have at least one selected inneighbor. This structural property enables the exploration of defense mechanisms under minimum communication cost.
Proposition 3: Consider the MASs (1) with the Byzantine attacks (3). Under the ASNS strategy and Assumption 1, if Gpre(0) is (F +1)-robust and all agents in A(0, k) except virtual leader choose N +
i (k) = { j| j ∈ ψi (k)}
with ∣∣N +
i (k)∣∣ = 1, GA(k) attains resilient minimum
communication and resilient consensus is achieved.
Proof: We proceed by contradiction to show that the graph GA(k) contains a spanning tree. Suppose that
there is a non-empty subset π(k) of A(0, k)\{i ̃} that is unreachable from agent i ̃. Consider agent i ∈ π(k) with the smallest v1(i) (LB (k)) among all agents in π(k). From the ASNS strategy, agent i ̃ is left with no selectable inneighbors, i.e., ψi(k) = ∅, yielding a contradiction.
Next, because every agent in A(0, k) only chooses one in-neighbor from Ni-pre(0) ∩ A(0, k). Thus, it is straightforward that GA(k) under the ASNS strategy satisfies resilient minimum communication. The resilient consensus can also be realized based on the poof in Theorem 1.
Remark 6: Note that existing research primarily focuses on enhancing network communication redundancy to improve resilience against Byzantine attacks [10], [25], [39]. The study in [38] investigates the minimum communication requirements under zero-dynamics attacks from the perspective of structural system theory. However, limited efforts have been devoted to leveraging minimum defense resources to counteract Byzantine adversaries. The proposed approach maintains strong resilience by adding

8
new edges when the spanning tree among normal agents is disrupted, thereby mitigating the adverse effects on network connectivity.
V. SIMULATIONS AND DISCUSSIONS
In this section, we first elaborate on the performance of the ASNS strategy. Next, comparative simulations are carried out to reveal the superiority of our results.
A. Performance of ASNS Strategy under Byzantine attacks
A directed graph of ten agents whose initial graph containing a directed spanning tree is considered. The set of compromised agents is fixed at B ̄ = {1, 4, 9}, which corresponds to an F -local Byzantine model with F = 2. In practice, the set of Byzantine agents at time k,
denoted by ⋃
i∈V Bi(k), is a subset of the predefined set
B ̄. For convenience, agents in B ̄ \ (⋃
i∈V Bi(k)), which are
not actively launching attacks at time k, are referred as dormant Byzantine agents.
Fig. 3(a) depicts the initial communication graph G(0) under the influence of the Byzantine agents in B ̄. A key observation is that the graph of agents in A ̄ has no directed spanning tree. Consequently, the algorithm proposed in [21] becomes ineffective when all agents in B ̄ are compromised. In all simulations, we set ε = 0.02. Besides, Fig. 3(b) displays the initial pre-discriminative graph Gpre(0) which is 3-robust.
In fact, Gpre(0) specifies the set of admissible neighbors for all agents, delineating all potential communication links that can be established. The actual communication topology is a subgraph of Gpre(0). For example, G(0) in Fig. 3(a) is a subgraph of Gpre(0) in Fig. 3(b). It is also worth noting that Gpre(0) is not a complete graph; for instance, there is no edge between agents 1 and 10.
35
9
47
26
1
8
10
35
9
47
26
1
8
10
(a) (b)
Fig. 3. (a) The initial communication graph G(0); (b) The initial pre-discriminative graph Gpre(0).
The Byzantine attacks are designed as follows with attack targets changing moments being k1 = 120 and
k2 = 400. The whole evaluation process is given below:
f1j(k) =


B01, j = 8, k ∈ [120, 400), B02, j = 6, k ∈ [120, 400), x1(k − 6), j = 7, k ∈ [120, 400), A1x1(k − 3) + 5, j = 9, k ∈ [120, 400),
f4j(k) =
{ B11, j = 2, k ∈ [400, ∞), A1x4(k) + B12, j = 10, k ∈ [400, ∞),
f9j(k) =


A0x9(k) + B01, j = 5, k ∈ [120, ∞), A0x9(k) + B02, j = 6, k ∈ [120, ∞),
A0x9(k), j = 1, k ∈ [120, ∞).
(9) where {
A0 = diag {0.03 sin (k) , 1, 0.02 cos (k)} ,
A1 = diag {0.07 sin (k) , 1, 0.02 sin (k)} ,
and 

B01 =
[
0.02 0.06 0.04
]⊤ ,
B02 =
[
0.12 0.36 0.09
]⊤ ,
B11 =
[
0.12 0.06 0.26
]⊤ ,
B12 = cos (k)
[
0.12 0.36 0.09
]⊤ .
k = k1 = 120: Based on the above attack model, agents 1 and 9 are attacked as the Byzantine ones at k1 = 120, see Fig. 4(a). At k1, in terms of the ASNS strategy, Byzantine agents 1 and 9 are isolated with edges (1, 8), (1, 7), (1, 6), (10, 9), (9, 5) and (9, 6) being deleted. It is indicated that A (0, k1) = {2, 3, 4, 5, 6, 7, 8, 10} such that A (0, k1) ̸= A (0, k1 − 1). Then a pre-discriminative graph Gpre(k1) is constructed according to Algorithm 1 which is plotted in Fig. 4(b) (Step 9 in the A-
SNS strategy). The normal agent 8 is chosen as a virtual leader such that LB(k1) is formed. Then it follows that v1 (LB(k1)) = [0.3672 0.3542 0.3512 0.3565 0.3716 0.3726 0.2720 0.3720] (Steps 11-12 in the ASNS strategy). The communication graph G(k1) is then reconstructed. Each agent i in A (0, k1) selects at least one in-neighbor as N +
i (k1) ⊆ ψi(k1) =
{ j| v1(i) (LB (k1)) > v1(j) (LB (k1))}. Then the new secure communication graph G(k1) is rebuilt up as Fig. 4(c) (Steps 13-19 in the ASNS strategy). k = k2 = 400: Now the adversaries shift to agents 4 and 9. The virtual leader is designated as agent 10. The defense procedure is similar to the above elaboration, which is shown in Figs. 4(d)-(f). It is worthy to note that isolating agent 4 disconnects agents 2 and 10 from the rest of the network (see Fig. 4(d)). Consequently, the method in [21], wh-
ich relies on the connectivity assumption among normal agents, fails to achieve consensus under this condition. Fortunately, with the help of ASNS strategy, the communication graphs are rebuilt up among normal agents. The relative error σi(k) ≜
∥∥∥∑
j∈A ̄ (xi (k) − xj (k))
∥∥∥ , i ∈
A ̄ and σi(k) ≜
∥∥∥∑
j∈N +
i (0) (xi (k) − xj (k))
∥∥∥ , i ∈ B ̄ are provided to quantify system performance which is illustrated in Fig. 5. It is found that the ASNS strategy

9
0.2720
0.3565
0.3512
0.3720
0.3726
0.4106
0.3800
0.4106
0.3800
Pre-discriminative graph Communication graph Byzantine agent Normal agent Virtual leader Dormant Byzantine agent
0.2579
0.3684
35
9
47
26
1
8
10
(a)
35
9
47
26
1
8
(f)
0.4056 0.3987
0.4007
10
0.3512
0.2720
35
9
47
26
1
8
(d)
0.3565
0.3672 0.3716
35
9
47
26
1
8
0.3542
(c)
10
10
0.3720
0.3726
0.2579
0.3684
0.3672 0.3716
35
9
47
26
1
8
0.3542
(b)
0.4056 0.3987
0.4007 35
9
47
26
1
8
(e)
10
10
Fig. 4. The communication graphs and pre-discriminative graphs: (a) G(k1 − 1); (b) Gpre(k1); (c) G(k1); (d) G(k2 − 1); (e) Gpre(k2); (f) G(k2).
0 100 200 300 400 500 600 700 800
0
10
20
30
40
50
Fig. 5. The relative error of MASs under the ASNS strategy against Byzantine attacks.
mitigates the influence of adversaries and achieves consensus by dynamically forming a directed spanning tree.
B. Performance Comparison with Existing Results
Consider the graph of Fig. 3(a) as the initial communication graph and the set of Byzantine agents is {1, 9}. The attack strategies of agents 1 and 9 are the same as (9) where attacked time periods are both k ∈ [120, ∞). The removal of agent 9 results in the disconnection of agents 7 and 10 from the other normal agents (see Figs. 4(a)). The ASNS strategy is first contrasted with the method in [21], which depends on the connectivity assumption among normal agents. With this feature, the method in [-
21] fails to achieve consensus under this condition. This is because the isolation of Byzantine agents undermines the communication topology of normal agents which contains no directed spanning tree and results in insufficient
interactions. Fig. 6 confirms this statement. However, the resilient consensus can still be achieved under the ASNS strategy by dynamically rebuilding the communication graph which is depicted in Fig. 7. Now, we compare the ASNS strategy with the W-MSR algorithms [10], [25]. As illustrated in the attack scenario, the Byzantine attack satisfies the F -local condition with F = 2. It is straightforward that G(k1 − 1) is 1-robust, not (2F + 1)-robust which indicates that the communication resources ar-
e insufficient for the W-MSR framework as elaborated in [10], [25]. In light of ASNS strategy, the process of neighbor selection is similar to the one from Fig. 4(a) to Fig. 4(c) and the resilient consensus is satisfied according to Fig. 7. To facilitate comparison, as shown in Fig. 8, the W-MSR algorithm [10], [25] is applied from k = 80, in the absence of any attacks. It is indicated that even in a nominal setting, the interaction among agents is disrupted, impeding convergence. Normal agents fa-
il to achieve resilient consensus under the W-MSR algorithm. It is because the network lacks the robustness required to resist attacks, and therefore cannot provide sufficient communication redundancy.
VI. CONCLUSION
An active neighbor selection strategy was presented via constructing the pre-discriminative graph to ensure the consensus of MASs under Byzantine attacks. The flexible communication was achieved by the adjustment of in-neighbor number. In this way, not only the resilient

10
consensus is guaranteed but also the communication resources can be saved. Besides, the assumption about the connection performance among normal agents was released. Furthermore, an algorithm was proposed to achieve the minimum number of edges within the normal agents while preserving a directed spanning tree.
50 100 150 200 250 300
0
10
20
30
40
Fig. 6. The relative error of MASs under Byzantine attacks with the defense strategy in [21] based on the connectivity-based assumption among normal agents .
50 100 150 200 250 300
0
10
20
30
40
Fig. 7. The relative error of MASs suffering from Byzantine attacks with the ASNS strategy.
50 100 150 200 250 300
0
10
20
30
40
Fig. 8. The relative error of MASs under Byzantine attacks with the W-MSR strategy requiring (2F + 1)-robustness for resilient consensus [10], [25].
REFERENCES
[1] S. C. Hassler, U. A. Mughal, and M. Ismail, “Cyber-physical intrusion detection system for unmanned aerial vehicles,” IEEE Transactions on Intelligent Transportation Systems, vol. 25, no. 6, pp. 6106–6117, 2024. [2] D. Watari, I. Taniguchi, and T. Onoye, “Duck curve aware dynamic pricing and battery scheduling strategy using reinforcement learning,” IEEE Transactions on Smart Grid, vol. 15, no. 1, pp. 457–471, 2023. [3] Y. Mo, S. Weerakkody, and B. Sinopoli, “Physical authentication of control-
 systems: Designing watermarked control inputs to detect counterfeit sensor outputs,” IEEE Control Systems Magazine, vol. 35, no. 1, pp. 93–109, 2015. [4] A. K. Maitra, “Offensive cyber-weapons: technical, legal, and strategic aspects,” Environment Systems and Decisions, vol. 35, no. 1, pp. 169–182, 2015. [5] F. Pasqualetti, F. Dörfler, and F. Bullo, “Attack detection and identification in cyber-physical systems,” IEEE transactions on automatic control, vol. 58, no. 11, pp. 2715–2729, 2013.
[6] A. J. Gallo, M. S. Turan, F. Boem, T. Parisini, and G. FerrariTrecate, “A distributed cyber-attack detection scheme with application to DC microgrids,” IEEE Transactions on Automatic Control, vol. 65, no. 9, pp. 3800–3815, 2020. [7] M. Pirani, A. Mitra, and S. Sundaram, “Graph-theoretic approaches for analyzing the resilience of distributed control systems: A tutorial and survey,” Automatica, vol. 157, p. 111264, 2023. [8] R. Zhao, Z. Zuo, Y. Wang, and W. Zhang, “Active control strategy for sw-
itched systems against asynchronous DoS attacks,” Automatica, vol. 148, p. 110765, 2023. [9] A.-Y. Lu and G.-H. Yang, “Distributed secure state estimation for linear systems against malicious agents through sorting and filtering,” Automatica, vol. 151, p. 110927, 2023. [10] H. J. LeBlanc, H. Zhang, X. Koutsoukos, and S. Sundaram, “Resilient asymptotic consensus in robust networks,” IEEE Journal on Selected Areas in Communications, vol. 31, no. 4, pp. 766–781, 2013. [11] R. Olfati-Saber, J. A. Fax,-
 and R. M. Murray, “Consensus and cooperation in networked multi-agent systems,” Proceedings of the IEEE, vol. 95, no. 1, pp. 215–233, 2007. [12] F. Chen, M. Sewlia, and D. V. Dimarogonas, “Cooperative control of heterogeneous multi-agent systems under spatiotemporal constraints,” Annual Reviews in Control, vol. 57, p. 100946, 2024. [13] M. Luo, B. Du, W. Zhang, T. Song, K. Li, H. Zhu, M. Birkin, and H. Wen, “Fleet rebalancing for expanding shared emobility systems: A multi-agent deep reinforcemen-
t learning approach,” IEEE Transactions on Intelligent Transportation Systems, vol. 24, no. 4, pp. 3868–3881, 2023. [14] Z. Fan, W. Zhang, and W. Liu, “Multi-agent deep reinforcement learning-based distributed optimal generation control of DC microgrids,” IEEE Transactions on Smart Grid, vol. 14, no. 5, pp. 3337–3351, 2023. [15] M. Zheng, C.-L. Liu, and F. Liu, “Average-consensus tracking of sensor network via distributed coordination control of heterogeneous multi-agent systems,” IEEE Control Sys-
tems Letters, vol. 3, no. 1, pp. 132–137, 2018. [16] W. Zhang, Z. Zuo, Y. Wang, and G. Hu, “How much noise suffices for privacy of multiagent systems?,” IEEE Transactions on Automatic Control, vol. 68, no. 10, pp. 6051–6066, 2022. [17] Z. Zuo, X. Cao, Y. Wang, and W. Zhang, “Resilient consensus of multiagent systems against denial-of-service attacks,” IEEE Transactions on Systems, Man, and Cybernetics: Systems, vol. 52, no. 4, pp. 2664–2675, 2021. [18] F. M. Zegers, M. T. Hale, J. M. Shea, and W. -
E. Dixon, “Eventtriggered formation control and leader tracking with resilience to Byzantine adversaries: A reputation-based approach,” IEEE Transactions on Control of Network Systems, vol. 8, no. 3, pp. 1417–1429, 2021. [19] A. Mustafa, H. Modares, and R. Moghadam, “Resilient synchronization of distributed multi-agent systems under attacks,” Automatica, vol. 115, p. 108869, 2020. [20] L. Yuan and H. Ishii, “Secure consensus with distributed detection via two-hop communication,” Automatica, vol. 1-
31, p. 109775, 2021. [21] X. Luo, C. Zhao, and J. He, “Secure multi-dimensional consensus algorithm against malicious attacks,” Automatica, vol. 157, p. 111224, 2023. [22] H. Ishii, Y. Wang, and S. Feng, “An overview on multiagent consensus under adversarial attacks,” Annual Reviews in Control, vol. 53, pp. 252–272, 2022. [23] J. Usevitch and D. Panagou, “Resilient leader-follower consensus to arbitrary reference values in time-varying graphs,” IEEE Transactions on Automatic Control, vol. 65, no. -
4, pp. 17551762, 2020. [24] J. Usevitch and D. Panagou, “Determining r-and (r, s)robustness of digraphs using mixed integer linear programming,” Automatica, vol. 111, p. 108586, 2020. [25] S. Sundaram and B. Gharesifard, “Distributed optimization under adversarial nodes,” IEEE Transactions on Automatic Control, vol. 64, no. 3, pp. 1063–1076, 2018. [26] M. Cavorsi, L. Sabattini, and S. Gil, “Multirobot adversarial resilience using control barrier functions,” IEEE Transactions on Robotics, vol. 40, -
pp. 797–815, 2024.

11
[27] D. Zhao, Y. Lv, G. Wen, and Z. Gao, “Resilient consensus of high-order networks against collusive attacks,” Automatica, vol. 151, p. 110934, 2023. [28] L. An and G.-H. Yang, “Mean-square exponential convergence for Byzantine-resilient distributed state estimation,” Automatica, vol. 163, p. 111592, 2024. [29] H. Shao, L. Pan, M. Mesbahi, Y. Xi, and D. Li, “Distributed neighbor selection in multiagent networks,” IEEE Transactions on Automatic Control, vol. 68, no. 11, pp. 6711–6726, 2023. [30] -
J.-M. Dion, C. Commault, and J. van der Woude, “Generic properties and control of linear structured systems: a survey,” Automatica, vol. 39, no. 7, pp. 1125–1144, 2003. [31] W. Ren and R. W. Beard, Distributed consensus in multi-vehicle cooperative control. London, U.K.: Springer, 2008. [32] L. Yuan and H. Ishii, “Resilient average consensus with adversaries via distributed detection and recovery,” IEEE Transactions on Automatic Control, vol. 70, no. 1, pp. 415–430, 2025. [33] L. Yuan and H. Ishii-
, “Asynchronous approximate Byzantine consensus: A multi-hop relay method and tight graph conditions,” Automatica, vol. 171, p. 111908, 2025. [34] L. Yuan and H. Ishii, “Event-triggered approximate Byzantine consensus with multi-hop communication,” IEEE Transactions on Signal Processing, vol. 71, pp. 1742–1754, 2023. [35] J. Yan, X. Li, Y. Mo, and C. Wen, “Resilient multi-dimensional consensus in adversarial environment,” Automatica, vol. 145, p. 110530, 2022. [36] H. Guo, Z.-H. Pang, and C. Li, “-
Side information-based stealthy false data injection attacks against multi-sensor remote estimation,” IEEE/CAA Journal of Automatica Sinica, vol. 11, no. 4, pp. 1054–1056, 2024. [37] T.-Y. Zhang, D. Ye, and G.-H. Yang, “Ripple effect of cooperative attacks in multi-agent systems: Results on minimum attack targets,” Automatica, vol. 159, p. 111307, 2024. [38] S. Weerakkody, X. Liu, and B. Sinopoli, “Robust structural analysis and design of distributed control systems to prevent zero dynamics attack-
s,” in 2017 IEEE 56th Annual Conference on Decision and Control (CDC), pp. 1356–1361, IEEE, 2017. [39] X. Gong, X. Li, Z. Shu, and Z. Feng, “Resilient output formation-tracking of heterogeneous multiagent systems against general Byzantine attacks: A twin-layer approach,” IEEE Transactions on Cybernetics, vol. 54, no. 4, pp. 2566–2578, 2023.

---

## Processing Information

- **Processing Library:** Zotero PDFWorker
- **Processing Date:** 2026-02-10T18:17:24.485Z
- **Text Length:** 50585 characters
- **Success:** Text extraction completed
- **PDF Library Used:** Zotero PDFWorker
- **Pages Processed:** 11 of 11
