# PDF Document: Tavakoli et al. - 2025 - Accelerated ADMM Automated Parameter Tuning and Improved Linear Convergence.pdf

**File Path:** Tavakoli et al. - 2025 - Accelerated ADMM Automated Parameter Tuning and Improved Linear Convergence.pdf

**Processed Date:** 2026-02-10T18:15:01.738Z

**File Size:** 365.94 KB

**Total Pages:** 7

**Extracted Pages:** 7

**PDF Library:** Zotero PDFWorker

**Attachment Item ID:** 3335

**Title:** Accelerated ADMM: Automated Parameter Tuning and Improved Linear Convergence

**Collection:** Large Files > Random Papers

---

## Extracted Text Content

Accelerated ADMM: Automated Parameter Tuning and Improved Linear Convergence
M. Tavakoli ∗,† F. Jakob ∗∗,† G. Carnevale ∗ G. Notarstefano ∗ A. Iannelli ∗∗
∗ Universit`a di Bologna, Department of Electrical, Electronic and Information Engineering, Bologna, Italy (e-mail: meisam.tavakoli@studio.unibo.it, guido.carnevale, giuseppe.notarstefano@unibo.it). ∗∗ University of Stuttgart, Institute for Systems Theory and Automatic Control, Stuttgart, Germany (e-mail: fabian.jakob, andrea.iannelli@ist.uni-stuttgart.de). † The first two authors contributed equally to this work.
Abstract: This work studies the linear convergence of an accelerated scheme of the Alternating Direction Method of Multipliers (ADMM) for strongly convex and Lipschitz-smooth problems. We use the methodology of expressing the accelerated ADMM as a Lur’e system, i.e., an interconnection of a linear dynamical system in feedback with a slope-restricted operator, and we use Integral Quadratic Constraints to establish linear convergence. In addition, we propose several parameter tuning heuristics and t-
heir impact on the convergence rate through numerical analyses. Our new bounds show significantly improved linear convergence rates compared to the vanilla algorithm and previous proposed accelerated variants, which is also empirically validated on a LASSO regression benchmark.
Keywords: ADMM, First-order optimization, Lur’e systems, Integral Quadratic Constraints
1. INTRODUCTION
The Alternating Direction Method of Multipliers (ADMM) (Glowinski and Marroco, 1975; Boyd et al., 2011) has emerged as a benchmark algorithm among first-order methods for solving convex composite optimization problems. Its ability to decompose the original problem into subproblems that can be solved in parallel made it especially popular in computation-heavy domains as signal processing, machine learning or distributed control.
It is long established that ADMM enjoys provable convergence guarantees in the convex setting. In particular, Deng and Yin (2016) showed that for general convex problems ADMM achieves O(1/k) convergence rate, while for the strongly convex and smooth case it attains a linear convergence rate. An alternative proof of linear convergence was provided by Nishihara et al. (2015), who applied the Integral Quadratic Constraints (IQC) framework (Megretski and Rantzer, 1997; Lessard et al., 2016; Michalowsk-
y et al., 2021) to numerically derive convergence rates and heuristics for parameter tuning. The proof frames the optimization algorithm as a Lur’e system (a feedback interconnection of an LTI system and monotone operators), and casts the convergence analysis as a stability problem. This framework offers the main advantage that also the analysis of altered schemes, such as over-relaxed variants,
1 F. Jakob acknowledges the support of the International Max Planck Research School for Intelligent Systems (IMPRS-IS).
can be seamlessly carried out in an automated fashion as long as they can be framed in the Lur’e setting.
Also accelerated variants of ADMM (A-ADMM) have been proposed and analyzed in recent years. Goldstein et al. (2014) showed that Nesterov acceleration leads to a convergence rate of O(1/k2) in the strongly convex settings. Wang et al. (2021) provided linear convergence guarantees when Anderson acceleration is applied. Patrinos et al. (2014); Pejcic and Jones (2016) proved linear convergence of accelerated Douglas–Rachford splitting and ADMM for strongly convex quadratic problems, showing that the o-
ptimal rate matches that of Nesterov’s fast gradient method. However, an analysis of the convergence rates of A-ADMM for general strongly convex and smooth problems is still unaddressed, as well as the question of whether other known rates from classical accelerated gradient methods can be matched.
In this work, we extend the IQC-based analysis of vanilla ADMM (Nishihara et al., 2015) to the accelerated case, when one of the objectives is strongly convex and smooth. By casting the A-ADMM algorithm as a Lur’e system, we propose a semi-definite program (SDP) that provides a numerical tool to theoretically verify worstcase convergence rates of accelerated schemes. Using dynamic O’Shea-Zames-Falb (OZF) IQCs (Boczar et al., 2015), we prove that A-ADMM achieves tighter worstcase convergence bounds-
 than vanilla ADMM. Moreover, we propose a systematic parameter tuning procedure
arXiv:2511.21210v1 [math.OC] 26 Nov 2025

Table 1. Contextualization of the results. Here, ρ1 = 1 − √1κ and ρ2 =
q
1−
√2κ−1
κ with κ = L
m. NM and TM stand for Nesterov and Triple Momentum parameter selections (see Table 2).
Setting Objective f Algorithm Rate ρ Reference
min f (x) Quadr. Nesterov Method ρ1 Nesterov (2004) min f (x) S(m, L) Nesterov Method ρ2 Safavi et al. (2018) min f (x) S(m, L) Triple Momentum ρ1 Van Scoy et al. (2018) (1) Quadr. A-ADMM (NM) ρ1 Patrinos et al. (2014); Pejcic and Jones (2016) (1) S(m, L) A-ADMM (NM) Fig. 1a This work (1) S(m, L) A-ADMM (TM) Fig. 1b This work
based on this framework and demonstrate that Nesterovand Triple-Momentum-inspired parameter selections attain rates close to those of accelerated first-order methods (cf. Table 1). Finally, we identify through grid search a new A-ADMM configuration with the fastest certified convergence rate, which also exhibits the best empirical performance in our numerical experiments. Our theoretical results are validated on a LASSO regression case study, showing improved convergence speed of all our schemes c-
ompared to existing benchmark algorithms.
The remainder of the paper is organized as follows. Section 2 presents the problem setup, the ADMM formulation, and the required IQC preliminaries. Section 3 provides a Lur’e representation of the A-ADMM scheme. In Section 4, we study the convergence rates of this A-ADMM scheme under different parameter configurations. In Section 5, we provide a case study on LASSO regression. Finally, Section 6 concludes the paper.
Notation. The identity matrix of dimension p is denoted as Ip. The gradient and subdifferential of a function f are denoted by ∇f and ∂f , respectively. For 0 < m ≤ L < ∞, we let Sp(m, L) denote the class functions f : Rp → R that are m-strongly convex and have L-Lipschitz continuous gradients. The special case Sp(0, ∞) corresponds to the set of proper, closed and convex functions. For a matrix M , its condition number is defined as κM = σ ̄(M )/σ(M ), where σ ̄(M ) and σ(M ) denote the largest an-
d smallest singular values of M , respectively. A discrete-time LTI system maps the signals u 7→ y via the recursion ξk+1 = Aξk + Buk, yk = Cξk + Duk as an ξ0 dependent mapping, and
will be compactly expressed as y = Gu with G =
hA B CD
i
.
We write G ⊗ Id to define a lifted system
h A⊗Id B ⊗Id C ⊗Id D⊗Id
i
.
The series interconnection between two LTI systems G1 : u 7→ y and G2 : y 7→ w will be denoted as G1 · G2 : u 7→ w. The forward shift operator is denoted as z.
2. PRELIMINARIES
2.1 Accelerated ADMM
We consider constrained convex optimization problems of the form min
x∈Rp, z∈Rq f (x) + g(z) s.t. Ax + Bz = c, (1)
where f : Rp → R, f ∈ Sp(m, L) and g : Rq → R,
g ∈ Sq(0, ∞). The matrices A ∈ Rp×p, B ∈ Rp×q, and
c ∈ Rp define linear equality constraints coupling the variables x and z, where we particularly assume that A is invertible and that B has full column rank. Having a
strongly convex and smooth component in (1) is common in many practical applications (Deng and Yin, 2016), while restricting A to be square and invertible is slightly restrictive, but also done in Nishihara et al. (2015). We note that still many practical problem instances satisfy this structure, including consensus problems and various distributed optimization tasks (Notarstefano et al., 2019).
To address problem (1), we use the over-relaxed ADMM algorithm (Boyd et al., 2011)
xk+1 = arg mxin f (x) + 1
2ν1 ∥Ax + Bzˆk − c + λˆk∥2 (2a)
zk+1 = arg mzin g(z) + 1
2ν1 ∥αAxk+1 − (1 − α)Bzk (2b)
+ Bz − αc + λˆk∥2
λk+1 = αAxk+1 − (1 − α)Bzk + Bzk+1 − αc + λˆk (2c)
as starting point, and augment it with a momentum-term
zˆk = zk + ν2(zk − zk−1) (3a)
λˆk = λk + ν2(λk − λk−1), (3b)
as in Goldstein et al. (2014); Pejcic and Jones (2016). Here, ν1 > 0 is a step size, ν2 ≥ 0 a momentum parameter and α ≥ 0 the so-called over-relaxation parameter. We recover the nominal A-ADMM by setting α = 1, and the vanilla, non-accelerated ADMM with ν2 = 0. Both α and ν2 have been shown to improve the convergence speed for suitable choices (Eckstein and Bertsekas, 1992; Patrinos et al., 2014). The over-relaxation parameter α is chosen in the interval (0, 2], while ν2 is often selected accordi-
ng to Nesterov’s schemes (Nesterov, 2004), e.g.,
ν2 = (√L − √m)/(√L + √m) (Patrinos et al., 2014), or as an iteration dependent quantity (Goldstein et al., 2014). To explore alternative parameter selection strategies we employ the IQC framework.
2.2 Integral Quadratic Constraints for Convex Functions
Algorithm (2)-(3) will be analyzed as a dynamical system converging to points satisfying the first-order optimality conditions. We will make use of the well-known fact that (sub)gradients of (strongly) convex functions are monotone and, thus, their input/output relation satisfy IQCs for slope-restricted operators (Lessard et al., 2016). To be more precise, they have been shown to fulfill socalled ρ-hard O’Shea-Zames–Falb IQCs.
Proposition 1. (ρ-OZF IQC, Boczar et al. (2015)). Let f ∈ Sp(m, L), g ∈ Sp(0, ∞) and let ρ ∈ (0, 1) be an exponential discount factor. For nOZF ∈ N0, let {hτf }nOZF
τ=0 and
{hτg }nOZF
τ=0 be sequences of filter coefficients satisfying

h∗
τ ≤ 0 ∀τ ̸= 0,
nOZF X
τ =0
ρ−2τ h∗
τ ≥ 0, ∗ ∈ {f, g} (4)
and define the parametrized LTI filters
Ψg(hg) =

 
nOZF X
τ =0
hτg z−τ 0
01


 , Ψf (hf ) = Ψg(hf ) · L −1
−m 1 .
(5) Let {ak}, {bk} be some p-dim. square summable sequences
and let a⋆, b⋆ ∈ Rp be constant references. For γk ∈ ∂g(bk)
and γ⋆ ∈ ∂g(b⋆), define
 ̃ak = ak − a⋆, ∇f ̃k = ∇f (ak) − ∇f (a⋆),
 ̃bk = bk − b⋆, γ ̃k = γk − γ⋆. Finally, define the filtered sequences
ψ1,k = (Ψf ⊗ Ip)  ̃ak
∇f ̃k
, ψ2,k = (Ψg ⊗ Ip)  ̃bk
γ ̃k
and M = [ 01 10 ]. Then, for all T ≥ 0, it holds
T
X
k=0
ρ−2k ψ ⊤
i,k(M ⊗ Ip)ψi,k ≥ 0, i = 1, 2. (6)
The filter coefficients hf , hg will serve as degree-of-freedom in the resulting SDP, subject to the convex constraint (4). In theory, the filter dimension nOZF can be infinite, but is chosen finite in practice to yield finite-dimensional statespace realizations. A choice of nOZF = 0 leads to static filters Ψf , Ψg and pointwise satisfaction of the inequalities (6), which in literature is often referred to as sector IQC (Lessard et al., 2016).
2.3 Stability Analysis of First-Order Algorithms
Consider the following Lur’e representation of a first-order algorithm
ξk+1 = (Aˆ ⊗ Ip)ξk + (Bˆ ⊗ Ip)wk
vˆk = (Cˆ ⊗ Ip)ξk + (Dˆ ⊗ Ip)wk
(7a)
with state ξk ∈ Rnξ , output vˆk = vk + v ̄ for some constant offset v ̄, and
vk = v1,k
v2,k , wk = ∇fˆ(v1,k)
γk
, γk ∈ ∂gˆ(v2,k), (7b)
where fˆ ∈ Sp( ˆm, Lˆ), gˆ ∈ Sp(0, ∞) for some ˆm, Lˆ. It has been shown that ADMM, but also many other firstorder algorithms, can be represented as (7) (Nishihara et al., 2015) when fˆ, gˆ are suitably chosen. In general, (Aˆ, Bˆ, Cˆ, Dˆ ) fulfill structural assumptions such that its fixed-point (ξ⋆, vˆ⋆, w⋆) is unique and satisfies first-order optimality (Upadhyaya et al., 2024). Showing exponential stability of (7) is therefore the same as showing linear convergence of the underlying algorithm.-
 With a coordinate shift (ξ ̃k, v ̃k, w ̃k) ≜ (ξk − ξ⋆, vˆk − vˆ⋆, wk − w⋆) it is straightforward to show that the error coordinates evolute with the same state-space description (7a), i.e.,
v ̃ = Aˆ Bˆ
Cˆ Dˆ
| {z }
=:G
⊗Ip
!
w ̃. (8)
Note that v ̃k = vˆk − vˆ⋆ = vk − v⋆ (eliminating the constant offset), so that by Proposition 1 the gradient and
subgradient components of (v ̃, w ̃) satisfy a ρ-OZF IQC. With a suitable permutation and stacking of the filters Ψ1, Ψ2, we can form a compact filter Ψ such that
ψk ≜ ψ1,k
ψ2,k = (Ψ ⊗ Ip) v ̃k
w ̃k , (9)
with ψ1,k, ψ2,k as in Proposition 1 (with a ≜ v1, b ≜ v2). Define the augmented plant as the mapping w ̃ 7→ ψ, realized as
Ψ· G
I2 ≜ A B
C D . (10)
Then the following convergence theorem holds. Theorem 2. Take ρ ∈ (0, 1), and filters Ψ1, Ψ2 that satisfy Proposition 1 with m = ˆm, L = Lˆ. Form the augmented plant (10). If there exist P ≻ 0 and filter coefficients of Ψ1, Ψ2 such that the matrix inequality A⊤P A − ρ2P A⊤P B
B⊤P A B⊤P B + C⊤
D⊤
M0
0 M [C D] ⪯ 0
(11) holds, then (7) is exponentially stable with rate ρ, i.e.,
∥ξk − ξ⋆∥ ≤ √κP ρk∥ξ0 − ξ⋆∥. (12)
The proof comes as a straightforward extension of (Lessard et al., 2016, Theorem. 4) to the two-operator case, which particularly exploits the positivity constraint (6). Eq. (11) is independent of the problem dimension p, and can be used to determine the minimum worst-case convergence rate ρ via bisection. Note that Theorem 2 recovers (Nishihara et al., 2015, Theorem. 6) for nOZF = 0.
3. A-ADMM AS A DYNAMICAL SYSTEM
Building on the previous derivations, we now formulate the A-ADMM (2)-(3) as a Lur’e system (7). In line with Nishihara et al. (2015), we introduce the coordinate change rk = Axk, sk = Bzk. Moreover, define
fˆ = f ◦ A−1, gˆ = g ◦ B† + Iim B, (13)
where B† is a left-inverse of B and Iim B is the indicator of the image of B. It is straightforward to verify that gˆ ∈ Sp(0, ∞) and fˆ ∈ Sp( ˆm, Lˆ) with
ˆm = m
σ ̄2(A) , Lˆ = L
σ2(A) . (14)
Accordingly, we define the condition number of the problem as κ = Lˆ
mˆ = κf κ2
A.
Consequently, the updates (2a),(2b),(3a) can be rewritten as xk+1 = A−1 arg mrin
fˆ(r) + 1
2ν1 ∥r + sˆk − c + λˆk∥2 (15a)
zk+1 = B† arg msin gˆ(s) + 1
2ν1 ∥αrk+1− (15b)
(1 − α)sˆk + s − αc + λˆk∥2
sˆk = sk + ν2(sk − sk−1). (15c) Using the definition of the proximal operator
proxf (z) := arg mxin f (x) + 1
2 ∥x − z∥2,
we can summarize the A-ADMM in transformed coordinates compactly as
rk+1 = proxν1fˆ c − sˆk − λˆk (16a)
sk+1 = proxν1gˆ αc − αrk+1 − (α − 1)sˆk − λˆk (16b)
λk+1 = αrk+1 + (α − 1)sˆk + sk+1 − αc + λˆk, (16c)

with sˆk, λˆk as in (15c), (3b). Next, we bring the recursion (16) into the form (7).
Proposition 3. Define the state ξk ≜ λ⊤
k−1 s⊤
k−1 λ⊤
k s⊤
k
⊤,
output vk ≜ r⊤
k+1 s⊤
k+1
⊤, offset v ̄ ≜ −c⊤ 0 ⊤, and input
wk ≜ ∇fˆ(rk+1)⊤ γ⊤
k
⊤ for any γk ∈ ∂gˆ(sk+1). Then the sequences ξk, wk, and vˆk = vk + v ̄ satisfy (7) with the matrices
Aˆ =

 
00 1 0 00 0 1 00 0 0 −ν2(α − 1) −ν2 (α − 1)(1 + ν2) 1 + ν2


,
Cˆ = ν2 ν2 −(1 + ν2) −(1 + ν2)
−ν2(α − 1) −ν2 (α − 1)(1 + ν2) 1 + ν2 ,
Bˆ =

 
00 00 0 −ν1 αν1 −ν1


 , Dˆ = −ν1 0
αν1 −ν1 .
(17)
Proof. Apply the first-order optimality condition to the rk+1 and sk+1 updates (16a)-(16b)
0 = ν1∇fˆ(rk+1) + rk+1 − c + sˆk + λˆk, (18a)
0 ∈ ν1∂gˆ(sk+1) + sk+1 − αc + αrk+1 + (α − 1)sˆk + λˆk. (18b)
Take some γk ∈ ∂g(sk+1), solve for rk+1 and sk+1, and plug it into the dual update λk+1, to get
rk+1 = −sˆk − λˆk + c − ν1∇fˆ(rk+1), (19a)
sk+1 = sˆk + (α − 1)λˆk + αν1∇fˆ(rk+1) − ν1γk, (19b) λk+1 = −ν1γk. (19c)
Now plug in the definitions of sˆk, λˆk and observe that sk+1, λk+1 and rk+1 − c can all be written as linear combinations of the state ξk and input wk. It is then straightforward to bring ξk+1 and vˆk into the matrix form (7). 2
Remark 4. In contrast to Nishihara et al. (2015), we deliberately retain the ADMM step-size ν1 in the state-space description, instead of putting it in the sector bounds. The momentum parameter ν2 becomes an additional degree-offreedom.
4. PARAMETER SELECTION AND ADDITIONAL MODIFICATIONS
In unconstrained first-order methods, accelerated algorithms are parametrized by a step-size, a dampingparameter, and an extrapolation-parameter, where each quantity has provable optimal tunings (Van Scoy et al., 2018). For ADMM in contrast, convergence proofs and parameter selection of ν1, ν2, α have been traditionally difficult. In this section we explore different parameter selection heuristics and show the influence on the convergence rates ρ that are obtained from Theorem 2. As initial heuris-
tics, we adopt the same parameter tuning schemes of accelerated gradient methods. Next, we perform a gridsearch to identify potentially superior configurations.
Table 2. Parameter selection for A-ADMM as
a function of ˆm, Lˆ, with ρ := 1 − 1/√κ.
Method ν1 ν2
NM 1
Lˆ
√Lˆ−√ ˆm
√Lˆ+√ ˆm TM 1+ρ
Lˆ
ρ2 2−ρ
4.1 Nesterov and Triple Momentum Parameters
As heuristics, we use here the step-size and damping parametrization of the Nesterov method (NM) (Nesterov, 2004) and the Triple Momentum algorithm (TM) (Van Scoy et al., 2018), which is known to attain the fastest possible convergence rate for accelerated gradient methods. The parameter selections are summarized in Table 2. We plot the resulting ρ obtained by Theorem 2 as a function of the condition number κ = Lˆ/ ˆm. We increase the O’Shea-Zames-Falb order until ρ does not improve anymore, givin-
g nOZF = 6 in all experiments 2 . Fig. 1 summarizes the results for both settings, in comparison to the rates obtained from vanilla ADMM. We note that the rates of vanilla ADMM have been shown to be tight (Nishihara et al., 2015), while the curves are upper bounds.
For the NM parameter set, observe in Fig. 1a that the convergence rates substantially outperform vanilla ADMM, certifying better linear convergence across all condition numbers. Moreover, we observe that the rates asymptotically approach the optimal rate of Nesterov’s accelerated
method, given by ρ =
q
1−
√2κ−1
κ (Safavi et al., 2018). For the TM parameter set, observe in Fig. 1b that the convergence rates outperform vanilla ADMM in low condition regions, but from κ ≈ 18 onwards, the rates degrade and eventually become infeasible. Thus, no statement about the convergence for higher condition ratios can be done. We now propose a modification to the ADMM update to alleviate this issue.
4.2 λ-Damping
Observe in (19c) that, unlike the sk-dynamics, the λk dynamics depends solely on the subdifferential of gˆ and is therefore undamped. We propose to introduce an additional damping of the dual variable λk as
λk+1 = dλk − dν1γk,
with some damping parameter d ∈ (0, 1). From the point of view of the original algorithm iterations we can interpret this modifications by replacing the dual update in (2) with
λk+1 = d(αAxk+1 − (1 − α)Bzk + Bzk+1 − αc + λˆk + λk). (20) The state-space representation of Proposition 3 is modified accordingly, with the only change occurring in the Aˆ and Bˆ matrix. We note that the fixed-point of the λ-damped scheme still satisfies the optimality conditions of (1), as the damping vanishes at optimality.
The results of A-ADMM with TM parameters and additional λ-damping with d = 0.1 are shown in Fig. 1b. We observe that convergence can now be guaranteed for all
2 Code for all experiments can be found on https://github.com/coltasas/2025-accelerated-admm

100 101 102 103
0.6
0.8
1
κ
ρ
ADMM A-ADMM Opt. ρ of NM method.
(a) Using NM parameters.
100 101 102 103
0.6
0.8
1
κ
ρ
ADMM A-ADMM A-ADMM (λ-damped) Opt. ρ of TM method.
(b) Using TM parameters.
Fig. 1. Comparison of optimal ρ values for NM and TM parameterizations.
condition ratios, and as well that the rates are better than for vanilla ADMM. Moreover, we observe analogous to the NM case that the convergence rate curve approaches the optimal rate of Triple Momentum, given by ρ = 1 − √1κ .
This suggests that the additional damping of the dual variable extends the range of provable convergence for TM A-ADMM.
4.3 Grid Search Results
In addition to the already promising TM and NM parameter selections, we perform a grid search to identify potentially improved configurations of (ν1, ν2). Our search is set up as a 20 × 20 grid centered around the TM parameters. As commonly done in strongly-convex and smooth optimization problems, we parametrize the parameters as a function of the condition ratio κ. For each κ we select (ν1, ν2) as the pair for which the minimal ρ can be obtained with Theorem 2 via bisection. The procedure is repe-
ated for the over-relaxed A-ADMM (OR-A-ADMM), with an additional grid over the relaxation parameter α in the range (0, 4]. Note that even though the standard theory would prevent from exploring the range (2, 4), we can still perform this interval extension and check for linear convergence by the feasibility of (11). Fig. 2 shows the grid search results for ν1 and ν2. We found that the stepsize parameter ν1 found via grid search exactly coincides with the TM value. In contrast, the step-size parame-
ter ν2 exhibits a different behavior. The same holds for the over-relaxed case. Applying symbolic regression (Cranmer, 2023) reveals that ν2 can be approximated by
ν2 ≈ κ + 0.08
κ + 49.9
1 4
− 0.2 (21)
ν OR
2 ≈ 0.66
κ + 11.97 κ + 0.06, (22)
100 101 102 103
0
0.5
1
κ
ν1
GS ν1 TM ν1
(a) Results for ν1.
100 101 102 103
0
κ
ν2
GS ν2 GS ν2 (OR) TM ν2
(b) Results for ν2.
Fig. 2. Results of the grid search for (ν1, ν2) vs. TM parameters from Table 2.
100 101 102 103
0
0.5
1
κ
ρ
ADMM A-ADMM (NM) A-ADMM (TM, λ-damped) A-ADMM (GS)
Fig. 3. Comparison of optimal ρ values for ADMM and A-ADMM with different parameter configurations.
100 101 102 103
0.2
0.4
0.6
0.8
1
κ
ρ
ADMM OR-ADMM A-ADMM (GS) OR-A-ADMM (GS)
Fig. 4. Comparison of optimal ρ values nominal and overrelaxed ADMM versions.
for the nominal and over-relaxed settings, respectively. The over-relaxation parameter α was found to be optimal for α ≈ 1.45 across all condition numbers.
Fig. 3 summarizes the convergence rates obtained from the grid search (GS) parameters, in comparison to the vanilla ADMM method and the accelerated versions with NM and TM parameters. By design, the A-ADMM with GS-parameters gives the best linear convergence rate of A-ADMM among all settings. Fig. 4 complements the results with the over-relaxed variants. We observe that the over-relaxed variants constantly outperform the non-overrelaxed ones; and that the accelerated variants constantly outperform-
 the non-accelerated variants. Moreover, AADMM also outperforms the vanilla over-relaxed ADMM.

0 20 40 60 80
10−6
10−4
10−2
100
Iteration
∆k
ADMM OR-ADMM A-ADMM (TM, λ-damped) A-ADMM (TM) FISTA A-ADMM (GS) OR-A-ADMM (GS)
Fig. 5. Empirical performance of different A-ADMM schemes and other benchmark algorithms applied to LASSO regression.
5. CASE STUDY
We test the A-ADMM schemes designed based on the theoretical analyses in the previous section on the l1regularized least-squares problem, also known as LASSO Regression, and compare them with available algorithms (Boyd et al., 2011). We use the benchmark problem
mx,izn
1
2 ∥F x − b∥2
2 + τ ∥z∥1
s.t. x = z, (23)
where F ∈ R250×100 is chosen as a tall and full column rank matrix with entries that are sampled i.i.d. from an isotropic Gaussian distribution N (0, 1), with normalized columns. The vector b is generated as b = F w0 + ε, where w0 ∈ R100 is sparse, containing 50 non-zeros drawn from N (0, 1) and ε ∼ N (0, 10−3I250). The regularization parameter τ > 0, is set to τ = 0.01. Problem (23) fits the general problem (1), where the first term is mstrongly convex and L-smooth with m = σ2(F ⊤F ) and L = σ ̄2-
(F ⊤F ).
Applying the accelerated over-relaxed ADMM results in
xk+1 = (ν1F ⊤F + I)−1 −zˆk − λˆk + ν1F ⊤b , (24a)
zk+1 = Sτν1 −α xk+1 − (α − 1)zˆk − λˆk , (24b)
λk+1 = α xk+1 + (1 − α) zˆk + zk+1 + λˆk, (24c) zˆk = zk + ν2 (zk − zk−1), (24d)
λˆk = λk + ν2 (λk − λk−1). (24e)
with the soft-thresholding operator Sτν1 that is (elementwise) defined as
Sτν1 (y) i = sign(yi) max |yi| − τ ν1, 0 . (25)
The convergence is assessed through the normalized iterate error ∆k := ∥xk − x⋆∥2
∥x0 − x⋆∥2
, (26)
where x⋆ is the solution of (23).
In particular, we study the convergence speed of AADMM and OR-A-ADMM, both with TM and GS parameters, against the widely used LASSO benchmark solver FISTA (Beck and Teboulle, 2009) as well as ADMM and OR-ADMM.
As shown in Figure 5, the A-ADMM methods with proposed tunings consistently achieve faster convergence compared to both the vanilla ADMM and existing accelerated algorithms from the literature. Within our family of methods, the OR-variant provides a clear advantage as it always outperforms the nominal counterparts. The grid search parameter set yields the best result. We also observe that the TM version with and without λ-damping show almost identical empirical performance. Notably, the ordering o-
f algorithms evaluated on the empirical performance and evaluated on the worst-case convergence rates stays the same, suggesting that the worst-case convergence rate is a suitable metric for algorithm comparison.
6. CONCLUSIONS
This paper used the IQC-based algorithm analysis framework to show linear convergence rates of different accelerated ADMM variants. We proposed different parameter tunings and show that all variants outperform vanilla ADMM. The fastest version both in terms of certified convergence rate and empirical performance was found using a grid search over the parameter space, giving the fastest version of A-ADMM in the strongly-convex-smooth setting to date. We moreover showed the close connection between -
A-ADMM parameters and accelerated gradient methods from unconstrained optimization. Future works could focus on theoretic derivations of the optimal AADMM parameters with tools from systems theory, and the development of a systematic and robust A-ADMM synthesis procedure.
REFERENCES
Beck, A. and Teboulle, M. (2009). A fast iterative shrinkage-thresholding algorithm for linear inverse problems. SIAM Journal on Imaging Sciences.
Boczar, R., Lessard, L., and Recht, B. (2015). Exponential convergence bounds using integral quadratic constraints. In 2015 54th IEEE Conference on Decision and Control (CDC).
Boyd, S., Parikh, N., Chu, E., Peleato, B., and Eckstein, J. (2011). Distributed optimization and statistical learning via the alternating direction method of multipliers. Foundations and Trends in Machine Learning.
Cranmer, M. (2023). Interpretable machine learning for science with PySR and SymbolicRegression.jl. arXiv:2305.01582. Deng, W. and Yin, W. (2016). On the global and linear convergence of the generalized alternating direction method of multipliers. Journal of Scientific Computing. Eckstein, J. and Bertsekas, D.P. (1992). On the Douglas—Rachford splitting method and the proximal point algorithm for maximal monotone operators. Mathematical Programming.
Glowinski, R. and Marroco, A. (1975). Sur l’approximation, par  ́el ́ements finis d’ordre un, et la r ́esolution, par p ́enalisation-dualite ́ d’une classe de probl`emes de dirichlet non lin ́eaires. ESAIM: Mathematical Modelling and Numerical AnalysisMod ́elisation Mathe ́matique et Analyse Num ́erique.
Goldstein, T., O’Donoghue, B., Setzer, S., and Baraniuk, R. (2014). Fast alternating direction optimization methods. SIAM Journal on Imaging Sciences.

Lessard, L., Recht, B., and Packard, A. (2016). Analysis and design of optimization algorithms via integral quadratic constraints. SIAM Journal on Optimization. Megretski, A. and Rantzer, A. (1997). System analysis via integral quadratic constraints. IEEE Transactions on Automatic Control.
Michalowsky, S., Scherer, C., and Ebenbauer, C. (2021). Robust and structure exploiting optimisation algorithms: an integral quadratic constraint approach. International Journal of Control, 94(11), 2956–2979. Nesterov, Y. (2004). Introductory lectures on convex optimization. Springer Science & Business Media. Nishihara, R., Lessard, L., Recht, B., Packard, A., and Jordan, M. (2015). A general analysis of the convergence of ADMM. In Proceedings of the 32nd International Conference on Machine Learni-
ng.
Notarstefano, G., Notarnicola, I., and Camisa, A. (2019). Distributed optimization for smart cyber-physical networks. Foundations and Trends in Systems and Control. Patrinos, P., Stella, L., and Bemporad, A. (2014). DouglasRachford splitting: Complexity estimates and accelerated variants. In 53rd IEEE Conference on Decision and Control.
Pejcic, I. and Jones, C.N. (2016). Accelerated ADMM based on accelerated Douglas-Rachford splitting. Proc. European Control Conference (ECC).
Safavi, S., Joshi, B., Franc ̧a, G., and Bento, J. (2018). An explicit convergence rate for Nesterov’s method from SDP. In 2018 IEEE International Symposium on Information Theory (ISIT), 1560–1564. IEEE.
Upadhyaya, M., Banert, S., Taylor, A.B., and Giselsson, P. (2024). Automated tight Lyapunov analysis for firstorder methods. Mathematical Programming.
Van Scoy, B., Freeman, R.A., and Lynch, K.M. (2018). The fastest known globally convergent first-order method for minimizing strongly convex functions. IEEE Control Systems Letters.
Wang, D., He, Y., and Sterck, H.D. (2021). On the asymptotic linear convergence speed of Anderson acceleration applied to ADMM. Journal of Scientific Computing.

---

## Processing Information

- **Processing Library:** Zotero PDFWorker
- **Processing Date:** 2026-02-10T18:15:01.738Z
- **Text Length:** 28796 characters
- **Success:** Text extraction completed
- **PDF Library Used:** Zotero PDFWorker
- **Pages Processed:** 7 of 7
