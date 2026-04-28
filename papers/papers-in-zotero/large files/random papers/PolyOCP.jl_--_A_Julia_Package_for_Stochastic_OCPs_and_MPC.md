# PDF Document: Ou et al. - 2025 - PolyOCP.jl -- A Julia Package for Stochastic OCPs and MPC.pdf

**File Path:** Ou et al. - 2025 - PolyOCP.jl -- A Julia Package for Stochastic OCPs and MPC.pdf

**Processed Date:** 2026-02-10T18:14:11.863Z

**File Size:** 454.21 KB

**Total Pages:** 8

**Extracted Pages:** 8

**PDF Library:** Zotero PDFWorker

**Attachment Item ID:** 3274

**Title:** PolyOCP.jl -- A Julia Package for Stochastic OCPs and MPC

**Collection:** Large Files > Random Papers

---

## Extracted Text Content

PolyOCP.jl – A Julia Package for Stochastic OCPs and MPC⋆
Ruchuan Ou1, Learta Januzi1, Jonas Schießl2, Michael H. Baumann2, Lars Grüne2 and Timm Faulwasser1
Abstract— The consideration of stochastic uncertainty in optimal and predictive control is a well-explored topic. Recently Polynomial Chaos Expansions (PCE) have seen a lot of considerations for problems involving stochastically uncertain system parameters and also for problems with additive stochastic i.i.d. disturbances. While there exist a number of open-source PCE toolboxes, tailored open-source codes for the solution of OCPs involving additive stochastic i.i.d. disturbances in julia are not a-
vailable. Hence, this paper introduces the toolbox PolyOCP.jl which enables to efficiently solve stochastic OCPs for a large class of disturbance distributions. We explain the main mathematical concepts between the PCE transcription of stochastic OCPs and how they are provided in the toolbox. We draw upon two examples to illustrate the functionalities of PolyOCP.jl.
I. INTRODUCTION
The consideration of stochastic uncertainty in optimal and predictive control is a well-explored topic. Landmark results range from Witsenhausen’s counterexample, which shows that in non-Gaussian time-varying linear-quadratic output-feedback settings the optimal policy might be nonlinear [1], through stochastic extensions of the LQR [2], [3] to recent investigations of stochastic MPC [4], [5], [6], [7], [8] and the scenario approach towards handling uncertainty [9]. Indeed, in settings with additi-
ve Gaussian uncertainty one may take the classic LQG route [10]. When it comes to non-Gaussian disturbances (of finite expectation and variance) and LTI systems, the propagation of first and second moments is structurally identical to the Gaussian setting. For a detailed comparison of different approaches to uncertainty propagation for dynamic systems, we refer to [11]. However, considering only the first two moments may cause a significant loss of distributional information, e.g., for formulation-
s with non-quadratic cost functions [12] and for chance constraints reformulations involving higher-order moments [13]. Hence, methods that can work with complete distributional information are of interest. To this end, a promising approach is to represent random variables of finite expectation and variance by the coefficients of a series expansion in the basis of the underlying L2-space
⋆The authors acknowledge funding by the Deutsche Forschungsgemeinschaft (DFG, German Research Foundation) - project number 499435839. LJ was supported by the Deutsche Forschungsgemeinschaft (DFG, German Research Foundation) - project number 527447339. 1RO, LJ, and TF are with Institute of Control Systems, Hamburg University of Technology, Germany. Email: {ruchuan.ou, learta.januzi}@tuhh.de, timm.faulwasser@ieee.org
2JS, MHB, and LG are with Mathematical Institute, University of Bayreuth, Germany. Email: {jonas.schiessl, michael.baumann@uni-bayreuth.de, lars.grune}@uni-bayreuth.de
of random variables [14]. This approach is often referred to as Polynomial Chaos Expansion (PCE); its origins can be traced back to the most cited journal paper of Norbert Wiener [15], and its first applications in systems and control date back to [16], [17], [18] and [5]. While the former papers primarily focus on parametric uncertainty of dynamic systems, the latter one appears to be the first to consider PCE for additive stochastic disturbances. We refer to [19] for a recent overview of PCE met-
hods in systems and control. Indeed there exist a number of toolboxes which facilitate PCE, see Table I, and also [19], for an overview. PoCET [20] addresses Galerkin projection for PCE and parametric uncertainty in dynamic systems. PolyChaos.jl provides a framework for efficient construction of PCE bases using quadrature rules and tensorized computation in julia. For instance, PolyChaos.jl includes an example on how to solve stochastic OCP with parametrically uncertain systems. However, the packa-
ges focus on generating the PCE of parameters and do not provide functions specifically for stochastic control. Interestingly, none of these toolboxes is explicitly conceived to handle additive disturbances acting on a dynamic system. Put differently, none of the toolboxes mentioned in Table I is tailored to simplify the solution of stochastic Optimal Control Problems (OCP) with additive uncertainty. One reason is that additive i.i.d. disturbance processes acting on dynamic systems require to expa-
nd the dimension of the PCE basis as the horizon grows, see, e.g., [21] for a PCE-based analysis of LQ optimal control. The present paper introduces the toolbox PolyOCP.jl designed to address the gap of existing numerical implementations when it comes to PCE-based solutions of stochastic OCPs [22]. To the end of simplifying the construction of the dynamics of PCE coefficients, we mainly focus on stochastic OCPs with quadratic objectives and additive stochastic uncertainty. The considered OCPs are -
subject to LTI dynamics with additive non-Gaussian or Gaussian uncertainties and chance constraints. PolyOCP.jl readily allows the inclusion of non-Gaussian models such as Beta or Gamma distributions (or certain polynomial combinations thereof). The user also has substantial freedom to combine i.i.d. and non-i.i.d. disturbance models. To this end, PolyOCP.jl interfaces PolyChaos.jl [23] for specific aspects of the PCE problem transcription and it uses JuMP.jl [24] as an optimization backend. The i-
ntended use case of PolyOCP.jl is rapid insilico prototyping of stochastic discrete-time OCPs and corresponding MPC schemes. To the best of the authors’ knowledge, PolyOCP.jl is the first julia package that provides a PCE implementation tailored to OCPs with
arXiv:2511.19084v1 [eess.SY] 24 Nov 2025

stochastic disturbance processes and to stochastic MPC. The generation of real-time capable code (see e.g. GRAMPC [25] or CasADi [26] for code generation tools for MPC of deterministic systems) and the consideration of distributional uncertainty via PCE [27] are beyond the scope of the current PolyOCP.jl implementation. The remainder of the paper is structured as follows: Section II provides background on the PCE transcription of stochastic OCPs, while Section III introduces core functionalities -
of the PolyOCP.jl. Section IV presents selected examples. The paper ends with conclusions and outlook in Section V.
II. PROBLEM FORMULATION
Next, we introduce the problem formulation and provide some background on PCE and stochastic OCPs.
A. Polynomial chaos expansions
The key idea of PCE is that any L2 random variable can be expressed in a suitable orthogonal polynomial basis. Consider a univariate orthogonal polynomial basis {φj(ξ)}∞
j=0
that spans the space L2(Ξ, F , μ; R), where φj(ξ) is a polynomial function of degree j, Ξ the sample space of ξ, F a σ-algebra, and μ the considered probability measure. Note that ξ ∈ L2(Ξ, F, μ; R) is the stochastic germ of polynomial functions. The orthogonality of {φj(ξ)}∞
j=0 ensures that
⟨φi(ξ), φj(ξ)⟩=
Z
Ξ
φi(ξ)φj(ξ) dμ(ξ)=δij⟨φj(ξ), φj(ξ)⟩
(1) holds, where δij denotes the Kronecker delta. The first polynomial φ0(ξ) is of degree 0 and thus always chosen to be φ0(ξ) = 1. Hence, the orthogonality (1) gives that for all other basis dimensions j > 0, we have E[φj(ξ)] =
R
Ξ φj(ξ) dμ(ξ) = ⟨φj(ξ), φ0(ξ)⟩ = 0.
The PCE of a real-valued random variable Z ∈ L2(Ω, F , μ; R) with respect to the basis {φj(ξ)}∞
j=0 is
Z(ω) =
∞
X
j=0
zjφj(ξ(ω)) with zj = Z(ω), φj(ξ(ω))
⟨φj(ξ), φj(ξ)⟩ ,
where zj ∈ R is referred to as the j-th PCE coefficient. In the PCE expression, ξ : Ω → Ξ is viewed as a function of the outcome ω and hence φj(ξ(ω)) = φj ◦ ξ(ω). For the sake of readability, we omit the arguments ξ(ω), ω and use the shorthand L2(R) := L2(Ω, F , μ; R) whenever there is no ambiguity. The first two moments of Z thus can be efficiently computed from its PCE coefficients as
E[Z] = z0, V[Z] =
∞
X
j=1
z2⟨φj, φj⟩. (2)
In numerical implementations the infinite-dimensional expansions have to be truncated after a finite number of terms. This may lead to truncation errors
∆Z(L) = Z −
XL−1
j=0 zj φj ,
where L ∈ N∞ := N+ ∪ {∞} is the PCE dimension. For L → ∞, the truncation error satisfies limL→∞ ∥∆Z(L)|| = 0 [32], [33].
Definition 1 (Exact PCE representation): The PCE of a random variable Z ∈ L2(R) is said to be exact with finite dimension L ∈ N if Z − PL−1
j=0 zj φj = 0. □ The correspondence between Wiener-Askey polynomial families and their underlying continuous stochastic germs is summarized in Table II, which serves as a guideline for selecting the appropriate polynomial basis for random variables with canonical distributions [34]. The Dirac measure, representing a deterministic variable with polynomial basis φ = 1, is also included to foster modelling freedom. Furthermore, Table II lists the first two nontrivial polynomials (beyond φ0 = 1) for e-
ach distribution type, along with their normalized counterparts ψj satisfying ⟨ψj, ψj⟩ = 1, obtained via
ψ(ξ) = φj(ξ)
p⟨φj(ξ), φj(ξ)⟩ .
Remark 1 (Generic affine PCE series): Given an L2 random variable with known distribution, the key to constructing an exact finite-dimensional PCE is the appropriate choice of basis functions. For some widely used distributions, the appropriate choice of polynomial bases is summarized in Table II [34]. Additionally, a generic (non-orthonormal but orthogonal) basis choice for any random variable Z ∈ L2(R) is φ0 = 1 and φ1 = Z − E[Z], which implies the exact and finite PCE z0 = E[Z] and z1 = 1. □ To-
 obtain the PCE of a vector-valued random variable, i.e. random vector Z = Z1 Z2 · · · Znz
⊤ ∈ L2(Rnz ), where Zi ∈ L2(R) denotes the i-the element, one needs to construct a multivariate basis from the basis of its elements. Let the PCE basis of each element Zi be {φj
i (ξi)}∞
j=0, then
the corresponding multivariate basis {φ(ξ)}∞
j=0 with ξ =
ξ1 ξ2 · · · ξnz
⊤ reads
{φ(ξ)}∞
j=0 = {1} ∪ Φ1(ξ) ∪ Φ2(ξ) ∪ · · · ∪ Φ∞(ξ),
with Φp(ξ) :=
nz
Y
i=0
φji
i (ξi) ji ∈ I[0,j],
nz
X
i=1
ji = p , (3)
which is the Cartesian product of individual univariate bases {φj
i (ξi)}∞
j=0, i ∈ I[1,nz]. Φp(ξ) is a unified representation of multivariate orthogonal polynomials of degree p, where the first two sets are
Φ1(ξ) :={φ1
1(ξ1), φ1
1(ξ2), · · · , φ1
nz (ξnz )},
Φ2(ξ) :=
n
φ2
1(ξ1), · · · , φ2
nz (ξnz ),
, φ1
1(ξ1) · φ1
2(ξ2), · · · , φ1
nz (ξnz−1) · φ1
nz (ξnz )
o
.
The number of total terms of such an nz-variate polynomial basis up to degree p is (nz + p)!/(nz!p!). Importantly, when Z1,...,Znz are independent random variables, the multivariate basis can be simplified to the union of individual bases of all components, i.e. {φ(ξ)}∞
j=0 = ∪nz
i=1{φj
i (ξi)}∞
j=0.
By applying PCE component-wise to the multivariate basis, one obtains the j-th PCE coefficient of Z as zj =

TABLE I: Overview of selected PCE toolboxes
Toolbox Language Features License PolyOCP.jl Julia Uncertainty propagation for stochastic LTI systems and OCPs MIT
PoCET [20] Matlab Propagation of stochastic parameters for dynamic systems; focus on Galerkin projection EUPL-1.2
PolyChaos.jl [23] Julia Construction of orthogonal polynomial bases & quadratures for arbitrary L2 distribution MIT
Chaospy [28] Python PCE construction via non-intrusive Galerkin projection, uncertainty propagation MIT
UQLab [29] Matlab Adaptive sparse PCEs surrogate models for moment and sensitivity analysis BSD 3-clause
OpenTURNS [30] Python/C++ Metamodeling of uncertainty propagation, efficient sampling & analytical approaches LGPL
Dakota [31] C++ Approximation of uncertainty propagation, moment and sensitivity analysis LGPL
TABLE II: Polynomial bases for random variables Z following canonical distributions
Distribution of Z Distribution of ξ basis Orthogonal Basis φj Orthonormal Basis ψj Juila type in PolyOCP.jl Dirac: δx(c) δx(0) Constant φ0 = 1 ψ0 = φ0 DiracMeasureParametric Gaussian: N (μ, σ2) N (0, 1) Hermite Hej (ξ) φ1(ξ) = ξ ψ1 = φ1 GaussMeasureParametric
φ2(ξ) = ξ2 − 1 ψ2(ξ) = φ2/√2
Uniform: U (0, 1) U (0, 1) Legendre Pj (2ξ − 1) φ1(ξ) = ξ − 1
2 ψ1 = 2√3φ1 UniformMeasureParametric
φ2(ξ) = ξ2 − ξ + 1
6 ψ2 = 6√5φ2
Beta: B(α=2, β=2) B(α, β) Jacobi J(α−1,β−1)
j (2ξ − 1) φ1(ξ) = ξ − 1
2 ψ1 = 2√5φ1 BetaMeasureParametric φ2(ξ) = ξ2 − ξ + 1
5 ψ2 = 5√14φ2
Gamma: Γ(k=1, θ=1) Γ(k, θ) Laguerre Lj (ξ) φ1(ξ) = ξ − 1 ψ1 = φ1 GammaMeasureParametric φ2(ξ) = ξ2 − 4ξ + 2 ψ2 = φ2/2
zj
1 zj
2 · · · zjnz
⊤, where zj
i is the j-th PCE coefficient
of Zi, ∀i ∈ I[1,nz]. We illustrate the procedure of generating finite-dimensional multivariate basis via the following two examples, each with a maximum polynomial degree of one. Example 1 (Independent components in random vector): Consider Z = Z1 Z2
⊤ ∈ L2(R2) with Z1 ∼ U (a, b) and Z2 ∼ N (μ, σ2), where Z1 and Z2 are independent. As Table II suggests, the exact PCE representations of Z1 and Z2 read
Z1 = a + b
2 · 1 + (b − a) · φ1
1(ξ1) with φ1
1(ξ1) = ξ1 − 1
2,
Z2 = μ · 1 + σ · φ1
2(ξ2) with φ1
2(ξ2) = ξ2,
where the stochastic germs ξ1 ∼ U (0, 1), ξ2 ∼ N (0, 1) are independent. By constructing a multivariate basis {1, φ11(ξ1), φ12(ξ2)}, the PCE of Z reads
Z=
a+b 2
μ ·1+ b−a
0 · φ1
1(ξ1) + 0
σ · φ1
2(ξ2). □
Example 2 (Multivariate Gaussian): Consider a multivariate Gaussian distribution of a nz-dimensional random vector Z = Z1 Z2 · · · Znz
⊤ ∈ L2(Rnz ) following the distribution Z ∼ N (μ, Σ). Then the exact PCE representation directly follows as
Z = μ · 1 + Chol(Σ) · φ11(ξ1) φ12(ξ2) · · · φ1nz (ξnz ) ⊤ ,
where Chol(Σ) ∈ Rnz×nz denotes a lower-triangular matrix obtained by Cholesky decomposition of Σ [27]. The basis functions are chosen as φ1
i (ξi) = ξi with independent stochastic germs ξi ∼ N (0, 1) for all i ∈ I[1,nz]. □ Note that the multivariate bases in the above examples preserve orthogonality because the stochastic germs are independent random variables. The multivariate Gaussian distri
bution in Example 2 allows addressing distributionally robust uncertainty propagation within the PCE framework [27].
B. Uncertainty propagation
PCE originated in [15] for the parameterization and approximation of random variables and was later introduced to solve stochastic differential equations by [34]. Under suitable assumptions, PCE enables exact uncertainty propagation. Consider an explicit map
f : L2(Rnz ) → L2(Rny ), Z 7→ Y = f (Z)
and let the PCEs of Z and Y be Z = P∞
j=0 zj φj and Y =
P∞
j=0 yjφj, respectively. Assuming the PCE coefficients of Z are known, the PCE coefficients of Y can be computed via Galerkin projection as follows (i) Substitute the PCE expansions of Z and Y in the map f , which yields P∞
i=0 yiφi = f (P∞
i=0 ziφi)
(ii) Project the map onto the polynomial basis φj, j ∈ N∞:
DX∞
i=0 yiφi, φj E
=
D
f
X∞
i=0 ziφi , φj E
(iii) Use the orthogonality property (1) and obtain the coefficients yj via
yj = f P∞
i=0 ziφi , φj
⟨φj, φj⟩ . (4)
Example 3 (Nonlinear map): Consider the map Y = f (Z) = (Z1+Z2)2, where Z is the random vector from Example 1. Substituting Z with its PCE yields
Y = a+b
2 + u + (b − a) · φ1
1(ξ1) + σ · φ1
2(ξ2)
2
.
It can be observed that the PCE of Y includes polynomials up to degree two, and the coefficient associated with the

cross term φ11(ξ1) · φ12(ξ2) is non-zero. Therefore, a 2-variate polynomial basis up to degree 2 as (3) suggests is required to exactly represent Y . □ When a linear or affine map f is considered, however, the uncertainty propagation in the PCE framework is significantly easier. Let Y = f (Z) = AZ with A ∈ Rny×nz . Using Galerkin projection (4) and the orthogonality relation (1), it follows that
yj =
P∞
i=0 Aziφi, φj
⟨φj, φj⟩ = Azj. (5)
Importantly, (5) indicates that Y can be exactly represented in the basis of Z and thus no new terms are introduced. This is in contrast to nonlinear maps as demonstrated in Example 3.
C. Stochastic optimal control
Next we present the procedure for reformulation of a stochastic OCP such that it can be efficiently solved within the PCE framework. Consider a stochastic discrete-time LTI system
X(k+1) = AX(k)+BU (k)+EW (k), X(0) = Xini, (6)
with state X(k) ∈ L2(Ω, Fk, μ; Rnx ) and process disturbance W (k) ∈ L2(Ω, F , μ; Rnw ). The probability distributions of the disturbance W (k), k ∈ N and the initial condition Xini ∈ L2(Ω, F0, μ; Rnx ) are assumed to be known and W (k), k ∈ N are i.i.d. random variables. In the filtered probability space (Ω, F , (Fk)k∈N, μ), the σ-algebra contains all available historical information, i.e., F0 ⊆ F1 ⊆ ... ⊆ F . Let (Fk)k∈N be the smallest filtration that the stochastic process X is adapted to, i.e-
., Fk = σ(X(i), i ≤ k), where σ(Xi, i ≤ k) denotes the σalgebra generated by X(i), i ≤ k. Then, U (k) is modeled as a stochastic process which is adapted to the filtration Fk, i.e. U (k) ∈ L2(Ω, Fk, μ; Rnu ). This imposes a causality constraint on U (k), i.e., U (k) depends only on X(i), i ≤ k up to time step k. Thus, U (k) may only depend on past disturbances W (i), i < k. For more details on filtrations we refer to [35]. Given the initial condition X(0) = Xini and random variables W (k), k ∈ I[0-
,N−1], we consider the following stochastic OCP with horizon N ∈ N+,
min
X,U E
"N −1
X
k=0
∥X (k)∥2
Q + ∥U (k)∥2
R + ∥X(N )∥2
QN
#
(7a)
s. t. (6), k ∈ I[0,N−1], (7b)
P[zmin ≤ Z(k) ≤ zmax] ≥ 1 − εz, k ∈ I[0,N′], (7c)
where Q, QN ⪰ 0, R ≻ 0, ∥X(k)∥2
Q := X⊤(k)QX(k) ∈
L2(R), and (z, Z, N ′) ∈ {(x, X, N ), (u, U, N − 1)}.
Here we consider the chance constraints (7c) individually imposed on the components of X and U , where ε denotes the probability that the constraint is violated. To obtain the PCE reformulated OCP, we make the following assumption. Assumption 1 (Exact PCEs for Xini and Wk): The initial condition Xini and all i.i.d. disturbances Wk, k ∈ I[0,N−1]
admit exact PCEs with Lini terms and Lw terms of orthonor
mal bases, respectively. That is, Xini = PLini−1
i=0 xi
iniψi
ini(ξini)
and Wk = PLw−1
n=0 wn
k ψnw(ξk) for k ∈ I[0,N−1], where ξk are i.i.d. stochastic germs. In the above assumption, each ξk, k ∈ I[0,N−1] corresponds to the disturbance W (k) at time step k. In the PCEs of i.i.d. disturbances, the identical distribution is expressed via the shared algebraic structure of the basis functions ψw, while the stochastic independence is modeled by the use of different germs ξk. Similar to the multivariate basis illustrated in Example 1, we construct a joint orthonormal basis Ψ = {ψj(ξ)}L−1
j=0 with ξ = ξini ξ1 · · · ξN−1
⊤ for Xini and W (k), k ∈ I[0,N−1] as
Ψ := {ψj
ini(ξini)}Lini−1
i=0
[
N −1
[
k=0
{ψn
w (ξk )}Lw −1
n=0
!
(8)
=
n
1, ψ1
ini(ξini), ..., ψLini−1
ini (ξini), ψ1
w(ξ0), ..., ψLw−1
w (ξ0),
..., ψ1
w(ξN−1), ..., ψLw−1
w (ξN−1)
o
.
with a total of L = Lini + N (Lw − 1) terms, i.e., it grows linearly with the horizon N . Under suitable technical conditions, it can be shown that the optimal solution of (7), i.e. {X⋆(k)}N
k=0 and {U ⋆(k)}N−1
k=0 , admits exact PCEs in the joint basis Ψ from (8), see [36] for details. By replacing all the random variables in system (6)
with their PCEs using the joint basis Ψ, e.g. X(k) =
PL−1
j=0 xj(k)ψj, the resulting system for PCE coefficients satisfies
xj(k+1) = Axj(k)+Buj(k)+Ewj(k), xj(0) = xj
ini (9)
for all j ∈ I[0,L−1]. Moreover, the orthonormality of basis functions, i.e. ⟨ψi, ψj⟩ = δij for i, j ∈ I[0,L−1], implies that
E ∥X(k)∥2
Q =E
" L−1
X
j=0
xj,⊤(k)ψj Q
L−1
X
j=0
xj (k)ψj
#
=
L−1
X
i=0
L−1
X
j=0
xi,⊤(k)Qxj (k)δij =
L−1
X
j=0
∥xj (k)∥2
Q.
Let Assumption 1 hold and consider the joint basis constructed as (8). Then the PCE reformulation of 7 reads:
min
j ∈I[0,L−1] xj ∈Rnx
uj ∈Rnu
L−1
X
j=0
N −1
X
k=0
∥xj (k)∥2
Q +∥uj (k)∥2
R +∥xj(N )∥2
QN
(10a)
s. t. ∀j ∈ I[0,L−1], k ∈ I[0,N−1],
xj(k + 1)=Axj(k)+Buj(k)+Ewj(k), xj(0)=xj
ini, (10b)
z0(k′) ± γ(εz)
v u u t
L−1
X
j=1
(zj (k′))2 ∈ [zmin, zmax], (10c)
uj′ (k) = 0, ∀j′ ∈ I[Lini+k(Lw−1)+1,L−1], (10d)
where k′ ∈ I[0,N] for z = x and k′ ∈ I[0,N−1] for z = u in (10c). The causality constraint (10d) follows from the filtration condition, i.e. from U (k) ∈ L2(Ω, Fk, μ; Rnu ) [36].

PolyOCP.jl
Stochastic OCP (7)
Stochastic OCP (10)
PCE transcription
PolyChaos.jl
PolyOCP.jl
JuMP.jl
PCE solution uj,⋆(k), xj,⋆(k)
Fig. 1: Flow chart of solving stochastic OCPs using PolyOCP.jl
Using Cantelli’s inequality, a conservative componentwise approximation of the chance constraint (7c) is given by
E[Z]±γ(εz)V[Z] ∈ [zmin, zmax] with γ(εz) =
r 2 − εz
εz
,
see [9], [4] for details of this reformulation. By calculating the first two moments of Z from its PCE coefficients as indicated in (2), the convex second-order cone constraint (10c) follows. In particular, when Z is Gaussian distributed, the above approximation is exact if γ is selected according to the standard Gaussian quantile function. Moreover, if zmin = −∞ or zmax = ∞, (7c) reduces to a one-sided chance constraint, in which case γ(εz) = p(1 − εz)/εz.
III. THE PO L YOCP.J L PACKAGE
With PolyOCP.jl, we provide a software package written in the Julia programming language that offers a hands-on tool for solving stochastic OCPs within the PCE framework with minimal effort. The workflow of using PolyOCP.jl is illustrated in Fig. 1.
A. Workflow in PolyOCP.jl
Getting PCE representations of random variables serves as the first step in solving stochastic OCPs within the PCE framework, i.e., (10). Building upon PolyChaos.jl, PolyOCP.jl defines the canonical parametric measures and their corresponding orthonormal polynomial functions, as summarized in Table II. Note that the use of orthonormal bases in PolyOCP.jl simplifies the formulation of the objective (10a) and the chance constraint (10c), and also improves numerical stability. Given a random vector Z-
 ∈ L2(Rnz ) whose components are defined as types listed in Table II, the function genPCE directly returns the sparse PCE representation of Z, including the multivariate orthonormal basis (MultiOrthonoPoly) and the associated coefficients. Moreover, PolyOCP.jl supports user-defined
TABLE III: Structure StochProb defining OCP (10)
Field Description Required parameters
N Prediction horizon A, B, E System matrices in (10b) x0coeff, wcoeff PCE coefficients of Xini and W
Optional parameters
Q, R, QN Weighting matrices in objective (10a) lbx, ubx Tuples (bound, risk) for lower/upper state chance constraints; bound sets xmin/xmax, risk is possibility of violation allowance lbu, ubu Tuples for input chance constraints (same structure) gauss Boolean flag; true only if X0 and W are Gaussians
PCE of Z with multivariate bases up to arbitrary degrees and specified PCE coefficients. Once the PCEs of Xini and W are obtained, the function jointPCE constructs a joint basis for the stochastic LTI system (6) over horizon N . In addition, it computes the PCE coefficients of Xini and W (k), k ∈ I[0,N−1], in the joint basis in sparse form. The data structure for defining (10) is a struct called StochProb whose fields are described in Table III. The Boolean flag gauss determines how γ(ε) is select-
ed in the chance constraint (10c) as discussed following (10). Note that chance constraints in PolyOCP.jl are defined on one side as P[Z ≤ bound] ≥ 1 − risk, where setting bound=Inf effectively deactivates the constraint. Given the required and optional fields, the function build automatically generates the optimization problem corresponding to (10) using a user-specified solver, e.g.Ipopt, through JuMP.jl, which is a domain-specific model language for expressing and solving mathematical optimizat-
ion problems [24], [37]. Finally, the function solveOCP solves (10) and returns the optimal solutions in PCE coefficients xj,⋆ and uj,⋆ for j ∈ I[0,L−1].
For using PolyOCP.jl in Model Predictive Control (MPC), the function con_initial_param sets up a constraint for the initial condition with the parametric variable x0_Param to avoid rebuilding the entire model repeatedly. The value of x0_Param is then updated at each time step with the current measured state using update_initial_param in the MPC loop.
B. Additional functionalities of PolyOCP.jl
Except for defining (10) through the provided struct StochProb, PolyOCP.jl also offers additional functions to enhance modeling flexibility. When objectives beyond quadratic costs—such as riskaware objectives—are considered, PolyOCP.jl allows users to specify custom objective functions by leaving the weighting matrix fields in StochProb empty. If no objective is defined, JuMP.jl typically returns a feasible solution. When only a subset of state or input components is subject to chance constraints,-
 the fields lbx, ubx, lbu, and ubu may be omitted. Instead, chance constraints can be conveniently imposed using the function con_chance that

provides an interface for specifying individual constraints. Furthermore, after building the optimization problem via build, additional constraints can also be appended following the standard syntax of JuMP.jl. To compute the Probability Density Function (PDF) of a random variable from its PCE Z = PL−1
j=0 zj ψj (ξ) ∈ L2(R) numerically, one can employ the Fourier transformation F and its inverse F −1 as
fZ (z) = F −1 QL−1
j=0 F (ψj(ξ)) . (11)
Especially, the Fourier transforms of the canonical distributions listed in Table II are known as characteristic functions [38].
IV. ILLUSTRATIVE EXAMPLES
We consider two examples to illustrate the features of PolyOCP.jl. The first example demonstrates how to structure a stochastic OCP, whereas the second applies PolyOCP.jl to stochastic MPC. The code for all examples is available in PolyOCP.jl, under the directory /examples [22]. All the computations are done in julia using solver Ipopt on an AMD Ryzen 9 3900X 12-Core Processor with 3.79 GHz, 64 GB of RAM.
A. Chemical reactor – Stochastic OCP
We consider the linearized and discretized Van de Vusse reactor model from [39]. The system matrices are
A = 0.95123 0
0.08833 0.81873 , B = −0.0048771
−0.0020429 , E = 1
1.
The initial condition Xini follows a 2-variate Gaussian distribution as Xini ∼ N ([0.5, 0.1]⊤, Diag([0.052, 0.012])), and disturbances W are uniformly distributed on [−0.0173, 0.0173]. As suggested in Table II, a 2-variate Hermite polynomials {ψ(ξini)}2
i=0 = {1, ξini,1, ξini,2} is
used for Xini, where ξini,1 and ξini,2 are independent standard Gaussian variables. For Wk, k ∈ I[0,N−1], Jacobi
polynomials {ψw}1n=0 = (ξk) = {1, 2√3(ξk − 0.5)} are employed, where ξk are i.i.d. variables following U(0, 1). Their PCEs and the joint basis from (8) are then given by
Xini = 0.5
0.1 · 1 + 0.05
0 · ψ1(ξini) + 0
0.01 · ψ2(ξini),
Wk = 0 · 1 + 2 · 0.0173
2√3 ψ1(ξk), k ∈ I[0,N−1],
Ψ = 1, ψ1(ξini), ψ2(ξini), ψ1(ξ0), · · · , ψ1(ξN−1) ,
where Ψ consists of N + 3 terms. The prediction horizon is set to N = 50 and weighting matrices are chosen as identical matrices, i.e. Q = QN = I2 and R = 1. To solve the stochastic OCP, a struct StochProb is defined with the given parameters. In addition, a state chance constraint P[X2(k) ≤ 0.24] ≥ 0.9, k ∈ I[0,N] is imposed by letting StochProb.ubx = ([Inf;0.24], [1;0.1]), where the upper bound value Inf indicates that the constraint on X1 is deactivated. After building the PCE OCP with 8056 dec-
ision variables via build, solveOCP directly returns the optimal solution in terms of
Fig. 2: Trajectories of the first 30 PCE coefficients of X1 for the chemical reactor
Fig. 3: Comparison of PDFs and histograms of 104 samples for the chemical reactor
PCE coefficients. Solving the OCP 1000 times and observe an average computation time of 159.68 ms. The trajectories of the first 30 PCE coefficients of the state component X1,
i.e. xj
1 for j = I[0,29], are depicted in Fig. 2. We observe that the PCE coefficients exhibit a triangular structure due to the causality constraint (10c), and we refer to [21] for an indepth analysis. By drawing 104 samples of ξini and ξk, k ∈ I[0,N−1], for PCE basis, we obtain the histograms of X1(k) at time steps k = 0, 10, 20, 30, 40, 50. These histograms perfectly match the corresponding PDFs calculated from (11) as shown in Fig. 3. The code for this example is provided in examples/ChemicalReactor.-
jl.
B. Four tank system – Stochastic MPC
We consider a linearized version of a four tank system taken from [40] with system matrices
A=

  
0.921 0 0.041 0 0 0.918 0 0.033 0 0 0.924 0 0 0 0 0.937

  
,B=

  
0.017 0.001 0.001 0.023 0 0.061 0.072 0

  
,
and E = I4. Each component of W is assumed to be independent with distribution Wi ∼ 0.05 · (Z2 + Z), where Z ∼ N (0, 1) is a standard Gaussian variable. Hence,

Fig. 4: 10 different closed-loop realizations of state trajectories for the four tank system
Hermite polynomials up to degree two are chosen for each component Wi, whose PCE reads
Wi = 0.05 · 1 · 1 + 1 · ψ1(ξ) + √2 · ψ2(ξ) , ξ ∼ N (0, 1),
where ψ1(ξ) = ξ and ψ2 = (ξ2−1)/√2 are listed in Table II. Each component of the initial condition Xini is uniformly distributed on [−1, 1]. Moreover, the weighting matrices are chosen to be Q = QN = 3 · I4 and R = 104 · I2. The chance constraints are imposed on the first two components of the state as P[−2 ≤ Xi ≤ 2] ≥ 0.8, i = 1, 2. Similar to Example IV-A,the corresponding StochProb with prediction horizon N = 10 is constructed and the model is built. Note that when running PolyOCP.jl in MPC, th-
e parametric initial condition x0Param is set to the current measured state. Further details about this example are provided in examples/Tank.jl.
We sample 1000 sample paths of initial condition and disturbance realizations for a closed-loop simulation over 50 steps, which results in a total of 50.000 stochastic OCPs to be solved. 10 sampled closed-loop realization trajectories are shown in Fig 4. It can be seen that the state realizations stay close to the origin over time. In addition, the empirical distributions of the closed-loop state trajectories Xi, i = 1, 2, are depicted in Fig. 5. Observe that all the realizations of Xi, i = 1, 2 l-
ie in the interval [−2, 2], since the chance constraint reformulation (10c) is conservative. Moreover, the realization paths are sampled using both parallel and serial methods in julia, and the computation times are reported in Table IV. In the parallel method, the samples are computed simultaneously on 10 cores, resulting in an 82.01% reduction in total computation time. On average, solving a single stochastic OCP using PCE with 5184 decision variables and linear and second-order cone constraints-
, takes 10.50 ms with parallelized sampling.
Further examples, e.g., stochastic LTI systems with non-i.i.d. addictive disturbances, are available under /examples.
Fig. 5: Time evolution of empirical distributions of Xi, i = 1, 2 of the closed-loop four tank system
TABLE IV: Comparison of computation times for parallel and serial sampling methods for the four tank system.
Method Overall time (s) Per sample (ms) Per OCP (ms) Parallel 524.90 524.91 10.50 Serial 2919.31 2919.31 58.39
V. CONCLUSION
This paper has introduced PolyOCP.jl, a julia toolbox, released under the MIT license, for solving stochastic optimal control problems in the PCE framework. Existing PCE tools are not tailored to handle problems with additive stochastic disturbances. PolyOCP.jl presents a first step towards closing this gap. The toolbox is intended to facilitate rapid prototyping of stochastic OCPs and corresponding MPC formulations. Future work will consider the inclusion of data-driven OCP formulations [36] and -
the extension towards distributionally robust formulations [27]. Also the consideration of risk-sensitive objective and constraint formulations (beyond chance constraints) will be of interest.
ACKNOWLEDGMENT
During the preparation of this work the authors used ChatGPT in order to check grammar. After using this tool, the authors reviewed and edited the content as needed and

take full responsibility for the content of the published article.
REFERENCES
[1] H. Witsenhausen, “Separation of estimation and control for discrete time systems,” Proceedings of the IEEE, vol. 59, no. 11, pp. 15571566, 1971. [2] J. J. Florentin, “Optimal control of continuous time Markov stochastic systems,” International Journal of Electronics, vol. 10, no. 6, pp. 473488, 1961. [3] H. J. Kushner and F. C. Schweppe, “A maximum principle for stochastic control systems,” Journal of Mathematical Analysis and Applications, vol. 8, no. 2, pp. 287–302, 1964. [4] M. Farina, L. G-
iulioni, L. Magni, and R. Scattolini, “A probabilistic approach to model predictive control,” in 52nd IEEE Conference on Decision and Control (CDC). IEEE, 2013, pp. 7734–7739.
[5] L. Fagiano and M. Khammash, “Nonlinear stochastic model predictive control via regularized polynomial chaos expansions,” in 51st IEEE Conference on Decision and Control (CDC). IEEE, 2012, pp. 142147. [6] L. Hewing and M. N. Zeilinger, “Stochastic model predictive control for linear systems using probabilistic reachable sets,” in 2018 IEEE Conference on Decision and Control (CDC). IEEE, 2018, pp. 51825188. [7] R. D. McAllister and J. B. Rawlings, “Nonlinear stochastic model predictive control: -
Existence, measurability, and stochastic asymptotic stability,” IEEE Transactions on Automatic Control, vol. 68, no. 3, pp. 1524–1536, 2022. [8] J. Schießl, , H. Selder, R. Ou, T. Faulwasser, M. H. Baumann, and L. Grüne, “Stability and performance of stochastic economic mpc - stochastic characterization of the closed-loop asymptotics,” arXiv:2510.19416, 2025.
[9] G. C. Calafiore and M. C. Campi, “The scenario approach to robust control design,” IEEE Transactions on Automatic Control, vol. 51, no. 5, pp. 742–753, 2006. [10] M. Athans, “The role and use of the stochastic linear-quadraticgaussian problem in control system design,” IEEE Transactions on Automatic Control, vol. 16, no. 6, pp. 529–552, 1971. [11] D. Landgraf, A. Völz, F. Berkel, K. Schmidt, T. Specker, and K. Graichen, “Probabilistic prediction methods for nonlinear systems with application t-
o stochastic model predictive control,” Annual Reviews in Control, vol. 56, p. 100905, 2023. [12] J. Schießl, R. Ou, M. H. Baumann, T. Faulwasser, and L. Grüne, “Towards turnpike-based performance analysis of risk-averse stochastic predictive control,” ArXiv:2504.00701, 2025. [13] G. Pan, “Data-driven control of stochastic systems: Representation, prediction, and optimal control,” Ph.D. dissertation, Hamburg University of Technology (TUHH), 2025.
[14] T. Sullivan, Introduction to Uncertainty Quantification. Springer International, 2015, vol. 63. [15] N. Wiener, “The homogeneous chaos,” American Journal of Mathematics, pp. 897–936, 1938. [16] K. Kim and R. Braatz, “Probabilistic analysis and control of uncertain dynamic systems: Generalized polynomial chaos expansion approaches,” in 2012 American Control Conference, 2012, pp. 44–49. [17] K. K. Kim, D. E. Shen, Z. K. Nagy, and R. D. Braatz, “Wiener’s polynomial chaos for the analysis and con-
trol of nonlinear dynamical systems with probabilistic uncertainties [Historical Perspectives],” IEEE Control Systems Magazine, vol. 33, no. 5, pp. 58–67, 2013.
[18] K. Kim and R. Braatz, “Generalised polynomial chaos expansion approaches to approximate stochastic model predictive control,” International journal of control, vol. 86, no. 8, pp. 1324–1337, 2013. [19] P. K. Mishra, J. A. Paulson, and R. D. Braatz, “Polynomial chaosbased stochastic model predictive control: An overview and future research directions,” arXiv preprint arXiv:2406.10734, 2024.
[20] F. Petzke, A. Mesbah, and S. Streif, “Pocet: a polynomial chaos expansion toolbox for matlab,” IFAC-PapersOnLine, vol. 53, no. 2, pp. 7256–7261, 2020, 21st IFAC World Congress. [21] R. Ou, J. Schießl, M. H. Baumann, L. Grüne, and T. Faulwasser, “A polynomial chaos approach to stochastic LQ optimal control: Error bounds and infinite-horizon results,” Automatica, vol. 174, p. 112117, 2025. [22] “PolyOCP.jl,” https://github.com/OptCon/PolyOCP.jl, 2025, version 0.1.0.
[23] T. Mühlpfordt, F. Zahn, V. Hagenmeyer, and T. Faulwasser, “PolyChaos.jl—A Julia package for polynomial chaos in systems and control,” IFAC-PapersOnLine, vol. 53, no. 2, pp. 7210–7216, 2020, 21th IFAC World Congress. [24] I. Dunning, J. Huchette, and M. Lubin, “JuMP: A modeling language for mathematical optimization,” SIAM Review, vol. 59, no. 2, pp. 295320, 2017. [25] B. Käpernick and K. Graichen, “The gradient based nonlinear model predictive control software GRAMPC,” in 2014 European Contro-
l Conference (ECC). IEEE, 2014, pp. 1170–1175. [26] J. Andersson, J. Gillis, G. Horn, J. Rawlings, and M. Diehl, “Casadi: a software framework for nonlinear optimization and optimal control,” Mathematical Programming Computation, vol. 11, no. 1, pp. 1–36, 2019. [27] G. Pan and T. Faulwasser, “Distributionally robust uncertainty quantification via data-driven stochastic optimal control,” IEEE Control Systems Letters, vol. 7, pp. 3036–3041, 2023. [28] J. Feinberg and H. P. Langtangen, “Chaospy: An o-
pen source tool for designing methods of uncertainty quantification,” Journal of Computational Science, vol. 11, pp. 46–57, 2015.
[29] S. Marelli and B. Sudret, UQLab: A Framework for Uncertainty Quantification in Matlab, 2014, pp. 2554–2563.
[30] M. Baudin, A. Dutfoy, B. Iooss, and A.-L. Popelin, OpenTURNS: An Industrial Software for Uncertainty Quantification in Simulation. Cham: Springer International Publishing, 2017, pp. 2001–2038. [31] B. M. Adams, W. J. Bohnhoff, K. R. Dalbey, M. S. Ebeida, J. P. Eddy, M. S. Eldred, R. W. Hooper, P. D. Hough, K. T. Hu, J. D. Jakeman, M. Khalil, K. A. Maupin, J. A. Monschke, E. E. Prudencio, E. M. Ridgway, P. Robbe, A. A. Rushdi, D. T. Seidl, J. A. Stephens, L. P. Swiler, and J. G. Winokur, “Dako-
ta 6.19.0 documentation,” Sandia National Laboratories, Albuquerque, NM, Tech. Rep. SAND202313392O, 2023. [32] R. Cameron and W. Martin, “The orthogonal development of nonlinear functionals in series of Fourier-Hermite functionals,” Annals of Mathematics, pp. 385–392, 1947. [33] O. Ernst, A. Mugler, H.-J. Starkloff, and E. Ullmann, “On the convergence of generalized polynomial chaos expansions,” ESAIM: Mathematical Modelling and Numerical Analysis, vol. 46, no. 2, pp. 317–339, 2012. [34] D. Xiu an-
d G. Karniadakis, “The Wiener–Askey polynomial chaos for stochastic differential equations,” SIAM Journal on Scientific Computing, vol. 24, no. 2, pp. 619–644, 2002.
[35] B. Fristedt and L. Gray, A Modern Approach to Probability Theory. Birkhäuser Boston, 1997. [36] G. Pan, R. Ou, and T. Faulwasser, “On a stochastic fundamental lemma and its use for data-driven optimal control,” IEEE Transactions on Automatic Control, vol. 68, no. 10, pp. 5922–5937, 2023. [37] A. Wächter and L. T. Biegler, “On the implementation of an interiorpoint filter line-search algorithm for large-scale nonlinear programming,” Mathematical Programming, vol. 106, no. 1, pp. 25–57, 2006. [-
38] F. Oberhettinger, Fourier transforms of distributions and their inverses: a collection of tables. Academic Press, 1973.
[39] T. A. N. Heirung, J. A. Paulson, J. O’Leary, and A. Mesbah, “Stochastic model predictive control—how does it work?” Computers & Chemical Engineering, vol. 114, pp. 158–170, 2018. [40] J. Berberich, J. Köhler, M. A. Müller, and F. Allgöwer, “Data-driven model predictive control with stability and robustness guarantees,” IEEE Transactions on Automatic Control, vol. 66, no. 4, pp. 17021717, 2020.

---

## Processing Information

- **Processing Library:** Zotero PDFWorker
- **Processing Date:** 2026-02-10T18:14:11.863Z
- **Text Length:** 39289 characters
- **Success:** Text extraction completed
- **PDF Library Used:** Zotero PDFWorker
- **Pages Processed:** 8 of 8
