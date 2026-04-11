# PDF Document: Deyn et al. - 2025 - Mean-Field Limits for Two-Layer Neural Networks Trained with Consensus-Based Optimization.pdf

**File Path:** Deyn et al. - 2025 - Mean-Field Limits for Two-Layer Neural Networks Trained with Consensus-Based Optimization.pdf

**Processed Date:** 2026-02-10T18:14:34.973Z

**File Size:** 804.00 KB

**Total Pages:** 20

**Extracted Pages:** 20

**PDF Library:** Zotero PDFWorker

**Attachment Item ID:** 3793

**Title:** Mean-Field Limits for Two-Layer Neural Networks Trained with Consensus-Based Optimization

**Collection:** Large Files > Random Papers

---

## Extracted Text Content

Mean-Field Limits for Two-Layer Neural Networks Trained with
Consensus-Based Optimization
William De Deyn1,2, Michael Herty1,3, and Giovanni Samaey2
1Institut f ̈ur Geometrie und Praktische Mathematik, RWTH Aachen University, Germany 2Department of Computer Science, KU Leuven, Belgium 3Extraordinary Professor, Department of Mathematics and Applied Mathematics, University of Pretoria, South Africa
November 27, 2025
Abstract
We study two-layer neural networks and train these with a particle-based method called consensusbased optimization (CBO). We compare the performance of CBO against Adam on two test cases and demonstrate how a hybrid approach, combining CBO with Adam, provides faster convergence than CBO. In the context of multi-task learning, we recast CBO into a formulation that offers less memory overhead. The CBO method allows for a mean-field limit formulation, which we couple with the mean-field limit of the -
neural network. To this end, we first reformulate CBO within the optimal transport framework. Finally, in the limit of infinitely many particles, we define the corresponding dynamics on the Wasserstein-over-Wasserstein space and show that the variance decreases monotonically.
Keywords: optimization, neural networks, mean-field limits, particle methods, optimal transport
1 Introduction
Artificial Intelligence has witnessed remarkable progress over the past decades, both in its capabilities and its range of applications. Today, neural networks are present in a variety of fields. One classical application is function approximation, which is supported by the universal approximation theory [34]. In computer vision, convolutional neural networks form the backbone of most modern architectures [39, 38], while the framework of neural ordinary differential equations has contributed signi-
ficantly to optimal control problems [17, 10]. In natural language processing and speech recognition, recurrent neural networks and the long short-term memory variants have yielded significant performance improvements [33, 51]. More recently, diffusion models have illustrated to be powerful generative models, with applications ranging from image denoising to video generation [56]. Neural networks have even found their way into scientific computing. The most notably example is physicsinformed neura-
l networks, which are capable of solving both forward and inverse problems governed by partial differential equations [50].
A neural network can be viewed, in general, as a function parametrized by a set of weights and biases, which we collectively refer to as parameters. A two-layer neural network, for example, is written as
gˆ(x; θ) = c⊤σ (W x + b) , (1)
with x ∈ Rd, W ∈ RM×d, b, c ∈ RM and σ(x) : R → R the activation function. Here, θ = (W, b, c) ∈ Rdo represents a vector containing all parameters of the neural network, with do = M (d + 2) denoting the optimization dimension. A key factor behind the success of neural networks across diverse applications is their ability to approximate highly complex functions by suitable choice of θ. The process of finding the best parameters θ is more commonly known as training the neural network. Training is ty-
pically
1
arXiv:2511.21466v1 [cs.LG] 26 Nov 2025

formulated as the minimization of the empirical risk function
Rˆ(θ) = 1
S
S X
s=1
L (ys, gˆ (xs; θ)) , (2)
where L represents a loss function and S the number of data points [54]. The loss function denotes the discrepancy between a true sample ys and the model prediction made from the input sample xs. Currently, the standard method to find the minimizer of (2) is stochastic gradient descent (SGD) or adaptive variants, such as Adam [11, 36]. The optimization of the risk function is a difficult task [30, 29], primarily because the objective function is in general nonconvex. Gradient-based methods, such a-
s SGD, are susceptible to becoming trapped in local minima. Other well-known difficulties include the vanishing gradient and exploding gradient phenomena [45, 5]. One alternative approach is to apply particle-based methods, such as Consensus-Based Optimization (CBO). The CBO method is a gradient free, global optimization method designed for high-dimensional, nonconvex objective functions [48, 12, 14, 28, 13, 35, 37, 25, 26, 27, 8, 15, 7, 31, 32]. The CBO method allows for the passage to the mean-f-
ield limit as the number of particles tends to infinity.
In this paper, we explore the feasibility of training neural networks using Consensus-Based Optimization and compare its performance against the popular Adam method. Owing to the natural mean-field formulation of CBO, we also study its mean-field limit. We consider the mean-field limit of two-layer neural networks, similar to the works [41, 43, 53, 52, 2, 19]. In the same spirit, we aim to derive a time-discrete mean-field limit governing the CBO dynamics on infinite wide neural networks.
The remainder of this paper is organized as follows. Section 2 reviews the Barron space, which is a function space containing functions that can be efficiently represented by two-layer neural networks. Next, in Section 3, we review the general training problem in machine learning and shortly discuss Adam and Consensus-Based Optimization. We also present two variants of CBO, such as a hybrid method and Multi-Task CBO. In Section 4, we cover numerical experiments comparing the performance of CBO to -
Adam in training neural networks. Additionally, we provide an experiment illustrating the capabilities of Multi-Task CBO. Section 5 establishes the mean-field limits in two regimes: first, as the number of hidden neurons tends to infinity; and second as the number of optimization particles tends to infinity. Finally, Section 6 summarizes the main findings and presents the conclusion.
2 The Barron Space
In this section, we introduce the Barron space, which is a function space suited for approximation by two-layer neural networks. First, we rewrite and scale the neural network formulation in (1) by considering the two-layer neural network as a function gˆM (x; θ) : X → R of the form
gˆM (x; θ) = 1
M
M X
m=1
cmσ(w⊤
mx + bm), (3)
with x ∈ X ⊆ Rd, wm ∈ Rd, bm, cm ∈ R [24]. The parameter M ∈ N denotes the number of neurons in the hidden layer, i.e., the width of the two-layer neural network. The neural network is parameterized by weights wm,j, cm and biases bm, which we collect into the parameter vector θ := {wm,j, bm, cm}mM=1, j = 1, . . . , d. For an empirical measure μˆ ∈ P2(Rd+2) defined by
μˆ(w, b, c) = 1
M
M X
m=1
δ(w − wm)δ(b − bm)δ(c − cm), (4)
the neural network in (3) can be rewritten as a function gˆM (x) : X → R
gˆM (x) =
Z
Ω
cσ(w⊤x + b)dμˆ(w, b, c), Ω = Rd × R × R, (5)
2

and where Ω represents our parameter space. We restrict the representing measures to P2 Rd+2 , following [20]. In the mean-field regime of neural networks, we consider the limit M → ∞. For an arbitrary probability measure μ ∈ P2 Rd+2 , the mean-field limit yields a representation of a neural network as g(x) =
Z
Ω
cσ(w⊤x + b)dμ(w, b, c) = Eμ
h
cσ(w⊤x + b)
i
. (6)
For functions of the form (6) with a RELU activation function, the Barron norm is defined as
∥g∥B := inf
μ∈P2(Rd+2) max
(w,b,c)∈supp(μ) |c| (∥w∥1 + |b|) . (7)
Functions with a finite Barron norm (7) form the Barron space [3, 24]. The Barron norm can be bounded, with G denoting the Fourier transformation of g, as
∥g∥B ≤ 2 inGf
Z
R
d
∥ω∥2
1 |G(ω)| dω + 2∥∇g(0)∥1 + 2|g(0)|, (8)
which shows that sufficiently regular functions are in the Barron space. Two-layer neural networks gˆM can approximate functions g in the Barron space up to an arbitrary precision, where the approximation error satisfies
∥g (·) − gˆM (·; θ) ∥2 ≤ 3∥g∥2
B
M . (9)
With the measure-based viewpoint of neural networks, introduced in Eq. (6), we can consider continuous optimization schemes and analyse the training of infinite wide neural networks. Section 5 elaborates further on a particle-based method for optimizing infinitely wide neural networks.
3 Optimization Methods
In this section, we formulate the general optimization problem underlying neural network training. Next, we present the Adam optimizer and the Consensus-Based Optimization method. Lastly, we introduce two variants of the CBO method, namely a hybrid method that combines Adam and CBO and a Multi-Task CBO formulation.
3.1 General Training Problem
The central goal in machine learning is to approximate an unknown function g : X → Y based on observed data. We assume that g can be well represented by two-layer neural networks with parameters θ. Training the neural network then amounts to finding parameters θ such that neural network gˆ (x; θ) approximates the unknown function as accurately as possible.
The quality of the approximation is typically measured with a loss function L, which quantifies the discrepancy between the neural network predicition yˆs = gˆ (xs; θ) and the observed label ys. From a theoretical perspective, training a neural network can be understood as minimizing the risk function R(θ). The risk function is defined as the expected loss with respect to a data distribution P (x, y):
R(θ) =
Z
X ×Y
L(y, gˆ(x; θ))dP (x, y). (10)
In practice, the true data distribution is not known. Therefore, the risk function R(θ) is approximated by the empirical risk
Rˆ (θ) = 1
S
S X
s=1
L (ys, gˆ(xs; θ)) , (11)
where {(xs, ys)}S
s=1 denotes the training dataset [54].
The choice of L depends on the particular task. For regression, where Y = R, the squared error loss
L (y, yˆ) = (y − yˆ)2 , (12)
3

leads to the Mean Squared Error (MSE) risk [30]. For classification with C classes, the standard choice is the cross-entropy loss function
L (y, yˆ) = −
C X
c=1
yc log(yˆc), (13)
where y is a one-hot encoded label and yˆ a probability vector obtained after applying the softmax function to the output of the neural network [42]. There exist many other loss functions in machine learning, such as hinge loss, Huber loss and logistic loss.
Training a neural network can thus be formulated as an optimization problem, where we aim to find
θ∗ = argmin
θ
Rˆ (θ) , (14)
with the empirical risk Rˆ (θ) defined as in Eq. (11). The empirical risk function is typically nonconvex due to the nonlinear structure of the neural networks [30]. Standard optimization methods in machine learning rely on the gradient of the empirical risk, with Adam being the most popular [36]. However, gradient-based methods tend to converge to local minima in nonconvex landscapes. Particlebased optimization methods, such as Consensus-Based Optimization, are known as global optimization method-
s, for which convergence to the global minimizer of certain nonconvex functions is theoretically guaranteed.
3.2 Gradient-Based Optimization
Nearly all neural networks are trained with gradient-based methods. The most popular are by far Stochastic Gradient Descent (SGD) and adaptive variants such as Adam. In what follows, we provide a brief overview of these two methods, which form the foundation of modern neural network training.
Stochastic Gradient Descent is an adaptation of the classical Gradient Descent method [30]. Gradient Descent is an iterative method that updates the model parameters in the direction of the negative gradient of the objective function [44]. While classical Gradient Descent often employs a line search to determine an optimal step size, it is common in neural network training to use a fixed step size for simplicity. At iteration k, the step direction dk is given by
dk = 1
S
S X
s=1
∇θL ys, gˆ(xs; θk) , (15)
and the parameters are updated according to
θk+1 = θk − ∆tdk, (16)
where ∆t > 0 denotes the time step or the learning rate. A major drawback of Gradient Descent is that computing the step direction at each iteration scales linearly with the dataset size, O(S). Datasets in machine learning can easily contain up to one million data points, making Gradient Descent computationally expensive.
SGD alleviates this issue by considering a minibatch of data points {(xs, ys)}S′
s=1 drawn uniformly
from the dataset. The minibatch size S′ ≪ S is chosen before training. The step direction dk in SGD equals
dk = 1
S′
S X′
s=1
∇θL ys, gˆ(xs; θk) , (17)
which is an unbiased estimator of the full gradient (15). At iteration k, the gradient is computed using the current minibatch, and the parameters are subsequently updated. At the next iteration k + 1, a new minibatch is sampled. One pass through the complete training dataset, where each data point has been used once for updating the parameters, is referred to as an epoch.
4

The performance of SGD depends heavily on the choice of the learning rate ∆t. There is a trade-off: a larger learning rate yields faster progress, but is more unstable; a smaller learning rate improves stability but converges slower. In practice, the learning rate decays during training according to a predefined schedule. However, there also exist adaptive algorithms, such as Adam, that adapt the learning rate individually for each parameter based on the gradient history. Given the stochastic gra-
dient dk from Eq. (17), Adam estimates the first and second moment as
sk+1 = β1sk + (1 − β1)dk rk+1 = β2rk + (1 − β2)dk ⊙ dk, (18)
with the decay parameters β1, β2 ∈ [0, 1) and where ⊙ represents the elementwise multiplication. The moment estimates are normalized to correct for the initial bias:
sˆk+1 = sk+1
1 − βk+1
1
rˆk+1 = rk+1
1 − βk+1
2
. (19)
Finally, Adam updates the parameters θ as follows
θk+1 = θk − ∆t sˆk+1
√rˆk+1 + δ , (20)
with δ a small constant for numerical stability. The initial values for the first and second moment estimates s0 and r0 are set to zero. By adapting learning rates per parameter, Adam typically achieves faster convergence than plain SGD.
3.3 Consensus-Based Optimization
We introduce Consensus-Based Optimization, a global optimization method well suited for nonconvex, nonsmooth objective functions [48]. We aim to minimize the empirical risk (11). To find the minimum, we consider an ensemble of N particles θkn ∈ RM(d+2), n = 1, . . . , N with N ∈ N at time step k. The state of the particles evolves according to the discretized stochastic differential equation
θk+1
n = θk
n − λ∆t θk
n − V k + σ ̃√∆t θk
n − V k ⊙ ξk
n, ξk
n ∼ N (0, I) , (21)
with λ, σ ̃ > 0 representing the drift and diffusion parameters respectively. The dynamics combine a drift towards the consensus point with a diffusion term that promotes exploration. The consensus point V ∈ RM(d+2) is calculated as a weighted average
Vk =
1 N
PN
n=1 θkn exp −αRˆ(θkn)
1 N
PN
n=1 exp −αRˆ(θkn)
=
N X
n=1
β(θk
n)θk
n, β(θk
n) = exp(−αRˆ(θkn))
PN
n=1 exp(−αRˆ(θkn)) , (22)
where the weight β(θkn) depends on the relative performance of the particle in the optimization landscape. In statistical physics, the parameter α > 0 represents the inverse temperature. The initial positions of the particles θ0n are distributed independently and identically according to a chosen initial
distribution ρ0.
The computation of the consensus point V k requires evaluating the empirical risk for each particle θkn. This process can become computationally demanding when the number of particles or the size of the training set is large. To reduce the cost, a minibatch strategy analogous to that used in SGD
can be applied within CBO. Let {(xs, ys)}S′
s=1, S′ ≪ S, denote a minibatch of training data drawn uniformly from the training dataset. The corresponding minibatch empirical risk is then defined as
Rˆ(θk
n) = 1
S′
S X′
s=1
L ys, gˆ(xs; θk
n) . (23)
At iteration k, the consensus point is computed using the current minibatch, and the particle positions are subsequently updated. At the next iteration k + 1, a new minibatch is sampled. One pass through
5

the complete training dataset, where each data point has been used once for updating the particles, is referred to as an epoch.
The consensus-based optimization scheme converges under certain conditions. In [14], the authors show that for high dimensional problems and anisotropic noise, we need 2λ > σ ̃2 to form consensus, which is independent of the optimization dimension. Secondly, we note that the consensus point in (22) is a finite particle discretization of the mean of a Gibbs-type measure. By the Laplace principle [23]
αli→m∞ − 1
α log
Z
exp −αRˆ(θ) ρ (θ) dθ = mθin
Rˆ(θ), (24)
the Gibbs measure concentrates exponentially around the global minimiser of the objective function. Consequently, the consensus point will converge towards the global minimiser, provided that θ∗ ∈ supp ρ0 [12]. The particle-based nature of CBO enables the formulation of a mean-field limit for N → ∞. For analytical results on the mean-field limit, we refer to [12, 28, 35, 37, 25].
3.4 Variants
3.4.1 Hybrid Method
A natural approach to develop a new method is to combine two existing methods. We devise a hybrid method where we combine an Adam step and a CBO step together, similar to [55]. Formally, the update is given by
θk+1
n = θk
n − γ∆t sˆnk+1
prˆk+1
n + δ + (1 − γ) −λ∆t θk
n − V k + σ ̃√∆t θk
n − V k ⊙ ξk
n , (25)
where γ is a parameter between 0 and 1 and controls how much influence CBO or Adam have on the update. The first and second moment estimates are computed as in (18) and (19), with the gradient for each particle given by
dk
n= 1
S
S X
s=1
∇θL ys, gˆ(xs; θk
n) . (26)
In the hybrid method, the minibatch strategy involves using the same minibatch to compute the gradient and the consensus point, as explained in Subsections 3.2 and 3.3.
3.4.2 Multi-Task CBO
Multi-task learning is another area of machine learning where the CBO method can be naturally applied to. Multi-task learning is a multi-objective optimization problem with the goal to improve the generalization of a model [16]. Instead of building a separate model for each task, one model shares parts of its internal representation. The knowledge gained from one task can improve the performance
of other tasks. In practice, the multi-task risk is often of the form Rˆ = P
p κpRˆ (Tp), with Rˆ (Tp) the empirical risk associated to task or problem Tp and a weight κp. Currently, multi-task models are trained with a gradient method. However, the gradient methods have several drawbacks. One key aspect is that the gradients have to be balanced by updating the weights κp to avoid one specific task from dominating the training of the model [18]. Another issue is gradients from different tasks conflicting with one another [57]. This can be alleviated by projecting one of th-
e gradients of a task onto another gradient.
The CBO method allows for a natural and memory-efficient implementation of the multi-task training [7]. Figure 1 provides a conceptual illustration. Consider the training of a single neural network with CBO to approximate a given function. A requirement for convergence to the global minimizer is that θ∗ ∈ supp ρ0 . Accordingly, we initialize particles by sampling from the distribution ρ0.
Now consider a second, related approximation problem to the first. If the task is sufficiently similar, we expect the corresponding global minimizer to lie close to the first minimizer, in particular, within the support of ρ0, as illustrated in Figure 1. In this case, there is no need to sample additional new
6

particles for the second task; the particles used for the first task can be reused for the second task. More generally, the particles can be recycled across multiple tasks, provided that the global minimizers of these tasks remain within supp ρ0 .
A practical strategy for choosing the number of particles is to set N equal to the number of tasks. In that case, an increasing number of tasks results in improved optimization accuracy, since each empirical
risk function Rˆ (Tp) is optimized with a larger population of particles. In the multi-task context, CBO does not need a particle ensemble for each task, reducing the memory overhead. However, a larger particle count than the number of tasks is also feasible in practice.
0.2 0.4 0.6 0.8 1
0.2
0.4
0.6
0.8
1 Single-task CBO
0.2 0.4 0.6 0.8 1
0.2
0.4
0.6
0.8
1 Multi-task CBO
Global Minimizer Particles Supp ρ0
Figure 1: Conceptual illustration of single-task versus Multi-Task CBO. In single-task CBO a single consensus point guides all particles toward the global minimizer of one empirical risk. In Multi-Task CBO the same particle ensemble is recycled across related tasks whose minimizers lie within the support of the common initialization ρ0.
We can reformulate the CBO method in the multi-task setting as
(
θk+1
n = θkn − λ∆t θkn − V Tpk + σ ̃√∆t θkn − V Tpk ⊙ ξkn
T k+1
p = Tpk
, n = p = 1, . . . , N, (27)
where the number of consensus points equals the number of tasks. The consensus point is given by
V Tk
p=
1 N
PN
n=1 θkn exp −αRˆ θkn, Tpk
1 N
PN
n=1 exp −αRˆ θkn, Tpk
. (28)
4 Numerical Examples
In this section, we present three numerical experiments designed to illustrate and evaluate the optimization methods discussed in Section 3. The implementation is publicly available online [22].
4.1 Example 1: Sine Approximation
The goal of the first experiment is to investigate the applicability of CBO to train two-layer neural networks. To this end, we compare CBO with Adam, focusing on both the minimal empirical risk obtained and the stability of the training procedure.
7

The experiment setup is the following: consider a one-dimensional regression problem, where the goal is to approximate the function x 7→ sin(2πx) on the domain [0, 1] using a finite two-layer neural network, as in Eq. (3). The neural network has a RELU activation function. We take the width of the neural network M = 100. We sample 8000 data points xs uniformly on the interval [0, 1] and apply
the function ys = sin(2πxs) + 0.01ξs, with ξs ∼ N (0, 1), to generate the training dataset {(xs, ys)}8000
s=1 .
We apply the minibatch strategy to both Adam and CBO using a minibatch size of S′. We choose the squared error loss, as in (12), for the loss function. We initialize the particles of the CBO method from the uniform distribution θ0n ∼ U [−1, 1]. For Adam, we keep the default initialization of the neural network parameters provided by PyTorch [46].
The training of the two-layer neural network with CBO is carried out with the following parameters:
N = 200, ∆t = 0.1, α = 105, λ = 1, σ ̃ = √1.6, S′ = 800.
Parameters shared between CBO and Adam, such as the minibatch size S′ and the learning rate (or equivalently time step) ∆t, are always taken equal. Every 100 epochs, the parameter α is multiplied by 10 until it reaches 107. Lastly, we run the experiment ten times with different seeds and present the median of the results.
Figure 2 shows the empirical risk per epoch, comparing the optimization performance of CBO and Adam. In Figure 3, we present the approximation obtained with a two-layer neural network trained with CBO and Adam.
In Figure 2, we observe that the CBO method converges to a lower empirical risk than Adam. The CBO method also exhibits better stability than Adam. Figure 3 confirms that both CBO and Adam find a good approximation of the sine function. We do note, however, that the computational cost per iteration is higher for CBO, since a forward pass through the neural network is required for each particle.
0 200 400 600 800 1000
10−4
10−3
10−2
10−1
Epoch
Empirical Risk ˆ
R (θ)
Neural Network Training
CBO Adam
Figure 2: Empirical risk Rˆ(θ) as a function of training epochs for a two-layer neural network trained with Adam and CBO. The figure displays the median empirical riks taken over 10 simulations.
0 0.1 0.2 0.3 0.4 0.5 0.6 0.7 0.8 0.9 1
−1.5
−1
−0.5
0
0.5
1
1.5
x
sin(2πx)
Sine Regression
Training Data CBO Adam
Figure 3: Approximations of the sine function sin(2πx) obtained with a two-layer neural network with M = 100 trained with CBO and Adam. The plot only contains a subset of the training dataset to improve the clarity.
4.2 Example 2: MNIST
In the second experiment, we further investigate the applicability of CBO in training two-layer neural networks to classify the MNIST dataset [40]. This is a standard classification problem in machine learning, and commonly used to benchmark new methods and models. We compare CBO, Adam and the hybrid method on both the minimal empirical risk achieved and the stability of the training.
8

The experiment setup is the following: consider the multi-class classification of the MNIST dataset with C = 10 classes. We again use a two-layer neural network with a width M = 20 and the RELU activation function. The MNIST dataset contains grayscale images of 28 × 28 pixels. We flatten these images to vectors with 784 elements, which represent the input data points xs. In the MNIST dataset, the true labels are given as class indices, i.e., ys ∈ {1, . . . , C}. We take a subset of 10 000 images -
to
form the training dataset {(xs, ys)}10000
s=1 . We apply the minibatch strategy to Adam, CBO and the
hybird method using a minibatch size of S′. The neural network outputs a ten dimensional vector yˆs. We choose the cross-entropy loss function of PyTorch, similar to Eq. (13), which internally applies the softmax function to the predicitions [46]. We initialize the particles of the CBO method from the uniform distribution θ0n ∼ U[−1, 1]. For Adam, we keep the default initialization of the neural network parameters provided by PyTorch.
The training of the two-layer neural network with CBO is carried out with the following parameters:
N = 1000, ∆t = 0.1, α = 105, λ = 1, σ ̃ = √1.4, S′ = 1000.
Parameters shared between CBO and Adam, such as the minibatch size S′ and the time step ∆t, are taken equal. The parameters of the hybrid method are set as:
N = 1000, ∆t = 0.1, α = 104, λ = 1, σ ̃ = √1.2, S′ = 1000, γ = 0.7.
Figure 4 illustrates the empirical risk per epoch for CBO, Adam and the hybrid method. We observe that Adam obtains a significantly lower empirical risk than CBO and converges faster. However, we notice that at approximately the same risk values, the Adam method becomes unstable and moves towards sub-optimal areas of the optimization landscape. The hybrid method, which combines CBO and Adam, has a faster convergence than CBO and is more stable than Adam. However, the hybrid method also experiences-
 a decrease in stability near the same risk value, but the effect is considerably less severe.
0 2000 4000 6000 8000 10000
10−10
10−7
10−4
10−1
102
Epoch
Empirical Risk ˆ
R(θ)
Neural Network training
CBO Adam CBO+Adam
Figure 4: Empirical risk Rˆ(θ) as a function of training epochs for a two-layer neural network trained with Adam, CBO and the hybrid method (Adam + CBO) on the MNIST dataset.
The instablility of the Adam method in Figure 4 is likely due to the exploding gradient phenomena [47]. The improved stability of the hybrid method is a consequence of the fact that the minimizer is represented by the consensus point V k. For the consensus point to suddenly jump due to the exploding gradient phenomena, all particles would need to move simultaneously in approximately the same direction. However, before convergence, the particles are distributed across the optimization landscape, so-
 they do not experience the exploding gradients simultaneously; interaction through the consensus point stabilizes the dynamics.
9

4.3 Example 3: Multi-Task CBO
In the third example, we study wether the particle recycling stratety of Multi-Task CBO is able to minimize multiple empirical risk functions. Specifically, we assess whether the empirical risk consistently decreases throughout training for all considered tasks.
We set up the experiment as follows: consider the approximation problem of 100 shifted sine functions, where the goal is to approximate each function using a different two-layer neural network. We take 100 functions of the form (x, ∆yp) 7→ sin(2πx) + ∆yp on the domain [0, 1], where the shifts are uniformly spaced in [−1, 1], ∆yp = −1 + 2(p − 1)/99, p = 1, . . . , 100. We assume that the shifted sine functions admit similar neural network representations and hence we expect their corresponding glob-
al minimizer to be in close proximity to each other.
The neural networks have a RELU activation function and a width of M = 100. We sample 8000 data points xs uniformly on the interval [0, 1] and apply the function ys,p = sin(2πxs) + ∆yp to generate
100 training datasets {(xs, ys,p)}8000
s=1 , p = 1, . . . , 100. We apply the minibatch strategy, dividing
each dataset into minibatches of size S′. The loss function for each task p is the squared error loss,
resulting in 100 different MSE risks Rˆp. We initialize the particles of the CBO method from the uniform distribution θ0n ∼ U [−1, 1].
The parameters of the experiment are:
N = 200, ∆t = 0.2, α = 104, λ = 1, σ ̃ = √1.8, S′ = 800.
Every 100 epochs, the parameter α is multiplied by 10 until it reaches 107. Lastly, we run the experiment ten times to average out as much noise.
Given 100 different problems, the Multi-Task CBO method has 100 different consensus points. When optimizing with 200 particles, it is necessary to determine which particles move towards which consensus point. The particle update strategy of is as follows: the first two particle will move towards the first consensus point, the third and fourth particles will move to the second consensus point and so forth. Multi-Task CBO effectively assigns two particles to each problem.
Figure 5 presents the median and minimum empirical risk per epoch. The median and minimum are taken over the 100 tasks during training. In Figure 6, we display the approximation results for five problems. In Figure 5, we observe that both the minimum and median decrease during training, indicating that the CBO method effectively minimizes the risk for all tasks. In Figure 6, we observe an accurate approximation for these five problems, confirming that CBO successfully trained multple tasks using t-
he same particle set.
10

0 200 400 600 800 1000
10−4
10−3
10−2
Epoch
Empirical Risk ˆ
R (θ)
Neural Network Training
Median Risk Minimum Risk
Figure 5: The median and minimum empirical
risk Rˆ(θ) as a function of training epochs for two-layer neural networks trained with Multi-Task CBO. The median and minimum are taken over 100 different risk functions.
0 0.1 0.2 0.3 0.4 0.5 0.6 0.7 0.8 0.9 1
−2
−1
0
1
2
x
sin(2πx) + ∆y
Different Sine Regressions
Problem 1 Problem 25 Problem 50 Problem 75 Problem 100
Figure 6: Approximation of five different sine functions obtained with five different two-layer neural networks, each with M = 100. The neural networks are trained with Multi-Task CBO.
5 Mean-field Limits
This section provides a study of mean-field limits, as indicated in Figure 7. We derive an explicit JKO scheme that arises in the limit to infinity of both the width of the neural network M and the number of particles N . In Subsection 5.1, we start from the classical CBO formulation, detailed in Subsection 3.3, and take the width of the neural network to infinity (M → ∞). We obtain an optimal transport (OT) formulation of CBO. Starting from the optimal transport formulation of CBO, Subsection 5.2-
 derives the time-discrete mean-field limit (N → ∞). Further, we show that the population variance decreases each iteration.
Finite dimension Rd Infinite dimension P2
(Rd)
Classical CBO
Fokker–Planck equation on Rd
Optimal transport CBO
Wasserstein over Wasserstein gradient flows
N →∞ N →∞
M →∞
M →∞
M
=
N
→
∞
Figure 7: Diagram illustrating possible derivations of the mean-field limits. In this paper, we consider the blue path, starting from the classical CBO formulation (dashed box) of Section 3 and proceeding with M and then N to infinity.
5.1 The infinite width limit (M → ∞)
The classical CBO formulation described in Section 3 formally breaks down when the number of hidden neurons M tends to infinity, due to the fact that the optimization dimension equals M (d + 2). Instead of representing each neural network as a point in RM(d+2), we therefore choose to represent the neural networks by corresponding measures μn, as introduced in Section 2. We reformulate the dynamics in the Wasserstein space, similar to the work [9]. For an ensemble of N particles μkn ∈ P2 Rd+2 and a
11

time step ∆t ∈ (0, 1] we have
μk+1
n = ((1 − ∆t) Id + ∆tTn)# μk
n, n = 1, . . . , N, (29)
with Tn : Rd+2 → Rd+2 the optimal transport map defined as
μk = (Tn)# μk
n, n = 1, . . . , N, (30)
and μk represents the consensus point, i.e., the barycenter in P2 Rd+2 . It is given by
μk = arg mνin
1 2
N X
n=1
β μk
n W2
2 ν, μk
n , β(μk
n) = exp(−αRˆ(μkn))
PN
n=1 exp(−αRˆ(μkn)) . (31)
We note that the dynamics in (29) are fully deterministic. To the best of our knowledge, no formulation of Brownian motion on P2 Rd+2 is currently available. As a result, the optimal transport formulation of CBO does not include a diffusion term. However, the noise can be added after discretization with empirical measures μˆkn, yielding dynamics that closely resemble the classical CBO formulation.
We consider the optimal transport formulation of CBO in the single-task setting, although it can also be written in the multi-task setting as
(
μk+1
n = ((1 − ∆t) Id + ∆tTn)# μkn
T k+1
p = Tpk
, n = p = 1, . . . , N, (32)
where now the barycenter depends on the particular task Tp
μ Tk
p = arg mνin
1 2
N X
n=1
β μk
n, T k
p W2
2 ν, μk
n , β μk
n, T k
p = exp(−αRˆ μkn, Tpk )
PN
n=1 exp(−αRˆ μkn, Tpk ) . (33)
At any given time, it holds that the consensus point and barycenter are applications of a weighted Fr ́echet mean in the corresponding metric space:
Proposition 1. The representation of the consensus point in Rd (Eq. (22)) and the barycenter in
P2 Rd (Eq. (31)) are equal in the following sense:
x = arg mvin
1 2
N X
n=1
β (xn) d2 (v, xn) , (34)
where d (·, ·) denotes the distance function in Rd and P2(Rd), respectively.
Proof. The consensus point in Rd is the result of the minimization of
F (v) = 1
2
N X
n=1
β (θn) ∥v − θn∥2
2. (35)
Given F ∈ C1 Rd , an optimal point must satisfy the first-order necessary condition
0 = ∇F (v) = −
N X
n=1
β (θn) (θn − v) . (36)
Solving (36) yields the minimizer
v=
N X
n=1
β (θn) θn, (37)
which is the classical consensus point, see Equation (22). For the barycenter in P2(Rd), Equation (31) fullfills Proposition 1.
12

Proposition 2. Assume empirical measures of the form
μˆn = 1
M
M X
i=1
δ (x − xn,i) ∈ P2(Rd), n = 1, . . . , N. (38)
The barycenter in Eq. (31) is given by
μ ̄ = 1
M
M X
j=1
δ (y − yj) ∈ P2(Rd), (39)
with support points
yj =
N X
n=1
β(μˆn)
M X
i=1
(π∗
n)j,i xn,i, j = 1, . . . , M, (40)
where π∗n ∈ Rd×d is a permutation matrix.
Proof. For any M , let μˆn ∈ P2 Rd be
μˆk
n= 1
M
M X
i=1
δ (x − xn,i) . (41)
Then, the barycenter is of the form
νˆ = 1
M
M X
j=1
δ (y − yj) , (42)
and according to Proposition 1, obtained as the minimization of
F (νˆ) = 1
2
N X
n=1
β (μˆn) W 2
2 (νˆ, μˆn) . (43)
Substituting Equations (41) and (42) into (43) yields
F (y1, . . . , yM ) = 1
2
N X
n=1
β (μˆn) min
πn∈Π
M X
j=1
M X
i=1
1
M (πn)j,i ∥yj − xn,i∥2
2, (44)
where Π denotes the set of permutation matrices of size M × M . This set is compact, hence, there exist a minimizer π∗ ∈ RM×M . To compute the barycenter, we solve for the optimal coupling πn
and the location of the barycenter points (y1, . . . , yM ) [21]. Now, for a fixed optimal coupling π∗n, we obtain
F (y1, . . . , yM ) = 1
2
N X
n=1
β (μˆn)
M X
j=1
M X
i=1
1
M (π∗
n)j,i ∥yj − xn,i∥2
2. (45)
The first-order necessary optimality condition reads
0 = ∂F (y1, . . . , yM )
∂yj
=
N X
n=1
β(μˆn)
M X
i=1
1
M (π∗
n)j,i (yj − xn,i) , (46)
and hence
yj =
PN
n=1 β(μˆn) PM
i=1 (π∗n)j,i xn,i
PN
n=1 β(μˆn) PM
i=1 (π∗n)j,i
=
N X
n=1
β(μˆn)
M X
i=1
(π∗
n)j,i xn,i. (47)
13

5.1.1 Example 4: Square Approximation
In the fourth experiment, we investigate whether the optimal transport dynamics proposed in (29) are capable of training arbitrarily wide neural networks. To this end, we focus on the empirical risk during training for neural networks with different values of M .
In the implementation of the optimal transport CBO formulation, we consider empirical measures of the form:
μˆk
n= 1
M
M X
i=1
δ(w − wk
n,i)δ(b − bk
n,i)δ(c − ck
n,i). (48)
The dynamics in (29), for μkn equal to the empirical measure (48), takes the form of a noise-free CBO scheme. Written explicitly for (w, b, c), this gives
wk+1
n,i = wk
n,i − ∆t wk
n,i − wk
π∗n(i) (49)
bk+1
n,i = bk
n,i − ∆t bk
n,i − bk
π∗n(i) (50)
ck+1
n,i = ck
n,i − ∆t ck
n,i − ck
π∗n(i) , (51)
where π∗n denotes the permutation matrix that represents the optimal coupling of the i-th weight to the barycenter. To facilitate the training, we include a drift parameter λ and add artificial noise to the parameter updates. The complete dynamics are as follows:
wk+1
n,i = wk
n,i − λ∆t wk
n,i − wk
π∗n(i) + σ ̃k√∆tξk
n,i (52)
bk+1
n,i = bk
n,i − λ∆t bk
n,i − bk
π∗n(i) + σ ̃k√∆tξk
n,i (53)
ck+1
n,i = ck
n,i − λ∆t ck
n,i − ck
π∗n(i) + σ ̃k√∆tξk
n,i, (54)
with λ, σ ̃ > 0 and ξk
n,i ∼ N (0, I). However, the noise lacks a multiplicative term that decreases as the particles converge to the barycenter, similar to the anisotropic noise in (21). Therefore, we manually reduce σ ̃k according to a predefined schedule.
We consider a one-dimensional regression problem, where the goal is to approximate the function x 7→ x2 on the domain [0, 1] using a finite two-layer neural network. The neural network has a RELU activation function and we consider various widths M . We sample 5000 data points xs uniformly on the interval [0, 1] and apply the function ys = xs2 + 0.01ξs, with ξs ∼ N (0, 1), to generate the training
dataset {(xs, ys)}5000
s=1 . We divide the training dataset into minibatches of size S′. We take the squared error loss as the loss function.
The CBO parameters in the experiment are chosen as follows:
N = 100, ∆t = 0.1, α = 104, λ = 1, σ ̃ = √1.2, S′ = 2500.
For each particle, we choose a uniform distribution as the initial measure and sample the atoms from wn,i, bn,i, cn,i ∼ U [−2, 2]. Every 100 epochs, we reduce the noise parameter by a factor of 0.9 every 100 iterations and multiply α by 10 until it reaches 107. Finally, for each value of M , we perform 10 independent simulations and report the average.
Figure 8 depicts the empirical risk per epoch of neural networks with different widths M during training. We observe that the empirical risk for each neural network decreases. Additionally, we remark that neural networks with more hidden neurons M converge to a lower empirical risk and thus obtain a better approximation.
The experiment confirms that the optimal transport CBO formulation is also able to train neural networks. However, computing the barycenter each iteration has a higher computational cost than the classical consensus point, limiting the practical usage of the optimal transport formulation.
14

0 100 200 300 400 500 600
10−4
10−3
10−2
10−1
Epoch
Empirical Risk ˆ
R (μ)
Neural Network Training
M = 10 M = 50 M = 100 M = 200
Figure 8: Empirical risk Rˆ(μ) as a function of training epochs for four different neural networks, each with a different width M . Each neural network is represent by a measure and trained with the optimal transport formulation of CBO. The figure displays the mean empirical risks taken over 10 differet simulations.
5.2 The mean-field limit for infinitely many particles (N → ∞)
In Subsection 5.1, we introduced the optimal transport dynamics
μk+1
n = ((1 − ∆t) Id + ∆tTn)# μk
n, n = 1, . . . , N. (55)
with the optimal transport plan Tn : Rd+2 → Rd+2 given by
μ ̄k = (Tn)# μk
n, n = 1, . . . , N. (56)
We now consider the mean-field limit as N → ∞. Let X := P2 Rd+2 and equip X with the 2Wasserstein metric W2. Define
P2 (X) := ρ ∈ P(X) :
Z
X
W2
2 (μ, δ0) dρ(μ) < ∞ . (57)
For ρ, φ ∈ P2 (X) define the Wasserstein-over-Wasserstein distance as [6, 4, 49]
W
2
2(ρ, φ) := inf
Γ∈Π(ρ,φ)
Z
X ×X
W2
2 (μ, ν)dΓ(μ, ν), (58)
where Π(ρ, φ) := {Γ ∈ P (X × X) : (π1)#Γ = ρ, (π2)#Γ = φ} (59)
is the set of couplings between ρ and φ. We denote the law of particles by ρ ∈ P2 (X) and make the following assumptions: Assumption 1. The barycenter μ ̄ ∈ X of ρ exists and is the global minimizer of Fρ(ν) : X → R, given by
Fρ(ν) = 1
2
Z
X
W2
2 (μ, ν) dρ(μ). (60)
Assumption 2. Each measure μ, μ ̄ ∈ X is absolute continuous with respect to the Lebesgue measure.
For each μ ∈ X we define the measurable map Ψ∆t : X → X
Ψ∆t(μ) := ((1 − ∆t) Id + ∆tT )# μ, (61)
15

with μ ̄ = T#μ, (62)
such that the particle update in Eq. (55) reads μk+1
n = Ψ∆t(μkn). The law of particles ρ evolves as
ρk+1 = (Ψ∆t)# ρk. (63)
This is the time-discrete mean-field limit, which provides an analytic framework to investigate the optimal transport CBO scheme:
Proposition 3. Let the variance of the measure ρk be given by
V(ρk) = 1
2
Z
X
W2
2 (μ, μ ̄k)dρk(μ). (64)
For a time step ∆t ∈ (0, 1], it holds that
V(ρk+1) ≤ (1 − ∆t)2 V(ρk). (65)
Proof. We start by observing that
V(ρk+1) = Fρk+1 (μ ̄k+1) ≤ Fρk+1 (μ ̄k) = 1
2
Z
X
W2
2 μ, μ ̄k dρk+1(μ), (66)
since μ ̄k+1 is the global minimizer of Fρk+1(ν). Next, we apply the definition of the pushforward on Eq. (66). This yields
V(ρk+1) ≤ 1
2
Z
X
W2
2 Ψ∆t(μ), μ ̄k dρk(μ). (67)
The map Ψ∆t defines a constant-speed Wasserstein geodesic between μ and μ ̄ (Theorem 7.2.2 in [1]), and therefore satisfies
W2
2 Ψ∆t(μ), μ ̄k = (1 − ∆t)2 W 2
2 μ, μ ̄k . (68)
Combining (67) and (68), we obtain
V(ρk+1) ≤ 1
2 (1 − ∆t)2
Z
X
W2
2 μ, μ ̄k dρk(μ) = (1 − ∆t)2 V(ρk). (69)
Proposition 3 demonstrates that the optimal transport formulation of CBO also achieves consensus, as the variance converges to zero.
6 Conclusion
This work investigated training two-layer neural networks with Consensus-Based Optimization and analyzed its mean-field limits. On a smooth regression task, CBO achieved competitive final empirical risk values compared to Adam, while the hybrid method on MNIST classification demonstrated greater robustness than Adam and faster convergence than CBO. We hypothesize that the CBO method achieves faster convergence for highly non-convex risk functions, whereas in cases of slow convergence, incorporatin-
g local gradient information can be beneficial. In the multi-objective optimization setting, Multi-Task CBO achieves high accuracy with minimal memory overhead by recycling particles across all tasks.
On the theoretical side, we reformulated the CBO dynamics on RM(d+2) within the Wasserstein space
P2 Rd+2 , thereby enabling the training of continuous neural networks with a particle-based method. However, the optimal transport dynamics are currently deterministic, as they do not include Brownian motion. In practice, artificial noise can always be added when considering empirical measures. For the regression of the square function, we demonstrated that the optimal transport scheme with added noise successfully trains neural networks, even as the width increases. Lastly, we presented a timedis-
crete mean-field formulation over both the neurons (M ) and the particles (N ) and proved that the optimal transport scheme also achieves consensus.
16

Acknowledgements
The work of W.D.D. is supported by the European Union’s Horizon Europe research and innovation program under the Marie Sklodowska-Curie Doctoral Network Datahyking (Grant No. 101072546). The authors thank the Deutsche Forschungsgemeinschaft (DFG, German Research Foundation) for the financial support through 442047500/SFB1481 within the projects B04 (Sparsity f ̈ordernde Muster in kinetischen Hierarchien), B05 (Sparsifizierung zeitabh ̈angiger Netzwerkflußprobleme mittels diskreter Optimierung) and-
 B06 (Kinetische Theorie trifft algebraische Systemtheorie). The authors thank the Deutsche Forschungsgemeinschaft (DFG, German Research Foundation) for the financial support HE5386/33-1 Control of Interacting Particle Systems, and Their Mean-Field, and Fluid-Dynamic Limits (560288187), and HE5386/34-1 Partikelmethoden fu ̈r unendlich dimensionale Optimierung ( 561130572).
References
[1] L. Ambrosio, N. Gigli, and G. Savare ́. Gradient Flows: In Metric Spaces and in the Space of Probability Measures. Lectures in Mathematics. ETH Zu ̈rich. Birkh ̈auser Verlag, Basel, second edition, 2008.
[2] F. Bach and L. Chizat. Gradient Descent on Infinitely Wide Neural Networks: Global Convergence and Generalization. In International Congress of Mathematicians, Saint-Petersbourg, Russia, July 2022.
[3] A. Barron. Universal approximation bounds for superpositions of a sigmoidal function. IEEE Transactions on Information Theory, 39(3):930–945, May 1993.
[4] M. Beiglb ̈ock, G. Pammer, and S. Schrott. A Brenier Theorem on (P2(P2(Rd)), W2) and Applications to Adapted Transport. arXiv:2509.03506, Sept. 2025.
[5] Y. Bengio, P. Simard, and P. Frasconi. Learning long-term dependencies with gradient descent is difficult. IEEE Transactions on Neural Networks, 5(2):157–166, Mar. 1994.
[6] C. Bonet, C. Vauthier, and A. Korba. Flowing datasets with wasserstein over wasserstein gradient flows. In 42nd International Conference on Machine Learning, 2025.
[7] G. Borghi, M. Herty, and L. Pareschi. A Consensus-Based Algorithm for Multi-Objective Optimization and Its Mean-Field Description. In 2022 IEEE 61st Conference on Decision and Control (CDC), pages 4131–4136, Dec. 2022.
[8] G. Borghi, M. Herty, and L. Pareschi. Constrained Consensus-Based Optimization. SIAM Journal on Optimization, 33(1):211–236, Mar. 2023.
[9] G. Borghi, M. Herty, and A. Stavitskiy. Dynamics of Measure-Valued Agents in the Space of Probabilities. SIAM Journal on Mathematical Analysis, 57(5):5107–5134, Oct. 2025.
[10] L. B ̈ottcher and T. Asikis. Near-optimal control of dynamical systems with neural ordinary differential equations. Machine Learning: Science and Technology, 3(4):045004, Dec. 2022.
[11] L. Bottou. Online algorithms and stochastic approximations. In D. Saad, editor, Online Learning and Neural Networks. Cambridge University Press, Cambridge, UK, 1998.
[12] J. A. Carrillo, Y.-P. Choi, C. Totzeck, and O. Tse. An analytical framework for consensus-based global optimization method. Mathematical Models and Methods in Applied Sciences, 28(06):10371066, June 2018.
[13] J. A. Carrillo, F. Hoffmann, A. M. Stuart, and U. Vaes. Consensus-based sampling. Studies in Applied Mathematics, 148(3):1069–1140, Apr. 2022.
17

[14] J. A. Carrillo, S. Jin, L. Li, and Y. Zhu. A consensus-based global optimization method for high dimensional machine learning problems. ESAIM: Control, Optimisation and Calculus of Variations, 27:S5, 2021.
[15] J. A. Carrillo, C. Totzeck, and U. Vaes. Consensus-Based Optimization and Ensemble Kalman Inversion for Global Optimization Problems with Constraints, volume 40, pages 195–230. WORLD SCIENTIFIC, Feb. 2023.
[16] R. Caruana. Multitask Learning. Machine Learning, 28(1):41–75, July 1997.
[17] R. T. Q. Chen, Y. Rubanova, J. Bettencourt, and D. Duvenaud. Neural ordinary differential equations. In Proceedings of the 32nd International Conference on Neural Information Processing Systems, NIPS’18, page 6572–6583, Red Hook, NY, USA, 2018. Curran Associates Inc.
[18] Z. Chen, V. Badrinarayanan, C.-Y. Lee, and A. Rabinovich. Gradnorm: Gradient normalization for adaptive loss balancing in deep multitask networks. In Proceedings of the 35th International Conference on Machine Learning (ICML), pages 794–803. PMLR, 2018.
[19] L. Chizat. Mean-field langevin dynamics: Exponential convergence and annealing. Transactions on Machine Learning Research, Aug. 2022.
[20] L. Chizat and F. Bach. Implicit bias of gradient descent for wide two-layer neural networks trained with the logistic loss. In Proceedings of the Thirty-Third Conference on Learning Theory (COLT), volume 125 of Proceedings of Machine Learning Research, pages 1305–1338. PMLR, July 2020.
[21] M. Cuturi and A. Doucet. Fast Computation of Wasserstein Barycenters. Proceedings of the 31st International Conference on Machine Learning, 32(2):685–693, June 2014.
[22] W. De Deyn. Code repository for: Mean-Field Limits for Two-Layer Neural Networks Trained with Consensus-Based Optimization. https://git.rwth-aachen.de/wdedeyn/ mean-field-limits-for-neural-networks, 2025. Accessed: 05-10-2025.
[23] A. Dembo and O. Zeitouni. Large Deviations Techniques and Applications. Number 38 in Stochastic Modelling and Applied Probability. Springer, Berlin New York, 2nd ed., corr. print edition, 2010.
[24] W. E, C. Ma, and L. Wu. The Barron Space and the Flow-Induced Function Spaces for Neural Network Models. Constructive Approximation, 55(1):369–406, Feb. 2022.
[25] M. Fornasier, T. Klock, and K. Riedl. Convergence of Anisotropic Consensus-Based Optimization in Mean-Field Law. In Applications of Evolutionary Computation, volume 13224, pages 738–754. Springer International Publishing, Cham, 2022.
[26] M. Fornasier, T. Klock, and K. Riedl. Consensus-Based Optimization Methods Converge Globally. SIAM Journal on Optimization, 34(3):2973–3004, Sept. 2024.
[27] M. Fornasier, L. Pareschi, H. Huang, and P. Su ̈nnen. Consensus-based optimization on the sphere: Convergence to global minimizers and machine learning. Journal of Machine Learning Research, 22(237):1–55, 2021.
[28] N. Gerber, F. Hoffmann, and U. Vaes. Mean-field limits for Consensus-Based Optimization and Sampling. ESAIM: Control, Optimisation and Calculus of Variations, July 2025.
[29] X. Glorot and Y. Bengio. Understanding the difficulty of training deep feedforward neural networks. In Proceedings of the Thirteenth International Conference on Artificial Intelligence and Statistics, pages 249–256. JMLR Workshop and Conference Proceedings, Mar. 2010.
[30] I. Goodfellow, Y. Bengio, and A. Courville. Deep Learning. MIT Press, 2016.
[31] S.-Y. Ha, S. Jin, and D. Kim. Convergence of a first-order consensus-based global optimization algorithm. Mathematical Models and Methods in Applied Sciences, 30(12):2417–2444, Nov. 2020.
18

[32] S.-Y. Ha, S. Jin, and D. Kim. Convergence and error estimates for time-discrete consensus-based optimization algorithms. Numerische Mathematik, 147(2):255–282, Feb. 2021.
[33] S. Hochreiter and J. Schmidhuber. Long Short-Term Memory. Neural Computation, 9(8):17351780, Nov. 1997.
[34] K. Hornik, M. Stinchcombe, and H. White. Multilayer feedforward networks are universal approximators. Neural Networks, 2(5):359–366, Jan. 1989.
[35] H. Huang and J. Qiu. On the mean-field limit for the consensus-based optimization. Mathematical Methods in the Applied Sciences, 45(12):7814–7831, Aug. 2022.
[36] D. P. Kingma and J. Ba. Adam: A method for stochastic optimization. In Proceedings of the 3rd International Conference on Learning Representations (ICLR), 2015.
[37] M. Koß, S. Weissmann, and J. Zech. On the mean-field limit of consensus based methods. arXiv:2409.03518, Sept. 2024.
[38] A. Krizhevsky, I. Sutskever, and G. E. Hinton. ImageNet classification with deep convolutional neural networks. Communications of the ACM, 60(6):84–90, May 2017.
[39] Y. LeCun, Y. Bengio, and G. Hinton. Deep learning. Nature, 521(7553):436–444, May 2015.
[40] Y. LeCun, C. Cortes, and C. J. Burges. The MNIST Database of handwritten digits. Courant Institute, NYU, Google Labs, New York, Microsoft Research, Redmond, 1998.
[41] S. Mei, A. Montanari, and P.-M. Nguyen. A mean field view of the landscape of two-layer neural networks. Proceedings of the National Academy of Sciences, 115(33), Aug. 2018.
[42] K. P. Murphy. Machine Learning: A Probabilistic Perspective. Adaptive Computation and Machine Learning. MIT Press, Cambridge, 2014.
[43] P.-M. Nguyen and H. T. Pham. A rigorous framework for the mean field limit of multilayer neural networks. Mathematical Statistics and Learning, 6(3):201–357, Oct. 2023.
[44] J. Nocedal and S. J. Wright. Numerical Optimization. Springer Series in Operations Research and Financial Engineering. Springer New York, 2006.
[45] R. Pascanu, T. Mikolov, and Y. Bengio. On the difficulty of training recurrent neural networks. In S. Dasgupta and D. McAllester, editors, Proceedings of the 30th International Conference on Machine Learning, volume 28 of Proceedings of Machine Learning Research, pages 1310–1318, Atlanta, Georgia, USA, 17–19 Jun 2013. PMLR.
[46] A. Paszke, S. Gross, F. Massa, A. Lerer, J. Bradbury, G. Chanan, T. Killeen, Z. Lin, N. Gimelshein, L. Antiga, A. Desmaison, A. Kopf, E. Yang, Z. DeVito, M. Raison, A. Tejani, S. Chilamkurthy, B. Steiner, L. Fang, J. Bai, and S. Chintala. Pytorch: An imperative style, high-performance deep learning library. In Advances in Neural Information Processing Systems 32, pages 8024–8035. Curran Associates, Inc., 2019.
[47] G. Philipp, D. Song, and J. G. Carbonell. The exploding gradient problem demystified - definition, prevalence, impact, origin, tradeoffs, and solutions. arXiv:1712.05577, 2017.
[48] R. Pinnau, C. Totzeck, O. Tse, and S. Martin. A consensus-based model for global optimization and its mean-field limit. Mathematical Models and Methods in Applied Sciences, 27(01):183–204, Jan. 2017.
[49] A. Pinzi and G. Savar ́e. Totally convex functions, L2-Optimal transport for laws of random measures, and solution to the Monge problem. arXiv:2509.01768, Sept. 2025.
[50] M. Raissi, P. Perdikaris, and G. Karniadakis. Physics-informed neural networks: A deep learning framework for solving forward and inverse problems involving nonlinear partial differential equations. Journal of Computational Physics, 378:686–707, Feb. 2019.
19

[51] D. E. Rumelhart, G. E. Hinton, and R. J. Williams. Learning representations by back-propagating errors. Nature, 323(6088):533–536, Oct. 1986.
[52] J. Sirignano and K. Spiliopoulos. Mean field analysis of neural networks: A central limit theorem. Stochastic Processes and their Applications, 130(3):1820–1852, Mar. 2020.
[53] J. Sirignano and K. Spiliopoulos. Mean Field Analysis of Neural Networks: A Law of Large Numbers. SIAM Journal on Applied Mathematics, 80(2):725–752, Jan. 2020.
[54] V. Vapnik. An overview of statistical learning theory. IEEE Transactions on Neural Networks, 10(5):988–999, 1999.
[55] J. Wei, F. Wu, and W. Bian. A Consensus-Based Optimization Method for Nonsmooth Nonconvex Programs with Approximated Gradient Descent Scheme. arXiv.2501.08906, Jan. 2025.
[56] L. Yang, Z. Zhang, Y. Song, S. Hong, R. Xu, Y. Zhao, W. Zhang, B. Cui, and M.-H. Yang. Diffusion Models: A Comprehensive Survey of Methods and Applications. ACM Computing Surveys, 56(4):1–39, Apr. 2024.
[57] T. Yu, S. Kumar, A. Gupta, S. Levine, K. Hausman, and C. Finn. Gradient surgery for multi-task learning. In Advances in Neural Information Processing Systems, 2020.
20

---

## Processing Information

- **Processing Library:** Zotero PDFWorker
- **Processing Date:** 2026-02-10T18:14:34.973Z
- **Text Length:** 54438 characters
- **Success:** Text extraction completed
- **PDF Library Used:** Zotero PDFWorker
- **Pages Processed:** 20 of 20
