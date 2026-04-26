# PDF Document: Zheng et al. - 2025 - Deep Feynman-Kac Methods for High-dimensional Semilinear Parabolic Equations Revisit.pdf

**File Path:** Zheng et al. - 2025 - Deep Feynman-Kac Methods for High-dimensional Semilinear Parabolic Equations Revisit.pdf

**Processed Date:** 2026-02-10T18:14:35.189Z

**File Size:** 2665.23 KB

**Total Pages:** 18

**Extracted Pages:** 18

**PDF Library:** Zotero PDFWorker

**Attachment Item ID:** 2786

**Title:** Deep Feynman-Kac Methods for High-dimensional Semilinear Parabolic Equations: Revisit

**Collection:** Large Files

---

## Extracted Text Content

Deep Feynman-Kac Methods for High-dimensional
Semilinear Parabolic Equations: Revisit
Xiaotao Zheng∗1, Xingye Yue†2, and Jiyang Shi3
1Center for Financial Engineering, Soochow University, Suzhou 215008, Jiangsu, China 2Center for Financial Engineering, Soochow University, Suzhou 215008, Jiangsu, China
Abstract
Deep Feynman-Kac method was first introduced to solve parabolic partial differential equations(PDE) by Beck et al. (SISC, V.43, 2021), named Deep Splitting method since they trained the Neural Networks step by step in the time direction. In this paper, we propose a new training approach with two different features. Firstly, neural networks are trained at all time steps globally, instead of step by step. Secondly, the training data are generated in a new way, in which the method is consistent with -
a direct Monte Carlo scheme when dealing with a linear parabolic PDE. Numerical examples show that our method has significant improvement both in efficiency and accuracy. Keyword: Deep Feynman-Kac method; High-dimensional semilinear parabolic PDEs
1 Introduction
With the development of fields such as finance, physics, and medicine, modeling complex problems by high-dimensional partial differential equations (PDEs) has become increasingly important. However, classical numerical methods suffer from the ”curse of dimensionality,” referring to the exponentially increasing computational complexity associated with increasing dimensions [3]. One potential approach to address this challenge is to leverage the attractive approximation capabilities of neural networ-
ks for highly nonlinear functions [13]. As a result, deep learning methods have gained popularity in solving the PDEs. In 2019, Raissi et al. introduced the Physics-Informed Neural Networks (PINNs) method and demonstrated its efficiency for solving the Schr ̈odinger, Burgers, and Allen-Cahn equations [34, 8, 38]. The method’s generalization error was estimated through the training error and number of training samples [36, 31]. In addition to PINNs, various deep learningbased approaches have been p-
roposed for solving high-dimensional PDEs, including the Deep Ritz Method [39, 23], the Deep Galerkin Method (DGM) [37, 20], the Weak Adversarial Network (WAN) [41], the Deep Nitsche Method [28], and the Deep Finite Volume Method [5]. However, efficient sampling strategies remain a major challenge, particularly in extremely high-dimensional problems (e.g., d = 100, 500, 1000). Certain deep learning techniques based on stochastic processes have been found to be useful for high-dimensional semilinea-
r PDEs. In 2017, E et al. proposed the Deep Backward Stochastic Differential Equation (DBSDE) method [15]. By adapting the PDEs solution to the backward
∗Email: 20234013002@stu.suda.edu.cn
†Corresponding author: xyyue@suda.edu.cn
1
arXiv:2503.16407v1 [cs.CE] 20 Mar 2025

stochastic differential equations (BSDEs) system [32, 33], the core idea of this approach is to reformulate the BSDE as a stochastic optimal control problem and then approximate the control process Z using deep neural networks. Furthermore, Han et al. established the theoretical convergence of this method, proving that its error vanishes under the general approximation capabilities of neural networks [16]. The effectiveness of the Deep BSDE method has been further demonstrated in various applicat-
ions, particularly in computational finance, where it has shown strong empirical performance [24, 40, 11]. In 2021, Beck et al. proposed the Deep Splitting Method (DS) [2] as an alternative approach to solving high-dimensional partial differential equations (PDE). The method takes advantage of the Feynman-Kac formula [25] to represent PDE solutions as conditional expectations. The name ’Deep Splitting’ comes from the fact that the neural networks are trained step by step in the time direction. The-
 DS method has been successfully applied to problems such as the pricing of high-dimensional American options [2, 12, 27]. In response to these developments, we propose the Deep Feynman-Kac method under Global Training (DFK-GT) in Section 3.3. Notably, this method recovers the classical Monte Carlo approach when the underlying equation is linear. Furthermore, as demonstrated in Section 4, numerical experiments indicate that the DFK-GT method achieves a higher efficiency compared to both the DBSDE -
and DS method. The structure of this paper is as follows. In Section 2, we introduce the backward stochastic differential equations (BSDEs) theory and the Feynman-Kac formula, which are related to the semilinear parabolic PDEs. In Section 3, we revisit the Deep Feynman-Kac method (DFK), and propose a new training approach for it. In Section 4, numerical experiments are presented to compare the performance of different methods for solving high-dimensional semilinear parabolic differential equations-
.
2 Backward Stochastic Differential Equations and Feynman-Kac Formula
In this section, we begin by introducing the Feynman-Kac formula and the connection between the semilinear parabolic partial differential equations (PDE) and the backward stochastic differential equations (BSDEs).
2.1 Semilinear Parabolic Partial Differential Equations
We consider the semilinear parabolic PDEs, which can be expressed as:

   
   
∂u
∂t (t, x) + 1
2 Tr σσT (t, x) (Hessxu) (t, x) + ∇u(t, x) · μ(t, x)
+ f t, x, u(t, x), σT (t, x)∇u(t, x) = 0, (t, x) ∈ [0, T ) × Rd,
u(T, x) = g(x), x ∈ Rd.
(1)
The variables t and x represent respectively time variable and d-dimensional spatial variable, d ≫ 1. μ(t, x) is a known vector-valued function. σ(t, x) is a known d × d matrix-valued function, and σT (t, x) represents the transpose of σ(t, x). ∇u(t, x) and Hessxu(t, x) respectively represent the gradient and Hessian of u(t, x) with respect to x. f is a known nonlinear function. The objective is to solve PDEs (1) for u(0, ξ), ξ ∈ Rd.
2.2 Backward Stochastic Differential Equation (BSDE)
Here, we follow the approach of Peng [32, 33] and references therein to establish the correlation between PDEs(1) and well-posed backward stochastic differential equations (BSDEs).
2

Lemma 2.1: Assuming (Ω, F , P) be a probability space, make W = W (1), . . . , W (d) : [0, T ] × Ω → Rd be a standard Brownian motion, Ft be an non-decreasing filtration generated by W . Let X = X(1), . . . , X(d) : [0, T ] × Ω → Rd, Y : [0, T ] × Ω → R, Z : [0, T ] × Ω → Rd be F -adapted stochastic processes. Consider the following BSDE:

   
   
Xt = ξ +
Zt
0
μ (s, Xs) ds +
Zt
0
σ (s, Xs) dWs, (2)
Yt = g (XT ) +
ZT
t
f (s, Xs, Ys, Zs) ds −
ZT
t
(Zs)T dWs. (3)
Under certain conditions, the BSDE is well-posed and related to the PDE (1). Specifically, for any t ∈ [0, T ], the following equation holds almost everywhere in probability:
(Yt = u (t, Xt) ,
Zt = σT (t, Xt) ∇u (t, Xt) . (4)
In other words, if the d-dimensional stochastic process {Xt}t∈[0,T ] satisfies equation(2), then the solution of PDE (1) satisfies the following stochastic differential equation (SDE):
u(t, Xt) − u(0, ξ) = −
Zt
0
f s, Xs, u(s, Xs), σT (s, Xs)∇u(s, Xs) ds
+
Zt
0
[∇u(s, Xs)]T σ(s, Xs)dWs.
(5)
2.3 Feynman-Kac Formula
Lemma 2.2: If the solution u(t, x) to the PDE (1) belongs to C1,2 [0, T ] × Rd , then it can be represented as a conditional expectation,
u(t, x) = E g (XT ) +
ZT
t
f s, Xs, u (s, Xs) , σT (s, Xs)∇u (s, Xs) ds|Xt = x . (6)
The d dimensional stochastic process {Xs}s∈[t,T ] satisfies the SDE:
(
dXs = μ (s, Xs) ds + σ (s, Xs) dWs
Xt = x , (7)
where Ws ∈ Rd is a standard Brownian motion.
3 Deep Feynman-Kac Method
In this section, we will first provide an overview of the Deep Splitting (DS) method, as presented in the work of Beck [2]. Then we will consider the Deep Splitting method under global training and the Deep Feynman-Kac method under Global Training (DFK-GT).
3

3.1 Deep Splitting (DS) Method
The DS method is an efficient deep learning technique for solving PDEs (1) based on the Feynman-Kac formula. This method employs a splitting scheme to decompose the original PDE into multiple subproblems, which can be solved more easily. We begin by discretizing the time domain [0, T ] as
0 = t0 < t1 < · · · < tN = T,
where the time step is given by ∆tn = tn − tn−1. Using this discretization, the Feynman-Kac formula (6) is applied iteratively in a backward time-stepping manner, leading to the following recursion:

    
    
u(T, x) = g(x),
u (tn−1, x) = E
"
u (tn, Xtn ) +
Z tn
tn−1
f (s, Xs, u (s, Xs) , z (s, Xs)) ds | Xtn−1 = x
#
,
z(t, x) = σT (t, x) ∇u (t, x) ,
(8)
where {Xs}s∈[tn−1,tn] satisfies the SDE (7) and n = 1, 2, . . . , N . To facilitate numerical implementation, we approximate the integral term in equation (8) using a quadrature rule,
Z tn
tn−1
f s, Xs, u (s, Xs) , σT (s, Xs) ∇u (s, Xs) ds
≈f tn, Xtn , u (tn, Xtn ) , σT (tn, Xtn ) ∇u (tn, Xtn ) · ∆tn.
(9)
Meanwhile, M independent sample paths {Xtmn }0≤n≤N,m=1,...,M are generated by simulating the SDE (7),
Xm
tn = Xm
tn−1 + μ tn−1, Xm
tn−1 ∆tn + σ tn−1, Xm
tn−1 ∆Wn, X0 = ξ. (10)
Thus, model (8) can be expressed as follows:

   
   
Xm
tn = Xm
tn−1 + μ tn−1, Xm
tn−1 ∆tn + σ tn−1, Xm
tn−1 ∆Wn, X0 = ξ,
u (tn−1, x) = E
h
u tn, Xm
tn + f tn, Xm
tn , u tn, Xm
tn , z tn, Xm
tn ∆tn|Xm
tn−1 = x
i
,
z(t, x) = σT (t, x) ∇u (t, x) , u(T, x) = g(x),
(11)
where n = 1, 2, . . . , N, m = 1, . . . , M .
Instead of using least-squares regression [30], the conditional expectation u tn−1, Xtn−1 is approximated using a neural network, denoted as uθn−1 Xtn−1 : Rd → R. To approximate the gradient ∇u(tn−1, Xtn−1), we leverage the automatic differentiation capabilities of TensorFlow [1] to compute ∇uθn−1 (Xtn−1 ): Rd → Rd. Next, the neural network uθn−1 (Xtn−1 ) is then trained at
each time step using the data pairs
n
Xtmn−1 , uˆ tn−1, Xtmn−1
o
. Here, uˆ tn−1, Xtmn−1 is a realization
of the value function u tn−1, Xtmn−1 .In detail,

     
     
Xm
tn = Xm
tn−1 + μ tn−1, Xm
tn−1 ∆tn + σ tn−1, Xm
tn−1 ∆Wn, X0 = ξ,
uˆ(tn−1, Xm
tn−1 ) = uθ(tn, Xm
tn ) + f (tn, Xm
tn , uθ(tn, Xm
tn ), zθ(tn, Xm
tn ))∆tn,
zθ(t, x) = σT (t, x)∇uθ(t, x),
uˆ(tN−1, Xm
tN−1 ) = g(Xm
T ) + f (T, Xm
T , g(Xm
T ), σT (T, Xm
T )∇g(Xm
T ))∆tN ,
(12)
4

Therefore, we define the loss function at time step tn−1:
ln−1(θn−1) = 1
M
M
X
m=1
uθn−1 (X m
tn−1 ) − uˆ(tn−1, Xm
tn−1 )
2
, (13)
where n is in descending order from N, N − 1, ..., 2. After training the network parameters θn−1 step by step using Adam optimizer, the approximate solution uˆ(0, ξ) can be obtained via equation (14).
uˆ(0, ξ) = E
h
uθ t1, Xm
t1 +f t1, Xm
t1 , uθ t1, Xm
t1 , σT t1, Xm
t1 ∇uθ t1, Xm
t1 · ∆t0|X0 = ξ
i
. (14)
3.2 Deep Splitting method under Global Trainning (DS-GT)
In this subsection, we extend the Deep Splitting (DS) method by introducing global training. Unlike the conventional stepwise training approach, which optimizes neural network parameters at each time step independently, global training considers the entire time domain simultaneously during the training process. This means that during the optimization of neural network parameters, interactions between different time intervals are taken into account. By leveraging global training, our aim is to enha-
nce both accuracy and computational efficiency. The Deep Splitting method under Global Training also solves the model (11), where θn−1 represents the network parameters used for approximating the conditional expectation u tn−1, Xtn−1 with the neural network uθn−1 Xtn−1 . To facilitate global training, N − 1 fully connected feedforward neural networks are linked, and the collective set of network parameters is denoted as θ = {θ1, θ2, . . . , θN−1}. The loss function is then redefined as the cumulat-
ive sum of individual loss functions across all time steps:
l(θ) =
N
X
n=2
ln−1(θn−1), (15)
where ln−1(θn−1) is defined in Equation(13). Having optimized the network parameters θ with the Adam algorithm, we can obtain the approximate solution uˆ(0, ξ) through equation (14).
3.3 Deep Feynman-Kac method under Global Training (DFK-GT)
Building upon the DS-GT method, we propose the Deep Feynman-Kac method under Global Training (DFK-GT). This approach aims to further improve the accuracy of the numerical approximation by refining the training data pairs used in the network training process. It is worth noting that if the PDE (1) reduces to a linear equation, this method is equal to the general Monte Carlo method. After obtaining the model (11), we employ the same approach to approximate the conditional expectation u tn−1, Xtn−1 b-
y a neural network uθn−1 Xtn−1 , approximate the gradient function ∇u tn−1, Xtn−1 with ∇uθn−1 Xtn−1 : Rd → Rd. However, unlike the Deep Splitting method, we
train uθn−1 Xtn−1 at every time step using a set of modified data pairs
n
Xtmn−1 , u ̃ tn−1, Xtmn−1
o
.
Here, u ̃ tn−1, Xtmn−1 is an another realisation of the value function u tn−1, Xtmn−1 , thereby de
riving a new solution scheme:

     
     
Xm
tn = Xm
tn−1 + μ tn−1, Xm
tn−1 ∆tn + σ tn−1, Xm
tn−1 ∆Wn, X0 = ξ,
u ̃(tn−1, Xm
tn−1 ) = u ̃(tn, Xm
tn ) + f (tn, Xm
tn , uθ(tn, Xm
tn ), zθ(tn, Xm
tn ))∆tn,
zθ(t, x) = σT (t, x)∇uθ(t, x),
u ̃(tN−1, Xm
tN−1 ) = g(Xm
T ) + f (T, Xm
T , g(Xm
T ), σT (T, Xm
T )∇g(Xm
T ))∆tn,
(16)
5

The loss function is redefined as
l(θ) =
N
X
n=2
ln−1(θn−1), (17)
with
ln−1(θn−1) = 1
M
M
X
m=1
uθn−1 (X m
tn−1 ) − u ̃(tn−1, Xm
tn−1 )
2
. (18)
After training the network parameters θ = {θ1, θ2, . . . , θN−1} using Adam optimizer, we obtain the approximate solution u ̃(0, ξ) via equation (19).
u ̃(0, ξ) = E
h
u ̃ t1, Xm
t1 + f t1, Xm
t1 , uθ t1, Xm
t1 , σT t1, Xm
t1 ∇uθ t1, Xm
t1 · ∆t0|X0 = ξ
i
. (19)
It can be observed that the method can be simplified to a general Monte Carlo algorithm, if the PDE(1) reduces to a linear form. Having optimized the network parameters θ with the Adam algorithm, we can obtain the approximate solution u ̃(0, ξ) through equation (19). For more details about the method, readers can refer to Algorithm 1 and Figure 1.
Algorithm 1 Deep Feynman-Kac method under Global Training
Require: N, M, T, ∆tn, It, B
1: Time partition: 0 = t0 < t1 < · · · < tN = T , ∆tn = tn − tn−1
2: Sample Brownian motion increment ∆W (m)
tn , get paths X(m)
tn , m = 1, 2, . . . , M , n = 0, 1, . . . , N 3: Initialize neural network parameters θ 4: for i ← 1 to It do
5: Sample B paths X(m)
tn , m = 1, 2, . . . , B, n = 0, 1, . . . , N
6: Calculate u(T, X(m)
T ) = g(X(m)
T ), m = 1, 2, . . . , B 7: for n ← N to 2 do
8: Approximating the value function using neural networks:
9: uθ(tn, Xtmn ) ≈ u(tn, Xtmn ),∇uθ(tn, Xtmn ) ≈ ∇u(tn, Xtmn ), m = 1, 2, . . . , B
10: Approximating the conditional expectation using neural networks to calculate the value 11: function at the n − 1th time step:
12: u (tn−1, x) = E
h
u tn, Xtmn + Fn Xtmn−1 = x
i
, where
13: Fn = f tn, Xtmn , uθ tn, Xtmn , σT (tn, Xtmn )∇uθ(tn, Xtmn ) · ∆tn, m = 1, 2, . . . , B 14: end for
15: Calculate loss function l(θ) = 1
B
PN n=2
PB
m=1
h
uθ(tn−1, Xtmn−1 ) − u ̃(tn−1, Xtmn−1 )
i2
,where

  
  
u ̃(tN−1, Xm
tN−1 ) = g(Xm
T ) + f (T, Xm
T , g(Xm
T ), σT (T, Xm
T )∇g(Xm
T )) · ∆tn,
u ̃(tn−1, Xm
tn−1 ) = u ̃(tn, Xm
tn ) + f (tn, Xm
tn , uθ(tn, Xm
tn ), zθ(tn, Xm
tn )) · ∆tn,
zθ(t, x) = σT (t, x)∇uθ(t, x), n = 2, ..., N − 1.
16: optimize the network parameters θ with the Adam algorithm 17: Get the approximate solution of the equation: 18: end for
19: u ̃(0, ξ) = E u ̃(t1, Xtm1 ) + f (t1, Xtm1 , uθ(t1, Xtm1 ), σT (t1, Xtm1 )∇uθ(t1, Xtm1 )) · ∆t0 | X0 = ξ , where m = 1, 2, ..., M
Ensure: Approximation of solution based on Feynman-Kac equation
6

Figure 1: Deep Feynman-Kac Algorithm under Global Training. Here, we also fully connect N − 1 sub-networks and train them as a whole. The structure of the sub-networks is the same as that in the Deep BSDE method. However, unlike that, the network here directly approximates the value function uθ(tn, Xtmn ) instead of its gradient ∇uθ(tn, Xtmn ). As a result, we reduce two network parameters, namely θu0 and θ∇u0.
4 Numerical Results
As discussed in Section 3, the Deep Splitting (DS) method is utilized to decompose the partial differential equation (PDE) (1) into multiple subproblems, which are then recursively solved using neural networks. To further enhance the training process, we introduce the Deep Splitting Method under Global Training (DS-GT) by replacing the step-by-step training approach with global training. This approach shares similarities with the Deep BSDE (DBSDE) method A. Building upon the DS-GT method, we propo-
se the Deep Feynman-Kac method under Global Training (DFK-GT) by modifying the training data pairs used in the network training process. It is interesting to note that when the PDE (1) reduces to a linear equation, this method is equivalent to the general Monte Carlo method. In this section, we will proceed to compare the performance of the DBSDE, DS, DS-GT and DFK-GT method in solving the Hamilton-Jacobi-Bellman (HJB) equation, the Allen-Cahn equation, and the PricingDiffRate equation. By evaluat-
ing these methods in terms of computational efficiency, accuracy, and robustness, we aim to confirm the significance of global training and training data pair modeling. Ultimately, this comparative analysis will lead to the determination of the optimal solution for solving high-dimensional semilinear parabolic equations (1). In the DBSDE, DS-GT and DFK-GT methods, we fully connect N − 1 steps of feedforward neural networks and train them as a whole. In contrast, the DS method follows a step-by-ste-
p training approach, as mentioned in Section 3. In each time step, neural network consists of 4 parts, including one input layer (d-dimensional), two hidden layers (both d+10 dimensional), and one output layer (d-dimensional for the DBSDE method, 1-dimensional for the DS, DS-GT and DFK-GT method). The number of neurons in each hidden layer is d+10. We also adopt batch normalization (BN) [22] between the affine transformations and activation functions in the fully connected layers, which ensures th-
at the batch data are uniformly distributed before being input to the next layer. This makes it easier for deep neural networks to converge and reduces the risk
7

of overfitting. For network optimization, we employ the Adam algorithm [35], with a total of 512 test samples and a batch size of 256 samples used for each iteration. The numerical experiments presented below were performed in Python using the Tensorflow processor on a Dell computer equipped with a 2.30 Gigahertz (GHz) Intel Core i7-11800H.
4.1 Hamilton-Jacobi-Bellman (HJB) equation
In this subsection, we apply the DBSDE, DS, DS-GT, DFK-GT methods to numerically solve the Hamilton-Jacobi-Bellman (HJB) equation in 100 dimensions. Consider a semilinear parabolic PDE with a gradient squared term, following the general form
of a semilinear parabolic PDE (1). Let μ(t, x) = 0, σ = √2, f (t, x, y, z) = −|zRd|2, and g(x) =
ln 1
2 1 + |x|2
Rd . Now, We get an equation that satisfies the terminal condition u(T, x) = g(x)
and holds for all t ∈ [0, T ) and x ∈ Rd:
∂u
∂t (t, x) + (∆xu) (t, x) − ∥(∇xu) (t, x)∥2 = 0, (t, x) ∈ [0, T ) × Rd
u(T, x) = g(x), x ∈ Rd (20)
Fixed d = 100, T = 1, ξ = (0, 0, . . . , 0) ∈ Rd, the explicit solution to the equation can be obtained
through the Cole-Hopf transformation [6, 9]: u(t, x) = − ln E exp −g x + √2WT −t , where u(0, ξ) ≈ 4.5901. Based on the loss function (13), (15), (17), and (29), we perform independent calculations five times with the hyper-parameter N = 20. The results are reported in Table 1. It was observed that after sufficient training, the global training scheme yielded higher accuracy compared to the step-by-step training scheme. Further comparing the DS-GT and DFK-GT methods, it is found that re-modeling t-
he data pairs significantly enhanced the efficiency and accuracy of subsequent computations. In summary, compared to the DS method, the DFK-GT method exhibits significant improvements in accuracy and robustness. Moreover, as illustrated in Figure 2, the DFK-GT method not only surpasses the widely used DBSDE method in terms of accuracy, but also achieves substantial computational efficiency gains.
Table 1: Numerical Results for HJB Equation
Number of iteration steps
100 200 600 1000 2000 5000 10000
Runtime
DBSDE 11.4 15.2 32.2 49.8 91.4 216.2 423.2 DS 18.8 21.8 34.4 47.8 79.8 180.6 355.6 DS-GT 10.2 12.2 22 31.6 54.8 125.4 242.8 DFK-GT 8.4 11.6 19.8 28 51.4 120.8 229.4
Relative error
DBSDE 7.37e-01 6.93e-01 4.93e-01 7.77e-02 1.90e-03 1.87e-03 1.25e-03 DS 1.57e-01 4.98e-03 8.50e-03 7.02e-03 7.13e-03 6.39e-03 8.02e-03 DS-GT 1.03 1.02 6.34e-01 2.08e-01 1.03e-03 1.48e-03 1.86e-03 DFK-GT 7.97e-01 6.28e-01 2.30e-02 1.07e-03 5.75e-04 2.73e-04 3.29e-04
Loss function
DBSDE 3.45 3.23 2.00 4.03e-01 2.20e-02 1.99e-02 1.8e-02 DS 2.09e-03 1.56e-05 4.26e-05 2.26e-05 2.48e-05 4.66e-05 6.90e-05 DS-GT 2.90e+01 9.53 1.16 1.09e-01 2.14e-02 4.55e-02 4.47e-02 DFK-GT 8.82e+01 6.77e+01 4.85 4.04e-01 3.94e-01 4.40e-01 4.24e-01
Importantly, a consistent relationship is observed between variations in the loss function and the accuracy of the methods. Specifically, when the loss function exhibits limited fluctuations (i.e., the loss function ceases to decrease), the optimal number of iterations required for algorithm convergence can be determined. The corresponding results are summarized in Table 2. Notably, all methods yield highly accurate results, with DFK-GT achieving the highest computational efficiency and the lowest-
 standard deviation.
8

Figure 2: Comparison of Two Methods for Solving the HJB Equation
Table 2: Iteration Count at Loss Convergence for the HJB Equation
Methods Iterations Relative error Runtime Standard deviation DBSDE 1800 1.83e-03 83.2 8.65e-03 DS 600 8.50e-03 34.4 1.46e-02 DS-GT 1700 4.23e-03 47.6 8.36e-03 DFK-GT 1200 1.16e-03 33.0 3.11e-03
Additionally, by recording the experimental results where the relative error first falls below 10−2, we can ascertain the ideal number of iterations required for algorithm convergence. The corresponding results are presented in Table 3.
4.2 Allen-Cahn equation
In this subsection, we test the effectiveness of several methods in solving a 100-dimensional Allen-Cahn PDE with cubic nonlinearity. Referring to the general form of the semilinear parabolic equation (1), we consider the case where α = 1, f (y, z) = y − y3, and g(x) = 2 + 2
5 ∥x∥2
Rd
−1. The
equation that satisfies the terminal condition u(T, x) = g(x) and holds for all t ∈ [0, T ) and x ∈ Rd:
∂u
∂t (t, x) + (∆xu) (t, x) + u(t, x) − [u(t, x)]3 = 0, (t, x) ∈ [0, T ) × Rd
u(T, x) = g(x), x ∈ Rd (21)
Here, we consider the initial point ξ = (0, 0, . . . , 0) ∈ Rd, where the spatial dimension is d = 100 and the terminal time T = 3
10 . Using the branching diffusion method [17, 18, 19], we can obtain a reference value for the exact solution of the equation, where u(0, ξ) = u(0, 0, . . . , 0) ≈ 0.052802. Similarly, based on the loss function (13), (15), (17), and (29), we set the time step number to N = 20 and perform independent calculations 5 times. The results are reported in Table 4. The DFK-GT method has been observed to substantially improve both the computational efficiency and accuracy, compared to the DS method. This-
 improvement can be attributed to the implementation of a global training scheme and the remodeling of data pairs (16). Moreover, as depicted in Figure
Table 3: Iteration Count for the HJB Equation (Relative Error Below 10−2)
Methods Iterations Relative error Runtime Standard deviation DBSDE 1200 8.43e-03 83.2 1.56e-02 DS 200 4.98e-03 21.8 1.80e-02 DS-GT 1600 9.28e-03 45.4 1.37e-02 DFK-GT 700 1.06e-03 26.0 1.03e-03
9

Table 4: Numerical Results for Allen-Cahn Equation
Number of iteration steps
100 200 600 1000 2000 5000 10000
Runtime
DBSDE 10.6 14.8 31.4 48.4 90.2 214.2 429.8 DS 18.8 23.6 41.4 59.8 106.6 244.4 471.0 DS-GT 10.2 12.4 22 31.4 55 125.6 243.6 DFK-GT 8 10.2 19 27.8 49.8 115.8 225.4
Relative error
DBSDE 5.26 4.44 2.00 7.26e-01 2.51e-02 7.36e-04 2.31e-03 DS 4.16e-02 3.00e-03 2.91e-03 3.90e-03 9.85e-03 4.65e-03 4.23e-03 DS-GT 9.99e-01 1.02 9.83e-01 9.74e-01 9.53e-01 2.41e-01 2.50e-03 DFK-GT 2.15e-01 1.45e-01 1.08e-02 4.23e-03 3.80e-03 3.65e-03 2.93e-03
Loss function
DBSDE 3.55e-02 2.32e-02 3.46e-03 4.77e-04 1.93e-04 4.56e-05 2.64e-05 DS 3.24e-04 4.87e-07 1.49e-07 4.53e-08 6.20e-07 4.59e-08 7.24e-08 DS-GT 1.11e+01 5.73 4.56e-01 8.87e-02 1.16e-02 5.44e-04 3.27e-05 DFK-GT 6.44 3.51 1.76e-01 3.74e-03 5.82e-04 5.88e-04 6.43e-04
Figure 3: Comparison of Two Methods for Solving the Allen-Cahn Equation
3, in comparison to the widely popular DBSDE method, the DFK-GT method not only ensured higher accuracy but also demonstrated a substantial improvement in computational efficiency. Importantly, it should be noted that a consistent relationship exists between variations in the loss function and the accuracy of the methods. Consequently, when the loss function exhibits limited fluctuations (i.e., the loss function ceases to decrease), it becomes possible to ascertain the optimal number of iterations-
 necessary for algorithm convergence. The results are reported in Table 6. It turns out that all the methods provide quite accurate results with the highest computational efficiency for the DFK-GT. Additionally, by recording the experimental results where the relative error first falls below 10−2, we can ascertain the ideal number of iterations required for algorithm convergence. The corresponding results are presented in Table 6.
Table 5: Iteration Count at Loss Convergence for the Allen-Cahn Equation
Methods Iterations Relative error Runtime Standard deviation DBSDE 6700 3.98e-03 290.2 1.05e-04 DS 800 3.04e-03 50.6 1.65e-04 DS-GT 7600 5.84e-03 187 8.16e-05 DFK-GT 1600 3.72e-03 41.4 2.45e-04
10

Table 6: Iteration Count for the Allen-Cahn Equation (Relative Error Below 10−2)
Methods Iterations Relative error Runtime Standard deviation DBSDE 1800 9.45e-03 86.8 4.42e-03 DS 200 3.00e-03 23.6 1.29e-03 DS-GT 7200 9.43e-03 177.4 1.32e-04 DFK-GT 700 5.58e-03 20.2 3.13e-04
4.3 Pricing of European financial derivatives with different interest rates for borrowing and lending(PricingDiffrate) equation
There are various extensions of the traditional linear Black-Scholes equation that incorporate nonlinear phenomena, including transaction costs, default risk, and Knightian uncertainty. In this section, we apply the methods for solving the special nonlinear Black-Scholes equations. It describes the pricing problem of an European financial derivative in a financial market where the risk-free bank account utilized for hedging purposes exhibits disparate interest rates for borrowing and lending [4]. -
Referring to the general form of a semi-linear parabolic PDE(1), let μ ̄ = 0.06, σ ̄ = 0.2, Rl = 0.04, Rb = 0.06, and assume for all s, t ∈ [0, T ], x = (x1, . . . , xd) ∈ Rd, y ∈ R, and z ∈ Rd, d = 100, T = 1/2, N = 20, μ(t, x) = μ ̄x, σ(t, x) = σ ̄x and ξ = (100, 100, . . . , 100) ∈ Rd. Meanwhile, we choose a terminal condition g(x) and a non-linear term f (t, x, y, z) for the equation:
g(x) = max {[max1≤i≤100xi] − 120, 0} − 2 max {[max1≤i≤100xi] − 150, 0} , (22)
f (t, x, y, z) = −Rly − (μ ̄−Rl)
σ ̄
d
P
i=1
zi + Rb − Rl max 0, 1
σ ̄
d
P
i=1
zi − y , (23)
At this point, the equation can be represented on the region t ∈ [0, T ) and x ∈ Rd:
∂u
∂t (t, x) + σ ̄2
2
d
P
i=1
|xi|2 ∂2u
∂x2
i
(t, x)
+ max Rb d
P
i=1
xi ∂u
∂xi (t, x) − u(t, x) , Rl d
P
i=1
xi ∂u
∂xi (t, x) − u(t, x) = 0.
(24)
The PDE (24) can also be equivalently expressed as:
∂u
∂t (t, x) + σ ̄2
2
d
P
i=1
|xi|2 ∂2u
∂x2
i
(t, x)
− min Rb u(t, x) −
d
P
i=1
xi ∂u
∂xi (t, x) , Rl u(t, x) −
d
P
i=1
xi ∂u
∂xi (t, x) = 0.
(25)
The solution of the equation can be obtained through the Multilevel-Picard approximation method [21], which gives a value of 21.299. Based on the loss function (13), (15), (17), and (29), we set the time step number to N = 20 and perform independent calculations 5 times. The results are reported in Table 7. Specifically, we observed a significant advantage of the DFK-GT method over the DS method in terms of computational efficiency and accuracy. This improvement can be attributed to the implementa-
tion of a global training scheme and the remodeling of data pairs (16). Additionally, Figure 4 and table 7 clearly illustrate the faster convergence speed of the DFK-GT method compared to the DBSDE method, while maintaining a similar level of robustness. Importantly, a consistent relationship is observed between variations in the loss function and the accuracy of the methods. Specifically, when the loss function exhibits limited fluctuations
11

Table 7: Numerical Results for PricingDiffrate Equation
Number of iteration steps
100 200 600 1000 2000 5000 10000
Runtime
DBSDE 11.6 16 33.6 51.6 95.8 228.6 451.6 DS 20.0 23.0 35.2 48.4 81.2 188.4 365.8 DS-GT 10.8 13.2 24 34.4 60.6 138.4 268.8 DFK-GT 9 11.2 21.4 31.4 56.2 130.4 254.4
Relative error
DBSDE 1.94e-01 1.72e-01 9.99e-02 5.05e-02 6.57e-03 3.98e-03 5.96e-03 DS 7.42e-01 5.79e-01 3.89e-02 4.26e-03 3.18e-02 2.07e-02 2.21e-02 DS-GT 1.17 4.94e-01 3.41e-02 2.85e-02 4.28e-02 2.84e-02 1.08e-01 DFK-GT 4.09e-03 3.88e-03 3.54e-03 4.01e-03 4.01e-03 5.60e-03 2.69e-03
Loss function
DBSDE 5.12e+01 4.74e+01 3.79e+01 3.41e+01 3.26e+01 3.26e+01 3.25e+01 DS 5.53e-02 5.21e-02 6.46e-02 5.08e-02 5.08e-02 4.45e-02 5.59e-02 DS-GT 7.06e+03 6.27e+03 3.39e+03 1.70e+03 4.74e+02 2.53e+02 4.70e+02 DFK-GT 4.28e+03 3.91e+03 2.39e+03 1.50e+03 8.19e+02 7.93e+02 6.27e+02
Table 8: Iteration Count at Loss Convergence for the PricingDiffrate Equation
Methods Iterations Relative error Runtime Standard deviation DBSDE 2200 4.60e-03 106.4 4.77e-02 DS 2000 3.18e-02 81.2 8.90e-01 DS-GT 2800 5.58e-02 81 1.37 DFK-GT 1800 2.45e-03 51.6 2.17e-02
(i.e., the loss function ceases to decrease), the optimal number of iterations required for algorithm convergence can be determined. The corresponding results are summarized in Table 8. Notably, all methods yield highly accurate results, with DFK-GT achieving the highest computational efficiency and the lowest standard deviation. Additionally, by recording the experimental results where the relative error first reaches the 10−2 level, we can ascertain the ideal number of iterations required for al-
gorithm convergence. The corresponding results are presented in Table 9.
5 Conclusions
In this paper, we introduced a novel training approach for solving high-dimensional semilinear parabolic partial differential equations (PDEs) using neural networks. Our method incorporates
Figure 4: Comparison of Two methods for Solving the PricingDiffrate Equation
12

Table 9: Iteration Count for the PricingDiffrate Equation (Relative Error Below 10−2)
Methods Optimal Iterations Relative error Runtime Standard deviation DBSDE 2300 6.79e-03 102.4 3.21e-02 DS 1000 4.26e-03 48.4 3.77e-01 DS-GT 7700 9.86e-03 208.8 2.25e-01 DFK-GT 100 4.09e-03 9 7.64e-02
two key features: (1) a global training strategy that updates the neural network across all time steps simultaneously, rather than in a sequential step-by-step manner, and (2) a new data pairs generation approach that ensures consistency with the direct Monte Carlo scheme when applied to linear parabolic PDEs. Through numerical experiments, we compare the Deep Splitting (DS) method and the Deep Splitting method under Global Training (DS-GT). The results indicate that global training improves compu-
tational speed compared to the step-by-step training approach. Furthermore, by comparing the Deep Splitting method under Global Training (DS-GT) with the Deep FeynmanKac method under Global Training (DFK-GT), we observe that remodeling the data pairs enhances both computational accuracy and efficiency. Overall, our findings demonstrate that the proposed approach (DFK-GT) significantly improves both computational efficiency and solution accuracy compared to the Deep Splitting (DS) method and the De-
ep BSDE (DBSDE) method. The results for a training limit of 2000 iterations are shown in Figure 5.
Figure 5: Comparison of Runtime and Accuracy on Different Numerical Examples (2000 Iterations)
13

References
[1] M. Abadi, P. Barham, J. Chen, Z. Chen, A. Davis, J. Dean, M. Devin, S. Ghemawat, G. Irving, M. Isard, et al., {TensorFlow}: a system for {Large-Scale} machine learning, in 12th USENIX symposium on operating systems design and implementation (OSDI 16), 2016, pp. 265–283.
[2] C. Beck, S. Becker, P. Cheridito, A. Jentzen, and A. Neufeld, Deep splitting method for parabolic pdes, SIAM Journal on Scientific Computing, 43 (2021), pp. A3135–A3154.
[3] R. Bellman, Dynamic programming, princeton univ, Press Princeton, New Jersey, 39 (1957).
[4] Y. Z. Bergman, Option pricing with differential interest rates, The Review of Financial Studies, 8 (1995), pp. 475–500.
[5] J. Cen and Q. Zou, Deep finite volume method for partial differential equations, arXiv preprint arXiv:2305.06863, (2023).
[6] J.-F. Chassagneux and A. Richou, Numerical simulation of quadratic bsdes, (2016).
[7] W. Chen, Z. Wang, and J. Zhou, Large-scale l-bfgs using mapreduce, Advances in neural information processing systems, 27 (2014).
[8] Z. Chen, S.-K. Lai, and Z. Yang, At-pinn: Advanced time-marching physics-informed neural network for structural vibration analysis, Thin-Walled Structures, 196 (2024), p. 111423.
[9] L. Debnath and L. Debnath, Nonlinear partial differential equations for scientists and engineers, vol. 2, Springer, 2005.
[10] J. Duchi, E. Hazan, and Y. Singer, Adaptive subgradient methods for online learning and stochastic optimization., Journal of machine learning research, 12 (2011).
[11] C. Gao, S. Gao, R. Hu, and Z. Zhu, Convergence of the backward deep bsde method with applications to optimal stopping problems, SIAM Journal on Financial Mathematics, 14 (2023), pp. 1290–1303.
[12] L. Goudenege, A. Molent, and A. Zanette, Machine learning for pricing american options in high-dimensional markovian and non-markovian models, Quantitative Finance, 20 (2020), pp. 573–591.
[13] P. Grohs, F. Hornung, A. Jentzen, and P. Von Wurstemberger, A proof that artificial neural networks overcome the curse of dimensionality in the numerical approximation of Black–Scholes partial differential equations, vol. 284, American Mathematical Society, 2023.
[14] J. Han, A. Jentzen, and W. E, Solving high-dimensional partial differential equations using deep learning, Proceedings of the National Academy of Sciences, 115 (2018), pp. 8505–8510.
[15] J. Han, A. Jentzen, et al., Deep learning-based numerical methods for high-dimensional parabolic partial differential equations and backward stochastic differential equations, Communications in mathematics and statistics, 5 (2017), pp. 349–380.
[16] J. Han and J. Long, Convergence of the deep bsde method for coupled fbsdes, Probability, Uncertainty and Quantitative Risk, 5 (2020), p. 5.
14

[17] P. Henry-Labordere, Counterparty risk valuation: A marked branching diffusion approach, arXiv preprint arXiv:1203.2369, (2012).
[18] P. Henry-Labord`ere, N. Oudjane, X. Tan, N. Touzi, and X. Warin, Branching diffusion representation of semilinear pdes and monte carlo approximation, 55 1 ANNALES DE L’INSTITUT HENRI POINCAR ́E PROBABILIT ́ES ET STATISTIQUES Vol. 55, No. 1 (February, 2019) 1–607, 55 (2019), pp. 184–210.
[19] P. Henry-Labordere, X. Tan, and N. Touzi, A numerical algorithm for a class of bsdes via the branching process, Stochastic Processes and their Applications, 124 (2014), pp. 11121140.
[20] W. Hofgard, J. Sun, and A. Cohen, Convergence of the deep galerkin method for mean field control problems, arXiv preprint arXiv:2405.13346, (2024).
[21] M. Hutzenthaler, A. Jentzen, T. Kruse, et al., Multilevel picard iterations for solving smooth semilinear parabolic heat equations, Partial Differential Equations and Applications, 2 (2021), pp. 1–31.
[22] S. Ioffe and C. Szegedy, Batch normalization: Accelerating deep network training by reducing internal covariate shift, in International conference on machine learning, pmlr, 2015, pp. 448–456.
[23] X. Ji, Y. Jiao, X. Lu, P. Song, and F. Wang, Deep ritz method for elliptical multiple eigenvalue problems, Journal of Scientific Computing, 98 (2024), p. 48.
[24] Y. Jiang and J. Li, Convergence of the deep bsde method for fbsdes with non-lipschitz coefficients, arXiv preprint arXiv:2101.01869, (2021).
[25] I. Karatzas and S. Shreve, Brownian motion and stochastic calculus, vol. 113, Springer Science & Business Media, 1991.
[26] J. Kiefer and J. Wolfowitz, Stochastic estimation of the maximum of a regression function, The Annals of Mathematical Statistics, (1952), pp. 462–466.
[27] B. Lapeyre and J. Lelong, Neural network regression for bermudan option pricing, Monte Carlo Methods and Applications, 27 (2021), pp. 227–247.
[28] Y. Liao and P. Ming, Deep nitsche method: Deep ritz method with essential boundary conditions, arXiv preprint arXiv:1912.01309, (2019).
[29] D. C. Liu and J. Nocedal, On the limited memory bfgs method for large scale optimization, Mathematical programming, 45 (1989), pp. 503–528.
[30] F. A. Longstaff and E. S. Schwartz, Valuing american options by simulation: a simple least-squares approach, The review of financial studies, 14 (2001), pp. 113–147.
[31] S. Mishra and R. Molinaro, Estimates on the generalization error of physics-informed neural networks for approximating a class of inverse problems for pdes, IMA Journal of Numerical Analysis, 42 (2022), pp. 981–1022.
15

[32] E. Pardoux and S. Peng, Backward stochastic differential equations and quasilinear parabolic partial differential equations, in Stochastic Partial Differential Equations and Their Applications: Proceedings of IFIP WG 7/1 International Conference University of North Carolina at Charlotte, NC June 6–8, 1991, Springer, 2005, pp. 200–217.
[33] E. Pardoux and S. Tang, Forward-backward stochastic differential equations and quasilinear parabolic pdes, Probability theory and related fields, 114 (1999), pp. 123–150.
[34] M. Raissi, P. Perdikaris, and G. E. Karniadakis, Physics-informed neural networks: A deep learning framework for solving forward and inverse problems involving nonlinear partial differential equations, Journal of Computational physics, 378 (2019), pp. 686–707.
[35] S. J. Reddi, S. Kale, and S. Kumar, On the convergence of adam and beyond, arXiv preprint arXiv:1904.09237, (2019).
[36] Y. Shin, J. Darbon, and G. E. Karniadakis, On the convergence of physics informed neural networks for linear second-order elliptic and parabolic type pdes, arXiv preprint arXiv:2004.01806, (2020).
[37] J. Sirignano and K. Spiliopoulos, Dgm: A deep learning algorithm for solving partial differential equations, Journal of computational physics, 375 (2018), pp. 1339–1364.
[38] Y. Wang and L. Zhong, Nas-pinn: neural architecture search-guided physics-informed neural network for solving pdes, Journal of Computational Physics, 496 (2024), p. 112603.
[39] B. Yu et al., The deep ritz method: a deep learning-based numerical algorithm for solving variational problems, Communications in Mathematics and Statistics, 6 (2018), pp. 1–12.
[40] Y. Yu, N. Ganesan, and B. Hientzsch, Backward deep bsde methods and applications to nonlinear problems, Risks, 11 (2023), p. 61.
[41] Y. Zang, G. Bao, X. Ye, and H. Zhou, Weak adversarial networks for high-dimensional partial differential equations, Journal of Computational Physics, 411 (2020), p. 109409.
A Appendix: Deep BSDE Method
In recent years, there has been a surge of interest in using neural networks to solve highdimensional PDEs and BSDEs. In particular, Weinan E et al. proposed the Deep BSDE method [15, 14]. After adapting the solution of PDE (1) to the SDE (5) by BSDE theory, the next step is to discretize the SDE in time. Given a partitioning of the interval [0, T ] : 0 = t0 < t1 < · · · < tN = T with ∆tn = tn+1−tn, the solution at each time step can be approximated using the Euler-Maruyama scheme.
u tn+1, Xtn+1 − u (tn, Xtn ) ≈ −f tn, Xtn , u (tn, Xtn ) , σT (tn, Xtn ) ∇u (tn, Xtn ) ∆tn
+ [∇u (tn, Xtn)]Tσ (tn, Xtn) ∆Wn, n = 0, 1, ..., N − 1. (26)
To achieve a globally approximate scheme, neural networks can be incorporated into the forward discretization process. The first step towards this is to obtain training data by sampling M independent paths Xtmn 0≤n≤N,m=1,2,...,M , where Xtm0 m=1,...,M = ξ.The critical step next is employing the neural network parameters θu0, θ∇u0 to approximate the solution and the gradient function at
16

t = t0 respectively. Let θn represent all network parameters approximating the gradient function ∇u(t, x) by the neural network at time t = tn, where n = 1, 2, ..., N − 1. With the above approximations, the total set of parameters is θ = {θu0, θ∇u0, θ1, θ2, . . . , θN−1}. The equation (26) can be rewritten as follows.
uˆ tn+1, Xm
tn+1 − uˆ tn, Xm
tn ≈ −f tn, Xm
tn , uˆ tn, Xm
tn , σT tn, Xm
tn ∇uθ
tn tn, Xm
tn ∆tn
+
h
∇uθ
tn tn, Xm
tn
iT
σ tn, Xm
tn ∆W m
tn , m = 1, 2, ..., M, n = 0, 1, ..., N − 1.
(27)
In particular, when t = t0, we have
uˆ t1, Xm
t1 ≈ θu0 − f t0, ξ, θu0 , σT (t0, ξ) θ∇u0 ∆t0 + [θ∇u0 ]Tσ (t0, ξ) ∆W m
t0 , m = 1, 2, ..., M. (28)
By applying the globally approximate scheme (27), an approximate value of u tN , XtmN denoted
as uˆ tN , XtmN can be obtained, where m = 1, 2, . . . , M . The matching of a given terminal condition can define the expected loss function.
l(θ) = 1
M
M
X
m=1
g (XT ) − uˆ tN , Xm
tN
2. (29)
Network parameters can be trained by the optimizer, such as SGD [26], L-BFGS-B [29][7], Adam [35], and Adagrad [10] algorithms. Through this process, it becomes evident that an approximate solution θu0 for u(0, ξ) can be obtained. In the work of Weinan E et al., they opted to use the Adam algorithm.
Remark 1 According to the Feynman-Kac formula, the solution to the PDE (1), denoted as u(t, x), can be expressed as the conditional expectation (6). By partitioning the time interval, we have
u(tn, x) = E u(tn+1, Xtn+1 ) +
Z tn+1
tn
f s, Xs, u (s, Xs) , σT (s, Xs)∇u (s, Xs) ds|Xtn = x . (30)
Here, the d-dimensional stochastic process {Xs}s∈[tn,tn+1] satisfies the SDE (7). When performing quadrature on integrals, we can estimate the values of neighboring functions for n = 0, 1, ..., N − 1.
u tn+1, Xtn+1 ≈ u (tn, Xtn ) − f tn, Xtn , u (tn, Xtn ) , σT (tn, Xtn ) ∇u (tn, Xtn ) ∆tn. (31)
By treating equation (31) in a similar way to equation (26) from the Deep BSDE method, we can develop a new approach so-called as the Deep forward Feynman-Kac method. Both methods share the same form of network parameters and loss function, but they differ in the treatment of the Brownian motion term [∇u (tn, Xtn)]T σ (tn, Xtn) ∆Wn.
17

Figure 6: The neural network architecture for Deep BSDE method. The network consists of multiple sub-networks, with each sub-network corresponding to a time interval. Each sub-network has H hidden layers, where H is a user-defined hyperparameter. At each time layer t = tn, the intermediate neurons of the sub-network are represented as h1n, h2n, ..., hn
H , where n ranges from 1 to N − 1. It should be noted that in addition to these, θu0 and θ∇u0 are also network parameters that need to be optimized.
18

---

## Processing Information

- **Processing Library:** Zotero PDFWorker
- **Processing Date:** 2026-02-10T18:14:35.189Z
- **Text Length:** 43136 characters
- **Success:** Text extraction completed
- **PDF Library Used:** Zotero PDFWorker
- **Pages Processed:** 18 of 18
