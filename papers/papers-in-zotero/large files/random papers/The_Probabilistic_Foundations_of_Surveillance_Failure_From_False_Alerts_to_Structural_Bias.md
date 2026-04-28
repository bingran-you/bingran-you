# PDF Document: Pollanen - 2025 - The Probabilistic Foundations of Surveillance Failure From False Alerts to Structural Bias.pdf

**File Path:** Pollanen - 2025 - The Probabilistic Foundations of Surveillance Failure From False Alerts to Structural Bias.pdf

**Processed Date:** 2026-02-10T18:16:04.776Z

**File Size:** 1696.51 KB

**Total Pages:** 24

**Extracted Pages:** 24

**PDF Library:** Zotero PDFWorker

**Attachment Item ID:** 3649

**Title:** The Probabilistic Foundations of Surveillance Failure: From False Alerts to Structural Bias

**Collection:** Large Files > Random Papers

---

## Extracted Text Content

The Probabilistic Foundations of Surveillance Failure: From False
Alerts to Structural Bias
Marco Pollanen
November 18, 2025
Abstract
For decades, forensic statisticians have debated whether searching large DNA databases undermines the evidential value of a match. Modern surveillance faces an exponentially harder problem: screening populations across thousands of attributes using threshold rules rather than exact matching. Intuition suggests that requiring many coincidental matches should make false alerts astronomically unlikely. This intuition fails. Consider a system that monitors 1,000 attributes, each with a 0.5 percent inn-
ocent match rate. Matching 15 pre-specified attributes has probability 10−35, one in 30 decillion, effectively impossible. But operational systems require no such specificity. They might flag anyone who matches any 15 of the 1,000. In a city of one million innocent people, this produces about 226 false alerts. A seemingly impossible event becomes all but guaranteed. This is not an implementation flaw but a mathematical consequence of high-dimensional screening. We identify fundamental probabilisti-
c limits on screening reliability. Systems undergo sharp transitions from reliable to unreliable with small increases in data scale, a fragility worsened by data growth and correlations. As data accumulate and correlation collapses effective dimensionality, systems enter regimes where alerts lose evidential value even when individual coincidences remain vanishingly rare. This framework reframes the DNA database controversy as a shift between operational regimes. Unequal surveillance exposures magn-
ify failure, making “structural bias” mathematically inevitable. These limits are structural: beyond a critical scale, failure cannot be prevented through threshold adjustment or algorithmic refinement.
Keywords: big data analytics; algorithmic fairness; surveillance systems; DNA databases; false positive rate; Bayesian inference; phase transitions; large deviations theory
1 Introduction
1.1 From Database Search to Threshold Screening
For over two decades, forensic statisticians have debated a fundamental question: does searching a DNA database of a million profiles weaken the evidential value of a match? Stockmarr [1999] argued that database searching increases coincidental match probability, while Balding [2002] maintained that likelihood ratios preserve evidential weight regardless of search method. This controversy (concerning a single database with exact profile matching) remains unresolved [Storvik, 2006, Kaye, 2013]. Mod-
ern surveillance systems face an exponentially harder problem. Rather than searching one database for exact matches, they monitor populations across thousands of attributes (locations visited, transactions made, communications sent) and flag individuals whose patterns match sufficiently many criteria using a threshold rule rather than exact matching. The intuition that
1
arXiv:2511.12459v1 [stat.ME] 16 Nov 2025

“requiring many coincidences makes false matches astronomically unlikely” fails catastrophically in this regime. Consider a concrete example that reveals the nature of this failure. A surveillance system monitors k = 1000 binary indicators, each with innocent match probability p = 0.005 (half a percent chance), and flags individuals matching at least m = 15 attributes. At first glance, this threshold seems extraordinarily conservative. Requiring an exact match across 15 specific predetermined att-
ributes would have probability (0.005)15 ≈ 3 × 10−35, one in 30 decillion). Such exact-match odds suggest false alerts should be astronomically impossible, even across populations of billions. But operational systems do not require exact matches across 15 predetermined attributes. Instead, they flag individuals matching at least 15 of any 1000 attributes. This seemingly subtle distinction changes everything. With λ = kp = 1000 × 0.005 = 5 expected chance matches per innocent person and threshold m-
 = 15 (three times the expected value), direct calculation gives a per-person false alert probability of
q := Pr(Poisson(5) ≥ 15) ≈ 2.26 × 10−4 = 0.0226%.
In a city of n = 106 innocents, this produces approximately nq ≈ 226 false alerts, and the probability of at least one false alert is
Pr(at least one false alert) ≈ 1 − e−226 ≈ 1 − 7 × 10−99.
Thus the probability of no false alerts is on the order of 10−99, making the system, for all practical and mathematical purposes, certain to flag at least one innocent person. The “one in 30 decillion” exact-match calculation is mathematically correct but operationally irrelevant. The threshold rule “at least m of k” transforms the per-person probability from vanishingly small (10−35) to operationally significant (10−4), and population size amplifies this individuallevel vulnerability into system--
level certainty of failure. This is not a failure of implementation or algorithm design; it is a mathematical inevitability arising from the combinatorics of threshold detection in high-dimensional attribute spaces. This contrast between the DNA setting and modern multi-attribute surveillance also clarifies why the long-standing DNA database controversy has persisted. Classical DNA searches operate in an extremely sparse false-match regime, where random matches are so rare that enlarging the datab-
ase does not meaningfully dilute the evidential value of a hit. Multi-attribute threshold screening, however, operates in a dense false-match regime where accumulated coincidences quickly overwhelm the signal. These are mathematically distinct operating regimes; recognizing this distinction resolves the apparent conflict in the DNA literature and motivates the broader probabilistic limits developed in the rest of this paper.
1.2 Main Contributions
This paper develops a rigorous probabilistic framework for analyzing such screening systems. Using classical tools (Poisson approximations, Chernoff bounds, concentration inequalities, and Bayesian inference), we characterize fundamental limits on system reliability. Our analysis reveals that the single-database DNA controversy and multi-attribute surveillance failure are manifestations of the same mathematical phenomenon, differing only in which asymptotic regime they occupy. Our main contributio-
ns include:
1. Sharp critical population bounds: We derive two-sided bounds on both per-person and system-level false alert probabilities, showing the critical population grows as ncrit ≍
√λ exp(λD(c∥1)) with explicit √λ corrections (Theorem 2.4). The rate function D(c∥1) = c log c − c + 1 governs the exponential scaling.
2

2. Finite system lifetimes: Under exponential data growth k(t) = k0γt, systems fail at time T∗ ≈ 1
log γ log(m/k0p) when λ(t) reaches threshold m, with population corrections secondary (Theorem 3.2).
3. Unified Bayesian-frequentist view: Both regimes exhibit the same exponential scaling exp(λD(c∥1)), but Bayesian actionability requires n ≲ 1−α
α rs√λeλD (for desired PPV ≥ α)
while frequentist reliability allows n ≲
√λeλD (Section 5). Posterior probabilities collapse when nq ≫ rs, resolving the Stockmarr-Balding controversy as a regime transition.
4. Structural bias through group dominance: Differential surveillance exposure creates exponential outcome disparities that cannot be eliminated through threshold adjustments (Theorems 4.2 through 4.3), formalizing “structural bias” arguments from the algorithmic fairness literature.
5. Effective dimensionality under correlation: Spatiotemporal dependencies reduce effective attribute counts to keff ≈ A/(2πξ2) (spatial) or keff ≈ k/(2τ ) (temporal), connecting surveillance analysis to multiple-testing corrections in genomics and neuroimaging (Section 6).
All results use elementary probability theory with proofs provided.
1.3 Motivation and Background
Modern surveillance and screening systems collect vast amounts of data about individuals and attempt to identify rare targets of interest: potential terrorists, criminals, fraudsters, or security threats. These systems operate by comparing observed attributes of individuals (biometric features, transaction patterns, travel histories, communication metadata) against profiles or watchlists, flagging individuals whose patterns match suspiciously well [Lyon, 2003, O’Neil, 2016, Schneier, 2015]. The fu-
ndamental challenge is the curse of dimensionality in coincidence detection: as monitored attributes grow, innocent individuals increasingly match multiple criteria by chance. When populations are large (millions to billions), even extremely rare coincidences become statistically certain, generating overwhelming false alerts. This parallels challenges in cybersecurity [Axelsson, 2000], where intrusion detection systems with 99.9% accuracy produce unmanageable false alarms when monitoring billions -
of network flows, and in open-set recognition [Scheirer et al., 2013], where classifiers must distinguish known classes from unknown inputs.
1.4 Related Work and Connections
Our analysis builds on classical probability theory (Poisson approximation, Chernoff bounds, concentration inequalities) applied to modern surveillance contexts. The system-level bound
Pr(false alert) ≈ 1 − (1 − q)n
corresponds to family-wise error rate (FWER) control in multiple testing [Benjamini and Hochberg, 1995, Storey, 2002], though our large-deviation analysis shows when such control becomes infeasible. The base-rate analysis resolves the Stockmarr-Balding debate [Stockmarr, 1999, Balding, 2002] in forensic DNA statistics by identifying distinct asymptotic regimes. Connections to anomaly detection [Axelsson, 2000], open-set recognition [Scheirer et al., 2013], and algorithmic fairness [Hardt et al., 2-
016, Chouldechova, 2017, Corbett-Davies et al., 2017, Barocas et al., 2019] appear throughout, as false-positive explosion is a fundamental challenge across screening domains.
3

1.5 The Basic Screening Model
Consider a population of n individuals, each of whom we collect k types of data (e.g., locations visited, financial transactions, etc.). For each type of data, we also have lists of suspicious activity, for example, locations of interest where crimes have occurred. In general, we observe k binary attributes (indicators) for each individual, where each attribute has a small probability p ≪ 1 of matching some profile of interest purely by chance. For example, a simple model for the match probability-
 p on the j-th data type might be found by calculating the probability that a person’s list (size t) overlaps the suspicious list (size s) on a domain of size V possible distinct items (e.g., V geo-location cells). With uniform sampling without replacement from the domain, the probability of an overlap comes from the zero-intersection hypergeometric probability:
p = Pr(overlap ≥ 1) = 1 −
V −t s V s
=1−
s−1
Y
l=0
1− t
V − l , for s ≤ V − t,
with p = 1 when s > V − t (guaranteed overlap). Now assuming a general model for p, let Xi denote the number of matching attributes for individual i. Under the null hypothesis (individual i is innocent) and the modeling assumptions detailed in Section 1.6, we have: Xi ∼ Binomial(k, p).
For large k and small p, we write λ = kp for the expected number of chance matches; this parameter will govern all subsequent results. The screening system flags individual i as suspicious if they match some unsolved crime on m attributes with: Xi ≥ m for an integer threshold m (we set m = ⌈cλ⌉ later; rounding affects only constant factors). The per-person false alert probability is:
q = Pr(Xi ≥ m | innocent).
Since we screen n individuals, the system-level false alert probability, that is, the probability that at least one innocent person is flagged, is:
Pr(at least one false alert) = 1 − (1 − q)n.
For small q, this is commonly approximated by:
Pr(at least one false alert) ≈ 1 − e−nq.
The system becomes unreliable when this probability approaches 1 (that is, when nq ≳ 1), in which case the system is near certain to flag innocent individuals as suspects.
1.6 Modeling Assumptions and Regime of Validity
Throughout this paper, we operate under the following assumptions:
1. Large-k, small-p regime: We assume k ≫ 1 (many attributes), p ≪ 1 (rare individual matches), with mean λ = kp held moderate and fixed as k → ∞. This is the natural Poisson regime for rare-event detection, where the binomial distribution converges to Poisson(λ) with total-variation error bounded by 2 Pk
i=1 p2
i (see Section 2.1).
4

2. Independence across individuals: The match indicators for different individuals are statistically independent (Remark 2.2). In practice, common-mode events (e.g., mass gatherings, natural disasters) may introduce positive dependence, which would only increase false alert rates beyond our bounds.
3. Homogeneous match probability (baseline model): For analytical tractability, we initially assume all attributes have the same match probability p. Section 4 extends to heterogeneous populations with different exposure rates pg across demographic groups. Remark 2.1 addresses heterogeneity across attributes within individuals.
4. Binary attributes: Each attribute either matches (M = 1) or doesn’t match (M = 0) a profile of interest. This models presence/absence at locations, yes/no transaction patterns, or binarized continuous features.
5. Fixed threshold screening: The system flags individuals with m or more matches, where m is predetermined. We primarily analyze m = cλ for constant c > 1, representing thresholds scaled to exceed the expected number of chance matches under the null hypothesis.
6. Null hypothesis analysis: We analyze false alerts under the assumption that all n individuals are innocent (the null hypothesis). Detection of actual targets requires separate treatment via signal detection theory and receiver operating characteristic (ROC) analysis [Fawcett, 2006], which is not addressed here. Our results characterize the false positive rate; in practice, system designers must balance this against detection power for true targets.
These assumptions define the scope of our analysis. The core results (Sections 2 through 3) establish fundamental limits under these idealized conditions. Later sections extend the framework: Section 4 analyzes heterogeneous populations with differential exposure, and Section 6 incorporates spatiotemporal correlation structures that reduce the effective dimensionality of attribute spaces. The large-k, small-p regime is particularly natural for modern surveillance systems, where technological advan-
ces enable collection of thousands of binary indicators (GPS pings, transaction flags, communication events), but each individual match remains rare. For instance, with k = 1000 location cells and p = 0.005 (half-percent chance of presence at any flagged location), we have λ = 5 expected false matches, a moderate value that falls squarely within our analytical framework.
2 Fundamental Probabilistic Limits
2.1 The Poisson Approximation
When k is large, p is small, and λ = kp is fixed, the Binomial(k, p) distribution can be approximated by Poisson(λ) [Feller, 1968]. Specifically, if X ∼ Binomial(k, p), then
Pr(X = j) ≈ e−λ λj
j! , λ = kp.
Moreover, by Le Cam’s inequality [Barbour et al., 1992],
dTV(Binomial(k, p), Poisson(λ)) ≤ 2
k
X
i=1
p2
i.
For the homogeneous case with pi = p for all i, this gives dTV ≤ 2kp2 = 2λp. When p is small and λ = kp is moderate, this bound is O(p), making the Poisson approximation numerically safe
5

for practical applications. Throughout, we assume independence across individuals; common-mode shocks would require extensions via positively associated random variables (see Remark 2.2). Under this approximation, the per-person false alert probability (tail) is
q = Pr(X ≥ m) ≈
∞
X
j=m
e−λ λj
j! = 1 −
m−1
X
j=0
e−λ λj
j! .
Remark 2.1 (Heterogeneous Attributes). We assume homogeneous match probability p across all attributes for tractability. By Le Cam’s theorem [Barbour et al., 1992], when attributes have varying probabilities p1, . . . , pk with maxi pi → 0 and λ = Pk
i=1 pi fixed, the Poisson approximation
dTV(X, Poisson(λ)) ≤ 2 Pk
i=1 p2
i ensures our results depend only on λ, not individual pi values.
Remark 2.2 (Independence Across Individuals). We use independence across individuals to factor (1 − q)n. In real deployments, common-mode events may introduce positive dependence (positive association means Pr(Xi ≥ xi for all i) ≥ Q
i Pr(Xi ≥ xi); roughly, variables are more likely to be jointly large than under independence), increasing the system-level false-alert probability. Our bounds hold under independence; extensions to positively associated arrays via Chen-Stein or Stein’s method [Barbour and Chen, 2005] can be derived but are omitted here. Note that positive dependence typically increases tail probabilities (lowers effective rate function), making our independence-based bounds underestimate the true false alert rate-
s when correlation is present.
2.2 Tail Bounds for the Poisson Distribution
To understand how q depends on m and λ, we use Chernoff bounds and related concentration inequalities [Hoeffding, 1963, Mitzenmacher and Upfal, 2005] for Poisson random variables.
Lemma 2.3 (Poisson Upper Tail). Let Y ∼ Poisson(λ) and suppose m > λ. Then
Pr(Y ≥ m) ≤ eλ
m
m
e−λ = exp − λ D m
λ 1 , (1)
where D(α∥1) = α log α−α+1 is the Poisson rate function (also called the Crame ́r rate function or Cram ́er transform of the Poisson distribution with unit mean). This is the Crame ́r rate function for Poisson random variables, which differs from the binary Kullback-Leibler divergence DKL(p∥q) = p log(p/q) + (1 − p) log((1 − p)/(1 − q)) used for Bernoulli random variables. The large-deviation rate is asymptotically exact for real m/λ > 1: the tail probability satisfies q ≍ λ−1/2e−λD(m/λ∥1) with fa-
ctorial discreteness contributing only the λ−1/2 subexponential prefactor. We write D(c∥1) or simply D for brevity when the argument is clear from context.
Proof. For any t > 0,
Pr(Y ≥ m) = Pr etY ≥ etm ≤ E[etY ]
etm = exp λ(et − 1) − tm .
Optimizing by setting d
dt [λ(et − 1) − tm] = 0 gives et∗ = m/λ, which yields the stated bound.
2.3 Critical Population Size
We now establish the fundamental scale of population size for reliable screening when the decision threshold scales as m = cλ with c > 1.
6

Theorem 2.4 (Critical Population Scale). Consider a screening system with k binary attributes, per-attribute match probability p, threshold m = ⌈cλ⌉ for some c > 1, population size n, and λ = kp. Let D(c∥1) = c log c − c + 1 (the Poisson rate function from Lemma 2.3). Then the per-person false alert probability q satisfies the following asymptotic bounds:
1
√2πcλ exp − λD(c∥1) − 1
12cλ ≤ q ≤ exp − λD(c∥1) , (2)
which hold for λ ≥ 1 and c > 1 with the stated constants; for smaller λ the same exponential form holds with different absolute constants. The system-level false alert probability obeys
1 − exp − n
√2πcλ e−λD(c∥1)− 1
12cλ ≤ Pr(false alert) ≤ 1 − exp − n e−λD(c∥1)
1 − e−λD(c∥1) . (3)
(For e−λD ≤ 1/2, the upper bound denominator is within a factor of 2 in the exponent, providing tight control.) In particular, the system becomes unreliable once
n≳
√
λ exp λD(c∥1) (up to constant factors),
and the critical population scale is
ncrit ≍ exp λD(c∥1) = exp kp D(c∥1) , (4)
ignoring subexponential √λ corrections. Here we use the notation f ≍ g to denote equality up to multiplicative constants independent of the main asymptotic parameters (λ, k, n).
Proof. Take m = ⌈cλ⌉ with c > 1; replacing m by cλ (ignoring rounding) affects only constants in the bounds. The upper bound in (2) is Lemma 2.3 with m = cλ: q ≤ exp(−λD(c∥1)).
The lower bound follows from Robbins’ refinement of Stirling’s formula m! < √2πm m
e
me 1
12m
[Robbins, 1955].
Pr(Y = m) = e−λ λm
m! ≥ 1
√2πm exp − λ + m log λ − m log m + m − 1
12m .
Setting m = cλ gives
Pr(Y = m) ≥ 1
√2πcλ exp − λD(c∥1) − 1
12cλ ,
since −λ + m log(λ/m) + m = −λ c log c − c + 1 = −λD(c∥1).
Since q = Pr(Y ≥ m) ≥ Pr(Y = m), the same lower bound applies to q. For the system-level probability, independence across n individuals gives Pr(no false alert) = (1 − q)n and thus Pr(false alert) = 1 − (1 − q)n. Since et ≥ 1 + t for all t ∈ R, substituting t = x
1−x (valid for x ∈ [0, 1)) gives
1−x= 1
1 + t ≥ e−t = e−x/(1−x),
and thus (by ln(1 − x) ≤ −x and ln(1 − x) ≥ −x/(1 − x) for x ∈ (0, 1)),
e−q/(1−q) ≤ 1 − q ≤ e−q,
7

so on the system level:
1 − e−nq ≤ 1 − (1 − q)n ≤ 1 − e−nq/(1−q).
Together with the bounds on q above yields the bounds in (3). The factor 1/(1 − q) in the upper bound arises from the inequality (1 − q)n ≥ e−nq/(1−q); since q ≤ e−λD, we have q/(1 − q) ≤ e−λD/(1 − e−λD), which gives the stated upper bound. When q ≤ e−λD is small, 1 − q ≥ 1 − e−λD provides a uniform lower bound independent of n. The system is unreliable when the exponent in the lower bound becomes O(1) (that is, when the expected number of false alerts per batch is on the order of one):
n
√2πcλ e−λD(c∥1)− 1
12cλ ≈ 1.
Solving for n gives
ncrit ≈
√
2πcλ e λD(c∥1)+ 1
12cλ .
The 1
12cλ term is tiny for large λ, so asymptotically we write
ncrit ≍
√
λ e λD(c∥1),
or for rough scaling (ignoring the √λ factor):
ncrit ≍ eλD(c∥1) = ekp D(c∥1).
That is, the critical population size beyond which false alerts almost surely occur.
Remark 2.5 (Numerical Validation). Monte Carlo simulations (5000 runs per data point) validate the Poisson approximation and system-level probability model: simulated false-alert rates match theoretical predictions with mean absolute error of 0.0015 across the critical transition region (Figure 1(a)). The sharp threshold behavior predicted by Proposition 2.6 is clearly evident in the simulation data.
2.4 Sharp Threshold Behavior
The relationship between population size and system reliability exhibits an increasingly sharp threshold as the number of attributes grows.
Proposition 2.6 (Threshold Sharpness). Consider a screening system with λ = kp, threshold
m = cλ for fixed c > 1, and population scaled as n = √λ · eαλD(c∥1) for α > 0. Then the systemlevel false alert probability satisfies:
λli→m∞ Pr(false alert) =
(
0 if α < 1,
1 if α > 1. (5)
The transition occurs in a window ∆α ∼ 1/(λD(c∥1)) → 0, becoming arbitrarily sharp as λ increases. This follows from standard large-deviation theory for sums of i.i.d. rare events [Dembo and Zeitouni, 2010].
Proof. From Theorem 2.4, we have the two-sided bounds
1
√2πcλ e−λD(c∥1)−O(1/λ) ≤ q ≤ e−λD(c∥1),
8

which together imply log q = −λD(c∥1)+O(log λ) as λ → ∞ (since q ≥ Cλ−1/2e−λD and q ≤ e−λD,
taking logarithms gives the stated error term). With n = √λ eαλD(c∥1), we have
log(nq) = log n + log q = 1
2 log λ + αλD(c∥1) − λD(c∥1) + O(log λ),
which simplifies to log(nq) = (α − 1)λD(c∥1) + O(log λ).
Hence for α < 1, nq → 0 exponentially; for α > 1, nq → ∞ exponentially. The transition width ∆α satisfying |(α − 1)λD| = O(1) gives ∆α = O(1/(λD)), which vanishes as λ → ∞. Equivalently, the absolute window in log n is O(1), making the transition arbitrarily sharp in the exponential scale. The limiting behavior (5) follows from Pr(false alert) ≈ 1 − e−nq, which approaches 0 when nq → 0 and approaches 1 when nq → ∞.
Remark 2.7. This sharp threshold implies no gradual degradation: systems operating near the critical line log n = λD(c∥1) transition from reliable to unreliable essentially instantaneously as λ increases (Figure 1). Combined with exponential data growth λ(t) = λ0γt, every system inevitably crosses this threshold at finite time T ∗ ∼ log(m/λ0)/ log γ (Theorem 3.2), making failure predictable rather than merely possible.
3 Temporal Dynamics: Finite System Lifetimes
Real surveillance systems accumulate data over time. As more attributes are collected, the false alert problem intensifies until the system becomes unreliable. We now quantify how long a screening system can operate before this inevitable failure occurs. As Figure 1(c) demonstrates, systems with exponential data growth exhibit sharp temporal transitions from reliable to unreliable operation at predictable times.
Remark 3.1 (Change of Threshold Regime). In the preceding analysis (Section 2), we studied thresholds of the form m = cλ with c > 1 constant, where both m and λ scale together. In this section, we adopt a different perspective: we fix the threshold m at deployment time while allowing λ(t) = k(t)·p to grow over time as data accumulates. This models realistic system operation, where detection thresholds are predetermined policy parameters that remain constant even as surveillance capabilities expand-
. The critical behavior occurs when the growing λ(t) crosses the fixed threshold m, at which point false alerts become inevitable.
3.1 Exponential Data Growth
Modern data collection exhibits exponential growth [Hilbert and L ́opez, 2011]. We model this as:
k(t) = k0γt, (6)
where k0 is the initial number of monitored attributes at time t = 0, and γ > 1 is the growth factor per time unit (e.g., annual growth rate). Since each attribute has probability p of matching by chance for an innocent individual, the expected number of false matches grows exponentially:
λ(t) = k(t) · p = k0p · γt. (7)
9

3.2 Critical Time Derivation
The system flags an individual when they have m or more matching attributes. At time t, the per-person false alert probability is:
q(t) = Pr(Poisson(λ(t)) ≥ m).
With population size n, the probability of at least one false alert is approximately:
Pr(system false alert at time t) ≈ 1 − e−n·q(t).
The system becomes unreliable when n · q(t) ≳ 1.
Theorem 3.2 (System Lifetime Under Exponential Growth). Consider a screening system with exponential data growth k(t) = k0γt (where γ > 1), per-attribute match probability p, fixed threshold m, and population size n. For populations large enough that system failure occurs near λ(T ∗) ≈ m (rather than deep in the Poisson tail), the system becomes unreliable at time
T∗ ≈ 1
log γ log m
k0p , (8)
where the critical time is characterized by λ(T ∗) ≈ m.
The population size n introduces a correction of order 1
log γ
r log n
m to the time to failure (equiv
alently, a shift of order √2m log n in λ), up to logarithmic factors in m and n. This is typically weak relative to the effects of γ and m.
Proof sketch. The system fails when the expected number of false alerts reaches order one: n · q(T ∗) ∼ 1. For λ < m, the Poisson tail probability q(λ) = Pr(Poisson(λ) ≥ m) is exponentially suppressed by the factor exp(−λD(m/λ∥1)). As λ increases from well below m toward m, the rate function D(m/λ∥1) decreases to zero, causing q(λ) to increase sharply from nearly zero to order one. When λ > m, the tail probability increases rapidly toward 1. The transition occurs sharply near λ = m due to concentr-
ation of the Poisson distribution. For λ near m, we use the normal approximation Poisson(λ) ≈ N (λ, λ), which yields q(λ) =
Pr(X ≥ m) ≈ 1 − Φ((m − λ)/√λ). For λ ≲ m, the Gaussian tail asymptotics (Mills’ ratio: 1 − Φ(x) ∼ φ(x)/x as x → ∞) give the more precise form:
q(λ) ∼
√λ
(m − λ)√2π e−(m−λ)2/(2λ) (λ < m).
Setting nq(T ∗) ∼ 1 gives λ(T ∗) ≈ m − √2m log n, which is a small correction to λ(T ∗) = m
for typical parameters. Translating through λ(t) = k0p γt yields a time shift of order 1
log γ
q
log n
m. Substituting into λ(t) = k0pγt yields (8) as the leading-order term.
3.3 Key Insights
Equation (8) reveals several fundamental properties:
10

1. Finite lifetime is inevitable: For any fixed threshold m and exponential growth γ > 1, we have T ∗ < ∞. Even if one attempted to maintain reliability by scaling the threshold with data (m ∝ λ(t)), this would require the monitored population to grow as ncrit(t) ∼ exp(cγt), doubly-exponential growth that far exceeds realistic population dynamics. Real surveillance systems use fixed thresholds and monitor approximately fixed populations, making temporal failure inevitable. [This mathematical stru-
cture parallels the “double birthday paradox” analysis of Pollanen [2024], though arising here in a distinct screening context.]
2. Logarithmic dependence on threshold: Doubling the threshold m adds only (log 2)/ log γ time units. For annual doubling (γ = 2), this is exactly 1 year. Even increasing m tenfold extends lifetime by only log2(10) ≈ 3.3 years.
3. Inverse dependence on growth rate: The factor 1/ log γ means faster data growth dramatically reduces system lifetime. Increasing γ from 1.5 to 2 (from 50% to 100% annual growth) roughly halves the operational lifetime.
4. Weak population dependence: While larger populations cause slightly earlier failure, this effect is logarithmic in n and secondary to the exponential effects of γ and m. The system lifetime is primarily determined by data growth dynamics, not population size.
The temporal phase transition in Figure 1(c) illustrates these dynamics: a system with 50% annual growth (γ = 1.5) operates reliably for approximately 4 years before crossing the critical threshold, after which false alerts become statistically inevitable.
3.4 Quantitative Examples
Example 3.3 (Border Security System). Consider a border security system with initial attributes k0 = 100, annual growth rate γ = 1.5 (50%), match probability p = 0.01, and threshold m = 5.
The critical time is:
T ∗ = log(5/(100 × 0.01))
log 1.5 = log 5
log 1.5 ≈ 4.0 years.
The lifetime sensitivity reveals fundamental constraints. Increasing m from 3 to 10:
T ∗(m = 3) = log(3/(100 × 0.01))
log 1.5 = log 3
log 1.5 ≈ 2.7 years,
T ∗(m = 10) = log(10/(100 × 0.01))
log 1.5 = log 10
log 1.5 ≈ 5.7 years.
Increasing the threshold from 3 to 10 extends lifetime from 2.7 to only 5.7 years (logarithmic benefit). In contrast, doubling γ from 1.5 to 2.0:
T ∗(m = 5, γ = 2.0) = log 5
log 2 ≈ 2.3 years,
cuts lifetime nearly in half (from 4.0 to 2.3 years). Growth rate dominates system longevity; threshold adjustments provide minimal protection.
3.5 Practical Implications
1. Predictable obsolescence: Every system has a calculable expiration date T ∗ ∼ 1
log γ log(m/k0p). Monitoring λ(t)/m provides early warning.
11

2. Growth rate dominates: Lifetime scales as 1/ log γ; doubling γ halves operational lifetime. Threshold adjustments provide only logarithmic benefit.
Figure 1: Phase transitions in surveillance system reliability. Systems exhibit sharp transitions from reliable to unreliable operation across four dimensions: (a) attribute growth with Monte Carlo validation (orange points, 5000 runs) confirming theoretical predictions (mean error < 0.002), (b) population scaling (log n vs. false-alert probability), (c) temporal dynamics (t vs. false-alert probability under exponential data growth), and (d) group dominance showing differential exposure creates ex-
ponential false-alert disparities. All transitions sharpen as system parameters increase, consistent with large-deviation theory.
4 Heterogeneous Population Structure
Not all individuals have equal representation in surveillance databases. Socioeconomic, geographic, and demographic factors lead to differential exposure rates [Lyon, 2003, Eubanks, 2018].
4.1 Multi-Group Model
Partition the population into G groups, such that group g has ng individuals, with PG
g=1 ng = n, and each individual in group g has per-attribute match probability pg. Let λg = kpg and define
12

the per-group false alert probability:
qg = Pr(Poisson(λg) ≥ m).
Proposition 4.1 (Heterogeneous System Risk). The system-level false alert probability is:
Pr(false alert) = 1 −
G
Y
g=1
(1 − qg)ng ≈ 1 − exp

−
G
X
g=1
ng qg

 . (9)
Proof. The events “individual i in group g generates a false alert” are independent across individuals. The probability that no one in group g alerts is (1 − qg)ng . Since groups are disjoint, the probability that no one alerts is the product over groups. The approximation follows from (1 − x)n ≈ e−nx for small x.
4.2 Dominance and Disparity
Theorem 4.2 (Group Dominance Effect: Algebraic Decomposition). Let g∗ = arg maxg{ngqg} be the group contributing the most to system risk. Then:
Pr(false alert) ≈ 1 − e−ng∗ qg∗ + O


X
g̸=g∗
ngqg e−ng∗ qg∗

 . (10)
If ng∗ qg∗ ≫ P
g̸=g∗ ngqg, then group g∗ dominates system behavior. This is an algebraic decomposition showing how system-level risk concentrates in the highest-exposure group.
Proof. From Proposition 4.1:
1 − exp

−
G
X
g=1
ng qg

 = 1 − exp(−ng∗qg∗) · exp

−
X
g̸=g∗
ng qg

.
Using e−x ≈ 1 − x for small x:
≈ 1 − e−ng∗ qg∗

1 −
X
g̸=g∗
ng qg


= 1 − e−ng∗ qg∗ + e−ng∗ qg∗ X
g̸=g∗
ng qg .
The main term is 1 − e−ng∗qg∗ , representing the contribution from group g∗. The correction term is of order P
g̸=g∗ ngqg e−ng∗ qg∗ and becomes negligible whenever ng∗ qg∗ ≫ P
g̸=g∗ ngqg.
4.3 Fairness Implications
The Group Dominance Effect (Theorem 4.2) has important implications for fairness in surveillance systems. When different population groups experience differential surveillance exposure, small differences in exposure rates create exponential disparities in outcomes. Proposition 4.3 shows that exposure ratios of 2–4 times generate false alert disparities exceeding 20 times near critical thresholds, due to Poisson tail behavior. This exponential amplification means that even modest differences in sur-
veillance intensity produce severe outcome inequalities.
13

Crucially, these disparities cannot be eliminated through threshold adjustment. Group-specific thresholds merely encode the underlying exposure inequality in a different form. Equalizing outcomes requires equalizing data collection intensity at the source, not algorithmic tuning. Moreover, since the high-exposure group drives system-level false alerts, aggregate reliability metrics obscure concentrated burdens on specific subpopulations, making demographic disaggregation essential for understandi-
ng actual system performance.
Proposition 4.3 (Exposure Amplification Through Poisson Tails). Consider two groups with equal population size (n1 = n2 = n/2) but different per-attribute match probabilities p1 < p2. Let λi = kpi and suppose both groups are screened with common threshold m. Then:
1. If λ1 < m ≤ λ2, the disparity in expected false alerts is exponential:
n2q2
n1q1
= q2
q1
≥ exp(c · m) (11)
for some constant c > 0 (depending on λ1), for all sufficiently large m. (Since q1 ≲ (λ1/m)m for m > λ1, while q2 ≥ 1/2 − O(m−1/2) by the central limit theorem, the ratio q2/q1 grows super-exponentially in m. In particular, for any fixed constant c > 0 there exists M (c) such that for all m ≥ M (c), q2
q1
≥ exp(cm).
Thus the disparity eventually dominates exp(cm) for arbitrary but fixed c > 0.) Indeed, q2 ≥ Pr(Poisson(m) ≥ m) by monotonicity, and for large m, Pr(Poisson(m) ≥ m) ≥ 1/2 − O(m−1/2), while q1 ≤ exp(−λ1D(m/λ1∥1)) by the Chernoff bound in Lemma 2.3, which is exponentially small for m > λ1.
2. The fraction of false alerts attributable to Group 2 approaches 1 as the exposure gap grows:
n2q2 n1q1 + n2q2
→ 1 as λ2 − m increases.
3. For fixed threshold m and exposure ratio α = p2/p1 > 1, as k increases, Group 2 enters the critical regime (λ2 ≈ m) before Group 1, creating a temporal window of maximum disparity.
Proof. (1) When λ2 ≥ m, by monotonicity of the Poisson tail probability in the parameter λ, we have q2 = Pr(Poisson(λ2) ≥ m) ≥ Pr(Poisson(m) ≥ m).
For large m, by symmetry of the limiting normal approximation, Pr(Poisson(m) ≥ m) approaches 1/2 from below. The median of the Poisson(m) distribution satisfies m − log 2 ≤ median ≤ m + 1/3, so the tail probability at m is bounded below by 1/2 − O(m−1/2). Meanwhile, q1 ≤ exp(−λ1D(m/λ1∥1)) by Lemma 2.3, which is exponentially small when m > λ1. The ratio q2/q1 therefore grows at least exponentially in m: for some constant c > 0 (depending on λ1), we have q2/q1 ≥ exp(c · m) for sufficiently large m.-
 (2) Follows from (1) by noting q2/(q1 + q2) → 1 when q2/q1 → ∞. (3) Group 2 reaches λ2 = m when k = m/p2, while Group 1 reaches λ1 = m when k = m/p1 > m/p2. The disparity is maximal in the interval m/p2 < k < m/p1.
Remark 4.4 (Structural vs. Algorithmic Bias). Proposition 4.3 demonstrates that disparate outcomes arise from the probabilistic structure of screening systems, independent of algorithmic design choices. When different groups experience differential surveillance exposure rates (p1 ̸= p2), this
14

mathematically guarantees unequal false positive rates (q1 ̸= q2) under any common threshold m, creating disproportionate false alert burdens through Poisson tail behavior. The exponential amplification in part (1) is particularly striking: when both groups are screened using the same attribute set and threshold, small differences in exposure translate to exponential differences in false alert rates (Figure 1(d)). The effect manifests temporally as different groups reach critical false-alert rate-
s at different times: Group 2 with exposure rate p2 = 0.020 fails at k2∗ = 350 attributes, while Group 1 with p1 = 0.005 remains reliable until k1∗ = 1400. This fourfold difference in system lifetime arises from the fourfold difference in exposure rates, but the amplification becomes exponential when comparing simultaneous false alert rates: at intermediate k ∈ (350, 1400), Group 2 experiences exponentially more false alerts than Group 1. Our exponential disparity result formalizes concerns from t-
he algorithmic fairness literature about the inadequacy of threshold-based fairness metrics [Hardt et al., 2016, Barocas et al., 2019]. Even attempting to equalize false positive rates through group-specific threshold adjustments cannot eliminate outcome disparities, as the required thresholds themselves encode the underlying exposure inequalities. This suggests fairness cannot be achieved through algorithmic tuning alone [Dwork et al., 2012], but requires equalizing data collection intensity at t-
he source. This conclusion extends recent work on “fairness through awareness” and formalizes “structural bias” arguments [Eubanks, 2018, Benjamin, 2019] showing that disparities are intrinsic to systems built on heterogeneous data collection, not merely implementation artifacts.
4.4 Numerical Example: Geographic Disparities
Consider a city with two neighborhoods:
• Neighborhood A (low surveillance): nA = 100,000, pA = 0.005
• Neighborhood B (high surveillance): nB = 100,000, pB = 0.02
With k = 100 attributes and threshold m = 3:
λA = 100 · 0.005 = 0.5, qA =
∞
X
j=3
e−0.5 0.5j
j! ≈ 0.014,
λB = 100 · 0.02 = 2, qB =
∞
X
j=3
e−2 2j
j! ≈ 0.323.
Expected number of false alerts:
nAqA ≈ 100,000 · 0.014 = 1,400,
nBqB ≈ 100,000 · 0.323 = 32,300.
Despite equal population sizes, Neighborhood B experiences approximately 23 times more false alerts. This exponential disparity, visualized in Figure 1(d), demonstrates how differential exposure rates create fundamentally unequal outcomes that cannot be remedied through threshold adjustments alone. Moreover, by Theorem 4.2, since nBqB ≫ nAqA, the system-level false alert probability is dominated by Neighborhood B:
Pr(system false alert) ≈ 1 − e−32,300 ≈ 1.
The system is essentially guaranteed to produce false alerts, driven almost entirely by the heavily surveilled neighborhood. This illustrates how heterogeneous exposure not only creates disparate individual-level burdens but also determines aggregate system reliability.
15

Remark 4.5 (Policy Implications). These results suggest that surveillance system audits should:
1. Measure exposure rates (pg) across demographic and geographic groups, not just aggregate false alert rates.
2. Recognize that system reliability is bounded by the worst-performing group (Theorem 4.2), making demographic disaggregation essential.
3. Account for temporal dynamics: groups with higher exposure fail first as data accumulates, creating windows of maximum disparity.
4. Acknowledge that threshold adjustments cannot eliminate disparities arising from differential exposure; only equalizing pg across groups can achieve fairness.
5 Bayesian Posterior Reliability and the Base-Rate Trap
The preceding analysis focused on frequentist system reliability: the probability that at least one innocent individual is flagged. However, practitioners ultimately need the posterior probability that a flagged person is truly a target. This Bayesian perspective reveals an even more stringent constraint: in the sparse-target regime (where the expected number of true targets r is small relative to population size), posterior reliability degrades once nq becomes comparable to rs, and collapses when-
 nq ≫ rs. In this regime, flags become epistemically meaningless well before the frequentist transition at nq ∼ 1.
5.1 The Bayesian Framework and Positive Predictive Value
We introduce standard notation from diagnostic testing and forensic statistics [Balding, 2002]:
π ≡ Pr(target) (base rate),
s ≡ Pr(flag | target) (sensitivity),
q ≡ Pr(flag | innocent) (false positive rate).
By Bayes’ rule, the positive predictive value (PPV) is
Pr(target | flag) = s π
s π + q (1 − π) . (12)
In a screened population of size n with r true targets (π = r/n), the expected number of flagged individuals is: E[# flags] ≈ r s + n q.
Thus, the expected false discovery rate (FDR) is
FDR ≈ n q
r s + n q , PPV = 1 − FDR ≈ r s
r s + n q , (13)
matching (12) exactly.
16

5.2 Posterior Reliability and Bayesian Critical Scales
In the large-deviation setting of Theorem 2.4, with threshold m = cλ and c > 1, the false positive rate satisfies
q ≍ κ(λ) e−λD(c∥1), κ(λ) = O(λ−1/2),
up to subexponential prefactors. Combining this with (13) yields an explicit condition for maintaining actionable posterior probabilities.
Proposition 5.1 (Bayesian Critical Population for Actionable PPV). Fix a desired posterior level α ∈ (0, 1) (e.g., α = 0.9) and sensitivity s ∈ (0, 1]. Let r denote the expected number of true targets in the population (so the base rate is π = r/n). In the sparse-target regime where r is fixed or grows sublinearly with n, the condition Pr(target | flag) ≥ α
is satisfied whenever
n ≤ (1 − α) r s
α q . (14)
Under the large-deviation scaling q ≍ κ(λ)e−λD(c∥1), the Bayesian critical population size satisfies
nBayes
crit (α, s) ≍ (1 − α) r s
α
√
λ exp λD(c∥1) , (15)
where ≍ hides subexponential factors absorbed into κ(λ).
Remark 5.2 (Regime of Validity). Proposition 5.1 applies to the “needle in a haystack” setting where r is fixed or grows slowly while n increases. If instead r ∝ n (constant prevalence), then the ratio r/n is fixed, and the condition for actionable PPV reduces to a bound on q/s relative to α/(1 − α), independent of n. The sparse-target regime is the most challenging case for screening systems and is therefore the primary focus of this analysis.
Proof. From (13), PPV ≥ α iff r s ≥ α(r s + n q). Rearranging gives r s(1 − α) ≥ α n q, which yields (14). Substituting the large-deviation scaling for q proves (15).
Remark 5.3 (The Bayesian Trap). Frequentist reliability deteriorates once nq ∼ 1, when the system is likely to produce at least one false alert. Bayesian actionability demands the stronger condition nq ≪ rs. When rs > 1, there is an intermediate regime where false alerts occur frequently but individual flags retain some evidential value. When rs < 1 (extremely sparse targets), posterior reliability collapses before the system becomes statistically unreliable. In all cases, if nq ≫ rs, posterior pr-
obabilities decay toward zero even when individual false positives remain rare.
5.3 Likelihood Ratios and Classical Fallacies
Analysts often cite tiny false positive rates q or large likelihood ratios
L= s
q,
and mistakenly infer that Pr(target | flag) is therefore large. This is the classical prosecutor’s fallacy [Balding, 2002]. Bayes’ rule shows:
Pr(target | flag)
Pr(innocent | flag) = s
q· π
1 − π = L × prior odds. (16)
17

When the base rate π = r/n is small, the prior odds can overwhelm any fixed likelihood ratio. Even extremely rare false positives (q ≪ 1) do not guarantee high PPV. When π ≪ q, most flagged individuals remain innocent despite individually low false positive rates.
5.4 Resolving the DNA Database Controversy
Forensic statisticians have long debated the evidential value of DNA “cold hits.” Stockmarr [1999] argued that searching databases weakens evidence by inflating coincidental match probabilities; Balding and Donnelly [1995], Balding [2002] countered that likelihood ratios preserve evidential weight. Our framework resolves the debate. Using (16), Pr(guilty | match)
Pr(innocent | match) = s
q · r/n
1 − r/n .
Standard STR genotype profiling yields match probabilities on the order of q ∼ 10−12 or smaller. Even with databases of size n ∼ 106, the product nq ∼ 10−6 ≪ 1 remains far below the critical scale where coincidental matches become probable. In this extreme regime, likelihood ratios dominate the posterior odds, validating Balding’s argument that database size does not meaningfully dilute evidential weight. By contrast, multi-attribute surveillance systems often operate far above the critical thresh-
old, where prior odds collapse faster than likelihood ratios can compensate. In this regime, Stockmarr’s caution applies: match evidence loses evidential weight as search populations grow. The same mathematics governs both contexts; the numerical parameters place them on opposite sides of the critical scale n ∼ exp(λD).
5.5 Key Takeaways
1. Bayesian scaling mirrors frequentist scaling: Bayesian actionability inherits the exponential factor eλD(c∥1) but includes the additional multiplicative factor (1 − α)rs/α; see (15).
2. Posterior collapse can precede frequentist failure: In the sparse-target regime, posterior reliability collapses once nq approaches rs, often well before the frequentist transition at nq ∼ 1.
3. Exponential data growth overwhelms adaptation: Reducing q by a factor of β requires increasing k by only log(1/β)/(pD), while real-world data growth is exponential: k(t) = k0γt (Section 3). Thus posterior collapse is temporally inevitable.
4. Epistemic saturation: As n grows, base rates π = r/n shrink. Even rare false positives become dominated by prior odds, causing Pr(target | flag) to decay toward zero.
5. Resolution of the DNA debate: Stockmarr and Balding are correct in different regimes: Balding for nq ≪ 1 (DNA), Stockmarr for nq ≳ 1 (large-scale attribute screening).
Remark 5.4 (Connections to Classical Statistical Fallacies). This section unifies the base-rate fallacy, the prosecutor’s fallacy, false discovery rate control [Benjamini and Hochberg, 1995], and the PPV problem in medical screening [Welch and Black, 2011]. Conceptually, these phenomena are identical: all reflect Bayes’ rule under low prevalence and imperfect specificity. The widely cited argument that “most published research findings are false” [Ioannidis, 2005] is the same FDR/PPV problem in an-
other domain.
18

6 Effective Dimensionality Under Correlation
Real surveillance data exhibit spatial and temporal dependencies that fundamentally alter tail probabilities. While correlation does not change the expected number of matches (by linearity of expectation, E[Pk
i=1 Xi] = kp regardless of dependence structure), it causes overdispersion that inflates tail probabilities beyond the independent Poisson approximation.
6.1 Variance Inflation and Rate Function Reduction
For binary indicators X1, . . . , Xk with E[Xi] = p and pairwise correlation Corr(Xi, Xj) = ρij, the
sum Y = Pk
i=1 Xi has:
E[Y ] = kp (unchanged by correlation),
Var(Y ) = kp(1 − p) +
X
i̸=j
p(1 − p)ρij = kp(1 − p) 1 +
P
i̸=j ρij
k,
where the design effect DEFF =
P
i̸=j ρij
k quantifies variance inflation; for nonnegative average correlation this satisfies DEFF ≥ 0 [Kish, 1965]. For the Poisson approximation, independence gives Var(Y ) = λ = kp. Under positive correlation, Var(Y ) > λ, creating heavier tails. Positive correlation generally reduces the large-deviation rate compared to the independent case, producing heavier tails; see Dembo and Zeitouni [2010] for conditions. For intuition, one can treat the reduction in rate as shrinking the exponent by the factor ke-
ff/k.
6.2 Effective Degrees of Freedom
Rather than reducing λ itself, correlation reduces the effective degrees of freedom governing the concentration behavior. Standard design-effect methodology [Kish, 1965, Bretherton et al., 1999] parameterizes this through an effective sample size keff defined such that the variance of the correlated sum equals that of keff independent observations:
Var(Y ) = keff · p(1 − p). (17)
For spatial correlation with exponential decay ρ(r) = e−r/ξ over a monitored area A, the spatial integral of the correlation function yields:
keff ≈ A
2πξ2 , (18)
where ξ is the correlation length [Bretherton et al., 1999]. Similarly, for temporal correlation with correlation time τ and unit sampling interval, the Bartlett-Wilks formula [Wilks, 2019] gives:
keff ≈ k
1 + 2 Pk−1
h=1 ρtime(h)(1 − h/k) . (19)
For exponential temporal correlation ρtime(h) = e−h/τ with τ ≫ 1:
keff ≈ k(1 − e−1/τ )
1 + e−1/τ ≈ k
2τ . (20)
19

6.3 Impact on Critical Populations
We model the effect of correlation by shrinking the effective number of independent comparisons from k to keff, holding the marginal match probability p fixed. The true mean number of matches remains λ = kp, but the concentration (and hence the large-deviation exponent) behaves as if only keff coordinates contributed independently. For thresholds m = cλ with c > 1, the tail probability under correlation satisfies:
qcorr ≳ exp (−keffp · D(c∥1)) = exp −λ · keff
k · D(c∥1) . (21)
(This expression should be interpreted as a heuristic design–effect approximation: positive dependence reduces the large–deviation rate, and replacing k by keff captures the dominant variance–inflation effect, but does not constitute a full large–deviation principle under general dependence.) This heuristic approximation assumes that variance inflation captures the dominant effect of correlation on tail probabilities. Rigorous large-deviation analysis under general dependence is more complex [Demb-
o and Zeitouni, 2010], but the effective dimension approach provides useful quantitative guidance for practitioners. This modifies the critical population scale. The exponent in the independent case λD(c∥1) = kpD(c∥1) is reduced by the factor keff/k, yielding:
ncorr
crit ≲
√
λ exp keff
k · λD(c∥1) =
√
λ exp (keffp · D(c∥1)) . (22)
The critical population is thus reduced compared to the independent case, making systems fail at smaller populations when positive correlations are present. The factor keff/k represents the information loss due to redundancy in correlated observations.
6.4 Quantitative Examples
Example 6.1 (City-Scale Spatial Surveillance). Consider fine-grained location monitoring with k = 10,000 cells covering area A = 100 km2 with correlation length ξ = 500 m. The effective number of independent spatial tests is:
keff ≈ 100 × 106 m2
2π(500)2 ≈ 64.
Despite nominally tracking 10,000 locations, correlation reduces effective information to approximately 64 independent observations. With p = 0.005, the expected number of matches is λ = kp = 10,000 × 0.005 = 50. Set the threshold at m = 75 matches (corresponding to c = m/λ = 1.5, validly in the upper tail regime with c > 1 as required by Theorem 2.4). The rate function is:
D(1.5∥1) = 1.5 log(1.5) − 1.5 + 1 ≈ 0.108.
Independent case: The exponent governing the critical population is:
λD(c∥1) = 50 × 0.108 = 5.4,
giving ncrit ∼ √λ exp(5.4) ≈ 7.07 × 221 ≈ 1,560.
20

Correlated case: By equation (22), the exponent is reduced by the factor keff/k:
keff
k · λD(c∥1) = 64
10,000 × 5.4 ≈ 0.0345,
giving ncorr
crit ∼ √λ exp(0.0345) ≈ 7.07 × 1.035 ≈ 7. Spatial correlation reduces the critical population from approximately 1,560 to approximately 7, a reduction of over two orders of magnitude. The system can reliably monitor only a handful of individuals once spatial dependencies are properly accounted for, demonstrating how correlationinduced overdispersion dramatically accelerates false-alert saturation.
Example 6.2 (Routine Behavior Monitoring). For daily surveillance data (∆t = 1 day) over one year (k = 365 observations) monitoring movement patterns with correlation time τ = 30 days, we obtain:
keff ≈ k
2τ = 365
60 ≈ 6.
Observing someone’s location 365 times yields effective information equivalent to approximately 6 independent observations. With per-observation match probability p = 0.02, the expected matches are λ = 365×0.02 = 7.3. Set threshold m = 12 (giving c = 12/7.3 ≈ 1.64). The rate function is:
D(1.64∥1) = 1.64 log(1.64) − 1.64 + 1 ≈ 0.173.
Independent case: λD(c∥1) = 7.3 × 0.173 ≈ 1.26, giving ncrit ∼ √λ e1.26 ≈ 2.7 × 3.5 ≈ 9.5
(ignoring the subexponential √λ factor for rough scaling gives ncrit ∼ e1.26 ≈ 3.5). Correlated case: (keff/k)·λD = (6/365)×1.26 ≈ 0.021, giving ncorr
crit ∼ √λ e0.021 ≈ 2.7×1.02 ≈ 2.8
(or e0.021 ≈ 1.02 ignoring the prefactor). Temporal correlation reduces the critical population from approximately 10 individuals to approximately 3, making reliable surveillance of even small groups challenging. Routine behaviors create such massive information redundancy that even year-long observation provides minimal discriminative power.
6.5 Connections to Multiple Testing
This effective dimension reduction connects surveillance analysis to multiple-testing corrections in genomics [Nyholt, 2004] and neuroimaging [Worsley et al., 1996], where similar correlation structures require Bonferroni-type corrections scaled by keff rather than the nominal number of tests k. The mathematics forces system designers to confront the limited information content of nominally “big” data: more observations do not guarantee more information when those observations are highly correlate-
d.
Remark 6.3 (Overdispersion as System Weakness). Correlation-induced overdispersion represents a fundamental vulnerability in screening systems. Positive correlation makes extreme events (high match counts) more probable than the independent Poisson model predicts, accelerating the onset of false-alert saturation. System designers cannot escape this by collecting more data; additional correlated observations provide diminishing marginal information while accumulating the same false-positive burden.-
 While our analysis uses effective degrees of freedom as a heuristic to quantify correlation effects, the qualitative conclusion is robust: positive correlation always weakens concentration, making false alerts more likely than independence would suggest.
21

7 Conclusion
We have established sharp probabilistic limits, under standard rare-event and independence (or effective-independence) assumptions, for large-scale screening systems. The critical population size beyond which false alerts become inevitable scales as
ncrit ∼
√
λ exp(λD(c∥1)),
governed by large-deviation rate functions that cannot be circumvented through algorithmic refinement within these models. When data volume grows exponentially, k(t) = k0γt, any screening system has a calculable operational lifetime
T ∗ ≈ log m − log(k0p)
log γ ,
typically measured in years rather than decades. Threshold adjustments provide only logarithmic protection against exponential growth, making temporal failure inevitable rather than merely possible. The Bayesian analysis reveals an even more stringent constraint: posterior probabilities collapse when nq ≫ rs, rendering flags epistemically meaningless well before frequentist reliability fails. This asymptotic framing clarifies the long-standing DNA database controversy: Stockmarr’s caution and Bald-
ing’s confidence apply in distinct regimes, separated by the critical scale n ∼ exp(λD). Differential surveillance exposure creates exponential outcome disparities whenever common thresholds are applied across groups with heterogeneous match probabilities pg. The mathematics guarantees disproportionate false-alert burdens through Poisson tail behavior. This is not an artifact of algorithmic bias but a structural inevitability arising from heterogeneous data collection. These results impose non-neg-
otiable constraints on system design. Operational surveillance systems require: (1) explicit expiration dates calculated from data growth rates; (2) demographic exposure audits measuring pg across population groups; (3) capacity constraints limiting investigable flags; and (4) recognition that system-wide reliability is dominated by the subpopulation with the highest effective match probability. The mathematics is unforgiving: more data does not guarantee better decisions, and exponential growth e-
nsures finite operational windows. The policy implication is direct: screening systems operating near or beyond their critical parameters will generate false alerts regardless of implementation quality. Designers must either accept these mathematical limits or fundamentally restructure surveillance architectures to avoid accumulating correlated data over time. Threshold refinement and algorithmic optimization cannot solve problems rooted in probabilistic inevitability.
Acknowledgments
We acknowledge the support of the Natural Sciences and Engineering Research Council of Canada (NSERC), [funding reference number RGPIN-2019-04085].
References
Axelsson, S. (2000). The base-rate fallacy and the difficulty of intrusion detection. ACM Transactions on Information and System Security, 3(3):186–205.
Balding, D. J. and Donnelly, P. (1995). Inference in forensic identification. Journal of the Royal Statistical Society: Series A, 158(1):21–38.
22

Balding, D. J. (2002). The DNA database search controversy. Biometrics, 58(1):241–247.
Barbour, A. D., Holst, L., and Janson, S. (1992). Poisson Approximation. Oxford University Press.
Barbour, A. D. and Chen, L. H. Y. (2005). An Introduction to Stein’s Method. Singapore University Press.
Barocas, S., Hardt, M., and Narayanan, A. (2019). Fairness and Machine Learning: Limitations and Opportunities. fairmlbook.org.
Benjamin, R. (2019). Race After Technology: Abolitionist Tools for the New Jim Code. Polity Press.
Benjamini, Y. and Hochberg, Y. (1995). Controlling the false discovery rate: A practical and powerful approach to multiple testing. Journal of the Royal Statistical Society: Series B, 57(1):289–300.
Bretherton, C. S., Widmann, M., Dymnikov, V. P., Wallace, J. M., and Blad ́e, I. (1999). The effective number of spatial degrees of freedom of a time-varying field. Journal of Climate, 12(7):19902009.
Chouldechova, A. (2017). Fair prediction with disparate impact: A study of bias in recidivism prediction instruments. Big Data, 5(2):153–163.
Corbett-Davies, S., Pierson, E., Feller, A., Goel, S., and Huq, A. (2017). Algorithmic decision making and the cost of fairness. In Proceedings of the 23rd ACM SIGKDD International Conference on Knowledge Discovery and Data Mining, pages 797–806.
Dembo, A. and Zeitouni, O. (2010). Large Deviations Techniques and Applications, 2nd edition. Springer.
Dwork, C., Hardt, M., Pitassi, T., Reingold, O., and Zemel, R. (2012). Fairness through awareness. In Proceedings of the 3rd Innovations in Theoretical Computer Science Conference, pages 214226.
Eubanks, V. (2018). Automating Inequality: How High-Tech Tools Profile, Police, and Punish the Poor. St. Martin’s Press.
Fawcett, T. (2006). An introduction to ROC analysis. Pattern Recognition Letters, 27(8):861–874.
Feller, W. (1968). An Introduction to Probability Theory and Its Applications, Vol. 1, 3rd edition. Wiley.
Hardt, M., Price, E., and Srebro, N. (2016). Equality of opportunity in supervised learning. Advances in Neural Information Processing Systems, 29.
Hilbert, M. and L ́opez, P. (2011). The world’s technological capacity to store, communicate, and compute information. Science, 332(6025):60–65.
Hoeffding, W. (1963). Probability inequalities for sums of bounded random variables. Journal of the American Statistical Association, 58(301):13–30.
Ioannidis, J. P. A. (2005). Why most published research findings are false. PLoS Medicine, 2(8):e124.
23

Kaye, D. H. (2013). The genealogy detectives: A constitutional analysis of familial searching. American Criminal Law Review, 51(1):109–163.
Kish, L. (1965). Survey Sampling. Wiley.
Lyon, D. (2003). Surveillance as Social Sorting: Privacy, Risk, and Digital Discrimination. Routledge.
Mitzenmacher, M. and Upfal, E. (2005). Probability and Computing: Randomized Algorithms and Probabilistic Analysis. Cambridge University Press.
Nyholt, D. R. (2004). A simple correction for multiple testing for single-nucleotide polymorphisms in linkage disequilibrium with each other. American Journal of Human Genetics, 74(4):765–769.
O’Neil, C. (2016). Weapons of Math Destruction: How Big Data Increases Inequality and Threatens Democracy. Crown Publishers.
Pollanen, M. (2024). A double birthday paradox in the study of coincidences. Mathematics, 12(24):3882.
Robbins, H. (1955). A remark on Stirling’s formula. The American Mathematical Monthly, 62(1):2629.
Scheirer, W. J., de Rezende Rocha, A., Sapkota, A., and Boult, T. E. (2013). Toward open set recognition. IEEE Transactions on Pattern Analysis and Machine Intelligence, 35(7):1757–1772.
Schneier, B. (2015). Data and Goliath: The Hidden Battles to Collect Your Data and Control Your World. W. W. Norton & Company.
Stockmarr, A. (1999). Likelihood ratios for evaluating DNA evidence when the suspect is found through a database search. Biometrics, 55(3):671–677.
Storvik, G. (2006). The DNA database search controversy revisited: A hierarchical Bayesian approach. Biometrics, 62(3):652–661.
Storey, J. D. (2002). A direct approach to false discovery rates. Journal of the Royal Statistical Society: Series B, 64(3):479–498.
Welch, H. G. and Black, W. C. (2011). Overdiagnosis in cancer. Journal of the National Cancer Institute, 103(8):605–613.
Wilks, D. S. (2019). Statistical Methods in the Atmospheric Sciences, 4th edition. Academic Press.
Worsley, K. J., Marrett, S., Neelin, P., Vandal, A. C., Friston, K. J., and Evans, A. C. (1996). A unified statistical approach for determining significant signals in images of cerebral activation. Human Brain Mapping, 4(1):58–73.
24

---

## Processing Information

- **Processing Library:** Zotero PDFWorker
- **Processing Date:** 2026-02-10T18:16:04.776Z
- **Text Length:** 62069 characters
- **Success:** Text extraction completed
- **PDF Library Used:** Zotero PDFWorker
- **Pages Processed:** 24 of 24
