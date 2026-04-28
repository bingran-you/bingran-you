# PDF Document: Nankali and Levin - 2025 - An Exact Solution Algorithm for the Bi-Level Optimization Problem of Electric Vehicles Charging Stat.pdf

**File Path:** Nankali and Levin - 2025 - An Exact Solution Algorithm for the Bi-Level Optimization Problem of Electric Vehicles Charging Stat.pdf

**Processed Date:** 2026-02-10T18:18:05.069Z

**File Size:** 846.18 KB

**Total Pages:** 32

**Extracted Pages:** 32

**PDF Library:** Zotero PDFWorker

**Attachment Item ID:** 3326

**Title:** An Exact Solution Algorithm for the Bi-Level Optimization Problem of Electric Vehicles Charging Station Placement

**Collection:** Large Files > Random Papers

---

## Extracted Text Content

An Exact Solution Algorithm for the Bi-Level
Optimization Problem of Electric Vehicles Charging
Station Placement
Mobina Nankalia, Michael W. Levina,1 aDepartment of Civil, Environmental, and Geo-Engineering, University of Minnesota, 500 Pillsbury Drive SE, Minneapolis, MN 55455, USA. Emails: nanka005@umn.edu, mlevin@umn.edu
Abstract
This work addresses electric vehicle (EV) charging station placement through a bi-level optimization model, where the upper-level planner maximizes net revenue by selecting station locations under budget constraints, while EV users at the lower level choose routes and charging stations to minimize travel and charging costs. To account for range anxiety, we construct a battery-expanded network and apply a shortest path algorithm with Frank-Wolfe traffic assignment. Our primary contribution is devel-
oping the first exact solution algorithm for large scale EV charging station placement problems. We propose a Branchand-Price-and-Cut algorithm enhanced with value function cuts and column generation. While existing research relies on heuristic methods that provide no optimality guarantees or exact algorithms that require prohibitively long runtimes, our exact algorithm delivers globally optimal solutions with mathematical certainty under a reasonable runtime. Computational experiments on the East-
ern Massachusetts network (74 nodes, 248 links), the Anaheim network (416 nodes, 914 links), and the Barcelona network (110 zones, 1,020 nodes, and 2,512 links) demonstrate exceptional performance. Our algorithm terminates within minutes rather than hours, while achieving optimality gaps below 1% across all instances. This result represents a computational speedup of over two orders of magnitude compared to existing methods. The algorithm successfully handles problems with over 300,000 feasible co-
mbinations, which transform EV charging infrastructure planning from a computationally prohibitive problem into a tractable optimization task suitable for practical decision making problem for real world networks.
Keywords: Bi-level optimization exact algorithm, Electric vehicles, Charging station infrastructure
1Corresponding author: mlevin@umn.edu
arXiv:2511.19884v1 [eess.SY] 25 Nov 2025

1. Introduction
The shifting trend to EVs has created a need for efficient, accessible, and sustainable charging infrastructure. Strategic placement of EV charging stations is critical to accommodate growing demand and to shape user behavior and ensure equitable distribution of services across a network. However, the planning problem is inherently complex due to the hierarchical interaction between infrastructure providers and EV users. Determining optimal locations for EV charging stations is inherently dependen-
t on user behavior, network flow patterns, and demand distribution. Because building charging stations at every site with potential demand is infeasible due to budget constraints, planners must strategically identify locations that maximize accessibility and efficiency of usage. However, the optimal placement of charging stations is not simply a matter of available budget. It is also closely tied to user responses and the resulting traffic flow within the transportation network. Naturally, users t-
ry to minimize their travel and charging costs, meanwhile their collective choices influence network utilization and congestion. This paper addresses the charging station deployment problem using a bi-level optimization framework. At the upper level, a network planner seeks to design a profitable charging network by selecting station locations within a fixed budget and estimating revenue from user charging behavior. Moreover, EV users act as rational agents that minimize travel and charging costs,-
 which depend on the network configuration. The interplay between these two decision making layers requires a two-level model that captures both planner objectives and user equilibrium (UE) responses. Many papers have explored the charging station placement for EVs using a bi-level framework [1, 2, 3, 4, 5]. Li et al. [5] plan urban roads, EV charging stations, and the power grid by a bi-level model formulation where the upper level (UL) is investment decisions and the lower level (LL) is EV UE ro-
uting. They convert the entire model to a single mixed integer linear program (MILP) via KKT conditions and an improved Big-M linearization, then solve it exactly with a solver. Their formulation relies on very large M constants. Large M MILPs can still suffer weak relaxations and long solve times on bigger networks. Even the 41 nodes/56-bus of their case study is labeled “large scale”; the authors note that adding expressways or finer zoning could induce larger computational burdens. The paper it-
self hints that decomposition (e.g., Benders) or scenario reduction would be needed for bigger instances, but these techniques are not yet implemented. In another study, Jing et al. [6] formulates a bi-level problem where the upper level planner selects some roadway link candidates to host chargers to maximize battery electric vehicle (BEV) flow, while a LL computes a stochastic UE (SUE) restricted by path distance in which BEVs are limited by driving range. Based on the paper, the resulting mixed-
 integer nonlinear problem (MINP) is intractable for exact solvers, and the authors propose a heuristic loop. They demonstrate the method on two benchmark road networks: Nguyen-Dupuis (13 nodes, 19 links, 4 O-D pairs) and Sioux Falls (24 nodes, 76 links, 576 O-D pairs). While
2

their algorithm is fast on small graphs, this approach does not offer an optimality guarantee. It can stall at a local maximum of covered BEV flow and provides no bound on how close that solution is to the true optimum. Similarly, [7] used a purely heuristic called Cross-Entropy Method (CEM). UL chooses nodes to minimize the sum of the stations’ installation costs and the value of time spent traveling. At the same time, LL assigns mixed EV traffic via a multi class UE that respects EV range. Agai-
n, it is shown that the algorithm converges in their test networks, but it is not guaranteed to converge to the global optimum. The algorithm provides no optimality gap or confidence interval and works only on small to medium networks. In contrast to these earlier studies, our work provides the first exact solution methodology that scales to metropolitan scale road networks. We formulate the charging station placement problem as a MINP identical in fidelity to the small network models above, but w-
e solve it directly without surrogate objectives, path enumeration, or heuristic sampling. The resulting algorithm delivers global optimality on networks two orders of magnitude larger than those in prior studies within practical runtimes, and it produces optimality gaps of less than 1% in all tested instances. Hence, our contribution is twofold: we close the optimality gap left by heuristic approaches and we demonstrate tractability on very large, real world networks previously considered beyond -
reach. Building on insights from recent literature, the UL decision involves binary location variables and station cost constraints, while the LL subproblem models traffic assignment and charging flows using a convex UE formulation. We propose an exact solution approach based on the high point relaxation (HPR) and value function cuts to globally approximate the optimal bi-level solution. This formulation enables network planners to anticipate user behavior and optimize system design in a way that -
balances profitability and user accessibility.
2. Literature Review
Network design problems are a foundational topic in transportation research, which involves decisions about how to modify a transportation network to improve overall system performance. These problems are often modeled as bi-level programs, where a system planner (the leader) makes infrastructure decisions (e.g., adding new links), and travelers (the followers) respond by selecting routes under UE. Depending on the nature of the planner’s decisions, network design problems are classified as either-
 continuous (e.g., adjusting capacities or tolls) or discrete (e.g., selecting which links to build or upgrade). In this literature review, we focus on the discrete network design problem (DNDP), where the planner chooses from a set of binary investment options, such as whether to install a facility or not, since our problem is discrete.
2.1. Discrete Traffic Network Design Problem
One of the first papers on DNDP problems was LeBlanc [8], who proposed a model with binary decision variables for link construction under budget constraints. The problem minimize network congestion through system optimal
3

(SO) flows. They obtained lower bounds using HPR, and replaced UE with system optimum traffic assignment while optimistically assuming all unfixed candidate links are built and ignoring budget constraints. Farvaresh and Sepehri [9] argued that fixing unfixed variables at 1 with system optimal flows creates inefficient lower bounds with high gaps. They implemented a B&B with fathoming processes and formulated a mixed integer convex program solved exactly with outer approximation (OA) loops, which -
yields tighter lower bounds by keeping both budget and binary status of undecided links. They also revised the path-based formulation into a link-node multi-commodity network. So they eliminated explicit path enumeration and enabled modern assignment routines. Wang et al. [10] solved the harder multi capacity DNDP, where each candidate link may receive 0, 1, or more additional lanes. They keep LeBlanc [8]’s insight on SO routing gives an admissible lower bound, but embed it in two global optimizat-
ion schemes that avoid the looseness Farvaresh and Sepehri [9] still inherits from switching to SO only after branching. Their first scheme, SO relaxation, sorts all designs by increasing SO travel time and successively evaluates them under UE. The second, tighter UE reduction, adds the Beckmann–McGuire–Winsten objective of the UE problem as a convex inequality to the SO model, thereby shrinking the relaxation without losing validity. Bagloee et al. [11] replaced Farvaresh and Sepehri [9]’s OA low-
er bound with an embedded Benders decomposition: at every B&B node, the SO DNDP is written as a MINP and decomposed into a convex SO traffic assignment subproblem and an MILP master. The dual produced by the subproblem yields a markedly tighter bound than the previous algorithms. These refinements allow the first exact treatment of a real scale, multimodal, multiclass network (Winnipeg: 943 nodes, 3,075 links, 20 projects). Rey and Levin [12] reformulate the SO relaxation of the DNDP in a path spa-
ce and exploit two structural facts that earlier exact methods left untapped: (i) the total system travel time objective is link-separable and therefore amenable to per link OA; and (ii) the exponential path set can be navigated on demand via column generation (CG), so no path enumeration is needed. These relaxations feed a single tree branch and price and cut (BPC) algorithm, where lower bounds come from the evolving LP (restricted master), and upper bounds are obtained by solving a UE whenever a-
 node becomes feasible regarding the budget. Compared with [9]’s link-based OA B&B, the path-based master removes multi commodity link constraints and scales the OA cut only where needed. Unlike Bagloee et al. [11]’s B&B–Benders, which still solves a nonlinear SO subproblem at every node, the BPC bound is a linear LP and thus faster per evaluation.
2.2. EV charging station problem
Many papers have considered the problem of choosing locations for the charging station for EVs without considering the response of the EV users [13, 14, 15, 16, 17]. For example, Frade et al. [13] estimated the day and night charge demand of EVs through census and employment regressions and solved a mixed integer problem (MIP) capable of delivering maximum coverage to site
4

chargers for maximum coverage within a certain radius. However, by treating drivers as fixed demand points and omitting any UE feedback, the model cannot capture route choice and EV user response to station placement. Klein and Trautmann [14] solved EV charger siting and sizing under uncertain range and demand as a two stage stochastic MILP on 1,079 Pennsylvania demand nodes. The model treats vehicles as fixed demands with fictitious travel penalties, so it neglects route choice, congestion and o-
ther UE responses that a bi-level formulation would capture. Some papers have considered a bi-level formulation and capturing the user’s response [1, 2, 3, 4, 18, 19, 20, 6, 21, 22, 20]. They can be divided into two categories, on whether they propose exact or heuristic solution algorithms. Kınay et al. [1] addressed strategic EV charging station location and sizing under stochastic flows and congestion using bi-level optimization. The UL minimized infrastructure costs while ensuring probabilistic-
 service level constraints, while the LL represented EV users minimizing route lengths. They simplified the bi-level model into a single-level MILP with M/M/c queuing and developed an exact Benders’ decomposition solution. However, the algorithm only guarantees global optimality on small networks. For larger cases, the MILP becomes intractable and results may be far from optimal with unknown gaps. Wang et al. [2] proposed a bi-level model for EV charging station placement and direct current fast c-
harger in highway networks, with the UL minimizing total annualized costs and the LL addressing UE traffic assignment and power distribution network operations. They converted this to a single-level MILP using KKT conditions, ensuring global optimality. Testing was limited to a modest 3-city network with 6 OD pairs and 14 pregenerated paths, leaving practical tractability on larger instances with thousands of potential paths unclear. Mirheli and Hajibabai [3] developed a hierarchical EV charging n-
etwork design model with dynamic pricing. Their problem minimize facility and operating costs while maximizing operator revenue balanced against user travel and charging expenses. They reformulated the bi-level problem into a single-level model using KKT conditions and solved it with an iterative active set heuristic alternating location fixes with Macroscopic-Fundamental-Diagram (MFD) updates for travel times. The results on a network with 12 nodes showed a gap within 4.5% of the exact solution, -
while on a 42 nodes campus network they achieved a 0.43% gap. Without global optimality guarantees, this solution is a near-optimal heuristic rather than an exact solver. In another study, Mirheli and Hajibabai [4] developed a hierarchical model for EV charging infrastructure design and operational management. The UL minimize deployment costs and maximize revenue through dynamic pricing, and the LL minimize user travel and charging expenses UE conditions. They implemented Mitsos’s global optimizat-
ion bounding scheme, which theoretically reaches global optimum but practically stopped at 4.58% and 2.89% gaps on test cases. This yields a solution that is near optimal. The algorithm required tens of hours for networks under 350 links, which shows intractability for larger networks without additional strategies. He et al. [21] framed public charger siting as a bi-level problem with budget constraint. The UL choose station locations and the LL use tour-based equilib
5

rium for EV drivers which select routes and recharge stops, based on battery range and risk preferences. They reformulated this as a path-based program solved with a genetic algorithm (GA) coupled to CG for the equilibrium subproblem. Since the GA is heuristic without optimality guarantees and testing was limited to the modest Sioux Falls network (24 nodes, 76 links), scalability and solution quality on larger networks remain uncertain. Hu et al. [22] proposed a bi-level model for electric autono-
mous vehicles with an UL modified p-median locating fixed fast charging stations to minimize flow weighted access distance, and a LL SO traffic assignment with stochastic charging demand minimizing total travel, charging, and queuing costs. They solved this with an iterative heuristic alternating traffic re-assignment and station re-siting, which relax the nonlinear LL via generalized Lagrangian and Frank Wolfe approximation. Testing only on the small Nguyen-Dupuis case (13 nodes, 19 links) leaves-
 scalability and global optimality unproven. The authors themselves call for validation on larger networks. Our contribution addresses critical limitations identified in prior studies by explicitly modeling EV users’ responses via a UE LL within a bi-level framework. Unlike earlier exact algorithms that lose tractability beyond small networks or heuristic methods lacking optimality guarantees, we develop an exact solution algorithm that achieves proven global optimality in a reasonable runtime. Fu-
rthermore, we demonstrate its practical scalability by solving substantially larger, realistic networks while maintaining very small optimality gaps, a feat not previously accomplished in the existing literature.
3. Formulation
We consider a bi-level formulation. The UL decision maker (network planner) designs an EV charging network and tries to maximize their revenue. At the same time, the LL represents the users, who choose charging stations to minimize their travel and charging costs, given the network design set by the planner. Because the planner’s revenue depends on the flow each station ultimately attracts, the UL objective is evaluated through the LL equilibrium. The planner’s revenue depends on the users’ choice-
s, which will create a hierarchical optimization structure where the UL must solve the LL problem to evaluate any potential network design. For the route choice behavior of the LL problem, we assume that users follow UE principles, which means users seek the path with the minimum cost. Most papers whose model is traffic assignment make the same assumptions, too. The mathematical formulation of UE can be solved as a convex program because our model satisfies the necessary conditions: 1We have assum-
ed that users have perfect knowledge of the path cost; 2— The travel cost on a given link depends only on the flow on that link, and the travel cost functions are positive and monotonically increasing; 3— Each user selects the path with the least travel cost between their origin and destination. Under these assumptions, the UE condition is characterized by the principle that all used routes connecting the same origin-destination (OD) pair have equal and minimal travel cost. Unused routes may have -
higher travel costs, and routes
6

connecting different OD pairs may have different travel costs. A stable equilibrium is achieved when no user can reduce travel time by unilaterally changing routes. This formulation of the UE condition, first proposed by Wardrop [23], has been widely applied in transportation research. By solving the UE traffic assignment problem (TAP), we can output the route flows and each charging station flow that minimize travel cost in equilibrium across the network.
3.1. LL Problem (User Charging Decision)
In the LL problem, EV users choose their routes and charging stations in response to the infrastructure decisions made by the UL planner. Specifically, given the binary decision vector y, which indicates whether a charging station is built at each candidate location. Users select feasible paths that minimize their combined travel and charging costs. The resulting traffic pattern must satisfy the UE condition: no user can improve their total cost by unilaterally switching to another available path,-
 given the current congestion and charging infrastructure. This equilibrium reflects rational traveler behavior under perfect information and cost sensitivity. We assume travel time on each link is a function of flow, and is continuous and monotonically non-decreasing in flow, which ensures that the Beckmann objective is convex and the UE problem remains tractable. This assumption is standard in transportation modeling and is satisfied by commonly used functions such as the Bureau of Public Roads -
(BPR) function. In real networks, not all EV travel demands between OD pairs can be satisfied due to limited battery range and sparse charging infrastructure. This is an issue for travel over long distances, since usually the trips within a city can be completed without needing to charge along the route. As a result, for trips with long distances, certain trips become infeasible if no reachable path exists that either stays within the battery limit or includes a charging opportunity. This constrai-
nt motivates defining the set of feasible paths based on battery limitations, which acknowledge that some OD pairs may have zero flow in the UE solution. The feasible paths available to each user depend on the installed charging infrastructure y. The LL problem thus jointly determines equilibrium path flows, link flows, and charging station demand, conditional on the UL decision y. We consider a network G = (N , A): graph G is the tuple (N , A) comprised of the set of nodes N and the set of links -
A. Each link can be denoted by a pair of nodes (i, j). Let Z ⊆ N be the set of zones, which represent nodes that are the origins or destinations of the travelers. C ⊆ N is the set of candidate locations for building charging infrastructure. A path is feasible for an EV if either the usage of the battery is less than the battery limit, assuming that users will start their trip with a full battery, or there is a charging station on the route where the user recharges the battery to reach the destinat-
ion before the battery is depleted. Therefore, not all demand from an origin to a destination can be met, and it depends on the y, which specifies where charging stations are located and consequently which paths are feasible. Let Πrs(y) be the set of feasible paths based on the charging stations location y between the origin r ∈ Z and
7

destination s ∈ Z. Let Π(y) = ∪(r,s)∈Z2 Πrs(y) be the set of all feasible paths. Travel time is considered the travel cost. The travel time for the link (i, j) is based on a convex function of traffic flow on this link, which is tij(xij), where xij is the link (i, j) flow. The full formulation of this convex UE problem is given below.
min
x,h,v L(y, x(h), v(h)) =
X
(i,j)∈A
Z xij
0
tij(x) dx +
X
l∈C
Z vl
0
t dv (1a)
s.t. vl = 0 if yl = 0, ∀l ∈ C (1b)
xij =
X
π∈Π(y)
δπ
ijhπ, ∀(i, j) ∈ A
(1c)
drs(y) =
X
π ∈Πrs (y)
hπ, ∀(r, s) ∈ Z2
(1d)
vl =
X
π∈Π(y)
γπ
l hπ, ∀l ∈ C (1e)
vl ≥ 0, ∀l ∈ C (1f)
hπ ≥ 0. ∀π ∈ Π(y)
(1g)
The LL problem (1) constitutes a modified traffic assignment problem (MTAP) that accounts for the unique cost structure faced by EV users. In contrast to classical TAP formulations, which only consider travel time as the cost, our model includes both travel time and charging costs, which indicates EV users must also select charging stations along their routes. This extension is reflected in the objective function, which includes an additional term for the cost of charging based on the station pric-
es and the flow of users choosing each station. Furthermore, two additional constraints distinguish this model from standard TAP: (i) a station activation constraint (1b) ensures no users can charge at the location l unless a charging facility is built there. In this constraint, yl comes from UL and is fixed here, and (ii) a flow conservation constraint that determines the amount of charging demand at each station based on users’ path choices. These modifications are grounded in the assumption tha-
t EV travelers behave rationally under perfect information and choose paths that minimize their total travel and charging cost. We will name this problem MTAP (y), and let L(y, x(h), v(h)) be the objective function value. To achieve the travel time between r and s, we need to sum up all the links’ travel time between r and s, which are in the user’s path. The link flows, and the path flows, denoted as hπ, are closely related. Let δπ
ij
denote whether link (i, j) is used by path π, so δπ
ij = 0 if path π of mode m does
not use link (i, j), and δπ
ij = 1 if it does. Based on constraint (1c), link flows are the sum of all the path flows that use that link.
8

Constraint (1d) implies that each trip from origin r to destination s must take one of the available paths that exist in the network and is feasible considering the battery (i.e., the EV can traverse all links or recharge as needed). Therefore, the effective demand drs(y) between origin r and destination s is defined as:
drs(y) =
(
Drs if at least one battery-feasible path exists from r to s
0 otherwise (2)
where Drs represents the total potential demand between origin r and destination s. We assume that users only contribute to demand if there is at least one feasible path between their origin and destination. Consequently, we are making demand conditional on network feasibility rather than simply routing existing demand as in classical TAP formulations. Let vl be the total time spent charging at station l per hour aggregated over all EV users who stop there. In other words, vl represents the total -
time EV users collectively spend charging at station l per hour. We can only have a positive value for vl if the decision is to build a charging station there. Constraint (1b) shows this linking relation between vl and yl. So if yl is 0, then vl must be 0 too. In constraint (1e), γπ
l is the amount of time (in hours) that a vehicle traveling along path π must spend charging at station l, and hπ is the flow on that path. Therefore, vl is equal to the sum of total charging time per unit time spent at station l, where l is one of the nodes of that path and l is not the origin or destination of path π. We have assumed that the total charging cost for each user depends on their battery level prior to charging, and there is no congestion or delay at the charging stations, because o-
ur model implicitly assumes that stations are designed with adequate capacity to meet demand. In practice, this assumption can be satisfied by proper sizing of the charging infrastructure (that is, installing sufficient charging ports) based on the demand patterns identified by our model. Our problem focuses on strategic placement, not detailed operational dynamics. Queuing effects and congestion are secondorder phenomena that can be addressed in a separate operational model. The constraints (1g) -
and (1f) require the non-negativity for the flow of the charging station and the flow of the path. The first term in the objective function of problem (1) corresponds to the classical Beckmann transformation, which is a potential function whose minimizer satisfies the UE conditions with respect to travel time. The second term incorporates the charging cost and extends the potential function to reflect users’ sensitivity to both travel and charging components in their path selection. While the tota-
l objective does not represent a cost directly minimized by users, its minimization yields a flow pattern consistent with UE behavior under combined travel and charging costs.
λπ
l is the time spent charging on l coming from path π. The total time spent on charging vl will be multiplied by t, which is a fixed price that accounts for both the charging cost and the time spent charging.
9

3.2. Bi-level Problem
In every network, we have realistic limitations on feasible EV travel paths. In practice, not all EV travel demand can be satisfied due to inherent range restrictions and limited availability of charging infrastructure. Therefore, some OD pairs are infeasible when EVs lack sufficient battery charge or access to charging facilities along feasible routes. Consequently, these infeasible OD pairs naturally lead to a portion of unmet travel demand. The decision of whether to install a charging station -
at a specific location directly influences this amount of unmet demand. Locations without charging infrastructure can become bottlenecks. They will reduce accessibility and increase the unmet demand. Let Πrs be the set of all paths between the origin r ∈ Z and destination s ∈ Z. Let Π = ∪(r,s)Πrs be the set of all paths. To address this, we considered unmet demand into the UL optimization objective by adding a penalty term that represents the difference between the total demand Drs which also incl-
udes the infeasible demand and the actual served demand P
π∈Πrs(y) hπ. Specifically, the
additional term w · P
(r,s) Drs − P
π∈Πrs(y) hπ incentivizes optimal charging
station placement that minimizes unmet EV demand across the network, and w is a weight to balance the cost of unmet demand with the value of charging. So the overall bi-level optimization model can now be written as:
min
y,x,v −
X
l∈C
Z vl
0
p dv + w ·
X
(r,s)
Drs −
X
π∈Πrs
hπ
!
(3a)
s.t. X
l∈C
Cl · yl ≤ B, (3b)
yl ∈ {0, 1}, ∀l ∈ C (3c)
v, h ∈ MTAP(y) (3d)
Let yl ∈ {0, 1} be a binary variable equal to 1 if a charging facility is installed at location l, and 0 otherwise. Let cl be the installation cost at location l. Equation (3b) indicates that the total cost of building charging stations should be less than or equal to the available budget B. p is the constant charging price per unit of time. The objective function (3a) indicates that the network designer would like to maximize the charging revenue and minimize the unmet demand.
4. High Point Relaxation and Value Functions
In this section, we develop relaxations of the bi-level EV charging station placement problem. We propose the HPR, which provides a valid global lower bound by replacing the LL UE objective with only its flow conservation and feasibility constraints. The resulting single level mixed integer formulation serves as a useful surrogate for bounding in the solution process. We then further
10

build on this by introducing the value function cut to effectively cut the feasible solution values that are not optimal for LL.
4.1. High Point Relaxation (Global Lower Bound)
We will derive the HPR problem by considering only the follower’s constraints without taking into account its objective function.
min
y,x,v −
X
l∈C
Z vl
0
p dv + w ·
X
(r,s)

Drs −
X
π ∈Πrs (y)
hπ

 (4a)
s.t. X
l∈C
Cl · yl ≤ B, (4b)
yl ∈ {0, 1}, ∀l ∈ C (4c)
vl ≤ M · yl, ∀l ∈ C (4d)
xij =
X
π∈Π(y)
δπ
ijhπ, ∀(i, j) ∈ A (4e)
X
π ∈Πrs (y)
hπ = drs(y), ∀(r, s) ∈ Z2 (4f)
vl =
X
π∈Π(y)
δπ
l hπ, ∀l ∈ C (4g)
vl ≥ 0, ∀l ∈ C (4h)
hπ ≥ 0, ∀π ∈ Π (4i)
Proposition 1. Let Z⋆ be the optimal objective value of the bi-level EV–stationplacement problem (3) and let ZHP be the optimal objective value of its HPR (4). Then
ZHP ≤ Z⋆.
Proof. Let F BL and F HP denote the feasible sets of (3) and (4), respectively. The two problems share the same decision variables (y, x, v) and enforce the same hard constraints. The only element that distinguishes the bi-level model from the HPR is the follower optimality requirement: v, x ∈ MTAP(y) embedded in (3). Eliminating this requirement can only enlarge the set of feasible solutions. Both problems minimize the same UL cost function (3a) over their respective feasible sets. For any optimi-
zation problem, minimizing over a superset of feasible solutions cannot yield a larger objective value. Hence ZHP ≤ Z⋆.
4.2. Value Function Cuts
If we solve the HPR, we may end up with a solution (y1, v1, x1) where (v1, x1) ∈/ MTAP(y1). This means the solution is not optimal for the LL.
11

Therefore, if we have y1 and solve the MTAP(y) problem, we can achieve a lower optimal value for the objective function with a different (v, x). This means that
L(y1, v1(h1), x1(h1)) > mhin L(y1, v(h), x(h)) (5)
Note that generally both v, x are derived based on one vector of h, and in equation (5) h1 ̸= h. Based on y, we have some feasible paths, not all of them. Let H(y) be the set of feasible path under y. L(y1, v1(h1), x1(h1)) is the value of the objective function at the LL by entering (y1, v1(h1), x1(h1)) and L(y1, v(h), x(h)) is the objective function of the optimal solution of the problem at the LL if we optimize it for the given y1. So, to enforce the follower optimality, we will add the opposite-
 of equation (5) to restrict (v, x). After adding this constraint to the problem (4), we will have a problem which is the same as the original bi-level problem (3). Here is the HPR augmented with value function cuts:
min
y,x,v −
X
l∈C
Z vl
0
p dv + w ·
X
(r,s)

Drs −
X
π ∈Πrs (y)
hπ

 (6a)
s.t. X
l∈C
Cl · yl ≤ B, (6b)
yl ∈ {0, 1}, ∀l ∈ C (6c)
vl ≤ M · yl, ∀l ∈ C (6d)
xij =
X
π∈Π(y)
δπ
ijhπ, ∀(i, j) ∈ A (6e)
X
π ∈Πrs (y)
hπ = drs(y), ∀(r, s) ∈ Z2 (6f)
vl =
X
π∈Π(y)
δπ
l hπ, ∀l ∈ C (6g)
vl ≥ 0, ∀l ∈ C (6h)
hπ ≥ 0, ∀π ∈ Π (6i)
L(y, v(h), x(h)) ≤ L(y, v′(h′), x′(h′)), ∀ (v′(h′), x′(h′)) ∈ H(y) (6j)
Constraint (6j) represents the value function cuts. H(y) represents the set of possible (v′(h′), x′(h′) under y design. In particular, for each v′(h′), x′(h′) ∈ H(y), the derived aggregate flows v′(h′) and x′(h′) respect v′
l = 0 if yl = 0 for all l ∈ C, so that no site without an established charging station is assigned any charging demand. By restricting to flow configurations consistent with the given y, this formulation avoids infeasible cases such as v′
l > 0 when yl = 0.
12

Proposition 2. By adding value function cut (6j) to the HPR problem, problem (6) is equivalent to problem (3).
Proof. It is sufficient to show equality of the feasible regions, since the objective functions in both problems are identical. Suppose (y, v, x) is feasible for problem (6). This means (y, v, x) satisfies the value function cuts in constraint (6j). Therefore, under the same y, the L(y, v(h), x(h)) is less than or equal to the L(y, v′(h′), x′(h′)) ∀ (v′(h′), x′(h′)) ∈ H(y). This directly means (v, x) minimizes L(y, v(h), x(h)) given the decision y. Thus, we can ensure the solution is feasible for -
the original bi-level problem (6). Conversely, consider any point (y, v, x) feasible for the original bi-level problem (6). By the definition of LL optimality, (v, x) minimizes L(y, v(h), x(h)) given the decision y. Therefore, constraint (6j) is trivially satisfied, implying feasibility for problem (6). Hence, both problems have identical feasible sets and are thus equivalent.
Constraint (6j) requires evaluating all possible flow configurations (v′, x′, which is computationally intractable. To overcome this, we adopt a cutting plane strategy that iteratively adds only a subset of these constraints. Specifically, in each iteration, we generate a valid cut based on a carefully chosen pair (vf , xf ). To construct this subset, we leverage the solution of the MTAP(y) problem, which represents the optimal response of the LL equilibrium model for a given network design y. Sin-
ce MTAP(y) provides the minimal value of the LL objective function under y, using its solution to define (vf , xf ) ensures that the resulting inequality is a effective value function cut. When the HPR gives us a solution (y1, v1, x1) where (v, x) ∈/ arg minv,x L(y1, v(h), x(h)), let (vf , xf ) ∈ M T AP (y1), then if we add the following cut
L(y, v(h), x(h)) ≤ L(y, vf (hf ), xf (hf )) ∀(vf (hf ), xf (hf )) ∈ MTAP(y) (7)
to the HPR, it will exclude answers like (y1, v1, x1). If we add cuts sequentially, this means that we will exclude the v ∈ V and x ∈ X, which are feasible for the HPR problem, but not optimal or feasible for the LL problem. By adding these cuts, we will tighten the feasible region of the HPR problem, therefore achieving a lower gap between the lower bound and the original problem solution. This means that we will have a set of (vf (i), xf (i)) which are built sequentially over the iterations. Whi-
le value function cuts are useful for iteratively refining the feasible region of the HPR, their applicability is conditioned on the feasibility of the follower solution under the current UL decision y. In particular, a previously generated pair (vf , xf ) ∈ MTAP(y′) may no longer be valid if certain charging stations used in that solution are deactivated in the new y. To prevent invalid comparisons and over constraining the feasible region, we introduce a relaxation term using big M constants. Th-
ese terms deactivate the cut whenever a required charging station is not selected, thus ensuring that the value function cut only applies when the previous follower solution remains feasible. Let Ml be a sufficiently large constant for each l ∈ C, and define the set Cf := {l ∈ C : vf
l > 0},
13

i.e., the stations that were used in the previous follower solution. The relaxed value function cuts become:
L(y, v(h), x(h)) ≤ L(y, vf (i), xf (i)) +
X
l∈C
Ml(1 − yl), ∀ i ∈ nvf . (8)
This form ensures that if any l ∈ C is closed in the current y (i.e., yl = 0), then the corresponding term Ml(1 − yl) becomes active and relaxes the constraint, which will effectively deactivate the cut. On the other hand, when all previously used stations are still open (yl = 1 for all l ∈ C), the big-M terms vanish, and the cut enforces that the current LL solution is not strictly better than the previously observed one.
min
y,x,v −
X
l∈C
Z vl
0
p dv + w ·
X
(r,s)

Drs −
X
π ∈Πrs (y)
hπ

 (9a)
s.t. X
l∈C
Cl · yl ≤ B, (9b)
yl ∈ {0, 1}, ∀l ∈ C (9c)
vl ≤ M · yl, ∀l ∈ C (9d)
xij =
X
π∈Π(y)
δπ
ijhπ, ∀(i, j) ∈ A (9e)
X
π ∈Πrs (y)
hπ = drs(y), ∀(r, s) ∈ Z2
(9f )
vl =
X
π∈Π(y)
δπ
l hπ, ∀l ∈ C (9g)
vl ≥ 0, ∀l ∈ C (9h)
hπ ≥ 0, ∀π ∈ Π (9i)
L(y, v(h), x(h)) ≤ L(y, vf (i), xf (i)) +
X
l∈C
Ml(1 − yl) ∀ i ∈ nvf . (9j)
Proposition 3. After adding cut (9j) with a specific (vf , xf ), the optimal solution of problem (9) is still a lower bound on the problem (3).
Proof. In constraint (9j), we are just considering a subset of (v, x) compared to the constraint (6j) in problem (6), which based on Proposition 2 is equivalent to the original bi-level problem (3). So the optimal solution of this problem is still a lower bound for problem (3).
14

4.2.1. Outer Approximation for Value Function Cuts
To remove the nonlinearity in constraint (9j), we apply the OA method. This method was originally proposed by Duran and Grossmann [24]. We can use OA when the constraint involves a convex function. The follower’s objective function L(y, v(h), x(h)), derived from a convex UE traffic assignment problem, is convex in the continuous variables v and x. The OA comes from linearizing the convex functions at previously found solutions, which generates supporting hyperplanes. These hyperplanes will iterati-
vely refine the objective function [24]. Therefore, at a given point (vˆ, xˆ), we can linearize the follower’s objective by constructing the first order Taylor expansion. By iteratively adding such cuts from previously computed follower solutions, we progressively refine a linear OA of the nonlinear constraint. As demonstrated in Duran and Grossmann [24], this iterative process ensures that the collection of linearizations converges to fully approximate the original nonlinear feasible region. Alth-
ough many cuts may be needed to tightly approximate the feasible region, this method provides a tractable way to enforce follower optimality without solving the full nonlinear bi-level problem. This OA technique enables us to convert the bi-level model into a sequence of MILPs that are significantly more computationally efficient to solve. The OA of the left-hand side of constraint (9j) is
OA[L(y, v(h), x(h))] ≤ L(y, v(h), x(h)) (10)
We will derive the OA around (y1, v1, x1). Note that L is composed of three parts, and only the first part is nonlinear. We will derive the OA just for the nonlinear part since the OA of a linear term is equal to itself. If we consider just the left-hand side of constraint (9j) and derive the OA for that:
OA


X
(i,j)∈A
Z xij
0
tij(x) dx

≤
X
(i,j)∈A
Z xij
0
tij(x) dx (11)
X
(i,j)∈A
Z x1
ij
0
tij(x) dx +
X
(i,j)∈A
tij(x1) · (x − x1) ≤
X
(i,j)∈A
Z xij
0
tij(x) dx (12)
Equation (12) is separable by link (i, j). Let’s ηij the link specific OA of equation (12), we can write:
Z x1
ij
0
tij (x) dx + tij (x1) · (xij − x1
ij ) ≤ ηij ∀x1 (13)
Both sides of constraint (9j) are nonlinear, but the right-hand side is a constant since it is the answer of the objective function with UE optimal solution, xf , vf , so we will derive the OA just for the left-hand side term and just the nonlinear
15

component.
OA


X
(i,j)∈A
Z xij
0
tij(x) dx

+
X
π∈Π(y)
X
l∈C
Z vl
0
t dv
−


X
(i,j)∈A
Z xf
ij
0
tij(x) dx +
X
l∈C
Z vf
l
0
t dv

−
X
l∈C
Ml(1 − yl) ≤ 0 (14)
If we combine equation (13) and (14):
X
(i,j)∈A
ηij +
X
π∈Π(y)
X
l∈C
Z vl
0
t dv ≤
X
(i,j)∈A
Z xf
ij
0
tij(x) dx+
X
l∈C
Z vf
l
0
t dv+
X
l∈C
Ml(1−yl)
(15) Therefore, we have approximated cut (9j) in problem (9) with the combination
16

of cuts (13) and (15). The final linearized HPR will be the following:
min
y,x,v,ηηη −
X
l∈C
Z vl
0
p dv + w ·
X
(r,s)

Drs −
X
π ∈Πrs (y)
hπ

 (16a)
s.t. X
l∈C
Cl · yl ≤ B, (16b)
yl ∈ {0, 1}, ∀l ∈ C (16c)
vl ≤ M · yl, ∀l ∈ C (16d)
xij =
X
π∈Π(y)
δπ
ijhπ, ∀(i, j) ∈ A
(16e)
X
π ∈Πrs (y)
hπ = drs(y), ∀(r, s) ∈ Z2
(16f )
vl =
X
π∈Π(y)
δπ
l hπ, ∀l ∈ C (16g)
vl ≥ 0, ∀l ∈ C (16h)
hπ ≥ 0, ∀π ∈ Π (16i)
Z x1
ij
0
tij (x) dx + tij (x1) · (xij − x1
ij) ≤ ηij, ∀ x1 (16j)
X
ij∈A
ηij +
X
l∈C
Z vl
0
t dv
≤
X
ij∈A
Z xf
ij
0
tij(x) dx +
X
l∈C
Z vf
l
0
t dv +
X
l∈C
Ml(1 − yl) ∀ (xf , vf ) ∈ F
(16k)
5. Branch-and-Price-and-Cut Algorithm
We introduce a BPC algorithm to solve our problem. We have a single tree in which we obtain the LB by solving problem (16). To obtain a feasible solution (and thus an upper bound) for any fixed leader decision y, we solve MTAP(y). This problem corresponds to the LL UE problem, where users choose their routes and charging stations based on the charging infrastructure y and the resulting travel costs. The solution to MTAP(y) yields a set of path flows hf , link
17

flows xf , and station demands vf that are optimal from the users’ perspective and feasible under the given y. We then evaluate the UL objective using this solution, which gives a feasible objective value corresponding to the bi-level problem. Since this value respects all constraints and represents a valid leader and follower interaction, it provides a valid upper UB in our B&B framework. Let k denote a node in the BPC and its branches. We will use the labeling scheme to keep track of the candid-
ate location to place the charging station in a set of C2. We will define two sets, one for locations where the decision is not to place a charging station (yl = 0) and another for locations where we decided to place a charging station (yl = 1). These sets are defined for each node in the BPC tree.
C0
2 (k) = {l ∈ C2 : yk
l = 0} (17a)
C1
2 (k) = {l ∈ C2 : yk
l = 1} (17b)
The locations where we want to decide whether to build a charging station or not are a subset of all of the locations:
(C 0
2 (k) ∪ C1
2 (k)) ⊆ C2 (18)
At the root node of the tree, both sets are empty. We will perform a check process for each node k of the tree as shown below
• if P
l∈C 1
2 (k) cl.yl(k) > B, the node of BPC is infeasible since the budget
constraint is not satisfied.
• if |C20(k) ∪ C21(k)| = |C2|, all the locations are fixed.
• if B − P
l∈C 1
2 (k) cl.yl(k) < min cl : l ∈ C2 \ C20(k) ∪ C21(k) , then there
is not enough budget to build a new charging station at unfixed location l, so for all of the remaining locations yl(k) = 0, and the BPC node is fixed.
• else the BPC node is unfixed.
If the result of this checking process is an unfixed node of BPC, we will solve the LB using problem (16). If the result is fixed, we will obtain a UB by solving the LL problem MTAP (y). Algorithm 1 shows the solution algorithm, and it mentions Column Generation (CG), which will be discussed in the next section. B is the set of nodes of B&B tree.
18

5.1. Solution Algorithm
Algorithm 1: BPC Algorithm
1 Initialize U B ← ∞, LB ← −∞, B ← ∅ 2 LB0, y0, v0 ← Solve HPR (16) via CG Algorithm 2 3 Add root node k = 0 of B&B tree to B 4 while B ̸= ∅ do
5 remove node k with minimum LB and check(k) 6 if check(k) = fixed then
7 U Bk ← Solve MTAP(yk) 8 U B ← min(U Bk, U B)
9 Add VF cuts (19h), (19g) 10 if LBk ≥ U B then 11 continue 12 end 13 end
14 else if check(k) = unfixed then
15 LBk, yk, vk ← Solve HPR (16) at node k via CG Algorithm 2 16 if HPR infeasible or LBk ≥ U B then 17 continue 18 end 19 else
20 Cfrac
2 (k) ← {l ∈ C2 : yk
l fractional} 21 Branch on a fractional variable yk
l ∈ Cfrac
2 (k) with highest vl: add two child nodes to B with additional constraints
yk+1
l = 1 and yk+1
l = 0, respectively. 22 end 23 end
24 else if check(k)= infeasible then 25 continue 26 end
27 Update LB based on active BB nodes: LB ← min{LBk : k is active} 28 if U B − LB ≤ ε then 29 Stop 30 end 31 end
Proposition 4. The BPC algorithm 1 solves the DNDP to optimality in a finite number of iterations.
Proof. If check(k) classifies a node k as fixed, all binary variables yl are determined. We then solve the follower equilibrium MTAP(yk) and obtain the feasible objective value UBk. Keeping the best such value over all nodes already evaluated gives
UB = min UBk : k is an active node of B&B tree ,
19

which is always a valid upper bound on the optimum of DNDP. For an unfixed node, the algorithm selects a free index l⋆ whose variable yl⋆ is fractional and whose station demand vl⋆ is largest. Two child nodes are created with the additional constraints yl⋆ = 1 and yl⋆ = 0, respectively. So no feasible binary vector is lost. A node is discarded in exactly three cases:
(a) Infeasible.
(b) Bounded. If LBk ≥ UB.
(c) Fixed. Solving MTAP yields the exact value UBk; if UBk ≥ UB the subtree cannot contain a better solution.
In each case, fathoming is safe; the global optimum cannot lie in a discarded subtree. There are at most 2 n complete assignments of the binary vector y, so the BPC tree is finite. Each node is processed at most once. Therefore, the algorithm stops after a finite number of iterations. When the algorithm terminates we have either an empty candidate list (all nodes fathomed), or UB − LB ≤ ε. In first case, we have UB = LB = optimal objective value. Otherwise
LB ≤ optimal objective value ≤ UB ≤ LB + ε,
Hence, the BPC algorithm of Algorithm 1 terminates in finite time and produces an optimal solution to the DNDP.
5.2. Column Generation
Formulation (16) contains one path flow variable hπ per feasible EV path π ∈ Π(y). In realistic networks, |Π(y)| is a large set. Following the approach used by [12], we apply the CG method to efficiently solve the linear programming (LP) relaxation. We consider a restricted set of feasible paths Π ̄ ⊆ Π(y), and denote the corresponding restricted path sets as  ̄Πrs ⊆ Πrs(y) for all OD pairs
20

(r, s) ∈ Z2. Problem (16) can be written as follows:
min
y,x,v,h,ηηη −
X
l∈C
Z vl
0
p dv + w ·
X
(r,s)

Drs −
X
π∈Π ̄ rs
hπ

 (19a)
s.t. X
l∈C
Cl · yl ≤ B, (19b)
vl ≤ M · yl, ∀l ∈ C
(19c)
xij =
X
π∈Π ̄
δπ
ijhπ, ∀(i, j) ∈ A
(19d)
X
π∈Π ̄ rs
hπ = drs(y), ∀(r, s) ∈ Z2
(19e)
vl =
X
π∈Π ̄
δπ
l hπ, ∀l ∈ C
(19f )
Z x1
ij
0
tij (x) dx + tij (x1)(xij − x1
ij) ≤ ηij, ∀x1 (19g)
X
(i,j)∈A
ηij +
X
l∈C
Z vl
0
t dv
≤
X
(i,j)∈A
Z xf
ij
0
tij(x) dx +
X
l∈C
Z vf
l
0
t dv +
X
l∈C
Ml(1 − yl), ∀(xf , vf )
(19h)
yl ∈ [0, 1], hπ ≥ 0, ∀l ∈ C, π ∈  ̄Π (19i)
Since the objective function aims to maximize path flows hπ and charging flows vl, we reformulate the corresponding constraints as inequalities to expose the sign of their associated dual variables. Specifically, the demand satisfaction constraint (19e) becomes P
π∈Π ̄ rs hπ ≤ drs(y), the link flow definition (19d)
becomes P
π∈  ̄Π δπ
ijhπ ≤ xij, and the charging flow definition (19f) becomes
P
π∈Π ̄ δπ
l hπ ≥ vl. We derive dual variables associated with the constraints to determine the reduced cost of adding new paths to the LP. Denote by σrs ≥ 0 the dual variables for the demand satisfaction constraints (19e), and by ζij ≥ 0 the dual variables associated with link flow constraints (19d). Given an OD pair (r, s) ∈ Z2 and a path π ∈ Πfrs, the reduced cost cπ for the path flow variable
21

hπ is computed as follows:
cπ = −σrs +
X
(i,j)∈A
δπ
ij ζij −
X
l∈C
δπ
l γl, (20)
where γl ≤ 0 represents the dual variables for the charging station flow constraints (19f). Thus, to identify new paths that have negative reduced cost, one solves, for each OD pair (r, s), a battery constrained shortest path problem with link costs given by dual variables ζij and charging costs γl. Since we have the expanded network we can solve the constrained shortest path problem (CSPP) efficiently. If paths with negative reduced costs are found, these are introduced into the restricted path s-
et Π ̄ to refine the problem iteratively. This process continues until no paths with negative reduced cost are found. Algorithm 2 shows the CG steps to iteratively solve problem (19) using a limited set of paths and updates it by identifying and adding new paths with negative reduced cost.
Algorithm 2: CG Algorithm
1 Initialize  ̄Π ← ∅, RC ← −∞ 2 while RC < 0 do
3 Extract duals σrs, ζij, γl over  ̄Π 4 for (r, s) ∈ Z2 do
5 Build a BCSPP with arc-costs ζij and station-costs −γl 6 Solve BCSPP to get path πr⋆s minimizing P ζij − P γl. 7 Compute its reduced cost:
c⋆ = −σrs +
X
(i,j)∈πr⋆s
ζij −
X
l∈πr⋆s
γl
RCmin ← min(RCmin, c⋆). 8 if cπr⋆s < 0 then
9 Add πr⋆s to  ̄Π 10 end 11 end 12 end
5.3. Battery State Network Expansion for EV Routing
In our bi-level formulation, the LL problem captures user behavior in response to the network design decisions made by the UL planner. Specifically, users decide how to route their trips across the network to minimize their total travel and charging costs. This routing behavior directly affects traffic flow patterns and determines the demand at each charging station. Therefore, it is essential to model route choices accurately to reflect how users respond to infrastructure deployment. For EVs, rou-
te choice becomes of high importance due to battery limitations. Because of battery limitations, conventional shortest path assumptions are insufficient. The main challenge in EV routing lies in the
22

Battery Constrained Shortest Path Problem (BCSPP), where the shortest path from an origin to a destination must not only minimize travel time or distance, but also respect the vehicle’s battery limitations. In this problem, an EV begins its trip with a fully charged battery and must ensure that at every point along its route, the remaining battery is sufficient to reach the next node, or a charging station must be available en route to recharge. For a conventional vehicle, the shortest path betwe-
en origin r and destination s is determined by minimizing travel time or distance without any operational constraints, since refueling is fast and gas stations are available and easy to find. However, for EVs, we must consider the feasible path set based on the charging stations. Π(r,s)(y) consists of all paths π from r to s which are feasible for EV based on the charging configuration y, which means the EV starts with full battery level b at the origin r and at every intermediate node i along pat-
h π, the remaining battery level bi ≥ 0. The EV can either reach the next node directly or access a charging station to replenish its battery. Therefore, a path π = (i1, i2, ..., in) is feasible under y if and only if:
bi − d(i, i + 1) ≥ 0 or the user will charge at i ∀i ∈ 1, 2, ..., n − 1 (21)
where d(i, i + 1) is the battery consumption to traverse from node i to i + 1. In the original network G, finding the shortest path between the origin and the destination is constrained by battery level. If the shortest path length exceeds the available battery range, the EV cannot complete the trip and must charge en route. It is possible that the unconstrained shortest path does not belong to the feasible set. In addition to that, the feasible shortest path for EVs may have a longer travel time -
or distance compared to the unconstrained shortest path, or even no feasible path exists without charging. Therefore, we cannot use the original network to find a shortest path that is also feasible for the EV. We must track battery levels alongside physical locations. We extend the traditional transportation network by using battery state as an additional dimension in the node representation. The primary motivation behind this expansion is to model battery depletion along travel paths and to enab-
le the inclusion of charging behavior at designated nodes. In the unexpanded graph, a node is a simple spatial location. In the expanded graph we consider a node to be a tuple (i, b), where i is the original node and b is the remaining battery level upon arrival. This change allows us to enforce constraints on battery feasibility. A path is only considered feasible if, at every step, the EV has sufficient battery to reach the next node or can recharge at an available charging station along the rou-
te. An issue that comes up in the unexpanded graph is that the shortest path in terms of travel time may not be feasible for EVs due to insufficient battery capacity. As a result, EV users may instead use a longer path that passes through one or more charging stations, or that is otherwise feasible given their battery constraints. This conversion changes the battery constraint problem to an ordinary arc feasibility problem. A road arc only exists if the remaining battery is enough to traverse it. -
A zero length charging arc jumps from (i, b) to (i, bmax) when
23

a station is present. After this transformation, the EV routing problem is just a classical shortest path search on a graph with non-negative costs, so we can run one standard labeling shortest path problem per origin to obtain the least cost feasible path to every destination. This is dramatically faster than solving a battery constrained shortest path MILP for each O-D pair and lets us embed the routing step inside the LL UE in the BPC algorithm. To construct the expanded network, we initialize-
 the process by assigning all origin and charging nodes a full battery level. We then recursively explore all outgoing links from each node and battery pair. For each feasible traverse, a new node with the reduced battery level is created if it does not already exist, and a corresponding link is added to show the traversal. This continues until all reachable node and battery combinations are explored. In addition, charging actions are modeled through special charging links, which connect a node wi-
th a partial battery to the same physical node with a full battery level. These links are assigned zero physical length and a fixed base travel time corresponding to the charging duration per hour. This approach enables EV users to make charging decisions within the path optimization framework. Figure 1 shows an original network and the expansion by assuming that the origin is node 1 and we have a charging station on node 3.
(a) Original network
(b) Battery-expanded network
Figure 1: Battery-State Network Expansion
6. Numerical Results
We conducted numerical experiments on three different in size networks. The Eastern Massachusetts network, which comprises 74 zones, 74 nodes, and 248 links, and the Anaheim network consists of 38 zones, 416 nodes, and 914 links. In addition, various number of new charging station candidate locations were introduced. To accurately model EV routing behavior, we expanded the original network of Eastern Massachusetts by using battery state considerations. The expansion network resulted in an expanded-
 network of 1,624 nodes and 2,612 links. The Anaheim network resulted in 4,015 nodes and 6,191 links in expanded form. The next larger network we have tried our algorithm on is the Barcelona transportation network. This network has 110 zones, 1,020 nodes, and
24

Figure 2: Convergence over B&B nodes
2,512 links. The network was expanded to 7,559 nodes and 9,169 links. This expanded representation allowed route choices that respect battery constraints and charging requirements. All computational experiments were performed on a MacBook Air equipped with an Apple M3 chip and 8 GB of unified memory, running macOS. We derive the tij(xij), which is the link flow in our model, from the BPR function, which takes the form:
tij (xij ) = t0
ij · 1 + α xij
cij
β
!
(22)
α and β are shape parameters that can be calibrated to data. It is common to use α = 0.15 and β = 4. t0
ij is the free flow travel time on link (i, j), and cij is the capacity of link (i, j). This equation is used to derive the travel time of a link (i, j). Figures 2 and 3 illustrate the convergence behavior and optimality gap percentage of our BPC algorithm on the Eastern Massachusetts network, respectively. These graphs are for the case of 30 candidate locations for charging stations. The convergence graph demonstrates the progression of the LB and UB. The gap between the two bounds decreases stea-
dily until convergence is achieved. The last B&B node gap is 0.79%. Specifically, the optimal solution was identified after evaluating 26 nodes in the B&B tree, which shows the effectiveness of using value function cuts. Figure 4 shows the number of paths in each B&B node, indicating the success of CG in identifying and adding useful paths. Table 1 presents a detailed breakdown of computational performance across different problem sizes on the Eastern Massachusetts network, where "Cand." shows the-
 number of candidate locations. The "MTAP (s)" column shows the time required to solve the MTAP, which determines traffic flow patterns given the current network configuration. The "CG (s)" represents the time needed to identify new paths to add to the HPR. "HPR (s)" shows the time spent solving HPR using CPLEX Solver [25]. "Total (s)" indicates the total algorithm termination time, "VF cuts" represents the total number of valid function cuts
25

Figure 3: Gap Percentage over B&B nodes
Figure 4: Number of Paths over the B&B nodes
26

generated throughout the solution process, "Nodes" indicates the B&B number of nodes until termination, and "Comb." displays the total number of feasible combinations under the budget constraint. "Gap %" shows the gap in the last node, and "Obj" shows the optimal objective function value.
Table 1: Computational Performance Results on Eastern Massachusetts
Cand. Nodes Comb. Gap (%) Obj. Total (s) MTAP (s) CG (s) HPR (s) VF cuts 5 3 24 0.0 18633.726 25.185 4.653 1.610 0.447 2452 10 8 347 0.166 18633.726 35.003 2.513 9.740 1.571 2481 20 8 10480 0.767 17052.465 69.720 12.144 26.917 4.823 2534 25 10 54420 0.0 16126.790 77.773 11.733 32.894 5.123 2528 30 26 304786 0.798 15896.640 205.526 55.378 95.578 19.813 2715 40 24 ∞ 0.0 8271.450 1797.142 986.601 601.784 164.271 2836
The results reveal that the MTAP component constitutes the primary computational bottleneck, consuming the largest portion of total runtime and showing the most considerable growth with problem size. This indicates that employing faster TAP algorithms could highly improve overall performance. The CG shows moderate scaling, while the HPR solution by CPLEX remains highly efficient even for complex instances. The algorithm successfully handles problems with over 300,000 feasible combinations, maintai-
ning reasonable iteration counts. Table 2 shows the computation performance on the Anaheim network.
Table 2: Computational Performance Results on Anaheim
Cand. Nodes Comb. Gap (%) Obj. Total (s) MTAP (s) CG (s) HPR (s) VF cuts 20 10 10480 0.001 40034.745 190.027 9.628 70.576 6.116 5629 25 20 54420 0.0 40030.506 479.680 13.911 253.716 23.206 6924 30 36 304786 0.299 40030.847 957.177 49.112 617.631 85.924 7208 40 64 ∞ 1.622 39840.151 3719.143 159.491 2553.716 872.949 7336
We will stop the solution process if the total calculated time after a step is more than 1 hour. The last row of Table 2 shows the total termination time of 3719.14 s, which we stopped on and report the existing gap. The gap is 1.622%, which shows the superiority of our algorithm that can achieve this gap on a large and realistic network in a very fast runtime. The time for MTAP is relatively small since we have not we have not explore all the branches yet, so the times MTAP was running after find-
ing a fixed solution is lower compared to previous rows. The most time consuming part of the algorithm for this larger network, compared to Eastern Massachusetts, is the CG. This means that the number of paths added to the network is high. Table 3 shows the result on the Barcelona network. The run time is higher compared to the Anaheim network since the network is larger. Similar to Anaheim, we put a one hour threshold. When we choose 40 candidates for the charging station, after 3,668.18 (s), the-
 solution process stopped with a 3.8 % gap. Our proposed algorithm demonstrates exceptional computational efficiency compared to existing approaches in the literature. In a study by Mirheli and Hajibabai [3], their proposed heuristic algorithm required 2.3 hour for reaching
27

Table 3: Computational Performance Results on Barcelona
Cand. Nodes Comb. Gap (%) Obj. Total (s) MTAP (s) CG (s) HPR (s) VF cuts 20 10 10480 0.0 36130.354 742.515 25.330 111.271 11.710 9442 25 16 54420 0.032 36010.367 909.689 31.016 199.218 17.597 9638 30 14 304786 0.961 36109.161 1080.887 79.951 252.499 17.725 9715 40 35 ∞ 3.802 35160.987 3668.182 94.790 2094.545 150.110 9738
4.5 % gap and their benchmark exact solution algorithm required 173.1 hours to converge on a hypothetical network of 12 nodes and 32 arcs. In another study, Mirheli and Hajibabai [4] reached the convergence of upper and lower bounds with a gap of 4.58%, and the CPU time for their algorithm was 21.4 hours on a hypothetical network dataset including 18 nodes and 58 links. In contrast, our algorithm consistently delivers exact optimal solutions within minutes rather than hours with guaranteed optimal-
ity. In addition, in another study of charging station location by Kınay et al. [1], they stated that for the large network of more than 300 nodes, Gurobi was unable to obtain even an incumbent solution within a two-hour time limit. So our result represents a computational speedup of over two orders of magnitude compared to existing methods, while simultaneously providing superior solution quality through exact optimization rather than heuristic approximations. The efficiency comes from our cuttin-
g plane generation strategy, and our effective HPR solution via CPLEX and the CG algorithm, which starts just with the useful paths and then adds as needed.
7. Conclusion
In conclusion, this study successfully formulates and implements a bi-level optimization model for optimizing the placement of EV charging stations. By applying a novel BPC algorithm enhanced with value function cuts and CG, we have achieved exact solutions with proven optimality guarantees, even for large scale networks such as Barcelona, which has 110 zones, 1,020 nodes, and 2,512 links. The network was expanded to 7,559 nodes and 9,169 links. Our methodology represents an important advancement -
over existing approaches in the charging station location literature, which resulted in both superior solution quality and computational efficiency. While existing heuristic methods provide no optimality guarantees and often struggle with solution quality, our algorithm consistently produces exact optimal solutions with mathematical certainty. More critically, compared to exact solution methods from the literature [1, 2, 3, 4] that require hundreds of hours of computational time to solve smaller n-
etwork instances, often without achieving optimality gaps below 1%, our algorithm demonstrates considerable efficiency by terminating within minutes while guaranteeing global optimality. This computational superiority, spanning over two orders of magnitude in runtime reduction, transforms charging infrastructure planning from a computationally prohibitive problem requiring days of computation into a tractable optimization task that can be solved in real time. Specifically, our computational experi-
ments demonstrate rapid convergence, minimal optimality gaps, and substantially reduced runtimes. The
28

algorithm will effectively handle extensive scenarios involving thousands of candidate combinations. Our results indicate an outstanding computational and theoretical improvement over previous approaches in the literature. Future research can consider adding dynamic operational constraints, such as real time station congestion, queuing effects, and variable charging rates based on location. Furthermore, evaluating uncertainties in user behavior, demand forecasts, and technological advancements in-
 battery capacities can enhance practical applicability. Additionally, the algorithm runtime can improved by using faster algorithms like traffic assignment by paired alternative segments [26] instead of Frank Wolfe that we implement.
Acknowledgment
The authors received no financial support for the research, authorship, and/or publication of this article.
29

References
[1] Kınay, O. B., F. Gzara, and S. A. Alumur, Charging Station Location and Sizing for Electric Vehicles Under Congestion. Transportation Science, Vol. 57, No. 6, 2023, pp. 1433–1451.
[2] Wang, W., Y. Liu, W. Wei, and L. Wu, A Bilevel EV Charging Station and DC Fast Charger Planning Model for Highway Network Considering Dynamic Traffic Demand and User Equilibrium. IEEE Transactions on Smart Grid, Vol. 15, No. 1, 2024, pp. 714–728.
[3] Mirheli, A. and L. Hajibabai, Charging Network Design and Service Pricing for Electric Vehicles With User-Equilibrium Decisions. IEEE Transactions on Intelligent Transportation Systems, Vol. 24, No. 3, 2023, pp. 2888–2902.
[4] Mirheli, A. and L. Hajibabai, Hierarchical Optimization of Charging Infrastructure Design and Facility Utilization. IEEE Transactions on Intelligent Transportation Systems, Vol. 23, No. 9, 2022, pp. 15574–15587.
[5] Li, K., C. Shao, Z. Hu, and M. Shahidehpour, An MILP Method for Optimal Planning of Electric Vehicle Charging Stations in Coordinated Urban Power and Transportation Networks. IEEE Transactions on Power Systems, Vol. 38, No. 6, 2023, pp. 5406–5419.
[6] Jing, W., K. An, M. Ramezani, and I. Kim, Location Design of Electric Vehicle Charging Facilities: A Path-Distance Constrained Stochastic User Equilibrium Approach. Journal of Advanced Transportation, Vol. 2017, No. 1, 2017, p. 4252946.
[7] Tran, C. Q., D. Ngoduy, M. Keyvan-Ekbatani, and D. Watling, A user equilibrium-based fast-charging location model considering heterogeneous vehicles in urban networks. Transportmetrica A: Transport Science, Vol. 17, No. 4, 2021, pp. 439–461.
[8] LeBlanc, L. J., An Algorithm for the Discrete Network Design Problem. Transportation Science, Vol. 9, No. 3, 1975, pp. 183–199.
[9] Farvaresh, H. and M. M. Sepehri, A Branch and Bound Algorithm for Bilevel Discrete Network Design Problem. Networks and Spatial Economics, Vol. 13, No. 1, 2013, pp. 67–106.
[10] Wang, S., Q. Meng, and H. Yang, Global optimization methods for the discrete network design problem. Transportation Research Part B: Methodological, Vol. 50, 2013, pp. 42–60.
[11] Bagloee, S. A., M. Sarvi, and M. Patriksson, A Hybrid Branch-and-Bound and Benders Decomposition Algorithm for the Network Design Problem. Computer-Aided Civil and Infrastructure Engineering, Vol. 32, No. 4, 2017, pp. 319–343.
30

[12] Rey, D. and M. Levin, A Branch–and–Price–and–Cut Algorithm for Discrete Network Design Problems under Traffic Equilibrium. Optimization Online preprint, 2024, preprint, posted 21 November 2024.
[13] Frade, I., A. Ribeiro, G. Gonçalves, and A. P. Antunes, Optimal Location of Charging Stations for Electric Vehicles in a Neighborhood in Lisbon, Portugal. Transportation Research Record, Vol. 2252, No. 1, 2011, pp. 9198.
[14] Klein, N. and N. Trautmann, Planning Electric Vehicle Charging Stations Under Uncertainty. In 2023 IEEE International Conference on Industrial Engineering and Engineering Management (IEEM), 2023, pp. 0612–0616.
[15] Faridimehr, S., S. Venkatachalam, and R. B. Chinnam, A Stochastic Programming Approach for Electric Vehicle Charging Network Design. IEEE Transactions on Intelligent Transportation Systems, Vol. 20, No. 5, 2019, pp. 1870–1882.
[16] Shuai, C., L. Ruan, D. Chen, Z. Chen, X. Ouyang, and Z. Geng, Location Optimization of Charging Stations for Electric Vehicles Based on Heterogeneous Factors Analysis and Improved Genetic Algorithm. IEEE Transactions on Transportation Electrification, Vol. 11, No. 1, 2025, pp. 4920–4933.
[17] Li, Y., N. Zheng, J. Zhang, Q. Cai, Z. Zhong, and X. Qian, Planning Model for Electric Vehicle Charging Station Considering Battery Capacity. In 2021 IEEE 5th Conference on Energy Internet and Energy System Integration (EI2), 2021, pp. 3768–3771.
[18] Ferro, G., R. Minciardi, L. Parodi, and M. Robba, Optimal Planning of Charging Stations in Coupled Transportation and Power Networks Based on User Equilibrium Conditions. IEEE Transactions on Automation Science and Engineering, Vol. 19, No. 1, 2022, pp. 48–59.
[19] Liu, W., X. Wang, and Y. Xu, Bilevel Planning of Wireless Charging Lanes in Coupled Transportation and Power Distribution Networks. IEEE Transactions on Transportation Electrification, Vol. 10, No. 2, 2024, pp. 24992510.
[20] Xiong, Y., J. Gan, B. An, C. Miao, and A. L. C. Bazzan, Optimal Electric Vehicle Fast Charging Station Placement Based on Game Theoretical Framework. IEEE Transactions on Intelligent Transportation Systems, Vol. 19, No. 8, 2018, pp. 2493–2504.
[21] He, F., Y. Yin, and J. Zhou, Deploying public charging stations for electric vehicles on urban road networks. Transportation Research Part C: Emerging Technologies, Vol. 60, 2015, pp. 227–240.
31

[22] Hu, R., Z. Tang, Q. Hu, X. Na, P. Angeloudis, D.-H. Lee, and S. Hu, Bi-Level Programming Approach for Optimal Charging Station Location and Traffic Assignment in Electric Autonomous Vehicle Systems. In 2023 IEEE 26th International Conference on Intelligent Transportation Systems (ITSC), 2023, pp. 6013–6018.
[23] Wardrop, J. G., ROAD PAPER. SOME THEORETICAL ASPECTS OF ROAD TRAFFIC RESEARCH. Proceedings of the Institution of Civil Engineers, Vol. 1, No. 3, 1952, pp. 325–362.
[24] Duran, M. A. and I. E. Grossmann, An outer-approximation algorithm for a class of mixed-integer nonlinear programs. Mathematical Programming, Vol. 36, No. 3, 1986, pp. 307–339.
[25] Cplex, I. I., V12. 1: User’s Manual for CPLEX. International Business Machines Corporation, Vol. 46, No. 53, 2009, p. 157.
[26] Bar-Gera, H., Traffic assignment by paired alternative segments. Transportation Research Part B: Methodological, Vol. 44, No. 8, 2010, pp. 10221046.
32

---

## Processing Information

- **Processing Library:** Zotero PDFWorker
- **Processing Date:** 2026-02-10T18:18:05.069Z
- **Text Length:** 70756 characters
- **Success:** Text extraction completed
- **PDF Library Used:** Zotero PDFWorker
- **Pages Processed:** 32 of 32
