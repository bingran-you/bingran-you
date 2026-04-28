# PDF Document: Golnik et al. - 2025 - BiRNe Symbolic bifurcation analysis of reaction networks with Python.pdf

**File Path:** Golnik et al. - 2025 - BiRNe Symbolic bifurcation analysis of reaction networks with Python.pdf

**Processed Date:** 2026-02-10T18:15:21.216Z

**File Size:** 411.05 KB

**Total Pages:** 19

**Extracted Pages:** 19

**PDF Library:** Zotero PDFWorker

**Attachment Item ID:** 3719

**Title:** BiRNe: Symbolic bifurcation analysis of reaction networks with Python

**Collection:** Large Files > Random Papers

---

## Extracted Text Content

BiRNe:
Symbolic bifurcation analysis of
reaction networks with Python
Richard Golnik∗, Thomas Gatter†, Peter F. Stadler‡,
Nicola Vassena §
November 19, 2025
Abstract
Computer algebra methods for analyzing reaction networks often rely on the assumption of mass-action kinetics, which transform the governing ODEs into polynomial systems amenable to techniques such as Gro ̈bner basis computation and related algebraic tools. However, these methods face significant computational complexity, limiting their applicability to relatively small networks involving only a handful of species. In contrast, building on recent theoretical advances, we introduce here BiRNe (BIfu-
rcations in Reaction NEtworks) Python module, which relies on a symbolic approach designed to detect bifurcations in larger reaction networks (up to 1020 species, depending on the network’s connectivity) equipped with parameter-rich kinetics. This class includes enzymatic kinetics such as Michaelis–Menten, ligandbinding kinetics like Hill functions, and generalized mass-action kinetics. For a given network, the current algorithm identifies all minimal autocatalytic subnetworks and fully characteri-
zes the presence of bifurcations associated with zero eigenvalues, thus determining whether the network admits multistationarity. It also detects oscillatory bifurcations arising from positive-feedback structures, capturing a significant class of possible oscillations.
1 Introduction
Reaction networks naturally arise as modeling structures in various fields, including biology, chemistry, ecology, economics, and epidemiology. A primary difficulty in analyzing such systems is the widespread lack of knowledge about the governing mathematical laws and, even more so, about the relevant quantities involved. For this reason, it is customary to consider classes of systems that depend on many parameters. Since realistic reaction
∗Universita ̈t Leipzig, Germany richard@bioinf.uni-leipzig.de †Universita ̈t Leipzig, Germany thomas@bioinf.uni-leipzig.de ‡Universita ̈t Leipzig, Germany studla@bioinf.uni-leipzig.de §Universita ̈t Leipzig, Germany, nicola.vassena@uni-leipzig.de
1
arXiv:2511.14431v1 [q-bio.MN] 18 Nov 2025

networks are typically high-dimensional, the number of parameters is also large, and the computational complexity of even simple tasks quickly becomes intractable.
Historically, a large body of work has focused on mass-action kinetics, which models interactions as monomials in the concentrations of the reacting species. This assumption is particularly meaningful when considering elementary reactions in well-mixed reactors or, for example, in epidemiological models describing transition rates between compartmental classes. However, it may become less appropriate in other contexts, such as biochemical or cellular systems. Under mass-action kinetics, analyzing -
the fixed points of the concentration system amounts to solving for the roots of a system of polynomial equations, for which many tools from algebraic geometry are available. The main difficulty, however, is that analyzing fixed-point stability requires first obtaining a parametrization of the fixedpoint variety, on which all subsequent analysis must then be performed. This unavoidable step comes with a great computational cost even for simple tasks, such as assessing the stability of fixed points-
, let alone more delicate bifurcation problems. For an illustration of the typical difficulties involved, see, among many others, Hernandez et al [13] for parametrization of fixed-points, Conradi et al. [9], Pe ́rez Mill ́an & Dickenstein [21], and Ro ̈st & Sadeghimanesh [22] for zero-eigenvalue bifurcations, and Gatermann et al. [11] and Banaji & Borosz [3] for purely imaginary-eigenvalue bifurcations.
In this contribution, we present an alternative computational tool that relies solely on the linearization of the system, without requiring explicit computation of fixed points. In particular, this method applies to any system for which the characteristic polynomial of the Jacobian can be obtained in symbolic form: typically covering networks of up to around 15 species. The central assumption is that the kinetics are not in mass-action form, but instead belong to a broad class of so-called paramet-
er-rich kinetics [26], which includes widely used schemes such as Michaelis–Menten, Hill, and generalized mass-action kinetics.
This paper is organized as follows. Section 2 presents the standard literature ingredients concisely and refers to the appropriate sources. Section 3 introduces our newly developed Python module. An example of its applicability is presented in Section 4. The discussion Section 5 closes the paper.
Acknowledgment. We thank AmirHosein Sadeghimanesh for his continued and successful organization of the session on Computer Algebra Applications in the Life Sciences (CASinLife) at the ACA conferences, where this work was presented. This work has been supported by the MATOMIC consortium, funded by the Novo Nordisk Foundation, grant NNF21OC0066551.
2 Preliminary theory
The content of this section has been presented in more detail in the publications [25, 26, 7].
2.1 Reaction networks and symbolic Jacobians
We consider reaction networks Γ as pairs of sets Γ = (M, E), where M is the set of species Xm and E is the set of reactions j. Any reaction j is an ordered association
2

between nonnegative linear combinations of the species:
(2.1) j : s−
1jX1 + · · · + s−
|M|j X|M| −j→ s+
1jX1 + · · · + s+
|M|j X|M|,
where the nonnegative coefficients s−
mj , s+
mj ≥ 0 are the stoichiometric coefficients. Species Xm appearing on the left-hand side (resp. right-hand side) of (2.1) with nonzero stoichiometric coefficients s−
mj > 0 (resp. s+
mj > 0) are called reactants (resp. products). The stoichiometric coefficients of the reactant and product species are collected in two |M | × |E| matrices. The reactant matrix S− is defined by
(2.2) S−
mj := s−
mj ,
and the product matrix S+ by
S+
mj := s+
mj .
The difference of the two matrices gives rise to the stoichiometric matrix S := S+ − S− with entries
(2.3) Smj := s+
mj − s−
mj .
Let x(t) ∈ R|M|
≥0 denote the time evolution of the nonnegative vector of species concentrations in a well-mixed, spatially homogeneous reactor. Its dynamics follow the system of Ordinary Differential Equations (ODEs)
(2.4) x ̇ = f (x) = Sr(x),
where S is the stoichiometric matrix defined in (2.3) and r(x) ∈ R|E|
≥0 is the vector of reaction rates. In applications, the precise functional form of rj(x) is typically unknown. For this reason, the literature usually resorts to parametric families r(x, p), where p denotes positive parameters. Widely used reaction schemes in (bio)chemistry, ecology, and epidemiology include classic and generalized mass-action kinetics [28, 20], Michaelis–Menten kinetics [19], and Hill kinetics [15]. In ecology, these correspond respectively to Holling Functional Responses of typ-
e I, II, and III [16]. In line with this tradition, we restrict attention to reaction rates that are monotone chemical functions in the following sense.
Definition 2.1 (Monotone chemical function). A function rj is a monotone chemical function if:
i. rj(x) ≥ 0 for all x ∈ R|M|
≥0 ;
ii. rj(x) > 0 implies xm > 0 for all species Xm with s−
mj > 0;
iii. s−
mj = 0 implies ∂rj/∂xm ≡ 0;
iv. for x > 0 and s−
mj > 0, it holds that ∂rj/∂xm > 0.
A parametric vector r(x, p) of reaction rates for Γ such that rj(x, p) is a monotone chemical function for all j and for any choice of admissible parameters is called a monotone kinetic model for the network Γ.
Let now x ̄ be a fixed point (steady state) of (2.4), i.e.
(2.5) 0 = f (x ̄) = Sr(x ̄).
3

Its stability and possible bifurcations can be addressed at a linear approximation via the Jacobian matrix fx of partial derivatives evaluated at x ̄:
(2.6) fx = ∂f
∂x x=x ̄
= S ∂r
∂x x=x ̄
,
where ∂r
∂x is the |E| × |M | reactivity matrix. Assumptions (iii) and (iv) in Def. 2.1 imply
that, at positive concentrations x > 0, the evaluated reactivity matrix is nonnegative:
(2.7) ∂r
∂x jm
= ∂rj
∂xm
=
(
> 0 if Xm is reactant to j, i.e. s−
mj > 0;
= 0 otherwise.
Inspired by (2.7), we define the |E| × |M | symbolic reactivity matrix R by
(2.8) Rjm =
(
r′
jm > 0 if Xm is reactant to j, i.e. s−
mj > 0;
= 0 otherwise,
where a positive symbol r′
jm represents a positive parameter. The reactivity matrix is thus a symbolic version of the transpose of the reactant matrix (2.2), as stated below.
Proposition 2.2. For the symbolic reactivity matrix R, it holds that
Rjm > 0 ⇔ S−
mj > 0.
Proof. Directly by Eq. (2.8).
Accordingly, we define the symbolic Jacobian matrix G as
(2.9) G := SR.
In the theory presented here, we use the symbolic Jacobian to investigate two types of results: exclusion results and existence results.
1. Exclusion results: hold irrespective of the choice of symbols in the symbolic reactivity matrix R;
2. Existence results: hold for specific choices of the symbols in R.
Exclusion results apply to any network endowed with a monotone kinetic model. Existence results, however, depend on the choice of kinetic model and require thus further specification.
To clarify, assume that for a certain network Γ, the symbolic Jacobian G = SR is invertible for all admissible R. Since any fixed-point Jacobian corresponds to a specific instantiation of R, we can exclude the possibility that any fixed-point in any monotone kinetic model has a singular Jacobian. Conversely, assume that G = SR can be made singular for specific choices of R. The fact that such an R corresponds to an actual fixed-point reactivity matrix is not guaranteed a priori. First, the existen-
ce of any fixed-point requires a positive right kernel vector v ∈ R|E|
>0 of the stoichiometric matrix S:
(2.10) Sv = 0.
4

Networks satisfying (2.10) are called consistent [1], and existence results based on fixedpoint Jacobians require consistency: this is the case of fixed-point bifurcation results. Second, even for consistent networks, mapping the symbols rjm in R to explicit parameters p in r(x, p) is not trivial. The notion of parameter-rich kinetics [26] identifies those monotone kinetic models for which this mapping is always possible.
Definition 2.3 (Parameter-rich kinetics). A monotone kinetic rate model r(x, p) is called parameter-rich if, for every positive fixed-point x ̄ > 0 and every choice of an |E| × |M | symbolic reactivity matrix R ̄, there exists a choice of parameters p ̄ = p(x ̄, R ̄) such that ∂rj/∂xm(x ̄, p ̄) = R ̄jm.
EXCLUSION RESULTS.
−1→ X1 −2→ X2 −3→
Equations:
(
x ̇ 1 = K1 − r2(x1),
x ̇ 2 = r2(x1) − r3(x2).
Symbolic Jacobian:
−r′
1x1 0
r′
1x1 −r′
2x2
.
The eigenvalues are strictly negative irrespective of any parameter and concentration values. Fixed-point bifurcations are thus excluded for any choice of monotone kinetic model, and any fixed-point is locally stable.
Exclusion results are always valid also for mass-action kinetics.
EXISTENCE RESULTS.



X1 −1→ X2 −2→ 2X1,
X1 −3→ X1 −4→
Equations:
(
x ̇ 1 = K3 − r1(x1) + 2r2(x2) − r4(x1),
x ̇ 2 = r1(x1) − r2(x2).
Symbolic Jacobian:
−r′
1x1 − r′
4x1 2r′
2x2
r′
1x1 −r′
2x2
.
As det = r′
2x2 (r′
4x1 − r′
1x1 ), a zero-eigenvalue bifurcation requires r′
4x1 = r′
1x1. Definition 2.3 guarantees that this condition is always realizable at a fixed-point for parameter-rich kinetics. See [24] for an explicit realization of a saddle-node bifurcation for MichaelisMenten kinetics.
Existence results are not always valid for mass-action kinetics.
2.2 Child-Selections and bifurcations
The previous subsection introduced the concepts of the symbolic Jacobian and parameterrich kinetics. We now present the main tool for studying the spectra of symbolic Jacobians and possible bifurcations: Child-Selections.
Definition 2.4 (Child Selection). A k-Child-Selection triple (or k-CS ) is a triple κκκ = (κ, Eκ, J) such that |κ| = |Eκ| = k, κ ⊆ M , Eκ ⊆ E, and J : κ → Eκ is a bijection satisfying s−
mJ(Xm) > 0 for all Xm ∈ κ. The map J is called the Child-Selection bijection.
5

For each k-CS κκκ, we define the associated k × k Child-Selection matrix (or CS-matrix ) as
(2.11) S[κκκ]ml := s+
mJ(l) − s−
mJ (l) .
A CS-matrix is thus a square submatrix of the stoichiometric matrix S, up to a reshuffling of its columns according to the CS-bijection J. Rows follow the ordering of the species in M , while columns follow the order induced by J.
To analyze the spectrum of the symbolic Jacobian G, we consider its characteristic polynomial
(2.12) g(λ) = det(λ Id −G) =
|M |
X
k=1
ak (−1)k λ|M |−k ,
and employ a central lemma from [25, 26], which expands each coefficient ak in terms of Child-Selections.
Lemma 2.5. Let g(λ) be the characteristic polynomial of the symbolic Jacobian G of a network Γ. For each coefficient ak in (2.12), it holds that
(2.13) ak =
X
κκκ
det S[κκκ]
Y
Xm∈κ
RJ (Xm )m ,
where the sum runs over all k-CS triples κκκ.
The proof is based on the Cauchy–Binet formula and for this reason each summand det S[κκκ] Q
Xm∈κ is called a Cauchy–Binet summand (or CB summand). Lemma 2.5 provides the foundation for deriving spectral properties of the Jacobian using Child-Selections alone. By selecting appropriate subsets κκκ, one can approximate or reconstruct the characteristic polynomial of G through the corresponding CS-matrices. In the following, we list the main implications of this approach, which can be automatically explored by our Python module.
Nondegenerate networks. Most stability and bifurcation results consider only nondegenerate networks, defined as follows. Consider an initial condition x0 ∈ R|M|
>0 for (2.4). The sets
(2.14) x0 + Im S,
which are invariant under the flow, are called stoichiometric compatibility classes.
Left-kernel vectors w of the stoichiometric matrix S correspond to linear conservation laws, since
(2.15) d(wx(t))
dt = wx ̇ = wSr(x) = 0.
Arbitrary but fixed values for these conservation laws, i.e. Ci ∈ R such that wix(t) = Ci, can be used to reduce the system to a specific stoichiometric compatibility class via a standard reduction procedure.
A network is nondegenerate if the dimension of its associated dynamical system equals the number of species |M | minus the dimension n of the left kernel of S, i.e. the number of independent linear conservation laws. Equivalently:
6

Definition 2.6 (Nondegenerate networks). Let Γ be a reaction network with |M | × |E| stoichiometric matrix S, and let n ≥ 0 denote the number of linearly independent conservation laws, i.e. n = dim ker ST . Then Γ is nondegenerate if there exists a choice of the reactivity matrix R such that the symbolic Jacobian G = SR possesses a nonzero (|M | − n)-principal minor.
In terms of Child-Selections, the following characterization holds.
Proposition 2.7 ([7]). In the setting of Def. 2.6, a network Γ is nondegenerate if and only if there exists an invertible (|M | − n) × (|M | − n) CS-matrix.
Similarly, the spectrum of specific CS-matrices provides information about the possible spectral configurations of the symbolic Jacobian, as clarified below.
Instability and stability. Recall that a matrix A is Hurwitz-stable if all its eigenvalues have negative real part, and Hurwitz-unstable if at least one eigenvalue has positive real part. In dynamical systems theory [17], the Hurwitz-(in)stability of the Jacobian matrix sufficiently determines the local (in)stability of the corresponding fixed point. In our parameter-rich framework, this motivates the following definitions.
Definition 2.8 (Network admits stability). A nondegenerate network Γ admits stability if there exists a choice of the symbolic reactivity matrix R ̄ such that the symbolic Jacobian SR ̄ has |M | − n eigenvalues with negative real part, counted with algebraic multiplicity. Here, n again denotes the number of independent conservation laws.
Definition 2.9 (Network admits instability). A network Γ admits instability if there exists a choice of the symbolic reactivity matrix R ̄ such that the corresponding symbolic Jacobian SR ̄ is Hurwitz-unstable.
Definition 2.8 can be interpreted as stating that there exists a choice of the symbolic reactivity matrix such that the symbolic Jacobian, when restricted to a stoichiometric compatibility class, is Hurwitz-stable. Consequently, if a consistent and nondegenerate network admits stability, then there exists a parameter choice for which (2.4) possesses a stable fixed point. Conversely, if a consistent network endowed with parameter-rich kinetics admits instability, then there exists a parameter choic-
e for which system (2.4) possesses an unstable fixed point. Note that concluding directly on stability requires nondegeneracy, unlike the unstable case.
In terms of CS-matrices, the following propositions provide sufficient conditions.
Proposition 2.10 ([25]). For a nondegenerate network, if there exists a (|M | − n) × (|M | − n) CS-matrix S[κκκ] that is Hurwitz-stable, then the network admits stability.
Proposition 2.11 ([26]). If there exists a CS-matrix S[κκκ] that is Hurwitz-unstable, then the network admits instability.
7

Both Prop. 2.10 and Prop. 2.11 can be generalized by allowing the existence of a positive diagonal matrix D such that S[κκκ]D is Hurwitz-(un)stable. The current version of our Python module, however, does not yet implement this generalization, and therefore we present the propositions in this restricted form.
Cores. Let κκκ = (κ, Eκ, J) be a k-CS. Child-Selections can be concatenated in the sense that any restriction κκκ′′′ of κκκ, to subsets κ′ ⊂ κ and Eκ′ = J(κ′) ⊂ Eκ, is itself a k′-CS κκκ′′′ = (κ′, Eκ′, J). From the perspective of CS-matrices, the CS-matrix associated with κκκ′′′ appears as a principal submatrix of the CS-matrix associated with κκκ.
Therefore, it is natural to consider minimal CS-matrices S[κκκ] with respect to a matrix property P, meaning that S[κκκ] satisfies P while no proper principal submatrix does. For examples, in [26] unstable cores are defined as Hurwitz-unstable CS-matrices such with no Hurwitz-unstable principal submatrix. For the purposes of this study, the main property of interest concerns specifically the sign of the determinant of unstable cores.
Definition 2.12 (Unstable-positive feedback, [26]). A k×k CS-matrix S[κκκ] is an unstablepositive feedback if
(2.16) sign det S[κκκ] = (−1)k−1,
and no k′ < k principal submatrix S[κκκ′] satisfies
(2.17) sign det S[κκκ′] = (−1)k′−1.
Unstable-positive feedbacks always possess a single real positive eigenvalue [26]. In [26], the definition was slightly more restrictive, requiring additionally that no principal submatrix of S[κκκ] be Hurwitz-unstable. For the purposes of the present analysis, Def. 2.12 is the most appropriate.
For completeness, we also recall the definition of unstable-negative feedback, although the current version of our Python module BiRNe primarily focuses on unstable-positive feedbacks.
Definition 2.13 (Unstable-negative feedback, [26]). A k×k CS-matrix S[κκκ] is an unstablenegative feedback if it is Hurwitz-unstable and
(2.18) sign det S[κκκ] = (−1)k,
and no k′ < k principal submatrix S[κκκ′] is Hurwitz-unstable.
Unstable-negative feedbacks always have one pair of complex-conjugate eigenvalues with positive real part and no real positive eigenvalue [26].
8

Autocatalysis. Autocatalysis is a fundamental concept in chemistry. Blokhuis et al. [6] provided a characterization of autocatalysis from a stoichiometric perspective, which has been then characterized in [26] in terms of CS-matrices. We recall the relevant definition.
Definition 2.14 (Stoichiometric Autocatalysis.). A network Γ with stoichiometric matrix S is autocatalytic if there exists a |M ′| × |E′| submatrix SA of S such that
1. for any reaction j appearing as a column of SA, we have m1 and m2, not necessarily distinct, with s−
m1j s+
m2j ̸= 0.
2. there exists a positive vector v ∈ R|E′|
>0 such that
(2.19) Sv > 0.
We also recall that a square matrix A is called Metzler if all its nondiagonal entries are nonnegative, i.e. Aij ≥ 0, for all i, j [8]. We have the following result, which characterizes autocatalysis in terms of CS-matrices.
Theorem 2.15 ([26]). A network is autocatalytic if and only if there exists a CS-matrix S[κκκ] which is an unstable-positive feedback and a Metzler matrix.
Real-zero eigenvalue: Multistationarity. Multistationarity refers to the coexistence of two or more fixed points under identical parameter values, and has been identified as a central mechanism underlying, for example, cell differentiation [23]. A network endowed with a parametric kinetic model is said to admit multistationarity if there exists a choice of parameters for which the system (2.4) has multiple fixed points. Building on the work of Banaji and Pantea, the capacity of a network to exhibi-
t multistationarity under parameter-rich kinetics can be characterized in terms of CS-matrices.
Theorem 2.16 ([4], [25]). A nondegenerate consistent network endowed with parameterrich kinetics admits multistationarity if and only if there exist two (|M | − n) × (|M | − n) CS-matrices S[κκκ1] and S[κκκ2] such that
(2.20) det S[κκκ1] det S[κκκ2] < 0.
Proof. Banaji and Pantea [4, Theorem 3] proved that a nondegenerate consistent network admits multistationarity if the Jacobian of the system restricted to a stoichiometric compatibility class can be made singular for a certain choice of parameters. [25, Corollary 5.7] presents the straightforward translation of this condition in terms of Child-Selections as (2.20).
Purely-imaginary eigenvalues: Periodic Orbits. Periodic oscillations play a central role in many reaction networks. In biochemistry, they regulate metabolic processes, circadian rhythms, and other essential biological functions [14]. The following result [7] gives a sufficient condition in terms of CS-matrices for the system (2.4) to admit nonstationary periodic solutions.
9

Theorem 2.17 ([7]). Let Γ be a consistent, nondegenerate network endowed with parameterrich kinetics. Assume there exists a CS-matrix S[κκκ] that is Hurwitz-stable and possesses a strict k′ × k′ principal submatrix S[κκκ′], which is an unstable-positive feedback. Then there exists a choice of parameters for which system (2.4) admits nonstationary periodic solutions.
Minimal CS-matrices satisfying the assumption of the theorem are called Oscillatory cores of Class A. Other sufficient conditions, based e.g. on unstable-negative feedback are also provided in [7], which we state here for consistency.
Theorem 2.18 ([7]). Let Γ be a consistent, nondegenerate network endowed with parameterrich kinetics. Assume there exists an unstable-negative feedback S[κκκ] which possesses a Hurwitz-stable (k − 1) × (k − 1) principal submatrix. Then there exists a choice of parameters for which system (2.4) admits nonstationary periodic solutions.
Minimal CS-matrices satisfying the assumption of the theorem are called Oscillatory cores of Class B. The proof of both results relies on the theory of global Hopf bifurcation [10].
3 The BiRNe module
BiRNe is an easy-to-use, open-source, Python-based module designed to identify stability changes of fixed points in reaction networks and to determine whether they are (i) of autocatalytic or non-autocatalytic nature, and (ii) whether they induce multistationarity or periodic oscillations. The module targets reaction networks of medium size (around 15 species or reactions). BiRNe is built on SymPy, a computer algebra system for symbolic mathematical computations that provides a wide variety of too-
ls and solvers ranging from calculus to linear algebra [18]. BiRNe accepts a list of reactions as input. See Algorithm 1 for the pseudocode. In plain terms, its workflow proceeds as follows:
1. Build the stoichiometric matrices. The input list of reactions is translated into reactant and product matrices, S− and S+, respectively. The stoichiometric matrix S is then obtained as S = S+ − S−. See (2.2), (2.1), (2.3) for a definition of such matrices.
2. Check the network’s consistency. The existence of a strictly positive right kernel vector of S, and hence the consistency of the network (2.10), is determined by solving the linear programming problem using SciPy’s linear optimizer [27]:
min v
s.t. Sv = 0
v>0
(3.1)
In certain modeling contexts, such as metabolic networks, the lack of consistency may simply reflect the omission of obvious production or degradation reactions, or the deliberate focus on a specific subnetwork structure. Moreover, results such as Thm. 2.17 naturally extend to any larger consistent network that contains the same motifs. For these reasons, if the network is not consistent, a warning is issued, but the algorithm continues its execution.
10

3. Generate the symbolic reactivity and Jacobian matrices. The symbolic reactivity matrix R is generated from the reactant matrix and has entries Rjm of the form
(3.2) Rjm =
(
r(j,m), if S−
mj > 0,
0, otherwise.
Here, r(j,m) is a SymPy symbol instantiated with the string representation ‘r(j,m)’, allowing instantaneous identification of its position in R. The symbolic Jacobian G is then computed as
(3.3) G = SR.
4. Compute and organize the characteristic polynomial of G. The characteristic polynomial of G is computed using SymPy’s charpoly function, which implements the Samuelson–Berkowitz algorithm [5]. Coefficients ck are extracted by size. Relating to (2.12) and Lemma 2.5, they correspond to
(3.4) ck = (−1)kak =
X
κκκ
(−1)k det S[κκκ]
Y
Xm∈κ
r(j,m),
where each r(j,m) satisfies r(j,m) = RJ(Xm)m for some CS bijection J. In particular, CB-summands associated with κκκ whose CS-matrix S[κκκ] is Hurwitz-unstable and satisfies
(3.5) sign det S[κκκ] = (−1)k−1
are readily identified in ck as those carrying negative coefficients.
Moreover, particular emphasis is given to minimal negative CB-summands, that is, summands
(3.6) (−1)k det S[κκκ]
Y
Xm∈κ
r(j,m) < 0
in ck such that in no coefficient ck′ with k′ < k there exists a negative summand
(3.7) (−1)k′ det S[κκκ′]
Y
Xm∈κ′
r(j,m) < 0,
where κκκ′ is a restriction of κκκ, i.e.
(3.8) {r(j,m) | Xm ∈ κ′} ⊂ {r(j,m) | Xm ∈ κ}.
The CS-matrix associated with such minimal negative CB-summands identifies the unstable cores, which are unstable positive feedbacks (see Def. 2.12). In parallel, a Hasse diagram [2] is constructed with the root vertex c0 = 1. The direct descendants of the root vertex are the minimal negative CB-summands representing unstablepositive feedbacks. From each such vertex, identified by a CS-triple κκκ′′′, further descendants are identified in coefficients ck, k > k′, for CB-summands associated to CS-tr-
iples κκκ whenever the relation (3.8) holds, that is, when κκκ′′′ is a restriction of κκκ.
11

5. Check nondegeneracy of the network. According to Prop. 2.7 and Lemma 2.5, nondegeneracy is verified by ensuring that the largest (|M | − dim(Ker ST ))th coefficient is not identically zero as a function of the symbolic entries of R. If the network is found to be degenerate, a warning is issued: most of the known results hold for nondegenerate networks. For analogous modeling reasons as exposed in the consistency check above, the algorithm continues nevertheless its execution.
6. Check if the network admits stability. Likewise, the same largest (|M | − dim(Ker ST ))th coefficient is examined to determine if the network admits stability. For any CB-summand with positive sign, the corresponding CS-matrix is extracted and its eigenvalues computed. If any such CS-matrix is Hurwitz-stable, the network is declared stable and further testing is omitted.
7. Test for multistationarity. We check whether the same coefficient contains CBsummands with both positive and negative signs. If this is the case, for nondegenerate networks, multistationarity is implied by Thm. 2.16.
8. Testing autocatalysis. Negative CB-summands are further examined for autocatalysis: the associated CS-matrix is extracted and tested for the Metzler property. If the matrix is Metzler, the corresponding feedback is autocatalytic. Autocatalytic unstable-positive feedbacks identify autocatalytic cores in the sense of [6]. A network is certified as autocatalytic if at least one negative CB-summand is associated with a Metzler CS-matrix, and as non-autocatalytic otherwise.
9. Testing oscillations. For any negative CB-summand in a coefficient ck,
(3.9) (−1)k det S[κκκ]
Y
Xm∈κ
r(j,m) < 0,
we test whether there exists a CB-summand with positive sign in a coefficient ck ̃
with k ̃ > k,
(3.10) (−1)k ̃ det S[ ̃κκ ̃κ ̃]
Y
Xm∈κ ̃
r(j,m) > 0,
such that κκκ is a restriction of κκ ̃κ, i.e.
(3.11) {r(j,m) | Xm ∈ κ} ⊂ {r(j,m) | Xm ∈ κ ̃}.
This corresponds to the existence of an edge in the constructed Hasse diagram that connects vertex with negative coefficient to a descendant vertex with positive coefficient. Once such a pair is found, the Hurwitz-stability of S[κ ̃κ ̃κ ̃] is checked. If stability is confirmed, S[ ̃κκ ̃κ ̃] satisfies the assumptions of Thm. 2.17, and the network is certified to admit nonstationary periodic solutions.
12

Algorithm 1 BiRNe
Require: L: List of reactions Ensure: Una, Ua, O: map of unstable (non-)autocatalytic cores and oscillatory cores Ua, Un, O ← ⟨CB-summand, CS-matrix⟩, ⟨CB-summand, CS-matrix⟩, ⟨CB-summand, [ ]⟩ S+, S−, M, R ←StoichiometricMatrices(L) ▷ M : metabolites, R: reactions S ← S+ − S−
admitsStability, multiStationarity ← False, False if ∃v ∈ R>0 : Sv = 0 then ▷ Consistency check m ← |M |
d ← dim(KerST )
R ← GenerateReactivityMatrix(S−) G←S·R
p ← Charpoly(G) ▷ p = G.charpoly(λ) C ← Coefficients(p) ▷ C = ⟨int, list⟩ if C[m − d] ̸= ∅ then ▷ Non-degeneracy check Cn, Cp ← DivideCoefficientsBySign(C) ▷ Cn/p = ⟨int, list⟩ if Cn[m] ̸= ∅ and Cp[m] ̸= ∅ then ▷ Multistationarity check multistationarity ← True end if
for c ∈ Cp[m] do ▷ Stability check Sc ← CSMatrix(S, c)
if Sc is Hurwitz-stable then admitsStability ← True Break end if end for
for i ∈ {1, . . . , k − 1} do for c ∈ Cn[i] do
if MinimalityCheck(c)==True then Sc ← CSMatrix(S, c) k ← |Sc|
if Sc is Metzler then ▷ Autocatalysis check autocatalytic ← True Ua[c] ← Sc else
Un[c] ← Sc end if
for l ∈ {i + 1, . . . , m} do for c′ ∈ Cp[l] do
Sc′ ←CSMatrix(S, c′)
if c ⊆ c′ and Sc′ is Hurwitz-stable then ▷ Oscillatory Check if MinimalityCheck(c′) == True then O[c] ← [Sc, c′, Sc′] end if end if end for end for end if end for end for end if end if
return Ua, Un, O, admitsStability
13

4 An example
To show the effectiveness of BiRNe, we study a simplified model of glycolysis and the pentose phosphate pathway in the central metabolism of E. coli. As the purpose of this example is here only to demonstrate the capabilities of our module, we do not discuss any biological implication. The network consists of 14 metabolites: Glucose, Glucose-6-Phosphate (G6P), 6-Phosphogluconolactone (6PG), Fructose-6-Phosphate (F6P), Fructose-1,6-Bisphosphate (F16P), Dihydroxyacetonephosphate (DHAP), Glyceraldehy-
de-3-Phosphate (G3P), Xylulose-5-Phosphate (X5P), Ribose-5-Phosphate (R5P), Erythrose-4-Phosphate (E4P), Sedoheptulose-7-Phosphate (S7P), Sedoheptulose-1,7-Bisphosphate (S17P), Phosphoenolpyruvate (PEP), and Pyruvate (PYR); together with the following 23 reactions among them.
(4.1)

                                                     
                                                     
−−0→ Glucose (production of Glucose)
Glucose + PEP −−1→ G6P + PYR
G6P −−2→ F6P
F6P −−3→ G6P
F6P −−4→ F16P
F16P −−5→ DHAP + G3P
DHAP −−6→ G3P
G3P −−7→ PEP
PEP −−8→ PYR
PYR −−9→ PEP
G6P 10
−−→ 6PG
6PG 11
−−→ X5P
6PG 12
−−→ R5P
X5P + R5P 13
−−→ G3P + S7P
G3P + S7P 14
−−→ X5P + R5P
G3P + S7P 15
−−→ F6P + E4P
F6P + E4P 16
−−→ G3P + S7P
X5P + E4P 17
−−→ F6P + G3P
F6P + G3P 18
−−→ X5P + E4P
6PG 19
−−→ G3P + PYR
S7P 20
−−→ S17P
S17P 21
−−→ DHAP + E4P
PYR 22
−−→ (degradation of Pyruvate)
The size and connectivity of this metabolic network seats at the upper end of the applicability of BiRNe. The module computed the characteristic polynomial in 18,651 s and constructed the Hasse diagram and determined all unstable cores in further 8,037 s. The network was found to be consistent, non-degenerate, and to admit both stability and
14

DHAP
G3P
X5P
S7P
S17P
F6P
6 20
21
13
16 18
F6P F16P
S7P G3P
X5P
17
15
14
4
5
Figure 1: Depiction of two oscillatory cores of class A based on an autocatalytic (left) and a nonautocatalytic (right) unstable-positive feedback within the Glycolysis and Pentose Phosphate Pathway. Both unstable-positive feedbacks are shown in red. For clarity, hyperarrows involving multiple reactants or products are represented here in bipartite form. The associated CS-matrices are, respectively, (4.3) and (4.7).
multistationarity. In total, 33,820 negative CB-summands were identified, comprising 49 unstable cores: 29 autocatalytic and 20 non-autocatalytic. Among these unstable cores, 8 (5 autocatalytic and 3 non-autocatalytic) gave rise to 11 oscillatory motifs.
We refer to https://github.com/hollyritch/Bi.R.Ne for the complete output. Here we present two oscillatory cores of class A to exemplify: one based on autocatalytic unstable-positive feedback and one on non-autocatalytic unstable-positive feedback (see Figure 1, left and right, respectively). The first example, left in Fig. 1, concerns the following CS-triple:
κκκ1 = (κ1 = {F6P, DHAP, G3P, X5P, S7P, S17P}, Eκ1 = {6, 13, 16, 18, 20, 21},
J(κ) = {16, 6, 18, 13, 20, 21}),
(4.2)
with associated Hurwitz-stable CS-matrix:
(4.3) S[κκκ1] =
16 6 18 13 20 21

     

     
F6P −1 0 −1 0 0 0 DHAP 0 −1 0 0 0 1 G3P 1 1 −1 1 0 0 X5P 0 0 1 −1 0 0 S7P 1 0 0 1 −1 0 S17P 0 0 0 0 1 −1
,
with eigenvalues all λi = −1. On the other hand, marked in red in Fig. 1, the restriction κκκ′
1 defined on κ1 \ {F6P}:
κκκ′
1 = (κ′
1 = {DHAP, G3P, X5P, S7P, S17P}, Eκ1 = {6, 13, 18, 20, 21},
J(κ1) = {6, 18, 13, 20, 21}),
(4.4)
identifies a Hurwitz-unstable CS-matrix, which is in particular an unstable-positive feed
15

back and Metzler. This yields autocatalysis via Thm. 2.15.
(4.5) S[κκκ′
1] =
6 18 13 20 21

   

   
DHAP −1 0 0 0 1 G3P 1 −1 1 0 0 X5P 0 1 −1 0 0 S7P 0 0 1 −1 0 S17P 0 0 0 1 −1
,
with det S[κκκ′
1] = (−1)5−1 = 1. The CS-matrix S[κκκ′
1] corresponds to an autocatalytic core sensu [6], precisely of type II. In conclusion, S[κκκ1] is an oscillatory core of class A.
The second example, right in Fig. 1, is based on the following CS-triple:
κκκ2 = (κ2 = {F6P, F16P, G3P, X5P, S7P}, Eκ2 = {4, 5, 14, 15, 17},
J(κ2) = {4, 5, 15, 17, 14})
(4.6)
with associated Hurwitz-stable CS-matrix:
(4.7) S[κκκ2] =
4 5 15 17 14

   

   
F6P −1 0 1 1 0 F16P 1 −1 0 0 0 G3P 0 1 −1 1 −1 X5P 0 0 0 −1 1 S7P 0 0 −1 0 −1
,
with eigenvalues (λ1, λ2, λ3, λ4, λ5) ≈ (−2.24, −1.34 ± 0.8i, −0.04 ± 0.43). On the other hand, marked in red in Fig. 1, the restriction κκκ′
2 defined on κ2 \ {X5P}:
κκκ′
2 = (κ′
2 = {F6P, F16P, G3P, S7P}, Eκ2 = {4, 5, 14, 15},
J(κ2) = {4, 5, 15, 14})
(4.8)
identifies a Hurwitz-unstable CS-matrix S[κκκ′
2], which is in particular an unstable-positive feedback but not a Metzler matrix; thus, there is no autocatalysis:
(4.9) S[κκκ′
2] =
4 5 15 14

 

 
F6P −1 0 1 0 F16P 1 −1 0 0 G3P 0 1 −1 −1 S7P 0 0 −1 −1
,
with det S[κκκ′
2] = (−1)4−1 = −1. Finally, we point out that the same set κ2 and Eκ, but with different bijection J(κ2) = {4, 5, 17, 15, 14}, gives rise to a Hurwitz-unstable CS-matrix:
(4.10) S[κ ̃κ ̃κ ̃2] =
4 5 14 17 15

   

   
F6P −1 0 0 1 1 F16P 1 −1 0 0 0 G3P 0 1 −1 1 −1 X5P 0 0 1 −1 0 S7P 0 0 −1 0 −1
,
16

obtainable from S[κκκ2] with a single swap of columns (14,15). In particular, S[κ ̃κ ̃κ ̃2] is unstable and does not give rise to oscillations. For simplicity, we have not marked such subtlety in Fig. 1.
5 Discussion
We have presented BiRNe, a Python-based computer algebra module designed to identify motifs associated with stability changes of fixed points in reaction networks and the resulting bifurcations, classified as either leading to multistationarity (zero-eigenvalue bifurcations) or to periodic oscillations (purely imaginary eigenvalue bifurcations).
In contrast to commercial symbolic computing environments with restrictive licensing and recurring fees, Python is developed under an OSI-approved open-source license, making it freely accessible. In addition, SymPy provides a powerful computer algebra system within Python for symbolic computations, offering a broad range of algorithms and solvers for calculus and linear algebra. For networks of moderate size (typically up to 15 species and reactions, depending on the network’s connectivity) our i-
mplementation can determine multistationarity and identify all unstable-positive feedbacks, classifying them as autocatalytic or non-autocatalytic, and further detecting whether they give rise to periodic oscillations. The presented algorithm relies solely on basic functionality common to most symbolic computation platforms. Consequently, it could be adapted to more efficient symbolic programming environments with minimal effort. On the other hand, substantial performance gains, such as those need-
ed to apply the method to large-scale networks, appear unlikely: the approach relies on computing the characteristic polynomial of a symbolic matrix, an operation whose computational complexity grows exponentially with the matrix size, i.e., with the number of species in the network. Thus, at best, only minor gains would be expected, i.e. size limitations could be raised only by a handful of additional species and reactions within reasonable computation times. The analysis of large reaction networ-
ks, such as metabolic systems in bacteria or eukaryotes involving hundreds to thousands of species and reactions, requires a fundamentally different methodological approach. In this regard, we refer to our forthcoming framework for detecting autocatalytic cycles in chemical reaction networks [12], based on graph-theory tools.
The current version (November 2025) of the module evaluates multistationarity based on Thm. 2.16 without specifying the bifurcation type and scans only for one mechanism of oscillations (Thm. 2.17). Future developments aim to extend these capabilities by certifying specific zero-eigenvalue bifurcations, such as saddle-node bifurcations (cf. [24]), and incorporating additional oscillatory motifs, for example those described as Recipe 0 in [7] or addressed in Thm. 2.18, thereby broadening the module-
’s analytical scope and applicability.
References
[1] David Angeli, Patrick De Leenheer, and Eduardo D Sontag, A Petri net approach to the study of persistence in chemical reaction networks, Mathematical biosciences 210 (2007), no. 2, 598–618.
17

[2] K. A. Baker, P. C. Fishburn, and F. S. Roberts, Partial orders of dimension 2, Networks 2 (1972), no. 1, 11–28.
[3] Murad Banaji and Bala ́zs Boros, The smallest bimolecular mass action reaction networks admitting Andronov–Hopf bifurcation, Nonlinearity 36 (2023), no. 2, 1398.
[4] Murad Banaji and Casian Pantea, Some results on injectivity and multistationarity in chemical reaction networks, SIAM Journal on Applied Dynamical Systems 15 (2016), no. 2, 807–869.
[5] Stuart J. Berkowitz, On computing the determinant in small parallel time using a small number of processors, Information Processing Letters 18 (1984), no. 3, 147–150.
[6] Alex Blokhuis, David Lacoste, and Philippe Nghe, Universal motifs and the diversity of autocatalytic systems, Proceedings of the National Academy of Sciences 117 (2020), no. 41, 25230–25236.
[7] Alex Blokhuis, Peter F. Stadler, and Nicola Vassena, Stoichiometric recipes for periodic oscillations in reaction networks, August 2025.
[8] Francesco Bullo, Lectures on network systems, vol. 1, Kindle Direct Publishing, 2020.
[9] Carsten Conradi, Dietrich Flockerzi, and Jorg Raisch, Saddle-node bifurcations in biochemical reaction networks with mass action kinetics and application to a double-phosphorylation mechanism, 2007 American control conference, IEEE, 2007, pp. 6103–6109.
[10] Bernold Fiedler, An index for global Hopf bifurcation in parabolic systems., Journal fu ̈r die reine und angewandte Mathematik 358 (1985), 1–36.
[11] Karin Gatermann, Markus Eiswirth, and Anke Sensse, Toric ideals and graph theory to analyze Hopf bifurcations in mass action systems, Journal of Symbolic Computation 40 (2005), no. 6, 1361–1382.
[12] Richard Golnik, Thomas Gatter, Peter F Stadler, and Nicola Vassena, Detecting autocatalytic cycles in chemical reaction networks, In preparation.
[13] Bryan S Hernandez, Patrick Vincent N Lubenia, Matthew D Johnston, and Jae Kyoung Kim, A framework for deriving analytic steady states of biochemical reaction networks, PLoS computational biology 19 (2023), no. 4, e1011039.
[14] Benno Hess and Arnold Boiteux, Oscillatory phenomena in biochemistry, Annual review of biochemistry 40 (1971), no. 1, 237–258.
[15] Archibald Vivian Hill, The possible effects of the aggregation of the molecules of haemoglobin on its dissociation curves, The Journal of Physiology 40 (1910), 4–7.
[16] Crawford Stanley Holling, The functional response of predators to prey density and its role in mimicry and population regulation, The Memoirs of the Entomological Society of Canada 97 (1965), no. S45, 5–60.
[17] Sze-Bi Hsu and Kuo-Chang Chen, Ordinary differential equations with applications, vol. 23, World scientific, 2022.
18

[18] Aaron Meurer, Christopher P. Smith, Mateusz Paprocki, Ondˇrej Cˇ ertı ́k, Sergey B. Kirpichev, Matthew Rocklin, AMiT Kumar, Sergiu Ivanov, Jason K. Moore, Sartaj Singh, Thilina Rathnayake, Sean Vig, Brian E. Granger, Richard P. Muller, Francesco Bonazzi, Harsh Gupta, Shivam Vats, Fredrik Johansson, Fabian Pedregosa, Matthew J. Curry, Andy R. Terrel, ˇSteˇp ́an Roucˇka, Ashutosh Saboo, Isuru Fernando, Sumith Kulal, Robert Cimrman, and Anthony Scopatz, Sympy: symbolic computing in python, Peer-
J Computer Science 3 (2017), e103.
[19] L. Michaelis and M. L. Menten, Die Kinetik der Invertinwirkung, Biochem. Z. 49 (1913), 333–369.
[20] Stefan Mu ̈ller and Georg Regensburger, Generalized mass action systems: Complex balancing equilibria and sign vectors of the stoichiometric and kinetic-order subspaces, SIAM Journal on Applied Mathematics 72 (2012), no. 6, 1926–1947.
[21] Mercedes P ́erez Milla ́n and Alicia Dickenstein, The structure of MESSI biological systems, SIAM Journal on Applied Dynamical Systems 17 (2018), no. 2, 1650–1682.
[22] Gergely R ̈ost and AmirHosein Sadeghimanesh, Exotic bifurcations in three connected populations with allee effect, International Journal of Bifurcation and Chaos 31 (2021), no. 13, 2150202.
[23] Ren ́e Thomas and Marcelle Kaufman, Multistationarity, the basis of cell differentiation and memory. I. Structural conditions of multistationarity and other nontrivial behavior, Chaos: An Interdisciplinary Journal of Nonlinear Science 11 (2001), no. 1, 170–179.
[24] Nicola Vassena, Structural conditions for saddle-node bifurcations in chemical reaction networks, SIAM Journal on Applied Dynamical Systems 22 (2023), no. 3, 1639–1672.
[25] , Symbolic hunt of instabilities and bifurcations in reaction networks, Discrete and Continuous Dynamical Systems - Series B 30 (2023), no. 6, 2183–2208.
[26] Nicola Vassena and Peter F Stadler, Unstable cores are the source of instability in chemical reaction networks, Proceedings of the Royal Society A 480 (2024), no. 2285, 20230694.
[27] Pauli Virtanen, Ralf Gommers, Travis E. Oliphant, Matt Haberland, Tyler Reddy, David Cournapeau, Evgeni Burovski, Pearu Peterson, Warren Weckesser, Jonathan Bright, Ste ́fan J. van der Walt, Matthew Brett, Joshua Wilson, K. Jarrod Millman, Nikolay Mayorov, Andrew R. J. Nelson, Eric Jones, Robert Kern, Eric Larson, C J Carey, I ̇lhan Polat, Yu Feng, Eric W. Moore, Jake VanderPlas, Denis Laxalde, Josef Perktold, Robert Cimrman, Ian Henriksen, E. A. Quintero, Charles R. Harris, Anne M. Archibald-
, Antoˆnio H. Ribeiro, Fabian Pedregosa, Paul van Mulbregt, and SciPy 1.0 Contributors, SciPy 1.0: Fundamental Algorithms for Scientific Computing in Python, Nature Methods 17 (2020), 261–272.
[28] P Waage and CM Guldberg, Studier over affiniteten, Forhandlinger i Videnskabsselskabet i Christiania 1 (1864), 35–45.
19

---

## Processing Information

- **Processing Library:** Zotero PDFWorker
- **Processing Date:** 2026-02-10T18:15:21.216Z
- **Text Length:** 44258 characters
- **Success:** Text extraction completed
- **PDF Library Used:** Zotero PDFWorker
- **Pages Processed:** 19 of 19
