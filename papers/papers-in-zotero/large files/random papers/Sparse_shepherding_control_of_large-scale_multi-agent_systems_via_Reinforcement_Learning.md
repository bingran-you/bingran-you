# PDF Document: Catello et al. - 2025 - Sparse shepherding control of large-scale multi-agent systems via Reinforcement Learning.pdf

**File Path:** Catello et al. - 2025 - Sparse shepherding control of large-scale multi-agent systems via Reinforcement Learning.pdf

**Processed Date:** 2026-02-10T18:17:10.817Z

**File Size:** 1838.66 KB

**Total Pages:** 7

**Extracted Pages:** 7

**PDF Library:** Zotero PDFWorker

**Attachment Item ID:** 3341

**Title:** Sparse shepherding control of large-scale multi-agent systems via Reinforcement Learning

**Collection:** Large Files > Random Papers

---

## Extracted Text Content

Sparse shepherding control of large-scale multi-agent systems via Reinforcement Learning
Luigi Catello1, Italo Napolitano1, Davide Salzano2, Mario di Bernardo1,2∗
Abstract— We propose a reinforcement learning framework for sparse indirect control of large-scale multi-agent systems, where few controlled agents shape the collective behavior of many uncontrolled agents. The approach addresses this multi-scale challenge by coupling ODEs (modeling controlled agents) with a PDE (describing the uncontrolled population density), capturing how microscopic control achieves macroscopic objectives. Our method combines model-free reinforcement learning with adaptive int-
eraction strength compensation to overcome sparse actuation limitations. Numerical validation demonstrates effective density control, with the system achieving target distributions while maintaining robustness to disturbances and measurement noise, confirming that learning-based sparse control can replace computationally expensive online optimization.
I. Introduction
Complex multi-agent systems, ranging from biological swarms to robotic collectives, exhibit emergent behaviors arising from local interactions among individual agents [1], [2]. While traditional control strategies directly manipulate subsets of agents or their interaction networks [2], many real-world applications–such as search and rescue [3], crowd evacuation [4], and environmental management [5]–require indirect control. In this setting, a population of leaders is controlled to influence anothe-
r population of targets through their interactions [6], [7]. The shepherding control problem, in which a group of herders drives a group of targets toward desired spatial configurations, exemplifies this form of indirect control. It has been extensively studied in small-scale systems through explicit modeling of individual agent dynamics using coupled ordinary or stochastic differential equations (ODEs/SDEs) [8]–[10]. However, as the number of agents increases, such microscopic descriptions become-
 intractable, motivating the use of continuum models that describe the evolution of population densities through suitable partial differential equations (PDEs) [11]–[13]. A particularly
The authors acknowledge support from the Italian Ministry of University and Research (MUR) under project PRIN 2022 “Machine-learning based control of complex multi-agent systems for search and rescue operations in natural disasters (MENTOR).” 1 Luigi Catello, Italo Napolitano and Mario di Bernardo are with the Modeling and Engineering Risk and Complexity Department, Scuola Superiore Meridionale, via Mezzocannone 4, 80138, Naples, Italy (email: luigicatello16@gmail.com, i.napolitano@ssmeridionale.i-
t) 2Davide Salzano and Mario di Bernardo are with the Department of Information Technology and Electrical Engineering, University of Naples Federico II, Naples, Italy (email: davide.salzano@unina.it, mario.dibernardo@unina.it). * Corresponding author
relevant scenario is the sparse control setting, where a small number of herders must steer a large population of targets. This naturally leads to hybrid, or micromacro, formulations that retain agent-based descriptions for the herders while modeling the target population at the macroscopic level [4]. This work addresses the sparse control challenge by designing optimal control laws that indirectly shape target density distributions. Although recent sparse optimal mean-field control formulations h-
ave shown promising results [14]–[16], their computational cost often hinders real-time applicability. Alternatively, approaches based on Markov-chain descriptions on discretized domains [17], [18] can reduce computational burden but are generally restricted to single-herder scenarios with coarse spatial discretizations. To overcome these limitations, we propose a learning-based framework that coordinates multiple herders in continuous domains without requiring expensive online optimization. The e-
ffectiveness of the proposed approach is demonstrated through extensive numerical validation. We wish to emphasize that, while shepherding provides a canonical example of indirect control, the same problem structure–where few controlled agents influence many uncontrolled ones–arises across diverse domains. Examples include cell organization in tissue engineering [19], the use of autonomous vehicles for traffic management [20], and the strategic placement of information sources in opinion dynamics -
[21]. The mathematical framework developed here, combining agent-based control with population-level dynamics, offers a general methodology for tackling such sparse indirect control problems.
II. Modeling and problem statement
We consider the sparse indirect control problem where N H controlled agents (herders) must shape the spatial distribution of N T ≫ N H uncontrolled agents (targets) in a periodic one-dimensional spatial domain S = [−π, π].
As done in [22], we model each herder as a single integrator driven by the control input. Formally,
H ̇ i(t) = ui(t), i = 1, . . . , N H, (1)
where Hi(t) ∈ S denotes the position of the i-th herder, and ui(t) ∈ [−vmax, vmax] is the corresponding control input. This modeling choice follows from adopting the kinematic assumption [23], namely neglecting
arXiv:2511.21304v1 [eess.SY] 26 Nov 2025

Fig. 1. Proposed control architecture. The macro-micro controller computes the control actions u(t) knowing the desired target distribution ρT(x) and sensing the current herders’ position H(t). The herders influence the target distribution ρT(x, t) through the velocity field V (x, t).
acceleration and assuming a drag force proportional to velocity. We also define the vector containing the positions of all the herders as H = [H1, . . . , HNH ] and the vector containing their respective control actions as u = [u1, . . . , uNH ] . As in [22], the targets are modeled as random walkers repelled from nearby herders. Formally, denoting the position of target j as Tj, we have
dTj(t) = K(t)
NH + NT
N ∑H
i=1
f ({Tj(t), Hi(t)})dt
+√2D dBj(t), j = 1, . . . , N T.
(2)
The drift term models the interaction between herders and targets, occurring through a periodic interaction kernel f (x) : Ω → R. We chose
f (x) = sgn(x)
e2π/L − 1
[
e 2π−|x|
L − e |x|
L
]
, (3)
as done in [12]. Here, {Tj, Hi} denotes the wrapped distance between target j and herder i in the periodic domain. As is common in shepherding applications [8], [24], f (x) is repulsive (i.e., f (x)sign(x) ≥ 0 ∀x ∈ S), odd, and vanishes as the distance increases according to a characteristic interaction length L > 0. Additionally, we assume that the strength of the repulsion can be modulated by a gain K(t) > 0. Note that this is especially relevant where the herders are robotic swarms, such as in -
oil-spill containment [5]. Instead, the diffusion term models Brownian motion, with Bj(t) being independent standard Wiener processes and D > 0 being the diffusion coefficient. As the number of targets increases, tracking each agent in the population becomes progressively more cumbersome. In the limit N T → ∞, mean-field theory [12] allows us to describe the target population through its spatial density ρT : S × R+ → R+, whose evolution follows the Fokker-Planck equation:
ρT
t (x, t) + [ρT(x, t)K(t)f (x) ∗ ρH(x, t)]
x = DρT
xx(x, t), (4) where ∗ is the convolution operation, the subscripts t and x indicate the time and space partial differentiation, respectively. This equation is complemented with periodic boundary conditions, given the periodicity of the chosen domain S. Next, we define the empirical distribution of
the herders, ρH : S × R+ → R+, as
ρH(x, t) = M H
NH
N ∑H
i=1
δ(x − Hi(t)). (5)
with M H being the total mass of herders. Given the definition of ρT , we can also define the total mass of targets as
MT =
∫
S
ρT(x, t) dx, ∀t ∈ R+. (6)
Note that mass conservation requires M H + M T to remain constant for all t ≥ 0. In this work, without loss of generality, we set M H + M T = 1. We remark that, although ρH(x, t) and ρT(x, t) share the same domain, they are supported on different sets, namely supp(ρH(x, t)) = {H1(t), . . . , HNH (t)} and supp(ρT(x, t)) = S ⊂ R. Unlike [12], [22], where the herder population is large enough to be approximated by smooth densities governed by a Fokker–Planck equation, our sparse herder distribution r-
emains a sum of Dirac measures. This leads to a coupled ODE–PDE system, where the individual herder dynamics (ODEs) drive the evolution of the target density (PDE) toward the desired configuration. The control problem can then be formulated as follows.
Control Problem Given the coupled ODE–PDE system (1)–(4), let ρT(x) be a desired target density solving the shepherding problem. We wish to design the control inputs u(t) for the herders’ dynamics so as to achieve
limt→∞
∥∥ρT(x) − ρT(x, t)∥∥L2 ≤ ε, within some tolerance
ε > 0 due to the presence of sparse actuation. Here, ∥f (x)∥L2 denotes the L2 norm of a function f
over the spatial domain S, defined as
∥f (x)∥L2 =
(∫
S
|f (x)|2 dx
)1/2
. (7)
Since the goal of shepherding problems is to corral agents within a defined spatial region, we select the desired target distribution as a von Mises distribution with concentration parameter κ > 0:
ρT(x) = M T exp(κ cos(x))
∫
S exp(κ cos(x))dx , (8)
which concentrates the targets around x = 0. This choice is consistent with previous studies addressing

shepherding control in the continuum setting [12], [22]. Finally, we set N H = 2 to investigate the case in which a very small number of herders is tasked to control a large target population.
III. Control design
To address the above Control Problem, we propose the control strategy illustrated in Figure 1. The architecture is built around a macro–micro controller trained via Proximal Policy Optimization (PPO) [25]. This controller computes the herder velocities u(t) from the desired target density ρT(x) to generate the velocity field V (x, t) = K(t)f (x) ∗ ρH(x, t) that shapes the evolving target distribution ρT(x). The controller learns to optimize the herders’ positions in closed loop while treating the -
target density in open loop. This design reduces the infinite-dimensional PDE control problem to a tractable finite-dimensional reinforcement learning task, thereby eliminating the need for computationally expensive optimization. The agent receives as input the positions of the herders in S. Specifically, we encode these positions as [cos(H1), sin(H1), . . . , cos(HNH ), sin(HNH )] ∈
[−1, 1]2NH . This choice is made to prevent chattering in the control inputs caused by numerical discontinuities at x = ±π. The Reinforcement Learning agent then outputs the herders velocities, given by the vector u = [u1, . . . , uNH ] ∈ [−vmax, vmax]NH . Note that this strategy is centralized, as the control inputs for all herders are decided by a single controller with global knowledge of the system. The reward function driving the training could be chosen as:
rˆ(tk) = −k1∥ρ ̄T (x) − ρT (x, tk)∥2
L2 − k2∥u(tk)∥2
2, (9)
where tk = k∆t is the discretized time-step, ∆t is the discretization step, ∥·∥L2 is the L2 functional norm
over the domain S, ∥·∥2 is the Euclidean vector norm.
The first term penalizes the error between the desired and actual target distributions, while the second term regularizes the control effort to prevent excessive energy consumption and ensure smooth herder trajectories. The weights k1 ≫ k2 prioritize accuracy over energy efficiency. This approach would require computing the current target density at every time step, explicitly simulating the PDE governing the target dynamics and providing the full density as input to the neural network. However, t-
his can be cumbersome due to the high-dimensionality of the network input layer. To address this, we propose a more practical alternative based on a modified reward function of the form
r(tk) = −k1∥ρ ̄T (x) − ρT,ss(x; H(tk))∥2
L2 − k2∥u(tk)∥2
2,
(10) where ρT,ss(x; H) : S ×SNH → R+ is an estimation of the target density distribution at steady state parametrized
at the herders position (see section III-A for more details).
A. Steady-state target density estimation
At each time step tk, the steady-state target density is estimated by fixing the herders’ positions, so that they generate a time-invariant velocity field acting on the targets. This estimate is then updated at the next time step based on the herders’ new positions. Under this assumption, we compute ρT,ss(x; H) by setting ρtT(x) = 0 in Equation (4) and solving the resulting spatial ODE with periodic boundary conditions. This yields
ρT,ss(x; H) = Z exp
(∫ x
−π
K(t)M H DN H
N ∑H
i=1
f (ξ − Hi(t))dξ
)
,
(11) where Z is a normalization constant ensuring
∫
S ρT,ss(x; H)dx = M T, for all H ∈ SNH . Note that,
due to the periodicity of the interaction kernel–and consequently of the time-invariant velocity field–the density ρT(x, t) admits a unique and stable steady-state solution [26], provided that the kernel is smooth. This condition can be easily satisfied by adopting a smooth approximation of (3).
B. Interaction strength adaptation
We complement the Reinforcement Learning agent with an interaction strength compensation to improve performance. We can exploit this additional degree of freedom to mitigate the limitations imposed by the small number of herders. Specifically, recalling that the strength of the interaction between herders and targets in Equation (4) can be modulated through the gain K(t), we employ a heuristic gradient-descent compensation law
K ̇ (t) = −α ∇K
∥∥ρT,ss(x; H(t)) − ρT(x)∥∥L2 , (12)
with initial gain K(0) = 1. Such compensation law allows the convergence of the interaction strength gain to a value that locally minimizes the target distribution mismatch.
IV. Numerical validation
The system of herders and targets described in Equations (1) and (4) is simulated by using Forward Euler to integrate the ODEs and finite differences to integrate the PDE [27]. The spatial domain is discretized uniformly with a step size ∆x. Two different time step sizes were used: a larger ∆t for the ODEs and a much smaller ∆tPDE for the PDE, following the guidelines in [27] for numerical stability. Table I summarizes the parameters used for simulations. The choice of parameters in Table I reflec-
ts realistic constraints in robotic shepherding applications, with herder velocities bounded by physical actuator limits and diffusion coefficient chosen to model moderate environmental noise. PPO was implemented following the algorithm proposed in [25]. Both the actor and the critic are implemented as fully connected feed-forward neural networks.

12345 Training steps #105
-4
-2
0
Episodic reward
#104
Fig. 2. Episodic reward during the training process of the PPO agent. Values are smoothed with a moving average of width 20 steps.
Symbol Parameter Value
∆x Spatial step size 2π/250 ∆t Time step size for ODE simulation 0.01 ∆tPDE Time step size for PDE simulation 0.0005 Th Time horizon 150 N H Number of herders 2 D Diffusion coefficient 0.05 L Kernel interaction length π κ Concentration of Von Mises distribution 16/π2 vmax Herders’ maximum velocity 3 M H Mass of herders’ population 0.3 M T Mass of targets population 0.7 α Adaptation law step size 0.2
TABLE I Main parameters used to simulate the experiments.
Each network includes four hidden layers of 64 neurons with ReLU activations. The actor network outputs the parameters of a Gaussian policy: the mean action, obtained through a hyperbolic tangent activation to ensure bounded values, and an independent learnable standard deviation. During training, actions are sampled from this Gaussian distribution to encourage exploration, whereas during validation the deterministic mean action is applied directly. At the beginning of each episode, the initial po-
sitions of the herders are sampled uniformly from the domain, i.e., Hi,0 ∼ U (S), to ensure broad exploration. The parameters of the reward function in Equation (10) were set to k1 = 10 and k2 = 0.01, while the gradient descent gain in Equation (12) was set to α = 0 during training. Figure 2 illustrates the evolution of the episodic rewards during training, showing that they converge to a plateau corresponding to relatively high cumulative reward values, indicating effective learning and numerical-
 stability. Videos regarding the experiments and the hyperparameters used–refined starting from those in [25]–can be found at https://tinyurl.com/ywhun59y.
A. Performance indices
We define a set of metrics to assess the performance of the proposed control strategy. Specifically, we quantify the steady-state performance by computing the L2 function norm of the steady-state target density error,
defined as
eT,ss = ∥∥eT(x, Th)∥∥L2 = ∥∥ρT(x) − ρT(x, Th)∥∥L2 , (13)
where eT(x, t) represents the target distribution error and Th is the final time of the experiment. Additionally, we measure the overall control effort exerted by the herders by evaluating the average vector norm of u(t), defined as
um = 1
Th
∫ Th
0
∥u(t)∥2 dt, (14)
where ∥·∥2 here indicates the Euclidean vector norm.
Finally, we assess the transient performance using the 2% settling time of herders (T H
a,2%) and targets (T T
a,2%)
by setting:
TH
a,2% = max
i=1,...,NH inf ti{0 ≤ ti ≤ Th :
|Hi(τi) − Hi(Th)| ≤ 0.02 |Hi(0) − Hi(Th)| , ∀τi ≥ ti}, (15)
TT
a,2% = intf{t > 0 : ∣∣ ∥∥eT(x, τ )∥∥L2 − eT,ss ∣∣ ≤
≤ 0.02 ∣∣ ∥∥eT(x, 0)∥∥L2 − eT,ss ∣∣ , ∀τ ≥ t}
(16)
B. Controller performance and comparison
To assess the performance of the trained control agent, we conducted ten numerical experiments, each with different initial positions for the herders uniformly sampled from S. The gain of the gradient descent in Equation (12) is set to α = 0.2 and the gradient is computed numerically. Figures 3a–b illustrate a representative experiment. In particular, in Figure 3a, the L2 norm of the density error settles at 0.031 after approximately 90 time units, while the control input norm rapidly decreases to-
 zero within about 4.23 time units. Figure 3b shows the evolution of the target density during a single experiment over space (x-axis) and time (y-axis). The density is represented by shades of magenta, while the dark and light blue lines indicate the herders’ positions. We can observe that the herders quickly reach a steady-state configuration, after which the target density converges to a distribution qualitatively similar to the desired one ρT(x). Overall, this example demonstrates effective re-
ward choice, successfully abating both terms in Equation (10). We further evaluate the controller’s performance using the indices defined in Section IV-A. As shown in Figure 3c, the herders exhibit a significantly shorter settling time than the targets, indicating that they rapidly converge to a steady-state configuration. This enables them to generate an effective velocity field acting on the targets. Moreover, Figure 3d shows that the residual error of the target density consistently stabilizes -
around 0.031, with a very low standard deviation. This demonstrates that the Reinforcement Learning agent has learned a consistent strategy for optimally positioning the herders to produce the most effective velocity field on

Fig. 3. Performance of the learned policy using the reward function in (10) and the compensation law in (12). (a) L2 norm of the target distribution error eT (red) and Euclidean vector norm of the control effort ∥u∥2 (blue) over time; (b) Top panel: Desired target
density distribution ρT in space. Bottom panel: Evolution of the targets density and of the herders positions in space (x axis) and time (y axis) for a representative experiment. The shade of magenta is representative of the density of the targets. The dark and light blue lines describe the position of the herders at each time instant; (c) boxplots of the settling time (2%) for the target population (red, left) and the herders (blue, right), calculated over 10 experiments with random initial condi-
tions; and (d) boxplots of the steady-state target density error esTs (red, left) and the control effort um (blue, right), calculated over 10 experiments with random initial conditions.
a
b
Fig. 4. Evolution of the ∥∥eT(x, t)∥∥L2 when activating the
compensation law for gain K(t) for t ≥ 75 (indicated as a vertical black dotted line). (a) L2 norm of eT with (solid line) and without (dotted line) compensation, highlighting the advantages of the compensation law. (b) time evolution of the interaction strength gain K(t).
the targets, regardless of the herders’ initial conditions. Finally, the average control effort remains approximately 0.042 across all experiments, which is remarkably low compared to vmax. To further assess the impact of the compensation law introduced in (12), we isolate its effect by fixing K = 1 for the first 75 time units and then activating the adaptive law for the remainder of the simulation. The results in Figure 4 show that the controller trained with PPO reaches a steady state after appr-
oximately 58.97 time units, with a residual error of eT,ss = 0.045. Once the compensation law is activated, K(t) adapts dynamically, leading to a further reduction in the steadystate error and achieving an approximate 31% decrease
in the distribution error norm ∥∥eT∥∥L2 within 7.47 time
units.
C. Robustness evaluation
We numerically evaluated the robustness of the control algorithm against external disturbances. Specifically, we tested the controller’s robustness against constant addi
tive disturbances in the herders’ dynamics and additive measurement noise. The former assesses the controller’s sensitivity to bounded unmodeled dynamics, while the latter accounts for imperfections in sensor measurements. Figure 5a shows the steady-state target density error, denoted by eT,ss, as a function of a constant additive disturbance vd ∈ [0, 0.6] applied to the herder dynamics (1). The maximum disturbance amplitude is empirically set to vd = 0.6, corresponding to 20% of the maximum herde-
r velocity vmax. The disturbance is discretized in 1% increments, resulting in 21 sample points. The numerical experiments indicate a maximum increase of 9% in the steady-state error eT,ss when vd = 0.6, demonstrating the controller’s robustness to this class of disturbances. The effect of vd = 0.6 can also be observed in Figure 5b, which illustrates the spatial and temporal evolution of the target density, and still closely matches the desired one at steady-state. This demonstrates that, even in -
the worst-case scenario considered, the target density remains largely unaffected by the disturbance introduced. In particular, the error norm converges to eT,ss = 0.034, which is comparable to the steady-state error obtained in the absence of any disturbance. Next, we evaluated the controller’s robustness to additive measurement noise by introducing white Gaussian noise with a standard deviation Dm ∈ [0, 2π/5] and performing 100 experiments for each value of Dm. This range was selected so that th-
e measurement noise had a standard deviation of up to 20% of the total domain size, and Dm was discretized in 1% increments. Interestingly, the performance of the measurement noise slightly improves the controller’s performance. This effect occurs because the noise introduces small fluctuations in the herders’ positions, leading to a smoother target density profile that more closely matches ρT. When Dm = 2π/5, which corresponds to the worst-case scenario considered, the target error norm converges-
 on average to eT,ss = 0.03, which is comparable to the error obtained in the absence of measurement noise. These results demonstrate that the steady-state target density is not

significantly affected by measurement noise, confirming that the controller successfully achieves its objective despite perturbations. Figure 5d illustrates the herders’ positions and the target density in a numerical experiment with Dm = 2π/5. In this scenario, despite the strong randomness in the measured position, the herders are still able to steer the target density towards a density close to ρT.
D. Computational effort
The training of the Reinforcement Learning agent required ∼ 27 minutes on a Ryzen 7 3700x CPU with 32GB of RAM, without GPU acceleration. Training was performed on Windows 10 with Python 3.12.3. Inference requires 4.1 × 10−4 seconds per step using the same hardware.
V. Conclusions
We formulated a sparse indirect control problem and proposed an optimal learning-based solution. Using PPO, we trained a controller to minimize the L2 error between the desired and expected steady-state density profiles while keeping the control effort low. By modulating the interaction strength K(t), we further reduced the residual steady-state error and partially compensated for the limited number of herders. Our results demonstrate that the proposed learning-based approach effectively controls -
large-scale target populations while remaining robust to constant disturbances and measurement noise. Future work will focus on extending the framework to incorporate real-time target density feedback, potentially through distributed sensing [28] or learned density encoders. Another direction is the transition from centralized to decentralized architectures using multiagent reinforcement learning [29], which would improve scalability and robustness to individual herder failures, while enabling ada-
ptive collective decision-making as the number of herders varies. In parallel, establishing theoretical guarantees for the convergence and stability of the learned policies remains an important open challenge. Finally, experimental validation on physical robot swarms will be crucial to demonstrate real-world applicability and reveal practical limitations not captured in simulation.
References
[1] M. Dorigo, G. Theraulaz, and V. Trianni, “Reflections on the future of swarm robotics,” Science Robotics, vol. 5, no. 49, p. eabe4385, 2020. [2] R. M. D’Souza, M. di Bernardo, and Y.-Y. Liu, “Controlling complex networks with complex nodes,” Nature Reviews Physics, vol. 5, no. 4, pp. 250–262, 2023. [3] J.-M. Lien and E. Pratt, “Interactive planning for shepherd motion.” in AAAI Spring Symposium: Agents That Learn from Human Teachers, ser. AAAI Spring Symposium - Technical Report, 2009, pp. 95–-
102. [4] G. Albi and L. Pareschi, “Modeling of self-organized systems interacting with a few individuals: From microscopic to macroscopic dynamics,” Applied Mathematics Letters, vol. 26, no. 4, pp. 397–401, 2013.
[5] E. M. H. Zahugi, M. M. Shanta, and T. V. Prasad, “Oil Spill Cleaning Up Using Swarm of Robots,” in Advances in Computing and Information Technology, N. Meghanathan, D. Nagamalai, and N. Chaki, Eds. Springer Berlin Heidelberg, 2013, pp. 215–224. [6] R. A. Licitra, Z. I. Bell, and W. E. Dixon, “Single-agent indirect herding of multiple targets with uncertain dynamics,” IEEE Transactions on Robotics, vol. 35, no. 4, pp. 847–860, 2019. [7] S. Bernardi, G. Estrada-Rodriguez, H. Gimperlein, and K. J-
. Painter, “Macroscopic descriptions of follower-leader systems,” Kinetic and Related Models , 2021. [8] N. K. Long, K. Sammut, D. Sgarioto, M. Garratt, and H. A. Abbass, “A Comprehensive Review of Shepherding as a BioInspired Swarm-Robotics Guidance Approach,” IEEE Transactions on Emerging Topics in Computational Intelligence, vol. 4, no. 4, pp. 523–537, 2020. [9] D. Strömbom, R. Mann, A. Wilson, S. Hailes, D. Sumpter, and A. King, “Solving the shepherding problem: Heuristics for herding autonomo-
us, interacting agents,” Journal of The Royal Society Interface, vol. 11, 2014. [10] I. Napolitano, S. Covone, A. Lama, F. De Lellis, and M. di Bernardo, “Hierarchical learning-based control for multi-agent shepherding of stochastic autonomous agents,” arXiv:2508.02632, 2025. [11] A. Lama, M. di Bernardo, and Sabine. H. L. Klapp, “Nonreciprocal field theory for decision-making in multi-agent control systems,” Nature Communications, vol. 16, no. 1, p. 8450, 2025. [12] G. C. Maffettone, A. Boldini, -
M. Porfiri, and M. di Bernardo, “Leader-follower density control of spatial dynamics in largescale multi-agent systems,” IEEE Transactions on Automatic Control, pp. 1–16, 2025. [13] G. Albi, Y.-P. Choi, M. Piu, and S. Song, “Micro-macro and macro-macro limits for controlled leader-follower systems,” arXiv:2508.04020, 2025. [14] G. Ascione, D. Castorina, and F. Solombrino, “Mean-Field Sparse Optimal Control of Systems with Additive White Noise,” SIAM Journal on Mathematical Analysis, vol. 55, no. 6-
, pp. 6965–6990, 2023. [15] G. Albi, M. Bongini, E. Cristiani, and D. Kalise, “Invisible control of self-organizing agents leaving unknown environments,” SIAM Journal on Applied Mathematics, vol. 76, no. 4, pp. 1683–1710, 2016. [16] G. Albi, F. Ferrarese, and C. Segala, “Optimized Leaders Strategies for Crowd Evacuation in Unknown Environments with Multiple Exits,” in Crowd Dynamics, Volume 3, N. Bellomo and L. Gibelli, Eds. Springer International Publishing, 2021, pp. 97–131. [17] K. Elamvazhuthi-
, Z. Kakish, A. Shirsat, and S. Berman, “Controllability and Stabilization for Herding a Robotic Swarm Using a Leader: A Mean-Field Approach,” IEEE Transactions on Robotics, vol. 37, no. 2, pp. 418–432, 2021. [18] Z. Kakish, K. Elamvazhuthi, and S. Berman, “Using reinforcement learning to herd a robotic swarm to a target distribution,” in Distributed Autonomous Robotic Systems. Springer International Publishing, 2022, pp. 401–414. [19] Y. Yu, Q. Wang, C. Wang, and L. Shang, “Living materials for r-
egenerative medicine,” Engineered Regeneration, vol. 2, pp. 96–104, 2021. [20] R. E. Stern, S. Cui, M. L. Delle Monache, R. Bhadani, M. Bunting, M. Churchill, N. Hamilton, R. Haulcy, H. Pohlmann, F. Wu, et al., “Dissipation of stop-and-go waves via control of autonomous vehicles: Field experiments,” Transportation research part C: emerging technologies, vol. 89, pp. 205–221, 2018. [21] J. P. Pinasco, V. Semeshenko, and P. Balenzuela, “Modeling opinion dynamics: Theoretical analysis and continuous -
approximation,” Chaos, Solitons & Fractals, vol. 98, pp. 210–215, 2017. [22] B. Di Lorenzo, G. C. Maffettone, and M. di Bernardo, “A continuification-based control solution for large-scale shepherding,” European Journal of Control, p. 101324, 2025. [23] A. J. Bernoff and C. M. Topaz, “A primer of swarm equilibria,”

Fig. 5. Robustness analysis of the proposed control strategy against constant disturbances (panels a, b) and measurement noise (panels c, d). (a) Steady-state error eT,ss varying the constant disturbance on the herders dynamics. (b) Top panel: Desired target density distribution ρT in space. Bottom panel: Evolution of the targets density and of the herders positions in space (x axis) and time (y axis) for a representative experiment given vd = 0.6. The shade of magenta is representative of the de-
nsity of the targets. The dark and light
blue lines describe the position of the herders at each time instant. (c) Mean (solid blue line), 10th and 90th percentiles (shaded blue) of the steady state target error varying the amplitude of the measurement noise over 100 numerical experiments. (d) Top panel: Desired target density distribution ρT in space. Bottom panel: Evolution of the targets density and of the herders positions in space (x axis) and time (y axis) for a representative example given Dm = 2π/5. The shade of magenta is repres-
entative of the density of the targets. The dark and light blue lines describe the position of the herders at each time instant.
SIAM Journal on Applied Dynamical Systems, vol. 10, no. 1, pp. 212–250, 2011. [24] A. Lama and M. di Bernardo, “Shepherding and herdability in complex multiagent systems,” Physical Review Research, vol. 6, no. 3, p. L032012, 2024. [25] J. Schulman, F. Wolski, P. Dhariwal, A. Radford, and O. Klimov, “Proximal policy optimization algorithms,” arXiv:1707.06347, 2017. [26] C. Gardiner, Handbook of Stochastic Methods for Physics, Chemistry, and the Natural Sciences, ser. Springer Complexity. Springer, -
2004. [27] A. Quarteroni and S. Quarteroni, Numerical Models for Differential Problems. Springer, 2009, vol. 2. [28] B. Di Lorenzo, G. C. Maffettone, and M. di Bernardo, “Decentralized Continuification Control of Multi-Agent Systems via Distributed Density Estimation,” IEEE Control Systems Letters, vol. 9, pp. 1580–1585, 2025. [29] S. Gronauer and K. Diepold, “Multi-agent deep reinforcement learning: a survey,” Artificial Intelligence Review, vol. 55, no. 2, pp. 895–943, 2022.

---

## Processing Information

- **Processing Library:** Zotero PDFWorker
- **Processing Date:** 2026-02-10T18:17:10.817Z
- **Text Length:** 32521 characters
- **Success:** Text extraction completed
- **PDF Library Used:** Zotero PDFWorker
- **Pages Processed:** 7 of 7
