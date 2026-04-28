# PDF Document: Kaseb et al. - 2025 - Quantum-Enhanced Reinforcement Learning for Accelerating Newton-Raphson Convergence with Ising Machi.pdf

**File Path:** Kaseb et al. - 2025 - Quantum-Enhanced Reinforcement Learning for Accelerating Newton-Raphson Convergence with Ising Machi.pdf

**Processed Date:** 2026-02-10T18:16:16.297Z

**File Size:** 3882.50 KB

**Total Pages:** 10

**Extracted Pages:** 10

**PDF Library:** Zotero PDFWorker

**Attachment Item ID:** 3291

**Title:** Quantum-Enhanced Reinforcement Learning for Accelerating Newton-Raphson Convergence with Ising Machines: A Case Study for Power Flow Analysis

**Collection:** Large Files > Random Papers

---

## Extracted Text Content

1
Quantum-Enhanced Reinforcement Learning for Accelerating
Newton-Raphson Convergence with Ising Machines: A Case Study
for Power Flow Analysis
Zeynab Kaseb1,∗, Student Member IEEE, Matthias Mo ̈ller2, Lindsay Spoor3, Jerry J. Guo4,5, Yu Xiang4,6, Peter Palensky1, Senior Member IEEE, and Pedro P. Vergara1, Senior Member IEEE
Abstract—The Newton-Raphson (NR) method is widely used for solving power flow (PF) equations due to its quadratic convergence. However, its performance deteriorates under poor initialization or extreme operating scenarios, e.g., high levels of renewable energy penetration. Traditional NR initialization strategies often fail to address these challenges, resulting in slow convergence or even divergence. We propose the use of reinforcement learning (RL) to optimize the initialization of NR, and intro-
duce a novel quantum-enhanced RL environment update mechanism to mitigate the significant computational cost of evaluating power system states over a combinatorially large action space at each RL timestep by formulating the voltage adjustment task as a quadratic unconstrained binary optimization problem. Specifically, quantum/digital annealers are integrated into the RL environment update to evaluate state transitions using a problem Hamiltonian designed for PF. Results demonstrate significant imp-
rovements in convergence speed, a reduction in NR iteration counts, and enhanced robustness under different operating conditions.
Index Terms—Adiabatic quantum computing, combinatorial optimization, deep learning, machine learning, Markov decision process (MDP), numerical solver, quantum annealing, QUBO formulation, reinforcement learning.
I. INTRODUCTION
T
HE global push toward a net-zero energy future demands a paradigm shift in how electricity grids are planned, operated, and optimized. With the rapid integration of distributed energy resources, electricity grids face unprecedented challenges in maintaining stability, reliability, and efficiency. At the core of this transformation lies power flow (PF) analysis, a fundamental task that enables grid operators to assess grid conditions, optimize generation dispatch, and ensure secure operation, among-
 others [1].
1Electrical Sustainable Energy, Delft University of Technology, P.O. Box 5031, 2600 GA Delft, The Netherlands. 2Applied Mathematics, Delft University of Technology, P.O. Box 5031, 2600 GA Delft, The Netherlands. 3Leiden Institute of Advanced Computer Science, Leiden University, P.O. Box 9512, 2300 RA Leiden, The Netherlands. 4Alliander N.V., P.O. Box 50, 6920 AB, Arnhem, The Netherlands. 5Intelligent Systems, Delft University of Technology, P.O. Box 5031, 2600 GA Delft, The Netherlands. 6Electrica-
l Engineering, Eindhoven University of Technology, P.O. Box 513, 5600 MB, Eindhoven, The Netherlands. ∗Corresponding author: Zeynab Kaseb (Z.Kaseb@tudelft.nl) This study is part of the DATALESs project (project number 482.20.602), jointly financed by the Netherlands Organization for Scientific Research (NWO) and the National Natural Science Foundation of China (NSFC).
PF analysis involves solving nonlinear algebraic equations that describe the steady-state of electricity grids, which ultimately determines bus voltages, power flows, and losses. As the scale and complexity of modern electricity grids increase, addressing the computational challenges of PF analysis becomes imperative, particularly in distribution networks where the growing penetration of distributed energy sources introduces congestion. Traditional numerical techniques, e.g., the Newton-Raphson (N-
R) method, provide reliable solutions but struggle with scalability and handling the complexities involved, which necessitate novel approaches to meet the evolving demands of modern electricity grids [2]. The NR method offers several advantages in PF analysis. Firstly, it is well-established in numerical analysis and is widely supported in power system studies. Secondly, the Jacobian matrix captures the sensitivity of the power balance equations, which leads to fitting updates in each iteration. F-
inally, the error decreases quadratically near the solution, which, in turn, leads to quadratic convergence in most cases [3]. However, NR has several drawbacks [4]. Constructing the Jacobian matrix at each iteration can be computationally expensive for large-scale electricity grids. In addition, poorly chosen initial values can lead to divergence, particularly in illconditioned or heavily loaded electricity grids. A PF case can be categorized as ill-conditioned if, even though a physical solution-
 exists and the grid continues to operate, it is not reachable using NR. Furthermore, the NR method may fail where the Jacobian becomes singular or nearly singular at certain operating points [5]. In this perspective, the initial guess, x0, significantly influences the NR method’s performance [6]. A good initial guess can accelerate convergence and enhance numerical stability, while a poor initial guess may result in slow convergence or even divergence. Initial values are often chosen based on a f-
lat start, where all voltage magnitudes are set to 1.0 p.u. and all voltage phase angles are set to 0.0 degrees [7]. It is also possible to use solutions from previous timesteps in dynamic simulations as initial values [8]. Another approach is to approximate PF solutions using simpler methods, such as fast-decoupled PF, to initialize the NR method [9]. Ensuring well-chosen initial values is particularly crucial for large-scale or stressed electricity grids, where numerical instability is more like-
ly to occur. Several studies have explored techniques to improve the initialization of the NR method. For example, integrating the NR method with gradi
arXiv:2511.20237v1 [eess.SY] 25 Nov 2025

2
ent descent and computational graphs has been proposed to enhance convergence and computational efficiency, as well as address challenges in large-scale grids [10]. Another example is the development of parallel PF solvers, which employ high-performance computing to improve the scalability and efficiency of PF analysis in extensive grids [11]. Furthermore, holomorphic theory offers a non-iterative alternative that guarantees convergence to the correct operation solution, thereby mitigating issues -
related to ill-conditioned systems and divergence associated with the traditional NR method [12]. Machine learning (ML) approaches have also been utilized to predict high-quality initial conditions based on historical data, thereby improving the convergence properties of the NR method [13]. For example, convolutional neural networks have been used to provide improved initial voltage magnitude and angle estimates, which are proven to significantly reduce solution iterations and time. Techniques, su-
ch as Semi-Definite Programming and Second-Order Cone relaxations, have also been used to convexify the non-convex PF analysis, providing feasible solutions that can serve as effective initializations for iterative methods, such as the NR method [14]. Adaptive convergence enhancement strategies have also been developed to improve the robustness of PF analysis in distribution networks [15], [16]. These strategies integrate mathematical techniques, such as the superposition theorem, graph theory, an-
d the Kron reduction method, to enhance the convergence properties of the NR method in unbalanced distribution networks. By incorporating these methods, NR can better handle the complexities and asymmetries inherent in distribution networks, leading to more reliable PF analysis. Despite these advancements, challenges persist in selecting initial values that ensure convergence across diverse operating conditions. For example, the effectiveness of adaptive strategies can be limited by the specific c-
haracteristics of the distribution network, such as the degree of imbalance, the presence of DERs, and varying load profiles [17]. Consequently, there is a pressing need for more adaptive and scalable approaches to selecting initial values that can enhance convergence. Reinforcement Learning (RL) [18] is a subfield of ML that enables an agent to learn through trial and error and make sequential decisions by interacting with an environment. In electricity grid applications, RL has emerged as a prom-
ising approach for addressing complex control problems, such as voltage regulation and PF optimization, especially in the presence of uncertainties and nonlinearities [19], [20]. In this regard, RL agents can also outperform traditional NR initialization techniques by dynamically adapting to real-time conditions using learned system-specific patterns and past experiences [21]. We propose an RL-based NR initialization, which helps steer the NR method toward regions of the solution space with a high-
er likelihood of convergence. Experimental results indicate that even under challenging initial conditions, the RL agent can refine the initial guess, allowing NR to converge reliably within a limited number of iterations. In doing so, the agent must determine an action at each RL timestep, specifically, choosing increments to adjust the voltage magnitudes and angles across all buses. A classical solver, e.g., NR, then evaluates the state of the power system
resulting from a single combination of these adjustments per RL timestep. Nevertheless, due to the combinatorial nature of voltage modifications, classical solvers can become computationally inefficient when evaluating state transitions [22].
Quantum computing (QC) is an emerging technology that enables new possibilities in simulation, combinatorial optimization, convex optimization, and ML approaches, among others [23]. Adiabatic Quantum Computing (AQC), particularly through quantum annealing, offers a promising solution for addressing the combinatorial complexity of RL-based initialization. AQC utilizes the adiabatic theorem to evolve a quantum system toward the ground state of a problem-specific Hamiltonian, effectively encoding and-
 solving complex optimization problems. AQC has been demonstrated to be computationally equivalent to the standard gate-based QC model, which underscores its theoretical robustness and versatility in tackling a wide range of computational challenges [24]. By formulating the voltage adjustment task as a quadratic unconstrained binary optimization (QUBO) problem, AQC can efficiently explore the high-dimensional action space to identify optimal or near-optimal voltage updates [23], [25], thereby impr-
oving scalability and accelerating convergence. Therefore, a novel quantum-enhanced RL environment update mechanism is proposed to strategically guide the initialization.
Experiments are conducted on 4- and 14-bus test systems. Classical experiments typically involve an ML framework that encompasses the implementation of the RL environment, as well as deep learning algorithms for training the agent. These classical algorithms are implemented in Python and executed on SURF high-performance computing (HPC) Cloud. A dedicated workspace, configured with 16 CPU cores and 64 GB of RAM, is used, running Ubuntu 22.04 Linux. Quantum and digital experiments comprise the algo-
rithm used to update the RL environment, implemented in Python and executed on D-Wave’s AdvantageTM system (QA) and Fujitsu’s QuantumInspired Integrated Optimization software (QIIO), respectively.
The results demonstrate the effectiveness and substantial potential of the proposed approach in both the Noisy Intermediate-Scale Quantum (NISQ) era and the future faulttolerant quantum (FTQ) era. Notably, by producing thousands of readouts per annealing cycle, the quantum/digital annealer identifies minimum-energy configurations that effectively steer the NR method toward fast and stable convergence. This synergy between RL and AQC enhances computational efficiency, increases robustness to handle-
 complexities in system operating conditions, and provides a scalable and adaptive alternative to conventional PF analysis methods. The proposed approach is particularly valuable for complex cases, such as ill-conditioned or heavily loaded grids, where the NR methods often suffer from slow convergence or failure to converge. The main contributions of this work are:
• Training of an RL agent to iteratively refine complex voltage adjustments by learning an optimal policy, thereby improving the initialization process and reducing the number of NR iterations required for convergence. • Demonstration of the scalability of the proposed RLbased initialization approach through experiments on a

3
larger test system, suggesting that the proposed approach holds strong potential for real-world applications. • Incorporation of quantum and quantum-inspired annealers into the RL environment update mechanism to efficiently obtain the state of the power system based on a problem-specific Hamiltonian formulated for PF analysis, enabling rapid exploration of multiple solution candidates through quantum parallelism.
II. POWER FLOW ANALYSIS
PF analysis aims to compute the unknown parameters for different bus categories in an electricity grid that satisfy power balance equations, which can be compactly expressed as a root-finding problem:
F (x) : S − V ◦ (YV)∗ = 0 (1)
where x is the state variables, which include unknown parameters, e.g., the complex voltages at load buses. Note that (1) is nonlinear and non-convex, and hence, there is no analytical solution to it. Therefore, PF analysis is generally performed using iterative numerical methods, such as the NR and Gauss-Seidel methods. These methods start with initial values for unknown parameters x(0) at it = 0. The iterative procedure to update x(it+1) can be written as:
x(it+1) = x(it) + w(it)∆x. (2)
where w(it) is typically a relaxation factor that controls how much of the computed update ∆x is applied at each iteration. NR is one of the most widely used iterative methods for PF analysis due to its quadratic convergence properties and robustness in well-conditioned cases. The method is based on a first-order Taylor series expansion of the PF equations around an operating point. The update step ∆x is computed, as:
∆x = −J −1(x(it))F (x(it)), (3)
where J(x) = ∂F (x)/∂x is the Jacobian matrix evaluated at the current iteration x(it). At each iteration, the Jacobian matrix is computed and used to solve for ∆x, which is then applied to update the state variables x, as calculated in (2). The process continues until convergence criteria, such as ||F (x)|| < ǫ, are met, where ǫ is a predefined tolerance.
III. MARKOV DECISION PROCESS (MDP)
MDP is the typical mathematical formulation for a standard RL framework, defined by the tuple [18]:
M = 〈S, A, R, P, γ, d0〉, (4)
where • S is the set of states representing all possible configurations of the environment, • A is the set of actions available to the agent, • R : S × A × S → R is the reward function that provides scalar feedback for taking action a in state s, • P : S × A → S defines the transition dynamics of the environment, i.e., a probability distribution over all next states given a state s and action a,
Fig. 1. A visualized representation of a Reinforcement Learning procedure. At each timestep t, the agent observes state st and performs action at in the environment. The environment then transitions with transition dynamics P into the next state st+1 and receives reward rt+1.
• γ ∈ (0, 1) is the discount factor that balances the trade-off between rewards of immediate and future timesteps, • d0 ∈ S represents the initial state distribution. In an MDP, the transition dynamics distribution P is Markovian, meaning that the next state given an action only depends on the current state. At each timestep during training, the RL agent observes the state of the environment, performs an action, and the environment transitions into the next state. The RL agent then receives feedba-
ck as a reward for taking that action, which guides the learning process to optimize a long-term objective that is accelerating NR convergence. A schematic RL procedure is visualized in Fig. 1. Through interaction with the environment on a diverse set of system conditions, the RL agent learns a decision-making strategy, called a policy π : S → A, s 7→ π(a|s), which defines a probability distribution over actions given a state. An optimal policy generalizes well to unseen scenarios, thus enhancing -
the efficiency of PF analysis even in complex or highly stressed grids. The main objective is to find such a policy that maximizes the expected cumulative discounted reward over time:
J (π) = Eτ∼π
[∞
∑
t=0
γtR(st, at)
]
, (5)
where τ = {s0, a0, . . . st, at, . . . } ∀s ∈ S, a ∈ A is defined as a trajectory sampled from policy π. Note that throughout this text, a conventional notation for the reward at timestep t is used, denoted as rt, which is equivalent to R(st, at) in (5). The optimal policy can then be found by maximizing the objective over the entire set of policies:
π∗ = arg mπax J(π). (6)
To achieve an optimal policy, one can define state-value and state-action-value functions for a policy π, Vπ(s) and Qπ(s, a), which estimate the expected future reward starting from a given state s or state-action pair (s, a), respectively:
Vπ(s) = Ea∼π,s′∼P [R(s, a) + γVπ(s′)] . (7)
Qπ(s, a) = Es′∼P [R(s, a) + γEa′∼πQπ(s′, a′)] . (8)
(7) and (8) are referred to as the Bellman Equations for Vπ and Qπ, respectively. However, these equations assume that

4
the transition dynamics P are known, which oftentimes is not the case in RL. Therefore, most RL methods rely on an agent collecting experiences, i.e., trajectories τ ∼ π, by interacting with the environment. Leveraging these experiences, the value functions Vπ and Qπ can be learned with value-based methods. Alternatively, a policy can also be directly learned, which is done by policybased methods. Current state-of-the-art RL algorithms learn both the value functions and a policy, which is referred-
 to as actor-critic [26].
IV. PROXIMAL POLICY OPTIMIZATION (PPO)
PPO is a widely used actor-critic algorithm in modern deep RL that aims to improve learning stability and efficiency by constraining policy updates while maximizing cumulative rewards [27]. Here, deep RL refers to approaches that use neural networks parametrized by a set of weights to approximate value functions or policies. PPO combines the strengths of policy-gradient methods with clipped surrogate objectives to prevent large, destabilizing updates, thus offering a practical balance between expl-
oration and exploitation. The PPO model consists of the following components:
• Policy Networkis a parameterized policy πφ, represented by a NN, where φ refers to the NN parameters. The policy network defines a probability distribution over actions given a state and is mathematically given as:
Policy = πφ(at|st) (9)
Here, st represents the state at timestep t, and the policy πφ determines the action at to be taken at that state. In the context of PF analysis, the policy network takes
the current state st = [V~ t, θ~t, kt] as input and outputs either deterministic actions or parameters of a probability distribution (e.g., mean and standard deviation for Gaussian policies in continuous action spaces). This structure enables efficient handling of high-dimensional, continuous control tasks. During training, PPO updates the policy network using stochastic gradient ascent on a clipped surrogate objective, preventing policy updates from being too large. The direction and magnitude of-
 each update are guided by an advantage function, which quantifies the improvement of an action over the average action under the current policy. • Value Network estimates the expected return from a given state under the current policy. It provides a baseline for computing the advantage function. In mathematical terms, the value function V π
φ′ (s) is defined as:
Vπ
φ′ (s) = Eπ
[T ∑
t=0
γtrt | s0 = s
]
(10)
where φ′ are the parameters of the parametrized NN that approximates the value function and T is the episode length. This network is also typically implemented as a deep NN and trained using a value loss, such as mean squared error between predicted and actual returns. The value network
Algorithm 1 Learning procedure of the RL agent at each timestep.
1: Initialize πφ and V π
φ′
2: while training do 3: Collect experience in the environment using πφ 4: Compute advantage estimates At 5: Update πφ 6: Update V π
φ′
7: end while
~
∠
Fig. 2. Schematic representation of the 4-bus test system. The system includes a slack bus and three load buses.
plays a crucial role in reducing variance in policy updates, improving training stability, and facilitating better longterm decision-making. • Learning Procedure refers to the iterative interactions with the environment, as outlined in Algorithm 1, through which the PPO agent improves its policy. The policy and value networks are trained jointly using mini-batch gradient updates over trajectories collected during agentenvironment interaction. The PPO loss function includes both the clipped surroga-
te objective for the policy and a value loss term, optionally regularized by an entropy bonus to encourage exploration. This dual-network architecture enables the agent to both evaluate the quality of visited states (via the value network) and refine its behavior over time (via the policy network), making PPO a powerful framework for continuous control tasks such as PF initialization.
V. RESULTS
A. RL for accelerating Newton-Raphson convergence
For a standard 4-bus test system [28], consisting of one slack bus and three load buses (see Fig. 2), the basin of attraction and regions of initial voltage magnitudes p.u. and voltage phase angles degrees at load buses are illustrated in Fig. 3. For each subplot, the initial values of the corresponding bus are varied while the initial values for the other buses are kept fixed at 1∠0 (p.u.). Accordingly, improper initialization of complex voltages in certain regions can lead to slow convergence of-
 the NR method or even divergence. To mitigate this risk, we train an RL agent to adjust the initial complex voltage estimates, steering them toward regions that ensure NR convergence while minimizing the number of iterations required for PF analysis. Experiments for the 4-bus system are implemented in Python and executed on SURF HPC Cloud. Algorithm 2 represents an RL episode for selecting complex voltage adjustments following a policy. An episode in RL refers to one complete run of the agent in -
the environment, from the initial state until the agent reaches a terminal state or until the maximum episode length T is reached. In the case of

5
NR Iterations [-]
3 [degrees]
V3 [p.u.]
75
25 50
25
20
15
10
5
-75 -50 -25 0 2 [degrees]
V2 [p.u.]
75
25 50
-75 -50 -25 0 1 [degrees]
V1 [p.u.]
75
25 50
-75 -50 -25 0
0
0
0.5
1
1.5
2
Fig. 3. Basin of attraction for initial values at load buses for the 4-bus test system. Each subplot shows the number of NR iterations (with the heatmap) needed to perform PF analysis for the given voltage magnitude (p.u.) and phase angle (degrees).
Algorithm 2 RL episode for selecting complex voltage adjustments following a policy π.
1: Initialize Environment from test case data, policy π, kmax, T, t ← 0
2: Get initial state s0 = [V~ 0, θ~0, k0] 3: while t < T do
4: Based on the current state st, the agent selects action:
5: at ∼ π = [∆~μt, ∆~ωt]
6: Perform environment update using action at 7: Get new state st+1, reward rt+1 8: if kt ≤ kmax then 9: Episode done 10: break 11: end if
12: t ← t + 1
13: st ← st+1 14: end while
15: Episode terminated
the latter, the episode is terminated without the agent reaching a terminal state. Each step refers to one interaction between the agent and the environment. At each step, the agent selects an action. Next, the environment processes that action, and transitions into the next state. Then, the agent receives a new state and reward. The timestep is simply the interval between two consecutive steps. Over the course of an episode, the agent takes multiple timesteps to reach a solution. The 4-bus test s-
ystem is considered for the experiment, which is characterized by the following MDP parameters:
• The initial state distribution d0 consists of initial voltage magnitudes and voltage phase angles at load buses i ∈ {1, 2, 3}, respectively denoted as Vi0 and θi0, where
V~ 0 ∈ (0, 2] p.u. and θ~0 ∈ (−90, 90] degrees are drawn randomly from a uniform distribution. Also, d0 includes the number of NR iterations required to converge k0 and is obtained by performing PF analysis using NR. The admittance matrix Y = G + jB is available in the Power System Test Cases library1. All other initial constant values further characterizing the initial state distribution are shown in Table I. • The state st at timestep t ∈ {0, ..., T } is represented
as a vector st = [V~ t, θ~t, kt] containing the voltage
1https://pandapower.readthedocs.io/en/v2.2.2/networks/power system test cases.html
TABLE I INITIAL CONSTANT VALUES FOR THE slack BUS AND load BUSES i FOR THE GIVEN SCENARIO BASED ON THE 4-BUS TEST SYSTEM.
Parameter Value Slack bus voltage 1.0∠0.0 Active power demand (P~ D) [1.7, 2.0, 0.8] Reactive power demand (Q~ D) [1.05, 1.24, 0.49]
magnitude V~ t ∈ (0, 2] p.u., voltage phase angle θ~t ∈ (−90, 90] degrees at load buses, and the number of NR iterations required to converge kt ∈ [0, 50] in the current timestep t. If NR requires more than 50 iterations or diverges, kt is set to 50.
• The actions consist of a vector at = [∆~μt, ∆~ωt] for load buses, where ∆μit ∈ (−0.5, 0.5] p.u. and ∆ωit ∈ (−0.25, 0.25] p.u. represent the complex voltage adjustments in rectangular coordinates at timestep t and bus i, respectively. • The reward rt is defined solely by a penalizing term
based on the norm of the residual vector [∆~P t, ∆~Qt] for load buses, where ∆Pit and ∆Qit are the active and reactive power mismatches for bus i resulting from applying the updated initial values in PF analysis, rt =
−||[∆~P t, ∆~Qt]||, where rt refers to R(st, at) in (5).
We design the RL agent to learn a policy π that guides Vi0 and θi0 at load buses, such that NR converges within kmax = 3 iterations, where kmax is the maximum number of allowed iterations. The PandaPower Python package [29] is used to perform NR. During training, each episode consists of a maximum of T = 20 timesteps, after which the environment terminates even if convergence is not achieved. To optimize the policy, we employ PPO [27] using the implementation from Stable-Baselines3 [30] and train -
the RL agent for 1 × 105 timesteps. The hyperparameters used for training are summarized in Table II. Note that these hyperparameters are selected based on a systematic sensitivity analysis2, where:
• The learning rate is searched over the interval [10−6, 10−2].
• The discount factor is selected from the range [0.9, 1] with a step size of 0.01.
2An exhaustive search across 40 unique hyperparameter combinations is conducted using the Optuna Python package [31]. The hyperparameters are sampled from predefined ranges with fixed step sizes.

6
TABLE II HYPERPARAMETER SETTINGS FOR TRAINING THE PPO AGENT BASED ON THE 4-BUS TEST SYSTEM.
Hyperparameter Value Learning rate (α) 0.7 × 10−4 Discount factor (γ) 0.9 Number of steps 2048 Batch size 64 Number of epochs 10 Clipping range 0.2 Entropy coefficient 0.0 Policy Network Architecture [32, 32, 32] Value Network Architecture [32, 32, 32] Activation Function ReLU
Fig. 4. Training trajectory of the RL agent for the 4-bus test system. The graph shows the evolution of episode reward and the number of NR iterations over 1 × 105 timesteps.
• The entropy coefficient is varied within [0, 1] with a step size of 0.1. • The policy and value networks are evaluated for architectures with hidden layer counts in the range [1, 10]. • The number of neurons per hidden layer is selected from the set {16, 32, 64, 128}.
Fig. 4 illustrates the evolution of episode reward and the number of NR iterations over RL timesteps during training for the 4-bus test system. As training progresses, the episode reward increases while the number of NR iterations decreases.
B. Scalability of RL for accelerating NR convergence
To assess the scalability of the proposed approach, we extend our investigation to a 14-bus test system, consisting of one slack bus, four PV buses, and nine load buses. Scalability here refers to the ability to maintain or improve performance as the size and complexity of the test system increase. Experiments for the 14-bus system are conducted on SURF HPC Cloud within the same workspace as for the 4-bus, and the agent is trained for 2.5 × 104 timesteps. Similar to the 4-bus test system, kmax = 3-
 and each episode consists of a maximum of T = 20 timesteps. The initial constant values for the given scenario, based on which the experiments are performed, are summarised in Table III. The hyperparameters used for training are summarized in Table IV. These hyperparameters are chosen based on a systematic sensitivity analysis, using the same ranges and approach as applied to the 4-bus test system. Here, the RL agent is trained to learn voltage adjustments that accelerate NR convergence from a br-
oader and more complex initial state space. Despite the increased number
NR Iterations [-]
16
24
20
12
Timestep [-]
-400
0
Episode Reward [-]
0 5k 10k 15k 20k 25k
-200
-600
Fig. 5. Training trajectory of the RL agent for the 14-bus test system. The graph shows the evolution of episode reward and (b) the number of NR iterations over 2.5 × 104 timesteps.
of buses and higher-dimensional state and action spaces, the agent successfully learns a policy that improves NR convergence, as shown in Fig. 5. Specifically, the training trajectory demonstrates a steady increase in cumulative reward rt alongside a reduction in the average number of NR iterations kt required for convergence. This finding suggests that the agent effectively generalizes the learned strategy from smaller to larger systems and adapts to the increased complexity without a significant-
 loss in performance.
C. Quantum-enhanced RL environment update mechanism
The trained RL agent successfully shifts initial complex voltages to regions requiring fewer NR iterations. However, one remaining challenge is to update the state s more efficiently based on the agent’s selected actions a. Given the combinatorial nature of possible complex voltage adjustments, we extend the experiment to further accelerate NR convergence by introducing a quantum-enhanced RL environment update mechanism. Specifically, the environment update is based on a problem Hamiltonian define-
d for a combinatorial reformulation of PF equations. We then use Ising machines to determine optimal voltage updates within the environment via quantum/digital annealing. Fig. 6 shows the episode structure, state transitions, and quantum-enhanced RL environment updates. The agent interacts with the environment through key functions, including reset, action, state, and reward, while quantum/digital annealing refines complex voltage adjustments to further accelerate the convergence of NR. The pseudo-
-code of the proposed update mechanism, i.e., the Environment Update block in Fig. 6, can be found in our previous study [32]. Accordingly, the power system data
is first initialized, including load power demands, P~ D and
Q~ D, generation power outputs P~ G, and the admittance matrix Y. The RL agent then provides the action variables, which correspond to complex voltage adjustments in rectangular
coordinates, ∆~μ and ∆~ω. The voltage magnitudes V~ and phase
angles θ~ at load buses are extracted from the state st and converted to rectangular coordinates, yielding μ = V cos(θ) and ω = V sin(θ).
The base values of ~μ0 and ~ω0 are stored. A problem Hamiltonian, H(~x), is then formulated using a QUBO representation. This Hamiltonian encodes the combinatorial PF formulation that determines optimal state updates. In doing so,

7
TABLE III INITIAL CONSTANT VALUES FOR THE slack BUS AND PV AND load BUSES i FOR THE GIVEN SCENARIO BASED ON THE 14-BUS TEST SYSTEM.
Parameter Value Slack bus voltage 1.0∠0.0
Active power generation (P~ G) [ 0, 0.4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ] Active power demand (P~ D) [ 0, 0, 0, 0.478, 0.076, 0, 0, 0, 0.295, 0.09, 0.035, 0.061, 0.135, 0.149 ] Reactive power demand (Q~ D) [ 0, 0, 0, 0.039, 0.016, 0, 0, 0, 0.166, 0.058, 0.018, 0.016, 0.058, 0.05 ]
TABLE IV HYPERPARAMETER SETTINGS FOR TRAINING THE PPO AGENT BASED ON THE 14-BUS TEST SYSTEM.
Hyperparameter Value Learning rate (α) 0.5 × 10−4 Discount factor (γ) 0.9 Number of steps 2048 Batch size 64 Number of epochs 10 Clipping range 0.2 Entropy coefficient 0.0 Policy Network Architecture [64, 64, 64] Value Network Architecture [64, 64, 64] Activation Function ReLU
Initialize
PD, D, G, Y,
T, m
Define
s
s s S, A
Episode
Reset
N Yes
Reward
S
E A
Fig. 6. Schematic of the quantum-enhanced RL update mechanism for PF analysis based on the QUBO representation. The diagram depicts the episode structure, state transitions, and quantum-enhanced RL environment updates. Key functions, i.e., reset, action, state, and reward, govern the agent’s interaction, while quantum annealing refines voltage adjustments to accelerate the convergence of NR.
PF equations can be expressed as separated active and reactive components, which yields:
P~ − P~ G + P~ D = 0, (11a)
Q~ − ~QG + ~QD = 0, (11b)
where P~ is the vector of net active power injections and Q~ is the vector of net reactive power injections. The vectors
of generated active power P~ G, generated reactive power Q~ G,
consumed active power P~ D, and consumed reactive power Q~ D are assumed to be known. To convert the problem into a combinatorial optimization problem suitable for Ising machines, we express the complex voltages in rectangular coordinates, yielding:
Pi =
N
∑
k=1
μiGikμk + ωiGikωk + ωiBikμk − μiBikωk,
(12a)
Qi =
N
∑
k=1
ωiGikμk − μiGikωk − μiBikμk − ωiBikωk,
(12b)
where Pi and Qi are the net active power and the net reactive power at bus i, respectively. Here, we discretize μi and ωi to accommodate binary decision variables in the formulations:
μi = μi0 + ∆μi(xμ
i,0 − xμ
i,1), (13a)
ωi = ω0
i + ∆ωi(xω
i,0 − xω
i,1), (13b)
where x{μ,ω}
i,{0,1} ∈ {0, 1} are binary decision variables indicating
whether the base values μi0 and ωi0 are increased, decreased, or left unchanged. Replacing μi and ωi in (12) with (13) yields extended formulations for Pi and Qi, respectively. Detailed information about the QUBO representation can be found in [32]. To solve (11) using Ising machines, the objective is to minimize the squared sum of all terms, expressed as:
min
x∈{0,1}4N H (~x)
with
H(~x) =
N
∑
i=1
(Pi − P G
i +PD
i )2 + (Qi − QG
i + QD
i )2.
(14)
In this work, we utilize two Ising machines, i.e., QA and QIIO, with a predefined number of reads nread. Note that expanding the terms in (14) results in a fourth-order polynomial in binary variables. While QIIO can natively accommodate fourth-order terms, QA can only handle up to quadratic terms. We use the Python package PyQUBO3 to construct the QUBO representation and to ensure that fourth-order terms in (14) are effectively reduced to quadratic ones through the introduction of auxiliary binary-
 variables. Further details can be found in [32]. In addition, QIIO is fully connected, whereas minor
3https://pyqubo.readthedocs.io

8
Fig. 7. Training trajectory of the QRL agent for the 4-bus test system. The graph shows the evolution of episode reward and the number of NR iterations over 1 × 105 timesteps. The update mechanism is performed using QIIO.
embedding is required to map the problem onto QA. After solving the optimization problem (14), the obtained bitstring ~x is used to update ~μ and ~ω in accordance with (13), which ultimately yield the next state st+1. The impact of the proposed update mechanism is evaluated by comparing the performance of the RL agent trained with the proposed quantum-enhanced update mechanism against one trained without it (see Fig. 4) for the 4-bus test system for the given load scenario specified in Table I. Th-
e update mechanism is performed using QIIO. The evolution of episode reward and the number of NR iterations over 1 × 105 timesteps are shown in Fig. 7. It can be seen that the quantum-enhanced RL (QRL) agent achieves a higher maximum episode reward after 1×105 compared to that obtained by the RL agent (see Fig. 4). Fig. 8 further visualizes a comparative analysis of the performance of classical RL and QRL agents in accelerating NR convergence for PF analysis based on the 4-bus test system across f-
ive difficult, challenging scenarios. These scenarios are selected from regions that require a large number of NT iterations to converge, as shown in Fig. 3, and are excluded from the training. The update mechanism is performed using QIIO. While the classical RL agent still reduces the NR iterations compared to the initial conditions for the presented challenging scenarios, it still requires multiple RL timesteps to optimize the complex voltage adjustments, with the final NR iteration count rangin-
g between 8 and 19. In contrast, QRL achieves convergence with as few as 3 to 7 NR iterations across all scenarios, often requiring only a single RL timestep for the complex voltage updates. This finding indicates that QRL is more effective in finding optimal complex voltage adjustments and facilitates faster convergence. Furthermore, the final complex voltages obtained by the QRL agent exhibit a more balanced and physically meaningful distribution than those obtained by the classical RL agent.
D. Quantum Hardware Implementation
To further validate the applicability of the proposed quantum-enhanced RL environment update mechanism in practical settings, we extend our study by performing additional experiments using QA for the 4-bus test system. Due to the high computational cost and access limitations associated with real quantum hardware, we restrict these experiments to a maximum of 2.5 × 104 timesteps. The results obtained from the QA implementation are then compared to those from
classical RL and the QRL trained using QIIO, all within the same number of timesteps. Fig. 9 shows the evolution of episode reward and the number of NR iterations over 2.5×104 timesteps during the training of the QRL agent, where the quantum experiments are performed using QA. The maximum episode rewards obtained by the QRL agents trained using QIIO and QA are comparable, and both exceed that of the classical RL agent by more than a factor of five (see Figs. 4 and 7). These findings suggest that t-
he proposed quantum-enhanced RL environment update mechanism improves the performance of RL agents. QA performs comparably to QIIO in accelerating NR convergence, with QA slightly outperforming QIIO within the evaluated timesteps. Therefore, provided the quantum annealer can accommodate the required number of binary variables and the problem graph can be successfully embedded into the hardware’s connectivity graph, Ising machines can deliver competitive performance. This observation aligns with pr-
ior studies comparing current quantum and quantum-inspired hardware for electricity grid applications [32].
VI. DISCUSSION
When it comes to advanced computational technologies, two distinct perspectives emerge. One group of researchers and practitioners advocates their transformative potential, while another remains skeptical of their reliability and real-world applicability. In this study, we present an example that integrates several emerging techniques, i.e., QC, AI, and optimization, to address a long-standing challenge in numerical analysis. Interestingly, the final solution is ultimately obtained by a well-estab-
lished and trusted classical solver, thus bridging the gap between innovative and conservative approaches, but also making this study appealing to both communities. Our findings demonstrate that deep RL and its quantumenhanced equivalent can effectively optimize iteration counts of the NR method, which is one of the most widely used numerical algorithms for problems lacking analytical solutions. It is well-known that the NR method can fail to converge under certain conditions, even when the size o-
f the system of equations is not particularly large. A common cause of such failure is poor initialization of the solver’s starting guesses. Yet, even at the time of writing, decision-makers in industry often exhibit resistance to adopting advanced computational techniques, e.g., AI and QC, for real-world problems. Among NR’s many applications, PF analysis is a critical task in electricity grid planning and operation. A classical NR solver can diverge under poor initialization or extreme operating-
 scenarios, such as high demand or high levels of renewable energy penetration, even when there exists a physical solution to the problem. In this context, we propose optimizing the initialization of NR to avoid divergence using a combination of QC, AL, and optimization, where the final solution is obtained from classical NR solvers. The proposed quantum-enhanced RL approach to accelerate NR convergence is, however, generalizable to other problems where NR or similar numerical solvers are employed-
. For example, our previous work has shown that the combinatorial way of modeling

9
Fig. 8. Comparison of classical RL and QRL for accelerating NR convergence in PF analysis for the 4-bus test system across five experiments. The initial and final states, at load buses, and the number of NR iterations, are highlighted. The RL and QRL agents are trained over 1 × 105 timesteps. The update mechanism is performed using QIIO.
existing models can be applied to any system of equations with continuous variables, provided that the objective can be formulated as a root-finding problem [25].
VII. CONCLUSION
We show that while classical NR solvers struggle with convergence issues under poor initial conditions or complex electricity grid configurations, the proposed classical RL approach enhances NR initializations and mitigates these limitations. In addition, the results confirm the approach’s scalability,
as performance gains are maintained when the classical RL agent is trained for a larger test system. A key innovation is the integration of AQC into the RL environment update mechanism. This integration enables efficient exploration of the combinatorially large action space through a QUBO formulation by offloading the combinatorial optimization task to an Ising machine. The RL environment update mechanism experiments are performed using both quantum and quantuminspired hardware. The proposed QRL a-
pproach significantly reduces the computation overhead and results in faster con

10
NR Iterations [-]
20
40
3
10
Timestep [-]
-100
0
Episode Reward [-]
0 5k 10k 15k 20k 25k
-50
-150
Fig. 9. Training trajectory of the QRL agent for the 4-bus test system. The graph shows the evolution of episode reward and the number of NR iterations over 2.5 × 104 timesteps. The update mechanism is performed using QA.
vergence, fewer NR iterations, and greater robustness across diverse operating scenarios compared to classical RL.
ACKNOWLEDGMENTS
This work is part of the DATALESs project, with project number 482.20.602, jointly financed by the Netherlands Organization for Scientific Research (NWO) and the National Natural Science Foundation of China (NSFC). This work utilized the Dutch national e-infrastructure, supported by the SURF Cooperative, under grant number EINF-6569. The authors also like to thank Fujitsu Technology Solutions for providing access to the QIIO software4 and, in particular, to Matthieu Parizy for his support. Further-
more, the authors acknowledge TNO for the access to TNO’s Quantum Application Lab Facility, with special thanks to Frank Phillipson for his assistance.
REFERENCES
[1] R. Cossent, L. Olmos, T. Go ́mez, C. Mateo, and P. Fr ́ıas, “Distribution network costs under different penetration levels of distributed generation,” European Transactions on Electrical Power, vol. 21, pp. 18691888, 9 2011. [2] R. Delabays, S. Jafarpour, and F. Bullo, “Multistability and anomalies in oscillator models of lossy power grids,” Nature Communications, vol. 13, p. 5238, 9 2022. [3] F. Milano, “Continuous newton’s method for power flow analysis,” IEEE Transactions on Power Systems, -
vol. 24, no. 1, pp. 50–57, 2009.
[4] L. N. de Oliveira, F. D. Freitas, and N. Martins, “A modal-based initial estimate for the newton solution of ill-conditioned large-scale power flow problems,” IEEE Transactions on Power Systems, vol. 38, no. 5, pp. 4962–4965, 2023. [5] M. Irving and M. Sterling, “Efficient newton-raphson algorithm for load-flow calculation in transmission and distribution networks,” IEE Proceedings C Generation, Transmission and Distribution, vol. 134, p. 325, 1987. [6] R. Wang, G. Zhang, W. Xiong, B. Wang, W.-
 Wei, and M. Wei, “Illconditioned power flow calculation in urban rail traction power supply system,” IEEE Transactions on Transportation Electrification, vol. 11, no. 3, pp. 8462–8473, 2025. [7] T. Alharbi, M. Tostado-Ve ́liz, O. Alrumayh, and F. Jurado, “On various high-order newton-like power flow methods for well and ill-conditioned cases,” Mathematics, vol. 9, p. 2019, 8 2021. [8] M. Abdel-Akher, A. Selim, and M. M. Aly, “Initialised load-flow analysis based on lagrange polynomial approximati-
on for efficient quasi-static time-series simulation,” IET Generation, Transmission & Distribution, vol. 9, pp. 2768–2774, 12 2015. [9] C. C. de Oliveira, A. B. Neto, D. A. Alves, C. R. Minussi, and C. A. Castro, “Alternative current injection newton and fast decoupled power flow,” Energies, vol. 16, p. 2548, 3 2023. [10] M. Barati, “Enhancing acpf analysis: Integrating newton-raphson method with gradient descent and computational graphs,” arXiv:2406.10390, 6 2024.
4 https://en- portal.research.global.fujitsu.com/kozuchi
[11] B. Wang, J. Bachan, and C. Chan, “Exagridpf: A parallel power flow solver for transmission and unbalanced distribution systems,” in 2018 IEEE Power & Energy Society Innovative Smart Grid Technologies Conference (ISGT), 2018, pp. 1–5.
[12] A. Trias, “The holomorphic embedding load flow method,” in 2012 IEEE Power and Energy Society General Meeting, 2012, pp. 1–8.
[13] S. N. Okhuegbe, A. A. Ademola, and Y. Liu, “A machine learning initializer for newton-raphson ac power flow convergence,” in 2024 IEEE Texas Power and Energy Conference (TPEC), 2024, pp. 1–6.
[14] D. K. Molzahn and I. A. Hiskens, “Convex relaxations of optimal power flow problems: An illustrative example,” IEEE Transactions on Circuits and Systems I: Regular Papers, vol. 63, no. 5, pp. 650–660, 2016. [15] L. A. Kraft and G. T. Heydt, “Adaptive acceleration factors for the newton-raphson power flow study,” Electric Machines & Power Systems, vol. 11, pp. 337–346, 1 1986. [16] N.-C. Yang and C.-H. Tseng, “Adaptive convergence enhancement strategies for newton-raphson power flow solutions -
in distribution networks,” IET Generation, Transmission & Distribution, vol. 18, pp. 23392352, 7 2024. [17] J. Avile ́s, D. Guillen, L. Ibarra, and J. D. Da ́valos-Soto, “Reconfiguration of active distribution networks as a means to address generation and consumption dynamic variability,” IET Generation, Transmission & Distribution, vol. 18, pp. 3120–3137, 10 2024.
[18] R. S. Sutton and A. G. Barto, Reinforcement Learning: An Introduction, 2nd ed. MIT Press, 2018. [19] C. Ma, A. Li, Y. Du, H. Dong, and Y. Yang, “Efficient and scalable reinforcement learning for large-scale network control,” Nature Machine Intelligence, pp. 1006–1020, 9 2024. [20] Y. Wang, X. Yu, and W. Zhang, “An improved reinforcement learningbased differential evolution algorithm for combined economic and emission dispatch problems,” Engineering Applications of Artificial Intelligence, vol-
. 140, p. 109709, 1 2025. [21] Q. Yang, G. Wang, A. Sadeghi, G. B. Giannakis, and J. Sun, “Twotimescale voltage control in distribution grids using deep reinforcement learning,” IEEE Transactions on Smart Grid, vol. 11, no. 3, pp. 23132323, 2020. [22] F. Chicano, G. Luque, Z. A. Dahi, and R. Gil-Merino, “Combinatorial optimization with quantum computers,” Engineering Optimization, vol. 57, pp. 208–233, 1 2025. [23] T. Morstyn and X. Wang, “Opportunities for quantum computing within net-zero power -
system optimization,” Joule, vol. 8, pp. 1619–1640, 6 2024. [24] R. Barends, A. Shabani, L. Lamata, J. Kelly, A. Mezzacapo, U. L. Heras, R. Babbush, A. G. Fowler, B. Campbell, Y. Chen, Z. Chen, B. Chiaro, A. Dunsworth, E. Jeffrey, E. Lucero, A. Megrant, J. Y. Mutus, M. Neeley, C. Neill, P. J. J. O’Malley, C. Quintana, P. Roushan, D. Sank, A. Vainsencher, J. Wenner, T. C. White, E. Solano, H. Neven, and J. M. Martinis, “Digitized adiabatic quantum computing with a superconducting circuit,” Nature, -
vol. 534, pp. 222–226, 6 2016. [25] Z. Kaseb, M. Moller, P. Palensky, and P. P. Vergara, “Solving power system problems using adiabatic quantum computing,” arXiv:2504.06458, 4 2025. [26] V. Konda and J. Tsitsiklis, “Actor-critic algorithms,” in Advances in Neural Information Processing Systems, S. Solla, T. Leen, and K. Mu ̈ller, Eds., vol. 12. MIT Press, 1999. [27] J. Schulman, F. Wolski, P. Dhariwal, A. Radford, and O. Klimov, “Proximal policy optimization algorithms,” arXiv:1707.06347, 2017. [2-
8] J. J. Grainger and W. D. Stevenson Jr., Power System Analysis. McGraw-Hill, Inc., 1994. [29] L. Thurner, A. Scheidler, F. Schafer, J.-H. Menke, J. Dollichon, F. Meier, S. Meinecke, and M. Braun, “Pandapower–an open-source python tool for convenient modeling, analysis, and optimization of electric power systems,” IEEE Transactions on Power Systems, vol. 33, pp. 6510–6521, 11 2018. [30] A. Raffin, A. Hill, A. Gleave, A. Kanervisto, M. Ernestus, and N. Dormann, “Stable-baselines3: reliable reinfor-
cement learning implementations,” The Journal of Machine Learning Research, vol. 22, no. 1, Jan. 2021. [31] T. Akiba, S. Sano, T. Yanase, T. Ohta, and M. Koyama, “Optuna: A next-generation hyperparameter optimization framework,” in The 25th ACM SIGKDD International Conference on Knowledge Discovery & Data Mining, 2019.
[32] Z. Kaseb, M. Mo ̈ller, P. P. Vergara, and P. Palensky, “Power flow analysis using quantum and digital annealers: a discrete combinatorial optimization approach,” Scientific Reports, vol. 14, p. 23216, 10 2024.

---

## Processing Information

- **Processing Library:** Zotero PDFWorker
- **Processing Date:** 2026-02-10T18:16:16.297Z
- **Text Length:** 50471 characters
- **Success:** Text extraction completed
- **PDF Library Used:** Zotero PDFWorker
- **Pages Processed:** 10 of 10
