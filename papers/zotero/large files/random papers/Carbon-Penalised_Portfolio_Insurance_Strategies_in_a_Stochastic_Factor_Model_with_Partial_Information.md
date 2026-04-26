# PDF Document: Colaneri et al. - 2025 - Carbon-Penalised Portfolio Insurance Strategies in a Stochastic Factor Model with Partial Informatio.pdf

**File Path:** Colaneri et al. - 2025 - Carbon-Penalised Portfolio Insurance Strategies in a Stochastic Factor Model with Partial Informatio.pdf

**Processed Date:** 2026-02-10T18:16:48.581Z

**File Size:** 1030.43 KB

**Total Pages:** 38

**Extracted Pages:** 38

**PDF Library:** Zotero PDFWorker

**Attachment Item ID:** 3605

**Title:** Carbon-Penalised Portfolio Insurance Strategies in a Stochastic Factor Model with Partial Information

**Collection:** Large Files > Random Papers

---

## Extracted Text Content

Carbon-Penalised Portfolio Insurance Strategies in a Stochastic
Factor Model with Partial Information
Katia Colaneri ∗1, Federico D’Amario †2, and Daniele Mancinelli‡1
1Department of Economics and Finance, University of Rome Tor Vergata. 2Department of Economics and Law, Sapienza University of Rome.
November 25, 2025
Abstract
Given the increasing importance of environmental, social and governance (ESG) factors, particularly carbon emissions, we investigate optimal proportional portfolio insurance (PPI) strategies accounting for carbon footprint reduction. PPI strategies enable investors to mitigate downside risk while retaining the potential for upside gains. This paper aims to determine the multiplier of the PPI strategy to maximise the expected utility of the terminal cushion, where the terminal cushion is penalised -
proportionally to the realised volatility of stocks issued by firms operating in carbon-intensive sectors. We model the risky assets’ dynamics using geometric Brownian motions whose drift rates are modulated by an unobservable common stochastic factor to capture market-specific or economy-wide state variables that are typically not directly observable. Using the classical stochastic filtering theory, we formulate a suitable optimisation problem and solve it for the CRRA utility function. We charac-
terise optimal carbon-penalised PPI strategies and optimal value functions under full and partial information and quantify the loss of utility due to incomplete information. Finally, we carry a numerical analysis showing that the proposed strategy reduces carbon-emissions intensity without compromising financial performance.
Keywords: Portfolio insurance strategies, Optimal control, Sustainable investment strategies, Partial information.
JEL classification: C61, G11, G22.
AMS classification: 49L12, 60J76, 91B16, 91G20.
1 Introduction
As recently documented in several studies, including Hartzmark and Sussman [2019], Lagerkvist et al. [2020], and Anquetin et al. [2022], stakeholders around the world have increasingly perceived climate change as a global threat. As a result, institutional investors increasingly integrate ESG criteria into portfolio design and assess the carbon footprint of their investments. For example, as reported by Peng et al. [2024], the Government Pension Investment Fund has allocated 163 trillion yen in pa-
ssive ESG index products, and the California Public Employees’ Retirement System follows a “social change
∗katia.colaneri@uniroma2.it †federico.damario@uniroma1.it ‡Corresponding author: daniele.mancinelli@uniroma2.it
1
arXiv:2511.19186v1 [q-fin.PM] 24 Nov 2025

investment” approach with ESG guidelines. Although ESG is multidimensional and encompasses several pillars, this article focuses on carbon risk and emissions reduction, which carry regulatory, market, and reputational implications. In particular, institutional investors seek to reduce the carbon footprint of their investments for two main reasons. First, they face environmental and regulatory risks associated with carbon-intensive investments, such as the risk of stranded assets and the risks of -
catastrophic events linked with climate change. Second, institutional investors are subject to a high degree of public scrutiny since their decisions significantly impact firms’ behaviour. Therefore, incorporating carbon-footprint considerations into institutional investors’ portfolio choices is crucial for long-term financial sustainability. Accordingly, measuring firms’ carbon emissions is an essential task. Two widely used metrics are the Brown-Green Score, developed by Go ̈rgen et al. [2020], -
and carbon intensity, by Hellmich and Kiesel [2021]; in the present article, we adopt the latter approach.
Against this backdrop, Proportional Portfolio Insurance (PPI) strategies offer an appealing framework for integrating downside protection with sustainability considerations. PPI strategies emerged in the aftermath of the 1973-1974 market collapse, which led to the withdrawal of several pension funds. They were first developed by Rubinstein and Leland [1976] and Brennan and Schwartz [1976] as a response to this crisis. After a period of relative obscurity, PPI strategies experienced a remarkable re-
surgence during the 2008 financial crisis. Today, they constitute a cornerstone of modern asset management and are widely implemented by institutional investors – such as mutual funds, insurance companies, and pension funds (see, e.g., Temocin et al. [2018] and Di Giacinto et al. [2024]). A key purpose of PPI strategies is to ensure a predetermined level of wealth over a fixed investment horizon while still allowing participation in equity market upturns (see, e.g., Grossman and Villa [1989] and B-
asak [2002]). The strategy achieves this through dynamic allocation between a risky reference portfolio and a reserve asset. This allocation is governed by the concept of the cushion, defined as the difference between the current portfolio value and the floor, i.e., the minimum level of wealth to be protected at all times. The investor’s exposure to the risky portfolio is proportional to the cushion (when positive), and the proportionality factor – known as the multiplier – varies over time. Becau-
se the strategy is self-financing, any remaining wealth is automatically invested in the reserve asset.
To meet the dual objectives of institutional investors, i.e. achieving downside protection and reducing the carbon footprint of their portfolios, we propose a modified version of the PPI strategy characterised by a carbon-penalised cushion. More precisely, we add a penalty term to the terminal cushion, which is proportional to the realised variance of the stocks issued by firms operating in carbon-intensive businesses. Such a proportionality factor represents the fund manager’s attitude toward the-
 portfolio’s carbon intensity, that is, its carbon aversion. A similar approach has recently been adopted in Colaneri et al. [2025] to construct optimal investment portfolios in a more general carbon-penalisation framework. In contrast to the existing literature (see, e.g., Andersson et al. [2016], Bolton et al. [2022], Le Guenedal and Roncalli [2023]), we do not pre-select stocks characterised by low carbon emission levels to be included in the risky reference portfolio, nor do we impose constrai-
nts on the overall carbon intensity of the strategy. Instead, this new methodology allows a flexible trade-off between the risk–return profile and the carbon intensity of each asset in the portfolio. Indeed, if the risk–return trade-off of a given carbon-intensive asset is sufficiently favourable, it can offset the negative impact of its high carbon footprint. This property is particularly desirable from the perspective of a portfolio insurer whose primary concern is to achieve the guaranteed amou-
nt at the end of the investment horizon. Building upon these considerations, our study bridges the gap between portfolio insurance techniques and environmental sustainability objectives.
2

We contribute to the existing literature by including environmental sustainability criteria in determining the optimal design of the PPI strategy within an empirically grounded market framework. In doing so, we extend the traditional PPI approach – primarily focused on downside protection – by embedding it in a dynamic setting where both financial and environmental risks are jointly accounted for. In particular, we model risky assets as geometric Brownian motions whose drifts are modulated by a s-
ingle unobservable common factor to capture market-specific and economy-wide states that are not directly observable and evolve over time. Such a latent factor can be interpreted as a composite macro-financial state that jointly drives the expected returns of assets. It aggregates several cyclical forces, such as the business cycle, monetary and financial conditions, credit and funding conditions, systemic liquidity, inflation pressures, and transition-to-net-zero pressure. Although each component-
 admits observable proxies, none of them is directly observed in a noise-free way. Consequently, we assume that this state variable is unobservable and model its dynamics with an Ornstein–Uhlenbeck process, which reflects the mean-reverting nature of the aforementioned components. Within this framework, we characterize the optimal profile of the proposed carbon-penalised PPI strategy, namely, the optimal multiplier and the composition of the risky reference portfolio, to maximise the expected CRRA-
 utility of the carbon-penalised terminal cushion. As a by-product, we obtain a characterisation of the optimal strategy in the special case where the portfolio manager is endowed with a logarithmic utility function. Using dynamic programming techniques, we compute the optimal policy under both full and partial information settings. To address the partial information case, we derive the filter providing the conditional distribution of the unobservable factor given the available information set. In-
 particular, in our setup the conditional distribution is described by the finite-dimensional linear Kalman filter. The optimisation problem is solved by dynamic programming principle using a guess-and-verify approach. We also quantify the information premium arising from observing the latent factor, by deriving closed-form expressions for the loss of utility and for the relative efficiency of the partial-information strategy with respect to its full-information benchmark. We conclude the paper wi-
th a numerical study based on simulations, which allows to compare the behaviour of different investors. In particular, we focus on two key aspects: (i) the comparison between the portfolio composition of carbon-penalised PPI strategies and standard PPI strategies, and (ii) the strategies followed by a fully informed versus a partially informed portfolio insurer.
The remainder of the paper is organised as follows. Section 2 introduces the model setting. In Section 3, we introduce the carbon-penalised PPI strategy. In Section 4, we solve the optimisation problem in a full information setting. In Section 5 we solve the maximisation problem under partial information. We perform a numerical analysis in Section 6, and Section 7 poses the conclusions. In order to improve the flow of the paper, we provide proof of all results in the Appendix.
Literature review. This article refers to different strands of the literature that address the problem of integrating sustainability – measured either in terms of carbon emissions or ESG factors – as an additional objective in portfolio optimisation, alongside return maximisation and risk minimisation. From a methodological perspective, these optimisation problems can be addressed using three main approaches. The first approach is to preemptively exclude stocks and portfolios that do not reflect p-
re-specified sustainability criteria from the selection process. One pioneering work within this first approach is that of Andersson et al. [2016]. The authors propose preliminarily excluding stocks characterised by high carbon intensity and selecting the remainder to minimise the tracking error relative to a bench
3

mark portfolio. The authors show that such a method can reduce the portfolio’s carbon footprint by 50% while achieving negligible tracking error. In addition, they show that the optimal portfolio can outperform the benchmark portfolio since the market gradually incorporates the carbon risk into equity prices. Bolton et al. [2022] extend this approach by including the additional constraint that the optimal portfolio must meet the targets enshrined in the Paris Agreement. The proposed methodology m-
aintains negligible tracking error relative to major market indices, gradually decarbonising the portfolio over time. The second approach consists in keeping the investment universe unchanged and allowing all stocks to be selected as long as the overall portfolio meets certain sustainability requirements. In this context, Le Guenedal and Roncalli [2023] study an optimisation problem in which the deviation from a benchmark portfolio is minimised under the constraint that the portfolio does not exce-
ed a certain level of carbon risk. Similarly, De Spiegeleer et al. [2023] keep the initial universe of investment opportunities unchanged and select stocks such that the portfolio meets sustainability constraints measured not only in terms of carbon intensity but also in terms of ESG ratings. Their study shows that portfolios with low ESG scores initially show higher performance, while those with high ESG scores show better performance only in the long run. Moreover, they find that more stringent -
carbon intensity constraints do not significantly impact portfolio performance. Bolton et al. [2024] develops a framework for constructing equity portfolios aligned with the net-zero emissions target that balances broad diversification with a steady reduction in carbon footprint. Starting from a standard market index, the authors impose a time-varying carbon budget consistent with climate targets and solve a constrained tracking-error minimisation problem subject to decarbonisation constraint. The-
 resulting “carbon budget” indices deliver substantial reductions in portfolio emissions while preserving diversification and low tracking error. The third approach, which includes our contribution, incorporates sustainability directly into investor preferences and thereby increases the attractiveness of sustainable portfolios in terms of higher expected utility. More realistically, these models do not guarantee that a specific sustainability target will be achieved. Indeed, if the expected return-
 (respectively, volatility) of a given carbon-intensive stock remains sufficiently high (respectively, low), it can offset the negative impact of carbon risk. Here, Pa ́stor et al. [2021] develop an equilibrium model in which investors integrate sustainability into the risk–return trade-off, reducing the cost of capital of sustainable firms and, consequently, the level of their investments. In contrast, firms with a high carbon footprint are characterised by a high cost of capital, which reduces t-
he level of investment. Escobar-Anel [2022] proposes a multivariate CRRA utility that allows investors to assign different risk-aversion levels to green and brown assets. Numerical results show that higher risk aversion toward brown assets can substantially increase optimal green allocations, while treating all assets with the same risk aversion can lead to large welfare losses.
2 The market setup
Let (Ω, G, P) be a fixed probability space and T a finite time horizon coinciding with the terminal time of an investment. We also introduce a P-complete and right-continuous filtration G = {Gt}t∈[0,T ] representing the global information flow, and we assume that all processes below are G-adapted. We consider a financial market model consisting of n stocks with n-dimensional price processes S = {St}t∈[0,T ] where St = (St1, . . . , Stn)⊤ for all t ∈ [0, T ], and one risk-free asset B, that are tra-
ded continuously on [0, T ]. The dynamics of the risk-free are given by
dBt = rBtdt, B0 = 1,
4

where r > 0 denotes the constant risk-free interest rate. The price dynamics of the risky assets S are given by dSt = diag (St) (μtdt + ΣSdWS
t
) , (2.1)
where S0 = (S01, . . . , S0n)⊤ and Si0 ∈ R+ for all i = 1, . . . , n. In equation (2.1), ΣS = diag (σ1, . . . , σn), with σi > 0 for every i = 1, . . . , n, and WS = {WS}t∈[0,T ] is a standard G-Brownian motion in Rn with correlated components, namely d〈W S
i , WS
j 〉t = ρi,jdt, for constant correlation coefficients ρi,j ∈ [−1, 1], such that ρi,j = ρj,i, for every i, j = 1, . . . , n, and ρi,i = 1, for every i = 1, . . . , n. Moreover, μt is stochastic and unobservable. This assumption is motivated by the fact that drifts of financial assets are rarely constant and subject to random fluctuations. In particular, we assume that the drift process μ = {μt}t∈[0,T ] is of the form μt = μ(Yt) = aYt + b for every t ∈ [0, T ], with
a ∈ Rn and b ∈ Rn, where Y = {Yt}t∈[0,T ] is the common unobservable factor process. Indeed, Yt can represents macro-financial states that are hard to observe cleanly over time. Typical examples include the business cycle, monetary and financial conditions, credit and funding conditions, systemic liquidity, inflation pressures, and transition-to-net-zero emissions pressure. While these variables have observable proxies, none of them is directly observed in a noise-free way. Consequently, a partial-
 information framework is necessary to model these state processes. In this paper, we model the common latent factor Y as an Ornstein-Uhlenbeck (OU) process, namely
dYt = (λYt + β) dt + σY dWtY , Y0 ∼ N (Γ0, P0) , (2.2)
with λ, β ∈ R, σY > 0. Here, W Y = {WtY
}
t∈[0,T ] is a standard one-dimensional G-Brownian motion
correlated with WS with d〈W Y , W S
i 〉t = ρi,Y dt, where ρi,Y ∈ [−1, 1] for every i = 1, . . . , n. The OU choice captures the cyclical, mean-reverting nature of the above macro-financial variables while preserving the linear–Gaussian structure that makes filtering under partial information analytically tractable (see Section 5). Stocks are assumed to be issued by firms with different levels of carbon emissions, measured by carbon intensity. A firm’s carbon intensity is defined as the ratio between the total greenhouse gas emission-
s in metric tonnes of CO2 and total revenues (in USD millions). Based on carbon intensity, we cluster the stocks into two groups; in particular, we assume that the first k assets are characterised by low carbon intensity (green stocks) and the remaining n − k assets by high carbon intensity (brown stocks). From a practical perspective, a common approach (see, e.g., Ardia et al. [2023]) is to rank firms’ carbon intensity cross-sectionally and identify the two groups using percentiles. For instance,-
 firms with carbon intensity above (respectively, below) the p-th (respectively, (1 − p)-th) percentile are labeled as brown (respectivel, green).
A convenient representation for the latent factor–stock model. We denote by R the positive
definite correlation matrix of (WS, W Y )⊤,
R=

      
1 ρ1,2 . . . ρ1,n ρ1,Y
ρ1,2 1 . . . ρ2,n ρ2,Y
... ... . . . ... ...
ρ1,n ρ2,n . . . 1 ρn,Y
ρ1,Y ρ2,Y . . . ρn,Y 1

      
.
We express WS and W Y as a linear combination of uncorrelated standard G-Brownian motions,
namely Z = (ZS, ZY )⊤ = (Z1S, . . . , ZnS, ZY )⊤, as follow
(
WS
t
WtY
)
=L
(
ZS
t
ZtY
)
, t ∈ [0, T ],
5

where L = (li,j )i,j∈{1,...,n+1} ∈ R(n+1)×(n+1) is a lower triangular matrix obtained through the Cholesky
decomposition of the correlation matrix R, that is R = LL⊤. Thus, the dynamics in (2.2) and (2.1) can be rewritten as
dYt = (λYt + β) dt +  ̃ΣY dZS
t + σ ̃Y dZtY , Y0 ∼ N (Γ0, P0) ,
dSt = diag (St)
[
(aYt + b) dt +  ̃ΣSdZS
t
]
, S0 ∈ Rn+,
respectively, where Σ ̃ Y = σY LY ∈ R1×n, σ ̃Y = σY ln+1,n+1 ∈ R, Σ ̃ S = ΣSLS = (σ ̃i,j)i,j∈{1,...,n} ∈
Rn×n, with LY = (ln+1,j)j∈{1,...,n} ∈ R1×n and LS = (li,j)i,j∈{1,...,n} ∈ Rn×n.
3 The carbon-penalised proportional portfolio insurance strategy
The portfolio insurer employs a proportional portfolio insurance (PPI) strategy. Such strategies are designed to capitalise on the returns of the risky assets traded on the market while securing a prespecified amount G at maturity T . To achieve this goal, the fund manager divides her position between the bank account B, and a risky reference portfolio with value X = {Xt}t∈[0,T ]. The fund manager defines a floor process F = {Ft}t∈[0,T ] and a cushion process C = {Ct}t∈[0,T ]. The floor F is given-
 by
the present value of the guarantee amount G at maturity, that is Ft = Ge−r(T −t) for all t ∈ [0, T ], and represents the capital to be protected at every time.(1) The cushion C is the difference between the current PPI portfolio value V = {Vt}t∈[0,T ] and the floor, that is Ct = Vt − Ft for every t ∈ [0, T ]. The exposure to the risky reference portfolio X is linked to the cushion in the following way. At every time t ∈ [0, T ], if Vt > Ft the exposure to X is given by mtCt, where m = {mt}t∈[0,T ]-
 is the proportionality factor known as multiplier. However, if there exists a time τ := inf {t > 0 : Vt ≤ Ft} ∧ T , the portfolio value is entirely invested into the bank account B, since Ct = 0 for all t ∈ [τ ∧ T, T ]. To summarize, the exposure to the market index is given by mt (Ct)+ for every t ∈ [0, T ]. Hence, the dynamics of the PPI portfolio is given by
dVt =



rVtdt + (Vt − Ft) mt
( dXt
Xt
− rdt
)
, t < τ,
rVtdt, t ≥ τ,
(3.1)
with V0 = v0 being the initial endowment, and the dynamics of the cushion C = {Ct}t∈[τ∧T,T ] are
dCt
Ct
=rdt + mt
( dXt
Xt
− rdt
)
, C0 = c0 = v0 − F0. (3.2)
Next, we introduce the dynamics of the risky reference portfolio. Let π = {π1,t, . . . , πn,t}t∈[0,T ] be
the vector-valued process in Rn containing the composition percentage of the i-th stock in the risky reference portfolio, for every i = 1, . . . , n and t ∈ [0, T ]. Hence, the dynamics of Xπ = {Xπ
t }t∈[0,T ]
read as dXπ
t Xπ
t
= πt⊤ (aYt + b) dt + πt⊤Σ ̃ SdZS, X0 = x0.
Assuming that ∑n
i=1 πi,t = 1 for every t ∈ [0, T ], for any given couple (m, π) = {mt, πt}t∈[0,T ], equation (3.1) becomes
dV m,π
t=

 
 
rV m,π
t dt + (V m,π
t − Ft
) mt
[
πt⊤ (aYt + b − rn) dt + πt⊤Σ ̃ SdZS
t
]
, t < τ,
rV m,π
t dt, t ≥ τ,
(1)Typically, the guaranteed amount G is a pre-specified percentage of the initial endowment V0, namely G = V0 · P L, where PL ∈ (0, 1] is the so-called protection level.
6

with V m,π
0 = v0 being the initial endowment, and consequently, (3.2) is
dC m,π
t
C m,π
t
=
[
r + mtπt⊤ (aYt + b − rn)
]
dt + mtπt⊤Σ ̃ SdZS
t , Cm,π
0 = c0.
Here, we stress the dependence of the risky reference portfolio X on its composition π, and the dependence of both the PPI portfolio value V and the cushion C on π and the multiplier m. The fund manager’s objective is to maximise the expected utility from the terminal cushion in a carbonpenalised setting. In particular, the fund manager wants to prevent a high exposure of the strategy to brown stocks by adding a penalty term to the terminal cushion. In the same spirit of Rogers [2013], we assume t-
hat such penalisation is proportional to the riskiness of brown stocks, which is measured according to their realised variance. The carbon-penalised cushion at maturity is given by
Cˆ m,π
T = Cm,π
T exp
{
−1
2
∫T
0
ms2πs⊤
(
ΣSΣS⊤ ⊙ e
)
πsds
}
,
where ⊙ denotes the Hadamard product, and e =
(
0k 1n−kε
)⊤ ∈ Rn with ε ≥ 0 represents the fund manager’s carbon aversion with respect to brown stocks. It follows from Itˆo’s formula that the dynamics of Cˆm,π = {Cˆm,π
t }t∈[τ∧T,T ] is given by
dCˆ m,π
t
Cˆ m,π
t
=
[
r + mtπt⊤ (aYt + b − rn) − 1
2 mt2πt⊤
(
ΣSΣS⊤ ⊙ e
)
πt
]
dt + mtπt⊤  ̃ΣSdZS
t , Cˆπ
0 = cˆ0.
Remark 3.1. (i) The penalisation embeds sustainability into the portfolio insurer’s preferences by increasing risk aversion specifically toward high–carbon-intensity stocks. Unlike Rogers [2013], our penalty excludes the variance–covariance matrix to avoid bias from negatively correlated brown stocks; instead, it relies solely on realised variance. Moreover, we do not impose a fixed sustainability target as in Bolton et al. [2022] and Le Guenedal and Roncalli [2023]. This allows a flexible trade-o-
ff between a stock’s carbon intensity and its risk–return characteristics: highcarbon assets may still be held if their low volatility or high expected return compensates for their emissions. This is crucial for PI strategies, whose main goal is capital protection, as it prevents excessive penalisation of low-risk brown assets.
(ii) The carbon penalty admits two interpretations. It can be seen as (i) a proportional cost on carbon-intensive holdings, balancing risk premia against reputational or regulatory costs, or (ii) an endogenous increase in the insurer’s risk aversion toward brown stocks. As shown in Example 4.1, the effective risk aversion to such assets equals the market risk-aversion parameter plus the penalty term, naturally reducing exposure to carbon-intensive stocks (see, e.g. Colaneri et al. [2025] for more -
details on this point).
To reduce the number of controls of the optimisation problem, we introduce the process θ = {θt}t∈[0,T ] such that θt = mtπt, for every t ∈ [0, T ]. Hence, the dynamics of the carbon-penalised cushion can be rewritten as
dCˆ θ
t
Cˆθ
t
=
[
r + θt⊤ (aYt + b − rn) − 1
2 θt⊤
(
ΣSΣS⊤ ⊙ e
)
θt
]
dt + θt⊤Σ ̃ SdZS
t , Cˆθ
0 = cˆ0. (3.3)
In the next section, we address the optimisation problem of the portfolio insurer under two different information settings. We begin with the case where she has full information on all factor processes that drive the market, and we refer to this as the full information case. Second, we assume that she cannot observe the common stochastic factor Y directly, but she can only infer its value from the observation of stock prices, and we call this case the partial information setting.
7

4 Optimisation problem under full information
We introduce the set of admissible strategies.
Definition 4.1. A G-admissible carbon-penalised PPI strategy θ = {θt}t∈[0,T ] is a self-financing, G-predictable process such that
(i) E
[
∫T
0 |Ys|‖θs‖1 + ‖θs‖22ds
]
< ∞,
(ii) sup
t∈[0,T ]
E
[
(Cˆθ
t )d(1−δ)(1+α)]
< ∞, for some α > 0 and d > 1.
We denote the set of G-admissible strategies by AG.
Note that we can equivalently rewrite the set of admissible strategies in terms of (m, π) as follows. Precisely, a G-admissible carbon-penalised PPI strategy (m, π) = {mt, πt}t∈[0,T ] is a self-financing, G-predictable process such that
(i) the following integrability condition holds
E
[∫ T
0
|Ys||ms|‖πs‖1 + ms2‖πs‖22ds
]
< ∞,
where ‖ · ‖1 and ‖ · ‖2 denote the l1 and l2 norms in Rn,
(ii) sup
t∈[0,T ]
E
[
(Cˆm, π
t )d(1−δ)(1+α)]
< ∞, for some α > 0 and d > 1.
A fully informed portfolio insurer seeks to solve the following optimisation:
Maximise Et,c,y
[
(Cˆθ
T )1−δ
1−δ
]
, over all θ ∈ AG, (4.1)
where δ ∈ (0, 1) ∪ (1, +∞) represents the fund manager’s risk aversion parameter, and Et,c,y denotes the conditional expectation given Cˆt = c and Yt = y. The value function of the optimisation problem in equation (4.1), is given by
vˆ(t, c, y) := sup
θ∈AG
Et,c,y
[
(Cˆθ
T )1−δ
1−δ
]
. (4.2)
The problem is solved by employing dynamic programming principle. We consider the following Hamilton-Jacobi-Bellman equation

 
 
sup
θ∈A
vˆt(t, c, y) + Lθvˆ(t, c, y) = 0, (t, c, y) ∈ [0, T ) × R+ × R,
vˆ(T, c, y) = c1−δ
1 − δ , (c, y) ∈ R+ × R,
(4.3)
where for any constant control θ ∈ Rn, the operator Lθ denotes the infinitesimal generator of the process (Cˆθ
t , Yt) which is given by
LθF (t, c, y) =c
[
r + θ⊤ (ay + b − rn) − 1
2θ⊤ (
ΣSΣS⊤ ⊙ e
)
θ
]
Fc(t, c, y) + c2
2 θ⊤Σ ̃ SΣ ̃ S⊤θFc,c(t, c, y)
+ (λy + β) Fy(t, c, y) + σY2
2 Fy,y(t, c, y) + cθ⊤Σ ̃ S  ̃ΣY⊤Fc,y(t, c, y),
for every function F (·) ∈ C1,2,2 ([0, T ] × R+ × R). In the sequel, we prove that the value function, defined in equation (4.2), solves the equation (4.3). We begin our analysis of the optimisation problem under full information with a verification result.
8

Theorem 4.2 (Verification Theorem). Let f (t, c, y) ∈ C1,2,2([0, T ] × R+ × R) be a classical solution to the HJB equation (4.3) and assume that the following conditions hold:
(i) for any θ ∈ AG the family {f (t ∧ τ, Cˆt∧τ , Yt∧τ ), for all G–stopping times τ } is uniformly integrable;
(ii) there exists θ⋆ at which the supremum in equation (4.3) is attained.
Then f (t, c, y) = vˆ(t, c, y) and if {θ⋆(t, Yt)}t∈[0,T ] ∈ AG this is an optimal Markovian control.
Proof. See Appendix A.1.
Theorem 4.3. Let fˆ(t), gˆ(t), ˆh(t) ∈ Cb1([0, T ]) be the unique solutions to the following system of ODEs
0 =fˆt(t) +
[
(1 − δ)  ̃ΣY  ̃ΣS⊤Θˆ −1Σ ̃ S  ̃ΣY⊤ + σY2
] fˆ2(t) + 2
[
(1 − δ) Σ ̃ Y Σ ̃ S⊤ ˆΘ−1a + λ
] fˆ(t)
+ (1 − δ) a⊤ ˆΘ−1a, (4.4)
0 =gˆt(t) +
[
(1 − δ) Σ ̃ Y  ̃ΣS⊤Θˆ −1a + λ
]
gˆ(t) +
[
(1 − δ) Σ ̃ Y  ̃ΣS⊤Θˆ −1 (b − rn) + β
] fˆ(t)
+
[
(1 − δ) Σ ̃ Y Σ ̃ S⊤ ˆΘ−1Σ ̃ SΣ ̃ Y⊤ + σY2
] fˆ(t)gˆ(t) + (1 − δ) a⊤ ˆΘ−1 (b − rn) , (4.5)
0 =ˆht(t) + (1 − δ) r +
[
(1 − δ) Σ ̃ Y  ̃ΣS⊤Θˆ −1 (b − rn) + β
]
gˆ(t) + σY2
2 fˆ(t)
+1
2
[
(1 − δ) Σ ̃ Y  ̃ΣS⊤Θˆ −1  ̃ΣS  ̃ΣY⊤ + σY2
]
gˆ2(t) + 1 − δ
2 (b − rn)⊤ Θˆ −1 (b − rn) , (4.6)
with terminal conditions fˆ(T ) = gˆ(T ) = ˆh(T ) = 0, where Θˆ = (ΣSΣS⊤
) ⊙ e + δΣ ̃ S  ̃ΣS⊤. Then, the optimal control is given by
θ⋆(t, y) = Θˆ −1 (ay + b − rn) + ˆΘ−1  ̃ΣSΣ ̃ Y⊤
(fˆ(t)y + gˆ(t)
)
, (4.7)
and the value function satisfies
vˆ(t, c, y) = c1−δ
1 − δ exp
{ fˆ(t)
2 y2 + gˆ(t)y + ˆh(t)
}
. (4.8)
Proof. See Appendix A.2.
We now characterise the range of risk aversion parameters that guarantee fˆ(t) ∈ Cb1([0, T ]). We define the function ∆(x) : (0, +∞) → R as follows
∆(x) = 4
{[
(1 − x) Σ ̃ Y Σ ̃ S⊤ ˆΘ−1a + λ
]2 −
[
(1 − x)2  ̃ΣY Σ ̃ S⊤Θˆ −1Σ ̃ SΣ ̃ Y⊤ + (1 − x) σY2
]
a⊤Θˆ −1a
}
,
which represents the discriminant of the Riccati ODE fˆ in (4.4), and define the set P = {δ ∈ (0, 1) ∪ (1, +∞) : ∆(δ) > 0}. The set P represents set of risk aversion parameters for which fˆ(t) ∈ Cb1([0, T ]).
Proposition 4.4. The set P is not empty.
Proof. This result is a consequence of the fact that ∆(x) is a continuous function and that ∆(1) = λ2 > 0; hence, there exists a neighborhood of δ = 1 contained in P such that ∆(δ) > 0.
9

By virtue of Proposition 4.4, there exist values of δ contained in P such that fˆ(t) ∈ Cb1([0, T ]). As a consequence, the solutions of the linear ODEs in equations (4.5) and (4.6) also exist and share the same regularity.
Remark 4.5. Proposition 4.4 ensures that the system of ODEs in equations (4.4), (4.5), and (4.6) admits a solution that does not explode in finite time, for some values of the risk aversion parameter δ. In particular, it guarantees the existence of a solution for risk aversion parameters that are close to logarithmic utility. In a multidimensional setting, such as the one considered in this paper, deriving conditions for the existence of a solution over a broader range of δ is not straightforward.-
 As a result, identifying the largest possible set P, which depends on several model parameters (e.g., the variancecovariance matrices), remains a challenging task. Nevertheless, P can be explicitly identified in a simplified setting with two uncorrelated assets, independent of the common stochastic factor Y (see Appendix B).
The optimal candidate strategy θ⋆ = {θ⋆(t, Yt)}t∈[0,T ], where θ⋆(t, y) is defined by equation (4.7), is Markovian, as it depends exclusively on time and the exogenous factor Y . We now provide conditions on the model parameters ensuring that condition (i) of Theorem 4.2 is satisfied and that θ⋆ is an admissible control, according to Definition 4.1. These results are stated and proved in the following propositions.
Proposition 4.6. Assume that one of the two following conditions holds
(i) δ ∈ P ∩ (1, +∞),
(ii) δ ∈ P ∩ (0, 1) and
1 − q(1 + α)fˆ(0) max {P0, Var[YT ]} > 0, (4.9)
for some q > 1.
Then, for any admissible strategy θ ∈ AG, {v(τ, Cˆτ , Yτ ), for all G-stopping times τ ≤ T } forms a uniformly integrable family.
Proof. The proof is provided in Appendix A.3.
In the next Proposition, we provide sufficient conditions for admissibility of the optimal strategy.
Proposition 4.7. Assume that one of the two following conditions holds
(i) δ ∈ P ∩ (0, 1) and
1 − 8d(1 − δ)(1 + α)nT [(1 ∨ d(1 − δ)(1 + α)w) c21 + a2M
] max {P0, Var[YT ]} > 0, (4.10)
(ii) δ ∈ P ∩ (1, +∞) and
1 − 8d(1 − δ)(1 + α)nT [(−(1 + w) ∧ d(1 − δ)(1 + α)w ̃) c21 − a2M
] max {P0, Var[YT ]} > 0, (4.11)
for some d > 1, where
aM = max
i=1,...,n | (a)i |, (4.12)
w = max
i,j=1,...,n
∣ ∣ ∣ ∣
(Σ ̃ S  ̃ΣS⊤
)
i,j
∣ ∣ ∣ ∣
, (4.13)
w ̃ = max
i,j=1,...,n |(Θˆ )i,j |, (4.14)
c1 = max
i=1,...,n
∣ ∣ ∣ ∣
(
ˆΘ−1
(
a + Σ ̃ SΣ ̃ Y⊤ sup
t∈[0,T ]
fˆ(t)
))
i
∣ ∣ ∣ ∣
. (4.15)
10

Then, the process θ⋆ given by equation (4.7) is an admissible strategy.
Proof. The proof is provided in Appendix A.4.
Under the assumption of Proposition 4.6, the value function vˆ is the unique solution of the optimisation problem 4.1 and θ⋆ ∈ A. Given θ⋆, we can characterise the optimal multiplier m⋆ and the optimal stock composition percentages π⋆ of the risky reference portfolio as in the following Proposition.
Proposition 4.8. The optimal multiplier is given by mt⋆ = θ⋆,⊤1n and the optimal composition
percentage of the i-th stock in the risky reference portfolio X is given by πi⋆,t = θi⋆,t
θ⋆,⊤1n , for every
i = 1, . . . , n, and t ∈ [0, T ].
Proof. The proof is provided in Appendix A.5.
Example 4.1. To analyze the optimal PPI strategy, we consider the case in which only two stocks, S1 and S2, are traded on the market, representing a green and a brown stock, respectively. For simplicity, we assume that S1 and S2 are driven by independent Brownian motions. Applying Proposition 4.8, the optimal multiplier m⋆ reads as follows
m⋆(t, y; δ, ε) = θ1⋆(t, y; δ) + θ2⋆(t, y; δ, ε),
where θ1⋆(t, y; δ) = ξ1M (t, y; δ) + ξ1I (t, y; δ) and θ2⋆(t, y; δ, ε) = ξ2M (t, y; δ, ε) + ξ2I(t, y; δ, ε), with
ξ1M (t, y; δ) = 1
δ
a1y + b1 − r σ12
, ξ1I (t, y; δ) = 1
δ
σY ρ1,Y
σ1
(fˆ(t)y + gˆ(t)
)
, (4.16)
ξ2M (t, y; δ, ε) = 1
ε+δ
a2y + b2 − r σ22
, ξ2I (t, y; δ, ε) = 1
ε+δ
σY ρ2,Y
σ2
(fˆ(t)y + gˆ(t)
)
, (4.17)
for every (t, y) ∈ [0, T ]× R. The optimal multiplier is the sum of the myopic and intertemporal hedging demand relative to each of the two stocks included in the risky reference portfolio. Both the myopic and the intertemporal components relative to the brown stock depend on the carbon aversion factor ε. Hence, by introducing a penalty term proportional to the realised volatilities of brown stocks in the objective function, we have effectively increased the fund manager’s risk aversion toward thi-
s category of assets. The optimal composition percentages of the stocks in the risky reference portfolio (π1⋆, π2⋆) are given by
π⋆
1(t, y; δ, ε) =
(ε + δ)
[
a1y + b1 − r + σ1σY ρ1,Y
(fˆ(t)y + gˆ(t)
)]
σ22
(ε + δ) (a1y + b1 − r) σ22 + δ (a2y + b2 − r) σ12 + [(ε + δ) σ1σ22ρ1,Y + δσ12σ2ρ2,Y ] σY (fˆ(t)y + gˆ(t)) ,
π⋆
2(t, y; δ, ε) =
δ
[
a2y + b2 − r + σ2σY ρ2,Y (fˆ(t)y + gˆ(t))
]
σ12
(ε + δ) (a1y + b1 − r) σ22 + δ (a2y + b2 − r) σ12 + [(ε + δ) σ1σ22ρ1,Y + δσ12σ2ρ2,Y ] σY (fˆ(t)y + gˆ(t)) ,
for every (t, y) ∈ [0, T ]×R. We observe that π1⋆ (respectively, π2⋆) is increasing (respectively, decreasing) with respect to the carbon aversion parameter ε. As expected, the higher ε, the lower (respectively, higher) the presence of brown (respectively, green) stock in X. Hence, any increase of ε results in a reduction of the overall carbon intensity of the risky reference portfolio and, consequently, of the PPI
11

strategy. In the limiting case where ε → ∞, π1⋆ = 1 and π2⋆ = 0, meaning that the risky reference portfolio fully coincides with the green stock. Moreover, the optimal multiplier becomes
m⋆(t, y; δ, ε = +∞) = 1
δ
[
a1y + b1 − r σ12
+ σY ρ1,Y (fˆ(t; ε = ∞)y + gˆ(t; ε = ∞))
σ1
]
,
recovering the optimal PPI strategy with one single investment asset, see, e.g., Zieling et al. [2014].
Logarithmic case. We assume that the fund manager is endowed with a logarithmic utility function. In such a case, the optimisation problem (4.1) can be reformulated as follows
Maximise Et,c,y [
log(Cˆθ
T)
]
, (4.18)
over all θ ∈ AG, and the corresponding value function is given by
v(t, c, y) := sup
θ∈AG
Et,c,y [
log(Cˆθ
T)
]
.
For the logarithmic case, the optimal strategy can be derived by applying pointwise maximisation, which also yields an explicit characterisation for the value function. This result is presented in the following corollary.
Corollary 4.9. Consider a fund manager endowed with a logarithmic utility function and a carbon aversion ε ≥ 0, then the optimal controls θ⋆ ∈ AG is given by
θ⋆(t, y) = Θ−1 (ay + b − rn) ,
where Θ = (ΣSΣS⊤
) ⊙ e +  ̃ΣSΣ ̃ S⊤. The value function reads as
v(t, c, y) = log(c) + r(T − t) + f (t)y2 + g(t)y + h(t), (4.19)
where
f (t) = a⊤Θ−1a
2λ
(
e2λ(T −t) − 1
)
,
g(t) = a⊤Θ−1(b − rn)
λ
(
eλ(T −t) − 1
)
+ β a⊤Θ−1a
2λ2
(
eλ(T −t) − 1
)2 ,
h(t) =
[
r+ 1
2 (b − rn)⊤ Θ−1 (b − rn)
]
(T − t) + β a⊤Θ−1 (b − rn)
λ
[
eλ(T −t) − 1
λ − (T − t)
]
+ β2 a⊤Θ−1a
2λ2
[
e2λ(T −t) − 1
2λ − 2
λ
(
eλ(T −t) − 1
)
+T −t
]
+ σY2
2
a⊤Θ−1a
2λ
[
e2λ(T −t) − 1
2λ − (T − t)
]
,
for every t ∈ [0, T ].
Proof. The proof is provided in Appendix A.6.
In the case of the logarithmic utility function, the optimal strategy (m⋆, π1⋆, π2⋆) discussed in Example 4.1, becomes
m⋆(t, y; 1, ε) = ξ1M (t, y; 1) + ξ2M (t, y; 1, ε),
12

π1⋆(t, y; 1, ε) = ξ1M (t, y; 1)
m⋆(t, y; 1, ε) , π2⋆(t, y; 1, ε) = ξ2M (t, y; 1, ε)
m⋆(t, y; 1, ε) ,
for every (t, y) ∈ [0, T ] × R. As expected by the nature of the utility function, the optimal multiplier presents only the myopic component. The factor ξ2 depends on carbon penalisation in the same form as for the power utility case. Similar considerations on (π1⋆, π2⋆), as for the power utility case, hold for logarithmic utility.
5 Optimisation problem under partial information
In this section, we address the utility maximisation problem faced by a portfolio insurer who cannot directly observe the common stochastic factor Y . The portfolio insurer’s available information is limited to observing the price processes of green and brown stocks. Mathematically, the information flow accessible to the fund manager is given by the natural filtration generated by S, referred to as F = {Ft}t∈[0,T ], where Ft = σ {Su, 0 ≤ u ≤ t} ∨ N such that Ft ⊂ Gt. Here, N represents the collect-
ion of P-null sets, and F0 is the trivial σ-algebra. The portfolio insurer, operating under partial information, seeks to maximise the expected CRRA utility of the terminal carbon-penalised cushion over the set of F-admissible strageies AF defined below (see Definition 5.1). To address the optimisation problem with partial observations, we introduce the conditional distribution of the unobservable factor process Y , using stochastic filtering theory. Let Γ and P be the conditional expectation and -
the conditional variance of the common stochastic factor Y given the available information, that is, Γt := E [Yt|Ft] and Pt := E
[
(Yt − Γt)2 |Ft
]
for every
t ∈ [0, T ], respectively. Since the conditional distribution of Y is Gaussian, it is fully characterised by its conditional mean and variance dynamics. Moreover, since F0 is the trivial σ-algebra, the initial values Γ and P correspond to the parameters of the initial distribution of Y , that is, Y0 ∼ N (Γ0, P0). To characterise the dynamics of Γ and P , we introduce the innovation process IS = {IS
t
}
t∈[0,T ],
IS
t = Σ ̃ −1
Sa
∫t
0
(Ys − Γs) ds + ZS
t,
for every t ∈ [0, T ]. As proven in [Liptser and Shiryaev, 2013, Section 10.3], IS is an (F, P)-Brownian motion in Rn, and the processes Γ and P are the unique solutions to the system
dΓt = (λΓt + β) dt + P ̄ t
(Σ ̃ S⊤
)−1 dIS
t , Γ0 ∈ R,
dPt
dt = 2λPt + σY2 −  ̄Pt
(Σ ̃ SΣ ̃ S⊤
)−1 P ̄ t⊤, P0 ∈ R+,
where  ̄Pt = Σ ̃ Y Σ ̃ S⊤ + Pta⊤ for every t ∈ [0, T ], and Pt and P ̄t are deterministic functions. To highlight this property, from now on we will write P (t) and P ̄(t) instead of Pt and P ̄t, respectively. The semimartingale representations of S with respect to the information filtration F are given by
dSt = diag (St)
[
(aΓt + b) dt + Σ ̃ SdIS
t
]
, S0 ∈ Rn+,
leading to the following representation for the carbon-penalised cushion process
dCˆ θ
t Cˆθ
t
=
[
r + θt⊤ (aΓt + b − rn) − 1
2 θt⊤
(
ΣSΣS⊤ ⊙ e
)
θt
]
dt + θt⊤Σ ̃ SdIS
t , Cˆθ
0 = cˆ0.
Since the portfolio insurer’s decisions depend on the information available at time t, we define the set of admissible strategies θ as follows.
13

Definition 5.1. A F-admissible carbon-penalised PPI strategy θ = {θ}t∈[0,T ] is a self-financing, Fpredictable process such that
(i) E
[
∫T
0 |Γs|‖θs‖1 + ‖θs‖22ds
]
< ∞,
(ii) sup
t∈[0,T ]
E
[
(Cˆθ
t )d(1−δ)(1+α)]
< ∞, for some α > 0 and d > 1.
We denote the set of F-admissible strategies by AF.(2)
Thanks to uniqueness of the solution of the filtering equation, we can consider Cˆ and Γ as state processes and formulate the separated problem as follows
Maximise Et,c,γ
[
(Cˆθ
T )1−δ
1−δ
]
, over all θ ∈ AF,
where Et,c,γ denotes the conditional expectation given Cˆt = c and Γt = γ, where (c, γ) ∈ R+ × R. We define the value function by
Vˆ (t, c, γ) := sup
θ∈AF
Et,c,γ
[
(Cˆθ
T )1−δ
1−δ
]
.
Also in this case, we resort to dynamic programming principle. The HJB equation is given by

 
 
sup
θ∈AF
Vˆt(t, c, γ) + LθVˆ (t, c, γ) = 0, (t, c, γ) ∈ [0, T ) × R+ × R,
Vˆ (T, c, γ) = c1−δ
1 − δ , (c, γ) ∈ R+ × R,
(5.1)
where for any constant control θ ∈ Rn, the operator Lθ is given by
LθF (t, c, γ) =c
[
r + θt⊤ (aγ + b − rn) − 1
2θ⊤ (
ΣSΣS⊤ ⊙ e
)
θ
]
Fc(t, c, γ)
+ c2
2 θ⊤  ̃ΣS  ̃ΣS⊤θ⊤Fc,c(t, c, γ) + (λγ + β) Fγ (t, c, γ)
+1
2
P ̄ (t)
(  ̃ΣS  ̃ΣS⊤
)−1 P ̄ (t)⊤Fγ,γ (t, c, γ) + cθ⊤P ̄ (t)⊤Fc,γ(t, c, γ),
for every function F (·) ∈ C1,2,2 ([0, T ] × R+ × R). First, we establish the following verification result.
Theorem 5.2 (Verification Theorem). Let f (t, c, γ) ∈ C1,2,2([0, T ] × R+ × R) be a classical solution to the HJB equation (4.3) and assume that the following conditions hold:
(i) for any θ ∈ AF the family {f (t ∧ τ, Cˆt∧τ , Γt∧τ ), for all F − stopping times τ } is uniformly integrable;
(ii) there exists θ ̄⋆ at which the supremum in equation (5.1) is attained.
Then f (t, c, γ) = Vˆ (t, c, γ) and if {θ ̄⋆(t, Γt)}t∈[0,T ] ∈ AF this is an optimal Markovian control.
Proof. The proof replicates the line of that of Theorem 4.2.
(2)As in the full-information case, the set of admissible strategies can also be characterised in terms of m and π, but we omit reporting it here for brevity.
14

In view of the Verification Theorem, we characterise the value function as the unique classical solution of the HJB equation. Also in this case, we resort to a guess-and-verify approach. The following result
presents a candidate for the value function Vˆ and the optimal control θ ̄⋆ under partial information. We let Θˆ be the same of Theorem 4.3 and we introduce the following system od ODEs:
0 =f ̄t(t) +
[
(1 − δ)  ̄P(t) ˆΘ−1 (P ̄ (t))⊤ + P ̄ (t)
(Σ ̃ SΣ ̃ S⊤
)−1 (P ̄ (t))⊤
]
f ̄2(t)
+2
[
(1 − δ) P ̄ (t) ˆΘ−1a + λ
] f ̄(t) + (1 − δ) a⊤ ˆΘ−1a, (5.2)
0 =g ̄t(t) +
[
(1 − δ) P ̄ (t) ˆΘ−1a + λ
]
g ̄(t) +
[
(1 − δ) P ̄ (t) ˆΘ−1 (b − rn) + β
] f ̄(t)
+
[
(1 − δ) P ̄ (t) ˆΘ−1 (P ̄ (t))⊤ + P ̄ (t)
(Σ ̃ S  ̃ΣS⊤
)−1 (P ̄ (t))⊤
]
f ̄(t)g ̄(t)
+ (1 − δ) a⊤ ˆΘ−1 (b − rn) , (5.3)
0 = ̄ht(t) + (1 − δ)r +
[
(1 − δ) P ̄ (t) ˆΘ−1 (b − rn) + β
]
g ̄(t) + 1
2
 ̄P(t)
(  ̃ΣS  ̃ΣS⊤
)−1 (P ̄ (t))⊤ f ̄(t)
+1
2
[
(1 − δ)  ̄P(t) ˆΘ−1 ( ̄P(t))⊤ + P ̄ (t)
(Σ ̃ SΣ ̃ S⊤
)−1 (  ̄P(t))⊤
]
g ̄2(t)
+ 1−δ
2 (b − rn)⊤ Θˆ −1 (b − rn) . (5.4)
Theorem 5.3. Let f ̄(·), g ̄(·),  ̄h(·) ∈ Cb1([0, T ]) be the unique solutions of the following system of ODEs
(5.2),(5.3),(5.4), with terminal conditions f ̄(T ) = g ̄(T ) =  ̄h(T ) = 0. Then, the optimal control θ ̄⋆ is given by θ ̄t⋆ = θ ̄⋆(t, Γt) where
θ ̄⋆(t, γ) = ˆΘ−1 (aγ + b − rn) + ˆΘ−1P ̄ (t)⊤ (f ̄(t)γ + g ̄(t)) , (5.5)
and the value function satisfies
Vˆ (t, c, γ) = c1−δ
1 − δ exp
{ f ̄(t)
2 γ2 + g ̄(t)γ +  ̄h(t)
}
. (5.6)
Moreover, let (fˆ(t), gˆ(t), ˆh(t)) be the unique solutions on [0, T ] of the systems of ODEs given by equations (4.4), (4.5),(4.6) with fˆ(T ) = gˆ(T ) = ˆh(T ) = 0. Then, for all t ∈ [0, T ], 1 − P (t)fˆ(t) > 0 and
f ̄(t) = fˆ(t)
1 − P (t)fˆ(t) , (5.7)
g ̄(t) = gˆ(t)
1 − P (t)fˆ(t) , (5.8)
 ̄h(t) =ˆh(t) − 1
2 log
(
1 − P (t)fˆ(t)
)
+1
2
gˆ2(t)P (t)
1 − P (t)fˆ(t)
− 1−δ
2
∫T
t
P (s)
1 − P (s)fˆ(s)
[Σ ̃ Y  ̃ΣS⊤fˆ(s) + a⊤] ˆΘ−1 [Σ ̃ Y  ̃ΣS⊤fˆ(s) + a⊤]⊤ ds, (5.9)
implying that f ̄(t), g ̄(t),  ̄h(t) ∈ Cb1([0, T ]).
Proof. The proof is provided in Appendix C.1.
Note that, in view of the relationship between fˆ, gˆ, ˆh and f ̄, g ̄,  ̄h and the properties of the solution of the system (4.4), (4.5), (4.6), we immediately get that the system (5.4), (5.3) and (5.4) admits a unique solution in Cb1([0, T ]).
15

As in the full information case, the candidate optimal strategy θ ̄⋆ in equation (5.5) is Markovian; the difference is that under partial information the common stochastic factor Y is replaced by its filtered estimate Γ. We now provide sufficient conditions on model parameters that guarantee that condition (ii) of Theorem 5.2 is satisfied and that θ ̄⋆ given by equation (5.5) is an admissible control, according to Definition 5.1. The following Proposition is a preliminary results.
Proposition 5.4. Let f ̄(t) be solution of the ODE in equation (5.2) on [0, T ]. Then, f ̄(t) is strictly positive and decreasing on [0, T ] if δ ∈ P ∩ (0, 1) and is strictly negative and increasing if δ ∈ P ∩ (1, +∞).
Proof. The proof is provided in Appendix C.2.
Next, we will use this result to show that condition (ii) of Theorem 5.2 is satisfied.
Proposition 5.5. Assume that one of the two following conditions holds
(i) δ ∈ P ∩ (1, +∞),
(ii) δ ∈ P ∩ (0, 1) and
1 − q(1 + α) fˆ(0)
1 − P (0)fˆ(0) max {P0, Var[YT ]} > 0 (5.10)
for some q > 1.
Then, for any admissible strategy θ ∈ AF, {Vˆ (τ, Cˆτ , Yτ ), for all F–stopping times τ ≤ T } forms a uniformly integrable family.
Proof. The proof is provided in Appendix C.4.
To close the loop, we provide sufficient conditions for admissibility of the optimal strategy.
Proposition 5.6. Assume that one of the two following conditions holds
(i) δ ∈ P ∩ (0, 1) and
1 − 8d(1 − δ)(1 + α)nT [(1 ∨ d(1 − δ)(1 + α)w) c ̃21 + a2M
] max {P0, Var[YT ]} > 0,
(ii) δ ∈ P ∩ (1, +∞) and
1 − 8d(1 − δ)(1 + α)nT [(−(1 + w) ∧ d(1 − δ)(1 + α)w ̃) c ̃21 − a2M
] max {P0, Var[YT ]} > 0,
where w and w ̃ are given by equations (4.13) and (4.14) respectively, and c ̃1 is given by
c ̃1 = max
i=1,...,n
∣ ∣ ∣ ∣
(
ˆΘ−1
[
a + Σ ̃ S
(  ̃Σ−1
S
)⊤
(
a sup
u∈[0,T ]
P (u)f ̄(u) + Σ ̃ S  ̃ΣY⊤ sup
u∈[0,T ]
f ̄(u)
)])
i
∣ ∣ ∣ ∣
Then the process θ ̄⋆ given by equation (5.5) is an admissible strategy.
Proof. The proof replicates the line of that of Theorem 4.7.
16

Under the assumption of Proposition 5.5, the candidate optimal strategy is admissible and Vˆ in equation (5.6) is the unique solution of the optimisation problem. As for the full information case, we can derive the original controls  ̄m⋆ and π ̄ ⋆ by applying proposition 4.8. Adapting Example 4.1 to the case of a PI insurer with partial information, the optimal multiplier becomes
 ̄m⋆(t, γ; ε, δ) = θ ̄1⋆(t, γ; δ) + θ ̄2⋆(t, γ; δ, ε), (5.11)
where
θ ̄1⋆(t, γ; δ) = ξ1M (t, γ; δ) + ξ ̃1I (t, γ; δ) + ξ1P (t, γ; δ),
θ ̄2⋆(t, γ; δ, ε) = ξ2M (t, γ; δ, ε) + ξ ̃2I (t, γ; δ, ε) + ξ2P (t, γ; δ, ε),
with
ξ ̃1I(t, γ; δ) = 1
δ
σY ρ1,Y
σ1
(f ̄(t)γ + g ̄(t)) , ξ1P (t, γ; δ) = 1
δ
a1P (t) σ12
(f ̄(t)γ + g ̄(t)) ,
ξ ̃2I (t, γ; δ, ε) = 1
ε+δ
σY ρ2,Y
σ2
(f ̄(t)γ + g ̄(t)) , ξ2P (t, γ; δ, ε) = 1
ε+δ
a2P (t) σ22
(f ̄(t)γ + g ̄(t)) ,
for every (t, γ) ∈ [0, T ] × R. ξ1M (t, γ; δ) and ξ2M (t, γ; δ, ε) are defined as in equations (4.16) and (4.17). As shown in equation (5.11), the optimal multiplier retains the same structure obtained for the CRRA investor under complete information. However, in this case, two additional terms appear, namely ξ1P and ξ2P , which act as correction factors accounting for the uncertainty due to the non-observability of the common stochastic factor Y . As for the previous cases, all the components rel-
ated to the brown stock depend on the carbon aversion parameter ε.
Logarithmic case. For the logarithmic case the separated problem reads as
Maximise Et,c,γ [
log(Cˆθ
T)
]
, over all θ ∈ AF
and the corresponding value function is given by
V ̃ (t, c, γ) := sup
θ∈AF
Et,c,γ [
log(Cˆθ
T)
]
.
The next theorem characterizes the optimal strategy and the value function V ̃ .
Corollary 5.7. Consider a fund manager endowed with logarithmic utility function and a carbon aversion ε ≥ 0, then the optimal controls θ ̄⋆ ∈ AF is given by θ ̄t⋆ = θ ̄⋆(t, Γt) where
θ ̄⋆(t, γ) = Θ−1 (aγ + b − rn) . (5.12)
where Θ is the same of Corollary 4.9. The value function is given by
V ̃ (t, c, γ) = log(c) + r(T − t) + f (t)
2 γ2 + g(t)γ +  ̃h(t), (5.13)
where
 ̃h(t) = h(t) + a⊤Θ−1a
2
(
∫T
t
P (s)ds − P (t) e2λ(T −t) − 1
2
)
, (5.14)
for every t ∈ [0, T ], with f , g and h being the same of Corollary 4.9.
Proof. The proof is provided in Appendix C.3.
17

5.1 Loss of utility
Since full information allows the portfolio insurer to observe the common stochastic factor directly, the fully informed portfolio insurer has an advantage over its partial-information counterpart. Therefore, as shown in Lee and Papanicolaou [2016], there is always an information premium, which is nonnegative. In the present paper, we quantify this premium by computing the loss of utility L = {Lt}t∈[0,T ] due to partial information, defined as
Lt = Ec [
V full(t, C, Yt) − V partial(t, C, Γt)|Ft
]
, t ∈ [0, T ].
An alternative way to assess the informational advantage is to express the information premium in monetary terms; this is the so-called efficiency (see, e.g., Rogers [2001], Brendle [2006] and Sass et al. [2017]). Specifically, in the PPI framework, the efficiency of the partially-informed strategy relative to the full-information strategy is defined as the fraction of the initial cushion ξ that a fully informed investor would need to obtain the same the expected utility of the terminal cushion ac-
hieved by a partially informed investor starting with a unitary cushion. Hence, it is found by solving the following equation for ζ:
E
[
V full(0, ζ, Y0) − V partial(0, 1, Γ0)|F0
]
= 0. (5.15)
In what follows, we analytically characterise the loss of utility and the efficiency of a portfolio insurer who does not directly observe the common stochastic factor Y , for both the CRRA and log-utility cases.
Proposition 5.8. The loss of utility of a partially informed portfolio insurer endowed with a CRRA utility function is given by
Lt = c1−δ
1−δ
(
e
1−δ 2
∫T t
P (s)
1−P (s)fˆ(s) [  ̃ΣY  ̃ΣS⊤fˆ(s)+a⊤]Θˆ −1[  ̃ΣY  ̃ΣS⊤fˆ(s)+a⊤]⊤ds − 1
)
e
f ̄(t)
2 Γt2+g ̄(t)Γt+ ̄h(t), (5.16)
for every t ∈ [0, T ], and the corresponding efficiency of the carbon-penalised PPI strategy is given by
ζ = exp
{
−1
2
∫T
0
P (s)
1 − P (s)fˆ(s)
[  ̃ΣY Σ ̃ S⊤fˆ(s) + a⊤] Θˆ −1 [Σ ̃ Y Σ ̃ S⊤fˆ(s) + a⊤]⊤ ds
}
. (5.17)
Proof. The proof is provided in Appendix C.5.
Proposition 5.9. The loss of utility of a partially informed portfolio insurer endowed with a logarithmic utility function is given by
Lt = a⊤Θ−1a
2
∫T
t
P (s)ds, (5.18)
for every t ∈ [0, T ], and the efficiency of the corresponding carbon-penalised PPI strategy is given by
ζ = exp
{
− a⊤Θ−1a
2
∫T
0
P (s)ds
}
. (5.19)
Proof. See Appendix C.6.
Proposition 5.8, and more evidently Proposition 5.9, show that the loss of utility is strictly positive. This outcome was to be expected, since partially informed strategies constitute a subset of the fully informed ones. Consequently, a portfolio insurer with full information can always replicate, or improve upon, the performance achievable under partial information. Equivalently, the relative efficiency of the carbon-penalised strategy under partial information, vis-`a-vis its full-information c-
ounterpart, is given by ζ < 1, confirming that partial information entail a reduction in attainable utility.
18

6 Numerical experiments
In this section, we perform a simulation study to examine the behavior of the optimal carbon-penalised PPI strategy and to compare the strategies of a fully informed versus a partially informed portfolio insurer. We consider n = 4 traded stocks: the first two are low-carbon (green), while the remaining two are high-carbon (brown). Unless otherwise stated, model parameters are fixed as in Table 6.1. Moreover, throughout the numerical experiments, we fix the risk-free rate at r = 0.01, the PPI prote-
ction level at PL = 1, and the initial wealth at V0 = 1.
a b ΣS
S1 0.080 −0.03 0.19
S2 0.055 0.01 0.21
S3 0.045 0.01 0.22
S4 0.075 −0.03 0.15
(a) Parameters of the stock prices.
λ β σY Γ0 P0
−0.5 0.5 0.05 1 0.0025
(b) Parameters of the common stochastic factor Y .
R=

     
1.00 0.32 0.25 0.10 0.35 0.32 1.00 0.30 0.12 −0.25 0.25 0.30 1.00 0.20 −0.15 0.10 0.12 0.20 1.00 0.325 0.35 −0.25 −0.15 0.325 1

     
(c) Correlation matrix R.
Table 6.1: General parameters for the numerical study.
To understand the relationship between the unobservable factor process Y at its filtered estimate Γ, we compare a single trajectory of these processes in Figure 6.1. The filter (dashed magenta line) shows less variability than the true trajectory, yet is able to capture the upward and downward trends of the factor Y (solid blue line). We recall that the goodness of the filter depends highly on the signal-tonoise ratio. In particular, if volatility of stock prices is large, the observation is noisy-
, the filter gets worse.
Figure 6.1: True trajectory of the common stochastic factor Y (solid blue line) and trajectory of its filtered estimate Γ (dashed magenta line).
6.1 Numerical Experiments for the partial information case
We begin our analysis with a numerical study of the optimal exposures of the carbon-penalised PPI strategy to the traded stocks. We focus on the partial information case, which is one of the key features of our model. We denote by  ̄E⋆ = { ̄Et⋆}t∈[0,T ] the exposure to the risky assets, where  ̄Et⋆ =
19

(E ̄1⋆,t, . . . , E ̄n⋆,t
)⊤, are given by
E ̄i⋆,t :=  ̄mt⋆π ̄i⋆,t
(V  ̄m⋆,π ̄⋆
t − Ft)+
V  ̄m⋆,π ̄ ⋆
t
, t ∈ [0, T ],
for every i = 1, . . . , n, and for the optimal strategy under partial information (  ̄m⋆, π ̄⋆) (we recall here that V m ̄ ⋆,π ̄⋆ is the value of the strategy under partial information). We conduct a static analysis at t = 0 and a dynamic one thereafter. The histograms in Figure 6.2 show the optimal exposures E ̄i⋆,0 to each traded stock at t = 0, for every i = 1, . . . , n, across different levels of the portfolio insurer’s risk aversion δ and carbon aversion ε. Each panel corresponds to a speci-
fic combination of δ ∈ {0.7, 1, 3} and ε ∈ {0, 1}, for a direct comparison of the effects of carbon aversion. The results show that, as carbon aversion ε increases, the optimal exposures to brown stocks decrease and those to green stocks increase, thereby reducing the PPI strategy’s carbon footprint.(3) A reduction in exposure to carbonintensive stocks appears in every configuration, but the magnitude of this reduction depends on risk aversion. In particular, when δ = 3, which corresponds to a hig-
h level of risk aversion, the percentage reduction is smaller. This is because the risky reference portfolio is conservative, hence the exposure is already low in that case. Similar results apply to the optimal PPI strategy under full information.
Figure 6.3, illustrates the optimal multiplier  ̄m⋆ (left panel) and the optimal exposure to the risk-free asset S0 (right panel) at t = 0 as functions of carbon aversion ε, and offers a description of the same effect from a different angle. When ε = 0, the PPI strategy’s exposure to the risky assets is entirely determined by risk aversion δ. In particular, relatively low levels of the risk-aversion parameter (e.g., δ = 0.7 and δ = 1) lead to high values of the multiplier and large exposures to S,-
 thereby making the strategy leveraged. Conversely, a higher δ implies a lower optimal multiplier m ̄ ⋆ and thus a smaller exposure to S, which – under the PPI mechanism – results in a larger allocation to the risk-free asset S0. Similarly, as ε increases,  ̄m⋆ decreases, implying a lower exposure to carbon intensive stocks. This translates in a higher allocation to S0, in particular in cases where the risk aversion δ is low.
We now turn to the dynamic analysis. To illustrate how the proposed carbon-penalised PPI strategy shapes the allocation mechanism, we simulate the optimal exposures E ̄⋆ over the entire investment horizon. The results, reported in Figure 6.4, indicate that our strategy successfully manages the trade-off between stock’s risk–return and the carbon footprint. In particular, brown stock number 3 is assigned the lowest average exposure, reflecting the strategy’s sensitivity to sustainability criteria. -
However, the methodology is not limited to a naı ̈ve exclusion of carbon-intensive assets. Indeed, although stock number 4 is also brown, it has a similar exposure as that of the green stock number 1. This is because stock number 4 exhibits the highest Sharpe ratio (SR). This demonstrates that the penalisation mechanism does not merely exclude high-carbon assets; rather, it adjusts allocations based on a balanced evaluation of both environmental and financial features. Table 6.3 shows how carbon a-
version ε and risk aversion δ shape the distribution of the terminal wealth of the optimal PPI strategy, under three scenarios: Scenario 1, where green stocks outperform brown stocks; Scenario 2, where green and brown stocks perform similarly; and Scenario 3, where green stocks underperform brown stocks. To generate the three scenarios, we specify three different drift vectors a for the stock price process S (reported in Table 6.2), while keeping all other parameters fixed as in Table 6.1. The res-
ults in Table 6.3 show that, comparing the cases ε = 0 and ε = 1, the expected value of the optimal PPI strategy remains essentially unchanged, while the variance markedly reduces,
(3)There are several possible definitions of the carbon footprint of a portfolio or a fund. Here, we refer to the weighted sum of the carbon intensity of each asset in the risky reference portfolio.
20

Figure 6.2: Histograms displaying the optimal exposure to the i-th stock in the risk reference portfolio Xπ⋆ at t = 0 for different levels of δ and ε.
Figure 6.3: Optimal multiplier m ̄ 0⋆ (left panel) and optimal exposure to the risk-free asset S0 (right panel) as a function of carbon aversion ε. The optimal PPI strategy’s exposure to S0 is given by 1 − 1⊤E ̄t⋆ for every t ∈ [0, T ].
21

Figure 6.4: Simulated paths of the carbon-penalised PPI strategy’s optimal exposures to S. Parameters of S and Y are reported in Table 6.1. PPI strategy parameters: δ = 1, ε = 1, V0 = 1, PL = 1 and T = 5 years.
a1 a2 a3 a4 Scenario 1 0.090 0.080 0.045 0.045 Scenario 2 0.080 0.055 0.045 0.075 Scenario 3 0.045 0.045 0.080 0.090
Table 6.2: Drift vector a for the three different scenarios.
in all scenarios and level of risk aversion δ. Furthermore, looking at the 5th and 90th quantiles, an increase in ε raises the left tail and lowers the right tail, improving downside protection while reducing upside capture. Such a shrinkage effect is weaker in Scenario 1 where green stocks outperform brown ones, moderate in Scenario 2 where green and brown securities have similar performance, and stronger where brown stocks are more attractive than green ones. As an example, at δ = 0.7, the varia-
nce decreases by 5.5% in Scenario 1, 58.1% in Scenario 2 and 94.7% in Scenario 3, while the interquartile range ([q0.05, q0.90]) is reduced by 6.3%, 18.6% and 53.8%, respectively. Similar considerations apply to δ = 1 and δ = 3, albeit with smaller numbers. Figure 6.3 reports the optimal multiplier (left panel) and the corresponding exposure to the risk free asset (right panel) as functions of ε for different values of δ. These plots consent us to draw the following conclusions. The multiplier is -
decreasing in the carbon aversion ε and in risk aversion δ. On the contrary the exposure to the risk free asset is increasing. The effect of an increase in carbon aversion is more contained when portfolio insurer is more risk averse. In summary, δ produces a generalized reduction in the riskiness of the strategy as it indiscriminately decreases the investments in green and brown stocks. In contrast, carbon aversion acts in a targeted manner on carbon-intensive stocks, providing a balanced trade-of-
f between the carbon footprint and the overall riskiness of the PPI strategy. Importantly, these conclusions are not restricted to PPI strategies under partial information; they apply in a similar way to the full-information setting.
6.2 Comparison results between the full and the partial information case
In this final section, we compare the performance of the optimal strategies under full and partial information. Figure 6.5 displays the optimal multiplier in full (solid blue line) and partial information
22

δ = 0.7
Scenario 1 Scenario 2 Scenario 3
ε=0 ε=1 ε=0 ε=1 ε=0 ε=1
E[V  ̄m⋆,π ̄⋆
T ] 1.1575 1.1534 1.1208 1.1025 1.2445 1.1213
Var[V m ̄ ⋆,π ̄⋆
T ] 0.0821 0.0790 0.0347 0.0142 0.3522 0.0177
q0.05(V m ̄ ⋆,π ̄⋆
T ) 1.0084 1.0085 1.0117 1.0139 1.0076 1.0186
q0.50(V m ̄ ⋆,π ̄⋆
T ) 1.0771 1.0773 1.0692 1.0668 1.0817 1.0845
q0.90(V m ̄ ⋆,π ̄⋆
T ) 1.3538 1.3353 1.2556 1.2208 1.4960 1.2473
δ=1
Scenario 1 Scenario 2 Scenario 3
ε=0 ε=1 ε=0 ε=1 ε=0 ε=1
E[V  ̄m⋆,π ̄⋆
T ] 1.1154 1.1135 1.0949 1.0860 1.1540 1.1016
Var[V m ̄ ⋆,π ̄⋆
T ] 0.0145 0.0136 0.0072 0.0040 0.0447 0.0060
q0.05(V m ̄ ⋆,π ̄⋆
T ) 1.0174 1.0174 1.0210 1.0227 1.0172 1.0263
q0.50(V m ̄ ⋆,π ̄⋆
T ) 1.0820 1.0814 1.0728 1.0698 1.0912 1.0816
q0.90(V m ̄ ⋆,π ̄⋆
T ) 1.2373 1.2285 1.1823 1.1620 1.3175 1.1873
δ=3
Scenario 1 Scenario 2 Scenario 3
ε=0 ε=1 ε=0 ε=1 ε=0 ε=1
E[V  ̄m⋆,π ̄⋆
T ] 1.0681 1.0679 1.0635 1.0625 1.0743 1.0694
Var[V m ̄ ⋆,π ̄⋆
T ] 0.0004 0.0004 0.0003 0.0002 0.0007 0.0004
q0.05(V m ̄ ⋆,π ̄⋆
T ) 1.0394 1.0397 1.0409 1.0415 1.0403 1.0422
q0.50(V m ̄ ⋆,π ̄⋆
T ) 1.0659 1.0656 1.0619 1.0612 1.0706 1.0666
q0.90(V m ̄ ⋆,π ̄⋆
T ) 1.0939 1.0931 1.0843 1.0816 1.1068 1.0935
Table 6.3: Mean, variance, and 5th/50th/90th quantiles of the distribution of the optimal carbon-penalised PPI strategy at T = 5 in the partial information case, for risk-aversion levels δ = 0.7 (top panel), δ = 1 (middle panel), and δ = 3 (bottom panel), comparing ε = 0 and ε = 1, under the three scenarios.
23

(dashed magenta line). In the left panel, we plot the standard, non-penalised case ε = 0, and in the right panel, the penalised case ε = 1. Both panels show that the multiplier under partial information shows slightly less variability, yet displaying very similar behaviour. The performance of the strategy under full and partial information, in terms of portfolio values are also very close as indicated in Table 6.4. This is a signal that, if markets are affected by random factors that are not easi-
ly measured, it is worth performing the portfolio analysis under partial information, rather than assuming a naive point of view and taking parameters constant.(4)
Figure 6.5: Trajectories of the optimal multiplier under full and partial information for risk-aversion level δ = 1 and carbon penalisation levels ε = 0 (left panel) and ε = 1 (right panel). The solid blue line corresponds to the partially informed case, while the dashed magenta line corresponds to the full-information case.
Full information Partial information
E[V m ̄ ⋆,π ̄⋆
T ] 1.1207 1.1213
Var[V  ̄m⋆,π ̄⋆
T ] 0.0166 0.0177
q0.05(V m ̄ ⋆,π ̄⋆
T ) 1.0182 1.0186 q0.50(V m ̄ ⋆,π ̄⋆
T ) 1.0850 1.0845 q0.90(V m ̄ ⋆,π ̄⋆
T ) 1.2508 1.2473
Table 6.4: Mean, variance, and 5th/50th/90th quantiles of the distribution of the optimal carbon-penalised PPI strategy at T = 5 in the full and partial information case, for risk-aversion level δ = 0.7 and ε = 1, under Scenario 3.
We conclude with an analysis of the loss of utility and efficiency. Figure 6.6 reports the loss of utility at time t = 0 (left panel) and the efficiency (right panel) as functions of the carbon-aversion parameter ε, for different levels of risk aversion δ. The results indicate that the loss of utility decreases with both risk aversion and carbon aversion. Interestingly, the effect is more pronounced for small values of ε, and becomes essentially constant for larger ε. The opposite monotonic behavi-
or is observed for efficiency, although the sensitivity remains greater at lower levels of ε. Overall, these plots suggest that carbon penalisation can improve the relative performance of the partially informed investor compared with the fully informed one, narrowing the gap between their utilities. Under high levels of risk aversion, the loss of utility becomes practically negligible, indicating that the informational advantage of the fully informed investor is largely offset by investor preferen-
ces, as both types of investors behave in an extremely prudent manner. Finally, the presence of even a modest carbon penalisation increases the relative efficiency of the partially informed strategy vis-`a-vis its fully informed counterpart.
(4)We are ignoring here model misspecifications, which represent an additional source of error.
24

Figure 6.6: Loss of utility (left panel) and efficiency (right panel) of a partially informed, carbon-penalised PPI insurer relative to a full-information one, with initial cushion equal to 1, as a function of ε at t = 0 for different values of δ.
7 Concluding remarks
This paper has proposed an optimal design of carbon-penalised proportional portfolio insurance (PPI) strategies in a market driven by an unobservable factor. By embedding carbon aversion into the investor’s utility function, we have shown that sustainability considerations can be consistently integrated into dynamic portfolio insurance without compromising its risk-mitigation role. The introduction of a carbon penalisation term naturally reduces exposure to carbon-intensive assets, leading to a lo-
wer overall carbon footprint. Importantly, this reduction does not stem from an ex-ante exclusion of “brown” stocks, but from an endogenous adjustment of the optimal allocation that balances environmental impact and financial performance. From an economic perspective, the carbon penalty operates as an implicit cost of holding high-emission assets, inducing portfolio insurers to internalise the externalities associated with carbon risk. Our numerical results indicate that even moderate levels of ca-
rbon aversion can achieve substantial emission reductions with only marginal losses in expected utility. Nevertheless, assets with high carbon intensity are not completely excluded; instead, a trade-off emerges between performance characteristics, e.g, a high Sharpe ratio, and carbon intensity. Consequently, a portfolio insurer considers both aspects simultaneously when designing the PPI strategy, balancing return potential against environmental impact. Interestingly, we get that carbon penalisati-
on improves the relative efficiency of the partially informed investor, narrowing the performance gap vis-`a-vis the fully informed benchmark. When risk aversion is high, the informational premium virtually vanishes, suggesting that prudence can offset informational disadvantages. Overall, these findings highlight that environmental preferences and informational constraints interact in shaping sustainable investment behavior. Carbon penalisation acts as a powerful mechanism to align portfolio insu-
rance objectives with broader climate-finance goals, while partial information amplifies the conservative nature of the PPI framework. Future research could extend this analysis in several directions. First, one may consider non-Gaussian or regime-switching latent factors to capture abrupt transitions in macro-financial or climate conditions. Second, incorporating transaction costs or market frictions would enhance the practical relevance of the model, especially for long-horizon institutional inv-
estors. Further developments might also explore multi-factor carbon risks or stochastic floors to assess how policy uncertainty and adaptive guarantees affect sustainable portfolio insurance design.
25

Acknowledgements and fundings
The work of Katia Colaneri has been partially funded by the European Union - Next Generation EU - Project PRIN 2022 [2022BEMMLZ - CUP E53D23005660006] with the title Stochastic control and games and the role of information. Katia Colaneri is member of Gruppo Nazionale per l’Analisi Matematica, la Probabilit`a e le loro Applicazioni (GNAMPA) of Istituto Nazionale di Alta Matematica (INdAM). The work of Daniele Mancinelli has been funded by European Union - Next Generation EU, Mission 4, Component 2-
 as part of the GRINS project - Growing Resilient, INclusive and Sustainable (PE0000018, CUP: E83C22004690001) - National Recovery and Resilience Plan (PNRR). The views and opinions expressed are solely those of the authors and do not necessarily reflect those of the European Union, nor can the European Union be held responsible for them.
Declaration of generative AI in scientific writing
During the preparation of this work the authors used Writefull AcademicGPT 2025 in the writing process in order to improve the readability and language of the manuscript. After using this tool, the authors reviewed and edited the content as needed and take full responsibility for the content of the published article.
Conflict of interest
The authors declare no competing interests.
Appendix
A Proofs of some technical results of Section 4
A.1 Proof of Theorem 4.2
From Itˆo’s formula applied to f (t, Cˆθ
t , Yt) we get that, for any 0 ≤ t ≤ T and θ ∈ A, it holds
f (T, Cˆθ
T , YT ) =f (t, c, y) +
∫T
t
(
fs(s, Cˆθ
s , Ys) + Lθf (s, Cˆθ
s , Ys)
)
ds +
∫T
t
fy(s, Cˆθ
s , Ys)σ ̃Y ZsY
+
∫T
t
(
fcˆ(s, Cˆθ
s , Ys)Cˆθ
s θs⊤Σ ̃ S + fy(s, Cˆθ
s , Ys)Σ ̃ Y
)
dZS
s.
Let M = {Mt}t∈[0,T ] be the stochastic process given by
Mt =
∫t
0
fy(s, Cˆθ
s , Ys)σ ̃Y ZsY +
∫t
0
(
fcˆ(s, Cˆθ
s , Ys)Cˆθ
s θs⊤Σ ̃ S + fy(s, Cˆθ
s , Ys)Σ ̃ Y
)
dZS
s , t ∈ [0, T ],
and define τn = inf{t ≥ 0 : Cˆtθ ≥ n and |Yt| ≤ n}. This is an increasing sequence of stopping times such that τn ∧ T ↑ T for n → ∞. Moreover, by assumption, f is a classical solution of the HJB equation (4.3), hence its derivatives are continuous and bounded on compact sets. This implies that the stopped process {Mt∧τn }t∈[0,T ] is a martingale. Indeed, it holds that
E
[∫ T ∧τn
0
fy2(s, Cˆθ
s , Ys)ds +
∫ T ∧τn
0
fcˆ2(s, Cˆθ
s , Ys)(Cˆθ
s )2θs⊤Σ ̃ SΣ ̃ S⊤θsds
]
26

≤ sup
t≤T ,(c,y)∈[−n,n]2
|fy2(t, Cˆθ
t , Yt)|T + k|fc2(t, Cˆθ
t , Yt)|n2E
[∫ T
0
‖θs‖22ds
]
< ∞.
Now, since f solves equation (4.2), we get that for every n ∈ N
f (T ∧ τn, CˆT ∧τn , YT ∧τn ) ≤f (t ∧ τn, Cˆt∧τn , Yt∧τn ) +
∫ T ∧τn
t∧τn
fy(s, Cˆθ
s , Ys)σ ̃Y ZsY
+
∫ T ∧τn
t∧τn
(
fcˆ(s, Cˆθ
s , Ys)Cˆsθs⊤Σ ̃ S + fy(s, Cˆθ
s , Ys)Σ ̃ Y
)
dZS
s , (A1)
for every θ ∈ A. Thus, taking the conditional expectation on both sides of inequality (A1) between
t ∧ τn and T ∧ τn, leads to E[f (T ∧ τn, Cˆθ
T ∧τn , YT ∧τn )] ≤ E
[
f (t ∧ τn, Cˆθ
t∧τn , Yt∧τn )
]
. Next we take the
limit for n → ∞, and thanks to condition (i) of the theorem (4.2), we obtain
Et,c,y
[1
1−δ
(Cˆθ
T
)1−δ ]
≤ f (t, c, y), (A2)
hence vˆ(t, c, y) ≤ f (t, c, y). Similar computations prove that equality holds in (A2) when taking
the control {θ⋆(t, Yt)}t∈[0,T ] ∈ A. Consequently, vˆ(t, c, y) = Et,c,y [ 1
1−δ (Cˆθ⋆
T )1−δ ]
= f (t, c, y). This concludes the proof.
A.2 Proof of Theorem 4.3
Assume that a classical solution f of the Hamilton Jacobi Bellman equation (4.3) can be rewritten as
f (t, c, y) = c1−δ
1 − δ φˆ(t, y), (A3)
where φˆ(t, y) does not depend on c and is a positive function. Then, equation (4.3) can be rewritten as



φˆt(t, y)
1 − δ + rφˆ(t, y) + (λy + β)
1 − δ φˆy(t, y) + 1
2
σY2
1 − δ φˆy,y(t, y) + max
θ∈Rn Ψθ(t, y) = 0, (t, y) ∈ [0, T ) × R,
φˆ(T, y) = 1, y ∈ R,
where
Ψθ(t, y) := θ⊤ (ay + b − rn) φˆ(t, y) − 1
2 θ⊤ ˆΘθφˆ(t, y) + θ⊤Σ ̃ SΣ ̃ Y⊤φˆy(t, y), (t, y) ∈ [0, T ] × R,
with Θˆ = (ΣSΣS⊤ ⊙ e) + δΣ ̃ S  ̃ΣS⊤. We let θ⋆ = arg max Ψθ(t, y). Taking the gradient and the Hessian of Ψθ with respect to θ, we get that
∇θΨθ(t, y) = (ay + b − rn) φˆ(t, y) − ˆΘθφˆ(t, y) +  ̃ΣSΣ ̃ Y⊤φˆy(t, y),
HessθΨθ(t, y) = −Θˆ φˆ(t, y).
Then, setting ∇θΨθ(t, y) = 0, provides the candidate optimal strategy θ⋆(t, y) given by
θ⋆(t, y) = ˆΘ−1 (ay + b − rn) + ˆΘ−1Σ ̃ SΣ ̃ Y⊤
φˆy(t, y)
φˆ(t, y) . (A4)
Moreover, since HessθΨθ(t, y) is negative definite for every θ ∈ Rn, this ensure that θ⋆(t, y) is the well defined global maximiser. Next, we insert the optimal strategy in the HJB equation, yielding to the following PDE
0 =φˆt(t, y) + (1 − δ) rφˆ(t, y) + 1 − δ
2 φˆ(t, y) (ay + b − rn)⊤ ˆΘ−1 (ay + b − rn)
27

+ (1 − δ) φˆy(t, y)Σ ̃ Y Σ ̃ S⊤ ˆΘ−1 (ay + b − rn) + 1 − δ
2
(φˆy(t, y))2 φˆ(t, y)
 ̃ΣY  ̃ΣS⊤Θˆ −1Σ ̃ S  ̃ΣY⊤
+ (λy + β) φˆy(t, y) + 1
2 σY2 φˆy,y(t, y), (t, y) ∈ [0, T ) × R, (A5)
with terminal condition φ(T, y) = 1, for every y ∈ R. We conjecture that φˆ(t, y) has an exponential affine form, namely
φˆ(t, y) = exp
{ fˆ(t)
2 y2 + gˆ(t)y + ˆh(t)
}
, (A6)
with fˆ(T ) = gˆ(T ) = ˆh(T ) = 0. Clearly, the terminal value of the function in (A6) satisfies the terminal condition in (A5) and φˆ(t, y) > 0, for every (t, y) ∈ [0, T ] × R. Substituting this ansatz in equation (A5) results in a quadratic equation for y. Setting the coefficients of the terms y2, y and the independent term to zero yields that the functions fˆ, gˆ and ˆh solve the system of ODEs in equations (4.4), (4.5) and (4.6). If fˆ, gˆ and ˆh belong to the class Cb1([0, T ]), then f in equ-
ation (A3) is also regular and solves the HJB equation (4.3). Finally, by substituting equation (A6) in (A4), we obtain the candidate for the optimal control in equation (4.7). This concludes the proof.
A.3 Proof of Proposition 4.6
We will show that supt∈[0,T ] E
[
vˆ1+α(t, Cˆt, Yt)
]
< ∞, for some α > 0. Using the form of the function
v (cfr. equation (4.8)) we get that
sup
t∈[0,T ]
E
[
vˆ1+α(t, Cˆθ
t , Yt)
]
= sup
t∈[0,T ]
E
[1
1 − δ (Cˆθ
t )(1−δ)(1+α) e (1+α)fˆ(t)
2 Yt2+(1+α)gˆ(t)Yt+(1+α)ˆh(t)
]
≤κ sup
t∈[0,T ]
E
[
(Cˆθ
t )(1−δ)(1+α) e (1+α)fˆ(t)
2 Yt2+(1+α)gˆ(t)Yt
]
≤κ
(
sup
t∈[0,T ]
E
[
(Cˆθ
t )d(1−δ)(1+α) ] 1
d
)(
sup
t∈[0,T ]
E
[
e q(1+α)fˆ(t)
2 Yt2+q(1+α)gˆ(t)Yt
]1
q
)
,
for some positive constant κ and some d, q > 1, where in the first inequality we have used that ˆh(·) ∈ Cb1([0, T ]), and in the second comes from applying H ̈older’s inequality. The first expectation is finite because of admissibility of the strategy (see the second condition of Definition 4.1). The second expectation is finite because the process Yt is Gaussian. Hence,
E
[
e q(1+α)fˆ(t)
2 Yt2+q(1+α)gˆ(t)Yt
]
< ∞,
for every t ∈ [0, T ] if and only if 1−q(1+α)fˆ(t)Var[Yt] > 0, where Var[Yt] = P0e2λt +V∞(1−e2λt), with V∞ = −σY /2λ. To show that 1 − q(1 + α)fˆ(t)Var[Yt] > 0 for every t ∈ [0, T ], we need to distinguish between two cases. If δ ∈ P ∩ (1, +∞), fˆ(t) is strictly negative and increasing for every t ∈ [0, T ], guaranteeing that 1 − q(1 + α)fˆ(t)Var[Yt] > 0. If δ ∈ P ∩ (0, 1), fˆ(t) is positive and decreasing in [0, T ], implying that fˆ(t) < fˆ(0) for every t ∈ [0, T ]. If P0 > V∞ (respectively, P0 -
≤ V∞), Var(Yt) is decreasing (respectively, increasing) meaning that P0 ≤ Var[Yt] ≤ Var[YT ] (respectively, Var[YT ] ≤ Var[Yt] < P0). This means that fˆ(t)Var[Yt] < fˆ(0) max {P0, Var[YT ]}, or equivalently, 1 − q(1 + α)fˆ(t)Var[Yt] > 1 − q(1 + α)fˆ(0) max {P0, Var[YT ]}, for every t ∈ [0, T ]. Then the result follows from equation (4.9) and concludes the proof.
28

A.4 Proof of Proposition 4.7
First, we discuss the first condition of Definition 4.1. For the G-predictable process θ⋆ given by (4.7), it holds that
E
[∫ T
0
|Ys|‖θs⋆‖1 + ‖θs⋆‖22ds
]
=E
[∫ T
0
|Ys|‖Θˆ −1 (aYs + b − rn) + ˆΘ−1Σ ̃ SΣ ̃ Y⊤
(fˆ(s)Ys + gˆ(s)
)
‖1ds
]
+E
[∫ T
0
‖Θˆ −1 (aYs + b − rn) + ˆΘ−1Σ ̃ SΣ ̃ Y⊤
(fˆ(s)Ys + gˆ(s)
)
‖22ds
]
≤E
[∫ T
0
|Ys|‖Θˆ −1 (aYs + b − rn) ‖1 + |Ys|‖Θˆ −1Σ ̃ S  ̃ΣY⊤
(fˆ(s)Ys + gˆ(s)
)
‖1ds
]
+E
[∫ T
0
(
‖Θˆ −1 (aYs + b − rn) ‖2 + ‖Θˆ −1Σ ̃ SΣ ̃ Y⊤
(fˆ(s)Ys + gˆ(s)
)
‖2
)2 ds
]
≤E
[∫ T
0
Ys2‖Θˆ −1a‖1 + |Ys|‖Θˆ −1 (b − rn) ‖1 + Ys2|fˆ(s)|‖Θˆ −1Σ ̃ SΣ ̃ Y⊤‖1
+ |Ys||gˆ(s)|‖Θˆ −1  ̃ΣS  ̃ΣY⊤‖1ds
]
+ 4E
[∫ T
0
Ys2‖Θˆ −1a‖22 + ‖Θˆ −1 (b − rn) ‖22
+ Ys2fˆ2(s)‖Θˆ −1  ̃ΣS  ̃ΣY⊤‖22 + gˆ2(s)‖Θˆ −1Σ ̃ SΣ ̃ Y⊤‖22ds
]
≤η1 + η2E
[∫ T
0
|Ys| + Ys2ds
]
<∞
for some positive constant η1 and η2. The first inequality follows by applying the triangle inequality to the l1 and l2 norms, then using the Cauchy–Schwarz inequality on the second term to bound the square of the sum by the sum of squares, and finally using the positive homogeneity of norms to factor out scalar terms. The second inequality follows by applying the same arguments as the first. The third inequality holds because fˆ(t), gˆ(t) ∈ Cb1([0, T ]) and the last inequality comes from the fact-
 that Y is a Gaussian random variable, which implies that it has finite moments of all orders. We now discuss the second condition of Definition 4.1. We would like to show that
sup
t∈[0,T ]
E
[
(Cˆ θ⋆
t )d(1−δ)(1+α) ]
< ∞,
for some α > 0 and d > 1. Using the explicit solution of equation (3.3), i.e
Cˆ θ
t = Cˆθ
0 exp
{∫ t
0
[
r + θu⊤ (aYu + b − rn) − 1
2 θu⊤ ˆΘθu
]
du +
∫t
0
θu⊤  ̃ΣSdZS
u
}
,
we get that
sup
t∈[0,T ]
E
[
(Cˆ θ⋆
t )d(1−δ)(1+α) ]
= sup
t∈[0,T ]
(Cˆ θ⋆
0 ert)d(1−δ)(1+α) E
[
ed(1−δ)(1+α) ∫ t
0 [(θ⋆u)⊤(aYu+b−rn)− 1
2 θ⋆u,⊤ ˆΘθ⋆u]du+d(1−δ)(1+α) ∫ t
0 θ⋆u,⊤  ̃ΣSdZS
u
]
≤ (Cˆθ⋆
0 )d(1−δ)(1+α)
2
(
sup
t∈[0,T ]
erd(1−δ)(1+α)t E
[
e2d(1−δ)(1+α) ∫ t
0 θ⋆u,⊤(aYu+b−rn)du
29

e−d(1−δ)(1+α) ∫ t
0 θ⋆u,⊤ ˆΘθ⋆udu]
+ sup
t∈[0,T ]
erd(1−δ)(1+α)t E
[
e2d(1−δ)(1+α) ∫ t
0 θ⋆u,⊤  ̃ΣSdZS
u
]
)
≤κ
4
(
sup
t∈[0,T ]
E
[
e4d(1−δ)(1+α) ∫ t
0 θ⋆u,⊤(aYu+b−rn)du]
+ sup
t∈[0,T ]
E
[
e−2d(1−δ)(1+α) ∫ t
0 θ⋆u,⊤ ˆΘθ⋆udu]
+2 sup
t∈[0,T ]
E
[
e2d(1−δ)(1+α) ∫ t
0 θ⋆u,⊤  ̃ΣSdZS
u
]
)
=κ
4
(
sup
t∈[0,T ]
E
[
e4d(1−δ)(1+α) ∫ t
0 θ⋆u,⊤(aYu+b−rn)du]
+ sup
t∈[0,T ]
E
[
e−2d(1−δ)(1+α) ∫ t
0 θ⋆u,⊤ ˆΘθ⋆udu]
+2 sup
t∈[0,T ]
E
[
e2d2(1−δ)2(1+α)2 ∫ t
0 ‖θ⋆u,⊤  ̃ΣS‖22du]
)
, (A7)
where κ = (Cˆθ⋆
0 erT )d(1−δ)(1+α). In the first and second inequality we have used ab ≤ 1
2 (a2 + b2)
for any a, b ∈ R, and the last equality comes from the fact that E
[
e2d(1−δ)(1+α) ∫ t
0 θ⋆u,⊤  ̃ΣSdZS
u
]
=
E
[
e2d2(1−δ)2(1+α)2 ∫ t
0 ‖θ⋆u,⊤  ̃ΣS‖22du]
. Now, we need to distinguish between two cases: δ ∈ P ∩ (0, 1) and
δ ∈ P ∩ (1 + ∞). Assuming that δ ∈ P ∩ (0, 1), equation (A7) becomes
sup
t∈[0,T ]
E
[
(Cˆ θ⋆
t )d(1−δ)(1+α) ]
≤κ
4
(
1 + sup
t∈[0,T ]
E
[
e4d(1−δ)(1+α) ∫ t
0 θ⋆u,⊤(aYu+b−rn)du]
+ 2 sup
t∈[0,T ]
E
[
e2d2(1−δ)2 (1+α)2 ∫ t
0 ‖θ⋆u,⊤  ̃ΣS‖22du]
)
≤κ
4
(
1 + sup
t∈[0,T ]
E
[
e2d(1−δ)(1+α) ∫ t
0 (‖θ⋆u‖22+‖aYu+b−rn‖2)du]
+ 2 sup
t∈[0,T ]
E
[
e2d2(1−δ)2 (1+α)2 ∫ t
0 w‖θ⋆u‖22du]
)
≤κ
4
(
1+E
[
e2d(1−δ)(1+α) ∫ T
0 (‖θ⋆u‖22+‖aYu+b−rn‖22)du]
+ 2E
[
e2d2(1−δ)2(1+α)2w ∫ T
0 ‖θ⋆u‖22du])
, (A8)
where in the second inequality we have used θu⋆,⊤ (aYu + b − rn) ≤ 1
2
(‖θu⋆‖22 + ‖aYu + b − rn‖22
), and ‖θu⋆,⊤  ̃ΣS‖22 ≤ w‖θu⋆‖22, for every u ∈ [0, T ], with w given by equation (4.13). The third inequality follows from the monotonicity of the integrals in t, which implies that the supremum over t ∈ [0, T ] is attained at t = T . By Jensen’s inequality, we get that
e2d(1−δ)(1+α) ∫ T
0 (‖θ⋆u‖22+‖aYu+b−rn‖22)du ≤ 1
T
∫T
0
e2d(1−δ)(1+α)T (‖θ⋆u‖22+‖aYu+b−rn‖22)du,
e2d2(1−δ)2(1+α)2w ∫ T
0 ‖θ⋆u‖22du ≤ 1
T
∫T
0
e2d2(1−δ)2(1+α)2wT ‖θ⋆u‖22 du,
therefore
E
[
e2d(1−δ)(1+α) ∫ T
0 (‖θ⋆u‖22+‖aYu+b−rn‖22)du]
≤1
T
∫T
0
E
[
e2d(1−δ)(1+α)T (‖θ⋆u‖22+‖aYu+b−rn‖22)]
du,
E
[
e2d2(1−δ)2(1+α)2w ∫ T
0 ‖θ⋆u‖22du]
≤1
T
∫T
0
E
[
e2d2(1−δ)2(1+α)2wT ‖θ⋆u‖22
]
du.
Hence, equation (A8) becomes
sup
t∈[0,T ]
E
[
(Cˆ θ⋆
t )d(1−δ)(1+α) ]
30

≤κ
4
(
1+ 1
T
∫T
0
E
[
e2d(1−δ)(1+α)T [‖θ⋆u‖22+‖aYu+b−rn‖22]]
du + 2
T
∫T
0
E
[
e2d2(1−δ)2(1+α)2wT ‖θ⋆u‖22
]
du
)
≤κ
4
(
1+ 3
T
∫T
0
E
[
e2d(1−δ)(1+α)[(1∨d(1−δ)(1+α)w)T ‖θ⋆u‖22+T ‖aYu+b−rn‖22]]
du
)
≤κ
4
(
1+ 3
T
∫T
0
E
[
e2d(1−δ)(1+α)[(1∨d(1−δ)(1+α)w)2nT (c21Yu2+c22)+2nT (a2M Yu2+b2M )]]
du
)
≤κ
4
(
1 + 3κ1
T
∫T
0
E
[
e4d(1−δ)(1+α)nT [(1∨d(1−δ)(1+α)w)c21+a2M ]Yu2
]
du
)
,
for some positive constant κ1. In the third inequality we have used
max
i=1,...,n |θi⋆,u| ≤ c1|Yu| + c2,
max
i=1,...,n | (aYu + b − rn)i | ≤ aM |Yu| + bM ,
for every u ∈ [0, T ], where c1 and am are given by equations (4.12) and (4.15) respectively, and
c2 = max
i=1,...,n
∣ ∣ ∣ ∣
(
ˆΘ−1
(
b − rn +  ̃ΣS  ̃ΣY⊤ sup
t∈[0,T ]
gˆ(t)
))
i
∣ ∣ ∣ ∣
,
bM = max
i=1,...,n | (b − rn)i |.
Consequently,
‖θu‖22 ≤ 2n (c21Yu2 + c22
),
‖aYu + b − rn‖22 ≤ n (a2M |Yu| + bM
)2 ≤ 2n (a2M Yu + b2M
),
for every u ∈ [0, T ]. Finally, since Yt is Gaussian,
E
[
e4d(1−δ)(1+α)nT [(1∨d(1−δ)(1+α)w)c21+a2M ]Yu2
]
<∞
for every u ∈ [0, T ] if and only if
1 − 8d(1 − δ)(1 + α)nT [(1 ∨ d(1 − δ)(1 + α)w) c21 + a2M
] Var[Yu] > 0.
Recalling that Var[Yu] < max {P0, Var[YT ]}, we get
1 − 8d(1 − δ)(1 + α)nT [(1 ∨ d(1 − δ)(1 + α)w) c21 + a2M
] Var[Yu] >
1 − 8d(1 − δ)(1 + α)nT [(1 ∨ d(1 − δ)(1 + α)w) c21 + a2M
] max {P0, Var[YT ]} ,
for every u ∈ [0, T ]. Then, the result then follows from (4.10). Now we discuss the second case where δ ∈ (1, ∞). Applying the same steps as in the previous case, equation (A7) becomes
sup
t∈[0,T ]
E
[
(Cˆ θ⋆
t )d(1−δ)(1+α) ]
≤ κ2
T
∫T
0
E
[
e4d(1−δ)(1+α)nT [(−(1+w)∧d(1−δ)(1+α)w ̃)c21−a2M ]Yu2
]
du.
where w ̃ is given by equation (4.14). As in the previous case,
E
[
e4d(1−δ)(1+α)nT [(−(1+w)∧d(1−δ)(1+α)w ̃)c21−a2M ]Yu2
]
< ∞,
for every u ∈ [0, T ] if and only if
1 − 8d(1 − δ)(1 + α)nT [(−(1 + w) ∧ d(1 − δ)(1 + α)w ̃) c21 − a2M
] max {P0, Var[YT ]} > 0.
The result then follows from (4.11).
31

A.5 Proof of Proposition 4.8
The optimal controls θ⋆ are linked to m⋆ and π⋆ through the following system
{ mtπt = θt⋆,
πt⊤1n = 1,
whose solutions are given by (mt⋆, πt⋆) =
(
θ⋆,⊤
t 1n, θ1⋆,t
θ⋆,⊤
t 1n , . . . , θ⋆n,t
θ⋆,⊤
t 1n
)
for every t ∈ [0, T ]. This
concludes the proof.
A.6 Proof of Corollary 4.9
We apply pointwise optimisation to obtain the optimal controls. Computing the expectation in (4.18), we get
log (c) + r (T − t) + Et,y
[∫ T
t
θs⊤ (aYs + b − rn) ds
]
−1
2 Et,y
[∫ T
t
θs⊤Θθsds
]
, (A9)
where Θ =  ̃ΣS  ̃ΣS⊤ + ΣSΣS⊤ ⊙ e. Taking the first order conditions, we obtain the following system of linear equations aYt + b − rn − Θθt = 0n, whose solution provide a candidate for the optimal control θ⋆(t, y) = Θ−1 (ay + b − rn). The Hessian matrix −Θ is negative definite for every θ, ensuring that θ⋆ is the the unique well-defined maximiser of (A9) and hence the optimal control. By inserting θ⋆ into (A9), we obtain a stochastic representation of the value function, namely
v(t, c, y) = log (c) +
[
r+ 1
2 (b − rn)⊤ Θ−1 (b − rn)
]
(T − t) + 1
2 a⊤Θ−1aEt,y
[∫ T
t
Ys2ds
]
+ a⊤Θ−1 (b − rn) Et,y
[∫ T
t
Ysds
]
. (A10)
Since Y is modeled as an OU process, we can explicitly compute Et,y [
∫T
t Ysds
]
and Et,y [
∫T
t Ys2ds
]
, which are given by
Et,y
[∫ T
t
Ysds
]
=y eλ(T −t) − 1
λ +β
λ
[
eλ(T −t) − 1
λ − (T − t)
]
,
Et,y
[∫ T
t
Ys2 ds
]
=
(
y+ β
λ
)2 e2λ(T −t) − 1
2λ − 2β
λ
(
y+ β
λ
) eλ(T −t) − 1
λ + β2
λ2 (T − t)
+ σY2
2λ
[
e2λ(T −t) − 1
2λ − (T − t)
]
.
for every t ∈ [0, T ], respectively. By inserting the above expressions into (A10) and rearranging the terms, we obtain the closed-form expression of the value function in equation (4.19). This concludes the proof.
B An example involving two uncorrelated assets, independent of
the factor process
We consider a simplified setting in which only two stocks, S1 and S2, are traded on the market, representing a green and a brown stock, respectively. Moreover, we assume that S1 and S2 are driven
32

by independent Brownian motions, and are also independent of the factor process Y . In this case, it is possible to show that the function ∆(x) is positive for x ∈ (δ∗, +∞), for some δ∗ < 1 that can be explicitly computed. In particular, we find that
∆(x) = λ2 − (1 − x)
( a21
xσ12
+ a22
(x + ε)σ22
)
σY2 , x ∈ (0, +∞).
This function is monotonic increasing and concave, moreover
lim
δ→+∞ ∆(δ) = λ2 +
( a21
σ12
+ a22
σ22
)
σY2 > 0,
for all a1, a2 ∈ R and(5)
δl→im0+ ∆(δ) =



−∞, if a1 6= 0,
λ2 − a22
εσ22
σY2 , if a1 = 0 and a2 6= 0.
For a1 = 0 and a2 6= 0, we distinguish between two cases:
(i) if λ2 − σ2Y a22
εσ22 ≥ 0, then ∆(δ) > 0 for every δ ∈ (0, +∞), hence δ∗ = 0 and P = (0, 1) ∪ (1, +∞),
(ii) if λ2 < σ2Y a22
εσ22 , then there exists a unique δ ̄(ε) = a22σ2Y −ελ2σ22
λ2 σ22 +a22 σ2Y
< 1, which depends on ε such that
∆(δ ̄) = 0. Hence, setting δ∗ = δ ̄ ∧ 0, we get that P = (δ∗, 1) ∪ (1, +∞). Note that the larger the value of ε, the larger the set of admissible risk aversion parameters.
In the case a1 6= 0, δ∗ is the positive solution of the equation
[λ2σ12σ22 + (a21σ22 + a22σ12
) σY2
] δ2 + [ελ2σ12σ22 − ((1 − ε) a21σ22 + a22σ12
) σY2
] δ − εa21σ22σY2 = 0.
Note that this solution is still smaller than 1 and depends on ε, but it can never become zero or negative. Hence, P = (δ∗, 1) ∪ (1, +∞) ⊂ (0, 1) ∪ (1, +∞). This example provides additional insight. Indeed, by comparing the critical value δ⋆ for different values of the penalisation ε, we find that the penalty for brown assets generally enlarges the set of admissible risk aversion parameters, which in turn implies that a lower risk aversion may be allowed for green assets.
C Proofs of some technical results of Section 5
C.1 Proof of Theorem 5.3
To prove the first part of the theorem we replicate the same argument as in the proof of Theorem 4.3, with the ansatz
f (t, c, γ) = c1−δ
1 − δ ψˆ(t, γ),
and
ψˆ(t, γ) = exp
{ f ̄(t)
2 γ2 + g ̄(t)γ +  ̄h(t)
}
.
(5)Recall that for a1 = 0 and a2 = 0 there is no factor process Y and in this case ∆(x) = λ2 > 0, hence trivially, P = (0, 1) ∪ (1, +∞).
33

In the second part of the proof we establish the relationship between between the solutions to the ODE systems in the full and partial information settings. In particular, applying equations (28)–(30) in Brendle [2006], we get (5.7), (5.8), and (5.9). Moreover, since fˆ(t), gˆ(t), ˆh(t) ∈ Cb1([0, T ]) (see Section
4), to show that f ̄(t), g ̄(t), and  ̄h(t) belong to the same class of regularity, it suffices to prove that 1−P (t)fˆ(t) > 0 for all t ∈ [0, T ]. To show 1−fˆ(t)P (t) > 0 for every t ∈ [0, T ], we start by proving that the closed set T := {t ∈ [0, T ] : 1 − P (t)fˆ(t) = 0} is empty. Let us assume by contradiction that it is not empty and let t ̄ be its maximum. From the boundary condition of fˆ we see that 1−P (T )fˆ(T ) = 1, hence t ̄ < T . Relation in (5.7) hold in the set T C ∩[0, T ], where -
T C is the complement of T . Therefore, for any z > 0 such that t ̄+ z < T , (1 − P (t ̄+ z)fˆ(t ̄+ z))f ̄(t ̄+ z) = fˆ(t ̄+ z) and, by continuity of all the functions involved in the equality, (1 − P (t ̄)fˆ(t ̄))f ̄(t ̄) = fˆ(t ̄). Since fˆ(t) is a monotone function (either increasing or decreasing, depending on the parameter δ) and fˆ(T ) = 0, then fˆ(t ̄) = 0, hence t ̄ 6∈ T , which is a contradiction and T is the empty set. Since T is empty, 1 − P (t)fˆ(t) is continuous on [0, T ] and fˆ(T ) -
= 1, it follows that 1 − P (t)fˆ(t) > 0 is strictly positive on [0, T ]. This concludes the proof.
C.2 Proof of Proposition 5.4
Since, as shown in Proposition 5.3, 1 − P (t), fˆ(t) > 0, it follows that fˆ(t) and f ̄(t) must have the same sign (positive if δ ∈ (0, 1) ∩ P and negative if δ ∈ (1, +∞) ∩ P). We now prove that, if δ ∈ P ∩ (0, 1), f ̄(t) is positive strictly decreasing on [0, T ]. This can be proved by rewriting the ODE in equation (5.2) as f ̄t(t) = G(f ̄(t)), where
G(t) := −
[
(1 − δ) P ̄(t)Θˆ −1 (P ̄ (t))⊤ + P ̄ (t)
(  ̃ΣSΣ ̃ S⊤
)−1 (P ̄ (t))⊤
]
t2
−2
[
(1 − δ) P ̄ (t)Θˆ −1a + λ
]
t − (1 − δ) a⊤Θˆ −1a, t ∈ [0, T ].
The boundary condition implies that f ̄(T ) = 0 and that G(0) = − (1 − δ) a⊤Θˆ −1a < 0. Then, the function G(t) must be negative on [0, T ] for the boundary condition to be satisfied, and hence f ̄(t) is strictly decreasing. The same argument applies to the case δ ∈ (1 + ∞) ∩ P, where the derivative of f ̄(t) is positive, and hence f ̄(t) is strictly increasing. This concludes the proof.
C.3 Proof of Proposition 5.5
The proof replicates the lines of that of Proposition 4.6. Also in this case, we will show that
supt∈[0,T ] E
[Vˆ 1+α(t, Cˆt, Γt)
]
< ∞, for some α > 0. Using the form of the function Vˆ (cfr. equa
tion (5.6)) we get that
sup
t∈[0,T ]
E
[Vˆ 1+α(t, Cˆθ
t , Γt)
]
= sup
t∈[0,T ]
E
[1
1 − δ (Cˆθ
t )(1−δ)(1+α) e (1+α)f ̄(t)
2 Γt2+(1+α)g ̄(t)Γt+(1+α) ̄h(t)
]
≤κ ̃ sup
t∈[0,T ]
E
[
(Cˆθ
t )(1−δ)(1+α) e (1+α)f ̄(t)
2 Γt2+(1+α)g ̄(t)Γt
]
≤κ ̃
(
sup
t∈[0,T ]
E
[
(Cˆθ
t )d(1−δ)(1+α) ] 1
d
)(
sup
t∈[0,T ]
E
[
e q(1+α)f ̄(t)
2 Γt2+q(1+α)g ̄(t)Γt
]1
q
)
,
for some positive constant κ and some d, q > 1, where the first inequality comes from the fact that  ̄h(·) ∈ Cb1([0, T ]), and the second follows from H ̈older’s inequality. The first expectation is finite because of admissibility of the strategy (see the second condition of Definition 5.1). The second expectation,
34

instead, is finite because the process Γ is Gaussian. Hence,
E
[
e q(1+α)f ̄(t)
2 Γt2+q(1+α)g ̄(t)Γt
]
< ∞, (C1)
for every t ∈ [0, T ] if and only if 1 − q(1 + α)f ̄(t)Var[Γt] > 0, where Var[Γt] = Var[Yt] − P (t). If δ ∈ P ∩ (1, +∞), from Proposition 5.4, f ̄(t) < 0. Hence, 1 − q(1 + α)f ̄(t)Var[Γt] > 0 and (C1) is satisfied. If δ ∈ P ∩ (0, 1), still from Proposition 5.4, f ̄(t) is strictly positive and decreasing for every [0, T ]. Therefore,
1 − q(1 + α)f ̄(t)Var[Γt] > 1 − q(1 + α)f ̄(0)Var[Yt]
≥ 1 − q(1 + α) fˆ(0)
1 − P (0)fˆ(0) max {P0, Var[YT ]} ,
where the first inequality follows from the monotonicity of f ̄ and from the fact that Var[Γt] < Var[Yt].
The second inequality follows from f ̄(t) = fˆ(t)
1−P (t)fˆ(t) for every t ∈ [0, T ], and from the fact that Var[Yt]
is always lower than its maximum value on [0, T ], that is P0 or Var[YT ] depending on Var[Yt] being decreasing or increasing. Then the result follows immediately from (5.10).
C.4 Proof of Corollary 5.7
The proof follows the same lines as that of Corollary 4.9. Computing Et,c,γ [
log(Cˆθ
T)
]
, we get
log (c) + r (T − t) + Et,γ
[∫ T
t
θs⊤ (aΓs + b − rn) ds
]
−1
2 Et,γ
[∫ T
t
θs⊤Θθsds
]
,
Taking the first order conditions, we obtain the following system of linear equations
aΓt + b − rn − Θθt = 0n,
whose solution θ ̄⋆ is given in equation (5.12). The Hessian matrix is given by −Θ and it is negative definite for every θ ∈ Rn. This ensure that θ ̄⋆ is the unique well-defined maximiser and hence the optimal controls. Inserting the optimal strategy into the value function, we get
V ̃ (t, c, γ) = log (c) +
[
r+ 1
2 (b − rn)⊤ Θ−1 (b − rn)
]
(T − t) + 1
2 a⊤Θ−1aEt,γ
[∫ T
t
Γs2ds
]
+ a⊤Θ−1 (b − rn) Et,γ
[∫ T
t
Γsds
]
. (C2)
Since Γt is a Gaussian process, we can easily compute which are given by
Et,γ
[∫ T
t
Γsds
]
=
(
γ+β
λ
) eλ(T −t) − 1
λ −β
λ (T − t), (C3)
Et,γ
[∫ T
t
Γs2ds
]
=
(
γ+β
λ
)2 e2λ(T −t) − 1
2λ − 2
(
γ+β
λ
)(β
λ
) eλ(T −t) − 1
λ+
(β
λ
)2
(T − t)
+
∫T
t
P ̄ (u)
(Σ ̃ S  ̃ΣS⊤
)−1 P ̄ (u)⊤ e2λ(T −u) − 1
2λ du, (C4)
for every t ∈ [0, T ], respectively. By inserting equations (C3) and (C4) into (C2) and rearranging the terms, we obtain the value function V ̃ in equation equation (5.13). This concludes the proof.
35

C.5 Proof of Proposition 5.8
Applying the definition of Lt for the CRRA utility case, we get that
Lt = Ec [
vˆ(t, Cˆt, Yt) − Vˆ (t, Cˆ, Γt)|Ft
]
= c1−δ
1−δ
(
E
[
e
fˆ(t)
2 Yt+gˆ(t)Yt+ˆh(t)|Ft
]
−e
f ̄(t)
2 Yt+g ̄(t)Yt+ ̄h(t)
)
. (C5)
Since, Yt|Ft ∼ N (Γt, Pt), then
E
[
e
fˆ(t)
2 Yt+gˆ(t)Yt+ˆh(t)|Ft
]
= eˆh(t)+ 1
2
gˆ2(t)P (t)
1−fˆ(t)P (t) + gˆ(t)Γt
1−fˆ(t)P (t) + 1
2
fˆ(t)Γt2
1−fˆ(t)P (t)
√
1 − P (t)fˆ(t)
, t ∈ [0, T ]. (C6)
It is worth noting that the above expression is well defined because 1 − P (t)fˆ(t) > 0 for every t ∈ [0, T ] (see Theorem 5.3). Inserting (C6) into (C5) and using (5.7), (5.8), and (5.9) yields the result in equation (5.16). Applying the definition of efficiency (see equation (5.15)), ξ can be found by solving the following equation:
ζ 1−δ
1 − δE
[
e
fˆ(0)
2 Y02+gˆ(0)Y0+ˆh(0)|F0
]
=1
1 − δe
f ̄(0)
2 Γ20+g ̄(0)Γ0+ ̄h(0).
Using (C6) together with (5.7), (5.8), and (5.9), the foregoing equation can be rewritten as
ζ 1−δ e
1−δ 2
∫T 0
P (s)
1−P (s)fˆ(s) [  ̃ΣY  ̃ΣS⊤fˆ(s)+a⊤] ˆΘ−1[  ̃ΣY  ̃ΣS⊤fˆ(s)+a⊤]⊤ds = 1.
Hence, the result in (5.17) immediately follows. This concludes the proof.
C.6 Proof of Corollary 5.9
Applying the definition of Lt for the logarithmic utility case, noticing that E[Yt2|Ft] = Γt2 + P (t), and using equation (5.14), we obtain
Lt = a⊤Θ−1a
4λ
[
φ(t)P (t) + σY2
( φ(t)
2λ − (T − t)
)
−
∫T
t
 ̄P(s)
(  ̃ΣS  ̃ΣS⊤
)−1 P ̄ (s)⊤φ(s)ds
]
, (C7)
where φ(t) := e2λ(T −t) − 1, for every t ∈ [0, T ]. Since,
∫T
t
φ(s)dP (s) =
∫T
t
φ(s) (2λP (s) + σY2
)−
∫T
t
P ̄ (s)
(  ̃ΣSΣ ̃ S⊤
)−1  ̄P(s)⊤φ(s)ds, t ∈ [0, T ],
we get that
∫T
t
P ̄ (s)
(  ̃ΣS  ̃ΣS⊤
)−1  ̄P(s)⊤φ(s)ds =
∫T
t
φ(s) (2λP (s) + σY2
) ds −
∫T
t
φ(s)dP (s), (C8)
for every t ∈ [0, T ]. Inserting equation (C8) into (C7), we obtain the expression for the loss of utility stated in (5.18). Applying the definition of efficiency (see equation (5.15)), ξ can be found by solving the following equation:
E
[
v(0, ζ, Y0) − V ̃ (0, 1, Γ0)|F0
]
= 0. (C9)
Following the same steps used to derive the loss of utility, equation (C9) simplifies to
log(ζ) + a⊤Θ−1a
2
∫T
0
P (s)ds = 0.
Hence, the result in (5.19) immediately follows. This concludes the proof.
36

References
M. Andersson, P. Bolton, and F. Samama. Hedging climate risk. Financial Analysts Journal, 72(3): 13–32, 2016.
T. Anquetin, G. Coqueret, B. Tavin, and L. Welgryn. Scopes of carbon emissions and their impact on green portfolios. Economic modelling, 115:105951, 2022.
D. Ardia, K. Bluteau, G. Lortie-Cloutier, and T.D. Tran. Factor exposure heterogeneity in green and brown stocks. Finance Research Letters, 55:103900, 2023.
S. Basak. A comparative study of portfolio insurance. Journal of Economic Dynamics and Control, 26(7-8):1217–1241, 2002.
P. Bolton, M. Kacperczyk, and F. Samama. Net-zero carbon portfolio alignment. Financial Analysts Journal, 78(2):19–33, 2022.
P. Bolton, M.T. Kacperczyk, H.L. Rasmussen, and F. Samama. Reconciling Portfolio Diversification with a Shrinking Carbon Footprint. Technical report, CFA Institute Research and Policy Center, 2024. URL
https://rpc.cfainstitute.org/research/reports/2024/reconciling-portfolio-diversification-wit
S. Brendle. Portfolio selection under incomplete information. Stochastic processes and their Applications, 116(5):701–723, 2006.
M.J. Brennan and E.S. Schwartz. The pricing of equity-linked life insurance policies with an asset value guarantee. Journal of Financial Economics, 3(3):195–213, 1976.
K. Colaneri, A. Cretarola, E. Lombardo, and D. Mancinelli. Design and hedging of unit linked life insurance with environmental factors. arXiv preprint arXiv:2509.05676, 2025.
J. De Spiegeleer, S. H ̈ocht, D. Jakubowski, S. Reyners, and W. Schoutens. ESG: A new dimension in portfolio allocation. Journal of Sustainable Finance and Investment, 13(2):827–867, 2023.
M. Di Giacinto, D. Mancinelli, M. Marino, and I. Oliva. Pension funds with longevity risk: an optimal portfolio insurance approach. Insurance: Mathematics and Economics, 119:268–297, 2024.
M. Escobar-Anel. Multivariate risk aversion utility, application to ESG investments. The North American Journal of Economics and Finance, 63:101790, 2022.
M. Go ̈rgen, A. Jacob, M. Nerlinger, R. Riordan, M. Rohleder, and M. Wilkens. Carbon risk. Working paper, 2020.
S.J. Grossman and J.L. Villa. Portfolio insurance in complete markets: A note. Journal of Business, 62(4):473–476, 1989.
S.M. Hartzmark and A.B. Sussman. Do investors value sustainability? A natural experiment examining ranking and fund flows. The Journal of Finance, 74(6):2789–2837, 2019.
M. Hellmich and R. Kiesel. Carbon Finance: A Risk Management View. World Scientific, 2021.
C.J. Lagerkvist, A.K. Edenbrandt, I. Tibbelin, and Y. Wahlstedt. Preferences for sustainable and responsible equity funds - A choice experiment with Swedish private investors. Journal of Behavioral and Experimental Finance, 28:100406, 2020.
37

T. Le Guenedal and T. Roncalli. Portfolio construction with climate risk measures. In Climate Investing: New Strategies and Implementation Challenges, pages 49–86. Emmanuel Jurczenko, Wiley, 2023.
S. Lee and A. Papanicolaou. Pairs trading of two assets with uncertainty in co-integration’s level of mean reversion. International Journal of Theoretical and Applied Finance, 19(8):1650054, 2016.
R.S. Liptser and A.N. Shiryaev. Statistics of random processes: I. General theory, volume 5. Springer Science & Business Media, 2013.
L. Pa ́stor, R.F. Stambaugh, and L.A. Taylor. Sustainable investing in equilibrium. Journal of financial economics, 142(2):550–571, 2021.
F. Peng, M. Yan, and S. Zhang. Optimal investment of defined contribution pension plan with environmental, social, and governance (ESG) factors in regime-switching jump diffusion models. Communications in Statistics-Theory and Methods, pages 1–27, 2024.
L.C.G. Rogers. The relaxed investor and parameter uncertainty. Finance and stochastics, 5:131–154, 2001.
L.C.G. Rogers. Optimal investment. Berlin, Heidelberg: Springer-Verlag, 2013.
M. Rubinstein and H.E. Leland. The evolution of portfolio insurance. D. Luskin (Szerk.), Dynamic Hedging: A Guide to Portfolio Insurance. John Wiley and Sons, 1976.
J. Sass, D. Westphal, and R. Wunderlich. Expert opinions and logarithmic utility maximization for multivariate stock returns with gaussian drift. International Journal of Theoretical and Applied Finance, 20(04):1750022, 2017.
B.Z. Temocin, R. Korn, and A.S. Selcuk-Kestel. Constant proportion portfolio insurance in defined contribution pension plan management. Annals of Operations Research, 266(1):329–348, 2018.
D. Zieling, A. Mahayni, and S. Balder. Performance evaluation of optimized portfolio insurance strategies. Journal of Banking and Finance, 43:212–225, 2014.
38

---

## Processing Information

- **Processing Library:** Zotero PDFWorker
- **Processing Date:** 2026-02-10T18:16:48.581Z
- **Text Length:** 96975 characters
- **Success:** Text extraction completed
- **PDF Library Used:** Zotero PDFWorker
- **Pages Processed:** 38 of 38
