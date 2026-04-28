# PDF Document: Baillie et al. - 2025 - Efficient multi-fidelity Gaussian process regression for noisy outputs and non-nested experimental d.pdf

**File Path:** Baillie et al. - 2025 - Efficient multi-fidelity Gaussian process regression for noisy outputs and non-nested experimental d.pdf

**Processed Date:** 2026-02-10T18:15:28.072Z

**File Size:** 7289.37 KB

**Total Pages:** 28

**Extracted Pages:** 28

**PDF Library:** Zotero PDFWorker

**Attachment Item ID:** 3440

**Title:** Efficient multi-fidelity Gaussian process regression for noisy outputs and non-nested experimental designs

**Collection:** Large Files > Random Papers

---

## Extracted Text Content

Efficient multi-fidelity Gaussian process regression for noisy
outputs and non-nested experimental designs
Nils Baillie1,2,∗, Baptiste Kerleguer3, Cyril Feau1, Josselin Garnier2
1Universite ́ Paris-Saclay, CEA, Service d’E ́tudes M ́ecaniques et Thermiques, 91191 Gif-sur-Yvette, France 2CMAP, CNRS, E ́cole polytechnique, Institut Polytechnique de Paris, 91120 Palaiseau, France 3CEA, DAM, DIF, F-91297, Arpajon, France
Abstract
This paper presents a multi-fidelity Gaussian process surrogate modeling that generalizes the recursive formulation of the auto-regressive model when the highfidelity and low-fidelity data sets are noisy and not necessarily nested. The estimation of high-fidelity parameters by the EM (expectation-maximization) algorithm is shown to be still possible in this context and a closed-form update formula is derived when the scaling factor is a parametric linear predictor function. This yields a decoupled-
 optimization strategy for the parameter selection that is more efficient and scalable than the direct maximum likelihood maximization. The proposed approach is compared to other multi-fidelity models, and benchmarks for different application cases of increasing complexity are provided.
Keywords: Multi-fidelity surrogate modeling, Auto-regressive co-kriging, Noisy outputs MSC codes: 60G15, 62G08, 62M20
1 Introduction
The purpose of surrogate modeling is to provide fast approximations of costly computer codes (or experiments) while keeping a reasonable precision, given a set of observations of said code. Surrogate models are especially useful in the context of uncertainty quantification (UQ) and sensitivity analysis where the code has to be called numerous times. We consider in this paper the multi-fidelity (MF) framework, where we suppose that observations from two codes of different levels of fidelity are ava-
ilable. The high-fidelity (HF) code yields the most accurate but costly computations, whereas the low-fidelity (LF) code is fast but less precise. We would like to develop a multi-fidelity surrogate
∗Corresponding author: nils.baillie@cea.fr
1
arXiv:2511.20183v1 [stat.AP] 25 Nov 2025

model that exploits both low and high-fidelity data points to approximate the highfidelity code. We also assume that the observations at both fidelity levels are tainted by noise, due to measurement errors or inherent stochastic computations. The surrogate model has to take into account this additional complexity. Gaussian process (GP) regression [29, 13], also referred as kriging, is a widely used tool in machine learning, especially in surrogate modeling because of its flexibility, interpretabi-
lity and stochastic nature, which makes it possible to quantify the uncertainty on the predictions without using potentially costly techniques such as bootstrapping [9] or conformal mapping [2]. Furthermore, GPs are also practical because analytical formulas are available for the mean and covariance functions at new prediction points given the training data, these formulas are known as the kriging equations.
In MF surrogate modeling, two types of models based on GPs are utilized. Kennedy and O’Hagan [16] assume that the HF code is a linear transformation of the LF code where a scaling term and a discrepancy term are present. This is also known as the auto-regressive or AR(1) co-kriging model, where one GP serves as an approximation of the LF code and a second one is a surrogate for the discrepancy term. Forrester et al [10] give more details regarding the estimation of the hyperparameters when maximiz-
ing the likelihood by providing analytical formulas. Le Gratiet [18] builds on this model and proposes a partial Bayesian estimation approach where priors are placed on every parameter except the correlation length of the GPs. The a posteriori means and variances have closed-form expressions when either conjugate priors or Jeffreys priors are used. This work also considers the more general case where the scaling term is a parametric linear predictor function and not only a scalar parameter.
One issue with this formulation of the AR(1) model is that we recover the distribution of the process of the highest level of fidelity conditionally to the training data of all fidelity levels, which means that a large matrix has to be inverted in order to get predictions for this level, but also that predictions are not available for the other levels of fidelity. Le Gratiet [18] addresses the first problem by proposing a complexity reduction of the covariance matrix. The second problem is tackled-
 by Le Gratiet and Garnier [21] which present the recursive formulation of the AR(1) model, it does not change the posterior distribution of the highest fidelity GP, but the distributions of the GPs corresponding to the intermediate levels are now available, hence, this improves the overall interpretability of the model since predictions can be made for all fidelity levels. This formulation is also compatible with maximum likelihood estimation (MLE), partial Bayesian estimation and leave-one-out c-
ross-validation (LOO-CV) estimation while keeping the reduced cost of the covariance matrix inversion, furthermore, this formulation is relevant for sequential design [20, 26]. Ma [22] provides a fully Bayesian approach for the recursive formulation and generalizes the objective prior theory of [27] to the MF framework.
An important assumption made in the previously mentioned articles is the “nested experimental designs” hypothesis, where the HF input training set is supposed to be a
2

subset of the LF input training set. This assumption leads to a simplification of the optimization scheme for the first, non-recursive formulation. In addition, for the recursive AR(1) model, the co-kriging equations, i.e. the formulas for the mean and variance functions of the HF GP, are also simplified. Le Gratiet [19, p. 274] provides more general co-kriging equations when this assumption is not verified, and suggests to directly maximize numerically the likelihood for all HF parameters, but d-
ue to the more complex structure of the covariance matrix, explicit formulas for the MLE are not given. An alternative approach for the hyperparameter optimization when the experimental designs are not nested is to use the expectation-maximization (EM) algorithm [33, 5] which consists in solving a sequence of simpler optimization problems, such that the likelihood value increases after each iteration.
However, these earlier works suppose that the codes are deterministic and thus, the observations are noise-free. This is a highly debatable assumption since in many cases, a noisy component is likely to be present due to measurement errors or stochastic calculations in some computer codes. Babaee et al.[3] propose a model that takes into account Gaussian noise terms on both fidelity levels, nevertheless, their approach corresponds to the non-recursive formulation and they estimate all hyperparamet-
ers jointly which implies solving a high-dimensional optimization problem. As mentioned in [3] it is not possible to apply this approach to large-scale problems.
We propose in this paper a multi-fidelity surrogate model based on GPs which exploits the benefits of the recursive AR(1) formulation while incorporating Gaussian noise terms on both fidelity levels and relaxing the nested experimental designs hypothesis. Regarding the training of the model, we optimize separately the LF and HF parameters since we consider that the LF surrogate model should not be affected by HF data, as it could worsen the results if the AR(1) assumption is not exactly verified. -
The LF parameters are optimized by MLE as it is done classically in GP regression, and the HF parameters are optimized with the EM algorithm. By appropriate algebraic manipulations we obtain an explicit and efficient procedure that makes it possible to apply the method to large-scale problems and overcome the limitations encountered in previous work [3]. Although we focus on the bi-fidelity case, our approach can be generalized to any number of fidelity levels in the classic AR(1) construction, i.-
e., when one level of fidelity depends only on the previous level. Other generalizations exist, such as the one presented in [12], where a specific level depends on all previous levels, or the nonlinear auto-regressive GP model [28]. The main empirical results of our paper can be summarized as follows: our model yields competitive performances when compared to a recent multi-fidelity approach presented in [11], designed to handle output noise on a simple test function, we provide a benchmark for t-
he more complicated, 4D analytical Park function [6, 31], and finally, we apply the model on a real-world dataset of sea surface temperature measures and verify that our results are consistent with those of [3], when the non-recursive formulation is used.
3

To be complete, we mention that many types of surrogate models have been adapted to the MF framework, such as polynomial chaos expansion (PCE) [11], or neural networks (NN) [25] but these models do not directly provide a way to quantify the uncertainties and have to rely on bootstrapping for instance. This issue is solved by other models, for example, deep Gaussian processes [7, 32], or the GP-Bayesian NN model [17]. Although these models are more flexible than the AR(1) model because there is no-
 assumption of a linear relation between the codes, they are less interpretable due to their NN-based structure. They are also computationally heavier to train compared to usual GP-based models.
The paper is organized as follows. First, we will present in section 2 the details of our multi-fidelity surrogate model: its definition, how to optimize the different hyperparameters and how to provide new predictions. Then, several performance metrics relevant to uncertainty quantification will be given in section 3, and finally, in section 4, we present the results obtained from the previously mentioned numerical applications.
2 Multi-fidelity Gaussian process model
In this section, we define several surrogate models based on GPs, we present formulas for the predictive mean and covariance of these processes and also provide details regarding the optimization of the different parameters.
2.1 Noisy Gaussian process regression
We are interested in approximating a deterministic target function y : RD 7→ R. However, we can only observe the scalar outputs of a function z, which are tainted by a zero-mean stochastic process ε in the sense that:
∀x ∈ RD, z(x) = y(x) + ε(x).
In the following, we suppose that ε represents an additive Gaussian noise, that all of its realizations are independent, and that the noise is homoscedastic, i.e., its variance denoted σε2 does not depend on the input x.
We have at our disposal a training set D = (Xtr, ztr), composed of a set of inputs Xtr = (x1, . . . , xN ) ∈ RN×D and a set of observed outputs ztr = (z1, . . . , zN ) ∈ RN×1 such that for all i ∈ {1, . . . , N }, zi = y(xi) + ε(xi). We adopt a Bayesian framework in which the prior model for y is a GP Y with a mean function m and a covariance function k. With the previous considerations, ε is a GP of mean zero and covariance function : Cov(ε(x), ε(x′)) = σε2 · 1(x = x′), with 1(·) being the indica-
tor function. We suppose that Y and ε are independent. We define Z = Y + ε, which is a GP since the sum of two independent GPs is a GP.
4

In practice, the user has to choose the mean and covariance functions of the GP. In the following, we suppose that the mean m is a linear predictor function : m(x) = f(x)⊤β, where β ∈ Rp×1 is a column vector of parameters and f(x) = (f1(x), . . . , fp(x))⊤ is a vector containing a basis of real-valued functions. Regarding the covariance, we assume it is of the form: k(x, x′) = σ2r(x, x′; θ) where σ2 > 0 is a parameter that controls the magnitude of the variance of the GP and θ ∈ RD is a vector wi-
th only positive entries called the length scales that controls the correlation between Y (x) and Y (x′) depending on x and x′. Since the inputs are multi-dimensional, we note x = (x(1), . . . , x(D)) and the correlation function r between vectors is a product of one-dimensional correlation functions:
r(x, x′; θ) =
D
Y
d=1
rd(x(d), x′(d); θd).
We also define the parameter η = σε2/σ2 which is the ratio of the noise variance and the
kernel variance, this parametrization is notably used in [14]. Let x ∈ RD, we want to derive the mean and variance prediction at x of the GP knowing the training data. We introduce the notations:

    
    
F = (fj (xi))(i,j)∈{1,...,N}×{1,...,p} ∈ RN×p
Z(Xtr) = (Z(x1), ..., Z(xN ))⊤
r(x; θ) = (r(x1, x; θ), . . . , r(xN , x; θ))⊤ ∈ RN×1
R(θ) = r(Xtr, Xtr; θ) = (r(xi, xj ; θ))(i,j)∈{1,...,N}2 ∈ RN×N .
By construction, the matrix F has full-rank and R(θ)+ηIN is symmetric positive definite (SPD) with IN being the N ×N identity matrix. By the Gaussian conditioning theorem, the posterior distribution of the process Y given Z(Xtr) = ztr is the one of a GP Ye with mean function mY and covariance function vY that have closed-form expressions, which we will refer to as the kriging equations:
(
mY (x) = f(x)⊤β + r(x; θ)⊤(R(θ) + ηIN )−1(ztr − F β)
vY (x, x′) = σ2 r(x, x′; θ) − r(x; θ)⊤(R(θ) + ηIN )−1r(x′; θ) .
In the noise-free case, i.e., when σε2 = 0, we observe that for all xi in the input training set Xtr, we have that mY (xi) = zi and vY (xi, xi) = 0, hence, Ye (Xtr) = ztr almost surely. We refer to this fact as the “interpolation property”. This property is lost as soon as a noise term is present.
For the hyperparameter optimization, we opt for the usual MLE approach, but other alternatives exist, such as Bayesian estimation [14], or LOO-CV estimation [4]. With the GP prior assumption, we have that : Z(Xtr) ∼ NN F β, σ2(R(θ) + ηIN ) . Thus, we fix (θ, η), and maximize the likelihood with respect to β and then σ2, we obtain the
estimates: (βˆ = (F ⊤(R(θ) + ηIN )−1F )−1F ⊤(R(θ) + ηIN )−1ztr
σˆ2 = (ztr − F βˆ)⊤(R(θ) + ηIN )−1(ztr − F βˆ) / N.
5

Putting these formulas into the log-likelihood yields a function of (θ, η):
log L(ztr | θ, η) = − N
2 log(σˆ2) − 1
2 log det(R(θ) + ηIN ) − N
2 (1 + log(2π)).
In practice, we maximize the previous function numerically using the L-BFGS-B algorithm [34] which is a quasi-Newton method that can heavily depend on the initialization, this is why a multi-start strategy is used. Moreover, we utilize systematically the Cholesky decomposition when computing terms involving the inverse or the determinant of R(θ) + ηIN , exploiting its SPD structure. The L-BFGS-B algorithm uses the gradient of the log-likelihood, which takes the form [29]:
∂ log L
∂ω (ztr | θ, η) = 1
2 Tr κκ⊤ − (R(θ) + ηIN )−1 ∂
∂ω (R(θ) + ηIN ) ,
where κ = (R(θ) + ηIN )−1(ztr − F βˆ)/
√
σˆ2 and ω ∈ {θ1, . . . , θD, η}.
2.2 Multi-fidelity auto-regressive model
We consider now the case with two levels of code:
(
zL(x) = yL(x) + εL(x)
zH (x) = yH (x) + εH (x),
where zL and zH are the observed functions tainted with noise, and yL, yH are the target functions, supposed to be deterministic. We observe the LF training data DL = (XtLr, ztLr)
and HF training data DH = (XtHr , ztHr ). In particular, we have the input training sets
XtLr ∈ RNL×D and XtHr ∈ RNH×D, as well as the noisy outputs ztLr ∈ RNL×1 and ztHr ∈
RNH ×1. We have that ztLr = zL(XtLr) = (zL(x))x∈XtLr and ztHr = zH (XtHr ) = (zH (x))x∈XtHr .
We typically have NL > NH . We do not assume that XtHr ⊂ XtLr, which is a usual hypothesis that leads to several simplifications in MF-GP models [10, 21, 22], as it can be a restrictive framework for sequential design for instance [20]. Both noise terms εL and εH are taken as GPs of mean zero and covariance functions:
(
Cov(εL(x), εL(x′)) = σ2
ε,L · 1(x = x′)
Cov(εH (x), εH (x′)) = σ2
ε,H · 1(x = x′).
The LF part of the MF surrogate model is identical to the single-fidelity GP model presented in the previous subsection, we utilize the same notations as before and add a subindex L to indicate the LF level. The prior model for the LF function yL is a GP YL with mean mL(x) = fL(x)⊤βL and covariance kL(x, x′) = σ2
LrL(x, x′; θL). We
let ZL = YL + εL, with YL and εL being independent. We define ηL = σ2
ε,L/σ2
L. The
posterior distribution of the LF GP YL given ZL(XtLr) is the one of a GP YeL with mean
mYL(x) and covariance vYL(x, x′) given by:
(
mYL (x) = fL(x)⊤βL + rL(x; θL)⊤(RL(θL) + ηLINL )−1(ztLr − FLβL)
vYL (x, x′) = σ2
L rL(x, x′; θL) − rL(x; θL)⊤(RL(θL) + ηLINL )−1rL(x′; θL) .
6

The LF hyperparameters are estimated by maximizing the likelihood of the LF data:

 
 
βˆL = (F ⊤
L (RL(θL) + ηLINL )−1FL)−1F ⊤
L (RL(θL) + ηLINL )−1ztLr
σˆ2
L = (ztLr − FLβˆL)⊤(RL(θL) + ηLINL )−1(ztLr − FLβˆL) / NL
(θˆL, ηˆL) = arg min(θL, ηL) NL log σˆ2
L + log det(RL(θL) + ηLINL) .
For the HF part of the model, according to the recursive formulation of the autoregressive AR(1) model, the prior model for the HF function yH is a GP YH defined as : 
 
 
YH (x) = ρ(x)YeL(x) + ∆H (x)
YeL ⊥ ∆H
ρ(x) = gL(x)⊤βρ with βρ ∈ Rq×1,
(2.1)
where YeL ⊥ ∆H means that YeL and ∆H are independent. The GP ∆H with mean mH (x) = fH (x)⊤βH and covariance kH (x, x′) = σ2
H rH (x, x′; θH ) models the discrepancy. Hence, YH is a linear transformation of the already optimized posterior process YeL and not of the prior process YL as in the non-recursive formulation [16, 10]. We let ZH = YH + εH , with YH and εH independent. We define ηH = σ2
ε,H /σ2
H.
Our aim is to find the posterior distribution of the HF process YH conditioned by ZH (XtHr ) = ztHr and to optimize the HF hyperparameters. Both goals rely on the dis
tribution of the Gaussian vector ZH (XtHr ), which depends on the vector YeL(XtHr ). One important remark is that, if the usual nested experimental designs assumption is made, i.e., XtHr ⊂ XtLr, and if there is no LF noise so that the interpolation property is ver
ified at the LF level, meaning that YeL(XtLr) = ztLr almost surely, then we have that
YeL(XtHr ) = zL(XtHr ) almost surely, where zL(XtHr ) is the sub-vector of ztLr corresponding
to the inputs XtHr . In particular, YeL(XtHr ) is of variance zero because it is almost surely equal to a deterministic quantity, this implies a simplification of the covariance matrix of the vector ZH (XtHr ) = ztHr given ztLr:
ZH (XH
tr ) ∼ NNH ρ(XH
tr ) ⊙ zL(XH
tr ) + FH βH , σ2
H (RH (θH ) + ηH INH ) , (2.2)
where the symbol ⊙ corresponds to the element-wise product, also called the Hadamard product. However, this simplification does not hold if LF noise is present or if the experimental designs are not nested. We define the auto-regressive mean and covariance functions, as well as their corresponding vectorized notations, when evaluated on the HF training data:

      
      
mAR(x) = ρ(x)mYL(x) + fH (x)⊤βH
mAR = ρ(XtHr ) ⊙ mYL (XtHr ) + FH βH
kAR(x, x′) = ρ(x)ρ(x′)vYL(x, x′) + σ2
H rH (x, x′; θH )
kAR(x) = ρ(x)ρ(XtHr ) ⊙ vYL (x, XtHr ) + σ2
H rH (x; θH )
KAR = (ρ(XtHr )ρ(XtHr )⊤) ⊙ VYL (XtHr , XtHr ) + σ2
H RH (θH ).
7

The posterior distribution of the HF GP YH given ZH (XtHr ) = ztHr is the one of a GP
YeH with mean mYH (x) and covariance vYH (x, x′) obtained by applying the Gaussian conditioning theorem which yields the general co-kriging equations [19]:
(
mYH (x) = mAR(x) + kAR(x)⊤(KAR + σ2
ε,H INH )−1(ztHr − mAR)
vYH (x, x′) = kAR(x, x′) − kAR(x)⊤(KAR + σ2
ε,H INH )−1kAR(x′).
The previous equations are valid for any function ρ. We suppose from now on that the scaling term ρ is a linear predictor function, i.e., that ρ(x) = gL(x)⊤βρ, where
βρ ∈ Rq×1 is a vector of hyperparameters to estimate, we let as well the matrix GL = (gL,j (xH
i ))(i,j)∈{1,...,NH }×{1,...,q} ∈ RNH ×q, so that ρ(XtHr ) = GLβρ. We are now interested in maximizing the likelihood of ZH (XtHr ) with respect to the HF parame
ters ξH = (βH , βρ, σ2
H , θH , ηH ). The key point that prevents the previously mentioned simplification is that, when there is LF noise or when the input design sets are not nested, the vector YeL(XtHr ) is not directly accessible and serves as a latent variable. The approach proposed by Zertuche [33, chapter 2.4] uses the EM algorithm in the deterministic, non-nested case. We show that this method can be used in the general case, when the output data is noisy for both fidelity levels. In [33], the EM algorithm is app-
lied to all parameters, LF and HF at once. As mentioned in the introduction, we consider that the LF parameters should not be affected by HF data and are thus fixed. We focus here only on optimizing the HF parameters.
The general framework for the EM algorithm is the following. The likelihood function depends on two distinct random vectors: Z, with an observable realization z, and Y, a latent variable that can not be observed. We want to maximize the likelihood with respect to a vector parameter ξ. Rather than doing the MLE directly, because the likelihood can be complicated, but simpler when Y is observed, we iterate two steps:
E-step : Compute Q(ξ; ξ(t)) = EY∼p(· | Z=z; ξ(t)) [log p(Y, z; ξ)] .
M-step : Find ξ(t+1) = arg maxξ Q(ξ; ξ(t)),
where p(Y, Z; ξ) is the joint density of (Y, Z) evaluated at ξ, and p(Y | Z = z; ξ(t)) is the conditional density of Y given Z = z evaluated at ξ(t), which is the value for ξ at iteration t. This leads to an estimate of the maximum likelihood, but depending on the joint distribution and the conditional distribution, the computations can be quite involved. In the following, we denote 1N the column vector of size N composed of only ones, 0M×N is the null matrix of size M × N , βρ,H = (βρ⊤, β⊤
H )⊤ is the column vector
that concatenates βρ and βH and S is the quadratic form in x: S(x; Σ) = x⊤Σ−1x, with x a column vector and Σ a SPD matrix. In our case, the EM algorithm can be written as:
E-step :
Using the values ξ(t)
H of the HF parameters at iteration t, compute the following vectors
8

and matrices:

        
        
Σ(t)
YZ = 1NH ρ(t)(XtHr )⊤ ⊙ VYL (XtHr , XtHr )
Σ(t)
ZZ = (ρ(t)(XtHr )ρ(t)(XtHr )⊤) ⊙ VYL (XtHr , XtHr ) + σ2(t)
H RH (θ(t)
H ) + η(t)
H INH μ(t)
Y|Z = mYL (XtHr ) + Σ(t)
YZ(Σ(t)
ZZ)−1 ztHr − ρ(t)(XtHr ) ⊙ mYL (XtHr ) − FH β(t)
H Σ(t)
Y|Z = VYL (XtHr , XtHr ) − Σ(t)
YZ(Σ(t)
ZZ)−1(Σ(t)
YZ)⊤
T (t)(θH , ηH ) = G⊤
L (RH (θH ) + ηH INH )−1 ⊙ Σ(t)
Y|Z GL,
(2.3)
as well as the block matrices:
H (t)
H = GL ⊙ (μ(t)
Y|Z1⊤
q ), FH and T (t)(θH , ηH ) = T (t)(θH , ηH ) 0q×pH
0pH ×q 0pH ×pH
. (2.4)
Finally, we compute the alternative Q-function:
Q′(ξH ; ξ(t)
H ) = − NH
2 log(σ2
H) − 1
2 log det(RH (θH ) + ηH INH ) − 1
2σ2
H
β⊤
ρ,H T (t)(θH , ηH )βρ,H
−1
2σ2
H
S zH
tr − H (t)
H βρ,H ; RH (θH ) + ηH INH − NH
2 log(2π).
which is equal to the original quantity Q(ξH ; ξ(t)
H ) in the generic E-step, up to an additive constant that does not depend on ξH . The details of the algebraic derivations are available in the appendix.
M-step :
We are now interested in the maximization of Q′ with respect to the HF parameters ξH . Proceeding in a similar manner as for the LF parameter estimation, we first derive a formula for the updated value of βρ,H , which is possible since we managed to express Q′ as a quadratic form in βρ,H :
β(t+1)
ρ,H = H (t)⊤
H (RH (θH ) + ηH INH )−1H(t)
H + T (t)(θH , ηH )
−1
H (t)⊤
H (RH (θH )+ηH INH )−1zH
tr ,
replacing βρ,H by the previous formula and optimizing Q′ with respect to σ2
H gives:
σ2(t+1)
H =1
NH
h
S zH
tr − H (t)
H β(t+1)
ρ,H ; RH (θH ) + ηH INH + β(t+1)⊤
ρ,H T (t)(θH , ηH )β(t+1)
ρ,H
i
.
The remaining parameters must be optimized numerically:
θ(t+1)
H , η(t+1)
H = arg min
θH , ηH
NH log σ2(t+1)
H + log det(RH (θH ) + ηH INH ) .
We obtained analogous results to those of [33], one important difference is that we do not suppose that ρ is a known function. We managed to generalize the result of [33] in the case where the observations are noisy and by recovering an update formula for βρ
9

at the M-step when ρ writes ρ(x) = gL(x)⊤βρ. We use a multi-start strategy for each instance of numerical optimization in the algorithm, in order to mitigate the influence of the initialization. As for the LF level optimization, we use the L-BFGS-B algorithm
[34] which exploits the gradient of the function Qe′, defined as: Qe′((θH , ηH ); ξ(t)
H) =
Q′((β(t+1)
ρ,H , σ2(t+1)
H , θH , ηH ); ξ(t)
H ). The expression of the gradient is given in the appendix.
3 Performance metrics for uncertainty quantification
We present in this section several metrics in order to evaluate the performance of a surrogate model when the target function y is known. We denote Xtest = (x1, . . . , xNtest) the test input set, m the surrogate model mean prediction function and s2 the predictive variance function.
The predictivity coefficient denoted Q2 is used to assess the performance of the mean prediction:
Q2 = 1 −
PNtest
t=1 (y(xt) − m(xt))2
PNtest
t=1 (y(xt) − y ̄)2 with y ̄ = 1
Ntest
Ntest
X
t=1
y(xt).
The closer Q2 is to 1, the better the prediction, whereas Q2 = 0 indicates that the surrogate model has the same prediction performance as the constant model that always outputs the empirical mean of the true values. Since Q2 ≤ 1, we consider often the quantity 1 − Q2 ≥ 0 for plots in logarithmic scale, it can be seen as a normalized mean square error metric.
Once we managed to fit a GP with a good prediction performance, i.e., a sufficiently high value for Q2, we want to know if the variance of the GP is well calibrated, i.e., if the surrogate model does not overestimate or underestimate the uncertainty on the predictions. The confidence interval (CI) on the latent function of level α ∈ (0, 1) for a Gaussian N (m(x), s(x)2) is:
Iα(x) = [m(x) − φαs(x), m(x) + φαs(x)] ,
where φα = Φ−1((1 + α)/2), Φ being the cumulative distribution function of the N (0, 1) distribution. One can also use the prediction interval (PI) on noisy outputs instead of the confidence interval which is obtained by replacing s(x) by ps(x)2 + σˆε2 in Iα(x):
Iα,σˆε2 (x) =
h
m(x) − φα
ps(x)2 + σˆε2, m(x) + φα
ps(x)2 + σˆε2
i
,
where σˆε2 is the estimated value for the noise variance. We define several metrics from these intervals. The mean empirical coverage probability (CP) is defined for CIs [30]
10

and PIs as:

    
    
CICPα = 1
Ntest
Ntest
X
t=1
1 (y(xt) ∈ Iα(xt))
PICPα = 1
Ntest
Ntest
X
t=1
1 z(xt) ∈ Iα,σˆε2 (xt) with z(xt) ∼ N (y(xt), σ2
ε ),
where σε2 is the true noise variance. We consider also the mean widths of the CIs and PIs: 
    
    
CIWα = 1
Ntest
Ntest
X
t=1
2φαs(xt)
PIWα = 1
Ntest
Ntest
X
t=1
2φα
ps(xt)2 + σˆε2.
The target value for both CICPα and PICPα is α. In practice, instead of fixing a particular value for α, it is advised to compare the values of CICPα (resp. PICPα) against α for many values for α on (0, 1) in order to get the α-CI plot (resp. α-PI plot), as suggested by [8]. For instance, if the values of CICPα are above α, it means that the GP variance is over-estimated, in other words, the surrogate model is underconfident. We say that the variance of the model is well calibrated, or that the in-
tervals are reliable when the α-CI and α-PI plots are close to the diagonal y = x line. For repeated numerical experiments, we prefer a scalar metric rather than an entire plot for each computation, this is why we use the integral absolute error (IAE) [23] defined as:
IAECI =
Z1
0
|CICPα − α|dα and IAEPI =
Z1
0
|PICPα − α|dα.
The closer the IAE is to 0, the more reliable the confidence or prediction intervals are. The IAE metric summarizes the information contained in the α-CI or α-PI plot, but it does not, however, indicate if the model tends to overestimate or underestimate the predictive uncertainty. Finally, an other important remark is that the Q2 only depends on the predictive mean and the interval widths depend only on the predictive variance, whereas the coverage probabilities and IAEs depend on both predictive-
 mean and variance.
4 Numerical applications
In the following, three application cases of increasing complexity are presented: an analytical 1D test function taken from [11], the 4D Park function [6, 31] and a real-world case studied in [3]. We use the same GP model each time, i.e., the a priori parametric mean functions mL and mH and the scaling function ρ are constants with respect to the input x, and we take the Gaussian correlation function for the GP covariances:
k(x, x′; θ) = σ2 exp

− 1
2
D
X
d=1
x(d) − x′(d)
θd
!2
.
11

Hence, in every application, the following parameters are always scalars: βL, βH , βρ, σ2
L,
σ2
H , ηL and ηH . The size of the length scales θL and θH correspond to the dimension of the input x. The choice of a constant ρ function matches the assumption made in [11] and the parametrization in [3]. The Gaussian kernel is justified here since the two analytical test functions are smooth and it is also used in [3].
4.1 Analytical 1D case: comparison with multi-fidelity PCE
We consider in this section a simple analytical one-dimensional function in order to compare the performance of our multi-fidelity surrogate model to the PCE-based model presented in [11] which incorporates additive Gaussian noise. The LF and HF test functions are defined for x ∈ [0, 2] as:
(
yL(x) = sin(2πx)
yH (x) = x
4 − √2 sin(2πx + π).
We choose our experimental design to be as close as possible as to [11]. The LF outputs are supposed to be noise-free, i.e. σ2
ε,L = 0, however, this information is not provided to the model. Regarding the training data, we fix NL = 100 in each experiment, whereas the number of HF points vary: NH ∈ {10, 20, 30, 40, 50}. The input data points are obtained through Latin hypercube sampling (LHS) [24], and the HF outputs are tainted by artificial Gaussian noise. The HF noise variance levels are different depending on the metrics, we consider σ2
ε,H ∈ {0.0082, 0.1662} for the 1 − Q2 and IAE metrics, and σ2
ε,H ∈ {0.0832, 0.1662} for the coverage probability metrics, as in [11]. We replicate Nrep = 50 times each design in order to assess the variability of the metrics because of the randomness in the point selection and the noise realization. The test set is composed of Ntest = 105 points evenly distributed in [0, 2]. It is important to mention that we always keep this experimental design, but when the coverage probabilities are computed in [11], the number of test points is changed from Ntest = 105 -
to Ntest = 104, and the number of replications is decreased to Nrep = 10, so the statistical variance on these last metrics when random points are sampled is difficult to assess for the MF-PCE. We also compare the performances of the MF-GP AR(1) model presented earlier to a singlefidelity GP model trained only on the HF data, in order to quantify the added value of the multi-fidelity approach. For simplicity, we refer to these two models as the MF-GP and the HF-only-GP, respectively.
The main observations are the following. When comparing the MF-GP to the MF-PCE [11, p. 9], we found according to Figure 1, that the former outperformed the latter in terms of the 1 − Q2 metric, but also that the two are competitive for the CICP and PICP metrics, considering the values given in Table 1 and 2 respectively. Overall, the coverage values are lower for the MF-GP and higher for the MF-PCE compared to the target value, hence, the uncertainty tends to be underestimated by the MF-GP and ov-
erestimated by the MF-PCE. However, these figures and tables also provide results
12

for the HF-only-GP model, and one can remark that it yields a better or equal performance than the MF-PCE in almost any situation for every metric, except when the HF data is scarce. When computing the IAE metrics for the MF-GP and the HF-only-GP, we notice thanks to Figure 2 and 3, that both models give similar results when the HF noise level is low, but the HF-only-GP outperforms the MF-GP when the HF noise level is higher. This overall over-performance of the HF-only-GP compared to the two MF -
models can be explained by the fact that the minimal allowed number of HF data points, NH = 10, is already relatively high compared to the simplicity of the target function, hence, the use of a simple GP is sufficient for this kind of application.
Mean CICPα values Target α σε,H MF-GP HF-only-GP MF-PCE
0.1 0.083 0.097 0.096 0.096
0.166 0.078 0.098 0.132 0.5 0.083 0.467 0.508 0.544
0.166 0.425 0.504 0.561 0.9 0.083 0.859 0.894 0.992
0.166 0.804 0.895 0.991 0.95 0.083 0.916 0.938 1
0.166 0.864 0.939 1
Table 1: Mean CICP values for the MF-GP, HF-only-GP (50 replications) and MF-PCE (10 replications) models with a noise variance of σ2
ε,H ∈ {0.0832, 0.1662} on HF outputs, NH = 50 points and different values for α. The average coverage values for PCE are taken from [11, p. 10].
Mean PICPα values Target α σε,H MF-GP HF-only-GP MF-PCE
0.1 0.083 0.096 0.098 0.110
0.166 0.089 0.098 0.104 0.5 0.083 0.482 0.492 0.530
0.166 0.449 0.491 0.526 0.9 0.083 0.881 0.890 0.905
0.166 0.839 0.889 0.919 0.95 0.083 0.936 0.942 0.950
0.166 0.897 0.942 0.962
Table 2: Mean PICP values for the MF-GP, HF-only-GP (50 replications) and MF-PCE (10 replications) models with a noise variance of σ2
ε,H ∈ {0.0832, 0.1662} on HF outputs, NH = 50 points and different values for α. The average coverage values for PCE are taken from [11, p. 10].
13

10 20 30 40 50 NH
10 5
10 4
10 3
10 2
10 1
1 Q2
2, H = 0.0082
HF only MF
10 20 30 40 50 NH
1 Q2
2, H = 0.1662
HF only MF
Figure 1: Box-plots of 1 − Q2 values for both models: Single-fidelity GP on HF data (HP-only-GP, red), Multi-fidelity GP (MF-GP, blue) for increasing values of NH and different values of the HF noise variance. Analogous plots for the MF-PCE are given in [11, p. 9].
10 20 30 40 50 NH
10 2
10 1
IAE CI
2, H = 0.0082
HF only MF
10 20 30 40 50 NH
IAE CI
2, H = 0.1662
HF only MF
Figure 2: Box-plots of IAECI values for both models: HF-only-GP (red) and MF-GP (blue) for increasing values of NH and different values of the HF noise variance.
14

10 20 30 40 50 NH
10 3
10 2
10 1
IAE PI
2, H = 0.0082
HF only MF
10 20 30 40 50 NH
IAE PI
2, H = 0.1662
HF only MF
Figure 3: Box-plots of IAEPI values for both models: HF-only-GP (red) and MF-GP (blue) for increasing values of NH and different values of the HF noise variance.
4.2 Analytical 4D case: the Park function
We are interested in assessing the performance of the auto-regressive model on a more complicated, multi-dimensional test case. We consider the Park function with:
yH (x1, x2, x3, x4) = x1
2
r
1 + (x2 + x23) x4
x21
− 1 + (x1 + 3x4) exp(1 + sin(x3))
being the HF test function and for the LF function, we define:
yL(x1, x2, x3, x4) = 1 + sin(x1)
10 yH (x1, x2, x3, x4) − 2x1 + x2
2 + x2
3 + 0.5.
Both functions are defined for x ∈ [0, 1]4, as for their respective ranges, yH (x) takes values between 0 and 25.59, and yL(x) is between 0.5 and 28.25. This function was introduced by Cox, Park and Singer [6] and then adapted to the multi-fidelity framework by [31] among other analytical test functions. This function is a test case in [7] but for noise-free observations. To our knowledge, it does not seem that there is any benchmark for this function in the context of noisy multi-fidelity surroga-
te modeling.
We first present the results for an experimental design in which we have NL = 100, NH = 20, Ntest = 104 (we provide a more extensive benchmark afterwards). All training and test points are sampled with maximin LHS on [0, 1]4 and artificial Gaussian noise is generated on both fidelity levels with variance σ2
ε,L = σ2
ε,H = 1. We consider once again the HF-only-GP model. Figure 4 shows that the MF-GP model yields predictions that are better aligned with the target values of the yH function than the HF-only-GP, this fact is summarized with the Q2 metric, which is closer to 1 for the MF-GP model. Regarding the confidence and prediction intervals, we remark from the α-CI and α-PI
15

plots in Figure 5 that both the MF-GP and HF-only-GP models tend to under-estimate the uncertainty. The MF-GP appears to be only slightly more reliable than HF-only-GP on CIs but the opposite can be said about PIs. The LF-GP yields relevant values for the different metrics which is expected because it is trained on a much higher number of data samples. Regarding the noise variance estimation, the LF-GP yields σˆ2
ε,L = 1.14, which is close to the true value, whereas the other models clearly underestimate this parameter: σˆ2
ε,H = 0.37 for the HF-only-GP and σˆ2
ε,H = 3.3 × 10−13 for the MF-GP on this particular case, which is somewhat expected due to the limited amount of HF data.
0 10 20 True function yL
0
5
10
15
20
25
Mean prediction
Q2 = 0.993 LF Target
0 10 20 True function yH
Mean prediction
Q2 = 0.942 MF Target
0 10 20 True function yH
Mean prediction
Q2 = 0.871 HF only Target
Figure 4: Predicted values versus true function values for the 3 GPs of interest: the LFGP of the MF model (left), the HF-GP of the MF model (center) and the single-fidelity GP trained on HF data only (right). The respective Q2 values are also given.
0.0 0.2 0.4 0.6 0.8 1.0
0.0
0.2
0.4
0.6
0.8
1.0
CICP
MF: IAE = 0.102 LF: IAE = 0.103 HF only: IAE = 0.152 Target
0.0 0.2 0.4 0.6 0.8 1.0
0.0
0.2
0.4
0.6
0.8
1.0
PICP
MF: IAE = 0.165 LF: IAE = 0.038 HF only: IAE = 0.142 Target
Figure 5: α-CI (left) and α-PI (right) plots for the 3 GPs of interest: the LF-GP of the MF model (green, solid), the HF-GP of the MF model (blue, dotted) and the singlefidelity GP trained on HF data only (red, dash-dot). The respective IAE values are also given.
16

In order to assess the statistical variability of the metrics of interest, and because the previous individual computation is not sufficient to study the global behavior of the models, we propose a benchmark obtained with many numerical experiments. We have now NL ∈ {75, 150}, NH ∈ {20, 40, 60}, the LF and HF noise variances are again: σ2
ε,L = σ2
ε,H = 1.0. We use the same number Ntest = 104 of test points. For each configuration, we compute the metric values for Nrep = 500 different samples by maximin LHS of the training points and noise realizations.
The main results are as follows. As shown in Figure 6, the MF-GP models outperform the HF-only-GP in terms of 1 − Q2 values when NH is low, but this difference in performance becomes insignificant when NH takes higher values. Increasing NL from 75 to 150 offers a slight improvement, but it is not as impactful as increasing NH . Regarding UQ, Figure 7 shows that in terms of IAECI, the three models give similar results, but the HF-only-GP clearly outperforms the MF models on the IAEPI metric, as sho-
wn in Figure 8. We also notice that these three metrics decrease for all three models as NH increases.
Nevertheless, we observe once again this over-performance in favor of the HF-only-GP for the IAE, seen in the high noise case in the previous application. We propose the following explanation: the LF-GP approximates well the LF target function thanks to the numerous LF data samples available. Since the AR(1) relation between the HF-GP and the LF-GP in the MF model is close to the true relation between the LF and HF target functions in these cases, it means that the mean function of the MF-GP is mu-
ch more informative than the a priori mean of the HF-only-GP. This is relevant for achieving lower error values with scarce HF data, however, this also makes it seemingly harder for the MF-GP model to correctly estimate the kernel-noise compromise as the variability in the HF data is already well explained by its mean function. In other words, the HF-only-GP has much more leeway regarding the kernel and noise parameters estimation since its a priori mean (a constant value in both applications) is -
insufficient to explain most of the variability in the HF data. Unfortunately, increasing NL does not seem to help the MF model in that regard. This would imply, in general, that if the computational budget is high enough, i.e., the user has a lot of available observations of the HF code, it would be preferable in terms of reliability to use a simple GP model, but only if it yields an error value comparable to the one of the MF-GP. The added value of the MF model is especially apparent when few HF-
 samples are given, or in other words, when the budget is limited.
Figures 7 and 8 also provide results on the average CI and PI widths for α = 0.95. For the HF-only-GP, the mean CI width tends to decrease whereas it remains more variable for the MF models. The mean PI widths seem to be more stable when NH increases for all three models. We interpret these results as follows: as NH increases, the HF-only-GP improves the UQ on both the underlying function, shown by the IAECI, and the noisy observations, shown by the IAEPI, which means that its estimation of the no-
ise variance
17

also improves. The fact that its mean CI width decreases jointly with the previous two metrics suggests that for small NH , the HF-only-GP tends to put a lot of weight on the kernel and in turn, it largely underestimates the noise variance. For higher values of NH , its estimation is better but also more stable as the variability over the mean CI and PI widths is clearly smaller. The same reasoning could be applied to the MF models, as their IAE values also decrease, but much slower, thus, their -
noise variance estimation is improved but not as rapidly as for the HF-only-GP.
20 40 60 NH
10 2
10 1
1 Q2
HF only MF (NL = 75) MF (NL = 150)
Figure 6: Box-plots of 1 − Q2 values for all models: single-fidelity GP on HF data (HFonly-GP, red), multi-fidelity GP with NL = 75 (royal blue) and multi-fidelity GP with NL = 150 (turquoise) for different values of NH .
18

20 40 60 NH
10 2
10 1
IAE CI
HF only MF (NL = 75) MF (NL = 150)
20 40 60 NH
2 × 100
3 × 100
4 × 100
6 × 100
Width 95% CI
HF only MF (NL = 75) MF (NL = 150)
Figure 7: Box-plots of IAECI values (left) and CIW95% values (right) for all models: single-fidelity GP on HF data (HF-only-GP, red), multi-fidelity GP with NL = 75 (royal blue) and multi-fidelity GP with NL = 150 (turquoise) for different values of NH .
20 40 60 NH
10 2
10 1
IAE PI
HF only MF (NL = 75) MF (NL = 150)
20 40 60 NH
2 × 100
3 × 100
4 × 100
6 × 100
Width 95% PI
HF only MF (NL = 75) MF (NL = 150)
Figure 8: Box-plots of IAEPI values (left) and PIW95% values (right) for all models: single-fidelity GP on HF data (HF-only-GP, red), multi-fidelity GP with NL = 75 (royal blue) and multi-fidelity GP with NL = 150 (turquoise) for different values of NH .
4.3 Real-world case: sea surface temperature dataset
We now apply the noisy AR(1) recursive multi-fidelity GP model to a real dataset of sea surface temperatures (SST) measures in the Massachusetts and Cape Cod bays, which is detailed by Babaee et al. [3], they also utilize a MF-GP model in this context, but as mentioned in the introduction, their approach is based on the non-recursive formulation
19

of the AR(1) model [16] and they optimize all LF and HF parameters jointly, without any separation. They consider however the presence of LF noise and the possibility of non-nested experimental designs. We show in the following that we are able to obtain results that are consistent with those of [3] on the same dataset by using a more efficient approach in terms of two aspects. The first one is the reduction of the time complexity for the prediction and optimization from O((NL + NH )3) to O(N 3
L + N3
H ), and the second one, notably, is the use of an optimization strategy which consists in maximizing the likelihood through a sequence of simple optimization problems thanks to the EM framework and the formulas we managed to derive, instead of directly solving a high-dimensional problem, which is a much more difficult task in practice. In terms of numerical optimization in this particular case, we solve a 4D problem at the LF level and a sequence of 4D problems at the HF level, instead of a globa-
l 11D problem as in [3].
We are interested in providing spatiotemporal predictions, thus, the inputs are triplets (longitude, latitude, time) and the output is the SST. The HF data is the Massachusetts Water Resource Authority (MWRA) measurements at 14 different stations in the Massachusetts and Cape Cod Bays. The temperature is measured one meter below the surface of the seawater, which is taken as a proxy for the SST, and the measurements are taken every month, except for the winter months, for a time span of two years -
(20152016). The LF data is images of 4 km × 4 km resolution from the Moderate-resolution Imaging Spectroradiometer (MODIS) Terra on board NASA satellite, further details are provided by [3]. Among the 14 MWRA stations, 11 are used for training and 3 are used for testing, this results in NH = 195 HF training points. Babaee et al. consider monthly satellite images, hence, NL = 2,526 LF data points are considered in the training set. In the GP model, the sole difference with [3] is that the parameter-
s βL and βH are estimated from the data and not fixed at zero. We now present two kinds of results: SST predictions with respect to time at a few specific locations, and SST predictions with respect to longitude and latitude at a particular day.
For the predictions with respect to time, 5 locations are considered, which correspond to the stations called F13, F29, N04, F02 and N07. The data of the first three stations is not part of the HF training set, hence, it can be seen as a validation set. This is not the case for the data points obtained at the last two stations, which are present among the HF training points. The results in Figure 9 show that the MF predictions closely follow the trend of the LF and HF data points, even for the val-
idation stations. Overall, the predictions are similar to those given in [3, p. 11], except for the first days, which can be explained by the fact that no LF training data is available before the 120th day, in particular, not all the LF points shown in Figure 9 are part of the training set, due to the fact that only monthly satellite images are considered for training. Thus, because of the Gaussian kernel, the LF-GP tends to yield near-constant predictions equal to its estimated a priori mean valu-
e for the first days, which is learned from the data and not fixed in our application. The other difference is that we observe larger confidence intervals between day 300 and day 400, as it corresponds to a time period during which
20

no HF training point is available.
Regarding the predictions with respect to spatial coordinates, we fix the time component at a given day, in this case: March 22, 2015. We compute the MF predictive means and standard deviations on a 100 × 100 spatial grid. We observe thanks to Figure 10 that our predictions are still similar to those of [3, p. 13] for the same day, in terms of both MF predictive mean and standard deviation values. For the MF mean, the same patterns can be observed, notably that colder temperatures are predicted at-
 the east coast around the coordinates (−70.9, 42.35) and also near the center of Cape Cod bay, in the region [−70.4, −70.2] × [41.9, 42.0]. As expected, the MF standard deviations are the smallest around the MWRA stations. Although we present here only the result for March 22, we did the same computations for other days: January 1st, January 31st, March 2nd, April 1st and May 1st. For all tested days, the predictive mean and standard deviations patterns are analogous to the results of [3], howeve-
r, for January 1st especially, but also January 31st, the temperature ranges are different, but this is also due to the fact that the mean predictions are different compared with [3] at the boundary of the time domain.
21

0 200 400 600 Days
5
0
5
10
15
20
25
SST (°C)
Station F13
LF F13 HF F13 (Test) MF prediction 2 std CI
0 200 400 600 Days
5
0
5
10
15
20
25
SST (°C)
Station F29
LF F29 HF F29 (Test) MF prediction 2 std CI
0 200 400 600 Days
5
0
5
10
15
20
25
SST (°C)
Station N04
LF N04 HF N04 (Test) MF prediction 2 std CI
0 200 400 600 Days
5
0
5
10
15
20
25
SST (°C)
Station F02
LF F02 HF F02 (Train) MF prediction 2 std CI
0 200 400 600 Days
5
0
5
10
15
20
25
SST (°C)
Station N07
LF N07 HF N07 (Train) MF prediction 2 std CI
71.0 70.8 70.6 70.4 70.2 70.0 Longitude
41.7
41.8
41.9
42.0
42.1
42.2
42.3
42.4
42.5
Latitude
F13 F29 N04 F02 N07
Figure 9: Multi-fidelity predictions and confidence intervals at each day of the 2015−2016 period for the five stations: F13, F29, N04, F02, N07. The first row correspond to the validation stations, i.e., their data is not in the HF training set. The first two plots of the second row correspond to stations were the HF points are part of the HF training set. The bottom-right plot shows the locations of the stations, the shapes of the bays are obtained using the data from [1].
22

71.0 70.8 70.6 70.4 70.2 70.0 Longitude
41.7
41.8
41.9
42.0
42.1
42.2
42.3
42.4
42.5
Latitude
MF mean (°C)
Stations
71.0 70.8 70.6 70.4 70.2 70.0 Longitude
41.7
41.8
41.9
42.0
42.1
42.2
42.3
42.4
42.5
Latitude
MF standard deviation (°C)
Stations 1.4
2.0
2.6
3.2
3.8
4.4
5.0
5.6
6.2
0.2
0.5
0.8
1.1
1.4
1.7
2.0
2.3
2.6
Figure 10: Multi-fidelity mean predictions (left) and standard deviations (right) computed on a regular 100 × 100 grid of [−71, −70] × [41.7, 42.6] for March 22, 2015. The red dots correspond to the locations of the MRWA stations whose data is used in the HF training set. The shapes of the bays are obtained using the data from [1].
5 Conclusion
We developed a multi-fidelity auto-regressive GP model that incorporates noisy outputs and non-nested experimental designs, it exploits the recursive formulation of the AR(1) model, leading to an improvement of the computational complexity compared to the initial formulation. We also showed that the EM algorithm can be applied in a more general case than the one considered by [33], i.e., with noisy outputs and ρ a parametric linear predictor function, this approach yields an efficient model select-
ion strategy. We compared on a simple test case our model to a recent MF model based on PCE and showed that the two models are competitive on every considered UQ metric and that the MF-GP is able to achieve smaller error values. We also showed that a simple GP model can be preferable to a MF-GP, notably in terms of reliability, but only when a high number of HF data points are available. The MF-GP model yields the smallest error values when only few HF data points are available, thus, it appears t-
o be the most useful model in realistic situations, when the computational budget is limited. Interesting prospects would include: improving the estimation of the kernel and noise parameters, studying more complex noise models, when the noise variance depends on the input value for instance, or such that the HF noise variance would be informed by the LF-GP. We can also mention the prospect of developing a sequential design of experiments strategy, that would not be limited to nested experimental d-
esign input sets [20], in order to improve the performance of the MF-GP when the budget allows it.
23

Acknowledgments
This research was supported by the CEA (French Alternative Energies and Atomic Energy Commission) and the SEISM Institute (https://www.institut-seism.fr/en/).
Appendix: Detailed derivation of the E-step
The distribution of YeL(XtHr ) does not depend on the HF hyperparameters, thus, only the
density function of the conditional distribution (ZH (XtHr ) | YeL(XtHr )) has to be considered in the logarithm in the E-step and not the joint density, since the former will not affect the M-step. The function Q′ is defined in the same way as the function Q with the density of the conditional distribution, instead of the joint density. Using (2.1), we have:
ZH (XH
tr ) | YeL(XH
tr ) ∼ NNH ρ(XH
tr ) ⊙ YeL(XH
tr ) + FH βH , σ2
H (RH (θH ) + ηH INH ) .
We retrieve a simpler covariance matrix which is identical to the one given in equation (2.2). We also need to derive the distribution of (YeL(XtHr ) | ZH (XtHr )), which can be obtained from the joint distribution and using the Gaussian conditioning theorem, we
also suppose that YeL and εH are independent. At ξH = ξ(t)
H , we have:
YeL(XtHr )
ZH (XtHr ) ∼ N2NH
mYL (XtHr )
ρ(t)(XtHr ) ⊙ mYL (XtHr ) + FH β(t)
H
!
, VYL (XtHr , XtHr ) Σ(t)
YZ
(Σ(t)
YZ)⊤ Σ(t)
ZZ
!!
,
then, the Gaussian conditioning theorem yields:
YeL (X H
tr ) | ZH (XH
tr ) = zH
tr ; ξ(t)
H ∼ NNH μ(t)
Y|Z, Σ(t)
Y|Z ,
the expressions for Σ(t)
YZ, Σ(t)
ZZ, μ(t)
Y|Z and Σ(t)
Y|Z are given by (2.3). Thus, the objective function to be maximized at the M-step is of the form:
Q′(ξH ; ξ(t)
H ) = − NH
2 log(σ2
H) − 1
2 log det (RH (θH ) + ηH INH ) − NH
2 log(2π)
−1
2σ2
H
E(YeL(XtHr ) | ZH (XtHr )=ztHr;ξ(t)
H)
h
Se(YeL (X H
tr ), zH
tr , ξH )
i
,
with : Se(YeL(XtHr ), ztHr , ξH ) = S ztHr − FH βH − ρ(XtHr ) ⊙ YeL(XtHr ); RH (θH ) + ηH INH .
The computation of the expectation term is possible by the following lemma:
Lemma 1. Let Y ∈ RN×1 be a multivariate random variable of mean μ and covariance matrix Σ. Suppose we have a fixed matrix A ∈ RN×N . We have the formula:
E[Y⊤AY] = μ⊤Aμ + Tr(AΣ).
24

Using the fact that: ρ(XtHr ) ⊙ YeL(XtHr ) = Diag(ρ(XtHr ))YeL(XtHr ) = Diag(GLβρ)YeL(XtHr ), we have by the previous lemma:
E(YeL(XtHr ) | ZH (XtHr )=ztHr;ξ(t)
H)
h
S zH
tr − FH βH − ρ(XH
tr ) ⊙ YeL(XH
tr ); RH (θH ) + ηH INH
i
= Tr Diag(GLβρ)⊤(RH (θH ) + ηH INH )−1 Diag(GLβρ)Σ(t)
Y|Z
+ S zH
tr − FH βH − ρ(XH
tr ) ⊙ μ(t)
Y|Z; RH (θH ) + ηH INH .
Now, we can write differently the trace term using a result from [15, p. 479] (lemma 7.5.2):
Lemma 2. Let x, y ∈ RN×1 be column vectors and A, B ∈ RN×N some matrices. We have the formula:
Tr Diag(x)⊤A Diag(y)B⊤ = x⊤(A ⊙ B)y.
Thus, with lemma 2 and the different block matrices defined in (2.4), we retrieve the given expression for Q′.
We now present the gradient formula. We define Qe′ which is obtained when we evaluate Q′ at the updated values for βρ,H and σ2
H:
Qe′((θH , ηH ); ξ(t)
H ) = Q′ (β(t+1)
ρ,H , σ2(t+1)
H , θH , ηH ); ξ(t)
H
= − NH
2 log σ2(t+1)
H −1
2 log det(RH (θH ) + ηH INH ) − NH
2 (1 + log(2π)).
For more compact notations, we let ReH = RH (θH ) + ηH INH . We have that:
∂
Qe′
∂ωH
((θH , ηH ); ξ(t)
H)= 1
2 Tr κκ⊤ − Re−1
H
∂
ReH
∂ωH
!
+1
2σ2(t+1)
H
ρ(t+1) (X H
tr )⊤ (Re−1
H
∂
ReH
∂ωH
Re−1
H ) ⊙ Σ(t)
Y|Z
!
ρ(t+1) (X H
tr )
where κ = Re−1
H (ztHr − H(t)
H β(t+1)
ρ,H )/
q
σ2(t+1)
H and ωH ∈ {θ(1)
H , . . . , θ(D)
H , ηH }.
References
[1] Brian Andrews, Wayne Baldwin, Daniel Sampson, and William Schwab. Continuous bathymetry and elevation models of the Massachusetts coastal zone and continental shelf. U.S. Geological Survey data release, 12 2019. doi:10.5066/F72806T7.
[2] Anastasios N Angelopoulos, Stephen Bates, et al. Conformal prediction: A gentle introduction. Foundations and trends® in machine learning, 16(4):494–591, 2023.
25

[3] H. Babaee, C. Bastidas, M. DeFilippo, C. Chryssostomidis, and G. E. Karniadakis. A multifidelity framework and uncertainty quantification for sea surface temperature in the Massachusetts and Cape Cod bays. Earth and Space Science, 7(2):e2019EA000954, 2020. doi:10.1029/2019EA000954.
[4] Franc ̧ois Bachoc. Cross validation and maximum likelihood estimations of hyperparameters of gaussian processes with model misspecification. Computational Statistics & Data Analysis, 66:55–69, 2013. doi:10.1016/j.csda.2013.03.016.
[5] Christophette Blanchet-Scalliet, Bruno Demory, Thierry Gonon, and Ce ́line Helbert. Gaussian process regression on nested spaces. SIAM/ASA Journal on Uncertainty Quantification, 11(2):426–451, 2023. doi:10.1137/21M1445053.
[6] Dennis D Cox, Jeong-Soo Park, and Clifford E Singer. A statistical method for tuning a computer code to a data base. Computational Statistics & Data Analysis, 37(1):77–92, 2001. doi:10.1016/S0167-9473(00)00057-8.
[7] Kurt Cutajar, Mark Pullin, Andreas Damianou, Neil Lawrence, and Javier Gonz ́alez. Deep gaussian processes for multi-fidelity modeling, 2019. arXiv: 1903.07320.
[8] Charles Demay, Bertrand Iooss, Loic Le Gratiet, and Amandine Marrel. Model selection based on validation criteria for Gaussian process regression: An application with highlights on the predictive variance. Quality and Reliability Engineering International, 38(3):1482–1500, 2022. doi:10.1002/qre.2973.
[9] B. Efron. Bootstrap Methods: Another Look at the Jackknife. The Annals of Statistics, 7(1):1 – 26, 1979. doi:10.1214/aos/1176344552.
[10] Alexander I.J Forrester, Andra ́s S ́obester, and Andy J Keane. Multi-fidelity optimization via surrogate modelling. Proceedings of the Royal Society A: Mathematical, Physical and Engineering Sciences, 463(2088):3251–3269, 2007. doi: 10.1098/rspa.2007.1900.
[11] Katerina Giannoukou, Stefano Marelli, and Bruno Sudret. Uncertainty-aware multifidelity surrogate modeling with noisy data. ASCE-ASME Journal of Risk and Uncertainty in Engineering Systems, Part A: Civil Engineering, 11(3):04025037, 2025. doi:10.1061/AJRUA6.RUENG-1441.
[12] Giulio Gori, Olivier Le Maıˆtre, and Pietro M. Congedo. Debiased multifidelity approach to surrogate modeling in aerospace applications. Journal of Aircraft, 0(0):1–14, 2025. doi:10.2514/1.C037765.
[13] Robert B. Gramacy. Surrogates: Gaussian Process Modeling, Design and Optimization for the Applied Sciences. Chapman Hall/CRC, Boca Raton, Florida, 2020. http://bobby.gramacy.com/surrogates/.
26

[14] Mengyang Gu, Xiaojing Wang, and James Berger. Robust gaussian stochastic process emulation. Annals of Statistics, 46, 08 2017. doi:10.1214/17-AOS1648.
[15] Roger A. Horn and Charles R. Johnson. Matrix Analysis. Cambridge University Press, 2 edition, 2012.
[16] Marc Kennedy and Anthony O’Hagan. Predicting the output from a complex computer code when fast approximations are available. Biometrika, 87, 10 2000. doi:10.1093/biomet/87.1.1.
[17] Baptiste Kerleguer, Claire Cannamela, and Josselin Garnier. A Bayesian neural network approach to multi-fidelity surrogate modeling. International Journal for Uncertainty Quantification, 14(1):43–60, 2024. doi:10.1615/int.j. uncertaintyquantification.2023044584.
[18] Loic Le Gratiet. Bayesian analysis of hierarchical multifidelity codes. SIAM/ASA Journal on Uncertainty Quantification, 1(1):244–269, 2013. doi:10.1137/ 120884122.
[19] Loic Le Gratiet. Multi-fidelity Gaussian process regression for computer experiments. PhD thesis, Universit ́e Paris-Diderot - Paris VII, October 2013.
[20] Loic Le Gratiet and Claire Cannamela. Cokriging-based sequential design strategies using fast cross-validation techniques for multi-fidelity computer codes. Technometrics, 57(3):418–427, 2015. doi:10.1080/00401706.2014.928233.
[21] Loic Le Gratiet and Josselin Garnier. Recursive co-kriging model for design of computer experiments with multiple levels of fidelity. International Journal for Uncertainty Quantification, 4(5):365–386, 2014. doi:10.1615/Int.J. UncertaintyQuantification.2014006914.
[22] Pulong Ma. Objective Bayesian analysis of a cokriging model for hierarchical multifidelity codes. SIAM/ASA Journal on Uncertainty Quantification, 8(4):1358–1382, January 2020. doi:10.1137/19m1289893.
[23] Amandine Marrel and Bertrand Iooss. Probabilistic surrogate modeling by Gaussian process: A review on recent insights in estimation and validation. Reliability Engineering & System Safety, 247:110094, 2024. doi:10.1016/j.ress.2024.110094.
[24] M. D. McKay, R. J. Beckman, and W. J. Conover. Comparison of three methods for selecting values of input variables in the analysis of output from a computer code. Technometrics, 21(2):239–245, 1979. doi:10.1080/00401706.1979.10489755.
[25] Xuhui Meng and George Em Karniadakis. A composite neural network that learns from multi-fidelity data: Application to function approximation and inverse PDE problems. Journal of Computational Physics, 401:109020, January 2020. doi: 10.1016/j.jcp.2019.109020.
27

[26] Hossein Mohammadi and Peter Challenor. Sequential adaptive design for emulating costly computer codes. Journal of Statistical Computation and Simulation, 95(3):654–675, 2025. doi:10.1080/00949655.2024.2436013.
[27] Rui Paulo. Default priors for Gaussian processes. The Annals of Statistics, 33(2):556 – 582, 2005. doi:10.1214/009053604000001264.
[28] P. Perdikaris, M. Raissi, A. Damianou, N. D. Lawrence, and G. E. Karniadakis. Nonlinear information fusion algorithms for data-efficient multi-fidelity modelling. Proceedings of the Royal Society A: Mathematical, Physical and Engineering Sciences, 473(2198):20160751, 2017. doi:10.1098/rspa.2016.0751.
[29] Carl Edward Rasmussen and Christopher K. I. Williams. Gaussian Processes for Machine Learning. The MIT Press, 11 2005. doi:10.7551/mitpress/3206.001. 0001.
[30] Lee W. Schruben. A coverage function for interval estimators of simulation response. Management Science, 26(1):18–27, 1980. doi:10.1287/mnsc.26.1.18.
[31] Shifeng Xiong, Peter Z. G. Qian, and C. F. Jeff Wu. Sequential design and analysis of high-accuracy and low-accuracy computer codes. Technometrics, 55(1):37–46, 2013. doi:10.1080/00401706.2012.723572.
[32] Yiming Yang, Deyu Ming, and Serge Guillas. Distribution of deep Gaussian process gradients and sequential design for simulators with sharp variations, 2025. URL: https://arxiv.org/abs/2503.16027.
[33] Federico Zertuche. Assessment of uncertainty in computer experiments when working with multifidelity simulators. PhD thesis, Universit ́e Grenoble Alpes, October 2015. URL: https://theses.hal.science/tel-01240812.
[34] Ciyou Zhu, Richard H. Byrd, Peihuang Lu, and Jorge Nocedal. Algorithm 778: LBFGS-B: Fortran subroutines for large-scale bound-constrained optimization. ACM Trans. Math. Softw., 23(4):550–560, December 1997. doi:10.1145/279232.279236.
28

---

## Processing Information

- **Processing Library:** Zotero PDFWorker
- **Processing Date:** 2026-02-10T18:15:28.072Z
- **Text Length:** 61626 characters
- **Success:** Text extraction completed
- **PDF Library Used:** Zotero PDFWorker
- **Pages Processed:** 28 of 28
