# PDF Document: Molla et al. - 2025 - Generative Pricing of Basket Options via Signature-Conditioned Mixture Density Networks.pdf

**File Path:** Molla et al. - 2025 - Generative Pricing of Basket Options via Signature-Conditioned Mixture Density Networks.pdf

**Processed Date:** 2026-02-10T18:14:48.123Z

**File Size:** 3018.68 KB

**Total Pages:** 27

**Extracted Pages:** 27

**PDF Library:** Zotero PDFWorker

**Attachment Item ID:** 3598

**Title:** Generative Pricing of Basket Options via Signature-Conditioned Mixture Density Networks

**Collection:** Large Files > Random Papers

---

## Extracted Text Content

Generative Pricing of Basket Options via Signature-Conditioned
Mixture Density Networks
Hasib Uddin Molla ∗1, Antony Ware1, Ilnaz Asadzadeh2, and Nelson Mesquita Fernandes2
1Department of Mathematics and Statistics, University of Calgary, Calgary, Canada 2BMO Capital Markets, Toronto, Canada
November 13, 2025
Abstract
We present a generative framework for pricing European-style basket options by learning the conditional terminal distribution of the log arithmetic-weighted basket return. A Mixture Density Network (MDN) maps time-varying market inputs—encoded via truncated path signatures—to the full terminal density in a single forward pass. Traditional approaches either impose restrictive assumptions or require costly re-simulation whenever inputs change, limiting real-time use. Trained on Monte Carlo (MC) unde-
r GBM with time-varying volatility or local volatility, the MDN acts as a reusable surrogate distribution: once trained, it prices new scenarios by integrating the learned density. Across maturities, correlations, and basket weights, the learned densities closely match MC (low KL) and produce small pricing errors, while enabling train-once, price-anywhere reuse at inference-time latency.
Keywords: Mixture Density Networks, Option pricing, Conditional distribution, Geometric Brownian motion, Local volatility, Time-varying volatility, Time-varying rates, Path signatures.
1 Introduction
Accurate and efficient option pricing is fundamental to risk management and trading strategies
in modern financial markets, particularly for institutional investors. Traditional pricing meth
ods, such as the Black–Scholes model or numerical techniques like Monte Carlo simulations,
remain widely used but exhibit notable limitations. Closed-form models often rely on restrictive
assumptions, while numerical methods can be computationally expensive and struggle to capture
complex market features, particularly in multi-asset portfolios or models with local volatility and
time-varying parameters.
A promising alternative is to learn the terminal density of basket returns across a range of
market inputs and then compute prices using risk-neutral expectations. However, this requires
∗Corresponding author: mdhasibuddin.molla@ucalgary.ca
1
arXiv:2511.09061v1 [q-fin.PR] 12 Nov 2025

2
an accurate representation of the conditional probability density function (PDF) of the under
lying asset under realistic dynamics—including time-dependent interest rates, dividend yields,
local volatility surfaces, and asset correlations. In such cases, a closed-form expression for the
probability density function of the underlying distribution is not available. In some cases, a
semi-closed-form formula is available but requires additional complex computations. Further
more, these solutions are typically limited to a single set of model parameters, which restricts
their practicality in dynamic or data-driven settings.
To address these limitations, recent advances in deep learning offer a promising avenue. In
particular, deep neural networks—when trained across a suitably chosen parameter space—can
approximate the underlying asset’s density function with high flexibility and generalization ca
pability. This transforms the pricing task into a “single solve” problem, meaning that once the
model is trained, it can be used to price options for arbitrary combinations of input parameters,
enabling efficient and scalable valuation across various market regimes.
1.1 From Risk-Neutral Expectation to Density Learning
Consider an asset price process S(t; θ), defined on the time interval t ∈ [0, T ], where θ denotes
the set of model parameters. For a given payoff function f (S(T ; θ), K), representing an option
with maturity T and strike price K, the corresponding option price P (T, K; θ) is given by
P (T, K; θ) = DT E f (S(T ; θ); K) , (1.1)
where DT = e−rT denotes the discount factor under constant interest rate r.
If p(y|θ, t) denotes the conditional probability density function of S(t; θ), then the expecta
tion can be equivalently expressed as the integral:
P (T, K; θ) = DT
Z
f (y; K)p(y|θ, T )dy. (1.2)
Hence, once the terminal conditional density p(y|θ, T ) of the underlying asset is known or
accurately approximated, the option price can be computed for arbitrary parameters directly
from this integral representation.
1.2 Mixture Density Networks for Distribution Approximation
Mixture models provide a flexible framework for approximating complex distributions by repre
senting them as convex combinations of simpler components, typically Gaussian. Such mixtures
capture multimodality, skewness, and other nonlinear features observed in empirical return dis
tributions. A Mixture Density Network (MDN) extends this idea by using a neural network
to output both the mixture weights and component parameters, allowing the learned model to
represent highly flexible conditional distributions.
MDNs have proven effective in modelling stochastic systems across diverse fields, from acous
tic modelling [ZS14] and bioinformatics [JWL+05] to probabilistic forecasting [ZLY+20] and
volatility estimation. Several studies have also explored the financial applications of MDNs.
Schittenkopf and Dorffner [SD01] extended the MDN framework to extract risk-neutral densi
ties from observed option prices, while Schittenkopf et al. [SDD98] utilized MDNs to estimate

3
and forecast stock market volatility. Li et al. [LNTWH24] introduced a recurrent MDN archi
tecture for demand forecasting in high-volatility mobility-on-demand systems.
Nevertheless, most existing work focuses on static settings, leaving open the challenge of
incorporating time-varying and path-dependent features—such as evolving interest rates and
dividend yields—into a unified probabilistic pricing framework.
1.3 Signature-Conditioned MDNs for Basket Option Pricing
In this work, we propose a signature-conditioned Mixture Density Network for generative pricing
of European-style basket options. The model learns to approximate the conditional terminal
distribution of basket returns under realistic market dynamics. These conditions include local
volatility, asset correlations, and time-dependent interest rates and dividend yields.
A key modelling challenge is encoding time-varying parameters in a format suitable for
deep learning. The use of truncated path signatures from rough path theory addresses this by
providing a finite-dimensional and scalable feature representation that captures the essential
temporal information of parameter trajectories. When combined with the MDN, they allow
the model to efficiently and robustly learn mappings from dynamic market trajectories to the
terminal distribution of the basket return.
Once trained, the model produces accurate option prices by integrating the learned density
against the payoff function of European call and put options. This positions the MDN as a gen
erative surrogate that replaces re-simulation at inference time. Empirical results demonstrate
that our method achieves pricing accuracy comparable to benchmark Monte Carlo simulations
while offering substantial computational speedups.
Relation to Generative Models in Finance: The Mixture density network approach for
conditional density approximation belongs to the broader class of generative models. MDNs di
rectly model p(y|x) as a finite mixture and train via exact negative log-likelihood (NLL). In one
dimensional settings, this yields a lightweight, numerically stable, and inherently multi-modal
representation. By contrast, variational autoencoders (VAEs) optimize an evidence-lower-bound
(ELBO) surrogate [KW14, RMW14] and introduce additional encoder-decoder structures; while
flexible, they add unnecessary latent complexity for 1D conditionals and are prone to posterior
collapse. Normalizing flows provide exact likelihoods [PPM17, DBMP19, PNR+21] and excel in
high-dimensional outputs, but are often over-parameterized for 1D tasks unless carefully con
strained. Finally, diffusion and score-based models [HJA20, SSDK+21] offer state-of-the-art
generative fidelity but require multi-step sampling and heavy conditioning, leading to higher
computational cost. For the univariate conditional densities considered in this study, the MDN
strikes the best balance between fidelity, numerical stability, and deployment cost. Neverthe
less, flow- or diffusion-based frameworks remain promising candidates for future multivariate
extensions, where richer joint structures among asset components become critical.
1.4 Background on Path Signatures
The signature of a path, introduced by Chen [Che57, Che77], is defined as an infinite sequence
of iterated integrals of the path over increasing tensor orders. In practice, one often works
with a truncated signature, and this truncation is theoretically justified by the fact that any

4
path of finite p-variation is uniquely determined by its signature truncated at order ⌊p⌋ (see
Chapter 7 of [FV10]). Its ability to capture the essential characteristics of time series in a
non-parametric manner has led to successful applications in various domains. In financial time
series analysis, signatures have been effectively employed for both classification and prediction
tasks [GLKF14, LNO14], demonstrating their utility in handling complex, high-frequency data.
Beyond predictive modelling, signatures have been applied to solve forward-backward stochastic
differential equations (FBSDEs) numerically [FLZ23], particularly in non-Markovian settings
where path-dependence plays a critical role.
The remainder of this paper is organized as follows. Section 2 reviews the theoretical foundations
of Mixture Density Networks and truncated path signatures. Section 3 describes the model setup,
data generation under Geometric Brownian Motion with local volatility and time-varying rates,
and the training procedure. Section 4 presents numerical experiments comparing our approach
to benchmark Monte Carlo pricing. Finally, Section 5 concludes with key insights and directions
for future research.
2 Mixture Density Networks and Path Signatures
In this section, we provide a brief overview of the core components of our framework: the mixture
density model, the mixture density network (MDN), and path signatures.
2.1 Mixture Density Model (Univariate)
A mixture model represents a complex probability distribution as a weighted sum of simpler
component distributions. Formally, an arbitrary probability density function p(y) can be approx
imated by a finite mixture of d component densities φj(y) with corresponding mixing weights
πj for j = 1, · · · , d:
p(y) =
d
X
j=1
πjφj(y|λj), (2.1)
where λj denotes the parameters of the j-th component distribution, determining its shape,
scale and location. When component distribution and mixing coefficients are appropriately
selected, this framework can approximate a wide variety of continuous probability distributions
with high fidelity. In practice, mixtures of Gaussian distributions are frequently used due to
their analytical tractability and universal approximation properties.
For the univariate target distribution p(y), we consider univariate component distributions
in the mixture model. For the Gaussian mixture model (GMM) of a univariate distribution,
λj = (μj, δj) and
φj(y|μj, δj) = 1
q
2πδ2
j
e
− (y−μj )2
2δj2 , (2.2)
where, μj are mean and δj > 0 are standard deviation of j-th Gaussian distribution; and πj > 0
decides how d-Gaussian distributions are mixed together and must satisfy the normalization
condition Pd
j=1 πj = 1.

5
The flexibility of the mixture model lies in its ability to approximate arbitrary probability
density functions by adjusting the means μj, standard deviations δj, and mixing coefficients πj
of the component Gaussians.
2.2 Mixture Density Network (Maximum Likelihood)
A mixture density network (MDN) is a hybrid architecture that combines a neural network
with a mixture density model to approximate complex conditional probability distributions.
Given an input (conditioning) feature vector x, an univariate MDN predicts the parameters of
a (Gaussian) mixture model:
• Mixing coefficients π(x) = (π1(x), · · · , πd(x)),
• Means μ(x) = (μ1(x), · · · , μd(x)),
• Standard deviations δ(x) = (δ1(x), · · · , δd(x)),
and finally the conditional density p(y|x) is given by
p(y|x) =
d
X
j=1
πj(x) × φj(y|μj(x), δj(x)). (2.3)
The network takes x ∈ Rm0 as input and produces the three parameter vectors π(x), μ(x)
and δ(x). These outputs are subject to specific constraints to ensure they define a valid Gaussian
mixture:
• Mixing coefficients πj(x) must be non-negative and sum to 1. This is typically enforced
by applying the softmax function to the raw network outputs for π.
• Standard deviations δj(x) must be strictly positive. A common choice is the exponential
function [Bis94] to map unconstrained outputs to positive values, though alternatives
such as ELU [NTGW23, WMZ+22, YJP+21] and softplus [GBC16, HGR22, HZR+22,
MMK+24, RHB24, WCMX22] are sometimes preferred to improve numerical stability.
• Means μ(x) are unconstrained real numbers and are typically output directly without
transformation.
This structure enables the MDN to learn an arbitrary conditional distribution p(y|x) from
data. A general schematic of the MDN is shown in Figure 1.
We now describe the internal structure of the MDN. First, the input layer calculates
y0 = g(W0x + β0), (2.4)
where y0 ∈ Rm; m is the number of neurons in each hidden layer, W0 and β0 are the weight
matrix and bias vector of the input layer, and g is the activation function.
Subsequently, each hidden layer h = 1, · · · , H computes:
yh = g(Whyh−1 + βh), (2.5)
where yh ∈ Rm; Wh and βh are the weight matrices and bias vectors of the h-th hidden layer.

6
Figure 1: Mixture Density Network
The final layer outputs the parameters of the mixture model as:
π = gπ(WπyH + βπ),
μ = gμ(WμyH + βμ),
δ = gδ(WδyH + βδ),
where gπ, gμ and gδ are activation functions chosen to ensure appropriate constraints on the
output.
The hidden layers of the network apply nonlinear transformations to the input, enabling
the MDN to capture complex dependencies between x and the conditional distribution p(y|x).
The choice of network architecture and activation functions in an MDN is problem-specific and
may be adapted to ensure both numerical stability and appropriate modelling behaviour. In our
implementation, we further customize the activation functions to (i) impose the initial condition
exactly on the PDF and (ii) regularize the density in the presence of singularities.
Training Objective (Exact Likelihood). The network is trained by negative log-likelihood
(NLL) with a LogSumExp stabilization:
log p(yi|xi) =
M
X
k=1
log


d
X
j=1
πj(xi) × φj(yi,k|μj(xi), δj(xi))


=
M
X
k=1
log


d
X
j=1
exp log πj(xi) + log φj(yi,k|μj(xi), δj(xi))

 , (2.6)
and
LNLL = − 1
Ns
Ns
X
i=1
log p(yi|xi). (2.7)

7
2.3 Path Signatures
In this work, we use the truncated signature of trajectories as features in the MDN. Let T > 0
be a fixed time horizon, and let m ∈ N, 0 < p ∈ R. Denote by Vp([0, T ]; Rm) the space of
continuous paths X : [0, T ] → Rm of finite p-variation. The signature of the path X over the
interval I = [0, T ] is defined as the infinite sequence of its iterated integrals:
Sig(X)0,T := 1, X1
0,T , · · · , Xm
0,T , X1,1
0,T , X1,2
0,T , · · · , Xm,m
0,T , X1,1,1
0,T , · · · , (2.8)
where each element corresponds to a multi-indexed iterated integral of the form
Xi1,··· ,il
0,T :=
Z
0<t<T
Xi1,··· ,il−1
0,t dX il
t=
Z
0<tl<T
···
Z
0<t1<t2
dX i1
t1 · · · dXil
tl , (2.9)
for l ≥ 1 and ij ∈ {1, · · · , m}. The zeroth level of the signature is defined to be 1 by convention.
The first level of the signature is the collection of m real numbers X1
0,T , · · · , Xm
0,T and the second
level is the collection of m2 real numbers X1,1
0,T , · · · , X1,m
0,T , X2,1
0,T , · · · , Xm,m
0,T . More generally, the
l-th level of the signature consists of all terms Xi1,··· ,il
0,T over the multi-indices of length l.
When the path (Xt)t∈[0,T ] is of finite variation, the iterated integrals in (2.9) are interpreted
as Riemann-Stiltjes integrals. When (Xt)t∈[0,T ] is a continuous semi-martingale (e.g., Brownian
motion or asset price processes or other stochastic processes), the integrals in (2.9) are in the
Stratonovich sense, aligning with rough path theory.
The truncated signature of X up to level l is denoted by Sig(X)l
0,T and is obtained by retain
ing all terms in the infinite sequence in (2.8) up to (and including) level l. This truncation yields
a finite-dimensional feature representation that preserves the distinguishable characteristics of
the path. One can choose l to balance fidelity vs. parameter count; in our experiments, l around
4-5 works well.
3 The Mechanism of Training an MDN
Training a Mixture Density Network (MDN) to price a specific derivative product involves several
key decision points. A schematic overview of the MDN training process is presented in Figure
2.
Next, we will discuss all these aspects in detail.
3.1 Asset Price Model
Asset price dynamics in financial markets are commonly modelled using stochastic differential
equations (SDEs), with popular choices including the Geometric Brownian Motion (GBM), the
Heston stochastic volatility model, and various rough volatility models. In this work, we focus
on models in which the asset price evolves under a GBM framework with generalized volatility
structures.
3.1.1 Geometric Brownian Motion (GBM)
Let r(t) denote the risk-free interest rate and qj(t) the dividend rate of asset j. Consider a
portfolio of N assets whose price processes are denoted by S(t) = (S1(t), · · · , SN (t)). Each asset

8
Figure 2: MDN Training Workflow
Sj(t) follows the SDE:
dSj(t) = (r(t) − qj(t))Sj(t)dt + σj(t, Sj(t))Sj(t)dWj(t), Sj(0) = s0,j, (3.1)
for t ∈ [0, T ] and j = 1, 2, · · · , N, where Wj(t) denotes the standard Brownian motion, and
σj(·, ·) is the volatility function. In this work, we consider two forms of volatility for each asset:
i. Time dependent volatility: σj(t, Sj(t)) = σj(t).
In this setting, volatility varies with time but is independent of the asset’s current price.
This can model market regimes where volatility follows a deterministic term structure.
ii. Local volatility: σj(t, Sj(t)) = σj(Sj(t)).
Here, volatility is a function of the asset’s spot price, allowing the model to capture empirical
features such as volatility smiles and skews.
These formulations enable the modelling of more realistic market dynamics than the classical
constant-volatility GBM.
3.1.2 Correlation Structure of the Basket
In modelling a basket of N assets, the correlation structure among their respective Brownian
motions is an essential component. Let R ∈ RN×N denote the correlation matrix governing the
N -dimensional Brownian motion vector:
(W1, · · · , WN )T . (3.2)
Assuming that R is positive semi-definite and symmetric, it admits a Cholesky decomposition
R = LLT , where L is a lower triangular matrix with strictly positive diagonal entries. Then,
the correlated Brownian motion increments can be expressed as:
(dW1(t), · · · , dWN (t))T = L(dWf1(t), · · · , dWfN (t))T , (3.3)
where dWf1(t), · · · , dWfN (t) are independent Brownian motion increments. This construction
ensures that the components of the vector (W1, · · · , WN ) follow the desired correlation structure
specified by R.

9
3.2 Target Distribution
The structure of the option contract determines the choice of the target distribution. In this
study, we consider a European-style option written on the weighted return of a basket of N
assets. Accordingly, the target is a univariate conditional distribution of the basket’s weighted
return at a fixed terminal time.
The basket weights can be treated in two ways. If the basket’s composition is fixed, we may
hold the weights constant throughout training. However, to enable pricing across a variety of
portfolio compositions without retraining, the MDN can be parameterized to include the basket
weights as part of the input. This allows the model to generalize over different weighting schemes
and provides greater flexibility in practical applications.
log-space as the target of MDN: To improve the accuracy of the MDN approximation,
we transform the target variable to log-space. Specifically, the MDN is trained to learn the
distribution of the logarithm of the basket’s average return, resulting in a smoother, more stable
learning target.
3.3 Training Data Generation
The generation of training data for the MDN is closely tied to both the choice of the underlying
asset price model and the MDN’s parameterization. This section is divided into two subsections,
each corresponding to a distinct volatility structure assumed under Geometric Brownian Motion
(GBM) dynamics for the underlying assets. For each case, we provide a comprehensive list of
model parameters along with the complete algorithm used to generate the training data.
The numerical experiments presented later in the paper are also organized according to these
two cases. Before detailing the case-specific procedures, we first outline the general sampling
strategies employed for the option maturity, the lower-triangular matrix L obtained from the
Cholesky decomposition of the correlation matrix, and the time-varying market rates.
Sampling for maturity, T : We define maturity T in the interval (0, 1], where T = 1 corre
sponds to one year. To ensure adequate coverage of both short- and long-term behaviours, we
sample T from [0.001, 1.05], with more samples drawn near the boundaries.
Sampling of L: To generate a random sample of a valid correlation matrix R, we begin by
randomly sampling a sequence of angles:
Θ=
n
α1, α2, · · · , α N(N−1)
2
o
, αi ∈ (0, π), (3.4)
and define
ξi = sin(αi), γi = cos(αi).
Using these trigonometric components, we construct a lower triangular matrix L ∈ RN×N

10
as follows:
L=

      
1 0 0 ··· 0
γ1 ξ1 0 · · · 0
γ2 ξ2γ3 ξ2ξ3 · · · 0
... ... ... . . . ...
γN ξN γN+1 ξN ξN+1γN+2 · · · ξN ξN+1 · · · ξ N(N−1) 2

      
. (3.5)
This construction ensures that the resulting matrix LLT = R is a valid correlation matrix—i.e.,
symmetric and positive semi-definite—and allows for flexible specification of inter-asset depen
dencies through parameterized random sampling.
Sampling of time-varying rates: As time-varying rates such as interest and dividends are
parameters of the GBM model and will become the parameters of the MDN through the mixture
model, we will need sample paths of the time-varying parameters to simulate the sample paths
for the assets in the basket for the training of the MDN. In practice, such sample paths can
be generated from historical data using resampling techniques (e.g., bootstrapping). In our
experiments, we adopt the Cox-Ingersoll-Ross (CIR) process to simulate these paths:
dX(t) = a(b − X(t))dt + c
√
X(t)dW (t), X(0) = x0, (3.6)
where a, b and c are fixed, stationary parameters. For each asset j in the basket, we generate
random initial values x0,j and simulate the corresponding time-varying paths using the CIR
model.
Now, we will discuss the details of the training data generation for two different volatility
structures under GBM.
3.3.1 GBM with Time-varying Volatility
Consider a basket of N assets, whose price processes S(t) = (S1(t), · · · , SN (t)) follow geometric
Brownian motion (GBM) dynamics with time-varying volatilities. The stochastic differential
equation (SDE) for each asset j = 1, · · · , N is given by:
dSj(t) = (r(t) − qj(t))Sj(t)dt + σj(t)Sj(t)dWj(t), Sj(0) = s0,j, (3.7)
where t ∈ [0, T ]. The Brownian motions (W1(t), · · · , WN (t)) are correlated and correlation is
specified by a correlation matrix RN×N .
Model parameters: The completed set of model parameters for the GBM system is denoted
by
θ = r(·), qj(·), σj(·) N
j=1, L ,
where r(·) is the time-varying risk-free interest rate, qj(·) and σj(·) are the time-varying dividend
rate and volatility for jth asset in the basket. L is the lower triangular matrix from the Cholesky
decomposition of the correlation matrix R of the basket, that is, R = LLT . The price process
S(t) is thus parametrized by θ and denoted by S(t; θ).

11
Training set generation: The Algorithm 1 below summarizes the procedure used to generate
the training data for the mixture density network (MDN), where the target is the weighted
return of the basket with fixed basket weights.
Algorithm 1 Training Set Generation for Time-Varying GBM with Correlated Assets
Inputs: Initial basket asset price S(0), Basket weight w
Output: Training dataset (xm,i, ym,i)i,m
Step 1: Sample n1 maturity values T i ∈ [0, T ]
Step 2: For each i = 1, . . . , n1:
for m = 1 : n2 do
- Sample initial values rm,i
0 , qm,i
0 , and σm,i
0
- Generate time-varying paths rm,i(t; rm,i
0 ), qm,i(t; qm,i
0 ), and σm,i(t; σm,i
0 ) for t ∈ [0, T i]
using the CIR model
- Sample a lower-triangular matrix Lm,i to define the correlation structure
- Form the parameter set:
θm,i = rm,i(·), qm,i
j (·), σm,i
j (·) N
j=1, Lm,i
- Simulate M independent paths of asset price,
n
Sm,i,k(t; θm,i)
oM
k=1
over t ∈ [0, T i]
Step 3: Compute MDN targets:
ym,i =
(
ym,i,k = log
N
X
j=1
wj
S m,i,k
j (T i; θm,i)
Sj (0)
)M
k=1
Step 4: Define MDN inputs as xm,i = (θm,i, T i)
3.3.2 GBM with Local Volatility
We consider a basket consisting of N assets whose price processes S(t) = (S1(t), · · · , SN (t)),
evolve according to geometric Brownian motion (GBM) dynamics with local volatilities. The dy
namics of each asset j = 1, · · · , N are described by the following stochastic differential equation
(SDE):
dSj(t) = (r(t) − qj(t))Sj(t)dt + σL(Sj(t))Sj(t)dWj(t), Sj(0) = s0,j, (3.8)
where t ∈ [0, T ] and σL(·) denote the local volatility function. The Brownian motions (W1(t), · · · , WN (t))
are correlated, with the correlation structure captured by a correlation matrix RN×N .
Model parameters: Let θ = r(·), qj(·) N
j=1, L , denote the set of model parameters gov
erning the risk-free interest rate, dividend yields, and the Cholesky factor L of the correlation
matrix. Together with the local volatility parameter ν, the full set of parameters for the GBM
model is given by (θ, ν). Accordingly, the asset price process is written as S(t; θ, ν) to reflect
the dependence on both parameter sets.

12
Training set generations: The procedure for generating the training dataset for the mixture
density network (MDN) is summarized in Algorithm 2. The target in this case is also the
weighted return of the basket, but we include the basket weights as part of the MDN input.
Algorithm 2 Training Set Generation for local-volatility GBM with Correlated Assets
Inputs: Initial basket asset price S(0)
Output: Training dataset (xm,i, ym,i)i,m
Step 1: Sample n1 maturity values T i ∈ [0, T ]
Step 2: For each i = 1, . . . , n1:
for m = 1 : n2 do
- Sample initial values rm,i
0 and qm,i
0
- Generate time-varying paths rm,i(t; rm,i
0 ) and qm,i(t; qm,i
0 ) for t ∈ [0, T i] using the CIR
model
- Sample a lower-triangular matrix Lm,i to define the correlation structure
- Sample local-volatility function parameters am,i
loc , bm,i
loc and cm,i
loc
- Form the parameter set:
θm,i = rm,i(·), qm,i
j (·) N
j=1, Lm,i ,
and
νm,i = am,i
loc,j , bm,i
loc,j , cm,i
loc,j
N
J =1
- Simulate M independent paths of asset price,
n
Sm,i,k(t; θm,i, νm,i)
oM
k=1
over t ∈ [0, T i]
- Generate samples of the basket weights wm,i = wm,i
1 , · · · , wm,i
N
Step 3: Compute MDN targets:
ym,i =
(
ym,i,k = log
N
X
j=1
wm,i
j
S m,i,k
j T i; θm,i, νm,i
Sj (0)
)M
k=1
Step 4: Define MDN inputs as xm,i = (θm,i, νm,i, T i, wm,i)
3.4 MDN Training Algorithm
The training of the MDN proceeds via the following steps:
Step 1. Initialization: Set the learning rate η and initialize the network parameters
Φ = {W0, · · · , WH , Wπ, Wμ, Wδ, β0, · · · , βH , βπ, βμ, βδ}.
Step 2. Forward Pass: For each training pair (xi, yi), compute the MDN output
πj(xi), μj(xi), δj(xi) d
j=1.
Step 3. Compute Negative log-Likelihood Loss: The network is trained by minimizing
the negative log-likelihood (NLL) of the conditional density p(y|x), which corresponds to the
maximum likelihood estimation of the mixture model parameters.

13
For each data point (xi, yi), the log-likelihood is given by:
log p(yi|xi) =
M
X
k=1
log


d
X
j=1
πj(xi) × φj(yi,k|μj(xi), δj(xi))

 . (3.9)
To enhance numerical stability during training, especially in the case of Gaussian mixtures,
we adopt the LogSumExp trick and express the log-likelihood as:
log p(yi|xi) =
M
X
k=1
log


d
X
j=1
exp log πj(xi) + log φj(yi,k|μj(xi), δj(xi))

 , (3.10)
where the log-density of a univariate Gaussian component is given by:
log φj(yi,k|μj(xi), δj(xi)) = − log δj(xi) − log(2π)
2 −1
2
yi,k − μj (xi)
δj(xi) . (3.11)
The total loss over the entire dataset is:
LNLL = − 1
Ns
Ns
X
i=1
log p(yi|xi). (3.12)
Step 4. Gradient Computation: Compute the gradients ∂L/∂Φ via backpropagation
using the chain rule. This requires computing the partial derivatives with respect to the mixture
parameters πj, μj, δj.
Step 5. Parameter Update: Update the network parameters using an appropriate opti
mizer (Adam, for example).
Repeat steps 2 − 5 for multiple epochs until the training loss converges.
4 Numerical Experiments
In this section, we present numerical experiments of training a mixture density network (MDN)
to approximate the conditional distribution of weighted basket returns for option pricing. As
mentioned earlier, numerical experiments are divided into two subsections, corresponding to two
distinct volatility structures considered under Geometric Brownian motion (GBM) dynamics for
the underlying assets. Each subsection includes numerical experiments that evaluate the accu
racy of the learned distribution and the resulting option price with the benchmark Monte Carlo.
Under both volatility structures, we consider a basket of N assets, each following a GBM with
time-varying interest and dividend rates. The option is written on the weighted price of the
basket. Each asset evolves under its own set of parameters and is correlated with others via
a given correlation matrix R ∈ RN×N , which defines the joint dynamics of the underlying
N -dimensional Brownian motion. Our objective is to approximate the univariate conditional
distribution of the weighted return of the basket at a fixed terminal time. To this end, we employ
a mixture density network (MDN) with a parametric Gaussian mixture model. All parameters
of the GBM model, including the basket’s correlation matrix and the terminal time, constitute

14
the parameter set of the mixture model.
Before detailing numerical experiments with the two volatility structures considered, we first
present the metrics used to assess distributional and pricing accuracy.
Measure of Approximation Accuracy: The accuracy of the approximations produced by
the MDN can be assessed in two complementary ways:
• Distributional Accuracy: We evaluate how closely the probability distribution learned
by the MDN matches the empirical distribution obtained from Monte Carlo (MC) sim
ulations. The empirical distribution is estimated using kernel density estimation (KDE)
on the MC samples. The discrepancy between the MDN-predicted density pMDN and the
MC-based density pMC is quantified using the Kullback-Leibler (KL) divergence:
DKL(pMC ∥ pMDN) ≈
X
i
pMC(xi) log pMC(xi)
pMDN(xi) · ∆x,
where {xi} is a uniform grid over the support of the distribution and ∆x is the grid spacing.
• Pricing Accuracy: Using the MDN-predicted distribution, we can compute option prices
and compare them with benchmark prices obtained via Monte Carlo simulation. The
accuracy of these prices is evaluated using a Huberized relative error metric:
relative error = |PMDN − PMC|
0.125% × PMC + 0.00125 ,
where PMDN and PMC denote the MDN-based and Monte Carlo-based option prices, re
spectively. The denominator is chosen to ensure stability of the metric for small values of
PMC.
Now, we turn to the details of our first experiment, where each asset in the basket follows a
Geometric Brownian motion with time-varying volatility.
4.1 Basket of Assets Following GBM with Time-varying Volatility
We consider a basket of two assets (N = 2), where each asset has equal weight (w1 = w2 = 0.5).
For the simulation of the training dataset, we set the initial asset price as S(0) = (S1(0), S2(0)) =
(1.0, 1.0). The time-varying parameters r(t), q(t) and σ(t) are simulated using the CIR model,
with the corresponding parameter values and initial ranges summarized in Table 1.
a b c x0
r(t) 0.6 0.05 0.05 [0.005, 0.1]
q(t) 0.6 0.03 0.02 [0.005,0.1]
σ(t) 0.75 0.1 0.2 [0.01,0.2]
Table 1: CIR model parameters

15
To construct the training dataset, we simulate n1 = 5000 samples of maturity T i; i =
1, · · · , n1. For each i, we generate further n2 = 4000 independent samples of GBM model
parameters θm,i for m = 1, · · · , n2. This yields a total of 20 million input samples xm,i =
(θm,i, T i); i = 1, · · · , n1; m = 1, · · · , n2. For each input xm,i, we simulate M = 30 independent
paths of the asset price process. The corresponding target values are
ym,i =
(
log
N
X
j=1
wj
S m,i,k
j (T i; θm,i)
Sj (0)
)M
k=1
.
Thus, each input data is associated with M likelihood samples for training the MDN.
4.1.1 Input Features
Since using the full path of time-varying parameters (e.g., r(t), q(t) or σ(t)), as inputs to the
MDN is impractical, we instead utilize truncated signatures of these paths. For all experiments,
the signatures are truncated at level lsig = 5.
This results in a total of 2N + (1 + 2N )lsig + 2 + N(N+1)
2 custom input features. The input
vector for the MDN takes the form:
x(θ, T ) = r(·)T, q(·)T, σ(·)T, L
√
T, T
= rmeanT, qmean
1 T, qmean
2 T, σmean
1
√
T , σmean
2
√
T , rsigT, qsig
1 T, qsig
2 T, σsig
1 T, σsig
2 T, L
√
T, T ,
where rmean and rsig denote the mean and signature terms derived from the path of r(t) over
[0, T ], and likewise for q(t) and σ(t). Since signature values at higher levels diminish rapidly in
magnitude, we normalize all signature components for each sample before using them as input
features.
4.1.2 MDN Architecture:
The MDN used here is univariate and composed of 6 hidden layers, with the following number of
neurons per layer: 320, 256, 256, 192, 128 and 80. The architecture uses the following activation
and transformation functions:
β0 = β1 = · · · = β5 = βμ = βδ = 0,
g(x) = LeakyReLU(x),
gπ(x) = softmax(x),
gμ(x) = tanh(x),
gδ(x) = softplus(x) ∗ tanh2(x) + ε0,
where ε0 is a small positive constant used to ensure numerical stability in the standard deviation
output.
4.1.3 Model Training
We employ a mixture density network with d = 10 Gaussian components. The model is trained
using the AdamW optimizer. In each epoch, the full training dataset of 20 million samples

16
is processed in mini-batches of size 100,000. After each epoch, performance is evaluated on a
validation set of 5 million samples. The initial learning rate is set to 0.01 and is adaptively
reduced when validation loss stagnates over multiple epochs.
4.1.4 Numerical Results
The time series of the risk-free interest rate, dividend yields, and volatilities, along with the
correlation matrix, serve as inputs to the MDN. Assume, Figure 3a presents the time series of
the risk-free interest rate, along with the dividend yields and volatilities for the two assets in the
basket, simulated over a one-year horizon (252 trading days). The correlation structure among
these assets is specified by the correlation matrix
R = 1 −0.7131
−0.7131 1
!
.
Then, Figure 3b compares the resulting estimated distributions of the average return of the
basket obtained using the mixture density network (MDN) and those obtained from Monte Carlo
(MC) simulation, across different maturities. The label “D KL” beside each maturity denotes
the Kullback–Leibler (KL) divergence between the MDN and MC distributions, providing a
quantitative measure of how closely the MDN replicates the actual return distribution.
Under the same market conditions, we report the relative percentage errors between option
prices computed from the MDN-based distribution and those from the MC-based distribution in
Figure 4. These results are shown separately for European call and put options at various strikes
and maturities, offering insights into the pricing accuracy achieved by the MDN approximation.
(a) (b)
Figure 3: (a) Time-varying interest rate, dividend yields, and volatilities. (b) MDN vs. MC
distributions of average basket return with KL divergence at different maturities.

17
Figure 4: Relative percentage error in European call and put option prices based on MDN vs.
MC pricing.
In a second scenario, the correlation matrix is changed to
R = 1 0.219
0.219 1
!
,
while the time series of the risk-free rate, dividend yields, and volatilities are given in Figure 5a.
Figure 5b compares the corresponding MDN and MC return distributions, with the associ
ated KL divergences. The resulting relative percentage pricing errors for European options are
reported in Figure 6.
These numerical results demonstrate that the MDN can effectively learn the conditional dis
tribution over the parameter space with high accuracy, enabling accurate option pricing across
a range of market conditions. This highlights the practical value of the approach: once trained,
the MDN can efficiently approximate option prices across varying scenarios. Moreover, the use
of truncated path signatures proves effective in capturing the dependence of the target distribu
tion on time-varying model parameters.
Now, we lay out the details of our second experiment, in which each asset in the basket follows
a Geometric Brownian Motion with local volatility.
4.2 Basket of Assets Following GBM with Local-Volatility
We consider a basket consisting of two assets (N = 2) with the initial prices set to S(0) =
(S1(0), S2(0)) = (1.0, 1.0) for the simulation of the training dataset. The time-varying param
eters r(t) and q(t) are simulated using the CIR model as described previously, with parameter
values and initial ranges summarized in Table 1.
To construct the training dataset, we simulate n1 = 5000 samples of maturity T i; i =
1, · · · , n1. For each maturity T i, we generate further n2 = 4000 independent samples of:
• GBM model parameters θm,i,
• local-volatility function parameters νm,i and

18
(a) (b)
Figure 5: (a) Time-varying interest rate, dividend yields, and volatilities. (b) MDN vs. MC
distributions of average basket return with KL divergence at different maturities.
Figure 6: Relative percentage error in European call and put option prices based on MDN vs.
MC pricing.

19
• basket weights wm,i,
for m = 1, · · · , n2. This yields a total of 20 million input samples of the form
xm,i = (θm,i, νm,i, T i, wm,i); i = 1, · · · , n1; m = 1, · · · , n2.
For each input xm,i, we simulate M = 30 independent paths of the asset price process, generating
the associated target outputs:
ym,i =
(
ym,i,k = log
N
X
j=1
wm,i
j
S m,i,k
j T i; θm,i, νm,i
Sj (0)
)M
k=1
.
Thus, each input vector xm,i is paired with M likelihood samples for training the mixture density
network.
4.2.1 Local-volatility Function σL(·)
We adopt the following functional form for the local volatility:
σL(x) = cloc (x − aloc)2 + cloc
bloc , (4.1)
where the parameters aloc, bloc, cloc vary within the ranges:
aloc ∈ [0.5, 1.5],
bloc ∈ [0.05, 0.5],
cloc ∈ [0.05, 0.4].
We denote the set of local volatility parameters for all assets as ν = aloc,j, bloc,j, cloc,j
N
j=1. It is important to note that this choice of functional form is not driven by modelling assumptions
or calibration to market data. Instead, we aim to assess whether a mixture density network
(MDN) can learn the distributional features of the average basket return from local volatility
parameters.
4.2.2 Input Features
The input to the mixture density network (MDN) consists of custom-engineered features de
rived from the model parameters, including truncated path signatures of the time-varying
rates. Specifically, we truncate signatures at level lsig = 5. This will result in a total of
5N + (1 + N )lsig + 2 + N(N+1)
2 input features. The final input vector for the MDN takes
the form:
x(θ, ν, T, w) = wT, r(·)T, q(·)T, alocT, blocT, clocT, L
√
T, T
= w1T, w2T, rmeanT, qmean
1 T, qmean
2 T, rsigT, qsig
1 T, qsig
2 T, aloc,1T, aT
loc,2, bloc,1T , bloc,2T ,
cloc,1T, cloc,2T, L
√
T, T ,
where rmean and rsig denote the mean and signature terms derived from the path of r(t) over
t ∈ [0, T ], and likewise for q(t).

20
4.2.3 MDN Architecture
The univariate MDN employed in this setting consists of 6 hidden layers, with the following
number of neurons per layer: 320, 256, 256, 192, 128 and 80, respectively. The activation and
transformation functions used in the architecture are specified as follows:
β0 = β1 = · · · = β5 = βμ = βδ = 0,
g(x) = LeakyReLU(x),
gπ(x) = softmax(x),
gμ(x) = x,
gδ(x) = softplus(x) ∗ tanh2(x) + ε0,
where ε0 is a small positive constant used to ensure numerical stability in the standard deviation
output.
This configuration is almost the same as in our previous case, the only exception is that the
activation function gμ doesn’t use the tanh function, instead we use the identity function. This
reflects the flexibility in architectural design—if carefully designed, other architectural choices
may also work well.
4.2.4 Model Training
The training procedure of the MDN follows the same method as in the previous case. Specifically,
we employ a mixture density network with d = 10 Gaussian components and train the model
using the AdamW optimizer. In each epoch, the whole training dataset of 20 million samples
is processed in mini-batches of size 100,000. After each epoch, performance is evaluated on a
validation set of 5 million samples.
The initial learning rate is set to 0.01 and is adaptively reduced when validation loss stagnates
over multiple epochs. While the overall training strategy mirrors the previous case, it is worth
emphasizing that tuning the learning rate upon stagnation in the validation loss involves some
empirical adjustment. In practice, identifying when and how much to adjust the learning rate
remains partly heuristic and can significantly impact training efficiency and convergence.
4.2.5 Numerical Results
The inputs to the MDN consist of the correlation matrix of the asset basket, the local-volatility
function parameters for each asset, time series of the risk-free interest rate and dividend yields,
and the basket weights. We assume the correlation matrix
R = 1 0.4868
0.4868 1
!
,
and the local-volatility function parameters for the two assets as follows
aloc = [1.155, 0.95], bloc = [0.263, 0.387], cloc = [0.077, 0.145].
Figure 7a shows the time series of the risk-free interest rate and the dividend yields for the
two assets in the basket. Using this market condition, we analyze three different combinations

21
(a)
(b) w1 = 0.25, w2 = 0.75 (c) w1 = 0.5, w2 = 0.5 (d) w1 = 0.75, w2 = 0.25
Figure 7: (a) Time-varying interest rates and dividend yields. (b),(c)&(d) MDN vs. MC
distributions of weighted basket returns with KL divergence at different maturities for different
weight configurations.
Figure 8: Relative percentage error in European call and put option prices based on MDN vs.
MC pricing.

22
of the basket weights. The resulting distributions of the basket’s weighted returns, estimated
by the mixture density network (MDN), are compared with those obtained via Monte Carlo
(MC) simulation in Figures 7b, 7c and 7d, each corresponding to different weight vectors. These
comparisons are carried out across multiple maturities. For each case, the Kullback–Leibler
(KL) divergence between the MDN and MC distributions is reported alongside the corresponding
maturity, denoted by ”D KL”.
Under the same market conditions, and using the basket weight from Figure 7c, we present
the relative percentage errors between the European option prices computed from the MDN
based distribution and MC-based distribution in Figure 8.
(a)
(b) w1 = 0.25, w2 = 0.75 (c) w1 = 0.5, w2 = 0.5 (d) w1 = 0.75, w2 = 0.25
Figure 9: (a) Time-varying interest rates and dividend yields. (b),(c)&(d) MDN vs. MC
distributions of weighted basket returns with KL divergence at different maturities for different
weight configurations.
In a second scenario, we modify the correlation matrix to
R = 1 −0.4849
−0.4849 1
!
,
and update the local-volatility function parameters for the two assets to
aloc = [0.6775, 0.7475], bloc = [0.3023, 0.1543], cloc = [0.3951, 0.1214].
The risk-free interest rate and dividend yields for two assets are now given in Figure 9a.
For three different sets of basket weights, Figures 9b, 9c, and 9d present a comparison between

23
Figure 10: Relative percentage error in European call and put option prices based on MDN vs.
MC pricing.
Figure 11: Relative percentage error in European call and put option prices based on MDN vs.
MC pricing.

24
the MDN-estimated and Monte Carlo-simulated distributions of the weighted basket return
across various maturities. The associated Kullback–Leibler (KL) divergence between the two
distributions is also reported for each case.
The resulting relative percentage errors in European option prices, corresponding to the
basket weights used in Figure 9b and 9c, are reported in Figure 10 and 11 respectively.
These numerical results demonstrate that the MDN can successfully learn the conditional
distribution based on the parameters of the local volatility function. Notably, the MDN is also
parametrized by the basket weights, providing additional flexibility: if the basket composition
changes, the trained model remains applicable for pricing options on the new weighted return,
eliminating the need to retrain a separate model.
Reproducibility and Runtime: All experiments were conducted on an Apple M1 Pro
processor with 16 GB of RAM. Training on 20 million samples (batch size = 100,000) required
approximately 6.5 minutes per epoch. The average inference latency per market configuration
was about 3.4 milliseconds, demonstrating the model’s suitability for real-time or large-scale
pricing applications.
5 Conclusion
In this work, we proposed a deep learning-based framework for pricing European basket options
under geometric Brownian motion (GBM) dynamics with time-varying market parameters. Our
approach leverages a mixture density network (MDN) to approximate the conditional distribu
tion of the weighted return of a basket of assets, taking as input the time series of risk-free
interest rates, dividend yields, volatilities, and correlation structures.
We evaluated the method under two GBM settings—one with time-varying volatility and
another with local volatility. In both cases, the MDN accurately recovered the conditional dis
tribution across a broad range of input scenarios. Option prices computed using the learned
distributions closely matched benchmark Monte Carlo (MC) estimates, with relative pricing er
rors typically within a few percentage points. These results demonstrate the MDN’s effectiveness
as a surrogate distribution model for pricing.
A key component of our architecture is the use of truncated path signatures to represent
the temporal evolution of model parameters. This feature representation enabled the MDN
to generalize across diverse time-varying environments. Additionally, by incorporating basket
weights as part of the input, the model can adapt to different portfolio compositions without
retraining, offering practical flexibility.
Overall, the results suggest that MDNs, when paired with appropriate feature engineering
and training design, provide an efficient and accurate alternative to traditional simulation-based
pricing methods. Once trained, the MDN enables rapid inference, making it particularly suitable
for real-time or high-frequency pricing applications.
Future research could extend this approach to modelling multivariate output distributions,
more complex derivative products, or alternative market dynamics, including stochastic volatil
ity, rough volatility, and jump processes. Additionally, the framework could be adapted with
minimal changes to learn univariate distributions of other functionals of the asset paths, such
as the maximum or minimum of a basket.

25
References
[Bis94] Christopher M Bishop. Mixture density networks. Technical report, Aston Uni
versity, 1994.
[Che57] Kuo-Tsai Chen. Integration of paths, geometric invariants and a generalized baker
housdorff formula. Annals of Mathematics, pages 163–178, 1957.
[Che77] Kuo-Tsai Chen. Iterated path integrals. Bulletin of the American Mathematical
Society, 83(5):831–879, 1977.
[DBMP19] Conor Durkan, Artur Bekasov, Iain Murray, and George Papamakarios. Neural
spline flows. In NeurIPS, 2019.
[FLZ23] Qi Feng, Man Luo, and Zhaoyu Zhang. Deep signature fbsde algorithm. Numerical
Algebra, Control and Optimization, 13(3,4):500–522, 2023.
[FV10] Peter K. Friz and Nicolas B. Victoir. Multidimensional Stochastic Processes as
Rough Paths: Theory and Applications, volume 120. Cambridge University Press,
2010.
[GBC16] Ian Goodfellow, Yoshua Bengio, and Aaron Courville. Deep Learning. MIT Press,
2016.
[GLKF14] Lajos Gergely Gyurk/’o, Terry Lyons, Mark Kontkowski, and Jonathan Field. Ex
tracting information from the signature of a financial data stream. arXiv preprint
arXiv:1307.7244, 2014.
[HGR22] Xiang Han, Matthew Goldstein, and Rajesh Ranganath. Survival mixture density
networks. In Machine Learning for Healthcare Conference, pages 224–248, 2022.
[HJA20] Jonathan Ho, Ajay Jain, and Pieter Abbeel. Denoising diffusion probabilistic
models. In NeurIPS, 2020.
[HZR+22] Tim Hepp, Joerg Zierk, Manfred Rauh, Markus Metzler, and Stephan Seitz. Mix
ture density networks for the indirect estimation of reference intervals. BMC Bioin
formatics, 23(1):307, 2022.
[JWL+05] Yuan Ji, Chao Wu, Ping Liu, Jing Wang, and Kevin R Coombes. Applications of
beta-mixture models in bioinformatics. Bioinformatics, 21(9):2118–2122, 2005.
[KW14] Diederik P. Kingma and Max Welling. Auto-encoding variational bayes. In ICLR,
2014.
[LNO14] Terry Lyons, Hao Ni, and Harald Oberhauser. A feature set for streams and an
application to high-frequency financial tick data. In 2014 International Conference
on Big Data Science and Computing, number 5, pages 1–8, 2014.
[LNTWH24] Xiaoqing Li, Hadrien Normandin-Taillon, Cheng Wang, and Xiaowei Huang. Xr
mdn: An extended recurrent mixture density network for short-term probabilistic
rider demand forecasting considering high volatility. IEEE Transactions on Intel
ligent Vehicles, 2024.

26
[MMK+24] Kafi Fahreza Muzakka, Stephan Mo ̈ller, Stefan Kesselheim, Jens Ebert, Anna
Bazarova, Holger Hoffmann, and Matthias Finsterbusch. Analysis of rutherford
backscattering spectra with cnn-gru mixture density network. Scientific Reports,
14(1):16983, 2024.
[NTGW23] Hadrien Normandin-Taillon, Fr ́ed ́eric Godin, and Cheng Wang. Linear pretraining
in recurrent mixture density networks. arXiv preprint arXiv:2302.14141, 2023.
[PNR+21] George Papamakarios, Eric Nalisnick, Danilo Rezende, Shakir Mohamed, and Bal
aji Lakshminarayanan. Normalizing flows for probabilistic modeling and inference.
Journal of Machine Learning Research, 22(57):1–64, 2021.
[PPM17] George Papamakarios, Theo Pavlakou, and Iain Murray. Masked autoregressive
flow for density estimation. In NeurIPS, 2017.
[RHB24] Seyed Farid Razavi, Rasoul Hosseini, and Taha Behzad. Frmdn: Flow-based re
current mixture density network. Expert Systems with Applications, 237:121360,
2024.
[RMW14] Danilo Jimenez Rezende, Shakir Mohamed, and Daan Wierstra. Stochastic back
propagation and approximate inference in deep generative models. In ICML, 2014.
[SD01] Christian Schittenkopf and Georg Dorffner. Risk-neutral density extraction from
option prices: improved pricing with mixture density networks. IEEE Transactions
on Neural Networks, 12(4):716–725, 2001.
[SDD98] Christian Schittenkopf, Georg Dorffner, and Engelbert J. Dockner. Volatility pre
diction with mixture density networks. In ICANN 98: Proceedings of the 8th
International Conference on Artificial Neural Networks, pages 929–934. Springer
London, 1998.
[SSDK+21] Yang Song, Jascha Sohl-Dickstein, Diederik P. Kingma, Abhishek Kumar, Ste
fano Ermon, and Ben Poole. Score-based generative modeling through stochastic
differential equations. In ICLR, 2021.
[WCMX22] Guojun J. Wang, Chia Cheng, Yu-Zhou Ma, and Jian-Qiang Xia. Likelihood-free
inference with the mixture density network. The Astrophysical Journal Supplement
Series, 262(1):24, 2022.
[WMZ+22] Yuwei Wu, Shuai Ma, Di Zhang, Wei Huang, and Yiqiang Chen. An improved mix
ture density network for 3d human pose estimation with ordinal ranking. Sensors,
22(13):4987, 2022.
[YJP+21] Zhengchun Yang, Devesh Jha, Abhishek Paul, Wen-Kai Liao, Alok Choudhary, and
Ankit Agrawal. A general framework combining generative adversarial networks
and mixture density networks for inverse modeling in microstructural materials
design. arXiv preprint arXiv:2101.10553, 2021.
[ZLY+20] Hongze Zhang, Yuming Liu, Jing Yan, Shuo Han, Lin Li, and Qing Long. Improved
deep mixture density network for regional wind power probabilistic forecasting.
IEEE Transactions on Power Systems, 35(4):2549–2560, 2020.

27
[ZS14] Heiga Zen and Andrew Senior. Deep mixture density networks for acoustic mod
eling in statistical parametric speech synthesis. In 2014 IEEE International Con
ference on Acoustics, Speech and Signal Processing (ICASSP), pages 3844–3848.
IEEE, May 2014.

---

## Processing Information

- **Processing Library:** Zotero PDFWorker
- **Processing Date:** 2026-02-10T18:14:48.123Z
- **Text Length:** 53575 characters
- **Success:** Text extraction completed
- **PDF Library Used:** Zotero PDFWorker
- **Pages Processed:** 27 of 27
