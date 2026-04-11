# PDF Document: Le and Malikopoulos - 2025 - Accelerating Time-Optimal Trajectory Planning for Connected and Automated Vehicles with Graph Neural.pdf

**File Path:** Le and Malikopoulos - 2025 - Accelerating Time-Optimal Trajectory Planning for Connected and Automated Vehicles with Graph Neural.pdf

**Processed Date:** 2026-02-10T18:17:52.392Z

**File Size:** 526.41 KB

**Total Pages:** 7

**Extracted Pages:** 7

**PDF Library:** Zotero PDFWorker

**Attachment Item ID:** 3288

**Title:** Accelerating Time-Optimal Trajectory Planning for Connected and Automated Vehicles with Graph Neural Networks

**Collection:** Large Files > Random Papers

---

## Extracted Text Content

Accelerating Time-Optimal Trajectory Planning for Connected and Automated Vehicles with Graph Neural Networks
Viet-Anh Le ∗ and Andreas A. Malikopoulos ∗∗
∗ University of Pennsylvania, Philadelphia, PA 19104 USA (e-mail: vietanh@seas.upenn.edu). ∗∗ Cornell University, Ithaca, NY 14850 USA (e-mail: amaliko@cornell.edu)
Abstract: In this paper, we present a learning-based framework that accelerates time- and energy-optimal trajectory planning for connected and automated vehicles (CAVs) using graph neural networks (GNNs). We formulate the multi-agent coordination problem encountered in traffic scenarios as a cooperative trajectory planning problem that minimizes travel time, subject to motion primitives derived from energy-optimal solutions. The effectiveness of this framework can be further improved through repla-
nning at each time step, enabling the system to incorporate newly observed information. To achieve real-time execution of such a multi-agent replanning scheme, we employ a GNN architecture to learn the solutions of the time-optimal trajectory planning problem from offline-generated data. The trained model produces online predictions that serve as warm-start solutions for numerical optimization, thereby enabling rapid computation of minimal exit times and the associated feasible trajectories. This -
learningaugmented approach substantially reduces computation time while ensuring that all state, input, and safety constraints are satisfied.
Keywords: Learning to coordinate, connected and automated vehicles, cooperative trajectory planning.
1. INTRODUCTION
The rapid advancements in vehicle connectivity and automation offer promising opportunities to enhance safety while reducing energy consumption, greenhouse gas emissions, and travel delays. A growing body of research has highlighted the benefits of coordinating connected and autonomous vehicles (CAVs) through control and optimization techniques in a wide range of traffic scenarios. Some effective approaches have been proposed in recent years, including hierarchical optimization for scheduling and -
planning; see (Chalaki and Malikopoulos, 2021; Xiao and Cassandras, 2019), distributed model predictive control; see (Kloock et al., 2019; Katriniok et al., 2022), or multi-agent reinforcement learning; see (Krishna Sumanth Nakka et al., 2022; Chalaki et al., 2020b; Zhang et al., 2023).
Trajectory planning based on time- and energy-optimal control has also been widely applied across a range of traffic scenarios, both for fully automated traffic streams; see (Malikopoulos et al., 2021), and for mixed-traffic environments; see (Le et al., 2024, 2023). The effectiveness of this trajectory planning framework can be further enhanced through replanning, either at fixed periodic intervals or in response to specific events; see (Chalaki and Malikopoulos,
⋆ This research was supported in part by NSF under Grants CNS2149520, CMMI-2348381, IIS-2415478, and in part by Mathworks.
⋆⋆This work was conducted while Viet-Anh Le was at Cornell University.
2022; Le et al., 2024). Replanning provides several advantages: (i) it enables the computation of improved solutions that enhance overall performance, and (ii) it introduces feedback into the control architecture, thereby increasing robustness to disturbances and modeling uncertainties. At each replanning instance, all CAVs must re-solve their time-optimal control problems sequentially, given the most recent vehicle states. However, as the number of CAVs increases, solving this multi-agent time-op-
timal control problem in a sequential manner becomes increasingly computationally demanding, limiting the feasibility of deploying this framework in real time.
In this work, we aim to develop a learning-based framework to accelerate finding the solutions of time and energyoptimal trajectory planning for CAVs based on graph neural networks (GNNs). In particular, we train a GraphSAGE network, a GNN framework with inductive node embedding, using offline data to learn the optimal solutions of the time-optimal cooperative trajectory planning problem for a group of CAVs. In real-time implementation, the prediction of the optimal terminal time for each CAV can -
be used as an initial guess for a numerical algorithm to quickly find the optimal solution for the terminal time and the corresponding optimal trajectory that satisfies all the constraints. The proposed framework enables fast implementation for solving the cooperative time-optimal trajectory planning problem, where the problem for multiple CAVs must be solved sequentially.
arXiv:2511.20383v1 [eess.SY] 25 Nov 2025

Control zone
Conflict point
Fig. 1. An intersection scenario with 4 lanes.
The remainder of this paper is organized as follows. In Section 2, we present the multi-agent time-optimal trajectory planning framework and the high-level optimal decision sequencing mechanism for CAV coordination in an unsignalized intersection. In Section 3, we develop a learning-to-coordinate based on GNN to learn the optimal time solutions from offline-generated data. Finally, we provide the simulation results in Section 4 and concluding remarks in Section 5.
2. COORDINATION OF CONNECTED AND AUTOMATED VEHICLES
In this section, we describe the problem and summarize the time-optimal trajectory planning framework to coordinate the CAVs, developed in our previous work.
2.1 Problem Formulation
We consider the problem of coordinating multiple CAVs in a single-lane unsignalized intersection, as illustrated in Fig. 1. The points at which the paths of different CAVs intersect—where a lateral collision may occur—are referred to as conflict points. Although an unsignalized intersection serves as the representative scenario in this work, the proposed framework can be readily extended to other environments featuring lateral conflicts, such as merging roadways or roundabouts. We define a control-
 zone within which the CAVs operate under the proposed coordination framework. A centralized coordinator is assumed to be available, with access to the positions of all CAVs within the control zone. Moreover, the CAVs and the coordinator are able to exchange information while they remain inside the control zone.
Next, we provide some necessary definitions for our exposition.
Definition 1. (Lanes) Let lane–l be the l-th lane in the scenario and L be the set of all lanes’ indices. We set each lane’s origin location at the control zone’s entry and let ψl be the position of the stop line along lane–l.
Definition 2. (Conflict points) Let point n and the notation n = l ⊗ m denote that point n is the conflict
point between lane–l and lane–m. Let φn
l and φnm be the
positions of point n along lane–l and lane–m, respectively.
Definition 3. (Vehicles) Let A = {1, . . . , N (t)}, t ∈ R≥0, be the set of CAVs traveling inside the control zone, where N (t) ∈ N is the total number of vehicles. Note that the indices of the vehicles are determined by the order in which they enter the control zone.
Let p0 and pf ∈ R be the positions of the control zone entry and exit, respectively. We consider that the dynamics of each vehicle i ∈ L(t) are described by a double integrator model as follows p ̇i(t) = vi(t),
v ̇i(t) = ui(t), (1)
where pi ∈ P, vi ∈ V, and ui ∈ U denotes the longitudinal position of the rear bumper, speed, and control input (acceleration/deceleration) of the vehicle, respectively. The sets P, V, and U are compact subsets of R. The control input is bounded by
umin ≤ ui(t) ≤ umax, ∀i ∈ L(t), (2)
where umin < 0 and umax > 0 are the minimum and maximum control inputs, respectively, as designated by the physical acceleration and braking limits of the vehicles, or limits that can be imposed for driver/passenger comfort. Next, we consider the speed limits of the CAVs,
vmin ≤ vi(t) ≤ vmax, ∀i ∈ L(t), (3)
where vmin > 0 and vmax > 0 are the minimum and maximum allowable speeds.
Next, let t0
i and tf
i ∈ R≥0 be the times at which each vehicle i enters and exits the control zone, respectively. To avoid collisions between vehicles in the control zone, we impose two constraints: (1) lateral constraints between vehicles traveling on different lanes and (2) rear-end constraints between vehicles traveling on the same lane. Specifically, to prevent a potential conflict between CAV–i and CAV–k traveling on lane–l and lane–m with a conflict point n, we require a minimum time gap δl ∈ R≥0 between
the time those CAVs cross the conflict point. Let tn
i and tn
k
be the time when the CAV–i and CAV–k cross the conflict point n. Note that since 0 < vmin ≤ vi(t), the position pt(t) is a strictly increasing function. Thus, the inverse function ti(·) = p−1
i (·) exists and there exist unique value of tn
i
such that p(tn
i ) = φn
l , and we impose the following lateral
constraint,
|tn
i − tn
k | ≥ δl. (4)
Additionally, to prevent rear-end collision between CAV–i and its immediate preceding CAV–k traveling on the same lane, we impose the following rear-end safety constraint:
pk(t − δr) − pi(t) ≥ dmin, t ∈ [t0
i , tf
k], (5)
where dmin ∈ R≥0 and δr ∈ R≥0 are the minimum distance at a standstill and safe time gap. Note that pk(t − δr) denotes the position of CAV–k at time instant t − δr.
2.2 Time-Optimal Trajectory Planning
Next, we summarize the cooperative time-optimal trajectory planning framework developed for coordinating CAVs; see (Malikopoulos et al., 2021). We start the exposition with the unconstrained solution of an energy-optimal control problem for each CAV–i; see (Malikopoulos et al.,

2018). Given a fixed tf
i that CAV–i exits the control zone, the energy-optimal control problem aims at finding the optimal control input (acceleration/deceleration) for each CAV by solving the following problem.
Problem 1: (Energy-optimal control problem) Let t0 be the current time and tf
i be the time that CAV–i exits the control zone. The energy-optimal control problem for CAV–i at t is given by:
minimize
ui (t)∈U
1 2
Z tf
i
t0
u2
i (t) dt,
subject to: (1), (2), (3), (5), given:
pi(t0
i ) = p0
i , vi(t0
i ) = v0
i , pi(tf
i ) = pf ,
(6)
where v0
i is the current speed of CAV–i. The boundary conditions in (6) are set at the current and exit of the control zone.
The closed-form solution of Problem 1 for each CAV–i can be derived using the Hamiltonian analysis. If none of the state and control constraints are active, the closedform optimal control law and trajectory are given by; see (Malikopoulos et al., 2021)
ui(t) = 6φi,3t + 2φi,2,
vi(t) = 3φi,3t2 + 2φi,2t + φi,1,
pi(t) = φi,3t3 + φi,2t2 + φi,1t + φi,0,
(7)
where φi,3, φi,2, φi,1, φi,0 ∈ R are constants of integration. Since the speed of CAV–i is not specified at the exit time tf
i , we consider the boundary condition
ui(tf
i ) = 0. (8)
For the full derivation of the closed-form solution in (7) using Hamiltonian analysis, the readers are referred to Malikopoulos et al. (2021).
Given the boundary conditions in (6) and (8), and considering tf
i is known, the constants of integration can be found by:
φi =

 
φi,3 φi,2 φi,1 φi,0


=

  
(t0
i )3 (t0
i )2 t0
i1
3(t0
i )2 2t0
i 10
(tf
i )3 (tf
i )2 tf
i1
6tf
i 2 00

  
−1 
 
p0 v0
i
pf 0


 . (9)
Note that, as the position is an increasing function of time, we can derive the inverse function that represents the time trajectory ti(pi) as a function of the position.
Next, we formulate the time-optimal control problem to minimize the travel time and guarantee all the constraints for CAVs given the energy-optimal trajectory (7) at t0
i . We enforce this unconstrained trajectory as a motion primitive to avoid the complexity of solving a constrained optimal control problem by piecing constrained and unconstrained arcs together; see (Malikopoulos et al., 2018).
Problem 2: (Time-optimal trajectory planning) At
the time t0
i of entering the control zone, let Ti(t0
i ) = [tf
i , tf
i] be the feasible range of travel time under the state and input constraints of CAV–i computed at t0
i . The formulation
Algorithm 1 Numerical algorithm for solving Problem 2
1: for i = 1 to N (t) do 2: Initialize tf
i ← tf
i
3: repeat
4: Compute the trajectory coefficients φi using (9) 5: Evaluate the constraints (2), (3), (4), (5), (7) 6: if no constraint is violated then
7: return tf
i , φi
8: else
9: tf
i ← tf
i +ε 10: until tf
i ≥ tf
i
for computing tf
i and tf
i can be found in Chalaki et al. (2020a). Then CAV–i solves the following time-optimal control problem to find the minimum exit time tf
i ∈ Ti(t0
i) that satisfies all state, input, and safety constraints
minimize
tf
i ∈Ti(t0
i)
tf
i
subject to: (2), (3), (4), (5), (7), given:
pi(t0
i ) = p0, vi(t0
i ) = v0
i , pi(tf
i ) = pf , ui(tf
i ) = 0.
(10)
The computation steps for numerically solving Problem 2 are summarized below and can also be found in Chalaki
et al. (2020a). We begin by initializing tf
i = tf
i and com
puting the parameters φi using (9). All state, control, and safety constraints are then evaluated. If no constraint is violated, the solution is accepted; otherwise, tf
i is incremented by a step size ε. This process is repeated until a feasible solution is obtained that satisfies all constraints.
Solving Problem 2 yields the optimal exit time tf
i , along with the corresponding optimal trajectory and control law in (7) for CAV–i over the interval t ∈ [t0
i , tf
i ]. The complete numerical procedure is presented in Algorithm 1. If the problem for a particular CAV–i is infeasible, the algorithm returns the solution that exhibits the minimal constraint violation.
2.3 Replanning Mechanism
Unlike our previous framework for CAV coordination (Malikopoulos et al., 2018), where each CAV solves its optimization problem only upon entering the control zone, we enhance the framework by enabling the CAVs to re-solve the time-optimal trajectory planning problem at every discrete time step based on newly observed information. At each step, a CAV’s position and speed are updated and used as new initial conditions for solving the time-optimal trajectory planning problem (Problem 2). Incorporatin-
g such a replanning mechanism introduces feedback into the planning process and has been shown to improve closed-loop performance; see (Chalaki and Malikopoulos, 2022).
At each time step, we need to determine the decision sequence for the CAVs. Let s = (s1, s2, . . . , sN(t)), where si ∈ {1, ..., N (t)} and si ̸= sj, ∀ i ̸= j, be the decision sequence for the CAVs, which determines the order at which the CAVs solve its trajectory planning problem. We compute the decision sequence based on the following rule:

[tf
i , tf
i ] ≺ [tf
j , tf
j ] then si < sj, (11)
where ≺ denotes the comparison in lexicographic order. The rule implies that CAVs closer to the control zone exit have higher priority. In cases where two CAVs have the same minimum possible exit time, the one with the smaller feasible space is assigned higher priority.
Given the generated decision sequence, the CAVs sequentially solve the time-optimal control problem.
Problem 3: (Cooperative planning for all CAVs) At any time step tc, CAV–i ∈ A(tc), in a sequential manner determined by (11), solves the following timeoptimal control problem
minimize
tf
i ∈Ti(tc)
tf
i
subject to: (2), (3), (4), (5), (7), given:
pi(tc), vi(tc), pi(tf
i ) = pf , ui(tf
i ) = 0.
(12)
We can observe that at each replanning instance, we need to solve N (t) time-optimal control problem sequentially, which becomes more computationally expensive given an increasing number of CAVs. Moreover, we can consider Problem 3 with the decision sequence (11) as a parametric optimization problem, where the optimal solutions depend on some problem parameters that include all the timevarying quantities, e.g., the initial conditions of the CAVs. Therefore, an interesting approach to accelerate so-
lving this problem is to learn a mapping between the vector of problem parameters and the optimal solutions using supervised learning and data generated offline. The trained model is then used to generate approximate optimal solutions for rapid real-time execution. In the next section, we develop a learning framework that approximates the solutions of time-optimal control problems with graph neural networks.
3. LEARNING TO COORDINATE WITH GRAPH NEURAL NETWORKS
In this section, we present a learning framework based on GNNs to learn the optimal terminal time tf,∗
i . GNN have been successfully employed in different applications for multi-agent coordination, such as learning binary solutions in multi-agent mixed-integer convex programming; see (Le et al., 2025), multi-agent reinforcement learning; see (Goeckner et al., 2024). To this end, we propose using we utilized the GraphSAGE convolution (SageConv) architecture; see (Hamilton et al., 2017), to incorporate the graph-structured data into learning the mapping from the problem parameters {θi}i∈A(t) to the -
optimal terminal
time {tf∗
i }i∈A(t).
We define the vector of problem parameters for each CAV–i as θi = [pi, vi, o⊤
i ]⊤ where oi is a one-hot encoding of the lane index. Note that given the predicted optimal terminal time, we can fully determine the optimal trajectory by (7) and (9). We first define the graph for the system as follows.
Definition 4. (Graph) Let G = (V, E) be the graph to model the network of CAVs, in which V = A(t) and
E ⊂ A(t) × A(t) be the node and edge sets, respectively. We consider that the edge set is constituted by pairs of CAVs sharing lateral or rear-end safety constraints.
3.1 GraphSAGE Networks
GraphSAGE is a type of GNN used for inductive node representation learning; see (Hamilton et al., 2017). Unlike traditional GCNs that rely on full graph adjacency, GraphSAGE samples and aggregates information from a node’s local neighborhood to compute updated node embeddings. The key idea is to learn a function that aggregates feature information from a node’s neighbors, allowing the model to generalize to unseen nodes or graphs. Let K be a fixed number of layers in the GraphSAGE network. Given a-
 graph G = (V, E) and features for all nodes θi, ∀i ∈ V, at each layer k ∈ {1, . . . , K}, a node’s embedding hk
i is updated based on the embeddings of its neighbors from
the previous layer, k − 1, starting from h0
i = θi. Let Ni be the set of node–i’s immediate neighbors, which is fixed-size and uniformly sampled from the set {j ∈ V : (i, j) ∈ E}. First, each node–i ∈ V aggregates the representations of the nodes in its immediate neighborhood {hk−1
j :j∈
N (i)}, into a single vector hk
Ni , which is denoted by
hk
Ni ← AGGREGATEk {hk−1
i , ∀j ∈ Ni} . (13)
Next, GraphSAGE concatenates the node’s own representation from the previous layer hk−1
i with the aggregated neighborhood vector, and the concatenated vector is fed through a fully connected layer with nonlinear activation function σ to generate the updated embedding hk
i for the current layer,
hk
i ← σ W k.CONCAT hk−1
i , hk
Ni , (14)
where W k is the weight matrix of layer k. The output vector at the last layer K is the output of the GraphSAGE network. The aggregation of the neighbor representations can be done by a variety of aggregator architectures, such as mean, pooling, or LSTM aggregators. In this work, we use the mean aggregator, where we take the elementwise mean of the vectors in {hk−1
j , ∀j ∈ Ni}. The weight matrices of the network and parameters of the aggregator functions are trained via stochastic gradient descent, given a defined loss function. Let hK
i be the output of the last layer for each node–i ∈ V, then we have
{hK
i }i∈V = Ψ {θi}i∈V , G , (15)
where Ψ(·) denotes the operator of the multi-layer GraphSAGE network.
In this paper, the GraphSAGE network is used to take the input features {θi}, i ∈ V, while considering the relations of neighboring agents by the graph G. Let tˆf
i be
the prediction for the optimal terminal time tf∗
i . Note that
given the predicted optimal terminal time tˆf
i from GNN, the corresponding energy-optimal trajectory for CAV–i can be found by solving (9). To ensure that the solution of (9) exists, we need to ensure that the prediction tˆf∗
i must
be inside the feasible range [tf
i , tf
i ] computed at each time step. Thus, we consider the following computation for tˆf
i: tˆf
i = tf
i + (tf
i − tf
i ) σ(hK
i ), (16)

Algorithm 2 GNN-based accelerated numerical algorithm for solving Problem 2
1: Make GNN prediction using (15) and (16) to obtain {tˆf
i }i∈A(t)
2: for i = 1 to N (t) do 3: Initialize a queue Qi ← {tˆf
i , tˆf
i − ε, tˆf
i + ε}.
4: repeat 5: tf
i ← pop front(Qi)
6: Compute trajectory coefficients φi using (9) 7: Evaluate constraints (2), (3), (4), (5), (7) 8: if no constraint is violated then
9: return tf
i , φi
10: else
11: if tf
i + ε ≤ tf
i < tˆf
i then
12: push back(Qi, tf
i − ε)
13: else if tˆf
i < tf
i ≤ tf
i − ε then 14: push back(Qi, tf
i + ε) 15: until Qi is empty
where we apply the sigmoid function to the output of the multi-layer GraphSAGE network.
For offline data generation, we conducted large-scale simulations with different traffic volumes ranging from, where the entering time and speed of the CAVs were randomly sampled. To enrich the training dataset, we collect the data by solving the cooperative time-optimal trajectory planning at every time step. If the problem is feasible, the problem parameters of the CAVs, the graph, and optimal terminal times are appended to the dataset. We collected approximately 250, 000 data points from simula-
tions and separated 90% of the dataset for training and the remaining 10% for validation. We then constructed the GNN with a three-layer GraphSAGE network with 256 neurons per layer. To train the network, we minimize the Huber loss function that combines the strengths of mean squared error (MSE) and mean absolute error (MAE) for a regression task. The trained model approximately achieves the training loss of 0.04 and the validation loss of 0.16.
3.2 GNN-based Accelerated Numerical Algorithm
As mentioned earlier, the trajectories generated by the GNN-based solver may not be safe for CAVs due to prediction inaccuracies relative to the true optimal solution. Therefore, the GNN-based solver cannot be directly deployed for real-time control. However, the predicted terminal time from the GNN can serve as a warm start or initial guess to accelerate the optimization process. The algorithm operates as follows: For each CAV–i, we choose the GNN prediction tˆf
i as the initial solution. At each
iteration of the algorithm, we compute the parameters φi using (9), then evaluate all the state, control, and safety constraints. If none of the constraints is violated, we return the solution; otherwise, tf
i is increased or decreased by the step size ε. The procedure is repeated until the solution satisfies all the constraints, or tf
i go beyond its bounds
[tf
i , tf
i ]. We provide the steps of this accelerated numerical solver in Algorithm 2.
1200 1400 1600 Volume (vph)
0.0
0.1
0.2
0.3
Computation time (s)
Baseline
1200 1400 1600 Volume (vph)
0.0
0.1
0.2
0.3 GNN
Fig. 2. Comparison of computation times across different traffic volumes for the baseline (Algorithm 1) and GNN-based solver (Algorithm 2). 4. SIMULATION STUDIES
In this section, we demonstrate the control performance of the proposed framework by numerical simulations. We created a simulation environment in SUMO interfacing with the Python programming language via TraCI; see (Lopez et al., 2018). In the simulation, we considered an intersection scenario with a control zone of length 250 m. The main program of our framework is implemented in Python, utilizing the PyTorch Geometric library for training and prediction of the GNN model. The parameters of the t-
ime-optimal control formulation are chosen as: vmax = 20.0 m/s, vmin = 1.0 m/s, amax = 3.0 m/s2,
amin = −4.0 m/s2, ρl = 2.0 s, ρr = 1.5 s, dmin = 10 m.
4.1 Results and Discussions
To demonstrate the main advantage of the GNN-based solver in reducing computation time, we compare the computation time with the baseline numerical solver (Algorithm 1) in Fig. 2. As can be seen from the figure, the GNN-based approach achieves significantly faster computation than the conventional numerical method. Moreover, the GNN-based approach is more scalable as the traffic volumes increase. Thus, the GNN-based approach is suitable for real-time control where replanning at every time step is -
required.
To evaluate the performance of the control framework with integrated replanning, we compare the proposed approach with a baseline in which the time- and energy-optimal control problem (Problem 2) is solved for each CAV when it enters the control zone. Table 1 shows the travel time comparison between our proposed methods using GNNbased solver and replanning at every time step, and the baseline method with the numerical solver (Algorithm 1) and without replanning, i.e., we solve the problem for each-
 CAV upon entry. The results show that under three evaluated traffic volumes, 1200, 1400, and 1600 vehicles per hour, the proposed method, by exploiting replanning, can improve the average travel time by 7.11%, 10.63%, and 12.74%, respectively. In addition, we show the position and speed trajectories for some CAVs in a particular simulation in Fig 3. The speed profiles show that, without replanning, the CAVs may accelerate or decelerate throughout the entire control zone, which is consistent with -
the solution of Problem (2). In contrast, when replanning is enabled, the CAVs can improve their trajectories whenever a more efficient yet safe solution is available.

50
100
150
200
Position (m)
10 20 30 40 50 60 Time (s)
10
15
20
Speed (m/s)
(a) GNN-based solver with replanning
50
100
150
200
Position (m)
10 20 30 40 50 60 Time (s)
10
15
20
Speed (m/s)
(b) Numerical solver without replanning
Fig. 3. Position and speed trajectories for 20 vehicles in a simulation example using different methods. Different colors represent the trajectories of vehicles traveling on different lanes.
Table 1. Average travel time (and standard deviation) in seconds for different penetration rates, between our proposed method (Algorithm 2 and with replanning) and baseline method (Algorithm 1 and without replanning).
Methods 1200 veh/h
1400 veh/h
1600 veh/h
Proposed 9.69 (1.14) 10.34 (1.33) 10.72 (1.55)
Baseline 10.38 (1.75) 11.44 (2.11) 12.09 (2.42)
5. CONCLUSION
In this paper, we developed a learning-based framework that accelerates the solution of time-optimal trajectory planning for CAVs in an unsignalized intersection using graph neural networks. The framework leverages GraphSAGE, a variant of GNNs, to learn the optimal solutions of a multi-agent time-optimal trajectory planning problem and to provide high-quality warm-start predictions for real-time implementation. In contrast to previous approaches, the proposed method enables both the time-optimal t-
rajectory planning and the optimal decision sequencing to be executed at every discrete time step, thereby supporting real-time replanning. Future efforts will focus on extending this framework to mixed-traffic environments that explicitly account for human-driven vehicle behavior.
REFERENCES
Chalaki, B., Beaver, L.E., and Malikopoulos, A.A. (2020a). Experimental validation of a real-time optimal controller for coordination of cavs in a multi-lane roundabout. In 31st IEEE Intelligent Vehicles Symposium (IV), 504–509. Chalaki, B., Beaver, L.E., Remer, B., Jang, K., Vinitsky, E., Bayen, A., and Malikopoulos, A.A. (2020b). Zeroshot autonomous vehicle policy transfer: From simulation to real-world via adversarial learning. In IEEE 16th International Conference on Control & Automation (ICCA-
), 35–40.
Chalaki, B. and Malikopoulos, A.A. (2021). Time-optimal coordination for connected and automated vehicles at
adjacent intersections. IEEE Transactions on Intelligent Transportation Systems, 23(8), 13330–13345. doi: 10.1109/TITS.2021.3123479. Chalaki, B. and Malikopoulos, A.A. (2022). A priorityaware replanning and resequencing framework for coordination of connected and automated vehicles. IEEE Control Systems Letters, 6, 1772–1777. doi: 10.1109/LCSYS.2021.3133416. Goeckner, A., Sui, Y., Martinet, N., Li, X., and Zhu, Q. (2024). Graph neural network-based multi-agent reinforcement learning for resilient -
distributed coordination of multi-robot systems. In 2024 IEEE/RSJ International Conference on Intelligent Robots and Systems (IROS), 5732–5739. IEEE. Hamilton, W., Ying, Z., and Leskovec, J. (2017). Inductive representation learning on large graphs. Advances in neural information processing systems, 30.
Katriniok, A., Rosarius, B., and M ̈ah ̈onen, P. (2022). Fully distributed model predictive control of connected automated vehicles in intersections: Theory and vehicle experiments. IEEE Transactions on Intelligent Transportation Systems, 23(10), 18288–18300. Kloock, M., Scheffe, P., Marquardt, S., Maczijewski, J., Alrifaee, B., and Kowalewski, S. (2019). Distributed model predictive intersection control of multiple vehicles. In 2019 IEEE intelligent transportation systems conference (ITSC), 1735–-
1740. IEEE.
Krishna Sumanth Nakka, S., Chalaki, B., and Malikopoulos, A.A. (2022). A multi-agent deep reinforcement learning coordination framework for connected and automated vehicles at merging roadways. In 2022 American Control Conference (ACC), 3297–3302.
Le, V.A., Chalaki, B., Tzortzoglou, F.N., and Malikopoulos, A.A. (2024). Stochastic time-optimal trajectory planning for connected and automated vehicles in mixed-traffic merging scenarios. IEEE Transactions on Control Systems Technology.
Le, V.A., Kounatidis, P., and Malikopoulos, A.A. (2025). Combining Graph Attention Networks and Distributed Optimization for Multi-Robot Mixed-Integer Convex Programming. In 2025 64th IEEE Conference on Decision and Control.
Le, V.A., Wang, H.M., Orosz, G., and Malikopoulos, A.A. (2023). Coordination for Connected Automated Vehicles at Merging Roadways in Mixed Traffic Environment. In 2023 62nd IEEE Conference on Decision and Control (CDC), 4150–4155. IEEE. Lopez, P.A., Behrisch, M., Bieker-Walz, L., Erdmann, J., Fl ̈otter ̈od, Y.P., Hilbrich, R., Lu ̈cken, L., Rummel, J., Wagner, P., and Wießner, E. (2018). Microscopic traffic simulation using sumo. In 2018 21st International Conference on Intelligent Transportation -
Systems (ITSC), 2575–2582. IEEE. Malikopoulos, A.A., Beaver, L.E., and Chremos, I.V. (2021). Optimal time trajectory and coordination for connected and automated vehicles. Automatica, 125(109469). Malikopoulos, A.A., Cassandras, C.G., and Zhang, Y.J. (2018). A decentralized energy-optimal control framework for connected automated vehicles at signal-free intersections. Automatica, 93, 244–256. Xiao, W. and Cassandras, C.G. (2019). Decentralized optimal merging control for connected and automated

vehicles. In 2019 American Control Conference (ACC), 3315–3320. IEEE. Zhang, J., Li, S., and Li, L. (2023). Coordinating cav swarms at intersections with a deep learning model. IEEE Transactions on Intelligent Transportation Systems, 24(6), 6280–6291.

---

## Processing Information

- **Processing Library:** Zotero PDFWorker
- **Processing Date:** 2026-02-10T18:17:52.392Z
- **Text Length:** 31016 characters
- **Success:** Text extraction completed
- **PDF Library Used:** Zotero PDFWorker
- **Pages Processed:** 7 of 7
