# PDF Document: Maelger - 2025 - Opportunity Cost in Insurance.pdf

**File Path:** Maelger - 2025 - Opportunity Cost in Insurance.pdf

**Processed Date:** 2026-02-10T18:16:50.716Z

**File Size:** 299.00 KB

**Total Pages:** 9

**Extracted Pages:** 9

**PDF Library:** Zotero PDFWorker

**Attachment Item ID:** 3574

**Title:** Opportunity Cost in Insurance

**Collection:** Large Files > Random Papers

---

## Extracted Text Content

Opportunity Cost in Insurance
Dr. Jan Maelger1
1Unaffiliated.
Contributing authors: jan.maelger@t-online.de;
Abstract
We develop a formalism for insurance profit optimisation for the in-force business constraint by regulatory and risk policy related requirements. This approach is applicable to Life, P&C and Reinsurance businesses and applies in all regulatory frameworks with a solvency requirement defined in the form of a solvency ratio, notably Solvency II and the Swiss Solvency Test. We identify the optimal asset allocation for profit maximisation within a pre-defined risk appetite and deduce the annual opportu-
nity cost faced by the insurance company.
Keywords: Insurance, Actuarial Business Steering, Opportunity Cost, Solvency, Asset Allocation
1 Introduction
The goal of the senior management of any company ought to be to maximize shareholder value, achieved by maximizing long-term profits. Insurance companies are a priori no exception, but they do come with two special features. The first of which is that insurance is a heavily regulated industry, imposing many financial limits and constraints. The second is the role of the actuary, sitting in the extended management circle, equiped with veto rights and lawfully mandated to ensure sufficient levels of-
 prudency. From a purist actuarial perspective, a too much in prudency buffers does not exist, causing from the outset a conflict of interest with the Finance and Investment departments. Qualitatively, the higher the prudency buffers, the higher the opportunity costs in foregone P&L profits. With quantifications difficult, compromisary discussions are often vague, and a commercially-accessible concept of opportunity cost would prove useful. As seen from the viewpoint of a single insurance contract-
, its lifecycle can be split into the writing phase and its run-off phase. Similarly the business view separates the
1
arXiv:2511.13959v1 [q-fin.ST] 17 Nov 2025

Underwriting from the management of the in-force portfolio, which require separate skills and have separate success factors. While insurance companies need to master both to prevail, it is viable to consider their optimization individually. On the Underwriting side, profitability is mainly driven by Pricing, on the optimization of which many studies have been performed [1–3]. Contrarily, on the management of the in-force business the field is largely unexplored. There are papers in the literatue -
on asset allocation optimization under insurance specific constraints, but they differ from our study by not deriving a concept of opportunity cost and in either restricting to only solvency constraints or in optimizing for individual stock selections instead of the entire SAA. For example, in [4] the authors study an optimal stock portfolio selection under general solvency constraints and in the context of ESG-investing. In [5] the insurance asset allocation is optimized across all major asset cl-
asses under the constraint of adhering to Solvency II market risk capital requirements. The approach developed here is interesting for institutional investors, who have the means to run the analysis on a large scale gauging an insurance companies‘ potential foregone growth due to sub-optimally chosen metrics, or the insurance companies themselves, looking to gain further insight into either their own or a competitor‘s strategy. Following the school of Carl Bender and Steven Orszag [6] to prioritiz-
e approximative answers over exact non-answers, we abstain from rigorous definitions and a theorem-proof-style discussion. Instead, we focus on practical applicability and always assume sufficient smoothness. The more notions are kept vague, the more powerful the approach, and so this study is meant as a fall-back blue-print for practicioners of either insurance companies or institutional investors attempting to better understand the business at hand. In section 2 we develop the formalism to compu-
te the opportuntiy cost faced by an insurance company for generic profit functions and a generic set of constraints. In section 3 we discuss various choices of profit functions and in section 4 we give an overview of the most common constraint types. Section 5 explains how timedependence enters the equations and in section 6 we comment on local approximations. Some concluding remarks are made in section 7.
2 Generic Formalism
Let P denote the profit of an insurance company in a given reporting cycle, typically a year or a quarter, in dependence of some vector of variables x and external parameters τ : P (x, τ ), subject to a set of constraints c with
ci(x, τ ) = 0 and cj(x, τ ) ≥ hj ⇔ c ̃j(x, τ ) ≡ hj − cj(x, τ ) ≤ 0
for some indices i, j ∈ N and thresholds hj ∈ R+. The constraints may be of regulatory nature, eg. on solvency or liquidity, or internally set limits within a risk appetite statement. A more detailed discussion of the constraints can be found in section 4. Denote by n the total number of constraints.
2

All quantities immediately controllable by the management of the company constiute the variables x, in particular the strategic asset allocation (SAA), and all quantities outside the influence of the management give the set of external parameters τ , e.g. the yield curve, credit spreads or reserving assumption parameters. With the x being the asset class allocations, they range from 0 to 1, ie x ∈ [0; 1]|x|, and they must sum to 1 for consistency, creating the additional constraint
X
k
xk − 1 = 0.
Since we consider the situation of in-force business instead of underwriting new one, the contractual terms of the in-force policies are also seen as external paramters. In particular, we disregard Pricing effects on profit optimisation in this study and refer interested readers to a small selection of the vast literature available [1–3]. Similarly we also regard process operations in the Claims department as given constants. While efficiency gains in claims handling obviously reduce costs and inc-
rease profits, such undertakings are typically multi-year projects and not immediate levers for the senior management to pull. Mathematically, the constraint profit optimisation problem can be formulated via Lagrange multipliers [7, 8] under Karush-Kuhn-Tucker (KKT) conditions [9–12]. We identify the insurance Lagrangian function as
L(x, τ , λ) = P (x, τ ) −
X
i
λi ci(x, τ ) −
X
j
λ ̃j c ̃j(x, τ ) − μ
X
k
xk − 1 , (1)
for some multipliers λi, λ ̃j, μ ∈ R and λ =


λi λ ̃j μ

. By the KKT theorem, any saddle
point1 of the Lagrangian over x ⊕ λ is also an optimal solution over x to the profit function subjet to the above constraints [12–14]. Reformulated as a KKT problem, we have the following necessary conditions for an optimal solution [15]: • Stationarity condition:
∇xP (x, τ ) −
X
i
λi ∇xci(x, τ ) −
X
j
λ ̃j ∇xc ̃j(x, τ ) − μ = 0 (2)
• Primal feasability conditions (original constraints):
X
k
xk − 1 = 0 and ci(x, τ ) = 0 and c ̃j(x, τ ) ≤ 0 ∀i, j (3)
• Dual feasability condition: λ ̃j ≥ 0 ∀j (4)
1Maximum over x, but could be a maximum or minimum over λ.
3

• Complementary Slackness condition:
X
j
λ ̃j c ̃j(x, τ ) = 0 (5)
The notation ∇x stands for a vector of partial derivatives over all elements of the vector x. The sufficient conditions for an optimal solution can be expressed via the determinant of the Hessian matrix [16, 17] as
det ∇2
xxL(x, τ , λ) < 0. (6)
To give some intuition, the potential candidates (ie stationary points) for a global maximum of the Lagrangian in Eq.(1) are found by the solutions of Eqs.(2)-(5). These stationary points could correspond to either local maxima, minima or saddle points over x. Eq.(6) then sorts out the local maxima from the pool of candidate solutions. To identify the global maximum x∗, one has to manually compare all local maxima such that L(x∗) ≥ L(xm) for all xm satisfying Eqs.(2) to (6). In case there are no c-
andidate solutions xm, then the global maximum x∗ sits on the boundary of the variable space
[0; 1]|x|. The difference bewtween the profits generated from the optimal target SAA values and the actuals is the opportunity cost faced by the insurance company:
OpC(x, τ ) ≡ P (x∗, τ ) − P (x, τ ). (7)
It is remarked that the optimization problem in Eqs (2) to (6) is always well-defined for any chosen number of constraints nc and nc ̃ and for any chosen granularity2 of the SAA, with the number of classes denoted by nx. The number of equations and the number of unknowns are both nc + nc ̃ + nx. In general, it is not possible to solve the set of Eqs. (2) to (6) analytically and one resorts to numerical methods. A vast array of techniques are available in the literature, and the reader is referred -
to [16] for an introduction to nonlinear optimization and to [18, 19] for a review of the more recent developments. Finally, the advent of commercially viable quantum computing may bring further capabilities to real-time financial optimization [20, 21].
3 Choosing a Profit Function
Insurance profits can be split in many ways, and accounting nomenclature can become highly involved. However, at lowest granularity, one way to determine profits is via the value of the new business written (N BV ), the change in existing assets on the balance sheet from one period to the next, i.e. the investment returns (InvR), both realized and unrealized, and the change in liabilities during the same time period (∆liab):
P = NBV + InvR − ∆liab. (8)
2For example SAA = Cash, RE, Equities, Alternatives, Govies, Coprorate bonds .
4

In itself, each of these components is a complex function of many stochastic drivers. Eg. the InvR depend heavily on the SAA and the market developments. Similarly the movements of the liabilities depends on the market developments and the change in technical reserving assumptions and parameters. Additionally, via measures such as Asset Liability Management (ALM), the adverse changes in liabilities can be mitigated by mirroring changes in assets, adding a further layer of complexity onto the busi-
ness. We disregard N BV at this point, since it is primarily determined by Pricing and thus out of scope for this study. The change in liabilities is itself composed of several parts, most of which are outside the sphere of influence of the senior management, eg the change in reserving assumptions, with an exception of operational or one-off reserve releases. However, the former is simply balancing items and the latter can be seen as deferred profits from the past. The term ∆liab also contains a c-
ontribution from the difference in actual claims incurred vs the reserved forecast from the previous reporting date. This is largely due to the random claims experience during the reporting period. However a small part is influencable by the senior management via efficient internal processes and good preventive communication to the customers, eg early hail warnings to motor customers. Nonetheless, in the spirit of this paper, these effects are attributed in its entirety to the external parameters -
τ . For the investment returns, they can be written as
InvR =
|x|
X
k
Rkxk (9)
with Rk a random variable for the investment returns of asset class xk over a given time period, which can be expressed as Rk = E[Rk] + vk with the volatility vk a stochastic noise around 0. At first order, one may set vk = 0, when considering longterm over short-term profits. Since the market returns are outside the influence of the management, the Rk are part of the set of external parameters, Rk ∈ τ . Looking at profit functions in more detail, there is a whole plethora of metrics available, fo-
r instance • Business Operating Profit (BOP) • Net income before interest and tax (NIBIT) • Net income after tax (NIAT) • Return on Equity (ROE) • Return on Capital (ROC) • Risk-adjusted return on capital (RAROC) • Return on risk-adjusted capital (RORAC) • Risk-adjusted return on risk-adjusted capital (RARORAC) These profit metrics can be applied to balance sheets under different accounting standards, either statutory (eg. US GAAP, Swiss GAAP etc.) or market consistent (eg. IFRS, Swiss GAAP FER, S-
II etc.) All of these choices hold merit in their own right and will ultimately lead to different opportunity costs. For example, choosing to consider BOP on an IFRS balance sheet yields a respective opportunity cost OpCIFRS BOP.
5

4 Constraints
Insurance is a heavily regulated industry and the list of constraints imposed by the regulator is long. Many of the regulatory constraints are superimposed by internally set confidence (amber/red) limits, specified in risk appetite statements, to ensure sufficient early warning indicators before any regulatory breaches. We list below some of the most common limit types, without any claim to even near exhaustion. 1. Cash requirement:
xCash ≥ lCash,
with xcash the SAA component for cash and cash equivalents, and lCash the shortterm cash limit. 2. Liquidity strain requirement:
X
j∈liquid
xj hj ≥ lliquid
The quantity lliquid is the long-term lower liquidity threshold, and the hj|j ∈ liquid are haircuts on the market values of asset classes xj|j ∈ liquid ⊂ x, inserted to account for potential losses realized during the sale of liquid assets in stress situations. 3. Solvency requirement:
SR(x) ≡ AF R(x) SCR(x) ≥ T
The solvency constraint is in the usual form of a solvency ratio (SR) with AF R are the available financial ressources, SCR the solvency acapital requirement3 and the parameter T either the minimum regulatory threshold or an internally set target solvency ratio. Further typical constraints include thresholds for the following quantities. 4. Shareholder Equity 5. Tied Assets 6. FX Exposure 7. Counterparty Exposure 8. ALM or Hedging requirements 9. Usage of derivative instruments 10. Cash pooling li-
mits While asset class exposure limits may already be in place in the company, such as xEquities ≤ lEquities or xRE ≤ lRE etc, one should be careful in modelling them as constraints in Eq.(1), since they artificially restrict the optimizable variable space. If these asset class limits are rooted in regulatory requirements, they must of course be adhered to. Contrarily, if they merely stem from the current SAA, then this is in fact the setup to be challenged by Eqs.(2)-(6) and their inclusion as co-
nstraints leads to a misinterpretation of the true maximum x∗.
3The AF R is called Basic Own Funds (BOF ) under SII and Risk Bearing Capital (RBC) under SST. The SII wording of SCR corresponds to the Target Capital (T C) under SST. Conceptually, for our purposes, these terms are interchangeable.
6

5 Time-dependence
Investigating the time-dependence of Eq.(1), the only quantities which change with time are the external parameters, τ (t). There is no explicit time-dependence of the profit function P or the variables x, such that ∂P
∂t = 0 and
dP
dt =
|τ |
X
k=1
∂P ∂τk
dτk
dt . (10)
Similarly for the constraints ci(x, τ ) and c ̃j(x, τ ). In a strict sense, the timedependence turns Eqs.(1) to (6) into a real-life optimisation problem to be solved. However, while market data indeed changes in real-time, most of the external paramters, ie reserving assumptions or yield curves, are more stable, rendering quarterly updates sufficient in most scenarios.
6 Local Taylor expansion
By standard Taylor expansion, around any point x0, the |x|-dimensional hypersurface L(x) can be approximated by
L(x, τ ) = L(x0, τ ) +
∞
X
k=1
∇k
xL(x0, τ ) · (x − x0)k, (11)
which is valid for any x in sufficient proximity of x0. With a closed form not known for L, decision making processes between a handful of alternatives typically assess their impacts on the profits P , accompanied by impact estimates on other KPIs. Implicitly, such impact assessments correspond to a subset of the linear terms ∇xL(x0, τ ). In rare cases, second order effects are accounted for to enhance decision quality. While this approach is practical, it only gives direction for a small set of p-
ossible choices, without clear identification of true maxima. At any point x0, the best choice is the one that follows the gradient of the surface, ∇xL(x0, τ ).
7 Conclusion
We have set up a universal formalism for any insurance company to tune its strategic asset allocation for profit maximization, or at least to better understand the opportunity costs associated with differing strategies. The equations in this conceptual first study remain at high-level, but can be tailored to fit specific business needs and with some ressource investment can be turned into regular reporting outputs. While the formalism developed allows to identify the optimal strategic asset alloca-
tion for maximum profits within any set of constraining limit thresholds, it does not make any claim how to best set the limits themselves. This remains for a future study.
Acknowledgements. The author would like to thank James Richardson for mentorship and practical insights into the steering of an insurance company as seen from an actuarial background. This publication did not receive any financial support.
7

References
[1] Bauer, D., Phillips, R.D., Zanjani, G.: In: Dionne, G. (ed.) Pricing Insurance Risk: Reconciling Theory and Practice, pp. 353–380. Springer, Cham (2025). https: //doi.org/10.1007/978-3-031-69674-9 11
[2] Henriet, D., Klimenko, N., Rochet, J.: The dynamics of insurance prices. Geneva Risk Insur Rev 41, 2–18 (2016) https://doi.org/10.1057/grir.2015.5
[3] Harrington, S.E., Niehaus, G., Yu, T.: In: Dionne, G. (ed.) Insurance Price Volatility and Underwriting Cycles, pp. 647–667. Springer, New York, NY (2013). https://doi.org/10.1007/978-1-4614-0155-1 23
[4] Schlu ̈tter, S., Senyo Fianu, E., Gru ̈ndl, H.: Responsible investments in life insurers ́ optimal portfolios under solvency constraints. Zeitschrift fu ̈r die gesamte Versicherungswirtschaft 112, 53–81 (2023) https://doi.org/10.3790/zverswiss. 2023.03.Schluetter.etal
[5] Braun, A., Schmeiser, H., Schreiber, F.: Portfolio optimization under solvency ii: Implicit constraints imposed by the market risk standard formula. Journal of Risk and Insurance 84(1), 177–207 (2017) https://doi.org/10.1111/jori.12077
[6] Bender, C.M., Orszag, S.A.: Advanced Mathematical Methods for Scientists and Engineers. Asymptotic Methods and Perturbation Theory. Springer, New York (1999). https://doi.org/10.1007/978-1-4757-3069-2
[7] Beavis, B., Dobbs, I.: Optimisation and Stability Theory for Economic Analysis. Cambridge University Press, Cambridge (1990). https://doi.org/10.1017/ CBO9780511559402
[8] Protter, M.H., Morrey, C.B.: Intermediate Calculus. Springer, New York (1985). https://doi.org/10.1007/978-1-4612-1086-3
[9] Karush, W.: Minima of functions of several variables with inequalities as side conditions. (2014). https://api.semanticscholar.org/CorpusID:117180997
[10] Tind, J.: In: Floudas, C.A., Pardalos, P.M. (eds.) Saddle point theory and optimality conditions Saddle Point Theory and Optimality Conditions, pp. 33553357. Springer, Boston, MA (2009). https://doi.org/10.1007/978-0-387-74759-0 574
[11] Lange, K.: Karush-Kuhn-Tucker Theory, pp. 107–135. Springer, New York, NY (2013). https://doi.org/10.1007/978-1-4614-5838-8 5
[12] Walsh, G.R.: Methods of Optimization. A Wiley-Interscience publication. Wiley, New York (1975). https://books.google.de/books?id=K0EZAQAAIAAJ
8

[13] Kalman, D.: Leveling with lagrange: An alternate view of constrained optimization. Mathematics Magazine 82(3), 186–196 (2009) https://doi.org/10.1080/ 0025570X.2009.11953617
[14] Fuente, A.d.l.: Mathematical Methods and Models for Economists. Cambridge University Press, Cambridge (2000). https://doi.org/10.1017/ CBO9780511810756
[15] Ruszczyn ́ski, A.: Nonlinear Optimization. Princeton University Press, Princeton (2006). press.princeton.edu/books/hardcover/9780691119151/ nonlinear-optimization
[16] Boyd, S., Vandenberghe, L.: Convex Optimization, p. 244. Cambridge University Press, Cambridge (2004)
[17] Silberberg, E., Suen, W.: The Structure of Economics: A Mathematical Analysis. Economics series. McGraw-Hill, New York (2001). https://books.google.de/ books?id=7y9lQgAACAAJ
[18] Mohammadi, A., Sheikholeslam, F.: Intelligent optimization: Literature review and state-of-the-art algorithms (1965–2022). Engineering Applications of Artificial Intelligence 126, 106959 (2023) https://doi.org/10.1016/j.engappai.2023. 106959
[19] Andrei, N.: Modern Numerical Nonlinear Optimization. Springer Optimization and Its Applications. Springer, Switzerland (2022). https://doi.org/10.1007/ 978-3-031-08720-2
[20] Abbas, A., Ambainis, A., Augustino, B., al.: Challenges and opportunities in quantum optimization. Nat Rev Phys 6, 718–735 (2024) https://doi.org/10.1038/ s42254-024-00770-9
[21] Wilkens, S., Moorhouse, J.: Quantum computing for financial risk measurement. Quantum Inf Process 22, 51 (2023) https://doi.org/10.1007/s11128-022-03777-2
9

---

## Processing Information

- **Processing Library:** Zotero PDFWorker
- **Processing Date:** 2026-02-10T18:16:50.716Z
- **Text Length:** 20839 characters
- **Success:** Text extraction completed
- **PDF Library Used:** Zotero PDFWorker
- **Pages Processed:** 9 of 9
