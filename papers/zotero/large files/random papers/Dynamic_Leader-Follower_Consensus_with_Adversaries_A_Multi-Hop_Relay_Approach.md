# PDF Document: Yuan and Ishii - 2025 - Dynamic Leader-Follower Consensus with Adversaries A Multi-Hop Relay Approach.pdf

**File Path:** Yuan and Ishii - 2025 - Dynamic Leader-Follower Consensus with Adversaries A Multi-Hop Relay Approach.pdf

**Processed Date:** 2026-02-10T18:17:48.074Z

**File Size:** 2991.53 KB

**Total Pages:** 15

**Extracted Pages:** 15

**PDF Library:** Zotero PDFWorker

**Attachment Item ID:** 3249

**Title:** Dynamic Leader-Follower Consensus with Adversaries: A Multi-Hop Relay Approach

**Collection:** Large Files > Random Papers

---

## Extracted Text Content

Dynamic Leader-Follower Consensus with Adversaries: A Multi-Hop Relay Approach ⋆
Liwei Yuan a, Hideaki Ishii b
aCollege of Electrical and Information Engineering, Hunan University, Changsha 410082, China
bDepartment of Information Physics and Computing, The University of Tokyo, Tokyo 113-8656, Japan
Abstract
This paper examines resilient dynamic leader-follower consensus within multi-agent systems, where agents share first-order or second-order dynamics. The aim is to develop distributed protocols enabling nonfaulty/normal followers to accurately track a dynamic/time-varying reference value of the leader while they may receive misinformation from adversarial neighbors. Our methodologies employ the mean subsequence reduced algorithm with agents engaging with neighbors using multi-hop communication. We -
accordingly derive a necessary and sufficient graph condition for our algorithms to succeed; also, our tracking error bounds are smaller than that of the existing method. Furthermore, it is emphasized that even when agents do not use relays, our condition is tighter than the sufficient conditions in the literature. With multi-hop relays, we can further obtain more relaxed graph requirements. Finally, we present numerical examples to verify the effectiveness of our algorithms.
Key words: Leader-follower consensus; Multi-hop relays; Resilient protocols; Time-varying reference.
1 Introduction
Amid growing concerns over cyber security in multiagent systems (MASs), consensus protocols in the presence of adversarial agents creating failures and attacks have garnered significant interests, e.g., Teixeira et al. (2012). Within this area, resilient consensus problems have gained substantial attention across the disciplines of systems control, distributed computing, and robotics (Vaidya et al. (2012); Sundaram and Gharesifard (2018); Yu et al. (2022)). Here, the objective for the nonfaulty, n-
ormal agents is to reach consensus despite misbehaviors of adversarial agents. Existing resilient consensus algorithms are designed to ensure that normal agents reach consensus on a value within the convex hull of their initial states, e.g., Yuan and Ishii (2021, 2023); Yu et al. (2022). Meanwhile, numerous formation control and reliable broadcast problems require agents to reach consensus on a predetermined reference value, which may lie inside or outside that convex hull (Bullo et al.
⋆ This work was supported in part by the National Natural Science Foundation of China under Grant 62403188 and in part by JSPS under Grants-in-Aid for Scientific Research Grant No. 22H01508 and 24K00844. The material in this paper was not presented at any conference.
Email addresses: yuanliwei@hnu.edu.cn (Liwei Yuan), hideaki_ishii@ipc.i.u-tokyo.ac.jp (Hideaki Ishii).
(2009)). Furthermore, in certain formation control applications where the reference value is time-varying (Cao et al. (2009); Zegers et al. (2022)), achieving consensus on this dynamic value over time is particularly advantageous; such applications include distributed target tracking performed by multiple unmanned aerial vehicles (UAVs) in outdoor environments (Hassanalian and Abdelkefi (2017)). Therefore, this motivates our development of resilient algorithms for these requirements.
Previous works have examined fault-free leader-follower consensus, where followers agree on the reference value of a leader (Dimarogonas et al. (2009)). Moreover, for MASs with adversaries, multiple works have investigated related problems of reliable broadcast (Koo et al. (2006)) and the certified propagation algorithm (CPA) (Koo (2004); Tseng et al. (2015)); they aim for a secure leader to broadcast a reference value to all normal nodes in the network. Additionally, several works have investigat-
ed a related problem called resilient distributed estimation (e.g., LeBlanc and Hassan (2014)). Relevantly, Mitra and Sundaram (2019) explored a problem in which observation information of a system is resiliently transmitted from a group of source nodes to other nodes that cannot directly observe the system. Overall, these reliable broadcast and distributed estimation methods are not applicable to tracking arbitrary dynamic values.
Preprint submitted to Automatica 25 November 2025
arXiv:2511.19327v1 [cs.MA] 24 Nov 2025

In this paper, we study resilient dynamic leader-follower consensus in a directed network with adversaries, where normal followers track the time-varying reference value of the leader. Extensive works have utilized the so-called mean subsequence reduced (MSR) algorithms to tackle leaderless resilient consensus and have established tight conditions on graph structures for MSR algorithms to succeed, e.g., Vaidya et al. (2012); LeBlanc et al. (2013). Later, Usevitch and Panagou (2020) have proved a -
sufficient condition for the sliding weighted-MSR (SW-MSR) algorithm (Saldana et al. (2017)) to achieve resilient leader-follower consensus to arbitrary static reference values. Subsequently, in our recent work (Yuan and Ishii (2024)), we proposed a necessary and sufficient condition for the same problem. Note that it could be difficult to apply these methods for tracking a time-varying reference due to large tracking errors in this situation. On the other hand, Rezaee et al. (2021) studied resili-
ent leader-follower consensus to dynamic reference values in directed networks with relatively small tracking errors. Moreover, Zegers et al. (2022) proposed a method for normal followers to detect adversarial neighbors and track a time-varying reference value of the trustworthy leader, but it is limited to undirected networks and requires an upper bound on the leader’s value. Recently, for leaderless resilient consensus, the introduction of multi-hop relays has relaxed the stringent graph connect-
ivity requirements in Khan et al. (2019); Yuan and Ishii (2023, 2025); it enables messages of an agent to be relayed to further destinations by intermediate agents.
The contributions of this paper are summarized as follows. First, we propose two novel algorithms based on the multi-hop weighted MSR (MW-MSR) algorithm (Yuan and Ishii (2025)) to tackle resilient dynamic leader-follower consensus in first-order and second-order MASs with directed topologies, respectively. We characterize a necessary and sufficient graph condition for our algorithms to succeed under adversarial Byzantine agents. It is notable that even with one-hop communication, our condition is -
tighter than the ones in the related works with static reference values (Usevitch and Panagou (2020)) and dynamic reference values (Rezaee et al. (2021)). Besides, by introducing multi-hop relays, our method can increase the network robustness against adversaries without changing the topology. As a result, our approach can tolerate more adversarial nodes compared to the one-hop MSR algorithms (Usevitch and Panagou (2020); Rezaee et al. (2021)) and the CPA works (Koo (2004); Tseng et al. (2015)).
We emphasize that the extension to second-order MASs is crucial since for agents in robotics, second-order dynamics can describe their motions more precisely; see, e.g., Paranjape et al. (2018). To the best of our knowledge, this case has not been investigated in the literature. It is worth noting that compared to Rezaee et al. (2021), our approaches have smaller consensus error bounds. Be
sides, we allow the leader’s value to be arbitrary as long as its velocity is bounded. We also provide an analysis for resilient dynamic leader-follower consensus with insecure leaders, which is closely related to our main results. Lastly, numerical examples show our algorithms’ potential for strengthening the security of formation control.
The rest of this paper is organized as follows. Section 2 outlines the problem settings. Section 3 defines our graph notion. Section 4 analyzes the convergence of our method. Section 5 presents another algorithm for second-order MASs. Section 6 presents numerical examples to verify the efficacy of our algorithms. Section 7 concludes the paper.
2 Preliminaries and Problem Settings
2.1 Graph Notions
Consider a digraph G = (V, E) consisting of the node set V = {1, ..., n − 1, d} and the edge set E. The edge (j, i) ∈ E indicates that node i can get information from node j. The subgraph of G induced by the node set H ⊂ V is GH = (H, E(H)), where E(H) = {(i, j) ∈ E :
i, j ∈ H}. An l-hop path (l ∈ Z>0) from source node i1 to destination node il+1 is a sequence of distinct nodes (i1, i2, . . . , il+1), where (ij, ij+1) ∈ E for j = 1, . . . , l. Let N l−
i be the set of nodes that can reach node i via
paths of at most l hops. Let N l+
i be the set of nodes that
are reachable from node i via paths of at most l hops. Node i is included in both sets above. For the l-th power of G, denoted by Gl, it contains the node set V and its adjacency matrix A = [aij] is given by α ≤ aij < 1 if j ∈ N l−
i and aij = 0 otherwise, where α > 0 is a con
stant. Denote by |S| the cardinality of a finite set S.
In this paper, sgn(·) denotes the sign function. For a fixed parameter ε ∈ R>0, satε(·) is the saturation function defined for a scalar x:
satε(x) =


1, x > ε, x/ε, −ε ≤ x ≤ ε, −1, x < −ε.
(1)
Next, we describe our communication model. We represent a message as a tuple m = (w, P ), where w = value(m) ∈ R is the message content and P = path(m) indicates the path via which m is transmitted. At time k ≥ 0, each normal node i exchanges the messages mij[k] = (xi[k], Pij[k]) consisting of its state xi[k] ∈ R along each path Pij[k] with its multi-hop neighbor j via the relaying process in Yuan and Ishii (2025). Denote by V(P ) the set of nodes in P .
2

2.2 System Model and Resilient Algorithm
Consider the leader-follower MAS modeled by the digraph G = (V, E), where V consists of one leader agent d and the set of follower agents W with d ∈/ W and {d} ∪ W = V. The leader d propagates a dynamic reference value to followers in W, and thereafter, followers achieve consensus on that reference value. However, if adversarial agents are present, they may prevent normal followers from achieving the objective.
In the literature (Usevitch and Panagou (2020); Rezaee et al. (2021)), leader agents have been categorized into four cases depending on if they are secure or not, and if they are known to followers or not. In this paper, we focus on the case where leader agents are secure and known to direct neighbor followers. In this case, if all secure leaders broadcast the same reference value, they can be viewed as one secure leader; 1 thus, in Assumption 1, we study a secure leader that is known to followers-
 as Rezaee et al. (2021) did. Moreover, we will extend our analysis for the other three cases in Section 5.2.
Next, we describe our system under attacks. Denote the set of adversarial agents by A ⊂ W and denote the set of normal agents by N = V \ A. The formal definition of adversarial agents is given later. Then, the set of normal follower agents is denoted by WN = W ∩ N . Besides, {d} ∪ WN = N holds under Assumption 1. Denote the set of direct followers by Wd = {i ∈ W : (d, i) ∈ E}.
Assumption 1 The leader agent d is secure, i.e., d ∈ N . Moreover, the direct followers in Wd know the node index of the secure leader agent d.
At each time k, the leader d updates its state xd[k] ∈ R according to its dynamics with bounded inputs and propagates xd[k] to followers. The leader’s dynamics will be given in Section 4 for the first-order type and Section 5 for the second-order type. We assume that the leader’s value changing rate (or speed) is bounded as follows. Let T be the sampling period of the system.
Assumption 2 The value changing rate vd[k] of leader d is bounded, i.e., |vd[k]| = |xd[k + 1] − xd[k]|/T ≤ vd, ∀k ≥ 0, where vd is a positive constant and is known to all followers in W.
Then, we define our first resilient dynamic leaderfollower consensus problem in this paper, which is also studied in Rezaee et al. (2021).
1 When secure leaders broadcast different reference values, leader-follower consensus cannot be achieved for the whole MAS including all leaders as leaders usually are not affected by others during the consensus process; see also Ren (2007); Usevitch and Panagou (2020); Rezaee et al. (2021).
Problem 1 Design a distributed control strategy such that the normal agents in N reach resilient dynamic leader-follower consensus, i.e., for any possible sets and behaviors of the adversaries in A and any state values of the normal agents in N , the following condition is satisfied for a given error bound ε > 0:
∃ k < ∞ s.t. |xi[k] − xd[k]| ≤ ε, ∀i ∈ N , ∀k ≥ k. (2)
Next, we introduce the multi-hop weighted MSR (MWMSR) algorithm from Yuan and Ishii (2025) in Algorithm 1, which is employed in our resilient dynamic leader-follower consensus protocols. The notion of minimum message cover (MMC) is crucial in Algorithm 1.
Definition 1 For a graph G = (V, E), let M be a set of messages transmitted through G, and let P(M) be the set of message paths of all the messages in M, i.e., P(M) = {path(m) : m ∈ M}. A message cover of M is a set of nodes T (M) ⊂ V whose removal disconnects all message paths, i.e., for each path P ∈ P(M), we have V(P ) ∩ T (M) ̸= ∅. In particular, an MMC of M is defined by
T ∗(M) ∈ arg min
T (M): Cover of M |T (M)| .
In Algorithm 1, normal node i can remove the largest and smallest values from exactly f nodes located no more than l hops away. With multi-hop relays, it requires the MMC to determine the number of such extreme values. See Yuan and Ishii (2025) for more details of Algorithm 1. As we will present later, Algorithm 1 is able to enhance the network robustness using small relay hops l, where one can calculate the MMC in polynomial time. Hence, compared to the one-hop algorithms (Usevitch and Panagou (2-
020); Rezaee et al. (2021)), Algorithm 1 is slightly more computationally complex.
2.3 Adversary Model
We introduce our adversary models (Vaidya et al. (2012); LeBlanc et al. (2013); Yuan and Ishii (2025)).
Definition 2 (f -local set) The adversary set A is said to
be f -local (in l-hop neighbors) if ∣∣N l−
i ∩ A∣∣ ≤ f, ∀i ∈ N .
Definition 3 (Byzantine nodes) An adversary node i ∈ A is said to be Byzantine if it arbitrarily changes its state/relayed values and sends different state/relayed values to its neighbors at each time.
Byzantine agents are often used to characterize misbehaviors of adversarial agents in point-to-point networks (Lynch (1996); Vaidya et al. (2012)). In contrast, the so-called malicious agents are limited to send the same false information to neighbors and they form a suitable model for broadcast networks (Goldsmith (2005)).
3

Algorithm 1 MW-MSR Algorithm
Input: Node i knows xi[0], N l−
i , N l+
i.
At each time k, for ∀i ∈ N : 1) Exchange messages:
Send mij[k] = (xi[k], Pij[k]) to ∀j ∈ N l+
i.
Receive mji[k] = (xj[k], Pji[k]) from ∀j ∈ N l−
i and
store them in the set Mi[k]. Sort Mi[k] in an increasing order based on the message values (i.e., xj[k] in mji[k]). 2) Remove extreme values: (a) Define two subsets of Mi[k]:
Mi[k] = {m ∈ Mi[k] : value(m) > xi[k]},
Mi[k] = {m ∈ Mi[k] : value(m) < xi[k]}.
(b) Get Ri[k] from Mi[k]:
if ∣∣T ∗(Mi[k])∣∣ < f then
Ri[k] = Mi[k]; else
Choose Ri[k] s.t. (i) ∀m ∈ Mi[k] \ Ri[k], ∀m′ ∈
Ri[k], value(m) ≤ value(m′) and (ii) ∣∣T ∗(Ri[k])∣∣ = f. end if
(c) Get Ri[k] from Mi[k] similarly, which contains
smallest message values. (d) Ri[k] = Ri[k] ∪ Ri[k].
3) Update:
φi[k] =
∑
m∈Mi [k]\Ri [k]
(xi[k] − value(m)). (3)
Output: φi[k].
Assumption 3 Each normal node i ∈ N knows the f local adversary model and the topology information of its neighbors up to l hops, i.e., the paths from/to any neighbor j ∈ N l−
i ∪ N l+
i.
As is standard in Lynch (1996); Su and Vaidya (2017); Yuan and Ishii (2025), we assume that normal nodes know the upper limit on the number of adversaries and neighbors’ topology information. Note that we consider finite (typically small) relay hops l, and thus, Assumption 3 is more relaxed than the ones requiring each normal node to know the entire network topology in, e.g., Tseng et al. (2015); Khan et al. (2019).
Lastly, we introduce Assumption 4 from Su and Vaidya (2017); Yuan and Ishii (2025) merely for ease of analysis. In fact, manipulating message paths can be easily detected and such detection can be handled parallel to the case of manipulating message values. Related discussions have been presented in Yuan and Ishii (2025).
Assumption 4 Each node i ∈ A can manipulate its state xi[k] and the values in messages that they send or relay, but cannot change the path P in such messages.
3 Robust Following Graphs
In this section, we present the notion of robust following graphs enabling our algorithms to achieve resilient dynamic leader-follower consensus in directed networks.
We start with the definition of r-reachable followers; it characterizes the local graph structure for a node i ∈ S to be affected by the normal nodes outside S when node i applies Algorithm 1.
Definition 4 (r-reachable followers) Consider the graph G = (V, E) with l-hop communication. For r ∈ Z>0 and a nonempty set S ⊂ V, we say that a node i ∈ S is an r-reachable follower with l hops if it holds that
|I l
i,S | ≥ r,
where Il
i,S is the set of independent paths 2 to node i of
at most l hops originating from nodes outside S.
Then, we are ready to define r-robust following graphs with l hops as follows. Since normal direct followers know the node index of the secure leader, we need to focus only on the graph structure excluding the leader.
Definition 5 (r-robust following graphs) Consider the graph G = (V, E) with a secure leader d ∈ V and a set of followers W = V \ {d}. Let set F ⊂ W and denote by GH
the subgraph of G induced by node set H = W \ F . G is said to be an r-robust following graph with l hops (under the f -local model) if for any f -local set F, the subgraph GH satisfies that for every nonempty subset S ⊆ H \ Wd,
the following condition holds:
|Z r
S | ≥ 1, (4)
where Zr
S = {i ∈ S : |Il
i,S | ≥ r}. Moreover, if Wd = W,
we also say G is an r-robust following graph with l hops, where r ≤ |W| = n − 1.
We emphasize that for Definition 5, the graph robustness increases as the relay range l increases; this is because |I l
i,S | increases as l grows. Next, we illustrate this idea
using the graphs in Figs. 1 and 2.
Example 1 Consider the graph in Fig. 1(a). It is not a 2-robust following graph with 1 hop under the 1-local model. For example, after removing the node set F = {5}, in the subgraph GH, the set S = {1, 2, 3, 6} does not sat
isfy (4); i.e., Z2
S = ∅ when l = 1. In fact, for this network
to be a 2-robust following graph with 1 hop, four edges should be added as shown in Fig. 1(b). Alternatively, we could increase the network robustness by increasing the relay range. For example, when l = 2, for node sets
2 Note that only node i is common in these paths.
4

(a) (b)
Fig. 1. (a) The graph is not a 2-robust following graph with 1 hop but is a 2-robust following graph with 2 hops under the 1-local model. (b) The graph is a 2-robust following graph with 1 hop under the 1-local model.
F = {5} and S = {1, 2, 3, 6}, node 2 has 2 independent paths originating from nodes outside S, i.e., (4) is met. Lastly, this graph can be verified to be a 2-robust following graph with 2 hops under the 1-local model; it needs to check all the combinations of node subsets.
Example 2 Consider the larger graph in Fig. 2. It is not a 3-robust following graph with 1 hop under the 2-local model. Notice that by selecting the set F = {8, 9}, in the subgraph GH with H = W \ F , the set S = H \ Wd does
not meet (4) when l = 1 since none of the nodes has 3 inneighbors outside S. Meanwhile, when l = 3, for the same sets F and S, (4) is satisfied as node 2 has 3 independent paths originating from nodes outside S. By checking all the combinations, we can conclude that it is a 3-robust following graph with 3 hops under the 2-local model.
Remark 1 We compare the notion of robust following graphs with that of robustness with l hops, which is the basis of tight graph conditions guaranteeing leaderless resilient consensus under the malicious model (LeBlanc et al. (2013); Yuan and Ishii (2025)) and the Byzantine model (Yuan and Ishii (2023)). The notion of rrobustness with l hops requires that for any two nonempty disjoint node sets V1, V2 ⊂ V, at least one set includes an r-reachable node (similar to Definition 4). In contrast, robust-
 following graphs are defined using one set S ⊆ H \ Wd. This distinction arises from the nature of the two problems. Specifically, leaderless consensus aims at reaching consensus on a value that is not predetermined. Thus, the normal nodes in V1 (or V2) either influence or are influenced by those outside the set. Hence, two node sets are necessary for characterizing such potentially bidirectional information flows. However, the leader-follower case requires followers to track the leader’s value. C-
onsequently, it is necessary that the followers in each set S are influenced by the normal nodes outside S via sufficient independent paths.
Recently, Zegers et al. (2022) studied dynamic leaderfollower consensus. Their approach requires that the undirected normal network 3 is connected. It is worth
3 For a network G = (V, E), the normal network is the sub
Fig. 2. The graph is not a 3-robust following graph with 1 hop but is a 3-robust following graph with 3 hops under the 2-local model.
noting that we can obtain a tighter graph condition defined on the normal network for our leader-follower problem; the condition is that GN satisfies the property
presented in Definition 5 instead of GH there. In fact, if
G is an r-robust following graph with l hops under the f -local model, then GN is guaranteed to satisfy that
property. However, the graph condition on the normal network cannot be verified prior to the deployment of the algorithm. Thus, we define our condition on the original network topology G as in the works (Vaidya et al. (2012); Su and Vaidya (2017); Yuan and Ishii (2025)).
We further note that our results can be extended to the following two situations: (i) The edge set E of G varies in finite time; (ii) the f -local adversary set A varies in finite time (e.g., an agent may be attacked for a finite time). For example, a sufficient condition for handling the two cases is that G satisfies Definition 5 at each time and G is fixed when k → ∞. This condition also guarantees that GN satisfies the property in Definition 5.
4 Resilient Dynamic Leader-Follower Consensus in First-Order MASs
In this section, we consider first-order MASs with agents in V having first-order dynamics.
We denote by ei[k] = xi[k] − xd[k] the leader-follower consensus error of agent i ∈ V at time k. Then, the objective in Problem 1 is transformed into developing a resilient control strategy such that ∀i ∈ WN , ei[k] converges toward zero with ultimately bounded errors.
We introduce our first-order system model under attacks. The leader d propagates its value xd[k] to the direct followers in Wd at each time k, which is updated as
xd[k + 1] = xd[k] + T ud[k], (5)
graph induced by normal nodes, denoted by GN = (N , EN ).
5

where ud[k] = vd[k] is the bounded input with known bound (in Assumption 2) at time k.
Each follower agent i ∈ W applies a control rule consisting of its neighbors’ values to make updates by
xi[k + 1] = xi[k] + T ui[k] + T σi[k], (6)
where xi[k] and σi[k] represent, respectively, the state and the bounded external disturbance with known bound σi as |σi[k]| ≤ σi at each time k. Moreover, the control input ui[k] is given as
ui[k] = −γi[k]φi[k] − θisatε(φi[k]), ∀i ∈ WN . (7)
Here, γi[k] = αi/ ∑n
j=1 aij [k], and θi, ε ∈ R>0. Moreover, φi[k] is from (3) in Algorithm 1 and is rewritten as
φi[k] =
∑n
j=1
aij[k](xi[k] − xj[k]), (8)
where aij[k] > 0 if mji[k] ∈ Mi[k]\Ri[k], and aij[k] = 0 otherwise. Note that the parameter θi in (7) is designed to compensate the velocity of the leader. If the control input does not contain such a term (e.g., Usevitch and Panagou (2020); Yuan and Ishii (2024)), it could be difficult for followers to track the leader’s dynamic value, i.e., the consensus error would be large. See Ren (2007) for related discussions on the performance of fault-free consensus protocols without the term for compensa-
ting leader’s velocity. However, the control inputs of adversary nodes in A are arbitrary and may deviate from (7).
For the parameters in (7) and T , we assume
vd + σi < θi, (9)
vd + σi + θi ≤ 2 − 2αiT
T ε. (10)
Update Rule 1 At each time k ≥ 0, each normal direct follower j ∈ Wd ∩ N updates its value as φj[k] = xj[k] − xd[k] and then follows (6) with (7). Moreover, each normal non-direct follower i ∈ WN \Wd updates its φi[k] according to Algorithm 1, and follows (6) with (7).
4.1 Convergence Analysis
The following theorem states a necessary and sufficient condition for directed networks using Update Rule 1 to achieve resilient dynamic leader-follower consensus.
Let N = |WN |. The consensus error bound is given by
ε=
N ∑
h=1
εh, (11)
where ε1 = ε and εh = ε + ∑h−1
q=1 qεq, h = 2, . . . , N .
Equivalently, εh = hεh−1, h = 2, . . . , N .
Theorem 1 Consider the network G = (V, E) with lhop communication, where each normal follower node i ∈ WN updates its value according to Update Rule 1. Under Assumptions 1–4 and the f -local Byzantine set A, resilient dynamic leader-follower consensus is achieved as in (2) with consensus error bound ε in (11) if and only if G is an (f + 1)-robust following graph with l hops.
Proof: (Necessity) If G is not an (f +1)-robust following graph with l hops, then by Definition 5, there exists an f -local set F such that GH does not satisfy the condition
there. Suppose that F is exactly the set of Byzantine agents A. Then in the normal network GN = (N , EN ),
there must be a nonempty subset S ⊆ WN \ Wd such that Zf+1
S = ∅. It further means that
|I l
i,S | ≤ f, ∀i ∈ S. (12)
Suppose that xi[0] = a, ∀i ∈ S, and xj[0] = xd[0], ∀j ∈ N \ S, where a < xd[0] is a constant and the leader d increases its value xd[k] as time evolves. Moreover, suppose that all Byzantine nodes send a and xd[k] to the nodes in S and N \ S, respectively, at each time k. For normal node i ∈ S, (12) indicates that the cardinality of the MMC of the values larger than its own value (i.e., values from the normal nodes outside of S) is at most f . These values are disregarded by Algorithm 1. Moreover, -
since the Byzantine nodes send a to node i, it will use these values. Thus, node i will keep its value a at all times and the leader will have an increasing value, i.e., the dynamic leader-follower consensus cannot be achieved.
(Sufficiency) Recall that N = {d}∪WN and |WN | = N . Sort ei[k], i ∈ N , from the smallest to the largest values and rename them as δ1[k], δ2[k], . . . , δN+1[k] with
δ1[k] ≤ δ2[k] ≤ · · · ≤ δN+1[k].
Define the following two sets for h = 1, 2, . . . , N + 1:
Zh(k) = {δN+2−h[k], . . . , δN [k], δN+1[k]},
Zh(k) = {δ1[k], δ2[k], . . . , δh[k]}.
At any time k ≥ 0 and for h = 1, 2, . . . , N + 1, the following node sets are defined as
X h(k) = {i ∈ N : ei[k] ∈ Zh(k)},
X h(k) = {i ∈ N : ei[k] ∈ Zh(k)}. (13)
Since ei[k] = xi[k]−xd[k], i ∈ W, and ed[k] = 0, one gets δ1[k] ≤ 0 and δN+1[k] ≥ 0. Therefore, if δ1[k] = δN+1[k], one obtains δ1[k] = δN+1[k] = 0, indicating that all the normal followers successfully track the leader.
6

In what follows, we analyze the behaviors of the normal followers in three steps when δ1[k] ̸= δN+1[k]. First, we present equations describing the evolution of consensus errors. Second, we show that δN+1[k] − δN [k] and δ2[k]−δ1[k] are uniformly ultimately bounded. Third, we show by induction that δN+1[k] and δ1[k] are uniformly ultimately bounded, which leads us to (2) and (11).
Step 1: From (6) and (7), ∀i ∈ WN , we have
xi[k + 1] − xi[k]
T = −γi[k]φi[k] − θisatε(φi[k]) + σi[k].
(14)
It further follows that
ei[k + 1] − ei[k]
T = −γi[k]φi[k] − θisatε(φi[k]) + σi[k]
− xd[k + 1] − xd[k]
T , (15)
where φi[k] is from (8) and can be rewritten as
φi[k] =
∑n
j=1
aij[k](ei[k] − ej[k]). (16)
For the saturation function in (1), when |φi[k]| > ε, it holds that satε(φi[k]) = sgn(φi[k]). Moreover, since σi[k] and |xd[k + 1] − xd[k]|/T are bounded, there exists a bounded number ηi[k] such that (15) can be rewritten as
ei[k + 1] − ei[k]
T = −γi[k]φi[k] − ηi[k]satε(φi[k]). (17)
Since satε(φi[k]) = sgn(φi[k]), when both σi[k] and −(xd[k + 1] − xd[k]) in (15) have the inverse sign as φi[k], we have ηi[k] = θi + |xd[k + 1] − xd[k]|/T + |σi[k]|, and when both σi[k] and −(xd[k + 1] − xd[k]) have the same sign as φi[k], one gets ηi[k] = θi − |xd[k + 1] − xd[k]|/T − |σi[k]| > 0 by (9). Thus, at each time k, the two values are the possible maximum and minimum values of ηi[k]. Thus, ηi[k] satisfies
0 < θi − sup
k′ ≥0
{ |xd[k′ + 1] − xd[k′]|
T + |σi[k′]|
}
≤ ηi[k]
≤ θi + sup
k′ ≥0
{ |xd[k′ + 1] − xd[k′]|
T + |σi[k′]|
}
. (18)
Step 2: Since δ1[k] ̸= δN+1[k], at least one normal fol
lower i ∈ WN with ei[k] ̸= 0 satisfies
i ∈X 1(k) and d ∈/ X 1(k),
or i ∈X 1(k) and d ∈/ X 1(k). (19)
There are two cases for such normal followers. The first case is ∃j ∈ Wd satisfying (19), and the second case is ∄j ∈ Wd satisfying (19). They are analyzed separately:
(i) ∃j ∈ Wd satisfying (19): According to the definition of Wd and Update Rule 1, there must exist a normal
follower i ∈ WN either in X 1(k) or X 1(k) which makes
an update using a value from the normal nodes outside the set to which it belongs.
(ii) ∄j ∈ Wd satisfying (19): In this case, since G is an (f + 1)-robust following graph with l hops and the adversarial set A is an f -local set, the normal network GN = (N , EN ) must satisfy that for every nonempty
subset S ⊆ WN \ Wd, the following condition holds:
|Z f +1
S | = |{i ∈ S : |Il
i,S | ≥ f + 1}| ≥ 1.
Hence, for nonempty node set X 1(k) or X 1(k) in GN ,
there exists a normal follower i such that
|I l
i,X 1(k)| ≥ f + 1, if i ∈ X 1(k),
|I l
i,X 1(k)| ≥ f + 1, if i ∈ X 1(k).
Therefore, there must exist a normal follower i ∈ WN either in X 1(k) or X 1(k) which makes an update using
a value from the normal nodes outside the set to which it belongs. This can be seen from step 2 of the MWMSR algorithm where node i can only remove smaller or larger values from at most f nodes.
According to (13), if i ∈ X 1(k) or i ∈ X 1(k), then it
holds that ei[k] = δN+1[k] or ei[k] = δ1[k], respectively. In this condition, the following situations can happen, respectively, when |X 1(k)| = 1 if i ∈ X 1(k) and when |X 1(k)| = 1 if i ∈ X 1(k):
δN+1[k] − δN [k] > ε1, if i ∈ X 1(k), δ2[k] − δ1[k] > ε1, if i ∈ X 1(k). (20)
Moreover, we have known that there is a normal follower i either in X 1(k) or X 1(k) which makes an up
date using a value from the normal nodes outside the set to which it belongs. Thus, under (20), we can conclude that the distance of ei[k] from the closest normal ej[k], is larger than ε1. Moreover, since A is f -local, any adversarial neighbor with consensus error outside the interval [δ1[k], δN+1[k]] will be disregarded by the MW-MSR algorithm. Therefore, according to (16) and (20), for any possible aij[k] ≥ 0 used in (16), we have
φi[k] > ε, if i ∈ X 1(k), φi[k] < −ε, if i ∈ X 1(k). (21)
Since |φi[k]| > ε, we further have satε(φi[k]) = sgn(φi[k]). Then, from (19) and (21), it holds that
satε(φi[k]) = sgn(φi[k]) = sgn(ei[k]).
7

Now, for |φi[k]| > ε, we consider the following Lyapunov candidate:
Vi[k] = e2
i [k]. (22)
It further implies
∆Vi[k] = Vi[k + 1] − Vi[k] = (ei[k + 1] + ei[k])(ei[k + 1] − ei[k]) = (2ei[k] − γi[k]φi[k]T − ηi[k]satε(φi[k])T ) × (ei[k + 1] − ei[k]).
Notice from (17) that sgn(ei[k]) = −sgn(ei[k+1]−ei[k]). Therefore, in the following, we will show that
sgn (2ei[k] − γi[k]φi[k]T − ηi[k]satε(φi[k])T ) = sgn(ei[k]). (23)
To this end, it is equivalent to show that
|2ei[k]| ≥ |γi[k]φi[k]|T + |ηi[k]|T.
Suppose |δN+1[k]| ≥ |δ1[k]|, then consider i ∈ X 1(k). We can observe that |γi[k]φi[k]| ≤ 2αi|ei[k]|. Thus, we need
0 < |ηi[k]| < 2 − 2αiT
T |ei[k]|.
Moreover, since i ∈ X 1(k), it must hold that |ei[k]| > ε. Thus, by (10) and (18), we have
0 < |ηi[k]| < 2 − 2αiT
T ε, (24)
and then we can obtain
∆Vi[k] = Vi[k + 1] − Vi[k] < 0. (25)
Similarly, if |δN+1[k]| ≤ |δ1[k]|, then consider i ∈ X 1(k),
and (25) follows.
Therefore, while |φi[k]| > ε, Vi[k] is decreasing. Thus, in a finite time, we should have
δN+1[k] − δN [k] ≤ ε1, if i ∈ X 1(k), δ2[k] − δ1[k] ≤ ε1, if i ∈ X 1(k). (26)
Also, if we do not encounter (20), we have (26) directly.
Step 3: When δN+1[k] ̸= δ1[k], at least one of the normal followers with nonzero consensus error belongs to X 1(k) or X 1(k) and
X 1(k) ⊆ X h(k),
X 1(k) ⊆ X h(k), h = 2, . . . , N + 1. (27)
Then, in X h(k) or X h(k), there exists at least one normal follower i ∈ WN with ei[k] ̸= 0. Thus, if d ∈/ X h(k) ∩ X h(k), we consider normal followers i where
i ∈X h(k) and d ∈/ X h(k),
or i ∈X h(k) and d ∈/ X h(k). (28)
Since G is an (f + 1)-robust following graph with l hops, there is at least one node in X h(k) or X h(k) which makes
an update using at least one value from the normal nodes outside the set to which it belongs. Thus, the following situations can happen, respectively, when |X h(k)| = h if i ∈ X h(k) and when |X h(k)| = h if i ∈ X h(k):
δN+2−h[k] − δN+1−h[k] > εh, if i ∈ X h(k), δh+1[k] − δh[k] > εh, if i ∈ X h(k). (29)
Here, we discuss why (29) can happen. Because of the ultimate error bounds obtained in steps 1 to h − 1 (i.e., ε1, ε2, . . . , εh−1) and by the definition of εh, for a finite
step h, we can obtain
δN+2−h[k] − δN+1−h[k] > h−1
∑
j=1
(δN+2−j [k] − δN+1−h[k]) + ε, if i ∈ X h(k),
δh+1[k] − δh[k] >
h−1
∑
j=1
(δh[k] − δj[k]) + ε, if i ∈ X h(k).
This implies that if i ∈ X h(k) and d ∈/ X h(k), the dis
tance of the consensus error δh[k] from the error δh+1[k] is larger than the summation of its distances from all the possible smaller errors inside X h(k) plus ε. The discussion is similar when i ∈ X h(k) and d ∈/ X h(k). Thus, we have proved that the situations in (29) can hold for the two cases in (28), respectively.
Moreover, normal followers using the MW-MSR algorithm will discard the values with consensus errors outside the interval [δ1[k], δN+1[k]]. Hence, from (16) and the fact that at least one normal follower in X h(k) or X h(k) updates its value using at least one value from the
normal node outside the set to which it belongs, we have
φi[k] > ε, if i ∈ X h(k), φi[k] < −ε, if i ∈ X h(k). (30)
Since |φi[k]| > ε, we have satε(φi[k]) = sgn(φi[k]). Then, from (28) and (30), it holds that
satε(φi[k]) = sgn(φi[k]) = sgn(ei[k]).
Furthermore, using the Lyapunov candidate Vi[k] in (22), we have ∆Vi[k] as in (25) by the reasoning similar to that in Step 2. As a result, while |φi[k]| > ε, Vi[k] is
8

decreasing and the convergence is in a finite time. By considering the ultimate error bounds obtained in steps 1 to h − 1, for step h ≥ 1, the following should hold in a finite time:
δN+2−h[k] − δN+1−h[k] ≤ εh, if i ∈ X h(k), δh+1[k] − δh[k] ≤ εh, if i ∈ X h(k). (31)
Finally, if there exists a step 1 < h ≤ N + 1 such that d ∈ X h(k) ∩ X h(k); then, from (31), it holds that
|xi[k] − xd[k]| ≤
h−1
∑
j=1
εj, ∀i ∈ WN .
As the maximum of h such that d ∈ X h(k) ∩ X h(k) is
N + 1, we obtain the error bound in (11). The proof is complete. ■
For the spacial case where all followers are direct followers, i.e., Wd = W, we could obtain a smaller consensus error bound, as stated in the following lemma.
Lemma 1 Consider the network G = (V, E) with the problem settings and assumptions in Theorem 1. Resilient dynamic leader-follower consensus is achieved as in (2) with consensus error bound εd1 = max{ T
2−αiT ηi[k], ε}
if all followers are in Wd, i.e., Wd = W.
Proof: For any node i ∈ WN ⊆ Wd, if ei[k] > ε, then φi[k] = ei[k] > ε and γi[k] = αi. We further have
∆Vi[k] = (2ei[k] − γi[k]φi[k]T − ηi[k]satε(φi[k])T ) × (ei[k + 1] − ei[k]) = (2ei[k] − ei[k]αiT − ηi[k]sgn(ei[k])T ) × (ei[k + 1] − ei[k])
Thus, if it holds that αiT < 2 and
sgn (2ei[k] − ei[k]αiT − ηi[k]sgn(ei[k])T ) = sgn(ei[k]),
then by following a similar analysis, we have ∆Vi[k] < 0. Therefore, when
|ei[k]| ≥ T
2 − αiT ηi[k],
we have ∆Vi[k] < 0, and ei[k] will decrease until ei[k] ≤ ε if ε ≥ T
2−αiT ηi[k]. The situation is similar when ei[k] <
−ε. Therefore, we conclude that in a finite time, we have
|ei[k]| ≤ max
{T
2 − αiT ηi[k], ε
}
= εd1, ∀i ∈ WN ⊆ Wd.
■
Remark 2 Note that when T is small, we could get a smaller bound for consensus errors of normal followers in Wd if T
2−αiT ηi[k] < ε. Furthermore, when |Wd ∩N | < N ,
we could have a smaller consensus error bound ε1 < ε in (11) for Theorem 1. It is given by
ε1 =
N −|Wd∩N |
∑
h=1
εh + max
{T
2 − αiT ηi[k], ε
}
. (32)
One can observe that the error bound in (11) is conservative as it is proportional to the number of normal followers N ; a similar bound is also reported in Rezaee et al. (2021). Our analysis can obtain a smaller error bound in (32) as it is proportional to the number of normal non-direct followers N − |Wd ∩ N |. Part of the reason for the conservatism is that the error will increase by εh using the MSR algorithms for each layer of normal followers (see Step 3 in the proof of Theorem 1); it furthe-
r accumulates over multiple layers of normal followers. Moreover, because of the above reason, we can obtain consensus errors that are further smaller than the bound in (32) for general networks, as the number of layers w.r.t. the leader will decrease with multi-hop relays. Lastly, we note that even for the fault-free discrete-time dynamic leader-follower consensus (Cao et al. (2009)), the consensus error cannot approach zero unless T → 0. In our results, the consensus error can approach zero if T-
 and ε are properly chosen such that (10) is satisfied.
It is notable that our graph condition in Theorem 1 is both necessary and sufficient for our algorithm to solve Problem 1. In fact, even for the one-hop case, it is tighter than the one in Rezaee et al. (2021) as shown next in Lemma 2. In particular, Rezaee et al. (2021) have derived a sufficient graph condition for a modified W-MSR algorithm, that is, G is a (2f + 1)-robust leader-follower graph. It requires |Wd| ≥ 2f + 1 and any nonempty set S ⊆ W \ Wd is (2f + 1)-reachable, i.e., ∃i ∈ S s.t.
|N 1−
i \ S| ≥ 2f + 1. The difference between the two con
ditions is shown in the next lemma, whose proof can be found in Yuan and Ishii (2024).
Lemma 2 If G is a (2f +1)-robust leader-follower graph, then G is an (f + 1)-robust following graph with 1 hop, and the converse does not hold.
Remark 3 We compare our graph condition with the ones in related works. With one-hop communication (i.e., no relays), our condition in Theorem 1 is equivalent to the necessary and sufficient condition for the CPA to succeed (Tseng et al. (2015)). Moreover, our condition with 1 hop is tighter than the sufficient conditions in Usevitch and Panagou (2020); Rezaee et al. (2021) studying resilient leader-follower consensus as discussed above. Besides, for the multi-hop case, our condition with l ≥ 2 ho-
ps is even tighter than the conditions in related works (Usevitch and Panagou (2020); Rezaee et al. (2021); Tseng
9

et al. (2015)). The reason is that the graph robustness generally increases (and definitely does not decrease) as the relay range l increases. Hence, without changing the network topology, our methods can tolerate more adversaries; see, e.g., the simulations in Section 6.
Next, we explain the reasons why our approach has a tighter graph condition. First, for the one-hop case, by Theorem 1, our condition is necessary for MSR-based algorithms to achieve leader-follower consensus. Here, we show the gap between the condition in Rezaee et al. (2021) and ours using the graph in Fig. 1(b). Let A = {5} and S = {1, 2, 3}, which does not meet the condition in Rezaee et al. (2021). However, node 2 in S can still move towards the reference when its error becomes the smallest (-
or largest) one in N . Then, it removes only the largest (or smallest) errors from f nodes and hence can be affected by the normal nodes outside S. Second, for the multi-hop case, our condition is even tighter since normal nodes can obtain more values from normal neighbors. Algorithm 1 ensures that even with multihop relays, normal nodes can remove the extreme values from adversaries (i.e., the errors outside [δ1[k], δN+1[k]]). Thus, it remains to show that normal node(s) in S can obtain more valu-
es from nodes in N \ S. For example, in Fig 1(a), when l = 1, the set S = {1, 2, 3, 6} has no node connected to its outside after applying Algorithm 1. However, node 2 in S satisfies this condition when l ≥ 2.
Remark 4 We study the Byzantine model, which is more adversarial than the malicious model in LeBlanc et al. (2013); Yuan and Ishii (2025). However, we conclude that for our approaches to solve Problem 1 under the malicious model, the graph condition in Theorem 1 is necessary and sufficient; see Remark 1.
4.2 Properties of (f+1)-Robust Following Graphs
We list several properties of (f + 1)-robust following graphs with l hops from Yuan and Ishii (2024).
Lemma 3 If graph G with Wd ̸= W is an (f + 1)-robust following graph with l hops under the f -local model, then the following hold:
(1) |Wd| ≥ 2f + 1.
(2) ∃i ∈ WN s.t. |N l−
i ∩ Wd| ≥ 2f + 1.
(3) |N 1−
i | ≥ 2f + 1, ∀i ∈ W \ Wd. Moreover, the min
imum number of directed edges of G with minimum |Wd| is (2f + 1)(|W \ Wd| + 1).
From Lemma 3(3), we see that each follower node must have 2f + 1 incoming edges. Moreover, G with minimum |Wd| must have directed edges no less than (2f + 1)(|W \ Wd| + 1); this requirement is consistent with the one reported in Rezaee et al. (2021). However, we emphasize that our condition is tighter as mentioned earlier and covers a wider range of graphs. Besides, we can
utilize undirected edges to relax the heavy connectivity requirement. For example, in Fig. 2, the graph G has 33 directed/undirected edges while it needs 55 directed edges to satisfy the condition in Rezaee et al. (2021).
The following lemma shows the equivalence between our condition with f = 0 and the one for the fault-free case (Ren (2007)); it can be derived from Definition 5.
Lemma 4 The graph G is a 1-robust following graph with l ≥ 1 hops if and only if G has a spanning tree rooted at the leader.
5 Resilient Dynamic Leader-Follower Consensus in Second-Order MASs
In this section, we switch our attention to the MASs where agents have second-order dynamics.
Consider a second-order MAS with communication network G = (V, E). Each follower node i ∈ W has a doubleintegrator dynamics modified from Bullo et al. (2009); Dibaji and Ishii (2017). Its discretized form is given as
xˆi[k + 1] = xˆi[k] + T vi[k], vi[k + 1] = vi[k] + T ui[k] + T σi[k], (33)
where vi[k] ∈ R and σi[k] are, respectively, the velocity and the bounded external disturbance with known bound σi of node i at time k. Moreover, xˆi[k] = xi[k]−ρi, where xi[k] ∈ R is the absolute position value of node i and ρi ∈ R is a constant representing the desired relative position value of node i in a formation. For the sake of simplicity, we call xˆi[k] to be the agents’ position values. Similarly, the leader d updates its value as
xˆd[k + 1] = xˆd[k] + T vd[k], vd[k + 1] = vd[k] + T ud[k], (34)
where xˆd[k] = xd[k] − ρd. Here, xd[k] and ρd ∈ R are the absolute position and the desired relative position in the formation of leader d, respectively.
For the second-order MAS in (33), our resilient dynamic leader-follower consensus problem is almost the same as Problem 1 except that agents exchange xˆ values with neighbors. To solve this problem, we present Update Rule 2, where each follower uses only the position values xˆi[k] of neighbors within l hops in its control input at each time k. Specifically, for each normal follower i ∈ WN , the control input ui[k] is given as
ui[k] = −γi[k]φi[k] − θisatε(φi[k]) − βvi[k]. (35)
Here, γi[k] = αi/ ∑n
j=1 aij[k], and θi, ε, β ∈ R>0. Moreover, φi[k] is obtained using (3) in Algorithm 1 and is
10

rewritten by
φi[k] =
∑n
j=1
aij[k](xˆi[k] − xˆj[k]), (36)
where aij[k] > 0 if mji[k] ∈ Mi[k] \ Ri[k], and aij[k] = 0 otherwise. However, the control inputs of adversary nodes in A are arbitrary and may deviate from above.
Update Rule 2 At each time k ≥ 0, each normal direct follower j ∈ Wd ∩ N updates its value as φj[k] = xˆj[k] − xˆd[k] and then follows (33) with (35). Moreover, each
normal non-direct follower i ∈ WN \Wd updates its φi[k] according to Algorithm 1 with inputs xˆi[k], k ≥ 0, and follows (33) with (35).
For the parameters β and θi in (35), we assume
0 < βvd ≤ θi. (37)
5.1 Convergence Analysis
The next theorem is the main result of this section. It provides a necessary and sufficient graph condition for Update Rule 2 to achieve the objective in (2).
Theorem 2 Consider the network G = (V, E) with lhop communication, where each normal follower node i ∈ WN updates its value according to Update Rule 2. Under Assumptions 1–4 and the f -local Byzantine set A, resilient dynamic leader-follower consensus is achieved as in (2) with consensus error bound ε in (11) if and only if G is an (f + 1)-robust following graph with l hops.
Proof: (Necessity) If G is not an (f +1)-robust following graph with l hops, by following the same reasoning as in the necessity proof of Theorem 1, there is a nonempty subset S ⊆ WN \ Wd such that (12) holds.
Suppose that xˆi[0] = a, ∀i ∈ S, and xˆj[0] = xˆd[0], ∀j ∈ N \ S, where a < xˆd[0] is a constant and the leader d increases its value xˆd[k] as time evolves. Moreover, let vi[0] = 0, ∀i ∈ V. Assume that at each time k, all Byzantine nodes send a and xˆd[k] to the nodes in S and N \ S, respectively. For any normal node i ∈ S, by Algorithm 1, it removes all the values of neighbors outside S since the cardinality of the MMC of these values is equal to f or less. Then, according to Update Rule 2, such-
 normal nodes will keep their values, i.e., xˆi[k] = a, vi[k] = 0, ∀i ∈ S, ∀k ≥ 0. Meanwhile, the value of the leader is increasing. Thus, resilient dynamic leader-follower consensus cannot be achieved.
(Sufficiency) The sufficiency follows a similar proof as that of Theorem 1. Hence, we provide the crucial parts.
Let eˆi[k] = xˆi[k] − xˆd[k], ∀i ∈ V. Sort eˆi[k], i ∈ N , from the smallest to the largest values and denote them as
δ1[k], δ2[k], . . . , δN+1[k]. Define the node sets X h(k) and X h(k) as in (13) using eˆi[k]. Notice that in this proof,
Step 1 is unnecessary and we start with Step 2.
Step 2: Following the arguments similar to Step 2 in the proof of Theorem 1, we conclude that there must exist a normal follower i ∈ WN either in X 1(k) or X 1(k) which
makes an update using a value from the normal nodes outside the set to which it belongs.
According to (13), if i ∈ X 1(k) or i ∈ X 1(k), it im
plies that eˆi[k] = δN+1[k] or eˆi[k] = δ1[k], respectively. Furthermore, if (this can happen when |X 1(k)| = 1 if i ∈ X 1(k) and when |X 1(k)| = 1 if i ∈ X 1(k))
δN+1[k] − δN [k] > ε1, if i ∈ X 1(k), δ2[k] − δ1[k] > ε1, if i ∈ X 1(k), (38)
and we have shown that there is a node i either in X 1(k) or X 1(k) using a value from the normal nodes outside
the set to which it belongs, then one can conclude that the distance of eˆi[k] from the closest normal eˆj[k] is larger than ε1. Moreover, since A is f -local, any Byzantine neighbor with consensus error outside the interval [δ1[k], δN+1[k]] is discarded by the MW-MSR algorithm. Therefore, by (36) and (38), for any possible aij[k] ≥ 0 obtained in (36), we have
φi[k] > ε, if i ∈ X 1(k), φi[k] < −ε, if i ∈ X 1(k). (39)
Since |φi[k]| > ε, we get satε(φi[k]) = sgn(φi[k]). Then, from (19) and (39), it holds that
satε(φi[k]) = sgn(φi[k]) = sgn(eˆi[k]).
In the following, we show that in a finite time, eˆi[k] is decreasing if eˆi[k] > 0, and eˆi[k] is increasing if eˆi[k] < 0.
(i) If eˆi[k] > 0, then by (39), we have φi[k] > ε. We know from (33) that
eˆi[k + 1] − eˆi[k] = (vi[k] − vd[k])T, (40)
where eˆi[k] = xˆi[k]−xˆd[k], i ∈ V. When vi[k] < vd[k], we have eˆi[k + 1] − eˆi[k] < 0, i.e., eˆi[k] is decreasing. Then we discuss the following three cases for vd[k] ≤ vi[k].
Case 1: 0 < vd[k] ≤ vi[k]. In this case, by (35), we get
ui[k] = −γi[k]φi[k] − θisgn(eˆi[k]) − βvi[k] < 0, (41)
indicating that vi[k] is decreasing until 0 < vi[kˆ] < vd[kˆ] for some kˆ. Then we have eˆi[k] is decreasing for k ≥ kˆ.
11

Case 2: vd[k] ≤ 0 ≤ vi[k]. In this case, similar to (41), we get vi[k] is decreasing until vd[kˆ] ≤ vi[kˆ] < 0 for some kˆ.
Case 3: vd[k] ≤ vi[k] < 0. In this case, recall that φi[k] > ε. Moreover, since i ∈ X 1(k) or i ∈ X 1(k), it must hold
that eˆi[k] > ε. Moreover, by (37), we have
0 < β|vd[k]| ≤ βvd ≤ θi.
Then we obtain
−θisgn(eˆi[k]) − βvi[k] < −θisgn(eˆi[k]) − βvd[k] < 0. (42)
It further follows that
ui[k] = −γi[k]φi[k] − θisgn(eˆi[k]) − βvi[k] < 0, (43)
indicating that vi[k] is decreasing until vi[kˆ] < vd[kˆ] for some kˆ. Then we have eˆi[k] is decreasing for k ≥ kˆ.
(ii) If eˆi[k] < 0, then by (39) we have φi[k] < −ε. We know from (33) that
eˆi[k + 1] − eˆi[k] = (vi[k] − vd[k])T. (44)
When vd[k] < vi[k], we have eˆi[k + 1] − eˆi[k] > 0, i.e., eˆi[k] is increasing. Then we discuss the following three cases for vi[k] ≤ vd[k].
Case 1: vi[k] ≤ vd[k] < 0. In this case, we have
ui[k] = −γi[k]φi[k] − θisgn(eˆi[k]) − βvi[k] > 0, (45)
indicating that vi[k] is increasing until vd[kˆ] < vi[kˆ] < 0 for some kˆ, then we have eˆi[k] is increasing for k ≥ kˆ.
Case 2: vi[k] ≤ 0 ≤ vd[k]. In this case, similar to (45), we have vi[k] is increasing until 0 < vi[kˆ] ≤ vd[kˆ] for some kˆ.
Case 3: 0 < vi[k] ≤ vd[k]. In this case, recall that φi[k] < −ε. Moreover, since i ∈ X 1(k) or i ∈ X 1(k), it must hold
that eˆi[k] < −ε. Moreover, by (37), we have
0 < β|vd[k]| ≤ βvd ≤ θi.
Then we obtain
−θisgn(eˆi[k]) − βvi[k] > −θisgn(eˆi[k]) − βvd[k] > 0. (46)
It further follows that
ui[k] = −γi[k]φi[k] − θisgn(eˆi[k]) − βvi[k] > 0, (47)
indicating that vi[k] is increasing until vd[kˆ] < vi[kˆ] for some kˆ. Then we have eˆi[k] is increasing for k ≥ kˆ.
Therefore, we conclude that while eˆi[k] > 0 and φi[k] > ε, eˆi[kˆ] will always be decreasing after a finite time kˆ. Moreover, while eˆi[k] < 0 and φi[k] < −ε, eˆi[kˆ] will
always be increasing after a finite time kˆ. Then, in a finite time, we have
δN+1[k] − δN [k] ≤ ε1, if i ∈ X 1(k), δ2[k] − δ1[k] ≤ ε1, if i ∈ X 1(k).
Step 3: Then we utilize an analysis similar to Step 3 in the proof of Theorem 1. By considering the ultimate error bounds obtained in steps 1 to h − 1, for step h, in a finite time we should have for each node i
δN+2−h[k] − δN+1−h[k] ≤ εh, if i ∈ X h(k), δh+1[k] − δh[k] ≤ εh, if i ∈ X h(k).
Lastly, if for a 1 < h ≤ N + 1, d ∈ X h(k) ∩ X h(k);
then, by putting the error bounds together, we obtain the consensus error bound in (11). The proof is complete. ■
We state a smaller bound for the case of Wd = W in the following lemma. It can be derived from Step 2 of the proof of Theorem 2.
Lemma 5 Consider the network G = (V, E) with the problem settings and assumptions in Theorem 2. Resilient dynamic leader-follower consensus is achieved as in (2) with consensus error bound εd2 = ε if all followers are in Wd, i.e., Wd = W.
Remark 5 Similar to Remark 2, when |Wd ∩ N | < N , we can have a smaller consensus error bound ε2 < ε in (11) for Theorem 2, which is given by
ε2 =
N −|Wd∩N |
∑
h=1
εh + ε. (48)
5.2 Analysis on Insecure Leader Agents and Discussions on Related Works
In this section, we study more vulnerable systems with insecure leaders, i.e., a leader may be subject to failures or attacks. There are two important assumptions in this setting. First, there must be redundancy in the set of leaders; see, e.g., Usevitch and Panagou (2020). Second, all normal leaders should broadcast the same reference value at each time; see footnote 1.
In our problem with insecure leaders, we consider the graph G = (V, E), where V consists of the set of leader
12

agents L and the set of follower agents W with L∪W = V and L ∩ W = ∅. Moreover, the set of normal leaders is denoted by LN = L ∩ N with LN ∪ WN = N . Here, LN may not be L, i.e., there could be adversarial leaders. We formulate this problem as follows. We remark that this problem is the same with the case where secure leaders are unknown to the followers.
Problem 2 Suppose that all leaders in L are insecure. Design a distributed control strategy such that the normal agents in N reach resilient dynamic leader-follower consensus, i.e., for any possible sets and behaviors of the adversaries in A and any state values of the normal agents in N , (2) is satisfied ∀d ∈ LN .
To solve Problem 2, we slightly modify our algorithms for first-order and second-order MASs as follows:
Modified Update Rule 1: Each normal follower agent i ∈ WN updates its φi[k] according to Algorithm 1, and follows (6) with (7).
Modified Update Rule 2: Each normal follower agent i ∈ WN updates its φi[k] according to Algorithm 1 with inputs xˆi[k], and follows (33) with (35).
We note that the nodes in Wd in Problem 1 can be viewed as the insecure leaders in L for the rest of the follower agents in Problem 2. The difference is that the nodes in Wd would have a small consensus error ε to the reference value, while the normal leaders in L share exactly the correct reference value by our assumption. Therefore, in Problem 2, we introduce the following graph notion.
Definition 6 The graph G = (V, E) with the set of leaders L ⊂ V is said to be an r-robust following graph with l hops (under the f -local model) w.r.t. L if for any f -local set F, the subgraph GH with H = V \ F satisfies that for
every nonempty subset S ⊆ H \ L, (4) holds.
We are ready to state the result for solving Problem 2. Since it can be proved using analyses similar to those in the proofs of Theorems 1 and 2, we omit its proof. Note that for the case of insecure leaders, the smaller error bounds in Lemmas 1 and 5 also hold, but the ones in Remarks 2 and 5 may not hold since followers in Wd may not use the leaders’ value in their updates.
Proposition 1 Consider the network G = (V, E) with the set of insecure leaders L, where all normal followers in WN update their values according to the modified Update Rules 1 or 2. Under Assumptions 2–4 and the f -local Byzantine set A, resilient dynamic leader-follower consensus with insecure leaders is achieved with consensus error bound ε in (11) if and only if G is an (f + 1)-robust following graph with l hops w.r.t. L.
0 5 10 15 Time (s)
0
10
20
30
40
Values
Leader Direct followers Normal followers Byzantine followers
(a) With one-hop communication.
0 5 10 15 Time (s)
0
10
20
30
40
Values
Leader Direct followers Normal followers Byzantine followers
(b) With three-hop communication.
Fig. 3. Nodes’ values of the network in Fig. 2 applying Update Rule 1.
6 Numerical Examples
6.1 Simulations for a First-Order MAS
We apply Update Rule 1 to the leader-follower network in Fig. 2 under the 2-local model. The control input of the leader is given as ud[k] = 3 cos(kT )+1.5 cos(0.5kT ) with sampling period T = 0.01 and the external disturbances are bounded with σi = 1, ∀i ∈ WN (generated using random signals). The objective of normal follower nodes is to track the leader d. Accordingly, let αi = 1, ε = 0.1,
and θi = 6. Moreover, let xi[0] ∈ (0, 30), ∀i ∈ WN .
This network is not a 3-robust following graph with 1 hop. Hence, it is not robust enough for the one-hop MSR algorithms (LeBlanc et al. (2013); Rezaee et al. (2021)) to succeed under the 2-local model. However, as mentioned in Example 2, it is a 3-robust following graph with 3 hops. We assume that nodes 8 and 9 are Byzantine. Specifically, node 8 sends an oscillating value around 15 to out-neighbors in node set {1, 2} and sends an oscillating value around 5 to out-neighbors in set {3, 4, 5}. More-
over, node 9 sends an oscillating value around 30 to its neighbors. First, we present the case where normal followers apply Update Rule 1 with one-hop communication, which is similar to the algorithm in Rezaee et al. (2021). The results are given in Fig. 3(a), and resilient dynamic leader-follower consensus is not achieved. Next, we apply Update Rule 1 with three-hop communication to this network. We assume that Byzantine nodes manipulate the relayed values in the same way as they manipulate their-
 own values. Observe in Fig. 3(b) that resilient dynamic leader-follower consensus is achieved;
13

0 10 20 30 40 Time (s)
0
10
20
30
Values
Leader Direct followers Normal followers Byzantine followers
(a) With one-hop communication.
0 10 20 30 40 Time (s)
0
10
20
30
Values
Leader Direct followers Normal followers Byzantine followers
(b) With two-hop communication.
Fig. 4. Nodes’ values of the network in Fig. 1(a) applying Update Rule 2.
the maximum consensus error after time k = 500 (i.e., 5 seconds) is ε = 0.37, verifying the result in Theorem 1.
6.2 Simulations for a Second-Order MAS
In this part, we present simulations of Update Rule 2 in the leader-follower network in Fig. 1(a) under the 1local model. Here, all agents in V possess second-order dynamics as (33) and (34). Scenario 1 presents a onedimensional tracking problem. Scenario 2 presents a twodimensional resilient formation control problem.
Scenario 1: The control input of the leader is given as ud[k] = −3.2 sin(2kT )+1.92 sin(1.6kT )−0.25 sin(0.2kT ) with T = 0.005, and the external disturbances are random and bounded with σi = 1, ∀i ∈ WN . The objective of normal followers is to track the leader d. In Scenario 1, let ρi = 0, ∀i ∈ V. Moreover, let αi = 1, ε = 0.1, β = 20, and θi = 100. Normal followers have initial values as
xˆi[0] = xi[0] ∈ (0, 30), ∀i ∈ WN .
As discussed in Example 1, the graph in Fig. 1(a) is not a 2-robust following graph with 1 hop, and hence, is not robust enough to tolerate one Byzantine node using the one-hop MSR algorithms (Usevitch and Panagou (2020); Rezaee et al. (2021)). Here, we assume that Byzantine node 5 sends two different oscillating xˆ values to nodes in sets {1, 3, 6} and {4}. First, we apply Update Rule 2 with one-hop communication to the network in Fig. 1(a). The results in Fig. 4(a) show that resilient dynamic le-
aderfollower consensus is not reached. For the one-hop algorithm to succeed, the network should have more connections as shown in Fig. 1(b).
0 20 40 60 80 100 x
0
20
40
60
80
100
y
Leader Normal followers Byzantine followers
(a) With one-hop communication.
0 20 40 60 80 100 x
0
20
40
60
80
100
y
Leader Normal followers Byzantine followers
(b) With two-hop communication.
Fig. 5. Nodes’ trajectories of the network in Fig. 1(a) applying Update Rule 2.
Alternatively, we can increase the network robustness by introducing multi-hop relays with the topology unchanged. This time, we apply Update Rule 2 with twohop communication to the network in Fig. 1(a), which is a 2-robust following graph with 2 hops. As Theorem 2 indicated, it can tolerate one Byzantine node. Here, node 5 relays false values in the same way as it manipulates its own. The results are given in Fig. 4(b). The maximum consensus error after 2.5 seconds is ε = 0.66. Hence, resilient d-
ynamic leader-follower consensus is achieved.
Scenario 2: Our approaches can be extended to decoupled multi-dimensional dynamics of agents. Consider the network in Fig. 1(a), each node i ∈ V is associated with two dimensions, i.e., xi[k] and yi[k]. To be specific, each node i ∈ V exchanges xˆi[k] and yˆi[k] with neighbors at each time k, and we employ Update Rule 2 for each node i ∈ WN on each axis separately. The objective is that the normal followers track the leader in
14

both dimensions to form a desired formation such that the consensus errors on both dimensions are ultimately uniformly bounded in a finite time, despite misbehaviors of the Byzantine node. We employ the same parameters as those in Scenario 1. Let initial values be xi[0] ∈ (0, 20), yi[0] ∈ (70, 100), ∀i ∈ WN .
The desired formation is for normal nodes to form a square with the moving leader d located at the square center. The control inputs of the leader on x-axis and yaxis are given as udx [k] = 0 and udy [k] = − sin(0.6kT ),
respectively. First, trajectories of normal followers applying the one-hop algorithm are presented in Fig. 5(a). Here, there are two red trajectories of node 5 since it sends two different positions to its neighbors. As a result, the followers are divided into two groups and the desired formation is not achieved. Next, the two-hop algorithm is applied in the same scenario and the results are presented in Fig. 5(b). There, normal agents successfully form the desired formation while tracking the lea-
der. The maximum consensus errors on x and y axes after 5 seconds are εx = 0.41 and εy = 0.49, respectively. Thus, resilient dynamic leader-follower consensus is achieved on both dimensions. We have verified the efficacy of our methods.
7 Conclusion
We have investigated resilient dynamic leader-follower consensus in directed networks. Our approaches are based on the MW-MSR algorithm from our previous work (Yuan and Ishii (2025)) studying leaderless resilient consensus; besides, the second approach is able to handle agents possessing second-order dynamics. More importantly, we have characterized tight necessary and sufficient graph conditions for our algorithms. When we employ one-hop communication, our graph conditions are tighter than the on-
es for the case of insecure leaders (Usevitch and Panagou (2020)) and the case of the secure leader (Rezaee et al. (2021)). With multi-hop relays, we are able to obtain further relaxed graph requirements for the followers to track the dynamic leader. Moreover, our methods can achieve smaller consensus error bounds than the one in Rezaee et al. (2021). Possible future directions include to develop approaches for accelerating the MMC calculation and to design new dynamics of followers for reducing c-
onsensus errors.
References
Bullo, F., Cortes, J., and Martinez, S. (2009). Distributed Con
trol of Robotic Networks: A Mathematical Approach to Motion
Coordination Algorithms. Princeton University Press. Cao, Y., Ren, W., and Li, Y. (2009). Distributed discrete-time
coordinated tracking with a time-varying reference state and
limited communication. Automatica, 45(5), 1299–1305.
Dibaji, S. M., and Ishii, H. (2017). Resilient consensus of second
order agent networks: Asynchronous update rules with delays.
Automatica, 81, 123–132.
Dimarogonas, D. V., Tsiotras, P., and Kyriakopoulos, K. J. (2009).
Leader-follower cooperative attitude control of multiple rigid
bodies. Systems & Control Letters, 58(6), 429–435.
Goldsmith, A. (2005). Wireless Communications. Cambridge
University Press.
Hassanalian, M., and Abdelkefi, A. (2017). Classifications, appli
cations, and design challenges of drones: A review. Progress in
Aerospace Sciences, 91, 99–131.
Khan, M. S., Naqvi, S. S., and Vaidya, N. H. (2019). Exact
Byzantine consensus on undirected graphs under local broad
cast model. In Proc. ACM Symp. Principles of Dist. Comp.,
pp. 327–336.
Koo, C. Y., Bhandari, V., Katz, J., and Vaidya, N. H. (2006).
Reliable broadcast in radio networks: The bounded collision
case. In Proc. ACM Symp. Principles of Dist. Comp., pp. 258
264.
Koo, C. Y. (2004). Broadcast in radio networks tolerating Byzantine adversarial behavior. In Proc. ACM Symp. Principles of
Dist. Comp., pp. 275–282.
LeBlanc, H. J., Zhang, H., Koutsoukos, X., and Sundaram, S.
(2013). Resilient asymptotic consensus in robust networks.
IEEE J. Sel. Areas Commun., 31(4), 766–781.
LeBlanc, H. J., and Hassan, F. (2014). Resilient distributed
parameter estimation in heterogeneous time-varying networks.
In Proc. Int. Conf. High Confidence Netw. Syst., pp. 19–28.
Lynch, N. A. (1996). Distributed Algorithms. Morgan Kaufmann. Mitra, A., and Sundaram, S. (2019). Byzantine-resilient dis
tributed observers for LTI systems. Automatica, 108, 108487.
Paranjape, A. A., Chung, S. J., Kim, K., and Shim, D. H. (2018).
Robotic herding of a flock of birds using an unmanned aerial
vehicle. IEEE Trans. Robotics, 34(4), 901–915.
Ren, W. (2007). Multi-vehicle consensus with a time-varying
reference state. Systems & Control Letters, 56(7), 474–483.
Rezaee, H., Parisini, T., and Polycarpou, M. M. (2021). Resiliency
in dynamic leader-follower multiagent systems. Automatica, 125, 109384.
Saldana, D., Prorok, A., Sundaram, S., Campos, M. F. M., and
Kumar, V. (2017). Resilient consensus for time-varying net
works of dynamic agents. In Proc. American Control Conf.,
pp. 252–258.
Su, L., and Vaidya, N. H. (2017). Reaching approximate Byzan
tine consensus with multi-hop communication. Inf. and Com
putation, 255, 352–368.
Sundaram, S., and Gharesifard, B. (2018). Distributed optimization under adversarial nodes. IEEE Trans. Autom. Control,
64(3), 1063–1076.
Teixeira, A., Perez, D., Sandberg, H., and Johansson, K. H.
(2012). Attack models and scenarios for networked control sys
tems. In Proc. Int. Conf. High Confidence Netw. Syst., pp. 55
64.
Tseng, L., Vaidya, N. H., and Bhandari, V. (2015). Broadcast
using certified propagation algorithm in presence of Byzantine
faults. Inf. Processing Letters, 115(4), 512–514.
Usevitch, J., and Panagou, D. (2020). Resilient leader-follower
consensus to arbitrary reference values in time-varying graphs.
IEEE Trans. Autom. Control, 65(4), 1755–1762.
Vaidya, N. H., Tseng, L., and Liang, G. (2012). Iterative ap
proximate Byzantine consensus in arbitrary directed graphs.
In Proc. ACM Symp. Principles of Dist. Comp., pp. 365–374.
Yu, X., Saldana, D., Shishika, D., and Hsieh, M. A. (2022). Re
silient consensus in robot swarms with periodic motion and in
termittent communication. IEEE Trans. Robotics, 38(1), 110125.
Yuan, L., and Ishii, H. (2021). Secure consensus with dis
tributed detection via two-hop communication. Automatica,
131, 109775.
Yuan, L., and Ishii, H. (2023). Event-triggered approximate
Byzantine consensus with multi-hop communication. IEEE
Trans. Signal Processing, 71, 1742–1754.
Yuan, L., and Ishii, H. (2024). Reaching resilient leader
follower consensus in time-varying networks via multi-hop relays. Submitted for journal publication. Also, arXiv preprint,
arXiv:2411.09954.
Yuan, L., and Ishii, H. (2025). Resilient consensus with multihop
communication. IEEE Trans. Autom. Control, 70(9), 5973
5988.
Zegers, F. M., Deptula, P., Shea, J. M., and Dixon, W. E.
(2022). Event/self-triggered approximate leader-follower con
sensus with resilience to Byzantine adversaries. IEEE Trans.
Autom. Control, 67(3), 1356–1370.
15

---

## Processing Information

- **Processing Library:** Zotero PDFWorker
- **Processing Date:** 2026-02-10T18:17:48.074Z
- **Text Length:** 66564 characters
- **Success:** Text extraction completed
- **PDF Library Used:** Zotero PDFWorker
- **Pages Processed:** 15 of 15
