# PDF Document: Wang et al. - 2025 - On the Total Positivity of Contingency Metamatrices.pdf

**File Path:** Wang et al. - 2025 - On the Total Positivity of Contingency Metamatrices.pdf

**Processed Date:** 2026-02-10T18:18:46.754Z

**File Size:** 138.34 KB

**Total Pages:** 10

**Extracted Pages:** 10

**PDF Library:** Zotero PDFWorker

**Attachment Item ID:** 2807

**Title:** On the Total Positivity of Contingency Metamatrices

**Collection:** Large Files

---

## Extracted Text Content

arXiv:2503.02213v1 [math.CO] 4 Mar 2025
ON THE TOTAL POSITIVITY OF CONTINGENCY METAMATRICES
ZHENTAO WANG, JIAWEN XIE AND XUHANG ZHANG
Abstract. M. Kapranov and V. Schechtman introduced the contingency metamatrix for a finite Coxeter group and conjectured that the contingency metamatrix is totally positive. For the Coxeter groups of type A, this conjecture has been proved by P. Etingof. In this article, we prove this conjecture for the Coxeter groups of type B and exceptional types.
1. Introduction
In [KS], M. Kapranov and V. Schechtman constructed a refinement of the natural stratification of Cn/Sn according to the patterns of real parts and imaginary parts. The numbers of strata of different bi-degrees of this stratification form the so-called contingency metamatrix
M = (Mpq)0≤p,q≤n−1,
where the number Mpq of strata of bi-degree (p, q) is given by
Mpq = ∑
|α|=p,|β|=q
|Sα\Sn /Sβ |.
Here, Sn = 〈s1, . . . , sn−1|s2
i = (sisi+1)3 = (sisj)2 = 1, ∀|i − j| > 1〉 is the symmetric group and Sα and Sβ are parabolic subgroups of Sn, where α, β ⊂ {s1, . . . , sn−1} are of cardinalities p and q, respectively. A striking result, due to P. Etingof [KS, Appendix, Corollary A.13], shows that the contingency metamatrix is totally positive. M. Kapranov and V. Schechtman conjectured that total positivity holds for any real reflection group W , not only for type A (i.e., W = Sn):
Conjecture 1.0.1 (M. Kapranov, V. Schechtman). Let (W, S) be a finite Coxeter group of rank |S| = n. Then the metamatrix M (W ) = (Mpq)0≤p,q≤n,
Mpq = ∑
I ,J ⊂S,|I |=p,|J |=q
|WI\W/WJ |
is totally positive, where WI and WJ are parabolic subgroups of W of type I and J, respectively.
Via private communication with M. Finkelberg, we are informed that I. Ukraintsev proved the conjecture for the Coxeter groups whose ranks are no more than 3. In this article, we proved the conjecture for type B and exceptional types. Namely,
Theorem 1.0.2. Let (W, S) be of type Bn or of exceptional type, then the metamatrix M(W ) is totally positive.
Roughly speaking, we follow the method of P. Etingof for type A to give a proof for type B. We first show that there is a bijection between the set of double parabolic cosets and the set of signed contingency matrices. Then we compute the number of generalized
1

signed contingency matrices, which helps us to compute the number of signed contingency matrices. Finally, we show the total positivity of the metamatrices via Whitney’s theorem[C]. For exceptional types, we verify the conjecture using computational methods.
2. Proof For Type B
Let (W, S) be the Coxeter group of type B
n
, where S := {s
1
,s
2
,...,s
n
} is the set of simple reflections. We have the following relations:
(s
i
s
i+1
)
3
=1, if 0 ≤ i < n − 2,
(s
n−1
s
n
)
4
=1,
(s
i
s
j
)
2
=1, if |i − j| > 1.
2.1. Double cosets by parabolic subgroups. Let E
ij
be the matrix with the (i, j)-entry being 1 and the other entries being 0. We have a useful combinatorial description of W :
Lemma 2.1.1. [BB, Section 8.1] There is a faithful representation of W on R
n
φ : W ֒→ GL
n
(R),
defined by
φ(s
i
) =I
n
−E
ii
−E
i+1,i+1
+E
i,i+1
+E
i+1,i
, 1 ≤ i < n,
φ(s
n
) =I
n
− 2E
nn
.
In the following, we identify W with φ(W ).
Remark 2.1.2. By this lemma, we can give a concrete description (see Proposition 2.1.8) of the parabolic double coset W
I
\W/W
J
, where I, J ⊂ S. Although the proof is a little technical, the underlying idea is very simple and direct. Before going into the rigorous description, we first give an informal account. For 0 < i < n, the left (resp. right) action of s
i
on W ⊂ GL
n
(R) changes the i-th row (resp. column) and (i + 1)-st row (resp. column) of the matrices. So we can identify these two rows (resp. columns) if we take the quotient by s
i
from the left (resp. right). Similarly, the left (resp. right) action of s
n
changes the sign of elements in the last row (resp. column). Hence, once we take the quotient by s
n
from the left (resp. right), we can ignore the sign of elements in the last row (resp. column). Using this observation, we can obtain a useful description for the set W
I
\W/W
J
.
Notation 2.1.3. The set of signed numbers is
S := {(a
+
,a
−
):a
+
,a
−
∈Z
≥0
}.
Let a = (a
+
,a
−
) ∈ S, we denote by |a| := a
+
+a
−
the absolute value of a.
Definition 2.1.4 (margin conditions). A margin condition of n of length p is a pair α = (α ̃, λ
α
), where (α ̃, λ
α
) is • either α ̃ is an ordered partition of n of length p, λ
α
= 0; • or α ̃ is an ordered partition of n of length p + 1, λ
α
= 1. We denote the length of α by |α|.
Proposition 2.1.5. There is a natural bijection
{subset I of S, |I| = p}
∼
−→ {margin condition α of n of length n − p }.
2

Proof. For I ⊂ S, let α ̃ be the unique partition of n, such that i and i + 1 lie in the same part if and only if si ∈ I, for 1 ≤ i ≤ n − 1; let λα = |I ∩ sn|. Then the bijection sends I to (α ̃, λα). On the other hand, for (α ̃, λα) a margin condition of n, then si lies in the corresponding subset I if and only if i and i + 1 lie in the same part of α ̃, for 1 ≤ i ≤ n − 1; and sn ∈ I if and only if λα = 1.
Definition 2.1.6 (signed contingency matrix). Let α = (α ̃, λα), β = (β ̃, λβ) be two margin conditions of n of length p, q, respectively. The set of signed contingency matrices with margins (α, β) is (1) λα = 0, λβ = 0 :
SCMn(α, β) := {A ∈ Matp,q(S) : ∑
j
|aij| = αi, ∑
i
|aij| = βj}.
(2) λα = 1, λβ = 0 :
SCMn(α, β) := {A ∈ Matp+1,q(S) : ∑
j
|aij| = αi, ∑
i
|aij| = βj, a−
p+1,j = 0}.
(3) λα = 0, λβ = 1 :
SCMn(α, β) := {A ∈ Matp,q+1(S) : ∑
j
|aij| = αi, ∑
i
|aij| = βj, a−
i,q+1 = 0}.
(4) λα = 1, λβ = 1 :
SCMn(α, β) := {A ∈ Matp+1,q+1(S) : ∑
j
|aij| = αi, ∑
i
|aij| = βj, a−
p+1,j = a−
i,q+1 = 0}.
For given lengths p and q, let us denote
SCMn(p, q) := ⋃
|α|=p,|β|=q
SCMn(α, β).
Definition 2.1.7. (1) Fix a margin condition α, a colored signed ordered partition of n of type α is an ordered set v = (v1, · · · , v|α ̃|) of sets, where vi is a subset of {1, . . . , n} × {±} of cardinality α ̃i, such that under the projection
p : {1, . . . , n} × {±} → {1, . . . , n}, (a, sign) 7→ a,
{p(vi)}1≤i≤|α ̃| forms a disjoint decomposition of {1, . . . , n}. (2) Fix margin conditions α and β , a colored double signed contingency matrix of n of margin (α, β) is a matrix A = (Aij)1≤i≤|α ̃|,1≤j≤|β ̃|, where Aij is a subset of {1, . . . , n} × {±} × {±}, such that under the projections
p1 : {1, . . . , n} × {±} × {±} → {1, . . . , n} × {±}, (a, sign1, sign2) 7→ (a, sign1),
p2 : {1, . . . , n} × {±} × {±} → {1, . . . , n} × {±}, (a, sign1, sign2) 7→ (a, sign2),
(∪jp1(A1j), . . . , ∪jp1(A|α ̃|j)) forms a colored signed ordered partition of n of type α and (∪ip2(Ai1), . . . , ∪ip2(Ai|β ̃|) forms a colored signed ordered partition of n of type β.
3

Proposition 2.1.8. Fix two subsets I and J of S, there is a natural bijection
WI \W/WJ
−∼→ SCMn(αI , βJ ).
Proof. Let W act diagonally on W/WI × W/WJ by w′ · (w1WI , w2WJ ) = (ww1WI , ww2WJ ). There is a bijection of sets
W \(W/WI × W/WJ ) −→ WI \W/WJ W (w1WI , w2WJ ) 7→ WI w−1
1 w2WJ .
By the matrix interpretation of W , W/WI can be interpreted as the set of colored signed ordered partitions of n of type αI. Under this interpretation, W/WI ×W/WJ has a canonical bijection to the set Cn(αI, βJ ) of colored double signed contingency matrix of n of margin (αI , βJ ):
Cn(αI , βJ ) −→ W/WI × W/WJ , A 7→ ((∪jp1(A1j), . . . ), (∪ip2(Ai1), . . . )).
Therefore we have
SCMn(αI, βJ ) = W \Cn(αI, βJ ) = W \(W/WI × W/WJ ) = WI \W/WJ .
Remark 2.1.9. Via private communication with M. Finkelberg, we are informed that I. Ukraintsev also independently found the above description of the double cosets WI\W/WJ .
By Proposition 2.1.8, we have another description of the entry of contingency metamatrix
Mpq = |SCMn(n − p, n − q)|.
2.2. Calculate the metamatrix. Signed contingency matrices can also be characterized as matrices with every row and column being nonzero with some extra conditions. Removing the restriction that every row and column cannot be zero, we have the following definition.
Definition 2.2.1. (generalized signed contingency matrices) The set of generalized signed contingency matrices is defined as
GSCMn(p, q) := ⋃
0≤i,j≤1
GSCMi,j
n (p, q),
where
GSCM0,0
n (p, q) := {A ∈ Matp,q(S) : ∑
i,j
|aij| = n};
GSCM1,0
n (p, q) := {A ∈ Matp+1,q(S) : ∑
i,j
|aij| = n, a−
p+1,j = 0, ∑ j
a+
p+1,j > 0};
GSCM0,1
n (p, q) := {A ∈ Matp,q+1(S) : ∑
i,j
|aij| = n, a−
i,p+1 = 0, ∑ i
a+
i,q+1 > 0};
GSCM1,1
n (p, q) :=
{A ∈ Matp+1,q+1(S) : ∑
i,j
|aij| = n, a−
p+1,j = a−
j,q+1 = 0, ∑ j
a+
p+1,j > 0, ∑ i
a+
i,q+1 > 0}.
There are several facts via combinatorial methods.
4

Fact 2.2.2. (1) The cardinalities of generalized signed contingency matrices GSCMλ,μ
n (p, q) (λ, μ ∈ {0, 1}) are
|GSCM0,0
n (p, q)| =
n
∑
a=0
(a + pq − 1 a
)(n − a + pq − 1 n−a
)
,
|GSCM1,0
n (p, q)| =
n
∑
a=0
(a + (p + 1)q − 1 a
)(n − a + pq − 1 n−a
)
−
n
∑
a=0
(a + pq − 1 a
)(n − a + pq − 1 n−a
)
,
|GSCM0,1
n (p, q)| =
n
∑
a=0
(a + (q + 1)p − 1 a
)(n − a + pq − 1 n−a
)
−
n
∑
a=0
(a + pq − 1 a
)(n − a + pq − 1 n−a
)
,
|GSCM1,1
n (p, q)| =
n
∑
a=0
(a + (p + 1)(q + 1) − 1 a
)(n − a + pq − 1 n−a
)
−
n
∑
a=0
(a + p(q + 1) − 1 a
)(n − a + pq − 1 n−a
)
−
n
∑
a=0
(a + (p + 1)q − 1 a
)(n − a + pq − 1 n−a
)
+
n
∑
a=0
(a + pq − 1 a
)(n − a + pq − 1 n−a
)
.
(2)
|GSCMn(p, q)| =
n
∑
a=0
(a + (p + 1)(q + 1) − 1 a
)(n − a + pq − 1 n−a
)
.
(3) The relation between |SCMn(p, q)| and |GSCMn(p, q)| is characterized by the following formula:
|GSCMλ,μ
n (p, q)| = ∑
0≤i≤p,0≤j≤q
(p
i
)(q
j
)
|SCMλ,μ
n (p, q)|,
where 0 ≤ λ, μ ≤ 1. (4)
|GSCMn(p, q)| = ∑
0≤i≤p,0≤j≤q
(p
i
)(q
j
)
|SCMn(p, q)|,
2.3. Total positivity. The key observation to prove the total positivity is the following proposition.
Proposition 2.3.1. (1) The matrix L = (Lpq)0≤p,q≤n := (|GSCMn(p, q)|)0≤p,q≤n can be decomposed as:
L = V · D · tV,
5

where
V = ((i + 1
2 )j)0≤i,j≤n
is a Vandermonde matrix and
D = diag(d(n, 0), d(n, 1), . . . , d(n, n))
is a diagonal matrix with every d(n, i) being positive. (2) Q := P −1 · V is upper triangular, where P = ((i
j
))0≤i,j≤n.
Proof. (1) By the proposition below, there exists some constants ck for 0 ≤ k ≤ n, such that
Lpq =
n
∑
k=0
ck(p + 1
2 )k(q + 1
2 )k,
which implies the statement. (2) It is equivalent to show that
p
∑
i=0
(−1)p−i
(p
i
)
(i − 1
2 )k = 0
for any k < p, which follows from the fact that the Stirling number of the second kind
S(k, p) = 1
p!
p
∑
i=1
(−1)p−i(p
i
)ik = 0 if p > k.
Proposition 2.3.2.
n
∑
a=0
(a + (p + 1)(q + 1) − 1 a
)(n − a + pq − 1 n−a
)
=1
n!
n
∏
i=1
(2pq + p + q + i).
We need the following lemmas to prove the above proposition.
Lemma 2.3.3. For any n, k ∈ Z>0,
k
∑
i=0
(−1)i
(n
i
)(n + k − 1 − i k−i
)
= 0.
Proof. By induction on n and k. More precisely, we can deduce the case of (n, k) by the cases of (n − 1, k − 1), (n, k − 1) and (n − 1, k).
Lemma 2.3.4. For any n, k ∈ Z>0,n ≥ k, x ∈ C,
k
∑
i=0
(−1)ii!
(n
i
)(k
i
)
(
n−1−i
∏
j=0
(x + k + j)) =
n−1
∏
j=0
(x + j).
Proof. It is equivalent to prove that x = 0, −1, . . . , −k + 1 are the roots of the left-hand side of the equation. This follows from the previous lemma.
6

Proof of Proposition 3.3.2. Let u = (p + 1
2 )(q + 1
2) + 1
4, v = 1
2 (p + q), then
n
∑
a=0
(a + (p + 1)(q + 1) − 1 a
)(n − a + pq − 1 n−a
)
=1
n!
n
∑
a=0
(n
a
)
(
a
∏
k=1
(u + v + k − 1))(
n−a
∏
l=1
(u − v + l − 1)).
Define the right-hand side of the above equation as g(u, v). Suppose
g(u, v) =
n
∑
i=0
gi(u)vi.
We have the equation
g(u, u) = 1
n!
n
∏
k=1
(2u + k − 1).
For any t ∈ Z and 0 ≤ t ≤ n − 1, using Lemma 2.3.4 we get
g(u, u + t) = 1
n!
t+1
∑
n−a=0
(n
a
)
(
a
∏
k=1
(2u + k − 1 + t))(
n−a
∏
l=1
(l − 1 − t))
=1
n!
n
∏
k=1
(2u + k − 1).
g(u, −u − t) = 1
n!
t+1
∑
a=0
(n
a
)
(
a
∏
k=1
(k − 1 − t))(
n−a
∏
l=1
(2u + l − 1 + t))
=1
n!
n
∏
k=1
(2u + k − 1).
Fix u ∈ C, define hu(v) = g(u, v), the degree of h is not greater than n. However, we have
hu(u) = hu(u + i) = hu(−u − i)
for any i ∈ Z, 0 ≤ i ≤ n − 1. Therefore, for u 6= −n + 1, −n + 2 . . . , n − 1, hu is a constant.
g(u, v) = hu(v) = hu(u) = 1
n!
n
∏
k=1
(2u + k − 1).
Since g is a continuous function, we get
g(u, v) = 1
n!
n
∏
k=1
(2u + k − 1).
for all u, v ∈ C. Using u = (p + 1
2 )(q + 1
2) + 1
4, v = 1
2(p + q), we get the desired formula in the proposition.
Proof of Theorem1.0.2. We have
L = V · D · tV = P · M · tP,
7

thus
M = Q · D · tQ,
which gives the Gauss decomposition of M. Note that the Vandermonde matrix V is totally positive and
V =P ·Q
gives the (opposite) Gauss decomposition of V , we conclude by Whitney’s theorem[C].
Remark 2.3.5. The above Gauss decomposition of M is similar to [KS, Proposition A.6.]. In fact, for types A and B, the Gauss decomposition of the metamatrix M(W ) has a uniform description
M(W ) = 1
|W |
tQ(W ) · D(W ) · Q(W ).
We learned the following combinatorial interpretation from Tao Gui. The entries in M(W ) count the two-sided face numbers of T. K. Peterson’s two-sided analog of the Coxeter complex [P], each column of the upper triangular matrix Q(W ) gives the f-vector of the corresponding W -permutohedron of lower ranks of the same type with W , the entries of the diagonal matrix D(W ) compute the betti numbers of the complement of the complexified Coxeter arrangement of type W . It is interesting to know wheth-
er there is a conceptional explanation and a type-uniform proof of the above decomposition and whether it can be generalized to other types.
3. Exceptional types
3.1. Strategy for exceptional types. The following proposition is a classical result.
Proposition 3.1.1. Let (W, S) be a finite Coxeter group, I, J be two subsets of S. Let l : W → Z be the length function on W . There is a canonical bijection
WI \W/WJ −→ I W J ,
where
IW J := {w ∈ W : I ⊂ L(w), J ⊂ R(w)},
where
L(w) := {i ∈ S : l(siw) > l(w)},
R(w) := {i ∈ S : l(wsi) > l(w)}.
By this proposition, we have the following corollary,
Corollary 3.1.2.
Mpq = ∑
|I |=p,|J |=q
|IW J | = ∑
i,j
(i
p
)(j
q
)
Nij ,
where
Nij := #{w ∈ W : #L(w) = i, #R(w) = j}.
It is not difficult for computer to go through elements of W , give the matrix N (W ) = (Nij) and calculate M(W ) by N(W ).
8

Remark 3.1.3. The entries Nij in the matrix N (W ) are the two-sided W -Eulerian numbers defined by T. K. Peterson in [P]. There are two kinds of interesting symmetries in these numbers (see [P, Observation 15]):
(3.1.3.1) Nij = Nji and Nij = Nn−i,n−j,
where n is the rank of the Coxeter system (W, S). There is an interesting conjecture by Tao Gui (unpublished) saying that there should be a smooth projective variety X(W ) whose Hodge numbers are given by those Nij’s. That is, after a rotation of 45 degrees, the matrix N(W ) gives the Hodge diamond of X(W ). If this conjecture is true, then the first kind of symmetry in (3.1.3.1) comes from the Hodge symmetry whereas the second kind of symmetry in (3.1.3.1) comes from the Serre duality. Note that -
T. K. Peterson’s generalized Gessel’s conjecture [P, Conjecture 16] asserts that the generating polynomials of the W -Eulerian numbers Nij are γ-positive, which easily implies that each diagonal of the matrix N (W ) is unimodal, a numerical shadow of the hard Lefschetz theorem. As far as we know, Gui’s conjecture is currently unsolved even for type A.
3.2. Results. Contingency metamatrices for exceptional types are all totally positive and they are listed below.
Contingency Metamatrix
I2(m), m ≥ 2
( 2m 2m 1
2m 2m+2 2 1 21
)
H3
( 120 180 62 1 180 288 111 3 62 111 52 3 1 3 31
)
H4
( 14400 28800 17040 2640 1 28800 58560 35520 5764 4 17040 35520 22366 3892 6 2640 5764 3892 772 4 1 4 6 41
)
F4
( 1152 2304 1392 240 1 2304 4800 3072 580 4 1392 3072 2134 460 6 240 580 460 124 4 1 4 6 41
)
E6


51840 155520 172800 86400 18558 1278 1 155520 497520 550800 287100 65124 4830 6 172800 550800 658800 361350 87680 7145 15 86400 287100 361350 211450 55945 5165 20 18558 65124 87680 55945 16650 1834 15 1278 4830 7145 5165 1834 268 6 1 6 15 20 15 6 1


E7

 
2903040 10160640 13789440 9072000 2938320 415800 17642 1 10160640 36126720 49956480 33626880 11211480 1648920 73927 7 13789440 49956480 70640640 48867840 16868580 2598930 124611 21 9072000 33626880 48867840 34960080 12595710 2055820 107265 35 2938320 11211480 16868580 12595710 4794276 843134 49183 35 415800 1648920 2598930 2055820 843134 164334 11231 21 17642 73927 124611 107265 49183 11231 994 7 1 7 21 35 35 21 7 1

 
9

E8

  
696729600 2786918400 4470681600 3657830400 1601268480 357557760 34508640 881760 1 2786918400 11240570880 18207866880 15071616000 6692958720 1522152576 150602304 4006856 8 4470681600 18207866880 29831639040 25032430080 11304830880 2627041536 267654842 7467894 28 3657830400 15071616000 25032430080 21351747648 9839303040 2346581468 247700376 7318836 56 1601268480 6692958720 11304830880 9839303040 4648819998 1144964066 126314765 4008367 70 357557760 1522152576 2627041536 2346581468 1144964066 29398484-
8 34351972 1196498 56 34508640 150602304 267654842 247700376 126314765 34351972 4349062 172685 28 881760 4006856 7467894 7318836 4008367 1196498 172685 8524 8 1 8 28 56 70 56 28 8 1

  
Acknowledgments. This is a project work during the 2024 “Algebra and Number Theory” summer school. We extend our appreciation to the organizers Academy of Mathematics and Systems Science, Chinese Academy of Sciences, and Peking University. We also thank Michael Finkelberg for bringing us to the conjecture of Mikhail Kapranov and Vadim Schechtman. Furthermore, we are grateful to our mentor Ruotao Yang for the comprehensive assistance rendered during the completion of this project. Lastly, we would -
like to express our thanks to Tao Gui for the inspiring combinatorial background and comments for the writing up, and Heng Yang for the help in programming.
References
[BB] A. Bjorner, F. Brenti, Combinatorics of Coxeter Groups, Graduate Texts in Mathematics, No. 231, Springer Verlag, New York-Heidelberg, 2000. [C] Loewner C., On totally positive matrices, Math. Z. 63 (1955), 338–340. [EMUW] B. Elias, S. Makisumi, U. Thiel, G. Williamson, Introduction to Soergel Bimodules, Springer Nature (2020). [H] J. E. Humphreys, Reflection Groups and Coxeter Groups, No. 29. Cambridge university press (1990).
[KS] M. Kapranov, V. Schechtman, Contingency tables with variable margins (with an Appendix by Pavel Etingof ), SIGMA. Symmetry, Integrability and Geometry: Methods and Applications 16 (2020): 062. [P] T. K. Petersen, A two-sided analogue of the Coxeter complex, The Electronic Journal of Combinatorics (2018): P4-64.
10

---

## Processing Information

- **Processing Library:** Zotero PDFWorker
- **Processing Date:** 2026-02-10T18:18:46.754Z
- **Text Length:** 18468 characters
- **Success:** Text extraction completed
- **PDF Library Used:** Zotero PDFWorker
- **Pages Processed:** 10 of 10
