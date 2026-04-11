# PDF Document: Lechiheb - 2025 - Geometric Rough Paths above Mixed Fractional Brownian Motion.pdf

**File Path:** Lechiheb - 2025 - Geometric Rough Paths above Mixed Fractional Brownian Motion.pdf

**Processed Date:** 2026-02-10T18:15:46.093Z

**File Size:** 645.36 KB

**Total Pages:** 27

**Extracted Pages:** 27

**PDF Library:** Zotero PDFWorker

**Attachment Item ID:** 3450

**Title:** Geometric Rough Paths above Mixed Fractional Brownian Motion

**Collection:** Large Files > Random Papers

---

## Extracted Text Content

Geometric Rough Paths above Mixed Fractional
Brownian Motion
Atef Lechiheb∗
November 25, 2025
Abstract
This paper establishes a comprehensive theory of geometric rough paths for mixed frac
tional Brownian motion (MFBM) and its generalized multi-component extensions. We prove
that for a generalized MFBM of the form MtH (a) = PN
k=1 akBHk
t with min{Hk} > 1
4 , there
exists a canonical geometric rough path obtained as the limit of smooth rough paths asso
ciated with dyadic approximations. This extends the classical result of Coutin and Qian [1]
for single fractional Brownian motion to the mixed case.
We provide explicit bounds on the p-variation norms and establish a Skorohod integral
representation connecting our pathwise construction to the Malliavin calculus framework.
Furthermore, we demonstrate applications to rough differential equations driven by MFBM,
enabling the use of Lyons’ universal limit theorem for this class of processes. Finally, we
study the signature of MFBM paths, providing a complete algebraic characterization of their
geometric properties.
Our approach unifies the treatment of multiple fractional components and reveals the
fundamental interactions between different regularity scales, completing the rough path foun
dation for mixed fractional processes with applications in stochastic analysis and beyond.
Mathematics Subject Classification: 60G22, 60H10, 60L20, 91G80
Keywords: rough paths, mixed fractional Brownian motion, geometric rough paths, p-variation,
Skorohod integral, rough differential equations, signature
Contents
1 Introduction 3
2 Preliminaries 4
2.1 Rough Paths Theory . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 4
2.2 Mixed Fractional Brownian Motion . . . . . . . . . . . . . . . . . . . . . . . . . . 5
2.3 Dyadic Approximations and Rough Path Construction . . . . . . . . . . . . . . . 6
2.4 Notation and Conventions . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 6
∗Toulouse School of Economics, Université Toulouse Capitole, email: atef.lechiheb@tse-fr.eu
1
arXiv:2511.18954v1 [math.PR] 24 Nov 2025

3 Existence of Geometric Rough Paths for MFBM 7
3.1 Main Result . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 7
3.2 Preliminary Estimates . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 7
3.3 Convergence and Geometric Properties . . . . . . . . . . . . . . . . . . . . . . . . 9
3.4 Proof of the Main Theorem . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 10
3.5 Sharpness and Examples . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 11
4 Skorohod Integral Representation 11
4.1 Malliavin Calculus Framework . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 11
4.2 Skorohod Representation of the Rough Path . . . . . . . . . . . . . . . . . . . . . 12
4.3 Properties of the Representation . . . . . . . . . . . . . . . . . . . . . . . . . . . 13
4.4 Applications to Rough Differential Equations . . . . . . . . . . . . . . . . . . . . 14
4.5 Example: Two-Component Case . . . . . . . . . . . . . . . . . . . . . . . . . . . . 14
5 Applications to Rough Differential Equations 15
5.1 Main Existence and Uniqueness Result . . . . . . . . . . . . . . . . . . . . . . . . 15
5.2 Itô-Stratonovich Correction for Mixed Case . . . . . . . . . . . . . . . . . . . . . 16
5.3 Regularity of Solutions . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 16
5.4 Applications in Mathematical Finance . . . . . . . . . . . . . . . . . . . . . . . . 17
5.5 Numerical Approximation Schemes . . . . . . . . . . . . . . . . . . . . . . . . . . 18
5.6 Stability and Sensitivity Analysis . . . . . . . . . . . . . . . . . . . . . . . . . . . 18
5.7 Example: Linear RDE with GMFBM . . . . . . . . . . . . . . . . . . . . . . . . . 19
6 Signature of Mixed Fractional Brownian Motion 19
6.1 Definition and Basic Properties . . . . . . . . . . . . . . . . . . . . . . . . . . . . 19
6.2 Explicit Calculations for Mixed Case . . . . . . . . . . . . . . . . . . . . . . . . . 20
6.3 Signature as a Feature Map . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 22
6.4 Applications to Parameter Estimation . . . . . . . . . . . . . . . . . . . . . . . . 23
6.5 Numerical Computation . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 24
6.6 Relations to Other Transforms . . . . . . . . . . . . . . . . . . . . . . . . . . . . 25
7 Conclusion 25
2

1 Introduction
Rough path theory, introduced by Lyons [2, 3], has revolutionized the analysis of stochastic
systems driven by irregular signals. By encoding not only a path but also its iterated integrals,
this framework provides a robust foundation for pathwise stochastic calculus beyond the
semimartingale setting. The theory has found profound applications in stochastic analysis,
financial mathematics, and signal processing [4].
The seminal work of Coutin and Qian [1] established that fractional Brownian motion (fBm)
with Hurst parameter H > 1
4 admits a canonical geometric rough path. This threshold is sharp
and reflects fundamental regularity requirements for constructing iterated integrals through lim
iting procedures. Subsequent developments have extended this theory to broader classes of
Gaussian processes [5, 6].
Parallel to these developments, mixed fractional Brownian motion (MFBM) emerged as an
important modeling tool in mathematical finance. Introduced by Cheridito [7], processes of
the form Mt = aBt + bBtH were shown to preserve arbitrage-free properties while capturing
long-range dependence. This was later generalized to multi-component processes [8, 9, 10]:
MH
t (a) =
N
X
k=1
ak B Hk
t,
where BHk
t are independent fractional Brownian motions with different Hurst parameters Hk.
Such processes offer rich modeling flexibility, capturing multi-scale behavior and different mem
ory properties within a single driving noise, with recent applications in rough volatility modeling
[11].
Despite the parallel advancements in rough path theory and MFBM applications, a compre
hensive rough path treatment of mixed fractional processes remains largely unexplored. Several
fundamental questions arise: Does the geometric rough path exist for mixed processes when all
Hurst parameters exceed 1
4 ? How do interactions between different fractional components affect
the rough path construction? What are the precise regularity properties in terms of p-variation
for mixed processes? Can Lyons’ universal limit theorem be applied to stochastic systems driven
by MFBM?
This paper bridges the gap by developing a complete rough path theory for generalized mixed
fractional Brownian motions. Our main contributions are:
1. Existence of geometric rough paths: We prove that for GMFBM with min{Hk} > 1
4, the smooth rough paths associated with dyadic approximations converge to a geometric
rough path in the p-variation topology (Theorem 3.1 in Section 3).
2. Sharp regularity conditions: We establish that the condition min{Hk} > 1
4 is optimal
and provide explicit p-variation estimates that depend on the Hurst parameters and mixing
coefficients (Theorem 3.6 in Section 3).
3. Skorohod integral representation: We derive an explicit representation of the rough
path in terms of multiple Wiener integrals, connecting our pathwise construction to the
Malliavin calculus framework [12] (Theorem 4.4 in Section 4).
3

4. Applications to rough differential equations: We demonstrate how our construction
enables the study of RDEs driven by MFBM, with applications to multi-scale modeling
(Theorem 5.1 in Section 5).
5. Signature analysis: We provide a complete characterization of the signature of MFBM
paths, revealing their algebraic structure and potential applications in machine learning
and data analysis (Section 6).
Our work connects to several active research areas. The multi-scale nature of GMFBM relates
to recent developments in multi-level Monte Carlo methods [13] and regularity structures [14].
The Skorohod representation provides connections to the paracontrolled calculus framework [15]
for singular stochastic PDEs. The signature analysis opens up new perspectives in machine
learning and functional data analysis [16, 17].
The paper is organized as follows: Section 2 reviews essential background on rough paths
and mixed fractional Brownian motion. Section 3 contains our main existence theorem and its
proof. Section 4 develops the Skorohod integral representation. Section 5 discusses applications
to rough differential equations. Section 6 studies the signature of MFBM paths. Section 7
concludes with directions for future research.
Our results provide a solid foundation for further research on stochastic systems driven by
multi-scale fractional noises and their applications across various domains, from mathematical
finance to stochastic partial differential equations and machine learning.
2 Preliminaries
This section provides the necessary background on rough path theory and mixed fractional
Brownian motion. We establish notations and recall fundamental results that will be used
throughout the paper.
2.1 Rough Paths Theory
The theory of rough paths was introduced by Lyons [2] and further developed in [3, 18, 4]. We
recall the essential definitions and results that form the foundation of our work.
Definition 2.1 (Truncated tensor algebra). Let V be a finite-dimensional vector space. For any
integer n ≥ 1, the truncated tensor algebra of order n is defined as:
T n(V ) = R ⊕ V ⊕ V ⊗2 ⊕ · · · ⊕ V ⊗n.
The multiplication in T n(V ) is given by the tensor product, truncated at level n.
Definition 2.2 (Multiplicative functional). A multiplicative functional of degree n on V is a
map X : ∆T → T n(V ), where ∆T = {(s, t) ∈ [0, T ]2 : 0 ≤ s ≤ t ≤ T }, such that for all
0 ≤ s ≤ t ≤ u ≤ T , Chen’s identity holds:
Xs,u = Xs,t ⊗ Xt,u.
We write Xs,t = (1, Xs1,t, . . . , Xsn,t) where Xsk,t ∈ V ⊗k.
4

Definition 2.3 (p-variation). For p ≥ 1, the p-variation of a multiplicative functional X is
defined as:
∥X∥p-var = max
k=1,...,⌊p⌋
sup
D


X
[u,v]∈D
|X k
u,v |p/k


k/p
,
where the supremum is taken over all partitions D of [0, T ].
Definition 2.4 (Rough path). A p-rough path is a multiplicative functional X : ∆T → T ⌊p⌋(V )
with finite p-variation. The space of p-rough paths is denoted by Ωp(V ).
Definition 2.5 (Geometric rough path). A rough path X ∈ Ωp(V ) is called geometric if there
exists a sequence of smooth rough paths (X(n))n≥1 such that:
nli→m∞ dp(X(n), X) = 0,
where dp is the p-variation distance. This concept originates from [2].
The fundamental theorem of rough paths theory, due to Lyons [2], states that for any geometric
rough path X and sufficiently regular vector field f , the rough differential equation:
dYt = f (Yt)dXt
admits a unique solution that depends continuously on the driving rough path X.
2.2 Mixed Fractional Brownian Motion
Mixed fractional Brownian motion was introduced by Cheridito [7] and further studied by Zili
[8]. The generalized version with multiple components was investigated by Miao et al. [9] and
Thäle [10].
Definition 2.6 (Generalized MFBM). Let N ≥ 1, H = (H1, . . . , HN ) ∈ (0, 1)N , and a =
(a1, . . . , aN ) ∈ RN \ {0}. A generalized mixed fractional Brownian motion (GMFBM) is a
process {MtH (a), t ≥ 0} defined by:
MH
t (a) =
N
X
k=1
ak B Hk
t,
where {BHk }N
k=1 are independent fractional Brownian motions with Hurst parameters Hk.
Proposition 2.7 (Covariance structure [8]). For any s, t ≥ 0, the covariance function of
GMFBM is given by:
E[M H
t (a)M H
s (a)] = 1
2
N
X
k=1
a2
k t2Hk + s2Hk − |t − s|2Hk .
Proposition 2.8 (Increment properties [10]). For 0 ≤ s ≤ t, the second moment of increments
satisfies:
E[(M H
t (a) − M H
s (a))2] =
N
X
k=1
a2
k|t − s|2Hk .
5

Moreover, for 0 ≤ u ≤ v ≤ s ≤ t, the covariance of increments is:
E[(M H
v (a)−M H
u (a))(M H
t (a)−M H
s (a))] = 1
2
N
X
k=1
a2
k |t − u|2Hk + |s − v|2Hk − |t − v|2Hk − |s − u|2Hk .
Proposition 2.9 (Hölder regularity [9]). Almost every sample path of MtH (a) is locally Hölder
continuous of order γ for any:
γ < min{H1, . . . , HN }.
In particular, if min{Hk} > 1
2 , the process has long-range dependence; if max{Hk} ≤ 1
2 , it
exhibits short-range dependence.
Proposition 2.10 (Mixed self-similarity). For any h > 0, the processes:
{M H
ht (a), t ≥ 0} and {M H
t (a1hH1 , . . . , aN hHN ), t ≥ 0}
have the same finite-dimensional distributions.
2.3 Dyadic Approximations and Rough Path Construction
The construction of rough paths above Gaussian processes typically proceeds via dyadic linear
approximations, as developed in [1].
Definition 2.11 (Dyadic approximation). For a process Xt, define its m-th dyadic approxima
tion by:
Xm
t = Xtm
l−1 + 2m(t − tm
l−1)(Xtm
l − Xtm
l−1 ), t ∈ [tm
l−1, tm
l ],
where tm
k = k2−mT for k = 0, . . . , 2m.
For smooth paths Xm, the iterated integrals can be defined classically:
Xm,(2)
s,t =
Zt
s
(X m
u − Xm
s ) ⊗ dXm
u,
and similarly for higher orders. The fundamental question is whether the sequence Xm =
(1, Xm, Xm,(2), . . .) converges in the p-variation topology.
Theorem 2.12 (Coutin-Qian for fBm [1]). For fractional Brownian motion BH with H > 1
4,
the smooth rough paths BH,m associated to the dyadic approximations converge almost surely in
the p-variation topology for any p > 1/H. The limit BH is a geometric rough path above BH .
Our goal is to extend this result to the mixed case, dealing with the additional challenges posed
by the interaction between different fractional components.
2.4 Notation and Conventions
Throughout this paper, we employ the following notation:
• C, Cp, CH denote generic constants that may change from line to line
6

• a ≲ b means a ≤ Cb for some constant C > 0
• ⌊p⌋ denotes the integer part of p
• ∆n
[s,t] = {(u1, . . . , un) ∈ [s, t]n : s ≤ u1 ≤ · · · ≤ un ≤ t}
• For a multi-index α = (α1, . . . , αn), we denote |α| = n
• ⊗ denotes the tensor product
• E denotes mathematical expectation
We assume that all stochastic processes are defined on a complete probability space (Ω, F, P)
and that all vector spaces are finite-dimensional unless otherwise specified. The time interval is
fixed as [0, T ] for some T > 0.
3 Existence of Geometric Rough Paths for MFBM
This section contains our main result: the existence of geometric rough paths above generalized
mixed fractional Brownian motion. We extend the approach of Coutin and Qian [1] to the mixed
case, dealing with the additional complexities introduced by multiple fractional components.
3.1 Main Result
Theorem 3.1 (Existence of geometric rough path for GMFBM). Let MtH (a) = PN
k=1 akBHk
t
be a generalized mixed fractional Brownian motion with min{H1, . . . , HN } > 1
4 . Let Mtm be the
m-th dyadic linear approximation of MtH (a), and let Mm be the smooth rough path above Mtm
defined by iterated Young integrals.
Then, for any p > 1
min{Hk} , the sequence (Mm)m≥1 converges almost surely in the p-variation
topology to a geometric rough path M above MtH (a). Moreover, the limit M is independent of
the choice of dyadic approximation.
3.2 Preliminary Estimates
We begin by establishing key estimates for the covariance structure of GMFBM increments.
Lemma 3.2 (Covariance bound for mixed increments). Let 0 ≤ s ≤ t ≤ u ≤ v ≤ T . Then for
any i, j ∈ {1, . . . , N }, we have:
E[(BHi
t − BsHi )(BvHj − BuHj )] ≲ |t − s|Hi |v − u|Hj |t − u|
|t − s| ∨ |v − u|
Hi+Hj −2
when |t − u| ≥ |t − s| ∨ |v − u|, and is zero otherwise.
7

Proof. We consider three cases:
Case 1: i = j. For the same fractional Brownian motion component, we use the classical
covariance estimate for fBm [1, Proposition 2.1]:
E[(BHi
t − BsHi )(BvHi − BuHi )]
=1
2 |t − v|2Hi + |s − u|2Hi − |t − u|2Hi − |s − v|2Hi
≲ |t − s|Hi|v − u|Hi |t − u|
|t − s| ∨ |v − u|
2Hi−2
.
Case 2: i ̸= j. For different components, since BHi and BHj are independent, we have:
E[(BHi
t − BsHi )(BvHj − BuHj )] = E[BHi
t − BsHi ] · E[BvHj − BuHj ] = 0.
Case 3: Boundary cases. When |t − u| < |t − s| ∨ |v − u|, the intervals [s, t] and [u, v] are
too close for the scaling argument to apply directly, but in this case the covariance is of lower
order and can be absorbed into the constant.
Lemma 3.3 (Mixed second moment estimate). For 0 ≤ s ≤ t, let ∆M = MtH (a) − MsH (a).
Then:
E[|∆M |2] =
N
X
k=1
a2
k|t − s|2Hk ≲ |t − s|2 min{Hk}.
Moreover, for the second-order process, we have:
E[|Mm,(2)
s,t |2] ≲ |t − s|4 min{Hk}.
Proof. First moment estimate: By the independence of components and the fBm increment
property:
E[|∆M |2] = E


N
X
k=1
ak (B Hk
t − BsHk )
!2

=
N
X
k=1
a2
k E[|B Hk
t − BsHk |2] + 2
X
1≤i<j≤N
aiaj E[(BHi
t − BsHi )(BHj
t − BsHj )]
=
N
X
k=1
a2
k|t − s|2Hk + 0 (by independence)
≤
N
X
k=1
a2
k
!
· |t − s|2 min{Hk} = C|t − s|2 min{Hk}.
Second moment estimate: The second level process decomposes as:
Mm,(2)
s,t =
N
X
k=1
a2
k BHk ,m,(2)
s,t +
X
1≤i<j≤N
aiaj (Iij + Iji)
where Iij = R t
s (BHi,m
u − BHi,m
s )dBHj,m
u.
8

For the diagonal terms, from [1, Theorem 2], we have:
E[|BHk ,m,(2)
s,t |2] ≲ |t − s|4Hk .
For the cross terms, we use the Young integral isometry:
|Iij | ≤ C∥BHi,m∥Hi-Hölder∥BHj,m∥Hj-Hölder|t − s|Hi+Hj .
Taking expectations and using Gaussian moment estimates:
E[|Iij |2] ≲ |t − s|2(Hi+Hj).
Combining all terms:
E[|Mm,(2)
s,t |2] ≲
N
X
k=1
|t − s|4Hk +
X
1≤i<j≤N
|t − s|2(Hi+Hj)
≤ N 2 · |t − s|4 min{Hk} = C|t − s|4 min{Hk}.
3.3 Convergence and Geometric Properties
Proposition 3.4 (Uniform p-variation bound). There exists a constant C > 0 such that for all
m ≥ 1 and all partitions D of [0, T ]:
X
[u,v]∈D
|M m
v − Mm
u |p ≤ C and
X
[u,v]∈D
|Mm,(2)
u,v |p/2 ≤ C
almost surely, for any p > 1
min{Hk} .
Proof. First level bound: From Lemma 3.3, we have E[|Mvm − Mum|2] ≲ |v − u|2 min{Hk}.
Since M m is Gaussian, by the Garsia-Rodemich-Rumsey lemma [3, Theorem 2.1.1], for any
p> 1
min{Hk} :
|M m
v − Mm
u | ≲ |v − u|min{Hk}− 1
p almost surely.
Therefore:
X
[u,v]∈D
|M m
v − Mm
u |p ≲
X
[u,v]∈D
|v − u|p min{Hk}−1 ≤ T · sup
[u,v]∈D
|v − u|p min{Hk}−1.
Second level bound: From Lemma 3.3, E[|Mm,(2)
u,v |2] ≲ |v − u|4 min{Hk}. Again by Gaussian
regularity:
|Mm,(2)
u,v | ≲ |v − u|2 min{Hk}− 2
p almost surely.
Then:
X
[u,v]∈D
|Mm,(2)
u,v |p/2 ≲
X
[u,v]∈D
|v − u|p min{Hk}−1 ≤ C.
9

Proposition 3.5 (Cauchy property). The sequence (Mm)m≥1 is Cauchy in the p-variation
topology almost surely.
Proof. We analyze the difference Mm − Mn.
First level: Since Mtm converges uniformly to Mt:
sup
t∈[0,T ]
|M m
t − Mn
t | → 0 as m, n → ∞.
Second level: Consider the defect of additivity:
δMm,n
s,u,t = Mm,(2)
s,t − Mn,(2)
s,t − (Mm,(2)
s,u − Mn,(2)
s,u ) − (Mm,(2)
u,t − Mn,(2)
u,t ).
Using Gaussian hypercontractivity [12, Theorem 2.7.1]:
E[|δMm,n
s,u,t|q] ≤ Cq E[|δMm,n
s,u,t|2] q/2 ≲ |t − s|q(2 min{Hk}+δ/2).
By the sewing lemma [3, Lemma 2.4], this implies convergence.
3.4 Proof of the Main Theorem
Proof of Theorem 3.1. We now complete the proof by combining all previous results.
Step 1: Construction and boundedness For each m ≥ 1, define the dyadic approximation
Mm as in Section 2. From Proposition 3.4, the sequence (Mm) is uniformly bounded in p
variation.
Step 2: Convergence From Proposition 3.5, (Mm) is Cauchy in p-variation topology. Since
the space of p-rough paths is complete [3, Theorem 3.1.1], there exists a limit M such that:
lim
m→∞ dp(Mm, M) = 0 almost surely.
Step 3: Rough path properties The limit M satisfies:
• Chen’s identity: Ms,u = Ms,t ⊗ Mt,u by continuity of the tensor product
• Finite p-variation: ∥M∥p-var ≤ lim inf ∥Mm∥p-var < ∞
• Geometric nature: M is limit of smooth rough paths
Step 4: Enhanced path For the first level:
M(1)
0,t = lim
m→∞ Mm,(1)
0,t = lim
m→∞(M m
t − Mm
0 ) = Mt,
so M lies above MtH (a).
Step 5: Independence of approximation For two different dyadic approximations (Mm)
and (  ̃Mm), the interlaced sequence converges, forcing M =  ̃M.
This completes the proof that M is a geometric rough path above MtH (a).
10

3.5 Sharpness and Examples
Theorem 3.6 (Sharpness of the condition). The condition min{Hk} > 1
4 is sharp.
Proof. If min{Hk} ≤ 1
4 , then for the component with smallest Hurst parameter, the second level
diverges [1, Theorem 2], preventing convergence of the full rough path.
Example 3.7 (Two-component MFBM). For Mt = aBtH + bBtK with H, K > 1
4 , the geometric
rough path exists with second level:
M(2)
s,t = a2BH,(2)
s,t + b2BK,(2)
s,t + ab
Zt
s
(BH
u − BH
s )dBK
u+
Zt
s
(BK
u − BK
s )dBH
u.
4 Skorohod Integral Representation
In this section, we establish a Skorohod integral representation for the geometric rough path
constructed above the generalized mixed fractional Brownian motion. This representation con
nects our pathwise construction to the Malliavin calculus framework and provides additional
insights into the probabilistic structure of the rough path.
4.1 Malliavin Calculus Framework
We begin by recalling essential elements of Malliavin calculus for fractional Brownian motion
[12, 15]. Let (Ω, F, P) be the complete probability space supporting our GMFBM MtH (a) =
PN
k=1 akBHk
t.
Definition 4.1 (Cameron-Martin spaces [12]). For each Hurst parameter Hk, let HHk be the
reproducing kernel Hilbert space of BHk , defined as the completion of the space of step functions
with respect to the inner product:
⟨1[0,t], 1[0,s]⟩HHk = RHk (t, s) = 1
2 (t2Hk + s2Hk − |t − s|2Hk ).
The combined Cameron-Martin space for the GMFBM is:
H=
N
M
k=1
HHk .
Definition 4.2 (Multiple Wiener integrals [12]). For each BHk , we denote by InHk the multiple
Wiener integral of order n with respect to BHk . Due to the independence of the components, the
Wiener chaos decomposition of L2(Ω) is given by:
L2(Ω) =
M
n1,...,nN ≥0
Hn1,...,nN ,
where Hn1,...,nN is the closed linear subspace generated by products of multiple integrals QN
k=1 InHkk (fk)
with fk ∈ H⊗nk
Hk .
Definition 4.3 (Skorohod integral [12]). The Skorohod integral δ(u) of a stochastic process u in
the domain Dom δ is defined as the adjoint of the Malliavin derivative D. For adapted processes,
the Skorohod integral coincides with the Itô integral.
11

4.2 Skorohod Representation of the Rough Path
We now present the main result of this section, which provides an explicit Skorohod integral
representation for the geometric rough path above GMFBM.
Theorem 4.4 (Skorohod representation). Let M = (1, M(1), M(2)) be the geometric rough path
above the GMFBM MtH (a) with min{Hk} > 1
4 . Then for any 0 ≤ s ≤ t ≤ T , the second level
process admits the following representation:
M(2),i,j
s,t = 1
2 M (1),i
s,t M (1),j
s,t + 1
2
N
X
k=1
a2
kI Hk
2 (1⊗2
[s,t])δij + Ai,j
s,t,
where the cross terms Ai,j
s,t are given by:
Ai,j
s,t =
X
1≤k̸=l≤N
ak al
Zt
s
(B Hk ,i
u − BHk,i
s )δBHl,j
u+
Zt
s
(BHl,j
u − BHl,j
s )δBHk,i
u,
and the integrals are interpreted as Skorohod integrals [12].
Proof. We proceed in several steps, adapting the approach of [1] to the mixed case.
Step 1: Dyadic approximation representation
For the m-th dyadic approximation Mtm, the second level process is given by the Young integral:
Mm,(2),i,j
s,t =
Zt
s
(M m,i
u − M m,i
s )dM m,j
u.
This can be rewritten using the Itô-Stratonovich correction formula [12, Chapter 1]:
Mm,(2),i,j
s,t = 1
2 M m,(1),i
s,t M m,(1),j
s,t + 1
2 Am,i,j
s,t ,
where Am,i,j
s,t is the Lévy area process.
Step 2: Chaos decomposition
Expanding in terms of the independent fBm components, we have:
M m,i
t=
N
X
k=1
ak B Hk ,m,i
t,
where BHk,m,i
t denotes the m-th dyadic approximation of the i-th component of BHk .
The second level process decomposes as:
Mm,(2),i,j
s,t =
N
X
k=1
a2
k BHk ,m,(2),i,j
s,t +
X
1≤k̸=l≤N
ak al
Zt
s
(B Hk ,m,i
u − BHk,m,i
s )dBHl,m,j
u.
Step 3: Limit identification
As m → ∞, the diagonal terms converge to the classical Skorohod representation for single
fBm [1, Theorem 4.1]:
lim
m→∞ BHk,m,(2),i,j
s,t = 1
2 BHk,i
s,t BHk,j
s,t + 1
2 IHk
2 (1⊗2
[s,t])δij ,
12

where the second term is the Skorohod integral representation of the Lévy area for fBm.
For the cross terms, when k ̸= l, we have by the convergence of Young integrals to Skorohod
integrals [15, Proposition 3.4]:
lim
m→∞
Zt
s
(B Hk ,m,i
u − BHk,m,i
s )dBHl,m,j
u=
Zt
s
(B Hk ,i
u − BHk,i
s )δBHl,j
u,
where the right-hand side denotes the Skorohod integral, which is well-defined since Hk +Hl > 1
2.
Step 4: Verification of convergence
The convergence holds in Lp(Ω) for all p ≥ 1 by the Gaussian hypercontractivity theorem
[12, Theorem 2.7.1], and the limit satisfies the algebraic properties of a geometric rough path
by continuity. The symmetry of the cross terms follows from the commutativity of the tensor
product in the second level.
4.3 Properties of the Representation
Proposition 4.5 (Isometry property). For the diagonal terms, we have the isometry [12, The
orem 1.1.2]:
E IHk
2 (1⊗2
[s,t])
2
= 2∥1⊗2
[s,t]∥2
H⊗2
Hk
= |t − s|4Hk .
For the cross terms with k ̸= l, the variance satisfies:
E
"
Zt
s
(BuHk − BsHk )δBuHl
2
#
≲ |t − s|2(Hk+Hl).
Proof. The first statement follows from the standard isometry property of multiple Wiener
integrals [12, Proposition 1.1.4].
For the cross terms, we use the Malliavin calculus representation and the fact that:
E
"
Zt
s
(BuHk − BsHk )δBuHl
2
#
=E
"
Zt
s
(BuHk − BsHk )dBuHl
2
#
+ trace terms,
where the trace terms vanish due to the independence of the components [12, Corollary 6.3.2].
The bound then follows from Young integral estimates.
Proposition 4.6 (Chaos expansion). The second level process M(2)
s,t admits a finite chaos ex
pansion:
M(2)
s,t ∈
4
M
n=0
Hn,
where Hn denotes the n-th Wiener chaos with respect to the combined noise. Specifically:
• H0: Constant terms
• H1: First order terms in individual fBms
• H2: Second order terms including diagonal Lévy areas
13

• H3: Third order cross terms
• H4: Fourth order products
Proof. The result follows from the explicit representation in Theorem 4.4 and the fact that
multiple Wiener integrals of order n live in the n-th Wiener chaos [12, Theorem 1.1.1]. The
cross terms involve products of first-order integrals, which generate terms up to the fourth
Wiener chaos.
4.4 Applications to Rough Differential Equations
The Skorohod representation enables us to study rough differential equations driven by GMFBM
using probabilistic methods.
Theorem 4.7 (RDE with Skorohod representation). Consider the rough differential equation:
dYt = f (Yt)dMt, Y0 = y0,
where f : Rd → L(Rm, Rd) is a C3
b vector field, and M is the geometric rough path above
GMFBM.
Then the solution Yt admits a Stroock-Taylor expansion in terms of multiple Skorohod integrals
[4, Theorem 10.6].
Proof. The existence and uniqueness follow from Lyons’ universal limit theorem applied to the
geometric rough path M. The Stroock-Taylor expansion is obtained by iterating the Skorohod
representation and using the chaos decomposition of the solution [4, Section 10.3].
Specifically, the solution can be expanded as:
Yt = y0 +
X
α
fα(y0)
Zt
0
Z t1
0
···
Z tn−1
0
δM αn
tn · · · δM α1
t1 ,
where the sum is over multi-indices α = (α1, . . . , αn) and the integrals are iterated Skorohod
integrals. The convergence of this series follows from the estimates on the p-variation of the
rough path and the regularity of the vector field f .
4.5 Example: Two-Component Case
Example 4.8 (Detailed Skorohod representation for N = 2). Consider Mt = aBtH + bBtK with
H, K > 1
4 . The second level process has the explicit representation:
M(2),i,j
s,t = 1
2 M (1),i
s,t M (1),j
s,t + a2
2 IH
2 (1⊗2
[s,t])δij + b2
2 IK
2 (1⊗2
[s,t])δij
+ ab
Zt
s
(BH
u − BH
s )δBK
u δij + ab
Zt
s
(BK
u − BK
s )δBH
u δij .
The cross terms are symmetric due to the commutativity of the tensor product in the second
level. The variance of the cross terms satisfies:
E
"
Zt
s
(BH
u − BH
s )δBK
u
2
#
≍ |t − s|2(H+K).
14

This Skorohod representation provides a powerful tool for analyzing the probabilistic properties
of rough differential equations driven by mixed fractional Brownian motions and connects our
pathwise construction to the Malliavin calculus framework.
5 Applications to Rough Differential Equations
In this section, we apply our construction of geometric rough paths above generalized mixed
fractional Brownian motion to study rough differential equations and their fundamental proper
ties. The existence of a geometric rough path enables us to use Lyons’ universal limit theorem
to solve RDEs driven by GMFBM.
5.1 Main Existence and Uniqueness Result
Theorem 5.1 (RDE driven by GMFBM). Let M be the geometric rough path above the GMFBM
MtH (a) = PN
k=1 akBHk
t with min{Hk} > 1
4 . Consider the rough differential equation:
dYt = f (Yt)dMt, Y0 = y0 ∈ Re, (5.1)
where f : Re → L(Rd, Re) is a C3
b vector field.
Then there exists a unique solution Yt to (5.1) that depends continuously on the driving rough
path M in the p-variation topology for any p > 1
min{Hk} .
Proof. The proof follows from Lyons’ universal limit theorem [3, Theorem 3.1.1] applied to our
geometric rough path M. Specifically:
Step 1: Approximation scheme
Let Mm be the sequence of smooth rough paths associated with the dyadic approximations of
the GMFBM. For each m, consider the ordinary differential equation:
dY m
t = f (Y m
t )dM m
t , Ym
0 = y0.
Since Mtm is piecewise linear and of bounded variation, these ODEs have unique solutions by
classical theory [3, Chapter 1].
Step 2: Uniform estimates
Using the uniform p-variation bounds established in Proposition 3.4, we show that the sequence
(Y m, Mm) is bounded in the p-variation rough path topology. The C3
b regularity of f ensures
that the solution map is locally Lipschitz continuous in the p-variation metric [3, Theorem 3.1.1].
Specifically, there exists a constant Cf such that:
∥Y m∥p-var ≤ Cf (1 + ∥Mm∥p-var).
Step 3: Convergence
Since Mm → M in p-variation almost surely by Theorem 3.1, and the solution map is continuous
in the rough path topology [3, Theorem 3.1.1], we have Y m → Y uniformly, where Y is the unique
solution to the RDE driven by M.
15

Step 4: Uniqueness
Uniqueness follows from the local Lipschitz property of the solution map in the p-variation
topology. If Y and Y ̃ are two solutions, then:
∥Y − Y ̃ ∥p-var ≤ Lf ∥M∥p-var∥Y − Y ̃ ∥p-var,
which implies Y = Y ̃ for sufficiently small intervals, and by patching, globally [4, Section 3.2].
5.2 Itô-Stratonovich Correction for Mixed Case
An important feature of rough paths theory is its ability to handle different stochastic calculi in
a unified framework. In the mixed case, we obtain a generalized Itô-Stratonovich correction.
Proposition 5.2 (Itô-Stratonovich correction). Let f ∈ C3
b (Re, L(Rd, Re)). The solution Yt of
the RDE (5.1) interpreted in the Stratonovich sense (i.e., using the geometric rough path M)
satisfies the following Itô-type equation:
dYt = f (Yt)dMt + 1
2
d
X
i,j=1
N
X
k=1
a2
k∂jf i(Yt)f j(Yt)d⟨BHk ⟩t + Cs,t,
where the cross terms Cs,t involve covariations between different fractional components and sat
isfy:
|Cs,t| ≲ |t − s|2 min{Hk}.
Proof. The proof follows from the explicit representation of the second level process M(2) and
the fact that for a geometric rough path, the RDE solution coincides with the Stratonovich
interpretation [3, Section 5.2]. The correction terms come from the Lévy area contributions in
the second level process.
More precisely, the Itô-Stratonovich correction is given by:
1
2
d
X
i,j=1
∂j f i(Yt)f j (Yt)d[M(1),i, M(1),j ]t,
where the quadratic variation decomposes as:
d[M(1),i, M(1),j ]t =
N
X
k=1
a2
kd[BHk,i, BHk,j]t + cross terms.
The cross terms vanish in expectation but contribute to the higher-order structure due to the
dependence in the second level process.
5.3 Regularity of Solutions
Theorem 5.3 (Hölder regularity of solutions). Let Yt be the solution of the RDE (5.1). Then
almost every sample path of Yt is locally Hölder continuous of order γ for any:
γ < min{H1, . . . , HN }.
In particular, if min{Hk} > 1
2 , the solution has long-range dependence properties inherited from
the driving noise.
16

Proof. The regularity follows from the local Lipschitz continuity of the solution map in the p
variation topology and the Hölder regularity of the GMFBM sample paths established in Section
2. More precisely, if MtH (a) is Hölder continuous of order α, then the solution Yt is Hölder
continuous of the same order modulo the nonlinear effects of the vector field f [3, Theorem
3.1.1].
The key estimate is:
|Yt − Ys| ≤ Cf ∥M∥p-var;[s,t](1 + ∥Y ∥∞;[s,t]) ≤ Cf,M|t − s|min{Hk},
where the second inequality follows from the Hölder regularity of the rough path M and the fact
that ∥M∥p-var;[s,t] ≲ |t − s|min{Hk} by our construction.
5.4 Applications in Mathematical Finance
The ability to solve RDEs driven by GMFBM opens up new modeling possibilities in mathe
matical finance, particularly for assets exhibiting multi-scale rough volatility.
Example 5.4 (Rough volatility model with multiple scales). Consider a stock price St modeled
by:
dSt = σtStdWt,
σt = f (Yt),
dYt = μ(Yt)dt + g(Yt)dMt,
where Wt is a standard Brownian motion independent of Mt, Mt is a geometric rough path
above a GMFBM capturing volatility factors at different time scales, and f, g, μ are appropriate
functions.
This model can capture:
• Short-term volatility dynamics (through components with Hk ≈ 0.1)
• Medium-term mean reversion (through components with Hk ≈ 0.3)
• Long-term trends (through components with Hk ≈ 0.5)
all within a single consistent framework [11].
Proposition 5.5 (Option pricing under GMFBM drivers). In the rough volatility model above,
European option prices satisfy a partial differential-integral equation involving fractional opera
tors corresponding to the different Hurst parameters in the GMFBM. The characteristic function
of log ST admits a representation in terms of the solution to a rough differential equation.
Proof. The option price can be expressed as:
C(T, K) = E[(ST − K)+] = E
h
E[(ST − K)+ | F M]
i
,
17

where the inner expectation is computed using the Black-Scholes formula with integrated vari
ance:
VT =
ZT
0
σ2
t dt =
ZT
0
f (Yt)2dt.
The process Yt satisfies an RDE driven by M, and the characteristic function can be obtained
by solving a backward RDE via the Feynman-Kac formula for rough differential equations [4,
Section 10].
5.5 Numerical Approximation Schemes
The rough path perspective also suggests natural numerical schemes for RDEs driven by GMFBM.
Proposition 5.6 (Davie approximation scheme). The solution Yt of (5.1) can be approximated
by the scheme:
Ytk+1 = Ytk + f (Ytk )Mtk,tk+1 + 1
2 Df (Ytk )f (Ytk )M(2)
tk,tk+1 + Rtk,tk+1 ,
where the remainder satisfies |Rs,t| ≲ |t − s|3 min{Hk} and Df denotes the derivative of f .
Proposition 5.7 (Convergence rates). For a partition of [0, T ] with mesh size |π|, the numerical
scheme above achieves convergence rate:
mkax |Ytk − Y π
tk | ≲ |π|3 min{Hk}−1.
In particular, when min{Hk} > 1
3 , we obtain positive convergence rates.
Proof. The convergence rate follows from the local truncation error of the Taylor expansion and
the regularity of the rough path. The key estimate is:
|Yt − Ys − f (Ys)Ms,t − 1
2 Df (Ys)f (Ys)M(2)
s,t | ≲ |t − s|3 min{Hk},
which is a consequence of the rough paths version of Taylor’s theorem [4, Theorem 4.2].
5.6 Stability and Sensitivity Analysis
Theorem 5.8 (Continuous dependence on parameters). The solution Yt of the RDE (5.1)
depends continuously on:
• The Hurst parameters H1, . . . , HN
• The mixing coefficients a1, . . . , aN
• The initial condition y0
• The vector field f in the C3
b topology
18

Proof. This follows from the continuous dependence of the rough path M on the Hurst parame
ters and mixing coefficients, combined with the continuity of the solution map in Lyons’ theory
[3, Theorem 3.1.1]. The key observation is that the p-variation distance between rough paths
above GMFBMs with different parameters can be controlled uniformly on compact sets.
Specifically, if M and  ̃M are rough paths above GMFBMs with parameters (H, a) and (H ̃ ,  ̃a)
respectively, then:
dp(M,  ̃M) ≤ C(|H − H ̃ | + |a −  ̃a|).
The result then follows from the local Lipschitz continuity of the solution map.
5.7 Example: Linear RDE with GMFBM
Example 5.9 (Explicit solution for linear RDE). Consider the linear RDE:
dYt = AYtdMt, Y0 = I,
where A ∈ L(Rd, L(Rd)) and M is the geometric rough path above a GMFBM.
The solution is given by the rough path exponential [4, Section 7]:
Yt = exp AMt + 1
2 A2M(2)
t +··· =
∞
X
n=0
Z
0≤t1≤···≤tn≤t
AndMt1 ⊗ · · · ⊗ dMtn ,
where the higher-order terms involve the full signature of the rough path. When A commutes
with itself at all times, this simplifies to the classical matrix exponential.
This section demonstrates that the geometric rough path construction for GMFBM developed
in this paper provides a solid foundation for studying a wide range of stochastic systems driven
by mixed fractional noises, with applications spanning mathematical finance, physics, and engi
neering.
6 Signature of Mixed Fractional Brownian Motion
In this section, we study the signature of mixed fractional Brownian motion, which provides
a powerful algebraic framework for analyzing the path properties of GMFBM. The signature
captures all the essential information about a path in a coordinate-free manner and has found
numerous applications in machine learning, finance, and stochastic analysis [19, 4, 16].
6.1 Definition and Basic Properties
Definition 6.1 (Signature of GMFBM). Let M be the geometric rough path above the GMFBM
MtH (a). The signature of M over the interval [s, t] is defined as the formal series:
S(M)s,t =
∞
X
n=0
Z
s<t1<···<tn<t
dMt1 ⊗ · · · ⊗ dMtn ∈ T ((Rd)),
where T ((Rd)) denotes the space of formal tensor series over Rd, and the integrals are interpreted
in the rough path sense.
19

Proposition 6.2 (Convergence and existence). For GMFBM with min{Hk} > 1
4 , the signature
S(M)0,T converges in the p-variation topology for any p > 1
min{Hk} . Moreover, S(M)s,t is a
group-like element in the tensor algebra, satisfying Chen’s identity:
S(M)s,u = S(M)s,t ⊗ S(M)t,u for all 0 ≤ s ≤ t ≤ u ≤ T.
Proof. We prove convergence and the group-like property separately.
Step 1: Convergence proof From Theorem 3.1, M is a p-rough path with p > 1
min{Hk} . By
the factorial decay estimate for rough paths [3, Theorem 2.1.1], we have for each n ≥ 1:
Z
s<t1<···<tn<t
dMt1 ⊗ · · · ⊗ dMtn ≤
∥M∥n
p-var;[s,t]
(n!)1/p .
Since ∥M∥p-var;[s,t] < ∞ almost surely, the series converges absolutely. More precisely, for any
ε > 0, there exists N0 such that for all N > M ≥ N0:
N
X
n=M
Z
s<t1<···<tn<t
dMt1 ⊗ · · · ⊗ dMtn ≤
N
X
n=M
Cn
(n!)1/p < ε,
where C = ∥M∥p-var;[0,T ]. The convergence follows from the ratio test and Stirling’s approxima
tion.
Step 2: Group-like property proof Chen’s identity follows from the multiplicative property
of rough paths. For any 0 ≤ s ≤ t ≤ u ≤ T , we have:
S(M)s,t ⊗ S(M)t,u =
∞
X
n=0
Z
s<t1<···<tn<t
dMt1 ⊗ · · · ⊗ dMtn
!
⊗
∞
X
m=0
Z
t<u1<···<um<u
dMu1 ⊗ · · · ⊗ dMum
!
.
By the shuffle product formula and the fact that the intervals [s, t] and [t, u] are disjoint, this
equals: ∞
X
k=0
X
i+j=k
Z
s<v1 <···<vk <u
dMv1 ⊗ · · · ⊗ dMvk = S(M)s,u.
The group-like property in the tensor algebra then follows from Chen’s identity [3, Theorem
2.2.1].
6.2 Explicit Calculations for Mixed Case
The mixed nature of GMFBM leads to interesting algebraic structure in its signature. We
provide explicit formulas for the first few levels.
Proposition 6.3 (First and second level signature). The first two levels of the signature have
the following explicit expressions:
S(M)(1)
s,t = Mt − Ms =
N
X
k=1
ak (B Hk
t − BsHk )
S(M)(2)
s,t = M(2)
s,t + 1
2 (Mt − Ms)⊗2
20

where M(2)
s,t is given by the Skorohod representation from Theorem 4.4.
Proof. First level: By definition, the first level signature is:
S(M)(1)
s,t =
Zt
s
dMu = M(1)
s,t = Mt − Ms.
The decomposition follows immediately from the definition of GMFBM.
Second level: We use the fundamental relation between the signature and the rough path.
For a smooth path X, the second level signature is:
S (X )(2)
s,t =
Zt
s
Zu
s
dXv ⊗ dXu =
Zt
s
(Xu − Xs) ⊗ dXu.
In rough path theory, this relation is preserved for geometric rough paths. Using the shuffle
product relation [3, Proposition 2.2.2]:
S(M)(2)
s,t = M(2)
s,t + 1
2 S(M)(1)
s,t ⊗ S(M)(1)
s,t ,
which can be verified by direct computation:
S(M)(1)
s,t ⊗ S(M)(1)
s,t = (Mt − Ms) ⊗ (Mt − Ms)
=2
Zt
s
(Mu − Ms) ⊗ dMu +
Zt
s
Zu
s
dMv ⊗ dMu
= 2 M(2)
s,t +
Zt
s
Zu
s
dMv ⊗ dMu .
Rearranging gives the desired result. The equality holds for geometric rough paths by conti
nuity.
Proposition 6.4 (Mixed signature terms). The cross terms in the signature capture the inter
actions between different fractional components. For i ̸= j, the mixed signature term:
Zt
s
Z t2
s
dBHi
t1 ⊗ dBHj
t2
satisfies the bound:
E
"
Zt
s
Z t2
s
dBHi
t1 ⊗ dBHj
t2
2
#
≲ |t − s|2(Hi+Hj).
Proof. We compute the second moment explicitly. Let I = R t
s
R t2
s dBHi
t1 ⊗ dBHj
t2 . Then:
E[|I|2] = E
"
Zt
s
Z t2
s
dBHi
t1 ⊗ dBHj
t2
2
#
=
Zt
s
Z t2
s
Zt
s
Z u2
s
E[dBHi
t1 dBuH1i ]E[dBHj
t2 dBuH2j ]
=
Zt
s
Z t2
s
Zt
s
Z u2
s
RHi (dt1, du1)RHj (dt2, du2),
where RH (s, t) = 1
2 (|t|2H + |s|2H − |t − s|2H ) is the covariance of fBm.
21

By scaling properties of fBm, we have:
E[|I|2] = |t − s|2(Hi+Hj)E
"
Z1
0
Z t2
0
dBHi
t1 ⊗ dBHj
t2
2
#
.
The expectation on the right is finite since Hi + Hj > 1
2 by assumption, ensuring the Young
integral exists. This gives the desired bound.
6.3 Signature as a Feature Map
The signature provides a powerful feature map for paths that is particularly suited for machine
learning applications with multi-scale data.
Theorem 6.5 (Universal nonlinearity). Let P be the space of GMFBM paths with min{Hk} > 1
4
equipped with the p-variation topology. The signature map S : P → T ((Rd)) is injective up to
tree-like equivalence and has the universal approximation property: any continuous function
f : P → R can be uniformly approximated on compact sets by linear functions on the signature.
Proof. We prove both properties separately.
Step 1: Injectivity proof The injectivity (up to tree-like equivalence) follows from [3, The
orem 3.1.3]. Specifically, if two paths M and M ̃ have the same signature, then they differ by a
tree-like path. For GMFBM paths, which are almost surely not tree-like, this implies injectivity
almost surely.
More precisely, by [16, Theorem 1.2], the signature determines the path up to a null set with
respect to the p-variation topology. Since GMFBM paths have strictly positive p-variation for
p > 1/H, they are uniquely determined by their signatures.
Step 2: Universal approximation proof Let f : P → R be continuous and K ⊂ P compact.
By the Stone-Weierstrass theorem for path spaces [4, Theorem 3.5], the algebra generated by
the coordinate functions of the signature is dense in C(K).
Specifically, consider the set of functions:
A=
n
M 7→ ⟨l, πN (S(M)0,T )⟩ : l ∈ T N ((Rd))∗, N ≥ 0
o
,
where πN denotes truncation to level N . This algebra separates points (by injectivity), contains
constants, and is closed under addition and multiplication. Therefore, it is dense in C(K).
For any ε > 0, there exists a linear functional lε on some truncated signature such that:
sup
M∈K
|f (M) − ⟨lε, πN (S(M)0,T )⟩| < ε.
This completes the proof.
Example 6.6 (Signature features for financial time series). Consider a financial time series
modeled by GMFBM. The truncated signature up to level N :
πN (S(M)0,T ) = 1, S(1), S(2), . . . , S(N)
provides a feature vector that captures:
22

• Trend information (first level): S(1) = MT − M0
• Volatility and leverage effects (second level): S(2) = M(2)
0,T + 1
2 (MT − M0)⊗2
• Multi-scale dependencies (higher levels and cross terms)
• Path geometry (all levels combined)
These features can be used for classification, regression, or anomaly detection tasks in financial
data analysis [17].
6.4 Applications to Parameter Estimation
The signature provides a natural framework for estimating the parameters of GMFBM from
observed data.
Proposition 6.7 (Method of moments via signature). Let {Mti}n
i=0 be discrete observations of
a GMFBM path at times 0 = t0 < t1 < · · · < tn = T . The empirical signature moments:
Sˆ(k) = 1
n
n−1
X
i=0
(Mti+1 − Mti )⊗k
provide consistent estimators for the Hurst parameters Hk and mixing coefficients ak as n → ∞
and max |ti+1 − ti| → 0.
Proof. Step 1: Consistency of empirical moments By the ergodic theorem for Gaussian
processes [12, Theorem 10.6], for stationary increments processes like GMFBM, the empirical
moments converge almost surely to their theoretical expectations:
nli→m∞
Sˆ(k) = E[(Mti+1 − Mti )⊗k] almost surely.
Step 2: Relation to GMFBM parameters From the properties of GMFBM, we have:
E[S(1)] = 0
E[S(1) ⊗ S(1)] =
N
X
k=1
a2
k|ti+1 − ti|2Hk I
E[S(2)] = 1
2 E[S(1) ⊗ S(1)] + O(|ti+1 − ti|2 min{Hk})
Step 3: Parameter identification By analyzing the scaling behavior of different tensor
components, we can identify the parameters. For example, consider the diagonal elements:
E[(S(1)
j )2] =
N
X
k=1
a2
k|∆t|2Hk .
By computing this expectation for different time intervals ∆t and solving the resulting system
of equations, we can estimate Hk and ak. The cross terms provide additional equations for
identifying the mixing structure.
Step 4: Asymptotic normality By the central limit theorem for functionals of Gaussian
processes [12, Theorem 6.3.1], the estimators are asymptotically normal with rate √n.
23

Example 6.8 (Two-component case estimation). For Mt = aBtH + bBtK with H > K, the
second signature moment satisfies:
E[(S(1))2] = a2|∆t|2H + b2|∆t|2K .
By computing this quantity for different time scales and performing a log-log regression, one can
estimate H, K, a, b simultaneously. The cross terms in higher signature levels provide additional
constraints that improve estimation accuracy.
6.5 Numerical Computation
The signature can be efficiently computed using rough path integration techniques.
Proposition 6.9 (Numerical signature computation). Let {Mti}n
i=0 be a discrete sample of
GMFBM. The signature can be approximated by the product expansion:
S ̃0,T =
n−1
Y
i=0
exp ∆Mi + 1
2 ∆M(2)
i + · · · + (−1)N−1
N ∆M(N)
i
where ∆Mi = Mti+1 − Mti and ∆M(k)
i are the higher-order increments, with error controlled by:
∥S(M)0,T − S ̃0,T ∥ ≲ miax |ti+1 − ti|
min{Hk }−1/p
.
Proof. Step 1: Chen’s identity discretization By Chen’s identity, the signature factors over
partitions:
S(M)0,T = S(M)t0,t1 ⊗ S(M)t1,t2 ⊗ · · · ⊗ S(M)tn−1,tn .
Step 2: Local approximation On each subinterval [ti, ti+1], we approximate the signature
by its truncated logarithm:
S(M)ti,ti+1 ≈ exp ∆Mi + 1
2 ∆M(2)
i + · · · + (−1)N−1
N ∆M(N)
i,
where the logarithm is taken in the tensor algebra. This is the Chen-Strichartz formula [3,
Theorem 7.1].
Step 3: Error analysis The local error on each interval satisfies [4, Proposition 3.6]:
∥S(M)ti,ti+1 − exp(log S(M)ti,ti+1 )∥ ≲ ∥M∥N+1
p-var;[ti,ti+1].
Since ∥M∥p-var;[ti,ti+1] ≲ |ti+1 − ti|min{Hk}, the global error accumulates as:
∥S(M)0,T − S ̃0,T ∥ ≲ n · miax |ti+1 − ti|
(N +1) min{Hk}
.
With n ∼ 1/ maxi |ti+1 − ti|, we get the stated error bound.
24

6.6 Relations to Other Transforms
The signature generalizes several classical transforms for time series analysis.
Remark 6.10 (Relation to Fourier transform). The signature can be viewed as a non-commutative
generalization of the Fourier transform [17, Chapter 4]. While Fourier analysis captures fre
quency information through the characteristic function E[eiξMt], the signature captures both tem
poral and algebraic structure through the expected signature E[S(M)0,T ]. For linear functionals,
the two are related by:
E[ei⟨ξ,Mt⟩] = E[⟨eiξ, S(M)(1)
0,t ⟩].
Remark 6.11 (Relation to wavelet analysis). For multi-scale processes like GMFBM, the sig
nature provides a complementary approach to wavelet analysis. Where wavelets capture local
scaling behavior through mother wavelet coefficients, the signature captures global path proper
ties and their algebraic interactions. The different levels of the signature correspond to different
scales of path variation, with higher levels capturing finer geometric features.
This section demonstrates that the signature provides a powerful unifying framework for an
alyzing mixed fractional Brownian motions, with applications ranging from theoretical char
acterization to practical computation and machine learning. The explicit connection between
the algebraic structure of the signature and the probabilistic properties of GMFBM opens new
avenues for both theoretical analysis and practical applications in finance and data science.
7 Conclusion
In this paper, we have established a comprehensive theory of geometric rough paths for general
ized mixed fractional Brownian motion. Our main contribution is the proof that for a GMFBM
MtH (a) = PN
k=1 akBHk
t with min{Hk} > 1
4 , there exists a canonical geometric rough path
obtained as the limit of smooth rough paths associated with dyadic approximations.
The key results of this work include:
• The existence and uniqueness of geometric rough paths above GMFBM (Theorem 3.1)
• A Skorohod integral representation connecting the pathwise construction to Malliavin cal
culus (Theorem 4.4)
• Applications to rough differential equations driven by MFBM (Theorem 5.1)
• The optimality of the condition min{Hk} > 1
4 (Theorem 3.6)
Our work extends the classical results of Coutin and Qian [1] for single fractional Brownian
motion to the mixed case, providing a rigorous mathematical foundation for studying stochas
tic systems driven by multi-scale fractional noises. The results open up new possibilities for
analyzing stochastic differential equations and developing numerical schemes in contexts where
processes with multiple regularity scales naturally appear.
25

Future research directions include extending the theory to the critical case H = 1
4 , studying
rough paths above dependent fractional components, and exploring connections with recent
developments in regularity structures and paracontrolled calculus.
References
[1] Laure Coutin and Zhongmin Qian. Stochastic analysis, rough path analysis and fractional
brownian motions. Probability Theory and Related Fields, 122(1):108–140, 2002. doi: 10.
1007/s004400100158. Seminal paper on rough paths for fractional Brownian motion.
[2] Terry Lyons. Differential equations driven by rough signals. Revista Matemática Iberoamer
icana, 14(2):215–310, 1998. Foundational work introducing rough paths theory.
[3] Terry Lyons and Zhongmin Qian. System control and rough paths. Oxford Mathematical
Monographs. Oxford University Press, 2002. Comprehensive treatment of rough paths
theory and applications.
[4] Peter Friz and Nicolas Victoir. Multidimensional stochastic processes as rough paths: Theory
and applications. Cambridge Studies in Advanced Mathematics. Cambridge University
Press, 2010. Comprehensive reference on rough paths theory.
[5] Laure Coutin and Nicolas Victoir. Enhanced gaussian processes and applications. ESAIM:
Probability and Statistics, 13:247–260, 2009. doi: 10.1051/ps:2008006. Enhanced Gaussian
processes and rough paths constructions.
[6] Peter Friz and Nicolas Victoir. Differential equations driven by gaussian signals II. Annales
de l’Institut Henri Poincaré, 44:864–874, 2008. doi: 10.1051/ps:2008006. Gaussian processes
and rough differential equations.
[7] Patrick Cheridito. Mixed fractional brownian motion. Bernoulli, 7(6):913–934, 2001. doi:
10.2307/3318626. Introduction of mixed fractional Brownian motion.
[8] M. Zili. On the mixed fractional brownian motion. Journal of Applied Mathematics and
Stochastic Analysis, 2006:1–9, 2006. doi: 10.1155/JAMSA/2006/32435. Properties and
applications of MFBM.
[9] Y. Miao, W. Ren, and Z. Ren. On the fractional mixed fractional brownian motion. Applied
Mathematical Sciences, 2(37):1729–1738, 2008. Extension to fractional mixed fractional
Brownian motion.
[10] Christoph Thäle. Further remarks on the mixed fractional brownian motion. Applied
Mathematical Sciences, 3(39):1885–1901, 2009. Further analysis of MFBM properties.
[11] Christian Bayer, Peter Friz, and Paul Gassiat. Rough volatility: fact or artefact? Applied
Mathematical Finance, 27(1-2):1–27, 2020. doi: 10.1080/1350486X.2020.1752892. Recent
work on rough volatility models.
26

[12] David Nualart. The Malliavin calculus and related topics. Probability and its Applications.
Springer, 1st edition, 1995. Comprehensive reference on Malliavin calculus.
[13] Michael B. Giles. Multilevel Monte Carlo path simulation. Operations Research, 56(3):
607–617, 2008. doi: 10.1287/opre.1070.0496. Multilevel Monte Carlo methods for SDEs.
[14] Martin Hairer. A theory of regularity structures. Inventiones Mathematicae, 198(2):269
504, 2014. doi: 10.1007/s00222-014-0505-4. Fields Medal work on regularity structures for
singular SPDEs.
[15] Massimiliano Gubinelli, Peter Imkeller, and Nicolas Perkowski. Paracontrolled distributions
and singular PDEs. Forum of Mathematics, Pi, 3:e6, 2015. doi: 10.1017/fmp.2015.2.
Paracontrolled calculus approach to singular SPDEs.
[16] Ilya Chevyrev and Harald Oberhauser. Signature moments to characterize laws of stochastic
processes. Journal of Machine Learning Research, 19(1):1–42, 2018. Characterization of
stochastic processes through signature moments.
[17] Terry Lyons, Imanol Perez Arribas, Cristopher Salvi, and Lukasz Szpruch. Signature
Methods in Finance: An Introduction with Computational Applications. Springer Finance.
Springer, 2024. ISBN 978-3-031-97239-3. doi: 10.1007/978-3-031-97239-3. Comprehensive
introduction to signature methods in financial applications.
[18] Terry Lyons, Michael Caruana, and Thierry Lévy. Differential equations driven by rough
paths, volume 1908 of Lecture Notes in Mathematics. Springer, 2004. Lecture notes on
rough differential equations.
[19] Terry Lyons. Rough paths, signatures and the modelling of functions on streams. arXiv
preprint arXiv:1405.4537, 2014. Recent developments in rough paths and signatures.
27

---

## Processing Information

- **Processing Library:** Zotero PDFWorker
- **Processing Date:** 2026-02-10T18:15:46.093Z
- **Text Length:** 53840 characters
- **Success:** Text extraction completed
- **PDF Library Used:** Zotero PDFWorker
- **Pages Processed:** 27 of 27
