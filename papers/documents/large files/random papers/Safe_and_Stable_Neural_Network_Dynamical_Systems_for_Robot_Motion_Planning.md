# PDF Document: Binny et al. - 2025 - Safe and Stable Neural Network Dynamical Systems for Robot Motion Planning.pdf

**File Path:** Binny et al. - 2025 - Safe and Stable Neural Network Dynamical Systems for Robot Motion Planning.pdf

**Processed Date:** 2026-02-10T18:15:17.134Z

**File Size:** 2074.97 KB

**Total Pages:** 9

**Extracted Pages:** 9

**PDF Library:** Zotero PDFWorker

**Attachment Item ID:** 3329

**Title:** Safe and Stable Neural Network Dynamical Systems for Robot Motion Planning

**Collection:** Large Files > Random Papers

---

## Extracted Text Content

Safe and Stable Neural Network Dynamical Systems for Robot Motion
Planning
Allen Emmanuel Binny1∗, Mahathi Anand2∗, Hugo T.M. Kussaba3, Lingyun Chen2, Shreenabh Agrawal4, Fares J. Abu-Dakka5, Abdalla Swikir6
Abstract— Learning safe and stable robot motions from demonstrations remains a challenge, especially in complex, nonlinear tasks involving dynamic, obstacle-rich environments. In this paper, we propose Safe and Stable Neural Network Dynamical Systems S2-NNDS, a learning-from-demonstration framework that simultaneously learns expressive neural dynamical systems alongside neural Lyapunov stability and barrier safety certificates. Unlike traditional approaches with restrictive polynomial parameteriza-
tions, S2-NNDS leverages neural networks to capture complex robot motions providing probabilistic guarantees through split conformal prediction in learned certificates. Experimental results on various 2D and 3D datasets—including LASA handwriting and demonstrations recorded kinesthetically from the Franka Emika Panda robotvalidate S2-NNDS effectiveness in learning robust, safe, and stable motions from potentially unsafe demonstrations.
I. INTRODUCTION
Learning from Demonstration (LfD) is a paradigm in robotics to teach robots the essence of a task through multiple demonstrations [1]. This enables a robot to generalize a learned task to new environments, allowing safe navigation under perturbations. A key advantage of LfD is its accessibility to end-users without technical expertise, as it requires minimal time and effort to adapt a robot’s capabilities to diverse environments. A prominent approach in LfD is to encode demonstrations as a stable -
Dynamical System (DS) [2]. This involves recording the robot’s end effector or joint positions and velocities and then solving an optimization problem to find a stable DS that accurately replicates these demonstrations. Although the demonstrations capture the essence of the task, the inherent stability of the DS ensures generalization and robust performance under perturbations, enhancing data efficiency by reducing the need for additional demonstrations. However, a critical limitation of many LfD -
methods is that the optimization problem do not generally consider the obstacles that may be placed in the environment. Consequently, the resulting robot motion may not be safe. This highlights
*The authors contributed equally. 1Allen Emmanuel Binny is with the Indian Institute of Technology Kharagpur, 2Mahathi Anand and Lingyun Chen are with the Chair of Robotics and System Intelligence, Technical University of Munich, 3Hugo T.M. Kussaba is with the University of Brasilia, 4Shreenabh Agrawal is with the Carnegie Mellon University, 5Fares J. Abu-Dakka is with the Mechanical Engineering Program at New York University Abu Dhabi, 6Abdalla Swikir is with the Mohamed bin Zayed University of A-
rtificial Intelligence (MBZUAI) Emails: allenebinny@kgpian.iitkgp.ac.in, {mahathi.anand,lingyun.chen}@tum.de, hugo.kussaba@unb.br, shreenaa@andrew.cmu.edu, fa2656@nyu.edu, abdalla.swikir@mbzuai.ac.ae
the need to integrate safety constraints directly into the LfD framework alongside stability guarantees. In this paper, we propose a novel framework for learning a DS that is not only stable, ensuring convergence to a target equilibrium point under perturbations, but also safe, guaranteeing avoidance of static obstacles in the environment. Our learning-based algorithm simultaneously identifies neural network-based DS that mimics the provided demonstrations while co-synthesizing formally verified n-
eural stability and safety certificates, characterized by Lyapunov and barrier functions, respectively. The entire DS is learned offline, avoiding the need for any real-time modification of DS.
A. Related Work
Dynamical properties such as stability and safety can be certified without the explicit trajectory computation utilizing the so-called certificates. For instance, Lyapunov functions can prove the asymptotic stability of the equilibrium points of a system [3], while barrier functions can ensure that a system avoids undesirable states [4]. Therefore, a common strategy is to synthesize these certificates concurrently with the DS [5]–[9]. A standard approach for this synthesis is Sum-Of-Squares (SOS) -
optimization [10], which reformulates the stability and/or safety constraints as SOS constraints [11]–[13]. However, SOS techniques are generally limited to systems with polynomial dynamics and can be overly conservative. In fact, there are globally asymptotically stable polynomial DSs that lack a polynomial Lyapunov function [14]. Furthermore, high-degree polynomials in SOS programs are prone to numerical problems, such as floating point errors and poorly conditioned problem formulations, which c-
an undermine the reliability of the results [15].
Neural network (NN)-based certificate synthesis offers a scalable alternative to the limitations of SOS-based approaches [16]–[19]. By parameterizing certificates as NNs, these methods take advantage of the universal approximation properties of NNs [20] to find less conservative certificates for more complex motions [21]. However, learningbased certificate synthesis introduces intrinsic errors that can compromise formal guarantees. Thus, formal verification of the learned certificates is necessary-
, e.g., using Satisfiability Modulo Theories (SMT) solvers [16], [17], [22] or using Lipschitz continuity arguments [18]. However, these approaches are either not scalable to deep neural networks or are highly conservative and require dense grid-based sampling of the domains of interest. Recently, conformal prediction [23]
arXiv:2511.20593v1 [cs.RO] 25 Nov 2025

Fig. 1: Overview of Safe and Stable Neural Network Dynamical Systems (S2-NNDS) Framework. Neural dynamics are first learned from expert demonstrations and iteratively refined to satisfy Lyapunov and barrier constraints using counterexamples. Verification with conformal prediction then provides formal statistical guarantees on safety and stability.
has emerged as a promising, sample-efficient technique for providing Provably Approximately Correct (PAC) guarantees for the formal verification of learning-based algorithms, including applications in safe planning [24], formal abstractions [25], and reachability [26]. Conformal prediction was also used in the context of control barrier functions in [27]. This approach can quantify the validity of stability and safety constraints with high sample efficiency, which lends itself as a promising appro-
ach toward the formal verification of learned certificates. Despite the progress in NN-based certificate learning, few works have explored integrating it with the LfD framework. Most existing works in LfD either address only stability [5][7] or consider obstacles in an online setting [9], [28]–[30]. These approaches modulate DS in real-time to deal with dynamic obstacles; however, altering the DS can potentially deviate the robot’s motions from initial demonstrations. Furthermore, while [9] consid-
ers an NN-based approach to learn safe and stable DS, they do not synthesize any certificates and consider them fixed and known, resulting in conservatism. Moreover, their approach is affected by potential conflicts between stability and safety constraints, resulting in a compromise between safety and stability. Finally, because robots operate under strict real-time control frequency constraints, incorporating online optimization within the control loop significantly increases the computational bu-
rden. The most closely related work to our paper is [8], where the authors proposed obstacle Avoidance with Barrier-Certified polynomial Dynamical Systems (ABC-DS), an SOS-based approach to identify safe and stable DS against static obstacles.
B. Contributions
This paper makes the following contributions:
1) We propose S2-NNDS, a novel offline approach to generate time-invariant, safe, and stable DSs directly from demonstrations without requiring online modifications, alleviating the aforementioned challenges. S2-NNDS jointly learns the DS and its corresponding neural certificates even from unsafe demonstrations.
2) Our approach uses expressive neural network representations and incorporates split conformal prediction to provide probabilistic guarantees on the correctness of the learned stability and safety certificates. An overview is illustrated in Fig. 1. 3) We validate S2-NNDS through experiments in 2D and 3D environments, including a publicly available handwriting dataset and kinesthetic demonstrations collected using a Franka Emika Panda robot and compare them with [8]. The results show that our meth-
od reliably learns safe and stable motions with minimal restrictions on the obstacle configurations, and is competitive with existing approaches.
II. PRELIMINARIES
A. Notations
Let R and N denote the sets of real and non-negative integers, respectively. The subscripts specify subsets of R and N, e.g., R≥0 is the set of non-negative reals. We use Rn for a real space of n-dimension and Rm×n for the space of m × n real matrices. The cardinality of a finite set X is denoted by |X|. For a vector (denoted in lowercase) x ∈ Rn, xi is its ith element, 1 ≤ i ≤ n. The Euclidean norm of x is ∥x∥. For a differentiable function f : X → Y, where sets X, Y ⊆ Rn, ∇f denotes its
gradient, i.e., ∇f (x) = (∂f /∂x1(x), . . . , ∂f /∂xn(x))⊤. The notation ◦ and id denote the composition of functions and the identity function, respectively. The indicator function IX (x) is 1 if x ∈ X and 0 otherwise. The ceiling and floor functions are ⌈·⌉ and ⌊·⌋, respectively. The regularized
incomplete Beta function is Ic(a, b) =
Rc
0 ta−1(1−t)b−1dt
B(a,b) ,
where B(a, b) = R 1
0 ta−1(1 − t)b−1dt is the beta function. Lastly, x (denoted in bold letters) represents both continuous trajectories and distinct sequences. The distinction will be made clear from the context.
B. DS for Motion Planning
The LfD framework for robot motion planning aims to learn a DS described by the following differential equation
x ̇ (t) = f (x(t)), (1)

where x(t) ∈ X is the state variable (e.g., Cartesian position of the robot’s end-effector within its workspace X) at t ∈ R≥0. f : X → X is a continuous non-linear function that describes the state velocity of the robot. We assume that (1) has a unique solution for every initial condition x(0) ∈ X. Given a set of N demonstrations, D = {(xij, x ̇ ij)}N,M
i=1,j=1,
where each demonstration consists of M time-discretized positions xi = xi(t1), xi(t2), . . . , xi(tM ) and corresponding velocities x ̇ i = x ̇ i(t1), x ̇ i(t2), . . . ,  ̇xi(tM ) , t0 = 0, tM > 0, i ∈ {1, . . . , N }. The goal of this work is to learn a function f such that the resultant DS in (1) not only approximates the demonstrations D but also converges to a goal state x⋆ while avoiding obstacles in X. Under nominal conditions, i.e., in the absence of external disturbances or obstacles, one -
can learn a DS by simply minimizing the Mean Square Error (MSE) between f and  ̇x, i.e.,
mfin
1 MN
N
X
i=1
M
X
i=1
∥x ̇ ij − f (xij)∥2 (2)
However, since f is learned using only a finite number of demonstrations, the DS is not robust, i.e., under any external perturbations during deployment, the trajectory may not converge to the required goal x⋆. In addition, since obstacles are not considered during training, the resulting trajectories may not be safe. Therefore, to ensure robust convergence and obstacle avoidance, we must incorporate formal certificates of stability and safety. It is a well-established that the stability of a DS c-
an be certified using Lyapunov functions [3], which are formulated below.
Proposition 1 (Asymptotic Stability): Consider the DS in (1) with an isolated equilibrium point x⋆ ∈ X. A continuously differentiable real-valued function V : X → R is a Lyapunov function, where V (x⋆) = 0, V ̇ (x⋆) = 0, if for all x ∈ X \ {x⋆} the following conditions are satisfied:
V (x) > 0, V ̇ (x) = ∇V (x)T f (x) < 0. (3)
The existence of a Lyapunov function guarantees that the system is locally asymptotically stable within X and ∃Xi ⊆ X s.t. ∀x(0) ∈ Xi, ∃t ∈ R≥0 with x(t) = x⋆. The proof is standard and a direct application of the Lyapunov theory [3, Theorem 4.1], and is thus omitted. Similarly, barrier functions were first introduced in [4] to certify the safety of DSs. Proposition 2 (Safety): Consider the DS in (1) with an initial set X0 ⊆ X, i.e., x(0) ∈ X0 and an unsafe set Xu ⊆ X. A continuously differentiabl-
e real-valued function B : X → R is a barrier function if ∃ ε > 0 such that:
B(x) ≤ 0, ∀x ∈ X0, (4)
B(x) > 0, ∀x ∈ Xu, (5)
∇B(x)⊤f (x) ≤ 0, ∀x ∈ {x ∈ X | |B(x)| ≤ ε}. (6)
The existence of a barrier function guarantees that the system is safe, i.e., x(t) ∈/ Xu for all t ∈ [0, T ] for any T ∈ N. The proof of Proposition 2 can be found in [8]. Learning a DS while guaranteeing stability and safety can, therefore,
be expressed by minimizing the MSE in (2) subject to the stability and safety conditions defined by Propositions (3)(6). Specifically, this can be formulated as follows1:
mfin
1 MN
N
X
i=1
M
X
j=1
∥x ̇ ij − f (xij )∥2
s.t. f (0) = 0,
conditions from Prop. (3)–(6) hold. (7)
Finding a solution to (7) is computationally intractable, since it requires optimizing infinite-dimensional function spaces to find functions f, V, and B. In practice, one needs to obtain suitable parameterizations of the functions. Conventional approaches consider linear parameter-varying dynamics with quadratic Lyapunov functions [5]–[7] or polynomial dynamics with polynomial certificate functions [8]. However, these methods have significant drawbacks. The rigid structure of these parameterizati-
ons limits the flexibility needed to represent highly nonlinear and complex motions. They also lack the versatility to handle obstacles with complex shapes, e.g., [8] only considers semi-algebraic sets. Furthermore, these parameterizations often lead to highly complex, possibly nonconvex, optimization problems that are computationally demanding to solve. To alleviate these challenges, we propose a neural network parameterization of the above optimization problem. We characterize the functions f, V-
, and B as NNs and learn them simultaneously by constructing an appropriate loss functions to enforce (7).
III. PROPOSED METHODOLOGY
In this section, we introduce our Safe and Stable Neural Network Dynamical Systems (S2-NNDS) framework to solve the optimization problem in (7). The core idea is to represent the DS and the certificate functions using NNs and train them concurrently using carefully designed loss functions. Once the networks are trained, we use conformal prediction to validate the learned certificates.
A. Neural Network Parameterizations
We parameterize the function f in (1) with a fully connected neural network of K layers, denoted fθ(x). The NN consists of n0 = n inputs, nk = n outputs, and K −2 hidden layers, with each hidden layer i ∈ {1, . . . , K −2} containing ni hidden neurons. More precisely, consider
fθ(x) = lK−1 ◦ . . . ◦ l0(x), (8)
where each layer li : Rni → Rni+1 is defined as
li(x) = σi(Wix + bi), ∀i ∈ {0, . . . , K − 1}.
Here, Wi ∈ Rni+1×ni and bi ∈ Rni+1 are the weight matrix and bias vector, respectively, collectively denoted by the parameters θ = [W ; b]. σi : Rni+1 → Rni+1 represents the element-wise application of an appropriate activation
1Without loss of generality, we assume x⋆ = 0, which can be achieved by translating the coordinate system. We also assume the demonstrations end at the equilibrium, i.e., (xiM ,  ̇xiM ) = (0, 0).

function (e.g., ReLU, Tanh, ELU, etc.). To ensure fθ(0) = 0 as required in (7), we set all bias terms bi = 0, ∀i ∈ {0, . . . , K − 1}.
The certificate functions V and B are also parameterized as NNs, Vθ′ and Bθ′′ , similarly to (8), with parameters θ′ and θ′′, respectively. However, some distinctions are made to enforce certain properties on these functions. For example, to ensure Vθ′ (0) = 0 we set the bias terms in Vθ′ to 0 according to Proposition 1. No such restriction is placed for Bθ′′ . Moreover, to ensure continuous differentiability of the certificates (as required for conditions (3) or (6)), differentiable activation fu-
nctions are considered for both Vθ′ and Bθ′′ . Finally, we set σK−1 = id for these networks.
To train these neural networks, we define a set of loss functions. The primary loss is the MSE loss from (2), augmented by the incorporation of the constraints (3)–(6). Given a demonstration set D consisting of |D| = M N elements of robot’s positions and velocities (x, x ̇ ) ∈ D (possibly shuffled), the loss function corresponding to the objective function is formally defined as the MSE between the demonstrated velocities x ̇ and the predicted velocities from the neural network function fθ(x):
LMSE(θ) = 1
|D|
X
(x,x ̇ )∈D
∥x ̇ − fθ(x)∥2. (9)
To construct a candidate Lyapunov function Vθ′ , we first sample a set of i.i.d samples from the workspace X as S = {xi ∈ X | i ∈ {1, . . . , S}}. We then define a hinge-like loss using a leaky ReLU function in [16], which is defined as
LRα(s) =
(
s, if x ≥ 0,
αs, otherwise, α > 0,
where s is the variable of interest. Then, the loss function corresponding to condition (3) is obtained as
Llyap(θ, θ′) = 1
|S |
X
x∈S
λl1LRα(δl1 − Vθ′ (x))
+ λl2LRα(∇Vθ′ (x)fθ(x) − δl2), (10)
where λl1, λl2 are loss weights and δl1, δl2 are small positive tolerances for numerical stability. This loss Llyap(θ, θ′) penalizes violations of the Lyapunov conditions (3) while promoting them to take on values where (3) is satisfied with a large margin.
Similarly, for the barrier function Bθ′′ , we sample points from the initial, S0 = S ∩ X0, and the unsafe set, Su = S ∩ Xu. Moreover, to enforce condition (6), an additional term is included in the loss function2. Consequently,
2The last loss term is applied over the entire domain X rather than just the region {x ∈ X | |B(x)| ≤ ε} to enhance robustness during training.
the loss function for the barrier certificate is defined as
Lbar(θ, θ′′) = 1
|S0|
X
x∈S0
λb2LRα(Bθ′′ (x) + δb2)
+1
|Su|
X
x∈Su
λb3LRα(δb3 − Bθ′′ (x))
+1
|S |
X
x∈S
λb1LRα(∇Bθ′′ (x)fθ(x) − δb1), (11)
where λb1, λb2, λb3 represent the weighting coefficients for each term, and δb1, δb2, δb3 are the corresponding tolerance parameters. Note that these weights, tolerance parameters, and α are hyperparameters that must be predetermined. Minimizing the loss functions described in (9)–(11) aims to yield a suitable DS along with candidate stability and safety certificates for the optimization problem (7). However, minimization of losses such as (3) and (11) does not inherently guarantee the satisfactio-
n of conditions (3)–(6) throughout the entire continuous domain X. Furthermore, even over the sampled dataset, strict satisfaction guarantees are not achieved, as positive loss terms can be canceled out by larger negative terms. Consequently, the functions obtained through this training process offer neither empirical nor formal guarantees on their validity. To address this limitation, we propose to leverage conformal prediction techniques to obtain formal PAC-like guarantees on the validity of sa-
fety and stability certificates.
B. Validation of Certificates via Conformal Prediction
Conformal prediction [31] is an uncertainty quantification technique that is predominantly used in the context of machine learning to obtain statistically rigorous confidence intervals for model predictions. Its core principle involves assigning nonconformity scores to a calibration set of independently drawn data samples. These scores are then used to obtain reliable predictions for new test data drawn from the same underlying distribution. In this paper, inspired by [25]–[27], we propose a split-
 conformal prediction-based algorithm. This algorithm aims to establish probabilistic lower bounds on the satisfaction of conditions (3)–(6) by the learned candidate certificates Vθ′ and Bθ′′ across the entire workspace X. To formalize this, consider a learned DS fθ as in (1), alongside the certificate functions Vθ′ and Bθ′′ . We define a calibration set C = {xi ∈ X | i ∈ {1, . . . , Nver} consisting of Nver i.i.d samples. For each x ∈ C, we compute a nonconformity score function as s(x) = maxq∈{1-
,...,5} ρq(x), which is defined as the maximum violation across all relevant conditions; where ρq(x) represents the violation of the qth condition. Specifically, ρ1(x), ρ2(x) correspond to the stability conditions in (3) formulated such that ρq(x) ≤ 0 indicates satisfaction. Similarly, ρq(x) for q ∈ {3, 4, 5} can be expressed in an analogous form to represent violations of the barrier conditions (6). For instance, ρ3(x) = B(x)IX0 (x) could represent a violation related to the initial set. A higher-
 value of ρq(x) directly signifies a greater violation of the corresponding condition (3)–(6). Consequently, obtaining

s(x) ≤ 0 for any randomly drawn test point x ∈ X would rigorously validate the certificate functions. Building upon this intuition, we present the following theorem, adapted from [26], [27], which provides a quantifiable measure of satisfaction for conditions (3)–(6).
Theorem 3 (Verification via Conformal Prediction): Let fθ be a learned DS and Vθ′ and Bθ′′ be the corresponding candidate Lyapunov and barrier functions, respectively. Consider a calibration set C = {x1, . . . , xNver } consisting of Nver i.i.d. samples. Given confidence levels α, β, ε ∈ (0, 1) such that the following condition holds for the regularized incomplete beta function I1−ε(Nver − l + 1, l) ≤ β, where l = ⌊(Nver)(α)⌋. Then, with a confidence of at least 1 − β, the probability that a rando-
mly drawn test point x ∈ X satisfies s(x) ≤ p is at least 1 − ε:
Px∈X (s(x) ≤ p) ≥ 1 − ε, (12)
where p is the ⌈(Nver+1+1)(1−α)⌉
Nver
th quantile of the scores s(x), ∀x ∈ C.
The proof of Theorem 3 is analogous to the methodology presented in [26]. p ≤ 0 indicates the satisfaction of conditions (3)–(6) for some sufficiently high confidence levels (1 − β) and (1 − ε), while p > 0 indicates the presence of safety violations [27]. Therefore, to obtain a statistically significant guarantee on the validity of the safety and stability certificates, it is imperative to ensure that p ≤ 0. For a more intuitive explanation of formal verification via conformal prediction, we refe-
r the readers to [26]. The general algorithm to verify the validity of these safety conditions is detailed in Algorithm 1. Algorithm 1 Certificate Verification using Conformal Prediction
function CP(fθ, Vθ′ , Bθ′′ , Nver, ε) verified ← false C ← Sample Nver i.i.d states from X S=∅
for x ∈ C do
S.insert(s(x))
S ← Sort S in non-decreasing order
α, β ← Solve I1−ε(Nver − l + 1, l) ≤ β
p ← ⌈(Nver+1+1)(1−α)⌉
Nver
th quantile of S if p ≤ 0 then
verified ← true return p, 1 − β, verified
C. The S2-NNDS Algorithm
The S2-NNDS algorithm for learning safe and stable DS is structured in two distinct phases: training and verification. The training phase begins with an initial training of fθ using the MSE loss (9) on the demonstration dataset D. However, this initial dynamics model does not inherently guarantee safety or stability, as the corresponding certificates may not yet exist. Consequently, fθ is further finetuned within a counterexample guided scheme, concurrently learning the Lyapunov and barrier certif-
icate functions. This is done by training networks with respect to composite loss
Algorithm 2 The S2-NNDS Algorithm
Require: X, X0, Xu, D, S,
Ncex, Nver, epochs, iters, ε
S0, Su ← S ∩ X0, S ∩ Xu Train fθ subject to loss (9) Initialize Vθ′ , Bθ′′ for i ≤ iters do for j ≤ epochs do
Train fθ, Vθ′ , Bθ′′ w.rt. losses (9)–(11)
Scex ← Sample Ncex i.i.d states from X nocex, Sviol ← number and set of counterexamples violating conditions (3)–(6) if nocex = 0 then break else
S0 ← S0 ∧ Sviol, Su ← Su ∧ Sviol, S ← S ∧ Sviol
if nocex = 0 then
p, 1 − β, verified ← CP(fθ, Vθ′ , Bθ′′ , Nver, ε)
return fθ, Vθ′ , Bθ′′ , p, 1 − β, verified
return none
functions (9)–(11) with the aim of achieving verification guarantees based on samples with minimal data. Initially, a small finite sample dataset S ⊆ X is established, and NNs fθ, Vθ′ and Bθ′′ are trained simultaneously for a specified number of epochs. Following this, a few counterexamples from a randomly generated larger finite set Scex ⊂ X that violate conditions (3)–(6) are iteratively added to S and the networks are re-trained until no further counterexamples are found. At this stage, only st-
atistical verification guarantees are available for the |Scex| samples. To obtain stronger formal statistical guarantees on the trained candidate certificates, Algorithm 1 is applied as a posterior verification step. The general algorithm is formalized in Algorithm 2.
IV. SIMULATIONS AND EXPERIMENTAL RESULTS
Our experimental evaluation of the S2-NNDS algorithm is organized into the following categories:
a) The performance of our algorithm is illustrated on a representative subset of the 2D LASA handwriting datasets3 as well as a 3D dataset4 in an environment with single obstacles, b) We provide a detailed performance analysis and benchmark comparisons of our algorithm with the ABC-DS algorithm [8] for the case of 2D handwriting datasets, and c) We evaluate the performance for demonstrations recorded kinesthetically from the Franka Emika Panda robots [32] in the presence of multiple obstacles.
a) 2D and 3D Datasets: First, we consider 8 datasets corresponding to different shapes in the LASA handwriting dataset, which is a standard benchmarking dataset used in the literature [7]–[9], and offers an simplification to several
3Publicly available at https://bitbucket.org/khansari/ lasahandwritingdataset 4Available at https://github.com/nbfigueroa/ds-opt

industrial tasks such as cutting, carving, and welding [33]. The data are normalized to reside within X = [−1, 1]2, and without loss of generality, it is assumed that the attractor point coincides with the origin. The neural networks corresponding to fθ, Vθ′ and Bθ′′ are trained and certified using Algorithm 2 with high confidence levels, specifically 1 − ε, 1 − β ≥ 0.99. The simulation results presented in Fig. 2 show multiple key advantages of the S2-NNDS approach5. From the evaluation: (i) our-
 approach can handle arbitrarily complex obstacle configurations without imposing any restrictions on the shape’s convexity, star-shapedness, or semialgebraicity, as required in [8], [28]. This is illustrated by a diamond-like obstacle that is considered for the C-Shape dataset. In particular, our algorithm only requires an analytical closed-form expression for the unsafe set. (ii) S2-NNDS can generate safe trajectories even with potentially unsafe demonstrations, as demonstrated by the Angle and -
Worm datasets. Here, the learned trajectories closely resemble the shape of the original demonstrations for all the initial conditions, though the dynamics have been modified to ensure safety. (iii) the sub-zero-level set {x ∈ Rn | B(x) ≤ 0} of the barrier function, which defines the safe set, outlined by the green regions in the figures, fit tightly between the obstacles and the demonstrations, showing that the certificates learned by our approach are non-conservative. As long as the robot lands -
in the green region when perturbed, safe navigation is formally guaranteed. Furthermore, we extend our evaluation to a 3D C-shaped motion. Consistent with the 2D results, and with very high confidence levels of 1 − ε, 1 − β ≥ 0.99, we find that the learned trajectories are not only safe and stable, but also closely mimic the demonstrations, as shown in Fig. 3. However, as is evident from the figure, a larger number of demonstrations are required to learn safe, generalizable trajectories due to the-
 curse of dimensionality.
b) Performance Analysis and Benchmark Comparisons: The performance of our S2-NNDS algorithm is evaluated by measuring the mean, the standard deviation (SD) of the mean square error (MSE), and dynamic time warping (DTW) distance between the demonstrations and the learned trajectories (i.e., the value of our objective function (2)), on a set of test data corresponding to the LASA handwriting sets. While MSE measures the average squared, point-point distance between two trajectories, DTW measures the-
 optimal alignment between two trajectories [34]. Therefore, MSE provides a good measure for analyzing how close the DS predicts motion w.r.t to the demonstrations, while DTW measures the similarity between the path shapes. First, we compare the results obtained in Fig. 2 with ABC-DS in [8], which characterizes the dynamical system as well as certificates as polynomial functions and solves a bilinear optimization problem [8] using PENBMI, a proprietary, commercial solver to solve bilinear problems-
. However, since we observed that PENBMI performs reliably only with
5The models used in the figures were obtained on an Ubuntu 20.04 LTS system with 16GB RAM equipped with NVIDIA GeForce RTX 4050 - 6GB GPU.
Fig. 2: Neural DS generated by our proposed approach with obstacles for the LASA handwriting and robot demonstration datasets. Five demonstrations (blue) were used. The learned trajectories (pink) are simulated for two initial conditions within the initial set, and the robot path (brown) is obtained for another initial point. The region in green describes the safe set, while the arrows indicate the flow of the DS.
Fig. 3: Neural DS generated by our proposed approach with obstacles for the 3D C-shaped motion. Ten demonstrations were used. The legend follows from Fig. 2. specifically crafted semi-algebraic sets with at most one constraint (e.g. a hyper-rectangular initial set ai ≤ xi ≤ bi, i ∈ {1, 2} requires four semi-algebraic constraints), we utilized ellipsoidal approximations for any non-ellipsoidal sets. The obtained results are provided in Table I.6 Then, we also consider the LASA handwriting datasets -
and the obstacle configurations utilized in [8]. The obtained metrics are provided in Table II. The results show that the performance of our approach is competitive with that obtained by ABC-DS, particularly in cases involving highly nonlinear motion shapes with high rate of change in motion, and complex obstacle configurations, where it demonstrates superior performance with lower MSEs as well as DTW. Moreover, ABC-DS fails to provide
6The ABC-DS results were obtained after executing the algorithm for a maximum of 100 iterations and validated with numerical tolerance (primal residual) of 0.001, as the code consistently terminated with a maximum iteration error.

Fig. 4: Drawing platform with Franka Panda Robot any results when demonstrations are unsafe. Additionally, we observed that the S2-NNDS algorithm may provide less conservative barrier functions, as illustrated in Fig. 5 and Table III, by the larger safe sets that lie tightly between the demonstrations and obstacles. However, a certain tradeoff between MSE, DTW, and conservatism of the barrier function is reasonable. Note that, in general, ABC-DS can only handle semi-algebraic obstacle configurati-
ons, whereas our approach is more general and can handle non-semialgebraic sets. For example, one cannot use diamond-like obstacles with ABC-DS, but our approach indeed handles this case well, as demonstrated by the C-Shaped motion in Fig. 2. Furthermore, we show a scenario in Fig. 6 where S2-NNDS succeeds and ABC-DS fails due to the fact that any semi-algebraic approximation (e.g. ellipsoid) leads to infeasibility as demonstrations become unsafe. Thus, S2-NNDS is more suitable for complex obstacl-
e configurations in tightly-spaced, cluttered environments. However, we must mention that while ABC-DS provides absolute guarantees on global asymptotic stability, S2-NNDS only provides statistical formal guarantees for local asymptotic stability (c.f. Section V).
c) Demonstrations from Franka Emika Robot: To further evaluate the validity of our approach, we tested our approach on kinesthetically recorded demonstrations from the Franka Emika robot [32]. To test the adaptability of S2-NNDS, we introduced 3 obstacles around the robot’s intended path. Once again, the learned trajectories closely follow the demonstrations while avoiding the obstacles, as shown in Fig. 2. Robot Experiments: To assess the practical feasibility of the proposed framework in a real -
setup, we utilize the robot drawing system [35] depicted in Fig. 4 to draw shapes from the LASA dataset7 The robot Z-axis and orientation are governed by an impedance controller to achieve consistent pen-strokes while preventing excessive force on the pen and paper. Additionally, passive interaction control from [36] is utilized to follow the integral curves of the DS generated by our method, enabling drawing along the X and Y axes while maintaining a passive relation between external forces and t-
he robot velocity. The 3D C-shaped motion is also validated
7The drawing robot in the drawing system is a 7-DoF Franka Emika robot [32], controlled via the Franka Control Interface at a frequency of 1 kHz. The control loop is executed on a computer equipped with an Intel Core i5-12600K CPU running Ubuntu 22.04 LTS with a real-time kernel version 5.15.55-rt48.
Fig. 5: Comparison of the learned trajectories and barrier functions obtained via S2-NNDS and ABC-DS, respectively. Barrier functions learned via our approach generally fit more tightly around the obstacles and offer less conservative results, as can be seen from the area computed in Table III.
Fig. 6: Sine-like motion learned in a cluttered environment with a large sine-shaped obstacle. While S2-NNDS produces reasonable motion, ABC-DS leads to infeasibility as any computationally tractable semi-algebraic approximation (e.g. ellipsoid) leads to an intersection between the demonstrations and the obstacles.
on the robot, with the translation axes being controlled by the DS generated by our method and orientation governed by an impedance controller. The resultant motion of the robot for the considered datasets (2D and 3D datasets) is recorded and plotted in Fig. 2 and Fig. 3, respectively.
V. DISCUSSION
Despite the competitive performance of the S2-NNDS approach for safe LfD, some limitations persist. First, since NNs can only be trained on bounded domains, S2-NNDS considers only local asymptotic stability in the domain X instead of global asymptotic stability that is certified in previous literature [5], [8]. As a result, one can only prove the existence of some subset of X from which the trajectories shall converge asymptotically toward the origin (equilibrium point). Specifically, if the syste-
m is initialized outside of the region of attraction, which is unknown, then the trajectories are no longer guaranteed to converge to the origin. Moreover, if the trajectories deviate outside of this region under perturbations, the trajectories may also no longer converge. However, by enforcing radial unboundedness in Lyapunov functions as soft constraints or careful tuning of the NNs, it is possible to train neural dynamical systems that converge with empirical guarantees. Secondly, S2-NNDS learn-
s safe and stable neural dynamical systems offline and thus can only deal with static obstacles. Our offline algorithm is motivated

Sine S-Shape C-Shape Worm Angle G-Shape P-Shape N-Shape MSE: S2-NNDS 0.015 0.016 0.019 0.026 0.044 0.019 0.008 0.084 MSE: ABC-DS 0.023 0.014 0.029 −− −− 0.041 0.027 0.020 SD: S2-NNDS: 0.065 0.063 0.077 0.074 0.109 0.080 0.045 0.1937 SD: ABC-DS: 0.0762 0.061 0.096 −− −− 0.108 0.0705 0.081 DTW: S2-NNDS: 0.062 0.234 0.288 0.071 0.341 0.737 0.667 0.157 DTW: ABC-DS: 0.132 0.336 0.381 −− −− 0.8617 0.95 0.190
TABLE I: MSE, SD and DTW of the learned trajectories for the LASA Handwriting Datasets corresponding to Fig. 2, compared also with ABC-DS [8]. Note that ellipsoidal approximations for the initial and obstacle configurations were utilized for ABC-DS, and −− denotes cases where no satisfactory results were obtained. Sine S-Shape Worm P-Shape MSE: S2-NNDS 0.035 0.014 0.014 0.016 MSE: ABC-DS 0.025 0.012 0.066 0.048 SD: S2-NNDS 0.11 0.067 0.068 0.06 SD: ABC-DS 0.078 0.060 0.116 0.109 DTW: S2-NNDS 0.068-
6 0.119 0.068 0.845 DTW: ABC-DS 0.101 0.521 0.089 0.532
TABLE II: Comparisons of MSE, SD and DTW of the learned trajectories for the obstacle configurations in [8].
Sine S-Shape Worm P-Shape Safe Area: S2-NNDS 2.02 3.871 3.865 3.59 Safe Area: ABC-DS 2.68 3.768 3.101 3.13
TABLE III: Quantitative area comparisons of the safe regions generated by S2-NNDS and ABC-DS for obstacle configurations used in [8].
by the fact that many scenarios of robotic tasks involve only static obstacles, e.g. in warehouse environments with fixed structures. Lastly, like many existing NN-based learning algorithms, S2-NNDS is sensitive to the hyperparameters such as learning rates, loss weights and tolerances. Moreover, our algorithm requires an initial training of the dynamics fθ, which determines the performance of the overall algorithm. Solutions to these challenges will be considered in the future.
ACKNOWLEDGMENTS
This work was partly funded by the German Research Foundation (DFG, Deutsche Forschungsgemeinschaft) as part of Germany’s Excellence Strategy – EXC 2050/1 – Project ID 390696704 – Cluster of Excellence “Centre for Tactile Internet with Human-in-the-Loop” (CeTI) of Technische Universita ̈t Dresden. We also acknowledge the financial support of the Bavarian State Ministry for Economic Affairs, Regional Development, and Energy (StMWi) and the Lighthouse Initiative KI.FABRIK, Phase 1: Infrastructure an-
d the research and development program under no. DIK0249. https://kifabrik.mirmi.tum.de/
REFERENCES
[1] A. Billard, S. Calinon, R. Dillmann, and S. Schaal, Robot Programming by Demonstration. Berlin, Heidelberg: Springer Berlin Heidelberg, 2008, pp. 1371–1394. [2] A. Billard, S. Mirrazavi, and N. Figueroa, Learning for Adaptive and Reactive Robot Control: A Dynamical Systems Approach. MIT Press, 2022. [3] H. K. Khalil, Nonlinear Systems, ser. Pearson Education. Prentice Hall, 2013. [4] S. Prajna and A. Jadbabaie, “Safety verification of hybrid systems using barrier certificates,” in Proc. Int. W-
orkshop Hybrid Syst.: Comput. Control. Springer, 2004, pp. 477–492. [5] S. M. Khansari-Zadeh and A. Billard, “Learning stable nonlinear dynamical systems with Gaussian mixture models,” IEEE Trans. Robot., vol. 27, no. 5, pp. 943–957, 2011. [6] N. Figueroa and A. Billard, “A physically-consistent Bayesian nonparametric mixture model for dynamical system learning,” in Proc. Conf. Robot Learn. PMLR, 2018, pp. 927–946. [7] N. Figueroa and A. Billard, “Locally active globally stable dynamical systems: -
Theory, learning, and experiments,” Int. J. Robot. Res., vol. 41, no. 3, pp. 312–347, 2022. [8] M. Schonger, H. T. M. Kussaba, L. Chen, L. Figueredo, A. Swikir, A. Billard, and S. Haddadin, “Learning barrier-certified polynomial dynamical systems for obstacle avoidance with robots,” in Proc. IEEE Int. Conf. Robot. Autom., 2024, pp. 17 201–17 207.
[9] F. Nawaz, T. Li, N. Matni, and N. Figueroa, “Learning Complex Motion Plans using Neural ODEs with Safety and Stability Guarantees,” in Proc. IEEE Int. Conf. Robot. Autom., 2024, pp. 17 216–17 222.
[10] G. Blekherman, P. A. Parrilo, and R. R. Thomas, Semidefinite optimization and convex algebraic geometry. SIAM, 2012.
[11] P. Giesl and S. Hafstein, “Review on computational methods for Lyapunov functions,” Discrete Contin. Dyn. Syst. – B, vol. 20, no. 8, pp. 2291–2331, 2015. [12] A. Papachristodoulou and S. Prajna, “A tutorial on sum of squares techniques for systems analysis,” in Proc. Amer. Control Conf., vol. 4, 2005, pp. 2686–2700. [13] A. Clark, “Verification and Synthesis of Control Barrier Functions,” in Proc. IEEE Conf. Decis. Control, 2021, pp. 6105–6112.
[14] A. A. Ahmadi, M. Krstic, and P. A. Parrilo, “A globally asymptotically stable polynomial vector field with no polynomial Lyapunov function,” in Proc. 50th IEEE Conf. Decis. Control and Eur. Control Conf. IEEE, 2011, pp. 7579–7580. [15] P. Roux, Y.-L. Voronin, and S. Sankaranarayanan, “Validating numerical semidefinite programming solvers for polynomial invariants,” Form. Methods Syst. Des., vol. 53, pp. 286–312, 2018. [16] A. Abate, D. Ahmed, M. Giacobbe, and A. Peruffo, “Formal synthesis of -
Lyapunov neural networks,” IEEE Control Syst. Lett., vol. 5, no. 3, pp. 773–778, 2021. [17] A. Abate, D. Ahmed, A. Edwards, M. Giacobbe, and A. Peruffo, “FOSSIL: a software tool for the formal synthesis of Lyapunov functions and barrier certificates using neural networks,” in Proc. Int. Conf. Hybrid Syst: Comput. Control, 2021, pp. 1–11.
[18] M. Anand and M. Zamani, “Formally Verified Neural Network Control Barrier Certificates for Unknown Systems,” IFAC-PapersOnLine, vol. 56, no. 2, pp. 2431–2436, Jan. 2023. [19] J. Liu, Y. Meng, M. Fitzsimmons, and R. Zhou, “Physics-informed neural network Lyapunov functions: PDE characterization, learning, and verification,” Automatica, vol. 175, no. 112193, 2025. [20] A. R. Barron, “Approximation and estimation bounds for artificial neural networks,” Machine Learning, vol. 14, no. 1, pp. 115–1-
33, 1994. [21] F. B. Mathiesen, S. C. Calvert, and L. Laurenti, “Safety certification for stochastic systems via neural barrier functions,” IEEE Control Syst. Lett., vol. 7, pp. 973–978, 2022. [22] H. Zhao, N. Qi, L. Dehbi, X. Zeng, and Z. Yang, “Formal synthesis of neural barrier certificates for continuous systems via counterexample guided learning,” ACM Trans. Embed. Comput. Syst., vol. 22, no. 5s, pp. 1–21, 2023. [23] V. Vovk, “Conditional validity of inductive conformal predictors,” in Proc. -
Asian Conf. Mach. Learn. PMLR, 2012, pp. 475–490.
[24] L. Lindemann, M. Cleaveland, G. Shim, and G. J. Pappas, “Safe Planning in Dynamic Environments Using Conformal Prediction,” IEEE Robot. Autom. Lett., vol. 8, no. 8, pp. 5116–5123, Aug. 2023. [25] R. Coppola, A. Peruffo, L. Lindemann, and M. Mazo, “Scenario approach and conformal prediction for verification of unknown systems via data-driven abstractions,” in Proc. Eur. Control Conf., 2024, pp. 558–563.

[26] A. Lin and S. Bansal, “Verification of neural reachable tubes via scenario optimization and conformal prediction,” in Proc. 6th Annu. Learn. Dyn. Control Conf. PMLR, 2024, pp. 719–731.
[27] M. Tayal, A. Singh, P. Jagtap, and S. Kolathaya, “CP-NCBF: A conformal prediction-based approach to synthesize verified neural control barrier functions,” 2025, arXiv preprint arXiv:2503.17395. [28] S. M. Khansari-Zadeh and A. Billard, “A dynamical system approach to realtime obstacle avoidance,” Auton. Robots, vol. 32, no. 4, pp. 433–454, 2012. [29] L. Huber, A. Billard, and J.-J. Slotine, “Avoidance of Convex and Concave Obstacles With Convergence Ensured Through Contraction,” IEEE Robot. A-
utom. Lett., vol. 4, no. 2, pp. 1462–1469, 2019. [30] L. Huber, J.-J. Slotine, and A. Billard, “Avoiding Dense and Dynamic Obstacles in Enclosed Spaces: Application to Moving in Crowds,” IEEE Trans. Robot., vol. 38, no. 5, pp. 3113–3132, 2022. [31] A. N. Angelopoulos and S. Bates, “A gentle introduction to conformal prediction and distribution-free uncertainty quantification,” 2021,
arXiv preprint arXiv:2107.07511. [32] S. Haddadin, S. Parusel, L. Johannsmeier, S. Golz, S. Gabl, F. Walch, M. Sabaghian, C. J ̈ahne, L. Hausperger, and S. Haddadin, “The Franka Emika robot: A reference platform for robotics research and education,” IEEE Robot. Autom. Mag., vol. 29, no. 2, pp. 46–64, 2022. [33] Y. Liu and Y. Zhang, “Toward welding robot with human knowledge: A remotely-controlled approach,” IEEE Trans. Autom. Sci. Eng., vol. 12, no. 2, pp. 769–774, 2015. [34] S. Salvador and P. Ch-
an, “Toward accurate dynamic time warping in linear time and space,” Intell. Data Anal., vol. 11, no. 5, p. 561–580, 2007. [35] L. Chen, A. Swikir, and S. Haddadin, “Drawing Elon Musk: A robot avatar for remote manipulation,” in Proc. IEEE/RSJ Int. Conf. Intell. Robots Syst. IEEE, 2021, pp. 4244–4251. [36] K. Kronander and A. Billard, “Passive interaction control with dynamical systems,” IEEE Robot. Autom. Lett., vol. 1, no. 1, pp. 106–113, 2016.

---

## Processing Information

- **Processing Library:** Zotero PDFWorker
- **Processing Date:** 2026-02-10T18:15:17.134Z
- **Text Length:** 44178 characters
- **Success:** Text extraction completed
- **PDF Library Used:** Zotero PDFWorker
- **Pages Processed:** 9 of 9
