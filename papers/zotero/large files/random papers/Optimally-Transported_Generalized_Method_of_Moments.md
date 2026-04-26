# PDF Document: Schennach and Starck - 2025 - Optimally-Transported Generalized Method of Moments.pdf

**File Path:** Schennach and Starck - 2025 - Optimally-Transported Generalized Method of Moments.pdf

**Processed Date:** 2026-02-10T18:16:22.800Z

**File Size:** 392.84 KB

**Total Pages:** 46

**Extracted Pages:** 46

**PDF Library:** Zotero PDFWorker

**Attachment Item ID:** 3229

**Title:** Optimally-Transported Generalized Method of Moments

**Collection:** Large Files > Random Papers

---

## Extracted Text Content

Optimally-Transported
Generalized Method of Moments
Susanne Schennach∗† and Vincent Starck‡§
Brown University, LMU M ̈unchen
November 11, 2025
Abstract
We propose a novel optimal transport-based version of the Generalized
Method of Moment (GMM). Instead of handling overidentification by reweight
ing the data to satisfy the moment conditions (as in Generalized Empirical
Likelihood methods), this method proceeds by allowing for errors in the vari
ables of the least mean-square magnitude necessary to simultaneously satisfy
all moment conditions. This approach, based on the notions of optimal trans
port and Wasserstein metric, aims to address the problem of assigning a logical
interpretation to GMM results even when overidentification tests reject the
null, a situation that cannot always be avoided in applications. We illustrate
the method by revisiting Duranton, Morrow and Turner’s (2014) study of the
relationship between a city’s exports and the extent of its transportation infras
tructure. Our results corroborate theirs under weaker assumptions and provide
insight into the error structure of the variables.
Keywords: Wasserstein metric, GMM, overidentification, misspecification.
∗Support from NSF grants SES-1950969 and SES-2150003 is gratefully acknowledged. The authors would like to thank Alfred Galichon, Florian Gunsilius, Heejun Lee and seminar participants at NYU’s Advanced mathematical modeling in economics seminar, at the Econometrics and Optimal Transport Workshop at the University of Washington, at the Women in Econometrics Conference at the University of Toronto, at the Workshop on Optimal Transport in Econometrics at Collegio Carlo Alberto, and at the Aarhus Wor-
kshop in Econometrics VII for useful comments. †smschenn@brown.edu ‡Financial support from the European Research Council (Starting Grant No. 852332) is gratefully acknowledged. §V.Starck@lmu.de
1
arXiv:2511.05712v1 [econ.EM] 7 Nov 2025

1 Introduction
The Generalized Method of Moment (GMM) (Hansen (1982)) has long been the
workhorse of statistical modeling in economics and the social sciences. Its key distin
guishing feature, relative to the basic method of moments, is the presence of overiden
tifying restrictions that enable the model’s validity to be tested (Newey and McFadden
(1994)). With this ability to test comes the obvious practical question of what one
should do if an overidentified GMM model fails overidentification tests, a situation
that is not uncommon (as noted in Hall and Inoue (2003), Hansen (2001), Masten
and Poirier (2021), Conley, Hansen, and Rossi (2012), Andrews and Kwon (2019)),
even for perfectly reasonable, economically grounded, models.
A popular approach has been to find the “pseudo-true” value of the model pa
rameter (Sawa (1978), White (1982)) that minimizes the “distance” or discrepancy
between the data and the moment constraints implied by the model. This approach
has gained further support since the introduction of Generalized Empirical Likeli
hoods (GEL) and Minimum Discrepancy estimators (Owen (1988), Qin and Lawless
(1994), Newey and Smith (2004)), all of which provide more readily interpretable
pseudo-true values (Imbens (1997), Kitamura and Stutzer (1997), Schennach (2007)).
GEL implicitly attributes the mismatch in the moment conditions solely to a
biased sampling of the population. While this is a possible explanation, it is not
the only reason a valid model would fail overidentification tests, when taken to the
data. Another natural possibility is the presence of errors in the variables (Aguiar
and Kashaev (2021), Doraszelski and Jaumandreu (2013), Schennach (2020)). In
this work, we develop an alternative to GMM that ensures, by construction, that
overidentifying restrictions are satisfied by allowing for possible errors in the variables
instead of sampling bias. We employ the generic term error to include, not only
measurement error, but anything that could cause the recorded data to differ from
the value they should have if the model were fully correct, i.e., this could include some
model errors. More generally, we allow distortions in the data generating process
whose magnitude is quantified by a Wasserstein-type metric (Villani (2009)), in the
spirit of distributionally robust methods (Christensen and Connault (2022), Blanchet,
Murthy, and Si (2022)). In analogy with GEL, which does not require the form of
the sampling bias to be explicitly specified, the error process does not need to be
explicitly specified in our approach, but is instead inferred from the requirement of
satisfying the overidentifying constraints imposed by the GMM model. Of course, the
2

accuracy of the resulting estimated parameters will typically improve with the degree
of overidentification.1
A fruitful way to accomplish this is to employ concepts from the general area
of optimal transport problems (e.g., Galichon (2016), Villani (2009), Carlier, Cher
nozhukov, and Galichon (2016), Ekeland, Galichon, and Henry (2011), Chernozhukov,
Galichon, Hallin, and Henry (2017), Gunsilius and Schennach (2021)). The idea is to
find the parameter value that minimizes cost of “transporting” the observed distribu
tion of the data μx onto another distribution μz that satisfies the moment conditions
exactly. Formally, the true iid data zi is assumed to satisfy E [g (zi, θ)] = 0, where E
is the expectation operator, for a parameter value θ in some set Θ and some given
dg-dimensional vector g (zi, θ) of moment functions. However, we instead observe
an error-contaminated counterpart xi of the true vector zi (both taking value in
X ⊆ Rdx). We seek to exploit the model’s over-identification to gain information
regarding the error in xi. The Euclidean norm ‖(z − x)‖ is chosen here for compu
tational convenience, although one could imagine a whole class of related estimators
obtained with different choices of metric. Our focus on Euclidean norms parallels the
choice made in common estimators (e.g. least squares regressions, classical minimum
distance and even GMM). Considering a weighted Euclidean norm can be useful to
indicate the relative expected error magnitudes along different dimensions of x.
Given a probability measure μx for the random variable x, this setup suggests
solving the following population optimization problem, for a given θ:
mμzixn
Eμzx
[‖z − x‖2] (1)
subject to μzx, supported on X × X , having marginal μx and Eμzx [g (z, θ)] = 0, where
Eμ denotes an expectation under the measure μ. (This problem is guaranteed to have
a solution if there exists at least one measure μz∗ such that Eμz∗ [g (z, θ)] = 0.) This
setup covers the most general case, including both discrete and continuous variables,
and can be handled using linear programming techniques (e.g., Santambrogio (2015),
Section 6.4.1), after observing that the moment constraint is easy to incorporate
since it is linear in the probability measure. However, we shall focus on the purely
continuous case in the remainder of this paper, because it enables us to express the
1In the case where the statistical properties of the errors are in fact known a priori, other methods may be more appropriate (e.g. Schennach (2004), Schennach (2014)), Schennach (2016), Schennach (2020) and references therein.
3

main ideas more transparently. The fully continuous case indeed admits a convenient
treatment, under the following regularity condition:
Assumption 1.1 The marginals μz (arising from the solution μzx at each θ ∈ Θ) and
μx have finite variance and μx is absolutely continuous with respect to the Lebesgue
measure.
Under this condition, by Theorem 1.22 in Santambrogio (2015), there exists a unique
μzx implied by a deterministic transport map z = q(x) that solves the constrained
optimization problem (1) and yielding a transport cost Eμx
[‖q(x) − x‖2]. Since de
termining the function q amounts to finding which value z each point x should be
mapped to, the sample version of this problem can be stated as
min
{zi}
1
2 ˆE [‖z − x‖2] (2)
subject to:
ˆE [g (z, θ)] = 0, (3)
where ˆE denotes sample averages (i.e. ˆE[a (x)] ≡ 1
n
∑n
i=1 a (xi), where n is sample
size and a(·) a given function). This optimization problem is then nested into an
optimization over θ, which delivers the estimated parameter value θˆ. We call this
estimator an Optimally-Transported GMM (OTGMM) estimator.
Our approach is conceptually similar to GEL, in that it minimizes some concept
of distributional distance under moment constraints. Yet, the notion of distance used
differs significantly. As shown in Figure 1, the distance here is measured along the
“observation values” axis rather than the “observation weights” axis (as it would be
in GEL). This feature arguably makes the method a hybrid between GEL and opti
mal transport, since GEL’s goal of satisfying all the moment conditions is achieved
through optimal transport instead of optimal reweighting. (The distinction from GEL
applies to the discrete case as well, since the OTGMM objective function depends on
both the amount and location of probability mass transfers, while the GEL objective
function is only sensitive on the amount, but not on the specific locations, of the
probability mass transfers.) Most of our regularity conditions will parallel those of
optimal GMM and GEL, but some will not (they are tied to the optimal transport
nature of the problem and involve assumptions regarding higher order derivatives). In
analogy with the behavior of GEL estimators, the OTGMM estimator will be shown
4

x2 x2
x1
x1
(a) (b)
Figure 1: Comparison between the sample points adjustments for (a) Generalized Empirical Likelihood (GEL), where observation weights (shown by point size) are adjusted, and (b) Optimal Transport GMM, where point positions are adjusted. Simple case of overidentified (parameter-free) model imposing no correlation shown, with original sample in gray and adjusted sample in black.
to be root-n consistent and asymptotically normal, despite involving an optimiza
tion problem having an infinite-dimensional nuisance parameter (the zi). In general,
however, OTGMM’s asymptotic variance does not coincide with that of GEL or ef
ficiently weighted GMM under correct specification. Hence, OTGMM is most useful
when errors in the variables or Wasserstein-type deviations in the data distribution
constitute a primary concern.
The remainder of the paper is organized as follows. We first formally define and
solve the optimization problem defining our estimator, before considering the limit
of small errors (in the spirit of Chesher (1991)) to gain some intuition. We then
derive the resulting estimator’s asymptotic properties for the general, large error,
case. We show asymptotic normality and root n consistency in both cases. We then
discuss related approaches and some extensions. The method’s practical usefulness
is illustrated by revisiting an influential study of the relationship between a city’s
exports and the extent of its transportation infrastructure (Duranton, Morrow, and
Turner (2014)). Our results corroborate that study under weaker assumptions and
provide insight into the error structure of the variables.
5

2 The estimator
2.1 Definition
The Lagrangian associated with the constrained optimization problem defined in
Equations (2) and (3) is
1
2 ˆE [‖z − x‖2] − λ′ˆE [g (z, θ)] ,
where ˆE[. . .] denotes a sample average and where λ is a Lagrange multiplier. The dual
problem’s first-order conditions with respect to θ, λ and zj, respectively, are then
ˆE [∂θg′(z, θ)] λ = 0 (4)
ˆE [g(z, θ)] = 0 (5)
(zj − xj) − ∂zg′(zj, θ)λ = 0 for j = 1, . . . , n (6)
where we let ∂v denote a partial derivative with respect to argument v. We shall use
∂v′ to denote a matrix of partial derivatives with respect to a transposed variable (e.g.,
∂θ′g(z, θ) ≡ ∂g(z, θ)/∂θ′). This formulation of the problem assumes differentiability
of g (z, θ) to a sufficiently high order, as shall be formalized in our asymptotic analysis.
2.2 Implementation
The nonlinear system (4)-(6) of equations can be solved numerically. To this effect,
we propose an iterative procedure to determine the zj, λ for a given θ. This yields an
objective function Qˆ(θ) that can be minimized to estimate θ. Let zjt and λt denote the
approximations obtained after t steps. As shown in Supplement S.1.1, given tolerances
ǫ, ǫ′ and a given θ, the objective function Qˆ(θ) can be determined as follows:
Algorithm 2.1 1. Start the iterations with zj0 = xj and t = 0.
2. Let λt+1 =
(ˆE [H (zt, θ) H′ (zt, θ)]
)−1 (
−ˆE [g (zt, θ)] + ˆE [H (zt, θ) (zt − x)]
)
and
zt+1
j = xj + H′ (zjt, θ) λt+1, where H (z, θ) = ∂z′g (z, θ) = (∂zg′ (z, θ))′.
3. Increment t by 1; repeat from step 2 until ∥
∥zt+1
j − zjt
∥
∥ ≤ ǫ and ‖λt+1 − λt‖ ≤ ǫ′.
4. The objective function is then: Qˆ(θ) = 1
2 (λt)′ ˆE [H (zt, θ) H′ (zt, θ)] λt.
This algorithm is obtained by substituting zj = xj + H′ (zj, θ) λ obtained from
Equation (6) into Equation (5) and expanding the resulting expression to linear order
6

in λ. This linearized expression provides an improved approximation λt to the La
grange multiplier which can, in turn, yield an improved approximation zjt. The process
is then iterated to convergence. The expression for Qˆ(θ) is obtained by re-expressing
ˆE [‖z − x‖2] using Equation (6). Formal sufficient conditions for the convergence of
this iterative procedure can be found in Supplement S.1.2. In cases where this simple
approach fails to converge, one can employ robust schemes based on a combination
of discretization and linear programming (see Section 6.4.1 in Santambrogio (2015)).
To gain some intuition regarding the estimator, it is useful to consider the limit
of small errors when solving Equations (2)-(3), in the spirit of Chesher (1991)). This
limit corresponds to assuming that higher-order powers of ‖zi − xi‖ are negligible
relative to ‖zi − xi‖ itself. In this limit, the estimator admits a closed form with an
intuitive interpretation, as shown by the following result, shown in Appendix A.1.
Proposition 2.2 To the first order in zi−xi (i = 1, . . . , n) the estimator is equivalent
to minimizing a GMM-like objective function with respect to θ with a specific choice
of weighting matrix:
θˆ = arg mθin
ˆE [g′ (x, θ)]
(ˆE [H (x, θ) H′ (x, θ)]
)−1 ˆE [g (x, θ)] . (7)
From this expression, it is clear that the estimator downweights the moments
that are the most sensitive to errors in x, as measured by H (x, θ) ≡ ∂z′g (x, θ).
This accomplishes the desired goal of minimizing the effect of the errors when the
properties of the error process are unknown.
Although this weighting matrix appears suboptimal (relative to a correctly spec
ified optimally weighted GMM estimator), one should realize that the notion of op
timality depends on what class of data generating processes the “true model” en
compasses. Optimal GMM and GEL can be seen as Maximum Likelihood estimators
(Chamberlain (1987), Newey and Smith (2004)) under moment conditions expressed
in terms of the observed x. In contrast, OTGMM can be interpreted as a Maxi
mum Likelihood estimator for homoskedastic and normally distributed errors (x − z)
under moment constraints on the unobserved z. There is therefore a clear efficiency
robustness trade-off: OTGMM is less efficient if the observed x satisfy the moment
constraints, but allows for additional error terms that maintain the model’s correct
specification even if the observed x do not satisfy the overidentified moment con
straints, a more general setting where optimally weighted GMM or GEL offers no
7

efficiency guarantees.
3 Asymptotics
In this section, we show that, despite the estimator’s roots in the theory of optimal
transport, its large sample behavior remains amenable to standard asymptotic tools
since our focus is on an estimator of the parameter θ rather than on an estimator
of a distribution. We first consider the case of small errors, a limiting case that
may be especially important in the relatively common case of applications where
overidentifying restrictions tests are near the rejection region boundary. This limit
also parallels the approach taken in the GEL literature, where asymptotic properties
are often derived in the case where the overidentifying restrictions hold (e.g., Newey
and Smith (2004)).
3.1 Small errors limit
Our small error results enable us to illustrate that there is little risk in using our
estimator instead of efficient GMM when one is concerned about overidentification
test failure. If the data were to, in fact, satisfy the moment conditions, using our
approach does not sacrifice consistency, root n convergence or asymptotic normality.
The only possible drawback would be a suboptimal weighting of overidentifying mo
ment conditions, potentially leading to an increase in variance if the model happened
to be correctly specified. Conversely, if the model is misspecified, e.g., because the
data is error-contaminated, the optimal weighting of efficient GMM is no longer the
optimal weighting (since random deviations due to sampling variability are not the
main reason for the failure to simultaneously satisfy all moment conditions). For in
stance, if the errors are such that there is an unknown bias in the moment conditions
that decays to zero asymptotically but at a rate possibly slower than n−1/2, then the
model is still correctly specified asymptotically but the bias dominates the random
sampling error. Then, the optimal weighting should seek to minimize the effect of
error-induced bias, which our approach seeks to accomplish by weighting based on the
effect of errors in the variables on the moment conditions. Hence, in that sense, the
method provides a complementary alternative to standard GMM estimation offering
a different trade-off between efficiency and robustness to misspecification.
Our consistency result requires a number of fairly standard primitive assumptions.
Assumption 3.1 The random variables xi are iid and take value in X ⊂ Rdx.
8

Assumption 3.2 E[g(xi; θ0)] = 0, and E[g(xi; θ)] 6= 0 for other θ ∈ Θ, a compact
set.
In other words, Assumption 3.2 indicates that we consider here the case where
GMM would be consistent, in analogy with the setup traditionally considered in the
GEL literature (e.g. Newey and Smith (2004)).
Assumption 3.3 V[g(xi; θ0)] < ∞, where V denotes the variance operator.
Assumption 3.4 g(x; ·) is almost surely continuous and ‖g(x; θ)‖ ≤ h(x) for any
θ ∈ Θ and for some function h satisfying E [h (xi)] < ∞.
While Assumptions 3.1, 3.2, 3.3 and 3.4 directly parallel those needed to establish
the asymptotic properties of a standard GMM estimator (e.g. Theorems 2.6 and
3.2 in Newey and McFadden (1994)), our estimator requires a few more low-level
regularity conditions. Given that our estimator, in the small error limit (Equation
(7)), involves a sample average involving derivative H (x, θ) ≡ ∂z′g (x, θ), we need
to place some constraints on the behavior of that quantity as well. Below, we let
‖a‖ =
( ∑
i,j ai2,j
)1/2
for a matrix a.
Assumption 3.5 g is differentiable in its first argument and the derivative satisfies
E[‖∂z′g(xi; θ0)‖2] < ∞. Moreover, ‖∂z′g(xi; θ)‖ 6= 0 almost surely for all θ ∈ Θ.
Assumption 3.6 ∂z′g(x; θ0) is H ̈older continuous in x.
Assumption 3.7 E[∂z′g(xi; θ0)∂zg′(xi; θ0)] exists and is of full rank.
These assumptions ensure that the minimization problem defined by (2) and (3)
is well-behaved, i.e., small changes in the values of xi do not lead to jumps in the
solution zi to the optimization problem (aside from zero-probability events). It is
likely that these assumptions can be relaxed using empirical processes techniques.
However, here we favor simply imposing more smoothness (compared to the standard
GMM assumptions), because this leads to more transparent assumptions. They can
all be stated in terms of the basic function g(x; θ) that defines the moment condition
model, making them fairly primitive. We can then state our first consistency result.
Theorem 3.8 Under assumptions 3.1-3.7, the OTGMM estimator is consistent for
θ0 and λ = Op(n−1/2).
9

As a by-product, this theorem also secures a convergence rate on the Lagrange
multiplier λ which proves useful for establishing our distributional results. The con
ditions needed to show asymptotic normality also closely mimic those of standard
GMM estimators (e.g. Theorem 3.2 in Newey and McFadden (1994)):
Assumption 3.9 θ0 ∈ Θ◦, the interior of Θ.
Assumption 3.10 E[supθ∈η ‖∂θ′g(xi; θ)‖] < ∞ where η ⊂ Θ is a neighborhood of θ0.
Assumption 3.11 (E[∂θ′g(xi; θ0)′] (E[∂z′g(xi; θ0)∂z′g(xi, θ0)′])−1 E[∂θ′g(xi; θ0)]) is in
vertible.
We can then provide an explicit expression of the estimator’s asymptotic variance.
Theorem 3.12 Under Assumptions 3.1-3.11, the OTGMM estimator is asymptoti
cally normal with √n(θˆOT GMM − θ0) →d N (0; V ), where
V=
(
E[G′i] (E[HiHi′])−1 E[Gi]
)−1 × (E[G′i] (E[HiHi′])−1 E[gigi′] (E[HiHi′])−1 E[Gi]) ×
(
E[G′i] (E[HiHi′])−1 E[Gi]
)−1 ,
where Hi ≡ ∂z′g(xi; θ0), Gi ≡ ∂θ′g(xi; θ0) and gi ≡ g(xi; θ0).
This simple normal limiting distribution with root n convergent behavior is some
what unexpected from an estimator that involves a high-dimensional optimization
over O(n) latent variables. As in GEL, this is made possible thanks to the existence
of an equivalent low-dimensional dual optimization problem, which is, in turn, equiv
alent to a simple GMM estimator, albeit with a nonstandard weighting matrix. Thus,
the variance has the expected “sandwich” form, since the reciprocal weights E[HiHi′]
differs from the moment variance E[gigi′]. For comparison, an optimally weighted
GMM estimator would have an asymptotic variance of (E[Gi]′(E[gigi′])−1E[Gi])−1.
It is difficult to formulate a simple expression for the difference VOT GMM − VGMM
between the asymptotic variance of OTGMM and that of optimal GMM, but a simple
example suffices to illustrate that this difference could be any non-negative-definite
matrix.
10

Let xi take value in Rdx (dx ≥ 2) with E [xil] = 0 and E [xilxil′] ≡ ωl when l = l′
and zero otherwise, for l, l′ = 1, . . . , dx. For θ ∈ R, let the moment functions be given
by gl (xi, θ) = xil − θ. We then have
VOT GMM = 1
d2x
dx
∑
l=1
ωl and VGMM =
( dx
∑
l=1
ω−1
l
)−1
.
Then, by the harmonic-arithmetic mean inequality, VOT GMM ≥ VGMM with equality
when ωl = c for all l. If ω1 −→ ∞ leaving all the other ωl finite, VOT GMM −→ ∞
while VGMM remains finite. (General non-negative-definite differences can be obtained
by stacking such moment conditions for different parameters θk (k = 1, . . . , dθ) and
possibly linearly transforming the resulting parameter vector θ.) Generally, we expect
the difference to be large when some moments have a disproportionally large variance
while not being disproportionally sensitive to changes in the underlying variables.
3.2 Asymptotics under large errors
In some applications, there may be considerable misspecification or its magnitude
may be a priori unknown. It thus proves useful to relax the assumption of small
errors in deriving the estimator’s asymptotic properties. To handle this more general
setup, we employ the following equivalence, demonstrated in Appendix A.2.
Theorem 3.13 If g (z, θ) is differentiable in its arguments, the OTGMM estimator
is equivalent to a just-identified GMM estimator expressed in terms of the modified
moment function
g ̃ (x, θ, λ) =
[
∂θg′ (q (x, θ, λ) , θ) λ
g (q (x, θ, λ) , θ)
]
(8)
that is a function of the observed data x and the augmented parameter vector θ ̃ ≡
(θ′, λ′)′ and where
q (x, θ, λ) ≡ arg min
z:z−∂zg′(z,θ)λ=x ‖z − x‖2 . (9)
Note that q (x, θ, λ) is essentially the inverse of the mapping z − ∂zg′ (z, θ) λ = x
(from Equation (6)), augmented with a rule to select the appropriate branch in case
the inverse is multivalued.
The equivalence result of Theorem 3.13 implies that many of the asymptotic tech
nical tools used in GMM-type estimators can be adapted to our setup, with the
11

distinction that the function q (x, θ, λ) is defined only implicitly. Hence, many of
our efforts below seek to recast necessary conditions on q (x, θ, λ) in terms of more
primitive conditions on the moment function g (z, θ) whenever possible or in terms of
regularity conditions drawn from optimal transport theory.
We start with a standard GMM-like identification condition:
Assumption 3.14 For some compact sets Θ and Λ, there exists a unique (θ0, λ0) ∈
Θ × Λ solving E [g ̃ (x, θ, λ)] = 0 for g ̃ (x, θ, λ) defined in Theorem 3.13.
This condition is implied by a natural uniqueness and regularity condition on the
solution to the primal optimal transportation problem (Equations (1)):
Assumption 3.15 Let μzx;θ denote the solution to Problem (1) for a given θ ∈ Θ.
(i) Eμzx;θ[‖z − x‖2] is uniquely minimized at θ = θ0 (ii) The corresponding marginals
μz;θ and μx are absolutely continuous with respect to the Lebesgue measure with a
density that is finite, nonvanishing and H ̈older continuous on their convex support.
Indeed, by Theorem [C3], part b) and d), in Caffarelli (1996), Assumption 3.15(ii)
implies that, at each θ, there exists a unique invertible transport map z = q (x) from
μx to μz;θ and both q and its inverse are equal to the gradient of a twice differentiable
strictly convex function. The fact that q−1 is the gradient of a twice differentiable
strictly convex function ensures that the first-order condition in Assumption 3.14 has
a unique solution (making a rule to handle multivalued inverses unnecessary).
Next, we consider standard continuity and dominance conditions that are used to
establish uniform convergence of the GMM objective function. These assumptions
constitute a superset of those needed for standard GMM because the modified moment
conditions include the additional parameter λ and higher-order derivatives of the
original moment conditions. In a high-level form, these conditions read:
Assumption 3.16 (i) g ̃ (x, θ, λ) is continuous in θ and λ for (θ, λ) ∈ Θ × Λ with
probability one and (ii) E [sup(θ,λ)∈Θ×Λ ‖g ̃ (x, θ, λ)‖] < ∞.
Alternatively, Assumption 3.16 can be replaced by more primitive conditions on
g (z, θ) instead, as given below in Assumptions 3.17, 3.18 and 3.20.
Assumption 3.17 (i) g (z, θ) and ∂z′g (z, θ) are differentiable in θ and (ii) ∂θ′g (z, θ)
is continuous in both arguments.
12

This assumption parallels continuity assumptions typically made for GMM, but
higher order derivatives of g (z, θ) are needed, because they enter the moment con
dition either directly or indirectly via the function q (x, θ, λ). The next condition
ensures that the function q (x, θ, λ) is well behaved.
Assumption 3.18 ν ̄ ̄λ < 1 where  ̄λ = maxλ∈Λ ‖λ‖ and ν ̄ = supθ∈Θ supz∈X maxk∈{1,...,dg}
max eigval (∂zz′gk (z, θ)), in which ∂zz′gk (z, θ) exists for k = 1, . . . , dg and where
eigval (M) for some matrix M denotes the set of its eigenvalues.
Once again, this condition can be alternatively phrased in terms of optimal trans
port concepts. The first order condition which implicitly defines z = q (x, θ, λ) can be
written in terms of the derivative of a potential function ψ(z, θ, λ) = z′z/2−g′ (z, θ) λ:
∇zψ(z, θ, λ) = x. With the help of Theorem [C3], part b) and d), in Caffarelli
(1996), Assumption 3.15(ii) implies that, at each θ, the above potential ψ(z, θ, λ) has
a positive-definite Hessian (with respect to z), which implies Assumption 3.18.
In order to state our remaining regularity conditions, it is useful to introduce a
notion of (nonuniform) Lipschitz continuity, combined with dominance conditions.
Definition 3.19 Let L be the set of functions h (z, θ) such that (i) E [supθ∈Θ ‖h (x, θ)‖]
< ∞ and (ii) there exists a function  ̄h (x, θ) satisfying
E
[
sup
θ∈Θ
 ̄h (x, θ) ‖∂z′g (x, θ)‖
]
< ∞. (10)
‖h (z, θ) − h (x, θ)‖ ≤  ̄h (x, θ) ‖z − x‖ (11)
for all x, z ∈ X and θ ∈ Θ, and where g (x, θ) is as in the moment conditions.
This Lipschitz continuity-type assumption has no parallel in conventional GMM. It
is made here because it ensures that the behavior of the observed x and the underlying
unobserved z will not differ to such an extent that moments of unobserved variables
would be infinite, while the corresponding observed moments are finite. Clearly,
without such an assumption, observable moments would be essentially uninformative.
The idea underlying Definition 3.19 is that we want to define a property that is akin
to Lipschitz continuity but that allows for some heterogeneity (through the function
 ̄h (x, θ) in Equation (11)). This heterogeneity proves particularly useful in the case
where X is not compact (for compact X , one can take  ̄h (x, θ) to be constant in x
13

with little loss of generality). For a given function h (x, θ) that is finite for finite x,
membership in L is easy to check by inspecting the tail behavior (in x) of the given
function h (x, θ). Polynomial tails will suggest a polynomial form for  ̄h (x, θ), for
instance. Equation (10) strengthens the dominance condition 3.19(i) to ensure that
functions h (x, θ) in L also satisfy a dominance condition when interacted with other
quantities entering the optimization problem, i.e. ∂z′g (x, θ)).
With this definition in hand, we can succinctly state a sufficient condition for
g ̃ (x, θ, λ) to satisfy a dominance condition:
Assumption 3.20 g (·, ·) and each element of ∂θg′ (·, ·) belong to L.
We are now ready to state our general consistency result.
Theorem 3.21 Under Assumptions 3.1, 3.14 and either Assumption 3.16 or As
sumptions 3.17, 3.18, 3.20, the OTGMM estimator is consistent ((θˆ, ˆλ) −p→ (θ0, λ0)).
We now turn to asymptotic normality. We first need a conventional “interior
solution” assumption.
Assumption 3.22 (θ0, λ0) from Assumption 3.14 lies in the interior of Θ × Λ.
Next, as in any GMM estimator, we need finite variance of the moment functions
and their differentiability:
Assumption 3.23 (i) V [g ̃ (x, θ0, λ0)] ≡ Ω exists and (ii) E [∂g ̃ (x, θ, λ) /∂ (θ′, λ′)] ≡
G ̃ exists and is nonsingular.
Assumption 3.23(ii) can be expressed in a more primitive fashion using the explicit
form for G ̃ provided in Theorem 3.26 below.
Next, we first state a high-level dominance condition that ensures uniform con
vergence of the Jacobian term ∂g ̃ (x, θ, λ) /∂ (θ′, λ′).
Assumption 3.24 (i) g ̃ (x, θ, λ) is continuously differentiable in (θ, λ);
(ii) E[ sup(θ,λ)∈Θ×Λ ‖∂g ̃ (x, θ, λ) /∂ (θ′, λ′)‖] < ∞.
This assumption is implied by the following, more primitive, condition:
14

Assumption 3.25 (i) g (z, θ) and ∂θg (z, θ) are continuously differentiable in θ, (ii)
all elements of ∂θgk (z, θ) and ∂θθ′gk (z, θ) for k = 1, . . . , dg belong to L and (iii)
Assumptions 3.17(i) and 3.18 hold.
We can now state our general asymptotic normality and root-n consistency result,
shown in Appendix A.2.
Theorem 3.26 Let the assumptions of Theorem 3.21 hold as well as Assumptions
3.22, 3.23 and either Assumption 3.24 or 3.25. Then,
√n
([ θˆ
λˆ
]
−
[
θ0
λ0
])
−d→ N (0, W −1)
where W = G ̃′Ω−1G ̃, Ω = E [g ̃g ̃′] ,
g ̃ ≡ g ̃(z, (θ0, λ0)) =
[
∂θg′ (z, θ0) λ0
g (z, θ0)
]
and G ̃ ≡ E[∂θg ̃′] =
[ G ̃θθ G ̃θλ
G ̃λθ G ̃λλ
]
in which
G ̃θθ ≡ E [∂θθ′ (λ′0g (z, θ0)) + ∂θz′ (λ′0g (z, θ0)) ∂θ′ q (x, θ0, λ0)]
G ̃λθ ≡ E [∂θ′g (z, θ0) + ∂z′g (z, θ0) ∂θ′q (x, θ0, λ0)]
G ̃θλ ≡ E [∂θ (g′ (z, θ0)) + ∂θz′ (λ′0g (z, θ0)) ∂λ′q (x, θ0, λ0)]
G ̃λλ ≡ E [∂z′g (z, θ0) ∂λ′q (x, θ0, λ0)]
where z solves x = z − ∂zg′ (z, θ) λ for given x, θ, λ and where
∂θ′q (x, θ, λ) =
[
(I − ∂zz′ (λ′g (z, θ)))−1 ∂zθ′ (λ′g (z, θ))
]
z=q(x,θ,λ) (12)
∂λ′q (x, θ, λ) =
[
(I − ∂zz′ (λ′g (z, θ)))−1 ∂zg′ (z, θ)
]
z=q(x,θ,λ) . (13)
In particular, for θ, the partitioned inverse formula gives
√n
(θˆ − θ0
) −d→ N
(
0, (Wθθ − WθλW −1
λλ Wλθ
)−1)
15

where W is similarly partitioned as:
W=
[
Wθθ Wθλ
Wλθ Wλλ
]
The asymptotic variance stated in Theorem 3.26 takes the familiar form expected
from a just-identified GMM estimator: (G ̃′Ω−1G ̃)−1. The relatively lengthy expres
sions merely come from explicitly computing the first derivative matrix G ̃ in terms of
its constituents. This is accomplished by differentiating g ̃ with respect to all parame
ters using the chain rule and calculating the derivative of q (x, θ, λ) using the implicit
function theorem.
We thus have now completely characterized the first-order asymptotic properties
of our estimator in the most general settings of large (i.e., non-local) misspecification.
This result thus allows researcher to directly replace their GMM estimator which
may happen to fail overidentification tests by another, logically consistent and easy
to-interpret, estimator where the overidentification failure is naturally accounted for
by errors in the variables. In addition, researchers can further document the presence
of errors via Theorem 3.26, as it enables, as a by-product, a formal test of the absence
of error. Under this null hypothesis, which can be stated as λ = 0, we have
nˆλ′ (Wλλ − WλθW −1
θθ Wθλ
)−1 ˆλ −d→ χ2dg , (14)
where the above expression can be straightforwardly derived from the partitioned
inverse formula applied to the λ sub-block of the asymptotic variance.
4 Discussion and extensions
On a conceptual level, our use of a so-called Wasserstein metric to measure distance
between distributions does provide some desirable theoretical properties. For in
stance, the Wasserstein metric metrizes convergence in distribution (see Theorem 6.9
in Villani (2009)) under some simple bounded moment assumptions. In contrast, the
discrepancies which generate GEL estimators do not admit such an interpretation. In
fact, most discrepancies are not metrics, as they lack symmetry. The Kullback-Leibler
discrepancy, which is perhaps the best known among them, does not allow compar
ison between distributions that are not absolutely continuous with respect to one
another, whereas the Wassertein metric does. (Of course, leveraging this advantage
16

requires considering the most general transport problem of Equation (1).) Finally,
it is arguably logical to penalize probability transfer over larger distances more than
the same probability transfer over smaller distances, as the Wasserstein metric does,
while none of GEL-related discrepancies do.
An interesting extension of our approach would be a hybrid method in which (i)
the possibility of general forms of errors is accounted for with the current method by
constructing the equivalent GMM formulation of the model via Theorem 3.13 and (ii)
additional restrictions on the form of the errors are imposed via additional moment
conditions involving some elements of z and x. This could prove a useful middle
ground when a priori information regarding the errors is available for some, but not
all, variables.
As shown in Supplement S.2, it is straightforward to extend our approach to allow
error in some, but not all variables. When our method is used while allowing for errors
in only a few variables, it may not be possible to simultaneously satisfy all moment
conditions for any θ. In such cases, it could make sense to consider a hybrid method
where both errors in the variables, handled via our approach, and re-weighting of the
sample, handled via GEL, are simultaneously allowed.
Finally, we should mention other approaches aimed at handling violations of overi
dentifying restrictions, which include the use of set identification combined with re
laxed moment constraints (Masten and Poirier (2021)), placing a Bayesian prior on
the magnitude of the deviations from correct specification of the moments (Conley,
Hansen, and Rossi (2012)), distributionally robust approaches that allow for devia
tions from the data generating process up to a given bound (Christensen and Connault
(2022), Blanchet, Murthy, and Si (2022)), sensitivity analysis (Andrews, Gentzkow,
and Shapiro (2017), Bonhomme and Weidner (2022)) and misspecified moment in
equality models (e.g. Andrews and Kwon (2019)).
5 Application
We revisit the study of Duranton, Morrow, and Turner (2014), who documented ev
idence that the quantity of goods a city exports is strongly related to the extent
of interstate highways present in that city. Due to simultaneity concerns, the au
thors adopt an instrumental variable approach to recover the causal effect of building
highways. Although the authors mitigate instrument validity concerns with controls,
instrument exogeneity or exclusion could remain a concern (as noted by Masten and
17

Poirier (2021)) and this problem would manifest itself by specification test failure.
Table 1: Main results
GMM OTGMM log highway km 0.39 0.40 se (0.12) (0.11) log employment 0.47 1.24 se (0.32) (0.31) market access (export) −0.63 −0.66 se (0.11) (0.10) log 1920 population −0.29 −0.57 se (0.23) (0.23) log 1950 population 0.65 1.14 se (0.37) (0.37) log 2000 population −0.20 −1.25 se (0.44) (0.35) log % manuf empl 0.64 0.58 se (0.12) (0.12) Overidentification P-value 0.30
Main results from Table 5 in Duranton, Morrow, and Turner (2014). Original GMM estimates and OTGMM estimates. Heteroskedasticity-robust standard errors (GMM) and small-error asymptotic standard error (OTGMM) in parentheses.
We apply our method to further assess the robustness of the results to poten
tial model misspecification. We seek to recover point estimates that remain inter
pretable under potential misspecification and account for misspecification by viewing
the model’s variables as potentially measured with error. Not only do we consider
errors in the regressors, but we also think of potentially invalid instruments as sim
ply mismeasured versions of an underlying valid instrument that is unfortunately
not available. Alternatively, one can think of the underlying valid instrument as the
counterfactual value of the instrument in a world where the mechanism causing this
instrument to be invalid would be absent. This broader interpretation of what could
constitute an “error” under our framework considerably expands the scope of models
that are conceptually consistent with our approach.
Duranton, Morrow, and Turner (2014) consider three instruments: (log) kilome
ters of railroads in 1898, quantity of historical exploration routes, and planned (log)
highway kilometers according to a 1947 construction map. The validity of these
instruments could be criticized, for instance, in a situation where some cities are in
18

proximity to key natural resources, which could cause higher exports and, at the same
time, more transportation routes (or plans to build them). If this mechanism is active
both in the present and in the past, the causal effect of highways on exports would be
overestimated. In our framework, the true but unavailable instrument could repre
sent a measure of past transportation routes in a counterfactual world where natural
resources would be evenly distributed among cities. The actual available instruments
represent an approximation to this ideal instrument, a situation which we represent
as a potentially non-classical errors-in-variables model.
The model’s moment conditions are written in terms of g(zi, θ) = wi(yi − ri′θ),
where the vector of observables zi = (yi, ri′, wi′)′ contains the dependent variable yi,
the vector of regressors ri and the vector of instruments wi. In Duranton, Morrow,
and Turner (2014), the dependent variable yi measures “propensity to export” and is
constructed from an auxiliary panel data model, which regresses volume of exports
between given cities on distance and trading partner characteristics, modeled as fixed
effects. It is the value of these fixed effects that is used as yi. Following Masten
and Poirier (2021), we take this construction as given and focus on export volume
measured by weight. Explicitly accounting for errors in yi is superfluous since, in a
regression setting, errors in the dependent variable are already allowed for.
In the analysis below, ri always includes the regressor of main interest: the (loga
rithm of) the number of kilometers of highway. It also contains a number of controls,
which may differ in the different models considered. These controls include: log
employment, log market access, log population in 1920, 1950, and 2000, and log man
ufacturing share in 2003, average distance to the nearest body of water, land gradient,
dummy variables for census regions, log share of the fraction of adult population with
a college degree or more, log average income per capita, log share of employment in
wholesale trade, and log average daily traffic on the interstate highways in 2005. We
allow for errors in all of these variables, except for the constant term and dummies.
We consider two of the specifications employed by Duranton, Morrow, and Turner
(2014): The specification with many covariates that most obviously passes the overi
dentifying test and the specification with few covariates that most clearly fails this
test. (The other specifications fall in between these extreme cases and are thus not
reported here, for conciseness.) The results from GMM, replicated from the original
study, and from OTGMM (allowing for large errors) are reported in Tables 1 and 2.
The OTGMM estimates are similar to those of Duranton, Morrow, and Turner
19

Table 2: Specification that fails the test for over-identifying restriction
GMM OTGMM log highway km 0.57 0.65 se (0.16) (0.19) log employment 0.52 0.49 se (0.11) (0.09) market access (export) −0.45 −0.46 se (0.13) (0.14) Overidentification P-value 0.043
Specification from column 2, Table 5, in Duranton, Morrow, and Turner (2014). Replicated estimates from the original paper and OTGMM estimates. Heteroskedasticityrobust standard errors (GMM) and small-error asymptotic standard error (OTGMM) in parentheses.
(2014). Although some coefficients of the controls are larger in magnitude, the main
coefficient — the elasticity of export weight relative to kilometers of highway — is
almost unchanged and remains statistically significant. As in the original study, the
95% confidence intervals of the main elasticity of interest obtained with different sets
of controls overlap significantly.
It is also instructive to look at the correction of the underlying variables implied
by OTGMM. Table 3, columns 1 and 2, documents this by looking at the standard
deviation of different elements of the correction zi − xi. The corresponding quantities
for the models of Tables 1 and 2 are reported in columns 1 and 2, respectively. To get
an idea of the scale, the last column reports the standard deviations of the observed
variables. As expected, the errors in column 1 are exceedingly small, reflecting the fact
that the model passes the overidentification test. In contrast, column 2 is particularly
interesting for our purposes because it corresponds to a specification that fails the
test of over-identifying restrictions. While this may, at first, cast doubt regarding the
GMM estimates, OTGMM shows that errors of the order of only 10% of the observed
regressors’ magnitude are sufficient to eliminate the mispecification. Such small error
magnitudes are highly plausible empirically, thus supporting the plausibility of the
OTGMM estimate. As the GMM and OTGMM estimates of the main elasticity of
interest are very close in Table 2, this also corroborates the authors’ GMM estimates.
Overall, our approach strongly supports the conclusions of the original study and
thus provides an effective robustness test.
20

The fact that the model with more controls leads to smaller error magnitudes is
very consistent with our interpretation: to the extent that including more controls
reduces the magnitude of the potentially endogenous residuals, one would expect that
our estimator has to perform smaller alterations to the variables to arrive at valid
instruments and/or non-endogeneous regressors. More quantitatively, suppose that
the instrument w and the error term ǫ can be decomposed into separate components,
say w = w1 + w2 and ǫ = ǫ1 + ǫ2, where w1 and ǫ1 are correlated, but the latter is
well explained by additional controls. In a model with fewer controls, our method has
to identify w1 and/or ǫ1 as error components to obtain a correctly specified model.
However, if including controls already accounts for the ǫ1 term, then our estimator no
longer needs to correct the corresponding components and thus achieves orthogonality
with smaller errors.
In contrast, using GEL to address misspecification would effectively assume that
the misspecification originates from some form of selection bias. The fact that adding
more control eliminates the misspecification indicates that the controls incorporate
the variables that explain selection bias. Yet, these controls are not included in the
model with few controls, precisely the model where the largest amount of sample
reweighting would take place when using GEL. This paradox makes the use of GEL
as a remedy difficult to rationalize in a setting where misspecification arises primarily
from the unavailability of adequate control variables.
Table 3: Standard deviations of errors and corresponding regressors
Variables
√
ˆV[z − x]
√
ˆV[z − x]
√
ˆV[x] (main) (failed over-ID)
log highway km 0.0034 0.0634 0.5884 log railroads km 1898 0.0048 0.0267 0.6031 exploration routes 0.0005 0.0418 0.8339 plan 1947 0.0075 0.0598 0.7049 log employment 0.0144 0.0473 0.8573 market access (export) 0.0056 0.0444 0.4864 log 1920 population 0.0052 1.0417 log 1950 population 0.0097 0.9253 log 2000 population 0.0163 0.8083 log % manuf empl 0.0050 0.3707
In Supplement S.4.1, we perform a number of robustness tests along the lines
21

suggested by Masten and Poirier (2021). We further replicate specifications with
many more controls and find that the GMM and OTGMM are still in close agreement.
In Supplement S.4.2, we also consider alternative specifications that allow for the
possibility that some instrumental variables should be included as regressors. The
performance of OTGMM in other simple models is also investigated via simulations
in Supplement S.5.
6 Conclusion
We have proposed a novel optimal transport-based version of the Generalized Method
of Moment (GMM) that fulfills, by construction, the overidentifying moment re
strictions by introducing the smallest possible amount of error in the variables or,
equivalently, by allowing for the smallest possible Wasserstein metric distortions in
the data distribution. This approach conceptually merges the Generalized Empirical
Likelihood (GEL) and optimal transport methodologies. It provides a theoretically
motivated interpretation to GMM results when standard overidentification tests reject
the null. GEL approaches handle model misspecification by re-weighting the data,
which would be appropriate when misspecification arise from improper sampling of
the population. In contrast, our optimal transport approach is appropriate when the
sources of misspecification are errors or, more generally, Wasserstein-type distortions
in the data distribution, which is arguably a common situation in applications.
A Proofs
A.1 Linearized estimator
Proof of proposition 2.2. In the following, the approximation denoted by “≈”
are exact to first order in zj − xj. In that limit, ∂zg′ (zj, θ) ≈ ∂zg′ (xj, θ). Therefore:
zj − xj ≈ ∂zg′ (xj, θ) λ
zj ≈ xj + ∂zg′ (xj, θ) λ (15)
Substituting into the constraint yields: ∑
j g (xj + ∂zg′ (xj, θ) λ, θ) ≈ 0., while using
a Taylor expansion gives: ∑
j (g (xj, θ) + ∂z′g (xj, θ) ∂zg′ (xj, θ) λ) ≈ 0, or:
ˆE [g (x, θ)] +
(ˆE [H (x, θ) H′ (x, θ)]
)
λ≈0
22

where H (x, θ) = ∂z′g (x, θ), thus implying:
λ≈−
(ˆE [H (x, θ) H′ (x, θ)]
)−1 ˆE [g (x, θ)] (16)
Substituting (15) and (16) back into the objective function (2) yields (with M ≡
ˆE [H (x, θ) H′ (x, θ)]) :
1 2n
∑
j
‖zj − xj‖2 ≈ 1
2n
∑
j
‖xj + H′ (xj, θ) λ − xj‖2
≈1
2n
∑
j
∥ ∥
∥−H′ (xj, θ) M −1 ˆE [g (x, θ)]
∥ ∥ ∥
2
=1
2 ˆE [g′ (x, θ)] M −1M M −1 ˆE [g (x, θ)]
=1
2 ˆE [g′ (x, θ)] M −1 ˆE [g (x, θ)]
A.2 Asymptotics
Proof of Theorem 3.8. We minimize 1
2
∑n
i=1 ‖zi−xi‖2 subject to ∑n
i=1 g(zi, θ) = 0.
First-order conditions for zi read
zi − xi = ∂zg′(zi; θ)λ (17)
It is first shown that there exists a sequence zi∗ that matches the moment condition
∑n
i=1 g(zi∗; θ0) = 0 and converges uniformly to the xi’s, implying convergence of the
zi’s by their definition in the optimization problem.
We now discuss how to eliminate observations that are too close to a zero gradient.
For some η and δ let A be the set of all xi such that infy∈Bδ(xi) ‖∂zg(y; θ0)‖ ≥ η. We
must have P[A] > 0 for some (η, δ) because otherwise {infy∈Bδ(xi) ‖∂zg(y; θ0)‖ ≥ 1/n}
has probability 0 for all n, thus {infy∈Bδ(xi) ‖∂zg(y; θ0)‖ > 0} has probability 0 for all
δ by continuity from below, contradicting assumption 3.5 with continuity of ∂zg.
We now consider such a pair (η, δ), fix the resulting set A, and let As be the
observations in sample that fall in it. In order to get enough degrees of freedom
to offset deviations of sample averages from 0, we make group of observations. Let
M ≡ dim(g(zi; θ0))/ dim(zi), and assume for convenience it is an integer that divides
n − |Acs|2. Without loss, let the xi in Acs constitute the first |Acs| observations and
let zi∗ = xi for all xi ∈ Acs. Then, for all k ∈ N (0 included) let mk ≡ {|Acs| +
2If not, it suffices to set the remaining (components of) zi∗ to xi and re-scale appropriately in what follows.
23

M k, · · · , |Acs| + M k + M − 1} and solve wpa1 for zi∗ in ∑
i∈mk (g(zi∗; θ0) − g(xi; θ)) =
−M n
|As|
1 n
∑n
i=1 g(xi; θ0). By the LLN 1
n
∑n
i=1 g(xi; θ0) →p 0 and |As|/n →p P[A] > 0
so that a sequence zi∗ with zi∗ →p xi will exist by continuity.
We also get supi ‖zi∗ − xi‖ →p 0 because supi ‖zi∗ − xi‖ ≤ supi ‖g(z∗
i ;θ)−g(xi;θ)‖
infy∈A ‖∂zg(y;θ)‖ ≤
ηop(1). By definition of zi and the previous result, we have 1
n
∑n
i=1 ‖zi − xi‖2 ≤
1 n
∑n
i=1 ‖zi∗ − xi‖2 ≤ supi ‖zi∗ − xi‖2 →p 0. By properties of norms, assumptions
3.5-3.6 with H ̈older continuity exponent α ≤ 1, Cauchy-Schwartz, the LLN, and the
previous convergence result
∥ ∥ ∥ ∥ ∥
1 n
n
∑
i=1
∂zg(zi; θ0)(zi − xi)
∥ ∥ ∥ ∥ ∥
≤1
n
n
∑
i=1
‖∂zg(zi; θ0) − ∂zg(xi; θ0)‖‖zi − xi‖ + 1
n
n
∑
i=1
‖∂zg(xi; θ0)‖‖zi − xi‖
≤ C1
n
n
∑
i=1
‖zi − xi‖1+α +
(
1 n
n
∑
i=1
‖∂zg(xi; θ0)‖2
)1/2 (
1 n
n
∑
i=1
‖zi − xi‖2
)1/2
p → 0
Furthermore, proceeding component-wise with (k·) denoting the kth row of a matrix
and using assumptions 3.5-3.6 together with previous results and proceeding as above
for the term 1
n
∑n
i=1 ‖[∂zg(zi; θ0)]k·‖ ‖zi − xi‖α, we have
∥ ∥ ∥ ∥ ∥
1 n
n
∑
i=1
[∂zg(zi; θ0)]k·[∂zg(zi; θ0)]′j· − 1
n
n
∑
i=1
[∂zg(xi; θ0)]k·[∂zg(xi; θ0)]′j·
∥ ∥ ∥ ∥ ∥
≤C1
n
n
∑
i=1
‖[∂zg(zi; θ0)]k·‖ ‖zi − xi‖α + C
(
1 n
n
∑
i=1
‖zi − xi‖2α
)1/2 (
1 n
n
∑
i=1
‖[∂zg(xi; θ0)]k·‖2
)1/2
p → 0 + (E[‖[∂zg(xi; θ0)]k·‖2])1/2 0 = 0
and thus, using assumption 3.7, there exists Cn = Op(1) such that
‖λ‖ ≤ Cn
∥ ∥ ∥ ∥ ∥
1 n
n
∑
i=1
∂zg(zi; θ0)(zi − xi)
∥ ∥ ∥ ∥ ∥
p → 0
Now we derive a precise rate of convergence and the resulting asymptotic distribution
for λ. Solving for zi in equation (17) yields zi(λ), which can be plugged in the second
equation to obtain ∑n
i=1 g(zi(λ); θ) = 0. By a Taylor expansion and assumption 3.7,
24

we get
1 n
n
∑
i=1
g(xi, θ0) + 1
n
n
∑
i=1
∂zg(xi; θ0)∂zg′(xi; θ0)λ + O(‖λ‖2) = 0 (18)
By assumptions 3.1, 3.2, 3.3 and the central limit theorem, the first term is Op(n−1/2).
Under assumptions 3.1 and 3.7, we have 1
n
∑n
i=1 ∂zg(xi; θ0)∂zg(xi; θ0)′ →p
E[∂zg(xi; θ0)∂zg(xi; θ0)′] by the LLN and thus the second term is O(λ). It follows
that λ = Op(n1/2) with an asymptotically normal distribution.
Finally, we turn to the situation where θ 6= θ0. By the uniform Law of Large
Numbers, using assumption 3.4, supθ∈Θ ‖ 1
n
∑n
i=1 g(xi; θ) − E[g(xi; θ)]‖ →p 0.
For any θ ∈ Bεc(θ0) we have by identification E[g(xi; θ)] ∈ Bγc(0) for some γ
(otherwise, we can find a sequence whose mapping converges to 0 and by compactness
there would be a convergent subsequence, implying existence of some θ∗ 6= θ0 that
satisfies E[g(xi; θ∗)] = 0).
With probability approaching one, we have by the mean value theorem and
Cauchy-Schwartz γ
2≤1
n
∑n
i=1 ‖g(zi; θ) − g(xi; θ)‖ = 1
n
∑n
i=1 ‖g(zi; θ)(zi − xi)‖
≤ (1
n
∑n
i=1 ‖g(zi; θ)‖2)1/2( 1
n
∑n
i=1 ‖zi − xi‖2)1/2. As a result, 1
n
∑n
i=1 ‖zi − xi‖2 →p 0
(or a subsequence) would imply 1
n
∑n
i=1 ‖g(zi; θ)‖2 →p E[‖g(xi; θ)‖2] as before and
thus γ ≤ op(1), which is impossible. Therefore, ∑n
i=1 ‖zi − xi‖2 > O(n) with proba
bility approaching one, and the probability that θˆ lives outside any neighborhood of
θ0 decreases to 0.
Eventually, the first-order conditions read zi − xi = λ′∂zg(xi; θ0) + op(n−1/2) and
1 n
∑n
i=1 g(zi; θ0) = 0 and the linearized version is asymptotically justified.
Proof of Theorem 3.12. Using first-order conditions, previous results, and equa
tion (18), we have
F≡1
n
n
∑
i=1
‖zi − xi‖2 = λ′ 1
n
n
∑
i=1
∂zg(zi; θ)∂zg(zi; θ)′λ = λ′ 1
n
n
∑
i=1
∂zg(xi; θ)∂zg(xi; θ)′λ + op(F )
=


(
1 n
n
∑
i=1
∂zg(xi; θ)∂zg(xi; θ)′
)−1 1
n
n
∑
i=1
g(xi; θ)


′
1 n
n
∑
i=1
∂zg(xi; θ)∂zg(xi; θ)′


(
1 n
n
∑
i=1
∂zg(xi; θ)∂zg(xi; θ)′
)−1 1
n
n
∑
i=1
g(xi; θ)

 + Op(‖λ‖3) + O(‖λ‖4) + op(F )
Ignoring lower order terms, we can eventually reframe the problem as minimizing
25

standard GMM: ∑n
i=1 g(xi; θ)′(∑n
i=1 ∂zg(xi; θ0)∂zg′(xi, θ0))−1 ∑n
i=1 g(xi; θ) to get the
first-order conditions
n
∑
i=1
∂θg(xi; θ)′
(n
∑
i=1
∂zg(xi; θ0)∂zg′(xi, θ0)
)−1 n
∑
i=1
g(xi; θ) = 0
which are satisfied with probability approaching 1. By an expansion around θ0,
n
∑
i=1
∂θg(xi; θ)′
(n
∑
i=1
∂zg(xi; θ0)∂zg′(xi, θ0)
)−1 n
∑
i=1
[g(xi; θ0) + ∂θg(xi; θ)(θ − θ0)] = 0
so that the estimator takes the form
θˆOT GMM − θ0 = −


n
∑
i=1
∂θg(xi; θˆ)′
(n
∑
i=1
∂zg(xi; θ0)∂zg′(xi, θ0)
)−1 n
∑
i=1
∂θg(xi; θ)


−1


n
∑
i=1
∂θg(xi; θˆ)′
(n
∑
i=1
∂zg(xi; θ0)∂zg′(xi, θ0)
)−1 n
∑
i=1
g(xi; θ0)


Noting that under assumptions 3.1, 3.2, and 3.3 √1n
∑n
i=1 g(xi; θ0) converges in dis
tribution to a normal random variables by the central limit theorem and that as
sumptions 3.9-3.11 together with consistency ensure convergence of sample averages
to expectations, we obtain the asymptotic normality of √n(θˆOT GMM − θ0) by Slutsky
with asymptotic variance given in the theorem.
Proof of Theorem 3.13. The first-order conditions with respect to the zj (Equa
tion (6)) can be written as
xj = zj − ∂zg′ (zj, θ) λ. (19)
Under our assumptions, Equation (19) defines a direct relationship between zj and xj,
and therefore an implicit reverse relationship between xj and zj. Since the latter may
not be unique, we observe that our original optimization problem seeks to minimize
the distance between xj and zj. Hence, in cases where (19) admits multiple solutions
zj for a given xj, we identify the unique (with probability one) solution that minimizes
‖zj − xj‖2. This is accomplished by defining the mapping (9). With this definition,
the first-order conditions (4) and (5) of the Lagrangian optimization problem for θ
26

and λ yield the just-identified GMM estimator stated in the Theorem.
The following Lemmas are shown in Supplement S.3.
Lemma A.1 Let h (·, ·, ·) be continuous in all of its arguments. Then, under As
sumptions 3.17(i) and 3.18, h (q (x, θ, λ) , θ, λ) is continuous in (θ, λ).
Lemma A.2 Under Assumptions 3.14 and 3.18, if h ∈ L, then, for q (x, θ, λ) defined
in Theorem 3.13, E [sup(θ,λ)∈Θ×Λ ‖h (q (x, θ, λ) , θ)‖] < ∞.
Proof of Theorem 3.21. Assumptions 3.1-3.16 directly imply consistency of our
GMM estimator, by Theorem 2.6 in Newey and McFadden (1994). There remains to
show that Assumption 3.16 is implied by Assumptions 3.17,3.18,3.20.
We first establish Assumption 3.16 (i): Continuity of g ̃ (x, θ, λ) in (θ, λ). To show
that g (q (x, θ, λ) , θ) is continuous in (θ, λ), we can invoke Lemma A.1 for h (z, θ, λ) =
g (z, θ), under Assumptions 3.17(i) and 3.18. To show that ∂θg′ (q (x, θ, λ) , θ) λ is
continuous in (θ, λ), we can similarly invoke Lemma A.1 for h (z, θ, λ) = ∂θg′ (z, θ) λ,
where ∂θg′ (z, θ) is continuous in both arguments by Assumption 3.17(ii).
We now establish Assumption 3.16 (ii): E [sup(θ,λ)∈Θ×Λ ‖g ̃ (x, θ, λ)‖] < ∞. Since
g (·, ·) ∈ L by Assumption 3.20, it follows that E [sup(θ,λ)∈Θ×Λ ‖g (q (x, θ, λ) , θ)‖] <
∞, by Lemma A.2. Next, we have, for (θ, λ) ∈ Θ × Λ, ‖∂θg′ (q (x, θ, λ) , θ) λ‖ ≤
‖∂θg′ (q (x, θ, λ) , θ)‖ ‖λ‖ ≤ ‖∂θg′ (q (x, θ, λ) , θ)‖  ̄λ by Assumption 3.18 and compact
ness of Λ. By Assumption 3.20 and Lemma A.2 we then also have that
E
[sup(θ,λ)∈Θ×Λ ‖∂θg′ (q (x, θ, λ) , θ) λ‖] < ∞.
Proof of Theorem 3.26. Theorem 3.21 implies consistency (θ, λ) −p→ (θ0, λ0).
This, in addition to Assumptions 3.22, 3.23 and 3.24 directly implies the stated
asymptotic normality result, by Theorem 3.2 and Lemma 2.4 in Newey and Mc
Fadden (1994) and the Lindeberg-Levy Central Limit Theorem. There remains to
show that Assumption 3.24 is implied by Assumption 3.25.
By Lemma A.1, Assumptions 3.25(i) and (iii) imply that both g (q (x, θ, λ) , λ)
and ∂θg′ (q (x, θ, λ) , λ) λ are continuously differentiable in (θ, λ), thus establishing
Assumption 3.24(i). By Lemma A.2, Assumptions 3.14, 3.25(ii) and (iii) imply As
sumption 3.24(ii).
The asymptotic variance of the just-identified GMM estimator defined in Theorem
3.13 is then given by
(G ̃′Ω−1G ̃
)−1
for Ω and G ̃ as defined in the Theorem statement.
Finally, the explicit expressions for the derivatives of the function z = q (x, θ, λ)
follow from the implicit function theorem after noting that q (x, θ, λ) is the inverse
27

of the mapping z 7→ z − ∂z (λ′g (z, θ)). This can also be shown through an explicit
calculation: To first order, (19) implies, for a small change ∆θ in θ, a corresponding
change ∆z in z while keeping x and λ fixed, that:
0 = ∆z − ∂zz′ (λ′g (z, θ)) ∆z − ∂zθ′ (λ′g (z, θ)) ∆θ.
Thus, ∆z = (I − ∂zz′ (λ′g (z, θ)))−1 ∂zθ′ (λ′g (z, θ)) ∆θ and we have:
∂θ′q (x, θ, λ) = (I − ∂zz′ (λ′g (z, θ)))−1 ∂zθ′ (λ′g (z, θ))
evaluated at z = q (x, θ, λ). A similar reasoning for λ, exploiting the fact that
∂ 2 (λ′ g (z ,θ))
∂z∂λ′ = ∂g′(z,θ)
∂z , yields:
∂λ′q (x, θ, λ) = (I − ∂zz′ (λ′g (z, θ)))−1 ∂zg′ (z, θ) .
28

References
Aguiar, V. H., and N. Kashaev (2021): “Stochastic Dynamic Revealed Prefer
ences with measurement error,” Review of Economic Studies, 88, 2042–2093.
Andrews, D. W. K., and S. Kwon (2019): “Inference in moment inequality mod
els that is robust to spurious precision under model misspecification,” Discussion
Paper 2184R, cowles foundation discussion paper.
Andrews, I., M. Gentzkow, and J. M. Shapiro (2017): “Measuring the sen
sitivity of parameter estimates to estimation moments,” Quarterly journal of eco
nomics, 132, 1553–1592.
Blanchet, J., K. Murthy, and N. Si (2022): “Confidence regions inWasserstein
distributionally robust estimation,” Biometrika, 109, 295–315.
Bonhomme, S., and M. Weidner (2022): “Minimizing sensitivity to model mis
specification,” Quantitative Economics, 13, 907–954.
Caffarelli, L. A. (1996): “Boundary Regularity of Maps with Convex Potentials
II,” Annals of Mathematics, Second Series, 144, 453–496.
Carlier, G., V. Chernozhukov, and A. Galichon (2016): “Vector quantile
regression: An optimal transport approach,” The Annals of Statistics, 44, 1165
1192.
Chamberlain, G. (1987): “Asymptotic efficiency in estimation with conditional
moment restrictions,” Journal of Econometrics, 34, 305–334.
Chernozhukov, V., A. Galichon, M. Hallin, and M. Henry (2017):
“Monge–Kantorovich depth, quantiles, ranks and signs,” Annals of Statistics, 45,
223–256.
Chesher, A. (1991): “The Effect of Measurement Error,” Biometrika, 78, 451.
Christensen, T., and B. Connault (2022): “Counterfactual Sensitivity and Ro
bustness,” Econometrica, forthcoming.
Conley, T. G., C. B. Hansen, and P. E. Rossi (2012): “Plausibly Exogenous,”
The Review of Economics and Statistics, 94, 260–272.
29

Doraszelski, U., and J. Jaumandreu (2013): “R&D and Productivity: Estimat
ing Endogenous Productivity,” Review of Economic Studies, 80, 1338–1383.
Duranton, G., P. M. Morrow, and M. A. Turner (2014): “Roads and Trade:
Evidence from the US,” Review of Economic Studies, 81(2), 681–724.
Ekeland, I., A. Galichon, and M. Henry (2011): “Comonotonic Measures of
Multivariate Risks,” Mathematical Finance, 22, 109–132.
Galichon, A. (2016): Optimal Transport Methods in Economics. Princeton Univer
sity Press, Princeton.
Gunsilius, F., and S. M. Schennach (2021): “Independent Principal Component
Analysis,” Journal of the American Statistical Association, forthcoming.
Hall, A. R., and A. Inoue (2003): “The large sample behavior of the generalized
method of moments estimator in misspecified models,” Journal of Econometrics,
114, 361–394.
Hansen, L. P. (1982): “Large sample properties of generalized method of moment
estimators,” Econometrica, 50, 1029–1054.
(2001): “Acknowledging Misspecification in Macroeconomic Theory,” Re
view of Economic Dynamics, 4, 519–535.
Imbens, G. W. (1997): “One-Step Estimators for Over-Identified Generalized
Method of Moments Models,” Review of Economic Studies, 64, 359–383.
Kitamura, Y., and M. Stutzer (1997): “An Information-Theoretic Alternative
to Generalized Method of Moment Estimation,” Econometrica, 65, 861–874.
Masten, M. A., and A. Poirier (2021): “Salvaging falsified instrumental variable
models,” Econometrica, 89(3), 1449–1469.
Newey, W., and D. McFadden (1994): “Large Sample Estimation and Hypothesis
Testing,” in Handbook of Econometrics, ed. by R. F. Engel, and D. L. McFadden,
vol. IV. Elsevier Science.
Newey, W., and R. J. Smith (2004): “Higher-Order Properties of GMM and
Generalized Empirical Likelihood Estimators,” Econometrica, 72, 219–255.
30

Owen, A. B. (1988): “Empirical Likelihood Ratio Confidence Intervals for a Single
Functional,” Biometrika, 75, 237–249.
Qin, J., and J. Lawless (1994): “Empirical Likelihood and General Estimating
Equations,” Annals of Statistics, 22, 300–325.
Santambrogio, F. (2015): Optimal Transport for Applied Mathematicians.
Springer, New York.
Sawa, T. (1978): “Information Criteria for Discriminating Among Alternative Re
gression Models,” Econometrica, 46, 1273–1291.
Schennach, S. M. (2004): “Estimation of Nonlinear Models with Measurement
Error,” Econometrica, 72, 33–75.
(2007): “Point Estimation with Exponentially Tilted Empirical Likelihood,”
Annals of Statistics, 35, 634–672.
(2014): “Entropic Latent Variable Integration via Simulation,” Economet
rica, 82, 345–386.
(2016): “Recent Advances in the Measurement Error Literature,” Annual
Reviews of Economics, 8, 341–377.
(2020): “Mismeasured and unobserved variables,” in Handbook of Econo
metrics, ed. by J. H. S. Durlauf, L. Hansen, and R. Matzkin, vol. 7A, chap. 6, pp.
487–565. Elsevier Science.
Villani, C. (2009): “Optimal transport: Old and New,” in Grundlehren der math
ematischen Wissenschaften. Springer-Verlag, Heidelberg.
White, H. (1982): “Maximum Likelihood Estimation of Misspecified Models,”
Econometrica, 50, 1–26.
31

Online Supplement for:
Optimally-Transported Generalized Method of Moments
by Susanne Schennach and Vincent Starck
S.1 Algorithms
S.1.1 Iterative solution
The first order condition (6) can be re-written as
(zj − xj) = ∂zg′ (zj, θ) λ. (20)
We seek to construct a sequence zjt (t = 0, 1, . . .) that converges to zj, starting with
zjt|t=0 = xj. From the moment conditions and (20), we have:
0= 1
n
n
∑
i=1
g (zi, θ) = 1
n
n
∑
i=1
g (xj + ∂zg′ (zj, θ) λ, θ) .
Adding and subtracting zjt yields
0= 1
n
n
∑
i=1
g
(zjt + (xj − zjt + ∂zg′ (zj, θ) λ) , θ)
≈1
n
n
∑
i=1
g
(zjt, θ) + 1
n
n
∑
i=1
∂z′g (zjt, θ) (xj − zjt + ∂zg′ (zj, θ) λ)
where the expansion is justified from the fact that xj − zjt + ∂zg′ (zj, θ) λ −→ 0 as
zjt −→ zj.
In the same limit, ∂zg′ (zjt, θ) −→ ∂zg′ (zj, θ), so
0≈ 1
n
n
∑
i=1
g
(zjt, θ) + 1
n
n
∑
i=1
∂z′ g (zjt, θ) (xj − zjt + ∂zg′ (zjt, θ) λ)
=1
n
n
∑
i=1
g
(zjt, θ) + 1
n
n
∑
i=1
∂z′ g (zjt, θ) (xj − zjt
)+ 1
n
n
∑
i=1
∂z′g (zjt, θ) ∂zg′ (zjt, θ) λ
= ˆE [g (zt, θ)] + ˆE [H (zt, θ) (x − zt)] + ˆE [H (zt, θ) H′ (zt, θ)] λ.
1

Isolating λ gives the approximation to the Lagrange multiplier at step t + 1:
λt+1 =
(ˆE [H (zt, θ) H′ (zt, θ)]
)−1 (
−ˆE [g (zt, θ)] + ˆE [H (zt, θ) (zt − x)]
)
. (21)
From this, we can improve the approximation to zj to go to the next step, using (20):
zt+1
j = xj + H′ (zt, θ) λt+1. (22)
It can be directly verified that the values of zj and λ that satisfy the first order
conditions are indeed a fixed point of this iterative rule. In the next subsection we
shall provide conditions under which this fixed point is also attractive.
After iteration to convergence, the objective function can be written in term of
the converged values of z and λ:
Qˆ(θ) = 1
2n
∑
j
‖zj − xj‖2 = 1
2n
∑
j
‖H′ (zj, θ) λ‖2 = 1
2n
∑
j
λ′H (zj, θ) H′ (zj, θ) λ
=1
2 λ′ ˆE [H (z, θ) H′ (z, θ)] λ.
S.1.2 Iterative procedure convergence
Substituting (21) into (22) yields an iterative rule expressed solely in terms of zjt:
zt+1
j = xj + H′ (zt
j, θ)
(ˆE [H (zt, θ) H′ (zt, θ)]
)−1 (
−Eˆ [g (zt, θ)] + Eˆ [H (zt, θ) (zt − x)]
)
. (23)
This is an iterative rule of the form zt+1 = f (zt), for zt = (zt1′, . . . , ztn′)′ ∈ Rndx with
fixed point denoted z∞. We then have the following result.
Assumption S.1.1 (i) g (z, θ) is twice continuously differentiable in z and
(ii) ˆE [H (z, θ) H′ (z, θ)] is nonsingular for z in the closure of an open neighborhood η
of the fixed point z∞.
Theorem S.1.2 Under Assumption S.1.1, for a given sample x1, . . . , xn, there exists
a neighborhood η of z∞, such that the iterative procedure defined by Equation (23) and
starting at any z0 ∈ η converges to the unique fixed point z∞ ∈ η, provided ‖λ‖ is
sufficiently small (where λ solves the first order condition (20)).
The condition that the initial point z0 should lie in a neighborhood of the solu
tion is standard — most Newton-Raphson-type iterative refinements have a similar
2

requirement. If necessary, this requirement can be met by simply attempting many
different starting points in search for one that yields a convergent sequence. The
condition that λ be small intuitively means that the errors should not be too large.
This is a purely numerical condition which has nothing to do with sample size, statis
tical significance of specification tests. In particular, it does not mean that the error
magnitude must decreases with sample size or that the effect of the errors should be
small relative to the estimator’s standard deviation. Typically, the constraint on λ is
relaxed as the starting point z0 is chosen closer to the solution z∞.
Proof of Theorem S.1.2. For a rule of the form zt+1 = f (zt), Banach’s Fixed
Point Theorem applied to a neighborhood of z∞ provides a simple sufficient condition
for convergence: (i) f must be continuously differentiable in a neighborhood of z∞
and (ii) all eigenvalues of the matrix [∂f (z) /∂z′]z=z∞ must have a modulus strictly
less than 1.
The smoothness condition (i) is trivially satisfied under Assumption S.1.1. Next,
letting zit,k denote one element of the vector zit, and H·k (zit, θ) denote the kth column
of H (zit, θ), we can express all blocks ∂zt+1
j /∂zit,k of the matrix of partial derivatives
of f (z) :
∂zt+1
j
∂zit,k
=
[
∂
∂zit,k
H′ (zit, θ) (ˆE [H (zt, θ) H′ (zt, θ)])−1
]
×
(
−ˆE [g (zt, θ)] + ˆE [H (zt, θ) (zt − x)]
)
+
H′ (zit, θ)
(ˆE [H (zt, θ) H′ (zt, θ)]
)−1 ×
(
−n−1H·k
(zit, θ) + n−1H·k
(zit, θ) + n−1
[
∂
∂zit,k
H
(zit, θ)
]
(zit − xi
)
)
,
where the two n−1H·k (zit, θ) terms cancel each other. At zt = z∞, ˆE [g (z∞, θ)] = 0
and (zi∞ − xi) = H′ (zi∞, θ) λ and we have:
∂zt+1
j
∂zit,k
=
[
∂
∂zi,∞k
H′ (zi∞, θ)
(ˆE [H (z∞, θ) H′ (z∞, θ)]
)−1
]
ˆE [H (z∞, θ) H′ (z∞, θ)] λ
+H′ (zi∞, θ)
(ˆE [H (z∞, θ) H′ (z∞, θ)]
)−1 n−1
[
∂
∂zi,∞k
H (zi∞, θ)
]
H′ (zi∞, θ) λ
This expression (once all derivatives of products are expanded) has the general form of
3

a product of λ with functions of z that contain terms of the form
(ˆE [H (z, θ) H′ (z, θ)]
)−1
,
which is nonsingular for z ∈ η by Assumption S.1.1(ii), and derivatives of g (z, θ) up to
order 2, which are bounded for z in the compact set {zj : (z1, . . . , zn) ∈ η and j = 1, . . . , n}
by Assumption S.1.1(i). Hence the elements ∂zt+1
j /∂zit,k are bounded by a constant
times λ. It follows that the eigenvalues of the matrix of partial derivatives of f (z)
can be made strictly less than 1 for λ sufficiently small.
S.2 Constrained estimator
In some applications, it is useful to constrain the error, for instance to enforce the
known fact that some variables are measured without error. The optimization prob
lem then becomes to minimize ˆE [‖z − x‖2] subject to
ˆE [g (z, θ)] = 0 (24)
C (zi − xi) = 0 for i = 1, . . . , n (25)
for some known rectangular full row rank matrix C that selects the dimensions of the
error vector xi −zi that should be constrained to be zero. Note that error constraint is
imposed for each observation, not in an average sense. Naturally, we assume that the
number of constraints imposed is not so large that it is no longer possible to satisfy
all moment conditions simultaneously.
Proposition S.2.1 The first order conditions (4) and (5) are unchanged, while Equa
tion (6) becomes:
(zj − xj) − P H′ (x, θ) λ = 0 (26)
where P = (I − C′ (CC′)−1 C) and H′ (x, θ) ≡ ∂zg′ (zj, θ).
Thanks to linearity, the Lagrange multipliers of the error constraints can be ex
plicitly solved for and the dimensionality of the problem is not increased. The only
effect of the constraints is to “project out”, through the matrix P , the dimensions
where there are no errors.
Proof. The Lagrangian for this problem is
1
2 ˆE ‖z − x‖2 − λ′ ˆE [g (z, θ)] −
n
∑
i=1
γi′C (zi − xi) (27)
4

where λ and γi are Lagrange multipliers. The first order conditions of the Lagrangian
(27) with respect to zj is
(zj − xj) − ∂zg′ (zj, θ) λ − C′γj = 0. (28)
Re-arranging and pre-multiplying both sides by the full column rank matrix C yields:
C (zj − xj) − CC′γj = C∂zg′ (zj, θ) λ,
thus allowing us to solve for γj:
γj = − (CC′)−1 C∂zg′ (zj, θ) λ.
Upon substitution of γi into (28) and simple re-arrangements, we obtain
(zj − xj) =
(
I − C′ (CC′)−1 C
)
∂zg′ (zj, θ) λ
= P H (z, θ) λ
where P = (I − C′ (CC′)−1 C) and H (z, θ) = ∂z′g (z, θ).
The iterative Algorithm 2.1 can easily be adapted by replacing every instance of
H′ (zt, θ) by P H′ (zt, θ). Similarly the linearized estimator of Equation (7) becomes:
1
2 ˆE [g′ (x, θ)]
(ˆE [H (x, θ) P H′ (x, θ)]
)−1 ˆE [g (x, θ)] .
Note that this expression assumes that the matrix being inverted remains full rank,
a condition that can be interpreted as requiring the constraints to not be so strong
as to make impossible to simultaneously satisfy all the moment conditions.
Asymptotic results can also be straightforwardly adapted.
Corollary S.2.2 Theorem 3.12 holds under constraint (25), with all instances of
E[HiHi′] replaced by E[HiP Hi′], for P = (I − C′ (CC′)−1 C).
S.3 Asymptotics: Proofs of Lemmas
Proof of Lemma A.1. Since h (z, θ, λ) is assumed to be continuous in all of
its arguments, there only remains to show that q (x, θ, λ) is continuous in (θ, λ). In
5

fact, we can establish the stronger statement that q (x, θ, λ) is differentiable in (θ, λ).
Differentiability in θ can be shown by the implicit function theorem
∂θ′q (x, θ, λ) =
[
(∂
∂z′ (z − ∂z (λ′g (z, θ)))
)−1 ∂
∂θ′ ∂z (z − λ′g (z, θ))
]
z=q(x,θ,λ)
=
[
(I − ∂zz′ (λ′g (z, θ)))−1 ∂zθ′ (λ′g (z, θ))
]
z=q(x,θ,λ)
since q (x, θ, λ) is the inverse of z 7→ z − ∂z (λ′g (z, θ)). By the definition of  ̄λ, ν ̄,
∥ ∥
∥(I − ∂zz′ (λ′g (z, θ)))−1 ∂zθ′ (λ′g (z, θ))
∥ ∥
∥ ≤ (1 −  ̄λν ̄)−1 ‖∂zθ′ (λ′g (z, θ))‖ ,
at z = q (x, θ, λ), where  ̄λν ̄ < 1 by Assumption 3.18 and where ∂zθ′ (λ′g (z, θ)) exists
by Assumption 3.17. Thus h (q (x, θ, λ) , θ, λ) is continuous in θ.
By a similar reasoning, we can show that h (q (x, θ, λ) , θ, λ) is continuous in λ if
we can show that ∂λ′q (x, θ, λ) exists:
‖∂λ′q (x, θ, λ)‖ =
∥ ∥ ∥ ∥ ∥ ∥
[
(∂
∂z′ (z − ∂z (λ′g (z, θ)))
)−1 ∂
∂λ′ (∂zg′ (z, θ) λ)
]
z=q(x,θ,λ)
∥ ∥ ∥ ∥ ∥ ∥
≤
(1 −  ̄λν ̄)−1 ∥
∥
∥[∂zg′ (z, θ)]z=q(x,θ,λ)
∥ ∥ ∥
where  ̄λν ̄ < 1 by Assumption 3.18 and ∂zg′ (z, θ) exists by Assumption 3.17.
Proof of Lemma A.2. By the triangle inequality and Definition 3.19, there exists
 ̄h (x, θ) such that:
‖h (z, θ)‖ ≤ ‖h (x, θ)‖ + ‖h (z, θ) − h (x, θ)‖ ≤ ‖h (x, θ)‖ +  ̄h (x, θ) ‖z − x‖ , (29)
for z = q (x, θ, λ). Next, using the first order conditions (Equation (6)), we have, by
a mean value argument, the triangle inequality and the definitions of  ̄λ and ν ̄ from
Assumption 3.18, for some mean value x ̃,
‖z − x‖ = ‖∂z (λ′g (z, θ))‖ ≤ ‖∂z (λ′g (x, θ))‖ + ‖∂zz′ (λ′g (x ̃, θ)) (z − x)‖
≤  ̄λ ‖∂z′g (x, θ)‖ +  ̄λν ̄ ‖z − x‖ . (30)
Re-arranging and using the fact that  ̄λν ̄ < 1 by Assumption 3.18 and  ̄λ < ∞ by
6

compactness of Λ,
‖z − x‖ ≤  ̄λ ‖∂z′g (x, θ)‖
(1 −  ̄λν ̄) . (31)
Combining (29) and (31) and noting that applying the E [supθ∈Θ . . .] operator does
not alter the inequalities, we have
E
[
sup
θ∈Θ
‖h (z, θ)‖
]
≤E
[
sup
θ∈Θ
‖h (x, θ)‖
]
+  ̄λ
(1 −  ̄λν ̄)E
[
sup
θ∈Θ
 ̄h (x, θ) ‖∂z′g (x, θ)‖
]
where the right-hand side quantities are finite by construction since h ∈ L.
S.4 Application: Additional results
S.4.1 Regression with all controls
In this section, we estimate a regression with controls, which now also includes average
distance to the nearest body of water; land gradient; dummy variables for census
regions; log share of the fraction of adult population with a college degree or more;
log average income per capita; log share of employment in wholesale trade; and log
average daily traffic on the interstate highways in 2005. The results, reported in Table
S.1, are similar to those of the main regression shown in Table 1. In Table S.2, we
also show how the main coefficient of interest changes when including various subsets
of controls.
S.4.2 Relaxing exclusion restrictions
As Masten and Poirier (2021), we consider the possibility that some instrumental
variables have non-zero regression coefficient, i.e., have a direct impact on the out
come. Since our estimator relies on over-identifying restrictions to recover meaningful
variable corrections, we only relax one of the exclusion-restrictions at a time. This
leads to the following results.
As in Masten and Poirier (2021), we found that removing railroads has the largest
impact on coefficients and is likely an improper instrument.
7

Table S.1: Results with all controls
GMM OTGMM Dependent variable Exporter fixed effect weight log highway km 0.45 0.47 se (0.16) (0.17) log employment 0.67 1.06 se (0.42) (1.12) market access (export) −0.49 −0.50 se (0.10) (0.10) log 1920 population −0.29 −0.40 se (0.24) (0.30) log 1950 population 0.71 0.88 se (0.39) (0.50) log 2000 population −0.65 −1.17 se (0.47) (1.30) log % manuf empl 0.57 0.54 se (0.14) (0.14) Water 0.07 0.06 se (0.05) (0.05) Land gradient −0.21 −0.20 se (0.08) (0.09) College −0.56 −0.77 se (0.47) (0.54) price -
0.34 0.59 se (0.57) (0.54) wholesale 0.74 0.73 se (0.26) (0.63) traffic 0.37 0.38 se (0.30) (0.29)
Results with all controls. Replicated estimates from the original paper and OTGMM estimates. Heteroskedasticity-robust standard errors (GMM) and small-error asymptotic standard error (OTGMM) in parentheses. The regression also include an intercept and census region dummies.
8

Table S.2: Coefficient on log highway kilometers for various control sets
Controls GMM OTGMM none 1.13 1.17 (0.14) (0.15) 2 0.57 0.65 (0.16) (0.19) 1-5 0.47 0.46 (0.13) (0.12) 1-6 0.39 0.40 (0.12) (0.11) 1-7 0.34 0.37 (0.15) (0.13) 1-8 0.28 0.31 (0.14) (0.13) 1-9 0.27 0.30 (0.14) (0.13) 1-10 0.27 0.29 (0.13) (0.13) 1-11 0.38 0.45 (0.13) (0.14) 1-12 0.44 0.48 (0.16) (0.17) All 0.45 0.47 (0.16) (0.17)
Coefficient on log highway kilometers for various sets of controls, numbered as follows: employment (1), market access (2), population 1920 (3), population 1950 (4), population 2000 (5), log % manuf employment (6), water (7), land gradient (8), college (9), price (10), wholesale (11), traffic (12), region census dummies (13-20). All regressions include an intercept.
9

Table S.3: Including log 1947 highway kilometers as a regressor
GMM OTGMM Dependent variable Exporter fixed effect weight log highway km 0.52 0.46 se (0.51) (0.52) log 1947 highway km −0.09 −0.04 se (0.36) (0.36) log employment 0.44 1.24 se (0.33) (0.37) market access (export) −0.63 −0.65 se (0.11) (0.10) log 1920 population −0.30 −0.58 se (0.24) (0.23) log 1950 population 0.64 1.15 se (0.38) (0.38) log 2000 population −0.19 −1.26 se (0.46) (0.38) log % manuf empl 0.64 0.58 se (0.12) (0.12)
Including log 1947 highway kilometers as a regressor. Replicated estimates from the original paper and OTGMM estimates. Heteroskedasticity-robust standard errors (GMM) and small-error asymptotic standard error (OTGMM) in parentheses
10

Table S.4: Including log exploration as a regressor
GMM OTGMM Dependent variable Exporter fixed effect weight log highway km 0.42 0.44 se (0.16) (0.16) log exploration −0.02 −0.03 se (0.06) (0.06) log employment 0.47 1.18 se (0.34) (0.36) market access (export) −0.63 −0.65 se (0.11) (0.11) log 1920 population −0.29 −0.52 se (0.23) (0.26) log 1950 population 0.64 1.05 se (0.38) (0.43) log 2000 population −0.20 −1.16 se (0.45) (0.43) log % manuf empl 0.63 0.57 se (0.13) (0.12)
Including log exploration as a regressor. Replicated estimates from the original paper and OTGMM estimates. Heteroskedasticity-robust standard errors (GMM) and small-error asymptotic standard error (OTGMM) in parentheses
11

Table S.5: Including log 1998 railroad as a regressor
GMM OTGMM Dependent variable Exporter fixed effect weight log highway km 0.23 0.24 se (0.14) (0.14) log 1998 railroad 0.16 0.15 se (0.10) (0.10) log employment 0.44 0.52 se (0.31) (0.44) market access (export) −0.63 −0.63 se (0.11) (0.11) log 1920 population −0.41 −0.41 se (0.24) (0.30) log 1950 population 0.76 0.77 se (0.37) (0.48) log 2000 population −0.16 −0.26 se (0.41) (0.48) log % manuf empl 0.62 0.61 se (0.12) (0.56)
Including log 1998 railroad as a regressor. Replicated estimates from the original paper and OTGMM estimates. Heteroskedasticity-robust standard errors (GMM) and small-error asymptotic standard error (OTGMM) in parentheses
12

S.5 Simulations
We conduct simulations to assess the performance of our estimator and compare it
to efficient GMM. We consider both the OTGMM estimator (Equations (2) and (3))
and the GMM estimator obtained under the assumption of small errors (Equation
(7)).
Given the nonlinear nature of our estimator, we deliberately select a small sample
size (n = 100) to explore the regime where asymptotic results do not trivially hold.
We consider various moment conditions, underlying distributions and signal-to-noise
ratios. There is an underlying random variable zi which satisfies the moment con
ditions, but the researcher observes xi = zi + σei with ei ∼ N (0, 1). We consider
different values for the error scale σ in order to assess the impact of magnitude of the
errors on the performance of estimators that only use the observed xi.
Specifically, we consider the following distributions for zi: zi ∼ N (1.5, 2) zi ∼
Unif[1, 2] (uniform) zi ∼ B(5, 0.3) (binomial) and σ = 0, 0.5, 1, 1.5, 2, 2.5. The true
parameter value is θ0 = 1.5, as obtained by the following moment conditions:
E[zi − θ] = 0, E
[
ezi − 2
3 θE[ezi]
]
= 0 (32)
E[zi − θ] = 0, E
[ e2zi−3
1 + e2z−3 − 2
3 θ e2zi−3
1 + e2z−3
]
= 0 (33)
E[ezi − 2
3 θE[ezi]] = 0, E
[ e2zi−3
1 + e2z−3 − θe2zi−3
(1.5) (1 + e2z−3)
]
= 0 (34)
Finally, we consider the process: zi ∼ Exp( 2
3) with the moment conditions
E[zi − θ] = 0, E[zi2 − 2θ2] = 0. (35)
In all cases, the model is correctly specified in the absence of errors (σ = 0) but starts
to violate the overidentifying restrictions when there are errors (σ > 0 so that x 6= z).
In Tables S.6-S.9, we report the estimation error θˆ − θ0 and decompose it into its
bias, standard deviation and the root mean square error (RMSE). These quantities
are evaluated using averages over 5000 replications. We consider various estimators
θˆ: the linear approximation to OTGMM in the small-error limit (leftmost columns,
indicated by “Linearized OTGMM”), OTGMM in the general large-error case (middle
columns) and efficient GMM ignoring the presence of errors (rightmost columns).
13

Table S.6: Simulation results: Equation (32)
Bias Linearized OTGMM OTGMM Efficient GMM error scale 0 0.5 1 1.5 2 2.5 0 0.5 1 1.5 2 2.5 0 0.5 1 1.5 2 2.5 Normal 0.00 -0.01 -0.05 -0.16 -0.49 -1.61 0.00 -0.01 -0.03 -0.04 -0.05 -0.04 -0.02 -0.03 -0.09 -0.17 -0.23 -0.25 Uniform 0.00 -0.23 -1.12 -3.59 -10.93 -36.42 0.00 -0.09 -0.12 -0.11 -0.08 -0.06 0.00 -0.13 -0.22 -0.27 -0.29 -0.29 Binomial 0.00 -0.02 -0.10 -0.32 -0.99 -3.28 0.00 -0.01 -0.04 -0.06 -0.06 -0.05 0.00 -0.04 -0.14 -0.21 -0.25 -0.26 Standard deviation Linearized OTGMM OTGMM Efficient -
GMM error scale 0 0.5 1 1.5 2 2.5 0 0.5 1 1.5 2 2.5 0 0.5 1 1.5 2 2.5 Normal 0.14 0.15 0.16 0.22 0.76 4.43 0.14 0.15 0.17 0.21 0.25 0.29 0.16 0.16 0.16 0.19 0.24 0.29 Uniform 0.01 0.05 0.27 1.41 8.09 57.82 0.01 0.04 0.10 0.15 0.20 0.25 0.01 0.04 0.09 0.14 0.20 0.26 Binomial 0.10 0.10 0.13 0.25 1.18 7.23 0.10 0.11 0.14 0.18 0.23 0.27 0.10 0.10 0.13 0.17 0.22 0.28 RMSE Linearized OTGMM OTGMM Efficient GMM error scale 0 0.5 1 1.5 2 2.5 0 0.5 1 1.5 2 2.5 0 0.5 1 1.5 2 2.5 Normal 0.14 0.15 0.17 0.27 0.-
90 4.71 0.14 0.15 0.17 0.21 0.25 0.29 0.17 0.16 0.19 0.26 0.33 0.39 Uniform 0.01 0.24 1.15 3.86 13.60 68.33 0.01 0.10 0.15 0.18 0.22 0.26 0.01 0.14 0.24 0.31 0.35 0.39 Binomial 0.10 0.11 0.16 0.41 1.54 7.94 0.10 0.11 0.14 0.19 0.23 0.28 0.10 0.11 0.19 0.27 0.33 0.38
Table S.7: Simulation results: Equation (33)
Bias Linearized OTGMM OTGMM Efficient GMM error scale 0 0.5 1 1.5 2 2.5 0 0.5 1 1.5 2 2.5 0 0.5 1 1.5 2 2.5 Normal 0.00 0.00 0.00 0.00 0.00 0.00 0.00 0.00 0.00 0.00 0.00 0.00 0.00 0.00 0.00 0.00 0.00 0.00 Uniform 0.00 0.00 0.00 0.00 0.00 0.00 0.00 0.00 0.00 0.00 0.00 0.00 0.00 0.00 0.00 0.00 0.00 0.00 Binomial 0.00 0.00 0.01 0.01 0.02 0.02 0.00 0.01 0.02 0.03 0.03 0.04 -0.01 0.01 0.04 0.05 0.06 0.05 Standard deviation Linearized OTGMM OTGMM Efficient GMM error scale 0 0.5 1 1.5 2 2.5 0 0.5 1 1.5 2-
 2.5 0 0.5 1 1.5 2 2.5 Normal 0.11 0.12 0.12 0.13 0.15 0.16 0.11 0.11 0.12 0.12 0.13 0.13 0.10 0.10 0.09 0.09 0.09 0.09 Uniform 0.00 0.04 0.15 0.29 0.45 0.61 0.00 0.05 0.10 0.12 0.12 0.13 0.00 0.04 0.10 0.10 0.09 0.09 Binomial 0.10 0.11 0.13 0.15 0.18 0.20 0.10 0.11 0.12 0.13 0.13 0.14 0.10 0.10 0.10 0.10 0.10 0.10 RMSE Linearized OTGMM OTGMM Efficient GMM error scale 0 0.5 1 1.5 2 2.5 0 0.5 1 1.5 2 2.5 0 0.5 1 1.5 2 2.5 Normal 0.11 0.12 0.12 0.13 0.15 0.16 0.11 0.11 0.12 0.12 0.13 0.13 0.10 0.10 -
0.09 0.09 0.09 0.09 Uniform 0.00 0.04 0.15 0.29 0.45 0.61 0.00 0.05 0.10 0.12 0.12 0.13 0.00 0.04 0.10 0.10 0.09 0.09 Binomial 0.10 0.11 0.13 0.15 0.18 0.21 0.10 0.11 0.12 0.13 0.14 0.14 0.10 0.10 0.11 0.11 0.11 0.11
While these tables consider a large number of specifications and data generating
processes, we here highlight a few values that illustrate the typical trends present
throughout the simulations. First, it is clear that OTGMM is, in general, preferable
to linearized OTGMM in terms of bias, and hence we focus our discussion on the
former. As an example, let us compare the OTGMM and GMM results in Table S.6,
for the column that corresponds to an error scale of σ = 1.5 for the normal model.
The OTGMM estimator reduces the bias magnitude to only 0.05, as compared to 0.18
for GMM. At the same time, the variance only increases from 0.19 (for GMM) to 0.20
(for OTGMM), which is a negligible increase, thus supporting the idea that GMM’s
use of the optimal weighting matrix is not particularly beneficial in this context. As
a result, the overall root mean square error (RMSE) is 0.21 for OTGMM down from
14

Table S.8: Simulation results: Equation (34)
Bias Linearized OTGMM OTGMM Efficient GMM error scale 0 0.5 1 1.5 2 2.5 0 0.5 1 1.5 2 2.5 0 0.5 1 1.5 2 2.5 Normal -0.01 0.00 0.02 0.09 0.29 1.00 -0.01 0.00 0.00 0.00 0.00 0.00 -0.01 -0.01 -0.04 -0.07 -0.07 -0.07 Uniform 0.00 -0.13 -0.63 -2.02 -6.17 -20.84 0.00 -0.05 -0.04 -0.02 -0.01 0.00 0.00 -0.12 -0.16 -0.15 -0.12 -0.09 Binomial 0.00 0.01 0.04 0.09 0.24 0.76 0.00 0.01 0.02 0.03 0.03 0.04 0.00 -0.01 -0.05 -0.06 -0.06 -0.04 Standard deviation Linearized OTGMM OTGMM Efficient GMM error scale 0 0.-
5 1 1.5 2 2.5 0 0.5 1 1.5 2 2.5 0 0.5 1 1.5 2 2.5 Normal 0.11 0.11 0.12 0.15 0.49 2.77 0.11 0.11 0.11 0.12 0.12 0.13 0.12 0.11 0.11 0.12 0.13 0.13 Uniform 0.04 0.06 0.27 1.13 5.89 44.86 0.04 0.06 0.09 0.11 0.12 0.12 0.04 0.06 0.09 0.11 0.12 0.13 Binomial 0.10 0.10 0.11 0.15 0.72 6.05 0.10 0.10 0.11 0.12 0.12 0.13 0.10 0.10 0.11 0.12 0.13 0.14 RMSE Linearized OTGMM OTGMM Efficient GMM error scale 0 0.5 1 1.5 2 2.5 0 0.5 1 1.5 2 2.5 0 0.5 1 1.5 2 2.5 Normal 0.11 0.11 0.12 0.18 0.58 2.95 0.11 0.11 0.-
11 0.12 0.12 0.13 0.12 0.11 0.12 0.14 0.15 0.15 Uniform 0.04 0.14 0.69 2.31 8.53 49.47 0.04 0.08 0.10 0.11 0.12 0.12 0.04 0.13 0.19 0.19 0.17 0.16 Binomial 0.10 0.10 0.11 0.17 0.76 6.09 0.10 0.10 0.11 0.12 0.13 0.13 0.10 0.10 0.12 0.14 0.14 0.14
Table S.9: Simulation results: Equation (35)
Bias Linearized OTGMM OTGMM Efficient GMM error scale 0 0.5 1 1.5 2 2.5 0 0.5 1 1.5 2 2.5 0 0.5 1 1.5 2 2.5 Exponential -0.01 0.03 0.16 0.38 0.67 0.99 -0.01 0.03 0.13 0.27 0.42 0.58 -0.04 -0.02 0.10 0.29 0.50 0.71 Standard deviation Linearized OTGMM OTGMM Efficient GMM error scale 0 0.5 1 1.5 2 2.5 0 0.5 1 1.5 2 2.5 0 0.5 1 1.5 2 2.5 Exponential 0.17 0.16 0.16 0.16 0.17 0.18 0.17 0.16 0.16 0.17 0.20 0.23 0.16 0.16 0.17 0.20 0.23 0.27 RMSE Linearized OTGMM OTGMM Efficient GMM error scale 0 0.5 1 1.-
5 2 2.5 0 0.5 1 1.5 2 2.5 0 0.5 1 1.5 2 2.5 Exponential 0.17 0.17 0.23 0.42 0.69 1.00 0.17 0.17 0.21 0.32 0.47 0.62 0.16 0.16 0.20 0.35 0.55 0.76
0.26 for GMM.
The key take-away from these simulations is that the OTGMM estimator exhibits
the ability to substantially reduce bias while not substantially increasing the variance
relative to efficient GMM. As a result, the overall RMSE criterion points in favor
of OTGMM. This is exactly the type of behavior one would expect for an effective
measurement error-correcting method. The reduction in bias is especially important
for inference and testing, as it significantly reduces size distortion. In contrast, a
small increase in variance does not affect inference validity, as this variance can be
straightforwardly accounted for in the asymptotics, unlike the bias, which is generally
unknown.
15

---

## Processing Information

- **Processing Library:** Zotero PDFWorker
- **Processing Date:** 2026-02-10T18:16:22.800Z
- **Text Length:** 86067 characters
- **Success:** Text extraction completed
- **PDF Library Used:** Zotero PDFWorker
- **Pages Processed:** 46 of 46
