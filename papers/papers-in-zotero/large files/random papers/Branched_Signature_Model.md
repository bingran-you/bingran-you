# PDF Document: Ali and Feng - 2025 - Branched Signature Model.pdf

**File Path:** Ali and Feng - 2025 - Branched Signature Model.pdf

**Processed Date:** 2026-02-10T18:14:57.948Z

**File Size:** 1528.78 KB

**Total Pages:** 28

**Extracted Pages:** 28

**PDF Library:** Zotero PDFWorker

**Attachment Item ID:** 3508

**Title:** Branched Signature Model

**Collection:** Large Files > Random Papers

---

## Extracted Text Content

BRANCHED SIGNATURE MODEL
MUNAWAR ALI∗ AND QI FENG†
Abstract. In this paper, we introduce the branched signature model, motivated by the branched rough path framework of [Gubinelli, Journal of Differential Equations, 248(4), 2010], which generalizes the classical geometric rough path. We establish a universal approximation theorem for the branched signature model and demonstrate that iterative compositions of lower-level signature maps can approximate higher-level signatures. Furthermore, building on the existence of the extension map proposed in [-
Hairer-Kelly. Annales de l’Institue Henri Poincaré, Probabilités et Statistiques 51, no. 1 (2015)], we show how to explicitly construct the extension of the original paths into higherdimensional spaces via a map Ψ, so that the branched signature can be realized as the classical geometric signature of the extended path. This framework not only provides an efficient computational scheme for branched signatures but also opens new avenues for data-driven modeling and applications.
Keywords: Branched Signature; Branched Signature model; Universal approximation theorem; fractional Brownian motion; Hopf algebra.
2000 AMS Mathematics subject classification: 62P05, 60G17, 65C20, 65C30, 60H10, 91B70.
1. Introduction
Background and motivation. The signature of a bounded variation path X : [0, T ] → Rd is defined from the iterated integrals of X. More precisely, the N -th order signature of X is defiend as,
SigN (X)st =
N
X
k=0
X
{i1,··· ,ik}∈{1,···d}
Z
s<t1 <···<tk <t
dXi1
t1 · · · dXik
tk ei1 ⊗ · · · ⊗ eik , (1.1)
for 0 ≤ s ≤ t < ∞. The concept of the signature was first introduced by Chen in the 1950s [Chen, 1954]. Since then, the notion of the signature has been extended to a much broader class of paths and has become a fundamental object in Lyons’ rough path theory [Lyons, 1998]. For example, for a d-dimensional fractional Brownian motion BH , the N -th order signature SigN (BH )st exists almost surely given the Hurst parameter H > 1/4 (see [Friz and Victoir, 2010][Chapter 14]). From its very definition,-
 the N -th order signature lives in the truncated tensor algebra TN (Rd). By viewing TN (Rd) as a flat linear space, one can construct X-driven models using linear combinations of the signature components. Such models are commonly referred to as signature models in the literature. Furthermore, the signature actually lies in a strict subspace GN (Rd) ⊊ TN (Rd), known as the step-N free Carnot group over Rd (see e.g.: [Baudoin, 2004]), which endows signature with rich geometric and algebraic (or gro-
up) structures. The geometric and algebraic structure enables us to study many properties of signature with the help of pre-existing results in the theory of group and algebraic structures. One such property is the multiplicativity that if we multiply two components of a signature (like a group product), we get another component of the signature or any linear combination of the components of the signature. A simple example is the integration by parts formula (or the Chain rule), which can be recas-
t in terms of signatures as follows,
Zt
s
dXi
r
Zt
s
dXj
r=
Zt
s
Zv
s
dXi
udXj
v+
Zt
s
Zv
s
dXj
udXi
v. (1.2)
Date: November 4, 2025. ∗: Department of Mathematics, Florida State University, Tallahassee, 32306; email: ma22bm@fsu.edu. †: Department of Mathematics, Florida State University, Tallahassee, 32306; email: qfeng2@fsu.edu. This author is partially supported by the National Science Foundation under grant #DMS-2420029. 1
arXiv:2511.00018v1 [math.NA] 23 Oct 2025

BRANCHED SIGNATURE MODEL 2
This nice geometric property has then been used as in the very definition of geometric rough path (see e.g.:[Friz and Hairer, 2014][Chapter 2]). Under this geometric framework, the signature method has become a powerful tool in data science as it helps to study the properties of a data stream (e.g. extraction of characteristic features from the data, [Levin et al., 2013]) and answer many questions associated to data-driven problems [Chevyrev and Kormilitzin, 2016]. The questions may be related to -
finding patterns in the data and approximating missing information. In machine learning, some recent applications of signatures are image and texture classification using 2D signatures [Zhang et al., 2022]. Also, the sensitivity of signature to the geometric structure of data has made it particularly effective in applications such as Chinese character recognition. For instance, [Graham, 2013] reported a test error of 3.58% using a sparse signature-based model, outperforming the 5.61% test error ob-
tained using traditional convolutional neural networks (CNNs) [Schmidhuber, 2012]. In mathematical finance, signature models have been employed in various applications, including the pricing of path-dependent options—also known as signature payoffs [Arribas, 2018]—model calibration using such payoffs [Cuchiero et al., 2023, Cuchiero et al., 2025], and the construction of cubature formulas on Wiener space [Lyons and Victoir, 2004]. Additional applications include optimal execution [Kalsi et al., 20-
20], optimal stopping [Bayer et al., 2023], and stochastic optimal control [Bank et al., 2024]. Moreover, signatures have been employed in generating synthetic data [Kidger et al., 2019] and in topological data analysis [Chevyrev et al., 2018]. Nonetheless, in real-world data-driven settings, the underlying data often possess intrinsic manifold structures of much lower dimension [Tenenbaum et al., 2000, Roweis and Saul, 2000, Belkin and Niyogi, 2003, Fefferman et al., 2016, Pope et al., 2020], lea-
ding to manifold-valued paths that generally fail to satisfy the geometric property (1.2) (see e.g.: [Armstrong et al., 2022]). In fact, the geometric property—such as the integration by parts identity (1.2)—does not hold in general for arbitrary paths X : [0, T ] → Rd. A prominent example is the Brownian motion in the Itô’s integration form (see e.g.: [Friz and Hairer, 2014][Chapter 2]). The lack of the geometric property in the classical signature suggests the need for an alternative framework c-
apable of handling such cases. To address this, we borrow the concept of the branched signature, which extends the classical notion by accounting for paths whose signatures typically do not satisfy the geometric property. This notion is naturally associated with branched (or non-geometric) rough paths [Gubinelli, 2010]. Accordingly, we propose a new modeling framework termed the branched signature model, designed to accommodate such irregular or manifold-valued data. As a toy example, consider the-
 task of estimating functionals of underlying processes whose sample paths do not satisfy the geometric property. In such cases, the classical signature framework becomes inadequate, as it inherently relies on this geometric structure. The branched signature, by contrast, offers a more general representation that aligns with the theory of non-geometric rough paths, enabling the treatment of a broader class of stochastic and manifold-valued paths. Consider a function F : R2 → R that depends on two -
underlying processes (Xt1, Xt2) that satisfy the following controlled differential equations driven by are two signal processes ξi : [0, T ] → R, for i=1,2, in R,
(
dXt1 = V1(Xt1, Xt2)dξt1,
dXt2 = V2(Xt1, Xt2)dξt2, (1.3)
where Vi : R2 → R, i = 1, 2, are smooth functions. Applying Taylor’s expansion around Xis with t > s, for i = 1, 2, multiple times gives the following approximation for the underlying process,
Xi
t − Xi
s ≈ LOT +
2
X
j,k=1
C (V1, V2, DV1, DV2)
Zt
s
Zv
s
dξj
u
Zv
s
dξk
u dξn
v + HOT,
where LOT ( and HOT respectively) stands for lower order terms ( and higher order terms respectively) and C is a function of V1, V2 or any of their derivatives (DV1, DV2) evaluated at initial point

BRANCHED SIGNATURE MODEL 3
(Xs1, Xs2). The function F of the two underlying processes (1.3) can be approximated as follows,
F (X1
t , X2
t ) − F (X1
s, X2
s)
≈LOT +
2
X
i,j,k=1
C ̃ (F, V1, V2, DF, DV1, DV2)
Zt
s
Zv
s
dξi
u
Zv
s
dξj
u dξk
v + HOT, (1.4)
where C ̃ is a function of F, V1, V2 or any of their derivatives. It can be observed that the right-hand
side of (1.4), which approximates F , contains a branched-type term R t
s
Rv
s dξiu
Rv
s dξju dξvk. Such
a structure does not belong to the classical geometric (shuffle) signature, but instead arises naturally in the context of non-geometric rough paths and is represented in the branched signature framework. This motivates the definition of the branched signature, an object that extends the classical signature by including not only all iterated integrals but also their possible products, thereby capturing the full range of terms arising in non-geometric rough paths. These integrals can be represented-
 using a rooted tree structure (see e.g. [Gubinelli, 2010, Hairer and Kelly, 2015]), where each tree encodes the combinatorial structure of the corresponding iterated integrals and their products. With a slight abuse of notation, we will write BSig(X)st to denote the full branched signature, i.e., the collection of all possible tree-indexed integrals over [s, t]. Then the branched signature of level N consists of all tree-indexed integrals and can be expressed in the form
BSigN (X)st = {⟨BSig(X)st, τ ⟩, τ ∈ T , |τ | ≤ N } ,
where T denotes the set of rooted trees, and τ is the number of nodes in τ . For example, for τ= k
i j, we have ⟨BSig(X)st, k
i j⟩ = R t
s
Rv
s dXui
Rv
s dX j
u dXvk . These rooted trees are endowed with the Connes–Kreimer Hopf algebra structure [Gubinelli, 2010], which is a particular example of a Hopf algebra [Manchon, 2008]. Although there is extensive literature on Hopf algebras and on the Connes–Kreimer Hopf algebra of rooted trees, we will discuss both algebraic structures in detail in the next section to keep the manuscript self-contained. We also refer the reader to the next section for a comprehensive introduction to branched signature models. -
Main results. After introducing the branched signature model, we first establish the universal approximation property for the branched signature model. A key property of the classical signature model is its universal approximation property, where the geometric nature of classical signatures plays a central role in the proof. Unfortunately, such a geometric property is not available for branched signatures. To establish a version of such an universal approximation property for branched signature mo-
dels, we used the idea of extended path from [Hairer and Kelly, 2015], which maps the original paths X : [0, T ] → Rd to an extended path X ̄ : [0, T ] → Re, where e is much bigger than d.
For such an extended paths X ̄ over a given path X, for any rooted tree h, the branched signature component corresponding to h coincides with the classical signature component corresponding to a basis element Ψ(h) of a suitable tensor algebra (i.e. Hopf algebra), which can be represented as ,
⟨BSig(X)st, h⟩ = ⟨Sig(X ̄ )st, Ψ(h)⟩.
The existence of such a path and the map Ψ is established in [Hairer and Kelly, 2015], although their uniqueness remains unknown and the explicit construction of Ψ is not provided. Nevertheless, this existence result is sufficient for many applications, as the extended path inherits several desirable properties, such as satisfying Chen’s identity, and allowing the use of classical signature tools for analysis and approximation. Building on this idea, we next present an explicit construction of the-
 extended paths X ̄ and introduce a dimension-reduction algorithm to mitigate the computational complexity. The extended path X ̄ is significantly higher-dimensional than the original path X. As a result, computing the classical signature for Sig(X ̄ ) up to a given level N can be computationally expensive. To address this, we adopt a strategy in which a lower-order signature is computed repeatedly. Specifically, if we regard the lower-order signature of order k as a map, we can compose this map m-
ultiple times to obtain the signature up to level N . This algorithm will be made rigorous in the following sections. An illustration of the idea for k = 2 is given below in Figure 1.1,

BRANCHED SIGNATURE MODEL 4
Xt : Data X ̄ t S2
l (X ̄ )0t S2
l(m) S2
l(m−1) . . . S2
l(1) X ̄ 0t 0t 0t
Ψ S2
l (·) S2
l (·)
Figure 1.1. Application of Level 2 signature model on extended path X ̄
where we denote S2
l(1)(X)0t as the second-level signature model paths for the extended path X ̄ t
and denote l(i) as the i-th layer signature basis coefficients for i = 1, · · · , m. By repeating such second-level signature map m times, we can reach the desired level N signature model with much lower dimension complexity. The paper is organized as follows. In Section 2, we introduce the necessary preliminaries for signature and branched signature models. In Section 3, we establish the universal approximation property for branched signature models, and an iterative version of the branched signa-
ture approximation. In Section 4, we provide a constructive method to construct the extended path X ̄ (t) using the map Ψ and provide explicit examples. In Section 5, we apply our branched signature model to calibrate the stochastic volatility model with a mixture of Brownian motion and fractional Brownian motion.
2. Preliminaries
To keep the manuscript self-contained, let us introduce some terminology, discuss the relevant algebraic structures, and define the geometric and non-geometric(branched) rough paths. As we are working with d−dimensional paths, so we consider the set of underlying letters to be S = {1, 2, . . . , d} and we call this the alphabet set. Also, we define a word w of length |w| = n to be a sequence w = w1w2 . . . wn where wi ∈ S for i = 1, 2, . . . , n. With this, we denote W to be the set of all words a-
nd Wn to be the set of all words of length n. Also, for n = 0 we define W0 to be the set with empty word ∅ . We denote the vector space generated by W as V(S) defined as follows
V(S) =
(
χ=
X
w∈W
cww|cw ∈ R, cw ̸= 0 for finitely many w ∈ W
)
.
We also define the concatenation of two words w = w1w2 . . . wn and w′ = w′1w′2 . . . w′m to be
ww′ = w1w2 . . . wnw′1w′2 . . . w′m.
Definition 2.1. The set V(S) endowed with product defined as the concatenation of words is a non-commutative algebra.
In the next subsection, we will define signature of a path and discuss its key properties. Though the signature of path is defined by using the idea of alphabet and words that we introduced earlier, yet we define another more general algebraic structure where signature actually lives. Firstly, we define the extended tensor algebra over Rd to be the space
T ((Rd)) =
∞
Y
n=0
(Rd)⊗n = {v = (v0, v1, . . . , vn, . . . ) | vn ∈ (Rd)⊗n, n = 0, 1, . . . },
where (Rd)⊗0 := R. Another space, closely related to this one and the one generated by words in tensor algebra over Rd that is defined as
T (Rd) =
∞
M
n=0
(Rd)⊗n = {v ∈ T ((Rd)) | ∀ v ∃ K ∈ N such that vn = 0 ∀ n ≥ K}.
Also, the truncated tensor algebra over Rd is defined as
T N (Rd) :=
n
v ∈ T (Rd) | vn = 0 ∀ n > N
o
.

BRANCHED SIGNATURE MODEL 5
It can be easily shown that V(S) can be viewed as space of linear functionals on extended tensor algebra T ((Rd)) that is
V(S) ∼= T ((Rd))∗.
2.1. Signature and its properties. Corresponding to a word w = w1 . . . wn in W ⊊ V(S) we have the following definition
Definition 2.2. The signature of a continuous Rd-valued path of bounded variation (Xt)t∈[0,T ] is
the T ((Rd))-valued process (s, t) ∈ ∆2
T 7→ Sig(X)st ∈ T ((Rd)) whose component corresponding to each word w = w1 . . . wn ∈ W is defined as
⟨Sig(X)st, w⟩ :=
Zt
s
Z tk
s
···
Z t2
s
dXw1
t1 · · · dXwn
tn ,
where ∆2
T := {(s, t) ∈ [0, T ]2 : 0 ≤ s ≤ t ≤ T }. Similarly, for an empty word ∅ we define ⟨Sig(X)st, ∅⟩ := 1. To be precise, the signature can be identified as an infinite dimensional object given as
Sig(X)st = 1,
Zt
s
dXrwi ,
Zt
s
Z r2
s
dXrw1i dXrw2j ,
Zt
s
Z r3
s
Z r2
s
dXrw1i dXrw2j dXrw3k , · · ·
wi,wj ,wk,···∈S
.
Furthermore, the level N truncation of the signature is given as below
SigN (X)st =
X
w∈W:|w|≤N
⟨Sig(X)st, w⟩ew,
where ew is a basis element of T ((Rd)).
Notation: Throughout, for s = 0 we employ the following convention Sig(X)0t = Sig(X)t and SigN (X)0t = SigN (X)t.
Remark 2.3. For a path of bounded 1-variation, all iterated integrals can be defined in the sense of Riemann–Stieltjes integration. For a path of bounded p-variation with p ∈ (1, 2], integrals can be defined in the sense of Young. However, for a path of bounded p-variation with p > 2, integrals cannot, in general, be defined using either Riemann–Stieltjes or Young integration. In such cases, the existence and interpretation of the integral depend on the nature of the path itself. For detailed cons-
tructions, see [Friz and Victoir, 2010].
Remark 2.4. As two foundamental examples, Brownian motion has bounded p-variation for all p > 2, yet integration with respect to it can be defined in the Itô or Stratonovich sense. Similarly, for fractional Brownian motion with Hurst parameter H ∈ (0, 1), integration can be formulated in the Skorohod (or divergence) sense (see [Biagini et al., 2008])using tools from Malliavin calculus. Unless otherwise stated, we will be working throughout with α-Hölder paths for any α > 0 as fractional Brownian m-
otion with Hurst parameter H is α-Hölder for α = H − ε for arbitrarily small ε > 0. But, for the purpose of construction of the rough path and corresponding topology we may restrict ourselves to α > 1
4 sometimes.
Let us discuss some properties of the signature of a bounded p-variation path, as α-Hölder paths have bounded p-variation for p > ⌊ 1
α ⌋. These properties are not universal i.e., they may fail to hold for arbitrary p or depending on the definition of iterated integrals. For instance, one such property is an extension of the classical integration by parts formula, which does not hold when the path is a Brownian motion and the iterated integrals are defined in the Itô sense. To formalize this integration by parts property in the context of bounded variation paths, we introduce the shuffle product on set of words W. This product a-
lso encodes the algebraic structure of the space T ((Rd)) using its basis elements ew corresponding to each word w.

BRANCHED SIGNATURE MODEL 6
Definition 2.5. For two words w = w1 . . . wn and w′ = w′1 . . . w′m, the shuffle product are defined recursively as follows
w ∅ = ∅ w = w, and
w w′ = (w1 . . . wn−1) w′ wn + w (w′
1 . . . w′
m−1) w′
m,
where ∅ is an empty word.
Similarly, we define the shuffle product of the basis elements of T (Rd) by setting ew = ew1 ⊗ · · · ⊗
ewn. Thus, for any two u, v ∈ T (Rd) we have
u v=
X
|w|,|w′|≥0
uwvw′ (ew ew′ ).
Following the above definition, if we endow the space T (Rd) with the shuffle product then the quadruple T (Rd), +, ·, is an associative algebra. The shuffle product plays a crucial role in encoding the multiplicative structure of the signature. In particular, it allows us to express products of iterated integrals as linear combinations of other iterated integrals. This leads to the following fundamental identity satisfied by the signature of a bounded variation path, known as the shuffle property-
.
Definition 2.6 (Shuffle Property). [Lyons et al., 2007] Let (Xt)t∈[0,T ] be a continuous Rd-valued path of bounded variation and w = w1 . . . wn and w′ = w′1 . . . w′m be two words then
⟨Sig(X)st, w⟩⟨Sig(X)st, w′⟩ = ⟨Sig(X)st, w w′⟩.
Remark 2.7. Shuffle property also holds when the path is of bounded p-variation for p ≤ 2 and integrals are defined in Young’s sense. It is also valid for Brownian motion and fractional Brownian motion with Hurst H > 1
4 when integrals are defined in the Stratonovich sense.
We now illustrate how the shuffle property reduces to the classical integration by parts identity when |w| = 1 and |w′| = 1.
Example 2.8 (Integration by parts). For a continuous Rd-valued path (Xt)t∈[0,T ] with X0 = 0 and for wi, wj ∈ {1, 2, · · · , d} integration by parts property is
Xwi
T Xwj
T=
ZT
0
Xwi
t dXwj
t+
ZT
0
Xwj
t dXwi
t.
Therefore,
⟨Sig(X)T , wi⟩⟨Sig(X)T , wj⟩ = ⟨Sig(X)T , wi ⊗ wj⟩ + ⟨Sig(X)T , wj ⊗ wi⟩ = ⟨Sig(X)T , wi wj⟩
Hence, integration by parts appears as a special case of the shuffle property. In addition to this, the signature of a R-valued path also resembles the structure of the Taylor series basis, as we discuss next.
Example 2.9. For a continuous R-valued path of bounded variation (Xt)t∈[0,T ], we have ⟨Sig(X)T , w1⟩ = XT − X0. Using the identity
w1 · · · w1
| {z }
k-times
= k! w1 . . . w1,
we can deduce that
Sig(X)T = 1, XT − X0, 1
2! (XT − X0)2, 1
3! (XT − X0)3, · · · , 1
k! (XT − X0)k, · · · .
Remark 2.10. The statement holds again when paths and integrals are defined as in Remark 2.7 concerning the shuffle product.

BRANCHED SIGNATURE MODEL 7
The signature of a data stream is defined as the signature of the piecewise linear interpolation between its data points. From a computational standpoint, this means we compute the signature over each small interval between consecutive data points. To obtain the signature over longer intervals, we iteratively apply a fundamental algebraic rule known as Chen’s identity, which describes how to combine signatures over adjacent intervals. We now formally state this identity.
Proposition 2.11 (Chen’s Identity). [Friz and Victoir, 2010] Let (Xt)t∈[0,T ] be a continuous, Rdvalued path of bounded variation. Then, the concatenated signature over intervals [s, u] and [u, t] satisfies
Sig(X)st = Sig(X)su ⊗ Sig(X)ut,
for each 0 ≤ s ≤ u ≤ t ≤ T . This identity can be equivalently expressed as follows:
⟨Sig(X)st, w⟩ =
X
w1w2=w
⟨Sig(X)su, w1⟩⟨Sig(X)ut, w2⟩,
where w is an arbitrary word from W.
Furthermore, speaking naively, if two functions are equal then their integrals are equal too but the converse is not true in general. Same is true in the case of signatures that is if two paths are equal then their signatures are equal too but the converse is not true in general. However, if the signatures of two paths are equal then the paths are equal up to tree-like equivalence [Hambly and Lyons, 2010]. But for the universal approximation theorem we need paths to be equal in a more restrictive -
sense. To acquire this result, we enhance the path X : [0, T ] → Rd with an additional time component and denote it by Xb : [0, T ] → Rd+1 defined by Xb := (t, X). With this we have the following result.
Lemma 2.12 (Uniqueness of the classical signature). Let X, Y : [0, T ] → Rd be continuous αHölder paths with X0 = Y0 = 0 for some α > 1
4 . Form the time-augmented paths Xb (t) := (t, Xt)
and Yb (t) := (t, Yt) in R1+d. Assume their (geometric) terminal signatures coincide at all levels i.e.,
Sig(Xb )0,T = Sig(Yb )0,T .
Then Xt = Yt for all t ∈ [0, T ].
Proof. Fix a spatial index i ∈ {1, . . . , d} and set Z := Xi − Yi, a continuous α-Hölder function with Z0 = 0. We use the family of signature coordinates of the time-augmented path that contain exactly one spatial letter. Clearly, for every k, m ∈ N ∪ {0},
Sig(Zb)0,T , 0k i 0m = 1
k! m!
ZT
0
s k(T − s) m dZs, (2.1)
where the integral is defined in the Young’s sense. This is trivial when Z is smooth; for general α-Hölder Z, take smooth approximations Zn → Z in Cα, use the classical identity for Zn, and pass to the limit: the map Z 7→ R sk(T − s)m dZ is continuous in Cα, and the one-spatial-letter signature
coordinates are defined by the same limiting procedure. By the hypothesis Sig(Xb )0,T = Sig(Yb )0,T , identity (2.1) applied to Z = Xi − Yi yields, for all k, m ≥ 0,
ZT
0
s k(T − s) m dZs = 0. (2.2)
Now choose m = 1 and k ≥ 0, and set φk(s) := s k(T − s). Since φk ∈ C1 and Z ∈ Cα with α > 0, Young integration by parts gives
ZT
0
φk dZ = φk(T )ZT − φk(0)Z0 −
ZT
0
Z(s) φ′
k(s) ds = −
ZT
0
Z(s) φ′
k(s) ds,
because φk(T ) = 0 and Z0 = 0. By (2.2) (with m = 1), the left-hand side vanishes, so for every k ≥ 0,
ZT
0
Z(s) φ′
k(s) ds = 0. (2.3)

BRANCHED SIGNATURE MODEL 8
Note φ′
k(s) = kT sk−1 − (k + 1)sk is a polynomial with φ′0(s) = −1. We claim that the linear span
of {φ′
k}k≥0 is the space of all polynomials on [0, T ]. Hence (2.3) implies
ZT
0
Z(s) p(s) ds = 0, for every polynomial p.
Polynomials are dense in C([0, T ]), and the map p 7→ R T
0 Zp is continuous in the sup-norm, so
ZT
0
Z(s) ψ(s) ds = 0, for every ψ ∈ C([0, T ]).
Taking ψ = Z gives R T
0 |Z(s)|2 ds = 0, hence Z ≡ 0 on [0, T ]. Since this holds for each component i, we conclude X ≡ Y. □
Finally, we state the universal approximation theorem (UAT) based on classical signature. The main idea of UAT is to approximate the quantity of the form
f (Sigp(Xb )t)t∈[0,T ] ,
for some p, where f is a continuous function, by a linear functional on the full signature, i.e., a quantity of the form ⟨Sig(Xb )T , l⟩, where l ∈ T (Rd). Let us state and prove the theorem.
Theorem 2.13 (UAT for classical signatures of time-extended α-Hölder paths). Let α > 1
4 be the
Hölder regularity of the path X, set p = ⌊1/α⌋. Let Gp(R1+d) be the step-p nilpotent Lie group over the alphabet S = {0, 1, . . . , d} (with 0 the time letter), and write ⟨·, ·⟩ for the pairing with words of length from W. Define
S(p) :=
n
Sigp(Xb )t∈[0,T ] : X ∈ Cα([0, T ]; Rd)
o
⊂ C [0, T ], G(p)(R1+d) .
Let H ⊂ S(p) be compact and f : H → R continuous. Then for every ε > 0 there exists l ∈ T p(R1+d) such that
sup
(Sigp(Xb )t)t∈[0,T ]∈H
f (Sigp(Xb )t(t∈[0,T ] − ⟨Sig(Xb )T , l⟩ < ε.
Proof. Consider the set
G := span
n
⟨Sig(Xb )T , w⟩, w is a word from W
o
.
Then G is a unital subalgebra i.e., the empty word gives the constant 1, and for words u, v the shuffle identity yields
⟨Sig(Xb )T , u⟩⟨Sig(Xb )T , v⟩ = ⟨Sig(Xb )T , u v⟩ ∈ G.
Also, G vanishes nowhere because ⟨Sig(Xb )T , ∅⟩ ≡ 1. Finally, G separates points i.e., for any two αHölder paths Xb and Yb with Xb ̸= Yb implies ⟨Sig(Xb )T , w⟩ ̸= ⟨Sig(Yb )T , w⟩ for any word w ∈ W. On contrary, suppose ⟨Sig(Xb )T , w⟩ = ⟨Sig(Yb )T , w⟩ then by uniqueness of Lyon’s lift [Theorem 9.5 (i) [Friz and Victoir, 2010]] ⟨Sigp(Xb )t, w⟩ = ⟨Sigp(Yb )t, w⟩ for any t ∈ [0, T ], because paths of Hölder regularity α have bounded p-variation for p > ⌊ 1
α ⌋. Furthermore, if ⟨Sig(Xb )T , w⟩ = ⟨Sig(Yb )T , w⟩
then Xb t = Yb t for any t ∈ [0, T ] by the uniqueness of the signature from Lemma 2.12, which is a contradiction to original claim. Therefore G separates points. Hence, the claim follows by StoneWeierstrass theorem. □
The next subsection provides a brief formal introduction to geometric rough paths. We keep this discussion very brief and then proceed to define branched rough paths in the forthcoming subsection, explore their various properties, introduce the corresponding algebraic structure, and present illustrative examples.

BRANCHED SIGNATURE MODEL 9
2.2. Geometric Rough Path. Having introduced some basic notions related to the path X and its signature, which is an infinite dimensional object comprising the iterated integrals of the path X in an increasing order, it’s time to introduce geometric rough path as given by [Hairer and Kelly, 2015]. Theoretically, a rough path is an infinite dimensional object. But, in practice, only finitely many components of rough path actually matter. Let X be an α−Hölder path and let N be the largest integer su-
ch that N α ≤ 1, then the components of the path with degree n > N can be determined by those of degree n ≤ N [see e.g. [Friz and Victoir, 2010] Theorem 9.5]. With this, we formally define a geometric rough path as follows.
Definition 2.14. A map SigN (X) : [0, T ] × [0, T ] → T (Rd) of regularity α is said to be a (weakly-) geometric rough path (GRP) if it satisfies:
(1) ⟨SigN (X)st, w w′⟩ = ⟨SigN (X)st, w⟩⟨SigN (X)st, w′⟩, for each w, w′ ∈ W, (2) SigN (X)st = SigN (X)su ⊗ SigN (X)ut,
(3) sup
s̸=t
⟨SigN (X)st,w⟩
|t−s|α|w| < ∞, for every w ∈ W with |w| ≤ N .
Remark 2.15. We adopt the same notation for signature and the geometric rough path that is SigN (X) to talk about rough path and signature interchangeably as up to level N there is no difference in rough path and signature.
Remark 2.16. The geometric rough path lives in the Lie group (G(Rd), ⊗)), which is called the free nilpotent group with the tensor product being the group multiplication. This free nilpotent group G(Rd) is defined as
G(Rd) := exp g(Rd) ,
where g(Rd) ⊂ T (Rd) is the formal Lie series of Rd.
As an illustration, for one-dimensional Brownian motion B, the Stratonovich lift gives rough path
Sig2(B)st = 1,
Zt
s
◦dBr ,
Zt
s
Zv
s
◦dBu ◦ dBv .
By integration by parts,
⟨Sig2(B)st, w1⟩2 = 2
Zt
s
Br ◦ dBr = 2⟨Sig2(B)st, w1w1⟩ = ⟨Sig2(B)st, w1 w1⟩,
where w1 = 1, so the shuffle property holds. In contrast, for the Itô lift
Sig(B)st = 1,
Zt
s
dBr ,
Zt
s
Zv
s
dBu dBv ,
and Itô’s formula gives
⟨Sig2(B)st, w1⟩2 = 2
Zt
s
Br dBr + (t − s) = 2⟨Sig2(B)st, w1w1⟩ + (t − s),
which differs from ⟨Sig2(B)st, w1 w1⟩. Hence, the Stratonovich integral yields a geometric rough path, whereas the Itô integral does not.
2.3. Branched Rough Path. Geometric rough path, though not encompassing Brownian motion with Itô integrals, enjoys many good properties and has many applications in finance, machine learning and data science. And these all applications are due to universal approximation theorem (UAT) which can equivalently be stated that any continuous function of the path or signature can be approximated well by linear combination of the components of the signature that is
f (Sig(X)st) ≈
X
w∈W
aw⟨Sig(X)st, w⟩,
where w ∈ R. For the function f (x) = x2 and an Rd-valued path X

BRANCHED SIGNATURE MODEL 10
f (⟨Sig(X)st, wi⟩) = ⟨Sig(X)st, wi⟩2 = ⟨Sig(X)st, wiwi⟩ + ⟨Sig(X)st, wiwi⟩, where wi ∈ {1, . . . , d}.
Similarly,
Zt
s
⟨Sig(X)su, wi⟩⟨Sig(X)su, wj⟩dXuwk = ⟨Sig(X)su, w⟩ + ⟨Sig(X)st, w′⟩,
where w = wiwjwk and w = wjwiwk. On the other hand, if the rough path is not geometric then we do not have such an equality. Also, we know that the geometric rough path lives in the nilpotent Lie group which is associated with the tensor algebra over Rd. While non-geometric (branched) rough path lives in a more general Lie group induced by the Connes-Kreimer Hopf algebra of rooted trees. To discuss this in detail, let us encode the components of the rough path into something different than classic-
al tensor algebra i.e. rooted tree structure. For example the following integral is encoded as
Zt
s
Zu
s
dXi
r
Zu
s
dXj
r dXk
u =: ⟨BSigN (X)st, k
i j⟩,
where instead of words we will be using the trees to define the components of the signature/rough path and the vertices of the trees will be decorated from the alphabet set S = {1, 2, . . . , d}. In general, for a rooted tree h
⟨BSigN (X)st, h⟩ =
Zt
s
⟨BSigN (X)su, h′⟩dXr
u,
where r is the root of tree h and h′ is the tree that we get after removing root from h.
Remark 2.17. The adoption of the notation BSigN (X) instead of SigN (X) is to differentiate between geometric and branched rough path and signature.
The tree structure gives rise to a space called the Connes-Kreimer Hopf algebra of rooted trees T which is a Hopf algebra of labelled, rooted trees with labels coming from the set {1, · · · , d}. This special Hopf algbra is used in [Connes and Kreimer, 1999] in the context of renormalization theory. To be precise, a Hopf algebra is a vector space equipped with a product
· : H ˆ⊗H → H ,
and a coproduct
∆ : H → H ˆ⊗H .
This product is the usual commutative product of polynomial where each tree in T is considered a monomial. The coproduct ∆ is the dual of the convolution product ⋆ which is nothing but all the ways to cut apart a tree like the deconcatenation coproduct of tensors as given by [Manchon, 2008]. A detailed introduction to Hopf algebra and the corresponding properties will be given later. Let’s define precisely what a branched rough path is as a reiteration of the definition given by [Gubinelli, 2010].
Definition 2.18. An α−Hölder map BSigN (X) : [0, T ] × [0, T ] → H ∗(the graded dual of H ) is said to be a branched rough path if it satisfies the following three properties:
(1) ⟨BSigN (X)st, h1h2⟩ = ⟨BSigN (X)st, h1⟩⟨BSigN (X)st, h2⟩, for every h1, h2 ∈ H . (2) BSigN (X)st = BSigN (X)su ⋆ BSigN (X)ut or equivalently ⟨BSigN (X)st, h⟩ =
P
(h)
⟨BSigN (X)su, h(1)⟩⟨BSigN (X)ut, h(2)⟩, where ∆h = P
(h)
h(1) ˆ⊗h(2) and h ∈ H .
(3) sup
s̸=t
⟨BSigN (X)st,h⟩
|t−s|α|h| < ∞, for every h ∈ H , where |h| is the degree of h.
We first recall the definition of a Hopf algebra and then specialize to the Connes–Kreimer Hopf algebra of rooted trees, which is the structure we need for branched rough paths.

BRANCHED SIGNATURE MODEL 11
2.4. Hopf Algebra. Since a Hopf algebra is a special case of a bialgebra, we begin by defining bialgebras. Consider vector spaces H and H ∗ with units 1 and 1∗, products · : H ˆ⊗H → H and ⋆ : H ∗ ˆ⊗H ∗ → H ∗ respectively. H ∗ is considered as the dual space of H where the action of functional is defined as ⟨·, ·⟩ : H ∗ ˆ⊗H → R. The structure of H ∗ can be superimposed to that of H using the coproduct ∆ defined as
⟨f ⋆ g, h⟩ = ⟨f ˆ⊗ g, ∆h⟩,
where f, g ∈ H ∗, h ∈ H , and ∆h = P
(h) h(1) ˆ⊗ h(2). We will discuss more about this coproduct later. The definition of bialgbera is given as follows
Definition 2.19. The triple (H , ·, ∆) is called a bialgebra if it satisfies the following compatibility conditions:
(1) The coproduct ∆ : H → H ˆ⊗H is an algebra homomorphism i.e., ∆(h · k) = ∆(h) · ∆(k), for all h, k ∈ H and ∆(1) = 1 ⊗ 1. (2) The counit 1∗ : H → R is an algebra homomorphism i.e., 1∗(h·k) = 1∗(h)1∗(k) for all h, k ∈ H and 1∗(1) = 1.
Moreover, the map A∗ : H ∗ → H ∗ defined by f ⋆ A∗f = A∗f ⋆ f = 1, for f ∈ H ∗ is called the inverse map. The adjoint of this map, A : H → H is called the antipode which satisfies the following relation
(Id ˆ⊗ A)∆h = (A ˆ⊗ Id)∆h = ⟨1∗, h⟩1, (2.4)
for h ∈ H and Id : H → H is the identity map.
Definition 2.20. The quadruple (H , ·, ∆, A) is called a Hopf algebra.
Furthermore, a graded bialgebra is the one that can be decomposed into the direct sum of vector spaces, i.e.:
H=
M
n∈N
H(n).
We introduce this grading to recall a fact: any graded bialgebra H with H0 = R is automatically a Hopf algebra. Moreover, every Hopf algbera has a unique antipode. For detailed discussions and examples on Hopf algebra, we refer to [Abe, 2004] and [Brouder, 2004]. Next, we will discuss an special example of Hopf algebra, which is the Connes-Kreimer Hopf Algebra of rooted trees.
2.4.1. The Connes-Kreimer Hopf Algebra of rooted trees. The Connes-Kreimer Hopf Algebra is an special example of Hopf algebra that plays a key role in the theory of branched rough paths. It will serve as our primary algebraic framework in this context. Let us define some notations and discuss main properties of this key algebraic structure. Let the set of all rooted trees (forests) with finite vertices be denoted by T (F) and that with vertices up to n be denoted by Tn (Fn). For example T1 = { } ,-
 T2 = { , } , T3 = { , , , } etc. All the trees above are undecorated but can be labeled with letters from some alphabet S = {1, 2, · · · , d}. The recursive construction of the trees is shown as follows
[1]i = i, [ i]j = ij, [ ij]k = k
ij , [ i j ]k = k
i j, etc.
Here 1 refers to the empty tree. Indeed, every tree in T can be constructed recursively as [h1h2, · · · hn]r, for h1, h2, · · · hn ∈ T ∪ 1. Furthermore, we will assume that the order of the branches in a tree does not matter i.e., [h1h2, · · · hn]r = [hσ(1)hσ(2), · · · hσ(n)]r for any permutation σ. In the case of rooted trees, the Connes-Kreimer Hopf algebra (H , ·, ∆, S) is simply the commutative polynomial algebra generated by the variables coming from the set T . It is equipped with an antipod-
e A : H → H and a coproduct ∆ : H → H ˆ⊗H . An example of an element of H is
k
j −5 j
k
ij −
√3
2i
k j. The coproduct ∆ can be recursively defined as ∆1 = 1 ˆ⊗1 and
∆[h1, · · · , hn]r = [h1, · · · , hn]r ˆ⊗1 + Id ˆ⊗[ · ]r ∆(h1, · · · , hn). (2.5)

BRANCHED SIGNATURE MODEL 12
This coproduct is a morphism with respect to polynomial multiplication i.e., ∆(h1, · · · , hn) = ∆h1 · · · ∆hn, and is coassociative i.e., (∆ ˆ⊗Id)∆ = (Id⊗ˆ ∆)∆. Moreover, the antipode A satisfies P ((A ˆ⊗Id)∆h) = P ((Id ˆ⊗A)∆h) = ⟨1∗, h⟩1, for any h ∈ H . Here P is product map i.e., P (h1 ˆ⊗h2) = h1h2.
Remark 2.21. If X is a path of bounded variation in Rd then for a tree τ = [h1, · · · , hn]a in T we can write ⟨BSigN (X)st, τ ⟩ as
⟨BSigN (X)st, τ ⟩ =
Zt
s
⟨BSigN (X)sr, h1, · · · , hn⟩dX a
r.
Remark 2.22 (Analogue of Chen’s identity for branched rough paths). For the branched rough paths, the corresponding Chen’s identity is defined thorough the coproduct. For h = a, we have
Rt
s dX a
r = Ru
s dX a
r +Rt
u dX a
r , for any 0 ≤ s ≤ u ≤ t ≤ T . For a general tree τ = [h1, · · · , hn]a, according to (2.5) and induction, we have
⟨BSigN (X)st, τ ⟩ = ⟨BSigN (X)su, τ ⟩ +
Zt
u
⟨BSigN (X)sr, h1, · · · , hn⟩dX a
r
= ⟨BSigN (X)su, τ ⟩ +
Zt
u
⟨BSigN (X)su ˆ⊗BSigN (X)ur, ∆(h1, · · · , hn)⟩dX a
r
= ⟨BSigN (X)su, τ ⟩ + ⟨BSigN (X)su⊗ˆ BSigN (X)ut, (Id ˆ⊗[ · ]a)∆(h1, · · · , hn)⟩
= ⟨BSigN (X)su ˆ⊗BSigN (X)ut, τ ⊗ˆ 1 + (Id ˆ⊗[ · ]a)∆(h1, · · · , hn)⟩
= ⟨BSigN (X)su ˆ⊗BSigN (X)ut, ∆(τ )⟩.
2.5. Geometric Realization of Branched Rough Paths. While branched rough paths possess a more intricate algebraic structure than geometric rough paths, a bridge between them can be established by employing the extension map of [Hairer and Kelly, 2015] to construct an extended geometric rough path lying above a given branched rough path. In particular, for every branched rough path BSigN (X) above a path X, there exists a geometric rough path SigN (X ̄ ) above an extended path X ̄ such that X ̄ is -
an extension of X and SigN (X ̄ ) contains the information of BSigN (X).
X BSigN (X)
X ̄ SigN (X ̄ )
Branched Rough path lift
extended to ⟨BSigN (X),τ ⟩=⟨SigN (X ̄ ),Ψ(τ )⟩
Geometric Rough path lift
In what follows, we provide a self-contained introduction to the map Ψ as shown in the above diagram. We begin by defining several key notions. Let T denote the set of rooted trees, and let Tn be the set of rooted trees with at most n vertices. We define V as the real vector space spanned by T , and Vn as the real vector space spanned by Tn. The tensor algebra generated by V is denoted
by T (V) := L∞
i=0 V⊗i, while the tensor algebra generated by Vn is denoted by T (Vn) := L∞
i=0 Vn⊗i.
Similarly, the truncated tensor algebra of order N generated by V is written as T (N)(V) := LN
i=0 V ⊗i,
and the corresponding truncated tensor algebra generated by Vn is T (N)(Vn) := LN
i=0 Vn⊗i.
Clearly, X lives in the space V1, where V1 := span{ a : a = 1, · · · , d} ∼= Rd. While X ̄ lives in VN such that ProjV1
X ̄ = X. Moreover, SigN (X ̄ ) lives in the truncated tensor product space T (N)(VN ) also defined as
T (N)(VN ) = span{h1 ⊗ · · · ⊗ hn : hi ∈ TN , 1 ≤ n ≤ N },
such that ⟨SigN (X ̄ )st, h⟩ = X ̄ th − X ̄ sh and the tensor components are understood as iterated integrals
⟨SigN (X ̄ )st, h1 ⊗ · · · ⊗ hn⟩ =
Zt
s
···
Z r2
s
dX ̄ rh11 · · · dX ̄ rhnn .

BRANCHED SIGNATURE MODEL 13
The connection between geometric and branched rough paths is built by using a morphism Ψ : (H , ·, ∆) → (T (V), ,  ̄∆). The existence of such a morphism guarantees the existence of the extended path and geometric rough path over it. It is defined as
Ψ(h) = h + Ψn−1(h), and Ψ(h1h2) = Ψ(h1) Ψ(h2) ∀ h, h1, h2 ∈ Fn,
where (H , ·, ∆) is the Hopf algebra of rooted trees, (T (V), ,  ̄∆) is the shuffle Hopf algebra on T (V). Also, Ψn−1(h) is the projection of Ψ onto T (Vn−1) and is all the ways to cut apart h. The map Ψ is equivalently defined as Ψ(h) = Ψ ˆ⊗(Id − 1∗) ∆(h) in [Bruned, 2022], where 1∗ is the co-unit. Also, an equivalent definition of the map is given in [Tapia and Zambotti, 2020] i.e., Ψ(h) = h + Ψ ˆ⊗Id ∆′h, where ∆′h is the reduced coproduct.
Example 2.23. One of the above constructions can be used to determine Ψ(h) for any rooted tree h. For h = a, Ψ( a) = a, for h = b
a, Ψ( b
a) = b
a + a ⊗ b, and for h = bca, Ψ( bca) = bca + a ⊗ bc +
b⊗ c
a + b ⊗ a ⊗ c + a ⊗ b ⊗ c.
We now state and prove the following lemma related to the existence of this morphism.
Lemma 2.24. [Hairer and Kelly, 2015] There exists a graded morphism of Hopf algebras Ψ : (H , ·, ∆) → (T (V), , ∆ ̄ ) defined as
Ψ(h) = h + Ψn−1(h), ∀ h ∈ Tn,
such that Ψ ˆ⊗Ψ ∆h =  ̄∆Ψ(h).
Proof. For n = 1 we have Ψ( a) = a which trivially satisfies Ψ ˆ⊗Ψ ∆h =  ̄∆Ψ(h). Assume the morphism is true for h with |h| = n − 1. Now, let us prove the claim for h with |h| = n. We have
 ̄∆Ψ(h) =  ̄∆ (Ψ(h1) ⊗ h2 + h)
=  ̄∆ (Ψ(h1) ⊗ h2) + h ˆ⊗1 + 1 ˆ⊗h
= (Ψ(h1) ⊗ h2) ⊗ˆ 1 + (  ̄∆Ψ(h1)) ⊗ (1 ˆ⊗h2) + h ˆ⊗1 + 1 ˆ⊗h
= (Ψ(h1) ⊗ h2 + h) ˆ⊗1 + (Ψ ˆ⊗Ψ)(∆h1) ⊗ (1 ˆ⊗h2) + 1 ˆ⊗h
= Ψ(h) ˆ⊗1 + Ψ(h1) ˆ⊗h2 + 1 ˆ⊗(Ψ(h1) ⊗ h2) + Ψ(h11) ˆ⊗(Ψ(h12) ⊗ h2) + 1 ˆ⊗h
= Ψ(h) ˆ⊗1 + 1⊗ˆ Ψ(h) + Ψ(h1) ˆ⊗h2 + Ψ(h11)⊗ˆ (Ψ(h12) ⊗ h2)
= Ψ(h) ˆ⊗1 + 1⊗ˆ Ψ(h) + Ψ(h1) ˆ⊗h2 + Ψ(h1) ˆ⊗(Ψ(h21) ⊗ h22)
= Ψ(h) ˆ⊗1 + 1 ˆ⊗Ψ(h) + Ψ(h1) ˆ⊗(h2 + Ψ(h21) ⊗ h22)
= Ψ(h) ˆ⊗1 + 1 ˆ⊗Ψ(h) + Ψ(h1) ˆ⊗Ψ(h2)
= Ψ ˆ⊗Ψ h ˆ⊗1 + 1⊗ˆ h + h1 ˆ⊗h2
= Ψ ˆ⊗Ψ ∆h.
Here transition from sixth to seventh line is by using coassociativity of the reduced coproduct (∆′ ˆ⊗Id)∆′h = (Id ˆ⊗∆′)∆′h. □
Corollary 2.25. For any h ∈ Tn we have
Ψ ˆ⊗Ψ ∆′h =  ̄∆′Ψ(h).
Proof. The corollary can be trivially proved by using the previous lemma. □
The following theorem is the main result of this section and will serve as a foundation for several results in the subsequent sections. The result was originally established in [Hairer and Kelly, 2015], and a more accessible proof was later provided in [Tapia and Zambotti, 2020]. We present the proof here, following [Tapia and Zambotti, 2020], while filling in intermediate steps that were previously omitted for clarity and completeness.
Theorem 2.26. Let X be a path in Rd and BSigN (X) be the α-Hölder continuous branched rough path. Then there exists

BRANCHED SIGNATURE MODEL 14
(1) a path X ̄ which takes values in the space VN such that ProjV1(X ̄ ) = X,
(2) an α-Hölder geometric rough path SigN (X ̄ ) taking values in T (N)(VN ) such that ⟨SigN (X ̄ )st, h⟩ = X ̄ th − X ̄ sh for each h ∈ TN ,
such that
⟨BSigN (X)st, h⟩ = ⟨SigN (X ̄ )st, Ψ(h)⟩.
Proof. Let us construct SigN (X ̄ ) iteratively. Assume SigN (X ̄ )(1) be the GRP over Xist :=
⟨BSigN (X)st, i⟩, i = 1, · · · , d. Suppose we have constructed SigN (X ̄ )(k) over the path X ̄ h such that
X ̄ th − X ̄ sh = ⟨BSigN (X)st, h⟩ − ⟨SigN (X ̄ )(k−1)
st , Ψk−1(h)⟩ for k = 1, · · · , n. This is clearly true for
n = 1. If we define Psht = ⟨BSigN (X)st, h⟩, Qsht = ⟨SigN (X ̄ )(n)
st , Ψn(h)⟩, and δPsht = Psht − Pshu − Puht. Then by Chen’s relation for h ∈ Tn+1, we have
δP h
st = ⟨BSigN (X)su ˆ⊗BSigN (X)ut, ∆′h⟩ = ⟨SigN (X ̄ )(n)
su ◦ Ψ ⊗ SigN (X ̄ )(n)
ut ◦ Ψ, ∆′h⟩.
Using the coalgebra morphism property of Ψ we have
δP h
st = ⟨SigN (X ̄ )(n)
su ⊗ SigN (X ̄ )(n)
ut ,  ̄∆′Ψ(h)⟩.
As h is a primitive element in tensor algebra so we have
δP h
st = ⟨SigN (X ̄ )(n)
su ⊗ SigN (X ̄ )(n)
ut ,  ̄∆′Ψn(h)⟩ = δQh
st.
If we set M = Psht − Qsht, then by using above equation we have δM = 0, where M : [0, 1]2 → R.
Then by using formula (5) from [Gubinelli, 2010], there exists a function X ̄ : [0, T ] → Rd such that X ̄ h = M = Psht − Qsht and
|X ̄ h
t − X ̄ h
s | ≤ |⟨BSigN (X)st, h⟩| + |⟨SigN (X ̄ )(n)
st , Ψn(h)⟩| ≲ |t − s|α|h|.
With this, we have a geometric rough path SigN (X ̄ )(n+1) over the path X ̄ h : h ∈ Tn+1 whose restriction to T (N)(VN ) is same as SigN (X ̄ )(n). Hence, for h ∈ Tn+1
⟨SigN (X ̄ )(n+1)
st , Ψn(h)⟩ = ⟨SigN (X ̄ )(|h|)
st , h⟩ + ⟨SigN (X ̄ )(|h|)
st , Ψ|h|−1(h)⟩
= X ̄ h
t − X ̄ h
s + ⟨BSigN (X)st, h⟩ − X ̄ h
t − X ̄ h
s
= ⟨BSigN (X)st, h⟩.
Finally, the geometric rough path we look for is SigN (X ̄ ) = SigN (X ̄ )(N). □
3. Branched Signature Model
In this section, we will establish the universal approximation theorem for the branched signature. Before proving the main results, we first introduce branched signature and branched signature model.
3.1. Universal approximation theorem for branched signature.
Definition 3.1 (Branched Signature). Let S = {1, . . . , d} be an alphabet of decorations for a given d-dimensional path X : [0, T ] → Rd. Denote by T the set of rooted trees with vertices decorated in S. Let H be the (decorated) Connes–Kreimer Hopf algebra generated by T , with product given by disjoint union of forests and unit 1. We define branched signature of X as a functional on H given by
BSig(X)st =
X
τ ∈ T , |τ | ≤ N
⟨BSig(X)st, τ ⟩eτ , (3.1)
where for each τ ∈ H the component ⟨BSig(X)st, τ ⟩ of the branched signature is recursively defined as
⟨BSig(X)st, 1⟩ = 1, and ⟨BSig(X)st, τ ⟩ =
Zt
s
⟨BSig(X)su, τ ′⟩dxr
u,
where r is the root of τ and τ ′ is the tree we get after removing root r from τ .

BRANCHED SIGNATURE MODEL 15
Remark 3.2. The branched signature of a path X is the unique multiplicative extension of a branched rough path, as shown in [Gubinelli, 2010]; this mirrors the classical unique extension of a geometric rough path to its signature [Friz and Victoir, 2010].
In the classical/geometric setting, the universal approximation theorem for rough paths states that any continuous function of the path can be well-approximated by a linear combination of the iterated integrals i.e., the components of the classical signature. Formally,
f (X) ≈
X
w ∈ W, |w| ≥ 0
aw⟨Sig(X), w⟩,
where w is a word made from the alphabet set S = {1, 2, . . . , d} and aw ∈ R. For the non-trivial empty word w = ∅, |w| = 0 and ⟨Sig(X), ∅⟩ = 1. A similar result for branched signature would ensure that any continuous function of the path can be well-approximated using the components of the branched signature i.e.,
f (X) ≈ lφ +
X
1≤|τ |≤N
lτ ⟨BSig(X)st, τ ⟩,
for all τ ∈ H . With this, we formally define the branched signature model as follows.
Definition 3.3 (Branched signature and model). Let H be the (decorated) Connes–Kreimer Hopf algebra generated by rooted trees whose vertices are decorated by S = {1, . . . , d} and F for the set of rooted forests, with product given by disjoint union and unit 1 (the empty forest). Denote the subspace H≤N := span{τ ∈ F : |τ | ≤ N }. Then for coefficients l = l11 + P
1≤|τ |≤N lτ τ ∈ H≤N ,
the branched signature model (truncated to level N ) for a d-dimensional path X : [0, T ] → Rd is the linear functional of the branched signature i.e.,
MN
l (X)st := BSig(X)st, l = l1 +
X
1≤|τ |≤N
lτ BSig(X)st, τ . (3.2)
An example of branched signature model for N = 2 is given as follows.
Example 3.4. For N = 2 the branched signature model is given as
M2
l (X)st = l1 +
X
i∈S
l i⟨BSig(X)st, i⟩ +
X
j,k∈S
l j k ⟨BSig(X)st, j k⟩ + l
k
j ⟨BSig(X)st, k
j⟩ .
Equivalently,
M2
l (X)st = l1 +
X
i∈S
li
Zt
s
dX i
r1 +
X
j,k∈S
lj k
Zt
s
dX j
r1
Zt
s
dX k
r1 + l
k
j
Zt
s
Z r2
s
dX j
r1 dX k
r2 .
We begin by stating and proving a uniqueness principle for branched signatures, needed for our universal approximation theorem. In general, equality of branched signatures implies equality of paths modulo tree-like equivalence. For time-extended paths, however, the monotone time component rules out nontrivial tree-like loops, so equality of branched signatures actually forces equality of the paths themselves. Therefore, let us work with time extended paths from now on. The iterated integrals with -
a component of time can be defined in the sense of Young’s.
Lemma 3.5 (Uniqueness of the branched signature). Let X, Y : [0, T ] → Rd+1 be two time extended paths with the first component to be the time component and X0 = Y0 = 0. The corresponding alphabet set is S = {0, 1, . . . , d}, Let X−, Y− : [0, T ] → Rd be the paths without time component and are continuous α-Hölder paths for some α > 1
4 . Assume their branched terminal signatures coincide at all levels i.e.,
BSig(X)0,T = BSig(Y)0,T .
Then Xt = Yt for all t ∈ [0, T ].

BRANCHED SIGNATURE MODEL 16
Proof. Fix a spatial index i ∈ S\{0} and set Z := Xi − Yi, a continuous α-Hölder path with Z0 = 0. We use the family of signature coordinates of the path that contain exactly one spatial letter. Consider for every k, m ∈ N ∪ {0}, τ = [[[τ ̃ ]0] . . . ]0
| {z }
m-times
with τ ̃ = [[[i ]0] . . . ]0
| {z }
k-times
,
BSig(Z)0,T , τ = 1
k! m!
ZT
0
s k(T − s) m dZs, (3.3)
where the integral is defined in the Young’s sense. This is trivial when Z is smooth; for general α-Hölder Z, take smooth approximations Zn → Z in Cα, use the classical identity for Zn, and pass to the limit: the map Z 7→ R sk(T − s)m dZ is continuous in Cα, and the one-spatial-letter signature coordinates are defined by the same limiting procedure. By the hypothesis BSig(X)0,T = Sig(Y)0,T , identity (3.3) applied to Z = Xi − Yi yields, for all k, m ≥ 0,
ZT
0
s k(T − s) m dZs = 0. (3.4)
Beyond this point the proof is similar to the uniqueness of the classical signature. □
Let us state and prove universal approximation theorem for branched signature model now.
Theorem 3.6 (UAT for branched signatures of time-extended α-Hölder paths). Let α > 1
4 and set p = ⌊1/α⌋. Let H≤p be the Connes–Kreimer Hopf algebra of rooted (time/space–decorated) trees truncated at degree p, and let B(p)(R1+d) denote its character group (the step-p Butcher group) over the alphabet S = {0, 1, . . . , d}, where 0 is the time letter. Write ⟨·, ·⟩ for the canonical pairing between B(p)(R1+d) and H≤p. For a path X : [0, T ] → Rd+1 such that d-dimensional path without time component X− is α-Hölder i.e., X− ∈ Cα([0, T ]; Rd), define
S(p) :=
n
BSigp(X)t t∈[0,T ] : X− ∈ Cα([0, T ]; Rd)
o
⊂ C [0, T ], B(p)(R1+d) .
Let H ⊂ S(p) be compact and f : H → R continuous. Then for every ε > 0 there exists h ∈ H such that
sup
(BSigp(X)t)t∈[0,T ]∈H
f (BSigp(X)t)t∈[0,T ] − ⟨BSig(X)T , h⟩ < ε.
Proof. Consider the set
G := span
n
(BSigp(X)t)t∈[0,T ] 7→ ⟨BSig(X)T , h⟩ : h ∈ H
o
⊂ C(H).
Then G is a unital subalgebra; the constant 1 corresponds to h = 1 (empty forest) i.e., ⟨BSig(X)T , 1⟩ = 1 , and for h1, h2 ∈ H , ⟨BSig(X)T , h1⟩⟨BSig(X)T , h2⟩ = ⟨BSig(X)T , h1h2⟩ ∈ G, since BSigp(X)T ∈ B(p)(R1+d) is a character on H . Finally, G separates points i.e., for any two paths X and Y with X ̸= Y implies ⟨BSig(X)T , h⟩ ̸= ⟨BSig(Y)T , h⟩ for any word h ∈ H . On contrary, suppose ⟨BSig(X)T , h⟩ = ⟨BSig(Y)T , h⟩, then by uniqueness of branched rough
path lift [Gubinelli, 2010], ⟨BSigp(X)t, h⟩ = ⟨BSigp(Y)t, h⟩ for any t ∈ [0, T ]. Furthermore, if ⟨BSig(X)T , h⟩ = ⟨BSig(Y)T , h⟩ then Xt = Yt for any t ∈ [0, T ] by the uniqueness of the signature by Theorem 3.5, which is a contradiction to original claim. Therefore G separates points. Hence, the claim follows by Stone-Weierstrass theorem. □
Every component of a branched rough path BSig(X) is identified with the corresponding component of geometric rough path i.e., Sig(Ψ(X)), where Ψ is Hairer-Kelly morphism. Therefore, we have the following version of the universal approximation theorem for branched signatures.
Corollary 3.7. Let α > 1
4 and set p = ⌊1/α⌋. For a path X : [0, T ] → Rd+1 such that its d
dimensional components without time component X− is α-Hölder, i.e. X− ∈ Cα([0, T ]; Rd), and we

BRANCHED SIGNATURE MODEL 17
define S(p) as before. Let H ⊂ S(p) be compact and f : H → R continuous. Then for every ε > 0, there exists h ∈ H such that
sup
(BSigp(X)t)t∈[0,T ]∈H
f (BSigp(X)t)t∈[0,T ] − ⟨Sig(X)T , Ψ(h)⟩ < ε.
3.2. Iterative application of signature model. Evaluating the classical signature of a path up to a fixed level N is computationally expensive, especially for large N , even when using optimized software packages such as iisignature [Reizenstein and Graham, 2018] or signatory [Kidger and Lyons, 2020]. To address this computational challenge, we adopt an approach based on the iterative application of signature models of lower degree. This iterative procedure allows us to approximate the signature m-
odel of a higher degree N by composing models of smaller depth k, and can naturally be interpreted as stacking layers in a neural network. In this interpretation, the coefficients of the signature models serve as the parameters that can be learned. To begin with, we will show that every component of the higher order signature model (say N ) can be expressed as a lower level signature (say m < N ) applied to some lower order signature model (say k < N ). The following result formalizes the validity-
 of this approach.
Lemma 3.8. Let X : [0, T ] → Rd be a path for which some which a geometric rough path lift is well defined. For 0 < s < t < T , define its classical signature model (truncated to level N ) as
SN
l (X)st := Sig(X)st, l = l∅ +
X
1≤|w|≤N
lw Sig(X)st, w , (3.5)
where w is a word from the alphabet set S = {1, 2, . . . , d}. For k < N , denote m := ⌈N/k⌉ be the integer part. Define the path Φt by Φt := Sk
l (X)st i.e., the classical signature model truncated to level
k. Then, every component of the level-N signature model SN
l (X)st can be recovered by the level-m signature applied to Φt. Consequently, any level-N signature model of the path X can be exactly replicated by a level-m signature model of the path Φt.
Proof. For all t ∈ [0, T ] and s ≤ t, Φt is a one dimensional path i.e., Φt : [0, T ] → R and is defined as
Φt := Sk
l (X)st = l∅ +
X
1≤|w|≤k
lw Sig(X)st, w .
For any word v = v1v2 . . . vm with vi = 1, i = 1, 2, . . . , m, the component of the signature of Φt corresponding to v i.e., ⟨Sig(Φt)st, v⟩ is given as
⟨Sig(Φt)st, v⟩ =
Zt
s
Z rm
s
···
Z r2
s
dΦrv11 . . . dΦrvm m .
Since each vi = 1, therefore using the identity 1 · · · 1
| {z }
m-times
= m! 1 . . . 1, the right hand side becomes
⟨Sig(Φt)st, v⟩ = (Φt−Φs)m
m! . Substituting the expression for Φt gives
⟨Sig(Φt)st, v⟩ =
l∅ + P
1≤|w|≤k lw Sig(X)st, w
m
m! .
The right hand side again can be expanded using the binomial theorem to get
⟨Sig(Φt)st, v⟩ = lm
∅ + mlm−1
∅
X
1≤|w|≤k
lw Sig(X)st, w
+ m(m − 1)
2! lm−2
∅


X
1≤|w|≤k
lw Sig(X)st, w


2
+···+


X
1≤|w|≤k
lw Sig(X)st, w


m
.

BRANCHED SIGNATURE MODEL 18
The very last term of the expansion i.e., P
1≤|w|≤k lw Sig(X)st, w
m
can be expanded by using
a multinomial expansion formula. The highest degree term observed is ⟨Sig(X)st, w m. Using
geometric property of the signature we get ⟨Sig(X)st, w m = ⟨Sig(X)st, w · · · w
| {z }
m-times
. Since w is a
word of length at most k, therefore w · · · w is a word with length at most km that is |w · · · w| ≤
km = k⌈N/k⌉, and hence |w · · · w| ≤ N . Also, since the term P
1≤|w|≤k lw Sig(X)st, w
m
covers all possible products with different words w1, . . . , wm of each length k, therefore w1 · · · wm is a word of the all possible choices from the alphabet set S with length km. This concludes that if |v| ≤ m, then any component of the level-N signature model SN
l (X)st can be recovered by the
level-m signature applied to level-k signature model Sk
l (X)st for any k < N and m = ⌈N/k⌉. □
Corollary 3.9. For a given a path X : [0, T ] → Rd, its level-N signature model SN
l (X)st can be fully replicated by applying level-k signature model m-times i.e.,
SN
l (X)st = Sk
l(m) Sk
l(m−1) . . . Sk
l(1) (X)st st st
,
where m ≥ ⌈ ln N
ln k ⌉.
Proof. Applying the level-k signature model on the signature path recovered from a signature model of level-k, we recover such a model of level-k2 by Lemma (3.8). Repeating this process m times gives signature model of level-km. We want km ≥ N which gives m ≥ ⌈ ln N
ln k ⌉ whenever k > 1. □
A direct analogue of Lemma (3.8) (which relies on the shuffle product algebra) does not hold for the branched signature model. The shuffle property, fundamental to the classical signature, breaks down for the non-geometric rough paths captured by the branched signature. Consequently, composing branched signature operators behaves differently. While applying a level-k classical signature operator twice effectively creates a level-k2 feature set, applying a level-k branched signature operator to the-
 path generated by another level-k branched operator does not necessarily replicate all features up to level k2. Instead, due to the non-geometric nature and the specific algebraic structure (related to the Connes-Kreimer Hopf algebra), such composition primarily extends the captured dependencies incrementally, one each time. Reproducing the result analogous to Lemma (3.8) is not possible because branched signatures do not satisfy shuffle property. For simplification, avoiding to be too complex, w-
e restrict level of the the branched signature to be 2. The reason is to make the computation and overall complexity to be as small as possible. The following result formalizes this approach and shows additive nature of composition in the branched setting, contrasting sharply with the multiplicative effect seen in the classical case.
Lemma 3.10. Let X : [0, T ] → Rd be a path for which some notion of branched rough path exists. Let k = N − 1 be an integer and m = 2. Define the path Φt by Φt := Mk
l (X)st i.e., the branched signature model truncated to level k. Then, every component of the level-N branched signature model MN
l (X)st can be recovered by the level-m branched signature applied to Φt. Consequently, any level-N branched signature model of the path X can be exactly replicated by a level-m branched signature model of the path Φt.
Proof. The path Φt identified by the branched signature model truncated to level k is given as
Φt := MN
l (X)st = l1 +
X
1≤|τ1|≤k
lτ BSig(X)st, τ1 ,
where τ1 is a rooted forest of degree at most k. For now we will restrict ourselves to trees only not the forests as forest will involve the product terms. Consider a rooted tree τ2 of degree at most m. Since every tree is constructed recursively, so consider τ1 = [h1 · · · hp]r1 and τ2 = [l1 · · · lq]r2 with |h1 · · · hn| = k − 1 and |l1 · · · ln| = m − 1 and r1 and r2 are roots of the tree τ1 and τ2 respectively.

BRANCHED SIGNATURE MODEL 19
The component of the branched signature of level m of Φt is denoted by ⟨BSig(Φt)st, τ2⟩ with |τ2| ≤ m and is given as
⟨BSig(Φt)st, τ2⟩ =
Zt
s
⟨BSig(Φu)su, l1 · · · lq⟩dΦ r2
u . (3.6)
If we pick the highest degree component from BSig(Φt)st say BSig(X)st, τ1 with |τ1| ≤ k and set Φ(t) = ⟨BSig(X)st, τ1⟩, then dΦ(t) = ⟨BSig(X)st, h1 · · · hp⟩dX r1
t . Now, since m = 2, so let us take τ2 = ij with both i, j = 1 as the path Φt is only one dimensional. Using equation (3.6), we get
⟨BSig(Φt)st, ij⟩ =
Zt
s
⟨BSig(Φu)su, i⟩dΦ j
u
=
Zt
s
⟨BSig(X)su, τ1⟩⟨BSig(X)su, h1 · · · hp⟩dX r1
u
= ⟨BSig(X)st, [τ1h1 · · · hp]r1⟩.
Which is just an extra root r1 introduced in the branched signature of the underlying path X. Therefore, applying level-m branched signature on the branched signature path generated by level-k branched signature model only gives information up to level-(k + 1) which is N in this case. □
Corollary 3.11. For a given a path X : [0, T ] → Rd, level-N branched signature model MN
l (X)st can be exactly replicated by applying level-2 signature model N − 1-times i.e.,
MN
l (X)st = M2
l(N−1) M2
l(N−2) . . . M2
l(1) (X)st st st
.
Proof. Applying branched signature model of level-2 on the path recovered from a signature model of level-2, we recover such a model of level-2 + 1 = 3 by Lemma. (3.10). Repeating this process N − 1 times gives signature model of level-N − 1 + 1 = N . □
Computing a level-N signature in d dimensions scales as O(dN ), which is computationally intractable when d is large. By contrast, a level-2 signature costs O(d2). The lemma shows we can recover the level-N model by iterating a level-2 signature on the model path: after each step, the model is effectively one-dimensional (update cost O(d)). Repeating this N −1 times keeps the dependence on d quadratic i.e., O(d2) rather than O(dN ), making the approach especially effective for very high-dimensiona-
l data streams. The following version of universal approximation theorem extends the universal approximation theorem for branched rough paths (3.6) to this layer-wise application of branched signature model with learnable parameters.
Theorem 3.12. Let X : [0, T ] → Rd+1 be the time-extended path such that d-dimensional path without time component X− is α-Hölder i.e., X− ∈ Cα([0, T ]; Rd). Let M2
l (X)st be the level-2
branched signature model. Set s = 0 and Let M◦m
l (X)0t = M2
l(m) M2
l(m−1) . . . M2
l(1) (X)0t 0t 0t
be
the application of branched signature model m times. Define S(p) as before
S(p) :=
n
BSigp(X)t t∈[0,T ] : X− ∈ Cα([0, T ]; Rd)
o
⊂ C [0, T ], B(p)(R1+d) .
Let H ⊂ S(p) be compact and f : H → R continuous. Then for every ε > 0 there exists l such that
sup
(BSigp(X)t)t∈[0,T ]∈H
f (BSigp(X)t)t∈[0,T ] − M◦m
l (X)0T < ε,
where m is sufficiently large and l = {l(1), . . . , l(m)} is the set of learnable parameters with l(1) to be the parameters for the first model, l(2) for the second and so on.

BRANCHED SIGNATURE MODEL 20
Proof. Using Theorem (3.6) with the usual notation and let H ⊂ S(p) be compact and f : H → R continuous. Then for every ε > 0 there exists h ∈ H such that
sup
(BSigp(X)t)t∈[0,T ]∈H
f (BSigp(X)t)t∈[0,T ] − ⟨BSig(X)T , h⟩ < ε.
By Lemma (3.10) every component of the branched signature of some higher level can be replicated by iteratively applying branched signature model of level-2. Therefore,
⟨BSig(X)T , h⟩ = M2
l(m) M2
l(m−1) . . . M2
l(1) (X)0T 0T 0T
.
When m is sufficiently large. Then for any h ∈ H , ⟨BSig(X)T , h⟩ can be recovered by learning the parameters l(1), . . . , l(m). Hence, the claim follows from this. □
From a practical standpoint, there is no existing library for computing the branched signature of an arbitrary path, because the nature of the driving signal (and hence the appropriate integration rule) is typically unknown. When the underlying path is Brownian motion, the Itô iterated integrals do induce a branched signature; for a general path, this construction is not available. To address this, we follow the extension principle of Hairer–Kelly [Hairer and Kelly, 2015], recalled in Theorem 2.26-
: extend the observed data X to a higher-dimensional process X ̄ , and then apply low-order classical signature models iteratively. The next result formalizes this idea.
Theorem 3.13. Let X : [0, T ] → Rd+1 be the time-extended path such that d-dimensional path without time component X− is α-Hölder i.e., X− ∈ Cα([0, T ]; Rd). Let X ̄ be the extended path such that ⟨BSig(X), τ ⟩ = ⟨Sig(X ̄ ), Ψ(τ )⟩ for all τ ∈ H . Let Sk
l (X ̄ )st be the level-k classical signature model
applied to the extended path X ̄ . Set s = 0 and Let S◦m
l (X)0t = Sk
l(m) Sk
l(m−1) . . . Sk
l(1) (X)0t 0t 0t
be the application of signature model m times. Let the dimension of X ̄ be d ̃ and S ̃ be the alphabet set over X ̄ . Let Gp(Rd ̃) be the step-p nilpotent Lie group over the alphabet S ̃. Define S(p) as before
S(p) :=
n
BSigp(X)t t∈[0,T ] : X− ∈ Cα([0, T ]; Rd)
o
⊂ C [0, T ], B(p)(R1+d) .
Let H ⊂ S(p) be compact and f : H → R continuous. Then for every ε > 0 there exists l such that
sup
(BSigp(X)t)t∈[0,T ]∈H
f (BSigp(X)t)t∈[0,T ] − S◦m
l (X ̄ )0T < ε,
where m is sufficiently large and l = {l(1), . . . , l(m)} is the set of learnable parameters with l(1) to be the parameters for the first model, l(2) for the second and so on.
Proof. Using Corollary (3.7) with the usual notation and let H ⊂ S(p) be compact and f : H → R continuous. Then for every ε > 0, there exists h ∈ H such that
sup
(BSigp(X)t)t∈[0,T ]∈H
f (BSigp(X)t)t∈[0,T ] − ⟨Sig(X ̄ )T , Ψ(h)⟩ < ε.
By Lemma (3.8), every component of the classical signature of some higher level can be replicated by iteratively applying classical signature model of lower level, e.g., k. Therefore,
⟨Sig(X ̄ )T , Ψ(h)⟩ = Sk
l(m) Sk
l(m−1) . . . Sk
l(1) X ̄ 0T 0T 0T
.
When m is sufficiently large. Then for any h ∈ H , ⟨Sig(X ̄ )T , Ψ(h)⟩ can be recovered by learning the parameters l(1), . . . , l(m). Hence, we conclude the claim and show the algorithm in Figure (3.1). □
Xt : Data X ̄ t S2
l (X ̄ )0t S2
l(m) S2
l(m−1) . . . S2
l(1) X ̄ 0t 0t 0t
Ψ S2
l (·) S2
l (·)
Figure 3.1. Application of Level 2 signature model on extended path X ̄

BRANCHED SIGNATURE MODEL 21
4. Construction of the extended path
In this section, we present a systematic procedure for constructing the extended path X ̄ . For an α-Hölder path X : [0, T ] → Rd, we develop two complementary routes: (i) an analytic specification of integration rules that yields a non-geometric (branched) rough-path enhancement, and (ii) a nonanalytic, data-driven construction learned via a neural network. The subsections below treat each approach in turn.
4.1. Explicit construction. Let X : [0, T ] → Rd be an α-Hölder path with α ∈ 1
4, 1
3 . Set N :=
⌊1/α⌋ = 3; thus only components up to order 3 are relevant. We construct the extended path X ̄ using solely the Hairer–Kelly morphism i.e., fix the Hopf algebra morphism Ψ : (H , ·, ∆) → (T (V), ,  ̄∆)
and define X ̄ so that
Sig(X ̄ )st, ψ(h) = BSig(X)st, h , for all rooted trees h with |h| ≤ 3.
In words, X ̄ is chosen so that its geometric iterated integrals coincide with the ψ-image of the branched signature of X up to level 3. We now describe the resulting level-1, level-2, and level-3 coordinates. To begin with, for level-1, let h = a, where a ∈ S-the alphabet set. Using the definition of the Ψ we have Ψ( a) = a i.e., ⟨BSig(X)st, a⟩ = ⟨Sig(X ̄ )st, a⟩, which gives X ̄ a
t − X ̄ a
s =Xa
t −X a
s . Similarly, for h = b
a, Ψ( b
a) = b
a + a ⊗ b i.e., ⟨BSig(X)st, b
a⟩ = ⟨Sig(X ̄ )st, Ψ( b
a)⟩ = ⟨Sig(X ̄ )st, b
a + a ⊗ b⟩, which gives
X ̄ b
a
t − X ̄ b
a
s=
Zt
s
Z r2
s
dX a
r1 dX b
r2 −
Zt
s
Z r2
s
dX ̄ a
r1 dX ̄ b
r2 .
Now, for h = c
a b, Ψ( c
a b) = c
a b + a ⊗ bc + b ⊗ c
a + a ⊗ b ⊗ c + b ⊗ a ⊗ c, that is
⟨BSig(X)st, c
a b⟩ = ⟨Sig(X ̄ )st, Ψ( c
a b)⟩ = ⟨Sig(X ̄ )st, c
a b + a ⊗ bc + b ⊗ c
a + a ⊗ b ⊗ c + b ⊗ a ⊗ c⟩.
This gives
X ̄ c
ab
t − X ̄ c
ab
s=
Zt
s
Z r2
s
dX a
r1
Z r2
s
dX b
r1 dX c
r2 −
Zt
s
Z r2
s
dX ̄ a
r1 dX ̄ bc
r2 −
Zt
s
Z r2
s
dX ̄ b
r1 dX ̄ c
a
r2
−
Zt
s
Z r3
s
Z r2
s
dX ̄ a
r1 dX ̄ b
r2 dX ̄ c
r3 −
Zt
s
Z r3
s
Z r2
s
dX ̄ b
r1 dX ̄ a
r2 dX ̄ c
r3 .
Finally, for h = bc
a, Ψ( bc
a) = bc
a + a ⊗ bc + b
a ⊗ c + a ⊗ b ⊗ c i.e.,
⟨BSig(X)st, bc
a⟩ = ⟨Sig(X ̄ )st, Ψ( bc
a)⟩ = ⟨Sig(X ̄ )st, bc
a + a ⊗ bc + b
a ⊗ c + a ⊗ b ⊗ c⟩.
So the required component is
X ̄ bc
a
t − X ̄ bc
a
s=
Zt
s
Z r3
s
Z r2
s
dX a
r1 dX b
r2 dX c
r3 −
Zt
s
Z r2
s
dX ̄ a
r1 dX ̄ bc
r2 −
Zt
s
Z r2
s
dX ̄ b
a
r1 dX ̄ c
r2
−
Zt
s
Z r3
s
Z r2
s
dX ̄ a
r1 dX ̄ b
r2 dX ̄ c
r3 .
Hence the extended path X ̄ is
X ̄ = X ̄ a, X ̄ b
a
, X ̄ c
a b , X ̄ bc
a!
a, b, c ∈ S
,
where the path components are constructed explicitly. Next, we will give a couple of examples where this explicit construction works.

BRANCHED SIGNATURE MODEL 22
4.1.1. Multi-dimensional Brownian motion. Let the underlying path X be an d-dimensional Brownian motion B. Since, Brownian motion is α-Hölder for any α < 1
2 so the number of components that actually matter to get the extended path is N = 2. With the help of the previous explicit construction, the components of the extended path are
 ̄B a
t −  ̄B a
s =Ba
t −Ba
s
 ̄B b
a
t −  ̄B b
a
s=
Zt
s
Z r2
s
dB a
r1 dB b
r2 −
Zt
s
Z r2
s
d  ̄B a
r1 d  ̄B b
r2 = − 1
2 [B a
t −Ba
s ,B b
t −Bb
s ],
for a, b ∈ S. Here the iterated integral R t
s
R r2
s dB a
r1 dBrb2 is defined in Itô sense , while R t
s
R r2
s d  ̄B a
r1 d  ̄Brb2
is defined in Stratonovich sense. The term 1
2 [B a
t −Ba
s ,B b
t − Bsb] is nothing but the co-variation of the components of the d-dimensional Brownian motion on the interval [s, t]. Hence, the extended Brownian motion path  ̄B is
 ̄B =  ̄B a,  ̄B b
a
a, b, ∈ S
.
In case of 1-dimensional Brownian motion this reduces to
 ̄Bst =  ̄B a,  ̄B a
a
st
= Ba
t −Ba
s ,−1
2 (t − s) ,
where the second component is nothing but the Itô-Stratonovich correction.
4.1.2. Multi-dimensional fractional Brownian motion. Let the underlying path X be a d-dimensional fractional Brownian motion BH = (BH, a)a∈S with Hurst index H ∈ ( 1
4, 1
3 ] and correlation matrix
ρ = (ρab)a,b∈S , so that Cov(BH, a
t , BH, b
t ) = ρab t2H . Since fBm is α-Hölder for any α < H, the number of components that actually matter to get the extended path is N = 3. With the help of the previous explicit construction, the components of the extended path are
 ̄BH, a
t −  ̄BH, a
s = BH, a
t − BH, a
s,
and
 ̄BH, b
a
t −  ̄BH, b
a
s=
Zt
s
Z r2
s
dBH, a
r1 dBH, b
r2 −
Zt
s
Z r2
s
d  ̄BH, a
r1 d  ̄BH, b
r2
= −1
2 ρab (t2H − s2H ),
for a, b ∈ S. Here the first iterated integral is the canonical (Gaussian/Wick–Skorohod) double integral, while the second is the corresponding Stratonovich/rough integral along  ̄BH , and the difference is the normal-ordering correction determined by the covariance. For third order, write Rac(t, t) = ρac t2H and note ∂tRac(t, t) = 2H ρac t2H−1. Then, for a, b, c ∈ S,
 ̄B
H, bc
a
t −  ̄B
H, bc
a
s=
Zt
s
Z r3
s
Z r2
s
dBH, a
r1 dBH, b
r2 dBH, c
r3
−
Zt
s
Z r2
s
d  ̄BH, a
r1 d  ̄BH, bc
r2 −
Zt
s
Z r2
s
d  ̄BH, b
a
r1 d  ̄BH, c
r2
−
Zt
s
Z r3
s
Z r2
s
d  ̄BH, a
r1 d  ̄BH, b
r2 d  ̄BH, c
r3
= − H ρac
Zt
s
BH, b
r r2H−1 dr,

BRANCHED SIGNATURE MODEL 23
and for the tree h = c
a b,
 ̄BH, c
ab
t −  ̄BH, c
ab
s=
Zt
s
Z r2
s
dBH, a
r1
Z r2
s
dBH, b
r1 dBH, c
r2
−
Zt
s
Z r2
s
d  ̄BH, a
r1 d  ̄BH, bc
r2 −
Zt
s
Z r2
s
d  ̄BH, b
r1 d  ̄BH, c
a
r2
−
Zt
s
Z r3
s
Z r2
s
d  ̄BH, b
r1 d  ̄BH, a
r2 d  ̄BH, c
r3
−
Zt
s
Z r3
s
Z r2
s
d  ̄BH, a
r1 d  ̄BH, b
r2 d  ̄BH, c
r3
= − H ρbc
Zt
s
BH, a
r r2H−1 dr − H ρac
Zt
s
BH, b
r r2H−1 dr.
Hence, the extended fractional Brownian motion path  ̄BH (up to level 3) is
 ̄BH =  ̄BH, a ,  ̄BH, b
a
,  ̄BH, bc
a
,  ̄BH, c
ab
a,b,c∈S
.
In case of 1-dimensional fractional Brownian motion this reduces to
 ̄BH
st = BH
t − BH
s , −1
2 (t2H − s2H ), − H
Zt
s
BH
r r2H−1 dr ,
where the second and third components are the covariance-driven normal-ordering corrections associated with R(t, t) = t2H .
4.2. Data-driven construction learned via a neural network. Because the driving noise of the primary process is unknown i.e., whether it is Brownian motion, fractional Brownian motion, or some other stochastic input, we cannot prescribe in advance how the extended path should be constructed. Instead, we adopt a supervised-learning approach within a neural-network framework. Concretely, we observe a response Y(t) (e.g., the solution of an SDE/CDE/RDE) that is driven by a signal X(t). Learning Y(t) -
directly from the classical (geometric) signature of X(t) may be insufficient, since certain interactions are only captured by branched signatures and are not recoverable from purely geometric features. Rather than constructing a branched signature explicitly, we learn a parametric extension of the primary signal, t 7→ X ̄ θ(t), with X ̄ θ(t) ∈ Rm, where these m latent coordinates are learned to encode the non-geometric information that a branched signature would otherwise carry. Once we have acce-
ss to the neural-network output X ̄ θ(t), we concatenate this with the actual path X(t) and define
 ̄Xθ(t) := (X(t), X ̄ θ(t)) ∈ Rd+m. The reason to concatenate the actual path is to be consistent with the extension map defined in the previous section i.e., the extension given by [Hairer and Kelly, 2015]. After this concatenation, we apply the classical signature of some order k > 1 to this extended path and fit Y(t) from these features. The training is performed with a loss function that is a combination of the physics-informed loss and the shuffle property loss. The physics-informed loss bala-
nces the data fit and is given as
Lphysics−informed(θ, φ) := 1
N
X
ti∈π[0,T ]
Yti − gφ Sigk(  ̄Xθ)0ti
2
, (4.1)
where π[0, T ] is some partition of the interval of consideration and gφ is some predictor function like a linear layer etc. and N is the length of the partition π[0, T ]. Shuffle property loss ensures that the iterated integrals satisfy the integration by parts(shuffle) property. Here we don’t rely on the signature computed via iisignature or signatory as they are always geometric because they use idea of Stratonovich integration. Instead, we compute the integrals using left-hand point Riemann su-
m

BRANCHED SIGNATURE MODEL 24
similar to Itô integration. The corresponding loss function is given as follows
Lshuffle(θ) := 1
N
X
ti∈π[0,T ]
X
j,k∈S ̄
∆X ̄ j
θ(t0, ti)∆X ̄ k
θ (t0, ti)−
Z ti
t0
∆X ̄ j
θ(t0, s)dX ̄ k
θ (s)−
Z ti
t0
∆X ̄ k
θ (t0, s)dX ̄ j
θ (s)
2
,
(4.2) where ∆X ̄ k
θ (t0, ti) := X ̄ k
θ (ti) − X ̄ k
θ (t0), X ̄ k
θ is k-th component of X ̄ θ, and S ̄ is set of cardinality m and
is the alphabet set over the components of X ̄ θ. Also, the integral inside the shuffle loss Lshuffle(θ) is defined as follows
Z ti
t0
∆X ̄ j
θ(t0, s)dX ̄ k
θ (s) =
m
X
l=1
X ̄ j
θ(sl−1) − X ̄ j
θ(s0) X ̄ k
θ (sl) − X ̄ k
θ (sl−1) ,
where the sum is over the partition of [0, ti] i.e., {0 = s0 < s1 < · · · < sm = ti}. With this, the total loss function for the training becomes
L(θ, φ) = λpLphysics−informed(θ, φ) + λsLshuffle(θ),
where λp and λs are weights corresponding to physics-informed loss and shuffle loss respectively. These weights can be chosen wisely to train the model efficiently. Finally, this strategy allows the extended geometric signature Sigk(  ̄Xθ) to emulate the expressive content of a branched signature while remaining trainable end-to-end from data.
5. Numerical Experiments
In this section, we will present an experiment to validate our data-driven construction method of path extension. Our experiments will primarily be related to stock and variance path calibration. The most general form of the volatility model that we will consider for our experiments follows the coupled dynamics as below,



dSt = f1(St, Vt, t) dt + g1(St, Vt, t) dBt,
dVt = f2(St, Vt, t) dt + g2(St, Vt, t) dBt + h(St, Vt, t) dBH
t,
(5.1)
where f1, f2, g1, g2, h : R2 × [0, ∞) → R are sufficiently smooth functions. Here St shows the asset price process while Vt is the variance process and their combined dynamics is driven by the process (t, B, BH ), where B is the Brownian motion and BH is the fractional Brownian motion with Hurst parameter H. In practice, the asset price process and the variance process are typically correlated. In Eq. (5.1), this dependence is built by introducing the same Brownian motion term B. Moreover, the dep-
endence of Vt on St is a particular instance of volatility model where (spot) volatility depends on the past of the price trajectory. Such type of path dependent volatility models are considered in [Guyon and Lekeufack, 2023]. If the fractional Brownian motion BH is replaced by another independent Brownian motion  ̄B then we recover many classical models-e.g., the Stein-Stein Model [Stein and Stein, 1991], the Heston model [Heston, 1993], the Bergomi model [Bergomi, 2005] etc. However, there are m-
any rough volatility models where fractional Brownian motion BH appears and drives the variance process. For example, when there is no Brownian term in the dynamics of Vt i.e., g2 = 0, we recover the rough Heston model [El Euch and Rosenbaum, 2019], the rough Bergomi model [Bayer et al., 2016], the quadratic rough Heston model [Gatheral et al., 2020] etc. For our numerical experiments we consider the following rough volatility model

  
  
dSt
St
= −1
2 λ1
a2 (Vt − a) Vtb
pa (Vt − a)2 + a + a (Vt − a)2 + a
!
dt + λ2 a (Vt − a)2 + a dBt,
dVt = λ1 (a(1 + Vt) dt) + λ2 a V b
t dBt + a V b
0 dBH
t,
(5.2)
where λ1 and λ2 are chosen to put selective weights on the corresponding terms. The choice of this volatility model is inspired by [Bonesini et al., 2024]. In particular, the term inside the square root

BRANCHED SIGNATURE MODEL 25
is borrowed from the quadratic rough Heston model [Gatheral et al., 2020], the dynamics of variance path is similar to one studied in [Jones, 2003] except we have fractional Brownian motion instead of another correlated Brownian motion etc. After the model selection, we discuss the numerical simulation, learning of the extension map and calibration in the subsequent subsections.
5.1. Simulation. To simulate the price and variance process, we select the parameters in the model to be a = 0.1, b = 3.0, λ1 = 0.0001, and λ2 = 3.0. This particular choice of λ1 and λ2 is made to put less weight on the drift term and more on the noise term. We simulate paths of Brownian motion Bt and fractional Brownian motion BtH with Hurst parameter H = 0.1 of a length N with N = 1000 on the interval [0, 1]. Fractional Brownian motion path is simulated using Davies-Harte method [Davies and Hart-
e, 1987] and the choice of Hurst parameter is motivated by the study done in [Gatheral et al., 2022]. Furthermore, we use simple Euler-Maruyama scheme to simulate the price and variance path i.e., after fixing S0 = 1 and V0 = 0.8, we run the following for n = 0, 1, · · · , N − 1.
(Sn+1 = Sn + f1(Sn, Vn, tn) ∆t + g1(Sn, Vn, tn) ∆Bn+1,
Vn+1 = Vn + f2(Sn, Vn, tn) ∆t + g2(Sn, Vn, tn) ∆Bn+1 + h(Sn, Vn, tn) ∆BH
n+1,
where tn = n ∆t, ∆Bn+1 := Bn+1 − Bn, ∆BnH+1 := BnH+1 − BnH and the functions f1, f2, g1, g2 and h are already defined in Eq. (5.2).
5.2. Learning the extension map. To learn the extended path t 7→ X ̄ θ(t), we set  ̄Xθ(t) :=
(X(t), X ̄ θ(t)), where the coordinates corresponding to the extended path X ̄ θ(t) are produced by a
multi-layer perceptron (MLP) X ̄ θ(t) : R3 → Rm as a function of the X(t). In our implementation,
X ̄ θ(t) uses six hidden layers with widths 512–256–128–64–32–16, tanh activations throughout, and output dimension m = 9. Prediction proceeds sequentially via layer-wise signature models i.e., rather than forming a single high-depth signature (which would be computationally expensive as we discussed in subsection 3.2), we apply a depth-N1 = 2 signature model to the features (X(t), X ̄ θ(t))[0,t]
and map it through a linear layer to an scalar Xbt; we then augment the true input path with this output from the signature model, apply a second depth-N2 = 2 signature model of (X, Xb)[0,t], and
pass it through a second linear layer to obtain Vbt, our estimate of the target volatility Vt. The training process minimizes a cost function that is a linear combination of a pathwise calibration loss (4.1) and a shuffle product loss (4.2). Here Vbti is given by the term Sigk(  ̄Xθ)0ti where one signature model of level-k is replaced by two signature models of each level-2 combined with two linear layers. At each partition time ti, we pass the current input through the multilayer perceptron, then-
 through the signature models and linear layers. The signature is computed on the prefix path, with previously observed values retained so the model explicitly incorporates the history of the data. Finally, we optimize the total loss L using Adams (initial step size 10−2 with step decay). The loss corresponding to each epoch is shown in Figure 5.1 for number of epochs to be 2000. Backpropagation is performed on all the learnable parameters. Evaluation is performed by a full sequential pass, report-
ing the path-wise MSE i.e., 1
N +1
PN
i=0(Vbti − Vti)2 and the terminal shuffle product residual on the learned extension. The shuffle product residual matrix corresponding to all the components is shown in Figure 5.2.

BRANCHED SIGNATURE MODEL 26
Figure 5.1. Left: calibration (path) loss per epoch. Right: shuffle-product residual loss per epoch. The right panel’s vertical axis is shown on a base-10 logarithmic scale.
Figure 5.2. Shuffle product residual matrix. Each cell (i, j) displays Rij =
∆Xi∆Xj − R T
0 Xi dXj + R T
0 Xj dXi on the plotted interval. Color encodes sign
and magnitude red for positive, blue for negative and white near to 0; rows/columns are coordinate indices i and j. Near-white regions indicate good numerical adherence to the identity, while darker patches show where deviations are large. Final shuffle product MSE mean over all components is 6.1158 × 10−3.
5.3. Calibration. To assess the performance of the learned extension to calibrate the underlying path that was used for training i.e., the variance path, we stop the further training of the network at certain epochs (say 1000) and assume that we recovered the appropriate parameters θ∗. We denote the learned extension by X ̄ θ∗(t) and concatenate it with the actual path as before to get
 ̄Xθ∗(t) = (X(t), X ̄ θ∗(t)). To extract the features from this extended path, we apply a signature of depth 2, fit a linear regression (with intercept) to calibrate the observed volatility Vt and record the MSE. As a baseline, we repeat the same procedure using signature of the original path X(t) (without the learned extension). We report the mean-squared-error MSE in this case too. Figure 5.3a shows both the full-path fits and zoomed-in windows, where the extended model consistently tracks local-
 fluctuations more accurately than the baseline model i.e., the one without the extension. Similarly, the price path St is also regressed against the actual path X(t) and one with extension
 ̄Xθ∗(t) = (X(t), X ̄ θ∗(t)) and MSE is recorded in both cases. In Figure 5.3b, both the global fits and the zoomed panels demonstrate that the extended model consistently follows local movements more closely than the baseline model i.e., the one without the extension.

BRANCHED SIGNATURE MODEL 27
(a) True vs. calibrated volatility V (t) using signatures with and without the learned extension. The inset provides a zoomed view that highlights the finer discrepancies between the two calibrated paths. Reported errors corresponding to with and without extension are MSE = 2.0752 × 10−2 and MSE = 8.0134 × 10−2 respectively.
(b) True vs. calibrated stock path S(t) using signatures with and without the learned extension. The inset provides a zoomed view that highlights the finer discrepancies between the two calibrated paths. Reported errors corresponding to with and without extension are MSE = 8.8201 × 10−4 and MSE = 3.5401 × 10−3 respectively.
References
[Abe, 2004] Abe, E. (2004). Hopf algebras, volume 74. Cambridge university press. [Armstrong et al., 2022] Armstrong, J., Brigo, D., Cass, T., and Rossi Ferrucci, E. (2022). Non-geometric rough paths on manifolds. Journal of the London Mathematical Society, 106(2):756–817.
[Arribas, 2018] Arribas, I. P. (2018). Derivatives pricing using signature payoffs. arXiv preprint arXiv:1809.09466. [Bank et al., 2024] Bank, P., Bayer, C., Hager, P. P., Riedel, S., and Nauen, T. (2024). Stochastic control with signatures. arXiv preprint arXiv:2406.01585.
[Baudoin, 2004] Baudoin, F. (2004). An introduction to the geometry of stochastic flows. World Scientific. [Bayer et al., 2016] Bayer, C., Friz, P., and Gatheral, J. (2016). Pricing under rough volatility. Quantitative Finance, 16(6):887–904. [Bayer et al., 2023] Bayer, C., Hager, P. P., Riedel, S., and Schoenmakers, J. (2023). Optimal stopping with signatures. The Annals of Applied Probability, 33(1):238–273.
[Belkin and Niyogi, 2003] Belkin, M. and Niyogi, P. (2003). Laplacian eigenmaps for dimensionality reduction and data representation. Neural computation, 15(6):1373–1396. [Bergomi, 2005] Bergomi, L. (October 2005). Smile dynamics II. Risk. [Biagini et al., 2008] Biagini, F., Hu, Y., Øksendal, B., and Zhang, T. (2008). Stochastic calculus for fractional Brownian motion and applications. Springer Science & Business Media. [Bonesini et al., 2024] Bonesini, O., Ferrucci, E., Gasteratos, I., and Jacqui-
er, A. (2024). Rough differential equations for volatility. arXiv preprint arXiv:2412.21192.
[Brouder, 2004] Brouder, C. (2004). Trees, renormalization and differential equations. BIT Numerical Mathematics, 44(3):425–438. [Bruned, 2022] Bruned, Y. (2022). Renormalisation from non-geometric to geometric rough paths. In Annales de l’Institut Henri Poincare (B) Probabilites et statistiques, volume 58, pages 1078–1090. Institut Henri Poincaré.
[Chen, 1954] Chen, K.-T. (1954). Iterated integrals and exponential homomorphisms. Proceedings of the London Mathematical Society, 3(1):502–512.
[Chevyrev and Kormilitzin, 2016] Chevyrev, I. and Kormilitzin, A. (2016). A primer on the signature method in machine learning. arXiv preprint arXiv:1603.03788.
[Chevyrev et al., 2018] Chevyrev, I., Nanda, V., and Oberhauser, H. (2018). Persistence paths and signature features in topological data analysis. IEEE transactions on pattern analysis and machine intelligence, 42(1):192–202.
[Connes and Kreimer, 1999] Connes, A. and Kreimer, D. (1999). Hopf algebras, renormalization and noncommutative geometry. In Quantum field theory: perspective and prospective, pages 59–109. Springer.
[Cuchiero et al., 2025] Cuchiero, C., Gazzani, G., Möller, J., and Svaluto-Ferro, S. (2025). Joint calibration to spx and vix options with signature-based models. Mathematical Finance, 35(1):161–213. [Cuchiero et al., 2023] Cuchiero, C., Gazzani, G., and Svaluto-Ferro, S. (2023). Signature-based models: theory and calibration. SIAM journal on financial mathematics, 14(3):910–957.
[Davies and Harte, 1987] Davies, R. B. and Harte, D. S. (1987). Tests for hurst effect. Biometrika, 74(1):95–101. [El Euch and Rosenbaum, 2019] El Euch, O. and Rosenbaum, M. (2019). The characteristic function of rough heston models. Mathematical Finance, 29(1):3–38.
[Fefferman et al., 2016] Fefferman, C., Mitter, S., and Narayanan, H. (2016). Testing the manifold hypothesis. Journal of the American Mathematical Society, 29(4):983–1049.
[Friz and Hairer, 2014] Friz, P. K. and Hairer, M. (2014). A course on rough paths. Springer. [Friz and Victoir, 2010] Friz, P. K. and Victoir, N. B. (2010). Multidimensional Stochastic Processes as Rough Paths: Theory and Applications. Cambridge Studies in Advanced Mathematics. Cambridge University Press.

BRANCHED SIGNATURE MODEL 28
[Gatheral et al., 2022] Gatheral, J., Jaisson, T., and Rosenbaum, M. (2022). Volatility is rough. In Commodities, pages 659–690. Chapman and Hall/CRC. [Gatheral et al., 2020] Gatheral, J., Jusselin, P., and Rosenbaum, M. (2020). The quadratic rough heston model and the joint s&p 500/vix smile calibration problem. arXiv preprint arXiv:2001.01789. [Graham, 2013] Graham, B. (2013). Sparse arrays of signatures for online character recognition. arXiv preprint arXiv:1308.0371.
[Gubinelli, 2010] Gubinelli, M. (2010). Ramification of rough paths. Journal of Differential Equations, 248(4):693–721. [Guyon and Lekeufack, 2023] Guyon, J. and Lekeufack, J. (2023). Volatility is (mostly) path-dependent. Quantitative Finance, 23(9):1221–1258. [Hairer and Kelly, 2015] Hairer, M. and Kelly, D. (2015). Geometric versus non-geometric rough paths. In Annales de l’IHP Probabilités et statistiques, volume 51, pages 207–251.
[Hambly and Lyons, 2010] Hambly, B. and Lyons, T. (2010). Uniqueness for the signature of a path of bounded variation and the reduced path group. Annals of Mathematics, pages 109–167. [Heston, 1993] Heston, S. L. (1993). A closed-form solution for options with stochastic volatility with applications to bond and currency options. The review of financial studies, 6(2):327–343. [Jones, 2003] Jones, C. S. (2003). The dynamics of stochastic volatility: evidence from underlying and options markets. Jour-
nal of econometrics, 116(1-2):181–224.
[Kalsi et al., 2020] Kalsi, J., Lyons, T., and Arribas, I. P. (2020). Optimal execution with rough path signatures. SIAM Journal on Financial Mathematics, 11(2):470–493.
[Kidger et al., 2019] Kidger, P., Bonnier, P., Perez Arribas, I., Salvi, C., and Lyons, T. (2019). Deep signature transforms. Advances in neural information processing systems, 32.
[Kidger and Lyons, 2020] Kidger, P. and Lyons, T. (2020). Signatory: differentiable computations of the signature and logsignature transforms, on both cpu and gpu. arXiv preprint arXiv:2001.00706. [Levin et al., 2013] Levin, D., Lyons, T., and Ni, H. (2013). Learning from the past, predicting the statistics for the future, learning an evolving system. arXiv preprint arXiv:1309.0260. [Lyons and Victoir, 2004] Lyons, T. and Victoir, N. (2004). Cubature on wiener space. Proceedings of the Royal Socie-
ty of London. Series A: Mathematical, Physical and Engineering Sciences, 460(2041):169–198.
[Lyons, 1998] Lyons, T. J. (1998). Differential equations driven by rough signals. Revista Matemática Iberoamericana, 14(2):215–310. [Lyons et al., 2007] Lyons, T. J., Caruana, M., and Lévy, T. (2007). Differential equations driven by rough paths: Ecole d’Eté de Probabilités de Saint-Flour XXXIV-2004. Springer.
[Manchon, 2008] Manchon, D. (2008). Hopf algebras in renormalisation. Handbook of algebra, 5:365–427. [Pope et al., 2020] Pope, P., Zhu, C., Abdelkader, A., Goldblum, M., and Goldstein, T. (2020). The intrinsic dimension of images and its impact on learning. In International Conference on Learning Representations.
[Reizenstein and Graham, 2018] Reizenstein, J. and Graham, B. (2018). The iisignature library: efficient calculation of iterated-integral signatures and log signatures. arXiv preprint arXiv:1802.08252. [Roweis and Saul, 2000] Roweis, S. T. and Saul, L. K. (2000). Nonlinear dimensionality reduction by locally linear embedding. science, 290(5500):2323–2326. [Schmidhuber, 2012] Schmidhuber, J. (2012). Multi-column deep neural networks for image classification. In Proceedings of the 2012 IEEE Conferen-
ce on Computer Vision and Pattern Recognition (CVPR), pages 3642–3649.
[Stein and Stein, 1991] Stein, E. M. and Stein, J. C. (1991). Stock price distributions with stochastic volatility: an analytic approach. The review of financial studies, 4(4):727–752. [Tapia and Zambotti, 2020] Tapia, N. and Zambotti, L. (2020). The geometry of the space of branched rough paths. Proceedings of the London Mathematical Society, 121(2):220–251.
[Tenenbaum et al., 2000] Tenenbaum, J. B., Silva, V. d., and Langford, J. C. (2000). A global geometric framework for nonlinear dimensionality reduction. science, 290(5500):2319–2323. [Zhang et al., 2022] Zhang, S., Lin, G., and Tindel, S. (2022). Two-dimensional signature of images and texture classification. Proceedings of the Royal Society A, 478(2266):20220346.

---

## Processing Information

- **Processing Library:** Zotero PDFWorker
- **Processing Date:** 2026-02-10T18:14:57.948Z
- **Text Length:** 89683 characters
- **Success:** Text extraction completed
- **PDF Library Used:** Zotero PDFWorker
- **Pages Processed:** 28 of 28
