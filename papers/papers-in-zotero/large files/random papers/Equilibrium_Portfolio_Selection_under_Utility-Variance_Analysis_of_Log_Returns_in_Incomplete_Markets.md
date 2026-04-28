# PDF Document: Cao et al. - 2025 - Equilibrium Portfolio Selection under Utility-Variance Analysis of Log Returns in Incomplete Markets.pdf

**File Path:** Cao et al. - 2025 - Equilibrium Portfolio Selection under Utility-Variance Analysis of Log Returns in Incomplete Markets.pdf

**Processed Date:** 2026-02-10T18:15:52.451Z

**File Size:** 1180.65 KB

**Total Pages:** 40

**Extracted Pages:** 40

**PDF Library:** Zotero PDFWorker

**Attachment Item ID:** 3486

**Title:** Equilibrium Portfolio Selection under Utility-Variance Analysis of Log Returns in Incomplete Markets

**Collection:** Large Files > Random Papers

---

## Extracted Text Content

Equilibrium Portfolio Selection under Utility-Variance Analysis
of Log Returns in Incomplete Markets
Yue Cao∗ Zongxia Liang† Sheng Wang‡ Xiang Yu§
Abstract
This paper investigates a time-inconsistent portfolio selection problem in the incomplete mar
ket model, integrating expected utility maximization with risk control. The objective functional
balances the expected utility and variance on log returns, giving rise to time inconsistency and
motivating the search of a time-consistent equilibrium strategy. We characterize the equilibrium
via a coupled quadratic backward stochastic differential equation (BSDE) system and establish
the existence theory in two special cases: (i) two Brownian motions driven the price dynamics
and the factor process are independent with ρ = 0; (ii) the trading strategy is constrained to
be bounded. For the general case with correlation coefficient ρ ̸= 0, we introduce the notion
of an approximate time-consistent equilibrium. By employing the solution structure from the
equilibrium in the case ρ = 0, we can construct an approximate time-consistent equilibrium in
the general case with an error of order O(ρ2). Numerical examples and financial insights based
on deep learning algorithms are also presented.
Keywords: Time inconsistent control, time-consistent equilibrium, quadratic BSDE system,
approximate time-consistent equilibrium
1 Introduction
The optimal portfolio management problem has always been a core research topic in quantitative
finance, traditionally approached via the mean-variance (MV) criterion proposed by Markowitz
(1952) and the expected utility (EU) theory developed in Merton (1969, 1971). The classical
mean–variance criterion captures the trade-off between the expected return and the risk (variance).
In contrary, the utility maximization framework incorporates the investor’s risk aversion level into
decision making without concerning the risk level of terminal wealth.
∗Department of Mathematical Sciences, Tsinghua University, Beijing, China. caoyue24@mails.tsinghua.edu.cn †Department of Mathematical Sciences, Tsinghua University, Beijing, China. liangzongxia@tsinghua.edu.cn ‡Department of Statistics and Actuarial Science, The University of Hong Kong, Pokfulam Road, Hong Kong.
sheng-wa15@tsinghua.org.cn
§Department of Applied Mathematics, The Hong Kong Polytechnic University, Kowloon, Hong Kong. xiang.yu@
polyu.edu.hk
1
arXiv:2511.05861v1 [q-fin.PM] 8 Nov 2025

One natural extension is to integrate the risk management into the utility maximization prob
lem, dictating the optimal trading strategy at a reasonable risk level. The research in this direction
has gained an upsurge of attention recently. As a pioneer attempt, Basak and Shapiro (2001)
study the utility maximization on portfolio and consumption plans by imposing the Value-at-Risk
(VaR) constraints on the terminal wealth to encode the agent’s concern on the risk level. Wong
et al. (2017) examine a utility–deviation–risk portfolio selection problem by reformulating it as
an equivalent nonlinear moment system, where the objective combines expected utility with a
deviation-based risk measure, and derives the optimal strategy in a Black-Scholes model. Bensous
san et al. (2022) recently combine the utility maximization problem with the variance minimization
of terminal wealth, and recasts the problem as a mean field-type control (MFC) problem using a
coupled system of Hamilton–Jacobi–Bellman and Fokker–Planck equation, and characterizes the
optimal consumption and trading strategies in the mean-field context.
Our paper adopts an integrated formulation that aims to optimize the trade-off between the
expected utility and the variance of portfolio in incomplete market models. Unlike the setting that
focuses on the capital amount (see, e.g., Wong et al. (2017) and Bensoussan et al. (2022)), we
target at the log returns of the portfolio. This choice follows a growing line of research on portfolio
selection (see Dai et al. (2021), Peng et al. (2023), Guan et al. (2025), and references therein).
Specifically, the objective functional in our paper at time t is defined as
J(t, π) = Et U log W π
T
Wtπ
− γt
2 Vart log W π
T
Wtπ
. (1.1)
Nevertheless, the log returns and the variance term in the objective functional render the
problem time-inconsistent. That is, a strategy being optimal today may no longer remain optimal
at future dates. Strotz (1955) classifies agents facing time-inconsistency into three types. The naive
agent always re-optimizes the current objective, ignoring time-inconsistency and thus constantly
changing strategies. The precommitted agent fixes an initial optimal plan, knowing it will later
become suboptimal; the plan remains time-inconsistent since it is only optimal at the initial time.
A sophisticated agent cannot precommit but anticipates future deviations, viewing her future selves
as strategic counterparts and seeking a time-consistent equilibrium strategy that each self optimally
follows—namely, the intrapersonal equilibrium.
Contrary to Wong et al. (2017) and Bensoussan et al. (2022), who focus on the precommit
ted strategy, the present paper aims to characterize a time-consistent equilibrium strategy by a
sophisticated agent under game theoretical thinking with future selves, whose precise definition
in continuous time was first proposed in Ekeland and Lazrak (2006)1. Moreover, we consider the
1Since then, a strand of literature on time-inconsistent control problems in continuous-time setting has emerged,
see e.g. Basak and Chabakauri (2010), Hu et al. (2012), Hu et al. (2017), Bjo ̈rk et al. (2014), Dai et al. (2021) for MV
problems, Ekeland and Lazrak (2006), Ekeland and Pirvu (2008), Hamaguchi (2021) for non-exponential discounting
problems.
2

incomplete market model, where the financial market consists of a risk-free asset and a single risky
asset2. The wealth process is driven by a standard Brownian motion B, while the asset prices are
influenced by an exogenous factor process driven by another Brownian motion B ̄. The correlation
coefficient of these two Brownian motions is denoted by ρ. Similar to Hamaguchi (2021) and Dai
et al. (2021), we can employ the perturbation and maximum principle to establish a necessary
condition to characterize an open-loop time-consistent equilibrium strategy in Theorem 3.1 for our
utility maximization problem with variance minization via a two-dimensional system of coupled
BSDEs (3.1) (see also (4.2) for a simplified yet still coupled system), which has not been addressed
before in the existing literature.
In general, the system (4.2) consists of two quadratic BSDEs coupled by the derived optimal
strategy in quadratic form. Classical existence results for the multidimensional BSDE mainly
fall into two categories: the fixed-point approach based on contraction mappings, which ensures
uniqueness of solutions (see Hu and Tang (2016), Luo and Tangpi (2017) and Fan et al. (2023)),
and the construction of uniformly convergent approximations via coefficient regularization (see Xing
and ˇZitkovic ́ (2018), Jackson and ˇZitkovic ́ (2022) and Jackson (2023)). However, neither of these
methods applies to our problem (see Appendix C for the detailed explanation).
In response to the challenge of the unconventional BSDE system, we first study two special
cases where the existence of solution can be obtained and the verification theorem can be exercised:
(i) the case with zero correlation coefficient (ρ = 0) for two Brownian motions B and B ̄; (ii) the
case with trading constraint in a bounded set.
For the general case with ρ ̸= 0 and without trading constraint, we can no longer establish the
existence of solution to the more complicated BSDE system. However, as a new contribution to the
existing literature, we can show that by employing the solution structure from the time-consistent
equilibrium strategy in the special case with ρ = 0 we can successfully construct an approximate
time-consistent equilibrium (see Definition 5.1) in the general case with ρ ̸= 0 when the correlation
coefficient ρ is sufficiently small. More importantly, under some additional regularity conditions,
we can rigorously show that the approximation error using the equilibrium solution in the case
ρ = 0 is of order O(ρ2), see Theorem 5.5. This approximation result using the explicit equilibrium
structure in the special case with ρ = 0 significantly simplifies the decision making in some general
incomplete market models with small ρ such that it is sufficient to implement the more tractable
control process while the time-consistency can be retained in an approximate sense.
We also highlight the main differences between the present paper and some related studies
in Gu et al. (2020) and Wang et al. (2025). Gu et al. (2020) studies a time-consistent Hamil
ton–Jacobi–Bellman (HJB) equation to characterize the equilibrium strategy for a utility–deviation
risk control problem. They obtain the explicit equilibrium value function and the corresponding
equilibrium strategy in a homogeneous utility–deviation risk problem with CRRA utility based on
2For simplicity, we focus on one risky asset, as the analysis can be extended directly to multiple risky assets.
3

a specific choice of risk-aversion function. In contrast, we focus on the optimization of the trade
off between the exponential utility and variance over log returns and characterize the open-loop
time-consistent equilibrium via a system of coupled quadratic BSDEs, for which we establish ex
istence results in some cases and provide an approximate equilibrium in the general case. Wang
et al. (2025) study a stochastic control problem incorporating higher-order moments in the com
plete market model and provide the characterization of the time-consistent equilibrium strategy.
On the contrary, we consider an incomplete stochastic factor model that significantly increases the
mathematical complexity to establish the existence of time-consistent equilibrium.
To illustrate our theoretical results, we further employ a deep learning–based numerical scheme,
originally proposed by E et al. (2017) and Han et al. (2018), to solve the BSDE systems arising
in the three cases—namely, the case with ρ = 0, the case with trading constraints, and the case
of the approximate equilibrium for ρ ̸= 0. We find that when the correlation coefficient ρ = 0,
the equilibrium investment ratio exhibits a slight upward trend as time approaches the terminal
horizon, differing from the observation in Dai et al. (2021) such that the investment strategy
remains constant. When ρ < 0, however, our results are consistent with Dai et al. (2021), showing
a downward trend in the investment ratio when time approaches the terminal horizon. In addition,
we perform sensitivity analysis with respect to the risk-aversion parameter ζ in the utility function
and the weighting coefficient γ between the expected utility and the variance. The numerical results
illustrate that the equilibrium strategy exhibits a reasonable monotonic pattern with respect to
both ζ and γ. Moreover, the numerical results also shows that the approximate Nash equilibrium
strategy and its resulting value function are relatively close to those under the true constrained
equilibrium when the trading constraint bound is large.
The remainder of the paper is organized as follows. Section 2 formulates the time inconsistent
control problem as the trade-off between the utility maximization and the variance minimization
over logarithmic portfolio returns, for which a time-consistent equilibrium is introduced. Section
3 provides the characterization of the time-consistent equilibrium by a quadratic BSDE system.
Section 4 investigates the existence of solution to the BSDE system in the stochastic factor model in
two special cases: (i) when two Brownian motions in the price dynamics and in the factor model are
independent; (2) when the trading strategy is constrained in a compact set. Section 5 establishes
the approximate time-consistent equilibrium in the general case when two Brownian motions are
correlated with ρ ̸= 0 using the same solution structure from time-consistent equilibrium solution
in the model with ρ = 0 with the error of order O(ρ2). Some numerical illustrations and financial
implications are presented in Section 6. Finally, Appendix A and B collect some inequalities and
sufficient conditions for the existence theory of BSDE system that are used in previous sections,
and Appendix C elaborates some challenges of the BSDE system in the general case when ρ ̸= 0.
Notations: For t ∈ [0, T ], p, q ≥ 1, we list below some notations that will be used frequently
4

throughout the paper:
• HBMO denotes the set of R-valued F-progressively measurable processes such that ∥π∥BMO <
∞, where
∥π∥2
BMO := sup
τ ∈T[0,T ]
Eτ
ZT
τ
|πs|2ds
∞
,
T[0,T ] denotes all stopping times on [0, T ].
• L∞
Ft(Ω; R) denotes the set of all R-valued Ft-measurable bounded random variables.
• Lp
F(Ω; Lq(t, T ; R)) denotes the set of all R-valued progressively measurable processes X with
E
"
ZT
t
|Xs |q ds
p/q #
< ∞.
When p = q, we write Lp
F(t, T ; R) := Lp
F(Ω; Lp(t, T ; R))
• Lp
F(Ω; C([t, T ]; R)) denotes the set of all R-valued adapted and continuous processes X with
E
"
sup
s∈[t,T ]
|Xs|p
#
< ∞.
• S∞ denotes the set of all R-valued F-progressively measurable and bounded processes.
2 Problem Formulation
Let T > 0 be a finite time horizon and (Ω, F, F, P) be a filtered complete probability space, where
F = {Ft, 0 ≤ t ≤ T } is the augmented natural filtration generated by two standard Brownian
motions {B(t), 0 ≤ t ≤ T } and {B ̄(t), 0 ≤ t ≤ T }. Their correlation coefficient ρ is such that
E[B(t)B ̄(t)] = ρt. The market model consists of one risk-free bond with interest rate r = {rt : t ∈
[0, T ]} and one stockwith price dynamics governed by
dSt = St (μtdt + σtdBt) , S0 = s0 ∈ (0, ∞),
where the drift μ : [0, T ] × Ω → R, the volatility σ > 0 : [0, T ] × Ω → R, and the interest rate
r : [0, T ] × Ω → R, are all F-progressively measurable processes.
Assumption 2.1. rt, μt, σt > 0 and θt := σ−1
t (μt − rt) are bounded F-progressively measurable
processes.
A trading strategy is a F-progressively measurable processes π such that R T
0 |πt(μ(t) − r(t))|dt +
RT
0 |σ(t)πt|2dt < ∞ a.s., where πt stands for the fraction of wealth allocated in the stock at time t.
The self-financing wealth process W π evolves according to
dW π
t = Wπ
t (rt + πt(μt − rt)dt + πtσtdBt) , W π
0 = w0 > 0.
5

In this paper, we consider a utility maximization framework with variance adjustment on log return
of the portfolio. That is, with given r0 ∈ R, π0 and t ∈ [0, T ), the objective functional of the investor
given the trading strategy π at time t is defined by
J(t, π) = Et U log W π
T
Wtπ
− γt
2 Vart log W π
T
Wtπ
, (2.1)
where Et and Vart represent the conditional expectation and the conditional variance at time t,
respectively, and γt > 0 can be regarded as the weighting parameter measuring the trade-off between
the expected utility and the risk (variance) at time t. In particular, we shall work with the CARA
utility U (x) = − 1
ζ e−ζx with the risk aversion parameter ζ > 0.
To simplify the notation, let us denote Rtπ = log Wtπ, which satisfies
dRπ
t = rt + πt(μt − rt) − 1
2 |σtπt|2 dt + πtσtdBt, Rπ
0 = r0 = log w0 ∈ R.
Then the objective functional in (2.1) at time t can be written as
Et [U (Rπ
T − Rπ
t )] − γt
2 Vart[Rπ
T − Rπ
t ] = −1
ζ Et [exp (−ζ(Rπ
T − Rπ
t ))] − γt
2 Vart[Rπ
T ].
To ensure the objective functional under π is well defined, we impose the following condition
on trading strategies:
Definition 2.2. (Admissible trading strategy) A trading strategy π is admissible if π ∈ HBMO and,
for some p > 1, it satisfies
Et [exp (−pζ(Rπ
T − Rπ
t ))] < ∞, a.s. (2.2)
for any t ∈ [0, T ). We denote by Π0 the set of all admissible trading strategies.
Remark 2.3. Note that we have to require Et [exp (−ζ(Rπ
T − Rtπ))] < ∞, a.s. to ensure that the
objetive functional at time t is well-defined. In (2.2), we impose a slightly stronger integrability
condition (with p > 1). As will be shown in the subsequent discussion, this condition guaran
tees that the admissible set remains open under perturbations (see Lemma 2.7 and Corollary 2.9),
which is essential for the rigorous definition of the equilibrium. Moreover, it also implies that
Et [(U ′(Rπ
T − Rtπ))p] < ∞, a.s., a fact that will play a crucial role in the proof of Theorem 3.1; see
Hamaguchi (2021) for similar conditions.
The following lemma shows that J(t, π) < ∞ for any π ∈ Π0.
Lemma 2.4. For π ∈ Π0 and t ∈ [0, T ), J(t, π) is finite almost surely. Moreover, Rπ ∈ L2
F(Ω; C([0, T ]; R)).
Proof. First, by H ̈older’s inequality, we have
Et [exp (−ζ(Rπ
T − Rπ
t ))] ≤ (Et [exp (−pζ(Rπ
T − Rπ
t ))])
1
p < ∞, a.s..
6

By the definition of the admissible strategy π, it holds that
Rπ
T − Rπ
t=
ZT
t
rs + πs(μs − rs) − 1
2 |σsπs|2 ds + πsσsdBs.
Using the standard estimate for SDE (see Theorem 3.4.3 in Zhang (2017)), we obtain that
E
"
sup
s∈[t,T ]
|Rπ
s − Rπ
t |2 1A
#
=C(T )E
"
ZT
t
rs + πs(μs − rs) − 1
2 |σsπs|2 1Ads
2
+
ZT
t
|πsσs|21Ads
#
≤C(∥r∥∞, ∥μ∥∞, ∥σ∥∞, T )E
"
ZT
t
|πs|2ds
2
+1
!
1A
#
.
Note that A ∈ Ft is arbitrary and π ∈ HBMO, by the definition of conditional expectation and
Lemma A.1, we deduce that
(Et [|Rπ
T − Rπ
t |])2 ≤ Et
h
|Rπ
T − Rπ
t |2i
≤ Et
"
sup
s∈[t,T ]
|Rπ
s − Rπ
t |2
#
≤ C(∥r∥∞, ∥μ∥∞, ∥σ∥∞, T ) Et
"
ZT
t
|πs|2ds
2
#
+1
!
≤ C(∥r∥∞, ∥μ∥∞, ∥σ∥∞, T ) ∥π∥4
BMO + 1 < ∞.
Thus Vart[Rπ
T − Rtπ] is bounded, and consequently, J(t, π) is finite for any t ∈ [0, T ). The proof
also verifies that Rπ ∈ L2
F(Ω; C([0, T ]; R)).
Remark 2.5. Note that for a given admissible trading strategy π, Rπ
T − Rtπ is independent of the
initial value r0. Hence, the definition of the admissible set Π0 is independent of the initial value r0.
The issue of time inconsistency arises due to the initial dependence of Rt and the variance
term, as a result, the optimal solution make no longer sense as the optimal decision today might
be turned over at future dates. Instead, we seek the equilibrium solution using the game theoretic
thinking with future selves. To define the equilibrium strategy, we first introduce the perturbation
strategy of an admissible strategy.
Definition 2.6. Assume that π is an admissible strategy, for any fixed t ∈ [0, T ), ε ∈ (0, T − t)
and η ∈ L∞
Ft(Ω, R), define an admissible perturbation strategy πt,ε,η (see Corollary 2.9) as follows:
πt,ε,η
s = πs + η1s∈[t,t+ε), s ∈ [0, T ],
where 1 denotes the indicator function.
Let ξt,ε,η,π := Rπt.ε,η − Rπ be the difference of log return processes between πt,ε,η and π. Then
for any t ∈ [0, T ), η ∈ L∞
Ft(Ω, Rd), ε ∈ (0, T − t) and an admissible strategy π, ξt,ε,π := ξt,ε,η,π3 is
3For notation simplicity, we drop the superscript η.
7

the unique solution of the SDE4 that



dξt,ε,π
s = a(s, πt,ε,η
s ) − a(s, πs) ds + σsη1s∈[t,t+ε)dBs,
ξt,ε,π
t = 0.
(2.3)
Here, a(s, π) := rs + (μs − rs)π − 1
2 |σsπ|2 . In the following lemma, we will first establish some
fundamental properties of ξt,ε,π.
Lemma 2.7. Let t ∈ [0, T ) and η ∈ L∞
Ft(Ω, R) be fixed.
1. For any ε ∈ (0, T − t), ξt,ε,π ∈ Lk
F(Ω; C([t, T ]; R)) for any k ≥ 1.
2. For any k ≥ 1, there exists a constant C(∥r∥∞, ∥μ∥∞, ∥σ∥∞, T, k, ∥π∥BMO) such that
Et
"
sup
s∈[t,T ]
|ξt,ε,π
s |2k
#
≤ C(∥r∥∞, ∥μ∥∞, ∥σ∥∞, T, k, ∥π∥BMO)(ε|η|2)k, a.s.
for ε ∈ (0, T − t) sufficiently small.
3. For any c > 0, π ∈ Π0, ε ∈ (0, T −t), it holds that sup
ε∈(0,T −t)
Et
h
exp(c|ξt,ε,π
T |)
i
< C(c, π, ∥η∥∞) <
∞, P − a.s., where C(c, π, ∥η∥∞) denotes a constant depending only on c, π, ∥η∥∞, but inde
pendent of ε, and is increasing with respect to ∥η∥∞.
Proof. The first assertion is standard, see Theorem 3.4.3 in Zhang (2017). The proof of the second
assertion is similar to the ones of Lemma 2.4 and Lemma 2.5 in Hamaguchi (2021). Indeed, for any
set A ∈ Ft, it holds that
E
"
sup
s∈[t,T ]
|ξt,ε,π
s |2k1A
#
≤C E
"
Z t+ε
t
(μs − rs)η − 1
2 σ2
sη2 − σ2
s πsη 1Ads
2k
+
Z t+ε
t
|σsη|21Ads
k
#
≤C E





ε + εη + ε 1
2
Z t+ε
t
|π|2ds
1 2
!2k
|η|2k + εk|η|2k



1A


=C E
"
(ε|η|2)k
"
Z t+ε
t
|πs|2ds
k
+1
#
+ o(εk)
!
1A
#
.
Here, we have omitted the dependence of C for simplicity. Then, it follows that
Et
"
sup
s∈[t,T ]
|ξt,ε,π
s |2k
#
≤ C(ε|η|2)k 1 + Et
"
ZT
t
|πs|2ds
k
#!
≤ C(ε|η|2)k,
where we have used the fact that π ∈ HBMO and the conditional version of the energy inequality
(see Lemma A.1).
4Formally, both Rπt.ε,η and ξt,ε,π can be defined on the entire interval [0, T ]. Nevertheless, in view of the definition
of equilibrium, it suffices to consider them only on [t, T ].
8

For the third assertion, note that
Et
h
exp(c|ξt,ε,π
T |)
i
=Et exp c
Z t+ε
t
(μs − rs)η − 1
2 σ2
sη2 − σ2
s πsη ds + c
Z t+ε
t
σsηdBs
≤C(c, η) Et exp 2c∥σ∥2
∞|η|
ZT
t
|πs|ds
1 2
Et exp 2c
Z t+ε
t
σsηdBs − 2c2
Z t+ε
t
|σsη|2
1 2
≤C(c, δ, ∥η∥∞) Et exp δ
ZT
t
|πs|2ds
1 2
Et exp 2c
Z t+ε
t
σsηdBs − 2c2
Z t+ε
t
|σsη|2ds
1 2
.
In view that σ and η are bounded, the Novikov condition is satisfied such that the second term
equals 1 a.s.. We also note that C(c, δ) can be chosen independent of ε. In fact, we can choose
C(c, δ, ∥η∥∞) = exp c(T − t) ∥μ − r∥∞ · ∥η∥∞ + 1
2 ∥σ∥2
∞∥η∥2
∞ + c2(T − t)∥σ∥2
∞∥η∥2
∞+ T
δ 2c∥σ∥2
∞∥η∥∞
2.
By the John–Nirenberg inequality (see Lemma A.2), for δ > 0 such that δ∥π∥2
BMO < 1, we have
Et exp δ
ZT
t
|πs|2ds < 1
1 − δ∥π∥2
BMO
< ∞ a.s..
As a result,
sup
ε∈(0,T −t)
Et
h
exp(c|ξt,ε,π
T |)
i
≤ C(c, δ, ∥η∥∞) 1
1 − δ∥π∥2
BMO
1 2
< ∞ a.s..
Remark 2.8. The above result is similar to Lemma 2.5 in Hamaguchi (2021). However, as the
control process appears in the SDE governing the difference process, ξt,ε,π cannot satisfy the prop
erties in Hamaguchi (2021) under arbitrary trading strategies. This motivates us to consider the
BMO condition into the definition of our admissible strategies. Consequently, the proof differs from
that of Lemma 2.5 in Hamaguchi (2021).
Corollary 2.9. Assume that π is an admissible trading strategy, for any t ∈ [0, T ) and η ∈
L∞
Ft(Ω, R), πt,ε,η is an admissible strategy.
Proof. We can choose 1 < p′ < p and q > 1 such that 1
p+1
q= 1
p′ . By Lemma 2.7, it holds that
Et
h
exp −p′ζ(Rπt,ε,η
T − Rπt,ε,η
t)
i1
p′
= Et
h
exp −p′ζ
h
(Rπ
T − Rπ
t ) + ξt,ε,π
T
ii 1
p′
≤ (Et [exp (−pζ(Rπ
T − Rπ
t ))])
1
p Et
h
exp qζ ξt,ε,π
T
i1
q < ∞ a.s..
9

Moreover, it is obvious that under a bounded perturbation η,
∥πt,ε,η ∥2
BMO ≤ 2 sup
τ ∈T[0,T ]
Eτ
ZT
τ
|πs|2ds
∞
+ 2ε∥η∥2
∞ < ∞.
Thus, πt,ε,η is an admissible strategy.
Next we give the definition of our (open-loop) time-consistent equilibrium strategy using the
intra-personal game theoretic thinking by perturbation, which is inspired by Hu et al. (2012, 2017).
Definition 2.10. For πˆ ∈ Π0, πˆ is called a time-consistent equilibrium strategy if
lim sup
ε→0
J (t, πˆt,ε,η) − J (t, πˆ)
ε ≤ 0 a.s.,
for any t ∈ [0, T ) and any η ∈ L∞
Ft (Ω, R).
Remark 2.11. In the following sections, we often fix a candidate equilibrium strategy πˆ or an
arbitrary admissible strategy π for analysis. In proving the necessary conditions or verifying equi
librium, we will work with the perturbed log return process under a fixed perturbation η. To ease
presentation, we denote by πˆt,ε, πt,ε the perturbation strategy πˆt,ε,η, πt,ε,η, and denote by Rˆ, R the
log return process Rπˆ, Rπ, and denote by Rˆt,ε, Rt,ε the perturbed log return process Rπˆt,ε,η , Rπt,ε,η ,
and denote by ξt,ε the difference process ξt,ε,π under the perturbation. For simplicity, we also use
the notations uˆ := σπˆ and u := σπ in the following sections.
3 A Necessary Condition of Time-Consistent Equilibria
In this section, we establish several properties of admissible strategies and characterize the necessary
conditions of a time-consistent equilibrium by a BSDE system. Without loss of generality, we
consider a fixed p such that any admissible strategy satisfies
Et [exp (−pζ(Rπ
T − Rπ
t ))] < ∞, a.s..
Theorem 3.1. If πˆ ∈ Π0 is a time-consistent equilibrium strategy, there exist (Y, Y ̃ ) and (Z1, Z, Z ̃1, Z ̃)
such that
1. Y and Y ̃ are continuous and adapted processes such that exp −ζ(Rˆ + Y ) ∈ Lp
F(Ω; C([0, T ]; R))
and Y ̃ ∈ L2
F(Ω; C([0, T ]; R)). Moreover, (Z1, Z ̃1, Z, Z ̃) are R-valued progressively measurable
processes such that
ZT
0
|Z 1
s |2 + |Zs|2 + |Z ̃1
s |2 + |Z ̃s|2 ds < ∞, P − a.s..
10

2. (Y, Y ̃ ) and (Z1, Z, Z ̃1, Z ̃) satisfy the following coupled BSDE system:

       
       
dYs = ζ
2 |Z1
s + σsπˆs + ρZs|2 + ζ(1 − ρ2)
2 |Zs|2 − a(s, πˆs) ds + Z1
s dBs + ZsdB ̄s,
dY ̃s = −a(s, πˆs)ds + Z ̃1
s dBs + Z ̃sdB ̄s,
YT = 0,
Y ̃T = 0.
(3.1)
Furthermore, the equilibrium strategy is characterized by
πˆ = σ−1 e−ζY θ − ζe−ζY (Z1 + ρZ) − γ(Z ̃1 + ρZ ̃)
(ζ + 1)e−ζY + γ .
Remark 3.2. When the market model becomes complete, i.e., the second Brownian motion B ̄ is
absent, the BSDE system (3.1) degenerates to

       
       
dYs = ζ
2 |Zs + uˆs|2 − a(s, πˆs) ds + ZsdBs,
dY ̃s = −a(s, πˆs)ds + Z ̃dBs,
YT = 0,
Y ̃T = 0.
(3.2)
The equilibrium strategy takes the form πˆ = σ−1 e−ζY θ−ζe−ζY Z−γZ ̃
(ζ+1)e−ζY +γ . We observe that the BSDE
system admits a solution when Z = 0 and Z ̃ = 0, thus an equilibrium is given by
πˆ = σ−1 e−ζY θ
(ζ + 1)e−ζY + γ ,
where Y is the solution of the ODE with terminal condition:

 
 
dYs = ζ
2 |uˆs|2 − a(s, πˆs) ds,
YT = 0.
(3.3)
Let A = e−ζY , then A satisfies
At = A(f (A)) := − ζ(ζ + 1)A3θ2
2((ζ + 1)A + γ)2 + ζA2θ2
(ζ + 1)A + γ + rζA, (3.4)
with the terminal condition A(T ) = 1. It is clear that A has a lower bound 0. Combining A′ =
A(f (A)) and the fact that f (A) is bounded, we deduce that A is bounded from above and thus there
exists a unique solution and A is positive.
Remark 3.3. Hamaguchi (2021) derives a one-dimensional FBSDE as a necessary condition for
an equilibrium in a general non-exponential time-inconsistent problem. In our setting, however, the
11

introduced variance must to be represented by another BSDE of Y ̃ , which leads to strong coupling
in our equation. Although Dai et al. (2021) study a mean-variance framework including a variance
term in their objective function, it is straightforward to see that the mean term can be represented
by the BSDE of Y ̃ . In fact, Y ̃ := Et[RT − Rt] (see in Lemma 3.4 later) corresponds precisely to
the mean term at time t. Hence, their analysis also focus on a one-dimensional BSDE. Unlike
Hamaguchi (2021) and Dai et al. (2021), we focus on a two-dimensional fully coupled quadratic
BSDE system.
To prove Theorem 3.1, we need some auxiliary preparations.
Lemma 3.4. For any admissible strategy π ∈ Π0, there exists (Y, Y ̃ ) and (Z1, Z, Z ̃1, Z ̃) satisfying
the BSDEs (3.1) (with πˆ replaced by π) such that, for any t ∈ [0, T ), η ∈ L∞
Ft(Ω, Rd) and ε ∈
(0, T − t), it holds that, a.s.,
J (t, Rt, πt,ε) − J (t, Rt, π)
=Et
Z t+ε
t
e−ζ(Rs+Ys−Rt)(a(s, πt,ε
s ) − a(s, πs) − ζ(Z1
s + σsπs + ρZ) · σsη)ds
− ζEt
Z1
0
e−ζ(RT +λξt,ε
T −Rt)(1 − λ)dλ|ξt,ε
T |2
+γ
2 Et
Z t+ε
t
((σsπs + Z ̃1
s + ρZ ̃s)2 − (σsπt,ε
s + Z ̃1
s + ρZ ̃s)2)ds .
Proof. Fix the strategy π, t ∈ [0, T ), η ∈ L∞
Ft(Ω, Rd) and ε ∈ (0, T − t). By the definition of J, we
have
J (t, Rt, πt,ε) − J (t, Rt, π) = Et
h
U (Rt,ε
T − Rt) − U (RT − Rt)
i
−γ
2 Vart[Rt,ε
T ] − Vart[RT ]
For the first term, we have that
Et
h
U (Rt,ε
T − Rt) − U (RT − Rt)
i
= eζRt Et U ′ (RT )ξt,ε
T+
Z1
0
U ′′ (RT + λξt,ε
T )(1 − λ)dλ|ξt,ε
T |2 .
Next we analyze the conditional expectation Et
h
U ′ (RT )ξt,ε
T
i
and let (α, β) be the unique adapted
solution of the BSDE 


dαs = β1
s dBs + βsdB ̄s,
αT = e−ζRT .
The martingale representation theorem impllies that αs = Es
h
U ′ (RT )
i
. By the definition of the
admissible strategy, it holds that αT ∈ Lp
FT (Ω; R) for some p > 1. Let Y = − 1
ζ log α − R and
hence U ′(Rs + Ys) = αs = Es
h
U ′ (RT )
i
. In particular, α is positive and Y is well defined for any
t ∈ [0, T ] a.s.. Moreover, α ∈ Lp
F(Ω; C([0, T ]; R)) and β1, β ∈ Lp
F Ω; L2(0, T ; R) . Then Y is an
adapted process satisfying the following BSDE that

 
 
dYs = 1
2ζ αs2
|β1
s |2 + |βs|2 + 2ρβ1
s βs − a(s, πs) ds − βs1
ζ αs
+ σπs dBs − βs
ζ αs
dB ̄s,
YT = 0.
12

Let Z1 = − β1
ζα − σπ and Z = − β
ζα , it then holds that
dYs = ζ
2 |Z1
s + σsπ + ρZs|2 + ζ(1 − ρ2)
2 |Zs|2 − a(s, πs) ds + Z1
s dBs + Z1dB ̄s.
Moreover, by taking the conditional expectations, we see that
Et
h
U ′ (RT )ξt,ε
T
i
= Et[αT ξt,ε
t+ε] = Et
h
E[αT |Ft+ε]ξt,ε
t+ε
i
= Et[αt+εξt,ε
t+ε] = Et
h
U ′ (Rt+ε + Yt+ε)ξt,ε
t+ε
i
.
Itˆo’s formula gives that
Et
h
U ′ (Rt+ε + Yt+ε)ξt,ε
t+ε
i
=Et
Z t+ε
t
U ′ (Rs + Ys) a(s, πt,ε
s ) − a(s, πs) ds + σsηdBs
+
Z t+ε
t
ξt,ε
s U ′′ (Rs + Ys) (Z1
s + σsπs)dBs + ZsdB ̄s + ζ
2 |Z1
s + σsπs + ρZs|2 + ζ(1 − ρ2)
2 |Zs|2 ds
+1
2
Z t+ε
t
ξt,ε
s U ′′′ (Rs + Ys) |Z1
s + σsπs|2 + |Zs|2 + 2ρ(Z1
s + σsπs)Zs ds
+
Z t+ε
t
U ′′ (Rs + Ys)(Z1
s + σsπs + ρZs) · σsηds
=Et
Z t+ε
t
e−ζ(Rs+Ys) a(s, πt,ε
s ) − a(s, πs) − ζ(Z1
s + σsπs + ρZs) · σsη ds
+ Et
Z t+ε
t
e−ζ(Rs+Ys) (σsη − ζξt,ε
s (Z1
s + σsπs))dBs − ζξt,ε
s ZsdB ̄s . (3.5)
Under Assumption 2.1, we have
Et
"
Z t+ε
t
(αsσsη)2ds
1 2
#
≤ Et
"
sup
s∈[t,t+ε]
αs
!p#! 1
p
Et
"
sup
s∈[t,t+ε]
σsη
!q#! 1
q
< ∞,
Et
"
Z t+ε
t
(βsξt,ε
s )2ds
1 2
#
≤ Et
"
Z t+ε
t
(βs)2ds
p 2
#! 1
p
Et
"
sup
s∈[t,t+ε]
ξt,ε
s
!q#! 1
q
< ∞,
Et
"
Z t+ε
t
(β1
s ξt,ε
s )2ds
1 2
#
≤ Et
"
Z t+ε
t
(β1
s )2ds
p 2
#! 1
p
Et
"
sup
s∈[t,t+ε]
ξt,ε
s
!q#! 1
q
< ∞.
The Burkholder-Davis-Gundy inequality yields that
Et
Z t+ε
t
e−ζ(Rs+Ys) (ση − ζξt,ε
s (Z1
s + σπ))dBs − ζξt,ε
s ZsdB ̄s = 0.
For the second part, let α ̃t = Et[RT ] and Y ̃t = α ̃t − Rt. Then, α ̃ and Y ̃ satisfy that
dα ̃ = β ̃1dBs + β ̃dB ̄s,
dY ̃s = −a(s, πs)ds + Z ̃1
s dBs + Z ̃sdB ̄s,
13

and α ̃ ∈ L2
F(Ω; C([0, T ]; R)), β ̃1 = Z ̃1 + σπ, β ̃ = Z ̃ ∈ L2
F Ω; L2(0, T ; R) . From Lemma 2.4, it
follows that Rπ ∈ L2
F(Ω; C([0, T ]; R)) and hence Y ̃ ∈ L2
F(Ω; C([0, T ]; R)). We thus get that
Vart[RT ] − Vart[Rt,ε
T]
=Vart [Et+ε[RT ]] + Et [Vart+ε[RT ]] − Vart
h
Et+ε[Rt,ε
T]
i
− Et
h
Vart+ε[Rt,ε
T]
i
=Vart[Rt+ε + Y ̃t+ε] − Vart[Rt,ε
t+ε + Y ̃t+ε]
=Vart
Z t+ε
t
(σπs + Z ̃1
s )dBs + Z ̃sdB ̄s − Vart
Z t+ε
t
(σπt,ε
s + Z ̃1
s )dBs + Z ̃sdB ̄s
=Et
Z t+ε
t
((σπs + Z ̃1
s + ρZ ̃s)2 − (σπt,ε
s + Z ̃1
s + ρZ ̃s)2)ds , (3.6)
where we have used the fact that RT − Rt+ε = Rt,ε
T − Rt,ε
t+ε in the second and third equalities . The
conclusion then follows by combining (3.5) and (3.6).
Lemma 3.5. Let π ∈ Π0 fixed. For any t ∈ [0, T ) and η ∈ L∞
Ft(Ω, R) fixed and for ε sufficiently
small, it holds that a.s.
lim sup
ε→0
1
ε Et
Z1
0
e−ζ(RT +λξt,ε
T −Rt)(1 − λ)dλ|ξt,ε
T |2 ≤ C(∥η∥∞)|η|2, a.s.
with C denoting a constant independent of ε and increasing with respect to ∥η∥∞.
Proof. H ̈older’s inequality and Lemma 2.7 imply that Et
h
e−ζRT |ξt,ε
T |2i
< ∞ and Et
h
e−ζ(RT +ξt,ε
T )|ξt,ε
T |2i
<
∞ a.s.. Noting that e−(RT +λξt,ε
T )|ξt,ε
T |2 is nonnegative and convex almost sure with respect to λ, we
have
1
ε Et
Z1
0
e−ζ(RT +λξt,ε
T −Rt)(1 − λ) dλ · |ξt,ε
T |2 = 1
ε
Z1
0
Et
h
e−ζ(RT +λξt,ε
T −Rt)|ξt,ε
T |2i
(1 − λ) dλ
≤1
ε eζRt Et
h
e−ζRT |ξt,ε
T |2i Z 1
0
(1 − λ)2dλ + Et
h
e−ζ(RT +ξt,ε
T )|ξt,ε
T |2i Z 1
0
λ(1 − λ)dλ .
Therefore, we only need to show that 1
ε Et
h
e−(RT +λξt,ε
T −Rt)|ξt,ε
T |2i
≤ C|η|2 a.s. for λ = 0, 1, and
for any t ∈ [0, T ) and η ∈ L∞
Ft(Ω, R). By Lemma 2.7 and the H ̈older’s inequality, there exists a
constant C only depending on q, ∥r∥∞, ∥μ∥∞, ∥σ∥∞, T, k, ∥π∥BMO such that, for ε sufficiently small,
1
ε Et
h
e−ζ(RT +λξt,ε
T −Rt)|ξt,ε
T |2i
≤1
ε Et
h
e−pζ(RT −Rt)|
i1
p Et
h
|ξt,ε
T |2qi 1
q Et
h
e−rζ λξ t,ε
T
i1
r
≤ C Et
h
e−pζ(RT −Rt)|
i1
p Et
h
e−rζ λξ t,ε
T
i1
r |η|2
≤ C(∥η∥∞)|η|2, λ = 0, 1.
Here, we choose q, r such that 1
p+1
q+1
r = 1. Then, it holds that
lim sup
ε→0
1
ε Et
Z1
0
e−ζ(RT +λξt,ε
T −Rt)(1 − λ)dλ|ξt,ε
T |2 ≤ C(∥η∥∞)|η|2 a.s..
14

Lemma 3.6. For any admissible strategy π ∈ Π0, consider the pair (Y, Y ̃ ) and (Z, Z ̃) in Lemma
3.4. We deduce the existence of a measurable set E1 ⊂ [0, T ) with Leb([0, T ] \ E1) = 0 such that,
for any t ∈ E1, there exists a sequence {εn}n∈N ⊂ (0, T − t) satisfying limn→∞ εtn = 0 and for any
perturbation η ∈ L∞
Ft(Ω; R), it holds that
nli→m∞
1
εtn
Et
"
Z t+εtn
t
e−ζ(Rs+Ys−Rt) a(s, πts,εtn ) − a(s, πs) − ζ(Z1
s + σsπs + ρZs) · σsη ds
#
=e−ζYt (μt − rt)η − 1
2 σ2
t η2 − σ2
t ηπt − ζ(Z1
t + σtπt + ρZt) · σtη , a.s. (3.7)
and
nli→m∞
1
εtn
Et
"
Z t+εtn
t
(σsπs + Z ̃1
s + ρZ ̃s)2 − (σsπt,ε
s + Z ̃1
s + ρZ ̃s)2 ds
#
= − 2σtη(σtπt + Z ̃1
t + ρZ ̃t − σ2
t η2), a.s.. (3.8)
Proof. Noting that a(s, πts,εtn) − a(s, πs) = (μs − rs)η − 1
2 σs2η2 − σt2ηπs and (σsπs + Z ̃s1 + ρZ ̃s)2 −
(σsπts,ε + Z ̃s1 + ρZ ̃s)2 = −2σsη(σsπs + Z ̃s1 + ρZ ̃s − σs2η2), we only need to prove that
nli→m∞
1
εtn
Et
"
Z t+εtn
t
αs (μs − rs)η − 1
2 σ2
sη2 − σ2
t ηπs − ζ(Z1
s + σsπs + ρZs) · σsη ds
#
=αt (μt − rt)η − 1
2 σ2
t η2 − σ2
t ηπt − ζ(Z1
t + σtπt + ρZt) · σtη , a.s.
and
nli→m∞
1
εtn
Et
"
Z t+εtn
t
2σs(σsπs + Z ̃1
s + ρZ ̃s − σ2
s η2)ds
#
= 2σt(σtπt + Z ̃1
t + ρZ ̃t − σ2
t η2), a.s..
In view of e−ζ(Rs+Ys) = αs ∈ Lp
F(Ω; C([0, T ]; R)) and the fact that μ − r and σ are bounded, we
have α(μ − r), ασ2 ∈ Lp(0, T ; R) with p > 1. It also holds that, for any 1 < γ < p and 1
γ=1
p+ 1
q′ ,
E
ZT
0
|αsπs|γds ≤ E
"
sup
s∈[0,T ]
|αs|p
#! γ
p

E


ZT
0
|πs |γ ds
q′ γ




γ q′
< ∞,
which implies that ασ2π ∈ Lγ(0, T ; R). In addition, α(Z1+σπ) = β1, αZ = β ∈ Lp
F Ω; L2(0, T ; R) ⊂
Lp∧2(0, T ; R) and β ̃1 = Z ̃1 + σπ, β ̃ = Z ̃ ∈ L2
F Ω; L2(0, T ; R) ⊂ L2(0, T ; R).
Therefore, by Lemma 3.3 in Hamaguchi (2021) , there exists a measurable set E1 with Leb([0, T ]\
E1) = 0 such that for any t ∈ E1, we can choose a subsequence by recursively extracting subse
quences and applying the diagonal selection argument that
nli→m∞ Et
"
1
εtn
Z εtn
t
Ps
#
= Pt.
15

Here P can be chosen to be α(μ − r), ασ2, ασ2π, α(Z1 + σπ + ρZ) and σ(σπ + Z ̃1 + ρZ ̃), σ3η2. Then
we obtain (3.7) and (3.8) with E1 and the corresponding εtn for any t ∈ E1, independent of η.
Remark 3.7. Note that a(s, πts,εtn) − a(s, πs) depends on the perturbation strategy πt,εtn only on
[t, t + εtn] and will be affected by η, we cannot directly apply Lemma 3.3 in Hamaguchi (2021).
However, because the effect of η can be separated, we can apply Lemma 3.3 to each element in two
expressions and then use the diagonal selection argument to complete the proof.
Now we are ready to give the proof of Theorem 3.1.
Proof of Theorem 3.1. Assume that πˆ ∈ Π0 is an equilibrium strategy. Fix an arbitrary δ > 0
and take an arbitrary t from the set E1 in Lemma 3.6 . Let {δm}m∈N be a sequence such that
0 < δm ≤ δ, m ∈ N, and limm→∞ δm = 0. For each m ∈ N, define ηm by
ηm =



δm e−ζYt θ − e−ζYt σtπˆt − ζe−ζYt (σtπˆt + Zt1 + ρZt) − γ(Z ̃t1 + σtπˆt + ρZ ̃t) ≥ 0,
−δm e−ζYt θ − e−ζYt σtπˆt − ζe−ζYt (σtπˆt + Zt1 + ρZt) − γ(Z ̃t1 + σtπˆt + ρZ ̃t) < 0.
By the definition of the equilibrium, Lemma 3.6, Lemma 3.4 as well as Lemma 3.5, we obtain
that there exists a sequence {εtn}n∈N ⊂ (0, T − t) satisfying limn→∞ εtn = 0 such that
0 ≥ lim sup
n→∞
1
εtn
J (t, Rˆt, πˆt,εtn,ηm ) − J (t, Rˆt, πˆ)
=e−ζYt (μt − rt)ηm − 1
2 σ2
t η2
m − σ2
t πˆtηm − ζ(Z1
t + σtπˆt + ρZt) · σtηm
−γ
2 σtηm 2σtπˆ + 2Z ̃1
t + 2ρZ ̃t + σtηm − C(|δ|)(|ηm|2), a.s..
Dividing both sides of the above inequality by δm, sending m → ∞ and noting that the coefficient
of σtηm tends to zero, we deduce that
e−ζYt θ − e−ζYt σtπˆt − ζe−ζYt (σtπˆt + Z1
t + ρZt) − γ(Z ̃1
t + σtπˆt + ρZ ̃t) = 0.
Consequently, the desired result holds that
σπˆ = e−ζY θ − ζe−ζY (Z1 + ρZ) − γ(Z ̃1 + ρZ ̃)
(ζ + 1)e−ζY + γ .
4 Study of BSDE System in the Incomplete Factor Model
In this section, we focus on the factor model and the asssociated BSDEs (3.1). The factor model
provides an incomplete market setting with stochastic parameters in which the risk-free rate, the
16

stock return rate, and the volatility rate can be expressed by a deterministic function of time t and
the factor Xt. It is assumed that the stochastic factor X is governed by
dXt = m(t, Xt)dt + ν(t, Xt)dB ̄t, X0 = x0. (4.1)
It is assumed that rt = r(t, Xt), μt = μ(t, Xt), σt = σ(t, Xt) for some functions r, μ, σ : [0, T ]×R → R
respectively. Moreover, we impose the following assumptions:
Assumption 4.1. μ(t, x), r(t, x), σ(t, x) > 0 and θ(t, x) = σ−1(μ − r)(t, x) are bounded measurable
(w.r.t. B([0, T ] × R)) deterministic functions with respect to (t, x). Here, θ represents the market
price of risk, which is assumed to be positive and bounded.
Assumption 4.2. The coefficients of the factor model satisfy that
1. The drift vector m is uniformly bounded.
2. There exists a constant λ > 0 such that λ|z|2 ≥ |zν(t, x)|2 ≥ 1
λ |z|2 for any (t, x, z) ∈
[0, T ] × R × R.
3. There exists a constant L such that
|m(t, x) − m(t, x′)| + |ν(t, x) − ν(t, x′)| ≤ L|x − x′|.
Under Assumption 4.2, SDE (4.1) admits a unique strong solution. It is noted that the log
return process R does not appear in the BSDE system (3.1), which motivates us to consider the
solution adapted to the filtration FB ̄. We can therefore conjecture that Z1 = Z ̃1 = 0 and aim to
find the solution to the following Markovian BSDE system.

            
            
dXs = m(s, Xs)dt + ν(s, Xs)dB ̄s,
dYs = ζ
2 |ρZs + uˆs|2 + ζ(1 − ρ2)
2 |Zs|2 − a(s, πˆs) ds + ZsdB ̄s,
dY ̃s = −a(s, πˆs)ds + Z ̃sdB ̄s,
YT = 0, Y ̃T = 0,
uˆ = e−ζY θ − ζe−ζY ρZ − γρZ ̃
(ζ + 1)e−ζY + γ , πˆ = σ−1uˆ, a(·, π) := r + (μ − r)π − 1
2 |σπ|2.
(4.2)
4.1 Existence of time-consistent equilibrium when ρ = 0
In this subsection, we consider the case ρ = 0. Then it follows that
πˆt = σ−1
t uˆt = σ−1
t
e−ζYt θ(t, Xt)
(ζ + 1)e−ζYt + γ , (4.3)
and the BSDE system (3.1) can be decoupled as

    
    
dXs = m(s, Xs)dt + ν(s, Xs)dB ̄s,
dYs = ζ + 1
2 uˆ2
s+ζ
2 |Zs|2 − r(s, Xs) − θ(s, Xs)uˆs ds + ZsdB ̄s,
X0 = x, YT = 0.
(4.4)
17

and



dY ̃s = −r(s, Xs) − θ(s, Xs)uˆs + 1
2 |uˆt|2ds + Z ̃sdB ̄s,
Y ̃T = 0.
(4.5)
It is straightforward to see that one can first solve equation (4.4) and then substitute this solution
into equation (4.5) to obtain the solution for the entire system. Regarding the existence of the
solution to BSDE (4.4), we verify conditions (2A3), (3A2), (2A1), and (4A2) and apply Theorem
4.3 in Fan (2016), which leads to the following existence and uniqueness result.
Proposition 4.3. If Assumptions 4.1 and 4.2 hold, the BSDE (4.4) has a unique solution (Y, Z) ∈
S∞ × L2
F(0, T ; R).
By Proposition 4.3, the candidate equilibrium strategy defined in (4.3) satisfies πˆ ∈ S∞. There
fore, BSDE (4.5) admits a unique solution (Y ̃ , Z ̃) ∈ S∞ × L2
F(0, T ; R) and Y ̃ is given by
Y ̃t = Et
ZT
t
r(s, Xs) + θ(s, Xs)uˆs − 1
2 |uˆs|2 ds .
In the following, we establish that πˆ is an equilibrium strategy by means of BSDEs (4.5) and (4.3),
along with Lemma 3.4. This result is stated in the theorem below.
Theorem 4.4. When ρ = 0, suppose that Assumptions 4.1 and 4.2 hold, and let Y denote the
bounded solution to BSDE (4.4). Then the strategy defined in (4.3) is an equilibrium strategy.
Proof. For notational simplicity, let Rˆ = Rπˆ denote the log-return process associated with πˆ.
Moreover, we use πt,ε and ξt,ε to represent the perturbation strategy πˆt,ε,η and the corresponding
difference process for any fixed t ∈ [0, T ), η ∈ L∞
Ft(Ω, Rd) and ε ∈ (0, T − t).
We first verify that πˆ is an admissible strategy. Since πˆ is bounded, it follows that πˆ ∈ HBMO.
It is straightforward to show that
E exp c
ZT
t
|σsπˆs|dBs ≤ 2 exp c2
2 ∥σπˆ∥2
∞(T − t) , ∀c > 0.
Combining this with RˆT − Rˆt = R T
t rs + (μs − rs)πˆs − 1
2 |σsπˆs|2 ds + σsπˆsdBs, we conclude that
Et exp −pζ(Rπˆ
T − Rtπˆ) < ∞, a.s. for any p > 1. Thus, πˆ is an admissible strategy.
Next, we show that πˆ is indeed an equilibrium strategy. By Lemma 3.4 and Z1 = Z ̃1 = 0, it
holds that
J (t, Rˆt, πt,ε) − J (t, Rt, πˆ) ≤Et
Z t+ε
t
e−ζ(Rˆs+Ys−Rˆt)(a(s, πt,ε
s ) − a(s, πˆs) − ζσsπˆs · σsη)ds
+γ
2 Et
Z t+ε
t
((σsπˆs)2 − (σsπt,ε
s )2)ds
=Et
Z t+ε
t
e−ζ(Rˆs+Ys−Rˆt) (μs − rs)η − 1
2 σ2
s η2 − (ζ + 1)σ2
s πˆsη ds
−γ
2 Et
Z t+ε
t
σsη (2σsπˆs + σsη) ds .
18

We first prove that
εli→m0
1
ε Et
Z t+ε
t
e−ζ(Ys+Rˆs−Rˆt) − e−ζYs (μs − rs)η − 1
2 σ2
s η2 − (ζ + 1)σ2
s πˆsη ds = 0, a.s..
Since r, μ, σ, πˆ, and Y are all bounded, it suffices to show that
εli→m0
1
ε Et
Z t+ε
t
e−ζ(Rˆs−Rˆt) − 1 ds = 0, a.s.,
which follows immediately from the fact that {e−ζ(Rˆs−Rˆt)}s∈[t,T ] ∈ Lp
F (Ω; (C[t, T ]; R)). Therefore
lim sup
ε→0
1
ε J (t, Rˆt, πt,ε) − J (t, Rˆt, πˆ)
≤ lim sup
ε→0
1
ε Et
Z t+ε
t
e−ζYs (μs − rs)η − 1
2 σ2
s η2 − (ζ + 1)σsηuˆs) − γ
2 σ2
s η2 − γσsηuˆs ds
= lim sup
ε→0
1
ε Et
Z t+ε
t
−1
2 e−ζYs + γ (σsη)2 + σsη
h
e−ζYs (θs − (ζ + 1)uˆs) − γuˆs
i
ds .
Substituting uˆ = e−ζY θ
(ζ+1)e−ζY +γ into the above expression yields that
lim sup
ε→0
1
ε J (t, Rˆt, πt,ε) − J (t, Rˆt, πˆ) ≤ lim sup
ε→0
1
ε Et
Z t+ε
t
−1
2 e−ζYs + γ (σsη)2 ds ≤ 0.
Therefore, πˆ is a time-consistent equilibrium strategy.
4.2 Existence of time-consistent equilibrium under trading constraint
In this subsection, we assume that the trading strategy πt takes values in a bounded convex Borel
set A. Consequently, ut = σtπt is also bounded. To be precise, we introduce the following definition.
Definition 4.5 ((Admissible trading strategy with constraint A)). A trading strategy π is said to
be admissible with constraint A if πt ∈ A a.s. for any t ∈ [0, T ]. We denote by ΠA the set of all
admissible trading strategies with constraint A.
As in the proof of Theorem 4.4, it is straightforward that ΠA ⊆ Π0. Following Yan and Yong
(2019) and Liang et al. (2025), we next introduce the modified definitions of the perturbation
strategy and the equilibrium strategy.
Definition 4.6. A strategy πˆ ∈ ΠA is called an equilibrium strategy if
lim sup
ε→0
J (t, πˆt,ε,a) − J (t, πˆ)
ε ≤ 0 a.s.,
for any t ∈ [0, T ) and any a ∈ L∞
Ft(Ω, A) . Here
πˆt,ε,a =



a, t ∈ [t, t + ε),
πˆ, t ∈ [t + ε, T ],
denotes the modified perturbation strategy.
19

Remark 4.7. In this modified definition, instead of adding an Ft-measurable random variable η
to the original strategy πˆ, we perturb the strategy by directly replacing it with an Ft-measurable
random variable a taking values in A. This modification is made because requiring the perturbed
strategy to remain admissible, i.e., πs + η ∈ A for s ∈ [t, t + ε), would impose a strong restriction
on η, possibly making it impossible to perturb many strategies.
We first introduce a lemma for the projection onto a convex closed set.
Lemma 4.8. Let U ⊂ Rn be a convex and closed set. Fix w ∈ Rn, then we have the following two
assertions: (i) if u = PU (w) is the orthogonal projection of w onto U . Let h ∈ Rn satisfy u+h ∈ U .
Then for any α > 0
α(w − u) − h ≥ α|w − u|, (4.6)
and equality can occur only in the trivial case h = 0; (ii) if U ∋ u ̸= PU (w), then for any α > 0,
there exists an h such that u + h ∈ U and
α(w − u) − h < α|w − u|.
Moreover, h can be chosen to be λ (PU (w) − u) for any λ ∈ (0, 2α).
Proof. We first prove assertion (i). By the characterization of the orthogonal projection onto a
convex set, for every z ∈ U , we have
⟨w − u, z − u⟩ ≤ 0.
Choosing z = u + h ∈ U yields
⟨w − u, h⟩ ≤ 0. (4.7)
It then follows that
α(w − u) − h 2 = α2|w − u|2 + |h|2 − 2α⟨w − u, h⟩ ≥ α2|w − u|2.
Taking the square root yields the desired inequality (4.6). Moreover, the equality requires both
⟨w − u, h⟩ = 0 and |h|2 = 0, which implies that h = 0.
Next we verify assertion (ii). As u is not the projection, the vector v = PU (w) satisfies that
⟨w − u, v − u⟩ ≥ |v − u|2 > 0.
Let h = λ(v − u), λ ∈ (0, 1] ,then
α(w − u) − h < α|w − u| ⇐⇒ 2α⟨w − u, h⟩ > |h|2 ⇐= 0 < λ < 2α.
Since α > 0, the above inequality holds for sufficiently small λ > 0. By the convexity of U ,
u + h ∈ U , which completes the proof.
20

Remark 4.9. In this lemma, we consider a convex and closed set in Rn for any positive integer
n, rather than in R, thereby showing that our subsequent proof remains valid in the presence of
multiple risky assets.
By an analogous argument in section 3, we have the following necessary condition for an equi
librium strategy.
Theorem 4.10 (Necessary condition). If πˆ is an equilibrium strategy, then then there exist (Y, Y ̃ )
and (Z1, Z, Z ̃1, Z ̃) satisfy the same condition in Theorem 3.1 and the BSDE system (3.1) and πˆ
satisfies
πˆ = σ−1PσA
e−ζY θ − ζe−ζY (Z1 + ρZ) − γ(Z ̃1 + ρZ ̃)
(ζ + 1)e−ζY + γ
!
, t ∈ [0, T ). (4.8)
Proof. The derivation here is similar to that in Theorem 3.1, we only give a sketch. Let ∆ = σ(a−πˆ),
by the same argument in Lemma 3.4, we can obtain
J (t, Rˆt, πt,ε,a) − J (t, Rt, πˆ)
=Et
Z t+ε
t
e−ζ(Rˆs+Ys−Rˆt)(a(s, a) − a(s, πˆs) − ζσsπˆs · ∆s − ζ∆s Z ̃1
s + ρZs )ds
− ζEt
Z1
0
e−ζ(RˆT +λξt,ε,a
T −Rˆt)(1 − λ)dλ|ξt,ε,a
T |2
+γ
2 Et
Z t+ε
t
(σsπˆs + Z ̃1
s + ρZ ̃s)2 − (σsa + Z ̃1
s + ρZ ̃s)2 ds .
(4.9)
Moreover, by the same argument in Lemma 3.5 and Lemma 3.6, there exists a sequence {εtn} and
a fixed constant C independent of a such that for a.e. t ∈ [0, T ),
nli→m∞
1
εtn
Et
"
Z t+εtn
t
e−ζ(Rˆs+Ys−Rˆt) a(s, a) − a(s, πˆs) − ζ(Z1
s + σsπˆs + ρZs) · ∆s ds
#
=e−ζYt θt∆t − 1
2 ∆2
t − σtπt∆t − ζ(Z1
t + σtπˆt + ρZt) · ∆t , a.s.,
nli→m∞
1
εtn
Et
Z1
0
e−ζ(RˆT +λξt,ε,a
T −Rˆt)(1 − λ)dλ|ξt,ε,a
T |2 ≤ C∆2
t , a.s.,
and
nli→m∞
1
εtn
Et
"
Z t+εtn
t
(σsπˆs + Z ̃1
s + ρZ ̃s)2 − (σsa + Z ̃1
s + ρZ ̃s)2 ds
#
=(σtπˆt + Z ̃1
t + ρZ ̃t)2 − (σta + Z ̃1
t + ρZ ̃t)2, a.s..
Then the equilibrium strategy πˆ should satisfy that
− e−ζYt + γ
2 (σta)2 + e−ζYt θt − ζ σtπˆt + Z1
t + ρZt − γ Z ̃1
t + ρZ ̃t σta
≤ − e−ζYt + γ
2 (σtπˆt)2 + e−ζYt θt − ζ σtπˆt + Z1
t + ρZt − γ Z ̃1
t + ρZ ̃t σtπˆt + C∆2
t , a.s..
(4.10)
21

It follows that
− e−ζYt + γ
2 ∆2
t + e−ζYt θt − (ζ + 1)σtπˆt − ζ Z1
t + ρZt − γ Z ̃1
t + ρZ ̃ − γσtπˆt ∆t ≤ 0, a.s..
(4.11)
Suppose, to the contrary, that there exists some a ∈ LFt(Ω, A) such that (4.11) fails to hold. Define
a new admissible strategy aλ = πˆt + λσ−1
t ∆ ∈ A with sufficiently small constant λ ∈ (0, γ
γ+2C ). On
one hand, by (4.10), we have
0 ≥ − e−ζYt + γ
2 (σtaλ)2 + e−ζYt θt − ζ σtπˆt + Z1
t + ρZt − γ Z ̃1
t + ρZ ̃t σtaλ − C|aλ − πˆt|2
+ e−ζYt + γ
2 (σtπˆt)2 − e−ζYt θt − ζ σtπˆt + Z1
t + ρZt − γ Z ̃1
t + ρZ ̃t σtπˆt
=λ − e−ζYt + γ
2 λ∆2
t + e−ζYt (θt − (ζ + 1)σtπˆt − ζρZt) − γρZ ̃ − γσtπˆt ∆t − Cλ∆2
t , a.s..
On the other hand, as λ ∈ (0, γ
γ+2C ) and (4.11) does not hold for a, we have
λ − e−ζYt + γ
2 λ∆2
t + e−ζYt (θt − (ζ + 1)σtπˆt − ζρZt) − γρZ ̃ − γσtπˆt ∆t − Cλ∆2
t
≥λ − e−ζYt + γ
2 ∆2
t + e−ζYt (θt − (ζ + 1)σtπˆt − ζρZt) − γρZ ̃ − γσtπˆt ∆t > 0,
on a set of positive measure, which leads to a contradiction. Therefore, (4.11) must hold for all
a ∈ L∞
Ft(Ω, A). Consequently, we obtain
∆t −
e−ζYt θt − (ζ + 1)σtπˆt − ζ Zt1 + ρZt − γ Z ̃t1 + ρZ ̃ − γσtπˆt
e−ζYt + γ
≥
e−ζYt θt − (ζ + 1)σtπˆt − ζ Zt1 + ρZt − γ Z ̃t1 + ρZ ̃ − γσtπˆt
e−ζYt + γ , a.s..
Take α = (ζ+1)e−ζYt +γ
e−ζYt +γ and w = e−ζY θ−ζe−ζY (Z1+ρZ)−γ(Z ̃1+ρZ ̃)
(ζ+1)e−ζY +γ , the above inequality can be
converted to
|σta − uˆt − αt (wt − uˆt)| ≥ |αt (wt − uˆt)| , a.s..
By Lemma 4.8(ii), if uˆt ̸= PσtA (wt), as αt > 1, we can take λ = 1 and then
|PσtA (wt) − uˆt − αt(wt − uˆt)| < |αt(wt − uˆt)| .
Thus we know that uˆ ̸= PσtA (wt) can not be an equilibrium strategy by letting σta = PσtA (wt).
Therefore, (4.8) holds.
22

As R does not appear in the BSDE system, we also assume that Z1 = Z ̃1 = 0

          
          
dXs = m(s, Xs)dt + v(s, Xs)dB ̄s,
dYs = ζ
2 |ρZs + uˆs|2 + ζ(1 − ρ2)
2 |Zs|2 − a(s, πˆs) ds + ZsdB ̄s,
dY ̃s = −a(s, πˆs)ds + Z ̃sdB ̄s,
YT = 0, Y ̃T = 0, uˆ = σπˆ = PσtA
e−ζY θ − ζe−ζY ρZ − γρZ ̃
(ζ + 1)e−ζY + γ
!
.
(4.12)
To establish the existence of the BSDE system, we only need to verify the AB condition and
the BF condition (see their definitions in Appendix B).
AB condition: The generator of Y satisfy that
−r − θuˆ ≤ ζ
2 Z2 + ζρZuˆ − r − θuˆ + ζ + 1
2 uˆ2 ≤ ζ(1 + ρ2)
2 Z2 + 2ζ + 1
2 uˆ2 − r + θ|uˆ|
The generator of Y ̃ satisfy that
−r − θ2 ≤ −r − θuˆ + 1
2 uˆ2 ≤ 1
2 (uˆ − θ)2
Let ai, i = 1, 2, 3, 4 be (1, 0), (−1, 0), (0, 1)(0, −1). Then ai, i = 1, 2, 3, 4 can positively span
R2 and the generator satisfy the AB condition.
BF condition The generator of Y satisfy that
ζ
2 Z2 + ζρZuˆ − r − θuˆ + ζ + 1
2 uˆ2 ≤ ζ(1 + ρ2)
2 Z2 + k(t),
with k(t) = r(t, Xt) + θ(t, Xt) sup
uˆ∈σtA
|uˆ| + 2ζ+1
2 sup
uˆ∈σtA
|uˆ|2.
Let Cn = sup
t∈[0,T ]
{|θ(t, Xt)| + k(t)} and the generator of Y ̃ satisfy that
| − r − θuˆ + 1
2 uˆ2| ≤ k(t)
Then the BSDE system under the bounded equilibrium strategy admits a locally Holder and BMO
solution (see Theorem 2.14 in Xing and ˇZitkovic ́ (2018)). Moreover, Y and Y ̃ are bounded due to
the terminal condition YT = 0.
Theorem 4.11. Under the trading constraint ut = σtπt ∈ σtA, where A ⊂ R is a bounded closed
convex Borel set, assume that (Y, Y ̃ , Z, Z ̃) is a bounded BMO solution to the BSDE (4.12), then
uˆt = σtπˆt = PσtA
e−ζY θ − ζe−ζY ρZ − γρZ ̃
(ζ + 1)e−ζY + γ
!
(4.13)
is an equilibrium strategy.
23

Proof. It is clear that πˆ ∈ ΠA. We now prove that πˆ is an equilibrium strategy. Fix t ∈ [0, T )
and let a ∈ L∞
Ft(Ω; A); denote the corresponding perturbed strategy by πt,ε. Put ∆s = σs(a − πˆs).
Then, by (4.9), it holds almost surely that
J (t, Rˆt, πt,ε, a) − J (t, Rt, πˆ)
≤Et
Z t+ε
t
e−ζ(Rˆs+Ys−Rˆt)(a(s, a) − a(s, πˆs) − ζσsπˆs · ∆s − ζρ∆sZs)ds
+γ
2 Et
Z t+ε
t
((σsπˆs + ρZ ̃s)2 − (σsa + ρZ ̃s)2)ds
=Et
Z t+ε
t
e−ζ(Rˆs+Ys−Rˆt) θs∆s − 1
2 ∆2
s − (ζ + 1)σsπˆs∆s − ζρ∆sZs ds
−γ
2 Et
Z t+ε
t
∆s 2σsπˆs + 2ρZ ̃s + ∆s ds .
To verify that the candidate strategy is a time-consistent equilibrium, we need to show that
εli→m0
1
ε Et
Z t+ε
t
e−ζ(Ys+Rˆs−Rˆt) − e−ζYs θs∆s − 1
2 ∆2
s − (ζ + 1)σsπˆs∆s − ζρ∆sZs ds = 0.
It suffices to prove that
εli→m0
1
ε Et
Z t+ε
t
e−ζ(Rˆs−Rˆt) − 1 Zs ds = 0, a.s.,
Note that
n
e−ζ(Rˆs−Rˆt)o
s∈[t,T ]
satisfies
d e−ζ(Rˆs−Rˆt) = −ζe−ζ(Rˆs−Rˆt) a(s, πˆs) − ζ
2 σ2
s πˆ2
s ds + σsπˆsdBs .
Because πˆ is bounded, by Theorem 3.4.3 in Zhang (2017) and the same argument of Lemma 2.7,
we deduce that
Et
"
sup
s∈[t,t+ε]
e−ζ(Rˆs−Rˆt) − 1
2
#
≤ CE
"
Z t+ε
t
a(s, πˆs) − ζ
2 σ2
s πˆ2
s ds
2
+
Z t+ε
t
σ2
s πˆ2
s ds
#
≤ Cε.
Moreover, since Z ∈ HBMO, R T
t |Zs|2ds < ∞, a.s. and for fixed t R t+ε
t |Zs|2ds → 0 a.s.. By the
Conditional Dominated Convergence Theorem
Et
Z t+ε
t
|Zs|2ds −→ 0 a.s..
Then
1
ε Et
Z t+ε
t
e−ζ(Rˆs−Rˆt) − 1 Zsds
≤1
ε Et
Z t+ε
t
e−ζ(Rˆs−Rˆt) − 1
2
ds
1 2
Et
Z t+ε
t
Z2
s ds
1 2
≤ √1ε Et
"
sup
s∈[t,t+ε]
e−ζ(Rˆs−Rˆt) − 1
2
#1
2
Et
Z t+ε
t
Z2
s ds
1 2
≤C Et
Z t+ε
t
Z2
s ds
1 2
−→ 0, a.s..
24

Similar to Theorem 4.4, one can derive that
lim sup
ε→0
1
ε J (t, Rˆt, πt,ε) − J (t, Rˆt, πˆ)
≤ lim sup
ε→0
1
ε Et
Z t+ε
t
e−ζYs θs∆s − 1
2 ∆2
s − (ζ + 1)σsηuˆs − ζρ∆sZs
−γ
2 ∆2
s − γ∆s(uˆs + ρZ ̃s)ds
i
= lim sup
ε→0
1
ε Et
Z t+ε
t
−1
2 e−ζYs + γ (∆s)2
+∆s
h
e−ζYs (θs − (ζ + 1)uˆs − ζρZs) − γ(uˆs + ρZ ̃s)
i
ds
i
.
As σ > 0 and σsA is a closed and convex set, by Lemma 4.8(i), for any ∆s such that uˆs + ∆s ∈ σsA,
it holds that (ζ + 1)e−Ys + γ
e−Ys + γ
e−ζYs θs − ζe−ζYs ρZs − γρZ ̃s
(ζ + 1)e−Ys + γ − uˆs
!
− ∆s
≥ (ζ + 1)e−Ys + γ
e−Ys + γ
e−ζYs θs − ζe−ζYs ρZs − γρZ ̃s
(ζ + 1)e−Ys + γ − uˆs
!
.
Thus lim sup
ε→0
1
ε J(t, Rˆt, πt,ε,a) − J (t, Rˆt, πˆ) ≤ 0 , a.s., which completes the proof.
5 Approximate Time-Consistent Equilibrium for Small ρ ̸= 0
The goal of this section is to construct and verify an approximate time-consistent equilibrium in
the general case with small ρ ̸= 0, where the approximation error can be shown to be the order
O(ρ2). Let us first introduce the definition of an approximate time-consistent equilibrium strategy.
Definition 5.1. For πˆ ∈ Π0, πˆ is called an approximate time-consistent equilibrium strategy with
an approximation error M if
lim sup
ε→0
J (t, πˆt,ε,η) − J (t, πˆ)
ε ≤ M a.s.,
for any t ∈ [0, T ) and any η ∈ L∞
Ft(Ω, R). Moreover, if M = O(|ρ|α), we say that the approximation
error5 is of the order O(|ρ|α).
Recall that for ρ = 0, the equilibrium strategy follows the form of uˆ = e−ζY θ
(ζ+1)e−ζY +γ , where
Y is the solution to the BSDE (4.4). For the case ρ ̸= 0, we consider a trading strategy of the
same structure, except that the process Y is replaced by the solution Y ρ to the following BSDE,
5The order of the approximation error effectively characterizes the convergence rate of the equilibrium approxi
mation as ρ tends to 0.
25

Specifically, let Y ρ and Y ̃ ρ satisfy

         
         
dXs = m(s, Xs)dt + v(s, Xs)dB ̄s,
dY ρ
s= ζ
2 |ρZρ
s + uρ
s|2 + ζ(1 − ρ2)
2 |Zρ
s |2 − a(s, πρ
s ) ds + Zρ
s dB ̄s,
dY ̃ ρ
s = −a(s, πρ
s )ds + Z ̃ρ
s dB ̄s,
uρ = σπρ = e−ζY ρ θ
(ζ + 1)e−ζY ρ + γ , YT = 0, Y ̃T = 0.
(5.1)
Next, we will rigorously verify that the constructed strategy uρ is an approximate time-consistent
equilibrium satisfying Definition 5.1.
Let Rρ
t denote the log return at t under strategy uρ. We first show that the Markovian BSDE
system (5.1) admits a solution such that Y ρ and Zρ are uniformly bounded with bounds independent
of ρ ∈ [−1, 1] To this end, we need to impose an additional assumption as below.
Assumption 5.2. We assume that
1. v is differentiable w.r.t. t, x and vx is uniformly bounded.
2. There exists a positive constant β > 0 such that v, vx, m, r, θ are H ̈older continuous w. r. t
x, t with exponents β, β/2 respectively for any bounded cylinder QT of the layer RT .
By the nonlinear Feynman-Kac formula, if the PDE
Lf = ζρfxvuρ + ζ
2f2
x v2 − r − θuρ + ζ + 1
2 (uρ)2
admits a classical solution with the terminal conditionf (T, x) = 1. Let Yt := f (t, Xt) and Zt :=
fx(t, Xt)v(t, Xt). Then (Y, Z) is the solution to our BSDE. This is a cauchy problem and we
introduce the following classical result for the quasi-linear equations with the principal part in
divergence form,
ut − d
dxi
ai(t, x, u, ux) + a(t, x, u, ux) = 0,
with u(0, x) = ψ0(x) in RT = [0, T ] × Rn and
aij(x, t, u, p) ≡ ∂ai(x, t, u, p)
∂pj
, A(x, t, u, p) ≡ a(x, t, u, p) − ∂ai
∂u pi − ∂ai
∂xi
.
Remark 5.3. The existence of solution to the BSDE system (5.1) can be investigated in Xing and
Zˇitkovi ́c (2018) and Fan (2016), in which a BMO solution can be established. However, we require
the boundedness of Z and Z ̃ in our verification theorem (Theorem 5.5). Therefore, we employ the
Feynman–Kac representation and resort to a PDE-based analysis. Specifically, we utilize Theorem
5.4 as a technical tool to derive the desired boundedness.
Theorem 5.4. Suppose that the following conditions hold.
26

a) ψ0(x) ∈ H2+β(Ω) in any Ω ⊂ Rn and maxRn |ψ0(x)| < ∞.
b) For t ∈ (0, T ] and arbitrary x, u, p, we have
μ1ξ2 ≤ aij(t, x, u, p)ξ2 ≤ μ2ξ2, (5.2)
with positive constants μ1 > 0 and μ > 0 and
A(x, t, u, 0)u ≥ −b1u2 − b2, with constants b1, b2 ≥ 0.
c) For any bounded cylinder QT of the layer RT and |u| ≤ M , where M is a constant depending
only on b1, b2 and ψ0, it holds that
n
X
i=1
|ai| + ∂ai
∂u (1 + |p|) +
n
X
i,j=1
∂ai
∂xj
+ |a| ≤ μ(1 + |p|)2.
Moreover, the functions ai(x, t, u, p) and a(x, t, u, p) are continuous, and ai(t, x, u, p) is dif
ferentiable w.r.t. variables x, u, p for each i.
d) For any bounded cylinder QT of the layer RT and |u| ≤ M , |p| ≤ M1, where M1 is a constant
depending only on M, μ, μ1, μ2 and ψ, the function ai, a, ∂ai
∂pj , ∂ai
∂u , and ∂ai
∂xi are continuous func
tions satisfying a H ̈older condition in x, t, u and p with exponents β, β/2, β and β respectively.
Then there exists at least one solution u(x, t) of the Cauchy problem(5.2) in the strip RT that
|u| ≤ M , |ux| ≤ M1 and belongs to H2+β,1+β/2(QT ) for any bounded cylinder QT ⊂ RT . It will be
an element of H2+β,1+β/2(RT ) if it is further assumed that the constants in conditions c)-d) do not
depend on QT .
Proof. The result follows directly from Theorem 6.1 and Theorem 8.1 in Ladyzhenskaia et al.
(1968). The dependence of M and M1 can be found in Theorem 2.9 and (6.10) in Ladyzhenskaia
et al. (1968).
Next, we verify that our equations satisfy these conditions under Assumptions 4.1, 4.2 and 5.2.
We reverse the time and still denote f (T − t, x) by f (t, x) and rewrite the PDE in the divergence
form
ft − d
dx
1
2 v2(t, x)fx + a(t, x, f, fx) = 0, (5.3)
with f (0, x) = 1. Here we suppress the dependence of the functions on (t, x) for notational simplicity
and also denote that
a(t, x, f, p) = −mp + ζρpv e−ζf θ
(ζ + 1)e−ζf + γ + ζ
2 p2v2 − r − θ e−ζf θ
(ζ + 1)e−ζf + γ + e−ζf θ
(ζ + 1)e−ζf + γ
2
+ vvxp,
A(t, x, f, p) = −mp + ζρpv e−ζf θ
(ζ + 1)e−ζf + γ + ζ
2 p2v2 − r − θ e−ζf θ
(ζ + 1)e−ζf + γ + e−ζf θ
(ζ + 1)e−ζf + γ
2
.
27

In our case, ψ0 = 0 and aij = 1
2 v2 where v has positive upper and lower bounds. Let b1 = b2 =
1
2 ||r||∞ + 1
4 ||θ||2∞ , we have
A(t, x, f, 0)f = −r − θ e−ζf θ
(ζ + 1)e−ζf + γ + e−ζf θ
(ζ + 1)e−ζf + γ
2
!
f ≥ −1
2 ||r||∞ + 1
4 ||θ||2
∞ (f 2+1),
and the first two conditions are verified given the differentiability of v. For condition c), we have
|ai| + ∂ai
∂f (1 + |p|) + ∂ai
∂xj
+ |a| = 1
2 v2|p|(1 + |p|) + |vvxp| + |a(t, x, f, p)| ≤ C(1 + |p|2),
as θ, v, vx, m, uρ are bounded independent of ρ and 0 ≤ ρ ≤ 1. We emphasize that C can be
chosen independently of ρ. To verify the final condition in the theorem, we employ a minor result
concerning H ̈older continuous functions. That is, if h1 and h2 are two bounded H ̈older continuous
functions with α1 and α2 being their H ̈older coefficients respectively, then h1h2 is a H ̈older con
tinuous function with H ̈older coefficient min(α1, α2). Then condition d) can be easily verified and
there exists a solution f ∈ C2+β,1+β/2(QT ) for any bounded cylinder QT of the layer RT . Moreover,
as b1, b2, μ, μ1, μ2 are independent of ρ, the constant M and M1 also do not depend on ρ. Then
Zρ = mfx is bounded independently of ρ.
For the same reason, we seek the solution to
Lg = −r − θ e−ζf θ
(ζ + 1)e−ζf + γ + 1
2
e−ζf θ
(ζ + 1)e−ζf + γ
2
,
with the terminal condition g(T, x) = 0. Here f is the solution to equation (5.3). By the same
argument, Z ̃ρ is also bounded independently of ρ.
Next, we turn to show that πρ is an approximate time-consistent equilibrium. Thanks to the
concavity of the utility function, it holds that
J (t, Rρ
t , πt,ε) − J (t, Rρ
t , πρ) ≤ eRρ
t Et
h
U ′(Rρ
T )ξt,ε
T
i
+γ
2 Var(Rρ
T ) − Var(Rt,ε
T)
Here, we use πt,ε = πρ + η1s∈[t,t+ε) to denote the perturbation strategy and let ξt,ε be the resulting
difference process for any η ∈ L∞
Ft(Ω; R) and we shall omit the dependence on ρ and η for simplicity.
Theorem 5.5. Under Assumptions 4.1, 4.2, 5.2, the strategy πρ is admissible for any fixed ρ ∈
[0, 1]. Moreover, πρ is an approximate time-consistent equilibrium with the approximate error of
the order O(ρ2) such that for any t ∈ [0, T ] and any fixed η ∈ L∞
Ft (Ω; R),
lim sup
ε→0
1
ε J(t, Rρ
t , πt,ε) − J (t, Rρ
t , πρ) ≤ Cρ2.
Here C is a positive constant independent of t, η and ρ.
Proof. As πρ is a bounded strategy, it follows from the same arguments for Theorem 4.4 that πρ
is an admissible strategy. We next show that πρ is an approximate Nash equilibrium strategy. Fix
28

t ∈ [0, T ) and η ∈ L∞
Ft(Ω; R) and use πt,ε to denote the perturbed strategy. By Lemma 3.4 and the
same argument in Theorem 4.11, it holds that, a.s.,
J (t, Rρ
t , πt,ε) − J (t, Rρ
t , πρ)
≤Et
Z t+ε
t
e−ζY ρ
s (μs − rs)η − 1
2 σ2
s η2 − (ζ + 1)σsηuρ
s − ζρσsηZρ
s ds − γ
2E
h
σsη(2uρ
s + 2ρZ ̃ρ
s + σsη)ds
i
By the same arguments for Theorem 4.4 and Theorem 4.11, we deduce that
εli→m0
1
ε Et
Z t+ε
t
e−ζ(Y ρ
s +Rρ
s −Rρ
t ) − e−ζY ρ
s (μs − rs)η − 1
2 σ2
s η2 − (ζ + 1)σ2
s πρ
s η − ζρσsηZρ
s ds = 0, a.s..
Consequently, it holds that
lim sup
ε→0
1
ε J(t, Rρ
t , πt,ε) − J (t, Rρ
t , πρ)
≤ lim sup
ε→0
1
ε Et
Z t+ε
t
e−ζYsρ (μs − rs)η − 1
2 σ2
s η2 − (ζ + 1)σsηuρ
s − ζρσsηZρ
s
−γ
2 σ2
s η2 − γσsη(uρ
s + ρZ ̃ρ
s ) ds
= lim sup
ε→0
1
ε Et
Z t+ε
t
−1
2 e−ζYsρ + γ (σsη)2 − σsη
h
ζe−ζYsρ ρZρ
s + γρZ ̃ρ
s
i
ds
≤ lim sup
ε→0
1
ε Et
"
Z t+ε
t
(ζe−ζYsρ Zsρ + γZ ̃sρ)2
2(e−ζYsρ + γ) ds
#
ρ2 ≤ Cρ2.
Here C is a constant independent of ρ and t. Thus πρ = σ−1 e−ζY ρθ
(ζ+1)e−ζY ρ +γ is an approximate
time-consistent equilibrium with the desired approximation error Cρ2.
6 Numerical Examples
In this section, we present some numerical studies on the equilibrium strategy in the incomplete
factor market model by employing some deep learning algorithms developed in E et al. (2017) and
Han et al. (2018) to our BSDE systems (4.4), (4.12), and (5.1). In particular, to fulfill our model
assumptions, we consider a truncated time-varying Gaussian mean-return model in which the stock
price process St and the market factor process Xt evolve as
dSt
St
= (r + σ · θ(Xt))dt + σdBt,
dXt = λ(−10000 ∨ (X ̄ − Xt) ∧ 10000)dt + νdB ̄t.
Here, we choose θ(X) := X+ ∧ 10000 to ensure that Assumptions 4.1, 4.2, and 5.2 are satisfied.
Similar to Dai et al. (2021), we fix the parameter values: r = 0.017, σ = 0.15, X0 = X ̄ = 0.273,
λ = 0.27 and ν = 0.065. Moreover, we set ζ = 1, γ = 0.1 and T = 2 for the base model.
We discretize the horizon [0, T ] into time grid 0 = t0 < t1 < · · · < tN = T , where ti = i∆t
29

for i = 0, 1, . . . , N and ∆t = T /N . Henceforth, for notational simplicity, we use the subscript
n to denote the processes evaluated at time tn. The truncated Ornstein–Uhlenbeck process X is
approximated by the Euler scheme:
Xn+1 = Xn + λ(−10000 ∨ (X ̄ − Xn) ∧ 10000)∆t + ν(B ̄n+1 − B ̄n)
for n = 1, · · · , N − 1, with X0 = 0.273. To numerically illustrate our theoreticla results, we trained
three models. For the decoupled BSDE systems (4.4) and (5.1), because the equilibrium strategy
πˆ (for ρ = 0) and the approximate Nash equilibrium strategy πρ both only depend on the process
Y , we consider the discretized form of Y in each case, respectively:
Yn+1 = Yn + ζ
2 |uˆs|2 + ζ
2 |Zn|2 − a(tn, πˆn) ∆t + Zn(B ̄n+1 − B ̄n),
and
Yρ
n+1 = Y ρ
n+ ζ
2 |ρZρ
n + uρ
n|2 + ζ(1 − ρ2)
2 |Zn|2 − a(tn, πρ
n) ∆t + Zn(B ̄n+1 − B ̄n).
We then employ a deep learning approximation for the initial conditions (Y0, Z0) and the sequence
{Zn }N −1
n=1 , using {Xn}N−1
n=0 as inputs. Particularly, we use N − 1 fully connected feedforward neural
networks with bias terms to represent {Zn}N−1
n=1 and two trainable parameters (Y0, Z0) to represent
the initial values of Y and Z at time t0. Motivated by the terminal condition YT = 0, we define
the mean squared loss function as
Loss = E |YN |2 .
For the coupled BSDE system (4.12), we consider the following discretized counterparts:

 
 
Yn+1 = Yn + ζ
2 |ρZn + uˆn|2 + ζ(1 − ρ2)
2 |Zn|2 − a(tn, πˆn) ∆t + Zn(B ̄n+1 − B ̄n),
Y ̃n+1 = Y ̃n − a(tn, πˆn)∆t + Z ̃n(B ̄n+1 − B ̄n).
We adopt a similar neural network structure as above, introducing two additional parameters
(Y ̃0, Z ̃0) to represent the initial values of the second BSDE. Moreover, the loss function is modified
to E
h
Y2
T + Y ̃ 2
T
i
.
Note that each neural network has the same structure: one input layer, two hidden layers, and
one output layer. Both the input and output layers are 1 dimensional, while each hidden layer
has 11 dimensions. We adopt batch normalization immediately after each matrix multiplication
and before applying the ReLU activation function. At each epoch, we use the Adam optimizer
to update the parameters with mini-batches of 512 samples. Figure 1 plots the mean of the loss
function for the model with ρ = 0 in the experiment. It is observed that the average loss decreases
to approximately 3 × 10−5 after 5,000 epochs.6
6Given the small variation range of the learned Yt (see Figure 2), a sufficiently low loss is required for good relative
accuracy. We employ a four-stage linear decay learning rate schedule to balance exploration and convergence: (1)
exploration: 8 × 10−4 → 5 × 10−4; (2) convergence: 5 × 10−4 → 2 × 10−4; (3) fine-tuning: 2 × 10−4 → 5 × 10−5; (4)
terminal reinforcement: 5 × 10−5 → 1 × 10−5.
30

Figure 1: The training loss function of an experiment with ρ = 0.
Figure 2: A sample trajectory of Y , πˆt and Xt with ρ = 0
31

Figure 2 presents a sample trajectory of the learned solution Yt, the associated equilibrium
strategy πˆt and the factor process Xt. It is observed that the sample path of Y exhibit an overall
downward trend over time. In our framework, the process Y satisfies
Ys = − 1
ζ log(e−ζYs ) = − 1
ζ log Es
h
e−ζ(RT −Rs)i
= −1
ζ log (−Es [U (RT − Rs)]) = − 1
ζ log Es
1
ζ U ′(RT − Rs) .
Intuitively, Es [U (RT − Rs)] decreases as time evolves, leading to a decrease in Ys. Therefore,
Es [U ′(RT − Rs)] increases as Ys declines. As the investment horizon approaches, the expected
marginal utility rises; consequently, the investor becomes more inclined to invest. This also explains
why the equilibrium strategy πˆ in the mean–variance problem in Dai et al. (2021) remains constant
when ρ = 0, regardless of the volatility of the factor Xt, since the expected marginal utility is
constant in that case.
Figure 3: Plots of the mean of the equilibrium strategy πˆ of 1000 trajectories under different γ (left
panel) and different ζ (right panel) with ρ = 0.
Figure 3 plots the mean of the strategy πˆ using 1000 trajectories under different values of
γ and ζ. As illustrated, a higher γ corresponds to a smaller investment proportion πˆ, which is
intuitively reasonable. This behavior reflects that a larger γ indicates the agent places a higher
weight on the variance term, leading the investor to favor stability over high returns. Moreover,
a higher ζ also leads to a smaller investment proportion πˆ, which is also intuitively reasonable
as γ represents the constant risk aversion in the CARA utility function. Figure 4 compares the
conditional variance and expected utility under the equilibrium strategy πˆ in our model with ρ = 0
and the corresponding strategy in the same market setting where the agent ignores the variance
32

Figure 4: Comparison of conditional variance and conditional expected utility: our model with
different γ vs. model without variance term
term. The optimal strategy in this case can be obtained by setting γ = 0:
π = σ−1 · θ(Xt)
2.
We then simulate 1,000 trajectories of the log-return process under each strategy and compute the
sample mean and variance of RT − Rt at any time t = n∆t, n = 0, 1, 2, . . . , N . It can be observed
that, by incorporating the variance term in the t-functional, our equilibrium strategy reduces the
conditional variance at the cost of a very small decrease in conditional expected utility.
Figure 5: The mean of πˆt and Yt under trading constraint with different ρ.
Figure 5 illustrates the equilibrium strategies with trading constraints A = [−10000, 10000]
and negative correlations (ρ = −0.31, −0.62, −0.93) alongside the equilibrium strategy with ρ = 0.
33

Although the differences in Yt are small, there is a clear gap between the strategies. The constrained
cases with negative ρ exhibit higher investment levels. Furthermore, the investment decreases as
the terminal time approaches, which is consistent with the results in Dai et al. (2021).
Time Approximation (πˆρ) Constraint (πˆ) Relative Error (‰)
0.0 -0.959920 -0.960158 0.248‰
0.5 -0.968967 -0.969083 0.121‰
1.0 -0.977834 -0.977824 -0.010‰
1.5 -0.990868 -0.990840 -0.028‰
2.0 -1.000000 -1.000000 -0.000‰
Table 1: Comparison of Approximation and Constrained Equilibrium Strategies
Table 1 compares the approximate Nash equilibrium strategy πˆρ with the equilibrium strategy
πˆ under a trading constraint at five discrete time point (t = 0.0, 0.5, 1.0, 1.5, 2.0) with ρ = −0.31
and γ = 1 fixed7. The last column reports the relative errors in per mille (‰). The results show
that the discrepancies between the two strategies are negligible, and the relative errors remain
extremely small across all time points. Furthermore, as t → T , the relative error exhibits a slightly
decreasing trend. This indicates that the expected payoff generated by the approximate Nash
equilibrium strategy closely matches that of the true constrained equilibrium.
Acknowledgements: Zongxia Liang is supported by the National Natural Science Foundation of
China under grant no. 12271290. Sheng Wang acknowledges Professor Ka Chun Cheung and the
financial supports as a postdoctoral fellow from Department of Statistics and Actuarial Science,
School of Computing and Data Science, The University of Hong Kong. Part of this work was com
pleted in 2024, when Sheng Wang was a visiting student (research assistant) under the supervision
of Professor Xiang Yu. He acknowledges the financial support under the Hong Kong Polytechnic
University research grant under no. P0045654. Xiang Yu is supported by the Hong Kong RGC
General Research Fund (GRF) under grant no. 15211524, the Hong Kong Polytechnic University
research grant under no. P0045654 and the Research Centre for Quantitative Finance at the Hong
Kong Polytechnic University under grant no. P0042708.
References
S. Basak and G. Chabakauri. Dynamic Mean-Variance Asset Allocation. The Review of Financial Studies,
23(8):2970–3016, 2010.
7In this case, since the loss from the variance term is relatively small, we use γ = 1 instead of 0.1 to make the
numerical results more intuitive.
34

S. Basak and A. Shapiro. Value-at-risk-based risk management: Optimal policies and asset prices. The
Review of Financial Studies, 14(2):371–405, 2001.
A. Bensoussan, S. C. Hoe, J. Kim, and Z. Yan. A risk extended version of merton’s optimal consumption
and portfolio selection. Operations Research, 70(2):815–829, 2022.
T. Bj ̈ork, A. Murgoci, and X. Y. Zhou. Mean–variance portfolio optimization with state-dependent risk
aversion. Mathematical Finance, 24(1):1–24, 2014.
M. Dai, H. Jin, S. Kou, and Y. Xu. A Dynamic Mean-Variance Analysis for Log Returns. Management
Science, 67(2):1093–1108, 2021.
W. E, J. Han, and A. Jentzen. Deep Learning-Based Numerical Methods for High-Dimensional Parabolic
Partial Differential Equations and Backward Stochastic Differential Equations. Communications in Math
ematics and Statistics, 5(4):349–380, 2017.
I. Ekeland and A. Lazrak. Being serious about non-commitment: subgame perfect equilibrium in continuous
time, 2006. URL https://arxiv.org/abs/math/0604264.
I. Ekeland and T. A. Pirvu. Investment and consumption without commitment. Mathematics and Financial
Economics, 2(1):57–86, 07 2008. ISSN 1862-9660.
S. Fan. Bounded solutions, Lp (p > 1) solutions and L1 solutions for one dimensional bsdes under general
assumptions. Stochastic Processes and their Applications, 126(5):1511–1552, 2016.
S. Fan, Y. Hu, and S. Tang. Multi-dimensional backward stochastic differential equations of diagonally
quadratic generators: The general result. Journal of Differential Equations, 368:105–140, 2023.
J.-W. Gu, S. Si, and H. Zheng. Constrained Utility Deviation-Risk Optimization and Time-Consistent HJB
Equation. SIAM Journal on Control and Optimization, 58(2):866–894, 2020.
G. Guan, J. Hu, and Z. Liang. N-player and mean field games among fund managers considering excess
logarithmic returns. Annals of Operations Research, 349(3):1663–1691, 2025.
Y. Hamaguchi. Time-inconsistent consumption-investment problems in incomplete markets under general
discount functions. SIAM Journal on Control and Optimization, 59(3):2121–2146, 2021.
J. Han, A. Jentzen, and W. E. Solving high-dimensional partial differential equations using deep learning.
Proceedings of the National Academy of Sciences, 115(34):8505–8510, 2018.
Y. Hu and S. Tang. Multi-dimensional backward stochastic differential equations of diagonally quadratic
generators. Stochastic Processes and their Applications, 126(4):1066–1086, 2016.
Y. Hu, H. Jin, and X. Y. Zhou. Time-Inconsistent Stochastic Linear–Quadratic Control. SIAM Journal on
Control and Optimization, 50(3):1548–1572, 2012.
Y. Hu, H. Jin, and X. Y. Zhou. Time-inconsistent stochastic linear-quadratic control: characterization and
uniqueness of equilibrium. SIAM J. Control Optim., 55(2):1261–1279, 2017.
J. Jackson. The reverse h ̈older inequality for matrix-valued stochastic exponentials and applications to
quadratic bsde systems. Stochastic Processes and their Applications, 160:1–32, 2023.
J. Jackson and G. ˇZitkovic ́. Existence and uniqueness for non-markovian triangular quadratic bsdes. SIAM
Journal on Control and Optimization, 60(3):1642–1666, 2022.
N. Kazamaki. Continuous Exponential Martingales and BMO. Number v.1579 in Lecture Notes in Mathe
matics Ser. Springer Berlin / Heidelberg, Berlin, Heidelberg, 1994.
35

O. A. Ladyzhenskaia, V. A. Solonnikov, and N. N. Ural’tseva. Linear and quasi-linear equations of parabolic
type, volume 23. American Mathematical Soc., 1968.
Z. Liang, S. Wang, and J. Xia. An integral equation in portfolio selection with time-inconsistent preferences.
SIAM Journal on Financial Mathematics, 16(1):SC12–SC23, 2025.
P. Luo and L. Tangpi. Solvability of coupled fbsdes with diagonally quadratic generators. Stochastics and
Dynamics, 17(06):1750043, 2017.
H. Markowitz. Portfolio selection. The Journal of Finance, 7(1):77–91, 1952.
R. C. Merton. Lifetime portfolio selection under uncertainty: The continuous-time case. The Review of
Economics and Statistics, 51(3):247–257, 1969.
R. C. Merton. Optimum consumption and portfolio rules in a continuous-time model. Journal of Economic
Theory, 3(4):373–413, 1971.
J. Peng, P. Wei, and Z. Q. Xu. Relative growth rate optimization under behavioral criterion. SIAM Journal
on Financial Mathematics, 14(4):1140–1174, 2023.
R. H. Strotz. Myopia and inconsistency in dynamic utility maximization. The Review of Economic Studies,
23(3):165–180, 1955.
Y. Wang, J. Liu, A. Bensoussan, K.-F. C. Yiu, and J. Wei. On stochastic control problems with higher-order
moments. SIAM Journal on Control and Optimization, 63(3):1560–1589, 2025.
K. C. Wong, S. C. P. Yam, and H. Zheng. Utility-deviation-risk portfolio selection. SIAM Journal on Control
and Optimization, 55(3):1819–1861, 2017.
H. Xing and G. Zˇitkovic ́. A class of globally solvable Markovian quadratic BSDE systems and applications.
The Annals of Probability, 46(1), 2018.
W. Yan and J. Yong. Time-inconsistent optimal control problems and related issues. In Modeling, stochastic
control, optimization, and applications, pages 533–569. Springer, 2019.
J. Zhang. Backward Stochastic Differential Equations. Probability Theory and Stochastic Modelling. Springer
New York, New York, NY, 2017.
A The Energy Inequality and the John-Nirenberg Inequality
For the reader’s convenience, we collect below the energy inequality and the John-Nirenberg in
equality (see Kazamaki (1994) and Zhang (2017)).
Lemma A.1. Assume that Z ∈ HBMO. For each integer n ≥ 1, it holds that
E
"
ZT
0
Z2
s ds
n
#
≤ n!∥Z∥2n
BMO.
Moreover, the conditional version of the energy inequality also holds that, for any stopping time τ ,
Eτ
"
ZT
τ
Z2
s ds
n
#
≤ n!∥Z∥2n
BMO, a.s..
If further ∥Z∥BMO < 1, we have the John-Nirenberg inequality.
36

Lemma A.2. If ∥Z∥BMO < 1, for every stopping time τ
Eτ exp
ZT
τ
Z2
s ds ≤ 1
1 − ∥Z∥2
BMO
, a.s..
B Sufficient Conditions for the Existence of Solution to BSDEs
For the reader’s convenience, we present a sufficient condition in Xing and ˇZitkovic ́ (2018) for the
existence of a solution to the following BSDE system.
dYt = −f (t, Xt, Yt, Zt) dt + Ztσ(t, Xt) dWt, YT = g(XT ), (B.1)
where f : [0, T ] × Rd × RN × RN×d → RN , g : Rd → RN are Borel functions. We first introduce
two structural conditions on the generator f that appear in the theorem.
Definition B.1 (A priori boundedness (AB) condition). We say that a function
f : [0, T ] × Rd × R × RN×d → RN
satisfies the condition AB if there exist a deterministic function l ∈ L1([0, T ]) and a set of vectors
a1, . . . , aK ∈ RN positively spanning RN , such that
a⊤
k f (t, x, y, z) ≤ l(t) + 1
2 |a⊤
k z|2, for all (t, x, y, z) and k = 1, . . . , K. (B.2)
We say that f satisfies the weak AB condition (short as (wAB)) if there exist Borel functions
Lk : [0, T ] × Rd × RN×d → Rd, k = 1, . . . , K,
such that |Lk(t, x, z)| ≤ C(1 + |z|) for some constant C, and
a⊤
k f (t, x, y, z) ≤ l(t) + 1
2 |a⊤
k z|2 + a⊤
k z Lk(t, x, z), for all (t, x, y, z) and k = 1, . . . , K. (B.3)
Remark B.2. A set of nonzero vectors a1, . . . , aK in RN (with K > N ) is said to positively span
RN if, for each a ∈ RN , there exist nonnegative constants λ1, . . . , λK such that
λ1a1 + · · · + λK aK = a.
Definition B.3 (The Bensoussan–Frehse (BF) condition). We say that a continuous function
f : [0, T ] × Rd × RN × RN×d → RN
satisfies the BF condition if it admits a decomposition of the form
f (t, x, y, z) = diag(z l(t, x, y, z)) + q(t, x, y, z) + s(t, x, y, z) + k(t, x), (B.4)
37

such that the functions
l : [0, T ] × Rd × RN × RN×d → Rd×N and q, s, k : [0, T ] × Rd × RN × RN×d → RN
fulfill the following conditions: there exist b0 ∈ Rd and two sequences {Cn} and {qn} of positive
constants with qn > 1 + d/2, and a sequence {κn} of functions
κn : [0, ∞) → [0, ∞), lim
w→∞
κn(w)
w2 = 0,
such that for each n ∈ N and any (t, x, y, z) ∈ [0, T ] × Bn(b0) × RN × RN×d, we have
|l(t, x, y, z)| ≤ Cn(1 + |z|), (quadratic-linear)
|qi(t, x, y, z)| ≤ Cn

1 +
i
X
j=1
|z j |2

 , i = 1, . . . , N, (quadratic-triangular)
|s(t, x, y, z)| ≤ κn(|z|), (subquadratic)
k ∈ Lqn([0, T ] × Bn), (z-independent).
In this case, we write f ∈ BF({Cn}, {κn}, {qn}).
Theorem B.4 (Existence under BF + AB conditions). Suppose that f satisfies BF and AB
conditions, and that g ∈ C{αn}
loc,b0 for some b0 and it satisfies lim|x|→∞
|g(x)|
|x|2 = 0. Then the system
(B.1) admits a locally H ̈olderian solution (v, w), that is, v ∈ C{α′n}
loc,b0 for some sequence {α′n} in (0, 1].
When g is bounded, the AB condition can be replaced by wAB condition and (v, w) is a bounded
bmo-solution.
C The Challenge of our BSDE System when ρ ̸= 0
For the general case ρ ̸= 0, we encounter a system of coupled two-dimensional quadratic BSDEs.
Existing results for the existence of solution to the multidimensional BSDEs bifurcate into two
paradigms: fixed-point arguments via contraction mappings (yielding the unique solution) (see Fan
et al. (2023), Luo and Tangpi (2017) and Hu and Tang (2016)) and construction of uniformly
convergent approximants through coefficient regularization (see Xing and ˇZitkovic ́ (2018), Jackson
and ˇZitkovic ́ (2022) and Jackson (2023)). In this section, we explain that these two methods are
not applicable in our setting.
For our coupled BSDE system in (4.2), we can compute the quadratic term of the drift −f1 =
ζ
2 |ρZ + uˆ|2 + ζ(1−ρ2)
2 |Z|2 − a(t, πˆ) w.r.t z and z ̃ as
ζ
2 z2 − ρζz · ζe−ζyρz + γρz ̃
(ζ + 1)e−ζy + γ + ζ + 1
2
ζe−ζyρz + γρz ̃
(ζ + 1)e−ζy + γ
2
38

and the quadratic term of −f2 = −a(t, πˆ) w.r.t. z and z ̃ as
1
2
ζe−ζyρz + γρz ̃
(ζ + 1)e−ζy + γ
2
.
The first approach typically requires a continuity condition on y to guarantee a contraction
mapping that
|fi(t, x, y1, z, z ̃) − fi(t, x, y2, z, z ̃)| ≤ Cφ (y1 ∨ y2) (1 + ||(z, z ̃)||) |y1 − y2|, i = 1, 2.
which is not satisfied in our case as y is coupled with the quadratic term of z, z ̃.
The second approach relies on the AB condition or the wAB condition (see Appendix B) for
the convergence of a subsequence of approximated solutions to the approximated BSDE system.
Specifically, there exist a deterministic function l ∈ L1[0, T ] and a1 · · · ak that positively span RN
such that
a⊤
k f (t, x, y, z) ≤ l(t) + 1
2 |a⊤
k z|2 + a⊤
k z Lk(t, x, z).
In our case, there exists two vectors (−a, b), (c, −d) with a > 0, d > 0 and deterministic
functions l1, l2 ∈ L1[0, T ] such that, for any (t, x, y, z, z ̃),
−af1 + bf2 ≤ l1(t) + 1
2 | − az + bz ̃|2 + (−az + bz ̃)L2(t, x, z, z ̃),
cf1 − df2 ≤ l2(t) + 1
2 | − az + bz ̃|2 + (−az + bz ̃)L2(t, x, z, z ̃).
Here, Li(t, x, z, z ̃) ≤ C(1 + |z| + |z ̃|), i = 1, 2 for a constant C.
If b = 0 (c = 0), the inequality fails to hold as z ̃ (z) → ∞ and z (z ̃) = 0. Now we assume that
b ̸= 0, d ̸= 0 and select z and z ̃ such that az = bz ̃ (cz = dz ̃). We focus on the quadratic terms in
z and z ̃, because if there exist z and z ̃ such that the quadratic term is positive, then by scaling z
and z ̃ proportionally, the inequality is violated. Moreover, we assume that a = d = 1 without loss
of generality. Let y → ∞ and y → −∞, it holds that
ζe−ζyρz + γρz ̃
(ζ + 1)e−ζy + γ −→ ρz ̃, ζe−ζyρz + γρz ̃
(ζ + 1)e−ζy + γ −→ ζρz
ζ + 1.
Substituting it into wAB condition, we obtain
ζ
2 b2 + − ρ2ζ + ρ2
2 b+ ζ+1
2 ρ2 ≤ 0, ζ
2 − ζ2ρ2
2(ζ + 1) b2 − ρ2ζ2
2(ζ + 1)2 b3 ≤ 0. (C.1)
and
1
2 ρ2c2 − c ζ
2 − ρ2ζc + ζ + 1
2 ρ2c2 ≤ 0, ζ2ρ2
2(ζ + 1)2 − c ζ
2 − ζ2ρ2
2(ζ + 1) ≤ 0. (C.2)
39

It then follows from (C.1) that
ρ4(ζ+ 1
2 )2−ζ(ζ+1) ≥ 0, ζ + 1
ζ ≤ (ζ + 1)2
ρζ −(ζ+1) ≤ b ≤
ρ2ζ + ρ2
2+
q
ρ4(ζ + 1
2 )2 − ζ(ζ + 1)
ζ ≤ ζ+1
ζ,
which result in ρ = 1 and b = ζ+1
ζ > 0. Substituting ρ = 1 into (C.2), we get that c > 0 by (C.1).
Consequently, we have
ζ +1
2 c2 − ζ + 1
2 c+ ζ
2 ≥ 0, c ≥ ζ
ζ + 1,
which then imply c ≥ 1.
As we have shown that, for any ai = (m, n) ∈ {a1, · · · , ak} chosen in wAB condition, m and n
must satisfy one of the three conditions
1. m ≥ 0, n ≥ 0.
2. m < 0, n = − ζ+1
ζ m.
3. n < 0, m ≥ n.
Each of the three cases implies that (m, n) · (−1, −1) ≤ 0, as a consequence, {a1, · · · , ak} cannot
positively span R2. Then neither AB condition nor wAB condition holds in our problem.
40

---

## Processing Information

- **Processing Library:** Zotero PDFWorker
- **Processing Date:** 2026-02-10T18:15:52.451Z
- **Text Length:** 80748 characters
- **Success:** Text extraction completed
- **PDF Library Used:** Zotero PDFWorker
- **Pages Processed:** 40 of 40
