# PDF Document: Gozzo - 2025 - Adaptive Multilevel Splitting First Application to Rare-Event Derivative Pricing.pdf

**File Path:** Gozzo - 2025 - Adaptive Multilevel Splitting First Application to Rare-Event Derivative Pricing.pdf

**Processed Date:** 2026-02-10T18:18:45.919Z

**File Size:** 1984.12 KB

**Total Pages:** 22

**Extracted Pages:** 22

**PDF Library:** Zotero PDFWorker

**Attachment Item ID:** 3505

**Title:** Adaptive Multilevel Splitting: First Application to Rare-Event Derivative Pricing

**Collection:** Large Files > Random Papers

---

## Extracted Text Content

Adaptive Multilevel Splitting: First Application
to Rare-Event Derivative Pricing
Riccardo Gozzo∗
Abstract
This work analyzes the computational burden of pricing binary options in rare-event settings and introduces an adaptation of the adaptive multilevel splitting (AMS) method for financial derivatives. Standard Monte Carlo is inefficient for deep out of the money binaries due to discontinuous payoffs and low exercise probabilities, requiring very large samples for accurate estimates. An AMS scheme is developed for binary options under Black–Scholes and Heston dynamics, reformulating the rare-event pr-
oblem as a sequence of conditional events. Numerical experiments compare the method to Monte Carlo and to other techniques such as antithetic variables and multilevel Monte Carlo (MLMC) across four contracts: European digital calls and puts, and Asian digital calls and puts. Results show up to a 200-fold computational gain for deep out-of-the-money cases while preserving unbiasedness. No evidence is found of prior applications of AMS to financial derivatives. The approach improves pricing efficien-
cy for rare-event contracts such as parametric insurance and catastrophe linked securities. An open-source Rcpp implementation is provided, supporting multiple discretizations and importance functions.
Keywords: adaptive multilevel splitting; binary options; monte carlo simulation; rare event simulation; variance reduction
1 Introduction
The accurate and efficient pricing of financial derivatives is increasingly critical in modern markets, where advanced numerical methods are required for complex instruments [1]. The computational challenges of rare-event simulation extend beyond academic interest, creating bottlenecks that affect market functionality. Inaccurate pricing of low-probability events limits the ability of market makers to provide competitive quotes, reducing liquidity for these instruments [2]. This difficulty is pron-
ounced in the insurance sector, where parametric products depend on binary triggers linked to observable parameters such as earthquake magnitude or wind speed [3, 4]. Computational limitations restrict coverage of catastrophic risks and constrain the development of innovative risk-transfer mechanisms in financial and insurance markets.
∗PhD Student, Scuola Normale Superiore, Pisa. Work conducted while at University of Milano-Bicocca.
1
arXiv:2510.23461v1 [q-fin.CP] 27 Oct 2025

These challenges are evident in binary options, which share structural similarities with parametric insurance through trigger-based payoffs. Their discontinuous structure pays a fixed amount if the underlying asset crosses a predetermined barrier at expiration and zero otherwise [5, 6]. This all-or-nothing feature makes pricing highly sensitive to the probability of rare events, particularly for deep out-of-the-money contracts where accurate tail estimation is critical.
Addressing these difficulties naturally leads to simulation-based techniques. Monte Carlo methods are widely used for pricing complex derivatives due to their flexibility in high-dimensional settings [7]. The convergence rate of O(N −1/2) creates a computational bottleneck, especially for binary options with low exercise probabilities. Reliable estimation in such cases typically requires millions of paths, rendering crude Monte Carlo impractical [8, 9].
Classical variance-reduction techniques attempt to address these challenges. Antithetic variates reduce variance through negative correlation between paired samples [10, 7], but the theoretical gain is bounded by a factor of two [11]. Control variates can be more effective but require auxiliary variables that are both analytically tractable and highly correlated with the target payoff [12]. For discontinuous payoffs such as binary options, such variables are difficult to construct, limiting applic-
ability.
More advanced methods have been developed. Importance sampling modifies the probability measure to increase the frequency of rare outcomes and applies likelihood-ratio weighting to remove bias [7, 13]. Its effectiveness depends on the design of suitable distributions, which is problem-specific and difficult to generalize [14]. Another prominent approach is multilevel Monte carlo (MLMC), which reduces complexity by combining simulations on coarse and fine discretizations [15, 16]. While efficient f-
or path-dependent derivatives, MLMC is not tailored to extreme-event pricing, focusing instead on reducing overall cost.
Recent research combines these techniques to overcome individual limitations. Hybrid methods integrate MLMC with importance sampling to improve efficiency while concentrating sampling in critical regions [17, 18]. Machine learning further enhances importance sampling, with neural networks learning tilting parameters [19] and tensortrain decompositions enabling high-dimensional distribution approximation [20].
This work addresses the computational challenges of binary option pricing by applying the adaptive multilevel splitting (AMS) method [21]. AMS extends classical splitting techniques for rare-event simulation [22] and builds on the foundations of sequential Monte Carlo [23]. Originally developed in reliability analysis and statistical physics [24, 25, 26, 27], AMS decomposes a rare event into a sequence of more frequent conditional events, transforming a single intractable estimation into multiple -
tractable subproblems. Although AMS has achieved strong results in other scientific domains, no prior applications are documented in financial derivatives pricing. Recent advances provide theoretical guarantees of unbiasedness and convergence [28, 29, 30], creating the basis for its use in finance.
The contributions of this study are fourfold. First, an AMS adaptation is introduced for binary option pricing under Black–Scholes and Heston dynamics [31, 32], addressing the specific challenges of risk-neutral valuation and financial time series. Second, the sensitivity of the estimator to parameter choices, including the number of trajectories and resampling rates, is analyzed. Third, numerical experiments compare AMS to
2

standard Monte Carlo, showing substantial gains for deep out-of-the-money options. Fourth, an open-source Rcpp implementation is released, supporting Euler, Milstein, and Andersen discretizations [33, 34, 35], two importance functions, and six binary option variants, offering a flexible toolkit for rare-event simulation in derivatives pricing.
The paper is structured as follows. Section 2 reviews the background on SDE discretization, binary option pricing, and AMS methodology. Section 3 presents the limits of classical variance-reduction techniques. Section 4 illustrates the adapted AMS algorithm, establishes its theoretical properties, details the numerical implementation, and reports results against benchmark approaches. Section 5 concludes with a summary of findings and directions for future research.
2 Research methodology
2.1 Stochastic differential equation models
Numerical experiments are conducted under two standard models for asset price dynamics: the Black–Scholes model [31] and the Heston model [32]. These frameworks allow assessment of the robustness of the AMS approach across different model complexities.
For the Black–Scholes case the exact solution, obtained via logarithmic transformation, removes discretization error [36, 7]:
Sk+1 = Sk exp
h
r − σ2
2 ∆t + σ∆Wk
i
. (1)
For the Heston model the variance process requires a scheme that preserves positivity and avoids bias. The quadratic–exponential (QE) method of Andersen [35] is employed, the standard approach for accurate Heston simulation. It matches the first two conditional moments of Vt+∆t | Vt and selects the update regime according to
ψ ≤ ψc : Vt+∆t = a(b + Z)2, Z ∼ N (0, 1),
ψ > ψc : Vt+∆t =

 
 
0 with probability p = ψ − 1
ψ +1,
β−1 log 1 − p
1 − U with probability 1 − p,
where U ∼ Uniform(0, 1) and β = (1 − p)/m.
The asset price is then updated as
St+∆t = St exp
h
r∆t + K0 + K1Vt + K2Vt+∆t + pK3Vt + K4Vt+∆t ε
i
, (2)
with ε ∼ N (0, 1). The coefficients {K0, . . . , K4} and the parameters a, b, and ψ are given explicitly in [35].
This construction preserves the positivity of variance and yields accurate joint dynamics, making it the reference scheme for Heston simulations in rare-event pricing.
3

2.2 Binary option pricing
Binary options are derivatives with discontinuous payoffs that depend on whether the underlying asset satisfies specific conditions. Four contracts are considered:
• digital call: Payoff = 1{ST >K}
• digital put: Payoff = 1{ST <K}
• asian digital call: Payoff = 1 1
m
Pm
t=1 St>K
• asian digital put: Payoff = 1 1
m
Pm
t=1 St<K
The discontinuous structure makes pricing sensitive to small path variations and generates high variance in standard Monte Carlo estimates. Computational difficulties intensify for rare-event regimes, such as deep out of the money contracts, where the target probability P(A) is very small and required sample sizes grow inversely with its magnitude. In these settings, crude Monte Carlo becomes impractical. Binary options are therefore an effective test case for adaptive multilevel splitting: not on-
ly do they reallocate computational effort toward trajectories likely to activate the payoff condition, but their payoff naturally corresponds to the estimation of a probability, making AMS directly and rigorously applicable.
2.3 Adaptive multilevel splitting (AMS)
Adaptive multilevel splitting (AMS) [21, 24] is a variance reduction method for estimating the probability of rare events by decomposing the target set into a sequence of more probable intermediate events. Instead of brute force sampling, AMS focuses computation on trajectories that are likely to reach the rare-event region. The idea can be illustrated with a random walk that must reach a high threshold Lmax. Rather than simulating many independent paths and counting those that succeed, AMS repeat-
edly removes poorly performing trajectories and replicates those that progress toward the target.
4

Figure 1: Illustration of the first two iterations of the AMS algorithm, where at each iteration the current threshold is L = 3 and the worst-performing trajectory (i.e., the one with the lowest maximum) is discarded (K = 1); a betterperforming trajectory is cloned and resimulated from the time it first crossed L [24]
Algorithm description: Given a Markov process {Xt}t≥0 with initial distribution η0, the goal is to estimate the rare-event probability p = P(Xτ ∈ D), where τ is a stopping time and D is the rare set. Adaptive multilevel splitting requires three key ingredients expressed here in a single narrative.
First, an importance function ξ : Rd → R measures progress toward D. Theorem 3.2 of [28] shows that unbiasedness holds under the relaxed condition x ∈ D =⇒ ξ(x) ≥ Lmax, without the stricter equivalence ξ(x) ≥ Lmax ⇐⇒ x ∈ D. This weaker requirement is useful in financial applications, although the closer ξ aligns with D the lower the estimator variance.
Second, the algorithm fixes a sample size n and a discard parameter k with 1 ≤ k < n. Choosing 1 ≤ k ≤ n/2 in practice maintains diversity of the trajectories.
Third, the importance of an entire trajectory X = (Xt)t∈[0,τf ] is
I(X) = sup
t∈[0,τf ]
ξ(Xt). (3)
The algorithm starts with n i.i.d. replicas of the Markov chain X0
j = (X0
j,t )t∈N ,
j = 1, . . . , n, initialized outside D. At each iteration:
1. Compute Sj = I(Xj) for all replicas.
2. Sort {Sj} and set Z = S(k), the k-th order statistic.
3. If Z ≥ Lmax or all Sj are equal, terminate.
4. Discard the k trajectories with Sj ≤ Z and replace them by clones of survivors X(i), i > k, restarted from the first crossing time of Z and resimulated forward. Randomized cloning preserves unbiasedness.
5. Update the common weight W ← n−k
n W , with W0 = 1.
5

After Q iterations the probability estimator is
pˆAMS = W · 1
n
n
X
j=1
1{Xj ∈D}, (4)
which is unbiased for any admissible importance function ξ, and whose variance decreases as ξ aligns more closely with the rare-event set.
Operatively, the adaptive multilevel splitting (AMS) algorithm proceeds as detailed in Algorithm 1:
Algorithm 1 Adaptive multilevel splitting (AMS)
Require: Sample size n, discard count k, importance function ξ, final level
Lmax.
1: Generate initial trajectories {Xj}n
j=1 up to their stopping times τj.
2: Compute initial levels Sj ← I(Xj
t ) for each trajectory j. 3: Sort the levels {Sj }j=1,...,n as S(1) ≤ S(2) ≤ · · · ≤ S(n). 4: Set Z ← S(k), iteration counter q ← 0. 5: while Z < Lmax do
6: Determine the set of trajectories indices Jq = {j : Sj > Z}. 7: Compute the number of trajectories to discard: Kq = |{j : Sj ≤ Z}|. 8: Discard the Kq trajectories with Sj ≤ Z. 9: Clone exactly Kq trajectories from the set Jq. 10: Resimulate each cloned trajectory starting from its hitting time of the set {ξ > Z} up to its stopping time τj. 11: Update Sj ← max0≤t≤τj ξ(Xj
t ) for each cloned trajectory. 12: Sort the levels {Sj }j=1,...,n as S(1) ≤ S(2) ≤ · · · ≤ S(n). 13: Set Z ← S(k) 14: q ← q + 1. 15: end while
16: Compute the final AMS estimator:
pˆAMS =
q
Y
i=0
n−k n
!
×1
n
n
X
j=1
1{Xj ∈D}.
2.3.1 Theoretical properties of AMS
Well-posedness and termination. Let X = (Xt)t≥0 be a Markov process with importance function ξ and rare set D. For fixed n and k ∈ {1, . . . , n − 1}, AMS is wellposed: the cutting level Z is an order statistic and, under standard assumptions (Feller property of X, continuity of ξ, strict entrance condition), the algorithm terminates almost surely after finitely many iterations [24].
Unbiasedness. The estimator
pˆAMS =
Q
Y
q=1
n−k n
1 n
n
X
j=1
1{X(j)∈D} (5)
6

is unbiased for any ξ and k. It suffices that D ⊂ {ξ ≥ Imax}, without requiring ξ(x) ≥ Imax ⇐⇒ x ∈ D [28, 37, 24]. Unbiasedness extends to unnormalised measures γ(φ) = E[φ(Xτ )1D(Xτ )]. Randomised cloning and correct handling of ties are necessary to avoid bias.
LLN and CLT. A law of large numbers holds for AMS estimators. Under mild assumptions, √n γ(n)
1 (φ) − γ1(φ) ⇒ N (0, σ2
1 (φ)),
with asymptotic variance characterized via the Fleming–Viot formulation [24, 38]. For k = 1 and target probability p,
√n(pˆAMS − p) ⇒ N (0, σ2), −p2 log p ≤ σ2 ≤ 2p(1 − p).
A general CLT for k > 1 remains open, though evidence suggests n−1/2 scaling with variance comparable to SMC.
Role of the importance function. Unbiasedness does not depend on ξ, but variance does. Poor or multi-channel choices inflate variance and may yield heavytailed errors. In practice, variance is controlled by testing alternative ξ and adjusting n or k [24, 28].
Key advantages. AMS adapts intermediate levels and branching rates on the fly, removing the need for a priori specification as in classical Multilevel Splitting [39] or Sequential Monte Carlo [40, 41]. The algorithm maintains a fixed population size n, ensuring robustness, parallel efficiency, and predictable memory use. It provides unbiased estimators for both rare-event probabilities and unnormalised measures γ(φ), enabling straightforward parallelization across independent runs [24, 28, 37].
3 Theoretical comparison with variance reduc
tion techniques
3.1 Antithetic variates: overview and limitations
Antithetic variates [42] reduce variance by pairing negatively correlated samples. In option pricing this corresponds to simulating each path together with its reflection obtained by negating Brownian increments. For monotone payoffs the estimator variance decreases, with a theoretical maximum reduction by a factor of two.
For binary options with probabilities as small as 10−6, a 2× gain is negligible relative to the computational burden.
3.2 Control variates: overview and limitations
Control variates reduce variance by exploiting correlation between the payoff Y and an auxiliary variable W with known expectation. The estimator
ψˆCV = 1
n
n
X
i=1
Yi − β(Wi − E[W ])
7

remains unbiased, with optimal β∗ = Cov(Y, W )/Var(W ) yielding
Var(ψˆCV) = 1
n Var(Y )(1 − ρ2
Y,W ).
Variance reduction is therefore effective only when W is strongly correlated with Y .For digital or Asian binaries, suitable highly correlated controls are unavailable, and variance reduction is marginal.
3.3 Multilevel Monte Carlo: overview and limitations
Multilevel Monte Carlo (MLMC) [15, 16] exploits a hierarchy of approximations X0, . . . , XL of the same quantity. The telescoping identity
E[XL] = E[X0] +
L
X
l=1
E[Xl − Xl−1]
reduces variance by coupling successive levels with shared randomness. The resulting estimator achieves mean-square error O(ε2) at cost O(ε−2), compared to O(ε−3) for standard Monte Carlo [15].
MLMC is effective for standard option pricing but less suited to rare-event estimation. In tail regimes, the variance of inter-level differences decays slowly, limiting efficiency for digital and barrier options. Optimal allocation of samples,
Nl ∝ ε−2pVl/Cl,
depends on variances Vl that are themselves costly to estimate and may behave irregularly across levels, especially in rare-event settings. These features complicate implementation and reduce the expected efficiency gains.
3.4 Importance sampling: overview and limitations
Importance sampling (IS) [43] estimates ψ = E[h(X)] by sampling from an alternative density g and reweighting:
ψˆg = 1
n
n
X
i=1
h(Yi) f (Yi)
g(Yi) , Yi ∼ g.
Efficiency depends on the choice of g, with the optimal density proportional to |h(y)|f (y), which is generally unavailable.
A common construction is exponential tilting via Girsanov’s theorem. For Browniandriven models, gθ(y) = eθy−ψ(θ)f (y) with cumulant generating function ψ(θ) = log E[eθY ]. The optimal parameter θ∗ satisfies ψ′(θ∗) = a, where a is the rare-event threshold.
In rare-event regimes IS becomes unstable. When exercise probabilities are of order 10−6, the equation ψ′(θ) = a may lack a solution or yield extreme θ∗, and evaluation of eθY produces flat likelihood landscapes with sporadic spikes. In such cases Newton–Raphson and related solvers fail to converge, and stochastic optimisers are equally unreliable [44].
Two further issues are critical.
8

Variance explosion: an inappropriate choice of g(y) can inflate the estimator’s variance instead of reducing it [43]. Payoff-specific design: effective importance sampling must be tailored to the payoff. Binary calls, binary puts, and Asian options require distinct tilting schemes, and multi-asset payoffs add combinatorial complexity [13].
AMS can be interpreted as a non-parametric analogue of IS: it requires only an importance function indicating progress toward the rare set, avoiding explicit tilting densities and unstable root-finding, and thus offering broader applicability across option classes.
4 AMS applications in finance
Having established the theoretical framework, AMS is now applied to binary option pricing under the Black–Scholes and Heston models. The Markov property of both dynamics makes them directly compatible with AMS, which relies on memoryless trajectories. The method is tested on the four binary contracts of Section 2.2, with efficiency gains most evident for deep out-of-the-money options where standard Monte Carlo becomes infeasible.
4.1 Importance function design
AMS performance depends critically on the importance function ξ, which steers trajectories toward the rare-event set. Two constructions are considered:
• Path-based functions. For European binaries, ξ is the asset price St; for Asian binaries, the arithmetic average up to t, 1
t
Pt
i=0 Sti . For puts, the sign is inverted. In all cases Lmax = K ensures D ⊆ {ξ > Lmax}.
• Analytical approximations. Black–Scholes digital formulas are used as importance functions,
CallBS = e−rT Φ(d2), (6)
PutBS = e−rT Φ(−d2), (7)
with d2 = ln(S/K)+(r−σ2/2)T
σ√T . At each t, St (or the running average for Asians)
is inserted as the spot input, regardless of the underlying model. Although exact only for European binaries under Black–Scholes, this construction captures the curvature of the pricing function and improves guidance toward the rare-event region. Here Lmax = 0.5 ensures D ⊆ {ξ > Lmax}.
Lemma 4.1 (Unbiasedness of AMS for digital options). Let (St) follow either the Black–Scholes dynamics
dSt = rSt dt + σSt dWt,
or the Heston system



dSt = rSt dt + √Vt St dW (1)
t,
dVt = κ(θ − Vt) dt + ξ√Vt dW (2)
t,
with (W (1), W (2)) a correlated Brownian pair. In both cases the state process is Markovian.
9

Let D be the rare–event set corresponding to the digital payoff (European or Asian, call or put). For the importance functions ξ introduced in Section 4.1, the sufficient condition
x ∈ D ⇒ ξ(x) ≥ Lmax
of [28, Theorem 3.2] holds. Then the AMS estimator of the risk–neutral probability p = Q(D) is
pˆAMS =
q
Y
i=0
n−k n
!
×1
n
n
X
j=1
1{X (j ) ∈D} ,
where q is the number of iterations required to reach the threshold Lmax. This estimator is unbiased, and the digital option value
Vˆ = e−rT pˆAMS
is therefore an unbiased estimator of the true price, with the same asymptotic variance properties as in the general AMS framework.
4.2 Parameter setting and option strikes for algorithm performance analysis
For the Black–Scholes model, volatility is fixed at σ = 0.2. For the Heston model, parameters are set to ρ = −0.5, κ = 2.0, θ = 0.04, and ψ = 0.3. All performance metrics are averaged over 50 independent runs, obtained by combining results from 5 different initial seeds, each used to generate 10 simulations, ensuring robust statistical confidence in the comparative analysis. Tests include European digital calls and puts with strikes 2.2 and 0.29, and Asian digitals. Under Black–Scholes, Asian stri-
kes are 1.7 (call) and 0.63 (put); under Heston, 1.6 and 0.55. In all cases option values are of order 7.5 × 10−6, representing rare-event regimes suitable for assessing AMS performance.
4.3 Results and discussion
4.3.1 Impact of the selection parameter K on algorithm performance
The selection parameter K determines the fraction of trajectories discarded at each iteration. Theory shows that asymptotic variance is minimized at K = 1 with an optimal importance function [24, 38], but this setting is computationally prohibitive.
We examine K values from 5% to 45% of N = 50,000 particles, in 5% increments, for a digital call under Heston and an Asian digital call under Black–Scholes, both using the path-based importance function (Section 4.1).
The results are reported in Table 1 and Figure 2.
10

Table 1: Execution time of the AMS algorithm for different rejection rates K under two option pricing settings. K Time (Digital, Heston) Time (Digital asian, Black-Scholes) 0.05 35.86 25.23 0.10 20.02 13.46 0.15 13.97 9.36 0.20 11.41 7.36 0.25 10.20 6.08 0.30 8.96 5.19 0.35 7.8 4.53 0.40 7.38 4.03 0.45 6.7 3.63
Figure 2: Relationship between k and the normalized variance (horizontal axis) for the simulation results
In the figures, blue markers correspond to the standard digital call option, while red markers represent the Asian digital call option. Results confirm the trade-off: small K requires more iterations and substantially longer runtime (up to 30 seconds in the Heston case). Estimator quality, however, shows no clear monotonic dependence on K, for these options, performance remains stable across the tested range.
11

4.3.2 Impact of the number of trajectories N on algorithm performance
The particle count N directly affects AMS performance. Larger N reduces estimator variance but increases runtime due to higher simulation and sorting costs. Theoretical analysis shows complexity of order N log(p) log(N ), accounting for the sorting step and the generation of one new trajectory per iteration [24, 38].
Numerical experiments under both Black–Scholes and Heston models, using the options of Section 4.3.1, confirm this trade-off. All tests use K = 0.45 and the path-based importance function.
Table 2: Execution time of the AMS algorithm as a function of the number of trajectories N under two option pricing settings. N Time (Digital, Heston) Time (Digital Asian, Black-Scholes) 50000 5.88 3.96 70000 8.79 6.08 90000 11.48 7.94 110000 14.03 9.66 130000 16.84 11.62 150000 19.44 13.37 170000 22.2 15.12 190000 25.06 17.19 210000 28.03 19.05
As reported in Table 2, computational cost grows consistently with N , in agreement with the predicted −N log(p) log(N ) scaling. Substituting the estimated p and tested N values yields an approximately constant ratio, supporting the theoretical complexity analysis.
These results highlight the inherent balance between variance reduction and runtime when tuning N for AMS in option pricing applications.
4.3.3 Analysis of option pricing results
Standard Monte Carlo is benchmarked against AMS, with multilevel Monte Carlo (MLMC) and antithetic variates as additional baselines. Within AMS, two importance functions are tested. Control variates are excluded due to negligible correlation with the payoff, and importance sampling is omitted since optimal tilting fails to converge in the rare-event regime considered and requires payoff-specific design.
Test cases focus on deep out-of-the-money contracts with exercise probabilities of order 10−6, where AMS achieves significant gains. For higher probabilities (p > 10−3), standard Monte Carlo remains competitive and AMS provides only limited advantage.
Performance is evaluated in terms of computational time (horizontal axis) and relative accuracy (vertical axis), defined as
√Var
Mean , with the mean computed over 50 independent runs. Results are reported in Figures 3,4.
12

The discard fraction is set to k = 0.45, as smaller values did not yield systematic variance reduction (Section 4.3.1).
Figure 3: Computational time (log scale) as a function of relative accuracy for different simulation methods for the Heston digital call and the Black–Scholes and Heston Asian digital call; numerical values are reported in Tables 5, 7, and 9
13

Figure 4: Computational time (log scale) as a function of relative accuracy for different simulation methods for the Heston digital put and the Black–Scholes and Heston Asian digital put; numerical values are reported in Tables 6, 8, and 10
14

The results demonstrate substantial efficiency gains of AMS across all tested settings (Figures 3,4).
Computational time reduction. For European binaries under Heston, AMS achieves speedups above 100, peaking over 200 at 5% accuracy. Against other variance reduction methods, the gain remains close to 100. For Asian binaries under Black–Scholes, improvements range from 25 to 40 over Monte Carlo, and 15 to 20 over MLMC. For digital options under Heston, both importance functions outperform Monte Carlo and MLMC; the first yields 6–10× gains over MLMC, the second 15–20×.
Role of the importance function. Performance depends only moderately on ξ. Both tested choices are effective; the Black–Scholes-based function (AMS2) provides smoother guidance via the Φ(d2) term, improving sampling efficiency in some cases.
Consistency across option types. Efficiency gains hold for European and Asian binaries under both models, indicating robustness across payoffs and dynamics.
Overall, AMS delivers unbiased estimates with significant computational savings relative to Monte Carlo, and remains competitive with advanced variance reduction methods, particularly in rare-event regimes.
4.4 Extreme case analysis
An extreme scenario is considered to further test AMS. A digital option under Black–Scholes with S0 = 1, K = 3.5, T = 1, and r = 0.03 has analytical value 2.509 × 10−10. Only the path-based importance function is used, to avoid embedding model information into ξ.
Table 3 reports results for a 10% relative accuracy target. For Monte Carlo, execution time is extrapolated analytically. With
ε=
pVar(pˆ)
p=
pp(1 − p)/N
p,
the required N is (1 − p)/(ε2p) ≈ 4 × 1011, corresponding to TMC ≈ 3.2 × 106 seconds (∼888 hours) given 106 paths in 8 seconds.
Table 3: Comparison between Monte Carlo and AMS in the extreme scenario.
Monte Carlo AMS
Time (s) 3,200,000 29.979
AMS attains the target within 30 seconds, confirming its robustness in extreme rareevent regimes where standard Monte Carlo is computationally infeasible.
15

5 Conclusions and future work
5.1 Conclusions
This study establishes adaptive multilevel splitting (AMS) as a computationally superior method for pricing binary options in rare-event regimes. Across both Black–Scholes and Heston models, AMS achieves speedups of up to 200 over standard Monte Carlo while maintaining unbiasedness, and consistently outperforms variance-reduction baselines such as MLMC and antithetic variates.
To our knowledge, this is the first application of AMS to financial rare-event pricing. Benchmarking against the closest variance reduction methods in finance confirms its superior efficiency in deep out-of-the-money regimes, where conventional techniques become computationally infeasible.
The practical implications are significant: AMS renders previously intractable problems feasible, enabling tighter spreads and deeper liquidity for rare-event derivatives, with direct relevance for parametric insurance and catastrophe-linked products.
The method also shows strong scalability. Importance functions are simple to construct and adaptable across payoff types, and performance is less sensitive to their specification than in importance sampling. This robustness facilitates deployment in both academic and industry settings.
5.2 Future developments
The success of AMS in binary option pricing suggests several extensions beyond derivatives valuation.
A first direction is risk management, where AMS could improve the computation of tail risk measures. Value-at-Risk (VaR), defined as the loss threshold exceeded with small probability, is a rare-event problem. Existing Monte Carlo and importance sampling approaches are widely used [45, 46]; AMS offers the potential for more accurate and efficient estimates, relevant for stress testing and regulatory capital.
A second extension concerns model coverage. Incorporating exotic payoffs and multiasset structures would broaden applicability, enabling AMS to address higher-dimensional rare-event problems and increasing the versatility of the package for quantitative finance.
A third avenue is methodological. Rough volatility models such as Bergomi [47] pose challenges because fractional Brownian motion violates the Markov property central to AMS. One possible solution is a lifted Markovian approximation embedding the non-Markovian dynamics in higher-dimensional state space [48], potentially extending AMS to this class of models.
16

Appendix
A C++ implementation with R interface via
Rcpp
No R package currently provides AMS functionality for financial applications. To fill this gap, a dedicated implementation was developed in C++ [49] with an R interface via Rcpp [50].
The algorithmic structure of AMS, nested loops over splitting levels, trajectory simulation, and resampling, requires extensive floating-point operations and predictable memory access, making compiled code essential. The C++ engine employs preallocated trajectory containers, object pooling, vectorized SDE discretization, efficient random number generation, and in-place sorting to minimize memory and copying overhead.
The Rcpp interface exposes all algorithmic parameters and diagnostics within the R environment, while computationally intensive tasks remain in C++. This design combines the usability of R with near-native performance, enabling practical deployment of AMS in quantitative finance.
A.1 Core implementation
The Rcpp implementation is organized into a set of core functions that handle stochastic simulation, payoff evaluation, importance function construction, and execution of the AMS algorithm (Table 4).
Table 4: Summary of core functions
Function Description
simulateAMS Generates Monte Carlo paths. Implements exact Black–Scholes discretization and three Heston schemes: Euler–Maruyama, Milstein, and Andersen’s Quadratic–Exponential.
payoff Evaluates six exotic payoffs: digital call, digital put, asian digital call, asian digital put, lookback call, and lookback put.
functionAMSCpp Computes the two importance functions described in Section 4.1.
AMS Executes the full AMS algorithm, integrating path generation, resampling, and weighting. Supports six payoff types and two importance functions. Parameters include strike, Lmax, and selection fraction K.
17

Lookback options are implemented but excluded from the numerical study, as discretization error under discrete monitoring [51] prevents reliable benchmarking. Experiments are restricted to European and Asian binaries.
Code availability. The full implementation, including C++ source files and the R interface, is publicly available at https://github.com/RiccardoGozzo/amsSim.
B Tables underlying the figures
Table 5: Computational times (in seconds) for different relative accuracy levels in the Heston digital call experiment.
Relative accuracy MC MCA MLMC AMS 1 AMS 2 0.20 86.13 78.39 56 0.729 0.54 0.15 146.2 124.88 114.10 1.1 1.05 0.10 311.62 233.2 190.41 1.7 1.64 0.05 1244.13 913.19 663.64 5.49 6.47
Table 6: Computational times (in seconds) for different relative accuracy levels in the Heston digital put experiment.
Relative accuracy MC MCA MLMC AMS 1 AMS 2 0.20 85.51 75.2 54.82 0.8 0.56 0.15 144.83 122.11 115.2 1.21 1.12 0.10 307.55 231.21 188.73 1.67 1.71 0.05 1235.77 910.3 659.9 5.55 6.09
Table 7: Computational times (in seconds) for different relative accuracy levels in the Black–Scholes Asian digital call experiment.
Relative accuracy MC MCA MLMC AMS 1 AMS 2 0.20 27.53 26.23 15.38 1.16 0.2 0.15 49.85 46.84 29.62 2.35 0.44 0.10 105.52 92.62 39.69 3.85 0.79 0.05 415.65 305.63 228.73 9.8 15.27
18

Table 8: Computational times (in seconds) for different relative accuracy levels in the Black–Scholes Asian digital put experiment.
Relative accuracy MC MCA MLMC AMS 1 AMS 2 0.20 28.11 26.52 16.7 1.351 0.316 0.15 50.73 47.41 27.91 2.160 0.504 0.10 106.75 95.31 38.97 3.910 0.815 0.05 421.29 309.77 214.84 9.99 14.11
Table 9: Computational times (in seconds) for different relative accuracy levels in the Heston Asian digital call experiment.
Relative accuracy MC MCA MLMC AMS 1 AMS 2 0.20 82.22 73.38 53.6 4.3 2.62 0.15 139.31 117.6 108.37 10.94 6.76 0.10 301.53 228.35 185.88 14.08 10.794 0.05 1221.18 899.04 640.85 106.05 36.56
Table 10: Computational times (in seconds) for different relative accuracy levels in the Heston Asian digital put experiment.
Relative accuracy MC MCA MLMC AMS 1 AMS 2 0.20 84.06 74.19 53.8 4.8 2.74 0.15 141.35 121.7 109.32 11.24 6.55 0.10 312.04 230.14 186.05 15.28 11 0.05 1212.5 901.29 645.01 110.6 35.41
References
[1] D. H. Vo, S. V. Huynh, A. T. Vo, and D. T.-T. Ha, “The importance of the financial derivatives markets to economic development in the world’s four major economies,” Journal of Risk and Financial Management, vol. 12, no. 1, 2019.
[2] C. Muellerleile, Derivatives, Market Liquidity, and Infrastructural Finance, p. 13–25. Cambridge University Press, 2025.
[3] A. Polacek et al., “Catastrophe bonds: A primer and retrospective,” Chicago Fed Letter, vol. 405, pp. 1–7, 2018.
[4] K. Larsson, “Parametric heat wave insurance,” Journal of Commodity Markets, vol. 31, p. 100345, 2023.
[5] S. Shreve, Stochastic Calculus for Finance II: Continuous-Time Models. No. v. 11 in Springer Finance Textbooks, Springer, 2004.
[6] S. Shreve, Stochastic Calculus for Finance I: The Binomial Asset Pricing Model. Springer Finance, Springer New York, 2004.
[7] P. Glasserman, Monte Carlo methods in financial engineering. New York: Springer, 2004.
[8] J. L. Beck and K. M. Zuev, “Rare event simulation,” 2015.
19

[9] J. A. Bucklew and J. Bucklew, Introduction to rare event simulation, vol. 5. Springer, 2004.
[10] J. M. Hammersley and K. W. Morton, “A new monte carlo technique: antithetic variates,” in Mathematical proceedings of the Cambridge philosophical society, vol. 52, pp. 449–475, Cambridge University Press, 1956.
[11] J. Kleijnen, A. Ridder, and R. Rubinstein, “Variance reduction techniques in monte carlo methods,” workingpaper, Information Management, 2010. Pagination: 18.
[12] N. S. Rasmussen, “Control variates for monte carlo valuation of american options,” Journal of Computational Finance, 2005.
[13] P. Glasserman, P. Heidelberger, and P. Shahabuddin, “Asymptotically optimal importance sampling and stratification for pricing path-dependent options,” Mathematical Finance, vol. 9, no. 2, pp. 117–152, 1999.
[14] L. Swiler and N. West, “Importance sampling: Promises and limitations,” in 51st AIAA/ASME/ASCE/AHS/ASC Structures, Structural Dynamics, and Materials Conference 18th AIAA/ASME/AHS Adaptive Structures Conference 12th, p. 2850, 2010.
[15] M. B. Giles, “Multilevel monte carlo methods,” Acta numerica, vol. 24, pp. 259328, 2015.
[16] M. B. Giles and L. Szpruch, “Multilevel monte carlo methods for applications in finance,” High-Performance Computing in Finance, pp. 197–247, 2018.
[17] M. B. Alaya, K. Hajji, and A. Kebaier, “Adaptive importance sampling for multilevel monte carlo euler method,” Stochastics, vol. 95, no. 2, pp. 303–327, 2023.
[18] A. Kebaier and J. Lelong, “Coupling importance sampling and multilevel monte carlo using sample average approximation,” Methodology and Computing in Applied Probability, vol. 20, pp. 611–641, 2018.
[19] T. M ̈uller, B. McWilliams, F. Rousselle, M. Gross, and J. Nova ́k, “Neural importance sampling,” ACM Transactions on Graphics (ToG), vol. 38, no. 5, pp. 1–19, 2019.
[20] T. Cui, S. Dolgov, and R. Scheichl, “Deep importance sampling using tensor trains with application to a priori and a posteriori rare events,” SIAM Journal on Scientific Computing, vol. 46, no. 1, pp. C1–C29, 2024.
[21] F. Ce ́rou and A. Guyader, “Adaptive multilevel splitting for rare event analysis,” Stochastic Analysis and Applications, vol. 25, no. 2, pp. 417–443, 2007.
[22] M. J. J. Garvels, “The splitting method in rare event simulation,” 2000.
[23] A. Doucet, N. De Freitas, N. J. Gordon, et al., Sequential Monte Carlo methods in practice, vol. 1. Springer, 2001.
[24] F. C ́erou, A. Guyader, and M. Rousset, “Adaptive multilevel splitting: Historical perspective and recent results,” Chaos: An Interdisciplinary Journal of Nonlinear Science, vol. 29, no. 4, 2019.
[25] S. Baars, D. Castellana, F. W. Wubs, and H. A. Dijkstra, “Application of adaptive multilevel splitting to high-dimensional dynamical systems,” Journal of Computational Physics, vol. 424, p. 109876, 2021.
20

[26] C. Innes and S. Ramamoorthy, “Adaptive splitting of reusable temporal monitors for rare traffic violations,” in 2024 IEEE/RSJ International Conference on Intelligent Robots and Systems (IROS), pp. 12386–12393, IEEE, 2024.
[27] Louvin, Henri, Dumonteil, Eric, Lelie`vre, Tony, Rousset, Mathias, and Diop, Cheikh M., “Adaptive multilevel splitting for monte carlo particle transport,” EPJ Nuclear Sci. Technol., vol. 3, p. 29, 2017.
[28] C.-E. Bre ́hier, M. Gazeau, L. Gouden`ege, T. Leli`evre, and M. Rousset, “Unbiasedness of some generalized adaptive multilevel splitting algorithms,” 2016.
[29] F. Ce ́rou and A. Guyader, “Fluctuation analysis of adaptive multilevel splitting,” 2016.
[30] F. C ́erou, P. He ́as, and M. Rousset, “Adaptive reduced multilevel splitting,” arXiv preprint arXiv:2312.15256, 2023.
[31] F. Black and M. Scholes, “The pricing of options and corporate liabilities,” Journal of political economy, vol. 81, no. 3, pp. 637–654, 1973.
[32] S. L. Heston, “A closed-form solution for options with stochastic volatility with applications to bond and currency options,” The Review of Financial Studies, vol. 6, no. 2, pp. 327–343, 1993.
[33] V. Bally and D. Talay, “The law of the euler scheme for stochastic differential equations. i: Convergence rate of the distribution function,” Probability Theory and Related Fields, vol. 104, no. 1, pp. 43–60, 1996.
[34] D. J. Higham, X. Mao, and L. Szpruch, “Convergence, non-negativity and stability of a new milstein scheme with applications to finance,” Discrete and Continuous Dynamical Systems - Series B, vol. 18, no. 8, pp. 2083–2100, 2013.
[35] L. B. G. Andersen, “Efficient simulation of the heston stochastic volatility model,” working paper, Bank of America, January 2007. 38 pages. Posted: 22 Nov 2006.
[36] P. P. Boyle, “Options: A monte carlo approach,” Journal of Financial Economics, vol. 4, no. 3, pp. 323–338, 1977.
[37] A. Lee and N. Whiteley, “Variance estimation in the particle filter,” Biometrika, vol. 105, pp. 609–625, 06 2018.
[38] F. Ce ́rou, B. Delyon, A. Guyader, and M. Rousset, “On the asymptotic normality of adaptive multilevel splitting,” SIAM/ASA Journal on Uncertainty Quantification, vol. 7, no. 1, pp. 1–30, 2019.
[39] H. Kahn and T. E. Harris, “Estimation of particle transmission by random sampling,” National Bureau of Standards applied mathematics series, vol. 12, pp. 2730, 1951.
[40] M. Garvels, The splitting method in rare event simulation. Phd thesis - research ut, graduation ut, University of Twente, Netherlands, Oct. 2000.
[41] F. C ́erou, P. del Moral, F. Le Gland, and P. Lezaud, “Genetic genealogical models in rare event analysis,” Research Report RR-5878, INRIA, 2006.
[42] J. E. Gentle, “Antithetic variates,” Wiley Interdisciplinary Reviews: Computational Statistics, vol. 1, no. 1, pp. 114–117, 2009.
[43] S. T. Tokdar and R. E. Kass, “Importance sampling: a review,” Wiley Interdisciplinary Reviews: Computational Statistics, vol. 2, no. 1, pp. 54–60, 2010.
21

[44] F. Casella and B. Bachmann, “On the choice of initial guesses for the newtonraphson algorithm,” Applied Mathematics and Computation, vol. 398, p. 125991, 2021.
[45] L. J. Hong, Z. Hu, and G. Liu, “Monte carlo methods for value-at-risk and conditional value-at-risk: a review,” ACM Transactions on Modeling and Computer Simulation (TOMACS), vol. 24, no. 4, pp. 1–37, 2014.
[46] L. Sun and L. J. Hong, “Asymptotic representations for importance-sampling estimators of value-at-risk and conditional value-at-risk,” Operations Research Letters, vol. 38, no. 4, pp. 246–251, 2010.
[47] J. Gatheral, M. Fukasawa, T. Jaisson, and M. Rosenbaum, “Rough volatility: An overview,” Global Derivatives, p. 142, 2017.
[48] Q. Zhu, G. Loeper, W. Chen, and N. Langrene ́, “Markovian approximation of the rough bergomi model for monte carlo option pricing,” Mathematics, vol. 9, no. 5, p. 528, 2021.
[49] W. H. Press, Numerical recipes 3rd edition: The art of scientific computing. Cambridge university press, 2007.
[50] D. Eddelbuettel, “Seamless r and c++ integration with rcpp,” 2013.
[51] M. Broadie and P. Glasserman, “Pricing american-style securities using simulation,” Journal of economic dynamics and control, vol. 21, no. 8-9, pp. 1323–1352, 1997.
22

---

## Processing Information

- **Processing Library:** Zotero PDFWorker
- **Processing Date:** 2026-02-10T18:18:45.919Z
- **Text Length:** 42791 characters
- **Success:** Text extraction completed
- **PDF Library Used:** Zotero PDFWorker
- **Pages Processed:** 22 of 22
