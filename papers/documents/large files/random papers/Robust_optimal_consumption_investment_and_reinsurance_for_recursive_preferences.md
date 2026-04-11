# PDF Document: Dadzie et al. - 2025 - Robust optimal consumption, investment and reinsurance for recursive preferences.pdf

**File Path:** Dadzie et al. - 2025 - Robust optimal consumption, investment and reinsurance for recursive preferences.pdf

**Processed Date:** 2026-02-10T18:17:08.428Z

**File Size:** 1437.02 KB

**Total Pages:** 18

**Extracted Pages:** 18

**PDF Library:** Zotero PDFWorker

**Attachment Item ID:** 3539

**Title:** Robust optimal consumption, investment and reinsurance for recursive preferences

**Collection:** Large Files > Random Papers

---

## Extracted Text Content

ROBUST OPTIMAL CONSUMPTION, INVESTMENT AND REINSURANCE
FOR RECURSIVE PREFERENCES
ELIZABETH DADZIE, WILFRIED KUISSI-KAMDEM, AND MARCEL NDENGO
Abstract. This paper investigates a robust optimal consumption, investment, and reinsurance problem for an insurer with Epstein-Zin recursive preferences operating under model uncertainty. The insurer’s surplus follows the diffusion approximation of the Crame ́r-Lundberg model, and the insurer can purchase proportional reinsurance. Model ambiguity is characterised by a class of equivalent probability measures, and the insurer, being ambiguity-averse, aims to maximise utility under the worst-case s-
cenario. By solving the associated coupled forward-backward stochastic differential equation (FBSDE), we derive closed-form solutions for the optimal strategies and the value function. Our analysis reveals how ambiguity aversion, risk aversion, and the elasticity of intertemporal substitution (EIS) influence the optimal policies. Numerical experiments illustrate the effects of key parameters, showing that optimal consumption decreases with higher risk aversion and EIS, while investment and reinsur-
ance strategies are co-dependent on both financial and insurance market parameters, even without correlation. This study provides a comprehensive framework for insurers to manage capital allocation and risk transfer under deep uncertainty.
1. Introduction
The optimal management of an insurance’s wealth requires balancing between different sources of risk and return: the allocation of funds in the financial market via investment decisions and the transfer of insurance (underwriting) risk through reinsurance. Classical financial economics and actuarial research has studied these problems extensively under expected utility theory; see [10] and reference therein. In this formulation, the insurer (or investor) maximises classical timeadditive utilities -
of terminal wealth. However, from an economics point of view, the main unattractive feature of time-additive preferences is the fact that they fail to separate investors’ desire to smooth consumption across states of nature (measured by the coefficient of risk aversion) and investors’ willingness to smooth consumption over time (measured by the coefficient of elasticity of intertemporal substitution EIS); see [12, on pp.227-228] for more details. This limitation has led to a considerable amount of-
 current theoretical and empirical research in finance and economics based on more general dynamic risk preferences. One of the most popular response in the literature are recursive preferences. Such preferences allow to disentangle the link between risk aversion and EIS; thanks to the postulate that current consumption depend on the value of future consumption. Arguably the most popular among recursive utilities is the Epstein-Zin utility as proposed in [4]. Since then the Epstein-Zin utility has-
 been widely used in a variety of different contexts covering asset pricing, decision theory, business cycles and growth, and monetary economics. However, despite the established and rapid growing literature on consumption and investment problems with recursive utilities, to the best of our knowledge no research has ever solved such problems when reinsurance is taken into account. There is by now ample evidence in the literature that both insurers and investors operate under model uncertainty: the-
 true drift or volatility of asset returns, and the intensity or severity of
2020 Mathematics Subject Classification. Primary 91B05, 91G05, 91G10; Secondary 91G80s. Key words and phrases. Consumption-investment-reinsurance strategies, Epstein-Zin recursive utility, Model uncertainty, Forward-backward stochastic differential equations. This work was supported by a grant from the African Institute for Mathematical Sciences, with financial support from the Government of Canada, provided through Global Affairs Canada, and the International Development Research Centre.
1
arXiv:2511.03031v1 [math.OC] 4 Nov 2025

2 ELIZABETH DADZIE, WILFRIED KUISSI-KAMDEM, AND MARCEL NDENGO
claims, may not be known with certainty; see [3] for a review. In the presence of such ambiguity, a robust decision maker evaluates outcomes under a set of plausible probability measures and maximises utility against the worst-case scenario. Robust control theory (see [5, 9]) integrates this feature by introducing an additional minimisation over alternative measures, penalised by a relative-entropy term. Combining Epstein–Zin utilities with robustness yields robust recursive preferences, which cap-
ture both the investors’ intertemporal trade-offs and their concern for model misspecification. For insurers, this provides a realistic framework for studying capital allocation, reinsurance design, and consumption smoothing under deep uncertainty. In the present paper, we incorporate ambiguity aversion to study the optimal robust consumption (“dividend”, “refund”,...), investment and reinsurance problem through maximising, over a finite time-horizon, the Epstein-Zin recursive utility. A further i-
mprovement arises from the fact that we consider an insurer subject to a liability at the end of the investment period. We obtain closed-form solutions for the robust optimal consumption, investment-reinsurance strategy and the corresponding value function by adopting an extension of a well-known technique proposed by [6] (for time-additive utility) and [12] (for Epstein-Zin utility). This extension has been introduced in [7] to study a consumption-investment optimisation problem with liability an-
d Epstein-Zin utility under partial information. In order to analyse the effect of ambiguity and the utility’s parameters (risk aversion coefficient and EIS coefficient) on the optimal strategy, we consider three special cases, i.e., uncorrelated claims, without ambiguity, and with ambiguity. Finally, we perform some numerical experiments to illustrate the robust optimal consumption, investment-reinsurance strategy. The remainder of the present paper is structured as follows. Section 2.1 introduce-
s the financial–insurance market model and the insurer’s wealth dynamics under proportional reinsurance. In Section 2.2 we formulate the robust stochastic optimisation problem. In Section 3 we give the main results of this paper. In Section 4 we perform some numerical analysis. Finally, Section 5 summarises this paper.
2. Model and problem formulation
2.1. Probability setting and wealth process of the insurer. We consider a filtered probability space (Ω, F , (Ft)0≤t≤T , P) generated by a 2-dimensional Brownian motion B = (W, W re). The filtration (Ft)0≤t≤T is assumed to satisfy the usual conditions of completeness and rightcontinuity, so that we can take c`adl`ag versions for semi-martingales. We define some known spaces of stochastic processes.
(i) Let C be the set of non-negative progressively measurable processes on [0, T ] × Ω. (ii) Let Hq
P, q ≥ 1, denotes the space of progressively measurable R-valued processes (Yt)0≤t≤T
such that ∥Y ∥Hq
P = E[R T
0 |Yt|qdt]1/q < ∞.
(iii) Let Ξq
P, q ≥ 1, denotes the space of predictable R2-valued processes
(Zt)0≤t≤T such that ∥Z∥Ξq
P = E[exp q
2
RT
0 ∥Zt∥2dt ]1/q < ∞.
(iv) Let Hq
P, q ≥ 1, denotes the space of predictable R2-valued processes
(Zt)0≤t≤T such that ∥Z∥Hq
P = E[(R T
0 ∥Zt∥2dt) q
2 ]1/q < ∞.
Note that similar spaces can be defined under another probability measure Q, by replacing P with Q in the subscripts of the corresponding spaces, and taking expectations with respect to Q. Now, we can introduce the wealth process, under P, of an insurer. We consider a dynamic financial-insurance environment with two traded assets and the surplus process of the insurer. The traded assets consist of one riskless bond S0 and one risky asset S with dynamics
(
dSt0 = rSt0dt, S00 > 0,
dSt = St ((r + μ)dt + σdWt) , S0 > 0. (2.1)
We assume that, without reinsurance, the surplus process Ub of the insurer satisfies the diffusion approximation of the classical Cram ́er-Lundberg model (see, e.g., [1, Sect. IV.8] or [8])
d
Ubt = κζdt − pκβ ρSdWt + ρredW re
t (2.2)

ROBUST OPTIMAL CONSUMPTION, INVESTMENT AND REINSURANCE 3
where ρS, ρre ∈ [−1, 1] are the correlation coefficients such that ρre ̸= 0 and (ρS)2 + (ρre)2 = 1, κζ is the claim rate at t ∈ [0, T ], and ζ, κ, β > 0. The insurance company participates in the reinsurance market and buys proportional reinsurance πtre at every time t ∈ [0, T ]. As in [2],
the reinsurance strategy πtre is allowed to be greater than 1; expressing the situation in which the insurance company also acts as reinsurer of other insurance companies. At any time t, the insurance company retains 100πtre% of the total claims while the reinsurer undertakes the rest
100(1 − πtre)%. Using expected value principle the insurer and the reinsurer premium rates are
determined by (1 + νin)κζ and (1 + νre)κζ, respectively, where νin is the safety loading of the insurer and νre the safety loading of the reinsurer. We exclude the insurer’s arbitrage opportunity by assuming νre > νin. Hence, the modified dynamics of the insurer’s surplus is given by
dUt = (1 + νin)κζ − (1 − πre
t )(1 + νre)κζ − πre
t dUbt
= νin − νre + πre
t νre κζdt + πre
t
pκβ ρSdWt + ρredW re
t . (2.3)
In addition to choosing an amount of reinsurance πtre, t ∈ [0, T ], the insurer also chooses her consumption rate ct (in the form of “dividend”, “refund”,...) and an amount to be invested in the risky assets (investment strategy) πtS. For such (c, πS, πre), the wealth process Xe of the company with initial endowment x ≥ 0 at time 0 evolves according to the stochastic differential equation (SDE)
d
Xet = rXetdt + πS
t μdt + πS
t dWt − ctdt + dUt
= rXetdt + πS
t μ + πre
t νreκζ dt + νin − νre κζdt + πS
t σdWt
+ πre
t
pκβ ρSdWt + ρredW re
t
= rXetdt + π⊺
t ηdt + π⊺
t dBt + νin − νre κζdt − ctdt, (2.4)
where Σ := σ 0
ρS √κβρre , η := Σ−1 μ
νreκζ and π⊺
t := πtS, πtre Σ, 0 ≤ t ≤ T .
As in [8], instead of working with the wealth process (Xet)0≤t≤T itself, we consider its selffinancing form process given by
Xt := Xet + νin − νre κζ
ZT
t
e−r(s−t)ds for t ∈ [0, T ]. (2.5)
Clearly, XT = XeT . Hence, Equation (2.4) transforms to
dXt = dXet + r νin − νre κζ
ZT
t
e−r(s−t)ds − νin − νre κζdt
= rXetdt + π⊺
t ηdt + π⊺
t dBt − ctdt + r νin − νre κζ
ZT
t
e−r(s−t)ds
= rXtdt + π⊺
t ηdt + π⊺
t dBt − ctdt, (2.6)
with X0 = x + νin − νre κζ R T
0 e−rsds.
2.2. The consumption, investment and reinsurance problem for an ambiguity-averse insurer. The framework given in Section 2.1 concerned an insurer who has total confidence in model (2.6) under the probability measure P. However, in practice insurers are concerned about model misspecification generated by the deviation from the reference probability measure P. We shall then integrate the probability distribution uncertainty into the consumption-investmentreinsurance optimisation problem of an ambigu-
ity-averse insurer (AAI). To define alternative models, we consider other probability measures—equivalent to the reference measure P—defined, via Radon-Nykodim derivative, by
dQξ
dP FT
:= exp − 1
2
ZT
0
∥ξs∥2ds −
ZT
0
ξ⊺
s dBs , (2.7)

4 ELIZABETH DADZIE, WILFRIED KUISSI-KAMDEM, AND MARCEL NDENGO
where ξ := (ξS, ξre)⊺ ∈ Ξ2
P is called the distortion process. According to Girsanov’s theorem, we
can define on the probability measure Qξ the following Brownian motions:
W Qξ
t := Wt +
Zt
0
ξS
s ds and W re,Qξ
t := W re
t+
Zt
0
ξre
s ds, (2.8)
or, equivalently, BQξ
t := Bt + R t
0 ξsds for t ∈ [0, T ].
Under Qξ, the dynamics of the wealth process X in (2.6) becomes
dXt = rXtdt + π⊺
t ηdt + π⊺
t dBQξ
t − ctdt − π⊺
t ξtdt. (2.9)
An AAI’s preference over C-valued consumption and Ξ2
P-valued distortion is given by a robust version of the classical continuous-time stochastic differential utility of Epstein-Zin type. To describe this preference, let δ > 0 represent the discounting rate, 0 < γ ̸= 1 be the relative risk aversion, and 0 < ψ ̸= 1 be the elasticity of intertemporal substitution coefficient (EIS). Then, the Epstein–Zin aggregator is defined by
f (c, v) := δe−δt c1− 1
ψ
1− 1
ψ
((1 − γ)v)1− 1
θ , with θ := 1 − γ
1− 1
ψ
, (2.10)
and the bequest utility function by h(c) := e−δθT c1−γ
1−γ . Hence, the robust Epstein-Zin utility over
the consumption stream c ∈ C and the distortion process ξ ∈ Ξ2
P on a finite time horizon T is a
process (V c,ξ
t )t∈[0,T ] which satisfies
V c,ξ
t = EQξ
t
h
h(cT ) +
ZT
t
f (cs, V c,ξ
s )+ 1
2Ψs
∥ξs∥2 ds
i
for t ∈ [0, T ], (2.11)
where (Ψt)t∈[0,T ] is a non-negative process which captures the AAI’s ambiguity aversion. Here,
EQξ
t [·] stands for the conditional expectation EQξ [·|Ft] under Qξ. Following [9], we adopt a homothetic robustness preference by defining Ψ via
Ψt := Φ
(1 − γ)V c,ξ
t
for t ∈ [0, T ], (2.12)
with Φ ≥ 0 denoting the ambiguity aversion parameter. Hence, the robust recursive utility process V c,ξ in (2.11) becomes
V c,ξ
t = EQξ
t
h
h(cT ) +
ZT
t
f (cs, V c,ξ
s )+ 1
2Φ ∥ξs∥2(1 − γ)V c,ξ
s ds
i
, 0 ≤ t ≤ T. (2.13)
For the analysis in our paper, we study the case
γ > 1 and ψ > 1. (2.14)
Our interest in the parameter specification in (2.14) originates mainly from its empirical evidence on consumption and portfolio decisions; see [12, on p.228]. Without the distortion term in the generator of (2.13) (no ambiguity), existence and uniqueness results are well-established (see [12, Prop. 2.2]). To guarantee the existence of a suitable unique solution to (2.13), for non-zero distortion term, we consider the following set of admissible consumption and distortion streams.
Aa :=
n
(c, ξ) ∈ C × Ξ2
Qξ EQξ h Z T
0
e−δsc1− 1
ψ
s ds
i
< ∞ and EQξ e
RT 0
1
2Φ ∥ξs∥2dsc1−γ
T <∞
o
.
(2.15)
Proposition 2.1. Suppose γ, ψ > 1 and (c, ξ) ∈ Aa. Then (2.13) admits a unique solution V c,ξ, with V c,ξ continuous, strictly negative and of class (D). Moreover, there exists a square integrable process Zc,ξ such that for t ∈ [0, T ],
V c,ξ
t = h(cT ) +
ZT
t
f (cs, V c,ξ
s )+ 1
2Φ ∥ξs∥2(1 − γ)V c,ξ
s ds −
ZT
t
Z c,ξ
t dBQξ
s . (2.16)
Proof. See Appendix A. □

ROBUST OPTIMAL CONSUMPTION, INVESTMENT AND REINSURANCE 5
In this section, we are interested in the optimal consumption, investment and reinsurance problem of an AAI with a constant liability G ∈ R at terminal time T and robust recursive preference of Epstein-Zin type. Note that G is not necessarily positive. Hence, we want to find the best strategy (cb, πb, ξb) solution to the optimization problem
sup
c,π
inξf EQξ h
h(X c,π,ξ
T − G) +
ZT
0
f (cs, V c,ξ
s )+ 1
2Φ ∥ξ∥2(1 − γ)V c,ξ
s ds
i
, (2.17)
where Xc,π,ξ denotes the solution to the SDE (2.9) associated to the consumption c, the investment-reinsurance strategy π and the distortion process ξ, with π⊺ := (πS)⊺, πre Σ (see the definition of Σ just below (2.4)). To define the set of admissible consumption, investment, reinsurance and distortion strategies, we introduce the BSDE
dYt = − H(t, Xc,π,ξ
t , Yt, Zt) + Z⊺
t ξt dt + Z⊺
t dBQξ
t , YT = −e−rT G, (2.18)
where the function H is to be defined. Hence, we define the set of admissible consumption, investment, reinsurance and distortion strategies as follows.
Definition 2.2. A triple (c, π, ξ) of consumption, investment-reinsurance and distortion strategies is admissible if
1. (c, ξ) ∈ Aa with cT = Xc,π,ξ
T + erT YT ;
2. Xc,π,ξ
t + ertYt > 0 for all t ∈ [0, T ];
3. (Xc,π,ξ
· + er·Y·)1−γ is of class (D) under P.
We denote by AAAI the set of admissible consumption, investment-reinsurance and distortion strategies. Therefore, we are interested in the following problem:
Problem 2.3. Find (cb, πb, ξb) ∈ AAAI such that
V AAI := V cb,πb,ξb
0 := sup inf
(c,π,ξ)∈AAAI
EQξ h
h(X c,π,ξ
T − G) +
ZT
0
f (cs, V c,ξ
s )+ 1
2Φ ∥ξ∥2(1 − γ)V c,ξ
s ds
i
.
(2.19)
3. Solution to the AAI’s stochastic optimisation problem
We speculate that the optimal utility process takes the form
Vbt = e−δθt (Xt + ertYt)1−γ
1 − γ , 0 ≤ t ≤ T, (3.1)
where (Y, Z) is the solution to the BSDE (2.18). We define the process
M c,π,ξ
· := e−δθt (X· + er·Y·)1−γ
1−γ
+
Z·
0
f cs, e−δθs (Xs + ersYs)1−γ
1−γ + 1
2Φ ∥ξ∥2(Xs + ersYs)1−γ ds. (3.2)
From the martingale optimality principle, the function H in (2.18) must be chosen according to the following rules:
(1) For any (c, π), the process M c,π,ξ is a local submartingale for all ξ such that (c, π, ξ) ∈
AAAI .
(2) For any ξ, the process M c,π,ξ is a local supermartingale for all (c, π) such that (c, π, ξ) ∈
AAAI .
(3) There exists a (cb, πb, ξb) ∈ AAAI such that M cb,πb,ξb is a local martingale.

6 ELIZABETH DADZIE, WILFRIED KUISSI-KAMDEM, AND MARCEL NDENGO
Recall f defined in (2.10). Set Ht := H(t, Xt, Yt, Zt) for all t ∈ [0, T ]. To find H, we apply Itˆo’s formula to M c,π,ξ in (3.2) and obtain
dM c,π,ξ
t = −δθe−δθt (Xt + ertY 0)1−γ
1 − γ dt + rertYte−δθt(Xt + ertYt)−γ dt
+ e−δθt(Xt + ertYt)−γ dXt + erte−δθt(Xt + ertYt)−γ dYt
−γ
2 e−δθt(Xt + ertYt)−γ−1(dXt)2 − γ
2 e2rte−δθt(Xt + ertYt)−γ−1(dYt)2
− γerte−δθt(Xt + ertYt)−γ−1dXtdYt + f ct, e−δθt (Xt + ertYt)1−γ
1 − γ dt
= −δθe−δθt (Xt + ertYt)1−γ
1 − γ dt + e−δθt(Xt + ertYt)−γ rXtdt
+ e−δθt(Xt + ertYt)−γ π⊺
t ηdt + e−δθt(Xt + ertYt)−γ π⊺
t dBQξ
t
− e−δθt(Xt + ertYt)−γ ctdt − e−δθt(Xt + ertYt)−γ π⊺
t ξtdt
− erte−δθt(Xt + ertYt)−γ Htdt − erte−δθt(Xt + ertYt)−γ Z⊺
t ξtdt
+ erte−δθt(Xt + ertYt)−γ Z⊺
t dBQξ
t −γ
2 e−δθt(Xt + ertYt)−γ−1π⊺
t πtdt
−γ
2 e2rte−δθt(Xt + ertYt)−γ−1∥Zt∥2dt − γerte−δθt(Xt + ertYt)−γ−1π⊺
t Ztdt
+ δ c1− 1
ψ t
1− 1
ψ
e−δθt(Xt + ertYt)−γ+ 1
ψ dt + 1
2Φ ∥ξ∥2e−δθt(Xt + ertYt)1−γ dt
+ rertYte−δθt(Xt + ertYt)−γ dt
=
h
− ct + δ c1− 1
ψ t
1− 1
ψ
(Xt + ertYt) 1
ψ e−δθt(Xt + ertYt)−γ
− γ+Φ
2 e−δθt(Xt + ertYt)−γ−1 π⊺
t πt + 2π⊺
t ertZt− 1
γ + Φ (Xt + ertYt)η
− γ+Φ
2 e2rte−δθt(Xt + ertYt)−γ−1∥Zt∥2 − erte−δθt(Xt + ertYt)−γ Ht
+ rertYte−δθt(Xt + ertYt)−γ + e−δθt(Xt + ertYt)−γ rXt
− δθe−δθt (Xt + ertYt)1−γ
1−γ
i
dt + e−δθt(Xt + ertYt)−γ π⊺
t + ertZ⊺
t dBQξ
t
+1
2Φ e−δθt(Xt + ertYt)1−γ ∥ξt∥2 − 2Φ(Xt + ertYt)−1 π⊺
t + ertZ⊺
t ξt dt
= e−δθt(Xt + ertYt)−γ
"
− ct + δ c1− 1
ψ t
1− 1
ψ
(Xt + ertYt) 1
ψ − ertZ⊺
tη
+1
2Φ (Xt + ertYt) ξt − Φ(Xt + ertYt)−1 πt + ertZt
2
− γ+Φ
2 (Xt + ertYt)−1 πt + ertZt− 1
γ + Φ (Xt + ertYt)η
2
+1
2
1
γ + Φ (Xt + ertYt)∥η∥2 + r(Xt + ertYt) − δθ
1 − γ (Xt + ertYt) − ertHt
#
dt
+ e−δθt(Xt + ertYt)−γ π⊺
t + ertZ⊺
t dBQξ
t . (3.3)
Applying the rules 1, 2 and 3 above, we expect that (1) for any (c, π), the drift in (3.3) is nonnegative for all ξ, (2) for any ξ, the drift in (3.3) is non-positive for all (c, π), and (3) the drift in (3.3) is zero for the optimal triple (cb, πb, ξb). Hence, the generator H for (2.18) can be obtained by formally taking the infimum over ξ and a supremum over c and π in the drift in (3.3) and setting

ROBUST OPTIMAL CONSUMPTION, INVESTMENT AND REINSURANCE 7
it to be zero. That is,
H(t, Xt, Yt, Zt) = e−rt mcax
n
− ct + δ c1− 1
ψ t
1− 1
ψ
(Xt + ertYt) 1
ψ
o
+ mξin
n1
2Φ e−rt(Xt + ertYt) ξt − Φ(Xt + ertYt)−1 πt + ertZt
2}
+ mπax
n
− γ+Φ
2 e−rt(Xt + ertYt)−1 πt + ertZt− 1
γ + Φ (Xt + ertYt)η
2
o
+1
2
1
γ + Φ e−rt(Xt + ertYt)∥η∥2 + re−rt(Xt + ertYt) − δθ
1 − γ e−rt(Xt + ertYt).
(3.4)
Therefore, we deduce from the three optimisation problems in (3.4) that the candidate optimal consumption cb, the candidate optimal investment-reinsurance πb and the candidate optimal distortion process ξb are given by
cbt = δψ(Xt + ertYt) (3.5)
πbt = −ertZt + 1
γ + Φ (Xt + ertYt)η (3.6)
ξbt = Φ(Xt + ertYt)−1
πbt + ertZt = Φ
γ + Φ η, (3.7)
Hence, substituting (3.5), (3.6) and (3.7) into (2.9) and (3.4), the function H and the wealth process X =: Xb are given by
H(t, Xbt, Yt, Zt) = e−rt δψ
ψ−1 +r+ 1
2
1
γ + Φ ∥η∥2− δθ
1 − γ (Xbt + ertYt) − Z⊺
t η (3.8)
and dXbt = rXbt + − δψ+ 1
γ + Φ ∥η∥2 (Xbt + ertYt) − γ
γ + Φ ertZ⊺
t η dt
+1
γ + Φ (Xbt + ertYt)η⊺ − ertZ⊺
t dBQξb
t . (3.9)
Thus, a candidate solution to Problem 2.3 is given by (3.5), (3.6) and (3.7), provided that the FBSDE

        
        
d
Xbt = rXbt + − δψ+ 1
γ+Φ ∥η∥2 (Xbt + ertYt) − γ
γ+Φ ertZ⊺
t η dt
+1
γ+Φ (Xbt + ertYt)η⊺ − ertZ⊺
t dBQξb
t.
dYt = − e−rt δψ
ψ−1 + r + 1
2
1
γ+Φ ∥η∥2− δθ
1−γ (Xbt + ertYt) − γ
γ+Φ Z⊺
t η dt
+ Z⊺
t dBQξb
t
Xb0 = x + νin − νre κζ R T
0 e−rsds, YT = −e−rT G
(3.10)
is well-defined in an appropriate function space. In the sequel, to simplify the notations, we introduce the process Ht = {Hst, t ≤ s ≤ T } defined by
Ht
s := E(
Z
−η⊺dB)s E(
Z
−η⊺dB)t, t ≤ s ≤ T, (3.11)
with H := Ht for t = 0, and the process φ = {φt, 0 ≤ t ≤ T } given by
φt := exp − δψψ
ψ − 1 + γ + 3Φ − 1
2(γ + Φ)2 ∥η∥2+ δθ
1−γ t+ 1
γ + Φ η⊺Bt , t ≤ s ≤ T. (3.12)
We can now confirm the well-definedness of the FBSDE (3.10).
Proposition 3.1. Let rm and xe denote the constants defined by
rm := − δψψ
ψ−1 − r − γ−Φ
2(γ+Φ)2 ∥η∥2 + δθ
1−γ and xe := rm x+ κζ
r νin−νre 1−e−rT −e−rT G
rm+ rm+δψ − Φ
(γ+Φ)2 ∥η∥2 ermT −1 . Assume that

8 ELIZABETH DADZIE, WILFRIED KUISSI-KAMDEM, AND MARCEL NDENGO
xe is finite. Then a solution (Xb, Y, Z) ∈ Hq
P × Hq
P × Hq
P, q ≥ 1, to the FBSDE (3.10) is given by

    
    
Xbt = xeφt − ertYt
Yt = −e−rT G
+
xe − rm − δψ + Φ
(γ+Φ)2 ∥η∥2 ermT −ermt
rm exp −1+2(γ+Φ)
2(γ+Φ)2 ∥η∥2t + 1
γ+Φ η⊺Bt
Zt = 1
γ+Φ Yt + e−rT G η.
(3.13)
Moreover, the solution (Xb, Y, Z) given by (3.13) is the unique local solution to the FBSDE (3.10).
Proof. See Appendix B. □
Remark 3.2. Note that for Φ = 0, the constant xe (=: xe0) in Proposition 3.1 is finite. Indeed,
xe0 = rm x + κζ
r νin − νre 1 − e−rT − e−rT G
rm + rm + δψ ermT − 1
= x + κζ
r νin − νre 1 − e−rT − e−rT G
ermT + δψ
rm ermT − 1
= x + κζ
r νin − νre 1 − e−rT − e−rT G
ermT + R T
0 δψermsds
.
Because ermT + R T
0 δψermsds > 0, we have xe0 := xe finite.
To ensure the optimality of the candidate strategies given by (3.5), (3.6) and (3.7) we consider the following conditions.
Assumption 3.3. xe > 0, −ρSμ+σνreκζ
σ > 0 and −rm − δψ + Φ
(γ+Φ)2 ∥η∥2 < 0.
Remark 3.4. Note that when the liability is non-negative (that is, G ≥ 0), then Assumption 3.3 yields that the process Y , given in (3.13), is negative. As a by-product, we obtain that the optimal wealth process Xb, given in (3.13), is positive. Indeed, for G ≥ 0, suppose Assumption 3.3 holds.
Then the right side of the second equality in (3.13) is negative; because ermT −ermt
rm > 0 for all rm ∈ R. Hence, Yt < 0, t ∈ [0, T ]. Using the first equality in (3.13) and the fact that xe > 0 and φt > 0, t ∈ [0, T ], we deduce that Xbt > 0 for all t ∈ [0, T ].
We are now ready to give the main result of the present paper.
Theorem 3.5. Suppose Assumption 3.3 holds. Let xe be defined as in Proposition 3.1. Let Γ be the process defined by Γt := − 1
γ+Φ e−rt Yt + e−rT G + 1
γ+Φ xeφt for t ∈ [0, T ]. Then the robust
optimal consumption cb, distortion process ξb, investment πbS and reinsurance πbre strategies given by

     
     
cbt = δψ
xeφt, ξbt = Φ
γ+Φ
1
σ ρre √κβ
μρre√κβ
−ρSμ + σνreκζ
!
πbtS = 1
κβσ2(ρre)2 μκβ(ρre)2 − ρS − ρS μ + σνreκζ Γt
πbtre = 1
κβσ(ρre)2 − ρS μ + σνreκζ Γt
(3.14)
solve the control problem (2.19), and their associated value function is given by
VAAI = 1
1−γ
rm x + κζ
r νin − νre 1 − e−rT − e−rT G
rm + rm + δψ − Φ
(γ+Φ)2 ∥η∥2 ermT − 1
!1−γ
. (3.15)
Remark 3.6. Note, from (3.14) and the definition of the vector η just below (2.4), that the robust optimal reinsurance strategy (RORS) depends on the parameters of the financial market. Similarly, the parameters of the insurance market impact both the robust optimal consumption strategy (ROCS) and the robust optimal investment strategy (ROIS). This co-dependence happens

ROBUST OPTIMAL CONSUMPTION, INVESTMENT AND REINSURANCE 9
even if we assume no correlation (meaning, ρS = 0) between the insurance market and the financial market.
We state four preliminaries results, Lemma 3.7, 3.8, 3.9 and 3.10, from which the proof of Theorem 3.5 will follow (see Appendix C). Lemma 3.7 confirms that the candidate controls are admissible and their optimality is shown via Lemma 3.9.
Lemma 3.7. Recall (Xb, Y ) given by (3.13). Let Assumption 3.3 holds. Then
(i) Xbt + ertYt > 0 for all t ∈ [0, T ].
(ii) (cb, ξb) ∈ Aa and (Xb + ertY )1−γ is of class (D) under P.
Proof. See Appendix C. □
Lemma 3.8. Let (Y, Z) (respectively, (Ye , Ze)) be a super-solution (respectively, sub-solution) to (2.16). That is,
Y+
Z·
0
f (cs, Ys) + 1
2Φ ∥ξs∥2(1 − γ)Ys ds is a local super-martingale and
Ye +
Z·
0
f (cs, Yes) + 1
2Φ ∥ξs∥2(1 − γ)Yes ds is a local sub-martingale
with YT ≥ e−δθT c1−γ
T
1−γ ≥ Y ̃T , where Z and Z ̃ are determined by the Doob–Meyer decomposition
and martingale representation. Assume that both Y and Y ̃ are of class (D). Then Yt ≥ Y ̃t for t ∈ [0, T ]. Moreover, if YT > Y ̃T , then Yt > Y ̃t for t ∈ [0, T ].
Proof. See Appendix C. □
Lemma 3.9. Let Assumption 3.3 holds. Then for any triple (c, π, ξ) of admissible strategy we have
(x + Y0)1−γ
1 − γ ≥ V c,ξ
0 , (3.16)
with c financed by π via (2.9), V c,ξ defined in Proposition 2.1 and Y given in (3.13).
Proof. See Appendix C. □
Lemma 3.10. Let Mf be the process defined by
Mft := exp
Zt
0
δψθ + Φ(1 − γ)
2(γ + Φ)2 ∥η∥2eδθs ds e−δθt (Xbt + ertYt)1−γ
1 − γ , 0 ≤ t ≤ T, (3.17)
with (Xb, Y ) as in Proposition 3.1. Then the process Mf is a martingale under Qξb.
Proof. See Appendix C. □
4. Numerical simulations
The goal of this section is to numerically illustrate the effects of model parameters on the optimal consumption, investment and reinsurance strategies, and the corresponding value function. We consider three cases: the no-correlation between insurance market and financial market case, the case of an ambiguity-neutral insurer (ANI) and the general case obtained in Theorem 3.5. For the numerical experiments, except otherwise stated, the basic parameters are chosen as those in Table 1.
r 0.05
μ 0.04
σ 0.25
δ 0.08
γ 5
ψ 1.5
T 10
x 500 κ 1.5
ζ 1
β 1
ρS
−1
2
ρre
√3 2
ν in
0.2
νre
0.5
Φ 2
G 500 Table 1. Values of model parameters.

10 ELIZABETH DADZIE, WILFRIED KUISSI-KAMDEM, AND MARCEL NDENGO
(a) (b)
Figure 1. The time-0 optimal consumption for an ambiguity-averse insurer with correlation between insurance market and financial market (general case). The left panel uses ψ = 1.5, and the right panel takes γ = 5.
In Figure 1 we display the time-0 robust optimal consumption strategy (ROCS) with respect to the volatility of the stock for different values of the risk aversion (see Figure 1(a)) and the EIS (see Figure 1(b)). We observe that the risk aversion coefficient and the EIS coefficient both negatively impact the consumption. In addition, Figure 1(a) shows that the ROCS is highly sensitive to small values of the volatility of the stock (σ < 0.2) and barely influenced by its high values (σ ≥ 0.4).
(a) (b)
Figure 2. The time-0 optimal consumption for an ambiguity-neutral insurer (ANI case) and an ambiguity-averse insurer when considering correlation (General case) or no-correlation (No-correlation case) between financial and insurance risks.
Next, to better understand the effect of ambiguity aversion and correlation between financial and insurance risks on the optimal consumption strategy, we display in Figure 2 three cases, i.e., the ambiguity-neutral case (Φ = 0), the no-correlation between financial and insurance risks case (ρS = 0), and the general case which is determined through the first equation in (3.14). In Figure 2 we display the effects of model uncertainty and correlation between financial and insurance risks on the optim-
al consumption strategy with respect to the discount rate/time preference (see Figure 2(a)) and the risk aversion (see Figure 2(b)). Figure 2(a) shows an inverted U-shape in all three cases which indicates a non-monotonic relationship between the patience level–measured by the discount rate δ– of insurers and their consumption. The ambiguity-neutral case dominates with highest consumption throughout all cases followed by the general case. In

ROBUST OPTIMAL CONSUMPTION, INVESTMENT AND REINSURANCE 11
all cases, there is peak consumption with varying values at δ ≈ 0.07. Figure 2(b) shows a declining consumption with increasing risk aversion for all three curves. Our numerical results show a similar effect of the EIS coefficient on the consumption.
(a) (b)
(c)
Figure 3. The time-0 optimal investment and reinsurance with respect to the risk aversion for an ambiguity-neutral insurer (ANI case) and an ambiguityaverse insurer when considering correlation (General case) or no-correlation (Nocorrelation case) between financial and insurance risks.
In Figure 3 we display the time-0 robust optimal investment (ROIS) and reinsurance (RORS) strategies with respect to the risk aversion for all three cases: the ambiguity-neutral case (no uncertainty), the no-correlation between financial and insurance risks case, and the general case which is determined through the first equation in (3.14). We observe that, except in the nocorrelation case (see Figure 3(c)), the ROIS always dominates the RORS (see Figures 3(a) and 3(b)). Our numerical results show-
 similar behaviours of the ROIS and the RORS with respect to the EIS coefficient. In addition, all three graphs show a monotonic decline (with different magnitude) of ROIS and RORS as risk aversion increases. On contrary, our numerical results show that the EIS has little effect on the ROIS and the RORS. In Figure 4 shows the sensitivity of the value function with respect to the EIS coefficient (see Figure 4(a)), the risk aversion coefficient (see Figure 4(b)) and the discount factor (see Figure 4-
(c)) for all the three cases mentioned in the previous paragraph.
5. Conclusion
This paper addresses the complex problem of how an ambiguity-averse insurer should optimally manage consumption, investment, and reinsurance over a finite time horizon. The insurer’s wealth dynamics incorporate a financial market (a risk-free bond and a risky asset) and an insurance surplus process based on the diffusion approximation of the classical Cram ́er-Lundberg model. A key challenge is that the insurer operates under model uncertainty (ambiguity) regarding the true probabilities of asset -
returns and insurance claims. Furthermore, the insurer’s preferences are modeled using Epstein-Zin recursive utility, which allows for a separation between risk aversion

12 ELIZABETH DADZIE, WILFRIED KUISSI-KAMDEM, AND MARCEL NDENGO
(a) (b)
(c)
Figure 4. The value function for all cases.
and the elasticity of intertemporal substitution (EIS), a more realistic and flexible framework than traditional time-additive utilities. To solve this robust control problem, a max-min optimisation problem is formulated, where the insurer maximises utility under the worst-case scenario from a set of plausible models, penalised by relative entropy. The solution is achieved by characterising the problem through a system of coupled forward-backward stochastic differential equations (FBSDEs). Using t-
he martingale optimality principle, a closed-form analytical expressions for the optimal consumption is derived, investment, reinsurance, and the corresponding worst-case distortion process studied. Through simulation, the results observed yield several important insights. The explicit formulas show that the optimal reinsurance strategy depends on financial market parameters, and the investment strategy depends on insurance market parameters, demonstrating an intrinsic codependence even when the t-
wo markets are uncorrelated. Numerical analyses confirm that optimal consumption decreases with higher risk aversion and EIS, while both investment and reinsurance strategies monotonically decline as risk aversion increases. The study successfully integrates robustness, recursive preferences, and liability management into a unified framework, providing actionable strategies for insurers navigating deep uncertainty.
Appendix A. Proof of Proposition 2.1
Proof. We construct V c,ξ, given by (2.13), via the BSDE
V c,ξ
t = h(cT ) +
ZT
t
f (cs, V c,ξ
s )+ 1
2Φ ∥ξs∥2(1 − γ)V c,ξ
s ds −
ZT
t
Z c,ξ
t dBQξ
s . (A.1)
Recall the definition of f in (2.10) with γ, ψ > 1 (that is, θ < 0). Then the generator of the BSDE (A.1) is not Lipschitz. We obtain the unique solution of (A.1) in a suitable space via the transformation
Yt, Zt := e
Rt 0
1
2Φ ∥ξs∥2ds(1 − γ) V c,ξ
t , Zc,ξ
t , t ∈ [0, T ],

ROBUST OPTIMAL CONSUMPTION, INVESTMENT AND REINSURANCE 13
so that Equation (A.1) becomes
Yt = e−δθT e
RT 0
1
2Φ(1−γ) ∥ξs∥2dscT
1−γ
+
ZT
t
δθe−δs e
Rs 0
1
2Φ(1−γ) ∥ξu∥2ducs
1− 1
ψ Y 1− 1
θ
s ds −
ZT
t
ZtdBQξ
s . (A.2)
This is precisely the type of BSDE considered in [12, Prop. 2.2] with cs replaced by
e
Rs 0
1
2Φ(1−γ) ∥ξu∥2ducs for 0 ≤ s ≤ T . Hence, by the proof of [12, Prop. 2.2], the unique solution (Y, Z) of the BSDE (A.2) is such that Y is continuous, strictly positive and belongs to the class
(D), and R T
0 ∥Zs∥2ds < ∞ Qξ-a.s. Using the fact that V c,ξ
t =1
1−γ e− R t
0
1
2Φ ∥ξs∥2dsYt for t ∈ [0, T ],
with t 7→ 1
1−γ e− R t
0
1
2Φ ∥ξs∥2ds bounded almost surely, we deduce that the process V c,ξ is continuous, strictly negative and of class (D). Moreover, using the fact that Φ ≥ 0, we have
ZT
0
∥Z c,ξ
s ∥2ds = 1
(1 − γ)2
ZT
0
e− R s
0
1
Φ ∥ξu∥2du∥Zs∥2ds
<1
(1 − γ)2
ZT
0
∥Zs∥2ds < ∞.
Hence, R T
0 ∥Zsc,ξ∥2ds < ∞ Qξ-a.s. That concludes the proof. □
Appendix B. Proof of Proposition 3.1
Proof. We show that the triple (Xb, Y, Z) given by (3.13) satisfies the FBSDE (3.10). Let x ̄ denotes the constant defined by x ̄ := xe − rm − δψ + Φ
(γ+Φ)2 ∥η∥2 . Applying Itˆo’s formula to Y we obtain
dYt = −x ̄ermt exp −1 + 2(γ + Φ)
2(γ + Φ)2 ∥η∥2t + 1
γ + Φ η⊺Bt dt
+ x ̄ ermT − ermt
rm
1
γ + Φ ∥η∥2dt + 1
γ + Φ η⊺dBt exp −1 + 2(γ + Φ)
2(γ + Φ)2 ∥η∥2t + 1
γ + Φ η⊺Bt
= − x ̄ermt + x ̄ ermT − ermt
rm
1
γ + Φ ∥η∥2 exp −1 + 2(γ + Φ)
2(γ + Φ)2 ∥η∥2t + 1
γ + Φ η⊺Bt dt
+ x ̄ ermT − ermt
rm
exp −1 + 2(γ + Φ)
2(γ + Φ)2 ∥η∥2t + 1
γ + Φ η⊺Bt
1
γ + Φ η⊺dBt. (B.1)
Using the definition of Y in (3.13) we deduce that
x ̄ ermT − ermt
rm
exp −1 + 2(γ + Φ)
2(γ + Φ)2 ∥η∥2t + 1
γ + Φ η⊺Bt
1
γ + Φη
=1
γ + Φ Yt + e−rT G η.
Let Zt = 1
γ+Φ Yt + e−rT G η for t ∈ [0, T ]. Then the generator of the BSDE (B.1) becomes
Z⊺
t η − x ̄ermt exp −1 + 2(γ + Φ)
2(γ + Φ)2 ∥η∥2t + 1
γ + Φ η⊺Bt .

14 ELIZABETH DADZIE, WILFRIED KUISSI-KAMDEM, AND MARCEL NDENGO
Hence, using the definition of xe, ξb and Xbt + ertYt, 0 ≤ t ≤ T , we have
dYt = − e−rt δψ
ψ−1 +r+ 1
2
1
γ + Φ ∥η∥2− δθ
1−γ
Xbt + ertYt − Z⊺
t η dt + Z⊺
t dBt
= − e−rt δψ
ψ−1 +r+ 1
2
1
γ + Φ ∥η∥2− δθ
1−γ
Xbt + ertYt − Z⊺
t η dt
+ Z⊺
t dBQξb
t− Φ
γ + Φ ηdt
= − e−rt δψ
ψ−1 +r+ 1
2
1
γ + Φ ∥η∥2− δθ
1−γ
Xbt + ertYt − γ
γ + ΦZ⊺
t η dt
+ Z⊺
t dBQξb
t.
Similar arguments applied to Xb give
d
Xbt = rXbt + − δψ+ 1
γ + Φ ∥η∥2 (Xbt + ertYt) − γ
γ + Φ ertZ⊺
t η dt
+1
γ + Φ (Xbt + ertYt)η⊺ − ertZ⊺
t dBQξb
t.
Local uniqueness follows from lemma 2.1 in [11]. That concludes the proof. □
Appendix C. Proof of Lemmas 3.7, 3.8 and 3.9, and Theorem 3.5
Proof of Lemma 3.7. The proof is split in three steps. Step 1: (The positivity of Xbt + ertYt > 0 for t ∈ [0, T ]). Since Xbt + ertYt = xeφt, the proof follows directly from the first and third conditions in Assumption 3.3, and the positivity of φ defined in (3.12). Step 2: (The class (D) property of positivity of (Xb + ertY )1−γ). We have
(
Xbt + ertYt)1−γ
=
xe1−γ exp − δψθ + (1 − γ)(γ + 3Φ − 1)
2(γ + Φ)2 ∥η∥2 + δθ t + 1 − γ
γ + Φ η⊺Bt
=
xe1−γ exp − δψθ + 3Φ(1 − γ)
2(γ + Φ)2 ∥η∥2 + δθ t E
Z 1−γ
γ + Φ η⊺dB t, (C.1)
where E R βsdBs t := exp − 1
2
Rt
0 ∥βs∥2ds+R t
0 βsdBs is the Dole ́ans-Dade exponential at time t.
Observe that the process E R 1−γ
γ+Φ η⊺dB is a P-martingale (hence of class (D)); because 1−γ
γ+Φ η⊺ ∈ R2. Hence the right-side of (C.1) is of class (D) as a product of a bounded deterministic function (because the constant xe is positive and finite) and a process of class (D). Thus, (Xb + ertY )1−γ is of class (D). Step 3: (Confirm that (cb, ξb) ∈ Aa). Recall from (3.7) and (3.5) that ξbt = Φ
γ+Φ η (meaning, ξb
is a constant) and cbt = δψ(Xbt + ertYt) for t ∈ [0, T ]. Then, using the definition of φ in (3.12), Girsanov theorem and the facts that cT = XbT + erT YT (see Definition 2.2) and ξb is a constant,

ROBUST OPTIMAL CONSUMPTION, INVESTMENT AND REINSURANCE 15
we obtain
EQξbh
e
RT 0
1
2Φ ∥ξbs∥2dsc1−γ
T
i
=E
h
δψ(1−γ)e
Φ
2(γ+Φ)2 ∥η∥2T E
Z
−Φ
γ + Φ η⊺dB
T
× exp − δψθ + (1 − γ)(γ + 3Φ − 1)
2(γ + Φ)2 ∥η∥2 + δθ T + 1 − γ
γ + Φ η⊺BT
i
=E
h
δψ(1−γ)e
Φ
2(γ+Φ)2 ∥η∥2T exp − δψθ + Φ(1 − γ)
2(γ + Φ)2 ∥η∥2 + δθ T
×E
Z 1−γ−Φ
γ + Φ η⊺dB
T
i
= δψ(1−γ)e
Φ
2(γ+Φ)2 ∥η∥2T exp − δψθ + Φ(1 − γ)
2(γ + Φ)2 ∥η∥2 + δθ T
< ∞,
where the third equality holds due to E R 1−γ−Φ
γ+Φ η⊺dB being a P-martingale. Besides, we have
EQξ h Z T
0
e−δsc1− 1
ψ
s ds
i
= δψ−1
xe1− 1
ψE
h
E
Z
−Φ
γ + Φ η⊺dB
T
×
ZT
0
e−δs exp − δψ + ψ
ψ−1
γ + 3Φ − 1
2(γ + Φ)2 ∥η∥2 + δ s + ψ
ψ−1
1
γ + Φ η⊺Bs ds
i
≤ δψ−1
xe1− 1
ψE
h
E
Z
−Φ
γ + Φ η⊺dB
2
T
i1
2
×E
h ZT
0
exp − δψ + ψ
ψ−1
γ + 3Φ − 1
2(γ + Φ)2 ∥η∥2 s + ψ
ψ−1
1
γ + Φ η⊺Bs ds
2
i1
2
≤ δψ−1
xe1− 1
ψE
h
exp − Φ
γ+Φ
2
∥η∥2T − 2Φ
γ + Φ η⊺BT
i1
2
× T2E
hZ T
0
exp − 2δψ + ψ
ψ−1
γ + 3Φ − 1
(γ + Φ)2 ∥η∥2 s + 2ψ
ψ−1
1
γ + Φ η⊺Bs ds
i1
2
= δψ−1
xe1− 1
ψ exp Φ2
2(γ + Φ)2 ∥η∥2T E
h
E
Z
− 2Φ
γ + Φ η⊺dB
T
i1
2
×E
hZ T
0
exp − 2δψ + ψ
(ψ − 1)2
(ψ − 1)(γ + 3Φ − 1) + 2ψ
(γ + Φ)2 ∥η∥2 + δ s
×E
Z 2ψ ψ−1
1
γ + Φ η⊺dB
s
ds
i1
2
= δψ−1
xe1− 1
ψ exp Φ2
2(γ + Φ)2 ∥η∥2T
×
ZT
0
exp − 2δψ + ψ
(ψ − 1)2
(ψ − 1)(γ + 3Φ − 1) + 2ψ
(γ + Φ)2 ∥η∥2 + δ s ds
< ∞,
where the first inequality follows from Cauchy-Schwarz’s inequality, the second comes from
Jensen’s inequality, and the third equality holds due to the fact that E R − 2Φ
γ+Φ η⊺dB and
E
R 2ψ ψ−1
1
γ+Φ η⊺dB are P-martingales. □

16 ELIZABETH DADZIE, WILFRIED KUISSI-KAMDEM, AND MARCEL NDENGO
Proof of Lemma 3.8. The proof follows similar arguments as in the third step in the proof of proposition 2.2 in [12] with the generators F (s, cs, Ys) and F (s, cs, Y ̃s) replaced by f (cs, Ys) +
1
2Φ ∥ξs∥2(1 − γ)Ys and f (cs, Y ̃s) + 1
2Φ ∥ξs∥2(1 − γ)Y ̃s, respectively, for all s ∈ [0, T ]. □
Proof of Lemma 3.9. For a triple (c, π, ξ) of admissible consumption, investment-reinsurance and distortion strategies (that is, (c, π, ξ) ∈ AAAI ; see Definition 2.2). Let (Mt)t∈[0,T ] be the process given in (3.2) by
M c,π,ξ
t := e−δθt (Xt + ertYt)1−γ
1−γ
+
Zt
0
f cs, e−δθs (Xs + ersYs)1−γ
1−γ + 1
2Φ ∥ξ∥2(Xs + ersYs)1−γ ds.
Using (3.3) and (3.4) we deduce that M is a local super-martingale. Moreover, using the DoobMeyer decomposition and martingale representation, there exists an increasing process A and
a process ZM such that M = −A + R ·
0 ZsM dBQξ
s . Hence, (e−δθ· (X+e
R
0 rsdsY )1−γ
1−γ , ZM ) is a super
solution to (2.16) with integrable terminal condition e−δθT (XT −G)1−γ
1−γ ; see Lemma 3.8 for the notion
of sub-/super- solutions of BSDEs. Now, consider the utility V c,ξ associated to the consumption stream c and the terminal lump sum XT − G; meaning that V c,ξ is the first part of the solution of the BSDE (2.16) with terminal value h(XT − G). Therefore, using Lemma 3.8 we confirm Equation (3.16). □
Proof of lemma 3.10. Consider the process M c,π,ξ defined by (3.3) for all (c, π, ξ) ∈ AAAI . For the consumption cb, investment-reinsurance πb and distortion process ξb (with associated function H, given by (3.8), of the BSDE (2.18)) given by (3.5), (3.6), (3.7) and , respectively, one can show that
dM cb,πb,ξb
t = e−δθt (XbtF + e
Rt
0 rsdsYtF )1−γ
1−γ
1−γ
γ + Φ η⊺dBQξ
t , 0 ≤ t ≤ T. (C.2)
On the other hand, using successively (3.2) and (2.10) we have
dM cb,πb,ξb
t = d e−δθt (XbtF + e
Rt
0 rsdsYtF )1−γ
1−γ
+ f cbt, e−δθt (Xbt + ertYt)1−γ
1−γ + Φ
2(γ + Φ)2 ∥η∥2(Xbt + ertYt)1−γ dt
= d e−δθt (XbtF + e
Rt
0 rsdsYtF )1−γ
1−γ
+ δψθ + Φ(1 − γ)
2(γ + Φ)2 ∥η∥2eδθt e−δθt (XbtF + e
Rt
0 rsdsYtF )1−γ
1 − γ dt. (C.3)
Hence, combining (C.2) and (C.3) we obtain
d e−δθt (XbtF + e
Rt
0 rsdsYtF )1−γ
1 − γ + δψθ + Φ(1 − γ)
2(γ + Φ)2 ∥η∥2eδθt e−δθt (XbtF + e
Rt
0 rsdsYtF )1−γ
1 − γ dt
= e−δθt (XbtF + e
Rt
0 rsdsYtF )1−γ
1−γ
1−γ
γ η⊺
t dBQξ
t . (C.4)
Multiplying both sides of (C.4) by exp R t
0 δψθ + Φ(1−γ)
2(γ+Φ)2 ∥η∥2eδθs ds , 0 ≤ t ≤ T , we have
Mft = Mf0E
Z 1−γ
γ η⊺dBQξ
t for t ∈ [0, T ], (C.5)
where E(R β⊺dBQξ )t := exp − 1
2
Rt
0 ∥βs∥2ds + R t
0 βs⊺dBQξ
s. □

ROBUST OPTIMAL CONSUMPTION, INVESTMENT AND REINSURANCE 17
Proof of Theorem 3.5. Thanks to Lemma 3.7 the uplet (cb, πbS, πbre, ξb) given by (3.14) is admissible in the sense of Definition 2.2 with πb = (πbS, πbre)Σ. Next, we prove that (cb, πbS, πbre, ξb) is optimal. Let Mf be as in Lemma 3.10. Thanks to Lemma 3.10, there exists a square integrable process Ze such that
d
Mft = ZetdBQξb
t , 0 ≤ t ≤ T. (C.6)
Substituting (3.17) into the left-side of (C.6) and applying Itˆo’s formula we obtain
d e−δθt (XbtF + e
Rt
0 rsdsYtF )1−γ
1 − γ + δψθ + Φ(1 − γ)
2(γ + Φ)2 ∥η∥2eδθt e−δθt (XbtF + e
Rt
0 rsdsYtF )1−γ
1 − γ dt
= exp −
Zt
0
δψθ + Φ(1 − γ)
2(γ + Φ)2 ∥η∥2eδθs ds ZetdBQξb
t.
Hence, using the fact that
f
cbt, e−δθt (Xbt + ertYt)1−γ
1−γ + Φ
2(γ + Φ)2 ∥η∥2(Xbt + ertYt)1−γ
= δψθ + Φ(1 − γ)
2(γ + Φ)2 ∥η∥2eδθt e−δθt (XbtF + e
Rt
0 rsdsYtF )1−γ
1−γ
for t ∈ [0, T ], and YT = −e−rT G we have (recall the definition of h just below (2.10))
(
Xb0 + Y0)1−γ
1−γ =E
h
h(XbT − G) +
ZT
0
f
cbt, e−δθt (Xbt + ertYt)1−γ
1−γ
+Φ
2(γ + Φ)2 ∥η∥2(Xbt + ertYt)1−γ ds
i
.
Hence the upper bound in Lemma 3.9 is attained by (cb, πbS, πbre, ξb). We conclude that (cb, πbS, πbre, ξb) is optimal. □
Acknowledgments
We would like to acknowledge fruitful discussions with Prof. Olivier Menoukeu Pamen.
References
[1] Asmussen, S., Steffensen, M.: Risk and Insurance. Springer, Berlin, 2020.
[2] Ba ̈uerle, N.: Benchmark and mean-variance problems for insurers. Mathematical Methods of Operations Research, 62: 159–165, 2005.
[3] Chen, Z., Yang, P.: Robust optimal reinsurance–investment strategy with price jumps and correlated claims. Insurance: Mathematics and Economics, 92: 27–46, 2020.
[4] Epstein, L.G., and Zin, S.E.: Substitution, risk aversion, and the temporal behavior of consumption and asset returns: A theoretical framework. Econometrica, 57: 937–969, 1989. [5] Hansen, L., Sargent, T.: Robust control and model uncertainty. American Economic Review, 91: 60–66, 2001.
[6] Hu, Y., Imkeller, P., M ̈uller, M.: Utility maximization in incomplete markets. Annals of Applied Probability, 15: 1691–1712, 2005.
[7] Kuissi-Kamdem, W.: Asset-liability management with Epstein-Zin utility under stochastic interest rate and unknown market price of risk. hal-05345383, 2025. [8] Ma, J., Lu, Z., Chen, D.: Optimal reinsurance-investment with loss aversion under rough Heston model. Quantitative Finance, 23: 95–109, 2023.
[9] Maenhout, P.J.: Robust portfolio rules and asset pricing. Review of Financial Studies, 17: 951–983, 2004. [10] Schmidli, H.: Stochastic Control in Insurance. Springer-Verlag, London, 2008.
[11] Xie, B., Yu, Z.: An exploration of Lp-theory for forward-backward stochastic differential equations with random coefficients on small durations. Journal of Mathematical Analysis and Applications, 483: 123642, 2020.

18 ELIZABETH DADZIE, WILFRIED KUISSI-KAMDEM, AND MARCEL NDENGO
[12] Xing, H.: Consumption–investment optimization with Epstein–Zin utility in incomplete markets. Finance and Stochastics, 21: 227–262, 2017.
Elizabeth Dadzie: Department of Mathematics, University of Ghana, Accra, LG 25, Ghana; African Institute for Mathematical Sciences, Accra, LG DTD 20046, Ghana Email address: edadzie@aims.edu.gh
Wilfried Kuissi-Kamdem: Department of Mathematics, University of Rwanda, Kigali, 4285, Rwanda; African Institute for Mathematical Sciences, Accra, LG DTD 20046, Ghana; Department of Mathematical Stochastics, University of Freiburg, Freiburg, 79104, Germany
Email address: donatien@aims.edu.gh, wilfried.kuissi.kamdem@stochastik.uni-freiburg.de
Marcel Ndengo: Department of Mathematics, University of Rwanda, Kigali, 4285, Rwanda Email address: serandengo@gmail.com

---

## Processing Information

- **Processing Library:** Zotero PDFWorker
- **Processing Date:** 2026-02-10T18:17:08.428Z
- **Text Length:** 43616 characters
- **Success:** Text extraction completed
- **PDF Library Used:** Zotero PDFWorker
- **Pages Processed:** 18 of 18
