# PDF Document: Kuissi-Kamdem - 2025 - Asset-liability management with Epstein-Zin utility$quad$ under stochastic interest rate and unknow.pdf

**File Path:** Kuissi-Kamdem - 2025 - Asset-liability management with Epstein-Zin utility$quad$ under stochastic interest rate and unknow.pdf

**Processed Date:** 2026-02-10T18:16:13.947Z

**File Size:** 499.28 KB

**Total Pages:** 17

**Extracted Pages:** 17

**PDF Library:** Zotero PDFWorker

**Attachment Item ID:** 3481

**Title:** Asset-liability management with Epstein-Zin utility$\quad$ under stochastic interest rate and unknown market price of risk

**Collection:** Large Files > Random Papers

---

## Extracted Text Content

ASSET-LIABILITY MANAGEMENT WITH EPSTEIN-ZIN UTILITY
UNDER STOCHASTIC INTEREST RATE AND UNKNOWN MARKET
PRICE OF RISK
WILFRIED KUISSI-KAMDEM
Abstract. This paper considers a stochastic control problem with Epstein-Zin recursive utility under partial information (unknown market price of risk), in which an investor is constrained to a liability at the end of the investment period. Introducing liabilities is the main novelty of the model and appears for the first time in the literature of recursive utilities. Such constraint leads to a fully coupled forward-backward stochastic differential equation (FBSDE), which wellposedness has not bee-
n addressed in the literature. We derive an explicit solution to the FBSDE, contrasting with the existence and uniqueness results with no explicit expression of the solutions typically found in most related literature. Moreover, under minimal additional assumptions, we obtain the Malliavin differentiability of the solution of the FBSDE. We solve the problem completely and find the expression of the controls and the value function. Finally, we determine the utility loss that investors suffer from i-
gnoring the fact that they can learn about the market price of risk.
1. Introduction
The recent decades have seen the prevalence of asset-liability management (ALM) problems in the financial sector (especially with banks, insurance companies and pension funds). This framework enables institutions to mitigate the risk of failing to meet their financial obligations, particularly under adverse market conditions. Similarly, individual investors aim to determine optimal asset allocation strategies that ensure consistency between assets and liabilities while pursuing their profitability-
 objectives. To this end, they continuously adjust their investment portfolios in response to evolving market dynamics and regulatory requirements (see [14]). However, the literature on ALM problems has so far focused exclusively on either mean-variance criterion or time-additive utilities under full information structure. The key drawback on the use of time-additive utilities is the fact they restrict the coefficient of risk aversion (which measures the desire to smooth consumption across states -
of nature) and the coefficient of intertemporal substitutability, EIS, (which measures the desire to smooth consumption over time) to be the inverse of each other, leading to a vast literature on asset pricing paradoxes (see [21, on pp.227-228]). To resolve these paradoxes, Epstein and Zin [7] introduced the recursive utility. Since then the Epstein-Zin utility has been widely used in a variety of different contexts. However, despite the established and rapid growing literature on consumption and -
portfolio choice problems with recursive utilities, to the best of our knowledge no research has ever solved such problems in presence of liabilities. The present paper starts to bridge this gap by using an extension of a well-known technique proposed by [12] (for time-additive utility) and [21] (for Epstein-Zin utility) to analyse asset-liability management problems with Epstein-Zin preferences under partial information. There is by now ample evidence in the literature that stock returns are pred-
ictable; see [2] for a review. In [20] unobservability of the predictive variables was assumed. Since then this assumption has been widely considered in the literature. However, in contrast to the situation for
2020 Mathematics Subject Classification. 93E11, 93E20, 91G10, 91G20.
Key words and phrases. Consumption-portfolio choice; Epstein-Zin utility with liability; Partial information; Forward-backward stochastic differential equations; Malliavin calculus. This work was supported by a grant from the African Institute for Mathematical Sciences, with financial support from the Government of Canada, provided through Global Affairs Canada, and the International Development Research Centre.
1
arXiv:2511.02158v1 [math.OC] 4 Nov 2025

2 W. KUISSI-KAMDEM
classical time-additive utility preferences (see [8] for a review), there appears to be only few articles on recursive utility maximisation under partial information. Notable rare exceptions are [4, 15] who study an Epstein-Zin utility maximisation under partial information in different settings with infinite time horizon. Hence, without taking any liability into account. The main contributions of this paper can summarised to the following:
1. We solve, for the first time, an Epstein-Zin utility maximisation problem with liability at terminal time; see (2.10). We would like to highlight that the liability may depend on the entire paths of the risky assets. Typical examples of such liabilities are (European option-style) equity-linked securities, convertible bonds, to mention only few. Moreover, we emphasise that even without liability our model is still new in the literature of EpsteinZin utilities under partial information because i-
t incorporates stochastic volatility. 2. We derive explicit solutions for the optimal consumption, portfolio allocations and value function in a framework featuring recursive utility, stochastic interest rates, stochastic volatility, and return predictability driven by an unobserved factor; see Theorem 3.6. Explicit results under partial information with stochastic volatility are rare in general, as they typically require restrictive assumptions on the underlying filtering structure. 3. We determi-
ne the utility loss that investors suffer from ignoring the fact that they can learn about the market price of risk; see Section 4. Following [8], we measure the utility loss in terms of the percentage of the initial wealth (the so-called welfare loss). The numerical results show that the welfare loss is an increasing function of the initial wealth of the investors when liabilities are considered, and is independent (meaning, a constant function) of their initial wealth when liabilities are not ta-
ken into account. Moreover, the risk aversion coefficient has a negative impact on the welfare loss, whereas the EIS coefficient has a positive impact on the welfare loss.
The remainder of the present paper is structured as follows. We introduce the model and formulate the problem in Section 2. In Section 3 we give the main results of this paper. Finally, in Section 4 we determine the utility loss and perform some numerical analysis.
2. Model and problem formulation
We consider a filtered probability space (Ω, F, (Ft)0≤t≤T , P) generated by a standard three dimensional Wiener process W := (W 1, W 2, W 3). The filtration (Ft)0≤t≤T is assumed to satisfy the usual conditions of completeness and right-continuity.
2.1. The financial market. We consider a dynamic financial environment with three traded assets and one non-traded financial index. The traded assets consist of one money market account S0, one stock S and one zero-coupon bond B maturing at time T . The money market account follows
dS0
t = rtS0
t dt, S0
0 > 0, (2.1)
with (rt)t∈[0,T ] being the stochastic short-term interest rate given by an Ornstein-Uhlenbeck process; that is
drt = κr μr − rt dt + σr ρrSdW 1
t+
q
1 − ρ2
rS dW 2
t , (2.2)
with correlation coefficient ρrS ∈ (−1, 1), speed of mean reversion κr, long run mean μr and volatility σr > 0. The zero-coupon bond evolves according to the stochastic differential equation (see [19])
dBt = Bt rt + μB(t) dt + σB(t) ρrSdW 1
t+
q
1 − ρ2
rS dW 2
t , (2.3)
with correlation coefficient ρrS ∈ (−1, 1), excess rerun of the bond μB(t) := φBσB(t) and volatility σB(t) := σr
1−exp(−κr(T −t))
κr . We assume that the investor follows a roll-over strategy for the bond investment and keeps the maturity of the bond in his portfolio constant. This is a common assumption in the literature on portfolio choice with stochastic interest rates; see [8] and reference therein.

ALM WITH EPSTEIN-ZIN RECURSIVE UTILITY UNDER PARTIAL INFORMATION 3
The stock price has dynamics given by
dSt = St rt + βσ(t, rt)Rt dt + σ(t, rt)dW 1
t , S0 > 0, (2.4)
with σ a uniformly positive function and β ̸= 0. (Compare with the setup in [5, 8]). In (2.4), R is an R-valued non-traded financial index which follows a linear mean-reverting dynamics given by
dRt = κR μR − Rt dt + σR ρRSdW 1
t + ρRrdW 2
t+
q
1 − ρ2
RS − ρ2
RrdW 3
t , (2.5)
with correlation coefficients ρRS, ρRr ∈ [−1, 1], speed of mean reversion κR, long run mean μR
and volatility σR > 0. In the sequel, following [8], we assume that ρRr := ρ0−ρrSρRS
√1−ρ2
rS
for ρ0 ∈ R
such that ρ2
RS + ρ2
Rr ∈ [−1, 1]. Hence, the process (Rt)t∈[0,T ] plays the role of the market price of risk. Hence, investors choose the consumption rate ct, t ∈ [0, T ], (according to Ca) and the amounts πtS and πtB to be invested in the stock and in the bond, respectively. For such (c, πS, πB), the wealth process X of the investors with initial endowment x at time 0 evolves according to the stochastic differential equation
dXt = rtXt + πS
t βσ(t, rt)Rt + πB
t φBσB(t) dt + πS
t σ(t, rt) + πB
t σB(t)ρrS dW 1
t
+ πB
t σB(t)
q
1 − ρ2
rS dW 2
t − ctdt. (2.6)
Note that the market is incomplete (the number of traded assets being less than the number of Wiener processes).
2.2. The partial information framework. We assume that the risk premium Rt, t ∈ [0, T ], is not directly observable by the investors. Hence, the investors have no direct information on the return of the stock. The available information flow comes from past realisations/observation of two processes: the stochastic interest rate r and the stock S. We introduce the observation filtration as Fr,S := Fr ∨ FS, with Fr := (Ftr)0≤t≤T and FS := (FtS)0≤t≤T being the natural filtration of r
and S, respectively. We assume that Fr,S is completed with P-null sets and right-continuous. We end this section with the definition of some spaces that are used throughout. Let C be the set of Fr,S-non-negative progressively measurable processes on [0, T ] × Ω. For c ∈ C and t < T , ct denotes the consumption rate at time t and cT represents a lumpsum consumption at the finite time horizon T . Let Lq
P, q ≥ 1, denotes the space of F r,S
T -measurable R-valued random variables X
such that E[|X|q] < ∞. Let Hq
P, q ≥ 1, denotes the space of Fr,S-predictable R-valued processes
(Yt)0≤t≤T such that E[R T
0 |Yt|qdt] < ∞. Let Hq
P, q ≥ 1, denotes the space of Fr,S-predictable
R2-valued processes (Zt)0≤t≤T such that E[(R T
0 |Zt|2dt) q
2 ] < ∞. Note that similar spaces can and will be defined under another probability measure Q, by replacing P with Q in the subscripts of the corresponding spaces, and taking expectations with respect to Q.
2.3. The Epstein-Zin utility maximisation problem with partial information. An agent’s preference over C-valued consumption is given by the Epstein-Zin recursive preference. To describe this preference, let δ > 0 represent the discounting rate, 0 < γ ̸= 1 be the relative risk aversion, and 0 < ψ ̸= 1 be the elasticity of intertemporal substitution coefficient (EIS). Then, the Epstein–Zin aggregator is defined by
f (c, v) := δe−δt c1− 1
ψ
1− 1
ψ
((1 − γ)v)1− 1
θ , with θ := 1 − γ
1− 1
ψ
, (2.7)
and the bequest utility function by h(c) := e−δθT c1−γ
1−γ . Hence, the Epstein-Zin utility over the
consumption stream c ∈ C on a finite time horizon T is a process V c which satisfies
Vc
t =E
h
h(cT ) +
ZT
t
f (cs, V c
s )ds Ft
i
for t ∈ [0, T ]. (2.8)

4 W. KUISSI-KAMDEM
We consider the following parameter configuration:
either γ > 1, ψ > 1 or γψ = 1, γ > 1. (2.9)
Note that the special case of time-additive Merton CRRA utility corresponds to the condition γψ = 1.
Definition 2.1. A consumption stream c ∈ C is said to be admissible if Equation (2.8) admits a unique solution V c within the class of processes of class (D) satisfying (1 − γ)V c > 0. The set of all admissible consumption streams is denoted by Ca.
The set Ca defined in Definition 2.1 aligns with those considered in [16, 11]. All known sufficient conditions for the existence of Epstein–Zin utility over a finite time horizon are summarised in [16, Prop. 2.1], which, in particular, ensures that Ca ̸= ∅. In the present paper, we are interested in the optimal consumption and portfolio choice problem of investors with random liabilities K at terminal time T and recursive preferences of Epstein-Zin type. (Note that K is not necessarily positive). -
Specifically, we consider liabilties at maturity T which may depend on the entire paths of the bond B and the stock S (such as equity-linked securities, convertible bonds, to mention only few). We assume that the investors only observe the stock with the market price of risk remaining unknown. Therefore, we want to find the best strategy (c∗, πS,∗, πB,∗) solution to the optimisation problem
V := sup
(c,πS ,πB )∈A
E
h
h(XT − K) +
ZT
0
f (ct, V c
t )dt
i
, (2.10)
where A is a subset of the set of R3-valued Fr,S-adapted processes. A precise definition of the set A is postponed in Definition 3.2. A key feature of the stochastic optimisation problem (2.10) is that the supremum is taken over strategies adapted to the observation filtration Fr,S, rather than the global filtration F. This places us in the setting of stochastic optimisation under partial information. To address this challenge, we follow the approach of [10] and introduce an auxiliary separated pr-
oblem. In the separated formulation, all state variables are adapted to Fr,S. Establishing this requires tools from stochastic filtering theory, which will be presented in Section 3.1. See [13] for more details on the subject.
3. Main results
3.1. Reduction to the observable filtration. Mathematically the financial market is described in terms of a partially observable triple of processes (R, r, S), where R is called the unobservable signal, and r and S the observation processes. The conditional distribution of R, given the observation filtration, is defined by E Rt |F r,S
t for each t ∈ [0, T ]. Because the conditional distribution of R is Gaussian, it is identified by its conditional expectation (mt)t∈[0,T ] and conditional variance (vt)t∈[0,T ]; that is
mt := E Rt |F r,S
t and vt := E Rt − mt
2 |F r,S
t for t ∈ [0, T ]. (3.1)
Following [8, Appendix A], we obtain the following results.
Proposition 3.1. Let the conditional mean-variance pair (mt, vt)t∈[0,T ] be defined as in (3.1). Then, (mt, vt), t ∈ [0, T ], solves the system
(dmt = κR μR − mt dt + σRρRS + βvt dIt1 + σRρRr − ρrSβ(1 − ρ2
rS )− 1
2 vt dIt2
dvt = σ2
R − 2κRvt − σRρRS + βvt
2 − σRρRr − ρrS β(1 − ρ2
rS )− 1
2 vt
2 dt,
where m0 = E R0 , v0 = E R0 − m0
2 and the R2-valued process I = (It1, It2)t∈[0,T ], called the innovation process, given by
I1
t := W 1
t +β
Zt
0
Rs − ms ds, I2
t := W 2
t − ρrS
(1 − ρ2
rS )1/2 β
Zt
0
Rs − ms ds (3.2)
is a two dimensional Brownian motion under the filtration F and the probability P.

ALM WITH EPSTEIN-ZIN RECURSIVE UTILITY UNDER PARTIAL INFORMATION 5
Proof. The proof follows similar arguments as in the proof of proposition 1 in [8] for σλ, κλ, ρSλ, ρˆλ, ρˆλP and ρˆλβ therein substituted by 0, 0, 0, 1, 0 and 0, respectively. □
Using the definition of the innovation process, given by (3.2), we can equivalently write the dynamics of the wealth process (Xt)t∈[0,T ] as follows:
dXt = rtXt + π⊺
t ηt dt + π⊺
t dIt − ctdt, X0 = x, (3.3)
where Σt := σ(t, rt) 0
σB(t)ρrS σB(t)p1 − ρ2
rS
, μt := βσ(t, rt)mt
φBσB(t) , π⊺
t := (πtS, πtB)Σt and ηt :=
Σ−1
t μt = βmt, 1 − ρ2
rS
−1
2 − βρrS mt + φB
⊺ for t ∈ [0, T ]. Note that in (3.3) the unobservable market price of risk process (Rt)t∈[0,T ] does not appear anymore, and all coefficients are adapted to the observation filtration Fr,S.
3.2. Solution to the optimisation problem. We start this section by defining the set of admissible consumption-portfolio strategies (c, π). We introduce the BSDE.
dYt = −H(t, Xt, Yt, Zt)dt + ZtdIt, YT = −Ke− R T
0 rsds, (3.4)
where the generator H is to be defined. We define the set of admissible consumption-portfolio strategies as follows.
Definition 3.2. A pair (c, π = (πS, πB)) of Fr,S-adapted consumption-portfolio strategy is admissible if
(i) c ∈ Ca with cT = XT + e
RT
0 rsdsYT ;
(iii) Xt + e
Rt
0 rsdsYt > 0 for all t ∈ [0, T ]; (iv) (X· + e
R·
0 rsdsY·)1−γ is of class (D) on [0, T ].
We denote by A the set of admissible consumption-portfolio strategies (compare with the definition of the permissible set in [21, on p.236]). We speculate that the investor’s optimal utility process takes the form
(Xt + e
Rt
0 rsdsYt)1−γ
1 − γ for t ∈ [0, T ]. (3.5)
Hence we must choose the function H in (3.4) such that the process
M c,π
t := e−δθt (Xt + e
Rt
0 rsdsYt)1−γ
1−γ +
Zt
0
f cs, e−δθs (Xs + e
Rs
0 ruduYs)1−γ
1 − γ ds (3.6)
for t ∈ [0, T ], is a local supermartingale for all (c, π) ∈ A and there exists (c∗, π∗) ∈ A such that M c∗,π∗ is a local martingale. Itˆo’s formula applied to M c,π gives
dM c,π
t = e−δθt(Xt + e
Rt
0 rsdsYt)−γ − ct + δ c1− 1
ψ t
1− 1
ψ
(Xt + e
Rt
0 rsdsYt) 1
ψ −e
Rt
0 rsdsZ ⊺
t ηt
+1
2γ (Xt + e
Rt
0 rsdsYt)∥ηt∥2 + rt(Xt + e
Rt
0 rsdsYt) − δθ
1 − γ (Xt + e
Rt
0 rsdsY )
−e
Rt
0 rsdsH(t, Xt, Yt, Zt) dt
−γ
2 e−δθt(Xt + e
Rt
0 rsdsYt)−γ−1 πt + e
Rt
0 rsdsZt − 1
γ (Xt + e
Rt
0 rsdsYt)ηt
2
dt
+ e−δθt(Xt + e
Rt
0 rsdsYt)−γ π⊺
t +e
Rt
0 rsdsZ ⊺
t dWt. (3.7)
Expecting the drift to be non-positive for any (c, π) ∈ A and zero at an optimal strategy (c∗, π∗) ∈ A, we deduce that the candidate optimal portfolio π∗ is given by
π∗
t = −e
Rt
0 rsdsZt + 1
γ (Xt + e
Rt
0 rsdsYt)ηt, 0 ≤ t < T, (3.8)

6 W. KUISSI-KAMDEM
and the generator H in (3.4) is given by
H(t, Xt, Yt, Zt) = e− R t
0 rsds rt + 1
2γ ∥ηt∥2− δθ
1 − γ (Xt + e
Rt
0 rsdsYt) − Z⊺
t ηt
+ e− R t
0 rsds max
c>0
n
− ct + δ c1− 1
ψ t
1− 1
ψ
(Xt + e
Rt
0 rsdsYt) 1
ψ
o
. (3.9)
The maximisation in (3.9) leads to the candidate optimal consumption c∗ given by
c∗
t = δψ(Xt + e
Rt
0 rsdsYt), 0 ≤ t < T. (3.10)
Substituting (3.10) and (3.8) into (3.3) and (3.9), the generator H and the wealth process X =: X∗ are given by
H(t, X∗
t , Yt, Zt) = e− R t
0 rsds δψ
ψ − 1 + rt + 1
2γ ∥ηt∥2− δθ
1 − γ (X∗
t +e
Rt
0 rsdsYt) − Z⊺
t ηt (3.11)
and dX∗
t = rtX∗
t + − δψ + 1
γ ∥ηt∥2 (X∗
t +e
Rt
0 rsdsYt) − e
Rt
0 rsdsZ ⊺
t ηt dt
+1
γ (X∗
t +e
Rt
0 rsdsYt)η⊺
t −e
Rt
0 rsdsZ ⊺
t dIt, X∗
0 = x > 0. (3.12)
Therefore, the candidate solution to problem (2.10) is given by (3.8) and (3.10), provided that the coupled FBSDE (3.4), (3.11) and (3.12) with random coefficients is well-defined in an appropriate function space. To show the well-definedness of the latter FBSDE we consider the following conditions.
Assumption 3.3.
(i) E
h
exp 4(2q + 1)2 R T
0 ∥ηs∥2ds
i
< ∞, q ≥ 1.
(ii) K exp − R T
0 rsds ∈ L2q
Q(−1) , q ≥ 1, where Q(−1) is the probability measure equivalent to
P and defined by dQ(−1)
dP F r,S
T
:= E R −η⊺dI T := exp − 1
2
RT
0 ∥ηs∥2ds − R T
0 ηs⊺dIs .
We define the processes (Ht)t∈[0,T ], (αt)t∈[0,T ] and (φt)t∈[0,T ] by



Ht := E R −η⊺dI t, αt := e− R t
0 rsds δψ
ψ−1 + rt + 1
2γ ∥ηt∥2 − δθ
1−γ
and φt := exp R t
0 − δψψ
ψ−1 + γ−1
2γ2 ∥ηs∥2 + δθ
1−γ ds + 1
γ
Rt
0 ηs⊺dIs .
(3.13)
Remark 3.4. Assumption 3.3 yields αφ ∈ H2q
Q(−1) , q ≥ 1, (see Appendix A). This is used in the existence result of the FBSDE (3.4), (3.11) and (3.12); see Proposition 3.5.
Proposition 3.5. Let xe denotes the constant defined by xe := x−E HT Ke− R0T rsds
1−E R T
0 Hsαsφsds . Then the
FBSDE (3.4), (3.11) and (3.12) admits a solution (X∗, Y, Z) ∈ Hq
P × Hq
P × Hq
P, q ≥ 1, satisfying
X∗
t = xeφt − e
Rt
0 rsdsYt, 0 ≤ t ≤ T, (3.14)
with (Y, Z) ∈ Hq
P × Hq
P, q ≥ 1, the unique solution to the BSDE
dYt = − xeαtφt − Ztηt dt + Z⊺
t dIt, YT = −Ke− R T
0 rsds, (3.15)
Besides, the expectation representation of the first component Y is given by
Yt = H−1
tE
h
− HT Ke− R T
0 rsds + xe
ZT
t
Hsαsφsds |F r,S
t
i
, 0 ≤ t ≤ T. (3.16)
Proof. First, we prove that the BSDE (3.15) admits a unique solution (Y, Z) with Y given by (3.16). Under Q(−1), we consider a pair (Y ̃ , Z ̃) satisfying the BSDE
dY ̃t = −xeαtφtdt + Z ̃⊺
t dI Q(−1)
t = − xeαtφt − Z ̃⊺
t ηt dt + Z ̃⊺
t dIt, (3.17)

ALM WITH EPSTEIN-ZIN RECURSIVE UTILITY UNDER PARTIAL INFORMATION 7
with Y ̃T = −Ke− R T
0 rsds. Using Remark 3.4 and [6, Thm. 5.1], the BSDE (3.17) admits a unique solution (Y ̃ , Z ̃) ∈ H2q
Q(−1) × H2q
Q(−1) , q ≥ 1, with the expectation representation of the first compo
nent Y ̃ being given by
Y ̃t = EQ(−1) h
− Ke− R T
0 rsds + xe
ZT
t
αsφsds |F r,S
t
i
= H−1
tE
h
− HT Ke− R T
0 rsds + xe
ZT
t
Hsαsφsds |F r,S
t
i
, 0 ≤ t ≤ T. (3.18)
From (3.17) we deduce that the BSDE (3.15) also admits a unique solution with the expectation representation for the first component of the solution also given by (3.18). Moreover, using repeatedly Cauchy-Schwarz inequality we obtain
E
hZ T
0
|Y ̃t |q dt
i
≤ EQ(−1) h
H −2
T
i1
2 EQ(−1) h Z T
0
|Y ̃t |2q dt
i1
2
≤E
h
exp 3
ZT
0
∥ηs∥2ds
i1
4 EQ(−1) h Z T
0
|Y ̃t |2q dt
i1
2 < ∞,
where the last inequality holds due to Assumption 3.3.(i) and the fact that Y ̃ ∈ H2q
Q(−1) . Using
similar arguments and the fact that Z ̃ ∈ H2q
Q(−1) , we have
E
h ZT
0
|Z ̃s|2ds
q
2i
≤E
h
exp 3
ZT
0
∥ηs∥2ds
i1
4 EQ(−1) h Z T
0
|Z ̃s|2ds
q
i1
2 < ∞.
Second, we show that the triple (X∗, Y, Z) satisfying the representation (3.14) is a solution to the FBSDE (3.4), (3.11) and (3.12). Clearly, substituting (3.14) into (3.15) gives the BSDE part of the FBSDE. To obtain the SDE part, it suffices to apply Itˆo’s formula on X∗ given by (3.14). Finally, we prove that the constant xe is finite. By Assumption 3.3.(i), it suffices to show that
1−E RT
0 Hsαsφsds ̸= 0. Indeed, recalling the expressions of α and φ from (3.13) , we have
1−E
hZ T
0
Hsαsφsds
i
= EQ( 1−γ
γ )hZ T
0
δψ exp
Zs
0
− δψψ
ψ − 1 − ru − 1
2γ ∥ηu∥2+ δθ
1 − γ du ds
i
+ EQ( 1−γ
γ )h
exp
ZT
0
− δψψ
ψ − 1 − ru − 1
2γ ∥ηu∥2+ δθ
1 − γ du
i
> 0. (3.19)
□
We are now ready to give the main result of this paper
Theorem 3.6. Assume x > E HT Ke− R T
0 rsds and Assumption 3.3 holds. Let xe be defined as in Proposition 3.5. Then the optimal consumption and portfolio strategy for the stochastic optimisation problem (2.10) is given by
c∗
t = δψ X∗
t +e
Rt
0 rsdsYt and π∗
t = −e
Rt
0 rsdsZt + 1
γ Xt + e
Rt
0 rsdsYt mt. (3.20)
In particular, the optimal amount πS,∗ invested in the stock and the optimal amount πB,∗ invested in the bond are given by (πtS, πtB) = π∗,⊺
t Σ−1
t for t ∈ [0, T ] (see the definition of Σ just below (2.6)). Besides, the optimal value function of problem (2.10) is given by
V= 1
1−γ
x − E HT Ke− R T
0 rsds
1−E RT
0 Hsαsφsds
!1−γ
. (3.21)

8 W. KUISSI-KAMDEM
Proof. First, we prove that (c∗, π∗) ∈ A. (Recall A from Definition 3.2). Clearly, Xt∗ +e
Rt
0 rsdsYt =
xeφt > 0, t ∈ [0, T ]; due to x > E HT Ke− R T
0 rsds and (3.19). Besides,
X∗
t +e
Rt
0 rsdsYt
1−γ = xe1−γ exp
Zt
0
− δψθe−δθψs+δθ ds E
Z 1−γ
γ η⊺dI t. (3.22)
Using Assumption 3.3.(i) with 1−γ
γ
2 < 1 < 4(2q + 1)2, q ≥ 1, we deduce that E R 1−γ
γ η⊺dI is a P-martingale (hence of class (D)). Thus the right-side of (3.22) is of class (D) as a product of a bounded deterministic function and a process of class (D). Therefore, (X∗ + e
R
0 rsdsY )1−γ is of
class (D) on [0, T ]. Finally, using [21, Prop. 2.2] and the latter class (D) property, to show that
c ∈ Ca it suffices to prove that E R T
0 (Xt∗ +e
Rt
0 rsdsYt)1− 1
ψ dt < ∞. If γψ = 1, γ > 1, then the latter inequality follows from (3.22). If γ > 1, ψ > 1, then using successively Cauchy-Schwarz inequality, the inequality exp R t
0 −δψ + δ
1−γ ds ≤ exp δ
1−γ T for t ∈ [0, T ], and Assumption 3.3.(i) with
0< 1− 1
ψ
γ+1
γ−2
γψ2 < 2 < 4(2q + 1)2 and 1 − 1
ψ
24
γ2 < 4 < 4(2q + 1)2, q ≥ 1, we obtain
E
hZ T
0
X∗
t +e
Rt
0 rsdsYt
1− 1
ψ dt
i
≤E
hZ T
0
exp 1 − 1
ψ
γ+1
γ −2
γψ2
Zt
0
∥ηs∥2ds dt
i1
2
×E
hZ T
0
E
Z
1− 1
ψ
2
γ η⊺dI tdt
i1
2 exp δ
1 − γ T xe1− 1
ψ < ∞.
Second, we show that (c∗, π∗) is optimal. The proof follows similar arguments as in the proof of proposition 3.2 in [9]. □
Our next objective is to establish the Malliavin differentiability of the solution to the BSDE (3.15). We refer the reader to [17] for clear exposition on the subject. We assume the following conditions.
Assumption 3.7. Let xe, α and φ be given as in Proposition 3.5 and Equation (3.13).
(i) E
h
exp 324 R T
0 ∥ηs∥2ds
i
< ∞.
(ii) Ke− R T
0 rsds + xe R T
0 αsφsds ∈ D1,2, HT Ke− R T
0 rsds + xe R T
0 αsφsds ∈ D1,2.
(iii) ηt ∈ D1,2 for almost all t ∈ [0, T ].
(iv) EQ(−1) h
Ke− R T
0 rsds + xe R T
0 αsφsds
i
< ∞.
(v) EQ(−1) h
RT
0 Dt − Ke− R T
0 rsds 2 + xeDt
RT
0 αsφsds 2 dt
i
< ∞.
(vi) Dt(αtφt) − Z⊺
t Dt(ηt) t∈[0,T ] ∈ H2
Q(−1) .
Assumptions 3.7.(ii)-(iv) are required to apply the Clark-Ocone formula to the F r,S
T -random
variable Ke− R T
0 rsds + xe R T
0 αsφsds under the new measure Q(−1) (compare with [18, Thm. 4.5, Rmk. 4.6]).
Proposition 3.8. Let Assumptions 3.3 and 3.7 hold. Then the unique solution (Y, Z) ∈ Hq
P×
Hq
P, q ≥ 1, to the BSDE (3.15) is Malliavin differentiable and we have
Zt = Dt(Yt), where Dt(·) denote the Malliavin operator for all t ∈ [0, T ]. (3.23)
Proof. We define the processes Y ̃t := Yt + xe R t
0 αsφsds and Z ̃t := Zt for t ∈ [0, T ]. Hence, (Y ̃ , Z ̃) is the unique solution to the BSDE
dY ̃t = Z ̃⊺
t ηtdt + Z ̃⊺
t dIt = Z ̃⊺
t dI Q(−1)
t , Y ̃T = −Ke− R T
0 rsds + xe
ZT
0
αsφsds, (3.24)

ALM WITH EPSTEIN-ZIN RECURSIVE UTILITY UNDER PARTIAL INFORMATION 9
where IQ(−1)
· := I· + R ·
0 ηsds is a Brownian motion under Q(−1). Then
−Ke− R T
0 rsds + xe
ZT
0
αsφsds = Y0 +
ZT
0
Z ̃⊺
s dI Q(−1)
s . (3.25)
Using Assumption 3.7 and applying the Clark-Ocone formula under change of measure as in [18,
Thm. 4.5] to Y ̃T = −Ke− R T
0 rsds + xe R T
0 αsφsds ∈ D1,2, we obtain
− Ke− R T
0 rsds + xe
ZT
0
αsφsds
= EQ(−1) h
− Ke− R T
0 rsds + xe
ZT
0
αsφsds
i
+
ZT
0
EQ(−1) h
Dt − Ke− R T
0 rsds + xe
ZT
0
αsφsds
− − Ke− R T
0 rsds + xe
ZT
0
αsφsds
ZT
t
Dt(ηs)dI Q(−1)
s |F r,S
t
i⊺
dI Q(−1)
t . (3.26)
By uniqueness of the solution to the BSDE (3.24), we deduce from (3.25)-(3.26) that
Y0 = E
h
− HT Ke− R T
0 rsds + xe
ZT
0
Hsαsφsds
i
(3.27)
as we already obtained in Proposition 3.5, and
Zt = Z ̃t = EQ(−1) h
Dt − Ke− R T
0 rsds + xe
ZT
0
αsφsds
− − Ke− R T
0 rsds + xe
ZT
0
αsφsds
ZT
t
Dt(ηs)dI Q(−1)
s |F r,S
t
i
. (3.28)
Besides, we consider the BSDE
(
dDt(Yt) = − xeDt(αtφt) − Dt(Z⊺
t )ηt − Z⊺
t Dt(ηt) dt + Dt(Z⊺
t )dIt
Dt(YT ) = Dt(−Ke− R T
0 rsds). (3.29)
Using similar arguments as in the proof of Proposition 3.5, we obtain that the BSDE (3.29) admits a unique solution (Dt(Yt), Dt(Zt))t∈[0,T ] ∈ H2
Q(−1) × H2
Q(−1) , with the expectation representation of the first component (Dt(Yt))t∈[0,T ] being given by
Dt(Yt) = EQ(−1) h
Dt(−Ke− R T
0 rsds) +
ZT
t
xeDt(αsφs)ds − Z⊺
s Dt(ηs) ds |F r,S
t
i
. (3.30)
Using successively (3.25), the fact that Z ̃t = Zt, t ∈ [0, T ], and Itˆo isometry we have
EQ(−1) h
− Ke− R T
0 rsds + xe
ZT
0
αsφsds
ZT
t
Dt(ηs)dI Q(−1)
s |F r,S
t
i
= EQ(−1) h Z T
t
Z⊺
s Dt(ηs)ds |F r,S
t
i
. (3.31)
Substituting (3.31) into (3.30) and using the linearity of the operator Dt(·) we obtain
Dt(Yt) = EQ(−1) h
Dt − Ke− R T
0 rsds + xe
ZT
0
αsφsds
− − Ke− R T
0 rsds + xe
ZT
0
αsφsds
ZT
t
Dt(ηs)dI Q(−1)
s |F r,S
t
i
. (3.32)
Hence, comparing (3.28) and (3.32), we deduce that Zt = Dt(Yt) for t ∈ [0, T ]. □

10 W. KUISSI-KAMDEM
4. Utility loss
In this section, we determine the utility loss that investors suffer from ignoring the fact that they can learn about the market price of risk R: Instead of learning about R and using the estimate m in their optimisation problem, investors use its long-rum mean μR. Following [8], we measure the utility loss in terms of the percentage of the initial wealth. That is, we solve for L ∈ (0, 1) the equation V(x(1 − L)) = V0(x), where V(x(1 − L)) represents the value function of problem (2.10) for X0 = x-
(1 − L), and V0(x) the value function of problem (2.10) for mt = μR, t ∈ [0, T ]. From Theorem 3.6, we have
L=1− 1
x
1−E RT
0 Hsαsφsds
1−E RT
0 Hs0αs0φs0ds
x − E H0
T Ke− R T
0 rsds + E HT Ke− R T
0 rsds
!
,
where H0, α0, and φ0 are given by (3.13) for mt = μR, t ∈ [0, T ]. In the sequel, for simplicity, we assume a non-negative constant liability K. Before we provide parameter conditions such that Assumptions 3.3 and 3.7 hold, we introduce σ2m(t) := σRρRS +
βvt
2 + σRρRr − ρrS β(1 − ρ2
rS )− 1
2 vt
2, ∆(t) := 2σ2m(t)ζ − κ2
R, bmax := maxt∈[0,T ] σ2m(t) and ∆max := 2bmaxζ − κ2
R, with ζ := 100β2(1 − ρ2
rS )−1.
Proposition 4.1. Suppose that γ, ψ > 1 or γψ = 1, γ > 1. Assume that ∆max ≤ 0 or ∆max >
0, T < pi − arctan(√∆max/κR) /√∆max hold. Then Assumptions 3.3 and 3.7 are satisfied for q = 2. Moreover, Assumption 3.7 also holds if ζ := 324β2(1 − ρ2
rS )−1.
Proof. See Appendix B. □
In the numerical illustrations, except otherwise stated, the market parameter values are given by κr = 0.5, κR = 1.5, μr = 0.02, μR = φB = ρrS = 0, σr = −0.03, σR = 0.2, β = 4, ρRS = −0.95, ρRr = 0.1 and T = 1. (All comparative statistics are produced using a Monte Carlo simulation of 1000000 paths and averaging them).
Figure 1. Welfare loss L. Both figures use K = 500 and δ = 0.08. The left panel uses γ = 5, and the right panel takes ψ = 1.5. The solid lines represent the cases where the estimate, m, of the risk premium is used and the dashed lines the cases where its long-rum mean, μR, is used.
Acknowledgments
I would like to acknowledge fruitful discussions with Prof. Olivier Menoukeu Pamen.

ALM WITH EPSTEIN-ZIN RECURSIVE UTILITY UNDER PARTIAL INFORMATION 11
Funding
This work was supported by a grant from the African Institute for Mathematical Sciences, with financial support from the Government of Canada, provided through Global Affairs Canada, and the International Development Research Centre.
Appendix A. Integrability of αφ
First, we recall that (see the expression of η just below (3.3))
∥ηt∥2 = β2
1 − ρ2
rS
m2
t − 2 βρrS φB
p1 − ρ2
rS
mt + φ2
B
1 − ρ2
rS
for t ∈ [0, T ]. (A.1)
Hence, using the fact that (mt)t∈[0,T ] is an OU process (see Proposition 3.1) and the inequality
Pl
i=1 ai
p ≤ lp−1 Pl
i=1 ap
i for p ≥ 1, ai > 0, i ∈ {1, · · · , l}, we deduce that
E
hZ T
0
∥ηs∥2pds
i
+E
hZ T
0
mp
s ds
i
+E
h
exp − p
ZT
0
msds
i
< ∞ for all p ≥ 1. (A.2)
Moreover, using the innovation process, given by (3.2), we obtain that (rt)t∈[0,T ], given by (2.2), is again an OU process. Hence
E
hZ T
0
rp
s ds
i
+E
h
exp − p
ZT
0
rsds
i
< ∞ for all p ≥ 1. (A.3)
Next, we compute E Hp
T , E RT
0 αspds and E R T
0 φspds for p > 1. Using Cauchy-Schwarz inequality we have
E Hp
T =E
h
exp − p
2
ZT
0
∥ηs∥2ds − p
ZT
0
η⊺
s dIs
i
≤E
h
exp (2p2 − p)
ZT
0
∥ηs∥2ds
i
+E
h
E
Z
−2pη⊺dI
s
i
. (A.4)
E
hZ T
0
φp
s ds
i
=E
hZ T
0
exp
Zs
0
− p δψ
ψ − 1 + p δθ
1 − γ ds
× exp p γ − 1
2γ2
ZT
0
∥ηs∥2ds + p
γ
ZT
0
η⊺
s dIs
i
≤ max 1, exp
ZT
0
− p δψ
ψ − 1 + p δθ
1 − γ ds
×E
hZ T
0
exp pγ + 2p2 − p
γ2
Zs
0
∥ηu∥2du ds
i
+E
hZ T
0
E
Z 2p
γ η⊺dI
s
ds
i
.
(A.5)
Again, using Cauchy-Schwarz inequality, the convex inequality used for the proof of (A.2), (A.3) and (A.2) we obtain
E
hZ T
0
αp
s ds
i
≤E
h
exp − 2p
ZT
0
rsds
i
+ 32p−1 T δψ
ψ − 1 − δθ
1−γ
2p
+E
hZ T
0
r2p
s ds
i
+1
2γ E
hZ T
0
∥ηs∥4pds
i
< ∞. (A.6)

12 W. KUISSI-KAMDEM
Note that to show αφ ∈ H2q
Q(−1) for q > 1, it suffices to show it for all integer q ≥ 2. Hence, for γ > 1 and q ≥ 2 we have (using Jensen inequality, Ho ̈lder inequality and Young inequality)
EQ(−1) h Z T
0
|αsφs|2ds
2q
2i
≤ T q−1EQ(−1) h Z T
0
|αs φs |2q ds
i
= T q−1E
h
HT
ZT
0
|αs φs |2q ds
i
≤ T q−1 E H 2q+1
T +T 1
2q E
hZ T
0
α(2q+1)(2q+2)
s ds
i
+E
hZ T
0
φ2q+2
s ds
i
.
When p = 2q + 1, we have 2p2 − p = 8q2 + 6q + 1 < (2p)2 = 4(2q + 1)2 for q ≥ 1. Then using (A.4) and Assumption 3.3.(i) we obtain E H2q+1
T < ∞. When p = 2q + 2, we have
pγ +2p2 −p
γ2 < 8q2 + 18q + 10 < 4(2q + 1)2 for q ≥ 1. Then using (A.5) and Assumption 3.3.(i) we
obtain E R T
0 φ2q+2
s ds < ∞. Hence EQ(−1) h
RT
0 |αsφs|2ds
2q
2i
< ∞ for q ≥ 1.
Appendix B. Proof of Proposition 4.1
First, we state and prove three intermediate results (Lemmas B.1, B.2 and B.3) on which the proof of Lemma 4.1 will rely on. Lemmas B.1 gives the expression of the solution of the Riccati equation given in Proposition 3.1 and presents the bounds of such solution, Lemma B.2 gives a comparison result for some Riccati equations, and Lemma B.3 gives sufficient conditions for the non-explosion of the exponential moments of the square of an OU process with constant coefficients.
Lemma B.1. For β ̸= 0, the solution v to the Riccati equation
v′
t = σ2
R − 2κRvt − σRρRS + βvt
2 − σRρRr − ρrS β(1 − ρ2
rS )− 1
2 vt
2, v0 = 0 (B.1)
is given by
vt = − 1
a
r
b2
4 − ac
! 1 − k0 exp −2t
q
b2
4 − ac
1 + k0 exp −2t
q
b2
4 − ac
−b
2a for t ∈ [0, T ], (B.2)
with a := −β2 1 + ρ2
rS 1 − ρ2
rS
−1 , b := −2κR − 2βσRρRS + 2σRρRrβρrS 1 − ρ2
rS
−1/2, c :=
σ2
R 1 − ρ2
RS − ρ2
Rr and k0 := 1 + b
2
b2
4 − ac −1/2 1 − b
2
b2
4 − ac −1/2 −1.
Moreover, 0 ≤ vt ≤ − 1
a
q
b2
4 − ac for all t ∈ [0, T ].
Proof. To check that v given by (B.2) solves (B.1), it suffices to differentiate v and to compare the obtained expression with the right side of (B.1) for v as in (B.2). Uniqueness follows from
the uniqueness of a solution to a Riccati equation. Observe that a < 0. Then b
2<
q
b2
4 − ac and
k0 > 0. Having obtained the derivative of v, we directly have v′(t) < 0 for all t ∈ [0, T ] (because
k0 > 0). Hence v0 = 0 ≤ vt. Moreover, b
2<
q
b2
4 − ac and k0 > 0 yield vt ≤ − 1
a
q
b2
4 − ac for all
t ∈ [0, T ]. □
Lemma B.2. For v(t) defined as in Proposition 3.1, let σ2m(t) := σRρRS + βvt
2 + σRρRr −
ρrSβ(1 − ρ2
rS )− 1
2 vt
2, t ∈ [0, T ], and b2max := maxt∈[0,T ] σ2m(t). If g1, g2 and g3 are solutions on [0, T ] of the ordinary equations
g′
1(t) = −2σ2
m(t)g2
1(t) + 2κRg1(t) − ζ, g′
2(t) = −2b2
maxg2
2(t) + 2κRg2(t) − ζ
and g′
3(t) = 2κRg3(t) − ζ
with g1(T ) = g2(T ) = g3(T ), then g3(t) ≤ g1(t) ≤ g2(t) for all t ∈ [0, T ].
Proof. The proof follows from theorem 4.1.4 (on p.185) in [1]. □

ALM WITH EPSTEIN-ZIN RECURSIVE UTILITY UNDER PARTIAL INFORMATION 13
Lemma B.3. For ζ = 512β2(1 − ρ2
rS )−1 > 0, let ∆max := 2bmaxζ − κ2
R. If ∆max ≤ 0 or
∆max > 0, T < pi − arctan(√∆max/κR) /√∆max hold, then E
h
exp ζ R T
0 mt2dt
i
< ∞.
Proof. Define u(t, x) := E
h
exp ζ R T
t ms2ds mt = x
i
. Then u satisfies the backward Feyn
man–Kˇac partial differential equation (PDE):
∂u
∂t − κRx ∂u
∂x + 1
2 σ2
m(t) ∂2u
∂x2 + ζx2u = 0, with u(T, x) = 1. (B.3)
We make the exponential–quadratic ansatz u(t, x) = exp g(t)x2 + B(t) , with g(t) = 0, B(T ) = 0. Hence, ut = g′(t)x2 + B′(t) u, ux = 2g(t)xu, uxx = (2g(t) + 4g2(t)x2)u and we have
g′(t) − 2κRg(t) + 2σ2
m(t)g2(t) + ζ x2 + B′(t) + σ2
m(t)g(t) = 0 for all x ∈ R. (B.4)
Hence
g′(t) = −2σ2
m(t)g2(t) + 2κRg(t) − ζ and B′(t) = −σ2
m(t)g(t). (B.5)
Using Lemma B.3 we have 0 ≤ ζ
2κR exp 2κR(T − t) − 1 ≤ g(t) ≤ g2(t) and B(t) ≤ 0, with
ζ
2κR exp 2κR(T − t) − 1 = g3(t) for all t ∈ [0, T ]. Therefore, from the exponential-quadratic ansatz we obtain
E
"
exp ζ
ZT
0
m2
t dt
!#
≤ exp g2(0)x2 . (B.6)
Now, we solve the Riccati equation satisfied by g2. We consider the transformation g2(t) =
1 2b2max
g′
4 (t)
g4(t) . Then g′2(t) = g′′
4 (t)g4(t)−(g′
4 (t))2 2b2max g 2
4(t) . Hence g4 satisfies the linear ODE g′4′ = 2κRg′4 −
2b2maxζg4. Thus,
g4(t) = k1e(κR+√−∆max)t + k2e(κR−√−∆max)t, with ∆max = 2b2
maxζ − κ2
R. (B.7)
Hence
g2(t) = κR k1e(κR+√−∆max)t + k2e(κR−√−∆max)t + √−∆max k1e(κR+√−∆max)t − k2e(κR−√−∆max)t
2b2max k1e(κR+√−∆max)t + k2e(κR−√−∆max)t .
(B.8)
Applying the boundary condition g2(T ) = 0 to fix the constants k1, k2 we obtain
g2(0) = ζ sinh(T √−∆max)
2 √−∆max cosh(T √−∆max) + κR sinh(T √−∆max) . (B.9)
Next, we discuss the finiteness of g2(0). We obtain the following situations. Case 1: For ∆max < 0, the denominator of the fraction on the right side of (B.8) does not vanish. Then g2(0) < ∞. Case 2: For ∆max = 0, the denominator as well as the numerator of the fraction on the right side of (B.8) vanishes. However, g2(0) = 1
2 ζT 1 + κRT −1 < ∞.
Case 3: For ∆max > 0, the denominator of the fraction on the right side of (B.8) does not vanish
for all T smaller than a critical value Tc. Indeed, using the facts that √−∆max = i√∆max,
sinh(iT √∆max) = i sin(T √∆max) and cosh(iT √∆max) = cos(T √∆max) we have
g2(0) = ζ sin(T √∆max)
2 √∆max cos(T √∆max) + κR sin(T √∆max) . (B.10)
Finding the first positive T such that √∆max cos(T √−∆max)+κR sin(T √∆max) = 0 is equivalent
to find the smallest T > 0 satisfying tan(T √−∆max) =
√∆max
κR . If we denote by Tc such value,
then Tc = 1
√∆max pi − arctan
√∆max
κR . Hence, g2(0) < ∞ for all T < Tc.
Finally, using (B.6) and the results in Cases 1-3 we conclude the proof. □
We can now confirm Proposition 4.1.

14 W. KUISSI-KAMDEM
Proof of Proposition 4.1. Let us check that Assumptions 3.3 and 3.7 are verified for q = 2. Assumption 3.3: Recall that ζ := 100β2(1 − ρ2
rS )−1.
E
h
exp 4(2q + 1)2
ZT
0
∥ηs∥2ds
i
=E
h
exp 100
ZT
0
β2
1 − ρ2
rS
m2
s − 2 βρrS φB
p1 − ρ2
rS
ms + φ2
B
1 − ρ2
rS
ds
i
≤ e72φ2
B (1−ρ2
rS )−1T E
h
e−200βρrS φB (1−ρ2
rS )−1/2 R T
0 msdsi 1
2E
h
e100β 2 (1−ρ2
rS )−1 R T
0 m2
sdsi 1
2 < ∞,
(B.11)
where the first inequality holds due to Cauchy-Schwarz inequality and the last inequality comes from (A.2), (B.6), Lemma B.3 and the fact that 100β2(1 − ρ2
rS )−1 = ζ.
For Assumption 3.3.(ii), with K constant and dQ(−1)
dP F r,S
T
= HT , we have
EQ(−1) h
K2q exp − 2q
ZT
0
rsds
i
=E
h
KHT exp − 2q
ZT
0
rsds
i
≤ K E H2
T
1/2 E
h
exp − 4q
ZT
0
rsds
i 1/2
≤K E
h
exp 9
ZT
0
∥ηs∥2ds
i
+E
h
E
Z
−4η⊺dI
s
i 1/2
×E
h
exp − 8
ZT
0
rsds
i 1/2
< ∞,
where the first inequality follows from Cauchy-Schwarz inequality, the second inequality comes from (A.4) and the last inequality holds due to (A.3), (B.11) and the fact that 9 < 16 < 4(2q+1)2 = 100. Assumption 3.7: In the sequel, ζ := 324β2(1 − ρ2
rS)−1. The proof of Assumption 3.7.(i) follows similar arguments as in the proof of (B.11). So for brevity it is omitted. Using [3, Sect. 3.2.2.1 on p.64] we have
Dt ms = − 1
κR
eκR(s−t) − 1 σRρRS + βvt
σRρRr − ρrS β(1 − ρ2
rS )− 1
2 vt
1{t<s} =: D(1)
t ms D(2)
t ms
!
Dt rs = − σr
κr
eκr(s−t) − 1 ρrS
p1 − ρ2
rS
1{t<s}
Dt e− R T
0 rsds = −e− R T
0 rsds
ZT
t
Dt(rs)ds
Dt αs = Dt e− R s
0 rudu δψ
ψ − 1 + rs + 1
2γ ∥ηs∥2 − δθ
1−γ
= δψ
ψ − 1 + rs + 1
2γ ∥ηs∥2 − δθ
1 − γ Dt e− R s
0 rudu
+ e− R s
0 ruduDt
δψ
ψ − 1 + rs + 1
2γ ∥ηs∥2 − δθ
1−γ
= δψ
ψ − 1 + rs + 1
2γ ∥ηs∥2 − δθ
1 − γ Dt e− R T
0 rsds
+ e− R s
0 rudu Dt rs + β2
γ(1 − ρ2
rS ) msDt ms − βρrS φB
γ
p1 − ρ2
rS
Dt ms

ALM WITH EPSTEIN-ZIN RECURSIVE UTILITY UNDER PARTIAL INFORMATION 15
Using Young inequality, (A.2), (A.3) and (A.6) we have
E
hZ T
0
Dt e− R T
0 rsds pdt
i
+E
hZ T
0
ZT
t
∥Dt αs ∥pds dt
i
< ∞ for all p ≥ 1. (B.12)
Besides,
Dt φs = φs
Zs
t
(γ − 1)β2 γ2(1 − ρ2
rS) msDt mu − (γ − 1)βρrSφB
γ2p1 − ρ2
rS
Dt mu du
+ φs


1
γ ηt +
Zs
t


β
γ D(1)
t mu 0
0 − βρrS
γ√1−ρ2
rS
D(2)
t mu

 dIu

.
Using successively Young inequality, Jensen inequality and Burkholder–Davis–Gundy (BDG) inequality we have
E
hZ T
0
ZT
t
∥Dt φs ∥pds dt
i
≤E
hZ T
0
ZT
t
φp+1
s ds dt
i
+ (γ − 1)β2
γ2(1 − ρ2
rS )
p(p+1)
E
hZ T
0
(s − t)p(p+1)−1mp(p+1)
s
Zs
t
∥Dt mu ∥p(p+1)du dt
i
+ (γ − 1)βρrSφB
γ2p1 − ρ2
rS
p(p+1)
E
hZ T
0
(s − t)p(p+1)−1
Zs
t
∥Dt mu ∥p(p+1)du dt
i
+E
hZ T
0
ZT
t
φp+1
s ds dt
i
+1
γp(p+1) E
hZ T
0
(T − t)∥ηt∥p(p+1)dt
i
+
ZT
0
ZT
t
(s − t)p−1
Zs
t
β p(p+1)
γp(p+1) D(1)
t mu
p(p+1)du
+
Zs
t
βρrS
γ
p1 − ρ2
rS
p(p+1)
D(2)
t mu
p(p+1)du ds dt. (B.13)
For Assumption 3.7.(ii),
E
h
Ke− R T
0 rsds + xe
ZT
0
αsφsds
2
i
≤ 2K2E e−2 R T
0 rsds + 2xe2T E
hZ T
0
α4
s ds
i
+E
hZ T
0
φ4
s ds
i
< ∞, (B.14)
where the first inequality comes from the convex inequality (a + b)2 ≤ 2(a2 + b2), Jensen inequality and Young inequality, and the last inequality follows from (A.6), (A.5) and the facts that 2γ+6
γ2 <
8 < 324 and 4
γ
2
< 16 < 324.
E
hZ T
0
Dt Ke− R T
0 rsds + xe
ZT
0
αsφsds 2dt
i
≤ K2E
hZ T
0
Dt e− R T
0 rsds 2dt
i
+
xe2E
hZ T
0
Dt
ZT
0
αsφsds 2dt
i
= K2E
hZ T
0
Dt e− R T
0 rsds 2dt
i
+
xe2T E
hZ T
0
ZT
t
αsDt φs + φsDt αs
2ds dt
i
≤ K2E
hZ T
0
Dt e− R T
0 rsds 2dt
i
+
xe2T E
hZ T
0
ZT
t
α4
s + ∥Dt φs ∥4 + φ4
s + ∥Dt αs ∥4 ds dt
i
< ∞, (B.15)

16 W. KUISSI-KAMDEM
where the first and second inequalities come from the convex inequality (a + b)2 ≤ 2(a2 + b2), the triangular inequality and Cauchy-Schwarz inequality, and the last inequality follows from (A.5),
(A.6), (B.12), (B.13) and the facts that 8γ+120
γ2 < 136 < 324 and 16
γ
2 < 324. The proofs of Assumptions 3.7.(ii), (iii) and (iv) follow similar arguments as in the proof of Assumptions 3.7.(i). So for brevity they are omitted. To prove Assumption 3.7.(v) for q = 2, it suffices to show
EQ(−1) h Z T
0
∥Dt(αtφt)∥2dt
i
< ∞ and EQ(−1) h Z T
0
∥Z F,⊺
t Dt(ηt)∥2dt
i
< ∞. (B.16)
Again, because the proof of the first inequality in (B.16) is on similar lines with the proof of Assumption 3.7.(i), it is also omitted for brevity. It remains to show the second inequality in (B.16). Using successively Young’s inequality, Jensen inequality, (A.4), (B.12) and the fact that Z =: Z ̃ ∈ H4
Q(−1) (see the proof of Proposition 3.5) we have
EQ(−1) h Z T
0
∥Z F,⊺
t Dt(ηt)∥2dt
i
≤ EQ(−1) h Z T
0
∥Z F
t ∥4dt
i
+ E H2
T +TE
hZ T
0
∥Dt(ηt)∥8dt
i
< ∞.
□
Acknowledgments
I would like to acknowledge fruitful discussions with Prof. Olivier Menoukeu Pamen.
References
[1] Abou-Kandil, H., Freiling, G., Ionescu, V., and Jank, G. (2003): Matrix Riccati Equations in Control and Systems Theory. Birkh ̈auser, Basel. [2] Aı ̈t-Sahali, Y., Brandt, M. (2001): Variable selection for portfolio choice. Journal of Finance, 56: 1297–1351.
[3] Alo ́s, E., Ewald, C.-O. (2008): Malliavin differentiability of the Heston volatility and applications to option pricing. Advances in Applied Probability, 40: 144–162.
[4] Chen, X., Ruan, X., and Zhang, W. (2021): Dynamic portfolio choice and information trading with recursive utility. Economic Modelling, 98: 154–167.
[5] Detemple, J., Garcia, R., and Rindisbacher, M. (2003): A Monte Carlo method for optimal portfolios. Journal of Finance, 58: 401–446.
[6] El Karoui, N., Peng, S., and Quenez, M.-C. (1997): Backward stochastic differential equations in finance. Mathematical Finance, 7: 1–71.
[7] Epstein, L.G., Zin, S.E. (1989): Substitution, risk aversion, and the temporal behavior of consumption and asset returns: A theoretical framework. Econometrica, 57: 937–969.
[8] Escobar, M., Ferrando, S., and Rubtsov, A. (2016): Portfolio choice with stochastic interest rates and learning about stock return predictability. International Review of Economics & Finance, 41: 347–370.
[9] Feng, Z., Tian, D., and Zheng, H. (2024): Consumption-investment optimization with Epstein-Zin utility in unbounded non-Markovian markets. arXiv preprint arXiv:2407.19995. [10] Fleming, W., Pardoux, E ́. (1982): Optimal control for partially observed diffusions. SIAM Journal on Control and Optimization, 20: 261–285.
[11] Herdegen, M., Hobson, D., and Jerome, J. (2023): The infinite-horizon investmentconsumption problem for Epstein–Zin stochastic differential utility. I: Foundations. Finance and Stochastics, 27: 127–158.
[12] Hu, Y., Imkeller, P., and Mu ̈ller, M. (2005): Utility maximization in incomplete markets. Annals of Applied Probability, 15: 1691–1712.
[13] Liptser, R., Shiryaev, A. (2013): Statistics of Random Processes I: General Theory. 2nd ed., Springer Science & Business Media, Berlin.

ALM WITH EPSTEIN-ZIN RECURSIVE UTILITY UNDER PARTIAL INFORMATION 17
[14] Luckner, W., Abbott, M., Backus, J., et al. (2003): Professional Actuarial Specialty Guide: Asset-Liability Management. Society of Actuaries. [15] Ma, Y., Zhang, X. (2023): Consumption and asset allocation with information learning and capital gains tax. Journal of Industrial Management and Optimization, 19.
[16] Matoussi, A., Xing, H. (2018): Convex duality for Epstein–Zin stochastic differential utility. Mathematical Finance, 28: 991–1019.
[17] Nualart, D. (2006): The Malliavin Calculus and Related Topics. Springer-Verlag, Heidelberg.
[18] Di Nunno, G., Øksendal, B., and Proske, F. (2008): Malliavin Calculus for Le ́vy Processes with Applications to Finance. 2nd ed., Springer-Verlag, Heidelberg. [19] Vasicek, O. (1977): An equilibrium characterization of the term structure. Journal of Financial Economics, 21: 177–188.
[20] Xia, Y. (2001): Learning about predictability: The effects of parameter uncertainty on dynamic asset allocation. Journal of Finance, 56: 205–246.
[21] Xing, H. (2017): Consumption–investment optimization with Epstein–Zin utility in incomplete markets. Finance and Stochastics, 21: 227–262.
African Institute for Mathematical Sciences, Ghana
Department of Mathematics, University of Rwanda, Rwanda
Department of Mathematical Stochastics, University of Freiburg, Germany
Email address: donatien@aims.edu.gh, wilfried.kuissi.kamdem@stochastik.uni-freiburg.de

---

## Processing Information

- **Processing Library:** Zotero PDFWorker
- **Processing Date:** 2026-02-10T18:16:13.947Z
- **Text Length:** 44482 characters
- **Success:** Text extraction completed
- **PDF Library Used:** Zotero PDFWorker
- **Pages Processed:** 17 of 17
