# PDF Document: Grzeskiewicz - 2025 - Solving Heterogeneous Agent Models with Physics-informed Neural Networks.pdf

**File Path:** Grzeskiewicz - 2025 - Solving Heterogeneous Agent Models with Physics-informed Neural Networks.pdf

**Processed Date:** 2026-02-10T18:17:38.161Z

**File Size:** 1137.24 KB

**Total Pages:** 14

**Extracted Pages:** 14

**PDF Library:** Zotero PDFWorker

**Attachment Item ID:** 3233

**Title:** Solving Heterogeneous Agent Models with Physics-informed Neural Networks

**Collection:** Large Files > Random Papers

---

## Extracted Text Content

This work is shared under a CC BY-NC 4.0 license.
Solving Heterogeneous Agent Models with
Physics-informed Neural Networks
Marta Grzes ́kiewicz University of Cambridge
Work in Progress This version: November 2025
Abstract
Understanding household behaviour is essential for modelling macroeconomic dynamics and designing effective policy. While heterogeneous agent models offer a more realistic alternative to representative agent frameworks, their implementation poses significant computational challenges, particularly in continuous time. The Aiyagari-Bewley-Huggett (ABH) framework, recast as a system of partial differential equations, typically relies on grid-based solvers that suffer from the curse of dimensionality, -
high computational cost, and numerical inaccuracies. This paper introduces the ABHPINN solver, an approach based on Physics-Informed Neural Networks (PINNs), which embeds the Hamilton-Jacobi-Bellman and Kolmogorov Forward equations directly into the neural network training objective. By replacing grid-based approximation with mesh-free, differentiable function learning, the ABH-PINN solver benefits from the advantages of PINNs of improved scalability, smoother solutions, and computational efficien-
cy. Preliminary results show that the PINN-based approach is able to obtain economically valid results matching the established finite-difference solvers. We hope this will open new avenues for solving complex heterogeneous agent models in macroeconomics.
1 Introduction
Understanding household behaviour is a central challenge in economics. As the fundamental decisionmaking units in an economy, households collectively drive macroeconomic dynamics, shaping everything from business cycle fluctuations to long-run growth. Accurate models of consumption and saving are essential for policy design, welfare analysis, and forecasting. Historically, these models relied heavily on the representative agent paradigm, in which a single, aggregate agent stands in for the entire -
population. While computationally convenient, this approach fails to capture distributional dynamics and underperforms in predicting behaviour in the tails of income or wealth distributions. The emergence of heterogeneous agent models (HAMs) marked a major theoretical advance. By allowing for persistent idiosyncratic shocks and incomplete markets, these models better reflect the microlevel frictions and risk exposures that shape aggregate outcomes. The canonical Aiyagari-Bewley-Huggett (ABH) frame-
work formalises these ideas, embedding household heterogeneity in a general equilibrium setting. Individuals face uninsurable income shocks and solve intertemporal optimisation problems under borrowing constraints, giving rise to endogenous, stationary distributions of wealth and consumption. This framework has since become foundational for modern macroeconomics, particularly the class of Heterogeneous Agent New Keynesian (HANK) models, which integrate micro-level frictions into general equilibriu-
m models of monetary and fiscal policy. Recent advances by [2] have further reformulated the ABH model in continuous time, recasting the household problem as a coupled system of non-linear partial differential equations (PDEs): a HamiltonJacobi-Bellman (HJB) equation characterising individual optimisation, and a Kolmogorov Forward (KF) equation describing the evolution of the distribution of agents across states. This is solved by a grid-based finite-difference (FD) solver. While this reformulatio-
n offers greater analytical elegance and compatibility with modern policy tools, it also introduces substantial numerical challenges. These PDE systems are difficult to solve analytically and rely on computationally intensive grid-based methods for approximation. Grid-based solvers, though widely used, face three fundamental limitations. First, they suffer from the curse of dimensionality: the computational cost scales exponentially with the number of state variables. Even modest extensions to the-
 ABH model, such as adding housing, human capital, or debt, can render the problem intractable [3]. Second, these methods impose a high computational burden, especially in
1
arXiv:2511.20283v1 [econ.GN] 25 Nov 2025

This work is shared under a CC BY-NC 4.0 license.
dynamic policy environments where models must be repeatedly solved under varying parameters [12, 26]. Third, they are prone to discretisation error and interpolation inaccuracies, and require complex, errorprone implementations that can obscure economic insights [2, 19]. To address these limitations, we propose a novel solution method based on Physics-Informed Neural Networks (PINNs) [28], the ABH-PINN solver. PINNs are a class of universal function approximators that embed the governing PDEs of a-
 model directly into the training objective of a neural network. Originally developed in computational physics, they have demonstrated success in solving high-dimensional, non-linear systems where traditional methods fail. By leveraging the structure of the economic model itself, (in this case, the HJB and KF equations) PINNs transform the solution process from brute-force grid search to an elegant function approximation task that is both mesh-free and differentiable by construction. In the contex-
t of HAMs, PINNs offer several advantages. They alleviate the curse of dimensionality by learning over randomly sampled collocation points rather than fixed grids, making the inclusion of additional state variables computationally feasible. They significantly reduce computational costs by enabling rapid evaluation of policy functions once trained, which is especially valuable in the repeatedsolution contexts typical of policy simulations. They also provide smooth, continuous approximations to valu-
e and distribution functions, avoiding the interpolation and discretisation issues of grid-based methods. Crucially, they are well-suited to handle non-linearities, occasionally binding constraints (e.g., borrowing limits), and sparse or noisy data, both common features of macroeconomic models. In this paper, we present preliminary results to demonstrate the applicability of PINNs to solving the ABH model in continuous time with the ABH-PINN solver, with a view to benchmarking it against the FD so-
lver presented in [2] and to show how it performs with higher dimensions of heterogeneity in a future iteration of this work. The remainder of the paper is structured as follows. Relevant literature is presented in section 2, and section 3 presents the theoretical background. Section 4 presents the ABHPINN solver, with preliminary results presented in section 5. We conclude and discuss future work in section 6.
2 Relevant Literature
2.1 PINNs in Economics and Finance
To the best of our knowledge, PINNS have so far been applied to problems in macroeconomics only in [17], which applies a PINN to solve the spatial Solow growth model. In this setting, the PINN is trained to predict the evolution of capital and technology over space and time. The model is benchmarked against traditional numerical approaches, including the spatial Solow framework with non-concave production functions proposed by [9]. PINNs yield strong performance, achieving error rates of 3.4% (max-
imum) and 0.5% (minimum) in capital and technology levels. Additionally, visual comparisons with results from [20], who apply differential evolution techniques to similar models, suggest that PINNs can successfully replicate both homogeneous and heterogeneous equilibrium distributions, including bimodal patterns. Although quantitative error metrics are not provided for this comparison, qualitative agreement supports the validity of the PINN approach. The inverse problem of inferring model paramete-
rs from data is more challenging but of critical importance for empirical economics and policy analysis. [17] demonstrates that PINNs can accurately recover parameters with minimal data: errors remain below 3% with only two known data points, and fall under 1% with 30 data points, even under moderate noise. This robustness to data sparsity and noise is particularly relevant in macroeconomics and econometrics, where observational data is often incomplete or imprecise. Crucially, simulated settings -
with known ground truth allow for rigorous validation of the method’s inference accuracy. PINNs have been applied more extensively in computational finance. Early work by [31], in a master’s thesis, initiated the use of PINNs for option pricing under the Black-Scholes and Heston models, particularly in high-dimensional asset spaces. This foundational study opened the door to further innovation in neural network architectures tailored for financial applications. Building on this foundation, [6] int-
roduced a suite of architectural enhancements to improve accuracy and training stability. These include local adaptive activation functions and a slope recovery term in the loss function—techniques that enhance convergence and precision. Their framework was applied not only to standard Black-Scholes pricing but also to more complex PDEs, such as the Ivancevic model, which includes rogue wave and soliton solutions.
2

This work is shared under a CC BY-NC 4.0 license.
Recent studies further highlight the breadth of PINN applications in finance. PINNs are applied to option pricing in [15], who validate the effectiveness of PINNs in pricing options under the Heston model, which incorporates stochastic volatility, and in [13], who explore PINNs as a meshless alternative for pricing American options, which involve a free boundary due to the early exercise feature. Traditional grid-based methods struggle in this context, whereas PINNs offer a more flexible and poten-
tially more accurate solution. Finally, [27] extend the PINN framework to solve time-fractional PDEs under the Time-Fractional Black-Scholes Equations incorporating memory effects and long-range dependence, which is a phenomena often observed in financial time series but poorly captured by classical models.
2.2 Heterogeneous Agent Models in Macroeconomics
The study of macroeconomic phenomena has undergone a profound transformation with the rise of HAMs, marking a significant departure from the long-dominant representative agent framework. While those models simplify economic analysis by assuming all agents are identical, HAMs explicitly account for the diverse circumstances of individual households and firms. This shift provides a richer, more empirically grounded lens for analysing economic aggregates, inequality, and the heterogeneous effects of -
policy interventions. The intellectual groundwork for modern HAMs was laid by seminal papers that introduced idiosyncratic risk, incomplete markets, and endogenous wealth distributions into general equilibrium analysis. These models provided the first coherent framework for understanding how rational, forward-looking individuals behave when they cannot fully insure against uncertainty. [8] initiated this line of inquiry by analysing a single consumer facing uninsurable, random income fluctuations -
and an explicit borrowing constraint. His work formally established the motive for precautionary saving, demonstrating that individuals accumulate assets to self-insure against potential future hardship. This insight challenged the permanent income hypothesis by showing how liquidity constraints and uncertainty systematically alter consumption-saving decisions. This framework was extended to a general equilibrium setting in [18]. In an endowment economy populated by infinitely-lived, ex-ante ident-
ical agents, he demonstrated how idiosyncratic income risk leads to an endogenous distribution of wealth. The collective desire for precautionary savings by all agents serves to increase the aggregate supply of capital, thereby depressing the equilibrium risk-free interest rate below what would prevail in a complete markets setting. Huggett’s model provided a powerful mechanism for explaining both the observed level of wealth inequality and the equity premium puzzle. [4] subsequently embedded thes-
e insights into a standard neoclassical growth model with production. In his framework, the aggregate capital stock is the sum of assets held by a continuum of heterogeneous households facing uninsurable labour income shocks. Aiyagari demonstrated that the presence of incomplete markets could lead to a higher aggregate saving rate and a larger capital stock compared to the representative-agent benchmark. The model generates a stationary distribution of wealth, providing a crucial link between micr-
o-level behaviour and macroeconomic aggregates. Although these foundational models successfully introduced key mechanisms, they systematically underestimated the extreme concentration of wealth observed in empirical data [11]. Building on this foundational work, subsequent research introduced greater realism to better match empirical facts, particularly the high degree of wealth inequality. [24] made a major stride by incorporating aggregate risk (i.e., business cycle fluctuations) into the Aiyaga-
ri framework. A key challenge in such an environment is that the entire distribution of wealth becomes a state variable, making the model computationally intractable. Their critical contribution was to show that the aggregate dynamics could be accurately approximated using only a few moments of the wealth distribution, most notably the mean. This discovery of “approximate aggregation” made it feasible to study business cycles within heterogeneous agent environments. [10] addressed the failure of s-
tandard models to generate realistic wealth concentration at the top of the distribution. By introducing intergenerational transfers through voluntary and accidental bequests, she showed that savings motives related to passing on wealth are crucial for explaining the emergence of large fortunes and matching the thick upper tail of the wealth distribution observed in the data. More recently, [22] refined the understanding of household consumption behaviour by developing a two-asset model. They dist-
inguish between a liquid asset (e.g. cash) and an illiquid, higher-return asset (e.g., housing or retirement accounts). This framework generates a class of “wealthy hand-to-mouth” households—agents who hold substantial illiquid wealth but very few liquid assets. These households exhibit a high Marginal Propensity to Consume (MPC) out of transitory income shocks, a feature with profound implications for the transmission of economic policy. The insights from the HAM literature have been integrated w-
ith standard New Keynesian models,
3

This work is shared under a CC BY-NC 4.0 license.
which feature nominal rigidities, to create HANK models. These models have become the dominant framework for modern monetary and fiscal policy analysis. HANK models, pioneered in works like [21], demonstrate that heterogeneity is of first-order importance for the transmission of macroeconomic policy. In contrast to Representative Agent New Keynesian models where the transmission of monetary policy works primarily through inter-temporal substitution, HANK models highlight powerful indirect effects -
that operate through general equilibrium changes in labour income. Because many households have high MPCs, changes in interest rates that affect firm investment and labour demand have large and immediate impacts on consumption. This channel significantly amplifies the power of monetary policy. Similarly, these models provide a clear framework for analysing fiscal stimulus, as they predict that transfers to low-liquidity, high-MPC households will have the largest impact on aggregate demand [29]. A -
recent and significant development in the field has been the shift from discrete-time to continuoustime modelling. Although early HAMs were almost exclusively formulated in discrete time, this approach has computational and theoretical disadvantages. As argued by [2], a continuous-time frameworks allow for richer dynamics, more precise characterisation of equilibrium, and the use of powerful mathematical tools. The modern continuous-time approach formulates the household’s problem as a HJB partial-
 differential equation and the evolution of the wealth distribution as a KF equation. The coupling of these two equations fully characterises the aggregate equilibrium. This mathematical structure draws inspiration from Mean Field Game theory [25], which studies strategic decision-making in large populations of interacting agents. The seminal work of [2] provided a comprehensive theoretical characterisation and a fast, reliable numerical solution method (based on finite differences) for the canoni-
cal ABH model in continuous time. This breakthrough has made continuous-time methods widely accessible, spurring the development of a new generation of continuous-time HANK models for sophisticated policy analysis (e.g., [5]). These new methods allow for a more granular and computationally efficient analysis of complex economic dynamics, pushing the frontier of macroeconomic research.
3 Background
3.1 ABH Economy
In this section, we present the ABH model, presented in [1] which is a more general formulation of [2], by including their extension to a general income process, and assuming the closing of the economy as in [4] that wealth takes the form of productive capital that is used by a representative firm which also hires labour. The micro-foundations consist of individual optimisation decisions, based on their current labour and capital income and expenditure on consumption.
3.1.1 Setup
Individuals. There is a continuum of individuals that are heterogeneous in their wealth and labour productivity, earning them an income based on their wages and labour supply. The state of the economy is the joint distribution of wealth and productivity. Each individual agent has standard preferences and optimises their utility
E0
Z∞
0
e−ρtu(ct)dt (1)
where u(ct) represents utility from consumption at time t, ct, with u as a strictly increasing and strictly concave function. ρ ≥ 0 is the discount rate and E0 is the expectation operator at the initial time period t = 0. Their wealth, at, takes the form of bonds and evolves according to the differential equation, given by dat = [wtzt + rtat − ct]dt (2)
where wt is their wage and zt their productivity, making wtzt is labour income, and rt is the interest rate, making rtat the capital income. The individuals also face a borrowing limit
at ≥ a, where − ∞ < a ≤ 0. (3)
Labour productivity evolves over time as a stationary diffusion process
dzt = μz(zt)dt + σz(zt)dWt. (4)
The individuals maximise 1 subject to 2, 3, and 4, taking as given the interest rate and wage.
4

This work is shared under a CC BY-NC 4.0 license.
Firms. There is a representative firm with a production function Y = F (K, L) exhibiting constant returns to scale. The total amount of capital is determined by the total amount of wealth (bonds), given by
K(t) =
ZZ
ag(a, z, t) da dz (5)
and we normalise the total amount of labour supplied in the economy to one. With competitive markets and δ as the rate of depreciation of capital, the interest rate and wage are given by
r(t) = ∂K F (K(t), 1) − δ (6)
w(t) = ∂LF (K(t), 1) (7)
with the shorthand notation ∂K F = ∂F/∂K and ∂LF = ∂F/∂L.
3.1.2 Recursive formulation
The evolution of the economy through the consumption-savings decisions of individuals and the joint distribution of their wealth and labour productivity is summarised by two PDEs: a Hamilton-JacobiBellman (HJB) equation and a Kolmogorov Forward (KF) (or Fokker-Planck) equation. Given an initial distribution of g at time t = 1 and appropriate boundary conditions, the two PDEs with the equilibrium relationship described in the firm equations fully characterise the evolution of the economy.
HJB equation. The HJB equation is given by
ρv(a, z, t) = mcax u(c) + ∂av(a, z, t)[w(t)z + r(t)a − c] + ∂zv(a, z, t)μz(z)
+1
2 ∂zzv(a, z, t)σ2
z (z) + ∂tv(a, z, t)
(8)
where ρv(a, z, t) represents the discounted lifetime utility an individual can obtain; v(a, z, t) denotes the value function, which obtains the value the individual gets in terms of utility over the ‘state space’, in this model defined by wealth, productivity and time. Utility from instantaneous consumption is given by u(c); ∂av(a, z, t) represents the sensitivity of the value function with respect to wealth while [w(t)z + r(t)a − c] represents the change in wealth (labour and capital income minus-
 consumption). Together, ∂av(a, z, t)[w(t)z + r(t)a − c] intuitively represent the marginal value of saving, combining the expected change in value arising from wealth drift, weighted by the marginal value of wealth. It can also be interpreted as the utility gained from saving an additional unit of wealth a. μz(z) is the productivity drift term, and it weighs the sensitivity of the value function to labour productivity ∂zv(a, z, t). Intuitively higher productivity influences personal income and th-
erefore the value function, but its impact will vary based on the level of wealth and time. 1
2 ∂zzv(a, z, t)σz2(z) reflects 4. Future productivity is uncertain, leading to income volatility that cannot be insured against. The higher the uncertainty, the greater the weight placed on additional wealth which functions as self-insurance. ∂tv(a, z, t) represents the change in the value function with respect to time, incorporating changes to wage trends, interest rate shifts and horizon effects in finite models. Boundary condition. The borrowing constraint is not present in the HJB and it only -
binds on the boundary
∂av(a, z, t) ≥ u′(μa(a, z, t)) (9)
which binds at a = a. See [2] for the derivation.
KF equation. The KF equation is given by
∂tg(a, z, t) = − ∂a[μa(a, z, t)g(a, z, t)] − ∂z[μz(z)g(a, z, t)] (10)
+1
2 ∂zz[σ2
z (z)g(a, z, t)] (11)
It utilises the savings policy function μa(a, z, t) = w(t)z + r(t)a − c(a, z, t) from 8 to analyse the forwards and backwards movements of individuals within the feature space. ∂tg(a, z, t) gives the rate of change of the distribution over time, which is informed by −∂a[μa(a, z, t)g(a, z, t)] representing the drift of wealth.
5

This work is shared under a CC BY-NC 4.0 license.
This drift informs the x-axis movements of the population distribution. In a simplified model with realistic specifications, you’d expect the mass of consumers to gradually shift towards the right as they accumulate wealth through saving. The second term −∂z[μz(z)g(a, z, t)] tracks drift for the idiosyncratic productivity process. Productivity diffusion is modelled through 1
2 ∂zz[σz2(z)g(a, z, t)] accounting for the stochastic spread reflecting uncertainty in productivity stemming from 4.
3.2 PINNs
Neural networks are often used to model data processes due to their nature as universal function approximators [16], and their ability to take advantage of automatic differentiation [7]. PINNs are neural networks constrained during training to respect any symmetries, invariances, or conservation principles originating from the physical laws that govern observed data, as modelled by general time-dependent and non-linear partial differential equations [28]. These constraints are imposed through the -
loss function used to train the network. A loss function for a PINN is a weighted sum of losses arising from the residual of the PDE, the initial conditions (IC), boundary conditions (BC) and physical constraints (phys), given by
Ltotal = λPDE · LPDE + λIC · LIC + λBC · LBC + λphys · Lphys (12)
where the scalars λ determine the contribution of the components in the loss function. The components are described as follows:
• PDE residual loss, LPDE. Evaluating the trained network comparing to the PDE yields a residual : zero residual means the network exactly satisfies the governing law.
• Initial-condition loss, LIC. Initial condition can be arrived at by either knowing the initial profile of a system and comparing it to the output of the PINN, or by solving for the steady-state solution and comparing for backward problems.
• Boundary-condition loss, LBC. At the boundaries of the domain we may require enforcement of edge restrictions, so the learned solution behaves sensibly (e.g. zero-flux).
• Physics (economic) constraints, Lphys. Beyond the governing PDE, additional shape restrictions: monotonicity of marginal utility, concavity of the value function, or conservation of total probability mass can be softly imposed. Each restriction is written as an inequality or identity that the network should satisfy. The squared violation enters Lphys.
PINNs can solve two kinds of problems: firstly, given fixed model parameters λ what can be said about the unknown hidden state u(t, x) of the system?, and secondly, what are the parameters λ that best describe the observed data? In this work, we focus on the former problem in the context of the ABH model, where the parameters of the PDEs are obtained through calibration, and leave the application to observed data for future work.
4 Methodology
In this section, we present the PINN-based method to solve the PDEs that describe the workhorse ABH micro-founded macroeconomic model, the HJB and KF, as described in section 3.1. We first present the general framework for the method, then describe the details for solving each step.
4.1 General Framework
Two PINNs approximate the solution to the ABH model. The first approximates the value function v(a, z, t) governed by the HJB, and the second approximates the density function g(a, z, t) governed by the KF equation. The training loss minimises the combined physics-informed residuals, initial and boundary conditions, and economic constraints. The algorithmic structure is as follows:
6

This work is shared under a CC BY-NC 4.0 license.
Algorithm 1: ABH-PINN Solver
▷ Initialise networks
Initialise HJB-PINN vˆθ to approximate v(a, z, t) ; Initialise KF-PINN gˆν to approximate g(a, z, t) ; ▷ Pretraining
Train vˆθ for a number of epochs with fixed r, w ; while not converged do
Update HJB-PINN vˆθ ; Compute savings policy μa from current HJB-PINN ; Update KF-PINN gˆν using μa ; Compute aggregate capital K from updated gˆν(a, z, t) ; Update r, w using new K ; end while
Pretraining is not strictly necessary but we have found it speeds up training as the KF-PINN is not updated while the value function is still in initial stages of training. The full loss is a weighted combination:
L = λHJB
P DE LHJB
PDE + λKF
P DE LKF
PDE + λIC LIC + λBC LBC + λmassLmass + λphysLphys. (13)
4.2 Estimating of value function v(a, z, t) from the HJB equation
4.2.1 PDE Loss
The core of the HJB solution is a residual loss constructed from the PDE in equation (8):
LHJB
PDE = E(a,z,t)∼D
h
ρvˆθ(a, z, t) − u(c∗(a, z, t)) − ∂avˆθ(a, z, t)μ∗
a(a, z, t) − ∂zvˆθ(a, z, t)μz(z)
−1
2 ∂zzvˆθ(a, z, t)σ2
z (z) − ∂tvˆθ(a, z, t)
i2 (14)
Optimal consumption c∗(a, z, t) is computed directly using the gradients of the network since the utility function is known, which informs μ∗a(·). PINNs evaluate the residual at randomly sampled points (ai, zi, ti), constructing the evaluation dataset D, offering flexibility in the number and distribution of training points.
4.2.2 Initial Conditions
The initial condition loss can be used to enforce either an initial state or the terminal (steady) state of the value function. These can be known, estimated (by e.g. another PINN or another solver), or guessed to guide the network to a reasonable solution. Taking vic to be the initial condition for the value function at time t = 0, we have LIC = E(a,z)∼D[vˆθ(a, z, 0) − vic(a, z)]2. (15)
4.2.3 Boundary Conditions
The boundary condition loss ensures that the learned value function respects the limits of the state space. In our case, this includes a Neumann slope condition at the borrowing constraint a ≥ a. As described in section 3.1, the boundary constraint at the lower bound of wealth is given by
La
BC = E(z,t)∼D[∂avˆθ(a, z, t) − u′(μa(a, z, t)]2. (16)
We also impose Neumann constraints on the upper bound of a, and the bounds of z
La ̄
BC = E(z,t)∼D[∂avˆθ( ̄a, z, t)]2. (17)
Lz ̄
BC = E(z,t)∼D[∂zvˆθ(a, z ̄, t)]2. (18)
Lz
BC = E(z,t)∼D[∂zvˆθ(a, z, t)]2. (19)
7

This work is shared under a CC BY-NC 4.0 license.
4.2.4 Physics (Economic) Constraints
We enforce economic regularities for the form of the value function through an additional loss term to ensure monotonicity and concavity. Monotonicity is enforced by
Lphys = E(a,z,t)∼D min(0, ∂avˆθ(a, z, t)) 2 (20)
Under some preferences, such as CRRA, the value function is strictly concave in wealth. As such, impose restrictions on the second derivative by
Lphys = E(a,z,t)∼D max(0, ∂aavˆθ(a, z, t)) 2 (21)
An alternative to specifying such constraints is to impose restrictions on the weights of the HJB-PINN, by, for example, an input-concave neural network as described in [14].
4.3 Estimating of the density g(z, a, t) from the KF equation
Let φν(a, z, t) denote the output of the KF-PINN and set gˆν(·) := softplus(φν(·)) to ensure that the density is strictly positive.
4.3.1 PDE Loss
The residual loss resulting from the KF PDE is given by
LKF
PDE = E(a,z,t)∼D
h
∂tgˆν (a, z, t)+∂a[μ∗
a(a, z, t)gˆν (a, z, t)]+∂z[μz(z)gˆν (a, z, t)]− 1
2 ∂zz[σ2
z gˆν (a, z, t)]
i2
(22)
where μ∗a(a, z, t) is the savings under the optimal consumption given the value function computed by HJB-PINN.
4.3.2 Mass-Conservation Penalty
To enforce the normalisation condition such that we have a proper probability density for gˆν(a, z, t) the mass must integrate to one, such that
Lmass =
Z
a,z∼Dmesh
gˆν(a, z, t)dadz − 1
2
(23)
this is numerically estimated by a fine mesh grid.
4.4 Estimating aggregate capital K, and updating r and w
We compute and update the aggregate K, as given by equation (5) by generating a mesh grid, and update r and w based on the known production function.
5 Experiments
5.1 Setup
We follow [1] for the parmeters of the model economy.
Individuals. We take the utility function to be the standard CRRA, u(c) = c1−γ
1−γ , γ > 0, with γ = 2.
Optimal consumption is then c∗(a, z, t) = [va(a, z, t)]−1/γ. The process is assumed to be simple Brownian motion dzt = σzdWt reflected at z and z ̄, where σz = 0.02, z = 0.5 z ̄ = 1.5. and assume the discount rate to be ρ = 0.05. We set the domain for the PDEs as a = 0, a ̄ = 5, z = 0.5, z ̄ = 1.5, T = 10. We assume all individuals have initial wealth distributed by a Gaussian with mean 1.0 and standard deviation 0.2.
Firms. The production function is assumed to have Cobb-Douglas form F (K, L) = KαL1−α. With labour normalised to 1, L = 1 we have F (K, 1) = Kα and the implied pricing formulas are w = (1−α)Kα and r = αKα−1 − δ. We assume α = 0.3, δ = 0.05.
8

This work is shared under a CC BY-NC 4.0 license.
5.2 Implementation
The value function vˆθ(a, z, t) and the density function gˆν(a, z, t) are each approximated using fully connected neural networks with 3 hidden layers of 128 units and hyperbolic tangent (tanh) activation functions. To ensure non-negativity of the density, the output of the KF-PINN is passed through a softplus activation. We assume a heuristic initial condition for the value function as v(a, z, t = 0) = log(1+a+z2), chosen for numerical convenience. This is chosen for the following reasons: it is -
infinitely differentiable in both a and z, which helps automatic differentiation and improves stability when training the HJB-PINN; it is strictly increasing in a and z; it avoids singularities at the boundaries; and has a non-trivial gradient. No formal terminal condition is imposed at t → ∞. The robustness of the result to this heuristic is left for the future iteration of this work. We take the weights in the loss function to be 1.0 for the initial condition losses and the mass loss, and set th-
e rest at 0.1. At each step, we sample 100 points from a grid of size 11 for each of the inputs to obtain the PDE residuals. To improve stability and interpretability, the training loop is divided into two phases: in the first phase, only the HJB-PINN is trained while the interest rate and wage are fixed at initial values; in the second phase, the full equilibrium system is solved, allowing both the value and density networks to be trained jointly, and updating prices endogenously to match aggrega-
te capital. The first phase is 2, 500 steps. We train for a total of 25, 000 steps, where for the first 7, 500 steps, we train using the Adam optimiser [23], after which we switch to SGD [30]. We clip gradients to stabilise training. To reduce the computational burden, we perform the equilibrium update every 5 steps.
5.3 Preliminary Results
We present the fitted functions for time periods 1, 2, 5, and 9 in Figures 1, 2, 3 and 4, respectively. The top-left panel of each figure depicts the value function, v(a, z, ·), which consistently shows that agent utility increases with both wealth a and productivity z, reflecting the diminishing marginal utility of wealth through its concave shape. Correspondingly, the middle panel displays the consumption function, c(a, z, ·), where consumption is also an increasing function of both wealth and p-
roductivity. The rightmost panel, a central element of the analysis, shows the density function, g(a, z, ·), which captures the distribution of agents across different states. Over time, the plots for t = 1, 2, and 5 demonstrate a clear shift in this distribution: the initial, more dispersed distribution of agents concentrates into a single, prominent peak as the economy matures. This evolution of the density function represents the aggregate outcome of individual agents optimizing their consumpti-
on and saving decisions, ultimately leading to a more concentrated and stable distribution of wealth and productivity as the economy converges toward its long-run equilibrium. We also see that low-productivity individuals tend to be concentrated at the lower end of the wealth distribution. Since their wage income is lower due to their productivity shock, their ability to save is more limited. While the entire economy sees an overall increase in average wealth and the density function shifts to the-
 right, a significant portion of the population, specifically those with lower productivity, remains at a lower level of accumulated wealth. The two-peak structure visible in the density plots, especially in the earlier time steps, illustrates this: one peak represents the concentration of individuals with higher productivity and wealth, while the other represents the concentration of individuals with lower productivity and wealth.
9

This work is shared under a CC BY-NC 4.0 license.
Figure 1: Value, consumption and density functions as trained by ABH-PINN at t = 1.
Figure 2: Value, consumption and density functions as trained by ABH-PINN at t = 2.
10

This work is shared under a CC BY-NC 4.0 license.
Figure 3: Value, consumption and density functions as trained by ABH-PINN at t = 5.
Figure 4: Value, consumption and density functions as trained by ABH-PINN at t = 9.
The plots in Figure 5 depict the evolution of capital, output, wages, and the interest rate over time. The top-left panel shows the evolution of capital, K(t), indicating a steady increase in capital over time, starting from an initial value around 1.0 and asymptotically approaching a higher steady-state level of 2.46. This upward trend signifies capital accumulation. The top-right panel displays output, Y (t), or Gross Domestic Product (GDP), mirroring the capital accumulation trend, output also -
rises over time. This positive relationship is consistent with standard economic theory. The bottom-left panel shows the trajectory of wages, w(t). As the capital stock increases, the marginal product of labour also rises, leading to an increase in wages. The plot shows that wages grow steadily over the time period. This reflects the increasing productivity of labour due to a more capital-intensive economy. The bottom-right panel presents the behaviour of the interest rate, r(t). In contrast to th-
e other variables, the interest rate declines over time. As the capital stock grows, the marginal return to an additional unit of capital diminishes, causing the interest rate to fall to its steady state value of 0.1095. This dynamic is a classic feature of the neoclassical growth model, where capital accumulation drives down the return on capital.
11

This work is shared under a CC BY-NC 4.0 license.
Figure 5: Computed time paths.
6 Conclusion and Discussion
This paper proposes a mesh-free method, the ABH-PINN solver, for solving continuous-time heterogeneous agent macroeconomic models, using PINNs. By embedding the HJB and KF equations directly into the training objectives of neural networks, the ABH-PINN solver provides a potentially scalable and flexible alternative to traditional grid-based solvers. The use of PINNs opens promising avenues for addressing long-standing challenges in macroeconomic modelling. The method looks to address the curse of -
dimensionality, allowing future work to incorporate additional state variables such as multiple assets, aggregate risk, housing, or human capital without significant loss of tractability. Moreover, the smoothness and differentiability of the learned policy and distribution functions make PINNs particularly well-suited for applications in policy simulation, sensitivity analysis, and estimation. The preliminary results have shown the ability of PINNs to produce economically plausible results. We pla-
n to extend these results to the economic setup in [2] and compare our results to the FD solver, as well as test the robustness of this method and the computational burden as we increase additional state variables. An important direction for future work is to incorporate empirical data and evaluate the ability of the model to match observed wealth distributions and consumption responses. Incorporating government policy, aggregate shocks, portfolio choice, and more realistic liquidity constraints w-
ould enable the model to better match empirical data and provide deeper policy insights. In addition, integrating shape constraints via input-concave neural architectures could improve training stability and convergence. Beyond the canonical ABH framework, this method provides a template for solving a wider class of economic models governed by complex PDE systems. As such, we are excited by the potential for the ABH-PINN solver to contribute both to computational economics and to the growing liter-
ature on scientific machine learning, demonstrating how structure-aware neural networks can advance economic modelling at the frontier of theory and computation.
12

This work is shared under a CC BY-NC 4.0 license.
Acknowledgments
The author gratefully acknowledges the contributions of Tomas Kreuzinger, whose Master’s thesis at the University of Cambridge laid the initial groundwork for this research.
References
[1] Y. Achdou, J. Han, J.-M. Lasry, P.-L. Lions, and B. Moll. Heterogeneous agent models in continuous time. Preprint, 14, 2014.
[2] Y. Achdou, J. Han, J.-M. Lasry, P.-L. Lions, and B. Moll. Income and wealth distribution in macroeconomics: A continuous-time approach. The review of economic studies, 89(1):45–86, 2022.
[3] S. Ahn, G. Kaplan, B. Moll, T. Winberry, and C. Wolf. When inequality matters for macro and macro matters for inequality. NBER macroeconomics annual, 32(1):1–75, 2018.
[4] S. R. Aiyagari. Uninsured idiosyncratic risk and aggregate saving. The Quarterly Journal of Economics, 109(3):659–684, 1994.
[5] A. Auclert, B. Bard ́oczy, M. Rognlie, and L. Straub. Using the sequence-space jacobian to solve and estimate heterogeneous-agent models. Econometrica, 89(5):2375–2408, 2021.
[6] Y. Bai, T. Chaolu, and S. Bilige. The application of improved physics-informed neural network (ipinn) method in finance. Nonlinear Dynamics, 107(4):3655–3667, 2022.
[7] A. G. Baydin, B. A. Pearlmutter, A. A. Radul, and J. M. Siskind. Automatic differentiation in machine learning: a survey. Journal of machine learning research, 18(153):1–43, 2018.
[8] T. Bewley. The permanent income hypothesis: A theoretical formulation. Journal of Economic Theory, 16(2):252–292, 1977.
[9] V. Capasso, R. Engbers, and D. La Torre. On a spatial solow model with technological diffusion and nonconcave production function. Nonlinear Analysis: Real World Applications, 11(5):3858–3876, 2010.
[10] M. De Nardi. Wealth inequality and intergenerational links. The Review of Economic Studies, 71(3):743–768, 2004.
[11] M. De Nardi. Quantitative models of wealth inequality: A survey. 2015.
[12] J. Fern ́andez-Villaverde, S. Hurtado, and G. Nuno. Financial frictions and the wealth distribution. Econometrica, 91(3):869–901, 2023.
[13] F. Gatta, V. S. Di Cola, F. Giampaolo, F. Piccialli, and S. Cuomo. Meshless methods for american option pricing through physics-informed neural networks. Engineering Analysis with Boundary Elements, 151:68–82, 2023.
[14] M. Grzeskiewicz. Uncovering utility functions from observed outcomes. arXiv preprint arXiv:2503.13432, 2025.
[15] D. Hainaut and A. Casas. Option pricing in the heston model with physics inspired neural networks. Annals of Finance, 20(3):353–376, 2024.
[16] K. Hornik, M. Stinchcombe, and H. White. Multilayer feedforward networks are universal approximators. Neural networks, 2(5):359–366, 1989.
[17] W. Hu. A new method to solve the forward and inverse problems for the spatial solow model by using physics informed neural networks (pinns). Engineering Analysis with Boundary Elements, 169:106013, 2024.
[18] M. Huggett. The risk-free rate in heterogeneous-agent incomplete-insurance economies. Journal of Economic Dynamics and Control, 17(5):953–969, 1993.
[19] K. L. Judd. Numerical methods in economics. MIT press, 1998.
13

This work is shared under a CC BY-NC 4.0 license.
[20] S. Kabanikhin, O. Krivorotko, Z. Bektemessov, M. Bektemessov, and S. Zhang. Differential evolution algorithm of solving an inverse problem for the spatial solow mathematical model. Journal of Inverse and Ill-posed Problems, 28(5):761–774, 2020.
[21] G. Kaplan, B. Moll, and G. L. Violante. Monetary policy according to hank. American Economic Review, 108(3):697–743, 2018.
[22] G. Kaplan and G. L. Violante. A model of the consumption response to fiscal stimulus payments. Econometrica, 82(4):1199–1239, 2014.
[23] D. P. Kingma and J. Ba. Adam: A method for stochastic optimization, 2017.
[24] P. Krusell and A. A. Smith, Jr. Income and wealth heterogeneity in the macroeconomy. Journal of political Economy, 106(5):867–896, 1998.
[25] J.-M. Lasry and P.-L. Lions. Mean field games. Japanese journal of mathematics, 2(1):229–260, 2007.
[26] B. Moll. Productivity losses from financial frictions: Can self-financing undo capital misallocation? American Economic Review, 104(10):3186–3221, 2014.
[27] S. M. Nuugulu, K. C. Patidar, and D. T. Tarla. A physics informed neural network approach for solving time fractional black-scholes partial differential equations. Optimization and Engineering, pages 1–30, 2024.
[28] M. Raissi, P. Perdikaris, and G. Karniadakis. Physics-informed neural networks: A deep learning framework for solving forward and inverse problems involving nonlinear partial differential equations. Journal of Computational Physics, 378:686–707, 2019.
[29] M. O. Ravn and V. Sterk. Job uncertainty and deep recessions. Journal of Monetary Economics, 90:125–141, 2017.
[30] H. Robbins and S. Monro. A stochastic approximation method. The annals of mathematical statistics, pages 400–407, 1951.
[31] R. Tanios. Physics informed neural networks in computational finance: High dimensional forward & inverse option pricing. Master’s thesis, ETH Zurich, 2021.
14

---

## Processing Information

- **Processing Library:** Zotero PDFWorker
- **Processing Date:** 2026-02-10T18:17:38.161Z
- **Text Length:** 43738 characters
- **Success:** Text extraction completed
- **PDF Library Used:** Zotero PDFWorker
- **Pages Processed:** 14 of 14
