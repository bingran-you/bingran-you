# PDF Document: Sun - 2025 - Explicit Bounds on the Hausdorff Distance for Truncated mRPI Sets via Norm-Dependent Contraction Rat.pdf

**File Path:** Sun - 2025 - Explicit Bounds on the Hausdorff Distance for Truncated mRPI Sets via Norm-Dependent Contraction Rat.pdf

**Processed Date:** 2026-02-10T18:13:37.784Z

**File Size:** 761.22 KB

**Total Pages:** 6

**Extracted Pages:** 6

**PDF Library:** Zotero PDFWorker

**Attachment Item ID:** 3311

**Title:** Explicit Bounds on the Hausdorff Distance for Truncated mRPI Sets via Norm-Dependent Contraction Rates

**Collection:** Large Files > Random Papers

---

## Extracted Text Content

Explicit Bounds on the Hausdorff Distance for Truncated mRPI Sets
via Norm-Dependent Contraction Rates
Jiaxun Sun
Abstract— This paper establishes the first explicit and closedform upper bound on the Hausdorff distance between the truncated minimal robust positively invariant (mRPI) set and its infinite-horizon limit. While existing mRPI approximations guarantee asymptotic convergence through geometric or normbased arguments, none provides a computable expression that quantifies the truncation error for a given horizon. We show that the error satisfies dH (EN , E∞) ≤ rW γN /(1 − γ), where γ < 1 is the induced-
-norm contraction factor and rW depends only on the disturbance set. The bound is fully analytic, requires no iterative set computations, and directly characterizes the decay rate of the truncated Minkowski series. We further demonstrate that the choice of vector norm serves as a design parameter that accelerates convergence, enabling substantially tighter horizon selection for robust invariant-set computations and tube-based MPC. Numerical experiments validate the sharpness, scalability, and prac-
tical relevance of the proposed bound.
I. INTRODUCTION
Robust positively invariant (RPI) sets are fundamental in the analysis and design of constrained and robust Model Predictive Control (MPC) schemes [1], [2], [3]. Among them, the minimal RPI (mRPI) set plays a central role because it captures the steady-state effect of bounded disturbances on linear systems [6]. However, exact computation of the mRPI is generally intractable except in special cases, motivating the use of approximations. Classical approaches, such as the Kolmanovsky–Gilbert construc-
tion [6] and later refinements by Rakovic ́ et al. [4], [5], [12], [16], approximate the mRPI through truncated Minkowski sums, fixed-point iterations, or polytopic relaxations. These techniques guarantee convergence of the truncated sets to the true mRPI but do not provide an explicit, closed-form expression for the truncation error. Existing analyses typically rely on geometric convergence [4] or induced-norm decay conditions [12], which ensure asymptotic convergence without yielding a computabl-
e Hausdorff-distance bound for a given horizon. Alternative invariant-set approximations, including Aumann-integral and hybrid reachable-set constructions [7], [18], likewise lack explicit analytic error bounds. This absence of a closed-form truncation bound has practical implications in tube-based MPC [13], [15], where constraint tightening depends directly on outer approximations of the mRPI set. Without an explicit characterization of the truncation error, designers must either adopt overly
J. Sun is with the Department of Mechanical and Process Engineering, ETH Zu ̈rich, Switzerland. (Email:jiaxsun@ethz.ch)
conservative approximations or rely on empirical horizon tuning. To address this gap, this paper derives the first explicit and computable Hausdorff-distance upper bound between the truncated mRPI set and its infinite-horizon counterpart. The bound depends only on the disturbance size and the contraction properties of the system matrix, and admits a simple closed-form expression. We further demonstrate that the choice of vector norm directly influences the contraction factor, enabling accelerated -
convergence and tighter truncation guarantees for robust and tube MPC implementations.
II. PRELIMINARIES
We consider the discrete-time linear system
xk+1 = Axk + wk, wk ∈ W, (1)
where A ∈ Rn×n is Schur stable and W ⊂ Rn is a compact, convex disturbance set. For sets A, B, their Minkowski sum is A ⊕ B = {a + b : a ∈ A, b ∈ B}.
A. Hausdorff Distance
For compact sets A, B, the Hausdorff distance is
dH (A, B) = max sup
a∈A
bi∈nfB ∥a − b∥, sup
b∈B
inf
a∈A ∥b − a∥ .
(2)
B. Minimal RPI and Truncated Approximations
The minimal robust positively invariant (mRPI) set of the system is the infinite Minkowski sum
E∞ =
∞
M
i=0
AiW, (3)
which is compact under Schur stability. Its finite-horizon truncation is
EN =
N −1
M
i=0
AiW, (4)
and the remainder (tail) set satisfies
E∞ = EN ⊕ TN , TN :=
∞
M
i=N +1
Ai W .
C. Norm-Induced Contraction Factor
Let ∥·∥ be a vector norm with induced matrix norm ∥A∥ = γ < 1, which is always achievable for a Schur matrix [12]. Then the tail terms satisfy ∥Aiw∥ ≤ rW γi, where rW = maxw∈W ∥w∥. This geometric decay underlies the truncation bound developed in the next section.
arXiv:2511.18374v1 [cs.RO] 23 Nov 2025

III. RELATED WORK
The computation and approximation of robust positively invariant (RPI) sets has been studied extensively in the control literature. Classical approaches such as the Kolmanovsky–Gilbert method [6] compute the mRPI set via truncated Minkowski sums, while subsequent works introduced polytopic relaxations and fixed-point characterizations for invariant set approximation [4], [14]. These methods establish convergence of the truncated sequence EN toward the minimal RPI set E∞, but do not provide explici-
t bounds on the truncation error. A second line of work studies contraction-based invariance conditions and induced-norm characterizations of invariant sets. Rakovic ́ [12] developed optimization-based invariance certificates based on induced matrix norms, while related treatments in set-theoretic control [14] analyze geometric decay properties of the disturbance-propagation sequence {AiW}. Such results guarantee geometric convergence but again do not yield a closed-form, computable expression for-
 the approximation error dH (EN , E∞). More recent works have explored alternative representations of invariant sets, including Aumann-integral–based approximations [7] and finite-time reachable-set aggregations [8]. Although these approaches broaden the class of tractable invariant set constructions, they likewise lack explicit analytic bounds on the Hausdorff distance between truncated and infinite-horizon sets. The accuracy of mRPI approximations is of particular importance for tube-based MPC, -
where constraint tightening depends explicitly on outer approximations of the error dynamics [13], [2]. In the absence of quantitative truncation guarantees, existing MPC implementations typically rely on heuristic choices of N or conservative invariant-set overapproximations. To the best of our knowledge, no prior work provides an explicit, closed-form formula for the Hausdorff distance between the truncated mRPI set and its infinite-horizon counterpart. This paper addresses this gap by deriving -
the first such bound, expressed analytically in terms of the disturbance radius and the induced contraction factor of the system matrix. The result enables principled selection of truncation horizons and offers a direct tool for reducing conservatism in tube-based MPC.
IV. MAIN RESULTS
This section presents the main theoretical contribution of the paper: the first closed-form, computable Hausdorffdistance upper bound between the truncated mRPI set
EN = LN−1
i=0 AiW and the infinite-horizon mRPI set
E∞ = L∞
i=0 AiW. Classical works such as [6], [4], [14] establish convergence EN → E∞ using geometric or fixedpoint arguments, but do not provide an explicit closed-form expression for the truncation error. Here we derive such a formula and further connect it with induced-norm contraction and support-function representations.
A. Explicit Hausdorff-Distance Bound
The truncated and infinite-horizon mRPI sets satisfy the exact decomposition
E∞ = EN ⊕ TN , TN =
∞
M
i=N
AiW, (5)
a standard property of invariant Minkowski series [6], [14]. Let ∥ · ∥ be a vector norm with induced matrix norm ∥A∥ = γ < 1, whose existence is guaranteed for Schur-stable A by norm-design arguments [12], [14]. Define the disturbance radius
rW := max
w∈W ∥w∥.
Theorem 1: For all N ∈ N, the Hausdorff distance between the truncated mRPI set EN and the minimal RPI set E∞ satisfies
dH (EN , E∞) ≤ rW γN
1 − γ . (6)
Proof: Because EN ⊆ E∞, the first one-sided Hausdorff term is zero. Using (5), every y ∈ E∞ can be written as y = x + t with x ∈ EN and t ∈ TN , giving
dH (EN , E∞) = sup
y∈E∞
inf
x∈EN
∥y − x∥ ≤ rad(TN ).
Introduce the partial sums T K
N = LK
i=N AiW. Monotonicity and compactness of Minkowski sums [14] imply
TN =
[
K>N
TK
N , rad(TN ) = lim
K→∞ rad(T K
N ).
Using subadditivity of the radius [1], [14],
rad(T K
N)≤
K
X
i=N
rad(AiW) ≤
K
X
i=N
rW γi,
and taking K → ∞ gives
rad(TN ) ≤ rW
∞
X
i=N
γi = rW γN
1−γ .
Substituting into the previous inequality proves (6).
B. Remark:Operator-Theoretic Interpretation
The bound in Theorem 1 admits a useful interpretation from the perspective of contraction mappings on the space of compact convex sets equipped with the Hausdorff metric. Define the affine set-operator
T (S) := AS ⊕ W.
Under any induced norm with ∥A∥ = γ < 1, the operator T is a γ-contraction:
dH (T (S1), T (S2)) ≤ γ dH (S1, S2),
a classical consequence of linearity and the Lipschitz continuity of the Minkowski sum [1], [14]. Hence the infinitehorizon mRPI set E∞ is the unique fixed point of T , while the truncated set EN is the N -fold Picard iterate of T applied to the origin.

In this view, the tail set TN represents the residual of the geometric series of the resolvent of T , and the explicit bound rW γN /(1 − γ) follows directly from the summation formula for contracting iterates. This interpretation clarifies why the bound is universal across all contractive systems and highlights the connection between mRPI truncation and fixed-point theory in metric spaces.
C. Corollary: Minimal Truncation Index
The explicit bound in Theorem 1 yields a direct formula for the minimal horizon guaranteeing a desired approximation accuracy.
Theorem 2 (Minimal truncation index): For any ε > 0, the condition
dH (EN , E∞) ≤ ε
is guaranteed if
N ≥ ln(ε(1 − γ)/rW )
ln(γ) . (7)
Thus the minimal admissible index is
Nmin(ε) = ln(ε(1 − γ)/rW )
ln(γ) . (8) D. Norm-Induced Optimization of the Convergence Rate
Because the contraction factor γ = ∥A∥ depends on the induced norm, different norms lead to different decay rates in (6). Classical norm-shaping techniques [12] guarantee that for any stable A, one may construct a norm (via diagonal scaling or Lyapunov shaping) such that
ρ(A) ≤ ∥A∥ < 1,
and the value ∥A∥ can be made arbitrarily close to the spectral radius. Since Nmin(ε) in (8) depends logarithmically on γ, minimizing ∥A∥ yields significantly smaller truncation horizons and tighter tube sizes in robust MPC implementations [2], [13].
E. Remark: Support-Function Interpretation
The Hausdorff distance admits the equivalent representation
dH (EN , E∞) = sup
∥u∥∗ =1
hEN (u) − hE∞ (u) ,
where hS denotes the support function of a convex set and ∥ · ∥∗ is the dual norm [7], [8]. Since
hE∞ (u)−hEN (u) =
∞
X
i=N
hAiW (u), hAiW (u) = hW (Ai⊤u),
the tail error is controlled by
|hW (Ai⊤u)| ≤ rW ∥Ai⊤u∥∗ ≤ rW γi,
recovering the same geometric sum as in Theorem 1. This interpretation highlights that the bound arises from contraction of support-function directions, providing additional intuition for why norm design directly influences the truncation accuracy.
F. Remark:Generalization Potential
Although the explicit bound in Theorem 1 is derived for linear time-invariant systems with additive disturbances, the same structure extends naturally to a broader family of contraction systems. In particular, the result carries over to: • Linear parameter-varying (LPV) or polytopic systems, where A(θ) belongs to a compact convex family and admits a common induced-norm contraction [12], [14]; • Switched linear systems with a joint spectral radius ρ < 1, for which the same geometric tail bound foll-
ows from submultiplicativity of induced norms;
• Nonlinear contraction systems of the form xk+1 = f (xk) + wk, where f is a contraction mapping in a suitably chosen norm and the disturbance set enters additively. In all such cases, the mRPI construction remains a fixed point of a contractive set-operator and the tail bound retains the same geometric form, with γ replaced by the corresponding contraction modulus. Thus, the explicit bound is not restricted to the LTI setting but reflects a more general contraction-based mechanism underlying robu-
st invariance.
V. PRACTICAL GUIDELINES FOR USING THE
TRUNCATION BOUND IN TUBE MPC
This section provides practical recommendations for selecting the truncation index, choosing induced norms, and incorporating the proposed Hausdorff bound into tube-based MPC implementations. These guidelines translate the theoretical results of Section IV into actionable design procedures.
A. Selecting the Truncation Index N
Given the bound of Theorem 1,
dH (EN , E∞) ≤ rW γN
1−γ ,
a designer may select N according to the following steps: 1) Compute the contraction factor γ = ∥A∥ under a chosen induced norm. 2) Compute rW = maxw∈W ∥w∥. 3) Specify a desired approximation accuracy ε > 0. 4) Use Corollary IV-C to compute the minimal index:
Nmin(ε) = ln(ε(1 − γ)/rW )
ln(γ) .
5) For MPC applications, select
N = Nmin + 1,
providing an additional robustness margin. This provides a fully explicit and computationally inexpensive rule for selecting N without resorting to empirical tuning.
B. Choosing an Induced Norm
The contraction factor γ = ∥A∥ depends on the chosen vector norm and thus offers a tuning mechanism for improving truncation performance. Several practical choices are effective:

1) Euclidean norm.: The simplest choice, ∥A∥2, provides a reasonable baseline. 2) Diagonal scaling.: Choosing a weighted norm ∥x∥P =
√
x⊤P x with a diagonal P = diag(pi) often reduces γ significantly at negligible cost. Such norms are widely used in set-theoretic MPC [14].
3) Lyapunov norm.: If P ≻ 0 solves A⊤P A − P ≺ 0, then ∥x∥P yields a contraction ∥A∥P < 1 guaranteed by construction. This choice minimizes γ over all quadratic norms and is standard in invariant-set theory [6], [14]. A smaller γ reduces both the asymptotic decay rate and the required truncation index Nmin(ε), and leads to smaller tube sizes in MPC.
C. Implementing the Bound in Tube MPC
The explicit Hausdorff bound enables a certified construction of the tube cross-section for robust MPC: 1) Compute the truncated set
EN =
N −1
M
i=0
Ai
cl W .
2) Compute the remainder bound
TN ⊆ B rW γN 1−γ
,
using Theorem 1. 3) Form the tube-invariant error set
Z = EN ⊕ B rW γN
1−γ
.
4) Tighten constraints as in standard tube MPC:
xk ∈ X ⊖ Z, uk ∈ U ⊖ KZ.
5) Solve the nominal MPC problem using these tightened sets. Unlike classical invariant ellipsoid methods [2], [13], [21], [22], this procedure computes a certified and typically less conservative tube with almost no additional computational overhead.
D. When the Bound Is Most Effective
The proposed bound is particularly advantageous in the following settings:
• Moderate or high-dimensional systems (n ≥ 6), where direct computation of exact mRPI sets is impractical. • Box or polytopic disturbances, for which rW is easily computed. • Real-time MPC, since both the bound and the truncated sets require negligible computation.
• Systems with strong anisotropy, where diagonal or Lyapunov norms significantly reduce γ. These guidelines demonstrate that the proposed bound is not only theoretically tight but also readily deployable in practical robust-control workflows.
VI. NUMERICAL EXAMPLES
This section evaluates the proposed truncation bound on increasingly challenging systems and illustrates its impact on tube model predictive control.
Fig. 1. Six-dimensional example: numerical Hausdorff error and explicit bound. Both exhibit geometric decay with nearly identical slope.
A. Experiment 1: Six-Dimensional mRPI Approximation
We first consider a randomly generated six-dimensional Schur-stable system with disturbance set W = [−0.1, 0.1]6. The numerical Hausdorff distance dnum
H (EN , E∞) is approximated using 2000 sampled directions, while E∞ is computed via a long truncated sum (K∞ = 200). Figure 1 shows that the numerical error decays geometrically with a slope nearly identical to γN+1, and remains consistently below the theoretical bound rW γN+1/(1 − γ). This confirms that the bound captures both the correct rate and magnitude of the truncation error in moderate dimensions.
B. Experiment 2: Effect of Induced Norm
The bound
dH (EN , E∞) ≤ rW (P ) γN+1
P
1 − γP
depends on the induced norm via γP = ∥A∥P and rW (P ). We compare three choices of P on the same 6D system: the Euclidean norm, a moderate diagonal scaling, and an aggressive isotropic scaling. Figure 2 shows that all curves share the same geometric decay rate, while aggressive scaling significantly reduces the disturbance radius rW (P ), yielding an order-of-magnitude smaller bound for all N . This demonstrates that norm shaping provides a simple yet effective way to tighten truncationbased mRPI -
approximations.
C. Experiment 3: High-Dimensional Behavior
To assess scalability, we repeat the experiment for dimensions n = 10, 15, 20. For each system, we compute dnum
H
and the theoretical bound for N = 1, . . . , 20. As shown in Fig. 3, numerical errors decay geometrically and remain strictly below the bound across all dimensions. Higher-dimensional systems exhibit faster decay due to typically smaller spectral radii in random stable matrices. These results confirm that the proposed bound remains reliable and non-conservative even in 20-dimensional systems.

Fig. 2. Experiment 2: theoretical bound under different induced norms. Aggressive scaling tightens the bound by reducing rW (P ).
Fig. 3. Experiment 3: numerical and theoretical errors for n = 10, 15, 20. All curves show geometric decay with the theoretical bound consistently above the numerical error.
D. Experiment 4: Feasible-Set Expansion Enabled by the Truncation Bound
This experiment demonstrates a key practical implication of the proposed Hausdorff truncation bound: reduced constraint tightening and enlarged nominal feasible sets in tubebased MPC. Classical tube MPC approaches, originating from the work of Mayne et al. [13] and later formalized in surveys such as [2], [15], rely on invariant-set bounds of the form rtube = rW /(1 − γ). This expression follows from the geometric-series upper bound on the minimal RPI set, which traces back to the classical constr-
uctions of Kolmanovsky and Gilbert [6] and the contraction-based analyses of Rakovic ́ et al. [4], [5], [12], [16]. In contrast, our method replaces the worst-case invariant radius with the truncated mRPI set EN augmented by the explicit Hausdorff tail bound derived in Theorem 1. This yields a significantly smaller tightening set and, consequently, a larger admissible nominal set X ⊖ E.
Fig. 4. Experiment 4 (Part B): Tube MPC closed-loop trajectories. Real trajectories (solid) and nominal trajectories (dashed) for the baseline tube MPC [13] (green) and our method (red). Our tube, built from the truncated mRPI set plus the rigorous tail bound, is tighter yet robust, while the baseline tube is significantly more conservative.
We consider the system used in the previous experiments with the state constraint box
X = [−2, 2]2,
and disturbance set W = [−0.05, 0.05]2. Two MPC controllers are constructed:
• Baseline tube MPC: uses the classical tube radius rtube = rW /(1 − γ) [13], [2]; • Our method: uses EN together with the analytic truncation remainder bound of Theorem 1.
Figure 5 shows that the feasible set resulting from our tightening is strictly larger in every direction. This behavior is consistent with classical results on polytopic approximation of mRPI sets [4], [5], [14], where overly conservative outer bounds can shrink the feasible domain dramatically. To evaluate closed-loop robustness, we run tube MPC for both controllers under random disturbances wk ∈ W . Figure 4 shows the nominal and real trajectories, including the evolving tube cross-sections. The-
 baseline tube (green), following the classical worst-case radius, remains substantially larger and overly conservative. Our tube (red), generated using the truncated mRPI plus the analytic tail bound, stays tight while robustly containing the real trajectory at all times. These results confirm that the proposed bound directly improves tube MPC performance by (i) enlarging the nominal feasible region and (ii) reducing conservatism in tube construction, while maintaining robustness. This aligns wit-
h recent perspectives emphasizing performance-oriented tube design in robust MPC [19], [21].

Fig. 5. Experiment 4 (Part A): Enlarged nominal feasible set. Baseline tightening (green), based on the classical invariant radius rtube [13], [2], is significantly more conservative than our truncation-bound-based tightening (red). The resulting feasible set X ⊖ E is therefore much larger under our method.
VII. CONCLUSION
This paper established the first explicit and computable Hausdorff-distance bound between the truncated mRPI set and its infinite-horizon limit. The bound depends only on the disturbance radius and an induced contraction factor, yielding a closed-form expression for the minimal truncation index required to meet any accuracy specification. Numerical experiments confirmed the tightness of the bound, illustrated the strong impact of norm shaping, and demonstrated its scalability to higher-dimensional-
 systems. A tube-MPC study further showed that the resulting mRPI approximation leads to substantially smaller tubes than classical worst-case bounds.
ACKNOWLEDGMENT
A large language model (ChatGPT, OpenAI) was used only for language polishing and improving the readability of the text. The formulation of the problem, the development of the theory, and all numerical results were conceived, implemented, and verified by the authors.
APPENDIX
A. Properties of the Hausdorff Distance
For compact sets A, B, C ⊂ Rn, the Hausdorff distance
dH (A, B) = max sup
a∈A
bi∈nfB ∥a − b∥, sup
b∈B
inf
a∈A ∥b − a∥
satisfies several standard identities [1], [4], [5]:
• Translation invariance: dH (A + C, B + C) = dH (A, B).
• Monotonicity: if A ⊆ A′, then dH (A, B) ≤ dH (A′, B). • Lipschitz continuity under linear maps: for any matrix M, dH (M A, M B) ≤ ∥M ∥ dH (A, B).
• Subadditivity:
dH (A⊕C, B ⊕D) ≤ dH (A, B) + dH (C, D).
These identities are used in the proofs of Theorem 1 and Theorem 2 (Corollary 1).
B. Contraction Bound for Matrix Powers
Let ∥ · ∥P be a norm induced by a positive definite matrix P ≻ 0. If γ = ∥A∥P < 1, then by submultiplicativity,
∥Ak∥P ≤ ∥A∥k
P = γk, k ≥ 0.
REFERENCES
[1] F. Blanchini, “Set-theoretic methods in control,” Automatica, vol. 35, no. 11, pp. 1747–1767, 1999. [2] D. Q. Mayne, J. B. Rawlings, C. V. Rao, and P. O. M. Scokaert, “Constrained model predictive control: Stability and optimality,” Automatica, vol. 36, no. 6, pp. 789–814, 2000. [3] E. F. Camacho and C. Bordons, Model Predictive Control. Springer, 2004. [4] S. V. Rakovi ́c, E. C. Kerrigan, K. I. Kouramas, and D. Q. Mayne, “Invariant approximations of the minimal robust positively invariant set-
,” IEEE Trans. Autom. Control, vol. 50, no. 3, pp. 406–410, 2005. [5] S. V. Rakovic ́ and D. Q. Mayne, “Set invariance for linear discretetime systems,” in Proc. IFAC World Congr., 2007. [6] I. Kolmanovsky and E. G. Gilbert, “Theory and computation of disturbance invariant sets for discrete-time linear systems,” Math. Control Signals Syst., vol. 7, no. 1, pp. 101–120, 1994. [7] C. Silvestre and A. Teixeira, “Invariant approximations via finite-time Aumann integrals,” IEEE Control Systems Letters, -
vol. 7, pp. 1–6, 2023. [8] M. Rubagotti, S. V. Rakovic ́, C. M. Kellett, and J. H. Kwon, “Robust invariant sets and their approximations,” Annual Reviews in Control, vol. 45, pp. 166–192, 2018. [9] S. V. Rakovi ́c, “Robust control invariant sets: A survey,” IFACPapersOnLine, 2015.
[10] D. Q. Mayne, “Robust model predictive control: An overview,” in Proc. IFAC World Congr., 2006.
[11] J. M. Maciejowski, Predictive Control with Constraints. Prentice Hall, 2002. [12] S. V. Rakovic ́, “Optimization-based invariance conditions,” European Journal of Control, 2012.
[13] P. O. M. Scokaert and D. Q. Mayne, “Min-max feedback model predictive control,” IEEE Trans. Autom. Control, vol. 43, no. 8, pp. 1136–1142, 1998.
[14] F. Blanchini and S. Miani, Set-Theoretic Methods in Control. Birkh ̈auser, 2007. [15] A. Bemporad and M. Morari, “Robust model predictive control: A survey,” Robustness in Identification and Control, pp. 207–226, 1999. [16] S. V. Rakovi ́c, “Low-complexity polytopic mRPI approximations,” IFAC-PapersOnLine, 2018.
[17] A. Chmielewski and D. Q. Mayne, “On constrained control of nonlinear systems,” Automatica, vol. 28, no. 3, pp. 531–546, 1992. [18] P. Grieder and M. Morari, “Approximation of closed-loop reachable sets for hybrid systems,” Hybrid Systems: Computation and Control, 2004. [19] L. Gru ̈ne and J. Pannek, Nonlinear Model Predictive Control. Springer, 2017. [20] G. Bitsoris, “On the positive invariance of polyhedral sets for discretetime systems,” Systems & Control Letters, vol. 11, no. 3, pp. 243–2-
48, 1988. [21] D. Q. Mayne, M. M. Seron, and S. V. Rakovic ́, “Robust model predictive control of constrained linear systems with bounded disturbances,” Automatica, vol. 41, no. 2, pp. 219–224, 2005.
[22] L. Gr ̈une and J. Pannek, Nonlinear Model Predictive Control: Theory and Algorithms. Springer, 2011.

---

## Processing Information

- **Processing Library:** Zotero PDFWorker
- **Processing Date:** 2026-02-10T18:13:37.784Z
- **Text Length:** 25222 characters
- **Success:** Text extraction completed
- **PDF Library Used:** Zotero PDFWorker
- **Pages Processed:** 6 of 6
