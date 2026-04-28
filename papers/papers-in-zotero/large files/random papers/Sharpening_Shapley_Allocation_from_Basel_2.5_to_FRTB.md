# PDF Document: Scaringi and Bianchetti - Sharpening Shapley Allocation from Basel 2.5 to FRTB.pdf

**File Path:** Scaringi and Bianchetti - Sharpening Shapley Allocation from Basel 2.5 to FRTB.pdf

**Processed Date:** 2026-02-10T18:18:48.349Z

**File Size:** 2495.15 KB

**Total Pages:** 47

**Extracted Pages:** 47

**PDF Library:** Zotero PDFWorker

**Attachment Item ID:** 3542

**Title:** Sharpening Shapley Allocation: from Basel 2.5 to FRTB

**Collection:** Large Files > Random Papers

---

## Extracted Text Content

M. Scaringi, M. Bianchetti Sharpening Shapley Allocation
Page 1 of 47
Sharpening Shapley Allocation: from Basel 2.5 to FRTB
Marco Scaringi1, Marco Bianchetti2,3,*
1 Risk Trading Quant Department, ING Bank N. V., Milan, Italy 2 Financial and Market Risk Management, Intesa Sanpaolo, Milan, Italy 3 Department of Statistical Sciences "Paolo Fortunati", University of Bologna, Italy, * Corresponding author, marco.bianchetti@unibo.it
16 November 2025
Abstract
Risk allocation, the decomposition of a portfolio-wide risk measure into component contributions, is a fundamental problem in financial risk management due to the non-additive nature of risk measures, the layered organizational structures of financial institutions and the range of possible allocation strategies characterized by different rationales and properties. In this work, we conduct a systematic review of the major risk allocation strategies typically used in finance, comparing their theoret-
ical properties, practical advantages, and limitations. To this scope we set up a specific testing framework, including both simplified settings, designed to highlight basic intrinsic behaviours, and realistic financial portfolios under different risk regulations, i.e. Basel 2.5 and FRTB. Furthermore, we develop and test novel practical solutions to manage the issue of negative risk allocations and of multi-level risk allocation in the layered organizational structure of financial institutions, wh-
ile preserving the additivity property. Finally, we devote particular attention to the computational aspects of risk allocation. Our results show that, in this context, the Shapley allocation strategy offers the best compromise between simplicity, mathematical properties, risk representation and computational cost. The latter is still acceptable even in the challenging case of many business units, provided that an efficient Monte Carlo simulation is employed, which offers excellent scaling and con-
vergence properties. While our empirical applications focus on market risk, our methodological framework is fully general and applicable to other financial context such as valuation risk, liquidity risk, credit risk, and counterparty credit risk.
Keywords: capital, market risk, risk analysis, risk allocation, risk attribution, Shapley, Monte Carlo, Euler, Basel Accords, FRTB.
Classifications: JEL: C63, D81, G11, G28, G32 ; MSC: 91B30 (primary) 91A12, 91G70, 62P05, 65C05 (secondary); ACM: G.3, I.2.11, J.4, J.1.
Acknowledgements
The authors gratefully acknowledge fruitful interactions with F. Lania, L. Lamorte, D. Maffei, G. Polito, and many other colleagues at Intesa Sanpaolo financial risk management and front office trading desks, and with C. Acerbi, F. Centrone, G. Fusai, E. R. Gianin, U. Cherubini.
Disclaimer
The views and the opinions expressed here are those of the authors and do not represent the opinions of their employers. They are not responsible for any use that may be made of these contents. No part of this material is intended to influence investment decisions or promote any product or service.

M. Scaringi, M. Bianchetti Sharpening Shapley Allocation
Page 2 of 47
Summary
1. Introduction ......................................................................................................................... 3
1.1. Risk Allocation in Finance................................................................................................ 3
1.2. Literature Review............................................................................................................. 4
1.3. Our Contribution .............................................................................................................. 5
2. Methodology........................................................................................................................ 5
2.1. Game Theory .................................................................................................................. 6
2.2. Risk Allocation Theory ..................................................................................................... 6
2.3. Allocation Strategies........................................................................................................ 9
2.4. Negative Shapley Allocation .......................................................................................... 13
2.5. Multi-Level Allocation Strategies.................................................................................... 14
2.6. Hybrid Allocation Strategies........................................................................................... 17
3. Numerical Methods ........................................................................................................... 17
3.1. Shapley Monte Carlo ..................................................................................................... 17
3.2. Computational Cost ....................................................................................................... 19
3.3. Computing Marginals..................................................................................................... 21
4. Numerical Results: Toy Cases .......................................................................................... 21
4.1. Monte Carlo Convergence Analysis............................................................................... 21
4.2. Allocation strategies comparison ................................................................................... 25
4.3. Shapley Monte Carlo ..................................................................................................... 27
4.4. Negative Shapley Allocation .......................................................................................... 28
5. Numerical Results: Realistic Cases ................................................................................... 30
5.1. Market Risk Capital Allocation Under Basel 2.5 ............................................................. 30
5.2. Market Risk Capital Allocation Under FRTB .................................................................. 35
6. Conclusions....................................................................................................................... 36
7. References........................................................................................................................ 37
8. Appendices ....................................................................................................................... 39
8.1. Risk Measures............................................................................................................... 39
8.2. Proof of Full Allocation Property for Shapley Monte Carlo ............................................. 39
8.3. Illustrative Example of Algorithm 1................................................................................. 40
8.4. Basel 2.5 ....................................................................................................................... 40
8.5. FRTB............................................................................................................................. 44
8.6. Risk Allocation Strategies .............................................................................................. 47

M. Scaringi, M. Bianchetti Sharpening Shapley Allocation
Page 3 of 47
1. Introduction
1.1. Risk Allocation in Finance
To address uncertainty about their future net worth, financial institutions subject to regulatory requirements must hold an amount of riskless assets, called risk capital, to protect themselves. Risk capital is typically related to a combination of risk measures associated to the different risk sources (credit, market, ALM, operational, etc.). After the 2008 financial crisis, regulators worldwide strengthened capital requirements, forcing institutions to raise more capital to support their busines-
s. Therefore, institutions were forced to reallocate internal resources taking into account not only expected profits but also capital consumption of business units. The problem of risk aggregation consists in combining different risk measures into the total economic capital of the institution. The other way round, the problem of risk allocation (or risk attribution) consists into the decomposition of a risk measure into the contributions of its components, (e.g. each single trade, or sub-portfoli-
o, business unit, underlying risk factor, etc.) contributing to the measure itself. A typical example is the internal market risk reporting in a bank: the different business units are organised according to some hierarchy and manage portfolios of financial instruments (bonds, derivatives, funds, loans, etc.), while the market risk management unit produces the market risk figures (e.g. VaR, stressed VaR, Expected Shortfall, etc.), monitors the corresponding risk limits and reports to business units-
 and management. The risk aggregation/allocation problem is not straightforward since many risk measures are typically non-additive, i.e. the overall portfolio risk measure, which determines the risk capital, is typically (but not necessarily) smaller than the sum of risk measures at business unit level due to interactions and correlations among its risk components (i.e. because of diversification and hedging effects). Thus, on the one hand, the single (portfolio level) risk measures are not repre-
sentative of the actual capital consumption of each trading desk, while, on the other hand, it’s not trivial how to split the total capital figure and allocate it to each business unit. We report in App. 8.1 a (non-exhaustive) list of risk measures which are typically encountered in financial risk management. From a financial and risk management point of view, a transparent, statistically robust and performant risk allocation strategy clearly provides several benefits. Firstly, it offers a clear a-
nd reliable representation of risk sources at a given aggregation level considering correlations, diversification and hedging effects, enhancing the overall understanding of the risk map, and improving transparency and accuracy of risk reporting. Moreover, it facilitates what-if analyses, i.e. simulations of possible portfolio changes, e.g. portfolio merging or split, impact of new trades, etc. Finally, it allows to spot possible risk-based business opportunities, e.g. trading or hedging strategie-
s with favourable P&L/capital ratio, and a better performance management of business units using appropriate KPIs which combine P&L and capital consumption. From a mathematical point of view, risk allocation is a challenging task which presents several complexities. The main challenge lies in the non-additivity of popular risk measures, which makes standalone allocation, the simplest strategy, not satisfactory. Furthermore, risk measures are typically based on empirical realizations of profits and-
 losses (P&L), using historical or Monte Carlo approaches. Hence, viable risk allocation strategies must be general must be general and avoid strong mathematical assumptions (unless some approximations are considered) and must be robust against possible statistical instabilities associated with tail measures, i.e. when one samples P&L distributions tails including only a few scenarios. Finally, from a computational and IT point of view, risk measures calculation processes may be challenging, e.g. -
in case of Monte Carlo simulation, leading to computational bottlenecks for those allocation strategies which require several risk measure recalculations. Furthermore, risk allocation at lowest hierarchical levels (i.e. single trade, or single risk scenario, or single risk factor, etc.) requires to handle and store huge amount of data. Therefore, the risk allocation task requires a performant and flexible infrastructure able to integrate all the required components: trades, portfolio hierarchy, ri-
sk factors, risk scenarios, stress test, what-if analyses, pricing and risk analytics, data storage, hardware, etc. In this paper we focus on the Shapley allocation strategy, which, according to our results, provides the best compromise between financial, mathematical and computational properties.

M. Scaringi, M. Bianchetti Sharpening Shapley Allocation
Page 4 of 47
1.2. Literature Review
There is an extensive scientific literature related to risk allocation in general and to Shapley allocation in particular. Shapley allocation was originally developed by Lloyd Shapley1 in 1953 (see Shapley (1953), Roth (1988)) in the context of cooperative game theory. The basic idea is that a set of players may form different coalitions to individually optimize a common worth function. In order to achieve this result, each player is allocated a fair worth value that corresponds to its average mar-
ginal contribution to the worth of all possible coalitions. Currently, Shapley allocation is widely used in many different fields, adapting the concepts of players, coalitions and worth function to the specific problem, as briefly discussed below. In the field of artificial intelligence, Li et al. (2024) and Rozemberczki et al. (2022) provided a detailed review of Shapley allocation applications in machine learning for features importance and explainable artificial intelligence (XAI). Brigo et al.-
 (2021) focused on neural networks calibration of the popular Heston stochastic volatility model for option pricing, showing that Shapley allocation may help to choose the network architecture and to explain the importance of Heston model parameters. Aiolfi et al. (2024) (see their fig. 5) used feature importance to confirm that Bermudan Swaption prices are principally driven by their corresponding maximum underlying European Swaptions. In the field of financial portfolio optimization, Mussard and-
 Terraza (2008) used the Shapley allocation to decompose the portfolio covariance matrix and to define new variance ratios which measure the contribution of each security to the overall portfolio risk. Ortmann (2016) found a relationship between the Shapley allocation and the beta factor in the Capital Asset Pricing Model (CAPM). Moehle et al. (2021) used Shapley allocation to attribute portfolio performance to different features driving the investment process. Shalit (2023) used the weighted Shap-
ley allocation, admitting players’ asymmetries, to attribute risk and return of an efficient mean-variance portfolio to portfolio’s components.
In the field of financial risk aggregation, Morone et al. (2007) developed independent marginal models for the loss distributions of risk classes and merge them into a joint distribution via copula. Successively, Lugoboni et al. (2021) improved this approach using Shapley allocation. In the field of financial risk allocation, Denault (2001) took an axiomatic approach suggesting a set of properties to be fulfilled by any coherent risk allocation strategy connected to coherent risk measures. Epperle-
in and Smillie (2006) used kernel estimators to compute component VaR (i.e. VaR allocation to sub-portfolios). Tasche (2008) examined in detail the Euler allocation deriving specific formulas for some popular risk measures. Li et al (2016) proposed a Constrained AumannShapley (CAS) allocation strategy at single trade level which preserves additivity and associativity properties at any hierarchical level. Balog et al (2017) systematically analysed 7 different allocation strategies in terms of ten r-
easonable fairness properties. Centrone and Rosazza Gianin (2018) studied capital allocation rules satisfying suitable properties for convex and quasi-convex risk measures, by focusing on Aumann–Shapley allocation. Hagan et al. (2021) used Shapley allocation strategy to allocate risk to non-orthogonal greeks in a portfolio of derivatives, based on previous results of Colini-Baldeschi et al. (2018) on variance and volatility games, where the risk measure is the variance or the volatility of a portf-
olio. Mastrogiacomo and Rosazza Gianin (2024) studied risk allocation for dynamic risk measures with an axiomatic approach and by exploiting the relation between risk measures and BSDEs. Holden (2024) discussed capital allocation using the Euler formula and Value-at-Risk (VaR) and Expected shortfall (ES). In the specific context of the Fundamental Review of the Trading Book (FRTB), Schulze (2018) presented a way to compute Euler allocation for the six risk measures contributing to the FRTB capital-
 charge. Li and Xing (2019) focused on the Internal Model Approach (IMA) under FRTB and proposed two computationally efficient Euler allocation strategies weighted according to FRTB liquidity horizons. Regarding Monte Carlo simulation, introduced by Mann and Shapley (1960), Mitchell et al. (2022) exploited efficient estimation of Shapley allocation using different variance reduction techniques. Markov chain Monte Carlo was used by Holden (2024).
1 Awarded with the Nobel prize in Economic Sciences in 2012, https://www.nobelprize.org/prizes/economicsciences/2012/shapley/facts/

M. Scaringi, M. Bianchetti Sharpening Shapley Allocation
Page 5 of 47
1.3. Our Contribution
A key contribution of our study is a detailed evaluation of the most common risk allocation strategies used in finance and risk management, with particular attention to both their theoretical properties and their scalability and practical feasibility in large-scale financial applications. Specifically, we proof that, contrary to the common wisdom, the Shapley allocation strategy remains a feasible choice even in the challenging case of tens of business units, provided that at a certain point one s-
witches from the analytical allocation (which scales exponentially with the number of business units) to the Monte Carlo allocation, thanks to its excellent convergence properties (linear scaling with the number of business units Moreover, we develop innovative solutions to address the challenge of negative risk allocations. While prior literature recognized the occurrence of negative risk contributions, particularly in Shapleybased allocations, no structured or widely accepted solutions have been-
 established. Although negative values are theoretically valid outcomes of an allocation strategy, they can be problematic in practical applications where non-negative risk contributions are often required for interpretability. To address this gap, we conduct a rigorous analysis of the theoretical conditions under which negative allocations may arise, and we propose some novel practical approaches that preserve the fundamental principles of Shapley allocation while ensuring non-negative outcomes. -
Another contribution of our study is the development of a multi-level Shapley allocation strategy. Unlike other approaches, which typically focus on a single hierarchical level, or prevent marginal contributions from different hierarchical branches (see e.g. Li et al. (2016)), our framework systematically accounts for a consistent risk allocation which preserves the additivity property at multiple levels, a typical situation of large financial institutions where business units are organized in a d-
eep hierarchical structure. To enhance flexibility, we propose different viable multi-level allocation strategies, each based on a different rationale. The choice between these alternatives may be guided by the specific objectives of the risk allocation exercise and by internal managerial decisions. Finally, we set up a specific testing framework, including both simplified settings, designed to highlight basic behaviours of allocation strategies of different risk measures, and realistic financial -
portfolios, which reflect the typical trading activities of a financial institution, providing detailed numerical analyses in two market risk contexts of particular interest: Basel 2.5 (see CRR1 (2013) and CRR2 (2019)) and Fundamental Review of the Trading Book (FRTB, see CRR3 (2024)) regulatory frameworks. Overall, our results show that, even in the context of complex financial institutions, characterized by a multi-level organisational structure including many business units, which make use of r-
egulatory risk measures lacking desirable theoretical properties (e.g. historical VaR), the Shapley allocation strategy offers the best compromise between simplicity, mathematical properties, risk representation and computational cost. While our empirical applications focus on market risk, our methodological framework is fully general and applicable, in principle, to any financial context where a global risk measure must be decomposed into the contributions of individual components, including - am-
ong others - valuation risk, liquidity risk, credit risk, and counterparty credit risk.
The structure of the paper is the following: in Sec. 2 we introduce the notation and describe the methodological framework; in Sec. 3 we discuss some numerical methods used to speed up the calculation of allocation strategies; in Sec. 4 we test the behaviour of the different allocation strategies in a simplified context; in Sec. 5 we provide numerical results in the real world of regulatory capital allocation; in Sec. 6 we summarize our conclusions.
2. Methodology
In this section we set the theoretical framework used throughout the paper, aiming to provide a comprehensive overview for readers unfamiliar with the subject. Experienced readers can skip to the next sections. In Sec. 2.1 we remind the concepts, language and notation of game theory, which provides an excellent framework to formalize and discuss the risk allocation problem. In Sec. 2.2 we translate the concepts from game theory to risk allocation theory. In Sec. 2.3 we summarize and

M. Scaringi, M. Bianchetti Sharpening Shapley Allocation
Page 6 of 47
compare several popular allocation strategies, with a particular focus on Shapley allocation and its Monte Carlo simulation.
2.1. Game Theory
We assume a game with a set of n players P = {p1, ... , pn} and denote with N = {1, ... , n} the set of indices labelling the elements of P. Since there is a one-to-one correspondence between P and N, we use directly N and forget about P. Any subset of players S ⊆ N is called a coalition, and N itself is called the grand coalition. We assume that all players are equal (i.e. subject to the same rules, no asymmetries) and behave independently of each other.
We define the game characteristic function (a.k.a. value, utility, cost, contribution, reward or objective function) v: P(N) → R, where P(N) is the power set of N (i.e. the set of all subsets of N with cardinality |P(N) | = 2n), such that v({i}), v(S), v(N), represent the value that, respectively, ith player, coalition S, grand coalition N may obtain acting by themselves, i.e. respectively, alone, coalized with the other players in S, and coalized all together in N. Conventionally we set v(∅) = 0 -
for the empty coalition. A cooperative (or coalitional) game is defined by the pair (N, v) where the goal of each player is to optimize its value, accepting or not to take part in coalitions, including the grand coalition. The main question of coalitional games is the fair allocation of the total value v(N) between all players, which is formalized by the concept of value, i.e. a function φ: G ⟶ Rn, where G is the set of all games with n players, mapping each game (N, v) into a unique allocation K -
= {K1, ... , Kn} such that
φ(N, v) ⟶ [
φ1(N, v) ⋮
φn(N, v)
]=[
K1 ⋮ Kn
] , K = ∑ Ki
i∈N
= v(N). (1)
Notice that, in general,
v({i}) ≠ Ki, ∑ v({i})
i∈S⊆N
≠ v(S) ≠ ∑ Ki
i∈S⊆N
, ∑ v({i})
i∈N
≠ v(N) = ∑ Ki
i∈N
= K. (2)
If the characteristic function is subadditive and interpreted as a cost function, we have
v(S1 ∪ S2) ≤ v(S1) + v(S2), (3)
leading to
Ki ≤ v({i}), ∑ Ki
i∈S
≤ v(S) ≤ ∑ v({i})
i∈S
, ∑ Ki
i∈N
= v(N) ≤ ∑ v({i})
i∈N
. (4)
In this case players have an incentive to form coalitions S, since this would reduce their total individual costs ∑ v({i})
i∈S to the total coalition cost v(S). They only need to find a strategy to allocate
the total cost v(S) between members of S, minimizing their individual costs Ki, with the obvious
constrain ∑i∈S Ki ≤ v(S), otherwise every player in S would leave the coalition and find another better coalition.
2.2. Risk Allocation Theory
The game theory concepts summarized in the previous Sec. 2.1 may be adapted to a variety of different situations, provided that a translation, i.e. a one-to-one association is available between the two contexts.

M. Scaringi, M. Bianchetti Sharpening Shapley Allocation
Page 7 of 47
In the context of risk allocation, one may identify the players with single risk units, i.e. risk factors (interest rates, equities, commodities, etc.), or single trades, or portfolios of trades, or business units. Coalitions are associated to groups of risk units. The grand coalition is associated to the total risk unit. In order to make more explicit the uncertainty, i.e. the risk, associated to risk units, we assign to each player a bounded random variable Xi: L∞(Ω, F, P) → R, where L∞(Ω, F, P)-
 is the space of
bounded random variables, (Ω, F, P) is a probability space, Ω is the set of all possible outcomes, F is the filtration including all subsets of Ω and P is a probability measure. We denote by Xi the random variable representing i-th player with some probability distribution. For example, it can be interpreted as the value or the profit and loss of the i-th risk unit within a given time horizon T. In what follows we drop the time variable. The stochastic nature of the random variables X = { X1, ... -
, Xn}, represents the risk associated to risk units. Therefore, the composite random variables
XS = ∑ Xi
i∈S⊆N
, XN = ∑ Xi
i∈N
= X, (5)
represents the values associated to coalition S and to grand coalition N, respectively. For consistency, we associate the null distribution X∅ to the null coalition (see Eq. (6) below). We then associate the game characteristic function to a risk measure ρ: X → R, which represents the level of risk of coalitions, such that
ρ(Xi) = v({i}), ρ(XS) = v(S), ρ(X) = v(N) = K, ρ(X∅) = v(∅) = 0, (6)
are the risk measures associated to player i, coalition S, grand coalition N, and null coalition S = ∅ respectively. The risk measure may be interpreted as a potential loss within time horizon T with a given confidence level, or as the corresponding minimum level of capital (cash) to be added to the coalition’s worth or P&L to make them acceptable.
Finally, we define risk allocation problem the pair (N, ρ), i.e. the problem of allocating the amounts of risk {ρ(X1), ... , ρ(Xn)} to players N = {1, ... , n}. We denote by R the set of all risk allocation
problems with n risk units, and define risk allocation strategy (a.k.a. risk allocation principle2, technique, approach, or scheme) a function Π: R → Rn mapping each allocation problem (N, ρ) into a unique allocation K = {K1, ... , Kn},
Π(N, ρ) = [
Π1(N, ρ) Π2(N, ρ) ⋮
Πn(N, ρ)
]=[
K1
K2 ⋮ Kn
], (7)
where Ki stands for the allocated risk of the i-th portfolio. A fair risk allocation strategy satisfies the full allocation property
∑ Ki
i∈N
= ρ(X). (8)
Notice that, in general,
ρ(Xi) ≠ Ki, ∑ ρ(Xi)
i∈S
≠ ρ(XS) ≠ ∑ Ki
i∈S
, ∑ ρ(Xi)
i∈N
≠ ρ(X) (9)
The quantities
2 In the literature “allocation principle” is frequently used. We prefer “allocation strategy” since the different allocation formulas are simply different ways to allocate risk, while “principle” refers to something more fundamental.

M. Scaringi, M. Bianchetti Sharpening Shapley Allocation
Page 8 of 47
ρ(Xi) − Ki, ρ(XS) − ∑ ρ(Xi)
i∈S
, ρ(X) − ∑ ρ(Xi)
i∈N
, (10)
are the diversification benefits of the i-th player of coalition S, and of grand coalition N, respectively. We summarize in Table 1 the translation between game theory and risk allocation languages and notations. Although in the following we will rely on the notation introduced above, in some practical applications the variables X = {X1, X2, ... , Xn} may be represented by their actual (finite) empirical distributions, e.g. when they are estimated using Monte Carlo or historical scenarios. In thes-
e cases, each variable is redefined as follows
Xi → ̂Xi = { ̂xi,1, ... , ̂xi,m}, (11)
where ̂Xi is the estimated distribution at time T of Xi with m scenarios, ̂xi,j is the realization of variable Xi in the scenario j,
̂XS = ∑ ̂Xi
i∈S⊆N
, ̂XN = ∑ ̂Xi
i∈N
= ̂X, (12)
are the estimated distributions at time T of XS and XN, respectively, and
̂xS,j = ∑ ̂xi,j i∈S⊆N
, ̂xN,j = ∑ ̂xi,j
i∈N
, (13)
are the realizations of variable XS and XN in the scenario j.
Game Theory vs Risk Allocation Languages and Notations
Game Theory Risk allocation Examples
Players
P = { p1, ... , pn}
Risk units
X = { X1, ... , Xn}
• Single risk factor • Single trade • Single portfolio of trades • Single business unit
Grand coalition N = { 1, ... , n}
Total risk unit
XN = ∑ Xi
i∈N
• All risk factors • All trades • All portfolios of trades • Bank
Coalition
S = { ∅, 1, ... , s} ⊆ N
Group of risk units
XS = ∑ Xi
i∈S⊆N
• Group of risk factors • Group of trades • Group of portfolios of trades • Group of business units
Characteristic function v: P(N) → R
Risk measure ρ: X → R
• Value at Risk • Expected Shortfall • Etc. see App. 8.1
Cooperative game (N, v)
Risk allocation problem
(N, ρ) See above
Value φ(N, v)
Risk allocation strategy Π(N, ρ)
• Marginal • Shapley • Etc. see Sec. 2.3

M. Scaringi, M. Bianchetti Sharpening Shapley Allocation
Page 9 of 47
Allocation K = {K1, ... , Kn} Allocation K = {K1, ... , Kn} -
Fair game
∑ Ki
i∈N
= v(N)
Fair allocation strategy
∑ Ki
i∈N
= ρ(X) -
Table 1: translation between game theory and risk allocation languages and notations.
2.3. Allocation Strategies
Given a risk allocation problem (N, ρ), there are many different possible risk allocation strategies Π(N, ρ), whose properties depend on the mathematical properties of the measure ρ. We list below the most important examples. We report in App. 8.6 a comparison table which considers the following properties: full allocation, computational effort, interactions among risk units, potential negative values, theoretical or numerical issues. For more details see
2.3.1. Standalone
It consists in allocating to each risk unit Xi an amount of risk excluding all the other contributors, namely
KiSta = ρ(Xi). (14)
Strictly speaking, this is not an allocation strategy, since it does not fulfill the full allocation property.
2.3.2. Proportional
It consists in allocating to each risk unit Xi an amount of risk proportional to its own risk, namely
KiPro = wPNroρ(Xi), wPNro = ρ(XN)
∑ ρ(Xj)
j∈N
. (15)
The full allocation property is granted by construction through the normalization factor wPNro. Such strategy does not consider the dependency structure between the different risk units. This strategy is frequently adopted because of its simplicity and ease of implementation. We will use it as a benchmark throughout the paper.
2.3.3. Marginal
It consists in allocating to each risk unit Xi an amount of risk proportional to its marginal effect on the total risk unit. In other words, it is the impact on the total risk measure due to the exclusion of the i-th risk unit, namely
KiMar = wNMar[ρ(XN) − ρ(XN − Xi)], wNMar = ρ(XN)
∑ [ρ(XN) − ρ(XN − Xj)]
j∈N
. (16)
The full allocation property is granted by construction through the normalization factor wNMar. Such method displays two main limitations: it does not consider the effect of the i-th risk unit on the other coalitions S ⊆ N, and it may lead to numerical instabilities if the marginal effect of the risk unit is small, i.e. when ρ(XN) ≃ ρ(XN − Xj) and the denominator is small.

M. Scaringi, M. Bianchetti Sharpening Shapley Allocation
Page 10 of 47
2.3.4. Shapley
It consists in allocating to each risk unit Xi an amount of risk proportional to its average marginal
effect3 on all possible coalitions S which include the risk unit itself, namely
KiSha = ∑ wnS,hsa[ρ(XS) − ρ(XS\{i})]
S⊆N,i∈S
, wnS,hsa = 1
n (n − 1
s − 1)
−1
= (s − 1)! (n − s)!
n! , (17)
where s = |S|. Equivalently, one may take the average of marginal effects with respect to all possible coalitions S which exclude the risk unit itself, namely
KiSha = ∑ w′Sn,hsa[ρ(XS∪{i}) − ρ(XS)]
S⊆N\{i}
, w′Sn,hsa = 1
n (n − 1
s)
−1
= s! (n − s − 1)!
n! . (18)
Since XS∪{i} = XS + Xi and XS\{i} = XS − Xi, we may also write
KiSha = ∑ wnS,hsa[ρ(XS) − ρ(XS − Xi)]
S⊆N,i∈S
, (19)
KiSha = ∑ w′Sn,hsa[ρ(XS + Xi) − ρ(XS)]
S⊆N\{i}
. (20)
Notice the different coalitions considered in the two sums in Eq. (19) and Eq. (20) above. In particular, the sum in Eq. (19) excludes the empty coalition S = ∅, s = 0 and includes the grand coalition S = N, s = n, while Eq. (20) includes S = ∅ and excludes S = N. It is evident that eq. (19) is a generalisation of the marginal allocation in eq. (16), also avoiding its possibly unstable normalization factor. Contrary to Proportional and Marginal allocation strategies, Shapley considers the full int-
eraction structure between all the risk units. In fact, we notice that the sum in Eq. (20) is performed for each of the 2n−1 coalitions S ⊆ N\{i}, namely
S = ∅, {1}, {2}, ... , {n}, {1,2}, ... , {1, ... , {i}, ... , n} ... , N\{i}, (21)
and its first and last terms S = ∅ and S = N\{i} are given by
KiSha = 1
n ρ(Xi) + 1
n [ρ(XN) − ρ(XN − Xi)] + ⋯ (22)
in which we recognize the Proportional and the Marginal allocations with weights w′n,s=0
Sha =
w′n,s=n−1
Sha = 1/n. These two terms are the typically the largest contributions to the sum since their weights are the largest ones. The same result is obtained looking at Eq. (19). We show this effect in Figure 1. The main drawback of Shapley allocation is the computational effort required by Eq. (19) or (20): for each risk unit Xi the average over coalitions involves 2n−1 elements, and for each element the risk measure ρ is computed twice. Since the double calculation of the risk measure can be avoided r-
eusing previous calculations (see Sec. 3.1), the computational effort for the whole set of n risk units grow as n × 2n−1, which becomes unmanageable already for a relatively low value of n, depending on the effort required to compute the risk measure ρ. More details on the computational cost are given in Sec. 3.2.
3 This is the reason why we discuss Shapley allocation just after Marginal allocation.

M. Scaringi, M. Bianchetti Sharpening Shapley Allocation
Page 11 of 47
Figure 1: Shapley weights computed with Eq. (18). We notice that the largest weights are assigned, for any number of players n, to the empty coalition S = ∅, s = 0, corresponding to the proportional allocation, and to the largest coalition S = N\{i}, s = n − 1, corresponding to the Marginal allocation. All the other terms contribute with smaller weights.
2.3.5. Aumann-Shapley and Euler
Aumann-Shapley allocation strategy (Denault (2001)) is a generalization of Shapley allocation in case of fractional players, which may have a continuous level of presence in coalitions, such that
X(u) = ∑ uiXi
n
i=1
, (23)
KiAuSha = ∫ ∂ρ[X(λu)]
∂(λui) dλ
1
0
|
u=1
, (24)
where the weight variables u = {u1, ... , un} ∈ [0,1]n represent the fractional worth associated with each risk unit, or, in other words, the amount of money invested in the underlying assets. From Eq. (24) we recover Eq. (5) with X = X(u = 1). We may look at eq. (24) as the infinitesimal version of Shapley allocation in eq. (20), i.e. a continuous sum of infinitesimal marginal contributions
∂ρ[X( ̃u)] ∂ ̃ui
: = lim
Δ ̃ui →0
ρ[X( ̃u + Δ ̃ui)] − ρ[X( ̃u)] Δ ̃ui
, (25)
where ̃u = λu, and X( ̃u + Δ ̃ui) = ∑ ( ̃uj + Δ ̃uiδij)Xj
jn=1 .
Euler allocation strategy is a particular case of Aumann-Shapley allocation for first-order homogeneous and differentiable risk measures, such that ρ[X(λu)] = λρ[X(u)]. In this case, as shown in Tasche (2008), the allocation formula reads
KiEul = ∫ ∂ρ[X(λu)]
∂(λui) dλ
1
0
|
u=1
= ∫ ∂ρ[X(u)]
∂(λui) λdλ
1
0
|
u=1
= ∂ρ[X(u)]
∂ui
|
u=1
. (26)

M. Scaringi, M. Bianchetti Sharpening Shapley Allocation
Page 12 of 47
The full allocation property is granted by the Euler theorem on homogeneous functions (Tasche (2008)),
∑ KiEul
n
i=1
= ∑ uiKiEul
n
i=1
|
u=1
= ∑ ui
∂ρ[X(u)] ∂ui
n
i=1
|
u=1
= ρ(X). (27)
Since the direct implementation of Eq. (26) may be cumbersome, Tasche (2008) provides specific formulas for some popular risk measures, described below.
Euler Standard Deviation We have
ρ(X) = Std(X), Ki
Eul,Std = cov(Xi, X)
√var(X) , (28)
where var, cov are the variance and covariance functions.
Euler Expected Shortfall
We have, for confidence level4 α,
ρ(X) = ESα(X), Ki
Eul,ES = −(1 − α)E[Xi1{X≤−VaRα(X)}], (29)
where VaRα is the Value at Risk at confidence level α, 1{⋅} is the indicator function and E[⋅] is the expected value operator.
Euler VaR
We have, for confidence level α,
ρ(X) = VaRα(X), Ki
Eul,VaR = −E[Xi|X = −VaRα(X)]. (30)
As pointed out in Tasche (2008), the direct computation of the expectation in Eq. (30) may be challenging. For this reason, the following first order approximation is available, based on a linear approximation of the expected value
Ki
Eul,VaR,1st = E[Xi] + cov(Xi, X)
var(X) [VaRα(X) − E[X]]. (31)
Being Eq. (31) derived as an approximation, the full allocation property is no longer granted. To improve the quality of the approximation, Tasche and Tibiletti (2001) propose a second order approximation,
Ki
Eul,VaR,2nd = E[Xi] + ai[VaRα(X) − E[X]] + bi[VaRα(X2) − E[X2]], (32)
4 Throughout this paper, Value at Risk is intended as a percentile (left tail) of the profit and loss distribution.

M. Scaringi, M. Bianchetti Sharpening Shapley Allocation
Page 13 of 47
where
ai = var(X2)cov(Xi, X) − cov(X, X2)cov(Xi, X2)
var(X)var(X2) − cov(X, X2)2 , (33)
bi = var(X)cov(Xi, X2) − cov(X, X2)cov(Xi, X)
var(X)var(X2) − cov(X, X2)2 . (34)
As discussed in Sec. 2.2, for many practical applications the variables {X1, ... , Xn} are represented
by their actual (finite) empirical distributions defined in Eq. (11), ̂Xi = { ̂xi,1, ... , ̂xi,m}. According to Tasche (2008), in these situations it is possible to obtain consistent estimators of the Euler allocation simply substituting X with ̂X for Standard Deviation (Eq. (29)) and Expected Shortfall (Eq. (30)). In contrast, for Value at Risk this trick is not possible. A possible workaround is based on the NadarayaWatson Kernel as shown below
Ki
Eul,VaR,Ker = −
∑ ̂xi,kκ (−VaRα( ̂X+b)− ̂xk
b)
km=1
∑ κ (−VaRα( ̂X+b)− ̂xk
b)
km=1
, (35)
where κ is the (Gaussian) kernel and b is estimated as follows
b = 0.9 min(σ, R/1.34) n−1/5, (36)
where σ and R are the standard deviation and the interquartile range of the distribution ̂x1, ... , ̂xm, respectively.
2.4. Negative Shapley Allocation
Shapley allocation may assume negative values when adding a risk unit to a coalition S reduces the risk of the coalition, i.e. ρ(XS + Xi) < ρ(XS). In practice this effect occurs either for risk units hedging many other risk units, or when the risk unit is negligible in many coalitions. While negative Shapley allocations are theoretically meaningful, they can be problematic in case of allocation of positive risk measures. To solve this issue Denault (2001) invokes a pragmatic “crossed finger” appro-
ach, assuming that in real-life the issue is quite unlikely, and we may ignore it. Liu (2020) proposes two possible modifications of the original Shapley formula forcing non-negative values,
KiSha = ∑ wiSha|ρ(XS) − ρ(XS − Xi)|
S⊆N,i∈S
, (37)
KiSha = ∑ wiShamax[ρ(XS) − ρ(XS − Xi); 0]
S⊆N,i∈S
. (38)
Unfortunately, both the approaches above are not backed by any theoretical foundation and break the full allocation property. Instead, we propose below two simple alternative approaches to manage negative Shapley allocations while preserving the full allocation property. The set negative Shapley allocation set is denoted hereafter by N− = {i ∈ N s. t. KiSha < 0}.
2.4.1. Shapley Maximum Proportional
We set to zero any negative allocation,

M. Scaringi, M. Bianchetti Sharpening Shapley Allocation
Page 14 of 47
KiSha+ = max[KiSha; 0], (39)
and redistribute the resulting non-negative allocations proportionally to all risk units,
KiShaMax = ρ(X)
∑ KiSha+
i∈N
KiSha+ = ρ(X)
ρ(X) − ∑ KiSha
i∈N −
KiSha+. (40)
From Eq. (40) we have that
{KiShaMax ≤ KiSha
KiShaMax = 0
for i ∉ N−,
for i ∈ N−. (41)
The resulting allocation in Eq. (40) above, which we call Shapley Maximum Proportional, respects the full allocation property,
∑ KiShaMax
i∈N
= ρ(X)
ρ(X) − ∑ KiSha
i∈N−
∑ KiSha+
i∈N
= ρ(X)
ρ(X) − ∑ KiSha
i∈N −
(ρ(X) − ∑ KiSha
i∈N −
)
= ρ(X).
(42)
2.4.2. Shapley Absolute Proportional
We take the absolute value of any negative allocation,
Ki
|Sha| = |KiSha|, (43)
and redistribute the resulting positive allocations proportionally to all risk units
KiShaAbs = ρ(X)
∑ Ki
|Sha|
i∈N
Ki
|Sha| = ρ(X)
ρ(X) − 2 ∑ KiSha
i∈N−
Ki
|Sha| (44)
From Eq. (44) we have that
{ KiShaAbs ≤ KiSha
KiShaAbs = |KiSha|
for i ∉ N−
for i ∈ N−. (45)
The resulting allocation in Eq. (44) above, which we call Shapley Absolute Proportional, respects the full allocation property, since
∑ KiShaAbs
i∈N
= ρ(X)
∑ Ki
|Sha|
i∈N
∑ Ki
|Sha|
i∈N
= ρ(X). (46)
In Sec. 4.4 we show some numerical examples of negative Shapley allocation.
2.5. Multi-Level Allocation Strategies
The allocation strategies discussed in Sec. 2 consider n distinct risk units organised in a single hierarchical level, referred to as the Single-Level allocation strategy. Clearly, financial institutions

M. Scaringi, M. Bianchetti Sharpening Shapley Allocation
Page 15 of 47
exhibit complex organizational structures spanning multiple hierarchical levels, where the risk units of the lower hierarchical level belong to the corresponding parent units of the upper level, culminating with the topmost hierarchical level of the firm. In general, the number of distinct risk units decreases (increases) moving up (down) in the hierarchy, and risk units at each layer, except the lowest ones, encompass a variable number of risk units from the level below. We refer to the allocatio-
n problem applied to such composite situation as Multi-Level allocation strategy. Since the Multi-Level allocation problem can be viewed as multiple Single-Level allocations applied to each pair of consecutive layers of the firm’s organizational structure, the following formalization considers a generic upper layer U and a lower layer L such that U = L + 1. The generalization to all levels is straightforward. Following the notation introduced in Sec. 2.2, we consider the variables XU = { X1U, ... -
, XnU
U } and XL = { X1L, ... , XnL
L } made by nU and nL distinct risk units, with nU < nL. Each risk unit of XU is composed by a collection of risk units of XL such that
XiU = ∑ XjL
j∈I(XiU)
for i = 1, ... , nU (47)
where I(XiU) denotes the set of indices of child risk units of XL corresponding to the parent risk unit
XiU. To ensure the consistency between the two hierarchy layers, we impose that the sets I(XiU) are a partition of {1, ... , nU}, namely
⋂ I(XiU) = ∅
nU
i=1
, ⋃ I(XiU) = {1, ... , nU}
nU
i=1
. (48)
We point out that from Eq. (5) and Eq. (48) we have that
∑ XiL = ∑ XiU =
nU
i=1
X
nL
i=1
. (49)
The application of the Single-Level allocation strategy to levels U and L under the risk measure ρ with a generic allocation strategy Π leads to the (independent) allocations KL = {K1L, ... , KnL
L } and KU = {K1U, ... , KnU
U }. From Eq. (49) and the assumption that Π is a fair risk allocation strategy, we have that both allocations satisfy the Single-Level full allocation property, namely
∑ KiL = ∑ KiU =
nU
i=1
ρ(X)
nL
i=1
= K (50)
where ρ(X) is the overall risk measure of the firm introduced in (6). However, in general, the full allocation property is not guaranteed for each parent XiU, namely
∑ KjL ≠ KiU
j∈I(XiU)
. (51)
Eq. (51) shows that the allocation of a parent portfolio is not the simple sum of the allocations of the child portfolios. The lack of the sub-additivity expressed in Eq. (51) can be problematic depending on business constraints driven by specific business mandates or risk management protocols. Hence, we look for suitable adjusted allocations KL or KU that overcome Eq. (51), such that

M. Scaringi, M. Bianchetti Sharpening Shapley Allocation
Page 16 of 47
∑ KjL = KiU ∀i
j∈I(XiU)
. (52)
We refer to Eq. (52) as Multi-Level full allocation property. We provide below three possible approaches.
2.5.1. Proportional Top-Down (PTD) Approach
The Proportional Top-Down approach (PTD) is based on the adjusted child allocations KL,PTD that take into account the importance of each child KjL for j ∈ I(XiU) to each corresponding parent XiU in a proportional fashion, namely
Kj
L,PTD = KjL
∑ KjL
j∈I(XiU)
KiU. (53)
Clearly, we have that
∑ Kj
L,PTD = KiU
j∈I(XiU)
, ∑ Kj
L,PTD = K
nL
j=1
. (54)
where the second equation reads from (48) and (54) as follows
∑ Kj
L,PTD = ∑ ∑ Kj
L,PTD
j∈I(XiU)
nU
i=1
nL
j=1
= ∑[
∑ KjL
j∈I(XiU)
∑ KjL
j∈I(XiU)
] KiU
nU
i=1
= ∑ KiU = K
nU
i=1
. (55)
We observe that the PTD approach requires the recursive downward application of the allocation strategy Π to each hierarchical level, and that the sub-additivity across hierarchical levels is guaranteed by a simple reproportioning, irrespective of the allocation strategy Π adopted.
2.5.2. Constrained Top-Down (CTD) Approach
The Constrained Top-Down approach (CTD), proposed by Lin et al. (2016) and applied in Li, Xing (2019) in the context of FRTB, is based on the calculation of level L allocations Kj
L,CTD for j ∈
I(XiU) adopting the same allocation strategy Π adopted to compute KiU, but constraining the scope
of the computation to XiU and its sub risk units. In such a way Eq. (55)(57) is satisfied by construction. We observe that the CTD approach requires the application of the allocation strategy Π to every hierarchical level without the introduction of the proportional technique of PTD approach. However, the restriction of the scope of the problem prevents capturing the relationships among risk units occurring in level L but belonging to different parent risk units, that could be a limitation if no s-
pecific constraints about the cross desk operativity exist. When applied to Shapley allocation strategy, CTD approach restricts the permutations of different risk units to each parent business unit. Consequently, it significantly reduces computational effort, as the sum of calculations required for each parent business unit is much lower than the total number of calculations needed if all permutations of portfolios at the same hierarchical level were considered. Finally, we note that if Π is the P-
roportional allocation strategy (Sec. 2.3.2), CTD and PTD coincide.

M. Scaringi, M. Bianchetti Sharpening Shapley Allocation
Page 17 of 47
2.5.3. Bottom-Up Approach
The Bottom-Up approach (BU) is based on the update of the allocations of KU, whose adjusted version KU,BU is computed summing up the allocations of the child level L for i = 1, ... , nU belonging
to the risk unit XiU, namely
Ki
U,BU = ∑ KjL
j∈I(XiU)
. (56)
Clearly, the definition of Eq. (56) solves the issue of Eq. (51); moreover, analogously to Eq. (55), we have that
∑ Ki
U,BU = K
nU
i=1
. (57)
We observe that the BU approach, in contrast with the PTD one, only requires the application of the allocation strategy Π to the lowest level, applying Eq. (56) recursively to all the upper ones, losing the information carried out by the allocation strategy Π.
2.6. Hybrid Allocation Strategies
A composite risk measure may include different pieces which capture different risk classes. This is the case, for example, of market risk capital charge both under Basel 2.5 and FRTB regulations, as discussed in Apps. 8.4 and 8.5, respectively. In both cases the total risk measure includes a default risk component (IRC and DRC, respectively) based on computationally expensive Monte Carlo simulations. In these cases, the risk allocation task results to be prohibitive, and one must resort to some pr-
actical workaround. The simplest approach is to use a hybrid allocation strategy based on Shapley allocation for the tractable part of the capital charge, and the Proportional allocation strategy for the intractable part. For example, in the case of Basel 2.5 capital charge (see App. 8.4), one may compute Shapley allocations KiSha for VaR+sVaR in Eq. (77) and Proportional allocation for IRC, namely
Ki = KiSha VaR+sVaR + IRC(X)
∑ IRC(Xi)
in=1
IRC(Xi), (58)
which requires only the calculation of n + 1 allocations. The same hybrid allocation strategy may be used for FRTB IMA capital charge in Eq. (79).
3. Numerical Methods
In this section we delve into various numerical aspects involved in the computation of the allocation strategies described in Sec. 2.3, with a specific focus on Shapley allocation. In particular, Sec. 3.1 provides a detailed description of the calculation of Shapley Monte Carlo estimate. Sec. 3.2 investigates the computational cost associated with the application of Shapley allocation, while Sec. 3.3 addresses how to calculate marginal contributions in the context of empirical distributions, e.g. -
in case of historical scenarios of the historical VaR.
3.1. Shapley Monte Carlo
When the computation of the analytical Shapley allocation discussed in Sec. 2.3.4 is practically unfeasible because of the high number of possible coalitions, it is possible to resort to a Monte Carlo approach, originally introduced in Mann and Shapley (1960). Following e.g. Hagan et al. (2021),

M. Scaringi, M. Bianchetti Sharpening Shapley Allocation
Page 18 of 47
Rozemberczki et al. (2022) and Mitchell et al. (2022), we rewrite the Shapley value of Eq. (20) in a more convenient way. We denote with π ∈ P(N) a generic element of the power set P(N), and with π(i) = j the position j (rank) of the i-th risk unit in the permutation π. For example, let n = 3, N = {1,2,3}, P(N) = {{1,2,3}, {1,3,2}, {2,1,3}, {2,3,1}, {3,1,2}, {3,2,1}} and consider the permutation π = {2,1,3}: we have π(1) = 2, π(2) = 1, π(3) = 3. We also introduce the inverse π−1(j) = i, which, for-
 a given position j of the i-th risk unit in the permutation π, gives the corresponding risk unit i. Hence,
we define the predecessor set Piπ of the i-th risk unit relative to the permutation π as the set of risk units ranked lower than i in π, namely
Piπ = {j ∈ N | π(j) < π(i)}. (59)
For example, if n = 3 and π = {2,1,3} we have P1π = {2}, P2π = ∅, P3π = {2,1}. It is now possible to write equivalently the Shapley allocation of Eq. (20) as the average marginal contributions of i-th risk unit to the risk of the predecessor set with respect to any possible permutation,
KiSha = 1
n! ∑ [ρ (XPiπ + Xi) − ρ (XPiπ)]
π∈P(N)
. (60)
The Shapley formula in Eq. (60) above is more symmetric than Eq. (20), but it involves n! terms, much more than 2n−1. Now we may define the Monte Carlo estimate of Eq. (60) as follows
Ki
Sha,MC = 1
NMC
∑ [ρ (XPiπ + Xi) − ρ (XPiπ)]
π∈PMC
, (61)
where PMC ⊂ P(N) is a uniform sample of NMC permutations of size n. As discussed in Mitchell et al. (2022), Ki
Sha,MC in Eq. (61) is an unbiased estimator that converges asymptotically to the Shapley
value KiSha of Eq. (20) at a rate of O(1/√NMC).
The computational effort required to calculate Eq. (61) above grows linearly with the number n of risk units. A non-optimized algorithm would require n × NMC permutation samples and 2 × n × NMC calculations of the risk measure ρ to converge at rate O(1/√NMC). Actually, the calculation can be speeded-up in a number of ways. First, a single sample of π(N) can be used to compute all the Shapley values KiSha ∀i in a single sweep. Second, non-necessary double calculations of the risk measure ρ can be a-
voided. Furthermore, Mitchell et al. (2022) propose several techniques to improve the Monte Carlo convergence rate, i.e. to efficiently sample permutations in P(N). In this work we adopt the antithetic sampling technique described by Ross (2005), considering the permutation sample π and its reverse ̂π,
π = {π(1), π(2), ... , π(n − 1), π(n)} ⟶ ̂π = {π(n), π(n − 1), ... , π(2), π(1)}. (62)
All these features are included in the Algorithm 1 below, which requires NMC⁄2 permutation samples and n × NMC⁄2 calculations of the risk measure to converge at the same rate O(1/√NMC).
Algorithm 1: Shapley Monte Carlo permutation sampling
1. Initialize5 [K1,0, ... , Kn,0] = [0, ... ,0]
2. Loop on MC scenarios m = 1, ... , NMC
2.1. Initialize ρold = ρ(∅) = 0
5 We are initializing the MC Shapley estimates of the zeroth path to zero.

M. Scaringi, M. Bianchetti Sharpening Shapley Allocation
Page 19 of 47
2.2. Sample π from Π(N) 2.3. Compute ̂π 2.4. Loop on risk units i = 1, ... , n
2.4.1.Set α = π−1(i), ̂α = ̂π−1(i),
2.4.2.Compute ρnew = 1
2 [ρ(XPαπ + Xα) + ρ (XP̂απ + X̂α)]
2.4.3.Compute Kα,m = Kα,m−1 + ρnew − ρold
2.4.4.Compute Kα2,m 2.4.5.Set ρold = ρnew
3. Compute the MC averages Ki = Ki,NMC
NMC , i = 1, ... , n
4. Compute the MC standard errors εi = √Ki,NMC
2
NMC − Ki2, i = 1, ... , n
We observe that in step 2.4.2 of Algorithm 1 we included the antithetic sampling, while in the loop 2.4 we update the whole Shapley value vector Ki,m using a single permutation sampling π. Moreover,
in step 2.4.5 we store the value of the risk measure ρold corresponding to permutations π−1(i), ̂π−1(i) and we reuse it for the computation of the following Ki+1,m thus avoiding to double the number of risk measure computations. More remarkably, Algorithm 1 above grants by construction the full allocation property: for each single permutation sample the sum of Shapley allocations is constant and equal to the overall measure, and the only quantities that change during the Monte Carlo simulation are-
 the allocation proportions of the risk units. In formulas,
ρ(X) = ∑ Ki,m
n
i=1
= K ∀m = 1, ... , NMC, (63)
where Ki,m is the Shapley value for risk unit i at path m. We provide the proof of this fact in App. 8.2, while extensive numerical tests on the Shapley Monte Carlo strategy are reported in Sec. 4.3.
3.2. Computational Cost
The computational cost of the allocation strategies discussed in Sec. 2.3 and 3.1 are summarized in the following Table 2.
Allocation strategy Number of computations of risk measure ρ Standalone n Proportional n Marginal n Shapley n × 2n−1 Shapley Monte Carlo (antithetic) n × NMC⁄2 Euler n
Table 2: computational cost of different allocation strategies in terms of computations of the risk measure ρ, as a function of number n of risk units and number NMC of Monte Carlo samples. The number of computations associated to Shapley assumes a naive implementation without any optimization.
As discussed in Sec. 2.3.4 and 3.1, the computational cost of the Shapley allocation strategy for n risk units, measured in terms of calculations of the risk measure ρ, grows exponentially as n × 2n−1 for Shapley analytical formulas and linearly as n × NMC⁄2 for Shapley Monte Carlo (which converges at rate O(1/√NMC) using NMC⁄2 permutation samples). The actual computational cost depends on the effort required to compute the risk measure ρ. We show in Table 3 below an example of

M. Scaringi, M. Bianchetti Sharpening Shapley Allocation
Page 20 of 47
computational cost in a specific setting. As expected, ratios between adjacent columns tend to adapt, for each m, to the theoretical ratio (n + 1)2n+1 n2n
⁄ = 2(n + 1)⁄n. Clearly, Shapley Monte Carlo becomes rapidly the only feasible choice, which, once adopted algorithm 1 in Sec. 3.1, scales as n × NMC⁄2.
Table 3: computational cost (seconds: green, minutes: yellow, hours: orange, days: red) of analytical Shapley allocation for Value at Risk computed as described in Sec. 4.1 as a function of number n of risk units and number m of gaussian samples. Figures obtained with Matlab 2022 on Intel Core i58365U CPU @ 1.60GHz. The largest points were estimated as n × 2n × ΔTρ(m), where ΔTρ(m) is the time required to compute ρ for a given m.
In Figure 2 we show the scaling laws of Shapley and Shapley Monte Carlo allocation strategies with the number n of risk units. We observe that Shapley Monte Carlo becomes preferable already for relatively small n ≃ 10 − 14 depending on the number of Monte Carlo scenarios.
Figure 2: scaling of computational costs for Shapley and Shapley Monte Carlo allocation strategies with the number n of risk units.

M. Scaringi, M. Bianchetti Sharpening Shapley Allocation
Page 21 of 47
3.3. Computing Marginals
Another relevant computational issue regards the calculation of marginal contributions. In concrete applications the risk measure ρ is computed using historical or Monte Carlo simulations based on a finite set of m empirical risk scenarios,
[
X1 ⟶ ̂X1 = {x1,1, ... , x1,k, ... x1,m} ⋮
Xi ⟶ ̂Xi = {xi,1, ... , xi,k, ... xi,m} ⋮
Xn ⟶ ̂Xn = {xn,1, ... , xn,k, ... xn,m}]
, ρ(XS) ⟶ ρ( ̂XS) = ρ (∑ ̂Xj
j∈S
)=ρ
[
∑ xj,1
j∈S
⋮
∑ xj,k
j∈S
⋮
∑ xj,m j∈S ]
. (64)
This setting allows to exploit the additivity property by scenario to efficiently compute marginals in Eq. (19) as
ρ(XS + Xi) ⟶ ρ( ̂XS + ̂Xi) = ρ (∑ ̂Xj
j∈S
+ ̂Xi) = ρ
[
∑ xj,1 j∈S
+ xi,1
⋮
∑ xj,k j∈S
+ xi,k
⋮
∑ xj,m j∈S
+ xi,m
]
. (65)
This approach avoids expensive recalculations of the risk measure ρ provided one has access to risk units’ values by scenario.
4. Numerical Results: Toy Cases
In this section we provide different numerical tests on the allocation strategies introduced in Sec. 2.3 with the aim to explore their characteristics and behavior. The tests are based on a simplified framework in which the risk units follow a normal distribution. In this context the most common risk measures and allocation strategies may be computed analytically, therefore they can be considered as benchmarks to test the consistency of the corresponding numerical calculations.
4.1. Monte Carlo Convergence Analysis
In this section we aim to test the convergence of the numerical simulation of the allocation strategies to their expected values. To this scope we assume 10 risk units following 10 independent standard normal distributions,
n = 10, Xi ∼ N(0,1) ∀i, X = ∑ Xi
n
i=1
∼ N(0, √n), (66)
where N(μ, σ) represents a normal distribution with mean μ and standard deviation σ. We select 10 risk units to allow both sufficiently rich statistics and analytical computation of Shapley allocation at

M. Scaringi, M. Bianchetti Sharpening Shapley Allocation
Page 22 of 47
the same time. We also select independent gaussian distributions since in this case all risk allocations must be equal regardless the specific allocation strategy and risk measure, i.e.
Ki = ρ(X)
n . (67)
Furthermore, risk measures for gaussian distributions are known analytically: for Standard Deviation, Value at Risk and Expected Shortfall, we have
• Standard Deviation: ρ(X) = Std(X), Ki = 1
10 Std(X) = √10
10 ≈ 0.316 ∀i,
• Value at Risk6: ρ(X) = −VaR(X, 1%), Ki = − 1
10 VaR(X, 1%) = − √10
10 Φ−N1(1%) ≈ 0.736 ∀i,
• Expected Shortfall: ρ(X) = ES(X, 1%), Ki = 1
10 ES(X, 1%) = 1
10
√10
1% φN[Φ−N1(1%)] ≈ 0.843 ∀i.
where ΦN and φN are the standard normal cumulative and probability distribution functions, respectively. The risk allocations Ki above may also be estimated numerically by sampling the
gaussian distributions m times according to Eq. (66) and computing the risk measure ρm(X). We have
Kim: = ρm(X)
n m→∞
→ ρ(X)
n = Ki. (68)
6 The minus sign to define a positive risk measure.

M. Scaringi, M. Bianchetti Sharpening Shapley Allocation
Page 23 of 47
We show in the following Figure 3, Figure 4 and Figure 5 the results for Standard Deviation, Value at Risk and Expected Shortfall, respectively.
Figure 3: Standard Deviation. Convergence test as in Eq. (68) for the allocation strategies of Sec. 2.3. For each plot, horizontal axes show the log-number of samples, up to 1 million; horizontal dashed black lines represent the exact allocation; the vertical left-hand axes show the estimated allocation values. Each line represents a portfolio (10 lines are plotted); the vertical right-hand axes show the standard deviation of the estimate (green areas). The bottom right chart has been simulated us-
ing eq. (28).

M. Scaringi, M. Bianchetti Sharpening Shapley Allocation
Page 24 of 47
Figure 4: Value at Risk. Convergence test as in Eq. (68). Charts explanation as in Figure 3. The bottom right chart has been simulated using eq. (30).
Figure 5: Expected Shortfall. Convergence test as in Eq. (68). Charts explanation as in Figure 3. The bottom right chart has been simulated using eq. (29).

M. Scaringi, M. Bianchetti Sharpening Shapley Allocation
Page 25 of 47
We observe that all the risk measures ρ considered above the Standalone allocations converge to the wrong value, since, as discussed in Sec. 2.3.1, this strategy does not guarantee the full allocation property. In fact, since all the risk measures ρ are non-linear functions of X, we have
ρ(X) = ρ(∑ Xi
in=1 ) ≠ ∑ ρ(Xi)
in=1 = ∑in=1 KiSta = nKSta ⟹ KSta ≠ ρ(X)
n , (69)
in contrast with Eq. (68).
Regarding the Standard Deviation risk measure in Figure 3, we observe a fast convergence to the benchmark values for every allocation strategy. The estimation error is greatly reduced already with 104 samples. The convergence is faster with respect to Value at Risk and Expected Shortfall, since they are both tail measures that typically require more samples for accurate estimation. We also observe that both general and specific Euler allocation strategies converge to the correct results, with comp-
arable convergence patterns, consistently with the discussion of Sec. 2.3.5. Regarding the Value at Risk measure in Figure 4, we firstly observe that both general and specific Euler strategies do not converge, consistently with the discussion of Sec. 2.3.5. In contrast, both first and second order approximated Euler strategies converge to the correct value, with negligible improvements of the second order approximation. The approximated Kernel Euler strategy converges to the expected value with a -
small discrepancy due to the inexact fulfill of the full allocation property, as discussed in Sec. 2.3.5, but with a slower pace with respect to the other two approximated Euler strategies. Similar convergence patterns are displayed by Shapley allocation, while proportional allocation shows the fastest convergence rate. The lowest convergence rate is displayed by the marginal allocation strategy, because of the potential numerical instabilities discussed in Sec. 2.3.3. The results for the Expected-
 Shortfall risk measure in Figure 5 are aligned to the ones for Value at Risk just discussed, but all the cases converge to their respective benchmark values. Overall, we observe that Shapley allocations always converge with a good speed, worse only than Proportional allocations. Euler does not converge in the case of VaR. We stress that Shapley allocations were computed analytically, not using Monte Carlo, since in this case the number of risk units is small enough.
4.2. Allocation strategies comparison
In this section we focus on the comparison between Proportional, Shapley and Euler allocation strategies discussed in Sec. 2.3.2, 2.3.4, and 2.3.5, respectively. The reason for this test is to highlight some peculiar features of the Shapley and Euler allocation strategies to be compared with Proportional allocation, that is typically considered as a benchmark because of its simplicity and diffusion. To this scope we assume 5 risk units following a 5-dimensional multivariate normal distribution X,
n = 5, X ∼ N(0, C), X = ∑ Xi
n
i=1
∼ N(0, C), (70)
where C ∈ R5×5 is the covariance matrix7, and ρ(X) = VaR(X, 1%). We select only 5 risk units since they are enough to highlight the distinct properties of Shapley and Euler allocation, for which we need multivariate (correlated) distributions. Gaussian distributions and Value at Risk measure are selected for simplicity but are not essential to our scope. Since the Proportional allocation strategy, as discussed in Sec. 2.3.2, does not consider correlations between risk units, the Proportional alloc-
ations depend only on variances. Since all the variances are equal to 1, we conclude that, in this case, KiPro = ρ(X)⁄n ∀ i, and any difference between Proportional, Shapley and Euler
7 Being all the variances equal to one, the covariance matrix is equal to the correlation matrix.

M. Scaringi, M. Bianchetti Sharpening Shapley Allocation
Page 26 of 47
allocations is due only to correlations. The VaR figures are computed numerically using m = 106 samples from the multivariate gaussian distribution, then Proportional, Euler and Shapley allocations are computed. We provide in Figure 6 the results of this test for different covariance matrices, which represents different relationships between risk units.
Figure 6: Comparison between Proportional, Shapley and Euler allocation strategies for five risk units with multivariate Gaussian distribution with different covariance matrices and ρ(X) = VaR(X, 1%) = 5.78, 3,75,5.51 for top, middle and bottom charts, respectively.
In the first case (Figure 6, top), all the correlations have the same value (+30%) but risk unit #2, which is negatively correlated with all the others (−30%). Hence, risk unit #2 contributes to the overall reduction of the Value at Risk, since it partially compensates the dynamics of the other risk units (i.e.
X1 X2 X3 X4 X5
X 1 1 -0.3 0.3 0.3 0.3
X 2 -0.3 1 -0.3 -0.3 -0.3
X 3 0.3 -0.3 1 0.3 0.3
X 4 0.3 -0.3 0.3 1 0.3
X 5 0.3 -0.3 0.3 0.3 1 -0.2
0.0
0.2
0.4
0.6
0.8
1.0
1.2
1.4
1.6
Proportional Shapley Euler VaR s.o. Euler VaR NW
X1 X2 X3 X4 X5
X 1 1 -0.3 0.3 -0.3 0.3
X 2 -0.3 1 -0.3 -0.3 -0.3
X 3 0.3 -0.3 1 -0.3 0.3
X 4 -0.3 -0.3 -0.3 1 -0.3
X 5 0.3 -0.3 0.3 -0.3 1 -0.2
0.0
0.2
0.4
0.6
0.8
1.0
1.2
1.4
1.6
Proportional Shapley Euler VaR s.o. Euler VaR NW
X1 X2 X3 X4 X5
X 1 1 -0.1 0.2 0.3 0.3
X 2 -0.1 1 -0.1 -0.5 -0.1
X 3 0.2 -0.1 1 0.5 -0.3
X 4 0.3 -0.5 0.5 1 0.1
X 5 0.3 -0.1 -0.3 0.1 1 -0.2
0.0
0.2
0.4
0.6
0.8
1.0
1.2
1.4
1.6
1.8
Proportional Shapley Euler VaR s.o. Euler VaR NW

M. Scaringi, M. Bianchetti Sharpening Shapley Allocation
Page 27 of 47
#2 hedges the risk). This behaviour is correctly captured by the Shapley strategy, which strongly reduces the risk allocated to risk unit #2 (−73.4%) and equally increases all the others (≈ +18.4%) since they have equal correlations) with respect to Proportional allocations. In the second case (Figure 6, middle) we add a second risk unit #4 with the same negative correlations (−30%), and leave everything else unchanged, thus increasing the hedging effect. Consistently, the Shapley strategy reduces-
 the risk allocated to both risk units #2 and #4 (≈ −71.4%) and increases all the others (≈ +47.7%) with respect to the Proportional allocations. Finally, in the third case (Figure 6, bottom) we assign a random correlation structure to each risk unit in the range [−30%; 30%]. Now Shapley allocations assume distinct values, however risk unit #2 still receives the lowest allocation, being the only one with negative correlations with respect to all the others. For what concerns the Euler strategy, we-
 apply two versions, namely the second order approximation for Value at Risk and the Nadaraya-Watson Kernel method (see Sec. 2.3.5). We observe that the two Euler approaches display a perfect match for all the cases taken into consideration in Figure 6, with a strong numerical consistency. Furthermore, the overall pattern of portfolio allocations aligns closely with that observed under the Shapley-based strategy, particularly in the third scenario (Figure 6, bottom). However, in the first two scen-
arios, both Euler approaches attribute small negative allocations to portfolios characterized by negative correlations. This contrasts with the Shapley strategy, which assigns small but strictly positive contributions to the same portfolios. These results suggest that the Euler method is more susceptible to generating negative allocations in the presence of diversification effects, highlighting a key methodological difference between the two approaches and a potential issue for Euler strategy, for-
 which we refer to Sec. 2.4.
4.3. Shapley Monte Carlo
In this section we focus on the details of the Shapley Monte Carlo simulation, which, as discussed in Sec. 3.1, is the only viable solution even for a moderate number of risk units. To this scope we assume the same setting adopted in Sec. 4.1, Eq. (66), with n = 20 and ρ(X) = VaR(X, 1%). In this case we have 219 = 524,288 coalitions in the exact Shapley formula, Eq. (20), and 19! = 1.2 × 1017 permutations in the more symmetric form of Eq. (60). Hence, we resort to Shapley Monte Carlo allocation of-
 Eq. (61) using Algorithm 1 described in Sec. 3.1.
Figure 7: Difference (blue line, r.h.s. axis) between the sum of Shapley Monte Carlo values (dashed red line, l.h.s. axis) and the actual overall measure (black constant line, l.h.s. axis). The grey area (l.h.s. axis) is the Monte Carlo error of the sum of Shapley Monte Carlo values.

M. Scaringi, M. Bianchetti Sharpening Shapley Allocation
Page 28 of 47
First of all, we check empirically that Algorithm 1 respects the full allocation property of Eq. (63) for each Monte Carlo sample, as mathematically proved in App. 8.3. In fact, Figure 7 shows that, irrespective of the number of samples, the sum of the Shapley Monte Carlo allocations Ki ≈ 0.520 is
always equal to the total risk measure ρ(X, 1%) = 10.404. Finally, we show in Figure 8 the Monte Carlo convergence results. Similarly to Sec. 4.1, the distribution of the portfolio being known in advance, we can compare the estimates with the true value of the allocation. Since each portfolio shares the same distribution, we expect that asymptotically the allocation of each portfolio is the same. This is what we observe, and a good convergence level is obtained already with 5,000 antithetical samp-
les. However, we stress that the number of MC samples needed for an acceptable convergence depends on the risk measure.
Figure 8: Left hand side chart: Monte Carlo Shapley value estimates for each portfolio, together with the expected theoretical value (horizontal black dashed line) and the whisker of the Monte Carlo errors, corresponding to 5,000 antithetic samples. Right hand side chart: convergence pattern of the Monte Carlo estimates for portfolio #13 together with Monte Carlo errors (1 and 3 stdev), with respect to the theoretical value (black dashed line).
4.4. Negative Shapley Allocation
We discussed in Sec. 2.4 that negative Shapley values are not excluded a priori. We show in Figure 9 two typical simplified situations in which negative values may occur, assuming 5 risk units following a 5-dimensional multivariate normal distribution and ρ = VaR(1%). The framework is the same adopted in Sec. 4.2, Eq. (70). In the top row of Figure 9 we present a situation in which one portfolio (portfolio 1) displays high negative correlation with the other ones, overall contributing to the reduc-
tion of the risk measure in the coalitions. This results in a negative Shapley value for portfolio 1. The magnitude of such Shapley value is the lowest one, consistently with the observations of Sec. Sec. 2.4. The second case depicted in the second row of Figure 9 outlines the case in which the correlation structure is almost homogeneous through portfolios, but the samples of portfolio 1 are multiplied by a scaling factor equal to 0.65. In this way we lower the relevance of portfolio 1 then comput-
ing the risk measure, simulating the common situation in which one or more portfolios of the firm are negligible in terms of overall fair value and hence in terms of contribution to the Value at Risk. The resulting Shapley value is negligible and negative. The negative sign is due to the fact that, because of the minor relevance of the portfolio, each component of the Shapley value sum of Eq. (17) has the form ρ(XS) − ρ(XS\{1}) ≈ 0 for almost every S, leading to KiSha ≳ 0 or (as in the presented
example) KiSha ≲ 0. The proportional allocation strategy, conversely, does not exhibit any negative allocation, as expected.

M. Scaringi, M. Bianchetti Sharpening Shapley Allocation
Page 29 of 47
Figure 9: Comparison between Proportional and Shapley allocation strategies for five risk units with multivariate Gaussian distribution with different covariance matrices leading to a negative Shapley value for portfolio 1. For the second case, the samples of portfolio 1 are multiplied by a scaling factor equal to 0.65. ρ(X) = VaR(X, 1%) = 4.3, 3.9 for top and bottom charts, respectively.
Finally, we show in Figure 10 the results of the application of the two alternative workarounds to remove the negative Shapley values from the affected portfolios, namely the Shapley Maximum Proportional (top right chart) and Shapley Absolute Proportional (bottom right chart) described in Sec. 2.4. We applied both to the same portfolio shown in the top left chart of Figure 9, whose covariance matrix is also reported in Figure 10. For both the approaches, the reproportioning leads to a reduction of-
 the Shapley values of all the portfolios. In Shapley Maximum Proportional the former negative Shapley value (corresponding to portfolio 1) is set to zero, while in Shapley Absolute Proportional it becomes positive, with a magnitude which is comparable with the former magnitude. The choice between the two approaches should be driven by the specific nature of the problem, in particular by the risk measure involved.
X1 X2 X3 X4 X5
X 1 1 -0.5 -0.1 -0.5 -0.8
X 2 -0.5 1 0.2 0.3 0.3
X 3 -0.1 0.2 1 0.5 -0.3
X 4 -0.5 0.3 0.5 1 0.1
X 5 -0.8 0.3 -0.3 0.1 1
-0.20
0.30
0.80
1.30
1.80
Proportional Shapley
X1 X2 X3 X4 X5
X1 X2 X3 X4 X5
X 1 1 -0.3 0.3 -0.3 0.3
X 2 -0.3 1 -0.3 -0.3 -0.3
X 3 0.3 -0.3 1 -0.3 0.3
X 4 -0.3 -0.3 -0.3 1 -0.3
X 5 0.3 -0.3 0.3 -0.3 1
-0.01 -0.20
0.30
0.80
1.30
Proportional Shapley
X1 X2 X3 X4 X5

M. Scaringi, M. Bianchetti Sharpening Shapley Allocation
Page 30 of 47
Figure 10: Comparison between Proportional and Shapley allocation strategies for five risk units with multivariate Gaussian distribution with the covariance matrix represented in the first column. Second column shows the results of the application of Shapley Max Reproportioned and Shapley Abs Reproportioned, respectively. ρ(X) = VaR(X, 1%) = 4.3.
5. Numerical Results: Realistic Cases
In this section we provide the application of Shapley and Proportional allocation strategies to realistic trading portfolios. The first application, in Sec. 5.1, considers the value at risk measure, adopted under the Basel 2.5 market risk capital framework (CRR1, 2013, and CRR2, 2019). The second application, in Sec. 5.2, considers the equity component of the sensitivity-based (SBA) risk measure adopted under the Simplified Approach allowed by the Fundamental Review of Trading Book (FRTB) market r-
isk capital framework (CRR3, 2024).
5.1. Market Risk Capital Allocation Under Basel 2.5
Value at Risk (VaR) is a widely adopted metric for assessing the potential loss of a portfolio. It serves various purposes, including managerial decision-making, regulatory compliance, and financial reporting. In particular, the regulatory market risk capital charge under the Basel 2.5 market risk framework (CRR1, 2013, and CRR2, 2019) is based on the calculation of Value at Risk (VaR) under the current market scenario (last 250 historical risk factors’ observations), of Stressed Value at Risk (sV-
aR) under a stressed market scenario (the worst period including 250 historical risk factors’ observations for the current portfolio), and of the Incremental Risk Charge (IRC), capturing losses arising from defaults and credit migrations of entities within the portfolio. Although the Basel 2.5 framework is replaced by the FRTB framework since January 2027, the VaR measure remains however broadly adopted in the financial institutions for a wide range of applications and managerial measurement of th-
e portfolio riskiness. The full Basel 2.5 capital charge formula is reported in Sec. 8.4. In this section we consider the following risk measure to be allocated in each of the underlying portfolios is
ρ(X, X′) = −[VaR(X, 1%) + sVaR(X′, 1%)], (71)
where we excluded the IRC component because of the significant computational challenges posed by the Monte Carlo simulations required for IRC allocation. A potential workaround to include the IRC is described in Sec. 2.6. We apply the allocation strategies introduced in Sec. 2.3 to a realistic trading book encompassing hundreds of thousands of financial instruments across all asset classes and
X1 X2 X3 X4 X5
X 1 1 -0.5 -0.1 -0.5 -0.8
X 2 -0.5 1 0.2 0.3 0.3
X 3 -0.1 0.2 1 0.5 -0.3
X 4 -0.5 0.3 0.5 1 0.1
X 5 -0.8 0.3 -0.3 0.1 1
-0.20
0.30
0.80
1.30
1.80
Proportional Shapley Shapley Max Proportional
Shapley Abs Proportional
X1 X2 X3 X4 X5

M. Scaringi, M. Bianchetti Sharpening Shapley Allocation
Page 31 of 47
organized into three hierarchical levels of trading desks. Specifically, we compare the following allocation strategies: • Proportional allocation strategy of Sec. 2.3.2; • Shapley allocation strategy, in its original version of Sec. 2.3.4, handling the negative allocation values as described in Sec. 2.4 and taking into account the different organizational layers as illustrated in Sec. 2.5 (Multi-level Shapley). We point out that the lowest level comprises 24 trading desks, necessitating the use o-
f a Monte Carlo approach to compute the Shapley value. The intermediate and highest levels comprise 12 and 4 trading desks respectively, allowing an exact computation of the Shapley value. • Euler allocation strategy (Sec. 2.3.5) for value at risk, specifically the second order approximation and the one based on Nadaraya-Watson Kernel. In App. 8.4 we provide the details of the trading book hierarchy, the standalone VaR and sVaR measures for each trading desk (normalized to total ρ(X) in Eq. (71)),-
 and the corresponding historical correlation matrices that underpin the results of the allocations. In the following we present the key outcomes of the allocation strategies to the three hierarchical levels reported in App. 8.4. In the top panel of Figure 11 we provide the outcomes for the first hierarchical level (4 trading desks). The results are determined by two key factors: the standalone portfolio risk, which is captured by each allocation, and historical correlations, which are accounted e-
xclusively by the Shapley and Euler allocations. These factors are detailed in App. 8.4, Table 6, where we observe that PTF_4 has the largest standalone risk measure driven by sVaR. As a result, the Proportional allocation assigns the largest share of the overall measure to this portfolio. However, the correlation structure reveals that PTF_4 exhibits the largest negative correlations pattern for sVaR with the most relevant portfolios (PTF_1 and PTF_3) hedging most of the 8 possible coalitions and-
 reducing Shapley with respect to Proportional allocation. For what concerns the Absolute Shapley allocation results, they differ from plain Shapley allocation because of PTF_2, which displays negligible negative allocation figure. Hence, the adjustment introduced by the Absolute Shapley technique is very small. In the top panel of Figure 11 we also compare the Shapley allocation with the Bottom-up Shapley approach, obtained starting from the Shapley allocation of the second layer as discussed in -
Sec. 2.5. Finally, we include the allocation results coming from the Euler-based allocation principle, tailored for allocation problems in which the risk measure is the value at risk, namely the one based on a secondorder linear approximation of the expected value, and one Nadaraya-Watson Kernel (see Sec. 2.3.5). Both Euler-based allocations differ significantly from other allocation principles and do not closely approximate the theoretical Euler method. We provide in the middle and bottom panels -
of Figure 11 the results for the second and third hierarchical levels, consisting in 12 and 48 trading desks, respectively (see App. 8.4). We still adopted an exact Shapley approach for the second level, since the number of portfolios is manageable. Conversely, for the third level we had to adopt the Monte Carlo Shapley estimate8. We observe overall the same behavior already described for the first layer, but now reflected in the finer portfolio structure, with a few peculiarities worth pointing o-
ut. First, lower-level portfolios allow less aggregation and diversification and therefore may lead to more negative allocations, that determine more differences between Shapley and Shapley Absolute allocations. Regarding negative allocations, we observe that the signs of allocation amounts are consistent between Shapley and Euler based allocations, as expected. We finally point out that for lower organizational levels we introduced the Shapley Proportional Top Down (PTD) allocation discussed in S-
ec. 2.5.1.
8 We highlight that we applied the Absolute Shapley adjustment after the Monte Carlo simulation in which the plain Shapley technique is used.

M. Scaringi, M. Bianchetti Sharpening Shapley Allocation
Page 32 of 47
Figure 11: Allocations of VaR+sVaR figures, normalized to total VaR+sVaR ρ(X) in Eq. (71), for the first (top panel), second (mid panel) and third (bottom panel) hierarchical levels (see App. 8.4). Monte Carlo Shapley allocations in the bottom panel are computed using 5,000 pairs of antithetical MC scenarios. The MC errors (three standard deviations) for Shapley allocations are not visible thanks to the good convergence level.

M. Scaringi, M. Bianchetti Sharpening Shapley Allocation
Page 33 of 47
In Figure 12 we provide a breakdown of the data presented in Figure 11 for the first hierarchical level. Specifically, we show the 8 components of the Shapley allocation formula of Eq. (17) for each portfolio, corresponding to the 8 possible coalitions, along with the relative cumulative patterns. Among the 8 coalitions, the Marginal and Standalone terms (see discussion in Sec. 2.3.4) emerge as the most significant contributors to the Shapley allocation. Although PTF_4 is dominant in terms of the -
standalone figures, its marginal contribution is negligible. This is due to the netting between VaR and sVaR due to the specific correlation structure of these portfolios discussed above.
Figure 12: Breakdown of the Shapley allocations represented in Figure 11 (top panel). Solid line (right hand axis): cumulative sums of the components of Shapley allocations. The final points correspond to the Shapley allocations shown Figure 11.Vertical bars (left hand axis): Shapley allocations for each coalition (PTF_2 is not always visible since its contribution is very small). The labels of the first six coalitions is arbitrary. All the amounts are normalized to total VaR+sVaR ρ(X) in Eq. (71)-
.
In Figure 13 we provide a drill-down for the Shapley allocation figures of the four portfolios leading to the largest contribution at the 2nd portfolio level according to Figure 11 (mid panel).

M. Scaringi, M. Bianchetti Sharpening Shapley Allocation
Page 34 of 47
Figure 13: Breakdown of the Shapley values of the four portfolios leading to the largest contribution at the 2nd portfolio level according to Figure 11 (mid panel). The 2048 possible Shapley coalitions are displayed along the horizontal axis, ordered by the corresponding Shapley amounts from the largest negative to the largest positive. Red and cyan bars (left hand axis): log10 of the absolute values of each Shapley value. Originally negative amounts are reported in red, positive ones in cyan. The-
 logarithmic scale highlights differences across several orders of magnitude. Solid red line (right hand axis): cumulative sum of Shapley allocation components, normalized to total VaR+sVaR ρ(X) in Eq. (71). The sharp increases observed in the cumulative curve are driven by a small number of dominant Shapley values, typically associated with Proportional and Marginal coalitions (see discussion in Sec. 2.3.4).
This convergence of Shapley Monte Carlo is demonstrated in Figure 14 for the four portfolios leading to the largest contribution at the 3rd portfolio level according to Figure 11 (bottom panel).

M. Scaringi, M. Bianchetti Sharpening Shapley Allocation
Page 35 of 47
Figure 14: Convergence of the Shapley Monte Carlo estimates normalized to total VaR+sVaR ρ(X) in Eq. (71).
5.2. Market Risk Capital Allocation Under FRTB
The Fundamental Review of the Trading Book (CRR3 (2024)) introduces the Standard Approach (SA), based on prescribed rules, and the Internal Model Approach (IMA), based on more sophisticated internal risk models, both at trading desk level. While the IMA is typically adopted by a few large financial institutions, the SA is mandatory for all financial institutions. We refer to App. 8.5 for details on the FRTB SA capital charge formula. In this section we deal with the application of the Shapley allo-
cation strategy to a specific component of the SA risk measure, i.e. the Sensitivity Based Approach (SBA). For the sake of simplicity, we focus on the delta equity risk, since the application of the Shapley allocation to the other risk classes is similar. The Delta ER SBA measure is given by
ρ(X) = SBADelta, EQ(X) = √∑ Kb2(X) +
13
b=1
2 ∑ ∑ γb,c Sb(X)Sc
13
c=b+1
(X)
13
b=1
, (72)
where we highlighted the dependence of the risk measure on the portfolio X, and all terms are explained in App. 8.5. We apply the Shapley allocation strategy to the same trading book considered in the previous Sec. 5.1, but restricted to the equity positions organized in two hierarchical levels, as depicted in App. 8.5. These equity portfolios contain a broad range of equity financial instruments, stemming from linear (stocks, Futures) and non-linear instruments (options), including exotics. Their-
 delta sensitivities are reported in Figure 16 in App. 8.5, where we notice that PTF_3 hedges the other portfolios and is the most relevant one in terms of absolute equity delta since its delta exposures are higher but partially offset each other. This portfolio risk allocation is illustrated in Figure 15, displaying the biggest attribution to PTF_3 1for the first hierarchical level (top panel), mostly driven by the underlying PTF_3_3 (bottom panel). Again, we observe that, at both levels, Shapley-
 reduces the dominant allocations, redistributing part of the capital charge to the other trading desks. We also observe that, similarly to what observed in the previous section, Proportional Top-Down and Bottom-Up Shapley allocations are aligned with Shapley, thanks to the absence of negative allocations.

M. Scaringi, M. Bianchetti Sharpening Shapley Allocation
Page 36 of 47
Figure 15: Allocations for the first (left hand panel) and second (right hand panel) portfolio hierarchical levels (see Table 9). Shapley and Shapley Absolute coincide for 1st level and almost coincide for 2nd level (PTF_0_2 is allocated -0.1%). All the amounts are normalized to total SBADelta, EQ ρ(X) in Eq. (72).
6. Conclusions
This study provides a systematic investigation of risk allocation strategies, with a focus on theoretical foundations and practical implications in large financial institutions, characterized by a multi-level organisational structure including many business units, and on regulatory market risk measures lacking desirable theoretical properties (e.g. historical VaR). Our main finding is that the Shapley allocation strategy, contrary to the common wisdom, offers a viable compromise between simplicity-
, mathematical properties, risk representation and computational cost, provided that, for increasing number of business units, one switches from the analytical allocation to the Monte Carlo allocation. Two additional contributions enhance the practical relevance of the Shapley framework. First, we introduce robust procedures to handle negative risk allocations without compromising the full allocation property. Second, we design a multi-level allocation strategy consistent with hierarchical organiz-
ational structures typical of financial institutions. Both developments address longstanding challenges in capital attribution. Our results have been demonstrated using a specific testing framework, including both simplified settings and realistic financial portfolios under Basel 2.5 and Fundamental Review of the Trading Book (FRTB) regulatory frameworks. These contributions represent a step forward compared to the most recent practice described in Li et al (2016), Schulze (2018), and Li and Xing -
(2019).

M. Scaringi, M. Bianchetti Sharpening Shapley Allocation
Page 37 of 47
While our empirical applications focus on market risk, our methodological framework is fully general and applicable, in principle, to any financial context where a global risk measure must be decomposed into the contributions of individual components, including - among others - valuation risk, liquidity risk, credit risk, and counterparty credit risk.
7. References
[1] Basel Committee on Banking Supervision, https://www.bis.org/basel_framework/ [2] (CRR3) Regulation (EU) 2024/1623 of the European Parliament and of the Council of 31 May 2024 amending Regulation (EU) No 575/2013 as regards requirements for credit risk, credit valuation adjustment risk, operational risk, market risk and the output floor, https://eurlex.europa.eu/eli/reg/2024/1623/oj [3] (CRR2) Regulation (EU) 2019/876 of the European Parliament and of the Council of 20 May 2019 amending Regulat-
ion (EU) No 575/2013 as regards the leverage ratio, the net stable funding ratio, requirements for own funds and eligible liabilities, counterparty credit risk, market risk, exposures to central counterparties, exposures to collective investment undertakings, large exposures, reporting and disclosure requirements, and Regulation (EU) No 648/2012, https://eur-lex.europa.eu/eli/reg/2019/876/oj [4] (CRR1) Regulation (EU) No 575/2013 of the European Parliament and of the Council of 26 June 2013 on pru-
dential requirements for credit institutions and investment firms and amending Regulation (EU) No 648/2012, https://eur-lex.europa.eu/eli/reg/2013/575/oj [5] Aiolfi, R., Moreni, N., Bianchetti, M. and Scaringi, M., Learning Bermudans. Computational Economics, 1 Feb. 2024, https://doi.org/10.1007/s10614-023-10517-w, SSRN https://dx.doi.org/10.2139/ssrn.3837499, arXiv https://doi.org/10.48550/arXiv.2105.00655 [6] Balog, D. et al, Properties and comparison of risk capital allocation methods, European-
 Journal of Operational Research, Volume 259, Issue 2, 2017, pages 614-625, https://doi.org/10.1016/j.ejor.2016.10.052. [7] Bianchetti, M. and Cherubini, U., Prudent Valuation Guidelines and Sound Practices (March 1, 2016), SSRN http://dx.doi.org/10.2139/ssrn.2790629 [8] Brigo, D., Huang, X., Pallavicini, A. and de Ocariz Borde, H. S., Interpretability in deep learning for finance: a case study for the Heston model, 19 April 2021, arXiv https://doi.org/10.48550/arXiv.2104.09476 [9] Brigo, D., Mori-
ni, M., and Pallavicini, A., Counterparty Credit Risk, Collateral and Funding: With Pricing Cases For All Asset Classes, John Wiley and Sons, 15 Mar. 2013. DOI:10.1002/9781118818589, [10] Centrone F. and Rosazza Gianin, E., Capital allocation à la Aumann–Shapley for nondifferentiable risk measures, European Journal of Operational Research, Volume 267, Issue 2, 2018, pages 667-675, https://doi.org/10.1016/j.ejor.2017.11.051, SSRN https://dx.doi.org/10.2139/ssrn.2944661 [11] Colini-Baldeschi, R., Sc-
arsini, M. and Vaccari, S. Variance Allocation and Shapley Value. Methodology and Computing in Applied Probability 20, 919–933 (2018) https://doi.org/10.1007/s11009-016-9540-5, arXiv https://doi.org/10.48550/arXiv.1606.09424 [12] Denault, M., Coherent Allocation of Risk Capital, Journal of Risk 4, 1-34, January 2001. https://doi.org/10.21314/JOR.2001.053 [13] Epperlein, E. and Smillie, A., Cracking VAR with kernels, risk.net, August 2006. https://www.risk.net/risk-management/1509730/cracking-var-k-
ernels [14] Gregory, J., The xVA Challenge: Counterparty Risk, Funding, Collateral, Capital and Initial Margin, Wiley; 4th edition, 9 Apr. 2020, DOI:10.1002/9781119508991 [15] Hagan P. S., Lesniewski, A., Skoufis, G. E., and Woodward, D., Portfolio risk allocation through Shapley value, International Journal of Financial Engineering (2021), https://doi.org/10.1142/S2424786323500044, arXiv https://doi.org/10.48550/arXiv.2103.05453 [16] Holden, L., Some properties of Euler capital allocation, 1 May -
2024, arXiv https://doi.org/10.48550/arXiv.2405.00606

M. Scaringi, M. Bianchetti Sharpening Shapley Allocation
Page 38 of 47
[17] Li, Y., Naldi, M., Nisen, J. and Shi, Y., Organising the Allocation, risk.net, Oct. 2016, https://www.risk.net/risk-management/2472436/organising-allocation [18] Li, L. and Xing, H., Capital allocation under the Fundamental Review of Trading Book, 6 Jun. 2019, Risk, arXiv, https://doi.org/10.48550/arXiv.1801.07358. [19] Li, M., Sun, H., Huang, Y. et al. Shapley value: from cooperative game to explainable artificial intelligence. Autonomous Intelligent Systems 4, 2 (2024). https://doi.org/10.1-
007/s43684-02300060-8 [20] Liu, J., Absolute Shapley Value, 23 March 2020, arXiv, https://doi.org/10.48550/arXiv.2003.10076. [21] Lugoboni, A., Picchiotti, N. and Spuntarelli, A. Risk allocation with Shapley value in the risk aggregation framework, Risk Management Magazine, vol. 16, issue 2, May.Aug. 2021, https://www.aifirm.it/newsletter-aifirm/indice-2021/vol-16-issue-2/ [22] Mann, I., and Shapley, L.S., Values of large games, IV: Evaluating the electoral college by Monte Carlo Techniques, Rand -
Corporation (1960), https://www.rand.org/pubs/research_memoranda/RM2651.html. [23] Mastrogiacomo, E., Rosazza Gianin, E., Dynamic capital allocation rules via BSDEs: an axiomatic approach, Annals of Operations Research 336:749–772 (2024), https://doi.org/10.1007/s10479-022-04917-8 [24] Mitchell, R., Cooper, J., Frank, E. and Holmes, G., Sampling Permutations for Shapley Value Estimation, The Journal of Machine Learning Research, Volume 23, Issue 1, Pages 2082 2127, 1 Jan. 2022, https://dl.acm.org/-
doi/abs/10.5555/3586589.3586632 [25] Moehle, N., Boyd, S., and Ang, A., Portfolio performance attribution via Shapley value. J. Invest. Manage. 20(3), 33–52 (2022), arXiv https://doi.org/10.48550/arXiv.2102.05799 [26] Morone, M., Cornaglia, A., Mignola, G., Economic Capital Assessment Via Copulas: Aggregation and Allocation on Different Risk Types, Default Risk, 2 Mar. 2007, http://www.defaultrisk.com/pp_model160.htm. [27] Mussard, S. and Terraza, V. The Shapley decomposition for portfolio risk, A-
pplied Economics Letters, 15:9, 713-715 (2008), https://doi.org/10.1080/13504850600748968 [28] Ortmann, K.M., The link between the Shapley value and the beta factor. Decisions in Economics and Finance 39, 311–325 (2016). https://doi.org/10.1007/s10203-016-0178-0 [29] Ross, S.M. Extending simulation uses of antithetic variables: partially monotone functions, random permutations, and random subsets. Mathematical Methods of Operations Research 62, 351–356 (2005). https://doi.org/10.1007/s00186-005-00-
38-0 [30] Roth, A., The Shapley value: essays in honor of Lloyd S. Shapley, Cambridge University Press, 1988. https://doi.org/10.1017/CBO9780511528446 [31] Rozemberczki, B. et al., The Shapley value in machine learning, 2022, arXiv https://doi.org/10.48550/arXiv.2202.05594 [32] Schulze, R., Capital Allocation under the FRTB regime via marginal measures, 15 Oct. 2018, SSRN https://dx.doi.org/10.2139/ssrn.3265320. [33] Shalit, H., Weighted Shapley Values of Efficient Portfolios’, Risk and Decision A-
nalysis, vol. 9, no. 2-4, pp. 31-38, 2023, https://doi.org/10.3233/RDA-231507, SSRN http://dx.doi.org/10.2139/ssrn.4176877 [34] Shapley, L. A Value for n-Person Games. In: Kuhn, H. and Tucker, A., Eds., Contributions to the Theory of Games II, Princeton University Press, Princeton, 307-317, 1953. https://doi.org/10.1515/9781400881970-018 [35] Tasche, D. Capital Allocation to Business Units and Sub-Portfolios: The Euler Principle. In: Resti, A., Ed., Pillar II in the New Basel Accord: The Challenge-
 of Economic Capital, Risk Books, London, 423-453, 2008, arXiv https://doi.org/10.48550/arXiv.0708.2542 [36] Tasche, D. and Tibiletti, L., Approximations for the Value-at-Risk Approach to Risk-Return Analysis (January 30, 2001). Available at SSRN http://dx.doi.org/10.2139/ssrn.269733

M. Scaringi, M. Bianchetti Sharpening Shapley Allocation
Page 39 of 47
8. Appendices
8.1. Risk Measures
We report below a (non-exhaustive) list of non-additive risk measures which are typically encountered in financial risk management.
• Valuation risk measures: Valuation Adjustments (a.k.a. XVAs), taking into account counterparty default risk (CVA/DVA), variation margin and initial margin funding risk (FVA/MVA), capital risk (KVA) (see e.g. Gregory (2020) and Brigo et al. (2013)); Additional Valuation Adjustments (AVAs) taking into account valuation uncertainty of fair valued positions according to the European Capital Requirements Regulation (CRR1 (2013) and CRR2 (2019), see e.g. Bianchetti and Cherubini (2016)); P&L attributi-
on for a portfolio dependent on a set of possibly non-orthogonal risk factors (see e.g. Hagan et al. ); etc.
• Market risk measures: Value at Risk (VaR), Stressed Value at Risk (sVaR), Incremental Risk Charge (IRC) (CRR1 (2013) and CRR2 (2019)), and their alter-egos under the Fundamental Review of the Trading Book (FRTB): Expected Shortfall (ES), Default Risk Charge (DRC), Sensitivity-Based Approach (SBA) (CRR3 (2024)).
• Liquidity risk measures: Liquidity at Risk (LaR), Liquidity Coverage Ratio (LCR), Net Stable Funding Ratio (NSFR), etc. (CRR1 (2013) and CRR2 (2019)).
• Credit risk measures: Exposure at Default (EAD), credit default risk, concentration risk, country risk, etc. (CRR1 (2013) and CRR2 (2019)).
• Counterparty credit risk measures: Expected Positive Exposure (EPE), Effective EPE (EEPE), Potential Future Exposure (PFE), Effective PFE (EPFE), etc. (CRR1 (2013) and CRR2 (2019)).
8.2. Proof of Full Allocation Property for Shapley Monte Carlo
We proof that the full allocation property is satisfied for each Monte Carlo sample in Shapley Monte Carlo allocation discussed in Sec. 3.1., i.e.
∑ Ki,m
n
i=1
= K = ρ(X), ∀m ∈ [1, NMC] ⊂ N, 1 ≤ m ≤ NMC. (73)
As shown in Algorithm 1, step 2.4.3, for each MC sample π each component of the sum of Eq. (73) is made of the sum of the old and the new risk measure computed on a different coalition, as shown in the following Table 4. For simplicity, we do not consider the antithetic variable of Algorithm 1: the proof still applies, and the generalization is straightforward.
i ρold ρnew
1 0 ρ (XPαπ1 + X1)
2 ρ (XPαπ1 + X1) ρ (XPαπ2 + X2)
...

M. Scaringi, M. Bianchetti Sharpening Shapley Allocation
Page 40 of 47
n − 1 ρ (XPαn−2
π + Xn−2) ρ (XPαn−1
π + Xn−1)
n ρ (XPαn−1
π + Xn−1) ρ (XPαπn + Xn)
Table 4: new and old components for each risk unit involved in the sum of Eq. (73) of Algorithm 1. For each row, we introduced the following αi = π−1(i).
From Table 4 we observe that the new component of i-th risk unit is also the old one of i+1th risk unit. Hence, the sum in Eq. (73) is telescopic, and therefore all the terms but the first (which is null) and the last one cancel out,
∑ Ki,m
n
i=1
= ρ (XPαπn + Xn). (74)
Pαn
π = {j ∈ N | π(j) < π(π−1(n))} = {j ∈ N | π(j) < n} = {1,2, ... , n − 1} = N/{n} (75)
and therefore
ρ (XPπ−1(n)
π + Xn) = ρ(XN/{n} + Xn) = ρ(XN) = K. (76)
From Eq. (74) and Eq. (76) we obtain Eq. (73).
8.3. Illustrative Example of Algorithm 1
We provide in the following an illustrative example of Algorithm 1. Let’s assume that N = {1,2,3,4,5}, and hence n = 5. We initialise [K1,0, ... , Kn,0] = [0, ... ,0] (step 1) and we show below the steps for the first MC path of the loop of step 2, namely m = 1. We set ρold = 0 (step 2.1) and we assume that the permutation sample is (step 2.2) π = {2,4,5,3,1}. The corresponding antithetic permutation sample is therefore (step 2.3) ̂π = {1,3,5,4,2}. We now perform the iteration of step 2.4.
• i = 1: α1: = π−1(1) = 2 and ̂α1 ≔ ̂π−1(1) = 1. Therefore, Pα1
π = P2π = ∅ and P̂α1
̂π = P̂1π = ∅,
hence (from Eq. (5)) we set ρnew = 1
2 [ρ(X∅ + X2) + ρ(X∅ + X1)] = 1
2 [ρ(X2) + ρ(X1)] . We
therefore update the Monte Carlo estimate of portfolio α1 = 2, that is Kα,m = K2,1 = ρnew, also
computing K22,1. Finally, we assign ρold = 1
2 [ρ(X2) + ρ(X1)].
• i = 2: α2 = 4 and ̂α1 = 3. Therefore, Pα2
π = P4π = {2}, and P̂α2
̂π = P̂3π = {1}, hence we update
ρnew = 1
2 [ρ(X{2,4}) + ρ(X{1,3})]. We therefore update the Monte Carlo estimate of portfolio α2 =
4, that is K4,1 = ρnew − ρold, also computing K42,1. Finally, we update ρold = ρnew. • We continue up to i = 5 in the same way.
8.4. Basel 2.5
The Basel 2.5 capital charge formula reads as follows (see CRR1 (2013) and CRR2 (2019))
ρ(X, X′) = −[VaR(X, 1%) + sVaR(X′, 1%)] + IRC(X, 99.9%) (77)
where both VaR and sVaR rely on 250 daily historical P&L scenarios. The variable X′ is introduced since sVaR is calculated on a historical P&L strip corresponding to a stressed time window, different

M. Scaringi, M. Bianchetti Sharpening Shapley Allocation
Page 41 of 47
from the one used for VaR, but applies to the same portfolios9. We report in the following Table 5 the details on the trading book behind the numerical results provided in Sec. 5.1.
Risk Measure VaR + sVaR
Hierarchical level 1st 2nd 3rd
Portfolios
PTF_1
PTF_1_1 PTF_1_1_1
PTF_1_1_2
PTF_1_2 PTF_1_2_1
PTF_1_2_2
PTF_2 PTF_2__ PTF_2____
PTF_3
PTF_3_1
PTF_3_1_1
PTF_3_1_2
PTF_3_1_3
PTF_3_1_4
PTF_3_2
PTF_3_2_1
PTF_3_2_2
PTF_3_2_3
PTF_3_3
PTF_3_3_1
PTF_3_3_2
PTF_3_3_3
PTF_3_4 PTF_3_4__
PTF_4
PTF_4_1 PTF_4_1_1
PTF_4_1_2
PTF_4_2 PTF_4_2_1
PTF_4_2_2
PTF_4_3 PTF_4_3__
PTF_4_4 PTF_4_4_1
PTF_4_4_2
PTF_4_5 PTF_4_5__
Number of Business Units/portfolios (n) 4 12 24
Number of possible coalitions for each portfolio (2n−1) 8 2.048 8.388.608
Number of risk measure calculations (n × 2n−1) 32 24.576 201.326.592
Shapley Approach Exact Exact Monte Carlo
Table 5: details on the trading book behind the numerical results provided in Sec. 5.1. We report the risk measures considered, the business units (portfolios) for three distinct hierarchical levels, and some figures on the computational effort involved in the Shapley allocation strategy.
We show below the main figures (Standalone risk measures and correlation matrices of historical scenarios) of the portfolios analysed in Sec. 5.1, for each of the three hierarchical levels of Table 5.
9 The stressed time window is kept fixed in every sVaR computation.

M. Scaringi, M. Bianchetti Sharpening Shapley Allocation
Page 42 of 47
Table 6: Value at Risk and Stressed Value at Risk standalone figures normalized to total VaR+sVaR (ρ(X) in Eq. (71)) (in blue) and corresponding historical correlation matrices (values in percentage) of the 1st level portfolios (in red and green for negative and positive correlations, respectively). The intensity of the colours increases proportionally to the measured amount.
Table 7: same as in Table 6 for 2nd level portfolios.
Ptf VaR 1 2 3 4 Ptf SVaR 1 2 3 4 1 7% 100 0 -55 -28 1 5% 100 -81 47 -40 2 1% 0 100 7 -1 2 42% -81 100 -51 37 3 17% -55 7 100 40 3 72% 47 -51 100 -39 4 18% -28 -1 40 100 4 0% -40 37 -39 100
Ptf Ptf
Ptf VaR 1_1 1_2 2 3_1 3_2 3_3 3_4 4_1 4_2 4_3 4_4 4_5 1_1 6% 100 62 2 -51 -17 -41 39 -27 -24 3 -15 25 1_2 1% 62 100 -8 -73 -36 -43 -10 -11 -24 -48 -42 37 2__ 1% 2 -8 100 12 23 -2 16 7 -2 10 -3 8 3_1 8% -51 -73 12 100 41 55 22 21 28 53 47 -40 3_2 2% -17 -36 23 41 100 22 33 7 25 24 -4 28 3_3 11% -41 -43 -2 55 22 100 1 13 18 32 18 -26 3_4 0% 39 -10 16 22 33 1 100 -24 8 61 30 9 4_1 4% -27 -11 7 21 7 13 -24 100 13 -26 5 -2 4_2 5% -24 -24 -2 28 25 18 8 13 100 -2 17 5 4_3 1% 3 -48 10 53 24 32 61 -26 -2 1-
00 54 -36 4_4 17% -15 -42 -3 47 -4 18 30 5 17 54 100 -46 4_5 1% 25 37 8 -40 28 -26 9 -2 5 -36 -46 100
Ptf SVaR 1_1 1_2 2 3_1 3_2 3_3 3_4 4_1 4_2 4_3 4_4 4_5 1_1 56% 100 -8 -82 35 75 16 79 -79 -41 78 -33 78 1_2 2% -8 100 15 -46 -17 -28 -2 20 21 -20 17 -8 2__ 5% -82 15 100 -32 -67 -25 -75 89 35 -77 28 -55 3_1 8% 35 -46 -32 100 41 28 36 -34 -23 64 -17 26 3_2 20% 75 -17 -67 41 100 28 71 -68 -38 68 -32 66 3_3 29% 16 -28 -25 28 28 100 23 -17 1 25 -32 17 3_4 2% 79 -2 -75 36 71 23 100 -71 -24 76 -20 51 4_1 9% -79 20 89 -34 -68 -17 -71 100 47 -78 32 -55 4_2 17% -41 21 35 -23 -38 1 -24 47 100 -49 41 -18 4_3-
 3% 78 -20 -77 64 68 25 76 -78 -49 100 -35 50 4_4 75% -33 17 28 -17 -32 -32 -20 32 41 -35 100 -28 4_5 4% 78 -8 -55 26 66 17 51 -55 -18 50 -28 100
Ptf
Ptf

M. Scaringi, M. Bianchetti Sharpening Shapley Allocation
Page 43 of 47
Table 8: same as in Table 6 for 3rd level portfolios.
Ptf VaR
1_1_1
1_1_2
1_2_1
1_2_2
2
3_1_1
3_1_2
3_1_3
3_1_4
3_2_1
3_2_2
3_2_3
3_3_1
3_3_2
3_3_3
3_4
4_1_1
4_1_2
4_2_1
4_2_2
4_3
4_4_1
4_4_2
4_5
1_1_1 10% 100 -74 -61 98 -10 -9 -61 -25 -96 -79 12 -34 21 -12 -61 -21 -11 -13 -25 -30 -53 -76 -33 38 1_1_2 8% -74 100 44 -67 15 -2 59 10 75 56 23 6 -32 -28 56 61 -7 4 14 31 72 85 33 -28 1_2_1 1% -61 44 100 -59 6 4 40 17 57 47 -2 19 -13 12 33 22 11 3 19 23 32 45 23 -18 1_2_2 2% 98 -67 -59 100 -9 -6 -55 -28 -91 -74 9 -32 22 -10 -61 -18 -8 -13 -24 -33 -53 -69 -33 38 2____ 1% -10 15 6 -9 100 11 5 7 11 19 5 18 -12 -4 6 16 7 4 -2 -1 10 7 -6 8 3_1_1 2% -9 -2 4 -6 11 100 5 2 8 15 -9 9 18 20 6 -2 12 15 5 0-
 -1 5 12 -2 3_1_2 3% -61 59 40 -55 5 5 100 7 67 50 -6 20 -8 -1 54 29 9 6 3 9 57 72 22 -39 3_1_3 4% -25 10 17 -28 7 2 7 100 24 22 -2 16 -4 12 19 1 7 5 17 9 4 10 -2 -6 3_1_4 4% -96 75 57 -91 11 8 67 24 100 81 -17 39 -19 14 61 19 16 13 32 20 53 83 30 -39 3_2_1 1% -79 56 47 -74 19 15 50 22 81 100 -26 69 -14 25 49 16 23 17 27 13 34 66 0 -8 3_2_2 1% 12 23 -2 9 5 -9 -6 -2 -17 -26 100 -36 -23 -48 4 50 -30 -14 -20 44 27 -9 13 22 3_2_3 2% -34 6 19 -32 18 9 20 16 39 69 -36 100 2 44 20 -13 28 11 36 -12 -11 27-
 -37 21 3_3_1 5% 21 -32 -13 22 -12 18 -8 -4 -19 -14 -23 2 100 25 -14 -28 -1 12 4 -17 -22 -18 -8 -4 3_3_2 4% -12 -28 12 -10 -4 20 -1 12 14 25 -48 44 25 100 -19 -47 40 17 31 -23 -50 -6 -18 8 3_3_3 9% -61 56 33 -61 6 6 54 19 61 49 4 20 -14 -19 100 31 2 -4 8 19 62 64 15 -29 3_4__ 0% -21 61 22 -18 16 -2 29 1 19 16 50 -13 -28 -47 31 100 -26 -7 1 35 61 42 20 9 4_1_1 3% -11 -7 11 -8 7 12 9 7 16 23 -30 28 -1 40 2 -26 100 10 22 -16 -38 6 -8 -1 4_1_2 2% -13 4 3 -13 4 15 6 5 13 17 -14 11 12 17 -4 -7 10 100 -2-
 -5 7 6 17 -2 4_2_1 5% -25 14 19 -24 -2 5 3 17 32 27 -20 36 4 31 8 1 22 -2 100 -10 -8 31 6 5 4_2_2 1% -30 31 23 -33 -1 0 9 9 20 13 44 -12 -17 -23 19 35 -16 -5 -10 100 31 8 14 2 4_3__ 1% -53 72 32 -53 10 -1 57 4 53 34 27 -11 -22 -50 62 61 -38 7 -8 31 100 64 40 -36 4_4_1 5% -76 85 45 -69 7 5 72 10 83 66 -9 27 -18 -6 64 42 6 6 31 8 64 100 31 -37 4_4_2 16% -33 33 23 -33 -6 12 22 -2 30 0 13 -37 -8 -18 15 20 -8 17 6 14 40 31 100 -40 4_5__ 1% 38 -28 -18 38 8 -2 -39 -6 -39 -8 22 21 -4 8 -29 9 -1 -2 5 2 -3-
6 -37 -40 100
Ptf SVaR
1_1_1
1_1_2
1_2_1
1_2_2
2
3_1_1
3_1_2
3_1_3
3_1_4
3_2_1
3_2_2
3_2_3
3_3_1
3_3_2
3_3_3
3_4
4_1_1
4_1_2
4_2_1
4_2_2
4_3
4_4_1
4_4_2
4_5
1_1_1 10% 100 -45 -2 88 36 2 -52 16 -63 -54 -36 -3 18 7 -55 -33 32 40 30 -4 -47 -39 29 -25 1_1_2 60% -45 100 -8 -16 -82 -27 43 -19 51 62 86 -21 -43 -51 62 79 -63 -80 -45 20 81 37 -44 77 1_2_1 1% -2 -8 100 7 12 2 -22 8 -12 2 -10 7 0 3 -9 1 3 15 15 -12 -10 7 12 -8 1_2_2 1% 88 -16 7 100 11 -6 -39 11 -43 -31 -10 -9 4 -8 -34 -3 13 17 17 -1 -18 -22 18 -5 2____ 5% 36 -82 12 11 100 35 -39 20 -43 -50 -75 18 34 64 -65 -75 71 89 36 -14 -77 -42 39 -55 3_1_1 3% 2 -27 2 -6 35 100 -9 -5 -8 -19 -22 4 14 27 -22 -3-
1 26 39 14 -2 -27 -13 8 -17 3_1_2 5% -52 43 -22 -39 -39 -9 100 -15 47 37 41 12 -16 -22 50 41 -31 -42 -26 19 54 41 -23 29 3_1_3 4% 16 -19 8 11 20 -5 -15 100 -13 -7 -25 6 9 -1 -21 -8 17 23 24 -11 -19 -2 28 -13 3_1_4 6% -63 51 -12 -43 -43 -8 47 -13 100 49 48 -12 -21 -14 49 41 -34 -47 -40 37 76 21 -37 32 3_2_1 2% -54 62 2 -31 -50 -19 37 -7 49 100 54 21 -21 -19 51 67 -45 -49 -26 8 60 53 -30 49 3_2_2 19% -36 86 -10 -10 -75 -22 41 -25 48 54 100 -30 -45 -46 59 74 -58 -78 -61 32 78 34 -51 57 3_2_3 9% -3 -2-
1 7 -9 18 4 12 6 -12 21 -30 100 19 30 4 -10 15 18 37 -17 -23 21 11 13 3_3_1 20% 18 -43 0 4 34 14 -16 9 -21 -21 -45 19 100 22 -19 -29 34 41 36 -12 -37 -9 24 -30 3_3_2 6% 7 -51 3 -8 64 27 -22 -1 -14 -19 -46 30 22 100 -26 -50 40 57 22 -2 -51 -25 -16 -24 3_3_3 23% -55 62 -9 -34 -65 -22 50 -21 49 51 59 4 -19 -26 100 56 -39 -63 -31 19 64 44 -61 45 3_4__ 2% -33 79 1 -3 -75 -31 41 -8 41 67 74 -10 -29 -50 56 100 -60 -68 -26 14 76 59 -35 51 4_1_1 3% 32 -63 3 13 71 26 -31 17 -34 -45 -58 15 34 40 -39 -60 100 -
68 34 -13 -61 -32 35 -43 4_1_2 7% 40 -80 15 17 89 39 -42 23 -47 -49 -78 18 41 57 -63 -68 68 100 51 -21 -77 -34 41 -55 4_2_1 17% 30 -45 15 17 36 14 -26 24 -40 -26 -61 37 36 22 -31 -26 34 51 100 -28 -53 9 45 -21 4_2_2 5% -4 20 -12 -1 -14 -2 19 -11 37 8 32 -17 -12 -2 19 14 -13 -21 -28 100 31 -15 -36 18 4_3__ 3% -47 81 -10 -18 -77 -27 54 -19 76 60 78 -23 -37 -51 64 76 -61 -77 -53 31 100 37 -45 50 4_4_1 22% -39 37 7 -22 -42 -13 41 -2 21 53 34 21 -9 -25 44 59 -32 -34 9 -15 37 100 -9 17 4_4_2 73% 29 -44 -
12 18 39 8 -23 28 -37 -30 -51 11 24 -16 -61 -35 35 41 45 -36 -45 -9 100 -33 4_5__ 4% -25 77 -8 -5 -55 -17 29 -13 32 49 57 13 -30 -24 45 51 -43 -55 -21 18 50 17 -33 100
Ptf
Ptf

M. Scaringi, M. Bianchetti Sharpening Shapley Allocation
Page 44 of 47
8.5. FRTB
The FRTB total capital charge formula (CRR3 (2024)) reads as follows
C = min[IMAIMA ptf + PLAAddOn + SASA ptf; SAIMA ptf+SA ptf] + max[0; IMAIMA ptf − SASA ptf]. (78)
In Eq. (78) the subscripts IMA ptf and SA ptf points out whether the corresponding risk measures are computed on the subset of the trading desks subject either to the Internal Model Approach (IMA) or to the Standard Approach (SA), respectively. IMA and SA risk measures are composed of several risk components as show in eqs. (79) and (80) below,
IMAs = IMCCs + SESs + DRCIMA,s, (79)
SAs = mcax[SBAsDelta(c) + SBAs
Vega(c) + SBACsurvature(c)] + DRCSA,s + RRAOs, (80)
where s ∈ {IMA ptf, SA ptf}, SBA stands for Sensitivity Based Approach, and c ∈ {H, M, L} refer to the parametrization used among three possible choices (denominated as High, Medium, Low). i.e. the one leading to the maximum Delta, Vega and Curvature components. Since in this paper the additional variable c is not considered, it is excluded hereafter. For DRC measure, an additional subscript is included to distinguish between the standard and internal model formulas. For the full definitions of al-
l the quantities involved in eqs. (78), (79) and (80), and for the portfolio assignation rules to IMA or SA we refer to CRR3 (2024). From Eq. (78) we notice that the FRTB capital charge is floored by the SA capital charge computed on the whole perimeter (IMA ptf + SA ptf); therefore, the standard approach plays a crucial role for the determination of the final capital charge. In this work we focus, for the sake of simplicity, on SBAsDelta risk measure, for which we provide in Eq. (81) below its br-
eakdown on each asset class prescribed by the regulation
SBADelta = SBADelta, EQ + SBADelta,GIRR + SBADelta,CS + SBADelta,COMM + SBADelta,FX. (81)
Each component in Eq. (81) is computed by aggregation of the corresponding delta sensitivities multiplied by specific coefficients. The aggregations are made on different sub-portfolios (a.k.a. “buckets”) whose nature depends on the asset class considered. For what concerns the Equity asset class the SBADelta, EQ risk measure reads as follows
SBADelta, EQ = √∑ Kb2 +
13
b=1
2 ∑ ∑ γb,c SbSc
13
c=b+1
13
b=1
: = √S, (82)
where 13 is the number of buckets for the Equity asset class, relative to general characteristics of the underlying equities, Kb, Sb are given by
Kb =
{
√∑ WSb2,k +
Nb
k=1
2 ∑ ∑ ρk,lWSb,kWSb,l
Nb
l=k+1
Nb
k=1
b ≠ 11
∑ |WSb,k|
Nb
k=1
b = 11
(83)

M. Scaringi, M. Bianchetti Sharpening Shapley Allocation
Page 45 of 47
Sb =
{
∑ WSb,k
Nb
k=1
S≥0
max [min [∑ WSb,k
Nb
k=1
, Kb] , −Kb] S < 0
(84)
WSb,k = wbsb,k, sb,k = ∑ ∂Vi,b
∂uk
i∈b
, (85)
where sb,k is the total Equity Delta sensitivity of trades in bucket b with respect to risk factors uk, k = 1, ... , Nb, and γ, ρ, w are parameters fixed by the regulation. We refer to CRR3 (2024) for further details. We report in the following Table 5 the details on the trading book behind the numerical results provided in Sec. 5.2.
Risk Measure SBA Delta Equity
Hierarchical level 1st 2nd
PTF_1 PTF_1__
PTF_2 PTF_2__
PTF_3
PTF_3_1
PTF_3_2
PTF_3_3
PTF_4
PTF_4_1
PTF_4_2
PTF_4_3
PTF_4_4
Number of Business Units/portfolios (n) 4 9
Number of possible coalitions for each portfolio (2n−1) 8 256
Number of risk measure calculations (n × 2n−1) 32 2.304
Shapley Approach Exact Exact
Table 9: Details on the trading book behind the numerical results provided in Sec. 5.2. We report the risk measures considered, the business units (portfolios) for two distinct hierarchical levels, and some figures on the computational effort involved in the Shapley allocation strategy.
We show in Figure 16 the portfolio delta sensitivities. We notice that PTF_3 hedges the other portfolios and is the most relevant one in terms of absolute equity delta, since its delta exposures are higher but partially offset each other.

M. Scaringi, M. Bianchetti Sharpening Shapley Allocation
Page 46 of 47
Figure 16: Portfolio Equity Delta 1% exposure. Left panel: sum of sensitivity values (netted). Right panel: sum of absolute sensitivity values (not netted). All figures normalized to total absolute sensitivity. Portfolio 3 is the leading portfolio in terms of absolute sensitivity.

M. Scaringi, M. Bianchetti Sharpening Shapley Allocation
Page 47 of 47
8.6. Risk Allocation Strategies
We report here a detailed comparison of the mathematical properties of risk allocation strategies discussed in Sec. 2.3.
Standalone Proportional Marginal Shapley Shapley
Monte Carlo Euler VaR Euler
1° order
VaR Euler 2°order
Var Euler Kernel
Full allocation Not satisfied Satisfied
(ex post)
Satisfied (ex post)
Satisfied (by definition)
Satisfied (by definition, in each path)
Satisfied (homogeneous risk measures)
Almost satisfied
Almost satisfied
Almost satisfied
Computational Effort (per measure evaluation)
Low Low Low High Medium Low Negligible Negligible Negligible
Interactions among risk units
Not considered
Not considered
Partially considered
Fully considered
Fully considered
Fully considered
Fully considered
Fully considered
Fully considered
Potential
negative values No No Yes Yes Yes Yes Yes Yes Yes
Theoretical/numerical
issues No No Denominator
can be small No
Convergence to be verified empirically
Not applicable in discrete case for VaR
Approximation Approximation
Approximation + model assumptions
Table 10: comparison of risk allocation strategies.

---

## Processing Information

- **Processing Library:** Zotero PDFWorker
- **Processing Date:** 2026-02-10T18:18:48.349Z
- **Text Length:** 114552 characters
- **Success:** Text extraction completed
- **PDF Library Used:** Zotero PDFWorker
- **Pages Processed:** 47 of 47
