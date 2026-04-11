# PDF Document: Mei et al. - 2025 - Sparse Kalman Identification for Partially Observable Systems via Adaptive Bayesian Learning.pdf

**File Path:** Mei et al. - 2025 - Sparse Kalman Identification for Partially Observable Systems via Adaptive Bayesian Learning.pdf

**Processed Date:** 2026-02-10T18:15:24.287Z

**File Size:** 4354.15 KB

**Total Pages:** 36

**Extracted Pages:** 36

**PDF Library:** Zotero PDFWorker

**Attachment Item ID:** 3347

**Title:** Sparse Kalman Identification for Partially Observable Systems via Adaptive Bayesian Learning

**Collection:** Large Files > Random Papers

---

## Extracted Text Content

Sparse Kalman Identification for Partially Observable Systems
via Adaptive Bayesian Learning
Jilan Mei ∗ and Tengjie Zheng † and Lin Cheng ‡ and Shengping Gong § and Xu Huang ¶ School of Astronautics, Beihang University, Beijing, 102206, China State Key Laboratory of High-Efficiency Reusable Aerospace Transportation Technology, Beijing, 102206, China
Sparse dynamics identification is an essential tool for discovering interpretable physical
models and enabling efficient control in engineering systems. However, existing methods rely
on batch learning with full historical data, limiting their applicability to real-time scenarios
involving sequential and partially observable data. To overcome this limitation, this paper
proposes an online Sparse Kalman Identification (SKI) method by integrating the Augmented
Kalman Filter (AKF) and Automatic Relevance Determination (ARD). The main contributions
are: (1) a theoretically grounded Bayesian sparsification scheme that is seamlessly integrated
into the AKF framework and adapted to sequentially collected data in online scenarios; (2)
an update mechanism that adapts the Kalman posterior to reflect the updated selection of the
basis functions that define the model structure; (3) an explicit gradient-descent formulation
that enhances computational efficiency. Consequently, the SKI method achieves accurate
model structure selection with millisecond-level efficiency and higher identification accuracy,
as demonstrated by extensive simulations and real-world experiments (showing an 84.21%
improvement in accuracy over the baseline AKF).
I. Introduction
D
ynamics identification is a fundamental methodology for uncovering the underlying physical laws and is essential
for control and decision-making in engineering systems [1–3]. The growing complexity of modern systems
has brought increasing attention to data-driven methods for dynamics identification. These methods offer flexibility
and capability to model highly nonlinear behaviors without explicit first-principles knowledge, and have been widely
applied across diverse domains, including fluid dynamics [4–7], hypersonic aerodynamics [8–10], adaptive control of
drones [11–13], and even neurodynamics in brain–machine interfaces [14, 15]. Motivated by these advances, this work
focuses on addressing the corresponding challenges of data-driven dynamics identification.
Data-driven identification methods can be broadly categorized into two classes: non-parametric methods and
∗Ph.D. Candidate, School of Astronautics, zb2515202@buaa.edu.cn. †Ph.D. Candidate, School of Astronautics, ZhengTengjie@buaa.edu.cn. ‡Corresponding Author, Associate Professor, School of Astronautics, chenglin5580@buaa.edu.cn. §Professor, School of Astronautics, gongsp@buaa.edu.cn. ¶Associate Professor, School of Astronautics, xunudt@126.com.
arXiv:2511.18051v1 [eess.SY] 22 Nov 2025

parametric methods. Non-parametric methods, free from prior structural knowledge, have demonstrated accurate
and flexible capabilities in modeling complex systems. Typical approaches include Deep Neural Network (DNN),
Radial Basis Function Neural Network (RBFNN), and Gaussian Processes (GP). The DNN methods describe the
unknown mappings of the dynamical equations through deep neural networks, enabling the capture of highly nonlinear
dynamics [16–19]. Similarly, the RBFNN methods use a single hidden layer of localized radial basis functions to
describe the unknown mappings, enabling fast training and effective approximation of nonlinear dynamics [20, 21].
Moreover, the GP methods model unknown dynamical mappings as distributions over functions, enabling both prediction
and uncertainty quantification, which is crucial for adaptive control [22–24]. Despite these advantages, non-parametric
methods often require substantial training time and computational resources, and their limited interpretability restricts
their applicability in safety-critical scenarios. In contrast, parametric identification methods integrate prior structural
knowledge with data to determine the system dynamics. Typically, these methods represent unknown dynamical
mappings as a linear combination of basis functions, with basis functions selected based on expert knowledge,
transforming the dynamics identification into a data-driven parameter estimation problem. When the dynamics can
be constructed as a regressive problem, Recursive Least Squares (RLS) methods can be directly applied for efficient
parameter estimation. When the system is partially observable, the Augmented Kalman Filter (AKF) framework
augments the weight parameters to state space, enabling joint estimation with the full system states [25–27]. When time
delays are present in the system, frequency-domain methods offer advantages by providing robust parameter estimation
through the analysis of system frequency responses [28, 29]. Despite these advantages, a fundamental challenge arises in
the selection of the basis functions: a basis set that is overly simplistic may result in insufficient accuracy (underfitting),
whereas an excessively complex basis increases the risk of overfitting. Therefore, the judicious selection of basis
functions is crucial to simultaneously ensure both model accuracy and generalization capability, as illustrated in Fig. 1.
1.5 1.0 0.5 0.0 0.5 1.0 1.5
0.50
0.25
0.00
0.25
0.50
0.75
1.00
1.25
1.50 True x2 Prediction (mean) 95% Confidence interval Noisy samples
(a) Underfitting
1.5 1.0 0.5 0.0 0.5 1.0 1.5
0.50
0.25
0.00
0.25
0.50
0.75
1.00
1.25
1.50 True x2 Prediction (mean) 95% Confidence interval Noisy samples
(b) Overfitting
1.5 1.0 0.5 0.0 0.5 1.0 1.5
0.50
0.25
0.00
0.25
0.50
0.75
1.00
1.25
1.50 True x2 Prediction (mean) 95% Confidence interval Noisy samples
(c) Sparse Identification
Fig. 1 Illustration of polynomial fitting to a quadratic function: (a) underfitting due to an overly simple basis, (b) overfitting resulting from an excessively complex basis, and (c) sparse identification yielding an accurate and parsimonious model.
To address this trade-off in the selection of basis functions, sparse identification has emerged as an important
2

approach. By driving the weight parameters of irrelevant basis functions to zero, these methods remove redundant
functions from the candidate set, enabling a dynamic balance between precision and parsimony. One classical category
is the penalization-based method, which promotes sparsity by explicitly imposing regularization on the weights of the
basis functions during optimization. For example, the Sparse Identification of Nonlinear Dynamics (SINDy) enforces
sparsity by imposing L1-regularization on the weights of the basis functions, thus retaining only the most relevant
basis functions [6, 7, 30, 31]. Alternatively, Bayesian regression methods have gained increasing attention for their
principled probabilistic framework, which enables uncertainty quantification while inherently supporting sparse selection.
Particularly, Automatic Relevance Determination (ARD) [32–34] generalizes the concept by assigning individual
Gaussian priors to each weight parameter. This formulation allows the model to automatically infer the relevance
of each basis function through adaptive adjustment of its prior variance, leading to finer sparsity control. Beyond
these two approaches, a variety of other methods have also been introduced into the field of sparse identification. The
Perron-Frobenius operator methods [35, 36] and cluster-based reduced-order methods [37, 38] enhance modeling sparsity
and flexibility through data-driven operator representations while remaining sensitive to dimensionality and noise.
Notably, reinforcement learning-based methods have also achieved progress in dynamical equation discovery [39–41].
For example, the Bi-level Identification of Equations (BILLIE) [40] achieves state-of-the-art results in dynamical
equation discovery. Nevertheless, its trial-and-error-based training approach incurs substantial computational costs.
Overall, although existing sparse identification methods have achieved notable progress, several limitations still
remain:
1) Sequential data scenario: Most sparse identification algorithms rely on previously collected historical datasets
for batch training, which is computationally expensive and prevents efficient adaptation to sequentially arriving
data. As a result, their application in online scenarios is limited.
2) Partially observable conditions: In practical applications, systems are usually partially observable and noisy.
Conventional methods typically assume access to accurate, full-state observations, which limits their direct
applicability in practical applications.
To address these limitations, this paper proposes a Sparse Kalman Identification (SKI) method that establishes a
unified Bayesian sparsification framework based on the Augmented Kalman Filter (AKF). The SKI method seamlessly
integrates Kalman recursive estimation and ARD-based sparsification into a single probabilistic framework, enabling
dynamic model structure learning from sequential data. Specifically, to handle nonlinear and partially observable
conditions, an augmented Unscented Kalman Filter (UKF) [42, 43] is employed to ensure stable and accurate estimation
of the system states and model parameters. Simultaneously, an online ARD-based sparsification mechanism is developed,
which adaptively determines the relevance of basis functions by updating their prior variances in a Bayesian manner.
The main contributions are summarized as follows:
1) Online ARD-based sparsification scheme integrated with AKF: A theoretically grounded online sparsification
3

mechanism is developed based on the Augmented Kalman Filter (AKF), enabling relevance learning of basis
functions directly from sequential data without relying on batch training. This design allows the model to
adaptively achieve sparse structure selection in online scenario.
2) Kalman-Filter-like posterior update mechanism for model structure adaptation: To ensure that the learned
relevance of basis functions can reflect the updated selection of the model structure, a Kalman-Filter-like posterior
update mechanism is established, allowing the estimated states and model parameters to adapt dynamically to the
updated ARD relevance.
3) Explicit gradient-descent formulation for efficient online updating: To enhance computational efficiency, an
explicit gradient-descent formulation is derived for relevance updating, supporting online sparse identification
with millisecond-level efficiency.
Both simulation studies and real-world quadrotor experiments have been conducted to validate the effectiveness of
the proposed method. The results demonstrate that, across three different sparsity selection tasks, the proposed Sparse
Kalman Identification (SKI) method successfully identifies the relevant basis functions from a redundant candidate set,
whereas the baseline algorithms fail to do so. Moreover, in the benchmark experiment, the proposed method outperforms
the baseline approaches in terms of identification accuracy, achieving an 84.21% improvement over the best baseline
algorithm, while maintaining comparable computational efficiency (2.49 ms per step). These advantages make the
method well-suited for practical online modeling and control scenarios.
The remainder of this paper is organized as follows. Section II provides a problem formulation, introducing the
general formulation of nonlinear system identification under partial observation and reviewing representative methods.
Section III details the Sparse Kalman Identification (SKI) method, including the state-augmented UKF and the online
ARD-based sparsification method. Section IV presents experimental validation through simulation studies and real-world
quadrotor experiments. Finally, Section V summarizes the main contributions of the research.
II. Problem Formulation
This section formulates the problem of dynamics identification for nonlinear and partially observable systems.
Several representative data-driven methods and their typical implementations are briefly reviewed, followed by a
discussion of the motivation for the proposed method.
A. Formulation of the Dynamics Identification Problem
Mathematically, a nonlinear dynamical system is typically described by the following discrete-time state-space
model:
4

xt+1 = F(xt , ut , f (xt , ut )) + wt
y
t = h(xt) + vt
(1)
where xt ∈ Rdx and ut ∈ Rdu denote the system state and input at time t, respectively. The function F : Rdx ×Rdu ×Rd f →
R
dx represents the state transition function, which may be nonlinear, and the function f : Rdx → Rdf specifically
indicates the unknown and potentially nonlinear term within the state transition, where d f is the dimension of the
unknown term. In the observation equation, h : Rdx → Rdy denotes the known observation function that may provide
partial measurements (the full state xt cannot be directly inferred from the observation yt ∈ Rdy ). Finally, the process
noise wt ∈ Rdx and measurement noise vt ∈ Rdy are assumed to be zero-mean Gaussian, i.e., wt ∼ N (0, Q) and
v
t ∼ N (0, R).
B. Related Works and Issues
For data-driven modeling approaches, it is typically assumed that system observation data over a time horizon
are available for model identification, denoted as y1:t = [y1, y2, . . . , yt ]. In non-parametric data-driven methods, for
example, the Deep Neural Network (DNN)-based methods, the unknown dynamics f (·) are generally approximated
by a parameterized neural network, i.e. f (·) ≈ fDNN (·). Alternatively, Gaussian Processes (GP) regression offers a
non-parametric approach for modeling the unknown dynamics. In this framework, f (·) is modeled as a stochastic
process with a specified mean function m : Rdx → Rd f and covariance function K : Rdx × Rdx → Rd f ×d f , i.e.,
f (·) ∼ GP (m(·), K (·, ·)). The covariance function K (·, ·) is often chosen as a Radial Basis Function (RBF) kernel,
capturing smoothness and correlation in the data. Model training involves computing the posterior distribution over
functions conditioned on the observed data, enabling probabilistic predictions and uncertainty quantification [22, 23].
Despite the flexibility and expressive power, non-parametric data-driven methods typically require large volumes of
training data and substantial computational resources for training. Consequently, they are often impractical for real-time
applications.
On the other hand, parametric identification methods typically approximate the unknown function f (·) as a linear
combination of predefined basis functions. The weight parameters θ ∈ Rdθ of the basis functions are then identified by
data-driven methods (dθ is the number of basis functions), resulting in the following representation:
x
t+1 = F(xt , ut , Φ(xt , ut )T θ) + wt
y
t = h(xt) + vt
(2)
where Φ(xt , ut ) = [φi (xt , ut )]dθ
i=1 is a column vector containing the evaluations of candidate basis functions φi :
R
dx × Rdu → Rd f at the state xt and input ut . In such parametric frameworks, dynamics identification is thus
5

achieved by estimating θ. Methods such as Recursive Least Squares (RLS), Augmented Kalman Filter (AKF) and
frequency-domain approaches can be directly employed to perform the data-driven estimation of θ [26, 28]. However,
as the system dynamics become more complex, a large number of basis functions are required to ensure sufficient
modeling accuracy. This expansion may lead to overfitting and increased sensitivity to noise when the data is insufficient.
To address these issues, sparse identification methods have been developed to automatically select the most relevant
basis functions [6, 32, 33, 44]. As a representative example, the Sparse Identification of Nonlinear Dynamics (SINDy)
framework assumes that a system’s dynamics can be approximated as a sparse linear combination of candidate basis
functions [6, 7]. For a fully observable state vector xk ∈ Rdx and control input uk ∈ Rdu at sampled time t = k, the
canonical formulation of the Sparse Identification of Nonlinear Dynamics (SINDy) method approximates the system
dynamics as
X¤ ≈ Ψ( X, U) Ξ (3)
where X¤ ∈ RN ×dx stacks the estimated state derivatives x¤T
k across all N sampled data points. The matrix Ψ( X, U) ∈
R
N ×dΨ denotes the library matrix, whose k-th row Ψk,: = ψ (xk, uk)T contains the evaluations of a predefined set of
dΨ candidate basis functions, ψ (·) : Rdx × Rdu → RdΨ , at the k-th data sample. The coefficient matrix Ξ ∈ RdΨ×dx
encodes the linear weights that combine the basis functions to reconstruct the system dynamics, where the i-th column
ξ (i) = Ξ:,i corresponds to the coefficients governing the evolution of the i-th state component. The sparse identification
objective is to determine the most parsimonious representation of the dynamics, such that only the most relevant
basis functions are retained in each column of Ξ. Given the sampled dataset {(xk, uk, x¤k)}N
k=1, SINDy estimates the
coefficients by solving an independent sparse regression problem for each state dimension i = 1, . . . , dx:
min
ξ (i) ∈RdΨ
X¤:,i − Ψξ (i) 2
2 + λi ∥ξ (i) ∥1 (4)
where X¤:,i ∈ RN denotes the vector of time derivatives for the i-th state component, and λi > 0 is a regularization
parameter controlling the sparsity level of the solution. Eq. (4) is equivalent to a column-wise regression with l1
regularization, and alternative structured regularization schemes (e.g., group sparsity across columns) can be employed to
enforce shared support among multiple state dimensions. However, several critical limitations prevent direct application
of classical SINDy to real-world scenarios. First, SINDy operates as a batch algorithm that depends on historical state
data for each update. Therefore, it is not well suited for online learning, in which data arrive sequentially. Second,
SINDy assumes full observation of the system state. In cases of partially observable systems, accurate construction of
Ψ and estimation of x¤k become infeasible.
To address these limitations, this paper proposes a new online sparse identification method, termed Sparse Kalman
Identification (SKI). The method enables joint estimation of system states and weight parameters for nonlinear systems
6

under noisy and partial observations, while incorporating ARD-based sparsification to prune irrelevant basis functions.
The main contributions and algorithmic improvements are presented in the following section.
III. Implementation of the SKI for Online Dynamics Identification
This section proposes the detailed implementation of the Sparse Kalman Identification (SKI) method to achieve
real-time dynamics identification. The method includes the AKF-based online parameter estimation algorithm to
handle partially observable conditions, the online ARD-based relevance learning mechanism to achieve sparsification
through adapting prior variances, the Kalman-Filter (KF)-like posterior update mechanism to attain the updated model
parameters and states estimation, and the explicit gradient-descent formulation for efficient computation.
A. AKF-Based Online Parametric Identification
To enable real-time parametric identification for partially observable systems, this work introduces the Augmented
Kalman Filter (AKF) for parameter estimation. In this framework, the vector of weight parameters θ is augmented into
the state space to form an augmented state vector x ̄t = [xT
t , θT ]T . This formulation allows the AKF to estimate both the
system state and the parameters simultaneously within a unified recursive filtering process. Since the AKF inherits
the structure of the standard Kalman Filter, its performance depends on how the nonlinearities in the state transition
and observation models are handled. To accommodate potentially strong nonlinear dynamics, nonlinear extensions
of the AKF are adopted, including the Extended Kalman Filter (EKF) and the Unscented Kalman Filter (UKF). The
discrete-time parametric identification model for the augmented state is thus formulated as follows:
x ̄t+1 = F ̄ (x ̄t , ut ) +
       
w
t
0
       
F ̄ (x ̄t , ut ) =
       
F(xt, ut, Φ(xt, ut)Tθ)
θ
       
(5)
where the F ̄ (·) represents the discrete-time augmented state transition function, and Φ(xt , ut ) = [φi (xt , ut )]dθ
i=1 is a
column vector of candidate basis functions φi : Rdx → Rdf . The initial distribution of x ̄t is assumed to be Gaussian as
follows:
p(x0, θ) = N
©
«
       
x0
θ
       
       
μ0
m0
       
,
       
P0 0
0 S0
       
a ® ® ®
¬
(6)
7

where μ0 and m0 denote the means, and P0 and S0 denote the covariance matrices of the initial system state x0 and
the parameter vector θ, respectively. For brevity, we denote the mean vector and covariance matrix of the augmented
state at time t as ξt = [ μt , mt ]T and Σt =
       
P
t Vt
V
T
t St
       
, where Vt captures the cross-covariance between xt and θ. After
formulating the augmented state transition function and the initial distribution, the EKF and UKF algorithm can be
employed to estimate the augmented state:
The augmented EKF algorithm achieves nonlinear state estimation by locally linearizing nonlinear system state
functions around the estimation, enabling the prediction and correction of the augmented state. Assuming that the
mean and variance of the augmented state at time t − 1 are known, the augmented state transition function F ̄ (·) can be
approximated by a first-order Taylor expansion at the mean ξ+
t−1 as follows:
F ̄ (x ̄t−1, ut−1) ≈ F ̄ (ξ+
t −1, ut −1) + Jξ,t −1 (x ̄t −1 − ξ+
t −1) (7)
For simplicity, we denote Jξ,t−1 = ∂F ̄ (ξ )
∂ξ ξ=ξ+
t −1
is the Jacobian matrix of F ̄ (·) with respect to ξ+
t−1. After getting
the local linearization of the augmented state transition function, the prediction step of the augmented Kalman Filter can
be expressed as:
ξ−
t = F ̄ (ξ+
t−1, ut−1)
Σ−
t = Jξ,t −1Σt −1 JT
ξ,t −1 + Q ̄
(8)
where Q ̄ =
       
Q0
00
       
is the augmented process noise covariance matrix. Upon receiving the current measurement yt via
the observation model, the correction step can be described as follows:
K
t = Σ−
t H ̄ T
t H ̄ t Σ−
t H ̄ T
t + Rt
−1
ξ+
t = ξ−
t + Kt (yt − h(xt))
Σ+
t = ( I − Kt H ̄ t )Σ−
t
(9)
where Kt is the Kalman gain, H ̄ t = [ ∂h(ξ)
∂ξ ξ=ξ −
t
, 0] is the augmented Jacobian matrix of h(·) with respect to ξ−
t , and I
is the identity matrix. When the system dynamics exhibit high-order nonlinearity, the first-order linearization-based
EKF may incur approximation errors, thereby hindering the accurate estimation of θ. To overcome this limitation, UKF
is introduced.
The augmented UKF algorithm leverages the unscented transformation to more faithfully propagate the statistics
of nonlinear systems. Specifically, instead of relying on Jacobian-based linearization, the UKF deterministically selects a
8

set of sigma points that exactly capture the mean and covariance of a Gaussian distribution. By propagating these sigma
points through the nonlinear functions, the UKF achieves an accuracy that is up to the third Taylor series order, while
the EKF retains only first-order accuracy [42]. To further enhance numerical stability and computational efficiency, the
UKF in this work is implemented using the Cholesky decomposition [43]. The pseudocode of the UKF algorithm is in
Algorithm 1 (The detailed derivation is provided in Appendix VI.A):
In summary, this subsection establishes a probabilistic framework (AKF) that unifies state estimation under partial
observations with weight parameters updating. This integration lays the groundwork for online model learning. However,
the AKF itself does not address how to determine an appropriate set of basis functions for representing system dynamics.
The construction of the basis-function set Φ is challenging due to limited prior knowledge. Too few basis functions may
limit the model’s expressiveness, while too many may introduce redundancy and lead to overfitting. To overcome this
limitation, it is desirable to design a sparse learning mechanism that can retain only the most relevant basis functions
from sequential data. Such a mechanism would yield a compact yet accurate model, improving learning efficiency,
interpretability, and generalization in online applications.
B. Online ARD-Based Sparsification and Kalman Posterior Update Mechanism
In this subsection, a new online ARD-based sparsification method is proposed. This method dynamically adjusts the
prior variances of the weight parameters, enabling recursive sparsification without storing historical data.
As discussed in the introduction, to enhance the sparsity of parametric identification, a commonly used approach is
l1-regularization [46]. However, these approaches are not well suited to online scenarios for two reasons. First, their
performance depends heavily on the choice of penalty hyperparameters, which complicates real-time algorithm tuning
and may impair generalization. Second, using an l1 penalty destroys the conjugacy between the Gaussian prior and the
updated posterior, resulting in a non-Gaussian posterior and making integrating with AKF more challenging. Considering
these limitations of regularization-based methods, we adopt the Bayesian regression method, Automatic Relevance
Determination (ARD), as the baseline algorithm for sparsity promotion. The ARD method assigns independent Gaussian
priors to each weight parameter and updates their prior variances via maximum likelihood estimation. This preservation
of Gaussian conjugacy provides a natural motivation to attempt integrating ARD into the AKF framework. To further
illustrate this compatibility of ARD with AKF, the basic implementation structure of ARD is first revisited. In standard
ARD, the Gaussian prior of each parameter is assigned as follows:
p(θi | si) = N (θi | 0, si) (10)
It is worth noting that the initial prior distributions of the weight parameters are assumed to be independent, which implies
that the prior covariance matrix S0 = diag(s) is diagonal. These prior variances are then estimated by maximizing the
9

Algorithm 1 Cholesky-form UKF
Input: initial mean of the augmented state ξ0 = [μ0, m0]T , initial covariance matrix Σ0 =
"
P0 0
0 S0
#
.
1: Initialize the hyperparameter of UKF, including α (usually set to 1e−4 ≤ α ≤ 1), β (=2 is optimal for Gaussian distribution), the dimension of sigma-points L = dx + dθ .
2: Calculate the scale parameters λ = L (α2 − 1), η = √
L + λ and the weight W (m)
0 = λ/(L + λ), W (c)
0=
λ/(L + λ) + (1 − α2 + β), W (m)
i = W (c)
i = 1/(2L + 2λ), i = 1, 2, . . . , 2L. 3: Sample sigma points for the augmented state:
χ
t−1 =
h
ξ
t −1 ξt −1 + ηUt −1 ξt −1 − ηUt −1
i
where Ut−1 is the Cholesky factor of Σt−1. 4: Propagate the sigma points through the discretized augmented state transition function:
χ
t |t −1 = F ̄ ( χt −1, ut −1)
where matrix χt |t−1 collects the propagated sigma points as its columns. 5: Calculate the Cholesky-form distribution of the predicted augmented state x ̄t :
ξ−
t=
2L
∑︁
i=0
W (m)
i χi,t |t −1,
Q
xRx =
√︃
W (c)
1 ( χ1:2L,t |t −1 − ξ −
t ), Q1/2 , U−
t = RT
x
U−
t = cholupdate U−
t , χ0,t |t −1 − ξ −
t , W (c)
0
where χi,t |t−1 denotes the i-th column of χt |t−1, Q1/2 is the Cholesky factor of the process noise covariance matrix, and cholupdate(·) is the Cholesky rank-one update algorithm [45]. 6: Propagate the sigma points of x ̄t−1 through the observation function:
γ
t = h( χt |t −1), y−
t=
2L
∑︁
i=0
W (m)
i γi,t
where matrix γt collects the measured sigma points as its columns. 7: Calculate the Cholesky-form distribution of the predicted measurement :
Q
yRy =
√︃
W (c)
1 (γ1:2L,t − y−
t ), R1/2 , Uyt = RT
y,
U
yt = cholupdate Uyt
, γ0,t − y−
t , W (c)
0
where γi,t |t−1 denotes the i-th column of γt |t−1, and R1/2 is the Cholesky factor of the measurement noise covariance matrix. 8: Calculate the Kalman gain and correct distribution of the estimation:
C
t=
2L
∑︁
i=0
W (c)
i ( χi,t |t −1 − ξ −
t ) (γi,t − y−
t )T , Kt = Ct (Uyt UT
yt ) −1,
ξ+
t = ξ−
t + Kt (yt − y−
t ), U+
t = cholupdate U−
t , KtUyt
, −1
where U+
t is the Cholesky factor of the corrected covariance matrix Σ+
t.
10

likelihood function:
s∗ = arg msax
p( y1:T | s) (11)
which can be computed in closed form for linear-Gaussian models, or approximated using Monte Carlo or variational
inference when closed-form evaluation is intractable [32–34]. In ARD, the hierarchical prior settings naturally induces
sparsity: since the prior over the weight parameters is assumed to be zero-mean Gaussian, a larger prior variance implies
a higher probability of the corresponding weight being nonzero, indicating stronger relevance of the associated basis
function. In contrast, the variances of irrelevant basis functions shrink toward zero, effectively driving their weights
toward zero, thus enabling an automatic, data-driven sparsification mechanism. However, since this likelihood-based
algorithm requires access to the entire observation history y1:T for updates, it cannot be directly applied to online
scenarios in which data arrives sequentially. Therefore, to integrate the ARD mechanism into the AKF framework
without incurring considerable computational overhead, a recursive ARD update scheme is needed. Nevertheless, this
recursive reformulation introduces two main challenges. First, to improve memory efficiency, the entire observation
history y1:T is not stored, which results in the loss of historical information necessary for updates. Second, the posterior
distribution depends on the prior, implying that any change in the prior should trigger a corresponding real-time posterior
update, while such an updating strategy has not been well established.
To address this challenge, this paper proposesd an online ARD algorithm that operates under a unified probabilistic
framework with the AKF. The method extracts historical information from the posterior distribution of the augmented
state. This information is then used to perform maximum-likelihood updates of the prior variances. Moreover, by
introducing a Kalman-Filter-like pseudo-observation correction mechanism, it establishes a recursive scheme that
enables posterior updates consistent with the updated priors. For notational clarity, the posterior distribution before the
ARD update is denoted as qold (x ̄t ), and the posterior distribution after the ARD update as qnew (x ̄t ), specifically:
qold (x ̄t ) ≈ p (xt , θ | y1:t , Sold
0)
= N (x ̄t | ξold
t , Σold
t)
qnew (x ̄t ) ≈ p (xt , θ | y1:t , Snew
0)
= N (x ̄t | ξnew
t , Σnew
t)
(12)
where the posterior distribution of the augmented state q(x ̄t ) ≈ p(xt , θ | y1:t , S0) can be decomposed according to the
Bayesian theory as follows:
11

p (xt , θ | y1:t , Sold
0 )=
p (θ | Sold
0 ) p(xt , y1:t | θ)
p ( y1:t | Sold
0)
p (xt , θ | y1:t , Snew
0 )=
p (θ | Snew
0 ) p(xt , y1:t | θ)
p ( y1:t | Snew
0)
(13)
where p(θ | S0) denotes the Gaussian prior distribution of the parameter vector θ, which is specified as a zero-mean
Gaussian distribution N (θ | 0, S0) following the ARD algorithm. It is important to note that the likelihood term
p(xt , y1:t | θ) does not depend on the prior covariance S0.
To update the prior covariance from Sold
0 to Snew
0 , the likelihood term p(xt , y1:t | θ) that appears in both the first and
second equations of Eq. (13) is utilized to combine the two equations, leading to a relationship between Sold
0 and Snew
0.
Specifically, by reformulating the first equation of Eq. (13), the likelihood term can be expressed as:
p(xt , y1:t | θ) =
p (xt , θ | y1:t , Sold
0 ) p ( y1:t | Sold
0)
p (θ | Sold
0)
∝
qold (x ̄t ) p ( y1:t | Sold
0)
p (θ | Sold
0)
(14)
By substituting Eq. (14) into the second equation of Eq. (13), we obtain a recursive update formula for the posterior
distribution:
qnew (x ̄t ) =
p ( y1:t | Sold
0) p ( y1:t | Snew
0)
p (θ | Snew
0)
p (θ | Sold
0)
qold (x ̄t )
∝ N (θ | 0, Snew
0)
N (θ | 0, Sold
0)
qold (x ̄t )
(15)
where the ratio of two Gaussian distributions can be rewritten as a new Gaussian distribution:
N (θ | 0, Snew
0)
N (θ | 0, Sold
0 ) = CN (θ | 0, ΔS0) (16)
where the constant C = (2π)nθ /2 |Sold
0 |1/2 |ΔS0 |1/2 | S new
0 |1/2 , the covariance matrix ΔS0 = (Snew
0 )−1 − (Sold
0 )−1 −1. This formulation
demonstrates that, after updating the prior covariance from Sold
0 to Snew
0 , the distribution of the augmented state can be
recursively updated without requiring access to historical data:
qnew (x ̄t ) ∝ N (θ | 0, ΔS0)qold (x ̄t ) (17)
It can be observed that the form of Eq. (17) closely resembles the correction step in the Kalman filter framework.
Motivated by this analogy, we aim to leverage the Kalman filter theory to explicitly derive the posterior update
equation. The core idea is to treat qold (x ̄t ) as the Kalman-prior distribution before correction, and interpret the term
12

N (θ | 0, ΔS0) as a pseudo-observation model for the parameter vector θ. Specifically, we utilize the well-known
symmetry between the random variable and the mean in the Gaussian distribution, i.e., N (θ | 0, ΔS0) = N (0 | θ, ΔS0).
This allows us to reinterpret N (θ | 0, ΔS0) as corresponding to a pseudo-observation on θ, which is equivalent to
p( y ̃t = 0 | x ̄t ) = N (θ | 0, ΔS0). Further, this pseudo-observation can be equivalently formulated as an observation
model of the augmented state x ̄t :
y ̃t = H ̄ p x ̄t + v ̃ v ̃ ∼ N (0, ΔS0),
H ̄ p = 0 Idθ
(18)
where y ̃t is a pseudo measurement. Consequently, Eq. (17) can be reformulated as a Kalman correction equation under
the pseudo-observation formulation:
qnew (x ̄t ) ∝ p( y ̃t = 0 | x ̄t )qold (x ̄t ) (19)
which enables the posterior update step to follow the Kalman observation correction structure:
G = Σold
t H ̄ T
p Sold
t + ΔS0
−1
ξ new
t = ξold
t − Gξold
t
Σnew
t = Σold
t − G H ̄ pΣold
t
(20)
In summary, this subsection formulates a Bayesian principle for updating posterior when the prior is updated, and
derives a KF-like update equation to attain the mean and covariance of the new posterior distribution. However, the
marginal likelihood function p( y1:t | Snew
0 ) is not explicitly given here, which should be computed to serve as the basis
for updating the prior variance. Therefore, the next step is to provide an explicit formula for computing the marginal
likelihood (or loss) function and to derive an optimization algorithm for updating the prior variance.
C. Online ARD Relevance Update with Explicit Gradient Formulas
To enable efficient updating of prior variance via maximum marginal likelihood, this subsection derives the marginal
likelihood function and introduces a gradient-based updating approach, alongside explicit gradient descent update
equations for real-time and efficient prior variance adaptation.
To clearly extract the marginal likelihood function, we first need to manipulate Eq. (15). By substituting the merged
Gaussian result from Eq. (17) into the first equation of Eq. (15), we obtain:
qnew (x ̄t ) = C
p ( y1:t | Sold
0) p ( y1:t | Snew
0 ) N (θ | 0, ΔS0)qold (x ̄t ) (21)
13

Integrating both sides of Eq. (21) to obtain the marginal distribution, we obtain:
1=C
p ( y1:t | Sold
0) p ( y1:t | Snew
0)
∫
N (θ | 0, ΔS0)qold (x ̄t )dx ̄t
p ( y1:t | Snew
0)
p ( y1:t | Sold
0 ) =C
∫
N (θ | 0, ΔS0)qold (x ̄t )dx ̄t
(22)
The numerator on the left of Eq. (22) corresponds to the marginal likelihood of Snew
0 given past observations, which
indicates how likely the observed data are under the updated prior covariance. Meanwhile, the right-hand side does not
explicitly depend on the historical observations; instead, the information from past data has already been incorporated
into the posterior distribution qold (x ̄t ). For notational convenience, we denote l(Snew
0 ) = log p (y1:t |Snew
0) p (y1:t |Sold
0 ) . Furthermore,
to evaluate the required integral, we substitute the pseudo-observation model p( y ̃t = 0 | x ̄t ) = N (θ | 0, ΔS0) in
Eq. (18), thus constructing the marginal integral over the joint distribution as follows:
l ( Snew
0 ) = log C
∫
p( y ̃t = 0|x ̄t )qold (x ̄t )dx ̄t
= log C
∫
p( y ̃t = 0, x ̄t )dx ̄t
= log C + log p( y ̃t = 0)
(23)
since x ̄t follows a Gaussian distribution: N (x ̄t | ξold
t , Σold
t )=N
©
«
       
x
t
θ
t
       
       
μold
t
mold
t
       
,
       
Pold
t Vold
t
(V old
t )T Sold
t
       
a ® ® ®
¬
, according to the
Gaussian linear transformation theorem, y ̃ also follows a Gaussian distribution y ̃t ∼ N (mold
t , ΔS0 + Sold
t ), thus:
l ( Snew
0 ) = log C + log N (0|mold
t , ΔS0 + Sold
t ) (24)
Based on the above results, by omitting terms in the expression that are independent of Snew
0 , the practical ARD
optimization objective is to minimize the following loss function (for a detailed derivation of this loss function, please
refer to Appendix VI.B):
L = L1 + L2
L1 = ( mold
t )T Sold
t + ΔS0
−1
mold
t
L2 = log Snew
0 + Idθ − Snew
0 (Sold
0 )−1 Sold
t
(25)
Furthermore, to enable efficient adaptation of the prior variances, this work further derives an analytical gradient
based updating equation for adapting the prior variances. To ensure the positivity of the variances, each prior variance
si is parameterized via the softplus transformation: si = log(1 + exp(s ̃i)), where [s ̃1, . . . , s ̃dθ ]T is the vector of
unconstrained hyperparameters (the prior variances). The gradient of the loss function L with respect to s ̃i is computed
14

as follows:
σ(x) := 1
1 + e−x
,
∂si
∂ s ̃i
= σ(s ̃i) (26)
where σ(·) denotes the sigmoid function. Let Snew
0 = diag(s), A = (Sold
t + ΔS0)−1, and M = Snew
0 + [Idθ −
Snew
0 (Sold
0 )−1] Sold
t . The gradient of L with respect to s ̃i consists of two terms:
∂L
∂ s ̃i
= ∂L1
∂ s ̃i
+ ∂L2
∂ s ̃i
∂L1
∂si
= −[qi]2
∂L2
∂si
= [ M −1]ii 1 − [Sold
t ]ii
[ Sold
0 ]ii
!
(27)
where qi is the i-th component of the vector q = Amold
t , [·]ii denotes the i-th diagonal element of the matrix. Applying
the chain rule, the total gradient is:
∂L
∂ s ̃i
= σ(s ̃i) [ M −1]ii 1 − [Sold
t ]ii
[ Sold
0 ]ii
!
− [qi]2
!
(28)
At each optimization step, the ARD hyperparameter vector s is updated using the gradient-based method:
s ← s − ηhp ∇s L (s) (29)
where ηhp denotes the learning rate. This gradient-based Automatic Relevance Determination (ARD) update enables
online, data-driven refinement of the relevance prior within the AKF framework, thereby promoting sparsity and
improving generalization performance.
D. Framework of the Proposed Method
In summary, the proposed Sparse Kalman Identification (SKI) method realizes sparse, interpretable, and efficient
dynamics identification. First, by augmenting the state space to include both the physical states and the weight parameters,
the algorithm enables joint estimation through the EKF or UKF, thus providing robust performance even under noisy
and partially observable conditions. Second, the SKI method incorporates an ARD prior update mechanism, which
adaptively adjusts the relevance of basis functions in real time. This is accomplished through a gradient-based update
driven directly by the incoming current measurement, thereby eliminating the need to retain historical data. Third, after
each ARD prior adjustment, a KF-like posterior update step is performed to update the model parameters (or model
structure) and states estimation, achieving seamless integration of the AKF and ARD components while maintaining
both real-time feasibility and sparsity.
15

x2
x x3 x4 x5
y
t
In-step Update
Augmented State Update
AKF Estimation ARD Sparsification
Weights
wT = [w1, w2, w3, w4, w5]
x2
x x3 x4 x5
Basis Functions
Measurement Inputs
Updated Relevance
Updated Weights
AKF Online ARD
w1 w2 w3 w4 w5
Sparse Kalman Identification (SKI)
Fig. 2 Overview of the proposed algorithm: The weight parameters of basis functions are augmented into the state, enabling joint online estimation and adaptive sparsity via ARD within the AKF framework.
The algorithmic procedure of the proposed method is described in the form of pseudocode 2 and illustrated in Fig. 2.
The pseudocode systematically outlines the initialization, online AKF-based parameters estimation, and online ARD
sparsification steps.
Algorithm 2 Core Procedure of the Proposed Method
Input: Set the initial state vector x0, state covariance matrix P0, parameter vector θ0, parameter covariance matrix S0 (diagonal, initialized from ARD hyperparameters s0), the state-parameter covariance matrix V0, process noise covariance Q, and measurement noise covariance R. 1: repeat
2: Acquire measurement yt . 3: UKF Update: Propagate and correct the mean and covariance of x and θ using Algorithm 1 with measurement y
t.
4: for k = 1 to Nhp do
5: Compute ARD loss LARD based on current θt |t and S0 using (25). 6: Update ARD hyperparameters s0 via gradient-based optimization. 7: Update parameter prior covariance S0 according to new s0. 8: end for
9: Update the posterior to match the new prior using (20) 10: until operation ends
The computational complexity of the proposed algorithm is primarily determined by two components: the augmented
UKF and the Online-ARD. In the Cholesky-form UKF, the most computationally intensive operation is the Cholesky
decomposition of the augmented covariance matrix, whose dimension is nz = dx + dθ (where dx and dθ denote the
state and parameter dimensions, respectively). This operation incurs a computational complexity of O (n3
z), which
typically dominates the overall computational cost of the UKF.
16

With the introduction of the Online-ARD mechanism, additional computations are required for the online optimization
of hyperparameters governing the prior variances of the parameters θ. The principal computational burden in this
module also arises from matrix operations, within the parameter subspace, with complexity on the order of O (n3
θ ) per
optimization step. If Nhp denotes the number of hyperparameter optimization steps performed at each filtering iteration,
the total additional complexity introduced by Online-ARD is approximately Nhp · O (n3
θ ).
In summary, although the incorporation of Online-ARD inevitably increases the overall computational cost per
iteration, this increase remains acceptable in practice as long as the parameter dimension nθ is not excessively large.
Therefore, the proposed method maintains a reasonable balance between sparsification capability and computational
efficiency, and the computational overhead introduced by Online-ARD is manageable for problems with moderate
parameter dimensionality. Finally, the theoretical advantages of the Sparse Kalman Identification (SKI) algorithm
will be rigorously validated in the following section, through comprehensive numerical simulations and real-world
experiments.
IV. Evaluation
This section provides experimental validation of the Sparse Kalman Identification (SKI) method under three
representative scenarios. Specifically, Subsection IV.A assesses the method on the numerical WingRock synthetic
dynamics benchmark for system identification, validating the accuracy and efficiency of the proposed method.
Subsection IV.B evaluates the method’s performance in a numerical quadrotor simulation based on the Gazebo platform,
validating the sparsification adaptability of the proposed method under complex flight dynamics. Subsection IV.C
further demonstrates the sparsification adaptability using a physical quadrotor UAV experiment, thereby verifying its
practical effectiveness in real-world applications.
All simulation experiments are performed on a desktop workstation equipped with an Intel(R) Core(TM) i7-14700K
3.40 GHz CPU and 32 GB of RAM, using Python 3.9. Details of the hardware configuration of the physical quadrotor
platform are provided in Section IV.C.
A. Numerical Simulation Experiment on the WingRock System
The first simulation experiment utilizes the WingRock dynamical model, a typical benchmark for evaluating
nonlinear and partially observable system identification [24, 47, 48]. The discrete-time dynamics of the WingRock
system are described by the following equations:
θ¤t = pt
p¤t = LΔd + Δ(θt , pt )
(30)
17

where θt denotes the roll angle (in degrees), pt represents the roll rate (in degrees per second), Δd is the control input
(aileron deflection in degrees), and L is the input gain, whose true value is set as L = 3 s−2. The term Δ(θt , pt )
encapsulates the system’s nonlinear uncertainty and is modeled as a weighted sum of nonlinear basis functions:
Δ(θt , pt ) = Φ(θt , pt )w (31)
where the basis function vector Φ(θt , pt ) comprises a collection of nonlinear terms, namely: a constant bias, the roll
angle θt , the roll rate pt , the interaction term |θt | pt , the quadratic term | pt | pt , and the cubic term θ3
t:
Φ(θt , pt ) = 1, θt , pt , |θt | pt , | pt | pt , θ3
t (32)
and w ∈ R6×1 is the weight vector to be identified, whose true values are given by w0 = 0.8 deg · s−2, w1 = 0.2314 s−2,
w2 = 0.6918 s−1, w3 = −0.6245 deg−1s−1, w4 = 0.0095 deg−1, and w5 = 0.0214 deg−2 s−2 [24]. The system is
partially observable: only the roll angle θt is measured, and the measurement is corrupted by additive Gaussian white
noise with a standard deviation of 0.1 degrees.
0.0 2.5 5.0 7.5 10.0 12.5 15.0 17.5 20.0 time (s)
5
0
5
Value (degree)
Evolution of the roll angle
Desired roll angle Measured roll angle
Fig. 3 Evolution of the roll angle in the WingRock simulation experiment.
The simulation is performed at a sampling frequency of 50 Hz for a total duration of 15 seconds. The control
objective is to track a time-varying reference roll angle using a PID controller. The reference trajectory consists of a
sequence of stepwise square waves, as illustrated in Fig. 3. To rigorously assess the parameter identification performance,
we first conduct a comparative study among four algorithms: SINDy, the augmented Extended Kalman Filter, the
augmented Unscented Kalman Filter, and our Sparse Kalman Identification (SKI) algorithm. It should be noted that, for
SINDy, the angular velocity and angular acceleration are obtained via numerical differentiation.
As illustrated in Fig. 4, the experimental results provide a clear comparison of the parameter estimation performance
among the evaluated algorithms. It is evident that, compared to the EKF, the UKF demonstrates improved capability
18

2.5 5.0 7.5 10.0 12.5 15.0 time (s)
1.0
0.5
0.0
0.5
1.0
1.5
Weight
1
OURS UKF EKF True
2.5 5.0 7.5 10.0 12.5 15.0 time (s)
1
0
1
2
Weight
OURS UKF EKF True
2.5 5.0 7.5 10.0 12.5 15.0 time (s)
1
0
1
Weight
p
OURS UKF EKF True
2.5 5.0 7.5 10.0 12.5 15.0 time (s)
1.0
0.5
0.0
Weight
| |p
OURS UKF EKF True
2.5 5.0 7.5 10.0 12.5 15.0 time (s)
0.10
0.05
0.00
0.05
0.10
Weight
|p| p
OURS UKF EKF True
2.5 5.0 7.5 10.0 12.5 15.0 time (s)
0.1
0.0
0.1
0.2
Weight
3
OURS UKF EKF True
Fig. 4 Estimation results for the coefficients (weight parameters) and their associated 1.96 standard deviation intervals. The red curve denotes the proposed SKI method, the blue curve represents the augmented UKF, and the green curve indicates the augmented EKF. Due to the large estimation error of the SINDy algorithm, its results are omitted for clarity.
in accommodating the nonlinear characteristics of the system, yielding faster convergence, enhanced stability, and
higher estimation accuracy. This observation substantiates the rationale for adopting the augmented UKF as the core
identification framework in this study, particularly for nonlinear dynamical models. Furthermore, the proposed SKI
algorithm, which incorporates online ARD-based sparsification mechanism, achieves even greater stability and accuracy
than the augmented UKF, as reflected by its faster convergence and narrower confidence intervals. These results
collectively validate the sparsity-promoting effectiveness of the SKI method.
Table 1 Estimation Accuracy and Computational Efficiency of Different Algorithms.
Method SINDy Augmented-EKF Augmented-UKF Our Method
Mean l1 Error 11.45 5.85 0.95 0.15
Average Runtime (ms) - 1.54 1.18 2.49
Given that the true values of the WingRock system parameters are known, the identification accuracy of each
algorithm is quantitatively evaluated using the mean l1-norm error between the estimated and true coefficients.
Additionally, the average computational time per step for each algorithm is reported to assess efficiency. As shown in
Table 1, our SKI method significantly outperforms the baseline methods in terms of identification accuracy, achieving
an 84.21% improvement over the Augmented-UKF, while maintaining comparable computational millisecond-level
19

efficiency. It can also be observed that the UKF is faster than the EKF, primarily due to the use of a Cholesky-based
implementation that enables efficient parallel batch computations, whereas the EKF does not benefit from such
optimizations. Furthermore, the EKF relies on automatic differentiation to compute the state transition Jacobian matrix,
which further increases its computational cost. As for the SINDy algorithm, since it is a non-recursive algorithm that
requires all historical data for batch training, it is not meaningful to directly compare the single-step training time of
SINDy with the algorithms under the AKF framework. Therefore, the per-step computation time of SINDy is not
reported here.
5 10 15 time (s)
2
1
0
1
2
3
Weight
7-delay (False)
OURS UKF True
5 10 15 time (s)
2
1
0
1
2
3
Weight
6-delay (True)
OURS UKF True
5 10 15 time (s)
2
1
0
1
2
3
Weight
5-delay (False)
OURS UKF True
5 10 15 time (s)
2
1
0
1
2
Weight
4-delay (False)
OURS UKF True
5 10 15 time (s)
3
2
1
0
1
2
Weight
3-delay (False)
OURS UKF True
5 10 15 time (s)
3
2
1
0
1
2
Weight
2-delay (False)
OURS UKF True
5 10 15 time (s)
3
2
1
0
1
2
Weight
1-delay (False)
OURS UKF True
5 10 15 time (s)
3
2
1
0
1
2
Weight
0-delay (False)
OURS UKF True
Fig. 5 Estimated input gain trajectories for each candidate delay. Blue: Augmented UKF; Red: the proposed SKI method.
To further illustrate the sparse identification capability of the SKI method, we design a dedicated time-delay
identification experiment based on the WingRock system. In this task, the control input gain L is considered an unknown
parameter, and an unknown input delay (true value: 6 steps) is introduced. To enable simultaneous estimation of both
the control effectiveness and the input delay, a sliding window of length D = 8 is used to record the history of control
inputs. The control effect at time t is thus modeled as a weighted sum of the past D inputs:
p¤t =
D ∑︁
j =1
L j Δdt− j+1 + Δ(θt , pt ) (33)
where L ̄ = [L1, L2, . . . , L8]T is the vector of candidate input gains, Δdt− j+1 is the control input at time t − j + 1,
and Δ(θt , pt ) is assumed known for this experiment. In this formulation, each delayed input acts as a candidate basis
20

7-delay (False)
6-delay (True)
5-delay (False)
4-delay (False)
3-delay (False)
2-delay (False)
1-delay (False)
0-delay (False)
0.0
0.5
1.0
1.5
2.0
2.5
3.0
Relevance Value
0.20
2.70
0.02 0.02 0.01 0.01 9.7e-03 0.01
Automatic Relevance Determination (ARD)
Fig. 6 Identification results for different candidate time delays of the Online-ARD algorithm. Higher relevance indicates a more probable true delay.
function, and the ARD-based algorithm adaptively determines the relevance of each delay by promoting sparsity in L ̄ .
The most certain delay is identified as the one with the largest estimated gain.
For comparison, only the Augmented UKF is used as a baseline, since SINDy and Augmented EKF have been
shown to perform poorly in this context (see Table 1). As shown in Fig. 5, the proposed SKI method rapidly and
unambiguously identifies the true input delay (6 steps) and achieves more accurate estimation of the input gain compared
to the Augmented UKF. Quantitatively, the proposed method yields an l1 relative error for L of 0.03, which is lower
than that of the Augmented UKF (0.41), demonstrating superior identification accuracy. Moreover, Fig. 6 illustrates the
final prior variances assigned to each candidate delay by the Online-ARD algorithm. The basis function (delayed inputs)
with the largest prior variance (indicated by the red bar) corresponds to the most relevant feature, with the true 6-step
delay being unambiguously identified by its pronounced variance. This result demonstrates the algorithm’s strong
capability for interpretable and selective sparse structure identification.
B. Quadrotor UAV Simulation Experiment
To rigorously evaluate the proposed SKI method under controlled and repeatable conditions, a high-fidelity simulation
study was conducted using the Gazebo robotics simulation platform. The quadrotor UAV in this experiment is operated
under the PX4 autopilot control algorithm, ensuring realistic and industry-standard flight dynamics and control behavior.
During the simulation, the UAV is commanded to follow a three-dimensional spiral ascent trajectory, where the radius
of the spiral increases linearly with time while the period of each revolution remains constant, as illustrated in Fig. 7b.
This trajectory design ensures persistent excitation of the UAV’s translational dynamics in all three spatial dimensions,
thereby facilitating robust and comprehensive parameter identification.
In the simulated UAV dynamics, the thrust generated by the rotors is parameterized as a polynomial function of
21

the average PWM input, with the true underlying relationship being approximately linear. The primary identification
objective is to elucidate the functional mapping between the total thrust acceleration acting on the UAV and the
average PWM input, thereby determining whether this relationship is best characterized by a linear, quadratic, or
higher-order polynomial model. In addition to thrust modeling, both linear and quadratic aerodynamic drag effects are
incorporated, with their respective weight parameters treated as unknown parameters to be identified. The magnitude
of the drag force is proportional to the speed (i.e., the Euclidean norm of the velocity vector) and is always oriented
opposite to the direction of motion. The state vector in the simulation is defined as x = [ px, py, pz, vx, vy, vz]T ,
where p = [ px, py, pz]T and v = [vx, vy, vz]T denote the UAV’s position and velocity in the world coordinate frame,
respectively. The control input comprises the PWM signals and the UAV’s attitude (represented as a quaternion), while
the model parameters to be identified include the thrust and drag coefficients. The continuous-time state transition
model is formulated as follows:
p¤t = vt
v¤t = R(qt ) abody
t + adrag
t (vt) + g
(34)
where pt = [ px, py, pz]T is the position, vt = [vx, vy, vz]T is the velocity, qt is the attitude quaternion, R(qt ) is the
rotation matrix from body to world frame, abody
t = [0, 0, athrust
t ]T is the thrust-induced acceleration in the body frame,
adrag (vt ) is the aerodynamic drag acceleration, and g = [0, 0, −g]T is the gravitational acceleration.
(a) Simulated Quadrotor UAV
10
5 0 5
10
X
10
5
0
5
10
Y
8
9
10
11
12
13
Z
Trajectory Start End
(b) Flight Trajectory
Fig. 7 (a) The quadrotor UAV model in the Gazebo simulation environment; (b) the simulated spiral flight trajectory of the UAV.
22

The thrust athrust
t is parameterized as a polynomial function of the PWM input:
athrust
t=
5
∑︁
i=0
wi
©
«
1 4
4
∑︁
j =1
(PWM j
t )ia
®
¬
=
5
∑︁
i=0
w i PWMi
avg
(35)
where wi are the weight parameters to be identified, and PWM j
t denotes the PWM value of the j-th motor at time t.
The aerodynamic drag acceleration is modeled as
adrag (v) = −d1v − d2 ∥v ∥v (36)
where d1 and d2 are the linear and quadratic drag coefficients, and ∥v∥ denotes the Euclidean norm of the velocity
vector. Notably, the drag is assumed to be independent of the UAV’s attitude and acts solely in the direction opposite to
the velocity vector. To reduce the correlation among polynomial basis functions of different orders, the PWM input data
were preprocessed by centering (i.e., removing the acceleration required for hovering) and standardization, which also
increases the importance of the constant term in the basis expansion.
20 40 60 time (s)
0
5
10
Weight
1(True)
OURS UKF Zero
20 40 60 time (s)
6
4
2
0
2
Weight
x(True)
OURS UKF Zero
20 40 60 time (s)
4
2
0
2
Weight
x2 (False)
OURS UKF Zero
20 40 60 time (s)
2
0
2
4
Weight
x3 (False)
OURS UKF Zero
20 40 60 time (s)
2
0
2
Weight
x4 (False)
OURS UKF Zero
20 40 60 time (s)
2
0
2
Weight
x5 (False)
OURS UKF Zero
20 40 60 time (s)
0.5
0.0
0.5
Weight
|v|(True)
OURS UKF Zero
20 40 60 time (s)
0.4
0.2
0.0
0.2
0.4
Weight
|v|2 (False)
OURS UKF Zero
Fig. 8 Estimated trajectories of the coefficients (weight parameters) for each candidate PWM basis function and the linear/quadratic drag terms. Blue: Augmented UKF; Red: the proposed SKI method.
23

1(True) x(True) x2(False) x3(False) x4(False) x5(False) |v|(True) |v|2(False)
10 5
10 4
10 3
10 2
10 1
100
101
102
103
Relevance Value
27.25
2.73
1.8e-04
4.3e-05 2.7e-05 2.0e-05
0.14
4.2e-05
Automatic Relevance Determination (ARD)
Fig. 9 Identification results for the PWM basis functions and the linear/quadratic drag terms using the Online-ARD algorithm. The effectively selected terms are highlighted with red bars. Note: the y-axis is in logarithmic scale, as the prior variances of the selected terms differ by several orders of magnitude; the log scale facilitates clear comparison.
The complete set of candidate basis functions for the identification task is thus defined as:
Φ(PWMavg
t , ∥vt ∥) = 1, PWMavg
t , (PWMavg
t )2, (PWMavg
t )3,
(PWMavg
t )4, (PWMavg
t )5, ∥vt ∥, ∥vt ∥2
(37)
where the first six terms correspond to the constant and polynomial terms of the (normalized) PWM input (thrust basis),
and the last two terms represent the linear and quadratic speed-dependent drag components. The identification process
involves estimating the weight vector W = [w0, w1, w2, w3, w4, w5, d1, d2]T associated with the above basis functions.
Ideally, the algorithm should primarily select the constant term (w0), the linear PWM term (w1), and the linear speed
drag term (d1), while suppressing the remaining coefficients, thus reflecting the true underlying physical relationships.
The observation model is defined as a partial observation of the system state, where only the UAV’s three-dimensional
position in the world coordinate frame is available for measurement:
y
t = Cxt (38)
where H ∈ R3×6 is the observation matrix selecting the position components, i.e., H = [I3, 03×3]. It is further assumed
that the drag experienced by the UAV is independent of its attitude.
In the simulation experiment, the observation data were collected at a frequency of 50 Hz. The total duration of
the experiment was 60 s. The baseline algorithm for comparison remained the Augmented UKF. The experimental
results are presented in Fig. 8 and Fig. 9. It is evident that only the constant term, the linear PWM term, and the linear
drag term were distinctly identified by the proposed SKI method, which aligns with the underlying UAV dynamics
24

model established in Gazebo prior to the simulation experiments. Furthermore, a comparative analysis reveals that,
relative to the Augmented UKF, our algorithm demonstrates advantages in terms of stability and sparsity. These results
substantiate the feasibility and enhanced effectiveness of the proposed method for UAV dynamics identification tasks.
C. Physical UAV Flight Experiment
To further assess the efficacy of the proposed SKI method in real-world scenarios, a physical flight experiment was
conducted using a quadrotor UAV platform, as shown in Fig. 10a. The UAV is equipped with a PX4 flight controller,
electronic speed controllers (ESCs), and a Jetson TX2 onboard computer. State measurements were obtained via a
NOKOV-MARS motion capture system (see Fig. 10b), which provides three-dimensional position data in the world
coordinate frame at a frequency of 100 Hz.
In this experiment, the UAV was commanded to follow a vertical oscillatory trajectory along the z-axis, characterized
by a sinusoidal pattern, as depicted in Fig. 10c. This trajectory design ensures persistent excitation of the vertical
dynamics, thereby enabling accurate identification of the mapping between the average PWM input and the vertical
acceleration.
(a) Quadrotor UAV (b) Motion Capture System (c) Flight Trajectory
Fig. 10 (a) The quadrotor UAV used in the physical experiment; (b) motion capture system for measuring UAV position in the world frame; (c) schematic of the UAV body frame and the world frame defined by the motion capture system.
It is important to note that, due to the limited size of the experimental site, the UAV’s flight speed remained relatively
low throughout the experiment. Consequently, aerodynamic drag effects were negligible and thus not considered in the
identification process. The identification task in the physical experiment was therefore restricted to the basis functions
associated with the PWM input, without the inclusion of drag-related terms. This stands in contrast to the simulation
study.
The system dynamics were modeled analogously to the simulation case, but restricted to the vertical direction. The
state vector is defined as x = [z, vz]T , where z denotes the vertical position and vz the vertical velocity in the world
frame. The control input is the average PWM signal, PWMavg
t , across all four motors. The continuous-time state-space
25

model is given by:
z¤t = vz
t
v¤ z
t = athrust
t −g
(39)
where athrust
t denotes the thrust-induced acceleration along the z-axis, and g is the gravitational acceleration. The
observation model is a partial observation of the state, with only the vertical position zt being measured.
The candidate basis functions for the identification task in the physical experiment are thus defined as:
Φ(PWMavg
t ) = 1, PWMavg
t , (PWMavg
t )2, (PWMavg
t )3, (PWMavg
t )4, (PWMavg
t )5 (40)
where the terms correspond to the constant and polynomial terms of the (normalized) PWM input up to the fifth order.
The identification process involves estimating the weight vector w = [w0, w1, w2, w3, w4, w5]T associated with these
basis functions.
The mapping from the average PWM input to the vertical acceleration is thus parameterized as:
athrust
t=
5
∑︁
i=0
wi (PWMavg
t )i (41)
where wi are the coefficients (weight parameters) to be identified.
5 10 15 20 time (s)
2
0
2
4
Weight
1
OURS UKF Zero
5 10 15 20 time (s)
0
5
10
Weight
x
OURS UKF Zero
5 10 15 20 time (s)
2
0
2
Weight
x2
OURS UKF Zero
5 10 15 20 time (s)
2
1
0
1
2
3
Weight
x3
OURS UKF Zero
5 10 15 20 time (s)
2
1
0
1
2
3
Weight
x4
OURS UKF Zero
5 10 15 20 time (s)
2
1
0
1
2
Weight
x5
OURS UKF Zero
Fig. 11 Comparison of the identification and selection of PWM basis functions by the Augmented-UKF (blue) and the proposed SKI method (red) in the physical quadrotor experiment.
26

1 x x2 x3 x4 x5
0
2
4
6
8
10
12
Relevance Value
1.0e-04
9.92
7.0e-04 6.9e-05 3.7e-05 2.6e-05
Automatic Relevance Determination (ARD)
Fig. 12 Identification results for the PWM basis functions using the Online-ARD algorithm in the physical flight experiment. The effectively selected terms are highlighted with red bars.
As shown in Fig. 11 and Fig. 12, the identification results from the physical experiment are consistent with those
from the simulation, with the linear term again identified as dominant. Unlike the simulation, the real-world data were
collected online without centering or preprocessing, so the constant term (related to hovering acceleration) is absorbed
into the linear term and not selected separately. The proposed Sparse Kalman Identification (SKI) method maintains
better stability and sparsity than the Augmented UKF, confirming its practical effectiveness.
V. Conclusion
In summary, this work proposes a Sparse Kalman Identification (SKI) method for real-time sparse identification of
nonlinear dynamics, which can achieve accurate, sparse, and interpretable parameter estimation from noisy and partial
observations. The key innovation is the incorporation of the ARD algorithm, which enables online estimation of the
prior variances associated with each candidate basis function weight. This adaptive mechanism allows the method to
dynamically select relevant features and suppress irrelevant ones throughout the sparse identification process. As a
result, the SKI method enhances model interpretability and improves robustness against overfitting and redundancy in
the candidate basis functions. Comprehensive simulations and real-world flight experiments were conducted to evaluate
the proposed SKI method. The results show that SKI consistently outperforms conventional methods in sparsity and
accuracy, while maintaining competitive computational efficiency. These findings demonstrate the practical utility and
robustness of SKI for engineering applications.
VI. Acknowledgement
This work was supported by the National Natural Science Foundation of China (Grant No. 12572052) and the
Beijing Natural Science Foundation (Grant No. L251013). The authors gratefully acknowledge the financial support
27

provided by these funding agencies, which made this research possible.
Appendix
A. Cholesky Decomposition in the UKF Sigma Point Generation
The standard UKF propagates and updates the full state covariance matrix, which can suffer from numerical
instability. To improve computational efficiency and robustness, the square-root formulation of the UKF (SR-UKF)
maintains and propagates the Cholesky factor of the covariance matrix directly, employing numerically stable linear
algebraic operations such as Cholesky and QR decomposition.
Initialization. The algorithm is initialized by computing the Cholesky factor of the initial augmented covariance
matrix:
Σ0 =
       
P0 0
0 S0
       
Σ0 = U0UT
0
U0 = chol(Σ0)
(42)
where U0 is the lower-triangular Cholesky factor of Σ0.
Sigma-point generation. At time step t − 1, given the posterior mean ξt−1 and Cholesky factor Ut−1, the sigma points
are generated as:
χ0,t −1 = ξt −1,
χ
i,t−1 = ξt−1 +
√
L + λ [Ut−1]:,i, i = 1, . . . , L
χ
i+L,t−1 = ξt−1 −
√
L + λ [Ut−1]:,i, i = 1, . . . , L
(43)
where L is the dimension of the augmented state and λ = L (α2 − 1) is the UKF scaling parameter.
Weights. The corresponding mean and covariance weights are defined as:
W (m)
0 =λ
L+λ
,
W (c)
0= λ
L+λ
+ (1 − α2 + β),
W (m)
i = W (c)
i= 1
2(L + λ) , i = 1, . . . , 2L
(44)
where α determines the spread of the sigma points and β incorporates prior distribution knowledge (for Gaussian
distributions, β = 2).
28

Time update. Each sigma point is propagated through the nonlinear state transition function:
χ
i,t |t −1 = F ̄ ( χi,t −1, ut −1), i = 0, . . . , 2L (45)
The predicted mean is obtained as a weighted sum:
ξ−
t=
2L
∑︁
i=0
W (m)
i χi,t |t −1 (46)
The predicted Cholesky factor of the covariance is computed via QR decomposition:
A
x=
√︃
W (c)
1 ( χ1:2L,t |t −1 − ξ −
t ), Q1/2 ,
A
x = QxRx, U−
t = RT
x
(47)
where Q1/2 is the lower-triangular Cholesky factor of the process noise covariance Q. If W (c)
0 ≠ 0, a subsequent
Cholesky rank-one update or downdate is applied:
U−
t = cholupdate U−
t , χ0,t |t −1 − ξ −
t , W (c)
0 (48)
Measurement update. Each predicted sigma point is mapped through the measurement function:
γ
i,t = h( χi,t |t−1), i = 0, . . . , 2L (49)
The predicted measurement mean and covariance factor are computed as:
y−
t=
2L
∑︁
i=0
W (m)
i γi,t , (50)
A
y=
√︃
W (c)
1 (γ1:2L,t − y−
t ), R1/2 , (51)
A
y = Qy Ry, Uyt = RT
y (52)
where R1/2 is the lower-triangular Cholesky factor of the measurement noise covariance R. If W (c)
0 ≠ 0, perform a
Cholesky update/downdate:
U
yt = cholupdate Uyt
, γ0,t − y−
t , W (c)
0 (53)
29

The cross-covariance between the state and measurement is given by:
C
t=
2L
∑︁
i=0
W (c)
i ( χi,t |t −1 − ξ −
t ) (γi,t − y−
t )T (54)
The Kalman gain is obtained by solving two triangular systems:
K
t = Ct (Uyt UT
yt )−1 (55)
which avoids explicit matrix inversion.
Posterior update. The augmented state mean and Cholesky factor are updated as:
ξ+
t = ξ−
t + Kt (yt − y−
t ), (56)
Γ
t = KtUyt
, (57)
U+
t = cholupdate U−
t , Γt , −1 (58)
In summary, the square-root UKF maintains all covariance matrices in their Cholesky factorized form throughout the
prediction and update steps by employing QR decomposition and Cholesky updating. This approach ensures numerical
stability and computational efficiency, particularly in real-time and high-dimensional filtering applications, and is fully
consistent with the notation and algorithmic structure presented in the main text.
B. Detailed Expansion and Derivation of the ARD Loss Function
In this section, we provide a detailed derivation of the loss function L used for prior variance update, with particular
emphasis on the explicit expansion of the Gaussian likelihood term and the step-by-step derivation of the components L1
and L2. We also discuss how the formulation avoids the pathological case where Snew
0 = Sold
0 , which would otherwise
result in vanishing gradients.
The loss function is derived from the Eq.(24), where the prior covariance matrix is updated from Sold
0 to Snew
0 . The
relevant term can be written as:
L = −l(Snew
0)
= − log C − log N (θ | mold
t , Sold
t + ΔS0)
(59)
30

Expanding the log-likelihood of the multivariate Gaussian and expand log C according to Eq.(16), we obtain:
L = − log( (2π)nθ /2 |Sold
0 |1/2 |ΔS0 |1/2
| Snew
0 |1/2 ) + 1
2 log (2π)nθ /2 (Sold
t + ΔS0) + 1
2 ( mold
t )T (Sold
t + ΔS0)−1 mold
t
=1
2 log |Snew
0 |−1
2 log |Sold
0 |−1
2 log |ΔS0| + 1
2 log Sold
t + ΔS0 + 1
2 ( mold
t )T (Sold
t + ΔS0)−1 mold
t
(60)
where nθ is the dimension of θ. In the context of optimization, the term 1
2 log |Sold
0 | can be omitted, as it does not affect
the gradient with respect to Snew
0 , the loss can be decomposed as follows:
L = L1 + L2,
L1 = 1
2 ( mold
t )T (Sold
t + ΔS0)−1 mold
t,
L2 = 1
2 log |Snew
0 |−1
2 log |ΔS0| + 1
2 log Sold
t + ΔS0
(61)
A critical issue in the gradient descent update occurs if Snew
0 is set to be identical to Sold
0 . In this circumstance,
ΔS0 = 0, and the loss function becomes constant, which leads to vanishing gradients and prevents further learning. To
address this issue, we apply the Woodbury matrix identity and properties of determinants to derive a reformulation of
L2 that retains dependence on Snew
0 , even when it is initialized as Sold
0:
L1 = ( mold
t )T (Sold
t + ΔS0)−1 mold
t , (62)
L2 = log Snew
0 + Inθ − Snew
0 (Sold
0 )−1 Sold
t (63)
The derivation proceeds as follows:
• The term L1 originates from the quadratic form of the Gaussian log-likelihood, where the covariance matrix is
augmented to incorporate the increment ΔS0.
• The term L2 results from applying the matrix determinant lemma (a direct consequence of the Woodbury identity)
to the log-determinant component, allowing the determinant to be expressed in terms of Snew
0 and Sold
t.
In practical implementation, the optimization of Snew
0 is typically carried out iteratively. The procedure starts by
initializing Snew
0 with Sold
0 , after which the parameters of Snew
0 are updated at each iteration via gradient descent on the
composite objective L = L1 + L2. The closed-form expressions of L1 and L2 enable efficient gradient computation
and ensure numerical robustness by preventing ill-conditioned or degenerate covariance updates.
References
[1] Luo, H., Liu, Z., Jin, T., Lee, C.-H., and He, S., “Computational Predictor–Corrector Homing Guidance for Constrained Impact,”
Journal of Guidance, Control, and Dynamics, Vol. 48, No. 6, 2025, pp. 1366–1380. doi:10.2514/1.G008968.
31

[2] Lavretsky, E., “Modeling and Path-Following Control for Dubins Dynamics in Complex State Space,” Journal of Guidance,
Control, and Dynamics, Vol. 47, No. 7, 2024, pp. 1256–1272. doi:10.2514/1.G007793.
[3] Ai, B., Tian, S., Shi, H., Wang, Y., Pfaff, T., Tan, C., Christensen, H. I., Su, H., Wu, J., and Li, Y., “A review of
learning-based dynamics models for robotic manipulation,” Science Robotics, Vol. 10, No. 106, 2025, p. eadt1497. doi:
10.1126/scirobotics.adt1497, URL https://www.science.org/doi/abs/10.1126/scirobotics.adt1497.
[4] Qu, D., Wang, Q., and Liu, H., “Physics-Informed Transfer Learning-Based Aerodynamic Parameter Identification of Morphing
Aircraft,” Journal of Guidance, Control, and Dynamics, Vol. 48, No. 2, 2025, pp. 240–254. doi:10.2514/1.G008503.
[5] Cremades, A., Hoyas, S., Deshpande, R., Quintero, P., Lellep, M., Lee, W. J., Monty, J. P., Hutchins, N., Linkmann,
M., Marusic, I., and Vinuesa, R., “Identifying regions of importance in wall-bounded turbulence through explainable
deep learning,” Nature Communications, Vol. 15, No. 1, 2024, p. 3864. doi:10.1038/s41467-024-47954-6, URL https:
//doi.org/10.1038/s41467-024-47954-6.
[6] Brunton, S. L., Proctor, J. L., and Kutz, J. N., “Discovering governing equations from data by sparse identification of
nonlinear dynamical systems,” Proceedings of the National Academy of Sciences, Vol. 113, No. 15, 2016, pp. 3932–3937.
doi:10.1073/pnas.1517384113.
[7] Rosafalco, L., Conti, P., Manzoni, A., Mariani, S., and Frangi, A., “Online Learning in Bifurcating Dynamic Systems via SINDy
and Kalman Filtering,” Nonlinear Dynamics, Vol. 113, No. 12, 2025, pp. 14201–14221. doi:10.1007/s11071-025-11029-y,
URL https://doi.org/10.1007/s11071-025-11029-y.
[8] Patel, J., and Subbarao, K., “Reachable-Set Constrained Model Predictive Control for Safe Hypersonic Reentry,” Journal of
Guidance, Control, and Dynamics, Vol. 48, No. 6, 2025, pp. 1253–1265. doi:10.2514/1.G008436, URL https://doi.org/
10.2514/1.G008436.
[9] Wallace, B. A., and Si, J., “Reinforcement Learning Control of Hypersonic Vehicles and Performance Evaluations,” Journal
of Guidance, Control, and Dynamics, Vol. 47, No. 12, 2024, pp. 2587–2600. doi:10.2514/1.G008225, URL https:
//doi.org/10.2514/1.G008225.
[10] Cheah, S. K., Bhattacharjee, D., Hemati, M. S., and Caverly, R. J., “Control Synthesis for Hypersonic Vehicle Flight Testing
with Input–Output-Sampled Nonlinearities,” Journal of Guidance, Control, and Dynamics, Vol. 48, No. 4, 2025, pp. 855–869.
doi:10.2514/1.G008331, URL https://doi.org/10.2514/1.G008331.
[11] Jang, K., Bang, H., and Kim, Y., “Mitigating Time-Delay in Nonlinear Dynamics Inversion for Multirotor Unmanned Aerial
Vehicles,” Journal of Guidance, Control, and Dynamics, Vol. 47, No. 3, 2024, pp. 573–588. doi:10.2514/1.G007567, URL
https://doi.org/10.2514/1.G007567.
[12] Gao, S., Hong, H., Sun, S., Luo, L., and Hu, S., “Uncertainty Modeling Enabled Meta Adaptive Control for Aerial Manipulators,”
Journal of Guidance, Control, and Dynamics, Vol. 47, No. 10, 2024, pp. 2148–2163. doi:10.2514/1.G008068, URL
https://doi.org/10.2514/1.G008068.
32

[13] Manuel Portella-Delgado, J., Hrynuk, J. T., Yu, M., and Goel, A., “Real-Time Data-Driven Adaptive Lift Regulation in Developing
Long-Duration Gusts,” Journal of Guidance, Control, and Dynamics, Vol. 0, No. 0, 0, pp. 1–10. doi:10.2514/1.G008433, URL
https://doi.org/10.2514/1.G008433.
[14] Shanechi, M. M., “Brain–machine interfaces from motor to mood,” Nature Neuroscience, Vol. 22, No. 10, 2019, pp. 1554–1564.
doi:10.1038/s41593-019-0488-y, URL https://doi.org/10.1038/s41593-019-0488-y.
[15] Shanechi, M. M., “Brain–machine interfaces from motor to mood,” Nature Neuroscience, Vol. 22, No. 10, 2019, pp. 1554–1564.
doi:10.1038/s41593-019-0488-y, URL https://doi.org/10.1038/s41593-019-0488-y.
[16] Li, W., Song, Y., Cheng, L., and Gong, S., “Closed-loop deep neural network optimal control algorithm and error analysis for
powered landing under uncertainties,” Astrodynamics, Vol. 7, No. 2, 2023, pp. 211–228. doi:10.1007/s42064-022-0153-1,
URL https://doi.org/10.1007/s42064-022-0153-1.
[17] CHEN, S., and BILLINGS, S. A., “Neural networks for nonlinear dynamic system modelling and identification,” International
Journal of Control, Vol. 56, No. 2, 1992, pp. 319–346. doi:10.1080/00207179208934317.
[18] Qu, C., Cheng, L., Gong, S., and Huang, X., “Experience Replay Enhances Excitation Condition of Neural-Network Adaptive
Control Learning,” Journal of Guidance, Control, and Dynamics, Vol. 48, No. 3, 2025, pp. 496–507. doi:10.2514/1.G008162,
URL https://doi.org/10.2514/1.G008162.
[19] Ji, Z., and Shi, G., “Adaptive neural dynamic-based hybrid control strategy for stable retrieval of tethered satellite systems,”
Astrodynamics, Vol. 8, No. 2, 2024, pp. 261–269. doi:10.1007/s42064-023-0178-0, URL https://doi.org/10.1007/
s42064-023-0178-0.
[20] Liu, S., Lyu, W., Zhang, Q., Yang, C., and Whidborne, J. F., “Neural-Network-Based Incremental Backstepping Sliding
Mode Control for Flying-Wing Aircraft,” Journal of Guidance, Control, and Dynamics, Vol. 48, No. 3, 2025, pp. 600–614.
doi:10.2514/1.G008215, URL https://doi.org/10.2514/1.G008215.
[21] Deng, X., Wang, B., Zhang, Z., and Li, S., “Predefined-Time Attitude Tracking Robust Control of Flexible Spacecraft Under
Multiple Disturbances,” Journal of Spacecraft and Rockets, Vol. 62, No. 4, 2025, pp. 1083–1092. doi:10.2514/1.A36085, URL
https://doi.org/10.2514/1.A36085.
[22] Brahim-Belhouari, S., and Vesin, J., “Bayesian learning using Gaussian process for time series prediction,” Proceedings
of the 11th IEEE Signal Processing Workshop on Statistical Signal Processing (Cat. No.01TH8563), 2001, pp. 433–436.
doi:10.1109/SSP.2001.955315.
[23] Zheng, T., Cheng, L., Gong, S., and Huang, X., “Model incremental learning of flight dynamics enhanced by sample
management,” Aerospace Science and Technology, Vol. 160, 2025, p. 110049. doi:https://doi.org/10.1016/j.ast.2025.110049,
URL https://www.sciencedirect.com/science/article/pii/S1270963825001208.
33

[24] Chowdhary, G., Kingravi, H. A., How, J. P., and Vela, P. A., “Bayesian Nonparametric Adaptive Control Using Gaussian
Processes,” IEEE Transactions on Neural Networks and Learning Systems, Vol. 26, No. 3, 2015, pp. 537–550. doi:
10.1109/TNNLS.2014.2319052.
[25] Kalman, R. E., “A New Approach to Linear Filtering and Prediction Problems,” Journal of Basic Engineering, Vol. 82, No. 1,
1960, pp. 35–45. doi:10.1115/1.3662552, URL https://doi.org/10.1115/1.3662552.
[26] Mehra, R., “On the identification of variances and adaptive Kalman filtering,” IEEE Transactions on Automatic Control, Vol. 15,
No. 2, 1970, pp. 175–184. doi:10.1109/TAC.1970.1099422.
[27] Zhang, P., Wu, D., and Baoyin, H., “Real-time Hybrid Method for Maneuver Detection and Estimation of Non-cooperative
Space Targets,” Astrodynamics, Vol. 8, No. 3, 2024, pp. 437–453. doi:10.1007/s42064-024-0203-y, URL https://doi.org/
10.1007/s42064-024-0203-y.
[28] Morelli, E. A., and Smith, M. S., “Real-Time Dynamic Modeling: Data Information Requirements and Flight-Test Results,”
Journal of Aircraft, Vol. 46, No. 6, 2009, pp. 1894–1905. doi:10.2514/1.40764, URL https://doi.org/10.2514/1.40764.
[29] Feng, X., Lin, C.-F., and Coleman, N. P., “Frequency-Domain Recursive Robust Identification,” Journal of Guidance, Control,
and Dynamics, Vol. 23, No. 5, 2000, pp. 908–910. doi:10.2514/2.4628, URL https://doi.org/10.2514/2.4628.
[30] Fasel, U., Kaiser, E., Kutz, J. N., Brunton, B. W., and Brunton, S. L., “SINDy with Control: A Tutorial,” 2021 60th IEEE
Conference on Decision and Control (CDC), 2021, pp. 16–21. doi:10.1109/CDC45484.2021.9683120.
[31] Zhang, L., and Schaeffer, H., “On the Convergence of the SINDy Algorithm,” Multiscale Modeling & Simulation, Vol. 17,
No. 3, 2019, pp. 948–972. doi:10.1137/18M1189828.
[32] , D. J. C. M., “Probable networks and plausible predictions-a review of practical Bayesian methods for supervised neural
networks,” Network: Computation in Neural Systems, Vol. 6, No. 3, 1995, p. 469. doi:10.1088/0954-898X/6/3/011, URL
https://dx.doi.org/10.1088/0954-898X/6/3/011.
[33] Rudy, S. H., and Sapsis, T. P., “Sparse methods for automatic relevance determination,” Physica D: Nonlinear Phenomena,
Vol. 418, 2021, p. 132843. doi:https://doi.org/10.1016/j.physd.2021.132843, URL https://www.sciencedirect.com/
science/article/pii/S0167278921000014.
[34] Sandhu, R., Pettit, C., Khalil, M., Poirel, D., and Sarkar, A., “Bayesian model selection using automatic relevance determination
for nonlinear dynamical systems,” Computer Methods in Applied Mechanics and Engineering, Vol. 320, 2017, pp. 237
260. doi:https://doi.org/10.1016/j.cma.2017.01.042, URL https://www.sciencedirect.com/science/article/pii/
S0045782516313020.
[35] Froyland, G., “An analytic framework for identifying finite-time coherent sets in time-dependent dynamical systems,”
Physica D: Nonlinear Phenomena, Vol. 250, 2013, pp. 1–19. doi:https://doi.org/10.1016/j.physd.2013.01.013, URL https:
//www.sciencedirect.com/science/article/pii/S0167278913000286.
34

[36] Schlosser, C., and Korda, M., “Sparsity Structures for Koopman and Perron–Frobenius Operators,” SIAM Journal on Applied
Dynamical Systems, Vol. 21, No. 3, 2022, pp. 2187–2214. doi:10.1137/21M1466608, URL https://doi.org/10.1137/
21M1466608.
[37] Kaiser, E., Noack, B. R., Cordier, L., Spohn, A., Segond, M., Abel, M., Daviller, G., Östh, J., Krajnović, S., and Niven,
R. K., “Cluster-based reduced-order modelling of a mixing layer,” Journal of Fluid Mechanics, Vol. 754, 2014, pp. 365–414.
doi:10.1017/jfm.2014.355.
[38] Zhang, X., Ji, T., Xie, F., Zheng, C., and Zheng, Y., “Data-Driven Nonlinear Reduced-Order Modeling of Unsteady
Fluid-Structure Interactions,” Physics of Fluids, Vol. 34, 2022, p. 53608. doi:10.1063/5.0090394.
[39] Li, Z., Yuan, H., Han, W., Hou, Y., Li, H., Ding, H., Jiang, Z., and Yang, L., “Bi-level identification of governing equations for
nonlinear physical systems,” Nature Computational Science, Vol. 5, No. 6, 2025, pp. 456–466. doi:10.1038/s43588-025-00804-x,
URL https://doi.org/10.1038/s43588-025-00804-x.
[40] Oulhiq, R., Benjelloun, K., Kali, Y., and Saad, M., “A bi-level optimization approach for historical data-driven system
identification,” Journal of Control, Automation and Electrical Systems, Vol. 34, No. 1, 2023, pp. 73–84. doi:10.1007/s40313
022-00951-w.
[41] Holt, H., Baresi, N., and Armellin, R., “Reinforced Lyapunov controllers for low-thrust lunar transfers,” Astrodynamics, Vol. 8,
No. 4, 2024, pp. 633–656. doi:10.1007/s42064-024-0212-x, URL https://doi.org/10.1007/s42064-024-0212-x.
[42] Julier, S., Uhlmann, J., and Durrant-Whyte, H., “A new method for the nonlinear transformation of means and covariances in
filters and estimators,” IEEE Transactions on Automatic Control, Vol. 45, No. 3, 2000, pp. 477–482. doi:10.1109/9.847726.
[43] Van der Merwe, R., and Wan, E., “The square-root unscented Kalman filter for state and parameter-estimation,” 2001 IEEE
International Conference on Acoustics, Speech, and Signal Processing. Proceedings (Cat. No.01CH37221), Vol. 6, 2001, pp.
3461–3464 vol.6. doi:10.1109/ICASSP.2001.940586.
[44] Park, T., and Casella, G., “The Bayesian Lasso,” Journal of the American Statistical Association, Vol. 103, No. 482, 2008, pp.
681–686. doi:10.1198/016214508000000337.
[45] Yang, W. H., “A method for updating Cholesky factorization of a band matrix,” Computer Methods in Applied Mechanics
and Engineering, Vol. 12, No. 3, 1977, pp. 281–288. doi:https://doi.org/10.1016/0045-7825(77)90017-2, URL https:
//www.sciencedirect.com/science/article/pii/0045782577900172.
[46] Muthukrishnan, R., and Rohini, R., “LASSO: A feature selection technique in predictive modeling for machine learning,” 2016
IEEE International Conference on Advances in Computer Applications (ICACA), 2016, pp. 18–20. doi:10.1109/ICACA.2016.
7887916.
[47] Li, D., Tsourdos, A., Wang, Z., and Ignatyev, D., “Nonlinear Analysis for Wing-Rock System with Adaptive Control,” Journal
of Guidance, Control, and Dynamics, Vol. 45, No. 11, 2022, pp. 2174–2181. doi:10.2514/1.G006775.
35

[48] Singh, S. N., Yirn, W., and Wells, W. R., “Direct Adaptive and Neural Control of Wing-Rock Motion of Slender Delta Wings,”
Journal of Guidance, Control, and Dynamics, Vol. 18, No. 1, 1995, pp. 25–30. doi:10.2514/3.56652.
36

---

## Processing Information

- **Processing Library:** Zotero PDFWorker
- **Processing Date:** 2026-02-10T18:15:24.287Z
- **Text Length:** 84053 characters
- **Success:** Text extraction completed
- **PDF Library Used:** Zotero PDFWorker
- **Pages Processed:** 36 of 36
