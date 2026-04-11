# PDF Document: Punzo et al. - 2025 - Decentralized Shepherding of Non-Cohesive Swarms Through Cluttered Environments via Deep Reinforceme.pdf

**File Path:** Punzo et al. - 2025 - Decentralized Shepherding of Non-Cohesive Swarms Through Cluttered Environments via Deep Reinforceme.pdf

**Processed Date:** 2026-02-10T18:17:45.113Z

**File Size:** 1125.77 KB

**Total Pages:** 7

**Extracted Pages:** 7

**PDF Library:** Zotero PDFWorker

**Attachment Item ID:** 3261

**Title:** Decentralized Shepherding of Non-Cohesive Swarms Through Cluttered Environments via Deep Reinforcement Learning

**Collection:** Large Files > Random Papers

---

## Extracted Text Content

Decentralized Shepherding of Non-Cohesive Swarms Through Cluttered
Environments via Deep Reinforcement Learning
Cristiana Punzo1, Italo Napolitano1,†, Cinzia Tomaselli1,†, Mario di Bernardo1,2∗
Abstract— This paper investigates decentralized shepherding in cluttered environments, where a limited number of herders must guide a larger group of non-cohesive, diffusive targets toward a goal region in the presence of static obstacles. A hierarchical control architecture is proposed, integrating a highlevel target assignment rule, where each herder is paired with a selected target, with a learning-based low-level driving module that enables effective steering of the assigned target. The lowlev-
el policy is trained in a one-herder–one-target scenario with a rectangular obstacle using Proximal Policy Optimization and then directly extended to multi-agent settings with multiple obstacles without requiring retraining. Numerical simulations demonstrate smooth, collision-free trajectories and consistent convergence to the goal region, highlighting the potential of reinforcement learning for scalable, model-free shepherding in complex environments.
I. INTRODUCTION
The shepherding control problem, where a small number of controlled agents (herders) must guide a larger group of diffusive agents (targets) toward a goal region, is fundamental to applications ranging from emergency evacuation and oil spill containment to drone defense and search-and-rescue operations [1]–[5]. Inspired by natural phenomena like sheepdogs herding livestock through gates and around barriers, this problem provides a compelling framework for studying indirect control in heterogeneous-
 multi-agent systems where coordination must be achieved without centralized communication or explicit cooperation from the targets. Classical shepherding formulations assume targets exhibit cohesive flocking behavior through local attraction, repulsion, and alignment forces, enabling herders to treat the group as a single controllable entity [6]–[8]. These approaches have provided valuable theoretical insights and work well in controlled settings. However, real-world scenarios systematically viol-
ate this cohesion assumption. Evacuating crowds scatter in panic rather than maintaining group coherence, contaminated particles diffuse independently following stochastic dynamics, and hostile drones actively
The authors acknowledge support from the Italian Ministry of University and Research (MUR) under project PRIN 2022 “Machine-learning based control of complex multi-agent systems for search and rescue operations in natural disasters (MENTOR).” 1Cristiana Punzo, Italo Napolitano, Cinzia Tomaselli and Mario di Bernardo are with the Modeling and Engineering Risk and Complexity Department, Scuola Superiore Meridionale, via Mezzocannone 4, 80138, Naples, Italy (email: cr.punzo@studenti.unina.it, i.napol-
itano@ssmeridionale.it, c.tomaselli@ssmeridionale.it, mario.dibernardo@unina.it) 2Mario di Bernardo is with the Department of Information Technology and Electrical Engineering, University of Naples Federico II, Naples, Italy. † These authors contributed equally to this work. * Corresponding author
evade capture using unpredictable maneuvers. Moreover, real environments contain obstacles such as walls, debris fields, and restricted zones that not only constrain motion paths but also occlude sensors, fragment target groups into disconnected subpopulations, and force indirect routing strategies that must account for future target dispersal. Current methods fail when confronting these dual challenges of non-cohesive targets and environmental constraints, severely limiting their deployment in th-
e safety-critical applications where autonomous shepherding capabilities are most urgently needed. Recent advances have begun addressing non-cohesive targets using hierarchical control architectures, where highlevel controllers assign specific targets to individual herders while low-level controllers determine the optimal steering actions [9]–[15]. These methods successfully demonstrate that non-cohesive populations can be controlled through careful coordination of individual influences. Yet they -
remain confined to idealized obstacle-free environments, leaving unresolved how such strategies would perform in cluttered spaces. Meanwhile, obstacle-aware shepherding methods have been developed to enable navigation around barriers, leveraging techniques such as geometric projections, repulsive potential fields, and control barrier functions [16]–[18]. Control strategies based on repulsive potential fields applied to both target and herder dynamics offer lightweight, fully local, and reactive co-
ntrol, but are susceptible to deadlocks and local minima. Conversely, approaches combining geometric projections and control barrier functions are generally integrated with global path-planning modules. As in other methods primarily relying on global planning [19], this integration introduces centralized computation requirements. To the best of our knowledge, all existing approaches assume cohesive target behavior–a condition rarely satisfied in realistic or emergency scenarios. Learning-based app-
roaches offer a promising alternative by discovering effective policies directly from trial-and-error experiences, potentially capturing complex behaviors that elude analytical modeling. While Deep Q-Networks have successfully learned to navigate cohesive flocks through structured obstacle fields [20], [21], demonstrating that neural policies can implicitly encode sophisticated spatial reasoning, the challenging problem of multi-agent shepherding with non-cohesive targets in cluttered environments-
 remains largely unexplored. We address this gap through a hierarchical architecture that combines PPO-based reinforcement learning for lowlevel herding behaviors with decentralized target assignment
arXiv:2511.21405v1 [eess.SY] 26 Nov 2025

for multi-agent coordination. Our key insight is that obstacleaware shepherding behaviors, learned in minimal scenarios with a single herder, target, and obstacle, can successfully transfer to complex multi-agent settings without retraining. This approach requires only minimal system modeling, thereby eliminating the need for online mapping and path planning, which are often centralized, computationally intensive, or suboptimal. Numerical experiments validate the strategy and demonstrate superior-
 gathering efficiency compared to traditional rule-based methods, establishing that deep reinforcement learning provides a scalable, model-free foundation for real-world shepherding challenges in complex domains.
II. PROBLEM STATEMENT
A. Modeling
a) Environment geometry: We consider a planar environment R2 in which N herders must steer M ≥ N targets into a circular goal region ΩG ⊂ R2, centered at the origin and with radius ρG. The environment contains a set of C static rectangular obstacles with smoothed corners, denoted {Pk}C
k=1. We
assume that each obstacle Pk ⊂ R2 is centered at Pk ∈ R2, has fixed side lengths (L, S), and is oriented such that its long side is orthogonal to the line connecting Pk to the center of ΩG. This configuration represents a worst-case scenario for the task, while allowing the obstacle’s area to be fully determined solely from the position Pk. Rectangular obstacles make the task inherently more challenging, as their flat sides tend to trap agents along the edges when only local normal repulsion is ap-
plied. Consequently, agents must actively learn obstacle-aware trajectories to avoid stagnation. This choice provides a minimal geometric configuration that naturally induces complex interactions, thereby increasing task difficulty with limited geometric complexity. The proposed framework can be extended to other obstacle geometries by retraining the policy accordingly. To ensure geometric feasibility, obstacles are required to be non-overlapping and sufficiently spaced from one another. In partic-
ular, we assume the distance between the centers of any two rectangular obstacles satisfies the property:
∥Pi − Pj∥2 > p(S + 2do∗)2 + (L + 2do∗)2, ∀ i ̸= j, (1) where the parameter do∗ > 0 is a safety distance. This condition enforces a minimum spacing between obstacles, ensuring that their rectangular bounding boxes, enlarged by a safety margin do∗, do not intersect. In particular, each obstacle is surrounded by an expanded buffer region of thickness do∗ on all sides; the Euclidean distance between the centers of any two obstacles must therefore exceed the diagonal length of these buffered boxes. Thi-
s prevents overlapping or excessively close configurations that could create unrealistic narrow passages for the agents.
The initial conditions of all agents are constrained within a circular domain Ω0 ⊂ R2 of radius R centered at the origin, excluding the obstacle regions, i.e.,
Ω0 := {x ∈ R2 : ∥x∥2 ≤ R ∧ x ∈/
C
[
k=1
Pk}. (2)
b) Targets’ dynamics: Targets evolve under overdamped stochastic dynamics with only short-range repulsion from herders and obstacles. Cohesion, alignment, and communication are excluded, so the population behaves as independent agents. This reflects dispersed or uncooperative settings and avoids artificial flocking, providing a conservative benchmark for evaluating control. The target population is modeled with first-order differential equations under kinematic assumptions, considering a negligibl-
e acceleration phase duration [22]. Building on the minimal, cohesionfree model in [10], we augment the target dynamics with a short-range local repulsion from nearby obstacles, denoted Fo(q). We define the Cartesian coordinates of the target Ti (for i = 1, . . . , M ) as Ti(t) and stack them in the target population position vector T := [T1, . . . , TM ]. The complete dynamics of each target i is:
 ̇Ti =
√
2D N +



β
X
j∈NH,i
λ − ∥dji∥2 dˆji + Fo(Ti)



vT
,
(3) where {·}a denotes an element-wise saturation operator ensuring ∥ · ∥∞ ≤ a, N is a two-dimensional standard Gaussian white noise process with diffusion coefficient D > 0, β > 0 is the repulsion gain, and λ > 0 is the herder–target interaction radius. The set of influencing herders is NH,i = { j : ∥Ti − Hj∥2 ≤ λ }. Denoting dji = Ti − Hj and dˆji = dji/∥dji∥2, the deterministic interaction term represents a linear (harmonic) radial repulsion that vanishes at distance λ. The term Fo(q) models lo-
cal, short-range repulsion from nearby (rounded) rectangular boundaries. Let ∂Pk be the boundary of obstacle k and
sk(q) = min
q′ ∈∂ Pk
∥q − q′∥2 (4)
be the shortest distance of a point q ∈ R2 from that boundary. The obstacle repulsion force is derived from compactsupport artificial potentials [23], following the formulation in [21]:
Fo(q) = −
C
X
k=1
∇Uk(q), (5a)
Uk(q) =

 
 
1
2 ko
1
sk(q) − 1
do∗
2
, sk(q) ≤ do∗,
0, sk(q) > do∗,
(5b)
where ko > 0 is the interaction gain and do∗ > 0 is the activation distance. Importantly, the presence of this shortrange potential with do∗ relatively small (see Sec. V) only prevents near-contact collisions and does not constitute a global obstacle-avoidance strategy.

c) Herders’ dynamics: We define the Cartesian coordinates of the herder Hj (for j = 1, . . . , N ) as Hj(t) and stack them in the herder population position vector H := [H1, . . . , HN ]. Herders are modeled as velocity-saturated single integrators–similarly to the target population under the same kinematic assumptions–subject to the same obstacle repulsion:
H ̇ j = {uj + Fo(Hj )}vH , (6)
where uj ∈ [−vH, vH]2 is the control input, and Fo(q) is the short-range repulsion from obstacles as in (5). We remark that this potential force merely acts as a collisionavoidance mechanism, ensuring that both herders and targets do not collide with obstacles. For this reason, Fo needs to be complemented by the control input uj to be designed. Finally, vH is the maximum herder velocity component.
B. Control goal
The goal is to design a control law for the N herders such that they guide the M targets into the goal region ΩG, while avoiding the obstacles present in the environment. We consider a decentralized, communication-free setting. Moreover, we assume unknown models of the agents when designing control policies. Following [12], we measure the fraction of targets inside the goal at time t:
χ(t) = 1
M i ∈ {1, . . . , M } : Ti(t) ∈ ΩG , (7)
where |A| denotes the cardinality of set A. Each herder j can sense an observation vector containing the positions of all the agents and the center of its closest obstacle Pjˆ. If multiple obstacles are at the same distance, one is randomly selected to define Pjˆ.
Sj(t) =
h
H, T, Pjˆ
i
∈ R2(N+M+1) (8)
The control input of herder j is sampled from a (possibly stochastic) decentralized policy conditioned on its observation:
uj(t) ∼ π( · | Sj(t)) , j = 1, . . . , N. (9)
The control objective is achieved if
∃ tg < +∞ s.t. χ(tg) ≥ χ⋆, (10)
with χ⋆ ∈ (0, 1] being the desired minimum fraction of targets within ΩG (e.g., χ⋆ = 1).
C. Shepherding Performance Metrics
To evaluate how effectively a candidate policy satisfies the above objective, we introduce the following metrics [9], where we consider a value of χ⋆ = 1:
• Gathering time tg. First time instant in which the success fraction reaches χ⋆:
tg = tin≥f0 { t : χ(t) ≥ χ⋆ } . (11)
• Average Path Length d(t). Mean distance travelled by each herder in the interval [0, t]:
d(t) = 1
N
N
X
i=1
Zt
0
 ̇Hi(τ ) 2 dτ. (12)
Notice that, considering a negligible Fo(Hj(t)) for almost every time instant in a simulation, this metric also serves as a proxy for the average control effort.
III. CONTROL ARCHITECTURE
To address the complexity of the task, we extend the twolayer hierarchical control architecture previously introduced for learning-based shepherding in obstacle-free environments [12], adapting it to cluttered scenarios with obstacles. As illustrated in Fig. 1, the overall control problem is decomposed into two subtasks: target selection and target driving. At each time step, every herder queries the corresponding modules to determine its next action. The high-level decision module selects which t-
arget to influence, following the heuristic strategy proposed in [10]. The low-level control module, designed via reinforcement learning, computes the herder’s velocity to drive the selected target toward the goal based on local observations. We first train the low-level policy in a compact onetarget/one-herder state–action space (Sec.IV-A). The resulting single-agent controller is then fixed and extended to the multi-agent case through a heuristic high-level controller (Sec.IV-B), which, despite -
being suboptimal, avoids the curse of dimensionality. This hierarchical decomposition alleviates the burden of multi-agent decision making while promoting specialization, modularity, and scalability.
IV. LEARNING AND DEPLOYMENT
A. Learning the Low-Level Driving Policy
We begin by training the low-level driving policy in a nominal environment comprising one herder, one target, and a single obstacle. The policy is parameterized by a neural network and trained using the actor–critic Proximal Policy Optimization (PPO) algorithm [24], suitable for continuous action spaces. In this scenario, we learn the policy π(·, S(t)), where the local observation vector is S(t) = [H, T, P] ∈ R6. This compact observation vector keeps the input dimension low, allowing for a lightwe-
ight network architecture. The controller outputs a continuous action u(t) ∈ [−vH, vH]2. Both the actor and critic networks take S(t) as input and consist of five hidden layers with 64 ReLU units each. The critic produces a scalar value estimate, while the actor outputs the mean of a Gaussian distribution over actions, with trainable standard deviations. During validation, the standard deviation is set to zero for deterministic execution. The reward function encourages target approach, goaldirecte-
d guidance, and parsimonious control effort [13]:
rD = − ka∥T(tk) − H(tk)∥2IΩ0\ΩG (T(tk))
− ks(∥T(tk)∥2 − ρG)IΩ0\ΩG (T(tk))
− kc∥u(tk)∥2,
(13)

Environment
P
ΩG
Hi Hj
Ta
Tb
Tc
Td
Te
Herder i
Target-selection
Target Driving
Herder j
Target-selection
Target Driving
T∗
i ui
[Hj, T, P]
Hi
T∗
j
uj
[Hi, T, P]
Hj
Fig. 1: Two-layer hierarchical feedback control scheme based on reinforcement learning, adapted from [12]. Each herder Hi,j detects the positions of other agents and determines the target T ∗
i,j via a target-selection heuristic. The corresponding motion is then governed by the driving policy, which outputs the velocity command u of the herder.
where IA(q) is the indicator function of set A, equal to 1 if q ∈ A and 0 otherwise. The first term keeps the herder close to the target, the second pushes the target toward the goal region ΩG, and the third penalizes large control actions. The gains are chosen such that ks > ka > kc. To promote obstacle-aware behavior, we employ a simple curriculum on the initial conditions. With probability pobs, the target is initialized uniformly at random within a conical region Ω0∗ ⊂ Ω0 located behind the ob-
stacle relative to the goal (see Fig. 2, inset). With probability 1−pobs, both agents are initialized uniformly in Ω0 \ Ω0∗. This setup encourages the emergence of avoidance strategies while enabling the policy to generalize across both obstacle-free and cluttered scenarios.
B. Decentralized Multi-Agent Deployment
Building upon the low-level policy learned in Sec.IVA, we deploy multiple herders guided by the decentralized target-selection heuristic module described in Sec.III. In so doing, the high-level controller applies the rule in [10] to select targets and supply inputs to the fixed low-level driving module. At each decision step, a herder Hj retains only the targets for which it is the closest herder. This nearest-agent exclusion avoids redundant assignments and induces implicit coordination among her-
ders without communication. Formally, a target Ti is admissible for Hj if the following condition is satisfied:
∥Ti − Hj∥2 < ∥Ti − Ha∥2 for all j ̸= a. (14)
Among the admissible set of targets, the herder selects the one that is the farthest from the goal, identified with the origin, so as to reduce the worst-case distance to ΩG and promote global progress. If no admissible target is available, the herder moves at a speed vH toward the boundary of the goal region and re-engages as soon as a valid assignment arises. This rule is local and scalable, accommodates the lack of target cohesion, and provides structured role allocation while
keeping the low-level controller unchanged across varying populations sizes.
V. NUMERICAL VALIDATION
We evaluate the proposed control strategies in two settings: (i) a nominal single-herder/single-target (1H–1T) scenario with one obstacle, and (ii) a multi-agent configuration with 10 herders, 100 targets, and three obstacles. Simulation details follow [10] and are reported in Appendix VI. For each simulation, Pk is uniformly sampled within a circular region of radius R > ρG centered at the origin. Given the fixed obstacle configuration, the initial positions of both herders and targets are unifor-
mly sampled within Ω0.
A. Single-Herder/Single-Target (1H–1T)
Training was conducted over 105 episodes with pobs = 0.5. Figure 2 shows the evolution of the cumulative reward during PPO training, which reaches a plateau with small fluctuations in less than about 2 × 104 episodes, indicating convergence to a stable policy capable of completing the task. The learned low-level driving policy was then validated against a vortex-based heuristic strategy that handles obstacle avoidance via tangential force fields [25]. We performed E = 1000 validation episodes with-
 random uniform initial conditions and pobs = 0.5. Both approaches proved robust, with the heuristic approach achieving a 96.5% success rate and the PPO-based policy reaching 99.3%. As shown in Fig. 3(a)–(b), the learning-based policy consistently achieves shorter gathering times tg with comparable average path lengths. This improvement stems from the different placement strategies used by the two strategies. The vortex controller maintains a fixed standoff from the target, whereas the PPO policy -
adapts its position to optimize guidance and reduce tg. Figures 3(c)–(d) further illustrate obstacle-avoidance behaviors under identical initial conditions. While the vortex strategy follows obstacle boundaries, the PPO-based policy produces smoother, more efficient trajectories and shorter settling times.

0 2 4 6 8 10 Episodes #104
Cumulative Reward
-6000
-5000
-4000
-3000
-2000
-1000
0
O
+G ;G
+$0
P
Ta
Hi
+O
Fig. 2: Cumulative reward during PPO training in the 1H–1T setup with a single rectangular obstacle. The inset illustrates the initialization region Ω0∗ ⊂ Ω0 behind the obstacle with respect to the goal region, where the target is placed with probability pobs = 0.5 to promote obstacle-aware behavior. The final cumulative reward maintains a nearly constant value with limited fluctuations, suggesting that the agent has converged to a stable policy capable of effectively completing the task in most t-
raining scenarios.
Overall, the learned policy demonstrates stable performance and outperforms the heuristic approach, benefiting from its optimization-based design.
B. Multi-Agent: 10 Herders, 100 Targets (10H–100T)
We evaluate a multi-agent scenario with N = 10 herders and M = 100 targets in an environment containing C = 3 rectangular obstacles whose positions are randomly and uniformly generated. We perform E = 1000 validation episodes with random uniform initial conditions and pobs = 0.5. Each herder executes the same low-level policy learned in the single-agent setup, assuming it can sense only the closest obstacle. High-level coordination follows the decentralized target-assignment heuristic strategy des-
cribed in Sec. IV-B. The proposed strategy achieves a success rate of 99.7%, demonstrating both robustness and generalization of the learned control policy. The policy exhibits strong scalability and coordination capabilities, with an average gathering time of 9.49 ± 3.38 × 103 a.u. and a mean path length per herder of 2.43 ± 7.56 × 102 a.u., confirming consistent performance despite environmental complexity. Figure 4 shows the time evolution of the mean and standard deviation of the radial distan-
ces of targets and herders from the goal center during a representative episode. Initially, both populations are uniformly distributed within the initialization region Ω0; as the episode progresses, the herders collectively drive the targets toward the goal region ΩG. The mean target radius decreases until all targets fall below the goal threshold ρG = 5, indicating successful gathering despite the presence of multiple obstacles in the environment. These results highlight the scalability of the pr-
oposed control strategy to complex multi-agent environments without requiring retraining of the learned policy.
Vortex PPO
Gathering Time
0
500
1000
1500
2000
(a)
Vortex PPO
Path Length
0
20
40
60
80
100
120
(b)
X
-25 -20 -15 -10 -5 0 5
Y
0
5
10
15
(c)
X
-25 -20 -15 -10 -5 0 5
Y
0
5
10
15
(d)
Fig. 3: Comparison between the vortex heuristic and the PPO-based strategy. Subfigures (a)–(b) show the gathering time and path length metrics; subfigures (c)–(d) illustrate the corresponding obstacle-avoidance trajectories for the vortex and PPO strategies, respectively.
a) Computational effort: All experiments ran on Macbook Air M3 with a memory of 24 GB. Training the low-level policy for 105 episodes (≈1.2 × 108 environment steps) required approximately 3 hours with an average throughput of approximately 1.11 × 104 steps/s per PPO update. At deployment, single-step inference costs 0.451 ± 0.321 ms per herder.
VI. CONCLUSIONS
We addressed the problem of achieving multi-agent shepherding of non-cohesive targets in cluttered environments via a hierarchical, learning-based solution. Our key contributions include (i) a low-level PPO driving policy trained in a minimal one-herder/one-target/one-obstacle setting that generalizes effectively to multi-agent deployments; (ii) an architecture coupling this low-level policy with a decentralized target-selection heuristic strategy that preserves modularity and scalability; and (ii-
i) convincing numerical evidence of collision-free guidance with improved efficiency over a vortex-based heuristic method from previous literature. Together, these elements deliver a scalable, modular, and model-free framework for sparse, indirect control in complex domains. Future work will focus on integrating explicit containment behaviors together with a learning-based target-selection layer in the spirit of [12], strengthening safety guarantees via control-theoretic tools (e.g., control barri-
er functions [26] and related approaches [17]) and validating the approach on physical platforms with realistic sensing, actuation, and uncertainty. Another important direction is to relax sens

Time (s)
0 20 40 60 80 100
Radii (m)
0
5
10
15
20
25
Fig. 4: Evolution of the mean and standard deviation of target (magenta) and herder (blue) distances from the goal center during a representative 10H–100T episode with three rectangular obstacles. All target radii eventually fall below the goal threshold ρG = 5 (green dashed line), confirming effective gathering. Herders subsequently enter the goal region as containment is not modeled. The inset shows the initial configuration of targets, herders, obstacles, and the goal region.
ing assumptions by removing knowledge of the obstaclecenter position, enabling herders to operate using only local/perceptual cues (e.g., boundary proximity) rather than relying on any global geometric information.
APPENDIX
Our learning framework is implemented in Python 3.9, using Gymnasium for reinforcement-learning environments and PyTorch for neural network policies. The PPO algorithm follows the implementation in [27], with hyperparameters initialized from [24] and subsequently refined to improve sample efficiency and training stability. The parameters used in the simulations reported in Sec. VI, together with the PPO hyperparameters, are summarized in Tables I and II, respectively. The code and the videos of th-
e reported experiments are publicly available at https://tinyurl.com/rl-shepherding.
TABLE I: Simulation parameters derived from [10]. The first-order model is numerically integrated through the Euler–Maruyama method with a time step of ∆t = 0.01 s.
Parameter Value Parameter Value ρG 5 β 3 R 25 D 0.1 L 10 λ 2.5 S 1 do∗ 3 vH 8 vT 7.5
REFERENCES
[1] R. A. Licitra, Z. I. Bell, E. A. Doucette, and W. E. Dixon, “Single agent indirect herding of multiple targets: A switched adaptive control approach,” IEEE Control Systems Letters, vol. 2, no. 1, pp. 127–132, 2018.
TABLE II: Hyperparameters and reward coefficients employed during the PPO training process.
Hyperparameter Value Hyperparameter Value Learning rate 5e-4 Rollout length 4096 steps Discount factor 0.98 Parallel environments 8 GAE parameter 0.95 Epochs per update 10 Clipping parameter 0.2 Hidden layers 5 Entropy coefficient 0.01 Neurons per layer 64 Value loss weight 0.5 ka 5e-2 Gradient clipping 0.5 ks 1e-1 Minibatches per update 128 kc 2e-2
[2] N. Long, K. Sammut, D. Sgarioto, M. Garratt, and H. Abbass, “A comprehensive review of shepherding as a bio-inspired swarmrobotics guidance approach,” IEEE Transactions on Emerging Topics in Computational Intelligence, vol. 4, no. 4, pp. 523–537, Aug. 2020. [3] A. Pierson and M. Schwager, “Controlling noncooperative herds with robotic herders,” IEEE Transactions on Robotics, vol. 34, no. 2, pp. 517–525, Apr. 2018. [4] J. Liu, H. Singh, S. Elsayed, R. Hunjet, and H. Abbass, “Planningassisted co-
ntext-sensitive autonomous shepherding of dispersed robotic swarms in obstacle-cluttered environments,” arXiv preprint arXiv:2301.10363, 2023.
[5] V. S. Chipade, V. S. A. Marella, and D. Panagou, “Aerial swarm defense by stringnet herding: Theory and experiments,” Frontiers in Robotics and AI, vol. 8, p. 640446, 2021. [6] D. Str ̈ombom, R. P. Mann, A. M. Wilson, S. Hailes, A. J. Morton, D. J. T. Sumpter, and A. J. King, “Solving the shepherding problem: Heuristics for herding autonomous, interacting agents,” Journal of The Royal Society Interface, vol. 11, no. 100, p. 20140719, Nov. 2014. [7] Y. Zheng and P. Romanczuk, “Bio-inspired agen-
t-based model for collective shepherding,” in International Conference on Simulation of Adaptive Behavior. Springer, 2024, pp. 182–193. [8] V. Jadhav, R. Pasqua, C. Zanon, M. Roy, G. Tredan, R. Bon, V. Guttal, and G. Theraulaz, “Collective responses of flocking sheep to a herding dog,” Communications Biology, vol. 7, Nov. 2024.
[9] F. Auletta, D. Fiore, M. J. Richardson, and M. di Bernardo, “Herding stochastic autonomous agents via local control rules and online target selection strategies,” Autonomous Robots, vol. 46, no. 3, p. 469–481, Mar. 2022. [10] A. Lama and M. Di Bernardo, “Shepherding and herdability in complex multiagent systems,” Physical Review Research, vol. 6, no. 3, p. L032012, Jul. 2024. [11] I. Napolitano, A. Lama, F. De Lellis, and M. di Bernardo, “Emergent cooperative strategies for multi-agent shepher-
ding via reinforcement learning,” in European Control Conference, 2025, pp. 1809–1814. [12] I. Napolitano, S. Covone, A. Lama, F. De Lellis, and M. di Bernardo, “Hierarchical learning-based control for multi-agent shepherding of stochastic autonomous agents,” arXiv preprint arXiv:2508.02632, 2025. [13] S. Covone, I. Napolitano, F. De Lellis, and M. di Bernardo, “Hierarchical Policy-Gradient Reinforcement Learning for Multi-Agent Shepherding Control of Non-Cohesive Targets,” 64th IEEE Conference on-
 Decision and Control, to appear, 2025.
[14] F. De Lellis, F. Auletta, G. Russo, P. de Lellis, and M. di Bernardo, “An application of control-tutored reinforcement learning to the herding problem,” in 2021 17th International Workshop on Cellular Nanoscale Networks and their Applications (CNNA). IEEE, 2021, pp. 1–4.
[15] C. F. Nino, O. S. Patil, J. N. Philor, Z. I. Bell, and W. E. Dixon, “Deep adaptive indirect herding of multiple target agents with unknown interaction dynamics,” in 2023 62nd IEEE Conference on Decision and Control (CDC). IEEE, 2023, pp. 2509–2514. [16] V. S. Chipade and D. Panagou, “Multiagent planning and control for swarm herding in 2-d obstacle environments under bounded inputs,” IEEE Transactions on Robotics, vol. 37, no. 6, pp. 1956–1972, 2021. [17] M. Hamandi, F. Khorrami, and A. Tzes,-
 “Robotic shepherding in cluttered and unknown environments using control barrier functions,” arXiv preprint arXiv:2407.15701, 2024.
[18] S. Zhang, X. Lei, M. Duan, X. Peng, and J. Pan, “A distributed outmost push approach for multirobot herding,” IEEE Transactions on Robotics, vol. 40, pp. 1706–1723, 2024.

[19] J. Liu, H. Singh, S. Elsayed, R. Hunjet, and H. A. Abbass, “Effective robotic swarm shepherding in the presence of obstacles,” in 2023 IEEE Congress on Evolutionary Computation (CEC). IEEE, 2023, pp. 1–8. [20] J. Zhi and J.-M. Lien, “Learning to herd agents amongst obstacles: Training robust shepherding behaviors using deep reinforcement learning,” IEEE Robotics and Automation Letters, vol. 6, no. 2, pp. 41634168, 2021. [21] ——, “Learning to herd amongst obstacles from an optimized surrogate-
,” in 2022 IEEE/RSJ International Conference on Intelligent Robots and Systems (IROS). IEEE, 2022, pp. 2954–2961. [22] G. Albi, M. Bongini, E. Cristiani, and D. Kalise, “Invisible control of self-organizing agents leaving unknown environments,” SIAM Journal on Applied Mathematics, vol. 76, no. 4, pp. 1683–1710, 2016. [23] O. Khatib, “Real-time obstacle avoidance for manipulators and mobile robots,” The international journal of robotics research, vol. 5, no. 1, pp. 90–98, 1986. [24] J. Schulman, F.-
 Wolski, P. Dhariwal, A. Radford, and O. Klimov, “Proximal policy optimization algorithms,” arXiv:1707.06347, 2017. [25] C. De Medio and G. Oriolo, “Robot obstacle avoidance using vortex fields,” in Advances in Robot Kinematics: With Emphasis on Symbolic Computation. Springer, 1991, pp. 227–235. [26] A. D. Ames, S. Coogan, M. Egerstedt, G. Notomista, K. Sreenath, and P. Tabuada, “Control barrier functions: Theory and applications,” in 2019 18th European control conference (ECC). Ieee, 2019, pp. 34-
20–3431. [27] M. Andrychowicz, A. Raichuk, P. Sta ́nczyk, M. Orsini, S. Girgin, R. Marinier, L. Hussenot, M. Geist, O. Pietquin, M. Michalski et al., “What matters for on-policy deep actor-critic methods? a large-scale study,” in International conference on learning representations, 2021.

---

## Processing Information

- **Processing Library:** Zotero PDFWorker
- **Processing Date:** 2026-02-10T18:17:45.113Z
- **Text Length:** 32643 characters
- **Success:** Text extraction completed
- **PDF Library Used:** Zotero PDFWorker
- **Pages Processed:** 7 of 7
