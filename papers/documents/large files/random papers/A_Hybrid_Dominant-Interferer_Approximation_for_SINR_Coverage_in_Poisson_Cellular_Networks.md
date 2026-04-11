# PDF Document: Krishnan et al. - 2025 - A Hybrid Dominant-Interferer Approximation for SINR Coverage in Poisson Cellular Networks.pdf

**File Path:** Krishnan et al. - 2025 - A Hybrid Dominant-Interferer Approximation for SINR Coverage in Poisson Cellular Networks.pdf

**Processed Date:** 2026-02-10T18:16:14.339Z

**File Size:** 1188.94 KB

**Total Pages:** 5

**Extracted Pages:** 5

**PDF Library:** Zotero PDFWorker

**Attachment Item ID:** 3353

**Title:** A Hybrid Dominant-Interferer Approximation for SINR Coverage in Poisson Cellular Networks

**Collection:** Large Files > Random Papers

---

## Extracted Text Content

1
A Hybrid Dominant-Interferer Approximation for
SINR Coverage in Poisson Cellular Networks
Sunder Ram Krishnan, Junaid Farooq Senior Member, IEEE, Kumar Vijay Mishra Senior Member, IEEE, Xingchen Liu, S. Unnikrishna Pillai Life Fellow, IEEE, and Theodore S. Rappaport Life Fellow, IEEE
Abstract—Accurate radio propagation and interference modeling is essential for the design and analysis of modern cellular networks. Stochastic geometry offers a rigorous framework by treating base station locations as a Poisson point process and enabling coverage characterization through spatial averaging, but its expressions often involve nested integrals and special functions that limit general applicability. Probabilistic interference models seek closed-form characterizations through moment-bas-
ed approximations, yet these expressions remain tractable only for restricted parameter choices and become unwieldy when interference moments lack closed-form representations. This work introduces a hybrid approximation framework that addresses these challenges by combining Monte Carlo sampling of a small set of dominant interferers with a Laplace functional representation of the residual far-field interference. The resulting dominantplus-tail structure provides a modular, numerically stable, and -
path-loss-agnostic estimator suitable for both noise-limited and interference-limited regimes. We further derive theoretical error bounds that decrease with the number of dominant interferers and validate the approach against established stochastic geometry and probabilistic modeling benchmarks.
Index Terms—Coverage probability, interference, Poisson cellular networks, stochastic geometry.
I. INTRODUCTION
Signal coverage analysis in cellular networks is a foundational problem in wireless communications [1, 2] and can be characterized probabilistically, representing the likelihood that the instantaneous or spatially averaged signal-to-interferenceplus-noise ratio (SINR) exceeds a prescribed threshold. This probabilistic formulation, often referred to as the SINR coverage probability [3], quantifies the extent to which users experience acceptable link quality over space or time [4, 5]. Stochastic geo-
metry (SG) offers a mathematically rigorous framework to represent the spatial randomness inherent in cellular networks, where base station (BS) locations are often modeled as realizations of a Poisson point process (PPP) [6–8]. This approach facilitates the derivation of spatially averaged SINR probabilities over the geographical coverage region of the network. SG-based formulations have been instrumental in analyzing diverse scenarios such as heterogeneous multitier deployments [9], energy-aware-
 network designs [10], and millimeter-wave systems with blockage effects [11–13]. Despite its analytical tractability, the resulting SINR coverage expressions often involve multi-dimensional integrals and special functions that limit interpretability and complicate their direct
S. R. K. is with the Amrita Vishwa Vidyapeetham, Amritapuri, KL 690525 India. E-mail: eeksunderram@gmail.com. J. F. is with the University of Michigan-Dearborn, MI 48128 USA. E-mail: mjfarooq@umich.edu. K. V. M. is with the United States DEVCOM Army Research Laboratory, Adelphi, MD 20783 USA. E-mail: kvm@ieee.org. X. L., S. U. P., and T. S. R. are with the New York University, Brooklyn, NY 11201 USA. E-mail: {xl5933, pillai, ted.rappaport}@nyu.edu.
use in network optimization and design [4, 9]. Furthermore, the dependence of these formulations on specific path-loss exponents restricts their general applicability and scalability across varying propagation environments. Efforts have been made to modularize the coverage analysis for network optimization by re-defining coverage [10] or through probabilistic modeling [14, 15] by approximating interference as a structured random variable with finite-order moments. While these approaches yield clos-
ed-form expressions in some scenarios and allow for tractable system-level reasoning, they require delicate moment calculations that vary with path-loss exponent, leading to tedious derivations and are prone to breakdown when moments do not admit tractable expressions. Other efforts include SG-inspired metrics such as the meta distribution of SINR [16–18], which captures linklevel variability but adds layers of analytical complexity. In this letter, we propose a modular and numerically stable hybr-
id approximation framework for evaluating coverage probability in Poisson cellular networks. The central idea is to decompose the interference into two components: (i) a finite number of dominant interferers treated exactly, and (ii) a residual interference tail approximated using a Laplace functional over the PPP. This dominant-plus-tail approximation eliminates the need for symbolic derivations and works seamlessly across a wide range of path-loss exponents, SINR thresholds, and deployment densi-
ties. Although Qin et. al. [18] derived an approximate analytic expression for the distributional shape of link reliabilities under a dominant-plus-mean-field closure, it did not focus on uniform control of the approximation error for finite interference truncations. In contrast, we focus on the SINR coverage probability, i.e., the spatially averaged success probability, and introduce a hybrid numerical estimator that treats a finite number of nearest interferers exactly while approximating the fa-
r-field tail through a Laplace functional. In short, even though the dominant-interferer decomposition is a shared modeling device, this work has a different focus and establishes new theoretical guarantees/algorithmic machinery that are neither implied by nor derivable from the metadistribution formulation. The main contributions of this work are as follows: • We develop a path-loss-agnostic hybrid method that treats a few dominant interferers deterministically while modeling the residual far-fie-
ld interference statistically through a Laplace functional. • We derive explicit error bounds that quantify the accuracy of the approximation and provide theoretical guarantees on convergence of this novel approximation to the infinite-interferer benchmark for commonly-used path
arXiv:2511.19568v1 [cs.IT] 24 Nov 2025

2
loss exponents. • Extensive numerical experiments confirm that the proposed method matches simulation and SG benchmarks while offering greater implementation simplicity.
II. SYSTEM MODEL AND PROBLEM FORMULATION
We consider the forward link of a cellular network, in which BSs are spatially distributed according to a homogeneous PPP, denoted by Φ ⊂ R2 with intensity λ > 0 (BS/km2). Without loss of generality, a typical user is assumed to be located at the origin, in accordance with Slivnyak’s theorem [19], and connects to its nearest BS. To model the finite-domain nature of practical networks, we restrict attention to the N nearest BSs to the user. Let xi ∈ Φ denote the location of the ith nearest BS, and -
let ∥xi∥ represent its distance from the origin. The BS distances are ordered such that ∥x1∥ < ∥x2∥ < · · · < ∥xN ∥. Define r = ∥x1∥ as the distance to the serving BS and Ri = ∥xi∥ as the distance to the ith interfering BS for i = 2, . . . , N . The wireless channels from each BS to the user experience independent Rayleigh fading, modeled by power gains gi ∼ Exp(1). The signal undergoes path-loss attenuation with exponent η ∈ R, and the receiver is subject to additive white Gaussian noise with pow-
er σ2 > 0. The received signal power from the serving BS is g1x−η
1 , while the aggregate interference from the N − 1 nearest interferers
is PN
i=2 giR−η
i . Therefore, the SINR at the typical user is expressed as follows:
SINR = g1r−η
PN
i=2 giR−η
i + σ2 .
The SINR coverage probability, considering N − 1 interfering BSs, is defined as the probability that the SINR exceeds a specified threshold T > 0, i.e.,
P (N)
cov (T ) := P g1r−η
PN
i=2 giR−η
i + σ2 > T
!
. (1)
The serving distance r follows a Rayleigh distribution, as the distance r2 ∼ Exp(1/(πλ)), owing to the nearest-neighbor property of the 2D PPP [20]. More generally, the squared distance to the ith nearest BS satisfies R2
i ∼ Gamma(i, 1/(πλ)) for i = 2, . . . , N . Evaluating (1) involves averaging over both spatial randomness (i.e., the PPP realization) and channel fading. For a general path-loss exponent η, the coverage expression does not admit a simple closed-form solution due to the complex interaction between distance distributions and interference statistics [5, 21]. To address this challenge, we propose a hybrid approximation framework. The core idea is to split the total interference into two components: (-
i) an exact summation over the K − 1 nearest interferers, and (ii) a residual tail comprising the remaining N − K BSs, which is approximated via a Laplace functional of the PPP. This decomposition enables a tractable, accurate, and path-lossagnostic approximation of the SINR coverage probability, even for general network parameters.
III. CONDITIONAL COVERAGE PROBABILITY AND TAIL
APPROXIMATION
Overall, our goal is to obtain a favorable compromise between full-scale simulation as involved in evaluating (1) by averaging and deriving detailed analytical formulae as in
[15], while still being modular and generally applicable over diverse parameter values. To compute the SINR coverage probability P (N)
cov (T ), we condition on the geometric realization
r, {Ri}N
i=2 denoted by · | Φ. Then, from (1),
P (N)
cov (T ) = EΦ
h
E{gi}i≥2|Φ P g1 > T rη Itot + σ2 i
,
where Itot = PK
i=2 giR−η
i + PN
i=K+1 giR−η
i . Since g1 ∼ Exp(1), we can further express the coverage probability as follows: P (N)
cov (T )
= EΦ
h
E{gi }N
i=2 |Φ
h
e−T rη(PK
i=2 giR−η
i +PN
i=K+1 giR−η
i +σ2)ii
.
(2) Here, we retain the exact K − 1 dominant terms and approximate the remaining contribution of Itail,N = PN
i=K+1 giR−η
i
by computing the expectation over {gi}N
i=K+1 conditioned on Φ. Conditioned on the geometry r, {Ri}, and using the independence of gi ∼ Exp(1), we obtain the following:
E{gi }N
i=K +1 |Φ
h
e−sItail,N
i
=
N
Y
i=K+1
Egi [e−sgiR−η
i ]=
N
Y
i=K+1
1
1 + sR−η
i
,
where s = T rη. Recall that, for a non-negative measurable function f : R2 → [0, 1], the probability generating functional (PGFL) of a homogeneous PPP Φ of intensity λ satisfies (cf. [19])
EΦ
" Y
x∈Φ
f (x)
#
= exp −λ
Z
R2
(1 − f (x)) dx . (3)
Denote the open Euclidean ball of radius R centered at the origin by B(0, R) and its closure by B(0, R). Applying (3)
to the region Φ ̃ = Φ ∩ (B(0, RN ) \ B(0, RK )) with f (x) =
1
1+s∥x∥−η , and converting to polar coordinates, we obtain:
EΦ


Y
x∈Φ ̃
1
1 + s∥x∥−η

 = exp −2πλ
Z RN
RK
st−η
1 + st−η t dt .
Combining the exact dominant terms with the approximated tail, we define the approximate SINR coverage as:
Pe(N )
cov (T ) :=
EΦ
"
e−sσ2 K
Y
i=2
Egi |Φ [e−sgi R−η
i ] exp −2πλ
Z RN
RK
st−η · tdt 1 + st−η
#
= EΦ
"
e−sσ2 K
Y
i=2
1
1 + sR−η
i
exp −2πλ
Z RN
RK
st−η · tdt 1 + st−η
#
,
(4) where, recalling s = T rη, the outer expectation is over r, {Ri}K
i=2, RN , which is quite tractable when K is small. This hybrid form maintains accuracy while enabling tractable approximation. Pseudo code implementation of this approach is provided in Algorithm 1.
IV. ANALYSIS OF TRUNCATION ERROR
We present a theorem that bounds the approximation error from truncating interference at the N th interferer, when η > 2, with the PGFL-based approximation for the last N − K interferers. The infinite-user coverage probability benchmark from SG is defined as
PSG(T ) := P g1r−η
P
x∈Φ\{x1} gx∥x∥−η + σ2 > T
!
, (5)
which represents the SINR coverage probability in an idealized model with infinitely many interferers and serves as the asymptotic reference for finite-user approximations.

3
Algorithm 1 Hybrid Coverage Approximation Algorithm
1: Inputs: BS density λ > 0, path-loss exponent η ∈ R, noise
power σ2 > 0, number of dominant interferers K, total interferers N , list of SINR thresholds T1, . . . , TL, number of Monte Carlo trials M , domain half-width L 2: Output: Coverage probabilities Pecov(T1), . . . , Pecov(TL) 3: for m = 1 to M do 4: Sample Ntot ∼ Poisson(λ · (2L)2)
5: Generate Ntot BS locations uniformly in [−L, L]2 6: Compute distances dj = ∥xj∥2 from origin for each BS 7: Sort {dj } in increasing order: R1 < R2 < · · · < RNtot 8: if Ntot < N then continue to next trial 9: Retain top N distances: R = {R1, . . . , RN }; set r ← R1 (serving BS) 10: for each T in {T1, . . . , TL} do
11: s ← T · rη
12: dom prod ← QK
i=2
1
1+sR−η
i
13: Compute tail Laplace term LN (s) (cf. (6))
14: sample value ← e−sσ2 · dom prod · LN (s) 15: Accumulate sample value for threshold T 16: Average accumulated values over M trials to estimate Pe(N)
cov (T )
Theorem 1 (Truncation Error Bound). Let η > 2, and define s := T rη > 0, where r is the distance to the serving BS. Then the error incurred by approximating the SG coverage probability using only the N nearest BSs satisfies
Pe(N )
cov (T ) − PSG(T ) ≤ Er,RN [δN (s, RN )] ,
where the tail error term is given by
δN (s, RN ) := 1 − exp −2πλ
Z∞
RN
st−η
1 + st−η t dt .
Proof. We bound the difference between the SG benchmark and the dominant-plus-tail approximation by comparing their respective Laplace transforms of the interference. Let the residual interference beyond radius RK be Itail :=
P
x∈Φ\B(0,RK) gx∥x∥−η, with gx ∼ Exp(1) i.i.d.
Conditioning on Φ, and using the independence of the fading coefficients,
E [exp(−sItail) | Φ] =
Y
x∈Φ\B(0,RK )
1
1 + s∥x∥−η .
Taking expectation over Φ using the PGFL of the PPP, we obtain
L∞(s) := E [exp(−sItail)] = exp −2πλ
Z∞
RK
st−η
1 + st−η t dt .
The approximation used in Pe(N)
cov (T ) includes interferers only up to radius RN , and models the tail using
LN (s) := exp −2πλ
Z RN
RK
st−η
1 + st−η t dt
!
. (6)
The difference between the true and truncated tail Laplace terms is
|LN (s) − L∞(s)|
= LN (s) 1 − exp −2πλ
Z∞
RN
st−η
1 + st−η t dt .
Define this residual error as
δN (s, RN ) := 1 − exp −2πλ
Z∞
RN
st−η
1 + st−η t dt .
The total error in coverage probability is bounded by the expected residual tail error, weighted by the remaining terms:
Pe(N )
cov (T ) − PSG(T ) ≤ E
"
e−sσ2 ·
K
Y
i=2
1
1 + sR−η
i
· δN (s, RN )
#
.
Since e−sσ2 · QK
i=2
1
1+sR−η
i
≤ 1, we obtain
Pe(N )
cov (T ) − PSG(T ) ≤ Er,RN [δN (T rη, RN )] ,
which completes the proof.
A. Expectation-Aware Error Bounds for Specific Path-Loss
We consider the error bound Er,RN [δN (T rη, RN )] and specialize to the cases η = 3, 4, using upper bounds on δN and Cauchy–Schwarz.
Note that R ∞
RN
st−η
1+st−η tdt ≤ s R ∞
RN t1−η dt = s R2−η
N
η−2 . Using 1 − e−z ≤ z for z ≥ 0, δN (s, RN ) ≤ 2πλs
η−2
1 Rη−2
N
.
1. Case η = 3: Now, δN (s, RN ) ≤ 2πλs
RN = 2πλT · r3
RN . We apply Cauchy–Schwarz inequality to obtain the following: E r3
RN
≤ E[r6] 1/2 · E 1
R2
N
1/2
= O(N −1/2).
Hence, E[δN (T r3, RN )] = O(N −1/2) for η = 3. 2. Case η = 4: Using a similar argument, it is easily seen that E[δN (T r4, RN )] = O(N −1) for η = 4.
V. NUMERICAL EXPERIMENTS
We numerically evaluate the SINR coverage probability under the proposed hybrid approximation, comparing it with Monte Carlo simulation, the SG benchmark, and the probabilistic modeling-based method of [15].
A. Simulation Setup
We consider a downlink cellular network as in our system model description with λ = 1. A Monte Carlo simulation with 5 × 104 realizations of PPP-based interferer positions is used. The path-loss exponent is fixed at η = 2, 3, 4 and the additive noise power is σ2 = 0.1. In addition, to illustrate the applicability of our hybrid approximation in the fractional case, we consider η = 3.4142. The SINR threshold T is varied from −20 dB to 20 dB in 2 dB increments. For each SINR
threshold T , we evaluate the coverage probability P (N)
cov (T ), under the following four models:
1) Hybrid Approximation (Proposed): For a fixed number N of nearest interferers, we use K = 4 and the Laplace tail integral is evaluated numerically using MATLAB’s adaptive quadrature routine integral() with absolute tolerance 10−6. 2) Simulation: The coverage is estimated as the empirical fraction of trials for which SINR exceeds T . 3) SG Benchmark: This benchmark computes the standard infinite-user coverage probability using the expression (cf. (5)): PSG(T )
=
Z∞
0
e−sσ2 exp −2πλ
Z∞
r
s
xη + s xdx 2πλre−πλr2 dr,
evaluated using adaptive numerical quadrature when η > 2.
4) Probabilistic Modeling: We also compare against a probabilistic approximation method in [15], which offers an analytical alternative based on moment-generating functions and Gaussian approximation of the interference. Specifically, the approximation for η = 4 is equal to 1
s
1+2 T σ2
U
σ02
exp − T μ2
U σ2
0 +2T σ2
U ) , where μU =

4
(μ2
S ̃ − σ2
S ̃/2) 1
4 and σ2
U = μS ̃ −
q
μ2
S ̃ − σ2
S ̃/2 with
μS ̃ = μS + 2σ2
(πλ)2 , σ2
S ̃ = σ2
S + 20σ4
(πλ)4 + 2σ2β − 4σ2μS
(πλ)2 , and
is valid only when μS ̃ ≥ σS ̃/√2. Here, β = PN
i=2 αi
and αi =

  
  
1
(πλ)2 (67 − 96 ln(2)), i = 2,
1 (πλ)2
4!
Γ(i) Γ(i − 2) − P4
k=0
Γ(i+k−2)
k!2i+k−2 +
Γ(i+4)
Γ(i) 1 − ln(2) − Pi+1
k=0
k!
(k+2)!2k+1 , i ≥ 3.
Moreover, the constants μs and σs2 can be computed (based on the number of interferers considered) using expressions provided in [15].
The simulation domain is a square region of side 2L = 80 km. Note that L is sufficiently large and hence edge effects can be neglected. The total number of interferers N considered is varied among {5, 10, 20}.
η=2 η=3 η=4
(a) N = 5
(b) N = 10
(c) N = 20
Fig. 1: Coverage probability vs. SINR threshold T (dB) for path-loss exponents η = 2, 3, 4 (left to right), with σ2 = 0.1 and N ∈ {5, 10, 20}.
B. Results and Discussion
Figure 1 shows the SINR coverage probability versus threshold T , for η = 2, 3, 4, respectively, under the four methods described above (SG when η > 2). Each subfigure corresponds to a different interferer count N ∈ {5, 10, 20}. The hybrid approximation demonstrates excellent agreement with the simulation results across the full SINR range, with better matching than probabilistic modeling when η = 2 for higher thresholds T . For small values of N , minor deviations are observed near the crossover -
point where networks transition from noise-limited to interference-limited regimes.
However, as N increases, the approximation closely matches both simulation and SG benchmark curves. This convergence behavior corroborates the theoretical error bounds derived in Section IV, which indicate faster decay for larger N and higher path-loss exponents. The path-loss exponent η significantly influences the rate of convergence. For η = 4, the hybrid approximation aligns closely with the SG benchmark even for moderate N , consistent with the O(N −1) convergence rate. In contrast, for η = 3-
, convergence is slightly slower but still effective, in line with the O(N −1/2) rate. This behavior reflects the increasing influence of distant interferers as pathloss attenuation becomes less severe. Further, from Figure 2 (a), we find that our method still closely approximates the SG and, especially, the simulation benchmarks even with fractional η = 3.4142 and N = 10. When compared to the other methods, the proposed dominant-plus-tail approximation strikes a favorable balance between accuracy-
 and complexity. These desiderata also govern our choice of K. Note from Figure 2 (b) that, for η = 2, N = 5, approximation accuracy with respect to the simulation benchmark improves at higher T as K increases, albeit with higher cost. Similar conclusions are also true even with moderate N when η is relatively small because, then, the farther interferers have a considerable effect. However, for common η ≥ 2 and large N , there is little to separate different K. Overall, we recommend choosing a mod-
erate K to balance accuracy and averaging cost. In summary, the flexible hybrid approach avoids high-dimensional integrals and closed-form moment computations, instead leveraging a simple Monte Carlo treatment of dominant interferers and a Laplace approximation of the residual tail.
(a) (b)
Fig. 2: Coverage probability vs. SINR threshold T (dB) with σ2 = 0.1 for: (a) η = 3.4142, N = 10, K = 4, and (b) K = 1, 2, 3, 4 and N = 5.
VI. CONCLUSION
The proposed hybrid framework offers a unified and computationally efficient approach for SINR coverage analysis in Poisson cellular networks. By decomposing interference into a deterministic set of dominant sources and a statistically modeled residual tail, the method achieves path-loss-agnostic accuracy without symbolic moment derivations. Analytical error bounds demonstrate controlled convergence across diverse network regimes, while numerical evaluations confirm strong agreement with stochasti-
c geometry and simulation benchmarks. The approach effectively bridges the gap between purely analytical and empirical methods, providing a versatile foundation for network performance evaluation.

5
REFERENCES
[1] J. Andersen, T. Rappaport, and S. Yoshida, “Propagation measurements and models for wireless communications channels,” IEEE Communications Magazine, vol. 33, no. 1, pp. 42–49, 1995. [2] U. Pillai and L. Jiang, “Characterization of interrupted brownian noise and performance analysis of receiver mismatch,” IEEE Communications Letters, 2025. [3] T. S. Rappaport, Wireless Communications: Principles and Practice, 2nd ed. Cambridge University Press, 2024. [4] K. A. Hamdi, “On the statistics of signa-
l-to-interference plus noise ratio in wireless communications,” IEEE Transactions on Communications, vol. 57, no. 11, pp. 3199–3204, 2009. [5] J. G. Andrews, R. K. Ganti, M. Haenggi, N. Jindal, and S. Weber, “A primer on spatial modeling and analysis in wireless networks,” IEEE Communications Magazine, vol. 48, no. 11, pp. 156–163, 2010.
[6] M. Haenggi, Stochastic Geometry for Wireless Networks. Cambridge University Press, 2012. [7] Y. Hmamouche, M. Benjillali, S. Saoudi, H. Yanikomeroglu, and M. D. Renzo, “New trends in stochastic geometry for wireless networks: A tutorial and survey,” Proceedings of the IEEE, vol. 109, no. 7, pp. 12001252, 2021. [8] H. ElSawy, A. Sultan-Salem, M.-S. Alouini, and M. Z. Win, “Modeling and analysis of cellular networks using stochastic geometry: A tutorial,” Commun. Surveys Tuts., vol. 19, no. 1, p-
. 167–203, Jan. 2017. [9] H. S. Dhillon, R. K. Ganti, F. Baccelli, and J. G. Andrews, “Modeling and analysis of k-tier downlink heterogeneous cellular networks,” IEEE Journal on Selected Areas in Communications, vol. 30, no. 3, pp. 550560, 2012. [10] M. Di Renzo, A. Zappone, T. T. Lam, and M. Debbah, “Stochastic geometry modeling of cellular networks: A new definition of coverage and its application to energy efficiency optimization,” in 26th European Signal Processing Conference (EUSIPCO 2018), 2-
018, pp. 1507–1511. [11] T. S. Rappaport, R. W. Heath Jr, R. C. Daniels, and J. N. Murdock, Millimeter wave wireless communications. Pearson Education, 2015. [12] A. AlAmmouri, J. G. Andrews, and F. Baccelli, “SINR and throughput of dense cellular networks with stretched exponential path loss,” IEEE Transactions on Wireless Communications, vol. 17, no. 2, pp. 11471160, 2018. [13] S. Sun, G. R. MacCartney, M. K. Samimi, S. Nie, and T. S. Rappaport, “Millimeter wave multi-beam antenna combining for -
5G cellular link improvement in new york city,” in IEEE International Conference on Communications (ICC 2014), 2014, pp. 5468–5473.
[14] M. Haenggi, “The mean interference-to-signal ratio and its key role in cellular and amorphous networks,” IEEE Wireless Communications Letters, vol. 3, no. 6, pp. 597–600, 2014. [15] J. Farooq and U. Pillai, “A probabilistic alternative to coverage analysis in uniform random wireless networks,” Journal on Communications and Networks, 2025. To be published. [16] Y. Wang, M. Haenggi, and Z. Tan, “The meta distribution of the SIR for cellular networks with power control,” IEEE Transactions on Com-
munications, vol. 66, no. 4, pp. 1745–1757, 2018. [17] N. Deng and M. Haenggi, “The meta distribution of the SINR and rate in heterogeneous cellular networks,” in IEEE 29th Annual International Symposium on Personal, Indoor and Mobile Radio Communications (PIMRC 2018), Bologna, Italy, Sept. 2018. [18] Y. Qin, M. A. Kishk, and M.-S. Alouini, “A dominant interferer plus mean field-based approximation for sinr meta distribution in wireless networks,” IEEE Transactions on Communications, vol. 71, no. -
6, pp. 3663–3678, 2023. [19] G. Last and M. Penrose, Lectures on the Poisson Process, ser. Institute of Mathematical Statistics Textbooks. Cambridge University Press, 2017. [20] M. Haenggi, “On distances in uniformly random networks,” IEEE Transactions on Information Theory, vol. 51, no. 10, pp. 3584–3586, 2005. [21] J. G. Andrews, F. Baccelli, and R. K. Ganti, “A tractable approach to coverage and rate in cellular networks,” IEEE Transactions on Communications, vol. 59, no. 11, pp. 3122–3134, 201-
1.

---

## Processing Information

- **Processing Library:** Zotero PDFWorker
- **Processing Date:** 2026-02-10T18:16:14.339Z
- **Text Length:** 24904 characters
- **Success:** Text extraction completed
- **PDF Library Used:** Zotero PDFWorker
- **Pages Processed:** 5 of 5
