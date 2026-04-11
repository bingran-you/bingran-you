# PDF Document: Baradel - 2025 - Constrained deep learning for pricing and hedging european options in incomplete markets.pdf

**File Path:** Baradel - 2025 - Constrained deep learning for pricing and hedging european options in incomplete markets.pdf

**Processed Date:** 2026-02-10T18:16:52.709Z

**File Size:** 1334.05 KB

**Total Pages:** 34

**Extracted Pages:** 34

**PDF Library:** Zotero PDFWorker

**Attachment Item ID:** 3553

**Title:** Constrained deep learning for pricing and hedging european options in incomplete markets

**Collection:** Large Files > Random Papers

---

## Extracted Text Content

Constrained deep learning for pricing and hedging
european options in incomplete markets
Nicolas Baradel∗
November 27, 2025
Abstract
In incomplete financial markets, pricing and hedging European options lack a unique no-arbitrage solution due to unhedgeable risks. This paper introduces a constrained deep learning approach to determine option prices and hedging strategies that minimize the Profit and Loss (P&L) distribution around zero. We employ a single neural network to represent the option price function, with its gradient serving as the hedging strategy, optimized via a loss function enforcing the self-financing portfolio c-
ondition. A key challenge arises from the non-smooth nature of option payoffs (e.g., vanilla calls are non-differentiable atthe-money, while digital options are discontinuous), which conflicts with the inherent smoothness of standard neural networks. To address this, we compare unconstrained networks against constrained architectures that explicitly embed the terminal payoff condition, drawing inspiration from PDE-solving techniques. Our framework assumes two tradable assets: the underlying and a -
liquid call option capturing volatility dynamics. Numerical experiments evaluate the method on simple options with varying non-smoothness, the exotic Equinox option, and scenarios with market jumps for robustness. Results demonstrate superior P&L distributions, highlighting the efficacy of constrained networks in handling realistic payoffs. This work advances machine learning applications in quantitative finance by integrating boundary constraints, offering a practical tool for pricing and hedging-
 in incomplete markets.
1 Introduction
In incomplete financial markets, no unique no-arbitrage price exists for derivative securities. This paper proposes a constrained deep-learning framework that simultaneously prices and hedges European options in such environments by determining an initial premium and a dynamic hedging strategy that minimize the dispersion of the terminal profit-and-loss (P&L) distribution.
We consider a general incomplete market driven by Brownian motion. The hedging portfolio is required to be self-financing, starts from the initial premium, and aims to
∗Inria, CMAP, CNRS, École polytechnique, Institut Polytechnique de Paris, 91200 Palaiseau, nicolas.baradel@polytechnique.edu.
1
arXiv:2511.20837v1 [q-fin.CP] 25 Nov 2025

replicate the option payoff at maturity as closely as possible. While neural-network approaches to pricing and hedging are not new, see e.g. [8], revisited in [5]. Recent contributions have explored reinforcement learning [7], transaction costs [4], jumps [1], and other market frictions [6].
Our approach departs from these works in two key respects. First, a single neural network outputs both the option price (as its value) and the hedging strategy (as its gradient with respect to the tradable assets), extending the classical complete-market representation in which the delta is the derivative of the price. Second, we explicitly address incomplete markets, whereas many recent deep-learning methods either assume completeness or compute only the price (e.g. BSDE-based solvers in jump-dif-
fusion settings [2]).
A well-known practical difficulty when using neural networks for option pricing is enforcing the terminal payoff condition. Vanilla call payoffs are non-differentiable and digital payoffs are discontinuous; standard smooth activations struggle to represent them accurately at maturity without introducing spurious non-smoothness earlier. Even smooth payoffs pose challenges for boundary enforcement in PDE solvers [3, 10]. We therefore adopt and extend constrained architectures that embed the terminal-
 condition by construction.
Numerical experiments are conducted in a market with two tradable assets (the underlying stock and a liquid vanilla call option written on it). We compare unconstrained networks against several constrained formulations on payoffs of increasing nonsmoothness, including an exotic Equinox option. Performance is benchmarked against the classical Black–Scholes delta hedge by comparing terminal P&L distributions.
The paper is organized as follows. Section 2 presents the financial setting, the neural-network architecture, the gradient-based hedging strategy, and different strategies for embedding the terminal payoff. Section 3 contains numerical results: we first introduce a stochastic-volatility model with stochastic correlation (making the market incomplete), then compare loss functions and constraint methods on simple and exotic options, and finally assess robustness to jumps and misspecification of the -
model.
2 The framework
This section introduces the mathematical setting, the self-financing condition for the hedging portfolio, the neural network architecture used to simultaneously produce the option price and hedging strategy, and the techniques employed to enforce (possibly non-smooth) terminal payoff conditions.
2.1 General framework
Let Ω := C([0, T ], Rd◦) represent the space of continuous functions from [0, T ] to Rd◦, where T > 0 and functions start at value 0 at time 0. We define the canonical process by W (ω) = ω, and let P denote the Wiener measure on the Borel sets of Ω. Consequently, W = (W i)1≤i≤d◦ consists of d◦ independent Brownian motions. The filtration (Ft)0≤t≤T is the (augmented) canonical filtration generated by W .
We consider d < d◦ tradable risky assets whose price process Z = (Zi)1≤i≤d is an Rd-valued, F -adapted semimartingale. The market also contains a risk-free asset with
2

constant interest rate r ∈ R.
Our goal is to hedge as well as possible a European claim pays g(ZT ) at maturity T , where g : Rd → R is a (possibly non-smooth) measurable payoff function.
Definition 2.1 (Self-financing portfolio). A portfolio is specified by its initial value V0 ∈ R and an Rd-valued predictable process ∆Z = (∆Z,i)1≤i≤d representing the number of shares held in each risky asset. The portfolio value process (Vt)0≤t≤T is self-financing if, for all 0 ≤ t ≤ s ≤ T ,
Vs = Vt +
Zs
t
r Vu − ⟨∆Z
u · Zu⟩ du +
Zs
t
⟨∆Z
u · dZu⟩, (2.1)
In discrete rebalancing (constant holdings on [t, s]), this simplifies to
Vs = er(s−t) Vt − ⟨∆Z
t · Zt⟩ + ⟨∆Z
t · Zs⟩. (2.2)
In a complete market with no frictions, there exists a unique no-arbitrage price process p(t, Zt) and a hedging strategy ∆Z
t = ∇zp(t, Zt) such that the self-financing portfolio perfectly replicates the payoff:
p(t, Zt)+
ZT
t
r (p(u, Zu) − ⟨∇zp(u, Zu) · Zu⟩) du+
ZT
t
⟨∇zp(u, Zu)·dZu⟩ = g(ZT ). (2.3)
In an incomplete market, no such perfect replication is possible in general. The price is not unique and perfect hedging cannot be achieved. Our goal is therefore to approximate a pricing function p(t, z) whose spatial gradient ∇zp(t, z) serves as a hedging strategy, chosen so that the self-financing portfolio yields a terminal value as close as possible to g(ZT ) in a suitable sense. The next subsections introduce a deep neural network to achieve this objective while properly enforcing the (possi-
bly non-smooth) terminal condition p(T, z) = g(z).
2.2 Neural network
We represent the candidate pricing function using a fully connected (feedforward) deep neural network. We define the input dimension as din ≥ 1, representing the number of variables in the input x ∈ Rdin. For simplicity, we set the output dimension to 1, meaning the network produces a single output value. The network consists of L ≥ 2 layers, with the number of neurons in each layer denoted by (Dl)1≤l≤L. Specifically:
• The first layer (input layer) has D1 = din neurons.
• The last layer (output layer) has DL = 1 neuron.
• The L − 2 layers in between are hidden layers, each with Dl = D neurons for simplicity, where 2 ≤ l ≤ L − 1.
A feedforward neural network N is a function that maps an input x ∈ Rdin to an output in R. It is defined as a composition of transformations:
x 7→ AL ◦ φ ◦ AL−1 ◦ . . . ◦ φ ◦ A1(x). (2.4)
where:
3

• Al for 1 ≤ l ≤ L are affine transformations, defined as Al(x) = Wlx + βl. Here, Wl is a weight matrix, and βl is a bias vector.
• The dimensions of these transformations are: A1 maps from Rdin to RD; A2, . . . , AL−1 map from RD to RD; and AL maps from RD to R.
• φ : R 7→ I ⊂ R is a nonlinear activation function (where I is either R or a subinterval), applied element-wise to the output of each affine transformation. For example, for a vector (x1, . . . , xD) we have φ(x1, . . . , xD) = (φ(x1), . . . , φ(xD)).
The parameters of the neural network are the weight matrices (Wl)1≤l≤L and bias vectors (βl)1≤l≤L collectively denoted as θ. The total number of parameters, mL,D , is calculated as
mL,D =
L
X
l=1
Dl(1 + Dl) = (1 + din)D + (L − 2)D(1 + D) + (1 + D)
accounting for the weights and biases across all layers, thus θ ∈ RmL,D . We denote the neural network of (2.4) with parameter θ as Nθ, and the set of all such networks with L layers and D neurons per hidden layer as (Nθ)θ∈RmL,D .
We also define the set of all neural networks with L layers and varying hidden layer sizes:
NL :=
[
D≥0
(Nθ)θ∈RmL,D .
Universal approximation theorem ([12, Theorem 3.1]). Let φ be a continuous activation function. If φ is non-polynomial, then for any L ≥ 3, on any compact set K ⊂ Rdin, the set NL is dense in C(K), the set of continuous functions defined on K equipped the uniform norm.
The smoothness of Nθ is inherited from φ: if φ ∈ C∞(R), then Nθ ∈ C∞(Rdin). Standard smooth activations (tanh, sigmoid, softplus, etc.) therefore yield infinitely differentiable pricing functions: desirable away from maturity but problematic at t = T , where many option payoffs are only continuous (vanilla call/put) or even discontinuous (digital, barrier, and many exotic options).
Using non-smooth activations such as ReLU resolves the terminal issue to some extent, but introduces non-differentiability everywhere, including far before maturity, where the true price function is typically smooth.
These conflicting requirements (smoothness before maturity and possible non-smoothness exactly at maturity) motivate the constrained architectures introduced in the next subsection.
2.3 Deep learning
We consider a European claim with (possibly parameterised) payoff g(ZT , P ), where P ∈ Rk1 collects contractual parameters (strike, barrier, etc.). To increase expressive power and allow the network to reference liquid hedging instruments with their own parameters, we introduce an auxiliary input vector K ∈ Rk2.
4

The candidate price at time t is represented by a neural network:
(t, z, K, P ) 7→ Nθ(T − t, z, K, P ), (2.5)
where T − t is time-to-maturity, z ∈ Rd are the current levels of the tradable risky assets, and θ denotes the trainable parameters.
As in the complete-market case, the hedging strategy in the risky assets is obtained directly from the network via automatic differentiation:
• Nθ represents the option price,
• ∇zNθ provides the hedging strategy.
In a complete, frictionless market, there exists θ∗ such that the self-financing portfolio initialised at V0 = Nθ∗(T, Z0, K, P ) and rebalanced according to (2.3) perfectly replicates the payoff:
Nθ∗(0, ZT , K, P ) = g(ZT , P ) P-a.s. (2.6)
In an incomplete market with discrete hedging, Nθ satisfies the following approximation for ∆t > 0:
Nθ(T − (t + ∆t), Zt+∆t, K, P ) ≈ er∆t Nθ(T − t, Zt, K, P ) − ⟨∆Z
t · Zt⟩
+ ⟨∆Z
t · Zt+∆t⟩,
Nθ(0, ZT , K, P ) ≈ g(ZT , P ).
(2.7)
We therefore train the network by minimizing the expected deviation from the discretetime self-financing condition. In (2.7) forces the network to discover a price Nθ and corresponding hedge ∇zNθ, enabling the neural network to simultaneously learn the option price and hedging strategy by leveraging their interdependence.
2.4 Training objective and loss functions
We generate n independent Monte Carlo paths of the tradable assets Z on a time grid 0 = t0 < t1 < · · · < tm = T , together with fixed or randomly drawn contract parameters P i and auxiliary hedging-instrument parameters Ki. This yields the simulated dataset:
tj, Zi
tj , Ki, P i 1≤i≤n
0≤j≤m
. (2.8)
The network is trained by minimizing a composite loss that simultaneously enforces the discrete-time self-financing condition along each path and the terminal payoff condition. The latter loss is:
lT (θ) =
n
X
i=1
Nθ(0, Zi
T , Ki, P i) − g(Zi
T , P i) 2 .
To measure hedging performance, we introduce the following two loss functions.
5

Definition 2.2 (Self-financing approach). Based on (2.7), we define the associated loss over n paths:
lSF
path(θ) :=
n
X
i=1
m−1
X
j=0
Nθ(T − tj, Zi
tj , Ki, P i) − ⟨∆Z
tj · Zi
tj ⟩ er(tj+1−tj )
+⟨∆Z
tj · Zi
tj+1 ⟩ − Nθ(T − tj+1, Zi
tj+1 , Ki, P i)
2
.
where ∆Z
tj := ∇zNθ(T − tj, Zi
tj , Ki, P i).
Definition 2.3 (Profit and Loss approach). Based on (2.3), we define the associated loss over n paths:
lP L
path(θ) :=
n
X
i=1
m−1
X
j=0
Nθ(T, Zi
0, Ki, P i)erT − ⟨∆Z
tj · Zi
tj ⟩er(T −tj )
+⟨∆Z
tj · Zi
tj+1 ⟩er(T −tj+1) − g(Z i
T , P i)
2
.
where ∆Z
tj := ∇zNθ(T − tj, Zi
tj , Ki, P i).
The full training objective is:
l(θ) := lD
path(θ) + λT lT (θ), (2.9)
where λT > 0 is a hyperparameter controlling the strength of terminal payoff enforcement and D ∈ {SF, P L} according to the context.
Parameters θ are estimated by stochastic gradient descent on mini-batches of paths and time steps. At iteration k, a random subset Λ(k) ⊂ {1, . . . , n} × {0, . . . , m − 1} of size Card(Λ(k)) ≪ n × m is sampled uniformly, and gradients are computed via automatic differentiation and backpropagation through time.
2.5 Constrained architectures for non-smooth payoffs
The function g for the terminal condition is not always smooth, i.e. not always differentiable or even not continuous. For the simple vanilla call option, the payoff is continuous but not differentiable in the strike price. For the digital option, it is not even continuous. In general, the price is smooth before the maturity but not at the maturity. Standard feedforward networks with smooth activations produce infinitely differentiable functions everywhere in their domain. This poses a fundamental-
 difficulty when pricing derivatives whose payoff is not differentiable or even discontinuous. The true price is typically smooth on time-to-maturity T − t ∈ (0, T ] but inherits the payoff’s irregularity at T − t = 0.
Using non-smooth activations such as ReLU removes global differentiability and therefore destroys the desirable pre-maturity smoothness that diffusion-driven prices exhibit.
6

For a payoff g, we fix a reference function
f (t, z, P ), (t, z, P ) ∈ [0, T ] × Rd × Rk1,
that is continuously differentiable on (0, T ] × Rd × Rk1 the terminal condition:
f (0, z, P ) = g(z, P ), (z, P ) ∈ Rd × Rk1.
Typical choices for f are closed-form prices from tractable complete-market proxies as Black-Scholes or more sophisticated models. The candidate price is then represented as the convex combination
N θ(T − s, z, K, P ) := w(s, T )f (T − s, z, P ) + w′(s, T )Nθ(T − s, z, K, P ), (2.10)
where w and w′ user-chosen smooth weighting functions. The hedging strategy is obtained by automatic differentiation of N θ:
∆Z
t = ∇zN θ(T − t, z, K, P ).
We investigate the four architectures summarized below:
Definition 2.4. We introduce four specific cases of (2.10).
• Unconstrained: w := 0 and w′ := 1 corresponds to the plain neural network; no terminal condition enforced by construction.
• Zero-target: w(s, T ) := s
T and w′ := 1 corresponds to the case where the network Nθ is only required to output zero at T − t = 0, considerably easing the fitting of non-smooth payoffs while leaving pre-maturity behavior nearly unconstrained.
• Control-variate: w := 1 and w′ := 1 corresponds to the classical control-variate Monte Carlo: f persistently contributes and Nθ learns the residual correction.
• Constrained: w(s, T ) := s
T and w′ := 1 − w corresponds to the case where the
terminal condition N θ(0, z, K, P ) = g(z, P ) is satisfied exactly for any parameters θ, eliminating terminal payoff error entirely.
We analyze all cases outlined in Definition 2.4. The Unconstrained approach imposes no constraints, representing a standard neural network. The Zero Target method mitigates the non-smoothness of the terminal condition without significantly affecting the solution away from maturity. The Control Variate approach is similar to Zero Target but assigns a constant weight of 1 to the function f , which serves as a control-variate. Finally, the Constrained approach enforces a strict condition at maturity,-
 ensuring the payoff is always satisfied for any neural network.
3 Numerical results
We now assess the practical performance of the proposed framework in an incomplete market featuring stochastic volatility and stochastic correlation between the underlying and its volatility process. The market is driven by d◦ = 3 independent Brownian motions but only d = 2 assets are tradable: the underlying stock and one liquid vanilla option used as a hedging instrument, making perfect replication impossible, even in continuous-time.
7

We first demonstrate that the P&L loss (Definition 2.3) systematically dominates the self-financing loss (Definition 2.2) in terms of out-of-sample P&L distribution sharpness. We then systematically compare the four architectures of Definition 2.4 (Unconstrained, Zero-target, Control-variate, and Constrained) on a range of simple payoffs of different irregularity, and an exotic one: the Equinox option.
3.1 The market model
We define a market model through the following triplet of stochastic processes.
Definition 3.1. Let μ ∈ R, a > 0, σ◦ > 0, ξ > 0, γ ∈ [0.5, 1], b > 0, p◦ ∈ R, χ > 0. For initial conditions (x, σ, p) ∈ (R+)2 × R at time t ∈ [0, T ], and for s ∈ [t, T ], the processes are given by:
X t,x
s =x+
Zs
t
μX t,x
u du +
Zs
t
Σt,σ
u X t,x
u dW 1
u,
Σt,σ
s =σ+
Zs
t
−a(Σt,σ
u − σ◦)du +
Zs
t
ξ(Σt,σ
u )γd(ρt,p
u W1
u+
q
1 − (ρtu,p)2W 2
u ),
P t,p
s =p+
Zs
t
−b(P t,p
u − p◦)du +
Zs
t
χdW 3
u,
(3.1)
where the correlation process is defined as ρt,p := tanh(P t,p).
In this model, Xt,x represents the underlying price with stochastic volatility Σt,σ, which reverts to a long-term mean σ◦ at rate a. The volatility Σt,σ is correlated with Xt,x via a stochastic correlation ρt,p, driven by the process P t,p, which itself exhibits
mean reversion to p◦. The term ρt,p
u W1
u+
q
1 − (ρtu,p)2W 2
u ensures a unit-variance Brownian motion with correlation ρt,p to W 1.
Remark 3.2. The process (Xt,x, Σt,σ, P t,p) in Definition 3.1 admits a unique strong solution under the specified conditions.
For simplicity, we henceforth denote (X, Σ, P ) as (Xt,x, Σt,σ, P t,p).
3.1.1 The tradable assets
Of the processes introduced in Definition 3.1, not all are tradable assets. We now define those that are.
Definition 3.3 (Tradable assets). The market includes two tradable assets:
• The underlying X.
• A European call option C(K) with strike K > 0.
The price of the call option C(K) at time s ∈ [t, T ] is modeled as the Black-Scholes price with instantaneous volatility Σs:
Cs(K) := BS(T − s, Xs, Σs, r, K),
where BS(u, x, σ, r, K) denotes the Black-Scholes price of a European call option with time to maturity u ∈ [0, T ], underlying price x > 0, volatility σ > 0, interest rate r ∈ R, and strike K > 0.
8

This framework establishes an incomplete market, as there are two tradable assets but three independent sources of randomness (the Brownian motions W 1, W 2, W 3). Consequently, perfect hedging of a derivative is unattainable, though our goal is to minimize the hedging error.
3.1.2 The neural network
Recall that we seek to determine the price and hedging strategy for a European option with payoff g(XT , P ) where P ∈ Rk1 for k1 ≥ 1 represents the option’s parameters (e.g., strike price or barrier level). The neural network of (2.5) is in our context:
(t, x, c, K, P ) 7→ Nθ(T − t, x, c, K, P ),
where θ denotes the trainable parameters, T − t is the time to maturity, x is the price of the underlying asset Xt, c is the price of the tradable call option Ct, and K > 0 is the strike price of the tradable call option C(K).
Finally,
• Nθ represents the option price,
• ∂xNθ and ∂cNθ provide the hedging strategies for the underlying asset and the tradable call option, respectively.
3.1.3 Evaluation criterion
To assess the performance of the trained neural network in pricing and hedging, we evaluate its out-of-sample hedging error on paths simulated from the true data-generating process (3.1). Consider an option with time to maturity T , initial underlying price X0 = x, initial call price C0 = c, strike K, and additional option parameter P . The neural network approximates the price function as Nθ(T, x, c, K, P ).
Given a discretized time grid 0 = t0 < t1 < · · · < tm = T , the network defines the hedging strategy at each rebalancing date tj as the gradients of the approximated value function:
∆x
tj := ∂xNθ(T − tj, Xtj , Ctj , K, P ), ∆c
tj := ∂cNθ(T − tj, Xtj , Ctj , K, P ).
At maturity T , the option payoff g(XT , P ) is delivered.
The discounted Profit-and-Loss of the hedged position for a single simulated path i is defined as:
P &Li := Nθ(T, x, c, K, P ) +
m−1
X
j=0
∆x
tj (Xtj+1 − Xtj ) + ∆c
tj (Ctj+1 − Ctj ) e−rtj+1
− g(XT , P )e−rT .
Alternatively, the P&L could be computed at maturity by multiplying by erT .
For n independent Monte Carlo trajectories (Xi
tj , Ci
tj )0≤j≤m,1≤i≤n from the model
in (3.1), we obtain (P &Li)1≤i≤n. The empirical distribution of these P&L values is analyzed to assess hedging effectiveness, using metrics such as mean, standard-deviation, and quantiles.
9

3.2 Shortcomings of the self-financing approach compared to
profit and loss
Consider a European call option with maturity T and terminal payoff g(XT , P ) := (XT −P )+, where P > 0 is the strike price. We simulate trajectories using the stochastic volatility model from Definition 3.1, with the parameters reported in Table 1 for the dynamics of the underlying asset, volatility and the stochastic correlation.
Parameters Value
μ0
a5
σ◦ 0.2
ξ 0.5
γ 0.7
b5
p◦ −0.3
χ 0.5
Table 1: Parameters for the model in Definition 3.1.
3.2.1 Comparison of the different loss functions
The neural network is a fully-connected multilayer perceptron [13] with three layers, each containing 32 neurons, and tanh activation functions. The network parameters θ are trained using the Adam optimiser [9] implemented in PyTorch [11].
For each market configuration considered in Definition 2.4, we train the network separately using two different objective functions: For each case of Definition 2.4, we train the network separately using two different objective functions:
• the self-financing loss introduced in Definition 2.2,
• the P&L loss introduced in Definition 2.3.
The purpose of this section is to demonstrate that, across all specifications in Definition 2.4, the P&L loss systematically delivers superior out-of-sample hedging performance compared with the classical self-financing loss.
In the figures reporting the neural network prices, we also display the Black–Scholes price (computed with the initial volatility σ◦) purely as a familiar benchmark. This Black–Scholes value is neither the true theoretical price (which does not admit a closed form in our incomplete market with discrete hedging) nor the target of the training procedure.
Trained parameters are denoted θb and are obtained after 105 optimisation epochs.
10

The unconstrained case
In this first setting, we use the neural network directly as the pricing and hedging function: N θ = Nθ.
Figure 1 displays the learned pricing functions together with the true terminal payoff for a fixed initial volatility σ◦. The left panel corresponds to the network trained with the self-financing (replication) loss, and the right panel to the network trained with the direct P&L loss.
0.00 0.25 0.50 0.75 1.00 1.25 1.50 1.75 2.00 x
0.0
0.2
0.4
0.6
0.8
f(x)
Payoff t=0 Black-Scholes price t=0 Neural network price estimation t=T Neural network payoff estimation
(a) Self-financing loss.
0.00 0.25 0.50 0.75 1.00 1.25 1.50 1.75 2.00 x
0.0
0.2
0.4
0.6
0.8
f(x)
Payoff t=0 Black-Scholes price t=0 Neural network price estimation t=T Neural network payoff estimation
(b) P&L loss.
Figure 1: Pricing functions learned in the unconstrained case with T = 2, K = 1.2, and P = 1.
Both networks struggle to fit the kink of the payoff exactly at-the-money because Nθ is continuously differentiable while the call payoff is not. This well-known limitation of smooth approximations is visible near XT = K. The out-of-sample hedging performance is shown in Figure 2 and quantified in Table 2. All P&L figures are expressed as percentages of the Black-Scholes initial price.
0.0 0.5 1.0 1.5 2.0 2.5 3.0
P&L
Density
−60% −40% −20% 0% 20% 40% 60%
P&L(N)
P&L(BS)
(a) Self-financing loss
012345
P&L
Density
−60% −40% −20% 0% 20% 40% 60%
P&L(N)
P&L(BS)
(b) P&L loss
Figure 2: Empirical P&L distributions for the neural network hedge and the Black–Scholes delta hedge in the unconstrained case. T = 2, K = 1.2, P = 1, and X0 = 1.
11

Statistic Black-Scholes hedging Neural Network hedging (SF) Neural Network hedging (PL) Mean -1.839 % 11.739 % -0.572 % S.D. 16.11 % 15.80 % 12.84 % Quantile 1% -47.93 % -30.64 % -37.14 % Quantile 10% -21.26 % -6.37 % -15.51 % Quantile 90% 17.11 % 31.97 % 14.82 % Quantile 99% 35.61 % 49.67 % 31.46 %
Table 2: Summary statistics of the P&L distributions shown in Figure 2.
The network trained with the self-financing loss tends to overestimate the option price and delivers hedging errors comparable to a Black–Scholes delta hedge. In contrast, the network trained with the direct P&L loss produces a nearly unbiased price and significantly reduces the dispersion of the terminal P&L.
Despite these gains, the difficulty of fitting the non-differentiable payoff at maturity remains in both cases (Figure 1). For more exotic options, the payoff can even be discontinuous, making the problem considerably harder.
The next three approaches are specifically designed to better handle non-smooth terminal conditions.
The zero-target case
This framework corresponds to:
N θ(T − t, x, c, K, P ) = s
T f (T − t, x, c, K, P ) + Nθ(T − t, x, c, K, P ),
where f (0, x, c, K, P ) = g(x, P ). We use the Black-Scholes formula with constant volatility σ◦ from Table 1, i.e. in our context:
f (T − t, x, c, K, P ) := BS(T − t, x, P )
= xΦ[d1(T − t, x, P )] − P e−r(T −t)Φ[d1(T − t, x, P ) − σ◦
√T − t], (3.2) where
d1(T − t, x, P ) := 1
σ◦
√T − t log x
P + r + σ2
◦
2 (T − t) .
Figure 3 shows the resulting pricing functions. Thanks to the embedding, the terminal condition is now almost perfectly matched in both training objectives.
12

0.00 0.25 0.50 0.75 1.00 1.25 1.50 1.75 2.00 x
0.0
0.2
0.4
0.6
0.8
1.0
f(x)
Payoff t=0 Black-Scholes price t=0 Neural network price estimation t=T Neural network payoff estimation
(a) Self-financing loss
0.00 0.25 0.50 0.75 1.00 1.25 1.50 1.75 2.00 x
0.0
0.2
0.4
0.6
0.8
1.0
f(x)
Payoff t=0 Black-Scholes price t=0 Neural network price estimation t=T Neural network payoff estimation
(b) P&L loss
Figure 3: Pricing functions in the zero-target case, T = 2, K = 1.2, P = 1.
The out-of-sample hedging performance is presented in Figure 4 and Table 3 (expressed as percentages of the Black-Scholes price model). To evaluate the hedging strategy’s effectiveness, we compare its Profit and Loss (P&L) distribution to that of the Black-Scholes model in Figure 4 (with the SelfFinancing loss on the left and the P&L loss on the right) and we provide some statistics about the distributions in Table 3.
0.0 0.5 1.0 1.5 2.0 2.5 3.0
P&L
Density
−60% −40% −20% 0% 20% 40% 60%
P&L(N)
P&L(BS)
(a) Self-financing loss
012345
P&L
Density
−60% −40% −20% 0% 20% 40% 60%
P&L(N)
P&L(BS)
(b) P&L loss
Figure 4: Empirical P&L distributions for the neural network hedge and the Black–Scholes delta hedge in the zero-target case. T = 2, K = 1.2, P = 1 and X0 = 1.
Statistic Black-Scholes hedging Neural Network hedging (SF) Neural Network hedging (PL) Mean -1.839 % 19.11 % 1.209 % S.D. 16.11 % 15.40 % 12.57 % Quantile 1% -47.93 % -20.71 % -34.42 % Quantile 10% -21.26 % 0.87 % -12.98 % Quantile 90% 17.11 % 38.38 % 15.87 % Quantile 99% 35.61 % 56.01 % 34.42 %
Table 3: Summary statistics of the P&L distributions shown in Figure 4.
13

Again, the neural network’s hedging strategy and price using the Self-Financing loss yields modest results. The price is overestimated and the quality of the hedge is similar to the one of Black-Scholes. The P&L loss approach based on Definition 2.3 outperforms the self-financing approach.
The control-variate case
We set :
N θ(T − t, x, c, K, P ) = f (T − t, x, c, K, P ) + Nθ(T − t, x, c, K, P )
where f is chosen as the Black-Scholes formula in (3.2).
Figure 5 shows the prices obtained, for a fixed volatility of σ◦, with the Self Financing loss (Figure 5a on the left) and with the P&L loss (Figure 5b on the right).
0.00 0.25 0.50 0.75 1.00 1.25 1.50 1.75 2.00 x
0.0
0.2
0.4
0.6
0.8
1.0
f(x)
Payoff t=0 Black-Scholes price t=0 Neural network price estimation t=T Neural network payoff estimation
(a) Self-financing loss.
0.00 0.25 0.50 0.75 1.00 1.25 1.50 1.75 2.00 x
0.0
0.2
0.4
0.6
0.8
1.0
f(x)
Payoff t=0 Black-Scholes price t=0 Neural network price estimation t=T Neural network payoff estimation
(b) P&L loss.
Figure 5: Pricing functions in the control-variate case, T = 2, K = 1.2, P = 1.
The terminal condition is well fitted. We observe again that the Self-Financing approach gives higher prices.
To evaluate the hedging strategy’s effectiveness, we compare its Profit and Loss (P&L) distribution to that of the Black-Scholes model in Figure 6 (with the SelfFinancing loss on the left and the P&L loss on the right) and we provide some statistics about the distributions in Table 4.
14

0.0 0.5 1.0 1.5 2.0 2.5 3.0
P&L
Density
−60% −40% −20% 0% 20% 40% 60%
P&L(N)
P&L(BS)
(a) Self-financing loss.
012345
P&L
Density
−60% −40% −20% 0% 20% 40% 60%
P&L(N)
P&L(BS)
(b) P&L loss.
Figure 6: Empirical P&L distributions for the neural network hedge and the Black–Scholes delta hedge in the control-variate case. T = 2, K = 1.2, P = 1 and X0 = 1.
Statistic Black-Scholes hedging Neural Network hedging (SF) Neural Network hedging (PL) Mean -1.839 % 16.181 % 0.407 % S.D. 16.11 % 15.80 % 12.21 % Quantile 1% -47.93 % -21.19 % -34.45 % Quantile 10% -21.26 % -0.17 % -14.04 % Quantile 90% 17.11 % 34.01 % 14.22 % Quantile 99% 35.61 % 50.61 % 32.40 %
Table 4: Summary statistics of the P&L distributions shown in Figure 6.
Again, the neural network’s hedging strategy and price using the Self-Financing loss yields modest results. The price is overestimated and the quality of the hedge is similar to the one of Black-Scholes. The P&L loss approach based on Definition 2.3 outperforms the self-financing approach.
The constrained case
In this approach,
N θ(T − t, x, c, K, P ) = s
T f (T − t, x, c, K, P ) + 1 − s
T Nθ(T − t, x, c, K, P )
where f is the Black-Scholes formula in (3.2).
Figure 7 shows the prices obtained, for a fixed volatility of σ◦, with the Self Financing loss on the left and the P&L loss on the right.
15

0.00 0.25 0.50 0.75 1.00 1.25 1.50 1.75 2.00 x
0.0
0.2
0.4
0.6
0.8
1.0
f(x)
Payoff t=0 Black-Scholes price t=0 Neural network price estimation t=T Neural network payoff estimation
(a) Self-financing loss.
0.00 0.25 0.50 0.75 1.00 1.25 1.50 1.75 2.00 x
0.0
0.2
0.4
0.6
0.8
f(x)
Payoff t=0 Black-Scholes price t=0 Neural network price estimation t=T Neural network payoff estimation
(b) P&L loss.
Figure 7: Pricing functions in the control-variate case, T = 2, K = 1.2, P = 1.
The terminal condition is perfectly reproduced in both training settings. We observe again that the Self-Financing approach gives higher prices. Out-of-sample hedging performance is shown in Figure 8 and summarized in Table 5 (P&L expressed as percentages of the initial model price).
0.0 0.5 1.0 1.5 2.0 2.5 3.0
P&L
Density
−60% −40% −20% 0% 20% 40% 60%
P&L(N)
P&L(BS)
(a) Self-financing loss.
012345
P&L
Density
−60% −40% −20% 0% 20% 40% 60%
P&L(N)
P&L(BS)
(b) P&L loss.
Figure 8: Empirical P&L distributions for the neural network hedge and the Black–Scholes delta hedge in the control-variate case. T = 2, K = 1.2, P = 1 and X0 = 1.
Statistic Black-Scholes hedging Neural Network hedging (SF) Neural Network hedging (PL) Mean -1.839 % 13.960 % -0.183 % S.D. 16.11 % 14.54 % 12.48 % Quantile 1% -47.93 % -24.27 % -35.54 % Quantile 10% -21.26 % -2.90 % -14.58 % Quantile 90% 17.11 % 32.06 % 14.68 % Quantile 99% 35.61 % 49.25 % 31.67 %
Table 5: Summary statistics of the P&L distributions shown in Figure 8.
The pattern observed in the previous cases repeats: the self-financing loss produces a significantly upward-biased price and hedging errors comparable to those of a plain
16

Black–Scholes strategy. By contrast, the P&L loss yields an almost unbiased initial price and markedly lower P&L dispersion, confirming its clear superiority also when a control-variate structure is used.
3.2.2 Conclusion
Across all architectures considered in Definition 2.4, the direct P&L loss (Definition 2.3) consistently delivers superior out-of-sample hedging performance compared with the classical self-financing loss. We therefore discard the self-financing loss as a standalone objective and retain only the P&L loss for the remainder of the study.
Nevertheless, the pure P&L loss has one important limitation: the loss function only directly constrains the price at maturity. Formally, if N θb is the trained network and b(t) is any deterministic function such that b(T ) = 0, then the modified function
N
θb(t, x, c, K, P ) + b(t)
yields the same P&L loss as N θb. This behavior is observed empirically. To obtain coherent prices at all times while preserving strong hedging performance, we combine the two losses with suitable weights. In our experiments, assigning a weight of 5 to the self-financing loss and 1 to the P&L loss proves effective.
An alternative simple regularization consists of including paths that start at random intermediate dates. In that case, dates close to maturity naturally receive higher weight in the Monte Carlo average.
Table 6 summarises the out-of-sample P&L performance of the P&L-trained networks under the four terminal-condition treatments.
Statistic Black-Scholes Unconstrained Zero-target Control-variate Constrained
Mean -1.839 % -0.572 % 1.209 % 0.407 % -0.183 % S.D. 16.11 % 12.84 % 12.57 % 12.21 % 12.48 %
Quantile 1% -47.93 % -37.14 % -34.42 % -34.45 % -35.54 % Quantile 10% -21.26 % -15.51 % -12.98 % -14.04 % -14.58 % Quantile 90% 17.11 % 14.82 % 15.87 % 14.22 % 14.68 % Quantile 99% 35.61 % 31.46 % 34.42 % 32.40 % 31.67 %
Table 6: Summary statistics of the P&L distributions.
We also compare the four methods for handling the terminal condition. The pricing charts show that the Unconstrained approach struggles to fit the payoff kink at-themoney at maturity. Nevertheless, Table 6 reveals very similar overall hedging performance across all variants. The only noticeable difference is that the Unconstrained case has a slightly higher P&L standard deviation (roughly 2% to 5%) than the three methods that explicitly enforce the terminal payoff.
3.3 Results on other simple options
Having established in the previous section that the direct P&L loss (Definition 2.3) systematically dominates the self-financing loss, we now retain only the P&L loss and compare the four terminal condition treatments of Definition 2.4 on two additional elementary payoffs :
17

• the square option: g(XT , K) = (XT − K)2 (smooth payoff),
• the digital (binary) option: g(XT , K) = 1{XT >K} (discontinuous payoff).
These two contracts provide useful contrasts with the vanilla call studied earlier: the square payoff is infinitely differentiable, while the digital payoff is discontinuous at the strike. When a baseline function f is required (zero-target, control-variate, and constrained cases), we use the exact Black–Scholes price of the corresponding payoff assuming constant volatility σ◦ (Table 1).
3.3.1 The square option
The square option has payoff g(XT , P ) = (XT − P )2. Because the terminal condition is smooth, we expect the embedding of f to be less critical than for non-smooth payoffs.
Figure 9 shows the learned pricing function, while Figure 10 displays the corresponding out-of-sample P&L distributions. Numerical summary statistics are reported in Table 7 (P&L expressed as percentages of the Black–Scholes benchmark price of the square option).
0.00 0.25 0.50 0.75 1.00 1.25 1.50 1.75 2.00 x
0.0
0.2
0.4
0.6
0.8
1.0
1.2
f(x)
Payoff t=0 Black-Scholes price t=0 Neural network price estimation t=T Neural network payoff estimation
(a) Unconstrained.
0.00 0.25 0.50 0.75 1.00 1.25 1.50 1.75 2.00 x
0.0
0.2
0.4
0.6
0.8
1.0
1.2
f(x)
Payoff t=0 Black-Scholes price t=0 Neural network price estimation t=T Neural network payoff estimation
(b) Zero-target.
0.00 0.25 0.50 0.75 1.00 1.25 1.50 1.75 2.00 x
0.0
0.2
0.4
0.6
0.8
1.0
1.2
f(x)
Payoff t=0 Black-Scholes price t=0 Neural network price estimation t=T Neural network payoff estimation
(c) Control-variate.
0.00 0.25 0.50 0.75 1.00 1.25 1.50 1.75 2.00 x
0.0
0.2
0.4
0.6
0.8
1.0
1.2
f(x)
Payoff t=0 Black-Scholes price t=0 Neural network price estimation t=T Neural network payoff estimation
(d) Constrained.
Figure 9: Pricing functions for the square option with T = 2, K = 1.2, P = 1.
18

0.0 0.5 1.0 1.5 2.0 2.5
P&L
Density
−50% 0% 50%
P&L(N)
P&L(BS)
(a) Unconstrained.
0.0 0.5 1.0 1.5 2.0 2.5 3.0 3.5
P&L
Density
−50% 0% 50%
P&L(N)
P&L(BS)
(b) Zero-target.
0.0 0.5 1.0 1.5 2.0 2.5 3.0 3.5
P&L
Density
−50% 0% 50%
P&L(N)
P&L(BS)
(c) Control-variate.
0.0 0.5 1.0 1.5 2.0 2.5 3.0
P&L
Density
−50% 0% 50%
P&L(N)
P&L(BS)
(d) Constrained.
Figure 10: Empirical P&L distributions for the neural network hedge and the Black–Scholes delta hedge for the square option with T = 2, K = 1.2, P = 1 and X0 = 1.
Statistic Black-Scholes Unconstrained Zero-target Control-variate Constrained
Mean -2.994 % 0.046 % -0.315 % -4.547 % -1.895 % S.D. 28.09 % 19.77 % 16.46 % 17.21 % 17.19 %
Quantile 1% -82.82 % -62.23 % -43.71 % -47.40 % -45.84 % Quantile 10% -34.47 % -21.26 % -16.62 % -21.16 % -19.03 % Quantile 90% 27.19 % 18.65 % 15.47 % 10.63 % 13.86 % Quantile 99% 62.29 % 38.14 % 47.79 % 43.69 % 47.98 %
Table 7: Summary P&L statistics for the square option.
Even though the payoff is perfectly smooth, the Unconstrained approach, while producing the most accurate initial price, still delivers the poorest hedging performance, exactly as observed for the vanilla call. Its P&L standard deviation is approximately 15–20% higher than that of the three methods that explicitly embed the terminal condition, and its 1% quantile is substantially worse. Enforcing the exact payoff at
19

maturity is critical for robust out-of-sample hedging, regardless of the smoothness of the terminal condition.
3.3.2 The digital option
We finally consider a digital call with payoff g(XT , P ) = 1{XT >P }. This contract is the most challenging of the three because the terminal payoff is discontinuous at the strike. As before, whenever a baseline function f is required (zero-target, controlvariate, and constrained cases), we use the exact Black–Scholes digital price computed with constant volatility σ◦.
Figure 11 displays the learned pricing function, Figure 12 the out-of-sample P&L distributions, and Table 8 the corresponding summary statistics (P&L expressed as percentages of the Black–Scholes digital call price).
0.00 0.25 0.50 0.75 1.00 1.25 1.50 1.75 2.00 x
0.0
0.2
0.4
0.6
0.8
1.0
f(x)
Payoff t=0 Black-Scholes price t=0 Neural network price estimation t=T Neural network payoff estimation
(a) Unconstrained.
0.00 0.25 0.50 0.75 1.00 1.25 1.50 1.75 2.00 x
0.0
0.2
0.4
0.6
0.8
1.0
f(x)
Payoff t=0 Black-Scholes price t=0 Neural network price estimation t=T Neural network payoff estimation
(b) Zero-target.
0.00 0.25 0.50 0.75 1.00 1.25 1.50 1.75 2.00 x
0.0
0.2
0.4
0.6
0.8
1.0
f(x)
Payoff t=0 Black-Scholes price t=0 Neural network price estimation t=T Neural network payoff estimation
(c) Control-variate.
0.00 0.25 0.50 0.75 1.00 1.25 1.50 1.75 2.00 x
0.0
0.2
0.4
0.6
0.8
1.0
f(x)
Payoff t=0 Black-Scholes price t=0 Neural network price estimation t=T Neural network payoff estimation
(d) Constrained.
Figure 11: Pricing functions for the digital option with T = 2, K = 1.2, P = 1.
20

01234
P&L
Density
−50% 0% 50%
P&L(N)
P&L(BS)
(a) Unconstrained.
01234
P&L
Density
−50% 0% 50%
P&L(N)
P&L(BS)
(b) Zero-target.
01234
P&L
Density
−50% 0% 50%
P&L(N)
P&L(BS)
(c) Control-variate.
01234
P&L
Density
−50% 0% 50%
P&L(N)
P&L(BS)
(d) Constrained.
Figure 12: Empirical P&L distributions for the neural network hedge and the Black–Scholes delta hedge for the digital call option with T = 2, K = 1.2, P = 1 and X0 = 1.
Statistic Black-Scholes Unconstrained Zero-target Control-variate Constrained
Mean -2.345 % -3.856 % -0.479 % -1.950 % -0.996 % S.D. 30.06 % 28.41 % 28.59 % 28.11 % 29.46 %
Quantile 1% -99.54 % -122.30 % -85.39 % -95.96 % -94.63 % Quantile 10% -22.73 % -22.55 % -15.89 % -18.57 % -19.08 % Quantile 90% 17.76 % 15.60 % 18.17 % 15.13 % 17.31 % Quantile 99% 98.29 % 76.56 % 99.94 % 95.45 % 98.97 %
Table 8: Summary P&L statistics for the digital option.
The Unconstrained method gives the least accurate price (see Figure 11a). In terms of hedging, the standard deviations of the P&L are very similar across all four approaches, with the Constrained method being marginally the highest. Overall, the three methods that embed the terminal condition do not show a decisive advantage in variance reduction for this strongly discontinuous payoff. Nevertheless, the Unconstrained approach still exhibits the worst downside risk, with the most negative 1%
21

quantile.
3.3.3 Conclusion
Our analysis of the square option, with its smooth payoff (XT − P )2, shows that the Unconstrained method, despite delivering a seemingly accurate initial price, performs the worst in terms of hedging effectiveness. Among the methods that incorporate the baseline function f to embed the terminal condition, the Zero-Target approach achieves the best overall performance for this contract.
For the digital option, which has a discontinuous payoff, the Unconstrained method struggles significantly with the terminal condition and produces the least accurate price. The other three methods also exhibit minor fitting imperfections for the payoff but outperform the Unconstrained case in pricing accuracy. In terms of P&L standard deviation, all approaches yield comparable results; however, the Unconstrained method consistently displays the worst tail quantiles, indicating poorer protection i-
n extreme scenarios.
Although a call-spread approximation could have been used for the digital option, our purpose was precisely to handle a genuinely difficult payoff. We now proceed with the Equinox option, an exotic contract with a complex payoff structure, to further assess the robustness of the proposed neural network approaches on challenging terminal conditions.
3.4 The Equinox option
We introduce a more structured exotic contract that we call the Equinox option. Its payoff at the final horizon T + R is defined, for parameters R > 0, B > 0, P > 0, G ≥ 0, as
g(XT +R, (B, P, G)) = 1{XT ≤B}(XT +R − P )+ + G1{XT >B}.
The contract therefore naturally decomposes into two components:
g(XT +R, (B, P, G)) = g1(XT +R, (R, B, P )) + Gg2(XT +R, B),
where:
g1(XT +R, (R, B, P )) = 1{XT ≤B}(XT +R − P )+ and g2(XT +R, B) = 1{XT >B}.
At time T (time-to-maturity R) the barrier event is revealed, and:
• The payoff of g1 is either 0 or equivalent to a call option with time to maturity R and strike price P .
• The payoff of g2 at maturity is either 0 or 1, resembling a digital option, adjusted for interest rates over the period [T, T + R], as estimated in Section 3.3.2.
To price and hedge the Equinox option over the first period [0, T ] using our neural network framework requires addressing the terminal condition at time T :
g′
1(XT , (R, B, P )) = 1{XT ≤B}Call(R, XT , CT , K, P ), (3.3)
where Call(R, XT , CT , P ) is the fair price at time T of a call with remaining maturity R and strike P . We propose the following practical implementation:
22

• Train a first neural network Call using N ◦
θ◦ on vanilla calls using the methodology developed in Section 3.2.
• Train a second neural network N θ with the payoff 1{XT ≤B}N ◦
θb◦(R, XT , CT , K, P ).
A suitable function f is:
f (T − s, x, c, K, R, B, P ) = h(T − s, x, B) × N ◦
θb◦(R + (T − s), x, c, K, P ),
where h represents the price of a digital option in the Black-Scholes model. Note that this is not the standard Black-Scholes price, as XT and XT +R are not independent.
We then consider two modeling strategies:
Two separate networks. Train independently:
• N1
θ1(t, x, c, K, R, B, P ) for the g1 component (using the embedding f above in the zero-target/control-variate/constrained setting),
• N2
θ2(t, x, c, K, R, B) for the pure digital g2 component (Section 3.3.2).
The Equinox price is then:
N1
θ1(R + T − t, x, c, K, R, B, P ) + Ge−r(R+T −t)N 2
θ2(R + T − t, x, c, K, B). (3.4)
Single end-to-end network. Train one global network Nθ(R+T −t, x, c, K, R, B, P, G) directly on the full payoff g using the P&L loss, with an appropriate embedding that combines the two baseline functions above (weighted by G).
3.4.1 Equinox option with two neural networks
We train two independent neural networks trained with the P&L loss.
• N1
θ1 is dedicated to the barrier-call component with payoff g1,
• N2
θ2 is the digital option with payoff g2.
Together, these networks yield the Equinox option price and hedge, as specified in (3.4).
We present the results. Figure 13 shows the estimated price for specific parameters of N 1
θ1, which addresses only the payoff g1, excluding the digital option.
23

0.00 0.25 0.50 0.75 1.00 1.25 1.50 1.75 2.00 x
0.00
0.05
0.10
0.15
0.20
f(x)
Payoff t=0 Neural network price estimation t=T Neural network payoff estimation
(a) Unconstrained.
0.00 0.25 0.50 0.75 1.00 1.25 1.50 1.75 2.00 x
0.000
0.025
0.050
0.075
0.100
0.125
0.150
0.175
f(x)
Payoff t=0 Neural network price estimation t=T Neural network payoff estimation
(b) Zero-target.
0.00 0.25 0.50 0.75 1.00 1.25 1.50 1.75 2.00 x
0.000
0.025
0.050
0.075
0.100
0.125
0.150
0.175
f(x)
Payoff t=0 Neural network price estimation t=T Neural network payoff estimation
(c) Control-variate.
0.00 0.25 0.50 0.75 1.00 1.25 1.50 1.75 2.00 x
0.000
0.025
0.050
0.075
0.100
0.125
0.150
0.175
f(x)
Payoff t=0 Neural network price estimation t=T Neural network payoff estimation
(d) Constrained.
Figure 13: Pricing functions for the pure barrier-call component (G = 0) with parameters B = 1, P = 0.8, R = 1, T = 2, K = 1.
24

0.00 0.25 0.50 0.75 1.00 1.25 1.50 1.75 2.00 x
0.025
0.050
0.075
0.100
0.125
0.150
0.175
f(x)
Payoff t=0 Neural network price estimation t=T Neural network payoff estimation
(a) Unconstrained.
0.00 0.25 0.50 0.75 1.00 1.25 1.50 1.75 2.00 x
0.025
0.050
0.075
0.100
0.125
0.150
0.175
f(x)
Payoff t=0 Neural network price estimation t=T Neural network payoff estimation
(b) Zero-target.
0.00 0.25 0.50 0.75 1.00 1.25 1.50 1.75 2.00 x
0.000
0.025
0.050
0.075
0.100
0.125
0.150
0.175
f(x)
Payoff t=0 Neural network price estimation t=T Neural network payoff estimation
(c) Control-variate.
0.00 0.25 0.50 0.75 1.00 1.25 1.50 1.75 2.00 x
0.000
0.025
0.050
0.075
0.100
0.125
0.150
0.175
f(x)
Payoff t=0 Neural network price estimation t=T Neural network payoff estimation
(d) Constrained.
Figure 14: Pricing functions for the full Equinox option with the parameters G = 0.1, B = 1, P = 0.8, R = 1, T = 2, K = 1.
The Unconstrained version again struggles severely with the complex terminal condition (especially visible when G = 0), producing distorted pricing curves far from the true continuation value.
25

0.0 0.5 1.0 1.5 2.0 2.5 3.0
P&L (in % of the price)
Density
−100% −50% 0% 50% 100%
G=0 G = 0.1
(a) Unconstrained.
01234
P&L (in % of the price)
Density
−100% −50% 0% 50% 100%
G=0 G = 0.1
(b) Zero-target.
01234
P&L (in % of the price)
Density
−100% −50% 0% 50% 100%
G=0 G = 0.1
(c) Control-variate.
0.0 0.5 1.0 1.5 2.0 2.5
P&L (in % of the price)
Density
−100% −50% 0% 50% 100%
G=0 G = 0.1
(d) Constrained.
Figure 15: Empirical P&L distributions for the neural network hedge for the Equinox option with parameters B = 1, P = 0.8, R = 1, T = 2, K = 1, and X0 = 1.
Statistic Unconstrained Zero-target Control-variate Constrained
Mean 23.273 % 8.903 % 18.306 % 11.396 %
S.D. 64.89 % 59.20 % 57.06 % 58.86 %
Quantile 1% -186.60 % -160.57 % -151.35 % -155.88 %
Quantile 10% -33.17 % -35.42 % -23.52 % -32.71 %
Quantile 90% 93.76 % 57.69 % 64.53 % 60.81 %
Quantile 99% 209.69 % 226.87 % 223.67 % 223.65 %
Table 9: P&L statistics for the pure barrier-call component with G = 0 (in % of the Zero-target price).
26

Statistic Unconstrained Zero-target Control-variate Constrained
Mean 12.269 % 4.738 % 9.689 % 6.192 %
S.D. 24.47 % 18.77 % 17.94 % 18.95 %
Quantile 1% -56.35 % -36.31 % -30.70 % -32.17 %
Quantile 10% -13.44 % -11.82 % -6.05 % -11.99 %
Quantile 90% 43.43 % 24.92 % 27.96 % 26.87 %
Quantile 99% 79.91 % 61.84 % 72.86 % 71.95 %
Table 10: P&L statistics for the full Equinox option with G = 0.1 (in % of the Zerotarget price).
The Unconstrained method produces the least accurate results. Methods that incorporate the payoff condition yield a more accurate price and a better hedge. In the unconstrained framework, the standard deviation for the call component of the Equinox option is 10% to 14% higher than other methods (Table 9), and for the full Equinox option, it is 29% to 36% higher (Table 10). However, in all cases, the price appears to be overestimated.
3.4.2 Equinox option with a single neural network
We estimate the neural network Nθ, that directly outputs the price and hedging strategy of the full Equinox option for any cash amount G (in practice, G ∈ [0, 0.15]). The network takes G as an extra input dimension and is trained end-to-end with the P&L loss. Although this approach does not exploit the exact linearity in G, it turns out to deliver the best overall performance. Figures 16 and 17 display the learned price G = 0 and G = 0.1, respectively.
27

0.00 0.25 0.50 0.75 1.00 1.25 1.50 1.75 2.00 x
0.00
0.05
0.10
0.15
0.20
f(x)
Payoff t=0 Neural network price estimation t=T Neural network payoff estimation
(a) Unconstrained.
0.00 0.25 0.50 0.75 1.00 1.25 1.50 1.75 2.00 x
0.000
0.025
0.050
0.075
0.100
0.125
0.150
0.175
f(x)
Payoff t=0 Neural network price estimation t=T Neural network payoff estimation
(b) Zero-target.
0.00 0.25 0.50 0.75 1.00 1.25 1.50 1.75 2.00 x
0.000
0.025
0.050
0.075
0.100
0.125
0.150
0.175
f(x)
Payoff t=0 Neural network price estimation t=T Neural network payoff estimation
(c) Control-variate.
0.00 0.25 0.50 0.75 1.00 1.25 1.50 1.75 2.00 x
0.000
0.025
0.050
0.075
0.100
0.125
0.150
0.175
f(x)
Payoff t=0 Neural network price estimation t=T Neural network payoff estimation
(d) Constrained.
Figure 16: Pricing functions for the Equinox option with G = 0 (pure barrier-call component) with parameters B = 1, P = 0.8, R = 1, T = 2, K = 1.
28

0.00 0.25 0.50 0.75 1.00 1.25 1.50 1.75 2.00 x
0.000
0.025
0.050
0.075
0.100
0.125
0.150
0.175
f(x)
Payoff t=0 Neural network price estimation t=T Neural network payoff estimation
(a) Unconstrained.
0.00 0.25 0.50 0.75 1.00 1.25 1.50 1.75 2.00 x
0.000
0.025
0.050
0.075
0.100
0.125
0.150
0.175
f(x)
Payoff t=0 Neural network price estimation t=T Neural network payoff estimation
(b) Zero-target.
0.00 0.25 0.50 0.75 1.00 1.25 1.50 1.75 2.00 x
0.025
0.050
0.075
0.100
0.125
0.150
0.175
f(x)
Payoff t=0 Neural network price estimation t=T Neural network payoff estimation
(c) Control-variate.
0.00 0.25 0.50 0.75 1.00 1.25 1.50 1.75 2.00 x
0.000
0.025
0.050
0.075
0.100
0.125
0.150
0.175
f(x)
Payoff t=0 Neural network price estimation t=T Neural network payoff estimation
(d) Constrained.
Figure 17: Pricing functions for the full Equinox option with G = 0.1, and B = 1, P = 0.8, R = 1, T = 2, K = 1.
Out-of-sample hedging P&L are reported in Tables 11 (G = 0) and 12 (G = 0.1). All P&L figures are expressed as percentages of the Zero-target model price.
29

0123
P&L (in % of the price)
Density
−100% −50% 0% 50% 100%
G=0 G = 0.1
(a) Unconstrained.
012345
P&L (in % of the price)
Density
−100% −50% 0% 50% 100%
G=0 G = 0.1
(b) Zero-target.
0.0 0.5 1.0 1.5 2.0 2.5 3.0
P&L (in % of the price)
Density
−100% −50% 0% 50% 100%
G=0 G = 0.1
(c) Control-variate.
012345
P&L (in % of the price)
Density
−100% −50% 0% 50% 100%
G=0 G = 0.1
(d) Constrained.
Figure 18: Empirical P&L distributions for the neural network hedge for the Equinox option with parameters B = 1, P = 0.8, R = 1, T = 2, K = 1, and X0 = 1.
Statistics (G = 0) Unconstrained Zero-target Control-variate Constrained
Mean -8.764 % -3.218 % -1.200 % 10.501 %
S.D. 61.34 % 58.92 % 58.32 % 57.37 %
Quantile 1% -189.42 % -170.88 % -183.38 % -147.91 %
Quantile 10% -60.36 % -49.30 % -56.85 % -27.48 %
Quantile 90% 48.99 % 43.70 % 43.63 % 60.20 %
Quantile 99% 198.69 % 208.58 % 186.13 % 231.32 %
Table 11: P&L statistics for the pure barrier-call G = 0.
30

Statistics (G = 0.1) Unconstrained Zero-target Control-variate Constrained
Mean -1.774 % -1.451 % -1.191 % 4.864 % S.D. 19.05 % 17.64 % 17.94 % 17.19 %
Quantile 1% -57.45 % -43.04 % -49.76 % -30.20 % Quantile 10% -21.64 % -17.48 % -21.90 % -8.78 % Quantile 90% 18.17 % 15.44 % 15.55 % 23.15 % Quantile 99% 55.47 % 61.84 % 51.53 % 71.23 %
Table 12: P&L statistics for the pure barrier-call G = 0.1.
The single-network approach clearly dominates the two-network strategy of Section 3.4.1. The Control Variate method achieves the highest price accuracy, while it also exhibits a slightly lower standard deviation, albeit with reduced price accuracy compared to other methods. The Unconstrained method again produces the largest standard deviation among the neural network hedges, exceeding the three methods that embed the terminal condition by 4% to 7% for G = 0 and by 6% to 11% for G = 0.1.
3.5 Robustness with jumps
To test the robustness of our deep-hedging framework to sudden regime shifts and model misspecification, we extend the stochastic-volatility model of Definition 3.1 by adding pure upward jumps to the volatility process:
Σt,σ
s =σ+
Zs
t
−a(Σt,σ
u − σ◦)du +
Zs
t
ξ(Σt,σ
u )γd(ρt,p
u W1
u+
q
1 − (ρtu,p)2W 2
u)
+
Zs
t
κdNu,
where (Nt)0≤t≤T is an independent Poisson process with intensity λ > 0, and κ > 0 is the fixed jump size.
We keep all other parameters from Table 1 and focus exclusively on the digital option (Section 3.3.2) priced and hedged with the Zero-target embedding. We train three separate networks with λ ∈ {0, 0.5, 2} and test each of them out-of-sample under all three true intensities.
31

012345
P&L (in % of the price)
Density
−100% −50% 0% 50% 100%
λ=0 λ = 0.5 λ=2
Figure 19: Network trained with no volatility jumps λ = 0. P&L density under true intensity λ ∈ {0, 0.5, 2}.
Figure 19 shows the network trained in the original jump-free model. When a moderate number of jumps occurs in reality, (λ = 0.5), performance degrades gracefully: the distribution widens and the left tail becomes slightly heavier, but hedging remains reasonably effective. At high intensity (λ = 2), however, the hedge collapses, with catastrophic losses on a non-negligible fraction of paths.
012345
P&L (in % of the price)
Density
−100% −50% 0% 50% 100%
λ=0 λ = 0.5 λ=2
(a) Trained with λ = 0.5.
012345
P&L (in % of the price)
Density
−100% −50% 0% 50% 100%
λ=0 λ = 0.5 λ=2
(b) Trained with λ = 2.
Figure 20: Networks trained with jumps. P&L density under true intensity λ ∈ {0, 0.5, 2}.
In Figure 20, we examine a model with jumps to assess whether the neural network
32

can still hedge the option effectively and to analyze the P&L behavior under model misspecifications.
The network trained with λ = 0.5 (Figure 20a) delivers excellent hedging performance under the correctly specified model (green curve) and degrades only mildly when tested under λ = 0 (no jumps) or λ = 2 (four times more jumps). In particular, its behavior under severe upward misspecification (λ = 2 in reality) is dramatically better than the collapse observed in Figure 19.
The network trained with high intensity λ = 2 (Figure 20b) is naturally more conservative. Its in-sample performance is somewhat worse than the λ = 0.5 case (wider distribution), but it remains remarkably stable when tested on lower intensities, including the original jump-free world.
4 Conclusion
We modified the neural network to embed the terminal condition, particularly to handle non-smooth payoffs in incomplete markets, leveraging the self-financing property. For simple options, this approach significantly improved hedging performance, even for smooth payoffs, reducing the standard deviation of the P&L by up to 20%. For the exotic Equinox option, we explored two approaches: one separating the digital option component, using two simpler neural networks, and another using a single neural -
network. The single network approach proved more accurate, achieving a P&L standard deviation up to 10% lower when embedding the terminal condition. Robustness tests under a model with jumps further demonstrated the resilience of the Zero Target method, particularly when trained with moderate jump intensity, although performance declined under severe model misspecifications. Our approach advances the application of neural networks in quantitative finance by effectively addressing payoff non-smooth-
ness and market incompleteness.
Acknowledgments
Nicolas Baradel acknowledges the financial support provided by the Fondation Natixis and is grateful to Olivier Croissant, Michel Crouhy, Noureddine Lehdili, Nadhem Meziou, and Denis Talay for numerous fruitful discussions and insightful comments that significantly improved the paper.
References
[1] Nacira Agram, Bernt Øksendal, and Jan Rems. Deep learning for quadratic hedging in incomplete jump market. Digital Finance, 6(3):463–499, 2024.
[2] Clémence Alasseur, Zakaria Bensaid, Roxana Dumitrescu, and Xavier Warin. Deep learning algorithms for fbsdes with jumps: applications to option pricing and a mfg model for smart grids. arXiv preprint arXiv:2401.03245, 2024.
33

[3] Jens Berg and Kaj Nyström. A unified deep artificial neural network approach to partial differential equations in complex geometries. Neurocomputing, 317:28–41, 2018.
[4] Hans Buehler, Lukas Gonon, Josef Teichmann, and Ben Wood. Deep hedging. Quantitative Finance, 19(8):1271–1291, 2019.
[5] Robert Culkin and Sanjiv R Das. Machine learning in finance: the case of deep learning for option pricing. Journal of Investment Management, 15(4):92–100, 2017.
[6] Simon Fecamp, Joseph Mikael, and Xavier Warin. Deep learning for discrete-time hedging in incomplete markets. Journal of computational Finance, 25(2), 2020.
[7] Igor Halperin. Qlbs: Q-learner in the black-scholes(-merton) worlds. The Journal of Derivatives, 28(1):99–122, 2020.
[8] James M Hutchinson, Andrew W Lo, and Tomaso Poggio. A nonparametric approach to pricing and hedging derivative securities via learning networks. The journal of Finance, 49(3):851–889, 1994.
[9] Diederik P. Kingma and Jimmy Ba. Adam: A method for stochastic optimization. Proceedings of the International Conference on Learning Representations (ICLR), 2015.
[10] Zeyu Liu, Yantao Yang, and Qing-Dong Cai. Solving differential equation with constrained multilayer feedforward network. arXiv preprint arXiv:1904.06619, 2019.
[11] Adam Paszke, Sam Gross, Soumith Chintala, Gregory Chanan, Edward Yang, Zachary DeVito, Zeming Lin, Alban Desmaison, Luca Antiga, and Adam Lerer. Automatic differentiation in pytorch. NIPS 2017 Autodiff Workshop, 2017. Presented at the NIPS 2017 Workshop on Automatic Differentiation.
[12] Allan Pinkus. Approximation theory of the mlp model in neural networks. Acta numerica, 8:143–195, 1999.
[13] Frank Rosenblatt. The perceptron: a probabilistic model for information storage and organization in the brain. Psychological review, 65(6):386, 1958.
34

---

## Processing Information

- **Processing Library:** Zotero PDFWorker
- **Processing Date:** 2026-02-10T18:16:52.709Z
- **Text Length:** 60056 characters
- **Success:** Text extraction completed
- **PDF Library Used:** Zotero PDFWorker
- **Pages Processed:** 34 of 34
