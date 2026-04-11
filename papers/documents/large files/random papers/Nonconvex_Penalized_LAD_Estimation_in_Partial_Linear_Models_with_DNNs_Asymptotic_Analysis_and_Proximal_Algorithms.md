# PDF Document: Feng et al. - 2025 - Nonconvex Penalized LAD Estimation in Partial Linear Models with DNNs Asymptotic Analysis and Proxi.pdf

**File Path:** Feng et al. - 2025 - Nonconvex Penalized LAD Estimation in Partial Linear Models with DNNs Asymptotic Analysis and Proxi.pdf

**Processed Date:** 2026-02-10T18:13:42.155Z

**File Size:** 615.53 KB

**Total Pages:** 29

**Extracted Pages:** 29

**PDF Library:** Zotero PDFWorker

**Attachment Item ID:** 3451

**Title:** Nonconvex Penalized LAD Estimation in Partial Linear Models with DNNs: Asymptotic Analysis and Proximal Algorithms

**Collection:** Large Files > Random Papers

---

## Extracted Text Content

Nonconvex Penalized LAD Estimation in Partial Linear Models
with DNNs: Asymptotic Analysis and Proximal Algorithms
Lechen Feng∗ Haoran Li† Lucky Li‡ Xingqiu Zhao§
Abstract
This paper investigates the partial linear model by Least Absolute Deviation (LAD) regression. We parameterize the nonparametric term using Deep Neural Networks (DNNs) and formulate a penalized LAD problem for estimation. Specifically, our model exhibits the following challenges. First, the regularization term can be nonconvex and nonsmooth, necessitating the introduction of infinite dimensional variational analysis and nonsmooth analysis into the asymptotic normality discussion. Second, our netwo-
rk must expand (in width, sparsity level and depth) as more samples are observed, thereby introducing additional difficulties for theoretical analysis. Third, the oracle of the proposed estimator is itself defined through a ultra high-dimensional, nonconvex, and discontinuous optimization problem, which already entails substantial computational and theoretical challenges. Under such the challenges, we establish the consistency, convergence rate, and asymptotic normality of the estimator. Furthermo-
re, we analyze the oracle problem itself and its continuous relaxation. We study the convergence of a proximal subgradient method for both formulations, highlighting their structural differences lead to distinct computational subproblems along the iterations. In particular, the relaxed formulation admits significantly cheaper proximal updates, reflecting an inherent trade-off between statistical accuracy and computational tractability. Keywords: Partial Linear Model, Least Absolute Deviation, Deep-
 Neural Network, Optimization, Stochastic Subgradient Descent
1 Introduction
Partial Linear Models (PLMs) have been extensively studied in classical multivariate regression; see Hardle et al. (2006) [18] for comprehensive survey of this framework. The main motivation is to allow different covariates to be modeled in different ways: through simple linear effects, or through more flexible nonparametric components. In general, PLMs achieve a balance between flexibility and robustness, retaining the adaptability of nonparametric methods while reducing the dimensionality burden-
 of fully nonparametric models. Building on these advantages, PLMs have found important applications in biostatistics, computational public health, life sciences, environmental science, and economics; see Engle et al. (1986) [12], Zeger and Diggle (1994) [47] and Peng et al. (2006) [33].
∗Department of Applied Mathematics, The Hong Kong Polytechnic University, Hong Kong. Email: fenglechen0326@163.com †Department of Applied Mathematics, The Hong Kong Polytechnic University, Hong Kong. Email: hao316.li@connect.polyu.hk
‡College of Computing, Data Science, and Society, University of California, Berkeley, CA 94720. Email: luckyql@berkeley.edu, luckyql17@gmail.com
§Department of Applied Mathematics, The Hong Kong Polytechnic University, Hong Kong. Email: xingqiu.zhao@polyu.edu.hk
1
arXiv:2511.21115v1 [stat.ML] 26 Nov 2025

In this paper, we consider the following PLM:
Y = β⊤
0 X + g0(Z) + ε (1)
with covariates X ∈ Rd, Z ∈ Rl, a vector of unknown parameters β0, an unknown nonlinear function g0 and a random error ε. Consider N i.i.d. observations {Ui
.= (Xi, Yi, Zi)}N
i=1, while denote X .= (X1, . . . , XN ),
Y =. (Y1, . . . , YN ), Z =. (Z1, . . . , ZN ), and U .= (U1, . . . , UN ). We aim to solve the following penalized Least Absolute Deviation (LAD) regression problem for the estimation of unknown parameters β0 and g0:
(βˆN , gˆN ) ∈ argmin
β,g
1 N
N
X
i=1
Yi − β⊤Xi − g(Zi) + λN JN,M (β, g) (2)
with given M > 0, λN > 0 and (possibly) nonconvex and nonsmooth regularization term JN,M (β, g) bounded by constant M , i.e., ∥JN,M ∥∞ < M . In this paper, we estimate the unknown function g0 through a sparse Deep Neural Network (DNN), and therefore focus on the following finite-dimensional optimization problem:
min
β,g(W)
1 N
N
X
i=1
Yi − β⊤Xi − g(W; Zi) + λN JN,M (β, g(W)), (3)
where g(W) belongs to a prescribed class of sparse DNNs; the readers may refer to Section 3 for the details.
Least Squares Estimation (LSE) has been the most widely studied and influential for PLMs (1), due to its simplicity and broad applicability. Specifically, LSE seeks to solve the following optimization problem:
mβ,ign
1 N
N
X
i=1
Yi − β⊤Xi − g(Zi) 2 + J (β, g) (4)
with various parametric policies of nonlinear function g and different choices of regularization term J , as implemented in the respective literature. Broadly speaking, methods for handling the nonparametric function g0 fall into two main classes: estimating the linear and nonlinear components jointly, and disentangling the estimation of two components. The joint estimation approach primarily relies on smoothing techniques, e.g., cubic spline smoother (Engle et al. (1986) [12]), local polynomial s-
moother (Hamilton and Truong (1997) [17]) and B-splines smoother (McLean et al. (2014) [30]). Whereas the separate estimation approach mainly includes the profile likelihood method (Severini and Wong (1992) [40]), the partial residual approach (Cuzick (1992) [8], Ferraccioli et al. (2023) [15]), and the difference approach (Duran et al. (2012) [11]). Meanwhile, motivated by considerations such as sparsity, smoothness, robustness, and prevention of overfitting, a line of research has focused on the-
 selection of regularization terms J of problem (4). Henceforth, various J has been proposed, including Lasso (Tibshirani (1996) [42]), SCAD (Smoothly Clipped Absolute Deviation, Fan and Li (2001) [13]), Elastic Net (Zou and Hastie (2005) [51]), MCP (Minimax Concave Penalty, Zhang (2010) [48]) and SACR (Smoothly Adaptively Centered Ridge, Belli (2022) [2]). In recent year, with the rapid growth of big data, data have become more diverse and voluminous, bringing the new challenges for LSE. Roozbeh -
and Arashi (2016) [36] introduce a biased estimator for shrinkage parameter which is of harmonic type mean of ridge estimators, aiming to tackle the problem of multicollinearity. In addition, Auerbach (2022) [1] introduces a matching pairs method to incorporate network data into econometric modeling.
Despite the aforementioned numerous efforts to improve LSE, it remains inherently sensitive to outliers, heavy-tailed errors, and high reliance on assumptions (e.g., linearity and homoscedasticity) cannot be fully overcome; see Cizek and Sadikoglu (2020) [7] for the detailed discussion of the limitations of LSE. To circumvent the aforementioned drawbacks, LAD estimation has been adopted as a robust alternative for analyzing PLMs, i.e., estimating the unknown parameters β0 and g0 by solving optimiz-
ation problem (2). Since the LAD cost function is inherently non-differentiable, even ignoring the potential non-smoothness of
2

the regularization term JN,M , its theoretical analysis is challenging. In the early literature, to render the problem analytically tractable, unknown function g0 is often represented through a basis expansion
g0(Z) =
K
X
k=1
θk φk (Z ),
where the basis functions {φk}K
k=1 are pre-specified, and identifying the coefficient vector θ = (θ1, . . . , θK )⊤ is then equivalent to estimating g0 itself; see He and Shi (1994) [20] and Lee (2003) [28]. Remarkably, such early works primarily focus on establishing the consistency and asymptotic distribution of the parametric component β0, rather than fully characterizing the nonparametric part. In more recent years, to ensure the consistency of the estimation of g0, alternative structural conditions are additionally require-
d. For instance, Lian (2012) [29] considers the following additive PLMs
Y = β⊤
0X+
l
X
k=1
g0,k(Z(k)) + ε
with Z = (Z(1), . . . , Z(l))⊤, while Ben and Lan (2016) [41] further extend Lian’s framework to the ultra high-dimensional setting. For a comprehensive introduction of LAD for PLMs, we refer to the monographs by Koenker et al. (2017) [25].
Over the past decade, deep learning has been widely applied in many domains and has achieved remarkable success, thereby being naturally incorporated into the traditional statistical field. Generally speaking, DNNs not only exhibit strong function approximation capabilities (see Hornik et al. (1989) [22] for the universal approximation theorem) but also help mitigate the curse of dimensionality, making them a valuable tool for estimating the nonlinear function g0 of PLMs (1). For instance, Farrell-
 et al. (2019) [14] apply deep learning to semiparametric inference and establish nonasymptotic bounds of DNNs for nonparametric term, covering the standard LSE in particular. Additionally, Zhong and Wang (2024) [50] leverage deep learning for PLMs in quantile regression to achieve interpretable results and enable statistical inference, while they later extended these results to partially linear Cox models; see Zhong et al. (2022) [49]. Subsequently, deep learning for PLMs via quantile regression -
has been extended in multiple directions, including high-dimensional PLMs (Wang (2025) [45]) and dependent data PLMs (see Brown (2024) [5] for stationary β-mixing sequences). In a different direction, Wen et al. (2016) [46] introduce sparse DNNs with ReLU activation function to fit unknown nonlinear function g0, yielding saving computational resources and mitigating overfitting. Further, Schmidt-Hieber (2020) [38] establishes several non-asymptotic properties of the DNNs with the aforementioned sp-
arse structure, including upper bounds on covering numbers and approximation rates for H ̈older smooth functions, which provides essential theoretical tools for this paper. In this paper, we adopt the DNN architecture of Wen et al. (2016) [46], while allowing it to expand in width, sparsity level, and depth as the sample size increases. For notational convenience in this section, we write MN for the DNN architecture associated with N samples.
In conclusion, the shortcomings of the aforementioned works are as follows:
• Methods based on LSE (e.g., [8, 11, 12, 14, 15, 17, 30, 40]) are so sensitive to outliers that a single outlier can lead to completely unreliable estimates (see Hubert and Ronchetti (2009) [23] for details).
• The existing methods of estimating unknown functions, e.g. [14, 45, 50], often let the regularization term exhibit very simple form (or even omit it). However, the estimator is usually apriori assumed to be sparse, flat, smooth and so on, leading to the nonconvex and nonsmooth regularization term, which is beyond the scope of the existing theoretical framework.
• Although the existing works such as [45, 49, 50] assume that the DNN architecture MN expands (in width, depth, and sparsity level) as the sample size increases, the proofs of consistency and asymp
3

totic normality rely on the fixed network architecture. This creates an inconsistency of the existing theoretical framework.
• Methods assuming additivity of the nonlinear term g0 are not amenable to modeling the interaction among covariates (e.g., [20, 25, 28, 29, 41]).
• Nonparametric methods (e.g., [16, 19, 35]) do not leverage the known linear structure of β0⊤X. As a result, such methods require many unnecessary parameters to approximate β0⊤X, which can lead to the curse of dimensionality, especially when the dimension of X is high.
In this paper, we propose estimator (2) to address the above issues. Concretely, the contributions are as follows.
• We establish the consistency, convergence rate and asymptotic normality of estimator (2). Notably, the nonconvex and nonsmooth regularization term of (2) invalidates the use of classical differential calculus (e.g., the chain and sum rules) on the penalized LAD criterion. This is a critical issue because a key step in establishing asymptotic normality for M-estimators relies on analyzing the differential properties of the objective function; see [50]. Hence, we need to demonstrate that aforement-
ioned regularization term exhibit the chain rule, additive properties and the projection theorem of partial limiting subgradient, necessitating the tools from infinite-dimensional variational and nonsmooth analysis (e.g. Mordukhovich subgradient, epi-convergence and generalized cone).
• The expansion (in width, depth and sparsity level) of MN architecture causes the covering number of candidate estimators to approach infinity, rendering the classic methodology (for proving consistency and asymptotic normality) inapplicable; see [43,45,50] for details. To address this issue, we characterize the growth rate of the covering number and the entropy of the candidate estimators, and demonstrate the universal convergence of the criterion function (2).
• The oracle of estimator (2) is equivalent to a nonconvex and discontinuous optimization problem. A significant computational challenge arises when using proximal gradient-type methods, as the computational cost mainly depends on the projection operator. To balance computational tractability and precision, we propose two approaches. First, for the primal formulation, we derive a closed-form solution for the projection onto the sparse constraint. This result allows us to directly analyze the compu-
tational complexity of the proximal algorithm. Second, we approximates the primal optimization problem with a sequence of coordinate convex relaxation problems, and prove that such approximated problem converges to the primal problem. The relaxed formulation admits significantly cheaper proximal updates, reflecting an inherent trade-off between statistical accuracy and computational tractability.
• To evaluate the optimization error, we establish the global convergence of the proximal stochastic subgradient method for both the primal and approximate formulations of the penalized LAD regression problem (3). Our proof leverages the Lyapunov framework developed by [4, 9, 10], and the core of our analysis is to show the Weak Sard Property. To prove this property, we employ tools from differential and algebraic geometry, including Whitney stratification, Sard’s theorem, and the chain rule for l-
ocally Lipschitz functions. To establish the Weak Sard Property, we partition the feasible set into a collection of disjoint smooth manifolds, and the penalized LAD cost is smooth on each manifold. We then use the classical gradient of local mollifier to cover the Clarke subgradient of the penalized LAD cost. By applying the standard Sard’s theorem to such the local mollifiers on each piece of the partition, the Weak Sard Property is deduced.
4

2 Preliminaries
Notation: For A ∈ Rm×n, we define σmin(A) := min∥x∥2=1 ∥Ax∥2. The graph of f , denoted by graph(f ), is defined as graph(f ) := {(x, f (x)) ∈ Rn × Rm | x ∈ dom(f )}. For n ≥ 1, the set [n] denotes {1, . . . , n}. S be a subset of a topological space X. A point x is a cluster point of the set S if every neighbourhood of x contains infinitely many points of S different from x itself. Let Cluster(S) denote the set of all the cluster points of S. For a set A, let ∥A∥ := supa∈A ∥a∥. Given a set of func-
tions F , we define ∥G∥F = supf∈F |G(f )|. For a sub-Gaussian random variable X, its ψ2-norm is defined as ∥X∥ψ2 = inf{t > 0 : E[exp(X2/t2)] ≤ 2}. Let P denote the true distribution of the observations and Pn the empirical measure based on a sample X1, . . . , Xn, that is, Pnf = 1
n
Pn
i=1 f (Xi) and P f = EP [f (X)]. The empirical process Gn is then defined by
Gnf = √n(Pn − P )f . For the empirical measure Pn = 1
n
Pn
i=1 δXi , the empirical Lp space is defined as
Lp(Pn) =
n
f measurable : ∥f ∥Lp(Pn) =
Z
|f |p dPn
1/p
=1
n
n
X
i=1
|f (Xi)|p 1/p
<∞
o
.
We use the soft O-notation Oe(·) to suppress polylogarithmic factors in complexity bounds. Formally, f (n) =
Oe(g(n)) if there exists a constant k > 0 such that f (n) = O g(n) logk n . The convex hull of the set C,
defined as
conv(C) :=
(k X
i=1
λixi xi ∈ C, λi ≥ 0,
k
X
i=1
λi = 1, k ∈ N
)
.
We use the notation f (x) ≲ g(x) to mean that there exists a constant C > 0, independent of the relevant variables, such that f (x) ≤ Cg(x). Given a probability space (Ω, F, P ), define
• P ∗(A): Outer measure of a set A ⊆ Ω, defined as P ∗(A) := inf{P (B) | B ∈ A, A ⊆ B}.
• E∗[X]: Outer expectation of a function X : Ω → R, defined as E∗[X] := inf {E[Y ] | Y measurable, Y ≥ X}.
Let L2(m) be the space of square-integrable functions with respect to Lebesgue measure m. The identity map on L2(m) is a linear operator I : L2(m) → L2(m) such that for every function f ∈ L2(m),
I(f ) = f.
Furthermore, we define set-valued mapping
sign∗(t) =

 
 
1 t > 0,
−1 t < 0,
[−1, 1] t = 0,
and signum function
sign(t) =
( 1 t ≥ 0,
−1 t < 0.
Definition 1 (Covering numbers, Definition 2.1.5 of [43]). The covering number N (ε, F, ∥·∥) is the minimal number of balls {g : ∥g − f ∥ < ε} of radius ε needed to cover the set F. The centers of the balls need not belong to F, but they should have finite norms. The entropy (without bracketing) is the logarithm of the covering number.
Definition 2 (Bracketing numbers, Definition 2.1.6 of [43]). Given two functions l and u, the bracket [l, u] is the set of all functions f with l ≤ f ≤ u. An ε-bracket is a bracket [l, u] with ∥u − l∥ < ε. The bracketing
5

number N[ ](ε, F , ∥·∥) is the minimum number of ε-brackets needed to cover F . The entropy with bracketing is the logarithm of the bracketing number. In the definition of the bracketing number, the upper and lower bounds u and l of the brackets need not belong to F themselves but are assumed to have finite norms.
Definition 3 (Generalized normals, Definition 1.1 of [32]). Let Ω be a nonempty subset of X. Given x ∈ Ω and ε ≥ 0, define the set of ε-normals to Ω at x by
Nbε(x; Ω) :=
(
x∗ ∈ X∗ lim sup u−Ω →x
⟨x∗, u − x⟩
∥u − x∥ ≤ ε
)
.
When ε = 0, elements of (1.2) are called Fr ́echet normals and their collection, denoted by Nb(x; Ω), is the prenormal cone to Ω at x. If x ∈/ Ω, we put Nbε(x; Ω) := ∅ for all ε ≥ 0.
Definition 4 (Sequential Normal Compactness, Definition 1.20 of [31]). A set Ω ⊂ X is Sequentially Normally Compact (SNC) at x ̄ ∈ Ω if for any sequence (εk, xk, x∗
k) ∈ [0, ∞) × Ω × X∗ satisfying
εk ↓ 0, xk → x ̄, x∗
k ∈ Nbεk (xk; Ω) , and x∗
k
w∗
−−→ 0
one has ∥x∗
k∥ → 0 as k → ∞.
Definition 5 (Sequential Normal Epi-Compactness of functions, Definition 1.116 of [31]). Let φ : X → R ̄ be finite at x ̄. We say that φ is Sequentially Normally Epi-Compact (SNEC) at x ̄ if its epigraph is sequentially normally compact at(x ̄, φ(x ̄)).
Definition 6 (Subderivatives, Definition 8.1 of [34]). For a function f : Rn → R and a point x ̄ with f (x ̄) finite, the subderivative function df (x ̄) : Rn → R is defined by
df (x ̄)(w ̄) := lim inf
τ ↓0 w→w ̄
f (x ̄ + τ w) − f (x ̄) τ
Definition 7 (Subdifferentials of extended-real-valued functions, Definition 1.32 of [32]). Let φ : X → R be an extended-real-valued function on a Banach space X.
(i) Given ε ≥ 0 and x ∈ dom φ, the set
∂bεφ(x) := x∗ ∈ X∗ lim inf
u→x
φ(u) − φ(x) − ⟨x∗, u − x⟩
∥u − x∥ ≥ −ε
is the ε-subdifferential of φ at x. The set ∂b0φ(x) is denoted by
∂bφ(x) := x∗ ∈ X∗ lim inf
u→x
φ(u) − φ(x) − ⟨x∗, u − x⟩
∥u − x∥ ≥ 0
and is called the presubdifferential or the regular subdifferential of φ at this point. We put ∂bεφ(x) := ∅ for all ε ≥ 0 if x ∈/ dom φ.
(ii) Define the (basic, limiting) subdifferential of φ at x ̄ ∈ dom φ by
∂φ(x ̄) = Lim sup
x−φ →x ̄
ε↓0
∂ˆεφ(x).
(iii) The singular subdifferential of φ at x ̄ ∈ dom φ is defined by
∂∞φ(x ̄) := Lim sup
x−φ →x ̄
ε,λ↓0
λ∂ˆεφ(x).
We put ∂φ(x ̄) := ∅ and ∂∞φ(x ̄) := ∅ for x ̄ ∈/ dom φ.
6

Definition 8 (Clarke subdifferential, Definition 1 of [4]). The Clarke subdifferential ∂Cf (x) of f at x is the set
∂C f (x) =
(
conv {∂f (x) + ∂∞f (x)} if x ∈ dom f,
∅ if x ∈/ dom f.
Definition 9 (Constructions of second-order subdifferentials, Definition 1.46 of [32]). Let φ : X → R be an extended-real-valued function on a Banach space X, let x ̄ ∈ domφ, and let v ̄ ∈ ∂φ(x ̄) be a first-order subgradient from Definition 7. Define:
(i) The mapping ∂2
N φ(x ̄, v ̄) : X∗∗ ⇒ X∗ with the values
∂2
N φ(x ̄, v ̄)(u) := (D∗
N ∂φ)(x ̄, v ̄)(u), u ∈ X∗∗,
is the normal second-order subdifferential of φ at x ̄ relative to v ̄.
(ii) The mapping ∂2
M φ(x ̄, v ̄) : X∗∗ ⇒ X∗ with the values
∂2
M φ(x ̄, v ̄)(u) := (D∗
M ∂φ)(x ̄, v ̄)(u), u ∈ X∗∗,
is the mixed second-order subdifferential of φ at x ̄ relative to v ̄.
(iii) The mapping ∂ˇ2φ(x ̄, v ̄) : X∗∗ ⇒ X∗ with the values
∂ˇ2φ(x ̄, v ̄)(u) := (Dˆ ∗∂φ)(x ̄, v ̄)(u), u ∈ X∗∗,
is the combined second-order subdifferential of φ at x ̄ relative to v ̄.
For the definition of co-derivative D∗
N , see [32].
Definition 10 (Lower closure, Page 14 of [34]). The function is lower semi-continuous and is the greatest of all the lower semi-continuous functions g such that g ≤ f . It is called the lower closure of f , denoted by clf .
Definition 11 (Lower and upper epi-limits, Definition 7.1 of [34]). For any sequence {f v}v∈N of functions on Rn, the lower epi-limit e-liminfvf v is the function having as its epigraph the outer limit of the sequence of sets epif v:
epi(e-liminfvf v) =. limsupv(epif v).
The upper epi-limit e-limsupvf v is the function having as its epigraph the inner limit of the sets epif v:
epi(e-limsupvf v) =. liminfv(epif v).
When these two functions coincide, the epi-limits function e-limf v is said to exist:
e-limf v =. e-liminfvf v = e-limsupvf v.
Definition 12 (O-minimal structure, Definition 6 of [4]). An o-minimal structure is a sequence of Boolean algebras Od of subsets of Rd such that for each d ∈ N:
(i) if A belongs to Od, then A × R and R × A belong to Od+1;
(ii) if π : Rd × R → Rd denotes the coordinate projection onto Rd, then for any A in Od+1 the set π(A) belongs to Od;
(iii) Od contains all sets of the form {x ∈ Rd : p(x) = 0}, where p is a polynomial on Rd;
7

(iv) the elements of O1 are exactly the finite unions of intervals (possibly infinite) and points.
The sets A belonging to Od, for some d ∈ N, are called definable in the o-minimal structure.
Definition 13 (Lyapunov condition, Assumption B of [9]). Let X be a closed set and let G : X ⇒ Rd be a set-valued map. Then an arc z : R+ → Rd is called a trajectory of G if it satisfies the differential inclusion z ̇(t) ∈ G(z(t)) for a.e. t ≥ 0. there exists a continuous function φ : Rd → R, which is bounded from below, and such that the following two properties hold.
• (Weak Sard) For a dense set of values r ∈ R, the intersection φ−1(r) ∩ G−1(0) is empty.
• (Descent) Whenever z : R+ → Rd is a trajectory of the differential inclusion and 0 ∈/ G(z(0)), there exists a real T > 0 satisfying
φ(z(T )) < sup
t∈[0,T ]
φ(z(t)) ≤ φ(z(0)).
Definition 14 (Chain rule, Definition 5.1 of [9]). Consider a locally Lipschitz function f on Rd. We will say that f admits a chain rule if for any absolutely continuous curves z : R+ → Rd, equality
(f ◦ z)′(t) = ⟨∂C f (z(t)), z′(t)⟩ holds for a.e. t ≥ 0,
Definition 15 (Smooth manifold, tangent space and normal space, Page 13, Page 51 and Page 138 of [27]). A set M ⊂ Rd is a Cp smooth manifold if there is an integer r ∈ N such that around any point x ∈ M , there is a neighborhood U and a Cp-smooth map F : U → Rd−r with ∇F (x) of full rank and satisfying M ∩ U = {y ∈ U : F (y) = 0}. If this is the case, the tangent and normal spaces to M at x are defined to be TM (x) := Null(∇F (x)) and NM (x) := (TM (x))⊥, respectively.
Definition 16 (Whitney stratification, Definition 5.6 of [9]). A Whitney Cp-stratification A of a set Q ⊂ Rd is a partition of Q into finitely many nonempty Cp manifolds, called strata, satisfying the following compatibility conditions.
• Frontier condition: For any two strata L and M , the implication
L ∩ cl M ̸= ∅ =⇒ L ⊂ cl M holds.
• Whitney condition: For any sequence of points zk in a stratum M converging to a point z ̄ in a stratum L, if the corresponding normal vectors vk ∈ NM (zk) converge to a vector v, then the inclusion v ∈ NL(z ̄) holds.
A function f : Rd → R is Whitney Cp-stratifiable if its graph admits a Whitney Cp-stratification.
Definition 17 (H ̈older formulation class, Page 7 of [38]). Let γ and B be two positive constants and ⌊γ⌋ denote the largest integer strictly less than γ. We call a function h : T ⊂ Rq → R a (γ, B)-H ̈older smooth function if it satisfies
sup
z∈T
∂|α|h
∂α1 z1 . . . ∂αq zq
(z) ≤ B, for all α = (α1, . . . , αq)⊤ ∈ Nq and |α| =
q
X
i=1
αi ≤ ⌊γ⌋,
and
sup
z ,z ∗ ∈T
∂|α|h
∂α1 z1 . . . ∂αq zq
(z) − ∂|α|h
∂α1 z1 . . . ∂αq zq
(z∗) ≤ B∥z − z∗∥γ−⌊γ⌋
2 , for all |α| = ⌊γ⌋.
8

Denote the class of all such (γ, B)-H ̈older smooth functions as Hqγ(T, B). Let J ∈ N, γ = (γ1, . . . , γJ )⊤ ∈ RJ+,
d = (q, d1, . . . , dJ )⊤ ∈ NJ+1 and d ̄ = (d ̄1, . . . , d ̄J )⊤ ∈ NJ with d ̄1 ≤ q and d ̄k ≤ dk−1, k = 2, . . . , J . We further define a composite function class:
H(J, γ, d, d ̄, B) =
n
h =hJ ◦ . . . ◦ h1 : T → R | hk = (hk1, . . . , hkdk )⊤ and
hkj ∈ Hγk
d ̄k ([ak, bk]d ̄k , B) for some |ak|, |bk| ≤ B
o
.
(5)
We call d ̄ the intrinsic dimension of the function h in H(J, γ, d, d ̄, B).
Definition 18 (Dual operator, Theorem 5.11-1 of [6]). Let X and Y be two normed vector spaces over the same field K. Given any operator A ∈ L(X; Y ), there exists one and only one operator A∗ ∈ L (Y ∗; X∗), called the dual operator of A, or simply the dual of A, such that
A∗y∗(x) = y∗(Ax) for all x ∈ X and all y∗ ∈ Y ∗.
Besides, ∥A∗∥L(Y ∗;X∗) = ∥A∥L(X;Y ).
Notations of Deep Neural Networks (DNN). Let L ≥ 2 be an integer representing the number of layers, and let q = (q0, q1, . . . , qL)⊤ ∈ NL+1 define the number of neurons in each layer. An L-layer neural network is a function g : Rq0 → RqL that maps a q0-dimensional input to a qL-dimensional output. It is defined by the following composition of functions:
m0(z) = z,
m1(z) = σ1(W1m0(z) + b1),
...,
mL−1(z) = σL−1(WL−1mL−2(z) + bL−1),
g(z) = WLmL−1(z) + bL,
(6)
where for each layer k = 1, . . . , L, Wk is a qk × qk−1 weight matrix and bk is a qk-dimensional bias vector. The term mk for 1 ≤ k ≤ L − 1 represents the output of the k-th hidden layer, and L is the depth of the network. The functions σk : Rqk → Rqk for k = 1, . . . , L − 1 are activation functions that operate elementwise on their input vectors. That is, for a vector v = (v1, . . . , vqk )⊤, σk(v) = (σ(v1), . . . , σ(vqk ))⊤, where σ : R → R is a scalar activation function (e.g., ReLU, Sigmoid-
). Note that the final layer (layer L) has no activation function, a common configuration for regression tasks. To simplify the notation, we can absorb the bias vector bk into the weight matrix Wk. This is achieved by defining an augmented weight matrix W ̃ k = (Wk, bk) ∈ Rqk×(qk−1+1) and appending a 1 to the input of each layer. For instance, the network’s input z is augmented to z ̃ = (z⊤, 1)⊤. This requires a corresponding modification of the activation functions. For each hidden layer k = 1, .-
 . . , L − 1, we define an operator φk that first applies the activation σk and then appends a 1 to the resulting vector: φk(v) = (σk(v)⊤, 1)⊤.
With these definitions, the neural network in (6) can be expressed more compactly as a composition of matrix-vector products and activation operators:
g(z) = W ̃ L ◦ φL−1 ◦ W ̃ L−1 ◦ · · · ◦ φ1 ◦ W ̃ 1(z ̃). (7)
Note that the total number of parameters in (7) is PL
k=1 qk(qk−1 + 1), which can be very large and may lead to overfitting. For s ∈ N, L ≥ 2, A > 0 and q = (q0, q1, . . . , qL)⊤, we consider a sparsely connected neural network class
M(s, L, q, A) =
n
g(z) =WLφL−1 ◦ · · · ◦ W2φ1(W1z ̃) | Wk ∈ Rqk×(qk−1+1), ∥Wk∥∞ ≤ 1 for
k = 1, . . . , L,
L
X
k=1
∥Wk∥0 ≤ s and ∥g∥∞ ≤ A
o
,
(8)
9

z1
z2
z3
z4
input-layer hidden-layer 1 hidden-layer 2
m(z)
output-layer
Figure 1: A 3-layer neural network with four input variables and one output.
where ∥ · ∥∞ is the sup-norm of a matrix or function and ∥ · ∥0 is the number of non-zero elements of a matrix.
3 Statistical Perspective
To solve (2), we parametrize the nonlinear term g by DNN and rewrite the problem (2) as
min
β∈Rd
C ,g∈M(s,L,q,C)
1 N
N
X
i=1
Yi − β⊤Xi − g(Zi) + λN JN,M (β, g) (9)
with parameters of DNN W := (W1, . . . , WL). Due to the DNN structure of M, (9) can be rewritten into the following finite-dimension form:
min
β,W
1 N
N
X
i=1
Yi − β⊤Xi − g(W; Zi) + λN JN,M (β, g(W)),
s.t. ∥Wk∥∞ ≤ 1, for k = 1, . . . , L,
L
X
k=1
∥Wk∥0 ≤ s
(10)
for given L, s. JN,M (β, g(W)) (or equivalently denoted as JN,M (β, W)) can be any bounded regulation term. For example JN,M (β, g(W)) = |∂Z g(W; Z)| ∧ M .
Remark 1. The norm of the Jacobian of g with respect to the input Z is used as a penalty term in DNN training to prevent overfitting and improve robustness against input data corruption [21]. Furthermore, this Jacobian term can be efficiently computed using the standard backpropagation algorithm [24].
For some J ∈ N, γ = (γ1, . . . , γJ ) ∈ RJ+, d = (q, d1, . . . , dJ )⊤ ∈ NJ+1 and d ̄ = (d ̄1, . . . , d ̄J )⊤ ∈ NJ with
d ̄1 ≤ q and d ̄k ≤ dk−1, k = 2, . . . , J, we define the effective smoothness γ ̄k = γk
QJ
i=k+1(γi ∧ 1) of a function
h in H(J, γ, d, d ̄, B), and write
ζ = min
k∈{1,...,J }
γ ̄k
2γ ̄k + d ̄k
and rN = N −ζ .
10

For the covariate X = (X(1), . . . , X(d))⊤, we define
φ∗
k = arg min
φ∈L2(PZ )
E[fε(0|V ){X(k) − φ(Z)}2], k = 1, . . . , d, (11)
where L2(PZ ) = {φ | Eφ2(Z) < ∞}. And denote φ∗(Z) = (φ1∗(Z), . . . , φ∗
d(Z))⊤, Σ1 = E[{X − φ∗(Z)}{X − φ∗(Z)}⊤] and Σ2 = E[fε(0|X, Z){X − φ∗(Z)}{X − φ∗(Z)}⊤].
We consider the joint probability space (Ω, F, Pb) for the random variables (X, Z, ε). Here, the sample space Ω = ΩX × ΩZ × Ωε is the product of their sample spaces, F is the corresponding product σ-algebra, and Pb is their joint probability measure. Furthermore, we define the probability space (Ω∞ := Q∞
i=1 Ωi, F ∞ :=
σ(Q∞
i=1 F i), P ) for the sequence of samples ((Xi, Zi, εi))∞
i=1, where Ω∞ denotes the product space and F ∞ is the corresponding product σ-algebra. Furthermore, we assume P (ε ≤ 0) = 1
2 . For simplicity in the subsequent analysis, we let E[·] = EU [·].
Let Rd
C = {β ∈ Rd | ∥β∥∞ < C}, we define
(βˆN , gˆN ) ∈ arg min
β∈Rd
C ,g∈MN
C
LN (θ) + λN JN,M (β, g) (12)
with LN (θ) := 1
N
PN
i=1 Yi − β⊤Xi − g(Zi) .
Assumption 1. We introduce the following assumptions.
(A1) The true vector parameter β0 belongs to a compact subset Rd
C := {β ∈ Rd | ∥β∥∞ < C} and the true
nonparametric function g0 satisfies ∥g0∥∞ < C and belongs to H = H(J, γ, d, d ̄, B).
(A2) There exists a constant A0 > 0 s.t. σmin(Σ2) > A0 and σmin(E[(X − E[X|Z])(X − E[X|Z])⊤]) > A0.
(A3) The covariates V = (X, Z) take values in a compact subset of Rd+l that, without loss of generality, will be assumed to be [0, 1]d+l. In addition, the probability density function (PDF) of Z is bounded away from zero and from infinity.
(A4) L = O(log N ), s = O(N r2
N log N ), λN = o(1) and
N r2
N ≲ min
k=1,...,L{qk} ≤ max
k=1,...,L{qk} ≲ N.
(A5) The conditional PDF fε(·|v) of the random error ε given the covariate V = v, has continuous derivative
f′
ε(·|v), and there exist positive constants b0 and c0 such that 1/c0 < fε(t|v) < c0 and |f ′
ε(t|v)| < d0 for all |t| ≤ b0, v ∈ [0, 1]d+l. Furthermore, we assume E[|ε||V = v] < ∞ for any v ∈ [0, 1]d+l.
(A6) For any k ∈ {1, . . . , J}, γ ̄k > d ̄k/2, and E[∥X∥2] < ∞.
(A7) In addition, there exists Bf > 0 such that f (t|v) ≤ Bf for all t ∈ R and v ∈ [0, 1]d+l.
(A8) JN,M is separable i.e. JN,M (β, g) = JN,1(β) + JN,2(g); JN,M is lower semi continuous (l.s.c.) and SN EC on Rd
C × MN
C , and let the qualification condition
h
(0, v∗) ∈ ∂∞
(ξ,h)JN,M (β, g)
i
=⇒ v∗ = 0
with ξ = β − β0, h(Z) = g(Z) − g0(Z) + (β − β0)⊤φ∗(Z) for any (ξ, h) ∈ Rd
C × MN
C;
λN (∥∂gJN,2∥∗ + ∥∂βJN,1∥) = op √1N . Here, ∥ · ∥∗ denotes the operator norm in L2(m) space with
Lebesgue measure m.
11

Theorem 1. Suppose Assumptions (A1)-(A5) hold. Then the estimators βˆN and gˆN from optimization problem (12) exhibit the following rates of convergence:
∥βˆN − β0∥∞ = Op(rN log2 N + λN ),
∥gˆN − g0∥L2(P ) = Op(rN log2 N + λN ).
Proof. Let θˆN = (βˆN , gˆN ), θ0 = (β0, g0) and d(θ1, θ2) = [E{X⊤β1 + g1(Z) − X⊤β2 − g2(Z)}2]1/2, for any θ1 = (β1, g1) and θ2 = (β2, g2). We first show that
d(θˆN , θ0) →p 0, as N → ∞. (13)
We first show that sup
θ∈Rd
C ×MN
C
|LN (θ) + λN JN,M (θ) − L0(θ)| −p→ 0, as N → ∞. (14)
with L0(θ) := E Y − β⊤X − g(Z) . Based on the assumption of λN and the definition of JN,M (θ), it suffices to show sup
θ∈Rd
C ×MN
C
|LN (θ) − L0(θ)| −p→ 0, as N → ∞. (15)
Denote FN := {f (x, y, z) := |y − β⊤x − g(z)|, ∀(x, y, z) ∈ R × [0, 1]d+l | (β, g) ∈ Rd
C × MN
C }. Notably, F (x, y, z) := |y| + 2C is an envelope function of FN with EF < ∞. Based on Theorem 2.4.6 of [43], it holds
that
E∗∥PN − P ∥FN
(I)
≤ E∗
U,e
1 N
N
X
i=1
eif (Ui)
FN
(I=I)2EEe
1 N
N
X
i=1
eif (Ui)
FN
(III)
≤ 2EEe
1 N
N
X
i=1
eif (Ui)
FN ∧q
+ EF 1{F > q}
(IV)
≤ 2E



p1 + log N (ε, FN ∧ q, L1(PN )) sup
f ∈GN
1 N
N
X
i=1
eif (Ui)
ψ2 |U



+ 2ε + εF
| {z }
:=εˆ
≤2E
(
p1 + log N (ε, FN ∧ q, L1(PN ))
r6
Nq
)
+ εˆ
(16)
with FN ∧ q = {f ∧ q | f ∈ FN }. Here, inequality (I) holds due to Lemma 2.3.1 of [43], where e1, . . . , eN are i.i.d. Rademacher random variables. The inequality (II) holds due to the measurability
of 1
N
PN
i=1 eif (Ui)
FN
and Fubini Theorem. Indeed, Schmidt-Hieber (2020) proves
log N (ε, MN
C , ∥ · ∥∞) ≤ (s + 1) log 2H2(L + 1)
ε (17)
with H := QL
k=1(qk + 1); see Lemma 5 of [39] for details. Combining with the fact that β ∈ Rd
C , we
may conclude that there exists a countable dense subset {f ̃i}i≥0 of FN . Thus, 1
N
PN
i=1 eif (Ui)
FN
equals
1 N
PN
i=1 eif (Ui)
{f ̃i }i≥0
, and is of course P -measurable. Therefore, in this paper, we no need to distinguish
the outer measure (expectation) and classic measure (expectation). Furthermore, we denote GN is an ε-net in L1(PN ) over FN ∧ q, while inequality (IV) holds for any εF > 0 by selecting sufficiently large q.
12

Due to the triangle inequality, ∀f1, f2 ∈ FN ∧ q, we have
∥f1 − f2∥∞ ≤ sup
∀x,z∈[0,1]d+l
|g1(z) − g2(z) + (β1 − β2)⊤x| ≤ ∥g1 − g2∥∞ + ∥β1 − β2∥∞.
Hence, by (17), it is easy to show that
N (ε, FN ∧ q, L1(PN )) ≤N (ε, FN ∧ q, ∥ · ∥∞)
≤N ε
2 , MN
C , ∥ · ∥∞ N ε
2 , Rd
C , ∥ · ∥∞
≤KεN ε
2 , MN
C , ∥ · ∥∞ ,
(18)
where the first inequality holds due to ∥f ∥L1(PN ) ≤ ∥f ∥∞, for any f ∈ FN ∧ q and discrete measure PN combining with the nature of ε-net. Moreover, the second inequality holds due to Heine–Borel Theorem in which Kε = N ε
2 , Rd
C , ∥ · ∥∞ . Substituting (18) into (16), it holds that
E∥PN − P ∥FN ≤2E
(r
1 + log KεN ε
2 , MN
C , ∥ · ∥∞
r6
Nq
)
+ εˆ
≤2E
(s
1 + log(Kε) + (s + 1) log 4H2(L + 1)
ε
r6
Nq
)
+ εˆ (By(17)).
Due to Assumption (A4), the integrand is
s
1 + log(Kε) + (s + 1) log 4H2(L + 1)
ε
r6
N q = O(rN log 3
2 N ) = o(1).
This completes the proof of (15).
We now prove
inf
d(θ,θ0 )>ε,θ∈Rd
C ×M∞
C
L0(θ) > L0(θ0) (19)
with M∞
C = ∪∞
i=1Mi
C. According to the equation (C.46) of [3], for any two scalars a, b, it holds that
|a − b| − |a| = −b 1
2 − 1{a ≤ 0} +
Zb
0
(1{a ≤ t} − 1{a ≤ 0})dt. (20)
For any θ ∈ Rd
C × conv(M∞
C ), we denote Λ(θ; V ) := X⊤β + g(Z) and Λ(θ0; V ) := X⊤β0 + g0(Z). Taking a = Y − Λ(θ0; V ) and b = Λ(θ; V ) − Λ(θ0; V ) into (20), we have
L0(θ) − L0(θ0)
=E
"
−b 1
2 − 1{a ≤ 0} +
Zb
0
(1{a ≤ t} − 1{a ≤ 0})dt
#
(V=)E
"
Zb
0
(1{a ≤ t} − 1{a ≤ 0})dt
#
=EV
"
EY
"
Z Λ(θ;V )−Λ(θ0;V )
0
1{Y − Λ(θ0; V ) ≤ t} − 1{Y − Λ(θ0; V ) ≤ 0}dt V
##
=EV
"
Z Λ(θ;V )−Λ(θ0;V )
0
FY |V (Λ(θ0; V ) + t) − FY |V (Λ(θ0; V ))dt
#
=EV
"
Z Λ(θ;V )−Λ(θ0;V )
0
tfY |V (Λ(θ0; V )) + t2
2 f′
Y |V (Λ(θ0; V ) + t ̄V,t)dt
#
(VI)
≥1
2c0
EV
h
|Λ(θ; V ) − Λ(θ0; V )|2i
− d0
6 EV
h
|Λ(θ; V ) − Λ(θ0; V )|3i
(21)
13

with t ̄V,t between 0 and t. The equality (V) holds due to
E −b 1
2 − 1{a ≤ 0}
=EV
"
EY
"
(Λ(θ; V ) − Λ(θ0; V )) 1
2 − 1{Y − Λ(θ0; V ) ≤ 0} V
##
=EV
"
EY
"
(Λ(θ; V ) − Λ(θ0; V )) 1
2 − 1{Y − Λ(θ0; V ) ≤ 0} V
##
=EV
"
(Λ(θ; V ) − Λ(θ0; V ))EY
"
1
2 − 1{ε ≤ 0} V
##
=0,
while the inequality (VI) holds due to Assumption (A1) and (A5).
Let
q ̄(θ) :=
1 c0
3
2 EV
h
|Λ(θ; V ) − Λ(θ0; V )|2i 3
2
d0EV
h
|Λ(θ; V ) − Λ(θ0; V )|3i
and consider the case 1
c0 EV [|Λ(θ; V ) − Λ(θ0; V )|2]
1
2 ≤ q ̄(θ). It holds that
d0EV
h
|Λ(θ; V ) − Λ(θ0; V )|3i
≤1
c0
EV
h
|Λ(θ; V ) − Λ(θ0; V )|2i
.
Then we have
L0(θ) − L0(θ0) ≥ 1
3c0
EV
h
|Λ(θ; V ) − Λ(θ0; V )|2i
=1
3c0
d(θ, θ0)2. (22)
Next, we consider the case 1
c0 EV
h
|Λ(θ; V ) − Λ(θ0; V )|2i 1
2 > q ̄(θ). Let θ ̃ = ((1 − α)β + αβ0, (1 − α)g + αg0)
such that 1
c0 EV [|Λ(θ ̃; V ) − Λ(θ0; V )|2]
1
2 = q ̄(θ). Then it holds that 1 − α = q ̄(θ)
q1
c0 EV [|Λ(θ;V )−Λ(θ0;V )|2] . On
the other hand, we have
L0(θ) − L0(θ0) ≥ L0(θ ̃) − L0(θ0)
1−α =
r
1
c0 EV
h
|Λ(θ; V ) − Λ(θ0; V )|2i q ̄(θ) (L0(θ ̃) − L0(θ0)). (23)
Note that
q ̄(θ) =
1 c0
3
2 EV
h
|Λ(θ; V ) − Λ(θ0; V )|2i 3
2
d0EV
h
|Λ(θ; V ) − Λ(θ0; V )|3i
=
1 c0
3
2 EV Λ(θ ̃; V ) − Λ(θ0; V )
23
2
d0EV Λ(θ ̃; V ) − Λ(θ0; V )
3
= q ̄3(θ)
d0EV Λ(θ ̃; V ) − Λ(θ0; V )
3.
14

Then we have d0EV Λ(θ ̃; V ) − Λ(θ0; V )
3
= q ̄2(θ). Furthermore, by (21), it holds that
L0(θ ̃) − L0(θ0) ≥ 1
2c0
EV
h
|Λ(θ; V ) − Λ(θ0; V )|2i
− d0
6 EV
h
|Λ(θ; V ) − Λ(θ0; V )|3i
=1
3 q ̄2(θ). (24)
Substituting (24) into (23), we have
L0(θ) − L0(θ0) ≥ q ̄(θ)
3√c0
d(θ, θ0). (25)
Combining (22) and (25), we complete the proof of (19).
We now finish the proof of the consistency. For the function g0, let
g∗
N := argmin
g∈MN
C
∥g − g0∥L2 and θ∗
N := (β0, g∗
N ),
while Schmidt-Hieber (2020) proves
d(θ∗
N , θ0) = O(rN ) → 0, as N → ∞; (26)
see Equation (26) of [39] for details. Due to the definition of d(·, ·), it holds that
|L0(θ∗
N ) − L0(θ0)| = E Y − β⊤
0 X − g∗
N (Z) − E Y − β⊤
0 X − g0(Z)
≤E [|g∗
N (Z) − g0(Z)|]
≤d(θ∗
N , θ0).
Combining with (26), we have
L0(θ∗
N ) ≤ L0(θ0) + o(1). (27)
On the other hand, it is easy to show that
LN (θˆN ) + λN JN,M (θˆN ) ≤LN (θ∗
N ) + λN JN,M (θ∗
N)
L0(θˆN ) + LN (θˆN ) + λN JN,M (θˆN ) − L0(θˆN ) ≤L0(θ∗
N ) + LN (θ∗
N ) + λN JN,M (θ∗
N ) − L0(θ∗
N ).
(28)
Applying (15) to (28), we have
L0(θˆN ) ≤L0(θ∗
N ) + |LN (θˆN ) + λN JN,M (θˆN ) − L0(θˆN )| + |LN (θ∗
N ) + λN JN,M (θ∗
N ) − L0(θ∗
N )|
≤L0(θ∗
N ) + 2 sup
θ∈Rd
C ×MN
C
|LN (θ) + λN JN,M (θ) − L0(θ)|
(15)
≤ L0(θ∗
N ) + op(1).
Combining with (27), it holds that
L0(θˆN ) ≤ L0(θ0) + o(1) + op(1) ≤ L0(θ0) + op(1). (29)
If there exists ε1 > 0 such thatP (d(θˆN , θ0) > ε1) > 0, then, based on (19),
P (L0(θˆN ) > L0(θ0) + ε2) > P (d(θˆN , θ0) > ε1) > 0
holds for some ε2 > 0, which contradicts with (29). This completes the proof of (13).
We now prove that d(θˆN , θ0) = Op(rN log2 N + λN ), (30)
15

following the line of Theorem 3.4.6 of [43]. We set the parameters ({θn}n∞=1, {θn,0}n∞=1, c, {δn}n∞=1, {λn}n∞=1) of Theorem 3.4.6 of [43] to our counterparts ({θ∗
N }∞
N=1, {θ0}∞
N=1, 0, {0}∞
N=1, {λN }∞
N=1), respectively. Furthermore, we write R := 2H2(L + 1) and
AN
δ = {θ ∈ Rd
C × MN
C | d(θ, θ0) ≤ δ}. (31)
By Theorem 3.4.6 of [43], it suffices to verify that, for any δ > 0,
δ2 ≲ inf
θ∈Rd
C ×MN
C: δ
2 <d(θ,θ0)≤δ
L0(θ) − L0(θ0), (32)
E

  
sup
θ∈AN
δ,
JN,M (θ)<δ/λN
√
N |(LN − L0)(θ∗
N ) − (LN − L0)(θ)|

  
≲ φN (δ) (33)
with φN (δ) = δ
q
s log R
δ + √sN log R
δ.
Indeed, for every M ̃ > 0 there exists a constant γM ̃ > 0 such that Eε [|ε|] − Eε [|ε + μ|] ≤ −γM ̃ |μ|2 for
|μ| ≤ M ̃ . Then for any (β, g) ∈ Rd
C × M∞
C , we have
L0(θ0) − L0(θ) ≲ −γM ̃ d2(θ, θ0) (34)
with M ̃ := sup(β,g)∈Rd
C ×M∞
C 2∥β∥∞ + 2∥g∥∞. Then, (32) holds by taking δ
2 < d(θ, θ0) into (34).
We now verify (33). Denote ρ(θ; U ) := |Y − β⊤X − g(Z)|, ∀U = (X, Y, Z) ∈ R × [0, 1]d+l and BN
δ= {ρ(θ∗
N ; U ) − ρ(θ; U ) | θ ∈ AN
δ }. For any θ, θ1 ∈ AN
δ , we have E|ρ(θ; U ) − ρ(θ1; U )|2 ≤ 4d2(θ, θ1). Lemma 5 of [39] then implies that
log N[ ](ε, BN
δ , L2(P )) ≤ log N[ ](ε, BN
δ , ∥ · ∥∞)
(VII)
≤ log N (ε, BN
δ , ∥ · ∥∞)
≤ log (N (ε, FN , ∥ · ∥∞))
≤ log KεN ε
2 , MN
C , ∥ · ∥∞ (by (18))
≲ log(Kε) + s log R
ε (By(17))
(35)
where N[ ](ε, BN
δ , L2(P )) (N[ ](ε, BN
δ , ∥ · ∥∞)) is the bracket number of BN
δ with L2(P ) norm (L∞ norm). The inequality (VII) holds due to Page 132 of [43]. Henceforth, it follows that
J[ ](δ, BN
δ )=
Zδ
0
q
1 + log N[ ](ε, BN
δ , L2(P )) dε ≲ δ
r
s log R
δ,
where the last inequality holds by noticing
Zδ
0
r
log R
ε dε = δ
r
log R
δ + R√π
2 erfc
r
log R
δ
!
≲δ
r
log R
δ (36)
with erfc(x) = √2π
R∞
x e−t2 dt. By Lemma 3.4.2 of [43], we conclude that
E
"
sup
β∈AN
δ ,JN,M (θ)<δ/λN
√
N |(LN − L0)(θ∗
N ) − (LN − L0)(θ)|
#
=E
"
sup
β∈AN
δ ,JN,M (θ)<δ/λN
|GN (ρ(θ∗
N ; U ) − ρ(θ; U ))|
#
≲J[ ](δ, BN
δ)
n J[ ](δ, BN
δ)
δ2√N + 1
o
=φN (δ).
16

Setting δN = ηN = rN log2 N in Theorem 3.4.6 of [43], it can be verified that
1
η2
N
φN (ηN ) ≲
√
N and LN (θˆN ) + λN JN,M (θˆN ) ≤ LN (θ∗
N ) + λN JN,M (θ∗
N ). (37)
Then, by Theorem 3.4.6 of [43], we obtain d(θˆN , θ0) = Op(rN log2 N + λN ) and JN,M (θˆN ) = Op(ηN /λN + 1).
Furthermore, by Assumption (A5),
d2(θˆN , θ0) = E{X⊤(βˆN − β0) + gˆN (Z) − g0(Z)}2
= E[{(X − E[X|Z])⊤(βˆN − β0) + (βˆN − β0)⊤E[X|Z] + gˆN (Z) − g0(Z)}2]
= E[{(X − E[X|Z])⊤(βˆN − β0)}2]
+ E[{(βˆN − β0)⊤E[X|Z] + gˆN (Z) − g0(Z)}2].
(38)
Since the matrix E[{X − E[X|Z]}{X − E[X|Z]}⊤] is positive definite, it follows that ∥βˆN − β0∥∞ = Op(rN log2 N + λN ) and thus ∥gˆN − g0∥L2(P ) = Op(rN log2 N + λN ). This completes the proof.
Theorem 2. Let FδN := {f − g : f, g ∈ FN , ∥f − g∥L2(P ) ≤ δN } with δN = O(rN log2 N ). Under Assumptions (A1)-(A7), it holds that
∥GN ∥FδN
−p→ 0, GN (fˆN ) ⇝ N (0, Σ)
with fˆN = |Y − βˆ⊤
N X − gˆN (Z)| and Σ = VarU (|Y − β0⊤X − g0(Z)|).
Proof. By the Markov inequality and Lemma 2.3.1 of [43], it holds that
P (∥GN ∥FδN > x) ≤ 2
x EU,e
√1N
N
X
i=1
eif (Ui)
FδN
=2
x EEe
√1N
N
X
i=1
eif (Ui)
FδN
≲2
xE
Z∞
0
plog D(ε, FδN , L2(PN ))dε (by Corollary 2.2.9 of [43])
≲2
xE
Z∞
0
plog N (ε, FδN , L2(PN ))dε (39)
=2
xE
"
Z Ξ2
N
0
plog N (ε, FδN , L2(PN ))dε
#
(with Ξ2
N := 1
N
N
X
i=1
f 2(Ui)
FδN
)
(I)
≲2
xE
"
Z Ξ2
N
0
plog N (ε, FN , ∥ · ∥∞)dε
#
≲2
xE
"
Z Ξ2
N
0
s
s log R
ε dε
#
,
where according to N (ε, FδN , L2(PN )) ≲ N 2(ε, FN , L2(PN )) ≤ N 2(ε, FN , ∥ · ∥∞), the inequality (I) holds.
Note that
Ξ2
N = ∥PN f 2∥FδN = ∥P f 2∥FδN + ∥PN f 2 − P f 2∥FδN ≤ δ2
N + ∥PN f 2 − P f 2∥FδN . (40)
17

Taking (40) into (39), we obtain
P (∥GN ∥FδN > x) = 2
xE
"
Z δ2
N +∥PN f 2−P f 2∥FδN
0
s
s log R
ε dε
#
≲2
xE

(δ2
N + ∥PN f 2 − P f 2∥FδN )
v u
u
ts log R
δ2
N + ∥PN f 2 − P f 2∥FδN
!


≤2
xE
"
δ2
N
s
s log R
δ2
N
#
+2
xE
"
∥PN f 2 − P f 2∥FδN
s
s log R
δ2
N
#
≤2
x
Oe(r3
N
√
N) + 2
x
Oe(r2
N
√
N ) (by Assumption (A7))
=o(1) (by Assumption (A3))
(41)
Based on Slutsky’s theorem, we have GN (fˆN ) ⇝ N (0, Σ) with fˆN = |Y − βˆ⊤
N X − gˆN (Z)| and Σ = VarU (|Y − β0⊤X − g0(Z)|).
Theorem 3. Under the assumptions (A1)-(A8), it holds that
√
N (βˆN − β0) ⇝ N (0, Σ−1
2 Σ1Σ−1
2)
Proof. For θˆN = (βˆN , gˆN ), we introduce the following notations: ξ = β − β0, ξˆN = βˆN − β0, h(Z) = g(Z) − g0(Z) + (β − β0)⊤φ∗(Z), ˆhN (Z) = gˆN (Z) − g0(Z) + (βˆN − β0)⊤φ∗(Z) and X ̃ = X − φ∗(Z). These imply that
1 N
N
X
i=1
|Yi − β⊤Xi − g(Zi)| = 1
N
N
X
i=1
|εi − ξ⊤X ̃i − h(Zi)|.
Denote MN (ξ, h) = 1
N
PN
i=1 |εi − ξ⊤X ̃i − h(Zi)|, and we may calculate the subgradient of the loss function MN at ξ as
∂ξMN (ξ, h) = 1
N
N
X
i=1
−sign∗(εi − ξ⊤X ̃i − h(Zi))X ̃i
with Clearly, letting ΨN (ξ, h) := PN ψ(ξ, h) with ψ(ξ, h) = −sign(ε − ξ⊤X ̃ − h(Z))X ̃ , we have ΨN (ξ, h) ∈ ∂ξMN (ξ, h). We further denote
(ξ0, h0(Z)) = (0, 0) ∈ Rd × L2(P ),
Ψ0(ξ, h) = Eψ(ξ, h),
AeN
δ = {(ξ, h) | ξ = β − β0, h(Z) = g(Z) − g0(Z) + (β − β0)⊤φ∗(Z), (β, g) ∈ AN
δ },
CN
δ = {ψ(ξ, h) − ψ(ξ0, h0) | (ξ, h) ∈ AeN
δ },
for the convenience of the following discussions. Although (ξ0, h0) = (0, 0) is constant, we still introduce such notation to articulate the fields ((β, g) or (ξ, h)) to analysis Ψ0 and ΨN .
By analogy to the proof of Theorem 1, we have
log N[ ](ε, AN
δ , ∥ · ∥∞) ≲ s log R
ε.
Let {[li, ui] : li = (βi;l, gi;l), ui = (βi;u, gi;u), i = 1, . . . , K} be the ε-brackets of AN
δ with K = N (ε, AN
δ , L∞(P )), and for any (β, g) ∈ AN
δ , without loss of generality, we assume that [l1, u1] is the ε
18

bracket of (β, g). We may notice that
Z
sign ε − ξ⊤
1;lX ̃ − h1;l(Z) − sign ε − ξ⊤
1;uX ̃ − h1;u(Z)
2
dPε,Xe ,Z
(∆=1)
Z
sign Y − β⊤
1;lX − g1;l(Z) − sign Y − β⊤
1;uX − g1;u(Z) 2 dPY,X,Z
(∆2 )
≤ 4P Y − β⊤
1;lX − g1;l(Z) ≥ 0, Y − β⊤
1;uX − g1;u(Z) < 0
(∆3 )
≲ sup
τ ∈R
P (Y ∈ [τ, τ + (C + 1)ε])
(∆4 )
≲ ε,
where we denote ξ1;ν = β1;ν − β0 and h1;ν (Z) = g1;ν (Z) − g0(Z) + (β1;ν − β0)⊤φ∗(Z) in equality (∆1) with ν ∈ {l, u}. Moreover, inequality (∆2) holds due to sign(Y − β⊤
1;lX − g1;l(Z)) ≥ sign(Y − β1⊤;uX − g1;u(Z)), and inequalities (∆3) and (∆4) hold by Assumption (A3) and (A7). Hence, we can deduce that
log N[ ](ε, CN
δ , L2(P )) ≲ s log R
ε;
thus for any δ > 0,
J[ ](δ, CN
δ )=
Zδ
0
q
1 + N[ ](ε, CN
δ , L2(P ))dε ≲ δ
r
s log R
δ.
Let δN = O(rN log2 N + λN ), it follows
E



sup
(ξ,h)∈CN
δN
√
N [(ΨN − Ψ0)(ξ, h) − (ΨN − Ψ0)(ξ0, h0)]



=E



sup
(ξ,h)∈CN
δN
√
N (PN − P )[ψτ (ξ, h) − ψτ (ξ0, h0)]



(∆5 )
≲ J[ ](δN , CN
δN )
(
J[ ](δN , CN
δN )
δ2
N
√N + 1
)
=o(1),
where the inequality (∆5) holds by Theorem 2.14.18′ of [43]. Since ∥ξˆN ∥ ∨ ∥ˆhN ∥L2([0,1]d) = OP (rN log2 N + λN ), we have
E
√
N [(ΨN − Ψ0)(ξˆN , ˆhN ) − (ΨN − Ψ0)(ξ0, h0)] = o(1),
or, written alternatively,
√
N {Ψ0(ξˆN , ˆhN ) + ΨN (ξ0, h0)} =
√
N {ΨN (ξˆN , ˆhN ) + Ψ0(ξ0, h0)} + op(1). (42)
Let Y ̃i,N = εi − ˆhN (Zi), i = 1, . . . , N. Then ξˆN is the minimizer of M ∗
N (ξ) = 1
N
PN
i=1 |Y ̃i,N − ξ⊤X ̃i| with respect to ξ and
ΨN (ξˆN , ˆhN ) = − 1
N
N
X
i=1
sign(Y ̃i,N − ξˆ⊤
N X ̃i)X ̃i. (43)
Since M ∗
N is a continuous piecewise function of ξ, it follows that the limiting subgradient is bounded by the difference between the right and left derivatives. Thus, we have
0
(∆6 )
∈ ∂ξ (M ∗
N + λN JN,M ) (ξ,h)=(ξˆN ,ˆhN )
(∆7 )
⊆ ∂ξM ∗
N (ξ,h)=(ξˆN ,ˆhN ) + λN ∂ξ JN,M (ξ,h)=(ξˆN ,ˆhN ).
19

where (∆6) holds by Theorem 10.1 of [34], and (∆7) holds by Exercise 10.10 and Equation 10(6) of [34]. Thus, we have
∂(ξ,h)JN,M
= ∂θ
∂(ξ, h)
∗
(ξ,h)=(ξˆN ,ˆhN )
∂θ JN,M (β,g)=(βˆN ,gˆN )
(by Proposition 1.37 of [32])
(∆=8) ∂θ
∂(ξ, h)
∗
(ξ,h)=(ξˆN ,ˆhN )

 
∂β JN,1 (β,g)=(βˆN ,gˆN )
∂g JN,2 (β,g)=(βˆN ,gˆN )

 
= I0
φ∗(Z) I
∗

 
∂β JN,1 (β,g)=(βˆN ,gˆN )
∂g JN,2 (β,g)=(βˆN ,gˆN )


 (by the definition of ξ, h)
=

    
∂β JN,1 (β,g)=(βˆN ,gˆN )
+ ∂g JN,2 (β,g)=(βˆN ,gˆN )
(φ∗
1(Z)), . . . , ∂gJN,2 (β,g)=(βˆN ,gˆN )
(φ∗
d (Z ))
⊤
| {z }
GN
∂g JN,2 (β,g)=(βˆN ,gˆN )

    
where (∆8) holds by Proposition 10.5 of [34] since JN,M (θ) = JN,1(β) + JN,2(g) and (dJN,1(βˆN )(0), dJN,2(gˆN )(0)) = 0. Here, MN
C can be embedded in L2(m) space with Lebesgue mea
sure m, and ∂gJN,2 (β,g)=(βˆN ,gˆN )
∈ (L2(m))∗ is the differential operator with norm ∥ · ∥L2(m). By Riesz
representation theorem, we can represent ∂gJN,2 (β,g)=(βˆN ,gˆN )
(φ∗
i (Z)) = R fJ (Z)φ∗
i (Z)m(dZ), i = 1, . . . , d
with a potential element fJ (Z) ∈ L2(m). Finally, by Assumption (A8) and Corollary 3.44 of [31], we have
∂ξ JN,M (ξ,h)=(ξˆN ,ˆhN )
⊆ ∂β JN,1 (β,g)=(βˆN ,gˆN )
+ GN .
Let I0 := {i|Y ̃i,N = ξˆ⊤
N X ̃i}, it holds that
0= 1
N


N
X
i=1,i∈I0
giX ̃i −
N
X
i=1,i∈/I0
sign(Y ̃i,N − ξˆ⊤
N X ̃i)X ̃i

 + λN (Q1 + Q2), (44)
where gi ∈ [−1, 1], i ∈ I0 are some subgradients of the absolute value function and Q1 ∈ ∂βJN,1 (β,g)=(βˆN ,gˆN )
and Q2 ∈ GN . According to Assumption (A8), we have λN ∥Q1 + Q2∥ = op( √1N ). Taking (44) into (43), it holds that
∂M∗
N (ξ)
∂ξ ξ=ξˆN 1
≤1
N


N
X
i=1,i∈I0
sign(Y ̃i,N − ξˆ⊤
N X ̃i)X ̃i +
N
X
i=1,i∈I0
giX ̃i

 + λN ∥Q1 + Q2∥
≤1
N


N
X
i=1,i∈I0
∥X ̃i∥ + ∥gi∥∥X ̃i∥

 + λN ∥Q1 + Q2∥
≤2
N
N
X
i=1,i∈I0
∥X ̃i∥ + λN ∥Q1 + Q2∥
≤2
N
N
X
i=1
1{Y ̃i,N = ξˆ⊤
N X ̃i}∥X ̃i∥ + λN ∥Q1 + Q2∥
≤
n
2
N
X
i=1
1{Y ̃i,N = ξˆ⊤
N X ̃i}
o
max
i=1,...,N
∥X ̃i∥
N + λN ∥Q1 + Q2∥
20

(∆9 )
≤ d max
i=1,...,N
∥X ̃i∥
N + λN ∥Q1 + Q2∥
≤d max
i=1,...,N
∥X ̃i∥
N + op
√1N
=op
√1N ,
where the inequality (∆9) holds due to Theorem 3.3 of [50]. Furthermore, the last equality holds by Assumptions (A3), (A6) and (A7). Moreover, a calculation yields Ψ0(ξ0, h0) = 0, so the left hand side of (42) satisfies √
N {Ψ0(ξˆN , ˆhN ) + ΨN (ξ0, h0)} = op(1),
or equivalently, √
N Ψ0(ξˆN , ˆhN ) = −
√
N ΨN (ξ0, h0) + op(1).
Applying the Taylor’s expansion for Ψ0(ξ, h) at (ξ0, h0), we obtain
Ψ0(ξˆN , ˆhN )
=E[−sign(ε − ξ⊤
(t)X ̃ − h(t)(Z))X ̃ ]
t=1
=EV [(2Fε(ξ⊤
(t)X ̃ + h(t)(Z)|V ) − 1)X ̃ ]
t=1
=E[−sign(ε)X ̃ ] +
∂EV [(2Fε(ξ⊤
(t)X ̃ + h(t)(Z)|V ) − 1)X ̃ ]
∂t t=0
+ O(d2(θˆN , θ0))
=2EV {fε(0|V )X ̃ X ̃ ⊤}(ξˆN − ξ0) + 2EV {fε(0|V )(ˆhN − h0)X ̃ ⊤} + O(d2(θˆN , θ0))
=2EV {fε(0|V )X ̃ X ̃ ⊤}(ξˆN − ξ0) + 2EV {fε(0|V )(ˆhN − h0)(X − φ∗(Z))⊤} + O(d2(θˆN , θ0))
=2EV {fε(0|V )X ̃ X ̃ ⊤}(ξˆN − ξ0) + O(d2(θˆN , θ0)).
Here the derivative w.r.t. h and ξ are based on the derivatives of the line h(t) = (1 − t)h0 + tˆhN , t ∈ [0, 1] and ξ(t) = (1 − t)ξ0 + tξˆN , t ∈ [0, 1] w.r.t. t. Furthermore, the last equality holds by the orthogonality of X − φ∗(Z) w.r.t. f (Z) ∈ L2(PZ ) from the definition of φ∗(Z). Since ξˆN − ξ0 = βˆN − β0 and Assumption (A6), it follows that
√
N (βˆN − β0) = 1
2 [EV {fε(0|V )X ̃ X ̃ ⊤}]−1√
N ΨN (ξ0, h0) + op(1) ⇝ N (0, Σ−1
2 Σ1Σ−1
2 ).
Therefore, the result follows.
4 Optimization Perspective
4.1 Continuous Approximation Approach
In this subsection, we design an efficient algorithm for solving optimization problem (10), which can be rewritten into the following form:
min
β,W
1 N
N
X
i=1
Yi − β⊤Xi − g(W; Zi) +
L
X
k=1
δ∥Wk∥∞≤1(Wk) + λN JN,M (β, W),
s.t.
L
X
k=1
∥Wk∥0 ≤ s,
(45)
21

where for any subset C ⊆ Rn, δC (x) = 0, if x ∈ C,
+∞, if x ∈/ C.
Due to the introduction of coupled nonconvex constraint PL
k=1 ∥Wk∥0 ≤ s, problem (45) is very challenging; hence we relax the abovementioned constraint into the following separable form:
min
β,W LN (β, W; U) .= 1
N
N
X
i=1
Yi − β⊤Xi − g(W; Zi)
| {z }
RN (β,W;U)
+
L
X
k=1
δ∥Wk∥∞≤1(Wk) + γk∥Wk∥0
+ λN JN,M (β, W)
(46)
weighting parameter {γk}L
k=1.
Definition 19. Let f : R → R and define fσ(y) =. f (y/σ) for any σ > 0. The function f is said to possess Property D, if
1. f is real analytic on (y0, ∞) for some y0 < 0,
2. ∀y ≥ 0, f ′′(y) ≥ −μ0, where μ0 > 0 is some constant,
3. f is concave on R,
4. f (y) = 0 ⇔ y = 0,
5. limy→∞ f (y) = 1.
It is obvious that if f possesses Property D, then
lim
σ↓0+ fσ(|y|) = I(y) =
(0, y = 0,
1, otherwise.
In fact, there are a plenty of functions that satisfy Property D, for instance, f (y) = 1 − e−y. For x = (x1, . . . , xn)⊤ ∈ Rn, denote fσ(x) = Pn
i=1 fσ(xi). Hence, problem (46) may be approximated by the following continuous optimization problem
min
β,W LN,σ(β, W; U) .= RN (β, W; U) +
L
X
k=1
δ∥Wk∥∞≤1(Wk) + γkfσ(|Wk|) + λN JN,M (β, W). (47)
Theorem 4. Let σk ↓ 0, then the following statements hold.
1. inf
β,W LN,σk (β, W; U) → inf
β,W LN (β, W; U).
2. For v in some index set N ∈ N∞, the sets argmin LN,σk are nonempty and form a bounded sequence with
lim sup
k
(argmin LN,σk ) ⊆ argmin LN .
3. For any choice of εk ↓ 0 and (βk, Wk) ∈ εk-argmin LN,σk , the sequence {(βk, Wk)}k∈N is bounded and such that all its cluster points belong to argmin LN .
22

Proof. Since for x = (x1, . . . , xn)⊤ ∈ Rn
fσ(x) =
n
X
i=1
fσ (xi ),
we have fσk+1 (x) ≥ fσk (x) for every x ≥ 0. Hence, for every (β, W), it follows that LN,σk+1 (β, W; U) ≥ LN,σk (β, W; U), and {LN,σk (β, W; U)}k∈N is nondecreasing. By Proposition 7.4 of [34], e-limkLN,σk exists and equals supk[clLN,σk ]. Based on the fact lim
σ↓0+ fσ(|x|) = ∥x∥0, it follows that supk[clLN,σk ](β, W; U) =
LN (β, W; U). Obviously, for every σk, LN,σk (β, W; U) is a coercive function. According to Exercise 7.32 of [34], the sequence {LN,σk }k∈N is eventually level-bounded. By noticing that LN,σk and LN are l.s.c. and proper, we finish the proof by Theorem 7.33 of [34].
Problem (47) can be rewritten into the following form with bounded feasible set:
min
β,W G(β, W; U) =. RN (β, W; U) +
L
X
k=1
γkfσ(|Wk|) + λN JN,M (β, W)
s.t. Wk ∈ [−1, 1]qk×(qk−1+1), k = 1, . . . , L,
β ∈ [−C, C]d.
(48)
We fix a probability space (Ω′, F ′, P′) and equip X with the Borel σ-algebra with
X .= [−C, C]d ×
L
Y
k=1
[−1, 1]qk×(qk−1+1).
We suppose that there exists a measurable mapping ζ : X × Ω′ → R × QL
k=1 Rqk×(qk−1+1) satisfying:
Eω′ [ζ(β, W, ω′)] ∈ ∂C
(β,W)G(β, W; U) for all (β, W) ∈ X .
In this section, we aim to analysis the proximal stochastic subgradient method that performs the following update rule (Sample ω′
k ∼ P′,
(βk+1, W⊤
k+1)⊤ ∈ ProjX ((βk, W⊤
k )⊤ − αkζ(βk, Wk, ω′
k)) (49)
with given an iterate (βk, Wk) ∈ X .
Assumption 2. We assume the following assumptions hold.
• The sequence {αk}k≥1 is nonnegative, square summable, but not summable:
αk ≥ 0,
∞
X
k=1
αk = ∞, and
∞
X
k=1
α2
k = ∞.
• There exists a function p : X → R+, that is bounded on bounded sets, such that
Eω′ [∥ζ(β, W, ω′)∥2] ≤ p(β, W) for all (β, W) ∈ X .
• For every convergent sequence {zk}k≥1, we have
Eω′ sup
k≥1
∥ζ(βk, Wk, ω′)∥ < ∞.
23

Theorem 5. Let {(βk, Wk)}k≥1 be the iterates produced by the proximal stochastic subgradient method (49). The almost surely, for all (β∗, W∗) ∈ Cluster({(βk, Wk)}k≥1), it holds that
0 ∈ ∂C
(β,W)G(β∗, W∗; U) + NX (β∗, W∗),
and the function values {G(βk, Wk; U)}k≥1 converge.
Proof. To prove this theorem, by Theorem 6.2 of [9] and Assumption 2, it suffices to show the descent property and weak Sard property. By Example 2.4 of [26], G is definable in an o-minimal structure. Then, by Theorem 5.8 of [9], G and 1X admit the chain rule. Therefore, the descent property holds by Lemma 6.3 of [9]. Thus we only argue the weak Sard property. Since G, and 1X are definable in an o-minimial structure, there exist Whitney Cd+H -stratifications AG, and AX of graph(G), and X , respect-
ively with
H = QL
k=1(qk + 1). Let Proj(AG) be the Whitney stratifications of Rd+H obtained by applying the coordinate projection (β, W, r) 7→ (β, W) to each stratum in AG. Appealing to Theorem 4.8 of [44], we obtain a Whitney Cd+H -stratification A of Rd+H such that for every strata M ∈ A and L ∈ Proj(AG)∪AX , either M ∩ L = ∅ or M ⊆ L.
Consider an arbitrary stratum M ∈ A with M ∩ X ̸= ∅ and a point x ∈ M . Obviously, we have M ⊆ X . Select the unique strata MG ∈ Proj(AG), and MX ∈ AX containing x. Let Gb be Cd+H -smooth functions agreeing with G on a neighborhood of x in MG. By Proposition 4 of [4], we conclude
∂C G(β, W) ⊆ ∇Gb(β, W) + NMG (β, W), NX (β, W) ⊆ NMX (β, W).
Hence summing yields
∂C G(β, W) + NX (β, W) ⊆ ∇(Gb)(β, W) + NMG (β, W) + NMX (β, W)
⊆ ∇(Gb)(β, W) + NM (β, W),
where the last inclusion follows from M ⊆ MG and M ⊆ MX . Notice that Gb agrees with G on a neighborhood of (β, W) in M . Hence if the inclusion, 0 ∈ ∂CG(β, W) + NX (β, W), holds it must be that (β, W) is a critical point of the Cd+H -smooth function G restricted to M , in the classical sense. Applying the Theorem 6.10 (classical Sard’s theorem) of [27] to each manifold M , weak Sard’s property holds. Hence, we finish the proof by Theorem 6.2 of [9].
Remark 2. The core idea of the proof above is to establish the Weak Sard property, which allows us to follow the line of [9] to complete the proof. First, we partition the feasible set X into a collection of disjoint smooth manifolds A, such that objective function (48) is smooth on each manifold M ∈ A. We then apply the projection theorem (Proposition 4 of [4]) to show ∂C G(β, W) ⊆ ∇Gb(β, W) + NMG (β, W) and NX (β, W) ⊆ NMX (β, W). Subsequently, we demonstrate that the summation of the classical -
gradient of the local mollifier ∇Gb(β, W) and the normal cone NM (β, W) covers ∂C G(β, W) + NX (β, W). Finally, the Weak Sard Property is deduced by applying the standard Sard’s theorem to the local mollifier Gb(β, W) on each manifold in the partition.
4.2 Non-Approximation Approach
In this subsection, we directly solve the following optimization problem induced by l0-norm:
min
β,W H(β, W; U) =. 1
N
N
X
i=1
Yi − β⊤Xi − g(W; Zi) + λN JN,M (β, W),
s.t. β ∈ [−C, C]d,
W ∈ W .=
(
W:
L
X
k=1
∥Wk∥0 ≤ s
) \
L
Y
k=1
[−1, 1]qk×(qk−1+1).
(50)
24

Again, we fix a probability space (Ω′′, F ′′, P′′) and equip [−C, C]d × W with the Borel σ-algebra. We suppose that there exists a measurable mapping ζe: [−C, C]d × W × Ω′′ → R × QL
k=1 Rqk×(qk−1+1) satisfying:
Eω′′ [ζe(β, W, ω′)] ∈ ∂C
(β,W)G(β, W; U) for all (β, W) ∈ [−C, C]d × W.
We still consider the proximal stochastic subgradient method that performs the following update rule

   
   
Sample ω′′
k ∼ P′′,
βk+1 ∈ Proj[−C,C]d (βk − αkProj1 ζe(βk, Wk, ω′′
k) ,
Wk+1 ∈ ProjW (Wk − αkProj2 ζe(βk, Wk, ω′′
k) ,
(51)
with given an iterate (βk, Wk) ∈ X .
Lemma 1. The sub-routine
W∗ ∈ ProjW W − α(ζe(β, W, ω′′
k )) (52)
admits the following closed-form solution. Denoting Gi
.= Wi − αkProj2
h
(
ζe(β, W, ω′′))
i
i
, we compute local
benefit values
∆i;j,k =
([Gi]2
jk, |[Gi]jk| ≤ 1,
2|[Gi]jk| − 1, |[Gi]jk| > 1,
for each entry (i, j, k) ∈ [L] × [qi] × [qi−1 + 1]. Let T ⊆ [L] × [qi] × [qi−1 + 1] contains the indices of the s largest values of ∆i;j,k (ties may be broken arbitrarily). Then the projection W∗ can be selected as
[W∗
i ]jk =
(clip([Gi]jk, −1, 1), (i, j, k) ∈ T,
0, (i, j, k) ∈ T,
where clip(y, −1, 1) = min{1, max{−1, y}}.
Proof. The sub-routine (52) is equivalent to the following optimization problem
mWin
L
X
i=1
∥Wi − Gi∥2 =
L
X
i=1
qi
X
j=1
qi−1 +1
X
k=1
|[Wi]jk − [Gi]jk|2
s.t. W ∈ W
with given G = (G1, . . . , GL). For the sake of simplicity, we denote objective function as
L
X
i=1
qi
X
j=1
qi−1 +1
X
k=1
|[Wi]jk − [Gi]jk|2 =.
X
(i,j,k)
|[Wi]jk − [Gi]jk|2.
For any fixed set T′ ⊆ [L] × [qi] × [qi−1 + 1] with |T′| ≤ s, we consider the restricted feasible set
WT′ = {W : [Wi]ij = 0 for (i, j, k) ∈/ T′, |[Wi]ij| ≤ 1 ∀(i, j, k) ∈ T′}.
Then
min
W∈WT′
X
(i,j,k)
|[Wi]jk − [Gi]jk|2 =
X
(i,j,k)∈T′
min
|[Wi ]j k |≤1
([Wi]jk − [Gi]jk)2 +
X
(i,j,k)∈/T′
[Gi]2
jk
=
X
(i,j,k)∈T′
([Wi]∗
jk − [Gi]jk)2 +
X
(i,j,k)∈/T′
[Gi]2
jk
=
X
(i,j,k)
[Gi]2
jk −
X
(i,j,k)∈T′
∆i;j,k
25

with [Wi]∗
jk
=. clip([Gi]jk, −1, 1). Consequently, it holds that
min
W∈W
X
(i,j,k)
|[Wi]jk − [Gi]jk|2 =
X
(i,j,k)
[Gi]2
jk − max
T′ : |T′|≤s
X
(i,j,k)∈T′
∆i;j,k
To maximize P
(i,j,k)∈T′ ∆i;j,k subject to |T′| ≤ s, the optimal T consists of the indices corresponding to the s largest ∆i;j,k (ties broken arbitrarily). Here, we complete the proof.
Theorem 6. Let {(βk, Wk)}k≥1 be the iterates produced by the proximal stochastic subgradient method (51). The almost surely, for all (β∗, W∗) ∈ Cluster({(βk, Wk)}k≥1), it holds that
0 ∈ ∂C
(β,W)H(β∗, W∗; U) + N[−C,C]d×W (β∗, W∗),
and the function values {H(βk, Wk; U)}k≥1 converge.
Proof. We only need to prove W is semi-algebraic; the remaining argument is identical to the proof of Theorem 5. Write all entries of W as a single vector x = (x1, . . . , xN ) ∈ RH , where N is the total number of scalar elements in (W1, . . . , WL). For any index set T ⊂ {1, . . . , N }, define
AT = {x ∈ RH : xi = 0 for all i ∈/ T }.
Each AT is the zero set of finitely many polynomial equations {xi = 0 : i ∈/ T }, so AT is an algebraic (hence semi-algebraic) subset of RN . The condition PL
k=1 ∥Wk∥0 ≤ s is equivalent to saying that the total number of nonzero coordinates of x is at most s. Hence,
W=
[
T ⊂{1,...,N } |T |≤s
AT .
This is a finite union since there are only finitely many subsets T with |T | ≤ s. A finite union of semialgebraic sets is again semi-algebraic, and each AT is semi-algebraic. Therefore, W is a semi-algebraic subset of RH .
Remark 3. Under some additional mild assumptions, almost surely, the sequence {βk, Wk}k≥1 converges to a local minimum of H, i.e., the proximal stochastic subgradient method (51) can escape active strict saddles and sharply repulsive critical points of H; the readers may refer to [37] for the details.
Remark 4. In fact, both the continuous approximation approach (proposed in Section 4.1) and the nonapproximation approach (proposed in Section 4.2) admit independent research interests. On the one hand, although there exists a gap between continuous relaxation problem (46) and primal penalized LAD problem (10), proximal stochastic subgradient update (49) for problem (46) is very cheap, as it only requires projections onto a boxed set. Additionally, by Theorem 4, relaxation problem (46) can approxi-
mate penalized LAD problem (10) to arbitrary accuracy, thereby exhibiting independent interest beyond serving as a computational surrogate. On the other hand, the non-approximation approach aims to solve problem (50) which is completely equivalent to penalized LAD problem (10), henceforth enjoying high statistical accuracy. Nevertheless, the proximal stochastic subgradient update (51) involves a sorting operation with complexity O(H log H), and is therefore relatively more computationally demandin-
g and unsuitable for ultra large-scale networks. Overall, these two approaches illustrate a fundamental trade-off between computational efficiency and statistical fidelity.
26

References
[1] Eric Auerbach. Identification and estimation of a partially linear regression model using network data. Econometrica, 90(1):347–365, 2022.
[2] Edoardo Belli. Smoothly adaptively centered ridge estimator. Journal of Multivariate Analysis, 189:104882, 2022.
[3] Alexandre Belloni, Victor Chernozhukov, Denis Chetverikov, and Iv ́an Fern ́andez-Val. Conditional quantile processes based on series or many regressors. Journal of Econometrics, 213(1):4–29, 2019. Annals: In Honor of Roger Koenker.
[4] J ́erˆome Bolte, Aris Daniilidis, Adrian Lewis, and Masahiro Shiota. Clarke subgradients of stratifiable functions. SIAM Journal on Optimization, 18(2):556–572, 2007.
[5] Chad Brown. Inference in partially linear models under dependent data with deep neural networks. arXiv preprint arXiv:2410.22574, 2024.
[6] Philippe G Ciarlet. Linear and nonlinear functional analysis with applications. SIAM, 2025.
[7] Pavel Cˇ ı ́ˇzek and Serhan Sadıko ̆glu. Robust nonparametric regression: A review. Wiley Interdisciplinary Reviews: Computational Statistics, 12(3):e1492, 2020.
[8] Jack Cuzick. Efficient estimates in semiparametric additive regression models with unknown error distribution. The Annals of Statistics, 20(2):1129–1136, 1992.
[9] Damek Davis, Dmitriy Drusvyatskiy, Sham Kakade, and Jason D Lee. Stochastic subgradient method converges on tame functions. Foundations of computational mathematics, 20(1):119–154, 2020.
[10] John C Duchi and Feng Ruan. Stochastic methods for composite and weakly convex optimization problems. SIAM Journal on Optimization, 28(4):3229–3259, 2018.
[11] Esra Akdeniz Duran, Wolfgang Karl H ̈ardle, and Maria Osipenko. Difference based ridge and liu type estimators in semiparametric regression models. Journal of Multivariate Analysis, 105(1):164–175, 2012.
[12] Robert F. Engle, C. W. J. Granger, John Rice, and Andrew Weiss. Semiparametric estimates of the relation between weather and electricity sales. Journal of the American Statistical Association, 81(394):310–320, 1986.
[13] Jianqing Fan and Runze Li. Variable selection via nonconcave penalized likelihood and its oracle properties. Journal of the American statistical Association, 96(456):1348–1360, 2001.
[14] Max H Farrell, Tengyuan Liang, and Sanjog Misra. Deep neural networks for estimation and inference: application to causal effects and other semiparametric estimands. arXiv preprint arXiv:1809.09953, 20:1, 2018.
[15] Federico Ferraccioli, Laura M Sangalli, and Livio Finos. Nonparametric tests for semiparametric regression models. Test, 32(3):1106–1130, 2023.
[16] Dahua Gan, Yi Wang, Shuo Yang, and Chongqing Kang. Embedding based quantile regression neural network for probabilistic load forecasting. Journal of Modern Power Systems and Clean Energy, 6(2):244–254, 2018.
[17] Scott A Hamilton and Young K Truong. Local linear estimation in partly linear models. Journal of Multivariate Analysis, 60(1):1–19, 1997.
27

[18] Wolfgang H ̈ardle, Yuichi Mori, and Philippe Vieu. Statistical methods for biostatistics and related fields. Springer Science & Business Media, 2006.
[19] Kostas Hatalis, Alberto J Lamadrid, Katya Scheinberg, and Shalinee Kishore. Smooth pinball neural network for probabilistic forecasting of wind power. arXiv preprint arXiv:1710.01720, 2017.
[20] Xuming He and Peide Shi. Convergence rate of b-spline estimators of nonparametric conditional quantile functions. Journaltitle of Nonparametric Statistics, 3(3-4):299–308, 1994.
[21] Judy Hoffman, Daniel A Roberts, and Sho Yaida. Robust learning with jacobian regularization. arXiv preprint arXiv:1908.02729, 2019.
[22] Kurt Hornik, Maxwell Stinchcombe, and Halbert White. Multilayer feedforward networks are universal approximators. Neural networks, 2(5):359–366, 1989.
[23] Peter J Huber and Elvezio M Ronchetti. Robust statistics, ser. Wiley Ser Probab Math Stat New York, NY, USA Wiley-IEEE, 52:54, 1981.
[24] Shun ichi Amari. Backpropagation and stochastic gradient descent method. Neurocomputing, 5(4):185196, 1993.
[25] Roger Koenker, Victor Chernozhukov, Xuming He, and Limin Peng. Handbook of quantile regression. CRC Press: Boca Raton, FL, USA, 2017.
[26] Julian Kranz, Davide Gallon, Steffen Dereich, and Arnulf Jentzen. Sad neural networks: Divergent gradient flows and asymptotic optimality via o-minimal structures. arXiv preprint arXiv:2505.09572, 2025.
[27] John M Lee. Smooth manifolds. In Introduction to smooth manifolds, pages 1–29. Springer, 2003.
[28] Sokbae Lee. Efficient semiparametric estimation of a partially linear quantile regression model. Econometric theory, 19(1):1–31, 2003.
[29] Heng Lian. Semiparametric estimation of additive quantile regression models by two-fold penalty. Journal of Business & Economic Statistics, 30(3):337–350, 2012.
[30] Mathew W McLean, Giles Hooker, Ana-Maria Staicu, Fabian Scheipl, and David Ruppert. Functional generalized additive models. Journal of Computational and Graphical Statistics, 23(1):249–269, 2014.
[31] B.S. Mordukhovich. Variational Analysis and Generalized Differentiation II: Applications. Grundlehren der mathematischen Wissenschaften. Springer Berlin Heidelberg, 2006.
[32] B.S. Mordukhovich. Second-Order Variational Analysis in Optimization, Variational Stability, and Control: Theory, Algorithms, Applications. Springer Series in Operations Research and Financial Engineering. Springer International Publishing, 2024.
[33] Roger D. Peng, Francesca Dominici, and Thomas A. Louis. Model choice in time series studies of air pollution and mortality. Journal of the Royal Statistical Society Series A: Statistics in Society, 169(2):179–203, 02 2006.
[34] R Tyrrell Rockafellar and Roger J-B Wets. Variational analysis, volume 317. Springer Science & Business Media, 2009.
[35] Yaniv Romano, Evan Patterson, and Emmanuel Candes. Conformalized quantile regression. Advances in neural information processing systems, 32, 2019.
28

[36] Mahdi Roozbeh and Mohammad Arashi. New ridge regression estimator in semiparametric regression models. Communications in Statistics-Simulation and Computation, 45(10):3683–3715, 2016.
[37] Sholom Schechtman. Stochastic subgradient descent on a generic definable function converges to a minimizer. arXiv preprint arXiv:2109.02455, 2021.
[38] Johannes Schmidt-Hieber. Nonparametric regression using deep neural networks with relu activation function. 2020.
[39] Johannes Schmidt-Hieber. Nonparametric regression using deep neural networks with ReLU activation function. The Annals of Statistics, 48(4):1875 – 1897, 2020.
[40] Thomas A Severini and Wing Hung Wong. Profile likelihood and conditionally parametric models. The Annals of statistics, pages 1768–1802, 1992.
[41] Ben Sherwood and Lan Wang. Partially linear additive quantile regression in ultra-high dimension. The Annals of Statistics, 44(1):288 – 317, 2016.
[42] Robert Tibshirani. Regression shrinkage and selection via the lasso. Journal of the Royal Statistical Society Series B: Statistical Methodology, 58(1):267–288, 1996.
[43] A. W. van der Vaart and Jon A. Wellner. Empirical Processes, pages 127–384. Springer International Publishing, Cham, 2023.
[44] Lou Van den Dries and Chris Miller. Geometric categories and o-minimal structures. 1996.
[45] Shuoyang Wang. Partially linear quantile regression for complex nonlinear component in ultra-high dimension. Electronic Journal of Statistics, 19(2):4054–4082, 2025.
[46] Wei Wen, Chunpeng Wu, Yandan Wang, Yiran Chen, and Hai Li. Learning structured sparsity in deep neural networks. In D. Lee, M. Sugiyama, U. Luxburg, I. Guyon, and R. Garnett, editors, Advances in Neural Information Processing Systems, volume 29. Curran Associates, Inc., 2016.
[47] Scott L. Zeger and Peter J. Diggle. Semiparametric models for longitudinal data with application to cd4 cell numbers in hiv seroconverters. Biometrics, 50(3):689–699, 1994.
[48] Cun-Hui Zhang. Nearly unbiased variable selection under minimax concave penalty. 2010.
[49] Qixian Zhong, Jonas Mueller, and Jane-Ling Wang. Deep learning for the partially linear cox model. The Annals of Statistics, 50(3):1348–1375, 2022.
[50] Qixian Zhong and Jane-Ling Wang. Neural networks for partially linear quantile regression. Journal of Business & Economic Statistics, 42(2):603–614, 2024.
[51] Hui Zou and Trevor Hastie. Regularization and variable selection via the elastic net. Journal of the Royal Statistical Society Series B: Statistical Methodology, 67(2):301–320, 2005.
29

---

## Processing Information

- **Processing Library:** Zotero PDFWorker
- **Processing Date:** 2026-02-10T18:13:42.155Z
- **Text Length:** 69015 characters
- **Success:** Text extraction completed
- **PDF Library Used:** Zotero PDFWorker
- **Pages Processed:** 29 of 29
