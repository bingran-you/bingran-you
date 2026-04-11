# PDF Document: Zhang et al. - 2025 - Exact Terminal Condition Neural Network for American Option Pricing Based on the Black-Scholes-Merto.pdf

**File Path:** Zhang et al. - 2025 - Exact Terminal Condition Neural Network for American Option Pricing Based on the Black-Scholes-Merto.pdf

**Processed Date:** 2026-02-10T18:15:30.978Z

**File Size:** 8883.67 KB

**Total Pages:** 32

**Extracted Pages:** 32

**PDF Library:** Zotero PDFWorker

**Attachment Item ID:** 3603

**Title:** Exact Terminal Condition Neural Network for American Option Pricing Based on the Black-Scholes-Merton Equations

**Collection:** Large Files > Random Papers

---

## Extracted Text Content

Exact Terminal Condition Neural Network for American Option Pricing
Based on the Black-Scholes-Merton Equations
Wenxuan Zhanga,c,1, Yixiao Guob,c,1, Benzhuo Lua,c,∗
aSKLMS, ICMSEC, NCMIS, Academy of Mathematics and Systems Science, Chinese Academy of Sciences, Beijing 100190, China bSKLMS, Institute of Computational Mathematics and Scientific/Engineering Computing, Academy of Mathematics and Systems Science, Chinese Academy of Sciences, Beijing 100190, China cSchool of Mathematical Sciences, University of Chinese Academy of Sciences, Beijing 100049, China
Abstract
This paper proposes the Exact Terminal Condition Neural Network (ETCNN), a deep learning framework for accurately pricing American options by solving the Black-Scholes-Merton (BSM) equations. The ETCNN incorporates carefully designed functions that ensure the numerical solution not only exactly satisfies the terminal condition of the BSM equations but also matches the non-smooth and singular behavior of the option price near expiration. This method effectively addresses the challenges posed by the-
 inequality constraints in the BSM equations and can be easily extended to high-dimensional scenarios. Additionally, input normalization is employed to maintain the homogeneity. Multiple experiments are conducted to demonstrate that the proposed method achieves high accuracy and exhibits robustness across various situations, outperforming both traditional numerical methods and other machine learning approaches.
Keywords:
Black-Scholes-Merton equations, American option pricing, Deep learning, Exact terminal condition, Singularity
1. Introduction
Options are an important class of financial derivatives, and their valuation is a central issue in quantitative finance. Fairly pricing options has been a longstanding challenge, especially for complex options. Since Black, Scholes, and Merton proposed the revolutionary Black-Scholes-Merton (BSM) model [27, 33], the field of option pricing has experienced rapid and significant development. However, explicit analytical solutions to the BSM equations are available only for a limited number of cases,-
 such as single-asset European options [27, 33], European options on the maximum or minimum of two assets without dividends [25], European options to exchange one asset for another [17], and certain European lookback options [5]. For most other types of options, pricing still relies on numerical and approximate methods. The pricing of American options is inherently more complicated than that of European options, as option holders have the right to exercise their options at any time prior to expira-
tion. Explicit solutions for American options are generally far from available. As a result, numerical approximation techniques, such as the Barone-Adesi-Whaley (BAW) method, the binomial tree (BT) model, finite difference (FD) methods, and Monte Carlo (MC) simulations, are widely employed in the industry to price American options. By dropping a small term in the partial differential equation (PDE), Barone-Adesi and Whaley derived an analytical
∗Corresponding author
Email addresses: zhangwenxuan17@mails.ucas.ac.cn (Wenxuan Zhang), guoyixiao@lsec.cc.ac.cn (Yixiao Guo), bzlu@lsec.cc.ac.cn (Benzhuo Lu)
1These authors contributed equally.
arXiv:2510.27132v1 [q-fin.CP] 31 Oct 2025

approximation for American options within the BSM framework [4]. An early attempt using the binomial tree model was made by Cox, Ross, and Rubinstein (CRR model) [21], while [19, 30, 20, 31] proposed some advanced tree methods that converge faster. Brennan and Schwartz proposed a finite difference method for solving the BSM equations for American put options [18]. Broadie and Glasserman developed a general algorithm based on Monte Carlo simulation to price options [35]. Longstaff and Schwartz fur-
ther refined this approach by introducing the Least Squares Monte Carlo (LSM) method, which prices American options by replacing the future expectation with a least squares interpolation [26]. Compared to single-asset options, multi-asset options are more complicated to price since there are more sources of randomness to consider. Numerous attempts have been made to employ numerical methods to price them. The BEG method, introduced by Boyle, Evnine, and Gibbs, utilized the binomial tree method for-
 multi-asset scenarios by incorporating correlated asset price paths across multiple dimensions [28]. The finite difference method can also be applied in high-dimensional situations [34]. However, both the binomial tree (BT) and finite difference (FD) methods become computationally expensive when extended to highdimensional cases, especially when more than three underlying assets are involved [32]. Monte Carlo (MC) simulations can be more easily applied in high-dimensional cases, but they suffer f-
rom slow convergence rates and face difficulties in accurately addressing the free boundary issue inherent in American options [35]. To address these challenges, deep learning approaches have emerged as promising alternatives in recent years. Dhiman and Hu applied physics-informed neural network (PINN) [1] to solve BSM equations for singleasset options [6], while Gatta et al. extended PINN to multi-asset American put options [37]. Sirignano and Spiliopoulos explored the multi-asset BSM equations u-
sing the deep Galerkin method (DGM) with similar loss functions [46]. The deep parametric PDE method [9], developed by Glau and Wunderlich, trains neural networks to approximate BSM solutions across a wide range of input parameters. Another influential framework, the deep BSDE method, developed by Han, Jentzen, and E [7], reformulates the PDE as a backward stochastic differential equation. This method has been extended to multi-asset American options by Negyesi and Oosterlee [8]. However, the deep-
 BSDE framework is limited to producing solutions at individual points, rather than pricing the entire surface. In this paper, we focus on American options and provide approximate solutions over the spatial-temporal domain. The problem is formulated as a partial differential equation (PDE) in a linear complementarity form, which includes both equalities and inequalities, as well as a terminal boundary condition. Two primary challenges arise when solving these equations. First, the presence of ineq-
ualities complicates the solution process, as the problem can be reformulated as a Stefan-type free-boundary problem, where the boundaries are unknown [10]. Second, singular behaviors may arise near maturity due to the non-differentiability of the payoff function. These singularities cause the derivative of the option price to approach infinity near the terminal, posing challenges for directly using neural network methods to obtain high-accuracy solutions. As shown in our experiments in Section 4,-
 the accuracy of the solution deteriorates significantly near these critical points if singularities are not appropriately addressed. To address these challenges, we introduce the Exact Terminal Condition Neural Network (ETCNN), a deep learning method designed to automatically satisfy the terminal condition. The primary approach involves constructing a function g2 that exactly satisfies the terminal condition. The solution is then formulated as the sum of g2 and the product of a certain function g-
1 and a neural network approximation, where g1 vanishes at the terminal. However, our experiments indicate that not all functions satisfying the terminal conditions necessarily yield higher accuracy. The effectiveness of the method is heavily dependent on the smoothness and structure of the residual difference between the true solution and the chosen function g2. Therefore, g2 is carefully constructed not only to satisfy the terminal condition, but also to preserve the differentiability characteri-
stics of the exact solution and exhibit appropriate asymptotic behavior as time approaches expiration. We provide both mathematical analysis and financial interpretations for designing suitable forms of g2 applicable to a wide range of American option pricing scenarios. Additionally, we design an input normalization layer to normalize the underlying asset prices in the input vector of the network, which can further improve the accuracy of the model. Our approach has the following primary advantage-
s. First, compared to PINN, ETCNN fully aligns with the true solution at the terminal, eliminating boundary condition errors associated with collocation methods and significantly improving solution accuracy. Second, our network eliminates the need to include the
2

boundary term in the objective loss function. This removes the hyperparameter assigned to the weight of the boundary loss term, thus simplifying hyperparameter tuning and reducing training complexity. Third, the method effectively addresses the free-boundary challenge inherent in BSM equations for American options. Rather than directly solving for the free boundary, it enables an accurate determination of the boundary in an indirect way. Fourth, ETCNN accurately captures the singularity behavior -
near the terminal, enhancing solution precision in these critical regions. Finally, our method can be easily extended to high-dimensional cases, maintaining high accuracy in complex multi-asset scenarios where traditional methods are often ineffective. We conduct extensive experiments on both single-asset and multi-asset American options, corresponding to low-dimensional and high-dimensional BSM equations. These experiments consider various terminal boundary conditions and a wide range of equation-
 coefficients, highlighting the universality and robustness of our method. The results demonstrate that our ETCNN improves accuracy by 1-2 orders of magnitude compared to PINN and achieves or even exceeds the accuracy of traditional numerical methods in low-dimensional cases. Moreover, in high-dimensional scenarios where traditional methods face significant challenges, our approach consistently achieves high accuracy. The structure of this paper is organized as follows. Section 2 introduces the ma-
thematical formulation of the BSM model for option pricing and provides an overview of the PINN framework. Section 3 presents the architecture of the ETCNN, key criteria for designing the exact terminal function g2, and the methodological formulation for American options. Section 4 reports the result of numerical experiments, and compares the performance of our method with PINN and other numerical approaches. Finally, Section 5 summarizes our work and outlines potential directions for future resea-
rch.
2. Preliminaries
2.1. BSM Equations for Option Pricing
This section presents the BSM equations for option pricing problems. Section 2.1.1 introduces the BSM equations for European options, which have the simplest form of these equations. Section 2.1.2 to 2.1.4 focuses on the BSM equations for American options, which are the central theme of this article. These sections will cover low and high-dimensional forms, along with a discussion of their properties.
2.1.1. BSM Equations for European Options
This model includes two types of assets, risk-free assets and risky assets. The value of risk-free assets can be described by a deterministic process,
dR(t) = rR(t)dt,
where r is the risk-free rate and is assumed to be a constant under the BSM model. Risky assets typically serve as the underlying assets for options contracts and include different financial products such as stocks, stock indices, and futures. The BSM model assumes that the value of risky assets s = S(t) follows a geometric Brownian motion,
dS(t) = μS(t)dt + σS(t)dW (t),
where μ is the drift, σ > 0 is the volatility, and W (t) is a standard Brownian motion. Both σ and r are expressed in annualized terms. In the geometric Brownian motion framework, the drift and volatility are assumed to remain constant. Let V = V (s, t) = V (S(t), t) be the price of a single-asset European option. According to Itoˆ’s lemma,
dV (S(t), t) = ∂V
∂t + μS(t) ∂V
∂s + 1
2 σ2S(t)2 ∂2V
∂s2 dt + σS(t) ∂V
∂s dW (t).
To determine the price of an option with an underlying asset following the above geometric Brownian motion, a self-financing trading strategy is used. This strategy dynamically adjusts the risk-free asset and the underlying asset to replicate the option’s payoff profile. Let X(t) denote the value of a portfolio at time
3

t, consisting of ∆(t) shares of the underlying asset, with the remainder X(t)−∆(t)S(t) invested in a risk-free asset at rate r. The self-financing assumption implies that changes in the portfolio are solely attributed to gains or losses in the underlying securities, with no impact from changes in the holdings [29]. The change of the portfolio is
dX(t) = ∆(t)dS(t) + r(X(t) − ∆(t)S(t))dt
= rX(t) + (μ − r)∆(t)S(t) dt + σ∆(t)S(t)dW (t).
By selecting the hedge ratio ∆(t) and portfolio value X(t) such that the terminal payoff of X(T ) matches the payoff of the option V (T ) and ensuring dX(t) = dV (t) for all t, the portfolio value X(t) at any time t equals the option’s theoretical price. From this, we have the following equations,

    
    
∂V
∂t + μS(t) ∂V
∂s + 1
2 σ2S(t)2 ∂2V
∂s2 = rX(t) + (μ − r)∆(t)S(t),
σS(t) ∂V
∂s = σ∆(t)S(t),
X(t) = V (t).
By simplifying the above equations and considering the boundary conditions, the celebrated BSM equation for single-asset European options is obtained,



∂V
∂t + 1
2 σ2s2 ∂2V
∂s2 + rs ∂V
∂s − rV = 0, ∀s ≥ 0, t ∈ [0, T ),
V (s, T ) = Φ(s), ∀s ≥ 0.
(1)
The solution to this equation yields the price of European options. The boundary condition is applied at the expiration date t = T , thus it is referred to as a terminal condition. Φ(s) is the payoff of the function at t = T . Denote
x+ = max(x, 0) =
(
x if x ≥ 0,
0 if x < 0,
as an abbreviation. For European call options, Φ(s) = (s − K)+ and for European put options, Φ(s) = (K − s)+. Here, K is the strike price, which is predetermined in the contract. If the underlying asset pays a constant continuous dividend yield q, the BSM equation is modified as:



∂V
∂t + 1
2 σ2s2 ∂2V
∂s2 + (r − q)s ∂V
∂s − rV = 0, ∀s ≥ 0, t ∈ [0, T ),
V (s, T ) = Φ(s), ∀s ≥ 0.
Note that q only appears in the coefficients of the first-order derivative, but not in the coefficients of V . Therefore, it is not simply a replacement of r with r − q.
2.1.2. BSM Equations for American Options
American options differ from European ones in that they can be exercised early. The BSM equations for American options can be formulated similarly to Eq. (1), but with modifications to incorporate their early exercise feature. We define the following operator for the primary equation,
F V (s, t) = ∂V
∂t + 1
2 σ2s2 ∂2V
∂s2 + (r − q)s ∂V
∂s − rV. (2)
The terminal condition Φ(s) also represents the intrinsic value, as it is the payoff obtained by exercising the option immediately. The time value of the option is defined as the difference between an option price and its intrinsic value, expressed as follows,
T V V (s, t) = V (s, t) − Φ(s).
4

The time value of an American option must always be nonnegative to avoid risk-free arbitrage opportunities. Otherwise, arbitrageurs can buy options at price V (s, t), exercise them immediately to receive the payoff Φ(s), and secure a risk-free positive profit of Φ(s) − V (s, t). To prevent arbitrage opportunities, the price of American options V (s, t) satisfies the following linear complementarity conditions [36],

   
   
F V (s, t) ≤ 0, ∀s ≥ 0, t ∈ [0, T ), (3a)
T V V (s, t) ≥ 0, ∀s ≥ 0, t ∈ [0, T ), (3b)
F V (s, t) · T V V (s, t) = 0, ∀s ≥ 0, t ∈ [0, T ), (3c)
V (s, T ) = Φ(s), ∀s ≥ 0, (3d)
These complementarity conditions introduce additional complexities compared to Eq. (1). Specifically, they contain inequality constraints that complicate both analytical and numerical methods. Moreover, Eq. (3c) ensures that at least one of the inequalities must hold with equality, but the specific regions where each inequality becomes an equality are unknown in advance. Additionally, Φ(s) is typically non-differentiable, which adds further challenges in numerical approximation.
2.1.3. Free Boundary Property in American Options
The inequality constraints give rise to the free boundary problem, which poses a significant challenge in the valuation of American options. To illustrate this, consider the case of an American put option. When the price of the underlying asset s is low enough, immediate exercise of the option yields a payoff that exceeds the expected benefit of holding the option. This region is referred to as the stopping region. There exists a function S∗(t), which defines the stopping region as the set of poin-
ts below its curve,
S = {0 ≤ s ≤ S∗(t), 0 ≤ t ≤ T } = {(s, t) : V (s, t) = (K − s)+}.
The complementary region is called the continuation region, denoted by
C = {s > S∗(t), 0 ≤ t ≤ T } = {(s, t) : V (s, t) > (K − s)+}.
However, S∗(t) is an unknown function, thus, its function curve is called a free boundary. In the stopping region, Eq. (3b) holds equal. If (s, t) falls into this area, the optimal strategy for the option holder is to exercise the option immediately. Hence, S∗(t) is also referred to as the optimal exercise boundary [37]. Conversely, in the continuation region, Eq. (3a) holds equal and V (s, t) > (K − s)+. In this region, the holder will choose to hold the option. S∗(t) represents the maximum price-
 at which the holder will choose to exercise the option early, i.e.
S∗(t) = sup{s ∈ R+ : V (s, t) = (K − s)+}. (4)
For American call options, a free boundary is similarly defined. Unlike put options, the region above the boundary represents the stopping region, while the region below corresponds to the continuation region.
S = {s ≥ S∗(t), 0 ≤ t ≤ T } = {(s, t) : V (s, t) = (s − K)+},
C = {0 ≤ s < S∗(t), 0 ≤ t ≤ T } = {(s, t) : V (s, t) > (s − K)+},
S∗(t) = inf{s ∈ R+ : V (s, t) = (s − K)+}. (5)
We plot the free boundary for both American put and call options in Figure 1, using the solution obtained from the binomial tree method with N = 4000 as the reference solution. The free boundary S∗(t) is then calculated by Eq. (4) and (5). The uncertainty of S∗(t) turns it into a free boundary problem, making the pricing of American options more complex than European options. Eq. (3a) - (3d) has no explicit analytical solutions and must therefore be solved by numerical methods.
5

(a) (b)
Figure 1: Free boundary for American options obtained by binomial tree method. (a), Free boundary for American put option with K = 100, r = 0.02, σ = 0.25, T = 1, q = 0. (b), Free boundary for American call option with K = 200, r = 0.05, σ = 0.25, T = 2, q = 0.03.
2.1.4. High-Dimensional BSM Equations for Multi-Asset Options
In addition to single-asset options, the BSM model can be extended to high-dimensional multi-asset models. This section focuses on the BSM framework for options on n underlying assets. The price dynamics of these assets are described by the following n-dimensional geometric Brownian motions in the risk-neutral form [47],
dSi(t) = (r − qi)Si(t)dt + σiSi(t)dWi, (6)
where r is the risk-free rate, σi is the volatility of the i-th asset, and qi is the dividend yield. T is the expiration date. {Wi} are n standard Brownian motions with instantaneous coefficients of correlation denoted by ρij,
dWidWj = ρijdt. (7)
We consider an American option with a payoff function Φ = Φ(S1(t), · · · , Sn(t)). Then the value of this American option of n underlying assets V = V (s1, · · · , sn, t) satisfies the following BSM model [43, 44],

   
   
F V (s1, · · · , sn, t) ≤ 0, ∀si ≥ 0, t ∈ [0, T ),
T V V (s1, · · · , sn, t) ≥ 0, ∀si ≥ 0, t ∈ [0, T ),
F V (s1, · · · , sn, t) · T V V (s1, · · · , sn, t) = 0, ∀si ≥ 0, t ∈ [0, T ),
V (s1, · · · , sn, T ) = Φ(s1, · · · , sn), ∀si ≥ 0,
where in the multi-asset cases, the operators are defined as follows,
F (V (s1, · · · , sn, t)) = ∂V
∂t + 1
2
n
X
i,j=1
σiσj ρij sisj
∂2V ∂si∂sj
+
n
X
i=1
(r − qi)si
∂V ∂si
− rV. (8)
T V V (s1, · · · , sn, t) = V (s1, · · · , sn, t) − Φ(s1, · · · , sn).
In practice, there are various types of American multi-asset options with different payoff functions Φ(s1, · · · , sn). Common types of payoffs include options based on the maximum or minimum of several asset prices, spread options that consider the difference between two prices, and portfolio options that average prices. Contingent claims with these features are prevalent in financial exchanges, over-the-counter transactions, cash flows resulting from corporate investment decisions, and executive-
 compensation plans [11]. Table 1 provides examples of some commonly used American multi-asset options.
6

Table 1: Different types of multi-asset options and their payoff functions
Type of option Φ(s1, · · · , sn) Type of option Φ(s1, · · · , sn)
Call-on-max [15] max{si}n
i=1 − K + Call on geometric mean [48] (
n
Q
i=1
si) 1
n −K +
Call-on-min [15] min{si}n
i=1 − K + Call on arithmetic mean [46] ( 1
n
n
P
i=1
si) − K +
Put-on-max [14] K − max{si}n
i=1
+ Put on geometric mean [47] K − (
n
Q
i=1
si) 1
n
+
Put-on-min [13] K − min{si}n
i=1
+ Put on arithmetic mean [45] K − ( 1
n
n
P
i=1
si) +
2.2. Physics-Informed Neural Networks
This section introduces the concept of Physics-Informed Neural Networks (PINN) [1] and discusses their modification for PDEs subject to inequality constraints, as encountered in the pricing of American options.
2.2.1. General Framework
In the context of PINN, partial differential equations in the following form are usually considered
G(u) = ut + N (u) = 0, ∀x ∈ D, t ∈ [0, T ),
subject to the initial and boundary conditions
(
u(x, 0) = g(x), ∀x ∈ D,
B(u) = 0, ∀x ∈ ∂D, t ∈ [0, T ],
where N [·] is a differential operator, B[·] is a boundary operator representing Dirichlet, Neumann, Robin, or periodic boundary conditions, and D is a subset of Rd. The purpose is to approximate the unknown solution u(x, t) by a deep neural network uθ(x, t), referred to as PINN, where θ is the parameter of the network. The model can be trained by minimizing the following composite loss function,
L(θ) = λf Lf (θ) + λicLic(θ) + λbcLbc(θ).
Each term is specifically defined as follows,
Lf (θ) = 1
Nf
Nf
X
i=1
|G (uθ (xi
f , ti
f ))|2,
Lic(θ) = 1
Nic
Nic X
i=1
|uθ (xi
ic, 0) − g(xi
ic)|2, (9)
Lbc(θ) = 1
Nbc
Nbc X
i=1
|B(uθ (xi
bc, ti
bc))|2.
Here {xi
f , ti
f }Nf
i=1 denotes the collocations points for G(u). {xi
ic, 0}Nic
i=1 and {xi
bc, ti
bc }Nbc
i=1 are collocations points for initial and boundary conditions. {λf , λic, λbc} are hyperparameters that assign weights to different loss terms.
2.2.2. Loss Design for PDEs with Inequalities
BSM equations for European options only contain equality constraints, such as Eq. (1). Therefore, the loss function adopts a structure similar to that of PINN,
L(θ) = λf Lf (θ) + λtcLtc(θ).
7

Here Ltc represents the terminal condition term, which is similar to Eq. (9),
Ltc(θ) = 1
Ntc
Ntc X
i=1
(uθ (xi
tc, T ) − Φ(xi
tc))
2
.
To address the challenges posed by inequalities in the system of Eq. (3a)-(3d) for American options, we modify the loss function as follows,
L(θ) = λbsLbs(θ) + λtvLtv(θ) + λeqLeq(θ) + λtcLtc(θ),
where {λbs, λtv, λeq, λtc} are hyperparameters that assign weights to different loss terms. The first term Lbs is defined as
Lbs(θ) = 1
Nbs
Nbs X
i=1
max F uθ(si
bs, ti
bs) , 0
2
.
where F(V (s, t)) is defined in Eq. (2) for single-asset options and Eq. (8) for multi-asset options. si
bs is the vector of underlying asset prices at the i-th collocation point. Since the linear complementarity conditions require F (V ) ≤ 0, the term Lbs serves as a penalty to enforce this constraint. Specifically, Lbs imposes a penalty whenever the predicted value uθ results in F (uθ) > 0. When F (uθ) ≤ 0, this term degenerate to 0. The time value of American options should be nonnegative. Consequently, the loss term associated with this constraint is defined as follows,
Ltv(θ) = 1
Ntv
Ntv X
i=1
− min T V uθ(si
tv, ti
tv) , 0
2
.
Similar to Lbs, this term acts as a penalty term to enforce the non-negativity of the time value, ensuring it remains greater than or equal to zero. This term degenerates to 0 when this inequality is satisfied. To account for the equality in the linear complementarity conditions, we introduce a third term in the loss function defined,
Leq(θ) = 1
Neq
Neq X
i=1
F uθ(si
eq, ti
eq) · T V uθ(si
eq, ti
eq )
2
.
This loss term is designed to ensure that at least one of the inequalities is satisfied as an equality. By weighting and summing these four terms, the loss function for solving the system of inequality equations is obtained.
3. Methodology and Formulation
In this section, we present the methodological framework of the proposed Exact Terminal Condition Neural Network (ETCNN). Section 3.1 introduces the core idea of the ETCNN approach, followed by a description of the network architecture in Section 3.2 and the input normalization strategy in Section 3.3. Section 3.4 applies the proposed framework to a European option, serving as a toy model to illustrate the fundamental mechanism of the method. Finally, Section 3.5 extends the formulation to America-
n options, laying the foundation for the numerical experiments presented in Section 4.
3.1. Imposing Exact Terminal Conditions
As we will show in Figure 6, the standard PINN method suffers from low solution accuracy, partly due to the non-differentiability of terminal conditions at specific points and the near-singular behavior close to the terminal. To address these limitations, we propose the ETCNN in this section. The core idea of imposing the exact terminal conditions method is to choose a trial function that automatically satisfies the terminal condition to approximate the solution. The idea of embedding exact bounda-
ry conditions into neural network trial functions has been considered in prior studies [2, 24], and we build upon
8

this line of work by introducing a tailored design for the BSM equations. Consider a system of differential equations formulated as follows:
(
G(V (s, t)) = 0, ∀s ∈ D, t ∈ [0, T ),
V (s, T ) = Φ(s), ∀s ∈ D. (10)
where t is the current time, s is a scaler or a vector defined on a region D. The equality sign in the first line is not necessarily required and can be an inequality, similar to the BSM equation for American options. This equation is subject to some terminal condition function Φ(s). The trial solution is chosen as
u ̃NN (s, t) = g1(s, t)uNN (s, t) + g2(s, t).
where g1, g2 are constructed to satisfy specific constraints,
g1(s, T ) = 0, g2(s, T ) = Φ(s), ∀s ∈ D.
By this construction, the overall trial solution u ̃NN inherently satisfies the terminal conditions. The main advantage of this approach is that the resulting solution exactly satisfies the boundary conditions, thereby eliminating the errors in boundary condition enforcement that are typical of conventional PINNs and consequently improving solution accuracy. Another advantage is that our designed g2 is constructed to preserve key properties of the true solution. In addition to satisfying the termi-
nal conditions, it is desirable for g2 to ensure that the trial solution captures key properties of the true solution, such as smoothness and singular behaviors. True solutions are often non-differentiable at some points on the terminal but are smooth anywhere else. They also exhibit near-singularity near the terminal. Therefore, it is generally inappropriate to simply set g2(s, t) = Φ(s), as this function neither preserves the differentiability nor captures the singularities present in the true s-
olution. As demonstrated in Section 4.1, poor choice of g2 may even reduce the accuracy of the network. In the subsequent sections, we will discuss how to appropriately select g2 for the BSM equations for both European and American options.
3.2. Neural Network Structure
In the context of applying deep learning to solve partial differential equation problems, residual networks (ResNet) are commonly used for function approximation. Deep residual learning, introduced by He et al. [41], is a neural network architecture based on the concept of residual blocks. Each residual block consists of several fully connected layers, where the final output is computed by adding the input of the block to the output of its last layer. In this section, we provide an overview of the-
 ResNet structure and explain how it is adapted to satisfy accurate terminal conditions. Consider a ResNet containing M residual blocks, each consisting of L layers with n neurons per layer. When solving Eq. (10), suppose the input vector x = (s, t) has a dimension din. The network begins with a fully connected layer, transforming the input into an n-dimensional vector,
g(1,0)(x) = σ(W in · x + bin),
where W in ∈ Rn×din is a weight matrix, bin ∈ Rn is a bias vector and σ is the activation function. We use the tanh function in this work. Let g(m,0)(x) be the input of the m-th block, the structure of the m-th block is defined as follows,
f (m,l)
θ (x) = W (m,l) · g(m,l−1)(x) + b(m,l), g(m,l)(x) = σ(f (m,l)
θ (x)), 1 ≤ l ≤ L, 1 ≤ m ≤ M.
Here, W (m,l) ∈ Rn×n is the weight matrix in the l-th layer. b(m,l) ∈ Rn is the bias vector. The final output of the m-th block, which is the input of the next part, is
g(m+1,0)(x) = f (m,L)
θ (x) + g(m,0)(x), 1 ≤ m ≤ M
9

Finally, the output of the network is
fθ(x) = W out · g(M+1,0)(x) + bout. (11)
Here, W out ∈ Rdout×n, bout ∈ Rdout , where dout is the dimension of solution. Figure 2 illustrates the structure of a ResNet with parameters M = 2, L = 3, n = 5, din = 4 and dout = 1.
Figure 2: Structure of a ResNet with M = 2, L = 3, n = 5, din = 4, dout = 1.
In the exact terminal method, the output layer of the network is modified to ensure that the terminal conditions are satisfied, in a manner similar in [49]. The network architecture in front of the output layer remains unchanged, only the last layer is modified. For ResNet, Eq. (11) is modified as
fθ(x) = g1(x) · (W out · g(M+1,0)(x) + bout) + g2(x).
Here, g1 and g2 are functions that need to be assigned before training which satisfy the following conditions,
g1(x) = 0, g2(x) = Φ(s), ∀x = (s, T ) ∈ D × {T }.
Figure 3 shows the structure of our ETCNN.
Figure 3: Structure of our exact terminal method.
3.3. Input Normalization
We further investigate normalizing the input variables by transforming the asset price s into its moneyness, defined as the ratio s/K. This normalization ensures that the input variables are of similar orders of magnitude, as the time variable t is typically of order O(1) since the term of an option is usually a few months or years. A more significant reason to do such normalization lies in the homogeneity property of the option pricing function V with respect to s. When the option pricing formula-
 V is expressed as a function of asset price, strike price and time, it exhibits a homogeneous property [33],
α · V (s, K, t) = V (αs, αK, t)
This property can be easily derived from the characteristics of geometric Brownian motion. For the options under our consideration, a fixed strike price K is predetermined. Consequently, the solution depends on the ratio s/K.
10

The input normalization structure introduced in this section is designed to maintain this property for the neural network solution. When the input vector (s, t) enters the network, the asset price vector s is first normalized by dividing each of its dimensions by K, while the temporal component t remains unchanged. The normalized input (s/K, t) is then passed into the network. In this way, the output of the network will be a function of s/K. Figure 4 shows the overall structure of our ECTNN with -
an input normalization layer.
Figure 4: Structure of our exact terminal method with input normalization.
3.4. Illustrative Example: European Option
This example serves as a toy model for solving a basic BSM equation for pricing single-asset European options, which are the simplest type of option. We use this experiment to demonstrate the effectiveness of our ETCNN, to assess which network structures are most suitable, and to explore the criteria necessary for selecting exact terminal functions. These criteria will later be applied to provide exact terminal functions for American options, which are the primary focus of this article. Meanwhile,-
 the analytical solution for European options will serve as the foundation for determining exact terminal functions for American options in the next subsections. Single-asset European call options satisfy the following BSM equation,



F(V ) = ∂V
∂t + 1
2 σ2s2 ∂2V
∂s2 + rs ∂V
∂s − rV = 0, ∀s ≥ 0, t ∈ [0, T ),
V (s, T ) = (s − K)+, ∀s ≥ 0.
This equation has an explicit solution,
V (s, t) = s · N d1(s, τ, K) − Ke−rτ · N d2(s, τ, K) , (12)
where τ = T − t is the time to maturity. N (·) is the cumulative distribution function of the standard normal distribution. d1, d2 are defined as follows,
d1(s, τ, K) = 1
σ√τ ln s
K + (r + σ2
2 )τ , d2(s, τ, K) = d1(s, τ, K) − σ√τ = 1
σ√τ ln s
K + (r − σ2
2 )τ . (13)
When τ = 0, we define
N d1(s, 0, K) = N τli→m0 d1(s, τ, K) =

 
 
1, if s > K,
1
2 , if s = K,
0, if s < K.
We take K = 100, r = 0.05, σ = 0.15, T = 1 in this experiment. The strike price of options traded on exchanges usually does not deviate too much from the underlying assets’ prices. In this case, the network is
11

trained on [50, 150] × [0, T ] and evaluated on [80, 120] × [0, T ], which covers the vast majority of situations in actual transactions. The training domain is set slightly wider than the testing domain to ensure reliable accuracy within the region of practical interest. The terminal condition in this case is
Φ(s) = (s − K)+ = 1
2 (s − K +
p
s2 + K2 − 2sK).
To construct an appropriate g2, we slightly modify Φ(s) by introducing the time variable t and obtain a function on (s, t) that both satisfies the terminal conditions at t = T and is a differentiable function when t < T . A common technique in the analysis of European options at time t is to discount strike price K at a discount rate r to time t. Inspired by this, we naturally extend the idea of discounting K and define
g1(s, t) = T − t, g2(s, t) = 1
2 (s − K +
p
s2 + K2 − 2sKe−r(T −t)).
With this construction, the solution u ̃NN = g1 · uNN + g2 accurately satisfies the terminal condition u ̃NN (s, T ) = (s − K)+. Furthermore, u ̃NN retains non-differentiability at the point (K, T ) while remaining smooth elsewhere. This design ensures that u ̃NN matches the differentiability properties of the true solution. In this case, and throughout all experiments in Section 4, the Adam [3] optimization algorithm is employed to obtain the network parameters θ. The hyperparameter β in Adam den-
otes the pair of exponential decay rates (β1, β2) for the first- and second-moment estimates. In our implementation, we adopt the standard setting (β1, β2) = (0.9, 0.999). The learning rate lr starts at an initial value lrstart and decays exponentially with a decay factor γ. To be specific, each of our experiments involves 200,000 training iterations. During the first 40,000 iterations, the learning rate decays by a factor of γ every 2,000 iterations. In the remaining 160,000 iterations, the decay-
 occurs every 5,000 iterations. This two-stage schedule was empirically designed: the initial frequent decays help the network quickly reach a reasonable solution, while the subsequent slower decay pace allows for more precise convergence in the later stages of optimization. Both lrstart and γ are hyperparameters tuned for each experiment. Details of the hyperparameters {λ}, lrstart and γ will be provided in the context of individual experiments. For the toy model under consideration, the paramete-
rs are set as λf = 20, λtc = 1. For loss computation, Ntc = 1024 points are sampled to calculate Ltc, and Nf = 4Ntc to calculate Lf . Notably, ETCNN eliminates the need for tuning λtc. For consistency, ETCNN uses the same value of λf and Nf . The learning rate is initialized at lrstart = 0.01, with a decay factor of γ = 0.85. To evaluate the effectiveness of ETCNN and the impact of input normalization, we employ ResNet architectures with four and five blocks, where each block consists of two layer-
s, and each layer contains 50 neurons. Both configurations are tested with and without the input normalization layer. The performance is assessed by the L2 relative errors between the computed solutions and the exact solution. Each experiment is repeated three times, and the average results are reported. The outcomes are summarized in Table 2. The results demonstrate that applying exact terminal conditions significantly enhances accuracy, improving it by approximately one order of magnitude. Furth-
ermore, combining normalization with exact terminal conditions yields the best results. The performance of the 5-block network is comparable to that of the 4-block network. However, the 4-block network requires fewer parameters. This suggests that a 4-block network may represent an optimal choice for the number of blocks. Based on these findings, we adopt a 4-block ResNet for subsequent numerical experiments.
Table 2: Relative L2 error on PINN and ETCNN. Norm refers to the input normalization. Bold font represents the best result in each row.
ResNet PINN PINN+Norm ETCNN ETCNN+Norm
4-block 2.13 × 10−3 1.65 × 10−3 4.63 × 10−4 2.94 × 10-4
5-block 2.33 × 10−3 1.68 × 10−3 4.37 × 10−4 3.83 × 10-4
12

3.5. Methodological Formulation for American Options
The American BSM equation is more complex to solve due to inequality constraints. In order to improve the accuracy of the solution, it is necessary to carefully select g2. We propose the exact terminal conditions methods based on our understanding of the financial properties of options, and by borrowing knowledge from European options. It is natural to view the price of American options as the sum of the price of an equivalent European option and an early exercise premium. Several papers have prov-
ided a theoretical basis for this [38, 39, 40].
V a(s, t) = V e(s, t) + p(s, t),
where s ∈ Rn is the price of n underlying assets. V a(s, t) represents the price of the American option. V e(s, t) is the value of its corresponding European option, which shares the same parameters as the American option but can only be exercised at the expiration date. p(s, t) is the early exercise premium. Klimsiak and Rozkosz [22] provided an implicit integral representation for the premium p(s, t) under specific assumptions. If the terminal payoff Φ is a nonnegative continuous function and is-
 smooth on {V a(s, t) = Φ(s)} ∩ Rn × [0, t] for every t ∈ (0, T ), or Φ is a nonnegative convex function, then
p(s, t) = Et,s
"
ZT
t
e−r(u−t)I{V a(s(u), u) = Φ(s(u))}H(s(u), u)du
#
, (14)
where Et,s is the expectation under risk-neutral measure and I(·) is the indicator function. H(s, t) = −F(Φ(s(u), u)) where F is the PDE operator defined in Eq. (8). The region {V a(S(u), u) = Φ(S(u))} corresponds to the stopping region and is unknown since the free boundary S∗(t) is unknown. Note that V e(s, t) inherently satisfies the terminal condition, as the corresponding European option shares the same terminal condition. This observation naturally leads to the idea of extracting information-
 from V e(s, t) to construct g2(s, t). Furthermore, p(s, t) involves an integral over time. If p(s, t) does not include singular integrals or contains nearly singular terms with minimal impact after integration, then the singularities in V a(s, t) primarily originate from V e(s, t). Consequently, we design a function g2(s, t) that approximates V e(s, t), such that g2 satisfies exact boundary conditions while also incorporating the singularity in V e. This way, the remaining residue V a − g2 become-
s smooth, making it easier for the neural network to learn. The subsequent section provides detailed examples and the explicit construction of g2.
4. Numerical Results for American Options
To illustrate the broad applicability of our method, we consider four distinct examples in this section, each with different settings and parameters. Section 4.1 presents a single-asset American put option, while Section 4.2 studies single-asset American call options with dividends, including variations in volatility and dividend rates. We provide comparisons with traditional numerical methods for these two examples. Section 4.3 examines multi-asset options with a geometric-average payoff, conside-
ring different numbers of underlying assets, and Section 4.4 focuses on a two-asset call-on-max option with varying volatilities and dividend rates. Comparisons with traditional methods are not included in these two high-dimensional examples, as they become computationally infeasible. The parameters such as K, r, and ρ are chosen differently in these examples. By presenting this variety of examples with differing parameters and characteristics, we aim to demonstrate that the proposed method is rob-
ust and effective across a wide range of option types, dimensionalities, and market conditions. For all experiments in this section, we employ a ResNet architecture consisting of M = 4 blocks, where each block contains L = 2 layers with 50 nodes per layer. The hyperparameters are set as follows, λbs = λtv = λeq = λtc = 1, lrstart = 0.01, γ = 0.9. The ETCNN takes the same λbs, λtv and λeq. Additionally, the number of sampling points doubles every 80,000 iterations. Network architecture and hyperpar-
ameters were chosen based on standard practices in the literature and our own preliminary tests. Each experiment in this study is repeated three times, and the average results are reported to mitigate the stochastic effects of neural network training and ensure result reliability. All experiments are conducted on an NVIDIA A800 GPU.
13

4.1. Single-Asset American Put Options
This example considers a single-asset non-dividend-paying American put option. The value of the option V (s, t) satisfies the following complementarity conditions,

       
       
V (s, t) ≥ (K − s)+, ∀s ≥ 0, t ∈ [0, T ), (15a)
∂V
∂t + 1
2 σ2s2 ∂2V
∂s2 + rs ∂V
∂s − rV ≤ 0, ∀s ≥ 0, t ∈ [0, T ), (15b)
∂V
∂t + 1
2 σ2s2 ∂2V
∂s2 + rs ∂V
∂s − rV · V − (K − s)+ = 0, ∀s ≥ 0, t ∈ [0, T ), (15c)
V (s, T ) = (K − s)+. (15d)
The term (K −s)+ denotes the terminal payoff. We design some terminal functions g2 with specific properties to promote solution accuracy and stability.
4.1.1. Exact Terminal Function Design
As previously stated, the value of an American put option can be written as
V a(s, t) = V e(s, t) + p(s, t),
where V e(s, t) is the value of the corresponding European put. For simplicity of symbols, denote d ̃1 and d ̃2 as
d ̃1(s, τ, K) = − 1
σ√τ ln s
K + (r + σ2
2 )τ , d ̃2(s, τ, K) = − 1
σ√τ ln s
K + (r − σ2
2 )τ .
The value of the European option is given by
V e(s, t) = Ke−rτ · N d ̃2(s, τ, K) − s · N d ̃1(s, τ, K) . (16)
The term p(s, t) is the early exercise premium. In Eq. (14), for an non-dividend American put option, V a(S(u), u) = Φ(S(u)) means (S(u), u) is in the stopping region and H(s(u), u) = rK [16]. Thus, we have the following expression for the premium,
p(s, t) = Et,s
"
ZT
t
rKe−r(u−t)I{s(u) ≤ S∗(u)}du
#
= rK
ZT
t
e−r(u−t)N − 1
σ√u − t [ln s
S∗(u) + (r − σ2
2 )(u − t)] du
= rK
ZT
t
e−r(u−t)N (−d2(s, u − t, S∗(u)))du,
Here d2 is defined in Eq. (13). Therefore, the value of an American put option can be written as
V a(s, t) = V e(s, t) + rK
ZT
t
e−r(u−t)N (−d2(s, u − t, S∗(u)))du.
The unknown boundary S∗(t) satisfies the following nonlinear Volterra integral equation
K − S∗(t) = V e(S∗(t), t) + rK
ZT
t
e−r(u−t)N − 1
σ√u − t [ln S∗(t)
S∗(u) + (r − σ2
2 )(u − t)] du
= V e(S∗(t), t) + rK
ZT
t
e−r(u−t)N − d2(S∗(t), u − t, S∗(u)) du.
However, S∗(t) has no explicit formula and is challenging to determine, which makes it difficult to find p(s, t). As a result, the value function V a(s, t) lacks a closed-form analytical solution.
14

The properties of S∗(t) have been widely studied in the literature, with a key property being its continuity in t [16]. From the integral representation, p(s, t) is differentiable when t < T and vanishes at t = T . However, V e(s, t) exhibits two types of singularities. First, it is non-differentiable at s = K when t = T . Second,
it contains √τ in denominators, which approaches 0 as t → T . As a result, the term p(s, t) is relatively easy for neural networks to approximate, whereas V e(s, t) is challenging due to these singularities. Given that European options share the same terminal conditions as American options, the term V e(s, t) not only encapsulates the singularity of V a(s, t) but also adheres to the terminal conditions. To solve for V a(s, t), it is crucial to design a function g2 that satisfies two key properties-
. First, it exactly satisfies the terminal conditions. Second, it incorporates both types of singularities inherent in V e(s, t). Such design makes the residual component V a(s, t) − g2(s, t) smoother and easier for the neural network to approximate. A straightforward approach would be to set g2(s, t) = V e(s, t). However, directly calculating V e(s, t) is computationally expensive. Instead, g2(s, t) is constructed as approximations of V e(s, t) that retain the singularities and exactly satisfy th-
e terminal conditions, providing a more efficient and practical alternative. Consider the term
d ̃0(s, τ, K) = 1
2
hd ̃1(s, τ, K) + d ̃2(s, τ, K)
i
=− 1
σ√τ (ln s
K + rτ ).
The Taylor expansion of N (x) at d ̃0 can be written as
N (x) = N (d ̃0) + N ′(d ̃0)(x − d ̃0) + O(x − d ̃0).
Therefore N (d ̃1) and N (d ̃2) can be expanded as
N (d ̃1) = N (d ̃0) + N ′(d ̃0)(d ̃1 − d ̃0) + O(d ̃1 − d ̃0) = N (d ̃0) − σ
2
√τ N ′(d ̃0) + O(√τ ),
N (d ̃2) = N (d ̃0) + N ′(d ̃0)(d ̃2 − d ̃0) + O(d ̃2 − d ̃0) = N (d ̃0) + σ
2
√τ N ′(d ̃0) + O(√τ ).
Then the value of European put can be written as
V e(s, t) = Ke−rτ · N d ̃2(s, τ, K) − s · N d ̃1(s, τ, K)
= Ke−rτ · [N (d ̃0) + σ
2
√τ N ′(d ̃0) + O(√τ )] − s · [N (d ̃0) − σ
2
√τ N ′(d ̃0) + O(√τ )]
= N (d ̃0) · (Ke−rτ − s) + σ
2
√τ N ′(d ̃0) · (Ke−rτ + s) + O(√τ )
= N (d ̃0) · (Ke−rτ − s) + σ√τ
2√2π e− d ̃02
2 · (Ke−rτ + s) + O(√τ ).
Denote the first and second terms of the Taylor expansion of V e(s, t) as
Ve
1 (s, t) = N (d ̃0) · (Ke−rτ − s), V e
2 (s, t) = σ√τ
2√2π e− d ̃02
2 · (Ke−rτ + s),
The value of V e(s, t) is then expressed as
V e(s, t) = V e
1 (s, t) + V e
2 (s, t) + O(√τ ).
It is easy to prove that both V1e(s, t) and V1e(s, t) + V2e(s, t) satisfy the terminal condition (15d). Based on these observations, three candidate functions can be considered for the role of g2 in the exact terminal method, V1e(s, t), V1e(s, t) + V2e(s, t), and V e(s, t) itself. Both V1e and V1e + V2e preserve the non
differentiability at the terminal t = T . However, only V1e + V2e captures the singular behavior associated
with the denominator containing √τ as t → T . Consider the behavior of these functions as s = K when t → T . The option when s = K is called an at-the-money option. It is widely recognized in the literature
15

that at-the-money options nearing their expiration date tend to approximate the value of √12π sσ√τ [42].
For V1e and V1e + V2e, consider the behavior at s = K when t → T , and ignore higher-order terms than
√T − t = √τ ,
tli→mT V e
1 (s, t) = N (0) · K(e−r·0 − 1) = 0,
tli→mT V e
2 (s, t) = σ√τ
2√2π e− r2·0
2σ2 · K(e−r·0 + 1) = √12π Kσ√τ .
These results indicate that the behavior of V1e(s, t)+V2e(s, t) captures the singular features present in V e(s, t)
at s = K nearing t = T , while V1e(s, t) alone does not. Therefore, the residual part of V a subtracting V1e alone does not prevent the network from encountering challenges associated with learning the singular features. In summary, V1e(s, t) satisfies the terminal conditions, while V2e(s, t) captures the singular behavior of
the option value around s = K as t approaches the expiration T . The combination V1e(s, t) + V2e(s, t)
simultaneously satisfies the terminal conditions and matches the singularity of V e(s, t). Moreover, it has a lower computational cost than V e(s, t). Therefore, V1e(s, t) + V2e(s, t) is a suitable candidate for the exact terminal function g2(s, t). In the following analysis, we evaluate the performance of our ETCNN when g2 takes these three functions V1e, V1e + V2e, and V e separately to determine which function yields the best results through a comparative analysis.
(a) Total loss L for models with input normalization (b) Lbs for models with input normalization
(c) Ltv for models with input normalization (d) Leq for models with input normalization
Figure 5: Total loss and each loss terms for the four models.
16

4.1.2. Numerical Results
The parameters for the experiments are set as K = 100, r = 0.02, T = 1, σ = 0.25. To evaluate the performance of PINN and ETCNN, experiments are conducted using all three exact terminal functions as g2 to compare their effectiveness. We define g1(s, t) = T − t. The influence of input normalization on model performance is also examined. The binomial tree method with N = 4000 steps is employed to compute the reference solution, serving as the benchmark for accuracy evaluation. We take Ntc = 512 samp-
ling points to calculate Ltc, and Nbs = Ntv = Neq = 4Ntc to calculate the other three loss terms. Training is performed over the interval [20, 160] × [0, T ], with error evaluation focused on the subset [60, 120] × [0, T ]. We first analyze the evolution of the loss terms during the training process. The total loss, along with each individual loss term for the four models with input normalization, are illustrated in Figure 5. The last term Ltc = 0 is inherently satisfied in the exact terminal meth-
ods. Therefore we only present results for Lbs, Ltv and Leq. All plots are shown in logarithmic scale. The results reveal that employing the exact terminal function with either g2(s, t) = V1e(s, t) + V2e(s, t) or g2(s, t) = V e(s, t) significantly reduces the magnitude of each loss term. These values are several orders of magnitude smaller than those observed with PINN, demonstrating the effectiveness of the exact terminal methods. Additionally, ETCNN exhibits much faster convergence, achieving an-
 accuracy comparable to that of a PINN trained for 200,000 epochs within only 10,000 epochs. However, the performance of ETCNN with g2(s, t) = V1e(s, t) is noticeably inferior,
with loss terms exceeding those of the standard PINN. This result suggests that g2(s, t) = V1e(s, t) is less effective compared to the other two choices of g2 and highlights the importance of selecting an appropriate exact terminal function to ensure optimal model performance. To further evaluate the accuracy of the solutions produced by the models, we employ two metrics, relative L2 error and maximum absolute error (MAE). The relative L2 error is defined as
εL2 = ||V true − V pred||2
||V true||2
=
s
1 N
N
P
i=1
(V true
i − V pred
i )2
s
1 N
N
P
i=1
(V true
i )2
,
where || · ||2 is the L2 norm. V pred(s, t) is solution given by the model. N is the number of samples taken to calculate the error. The MAE is defined as follows,
M AE = miax |V true
i − V pred
i |.
Each experiment was repeated three times, and the average results were recorded in Table 3. The result indicates that the accuracy of solutions obtained by models with input normalization is better than those without it. This improvement shows the importance of designing an input normalization layer to preserve the homogeneous structure of the option value function with respect to the asset price s.
Table 3: Relative L2 error and MAE in the ablation experiments. The first column on the left is the result of PINN. The last three columns are the results of ETCNN with three different exact terminal functions. The first two rows are the results of direct input, while the last two rows are the results of networks with input normalization. Bold font represents the best result in each row.
Error PINN ETCNN
g2 = V1e
ETCNN
g2 = V1e + V2e
ETCNN g2 = V e
Without normalization Rel. L2 error 1.87 × 10−3 4.12 × 10−3 1.08 × 10−4 6.91 × 10-5
MAE 2.23 × 10−1 1.76 × 10−1 8.52 × 10-3 1.06 × 10−2
With normalization Rel. L2 error 1.20 × 10−3 3.35 × 10−3 5.72 × 10−5 5.34 × 10-5
MAE 1.16 × 10−1 1.31 × 10−1 5.71 × 10-3 6.90 × 10−3
17

ETCNN with both g2(s, t) = V e(s, t) and g2(s, t) = V1e(s, t)+V2e(s, t) exhibit significant improvements in
accuracy compared to PINN, reducing errors by 1-2 orders of magnitude. In terms of the L2 error, ETCNN with g2 = V e achieves the lowest error, followed closely by g2 = V1e + V2e. In terms of MAE, the lowest value
is obtained by ETCNN with g2 = V1e + V2e, followed by g2 = V e. When input normalization is applied,
the performance of ETCNN with g2 = V1e + V2e is nearly indistinguishable from ETCNN with g2 = V e,
both achieving remarkably low error values. Specifically, the L2 errors for both models are approximately 5 × 10−5, while their MAE values are around 6 × 10−3. These results imply that, for an option with an exercise price of K = 100 units of currency, the maximum absolute error of the solutions obtained using ETCNN with g2 = V1e +V2e or g2 = V e is less than one cent, which is a very low error in practice. In contrast,
ETCNN with g2 = V1e yields the poorest performance, even worse than PINN. This outcome highlights that not all solutions that exactly satisfy boundary conditions lead to lower errors. Merely fulfilling the terminal conditions is insufficient to ensure accurate solutions. The effectiveness of the method is strongly dependent on the smoothness and structure of the residual difference between V true and the chosen g2. This observation emphasizes the critical importance of selecting an appropriate g2.
Figure 6: Pointwise difference between the true solution and predicted solution obtained by the PINN and ETCNN with three g2 functions. (a1), PINN. (a2), PINN + Norm. (b1), ETCNN (g2 = V e
1 ). (b2), ETCNN (g2 = V e
1 ) + Norm. (c1), ETCNN
(g2 = V e
1 +Ve
2 ). (c2), ETCNN (g2 = V e
1 +Ve
2 ) + Norm. (d1), ETCNN (g2 = V e). (d2), ETCNN (g2 = V e) + Norm.
To better illustrate the results of the previous table, Figure 6 shows the pointwise difference between the predicted solution by PINN or ETCNN and the true solution. The pointwise difference is defined as the difference between the true solution and the model prediction,
Diff(s, t) = V true(s, t) − V pred(s, t).
Models incorporating an input normalization layer consistently achieve lower absolute errors compared to those without. Among the ETCNN models, g2 = V e and g2 = V1e + V2e exhibit far superior performance
relative to PINN, whereas the performance of g2 = V1e falls below that of PINN. Notably, when input
normalization is applied, the performance of g2 = V1e + V2e is comparable to that of g2 = V e. However,
computing V e is more computationally expensive than calculating V1e + V2e, as it requires evaluating the cumulative distribution function twice at different points. Therefore, we select the ETCNN model using g2 = V1e + V2e and with an input normalization layer as the final model. A detailed analysis of this model’s results is provided in the following paragraph. Additionally, Figure 6 reveals an increase in error near the early exercise boundary, highlighting the added complexity of solving equat-
ions with unknown free boundaries. This behavior reflects the additional challenge introduced by the free-boundary feature in option pricing. Figure 7 compares the free boundary obtained from the true solution, the PINN solution, and the ETCNN solution with g2(s, t) = V1e(s, t) +
V2e(s, t). The early exercise boundary derived from ETCNN closely aligns with the true early exercise
18

boundary, showing near-complete overlap. In contrast, the early exercise boundary derived from the PINN shows noticeable deviations, particularly at points far from the expiration date. These results show the capability of our method to effectively handle the challenges posed by free boundary problems.
Figure 7: Early exercise boundary. (a), Early exercise boundary obtained by the exact solution and PINN. (b), Early exercise boundary obtained by the exact solution and ECTNN with g2(s, t) = V e
1 (s, t) + V e
2 (s, t). Both PINN and ETCNN implement input normalization.
We extend our analysis by comparing the performance of ETCNN with some traditional methods: Barone-Adesi and Whaley (BAW) method, the binomial tree (BT), finite difference (FD), and least squares Monte Carlo (LSM) method. For the BT and FD methods, results are evaluated using N = 100, 200, and 400 steps. In the case of the LSM approach, simulations are performed with M = 10, 000 paths, and results are obtained for N = 100, 200, and 400 steps as well. The comparative results of these methods are su-
mmarized in Table 4.
Table 4: Relative L2 error and MAE comparison of ETCNN, PINN, and traditional numerical methods. ETCNN takes g2 = V e
1 +Ve
2 . Both PINN and ECTNN implement input normalization. Bold font represents the best result.
Methods Rel. L2 error MAE Methods Rel. L2 error MAE
ETCNN 5.72 × 10-5 5.71 × 10-3 FD(N = 100) 5.36 × 10−4 3.82 × 10−2
PINN 1.20 × 10−3 1.16 × 10−1 FD(N = 200) 2.78 × 10−4 2.00 × 10−2
BAW 1.49 × 10−3 9.03 × 10−2 FD(N = 400) 1.46 × 10−4 1.05 × 10−2
BT(N = 100) 3.99 × 10−4 2.46 × 10−2 LSM(N = 100) 2.38 × 10−3 2.24 × 10−1
BT(N = 200) 1.97 × 10−4 1.27 × 10−2 LSM(N = 200) 2.45 × 10−3 2.53 × 10−1
BT(N = 400) 9.78 × 10−5 6.61 × 10−3 LSM(N = 400) 2.61 × 10−3 2.21 × 10−1
The performance of the LSM method is the least favorable among the evaluated approaches, while the BAW approximation performs slightly better but remains among the less accurate methods. PINN yields higher accuracy than both LSM and BAW but still falls short of the FD and BT methods. This suggests that solutions obtained using a neural network without any specific design are less accurate than traditional numerical methods. In contrast, our ETCNN not only surpasses PINN but also outperforms severa-
l traditional numerical methods in terms of accuracy. Specifically, our ETCNN achieves the lowest relative L2 error and the smallest MAE. Among all evaluated methods, only ETCNN and the BT method with larger step sizes can achieve an MAE on the order of 10−3, which is a huge advantage in actual transactions.
19

To further illustrate the accuracy of the proposed approach, Table 5 reports the option values at several fixed (s, t) points (t is the current time and T −t is the time to maturity), along with the average computation time required by each method. For the ETCNN and PINN models, the reported times correspond to the evaluation phase of the trained networks, excluding the training process. The remaining model parameters are fixed as before (K = 100, r = 0.02, σ = 0.25, T = 1). The reference values -
in the first column are obtained using the BT method with N = 4000, which serves as a benchmark for the true solution. The second column presents the corresponding European option prices under the same parameters, computed from Eq. (16). The difference between these two columns represents the early exercise premium. The subsequent columns list the results obtained from the proposed ETCNN (g2 = V1e + V2e), PINN, BAW, BT (N = 400), FD (N = 400), and LSM (N = 400) methods. This comparison clearly sho-
ws the deviations of each method from the benchmark solution.
Table 5: The price of American put options with fixed model parameters (K = 100, r = 0.02, σ = 0.25, T = 1) calculated by ETCNN, PINN, and traditional methods. The binomial tree method with N = 4000 serves as the reference solution. V e(s, t) denotes the price of European options with the same parameters (calculated by Eq. (16)). Bold represents the solution closest to the reference solution among the six methods. The average time consumption (in milliseconds) for each method represents the mean e-
valuation time over all sample points listed in the table.
Time to expiration T −t
Underlying price s
Ref. solution BT(N=4000)
European
V e(s, t) ETCNN PINN BAW BT
(N=400)
FD (N=400)
LSM (N=400)
0.25
80 20.010 19.684 20.011 20.022 20.000 20.010 20.009 20.036
90 11.030 10.914 11.030 11.052 10.999 11.032 11.029 11.005
100 4.759 4.726 4.759 4.786 4.752 4.757 4.754 4.660
110 1.571 1.563 1.572 1.603 1.572 1.573 1.570 1.562
120 0.403 0.401 0.404 0.436 0.404 0.403 0.403 0.417
0.5
80 20.306 19.875 20.307 20.323 20.247 20.307 20.305 20.475
90 12.289 12.101 12.289 12.314 12.249 12.287 12.285 12.239
100 6.597 6.522 6.598 6.626 6.587 6.595 6.590 6.665
110 3.155 3.127 3.156 3.185 3.157 3.159 3.153 3.158
120 1.361 1.351 1.362 1.390 1.366 1.362 1.359 1.333
0.75
80 20.761 20.228 20.762 20.778 20.684 20.762 20.757 20.671
90 13.336 13.075 13.337 13.360 13.290 13.336 13.333 13.341
100 7.955 7.832 7.956 7.983 7.942 7.951 7.946 8.036
110 4.435 4.379 4.436 4.463 4.439 4.439 4.429 4.475
120 2.332 2.307 2.333 2.361 2.341 2.334 2.331 2.317 Ave. computational
time (ms) - - 1.095 0.447 7.654 60.22 453.98 476.11
The results show that the proposed method consistently achieves the highest accuracy across various (s, t) cases, including scenarios close to maturity as well as those far from maturity, and for options that are in-the-money, at-the-money, or out-of-the-money. This demonstrates the strong robustness and stability of the proposed approach under different market conditions. Furthermore, a trained ETCNN can efficiently compute option values at a large number of points, whereas traditional methods re-
quire longer computation time, especially when estimating values across multiple points. For instance, both the BT and FD methods require N iterative steps, calculating each step sequentially. Similarly, LSM needs to generate M simulation paths and perform least squares fitting. The BAW method, although faster than other numerical schemes, still cannot match the evaluation speed of a well-trained ETCNN when applied repeatedly. Therefore, our ETCNN with a carefully designed g2 function not only off-
ers superior accuracy but also provides an advantage in computational speed.
20

4.2. American Call Options with Dividends
The valuation of a single-asset American call option without dividends is equivalent to its European counterpart, making its value straightforward to compute. However, when the underlying asset pays dividends, the American call option typically holds a premium over its European counterpart, and its value does not have a closed-form solution. For an American call option on an asset with a continuous dividend yield q, its value satisfies the following modified version linear complementarity conditio-
ns,

       
       
V (s, t) ≥ (s − K)+, ∀s ≥ 0, t ∈ [0, T ),
∂V
∂t + 1
2 σ2s2 ∂2V
∂s2 + (r − q)s ∂V
∂s − rV ≤ 0, ∀s ≥ 0, t ∈ [0, T ),
∂V
∂t + 1
2 σ2s2 ∂2V
∂s2 + (r − q)s ∂V
∂s − rV · V − (s − K)+ = 0, ∀s ≥ 0, t ∈ [0, T ),
V (s, T ) = (s − K)+.
The exact solution for its European counterpart differs slightly from Eq. (12) due to the inclusion of the dividend term. The modified form is given as follows,
V (s, t) = se−qτ N (dˆ1(s, τ, K)) − Ke−rτ N (dˆ2(s, τ, K)). (17)
Here, dˆ1, dˆ2 are defined as :

  
  
dˆ1(s, τ, K) = 1
σ√τ ln s
K + (r − q + σ2
2 )τ ,
dˆ2(s, τ, K) = dˆ1(s, τ, K) − σ√τ = 1
σ√τ ln s
K + (r − q − σ2
2 )τ .
Similar to the previous example, we take
dˆ0(s, τ, K) = 1
2 (dˆ1(s, τ, K) + dˆ2(s, τ, K)).
By applying a first-order Taylor expansion to N (·) and substituting the result into Eq. (17), an exact terminal function g2(s, t) is derived for single-asset American call options with continuous dividend payments,
g2(s, t) = N (dˆ0)[se−qτ − Ke−rτ ] + 1
2√2π σ√τ e− dˆ02
2 [se−qτ + Ke−rτ ]. (18)
The output of our ETCNN in this experiment is u ̃NN (s, t) = g1(s, t)uNN (s, t) + g2(s, t), where g2 is defined in Eq. (18) and g1(s, t) = T − t. In this example, we set K = 200, r = 0.05, T = 2. To demonstrate the robustness of our ETCNN, various parameter configurations have been applied. The volatility level σ is chosen to take values of 0.1, 0.25, and 0.4, representing markets with different volatility conditions. Dividend yields are varied across {0.01, 0.03, 0.05, 0.07} to assess applicabili-
ty to both low-dividend and high-dividend-paying assets. Input normalization is applied in all experiments for both PINN and ETCNN models. The number of sampling points for calculating Ltc is Ntc = 8192, while Lbs, Ltv and Leq uses 4Ntc points. Training is conducted over [0, 800] × [0, T ], with evaluation of errors on the subdomain [160, 240] × [0, T ] to measure performance. The solution obtained by the binomial tree method with N = 4000 serves as the reference for the true solution. The relativ-
e L2 errors between the solutions obtained from different methods and the reference solution are compared. The results are reported in Table 6. The results demonstrate that the proposed ETCNN outperforms other methods across most of the various scenarios, particularly in high-volatility markets. Compared to PINN, ETCNN achieves a reduction in L2 error by an order of magnitude. When compared with traditional numerical methods, ETCNN exhibits
21

Table 6: Relative L2 error for American call options with different volatility σ and dividend rate q. Comparisons are made between our ETCNN and other methods. Both PINN and ETCNN apply the input normalization technique. Bold font represents the best result in each column.
Methods σ = 0.1
q = 0.01 q = 0.03 q = 0.05 q = 0.07
ETCNN 3.79 × 10−5 5.98 × 10-5 1.69 × 10−4 4.15 × 10−4
PINN 2.81 × 10−3 3.00 × 10−3 4.48 × 10−3 4.02 × 10−3
BAW 1.05 × 10-5 4.02 × 10−4 1.86 × 10−3 2.45 × 10−3
BT(N = 400) 9.34 × 10−5 9.67 × 10−5 9.87 × 10-5 6.48 × 10-5
FD(N = 400) 1.06 × 10−4 1.06 × 10−4 1.68 × 10−4 3.01 × 10−4
LSM(N = 400) 3.02 × 10−3 5.27 × 10−3 3.67 × 10−3 2.53 × 10−3
Methods σ = 0.25
q = 0.01 q = 0.03 q = 0.05 q = 0.07
ETCNN 7.16 × 10−5 1.78 × 10-4 2.18 × 10-4 2.23 × 10-4
PINN 2.43 × 10−3 3.28 × 10−3 3.86 × 10−3 4.33 × 10−3
BAW 5.15 × 10-5 2.98 × 10−3 4.49 × 10−3 5.12 × 10−3
BT(N = 400) 2.33 × 10−4 2.59 × 10−4 2.72 × 10−4 2.52 × 10−4
FD(N = 400) 1.77 × 10−4 2.12 × 10−4 3.59 × 10−4 5.74 × 10−4
LSM(N = 400) 1.45 × 10−2 1.06 × 10−2 8.27 × 10−3 7.52 × 10−3
Methods σ = 0.4
q = 0.01 q = 0.03 q = 0.05 q = 0.07
ETCNN 8.45 × 10-5 1.85 × 10-4 1.68 × 10-4 2.53 × 10-4
PINN 2.57 × 10−3 2.72 × 10−3 3.19 × 10−3 3.72 × 10−3
BAW 3.50 × 10−4 4.08 × 10−3 5.53 × 10−3 6.54 × 10−3
BT(N = 400) 2.96 × 10−4 3.14 × 10−4 3.24 × 10−4 3.17 × 10−4
FD(N = 400) 2.58 × 10−4 3.24 × 10−4 5.02 × 10−4 7.01 × 10−4
LSM(N = 400) 1.81 × 10−2 1.45 × 10−2 1.11 × 10−2 1.07 × 10−2
superior robustness under challenging market conditions. As volatility and dividend yields increase, the errors associated with traditional methods grow substantially, whereas ETCNN maintains an L2 error of approximately 2×10−4, showing its robustness and adaptability to diverse and fluctuating market conditions. Among the tested approaches, LSM shows the poorest performance, while BAW performs slightly better than LSM and is comparable to PINN. It is worth noting that BAW achieves relatively high-
 accuracy when the dividend yield is small, as the option price becomes closer to that of a European option under such conditions. Overall, ETCNN outperforms traditional approaches and standard PINN in terms of accuracy across most scenarios. This makes ETCNN a more reliable and practical solution compared to both traditional methods and standard PINN. We further evaluated the proposed method under fixed option parameters by setting K = 2, r = 0.05, and
22

T = 2, while varying the volatility, dividend yield, time, and underlying asset price. Table 7 shows that our method consistently achieves the highest accuracy across different parameter settings, demonstrating strong robustness to changes in market conditions. Moreover, the trained network exhibits a high computational efficiency, achieving rapid inference once training is completed.
Table 7: The price of American call options with fixed model parameters (K = 200, r = 0.05, T = 2) calculated by ETCNN, PINN, and traditional methods. The binomial tree method with N = 4000 serves as the reference solution. V e(s, t) denotes the price of European options with the same parameters (calculated by Eq. (17)). Bold represents the solution closest to the reference solution among the six methods. The average time consumption (in milliseconds) for each method represents the mean evaluation-
 time over all sample points listed in the table.
Option parameters
Underlying price s
Ref. solution BT(N=4000)
European
V e(s, t) ETCNN PINN BAW BT
(N=400)
FD (N=400)
LSM (N=400)
σ = 0.25 q = 0.05 T − t = 0.5
180 5.560 5.542 5.561 5.650 5.577 5.555 5.555 5.715
200 13.805 13.739 13.805 13.890 13.824 13.798 13.792 13.755
220 26.409 26.219 26.410 26.484 26.413 26.416 26.405 26.149
σ = 0.4 q = 0.05 T − t = 0.5
180 12.553 12.506 12.556 12.661 12.582 12.560 12.548 12.752
200 22.044 21.937 22.047 22.154 22.075 22.033 22.022 21.612
220 34.288 34.073 34.288 34.394 34.306 34.299 34.273 33.995
σ = 0.25 q = 0.07 T − t = 0.5
180 5.095 5.025 5.098 5.178 5.125 5.091 5.088 5.245
200 12.966 12.722 12.969 13.038 12.979 12.961 12.951 13.029
220 25.321 24.670 25.326 25.380 25.270 25.328 25.313 25.263
σ = 0.25 q = 0.05 T −t=1
180 10.114 10.030 10.118 10.199 10.179 10.117 10.104 10.388
200 19.138 18.925 19.142 19.221 19.213 19.129 19.120 19.300
220 31.264 30.802 31.268 31.344 31.324 31.267 31.260 30.956
Ave. computational
time (in ms) - - 1.897 0.431 9.265 60.08 485.46 548.32
4.3. Multi-Asset Options with Geometric Average Payoffs
In this example, the focus is on multi-asset American put options, where the payoff function is defined
as the geometric mean of the prices of n underlying assets. Let I = I(s1, · · · , sn) = Qn
i=1 si(t)
1
n be the geometric mean of {s1, · · · , sn}. The payoff function is defined as
Φ(s1, · · · , sn) = K −
n
Y
i=1
si
1 n
+
= (K − I)+.
The PDE operator is
F (V (s1, · · · , sn, t)) = ∂V
∂t + 1
2
n
X
i,j=1
σiσj ρij sisj
∂2V ∂si∂sj
+
n
X
i=1
(r − qi)si
∂V ∂si
− rV.
Then the value of a multi-asset American put option on the geometric mean of n underlying assets V = V (s1, · · · , sn) satisfies the following BSM equations,

   
   
V (s1, · · · , sn, t) ≥ (K − I)+, ∀si ≥ 0, t ∈ [0, T ),
F (V (s1, · · · , sn, t)) ≤ 0, ∀si ≥ 0, t ∈ [0, T ),
F (V (s1, · · · , sn, t)) · V − (K − I)+ = 0, ∀si ≥ 0, t ∈ [0, T ),
V (s1, · · · , sn, T ) = (K − I)+, ∀si ≥ 0.
23

The geometric average It of n geometric Brownian motion processes {Si}n
i=1 is itself a geometric Brownian motion [48]. From the high-dimensional Itoˆ’s lemma, the dynamics of I can be expressed as
dI =
n
X
i=1
∂I ∂si
dSi + 1
2
n
X
i,j=1
∂2I ∂si∂sj
dSi dSj .
Substituting into the dynamics of si in Eq. (6) and (7) yields
dI =
n
X
i=1
∂I ∂si
[(r − qi)Si + σiSidWi] + 1
2
n
X
i,j=1
∂2I ∂si∂sj
ρij σiσj dt.
The first and second partial derivatives of I are calculated as
∂I ∂si
=I
nSi
, ∂2I
∂si∂sj
=
(1 n2
I
SiSj if i ̸= j,
1
n(1
n − 1) I
S2
i
if i = j.
Substituting these expressions into the dynamics of I, the simplified expression becomes
dI(t) =


1 n
n
X
i=1
(r − qi − 1
2 σ2
i)+ 1
2n2
n
X
i,j=1
ρij σiσj

 I(t)dt + 1
n
n
X
i=1
σi I (t)dWi .
To further simplify, the following definitions are introduced,
σ2
I= 1
n2
n
X
i,j=1
ρij σiσj , qI = 1
n
n
X
i=1
(qi + 1
2 σ2
i)− 1
2 σ2
I, W = 1
nσI
n
X
i=1
σiWi.
With these definitions, the dynamics of I(t) reduce to
dI(t) = (r − qI )I(t)dt + σI I(t)dW. (19)
Note that
dW dW = 1
n2σ2
I
n
X
i,j=1
σiσj dWidWj = 1
n2σ2
I
n
X
i,j=1
σiσj ρij dt = dt
By L ́evy’s Characterization Theorem of Brownian Motion [36], the quadratic variation of W is t, then W is a standard Brownian motion. Thus, from Eq. (19), It is a geometric Brownian motion process. This enables us to use the binomial tree method to solve a one-dimensional option pricing problem with dividend qI and volatility σI as an accurate approximation of the exact solution, and can be used as a benchmark to evaluate the accuracy of our methods. The method for constructing g2 here is still t-
o perform a first-order Taylor expansion on its European analytical solution. Take
d0 = − 1
σI
√τ ln I
K + (r − qI )τ .
Then the expression of g2 is
g2(s1, · · · , sn, t) = N (d0)[Ke−rτ − Ie−qIτ ] + σI
√τ
2√2π e− d20
2 · (Ke−rτ + I)
Such g2 exactly satisfies the terminal condition. We take g1(s1, · · · , sn, t) = T − t in our ETCNN.
24

The experiment considers cases with n = 2, 3, 4, 5 underlying assets, using the parameters K = 100, T = 1, r = 0.05. For the case of n = 5 assets, we arbitrarily assign parameter values as follows,
d = [0.02, 0.03, 0.04, 0.05, 0.03],
σ = [0.15, 0.2, 0.25, 0.3, 0.22],
ρ=

    
1 0.2 0.3 0.1 0.4 0.2 1 0.25 0.15 0.3 0.3 0.25 1 0.2 0.23 0.1 0.15 0.2 1 0.26 0.4 0.3 0.23 0.26 1

    
.
Here, d denotes the dividend rates. The dividend rate of si is di, the i-th element of d. σ denotes the volatility, where σi is the volatility of si. The correlation matrix ρ specifies the correlations between the assets, where ρij is the correlation between si and sj. For scenarios with n = 2, 3, 4, the dividend rates, volatilities, and correlation matrices are derived by taking the first n elements of d and σ, along with the n × n submatrix from the upper-left corner of ρ. Input normalization is-
 applied to both PINN and ETCNN. For n = 2, 3, the number of sampling points for Ltc are set to Ntc = 8192. For n = 4, 5, the number of sampling points is increased to Ntc = 16384 to accommodate the higher input dimensionality. For the other three loss terms, the sampling points are set to Nbs = Ntv = Neq = 4Ntc. Training is performed on the range [0, 400]n × [0, T ], while accuracy is evaluated on the interval [80, 120]n × [0, T ]. The results of the experiments are summarized in Table 8.
Table 8: Relative L2 error and MAE for options on geometric average of n assets. The input of networks in PINN and ETCNN has n + 1 dimensions. Both PINN and ETCNN apply the input normalization layer.
Method Error n = 2 n = 3 n = 4 n = 5
PINN Rel. L2 error 2.00 × 10−2 2.79 × 10−2 1.48 × 10−1 1.72 × 10−1
MAE 7.75 × 10−1 1.15 × 100 2.53 × 100 2.02 × 100
ETCNN Rel. L2 error 1.53 × 10−3 1.69 × 10−3 1.07 × 10−3 1.24 × 10−3
MAE 2.49 × 10−2 2.45 × 10−2 3.35 × 10−2 2.18 × 10−2
The experimental results indicate that ETCNN significantly outperforms PINN in both relative L2 error and MAE, achieving improvements of 1–2 orders of magnitude. This performance advantage becomes increasingly evident as the input dimensionality grows. The performance of PINN deteriorates significantly as the dimensionality of the input space increases. When the number of underlying assets reaches 4 or more (i.e., when the input dimensionality exceeds 5), the error rates for PINN often exceed 10−1-
, which is not applicable in practice. In contrast, ETCNN demonstrates remarkable robustness to the dimensionality increase, maintaining an accuracy level of approximately 10−3 even in high-dimensional scenarios. This stability and precision suggest that ETCNN is sufficiently accurate to be applied in real-world option pricing tasks.
4.4. Call-on-Max American Options
In this example, we study call-on-max options. Let
F (V (s1, · · · , sn, t)) = ∂V
∂t + 1
2
n
X
i,j=1
σiσj ρij sisj
∂2V ∂si∂sj
+
n
X
i=1
(r − qi)si
∂V ∂si
− rV.
25

The value of the American call option on the maximum value of n underlying assets satisfies the following BSM equations,

   
   
V (s1, · · · , sn, t) ≥ (max(s1, · · · , sn) − K)+, ∀si ≥ 0, t ∈ [0, T ),
F (V (s1, · · · , sn, t)) ≤ 0, ∀si ≥ 0, t ∈ [0, T ),
F (V (s1, · · · , sn, t)) · V − (max(s1, · · · , sn) − K)+ = 0, ∀si ≥ 0, t ∈ [0, T ),
V (s1, · · · , sn, T ) = (max(s1, · · · , sn) − K)+, ∀si ≥ 0.
This option is of research significance for two reasons. First, options on the maximum of two or more asset prices are widely used in practice. Examples include corporate bonds and managerial contracts with warrants [23, 11]. Second, the price of call-on-max options can be used to determine the prices of other related options, such as call-on-min, put-on-max, and put-on-min options [25]. This section analyzes the American call option on the maximum of two assets, setting the strike price K = 100 a-
nd maturity T = 1. To demonstrate the universality and robustness of our method, we consider four market scenarios: low-volatility low-dividend, low-volatility high-dividend, high-volatility low-dividend, and high-volatility high-dividend. The dividend level here is relative to the risk-free rate r. For each scenario, we provide a representative example, with parameters specified as follows.
Table 9: Parameters for examples in each scenario.
Number Description σ1 σ2 ρ q1 q2 r
Scenario 1 low-volatility low-dividend 0.15 0.25 0.2 0.02 0.04 0.06
Scenario 2 low-volatility high-dividend 0.15 0.25 0.2 0.03 0.06 0.02
Scenario 3 high-volatility low-dividend 0.4 0.3 0.2 0.02 0.04 0.06
Scenario 4 high-volatility high-dividend 0.4 0.3 0.2 0.03 0.06 0.02
4.4.1. Exact Terminal Function Design
This section explores the properties of the above differential equations and designs an exact terminal function g2. It also illustrates the stopping region and provides the representation of the early exercise premium for call-on-max options [23, 11]. Let the value of the option be V = V (s1, s2, t). The payoff function is Φ(s1, s2) = (max(s1, s2) − K)+. The stopping region is the set
S = {(s1, s2, t) : V (s1, s2, t) = (max(s1, s2) − K)+}
of price-date points on which the value of the options equals the immediate exercise payoff. The continuation region is defined as the complementary region of S, i.e.
C = {V (s1, s2, t) : V (s1, s2, t) > (max(s1, s2) − K)+}.
Let Gi = {(s1, s2, t) : si = max(s1, s2)}. The subregion Si = S ∩ Gi is the subset of S where asset i is more expensive. The t-section, defined as S(t) = {(s1, s2) : (s1, s2, t) ∈ S} is the set of price pairs (s1, s2) in the stopping region at the fixed time t. Similarly define Si(t) = {(s1, s2) : (s1, s2, t) ∈ Si}. Based on these definitions, we can finally define the free boundary functions of multi-asset options,
S∗
1 (s2, t) = inf{s1 ∈ R+ : (s1, s2) ∈ S1(t)},
S∗
2 (s1, t) = inf{s2 ∈ R+ : (s1, s2) ∈ S2(t)}.
These two functions represent the boundary of the t-sections S1(t) and S2(t) respectively. Then the value of an American option on the maximum of two assets has the early exercise premium representation
V a(s1, s2, t) = V e(s1, s2, t) + p(s1, s2, t),
26

where the premium function p(s1, s2, t) has two components,
p(s1, s2, t) = p1(s1, s2, t; S∗
1 ) + p2(s1, s2, t; S∗
2 ),
p1(s1, s2, t; S∗
1 ) = Et,s
ZT
t
e−r(u−t)(d1s1(u) − rK)I{s1 ≤ S∗
1 (s2, t)}du,
p2(s1, s2, t; S∗
2 ) = Et,s
ZT
t
e−r(u−t)(d2s2(u) − rK)I{s2 ≤ S∗
2 (s1, t)}du.
pi(s1, s2, t; S∗
i ) is defined for the continuous surface S∗
i . The free boundaries S1∗ and S2∗ are the solutions to the system of recursive integral equations,
S∗
1 (s2, t) − K = V a(S∗
1 (s2, t), s2, t)
= V e(S∗
1 (s2, t), s2, t) + p1(S∗
1 (s2, t), s2, t; S∗
1 ) + p2(S∗
1 (s2, t), s2, t; S∗
2 ),
S∗
2 (s1, t) − K = V a(s1, S∗
2 (s1, t), t)
= V e(s1, S∗
2 (s1, t), t) + p1(s1, S∗
2 (s1, t), t; S∗
1 ) + p2(s1, S∗
2 (s1, t), t; S∗
2 ),
Therefore, V a(s1, s2, t), S1∗(s2, t) and S2∗(s1, t) form a coupled system of equations, which includes integration
and expectation calculation. This makes it very difficult to solve V a(s1, s2, t) and find the free boundaries. V e(s1, s2, t) is the value of the counterpart European option. Johnson [12] and Stulz [25] give the analytical formulas for the European call options on the maximum of two asset prices without dividends. Here, we derive the analytical formula for European call-on-max options with dividends. Consider the following notations,
d1(si, σ; K, τ ) = 1
σ√τ
h
ln( si
K ) + (r − qi + 1
2 σ2)τ )
i
, i = 1, 2,
d2(si, σ; K, τ ) = 1
σ√τ
h
ln( si
K ) + (r − qi − 1
2 σ2)τ )
i
, i = 1, 2,
d′
1(si, sj, σ; τ ) = 1
σ√τ
h
ln( si
sj
) + (qj − qi + 1
2 σ2)τ )
i
, i, j = 1, 2,
d′
2(si, sj, σ; τ ) = 1
σ√τ
h
ln( si
sj
) + (qj − qi − 1
2 σ2)τ )
i
, i, j = 1, 2.
The parameters involved in this derivation include
σ2
12 = σ2
1 − 2ρσ1σ2 + σ2
2, ρ1 = σ1 − ρσ2
σ12
, ρ2 = σ2 − ρσ1
σ12
.
With τ = T − t denoting the time to maturity, the analytical formula for European call-on-max options with dividends is as follows,
V e(s1, s2, t) = s1e−q1τ N2(d1(s1, σ1; K, τ ), d′
1(s1, s2, σ12; τ ), ρ1)
+ s2e−q2τ N2(d1(s2, σ2; K, τ ), d′
1(s2, s1, σ12; τ ), ρ2)
− Ke−rτ 1 − N2(−d2(s1, σ1; K, τ ), −d2(s2, σ2; K, τ ), ρ) .
Here N2(x, y, ρ) is the cumulative distribution function of the bivariate standard normal distribution. Note that V e(s1, s2, t) satisfies the same terminal conditions as V a(s1, s2, t). Since it has a complex form, it is difficult to find a d0 like in the single-asset case. Therefore we choose g2(s1, s2, t) = V e(s1, s2, t) in this experiment. The definition of g1 is still g1(s1, s2, t) = T − t. Calculating V e(s1, s2, t) is time-expensive due to the double integrals involved in the bivariate nor-
mal distribution. Moreover, when calculating the loss function, its derivatives are involved, which are more complicated. To accelerate the training process, we implement the following two techniques. First, we
27

Figure 8: Illustration of stopping regions and continuation region for a call-on-max option with σ1 = 0.1, σ2 = 0.25, ρ = 0.2, d1 = 0.02, d2 = 0.04, r = 0.06, K = 100, T = 1, at time t = 0.75 (i.e., this option is three months before maturity). (a), The free boundaries S∗
1 (s2, t) and S∗
2 (s1, t) obtained by BT and PINN. (b), The free boundaries S∗
1 (s2, t) and S∗
2 (s1, t) obtained by BT and ETCNN.
employ the method proposed in [50, 51] to numerically approximate the bivariate normal distribution. Gauss-Legendre integration rule and Taylor expansion approximation are used here. The error caused by using the approximation here is greatly smaller than the errors elsewhere. Therefore, it would not affect the accuracy. Second, given that F (V a) ≤ 0, F (V e) = 0, if the network prediction g1uNN + g2 represents the solution of V a and g2 = V e, then it follows that F (g1uNN ) ≤ 0. Therefore in th-
e loss term Lbs, we use F (g1uNN ) instead of using F (g1uNN + g2), as F (g2) = 0 is automatically satisfied. This approach removes the need to differentiate g2, thereby saving computation time.
4.4.2. Numerical Results
The solution obtained by BT with N = 400 serves as the reference solution. Here N is reduced by an order of magnitude compared with the previous cases because the complexity increases exponentially with N in high-dimensional situations. The network input consists of three dimensions, s1, s2, and t, with normalization applied to s1 and s2. For the loss calculations, Ntc = 8192 sampling points are used to compute Ltc, while Nbs = Ntv = Neq = 4Ntc are used for the other three loss terms. The network -
is trained over the domain [0, 400]2 × [0, T ] with error evaluation performed on [80, 150]2 × [0, T ]. Both PINN and ETCNN are evaluated under four typical market scenarios, with the results summarized in Table 10.
Table 10: Relative L2 error and MAE for the four market scenarios. The input of networks for PINN and ETCNN has 3 dimensions. Both PINN and ETCNN implement the input normalization.
Method Error Scenario 1 Scenario 2 Scenario 3 Scenario 4
PINN Rel. L2 error 3.18 × 10−2 3.30 × 10−2 3.55 × 10−2 4.53 × 10−2
MAE 1.53 × 100 1.72 × 100 2.25 × 100 2.91 × 100
ETCNN Rel. L2 error 1.13 × 10−4 2.01 × 10−4 9.84 × 10−5 2.12 × 10−4
MAE 1.77 × 10−2 3.53 × 10−2 2.06 × 10−2 5.06 × 10−2
As demonstrated in Table 10, our approach has a significant improvement over PINN, reducing the L2 error by two orders of magnitude and achieving an MAE on the order of 10−2. In high-dimensional cases, traditional numerical methods are hard to implement, while PINN is difficult to calculate accurate solutions.
28

However, our ECTNN is easy to implement and can achieve high accuracy. Furthermore, the four market scenarios presented cover a broad range of market conditions, and our method performs well across all scenarios, indicating its robustness and versatility. Figure 8 illustrates the free boundaries obtained by PINN and ETCNN for Scenario 1 at t = 0.75. Since the option has a maturity of T = 1, t = 0.75 means it is 0.25 year, or three months before maturity. The free boundaries computed from the refe-
rence solution are considered as the true free boundaries. As shown in it, the free boundaries identified by our ETCNN method align closely with the true ones, while the free boundaries obtained by PINN exhibit obvious deviations, particularly at lower asset prices. This comparison indicates that our method achieves relatively high accuracy in determining complex free boundaries in highdimensional problems.
5. Conclusions
This study introduces the exact terminal condition neural network (ETCNN) framework to solve the Black-Scholes-Merton equation with inequality constraints. By incorporating exact terminal functions that exactly satisfy terminal conditions and capture the singular behaviors of the true solution, ETCNN effectively reduces approximation complexity and improves accuracy compared to other neural network-based methods. The proposed approach has been tested across a variety of scenarios, including both s-
ingle-asset and multiasset cases with different parameters. Numerical results further demonstrate that ETCNN consistently outperforms both traditional approaches and other neural network methods in terms of accuracy, while maintaining computational efficiency. Despite these promising results, several directions for future research remain. Future studies could explore extending this approach to options with more complex terminal conditions, such as Asian options, barrier options, and other exotic d-
erivatives. Moreover, the framework could be adapted to more advanced models, such as local volatility models and stochastic volatility models, which present additional mathematical and computational challenges. Addressing these challenges could significantly expand the scope and applicability of the ETCNN framework in financial modeling.
Acknowledgments
The authors sincerely appreciate the anonymous reviewers for their valuable comments and suggestions, which significantly enhance the quality and clarity of this work. The work of Lu and Zhang was funded by the Strategic Priority Research Program of Chinese Academy of Sciences (Grant No. XDB0500000) and the National Natural Science Foundation of China (Grant No. 12371413, No. 22073110). The work of Guo was supported by the National Natural Science Foundation of China (Grant No. 12371438). The AIdr-
iven experiments, simulations and model training were performed on the GPU computing platform of the Academy of Mathematics and Systems Science, Chinese Academy of Sciences and the robotic AI-Scientist platform of Chinese Academy of Sciences.
References
[1] M. Raissi, P. Perdikaris, G. Karniadakis, Physics-informed neural networks: A deep learning framework for solving forward and inverse problems involving nonlinear partial differential equations, Journal of Computational Physics 378 (2019) 686–707.
[2] J. Berg, K. Nyström, A unified deep artificial neural network approach to partial differential equations in complex geometries, Neurocomputing 317 (2018) 28–41.
[3] D. P. Kingma, J. Ba, Adam: A method for stochastic optimization, arXiv preprint arXiv:1412.6980 (2014).
[4] G. Barone-Adesi, R. E. Whaley, Efficient analytic approximation of american option values, The Journal of Finance 42 (2) (1987) 301–320.
29

[5] A. Conze, Viswanathan, Path dependent options: The case of lookback options, The Journal of Finance 46 (5) (1991) 1893–1907.
[6] A. Dhiman, Y. Hu, Physics informed neural network for option pricing, arXiv preprint arXiv:2312.06711 (2023).
[7] J. Han, A. Jentzen, W. E, Solving high-dimensional partial differential equations using deep learning, Proceedings of the National Academy of Sciences 115 (34) (2018) 8505–8510.
[8] B. Negyesi, C. W. Oosterlee, A deep bsde approach for the simultaneous pricing and delta-gamma hedging of large portfolios consisting of high-dimensional multi-asset bermudan options, arXiv preprint arXiv:2502.11706 (2025).
[9] K. Glau, L. Wunderlich, The deep parametric pde method and applications to option pricing, Applied Mathematics and Computation 432 (2022) 127355.
[10] P. Van Moerbeke, On optimal stopping and free boundary problems, Archive for Rational Mechanics and Analysis 60 (2) (1976) 101–148.
[11] J. Detemple, American-style derivatives: Valuation and computation, Chapman and Hall/CRC, 2005.
[12] H. Johnson, Options on the maximum or the minimum of several assets, Journal of Financial and Quantitative Analysis 22 (3) (1987) 277–283.
[13] L. C. Rogers, Monte carlo valuation of american options, Mathematical Finance 12 (3) (2002) 271–286.
[14] R. H. Chan, C.-Y. Wong, K.-M. Yeung, Pricing multi-asset american-style options by memory reduction monte carlo methods, Applied Mathematics and Computation 179 (2) (2006) 535–544.
[15] J. Detemple, S. Feng, W. Tian, The valuation of american call options on the minimum of two dividendpaying assets, The Annals of Applied Probability 13 (3) (2003) 953–983.
[16] G. Peskir, A. Shiriaev, Optimal stopping and free-boundary problems, Birkhäuser Basel, 2006.
[17] W. Margrabe, The value of an option to exchange one asset for another, The Journal of Finance 33 (1) (1978) 177–186.
[18] M. J. Brennan, E. S. Schwartz, The valuation of american put options, The Journal of Finance 32 (2) (1977) 449–462.
[19] R. J. Rendleman, Two-state option pricing, The Journal of Finance 34 (5) (1979) 1093–1110.
[20] L. Trigeorgis, A log-transformed binomial numerical analysis method for valuing complex multi-option investments, Journal of Financial and Quantitative Analysis 26 (3) (1991) 309–326.
[21] J. C. Cox, S. A. Ross, M. Rubinstein, Option pricing: A simplified approach, Journal of Financial Economics 7 (3) (1979) 229–263.
[22] T. Klimsiak, A. Rozkosz, The early exercise premium representation for american options on multiply assets, Applied Mathematics & Optimization 73 (2016) 99–114.
[23] M. Broadie, J. Detemple, The valuation of american options on multiple assets, Mathematical Finance 7 (3) (1997) 241–286.
[24] I. E. Lagaris, A. Likas, D. I. Fotiadis, Artificial neural networks for solving ordinary and partial differential equations, IEEE Transactions on Neural Networks 9 (5) (1998) 987–1000.
[25] R. Stulz, Options on the minimum or the maximum of two risky assets: analysis and applications, Journal of Financial Economics 10 (2) (1982) 161–185.
30

[26] F. A. Longstaff, E. S. Schwartz, Valuing american options by simulation: a simple least-squares approach, The Review of Financial Studies 14 (1) (2001) 113–147.
[27] F. Black, M. Scholes, The pricing of options and corporate liabilities, Journal of Political Economy 81 (3) (1973) 637–654.
[28] P. P. Boyle, J. Evnine, S. Gibbs, Numerical evaluation of multivariate contingent claims, The Review of Financial Studies 2 (2) (1989) 241–250.
[29] J. M. Harrison, S. R. Pliska, Martingales and stochastic integrals in the theory of continuous trading, Stochastic Processes and their Applications 11 (3) (1981) 215–260.
[30] P. P. Boyle, A lattice framework for option pricing with two state variables, Journal of Financial and Quantitative Analysis 23 (1) (1988) 1–12.
[31] C.-F. Lee, H.-Y. Chen, J. Lee, C.-F. Lee, H.-Y. Chen, J. Lee, The binomial, multinomial distributions, and option pricing model, Financial Econometrics, Mathematics and Statistics: Theory, Method and Application (2019) 357–378.
[32] K.-S. Moon, W.-J. Kim, H. Kim, Adaptive lattice methods for multi-asset models, Computers & Mathematics with Applications 56 (2) (2008) 352–366.
[33] R. C. Merton, Theory of rational option pricing, The Bell Journal of Economics and Management Science (1973) 141–183.
[34] J. B. Cole, Generalized nonstandard finite differences and physical applications, Computers in Physics 12 (1) (1998) 82–87.
[35] M. Broadie, P. Glasserman, Pricing american-style securities using simulation, Journal of Economic Dynamics and Control 21 (8-9) (1997) 1323–1352.
[36] S. Shreve, Stochastic calculus for finance II: Continuous-time models, Springer New York, 2004.
[37] F. Gatta, V. S. Di Cola, F. Giampaolo, F. Piccialli, S. Cuomo, Meshless methods for american option pricing through physics-informed neural networks, Engineering Analysis with Boundary Elements 151 (2023) 68–82.
[38] I. J. Kim, The analytic valuation of american options, The Review of Financial Studies 3 (4) (1990) 547–572.
[39] P. Carr, R. Jarrow, R. Myneni, Alternative characterizations of american put options, Mathematical Finance 2 (2) (1992) 87–106.
[40] Y. Kitapbayev, Closed form optimal exercise boundary of the american put option, International Journal of Theoretical and Applied Finance 24 (01) (2021) 2150004.
[41] K. He, X. Zhang, S. Ren, J. Sun, Deep residual learning for image recognition, in: 2016 IEEE Conference on Computer Vision and Pattern Recognition (CVPR), 2016, pp. 770–778.
[42] M. Brenner, M. G. Subrahmanyan, A simple formula to compute the implied standard deviation, Financial Analysts Journal 44 (5) (1988) 80–83.
[43] R. Zhang, Q. Zhang, H. Song, An efficient finite element method for pricing american multi-asset put options, Communications in Nonlinear Science and Numerical Simulation 29 (1-3) (2015) 25–36.
[44] M. Bustamante, M. Contreras, Multi-asset black–scholes model as a variable second class constrained dynamical system, Physica A: Statistical Mechanics and its Applications 457 (2016) 540–572.
31

[45] X. Jin, C.-Y. Yang, Efficient estimation of lower and upper bounds for pricing higher-dimensional american arithmetic average options by approximating their payoff functions, International Review of Financial Analysis 44 (2016) 65–77.
[46] J. Sirignano, K. Spiliopoulos, DGM: A deep learning algorithm for solving partial differential equations, Journal of Computational Physics 375 (2018) 1339–1364.
[47] P. Kovalov, V. Linetsky, M. Marcozzi, Pricing multi-asset american options: A finite element methodof-lines with smooth penalty, Journal of Scientific Computing 33 (3) (2007) 209–237.
[48] T. H. Eytan, G. Harpaz, The pricing of futures and options contracts on the value line index, The Journal of Finance 41 (4) (1986) 843–855.
[49] Y. Guo, P. Ming, A deep learning method for computing eigenvalues of the fractional schrödinger operator, Journal of Systems Science and Complexity 37 (2) (2024) 391–412.
[50] Z. Drezner, G. O. Wesolowsky, On the computation of the bivariate normal integral, Journal of Statistical Computation and Simulation 35 (1-2) (1990) 101–107.
[51] A. Genz, Numerical computation of rectangular bivariate and trivariate normal and t probabilities, Statistics and Computing 14 (2004) 251–260.
32

---

## Processing Information

- **Processing Library:** Zotero PDFWorker
- **Processing Date:** 2026-02-10T18:15:30.978Z
- **Text Length:** 94805 characters
- **Success:** Text extraction completed
- **PDF Library Used:** Zotero PDFWorker
- **Pages Processed:** 32 of 32
