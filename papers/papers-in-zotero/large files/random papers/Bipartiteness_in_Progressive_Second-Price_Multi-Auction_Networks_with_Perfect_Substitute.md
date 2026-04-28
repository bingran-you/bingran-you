# PDF Document: Blazek and Harris - 2025 - Bipartiteness in Progressive Second-Price Multi-Auction Networks with Perfect Substitute.pdf

**File Path:** Blazek and Harris - 2025 - Bipartiteness in Progressive Second-Price Multi-Auction Networks with Perfect Substitute.pdf

**Processed Date:** 2026-02-10T18:13:44.129Z

**File Size:** 1143.74 KB

**Total Pages:** 26

**Extracted Pages:** 26

**PDF Library:** Zotero PDFWorker

**Attachment Item ID:** 3181

**Title:** Bipartiteness in Progressive Second-Price Multi-Auction Networks with Perfect Substitute

**Collection:** Large Files > Random Papers

---

## Extracted Text Content

Bipartiteness in Progressive Second-Price
Multi-Auction Networks with Perfect Substitute
Jordana K. Blazek #
University of Nevada, Reno, Nevada, USA
Frederick C. Harris Jr.
University of Nevada, Reno, Nevada, USA
Abstract
We consider a bipartite network of buyers and sellers, where the sellers run locally independent Progressive Second-Price (PSP) auctions, and buyers may participate in multiple auctions, forming a multi-auction market with perfect substitute. The paper develops a projection-based influence framework for decentralized PSP auctions. We formalize primary and expanded influence sets using projections on the active bid index set and show how partial orders on bid prices govern allocation, market shifts-
, and the emergence of saturated one-hop shells. Our results highlight the robustness of PSP auctions in decentralized environments by introduc
ing saturated components and a structured framework for phase transitions in multi-auction dynamics. This structure ensures deterministic coverage of the strategy space, enabling stable and truthful embedding in the larger game. We further model intra-round dynamics using an index τk to capture coordinated asynchronous seller updates coupled through buyers’ joint constraints. Together, these constructions explain how local interactions propagate across auctions and gives premise for coherent equil-
ibria–without requiring global information or centralized control.
2012 ACM Subject Classification Networks → Network design and planning algorithms; Computer systems organization → Real-time system architecture; Networks → Network resources allocation; Computing methodologies → Self-organization; Theory of computation → Graph algorithms analysis; Theory of computation → Online algorithms; Theory of computation → Dynamic graph algorithms
Keywords and phrases Progressive second-price auction (PSP), Graph theory, Influence sets, Convergence, Decentralized markets
Digital Object Identifier 10.4230/TGDK.1.1.42
Supplementary Material GitHub, Google CoLab
Versioned Code, CoLab Code: TGDK-2025, TGDK.ipynb
Received Date of submission Accepted Date of acceptance Published Date of publishing
Editor TGDK section area editor
1 Introduction
The Progressive Second Price (PSP) auction, introduced by Lazar and Semret [12], and later expanded upon in Semret’s dissertation [19], presented a full theoretical framework for distributed resource pricing and demonstrated the linkage between PSP and VCG-type efficiency results. The PSP auction is a decentralized mechanism characterized by truthfulness, individual rationality, and social welfare maximization. Unlike traditional centralized auctions, PSP allows buyers and sellers to iteratively i-
nteract through local bidding rounds, dynamically allocating consumable resources such as network bandwidth and other communicative and computational resources. In PSP auctions, winners pay a cost determined by the externality that is imposed on others, calculated from the distribution of allocations and the bid, This ensures truthful reporting of valuation through incentive compatibility as was shown in the foundational work of Vickrey, Clarke,
© Jordana Blazek, Frederick C. Harris Jr.; licensed under Creative Commons License CC-BY 4.0 Transactions on Graph Data and Knowledge, Vol. 1, Issue 1, Article No. 42, pp. 42:1–42:26 Transactions on Graph Data and Knowledge Schloss Dagstuhl – Leibniz-Zentrum für Informatik, Dagstuhl Publishing, Germany
arXiv:2511.19225v1 [cs.GT] 24 Nov 2025

42:2 Bipartiteness in PSP Multi-Auction Networks
and Groves [8, 10, 22]. The resulting equilibria adhere to the exclusion-compensation principle, preventing unilateral improvement without harming another participant.
Our focus is on developing adaptive auction mechanisms, like the Progressive Second Price (PSP) auction, that respond to market dynamics by allowing agents to adjust their bids based on local information gathered from their network neighbors. This motivates the study of influence sets, dynamic participation, and the role of network effects in shaping bidding behavior. In these settings, agents lack full market information and are affected by network dependencies.
Maillé et al. [9] build directly on Lazar and Semret’s 1999 PSP framework by addressing the one remaining free parameter in the model — the reserve price. They demonstrate that while PSP guarantees convergence, efficiency, and incentive compatibility, the seller’s reserve price can be optimized by simple numerical methods, allowing PSP markets to balance efficiency with revenue maximization.
These iterative updates operate as strategic interactions in a decentralized framework, where the PSP auction converges, perhaps astonishingly, deterministically to an ε-Nash equilibrium. This has been shown to be true on the networks of 20 years ago, when bandwidth and bandwidth allocation was perhaps a different game. A real-world, modern network faces significant obstacles; it is a game of partial information played in a web of interconnected decisions, dynamic participation, and evolving marke-
t constraints. This motivates a graph-theoretic treatment of information flow and motivates the introduction of the concept of market saturation.
The structure of this paper is as follows. Section 2 introduces the foundations necessary to model influence propagation in decentralized auctions. In Section 3, we present the Progressive Second Price (PSP) auction mechanism, outlining its bidding rules, participation logic, and price allocation behavior. Section 4 defines and explores the dynamics of influence sets, establishing a framework for analyzing how strategy updates propagate acrossthe market. Our approach adopts and extends these conce-
pts through graph-based methods, specifically leveraging the bipartite graph to systematically represent buyer–seller interactions. Section 5 introduces the concept of saturation as the limit of influence propagation, characterizing a locally evolving equilibrium structure. The simulation framework and implementation are discussed in Section 6, and this paper’s conclusion and future work are presented in Section 7.
2 Background and Related Work
This paper introduces a graph-based analytical framework to examine the dynamics of Progressive Second Price (PSP) auctions within decentralized market structures. Our approach builds on foundational concepts in auction theory, network influence propagation, and graph analysis, while situating the PSP model among several related domains.
The Progressive Second Price (PSP) auction, initially proposed by Lazar and Semret [12], extends classical second-price mechanisms [8, 10, 22] into decentralized contexts. Earlier studies such as Maille and Tuffin [14] and Semret’s dissertation [19] provided a full system-level model of distributed market control and the theoretical grounding for the PSP auction mechanism, analyzing network-based PSP equilibria and pricing strategies. Subsequent formal analyses such as Qu, Jia, and Caines [17] pre-
sented key results on the Uniformly Quantized PSP (UQ-PSP) mechanism, showing that it guarantees convergence to a unique limit price independent of initial conditions, achieves γ-incentive compatibility, and extends naturally to network topologies where equilibria depend on local information exchange. Their framework provided the first rigorous quantized extension of the PSP model, establishing discrete convergence proofs that later generalizations such as those developed in this work, Qu, Jia, an-
d Caines [18] further extended these results to networked PSP convergence, introducing asynchronous coordination and bounded-delay

J. K. Blazek, F. C. Harris Jr. 42:3
convergence. Subsequent work has investigated distributed or multi-resource variants, including privacy-preserving and differential frameworks in data and spectrum markets [7, 23], expanding PSP-like mechanisms to new computational settings. Local coordination rules, when combined with bounded delays and limited information exchange, can achieve global properties similar to those in consensus and averaging protocols. Beyond traditional equilibrium analysis, distributed consensus and coordination m-
odels offer insight into asynchronous bidding and update rules. Aguilera and Toueg [1] and Lynch [13] describe protocols ensuring eventual consistency under partial information, concepts that are applicable to asynchronous PSP updates. These works demonstrate that convergent systems operating under bounded delay result in deterministic convergence guarantees in decentralized markets. In decentralized markets, agents’ strategies depend on local interactions but propagate indirectly through shared p-
articipation and local coordination. This connects PSP analysis to the broader literature on influence diffusion and cascading behavior, as in Kleinberg [11], Oki et al. [16], and Osvaldo and Queen [2], which examine network-driven contagion and adaptive decision processes. The theoretical foundation of influence sets also aligns with the study of sphere-of-influence graphs [15, 21] and dynamic graph structures that represent iterative strategic dependencies. Graph-based approaches are central to -
understanding multi-agent optimization. Baur [4], Barrett [3], and related work on planar and dynamic graphs illustrate how reachability, closure, and resistance distance can capture evolving connectivity. In the PSP context, our use of projection operators extends these methods by linking graph reachability to economic stability, enabling a deterministic interpretation of market influence propagation. This work examines decentralized auction theory, distributed coordination, influence propagation-
, and graph-theoretic modeling to provide a coherent analytical framework for PSP auctions. This expanded foundation motivates the later sections on local saturation and asynchronous market dynamics.
3 The PSP Auction Mechanism
The Progressive Second Price (PSP) auction is a decentralized mechanism in which buyers iteratively submit bids to sellers, and sellers update reserve prices based on received bids. Each auction operates locally, and coordination emerges through repeated interactions across the market graph. The mechanism rules first appears in [12], defining the bid structure, auction dynamics, pricing rules, allocation strategies, and participation behavior. In what follows, we define the bid structure, auction -
dynamics, pricing rules, allocation strategies, and participation behavior that govern the PSP mechanism. Let I = B ∪ L denote the set of all agents, partitioned into buyers and sellers. Each seller j ∈ L manages a local auction for a divisible resource, and each buyer i ∈ B may submit bids to a subset of sellers. The bid profile of auction j is given by the column vector sj with entries sj
i , where (i, j) ∈ B × L. A bid
sj
i = (qj
i , pj
i) ∈ Sj
i = [0, Qj] × [0, ∞)
represents a single interaction between buyer i and seller j, where qj
i is the quantity requested by
the buyer and pj
i is the unit price offered. In decentralized markets governed by distributed Progressive Second Price (PSP) auctions, agents submit bids in the form of price-quantity pairs at discrete time steps. These bids are locally observable: buyers receive feedback from auctions in which they participate, and sellers observe aggregate demand over time. However, the global structure of the market–including overlapping buyer influence, competition externalities, and inferred network effects–must be reconstru-
cted from these partial, temporally indexed signals.
TGDK

42:4 Bipartiteness in PSP Multi-Auction Networks
Object Single auction j Across all auctions
quantity Qj (Q1, . . . , QJ )
Player i’s bid pair sj
i = (qj
i , pj
i ) si = (s1
i , . . . , sJ
i)
Strategy space of player i Sj
i = [0, Qj] × [0, ∞) Si =
L
∏
j=1
Sj
i
Opposing bids w.r.t. player i sj
−i = (sj
1, . . . , sj
i−1, sj
i+1, . . . , sj
n) s−i = (s1
−i, . . . , sJ
−i )
Profile in auction j sj = (sj
1, . . . , sj
n) s = (s1, . . . , sJ )
Grand strategy space Sj =
n
∏
i=1
Sj
i S=
L
∏
j=1
Sj
Table 1 Basic sets and notation for a bundle of J independent PSP auctions
3.1 Bounded Participation
Each buyer will know the available quantity for each market in which they bid. Buyers act strategically by selecting sellers, adjusting bid quantities, and choosing whether to participate based on their expected ability to satisfy demand. In the PSP framework buyers cannot reveal their entire valuation functions in a single step; instead they must request allocations iteratively. To regulate this behavior we introduce a bounded participation rule, which endogenously limits the set of sellers a buy-
er engages with, and can be seen as an analogue of the opt-out behavior given in [6]. Fix buyer i at time t and let p∗ denote the common marginal price identified from opponents’ bids. For each seller j let cj = capj(p∗) be the residual quantity available to i at price p∗. Define the desired total quantity
z∗
i = min
{
q ̄i(t),
∑
j
cj
}
. (1)
▶ Definition 1 (Bounded participation rule). Buyer i selects a minimal–cost subset of sellers Li(t) ⊆ L, ordered by nondecreasing price pj
(n)(t), such that
∑
j ∈Li (t)
cj(t) ≥ z∗
i . (2)
The buyer allocates requests sequentially to the least expensive sellers until the desired total quantity z∗
i is reached, subject to residual capacities cj(t). For j ∈/ Li(t), set qj
i = 0.
This rule formalizes bounded participation at fixed t: each buyer interacts only with the fewest necessary sellers to realize z∗, in an attempt to minimize the cost of participation. The resulting allocation targets allocations at a common marginal price p∗(t) under residual quantity constraints.
3.2 Residual Quantity and Allocation
As a market with perfect but incomplete information, sellers can only gain information about demand by observing buyer behavior, determined by the connectivity of the auction graph. In each iteration, every seller completes one update of its local auction. For each seller j, the reserve price pj
∗(t) is the price at which seller j is indifferent between selling her final unit of resource and keeping it. Equivalently, the seller may be viewed as submitting

J. K. Blazek, F. C. Harris Jr. 42:5
an internal bid (Qj, pj
∗(t)) on her own auction. At the end of each round t, the reserve price is updated with information from the set of active bids, where Bj(t) is the set of buyers who win strictly positive allocations at seller j in round t, and ε > 0. We define the clearing price at seller j to be the smallest price at which aggregate awarded quantity meets available quantity:
χj(t) = min
{
y:
∑
k: pj
k (t)>y
aj
k(t) ≥ Qj(t)
}
. (3)
Any residual supply must therefore be allocated among bids that tie at prices just above χj(t), after higher–priced bids are filled. Let
pj(t) := min{ pj
i (t) : i ∈ Bj(t) }, pj(t) := max{ pj
i (t) : i ̸∈ Bj(t) }, (4)
be the lowest winning and highest losing bid prices at seller j, and where buyers not in Bj(t) receive zero allocation at seller j. The clearing price satisfies
pj(t) < pj(t) + ε ≤ χj(t) ≤ pj(t) − ε < pj(t)
whenever there is at least one winning and one losing bidder at seller j. In particular, χj(t) lies in the open interval between the highest losing and lowest winning bid. At equilibrium, the reserve price pj
∗(t) coincides with the clearing price at seller j, i.e., the clearing price implied by the PSP allocation rule. Buyers at higher prices are therefore always served in full, whereas buyers at the threshold price may be rationed. At each price level y, the residual quantity is given by
Rj(y, t) =
[
Qj(t) −
∑
k:pj
k (t)>y
aj
k (t)
]+
. (5)
When multiple buyers tie at pj
i (t) = y, the awarded allocation respects both the buyer’s request and the residual supply. We refer to the tie–splitting rule originated in the analysis of quantized PSP auctions by Qu, Jia, and Caines [17],
aj
i (s(t)) = min
{
qj
i (t), qj
i (t)
∑
l:pj
l (t)=y qj
l (t) Rj(y, t)
}
. (6)
The bid quantity qj
i (t) and the allocation aj
i (t) are complementary. In fact, the buyer strategy is the first term in the minimum, the second term being owned by the seller. For each buyer–seller pair (i, j) at time t, aj
i (t) is the awarded amount that seller j allocates to buyer i once the allocation rule has been applied. By construction,
aj
i (t) ≤ qj
i (t), (7)
with equality holding when residual supply at the buyer’s price suffices to satisfy all tied requests. The mechanism therefore never awards more than requested and may award less when quantity is limited. We remark that the reserve price pj
∗(t) that lies in the margin interval determined by the bids
pj(t) < pj
∗(t) < pj(t), (8)
whenever both pj(t) and pj(t) are defined, and we deliberately leave the precise rule for selecting pj
∗(t) within the interval (8) unspecified. In particular, admissible choices include
pj
∗(t) = χj(t), pj
∗(t) = pj(t) + ε, pj
∗(t) = pj(t) − ε,
provided that reserve price updates lie within ε and the resulting sequence {pj
∗(t)}t is nondecreasing.
TGDK

42:6 Bipartiteness in PSP Multi-Auction Networks
3.3 Exclusion–Compensation
Each buyer’s payment follows a second–price externality principle, this is the “social opportunity cost” of the PSP pricing rule. The exclusion–compensation payment to buyer i equals the loss imposed on other buyers at that seller when i participates. For a fixed auction j we use the opposing buyers’ piecewise–constant marginal price function P j(·, sj
−i) built from sj
−i,
cj
i (s) =
∫ aj
i (s)
0
P j(z, sj
−i
)dz, (9)
which holds true locally at each auction, where the opposing bids are calculated against the allocated resource to buyer i. The amount of resource available at price pj
(n) is ξj
n−1 − ξjn ≥ 0. The local inverse price function is then
P j(z, sj
−i) = pj
(n) for z ∈ (ξj
n, ξj
n−1]. (10)
For each ordered price y, we have that Pi(z, s−i) is defined for the range of z corresponding to the total resource available from all sellers at that price, i.e.,
z∈
( ∑
pj
(n) >y
(ξj
n−1 − ξj
n),
∑
pj
(n) ≥y
(ξj
n−1 − ξj
n)
]
. (11)
Define the aggregate residual quantity
Qi(y, s−i) =
L
∑
j=1
Qj
i (y, sj
−i), Pi(z, s−i) = inf{ y ≥ 0 : Qi(y, s−i) ≥ z }, (12)
where because Qi(y, s−i) is a right–continuous, nondecreasing step function with finitely many jumps at {pj
(m)}, the infimum is attained.
3.4 Valuation and Utility
Each buyer i has an elastic valuation function θi : [0, Qi] → [0, ∞) with strictly decreasing derivative θ′
i. The valuation depends on the total awarded quantity across all sellers:
Vi(a) = θi
(J ∑
j=1
aj
i (t)
)
=
∫
∑J
j=1 aj
i (t)
0
θ′
i(z)dz. (13)
Given a strategy profile s, the utility of buyer i for potential allocation a is dependent on the cost, ci(s), where the cost to buyer i as a function of the entire strategy profile s. In the dynamic setting this profile evolves with iteration t, where ci(s) may represent total participation costs, including membership fees, per–round overhead, and per–auction message costs. Utility is given by
ui(s) = Vi(a) − ci(s), (14)
where ci(s) is a dynamic cost function that evolves over time with bid updates. The buyers’ utility functions implicitly define a potential over the allocation space, as buyers seek to maximize their utility through strategic allocation requests. We note that a uniform (coordinated) bid price from buyers across active sellers upholds strategic simplicity and secondprice incentives, which are rational under quasi-linear utilities, as shown in the original PSP framework [12].

J. K. Blazek, F. C. Harris Jr. 42:7
Following Lazar and Semret [12], updates occur only when the buyer’s utility improvement exceeds a small positive threshold, ensuring asynchronous convergence under bounded delay. In a single–auction market, buyer i accepts a new bid s′
i only if ui(s′
i; s−i) − ui(si; s−i) > ε. In the multi–auction setting, buyer i posts a vector of bids that share a common marginal price p∗
i across all connected sellers. The utility comparison therefore becomes an aggregate test, where, in terms of the opposing bid vector s−i, any gain in utility at time t depends on the current state of play. Information propagation across the market affects how the vector of opposing bids s−i is formed, and thus how externalities are computed. The realized utility improvement ∆ui(t) is evaluated relative to the previous round to determine if a new bid exceeds the cost of participation. The discuss-
ion of externality under multiple auctions running asynchronously and a formal convergence analysis of the PSP mechanism to a single, unique, global ε-Nash network equilibrium, as was given in [19], is outside the scope of this paper. We instead focus on the iterative application of a uniform marginal price and the localized pricing structure resulting from progressive bid updates on connected network components consisting of multiple sellers sharing multiple buyers under an assumed bipartite stru-
cture. A formal analysis of the effects of latency on a PSP auction is given in [5].
4 Influence Sets
We model the behavior of vertices (buyers and sellers) in this bipartite structure using influence sets. Each vertex’s strategy space is influenced by neighboring vertices and evolves over time. Influence sets restrict the strategy space of buyers and sellers within bounded regions, stabilizing auction dynamics and supporting predictable market equilibria. As rational agents, buyers and sellers do not optimize perfectly but instead operate within acceptable thresholds of cost and utility. Influenc-
e propagation determines the flow of information, where bidding saturation occurs once influence sets stabilize. At saturation, there is no vertex that, upon calculating his measure of utility, suffers a changing set of opponent bids, and all subsequent bid updates are calculated on locally stable subgraphs of the market. Thus, influence sets are subsets of the auction graph that represent the scope of influence a particular vertex (buyer or seller) has on others over a finite number of auction it-
erations. These sets structure interactions into subsets of the auction graph where local equilibria form dense regions where bid updates are stabilized.
4.1 Primary (Direct) Influence Sets
Following the original definition from [6], the primary influence set, denoted Λ, for a given seller j at time t, is defined set-theoretically,
ΛL(j, t) =
⋃
i∈Bj (t)
Li(t), (15)
where Bj(t) is the set of buyers bidding on seller j, and Li(t) is the set of sellers that buyer i bids on. Thus, Λ(1)
L (j, t) represents all sellers directly connected to auction j via shared buyers at time t. This definition captures the notion that influence propagates across the auction graph through buyer–seller connections. The superscript (1) denotes the first layer of influence anchored at seller j expanding through buyer-mediated connections. To illustrate, for a buyer i, the relevant bids sj
i flow from the buyer to sellers. For a seller j, we reverse this; bids flow into the seller from buyers. The base case captures this directionality, which we get from market theory: buyers have positive demand, and sellers have negative demand
TGDK

42:8 Bipartiteness in PSP Multi-Auction Networks
(otherwise known as surplus). The direct influence set for buyer i, denoted Λ(1)
B (i, t), includes buyers directly connected to i through shared sellers,
ΛB(i, t) =
⋃
j ∈Li (t)
Bj(t). (16)
We now have the first layer of buyer-to-buyer influence induced by common seller participation. It serves as a foundation for constructing buyer–buyer influence graphs and identifying bid coordination structures within the network. This expression gathers the buyers indirectly connected to buyer i through shared sellers, filtered by active bids at the given iteration. It provides a way to trace buyer–buyer influence mediated through seller auctions. We extend the definition from [6] in a theoretic-
al and practical sense, defining the base case explicitly as the vertex itself,
Λ(0)(x, t) = {x}, (17)
emphasizing that at the zeroth level, the influence set represents only the vertex itself. This represents a measure of “self–influence”, such as reserve prices (for sellers) or initial valuations (for buyers), economically aligning with the idea that a seller starts from a reserve price reflecting their own valuation, while a buyer’s self-valuation corresponds to their initial maximum willingness-topay.
4.2 Expanded (Indirect) Influence Sets
For any vertex x in the auction graph (buyer or seller), and for n ≥ 1, the primary influence set is expanded from the (n − 1)–step influence set by aggregating direct neighbors at the next layer:
Λ(n)(x, t) =
⋃
y ∈Λ(n−1) (x,t)
Λ(1)(y, t). (18)
Where we define a two–hop projection operator
Λ(1)(y, t) :=

  
  
⋃
i∈By (t)
Li(t), if y ∈ L,
⋃
j∈Ly (t)
Bj(t), if y ∈ B,
which always returns vertices of the same type as y after one buyer–seller alternation. For sellers, the n–step influence set may be computed recursively,
Λ(n)
L (j, t) =
⋃
i∈Λ(n−1)
B (j,t)
Li(t),
where Λ(n−1)
B (j, t) is the set of buyers reachable from seller j in n − 1 steps. This returns the set of sellers that receive nonzero bids from buyers who are indirectly connected to auction j via shared bidding activity across n rounds of the PSP auction. It describes how seller j’s influence propagates through buyer behavior across seller neighborhoods. For buyers,
Λ(n)
B (i, t) =
⋃
j ∈Λ(n−1)
L (i,t)
Bj (t),
where Λ(n−1)
L (i, t) collects sellers indirectly connected to buyer i.

J. K. Blazek, F. C. Harris Jr. 42:9
Each new layer Λ(n)(x, t) therefore adds the direct neighbors of all vertices in the previous layer, producing a breadth–first expansion in the auction graph. This recursive expansion therefore builds a “growing influence ball” centered at x, where the secondary set acts as a generalized neighborhood closure or hull around the initial primary set. At each step n, the influence set Λ(n)(x, t) forms an outer boundary surrounding the influence set Λ(1)(x, t), recursively aggregating direct neighborho-
ods around previously identified influence vertices.
Pathwise Characterization.
In graph theory, this structure parallels the n-hop neighborhood closure or a breadth-first expansion of distance-n shells. We characterize Λ(n)(x, t) pathwise as the set of all vertices reachable from x by paths alternating between buyers and sellers, of length up to 2n. Formally, let G = (I, E) denote the bipartite auction graph, where I is the set of agents (buyers and sellers), and an edge (i, j) ∈ E exists if buyer i bids on seller j. The graph alternates between buyers and sellers by constru-
ction: no two buyers or two sellers are directly connected. Because of the bipartiteness we have the parity rule, and consequently
Λ(n)(x, t) = {y ∈ I ∣
∣ distG(x, y) = 2n}.
From a strategic perspective, the expanded influence set Λ(n)(x, t) describes the scope of anticipated externalities: the agents whose actions may not affect x directly, but may impact x’s incentives via shared neighbors. These influence chains emerge in environments with incomplete information and approximate the region of the market that affects the expected utility gradient of vertex x. In equilibrium analysis, these indirect sets are crucial for understanding stability, coordination potential,-
 and susceptibility to shock propagation (e.g., strategic manipulation or correlated noise). As noted in [6] and echoed in broader decentralized market theory (e.g., [20]), indirect influence plays a key role in shaping convergence. While Λ(x, t) governs observed interaction, Λ(n)(x, t) governs inferred or mediated interdependence–and together, they define the full strategic visibility of a vertex.
4.3 Projection Domains and Influence Operations
The influence set framework captures cascading dependencies and forms the foundation for our graph-theoretic analysis. To analyze the propagation of influence in the auction network, we construct influence sets using a sequence of projection operations on the underlying bid graph. Each active bid is indexed by a pair (i, j) ∈ B × L, where buyer i submits a bid to seller j. These interactions collectively form the strategy space S(t), which consists of the full collection of price-quantity bids sj
i . We extract the active subgame by identifying Iactive(t) ⊆ B × L, the set of observed interactions between buyers and sellers at time t. These pairs serve as both an interaction graph and an index set for the time-dependent strategy array s(t).
4.4 Projection-Based Influence Propagation
Let Iactive(t) ⊆ B × L be the set of buyer–seller pairs that submit positive bids at time t. Each pair (i, j) indexes the strategy array s(t) ∈ S(t), so Iactive(t) is both a graph on B ∪ L and an index set for the strategy space. Projection maps.
π : Iactive(t) −→ B, π(i, j) = i, π : Iactive(t) −→ L, π(i, j) = j.
Structural role. Alternating compositions π ◦π−1 ◦π ◦π−1 . . . trace paths through the bipartite auction graph, giving n-hop neighborhoods.
TGDK

42:10 Bipartiteness in PSP Multi-Auction Networks
Strategic role. Acting on S(t), the same maps carve out partial strategy profiles (e.g. all bids of a given buyer).
Full pre-images. We take the composition of the the projections in order to restrict and vectorize the space S(t). For any buyer i and seller j we write
π−1(i, t) = {(i, j′) ∈ Iactive(t)}, π−1(j, t) = {(i′, j) ∈ Iactive(t)},
so that
π ◦π−1(i, t) = {j′ | (i, j′) ∈ Iactive(t)} = Li(t), π ◦π−1(j, t) = {i′ | (i′, j) ∈ Iactive(t)} = Bj(t).
n-step influence. Because the graph is bipartite, two successive projections always return a vertex of the same type. These projections serve dual purposes: structurally, they trace paths through the auction graph, alternating between buyers and sellers; strategically, they extract subspaces of S(t) that represent partial strategies or responses and may evolve as patterns in the form of active bids sets.
Connected components via iterated projections
Because the auction graph is bipartite, two successive projections return a vertex of the same type. Define the composition operators
P := π ◦ π−1 (buyer → seller), Q := π ◦ π−1 (seller → buyer).
Starting from a seller j, one step of influence expansion is
Λ(1)
L (j, t) = P Q (j) = π ◦ π−1 ◦ π ◦ π−1(j, t),
which moves seller → buyers → sellers. Analogously, for a buyer i we set Λ(1)
B (i, t) = QP (i). The n-hop neighborhoods follow by simple iteration,
Λ(n)
L (j, t) = (P Q) n(j), Λ(n)
B (i, t) = (Q P ) n(i), n ≥ 1,
with the base case Λ(0)(x, t) = {x}. Each application of P Q (or QP ) adds exactly one buyer–seller alternation, so Λ(n)(x, t) is the breadth-first shell lying n hops away from x. Iterating until Λ(n)(x, t) = Λ(n−1)(x, t) closes the connected component containing x. Thus the recursive projection operator captures both direct and indirect influence flows. Thus, Λ(n) may be interpreted as the n-step neighborhood in the auction graph and as a dynamic closure of best-response behavior. Each expansion -
layer captures not just structural proximity but strategic influence–the transmission of incentive, information, and utility across the network. In this way, we convert local participation patterns into global influence propagation, formalized as graph-theoretic expansions over the projected structure of the strategy space.
4.5 Partial Ordering and Market Shifts
While the projection mappings π, π and their compositions produce index sets (subsets of B or L), these sets are characterized by the underlying strategy space S(t). These indices correspond directly to elements of the strategy space S(t), which contains structured bid information sj
i (t). That is, the projection π−1(i, t) retrieves all bid tuples (i, j) in the index set, but equivalently defines the subspace of si(t) consisting of all bid array submitted by buyer i at time t.

J. K. Blazek, F. C. Harris Jr. 42:11
Each element sj(t) ∈ Sj(t) is a bid array, and the collection π ◦ π−1(j, t). Aside from being an index set of buyers, we have a set of bid arrays {sj
i (t)}i∈Bj(t) that can be partially ordered by their
prices pj
(n)(t). While the projection operators isolate buyers or sellers structurally, the functional influence between market participants is mediated through the comparison of bid prices. This introduces a natural partial order among bidders for each seller at a fixed time, and we define a partial ordering on Sj(t) ⊂ S(t) by pj
i (t) < pj
k(t) if buyer i bids less than buyer k for the same seller j. Given the set of buyers Bj(t) = π ◦ π−1(j, t), we may impose a partial order structure based on the associated price bids {pj
i (t)}. This ordering determines which buyers are accepted by seller j (those with highest prices until the resource is exhausted), and the sensitivity of a potential equilibrium to shifts in bidding behavior. As shown in [6], a market shift occurs precisely when a buyer outside of Bj(t) improves their relative position in this order, causing Bj(t) to be recomputed. Such shifts reflect structural changes in functional influence, as they alter the competitive hierarchy among bids and propagate thro-
ugh the multi-auction environment. Specifically, a market shift in auction j occurs when the partial order of bids at seller j changes in a way that affects allocation. From [6], two cases are critical: 1. Demand Shortfall: A buyer i ∈ Bj(t) reduces their bid quantity so that total demand falls below available supply:
∑
i∈Bj (t)
aj
i (t) < Qj(t).
The auction must recompute its reserve price or reallocate supply among remaining buyers. 2. Bid Overtake: A buyer i∗ ∈/ Bj(t) improves their valuation so that
pj
i∗ (t) < pj
∗(t),
where pj
∗(t) is the minimum accepted bid price at auction j. The buyer i∗ displaces the marginal buyer, triggering a shift in Bj(t). Either case changes the minimal winning price, breaking the partial ordering within the projected sets, and forces the auction to recompute Bj(t). As the seller frontier Λ(1)
L (j, t) consists of sellers connected to j through shared buyers, the reallocation thereby propagates influence through layers of the the expansion Λ(n)
L (j, t) = (π ◦ π−1 ◦ π ◦ π−1)n(j).
5 Influence Shells and Local Saturation
The projection and ordering framework developed above allows us to describe how influence propagates through the auction network. We now ask under what conditions this propagation stabilizes. As buyers and sellers iteratively adjust bids, certain neighborhoods of the market reach a state in which no participant can improve their utility through unilateral deviation. These locally stable regions form influence shells–bounded subgraphs within which allocations, prices, and bid updates remain consist-
ent under further iterations. When every buyer and seller in such a region satisfies this best-response property, the shell is said to be saturated. The following gives the formal notation and enumerates the assumptions that we have made in the generalization of influence sets as were defined in [6].
▶ Definition 2 (Saturated Influence Shell). A primary influence set Λ(1)
L (j, t) associated with seller j at time t is said to be saturated if no buyer or seller within this set can improve their utility by unilaterally altering their bids. Formally, for every buyer i ∈ Bj(t) and every seller l ∈ Λ(1)
L (j, t), the following holds,
ui(t) ≥ u′
i(t), for any feasible alternative strategy s′
i(t).
TGDK

42:12 Bipartiteness in PSP Multi-Auction Networks
State A (before)
1 2 3 4 5
123456
0
1
2
3
seller j
buyer i
tier
phase transitions
State B (after)
1 2 3 4 5
123456
0
1
2
3
seller j
buyer i
tier
Figure 1 3D matrix view: rows (buyers), columns (sellers), and z encodes price tiers. The colored surface shows the buyer price; filled markers are active bids; open circles show marginal winners. The right panel shows a transition where a new high-tier participant appears at j=1, a demand shortfall removes a low cell, and a reconfiguration shifts activity at j=2.
Global market equilibrium decomposes into interconnected saturated shells, each functioning as stable subsystems. We establish conditions for the existence of a saturated influence shell.
(i.) Countable and Locally Finite Graph. The sets of buyers B and sellers L are at most countably infinite. Each participant engages in only finitely many transactions, ensuring finite degree at every instant. This guarantees that all projection maps (π, π) encounter only finite fibres and that the influence operator (18) perform finite unions. Buyers and sellers participate in locally finite networks, enabling stable equilibrium convergence within compact, bounded strategy spaces. Market rules ex-
plicitly limit resources and interactions, ensuring finite dimensionality. (ii.) Bounded Influence and Bids. Influence propagation strength remains bounded, preventing divergence. Each seller’s fixed endowment Qj and each buyer’s fixed demand cap Qi are finite and time-independent. Hence every non-zero bid quantity qj
i (t) lies in the compact interval [0, Qi], and every realized allocation is in [0, Qj]. (iii.) Partial Ordering Stability. The partial ordering induced by the bid structure must satisfy stable bid threshold rankings for all relevant buyers and sellers within the shell, thus establishing clear marginal price tiers.
5.1 Ordering and Influence Propagation
We recall the ordering relationship from [6] that holds for any seller within a saturated primary influence set Σ := Λ(1)
L (j, t).
▶ Lemma 3 (Local Price Ladder [6, Thm. 2.3, proof]). Let the market be at time t with seller j and its saturated primary influence set Σ := Λ(1)
L (j, t). Pick any neighbor k ∈ Σ and two buyers
i ∈ Bj(t), l ∈ Λ(1)
B (i, t) \ Bj(t),
i.e., i bids on j, k is another seller reached from i, and l is a buyer that bridges further to k but not to j. If the shell Λ(1)
L (j, t) is saturated–no profitable deviation exists for any vertex in this set–because l does not bid on j while i bids on both j and k, the marginal thresholds must nest as follows
sup (pk(t), pk(t)) ≤ p∗
l (t) < inf (pj(t), pj(t)) ≤ p∗
i (t), (19)

J. K. Blazek, F. C. Harris Jr. 42:13
where the marginal intervals are chosen as in (4), and in particular, every choice of reserve prices p∗k(t) ∈ (pk(t), pk(t)) and pj
∗(t) ∈ (pj(t), pj(t)) satisfies
pk
∗(t) ≤ p∗
l (t) < pj
∗(t) ≤ p∗
i (t). (20)
Proof. The argument for (20) is contained within the proof of [6, Thm. 2.3]. Left–to–right the chain reads (i.) p∗k seller k’s reserve price; (ii.) p∗
l buyer l’s bid that clears the marginal tier in both auctions;
(iii.) pj
∗ seller j’s reserve price; (iv.) p∗
i the highest active bid of buyer i on seller j.
The left inequality holds because k clears at the minimum of the two buyers’ bids; the strict middle inequality follows from l placing no bid on j; the right inequality is enforced by buyer i’s cross-auction participation. In a saturated shell, any profitable deviation by k toward j or by i away from j is ruled out. Hence buyer l’s marginal valuation must lie weakly above all prices at which newk can clear its final unit, while buyer i’s valuation must lie weakly below all prices at which j can st-
ill clear. This forces the margin intervals to nest as in (19). Since p∗k(t) ∈ (pk(t), pk(t)) and pj
∗(t) ∈ (pj(t), pj(t)) by the definition of the reserve price pj
∗, the pointwise ladder (20) follows immediately. ◀
Economically, this implies that higher prices at neighboring sellers prevent buyers from deviating profitably, ensuring that no participant has an incentive to alter their bidding strategy unilaterally. Hence, the ordering captures a stable distribution of resources and prices, reflecting locally optimal market conditions.
Weak (local) Monotonicity
The projected influence sets, together with the induced partial orders, thus form the dynamic framework for market evolution, where projections identify which vertices are connected, and partial orders determine how influence is transmitted via price shifts. Market shifts occur when the partial order structure is perturbed beyond certain thresholds, forcing recomputation of Bj(t) or reserve prices.
▶ Proposition 4 (Local Monotonicity). Let Σ = Λ(1)
L (j, t) be the saturated one-hop shell of seller j at time t. For each seller k ∈ Σ, let the marginal intervals be chosen as in (4), and let the reserve price p∗k(t) be selected inside the interval (pk(t), pk(t)). Now, consider the vector of seller reserves and buyer marginal valuations restricted to Σ. Under elastic, strictly decreasing valuation functions θ′
i(z) and any reserve-update rule that
(i) selects p∗k(t + 1) ∈ (pk(t + 1), pk(t + 1)) for each k ∈ Σ, and
(ii) is nondecreasing in the bids {pk
i (t)}i and the previous reserve p∗k(t),
the PSP price–update map
pk
∗(t) 7→ p ̃k
∗(t + 1) and pk
i (t) 7→ p ̃k
i (t + 1) (21)
is locally monotone on Σ.
Proof. Elasticity of the valuation functions implies that each buyer’s marginal value p∗
i (t) = θ′
i(zi(t)) is strictly decreasing in its own allocation. Increasing any bid or reserve inside the saturated shell Σ may raise some allocations and lower others, but it cannot create a reversal of
TGDK

42:14 Bipartiteness in PSP Multi-Auction Networks
the bid ordering that defines the interval (pk(t), pk(t)). In particular, all ladder relations (20) remain invariant under such updates. For sellers, the reserve-update rule is assumed nondecreasing in both the previous reserve p∗k(t) and the local bids {pk
i (t)}i. Thus any componentwise increase in (p∗k(t), pk
i (t)) cannot decrease any updated reserve p∗k(t + 1). By construction, each updated reserve remains inside its interval (pk(t + 1), pk(t + 1)), and, because the shell Σ is saturated, these intervals evolve compatibly with the ordering relations and cannot induce a downward jump that violates the ladder. Therefore, every coordinate of the updated pair (p∗k(t + 1), pk
i (t + 1)) is weakly increasing in the corresponding coordinate of (p∗k(t), pk
i (t)). Hence the update rule satisfies the order-preserving property (21), and the PSP price–update map is locally monotone on Σ. ◀
The partial ordering structure induced by bidding behavior is essential in analyzing and predicting the direction and magnitude of market shifts resulting from influence dynamics. A local allocation triggers global bid adaptation, reinforcing that while seller auctions operate independently, buyer strategy space remains tightly coupled. In integrated markets (scarce supply), the partial orders are dense and tightly coupled, making markets highly sensitive and globally coordinated. In fragmented ma-
rkets (abundant supply), the partial orders become sparse and disconnected, leading to localized equilibria and insulating submarkets from external shocks. Thus, the transition from integrated to fragmented equilibrium is not just a graph phenomenon–it is a transition in the connectivity of the partial order structure induced by bidding.
▶ Remark 5 (On the ordering of the PSP price map). Although the local update map is written on the pair (pj, pj
i ), the PSP rule actually acts only on the first coordinate: the buyer’s bid pj
i is simply carried forward (or set to 0 if j ∈/ Li).
5.2 Asynchronous Sellers and Coupled Buyers
To represent the fine-grained dynamics of bid selection and displacement within an auction round, we introduce an internal index τk to describe local progression steps. Each τk denotes a partial–ordering resolution event—an allocation decision at auction j followed by an update to the reserve price and potentially to the projected sets. The index acts as a local time variable inside the global iteration t, allowing us to separate micro–adjustments from round-to-round evolution.
▶ Definition 6 (Allocation Step τk). At each τk within round t, seller j selects the highest bidder in π ◦ π−1(j) not yet fulfilled, allocates a feasible amount aj
i (τk), updates the reserve price pj
∗(τk+1), and recomputes Bj and ΛL(j) as needed.
Each τk inside a global round t is therefore a local ordering–resolution event: seller j picks the highest unfilled bidder, allocates a feasible amount aj
i (τk), updates its reserve, and recomputes
the bidder set Bj(t) as well as the seller shell Λ(1)
L (j, t). The sequence τ1, τ2, . . . terminates when no remaining buyer meets the current reserve or when supply is exhausted. Sellers operate independently: each seller’s τk sequence proceeds without synchronization with others. However, buyers must maintain a consistent strategy across all sellers they bid on. Since the buyer’s bid array σi(t) is defined jointly over Li(t), any change to the outcome of one auction requires coordinated updates across all components. This coupling between independ-
ent seller threads through shared buyers produces the feedback mechanism responsible for market coherence. From a game–theoretic perspective, each seller executes a local best–response process, while each buyer enforces cross–auction consistency of marginal valuation. We define the buyer update rule as
qj
i (τk+1) = Qi(t) −
∑
j ′ ∈Li (t)
aj′
i (τk), ∀j ∈ Li(t), (22)

J. K. Blazek, F. C. Harris Jr. 42:15
indicating that the buyer updates all bids simultaneously based on observed allocations. Equation (22) ensures that a buyer’s total requested quantity never exceeds its available resource Qi(t) and redistributes residual demand across the active seller set Li(t). The rule formalizes how buyers translate local allocation feedback into revised offers, maintaining a form of budget balance across asynchronous auctions. Because sellers run their τk threads asynchronously while buyers must update all bi-
ds coherently according to (22), local price changes propagate through the partial orders defined above, layer by layer. Each seller’s reserve adjustment initiates a chain of bid updates in the neighborhoods that share its buyers. This extends the projection–ordering framework, enabling intra–round modeling of bid dynamics, bid–induced reordering, and precise tracking of influence propagation through updates to the projected domains. In this sense, the τk sequence acts as a micro–time resolution t-
hat reveals how local saturation unfolds inside each global auction round.
Stability under asynchronous evolution
The following proposition shows that, even under these independent update threads, the relative ordering of bids remains stable and the local price ladder is preserved.
▶ Proposition 7 (Saturated Shell). Let Σ = Λ(1)
L (j, t) be saturated at τk. Assume that for every seller k ∈ Σ the reserve price lies in the interval,
pk(τk) < pk
∗(τk) < pk(τk),
and that each τ –update preserves all ladder relations (20) inside Σ. If a local resolution step τk → τk+1 modifies the strategy space only inside Σ, then: (i) The ladder (20) is preserved: no ordering reversal is possible, and every affected marginal or reserve price weakly increases; a strict increase occurs whenever the winning bid or reserve at some seller in Σ rises. (ii) If every buyer or seller that first appears in Σn+1 \ Σn has no profitable deviation given the preserved ladder, then the -
expanded shell Σn+1 is saturated.
Proof. If a τ –update reallocates quantity within Σ, the clearing price or reserve at the affected seller can only move upward within its margin interval. Because all reserves and winning bids in Σ lie inside their intervals (pk, pk), no update can create a reversal of the ordering that defines the ladder (20). Thus each affected component moves weakly upward, and whenever the winning bid or reserve at some seller in Σ increases, at least one of the four prices in the ladder strictly increases. Sa-
turation implies every τ –update inside Σ preserves best–response conditions given the ladder; hence extending Σ by including agents in Σn+1 \ Σn yields a saturated larger shell whenever those newly added agents also have no profitable deviation under the same ordering. ◀
Saturation implies every τk update inside Σ is either a demand–shortfall or bid–overtake event; both raise the marginal price they touch, propagating weakly upward along every chain of the form (20). A strict increase occurs whenever the winning bid or reserve at some auction in Σ is lifted. Thus, local “saturation” is a best–response property of a one–hop influence shell. By an inductive test we extend saturation shell–by–shell.
▶ Corollary 8. The new shell Σn+1 inherits the price–ordering ladder (20): all its marginal prices are no smaller than those in Σn; in particular, p∗k(τk+1) ≥ p∗k(τk) for all k ∈ Σn+1.
Proof. Consider any buyer–seller quadruple (k, l, j, i) whose seller k lies in the freshly revealed layer Σn+1 \ Σn. Applying Proposition 4 to that quadruple shows that the ladder inequality (20)
TGDK

42:16 Bipartiteness in PSP Multi-Auction Networks
is preserved and all four prices weakly increase. Repeating this argument for every such quadruple that touches Σn+1 completes the extension of the monotone ladder one hop outward. For every edge (i, k) with k ∈ Σn, Proposition 7 guarantees that a local τ –update cannot decrease the marginal price p∗k. Hence (p∗k
)
k∈Σn is component–wise non–decreasing from τk to τk+1. ◀
The asynchronous update model developed above provides the conceptual foundation for our simulation studies. It captures the essential features of decentralized PSP dynamics: sellers acting independently on local information, buyers coordinating across overlapping auctions, and influence propagating through partially ordered interactions. In the following section, we use these principles to construct an event–driven simulation framework that allows us to observe how local saturation emerges in pra-
ctice.
6 Simulation Framework and Implementation
This section summarizes the simulation code used to study the PSP markets with multiple sellers and buyers. The simulation architecture explores the practical realizations of decentralized coordination. The event-driven approach reproduces the iterative best-response behavior implied by the mechanism and allows examination of convergence properties, price dispersion, and efficiency loss due to network coupling. Following Semret and Lazar [12], each buyer’s valuation is given by a parabolic curve o-
f the form θi(z) = κi(q ̄i − z/2)z for z ∈ [0, q ̄i]
where q ̄i represents the maximum quantity of goods desired and κi = p ̄i/q ̄i has dimensions marginal price per unit where p ̄i is the maximum marginal value that buyer i would ever place on the resource.
6.1 Event-Driven Algorithm and Asynchronous Updates
The simulation operates as a discrete-time event system. Events are scheduled and processed in a priority queue, advancing the simulation clock t to the next event. Two event types exist: 1. Buyer Compute: Buyer i evaluates its local state, computes updated bids (zj
i , pj
i ) on each connected seller j, and schedules bid events when meaningful changes occur. 2. Post Bid: Seller j clears its auction, applying second-price allocation and updating quantities, payments, and revenues. Buyer and seller events may reschedule each other (e.g., clears triggered after meaningful bid changes). The loop halts when no effective changes remain or a step limit is reached. The simplified pseudocode is shown in Algorithm 1.
Algorithm 1 Event-driven PSP simulation
1: Initialize market state M ; schedule all buyers. 2: while queue not empty and not converged do 3: (t, type, payload) ← pop() 4: if type = BUYER_COMPUTE then 5: Update (zj
i , pj
i ) for buyer i on feasible links. 6: Schedule POST_BID events for affected sellers. 7: else if type = POST_BID then 8: Seller j clears auction, enforcing Qj, opponent ordering, and payments. 9: end if 10: end while

J. K. Blazek, F. C. Harris Jr. 42:17
Each buyer i computes a uniform (or per-seller) bid price using a valuation-based update w = θ′
i(∑
j zj
i ). Quantities are apportioned across incident sellers using a local best-response step.
Buyers are sorted by descending unit price pj
(n). The clearing process accumulates allocations
until total demand equals available resource Qj. The threshold price
pj
∗ = min{pj
i:
∑
k:pj
k ≥pj
i
qj
k ≥ Qj} (23)
identifies the seller’s marginal (clearing) price.
For each seller j, the clear routine builds a partial ordering by posted marginal prices (bid prices), serves opponents until available resource Qj is exhausted, and charges the price incurred by the externality of participation to all served buyers for that seller. The routine updates a, seller revenue, and per-buyer costs. We define the set of active buyers with positive bids as
Ij = {i : qj
i > 0, aij ∈ A}, (24)
where A represents the biadjacency matrix captures direct buyer–seller interactions:
A(t) ∈ 0, 1|B|×|L|,
where Aij(t) = 1 if buyer i bids on seller j at time t, and Aij(t) = 0 otherwise. Rows of A(t) identify each buyer’s active sellers; columns identify all buyers bidding on a given seller.
Experiments are conducted using randomized networks of I = |B| buyers and J = |L| sellers. The connectivity matrix Aij determines which buyers may interact with which sellers. Each run uses the following protocol:
1. Initialize market state M with parameters (I, J, Qj, ε, reserve).
2. Assign buyer valuations (q ̄i, κi) and budgets bi from uniform ranges.
3. Generate random adjacency matrices with varying density (percentage of shared buyers).
4. Execute the event-driven simulation for a fixed iteration limit.
5. Record convergence statistics, prices, allocations, and revenues.
The event scheduler supports both deterministic and stochastic updates, allowing controlled comparison between synchronous and asynchronous dynamics.
Experimental Setup.
Each experiment initializes a market with I buyers and J sellers. Seller capacities are fixed at Qmax = [60.0, 40.0], with buyers distributed across both sellers according to a connectivity percentage that varies from 0% (fully isolated) to 100% (fully connected) in increments of 10%. For each connectivity level, a base random seed (base_seed = 20405008) ensures reproducibility while allowing controlled stochastic variation across runs.
Buyers’ valuation parameters are drawn independently from uniform ranges:
q ̄i ∼ U (10, 60), κi ∼ U (1.0, 3.5).
Noise and perturbation effects are controlled by ε = 2.5. For each seed and connectivity level, the simulation executes until convergence, measuring clearing prices, allocations, and bid prices.
A sequence of derived seeds seed = base_seed+s is used for each connectivity level s, ensuring comparable random draws while preserving independence across runs.
TGDK

42:18 Bipartiteness in PSP Multi-Auction Networks
6.2 Price Ladder Verification
The simulation presented here focuses on verifying the price ladder condition across interconnected sellers. This experiment represents a localized instance of the broader PSP market, designed to test whether clearing prices obey a monotonic relationship when sellers share buyers through overlapping influence sets. The experiment initializes a small market composed of two sellers (j = 1 and l = 0) and four buyers (i = 0, 1, 2, 3). The adjacency structure allows some buyers to connect to both selle-
rs, while others remain local. Sellers have distinct capacities, Q1 = 8 and Q0 = 15, reflecting asymmetric market sizes. The buyer valuation and bid initialization follow:
(0, 1) : q = 8, p = 40, (0, 0) : q = 8, p = 40,
(1, 0) : q = 2, p = 4, (2, 0) : q = 6, p = 1.
We have the connectivity of the market, in alignment with Lemma 3.
Figure 2 Adjacency structure showing market connectivity between buyers and sellers.
01 seller j
0
1
2
3
buyer i
Adjacency (matrix view)
buyers
sellers
b0 b1 b2 b3
s0 s1
Adjacency (bipartite view)
buyers sellers
Market connectivity
The resulting market has a highly skewed valuation distribution, allowing one buyer to dominate both sellers, while others form the marginal tiers that define second-price boundaries. The algorithm scans all sellers and their one-hop neighbors to evaluate tuples (l, k, j, i) where Buyer i connects the two sellers. It tests the three inequalities defining the ladder ordering p∗
l < pk < p∗
j ≤ pi. If these inequalities hold for all tuples, the market satisfies the monotone price ladder condition. Violations are reported with detailed tuple traces to aid in diagnosing market inconsistencies. In this configuration, the ladder tuples satisfy all three inequalities, confirming a monotone relationship among clearing and bid prices. The system outputs a detailed report including, number of valid tuples and unique seller pairs (j, l), margins between successive price tiers: (pk − p∗
l ), (p∗
j − pk), and (pi − p∗
j ), and a summary of any violations detected. For this experiment, the output indicates no violations and consistent monotonicity, demonstrating that the PSP clearing mechanism maintains a globally ordered price structure when local competition and influence overlap exist. This controlled experiment provides an analytical validation of the price ladder lemma in a simplified setting, and is intended to act as a unit test. It confirms that bid prices across connected sellers obey the expected inequ-
alities implied Lemma 3. More generally, it shows that when buyers bridge multiple sellers, the second-price mechanism induces a coherent ordering of marginal prices, and provides an analytical tool for extending this verification to larger graphs. In the tuples

J. K. Blazek, F. C. Harris Jr. 42:19
Figure 3 Buyer 0 valuation curve and marginal diagnostics.
0 5 10 15 20 25 30 Total quantity z
0
200
400
600
800
1000
1200
i(z)
Buyer 0: valuation
0 5 10 15 20 25 30 Total quantity z
0
10
20
30
40
50
60
70
80
Marginal value / Price
p[01]=40.00
z=16.000
'=36.354
val=924.951
cost=3.352
util=921.599 joint-best-response =15.500, =37.695
Buyer 0: marginal vs. prices
Buyer 0: valuation & marginal diagnostics
(l, k, j, i) = (0, 1, 1, 0) and (0, 2, 1, 0) we observe
p∗
l = 1.0, pk ∈ {4.0, 1.0}, p∗
j = 40.0, pi = 40.0.
Thus the high-tier buyer at seller j sits at the clearing price, while mid-tier competitors remain strictly below p∗
j . The reported margins (pk − p∗
l ) = 0, (p∗
j − pk) = 36, and (pi − p∗
j ) = 0 reveal a wide central gap: a single dominant tier clears seller j, whereas seller l is anchored by low-tier participation at a much smaller price. The monotone relationship validated here provides empirical confirmation of Lemma 3. The experiment illustrates how buyers bridging sellers stabilize the market through consistent price ordering, even when capacities and bid magnitudes differ substantially. The asymmetry in seller revenues and capacities demonstrates how equilibrium adapts to ne-
twork structure, with high-valuation buyers dominating smaller auctions and lower-tier participants anchoring larger ones. Our next experiment allows us to observe the propagation of equilibrium constraints across overlapping influence shells, offering empirical evidence for Propositions 7 of this paper.
6.3 Connectivity
Further experimental results are aggregated as functions of the overlap percentage between buyerseller pairs, revealing how market interdependence affects stability, bid prices, and efficiency. The framework also enables sensitivity analysis under perturbations to parameters such as ε, budget distributions, and the structure of influence sets. In this experiment, connectivity was gradually increased to observe how equilibrium formation and price alignment change as the market transitions from isol-
ated to coupled seller networks. Starting from a sparse adjacency structure, buyers were allowed to participate in multiple auctions, creating overlaps that induced cross-seller influence and coupling of price dynamics. Figure 4 illustrates the adjacency structure used in the experiment. Connectivity defines the feasible market domain Iactive(t) ⊂ B × L that bounds all strategic interactions. Figure 5 shows the utility surface for a single buyer–seller pair, as was presented in [12] , here buyer 6-
 and seller 0, plotted over bid quantity zj
i and price wj
i . The surface depicts the
buyer’s instantaneous utility ui(zj
i , wj
i ) = θi(zj
i ) − zj
i wj
i given the opponent bids and current market reserve. The concave ridge indicates the buyer’s optimal quantity at the current price
TGDK

42:20 Bipartiteness in PSP Multi-Auction Networks
Figure 4 Adjacency and market connectivity for the 8 × 2 experiment. Connectivity is set at 50%.
01 seller j
0
1
2
3
4
5
6
7
buyer i
Adjacency (matrix view)
buyers
sellers
b0 b1 b2 b3 b4 b5 b6 b7
s0 s1
Adjacency (bipartite view)
buyers sellers
Market connectivity
level, while the lower regions show diminishing returns and cost-dominated outcomes. We see a stable interior optimum: movements along the quantity axis correspond to allocation changes, whereas movements along the price axis reflect valuation gradients.
Figure 5 Single buyer–seller utility surface for buyer 6 at seller 0. The surface plots ui(zj
i , wj
i ) = θi(zj
i ) − zj
i wj
i over quantity zj
i and unit price wj
i, holding the opposing bids fixed at the snapshot.
q u a n t i t y z t o s e l l e r j
0 10 20 30 40 50 60
pricewtosellerj
0 20406080101021041060
u_i (PSP)
0
500
1000
1500
2000
2500
3000
Utility Surface (buyer 6, seller 0)
Now, for Buyer 6 we evaluate the staircase Pi(·, s−i), compute (vi, wi), perform the minimal–cost fill, and then read off the realized total zˆi and price p∗ := Pi(zˆi, s−i). The left panel shows (zˆi, θi(zˆi)) on the concave valuation curve; the right panel shows θ′
i(z) together with the dashed price level p∗. In the runs shown, the valuation is quadratic,
θi(z) ≈ az − b
2 z2, θ′
i(z) = a − bz, a ≈ 66, b ≈ 1.1,
so marginal value declines approximately linearly from θ′
i(0) ≈ 66 to near zero around z ≈ 60.

J. K. Blazek, F. C. Harris Jr. 42:21
0 10 20 30 40 50 60 Total quantity z
0
250
500
750
1000
1250
1500
1750
i(z)
Buyer 6: valuation
0 10 20 30 40 50 60 Total quantity z
0
10
20
30
40
50
60
70
Marginal value / Price
p[0]=28.60
p[1]=0.00
z=26.114
'=34.557
val=1310.501
cost=13.951
util=1296.550 joint-best-response =52.227, =33.355
Buyer 6: marginal vs. prices
Buyer 6: valuation & marginal diagnostics
(a) Constraint-limited: the joint best response lies on a feasibility boundary; θ′
i(zˆi) > p∗ so the buyer would
expand if capacity at p∗ were available.
0 10 20 30 40 50 60 Total quantity z
0
250
500
750
1000
1250
1500
1750
i(z)
Buyer 6: valuation
0 10 20 30 40 50 60 Total quantity z
0
10
20
30
40
50
60
70
Marginal value / Price
p[0]=0.00
p[1]=28.60
z=28.277
'=31.968
val=1382.459
cost=81.467
util=1300.992 joint-best-response =28.277, =29.073
Buyer 6: marginal vs. prices
Buyer 6: valuation & marginal diagnostics
(b) Interior optimum: here θ′
i(zi) > p, so the buyer would expand if possible. The joint–best–response is the point where θ′
i(z) = p.
Figure 6 Buyer-level diagnostics under the Progressive Second Price (PSP) joint best response. Each panel shows the valuation θi(z) with the realized point (zˆi, θi(zˆi)) and the marginal curve θ′
i(z) with a dashed line at p∗, illustrating the transition from constraint-limited to price-limited behavior along improvement paths.
Two sellers induce a two–step staircase in Pi; the three snapshots correspond to marginal price levels near p∗ ≈ 32.1 with zˆi ≈ 28.2 (interior), p∗ ≈ 28.6 with zˆi ≈ 28.3 (price–limited), and a high–availability case with zˆi ≈ 52.2 where the buyer is constrained by feasibility at that price. These values are taken directly from the algorithm’s output and no post–hoc smoothing is applied.
When the X marker in the marginal panel lies above the dashed line, the realized point satisfies θ′
i(zˆi) > p∗; the buyer would buy more at the prevailing price, but the minimal–cost fill has saturated feasible capacity at that price, so the joint best response is attained on a boundary of the feasible region rather than at marginal equality. When the marker sits on the dashed line, θ′
i(zˆi) = p∗ holds and the allocation is locally efficient; here the construction returns an interior maximizer of Ui(z) = θi(z) − ci(z). When the marker lies below the dashed line, θ′
i(zˆi) < p∗ and any further increase in quantity would decrease utility; the best response is therefore at or near a participation boundary even though the valuation point on the left panel is well inside the curve.
Table 2 Buyer regimes and their economic interpretation.
Regime Relation Economic meaning
Constraint-limited θ′
i(z∗) > p∗ Buyer wants more, but supply or externality restrict.
Equilibrium (interior) θ′
i(z∗) = p∗ Marginally efficient allocation — true local equilibrium.
Price-limited θ′
i(z∗) < p∗ Buyer withdraws — market too expensive.
Figure 7 extends the analysis to the joint allocation space of the two sellers, each point on the surface corresponds to a feasible distribution across sellers 0 and 1 under a uniform price w = θ′
i(ztotal). The height of the surface indicates utility under the split given the opposing bids present in the snapshot. The ridge along constant ztotal identifies the efficient split between sellers: solutions on the plateau indicate a local optimum; as the solution shifts below a ridge the buyer could improve utility by increasing its bid quantity, and the solution shifts toward the seller facing weaker opposing demand. Therefore, even with a uniform price tied to ztotal, the allocation decision -
remains two-dimensional due to how opponent demand and residual available resource shape the intersection of feasible pricing and allocations.
To summarize our results, seller 0, with greater available resource (Qmax = 60), cleared at a slightly higher price p0∗ = 30.084 than Seller 1 (p1∗ = 28.597). Despite this asymmetry, both sellers exhibited similar expected revenues (E0 = 44.76, E1 = 31.16) and low variance, attributed to 40% of buyers participating in both markets. The shared influence among these buyers synchronized
TGDK

42:22 Bipartiteness in PSP Multi-Auction Networks
Table 3 Interpretation of ridges in the buyer’s utility surface.
Ridge type What it corresponds to
Sharp rise in ui A new seller step becomes available (increase in supply).
Sharp drop Another buyer’s bid dominates → PSP second-price step kicks in.
Plateau Both sellers saturated or prices equalize (local equilibrium).
Figure 7 Shared-seller utility surface where buyer 6’s utility is a function of total requested quantity ztotal = z0 + z1; ui(z0, z1) = θi(ztotal) − w(zo, z1)(ztotal) and w = θ′(ztotal): the feasible participation surface.
a l l o c a t i o n
f r o m
s e l l e r
0
( z
)
0 10 20 30 40 50 60
allocationfromseller1(z )
0
5
10
15
20
25
30
35
40
u
0
200
400
600
800
1000
Buyer 6: utility surface in (z , z ) w = (z +z )
current
0.0
0.2
0.4
0.6
0.8
1.0
u
seller behavior, leading to a nearly uniform price surface. Buyer-level data shows that bridging buyers—particularly buyers 6 and 7—maintained bids across both sellers with marginal valuations (32.118, 33.355) close to Seller 0’s clearing price. Their dual participation enforced cross-market coherence, ensuring that no single auction could deviate significantly from the shared equilibrium. Buyers at the margins (e.g., 1 and 2) contributed to shaping intermediate prices, stabilizing the monotone pr-
ogression across tuples. Furthermore, at each equilibrium or stopping point, the following quantities were collected,
Ej = 1
Aj
∑
i∈Bj
aj
i pi and Vj = 1
Aj
∑
i∈Bj
aj
i (pi − Ej)2 where Aj =
∑
i∈Bj
aj
i
where Ej is the expected seller revenue, Vj is the variance of seller revenue across realizations. In addition, buyer classification (winners, zero allocation, opt-out behavior) and network statistics (fraction of shared buyers, influence overlap) are collected. Figure 8 shows that as connectivity increases, both sellers exhibit convergence in marginal value and clearing price. Seller 0 maintains a higher marginal value throughout due to its larger available resource (Qj = 60), but the gap between-
 sellers narrows with increasing overlap, confirming that multi-auction buyers mediate price synchronization across markets. The alignment of E(pi) and p∗ demonstrates how shared influence accelerates equilibrium formation and reduces price dispersion.
Overall, increasing connectivity transforms the market from a set of independent price islands

J. K. Blazek, F. C. Harris Jr. 42:23
0 20 40 60 80 100 % of buyers bidding in multiple auctions
20
30
40
50
60
70
Marginal Value/ Price
Marginal Value vs % Multi-Auction Buyers
Seller 0 E(p_i) Seller 0 p* Seller 1 E(p_i) Seller 1 p*
Figure 8 Marginal value versus the percentage of buyers participating in multiple auctions.
into a unified utility surface. Sparse configurations produce local equilibria with greater variance between sellers, while denser networks encourage faster convergence through influence propagation. These findings validate the theoretical expectation that shared influence sets promote global coordination and equilibrium alignment.
Statement on Supplementary Material
The code for the experiments presented in this paper can be found at:
https://drive.google.com/drive/folders/193g7ZbiIKGZRsutuuSB-fwf-jBnmYHo9
https://github.com/jkblazek/TGDK-2025
7 Conclusion and Future Work
This paper establishes a graph-theoretic framework for analyzing Progressive Second-Price (PSP) auctions, connecting decentralized market dynamics to structural properties of influence graphs. We formalized and expanded the concepts of influence sets and saturation, which together bound strategy spaces deterministically and ensure stable, truthful convergence in decentralized settings. Our analysis relies on two levels of saturation, linked by the partial-ordering structure of bids; local saturati-
on is a set–level best–response property. Establishing a formal fixed-point characterization of this process–perhaps using lattice or order-theoretic methods–remains an important direction for future work. Our present analysis instead focuses on the constructive evolution of influence shells and the preservation of local monotonicity. Specifically, our approach demonstrates how recursive expansions of influence sets reveal market interactions across successive auction rounds. By introducing intra--
round resolution via the τk steps, we provide a finer-grained analytical tool to model the internal dynamics of auction iterations, clarifying the subtle interactions between buyer strategies and seller pricing rules. The establishment of monotonicity in bid updates via induced partial ordering ensures stable, non-oscillatory convergence under realistic, elastic valuation conditions. Our framework provides a robust method to anticipate market shifts, characterize equilibrium thresholds, and ensure-
 consistent propagation of influence across dynamic network topologies.
TGDK

42:24 Bipartiteness in PSP Multi-Auction Networks
Future research will explore several promising extensions in reserve price optimization. Could there be an optimal coordinated reserve vector, chosen using buyer feedback, that upholds Lemma 3? We start by defining an admissible reserve price region, where for fixed t, the admissible set of reserve profiles is
R(t) = {p∗ ∈ RJ : pj
∗ ∈ (pj(t), pj(t)) ∀j, and Lemma 3 holds}.
Thus, we may determine the existence of coordinated reserve profile, where, given seller-side weights wj ≥ 0 at time t, is defined as any pcoord
∗ (t) ∈ R(t) that maximizes
Φ(p∗) =
J
∑
j=1
wj Qj (t) pj
∗
over R(t). We conjecture that at least one coordinated reserve profile pcoord
∗ (t) exists for every ε > 0. Moreover, every such profile preserves the interval ladder inequalities (19) and hence is consistent with local saturation of primary influence shells. Finally, integrating stochastic perturbations and noise into the PSP framework will deepen the realism of the model, allowing exploration of market resilience under uncertainty. Additionally, applying resistance distance [3] to the reserve profiles and diffusion-based influence models could yield deeper insights into i-
nfluence propagation and market stability. Finally, empirical validation through simulation and real-world decentralized applications, such as spectrum and bandwidth auctions, will be critical to validate and refine theoretical predictions and improve practical mechanism design.
References
1 Marcos K. Aguilera and Sam Toueg. Failure detection and consensus in asynchronous systems. In Proceedings of the 2012 International Symposium on Distributed Computing, pages 114–128, 2012. 2 Osvaldo Anacleto and Catriona Queen. Dynamic Chain Graph Models for Time Series Network Data. Bayesian Analysis, 12(2):491 – 509, 2017. doi:10.1214/16-BA1010.
3 Wayne Barrett, Emily J. Evans, and Amanda E. Francis. Resistance distance in straight linear 2trees, 2017. URL: https://arxiv.org/abs/1712. 05883, doi:10.48550/ARXIV.1712.05883.
4 Melanie Baur. Combinatorial concepts and algorithms for drawing planar graphs. X, 01 2012. 5 Jordana Blazek, Eric Olson, and Frederick C. Harris. The effects of bid latency in a progressive second price auction. Preprint, 2025. 6 Jordan Blocher and Frederick C. Harris. An equilibrium analysis of a secondary mobile data-share market. Information, 12(11), 2021. URL: https://www.mdpi.com/2078-2489/12/11/ 434, doi:10.3390/info12110434.
7 Felix Brandt and Tuomas Sandholm. On the existence of optimal auctions in the presence of collusion. In Proceedings of the 9th ACM Conference on Electronic Commerce, pages 267–276, 2008.
8 Edward H. Clarke. Multipart pricing of public goods. Public Choice, 11:17–33, 1971. doi: 10.1007/BF01726210.
9 A. Delenda, Patrick Maillé, and Bruno Tuffin. Reserve price in progressive second price auc
tions. In X, pages 755– 759 Vol.2, 01 2004. doi:10.1109/ISCC.2004.1358631.
10 Theodore Groves. Incentives in teams. Econometrica, 41(4):617–631, 1973. doi:10.2307/1914085. 11 Jon Kleinberg and Éva Tardos. Algorithm Design. Addison-Wesley, Boston, MA, 2007. 12 Aurel Lazar and Nemo Semret. Design, analysis and simulation of the progressive second price auction for network bandwidth sharing. Game theory and information, University Library of Munich, Germany, 1998. URL: https://EconPapers. repec.org/RePEc:wpa:wuwpga:9809001.
13 Nancy A. Lynch. Distributed Algorithms. Morgan Kaufmann, 1996. 14 Patrick Maill’e and Bruno Tuffin. Analysis of the progressive second price auction. Telecommunication Systems, 35(3-4):245–258, 2007. 15 T.S. Michael and T. Quint. Sphere of influence graphs: Edge density and clique size. Mathematical and Computer Modelling, 20(7):19–24, 1994. doi:10.1016/0895-7177(94)90067-1.
16 Takuya Oki, Yusuke Matsubara, Takahiro Yabe, Naoya Takeishi, and Yoshinobu Kawahara. Modeling influence propagation with graph neural networks. In Proceedings of the 27th International Joint Conference on Artificial Intelligence (IJCAI), pages 3817–3823, 2018. 17 Zheng Qu, Yue Jia, and Peter E. Caines. Quantized progressive second price mechanisms for decentralized resource allocation. In Proceedings of the 46th IEEE Conference on Decision and Control (CDC), pages 1475–1482, 2007.

J. K. Blazek, F. C. Harris Jr. 42:25
18 Zheng Qu, Yue Jia, and Peter E. Caines. Convergence and stability of networked progressive second price auctions. Automatica, 45(9):2107–2114, 2009.
19 Nadine Semret. Market Mechanisms for Network Resource Sharing. Ph.d. dissertation, Columbia University, 2000.
20 Devavrat Shah. Message-passing in stochastic processing networks. Laboratory for Information and Decision Systems, Department of EECS, Massachusetts Institute of Technology, 2011. URL: http://www.mit.edu/~devavrat/ papers/message_passing_survey.pdf.
21 Godfried T. Toussaint. The sphere of influence graph: Theory and applications. In 3rd International Conference on Information Technology, System & Management (ICTSM 2014), Abu Dhabi, UAE, May 2014. URL: https://api. semanticscholar.org/CorpusID:124361892.
22 William Vickrey. Counterspeculation, auctions, and competitive sealed tenders. Journal of Finance, 16(1):8–37, 1961. doi:10.2307/2977633. 23 Wei Wang, Sheng Zhong, and Jing Chen. Differentially private mechanism design for spectrum auctions. IEEE Transactions on Mobile Computing, 20(8):2734–2748, 2021.
A Market Shift Revealed by Partial Ordering
▶ Example 9 (Market Shift Revealed by Partial Ordering). In this example we model a simple reactive reserve update,
pj
∗(t + 1) = max
{
pj
∗(t), max
i∈/Bj (t)
pj
i (t) + ε
}
,
with ε > 0 providing strict improvement for convergence. Thus the seller always keeps its internal bid strictly above the highest losing buyer, and the reserve price is nondecreasing in t. Alternative clearing–price rules that set pj
∗ to the threshold χj(t) are equivalent for our results. Consider a PSP auction market with two sellers L1, L2 and four buyers B3, B4, B5, B6. Initial buyer-seller connections are represented by the adjacency matrix:
A(0) =
L1 L2 B3 1 0 B4 1 1 B5 1 1 B6 0 1
Auction Iteration t = 1
Seller L1 initially receives bids from B3, B4, B5. Suppose initial bid prices are ordered as follows:
pL1
B3 (1) = 2.0 > pL1
B4 (1) = 1.8 > pL1
B5 (1) = 1.5.
Progressive allocation steps for L1:
τ1 : B3 allocated requested quantity, pays second-highest price 1.8. Seller updates reserve to 1.8 + ε.
τ2 : B4 allocated next available quantity, pays 1.5. Reserve updates to 1.5 + ε.
τ3 : B5 receives allocation, pays reserve (1.5 + ε).
Seller L2 has bids from B4, B5, B6, with initial ordering:
pL2
B5 (1) = 1.9 > pL2
B4 (1) = 1.7 > pL2
B6 (1) = 1.4.
Progressive allocation steps for L2:
τ1 : B5 allocated, pays second-highest price 1.7. Reserve updates to 1.7 + ε.
τ2 : B4 allocated next, pays 1.4. Reserve updates to 1.4 + ε.
τ3 : B6 allocated, pays reserve (1.4 + ε).
TGDK

42:26 Bipartiteness in PSP Multi-Auction Networks
Partial Ordering and Initial Influence Sets Initially, influence projections:
π ◦ π−1(L1) = {B3, B4, B5}, π ◦ π−1(L2) = {B4, B5, B6}
Both sellers share buyers B4, B5, forming an integrated influence structure.
Market Shift at t = 2: Buyer B4 increases bid on L1 Buyer B4 increases their bid on seller L1 to overtake B3:
pL1
B4 (2) = pL1
B3 (1) + δ, δ > 0.
This triggers an immediate, asynchronous allocation decision at seller L1: τ1 : Seller L1 allocates to the new highest bidder B4, who pays the second-highest bid pL1
B3 (1). Reserve updates accordingly. The new partial ordering on L1:
pL1
B4 (2) > pL1
B3 (2) > pL1
B5 (2).
Coupled Buyer Rebid Buyer B4 observes this new allocation outcome and immediately updates their residual demand. Since buyers maintain consistent bid strategies across all sellers, buyer B4 must now adjust their bid quantity for seller L2 simultaneously:
σL2
B4 (τ2) = QB4 (2) − aL1
B4 (τ1),
and submits this updated bid quantity at price pL2
B4 (2). Seller L2, asynchronously and independently from L1, now processes this rebid at its next local step: τ2 : Seller L2 allocates quantity to buyer B4, charging the next-highest price among competing bidders (e.g., buyer B5’s previous bid).
Propagation of Influence via Projection Mappings: The shift at L1 updates the projection and partial ordering structure, immediately affecting the shared buyer set with seller L2. The updated projections remain:
π ◦ π−1(L1) = B3, B4, B5,
π ◦ π−1(L2) = B4, B5, B6,
but buyer B4’s strategic rebid triggers a recomputation of reserve prices and rebidding decisions at L2, influencing buyer allocations in subsequent τk steps. Thus, a local change in buyer B4’s bid on one seller (L1) creates a cascading effect through the partial ordering structure, inducing market shifts and influencing allocation outcomes on another seller (L2). The explicit recomputation of partial orderings demonstrates clearly how strategic perturbations propagate through interconnected aucti-
on markets.

---

## Processing Information

- **Processing Library:** Zotero PDFWorker
- **Processing Date:** 2026-02-10T18:13:44.129Z
- **Text Length:** 79680 characters
- **Success:** Text extraction completed
- **PDF Library Used:** Zotero PDFWorker
- **Pages Processed:** 26 of 26
