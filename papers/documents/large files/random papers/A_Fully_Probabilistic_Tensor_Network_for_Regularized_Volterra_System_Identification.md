# PDF Document: Kilic and Batselier - 2025 - A Fully Probabilistic Tensor Network for Regularized Volterra System Identification.pdf

**File Path:** Kilic and Batselier - 2025 - A Fully Probabilistic Tensor Network for Regularized Volterra System Identification.pdf

**Processed Date:** 2026-02-10T18:16:04.225Z

**File Size:** 641.24 KB

**Total Pages:** 6

**Extracted Pages:** 6

**PDF Library:** Zotero PDFWorker

**Attachment Item ID:** 3449

**Title:** A Fully Probabilistic Tensor Network for Regularized Volterra System Identification

**Collection:** Large Files > Random Papers

---

## Extracted Text Content

A Fully Probabilistic Tensor Network for Regularized Volterra System Identification
Afra Kilic ∗ Kim Batselier ∗
∗ Delft University of Technology , Delft, Netherlands (e-mail: {h.a.kilic, k.batselier}@ tudelft.nl).
Abstract: Modeling nonlinear systems with Volterra series is challenging since the number of kernel coefficients grows exponentially with the model order. This work introduces Bayesian Tensor Network Volterra kernel machines (BTN-V), extending the Bayesian Tensor Network (BTN) framework to Volterra system identification. BTN-V represents Volterra kernels via canonical polyadic decomposition, reducing model complexity from O(ID) to O(DIR). By treating all tensor components and hyperparameters as ra-
ndom variables, BTN-V provides predictive uncertainty estimation at no extra computational cost. Sparsity-inducing hierarchical priors enable automatic rank determination and learning of fading-memory behavior directly from data, improving interpretability and avoiding overfitting. Empirical results demonstrate competitive accuracy, enhanced uncertainty quantification, and reduced computational cost.
Keywords: nonlinear system identification, Volterra series, tensor network kernel machines, variational inference, Bayesian methods
1. INTRODUCTION
Modeling nonlinear systems remains a key challenge in system identification. The Volterra series, a nonlinear extension of the finite impulse response model, is commonly used when the exact system behavior is unknown. However, its application is typically limited to weakly nonlinear systems, where linear dynamics dominate. This limitation arises not from the Volterra framework itself but from the exponential growth of kernel coefficients with increasing model order.
Several methods exist to reduce the complexity of Volterra kernels. One approach incorporates prior knowledge of the kernel structure within a Bayesian framework (Chen et al., 2011), encoding the expected smooth decay of Volterra kernels via Bayesian priors (Pillonetto and De Nicolao, 2010). This was extended to parametric Volterra models with decaying covariance matrices (Birpoutsoukis et al., 2018), though limited to third-order kernels, while higherorder non-parametric models using similar stru-
ctures remain restricted to small datasets (Libera et al., 2021).
An alternative approach imposes sparsity by assuming most Volterra coefficients are negligible, implemented through sparse Bayesian learning (Miao et al., 2019). However, this strong sparsity assumption applies only to the specific system considered in that study. A further alternative is kernel compression using low-rank tensor structures, which represent all Volterra coefficients through a small set of parameters from which the full set can be reconstructed. Favier et al. (2012) apply both lowra-
nk Tucker and canonical polyadic decompositions. Batselier et al. (2017) has proposed a multiple-input–multipleoutput (MIMO) Volterra tensor network (TN) that uses tensor-train decomposition to represent all Volterra ker
⋆ This publication is part of the project Sustainable Learning for AI from Noisy Large-Scale Data (project number VI.Vidi.213.017), which is financed by the Dutch Research Council (NWO).
nels at once. By exploiting multilinearity and applying alternating least squares (ALS), the MIMO Volterra TN avoids the exponential growth of coefficients and enables efficient identification of high-order (up to 10th-order) Volterra systems within seconds on standard hardware.
Although the MIMO Volterra TN offers low computational complexity, it does not account for parameter uncertainty and therefore cannot provide uncertainty quantification for predictions. It also requires the tensor rank to be specified a priori and tends to overfit when higher ranks are used. Rank selection is often performed via trial and error, which is both costly and imprecise, while more systematic approaches, such as maximum likelihood estimation, may still lead to overfitting, and cross-vali-
dation becomes computationally expensive when multiple hyperparameters are involved. The first probabilistic treatment of the Volterra TN with Tikhonov regularization has been proposed to avoid overfitting and to quantify uncertainty in the predictions (Memmel et al., 2023); however, it models only a single TN core as a random variable, treating the remaining cores as deterministic, and is thus not fully probabilistic. Moreover, despite the regularization, this approach still requires manual tunin-
g of the tensor rank. Recently, Kilic and Batselier (2025) presented the Bayesian Tensor Network (BTN) kernel machines framework, a fully probabilistic approach that employs sparsityinducing hierarchical priors on the TN components to automatically infer model complexity. Specifically, these sparsity-inducing priors allow the model, during identification, to automatically determine the effective tensor rank and identify the most relevant features for prediction, thereby enhancing interpretability.
In this paper, we propose the Bayesian Tensor Network Volterra kernel machines (BTN-V) by extending the BTN kernel machines framework (Kilic and Batselier, 2025) to Volterra system identification. BTN-V treats all tensor components and model hyperparameters as random
arXiv:2511.20457v1 [stat.ML] 25 Nov 2025

variables, allowing prediction uncertainty to be estimated without additional computational cost. Through the use of sparsity-inducing priors, BTN-V offers two main benefits: it automatically determines the tensor rank during the identification process and learns the fading-memory behavior of Volterra systems directly from the data, helping to prevent overfitting by reducing the influence of distant past inputs.
2. TENSOR BASICS AND NOTATION
The order of a tensor is the number of its dimensions, also reffered to as ways or modes. Scalars are denoted by lowercase letters, e.g., a; vectors (first-order tensors) by bold lowercase letters, e.g., a; matrices (second-order tensors) by bold uppercase letters, e.g., A; and higherorder tensors (order ≥ 3) by bold calligraphic letters, e.g., A.
A Dth-order tensor A ∈ RI1×I2×···×ID has entries ai1i2···iD , with indices id = 1, . . . , Id for d ∈ [1, D]. Often, it is computationally convenient to vectorize tensors. The vectorization vec(A) ∈ RI1I2···ID maps each entry as
vec(A)i = ai1i2...iD , i = i1 +
D
X
d=2
(id − 1)
d−1
Y
k=1
Ik. (1)
When applied to a matrix, the operator vec(·) performs column-wise vectorization. The operator diag(·) returns a diagonal matrix from a vector. The Kronecker product of A ∈ RI×J and B ∈ RK×L is A ⊗ B ∈ RKI×LJ . The Khatri-Rao product A ⊙ B of A ∈ RI×J and B ∈ RK×J is an IK × J matrix formed by column-wise Kronecker products. The Hadamard (element-wise) product of A, B ∈ RI×J is A ⊛ B ∈ RI×J . The identity matrix is denoted by I, with size either inferred or specified.
Definition 1. A rank-R Canonical Polyadic Decomposition (CPD) of w = vec(W) ∈ RID consists of D factor matrices W(d) ∈ RI×R, such that
w = (W(1)⊙W(2)⊙· · ·⊙W(D))1R =
R
X
r=1
w(1)
r ⊗w(2)
r ⊗· · ·⊗w(D)
r,
(2)
where w(d)
r ∈ RI denotes the rth column of the matrix W(d). The CPD is unique under mild conditions (Kruskal, 1977), and its storage complexity scales as O(DIR).
3. TENSOR NETWORK SISO VOLTERRA SYSTEM
In this section, we briefly introduce the TN formulation of the single-input single-output (SISO) Volterra system (Batselier et al., 2017). We focus on the SISO case for simplicity; the extension to MIMO is trivial but not discussed for brevity.
Consider a discrete time truncated Dth order Volterra system with memory length M :
y(n) =
D
X
d=0
M −1
X
m1 ,...,md =0
Wd(m1, . . . , md)
d
Y
j=1
u(n − mj) + e(n),
(3)
where u(n) is the input, y(n) is the output, and e(n) represents additive noise, for for n = 1, . . . , N . The
set {Wd}D
d=0 represents the Volterra kernels of different
orders. These kernels grow exponentially with the system order D. This curse of dimensionality can be mitigated by representing all Volterra kernels simultaneously with a low-rank TN (Batselier et al., 2017), which transforms the problem into a set of smaller linear systems, each solved iteratively during the identification process. To obtain a low-rank TN representation of the Volterra kernels, the first step is to rewrite the inputs u(n) following Batselier et al. (2017) as
un = 1 u(n) · · · u(n − M + 1)
⊤
∈ RI , (4)
where I := M + 1, with the corresponding system output is y(n) ∈ R. Including the constant term as the first term in un allows us to define a feature map unD as the D-times Kronecker product of un, such that
uD
n := un ⊗ un ⊗ · · · ⊗ un
| {z }
D times
∈ RID , (5)
which contains all monomials of the input from degree 0 up to D. With this definition, the output at time n can be expressed as
y(n) = uD
n
⊤
w + en, (6)
where w ∈ RID vector containing all coefficients from all Volterra kernelss. Since the Volterra feature map unD in (5) has a Kronecker structure, this property can be exploited to express the Volterra coefficients w using the CPD model in Definition 1, which reduces the number of learnable parameters from O(ID) to O(DIR) (Harshman, 1970). In this model, w is represented by D factor matrices of size RI×R, which are estimated iteratively using the ALS algorithm without explicitly constructing w. Whe-
n the rank R matches the true CP rank, the exact solution of (6) is recovered. However, ALS assumes deterministic factor matrices and yields only point estimates. Following Kilic and Batselier (2025), we instead treat the factor matrices as random variables with sparsity-inducing priors. This probabilistic formulation allows uncertainty quantification in the predictions and the model to automatically infer both the effective tensor rank R and the fading-memory behavior of the Volterra series durin-
g identification.
4. PROBABILISTIC TENSOR NETWORK SISO VOLTERRA SYSTEMS
In this section, we present the main contribution of this paper: BTN-V, the BTN kernel machines framework extended to SISO Volterra systems. For a detailed discussion of the priors and the mean-field variational inference-based probabilistic identification procedure, the reader is referred to Kilic and Batselier (2025).
4.1 Probabilistic Model and Priors
Expressing equation (6) for n = 0, 1, . . . , N leads to the following matrix equation:
y = U DT w + e, (7)
where y ∈ RN is the vector of measured outputs and e ∈ RN denotes Gaussian white noise with e ∼ N (0, τ −1IN ).
Let U ∈ RI×N , where the nth column contains un. The
matrix UD = U ⊙ U ⊙ · · · ⊙ U ∈ RID×N represents the D-fold row-wise Khatri–Rao product of U with itself,

τ
y
W(d)
W(1) W(D)
ab
hg
δ
cd
λ
... ...
Fig. 1. Probabilistic graphical model of the Volterra TN, where the CPD-decomposed coefficients w are represented by factor matrices {W(d)}D
d=1. Dashed, solid, and unbounded nodes denote observed data y, random variables, and Gamma hyperparameters, respectively..
thus U D the input matrix whose nth column corresponds to the Kronecker vector unD. Assuming a CP-decomposedVolterra-coefficients vector w together with the Gaussian noise model, the likelihood of the observed outputs is given by
p y | {W(d)}D
d=1, τ =
N
Y
n=1
N y(n) | uD
n
⊤
w, τ −1 , (8)
where τ denotes the noise precision and W(d) ∈ RI×R are the factor matrices of the CP-decomposed model weights (Definition 1), whose rth column is w(d)
r and ith row is
w(d)
i , with r = 1, . . . , R and i = 1, . . . , I. Determining an appropriate tensor rank R and feature dimension I is generally a nontrivial and computationally intensive task.
To address this, Kilic and Batselier (2025) use a hierarchical sparsity-inducing prior to automatically infer R and I, avoiding overfitting. Building on this methodology, we define two sets of sparsity parameters: λ := [λ1, . . . , λR], with each λr controlling the regularization of the rth column w(d)
r , and δ := [δ1, . . . , δI ], with each δi regulating
the ith row w(d)
i of W(d), for all d ∈ [1, D]. Together, λ
and δ govern sparsity across the columns and rows of the factor matrices, respectively. The prior distribution for the vectorized factor matrices is a zero mean Gaussian prior
p vec(W(d)) | λ, δ = N 0, Λ−1 ⊗ ∆−1 (9)
where Λ ⊗ ∆ = diag(λ) ⊗ diag(δ) represents the inverse covariance matrix (precision matrix). Under the zero-mean prior assumption, higher values in λ or δ force the corresponding columns or rows of W(d) toward zero, thereby regularizing the associated components or input dimensions. This follows the automatic relevance determination (ARD) principle (Neal, 1996) and its tensor-based extensions (Zhao et al., 2015).
For a fully probabilistic formulation, we further specify Gamma hyperpriors over the sparsity parameters as p(λ) = QR
r=1 Ga(λr | c0, d0) and p(δ) = QI
i=1 Ga(δi |
g0, h0), where Ga(x | a, b) denotes the Gamma distribution. Similarly, the noise precision τ is assigned a Gamma prior p(τ ) = Ga(τ | a0, b0).
Remark. In the original BTN-Kernel machines formulation, a separate δd was defined for each factor matrix
W(d), since the feature map was formed by the Kronecker product of D different feature vectors u(d)
n . In contrast, the Volterra feature map in (5) uses the same input vector un repeated D times in the Kronecker product. Thus, we use a single vector δ that applies row-wise regularization across all factor matrices. Since each row corresponds to a specific memory lag, δ is directly associated with the temporal structure of the model (i.e., the memory lags). By modeling δ as a random variable, the model learns which lags are more important during identification, thereby regularizing the temporal -
structure by reducing the influence of less informative lags and highlighting those that are more relevant.
Denoting all latent variables and hyperparameters by Θ = {W(1), . . . , W(D), δ, λ, τ }, the joint distribution p(y, Θ) can be expressed as
p y | {W(d)}D
d=1, τ
D
Y
d=1
p W(d) | λ, δ p(δ) p(λ) p(τ ). (10)
Figure 1 illustrates the probabilistic graphical model corresponding to the joint distribution in (10). The input matrices U are omitted from the figure since they are not random variables. The factor matrices {W(d)}D
d=1, and the shape and scale hyperparameters of the Gamma distributions, represented by unbounded nodes in the figure, must be initialized before identification. Then the full posterior distribution of all variables in Θ given the observed data is
p(Θ|y) = p(y, Θ)
R p(y, Θ)dΘ . (11) Based on the posterior distribution of Θ, the predictive distribution over unseen data points, denoted y ̃i can be inferred by
p(y ̃i | y) =
Z
p (y ̃i | Θ) p (Θ | y) dΘ. (12)
4.2 Identification Process
An exact Bayesian inference of (11) and (12) requires integrating over all latent variables and hyperparameters, making it analytically intractable. Therefore, as presented in (Kilic and Batselier, 2025) we perform a Bayesian identification using mean-field variational inference (Winn and Bishop, 2005). The key idea is to approximate the true posterior p(Θ | y) with a variational distribution q(Θ) by minimizing the Kullback–Leibler (KL) divergence. This is equivalent to maximizing a lower bound L(-
q) on the model evidence ln p(y), defined as L(q) = Eq(Θ)[ln p(y, Θ)]. The maximum of the lower bound occurs when the KL divergence vanishes, implying q(Θ) = p(Θ | y). The meanfield assumption factorizes the variational distribution over each variable θj ∈ Θ as
q(Θ) =
D
Y
d=1
qW(d) (W(d)) qδ(δ) qλ(λ) qτ (τ ). (13)
In other words, this factorization assumes that all variables θj ∈ Θ are independent. The functional form of each factor can then be derived analytically in turn. Specifically, the optimal θj is obtained by maximizing L(q), with the maximum occurring when
ln qj (θj ) = Eq(Θ\θj)[ln p(y, Θ)] + const, (14)

Algorithm 1
Require: Input data x = {xn}N
n=1, output data y = {yn}N
n=1
1: Initialize: R, I, W(d), Σ(d), ∀d ∈ [1, D], a0, b0, c0, d0, g0, h0 and set τ = a0/b0, λr = cr
0 /dr
0, ∀r ∈ [1, R], λI = gi
0 /hi
0, ∀i ∈ [1, I]. 2: repeat
3: for d = 1 to D do 4: Update posterior qd(vec(W(d))) using Eq. (16) 5: end for
6: Update posterior q(δ) using Eq. (17) 7: Update posterior q(λ) using Eq. (18) 8: Evaluate variational lower bound 9: if truncation criterion satisfied then 10: Reduce rank R by removing zero-columns in W(d), ∀d ∈ [1, D] 11: end if
12: until convergence 13: Update posterior q(τ ) using Eq. (19) 14: Compute predictive distribution using Eq. (20)
where Eq(Θ\θj)[·] denotes the expectation taken with respect to the variational distributions of all variables except θj. Since all parameter distributions are in the exponential family and conjugate to their priors, this yields closed-form posterior updates for each factor. Identification proceeds by initializing each qj(θj) and iteratively updating them using the update rules until convergence. In the following, we present the posterior update rules for each qj(θj), for all θj ∈ Θ. For full deri-
vations, proofs, and explicit formulas, see Kilic and Batselier (2025).
Posterior Distribution of Factor Matrices Because of the multilinear nature of the CPD, a tensor represented in CPD form can be expressed as a function that is linear with respect to any one of its factor matrices. Thus, datafitting term U DT w in (7) can be rewritten linearly in terms of the unknown dth factor matrix W(d)
U DT w = vec(W(d))T G(d),
G(d) = U ⊙ ⊛k̸=d W(k)T U .
(15)
where G(d) ∈ RIR×N is the design matrix. By applying (14), the posterior mean vec(W ̃ (d)) and covariance Σ(d) of
qW(d) (vec(W(d))) = N vec(W(d)) | vec(W ̃ (d)), Σ(d) ,
are updated by
vec(W ̃ (d)) = Eq[τ ] Σ(d) Eq[G(d)] y,
Σ(d) =
h
Eq[τ ] Eq[G(d)G(d)T ] + Eq[Λ] ⊗ Eq[∆]
i−1
.
(16)
Posterior distributions of λ and δ The posterior of the row precision δ is an independent Gamma distribution over rows qδ(δ) = QI
i=1 Ga(δi | gi
N , hi
N ) where the posterior parameters are updated by
gi
N = gi
0 + DR
2 , hi
N = hi
0+
D
X
d=1
Eq
h
w(d)T
i Λw(d)
i
i
. (17)
The posterior expectation of δ can be obtained by Eq[δ] = [g1
N /h1
N , ..., gI
N /hI
N ]T , and thus Eq[∆] = diag(Eq[δ]).
The posterior of λ is an independent Gamma distribution over columns qλ(λ) = QR
r=1 Ga(λr | cr
N , dr
N ) where the posterior parameters are updated by
cr
N = cr
0 + DI
2 , dr
N = dr
0+ 1
2
D
X
d=1
Eq
h
w(d)T
r ∆w(d)
r
i
. (18)
The posterior expectation of λ can be obtained by Eq[λ] = [c1
N /d1
N , ..., cR
N /dR
N ]T , and thus Eq[ΛR] = diag(Eq[λR]).
Posterior distribution of noise precision τ The noise precision τ is inferred by combining information from the observed data, all factor matrices, and its hyperprior. Its variational posterior is a Gamma distribution qτ (τ ) = Ga(τ | aN , bN ), where the posterior parameters are updated by
aN = a0 + N
2 , bN = b0 + 1
2 Eq ∥y − U DT w∥2
F . (19)
The posterior expectation of τ is then Eq[τ ] = aN /bN .
Lower Bound of Model Evidence The variational inference framework maximizes the evidence lower bound (ELBO) L(q), which is guaranteed not to decrease across iterations and can therefore serve as a convergence criterion. It is defined as L(q) = Eq(Θ) ln p(y, Θ) + H(q(Θ)), where the first term is the posterior expectation of the joint distribution and the second term is the entropy of the variational posterior distributions.
4.3 Predictive Distribution
The predictive distribution for unseen data, given training data, is approximated using the variational posterior as
p(y ̃i | y) ≃
ZZ
p y ̃i | {W(d)}, τ −1 q({W(d)}) q(τ ) d{W(d)} dτ.
(20)
This yields a Student’s t-distribution y ̃i | y ∼ T (y ̃i, Si, νy), with parameters
y ̃i = D
⊛ d=1
W ̃ (d)φ(d)
i , νy = 2aN ,
Si =
(
bN
aN
+
X
d
g(d)(xn)T Σ(d)g(d)(xn)
)−1
.
(21)
The predictive variance can be obtained from the Student’s
t-distribution as Var(yi) = νy
νy−2 S −1
i . Algorithm 1 summarizes the BTN-V presented above.
5. NUMERICAL EXPERIMENTS
In this section, we evaluate the performance of BTN-V in terms of predictive accuracy, uncertainty quantification, and computational efficiency, measured by the Root Mean Squared Error (RMSE), Negative Log-Likelihood (NLL), and training runtime, respectively. The NLL is defined as NLL = − 1
N
PN
n=1 log p(yn | θ), and it quantifies how
well the predicted probability distribution fits the observed data, penalizing both inaccurate and overconfident predictions.
In the Volterra model, increasing the memory length (M ) and polynomial degree (D) increases the number of parameters to be learned. Especially when the dataset is short, there are not enough samples to estimate these parameters effectively, which can lead to poor predictive performance. Using the short Cascaded Tanks Benchmark

0 50 100
0.0
0.2
0.4
0.6
0.8
Weights ( : off)
Mode 1
0 50 100
Mode 2
0 50 100
Mode 3
0 50 100
0.0
2.0
4.0
Weights ( : on)
0 50 100 0 50 100
Memory (Lags)
Comp 1 Comp 2 Comp 3
Fig. 2. Absolute values of the column weights of the factor matrices without (top) and with (bottom) δ regularization. The regularization of δ enforces decay across lags, consistent with the fading memory property of Volterra kernels.
dataset (Schoukens et al., 2016), we first demonstrate that regularization via δ and λ yields a more parsimonious model with fewer effective parameters and improved predictive accuracy. We then compare the performance of BTN-V with three state-of-the-art methods for Volterra system identification: BMVALS (Memmel et al., 2023), RVS (Birpoutsoukis et al., 2018) and SED-MPK (Libera et al., 2021)
For all models, the Volterra order is set to D = 3 and the memory length to M = 100. For BMVALS, which is a tensor-based Volterra kernel method, we use a rank of R = 48, as specified in the original paper. For the BTN-V models, the initial CPD rank is set to R = 20, and the hyperparameters are initialized following the procedure described in Kilic and Batselier (2025). To ensure numerical stability during identification, all input data in the BTN-V models are normalized to the range [0, 1], and th-
e output data are standardized to have zero mean and unit variance. The normalization on the targets is removed for prediction, and the validation performance of each method is reported. All computations are performed on an Apple MacBook Pro with an Apple M2 Pro chip and 16 GB of RAM running macOS 15.7.1. The Python code enabling the reproduction of all experiments in this section is available at github.com/afrakilic/BTN_Volterra_Sys_ID.
5.1 Benchmark Description
The Cascaded Tanks Benchmark is a nonlinear system with a short dataset (N = 1024). The setup includes two water tanks: water is pumped from a reservoir into the upper tank, flows into the lower tank, and then returns to the reservoir. The input signal controls the pump, while the output signal measures the water level in the lower tank. When too much water is pumped from the reservoir, the tanks may overflow. Thus, this dataset exhibits both soft and hard nonlinearities, where the soft nonlineari-
ties arise from the smooth hydraulic flow between the tanks and the hard nonlinearities are caused by tank overflow.
0 200 400 600 800
0.0
2.5
5.0
7.5
10.0
Validation Output
BTN-V
0 200 400 600 800
Time
0.0
5.0
10.0
Validation Output
BMVALS
True Values Predictions Confidence Bounds
Fig. 3. Predicted and actual validation outputs for BTN-V and BMVALS. The solid line shows the true observations, the dashed line shows the predictive mean, and the shaded area represents ±3 standard deviations from the mean.
In the following, we model the system’s input–output relationship using a Volterra series.
5.2 Regularization Through δ and λ
First to examine the BTN-V’s ability to perform automatic rank inference, we analyze whether column-wise regularization of the factor matrices via λ promotes convergence to low-rank solutions. Since the factor matrices are randomly initialized, we evaluated the model under 10 different random initializations to account for this randomness. With the initial rank fixed at R = 20, BTN-V yields an average final rank of 2.5 ± 0.5, demonstrating convergence to low-rank solutions.
Next, we present the effect of row-wise regularization through δ, which is associated with memory (lags). In the Volterra framework, past observations are expected to have a diminishing influence on the current state. To examine the effect δ on the factor matrices, we train the models both when the row-wise penalization term δ is enabled and disabled. Specifically, setting δ = I and keeping it fixed throughout the identification process results in no penalization on the rows; we refer to this sett-
ing as δ : off. Conversely, when δ is updated during identification, we denote it as δ : on. We present weights in the resulting factor matrices columnwise in Figure 2. In Figure 2, we plot the factor matrix weights columnwise. For D = 3 modes, there are three factor matrices of size I× R, where I = 101 for a memory length of M = 100. Each column represents a CP component of the Volterra kernel coefficients, and each row corresponds to a specific memory element. The top row of Figure 2 shows the c-
olumn weights without δ regularization, where no clear decay with increasing lag is observed. This is most evident in the first component (blue line), which even increases at higher lags, while other components exhibit similarly irregular patterns. In contrast, with δ regularization (bottom row),

Method RMSE NLL Time (s)
BTN-V (δ: on) 0.51 ± 0.02 0.77 ± 0.05 13.68 ± 1.73 BTN-V (δ: off) 0.69 ± 0.04 1.12 ± 0.10 12.52 ± 2.12 BMVALS 0.66 ± 0.00 1.23 ± 0.00 38.99 ± 1.46 RVS* 0.54 NA ≈ 23400 SED-MPK** 0.48 NA ≈ 120
Table 1. Performance comparison of BTN-V and existing methods in terms of RMSE, NLL, and computation time. Bold indicates the best result. *RVS and **SED-MPK values are taken from (Birpoutsoukis et al., 2018; Libera et al., 2021).
the estimated rank decreases to 2, and the column weights show a clear decaying trend across lags, as expected for Volterra kernels with fading memory. Unlike RVS and SED-MPK, which rely on fixed exponentially decaying priors, the proposed BTN-V model learns fading memory behavior directly from the data through δ regularization. As shown in Table 1, applying row-wise regularization δ also results in lower RMSE and NLL values, indicating improved predictive performance.
5.3 Predictive Performance
Table 1 presents a comparison between the proposed BTNV and the three state-of-the-art methods on validation data: BMVALS, RVS and SED-MPK in terms of RMSE, NLL, and computation time. Since the tensor components of BTN-V and BMVALS are randomly initialized, results are reported as the mean ± standard deviation over 10 runs to account for this randomness.
As mentioned before, RVS and SED-MPK use fixed exponentially decaying priors to model the fading-memory property of Volterra kernels, which improves their predictive accuracy and generally leads to lower RMSE. As shown in Table 1, BTN-V achieves a similar RMSE (0.51 ± 0.02) to SED-MPK (0.48) and better than RVS (0.54), while being much faster, requiring only 13.68 s for identification time compared to 120 s for SED-MPK and 23,400 s for RVS. Furthermore, we compare BTNV with BMVALS, a probabilistic-
 tensor-based Volterra kernel method. BTN-V has an average effective rank of 2.5 ± 0.5 over 10 runs, while BMVALS uses a fixed rank of R = 48, making BTN-V a much simpler model. Despite this, BTN-V achieves a lower RMSE (0.51 ± 0.02 vs. 0.66) and yields smoother predictive curves, as shown in Figure 3. For uncertainty quantification, BTN-V also reports a lower NLL (0.77 ± 0.05 vs. 1.23 ± 0.00). As illustrated in Figure 3, BTN-V provides tighter, more consistent uncertainty bounds, and is about thr-
ee times faster than BMVALS (13.68 s vs. 38.99 s).
6. CONCLUSION
This paper presents a probabilistic method for nonlinear system identification using the TN SISO Volterra series. Using sparsity-inducing hierarchical priors, BTN-V automatically determines the effective tensor rank and fadingmemory behavior from data. Experiments on the Cascaded Tanks Benchmark show that BTN-V offers competitive accuracy, improved uncertainty quantification, and reduced computational cost. Future work will focus on
extending BTN-V to MIMO systems. In this study, we initialized ∆ = I as an uninformative prior and showed that ∆ learned the fading-memory behavior directly from data. We also plan to explore alternative prior structures, such as decaying priors, and investigate representing the Volterra coefficients using other tensor-network formats, such as tensor-train decomposition, instead of CPD.
REFERENCES
Batselier, K., Chen, Z., and Wong, N. (2017). Tensor network alternating linear scheme for mimo volterra system identification. Automatica, 84, 26–35. Birpoutsoukis, G., Csurcsia, P.Z., and Schoukens, J. (2018). Efficient multidimensional regularization for volterra series estimation. Mechanical Systems and Signal Processing, 104, 896–914.
Chen, T., Ohlsson, H., and Ljung, L. (2011). On the estimation of transfer functions, regularizations and gaussian processes – revisited. IFAC Proceedings Volumes, 44(1). Favier, G., Kibangou, A.Y., and Bouillot, T. (2012). Nonlinear system modeling and identification using volterraparafac models. International Journal of Adaptive Control and Signal Processing, 26(1), 30–53.
Harshman, R.A. (1970). Foundations of the parafac procedure: Model and conditions for an “Explanatory” multi-mode factor analysis. Technical Report 16, UCLA Working Papers in Phonetics. Kilic, A. and Batselier, K. (2025). Interpretable bayesian tensor network kernel machines with automatic rank and feature selection. ArXiv:2507.11136. Kruskal, J.B. (1977). Three-way arrays: Rank and uniqueness of trilinear decompositions, with application to arithmetic complexity and statistics. Linear Algebra and-
 Its Applications, 18(2), 95–138.
Libera, A.D., Carli, R., and Pillonetto, G. (2021). Kernelbased methods for volterra series identification. Automatica, 129, 109686. Memmel, E., Menzen, C., and Batselier, K. (2023). Bayesian framework for a mimo volterra tensor network. IFAC-PapersOnLine, 56(2), 7294–7299.
Miao, P., Qi, C., Jin, Y., Song, K., and Yu, T. (2019). Kernels pruning for volterra digital predistortion using sparse bayesian learning. In 2019 11th International Conference on Wireless Communications and Signal Processing (WCSP), 1–6. Neal, R.M. (1996). Bayesian learning for neural networks, volume 118 of Lecture Notes in Statistics. Springer, New York, NY. Pillonetto, G. and De Nicolao, G. (2010). A new kernelbased approach for linear system identification. Automatica, 46(1), 81–93. Schoukens-
, M., Mattsson, P., Wigren, T., and Noel, J.P. (2016). Cascaded tanks benchmark combining soft and hard nonlinearities. In Proceedings of the Workshop on Nonlinear System Identification Benchmarks.
Winn, J.M. and Bishop, C.M. (2005). Variational message passing. Journal of Machine Learning Research, 6, 661694. Zhao, Q., Zhang, L., and Cichocki, A. (2015). Bayesian cp factorization of incomplete tensors with automatic rank determination. IEEE Transactions on Pattern Analysis and Machine Intelligence, 37(9), 1751–1763.

---

## Processing Information

- **Processing Library:** Zotero PDFWorker
- **Processing Date:** 2026-02-10T18:16:04.225Z
- **Text Length:** 31109 characters
- **Success:** Text extraction completed
- **PDF Library Used:** Zotero PDFWorker
- **Pages Processed:** 6 of 6
