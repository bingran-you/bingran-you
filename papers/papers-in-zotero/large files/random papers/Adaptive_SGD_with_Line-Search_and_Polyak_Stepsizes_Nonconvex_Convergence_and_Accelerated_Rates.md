# PDF Document: Wu - 2025 - Adaptive SGD with Line-Search and Polyak Stepsizes Nonconvex Convergence and Accelerated Rates.pdf

**File Path:** Wu - 2025 - Adaptive SGD with Line-Search and Polyak Stepsizes Nonconvex Convergence and Accelerated Rates.pdf

**Processed Date:** 2026-02-10T18:13:47.107Z

**File Size:** 334.62 KB

**Total Pages:** 15

**Extracted Pages:** 15

**PDF Library:** Zotero PDFWorker

**Attachment Item ID:** 3463

**Title:** Adaptive SGD with Line-Search and Polyak Stepsizes: Nonconvex Convergence and Accelerated Rates

**Collection:** Large Files > Random Papers

---

## Extracted Text Content

Adaptive SGD with Line-Search and Polyak Stepsizes:
Nonconvex Convergence and Accelerated Rates
Haotian Wu
Zhejiang University
Abstract
We extend the convergence analysis of AdaSLS and AdaSPS in [Jiang and Stich, 2024] to the
nonconvex setting, presenting a unified convergence analysis of stochastic gradient descent with
adaptive Armijo line-search (AdaSLS) and Polyak stepsize (AdaSPS) for nonconvex optimization.
Our contributions include: (1) an O(1/√T ) convergence rate for general nonconvex smooth func
tions, (2) an O(1/T ) rate under quasar-convexity and interpolation, and (3) an O(1/T ) rate under
the strong growth condition for general nonconvex functions.
Contents
Appendices . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 1
1 Introduction . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2
1.1 Our Contributions . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 3
2 Preliminaries . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 3
2.1 Algorithm Overview . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 3
2.2 Assumptions and Definitions . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 4
3 Convergence Analysis . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 4
3.1 General Nonconvex Convergence without Interpolation . . . . . . . . . . . . . . . . . . 5
3.2 Accelerated Convergence . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 8
4 Conclusion . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 12
5 Open Questions and Future Work . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 13
5.1 AdaSPS under Strong Growth Condition . . . . . . . . . . . . . . . . . . . . . . . . . . 13
A Algorithm Details . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 14
A.1 AdaSLS Algorithm . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 14
A.2 AdaSPS Algorithm . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 15
1
arXiv:2511.20207v2 [math.OC] 26 Nov 2025

1 Introduction
We consider the finite-sum smooth optimization problem:
min
x∈Rd
(
f (x) ≜ 1
n
n
X
i=1
fi(x)
)
, (1)
This formulation is widely used in machine learning problems, particularly in empirical risk min
imization, where the large number of data points n makes Stochastic Gradient Descent (SGD)
[Robbins and Monro, 1951] and its variants [Bottou et al., 2018] the preferred optimization methods
for training neural networks due to their computational efficiency.
The pioneering work of [Vaswani et al., 2019] introduced Armijo line-search to SGD for neural
network training, demonstrating exceptional performance in interpolation regimes. Concurrently,
Stochastic Polyak Stepsize (SPS) methods [Loizou et al., 2021, Berrada et al., 2020, Polyak, 1987]
gained rapid interest due to their ability to utilize local curvature information while requiring only
knowledge of individual optimal function values f ∗
i . However, both approaches face significant lim
itations: they fail to converge in non-interpolated settings and cannot automatically adapt across
different optimization regimes.
Recent advances by [Jiang and Stich, 2024] addressed these limitations by developing AdaSLS
(Adaptive Stochastic Line-Search) and AdaSPS (Adaptive Stochastic Polyak Stepsize), which achieve
unified convergence guarantees for convex functions in both interpolation and non-interpolation set
tings.
Nevertheless, most existing analyses assume that each component function fi satisfies specific
convexity conditions. In the case of strong convexity, there exists μ > 0 such that for all x, y ∈ Rd,
fi(y) ≥ fi(x) + ⟨∇fi(x), y − x⟩ + μ
2 ∥y − x∥2. (2)
For general convexity, the weaker condition holds for all x, y ∈ Rd:
fi(y) ≥ fi(x) + ⟨∇fi(x), y − x⟩. (3)
In nonconvex settings, where these convexity assumptions are removed, the L-Lipschitz smooth
ness of fi (as defined in Definition 1) implies weak convexity. This arises from the quadratic upper
bound property:
fi(y) ≤ fi(x) + ⟨∇fi(x), y − x⟩ + L
2 ∥y − x∥2, (4)
which can be equivalently expressed as the function fi(x)+ L
2 ∥x∥2 being convex, characterizing L-weak
convexity.
The convergence behavior of these adaptive methods in nonconvex optimization remains an open
theoretical question, a critical gap given the prevalence of nonconvex objectives in modern machine
learning.
2

1.1 Our Contributions
This paper provides a unified convergence analysis for AdaSLS and AdaSPS in nonconvex optimiza
tion. Generalizing the results of [Jiang and Stich, 2024], we first establish that both methods achieve
O(1/√T ) rate for general smooth nonconvex functions. Beyond this baseline guarantee, we prove
that an accelerated O(1/T ) rate is achievable under specific conditions: for both algorithms under
quasar-convexity and interpolation, and for AdaSLS under the strong growth condition for general
nonconvex functions. Our work thus extends the adaptive stepsize framework into the nonconvex
domain, offering robust convergence guarantees that match or exceed classical results while adapting
to the problem’s geometry.
The key differences between our work and [Jiang and Stich, 2024] can be seen in Table 1:
Stepsize Interpolation/Strong Growth Non-interpolation
str-cvx cvx non-cvx input str-cvx cvx non-cvx input
SPS/SPSmax [Loizou et al., 2021] O(log( 1
ε )) O( 1
ε ) O(1
ε ) [Gower et al., 2021] f ∗
it ε ≥ Ω(σ2
f ) ε ≥ Ω(σ2
f) — f∗
it
SLS [Vaswani et al., 2019] O(log( 1
ε )) O( 1
ε ) — None ε ≥ Ω(σ2
f ) ε ≥ Ω(σ2
f ) — None DecSPS [Orvieto et al., 2022] O( 1
ε2 ) O( 1
ε2 ) — l∗
it O( 1
ε2 ) O( 1
ε2 ) — l∗
it
AdaSLS [Jiang and Stich, 2024] O(log( 1
ε )) O( 1
ε ) O( 1
ε ) (this work) None O( 1
ε2 ) O( 1
ε2 ) O( 1
ε2 ) (this work) None AdaSPS [Jiang and Stich, 2024] O(log( 1
ε )) O( 1
ε ) O( 1
ε ) (this work) f ∗
it O( 1
ε2 ) O( 1
ε2 ) O( 1
ε2 ) (this work) l∗
it
Table 1: Summary of convergence behaviors of the considered adaptive stepsizes for smooth functions.
The error metrics for strongly convex, convex, and nonconvex problems are ∥xT −x∗∥2, f (x ̄T )−f (x∗),
and ∥∇f (x ̄T )∥2, respectively. The notation Ω(·) indicates the size of the neighborhood that they can
converge to.
2 Preliminaries
2.1 Algorithm Overview
We consider the standard stochastic gradient descent (SGD) framework for minimizing the finite-sum
objective:
xt+1 = xt − ηt∇fit (f xt),
where it is a randomly sampled index at iteration t, and ηt > 0 is the step-size. The performance of
SGD heavily depends on the choice of ηt. In this work, we analyze two adaptive step-size strategies
that automatically adjust ηt based on local curvature and historical information: AdaSLS and
AdaSPS.
AdaSLS [Jiang and Stich, 2024] combines a stochastic Armijo line-search with a global adaptive
step-size. At each iteration, it first performs a backtracking line-search to determine a local scaling
3

factor γt, then sets the effective step-size as:
ηt = min



γt
cl
q
Pt
s=0 γs∥∇fis (xs)∥2
, ηt−1



,
where cl > 0 is a tuning parameter.
AdaSPS [Jiang and Stich, 2024] leverages a Polyak-type step-size normalized by cumulative func
tion value gaps:
ηt = min



fit (xt) − l∗
it
cp∥∇fit (xt)∥2 · 1
q
Pt
s=0(fis (xs) − l∗
is )
, ηt−1



,
where l∗
it ≤ f ∗
it is a lower bound of the minimal function value for the mini-batch, and cp > 0 is a
constant.
Both methods are designed to be robust across interpolation and non-interpolation settings. Com
plete algorithmic descriptions are provided in Appendix A.
2.2 Assumptions and Definitions
Definition 1 (L-smoothness). Each fi is L-smooth, i.e., ∥∇fi(x) − ∇fi(y)∥ ≤ L∥x − y∥ for all
x, y ∈ Rd.
Definition 2 (Strong Growth Condition). There exists ρs > 0 such that
Ei∥∇fi(x)∥2 ≤ ρs∥∇f (x)∥2 ∀x ∈ Rd. (5)
Definition 3 (Quasar-convexity). Let x∗ be a global minimizer of f . We say that f is quasar-convex
with parameter θ if:
∇f (x)⊤(x − x∗) ≥ θ · [f (x) − f (x∗)] ∀x ∈ Rd. (6)
Definition 4 (Interpolation). The interpolation condition holds if σ2
f = 0, where
σ2
f ≜ f (x∗) − Eit
h
inxf fit (x)
i
. (7)
Definition 5 (Estimation Error). Denote the estimation error by
err2
f ≜ Eit [inxf fit (x) − l∗
it ]. (8)
3 Convergence Analysis
We begin by recalling key technical lemmas that form the foundation of our analysis.
Lemma 1 (Sequence bound [Jiang and Stich, 2024]). For any non-negative sequence {at}0≤t≤T , it
holds that: v
u u t
T
X
t=0
at ≤
T
X
t=0
at
q
Pt
i=0 ai
≤2
v u u t
T
X
t=0
at. (9)
4

Lemma 2 (Step-size bounds for AdaSLS [Jiang and Stich, 2024]). Suppose each fi is L-smooth, then
the step-size of AdaSLS satisfies:
min 1 − ρ
L , γmax
1
cl
q
Pt
s=0 γs∥∇fis (xs)∥2
≤ ηt ≤ γt
cl
q
Pt
s=0 γs∥∇fis (xs)∥2
∀t ≥ 0. (10)
Lemma 3 (Step-size bounds for AdaSPS [Jiang and Stich, 2024]). Suppose each fi is L-smooth, then
the step-size of AdaSPS satisfies:
1
2cpL
1
q
Pt
s=0 fis(xs) − l∗
is
≤ ηt ≤ fit(xt) − l∗
it
cp∥∇fit (xt)∥2
1
q
Pt
s=0 fis(xs) − l∗
is
∀t ≥ 0. (11)
3.1 General Nonconvex Convergence without Interpolation
Our first result establishes the convergence rate for general nonconvex smooth functions.
Theorem 1 (General nonconvex convergence for AdaSLS). Suppose each fi is L-smooth and the
iterates {xt} satisfy ∥xt − x∗∥ ≤ D for all t. Then, it holds that:
min
0≤t≤T −1 E∥∇f (xt)∥2 ≤


clLD2
2 min
n 1−ρ
L , γmax
o+ L
2cl


s
LD2/2 + σ2
f
ρ · √1T ∀T ≥ 1. (12)
Proof. By the L-smoothness of f , we have the descent inequality:
f (xt+1) − f (xt) ≤ ∇f (xt)⊤(xt+1 − xt) + L
2 ∥xt+1 − xt∥2
= −ηt∇f (xt)⊤∇fit(xt) + L
2 η2
t ∥∇fit (xt)∥2.
Taking expectation gives:
E f (xt+1) − f (xt)
ηt
≤ −E
h
Eit [∇f (xt)⊤∇fit (xt)]
i
+L
2 E ηt∥∇fit (xt)∥2
= −E∥∇f (xt)∥2 + L
2 E ηt∥∇fit (xt)∥2 .
5

Rearranging terms and summing from t = 0 to T − 1:
T −1
X
t=0
E∥∇f (xt)∥2 ≤
T −1
X
t=0
E f (xt) − f (xt+1)
ηt
+L
2
T −1
X
t=0
E ηt∥∇fit (xt)∥2
=E
"
f (x0)
η0
− f (xT )
ηT −1
+
T −2
X
t=0
1
ηt+1
−1
ηt
f (xt+1)
#
+L
2
T −1
X
t=0
E ηt∥∇fit (xt)∥2
≤E
"
f (x0)
η0
− f (xT )
ηT −1
+
T −2
X
t=0
1
ηt+1
−1
ηt
max
0≤t≤T −1 f (xt)
#
+L
2
T −1
X
t=0
E ηt∥∇fit (xt)∥2
= E f (x0)
η0
− f (xT )
ηT −1
+1
ηT −1
−1
η0
max
0≤t≤T −1 f (xt) + L
2
T −1
X
t=0
E ηt∥∇fit (xt)∥2
≤ E max0≤t≤T −1 f (xt) − f (xT )
ηT −1
| {z }
≜I
+L
2
T −1
X
t=0
E ηt∥∇fit (xt)∥2
| {z }
≜I I
. (13)
Let us denote the two terms as I and II. By L-smoothness of f :
f (xt) − f (x∗) ≤ L
2 ∥xt − x∗∥2 ≤ L
2 D2 ∀t. (14)
It then follows from Lemma 2 that:
I ≤ E LD2
2ηT −1
≤ clLD2
2 min
n 1−ρ
L , γmax
oE


v u u t
T −1
X
s=0
γs∥∇fis (xs)∥2

.
For the second part:
II ≤ L
2E


T −1
X
t=0
γt∥∇fit (xt)∥2
cl
q
Pt
s=0 γs∥∇fis (xs)∥2

 (by Lemma 2)
≤L
2cl
E


v u u t
T −1
X
t=0
γt∥∇fit (xt)∥2

 (by Lemma 1).
Hence, combining I and II:
T −1
X
t=0
E∥∇f (xt)∥2 ≤ I + II
≤


clLD2
2 min
n 1−ρ
L , γmax
o+ L
2cl

E


v u u t
T −1
X
t=0
γt∥∇fit (xt)∥2


≤


clLD2
2 min
n 1−ρ
L , γmax
o+ L
2cl


v u u
tE
"T −1
X
t=0
γt∥∇fit (xt)∥2
#
(Jensen’s inequality).
6

Let C1 = clLD2
2 min{ 1−ρ
L ,γmax} + L
2cl . By Armijo’s line search:
T −1
X
t=0
E∥∇f (xt)∥2 ≤ C1
v u u
tE
"T −1
X
t=0
fit (xt) − fit (xt+1)
ρ
#
≤ C1
v u u
tE
"T −1
X
t=0
fit (xt) − infx fit (x)
ρ
#
= √C1ρ
v u u t
T −1
X
t=0
E
h
fit(xt) − f (x∗) + f (x∗) − inxf fit(x)
i
= √C1ρ
v u u t
T −1
X
t=0
E [f (xt) − f (x∗)] + T f (x∗) − Eit
h
inxf fit (x)
i
≤ √C1ρ
v u u t
T −1
X
t=0
LD2
2 + T σ2
f.
Therefore, dividing both sides by T :
min
0≤t≤T −1 E∥∇f (xt)∥2 ≤ 1
T
T −1
X
t=0
E∥∇f (xt)∥2 ≤ C1
s
LD2/2 + σ2
f
ρ · √1T .
Theorem 1 shows that AdaSLS achieves the O(1/ε2) convergence rate for general nonconvex L
smooth functions, matching the classical result for SGD with diminishing step-size. We now establish
a similar guarantee for AdaSPS.
Theorem 2 (General nonconvex convergence for AdaSPS). Suppose each fi is L-smooth and the
iterates {xt} satisfy ∥xt − x∗∥ ≤ D for all t. Then, it holds that:
min
0≤t≤T −1 E∥∇f (xt)∥2 ≤ cpL2D2 + L
2cp
q
LD2/2 + σ2
f + errf 2 · √1T ∀T ≥ 1. (15)
Proof. Using the descent inequality derived from L-smoothness and by the lower bound on the step
size of AdaSPS (Lemma 3):
I ≤ E LD2
2ηT −1
≤ cpL2D2E


v u u t
T −1
X
s=0
(fis (xs) − l∗
is )


7

For the second part, by the upper bound on the step size:
II ≤ L
2E


T −1
X
t=0
fit (xt) − l∗
it
cp
q
Pt
s=0(fis (xs) − l∗
is )


≤L
2cp
E


v u u t
T −1
X
t=0
(fit (xt) − l∗
it )

 (by Lemma 1)
Combining I and II:
T −1
X
t=0
E∥∇f (xt)∥2 ≤ I + II
≤ cpL2D2 + L
2cp
E


v u u t
T −1
X
t=0
(fit (xt) − l∗
it )


≤ cpL2D2 + L
2cp
v u u
tE
"T −1
X
t=0
(fit (xt) − l∗
it )
#
(Jensen’s inequality)
Let C2 = cpL2D2 + L
2cp , we have:
T −1
X
t=0
E∥∇f (xt)∥2 ≤ C2
v u u t
T −1
X
t=0
E
h
fit(xt) − f (x∗) + f (x∗) − inxf fit(x) + inxf fit(x) − l∗
it
i
= C2
v u u t
T −1
X
t=0
E [f (xt) − f (x∗)] + T f (x∗) − Eit
h
inxf fit (x)
i
+ T Eit
h
inxf fit (x) − l∗
it
i
≤ C2
v u u t
T −1
X
t=0
LD2
2 + T σ2
f + err2
f
Therefore:
min
0≤t≤T −1 E∥∇f (xt)∥2 ≤ 1
T
T −1
X
t=0
E∥∇f (xt)∥2 ≤ C2
q
LD2/2 + σ2
f + err2
f · √1T
3.2 Accelerated Convergence
Although the O(1/√T ) rate holds for general nonconvex optimization, faster convergence can be
established under additional structural assumptions. We now present accelerated rates under quasar
convexity and interpolation conditions.
8

Theorem 3 (Quasar-convex + interpolation for AdaSLS). Suppose that (i) each fi is L-smooth and
quasar-convex with parameter θ ∈ (0, 1]; (ii) bounded iterates ∥xt − x∗∥ ≤ D; (iii) σ2
f = 0. Then, with
cl = θρpγ0∥∇fi0 (x0)∥2 −1
, we have:
min
0≤t≤T −1 E∥∇f (xt)∥2 ≤


clLD2
2 min
n 1−ρ
L , γmax
o+ L
2cl

 · clD2
θ · min
n 1−ρ
L , γmax
o· 1
T ∀T ≥ 1. (16)
Proof. Following the proof of Theorem 1, we have:
T −1
X
t=0
E∥∇f (xt)∥2 ≤


clLD2
2 min
n 1−ρ
L , γmax
o+ L
2cl

E


v u u t
T −1
X
t=0
γt∥∇fit (xt)∥2

 . (17)
Now we establish a tighter estimate under quasar-convexity and interpolation. By Lemma 1:
v u u t
T −1
X
t=0
γt∥∇fit (xt)∥2 ≤
T −1
X
t=0
γt∥∇fit (xt)∥2
q
Pt
s=0 γs∥∇fis (xs)∥2
≤ cl
min
n 1−ρ
L , γmax
o
T −1
X
t=0
γt∥∇fit(xt)∥2 · ηt (by Lemma 2)
≤ cl
ρ · min
n 1−ρ
L , γmax
o
T −1
X
t=0
ηt[fit (xt) − fit (xt+1)] (by Armijo)
≤ cl
ρ · min
n 1−ρ
L , γmax
o
T −1
X
t=0
ηt[fit (xt) − inxf fit (x)]
= cl
ρ · min
n 1−ρ
L , γmax
o
T −1
X
t=0
ηt[fit(xt) − fit(x∗)] (by interpolation).
On the other hand:
∥xt+1 − x∗∥2 = ∥xt − x∗∥2 + ∥xt+1 − xt∥2 + 2(xt − x∗)⊤(xt+1 − xt)
= ∥xt − x∗∥2 + ∥ηt∇fit (xt)∥2 − 2ηt∇fit (xt)⊤(xt − x∗)
≤ ∥xt − x∗∥2 + ηt
γt∥∇fit (xt)∥2
cl
q
Pt
s=0 γs∥∇fis (xs)∥2
− 2ηt∇fit(xt)⊤(xt − x∗) (Lemma 2)
≤ ∥xt − x∗∥2 + ηt
fit (xt) − fit (xt+1)
clρ
q
Pt
s=0 γs∥∇fis (xs)∥2
− 2ηt∇fit(xt)⊤(xt − x∗) (Armijo).
By quasar-convexity:

2θ − fit (xt) − fit (xt+1)
clρ
q
Pt
s=0 γs∥∇fis (xs)∥2

 ηt[fit (xt) − fit (x∗)] ≤ θηt[fit (xt) − fit (x∗)]
≤ ∥xt − x∗∥2 − ∥xt+1 − x∗∥2.
9

Telescoping yields:
v u u t
T −1
X
t=0
γt∥∇fit (xt)∥2 ≤ clD2 θ · min
n 1−ρ
L , γmax
o . (18)
Combining with the earlier inequality:
min
0≤t≤T −1 E∥∇f (xt)∥2 ≤ 1
T
T −1
X
t=0
E∥∇f (xt)∥2
≤


clLD2
2 min
n 1−ρ
L , γmax
o+ L
2cl

 · clD2
θ · min
n 1−ρ
L , γmax
o· 1
T.
The quasar-convexity and interpolation conditions also enable accelerated convergence for AdaSPS,
as shown in the following result.
Theorem 4 (Quasar-convex + interpolation for AdaSPS). Suppose that (i) each fi is L-smooth and
quasar-convex with parameter θ ∈ (0, 1]; (ii) bounded iterates ∥xt − x∗∥ ≤ D; (iii) σ2
f = err2
f = 0.
Then, with cp = θ(fi0(x0) − l∗
i0 ) −1, we have:
min
0≤t≤T −1 E∥∇f (xt)∥2 ≤ cpL2D2 + L
2cp
· 2cpLD2
θ ·1
T ∀T ≥ 1. (19)
Proof. From Theorem 2, we have:
T −1
X
t=0
E∥∇f (xt)∥2 ≤ cpL2D2 + L
2cp
E


v u u t
T −1
X
s=0
(fis (xs) − l∗
is )

 . (20)
We now bound the cumulative function gaps. The iterate update gives:
∥xt+1 − x∗∥2 = ∥xt − x∗∥2 + ∥xt+1 − xt∥2 + 2(xt − x∗)⊤(xt+1 − xt)
= ∥xt − x∗∥2 + ∥ηt∇fit (xt)∥2 − 2ηt∇fit (xt)⊤(xt − x∗)
≤ ∥xt − x∗∥2 + ηt
fit(xt) − l∗
it
cp
q
Pt
s=0 fis(xs) − l∗
is
− 2ηt∇fit (xt)⊤(xt − x∗)
= ∥xt − x∗∥2 + ηt
fit(xt) − fit (x∗)
cp
q
Pt
s=0 fis(xs) − l∗
is
− 2ηt∇fit (xt)⊤(xt − x∗).
By quasar-convexity:
ηt[fit (xt) − fit (x∗)] ≤ 1
θ ∥xt − x∗∥2 − ∥xt+1 − x∗∥2 . (21)
10

Therefore:
v u u t
T −1
X
s=0
(fis (xs) − l∗
is ) ≤ 2cpLD2
θ.
Combining with the initial inequality:
min
0≤t≤T −1 E∥∇f (xt)∥2 ≤ 1
T
T −1
X
t=0
E∥∇f (xt)∥2
≤ cpL2D2 + L
2cp
· 2cpLD2
θ ·1
T.
Beyond interpolation settings, another important scenario that permits accelerated convergence
is the strong growth condition, which bounds the relationship between stochastic and full gradients.
Theorem 5 (Strong growth condition for AdaSLS). In addition to the assumptions of Theorem 1, if
we further assume that (i) strong growth holds with constant ρs; (ii) bounded iterates ∥xt − x∗∥ ≤ D.
Then AdaSLS achieves:
min
0≤t≤T −1 E∥∇f (xt)∥2 ≤ γmaxρs ·


cLD2
2 min
n 1−ρ
L , γmax
o+ L
2c


2
·1
T ∀T ≥ 1. (22)
Proof. Note that {γt}t≥0 is a sequence satisfying γt ≤ γmax. We begin with the inequality:
T −1
X
t=0
γt∥∇fit (xt)∥2 ≤ γmax
T −1
X
t=0
∥∇fit (xt)∥2
Using the strong growth condition:
Eit ∥∇fit (xt)∥2 ≤ ρs∥∇f (xt)∥2 ∀x ∈ Rd
Taking full expectation gives:
E∥∇fit (xt)∥2 = E[Eit ∥∇fit (xt)∥2] ≤ ρsE∥∇f (xt)∥2
Summing over t = 0 to T − 1:
E
"T −1
X
t=0
∥∇fit (xt)∥2
#
=
T −1
X
t=0
E∥∇fit (xt)∥2
≤ ρs
T −1
X
t=0
E∥∇f (xt)∥2 (23)
11

By Theorem 1, we have:
T −1
X
t=0
E∥∇f (xt)∥2 ≤ C1E


v u u t
T −1
X
t=0
γt∥∇fit (xt)∥2


≤ C1
v u u
tE
"T −1
X
t=0
γt∥∇fit (xt)∥2
#
(by Jensen’s Inequality)
≤ C1
√γmax ·
v u u
tE
"T −1
X
t=0
∥∇fit (xt)∥2
#
(24)
where C1 = clLD2
2 min{ 1−ρ
L ,γmax} + L
2cl .
Let S1 = PT −1
t=0 E∥∇f (xt)∥2 and S2 = E
h
PT −1
t=0 ∥∇fit (xt)∥2i
.
From (23) and (24), we have:
S2 ≤ ρsS1,
S1 ≤ C1
√γmax · pS2.
Combining these:
S1 ≤ C2
1 γmaxρs
Therefore:
min
0≤t≤T −1 E∥∇f (xt)∥2 ≤ 1
T
T −1
X
t=0
E∥∇f (xt)∥2
≤ C12γmaxρs
T.
4 Conclusion
We have established comprehensive convergence guarantees for AdaSLS and AdaSPS in nonconvex
optimization settings. Our analysis demonstrates that both adaptive methods achieve O(1/√T )
convergence for general nonconvex smooth functions, matching the classical SGD rate. Under more
favorable conditions-quasar-convexity with interpolation and the strong growth condition—we prove
accelerated O(1/T ) rates for AdaSLS.
These results bridge an important theoretical gap, extending the adaptive step-size framework
from convex to nonconvex optimization while maintaining strong convergence guarantees.
12

5 Open Questions and Future Work
While this work provides a comprehensive analysis of adaptive SGD methods in nonconvex settings,
several important questions remain open:
5.1 AdaSPS under Strong Growth Condition
A notable gap in our analysis is the convergence rate of AdaSPS under the strong growth condition.
Although we established O(1/T ) convergence for AdaSLS in Theorem 5, extending this result to
AdaSPS presents significant technical challenges. The main difficulty arises from the different step
size structures:
• AdaSLS uses gradient norms in the denominator: ηt ∝ γt
√
P γs∥∇fis (xs)∥2
• AdaSPS uses function value gaps: ηt ∝ fit (xt)−l∗
it
√
P(fis (xs)−l∗
is )2
Under the strong growth condition, the gradient norm structure of AdaSLS allows a direct con
nection to ∥∇f (xt)∥2, enabling the accelerated rate. For AdaSPS, establishing a similar connection
between function value gaps and gradient norms under strong growth remains an open problem.
References
[Jiang and Stich, 2024] Jiang, X. and Stich, S. U. (2024). Adaptive SGD with Polyak stepsize and
line-search: Robust convergence and variance reduction. Advances in Neural Information Pro
cessing Systems, 36.
[Orvieto et al., 2022] Orvieto, A., Lacoste-Julien, S., and Loizou, N. (2022). Dynamics of SGD with
stochastic Polyak stepsizes: Truly adaptive variants and convergence to exact solution. Advances
in Neural Information Processing Systems, 35:26943–26954.
[Schmidt and Roux, 2013] Schmidt, M. and Roux, N. L. (2013). Fast convergence of stochastic gra
dient descent under a strong growth condition. arXiv preprint arXiv:1308.6370.
[Tseng, 1998] Tseng, P. (1998). An incremental gradient (-projection) method with momentum term
and adaptive stepsize rule. SIAM Journal on Optimization, 8(2):506–531.
[Vaswani et al., 2022] Vaswani, S., Dubois-Taine, B., and Babanezhad, R. (2022). Towards noise
adaptive, problem-adaptive (accelerated) stochastic gradient descent. In International Confer
ence on Machine Learning, pages 22015–22059.
[Loizou et al., 2021] Loizou, N., Vaswani, S., Hadj Laradji, I., and Lacoste-Julien, S. (2021). Stochas
tic polyak step-size for SGD: an adaptive learning rate for fast convergence. In The 24th Inter
national Conference on Artificial Intelligence and Statistics, pages 1306–1314.
13

[Berrada et al., 2020] Berrada, L., Zisserman, A., and Kumar, M. P. (2020). Training neural net
works for and by interpolation. In Proceedings of the 37th International Conference on Machine
Learning.
[Polyak, 1987] Polyak, B. T. (1987). Introduction to optimization. Optimization Software, Publica
tions Division, New York.
[Vaswani et al., 2019] Vaswani, S., Mishkin, A., Laradji, I., Schmidt, M., Gidel, G., and Lacoste
Julien, S. (2019). Painless stochastic gradient: Interpolation, line-search, and convergence rates.
Advances in Neural Information Processing Systems, 32.
[Ward et al., 2020] Ward, R., Wu, X., and Bottou, L. (2020). Adagrad stepsizes: Sharp convergence
over nonconvex landscapes. Journal of Machine Learning Research, 21(219):1–30.
[Gower et al., 2021] Gower, R. M., Sebbouh, O., and Loizou, N. (2021). SGD for Structured Non
convex Functions: Learning Rates, Minibatching and Interpolation. Proceedings of the 24th
International Conference on Artificial Intelligence and Statistics (AISTATS), 130:1-15.
[Robbins and Monro, 1951] Robbins, H. and Monro, S. (1951). A Stochastic Approximation Method.
The Annals of Mathematical Statistics, 22(3):400–407.
[Bottou et al., 2018] Bottou, L., Curtis, F. E., and Nocedal, J. (2018). Optimization Methods for
Large-Scale Machine Learning. SIAM Review, 60(2):223–311.
A Algorithm Details
A.1 AdaSLS Algorithm
Algorithm 1 AdaSLS
Require: x0 ∈ Rd, T ∈ N+, ct > 0
1: set η−1 = +∞
2: for t = 0 to T − 1 do
3: uniformly sample it ⊆ [n]
4: obtain γt via backtracking line-search (Algorithm 2)
5: set ηt = min



γt
cl
q
Pt
s=0 γs∥∇fis (xs)∥2
, ηt−1



6: xt+1 = xt − ηt∇fit (xt)
7: end for
8: return x ̄T = 1
T
PT −1
t=0 xt
14

Algorithm 2 Backtracking line-search for AdaSLS
Require: β ∈ [ 1
2 , 1), ρ ∈ (0, 1), γmax > 0
1: γ = γmax
2: while fit (xt − γ∇fit (xt)) > fit (xt) − ργ∥∇fit (xt)∥2 do
3: γ = βγ
4: end while
5: return γt = γ
A.2 AdaSPS Algorithm
Algorithm 3 AdaSPS
Require: x0 ∈ Rd, T ∈ N+, cp > 0
1: set η−1 = +∞
2: for t = 0 to T − 1 do
3: uniformly sample it ⊆ [n]
4: provide a lower bound l∗
it ≤ f ∗
it
5: set ηt = min



fit (xt) − l∗
it
cp∥∇fit (xt)∥2
q
Pt
s=0(fis (xs) − l∗
is )2
, ηt−1



6: xt+1 = xt − ηt∇fit (xt)
7: end for
8: return x ̄T = 1
T
PT −1
t=0 xt
15

---

## Processing Information

- **Processing Library:** Zotero PDFWorker
- **Processing Date:** 2026-02-10T18:13:47.107Z
- **Text Length:** 22937 characters
- **Success:** Text extraction completed
- **PDF Library Used:** Zotero PDFWorker
- **Pages Processed:** 15 of 15
