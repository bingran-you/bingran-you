# PDF Document: Hurova et al. - 2025 - Sampling-Based Optimization with Parallelized Physics Simulator for Bimanual Manipulation.pdf

**File Path:** Hurova et al. - 2025 - Sampling-Based Optimization with Parallelized Physics Simulator for Bimanual Manipulation.pdf

**Processed Date:** 2026-02-10T18:16:44.120Z

**File Size:** 5679.57 KB

**Total Pages:** 9

**Extracted Pages:** 9

**PDF Library:** Zotero PDFWorker

**Attachment Item ID:** 3795

**Title:** Sampling-Based Optimization with Parallelized Physics Simulator for Bimanual Manipulation

**Collection:** Large Files > Random Papers

---

## Extracted Text Content

Sampling-Based Optimization with Parallelized Physics Simulator for
Bimanual Manipulation.
Iryna Hurova1, Alinjar Dan1, Karl Kruusam ̈ae1, Arun Kumar Singh1
Fig. 1: Comparison of our approach (top) with [1] (bottom). We consider the task of lifting the ball made complicated by the presence of an obstacle. In free space, both our approach and [1] work flawlessly. However, [1] is not able to adapt the lifting strategy in the presence of obstacles.
Abstract— In recent years, dual-arm manipulation has become an area of strong interest in robotics, with end-to-end learning emerging as the predominant strategy for solving bimanual tasks. A critical limitation of such learning-based approaches, however, is their difficulty in generalizing to novel scenarios, especially within cluttered environments. This paper presents an alternative paradigm: a sampling-based optimization framework that utilizes a GPU-accelerated physics simulator as its world -
model. We demonstrate that this approach can solve complex bimanual manipulation tasks in the presence of static obstacles. Our contribution is a customized Model Predictive Path Integral Control (MPPI) algorithm, guided by carefully designed task-specific cost functions, that uses GPU-accelerated MuJoCo for efficiently evaluating robot-object interaction. We apply this method to solve significantly more challenging versions of tasks from the PerAct2 benchmark, such as requiring the point-to-point-
 transfer of a ball through an obstacle course. Furthermore, we establish that our method achieves real-time performance on commodity GPUs and facilitates successful sim-to-real transfer by leveraging unique features within MuJoCo. The paper concludes with a statistical analysis of the sample complexity and robustness, quantifying the performance of our approach. The project website is available at: https://sites.google.com/view/bimanualakslabunitartu
I. INTRODUCTION
Dual-arm manipulation represents a significant frontier in robotics, holding the promise of emulating human-level
1 University of Tartu, Narva mnt 18, 51009, Tartu, Estonia Iryna Hurova: Post-graduate student, iryna.gurova@gmail.com
Alinjar Dan: Post-doc, alinjardannitdgp2014@gmail.com Karl Kruusama ̈e: Associate Professor, karl.kruusamae@ut.ee Arun Kumar Singh: Associate Professor, aks1812@gmail.com
dexterity for complex tasks such as intricate assembly, collaborative object handling, and dynamic interaction with unstructured environments. The ability to coordinate two robotic arms unlocks capabilities that are difficult or impossible for a single manipulator, including stabilizing large objects, performing simultaneous actions, and applying opposing forces. This potential has fueled a surge of research interest, with the goal of developing autonomous systems that can operate robustly and int-
elligently in the physical world. In recent years, the dominant paradigm for tackling bimanual manipulation has been end-to-end learning [1]–[4]. Approaches based on imitation learning and reinforcement learning have demonstrated remarkable success in learning complex, high-dimensional policies directly from data. There are two primary reasons for the popularity of learning based approaches. First, they can directly convert high-dimensional perception input to motor commands. Second, they bypass t-
he need to explicitly model the interaction between the arms and between the object and the arms. For example, consider the task of lifting a ball with both arms. By directly learning from the demonstration data, imitation learning can avoid explicitly modeling the contact forces between the ball and the arms. However, the success of these learning-based approaches is often predicated on extensive data collection and is tightly coupled to the distribution of the training data. A critical and widel-
y acknowledged limitation is their difficulty in generalizing to novel scenarios, especially when the environment is cluttered with obstacles. When faced with even minor variations in object placement, environ
arXiv:2511.21264v1 [cs.RO] 26 Nov 2025

mental clutter, or task constraints not seen during training, these policies can become brittle and fail unpredictably (see Fig. 1). This brittleness severely hinders their deployment in real-world settings, which are inherently dynamic and cluttered.
This paper shows that real-time, model-based planning with a ground-truth world model can produce sophisticated bimanual behavior. As a result, it offers an alternative paradigm to circumvent the generalization challenges of pure learning-based methods, especially for contact tasks, where the manipulator-interaction physics pose a significant challenge. Furthermore, this model-based planning can be used to generate synthetic expert data using privileged simulator information [5]. We advocate for a-
 sampling-based optimization framework that leverages a high-fidelity, GPUaccelerated physics simulator as a predictive world model. Instead of learning a monolithic policy, our approach uses the world model to rapidly simulate thousands of potential future action sequences in parallel, selecting the optimal one at each time step. This model-based planning approach allows the robot to react dynamically to the current state of the world, including the precise location of obstacles and objects, enab-
ling robust performance in cluttered and novel situations.
At the core of our work is a customized Model Predictive Path Integral Control (MPPI) [6] algorithm. Specifically, we build upon [7] and embed a Quadratic Programme (QP) within the MPPI sampling routine to induce a high degree of smoothness in the sampled trajectories and reduce the effect of covariance tuning. This controller is guided by carefully designed, task-specific cost functions that encode the desired behavior, and it harnesses the massively parallel processing power of modern GPUs to ev-
aluate trajectory costs within a MuJoCo physics simulation. We demonstrate the efficacy of our method by solving significantly more challenging versions of tasks from the well-regarded PerAct2 benchmark [3]. For instance, we transform a simple ball-lifting task into a complex, long-horizon problem requiring the point-to-point transfer of a ball through a set of static obstacles. Our results show that the proposed model-based planning can be performed in real-time on commodity hardware, and we high-
light a clear path to successful sim-to-real transfer by leveraging unique features within the MuJoCo simulator.
To summarize, our key contributions are:
1) A novel sampling-based optimizer that can solve complex bimanual tasks.
2) A first-ever demonstration of sampling-based optimization on more complicated variants of some of the PerAct2 [3] benchmark tasks, which present difficulties for existing learning-based methods.
3) Evidence of real-time performance on commodity GPUs and a successful sim-to-real transfer methodology, establishing the practical viability of our approach. 4) A rigorous statistical analysis quantifying the sample complexity and robustness of our method, providing a clear understanding of its performance characteristics.
II. RELATED WORKS
We divide the survey of existing works into two categories: model-based and model-free approaches leveraging end-toend learning.
A. Model-Based Planning
Gradient-based trajectory optimization has been used in the past for bimanual tasks such as synchronous pick-andplace [8] and object transportation [9], [10]. However, these methods are specifically designed for a given task, and it is difficult to generalize them to a more complex setting. For example, the extension of [9] to handle obstacles would require a major overhaul. Similarly, gradient-based optimization is not suitable for tasks involving the making or breaking of contacts. In contrast, -
approaches based on sampling-based optimization [11], [12] can handle arbitrary tasks as long as it is possible to tractably rollout the environment/world-model for a given sequence of controls. Authors in [13] provide a way of improving sampling-based approaches. They learn an energy model that allows generating samples that respect different kinematic and collision constraints enforced by the bimanual setup. But [13] has not been applied to tasks such as “ball-lifting” that involves making or br-
eaking of contacts. Our Improvement: Our approach is inspired by the preliminary bimanual results of [11]. However, we consider a more powerful optimizer to handle a wider range of bimanual tasks, both in simulation and the real world. A unique feature of our approach is that the sampled velocity sequences are smooth(jerk-bounded). Our approach is also several times faster than [13] and allows for real-time control.
B. End-to-End Learning:
Approaches like [1], [2], [3] have shown remarkable success in bimanual tasks by learning directly from expert demonstrations. A key ingredient of imitation learning (IL) based approaches has been the policy representation in terms of diffusion [14] or flow-matching models [15]. However, there are a few core challenges that hinder the scalability of IL approaches. First, obtaining expert demonstration is challenging, especially in cluttered environments. Second, it is well known that neural networ-
k predictions typically struggle to satisfy constraints [16]. Finally, the best performing ILs, based on diffusion or flow-matching, have high inferencing times [1]. The expert data problem, in principle, can be solved by reinforcement learning RL. However, the current approaches are either designed for specific tasks [17] or consider simplified manipulator models [18]. Our Improvement: Our approach can handle constraints such as collision avoidance and can run between 10 − 16Hz even on a laptop G-
PU. Our approach can adapt to arbitrary tasks as long as they can be encoded by a well-defined cost function. Finally, our optimizer can also be crucial in adapting RL approaches like [19] to bimanual manipulation.

III. METHODS
Consider a bimanual setting where θ1,k, θ2,k represent the joint position at time-step k for the individual arms. Let θk = (θ1,k, θ2,k) represents the combined joint position. Let xk represent the environment state at step k. For example, xk can contain the Euclidean position of any specific point on the manipulator body, the position and velocity of any movable object in the environment, etc. With these notations in place, we define bimanual planning over a horizon H as the following optimization-
 problem:
arg θ ̇m0:iHn
X
k
c(θk, θ ̇ k, xk) (1a)
θk+1, xk+1 = f (θk, θ ̇ k, xk) (1b)
θ(r)
min ≤ θ(r)
k ≤ θ(r)
max (1c)
The cost function (1a) encodes the task requirements along with other constraints such as collision avoidance. We discuss the task-specific algebraic form of the costs in the later sections. The combined joint and task-space evolution is dictated by the function f , which can be thought of as our world-model, defined implicitly as a MuJoCo physics engine. To ensure smoothness in the joint motions and aid in sim2real transfer, we enforce bounds on the rth derivative of the joint trajectory. In our -
implementation r = {0, 1, 2, 3}, i.e, we enforce constraints up to jerk level on the joint motions. It is worth pointing out that our optimization solves for both the arm motions together. Thus, it automatically discovers an appropriate coordination strategy in a given task.
A. Sampling Based Optimization
Alg.1 presents our sampling-based optimizer for solving (1a)-(1c) built on top of MPPI. The process commences by initializing a Gaussian distribution, defined by a mean νm and covariance Σm, which represents the initial, broad search space for potential joint velocity inputs. Within a main loop that repeats for a set number of iterations, the optimizer systematically refines this search to find a highquality solution. In each cycle, we first draw a large batch of n candidate action sequences from -
its current probability distribution (line 6). Typically, these raw samples could be very noisy. Therefore, we project these samples onto the feasible set defined by the constraints (1c) (line 7). This projection step can be formulated as QP (2)-(3), and it is solved for all the samples in parallel and accelerated over GPUs.
θ ̇ = arg mθ ̇in
1
2 ∥θ ̇ −  ̃ ̇θ∥2
2 (2)
θ(r)
min ≤ θ(r)
k ≤ θ(r)
max (3)
With the valid and smooth joint trajectories obtained after projection, the algorithm then leverages a MuJoCo physics simulator to perform parallel “rollouts”, simulating the outcome of each velocity sequence to predict the resulting manipulator and environment states over time (line 8). Each of these simulated outcomes is subsequently evaluated using a cost function (line 9). In line 10, the algorithm identifies
Algorithm 1: Sampling-Based Optimizer to Solve (1a)-(1c)
1 M = Maximum number of iterations 2 Input: MuJoCo world model f . 3 Initiate mean νm, Σm, at iteration m = 0 for sampling control inputs θ ̇
4 for m = 1, m ≤ M, m + + do
5 Initialize CostList = []
6 Draw batch of n bimanual joint velocity sequences
( ̃ ̇θ1,  ̃ ̇θ2,  ̃ ̇θj, ....,  ̃ ̇θn) from N (νm, Σm)
7 QP based smoothing ∀j θ ̇ j = QP( ̃ ̇θj) // Using a QP based projection to ensure smoothness in the sampled trajectories
8 Compute n joint and state trajectory rollouts
θk+1,j , xk+1,j = f (θk,j , θ ̇ k,j ) // Parallely simulate the joint velocties to obtain the joint position of the arms and the combined task-space state of the arm and the environment.
9 Define cj = P
k c(θk,j , θ ̇ k,j , xk,j )
10 append each computed cj to CostList
11 EliteSet ← Select top ne samples of (θ ̇ ) with lowest cost from CostList.
12 (νm+1, Σm+1) ← Update distribution based on
EliteSet
13 end
14 return Joint velocity θ ̇ corresponding to the lowest cost in the EliteSet and νM , ΣM
a small subset of the top-performing sequences, known as the Elite Set, based on their low costs. This elite set is then used to update the parameters of the Gaussian distribution through (4a)-(4b), wherein η represents the so-called learning rate and β is the temperature parameter.
νm+1 = (1 − η)νm + η
Pj=ne
j=1 sj θ ̇ j
Pj=ne
j=1 sj
, (4a)
Σm+1 = (1 − η)Σm + η∆Σ (4b)
∆Σ =
Pj=ne
j=1 sj (θ ̇ j − νm+1)(θ ̇ j − νm+1)T
Ps=ne
s=1 sj
(4c)
sj = exp −1
β cj (4d)
This cycle of sampling, projecting, simulating, evaluating, and updating continues, progressively converging on an optimal region of the solution space. Upon completion of all iterations, the algorithm outputs the single best joint velocity sequence corresponding to the lowest cost in the final elite set along with the final νM , ΣM . We average the first few steps of the optimal joint velocity and execute it on the manipulators before invoking the next re-planning. Moreover, we warm-start the nex-
t planning cycle with νM , ΣM .
B. Role of QP
The Quadratic Program (QP) of (2)-(3) serves a dual purpose that goes beyond simply smoothing velocity samples

Fig. 2: Manipulator Arms in global frame.
from a Gaussian distribution. Critically, it eases the task of initializing the covariance matrix. This allows us to set a high noise level in the covariance matrix to encourage exploration, relying on the QP to find the optimal jerkbounded joint trajectory that best fits the sampled velocity sequence. Consequently, the QP facilitates robust exploration while preventing oscillatory manipulator motions. This approach is well-supported, as previous studies have shown that smoothness in the sampled s-
equences and their resulting optimal controls enhances the overall performance of the sampling optimizers such as MPPI [7], [20].
IV. APPLICATIONS
This section presents one of the main results of our paper. We consider more difficult versions of three tasks from the PerAct2 benchmark and derive cost functions that can guide the sampling-based optimizer of Alg.1 towards task completion.
A. Moving tray
This is a more complicated version of the tray-lifting task of the PerAct2 benchmark [3]. Here, the tray needs to be lifted and transported to a given goal pose. We divide the task into two phases: the pick and move phases. The former pertains to guiding the manipulators to the grasp location, while the latter is designed for the transportation of the tray. Let the end-effector pose of i-th manipulator be denoted as ei,k = (pi,k, qi,k), where pi,k and qi,k are respectively the position and orienta-
tion (as unit quaternions) of the manipulator and i = {1, 2}. Note that ei,k is part of the augmented environment state xk that is obtained by rolling out the velocity sequence on the MuJoCo simulator. With these notations in place, we define the tray-moving task through the following cost functions. a) Collision Cost
Let dk ∈ RB denote the concatenation of distances at timestep k between the two manipulators and B contact points. Collision avoidance is ensured if dk ≥ 0, ∀k. Define:
gk = −dk+1 + (1 − γ)dk, γ ∈ (0, 1)
Then our proposed collision cost is:
Cc =
H −2
X
k=0
max(gk, 0) +
H −1
X
k=0
1{dk<0} (5)
where 1 is an indicator function, which is one if the condition in the parentheses holds and zero otherwise. The second term is the conventional collision cost that penalizes penetration between the manipulator body and the environment. The first term is the so-called barrier function inspired by [21] that prevents dk from reaching the boundary of the infeasible region.
b) Joint Deviation Cost
Let θhome be a vector that denotes the home position of both the manipulators. We penalize deviation from this home position through the following cost.
Cθ =
H −1
X
k=0
∥θk − θhome∥F (6)
where ∥·∥F denotes the Frobenius norm. c) End-effector Vertical Alignment Cost
This cost penalizes deviations in the z coordinates (see Fig. 2) of the two manipulators, ensuring they remain at the same height at every time step.
Cz = ∥pz,1 − pz,2∥2 (7)
d) Relative Velocity Cost
Once the tray has been lifted, we want both the manipulators to move in a coordinated fashion to account for the fact that both the end-effectors are now connected to a rigid body. We model this requirement through the following cost:
Cv =
v u u t
H −1
X
k=0
((p1,k − p2,k) · (p ̇ 1,k − p ̇ 2,k))2 (8)
This cost forces the relative velocity between the endeffectors to be perpendicular to their relative position, ensuring coordinated motion that avoids stretching or compressing, which is essential for stably carrying a rigid object. e) Pick Position Cost
Let pgrasp, i denote the desired position at which the ith manipulator should grasp the tray for lifting. We define the following cost to guide the manipulators from their home position to the grasp position
Cp,pick = 1
2
H −1
X
k=0
∥p1,k − pgrasp, 1∥2+∥p2,k − pgrasp, 2∥2
(9)
f) Pick Orientation Cost
Let qgrasp, i denote the desired grasp orientation in the form of the unit quaternion. Then, the following cost is used to guide the manipulators to the right grasp orientation for lifting.
(10)
Cr,pick = 1
2
H −1
X
k=0
2 cos−1 |⟨q1,k, qgrasp,1⟩|
+ 2 cos−1 |⟨q2,k, qgrasp,2⟩|

g) End-effector Distance Cost
Let ltray be the dimension of the tray along which it is held by the manipulators during lifting. The following cost ensures that both arms maintain this distance while moving.
Cl =
H −1
X
k=0
(∥p1,k − p2,k∥2−ltray)2 (11)
h) Tray Position Cost
Let ptray,k be the position of the tray at time-step k. This is part of the augmented state vector xk that is obtained through the physics simulator. We want the tray to move to a target position given by ptarget and thus formulate the following cost.
Cp,tray =
H −1
X
k=0
∥ptray,k − ptarget∥F (12)
i) Tray Orientation Cost
In a similar manner, we formulate the following cost to place the tray in the orientation given by qtarget.
Cr,tray =
H −1
X
k=0
2 cos−1 |⟨qtray,k, qtarget⟩| (13)
Note that the tray is not an actuated body. Thus, its position and orientation can only be indirectly controlled through the manipulators.
j) Move Orientation Cost
During the move phase, we define some target end-effector orientations (qmove,i) for each manipulator. This is done to indirectly control the orientation of the tray during motion.
Cr,move = 1
2
H −1
X
k=0
2 cos−1|⟨q1,k, qmove1,k ⟩|
+ 2 cos−1|⟨q2,k, qmove2,k ⟩| (14)
k) Total Cost
The final cost for the tray-moving task is defined as :
C = wc Cc + wθ Cθ + wz Cz + wv Cv
+ wpick (wp,pick Cp,pick + wr,pick Cr,pick)
+ wmove (wl Cl + wp,tray Cp,tray
+ wr,tray Cr,tray + wr,move Cr,move) (15)
Please note wpick = 1, wmove = 0 during pick phase and wpick = 0, wmove = 1 during the move phase. The other w’s are manually tuned.
B. Lifting and Transporting ball
This task is an enhancement over the standard ball-lifting task of PerAct2 benchmark [3]. In this task, both manipulator needs to cooperatively lift a ball by applying forces on the ball through their end-effector and subsequently transport it to a given location while avoiding obstacles. Similar to the earlier “tray-moving”, this task is divided into two
phases: pick and move. The former is designed to position the manipulators to a location from where they can apply appropriate contact forces on the ball. The second phase is designed to ensure that the ball is not dropped during transportation.
a) Collision Cost
The collision cost is the same as (5) but calculated separately for pick and move phase as Cc,pick and Cc,move respectively. During the move phase, we remove the collision consideration between the ball and the manipulators. This is to ensure that the end-effectors are not repelled by the ball and instead press against its surface to apply contact forces. b) Joint Deviation Cost This is the same as (6).
c) End-effector Planar Alignment Cost
We want both the manipulators to apply contact forces on the ball at the same point in the yz plane (Refer Fig. 2). Thus, we formulate the following alignment cost between the manipulators, where piyz,k represents the yz component of pi
Cyz =
H −1
X
k=0
∥p1yz,k − p2yz,k∥F (16)
d) Relative Velocity Cost This is the same as (8)
e) End-effector Orientation cost
We define some target orientation at which the end-effector should come in contact with the ball. Subsequently, after lifting, the same end-effector orientation needs to be maintained during transporting the ball. Let q1∗, q2∗ be the target orientations in the form of unit quaternions, using which we formulate the following cost.
Cr = 1
2
H −1
X
k=0
2 cos−1 |⟨q1,k, q∗
1⟩| + 2 cos−1 |⟨q2,k, q∗
2⟩|
(17) f) End-effector Distance Cost
This is the same as (11) but with ltray replaced with the lball which is the distance between the end-effector-ball contact points. This cost ensures that a fixed offset of two arms along two points on the ball (not diametrically opposite) is maintained.
g) End-effector to Object (ball) Alignment Cost Define the midpoint of the two end-effectors:
ck = 1
2 (p1,k + p2,k).
We penalize deviation from the ball target location (with small vertical offset) while picking:
Ceef-obj =
H −1
X
k=0
∥ck − {pball − (0, 0, ε)}∥2 . (18)
where ε is a small vertical offset. where pball is the ball position before being picked. h) Object-to-Target Cost

Let ptarget be desired ball position. We formulate the following transportation cost for all
Cobj-targ =
H −1
X
k=0
∥ck + (0, 0, ε) − ptarget ∥2. (19)
i) Final Total Cost
C =wpick(wc Cc,pick + weef-obj Ceef-obj)
+ wmove(wc Cc,move + wobj-targ Cobj-targ) + wθ Cθ
+ wyz Cyz + wv Cv + wr Cr + wl Cl
(20)
The weights wpick and wmove are activated or deactivated in the same way as mentioned for the earlier task.
C. Hand-Over Task
This task is again taken from the PerAct2 benchmark [3] but made more complicated by the addition of static obstacles. We divide this task into three phases: pick, pass, and place. a) Collision Cost Same as (5)
b) Joint Deviation Cost Same as (6)
c) End-effector Planar Alignment Cost
While performing the handover in pass phase, we want both the manipulators to be aligned in the yz plane. Thus, we use the cost defined in (16).
d) Phase-Specific Position Costs
Let pobj, ppass,i, and ptarget be the desired positions for pick, pass, and place of the ith manipulator. For each arm i, we define
Pick: Cpick
p,i =
H −1
X
k=0
∥pi,k − (pobj + [0, 0, ε])∥2, (21)
Pass: Cpass
p,i =
H −1
X
k=0
|p(x)i,k − p(x)pass,i|, (22)
Place: Cplace
p,i =
H −1
X
k=0
∥pi,k − ptarget∥2. (23)
The combined position cost is
Cp =
2
X
i=1
wpick
i Cpick
p,i + wpass
i Cpass
p,i + wplace
i Cplace
p,i .
e) Phase-Specific Orientation Costs
For each phase, i.e., (pick, pass, and place) define a target unit quaternion qtarget. The geodesic quaternion distance is
C phase
r,i =
H −1
X
k=0
2 arccos |⟨qi,k, qtarget⟩| .
The combined orientation cost is
Cr =
2
X
i=1
wpick
i Cpick
r,i + wpass
i Cpass
r,i + wplace
i Cplace
r,i .
f) Total Cost
Fig. 3: Experimental Setup wherein real-world and simulation are tightly coupled with OptiTrack motion capture.
The overall cost is defined as
C = wc Cc + wθ Cθ + wpasswyz Cyz + wp Cp + wr Cr (24)
V. SIMULATION AND EXPERIMENTAL RESULTS
A. Implementation Details
Alg.1 was implemented in JAX with the GPU-accelerated MJX physics engine for receding horizon control. The simulation, featuring two UR5e manipulators with Robotiq grippers, uses a 0.1s time-step that was experimentally chosen to balance accuracy and planning time. We validate our approach with the following metrics. Success Metric
Success Rate (%) = Nsuccess
Ntotal
× 100 (25)
where Nsuccess is the number of successful runs and Ntotal is the total number of experiments of a task. Failure occurs when there is at least one collision, the task is not completed within 120s, or the ball falls in the “ball-lifting” task. Mean and Standard Deviation of Computation Time
t ̄comp = 1
Nsteps
Nsteps X
m=1
t(m)
comp,
σcomp =
v u u t
1
Nsteps
Nsteps X
m=1
t(m)
comp − t ̄comp
2
(26)
where t(m)
comp is the computation time for the mth planning step and Nsteps is the total number of re-planning needed for the task completion.
Mean and Standard Deviation of Task Time
t ̄task = 1
Nruns
Nruns X
i=1
t(i)
task,
σtask =
v u u t
1
Nruns
Nruns X
i=1
t(i)
task − t ̄task
2
(27)
where t(i)
task is the total time to complete the task in run i and Nruns = 20.

Fig. 4: Snapshot of all tasks. Top row: Manipulators lifting a ball while avoiding obstacles. Middle row: Manipulators picking a tray and placing it between two wall-like obstacles. Last row: Manipulators performing hand-over tasks amidst static obstacles. Note that the viewing angle for each snapshot is different. Refer to the accompanying videos for further details.
Fig. 5: Statistics of all tasks. (a) Success rate, (b) task time, and (c) computation time with respect to different batch sizes used in Alg.1.
Experimental Setup: A high-fidelity sim-to-real transfer was achieved by meticulously aligning the physical and simulated environments, with the simulation being continuously updated to reflect the real world. The implementation involved the following hardware and data pipeline (Fig. 3). A unified network was established by connecting both manipulators and a control laptop (PC2) to a single Wi-Fi router using Ethernet, ensuring reliable, low-latency command and feedback. The control laptop was res-
ponsible for running the MuJoCo simulation and our proposed planner. In addition, the control laptop was wirelessly connected to the same WiFi network as the PC1 that controlled the OptiTrack system, which broadcast the reception of the pose data of dynamic objects (obstacles, ball, tray, etc.) through ROS2 topics. The control laptop subscribed to these topics, integrating the incoming OptiTrack data directly into the simulation by updating the Mocap body features within MuJoCo. This mechanism syn-
chronized the simulation with the physical
workspace in real-time.
B. Qualitative and Quantitative Results
Our qualitative and quantitative results are presented in Figures 4-5, respectively. We evaluated our method on three challenging tasks, depicted in Fig. 4(a-d): lifting and transporting a ball over a barrier; (e-h): moving a tray to a goal, by avoiding wall-like obstacles; and (i-l): a hand-over task where one robot passes a cube to another amidst multiple obstacles. The hand-over task was also successfully demonstrated in a real-world experiment, with results available in the supplementary video-
s. To benchmark the performance of our approach, we randomized the goal poses in all tasks. The metrics were assessed over multiple batch sizes, i.e., the number of samples used in Alg.1, and statistics were collected over 20 runs for each task (Fig. 5). Note that ‘Ball lifting’ in Fig. 5 refers to the ball lifting and transportation task. Success Rate: Ball lifting and transporting reached nearly

100% success for batch sizes ≥ 1250. Tray moving maintained > 80% up to 500, dropped at 750, and then recovered with larger sizes. Handover showed a similar trend while peaking at 95% at batch size 1750. Task Time: Task time decreased with larger batch sizes for ball lifting and tray moving, while handover showed only marginal improvement. Computation Time: Computation time increased with batch size but stayed below 100ms for all tasks, ensuring real-time applicability; the handover task achieved-
 its peak success with computation just under 60ms. It is worth pointing out that the best success rate presented in Fig. 5 is already comparable to that achieved with best learning approaches in a simpler variant of the tasks in freespace [1]. Moreover, the computation time is below several baselines reported in [1].
C. Comparison with [1]
We present a preliminary comparison with the work of [1]. Since their method was trained in a different simulator, a fair quantitative benchmark is difficult. Instead, we qualitatively demonstrate our improvements on a ball-lifting task from [1], modified with an obstacle requiring a new lifting strategy, recreated in MuJoCo with a Franka-Panda arm. The qualitative results are summarized in Figure 1. As shown, the policy from [1] is able to partially adapt by navigating around the obstacle to appr-
oach the ball. However, it fails when attempting to lift the ball. In contrast, our approach successfully completes the task, with the manipulator lifting the ball while avoiding the obstacle. We repeated this experiment 10 times with a slightly perturbed obstacle position. Our approach succeeded 6 times as compared to just 2 for [1]. The comparison videos are shown in the accompanying video. Finally, this experiment also demonstrates that our approach can generalize to different manipulators.
VI. CONCLUSIONS AND FUTURE WORK
In this work, we presented a sampling-based optimization framework for complex bimanual manipulation, leveraging a GPU-accelerated physics simulator as a high-fidelity world model. Our approach utilizes a customized Model Predictive Path Integral (MPPI) controller, which embeds a Quadratic Program to ensure smooth, jerk-bounded trajectories. This unique integration facilitates robust exploration in highdimensional action spaces while preventing undesirable oscillations, a critical challenge in man-
ipulator control. We demonstrated the efficacy and robustness of our method on several challenging, long-horizon tasks—including moving a tray and transporting a ball through cluttered environments—that pose significant generalization difficulties for purely learning-based methods. Our experimental results confirm that the framework achieves high success rates, operates in real-time on commodity GPUs, and enables successful sim-to-real transfer, establishing it as a powerful and generalizable para-
digm for solving contact-rich robotic tasks in dynamic settings.
Our work can be extended by distilling the generated optimal trajectories into a policy network, which can then warm-start the optimizer in novel scenarios. Furthermore, our approach could serve as a building block in a TDMPC framework [19], where a learned value function would guide our sampling-based optimizer to further improve performance.
REFERENCES
[1] N. Gkanatsios, J. Xu, M. Bronars, A. Mousavian, T.-W. Ke, and K. Fragkiadaki, “3d flowmatch actor: Unified 3d policy for singleand dual-arm manipulation,” arXiv preprint arXiv:2508.11002, 2025. [2] G. Lu, T. Yu, H. Deng, S. S. Chen, Y. Tang, and Z. Wang, “Anybimanual: Transferring unimanual policy for general bimanual manipulation,” arXiv preprint arXiv:2412.06779, 2024.
[3] M. Grotz, M. Shridhar, Y.-W. Chao, T. Asfour, and D. Fox, “Peract2: Benchmarking and learning for robotic bimanual manipulation tasks,” in CoRL 2024 Workshop on Whole-body Control and Bimanual Manipulation: Applications in Humanoids and Beyond, 2024.
[4] K. Black, N. Brown, D. Driess, A. Esmail, M. Equi, C. Finn, N. Fusai, L. Groom, K. Hausman, B. Ichter et al., “π0: A visionlanguage-action flow model for general robot control,” arXiv preprint arXiv:2410.24164, 2024.
[5] D. Chen, B. Zhou, V. Koltun, and P. Kr ̈ahenbu ̈hl, “Learning by cheating,” in Conference on robot learning. PMLR, 2020, pp. 66–75. [6] G. Williams, A. Aldrich, and E. A. Theodorou, “Model predictive path integral control: From theory to parallel computation,” Journal of Guidance, Control, and Dynamics, vol. 40, no. 2, pp. 344–357, 2017. [7] E. M. Andrejev, A. Manoharan, K.-E. Unt, and A. K. Singh, “πmppi: A projection-based model predictive path integral scheme for smooth optimal control of f-
ixed-wing aerial vehicles,” IEEE Robotics and Automation Letters, 2025.
[8] F. J. Martı ́nez-Peral, J. B. Me ́ndez, D. Mronga, J. V. Segura-Heras, and C. Perez-Vidal, “Trajectory planning system for bimanual robots: Achieving efficient collision-free manipulation,” Robotics and Autonomous Systems, p. 105118, 2025.
[9] M. F. Karim, S. Bollimuntha, M. S. Hashmi, A. Das, G. Singh, S. Sridhar, A. K. Singh, N. Govindan, and K. M. Krishna, “Davil: Adaptive dual-arm manipulation with reinforcement learning and variable impedance control,” in 2025 IEEE International Conference on Robotics and Automation (ICRA). IEEE, 2025, pp. 11 896–11 903. [10] H. Hu and J. Cao, “Adaptive variable impedance control of dual-arm robots for slabstone installation,” ISA transactions, vol. 128, pp. 397408, 2022. [11] T. Howell, N. Gil-
eadi, S. Tunyasuvunakool, K. Zakka, T. Erez, and Y. Tassa, “Predictive sampling: Real-time behaviour synthesis with mujoco,” arXiv preprint arXiv:2212.00541, 2022.
[12] C. Pezzato, C. Salmi, E. Trevisan, M. Spahn, J. Alonso-Mora, and C. H. Corbato, “Sampling-based model predictive control leveraging parallelizable physics simulations,” IEEE Robotics and Automation Letters, 2025.
[13] H. Tong, Y. Zhang, S. Lueth, and G. Chalvatzaki, “Adaptive diffusion constrained sampling for bimanual robot manipulation,” arXiv preprint arXiv:2505.13667, 2025.
[14] M. Janner, Y. Du, J. B. Tenenbaum, and S. Levine, “Planning with diffusion for flexible behavior synthesis,” arXiv preprint arXiv:2205.09991, 2022.
[15] Y. Lipman, R. T. Chen, H. Ben-Hamu, M. Nickel, and M. Le, “Flow matching for generative modeling,” arXiv preprint arXiv:2210.02747, 2022. [16] P. L. Donti, D. Rolnick, and J. Z. Kolter, “Dc3: A learning method for optimization with hard constraints,” in International Conference on Learning Representations.
[17] Y. Cui, Z. Xu, L. Zhong, P. Xu, Y. Shen, and Q. Tang, “A task-adaptive deep reinforcement learning framework for dual-arm robot manipulation,” IEEE Transactions on Automation Science and Engineering, vol. 22, pp. 466–479, 2024. [18] Y. Chen, Y. Geng, F. Zhong, J. Ji, J. Jiang, Z. Lu, H. Dong, and Y. Yang, “Bi-dexhands: Towards human-level bimanual dexterous manipulation,” IEEE Transactions on Pattern Analysis and Machine Intelligence, vol. 46, no. 5, pp. 2804–2818, 2023.

[19] N. Hansen, X. Wang, and H. Su, “Temporal difference learning for model predictive control,” in International Conference on Machine Learning, PMLR, 2022.
[20] B. Vlahov, J. Gibson, D. D. Fan, P. Spieler, A.-a. Agha-mohammadi, and E. A. Theodorou, “Low frequency sampling in model predictive path integral control,” IEEE Robotics and Automation Letters, vol. 9, no. 5, pp. 4543–4550, 2024. [21] J. Zeng, B. Zhang, and K. Sreenath, “Safety-critical model predictive control with discrete-time control barrier function,” in 2021 American Control Conference (ACC). IEEE, 2021, pp. 3882–3889.

---

## Processing Information

- **Processing Library:** Zotero PDFWorker
- **Processing Date:** 2026-02-10T18:16:44.120Z
- **Text Length:** 36228 characters
- **Success:** Text extraction completed
- **PDF Library Used:** Zotero PDFWorker
- **Pages Processed:** 9 of 9
