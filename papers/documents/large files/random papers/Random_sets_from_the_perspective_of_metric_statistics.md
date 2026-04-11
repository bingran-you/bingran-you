# PDF Document: Kurisu et al. - 2025 - Random sets from the perspective of metric statistics.pdf

**File Path:** Kurisu et al. - 2025 - Random sets from the perspective of metric statistics.pdf

**Processed Date:** 2026-02-10T18:18:57.267Z

**File Size:** 701.00 KB

**Total Pages:** 22

**Extracted Pages:** 22

**PDF Library:** Zotero PDFWorker

**Attachment Item ID:** 3171

**Title:** Random sets from the perspective of metric statistics

**Collection:** Large Files > Random Papers

---

## Extracted Text Content

RANDOM SETS FROM THE PERSPECTIVE OF METRIC STATISTICS
DAISUKE KURISU, YUTA OKAMOTO, AND TAISUKE OTSU
Abstract. Since the seminal work by Beresteanu and Molinari (2008), the random set theory
and related inference methods have been widely applied in partially identified econometric models.
Meanwhile, there is an emerging field in statistics for studying random objects in metric spaces,
called metric statistics. This paper clarifies a relationship between two fundamental concepts in
these literatures, the Aumann and Fre ́chet means, and presents some applications of metric statistics
to econometric problems involving random sets.
1. Introduction
Since the seminal work by Beresteanu and Molinari (2008), the random set theory and related in
ference methods have been widely applied in partially identified econometric models; see Molchanov
and Molinari (2018) and Molinari (2020) for surveys in econometrics, and Molchanov (2017) for
a comprehensive overview on the random set theory. The random set approach characterizes an
identification region of interest by utilizing the Aumann (1965) mean for set valued random vari
ables (SVRVs) and constructs its sample analog estimator by using Minkowski averages of SVRVs.
Obviously the key ingredient for partial identification analysis using random sets is the Aumann
mean, which is a natural and convenient extension of the conventional mean for Euclidean random
variables to SVRVs.
On the other hand, in the recent statistics literature for analyzing complex data, there is an
emerging and rapidly growing field, called metric statistics (or statistics for random objects); see
Dubey et al. (2024) for an overview and references therein. Metric statistics is concerned with
complex data situated in a metric space, and popular examples include distributional data, network
data, symmetric positive definite matrices, trees, data on Riemannian manifolds, among others. In
this literature, a fundamental notion to characterize the population mean for metric valued random
objects is the Fr ́echet (1948) mean.
Given these literatures, it is natural to ask whether there is a relationship between these notions
of population means, and also whether the methodologies of metric statistics can shed new light on
econometric analysis of random sets. This is of course not the first paper addressing these issues.
For example, Section 3.2 of Molchanov (2017) introduced the Fr ́echet mean and mentioned that it
Date: November 18, 2025. Key words and phrases. Aumann mean, Fre ́chet mean, global Fr ́echet regression, metric statistics, random set
theory.
The work of D. K. is partially supported by JSPS KAKENHI Grant Number 23K12456.
1
arXiv:2511.13440v1 [math.ST] 17 Nov 2025

can be applied to SVRVs that situated in the Hausdorff metric space. Li et al. (2021) mentioned
that their local regression smoother based on the Minkowski average can be interpreted as the
sample Fr ́echet mean. Although these discussions are highly insightful, their main focuses are on
the conventional random set analysis using the Aumann mean, and the analysis using the Fre ́chet
mean is not pursued. On the other hand, to the best of our knowledge, there is no formal study in
the literature of metric statistics on SVRVs. This paper is written to fill this gap.
In particular, this paper makes two contributions. First, we formally study the relationship be
tween the Aumann and Fre ́chet means, and establish the equivalence of these notions of population
means in the space of nonempty compact and convex sets equipped with the L2-metric based on
their support functions. A key ingredient to establish such equivalence is an isometric embedding
of a general metric space into a Hilbert space. Second, we apply or extend some methodologies of
metric statistics to econometric problems that involve random sets. After introducing the global
Fr ́echet regression (GFR) by Petersen and Mu ̈ller (2019), we apply the GFR to the projection
model of Euclidean covariates, and clarify the relation with the set valued best linear predictor
by Beresteanu and Molinari (2008). Furthermore, we present some extensions of the GFR for an
errors-in-variables model with set valued outcomes and a missing set valued data problem.
This paper is organized as follows. Section 2 discusses our main result, equivalence of the Aumann
and Fr ́echet means. Then Section 3 presents applications of metric statistics for random sets.
2. Main result
This section is devoted to discuss the relationship between the Aumann mean and the Fre ́chet
mean of SVRVs. After introducing our basic setup and the Aumann mean (Section 2.1), we
introduce a metric space based on the support function (Section 2.2). Then we introduce the
Fr ́echet mean and present a key property, isometric embedding (Section 2.3). Based on these
preparations, Section 2.4 establishes the equivalence of the Aumann and Fr ́echet means of SVRVs.
2.1. Setup and Aumann mean. We follow the notation in Beresteanu and Molinari (2008) and
introduce our basic setup. Let (Ω, A, μ) be a measurable space, and K(Rd) be the collection of all
nonempty closed subsets of Rd. A random element F : Ω → K(Rd) is called an SVRV. Let Kk(Rd)
be the set of nonempty compact subsets of Rd, and Kkc(Rd) denote the set of nonempty compact
and convex subsets of Rd. For an SVRV F ∈ Kk(Rd), the Aumann mean is defined as follows.
Let L1 = L1(Ω, Rd) denote the space of measurable random variables with values in Rd s.t.
∥ξ∥1 = E[∥ξ∥] < ∞, S(F ) denote the set of all measurable selections (or points) from a set F , and
S1(F ) = S(F ) ∩ L1. The Aumann mean of an SVRV F ∈ Kk(Rd) is defined as
E[F ] = E[f ] : f ∈ S1(F ) . (1)
Similarly, the conditional Aumann mean of F given X ∈ X is defined as E[F |X] = E[f |X] : f ∈ S1(F ) ,
where X is a subset of Rp. The Aumann mean is a natural generalization of the conventional mean
2

for Euclidean random variables and plays a fundamental role in random set theory and its econo
metric and statistical applications; see Molchanov (2017), Molchanov and Molinari (2018), and
Molinari (2020).
Hereafter we focus on SVRVs on the set of nonempty compact and convex subsets, Kkc(Rd),
and characterize the Aumann mean E[F ] for F ∈ Kkc(Rd) by using the notion of the Fr ́echet mean
for random objects in a metric space, which has been increasingly popular in recent literature on
metric statistics; see Dubey et al. (2024) for example.
2.2. Support function and metric on Kkc(Rd). A key ingredient to clarify the relationship
between the Aumann and Fr ́echet means is to choose a proper metric on the set of nonempty
compact and convex subsets Kkc(Rd). To this end, we introduce the support function s(p, F ) =
supf∈F ⟨p, f ⟩ for F ∈ Kkc(Rd) over p ∈ Sd−1, where Sd−1 = {x ∈ Rd : ∥x∥ = 1} is the unit sphere
in Rd. For an SVRV F ∈ Kkc(Rd), the Aumann mean E[F ] is equivalently characterized by its
support function.
For F, G ∈ Kkc(Rd), define
dkc(F, G) =
Z
Sd−1
{s(p, F ) − s(p, G)}2 dp
1/2
=: ∥s(·, F ) − s(·, G)∥2,Sd−1 .
This paper employs dkc as a metric on Kkc(Rd) and establishes the equivalence of the Aumann and
Fr ́echet means. We close this subsection by presenting some properties related to dkc. Let dH (·, ·) be
the Hausdorff metric on Kk(Rd) defined by dH (F, G) = max{supf∈F infg∈G ∥f −g∥, supg∈G inff∈F ∥f −
g∥} for F, G ∈ Kk(Rd), KB
kc(Rd) = {F ∈ Kkc(Rd) : supf∈F ∥f ∥ ≤ B} for a positive constant B,
L2(Sd−1) denote the space of functions such that ∥f ∥2,Sd−1 < ∞, and Ψ : Kk(Rd) → L2(Sd−1) be a
map such that Ψ(F ) = s(·, F ).
Lemma 2.1.
(i) dkc is a metric on Kkc(Rd).
(ii) Let {Fn}n≥0 ⊂ KB
kc(Rd) be a sequence of compact convex sets. Then limn→∞ dkc(Fn, F0) = 0 if
and only if limn→∞ dH (Fn, F0) = 0.
(iii) KB
kc(Rd) is a bounded closed convex subset of Kkc(Rd) with respect to dkc.
(iv) Ψ(KB
kc(Rd)) is a bounded closed convex subset of L2(Sd−1).
Lemma 2.1 establishes several topological properties of compact convex sets under the metric
dkc. In particular, Lemma 2.1 (ii) shows that convergence under the Hausdorff metric, which can be
defined as the sup-norm distance between support functions on Sd−1 (see Lemma B.9), is equivalent
to convergence under the L2-based distance dkc. This equivalence motivates the use of dkc, which
is analytically more tractable, for statistical analysis of random compact convex sets. In Section
2.4, we show that the Aumann mean (and its sample counterpart, the normalized Minkowski sum)
can be characterized as the Fr ́echet mean, that is, the minimizer of E[d2
kc(ν, F )], the expectation of
the squared distance between a data descriptor ν ∈ KB
kc(Rd) and an SVRV F ∈ KB
kc(Rd) (and its
3

sample version). Finally, Lemma 2.1 (iii) and (iv) guarantee the existence and uniqueness of the
Fr ́echet mean.
2.3. Fr ́echet mean and isometric embedding. We now introduce the Fr ́echet mean for random
objects. Let X be a subset of Rp, (M, d) be a separable metric space, and (Y, X) ∈ M × X be a
pair of random elements. The Fr ́echet mean E⊕[Y ] of Y is defined as a minimizer of the population
Fr ́echet function Q(ν) = E[d2(ν, Y )], that is,
E⊕[Y ] ∈ argminν∈MQ(ν).
Similarly, the conditional Fr ́echet mean E⊕[Y |X] of Y given X is defined as
E⊕[Y |X] ∈ argminν∈MQ(ν|X), Q(ν|X) = E[d2(ν, Y )|X].
The Fr ́echet mean is a direct generalization of the conventional mean for the Euclidean space toward
a general metric space, and its statistical analysis has been increasingly popular in recent literature.
The key step to establish the relationship between the Aumann and Fr ́echet means is to consider
an isometric embedding of a general metric space into a Hilbert space. To this end, we impose the
following assumptions.
Assumption 2.1.
(i) There exist a Hilbert space H equipped with an inner product ⟨·, ·⟩H, induced norm ∥ · ∥H,
and a continuous injection Ψ : M → H such that Ψ : M → Ψ(M) is isometry, i.e.,
d(α, β) = ∥Ψ(α) − Ψ(β)∥H for any α, β ∈ M.
(ii) The set Ψ(M) is a nonempty closed convex set in H.
Note that (KB
kc(Rd), dkc) satisfies Assumption 2.1. Indeed, setting Ψ(F ) = s(·, F ) implies that
KB
kc(Rd) admits an isometric embedding into L2(Sd−1). Furthermore, by Lemma 2.1 (iv), the
image Ψ(KB
kc(Rd)) satisfies Assumption 2.1 (ii). Let (M, d) be a metric space. The metric d2
is of negative type if, for all n ≥ 2, ν1, . . . , νn ∈ M and α1, . . . , αn ∈ R with Pn
i=1 αi = 0, we
have Pn
i=1
Pn
j=1 αiαjd2(νi, νj) ≤ 0. A sufficient condition for Assumption 2.1 (i) is provided in
Proposition 3 in Sejdinovic et al. (2013) for example, which implies that if d2 is of negative type, then
this condition is satisfied; see also Schoenberg (1938). Many of the common metric spaces studied
in metric statistics are known to satisfy Assumption 2.1. Examples include the 2-Wasserstein space
for univariate probability distributions, the space of symmetric positive (semi)definite matrices
endowed with the Frobenius, power, or log-Euclidean metric, the space of graph Laplacians equipped
with the Frobenius metric, and the space of compositional data endowed with the Aitchison metric.
See also Appendix C.1 in Kurisu et al. (2025b).
Under these assumptions, we obtain the following characterizations of the Fr ́echet mean. For
a random element Z taking values in a Hilbert space H, we define its expectation as the Riesz
representation of the linear functional that maps h ∈ H to E[⟨h, Z⟩H] ∈ R.
4

Proposition 2.1. Suppose that Assumption 2.1 holds true and E[∥Ψ(Y )∥H] < ∞. Then the
following results hold.
(i) The object Ψ−1(E[Ψ(Y )]) is well defined, and E⊕[Y ] = Ψ−1(E[Ψ(Y )]).
(ii) Ψ(E⊕[Y ]) = E[Ψ(E⊕[Y |X])].
According to Proposition 2.1 (i), the Fr ́echet mean of Y is obtained as the pullback, through Ψ,
of the expectation of Ψ(Y ) in the image space Ψ(KB
kc(Rd)). Proposition 2.1 (ii) can be interpreted
as a law of iterated expectation for random objects, which naturally generalizes the corresponding
result for Euclidean random variables.
2.4. Equivalence of Aumann and Fr ́echet means. We now apply the Fre ́chet mean to SVRVs
in the metric space (KB
kc(Rd), dkc). Let (F, X) ∈ KB
kc(Rd) × X be a pair of random elements. For
F, G ⊂ Rd, let F ⊕ G = {f + g : f ∈ F, g ∈ G} denote the Minkowski sum of F and G. The
population Fr ́echet mean E⊕[F ] of F with respect to the metric dkc is defined as a minimizer of the
population Fre ́chet function Q(ν) = E[d2
kc(ν, F )], that is,
E⊕[F ] ∈ argminν∈KB
kc (Rd ) Q(ν ).
Similarly, the population conditional Fr ́echet mean of F given X is defined as
E⊕[F |X] ∈ argminν∈KB
kc(Rd)Q(ν|X), Q(ν|X) = E[d2
kc(ν, F )|X].
The main results of this paper are presented as follows.
Proposition 2.2. For an SVRV F : Ω → KB
kc(Rd), the following results hold true.
(i) E⊕[F ] and E⊕[F |X] with respect to the metric dkc uniquely exist.
(ii) E⊕[F ] = E[F ].
(iii) E⊕[F |X] = E[F |X] and E⊕[F ] = E⊕[E⊕[F |X]].
Proposition 2.2 (i) guarantees uniqueness of the Fr ́echet means E⊕[F ] and E⊕[F |X]. Proposition
2.2 (ii) and (iii) are our main results, equivalence of the Fre ́chet and conditional Fr ́echet means to
the Aumann and conditional Aumann means, respectively. Furthermore, Proposition 2.2 (iii) also
provides the law of iterated expectations for the Fre ́chet mean.
Note that an SVRV F ∈ Kkc(Rd) is a metric space-valued random element, which is called
random object. See e.g., Marron and Alonso (2014) and Marron and Dryden (2021) for a review.
By Proposition 2.2, the (conditional) Aumann mean of F can be defined as the (conditional) Fre ́chet
mean of F under the metric dkc. From this viewpoint, statistical analysis of SVRVs falls within the
scope of metric statistics, a field that has seen remarkable development in recent years; see Dubey
et al. (2024) for example.
Remark 2.1. We can also show that the sample Fr ́echet mean for E⊕[F ] based on SVRVs F1, . . . , Fn ∈
KB
kc(Rd) coincides with the conventional sample Minkowski mean, which is a sample counterpart
of the Aumann mean. More precisely, the sample Fr ́echet mean μ⊕,n of F1, . . . , Fn with respect to
5

the metric dkc is defined as a minimizer of the sample Fre ́chet function Qn(ν) = 1
n
Pn
i=1 d2
kc(ν, Fi),
that is
μ⊕,n ∈ argminν∈KB
kc (Rd ) Qn (ν ).
The equivalence of the sample Minkowski and Fr ́echet means is presented as follows.
Corollary 2.1. Let F1, . . . , Fn ∈ KB
kc(Rd) be SVRVs. Then there exists a unique sample Fre ́chet
mean μ⊕,n with respect to dkc and it coincides with the sample Minkowski mean, that is, μ⊕,n =
1 n
Ln
i=1 Fi, where Ln
i=1 Fi is the Minkowski sum of F1, . . . , Fn.
3. Metric statistics for random sets
This section presents several methods developed within metric statistics that can be applied to
the analysis of SVRVs. For t ∈ R, define tF = {tf : f ∈ F }. Let X ⊂ Rp be a compact set.
3.1. Linear regression as a weighted Fr ́echet mean. To motivate, consider the linear projec
tion model for an Euclidean outcome Y ∈ R and Euclidean covariates X ∈ Rp,
Y = θ∗
0 + (θ∗
1)′(X − μ) + ε, E[Xε] = 0,
where μ = E[X] and the vector (θ0∗, θ1∗) solves
(θ∗
0, θ∗
1) = argmin(θ0,θ1)∈Rp+1 E[(E[Y |X] − {θ0 + θ′
1(X − μ)})2].
Let σY X = E[Y (X − μ)] and Σ = E[(X − μ)(X − μ)′]. Assume that Σ is invertible. Then we have
θ0∗ = E[Y ] and θ1∗ = Σ−1σY X , and obtain the regression function
m(x) := θ∗
0 + (θ∗
1)′(x − μ) = E[Y ] + (x − μ)Σ−1σY X
= E[Y + (x − μ)′Σ−1(X − μ)Y ] = E[w(x, X)Y ],
where w(x, z) = 1 + (x − μ)′Σ−1(z − μ)′. Since E[w(x, X)] = 1, the regression function m(x) is
characterized as the solution
m(x) = argminy∈RE[w(x, X)d2
E(y, Y )],
where dE is the standard Euclidean metric.
By extending the above representation of m(x), the global Fre ́chet regression (GFR) function for
an outcome Y in a general metric space (M, d) is defined as follows (Petersen and Mu ̈ller, 2019):
m⊕(x) = argminν∈ME[w(x, X)d2(ν, Y )].
Let {Yi, Xi}n
i=1 be an i.i.d. sample from the joint distribution of (Y, X) ∈ M × Rp. Then the GFR
estimator is given as the sample counterpart of m⊕, that is
ˆm⊕(x) = argminν∈M
1
n
n
X
i=1
wˆ(x, Xi)d2(ν, Yi), (2)
where wˆ(x, z) = 1 + (x − X ̄ )′ ˆΣ−1(z − X ̄ ), X ̄ = n−1 Pn
i=1 Xi, and ˆΣ = n−1 Pn
i=1(Xi − X ̄ )(Xi − X ̄ )′.
6

3.2. Global Fr ́echet regression for random sets. We now apply the GFR for a pair of random
elements (F, X) ∈ KB
kc(Rd) × X , which is defined as
m⊕(x) = argminν∈KB
kc(Rd)E[w(x, X)d2
kc(ν, F )].
In order to derive the explicit form of m⊕(x), recall Ψ : KB
kc(Rd) ∋ F 7→ s(·, F ) ∈ L2(Sd−1), and
define
m⊕,Ψ(x) = argminh∈L2(Sd−1)E[w(x, X)∥h − Ψ(F )∥2,Sd−1 ].
Then we have
m⊕,Ψ(x) = E[w(x, X)Ψ(F )] = E[w(x, X)Ψ(E⊕[F |X])] = E[w(x, X)s(·, E⊕[F |X])],
where the second equality follows from Proposition 2.1.
Assume that infz∈X w(x, z) ≥ 1, which guarantees w(x, X)F ∈ KB
kc(Rd). Then from Proposition
2.2 (ii) and Lemma B.6 (i), we have
m⊕,Ψ(x) = E[s(·, w(x, X)E⊕[F |X])] = s(·, E[w(x, X)F ]) = Ψ(E[w(x, X)F ]),
which yields the expression of m⊕(x) by the Aumann means:
m⊕(x) = E[w(x, X)F ] = E[F ] ⊕ (x − μ)′Σ−1E[(X − μ)F ]
= (1, (x − μ)′) 1 0
0Σ
!−1 E[F ]
E[(X − μ)F ]
!
=: (1, (x − μ)′)Θ.
Note that Θ corresponds to the population set valued best linear predictor in Beresteanu and
Molinari (2008). On the other hand, if infz∈X w(x, z) < 1, we have
m⊕,Ψ(x) ≤ E[s(·, w(x, X)E⊕[F |X])] = Ψ(E[w(x, X)F ]). (3)
Specifically, it is possible to provide an example such that m⊕,Ψ(x) < Ψ(E[w(x, X)F ]) (see Appen
dix A.6). Therefore, for the GFR with a general weight function w(x, z), we compute m⊕(x) by
projecting m⊕,Ψ(x) on Ψ(KB
kc(Rd)), that is,
m⊕(x) = Ψ−1(me ⊕,Ψ(x)), me ⊕,Ψ(x) = argminh∈Ψ(KB
kc(Rd))∥h − m⊕,Ψ(x)∥2,Sd−1 .
The following result shows that m⊕(x) is in fact the GFR function.
Proposition 3.1. m⊕(x) = Ψ−1(me ⊕,Ψ(x)) is the GFR function, that is, Ψ−1(me ⊕,Ψ(x)) is the
unique minimizer of E[w(x, X)d2
kc(ν, F )] over ν ∈ KB
kc(Rd). Additionally, if supz∈X |w(x, z)| < ∞
and m⊕,Ψ(x) ∈ Ψ(Kkc(Rd)), then m⊕(x) ⊂ E[w(x, X)F ].
Figure 3.1 illustrates the relation between m⊕(x) and E[w(x, X)F ] when d = 1. The colored
region corresponds to the set of support functions. Note that, in the one-dimensional case, F can
be written as F = [−a, b] with b + a ≥ 0. Note also that the support function s(p, F ) of F ∈ Kkc(R)
is characterized by s(1, F ) and s(−1, F ) and satisfies b = s(1, F ) ≥ −s(−1, F ) = −a. Hence the
set of support functions Ψ(Kkc(R)) = {s(·, F ) : F ∈ Kkc(R)} can be identified with {(a, b) ∈ R2 :
7

Figure 3.1. Illustration of the relation between m⊕(x) and E[w(x, X)F ] when
d = 1.
b + a ≥ 0}. The blue region R+,+, the purple region R−,+, and the red region R−,− correspond to
the sets K1, K2, and K3 such that K1 ⊔ K2 ⊔ K3 = Kkc(R) where K1 = {[x, y] : 0 < x ≤ y < ∞},
K2 = {[x, y] : −∞ < x ≤ 0 ≤ y < ∞}, and K3 = {[x, y] : −∞ < x ≤ y < 0}. In each figure,
black points correspond to m⊕,Ψ, me ⊕,Ψ, and Ψ(E[w(x, X)F ]). The left figure represents the case
m⊕,Ψ(x) ∈ Ψ(Kkc(R)), in which case m⊕(x) ⊂ E[w(x, X)F ]. The middle figure corresponds to the
case of m⊕,Ψ(x) ∈/ Ψ(Kkc(R)) and m⊕(x) ⊂ E[w(x, X)F ]. The right figure corresponds to the case
of m⊕,Ψ(x) ∈/ Ψ(Kkc(R)) and m⊕(x) ̸⊂ E[w(x, X)F ].
Let (F, X) ∈ KB
kc(Rd) × X be a pair of random elements and {Fi, Xi}n
i=1 be an i.i.d. sample from
the joint distribution of (F, X). The uniform convergence rate of the GFR estimator in (2) can be
established as follows.
Proposition 3.2. Assume that d ≤ 4. For a given B0 > 0, we have
sup
∥x∥≤B0
dkc( ˆm⊕(x), m⊕(x)) =



Op(n− 1
2(α−1) ) for any α > 2 when d = 1,
Op(n− 1
2(1+(d−1)/4) ) when d ∈ {2, 3, 4}.
In Proposition 3.2, since α > 2 can be chosen arbitrarily, the convergence rate of the GFR
estimator can be arbitrarily close to the parametric rate when d = 1. The restriction d ≤ 4 is due
to the complexity of the metric space (Kkc(Rd), dkc). Specifically, let N (ε, F , d) be the covering
number, that is, the minimal number of balls of radius ε (with respect to the metric d) needed
to cover the set F. We can see N (ε, KB
kc(Rd), dkc) ≤ Dε−2 for d = 1 but N (ε, KB
kc(Rd), dkc) ≤
eDε−(d−1)/2 for d ≥ 2 where D is a positive constant which is independent of ε. To show Proposition
3.2 for d ≥ 2, we need to verify R 1
0
√
ε−(d−1)/2dε < ∞, which requires d ≤ 4. See the proof of
Proposition 3.2 for details. The same comment applies to Proposition 3.3 below.
8

0 5 10 15 20
−3 −2 −1 0 1 2 3
z
w(x, z)
x = 13.727 x = 16
Figure 3.2. Weight functions w(μ, z) and w(16, z)
and histogram of X.
3.2.1. Illustration. As an illustration, consider the case of one-dimensional interval-valued random
variable, i.e., F ∈ KB
kc(R). In this case, letting F = [L, U ], we have
m⊕,Ψ(x) = E[w(x, X)s(p, F )] for p ∈ {−1, 1} =



−E[w(x, X)L] for p = −1
E[w(x, X)U ] for p = 1
.
Also since w(x, X)F = [min{w(x, X)L, w(x, X)U }, max{w(x, X)L, w(x, X)U }], we obtain
Ψ(E[w(x, X)F ]) =



−E[min{w(x, X)L, w(x, X)U }] if p = −1
E[max{w(x, X)L, w(x, X)U }] if p = 1
.
Following Beresteanu and Molinari (2008), we consider the best linear prediction of the returns to
education of log-wages for white men between the ages of 20 and 50. We artificially divide the
support of the outcome variable into five equal intervals to construct interval data. We employ the
March 2009 Current Population Survey data from Hansen (2022), and treat them as the population.
Then we compare the GFR m⊕(x) = Ψ−1(me ⊕,Ψ(x)) and the Aumann mean E[w(x, X)F ] at x =
μ ≈ 13.727 and x = 16, corresponding to the Bachelor’s degree. Note that w(μ, z) = 1 + (μ −
μ)′Σ−1(z − μ) = 1 (see Figure 3.2) so that m⊕(x) = E[w(x, X)F ]. In this case, the Aumann mean
and the GFR are computed as
E[w(μ, X)F ] = [9.624, 12.253] and m⊕(μ) = [9.624, 12.253].
On the other hand, Figure 3.2 shows that infz∈X w(16, z) < 1. We can also confirm that m⊕,Ψ(16) is
9

a proper support function, i.e., m⊕,Ψ(16) ∈ Ψ(Kkc(R)). These suggest that m⊕(x) ⊂ E[w(x, X)F ]
(Proposition 3.1). Indeed, we obtain that
E[w(16, X)F ] = [9.891, 12.778] and m⊕(16) = [10.020.12.649].
3.3. Errors-in-variables. The GFR approach can be naturally extended to errors-in-variables
models. Suppose the object of interest is
m⊕(x) = argminν∈KB
kc(Rd)E[w(x, X)d2
kc(ν, F )].
However, Euclidean covariates X are mismeasured, and we instead observe W = X + ε, where ε is
a measurement error such that E[ε|X, F ] = 0 and E[εε′] = Σε. In this setup, note that E[W ] = μ,
ΣW = E[(W − E[W ])(W − E[W ])′] = Σ + Σε, and
E[{1 + (x − E[W ])′Σ−1
W (W − E[W ])}d2
kc(ν, F )] = E[{1 + (x − μ)′(Σ + Σε)−1(X − μ)}d2
kc(ν, F )].
Then the GFR estimator (2) with M = KB
kc(Rd), d = dkc, and Yi = Fi is not consistent for m⊕(x).
Suppose we observe instrumental variables Z = X + v (or repeated measurements on X) such
that E[v|X, F ] and E[vε′|X, F ] = 0. Then we can recover Σ as
ΣZW = E[(Z − E[Z])(W − E[W ])′] = E[(X − μ + v)(X − μ + ε)′] = Σ.
Therefore, the GFR function m⊕(x) can be estimated based on the alternative representation
m⊕(x) = argminν∈KB
kc(Rd)E[w ̃(x, X)d2
kc(ν, F )],
where w ̃(x, z) = 1 + (x − μ)′Σ−1
ZW (z − μ).
Other possible statistical methods for analyzing set-valued response variables with Euclidean
covariates using the GFR or related regression models include Tucker et al. (2023) and Kurisu and
Otsu (2025) for variable selection and model averaging, Bhattacharjee and Mu ̈ller (2023) for an
extension of the GFR to single index models, Petersen and M ̈uller (2019) and Chen and Mu ̈ller
(2022) for extensions of the GFR to local linear regression.
3.4. Missing data. Consider the missing at random setup. Let T ∈ {0, 1} be the indicator
for missing data. We observe T F and X, where (F, X) ∈ KB
kc(Rd) × X and assume F and T are
independent given X. Let {Fi, Xi, Ti}n
i=1 be an i.i.d. sample from the joint distribution of (F, X, T ).
We are interested in the Fr ́echet mean of F , that is, E⊕[F ] = argminν∈KB
kc(Rd)E[d2
kc(ν, F )].
Letting e(x) = P(T = 1|X = x), we can see that
ET
e(X) d2
kc(ν, F ) = E 1
e(X) E[T d2
kc(ν, F )|X] = E 1
e(X) E[T |X]E[d2
kc(ν, F )|X] = E[d2
kc(ν, F )].
Therefore, the Fr ́echet mean of F can be alternatively written as
E⊕[F ] = argminν∈KB
kc(Rd)E T
e(X) d2
kc(ν, F ) ,
10

which can be estimated by
ˆE⊕[F ] = argminν∈KB
kc (Rd )
1
n
n
X
i=1
Ti
eˆ(Xi) d2
kc(ν, Fi) = 1
n
n
X
i=1
Ti eˆ(Xi)
!−1 1
n
n
M
i=1
Ti
eˆ(Xi) Fi,
and eˆ(x) is a nonnegative nonparametric estimator of e(x).
One can see that ˆE⊕[F ] is a modified version of inverse probability weighting estimator proposed
in Kurisu et al. (2024):
ˆΘ(IPW)
1 =1
n
n
M
i=1
Ti
eˆ(Xi) Fi. (4)
See Appendix A.8 for the derivation of (4). The following result provides the convergence rate of
ˆE⊕[F ].
Proposition 3.3. Suppose that the following conditions hold.
(i) There exists a constant η0 ∈ (0, 1/2) such that η0 ≤ e(x) ≤ 1 − η0 for all x ∈ X .
(ii) supx∈X |eˆ(x) − e(x)| = Op(ρn), ρn → 0 as n → ∞.
(iii) As δ → 0, R 1
0
plog N (δε, Bδ′(e), ∥ · ∥∞)dε = O(δ−π1) for some δ′ > 0 and π1 ∈ (0, 1),
where ∥e1 − e2∥∞ = supx∈X |e1(x) − e2(x)| for e1, e2 : X → R, and Bγ(e) is the ball of
radius γ > 0 centered at e.
Then for d ≤ 4, we have dkc(ˆE⊕[F ], E⊕[F ]) = Op(n− 1
2(1+max{(d−1)/4,π1}) + ρnπ2 ) for any π2 ∈ (0, 1).
If the propensity score e(x) belongs to a class of parametric models Me = {e(x; φ) : φ ∈ Φ} with a
compact parameter space Φ ⊂ Rq, Condition (iii) is satisfied with R 1
0
plog N (δε, Bδ′(e), ∥ · ∥∞)dε =
O(− log δ) as δ → 0. In this case, it can be shown that convergence rate of ˆE⊕[F ] is Op(n− 1
2(α−1) )
for any α > 2 when d = 1 and Op(n− 1
2(1+(d−1)/4) ) when d ∈ {2, 3, 4}. For details on this point, see,
for example, Section 4.1 of Kurisu et al. (2024).
In the recent literature, metric statistics has been extended to conduct causal inference for
outcomes situated in a general metric space; see Kurisu et al. (2024), Zhou et al. (2025), Kurisu
et al. (2025a,b), and Bhattacharjee et al. (2025). In sum, metric statistics can be a useful toolkit
for econometric analysis on non-Euclidean economic data including SVRVs.
11

Appendix A. Proofs
An SVRV F is called integrably bounded if sup{∥f ∥ : f ∈ F } has finite expectation.
A.1. Proof of Lemma 2.1.
A.1.1. Proof of (i). For any F1, F2, F3 ∈ Kkc(Rd), it suffices to verify the following conditions. (a)
dkc(F1, F2) = 0 ⇔ F1 = F2, (b) dkc(F1, F2) = dkc(F2, F1), and (c) dkc(F1, F2) ≤ dkc(F1, F3) +
dkc(F3, F2). Conditions (b) and (c) follow immediately from the definition of dkc. Now we verify
Condition (a). Observe that dkc(F1, F2) = 0 ⇔ s(p, F1) ≡ s(p, F2) for almost all p ∈ Sd−1 and this
implies s(p, F1) = s(p, F2) for all p ∈ Sd−1. Indeed, define h(p) = s(p, F1) − s(p, F2) and assume
that s(p, F1) = s(p, F2) for all p ∈ Sd−1. If there exists a point p0 ∈ Sd−1 such that h(p0) ̸= 0, then
Lemma B.4 yields that there exists a neighborhood U (p0) of p0 such that h(p) ̸= 0 on U (p0). This
contradicts the assumption. Then we have s(p, F1) = s(p, F2) for all p ∈ Sd−1. Since F1 and F2 are
closed convex sets, we obtain F1 = F2.
A.1.2. Proof of (ii). First, we verify limn→∞ dH (Fn, F0) = 0 ⇒ limn→∞ dkc(Fn, F0) = 0. For any
bounded closed convex sets, F, G, we have dkc(F, G) ≤ pvol(Sd−1) supp∈Sd−1 |s(p, F ) − s(p, G)|.
Then Lemmas B.9 and B.10 yield limn→∞ dH (Fn, F0) = 0 ⇒ limn→∞ dkc(Fn, F0) = 0.
Next, we verify limn→∞ dkc(Fn, F0) = 0 ⇒ limn→∞ dH (Fn, F0) = 0. Note that supp∈Sd−1 |s(p, Fn)| ≤
supn(supf∈Fn ∥f ∥) ≤ B and hence the sequence {s(·, Fn)}n≥1 is uniformly bounded. Moreover,
from the proof of Lemma B.4, we have supn |s(u, Fn) − s(v, Fn)| ≤ B∥u − v∥ for any u, v ∈ Sd−1,
and hence the sequence {s(·, Fn)}n≥1 is equicontinuous. Let {Fnk }k≥1 be any subsequence of
{Fn}≥1. Then from Arzel ́a-Ascoli theorem, there exist a subsequence {s(·, Fnkl )}l≥1 and con
tinuous function t(·) on Sd−1 such that liml→∞ supp∈Sd−1 |s(p, Fnkl ) − t(p)| = 0. This yields
liml→∞ ∥s(·, Fnkl )−t(·)∥2,Sd−1 ≤ pvol(Sd−1) liml→∞ supp∈Sd−1 |s(p, Fnkl )−t(p)| = 0. Then we have
∥s(·, F0)−t(·)∥2,Sd−1 ≤ liml→∞ ∥s(·, F0)−s(·, Fnkl )∥2,Sd−1 +liml→∞ ∥s(·, Fnkl )−t(·)∥2,Sd−1 = 0. This
yields s(p, F0) = t(p) for all p ∈ Sd−1. Indeed, applying the same argument in the proof of Lemma
2.1 (i), we have s(·, F0) = t(·). Then we have liml→∞ supp∈Sd−1 |s(p, Fnkl ) − s(p, F0)| = 0, which
yields limn→∞ supp∈Sd−1 |s(p, Fn) − s(p, F0)| = 0. Then from Lemma B.9, limn→∞ dkc(Fn, F0) =
0 ⇒ limn→∞ dH (Fn, F0) = 0 and Lemma B.10 yields that F0 is a bounded closed convex set.
A.1.3. Proof of (iii). The conclusion follows from Lemma 2.1 (ii) and the fact that Kkc(Rd) is
closed with respect to dH (Lemma B.10).
A.1.4. Proof of (iv). It is easy to verify the convexity. Now we show the closedness.
(Step 1) For a sequence of sets {Fn} ⊂ KB
kc(Rd), assume that limn→∞ ∥s(·, Fn) − t(·)∥2,Sd−1 = 0.
From the proof of Lemma 2.1 (ii), we have that t(·) is a continuous function with supp∈Sd−1 |t(p)| ≤
supn(supf∈Fn ∥f ∥) ≤ B and limk→∞ supp∈Sd−1 |s(p, Fnk )−t(p)| = 0 for some subsequence {s(·, Fnk )}k≥1.
12

(Step 2) Now we verify that t(·) is a support function of a bounded closed convex set F ⊂ Rd.
For this, we first extend s(·, Fnk ) on Sd−1 to a function on Rd. Define
s ̃(x, Fnk ) =



∥x∥s x
∥x∥ , Fnk x ̸= 0
0 x=0
.
We also define t ̃ : Rd → R is the same way. Then limk→∞ supp∈Sd−1 |s(p, Fnk ) − t(p)| = 0 implies
limk→∞ supx:∥x∥≤R |s ̃(x, Fnk ) − t ̃(x)| = 0 for any R > 0.
Now we verify (a) positive homogeneity and (b) convexity of t ̃(·) that characterize support
functions (Schneider, 2014). For (a), pick any λ ≥ 0 and x ∈ Rd. We have
|t ̃(λx) − λt ̃(x)| ≤ |t ̃(λx) − s ̃(λx, Fnk )| + |s ̃(λx, Fnk ) − λs ̃(x, Fnk )| + |λs ̃(x, Fnk ) − λt ̃(x)| → 0,
as k → ∞, which implies (a) as t ̃(λx) = λt ̃(x). For (b), if t ̃ is subadditive (i.e., t ̃(x + y) ≤ t ̃(x) + t ̃(y)
for any x, y ∈ Rd), then from the positive homogeneity of t ̃, we can see that t ̃ is convex. Now
we verify the subadditivity of t ̃. Note that for each k, s ̃(·, Fnk ) is subadditive. Then we have
0 ≤ s ̃(x, Fnk ) + s ̃(y, Fnk ) − s ̃(x + y, Fnk ). This yields 0 ≤ t ̃(x) + t ̃(y) − t ̃(x + y), which implies the
subadditivity of t ̃, and we obtain (b).
(Step 3) Now we verify that t ̃ is a support function of a bounded closed convex set F . Define
F =T
p∈Sd−1 x ∈ Rd : ⟨p, x⟩ ≤ t ̃(p) . Then we can see that F is a closed convex set and t ̃(·) is
a support function of F . Moreover, for any x ∈ F with x ̸= 0, ∥x∥ = ⟨x/∥x∥, x⟩ ≤ t(x/∥x∥) ≤
supn(supf∈Fn ∥f ∥) ≤ B. Then F is a bounded closed convex set. In particular t ̃(·) ≡ s(·, F ),
F ∈ KB
kc(Rd).
A.2. Proof of Proposition 2.1.
A.2.1. Proof of (i). Note that Ψ(Y ) ∈ Ψ(M), which is a closed convex set (Assumption 2.1 (ii)).
Then from Lemma B.1, we have E[Ψ(Y )] ∈ Ψ(M). Since Ψ is injective (Assumption 2.1 (i))
and E[Ψ(Y )] ∈ Ψ(M), Ψ−1(E[Ψ(Y )]) is well defined. From the definition of E[Ψ(Y )], we have
E[⟨h, Ψ(Y )⟩H] = ⟨h, E[Ψ(Y )]⟩H for h ∈ H. This yields
E[Ψ(Y )] = argminh∈HE[∥h − Ψ(Y )∥2
H] = argminh∈Ψ(M)E[∥h − Ψ(Y )∥2
H].
Thus, we have E[∥E[Ψ(Y )] − Ψ(Y )∥2
H] ≤ E[∥Ψ(ν) − Ψ(Y )∥2
H] for any ν ∈ M. By the isometry of Ψ
(Assumption 2.1 (i)), we have E d2 Ψ−1(E[Ψ(Y )]), Y ≤ E[d2(ν, Y )] for any ν ∈ M. Therefore,
we obtain E⊕[Y ] = Ψ−1(E[Ψ(Y )]).
A.2.2. Proof of (ii). Applying the same argument in the proof of (i) to the conditional distribution
of Y given X, we have Ψ(E⊕[Y |X]) = E[Ψ(Y )|X]. Then we have E[Ψ(E⊕[Y |X])] = E[Ψ(Y )] =
Ψ(E⊕[Y ]), where the last equality follows from (i).
A.3. Proof of Proposition 2.2.
13

A.3.1. Proof of (i) and (ii). Note that Ψ(KB
kc(Rd)) ⊂ L2(Sd−1) is closed and convex (Lemma 2.1
(iv)). Then from Proposition 2.1 (i), we have s(·, E⊕[F ]) = Ψ(E⊕[F ]) = E[Ψ(F )] = E[s(·, F )].
Since F an integrably bounded SVRV, Lemma B.11 yields s(·, E⊕[F ]) ≡ s(·, E[F ]), where E[F ] is
the Aumann mean of F . Then Lemma B.8 yields E⊕[F ] = E[F ].
A.3.2. Proof of (iii). The first statement follows by applying a similar argument to the proof of
(i). Note that E[F |X] ∈ KB
kc(Rd) and E[F ] = E[E[F |X]]. Thus, from (i) and Proposition 2.1 (ii),
we have
Ψ(E⊕[E⊕[F |X]]) = E[Ψ(E[F |X])] = s(·, E[E[F |X]]) = s(·, E[F ]) = Ψ(E⊕[F ]),
which yields E⊕[F ] = E⊕[E⊕[F |X]].
A.4. Proof of Corollary 2.1. From Proposition 2.1, we have s(·, μ⊕,n) = Ψ(μ⊕,n) = 1
n
Pn
i=1 Ψ(Fi) =
1 n
Pn
i=1 s(·, Fi). Thus, Lemma B.6 (iii) yields s(·, μ⊕,n) = s ·, 1
n
Ln
i=1 Fi , and Lemma B.8 implies
μ⊕,n = 1
n
Ln
i=1 Fi.
A.5. Proof of Proposition 3.1. First, we verify that m⊕(x) is the GFR function. Note that
me ⊕,Ψ(x) exists and is unique from Lemmas 2.1 and B.2. From the definition of me ⊕,Ψ(x), we have
E[w(x, X)d2
kc(ν, F )] = ∥Ψ(ν) − E[w(x, X)Ψ(F )]∥2
2,Sd−1
+
Z
Sd−1
E[w(x, X)s2(p, F )]dp − ∥E[w(x, X)Ψ(F )]∥2
2,Sd−1
≥ ∥me ⊕,Ψ(x) − E[w(x, X)Ψ(F )]∥2
2,Sd−1
+
Z
Sd−1
E[w(x, X)s2(p, F )]dp − ∥E[w(x, X)Ψ(F )]∥2
2,Sd−1
= E[w(x, X)d2
kc(Ψ−1(  ̃m⊕,Ψ(x)), F )],
for any ν ∈ KB
kc(Rd). This yields Ψ−1(me ⊕,Ψ(x)) ∈ argminν∈KB
kc(Rd)E[w(x, X)d2
kc(ν, F )] so that
Ψ−1(me ⊕,Ψ(x)) is the unique GFR function.
Next, we verify m⊕(x) ⊂ E[w(x, X)F ]. Note that w(x, X)F ∈ KB′
kc (Rd) where B′ = B supz∈X |w(x, z)|.
Then Lemma 2.1 (iv), Proposition 2.1 (i), and Proposition 2.2 (ii) yield E[w(x, X)F ] = E⊕[w(x, X)F ] ∈
KB′
kc (Rd) ⊂ Kkc(Rd). Since m⊕,Ψ(x) ∈ Ψ(Kkc(Rd)), m⊕,Ψ(x) = me ⊕,Ψ(x) is the support function of
m⊕(x) = Ψ−1(m⊕,Ψ(x)) ∈ Kkc(Rd) and hence (3) yields m⊕,Ψ(x) = s(·, m⊕(x)) ≤ s(·, E[w(x, X)F ]).
Therefore, from Lemma B.7, we have m⊕(x) ⊂ E[w(x, X)F ].
A.6. An example such that  ̃m⊕,Ψ(x) < Ψ(E[w(x, X)F ]). Let (F, X) ∈ {[−1, 2], [1, 6], {0}} ×
{−2, 0, 2} and let
P(F = [−1, 2], X = −2) = P(F = [1, 6], X = 2) = 1/4,
P(F ̸= [−1, 2], X = −2) = P(F ̸= [1, 6], X = 2) = 0,
P(F = {0}, X = 0) = 1/2, P(F ̸= {0}, X = 0) = 0.
14

Note that S0 = {−1, 1}. Define g1(p) = E[w(2, X)s(p, F )] and g2(p) = s(p, E[w(2, X)F ]). Then we
have g1(p) < g2(p) for p ∈ S0. Indeed,
g1(p) = − 1
4 s(p, [−1, 2]) + 3
4 s(p, [1, 6]) =



4 if p = 1
−1 if p = −1
,
g2(p) = s p, − 1
4 [−1, 2] ⊕ 3
4 [1, 6] = s p, 1
4 , 19
4=



19
4 if p = 1
−1
4 if p = −1
.
Note that ∥g∥2
2,S0 = g2(−1) + g2(1). Then we have 0 = ∥g1 − s(·, [1, 4])∥2
2,S0 < ∥g1 − g2∥2
2,S0 =
18/16. This implies s(·, [1, 4]) =  ̃m⊕,Ψ(2) ̸= Ψ(E[w(2, X)F ]) = s(·, [1/4, 19/4]). Likewise, we have
 ̃m⊕,Ψ(0) = Ψ(E[w(0, X)F ]) = s(·, E[F ]) = s(·, [0, 2]) and s(·, [−1, 0]) =  ̃m⊕,Ψ(−2) ̸= Ψ(E[w(−2, X)F ]) =
s(·, [−9/4, 5/4]).
A.7. Proof of Proposition 3.2. We first show the result for d ≥ 2 and then show the result for
d = 1.
A.7.1. Proof for the case d ≥ 2. Define
Q(ν, x) = E[w(x, X)d2
kc(ν, F )], Qn(ν, x) = 1
n
n
X
i=1
wˆ(x, Xi)d2
kc(ν, Fi).
Following the proof of Theorem 2 in Petersen and M ̈uller (2019), it suffices to verify the following
conditions.
(a) Almost surely, for all ∥x∥ ≤ B0, the objects m⊕(x) and ˆm⊕(x) exist and are unique.
Additionally, for any ε > 0,
inf
∥x∥≤B0
inf
dkc(ν,m⊕(x))>ε
Q(ν, x) − Q(m⊕(x), x) > 0,
and there exists ζ = ζ(ε) > 0 such that
nli→m∞ P inf
∥x∥≤B0
inf
dkc(ν,mˆ ⊕(x))>ε
Qn(ν, x) − Qn( ˆm⊕(x), x) ≥ ζ = 1.
(b) Let Bδ(m⊕(x)) ⊂ KB
kc(Rd) be the ball of radius δ centered at m⊕(x) and N (ε, Bδ(m⊕(x)), dkc)
be its covering number using ball of size ε. As δ → 0, it holds
Z1
0
sup
∥x∥≤B0
p1 + log N (δε, Bδ(m⊕(x)), dkc)dε = O(δ− d−1
4 ).
(c) There exist τ > 0 and D > 0, possibly depending on B0, such that
inf
∥x∥≤B0
inf
dkc(ν,m⊕(x))<τ
{Q(ν, x) − Q(m⊕(x), x) − Dd2
kc(ν, m⊕(x))} ≥ 0.
Verification of (a). Applying the same argument in the proof of Proposition 3.1, we can see that
m⊕(x) and ˆm⊕(x) exist and are unique for all ∥x∥ ≤ B0, hence proving Condition (a).
15

Verification of (b). For the remainder of this proof, for any F ∈ KB
kc(Rd) and γ > 0, Bγ(F ) refers
to the dkc ball of radius γ centered at F . Lemma 2.7.12 of van der Vaart and Wellner (2023)
implies N (ε, KB
kc(Rd), dkc) ≤ eDε−(d−1)/2 , where D is independent of ε. Then for F ∈ KB
kc(Rd) and
δ ∈ (0, 1), we can take a collection of compact convex sets in Kkc(Rd), Cδε(F ) = {gu : u ∈ U }
with U ⊂ R such that |U | = N (δε, B1(F ), dkc) ≤ eD(δε)−(d−1)/2. Then we have shown that
supF ∈KB
kc(Rd) log N (δε, Bδ(F ), dkc) ≤ D(δε)−(d−1)/2. Observe that sup∥x∥≤B0 log N (δε, Bδ(m⊕(x)), dkc) ≤
D(δε)−(d−1)/2, so for any δ ∈ (0, 1), we have
Z1
0
sup
∥x∥≤B0
p1 + log N (δε, Bδ(m⊕(x)), dkc)dε ≤
Z1
0
q
1 + D(δε)−(d−1)/2dε = O(δ− d−1
4 ).
Verification of (c). For f, g ∈ L2(Sd−1), let ⟨f, g⟩2,Sd−1 = R
Sd−1 f (x)g(x)dx. From Lemma B.3,
m⊕(x) is characterized by ⟨m⊕,Ψ(x) − m ̃ ⊕,Ψ(x), h −  ̃m⊕,Ψ(x)⟩2,Sd−1 ≤ 0 for all h ∈ Ψ(KB
kc(Rd)) and
∥x∥ ≤ B0. Then we have
Q(ν, x) − Q(m⊕(x), x) = d2
kc(ν, m⊕(x)) − 2⟨m⊕,Ψ(x) −  ̃m⊕,Ψ(x), Ψ(ν) −  ̃m⊕,Ψ(x)⟩2,Sd−1
≥ d2
kc(ν, m⊕(x)).
Consequently, we can take D = 1 and τ arbitrary to satisfy Condition (c).
A.7.2. Proof for the case d = 1. Verification of (a) and (c) is the same as in d ≥ 2. One can see
that N (ε, KB
kc(R), dkc) ≤ Dε−2 where D is independent of ε. By applying a similar argument to
verify (b) when d ≥ 2, we have
Z1
0
sup
∥x∥≤B0
p1 + log N (δε, Bδ(m⊕(x)), dkc)dε = O(− log δ).
Following the proof of Theorem 2 in Petersen and M ̈uller (2019), this yields sup∥x∥≤B0 dkc( ˆm⊕(x), m⊕(x)) =
Op(n− 1
2(α−1) ) for any α > 2.
A.8. Derivation of (4). For α, β ∈ KB
kc(Rd), let γα,β : [0, 1] → KB
kc(Rd) denote the geodesic from
α to β under the metric dkc, and γα,β(ρ) be the end point of the (extended) geodesic ρ ⊙ γα,β.
See Kurisu et al. (2024) for a more detailed discussion on geodesic metric spaces and extensions
of geodesics. Since F ∈ KB
kc(Rd) can be isometrically embedded into L2(Sd−1) by using the map
Ψ(F ) = s(·, F ), we have
γ{0},Fi
Ti
eˆ(Xi) = Ψ−1 Ψ({0}) + Ti
eˆ(Xi) (Ψ(Fi) − Ψ({0})) = Ψ−1 Ti
eˆ(Xi) Ψ(Fi) = Ti
eˆ(Xi) Fi.
Therefore, we have
Θˆ (IPW)
1 = argminν∈KB
kc (Rd )
1
n
n
X
i=1
d2
kc ν, γ{0},Fi
Ti
eˆ(Xi) = 1
n
n
M
i=1
Ti
eˆ(Xi) Fi.
16

A.9. Proof of Proposition 3.3. Observe that
dkc(ˆE⊕[F ], E⊕[F ])
=s

·, 1
n
n
X
i=1
Ti eˆ(Xi)
!−1 1
n
n
M
i=1
Ti
eˆ(Xi) Fi

 − s(·, E⊕[F ])
2,Sd−1
≤B
η0
q
vol(Sd−1) 1
n
n
X
i=1
Ti eˆ(Xi)
!−1
− 1 + s ·, 1
n
n
M
i=1
Ti
eˆ(Xi) Fi
!
− s(·, E⊕[F ])
2,Sd−1
≤B
η0
q
vol(Sd−1)
(
1
η02
sup
x∈X
|eˆ(x) − e(x)| + 1
n
n
X
i=1
Ti
e(Xi) − 1
)
(1 + op(1)) + dkc(Θˆ (IPW)
1 , E⊕[F ])
= Op(ρn) + Op(n−1/2) + dkc( ˆΘ(IPW)
1 , E⊕[F ]).
Therefore, the conclusion follows from a similar argument in the proof of Theorem A.4 in Kurisu
et al. (2024).
Appendix B. Auxiliary results
We first present some results on Hilbert space.
Lemma B.1. If C is a nonempty closed convex subset of a Hilbert space H and Z is a random
element taking values in C with E[∥Z∥H] < ∞, then E[Z] ∈ C.
Proof. Let μZ = E[Z] be the expectation of Z and suppose μZ ∈/ C. Since C is closed, there is
an open ball Bδ(μZ) = {h ∈ H : ∥h − μZ∥H < δ} such that Bδ(μZ) ∩ C = ∅. By Hahn-Banach
separation theorem, there exists an h0 ∈ H and a ∈ R such that ⟨h0, μZ⟩H < a ≤ ⟨h0, h⟩H for all
h ∈ C. Since a ≤ ⟨h0, h⟩H for all h ∈ C, we have a ≤ E[⟨h0, Z⟩H]. This implies a ≤ ⟨h0, μZ⟩H and
contradicts with ⟨h0, μZ ⟩H < a. □
Lemma B.2. Let C be a nonempty closed convex set of a Hilbert space H. For any y ∈ H, the
projection πC(y) := argminh∈C∥y − h∥H exists and is unique.
Proof. First, we show the existence of a minimizer. Define r = infh∈C ∥y − h∥H. Since C is
nonempty, r is finite. Indeed, for any h ∈ C, it holds r ≤ ∥y − h∥H < ∞. Choose a minimizing
sequence {hn}n≥1 ⊂ C such that ∥y − hn∥H → r. This sequence is bounded. Indeed, for any
h0 ∈ C, we have ∥hn∥H ≤ ∥h∥H + ∥y − hn∥H ≤ ∥y∥H + (r + 1) for sufficiently large n. Hence
{hn}n≥1 has a convergent subsequence hnk → h∗ ∈ H. Since C is closed, it holds h∗ ∈ C. Then we
have ∥y − h∗∥H = limk→∞ ∥y − hnk ∥H = r and h∗ attains the minimum. Thus, a minimizer exists.
Next, we show the uniqueness. Consider f (h) = ∥y − h∥2
H, which is strictly convex on H. Indeed,
for any h1, h2 ∈ H and t ∈ (0, 1), it holds f (th1 + (1 − t)h2) ≤ t∥y − h1∥2
H + (1 − t)∥y − h2∥2
H and
the equality holds if and only if h1 = h2. Indeed,
t∥y − h1∥2
H + (1 − t)∥y − h2∥2
H − ∥t(y − h1) + (1 − t)(y − h2)∥2
H = t(1 − t)∥h1 − h2∥2
H. 17

Now suppose h∗1, h∗2 ∈ C are distinct minimizers. Then m = (h∗1 + h∗2)/2 ∈ C by the convexity of
C, but strict convexity of f yields ∥y − m∥2
H< 1
2 ∥y − h∗1∥2
H+ 1
2 ∥y − h∗2∥2
H = r2, contradicting the
minimality of r. Hence the minimizer is unique. □
Lemma B.3. For a Hilbert space H, let C ⊂ H be a nonempty closed convex set and y ∈ H. Then
for every h ∈ C, ⟨y − πC(y), h − πC(y)⟩H ≤ 0.
Proof. Now we show Lemma B.3. Note that πC(y) ∈ C. Fix h0 ∈ C and for t ∈ (0, 1), define
γ(t) = (1 − t)πC(y) + th0 ∈ C. Then we have
∥y − πC (y)∥2
H ≤ ∥y − γ(t)∥2
H = ∥y − πC (y)∥2
H − 2t⟨y − πC (y), h0 − πC (y)⟩H + t2∥h0 − πC (y)∥2
H.
This yields 0 ≤ −2t⟨y − πC (y), h0 − πC (y)⟩H + t2∥h0 − πC (y)∥2
H. Recall t > 0. Therefore, we have
0 ≤ −2⟨y − πC (y), h0 − πC (y)⟩H + t∥h0 − πC (y)∥2
H. Letting t ↓ 0 yields ⟨y − πC (y), h0 − πC (y)⟩H ≤
0. □
Hereafter, we summarize some results on compact convex sets and their support functions used
in the main text.
Lemma B.4. If F ⊂ Rd is a bounded set (i.e., supf∈F ∥f ∥ < ∞), then the support function s(p, F ),
p ∈ Sd−1 is Lipschitz continuous and uniformly continuous on Sd−1.
Proof. For any u, v ∈ Rd and any f ∈ F , we have ⟨u, f ⟩ − ⟨v, f ⟩ ≤ ⟨u − v, f ⟩ ≤ (supf∈F ∥f ∥)∥u − v∥.
Then we have s(u, F ) − s(v, F ) ≤ (supf∈F ∥f ∥)∥u − v∥. Likewise, we have s(v, F ) − s(u, F ) ≤
(supf∈F ∥f ∥)∥u − v∥, which implies |s(u, F ) − s(v, F )| ≤ (supf∈F ∥f ∥)∥u − v∥, and the conclusion
follows. □
Lemma B.5. Let s(·, F ) be the support function of F ∈ Kkc(Rd). Then we have F = T
p∈Sd−1 {x ∈
Rd : ⟨p, x⟩ ≤ s(p, F )} =: FS.
Proof. First, we show that if f ∈ F , then f ∈ FS. For any f ∈ F and p ∈ Sd−1, we have
⟨p, f ⟩ ≤ supf∈F ⟨p, f ⟩ = s(p, F ), which implies f ∈ FS and hence F ⊂ FS. Next, we show that
if f ∈ FS, then f ∈ F . Suppose f0 ∈/ F . Then by Hahn-Banach separation theorem, there exist
u ∈ Rd and a ∈ R such that ⟨u, f ⟩ ≤ a < ⟨u, f0⟩ for any f ∈ F . Thus, we have s(u, F ) < ⟨u, f0⟩
and hence f0 ∈/ FS. Therefore, we obtain FS ⊂ F , and the conclusion follows. □
Lemma B.6. The following results hold true.
(i) (Positive homogeneity) For any p ∈ Rd, t ≥ 0, and subset F ⊂ Rd,
s(tp, F ) = ts(p, F ), s(p, tF ) = ts(p, F ).
(ii) (Additivity) For any p ∈ Rd and subsets F, G ⊂ Rd,
s(p, F ⊕ G) = s(p, F ) + s(p, G).
18

(iii) (Convexity) For any p ∈ Rd, t ∈ [0, 1], and subsets F, G ⊂ Rd,
s(p, (tF ) ⊕ ((1 − t)G)) = ts(p, F ) + (1 − t)s(p, G).
Proof. (i) We only show the first result since the second result can be shown in the same manner.
Observe that for any f ∈ F , ⟨tp, f ⟩ = t⟨p, f ⟩. Then we have s(pt, F ) = ts(p, F ).
(ii) We first show s(p, F ⊕ G) ≤ s(p, F ) + s(p, G). Observe that for any f ∈ F and g ∈ G,
⟨p, f + g⟩ = ⟨p, f ⟩ + ⟨p, g⟩ = sup
f ∈F
⟨p, f ⟩ + sup
g∈G
⟨p, g⟩ = s(p, F ) + s(p, G).
Then we have s(p, F ⊕ G) = suph∈F ⊕G⟨p, h⟩ ≤ s(p, F ) + s(p, G). Next we show s(p, F ) + s(p, G) ≤
s(p, F ⊕ G). If s(p, F ) = −∞ or s(p, G) = −∞, then the inequality follows immediately. Now
we assume that s(p, F ) > −∞ and s(p, G) > −∞. Fix any positive ε. From the definition of the
supremum, there exist fε ∈ F and gε ∈ G such that ⟨p, fε⟩ ≥ s(p, F ) − ε and ⟨p, gε⟩ ≥ s(p, G) − ε.
Hence we have ⟨p, fε + gε⟩ ≥ s(p, F ) + s(p, G) − 2ε. This yields s(p, F ⊕ G) = suph∈F ⊕G⟨p, h⟩ ≥
s(p, F ) + s(p, G) − 2ε. Letting ε ↓ 0, we obtain s(p, F ) + s(p, G) ≤ s(p, F ⊕ G).
(iii) The result follows from (i) and (ii). □
Lemma B.7. For F, G ∈ Kkc(Rd), s(p, F ) ≤ s(p, G) for all p ∈ Sd−1 if and only if F ⊂ G.
Proof. From the definition of the support function, the verification of F ⊂ G ⇒ s(p, F ) ≤ s(p, G)
for all p ∈ Sd−1 is straightforward. Now we verify s(p, F ) ≤ s(p, G) for all p ∈ Sd−1 ⇒ F ⊂ G. From
Lemma B.5, we have K = T
p∈Sd−1{x ∈ Rd : ⟨p, x⟩ ≤ s(p, K)} for K ∈ {F, G}. Since s(p, F ) ≤
s(p, G) for all p ∈ Sd−1, we obtain {x ∈ Rd : ⟨p, x⟩ ≤ s(p, F )} ⊂ {x ∈ Rd : ⟨p, x⟩ ≤ s(p, G)} for all
p ∈ Sd−1. This yields F ⊂ G. □
Lemma B.8. Let s(·, F ) and s(·, G) be the support functions of F, G ∈ Kkc(Rd), respectively. Then
F = G if and only if s(p, F ) = s(p, G) for p ∈ Sd−1.
Proof. We only verify s(p, F ) = s(p, G) for all p ∈ Sd−1 ⇒ F = G since the converse is obvious.
Note that s(p, F ) = s(p, G) for all p ∈ Sd−1 ⇔ s(p, F ) ≤ s(p, G) and s(p, F ) ≥ s(p, G) for all
p ∈ Sd−1. Then Lemma B.7 yields F ⊂ G and F ⊃ G, which implies F = G. □
Lemma B.9. For any F, G ∈ Kkc(Rd), we have dH (F, G) = supp∈Sd−1 |s(p, F ) − s(p, G)|.
Proof. We first show supp∈Sd−1 |s(p, F ) − s(p, G)| ≤ dH (F, G). Let B = {x ∈ Rd : ∥x∥ ≤ 1}.
Fix any positive ε and any f ∈ F . From the definition of dH , there exists gf,ε ∈ G such that
∥f − gf,ε∥ ≤ dH (F, G) + ε. Hence for any p ∈ Sd−1, we have
⟨p, f ⟩ = ⟨p, gf,ε⟩ + ⟨p, f − gf,ε⟩ ≤ ⟨p, gf,ε⟩ + ∥p∥∥f − gf,ε∥
≤ ⟨p, gf,ε⟩ + dH (F, G) + ε ≤ s(p, G) + dH (F, G) + ε.
This yields s(p, F ) ≤ s(p, G) + dH (F, G) + ε. Letting ε ↓ 0, we have s(p, F ) ≤ s(p, G) + dH (F, G).
Likewise, we have s(p, G) ≤ s(p, F ) + dH (F, G). Then we have |s(p, F ) − s(p, G)| ≤ dH (F, G), which
yields supp∈Sd−1 |s(p, F ) − s(p, G)| ≤ dH (F, G).
19

Next we show dH (F, G) ≤ supp∈Sd−1 |s(p, F ) − s(p, G)|. Let δ = supp∈Sd−1 |s(p, F ) − s(p, G)|.
Then for any p ∈ Sd−1 and any f ∈ F , we have ⟨p, f ⟩ ≤ s(p, F ) ≤ s(p, G) + δ. This yields
F⊂
\
p∈Sd−1
n
x ∈ Rd : ⟨p, x⟩ ≤ s(p, G) + δ
o
=
\
p∈Sd−1
n
x ∈ Rd : ⟨p, x⟩ ≤ s(p, G ⊕ (δB))
o
(Lemma B.6 (i), (ii))
= G ⊕ (δB) (Lemma B.5)
and hence for any f ∈ F , it holds infg∈G ∥f − g∥ ≤ δ. Likewise, we have G ⊂ F ⊕ (δB) and thus
inff∈F ∥g − f ∥ ≤ δ for any g ∈ G. Therefore, we have dH (F, G) ≤ δ = supp∈Sd−1 |s(p, F ) − s(p, G)|,
and the conclusion follows. □
Lemma B.10 (Theorem 3 in Vitale (1985)). Let {Fn}n≥1 ⊂ Kkc(Rd) be a sequence of compact
convex sets. If limn→∞ dH (Fn, F ) = 0, then F ⊂ Rd is a compact convex set.
Lemmas 2.1 (ii) and B.10 imply that (Kkc(Rd), dkc) (or (Kkc(Rd), dH )) is a complete metric
space.
Lemma B.11 (Lemma 2.2 in Artstein (1974)). If an SVRV F : Ω → Kkc(Rd) is integrably bounded,
then we have E[s(p, F )] = s(p, E[F ]) for p ∈ Sd−1.
References
Artstein, Z. (1974). On the calculus of closed set-valued functions. Indiana University Mathematics
Journal, 24(5):433–441.
Aumann, R. J. (1965). Integrals of set valued functions. Journal of Mathematical Analysis and
Applications, 12:1–12.
Beresteanu, A. and Molinari, F. (2008). Asymptotic properties for a class of partially identified
models. Econometrica, 76(4):763–814.
Bhattacharjee, S., Li, B., Wu, X., and Xue, L. (2025). Doubly robust estimation of causal effects
for random object outcomes with continuous treatments. arXiv preprint arXiv:2506.22754.
Bhattacharjee, S. and Mu ̈ller, H.-G. (2023). Single index Fr ́echet regression. Annals of Statistics,
51(4):1770–1798.
Chen, Y. and Mu ̈ller, H.-G. (2022). Uniform convergence of local Fr ́echet regression with appli
cations to locating extrema and time warping for metric space valued trajectories. Annals of
Statistics, 50(3):1573–1592.
Dubey, P., Chen, Y., and Mu ̈ller, H.-G. (2024). Metric statistics: Exploration and inference for
random objects with distance profiles. Annals of Statistics, 52(2):757–792.
Fr ́echet, M. (1948). Les  ́el ́ements al ́eatoires de nature quelconque dans un espace distanci ́e. Annales
de l’Institut Henri Poincar ́e, 10:215–310.
Hansen, B. E. (2022). Econometrics. Princeton University Press.
20

Kurisu, D. and Otsu, T. (2025). Model averaging for global Fr ́echet regression. Journal of Multi
variate Analysis, 207:105416.
Kurisu, D., Zhou, Y., Otsu, T., and Mu ̈ller, H.-G. (2024). Geodesic causal inference. arXiv preprint
arXiv:2406.19604.
Kurisu, D., Zhou, Y., Otsu, T., and Mu ̈ller, H.-G. (2025a). Geodesic synthetic control methods for
random objects and functional data. arXiv preprint arXiv:2505.00331.
Kurisu, D., Zhou, Y., Otsu, T., and M ̈uller, H.-G. (2025b). Regression discontinuity designs for
functional data and random objects in geodesic spaces. arXiv preprint arXiv:2506.18136.
Li, Q., Molchanov, I., Molinari, F., and Peng, S. (2021). Local regression smoothers with set-valued
outcome data. International Journal of Approximate Reasoning, 128:129–150.
Marron, J. S. and Alonso, A. M. (2014). Overview of object oriented data analysis. Biometrical
Journal, 56(5):732–753.
Marron, J. S. and Dryden, I. L. (2021). Object Oriented Data Analysis. Chapman and Hall/CRC.
Molchanov, I. (2017). Theory of Random Sets. Springer, 2nd edition.
Molchanov, I. and Molinari, F. (2018). Random Sets in Econometrics, volume 60. Cambridge
University Press.
Molinari, F. (2020). Microeconometrics with partial identification. Handbook of Econometrics,
7:355–486.
Petersen, A. and M ̈uller, H.-G. (2019). Fr ́echet regression for random objects with euclidean
predictors. Annals of Statistics, 47(2):691–719.
Schneider, R. (2014). Convex Bodies: the Brunn-Minkowski Theory, volume 151. Cambridge
university press, 2nd edition.
Schoenberg, I. J. (1938). Metric spaces and positive definite functions. Transactions of the American
Mathematical Society, 44(3):522–536.
Sejdinovic, D., Sriperumbudur, B., Gretton, A., and Fukumizu, K. (2013). Equivalence of distance
based and RKHS-based statistics in hypothesis testing. Annals of Statistics, 41(5):2263–2291.
Tucker, D. C., Wu, Y., and Mu ̈ller, H.-G. (2023). Variable selection for global Fr ́echet regression.
Journal of the American Statistical Association, 118(542):1023–1037.
van der Vaart, A. and Wellner, J. (2023). Weak Convergence and Empirical Processes: With
Applications to Statistics. Springer Series in Statistics. Springer Cham, 2nd edition.
Vitale, R. A. (1985). Lp metrics for compact, convex sets. Journal of Approximation Theory,
45(3):280–287.
Zhou, Y., Kurisu, D., Otsu, T., and Mu ̈ller, H.-G. (2025). Geodesic difference-in-differences. arXiv
preprint arXiv:2501.17436.
(D. Kurisu) Center for Spatial Information Science, The University of Tokyo, 5-1-5, Kashiwanoha,
Kashiwa-shi, Chiba 277-8568, Japan.
Email address: daisukekurisu@csis.u-tokyo.ac.jp
21

(Y. Okamoto) Graduate School of Economics, Kyoto University, Yoshida Honmachi, Sakyo, Kyoto
606-8501, Japan.
Email address: okamoto.yuuta.57w@st.kyoto-u.ac.jp
(T. Otsu) Department of Economics, London School of Economics, Houghton Street, London, WC2A
2AE, UK.
Email address: t.otsu@lse.ac.uk
22

---

## Processing Information

- **Processing Library:** Zotero PDFWorker
- **Processing Date:** 2026-02-10T18:18:57.267Z
- **Text Length:** 49895 characters
- **Success:** Text extraction completed
- **PDF Library Used:** Zotero PDFWorker
- **Pages Processed:** 22 of 22
